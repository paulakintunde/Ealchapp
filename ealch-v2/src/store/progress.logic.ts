// Progress engine — pure math over the session log AND the attempt log.
//
// This file must stay free of react-native, zustand and AsyncStorage imports:
// the test runner (`node --test "src/**/*.test.ts"`) executes TypeScript
// directly and cannot load any of them. It may import schema.ts, which imports
// nothing at all — the same allowance content.logic.ts takes, and the reason the
// persist migration below can be tested at all. Every calculation the app makes
// about streaks, minutes and week dots lives here; src/store/useProgress.ts is
// only the persistence shell around it.
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

/** The last lesson the user opened and did not finish — what the hero offers to
 *  "Resume". Only content-stable fields are stored: the title is French display
 *  copy (the serif hero title), never a localized UI string, so it reads the
 *  same after a later language switch. The subtitle and CTA are derived at
 *  render time from `activity`, not persisted. */
export type ResumeState = {
  route: string;
  title: string;
  activity: Activity;
  /** Local day it was stamped, so a stale resume stops dominating the hero. */
  at: string;
};

/** How old a resume can be before the hero stops offering it. A lesson last
 *  touched three weeks ago is not something you are "resuming". */
export const RESUME_MAX_AGE_DAYS = 21;

/** Whether the hero should still offer this resume, or fall through to a
 *  "Begin" recommendation. Null and over-age resumes are both not fresh. */
export function resumeIsFresh(resume: ResumeState | null, today: string): boolean {
  if (!resume) return false;
  const age = daysBetween(resume.at, today);
  return age >= 0 && age <= RESUME_MAX_AGE_DAYS;
}

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

/** Whole days from `from` to `to` (positive when `to` is later). Same UTC-on-a
 *  local-day-string basis as shiftDay, so it never trips over DST. */
export function daysBetween(from: string, to: string): number {
  return Math.round((dayToUTC(to) - dayToUTC(from)) / 86_400_000);
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
import { ITEM_ID_RE, type Modality } from '../content/schema.ts';

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
  /** WHICH memory this attempt exercised. Recognising a word and being able to
   *  say it are different memories with different decay, so an attempt that does
   *  not say which one it was cannot honestly be scheduled against either.
   *
   *  Required, which is the whole point of CF-02 — but it only became safe to
   *  require once the v1→v2 persist migration below could give the attempts
   *  already sitting on real devices an honest value. Contract first, storage
   *  second; see migrateProgressToV2. */
  modality: Modality;
};

/** Everything about an attempt except the day it happened — the store stamps
 *  `date` at write time, exactly as it does for a session. */
export type AttemptInput = Omit<AttemptEntry, 'date'>;

// ── The v1 → v2 persist migration (guardrail G2) ─────────────────────────────
//
// `modality` became required on AttemptEntry above. Every attempt already
// written to AsyncStorage on a real device predates the field and has none.
// zustand's default shallow merge only heals MISSING TOP-LEVEL KEYS; it does not
// reach inside the `attempts` array, so without this the old entries rehydrate
// as attempts whose modality is undefined and fold into `undefined`-keyed cards.
//
// The failure mode is not a crash, which is why it needs a migration rather than
// a guard: the learner opens the app and their history is silently wrong.
//
// 'recognise' is the honest default rather than a convenient one. Every drill
// that existed when those attempts were written asked the learner to recall a
// word they were shown — none captured production. Sibling-gating then reads
// legacy history as recognition, which is exactly what it was, and a producer
// card has to be earned rather than inherited.
//
// Lives here, in the island, so it is testable: useProgress.ts imports zustand
// and AsyncStorage and cannot run under `node --test`.

/** The slice of state that is actually persisted (see useProgress `partialize`). */
export type PersistedProgress = {
  sessions: unknown[];
  attempts: AttemptEntry[];
  errors: unknown[];
  resume: unknown;
};

const EMPTY_PERSISTED: PersistedProgress = { sessions: [], attempts: [], errors: [], resume: null };

const isObj = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);

/**
 * Bring a persisted v1 blob up to v2. Never throws: a blob we cannot read means
 * "no progress yet", never a failed launch. It is also idempotent — an attempt
 * that already carries a valid modality keeps it — so re-running it, or running
 * it against a v2 blob, changes nothing.
 */
export function migrateProgressToV2(persisted: unknown): PersistedProgress {
  if (!isObj(persisted)) return { ...EMPTY_PERSISTED };

  const rawAttempts = Array.isArray(persisted.attempts) ? persisted.attempts : [];
  const attempts: AttemptEntry[] = [];
  for (const a of rawAttempts) {
    // Drop entries that were never a usable attempt. Keeping a shapeless record
    // would only push the same problem into the fold.
    if (!isObj(a) || typeof a.itemId !== 'string' || typeof a.date !== 'string') continue;
    const m = a.modality;
    attempts.push({
      ...(a as unknown as AttemptEntry),
      modality: m === 'produce' || m === 'discriminate' || m === 'recognise' ? m : 'recognise',
    });
  }

  return {
    sessions: Array.isArray(persisted.sessions) ? persisted.sessions : [],
    attempts,
    errors: Array.isArray(persisted.errors) ? persisted.errors : [],
    resume: persisted.resume ?? null,
  };
}

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
  /** The last thing we asked for and the last thing we got back. Carried so a
   *  review list can name the item without a corpus lookup — the corpus may have
   *  moved on, but what the learner actually saw and said is preserved here. */
  lastExpected: string;
  lastHeard: string;
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
      cur.lastExpected = a.expected;
      cur.lastHeard = a.heard;
    } else {
      out.set(a.itemId, {
        itemId: a.itemId,
        seen: 1,
        correct: a.correct ? 1 : 0,
        ratio: a.correct ? 1 : 0,
        lastVerdict: a.verdict,
        lastCorrect: a.correct,
        lastDate: a.date,
        lastExpected: a.expected,
        lastHeard: a.heard,
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

// ── The scheduler (SRS) ──────────────────────────────────────────────────────
//
// Spaced repetition, derived — like everything else here — straight from the
// attempt log, with no second source of truth to persist or keep in sync. Each
// item's schedule is a fold of ITS attempts in order: an SM-2-shaped interval
// that grows while the learner keeps getting the item right and collapses the
// moment they miss it. The log is day-granular (attempts carry a local day, not
// an instant), so intervals are whole days and "due" means dueDay <= today —
// the same resolution the streak already works at. An item the learner has never
// attempted is not a card: new material is introduced by drills and lessons, not
// by the review queue.

export type SrsGrade = 0 | 1 | 2; // 0 miss (relearn) · 1 shaky pass · 2 clean pass

export type SrsCard = {
  itemId: string;
  /** WHICH memory this card schedules. Recognising a word and producing it decay
   *  separately, so one item holds up to three cards — one per modality — each
   *  with its own interval. This is the (item, modality) key CF-02 requires. */
  modality: Modality;
  /** Consecutive non-miss reviews. Resets to 0 on a miss. */
  reps: number;
  /** SM-2 ease factor, clamped to [1.3, 3.0]. How fast the interval grows. */
  ease: number;
  /** Current interval in days. 0 means "due immediately" — just missed, or a
   *  brand-new item whose first pass has not yet earned a day of spacing. */
  intervalDays: number;
  /** The day this item next comes due: lastDay + intervalDays. */
  dueDay: string;
  /** The day of its most recent attempt. */
  lastDay: string;
  lastVerdict: AttemptVerdict;
  seen: number;
};

/** How an attempt grades for scheduling. `correct` is the drill's own verdict on
 *  whether it passed; a 'close' pass is real but shaky, so it advances less. A
 *  miss always relearns, whatever the recognizer verdict happened to be. */
export function gradeAttempt(a: AttemptEntry): SrsGrade {
  if (!a.correct) return 0;
  return a.verdict === 'close' ? 1 : 2;
}

const MIN_EASE = 1.3;
const MAX_EASE = 3.0;

/** Advance one card's numbers by a single graded attempt. Pure and exported so
 *  the interval ladder can be tested directly, without synthesising a log. */
export function applyGrade(
  card: { reps: number; ease: number; intervalDays: number },
  grade: SrsGrade
): { reps: number; ease: number; intervalDays: number } {
  const { reps, ease, intervalDays } = card;
  if (grade === 0) {
    // A miss wipes the run and sends the item back to the front of the queue.
    return { reps: 0, ease: Math.max(MIN_EASE, ease - 0.2), intervalDays: 0 };
  }
  if (grade === 1) {
    // Shaky pass: it advances, but by less, and its ease erodes.
    const next = reps === 0 ? 1 : Math.max(1, Math.round(intervalDays * 1.2));
    return { reps: reps + 1, ease: Math.max(MIN_EASE, ease - 0.15), intervalDays: next };
  }
  // Clean pass: the classic 1 → 3 → interval × ease ladder.
  const next = reps === 0 ? 1 : reps === 1 ? 3 : Math.max(1, Math.round(intervalDays * ease));
  return { reps: reps + 1, ease: Math.min(MAX_EASE, ease + 0.1), intervalDays: next };
}

/** The scheduler key for one memory: an item id and the modality being trained.
 *  Two cards never collide across modalities, and never across items. */
export function cardKey(itemId: string, modality: Modality): string {
  return `${itemId}::${modality}`;
}

/** Whether an attempt can become a recall card. The rule is about the DATA, not
 *  the drill: any attempt whose itemId is a real corpus item id is scheduled,
 *  whatever surface produced it — so a Phase 7 narration `produce` interaction
 *  schedules exactly like a flashcard, which the old activity allowlist would
 *  have recorded and silently dropped.
 *
 *  Excluded, and correctly: a roleplay turn (`${scenario}.t${ix}`), a whole
 *  lesson, an open-ended exam response. Those are logged and DO surface in Le
 *  Rapport, but their target is not an atomic word there is a recall form for,
 *  so there is nothing for the SRS to bring back. `ITEM_ID_RE` is the pure test
 *  for "is this a real corpus item", shared with the schema that mints the ids. */
export function isSchedulable(a: AttemptEntry): boolean {
  return ITEM_ID_RE.test(a.itemId);
}

// ── Sibling-gating ───────────────────────────────────────────────────────────
//
// You should not be drilling production of a word you cannot yet reliably
// recognise. So a produce or discriminate card is not surfaced until its
// recognise sibling is stable — which caps the flood of new cards a first
// session would otherwise generate (recognise + produce on every new item, all
// due at once), the single biggest documented churn event.
//
// The floor is NOT "two clean passes". Two passes only reaches reps 2, interval
// 3 — the tail of the fixed part of the ladder (1 → 3), before the interval has
// multiplied even once. A card there is not stable; it just has not failed yet.
// The floor is reps ≥ 3 (past the two fixed steps, into the interval×ease
// regime) AND interval ≥ 7 (it actually earned about a week of spacing, so a
// card that scraped three shaky passes with an eroded ease does not unlock its
// producers early). These are named so the sibling-gate and its test move
// together.
export const SIBLING_GATE_REPS = 3;
export const SIBLING_GATE_INTERVAL_DAYS = 7;

/** Is a recognise card stable enough to build production on? A missing sibling
 *  is, correctly, not stable: you cannot have earned production of a word the
 *  log has no record of you recognising. */
export function recognitionStable(recognise: SrsCard | undefined): boolean {
  return (
    !!recognise &&
    recognise.reps >= SIBLING_GATE_REPS &&
    recognise.intervalDays >= SIBLING_GATE_INTERVAL_DAYS
  );
}

/** Every scheduled memory, folded into its current card, keyed by (item,modality).
 *  One item can hold up to three cards — recognise, produce, discriminate — each
 *  advancing on its own attempts and its own interval. Produce/discriminate cards
 *  are withheld until their recognise sibling clears the stability floor. */
export function srsCards(attempts: AttemptEntry[]): Map<string, SrsCard> {
  // Group preserving chronological order — the log is already append-ordered.
  const byKey = new Map<string, AttemptEntry[]>();
  for (const a of attempts) {
    if (!isSchedulable(a)) continue;
    const key = cardKey(a.itemId, a.modality);
    const list = byKey.get(key);
    if (list) list.push(a);
    else byKey.set(key, [a]);
  }

  const out = new Map<string, SrsCard>();
  for (const [key, list] of byKey) {
    let state = { reps: 0, ease: 2.5, intervalDays: 0 };
    let lastDay = '';
    let lastVerdict: AttemptVerdict = 'none';
    for (const a of list) {
      state = applyGrade(state, gradeAttempt(a));
      lastDay = a.date;
      lastVerdict = a.verdict;
    }
    out.set(key, {
      itemId: list[0].itemId,
      modality: list[0].modality,
      reps: state.reps,
      ease: state.ease,
      intervalDays: state.intervalDays,
      dueDay: shiftDay(lastDay, state.intervalDays),
      lastDay,
      lastVerdict,
      seen: list.length,
    });
  }

  // Sibling-gate: withhold any produce/discriminate card whose recognise sibling
  // has not cleared the floor. Collect first, then delete — deleting while
  // iterating a Map is legal but reads as a trap. A recognise card that later
  // lapses (a miss drops it below the floor) withdraws its producers again,
  // which is the honest behaviour: recognition regressed, so production is no
  // longer earned. The producers' own history is not lost, only unsurfaced —
  // the attempt log is the source of truth, cards are a disposable fold.
  const gated: string[] = [];
  for (const [key, card] of out) {
    if (card.modality === 'recognise') continue;
    if (!recognitionStable(out.get(cardKey(card.itemId, 'recognise')))) gated.push(key);
  }
  for (const key of gated) out.delete(key);

  return out;
}

/** The review queue for `today`: cards whose dueDay has arrived, most overdue
 *  first, then hardest (lowest ease), then by id for a stable order. */
export function dueCards(attempts: AttemptEntry[], today: string): SrsCard[] {
  return [...srsCards(attempts).values()]
    .filter((c) => c.dueDay <= today)
    .sort((a, b) => {
      if (a.dueDay !== b.dueDay) return a.dueDay < b.dueDay ? -1 : 1;
      if (a.ease !== b.ease) return a.ease - b.ease;
      return a.itemId < b.itemId ? -1 : 1;
    });
}

/** How many items are due on `today` — the honest review count. */
export function reviewDueCount(attempts: AttemptEntry[], today: string): number {
  let n = 0;
  for (const c of srsCards(attempts).values()) if (c.dueDay <= today) n += 1;
  return n;
}

/** The soonest not-yet-due cards, for an "up next" preview. */
export function upcomingCards(attempts: AttemptEntry[], today: string, limit?: number): SrsCard[] {
  const up = [...srsCards(attempts).values()]
    .filter((c) => c.dueDay > today)
    .sort((a, b) => (a.dueDay !== b.dueDay ? (a.dueDay < b.dueDay ? -1 : 1) : a.itemId < b.itemId ? -1 : 1));
  return typeof limit === 'number' ? up.slice(0, Math.max(0, limit)) : up;
}

// ── The error log ────────────────────────────────────────────────────────────
//
// The weak-spots section on home used to assert three fixed weaknesses about a
// user who had done nothing. This log is where a real one is recorded: one
// ErrorEvent each time a drill can name the grammar skill the learner just
// missed. The taxonomy is deliberately small and closed — a weakness we cannot
// route to a remediation is a weakness we cannot honestly show.

export type WeakSkill = 'liaison' | 'nasales' | 'subjonctif' | 'genre' | 'register' | 'passe-compose';

export type ErrorEvent = {
  /** Local calendar day, stamped at write time — same contract as the other logs. */
  date: string;
  skill: WeakSkill;
  /** Which drill surfaced the miss. Kept for a future "where you slip" view; the
   *  weakness ranking itself is source-agnostic. */
  source: Activity;
};

/** Everything about an error except the day — the store stamps `date`. */
export type ErrorInput = Omit<ErrorEvent, 'date'>;

export type Weakness = { skill: WeakSkill; count: number };

/** The learner's top weak skills over a trailing window, most-missed first.
 *
 *  Honest by construction: a skill with zero errors in the window never appears,
 *  so an empty return is an empty section — never a fabricated one. Ties break on
 *  skill name so the order is stable across renders. `days` is the trailing
 *  window (7 = today and the six days before it), which is what makes home's
 *  "THIS WEEK" caption a fact rather than a decoration. */
export function topWeaknesses(errors: ErrorEvent[], today: string, days = 7, limit = 3): Weakness[] {
  const counts = new Map<WeakSkill, number>();
  for (const e of errors) {
    const age = daysBetween(e.date, today);
    if (age < 0 || age >= days) continue;
    counts.set(e.skill, (counts.get(e.skill) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([skill, count]) => ({ skill, count }))
    .sort((a, b) => (b.count !== a.count ? b.count - a.count : a.skill < b.skill ? -1 : 1))
    .slice(0, Math.max(0, limit));
}
