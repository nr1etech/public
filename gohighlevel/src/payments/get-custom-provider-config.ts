import {GoHighLevelClient} from '../client.js';

export type GetCustomProviderConfigInput = {
  locationId: string;
};

export type GetCustomProviderConfigOutput = {
  name: string;
  description: string;
  paymentsUrl: string;
  queryUrl: string;
  imageUrl: string;
  _id: string;
  locationId: string;
  marketplaceAppId: string;
  paymentProvider?: {
    [key: string]: unknown;
  };
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  traceId?: string;
};

/**
 * Returns a custom payment provider configuration.
 *
 * @see https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform
 * @see https://marketplace.gohighlevel.com/docs/ghl/payments/fetch-config
 * @see https://github.com/GoHighLevel/highlevel-api-sdk/blob/main/lib/code/payments/models/payments.ts
 *
 * @param client
 * @param input
 */
export async function getCustomProviderConfig(
  client: GoHighLevelClient,
  input: GetCustomProviderConfigInput,
): Promise<GetCustomProviderConfigOutput> {
  return client.get<GetCustomProviderConfigOutput>({
    version: '2021-07-28',
    path: '/payments/custom-provider/connect',
    locationId: input.locationId,
  });
}
