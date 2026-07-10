// Service registry — the single import surface for the swappable "ports".
// Screens import from here, never from a concrete provider, so any dependency
// (auth, LLM, TTS, STT, config) can be swapped without touching UI code.
export { auth } from './auth';
export { coach, type CoachMessage } from './llm';
export { tts } from './tts';
export { stt, type SttResult } from './stt';
export { sound, type Cue } from './sound';
export { notifications } from './notifications';
export { getConfig, refreshConfig, type RemoteConfig } from './config';
export { ENV, hasSupabase } from './env';
export { supabase } from './supabase';
