import { test } from 'node:test';
import { strictEqual } from 'node:assert';
import { firstOpenRecord, isD1Return } from './acquisition.logic.ts';

test('first open stores install identity, exact time and local calendar day', () => {
  const opened = new Date(2026, 8, 29, 23, 30);
  const record = firstOpenRecord('install-1', opened);
  strictEqual(record.installId, 'install-1');
  strictEqual(record.at, opened.toISOString());
  strictEqual(record.localDay, '2026-09-29');
});

test('a return under 24 hours can count when it is the next local day', () => {
  const opened = new Date(2026, 8, 29, 23, 30);
  const returned = new Date(opened.getTime() + 23 * 60 * 60 * 1000);
  strictEqual(isD1Return('2026-09-29', returned, null), true);
});

test('a return after 25 hours on day two is not D1, and same-day repeats do not count', () => {
  const opened = new Date(2026, 8, 29, 23, 30);
  const dayTwo = new Date(opened.getTime() + 25 * 60 * 60 * 1000);
  strictEqual(isD1Return('2026-09-29', dayTwo, null), false);
  strictEqual(isD1Return('2026-09-29', opened, null), false);
  strictEqual(isD1Return('2026-09-29', new Date(2026, 8, 30, 9), '2026-09-30'), false);
});
