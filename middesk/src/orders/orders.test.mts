import { test, expect } from "vitest";
import { getClient } from "../helper.test.mjs";
import { listOrders } from "./list-orders.mjs";
import { retrieveOrder } from "./retrieve-order.mjs";
import { listBusinesses } from "../businesses/list-businesses.mjs";

test("Test listOrders and retrieveOrder @int", { timeout: 30000 }, async () => {
  const client = getClient();
  const businesses = await listBusinesses(client, { limit: 1 });
  if (businesses.data.length === 0) {
    console.warn("No businesses found, skipping orders test");
    return;
  }
  const businessId = businesses.data[0].id;

  const listResult = await listOrders(client, { business_id: businessId });
  expect(listResult).toBeDefined();

  if (listResult.data.length > 0) {
    const orderId = listResult.data[0].id;
    console.log("Testing with Order ID:", orderId, "Business ID:", businessId);

    const order = await retrieveOrder(client, {
      business_id: businessId,
      orderId,
    });
    expect(order).toBeDefined();
    expect(order.id).toBe(orderId);
  } else {
    console.warn("No orders found to test retrieveOrder");
  }
});
