// Ealch v2 — `coach` Edge Function.
// The single LLM entry point for the app: Speak-Mode analysis, the "Why?"
// tutor, and Role Play. Secrets are injected here, server-side — the client
// only ever sends messages + non-sensitive config references.
//
// Provider chain (per the control-plane spec):
//   primary   = Kie.ai        (OpenAI-compatible, KIE_API_KEY)
//   secondary = NVIDIA NIM    (OpenAI-compatible, NVIDIA_API_KEY)
//   tertiary  = Anthropic     (ANTHROPIC_API_KEY) — optional direct fallback
// A module-scope circuit breaker skips the primary after repeated failures
// and re-probes it after a cooldown. Every trip/recovery is reported to
// PostHog when POSTHOG_API_KEY is set.
//
// Deploy:  supabase functions deploy coach --no-verify-jwt
// Secrets: supabase secrets set KIE_API_KEY=... NVIDIA_API_KEY=... [ANTHROPIC_API_KEY=...]

import { createClient } from "jsr:@supabase/supabase-js@2";

type Msg = { role: "user" | "assistant"; content: string };

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

async function openAICompatible(
  base: string,
  key: string,
  model: string,
  system: string,
  messages: Msg[],
): Promise<string> {
  const res = await fetch(`${base}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: system }, ...messages],
      max_tokens: 400,
      temperature: 0.7,
    }),
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) throw new Error(`${base} ${res.status}`);
  const json = await res.json();
  const reply = json?.choices?.[0]?.message?.content;
  if (!reply) throw new Error(`${base} empty completion`);
  return reply;
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
    body: JSON.stringify({ model, system, messages, max_tokens: 400 }),
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) throw new Error(`anthropic ${res.status}`);
  const json = await res.json();
  const reply = json?.content?.[0]?.text;
  if (!reply) throw new Error("anthropic empty completion");
  return reply;
}

function posthog(event: string, props: Record<string, unknown>) {
  const key = Deno.env.get("POSTHOG_API_KEY");
  if (!key) return;
  const host = Deno.env.get("POSTHOG_HOST") ?? "https://us.i.posthog.com";
  // fire-and-forget — observability must never block the reply
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
    const { messages = [], lang = "fr", model = "gpt-4o-mini", promptVersion = "v1" } =
      await req.json();
    const system = await activePrompt(promptVersion, lang);
    const history: Msg[] = messages.slice(-12); // bound the context

    const kieKey = Deno.env.get("KIE_API_KEY");
    const nvidiaKey = Deno.env.get("NVIDIA_API_KEY");
    const breakerOpen =
      BREAKER.failures >= BREAKER.threshold &&
      Date.now() - BREAKER.openedAt < BREAKER.cooldownMs;

    let reply: string | null = null;
    let provider = "";

    // 1 — primary: Kie.ai (unless the breaker is open)
    if (kieKey && !breakerOpen) {
      try {
        reply = await openAICompatible("https://api.kie.ai/v1", kieKey, model, system, history);
        provider = "kie";
        if (BREAKER.failures >= BREAKER.threshold) posthog("failover_recovered", { provider: "kie" });
        BREAKER.failures = 0;
      } catch (e) {
        BREAKER.failures += 1;
        if (BREAKER.failures === BREAKER.threshold) {
          BREAKER.openedAt = Date.now();
          posthog("failover_tripped", { provider: "kie", error: String(e) });
        }
      }
    }

    // 2 — secondary: NVIDIA NIM
    if (!reply && nvidiaKey) {
      try {
        reply = await openAICompatible(
          "https://integrate.api.nvidia.com/v1",
          nvidiaKey,
          Deno.env.get("NVIDIA_MODEL") ?? "meta/llama-3.1-70b-instruct",
          system,
          history,
        );
        provider = "nvidia";
        posthog("failover_served", { provider: "nvidia" });
      } catch (_) { /* fall through */ }
    }

    // 3 — tertiary: Anthropic direct
    if (!reply) {
      try {
        reply = await anthropicDirect(
          Deno.env.get("ANTHROPIC_MODEL") ?? "claude-sonnet-5",
          system,
          history,
        );
        provider = "anthropic";
      } catch (_) { /* fall through */ }
    }

    if (!reply) {
      posthog("coach_all_providers_failed", {});
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
