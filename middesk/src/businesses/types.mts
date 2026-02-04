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
  verified?: boolean;
  verified_by?: string;
  issued?: boolean | null;
  error?: string | null;
  updated_at?: string;
  created_at?: string;
  object?: "tin";
  name?: string;
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
  review?: {
    id?: string;
    object?: "review";
    created_at?: string;
    updated_at?: string;
    completed_at?: string;
    tasks?: Array<{
      category?: string;
      key?: string;
      label?: string;
      message?: string;
      name?: string;
      status?: string;
      sub_label?: string;
      sources?: unknown[];
    }>;
  };
}
