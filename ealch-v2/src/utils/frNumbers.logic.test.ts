import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { tokens } from './score.ts';
import { foldNumberTokens, hasNumberToken } from './frNumbers.logic.ts';

/** Fold a phrase the way scoreUtterance will: normalize, tokenise, fold. */
const fold = (s: string) => foldNumberTokens(tokens(s)).join(' ');

test('every number form the published corpus actually uses', () => {
  // Taken from the 130 shortest published spoken items containing a number
  // word, not invented — these are the shapes the parser has to survive.
  const cases: [string, string][] = [
    ['dix', '10'], ['onze', '11'], ['seize', '16'], ['vingt', '20'],
    ['trente', '30'], ['quarante', '40'], ['cinquante', '50'], ['soixante', '60'],
    ['cent', '100'], ['mille', '1000'],
    ['dix-huit', '18'], ['dix-neuf', '19'], ['vingt-six', '26'], ['trente-six', '36'],
    ['quarante-neuf', '49'], ['cinquante-quatre', '54'],
    // the et forms
    ['vingt et un', '21'], ['trente et un', '31'], ['quarante et un', '41'],
    ['cinquante et un', '51'], ['soixante et un', '61'], ['soixante et onze', '71'],
    // 70s: additive on soixante
    ['soixante-dix', '70'], ['soixante-douze', '72'], ['soixante-quinze', '75'],
    ['soixante-dix-huit', '78'], ['soixante-quatorze', '74'],
    // 80s/90s: quatre-vingt is 4x20, not 4+20
    ['quatre-vingts', '80'], ['quatre-vingt-un', '81'], ['quatre-vingt-dix', '90'],
    ['quatre-vingt-onze', '91'], ['quatre-vingt-seize', '96'],
    ['quatre-vingt-dix-huit', '98'], ['quatre-vingt-dix-neuf', '99'],
    ['quatre-vingt-quatorze', '94'],
    // hundreds, thousands, scales
    ['cent un', '101'], ['deux cents', '200'], ['six cents', '600'],
    ['cent cinquante', '150'], ['deux cent cinquante', '250'],
    ['dix mille', '10000'], ['cent mille', '100000'], ['deux mille', '2000'],
    ['un million', '1000000'], ['un milliard', '1000000000'],
    // the year in the identite playlist
    ['mille neuf cent quatre-vingt-dix-huit', '1998'],
  ];
  for (const [fr, want] of cases) strictEqual(fold(fr), want, `"${fr}"`);
});

test('a number keeps the words around it', () => {
  strictEqual(fold('dix heures'), '10 heures');
  strictEqual(fold('douze heures'), '12 heures');
  strictEqual(fold('cent ans'), '100 ans');
  strictEqual(fold('sur vingt euros'), 'sur 20 euros');
  strictEqual(fold('dans dix minutes'), 'dans 10 minutes');
  strictEqual(fold('depuis dix ans'), 'depuis 10 ans');
  strictEqual(fold('le quatorze juillet'), 'le 14 juillet');
  strictEqual(fold('j’ai vingt-deux ans'), 'j ai 22 ans');
});

test('a lone un or une stays a word, because it is nearly always the article', () => {
  // 2,609 spoken items contain a small number word, overwhelmingly as the
  // article. Folding it would make these two identical and hide a gender error.
  strictEqual(fold('un café'), 'un cafe');
  strictEqual(fold('une café'), 'une cafe');
  ok(fold('un café') !== fold('une café'), 'un and une must stay distinguishable');
  strictEqual(fold('un'), 'un');
  strictEqual(fold('une'), 'une');
  // But `un` inside a real number still counts.
  strictEqual(fold('vingt et un'), '21');
  strictEqual(fold('un million'), '1000000');
  strictEqual(fold('cent un'), '101');
});

test('et only joins where French actually uses it', () => {
  // "trois et quatre" is three words, not 7. Only vingt-et-un…soixante-et-onze
  // use `et` inside a number.
  strictEqual(fold('trois et quatre'), '3 et 4');
  strictEqual(fold('deux et deux'), '2 et 2');
  strictEqual(fold('soixante et onze'), '71');
});

test('idioms fold the same on both sides, so they still match', () => {
  // These are real published items. Symmetry is what protects them: the value
  // is nonsense, but expected and heard reach the same nonsense.
  for (const s of ['Mille excuses', 'Merci mille fois', 'le mange-mille', 'le pour cent']) {
    strictEqual(fold(s), fold(s), `${s} must be deterministic`);
    ok(fold(s).length > 0);
  }
  strictEqual(fold('Mille excuses'), '1000 excuses');
  strictEqual(fold('le pour cent'), 'le pour 100');
});

test('digits already present fold to the same place as the words', () => {
  // The nine published items that carry digits, and the recognizer's output,
  // meet in the middle. This is the whole fix in one assertion.
  strictEqual(fold('cinquante'), fold('50'));
  strictEqual(fold('cent ans'), fold('100 ans'));
  strictEqual(fold('quatre-vingt-dix-huit'), fold('98'));
  strictEqual(fold('vingt et un'), fold('21'));
});

test('folding is idempotent', () => {
  for (const s of ['cinquante', 'cent ans', 'quatre-vingt-dix-huit', 'un café', 'trois et quatre']) {
    const once = foldNumberTokens(tokens(s));
    deepStrictEqual(foldNumberTokens(once), once, `"${s}" changed on a second fold`);
  }
});

test('a phrase with no number word is returned completely untouched', () => {
  // The guard: this runs over ~17,000 spoken items that have nothing to do with
  // numbers, and must not disturb any of them.
  const phrases = [
    'on se capte plus tard', 'je suis grave en retard', 'les enfants',
    'Je ne me sépare jamais de mon téléphone.', 'Qu’en pensez-vous ?',
    's’il vous plaît', 'merci beaucoup', 'à tout à l’heure', 'rue de Rivoli',
  ];
  for (const p of phrases) {
    const t = tokens(p);
    ok(!hasNumberToken(t), `"${p}" unexpectedly contains a number token`);
    deepStrictEqual(foldNumberTokens(t), t, `"${p}" was altered`);
  }
});

test('the fold never invents or loses tokens beyond the run it replaced', () => {
  // A run collapses to exactly one token, so the output can never be longer
  // than the input, and can only be shorter where a number actually was.
  const phrases = [
    'un café', 'dix heures', 'quatre-vingt-dix-huit', 'le quatorze juillet',
    'on se capte plus tard', 'mille neuf cent quatre-vingt-dix-huit',
  ];
  for (const p of phrases) {
    const t = tokens(p);
    const f = foldNumberTokens(t);
    ok(f.length <= t.length, `"${p}" grew`);
    if (!hasNumberToken(t)) strictEqual(f.length, t.length, `"${p}" shrank with no number in it`);
  }
});
