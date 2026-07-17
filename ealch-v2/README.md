# Ealch — AI French voice-coaching app

A React Native + Expo implementation of the **Ealch v2** design (exported from Claude Design). Ealch is a voice-first French learning app: a cinematic AI coach, a Spotify-style learning feed, a full beginners' curriculum, and a suite of speaking/writing drills — bilingual (FR/EN), themeable, and offline-capable.

This app was built to match the `Ealch v2.dc.html` prototype pixel-for-pixel in idiomatic React Native.

## Stack

- **Expo SDK 57** + **Expo Router** (file-based navigation)
- **React 19 / React Native 0.86** (New Architecture)
- **Zustand** (+ AsyncStorage persistence) for state
- **Inline styles + a JS token system** for all styling and runtime theming. There is no NativeWind and not a single `className` in the codebase: NativeWind was removed because its `jsxImportSource` transform corrupted inline style props on native. See `metro.config.js` before re-adding it.
- **expo-speech** (real French TTS), **expo-haptics**, **expo-notifications**
- **@supabase/supabase-js** for auth + the remote control plane
- **react-native-svg**, **expo-linear-gradient**, **Instrument Serif / Sans** fonts

## Running

```bash
cd ealch-v2
npm install
npm run web       # or: npm run ios / npm run android
npm run typecheck # tsc --noEmit
```

The app runs **with zero configuration** — no keys required — but "runs" is not "does everything". Speech recognition and TTS are genuinely on-device and fully functional unconfigured. The coach serves canned tips and labels itself offline. Auth does not work at all without Supabase: it fails with `AUTH_UNAVAILABLE` rather than minting a local session.

To enable real integrations, copy `.env.example` → `.env` and fill in Supabase / RevenueCat / PostHog references (secrets stay server-side in Edge Functions).

## Architecture

### Screens (`app/`)
`splash` → `onboarding` (10-step wizard) / `signin` → `home` (learning feed) with a bottom tab bar (Listen · Speak · Coach · Profile). Focus flows: `speak` (cinematic coach), `player` (track player), `feedback` (Le Rapport), `chat` (Le Coach), `den` (Beginners' Den), `lesson`, `flashcards`, `voiceflash`, `sentence`, `roleplay`, `dictation`, `smartreview` → `review`, `placement`, `downloads`, `settings`. Global overlays: push banner, bottom sheet (vocab injector / grammar), dictionary popover.

### Swappable service ports (`src/services/`)
The app is a thin, configurable client driven by a remote control plane (the "modularity + resilience" spec). Every provider sits behind a port with a real adapter and a **degradation** that is honest about what it is. Degrading is not the same as pretending: where a port cannot do the real thing, it says so rather than inventing a result. Two ports deliberately have **no** fallback, because the only available fake would be a lie:

| Port | Real adapter | When it cannot reach the real thing |
| --- | --- | --- |
| `config` | Supabase `system_config` table | cached / built-in defaults |
| `auth` | Supabase Auth (email + OAuth) | **fails** with `AUTH_UNAVAILABLE`. No local session: a "signed in" state that never existed server-side is worse than an error |
| `llm` (coach) | Supabase Edge Function → LLM | a canned coaching tip, returned as `live: false` so the UI shows "offline · saved tips" rather than claiming the coach is online |
| `tts` | expo-speech (device French voice) | silent no-op |
| `stt` | native recognizer (pluggable) | **reports `available: false`** with an empty transcript; the screen falls back to self-assessment. Never invents a transcript, because faking a transcript fakes the score |
| `sound` | Web Audio (web) / Haptics (native) | off |
| `notifications` | expo-notifications daily schedule | in-app banner |

No API keys are shipped in the bundle; the client only ever fetches non-sensitive config. See `supabase/schema.sql` for the control-plane schema (config, versioned prompts, profiles, FSRS review queue, sessions + RLS).

### Design system (`src/theme/`)
Tokens ported 1:1 from the prototype's CSS variables. Dark + light modes and 4 accent colors (Riviera / Corail / Champagne / Nuit) recompute live from the store. The prototype's `color-mix()` calls map to runtime `t.line() / t.accA() / t.txA() / t.accCard()` helpers.

### Content (`src/content/`)
All seed learning content — flashcard deck, the Sons/A1/A2 curriculum (43 units), extended lessons with tables/quizzes, role-play scripts (A1→B2), review queue, dictation sentences, onboarding options. In production this is served by the CMS; here it's the offline seed.

### i18n (`src/i18n/`)
Full FR/EN interface table (`useT()`); the 7-language onboarding picker selects and falls back to EN for unimplemented locales. French learning content stays French in both modes.
