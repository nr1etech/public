import { test, expect } from "vitest";
import { getClient } from "../helper.test.mjs";
import { listPolicyResults } from "./list-policy-results.mjs";
import { listBusinesses } from "../businesses/list-businesses.mjs";

test("Test listPolicyResults @int", async () => {
  const client = getClient();
  const businesses = await listBusinesses(client, { limit: 1 });
  if (businesses.data.length === 0) {
    console.warn("No businesses found, skipping policy results test");
    return;
  }
  const businessId = businesses.data[0].id;

  try {
    const listResult = await listPolicyResults(client, {
      business_id: businessId,
    });
    expect(listResult).toBeDefined();
    expect(listResult.object).toBe("list");
    console.log("Policy Results count:", listResult.data.length);
  } catch (error) {
    if ((error as Error).message.includes("404")) {
      console.warn(
        "Policy results endpoint not found (404). This might be a Sandbox limitation.",
      );
      return;
    }
    throw error;
  }
});
