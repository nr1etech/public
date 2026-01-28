# Adyen Client

[![NPM Version][npm-image]][npm-url]
[![GitHub Actions][github-image]][github-url]

⚠️ This is an unofficial client library for Adyen.

The official Adyen client libraries may be found at
[@adyen/api-library](https://www.npmjs.com/package/@adyen/api-library) and
[@adyen/adyen-web](https://www.npmjs.com/package/@adyen/adyen-web)

The official Adyen API documentation can be found
[here](https://docs.adyen.com/api-explorer/).

## Usage

To install using `pnpm`

```bash
pnpm i @nr1e/adyen
```

Create a client and use it to fetch an invoice

```typescript
TODO;
```

## Why does this exist?

We created this client because the official client didn't meet our requirements.

**Unoptimal Tree Shaking** — The existing client makes heavy use of classes which is not optimal for tree shaking.
If you want to read up on modular design and it's impact in tree shaking, we recommend reading
[Hoschschule Der Medien's Valibot Thesis](https://valibot.dev/thesis.pdf).

**Difficult Usage Patterns** — The existing client was difficult to use because of how it was abstracted. We wanted
simpler usage patterns that our developers could follow without having to dig around in source code to figure out
the patterns.

**Useful Abstractions** — With some APIs it's unclear what's required or not. For example when creating a legal entity
different parameters matter depending on the country and type of the legal entity. These details have been asbtracted
to be more useful and reduce errors.

Example with the Adyen client

```typescript
TODO;
```

Example with the NR1E client

```typescript
TODO;
```

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
pnpm i @nr1e/adyen
```

[github-url]: https://github.com/nr1etech/lib-js/actions
[github-image]: https://github.com/nr1etech/lib-js/workflows/publish/badge.svg
[npm-url]: https://npmjs.org/package/@nr1e/gohighlevel
[npm-image]: https://img.shields.io/npm/v/@nr1e/gohighlevel.svg
