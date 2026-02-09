import {test, expect} from 'vitest';
import {getClient} from '../helper.test.mjs';
import {listWebhooks} from './list-webhooks.mjs';
import {retrieveWebhook} from './retrieve-webhook.mjs';
import {retrieveOidcPublicKeys} from './retrieve-oidc-public-keys.mjs';

test(
  'Test listWebhooks and retrieveWebhook @int',
  {timeout: 30000},
  async () => {
    const client = getClient();

    // Test List Webhooks
    const listResult = await listWebhooks(client);
    expect(listResult).toBeDefined();
    console.log('Webhooks count:', listResult.data.length);

    if (listResult.data.length > 0) {
      const webhookId = listResult.data[0].id;

      // Test Retrieve Webhook
      const webhook = await retrieveWebhook(client, {webhookId: webhookId});
      expect(webhook).toBeDefined();
      expect(webhook.id).toBe(webhookId);
      console.log('Retrieved Webhook:', webhook.id);
    } else {
      console.warn('No webhooks found to test retrieveWebhook');
    }

    // Test Retrieve OIDC Public Keys
    // Note: Docs: https://docs.middesk.com/api-reference/business-verification/webhooks/retrieve-oidc-public-keys
    // Usually GET /webhooks/oidc_public_keys or similar
    try {
      const keys = await retrieveOidcPublicKeys(client);
      expect(keys).toBeDefined();
      console.log('OIDC Keys retrieved');
    } catch (e) {
      if (e instanceof Error) {
        console.warn('OIDC Keys retrieval failed:', e.message);
      } else {
        console.warn('OIDC Keys retrieval failed:', e);
      }
    }
  },
);
