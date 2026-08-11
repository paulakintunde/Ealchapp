// The grant surface, table-tested. Every path that can hand out access runs
// through entitlement.logic.ts, so this file is the proof behind the Phase 10
// acceptance line "no code path sets premium without a backing entitlement".
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  ACCESS_LEVEL_EXAM,
  ACCESS_LEVEL_PREMIERE,
  FEATURES,
  PREMIERE_FEATURES,
  FREE_SCENARIOS_PER_DAY,
  detectCurrency,
  entitlementActive,
  entitlementFromProfile,
  featuresForPlan,
  hasFeature,
  isPremium,
  levelLocked,
  roleplayLocked,
  scenarioOfAttempt,
  scenariosPlayedOn,
  type AccessLevelLike,
  type ProfileLike,
} from './entitlement.logic.ts';
import { isValidEntitlement, type Entitlement } from '../content/progress-schema.ts';

const NOW = Date.parse('2026-07-19T12:00:00Z');
const LATER_ISO = '2026-08-19T12:00:00.000Z';
const EARLIER_ISO = '2026-06-19T12:00:00.000Z';

const free: Entitlement = { userId: 'u1', plan: 'free', features: [], source: 'iap' };
const premiere: Entitlement = {
  userId: 'u1',
  plan: 'annual',
  features: [...PREMIERE_FEATURES],
  source: 'iap',
  expiry: Date.parse(LATER_ISO),
};

const profileWith = (levels: Record<string, AccessLevelLike | undefined>): ProfileLike => ({
  accessLevels: levels,
});

test('the free plan grants nothing and never expires', () => {
  deepStrictEqual(featuresForPlan('free'), []);
  ok(entitlementActive(free, NOW), 'no expiry means in force');
  strictEqual(isPremium(free, NOW), false);
  for (const f of FEATURES) ok(!hasFeature(free, f, NOW), `free must not carry ${f}`);
});

test('paid plans grant the Première features and never examiner', () => {
  for (const plan of ['monthly', 'annual'] as const) {
    const fs = featuresForPlan(plan);
    deepStrictEqual(fs, PREMIERE_FEATURES);
    ok(!fs.includes('examiner'), 'the exam tier is a distinct product, not a subscription perk');
  }
});

test('an expired entitlement grants nothing — expiry is a hard edge, not a grace state', () => {
  const expired = { ...premiere, expiry: NOW - 1 };
  strictEqual(isPremium(expired, NOW), false);
  ok(!hasFeature(expired, 'levels.all', NOW));
  // ...and one ms before expiry it still grants everything.
  const edge = { ...premiere, expiry: NOW + 1 };
  ok(hasFeature(edge, 'levels.all', NOW));
});

test('levelLocked: sons and a1 are free for everyone; a2+ needs levels.all', () => {
  for (const band of ['sons', 'a1']) {
    strictEqual(levelLocked(free, band, NOW), false, `${band} must be free`);
  }
  for (const band of ['a2', 'b1', 'b2', 'c1']) {
    strictEqual(levelLocked(free, band, NOW), true, `${band} must be gated for free`);
    strictEqual(levelLocked(premiere, band, NOW), false, `${band} must open with Première`);
  }
});

test('scenarioOfAttempt strips exactly the turn suffix', () => {
  strictEqual(scenarioOfAttempt('sc.a1.marche.001.t3'), 'sc.a1.marche.001');
  strictEqual(scenarioOfAttempt('sc.a1.marche.001'), 'sc.a1.marche.001');
});

test('roleplay gate: the free allowance is breadth, not practice', () => {
  const day = '2026-07-19';
  const played = [
    { activity: 'roleplay', date: day, itemId: 'sc.a1.marche.001.t0' },
    { activity: 'roleplay', date: day, itemId: 'sc.a1.marche.001.t1' },
    // noise the counter must ignore: other activities, other days
    { activity: 'flashcards', date: day, itemId: 'fr.a1.greet.001' },
    { activity: 'roleplay', date: '2026-07-18', itemId: 'sc.a1.plage.001.t0' },
  ];
  deepStrictEqual([...scenariosPlayedOn(played, day)], ['sc.a1.marche.001']);
  strictEqual(FREE_SCENARIOS_PER_DAY, 1);

  // Same scenario again today: free. A second distinct one: locked.
  strictEqual(roleplayLocked(free, played, day, 'sc.a1.marche.001', NOW), false);
  strictEqual(roleplayLocked(free, played, day, 'sc.a1.plage.001', NOW), true);
  // A fresh day starts the allowance over.
  strictEqual(roleplayLocked(free, played, '2026-07-20', 'sc.a1.plage.001', NOW), false);
  // Première is never locked.
  strictEqual(roleplayLocked(premiere, played, day, 'sc.a1.plage.001', NOW), false);
});

test('a profile with no access levels maps to an honest free', () => {
  const e = entitlementFromProfile('u1', profileWith({}));
  deepStrictEqual(e, { userId: 'u1', plan: 'free', features: [], source: 'iap' });
  ok(isValidEntitlement(e), 'the mapping must produce a schema-valid entitlement');
  // A profile with accessLevels entirely absent (Adapty types it optional)
  // must read the same, not throw.
  deepStrictEqual(entitlementFromProfile('u1', {}), e);
});

test('an active Première maps plan from the product id and carries an expiry', () => {
  const annual = entitlementFromProfile(
    'u1',
    profileWith({ [ACCESS_LEVEL_PREMIERE]: { isActive: true, vendorProductId: 'ealch_premiere_annual', expiresAt: LATER_ISO, store: 'play_store' } }),
  );
  strictEqual(annual.plan, 'annual');
  strictEqual(annual.source, 'iap');
  strictEqual(annual.expiry, Date.parse(LATER_ISO));
  deepStrictEqual(annual.features, PREMIERE_FEATURES);
  ok(isValidEntitlement(annual));

  // The SDK hands expiresAt as a Date object (not a string) — same result.
  const viaDate = entitlementFromProfile(
    'u1',
    profileWith({ [ACCESS_LEVEL_PREMIERE]: { isActive: true, vendorProductId: 'ealch_premiere_annual', expiresAt: new Date(LATER_ISO), store: 'play_store' } }),
  );
  strictEqual(viaDate.expiry, Date.parse(LATER_ISO));

  const monthly = entitlementFromProfile(
    'u1',
    profileWith({ [ACCESS_LEVEL_PREMIERE]: { isActive: true, vendorProductId: 'ealch_premiere_monthly', expiresAt: LATER_ISO, store: 'app_store' } }),
  );
  strictEqual(monthly.plan, 'monthly');

  // An unrecognized product id reads as monthly — the cheaper claim.
  const odd = entitlementFromProfile(
    'u1',
    profileWith({ [ACCESS_LEVEL_PREMIERE]: { isActive: true, vendorProductId: 'mystery_sku', expiresAt: LATER_ISO, store: 'app_store' } }),
  );
  strictEqual(odd.plan, 'monthly');
});

test('an inactive access level grants nothing, even when present', () => {
  // Adapty keeps expired/refunded levels in the map with isActive false —
  // presence is history, isActive is the grant.
  const e = entitlementFromProfile(
    'u1',
    profileWith({ [ACCESS_LEVEL_PREMIERE]: { isActive: false, vendorProductId: 'ealch_premiere_annual', expiresAt: LATER_ISO, store: 'app_store' } }),
  );
  strictEqual(e.plan, 'free');
  deepStrictEqual(e.features, []);
});

test('a stale cached profile still expires locally', () => {
  // Adapty computes isActive at fetch time, but an offline cache can hold a
  // then-active level past its date — the expiry we mapped must deny access.
  const e = entitlementFromProfile(
    'u1',
    profileWith({ [ACCESS_LEVEL_PREMIERE]: { isActive: true, vendorProductId: 'ealch_premiere_annual', expiresAt: EARLIER_ISO, store: 'app_store' } }),
  );
  strictEqual(isPremium(e, NOW), false);
});

test('the exam access level grants examiner and nothing else', () => {
  // A lifetime grant carries no expiresAt at all.
  const e = entitlementFromProfile(
    'u1',
    profileWith({ [ACCESS_LEVEL_EXAM]: { isActive: true, vendorProductId: 'ealch_exam', store: 'app_store' } }),
  );
  strictEqual(e.plan, 'free', 'the exam product is not a subscription plan');
  deepStrictEqual(e.features, ['examiner']);
  strictEqual(e.expiry, undefined, 'a lifetime grant has no expiry');
  ok(hasFeature(e, 'examiner', NOW));
  ok(!hasFeature(e, 'levels.all', NOW));
  ok(isValidEntitlement(e));
});

test('Première plus exam stacks both grants; the adapty web store reads as stripe', () => {
  // 'adapty' is the store value Adapty reports for its own web checkout,
  // which bills through Stripe — the web seam, not an app store.
  const e = entitlementFromProfile(
    'u1',
    profileWith({
      [ACCESS_LEVEL_PREMIERE]: { isActive: true, vendorProductId: 'ealch_premiere_annual', expiresAt: LATER_ISO, store: 'adapty' },
      [ACCESS_LEVEL_EXAM]: { isActive: true, vendorProductId: 'ealch_exam', store: 'adapty' },
    }),
  );
  strictEqual(e.plan, 'annual');
  strictEqual(e.source, 'stripe');
  deepStrictEqual([...e.features].sort(), [...PREMIERE_FEATURES, 'examiner'].sort());
});

test('billing issue and willRenew flags map through; neither revokes access', () => {
  const e = entitlementFromProfile(
    'u1',
    profileWith({
      [ACCESS_LEVEL_PREMIERE]: {
        isActive: true,
        vendorProductId: 'ealch_premiere_monthly',
        expiresAt: LATER_ISO,
        store: 'play_store',
        billingIssueDetectedAt: new Date('2026-07-18T00:00:00Z'),
        willRenew: false,
      },
    }),
  );
  strictEqual(e.billingIssue, true);
  strictEqual(e.willRenew, false, 'cancelled-but-paid-through shows Ends, not Renews');
  ok(isPremium(e, NOW), 'grace period keeps access; the flag only drives the notice');
  ok(isValidEntitlement(e));
});

test('currency detection reads the region subtag and refuses to guess', () => {
  strictEqual(detectCurrency(['en-US']), 'USD');
  strictEqual(detectCurrency(['fr-CA']), 'CAD');
  strictEqual(detectCurrency(['en_GB']), 'GBP');
  strictEqual(detectCurrency(['fr-FR']), 'EUR');
  strictEqual(detectCurrency(['de-DE', 'en-US']), 'EUR', 'first confident tag wins');
  strictEqual(detectCurrency(['fr']), null, 'no region, no claim');
  strictEqual(detectCurrency(['sv-SE']), null, 'EU member outside the euro is not EUR');
  strictEqual(detectCurrency([]), null);
});

/* ─── The TEMPORARY dev unlock of the A2 band ─────────────────────────────────
 *
 * Added 2026-08-11 alongside DEV_UNLOCK_A2 in useEntitlement.ts, which lifts the
 * `levels.all` gate so A2 lessons can be walked on a device while batch 1 is
 * being built.
 *
 * The whole safety claim for that switch is "a release build cannot take the
 * branch", and this is the proof rather than the assertion. The node test runner
 * has no `__DEV__` global, which is exactly the shape of a production bundle for
 * this purpose: if the flag alone were enough to lift the gate, this goes red.
 *
 * It stays useful after the switch is turned off: it holds the `typeof` guard in
 * place, so nobody can simplify it to a bare `__DEV__` and crash every consumer
 * that has no such global. */
test('the A2 dev unlock cannot lift the gate outside a dev build', async () => {
  strictEqual(typeof (globalThis as { __DEV__?: boolean }).__DEV__, 'undefined', 'this test is only meaningful where __DEV__ is absent');
  const { a2LockLifted } = await import('./entitlement.logic.ts');
  strictEqual(a2LockLifted(), false, 'the A2 band lock was lifted without a dev build; DEV_UNLOCK_A2 must never be enough on its own');
});
