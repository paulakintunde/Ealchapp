// Provider dispatch — a trimmed, Node-adapted port of
// ealch-v2/supabase/functions/coach/index.ts's openAICompatible()/
// anthropicDirect(), the same fetch shapes the in-app chat coach already
// uses. Ported rather than shared as a package: the coach runs in a Deno
// edge function (Deno.env.get), this runs in the admin's Node server
// (process.env) — the HTTP contracts are identical, the runtime isn't.
//
// New env vars, prefixed CONTENT_ rather than reusing the coach's bare
// ANTHROPIC_API_KEY etc.: those names are Supabase Edge Function secrets
// today (not present in this repo's .env at all — confirmed empty), and
// giving the admin's own key its own name avoids ever accidentally wiring
// content generation to whatever the coach happens to have configured.
// Add the ones you need to ealch-admin/.env:
//   CONTENT_ANTHROPIC_API_KEY
//   CONTENT_OPENAI_API_KEY
//   CONTENT_NVIDIA_API_KEY      (NIM catalog — same endpoint the chat coach uses)
//   CONTENT_OPENROUTER_API_KEY  (aggregator — serves Qwen3, DeepSeek R1, many others)
//   CONTENT_KIEAI_API_KEY       (kie.ai's own aggregator — see docs.kie.ai)
//   CONTENT_AI_API_URL + CONTENT_AI_API_KEY   (any OTHER generic OpenAI-compatible endpoint)
//
// One provider needs NO env var: 'mock' returns fixed, clearly-tagged test
// data with no network call — route the 'content' capability to it on the
// AI Routing page to exercise the Generate -> Review -> Publish flow for
// free, with no key required. See mockDispatch below.

interface CallOpts {
  provider: string; // ai_models.provider — see the PROVIDERS map below for the exact strings this dispatches on
  model: string;     // ai_models.apiModelId (falls back to .name) — the literal string sent as `model`
  system: string;
  user: string;
}

async function openAICompatible(base: string, key: string, model: string, system: string, userText: string): Promise<string> {
  const res = await fetch(`${base.replace(/\/$/, '')}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: userText },
      ],
      max_tokens: 4000,
      temperature: 0.7,
    }),
    signal: AbortSignal.timeout(60_000),
  });
  if (!res.ok) throw new Error(`${base} ${res.status}: ${await res.text().catch(() => '')}`);
  const json = await res.json();
  const reply = json?.choices?.[0]?.message?.content;
  if (!reply) throw new Error(`${base} returned an empty completion`);
  return String(reply);
}

async function anthropicDirect(model: string, system: string, userText: string): Promise<string> {
  const key = process.env.CONTENT_ANTHROPIC_API_KEY;
  if (!key) throw new Error('CONTENT_ANTHROPIC_API_KEY is not set in ealch-admin/.env');
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      system,
      messages: [{ role: 'user', content: userText }],
      max_tokens: 4000,
    }),
    signal: AbortSignal.timeout(60_000),
  });
  if (!res.ok) throw new Error(`anthropic ${res.status}: ${await res.text().catch(() => '')}`);
  const json = await res.json();
  const reply = json?.content?.[0]?.text;
  if (!reply) throw new Error('anthropic returned an empty completion');
  return String(reply);
}

// Every provider in this table is OpenAI-chat-completions-shaped at ONE
// shared base URL, differing only in base URL and which env var holds the
// key — one table instead of one near-duplicate function per provider.
// kie.ai is NOT in this table — see kieAiDispatch below for why.
const OPENAI_COMPATIBLE: Record<string, { base: string; envVar: string }> = {
  openai: { base: 'https://api.openai.com/v1', envVar: 'CONTENT_OPENAI_API_KEY' },
  // Same endpoint ealch-v2/supabase/functions/coach/index.ts already calls
  // for the in-app chat coach (toProvider()'s 'nvidia' case) — NVIDIA's NIM
  // catalog is OpenAI-compatible.
  nvidia: { base: 'https://integrate.api.nvidia.com/v1', envVar: 'CONTENT_NVIDIA_API_KEY' },
  // Aggregator — one key reaches Qwen3, DeepSeek R1 and many others by
  // varying `model` alone (e.g. 'qwen/qwen3-235b-a22b', 'deepseek/deepseek-r1').
  openrouter: { base: 'https://openrouter.ai/api/v1', envVar: 'CONTENT_OPENROUTER_API_KEY' },
};

// ── kie.ai (docs.kie.ai, verified against live docs — NOT a guess) ─────────
//
// kie.ai is not one uniform API. It proxies each model family in that
// family's OWN native shape, at a URL that varies by family:
//
//   GPT / Gemini "(openai)" variants / Grok / Codex — OpenAI chat-completions
//   shape, but each model gets its OWN URL with the model slug baked into
//   the PATH, not a shared base + `model` body field:
//     POST https://api.kie.ai/{model-slug}/v1/chat/completions
//     e.g. https://api.kie.ai/gpt-5-2/v1/chat/completions
//          https://api.kie.ai/gemini-2.5-pro/v1/chat/completions
//
//   Claude — Anthropic's native Messages API shape (messages/max_tokens/
//   system, response has `content: [{type:'text',text}]`), at ONE shared
//   path with the model named in the BODY instead of the URL, and Bearer
//   auth instead of Anthropic's own x-api-key header:
//     POST https://api.kie.ai/claude/v1/messages
//     body: { "model": "claude-opus-4-8", "messages": [...], ... }
//
// Dispatch below keys off whether the model id starts with "claude" — kie.ai
// has no separate provider field of its own to carry this, and every Claude
// slug in their catalog is namespaced that way ("claude-opus-4-8",
// "claude-sonnet-5", …), so it is a reliable, not a fragile, signal.
async function kieAiOpenAIStyle(modelSlug: string, system: string, userText: string): Promise<string> {
  const key = process.env.CONTENT_KIEAI_API_KEY;
  if (!key) throw new Error('CONTENT_KIEAI_API_KEY is not set in ealch-admin/.env');
  return openAICompatible(`https://api.kie.ai/${modelSlug}/v1`, key, modelSlug, system, userText);
}

async function kieAiClaude(modelId: string, system: string, userText: string): Promise<string> {
  const key = process.env.CONTENT_KIEAI_API_KEY;
  if (!key) throw new Error('CONTENT_KIEAI_API_KEY is not set in ealch-admin/.env');
  const res = await fetch('https://api.kie.ai/claude/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: modelId,
      system,
      messages: [{ role: 'user', content: userText }],
      max_tokens: 4000,
      stream: false,
    }),
    signal: AbortSignal.timeout(60_000),
  });
  if (!res.ok) throw new Error(`kie.ai claude ${res.status}: ${await res.text().catch(() => '')}`);
  const json = await res.json();
  const reply = json?.content?.[0]?.text;
  if (!reply) throw new Error('kie.ai claude returned an empty completion');
  return String(reply);
}

function kieAiDispatch(model: string, system: string, userText: string): Promise<string> {
  return model.startsWith('claude') ? kieAiClaude(model, system, userText) : kieAiOpenAIStyle(model, system, userText);
}

// ── Mock provider — dev testing only, no network call, no cost, no key ─────
// Exercises the REAL pipeline (prompt build already happened before this is
// called; parse/insert/provenance/review-queue/publish all run for real
// against whatever this returns) without spending money or needing a
// credential. Every item it returns is small in count and unmistakably
// tagged so it can never pass for production content and is trivially
// findable/deletable later: `where tags @> array['mock-test-data']`.
// Route the 'content' capability to this model on the AI Routing page to
// use it, then switch back to a real model when you're done testing.
async function mockDispatch(): Promise<string> {
  return JSON.stringify([
    {
      kind: 'word', fr: 'un test', en: 'a test', ipa: 'œ̃ tɛst', gender: 'm',
      exampleFr: 'Ceci est un test.', exampleEn: 'This is a test.',
      notes: 'MOCK PROVIDER OUTPUT — pipeline test data, not real content.',
      tags: ['mock-test-data'], drills: ['flashcard'],
    },
    {
      kind: 'word', fr: 'une souris', en: 'a mouse (test data)', ipa: 'yn su.ʁi', gender: 'f',
      exampleFr: 'La souris est petite.', exampleEn: 'The mouse is small.',
      notes: 'MOCK PROVIDER OUTPUT — pipeline test data, not real content.',
      tags: ['mock-test-data'], drills: ['flashcard', 'voiceflash'],
    },
    {
      kind: 'sentence', fr: 'Ceci est une phrase de test.', en: 'This is a test sentence.',
      notes: 'MOCK PROVIDER OUTPUT — pipeline test data, not real content.',
      tags: ['mock-test-data'], drills: ['sentence'],
    },
  ]);
}

/** Dispatches on ai_models.provider (case-insensitive). Throws a clear,
 *  named error for a provider this admin socket does not (yet) speak — the
 *  console's own AI routing UI can route the 'content' capability to
 *  providers this function has no fetch shape for (Google direct, ElevenLabs…),
 *  and that must fail loudly with "add support for X", not silently. */
export async function callProvider(opts: CallOpts): Promise<string> {
  const provider = opts.provider.toLowerCase();

  if (provider === 'mock') return mockDispatch();
  if (provider === 'anthropic') return anthropicDirect(opts.model, opts.system, opts.user);
  if (provider === 'kie.ai') return kieAiDispatch(opts.model, opts.system, opts.user);

  const compat = OPENAI_COMPATIBLE[provider];
  if (compat) {
    const key = process.env[compat.envVar];
    if (!key) throw new Error(`${compat.envVar} is not set in ealch-admin/.env`);
    return openAICompatible(compat.base, key, opts.model, opts.system, opts.user);
  }

  // Generic OpenAI-compatible fallback for anything not named above (a
  // self-hosted gateway, a provider added to the console before this file
  // learned its endpoint) — only used if CONTENT_AI_API_URL is actually
  // configured, never a silent guess at a base URL.
  const base = process.env.CONTENT_AI_API_URL;
  const key = process.env.CONTENT_AI_API_KEY;
  if (base && key) return openAICompatible(base, key, opts.model, opts.system, opts.user);

  throw new Error(
    `No generation socket configured for provider "${opts.provider}". ` +
      `Add it to OPENAI_COMPATIBLE (or a dedicated function, like kie.ai's) in src/lib/generation/provider.ts, ` +
      `or set CONTENT_AI_API_URL + CONTENT_AI_API_KEY for a generic OpenAI-compatible endpoint.`
  );
}
