import {handleError} from './errors.js';

export type GoHighLevelClientConfig = {
  readonly accessToken: string;
  readonly baseUrl?: string;
};

export type GetInput = {
  readonly version: string;
  readonly path: string;
  readonly altId?: string;
  readonly altType?: string;
  readonly locationId?: string;
};

export type PostInput = {
  readonly version: string;
  readonly path: string;
  readonly locationId?: string;
  readonly body: object;
};

export interface GoHighLevelClient {
  readonly baseUrl: string;
  readonly get: <T>(input: GetInput) => Promise<T>;
  readonly post: <T>(input: PostInput) => Promise<T>;
}

export function createGoHighLevelClient(
  config: GoHighLevelClientConfig,
): GoHighLevelClient {
  if (!config.accessToken) {
    throw new Error('accessToken is required');
  }
  const baseUrl = config.baseUrl ?? 'https://services.leadconnectorhq.com';
  const accessToken = config.accessToken;

  const get = async <T>(input: GetInput): Promise<T> => {
    const url = new URL(input.path, baseUrl);
    if (input.altId) {
      url.searchParams.append('altId', input.altId);
      if (input.altType) {
        url.searchParams.append('altType', input.altType);
      } else {
        url.searchParams.append('altType', 'location');
      }
    }
    if (input.locationId) {
      url.searchParams.append('locationId', input.locationId);
    }
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Version: input.version,
      },
      method: 'GET',
    });
    if (!response.ok) {
      await handleError(response);
    }
    return (await response.json()) as T;
  };

  const post = async <T>(input: PostInput): Promise<T> => {
    const url = new URL(input.path, baseUrl);
    if (input.locationId) {
      url.searchParams.append('locationId', input.locationId);
    }
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'Version': input.version,
      },
      method: 'POST',
      body: JSON.stringify(input.body),
    });
    if (!response.ok) {
      await handleError(response);
    }
    return (await response.json()) as T;
  };

  return {
    baseUrl,
    get,
    post,
  };
}
