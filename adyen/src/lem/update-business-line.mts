import {AdyenClient} from '../client.mjs';
import {lemV4BaseUrl} from './env.mjs';
import type {CreateBusinessLineInput} from './create-business-line.mjs';
import type {GetBusinessLinesOutput} from './get-business-lines.mjs';

export type UpdateBusinessLineInput = Partial<
  Omit<CreateBusinessLineInput, 'legalEntityId'>
>;

export type UpdateBusinessLineOutput = GetBusinessLinesOutput;

export async function updateBusinessLine(
  client: AdyenClient,
  businessLineId: string,
  input: UpdateBusinessLineInput,
) {
  return await client.patch<UpdateBusinessLineOutput>({
    baseUrl: lemV4BaseUrl,
    path: `businessLines/${businessLineId}`,
    body: input,
  });
}

// Reference: https://docs.adyen.com/api-explorer/legalentity/3/patch/businessLines/(id)
