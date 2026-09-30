import { streak, type SessionEntry } from '../store/progress.logic.ts';

export type ExamOutcome = 'graded' | 'ungraded';

/** Only the first logged session of a local day changes the displayed streak. */
export function practicedDayMilestone(
  before: readonly SessionEntry[], after: readonly SessionEntry[], day: string, freeze: number,
): { local_day: string; days: number } | null {
  if (before.some((session) => session.date === day) || !after.some((session) => session.date === day)) return null;
  return { local_day: day, days: streak([...after], day, freeze).days };
}

/** Counts the sitting's recorded outcomes without inspecting learner responses. */
export function examOutcomeCounts(taskIds: readonly string[], outcomes: Readonly<Record<string, ExamOutcome>>): {
  graded_count: number; ungraded_count: number;
} {
  let graded_count = 0;
  let ungraded_count = 0;
  for (const id of taskIds) {
    if (outcomes[id] === 'graded') graded_count++;
    else ungraded_count++;
  }
  return { graded_count, ungraded_count };
}

/** Maps internal purchase states to fixed analytics categories; never sends service text. */
export function purchaseFailureCategory(code: string): 'unavailable' | 'pending' | 'other' {
  if (code === 'purchases-unavailable' || code === 'no-offering') return 'unavailable';
  if (code === 'purchase-pending') return 'pending';
  return 'other';
}
