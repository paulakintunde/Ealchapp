import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { examOutcomeCounts, practicedDayMilestone, purchaseFailureCategory } from './engagement.logic.ts';
import type { SessionEntry } from '../store/progress.logic.ts';

const session = (date: string, activity: SessionEntry['activity'] = 'lesson'): SessionEntry => ({ date, activity, minutes: 1 });

test('first real session each local day reports the same streak as progress, including placement and a freeze', () => {
  const yesterday = [session('2026-09-28')];
  const today = [...yesterday, session('2026-09-29', 'placement')];
  deepStrictEqual(practicedDayMilestone(yesterday, today, '2026-09-29', 1), { local_day: '2026-09-29', days: 2 });
  strictEqual(practicedDayMilestone(today, [...today, session('2026-09-29')], '2026-09-29', 1), null);
  deepStrictEqual(practicedDayMilestone(today, [...today, session('2026-10-01')], '2026-10-01', 1), { local_day: '2026-10-01', days: 3 });
  strictEqual(practicedDayMilestone(today, today, '2026-10-01', 1), null);
});

test('exam counts include ungraded outcomes without any response text', () => {
  deepStrictEqual(examOutcomeCounts(['closed', 'open', 'empty'], { closed: 'graded', open: 'ungraded' }), {
    graded_count: 1, ungraded_count: 2,
  });
});

test('purchase failure maps to a fixed category', () => {
  strictEqual(purchaseFailureCategory('no-offering'), 'unavailable');
  strictEqual(purchaseFailureCategory('purchase-pending'), 'pending');
  strictEqual(purchaseFailureCategory('customer@example.com'), 'other');
});
