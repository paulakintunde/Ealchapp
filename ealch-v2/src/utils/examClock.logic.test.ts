import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  WARN_THRESHOLDS_S,
  crossedWarnings,
  elapsedMs,
  formatClock,
  isExpired,
  pauseClock,
  remainingS,
  resumeClock,
  startClock,
  warningAnnouncement,
} from './examClock.logic.ts';

const T0 = 1_700_000_000_000;
const mins = (n: number) => n * 60_000;

test('the clock is wall-clock: a gap in readings does not give time back', () => {
  // THE bug this module exists for. A tick counter is suspended when the app is
  // backgrounded, so a candidate who takes a call comes back with the clock
  // where they left it. Here, nobody read the clock for twenty minutes and it
  // does not care.
  const c = startClock(3600, T0);
  strictEqual(remainingS(c, T0), 3600);
  strictEqual(remainingS(c, T0 + mins(20)), 2400);
  // Two readings twenty minutes apart, with nothing in between.
  strictEqual(remainingS(c, T0 + mins(40)), 1200);
});

test('remaining never goes negative, and expiry is a clean boundary', () => {
  const c = startClock(60, T0);
  strictEqual(remainingS(c, T0 + 59_000), 1);
  strictEqual(remainingS(c, T0 + 60_000), 0);
  // An hour past the end still reads 0, not -3540. A negative countdown reads
  // as a bug to someone already under pressure.
  strictEqual(remainingS(c, T0 + mins(60)), 0);
  ok(!isExpired(c, T0 + 59_000));
  ok(isExpired(c, T0 + 60_000));
  ok(isExpired(c, T0 + mins(60)));
});

test('a clock read before it started does not run backwards', () => {
  // Device clock nudged, or a stale render. Elapsed clamps at 0 rather than
  // reporting more time than the section allows.
  const c = startClock(600, T0);
  strictEqual(elapsedMs(c, T0 - mins(5)), 0);
  strictEqual(remainingS(c, T0 - mins(5)), 600);
});

test('pause stops the clock and resume restarts it, practice mode only', () => {
  let c = startClock(600, T0);
  c = pauseClock(c, T0 + 100_000); // 100s in, 500 left
  strictEqual(remainingS(c, T0 + 100_000), 500);
  // Time passes while paused and the clock does not move.
  strictEqual(remainingS(c, T0 + mins(10)), 500);
  c = resumeClock(c, T0 + mins(10));
  strictEqual(remainingS(c, T0 + mins(10)), 500);
  strictEqual(remainingS(c, T0 + mins(10) + 60_000), 440);
});

test('double pause and double resume are no-ops, not free time', () => {
  // A double tap on pause must not overwrite the first pause's start time: if
  // it did, the paused span would be measured from the second tap and the
  // candidate would keep the difference.
  let c = startClock(600, T0);
  c = pauseClock(c, T0 + 10_000);
  const once = c;
  c = pauseClock(c, T0 + 200_000);
  deepStrictEqual(c, once, 'the second pause must not move the pause start');
  c = resumeClock(c, T0 + 200_000);
  strictEqual(remainingS(c, T0 + 200_000), 590, 'only the 10s before the pause were spent');
  const running = c;
  deepStrictEqual(resumeClock(c, T0 + 300_000), running, 'resuming a running clock changes nothing');
});

test('warnings fire on the edge, once, not for the whole final five minutes', () => {
  deepStrictEqual([...WARN_THRESHOLDS_S], [300, 60]);
  // Crossing 300.
  deepStrictEqual(crossedWarnings(301, 300), [300]);
  deepStrictEqual(crossedWarnings(305, 299), [300]);
  // Already past it: silent. This is what makes it an edge and not a state.
  deepStrictEqual(crossedWarnings(299, 298), []);
  deepStrictEqual(crossedWarnings(120, 61), []);
  deepStrictEqual(crossedWarnings(61, 60), [60]);
  // Not moving, or moving backwards (a resumed pause), says nothing.
  deepStrictEqual(crossedWarnings(300, 300), []);
  deepStrictEqual(crossedWarnings(60, 500), []);
});

test('a reading that jumps both thresholds reports both', () => {
  // The app was backgrounded from six minutes left to forty seconds left. The
  // candidate should still be told, once, rather than silently missing the
  // warnings that happened while they were away.
  deepStrictEqual(crossedWarnings(360, 40), [300, 60]);
});

test('formatClock pads, and grows an hours field rather than showing 60:00 wrong', () => {
  strictEqual(formatClock(0), '00:00');
  strictEqual(formatClock(9), '00:09');
  strictEqual(formatClock(70), '01:10');
  strictEqual(formatClock(600), '10:00');
  // TEF reading is a full hour; TEF Canada end to end is nearly three.
  strictEqual(formatClock(3600), '1:00:00');
  strictEqual(formatClock(3661), '1:01:01');
  // Never negative, whatever it is handed.
  strictEqual(formatClock(-5), '00:00');
});

test('the screen reader is told at the edges, in the candidate’s language', () => {
  strictEqual(warningAnnouncement(300, 'fr'), '5 minutes restantes');
  strictEqual(warningAnnouncement(60, 'fr'), 'Une minute restante');
  strictEqual(warningAnnouncement(300, 'en'), '5 minutes remaining');
  strictEqual(warningAnnouncement(60, 'en'), 'One minute remaining');
});
