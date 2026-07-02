import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { sampleAppointments, sampleClaims, sampleClinicians } from "../src/data/sampleData";
import {
  filterAppointmentsByStatus,
  filterClaims,
  groupClaimsBy,
  sortAppointmentsByDate,
  sortClaimsById,
} from "../src/utils/collections";
import {
  binarySearchClaimById,
  findClaimById,
  findClinicianById,
} from "../src/utils/search";

describe("collections", () => {
  it("filters claims by all provided criteria", () => {
    const result = filterClaims(sampleClaims, {
      locationId: "us-tx-001",
      payerName: "BlueCross",
    });

    assert.equal(result.length, 2);
    assert.ok(result[0]);
    assert.ok(result[1]);
    assert.equal(result[0].claimId, "CLM-000001");
    assert.equal(result[1].claimId, "CLM-000004");
  });

  it("filters appointments by status set", () => {
    const result = filterAppointmentsByStatus(sampleAppointments, ["no_show", "completed"]);
    assert.equal(result.length, 5);
  });

  it("sorts claims by id without mutating original array", () => {
    const copy = [...sampleClaims];
    const desc = sortClaimsById(sampleClaims, "desc");

    assert.ok(desc[0]);
    assert.equal(desc[0].claimId, "CLM-000005");
    assert.deepEqual(sampleClaims, copy);
  });

  it("sorts appointments by date asc without mutation", () => {
    const copy = [...sampleAppointments];
    const asc = sortAppointmentsByDate(sampleAppointments, "asc");

    assert.ok(asc[0]);
    assert.equal(asc[0].scheduledDate, "2025-03-10");
    assert.deepEqual(sampleAppointments, copy);
  });

  it("groups claims by payer", () => {
    const grouped = groupClaimsBy(sampleClaims, "payerName");
    assert.ok(grouped.BlueCross);
    assert.ok(grouped.Aetna);
    assert.equal(grouped.BlueCross.length, 2);
    assert.equal(grouped.Aetna.length, 1);
  });
});

describe("search", () => {
  it("finds claim by id with linear search", () => {
    const found = findClaimById(sampleClaims, "CLM-000002");
    assert.ok(found);
    assert.equal(found.payerName, "Aetna");
  });

  it("returns null when claim does not exist", () => {
    const found = findClaimById(sampleClaims, "CLM-999999");
    assert.equal(found, null);
  });

  it("finds clinician by id", () => {
    const found = findClinicianById(sampleClinicians, "CLN-000003");
    assert.ok(found);
    assert.equal(found.lastName, "Okafor");
  });

  it("returns index with binary search when sorted", () => {
    const sorted = sortClaimsById(sampleClaims, "asc");
    const index = binarySearchClaimById(sorted, "CLM-000004");

    assert.notEqual(index, -1);
    assert.ok(sorted[index]);
    assert.equal(sorted[index].claimId, "CLM-000004");
  });

  it("returns -1 when binary search target is missing", () => {
    const sorted = sortClaimsById(sampleClaims, "asc");
    const index = binarySearchClaimById(sorted, "CLM-999999");

    assert.equal(index, -1);
  });
});
