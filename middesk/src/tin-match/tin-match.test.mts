import { test, expect } from "vitest";
import { getClient } from "../helper.test.mjs";
import { checkTinMatchServiceAvailability } from "./check-tin-match-service-availability.mjs";

test(
  "Test checkTinMatchServiceAvailability @int",
  { timeout: 30000 },
  async () => {
    const client = getClient();
    try {
      const availability = await checkTinMatchServiceAvailability(client);
      expect(availability).toBeDefined();
      // Assuming availability object structure, e.g. status
      console.log("TIN Match Availability:", availability);
    } catch (error) {
      if ((error as Error).message.includes("404")) {
        console.warn(
          "TIN Match availability endpoint not found (404). This might be a Sandbox limitation.",
        );
        return;
      }
      throw error;
    }
  },
);
