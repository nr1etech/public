import { test, expect } from "vitest";
import { getClient } from "../helper.test.mjs";
import { listLiens } from "./list-liens.mjs";
import { listBusinesses } from "../businesses/list-businesses.mjs";

test("Test listLiens @int", { timeout: 30000 }, async () => {
  const client = getClient();
  const businesses = await listBusinesses(client, { limit: 1 });
  if (businesses.data.length === 0) {
    console.warn("No businesses found, skipping liens test");
    return;
  }
  const businessId = businesses.data[0].id;

  const listResult = await listLiens(client, { business_id: businessId });
  expect(listResult).toBeDefined();
  expect(listResult.object).toBe("list");
  console.log("Liens count:", listResult.data.length);
});
