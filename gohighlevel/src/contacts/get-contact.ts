import {GoHighLevelClient} from '../client.js';

export type GetContactInput = {
  contactId: string;
};

export interface DndSetting {
  status: string;
  message?: string;
  code?: string;
}

export interface DndSettings {
  Call?: DndSetting;
  Email?: DndSetting;
  SMS?: DndSetting;
  WhatsApp?: DndSetting;
  GMB?: DndSetting;
  FB?: DndSetting;
}

export interface CustomField {
  id?: string;
  value?: string;
}

export interface AttributionSource {
  url: string;
  campaign?: string;
  utmSource?: string;
  utmMedium?: string;
  utmContent?: string;
  referrer?: string;
  campaignId?: string;
  fbclid?: string;
  gclid?: string;
  msclikid?: string;
  dclid?: string;
  fbc?: string;
  fbp?: string;
  fbEventId?: string;
  userAgent?: string;
  ip?: string;
  medium?: string;
  mediumId?: string;
}

export type Contact = {
  id?: string;
  name?: string;
  locationId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  emailLowerCase?: string;
  timezone?: string;
  companyName?: string;
  phone?: string;
  dnd?: boolean;
  dndSettings?: DndSettings;
  type?: string;
  source?: string;
  assignedTo?: string;
  address1?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  website?: string;
  tags?: string[];
  dateOfBirth?: string;
  dateAdded?: string;
  dateUpdated?: string;
  attachments?: string;
  ssn?: string;
  keyword?: string;
  firstNameLowerCase?: string;
  fullNameLowerCase?: string;
  lastNameLowerCase?: string;
  lastActivity?: string;
  customFields?: CustomField[];
  businessId?: string;
  attributionSource?: AttributionSource;
  lastAttributionSource?: AttributionSource;
  visitorId?: string;
};

export type GetContactOutput = {
  contact: Contact;
  traceId: string;
};

/**
 * Returns a contact by ID.
 *
 * @see https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contact
 * @see https://github.com/GoHighLevel/highlevel-api-sdk/blob/main/lib/code/contacts/models/contacts.ts
 *
 * @param client
 * @param input
 */
export async function getContact(
  client: GoHighLevelClient,
  input: GetContactInput,
): Promise<GetContactOutput> {
  return client.get<GetContactOutput>({
    version: '2021-07-28',
    path: `/contacts/${input.contactId}`,
  });
}
