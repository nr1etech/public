import { MiddeskClient } from "../client.mjs";
import type { Business } from "./types.mjs";

export type ListBusinessesInput = {
  limit?: number;
  after?: string;
  query?: Record<string, string | number | boolean>;
};

export type ListBusinessesOutput = {
  object: "list";
  data: Business[];
  has_more: boolean;
  total_count: number;
};

/**
 * Returns a list of businesses.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/businesses/list-businesses
 * @param client
 * @param input
 */
export async function listBusinesses(
  client: MiddeskClient,
  input?: ListBusinessesInput,
): Promise<ListBusinessesOutput> {
  const query: Record<string, string | number | boolean> = {
    ...(input?.query ?? {}),
  };
  if (input?.limit != null) query.limit = input.limit;
  if (input?.after != null) query.after = input.after;
  return client.get<ListBusinessesOutput>({
    path: "/businesses",
    query: Object.keys(query).length ? query : undefined,
  });
}
