import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { headlineAttempts, reportFigures } from './report.logic.ts';
import type { Activity } from './progress.logic.ts';

const a = (activity: Activity, correct: boolean) => ({ activity, correct });

test('headlineAttempts drops exam-review and keeps order', () => {
  const log = [a('lesson', true), a('exam-review', false), a('flashcards', false)];
  deepStrictEqual(headlineAttempts(log).map((x) => x.activity), ['lesson', 'flashcards']);
});

test('empty log gives zero figures', () => {
  deepStrictEqual(reportFigures([]), { total: 0, correct: 0, accuracy: 0, byDrill: [] });
});

test('exam-review misses do not pull accuracy down', () => {
  const log = [a('lesson', true), a('lesson', true), a('lesson', true), a('lesson', false),
    a('exam-review', false), a('exam-review', false), a('exam-review', false)];
  const f = reportFigures(log);
  strictEqual(f.total, 4);
  strictEqual(f.correct, 3);
  strictEqual(f.accuracy, 0.75);
  deepStrictEqual(f.byDrill, [{ activity: 'lesson', seen: 4, pct: 75 }]);
});

test('only exam-review attempts means empty', () => {
  strictEqual(reportFigures([a('exam-review', false), a('exam-review', false)]).total, 0);
});

test('byDrill sorted by seen desc', () => {
  const f = reportFigures([a('speak', true), a('lesson', true), a('lesson', false), a('lesson', true)]);
  deepStrictEqual(f.byDrill.map((d) => d.activity), ['lesson', 'speak']);
});
