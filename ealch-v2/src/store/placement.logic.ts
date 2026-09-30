import type { Item } from '@/content/schema';

export type PlacementQuestion = { itemId: string; optionIds: string[] };
export type PlacementAttempt = {
  attemptId: string;
  status: 'in_progress' | 'completed' | 'abandoned' | 'load_failed';
  questions: PlacementQuestion[];
  answers: number[];
  nextQuestionIndex: number;
  result: 'A0' | 'A1' | 'A2' | null;
};
export type PlacementOutcome = {
  kind: 'skipped' | 'abandoned' | 'load_failed' | 'result';
  attemptId: string | null;
  level?: 'A0' | 'A1' | 'A2';
};
export type PlacementResult = { attemptId: string; level: 'A0' | 'A1' | 'A2'; correctCount: number; questionCount: number };

export function createAttempt(attemptId: string, questions: PlacementQuestion[]): PlacementAttempt {
  return { attemptId, status: questions.length ? 'in_progress' : 'load_failed', questions, answers: [], nextQuestionIndex: 0, result: null };
}

/** Validate persisted IDs and order against the current corpus before rendering. */
export function restoreAttempt(value: unknown, items: Item[]): PlacementAttempt | null {
  if (!value || typeof value !== 'object') return null;
  const a = value as Partial<PlacementAttempt>;
  if (typeof a.attemptId !== 'string' || !a.attemptId || !['in_progress', 'completed', 'abandoned', 'load_failed'].includes(a.status ?? '')) return null;
  if (!Array.isArray(a.questions) || !Array.isArray(a.answers) || !Number.isInteger(a.nextQuestionIndex)) return null;
  const byId = new Map(items.map((item) => [item.id, item]));
  if (a.questions.some((q) => !q || typeof q.itemId !== 'string' || !byId.has(q.itemId)
    || !Array.isArray(q.optionIds) || q.optionIds.length < 2
    || new Set(q.optionIds).size !== q.optionIds.length
    || !q.optionIds.includes(q.itemId)
    || q.optionIds.some((id) => typeof id !== 'string' || !byId.has(id)))) return null;
  if (a.answers.length > a.questions.length || a.answers.some((v, i) => !Number.isInteger(v) || v < 0 || v >= a.questions![i].optionIds.length)) return null;
  if (a.nextQuestionIndex! < 0 || a.nextQuestionIndex! > a.questions.length || a.nextQuestionIndex !== a.answers.length) return null;
  if (a.status === 'in_progress' && !a.questions.length) return null;
  if (a.status === 'load_failed' && a.questions.length) return null;
  if (a.status === 'completed' && (a.answers.length !== a.questions.length || !['A0', 'A1', 'A2'].includes(a.result ?? ''))) return null;
  return a as PlacementAttempt;
}

export function answerAttempt(a: PlacementAttempt, optionIndex: number): PlacementAttempt {
  if (a.status !== 'in_progress' || a.nextQuestionIndex >= a.questions.length) return a;
  const question = a.questions[a.nextQuestionIndex];
  if (!Number.isInteger(optionIndex) || optionIndex < 0 || optionIndex >= question.optionIds.length) return a;
  return { ...a, answers: [...a.answers, optionIndex], nextQuestionIndex: a.nextQuestionIndex + 1 };
}

export function completeAttempt(a: PlacementAttempt, level: PlacementResult['level']): PlacementAttempt {
  if (a.status !== 'in_progress' || a.answers.length !== a.questions.length || !a.questions.length) return a;
  return { ...a, status: 'completed', result: level };
}

export function firstOutcome(current: PlacementOutcome | null, outcome: PlacementOutcome): PlacementOutcome {
  return current ?? outcome;
}

export function firstResult(current: PlacementResult | null, result: PlacementResult): PlacementResult {
  return current ?? result;
}
