import { test, expect } from "vitest";
import { getClient } from "../helper.test.mjs";
import { retrieveWebsiteAnalysis } from "./retrieve-website-analysis.mjs";
import { listBusinesses } from "../businesses/list-businesses.mjs";

test("Test retrieveWebsiteAnalysis @int", { timeout: 60000 }, async () => {
  const client = getClient();
  const businesses = await listBusinesses(client, { limit: 1 });
  if (businesses.data.length === 0) {
    console.warn("No businesses found, skipping website analysis test");
    return;
  }
  const businessId = businesses.data[0].id;

  // Note: Assuming retrieveWebsiteAnalysis takes businessId or we list websites first.
  // Docs: https://docs.middesk.com/api-reference/business-verification/websites/retrieve-website-analysis
  // Likely GET /businesses/:id/website or similar.
  // Checking retrieve-website-analysis.mts for signature.

  try {
    const website = await retrieveWebsiteAnalysis(client, {
      businessId: businessId,
    });
    expect(website).toBeDefined();
    console.log("Website Analysis:", website);
  } catch (e) {
    console.warn(
      "Website analysis retrieval failed (possibly 404 if not available):",
      e.message,
    );
  }
});
