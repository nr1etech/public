import {test} from 'vitest';
import {createAdyenClient} from './client.mjs';
import {createAccountHolder} from './bcl/index.mjs';
import {createLegalEntity, createTransferInstrument, getLegalEntity} from './lem/index.mjs';

test('Test getLegalEntity @only', async () => {
  const client = createAdyenClient({
    apiKey: process.env.LEM_API_KEY!,
    env: 'test',
  });
  const output = await getLegalEntity(client, 'LE32CVS22322775NT3G4KFR5Q');
  console.log('Get legal entity', JSON.stringify(output, null, 2));
});

test('Test createLegalEntity @none', async () => {
  const client = createAdyenClient({
    apiKey: process.env.LEM_API_KEY!,
    env: 'test',
  });
  const output = await createLegalEntity(client, {
    type: 'organization',
    organization: {
      legalName: 'Test Company 3 LLC',
      registeredAddress: {
        city: 'San Francisco',
        country: 'US',
        postalCode: '94107',
        stateOrProvince: 'CA',
        street: '123 Market Street',
      },
      email: 'test@example.com',
      phone: {
        number: '+14155551234',
        type: 'mobile',
      },
    },
  });
  console.log('Legal entity', JSON.stringify(output, null, 2));
});

// {
//   id: 'LE32CTB22322765NNZPLK29CG',
//   organization: Organization {
//     email: 'test@example.com',
//     legalName: 'Test Company LLC',
//     phone: PhoneNumber {
//       number: '+14155551234',
//       phoneCountryCode: 'US',
//       type: 'mobile'
//     },
//     registeredAddress: Address {
//       city: 'San Francisco',
//       country: 'US',
//       postalCode: '94107',
//       stateOrProvince: 'CA',
//       street: '123 Market Street'
//     }
//   },
//   type: 'organization'
// }

// {
//   "id": "LE32CVS22322775NT3G4KFR5Q",
//   "organization": {
//     "email": "test@example.com",
//     "legalName": "Test Company 2 LLC",
//     "phone": {
//       "number": "+14155551234",
//       "phoneCountryCode": "US",
//       "type": "mobile"
//     },
//     "registeredAddress": {
//       "city": "San Francisco",
//       "country": "US",
//       "postalCode": "94107",
//       "stateOrProvince": "CA",
//       "street": "123 Market Street"
//     }
//   },
//   "type": "organization"
// }

// {
//   "organization": {
//     "email": "test@example.com",
//     "phone": {
//       "number": "+14155551234",
//       "phoneCountryCode": "US",
//       "type": "mobile"
//     },
//     "legalName": "Test Company 3 LLC",
//     "registeredAddress": {
//       "city": "San Francisco",
//       "country": "US",
//       "postalCode": "94107",
//       "stateOrProvince": "CA",
//       "street": "123 Market Street"
//     }
//   },
//   "type": "organization",
//   "id": "LE32CT622322775NT3JV43MGF"
// }

test('Test createAccountHolder @none', async () => {
  const client = createAdyenClient({
    apiKey: process.env.BCL_API_KEY!,
    env: 'test',
  });
  const output = await createAccountHolder(client, {
    legalEntityId: 'LE32CVS22322775NT3G4KFR5Q',
  });
  console.log('Account holder', JSON.stringify(output, null, 2));
});

test('Test createTransferInstrument', async () => {
  const client = createAdyenClient({
    apiKey: process.env.LEM_API_KEY!,
    env: 'test',
  });
  const output = await createTransferInstrument(client, {
    legalEntityId: 'LE32CTB22322765NNZPLK29CG',
    type: 'bankAccount',
    bankAccount: {
      accountIdentification: {
        type: 'usLocal',
        // https://developer.payments.jpmorgan.com/docs/commerce/online-payments/testing
        routingNumber: '122000247',
        accountNumber: '0888271156',
        accountType: 'checking',
      },
      bankName: 'Chase',
      countryCode: 'US',
    },
  });
  console.log('Transfer instrument', JSON.stringify(output, null, 2));
});

// {
//   "balancePlatform": "ClientloopAdminipayPlatform",
//   "legalEntityId": "LE32CTB22322765NNZPLK29CG",
//   "timeZone": "America/Los_Angeles",
//   "capabilities": {
//     "receiveFromPlatformPayments": {
//       "enabled": true,
//       "requested": true,
//       "allowed": false,
//       "verificationStatus": "pending"
//     },
//     "receiveFromBalanceAccount": {
//       "enabled": true,
//       "requested": true,
//       "allowed": false,
//       "verificationStatus": "pending"
//     },
//     "sendToBalanceAccount": {
//       "enabled": true,
//       "requested": true,
//       "allowed": false,
//       "verificationStatus": "pending"
//     },
//     "sendToTransferInstrument": {
//       "enabled": true,
//       "requested": true,
//       "allowed": false,
//       "transferInstruments": [
//         {
//           "enabled": true,
//           "requested": true,
//           "allowed": false,
//           "id": "SE32CVS22322775NT3M823SZH",
//           "verificationStatus": "pending"
//         },
//         {
//           "enabled": true,
//           "requested": true,
//           "allowed": false,
//           "id": "SE32CN822322775NRDHJ4BZBN",
//           "verificationStatus": "pending"
//         }
//       ],
//       "verificationStatus": "pending"
//     },
//     "receivePayments": {
//       "enabled": true,
//       "requested": true,
//       "allowed": false,
//       "verificationStatus": "pending"
//     }
//   },
//   "id": "AH32CQB22322B35NT3NCVBDQH",
//   "status": "active"
// }

// {
//   "balancePlatform": "ClientloopAdminipayPlatform",
//   "legalEntityId": "LE32CVS22322775NT3G4KFR5Q",
//   "timeZone": "America/Los_Angeles",
//   "capabilities": {
//     "receiveFromPlatformPayments": {
//       "enabled": true,
//       "requested": true,
//       "allowed": false,
//       "verificationStatus": "pending"
//     },
//     "receiveFromBalanceAccount": {
//       "enabled": true,
//       "requested": true,
//       "allowed": false,
//       "verificationStatus": "pending"
//     },
//     "sendToBalanceAccount": {
//       "enabled": true,
//       "requested": true,
//       "allowed": false,
//       "verificationStatus": "pending"
//     },
//     "sendToTransferInstrument": {
//       "enabled": true,
//       "requested": true,
//       "allowed": false,
//       "verificationStatus": "pending"
//     },
//     "receivePayments": {
//       "enabled": true,
//       "requested": true,
//       "allowed": false,
//       "verificationStatus": "pending"
//     }
//   },
//   "id": "AH32CQB22322B35NT3NJWBFDJ",
//   "status": "active"
// }
