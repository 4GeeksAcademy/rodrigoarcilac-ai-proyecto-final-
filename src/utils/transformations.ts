import type {
  Appointment,
  Claim,
  Clinician,
  CMEReport,
  CMEStatus,
  Location,
} from "../types/healthcore";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function round(value: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

function parseIsoDate(dateString: string): Date | null {
  const date = new Date(`${dateString}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function toDateKey(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function diffCalendarDays(fromDate: Date, toDate: Date): number {
  const utcFrom = Date.UTC(fromDate.getUTCFullYear(), fromDate.getUTCMonth(), fromDate.getUTCDate());
  const utcTo = Date.UTC(toDate.getUTCFullYear(), toDate.getUTCMonth(), toDate.getUTCDate());
  return Math.floor((utcTo - utcFrom) / MS_PER_DAY);
}

function denialRate(claims: Claim[]): number {
  if (claims.length === 0) {
    return 0;
  }
  const deniedCount = claims.filter((claim) => claim.status === "denied").length;
  return round((deniedCount / claims.length) * 100, 2);
}

function noShowRate(appointments: Appointment[]): number {
  if (appointments.length === 0) {
    return 0;
  }
  const noShows = appointments.filter((appointment) => appointment.status === "no_show").length;
  return round((noShows / appointments.length) * 100, 2);
}

function getCycleEndDate(cycleStart: Date): Date {
  const cycleEnd = new Date(cycleStart);
  cycleEnd.setUTCFullYear(cycleEnd.getUTCFullYear() + 1);
  cycleEnd.setUTCDate(cycleEnd.getUTCDate() - 1);
  return cycleEnd;
}

function getPercentComplete(hoursLogged: number, hoursRequired: number): number {
  if (hoursRequired === 0) {
    return 100;
  }
  return round((hoursLogged / hoursRequired) * 100, 1);
}

function getCycleProgressPercent(cycleStart: Date, cycleEnd: Date, asOfDate: Date): number {
  const totalDays = Math.max(1, diffCalendarDays(cycleStart, cycleEnd) + 1);
  const elapsedRaw = diffCalendarDays(cycleStart, asOfDate) + 1;
  const elapsedDays = Math.min(Math.max(elapsedRaw, 0), totalDays);
  return (elapsedDays / totalDays) * 100;
}

function getComplianceStatus(
  clinician: Clinician,
  percentComplete: number,
  cycleStartDate: Date,
  cycleEndDate: Date,
  asOfDate: Date,
): CMEStatus {
  if (clinician.cmeHoursLogged >= clinician.cmeHoursRequired) {
    return "complete";
  }

  const cycleEnded = diffCalendarDays(cycleEndDate, asOfDate) > 0;
  if (cycleEnded) {
    return "overdue";
  }

  const cycleProgress = getCycleProgressPercent(cycleStartDate, cycleEndDate, asOfDate);
  if (percentComplete < cycleProgress - 15) {
    return "at_risk";
  }

  return "on_track";
}

export function calculateDenialRate(claims: Claim[]): number {
  if (claims.length === 0) {
    throw new Error("Claims array cannot be empty");
  }
  return denialRate(claims);
}

export function denialRateByPayer(claims: Claim[]): Record<string, number> {
  const grouped = claims.reduce<Record<string, Claim[]>>((accumulator, claim) => {
    const current = accumulator[claim.payerName] ?? [];
    current.push(claim);
    accumulator[claim.payerName] = current;
    return accumulator;
  }, {});

  return Object.entries(grouped).reduce<Record<string, number>>((accumulator, [payerName, payerClaims]) => {
    accumulator[payerName] = denialRate(payerClaims);
    return accumulator;
  }, {});
}

export function denialRateByLocation(claims: Claim[]): Record<string, number> {
  const grouped = claims.reduce<Record<string, Claim[]>>((accumulator, claim) => {
    const current = accumulator[claim.locationId] ?? [];
    current.push(claim);
    accumulator[claim.locationId] = current;
    return accumulator;
  }, {});

  return Object.entries(grouped).reduce<Record<string, number>>((accumulator, [locationId, locationClaims]) => {
    accumulator[locationId] = denialRate(locationClaims);
    return accumulator;
  }, {});
}

export function flagHighDenialPayers(claims: Claim[], threshold = 8): string[] {
  const rates = denialRateByPayer(claims);
  return Object.entries(rates)
    .filter(([, rate]) => rate > threshold)
    .map(([payerName]) => payerName);
}

export function calculateNoShowCost(
  appointments: Appointment[],
  location: Location,
  weekEndingDate: string,
): number {
  const endDate = parseIsoDate(weekEndingDate);
  if (!endDate) {
    throw new Error("Invalid weekEndingDate");
  }

  const startDate = new Date(endDate);
  startDate.setUTCDate(startDate.getUTCDate() - 6);

  const startKey = toDateKey(startDate);
  const endKey = toDateKey(endDate);

  const total = appointments.reduce((sum, appointment) => {
    if (appointment.locationId !== location.locationId) {
      return sum;
    }
    if (appointment.status !== "no_show") {
      return sum;
    }
    if (appointment.scheduledDate < startKey || appointment.scheduledDate > endKey) {
      return sum;
    }

    return sum + location.averageConsultationFee[appointment.serviceType];
  }, 0);

  return round(total, 2);
}

export function noShowRateByLocation(appointments: Appointment[]): Record<string, number> {
  const grouped = appointments.reduce<Record<string, Appointment[]>>((accumulator, appointment) => {
    const current = accumulator[appointment.locationId] ?? [];
    current.push(appointment);
    accumulator[appointment.locationId] = current;
    return accumulator;
  }, {});

  return Object.entries(grouped).reduce<Record<string, number>>((accumulator, [locationId, locationAppointments]) => {
    accumulator[locationId] = noShowRate(locationAppointments);
    return accumulator;
  }, {});
}

export function flagHighNoShowLocations(appointments: Appointment[], threshold = 20): string[] {
  const rates = noShowRateByLocation(appointments);
  return Object.entries(rates)
    .filter(([, rate]) => rate > threshold)
    .map(([locationId]) => locationId);
}

export function generateCMEReport(clinicians: Clinician[], asOfDate: string): CMEReport[] {
  const asOf = parseIsoDate(asOfDate);
  if (!asOf) {
    throw new Error("Invalid asOfDate");
  }

  return clinicians.map((clinician) => {
    const cycleStartDate = parseIsoDate(clinician.cmeYearStartDate);
    if (!cycleStartDate) {
      throw new Error(`Invalid cmeYearStartDate for clinician ${clinician.clinicianId}`);
    }

    const cycleEndDate = getCycleEndDate(cycleStartDate);
    const hoursRemaining = Math.max(0, clinician.cmeHoursRequired - clinician.cmeHoursLogged);
    const percentComplete = getPercentComplete(clinician.cmeHoursLogged, clinician.cmeHoursRequired);
    const complianceStatus = getComplianceStatus(
      clinician,
      percentComplete,
      cycleStartDate,
      cycleEndDate,
      asOf,
    );

    const licenceExpiryDate = parseIsoDate(clinician.licenceExpiryDate);
    if (!licenceExpiryDate) {
      throw new Error(`Invalid licenceExpiryDate for clinician ${clinician.clinicianId}`);
    }

    return {
      clinicianId: clinician.clinicianId,
      fullName: `${clinician.firstName} ${clinician.lastName}`,
      role: clinician.role,
      locationId: clinician.locationId,
      hoursRequired: clinician.cmeHoursRequired,
      hoursLogged: clinician.cmeHoursLogged,
      hoursRemaining,
      percentComplete,
      daysRemainingInCycle: diffCalendarDays(asOf, cycleEndDate),
      complianceStatus,
      licenceExpiryDate: clinician.licenceExpiryDate,
      licenceDaysRemaining: diffCalendarDays(asOf, licenceExpiryDate),
    };
  });
}

export function getCliniciansAtRisk(clinicians: Clinician[], asOfDate: string): Clinician[] {
  const byId = new Map(clinicians.map((clinician) => [clinician.clinicianId, clinician]));
  const report = generateCMEReport(clinicians, asOfDate);

  return report
    .filter((entry) => entry.complianceStatus === "at_risk" || entry.complianceStatus === "overdue")
    .map((entry) => byId.get(entry.clinicianId))
    .filter((clinician): clinician is Clinician => Boolean(clinician));
}

export function getCliniciansWithExpiringLicences(
  clinicians: Clinician[],
  asOfDate: string,
  daysThreshold = 90,
): Clinician[] {
  const asOf = parseIsoDate(asOfDate);
  if (!asOf) {
    throw new Error("Invalid asOfDate");
  }

  return clinicians.filter((clinician) => {
    const expiryDate = parseIsoDate(clinician.licenceExpiryDate);
    if (!expiryDate) {
      return false;
    }

    const daysRemaining = diffCalendarDays(asOf, expiryDate);
    return daysRemaining >= 0 && daysRemaining <= daysThreshold;
  });
}
