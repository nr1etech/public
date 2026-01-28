import {handleError} from './errors.mjs';

export type Env = 'test' | 'live';
export type BaseUrlFn = (env: Env) => string;

export type AdyenClientConfig = {
  readonly apiKey: string;
  readonly env: Env;
};

export type GetInput = {
  readonly baseUrl: BaseUrlFn;
  readonly path: string;
};

export type PostInput = {
  readonly baseUrl: BaseUrlFn;
  readonly path: string;
  readonly body: object;
};

export interface AdyenClient {
  readonly apiKey: string;
  readonly env: Env;
  readonly get: <T>(input: GetInput) => Promise<T>;
  readonly post: <T>(input: PostInput) => Promise<T>;
}

export function createAdyenClient(config: AdyenClientConfig): AdyenClient {
  if (!config.apiKey) {
    throw new Error('apiKey is required');
  }
  if (!config.env) {
    throw new Error('env is required');
  }

  const apiKey = config.apiKey;
  const env = config.env;

  const get = async <T,>(input: GetInput): Promise<T> => {
    const response = await fetch(new URL(input.path, input.baseUrl(env)), {
      headers: {
        'Accept': 'application/json',
        'X-API-Key': apiKey,
      },
      method: 'GET',
    });
    if (!response.ok) {
      await handleError(response);
    }
    return (await response.json()) as T;
  };

  const post = async <T,>(input: PostInput): Promise<T> => {
    const response = await fetch(new URL(input.path, input.baseUrl(env)), {
      headers: {
        'Content-Type': 'application/json',
        'x-API-key': apiKey,
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
    apiKey,
    env,
    get,
    post,
  };
}
