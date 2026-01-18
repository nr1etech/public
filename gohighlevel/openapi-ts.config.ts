import {defineConfig} from '@hey-api/openapi-ts';

export default defineConfig({
  input: './path/to/your/openapi.yaml', // or .json
  plugins: [
    {
      name: '@hey-api/typescript',
      requests: {
        name: '{{name}}Input',
      },
    },
  ],
  output: {
    fileName: {
      suffix: null,
    },
    indexFile: false,
    path: '../tmp',
  },
});
