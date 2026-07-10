// ConfigService — the control-plane client. On launch (and on foreground) the app
// fetches its operational configuration from Supabase's `system_config` table:
// which providers/models are active, which services are toggled on, the active
// prompt version, and endpoint references. NO raw secrets are ever stored here.
//
// Config is cached locally so the app works offline and degrades gracefully.
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from './supabase';

export type RemoteConfig = {
  orchestrator: 'kie' | 'nvidia';
  services: { fishAudio: boolean; azure: boolean; glif: boolean };
  models: { general: string; content: string; audio: string; video: string };
  promptVersion: string;
  ttsProvider: 'device' | 'elevenlabs' | 'azure';
  sttProvider: 'device' | 'edge';
  failoverToastVisible: boolean;
};

const DEFAULTS: RemoteConfig = {
  orchestrator: 'kie',
  services: { fishAudio: true, azure: false, glif: false },
  models: { general: 'claude-sonnet-5', content: 'claude-sonnet-5', audio: 'fish-1', video: 'mux' },
  promptVersion: 'v1',
  ttsProvider: 'device',
  sttProvider: 'device',
  failoverToastVisible: true,
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
