// Ealch v2 — `coach` Edge Function.
// The single LLM entry point for the app: Speak-Mode analysis, the "Why?"
// tutor, and Role Play. Secrets are injected here, server-side — the client
// only ever sends messages + non-sensitive config references.
//
// Provider resolver order (first configured wins as PRIMARY, the rest form
// the failover chain, in order):
//   1. AI_API_*    — generic OpenAI-compatible override (AI_API_URL + AI_API_KEY [+ AI_API_MODEL])
//   2. OpenRouter  — OPENROUTER_API_KEY [+ OPENROUTER_MODEL]
//   3. NVIDIA      — NVIDIA_API_KEY [+ NVIDIA_AI_MODEL, NVIDIA_ENABLE_THINKING]
//   4. Anthropic   — ANTHROPIC_API_KEY [+ ANTHROPIC_MODEL]
// A module-scope circuit breaker skips the primary after repeated failures
// and re-probes it after a cooldown. Trips/recoveries go to PostHog when
// POSTHOG_API_KEY is set.
//
// Deploy:  supabase functions deploy coach --no-verify-jwt
// Secrets: supabase secrets set NVIDIA_API_KEY=... NVIDIA_AI_MODEL=... [ANTHROPIC_API_KEY=...]

import { createClient } from "jsr:@supabase/supabase-js@2";

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

async function activePrompt(promptVersion: string, lang: string): Promise<string> {
  try {
    const sb = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const { data } = await sb
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

async function anthropicDirect(system: string, messages: Msg[]): Promise<string> {
  const key = Deno.env.get("ANTHROPIC_API_KEY");
  if (!key) throw new Error("no ANTHROPIC_API_KEY");
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: Deno.env.get("ANTHROPIC_MODEL") ?? "claude-sonnet-5",
      system,
      messages,
      max_tokens: 500,
    }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`anthropic ${res.status}`);
  const json = await res.json();
  const reply = json?.content?.[0]?.text;
  if (!reply) throw new Error("anthropic empty completion");
  return reply;
}

/** Build the provider chain per the resolver order. */
function resolveProviders(): Provider[] {
  const chain: Provider[] = [];

  const aiUrl = Deno.env.get("AI_API_URL");
  const aiKey = Deno.env.get("AI_API_KEY");
  if (aiUrl && aiKey) {
    chain.push({
      name: "ai_api",
      call: (sys, msgs) =>
        openAICompatible(aiUrl, aiKey, Deno.env.get("AI_API_MODEL") ?? "default", sys, msgs),
    });
  }

  const orKey = Deno.env.get("OPENROUTER_API_KEY");
  if (orKey) {
    chain.push({
      name: "openrouter",
      call: (sys, msgs) =>
        openAICompatible(
          "https://openrouter.ai/api/v1",
          orKey,
          Deno.env.get("OPENROUTER_MODEL") ?? "meta-llama/llama-3.1-70b-instruct",
          sys,
          msgs,
        ),
    });
  }

  const nvKey = Deno.env.get("NVIDIA_API_KEY");
  if (nvKey) {
    const thinking = (Deno.env.get("NVIDIA_ENABLE_THINKING") ?? "").toLowerCase() === "true";
    chain.push({
      name: "nvidia",
      call: (sys, msgs) =>
        openAICompatible(
          "https://integrate.api.nvidia.com/v1",
          nvKey,
          Deno.env.get("NVIDIA_AI_MODEL") ?? "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
          sys,
          msgs,
          thinking
            // Reasoning on: give the model room to think, then strip the trace.
            ? { max_tokens: 2048, chat_template_kwargs: { thinking: true } }
            // Fast coaching: suppress the reasoning trace entirely.
            : { chat_template_kwargs: { thinking: false } },
        ),
    });
  }

  if (Deno.env.get("ANTHROPIC_API_KEY")) {
    chain.push({ name: "anthropic", call: anthropicDirect });
  }

  return chain;
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
    const { messages = [], lang = "fr", promptVersion = "v1" } = await req.json();
    const system = await activePrompt(promptVersion, lang);
    const history: Msg[] = messages.slice(-12); // bound the context

    const chain = resolveProviders();
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
          posthog("failover_served", { provider: chain[i].name });
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
      posthog("coach_all_providers_failed", { chain: chain.map((c) => c.name) });
      return new Response(JSON.stringify({ error: "all providers failed" }), {
        status: 503,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ reply, provider }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 400,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
