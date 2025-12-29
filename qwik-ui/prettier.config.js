/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
  singleQuote: true, // differs from default
  quoteProps: 'consistent', // differs from default
  bracketSpacing: false, // differs from default
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
