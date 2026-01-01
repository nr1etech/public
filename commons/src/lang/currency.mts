/**
 * Formats a currency amount using the Intl.NumberFormat API
 *
 * @param amount - The amount in cents (e.g., 1000 for $10.00) as number or string
 * @param currency - The currency code (e.g., 'USD', 'EUR')
 * @param locale - The locale to use (e.g., 'en-US', 'fr-FR') - defaults to 'en-US'
 * @returns Formatted currency string
 */
export const formatCurrency = (
  amount: number | string,
  currency: string,
  locale?: string,
): string => {
  const numericAmount =
    typeof amount === 'string' ? parseFloat(amount) : amount;
  return new Intl.NumberFormat(locale ?? 'en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(numericAmount);
};
