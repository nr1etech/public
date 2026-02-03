import { MiddeskClient } from "../client.mjs";
import type { Review } from "../reviews/retrieve-review.mjs";

export interface Address {
  id?: string;
  object?: "address";
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  full_address?: string;
  submitted?: boolean;
  created_at?: string;
  updated_at?: string;
  business_id?: string;
  deliverable?: boolean;
  usage?: string;
}

export interface Tin {
  business_id?: string;
  tin?: string;
  mismatch?: boolean;
  unknown?: boolean;
  updated_at?: string;
}

export interface Name {
  id?: string;
  object?: "name";
  name?: string;
  type?: string;
  submitted?: boolean;
  business_id?: string;
}

export interface Website {
  url?: string;
  object?: "website";
}

export interface PhoneNumber {
  id?: string;
  object?: "phone_number";
  number?: string;
  business_id?: string;
}

export interface Person {
  id?: string;
  object?: "person";
  name?: string;
  business_id?: string;
  title?: string;
  date_of_birth?: string;
  ssn_last_4?: string;
}

export interface Business {
  id: string;
  object: "business";
  name: string;
  status: string;
  created_at: string;
  updated_at: string;
  external_id?: string;
  unique_external_id?: string;
  tags?: string[];
  website?: Website;
  tin?: Tin;
  addresses?: Address[];
  names?: Name[];
  phone_numbers?: PhoneNumber[];
  people?: Person[];
  review?: Review;
  // Core fields for creation/retrieval; extend as needed.
}

export type ListBusinessesInput = {
  limit?: number;
  after?: string;
  query?: Record<string, string | number | boolean>;
};

export type ListBusinessesOutput = {
  object: "list";
  data: Business[];
  has_more: boolean;
  total_count: number;
};

/**
 * Returns a list of businesses.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/businesses/list-businesses
 * @param client
 * @param input
 */
export async function listBusinesses(
  client: MiddeskClient,
  input?: ListBusinessesInput,
): Promise<ListBusinessesOutput> {
  const query: Record<string, string | number | boolean> = {
    ...(input?.query ?? {}),
  };
  if (input?.limit != null) query.limit = input.limit;
  if (input?.after != null) query.after = input.after;
  return client.get<ListBusinessesOutput>({
    path: "/businesses",
    query: Object.keys(query).length ? query : undefined,
  });
}
