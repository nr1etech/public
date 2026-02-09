import {MiddeskClient} from '../client.mjs';

export interface Webhook {
  id: string;
  object: 'webhook';
  url: string;
  status: string;
  created_at: string;
  updated_at: string;
  events?: string[];
  secret?: string;
  // Add other fields
}

export type ListWebhooksInput = {
  limit?: number;
  query?: Record<string, string | number | boolean>;
};

export type ListWebhooksOutput = {
  object: 'list';
  data: Webhook[];
  has_more: boolean;
  total_count: number;
};

/**
 * Returns a list of webhooks.
 *
 * @see https://docs.middesk.com/api-reference/webhooks/list-webhooks
 * @param client
 * @param input
 */
export async function listWebhooks(
  client: MiddeskClient,
  input?: ListWebhooksInput,
): Promise<ListWebhooksOutput> {
  const query: Record<string, string | number | boolean> = {
    ...(input?.query ?? {}),
  };
  if (input?.limit != null) query.limit = input.limit;
  return client.get<ListWebhooksOutput>({
    path: '/webhooks',
    query: Object.keys(query).length ? query : undefined,
  });
}
