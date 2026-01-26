import {GoHighLevelClient} from '../client.mjs';

export type GetLocationInput = {
  locationId: string;
};

export type Business = {
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  timezone?: string;
  logoUrl?: string;
};

export type Social = {
  facebookUrl?: string;
  googlePlus?: string;
  linkedIn?: string;
  foursquare?: string;
  twitter?: string;
  yelp?: string;
  instagram?: string;
  youtube?: string;
  pinterest?: string;
  blogRss?: string;
  googlePlacesId?: string;
};

export type Settings = {
  allowDuplicateContact?: boolean;
  allowDuplicateOpportunity?: boolean;
  allowFacebookNameMerge?: boolean;
  disableContactTimezone?: boolean;
};

export type GetLocationOutput = {
  location: {
    id?: string;
    companyId?: string;
    name?: string;
    domain?: string;
    address?: string;
    city?: string;
    state?: string;
    logoUrl?: string;
    country?: string;
    postalCode?: string;
    website?: string;
    timezone?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    business?: Business;
    social?: Social;
    settings?: Settings;
    reseller?: {[key: string]: unknown};
  };
};

/**
 * Returns a Location by ID
 * @see https://marketplace.gohighlevel.com/docs/ghl/locations/get-location
 * @see https://github.com/GoHighLevel/highlevel-api-sdk/blob/main/lib/code/locations/models/locations.ts
 *
 * @param client
 * @param input
 */
export async function getLocation(
  client: GoHighLevelClient,
  input: GetLocationInput,
): Promise<GetLocationOutput> {
  return client.get<GetLocationOutput>({
    version: '2021-07-28',
    path: `/locations/${input.locationId}`,
  });
}
