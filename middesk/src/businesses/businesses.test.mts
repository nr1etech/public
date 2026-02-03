import { test, expect } from "vitest";
import { getClient } from "../helper.test.mjs";
import { listBusinesses } from "./list-businesses.mjs";
import { retrieveBusiness } from "./retrieve-business.mjs";

test("Test listBusinesses and retrieveBusiness @int", async () => {
  const client = getClient();
  const listResult = await listBusinesses(client, { limit: 1 });
  expect(listResult).toBeDefined();
  expect(listResult.data).toBeDefined();

  // Assuming the test account might be empty initially, but list should succeed
  if (listResult.data.length > 0) {
    const businessId = listResult.data[0].id;
    const retrieveResult = await retrieveBusiness(client, { businessId });
    expect(retrieveResult).toBeDefined();
    expect(retrieveResult.id).toBe(businessId);
    console.log("Retrieved Business:", retrieveResult.id);
  } else {
    console.warn("No businesses found to test retrieveBusiness");
  }
});
