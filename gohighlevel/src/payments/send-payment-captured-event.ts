import {GoHighLevelClient} from '../client.js';

export type ChargeStatus = 'succeeded' | 'failed' | 'pending';

export type ChargeSnapshot = {
  status: ChargeStatus;
  amount: number; // amount up to 2 decimal places multiplied by 100 (e.g., $10.00 is 1000)
  chargeId: string; // unique identifier for the charge
  chargedAt: number; // timestamp when the charge was created timestamp in unix / seconds
};

export type SendPaymentCapturedEventInput = {
  chargeId: string;
  ghlTransactionId: string;
  chargeSnapshot: ChargeSnapshot;
  locationId: string;
  agency: string;
};

/**
 * Sends a webhook request for a custom payment provider.
 *
 * @see https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform
 *
 * @param client
 * @param input
 */
export async function sendPaymentCapturedEvent(
  client: GoHighLevelClient,
  input: SendPaymentCapturedEventInput,
): Promise<void> {
  return client.post({
    version: '2021-07-28',
    path: '/payments/custom-provider/webhook',
    body: {
      event: 'payment.captured',
      ...input,
    },
  });
}
