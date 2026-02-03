import { test, expect } from "vitest";
import { createMiddeskClient, MiddeskClient } from "./client.mjs";

export function getClient(): MiddeskClient {
  const apiKey = process.env.MIDDESK_API_KEY;
  if (!apiKey) {
    throw new Error("Missing MIDDESK_API_KEY");
  }
  return createMiddeskClient({
    apiKey,
    baseUrl: "https://api-sandbox.middesk.com/v1",
  });
}

test("Test client initialization @int", () => {
  const client = getClient();
  expect(client).toBeDefined();
  expect(client.baseUrl).toContain("https://api-sandbox.middesk.com/v1");
});
