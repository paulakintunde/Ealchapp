// How long an exam attempt that STARTED while authorized stays gradable.
//
// ── The window is the section's own clock plus one hour ─────────────────────
//
// D-06: an attempt begun while entitled may be finished and graded even if the
// subscription lapses mid-épreuve (cancellation, natural expiry, or a delayed
// downgrade webhook). Starting a NEW attempt gets no grace at all — that is the
// gate's job, not this file's.
//
// The duration is ExamSection.timingS, in SECONDS. NOT `overview.minutes`:
// that field exists only on Lesson (the Den overview page) and does not exist
// on ExamPaper or ExamSection at all. The authorization is section-scoped for
// the same reason: app/exam-section.tsx runs an independent wall-clock per
// épreuve (startClock(section.timingS, Date.now())), so each épreuve is a
// genuinely separate start with its own duration.
//
// The buffer absorbs the real gap between a candidate's last keystroke and the
// grader's reply: submit walks every open task in the section and awaits one
// LLM round trip each (app/exam-section.tsx submit()), and a PO/PE section can
// carry several.

/** D-06's buffer, in seconds. Sixty minutes, fixed — deliberately NOT a
 *  system_config tunable: a window nobody can widen at runtime is one fewer
 *  thing an attacker or a misconfiguration can stretch. */
export const ATTEMPT_GRACE_S = 3600;

/** Ceiling on a single section's clock, in seconds (6 hours). No real épreuve
 *  approaches this — the longest section in any shipped format is under two
 *  hours — so this only ever bounds a corrupt or absurd authored timingS. */
export const MAX_TIMING_S = 21600;

/** A section clock coerced into [0, MAX_TIMING_S], integer seconds. A
 *  non-finite or negative value reads as 0, which makes the window the bare
 *  60-minute buffer rather than infinite. */
export function clampTimingS(timingS: number): number {
  if (!Number.isFinite(timingS)) return timingS === Infinity ? MAX_TIMING_S : 0;
  return Math.min(Math.max(0, Math.floor(timingS)), MAX_TIMING_S);
}

/** When an attempt started at `startedAtMs` on a section of `timingS` seconds
 *  stops being gradable. */
export function attemptExpiresAt(startedAtMs: number, timingS: number): number {
  return startedAtMs + (clampTimingS(timingS) + ATTEMPT_GRACE_S) * 1000;
}

/** Whether `nowMs` is still inside the window. Expiry is EXCLUSIVE, matching
 *  the `expires_at > now()` predicate grade-exam uses in SQL. */
export function attemptStillGradable(expiresAtMs: number, nowMs: number): boolean {
  return nowMs < expiresAtMs;
}
