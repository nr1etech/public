# Publishing

## Publish a new library

```bash
pnpm -r i 
pnpm -r build
pnpx @changesets/cli
git add <changesetfile and other files>
git commit
pnpx @changesets/cli version --snapshot snapshot
pnpm -r build
pnpm -r test
pnpx @changesets/cli publish --tag snapshot --no-git-tag
git reset --hard HEAD
```

## Inside npmjs.com

| Field                | Value       |
|----------------------|-------------|
| Organization or user | nr1etech    |
| Repository           | public      |
| Workflow filename    | publish.yml |

Then update package settings to "Require two-factor authentication and disallow tokens"

