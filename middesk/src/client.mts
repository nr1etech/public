import { handleError } from "./errors.mjs";

export type MiddeskClientConfig = {
  readonly apiKey: string;
  readonly baseUrl?: string;
};

export type GetInput = {
  readonly path: string;
  readonly query?: Record<string, string | number | boolean>;
};

export type PostInput = {
  readonly path: string;
  readonly body?: object;
};

export type PatchInput = {
  readonly path: string;
  readonly body: object;
};

export type DeleteInput = {
  readonly path: string;
};

export interface MiddeskClient {
  readonly baseUrl: string;
  readonly get: <T>(input: GetInput) => Promise<T>;
  readonly post: <T>(input: PostInput) => Promise<T>;
  readonly patch: <T>(input: PatchInput) => Promise<T>;
  readonly delete: <T>(input: DeleteInput) => Promise<T>;
}

export function createMiddeskClient(
  config: MiddeskClientConfig,
): MiddeskClient {
  if (!config.apiKey) {
    throw new Error("apiKey is required");
  }
  let baseUrl = config.baseUrl ?? "https://api.middesk.com/v1";
  if (!baseUrl.endsWith("/")) {
    baseUrl += "/";
  }
  const apiKey = config.apiKey;

  const get = async <T,>(input: GetInput): Promise<T> => {
    const path = input.path.startsWith("/") ? input.path.slice(1) : input.path;
    const url = new URL(path, baseUrl);
    if (input.query) {
      for (const [key, value] of Object.entries(input.query)) {
        url.searchParams.append(key, String(value));
      }
    }
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      method: "GET",
    });
    if (!response.ok) {
      await handleError(response);
    }
    return (await response.json()) as T;
  };

  const post = async <T,>(input: PostInput): Promise<T> => {
    const path = input.path.startsWith("/") ? input.path.slice(1) : input.path;
    const url = new URL(path, baseUrl);
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      method: "POST",
      body: input.body ? JSON.stringify(input.body) : undefined,
    });
    if (!response.ok) {
      await handleError(response);
    }
    return (await response.json()) as T;
  };

  const patch = async <T,>(input: PatchInput): Promise<T> => {
    const path = input.path.startsWith("/") ? input.path.slice(1) : input.path;
    const url = new URL(path, baseUrl);
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      method: "PATCH",
      body: JSON.stringify(input.body),
    });
    if (!response.ok) {
      await handleError(response);
    }
    return (await response.json()) as T;
  };

  const del = async <T,>(input: DeleteInput): Promise<T> => {
    const path = input.path.startsWith("/") ? input.path.slice(1) : input.path;
    const url = new URL(path, baseUrl);
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      method: "DELETE",
    });
    if (!response.ok) {
      await handleError(response);
    }
    // Delete might return 204 No Content or JSON.
    // Assuming JSON for now, or check content-type.
    if (response.status === 204) {
      return {} as T;
    }
    return (await response.json()) as T;
  };

  return {
    baseUrl,
    get,
    post,
    patch,
    delete: del,
  };
}
