// Guards for the user-data contract. Same rules as schema.test.ts: every case
// below is a bug that does not crash — a NaN interval, a card due forever, a
// paying user quietly denied.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  ENTITLEMENT_SOURCES,
  GRADES,
  PLANS,
  SRS_STATES,
  isValidAttemptLog,
  isValidEntitlement,
  isValidSRSCard,
  srsKey,
  validateAttemptLog,
  validateEntitlement,
  validateSRSCard,
  type AttemptLog,
  type Entitlement,
  type SRSCard,
} from './progress-schema.ts';

/* ─── fixtures ───────────────────────────────────────────────────────────── */

const attempt = (over: Partial<AttemptLog> = {}): AttemptLog => ({
  userId: 'u1',
  itemId: 'fr.a1.cafe.001',
  modality: 'recognise',
  ts: 1_700_000_000_000,
  grade: 2,
  ...over,
});

const card = (over: Partial<SRSCard> = {}): SRSCard => ({
  userId: 'u1',
  itemId: 'fr.a1.cafe.001',
  modality: 'produce',
  stability: 4.2,
  difficulty: 5.1,
  due: 1_700_086_400_000,
  lapses: 0,
  state: 'review',
  ...over,
});

const entitlement = (over: Partial<Entitlement> = {}): Entitlement => ({
  userId: 'u1',
  plan: 'monthly',
  features: ['exam', 'audio'],
  source: 'iap',
  ...over,
});

/* ─── value lists ────────────────────────────────────────────────────────── */

test('the value lists are what the scheduler and monetization will build on', () => {
  deepStrictEqual([...GRADES], [0, 1, 2, 3]);
  deepStrictEqual([...SRS_STATES], ['new', 'learning', 'review', 'relearning']);
  deepStrictEqual([...PLANS], ['free', 'monthly', 'annual']);
  deepStrictEqual([...ENTITLEMENT_SOURCES], ['iap', 'stripe', 'paystack']);
});

/* ─── attempts ───────────────────────────────────────────────────────────── */

test('a well-formed attempt validates, with and without latency', () => {
  deepStrictEqual(validateAttemptLog(attempt()), []);
  deepStrictEqual(validateAttemptLog(attempt({ latencyMs: 2400 })), []);
  ok(isValidAttemptLog(attempt()));
});

test('an attempt must say which modality it was', () => {
  // An attempt that does not say whether you recognised the word or produced it
  // cannot be scheduled against either — they are different memories.
  ok(validateAttemptLog(attempt({ modality: undefined as never })).length > 0);
  ok(validateAttemptLog(attempt({ modality: 'recall' as never })).length > 0);
});

test('a grade must be one of the four, not merely a number', () => {
  // A scheduler handed grade=7 does not throw. It produces an interval with no
  // meaning and schedules the card by it.
  for (const g of GRADES) deepStrictEqual(validateAttemptLog(attempt({ grade: g })), []);
  for (const bad of [7, -1, 2.5, '2', null]) {
    ok(validateAttemptLog(attempt({ grade: bad as never })).length > 0, `grade=${String(bad)}`);
  }
});

test('four grades exist because right/wrong cannot see effort', () => {
  // Not ceremony: the instant answer and the one that took nine seconds of pain
  // are both "right", and a scheduler that cannot tell them apart schedules them
  // identically. That is the most common way an SRS wastes a learner's time.
  strictEqual(GRADES.length, 4);
});

test('a timestamp must be a real epoch-ms integer', () => {
  ok(validateAttemptLog(attempt({ ts: -1 })).length > 0);
  ok(validateAttemptLog(attempt({ ts: 1.5 })).length > 0);
  ok(validateAttemptLog(attempt({ ts: NaN })).length > 0);
  ok(validateAttemptLog(attempt({ ts: '1700000000000' as never })).length > 0);
});

test('latency is optional, and absent means UNMEASURED not instant', () => {
  const a = attempt();
  strictEqual(a.latencyMs, undefined);
  deepStrictEqual(validateAttemptLog(a), []);
  ok(validateAttemptLog(attempt({ latencyMs: -5 })).length > 0);
});

/* ─── cards ──────────────────────────────────────────────────────────────── */

test('a well-formed card validates', () => {
  deepStrictEqual(validateSRSCard(card()), []);
  ok(isValidSRSCard(card()));
});

test('stability and difficulty must be strictly positive', () => {
  // Zero is not "a very hard card". It is a division by zero waiting in the
  // interval formula, and what surfaces is a card due in 1970 or in NaN days —
  // one that is always due, forever, with no error anywhere.
  for (const bad of [0, -1, NaN, Infinity, '4' as never]) {
    ok(validateSRSCard(card({ stability: bad as never })).length > 0, `stability=${String(bad)}`);
    ok(validateSRSCard(card({ difficulty: bad as never })).length > 0, `difficulty=${String(bad)}`);
  }
});

test('lapses is a non-negative integer', () => {
  deepStrictEqual(validateSRSCard(card({ lapses: 3 })), []);
  ok(validateSRSCard(card({ lapses: -1 })).length > 0);
  ok(validateSRSCard(card({ lapses: 1.5 })).length > 0);
});

test('a card state must be a real FSRS state', () => {
  for (const s of SRS_STATES) deepStrictEqual(validateSRSCard(card({ state: s })), []);
  ok(validateSRSCard(card({ state: 'forgotten' as never })).length > 0);
});

test('cards are keyed by (item, modality), so one item can hold two', () => {
  // Load-bearing: you can be due to review a word you already recognise, because
  // you still cannot say it. Collapsing the two is how an app insists you know a
  // word you have never once produced.
  const recognise = srsKey('fr.a1.cafe.001', 'recognise');
  const produce = srsKey('fr.a1.cafe.001', 'produce');
  ok(recognise !== produce, 'the same item must key to two different cards');
  strictEqual(srsKey('fr.a1.cafe.001', 'produce'), 'fr.a1.cafe.001::produce');
  // One spelling of the key, exported, so the scheduler and the store cannot
  // each invent their own — two spellings is two caches that never agree.
  strictEqual(srsKey('fr.a1.cafe.001', 'produce'), produce);
});

/* ─── entitlements ───────────────────────────────────────────────────────── */

test('a well-formed entitlement validates', () => {
  deepStrictEqual(validateEntitlement(entitlement()), []);
  ok(isValidEntitlement(entitlement()));
  for (const source of ENTITLEMENT_SOURCES) deepStrictEqual(validateEntitlement(entitlement({ source })), []);
});

test('no expiry means NO EXPIRY, never expired', () => {
  // A free plan and a lifetime grant both have no expiry. Anything that reads
  // undefined as "already lapsed" locks free users out of the free tier.
  const forever = entitlement({ plan: 'free', features: [], expiry: undefined });
  deepStrictEqual(validateEntitlement(forever), []);
  ok(validateEntitlement(entitlement({ expiry: -1 })).length > 0);
  ok(validateEntitlement(entitlement({ expiry: 'never' as never })).length > 0);
});

test('an empty feature list is legal; a missing one is not', () => {
  // [] is the free tier — a real answer. undefined is a question nobody answered,
  // and a reader doing features.includes(x) throws on it.
  deepStrictEqual(validateEntitlement(entitlement({ features: [] })), []);
  ok(validateEntitlement(entitlement({ features: undefined as never })).length > 0);
  ok(validateEntitlement(entitlement({ features: ['exam', ''] })).length > 0);
  ok(validateEntitlement(entitlement({ features: 'exam' as never })).length > 0);
});

test('plan and source must be known values', () => {
  ok(validateEntitlement(entitlement({ plan: 'lifetime' as never })).length > 0);
  ok(validateEntitlement(entitlement({ source: 'paypal' as never })).length > 0);
});

test('the progress validators never throw on garbage', () => {
  for (const junk of [null, undefined, 42, 'attempt', [], true]) {
    ok(Array.isArray(validateAttemptLog(junk)));
    ok(Array.isArray(validateSRSCard(junk)));
    ok(Array.isArray(validateEntitlement(junk)));
  }
});
