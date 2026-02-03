import { MiddeskClient } from "../client.mjs";

export type DeleteWebhookInput = {
  webhookId: string;
};

/**
 * Deletes a webhook.
 *
 * @see https://docs.middesk.com/api-reference/webhooks/delete-a-webhook
 * @param client
 * @param input
 */
export async function deleteWebhook(
  client: MiddeskClient,
  input: DeleteWebhookInput,
): Promise<void> {
  await client.delete({
    path: `/webhooks/${input.webhookId}`,
  });
}
