import {test, expect} from 'vitest';
import {generateApiKey, generateId} from './crypto-generator.mjs';

test('generateId', () => {
  const id = generateId();
  console.log(id);
  expect(id.length).toBe(22);
});

test('Test generateApiKey', () => {
  const apiKey = generateApiKey();
  console.log(apiKey);
  expect(apiKey).toBeDefined();
}, 10000);
