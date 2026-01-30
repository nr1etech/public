import {AdyenClient} from '../client.mjs';
import {lemV4BaseUrl} from './env.mjs';
import type {CreateBusinessLinesInput} from './create-business-lines.mjs';
import type {GetBusinessLinesOutput} from './get-business-lines.mjs';

export type UpdateBusinessLinesInput = Partial<Omit<CreateBusinessLinesInput, 'legalEntityId'>>;

export type UpdateBusinessLinesOutput = GetBusinessLinesOutput;

export async function updateBusinessLines(
  client: AdyenClient,
  businessLineId: string,
  input: UpdateBusinessLinesInput,
) {
  return await client.patch<UpdateBusinessLinesOutput>({
    baseUrl: lemV4BaseUrl,
    path: `businessLines/${businessLineId}`,
    body: input,
  });
}

// Reference: https://docs.adyen.com/api-explorer/legalentity/3/patch/businessLines/(id)
