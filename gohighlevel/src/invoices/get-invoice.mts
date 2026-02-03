import {GoHighLevelClient} from '../client.mjs';

export type GetInvoiceInput = {
  locationId: string;
  invoiceId: string;
};

export type AddressDetails = {
  addressLine1?: string | null;
  city?: string | null;
  state?: string | null;
  countryCode?: string | null;
  postalCode?: string | null;
  [key: string]: unknown;
};

export type ContactDetails = {
  id: string | null;
  name: string | null;
  phoneNo?: string | null;
  email?: string | null;
  additionalEmails?: unknown[] | null;
  customFields?: unknown[] | null;
  address?: AddressDetails | null;
  [key: string]: unknown;
};

export type BusinessDetails = {
  name: string | null;
  address?: AddressDetails | null;
  phoneNo?: string | null;
  website?: string | null;
  [key: string]: unknown;
};

export type InvoiceItem = {
  taxes: unknown[];
  taxInclusive: boolean;
  _id: string;
  productId: string;
  priceId: string;
  currency: string;
  name: string;
  qty: number;
  amount: number;
  description: string;
  [key: string]: unknown;
};

export type GetInvoiceOutput = {
  _id: string;
  status: string;
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: string;
  name: string;
  businessDetails: BusinessDetails;
  invoiceNumber: string;
  invoiceNumberPrefix: string;
  currency: string;
  contactDetails: ContactDetails;
  issueDate: string;
  dueDate: string;
  discount?: {[key: string]: unknown};
  invoiceItems: InvoiceItem[];
  total: number;
  title: string;
  amountDue: number;
  createdAt: string;
  updatedAt: string;
  automaticTaxesEnabled?: boolean;
  automaticTaxesCalculated?: boolean;
  paymentSchedule?: {[key: string]: unknown};
  totalSummary: TotalSummaryOutput;
  remindersConfiguration?: RemindersConfigurationOutput;
};

export interface TotalSummaryOutput {
  subTotal: number;
  discount: number;
  tax: number;
}

export interface RemindersConfigurationOutput {
  reminderExecutionDetailsList: {
    [key: string]: unknown;
  };
  reminderSettings: {
    [key: string]: unknown;
  };
}

/**
 * Returns an Invoice by ID
 *
 * @see https://marketplace.gohighlevel.com/docs/ghl/invoices/get-invoice
 * @see https://github.com/GoHighLevel/highlevel-api-sdk/blob/main/lib/code/invoices/models/invoices.ts
 *
 * @param client
 * @param input
 */
export async function getInvoice(
  client: GoHighLevelClient,
  input: GetInvoiceInput,
): Promise<GetInvoiceOutput> {
  return client.get<GetInvoiceOutput>({
    version: '2021-07-28',
    path: `/invoices/${input.invoiceId}`,
    altId: input.locationId,
  });
}
