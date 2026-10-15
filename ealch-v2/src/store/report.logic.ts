// Pure figures behind Le Rapport and the Profile accuracy StatCard (N7).
// No react-native, zustand or AsyncStorage imports so node --test can load it.
import type { Activity, AttemptEntry } from './progress.logic.ts';

// D-27: exam-review attempts are synthetic misses written by decomposeExamMiss(); a passed exam task writes nothing, so counting them only ever pulls accuracy down. They still feed weakSpots (the caller passes the full log there). Exam passes are deliberately NOT logged, so the SRS is unchanged.
export function headlineAttempts<T extends { activity: Activity }>(attempts: readonly T[]): T[] {
  return attempts.filter((a) => a.activity !== 'exam-review');
}

export function reportFigures(attempts: readonly Pick<AttemptEntry, 'activity' | 'correct'>[]): {
  total: number;
  correct: number;
  accuracy: number;
  byDrill: { activity: Activity; seen: number; pct: number }[];
} {
  const scored = headlineAttempts(attempts);
  const total = scored.length;
  const correct = scored.filter((a) => a.correct).length;
  const perDrill = new Map<Activity, { seen: number; correct: number }>();
  for (const a of scored) {
    const cur = perDrill.get(a.activity) ?? { seen: 0, correct: 0 };
    cur.seen += 1;
    if (a.correct) cur.correct += 1;
    perDrill.set(a.activity, cur);
  }
  const byDrill = [...perDrill.entries()]
    .map(([activity, v]) => ({ activity, seen: v.seen, pct: Math.round((v.correct / v.seen) * 100) }))
    .sort((a, b) => b.seen - a.seen);
  return { total, correct, accuracy: total ? correct / total : 0, byDrill };
}
