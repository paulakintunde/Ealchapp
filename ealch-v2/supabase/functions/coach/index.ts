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

import { createClient } from "jsr:@supabase/supabase-js@2";
import {
  buildChain,
  DEFAULT_MODEL,
  type ChainEntry,
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

// Routing changes are rare and reads are not free, so the routed model is cached
// briefly. This is a cache, not state we rely on: instances are ephemeral, so a
// stale entry costs at most CONFIG_TTL_MS of delay on a routing flip.
const CONFIG_TTL_MS = 60_000;
let routedCache: { model: string; at: number } | null = null;

/** The model the OPR console routed for the `general` capability. Never throws:
 *  an unreachable config plane serves the documented default rather than an
 *  error, and is not cached, so the next request re-reads. */
async function routedModel(): Promise<string> {
  const now = Date.now();
  if (routedCache && now - routedCache.at < CONFIG_TTL_MS) return routedCache.model;
  try {
    const { data } = await serviceClient()
      .from("system_config")
      .select("config")
      .eq("id", "active")
      .maybeSingle();
    const m = (data?.config as { models?: { general?: unknown } } | null)?.models?.general;
    if (typeof m === "string" && m.trim()) {
      routedCache = { model: m.trim(), at: now };
      return routedCache.model;
    }
  } catch (_) { /* fall through to the default, uncached */ }
  return DEFAULT_MODEL;
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
    const { messages = [], lang = "fr", promptVersion = "v1", model: clientModel = null } =
      await req.json();
    const system = await activePrompt(promptVersion, lang);
    const history: Msg[] = messages.slice(-12); // bound the context

    const routed = await routedModel();
    const resolution = buildChain(routed, {
      hasSecret,
      aiApiModel: Deno.env.get("AI_API_MODEL"),
    });
    const chain = resolution.chain.map(toProvider);

    if (resolution.unknownModel) {
      // The console routed something we cannot serve. Someone must see this.
      posthog("coach_unknown_model", { requested: routed, served: resolution.routedModel });
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
