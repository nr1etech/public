import {MiddeskClient} from '../client.mjs';

export interface Website {
  url: string;
  object: 'website';
  // Add analysis fields
}

export type RetrieveWebsiteAnalysisInput = {
  businessId: string;
};

/**
 * Returns website analysis for a business.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/websites/retrieve-website-analysis-for-a-business
 * @param client
 * @param input
 */
export async function retrieveWebsiteAnalysis(
  client: MiddeskClient,
  input: RetrieveWebsiteAnalysisInput,
): Promise<Website> {
  return client.get<Website>({
    path: `/businesses/${input.businessId}/website`,
  });
}
