import {MiddeskClient} from '../client.mjs';
import type {Business} from './types.mjs';

export type RetrieveBusinessInput = {
  businessId: string;
};

/**
 * Returns a business by ID.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/businesses/retrieve-a-business
 * @param client
 * @param input
 */
export async function retrieveBusiness(
  client: MiddeskClient,
  input: RetrieveBusinessInput,
): Promise<Business> {
  return client.get<Business>({
    path: `/businesses/${input.businessId}`,
  });
}
