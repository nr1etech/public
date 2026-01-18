import {GoHighLevelClient} from '../client.mjs';
import {INVOICE_API_VERSION} from './invoice-version.mjs';

export type GetInvoiceInput = {
  locationId: string;
  invoiceId: string;
};

/**
 * Returns an Invoice by ID
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
    version: INVOICE_API_VERSION,
    path: `/invoices/${input.invoiceId}`,
    altId: input.locationId,
  });
}

export type GetInvoiceOutput = {
  _id: string;
  status: string;
  liveMode: boolean;
  amountPaid: number;
  altId: string;
  altType: string;
  name: string;
  businessDetails: {[key: string]: unknown};
  invoiceNumber: number;
  currency: string;
  contactDetails: {[key: string]: unknown};
  issueDate: string;
  dueDate: string;
  discount?: {[key: string]: unknown};
  invoiceItems: string[];
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
