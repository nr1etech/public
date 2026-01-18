# Publishing

## Publish a new library

```bash
pnpm -r i 
pnpm -r build
npx @changesets/cli
git add <changesetfile and other files>
git commit
npx @changesets/cli version --snapshot snapshot
pnpm -r build
pnpm -r test
npx @changesets/cli publish --tag snapshot --no-git-tag
git reset --hard HEAD
```
