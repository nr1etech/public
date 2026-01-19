import {handleError} from '../errors.mjs';

export type GetAccessTokenInput = {
  clientId: string;
  clientSecret: string;
  code: string;
};

export type GetAccessTokenOutput = {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  userType: string;
  companyId: string;
  locationId: string;
  userId: string;
};

/**
 * Returns an access token given a code.
 *
 * @see https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token
 * @see https://github.com/GoHighLevel/highlevel-api-sdk/blob/main/lib/code/oauth/models/oauth.ts
 *
 * @param input
 */
export async function getAccessToken(
  input: GetAccessTokenInput,
): Promise<GetAccessTokenOutput> {
  if (!input.clientId) {
    throw new Error('clientId is required');
  }
  if (!input.clientSecret) {
    throw new Error('clientSecret is required');
  }
  if (!input.code) {
    throw new Error('code is required');
  }
  const response = await fetch(
    'https://services.leadconnectorhq.com/oauth/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: input.clientId,
        client_secret: input.clientSecret,
        grant_type: 'authorization_code',
        code: input.code,
      }),
    },
  );
  if (!response.ok) {
    await handleError(response);
  }
  const result = (await response.json()) as GetAccessTokenOutput;

  // Some validation
  if (!result.access_token || result.access_token === '') {
    throw new Error('The access_token field is missing or invalid');
  }

  if (!result.refresh_token || result.refresh_token === '') {
    throw new Error('The refresh_token field is missing or invalid');
  }

  if (!result.locationId || result.locationId === '') {
    throw new Error('The locationId field is missing or invalid');
  }

  return result;
}
