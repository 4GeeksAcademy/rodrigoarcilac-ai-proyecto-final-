import type { Claim, Clinician } from "../types/healthcore";

const VALID_ROLES = new Set([
  "physician",
  "nurse_practitioner",
  "nurse",
  "medical_assistant",
] as const);

function parseIsoDate(dateString: string): Date | null {
  const date = new Date(`${dateString}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function validateClaim(
  claim: Claim,
  knownLocationIds: string[],
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (claim.claimAmount <= 0) {
    errors.push("claimAmount must be greater than 0");
  }

  const submissionDate = parseIsoDate(claim.submissionDate);
  if (!submissionDate) {
    errors.push("submissionDate must be a valid ISO 8601 date");
  } else {
    const today = new Date();
    const todayUtc = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
    if (submissionDate > todayUtc) {
      errors.push("submissionDate cannot be in the future");
    }
  }

  if (!knownLocationIds.includes(claim.locationId)) {
    errors.push("locationId must match a known clinic location");
  }

  if (claim.status === "denied" && !claim.denialReason) {
    errors.push("denialReason is required when status is denied");
  }

  if (!/^HC-[A-Za-z0-9]{6}$/.test(claim.patientId)) {
    errors.push("patientId must match format HC- followed by 6 alphanumeric characters");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function validateClinician(clinician: Clinician): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (clinician.cmeHoursRequired < 0) {
    errors.push("cmeHoursRequired must be greater than or equal to 0");
  }

  if (clinician.cmeHoursLogged < 0) {
    errors.push("cmeHoursLogged must be greater than or equal to 0");
  }

  const expiryDate = parseIsoDate(clinician.licenceExpiryDate);
  if (!expiryDate) {
    errors.push("licenceExpiryDate must be a valid ISO 8601 date");
  } else {
    const today = new Date();
    const todayUtc = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
    if (expiryDate < todayUtc) {
      errors.push("licenceExpiryDate is in the past (licence expired)");
    }
  }

  if (!VALID_ROLES.has(clinician.role)) {
    errors.push("role must be one of physician, nurse_practitioner, nurse, medical_assistant");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function isDenialRateAboveThreshold(rate: number, threshold = 8): boolean {
  return rate > threshold;
}

export function isNoShowRateAboveThreshold(rate: number, threshold = 20): boolean {
  return rate > threshold;
}
