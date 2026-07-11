// Ealch v2 — `tts` Edge Function.
// Optional premium voice synthesis proxy. The app uses on-device French TTS by
// default (config.ttsProvider = "device"); flipping the control plane to
// "elevenlabs" or "fish" routes phrase audio through here instead, with the
// provider key injected server-side.
//
// Request:  { text: string, provider?: "elevenlabs" | "fish", voice?: string }
// Response: { audio: string (base64 mp3), provider: string }
//
// Deploy:  supabase functions deploy tts --no-verify-jwt
// Secrets: supabase secrets set ELEVENLABS_API_KEY=... [FISH_API_KEY=...]

const b64 = (buf: ArrayBuffer) => {
  const bytes = new Uint8Array(buf);
  let bin = "";
  const CHUNK = 0x8000;
  for (let i = 0; i < bytes.length; i += CHUNK) {
    bin += String.fromCharCode(...bytes.subarray(i, i + CHUNK));
  }
  return btoa(bin);
};

async function elevenlabs(text: string, voice: string): Promise<ArrayBuffer> {
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
  return res.arrayBuffer();
}

async function fishAudio(text: string, voice: string): Promise<ArrayBuffer> {
  const key = Deno.env.get("FISH_API_KEY");
  if (!key) throw new Error("no FISH_API_KEY");
  const res = await fetch("https://api.fish.audio/v1/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({ text, reference_id: voice || undefined, format: "mp3" }),
    signal: AbortSignal.timeout(25_000),
  });
  if (!res.ok) throw new Error(`fish ${res.status}`);
  return res.arrayBuffer();
}

Deno.serve(async (req) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  try {
    const { text, provider = "elevenlabs", voice = "" } = await req.json();
    if (!text || String(text).length > 600) {
      return new Response(JSON.stringify({ error: "text required (max 600 chars)" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    let audio: ArrayBuffer;
    let used = provider;
    try {
      audio = provider === "fish" ? await fishAudio(text, voice) : await elevenlabs(text, voice);
    } catch (_) {
      // cross-provider fallback, mirroring the app's resilience posture
      used = provider === "fish" ? "elevenlabs" : "fish";
      audio = used === "fish" ? await fishAudio(text, voice) : await elevenlabs(text, voice);
    }

    return new Response(JSON.stringify({ audio: b64(audio), provider: used }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 502,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
