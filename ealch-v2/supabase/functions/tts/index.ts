// Ealch v2 — `tts` Edge Function.
// Premium voice synthesis proxy. ElevenLabs (multilingual v2 / v3) is the
// PRIMARY provider: it carries course narration and la dictée, with provider
// keys injected server-side. Custom (OpenAI-compatible) and Fish Audio remain
// as fallbacks so a provider outage degrades to a different voice, not silence
// — and the client falls back to on-device TTS if this function fails entirely.
//
// VOICE ROLES. The client names a role, never a raw provider voice id, so the
// cast can be recast server-side without an app release:
//   narrator → Liam (male, energetic, social-media creator) — course narration
//              and the default for every other speak surface.
//   amelie   → Amélie (young, confident, friendly — French Québec) — la dictée.
//   leo      → Léo (gentle, enthusiastic — French Québec) — la dictée.
// Liam is an ElevenLabs premade voice, so his id is a safe default. Amélie and
// Léo are Voice Library voices: their ids are minted per-account when added to
// My Voices, so they MUST be configured; unset roles fall back to the narrator
// (audible, honest, never silent).
//
// MODEL. Resolution order:
//   1. system_config.models.audio when it names an eleven_* model — this is the
//      control-plane socket config.ts promised for `models.audio` (CF-04): the
//      console flips eleven_multilingual_v2 ↔ eleven_v3 and the next utterance
//      obeys, no app rebuild.
//   2. ELEVENLABS_MODEL_ID secret.
//   3. eleven_multilingual_v2 (French-capable, highest fidelity).
// `language_code` is only sent to models that accept it — the API rejects it on
// multilingual_v2 (per the ElevenLabs TTS reference).
//
// Request:  { text: string, voice?: "narrator"|"amelie"|"leo"|<raw id>, lang?: "fr"|"en" }
// Response: { audio: string (base64 mp3), format: string, provider: string }
//
// Deploy:  supabase functions deploy tts --no-verify-jwt
// Secrets: supabase secrets set ELEVENLABS_API_KEY=... \
//            ELEVENLABS_VOICE_LIAM=TX3LPaxmHKxFdv7VOQHJ \
//            ELEVENLABS_VOICE_AMELIE=<voice library id> \
//            ELEVENLABS_VOICE_LEO=<voice library id> \
//            [ELEVENLABS_MODEL_ID=eleven_multilingual_v2 | eleven_v3]
// (ELEVENLABS_VOICE_NARRATOR is accepted as an older alias for the same role.)
// SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are auto-injected by the platform.

import { createClient } from "jsr:@supabase/supabase-js@2";

const b64 = (buf: ArrayBuffer) => {
  const bytes = new Uint8Array(buf);
  let bin = "";
  const CHUNK = 0x8000;
  for (let i = 0; i < bytes.length; i += CHUNK) {
    bin += String.fromCharCode(...bytes.subarray(i, i + CHUNK));
  }
  return btoa(bin);
};

// voiceId is diagnostic only (echoed to the client so a role can be confirmed
// against the actual ElevenLabs voice it resolved to) — never a secret, just
// the public identifier ElevenLabs itself exposes.
type TtsResult = { audio: ArrayBuffer; format: string; provider: string; voiceId?: string };

// ElevenLabs premade "Liam" — energetic young male, made for social content.
const LIAM = "TX3LPaxmHKxFdv7VOQHJ";

/** Role → ElevenLabs voice id. A raw id (anything that isn't a known role) is
 *  passed through so the Ops Console can audition arbitrary voices. */
function elevenVoiceId(voice: string): string {
  const narrator =
    Deno.env.get("ELEVENLABS_VOICE_LIAM") ??
    Deno.env.get("ELEVENLABS_VOICE_NARRATOR") ??
    LIAM;
  switch (voice) {
    case "":
    case "narrator":
      return narrator;
    case "amelie":
      return Deno.env.get("ELEVENLABS_VOICE_AMELIE") ?? narrator;
    case "leo":
      return Deno.env.get("ELEVENLABS_VOICE_LEO") ?? narrator;
    default:
      return voice;
  }
}

// models.audio is read per the coach function's pattern: service-role, cached
// briefly so a narration run doesn't hammer system_config once per sentence.
const MODEL_TTL_MS = 60_000;
let modelCache: { id: string; at: number } | null = null;

async function elevenModelId(): Promise<string> {
  const fallback = Deno.env.get("ELEVENLABS_MODEL_ID") ?? "eleven_multilingual_v2";
  const now = Date.now();
  if (modelCache && now - modelCache.at < MODEL_TTL_MS) return modelCache.id;
  let id = fallback;
  try {
    const { data } = await createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    )
      .from("system_config")
      .select("config")
      .eq("id", "active")
      .maybeSingle();
    const audio = (data?.config as { models?: { audio?: unknown } } | null)?.models?.audio;
    // Only an eleven_* id can steer this provider; `fish-1` etc. keep the fallback.
    if (typeof audio === "string" && audio.startsWith("eleven_")) id = audio;
  } catch {
    // Config unreachable — the env/default model still speaks.
  }
  modelCache = { id, at: now };
  return id;
}

async function elevenlabs(text: string, voice: string, lang: string): Promise<TtsResult> {
  const key = Deno.env.get("ELEVENLABS_API_KEY");
  if (!key) throw new Error("no ELEVENLABS_API_KEY");
  const modelId = await elevenModelId();
  const voiceId = elevenVoiceId(voice);
  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", "xi-api-key": key },
      body: JSON.stringify({
        text,
        model_id: modelId,
        // multilingual_v2 rejects language_code; v3/flash accept it. 0.5
        // stability is also one of v3's discrete settings, so one settings
        // object serves both model families.
        ...(lang && !modelId.startsWith("eleven_multilingual_v2")
          ? { language_code: lang }
          : {}),
        voice_settings: { stability: 0.5, similarity_boost: 0.75 },
      }),
      signal: AbortSignal.timeout(25_000),
    },
  );
  if (!res.ok) {
    // Surface the real reason (bad key, unknown voice id, quota) — this is
    // ElevenLabs's own diagnostic body, not a guess.
    const body = await res.text().catch(() => "");
    throw new Error(`elevenlabs ${res.status}: ${body.slice(0, 300)}`);
  }
  return { audio: await res.arrayBuffer(), format: "mp3", provider: "elevenlabs", voiceId };
}

const ROLES = new Set(["", "narrator", "amelie", "leo"]);

async function customTts(text: string, voice: string): Promise<TtsResult> {
  const url = Deno.env.get("TTS_API_URL");
  if (!url) throw new Error("no TTS_API_URL");
  const format = Deno.env.get("TTS_FORMAT") ?? "wav";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Deno.env.get("TTS_API_KEY") ?? ""}`,
    },
    body: JSON.stringify({
      model: Deno.env.get("TTS_MODEL") ?? "piper",
      // Role names are ElevenLabs vocabulary; a fallback provider gets its own
      // configured voice for those, and only a raw id is passed through.
      voice: ROLES.has(voice) ? (Deno.env.get("TTS_VOICE") ?? "fr_FR-siwis-medium") : voice,
      input: text,
      response_format: format,
    }),
    signal: AbortSignal.timeout(25_000),
  });
  if (!res.ok) throw new Error(`custom tts ${res.status}`);
  return { audio: await res.arrayBuffer(), format, provider: Deno.env.get("TTS_PROVIDER") ?? "custom" };
}

async function fishAudio(text: string, voice: string): Promise<TtsResult> {
  const key = Deno.env.get("FISH_AUDIO_API_KEY") ?? Deno.env.get("FISH_API_KEY");
  if (!key) throw new Error("no FISH_AUDIO_API_KEY");
  const res = await fetch("https://api.fish.audio/v1/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      text,
      reference_id: ROLES.has(voice) ? undefined : voice,
      format: "mp3",
    }),
    signal: AbortSignal.timeout(25_000),
  });
  if (!res.ok) throw new Error(`fish ${res.status}`);
  return { audio: await res.arrayBuffer(), format: "mp3", provider: "fish" };
}

// Narration sections run longer than drill phrases; 2400 chars stays inside
// every model's limit (v3 caps at 5000) while still bounding per-call spend.
const MAX_CHARS = 2400;

Deno.serve(async (req) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  try {
    const { text, voice = "", lang = "" } = await req.json();
    if (!text || String(text).length > MAX_CHARS) {
      return new Response(
        JSON.stringify({ error: `text required (max ${MAX_CHARS} chars)` }),
        { status: 400, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }
    // lang is an ISO 639-1 hint, nothing else reaches a provider URL.
    const langCode = /^[a-z]{2}$/.test(String(lang)) ? String(lang) : "";

    // Named, not positional: a single overwritten `lastErr` hid the real
    // ElevenLabs failure behind whichever fallback provider (unconfigured, by
    // default) happened to fail last — this way every attempt's own reason
    // survives into the response.
    const chain: { name: string; fn: (t: string, v: string) => Promise<TtsResult> }[] = [
      { name: "elevenlabs", fn: (t, v) => elevenlabs(t, v, langCode) },
      { name: "custom", fn: customTts },
      { name: "fish", fn: fishAudio },
    ];
    let result: TtsResult | null = null;
    const errors: string[] = [];
    for (const provider of chain) {
      try {
        result = await provider.fn(String(text), String(voice));
        break;
      } catch (e) {
        errors.push(`${provider.name}: ${e}`);
      }
    }
    if (!result) {
      return new Response(JSON.stringify({ error: "all tts providers failed", details: errors }), {
        status: 502,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        audio: b64(result.audio),
        format: result.format,
        provider: result.provider,
        ...(result.voiceId ? { voiceId: result.voiceId } : {}),
      }),
      { headers: { ...cors, "Content-Type": "application/json" } },
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 400,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
