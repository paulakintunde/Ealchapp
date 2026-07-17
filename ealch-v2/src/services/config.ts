// ConfigService — the control-plane client. On launch (and on foreground) the app
// fetches its operational configuration from Supabase's `system_config` table:
// which providers/models are active, which services are toggled on, the active
// prompt version, and endpoint references. NO raw secrets are ever stored here.
//
// Config is cached locally so the app works offline and degrades gracefully.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from './supabase';

// THE SOCKET CONTRACT (Phase 3, CF-05). Which field drives which call site, and
// — just as importantly — which fields nothing reads yet. Claiming a field is
// wired when it is not is how `models` came to look like a control plane while
// steering nothing:
//
//   models.general → the coach. Read SERVER-side by the coach edge function
//                    straight from system_config, which is what makes routing
//                    real: the console flips it and the next turn obeys, with no
//                    app rebuild and no client refresh. The client also sends it
//                    in the coach body, where it is advisory only and ignored —
//                    a request that can name its own provider can name the most
//                    expensive one.
//   models.audio   → tts. NOT wired yet; Phase 4 (CF-04) gives it a consumer.
//   models.content → the generation pipeline, which runs admin-side. The app
//                    never reads it.
//   models.video   → reserved. Nothing reads it.
//   orchestrator   → nothing reads it, on the client or the server.
//
// system_config also carries server-only keys the app deliberately does not
// model here (coachCostCeiling, coachFreeTurnsPerDay): they bound spend inside
// the coach function, the client has no use for them, and typing them here would
// imply it does. The default-merge below passes them through harmlessly.
export type RemoteConfig = {
  /** A provider key, matching `ai_models.provider` in the Ops Console.
   *
   *  Deliberately a free string, not a union: the console can introduce a
   *  provider without an app release, and an old client receiving one it has
   *  never heard of must not be broken by it. Nothing branches on this value
   *  today, so widening it costs nothing and the narrow union only ever
   *  threatened to reject a future the console is allowed to choose. */
  orchestrator: string;
  services: { fishAudio: boolean; azure: boolean; glif: boolean };
  models: { general: string; content: string; audio: string; video: string };
  promptVersion: string;
  ttsProvider: 'device' | 'elevenlabs' | 'azure';
  sttProvider: 'device' | 'edge';
  failoverToastVisible: boolean;
  /** The chosen device voice for the Camille narration (CF-04, Blocker 4). This
   *  is the `camilleVoiceId` resolver's app-side landing: the Ops Console records
   *  Paul's audition pick in `ai_models.meta` as {androidVoice, iosVoice} and the
   *  routing sync surfaces it here. Split by platform because device voice ids do
   *  NOT cross platforms. Null on both until a pick is recorded; tts.ts then
   *  speaks language-only, exactly as it does today. A device that lacks the
   *  named id also falls back to language-only — the id is a preference, never a
   *  requirement (see tts.ts). */
  ttsVoice: { android: string | null; ios: string | null };
};

const DEFAULTS: RemoteConfig = {
  orchestrator: 'nvidia',
  services: { fishAudio: true, azure: false, glif: false },
  models: { general: 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning', content: 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning', audio: 'fish-1', video: 'mux' },
  promptVersion: 'v1',
  ttsProvider: 'device',
  sttProvider: 'device',
  failoverToastVisible: true,
  ttsVoice: { android: null, ios: null },
};

const CACHE_KEY = 'ealch-remote-config';
let current: RemoteConfig = DEFAULTS;

export function getConfig(): RemoteConfig {
  return current;
}

/** Fetch remote config from Supabase; fall back to cache, then defaults. */
export async function refreshConfig(): Promise<RemoteConfig> {
  const sb = supabase();
  if (sb) {
    try {
      const { data, error } = await sb
        .from('system_config')
        .select('config')
        .eq('id', 'active')
        .single();
      if (!error && data?.config) {
        current = { ...DEFAULTS, ...(data.config as Partial<RemoteConfig>) };
        await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(current));
        return current;
      }
    } catch {
      // fall through to cache
    }
  }
  try {
    const cached = await AsyncStorage.getItem(CACHE_KEY);
    if (cached) current = { ...DEFAULTS, ...JSON.parse(cached) };
  } catch {
    // keep defaults
  }
  return current;
}
