// Utterance-scoring guard. Runs on plain Node: npm run test.
import { strictEqual, ok } from 'node:assert';
import { test } from 'node:test';
import {
  normalizeFr, levenshtein, wordCoverage, scoreUtterance, verdictFor, answerMatches,
  barsForLevel, isLenientLevel, markWords,
} from './score.ts';

test('normalizeFr strips diacritics, elisions and punctuation', () => {
  strictEqual(normalizeFr('« Bonjour, j’apprends le français ! »'), 'bonjour j apprends le francais');
  strictEqual(normalizeFr('Où êtes-vous ?'), 'ou etes vous');
  strictEqual(normalizeFr('  ÇA   va…  '), 'ca va');
});

test('levenshtein basics', () => {
  strictEqual(levenshtein('', ''), 0);
  strictEqual(levenshtein('abc', 'abc'), 0);
  strictEqual(levenshtein('', 'abc'), 3);
  strictEqual(levenshtein('kitten', 'sitting'), 3);
});

test('wordCoverage counts each expected word at most once', () => {
  strictEqual(wordCoverage('je suis ici', 'je suis ici'), 1);
  strictEqual(wordCoverage('je suis ici', 'je je je'), 1 / 3);
  strictEqual(wordCoverage('je suis ici', ''), 0);
});

test('wordCoverage tolerates one-edit inflection wobble on longer words', () => {
  // "apprends" vs "apprend" — recognizer spelling, not a pronunciation error.
  strictEqual(wordCoverage("j'apprends le français", 'j apprend le francais'), 1);
  // ...but short words must match exactly, or "le" would match "la"/"les".
  ok(wordCoverage('le chat', 'la chat') < 1);
});

test('a correct utterance scores good; silence scores none', () => {
  const expected = "Bonjour, j'apprends le français depuis longtemps.";

  const perfect = scoreUtterance(expected, "bonjour j'apprends le français depuis longtemps");
  strictEqual(perfect.verdict, 'good');
  ok(perfect.score > 0.95, `expected >0.95, got ${perfect.score}`);

  const silent = scoreUtterance(expected, '   ');
  strictEqual(silent.verdict, 'none');
  strictEqual(silent.score, 0);
});

test('a half-said phrase is close, a wrong phrase is off', () => {
  const expected = "Bonjour, j'apprends le français depuis longtemps.";

  const half = scoreUtterance(expected, "bonjour j'apprends le français");
  strictEqual(half.verdict, 'close');

  const wrong = scoreUtterance(expected, 'je voudrais un café');
  strictEqual(wrong.verdict, 'off');
});

test('accented and unaccented transcripts score identically', () => {
  const expected = 'Où est la gare ?';
  const a = scoreUtterance(expected, 'où est la gare');
  const b = scoreUtterance(expected, 'ou est la gare');
  strictEqual(a.score, b.score);
  strictEqual(a.verdict, 'good');
});

test('verdictFor thresholds', () => {
  strictEqual(verdictFor(1), 'good');
  strictEqual(verdictFor(0.82), 'good');
  strictEqual(verdictFor(0.81), 'close');
  strictEqual(verdictFor(0.55), 'close');
  strictEqual(verdictFor(0.54), 'off');
  strictEqual(verdictFor(0), 'off');
});

test('answerMatches is article- and accent-insensitive but rejects extra words', () => {
  // The exact case Voice Flash's typed check must get right.
  ok(answerMatches('un café', 'un café'));
  ok(answerMatches('un café', 'café')); // article dropped
  ok(answerMatches('un café', 'un cafe')); // accent folded
  ok(answerMatches('a house', 'house'));
  ok(answerMatches('le soleil', 'Soleil')); // case folded
  // The reported bug: a string that merely CONTAINS the headword is NOT a match.
  ok(!answerMatches('un café', 'je voudrais un café to go'));
  ok(!answerMatches('un café', 'un thé')); // wrong noun
  ok(!answerMatches('a house', 'a car'));
  ok(!answerMatches('a house', 'ahouse')); // missing space is not a match
  ok(!answerMatches('un café', '')); // empty
});

test('barsForLevel: forgiving early, stricter late, default for unknown', () => {
  // A 0.75 take: good for a beginner shadowing sounds, only close at b1.
  strictEqual(verdictFor(0.75, barsForLevel('sons')), 'good');
  strictEqual(verdictFor(0.75, barsForLevel('a1')), 'good');
  strictEqual(verdictFor(0.75, barsForLevel('b1')), 'close');
  // A 0.85 take: good at b1, not good enough at c1.
  strictEqual(verdictFor(0.85, barsForLevel('b1')), 'good');
  strictEqual(verdictFor(0.85, barsForLevel('c1')), 'close');
  // Below every close bar is off everywhere.
  strictEqual(verdictFor(0.3, barsForLevel('sons')), 'off');
  strictEqual(verdictFor(0.3, barsForLevel('c1')), 'off');
  // Unknown level = the historical default bars.
  strictEqual(verdictFor(0.82, barsForLevel(undefined)), 'good');
  strictEqual(verdictFor(0.81, barsForLevel(undefined)), 'close');
});

test('scoreUtterance verdict moves with bars but the score does not', () => {
  const lenient = scoreUtterance('bonjour madame', 'bonjour madam', barsForLevel('sons'));
  const strict = scoreUtterance('bonjour madame', 'bonjour madam', barsForLevel('c1'));
  strictEqual(lenient.score, strict.score);
  ok(lenient.score >= 0.72);
});

test('isLenientLevel: amber bands are sons, a1, a2 only', () => {
  ok(isLenientLevel('sons'));
  ok(isLenientLevel('a1'));
  ok(isLenientLevel('a2'));
  ok(!isLenientLevel('b1'));
  ok(!isLenientLevel('c1'));
  ok(!isLenientLevel(undefined));
});

test('markWords marks exactly the missed display words', () => {
  const marks = markWords('Je voudrais un café.', 'je voudrais un thé');
  strictEqual(marks.length, 4);
  strictEqual(marks[0].hit, true);
  strictEqual(marks[1].hit, true);
  strictEqual(marks[2].hit, true);
  strictEqual(marks[3].hit, false); // café ≠ thé
});
