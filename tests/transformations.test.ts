import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  sampleAppointments,
  sampleClaims,
  sampleClinicians,
  sampleLocations,
} from "../src/data/sampleData";
import {
  calculateDenialRate,
  calculateNoShowCost,
  denialRateByLocation,
  denialRateByPayer,
  flagHighDenialPayers,
  flagHighNoShowLocations,
  generateCMEReport,
  getCliniciansAtRisk,
  getCliniciansWithExpiringLicences,
  noShowRateByLocation,
} from "../src/utils/transformations";

describe("denial transformations", () => {
  it("calculates denial rate as percentage rounded to 2 decimals", () => {
    assert.equal(calculateDenialRate(sampleClaims), 40);
  });

  it("throws when calculating denial rate for empty claims", () => {
    assert.throws(() => calculateDenialRate([]), /cannot be empty/i);
  });

  it("calculates denial rate by payer", () => {
    const rates = denialRateByPayer(sampleClaims);
    assert.equal(rates.BlueCross, 50);
    assert.equal(rates.Aetna, 100);
    assert.equal(rates.Cigna, 0);
  });

  it("calculates denial rate by location", () => {
    const rates = denialRateByLocation(sampleClaims);
    assert.equal(rates["us-tx-001"], 50);
    assert.equal(rates["us-fl-001"], 50);
    assert.equal(rates["us-ga-001"], 0);
  });

  it("flags high denial payers using default threshold", () => {
    const flagged = flagHighDenialPayers(sampleClaims).sort();
    assert.deepEqual(flagged, ["Aetna", "BlueCross"]);
  });
});

describe("no-show transformations", () => {
  it("calculates no-show cost for a location and week window", () => {
    const miami = sampleLocations.find((location) => location.locationId === "us-fl-001");
    assert.ok(miami);

    const cost = calculateNoShowCost(sampleAppointments, miami, "2025-03-14");
    assert.equal(cost, 555);
  });

  it("returns 0 no-show cost when no records match", () => {
    const atlanta = sampleLocations.find((location) => location.locationId === "us-ga-001");
    assert.ok(atlanta);

    const cost = calculateNoShowCost(sampleAppointments, atlanta, "2025-03-14");
    assert.equal(cost, 0);
  });

  it("calculates no-show rate by location", () => {
    const rates = noShowRateByLocation(sampleAppointments);
    assert.equal(rates["us-fl-001"], 100);
    assert.equal(rates["us-tx-001"], 50);
    assert.equal(rates["us-ga-001"], 0);
  });

  it("flags high no-show locations", () => {
    const flagged = flagHighNoShowLocations(sampleAppointments).sort();
    assert.deepEqual(flagged, ["us-fl-001", "us-tx-001"]);
  });
});

describe("cme transformations", () => {
  it("generates a CME report with expected statuses", () => {
    const report = generateCMEReport(sampleClinicians, "2025-07-01");
    const byId = new Map(report.map((row) => [row.clinicianId, row]));

    assert.equal(byId.get("CLN-000001")?.complianceStatus, "on_track");
    assert.equal(byId.get("CLN-000002")?.complianceStatus, "at_risk");
    assert.equal(byId.get("CLN-000003")?.complianceStatus, "complete");
  });

  it("marks clinicians as overdue after cycle end", () => {
    const report = generateCMEReport(sampleClinicians, "2026-02-01");
    const sandra = report.find((row) => row.clinicianId === "CLN-000002");

    assert.equal(sandra?.complianceStatus, "overdue");
  });

  it("returns clinicians at risk or overdue", () => {
    const atRisk = getCliniciansAtRisk(sampleClinicians, "2025-07-01");
    assert.equal(atRisk.length, 1);
    assert.ok(atRisk[0]);
    assert.equal(atRisk[0].clinicianId, "CLN-000002");
  });

  it("returns clinicians with licences expiring within threshold", () => {
    const expiring = getCliniciansWithExpiringLicences(sampleClinicians, "2025-03-01", 90);
    assert.equal(expiring.length, 1);
    assert.ok(expiring[0]);
    assert.equal(expiring[0].clinicianId, "CLN-000002");
  });
});
