import {test, expect} from 'vitest';
import {generateId} from './crypto-generator.mjs';

test('generateId', () => {
  const id = generateId();
  console.log(id);
  expect(id.length).toBe(22);
});
