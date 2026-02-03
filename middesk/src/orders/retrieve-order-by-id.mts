import { MiddeskClient } from "../client.mjs";
import type { Order } from "./list-orders.mjs";

export type RetrieveOrderByIdInput = {
  orderId: string;
};

/**
 * Returns an order by ID.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/orders/retrieve-an-order-by-id
 * @param client
 * @param input
 */
export async function retrieveOrderById(
  client: MiddeskClient,
  input: RetrieveOrderByIdInput,
): Promise<Order> {
  return client.get<Order>({
    path: `/orders/${input.orderId}`,
  });
}
