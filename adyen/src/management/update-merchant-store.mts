import {AdyenClient} from '../client.mjs';
import {managementV3BaseUrl} from './env.mjs';
import type {CreateMerchantStoreInput} from './create-merchant-store.mjs';
import type {GetMerchantStoreOutput} from './get-merchant-store.mjs';

export type UpdateMerchantStoreInput = Partial<CreateMerchantStoreInput>;

export type UpdateMerchantStoreOutput = GetMerchantStoreOutput;

export async function updateMerchantStore(
  client: AdyenClient,
  merchantId: string,
  storeId: string,
  input: UpdateMerchantStoreInput,
) {
  return await client.patch<UpdateMerchantStoreOutput>({
    baseUrl: managementV3BaseUrl,
    path: `merchants/${merchantId}/stores/${storeId}`,
    body: input,
  });
}

// Reference: https://docs.adyen.com/api-explorer/Management/3/patch/merchants/(merchantId)/stores/(storeId)
