// Ealch v2 — `content-pack-url` Edge Function (PREMIUM-PACKS-SPEC.md §6).
//
// Hands an entitled, signed-in user a 10-minute signed URL for ONE premium
// content pack in the PRIVATE `content-packs` bucket. Nothing else can read
// that bucket: it has no public URL and no select policy for anon or
// authenticated, so a pack reaches a device only through this function.
//
//   POST { pack: 'a2' | 'b1' | 'b2' | 'c1' | 'c2' | 'exam' }
//   200  { ok: true, url, pack, version, checksum, bytes, expiresIn: 600 }
//   401  { ok: false, reason: 'auth_required' }       guest or bad JWT
//   400  { ok: false, reason: 'bad_request' }         unknown pack name
//   403  { ok: false, reason: 'not_entitled' }        free user, lapsed, refunded
//   404  { ok: false, reason: 'pack_not_published' }  manifest-v2 lists no such pack
//   503  { ok: false, reason: 'unavailable' }         manifest or signing failed
//
// Entitlement: the Adapty server-side API is the authority, the entitlements
// mirror is the fallback when Adapty cannot answer. See decide.ts for the
// full rule and why it differs from coach / start-exam-attempt.
//
// Deploy:  supabase functions deploy content-pack-url --no-verify-jwt
//          (--no-verify-jwt like every function here: the JWT is verified
//          below, explicitly, so a refusal returns this app's JSON shape)
// Secrets: ADAPTY_SECRET_KEY (the Adapty SECRET api key, `secret_live_...`).
//          Unset, the function runs on the mirror alone and logs that it did.
//          SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY are
//          platform-injected.

import { createClient } from "jsr:@supabase/supabase-js@2";
import {
  ADAPTY_PROFILE_URL,
  PACK_BUCKET,
  SIGNED_URL_TTL_S,
  decide,
  isPackName,
  resolveAccess,
  type AdaptyOutcome,
  type ManifestPack,
  type MirrorRow,
} from "./decide.ts";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

function serviceClient() {
  return createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
}

function logEvent(event: string, props: Record<string, unknown>) {
  console.error(`[content-pack-url] ${event}`, JSON.stringify(props));
}

/** The caller's auth uid from their own JWT, or null. Same pattern as coach,
 *  start-exam-attempt and delete-account: never a client-asserted id. */
async function callerUid(req: Request): Promise<string | null> {
  const authHeader = req.headers.get("authorization");
  const url = Deno.env.get("SUPABASE_URL");
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
  if (!authHeader || !url || !anonKey) return null;
  try {
    const caller = createClient(url, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data, error } = await caller.auth.getUser();
    if (error || !data.user) return null;
    // An anonymous Supabase session is still a guest: no purchase can hang
    // off it (entitlement needs an identified profile).
    if ((data.user as { is_anonymous?: boolean }).is_anonymous) return null;
    return data.user.id;
  } catch {
    return null;
  }
}

/** Ask Adapty for this user's profile. Every failure mode is an outcome,
 *  never a throw, so resolveAccess can fall back to the mirror. */
async function askAdapty(uid: string): Promise<AdaptyOutcome> {
  const secret = Deno.env.get("ADAPTY_SECRET_KEY");
  if (!secret) return { kind: "unconfigured" };
  try {
    const res = await fetch(ADAPTY_PROFILE_URL, {
      headers: { Authorization: `Api-Key ${secret}`, "adapty-customer-user-id": uid, Accept: "application/json" },
      signal: AbortSignal.timeout(5_000),
    });
    if (res.status === 404) return { kind: "not_found" };
    if (!res.ok) return { kind: "unavailable", why: `http ${res.status}` };
    return { kind: "profile", body: await res.json() };
  } catch (e) {
    return { kind: "unavailable", why: String(e).slice(0, 120) };
  }
}

async function mirrorRow(uid: string): Promise<MirrorRow> {
  const { data, error } = await serviceClient()
    .from("entitlements")
    .select("features, expiry")
    .eq("user_id", uid)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (data as MirrorRow) ?? null;
}

/** manifest-v2.json from the public `content` bucket, read with the service
 *  role so a CDN-cached copy is never what decides the path. */
async function manifestPacks(): Promise<ManifestPack[] | null> {
  try {
    const { data, error } = await serviceClient().storage.from("content").download("manifest-v2.json");
    if (error || !data) return null;
    const m = JSON.parse(await data.text());
    return Array.isArray(m?.packs) ? (m.packs as ManifestPack[]) : null;
  } catch {
    return null;
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json(405, { ok: false, reason: "method_not_allowed" });

  let pack: unknown = null;
  try {
    pack = (await req.json())?.pack ?? null;
  } catch {
    // Treated as an unknown pack below.
  }

  const uid = await callerUid(req);
  // The two checks that need no outbound call run first, so a guest or a
  // malformed request costs neither an Adapty call nor a database read.
  if (!uid || !isPackName(pack)) {
    const d = decide({ uid, pack, access: null, manifestPacks: null });
    if (!d.ok) return json(d.status, { ok: false, reason: d.reason });
  }

  const now = Date.now();
  const { access, source } = await resolveAccess(await askAdapty(uid!), () => mirrorRow(uid!), now);
  const packs = await manifestPacks();
  const d = decide({ uid, pack, access, manifestPacks: packs });
  if (!d.ok) {
    if (d.reason === "pack_not_published" && packs === null) {
      logEvent("manifest_unavailable", { pack });
      return json(503, { ok: false, reason: "unavailable" });
    }
    logEvent("refused", { pack, reason: d.reason, source });
    return json(d.status, { ok: false, reason: d.reason });
  }

  const { data, error } = await serviceClient().storage.from(PACK_BUCKET).createSignedUrl(d.path, SIGNED_URL_TTL_S);
  if (error || !data?.signedUrl) {
    logEvent("sign_failed", { pack, path: d.path, error: error?.message ?? "no url" });
    return json(503, { ok: false, reason: "unavailable" });
  }
  if (source === "mirror") logEvent("served_from_mirror", { pack });
  return json(200, {
    ok: true,
    url: data.signedUrl,
    pack: d.entry.name,
    version: d.entry.version,
    checksum: d.entry.checksum,
    bytes: d.entry.bytes,
    expiresIn: SIGNED_URL_TTL_S,
  });
});
