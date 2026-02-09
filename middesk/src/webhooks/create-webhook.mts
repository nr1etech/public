import {MiddeskClient} from '../client.mjs';
import type {Webhook} from './list-webhooks.mjs';

export type CreateWebhookInput = {
  url: string;
  events: string[];
  // Add other fields
};

/**
 * Creates a webhook.
 *
 * @see https://docs.middesk.com/api-reference/webhooks/create-a-webhook
 * @param client
 * @param input
 */
export async function createWebhook(
  client: MiddeskClient,
  input: CreateWebhookInput,
): Promise<Webhook> {
  return client.post<Webhook>({
    path: '/webhooks',
    body: input,
  });
}
