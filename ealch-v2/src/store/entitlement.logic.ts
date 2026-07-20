// The gating layer's pure core — every "may this user do X?" decision in one
// place, importable by screens and testable by node alone. Same discipline as
// progress.logic.ts: no react-native, no zustand, no expo imports, ever.
//
// The shape of the layer (Phase 10):
//   RevenueCat customerInfo ──entitlementFromCustomerInfo──► Entitlement
//   Entitlement + a feature key ──hasFeature──► boolean
//   screens ask the specific gate predicates (levelLocked, roleplayLocked),
//   never re-derive access from `plan`.
//
// `features` is the access vocabulary, `plan` is what was bought — see the
// Entitlement doc in progress-schema.ts for why they are separate questions.

import type { Entitlement, Plan } from '@/content/progress-schema';

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
 *  without importing progress.logic (keeps the dependency arrow one-way). */
export type ScenarioAttemptLike = { activity: string; day: string; itemId: string };

/** The distinct scenarios this user played on `day`. */
export function scenariosPlayedOn(attempts: ScenarioAttemptLike[], day: string): Set<string> {
  const out = new Set<string>();
  for (const a of attempts) {
    if (a.activity === 'roleplay' && a.day === day) out.add(scenarioOfAttempt(a.itemId));
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

/* ─── Mapping RevenueCat customerInfo ────────────────────────────────────── */

/** The RevenueCat dashboard entitlement identifiers. Pinned here so the
 *  dashboard, the webhook fn and this mapping cannot each invent a spelling.
 *  CC-B creates these two entitlements in RevenueCat under exactly these ids. */
export const RC_ENTITLEMENT_PREMIERE = 'premiere';
export const RC_ENTITLEMENT_EXAM = 'exam';

/** Structural slice of RevenueCat's CustomerInfo — only what the mapping
 *  reads, so tests need no SDK and an SDK upgrade cannot silently change what
 *  we depend on. */
export type CustomerInfoLike = {
  entitlements: {
    active: Record<
      string,
      {
        productIdentifier: string;
        /** ISO date string, or null for lifetime. */
        expirationDate: string | null;
        /** 'APP_STORE' | 'PLAY_STORE' | 'STRIPE' | ... */
        store: string;
        billingIssueDetectedAt?: string | null;
      }
    >;
  };
};

/** Which plan a Première product identifier is. CC-B names the store products
 *  with these substrings ('..._annual' / '..._monthly'); an unrecognized id
 *  reads as monthly — the cheaper claim, never the more generous one. */
function planOfProduct(productId: string): Plan {
  return /annual|yearly|year/i.test(productId) ? 'annual' : 'monthly';
}

function sourceOfStore(store: string): Entitlement['source'] {
  // Paystack never flows through RevenueCat (it cannot route it — the whole
  // reason the seam exists); a paystack entitlement is written by its own
  // checkout path, never by this mapping.
  return store === 'STRIPE' ? 'stripe' : 'iap';
}

/** CustomerInfo → Entitlement. The ONLY producer of a non-free entitlement in
 *  the app (the webhook fn mirrors server-side, the client never reads that
 *  mirror). Pure so the whole grant surface is table-testable. */
export function entitlementFromCustomerInfo(userId: string, info: CustomerInfoLike): Entitlement {
  const active = info.entitlements.active;
  const premiere = active[RC_ENTITLEMENT_PREMIERE];
  const exam = active[RC_ENTITLEMENT_EXAM];

  const features: Feature[] = premiere ? featuresForPlan(planOfProduct(premiere.productIdentifier)) : [];
  if (exam && !features.includes('examiner')) features.push('examiner');

  const e: Entitlement = {
    userId,
    plan: premiere ? planOfProduct(premiere.productIdentifier) : 'free',
    features,
    source: sourceOfStore((premiere ?? exam)?.store ?? ''),
  };

  // RevenueCat reports null expirationDate for lifetime grants; a free mapping
  // (no active entitlements) also carries no expiry. Both mean "not expiring".
  const expiryIso = premiere?.expirationDate;
  if (expiryIso) {
    const ms = Date.parse(expiryIso);
    if (Number.isFinite(ms)) e.expiry = ms;
  }

  if (premiere?.billingIssueDetectedAt || exam?.billingIssueDetectedAt) e.billingIssue = true;

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
