// TTS quota — the pure decision layer.
//
// This file answers one question: given a caller's tier and how much they
// have already used, does THIS request fit inside their limit, and if not,
// which single window did it hit? It holds no secrets, opens no sockets, and
// touches no Deno globals, so it runs under `node --test` (see
// quota.test.ts). tts/index.ts does the Deno wiring — the caller's uid,
// the entitlements-table read, and the Postgres RPC call that produces the
// UsageSnapshot this file is handed — and calls straight into this module
// for every decision worth arguing about.
//
// Numbers are D-05/D-06 (.planning/phases/03-tts-security-hardening/
// 03-CONTEXT.md), locked by the user, not "reasonable defaults" — see
// DEFAULT_LIMITS. They are configuration values in system_config, and this
// file's DEFAULT_LIMITS is only the floor an unseeded/unreachable config
// plane falls back to (same discipline as coach/index.ts's FREE_TURNS_DEFAULT).

export type Tier = 'premium' | 'free' | 'guest';

export type EntitlementRow = { plan: string; expiry: string | null } | null;

/** D-07: a signed-in user with no active (non-expired, non-'free') plan is
 *  "free" for TTS-quota purposes, not a third tier. A null uid is always
 *  'guest' — D-01: guests get zero live synthesis, full stop; usage is
 *  never even consulted for them (see `decide`). Fail-closed: an expired
 *  or missing entitlement is 'free', never 'premium'. */
export function classifyTier(uid: string | null, entitlement: EntitlementRow, nowMs: number): Tier {
  if (!uid) return 'guest';
  if (!entitlement) return 'free';
  const active = !entitlement.expiry || new Date(entitlement.expiry).getTime() > nowMs;
  return entitlement.plan !== 'free' && active ? 'premium' : 'free';
}

/** D-05, tunable later from system_config (tts/index.ts reads and caches
 *  these; this module never reads config itself — see routing.ts's Env
 *  pattern for why the decision layer stays I/O-free). */
export type LimitConfig = {
  premiumDailyChars: number;
  premiumMonthlyChars: number;
  premiumDailyRequests: number;
  premiumBurstPerMinute: number;
  freePreviewChars: number;
};

export const DEFAULT_LIMITS: LimitConfig = {
  premiumDailyChars: 2000,
  premiumMonthlyChars: 25000,
  premiumDailyRequests: 30,
  premiumBurstPerMinute: 3,
  freePreviewChars: 2500,
};

/** The premium caller's usage AFTER this request's characters have already
 *  been added by the atomic RPC (tts_bump, see schema.sql) — this module
 *  only ever evaluates a post-increment snapshot, never reads-then-decides,
 *  because the atomicity lives in the database (Pattern 2), not here. */
export type UsageSnapshot = {
  dayChars: number;
  dayRequests: number;
  monthChars: number;
  minuteRequests: number;
};

export type QuotaReason =
  | 'daily_chars'
  | 'daily_requests'
  | 'monthly_chars'
  | 'burst'
  | 'free_preview_exhausted'
  | 'guest_not_allowed';

export type QuotaDecision = { allowed: boolean; reason: QuotaReason | null; tier: Tier };

/** Checked independently, in this order — a request under every OTHER
 *  window still fails if it is over just this one (Pitfall 2's named
 *  isolation requirement: burst must trip even while daily is fine). */
export function evaluatePremiumUsage(usage: UsageSnapshot, limits: LimitConfig): QuotaReason | null {
  if (usage.dayChars > limits.premiumDailyChars) return 'daily_chars';
  if (usage.dayRequests > limits.premiumDailyRequests) return 'daily_requests';
  if (usage.monthChars > limits.premiumMonthlyChars) return 'monthly_chars';
  if (usage.minuteRequests > limits.premiumBurstPerMinute) return 'burst';
  return null;
}

/** D-06: a single running LIFETIME total, never a day/month window — this
 *  signature has no time dimension anywhere, which is what makes "once"
 *  structural (Pitfall 3) rather than a very-low periodic number. The
 *  caller (tts/index.ts, via tts_bump_free_preview) owns incrementing the
 *  total; this function only ever compares it to the cap. */
export function evaluateFreePreview(totalCharsUsed: number, limits: LimitConfig): QuotaReason | null {
  return totalCharsUsed > limits.freePreviewChars ? 'free_preview_exhausted' : null;
}

/** The one call tts/index.ts makes after it has already bumped whichever
 *  counter applies. Guests are rejected outright (D-01) with no live
 *  synthesis at all — the coarse device/IP one-shot preview from D-02 was
 *  evaluated and NOT built for this phase (see 03-04-PLAN.md's objective
 *  for why); a guest's usage argument is accepted but never inspected, so
 *  passing a generous one changes nothing. */
export function decide(
  tier: Tier,
  usage: UsageSnapshot | null,
  freePreviewTotal: number | null,
  limits: LimitConfig,
): QuotaDecision {
  if (tier === 'guest') return { allowed: false, reason: 'guest_not_allowed', tier };
  if (tier === 'premium') {
    const reason = usage ? evaluatePremiumUsage(usage, limits) : null;
    return { allowed: reason === null, reason, tier };
  }
  const reason = freePreviewTotal !== null ? evaluateFreePreview(freePreviewTotal, limits) : null;
  return { allowed: reason === null, reason, tier };
}
