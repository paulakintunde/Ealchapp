// Ealch v2 — `grade-exam` Edge Function.
// The one place an open-response exam task (PO/PE) gets a band. Reuses
// coach's provider chain (routing.ts, same secrets, same cost ceiling) rather
// than inventing new infra — grading is just another LLM call, gated by the
// same "cost is a server-side decision" rule.
//
// THE ONE RULE THAT MATTERS HERE, per the retired "examiner v1" lesson
// (seed.sql, EALCH-MASTER-BUILD.md Phase 0 / Phase 8): a hallucinated band is
// worse than none. So this function:
//   - refuses to grade anything without a rubric AND a modelAnswer (the
//     client always has both — ExamTask requires them for open task types,
//     see validateExamTask — but this is the last line of defense, not the
//     first);
//   - grounds the prompt explicitly in that rubric/modelAnswer, never a
//     freeform "grade this essay";
//   - demands STRUCTURED JSON output and VALIDATES it (band is a real
//     SCORE_BAND, feedback is non-empty) before ever returning it — an
//     unparseable or out-of-range reply is treated exactly like a failed
//     provider call (try the next one, or fail the request), never patched
//     into something plausible-looking;
//   - labels every grade a PRACTICE ESTIMATE in the response, never an
//     equated score — the client is expected to render it as such (Le
//     Rapport / the exam screens), not repeat "band" as if it were official.
//
// Deploy:  supabase functions deploy grade-exam --no-verify-jwt
// Secrets: same as coach (NVIDIA_API_KEY / OPENROUTER_API_KEY / etc.) — no
// new secret needed, this shares the provider chain.
// --no-verify-jwt stays for the same reason as coach: guests still get a
// diagnostic mock, and the auth-uid path (Phase 9) is additive, not a gate.

import { createClient } from "jsr:@supabase/supabase-js@2";
import {
  buildChain,
  DEFAULT_CEILING,
  DEFAULT_MODEL,
  type ChainEntry,
  type CostTier,
  type ProviderName,
} from "../coach/routing.ts";

// Mirrors ealch-v2/src/content/schema.ts SCORE_BANDS. Duplicated rather than
// imported, same "two repos, one vocabulary, kept honest by convention" spirit
// as ealch-admin/src/db/schema.ts vs ealch-v2 (see enum-parity.test.ts) — Deno
// functions are a third deployment boundary this file does not attempt to
// bridge with a cross-package import. If SCORE_BANDS ever changes, this list
// must change with it; there is no test holding the two honest yet.
const SCORE_BANDS = ["a1", "a2", "b1", "b2", "c1", "c2"] as const;
type ScoreBand = (typeof SCORE_BANDS)[number];
const isScoreBand = (v: unknown): v is ScoreBand => typeof v === "string" && (SCORE_BANDS as readonly string[]).includes(v);

type RubricCriterion = { key: string; label: string; maxPoints: number; descriptors?: string[] };
type Rubric = { criteria: RubricCriterion[] };

type GradeRequest = {
  stimulus: string;
  candidateResponse: string;
  rubric: Rubric;
  modelAnswer: string;
  targetBand: ScoreBand;
  /** Spoken tasks only: labelled pacing proxies, already carrying their own
   *  disclaimer (see deliveryNote client-side). Absent when nothing was
   *  measured — never an empty string. */
  delivery?: string;
  /** Interaction tasks only: which of the document's withheld facts the
   *  candidate actually got out of the recorded examiner. Unlike delivery this
   *  is DIRECT evidence, so it is placed with the transcript, not fenced. */
  coverage?: string;
  lang: "fr" | "en";
  deviceId?: string | null;
};

type Grade = { band: ScoreBand; feedback: string };

function serviceClient() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
}

/** Same subject-key/quota mechanics as coach — see coach/index.ts's
 *  subjectKey/callerUid/bumpTurn for the full rationale (cost limiter, not a
 *  security boundary; fails open on a quota-plane outage). Reuses the SAME
 *  coach_usage table and coach_bump RPC — nothing about either is coach-
 *  specific — but under a "grade:"-prefixed subject key and its OWN
 *  system_config limit (gradeFreeTurnsPerDay), so grading has a genuinely
 *  separate daily budget from coach turns, not a shared one, per the Phase 10
 *  gating map listing the Examiner as separately gated from the coach. */
function subjectKey(req: Request, deviceId: unknown): string {
  if (typeof deviceId === "string" && deviceId.trim()) return `dev:${deviceId.trim().slice(0, 64)}`;
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0]?.trim();
  return ip ? `ip:${ip}` : "anon";
}

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

const GRADE_FREE_TURNS_DEFAULT = 5;

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

let routedCache: { model: string; ceiling: CostTier; freeTurnsPerDay: number; at: number } | null = null;
const CONFIG_TTL_MS = 60_000;
const TIERS: CostTier[] = ["cheap", "standard", "premium"];
const isTier = (v: unknown): v is CostTier => typeof v === "string" && (TIERS as string[]).includes(v);

async function routing(): Promise<{ model: string; ceiling: CostTier; freeTurnsPerDay: number }> {
  const now = Date.now();
  if (routedCache && now - routedCache.at < CONFIG_TTL_MS) return routedCache;
  try {
    const { data } = await serviceClient().from("system_config").select("config").eq("id", "active").maybeSingle();
    const cfg = data?.config as { models?: { general?: unknown }; coachCostCeiling?: unknown; gradeFreeTurnsPerDay?: unknown } | null;
    const m = cfg?.models?.general;
    if (typeof m === "string" && m.trim()) {
      const turns = cfg?.gradeFreeTurnsPerDay;
      const routed = {
        model: m.trim(),
        ceiling: isTier(cfg?.coachCostCeiling) ? cfg.coachCostCeiling : DEFAULT_CEILING,
        freeTurnsPerDay: typeof turns === "number" && Number.isFinite(turns) && turns >= 0 ? Math.floor(turns) : GRADE_FREE_TURNS_DEFAULT,
        at: now,
      };
      routedCache = routed;
      return routed;
    }
  } catch (_) { /* fall through to the default, uncached */ }
  return { model: DEFAULT_MODEL, ceiling: DEFAULT_CEILING, freeTurnsPerDay: GRADE_FREE_TURNS_DEFAULT };
}

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

/** Unlike coach (freeform chat), grading demands JSON — so every provider
 *  call here asks for `response_format: json_object` where the API accepts
 *  it, and the caller (gradeOnce) still validates the result independently
 *  rather than trusting the flag. */
async function openAICompatibleJson(base: string, key: string, model: string, system: string, user: string): Promise<string> {
  const res = await fetch(`${base.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: system }, { role: "user", content: user }],
      max_tokens: 500,
      temperature: 0.3,
      response_format: { type: "json_object" },
    }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) {
    // The provider's own words. `${base} 400` alone cannot distinguish a bad
    // model id from an unsupported response_format from an expired key, and
    // those need three different fixes.
    const detail = await res.text().catch(() => "");
    throw new Error(`${base} ${res.status}: ${detail.slice(0, 300)}`);
  }
  const json = await res.json();
  const reply = json?.choices?.[0]?.message?.content;
  if (!reply) throw new Error(`${base} empty completion`);
  return String(reply).replace(/<think>[\s\S]*?<\/think>/g, "").trim();
}

async function anthropicDirectJson(model: string, system: string, user: string): Promise<string> {
  const key = Deno.env.get("ANTHROPIC_API_KEY");
  if (!key) throw new Error("no ANTHROPIC_API_KEY");
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
    body: JSON.stringify({ model, system, messages: [{ role: "user", content: user }], max_tokens: 500 }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) throw new Error(`anthropic ${res.status}`);
  const json = await res.json();
  const reply = json?.content?.[0]?.text;
  if (!reply) throw new Error("anthropic empty completion");
  return reply;
}

function toCaller(entry: ChainEntry): (system: string, user: string) => Promise<string> {
  const model = modelFor(entry);
  switch (entry.provider) {
    case "ai_api":
      return (sys, u) => openAICompatibleJson(Deno.env.get("AI_API_URL")!, Deno.env.get("AI_API_KEY")!, model, sys, u);
    case "openrouter":
      return (sys, u) => openAICompatibleJson("https://openrouter.ai/api/v1", Deno.env.get("OPENROUTER_API_KEY")!, model, sys, u);
    case "nvidia":
      return (sys, u) => openAICompatibleJson("https://integrate.api.nvidia.com/v1", Deno.env.get("NVIDIA_API_KEY")!, model, sys, u);
    case "anthropic":
      return (sys, u) => anthropicDirectJson(model, sys, u);
  }
}

/** Parse and VALIDATE a provider's reply. A reply that is not valid JSON, or
 *  whose band is not a real SCORE_BAND, or whose feedback is empty, is
 *  treated as a failure — never coerced into something usable. This is the
 *  function-level enforcement of "a hallucinated band is worse than none". */
function parseGrade(raw: string): Grade | null {
  let obj: unknown;
  try {
    obj = JSON.parse(raw);
  } catch {
    // Some models wrap JSON in prose despite the instruction; try to recover
    // the first {...} block once before giving up.
    const m = raw.match(/\{[\s\S]*\}/);
    if (!m) return null;
    try {
      obj = JSON.parse(m[0]);
    } catch {
      return null;
    }
  }
  if (typeof obj !== "object" || obj === null) return null;
  const o = obj as { band?: unknown; feedback?: unknown };
  if (!isScoreBand(o.band)) return null;
  if (typeof o.feedback !== "string" || !o.feedback.trim()) return null;
  return { band: o.band, feedback: o.feedback.trim() };
}

function gradingPrompt(req: Omit<GradeRequest, "deviceId">): { system: string; user: string } {
  const criteria = req.rubric.criteria
    .map((c) => `- ${c.label} (max ${c.maxPoints} pts)${c.descriptors?.length ? `: ${c.descriptors.join("; ")}` : ""}`)
    .join("\n");
  const system = req.lang === "fr"
    ? `Vous êtes un examinateur de français. Vous notez UNIQUEMENT selon la grille fournie, en comparant à la réponse modèle. N'inventez jamais un niveau non justifié par le texte. Répondez EXCLUSIVEMENT en JSON strict : {"band": "<a1|a2|b1|b2|c1|c2>", "feedback": "<2-4 phrases, en français, citant des exemples précis>"}. Aucun autre texte.`
    : `You are a French exam grader. Grade ONLY against the rubric provided, comparing to the model answer. Never invent a band the text does not support. Respond EXCLUSIVELY with strict JSON: {"band": "<a1|a2|b1|b2|c1|c2>", "feedback": "<2-4 sentences, in English, citing specific examples>"}. No other text.`;
  // Delivery is appended LAST and fenced, because it is the one input the
  // grader could most easily over-read. Everything above it is evidence of
  // what the candidate said; this is software's guess at how fast they said
  // it, and nothing heard the recording.
  const deliveryBlock = req.delivery?.trim()
    ? [
        "DELIVERY INDICATORS (software-measured, NOT heard by anyone):",
        req.delivery.trim(),
        "RULES FOR THE ABOVE: they may inform the fluency criterion ONLY. They are not evidence of pronunciation, accent or intelligibility, and you must not mention pronunciation or accent in your feedback. They may never move the band by more than the single fluency criterion is worth. If they conflict with the transcript, trust the transcript.",
      ].join("\n")
    : null;

  // Coverage sits WITH the evidence rather than fenced off alongside
  // delivery: it reports what the candidate demonstrably obtained, not a
  // proxy for how they sounded. For an interaction task the candidate
  // response is only their own questions, so without this the grader
  // cannot tell a candidate who got everything from one who got nothing.
  const coverageBlock = req.coverage?.trim()
    ? [
        "TASK COMPLETION (measured, not inferred):",
        req.coverage.trim(),
        "RULES FOR THE ABOVE: the candidate response above contains only the candidate's own turns; the examiner's replies are not shown. Judge task achievement on what was obtained, and judge language on the turns themselves. An item the candidate never asked about is an incomplete task, not a language error.",
      ].join("\n")
    : null;

  const user = [
    `STIMULUS:\n${req.stimulus}`,
    `RUBRIC:\n${criteria}`,
    `MODEL ANSWER:\n${req.modelAnswer}`,
    `TARGET BAND: ${req.targetBand}`,
    `CANDIDATE RESPONSE:\n${req.candidateResponse}`,
    ...(coverageBlock ? [coverageBlock] : []),
    ...(deliveryBlock ? [deliveryBlock] : []),
  ].join("\n\n");
  return { system, user };
}

/**
 * Every failure event also goes to the function log.
 *
 * `posthog()` returns silently when POSTHOG_API_KEY is unset, which it is on
 * this project — so a grading request that failed every provider produced a
 * 503 to the client and NOTHING anywhere else. The first real request after
 * deploy failed exactly that way, and the logs said only "booted".
 *
 * A total grading outage must be visible without a third-party analytics key
 * being configured, so the console gets it too. Console logs are the one place
 * a Supabase function's own operator can always read.
 */
function logEvent(event: string, props: Record<string, unknown>) {
  console.error(`[grade-exam] ${event}`, JSON.stringify(props));
}

function posthog(event: string, props: Record<string, unknown>) {
  logEvent(event, props);
  const key = Deno.env.get("POSTHOG_API_KEY");
  if (!key) return;
  const host = Deno.env.get("POSTHOG_HOST") ?? "https://us.i.posthog.com";
  fetch(`${host}/capture/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: key, event, distinct_id: "edge-grade-exam", properties: props }),
  }).catch(() => {});
}

Deno.serve(async (req) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  try {
    const body = (await req.json()) as Partial<GradeRequest>;
    const { stimulus, candidateResponse, rubric, modelAnswer, targetBand, lang = "fr", delivery, coverage, deviceId = null } = body;

    // The rule, enforced here too (not just by validateExamTask at authoring
    // time): nothing grades without a rubric and a model answer.
    if (!rubric?.criteria?.length || !modelAnswer?.trim()) {
      return new Response(JSON.stringify({ error: "cannot grade: task has no rubric/modelAnswer" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }
    if (!isScoreBand(targetBand)) {
      return new Response(JSON.stringify({ error: "invalid targetBand" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }
    if (typeof candidateResponse !== "string" || !candidateResponse.trim()) {
      return new Response(JSON.stringify({ error: "empty candidateResponse" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const routed = await routing();

    const uid = await callerUid(req);
    const subject = `grade:${uid ? `auth:${uid}` : subjectKey(req, deviceId)}`;
    const quota = await bumpTurn(subject, routed.freeTurnsPerDay);
    if (quota && !quota.allowed) {
      posthog("grade_turn_cap_reached", { used: quota.used, limit: routed.freeTurnsPerDay });
      return new Response(
        JSON.stringify({ error: "daily grading limit reached", reason: "turn_cap", used: quota.used, limit: routed.freeTurnsPerDay }),
        { status: 429, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }
    if (!quota) posthog("grade_quota_unavailable", { subject: subject.split(":")[0] });

    const resolution = buildChain(routed.model, { hasSecret, aiApiModel: Deno.env.get("AI_API_MODEL"), ceiling: routed.ceiling });
    const chain = resolution.chain.map((entry) => ({ entry, call: toCaller(entry) }));
    const { system, user } = gradingPrompt({
      stimulus: stimulus ?? "", candidateResponse, rubric, modelAnswer, targetBand, lang: lang === "en" ? "en" : "fr",
      // Only a real, non-empty string reaches the prompt: an empty delivery
      // line still invites the grader to speculate about delivery.
      ...(typeof delivery === "string" && delivery.trim() ? { delivery } : {}),
      ...(typeof coverage === "string" && coverage.trim() ? { coverage } : {}),
    });

    let grade: Grade | null = null;
    let provider = "";
    for (const { entry, call } of chain) {
      try {
        const raw = await call(system, user);
        const parsed = parseGrade(raw);
        if (parsed) {
          grade = parsed;
          provider = entry.provider;
          break;
        }
        // Valid completion, invalid content — worth knowing about, but try
        // the next provider rather than giving up immediately.
        posthog("grade_unparseable_reply", { provider: entry.provider, model: modelFor(entry) });
      } catch (e) {
        posthog("grade_provider_failed", { provider: entry.provider, model: modelFor(entry), error: String(e) });
      }
    }

    if (!grade) {
      posthog("grade_all_providers_failed", { routedModel: resolution.routedModel, chain: chain.map((c) => c.entry.provider) });
      return new Response(JSON.stringify({ error: "grading unavailable" }), {
        status: 503,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ band: grade.band, feedback: grade.feedback, practiceEstimate: true, provider, model: resolution.routedModel }),
      { headers: { ...cors, "Content-Type": "application/json" } },
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 400, headers: { ...cors, "Content-Type": "application/json" } });
  }
});
