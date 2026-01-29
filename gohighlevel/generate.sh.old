#!/usr/bin/env bash

set -euo pipefail
cd "$(dirname "${0}")" || exit 1

# Clone down and fix repo if it does not exist
if [[ ! -d highlevel-api-docs ]]; then
  git clone git@github.com:GoHighLevel/highlevel-api-docs.git
  cd highlevel-api-docs
  rm -rf .git .github docs models assets LICENSE package.json README.md toc.json
  # We have to fix GHL's spec files because they are broken
  sed -i '' 's|"#/components/schemas/BadRequestDTO"|"../common/common-schemas.json#/components/schemas/BadRequestDTO"|g' ./apps/links.json
  sed -i '' 's|"#/components/schemas/UnauthorizedDTO"|"../common/common-schemas.json#/components/schemas/UnauthorizedDTO"|g' ./apps/links.json
  cd ..
fi

# Recreate empty generated directory
rm -rf ./generated
mkdir -p ./generated

# Generate mts files
cd highlevel-api-docs
json_files=($(find . -depth 2 -name "*.json" -type f | sort))
for json_file in "${json_files[@]}"; do
  name=$(basename $json_file .json)
  camel=$(echo "${name}" | tr '-' ' ' | awk '{for(i=1;i<=NF;i++) printf toupper(substr($i,1,1)) substr($i,2)}')
  npx @hey-api/openapi-ts -f ../openapi-ts.config.ts -i $json_file
  mv ../tmp/types.ts ../generated/${name}.mts
  rm -rf ../tmp
#  echo "export * as ${camel} from './${name}.mjs'" >> ../src/generated/index.mts
done
cd ..
