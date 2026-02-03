# USPS Addresses API Client

[![NPM Version][npm-image]][npm-url]
[![GitHub Actions][github-image]][github-url]

⚠️ This is an unofficial client library for the USPS Addresses API.

The official USPS API documentation can be found
[here](https://developers.usps.com/addressesv3).

## Usage

To install using `pnpm`

```bash
pnpm i @nr1e/usps
```

Create a client and use it to validate an address

```typescript
import { createUSPSClient } from "@nr1e/usps";
import { getAccessToken } from "@nr1e/usps/oauth";
import { validateAddress } from "@nr1e/usps/addresses";

const tokenResponse = await getAccessToken({
    consumerKey: "YOUR_CONSUMER_KEY",
    consumerSecret: "YOUR_CONSUMER_SECRET",
});

const client = createUSPSClient({
    accessToken: tokenResponse.access_token,
});

const result = await validateAddress(client, {
    streetAddress: "1600 Pennsylvania Avenue NW",
    city: "Washington",
    state: "DC",
});
```

## Why does this exist?

We created this client because we needed a lightweight, browser-compatible solution for the USPS Addresses API.

**Browser Compatibility** — The client uses standard Web APIs (`fetch`) and works in both Node.js and browser environments without additional dependencies.

**OAuth 2.0 Support** — Built-in support for OAuth 2.0 client credentials flow with automatic token management.

**Type Safety** — Full TypeScript support with proper types matching the USPS API specification.

**Tree Shaking** — Modular design with function exports that enable optimal tree shaking for smaller bundle sizes.

## Why open source this?

This is not magic and we're happy to share it with the community if it helps anyone else.

## What's not included?

This client is not intended to be a full replacement for all USPS APIs. It currently only supports the Addresses API v3 endpoints:

- Address standardization (`/addresses/v3/address`)
- City/State lookup by ZIP code (`/addresses/v3/city-state`)
- ZIP code lookup by address (`/addresses/v3/zipcode`)

We only add functionality as needed for our use cases. Since we prefer composition and procedural approaches over object oriented approaches for clients like this, it's extremely easy to add additional functionality as needed. Follow the existing patterns and you'll be fine.

We've standardized on ESM. We do not plan to release CJS or UMD versions.

## Available APIs

1. **`validateAddress`** - `/addresses/v3/address`
    - Standardizes and validates street addresses
    - Returns ZIP+4, corrections, matches, and additional info

2. **`getCityState`** - `/addresses/v3/city-state`
    - Returns city and state for a given ZIP code

3. **`getZIPCode`** - `/addresses/v3/zipcode`
    - Returns ZIP code and ZIP+4 for a given address

## Usage Examples

### Address Standardization

```typescript
import { createUSPSClient } from "@nr1e/usps";
import { getAccessToken } from "@nr1e/usps/oauth";
import { validateAddress } from "@nr1e/usps/addresses";

const tokenResponse = await getAccessToken({
    consumerKey: "YOUR_CONSUMER_KEY",
    consumerSecret: "YOUR_CONSUMER_SECRET",
});

const client = createUSPSClient({
    accessToken: tokenResponse.access_token,
});

const result = await validateAddress(client, {
    streetAddress: "1600 Pennsylvania Avenue NW",
    city: "Washington",
    state: "DC",
    ZIPCode: "20500",
});
```

### City/State Lookup by ZIP Code

```typescript
import { getCityState } from "@nr1e/usps/addresses";

const result = await getCityState(client, {
    ZIPCode: "20500",
});
```

### ZIP Code Lookup by Address

```typescript
import { getZIPCode } from "@nr1e/usps/addresses";

const result = await getZIPCode(client, {
    streetAddress: "1600 Pennsylvania Avenue NW",
    city: "Washington",
    state: "DC",
});
```

[github-url]: https://github.com/nr1etech/lib-js/actions
[github-image]: https://github.com/nr1etech/lib-js/workflows/publish/badge.svg
[npm-url]: https://npmjs.org/package/@nr1e/usps
[npm-image]: https://img.shields.io/npm/v/@nr1e/usps.svg
