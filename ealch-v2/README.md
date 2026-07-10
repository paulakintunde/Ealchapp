# Ealch — AI French voice-coaching app

A React Native + Expo implementation of the **Ealch v2** design (exported from Claude Design). Ealch is a voice-first French learning app: a cinematic AI coach, a Spotify-style learning feed, a full beginners' curriculum, and a suite of speaking/writing drills — bilingual (FR/EN), themeable, and offline-capable.

This app was built to match the `Ealch v2.dc.html` prototype pixel-for-pixel in idiomatic React Native.

## Stack

- **Expo SDK 57** + **Expo Router** (file-based navigation)
- **React 19 / React Native 0.86** (New Architecture)
- **Zustand** (+ AsyncStorage persistence) for state
- **NativeWind** (Tailwind) configured; runtime theming via a JS token system
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

The app runs fully **with zero configuration** — no keys required. On-device speech and simulated coaching stand in for the paid providers. To enable real integrations, copy `.env.example` → `.env` and fill in Supabase / RevenueCat / PostHog references (secrets stay server-side in Edge Functions).

## Architecture

### Screens (`app/`)
`splash` → `onboarding` (10-step wizard) / `signin` → `home` (learning feed) with a bottom tab bar (Listen · Speak · Coach · Profile). Focus flows: `speak` (cinematic coach), `player` (track player), `feedback` (Le Rapport), `chat` (Le Coach), `den` (Beginners' Den), `lesson`, `flashcards`, `voiceflash`, `sentence`, `roleplay`, `dictation`, `smartreview` → `review`, `placement`, `downloads`, `settings`. Global overlays: push banner, bottom sheet (vocab injector / grammar), dictionary popover.

### Swappable service ports (`src/services/`)
The app is a thin, configurable client driven by a remote control plane (the "modularity + resilience" spec). Every provider sits behind a port with a real adapter **and** a graceful offline fallback:

| Port | Real adapter | Fallback |
| --- | --- | --- |
| `config` | Supabase `system_config` table | cached / built-in defaults |
| `auth` | Supabase Auth (email + OAuth) | local session |
| `llm` (coach) | Supabase Edge Function → LLM | canned coaching replies |
| `tts` | expo-speech (device French voice) | silent no-op |
| `stt` | native recognizer (pluggable) | simulated capture |
| `sound` | Web Audio (web) / Haptics (native) | off |
| `notifications` | expo-notifications daily schedule | in-app banner |

No API keys are shipped in the bundle; the client only ever fetches non-sensitive config. See `supabase/schema.sql` for the control-plane schema (config, versioned prompts, profiles, FSRS review queue, sessions + RLS).

### Design system (`src/theme/`)
Tokens ported 1:1 from the prototype's CSS variables. Dark + light modes and 4 accent colors (Riviera / Corail / Champagne / Nuit) recompute live from the store. The prototype's `color-mix()` calls map to runtime `t.line() / t.accA() / t.txA() / t.accCard()` helpers.

### Content (`src/content/`)
All seed learning content — flashcard deck, the Sons/A1/A2 curriculum (43 units), extended lessons with tables/quizzes, role-play scripts (A1→B2), review queue, dictation sentences, onboarding options. In production this is served by the CMS; here it's the offline seed.

### i18n (`src/i18n/`)
Full FR/EN interface table (`useT()`); the 7-language onboarding picker selects and falls back to EN for unimplemented locales. French learning content stays French in both modes.
