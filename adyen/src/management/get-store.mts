import {AdyenClient} from '../client.mjs';
import {managementV3BaseUrl} from './env.mjs';
import type {Store} from './get-merchant-store-list.mjs';

export type GetStoreOutput = Store;

export async function getStore(
  client: AdyenClient,
  storeId: string,
) {
  return await client.get<GetStoreOutput>({
    baseUrl: managementV3BaseUrl,
    path: `stores/${storeId}`,
  });
}

// Reference: https://docs.adyen.com/api-explorer/Management/3/get/stores/(storeId)
