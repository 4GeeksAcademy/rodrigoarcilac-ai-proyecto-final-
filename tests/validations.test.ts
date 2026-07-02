import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { sampleClaims, sampleClinicians, sampleLocations } from "../src/data/sampleData";
import type { Claim, Clinician } from "../src/types/healthcore";
import {
  isDenialRateAboveThreshold,
  isNoShowRateAboveThreshold,
  validateClaim,
  validateClinician,
} from "../src/utils/validations";

function isoDateFromNow(dayOffset: number): string {
  const now = new Date();
  now.setUTCDate(now.getUTCDate() + dayOffset);
  return now.toISOString().slice(0, 10);
}

describe("claim validations", () => {
  it("validates a correct claim", () => {
    const knownLocations = sampleLocations.map((location) => location.locationId);
    const baseClaim = sampleClaims[0];
    assert.ok(baseClaim);
    const result = validateClaim(baseClaim, knownLocations);

    assert.equal(result.valid, true);
    assert.deepEqual(result.errors, []);
  });

  it("returns multiple claim validation errors", () => {
    const baseClaim = sampleClaims[0];
    assert.ok(baseClaim);

    const badClaim: Claim = {
      ...baseClaim,
      patientId: "HC-XX",
      locationId: "unknown-location",
      claimAmount: 0,
      status: "denied" as const,
      submissionDate: isoDateFromNow(3),
    };

    const result = validateClaim(badClaim, ["us-tx-001"]);

    assert.equal(result.valid, false);
    assert.ok(result.errors.length >= 5);
  });
});

describe("clinician validations", () => {
  it("returns clinician validation errors", () => {
    const baseClinician = sampleClinicians[0];
    assert.ok(baseClinician);

    const badClinician: Clinician = {
      ...baseClinician,
      cmeHoursLogged: -1,
      cmeHoursRequired: -2,
      licenceExpiryDate: isoDateFromNow(-1),
      role: "invalid" as never,
    };

    const result = validateClinician(badClinician);
    assert.equal(result.valid, false);
    assert.ok(result.errors.length >= 4);
  });
});

describe("threshold helpers", () => {
  it("uses default denial threshold at 8", () => {
    assert.equal(isDenialRateAboveThreshold(8), false);
    assert.equal(isDenialRateAboveThreshold(8.01), true);
  });

  it("uses default no-show threshold at 20", () => {
    assert.equal(isNoShowRateAboveThreshold(20), false);
    assert.equal(isNoShowRateAboveThreshold(20.1), true);
  });
});
