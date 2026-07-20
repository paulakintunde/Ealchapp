// RevenueCat webhook → public.entitlements mirror (Phase 10).
//
// ROLE: analytics/BI and the coach fn's premium exemption. NEVER the runtime
// entitlement authority — the app gates on RevenueCat customerInfo, refreshed
// on foreground, so a dropped or reordered webhook can not grant or revoke
// access for a paying user (master plan Phase 10, "Entitlement source of
// truth"). This function may therefore be simple: upsert the latest snapshot
// per user, last write wins.
//
// Auth: RevenueCat sends the configured Authorization header verbatim. Set the
// same value in the function env as REVENUECAT_WEBHOOK_SECRET and in the
// RevenueCat dashboard (CC-B step). No secret configured → every request is
// refused; this function fails closed rather than ingesting unauthenticated
// claims about who paid.
//
// Deploy note: verify_jwt must be false (RevenueCat has no Supabase JWT); the
// shared-secret header IS the authentication.
import { createClient } from "npm:@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, content-type",
};

/** The slice of a RevenueCat webhook body this mirror consumes.
 *  https://www.revenuecat.com/docs/integrations/webhooks — `event` carries the
 *  app_user_id, event type, entitlement ids, product, store and expiration. */
type RcEvent = {
  type?: string;
  app_user_id?: string;
  entitlement_ids?: string[] | null;
  product_id?: string;
  store?: string;
  environment?: string;
  expiration_at_ms?: number | null;
  period_type?: string;
};

/** Mirror of the app's featuresForPlan (entitlement.logic.ts) — the webhook
 *  cannot import the app's TS, so the mapping is restated here and the
 *  entitlement ids are pinned to the same strings (RC_ENTITLEMENT_*). */
const PREMIERE_FEATURES = ["levels.all", "coach.unlimited", "roleplay.unlimited", "audio.packs"];
const ENT_PREMIERE = "premiere";
const ENT_EXAM = "exam";

/** Event types that mean the entitlement list in this event is (still) held.
 *  EXPIRATION ends it; CANCELLATION only turns off renewal (access continues
 *  to the paid-through date), TRANSFER moves it (the event's app_user_id is
 *  the receiving user). */
const ENDING_TYPES = new Set(["EXPIRATION"]);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return new Response("method not allowed", { status: 405, headers: cors });

  const secret = Deno.env.get("REVENUECAT_WEBHOOK_SECRET") ?? "";
  const auth = req.headers.get("authorization") ?? "";
  if (!secret || auth !== secret) {
    return new Response("unauthorized", { status: 401, headers: cors });
  }

  let event: RcEvent;
  try {
    event = ((await req.json()) as { event?: RcEvent }).event ?? {};
  } catch {
    return new Response("bad json", { status: 400, headers: cors });
  }

  const uid = event.app_user_id ?? "";
  // RevenueCat anonymous ids ($RCAnonymousID:...) are not auth uids — nothing
  // to mirror against. Acknowledge so RevenueCat stops retrying.
  if (!/^[0-9a-f-]{36}$/i.test(uid)) {
    return new Response(JSON.stringify({ ok: true, skipped: "non-uuid app_user_id" }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  const type = (event.type ?? "").toUpperCase();
  const ids = ENDING_TYPES.has(type) ? [] : (event.entitlement_ids ?? []);
  const hasPremiere = ids.includes(ENT_PREMIERE);
  const hasExam = ids.includes(ENT_EXAM);

  const features = [...(hasPremiere ? PREMIERE_FEATURES : []), ...(hasExam ? ["examiner"] : [])];
  const plan = hasPremiere
    ? /annual|year/i.test(event.product_id ?? "")
      ? "annual"
      : "monthly"
    : "free";
  const source = (event.store ?? "").toUpperCase() === "STRIPE" ? "stripe" : "iap";

  const sb = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  );

  const { error } = await sb.from("entitlements").upsert({
    user_id: uid,
    plan,
    features,
    source,
    store: event.store ?? null,
    product_id: event.product_id ?? null,
    status: type.toLowerCase() || null,
    expiry: event.expiration_at_ms ? new Date(event.expiration_at_ms).toISOString() : null,
    billing_issue: type === "BILLING_ISSUE",
    environment: event.environment ?? null,
    updated_at: new Date().toISOString(),
  });

  if (error) {
    // 500 → RevenueCat retries with backoff; a transient DB error self-heals.
    return new Response(JSON.stringify({ ok: false, error: error.message }), {
      status: 500,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
  return new Response(JSON.stringify({ ok: true }), {
    headers: { ...cors, "Content-Type": "application/json" },
  });
});
