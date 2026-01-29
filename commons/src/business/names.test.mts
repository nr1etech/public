import {describe, it, expect} from 'vitest';
import {splitFullName} from './names.mjs';

describe('splitFullName', () => {
  it('returns empty parts for empty input', () => {
    expect(splitFullName('')).toEqual({firstName: '', lastName: ''});
    expect(splitFullName('   ')).toEqual({firstName: '', lastName: ''});
  });

  it('handles a single token name', () => {
    expect(splitFullName('Madonna')).toEqual({
      firstName: 'Madonna',
      lastName: '',
    });
  });

  it('splits two-token names into first/last', () => {
    expect(splitFullName('Ada Lovelace')).toEqual({
      firstName: 'Ada',
      lastName: 'Lovelace',
    });
  });

  it('normalizes extra whitespace', () => {
    expect(splitFullName('  Ada   Lovelace  ')).toEqual({
      firstName: 'Ada',
      lastName: 'Lovelace',
    });
  });

  it('strips common honorifics (with or without periods)', () => {
    expect(splitFullName('Dr. Marie Curie')).toEqual({
      firstName: 'Marie',
      lastName: 'Curie',
    });
    expect(splitFullName('Mr John Smith')).toEqual({
      firstName: 'John',
      lastName: 'Smith',
    });
    expect(splitFullName('Prof. Ada Lovelace')).toEqual({
      firstName: 'Ada',
      lastName: 'Lovelace',
    });
  });

  it('keeps surname particles together (single particle)', () => {
    expect(splitFullName('Ludwig van Waals')).toEqual({
      firstName: 'Ludwig',
      lastName: 'van Waals',
    });

    expect(splitFullName('Juan Martin del Potro')).toEqual({
      firstName: 'Juan',
      lastName: 'Martin del Potro',
    });

    expect(splitFullName('Charles de Gaulle')).toEqual({
      firstName: 'Charles',
      lastName: 'de Gaulle',
    });
  });

  it("keeps multi-word surname particles together (e.g., 'van der', 'de la')", () => {
    expect(splitFullName('Johannes van der Waals')).toEqual({
      firstName: 'Johannes',
      lastName: 'van der Waals',
    });

    expect(splitFullName('María de la Cruz')).toEqual({
      firstName: 'María',
      lastName: 'de la Cruz',
    });
  });

  it('handles Arabic particles like bin/bint/al', () => {
    expect(splitFullName('Mohammed bin Salman')).toEqual({
      firstName: 'Mohammed',
      lastName: 'bin Salman',
    });

    expect(splitFullName('Fatima bint Abdullah')).toEqual({
      firstName: 'Fatima',
      lastName: 'bint Abdullah',
    });

    expect(splitFullName('Omar al Bashir')).toEqual({
      firstName: 'Omar',
      lastName: 'al Bashir',
    });
  });

  it('does not incorrectly pull particles from the middle of the name unless they lead the surname', () => {
    // Here, "van" is not right before the surname tail in our heuristic, so lastName remains the tail.
    // (This asserts current behavior; change if you adjust heuristics.)
    expect(splitFullName('Jean Claude van Something Else')).toEqual({
      firstName: 'Jean',
      lastName: 'Else',
    });
  });

  it('preserves diacritics and non-latin characters', () => {
    expect(splitFullName('Marie Skłodowska Curie')).toEqual({
      firstName: 'Marie',
      lastName: 'Skłodowska Curie',
    });

    expect(splitFullName('李 小龍')).toEqual({
      firstName: '李',
      lastName: '小龍',
    });
  });
});
