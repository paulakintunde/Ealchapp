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

// ── Numbers: the recognizer writes them as digits ───────────────────────────
//
// Measured on a Pixel 6: "cinquante" said cleanly five times came back as "50"
// every time and scored 0%, verdict `off`. Because gradeAttempt returns 0 for
// an incorrect attempt and corpus item ids are schedulable, each of those
// correct utterances was logged as an SM-2 lapse.

test('a number said correctly and transcribed as digits now passes', () => {
  const sons = barsForLevel('sons');
  // The exact five takes off the device.
  strictEqual(scoreUtterance('cinquante', '50', sons).verdict, 'good');
  strictEqual(scoreUtterance('cinquante', '50', sons).score, 1);
  // And the other measured one, from the la-voix playlist.
  strictEqual(scoreUtterance('cent ans', '100 ans', sons).verdict, 'good');
  // Forms the nombres theme is full of.
  for (const [fr, digits] of [
    ['soixante-dix', '70'], ['quatre-vingt-dix-huit', '98'], ['vingt et un', '21'],
    ['deux cent cinquante', '250'], ['dix heures', '10 heures'],
  ] as [string, string][]) {
    strictEqual(scoreUtterance(fr, digits, sons).verdict, 'good', `${fr} vs ${digits}`);
  }
});

test('the fold works in both directions, so authored digits pass too', () => {
  const sons = barsForLevel('sons');
  strictEqual(scoreUtterance('50', 'cinquante', sons).verdict, 'good');
  strictEqual(scoreUtterance('98', 'quatre-vingt-dix-huit', sons).verdict, 'good');
});

test('a genuinely wrong number is still wrong', () => {
  // The fold must not make every number match every other number.
  const sons = barsForLevel('sons');
  ok(scoreUtterance('cinquante', '60', sons).verdict !== 'good', 'fifty is not sixty');
  ok(scoreUtterance('cinquante', 'soixante', sons).verdict !== 'good', 'cinquante is not soixante');
  ok(scoreUtterance('vingt et un', '22', sons).verdict !== 'good', '21 is not 22');
});

test('markWords credits every display word a number spans', () => {
  // "vingt et un" is three display words but one number. Marking them missed
  // against a heard "21" would contradict a score of 100% — the highlight and
  // the score disagreeing is exactly what markWords exists to prevent.
  const marks = markWords('vingt et un', '21');
  strictEqual(marks.length, 3);
  ok(marks.every((m) => m.hit), JSON.stringify(marks));
  // A single display word carrying the whole number.
  ok(markWords('quatre-vingt-dix-huit', '98').every((m) => m.hit));
  // Surrounding words still judged on their own merits.
  const mixed = markWords('cent ans', '100 jours');
  deepEqualish(mixed, [{ word: 'cent', hit: true }, { word: 'ans', hit: false }]);
});

function deepEqualish(a: { word: string; hit: boolean }[], b: { word: string; hit: boolean }[]) {
  strictEqual(a.length, b.length, JSON.stringify(a));
  a.forEach((m, i) => {
    strictEqual(m.word, b[i].word);
    strictEqual(m.hit, b[i].hit, `${m.word} hit=${m.hit}`);
  });
}

test('the TYPED path is untouched: 50 does not spell cinquante', () => {
  // answerMatches and normalizeFr are shared with sentence.tsx, MissionRich and
  // voiceflash's typed input. Folding there would let a learner type "50" and
  // pass a card whose whole point is spelling the word.
  strictEqual(answerMatches('50', 'cinquante'), false);
  strictEqual(answerMatches('cinquante', '50'), false);
  strictEqual(normalizeFr('cinquante'), 'cinquante');
  strictEqual(normalizeFr('quatre-vingt-dix-huit'), 'quatre vingt dix huit');
  // wordCoverage is the raw signal and stays raw; only scoreUtterance folds.
  ok(wordCoverage('cinquante', '50') < 1, 'wordCoverage must not fold');
});

test('a lone article is never folded into a number', () => {
  const sons = barsForLevel('sons');
  // "un" and "une" must stay distinguishable, or a gender error goes unseen.
  ok(scoreUtterance('un café', 'une café', sons).score < 1, 'un vs une must cost something');
  strictEqual(scoreUtterance('un café', 'un café', sons).score, 1);
});
