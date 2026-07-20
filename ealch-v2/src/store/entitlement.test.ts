// The grant surface, table-tested. Every path that can hand out access runs
// through entitlement.logic.ts, so this file is the proof behind the Phase 10
// acceptance line "no code path sets premium without a backing entitlement".
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  FEATURES,
  PREMIERE_FEATURES,
  FREE_SCENARIOS_PER_DAY,
  RC_ENTITLEMENT_EXAM,
  RC_ENTITLEMENT_PREMIERE,
  detectCurrency,
  entitlementActive,
  entitlementFromCustomerInfo,
  featuresForPlan,
  hasFeature,
  isPremium,
  levelLocked,
  roleplayLocked,
  scenarioOfAttempt,
  scenariosPlayedOn,
  type CustomerInfoLike,
} from './entitlement.logic';
import { isValidEntitlement, type Entitlement } from '@/content/progress-schema';

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

const rcInfo = (active: CustomerInfoLike['entitlements']['active']): CustomerInfoLike => ({
  entitlements: { active },
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
    { activity: 'roleplay', day, itemId: 'sc.a1.marche.001.t0' },
    { activity: 'roleplay', day, itemId: 'sc.a1.marche.001.t1' },
    // noise the counter must ignore: other activities, other days
    { activity: 'flashcards', day, itemId: 'fr.a1.greet.001' },
    { activity: 'roleplay', day: '2026-07-18', itemId: 'sc.a1.plage.001.t0' },
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

test('customerInfo with no active entitlements maps to an honest free', () => {
  const e = entitlementFromCustomerInfo('u1', rcInfo({}));
  deepStrictEqual(e, { userId: 'u1', plan: 'free', features: [], source: 'iap' });
  ok(isValidEntitlement(e), 'the mapping must produce a schema-valid entitlement');
});

test('an active Première maps plan from the product id and carries an expiry', () => {
  const annual = entitlementFromCustomerInfo(
    'u1',
    rcInfo({ [RC_ENTITLEMENT_PREMIERE]: { productIdentifier: 'ealch_premiere_annual', expirationDate: LATER_ISO, store: 'PLAY_STORE' } }),
  );
  strictEqual(annual.plan, 'annual');
  strictEqual(annual.source, 'iap');
  strictEqual(annual.expiry, Date.parse(LATER_ISO));
  deepStrictEqual(annual.features, PREMIERE_FEATURES);
  ok(isValidEntitlement(annual));

  const monthly = entitlementFromCustomerInfo(
    'u1',
    rcInfo({ [RC_ENTITLEMENT_PREMIERE]: { productIdentifier: 'ealch_premiere_monthly', expirationDate: LATER_ISO, store: 'APP_STORE' } }),
  );
  strictEqual(monthly.plan, 'monthly');

  // An unrecognized product id reads as monthly — the cheaper claim.
  const odd = entitlementFromCustomerInfo(
    'u1',
    rcInfo({ [RC_ENTITLEMENT_PREMIERE]: { productIdentifier: 'mystery_sku', expirationDate: LATER_ISO, store: 'APP_STORE' } }),
  );
  strictEqual(odd.plan, 'monthly');
});

test('a stale active row from RevenueCat still expires locally', () => {
  // RevenueCat prunes expired entitlements from `active`, but an offline cache
  // can hold one past its date — the expiry we mapped must then deny access.
  const e = entitlementFromCustomerInfo(
    'u1',
    rcInfo({ [RC_ENTITLEMENT_PREMIERE]: { productIdentifier: 'ealch_premiere_annual', expirationDate: EARLIER_ISO, store: 'APP_STORE' } }),
  );
  strictEqual(isPremium(e, NOW), false);
});

test('the exam entitlement grants examiner and nothing else', () => {
  const e = entitlementFromCustomerInfo(
    'u1',
    rcInfo({ [RC_ENTITLEMENT_EXAM]: { productIdentifier: 'ealch_exam', expirationDate: null, store: 'APP_STORE' } }),
  );
  strictEqual(e.plan, 'free', 'the exam product is not a subscription plan');
  deepStrictEqual(e.features, ['examiner']);
  strictEqual(e.expiry, undefined, 'a lifetime grant has no expiry');
  ok(hasFeature(e, 'examiner', NOW));
  ok(!hasFeature(e, 'levels.all', NOW));
  ok(isValidEntitlement(e));
});

test('Première plus exam stacks both grants', () => {
  const e = entitlementFromCustomerInfo(
    'u1',
    rcInfo({
      [RC_ENTITLEMENT_PREMIERE]: { productIdentifier: 'ealch_premiere_annual', expirationDate: LATER_ISO, store: 'STRIPE' },
      [RC_ENTITLEMENT_EXAM]: { productIdentifier: 'ealch_exam', expirationDate: null, store: 'STRIPE' },
    }),
  );
  strictEqual(e.plan, 'annual');
  strictEqual(e.source, 'stripe');
  deepStrictEqual([...e.features].sort(), [...PREMIERE_FEATURES, 'examiner'].sort());
});

test('a billing issue flags dunning but the mapping never revokes for it', () => {
  const e = entitlementFromCustomerInfo(
    'u1',
    rcInfo({
      [RC_ENTITLEMENT_PREMIERE]: {
        productIdentifier: 'ealch_premiere_monthly',
        expirationDate: LATER_ISO,
        store: 'PLAY_STORE',
        billingIssueDetectedAt: '2026-07-18T00:00:00Z',
      },
    }),
  );
  strictEqual(e.billingIssue, true);
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
