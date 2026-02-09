# Middesk Client

[![NPM Version][npm-image]][npm-url]

⚠️ This is an unofficial client library for Middesk.

The official Middesk API documentation can be found
[here](https://docs.middesk.com/).

## Usage

To install using `pnpm`

```bash
pnpm i @nr1e/middesk
```

Create a client and use it to list businesses

```typescript
import {createMiddeskClient} from '@nr1e/middesk';
import {listBusinesses} from '@nr1e/middesk/businesses';

const client = createMiddeskClient({
    apiKey: 'YOUR_API_KEY',
});
const {data: businesses} = await listBusinesses(client);
```

## Why does this exist?

We created this client because we prefer a lightweight, tree-shakeable client using native `fetch`.

**No 3rd Party Dependencies** — This client uses native `fetch` and has zero runtime dependencies.

**Tree Shaking** — This client uses a functional approach instead of classes, which is optimal for tree shaking.

## Why open source this?

This is not magic and we're happy to share it with the community if it helps anyone else.

## What's not included?

This client is not intended to cover every possible use case. We only add functionality as needed for our use cases. Since we prefer composition and procedural approaches over object oriented approaches for clients like this, it's extremely easy to add additional functionality as needed. Follow the existing patterns and you'll be fine.

We've standardized on ESM. We do not plan to release CJS or UMD versions.

[npm-url]: https://npmjs.org/package/@nr1e/middesk
[npm-image]: https://img.shields.io/npm/v/@nr1e/middesk.svg
