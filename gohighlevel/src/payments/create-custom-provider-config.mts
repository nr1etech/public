import {GoHighLevelClient} from '../client.mjs';

export type CreateCustomProviderConfigInput = {
  locationId: string;
  live: {
    apiKey: string;
    publishableKey: string;
  };
  test: {
    apiKey: string;
    publishableKey: string;
  };
};

export type CreateCustomProviderConfigOutput = {
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
 * Creates a new custom payment provider configuration.
 *
 * @see https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform
 * @see https://marketplace.gohighlevel.com/docs/ghl/payments/create-config
 * @see https://github.com/GoHighLevel/highlevel-api-sdk/blob/main/lib/code/payments/models/payments.ts
 *
 * @param client
 * @param input
 */
export async function createCustomProviderConfig(
  client: GoHighLevelClient,
  input: CreateCustomProviderConfigInput,
): Promise<CreateCustomProviderConfigOutput> {
  const {locationId, ...body} = input;
  return client.post<CreateCustomProviderConfigOutput>({
    version: '2021-07-28',
    path: '/payments/custom-provider/connect',
    locationId,
    body,
  });
}
