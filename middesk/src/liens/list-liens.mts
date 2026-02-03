import { MiddeskClient } from "../client.mjs";

export interface Lien {
  id: string;
  object: "lien";
  business_id: string;
  // Add other fields
}

export type ListLiensInput = {
  business_id: string;
  limit?: number;
  query?: Record<string, string | number | boolean>;
};

export type ListLiensOutput = {
  object: "list";
  data: Lien[];
  has_more: boolean;
  total_count: number;
};

/**
 * Returns a list of liens for a business.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/liens/list-liens-for-a-business
 * @param client
 * @param input
 */
export async function listLiens(
  client: MiddeskClient,
  input: ListLiensInput,
): Promise<ListLiensOutput> {
  const query: Record<string, string | number | boolean> = {
    ...(input.query ?? {}),
  };
  if (input.limit != null) query.limit = input.limit;
  return client.get<ListLiensOutput>({
    path: `/businesses/${input.business_id}/liens`,
    query: Object.keys(query).length ? query : undefined,
  });
}
