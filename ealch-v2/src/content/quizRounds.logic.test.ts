import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  advanceQuiz,
  answerQuestion,
  buildQuizConfig,
  drillForRound,
  initialQuizState,
  passed,
  quizProgress,
  roundFailed,
  roundScore,
  totalScore,
  type QuizConfig,
  type QuizState,
} from './quizRounds.logic.ts';
import type { QuizRound } from './schema.ts';

/** Two rounds of four, mirroring the real quiz's shape at a testable size. */
const rounds: QuizRound[] = [
  {
    id: 'round1',
    label: 'The default',
    targets: ['err-default'],
    questions: Array.from({ length: 4 }, (_, i) => ({ q: `r1q${i}`, opts: ['a', 'b'], correct: 0, why: 'w', ref: 'r' })),
  },
  {
    id: 'round2',
    label: 'CaReFuL',
    targets: ['err-careful'],
    questions: Array.from({ length: 4 }, (_, i) => ({ q: `r2q${i}`, opts: ['a', 'b'], correct: 0, why: 'w', ref: 'r' })),
  },
];

const cfg: QuizConfig = buildQuizConfig(rounds, {
  errorTriggers: [
    { id: 'err-default', drill: 'drill-default', retest: 'retest-default' },
    { id: 'err-careful', drill: 'drill-careful' },
  ],
  drills: [{ id: 'drill-default', title: 'd' }, { id: 'retest-default', title: 'r' }, { id: 'drill-careful', title: 'd2' }],
  roundFailThreshold: 60,
  passMark: 70,
});

/** Answer every question of the round the state is on. */
function answerRound(c: QuizConfig, s: QuizState, corrects: boolean[]): QuizState {
  let st = s;
  for (const correct of corrects) {
    st = answerQuestion(st, correct);
    st = advanceQuiz(c, st);
  }
  return st;
}

test('a quiz starts on the first question of the first round', () => {
  const s = initialQuizState();
  deepStrictEqual(s.phase, { kind: 'round', roundIx: 0, questionIx: 0 });
});

test('answering walks through a round question by question', () => {
  let s = initialQuizState();
  s = answerQuestion(s, true);
  s = advanceQuiz(cfg, s);
  deepStrictEqual(s.phase, { kind: 'round', roundIx: 0, questionIx: 1 });
});

test('a PASSED round goes straight to the next round, no drill', () => {
  const s = answerRound(cfg, initialQuizState(), [true, true, true, true]);
  strictEqual(roundScore(cfg, s, 0), 100);
  ok(!roundFailed(cfg, s, 0));
  deepStrictEqual(s.phase, { kind: 'round', roundIx: 1, questionIx: 0 });
});

test('A FAILED ROUND FIRES ITS DRILL BEFORE THE NEXT ROUND STARTS', () => {
  // The ordering rule: remediation happens while the mistake is live, not as
  // a post-mortem after all four rounds.
  const s = answerRound(cfg, initialQuizState(), [false, false, false, true]);
  strictEqual(roundScore(cfg, s, 0), 25);
  ok(roundFailed(cfg, s, 0));
  strictEqual(s.phase.kind, 'drill', 'the drill fires immediately, not at the end');
  if (s.phase.kind === 'drill') {
    strictEqual(s.phase.drillId, 'drill-default');
    strictEqual(s.phase.roundIx, 0);
  }
});

test('the drill runs its retest, then the next round', () => {
  let s = answerRound(cfg, initialQuizState(), [false, false, false, true]);
  strictEqual(s.phase.kind, 'drill');
  s = advanceQuiz(cfg, s);
  strictEqual(s.phase.kind, 'retest');
  s = advanceQuiz(cfg, s);
  deepStrictEqual(s.phase, { kind: 'round', roundIx: 1, questionIx: 0 });
});

test('a drill with no retest goes straight on to the next round', () => {
  // round2's trigger declares a drill but no retest.
  let s = answerRound(cfg, initialQuizState(), [true, true, true, true]);
  s = answerRound(cfg, s, [false, false, false, false]);
  strictEqual(s.phase.kind, 'drill');
  if (s.phase.kind === 'drill') strictEqual(s.phase.drillId, 'drill-careful');
  s = advanceQuiz(cfg, s);
  // Last round, so past the drill is the result.
  deepStrictEqual(s.phase, { kind: 'result' });
});

test('a drill fires at most once per round', () => {
  let s = answerRound(cfg, initialQuizState(), [false, false, false, false]);
  strictEqual(s.phase.kind, 'drill');
  deepStrictEqual(s.drilled, [0]);
  s = advanceQuiz(cfg, s); // retest
  s = advanceQuiz(cfg, s); // round 2
  deepStrictEqual(s.phase, { kind: 'round', roundIx: 1, questionIx: 0 });
  deepStrictEqual(s.drilled, [0], 'round 0 is not drilled twice');
});

test('the threshold is a floor, not a range', () => {
  // 2 of 4 is 50%, under 60: fails. 3 of 4 is 75%, over: passes.
  const under = answerRound(cfg, initialQuizState(), [true, true, false, false]);
  strictEqual(roundScore(cfg, under, 0), 50);
  strictEqual(under.phase.kind, 'drill');

  const over = answerRound(cfg, initialQuizState(), [true, true, true, false]);
  strictEqual(roundScore(cfg, over, 0), 75);
  deepStrictEqual(over.phase, { kind: 'round', roundIx: 1, questionIx: 0 });
});

test('a round with no resolvable drill still advances', () => {
  // A trigger naming a drill that does not exist must not stall the quiz on
  // a blank screen — buildQuizConfig refuses to wire it.
  const orphan = buildQuizConfig(rounds, {
    errorTriggers: [{ id: 'err-default', drill: 'drill-that-does-not-exist' }],
    drills: [],
  });
  strictEqual(drillForRound(orphan, 0), null);
  const s = answerRound(orphan, initialQuizState(), [false, false, false, false]);
  deepStrictEqual(s.phase, { kind: 'round', roundIx: 1, questionIx: 0 });
});

test('the last round ends at the result', () => {
  let s = answerRound(cfg, initialQuizState(), [true, true, true, true]);
  s = answerRound(cfg, s, [true, true, true, true]);
  deepStrictEqual(s.phase, { kind: 'result' });
  strictEqual(totalScore(cfg, s), 100);
  ok(passed(cfg, s));
});

test('the overall score spans every round, and the pass mark is honoured', () => {
  let s = answerRound(cfg, initialQuizState(), [true, true, true, true]);
  s = advanceQuiz(cfg, s);
  s = answerRound(cfg, s, [true, false, false, false]);
  // 5 of 8 = 63%, under the 70 pass mark.
  strictEqual(totalScore(cfg, s), 63);
  ok(!passed(cfg, s));
});

test('unanswered questions count as wrong, not as absent', () => {
  const s = answerQuestion(initialQuizState(), true);
  // One right out of four in round 0.
  strictEqual(roundScore(cfg, s, 0), 25);
});

test('progress counts answered questions across the whole quiz', () => {
  let s = answerRound(cfg, initialQuizState(), [true, true, true, true]);
  deepStrictEqual(quizProgress(cfg, s), { done: 4, total: 8 });
  s = answerRound(cfg, s, [true, true, true, true]);
  deepStrictEqual(quizProgress(cfg, s), { done: 8, total: 8 });
});

test('the result phase is terminal', () => {
  const s: QuizState = { phase: { kind: 'result' }, answers: {}, drilled: [] };
  deepStrictEqual(advanceQuiz(cfg, s).phase, { kind: 'result' });
});
