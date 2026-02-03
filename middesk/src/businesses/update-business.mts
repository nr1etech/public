import { MiddeskClient } from "../client.mjs";
import type { Business } from "./list-businesses.mjs";

export type UpdateBusinessInput = {
  businessId: string;
  name?: string;
  website?: { url: string };
  tin?: { tin: string };
  addresses?: Array<{
    address_line1: string;
    address_line2?: string;
    city: string;
    state: string;
    postal_code: string;
  }>;
  external_id?: string;
  unique_external_id?: string;
  names?: Array<{ name: string; type?: string }>;
  people?: Array<{
    name: string;
    title?: string;
    date_of_birth?: string;
    ssn_last_4?: string;
  }>;
  phone_numbers?: Array<{ number: string }>;
  tags?: string[];
  status?: string; // Sometimes status can be updated
};

/**
 * Updates a business.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/businesses/update-a-business
 * @param client
 * @param input
 */
export async function updateBusiness(
  client: MiddeskClient,
  input: UpdateBusinessInput,
): Promise<Business> {
  const { businessId, ...body } = input;
  return client.patch<Business>({
    path: `/businesses/${businessId}`,
    body,
  });
}
