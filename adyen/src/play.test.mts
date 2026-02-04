import {test} from 'vitest';
import {createAdyenClient} from './client.mjs';
import {createAccountHolder} from './bcl/index.mjs';
import {
  createBusinessLine,
  createLegalEntity,
  createTransferInstrument,
  getLegalEntity,
  updateLegalEntity,
} from './lem/index.mjs';
// import {createStore} from './management/index.mjs';

test('Test getLegalEntity @none', async () => {
  const client = createAdyenClient({
    apiKey: process.env.LEM_API_KEY!,
    env: 'test',
  });
  const output = await getLegalEntity(client, 'LE32CVS22322775NT3G4KFR5Q');
  console.log('Get legal entity', JSON.stringify(output, null, 2));
});

test('Test createLegalEntity (Organization) @none', async () => {
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
      taxInformation: [
        {
          country: 'US',
          number: '00-1234567',
          type: 'EIN',
        },
      ],
    },
  });
  console.log('Organization', JSON.stringify(output, null, 2));
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

test('Test createLegalEntity (Individual) @none', async () => {
  const client = createAdyenClient({
    apiKey: process.env.LEM_API_KEY!,
    env: 'test',
  });
  const output = await createLegalEntity(client, {
    type: 'individual',
    individual: {
      name: {
        firstName: 'James',
        lastName: 'Kirk',
      },
      residentialAddress: {
        street: '51 W 1st St',
        city: 'Riverside',
        stateOrProvince: 'IA',
        country: 'US',
        postalCode: '52327',
      },
    },
  });
  console.log('Individual', JSON.stringify(output, null, 2));
});

// TODO This is what an error looks like
// {
//   "type": "https://docs.adyen.com/errors/validation",
//   "title": "The request is missing required fields or contains invalid data.",
//   "status": 422,
//   "detail": "Invalid legal entity information provided",
//   "requestId": "NO_PSP_REF_1770175188331646",
//   "invalidFields": [
//     {
//       "name": "individual.residentialAddress.postalCode",
//       "message": "Required field was not provided."
//     },
//     {
//       "name": "individual.residentialAddress.stateOrProvince",
//       "value": "Iowa",
//       "message": "Not valid for US. Allowed values: [DE, HI, PR, TX, MA, MD, IA... For full list visit documentation."
//     }
//   ],
//   "errorCode": "30_102"
// }

// {
//   "individual": {
//     "name": {
//       "firstName": "James",
//       "lastName": "Kirk"
//     },
//     "residentialAddress": {
//       "city": "Riverside",
//       "country": "US",
//       "postalCode": "52327",
//       "stateOrProvince": "IA",
//       "street": "51 W 1st St"
//     }
//   },
//   "type": "individual",
//   "id": "LE32CM722322795NTXGNX53SZ"
// }

test('Test associate individual with org @none', async () => {
  const client = createAdyenClient({
    apiKey: process.env.LEM_API_KEY!,
    env: 'test',
  });
  const output = await updateLegalEntity(client, 'LE32CTB22322765NNZPLK29CG', {
    entityAssociations: [
      {
        jobTitle: 'Captain',
        legalEntityId: 'LE32CM722322795NTXGNX53SZ',
        type: 'signatory',
      },
    ],
  });
  console.log('Legal entity associations', JSON.stringify(output, null, 2));
});

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

test('Test createTransferInstrument @none', async () => {
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

test('Test create business line @none', async () => {
  const client = createAdyenClient({
    apiKey: process.env.LEM_API_KEY!,
    env: 'test',
  });
  const output = await createBusinessLine(client, {
    legalEntityId: 'LE32CTB22322765NNZPLK29CG',
    service: 'paymentProcessing',
    industryCode: '23', // Construction & installation
    salesChannels: ['pos', 'eCommerce', 'payByLink'],
  });
  console.log(
    'Payment processing business line',
    JSON.stringify(output, null, 2),
  );
});

// {
//   "industryCode": "23",
//   "legalEntityId": "LE32CTB22322765NNZPLK29CG",
//   "salesChannels": [
//     "eCommerce",
//     "pos",
//     "payByLink"
//   ],
//   "service": "paymentProcessing",
//   "id": "SE32CM722322795NTXQ496ZT5"
// }

// test('Test create store @only', async () => {
//   const client = createAdyenClient({
//     apiKey: process.env.LEM_API_KEY!,
//     env: 'test',
//   });
//   const output = await createStore(client, {});
// });

// 5. Create store - https://docs.adyen.com/api-explorer/Management/latest/post/stores
// 6. Add payment methods to store - https://docs.adyen.com/api-explorer/Management/latest/post/merchants/(merchantId)/paymentMethodSettings
// 7. Add an account holder - https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders
// 8. Create balance account - https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts
// 9. Send in acceptance of terms of service - https://docs.adyen.com/platforms/onboard-users/terms-of-service/
// 10. Send in security questionnaire - https://docs.adyen.com/platforms/onboard-users/pci-forms#generate-questionnaires/
// 11. Resolver verification errors. We can get verification updates from https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}
