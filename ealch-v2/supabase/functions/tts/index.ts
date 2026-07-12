// Ealch v2 — `tts` Edge Function.
// Optional premium voice synthesis proxy. The app uses on-device French TTS by
// default (config.ttsProvider = "device"); flipping the control plane routes
// phrase audio through here instead, with provider keys injected server-side.
//
// Provider resolver order (first configured wins, rest are fallbacks):
//   1. Custom      — TTS_API_URL (+ TTS_API_KEY, TTS_MODEL, TTS_VOICE, TTS_FORMAT)
//                    OpenAI-compatible /v1/audio/speech shape (e.g. a Piper server).
//   2. Fish Audio  — FISH_AUDIO_API_KEY (or FISH_API_KEY)
//   3. ElevenLabs  — ELEVENLABS_API_KEY
//
// Request:  { text: string, voice?: string }
// Response: { audio: string (base64), format: string, provider: string }
//
// Deploy:  supabase functions deploy tts --no-verify-jwt

const b64 = (buf: ArrayBuffer) => {
  const bytes = new Uint8Array(buf);
  let bin = "";
  const CHUNK = 0x8000;
  for (let i = 0; i < bytes.length; i += CHUNK) {
    bin += String.fromCharCode(...bytes.subarray(i, i + CHUNK));
  }
  return btoa(bin);
};

type TtsResult = { audio: ArrayBuffer; format: string; provider: string };

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
      voice: voice || (Deno.env.get("TTS_VOICE") ?? "fr_FR-siwis-medium"),
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
    body: JSON.stringify({ text, reference_id: voice || undefined, format: "mp3" }),
    signal: AbortSignal.timeout(25_000),
  });
  if (!res.ok) throw new Error(`fish ${res.status}`);
  return { audio: await res.arrayBuffer(), format: "mp3", provider: "fish" };
}

async function elevenlabs(text: string, voice: string): Promise<TtsResult> {
  const key = Deno.env.get("ELEVENLABS_API_KEY");
  if (!key) throw new Error("no ELEVENLABS_API_KEY");
  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voice || "EXAVITQu4vr4xnSDxMaL"}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", "xi-api-key": key },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: { stability: 0.5, similarity_boost: 0.75 },
      }),
      signal: AbortSignal.timeout(25_000),
    },
  );
  if (!res.ok) throw new Error(`elevenlabs ${res.status}`);
  return { audio: await res.arrayBuffer(), format: "mp3", provider: "elevenlabs" };
}

Deno.serve(async (req) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  try {
    const { text, voice = "" } = await req.json();
    if (!text || String(text).length > 600) {
      return new Response(JSON.stringify({ error: "text required (max 600 chars)" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const chain = [customTts, fishAudio, elevenlabs];
    let result: TtsResult | null = null;
    let lastErr = "";
    for (const provider of chain) {
      try {
        result = await provider(String(text), String(voice));
        break;
      } catch (e) {
        lastErr = String(e);
      }
    }
    if (!result) {
      return new Response(JSON.stringify({ error: `all tts providers failed: ${lastErr}` }), {
        status: 502,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ audio: b64(result.audio), format: result.format, provider: result.provider }),
      { headers: { ...cors, "Content-Type": "application/json" } },
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 400,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
