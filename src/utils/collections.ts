import type { Appointment, AppointmentStatus, Claim } from "../types/healthcore";

export function filterClaims(
  claims: Claim[],
  filters: Partial<Pick<Claim, "locationId" | "status" | "payerName" | "serviceType">>,
): Claim[] {
  return claims.filter((claim) => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === undefined) {
        return true;
      }
      return claim[key as keyof typeof filters] === value;
    });
  });
}

export function filterAppointmentsByStatus(
  appointments: Appointment[],
  status: AppointmentStatus[],
): Appointment[] {
  if (status.length === 0) {
    return [];
  }
  const allowed = new Set(status);
  return appointments.filter((appointment) => allowed.has(appointment.status));
}

export function sortClaimsById(claims: Claim[], direction: "asc" | "desc"): Claim[] {
  const sorted = [...claims].sort((a, b) => a.claimId.localeCompare(b.claimId));
  return direction === "desc" ? sorted.reverse() : sorted;
}

export function sortAppointmentsByDate(
  appointments: Appointment[],
  direction: "asc" | "desc",
): Appointment[] {
  const sorted = [...appointments].sort((a, b) => a.scheduledDate.localeCompare(b.scheduledDate));
  return direction === "desc" ? sorted.reverse() : sorted;
}

export function groupClaimsBy(
  claims: Claim[],
  key: "locationId" | "payerName" | "status" | "serviceType",
): Record<string, Claim[]> {
  return claims.reduce<Record<string, Claim[]>>((accumulator, claim) => {
    const groupKey = claim[key];
    if (!accumulator[groupKey]) {
      accumulator[groupKey] = [];
    }
    accumulator[groupKey].push(claim);
    return accumulator;
  }, {});
}
