import {AdyenClient} from '../client.mjs';
import {lemV4BaseUrl} from './env.mjs';

export async function deleteDocument(
  client: AdyenClient,
  documentId: string,
): Promise<void> {
  return await client.delete({
    baseUrl: lemV4BaseUrl,
    path: `documents/${documentId}`,
  });
}

// Reference: https://docs.adyen.com/api-explorer/legalentity/4/delete/documents/(id)
