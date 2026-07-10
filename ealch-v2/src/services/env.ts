// Environment configuration. All values are read from EXPO_PUBLIC_* vars so the
// client only ever sees non-sensitive references — real provider secrets live
// server-side in Supabase Edge Functions (per the control-plane spec).
//
// Copy .env.example to .env and fill these in to enable real integrations.
// With none set, every service port falls back to the offline/simulated path,
// so the app is fully usable with zero configuration.

export const ENV = {
  supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL ?? '',
  supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '',

  // Edge Function slugs (the client calls these; secrets are injected server-side).
  coachFunction: process.env.EXPO_PUBLIC_COACH_FN ?? 'coach',
  ttsFunction: process.env.EXPO_PUBLIC_TTS_FN ?? 'tts',
  sttFunction: process.env.EXPO_PUBLIC_STT_FN ?? 'stt',

  // RevenueCat (paywall) public SDK key — safe to ship.
  revenueCatKey: process.env.EXPO_PUBLIC_REVENUECAT_KEY ?? '',

  // PostHog (analytics) public key — safe to ship.
  posthogKey: process.env.EXPO_PUBLIC_POSTHOG_KEY ?? '',
  posthogHost: process.env.EXPO_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',
};

export const hasSupabase = () => Boolean(ENV.supabaseUrl && ENV.supabaseAnonKey);
