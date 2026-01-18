import {handleError} from './errors.mjs';

export interface GoHighLevelClientConfig {
  readonly accessToken: string;
  readonly baseUrl?: string;
}

export interface GetInput {
  readonly version: string;
  readonly path: string;
  readonly altId?: string;
  readonly altType?: string;
}

export interface GoHighLevelClient {
  readonly baseUrl: string;
  readonly get: <T>(input: GetInput) => Promise<T>;
}

export function createGoHighLevelClient(
  config: GoHighLevelClientConfig,
): GoHighLevelClient {
  if (!config.accessToken) {
    throw new Error('accessToken is required');
  }
  const baseUrl = config.baseUrl ?? 'https://services.leadconnectorhq.com';
  const accessToken = config.accessToken;
  const get = async <T,>(input: GetInput): Promise<T> => {
    const url = new URL(input.path, baseUrl);
    if (input.altId) {
      url.searchParams.append('altId', input.altId);
      if (input.altType) {
        url.searchParams.append('altType', input.altType);
      } else {
        url.searchParams.append('altType', 'location');
      }
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
  return {
    baseUrl,
    get,
  };
}
