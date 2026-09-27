// content-pack-url: the pure decision (PREMIUM-PACKS-SPEC.md section 6).
//
// Imports nothing, so node runs decide.test.ts with no Deno, no network and
// no secrets, the same arrangement as tts/quota.ts. index.ts is the I/O.
//
// ── Who is entitled: the authority, and the fallback ───────────────────────
//
// The spec names the Adapty server-side API as the authority and the
// `entitlements` mirror (written by adapty-webhook, advisory by its own
// header) as the fallback only when Adapty cannot answer. That is what this
// implements:
//
//   Adapty answered with a profile   -> its access levels decide, alone
//   Adapty answered 404              -> no profile, no purchase: NOT entitled
//                                       (profile_does_not_exist is an answer,
//                                       not an outage)
//   Adapty unreachable, 5xx, timeout,
//   unparseable, or no secret set    -> the entitlements mirror decides
//
// This is a deliberate departure from start-exam-attempt and coach, which
// read only the mirror (their D-04). Those gates spend money or record an
// attempt; this one hands out paid content, and the spec asked for the live
// authority. The mirror fallback keeps a subscriber downloading during an
// Adapty outage, at the cost that a refund Adapty knows about but the webhook
// has not delivered yet can still download for that window. Both paths fail
// CLOSED on their own errors: a mirror that cannot answer is never access.
//
// Adapty endpoint (docs checked 2026-09-27): GET
// https://api.adapty.io/api/v2/server-side-api/profile/ with
// `Authorization: Api-Key <secret>` and `adapty-customer-user-id: <uid>`
// (the app identifies Adapty with the Supabase auth uid, purchases.ts). The
// response's access_levels array carries access_level_id, expires_at,
// is_in_grace_period, and no is_active flag, so "active" is derived below.

export const PACK_NAMES = ['a2', 'b1', 'b2', 'c1', 'c2', 'exam'] as const;
export type PackName = (typeof PACK_NAMES)[number];

/** The access levels, pinned to the same strings as entitlement.logic.ts's
 *  ACCESS_LEVEL_PREMIERE / ACCESS_LEVEL_EXAM and adapty-webhook's copies. */
export const LEVEL_PREMIERE = 'premium';
export const LEVEL_EXAM = 'exam';

/** Spec section 6: a signed URL lives ten minutes. */
export const SIGNED_URL_TTL_S = 600;

/** The PRIVATE bucket (content-packs.logic.ts PACK_BUCKET). */
export const PACK_BUCKET = 'content-packs';

export const ADAPTY_PROFILE_URL = 'https://api.adapty.io/api/v2/server-side-api/profile/';

export function isPackName(v: unknown): v is PackName {
  return typeof v === 'string' && (PACK_NAMES as readonly string[]).includes(v);
}

/** Which access level unlocks a pack. Every band is Premiere; exams are
 *  their own level (decision 3). */
export function requiredLevel(pack: PackName): typeof LEVEL_PREMIERE | typeof LEVEL_EXAM {
  return pack === 'exam' ? LEVEL_EXAM : LEVEL_PREMIERE;
}

export type Access = { premium: boolean; exam: boolean };
export const NO_ACCESS: Access = { premium: false, exam: false };

/** Is one Adapty access level in force at nowMs? Adapty's server response has
 *  no is_active, so: an explicit is_active wins when present; a refund or a
 *  revoke ends it; a grace period keeps it; otherwise a null/absent expiry
 *  (lifetime) or one in the future. */
function levelActive(l: Record<string, unknown>, nowMs: number): boolean {
  if (typeof l.is_active === 'boolean') return l.is_active;
  if (l.is_refund === true || l.is_revoked === true) return false;
  if (l.is_in_grace_period === true) return true;
  const exp = l.expires_at;
  if (exp === null || exp === undefined) return true;
  const ms = typeof exp === 'string' ? Date.parse(exp) : NaN;
  return Number.isFinite(ms) && ms > nowMs;
}

/**
 * Adapty's get-profile body -> Access, or null when the body is not a
 * profile we can read (treated as an outage, so the mirror decides). Accepts
 * the documented `{ data: { access_levels: [...] } }` and, defensively, the
 * bare profile and an object keyed by access level id.
 */
export function accessFromAdaptyProfile(body: unknown, nowMs: number): Access | null {
  if (!body || typeof body !== 'object') return null;
  const root = body as Record<string, unknown>;
  const profile = (root.data && typeof root.data === 'object' ? root.data : root) as Record<string, unknown>;
  const raw = profile.access_levels;
  let levels: Record<string, unknown>[];
  if (Array.isArray(raw)) levels = raw.filter((x): x is Record<string, unknown> => !!x && typeof x === 'object');
  else if (raw && typeof raw === 'object') {
    levels = Object.entries(raw as Record<string, unknown>)
      .filter(([, v]) => !!v && typeof v === 'object')
      .map(([id, v]) => ({ access_level_id: id, ...(v as Record<string, unknown>) }));
  } else if (raw === null || raw === undefined) {
    // A profile that exists but has never bought anything.
    if (!('profile_id' in profile) && !('customer_user_id' in profile)) return null;
    levels = [];
  } else return null;

  const active = (id: string) =>
    levels.some((l) => (l.access_level_id ?? l.id) === id && levelActive(l, nowMs));
  return { premium: active(LEVEL_PREMIERE), exam: active(LEVEL_EXAM) };
}

/** A row of public.entitlements, as the mirror stores it. */
export type MirrorRow = { features?: unknown; expiry?: string | null } | null;

/** The mirror -> Access. Features are the app's vocabulary: 'levels.all' is
 *  Premiere, 'examiner' is the exam level. The mirror's `expiry` is
 *  Premiere's (adapty-webhook writes no expiry for the exam level), so it
 *  bounds Premiere only, the same reading coach and start-exam-attempt take.
 *  A missing or malformed row is no access. */
export function accessFromMirror(row: MirrorRow, nowMs: number): Access {
  if (!row) return NO_ACCESS;
  const features = Array.isArray(row.features) ? (row.features as unknown[]) : [];
  const exp = row.expiry ? Date.parse(row.expiry) : NaN;
  const inForce = !row.expiry || (Number.isFinite(exp) && exp > nowMs);
  return {
    premium: features.includes('levels.all') && inForce,
    exam: features.includes('examiner'),
  };
}

/** What asking Adapty produced. */
export type AdaptyOutcome =
  | { kind: 'profile'; body: unknown }
  | { kind: 'not_found' }
  | { kind: 'unavailable'; why: string }
  | { kind: 'unconfigured' };

/** Adapty first, the mirror when Adapty cannot answer. `mirror` is only
 *  called on that path, so a healthy request makes one outbound call. */
export async function resolveAccess(
  adapty: AdaptyOutcome,
  mirror: () => Promise<MirrorRow>,
  nowMs: number,
): Promise<{ access: Access; source: 'adapty' | 'mirror' }> {
  if (adapty.kind === 'not_found') return { access: NO_ACCESS, source: 'adapty' };
  if (adapty.kind === 'profile') {
    const a = accessFromAdaptyProfile(adapty.body, nowMs);
    if (a) return { access: a, source: 'adapty' };
  }
  let row: MirrorRow = null;
  try {
    row = await mirror();
  } catch {
    row = null;
  }
  return { access: accessFromMirror(row, nowMs), source: 'mirror' };
}

/** One pack as manifest-v2.json lists it (only the fields this reads). */
export type ManifestPack = { name: string; version: number; path: string; checksum: string; bytes: number };

export type Decision =
  | { ok: true; path: string; entry: ManifestPack }
  | { ok: false; status: 400 | 401 | 403 | 404; reason: 'bad_request' | 'auth_required' | 'not_entitled' | 'pack_not_published' };

/**
 * The whole gate, in the order the checks must run: who (a guest never gets a
 * pack: an entitlement hangs off an auth uid), what (a known pack name), may
 * they (the access level), and does it exist (the manifest names it). The
 * signed URL is only ever minted for `path`, which comes from the manifest,
 * never from the request.
 */
export function decide(input: {
  uid: string | null;
  pack: unknown;
  access: Access | null;
  manifestPacks: ManifestPack[] | null;
}): Decision {
  if (!input.uid) return { ok: false, status: 401, reason: 'auth_required' };
  if (!isPackName(input.pack)) return { ok: false, status: 400, reason: 'bad_request' };
  const access = input.access ?? NO_ACCESS;
  const allowed = requiredLevel(input.pack) === LEVEL_EXAM ? access.exam : access.premium;
  if (!allowed) return { ok: false, status: 403, reason: 'not_entitled' };
  const entry = (input.manifestPacks ?? []).find((p) => p.name === input.pack);
  if (!entry || typeof entry.path !== 'string' || !entry.path.startsWith(`${input.pack}/`)) {
    return { ok: false, status: 404, reason: 'pack_not_published' };
  }
  return { ok: true, path: entry.path, entry };
}
