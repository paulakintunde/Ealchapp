// Ealch v2 — `coach` Edge Function.
// The single LLM entry point for the app: Speak-Mode analysis, the "Why?"
// tutor, and Role Play. Secrets are injected here, server-side — the client
// only ever sends messages + non-sensitive config references.
//
// PROVIDER SELECTION (Phase 3, CF-05/CF-06).
// The OPR console owns routing. `ai_routing` is synced into `system_config`,
// this function reads the active model from there (service-role), and
// routing.ts maps that model id to the provider that serves it. Adding a model
// on a provider we already implement is a console edit; a genuinely new
// provider needs code here, because something has to know how to call it.
//
// This replaced a fixed chain that picked whichever secret happened to be set
// first (AI_API → OpenRouter → NVIDIA → Anthropic) and dropped the `model` the
// client sent. That meant flipping routing in the console changed nothing live.
//
// The client still sends `model` (src/services/llm.ts) and it is still ignored
// for provider choice, deliberately: a request that names its own provider can
// name the most expensive one, and this chain can reach Anthropic. Cost is a
// server-side decision. The client's value is logged when it disagrees with
// routing, because that disagreement means clients are running stale config.
//
// A module-scope circuit breaker skips the primary after repeated failures and
// re-probes it after a cooldown. It is best-effort only: edge instances are
// ephemeral and per-instance, so the breaker is a latency optimisation, never a
// guarantee. Trips/recoveries go to PostHog when POSTHOG_API_KEY is set.
//
// Deploy:  supabase functions deploy coach --no-verify-jwt
// Secrets: supabase secrets set NVIDIA_API_KEY=... NVIDIA_AI_MODEL=... [ANTHROPIC_API_KEY=...]
// SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY are
// auto-injected by the platform, same as every other function here — no
// manual secret needed for the Phase 9 auth.uid() check (see callerUid).
// --no-verify-jwt stays: this function must keep serving guests too, so the
// platform-level JWT gate would be the wrong tool even post-Phase-9.

import { createClient } from "jsr:@supabase/supabase-js@2";
import {
  buildChain,
  DEFAULT_CEILING,
  DEFAULT_MODEL,
  type ChainEntry,
  type CostTier,
  type ProviderName,
} from "./routing.ts";

type Msg = { role: "user" | "assistant"; content: string };

type Provider = {
  name: string;
  call: (system: string, messages: Msg[]) => Promise<string>;
};

const BREAKER = { failures: 0, threshold: 3, openedAt: 0, cooldownMs: 60_000 };

const FALLBACK_PROMPT = `You are Camille, an elegant, encouraging French coach inside the Ealch app.
Answer the learner's question about French concisely (max 120 words).
Explain the WHY behind corrections — register, liaisons, grammar logic.
When the user writes in French, gently correct errors before answering.
Reply in the language indicated by "lang" ({{lang}}), quoting French examples in « guillemets ».`;

function serviceClient() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
}

async function activePrompt(promptVersion: string, lang: string): Promise<string> {
  try {
    const { data } = await serviceClient()
      .from("system_prompts")
      .select("body")
      .eq("key", "coach")
      .eq("version", promptVersion)
      .eq("active", true)
      .maybeSingle();
    if (data?.body) return data.body.replaceAll("{{lang}}", lang);
  } catch (_) { /* fall through */ }
  return FALLBACK_PROMPT.replaceAll("{{lang}}", lang);
}

// Routing changes are rare and reads are not free, so the routing is cached
// briefly. This is a cache, not state we rely on: instances are ephemeral, so a
// stale entry costs at most CONFIG_TTL_MS of delay on a routing flip.
const CONFIG_TTL_MS = 60_000;
let routedCache: { routing: Routing; at: number } | null = null;

type Routing = { model: string; ceiling: CostTier; freeTurnsPerDay: number };

/** Free-tier coach turns per subject per day when config does not say. Config
 *  drives it, so this default is only ever a floor for an unseeded database. */
const FREE_TURNS_DEFAULT = 20;

const TIERS: CostTier[] = ["cheap", "standard", "premium"];
const isTier = (v: unknown): v is CostTier => typeof v === "string" && (TIERS as string[]).includes(v);

/** What the OPR console routed for the `general` capability: the model, and the
 *  cost ceiling the coach may not exceed.
 *
 *  Never throws. An unreachable config plane serves the documented default at
 *  the default ceiling rather than erroring, and that answer is not cached, so
 *  the next request re-reads instead of being stuck with it.
 *
 *  An absent or malformed ceiling falls back to DEFAULT_CEILING rather than to
 *  "unlimited": a config plane that cannot tell us the limit is not permission
 *  to spend. */
async function routing(): Promise<Routing> {
  const now = Date.now();
  if (routedCache && now - routedCache.at < CONFIG_TTL_MS) return routedCache.routing;
  try {
    const { data } = await serviceClient()
      .from("system_config")
      .select("config")
      .eq("id", "active")
      .maybeSingle();
    const cfg = data?.config as
      | { models?: { general?: unknown }; coachCostCeiling?: unknown; coachFreeTurnsPerDay?: unknown }
      | null;
    const m = cfg?.models?.general;
    if (typeof m === "string" && m.trim()) {
      const turns = cfg?.coachFreeTurnsPerDay;
      const routed: Routing = {
        model: m.trim(),
        ceiling: isTier(cfg?.coachCostCeiling) ? cfg.coachCostCeiling : DEFAULT_CEILING,
        freeTurnsPerDay:
          typeof turns === "number" && Number.isFinite(turns) && turns >= 0
            ? Math.floor(turns)
            : FREE_TURNS_DEFAULT,
      };
      routedCache = { routing: routed, at: now };
      return routed;
    }
  } catch (_) { /* fall through to the default, uncached */ }
  return { model: DEFAULT_MODEL, ceiling: DEFAULT_CEILING, freeTurnsPerDay: FREE_TURNS_DEFAULT };
}

/** Who this turn is billed against.
 *
 *  Layered on purpose so it improves without another edge deploy: a client that
 *  sends a device id gets a device-scoped cap, and everyone else is capped by
 *  IP. Both are spoofable, and IP is worse than spoofable — a school or an
 *  office behind one NAT shares a single quota. That collateral is the price of
 *  capping cost before an identity substrate exists, and it is why this is a
 *  cost limiter and not a security boundary. Phase 9 replaces all of this with
 *  the authenticated uid. */
function subjectKey(req: Request, deviceId: unknown): string {
  if (typeof deviceId === "string" && deviceId.trim()) {
    return `dev:${deviceId.trim().slice(0, 64)}`;
  }
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0]?.trim();
  return ip ? `ip:${ip}` : "anon";
}

/** Phase 9: verify the caller's own JWT (never trust a client-asserted id) and
 *  return their auth uid, or null for a guest/unauthenticated call — which is
 *  still allowed; only the subject key it gets downgrades to device/IP. Same
 *  pattern as supabase/functions/delete-account/index.ts: an anon-key client
 *  with the caller's bearer token forwarded, so an expired or forged token
 *  simply fails getUser() rather than being trusted. SUPABASE_ANON_KEY is
 *  auto-injected by the platform, same as SUPABASE_URL. */
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
    return data.user.id;
  } catch {
    return null;
  }
}

/** Bump the day's counter and report whether this turn is allowed.
 *
 *  Returns null when the quota plane cannot answer, and the caller treats that
 *  as allowed. Failing OPEN is the deliberate choice: this guards margin, not
 *  access, and a database blip must not take the coach down. The tradeoff is
 *  that an outage is also uncapped, which is why the failure is logged. */
async function bumpTurn(key: string, limit: number): Promise<{ used: number; allowed: boolean } | null> {
  try {
    const { data, error } = await serviceClient().rpc("coach_bump", {
      p_key: key,
      p_day: new Date().toISOString().slice(0, 10),
      p_limit: limit,
    });
    const row = Array.isArray(data) ? data[0] : null;
    if (error || !row) return null;
    return { used: Number(row.used), allowed: !!row.allowed };
  } catch (_) {
    return null;
  }
}

/** Phase 10: whether this auth uid holds unlimited coach turns, per the
 *  entitlements mirror (fed by the revenuecat-webhook fn). FAIL-CLOSED to
 *  capping: any error, missing table or missing row reads as "not exempt" —
 *  the free cap applies, never a free unlimited. The mirror lagging a fresh
 *  purchase by a webhook delivery is acceptable: the app's paywall state is
 *  driven by customerInfo, and the next turn after the webhook lands is
 *  uncapped. */
async function hasUnlimitedCoach(uid: string): Promise<boolean> {
  try {
    const { data, error } = await serviceClient()
      .from("entitlements")
      .select("features, expiry")
      .eq("user_id", uid)
      .maybeSingle();
    if (error || !data) return false;
    const features: string[] = Array.isArray(data.features) ? data.features : [];
    if (!features.includes("coach.unlimited")) return false;
    return !data.expiry || new Date(data.expiry).getTime() > Date.now();
  } catch (_) {
    return false;
  }
}

/** Strip <think>…</think> blocks reasoning models prepend to replies. */
function stripThinking(text: string): string {
  return text.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
}

async function openAICompatible(
  base: string,
  key: string,
  model: string,
  system: string,
  messages: Msg[],
  extra?: Record<string, unknown>,
): Promise<string> {
  const res = await fetch(`${base.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: system }, ...messages],
      max_tokens: extra?.max_tokens ?? 500,
      temperature: 0.7,
      ...extra,
    }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`${base} ${res.status}`);
  const json = await res.json();
  const reply = json?.choices?.[0]?.message?.content;
  if (!reply) throw new Error(`${base} empty completion`);
  return stripThinking(String(reply));
}

async function anthropicDirect(model: string, system: string, messages: Msg[]): Promise<string> {
  const key = Deno.env.get("ANTHROPIC_API_KEY");
  if (!key) throw new Error("no ANTHROPIC_API_KEY");
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({ model, system, messages, max_tokens: 500 }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`anthropic ${res.status}`);
  const json = await res.json();
  const reply = json?.content?.[0]?.text;
  if (!reply) throw new Error("anthropic empty completion");
  return reply;
}

/** Which providers are actually configured. routing.ts decides what that means
 *  for the chain; this only reports presence. */
function hasSecret(p: ProviderName): boolean {
  switch (p) {
    case "ai_api":
      return !!(Deno.env.get("AI_API_URL") && Deno.env.get("AI_API_KEY"));
    case "openrouter":
      return !!Deno.env.get("OPENROUTER_API_KEY");
    case "nvidia":
      return !!Deno.env.get("NVIDIA_API_KEY");
    case "anthropic":
      return !!Deno.env.get("ANTHROPIC_API_KEY");
  }
}

/** A fallback provider serves its own default model: asking OpenRouter for
 *  `nvidia/nemotron-…` would 404. The primary serves exactly what was routed. */
function modelFor(entry: ChainEntry): string {
  if (entry.role === "primary" && entry.model) return entry.model;
  switch (entry.provider) {
    case "ai_api":
      return Deno.env.get("AI_API_MODEL") ?? "default";
    case "openrouter":
      return Deno.env.get("OPENROUTER_MODEL") ?? "meta-llama/llama-3.1-70b-instruct";
    case "nvidia":
      return Deno.env.get("NVIDIA_AI_MODEL") ?? DEFAULT_MODEL;
    case "anthropic":
      return Deno.env.get("ANTHROPIC_MODEL") ?? "claude-sonnet-5";
  }
}

function toProvider(entry: ChainEntry): Provider {
  const model = modelFor(entry);
  switch (entry.provider) {
    case "ai_api":
      return {
        name: "ai_api",
        call: (sys, msgs) =>
          openAICompatible(Deno.env.get("AI_API_URL")!, Deno.env.get("AI_API_KEY")!, model, sys, msgs),
      };
    case "openrouter":
      return {
        name: "openrouter",
        call: (sys, msgs) =>
          openAICompatible("https://openrouter.ai/api/v1", Deno.env.get("OPENROUTER_API_KEY")!, model, sys, msgs),
      };
    case "nvidia": {
      const thinking = (Deno.env.get("NVIDIA_ENABLE_THINKING") ?? "").toLowerCase() === "true";
      return {
        name: "nvidia",
        call: (sys, msgs) =>
          openAICompatible(
            "https://integrate.api.nvidia.com/v1",
            Deno.env.get("NVIDIA_API_KEY")!,
            model,
            sys,
            msgs,
            thinking
              // Reasoning on: give the model room to think, then strip the trace.
              ? { max_tokens: 2048, chat_template_kwargs: { thinking: true } }
              // Fast coaching: suppress the reasoning trace entirely.
              : { chat_template_kwargs: { thinking: false } },
          ),
      };
    }
    case "anthropic":
      return { name: "anthropic", call: (sys, msgs) => anthropicDirect(model, sys, msgs) };
  }
}

function posthog(event: string, props: Record<string, unknown>) {
  const key = Deno.env.get("POSTHOG_API_KEY");
  if (!key) return;
  const host = Deno.env.get("POSTHOG_HOST") ?? "https://us.i.posthog.com";
  fetch(`${host}/capture/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: key, event, distinct_id: "edge-coach", properties: props }),
  }).catch(() => {});
}

Deno.serve(async (req) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  try {
    // `model` is accepted and deliberately not obeyed — see the header note.
    const {
      messages = [],
      lang = "fr",
      promptVersion = "v1",
      model: clientModel = null,
      deviceId = null,
    } = await req.json();

    const routed = await routing();

    // Check the quota before spending a provider call, not after.
    //
    // Phase 9: a signed-in caller gets a real per-user cap immune to device
    // swapping, instead of the spoofable device/IP fallback. Guests keep
    // exactly today's behavior — this is additive, not a gate.
    //
    // Phase 10: a signed-in caller whose entitlements-mirror row carries
    // 'coach.unlimited' skips the cap (the exemption this comment used to
    // promise). The check is server-side against the webhook-fed mirror —
    // never a client claim — and fails closed to capping. Guests can never be
    // exempt: an entitlement hangs off an auth uid by construction.
    const uid = await callerUid(req);
    const subject = uid ? `auth:${uid}` : subjectKey(req, deviceId);
    const exempt = uid ? await hasUnlimitedCoach(uid) : false;
    const quota = exempt ? null : await bumpTurn(subject, routed.freeTurnsPerDay);
    if (quota && !quota.allowed) {
      posthog("coach_turn_cap_reached", { used: quota.used, limit: routed.freeTurnsPerDay });
      // 429 with a machine-readable reason: Phase 10 turns this into the paywall
      // trigger, and llm.ts already degrades to canned coaching on a failure.
      return new Response(
        JSON.stringify({ error: "daily coach limit reached", reason: "turn_cap", used: quota.used, limit: routed.freeTurnsPerDay }),
        { status: 429, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }
    if (!quota && !exempt) posthog("coach_quota_unavailable", { subject: subject.split(":")[0] });

    const system = await activePrompt(promptVersion, lang);
    const history: Msg[] = messages.slice(-12); // bound the context
    const resolution = buildChain(routed.model, {
      hasSecret,
      aiApiModel: Deno.env.get("AI_API_MODEL"),
      ceiling: routed.ceiling,
    });
    const chain = resolution.chain.map(toProvider);

    if (resolution.unknownModel) {
      // The console routed something we cannot serve. Someone must see this.
      posthog("coach_unknown_model", { requested: routed.model, served: resolution.routedModel });
    }
    if (resolution.routeAboveCeiling) {
      // The console asked to spend above the hard rule. Refused, and said so.
      posthog("coach_route_above_ceiling", {
        routedModel: resolution.routedModel,
        ceiling: routed.ceiling,
        served: resolution.chain[0]?.provider ?? null,
      });
    }
    if (resolution.routedProviderUnavailable) {
      posthog("coach_routed_provider_unavailable", {
        routedModel: resolution.routedModel,
        fallbacks: resolution.chain.map((c) => c.provider),
      });
    }
    if (typeof clientModel === "string" && clientModel && clientModel !== resolution.routedModel) {
      // Not an error: it means clients are running config older than the console.
      posthog("coach_client_model_ignored", { clientModel, routedModel: resolution.routedModel });
    }

    const breakerOpen =
      BREAKER.failures >= BREAKER.threshold &&
      Date.now() - BREAKER.openedAt < BREAKER.cooldownMs;

    let reply: string | null = null;
    let provider = "";

    for (let i = 0; i < chain.length && !reply; i++) {
      // The breaker only gates the primary; fallbacks are always tried.
      if (i === 0 && breakerOpen) continue;
      try {
        reply = await chain[i].call(system, history);
        provider = chain[i].name;
        if (i === 0) {
          if (BREAKER.failures >= BREAKER.threshold) {
            posthog("failover_recovered", { provider: chain[i].name });
          }
          BREAKER.failures = 0;
        } else {
          posthog("failover_served", { provider: chain[i].name, routedModel: resolution.routedModel });
        }
      } catch (e) {
        if (i === 0) {
          BREAKER.failures += 1;
          if (BREAKER.failures === BREAKER.threshold) {
            BREAKER.openedAt = Date.now();
            posthog("failover_tripped", { provider: chain[i].name, error: String(e) });
          }
        }
      }
    }

    if (!reply) {
      posthog("coach_all_providers_failed", {
        routedModel: resolution.routedModel,
        chain: chain.map((c) => c.name),
      });
      return new Response(JSON.stringify({ error: "all providers failed" }), {
        status: 503,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ reply, provider, model: resolution.routedModel }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 400,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
