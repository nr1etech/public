import {MiddeskClient} from '../client.mjs';
import type {Webhook} from './list-webhooks.mjs';

export type RetrieveWebhookInput = {
  webhookId: string;
};

/**
 * Returns a webhook by ID.
 *
 * @see https://docs.middesk.com/api-reference/webhooks/retrieve-a-webhook
 * @param client
 * @param input
 */
export async function retrieveWebhook(
  client: MiddeskClient,
  input: RetrieveWebhookInput,
): Promise<Webhook> {
  return client.get<Webhook>({
    path: `/webhooks/${input.webhookId}`,
  });
}
