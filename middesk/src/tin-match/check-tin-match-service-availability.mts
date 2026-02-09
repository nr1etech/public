import {MiddeskClient} from '../client.mjs';

export type CheckTinMatchServiceAvailabilityOutput = {
  available: boolean;
  message?: string;
  // Add actual response fields
};

/**
 * Checks TIN match service availability.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/tin-match/check-tin-match-service-availability
 * @param client
 */
export async function checkTinMatchServiceAvailability(
  client: MiddeskClient,
): Promise<CheckTinMatchServiceAvailabilityOutput> {
  return client.get<CheckTinMatchServiceAvailabilityOutput>({
    path: '/tin_match/availability',
  });
}
