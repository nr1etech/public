import {GoHighLevelClient} from '../client.mjs';

export type CreateCustomProviderIntegrationInput = {
  locationId: string;
  name: string;
  description: string;
  paymentsUrl: string;
  queryUrl: string;
  imageUrl: string;
  supportsSubscriptionSchedule: boolean;
};

export type CreateCustomProviderIntegrationOutput = {
  name: string;
  description: string;
  paymentsUrl: string;
  queryUrl: string;
  imageUrl: string;
  _id: string;
  locationId: string;
  marketplaceAppId: string;
  providerConfig: {
    live: {
      liveMode: boolean;
    };
    test: {
      liveMode: boolean;
    };
  };
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  traceId?: string;
};

/**
 * Create a new association for an app and location.
 *
 * @see https://help.gohighlevel.com/support/solutions/articles/155000002620-how-to-build-a-custom-payments-integration-on-the-platform
 * @see https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration
 * @see https://github.com/GoHighLevel/highlevel-api-sdk/blob/main/lib/code/payments/models/payments.ts
 *
 * @param client
 * @param input
 */
export async function createCustomProviderIntegration(
  client: GoHighLevelClient,
  input: CreateCustomProviderIntegrationInput,
): Promise<CreateCustomProviderIntegrationOutput> {
  const {locationId, ...body} = input;
  return client.post<CreateCustomProviderIntegrationOutput>({
    version: '2021-07-28',
    path: '/payments/custom-provider/provider',
    locationId,
    body,
  });
}
