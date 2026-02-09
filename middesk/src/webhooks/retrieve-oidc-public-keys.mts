import {MiddeskClient} from '../client.mjs';

export type RetrieveOidcPublicKeysOutput = {
  keys: Array<{
    kty: string;
    kid: string;
    use: string;
    n: string;
    e: string;
  }>;
};

/**
 * Returns OIDC public keys for webhook verification.
 *
 * @see https://docs.middesk.com/api-reference/webhooks/retrieve-oidc-public-keys
 * @param client
 */
export async function retrieveOidcPublicKeys(
  client: MiddeskClient,
): Promise<RetrieveOidcPublicKeysOutput> {
  return client.get<RetrieveOidcPublicKeysOutput>({
    path: '/webhooks/oidc_public_keys',
  });
}
