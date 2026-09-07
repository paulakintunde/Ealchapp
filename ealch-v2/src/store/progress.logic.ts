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
  | 'roleplay' | 'dictation' | 'speak' | 'player' | 'review'
  | 'placement' | 'narrated'
  /** A real session: time actually spent sitting a mock exam. */
  | 'exam'
  /** A synthetic attempt written by decomposeExamMiss(), not a drill the user
   *  directly opened — see the exam-to-review loop below. */
  | 'exam-review';

export type SessionEntry = {
  /** Local calendar day, 'YYYY-MM-DD' — deliberately NOT an ISO instant.
   *  Storing a UTC timestamp and deriving the day at read time makes the streak
   *  flicker across timezone changes and DST. The day is computed once, at
   *  write time, in the timezone the user was actually practising in. */
  date: string;
  activity: Activity;
  minutes: number;
};

/** The last position the user left off in ONE activity — what the hero (or a
 *  "Continue" chip) offers to resume into. Only content-stable fields are
 *  stored: the title is French display copy (the serif hero title), never a
 *  localized UI string, so it reads the same after a later language switch.
 *  The subtitle and CTA are derived at render time from `activity`, not
 *  persisted. `route` is the full resume URL, including whatever query params
 *  that screen needs to land on the exact card/section it was stamped from
 *  (e.g. `/dictation?theme=marche&item=fr.a1.marche.007`) — position lives in
 *  the route, not as a separate field here, so every screen can encode it in
 *  whatever shape fits its own content (an item id, a pager section, a turn
 *  index) without this type needing to know which. */
export type ResumeState = {
  route: string;
  title: string;
  activity: Activity;
  /** Local day it was stamped, so a stale resume stops dominating the hero. */
  at: string;
};

/** One resume slot per activity, so leaving a dictée mid-theme to open a
 *  lesson does not erase the dictée's place — each mode keeps its own most
 *  recent position, and the hero picks the freshest of them. */
export type ResumeByMode = Partial<Record<Activity, ResumeState>>;

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

/**
 * Merge a pulled server resume_state snapshot (Phase 9 sync, one row per
 * activity) into the local resumeByMode: per activity, whichever `at` is the
 * later day wins. A same-day tie keeps the LOCAL entry — this device's own
 * same-day write is more likely to be the position the learner actually wants
 * back than a same-day write from another device they have since moved on
 * from, and `at` is day-granular so a real tie is the common case, not an
 * edge case. `changed` is false whenever the pull contributed nothing this
 * device didn't already have, so the caller (src/services/sync.ts) can skip
 * the store write entirely — the same "true no-op" discipline mergeAttempts'
 * caller already follows.
 */
export function mergeResumeByMode(
  local: ResumeByMode,
  pulled: ResumeState[]
): { merged: ResumeByMode; changed: boolean } {
  let changed = false;
  const merged: ResumeByMode = { ...local };
  for (const r of pulled) {
    const cur = merged[r.activity];
    if (!cur || daysBetween(cur.at, r.at) > 0) {
      merged[r.activity] = r;
      changed = true;
    }
  }
  return { merged, changed };
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

// ── Home-launch greeting state ───────────────────────────────────────────────
//
// How Camille greets a learner opening home: brand-new (nothing logged yet),
// back after a short gap, or back after a while. Derived from the session log —
// the same honest signal every other number on home reads — so it never claims a
// return the learner didn't make. A fresh install has no sessions and reads
// 'new'; the day boundary is the local one localDay() names.
export type GreetState = 'new' | 'recent' | 'away';

/** A gap up to this many days since the last session still counts as "recent".
 *  Beyond it, the learner is returning after a while. */
export const GREET_RECENT_MAX_DAYS = 3;

export function greetState(
  sessions: SessionEntry[],
  today: string,
  recentMax: number = GREET_RECENT_MAX_DAYS,
): GreetState {
  if (sessions.length === 0) return 'new';
  let last = sessions[0].date;
  for (const s of sessions) if (s.date > last) last = s.date;
  // Days from the last session to today. A session dated in the future (a device
  // clock that jumped back) yields a negative gap, which is still "recent".
  return daysBetween(last, today) <= recentMax ? 'recent' : 'away';
}

/** Camille's spoken hello repeats at most once per this window, however many
 *  times home is opened in between. Persisted (useStore.lastGreetAt), so an
 *  app restart inside the window stays quiet too. */
export const GREET_COOLDOWN_MS = 2 * 60 * 60 * 1000;

/** Whether the spoken greeting is due. `lastGreetAt` is epoch ms, 0 = never
 *  greeted. A timestamp in the future means the device clock moved backwards;
 *  that must not mute Camille for hours, so it reads as due. */
export function greetDue(lastGreetAt: number, now: number, cooldown: number = GREET_COOLDOWN_MS): boolean {
  if (!Number.isFinite(lastGreetAt) || lastGreetAt <= 0) return true;
  if (lastGreetAt > now) return true;
  return now - lastGreetAt >= cooldown;
}

/** A single drill session longer than this is not practice — it is an app left
 *  open in the background. The app's own daily goals top out at 20 minutes, so
 *  60 is already generous; the cap only exists to catch a foreground-timing miss
 *  or a device clock that jumped, before either can reach the goal ring. */
export const MAX_SESSION_MINUTES = 60;

/** Clamp a raw measured duration to a believable session length. A negative
 *  input — a device clock moved backwards mid-session — collapses to 0; the
 *  writer's `Math.max(1, …)` floor then makes it a 1-minute session, never a
 *  negative one. NaN/Infinity from a broken clock likewise collapse to 0. */
export function clampMinutes(minutes: number): number {
  if (!Number.isFinite(minutes) || minutes < 0) return 0;
  return Math.min(minutes, MAX_SESSION_MINUTES);
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
import {
  ITEM_ID_RE, LEVELS, OPEN_TASK_TYPES, type Modality,
  type ExamFormat, type ExamMode, type ExamSkill, type ExamTask, type ExamTaskType, type Lesson, type ScoreBand,
} from '../content/schema.ts';

export type AttemptVerdict = 'good' | 'close' | 'off' | 'none';

export type AttemptEntry = {
  /** Stable per-attempt id, minted once at write time (see mintAttemptId) or
   *  backfilled for legacy entries by migrateProgressToV3. Required so Phase 9
   *  sync can upload/re-upload idempotently (it is the server primary key) and
   *  merge a pulled server log back into the local one without duplicating —
   *  neither of which `date` (day-granularity only) can do on its own. */
  id: string;
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
  /** A positional deep link (`content.logic.ts` formatAnchor/anchorForItem) —
   *  `<lessonId>#s<n>.<k>` — present only when this attempt was graded from
   *  inside a lesson's practice section, so a later review can jump back to
   *  the exact block instead of only naming the item. Optional and additive:
   *  an attempt logged from a standalone drill (flashcards, voiceflash, …)
   *  has no lesson context to anchor to, and that absence is not an error.
   *  Never an SRS key — SCHEDULABLE/srsCards still key on itemId+modality
   *  only, exactly as before this field existed. */
  anchor?: string;
};

/** Everything about an attempt except its id and the day it happened — the
 *  store stamps both at write time, exactly as it already did for `date`. */
export type AttemptInput = Omit<AttemptEntry, 'date' | 'id'>;

/** A stable per-attempt id. Not cryptographically random — it only has to be
 *  unique enough to dedupe a sync retry, and this file is a zero-runtime-
 *  import pure island (see the file header), so it cannot reach for a native
 *  crypto module the way a screen or service could. */
export function mintAttemptId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * The slice of AttemptEntry the server's `attempts` table stores (Phase 9).
 * Deliberately excludes `expected`/`heard` (reconstructed below as `''`, which
 * this type already treats as a valid "nothing captured" value — see the
 * comment on AttemptEntry.heard) and `anchor` (absent already means "no
 * lesson context to anchor to", which is honestly true for a row this table
 * never stored one for). Does NOT exclude `activity`: Le Rapport
 * (app/feedback.tsx) buckets attempts by it, so reconstructing a pulled,
 * cross-device attempt without a real one would mean inventing a drill type
 * it never ran under — exactly the fabrication this codebase's own
 * "never fabricate" rule forbids, so it is a real server column, not dropped.
 */
export type ServerAttemptRow = {
  id: string;
  itemId: string;
  modality: Modality;
  verdict: AttemptVerdict;
  correct: boolean;
  activity: Activity;
  day: string;
  /** Epoch ms, parsed once by the caller from the server's `timestamptz`. Only
   *  used to order a cross-device merge — never persisted back into
   *  AttemptEntry, which has no ms-precision field. */
  atMs: number;
};

export function attemptToServerRow(a: AttemptEntry): Omit<ServerAttemptRow, 'atMs'> {
  return {
    id: a.id,
    itemId: a.itemId,
    modality: a.modality,
    verdict: a.verdict,
    correct: a.correct,
    activity: a.activity,
    day: a.date,
  };
}

export function serverRowToAttempt(row: ServerAttemptRow): AttemptEntry {
  return {
    id: row.id,
    date: row.day,
    activity: row.activity,
    itemId: row.itemId,
    expected: '',
    heard: '',
    // The server does not store the graded 0..1 score, only `correct` and
    // `verdict` (what the fold actually reads) — 1/0 is the honest collapse,
    // not a guess: it is exactly what a boolean-scored drill already writes.
    score: row.correct ? 1 : 0,
    verdict: row.verdict,
    correct: row.correct,
    modality: row.modality,
  };
}

/**
 * Merge a pulled server log into the local attempt log for one user, deduped
 * by id, re-sorted so the fold's chronological-order assumption ("the log is
 * already append-ordered", see srsCards below) holds after a cross-device
 * merge — a naive append would not.
 *
 * Local-only entries (never yet synced, no server `at`) sort by `date` next
 * to pulled rows and, on a same-day tie, after them: day-granularity cannot
 * resolve same-day order, and ordering already-acknowledged pulled attempts
 * before this device's own same-day ones is the safer default.
 */
export function mergeAttempts(local: AttemptEntry[], pulled: ServerAttemptRow[]): AttemptEntry[] {
  const byId = new Map(local.map((a) => [a.id, a] as const));
  const atById = new Map<string, number>();
  for (const row of pulled) {
    atById.set(row.id, row.atMs);
    if (!byId.has(row.id)) byId.set(row.id, serverRowToAttempt(row));
  }
  return Array.from(byId.values()).sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? -1 : 1;
    const atA = atById.get(a.id) ?? Infinity;
    const atB = atById.get(b.id) ?? Infinity;
    return atA - atB;
  });
}

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

/**
 * Bring a persisted v1 or v2 blob up to v3 (Phase 9, CF-02's identity-substrate
 * half). `id` became required on AttemptEntry above; every attempt written
 * before this field existed has none. Same discipline as migrateProgressToV2:
 * never throws, idempotent (an attempt that already carries an id keeps it),
 * safe to run against a v1, v2 or v3 blob alike — it delegates to
 * migrateProgressToV2 first, so a v1 blob is upgraded in one pass.
 *
 * A minted id here is never uploaded until the next real sync, so it carries
 * no meaning beyond "this row hasn't been seen by the server yet" — exactly
 * like a brand-new attempt's id.
 */
export function migrateProgressToV3(persisted: unknown): PersistedProgress {
  const v2 = migrateProgressToV2(persisted);
  return {
    ...v2,
    attempts: v2.attempts.map((a) =>
      typeof a.id === 'string' && a.id.length > 0 ? a : { ...a, id: mintAttemptId() }
    ),
  };
}

/** The slice of state persisted from v4 on — `resume` (singular, global)
 *  becomes `resumeByMode` (one slot per activity). See ResumeByMode above. */
export type PersistedProgressV4 = {
  sessions: unknown[];
  attempts: AttemptEntry[];
  errors: unknown[];
  resumeByMode: ResumeByMode;
};

function isResumeState(v: unknown): v is ResumeState {
  return (
    isObj(v) &&
    typeof v.route === 'string' &&
    typeof v.title === 'string' &&
    typeof v.activity === 'string' &&
    typeof v.at === 'string'
  );
}

/**
 * Bring a persisted v1, v2 or v3 blob up to v4 (the per-mode resume slots
 * above). Delegates to migrateProgressToV3 first, so any earlier blob upgrades
 * in one pass, then folds the old single `resume` slot into `resumeByMode`
 * keyed by its own `activity` — a lesson resume stamped before this migration
 * still shows up as the lesson slot, it just no longer blocks a dictée or
 * flashcards slot from existing alongside it. Same discipline as V2/V3: never
 * throws, and a malformed or missing `resume` simply yields no slots rather
 * than a fabricated one.
 */
export function migrateProgressToV4(persisted: unknown): PersistedProgressV4 {
  const v3 = migrateProgressToV3(persisted);
  const resumeByMode: ResumeByMode = {};
  if (isResumeState(v3.resume)) resumeByMode[v3.resume.activity] = v3.resume;
  return { sessions: v3.sessions, attempts: v3.attempts, errors: v3.errors, resumeByMode };
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
  /** The most recent attempt's anchor (see AttemptEntry.anchor), when it had
   *  one. Undefined means either no attempts carried an anchor, or the most
   *  recent one didn't — a review list falls back to naming the item. */
  lastAnchor?: string;
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
      cur.lastAnchor = a.anchor;
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
        lastAnchor: a.anchor,
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

// ── Weak-spot ranking (orphan 1) ─────────────────────────────────────────────
//
// Ranking weakness by raw ratio makes a single fumble the loudest signal in the
// app: an item seen once and missed has ratio 0 and outranks an item genuinely
// failing 8 times in 20. That is noise winning over evidence. The Wilson lower
// confidence bound fixes it — it asks not "what is the miss rate" but "what miss
// rate can we be confident is at least this bad", so thin evidence is discounted
// rather than amplified. A 1/1 fumble carries a bound near 0.06; an 8/20 pattern
// near 0.30, so the pattern wins, which is the point.
export const WEAK_WINDOW_DAYS = 30;
export const WEAK_MIN_ATTEMPTS = 8;

/** Wilson score lower bound for `pos` positives in `n` trials, at ~95% (z=1.96).
 *  Here "positive" is a MISS, so a high bound means "confidently failing often". */
export function wilsonLower(pos: number, n: number, z = 1.96): number {
  if (n <= 0) return 0;
  const phat = pos / n;
  const z2 = z * z;
  const denom = 1 + z2 / n;
  const center = phat + z2 / (2 * n);
  const margin = z * Math.sqrt((phat * (1 - phat) + z2 / (4 * n)) / n);
  return Math.max(0, (center - margin) / denom);
}

/** Whether an item has enough attempts to call a weakness confident rather than
 *  a guess. Used to decide what to *assert*, not what to *rank*. */
export function isConfidentWeakSpot(s: ItemStat): boolean {
  return s.seen >= WEAK_MIN_ATTEMPTS;
}

/** Items ranked weakest-first by the Wilson lower bound of their miss rate,
 *  over the last `windowDays` (default 30). Old struggles that have since gone
 *  quiet fall out of the window; a single recent fumble ranks below a sustained
 *  pattern. Replaces raw-ratio ranking for the review list. */
export function weakSpots(
  attempts: AttemptEntry[],
  today: string,
  opts?: { windowDays?: number; limit?: number },
): ItemStat[] {
  const windowDays = opts?.windowDays ?? WEAK_WINDOW_DAYS;
  const inWindow = attempts.filter((a) => {
    const age = daysBetween(a.date, today);
    return age >= 0 && age < windowDays;
  });
  const ranked = [...statsByItem(inWindow).values()]
    .map((s) => ({ s, lower: wilsonLower(s.seen - s.correct, s.seen) }))
    .sort((x, y) => {
      if (y.lower !== x.lower) return y.lower - x.lower; // most-confidently-weak first
      if (x.s.lastCorrect !== y.s.lastCorrect) return x.s.lastCorrect ? 1 : -1;
      if (x.s.lastDate !== y.s.lastDate) return x.s.lastDate < y.s.lastDate ? 1 : -1;
      return x.s.itemId < y.s.itemId ? -1 : 1;
    })
    .map((x) => x.s);
  return typeof opts?.limit === 'number' ? ranked.slice(0, Math.max(0, opts.limit)) : ranked;
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

// Softer lapse. A miss still resets reps — relearning is real, you have to earn
// the interval back — but it no longer slams the card to "due this second". A
// card that had earned weeks of spacing drops to a short relearning STEP, not to
// zero, because a mature lapse is a slip, not a total loss, and zeroing it both
// punishes the learner and floods tomorrow's queue with everything they fumbled
// once. Young cards (interval under a week) still relearn from 0 — there was no
// stability to protect. Tunable and tested.
const RELEARN_MATURE_FLOOR = 21; // a well-established card; equals MASTERY_INTERVAL_DAYS, kept a literal to avoid a load-order dead zone
const RELEARN_REVIEW_FLOOR = 7; // roughly a week: past the fixed ladder
const RELEARN_STEP_MATURE = 2;
const RELEARN_STEP_REVIEW = 1;

/** The interval a card falls to after a miss, floored by how stable it was. */
export function relearnInterval(priorInterval: number): number {
  if (priorInterval >= RELEARN_MATURE_FLOOR) return RELEARN_STEP_MATURE;
  if (priorInterval >= RELEARN_REVIEW_FLOOR) return RELEARN_STEP_REVIEW;
  return 0;
}

/** Advance one card's numbers by a single graded attempt. Pure and exported so
 *  the interval ladder can be tested directly, without synthesising a log. */
export function applyGrade(
  card: { reps: number; ease: number; intervalDays: number },
  grade: SrsGrade
): { reps: number; ease: number; intervalDays: number } {
  const { reps, ease, intervalDays } = card;
  if (grade === 0) {
    // A miss wipes the run and erodes ease, but the interval falls only to a
    // relearning step scaled by prior stability — not always to 0. See
    // relearnInterval.
    return { reps: 0, ease: Math.max(MIN_EASE, ease - 0.2), intervalDays: relearnInterval(intervalDays) };
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

// The daily review cap. Twenty is a session, not a sentence. Without it, a
// learner who crams and then misses a few days opens the app to a backlog of
// hundreds all marked "due", which is the single most reliable way to make them
// close it for good. The overdue work does not vanish — it waits, surfaced most-
// overdue first — but the number the learner sees is a day's worth, never the
// raw debt. Pass a different cap where a caller genuinely wants more; pass
// Infinity for the honest uncapped total (the backlog math uses it).
export const DAILY_REVIEW_CAP = 20;

// ── One fold per render (folded panel: SRS is O(attempts), folded many times) ─
//
// srsCards folds the whole attempt log (bounded at 20k). A single screen asks
// for the due count, the "up next" preview, mastery and the session at once, and
// each used to re-fold independently — the same 20k walk, four times, every
// render. foldCards memoises the last fold by the attempts array's IDENTITY. The
// store replaces that array on every logAttempt (`[...attempts, entry]`), so a
// stale array is impossible: a new log is a new reference and re-folds; the same
// log across one render's derivations folds once. Size-1 is enough because every
// derivation in a render reads the same store array.
let _memoIn: AttemptEntry[] | null = null;
let _memoOut: Map<string, SrsCard> | null = null;
let _foldCount = 0;

/** The shared, memoised card fold. Public so UI that needs the Map directly
 *  (masteredItems) shares the one fold with dueCards and the rest. */
export function foldCards(attempts: AttemptEntry[]): Map<string, SrsCard> {
  if (attempts === _memoIn && _memoOut) return _memoOut;
  _foldCount += 1;
  _memoOut = srsCards(attempts);
  _memoIn = attempts;
  return _memoOut;
}

/** How many real folds have happened. Observability for the shared-fold test —
 *  the cheapest honest proof the memo is doing its job. */
export function srsFoldCount(): number {
  return _foldCount;
}

/** Everything due on `today`, sorted, uncapped. The ordering is the contract:
 *  most overdue first, then hardest (lowest ease), then by id for stability. */
function allDue(attempts: AttemptEntry[], today: string): SrsCard[] {
  return [...foldCards(attempts).values()]
    .filter((c) => c.dueDay <= today)
    .sort((a, b) => {
      if (a.dueDay !== b.dueDay) return a.dueDay < b.dueDay ? -1 : 1;
      if (a.ease !== b.ease) return a.ease - b.ease;
      return a.itemId < b.itemId ? -1 : 1;
    });
}

/** The review queue for `today`, capped to a day's worth. */
export function dueCards(attempts: AttemptEntry[], today: string, cap: number = DAILY_REVIEW_CAP): SrsCard[] {
  const all = allDue(attempts, today);
  return cap >= all.length ? all : all.slice(0, Math.max(0, cap));
}

/** How many items to show as due on `today`: a day's worth at most, never the
 *  raw overdue count. */
export function reviewDueCount(attempts: AttemptEntry[], today: string, cap: number = DAILY_REVIEW_CAP): number {
  return Math.min(allDue(attempts, today).length, Math.max(0, cap));
}

/** How many due items are being held back beyond the cap — the gentle backlog,
 *  for a "and N more waiting" line. Never shown as a debt or a red number. */
export function dueBacklog(attempts: AttemptEntry[], today: string, cap: number = DAILY_REVIEW_CAP): number {
  return Math.max(0, allDue(attempts, today).length - Math.max(0, cap));
}

// ── The daily session (HIGH note 13 — the D1 return hook) ────────────────────
//
// A learner who returns and finds nothing to do leaves as surely as one who
// finds too much. composeSession answers both: capped reviews first, then new
// items to fill whatever budget the reviews left. An empty due list is not an
// empty screen — it is room for new words (the starve fix); a day already full
// of reviews introduces no new ones (the flood fix). New items share the daily
// budget with reviews rather than stacking on top of it.
//
// Pure by construction: the candidate items are passed in, so the island never
// imports the corpus. The caller filters candidates to the learner's level.
export const DEFAULT_NEW_PER_SESSION = 5;

export type ComposedSession<T> = {
  /** Capped, most-overdue-first. */
  due: SrsCard[];
  /** New items to introduce, theme-interleaved, within the leftover budget. */
  fresh: T[];
  /** Due items held back beyond the cap. For a gentle line, never a debt. */
  backlog: number;
};

/** Round-robin items across their themes, so a session is not five of one theme
 *  then five of another — variety holds attention better than a block. */
function interleaveByTheme<T extends { theme?: string }>(items: T[]): T[] {
  const buckets = new Map<string, T[]>();
  for (const it of items) {
    const k = it.theme ?? '';
    const b = buckets.get(k);
    if (b) b.push(it);
    else buckets.set(k, [it]);
  }
  const queues = [...buckets.values()];
  const out: T[] = [];
  let progressed = true;
  while (progressed) {
    progressed = false;
    for (const q of queues) {
      const next = q.shift();
      if (next) { out.push(next); progressed = true; }
    }
  }
  return out;
}

/** Which items may be INTRODUCED as new to a learner whose stored level is
 *  `storeLevel` — the useStore string ('A1', 'B1'...). Items at the learner's
 *  band or below qualify; an unknown or pre-A1 value ('A0', '') means the
 *  floor: sons and a1 only, because a beginner's first new words are a1 words.
 *  The caller passes drill-eligible items; this only draws the level line, so
 *  the two filters stay separable. */
export function introEligible<T extends { level: string }>(items: T[], storeLevel: string): T[] {
  const band = LEVELS.indexOf(storeLevel.toLowerCase() as (typeof LEVELS)[number]);
  const cap = band < 0 ? LEVELS.indexOf('a1') : band;
  return items.filter((it) => {
    const b = LEVELS.indexOf(it.level as (typeof LEVELS)[number]);
    return b >= 0 && b <= cap;
  });
}

export function composeSession<T extends { id: string; theme?: string }>(
  attempts: AttemptEntry[],
  candidates: T[],
  today: string,
  opts?: { cap?: number; newCount?: number },
): ComposedSession<T> {
  const cap = opts?.cap ?? DAILY_REVIEW_CAP;
  const newCount = opts?.newCount ?? DEFAULT_NEW_PER_SESSION;

  const due = dueCards(attempts, today, cap);
  const backlog = dueBacklog(attempts, today, cap);

  // New items get whatever budget the reviews left. Full review day → no new.
  const headroom = Math.max(0, cap - due.length);
  const want = Math.min(newCount, headroom);

  const seen = new Set<string>();
  for (const at of attempts) seen.add(at.itemId);
  const brandNew = candidates.filter((c) => !seen.has(c.id));
  const fresh = interleaveByTheme(brandNew).slice(0, want);

  return { due, fresh, backlog };
}

// ── Placement (CF-16, the honest interim) ────────────────────────────────────
//
// The quick check is not adaptive and does not claim to be: a fixed set of
// recognition questions drawn from the shipped corpus, graded per band. Until a
// calibrated item bank exists (authored via Phase 2), the estimate can honestly
// say only three things: not yet at a1, at a1, or at a2. The screen builds and
// asks the questions; this function is the whole grading rule, kept in the
// island so the boundary cases are tested rather than eyeballed.

/** The pass line per band. 0.6 of a handful of recognition questions is a
 *  coarse screen, not a psychometric claim — which is why the result copy says
 *  "estimate" and the screen says "quick check". */
export const PLACEMENT_PASS = 0.6;

export type PlacementAnswer = { level: string; correct: boolean };

/** Grade a finished quick check. A band passes when it was asked at all and the
 *  share correct meets PLACEMENT_PASS; an unasked band never passes, so a check
 *  with no a2 questions can honestly reach at most A1. */
export function placementEstimate(answers: PlacementAnswer[]): 'A0' | 'A1' | 'A2' {
  const passed = (lvl: string): boolean => {
    const asked = answers.filter((a) => a.level === lvl);
    if (asked.length === 0) return false;
    return asked.filter((a) => a.correct).length / asked.length >= PLACEMENT_PASS;
  };
  if (!passed('a1')) return 'A0';
  return passed('a2') ? 'A2' : 'A1';
}

/** The soonest not-yet-due cards, for an "up next" preview. */
export function upcomingCards(attempts: AttemptEntry[], today: string, limit?: number): SrsCard[] {
  const up = [...foldCards(attempts).values()]
    .filter((c) => c.dueDay > today)
    .sort((a, b) => (a.dueDay !== b.dueDay ? (a.dueDay < b.dueDay ? -1 : 1) : a.itemId < b.itemId ? -1 : 1));
  return typeof limit === 'number' ? up.slice(0, Math.max(0, limit)) : up;
}

// ── Mastery (CF-03) ──────────────────────────────────────────────────────────
//
// "Met" and "mastered" are two different words and the app must not blur them.
// MET is itemsPracticed: you got it right at least once. MASTERED is retention:
// you still have it weeks later. Only SM-2 numbers the shipped engine can
// actually compute define the bar — no retrievability probability exists yet
// (that arrives with FSRS), so mastery is reps and interval, not a 0.90.
export const MASTERY_REPS = 5;
export const MASTERY_INTERVAL_DAYS = 21;

/** Is one card mastered? Five clean-enough reps AND at least three weeks of
 *  earned spacing AND the last attempt was not a miss. reps >= 5 already implies
 *  no miss in the last five reviews (a miss zeroes reps), but the last-verdict
 *  check states the intent rather than leaning on that side effect. */
export function isMastered(c: SrsCard | undefined): boolean {
  return (
    !!c &&
    c.reps >= MASTERY_REPS &&
    c.intervalDays >= MASTERY_INTERVAL_DAYS &&
    c.lastVerdict !== 'off'
  );
}

/** Which items are mastered, given a folded card set. An item is mastered only
 *  when you can both RECOGNISE and PRODUCE it — the recognise and produce cards
 *  must both be mastered — and, where a discriminate card exists (a phonics
 *  contrast), it too. Recognition alone is "met", not mastered: this is a
 *  speaking-first product, so being able to pick a word out is not the same as
 *  being able to say it three weeks later. An item never drilled in production
 *  therefore cannot be mastered, only met, which is the honest state. */
export function masteredItems(cards: Map<string, SrsCard>): Set<string> {
  const byItem = new Map<string, { rec: boolean; prod: boolean; hasDisc: boolean; disc: boolean }>();
  for (const c of cards.values()) {
    const e = byItem.get(c.itemId) ?? { rec: false, prod: false, hasDisc: false, disc: false };
    if (c.modality === 'recognise') e.rec = isMastered(c);
    else if (c.modality === 'produce') e.prod = isMastered(c);
    else if (c.modality === 'discriminate') { e.hasDisc = true; e.disc = isMastered(c); }
    byItem.set(c.itemId, e);
  }
  const out = new Set<string>();
  for (const [itemId, e] of byItem) {
    if (e.rec && e.prod && (!e.hasDisc || e.disc)) out.add(itemId);
  }
  return out;
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

// ── The exam result log (Phase 8) ────────────────────────────────────────────
//
// One ExamResult per completed ExamTask attempt — the record a mock sitting
// needs so a miss can become something more useful than a number. Two
// completely different things happen after a miss, and both are handled here
// rather than in a screen, so the rule lives in one place, testable without
// react-native:
//
//   CLOSED (co_mcq/ce_mcq) miss → decomposeExamMiss() turns the task's
//   targetItemIds into ordinary SRS attempts. The learner does not see an
//   "exam result", they just find those words due for review — the exam was
//   never really testing "can you pass this task", it was testing the atoms
//   underneath it, and this is where that fiction gets corrected.
//
//   OPEN (po_*/pe_*) miss → dueExamSkills() groups misses by (format, skill,
//   band) and resolves each to a REAL prep lesson via Lesson.skill. There is
//   no atom to blame for a bad essay, only a skill, so this is the honest
//   granularity: not "you got word 4 wrong", but "your B2 PE is weak, here is
//   a B2 PE lesson" — and if no such lesson exists, that is a real failure
//   (see the null case below), not a due-skill silently dropped on the floor.

export type ExamResult = {
  /** Stable per-result id, minted once at write time — same contract as
   *  AttemptEntry.id. */
  id: string;
  /** Local calendar day, stamped at write time. */
  date: string;
  taskId: string;
  /** The mock paper this task was sat as part of. Renamed from `seriesId`
   *  alongside ExamSeries → ExamPaper; no logged result anywhere carries the
   *  old key, because no exam content has ever reached status 'published'. */
  paperId?: string;
  format: ExamFormat;
  taskType: ExamTaskType;
  skill: ExamSkill;
  /** The band this task targets — ExamTask.level, copied here so a later
   *  read never needs a corpus join to know what was being tested. */
  band: ScoreBand;
  /**
   * Whether the candidate passed. For closed task types this is a plain
   * score threshold the CALLER computes from the candidate's answers (this
   * module never sees raw answers, only the outcome). For open task types
   * this comes from the AI grading pipeline (the grade-exam edge function):
   * a rubric+modelAnswer-grounded band compared against `band` — never a
   * freeform guess, per the retired "examiner v1" lesson (a hallucinated
   * band is worse than none — see EALCH-MASTER-BUILD.md's Phase 0 note).
   */
  passed: boolean;
  /** Open task types only. Always a PRACTICE ESTIMATE, never an equated
   *  score — see the "parallel, not equated" requirement. */
  aiGrade?: { band: ScoreBand; feedback: string };
  /**
   * Whether this was sat under exam conditions or practice conditions.
   *
   * Absent on results logged before the mode existed, which is why readers go
   * through `isScored()` rather than testing the field: an old result is
   * treated as a real sitting, because that is what it was — there was no
   * other kind at the time.
   */
  mode?: ExamMode;
  /**
   * A listening task where at least one document produced no sound at all.
   *
   * Distinct from `mode`, and deliberately a second field rather than reusing
   * it: a practice attempt is one the candidate CHOSE not to have scored, and
   * this is one WE could not score. Both are excluded from every number, but
   * the report has to be able to say which happened, because one of them is
   * our fault and reads as a broken app if it is presented as a bad result.
   */
  audioFailed?: boolean;
  /**
   * An open task submitted with nothing in it — no transcript, no text.
   *
   * A third state, and it has to be its own, because the two that existed
   * described the wrong thing. An unanswered task carries no `aiGrade`, which
   * is indistinguishable from one the grader could not reach, so the report
   * told a candidate who wrote nothing "grading unavailable, your response was
   * saved, try again later" — our failure, apologetically, with an invitation
   * to retry something that was never submitted.
   *
   * That is exactly the substitution rule 3 forbids, running the other way:
   * absence of evidence reported as our fault rather than theirs. The grader is
   * not even called on this path, so blaming it was never right.
   */
  noAnswer?: boolean;
  /**
   * Closed tasks only: questions right, out of questions asked.
   *
   * `passed` alone is not enough for a report. A listening épreuve is forty
   * questions, and a candidate wants to see 31/40, not "1 of 1 tasks passed" —
   * and the section's scoring map is indexed by QUESTIONS, so without these the
   * raw count handed to it is in the wrong unit entirely.
   *
   * Absent on open tasks (they have no raw count, which is why writing and
   * speaking report a band instead) and on results logged before this existed.
   */
  correct?: number;
  askedTotal?: number;
  /**
   * The same attempt in POINTS, for a format that does not weight every
   * question equally (QcmItem.points). Absent on every format that does, where
   * it would duplicate the pair above.
   *
   * Recorded at write time rather than recomputed later, because recomputing
   * needs the task as it was authored and an author may re-weight a question
   * after a candidate has sat it. The counts answer "how many did they get";
   * these answer "what did they score", and on DELF B2 those are different
   * questions with different answers.
   */
  points?: number;
  pointsTotal?: number;
};

/**
 * Does this result count toward a reported score?
 *
 * A practice attempt has a pausable clock, replayable audio and a visible
 * transcript. It is a good way to learn the paper and no evidence at all of
 * what the candidate can do under exam conditions, so it must never feed a
 * band, an NCLC estimate, or a "you are ready" judgement. Nor may a listening
 * task whose audio never played. The report shows both, clearly marked and
 * distinguished, and excludes both from every number.
 */
export function isScored(r: Pick<ExamResult, 'mode' | 'audioFailed'>): boolean {
  // Two different reasons, one answer. A listening result where nothing played
  // is not evidence the candidate misunderstood anything — it is evidence the
  // audio did not arrive — so counting it would report our failure as theirs.
  return r.mode !== 'practice' && !r.audioFailed;
}

export type ExamResultInput = Omit<ExamResult, 'date' | 'id'>;

/** A stable per-result id. Same non-cryptographic contract as mintAttemptId —
 *  see the note there for why. */
export function mintExamResultId(): string {
  return `exr-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Which task types are graded rather than marked.
 *
 * DERIVED from the schema's list, never restated. This was a hand-written copy
 * of those five names, and it drifted: `po_debate` was added to the schema when
 * the DELF débat shipped and never added here, so for one whole task type this
 * module answered the opposite of what the schema said.
 *
 * Three things broke, quietly, and all three read as the débat working. It was
 * decomposed for the SRS down the closed-task branch; a failed débat never
 * reached dueExamSkills, so nothing sent the candidate to a prep lesson; and an
 * UNGRADED débat reported 'scored' instead of 'not-graded' — presenting an
 * attempt the grader never reached as a clean sitting, which is the exact
 * substitution rule 3 in nclc.logic.ts exists to forbid.
 *
 * Written as a Set over the schema's array so membership stays O(1) and the two
 * can no longer disagree.
 */
const OPEN_EXAM_TASK_TYPES: ReadonlySet<ExamTaskType> = new Set(OPEN_TASK_TYPES);

/**
 * A missed CLOSED task decomposes into its targetItemIds, each becoming a
 * synthetic 'recognise'-modality attempt so the SRS brings it back — see the
 * module note above. Decomposition is TASK-level, not per-question: an
 * ExamTask's targetItemIds need not correspond 1:1 with its QcmItems (one
 * listening dialogue can test several atoms across several questions), so
 * "the task was missed" is the only honest signal this function has, per the
 * master-build doc's own "a missed CO/CE task enqueues those atoms" wording.
 *
 * Each synthetic attempt has empty expected/heard and verdict 'off': nothing
 * was actually asked of any one atom in isolation, the miss was on the whole
 * task, so this is a fresh due-flag rather than a fabricated graded response.
 * A passed task, or an open task type, has nothing to decompose.
 */
export function decomposeExamMiss(task: ExamTask): AttemptInput[] {
  if (OPEN_EXAM_TASK_TYPES.has(task.taskType)) return [];
  return (task.targetItemIds ?? []).map((itemId) => ({
    activity: 'exam-review' as const,
    itemId,
    expected: '',
    heard: '',
    score: 0,
    verdict: 'off' as const,
    correct: false,
    modality: 'recognise' as const,
  }));
}

export type DueExamSkill = {
  format: ExamFormat;
  skill: ExamSkill;
  band: ScoreBand;
  /** The prep lesson that remediates this skill at this band, resolved via
   *  Lesson.skill — or null when none exists. Callers MUST treat null as a
   *  real problem, not a value to silently drop: it means an open exam task
   *  was authored (or shipped) at a band with no upstream teaching content,
   *  which the "content before engine" gating rule exists to prevent before
   *  publish. Finding it here, at runtime, is the rule's last line of
   *  defense, not its normal path. */
  prepLessonId: string | null;
};

/**
 * OPEN misses, grouped by (format, skill, band) — the granularity a bad essay
 * or a shaky monologue can actually be blamed at — each resolved to the real
 * lesson that remediates it. See the module note above for why this is a
 * lesson-level link (Lesson.skill) and not an item-level one like the closed
 * side: there is no atom to enqueue for an open response.
 */
export function dueExamSkills(results: ExamResult[], lessons: Lesson[]): DueExamSkill[] {
  const seen = new Map<string, DueExamSkill>();
  for (const r of results) {
    if (!OPEN_EXAM_TASK_TYPES.has(r.taskType) || r.passed) continue;
    const key = `${r.format}::${r.skill}::${r.band}`;
    if (seen.has(key)) continue;
    const lesson = lessons.find((l) => l.skill === r.skill && l.level === r.band);
    seen.set(key, { format: r.format, skill: r.skill, band: r.band, prepLessonId: lesson?.id ?? null });
  }
  return [...seen.values()];
}

/* ─── Where a candidate has got to in a paper ────────────────────────────── */

// The paper screen is a RESUME point, not a gate. A TEF Canada sitting is two
// hours fifty-five minutes and nobody finishes that on a phone in one go on
// their first attempt, so a candidate does listening on the bus and writing
// that evening. Nothing here locks a later épreuve behind an earlier one:
// "Sitting mode" exists for people who want the unbroken run, and outside it
// the four sections are four doors.
//
// Like streak and weaknesses, this persists nothing of its own. It is a fold
// over the results already logged, so wiping the log honestly resets it and
// sync restoring the log restores it.

export type SectionStatus = 'available' | 'in-progress' | 'done';

export type SectionProgress = {
  status: SectionStatus;
  /** Tasks in this section with a logged result for THIS paper. */
  answered: number;
  total: number;
  /**
   * At least one of those results was a practice run.
   *
   * Kept per-section rather than per-paper because that is the granularity a
   * candidate actually mixes at: doing the reading under exam conditions and
   * then replaying the listening in practice mode is a normal, sensible thing
   * to do, and the report has to be able to say which of the two numbers means
   * something.
   */
  practice: boolean;
};

/** One épreuve's state, folded from the results log. */
export function sectionProgress(taskIds: string[], results: ExamResult[], paperId: string): SectionProgress {
  const ids = new Set(taskIds);
  const total = ids.size;
  const mine = results.filter((r) => r.paperId === paperId && ids.has(r.taskId));
  // By task, not by result: a retried task logs twice and must still count once,
  // or a section of three tasks can report four answered and never reach 'done'.
  const answeredIds = new Set(mine.map((r) => r.taskId));
  const answered = answeredIds.size;
  const status: SectionStatus = total > 0 && answered >= total ? 'done' : answered > 0 ? 'in-progress' : 'available';
  return { status, answered, total, practice: mine.some((r) => !isScored(r)) };
}

/** Every épreuve of a paper, in sitting order. Structural section type, not a
 *  schema import: this file is a pure island (see the module note). */
export function paperProgress(
  sections: { skill: ExamSkill; taskIds: string[] }[],
  results: ExamResult[],
  paperId: string
): (SectionProgress & { skill: ExamSkill })[] {
  return sections.map((s) => ({ skill: s.skill, ...sectionProgress(s.taskIds, results, paperId) }));
}

/**
 * Why an épreuve has no score, decided from what was actually logged.
 *
 * The order of these checks is the whole function. A section can be several
 * things at once — sat in practice mode AND with a dead microphone — and the
 * candidate needs the reason that is most OURS, because that is the one they
 * can do nothing about and the one that reads as a broken app if we hide it.
 * So failures we caused outrank choices they made.
 *
 * Returns the status only; the arithmetic lives in nclc.logic.ts.
 */
export function sectionStatusFor(
  taskIds: string[],
  results: ExamResult[],
  paperId: string
): 'scored' | 'not-sat' | 'practice' | 'not-graded' | 'audio-failed' | 'not-answered' {
  const ids = new Set(taskIds);
  const mine = results.filter((r) => r.paperId === paperId && ids.has(r.taskId));
  if (mine.length === 0) return 'not-sat';

  // Ours first.
  if (mine.some((r) => r.audioFailed)) return 'audio-failed';
  // An open task with no aiGrade was attempted and could not be graded. Closed
  // tasks never carry one, so only open task types can report this.
  //
  // `noAnswer` is excluded here and checked below, because those two states
  // look identical in the log and mean opposite things: one is the grader
  // failing us, the other is the candidate submitting nothing. Ranked in that
  // order for the reason the note above gives — what is ours outranks what is
  // theirs, because it is the part they can do nothing about.
  if (mine.some((r) => OPEN_EXAM_TASK_TYPES.has(r.taskType) && !r.aiGrade && !r.noAnswer)) return 'not-graded';
  if (mine.some((r) => r.noAnswer)) return 'not-answered';
  // Theirs.
  if (mine.some((r) => r.mode === 'practice')) return 'practice';
  // Every task answered, or the section is only part-done and cannot be scored.
  return new Set(mine.map((r) => r.taskId)).size >= ids.size ? 'scored' : 'not-sat';
}

/**
 * What an épreuve scored, in the unit its scoring map is indexed by.
 *
 * Two units, because the two kinds of épreuve are marked differently and their
 * maps are written accordingly:
 *
 *   closed (CO, CE)   QUESTIONS right, out of questions asked. A listening map
 *                     runs 0..40 and a candidate is shown "31/40".
 *   open   (PE, PO)   TASKS at or above their target band, out of tasks. TEF's
 *                     EE and EO maps run 0..2 for exactly this reason; the
 *                     candidate is shown a band, not a fraction of an essay.
 *
 * This used to return null the moment a section held no closed task — which is
 * EVERY writing and speaking épreuve, on every format. So `sectionOutcome` bailed
 * on a null raw, PE and PO never reached a band, `paperOutcome` correctly
 * refused an overall it had no complete evidence for, and no paper in the app
 * could report a result: a candidate who sat a perfect TEF paper was told
 * "no overall estimate — missing: Expression écrite, Expression orale".
 *
 * The fallback below already computed the open unit correctly. It was simply
 * unreachable, 40 lines past a guard that returned first.
 */
export function sectionRaw(
  taskIds: string[],
  results: ExamResult[],
  paperId: string,
  /** taskId → band, for formats that weight by band. TCF's closed tasks are
   *  band-shaped (one task per band), so a task's own level IS the band of
   *  every question in it and no per-item record is needed. Omit on TEF, where
   *  one task spans a range and this would be a lie. */
  bandOf?: (taskId: string) => string | null | undefined
): { raw: number; total: number; byBand?: Record<string, number> } | null {
  const ids = new Set(taskIds);
  const mine = results.filter((r) => r.paperId === paperId && ids.has(r.taskId));
  // Nothing sat is still nothing to count. Distinct from "sat, but open", which
  // is the case this function used to conflate with it.
  if (mine.length === 0) return null;

  const closed = mine.filter((r) => !OPEN_EXAM_TASK_TYPES.has(r.taskType));
  // A MIXED épreuve still counts its closed tasks only — questions are the
  // finer evidence and its map is indexed by them. An épreuve of open tasks
  // alone counts the tasks, which is the only unit it has.
  const counted = closed.length > 0 ? closed : mine;

  // By task, not by result: a retried task must not count twice. Later wins.
  const byTask = new Map<string, ExamResult>();
  for (const r of counted) byTask.set(r.taskId, r);
  const rows = [...byTask.values()];

  // Sum QUESTIONS when the results carry them, which is the unit the section's
  // scoring map is indexed by. Results logged before `correct` existed fall
  // back to counting passed tasks — wrong unit, but it is what those rows
  // actually know, and inventing question counts for them would be worse.
  const haveCounts = rows.filter((r) => typeof r.correct === 'number' && typeof r.askedTotal === 'number');
  if (haveCounts.length === rows.length) {
    let byBand: Record<string, number> | undefined;
    if (bandOf) {
      byBand = {};
      for (const r of rows) {
        const band = bandOf(r.taskId);
        // A task whose band is unknown still counts in `raw`; it simply cannot
        // contribute to the profile. Dropping it from raw would understate the
        // candidate, and inventing a band would overstate them.
        if (band) byBand[band] = (byBand[band] ?? 0) + (r.correct ?? 0);
      }
    }
    // Report MARKS where the format has them, questions where it does not.
    // A DELF épreuve is out of 25 and its questions are worth 0.5 to 2.5, so
    // "14 of 20" is not a mark a candidate can compare to the 5/25 floor they
    // have to clear. Every row must carry the pair before it is used: mixing a
    // weighted row with an unweighted one would add points to question counts
    // and produce a total that is out of nothing at all.
    const weighted = rows.filter((r) => typeof r.points === 'number' && typeof r.pointsTotal === 'number');
    if (weighted.length === rows.length) {
      return {
        raw: rows.reduce((n, r) => n + (r.points ?? 0), 0),
        total: rows.reduce((n, r) => n + (r.pointsTotal ?? 0), 0),
        ...(byBand ? { byBand } : {}),
      };
    }
    return {
      raw: rows.reduce((n, r) => n + (r.correct ?? 0), 0),
      total: rows.reduce((n, r) => n + (r.askedTotal ?? 0), 0),
      ...(byBand ? { byBand } : {}),
    };
  }
  return { raw: rows.filter((r) => r.passed).length, total: rows.length };
}

/**
 * The graded bands in an épreuve, one per task, in the épreuve's own task order.
 *
 * `sectionRaw` answers "how many tasks met their target", which is the unit the
 * Canadian formats' ladders are indexed by. DELF asks a different question: its
 * épreuves are marked out of 25 and the mark has to come from HOW WELL the
 * candidate wrote or spoke, not from a count of pass/fail verdicts. A single
 * writing task is one bit through `passed` and a whole band through `aiGrade`,
 * and the difference between B1 and C1 work is the difference between failing
 * and comfortably passing the diploma.
 *
 * Open tasks only, because only they carry a band. Null — never an empty array —
 * when the épreuve holds no graded open task, so "nothing to read" stays
 * distinguishable from "graded, and every band was low".
 */
export function sectionBands(
  taskIds: string[],
  results: ExamResult[],
  paperId: string
): ScoreBand[] | null {
  const ids = new Set(taskIds);
  const mine = results.filter(
    (r) => r.paperId === paperId && ids.has(r.taskId) && OPEN_EXAM_TASK_TYPES.has(r.taskType) && r.aiGrade
  );
  if (mine.length === 0) return null;
  // By task, later wins — the same retry rule sectionRaw applies, for the same
  // reason: a re-sat task is one performance, not two.
  const byTask = new Map<string, ExamResult>();
  for (const r of mine) byTask.set(r.taskId, r);
  // Task order, not log order, so a two-phase épreuve reads in the order it was
  // actually sat rather than the order the grader happened to return.
  return taskIds.map((id) => byTask.get(id)?.aiGrade?.band).filter((b): b is ScoreBand => !!b);
}

/* ─── The Speak path — progress as a view over the attempt log ───────────── */

// The trail persists NOTHING of its own. Which stations are cleared, which
// block the learner is on, where the avatar stands — all of it is a fold over
// `attempts`, exactly like streak and weaknesses. Wiping the log honestly
// resets the trail; sync restoring the log restores the trail.
//
// Structural type, not a schema import: this file is a pure island (see the
// module note), and the fold only needs id + blocks of itemIds.

export type SpeakStageLike = { id: string; blocks: { itemIds: string[] }[] };

/** A card passes on a `correct` speak attempt — verdict 'good'. 'close' stays
 *  useful signal (it logs, it schedules) but is not a pass, matching the
 *  AttemptEntry contract that a close utterance can be correct === false. */
export function speakPassedIds(attempts: AttemptEntry[]): Set<string> {
  const out = new Set<string>();
  for (const a of attempts) {
    if (a.activity === 'speak' && a.correct) out.add(a.itemId);
  }
  return out;
}

/** A block clears at 70%, not 100%: over ~33 recognizer-scored cards a few
 *  will always mis-transcribe through no fault of the learner, and a station
 *  that can be blocked by STT noise punishes the wrong party. */
export const SPEAK_BLOCK_PASS = 0.7;

/** The station's CORE is its first blocks (they arrive difficulty-sorted, so
 *  the core is the easiest ~165 sentences). Clearing the core clears the
 *  station and moves the avatar; remaining blocks stay as optional depth —
 *  how a 900-item station stays finishable without capping its content. */
export const SPEAK_CORE_BLOCKS = 5;

export function speakBlockCleared(block: { itemIds: string[] }, passed: Set<string>): boolean {
  if (!block.itemIds.length) return false;
  let hit = 0;
  for (const id of block.itemIds) if (passed.has(id)) hit += 1;
  return hit / block.itemIds.length >= SPEAK_BLOCK_PASS;
}

export type SpeakStageState = {
  /** Per-block cleared flags, in block order. */
  blocks: boolean[];
  /** Cleared blocks within the core span. */
  coreCleared: number;
  coreTotal: number;
  /** The station is complete: every core block cleared. */
  cleared: boolean;
  /** Passed cards across the whole station (incl. bonus blocks). */
  passedCount: number;
  totalCount: number;
};

export function speakStageState(stage: SpeakStageLike, passed: Set<string>): SpeakStageState {
  const blocks = stage.blocks.map((b) => speakBlockCleared(b, passed));
  const coreTotal = Math.min(SPEAK_CORE_BLOCKS, stage.blocks.length);
  const coreCleared = blocks.slice(0, coreTotal).filter(Boolean).length;
  let passedCount = 0;
  let totalCount = 0;
  for (const b of stage.blocks) {
    totalCount += b.itemIds.length;
    for (const id of b.itemIds) if (passed.has(id)) passedCount += 1;
  }
  return { blocks, coreCleared, coreTotal, cleared: coreCleared === coreTotal, passedCount, totalCount };
}

/** Where the avatar stands: the first station whose core is not cleared, or
 *  the last station once everything is (the trail has an end, not an
 *  off-by-one past it). Stages must already be in walk order (speakStages). */
export function speakPathPosition(stages: SpeakStageLike[], passed: Set<string>): number {
  for (let i = 0; i < stages.length; i += 1) {
    if (!speakStageState(stages[i], passed).cleared) return i;
  }
  return Math.max(0, stages.length - 1);
}

/** The block to offer next inside a station: the first uncleared core block,
 *  else the first uncleared bonus block, else the last block (all cleared). */
export function speakNextBlock(stage: SpeakStageLike, passed: Set<string>): number {
  const st = speakStageState(stage, passed);
  const ix = st.blocks.findIndex((cleared) => !cleared);
  return ix === -1 ? Math.max(0, stage.blocks.length - 1) : ix;
}

/* ─── Den mission progress (overview flow, spec 2026-07-30) ─────────────── */

/** Per-lesson mission record: which FULL-section indexes are done, and the
 *  lesson-local XP earned. `v` mirrors Lesson.version — a re-authored lesson
 *  (sections added/reordered) starts a fresh record rather than mis-checking
 *  rows by stale index. */
export type LessonMissionRec = { v: number; done: number[]; xp: number };

/** Flat award per first-time mission completion. Lesson-local; there is no
 *  global XP economy yet (spec: out of scope). */
export const MISSION_XP = 5;

/** The single write path for mission completion. Pure and idempotent: marking
 *  a done mission again returns the input unchanged (same reference), so the
 *  store can cheaply skip a set(). */
export function markMission(rec: LessonMissionRec | undefined, version: number, sectionIx: number): LessonMissionRec {
  const base: LessonMissionRec = rec && rec.v === version ? rec : { v: version, done: [], xp: 0 };
  if (base.done.includes(sectionIx)) return base;
  return { v: version, done: [...base.done, sectionIx], xp: base.xp + MISSION_XP };
}
