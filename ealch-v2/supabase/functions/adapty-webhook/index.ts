// Adapty webhook → public.entitlements mirror (Phase 10, vendor amended from
// RevenueCat 2026-07-22 — the retired revenuecat-webhook fn stays deployed but
// dormant: no secret set, so it 401s everything).
//
// ROLE: analytics/BI and the coach fn's premium exemption. NEVER the runtime
// entitlement authority — the app gates on the Adapty profile, refreshed on
// foreground, so a dropped or reordered webhook can not grant or revoke access
// for a paying user (master plan Phase 10, "Entitlement source of truth").
// Because the mirror is advisory, this function upserts a best-effort snapshot
// per user; the one refinement over last-write-wins is a MERGE across the two
// access levels, so a Première renewal event cannot clobber a separately held
// exam grant (and vice versa).
//
// Auth: Adapty sends the configured Authorization header value verbatim on
// every request. Set the same value in the function env as
// ADAPTY_WEBHOOK_SECRET and in the Adapty dashboard (CC-B step). No secret
// configured → every request is refused; fails closed rather than ingesting
// unauthenticated claims about who paid. Adapty's initial verification ping is
// an empty JSON object expecting 2xx+JSON — answered after the auth check.
//
// Field notes (verify against Adapty's webhook tester during CC-B): payload
// root carries profile_id / customer_user_id / event_type / event_properties;
// access_level_updated events name their access_level_id; expiration arrives
// as an ISO `subscription_expires_at`. Events for users who never went through
// identify() carry a null/anonymous customer_user_id and are acked + skipped.
//
// Deploy note: verify_jwt must be false (Adapty has no Supabase JWT); the
// shared-secret header IS the authentication.
import { createClient } from "npm:@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type",
};

/** Mirror of the app's featuresForPlan (entitlement.logic.ts) — the webhook
 *  cannot import the app's TS, so the mapping is restated here and the access
 *  level ids are pinned to the same strings (ACCESS_LEVEL_*). */
const PREMIERE_FEATURES = ["levels.all", "coach.unlimited", "roleplay.unlimited", "audio.packs"];
const LEVEL_PREMIERE = "premiere";
const LEVEL_EXAM = "exam";

/** Event types after which the named access is no longer held. CANCELLATION
 *  only turns off renewal (access continues to the paid-through date) and is
 *  deliberately NOT here; expiry handles the end date. */
const ENDING_TYPES = new Set(["subscription_expired", "subscription_refunded", "access_level_expired", "non_subscription_purchase_refunded"]);

/** Events that prove billing recovered (a successful charge). */
const CHARGE_TYPES = new Set(["subscription_initial_purchase", "subscription_started", "subscription_renewed", "trial_converted", "non_subscription_purchase"]);

type AdaptyEvent = {
  event_type?: string;
  customer_user_id?: string | null;
  access_level_id?: string | null;
  event_properties?: {
    access_level_id?: string | null;
    subscription_expires_at?: string | null;
    vendor_product_id?: string | null;
    store?: string | null;
    environment?: string | null;
  } | null;
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return new Response("method not allowed", { status: 405, headers: cors });

  const secret = Deno.env.get("ADAPTY_WEBHOOK_SECRET") ?? "";
  const auth = req.headers.get("authorization") ?? "";
  if (!secret || auth !== secret) {
    return new Response("unauthorized", { status: 401, headers: cors });
  }

  let body: AdaptyEvent;
  try {
    body = (await req.json()) as AdaptyEvent;
  } catch {
    return new Response("bad json", { status: 400, headers: cors });
  }

  // Adapty's endpoint-verification ping: an empty object, expecting 2xx JSON.
  if (!body.event_type && !body.customer_user_id) {
    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  const uid = body.customer_user_id ?? "";
  // Anonymous Adapty profiles (no identify() yet) are not auth uids — nothing
  // to mirror against. Acknowledge so Adapty stops retrying.
  if (!/^[0-9a-f-]{36}$/i.test(uid)) {
    return new Response(JSON.stringify({ ok: true, skipped: "non-uuid customer_user_id" }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  const props = body.event_properties ?? {};
  const type = (body.event_type ?? "").toLowerCase();

  // Which access level this event is about. access_level_updated names it;
  // otherwise infer from the product family: subscriptions are Première (the
  // only subscription access level), one-time purchases are the exam product.
  const level =
    body.access_level_id ?? props.access_level_id ??
    (type.startsWith("non_subscription") ? LEVEL_EXAM : LEVEL_PREMIERE);
  const isExam = level === LEVEL_EXAM;

  const expiresIso = props.subscription_expires_at ?? null;
  const expiresMs = expiresIso ? Date.parse(expiresIso) : NaN;
  const active = ENDING_TYPES.has(type)
    ? false
    : Number.isFinite(expiresMs)
      ? expiresMs > Date.now()
      : true; // a grant with no expiry (lifetime, or the event omits it) reads active

  const sb = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  );

  // Merge with the existing row so this event only rewrites ITS level's slice.
  const { data: existing } = await sb
    .from("entitlements")
    .select("plan, features, expiry, billing_issue")
    .eq("user_id", uid)
    .maybeSingle();

  const prior: string[] = Array.isArray(existing?.features) ? existing!.features : [];
  const keep = prior.filter((f) => (isExam ? f !== "examiner" : !PREMIERE_FEATURES.includes(f)));
  const granted = active ? (isExam ? ["examiner"] : PREMIERE_FEATURES) : [];
  const features = [...new Set([...keep, ...granted])];

  const plan = isExam
    ? (existing?.plan ?? "free")
    : active
      ? (/annual|year/i.test(props.vendor_product_id ?? "") ? "annual" : "monthly")
      : "free";

  const { error } = await sb.from("entitlements").upsert({
    user_id: uid,
    plan,
    features,
    source: (props.store ?? "").toLowerCase() === "adapty" ? "stripe" : "iap",
    store: props.store ?? null,
    product_id: props.vendor_product_id ?? null,
    status: type || null,
    expiry: isExam ? (existing?.expiry ?? null) : Number.isFinite(expiresMs) ? new Date(expiresMs).toISOString() : null,
    billing_issue: type.includes("billing_issue") ? true : CHARGE_TYPES.has(type) ? false : (existing?.billing_issue ?? false),
    environment: props.environment ?? null,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    // 5xx → Adapty retries with backoff; a transient DB error self-heals.
    return new Response(JSON.stringify({ ok: false, error: error.message }), {
      status: 500,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ ok: true }), {
    headers: { ...cors, "Content-Type": "application/json" },
  });
});
