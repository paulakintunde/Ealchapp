import { test } from 'node:test';
import { deepStrictEqual, strictEqual } from 'node:assert';
import { answerAttempt, completeAttempt, createAttempt, firstOutcome, firstResult, restoreAttempt } from './placement.logic.ts';
import type { Item } from '@/content/schema';

const items = [
  { id: 'a', fr: 'un', en: 'one' },
  { id: 'b', fr: 'deux', en: 'two' },
  { id: 'c', fr: 'trois', en: 'three' },
] as Item[];
const questions = [{ itemId: 'a', optionIds: ['b', 'a', 'c'] }, { itemId: 'b', optionIds: ['c', 'b', 'a'] }];

test('answer checkpoint preserves exact question and option order through JSON restore', () => {
  const first = answerAttempt(createAttempt('attempt-1', questions), 1);
  deepStrictEqual(restoreAttempt(JSON.parse(JSON.stringify(first)), items), first);
  strictEqual(first.nextQuestionIndex, 1);
  deepStrictEqual(first.answers, [1]);
  strictEqual(answerAttempt(first, 9), first);
});

test('incompatible content or tampered index fails closed', () => {
  const attempt = createAttempt('attempt-2', questions);
  strictEqual(restoreAttempt(attempt, items.slice(0, 2)), null);
  strictEqual(restoreAttempt({ ...attempt, nextQuestionIndex: 9 }, items), null);
});

test('completion requires every answer and does not repeat', () => {
  const started = createAttempt('attempt-3', questions);
  strictEqual(completeAttempt(started, 'A1'), started);
  const answered = answerAttempt(answerAttempt(started, 1), 1);
  const done = completeAttempt(answered, 'A1');
  strictEqual(done.status, 'completed');
  strictEqual(completeAttempt(done, 'A2'), done);
});

test('first terminal outcome and first completed result stay immutable across later attempts', () => {
  const skip = { kind: 'skipped' as const, attemptId: null };
  deepStrictEqual(firstOutcome(skip, { kind: 'result', attemptId: 'later', level: 'A2' }), skip);
  const result = { attemptId: 'later', level: 'A2' as const, correctCount: 9, questionCount: 12 };
  deepStrictEqual(firstResult(result, { ...result, attemptId: 'retake', level: 'A1' }), result);
});
