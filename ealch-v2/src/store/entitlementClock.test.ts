// The clock floor: what it stops, and what it must never do to an honest user.
//
// Entitlement expiry is evaluated on-device so a lapse holds with no network.
// That makes the timestamp the enforcement, and `Date.now()` is a number the
// user owns. These pin both halves of the fix — the bypass it closes, and the
// self-lockout the obvious implementation would have caused.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  MIN_PLAUSIBLE_MS,
  advancedFloor,
  effectiveNow,
  entitlementActive,
  hasFeature,
  isPremium,
} from './entitlement.logic.ts';
import type { Entitlement } from '../content/progress-schema.ts';

const DAY = 86_400_000;
const MAR = Date.UTC(2026, 2, 1);

const paid = (expiry: number | undefined): Entitlement =>
  ({ userId: 'u1', plan: 'premiere', features: ['levels.all'], source: 'iap', expiry }) as Entitlement;

test('winding the device clock back does not revive an expired subscription', () => {
  const e = paid(MAR + 30 * DAY);          // ran out on the 31st
  const realNow = MAR + 45 * DAY;          // it is now the 45th day
  const floor = MAR + 40 * DAY;            // and the server said so on day 40

  // Honest device: expired, as it should be.
  strictEqual(hasFeature(e, 'levels.all', effectiveNow(realNow, floor)), false);

  // The attack: set the phone back to before expiry and stay offline.
  const wound = MAR + 10 * DAY;
  strictEqual(hasFeature(e, 'levels.all', wound), true, 'the raw clock is the hole');
  strictEqual(
    hasFeature(e, 'levels.all', effectiveNow(wound, floor)), false,
    'the floor must outrank a device clock that has moved backwards'
  );
});

test('a wrong device clock never becomes permanent: the floor is server-only', () => {
  // The naive fix is "remember the highest Date.now() ever seen". This is why
  // that is worse than the hole. A phone reading 2030 for one afternoon would
  // write 2030 into the floor, and every subscription that device ever holds
  // reads as expired, forever, with no way back.
  const absurd = Date.UTC(2030, 0, 1);
  const floor = MAR;

  strictEqual(advancedFloor(floor, absurd), absurd, 'a SERVER saying 2030 is believed');
  // …but the device clock is never routed here at all. The only caller of
  // advancedFloor is noteServerTime. Setting the clock forward therefore costs
  // the user access early and repairs itself the moment they set it back.
  strictEqual(effectiveNow(absurd, floor), absurd);
  strictEqual(effectiveNow(MAR + DAY, floor), MAR + DAY, 'a corrected clock is believed again');
});

test('the floor only ever rises, and refuses junk', () => {
  const floor = MAR;
  strictEqual(advancedFloor(floor, MAR + DAY), MAR + DAY, 'newer server time raises it');
  strictEqual(advancedFloor(floor, MAR - DAY), floor, 'a slower round trip does not lower it');
  strictEqual(advancedFloor(floor, NaN), floor, 'an unparsed Date header is not a timestamp');
  strictEqual(advancedFloor(floor, Infinity), floor);
  strictEqual(advancedFloor(floor, 0), floor, 'the epoch is a broken clock, not a date');
  strictEqual(advancedFloor(floor, MIN_PLAUSIBLE_MS - 1), floor, 'before the app existed');
  strictEqual(advancedFloor(0, MIN_PLAUSIBLE_MS), MIN_PLAUSIBLE_MS, 'first evidence sets it');
});

test('no floor yet degrades to the old behaviour, never to something stricter', () => {
  // floorMs is 0 until loadTimeFloor resolves. A slow AsyncStorage read must
  // not lock out a paying user for the first frames of a launch.
  const e = paid(MAR + 30 * DAY);
  const now = MAR + DAY;
  strictEqual(effectiveNow(now, 0), now);
  strictEqual(hasFeature(e, 'levels.all', effectiveNow(now, 0)), true);
});

test('lifetime has no expiry, so no clock can touch it', () => {
  const life = paid(undefined);
  for (const t of [0, MAR, Date.UTC(2099, 0, 1)]) {
    ok(entitlementActive(life, t), 'a lifetime grant is active at any time');
    ok(isPremium(life, t));
  }
  // And the guard is irrelevant to it, which is the point: the floor exists
  // for expiring plans and must not become a way to expire a lifetime one.
  ok(hasFeature(life, 'levels.all', effectiveNow(0, Date.UTC(2099, 0, 1))));
});

test('the free tier is unaffected in both directions', () => {
  // A lapsed subscriber falls back to free, not to nothing. Whatever the clock
  // says, the free tier neither gains nor loses.
  const free = { userId: 'u1', plan: 'free', features: [], source: 'iap' } as Entitlement;
  deepStrictEqual(
    [effectiveNow(MAR, 0), effectiveNow(MAR, MAR + DAY)].map((t) => hasFeature(free, 'levels.all', t)),
    [false, false]
  );
  ok(entitlementActive(free, MAR), 'free never expires, so it is always "active"');
});
