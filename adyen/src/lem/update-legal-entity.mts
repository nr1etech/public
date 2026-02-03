import {AdyenClient} from '../client.mjs';
import {lemV4BaseUrl} from './env.mjs';
import type {EntityType, OrganizationInput} from './create-legal-entity.mjs';
import type {GetLegalEntityOutput} from './get-legal-entity.mjs';

export type UpdateLegalEntityInput = {
  // capabilities?: X;
  // entityAssociations?: []X;
  // individual?: X;
  organization?: Partial<OrganizationInput>;
  // reference?: string;
  // soleProprietorship?: X;
  // trust?: X;
  type?: EntityType;
  // unincorporatedPartnership: X;
  // verificationPlan: string;
};

export type UpdateLegalEntityOutput = GetLegalEntityOutput;

export async function updateLegalEntity(
  client: AdyenClient,
  legalEntityId: string,
  input: UpdateLegalEntityInput,
) {
  return await client.patch<UpdateLegalEntityOutput>({
    baseUrl: lemV4BaseUrl,
    path: `legalEntities/${legalEntityId}`,
    body: input,
  });
}

// Reference: https://docs.adyen.com/api-explorer/legalentity/4/patch/legalEntities/(id)
