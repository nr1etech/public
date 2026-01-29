import {AdyenClient} from '../client.mjs';
import {lemV4BaseUrl} from './env.mjs';

export async function deleteTransferInstrument(
  client: AdyenClient,
  transferInstrumentId: string,
): Promise<void> {
  return await client.delete({
    baseUrl: lemV4BaseUrl,
    path: `transferInstruments/${transferInstrumentId}`,
  });
}

// Reference: https://docs.adyen.com/api-explorer/legalentity/4/delete/transferInstruments/(id)
