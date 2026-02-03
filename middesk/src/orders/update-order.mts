import { MiddeskClient } from "../client.mjs";
import type { Order } from "./list-orders.mjs";

export type UpdateOrderInput = {
  orderId: string;
  body?: Record<string, unknown>;
};

/**
 * Updates an order.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/orders/update-an-order
 * @param client
 * @param input
 */
export async function updateOrder(
  client: MiddeskClient,
  input: UpdateOrderInput,
): Promise<Order> {
  const { orderId, body } = input;
  return client.patch<Order>({
    path: `/orders/${orderId}`,
    body: body ?? {},
  });
}
