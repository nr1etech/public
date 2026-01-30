import {AdyenClient} from '../client.mjs';
import {lemV4BaseUrl} from './env.mjs';
import type {BusinessLine} from './get-legal-entity-business-lines.mjs';

export type GetBusinessLinesOutput = BusinessLine;

export async function getBusinessLines(
  client: AdyenClient,
  businessLineId: string,
) {
  return await client.get<GetBusinessLinesOutput>({
    baseUrl: lemV4BaseUrl,
    path: `businessLines/${businessLineId}`,
  });
}

// Reference: https://docs.adyen.com/api-explorer/legalentity/3/get/businessLines/(id)
