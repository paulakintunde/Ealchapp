// Per-kind notification scheduling vocabulary guard. Runs on plain Node:
// node --test.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  DAILY_ID,
  NOTIF_CHANNEL_ID,
  NUDGE_SLOTS,
  REPORT_DELAY_SECONDS,
  REPORT_ID,
  allNotifIds,
  notifIdsFor,
  type NotifKind,
} from './notifSchedule.logic.ts';

test('notifIdsFor returns the exact fixed id set per kind', () => {
  deepStrictEqual(notifIdsFor('daily'), [DAILY_ID]);
  deepStrictEqual(notifIdsFor('daily'), ['daily-reminder']);
  deepStrictEqual(notifIdsFor('report'), [REPORT_ID]);
  deepStrictEqual(notifIdsFor('report'), ['report-session']);
  deepStrictEqual(
    notifIdsFor('nudge'),
    NUDGE_SLOTS.map((s) => s.id),
  );
  deepStrictEqual(notifIdsFor('nudge'), ['nudge-mon', 'nudge-thu']);
});

test('each kind\'s identifier set is pairwise disjoint from every other kind', () => {
  const kinds: readonly NotifKind[] = ['daily', 'report', 'nudge'];
  for (const a of kinds) {
    for (const b of kinds) {
      if (a === b) continue;
      const idsA = new Set(notifIdsFor(a));
      const idsB = notifIdsFor(b);
      for (const id of idsB) {
        ok(!idsA.has(id), `${a} and ${b} both own id "${id}"`);
      }
    }
  }
});

test('allNotifIds contains every id from all three kinds with no duplicate', () => {
  const all = allNotifIds();
  strictEqual(all.length, 4);
  strictEqual(new Set(all).size, 4);
  for (const kind of ['daily', 'report', 'nudge'] as const) {
    for (const id of notifIdsFor(kind)) {
      ok(all.includes(id), `allNotifIds is missing ${id}`);
    }
  }
});

test('NOTIF_CHANNEL_ID matches the channel registered at startup', () => {
  strictEqual(NOTIF_CHANNEL_ID, 'practice-reminders');
});

test('REPORT_DELAY_SECONDS is in the expected range', () => {
  ok(REPORT_DELAY_SECONDS >= 60);
  ok(REPORT_DELAY_SECONDS <= 600);
});

test('NUDGE_SLOTS has exactly 2 valid, uniquely-identified slots', () => {
  strictEqual(NUDGE_SLOTS.length, 2);
  const ids = new Set<string>();
  for (const slot of NUDGE_SLOTS) {
    ok(slot.weekday >= 1 && slot.weekday <= 7, `weekday out of range: ${slot.weekday}`);
    ok(slot.hour >= 0 && slot.hour <= 23, `hour out of range: ${slot.hour}`);
    ok(slot.minute >= 0 && slot.minute <= 59, `minute out of range: ${slot.minute}`);
    ok(!ids.has(slot.id), `duplicate slot id: ${slot.id}`);
    ids.add(slot.id);
  }
});
