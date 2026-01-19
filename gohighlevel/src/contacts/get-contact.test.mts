import {test, expect} from 'vitest';
import {getContact} from './get-contact.mjs';
import {getClient} from '../helper.test.mjs';

test('Test getInvoice @int', async () => {
  const client = getClient();
  const result = await getContact(client, {
    contactId: '4J5D67VLqIuE9nQroHsa',
  });
  expect(result).toBeDefined();
  console.log(result);
});
