// Per-kind cancellation guard. services/notifications.ts cannot be behaviourally
// tested under `node --test` (it imports react-native and expo-notifications),
// so the one rule that matters most is asserted against its SOURCE instead:
// cancelAllScheduledNotificationsAsync has no filter, so if it ever creeps back
// into a per-kind path, turning one notification toggle off would silently
// cancel the other two kinds' pending schedules.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { NOTIF_CHANNEL_ID, allNotifIds } from '../utils/notifSchedule.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const read = (rel: string): string => readFileSync(resolve(here, rel), 'utf8');
const countOf = (src: string, needle: string): number => src.split(needle).length - 1;

const service = read('./notifications.ts');
const layout = read('../../app/_layout.tsx');

test('the blanket cancel survives only inside cancelAll', () => {
  strictEqual(countOf(service, 'cancelAllScheduledNotificationsAsync'), 1);
  ok(
    service.indexOf('cancelAllScheduledNotificationsAsync') > service.indexOf('async cancelAll('),
    'the only blanket cancel must sit inside cancelAll',
  );
});

test('every scheduled notification carries a deterministic identifier', () => {
  strictEqual(countOf(service, 'scheduleNotificationAsync('), countOf(service, 'identifier:'));
  ok(countOf(service, 'scheduleNotificationAsync(') >= 3, 'daily, nudge and report each schedule');
});

test('per-kind cancellation exists and is used', () => {
  ok(service.includes('async cancelKind('));
  ok(countOf(service, 'cancelScheduledNotificationAsync(') >= 1);
  ok(service.includes('notifIdsFor('), 'cancelKind must derive its ids from the logic module');
});

test('no notification identifier or channel is hardcoded in the service', () => {
  for (const id of [...allNotifIds(), NOTIF_CHANNEL_ID]) {
    strictEqual(countOf(service, `'${id}'`), 0, `${id} must come from notifSchedule.logic, not a literal`);
  }
});

test('the channel every kind posts to is the one registered at startup', () => {
  ok(
    layout.includes(`setNotificationChannelAsync('${NOTIF_CHANNEL_ID}'`),
    'Android 8+ silently drops a notification whose channel was never registered',
  );
  ok(service.includes('channelId: NOTIF_CHANNEL_ID'));
});
