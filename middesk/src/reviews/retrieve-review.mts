import {MiddeskClient} from '../client.mjs';

export interface Review {
  id: string;
  object: 'review';
  business_id?: string;
  status: string;
  created_at: string;
  updated_at: string;
  tasks?: unknown[];
}

export type RetrieveReviewInput = {
  business_id: string;
};

/**
 * Returns a review for a business.
 *
 * @see https://docs.middesk.com/api-reference/business-verification/reviews/retrieve-a-review-for-a-business
 * @param client
 * @param input
 */
export async function retrieveReview(
  client: MiddeskClient,
  input: RetrieveReviewInput,
): Promise<Review> {
  return client.get<Review>({
    path: `/businesses/${input.business_id}/review`,
  });
}
