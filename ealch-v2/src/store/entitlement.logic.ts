// The gating layer's pure core — every "may this user do X?" decision in one
// place, importable by screens and testable by node alone. Same discipline as
// progress.logic.ts: no react-native, no zustand, no expo imports, ever.
//
// The shape of the layer (Phase 10, vendor amended to Adapty 2026-07-22):
//   Adapty profile (access levels) ──entitlementFromProfile──► Entitlement
//   Entitlement + a feature key ──hasFeature──► boolean
//   screens ask the specific gate predicates (levelLocked, roleplayLocked),
//   never re-derive access from `plan`.
//
// `features` is the access vocabulary, `plan` is what was bought — see the
// Entitlement doc in progress-schema.ts for why they are separate questions.

import type { Entitlement, Plan } from '../content/progress-schema.ts';

/* ─── The feature vocabulary ─────────────────────────────────────────────── */

/** Every capability an entitlement can grant. A gate may only test values from
 *  this list; a paywall may only sell values from this list. Two traps are
 *  pinned by their absence: there is NO 'offline' feature (the corpus is
 *  bundled and works offline for everyone, per offlineReadyT — selling it
 *  would be selling the free tier back to the user), and 'examiner' exists but
 *  is granted by no plan (it is the Phase 11 exam product, not Première). */
export const FEATURES = [
  /** Content beyond A1: the A2+ Den tracks and their lessons. */
  'levels.all',
  /** Coach turns past the free daily cap (the cap itself is server-enforced). */
  'coach.unlimited',
  /** More than FREE_SCENARIOS_PER_DAY distinct role-play scenarios per day. */
  'roleplay.unlimited',
  /** Downloadable narration/audio packs — Phase 7 ships the packs. */
  'audio.packs',
  /** The Phase 8 Examiner. Granted by the Phase 11 exam product only. */
  'examiner',
] as const;
export type Feature = (typeof FEATURES)[number];

/** What Première grants. Deliberately NOT 'examiner': the exam tier is a
 *  distinct product (Phase 11), not a subscription perk — see EALCH-MASTER-BUILD
 *  Phase 10/11. */
export const PREMIERE_FEATURES: Feature[] = [
  'levels.all',
  'coach.unlimited',
  'roleplay.unlimited',
  'audio.packs',
];

/** The features a plan carries. The single source the customerInfo mapping
 *  uses; nothing else may hand out feature lists. */
export function featuresForPlan(plan: Plan): Feature[] {
  return plan === 'free' ? [] : [...PREMIERE_FEATURES];
}

/* ─── Reading an entitlement ─────────────────────────────────────────────── */

/** Whether the entitlement is in force at `nowMs`. Absent expiry means "does
 *  not expire" (free tier, lifetime grant) — never "expired". */
export function entitlementActive(e: Entitlement, nowMs: number): boolean {
  return e.expiry === undefined || e.expiry > nowMs;
}

/** The one question screens ask. An expired entitlement grants nothing — the
 *  user is honestly back on free, not in a half-state. */
export function hasFeature(e: Entitlement, feature: Feature, nowMs: number): boolean {
  return entitlementActive(e, nowMs) && e.features.includes(feature);
}

/** Paying plan, in force. The read that replaces the deleted `premium`
 *  boolean; nothing may store this, only derive it. */
export function isPremium(e: Entitlement, nowMs: number): boolean {
  return e.plan !== 'free' && entitlementActive(e, nowMs);
}

/* ─── Gate predicates ────────────────────────────────────────────────────── */

/** Content bands free for everyone. Everything past A1 is Première ('levels.all'). */
export const FREE_BANDS = ['sons', 'a1'] as const;

/** True when `band` (a unit's level band, e.g. unitBand(id)) is behind the
 *  paywall for this user. */
export function levelLocked(e: Entitlement, band: string, nowMs: number): boolean {
  return !(FREE_BANDS as readonly string[]).includes(band) && !hasFeature(e, 'levels.all', nowMs);
}

/** The free role-play allowance, per day, in DISTINCT scenarios. Retrying or
 *  continuing the same scenario is always free — the cap is on breadth, not on
 *  practice. This is the number that makes planFreeDesc's "1 scenario per day"
 *  true instead of decorative. */
export const FREE_SCENARIOS_PER_DAY = 1;

/** The scenario a role-play attempt belongs to. Roleplay attempts are keyed
 *  `<scenarioId>.t<turnIx>` (see roleplay.tsx); strip the turn suffix. */
export function scenarioOfAttempt(itemId: string): string {
  return itemId.replace(/\.t\d+$/, '');
}

/** Minimal structural slice of AttemptEntry — enough to count scenarios
 *  without importing progress.logic (keeps the dependency arrow one-way).
 *  `date` is the local calendar day, same contract as AttemptEntry.date. */
export type ScenarioAttemptLike = { activity: string; date: string; itemId: string };

/** The distinct scenarios this user played on `day`. */
export function scenariosPlayedOn(attempts: ScenarioAttemptLike[], day: string): Set<string> {
  const out = new Set<string>();
  for (const a of attempts) {
    if (a.activity === 'roleplay' && a.date === day) out.add(scenarioOfAttempt(a.itemId));
  }
  return out;
}

/** True when starting `scenarioId` today would exceed the free allowance.
 *  A scenario already played today is never locked (finish what you started);
 *  an entitled user is never locked. */
export function roleplayLocked(
  e: Entitlement,
  attempts: ScenarioAttemptLike[],
  day: string,
  scenarioId: string,
  nowMs: number,
): boolean {
  if (hasFeature(e, 'roleplay.unlimited', nowMs)) return false;
  const played = scenariosPlayedOn(attempts, day);
  return played.size >= FREE_SCENARIOS_PER_DAY && !played.has(scenarioId);
}

/* ─── Mapping the Adapty profile (access levels) ─────────────────────────── */

// CF-15 amendment 2026-07-22 (Paul's decision, recorded in BF-02): Adapty
// replaced RevenueCat as the purchase infrastructure before any store account
// existed. Only this mapping, the purchases.ts adapter and the webhook fn
// changed — every gate still reads Entitlement.features, exactly as designed.

/** The Adapty dashboard ACCESS LEVEL identifiers. Pinned here so the
 *  dashboard, the webhook fn and this mapping cannot each invent a spelling.
 *  CC-B creates these two access levels in Adapty under exactly these ids. */
export const ACCESS_LEVEL_PREMIERE = 'premiere';
export const ACCESS_LEVEL_EXAM = 'exam';

/** Structural slice of Adapty's AdaptyProfile — only what the mapping reads,
 *  so tests need no SDK and an SDK upgrade cannot silently change what we
 *  depend on. Dates arrive as Date objects from the SDK but as ISO strings
 *  from a cache/JSON round trip, so both are accepted. */
export type AccessLevelLike = {
  isActive: boolean;
  vendorProductId: string;
  /** 'app_store' | 'play_store' | 'adapty' (Adapty's own web/Stripe channel). */
  store?: string;
  /** Absent means lifetime — Adapty sets no expiresAt on lifetime grants. */
  expiresAt?: Date | string | null;
  willRenew?: boolean;
  billingIssueDetectedAt?: Date | string | null;
};
export type ProfileLike = {
  accessLevels?: Record<string, AccessLevelLike | undefined>;
};

/** Which plan a Première product identifier is. CC-B names the store products
 *  with these substrings ('..._annual' / '..._monthly'); an unrecognized id
 *  reads as monthly — the cheaper claim, never the more generous one. */
function planOfProduct(productId: string): Plan {
  return /annual|yearly|year/i.test(productId) ? 'annual' : 'monthly';
}

function sourceOfStore(store: string | undefined): Entitlement['source'] {
  // 'adapty' is Adapty's own web-checkout channel, which bills through Stripe
  // (or Paddle) — the web seam, not an app store. Paystack never flows through
  // Adapty (it cannot route it — the whole reason the seam exists); a paystack
  // entitlement is written by its own checkout path, never by this mapping.
  return store === 'adapty' || store === 'stripe' ? 'stripe' : 'iap';
}

const epochMs = (v: Date | string | null | undefined): number | undefined => {
  if (v === null || v === undefined) return undefined;
  const ms = v instanceof Date ? v.getTime() : Date.parse(v);
  return Number.isFinite(ms) ? ms : undefined;
};

/** AdaptyProfile → Entitlement. The ONLY producer of a non-free entitlement in
 *  the app (the webhook fn mirrors server-side, the client never reads that
 *  mirror). Pure so the whole grant surface is table-testable. An access level
 *  with isActive false grants nothing — same as absent. */
export function entitlementFromProfile(userId: string, profile: ProfileLike): Entitlement {
  const levels = profile.accessLevels ?? {};
  const activeOnly = (l: AccessLevelLike | undefined) => (l && l.isActive ? l : undefined);
  const premiere = activeOnly(levels[ACCESS_LEVEL_PREMIERE]);
  const exam = activeOnly(levels[ACCESS_LEVEL_EXAM]);

  const features: Feature[] = premiere ? featuresForPlan(planOfProduct(premiere.vendorProductId)) : [];
  if (exam && !features.includes('examiner')) features.push('examiner');

  const e: Entitlement = {
    userId,
    plan: premiere ? planOfProduct(premiere.vendorProductId) : 'free',
    features,
    source: sourceOfStore((premiere ?? exam)?.store),
  };

  // Absent expiresAt means lifetime; a free mapping (no active levels) also
  // carries no expiry. Both mean "not expiring". A stale cached profile whose
  // expiresAt has passed must still deny locally — hasFeature enforces it.
  const expiry = epochMs(premiere?.expiresAt);
  if (expiry !== undefined) e.expiry = expiry;

  if (premiere?.billingIssueDetectedAt || exam?.billingIssueDetectedAt) e.billingIssue = true;
  if (premiere && typeof premiere.willRenew === 'boolean') e.willRenew = premiere.willRenew;

  return e;
}

/* ─── Currency detection ─────────────────────────────────────────────────── */

// The old settings screen captioned "Detected from your region" over a
// hardcoded 'USD'. This is the detection that caption always claimed. Returns
// null when the locale names no region we price — the caller keeps its default
// and must NOT claim detection happened.

/** Countries whose store price is EUR: the euro-area members (plus the
 *  micro-states that use the euro by agreement). EU members with their own
 *  currency (SE, PL, CZ, ...) deliberately fall through to null → USD default,
 *  because quoting them € would misstate what the store will charge. */
const EURO_REGIONS = new Set([
  'AT', 'BE', 'HR', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 'LV',
  'LT', 'LU', 'MT', 'NL', 'PT', 'SK', 'SI', 'AD', 'MC', 'SM', 'VA',
]);

/** Best-effort currency from BCP-47 locale tags (e.g. device locales).
 *  Null means "no confident answer" — never a silent USD. */
export function detectCurrency(locales: readonly string[]): 'USD' | 'EUR' | 'GBP' | 'CAD' | null {
  for (const tag of locales) {
    // The region subtag: 2 uppercase letters after a separator ('en-CA',
    // 'fr_CA'). Intl.Locale would be cleaner but is not guaranteed in Hermes.
    const m = /[-_]([A-Za-z]{2})(?:[-_]|$)/.exec(tag);
    const region = m?.[1]?.toUpperCase();
    if (!region) continue;
    if (region === 'US') return 'USD';
    if (region === 'CA') return 'CAD';
    if (region === 'GB') return 'GBP';
    if (EURO_REGIONS.has(region)) return 'EUR';
  }
  return null;
}
