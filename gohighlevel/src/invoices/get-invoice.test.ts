import {test, expect} from 'vitest';
import {getInvoice} from './get-invoice.js';
import {getClient, TEST_LOCATION_ID} from '../helper.test.js';

test('Test getInvoice @int', async () => {
  const client = getClient();
  const result = await getInvoice(client, {
    locationId: TEST_LOCATION_ID,
    invoiceId: '68b2c50dc5634b82e34a6391',
  });
  expect(result).toBeDefined();
  console.log(result);
});
