import {MiddeskClient} from '../client.mjs';
import type {Order} from './list-orders.mjs';

export type RetrieveOrderInput = {
  business_id: string;
  orderId: string;
};

/**
 * Returns an order for a business (by business_id and order id).
 *
 * @see https://docs.middesk.com/api-reference/business-verification/orders/retrieve-an-order
 * @param client
 * @param input
 */
export async function retrieveOrder(
  client: MiddeskClient,
  input: RetrieveOrderInput,
): Promise<Order> {
  return client.get<Order>({
    path: `/businesses/${input.business_id}/orders/${input.orderId}`,
  });
}
