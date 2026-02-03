import { MiddeskClient } from "../client.mjs";
import { Business } from "./types.mjs";

export type CreateBusinessInput = {
  name: string;
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
};

/**
 * Creates a business.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/businesses/create-a-business
 * @param client
 * @param input
 */
export async function createBusiness(
  client: MiddeskClient,
  input: CreateBusinessInput,
): Promise<Business> {
  return client.post<Business>({
    path: "/businesses",
    body: input,
  });
}
