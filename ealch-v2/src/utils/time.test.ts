// Clock-format guard. Runs on plain Node: npm run test (or test:i18n for strings).
import { strictEqual } from 'node:assert';
import { test } from 'node:test';
import { formatTime } from './time.ts';

test('formatTime passes 24h strings through unchanged', () => {
  for (const v of ['00:00', '07:30', '12:30', '19:00', '23:59']) {
    strictEqual(formatTime(v, true), v);
  }
});

test('formatTime renders 12h with AM/PM correctly', () => {
  const cases: [string, string][] = [
    ['00:00', '12:00 AM'], // midnight
    ['00:30', '12:30 AM'],
    ['02:05', '2:05 AM'],
    ['07:30', '7:30 AM'],
    ['11:59', '11:59 AM'],
    ['12:00', '12:00 PM'], // noon
    ['12:30', '12:30 PM'],
    ['19:00', '7:00 PM'],
    ['21:30', '9:30 PM'],
    ['23:59', '11:59 PM'],
  ];
  for (const [input, expected] of cases) {
    strictEqual(formatTime(input, false), expected, input);
  }
});

test('formatTime leaves malformed input untouched', () => {
  strictEqual(formatTime('7pm', false), '7pm');
  strictEqual(formatTime('', false), '');
});
