import { MiddeskClient } from "../client.mjs";

export interface Order {
  id: string;
  object: "order";
  business_id: string;
  package: string;
  status: string;
  created_at: string;
  updated_at: string;
  // Add other fields as needed
}

export type ListOrdersInput = {
  business_id: string;
  limit?: number;
  query?: Record<string, string | number | boolean>;
};

export type ListOrdersOutput = {
  object: "list";
  data: Order[];
  has_more: boolean;
  total_count: number;
};

/**
 * Returns a list of orders for a business.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/orders/list-orders-for-a-business
 * @param client
 * @param input
 */
export async function listOrders(
  client: MiddeskClient,
  input: ListOrdersInput,
): Promise<ListOrdersOutput> {
  const query: Record<string, string | number | boolean> = {
    ...(input.query ?? {}),
  };
  if (input.limit != null) query.limit = input.limit;
  return client.get<ListOrdersOutput>({
    path: `/businesses/${input.business_id}/orders`,
    query: Object.keys(query).length ? query : undefined,
  });
}
