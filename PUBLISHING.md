# Publishing

## Publish a new library

```bash
cd <library>
pnpm -r i 
pnpm run build
npx @changesets/cli
git add <changesetfile and other files>
git commit
npx @changesets/cli version --snapshot snapshot
pnpm -r build
pnpm -r test
npx @changesets/cli publish --tag snapshot --no-git-tag
git push
```
