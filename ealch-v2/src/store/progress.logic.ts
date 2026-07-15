// Progress engine — pure math over the session log AND the attempt log.
//
// This file must stay free of react-native, zustand and AsyncStorage imports:
// the test runner (`node --test "src/**/*.test.ts"`) executes TypeScript
// directly and cannot load any of them. Every calculation the app makes about
// streaks, minutes and week dots lives here; src/store/useProgress.ts is only
// the persistence shell around it.
//
// Two logs, deliberately separate:
//   - the SESSION log (SessionEntry) answers "did they show up, how long" — it
//     drives the streak, the today ring and the week dots.
//   - the ATTEMPT log (AttemptEntry) answers "what did they get right or wrong,
//     on which word" — it is the raw material for the SRS, Le Rapport and Den
//     completion. Every drill already computes a score and a verdict per item
//     and, until now, threw them away; this records them.

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

// ── The attempt log ──────────────────────────────────────────────────────────
//
// One AttemptEntry per graded response to one corpus item. `verdict` is the same
// four-way signal the recognizer / matcher produced ('good' | 'close' | 'off' |
// 'none'); the type is re-declared here rather than imported so this module keeps
// its zero-runtime-import property. It is structurally identical to the Verdict
// in utils/score.ts, so the drill screens can pass their scores straight through.
export type AttemptVerdict = 'good' | 'close' | 'off' | 'none';

export type AttemptEntry = {
  /** Local calendar day, stamped at write time — same contract as
   *  SessionEntry.date (see the note there). */
  date: string;
  activity: Activity;
  /** The corpus Item id the attempt was graded against. Always a real item id,
   *  so the SRS can key on it directly. */
  itemId: string;
  /** What we asked the learner for (the French, or the English on a reverse
   *  card). Stored verbatim so a later review can show it without a corpus join. */
  expected: string;
  /** What came back: the recognizer transcript, the typed answer, or '' for a
   *  self-rated card where nothing was captured. */
  heard: string;
  /** 0..1. For typed/self-rated drills this is simply 1 or 0. */
  score: number;
  verdict: AttemptVerdict;
  /** Did it count as correct. Distinct from `verdict`: a 'close' utterance is
   *  useful signal but not a pass, so it can be correct === false with verdict
   *  === 'close'. */
  correct: boolean;
};

/** Everything about an attempt except the day it happened — the store stamps
 *  `date` at write time, exactly as it does for a session. */
export type AttemptInput = Omit<AttemptEntry, 'date'>;

/** A running recall summary for one item, folded from its attempts in order. */
export type ItemStat = {
  itemId: string;
  /** Total graded attempts. */
  seen: number;
  /** How many of them were correct. */
  correct: number;
  /** correct / seen, in 0..1. 0 when never seen (guarded by callers). */
  ratio: number;
  /** The most recent attempt's fields — "where does this item stand now". */
  lastVerdict: AttemptVerdict;
  lastCorrect: boolean;
  lastDate: string;
};

/** Fold the attempt log into a per-item summary. Attempts are assumed to be in
 *  chronological (append) order, so the last one seen for an item wins the
 *  `last*` fields. */
export function statsByItem(attempts: AttemptEntry[]): Map<string, ItemStat> {
  const out = new Map<string, ItemStat>();
  for (const a of attempts) {
    const cur = out.get(a.itemId);
    if (cur) {
      cur.seen += 1;
      if (a.correct) cur.correct += 1;
      cur.ratio = cur.correct / cur.seen;
      cur.lastVerdict = a.verdict;
      cur.lastCorrect = a.correct;
      cur.lastDate = a.date;
    } else {
      out.set(a.itemId, {
        itemId: a.itemId,
        seen: 1,
        correct: a.correct ? 1 : 0,
        ratio: a.correct ? 1 : 0,
        lastVerdict: a.verdict,
        lastCorrect: a.correct,
        lastDate: a.date,
      });
    }
  }
  return out;
}

/** Items ranked weakest-first — the review queue Le Rapport and the SRS draw
 *  from. Lowest correct ratio first; ties broken so an item the learner missed
 *  *last time* outranks one they eventually got, and more recent misses outrank
 *  older ones. Only items seen at least once are returned. `limit` (when given)
 *  caps the list. */
export function weakestItems(attempts: AttemptEntry[], limit?: number): ItemStat[] {
  const ranked = [...statsByItem(attempts).values()].sort((a, b) => {
    if (a.ratio !== b.ratio) return a.ratio - b.ratio;
    if (a.lastCorrect !== b.lastCorrect) return a.lastCorrect ? 1 : -1;
    if (a.lastDate !== b.lastDate) return a.lastDate < b.lastDate ? 1 : -1;
    return a.itemId < b.itemId ? -1 : 1;
  });
  return typeof limit === 'number' ? ranked.slice(0, Math.max(0, limit)) : ranked;
}

/** Distinct items with at least one correct attempt — the honest floor for
 *  "words you have actually met", as opposed to merely shown. */
export function itemsPracticed(attempts: AttemptEntry[]): Set<string> {
  const met = new Set<string>();
  for (const a of attempts) if (a.correct) met.add(a.itemId);
  return met;
}

/** Attempts recorded on `today`. */
export function attemptsToday(attempts: AttemptEntry[], today: string): number {
  let n = 0;
  for (const a of attempts) if (a.date === today) n += 1;
  return n;
}
