# GoHighLevel Client

[![NPM Version][npm-image]][npm-url]

⚠️ This is an unofficial client library for GoHighLevel.

The official GoHighLevel client library is
[@gohighlevel/api-client](https://www.npmjs.com/package/@gohighlevel/api-client)
with source code [here](https://github.com/GoHighLevel/highlevel-api-sdk)

The official GoHighLevel API documentation can be found
[here](https://marketplace.gohighlevel.com/docs/oauth/GettingStarted).

The offocial GoHighLevel API documentation source code can be found
[here](https://github.com/GoHighLevel/highlevel-api-docs).

## Usage

To install using `pnpm`

```bash
pnpm i @nr1e/gohighlevel
```

Create a client and use it to fetch an invoice

```typescript
import {createGoHighLevelClient} from '@nr1e/gohighlevel';
import {getInvoice} from '@nr1e/gohighlevel/invoices';

const client = createGoHighLevelClient({
    accessToken: 'YOUR_ACCESS_TOKEN',
});
const invoice = await getInvoice(client, {
    locationId: 'YOUR_LOCATION_ID',
    invoiceId: 'YOUR_INVOICE_ID',
});
```

## Why does this exist?

We created this client because the official client didn't meet our requirements.

**Unnecessary Dependencies** — The existing client depends on axios, express and mongodb libraries which are not
necessary for our use case and increase the bundle size.

**Unoptimal Tree Shaking** — The existing client makes heavy use of classes which is not optimal for tree shaking.
If you want to read up on modular design and it's impact in tree shaking, we recommend reading
[Hoschschule Der Medien's Valibot Thesis](https://valibot.dev/thesis.pdf).

**Client Constructor Issues** — Our use case only requires access to an access key. The official client required us to
provide a client ID and secret along which is unnecessary for our use case.

**Poor Quality OpenAPI Specifications** — The repository that contains the OpenAPI specifications used to generate the
GoHighLevel API documentation does not provide a unified openapi.yaml or openapi.json file. It also contains broken
references and inconsistently named types. This makes it difficult to create a generated client in oneshot.

## Why open source this?

This is not magic and we're happy to share it with the community if it helps anyone else.

## What's not included?

This client is not intended to be a full replacement for the official client. It is also not intended to cover every
possible use case. We only add functionality as needed for our use cases. Since we prefer composition and procedural
approaches over object oriented approaches for clients like this, it's extremely easy to add additional functionality
as needed. Follow the existing patterns and you'll be fine.

We've standardized on ESM. We do not plan to release CJS or UMD versions.

## Usage

Install the package

```bash
pnpm i @nr1e/gohighlevel
```

[npm-url]: https://npmjs.org/package/@nr1e/gohighlevel
[npm-image]: https://img.shields.io/npm/v/@nr1e/gohighlevel.svg
