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
  gradeExamFunction: process.env.EXPO_PUBLIC_GRADE_EXAM_FN ?? 'grade-exam',
  ttsFunction: process.env.EXPO_PUBLIC_TTS_FN ?? 'tts',
  sttFunction: process.env.EXPO_PUBLIC_STT_FN ?? 'stt',
  deleteAccountFunction: process.env.EXPO_PUBLIC_DELETE_ACCOUNT_FN ?? 'delete-account',

  // Adapty (paywall/purchases) public SDK key — safe to ship. Replaced the
  // RevenueCat key 2026-07-22 (CF-15 vendor amendment, BF-02).
  adaptyKey: process.env.EXPO_PUBLIC_ADAPTY_KEY ?? '',

  // PostHog (analytics) public key — safe to ship.
  posthogKey: process.env.EXPO_PUBLIC_POSTHOG_KEY ?? '',
  posthogHost: process.env.EXPO_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',

  // Pre-rendered asset CDN (Phase 7 audio, AUDIO-RENDER-SPEC.md's end-state
  // R2 bucket) — a public base URL, no bucket credentials. Unset means "not
  // migrated yet"; contentAssetUrl() falls back to the Supabase content
  // bucket in that case.
  assetBaseUrl: process.env.EXPO_PUBLIC_ASSET_BASE_URL ?? '',
};

export const hasSupabase = () => Boolean(ENV.supabaseUrl && ENV.supabaseAnonKey);
