type NameParts = {
  firstName: string;
  lastName: string;
};

const HONORIFICS = new Set([
  'mr',
  'mrs',
  'ms',
  'miss',
  'dr',
  'prof',
  'sir',
  'madam',
  'mx',
]);

const SURNAME_PARTICLES = new Set([
  // European
  'da',
  'de',
  'del',
  'della',
  'der',
  'di',
  'du',
  'la',
  'le',
  'van',
  'von',
  // Spanish / Portuguese
  'dos',
  'das',
  // Arabic
  'al',
  'bin',
  'bint',
  'ibn',
  // Dutch / Belgian
  'ten',
  'ter',
  'den',
  // French
  'des',
]);

/**
 * Utility function to split a full name into first and last names as
 * reliably as possible.
 *
 * @param fullName - The full name to splot.
 */
export function splitFullName(fullName: string): NameParts {
  if (!fullName) {
    return {firstName: '', lastName: ''};
  }

  // Normalize whitespace
  const tokens = fullName.trim().replace(/\s+/g, ' ').split(' ');

  // Remove leading honorifics
  while (
    tokens.length &&
    HONORIFICS.has(tokens[0].toLowerCase().replace(/\./g, ''))
  ) {
    tokens.shift();
  }

  if (tokens.length === 0) {
    return {firstName: '', lastName: ''};
  }

  if (tokens.length === 1) {
    return {firstName: tokens[0], lastName: ''};
  }

  if (tokens.length === 2) {
    return {
      firstName: tokens[0],
      lastName: tokens[1],
    };
  }

  // 3+ tokens: preserve surname particles
  let lastNameStart = tokens.length - 1;

  // Walk backwards to capture particles (e.g. "van der", "de la")
  for (let i = tokens.length - 2; i >= 1; i--) {
    const token = tokens[i].toLowerCase();
    if (SURNAME_PARTICLES.has(token)) {
      lastNameStart = i;
    } else {
      break;
    }
  }

  return {
    firstName: tokens[0],
    lastName: tokens.slice(lastNameStart).join(' '),
  };
}
