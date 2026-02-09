import {MiddeskClient} from '../client.mjs';

export interface PolicyResult {
  id: string;
  object: 'policy_result';
  business_id: string;
  // Add fields
}

export type ListPolicyResultsInput = {
  business_id: string;
  limit?: number;
  query?: Record<string, string | number | boolean>;
};

export type ListPolicyResultsOutput = {
  object: 'list';
  data: PolicyResult[];
  has_more: boolean;
  total_count: number;
};

/**
 * Returns policy results for a business.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/policy-results/list-policy-results-for-a-business
 * @param client
 * @param input
 */
export async function listPolicyResults(
  client: MiddeskClient,
  input: ListPolicyResultsInput,
): Promise<ListPolicyResultsOutput> {
  const query: Record<string, string | number | boolean> = {
    ...(input.query ?? {}),
  };
  if (input.limit != null) query.limit = input.limit;
  return client.get<ListPolicyResultsOutput>({
    path: `/businesses/${input.business_id}/policy-results`,
    query: Object.keys(query).length ? query : undefined,
  });
}
