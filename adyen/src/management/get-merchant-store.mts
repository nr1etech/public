import {AdyenClient} from '../client.mjs';
import {managementV3BaseUrl} from './env.mjs';
import type {Store} from './get-merchant-store-list.mjs';

export type GetMerchantStoreOutput = Store;

export async function getMerchantStore(
  client: AdyenClient,
  merchantId: string,
  storeId: string,
) {
  return await client.get<GetMerchantStoreOutput>({
    baseUrl: managementV3BaseUrl,
    path: `merchants/${merchantId}/stores/${storeId}`,
  });
}

// Reference: https://docs.adyen.com/api-explorer/Management/3/get/merchants/(merchantId)/stores/(storeId)
