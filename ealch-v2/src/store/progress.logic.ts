// Progress engine — pure math over the session log.
//
// This file must stay free of react-native, zustand and AsyncStorage imports:
// the test runner (`node --test "src/**/*.test.ts"`) executes TypeScript
// directly and cannot load any of them. Every calculation the app makes about
// streaks, minutes and week dots lives here; src/store/useProgress.ts is only
// the persistence shell around it.

export type Activity =
  | 'lesson' | 'flashcards' | 'voiceflash' | 'sentence'
  | 'roleplay' | 'dictation' | 'speak' | 'player' | 'review';

export type SessionEntry = {
  /** Local calendar day, 'YYYY-MM-DD' — deliberately NOT an ISO instant.
   *  Storing a UTC timestamp and deriving the day at read time makes the streak
   *  flicker across timezone changes and DST. The day is computed once, at
   *  write time, in the timezone the user was actually practising in. */
  date: string;
  activity: Activity;
  minutes: number;
  items: number;
};

const pad = (n: number) => String(n).padStart(2, '0');

/** The local calendar day `d` falls on. */
export function localDay(d: Date = new Date()): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** Day arithmetic runs in UTC on purpose: 'YYYY-MM-DD' is already a local day,
 *  and UTC has no DST, so shifting by 86 400 000 ms can never land on the same
 *  or a skipped calendar date the way local-time arithmetic can. */
function dayToUTC(day: string): number {
  const [y, m, d] = day.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
}

/** The day `delta` days from `day` (negative walks backwards). */
export function shiftDay(day: string, delta: number): string {
  const d = new Date(dayToUTC(day) + delta * 86_400_000);
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

/** Monday-first weekday index (0 = Monday … 6 = Sunday), matching T.dayLetters. */
export function mondayIndex(day: string): number {
  return (new Date(dayToUTC(day)).getUTCDay() + 6) % 7;
}

/** Minutes practised on `today`. */
export function minutesToday(sessions: SessionEntry[], today: string): number {
  let total = 0;
  for (const s of sessions) if (s.date === today) total += s.minutes;
  return total;
}

/** Daily goal in minutes, parsed from the onboarding pace string ('10 min' → 10).
 *  `pace` is a user-facing label, so malformed input falls back to 10 rather
 *  than rendering NaN into the ring. */
export function goalTarget(pace: string): number {
  const m = /\d+/.exec(pace ?? '');
  const n = m ? Number(m[0]) : NaN;
  return Number.isFinite(n) && n > 0 ? n : 10;
}

/** Seven booleans for the calendar week containing `today`, Monday-first.
 *  True where that day carries at least one session. */
export function weekDots(sessions: SessionEntry[], today: string): boolean[] {
  const practised = new Set(sessions.map((s) => s.date));
  const monday = shiftDay(today, -mondayIndex(today));
  return Array.from({ length: 7 }, (_, i) => practised.has(shiftDay(monday, i)));
}

export type Streak = {
  days: number;
  freezeUsed: boolean;
  /** The day a freeze bridged, so the UI can name it instead of hardcoding
   *  Wednesday. Null when no freeze was spent. */
  frozenDay: string | null;
  /** Freezes still in hand after the streak has been paid for. */
  freezesLeft: number;
};

/** Consecutive practised days ending today — or yesterday.
 *
 *  A streak of N means "N days ending today or yesterday". Today is in
 *  progress, so an empty today does not break the run and does not spend a
 *  freeze; a user who practised yesterday still sees their streak this morning
 *  rather than watching it reset at every midnight.
 *
 *  A single missing day before that is bridged by a freeze, which is consumed.
 *  Two missing days in a row end the streak however many freezes are held — a
 *  freeze buys one day, not a holiday.
 *
 *  A freeze is only charged if an older practised day is actually found behind
 *  the gap. Spending one on the empty void before a user's first session would
 *  report "protected" when nothing was protected. */
export function streak(sessions: SessionEntry[], today: string, freeze: number): Streak {
  const practised = new Set(sessions.map((s) => s.date));

  let cursor = practised.has(today) ? today : shiftDay(today, -1);
  let days = 0;
  let spent = 0;
  let frozenDay: string | null = null;
  // A gap bridged but not yet justified by an older practised day.
  let pending: string | null = null;

  // Ten years of daily practice is a generous ceiling and a hard stop on a
  // corrupt log walking us backwards forever.
  for (let guard = 0; guard < 3660; guard++) {
    if (practised.has(cursor)) {
      days++;
      if (pending !== null) {
        frozenDay ??= pending;
        spent++;
        pending = null;
      }
    } else if (pending !== null || spent >= freeze) {
      // Second gap in a row, or no freeze left to spend.
      break;
    } else {
      pending = cursor;
    }
    cursor = shiftDay(cursor, -1);
  }

  if (days === 0) return { days: 0, freezeUsed: false, frozenDay: null, freezesLeft: freeze };
  return { days, freezeUsed: frozenDay !== null, frozenDay, freezesLeft: freeze - spent };
}
