const STATE_ALIASES: Record<string, string> = {
  alabama: 'AL',
  alabma: 'AL',
  al: 'AL',

  alaska: 'AK',
  ak: 'AK',

  arizona: 'AZ',
  arizonia: 'AZ',
  az: 'AZ',

  arkansas: 'AR',
  arkansaw: 'AR',
  ar: 'AR',

  california: 'CA',
  calif: 'CA',
  californa: 'CA',
  calfornia: 'CA',
  ca: 'CA',

  colorado: 'CO',
  colarado: 'CO',
  co: 'CO',

  connecticut: 'CT',
  conecticut: 'CT',
  conneticut: 'CT',
  ct: 'CT',

  delaware: 'DE',
  de: 'DE',

  florida: 'FL',
  floridia: 'FL',
  fl: 'FL',

  georgia: 'GA',
  ga: 'GA',

  hawaii: 'HI',
  hawai: 'HI',
  hi: 'HI',

  idaho: 'ID',
  id: 'ID',

  illinois: 'IL',
  illinios: 'IL',
  il: 'IL',

  indiana: 'IN',
  in: 'IN',

  iowa: 'IA',
  ia: 'IA',

  kansas: 'KS',
  ks: 'KS',

  kentucky: 'KY',
  kentuckey: 'KY',
  ky: 'KY',

  louisiana: 'LA',
  louisianna: 'LA',
  la: 'LA',

  maine: 'ME',
  main: 'ME',

  maryland: 'MD',
  marlyand: 'MD',
  md: 'MD',

  massachusetts: 'MA',
  massachussetts: 'MA',
  massachusets: 'MA',
  ma: 'MA',

  michigan: 'MI',
  michegan: 'MI',
  mi: 'MI',

  minnesota: 'MN',
  minnesotta: 'MN',
  mn: 'MN',

  mississippi: 'MS',
  mississipi: 'MS',
  ms: 'MS',

  missouri: 'MO',
  missourri: 'MO',
  mo: 'MO',

  montana: 'MT',
  mt: 'MT',

  nebraska: 'NE',
  ne: 'NE',

  nevada: 'NV',
  nv: 'NV',

  newhampshire: 'NH',
  nh: 'NH',

  newjersey: 'NJ',
  nj: 'NJ',

  newmexico: 'NM',
  nm: 'NM',

  newyork: 'NY',
  ny: 'NY',

  northcarolina: 'NC',
  nc: 'NC',

  northdakota: 'ND',
  nd: 'ND',

  ohio: 'OH',
  oh: 'OH',

  oklahoma: 'OK',
  okalahoma: 'OK',
  ok: 'OK',

  oregon: 'OR',
  or: 'OR',

  pennsylvania: 'PA',
  pensylvania: 'PA',
  pa: 'PA',

  rhodeisland: 'RI',
  ri: 'RI',

  southcarolina: 'SC',
  sc: 'SC',

  southdakota: 'SD',
  sd: 'SD',

  tennessee: 'TN',
  tennesee: 'TN',
  tn: 'TN',

  texas: 'TX',
  tx: 'TX',

  utah: 'UT',
  ut: 'UT',

  vermont: 'VT',
  vt: 'VT',

  virginia: 'VA',
  va: 'VA',

  washington: 'WA',
  washinton: 'WA',
  wa: 'WA',

  westvirginia: 'WV',
  wv: 'WV',

  wisconsin: 'WI',
  wisconson: 'WI',
  wi: 'WI',

  wyoming: 'WY',
  wy: 'WY',
};

/**
 * Converts a US state name or abbreviation to a 2-letter state code.
 * - Case insensitive
 * - Ignores spaces, hyphens, dots
 * - Handles common misspellings
 * - Handles state codes
 */
export function usStateToCode(input?: string | null): string | null {
  if (!input) return null;

  const normalized = input
    .trim()
    .toLowerCase()
    .replace(/[^a-z]/g, '');

  // Already a valid 2-letter code
  if (normalized.length === 2) {
    return normalized.toUpperCase();
  }

  return STATE_ALIASES[normalized] ?? null;
}
