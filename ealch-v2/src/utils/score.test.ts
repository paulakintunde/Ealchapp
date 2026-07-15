// Utterance-scoring guard. Runs on plain Node: npm run test.
import { strictEqual, ok } from 'node:assert';
import { test } from 'node:test';
import { normalizeFr, levenshtein, wordCoverage, scoreUtterance, verdictFor, answerMatches } from './score.ts';

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
