// The USER-DATA contract: what we record about a learner, as opposed to what we
// teach them.
//
// WHY THIS IS A SEPARATE FILE FROM schema.ts
//
// schema.ts is the CONTENT contract. Everything in it is public by construction:
// it is compiled into snapshots, uploaded to a public Storage bucket, and shipped
// inside the binary on every phone. The types in THIS file are the opposite —
// they describe one person's attempts, their memory state, and what they have
// paid for. None of it belongs in a snapshot, and none of it should be
// importable by the publish pipeline or the Ops Console's content editors just
// because they needed a Corpus type.
//
// Keeping them in one file would not break anything today. It would make the
// wrong thing easy: a `plan` field one import away from a script whose whole job
// is writing world-readable JSON. The split is the cheap version of that
// argument, made once, here.
//
// It inherits schema.ts's constraints exactly — ZERO runtime imports, erasable
// syntax only — because `node --test` loads it directly. It imports from
// schema.ts alone, which is itself import-free, so nothing is dragged in: the
// alternative is a second copy of MODALITIES that drifts from the first.
//
// ─────────────────────────────────────────────────────────────────────────────
// TYPES ONLY. NO SCHEDULER.
//
// The FSRS/SM-2 logic is a later phase. This file fixes the SHAPE the scheduler
// and the monetization work will build on, so that both can be written against a
// contract that already exists rather than inventing one each. If you find
// yourself writing an interval calculation in here, stop: it belongs in the
// scheduler, and the point of this file is that it does not have to exist yet.
import { MODALITIES, type Modality } from './schema.ts';

/* ─── Value lists ────────────────────────────────────────────────────────── */

/**
 * How a learner graded a recall. 0 = failed, 3 = effortless.
 *
 * Four points, not a boolean, because "wrong" and "right" cannot separate the
 * answer that took nine seconds of visible pain from the one that was instant.
 * A scheduler that cannot see the difference schedules them the same, which is
 * the single most common way an SRS wastes a learner's time.
 */
export const GRADES = [0, 1, 2, 3] as const;
export type Grade = (typeof GRADES)[number];

/**
 * Where a card is in its life. The FSRS state machine's names, deliberately —
 * this is the vocabulary the scheduler that lands later will speak, and renaming
 * them to something homegrown would mean translating at every boundary.
 */
export const SRS_STATES = ['new', 'learning', 'review', 'relearning'] as const;
export type SrsState = (typeof SRS_STATES)[number];

/** Mirrors the admin's `sub_plan` pgEnum. Asserted by enum-parity.test.ts. */
export const PLANS = ['free', 'monthly', 'annual'] as const;
export type Plan = (typeof PLANS)[number];

/**
 * Who took the money. Not the same list as the admin's `sub_store` pgEnum
 * (app_store | play | stripe), and that is a real gap rather than an oversight:
 * this list is what the monetization phase intends to support, and 'paystack'
 * has no DB counterpart yet. Reconciling the two is Phase 5's job, and it is
 * written down here so that phase finds the discrepancy instead of rediscovering
 * it. No parity assertion for this one, because the two lists genuinely disagree
 * today and a failing test that everyone learns to ignore is worse than a note.
 */
export const ENTITLEMENT_SOURCES = ['iap', 'stripe', 'paystack'] as const;
export type EntitlementSource = (typeof ENTITLEMENT_SOURCES)[number];

/* ─── The append-only truth ──────────────────────────────────────────────── */

/**
 * One recall attempt, as it happened. THE source of truth for everything else in
 * this file.
 *
 * Append-only, and that is the whole design. An SRSCard is derived — it can be
 * thrown away and rebuilt from the log. That property is what makes changing the
 * scheduler possible at all: swap the algorithm, replay the log, get new cards.
 * If cards were the truth, the scheduler's current parameters would be baked
 * irreversibly into every user's data, and improving it would mean asking
 * everyone to start over.
 *
 * So: never mutate an AttemptLog. Never delete one to "fix" a card. Rebuild.
 */
export type AttemptLog = {
  userId: string;
  /** An Item.id. Stable and immutable for exactly this reason — the log outlives
   *  every rewrite of the item it points at. */
  itemId: string;
  /**
   * REQUIRED in this contract, and see the warning below before you make the
   * live store enforce it: recognising a word and producing it are different
   * memories, so an attempt that does not say which one it was cannot be
   * scheduled against either.
   */
  modality: Modality;
  /** Epoch ms, when it happened. */
  ts: number;
  grade: Grade;
  /** How long the recall took. Absent means not measured, never "instant". */
  latencyMs?: number;
};

// ─── GUARDRAIL G2, and it is not theoretical ────────────────────────────────
//
// `modality` is required ABOVE, in the contract. It must NOT be enforced by the
// live persisted store (src/store/useProgress) in this phase.
//
// Attempts recorded before this field existed are sitting in AsyncStorage on
// real devices right now, and they have no modality. The moment the runtime
// store requires one, those attempts either fail to rehydrate or mis-key — and
// the failure mode is not a crash. It is a learner opening the app to find their
// streak and their history gone, with nothing in any log to say why.
//
// The fix is a real persist migration (version 1 → 2) that maps legacy attempts
// to 'recognise' — the honest default, since every drill that existed when they
// were recorded was recognition — and it ships with its own test in a later
// phase. Until that has run: contract required, storage tolerant.

/* ─── The derived state ──────────────────────────────────────────────────── */

/**
 * A scheduler's memory model for one (item, modality) pair. DERIVED — see the
 * note on AttemptLog. Rebuildable, and therefore disposable.
 *
 * The key is (userId, itemId, modality) and never (userId, itemId). Two cards
 * for one item is correct and load-bearing: you can be due to REVIEW a word you
 * can already recognise, because you still cannot say it. Collapsing them is how
 * an app ends up insisting you know a word you have never once produced.
 */
export type SRSCard = {
  userId: string;
  itemId: string;
  modality: Modality;
  /** FSRS stability: days until recall probability falls to ~90%. > 0. */
  stability: number;
  /** FSRS difficulty: how much this item resists being learned. > 0. */
  difficulty: number;
  /** Epoch ms when this is next due. */
  due: number;
  /** How many times a review-state card has been forgotten. >= 0. */
  lapses: number;
  state: SrsState;
};

/* ─── What they paid for ─────────────────────────────────────────────────── */

/**
 * What a user is entitled to, right now.
 *
 * `features` rather than deriving access from `plan` alone: plans get renamed,
 * regraded and grandfathered, and the day a plan is renamed is the day every
 * `if (plan === 'monthly')` in the codebase quietly starts denying access to
 * people who are paying. A feature list survives that. The plan is what they
 * bought; the features are what they get; they are not the same question.
 */
export type Entitlement = {
  userId: string;
  plan: Plan;
  /** The capabilities this entitlement grants. May be empty (that is 'free'). */
  features: string[];
  source: EntitlementSource;
  /**
   * Epoch ms when this lapses. ABSENT MEANS NO EXPIRY — a lifetime grant or a
   * free plan — and never "expired". Anything reading this must treat undefined
   * as "does not expire", or the first free user it sees loses access to the
   * free tier.
   */
  expiry?: number;
};

/* ─── Validation ─────────────────────────────────────────────────────────── */

// Same discipline and same shape as schema.ts: return issues, never throw.
export type Issue = { path: string; message: string };

const isStr = (v: unknown): v is string => typeof v === 'string' && v.length > 0;
const isArr = Array.isArray;
const oneOf = <T extends readonly unknown[]>(list: T, v: unknown): v is T[number] =>
  (list as readonly unknown[]).includes(v);
/** Epoch ms. Finite, integer, and not negative — a timestamp before 1970 in this
 *  app is a corrupted number, not a date. */
const isEpochMs = (v: unknown): v is number =>
  typeof v === 'number' && Number.isInteger(v) && v >= 0;

export function validateAttemptLog(v: unknown, path = 'attempt'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const a = v as Partial<AttemptLog>;

  if (!isStr(a.userId)) push('userId is required');
  if (!isStr(a.itemId)) push('itemId is required');
  if (!oneOf(MODALITIES, a.modality)) push(`modality must be one of ${MODALITIES.join(' | ')}`);
  if (!isEpochMs(a.ts)) push('ts must be an epoch-ms integer >= 0');
  // Not `typeof === number`: a grade of 7 or 2.5 is not a grade, and a scheduler
  // fed one produces an interval with no meaning rather than an error.
  if (!oneOf(GRADES, a.grade)) push(`grade must be one of ${GRADES.join(' | ')}`);
  if (a.latencyMs !== undefined && (typeof a.latencyMs !== 'number' || !Number.isFinite(a.latencyMs) || a.latencyMs < 0)) {
    push('latencyMs must be a number >= 0 when present');
  }

  return out;
}

export function validateSRSCard(v: unknown, path = 'card'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const c = v as Partial<SRSCard>;

  if (!isStr(c.userId)) push('userId is required');
  if (!isStr(c.itemId)) push('itemId is required');
  if (!oneOf(MODALITIES, c.modality)) push(`modality must be one of ${MODALITIES.join(' | ')}`);
  if (!oneOf(SRS_STATES, c.state)) push(`state must be one of ${SRS_STATES.join(' | ')}`);
  if (!isEpochMs(c.due)) push('due must be an epoch-ms integer >= 0');

  // Strictly positive, both. Zero or negative stability is not a very hard card,
  // it is a division by zero waiting in the interval formula — and what surfaces
  // is a card due in 1970 or NaN days, i.e. one that is always due, forever.
  if (typeof c.stability !== 'number' || !Number.isFinite(c.stability) || c.stability <= 0) {
    push('stability must be a finite number > 0');
  }
  if (typeof c.difficulty !== 'number' || !Number.isFinite(c.difficulty) || c.difficulty <= 0) {
    push('difficulty must be a finite number > 0');
  }
  if (typeof c.lapses !== 'number' || !Number.isInteger(c.lapses) || c.lapses < 0) {
    push('lapses must be an integer >= 0');
  }

  return out;
}

export function validateEntitlement(v: unknown, path = 'entitlement'): Issue[] {
  const out: Issue[] = [];
  const push = (m: string) => out.push({ path, message: m });
  if (typeof v !== 'object' || v === null) return [{ path, message: 'not an object' }];
  const e = v as Partial<Entitlement>;

  if (!isStr(e.userId)) push('userId is required');
  if (!oneOf(PLANS, e.plan)) push(`plan must be one of ${PLANS.join(' | ')}`);
  if (!oneOf(ENTITLEMENT_SOURCES, e.source)) push(`source must be one of ${ENTITLEMENT_SOURCES.join(' | ')}`);

  // [] is legal and meaningful: it is the free tier. Undefined is not — it is a
  // question nobody answered, and a reader doing `features.includes(x)` throws.
  if (!isArr(e.features)) push('features must be an array (use [] for none)');
  else if (e.features.some((f) => !isStr(f))) push('features must all be non-empty strings');

  if (e.expiry !== undefined && !isEpochMs(e.expiry)) push('expiry must be an epoch-ms integer >= 0 when present');

  return out;
}

export const isValidAttemptLog = (v: unknown): v is AttemptLog => validateAttemptLog(v).length === 0;
export const isValidSRSCard = (v: unknown): v is SRSCard => validateSRSCard(v).length === 0;
export const isValidEntitlement = (v: unknown): v is Entitlement => validateEntitlement(v).length === 0;

/** The SRS key. Exported rather than inlined so the scheduler, the store and any
 *  future sync path cannot each invent their own spelling of it — two spellings
 *  of a key is two caches that never agree. */
export function srsKey(itemId: string, modality: Modality): string {
  return `${itemId}::${modality}`;
}
