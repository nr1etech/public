<div style="background: gray; padding: 20px">
    <img width="200" src="https://nr1e.com/images/logo-tagline.svg" />
</div>

# NR1E Public Monorepo

This monorepo contains NR1E public libraries, examples, and documentation. It aims to provide reusable
utilities and components to speed up development by reducing boilerplate code and standardizing common patterns.

## Structure

 - `.github/workflows` - Reusable CI/CD workflows
 - `adyen` - Custom Adyen client library
 - `aws` - AWS SDK wrappers and utility functions
 - `commons` - Common utilities for TypeScript/JavaScript
 - `gohighlevel` - Custom GoHighLevel client library
 - `logging` - Logging utilities
 - `lucia-adapter-dynamodb` - DynamoDB adapter for Lucia authentication library
 - `middesk` - Custom Middesk client library
 - `qwik-icons` - Reusable Qwik Icons as Components
 - `qwik-ui` - Reusable Qwik UI Components
 - `usps` - Custom USPS client library

## Contributors

To have your changes merged into a release, you must generate a changset. From the root
of the project, you must issue the following command and answer the questions. It's 
recommended you do this with your changes, not after.

```bash
npx @changesets/cli
```
