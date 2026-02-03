import { MiddeskClient } from "../client.mjs";
import type { Webhook } from "./list-webhooks.mjs";

export type UpdateWebhookInput = {
  webhookId: string;
  url?: string;
  events?: string[];
  status?: string;
};

/**
 * Updates a webhook.
 *
 * @see https://docs.middesk.com/api-reference/webhooks/update-a-webhook
 * @param client
 * @param input
 */
export async function updateWebhook(
  client: MiddeskClient,
  input: UpdateWebhookInput,
): Promise<Webhook> {
  const { webhookId, ...body } = input;
  return client.patch<Webhook>({
    path: `/webhooks/${webhookId}`,
    body,
  });
}
