import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { checkAnswer, fold, isClosedFormat, matchesAccept, scorePercent, tapSilentCorrect } from './answer.logic.ts';
import type { QuizQuestion } from './schema.ts';

test('fold ignores what a learner cannot be expected to type', () => {
  // Notation delimiters: the question already showed the convention.
  strictEqual(fold('/pa.ʁi/'), fold('paʁi'));
  strictEqual(fold('[pa-REE]'), fold('paree'));
  // Syllabification and case.
  strictEqual(fold('pa-REE'), fold('paree'));
  strictEqual(fold('ee-VEHR'), fold('eevehr'));
  // Accents, which are hard to type on a phone keyboard.
  strictEqual(fold('français'), fold('francais'));
  strictEqual(fold("l'hôtel"), fold('lhotel'));
  // Whitespace.
  strictEqual(fold('il parl'), fold('ilparl'));
});

test('typeIn accepts every authored form of the same answer', () => {
  // The real accept list from round 1 of the sons.06 quiz.
  const q: QuizQuestion = {
    q: 'Type how « vingt » sounds on its own.',
    format: 'typeIn',
    accept: ['/vɛ̃/', 'vɛ̃', 'vaⁿ', 'vehn', 'van', 'vin'],
    answer: '/vɛ̃/ [VEHⁿ]',
    why: 'w',
    ref: 'r',
  };
  for (const given of ['/vɛ̃/', 'vɛ̃', 'VEHN', 'vehn', 'van', ' vin ']) {
    strictEqual(checkAnswer(q, given)?.correct, true, `"${given}" should be accepted`);
  }
  strictEqual(checkAnswer(q, 'vingt')?.correct, false, 'the spelling is not the sound');
  strictEqual(checkAnswer(q, '')?.correct, false);
});

test('errorSpot accepts the fix in any of its authored forms', () => {
  const q: QuizQuestion = {
    q: 'A learner says [pa-REESS] for Paris. Fix it.',
    format: 'errorSpot',
    accept: ['pa-REE', '/pa.ʁi/', 'pari', 'paree'],
    answer: 'Paris /pa.ʁi/ [pa-REE]',
    why: 'w',
    ref: 'r',
  };
  ok(checkAnswer(q, 'pa-REE')?.correct);
  ok(checkAnswer(q, 'PAREE')?.correct);
  ok(checkAnswer(q, '/pa.ʁi/')?.correct);
  ok(!checkAnswer(q, 'pa-REESS')?.correct, 'the error itself is not the fix');
});

test('tapSilent is order-insensitive', () => {
  // "temps" greys m, p and s. Tapping them in any order is the same answer,
  // and an order-sensitive check would fail a correct learner about half the
  // time.
  ok(tapSilentCorrect(['m', 'p', 's'], 'mps'));
  ok(tapSilentCorrect(['s', 'p', 'm'], 'mps'));
  ok(tapSilentCorrect(['p', 's', 'm'], 'mps'));
  // Wrong set, right size.
  ok(!tapSilentCorrect(['m', 'p', 't'], 'mps'));
  // Too few and too many both fail.
  ok(!tapSilentCorrect(['m', 'p'], 'mps'));
  ok(!tapSilentCorrect(['m', 'p', 's', 't'], 'mps'));
});

test('tapSilent handles the single-letter and multi-letter cases', () => {
  const one: QuizQuestion = { q: 'Tap the letter you do not say.', format: 'tapSilent', word: 'beaucoup', correct: 'p', why: 'w', ref: 'r' };
  ok(checkAnswer(one, ['p'])?.correct);
  ok(!checkAnswer(one, ['u'])?.correct);
  // A string answer is split into characters, so a caller may pass either.
  ok(checkAnswer(one, 'p')?.correct);

  const many: QuizQuestion = { q: 'Tap the letters you do not say.', format: 'tapSilent', word: 'ils parlent', correct: 'ent', why: 'w', ref: 'r' };
  ok(checkAnswer(many, ['e', 'n', 't'])?.correct);
  ok(checkAnswer(many, ['t', 'n', 'e'])?.correct);
  ok(!checkAnswer(many, ['e', 'n'])?.correct);
});

test('mcq and listenChoose compare the option index', () => {
  const q: QuizQuestion = { q: 'How is « trop » pronounced?', format: 'mcq', opts: ['/tʁo/', '/tʁop/', '/tʁɔf/'], correct: 0, why: 'w', ref: 'r' };
  strictEqual(checkAnswer(q, 0)?.correct, true);
  strictEqual(checkAnswer(q, 1)?.correct, false);
  strictEqual(checkAnswer(q, 0)?.expected, '/tʁo/');
  // A question with no format at all is the shipped mcq shape.
  const legacy: QuizQuestion = { q: 'x', opts: ['a', 'b'], correct: 1 };
  strictEqual(checkAnswer(legacy, 1)?.correct, true);
  strictEqual(checkAnswer(legacy, 0)?.correct, false);
});

test('speak is not graded here', () => {
  const q: QuizQuestion = { q: 'Say it', format: 'speak', target: 'Elle est grande.', why: 'w', ref: 'r' };
  strictEqual(checkAnswer(q, 'anything'), null, 'the recogniser grades this, not string comparison');
});

test('isClosedFormat drives which control renders', () => {
  ok(isClosedFormat(undefined));
  ok(isClosedFormat('mcq'));
  ok(isClosedFormat('listenChoose'));
  ok(!isClosedFormat('typeIn'));
  ok(!isClosedFormat('tapSilent'));
  ok(!isClosedFormat('errorSpot'));
  ok(!isClosedFormat('speak'));
});

test('scorePercent counts unanswered as wrong', () => {
  strictEqual(scorePercent([true, true, true, true]), 100);
  strictEqual(scorePercent([true, false, true, false]), 50);
  // A skipped question is not a free pass: a round is scored on what the
  // learner actually did.
  strictEqual(scorePercent([true, null, null, null]), 25);
  strictEqual(scorePercent([]), 0);
  // The 60% round-fail threshold sits between these two.
  strictEqual(scorePercent([true, true, true, true, false, false, false, false]), 50);
  strictEqual(scorePercent([true, true, true, true, true, false, false, false]), 63);
});

test('matchesAccept refuses an empty or missing accept list', () => {
  ok(!matchesAccept('anything', undefined));
  ok(!matchesAccept('anything', []));
  ok(!matchesAccept('', ['a']));
});
