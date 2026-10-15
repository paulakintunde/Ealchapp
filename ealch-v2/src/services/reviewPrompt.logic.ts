// Pure decision layer for the native store-review request (FEEDBACK-02).
// No imports: every branchy rule is node --test-able; the I/O wiring is 10-07.
//
// D-34: the request is spent BEFORE the native call and never refunded.
//       isAvailableAsync() false means no spend at all (the caller skips).
// D-03: the pending arm lives in memory only, so an app kill clears it. It is
//       deliberately NOT part of ReviewState.
// D-06 amendment: decide() takes no report input. A report never affects
//       review eligibility.
// D-02: no looser fallback threshold; the only trigger is the first perfect
//       non-Sons quiz.

export const REVIEW_CAP = 3;
const DAY_MS = 24 * 60 * 60 * 1000;
export const REVIEW_WINDOW_MS = 365 * DAY_MS;
export const REVIEW_SPACING_MS = 90 * DAY_MS;
export const REVIEW_MIN_LESSONS = 5;
export const REVIEW_MIN_INSTALL_MS = 7 * DAY_MS;
export const SURFACE_RECENT_MS = 10 * 60_000;
export const PENDING_TTL_MS = 30 * 60_000;
export const COMPLETED_KEEP = 20;
export const ARMED_KEEP = 1000;
export const REVIEW_STATE_KEY = 'ealch-review-state';

export type ReviewState = { v: 1; requests: number[]; completed: string[]; armed: string[]; seeded: boolean };
export type Pending = { lessonId: string; at: number };
export type ReviewInput = {
  flagOn: boolean;
  guest: boolean;
  lessonId: string;
  completedCount: number;
  installAt: number | null;
  now: number;
  requests: readonly number[];
  errorsThisSession: number;
  offline: boolean;
  bannerShowing: boolean;
  lastSurfaceAt: number | null;
};
export type ReviewReason =
  | 'flag' | 'guest' | 'sons' | 'lessons' | 'install-age' | 'error' | 'offline' | 'surface' | 'cap' | 'spacing';
export type ReviewDecision = { ask: true } | { ask: false; reason: ReviewReason };

/** Sons (sounds course) lessons never count toward or trigger a review ask. */
export function countsTowardReview(lessonId: string): boolean {
  return typeof lessonId === 'string' && lessonId.length > 0 && !/^sons\./.test(lessonId);
}

/** Drops requests older than the window (exactly 365 days old is pruned) and clamps the future to now. */
export function pruneRequests(requests: readonly number[], now: number): number[] {
  return requests
    .filter((t) => typeof t === 'number' && Number.isFinite(t))
    .map((t) => Math.min(t, now))
    .filter((t) => now - t < REVIEW_WINDOW_MS)
    .sort((a, b) => a - b);
}

export function decide(input: ReviewInput): ReviewDecision {
  const skip = (reason: ReviewReason): ReviewDecision => ({ ask: false, reason });
  const { now } = input;
  if (!input.flagOn) return skip('flag');
  if (input.guest) return skip('guest');
  if (!countsTowardReview(input.lessonId)) return skip('sons');
  if (input.completedCount < REVIEW_MIN_LESSONS) return skip('lessons');
  if (input.installAt == null || !Number.isFinite(input.installAt) || now - input.installAt < REVIEW_MIN_INSTALL_MS) {
    return skip('install-age');
  }
  if (input.errorsThisSession > 0) return skip('error');
  if (input.offline) return skip('offline');
  if (input.bannerShowing) return skip('surface');
  if (input.lastSurfaceAt != null && now - Math.min(input.lastSurfaceAt, now) < SURFACE_RECENT_MS) return skip('surface');
  const live = pruneRequests(input.requests, now);
  if (live.length >= REVIEW_CAP) return skip('cap');
  if (live.length > 0 && now - live[live.length - 1] < REVIEW_SPACING_MS) return skip('spacing');
  return { ask: true };
}

/** Spend a request. Called before the native call, never refunded (D-34). */
export function recordRequest(state: ReviewState, now: number): ReviewState {
  return { ...state, requests: [...pruneRequests(state.requests, now), now] };
}

/** A lesson id arms only on its FIRST perfect completion, ever (D-39). */
export function canArm(state: ReviewState, lessonId: string): boolean {
  return countsTowardReview(lessonId) && !state.armed.includes(lessonId);
}

export function markArmed(state: ReviewState, lessonId: string): ReviewState {
  if (!countsTowardReview(lessonId) || state.armed.includes(lessonId)) return state;
  return { ...state, armed: [...state.armed, lessonId].slice(-ARMED_KEEP) };
}

export function pendingLive(pending: Pending | null | undefined, now: number): boolean {
  return !!pending && now - pending.at <= PENDING_TTL_MS;
}

function mergeCompleted(current: readonly string[], ids: readonly string[]): string[] {
  const out = [...current];
  for (const id of ids) {
    if (!countsTowardReview(id)) continue;
    const at = out.indexOf(id);
    if (at >= 0) out.splice(at, 1);
    out.push(id);
  }
  return out.slice(-COMPLETED_KEEP);
}

export function addCompleted(state: ReviewState, lessonId: string): ReviewState {
  if (!countsTowardReview(lessonId)) return state;
  return { ...state, completed: mergeCompleted(state.completed, [lessonId]) };
}

/** Merge non-Sons ids once and set seeded. The caller decides when hydration allows it (D-04). */
export function seedCompleted(state: ReviewState, ids: readonly string[]): ReviewState {
  if (state.seeded) return state;
  return { ...state, completed: mergeCompleted(state.completed, ids), seeded: true };
}

const EMPTY: ReviewState = { v: 1, requests: [], completed: [], armed: [], seeded: false };

/** AsyncStorage is untrusted on read. Legacy keys (such as a stored `pending`) are dropped. */
export function validReviewState(value: unknown): ReviewState {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return { ...EMPTY, requests: [], completed: [], armed: [] };
  const v = value as Record<string, unknown>;
  const strings = (x: unknown): string[] => (Array.isArray(x) ? x.filter((s): s is string => typeof s === 'string') : []);
  return {
    v: 1,
    requests: Array.isArray(v.requests) ? v.requests.filter((t): t is number => typeof t === 'number' && Number.isFinite(t)) : [],
    completed: strings(v.completed).slice(-COMPLETED_KEEP),
    armed: strings(v.armed).slice(-ARMED_KEEP),
    seeded: v.seeded === true,
  };
}

/** D-01: only a quiz with every answer correct counts as 100%. */
export function isPerfectQuiz(correct: number, total: number): boolean {
  return Number.isFinite(correct) && Number.isFinite(total) && total > 0 && correct === total;
}

/** QuizRoundsView hands over a rounded percent. Convert to a correct count without ever inventing a perfect score:
 *  when rounding makes 100 ambiguous (n >= 200, where n-1 right also rounds to 100) assume one miss. */
export function percentToCorrect(percent: number, questionCount: number): number {
  const correct = Math.round((percent * questionCount) / 100);
  if (correct >= questionCount && questionCount >= 200) return questionCount - 1;
  return Math.min(correct, questionCount);
}

/** D-42. 'none' when there was no quiz; only an exact all-correct quiz is '100'. */
export function quizScoreBucket(
  correct: number | null, total: number | null,
): '100' | '95-99' | '90-94' | '<90' | 'none' {
  if (correct == null || total == null || !Number.isFinite(correct) || !Number.isFinite(total) || total <= 0) return 'none';
  if (correct >= total) return '100';
  const pct = Math.floor((correct / total) * 100);
  if (pct >= 95) return '95-99';
  if (pct >= 90) return '90-94';
  return '<90';
}
