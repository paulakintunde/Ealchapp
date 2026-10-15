import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  addCompleted, canArm, countsTowardReview, decide, isPerfectQuiz, markArmed, pendingLive, percentToCorrect,
  pruneRequests, quizScoreBucket, recordRequest, seedCompleted, validReviewState, type ReviewInput, type ReviewState,
} from './reviewPrompt.logic.ts';

const D = 24 * 60 * 60 * 1000;
const NOW = 1_800_000_000_000;
const base: ReviewInput = {
  flagOn: true, guest: false, lessonId: 'a1.04.l1', completedCount: 5, installAt: NOW - 8 * D, now: NOW,
  requests: [], errorsThisSession: 0, offline: false, bannerShowing: false, lastSurfaceAt: null,
};
const reason = (o: Partial<ReviewInput>) => { const r = decide({ ...base, ...o }); return r.ask ? 'ask' : r.reason; };
const fresh = (): ReviewState => ({ v: 1, requests: [], completed: [], armed: [], seeded: false });

test('all gates pass asks', () => strictEqual(reason({}), 'ask'));

test('single failures map to their reasons', () => {
  strictEqual(reason({ flagOn: false }), 'flag');
  strictEqual(reason({ guest: true }), 'guest');
  strictEqual(reason({ lessonId: 'sons.01.l1' }), 'sons');
  strictEqual(reason({ completedCount: 4 }), 'lessons');
  strictEqual(reason({ installAt: NOW - 6 * D }), 'install-age');
  strictEqual(reason({ installAt: null }), 'install-age');
  strictEqual(reason({ errorsThisSession: 1 }), 'error');
  strictEqual(reason({ offline: true }), 'offline');
});

test('reason order follows the gate order', () => {
  strictEqual(reason({ flagOn: false, guest: true, offline: true }), 'flag');
  strictEqual(reason({ guest: true, lessonId: 'sons.01.l1' }), 'guest');
  strictEqual(reason({ errorsThisSession: 2, offline: true }), 'error');
});

test('surface gate', () => {
  strictEqual(reason({ lastSurfaceAt: NOW - 9 * 60_000 }), 'surface');
  strictEqual(reason({ lastSurfaceAt: NOW - 11 * 60_000 }), 'ask');
  strictEqual(reason({ bannerShowing: true }), 'surface');
});

test('cap and spacing', () => {
  strictEqual(reason({ requests: [NOW - 10 * D, NOW - 100 * D, NOW - 200 * D] }), 'cap');
  strictEqual(reason({ requests: [NOW - 366 * D, NOW - 200 * D, NOW - 100 * D] }), 'ask');
  strictEqual(reason({ requests: [NOW - 89 * D] }), 'spacing');
  strictEqual(reason({ requests: [NOW - 90 * D] }), 'ask');
  strictEqual(reason({ requests: [NOW + 5 * D] }), 'spacing');
  deepStrictEqual(pruneRequests([NOW - 365 * D], NOW), []);
});

test('decide does not mutate its input and has no report key', () => {
  const requests = [NOW - 200 * D, NOW - 366 * D];
  const input = { ...base, requests };
  decide(input);
  deepStrictEqual(requests, [NOW - 200 * D, NOW - 366 * D]);
  strictEqual(Object.keys(base).some((k) => /report/i.test(k)), false);
});

test('recordRequest spends and prunes', () => {
  const s = recordRequest({ ...fresh(), requests: [NOW - 400 * D, NOW - 10 * D] }, NOW);
  deepStrictEqual(s.requests, [NOW - 10 * D, NOW]);
});

test('arming is first-perfect-only and Sons never arm', () => {
  let s = fresh();
  strictEqual(canArm(s, 'a1.04.l1'), true);
  s = markArmed(s, 'a1.04.l1');
  strictEqual(canArm(s, 'a1.04.l1'), false);
  strictEqual(canArm(s, 'sons.01.l1'), false);
  for (let i = 0; i < 1100; i++) s = markArmed(s, `a1.${i}.l1`);
  strictEqual(s.armed.length, 1000);
});

test('pendingLive window', () => {
  const p = { lessonId: 'a1.04.l1', at: NOW };
  strictEqual(pendingLive(p, NOW + 30 * 60_000), true);
  strictEqual(pendingLive(p, NOW + 30 * 60_000 + 1), false);
  strictEqual(pendingLive(null, NOW), false);
});

test('addCompleted dedupes, skips Sons and keeps 20', () => {
  let s = addCompleted(fresh(), 'a1.01.l1');
  s = addCompleted(s, 'a1.01.l1');
  s = addCompleted(s, 'sons.01.l1');
  deepStrictEqual(s.completed, ['a1.01.l1']);
  for (let i = 0; i < 30; i++) s = addCompleted(s, `a2.${i}.l1`);
  strictEqual(s.completed.length, 20);
  strictEqual(s.completed[19], 'a2.29.l1');
});

test('seedCompleted merges once', () => {
  const s = seedCompleted(fresh(), ['a1.01.l1', 'sons.01.l1', 'a1.02.l1']);
  deepStrictEqual(s.completed, ['a1.01.l1', 'a1.02.l1']);
  strictEqual(s.seeded, true);
  strictEqual(seedCompleted(s, ['a1.09.l1']), s);
  const many = seedCompleted(fresh(), Array.from({ length: 40 }, (_, i) => `a1.${i}.l1`));
  strictEqual(many.completed.length, 20);
});

test('validReviewState rejects garbage and drops legacy pending', () => {
  const empty = { v: 1, requests: [], completed: [], armed: [], seeded: false };
  deepStrictEqual(validReviewState(null), empty);
  deepStrictEqual(validReviewState('x'), empty);
  deepStrictEqual(validReviewState([1]), empty);
  const s = validReviewState({ v: 1, requests: [1, 'a', NaN], completed: ['x', 2], armed: ['y'], seeded: true, pending: { lessonId: 'q', at: 1 } });
  deepStrictEqual(s, { v: 1, requests: [1], completed: ['x'], armed: ['y'], seeded: true });
  strictEqual('pending' in s, false);
});

test('quizScoreBucket', () => {
  strictEqual(quizScoreBucket(10, 10), '100');
  strictEqual(quizScoreBucket(19, 20), '95-99');
  strictEqual(quizScoreBucket(99, 100), '95-99');
  strictEqual(quizScoreBucket(18, 20), '90-94');
  strictEqual(quizScoreBucket(9, 10), '90-94');
  strictEqual(quizScoreBucket(17, 20), '<90');
  strictEqual(quizScoreBucket(null, null), 'none');
  strictEqual(quizScoreBucket(0, 0), 'none');
});

test('isPerfectQuiz and percentToCorrect', () => {
  strictEqual(isPerfectQuiz(5, 5), true);
  strictEqual(isPerfectQuiz(4, 5), false);
  strictEqual(isPerfectQuiz(0, 0), false);
  strictEqual(percentToCorrect(100, 10), 10);
  strictEqual(percentToCorrect(90, 10), 9);
  strictEqual(percentToCorrect(100, 250), 249);
  strictEqual(percentToCorrect(99, 100), 99);
});

test('countsTowardReview', () => {
  strictEqual(countsTowardReview('a1.01.l1'), true);
  strictEqual(countsTowardReview('sons.09.l1'), false);
});

test('a null lastSurfaceAt and a future surface time are handled', () => {
  strictEqual(reason({ lastSurfaceAt: null }), 'ask');
  strictEqual(reason({ lastSurfaceAt: NOW + 60_000 }), 'surface');
});
