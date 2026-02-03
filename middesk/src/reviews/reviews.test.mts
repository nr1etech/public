import { test, expect } from "vitest";
import { getClient } from "../helper.test.mjs";
import { listBusinesses } from "../businesses/list-businesses.mjs";
import { retrieveReview } from "./retrieve-review.mjs";

test("Test retrieveReview @int", { timeout: 30000 }, async () => {
  const client = getClient();
  const businesses = await listBusinesses(client, { limit: 1 });
  if (businesses.data.length === 0) {
    console.warn("No businesses found, skipping review test");
    return;
  }
  const businessId = businesses.data[0].id;

  try {
    const review = await retrieveReview(client, { business_id: businessId });
    expect(review).toBeDefined();
    console.log("Review retrieved for business:", businessId);
  } catch (error) {
    console.warn("Failed to retrieve review:", error);
    // If it's a 404, we might want to warn but not fail if the business has no review?
    // But my curl showed it works for a business.
    // If it fails, let's fail the test unless it's a known issue.
    // Actually, let's allow it to fail if it's broken, to be safe.
    throw error;
  }
});
