// The exam clock — pure arithmetic, no React, no timers.
//
// ── Why this is wall-clock and not a tick counter ───────────────────────────
//
// The obvious countdown is `setInterval(() => setLeft(l => l - 1), 1000)`. On a
// phone that is not a clock, it is a stopwatch that stops when the user leaves.
// Background the app, take a call, answer a message, come back: the interval
// was throttled or suspended, and the candidate has been handed however long
// they were away. On the reading épreuve that is sixty minutes of homework
// wearing an exam's clothes.
//
// So nothing here counts ticks. The state records WHEN the section started, and
// every read subtracts that from the current wall clock. A component still
// re-renders on an interval, but only to re-READ; if the interval misses twenty
// beats the next read is still correct.
//
// The one thing wall-clock arithmetic cannot survive is the device clock being
// changed mid-section. That is out of scope and deliberately so: defending it
// needs a trusted time source, and a candidate who sets their phone back to buy
// exam time on a practice estimate has cheated at solitaire.

// ExamMode lives in content/schema.ts, not here: it rides on every persisted
// ExamResult, which makes it a shipped string value with append-only rules,
// and this module is a pure util with no opinion about storage.

export type ClockState = {
  /** Wall clock at the moment the section started. */
  startedAtMs: number;
  /** The published clock for this épreuve. */
  durationS: number;
  /** Total time already spent paused. Practice mode only — see pause(). */
  pausedMs: number;
  /** When the current pause began, or null when running. */
  pausedAtMs: number | null;
};

export function startClock(durationS: number, nowMs: number): ClockState {
  return { startedAtMs: nowMs, durationS: Math.max(0, Math.floor(durationS)), pausedMs: 0, pausedAtMs: null };
}

/**
 * Pause. A no-op when already paused, so a double tap cannot swallow the
 * first pause's start time and hand the candidate unlimited time.
 *
 * CALLERS MUST GATE THIS ON MODE. Nothing here checks it, because the clock
 * does not know what mode it is in; the section runner does, and it must never
 * offer pause in exam mode. That split is deliberate: a pausable exam clock is
 * not a clock, and burying the check down here would make it look like a
 * property of time rather than a property of the mode.
 */
export function pauseClock(c: ClockState, nowMs: number): ClockState {
  if (c.pausedAtMs !== null) return c;
  return { ...c, pausedAtMs: nowMs };
}

/** Resume. A no-op when already running. */
export function resumeClock(c: ClockState, nowMs: number): ClockState {
  if (c.pausedAtMs === null) return c;
  return { ...c, pausedMs: c.pausedMs + Math.max(0, nowMs - c.pausedAtMs), pausedAtMs: null };
}

/** Milliseconds of RUNNING time since the section started. */
export function elapsedMs(c: ClockState, nowMs: number): number {
  const raw = Math.max(0, nowMs - c.startedAtMs);
  const pausedSoFar = c.pausedMs + (c.pausedAtMs === null ? 0 : Math.max(0, nowMs - c.pausedAtMs));
  return Math.max(0, raw - pausedSoFar);
}

/** Seconds left, floored at 0 and never negative — a negative countdown reads
 *  as a bug to a candidate who is already under pressure. */
export function remainingS(c: ClockState, nowMs: number): number {
  return Math.max(0, c.durationS - Math.floor(elapsedMs(c, nowMs) / 1000));
}

export function isExpired(c: ClockState, nowMs: number): boolean {
  return remainingS(c, nowMs) <= 0;
}

/** Five minutes, then one minute. Descending, which crossedWarnings relies on. */
export const WARN_THRESHOLDS_S = [300, 60] as const;

/**
 * Which warning thresholds were crossed between two readings.
 *
 * Takes both readings rather than just the current one because a warning is an
 * EDGE, not a state: "remaining <= 300" is true for the whole last five minutes
 * and would fire on every tick. It also means a reading that jumps — the app
 * was backgrounded across both thresholds — reports both, so a candidate who
 * comes back with forty seconds left is still told, once, rather than silently
 * missing the warnings that happened while they were away.
 */
export function crossedWarnings(prevRemainingS: number, nextRemainingS: number): number[] {
  if (nextRemainingS >= prevRemainingS) return [];
  return WARN_THRESHOLDS_S.filter((t) => prevRemainingS > t && nextRemainingS <= t);
}

/** 'MM:SS', or 'H:MM:SS' past an hour. Padded so the digits do not jitter. */
export function formatClock(secs: number): string {
  const s = Math.max(0, Math.floor(secs));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(sec).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

/**
 * What a screen reader is told, and only at the moments it is worth saying.
 *
 * A live-region clock that announces every second makes the screen unusable:
 * the reader never stops talking and the candidate cannot hear the questions
 * (UDL 08). So the announcement is tied to the warning edges above, which are
 * the two moments the information actually changes a decision.
 */
export function warningAnnouncement(threshold: number, lang: 'fr' | 'en'): string {
  const mins = Math.round(threshold / 60);
  if (lang === 'fr') return mins === 1 ? 'Une minute restante' : `${mins} minutes restantes`;
  return mins === 1 ? 'One minute remaining' : `${mins} minutes remaining`;
}
