// Progress engine guard. Runs on plain Node (types are stripped natively):
//   npm test
// progress.logic.ts imports nothing from react-native, zustand or AsyncStorage,
// which is the whole reason it can be tested at all.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  applyGrade,
  attemptsToday,
  cardKey,
  dueCards,
  gradeAttempt,
  goalTarget,
  isMastered,
  isSchedulable,
  itemsPracticed,
  localDay,
  masteredItems,
  migrateProgressToV2,
  minutesToday,
  mondayIndex,
  resumeIsFresh,
  RESUME_MAX_AGE_DAYS,
  recognitionStable,
  reviewDueCount,
  shiftDay,
  topWeaknesses,
  srsCards,
  statsByItem,
  streak,
  upcomingCards,
  weakestItems,
  weekDots,
  type AttemptEntry,
  type ErrorEvent,
  type ResumeState,
  type SessionEntry,
} from './progress.logic.ts';

const TODAY = '2026-07-14'; // a Tuesday
const day = (delta: number) => shiftDay(TODAY, delta);

/** A session on the day `delta` days from TODAY. */
const s = (delta: number, minutes = 5, items = 1): SessionEntry => ({
  date: day(delta),
  activity: 'flashcards',
  minutes,
  items,
});

// ── localDay ──

test('localDay reads the local calendar day, not the UTC one', () => {
  // 2026-07-14 23:30 local is already 2026-07-15 in UTC east of Greenwich and
  // still 2026-07-14 west of it. The local day is what the user practised on.
  const d = new Date(2026, 6, 14, 23, 30);
  strictEqual(localDay(d), '2026-07-14');

  // ...and 00:30 local is the new day even where UTC still says yesterday.
  strictEqual(localDay(new Date(2026, 6, 15, 0, 30)), '2026-07-15');
});

test('localDay is stable across a timezone boundary', () => {
  // The same wall-clock instant, read in two different offsets, is what breaks
  // a UTC-derived streak. Constructing local Dates either side of midnight must
  // yield adjacent days with no repeat and no skip.
  const before = localDay(new Date(2026, 6, 14, 23, 59, 59));
  const after = localDay(new Date(2026, 6, 15, 0, 0, 1));
  strictEqual(before, '2026-07-14');
  strictEqual(after, '2026-07-15');
  strictEqual(shiftDay(before, 1), after);
});

test('shiftDay crosses a DST boundary without losing or repeating a day', () => {
  // Late March / late October is where local-time arithmetic drifts by an hour
  // and lands back on the same date. Walking a fortnight must visit 14 days.
  const seen = new Set<string>();
  let d = '2026-03-22';
  for (let i = 0; i < 14; i++) {
    seen.add(d);
    d = shiftDay(d, 1);
  }
  strictEqual(seen.size, 14);
  strictEqual(d, '2026-04-05');
  strictEqual(shiftDay('2026-11-01', -1), '2026-10-31');
});

test('mondayIndex is Monday-first, matching T.dayLetters', () => {
  strictEqual(mondayIndex('2026-07-13'), 0); // Monday
  strictEqual(mondayIndex('2026-07-14'), 1); // Tuesday
  strictEqual(mondayIndex('2026-07-19'), 6); // Sunday
});

// ── goalTarget ──

test('goalTarget parses the onboarding pace string', () => {
  strictEqual(goalTarget('10 min'), 10);
  strictEqual(goalTarget('5 min'), 5);
  strictEqual(goalTarget('30 min'), 30);
});

test('goalTarget falls back to 10 rather than producing NaN', () => {
  strictEqual(goalTarget(''), 10);
  strictEqual(goalTarget('lots'), 10);
  strictEqual(goalTarget('0 min'), 10);
  strictEqual(goalTarget(undefined as unknown as string), 10);
});

// ── the empty state ──

test('no sessions: streak 0, minutes 0, every dot false', () => {
  strictEqual(minutesToday([], TODAY), 0);
  deepStrictEqual(weekDots([], TODAY), [false, false, false, false, false, false, false]);

  const st = streak([], TODAY, 1);
  strictEqual(st.days, 0);
  strictEqual(st.freezeUsed, false);
  strictEqual(st.frozenDay, null);
  // The freeze is untouched: there was no streak to protect.
  strictEqual(st.freezesLeft, 1);
});

// ── minutes & dots ──

test('minutesToday sums today only', () => {
  const log = [s(0, 4), s(0, 7), s(-1, 30), s(-2, 12)];
  strictEqual(minutesToday(log, TODAY), 11);
});

test('weekDots lights the days practised in the current week, Monday-first', () => {
  // TODAY is Tuesday, so the week runs Mon 13th → Sun 19th.
  const log = [s(-1), s(0)]; // Monday and Tuesday
  deepStrictEqual(weekDots(log, TODAY), [true, true, false, false, false, false, false]);
});

test('weekDots ignores sessions from last week', () => {
  deepStrictEqual(weekDots([s(-7), s(-8)], TODAY), [false, false, false, false, false, false, false]);
});

// ── streak ──

test('day one: a single session today is a streak of 1', () => {
  strictEqual(streak([s(0)], TODAY, 1).days, 1);
});

test('a clean five-day run counts 5', () => {
  const log = [s(0), s(-1), s(-2), s(-3), s(-4)];
  const st = streak(log, TODAY, 1);
  strictEqual(st.days, 5);
  strictEqual(st.freezeUsed, false);
  strictEqual(st.freezesLeft, 1);
});

test('several sessions on one day still count that day once', () => {
  strictEqual(streak([s(0), s(0), s(0), s(-1)], TODAY, 1).days, 2);
});

test('practised yesterday but not yet today: the streak still stands', () => {
  // Today is in progress. A streak of N ends today OR yesterday, so it does not
  // appear to reset every midnight.
  const st = streak([s(-1), s(-2), s(-3)], TODAY, 1);
  strictEqual(st.days, 3);
  strictEqual(st.freezeUsed, false);
  // An empty today is not a missed day and must not spend a freeze.
  strictEqual(st.freezesLeft, 1);
});

test('last practised two days ago: the streak is stale and a freeze bridges it', () => {
  const st = streak([s(-2), s(-3)], TODAY, 1);
  strictEqual(st.days, 2);
  strictEqual(st.frozenDay, day(-1));
  strictEqual(st.freezesLeft, 0);
});

test('last practised two days ago with no freeze: the streak is gone', () => {
  strictEqual(streak([s(-2), s(-3)], TODAY, 0).days, 0);
});

test('one gap day with a freeze: bridged, freeze consumed, frozenDay names the gap', () => {
  // Practised today, and on days −2 and −3. Day −1 was missed.
  const st = streak([s(0), s(-2), s(-3)], TODAY, 1);
  strictEqual(st.days, 3);
  strictEqual(st.freezeUsed, true);
  strictEqual(st.frozenDay, day(-1));
  strictEqual(st.freezesLeft, 0);
});

test('one gap day with no freeze: the streak resets to the run since the gap', () => {
  const st = streak([s(0), s(-2), s(-3)], TODAY, 0);
  strictEqual(st.days, 1);
  strictEqual(st.freezeUsed, false);
  strictEqual(st.frozenDay, null);
});

test('two consecutive gap days: the streak resets even with freezes in hand', () => {
  // A freeze bridges one day, not two. Days −1 and −2 are both missing.
  const st = streak([s(0), s(-3), s(-4)], TODAY, 3);
  strictEqual(st.days, 1);
  strictEqual(st.freezeUsed, false);
  strictEqual(st.freezesLeft, 3);
});

test('two freezes bridge two separate gaps, but never two days in a row', () => {
  // Missing: −1 and −3. Practised: 0, −2, −4.
  const st = streak([s(0), s(-2), s(-4)], TODAY, 2);
  strictEqual(st.days, 3);
  strictEqual(st.freezeUsed, true);
  // frozenDay names the most recent bridged day — the one worth telling the
  // user about.
  strictEqual(st.frozenDay, day(-1));
  strictEqual(st.freezesLeft, 0);
});

test('a freeze is not charged for a gap that protects nothing', () => {
  // A lone session today. The day before it is empty, but there is no older run
  // behind that gap, so nothing was protected and nothing is spent.
  const st = streak([s(0)], TODAY, 1);
  strictEqual(st.days, 1);
  strictEqual(st.freezeUsed, false);
  strictEqual(st.frozenDay, null);
  strictEqual(st.freezesLeft, 1);
});

test('a log full of future-dated junk cannot inflate the streak', () => {
  const st = streak([s(3), s(2), s(1)], TODAY, 1);
  strictEqual(st.days, 0);
});

// ── the attempt log ──

/** An attempt on `id`, `delta` days from TODAY. Defaults to the `recognise`
 *  modality so the existing one-card-per-item tests keep their meaning; the
 *  modality tests pass it explicitly. */
const a = (
  id: string,
  correct: boolean,
  delta = 0,
  verdict: AttemptEntry['verdict'] = correct ? 'good' : 'off',
  modality: AttemptEntry['modality'] = 'recognise'
): AttemptEntry => ({
  date: day(delta),
  activity: 'voiceflash',
  itemId: id,
  expected: id,
  heard: correct ? id : '',
  score: correct ? 1 : 0,
  verdict,
  correct,
  modality,
});

test('statsByItem folds attempts per item, last attempt winning the last* fields', () => {
  const stats = statsByItem([
    a('fr.a1.cafe.001', false, -2, 'off'),
    a('fr.a1.cafe.001', true, -1, 'close'),
    a('fr.a1.cafe.001', true, 0, 'good'),
    a('fr.a1.pain.002', false, 0, 'off'),
  ]);

  const cafe = stats.get('fr.a1.cafe.001');
  strictEqual(cafe?.seen, 3);
  strictEqual(cafe?.correct, 2);
  strictEqual(cafe?.ratio, 2 / 3);
  // The most recent attempt (today, good) sets the standing.
  strictEqual(cafe?.lastVerdict, 'good');
  strictEqual(cafe?.lastCorrect, true);
  strictEqual(cafe?.lastDate, TODAY);
  // The last expected/heard are carried so a review list needs no corpus join.
  strictEqual(cafe?.lastExpected, 'fr.a1.cafe.001');
  strictEqual(cafe?.lastHeard, 'fr.a1.cafe.001');

  const pain = stats.get('fr.a1.pain.002');
  strictEqual(pain?.seen, 1);
  strictEqual(pain?.correct, 0);
  strictEqual(pain?.ratio, 0);
});

test('weakestItems ranks the lowest ratio first', () => {
  const ranked = weakestItems([
    a('never', false),
    a('never', false),
    a('always', true),
    a('always', true),
    a('half', true),
    a('half', false),
  ]);
  deepStrictEqual(
    ranked.map((r) => r.itemId),
    ['never', 'half', 'always']
  );
});

test('weakestItems breaks a tie by who was missed most recently', () => {
  // Two items each seen twice, one right one wrong — same 0.5 ratio. The one
  // whose LAST attempt was a miss should come first, and among misses the more
  // recent one first.
  const ranked = weakestItems([
    a('old-miss', true, -3),
    a('old-miss', false, -2), // last = miss, 2 days ago
    a('new-miss', true, -1),
    a('new-miss', false, 0), // last = miss, today
    a('recovered', false, -1),
    a('recovered', true, 0), // last = correct
  ]);
  deepStrictEqual(
    ranked.map((r) => r.itemId),
    ['new-miss', 'old-miss', 'recovered']
  );
});

test('weakestItems honours the limit', () => {
  const attempts = [a('a', false), a('b', false), a('c', false)];
  strictEqual(weakestItems(attempts, 2).length, 2);
  strictEqual(weakestItems(attempts, 0).length, 0);
});

test('itemsPracticed counts only items met correctly at least once', () => {
  const met = itemsPracticed([
    a('seen-right', true),
    a('seen-wrong', false),
    a('seen-wrong', false),
    a('mixed', false),
    a('mixed', true),
  ]);
  deepStrictEqual([...met].sort(), ['mixed', 'seen-right']);
});

test('attemptsToday counts only today', () => {
  strictEqual(
    attemptsToday([a('x', true, 0), a('y', false, 0), a('z', true, -1)], TODAY),
    2
  );
});

test('the attempt aggregators treat an empty log as empty, never a crash', () => {
  strictEqual(statsByItem([]).size, 0);
  deepStrictEqual(weakestItems([]), []);
  strictEqual(itemsPracticed([]).size, 0);
  strictEqual(attemptsToday([], TODAY), 0);
});

// ── the scheduler (SRS) ──

test('gradeAttempt maps correctness and verdict to a grade', () => {
  strictEqual(gradeAttempt(a('x', true, 0, 'good')), 2);
  strictEqual(gradeAttempt(a('x', true, 0, 'close')), 1);
  strictEqual(gradeAttempt(a('x', false, 0, 'off')), 0);
  // A miss relearns no matter what verdict the recognizer reported.
  strictEqual(gradeAttempt(a('x', false, 0, 'close')), 0);
});

test('applyGrade walks the 1 → 3 → x·ease ladder, and a miss resets it', () => {
  const fresh = { reps: 0, ease: 2.5, intervalDays: 0 };
  const one = applyGrade(fresh, 2);
  deepStrictEqual([one.reps, one.intervalDays], [1, 1]); // first clean pass: 1 day
  const two = applyGrade(one, 2);
  deepStrictEqual([two.reps, two.intervalDays], [2, 3]); // second: 3 days
  const three = applyGrade(two, 2);
  strictEqual(three.reps, 3);
  strictEqual(three.intervalDays, Math.round(3 * two.ease)); // then interval × ease

  // A miss wipes reps and erodes ease. `three` has interval 8 (a review-stage
  // card), so under the softer lapse it falls to a 1-day relearning step, not 0.
  const missed = applyGrade(three, 0);
  strictEqual(missed.reps, 0);
  strictEqual(missed.intervalDays, 1);
  ok(missed.ease < three.ease);
});

test('softer lapse: the drop is floored by how stable the card was', () => {
  const erode = (ease: number) => Math.max(1.3, ease - 0.2);
  // A young card (interval under a week) still relearns from 0 — no stability to
  // protect, and it should come straight back.
  deepStrictEqual(applyGrade({ reps: 2, ease: 2.5, intervalDays: 3 }, 0).intervalDays, 0);
  deepStrictEqual(applyGrade({ reps: 3, ease: 2.5, intervalDays: 6 }, 0).intervalDays, 0);
  // A review-stage card (a week or more) drops to a 1-day step.
  strictEqual(applyGrade({ reps: 4, ease: 2.5, intervalDays: 12 }, 0).intervalDays, 1);
  // A mature card (three weeks or more) drops to a 2-day step — a slip, not a
  // total loss, and it does not slam back to "due right now".
  strictEqual(applyGrade({ reps: 6, ease: 2.5, intervalDays: 40 }, 0).intervalDays, 2);
  // Reps still reset and ease still erodes at every tier — relearning is real.
  const m = applyGrade({ reps: 6, ease: 2.5, intervalDays: 40 }, 0);
  strictEqual(m.reps, 0);
  strictEqual(m.ease, erode(2.5));
});

test('srsCards schedules a learned item forward, an unseen item not at all', () => {
  // One clean pass yesterday → interval 1 → due today.
  const cards = srsCards([a('fr.a1.cafe.001', true, -1, 'good')]);
  const c = cards.get(cardKey('fr.a1.cafe.001', 'recognise'));
  strictEqual(c?.intervalDays, 1);
  strictEqual(c?.dueDay, TODAY);
  // An item never attempted has no card.
  strictEqual(cards.get(cardKey('fr.a1.cafe.099', 'recognise')), undefined);
});

test('dueCards is the queue: overdue and due-now in, freshly-passed and future out', () => {
  const log = [
    a('fr.a1.cafe.001', false, -1, 'off'), // interval 0 → due day(-1), overdue
    a('fr.a1.cafe.002', true, -1, 'good'), // interval 1 → due TODAY
    a('fr.a1.cafe.003', true, 0, 'good'), // interval 1 → due tomorrow, NOT today
    a('fr.a1.cafe.004', true, -3, 'good'),
    a('fr.a1.cafe.004', true, -2, 'good'), // reps 2 → interval 3 → due day(+1)
  ];
  const due = dueCards(log, TODAY);
  // Most overdue first: cafe.001 (day-1) then cafe.002 (TODAY).
  deepStrictEqual(due.map((c) => c.itemId), ['fr.a1.cafe.001', 'fr.a1.cafe.002']);
  strictEqual(reviewDueCount(log, TODAY), 2);

  const up = upcomingCards(log, TODAY);
  // cafe.003 (tomorrow) and cafe.004 (tomorrow) are the not-yet-due cards.
  deepStrictEqual(up.map((c) => c.itemId).sort(), ['fr.a1.cafe.003', 'fr.a1.cafe.004']);
});

test('conversation turns reach the report but never the SRS card deck', () => {
  // A missed roleplay turn: it must show up as weak (report), but must NOT
  // become an SRS card — a dialogue line has no recall-card form.
  const log: AttemptEntry[] = [
    {
      date: TODAY,
      activity: 'roleplay',
      itemId: 'sc.a1.marche.001.t0',
      expected: 'la monnaie',
      heard: 'money',
      score: 0.2,
      verdict: 'off',
      correct: false,
      modality: 'produce',
    },
    a('fr.a1.cafe.001', false, 0, 'off'), // a real recall miss
  ];
  // The scheduler ignores the roleplay turn, schedules only the corpus item.
  deepStrictEqual([...srsCards(log).keys()], [cardKey('fr.a1.cafe.001', 'recognise')]);
  strictEqual(reviewDueCount(log, TODAY), 1);
  // The report's weakest list includes BOTH.
  deepStrictEqual(
    weakestItems(log).map((s) => s.itemId).sort(),
    ['fr.a1.cafe.001', 'sc.a1.marche.001.t0']
  );
});

test('the scheduler treats an empty log as an empty queue', () => {
  strictEqual(srsCards([]).size, 0);
  deepStrictEqual(dueCards([], TODAY), []);
  strictEqual(reviewDueCount([], TODAY), 0);
  deepStrictEqual(upcomingCards([], TODAY), []);
});

// ── resumeIsFresh ──

const resumeAt = (delta: number): ResumeState => ({
  route: '/lesson?key=sons3',
  title: 'Les voyelles nasales',
  activity: 'lesson',
  at: day(delta),
});

test('no resume is never fresh', () => {
  strictEqual(resumeIsFresh(null, TODAY), false);
});

test('a resume started today is fresh', () => {
  strictEqual(resumeIsFresh(resumeAt(0), TODAY), true);
});

test('a resume is fresh right up to the age limit and stale one day past it', () => {
  strictEqual(resumeIsFresh(resumeAt(-RESUME_MAX_AGE_DAYS), TODAY), true);
  strictEqual(resumeIsFresh(resumeAt(-(RESUME_MAX_AGE_DAYS + 1)), TODAY), false);
});

test('a resume stamped in the future (clock skew) is not treated as fresh', () => {
  strictEqual(resumeIsFresh(resumeAt(1), TODAY), false);
});

// ── topWeaknesses ──

const err = (skill: ErrorEvent['skill'], delta: number): ErrorEvent => ({
  date: day(delta),
  skill,
  source: 'lesson',
});

test('no errors: no weaknesses, never a fabricated one', () => {
  deepStrictEqual(topWeaknesses([], TODAY), []);
});

test('weaknesses rank most-missed first with real counts', () => {
  const errors = [err('nasales', 0), err('nasales', -1), err('liaison', 0), err('nasales', -2), err('liaison', -1)];
  deepStrictEqual(topWeaknesses(errors, TODAY), [
    { skill: 'nasales', count: 3 },
    { skill: 'liaison', count: 2 },
  ]);
});

test('a tie breaks on skill name so the order is stable', () => {
  deepStrictEqual(topWeaknesses([err('nasales', 0), err('genre', 0)], TODAY), [
    { skill: 'genre', count: 1 },
    { skill: 'nasales', count: 1 },
  ]);
});

test('only the trailing window counts: a slip from last week is gone', () => {
  const errors = [err('liaison', 0), err('nasales', -6), err('genre', -7), err('genre', -30)];
  // -7 and -30 fall outside the 7-day window (age 0..6); only liaison and nasales remain.
  deepStrictEqual(topWeaknesses(errors, TODAY), [
    { skill: 'liaison', count: 1 },
    { skill: 'nasales', count: 1 },
  ]);
});

test('the ranking is capped at the limit', () => {
  const errors = [err('liaison', 0), err('liaison', 0), err('nasales', 0), err('genre', 0), err('register', 0)];
  strictEqual(topWeaknesses(errors, TODAY, 7, 3).length, 3);
});

// ── The v1 → v2 persist migration (guardrail G2) ─────────────────────────────
//
// This is the app's first migration that reaches INSIDE an array, and the reason
// it exists is that getting it wrong is silent: zustand's shallow merge heals a
// missing top-level key for free, so every prior version needed no migrate and
// nobody was trained to expect one. An attempt without a modality does not throw;
// it folds into an undefined-keyed card, and the learner just finds their history
// quietly wrong.

const v1Attempt = (itemId: string, extra: Record<string, unknown> = {}) => ({
  date: '2026-07-01',
  activity: 'flashcards',
  itemId,
  expected: 'le café',
  heard: '',
  score: 1,
  verdict: 'good',
  correct: true,
  ...extra,
});

test('migrate v1→v2 gives every legacy attempt an honest modality', () => {
  // 'recognise' is not a convenient default, it is a true one: every drill that
  // existed when these were written asked for recall of a word shown.
  const out = migrateProgressToV2({
    sessions: [{ date: '2026-07-01' }],
    attempts: [v1Attempt('fr.a1.cafe.001'), v1Attempt('fr.a1.cafe.002')],
    errors: [],
    resume: null,
  });
  strictEqual(out.attempts.length, 2);
  ok(out.attempts.every((a) => a.modality === 'recognise'));
});

test('migrate preserves everything it does not own', () => {
  const resume = { route: '/den', at: 1 };
  const out = migrateProgressToV2({
    sessions: [{ date: '2026-07-01' }, { date: '2026-07-02' }],
    attempts: [v1Attempt('fr.a1.cafe.001')],
    errors: [{ date: '2026-07-01', skill: 'liaison' }],
    resume,
  });
  strictEqual(out.sessions.length, 2, 'session history must survive: it drives the streak');
  strictEqual(out.errors.length, 1);
  deepStrictEqual(out.resume, resume);
});

test('migrate is idempotent and never downgrades a real modality', () => {
  // Re-running must not rewrite 'produce' back to 'recognise' — that would erase
  // earned production history and hand the learner producer cards they never earned.
  const once = migrateProgressToV2({
    sessions: [],
    attempts: [v1Attempt('fr.a1.cafe.001', { modality: 'produce' }), v1Attempt('fr.a1.cafe.002')],
    errors: [],
    resume: null,
  });
  const twice = migrateProgressToV2(once);
  deepStrictEqual(twice.attempts.map((a) => a.modality), ['produce', 'recognise']);
  deepStrictEqual(twice, once);
});

test('migrate coerces a nonsense modality rather than trusting it', () => {
  const out = migrateProgressToV2({
    sessions: [],
    attempts: [v1Attempt('fr.a1.cafe.001', { modality: 'telepathy' })],
    errors: [],
    resume: null,
  });
  strictEqual(out.attempts[0].modality, 'recognise');
});

test('migrate drops shapeless attempts instead of folding them', () => {
  const out = migrateProgressToV2({
    sessions: [],
    attempts: [v1Attempt('fr.a1.cafe.001'), null, 'nonsense', {}, { itemId: 'x' }],
    errors: [],
    resume: null,
  });
  strictEqual(out.attempts.length, 1, 'only the real attempt survives');
});

test('a corrupt blob migrates to clean empty, never to a thrown error', () => {
  // A launch that throws here is a learner who cannot open the app at all.
  for (const junk of [null, undefined, 'nope', 42, []]) {
    const out = migrateProgressToV2(junk);
    deepStrictEqual(out, { sessions: [], attempts: [], errors: [], resume: null });
  }
});

test('migrate tolerates a blob whose arrays are the wrong type', () => {
  const out = migrateProgressToV2({ sessions: 'no', attempts: 'no', errors: 'no', resume: undefined });
  deepStrictEqual(out, { sessions: [], attempts: [], errors: [], resume: null });
});

// ── modality-keyed cards + the schedulable predicate (CF-02) ─────────────────

test('one item drilled in two modalities becomes two independent cards', () => {
  // Recognise it five times, produce it once. Different memories, different
  // intervals: the recognise card is far ahead, the produce card just started.
  const log: AttemptEntry[] = [
    a('fr.a1.cafe.001', true, -10, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, -7, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, -3, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, 0, 'good', 'produce'),
  ];
  const cards = srsCards(log);
  strictEqual(cards.size, 2, 'one card per (item, modality), not per item');
  const rec = cards.get(cardKey('fr.a1.cafe.001', 'recognise'))!;
  const prod = cards.get(cardKey('fr.a1.cafe.001', 'produce'))!;
  strictEqual(rec.modality, 'recognise');
  strictEqual(prod.modality, 'produce');
  ok(rec.reps > prod.reps, 'the two modalities schedule independently');
  ok(rec.intervalDays > prod.intervalDays);
});

test('a miss in one modality does not disturb the sibling', () => {
  const cards = srsCards([
    a('fr.a1.cafe.001', true, -20, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, -14, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, -8, 'good', 'recognise'), // reps 3 → stable, unlocks producers
    a('fr.a1.cafe.001', true, -2, 'good', 'produce'),
    a('fr.a1.cafe.001', false, 0, 'off', 'produce'),
  ]);
  strictEqual(cards.get(cardKey('fr.a1.cafe.001', 'recognise'))!.reps, 3, 'recognise untouched');
  strictEqual(cards.get(cardKey('fr.a1.cafe.001', 'produce'))!.reps, 0, 'the produce miss relearns only itself');
});

test('a real corpus itemId is schedulable whatever surface produced it', () => {
  // The point of the predicate: a narration `produce` interaction (Phase 7) logs
  // a real item id under a non-drill activity, and it must schedule, where the
  // old activity allowlist would have recorded and silently dropped it. It still
  // has to earn its place through the recognise sibling, so recognition is here.
  const narration: AttemptEntry = {
    date: TODAY, activity: 'lesson', itemId: 'fr.a1.cafe.001',
    expected: 'le café', heard: 'le café', score: 1, verdict: 'good', correct: true, modality: 'produce',
  };
  ok(isSchedulable(narration), 'the predicate is about the id, not the surface');
  const cards = srsCards([
    a('fr.a1.cafe.001', true, -20, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, -14, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, -8, 'good', 'recognise'),
    narration,
  ]);
  ok(cards.has(cardKey('fr.a1.cafe.001', 'produce')));
  strictEqual(cards.get(cardKey('fr.a1.cafe.001', 'produce'))!.modality, 'produce');
});

test('a synthetic (non-corpus) itemId is never scheduled', () => {
  // A roleplay turn id is `${scenario}.t${ix}` — a real thing to log, but not a
  // word with a recall form, so it must not enter the queue.
  const turn: AttemptEntry = {
    date: TODAY, activity: 'roleplay', itemId: 'cafe.rp.t3',
    expected: 'bonjour', heard: 'bonjour', score: 1, verdict: 'good', correct: true, modality: 'produce',
  };
  ok(!isSchedulable(turn));
  strictEqual(srsCards([turn]).size, 0);
});

test('a produce narration attempt becomes a due card once recognition is stable', () => {
  // The acceptance criterion, stated honestly: a produce attempt on a real item,
  // whose recognise sibling has cleared the floor, shows up as a due produce card.
  const due = dueCards([
    a('fr.a1.cafe.005', true, -22, 'good', 'recognise'),
    a('fr.a1.cafe.005', true, -15, 'good', 'recognise'),
    a('fr.a1.cafe.005', true, -9, 'good', 'recognise'), // stable
    { date: day(-2), activity: 'lesson', itemId: 'fr.a1.cafe.005',
      expected: 'l’addition', heard: 'l’addition', score: 1, verdict: 'good', correct: true, modality: 'produce' },
  ], TODAY);
  const prod = due.find((c) => c.modality === 'produce' && c.itemId === 'fr.a1.cafe.005');
  ok(prod, 'the produce card is due');
});

// ── sibling-gating: production is earned on recognition (CF-02) ───────────────

test('a produce card with no recognise sibling never surfaces', () => {
  const cards = srsCards([a('fr.a1.cafe.001', true, -1, 'good', 'produce')]);
  strictEqual(cards.size, 0, 'production is earned on recognition, and there is none');
});

test('a produce card is gated while its recognise sibling is only two passes in', () => {
  const cards = srsCards([
    a('fr.a1.cafe.001', true, -5, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, -3, 'good', 'recognise'), // reps 2, interval 3 — the tail of the fixed ladder
    a('fr.a1.cafe.001', true, 0, 'good', 'produce'),
  ]);
  ok(cards.has(cardKey('fr.a1.cafe.001', 'recognise')));
  ok(!cards.has(cardKey('fr.a1.cafe.001', 'produce')), 'two clean passes is not yet stable');
});

test('a produce card surfaces once its recognise sibling clears the floor', () => {
  const cards = srsCards([
    a('fr.a1.cafe.001', true, -20, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, -14, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, -8, 'good', 'recognise'), // reps 3, interval 8 → over the floor
    a('fr.a1.cafe.001', true, -1, 'good', 'produce'),
  ]);
  const rec = cards.get(cardKey('fr.a1.cafe.001', 'recognise'))!;
  ok(rec.reps >= 3 && rec.intervalDays >= 7, 'the floor is genuinely cleared');
  ok(cards.has(cardKey('fr.a1.cafe.001', 'produce')), 'now unlocked');
});

test('a recognise lapse withdraws its producers again', () => {
  // Documents the deliberate behaviour: if recognition regresses below the
  // floor, production is no longer earned and its card is unsurfaced. The
  // attempts are not lost — the log keeps them; only the card is withheld.
  const cards = srsCards([
    a('fr.a1.cafe.001', true, -20, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, -14, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, -8, 'good', 'recognise'), // stable
    a('fr.a1.cafe.001', true, -4, 'good', 'produce'),   // producer unlocked, practised
    a('fr.a1.cafe.001', false, -1, 'off', 'recognise'), // recognition lapses, reps → 0
  ]);
  strictEqual(cards.get(cardKey('fr.a1.cafe.001', 'recognise'))!.reps, 0);
  ok(!cards.has(cardKey('fr.a1.cafe.001', 'produce')), 'production is no longer earned');
});

test('a realistic first session surfaces zero produce cards (the flood is capped)', () => {
  // Five new items, each recognised and produced the same day — the exact
  // day-one flood sibling-gating exists to prevent. Every recognise sibling is
  // one pass in, so no producer is due.
  const log: AttemptEntry[] = [];
  for (let i = 1; i <= 5; i++) {
    const id = `fr.a1.cafe.00${i}`;
    log.push(a(id, true, 0, 'good', 'recognise'));
    log.push(a(id, true, 0, 'good', 'produce'));
  }
  const produce = [...srsCards(log).values()].filter((c) => c.modality === 'produce');
  strictEqual(produce.length, 0);
});

test('legacy attempts (all migrated to recognise) gate their producers correctly', () => {
  // The Phase 1 migrate defaults pre-modality attempts to recognise. A long
  // recognise history therefore unlocks producers exactly as real recognition
  // would, which is the honest reading of that history.
  const legacy = [
    a('fr.a1.cafe.001', true, -30, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, -20, 'good', 'recognise'),
    a('fr.a1.cafe.001', true, -10, 'good', 'recognise'),
  ];
  ok(recognitionStable(srsCards(legacy).get(cardKey('fr.a1.cafe.001', 'recognise'))));
});

// ── mastery: met is not mastered (CF-03) ─────────────────────────────────────

/** A card folded from `n` clean passes spaced widely enough to reach a real
 *  interval. Returns the whole log so callers can add produce siblings. */
const masteredLog = (id: string, modality: AttemptEntry['modality']): AttemptEntry[] => [
  a(id, true, -60, 'good', modality),
  a(id, true, -45, 'good', modality),
  a(id, true, -30, 'good', modality),
  a(id, true, -20, 'good', modality),
  a(id, true, -1, 'good', modality),
];

test('isMastered needs five reps, three weeks of interval, and no recent miss', () => {
  const rec = srsCards(masteredLog('fr.a1.cafe.001', 'recognise')).get(cardKey('fr.a1.cafe.001', 'recognise'))!;
  ok(rec.reps >= 5 && rec.intervalDays >= 21);
  ok(isMastered(rec));
});

test('a well-drilled but recently-missed card is not mastered', () => {
  const log = [...masteredLog('fr.a1.cafe.001', 'recognise'), a('fr.a1.cafe.001', false, 0, 'off', 'recognise')];
  const rec = srsCards(log).get(cardKey('fr.a1.cafe.001', 'recognise'))!;
  ok(!isMastered(rec), 'a miss zeroes reps and drops mastery');
});

test('recognition alone is met, not mastered — production must be proven too', () => {
  // Recognise it into the ground; never produce it. It is met, not mastered.
  const cards = srsCards(masteredLog('fr.a1.cafe.001', 'recognise'));
  deepStrictEqual([...masteredItems(cards)], [], 'no produce card, so not mastered');
});

test('an item is mastered only when recognise AND produce are both mastered', () => {
  const log = [
    ...masteredLog('fr.a1.cafe.001', 'recognise'),
    ...masteredLog('fr.a1.cafe.001', 'produce'), // its recognise sibling is long stable, so this unlocks
  ];
  const cards = srsCards(log);
  ok(isMastered(cards.get(cardKey('fr.a1.cafe.001', 'recognise'))));
  ok(isMastered(cards.get(cardKey('fr.a1.cafe.001', 'produce'))));
  deepStrictEqual([...masteredItems(cards)], ['fr.a1.cafe.001']);
});
