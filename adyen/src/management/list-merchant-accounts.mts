import {AdyenClient} from '../client.mjs';
import {managementV3BaseUrl} from './env.mjs';

export async function listMerchantAccounts(client: AdyenClient) {
  return await client.get({
    baseUrl: managementV3BaseUrl,
    path: 'merchants',
  });
}
