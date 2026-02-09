import {MiddeskClient} from '../client.mjs';
import type {Order} from './list-orders.mjs';

export type CreateOrderInput = {
  business_id: string;
  package: string; // e.g., 'identity', 'verify'
  product?: string; // alternative to package
  subproducts?: string[]; // API uses subproducts, not subpackages
  options?: Record<string, unknown>;
};

/**
 * Creates an order for a business.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/orders/create-an-order-for-a-business
 * @param client
 * @param input
 */
export async function createOrder(
  client: MiddeskClient,
  input: CreateOrderInput,
): Promise<Order> {
  const {business_id, ...body} = input;
  return client.post<Order>({
    path: `/businesses/${business_id}/orders`,
    body,
  });
}
