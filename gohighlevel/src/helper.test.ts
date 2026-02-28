import {test, expect} from 'vitest';
import {createGoHighLevelClient, GoHighLevelClient} from './client.js';

export const TEST_LOCATION_ID = 'gKD1Unpza8X9jm4iabJu';

export function getClient(): GoHighLevelClient {
  const accessToken = process.env.GHL_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error('Missing GHL_ACCESS_TOKEN');
  }
  return createGoHighLevelClient({
    accessToken,
  });
}

test('Empty test', () => {
  expect(true).toBe(true);
});
