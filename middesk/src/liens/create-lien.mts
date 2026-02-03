import { MiddeskClient } from "../client.mjs";
import type { Lien } from "./list-liens.mjs";

export type CreateLienInput = {
  business_id: string;
  /** Additional API fields as needed; see Middesk docs. */
  [key: string]: unknown;
};

/**
 * Creates a lien for a business.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/liens/create-a-lien-for-a-business
 * @param client
 * @param input
 */
export async function createLien(
  client: MiddeskClient,
  input: CreateLienInput,
): Promise<Lien> {
  const { business_id, ...body } = input;
  return client.post<Lien>({
    path: `/businesses/${business_id}/liens`,
    body,
  });
}
