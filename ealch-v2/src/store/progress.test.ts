// Progress engine guard. Runs on plain Node (types are stripped natively):
//   npm test
// progress.logic.ts imports nothing from react-native, zustand or AsyncStorage,
// which is the whole reason it can be tested at all.
import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  attemptsToday,
  goalTarget,
  itemsPracticed,
  localDay,
  minutesToday,
  mondayIndex,
  shiftDay,
  statsByItem,
  streak,
  weakestItems,
  weekDots,
  type AttemptEntry,
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

/** An attempt on `id`, `delta` days from TODAY. */
const a = (
  id: string,
  correct: boolean,
  delta = 0,
  verdict: AttemptEntry['verdict'] = correct ? 'good' : 'off'
): AttemptEntry => ({
  date: day(delta),
  activity: 'voiceflash',
  itemId: id,
  expected: id,
  heard: correct ? id : '',
  score: correct ? 1 : 0,
  verdict,
  correct,
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
