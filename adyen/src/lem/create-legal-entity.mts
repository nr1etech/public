import {AdyenClient} from '../client.mjs';
import {lemV4BaseUrl} from './env.mjs';

export type EntityType =
  | 'individual'
  | 'organization'
  | 'soleProprietorship'
  | 'trust';

export type OrganizationType =
  | 'associationIncorporated'
  | 'governmentalOrganization'
  | 'listedPublicCompany'
  | 'nonProfit'
  | 'partnershipIncorporated'
  | 'privateCompany';

export type PhoneType = 'mobile' | 'landline' | 'sip' | 'fax';

export type Phone = {
  number: string;
  type?: PhoneType;
};

export type Address = {
  city?: string;
  country: string;
  postalCode?: string;
  stateOrProvince?: string;
  street?: string;
  street2?: string;
};

export type OrganizationInput = {
  /**
   * The two-character ISO 3166-1 alpha-2 country code of the governing country.
   */
  countryOfGoverningLaw?: string;
  /**
   * The date when the organization was incorporated in YYYY-MM-DD format.
   */
  dateOfIncorporation?: string;
  /**
   *
   */
  dateOfInitiationOfLegalProceeding?: string;
  description?: string;
  doingBusinessAs?: string;
  doingBusinessAsAbsent?: boolean;
  economicSector?: string;
  email?: string;
  // financialReports?: X;
  globalLegalEntityIdentifier?: string;
  headOfficeIndicator?: boolean;
  institutionalSector?: string;
  legalForm?: string;
  legalName: string;
  phone?: Phone;
  principalPlaceOfBusiness?: Address;
  registeredAddress: Address;
  registrationNumber?: string;
  registrationNumberAbsent?: boolean;
  statusOfLegalProceeding?: string;
  // stockData: X;
  // support: X;
  // taxInformation: []X;
  // taxReportingClassification: X;
  type?: OrganizationType;
  // vatAbsenceReason: X;
  vatNumber?: string;
};

export type CreateLegalEntityInput = {
  // capabilities?: X;
  // entityAssociations?: []X;
  // individual?: X;
  organization?: OrganizationInput;
  // reference?: string;
  // soleProprietorship?: X;
  // trust?: X;
  type: EntityType;
  // unincorporatedPartnership: X;
  // verificationPlan: string;
};

export type CreateLegalEntityOutput = {
  replaceme?: unknown;
  // TODO Impement me!
};

export async function createLegalEntity(
  client: AdyenClient,
  input: CreateLegalEntityInput,
) {
  return await client.post<CreateLegalEntityOutput>({
    baseUrl: lemV4BaseUrl,
    path: 'legalEntities',
    body: input,
  });
}

// TODO Need to consult https://docs.adyen.com/marketplaces/onboard-users/onboarding-steps?onboarding_type=custom&location=us&legal_entity=organization
