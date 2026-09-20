# Technology Stack

**Analysis Date:** 2026-09-19

## Languages

**Primary:**
- TypeScript 5.x and 6.x - All application code in both projects
- JavaScript - Configuration files, build scripts

**Secondary:**
- Python 3.12 - French validation gates (verbecc, mlconjug3) in Phase 2.D content publishing pipeline
- SQL - Supabase schema and migrations (PostgreSQL dialect)

## Runtime

**Environment:**
- Node.js 24.x (LTS) - Required for both ealch-v2 and ealch-admin development
- Mobile runtime: Expo 57.0.9 with React Native 0.86.2 (ealch-v2)
- Web/Admin runtime: Next.js 16.2.10 on Node (ealch-admin)

**Package Managers:**
- npm 10.x - ealch-v2 (package-lock.json present)
- pnpm 11.1.0 - ealch-admin (pnpm-lock.yaml present, enforced via packageManager field)

## Frameworks

**Core:**
- **ealch-v2 (Mobile App):**
  - Expo 57.0.9 - React Native framework for iOS/Android builds
  - React Native 0.86.2 - Mobile UI framework
  - Expo Router 57.0.9 - File-based routing (replaces React Navigation)
  - Zustand 5.0.14 - State management

- **ealch-admin (Console):**
  - Next.js 16.2.10 - Full-stack React framework with server components
  - React 19.2.4 - UI rendering
  - Mantine 9.4.1 - Component library with hooks
  - BlockNote 0.51.4 - Rich text editor for content authoring
  - TanStack React Query 5.101.2 - Server state management
  - TanStack React Table 8.21.3 - Data table rendering

**Database/ORM:**
- Drizzle ORM 0.45.2 - Type-safe SQL builder (ealch-admin)
- Drizzle Kit 0.31.10 - Schema generation and migrations
- pg 8.22.0 - PostgreSQL client
- @electric-sql/pglite 0.5.4 - Embedded Postgres (ealch-admin local dev)

**Testing:**
- node --test (native Node.js test runner) - Pure island tests (ealch-v2 and ealch-admin)
- Playwright 1.61.1 - E2E tests (ealch-admin only)

**Authentication:**
- @supabase/supabase-js 2.110.2 - Supabase client (ealch-v2 auth, storage, functions)
- next-auth 5.0.0-beta.31 - Session management (ealch-admin)
- bcryptjs 3.0.3 - Password hashing (ealch-admin)
- otplib 13.4.1 - TOTP/OTP generation (ealch-admin)

**Build/Dev:**
- TypeScript 5.x (ealch-admin), 6.0.3 (ealch-v2) - Compilation
- Metro (via Expo) - Bundler for React Native
- babel-preset-expo 57.0.2 - Babel configuration for Expo
- tsx 4.23.0 - TypeScript execution without build step (ealch-admin scripts)

**UI/Rendering:**
- react-native-web 0.21.2 - React Native on web (fallback)
- react-native-svg 15.15.4 - SVG rendering
- Recharts 3.9.2 - Chart library (ealch-admin dashboards)
- @mantine/hooks 9.4.1 - Utility hooks

**Native/Platform APIs:**
- expo-router 57.0.9 - Navigation and deep linking
- expo-audio 57.0.3 - Audio playback
- expo-speech 57.0.1 - TTS engine (device fallback, on-device French)
- expo-speech-recognition 56.0.1 - STT engine (Google on Android)
- expo-file-system 57.0.1 - File I/O
- expo-crypto 57.0.1 - Crypto utilities
- expo-notifications 57.0.8 - Push notifications
- expo-updates 57.0.11 - OTA updates
- @react-native-async-storage/async-storage 2.2.0 - Local storage
- react-native-adapty 4.0.1 - Paywall SDK (Adapty integration)
- react-native-reanimated 4.5.1 - Animation library
- react-native-gesture-handler 2.32.0 - Gesture recognition
- react-native-safe-area-context 5.7.0 - Safe area handling

**Other:**
- zod 4.4.3 - Schema validation (ealch-admin)
- qrcode 1.5.4 - QR code generation (ealch-admin)
- recharts 3.9.2 - Charting library (ealch-admin)
- @expo-google-fonts packages - Font loading

## Configuration

**Environment:**
- ealch-v2: `.env` file (copy from `.env.example`)
  - All `EXPO_PUBLIC_*` variables are client-safe
  - Supabase public URL and anon key (auth, storage, functions)
  - Edge Function endpoint names (coach, tts, stt, delete-account, grade-exam)
  - Third-party public keys (Adapty, PostHog)

- ealch-admin: `.env` file (not committed, gitignored)
  - `DATABASE_URL` - Postgres connection string (Supabase)
  - Next.js requires no special Supabase config (uses Drizzle ORM directly)
  - Optional PYTHON_BIN for French validation gates

**Build:**
- ealch-v2:
  - `tsconfig.json` - TypeScript configuration (extends expo/tsconfig.base)
  - `app.json` - Expo app configuration (Expo Router, plugins, permissions)
  - `eas.json` - EAS build channels (development, preview, production)
  - `.easignore` - Gitignored scratch excluded from EAS

- ealch-admin:
  - `tsconfig.json` - TypeScript (Next.js plugin)
  - `drizzle.config.ts` - Schema and migration output configuration
  - `next.config.ts` - Next.js build options (minimal config)

## Platform Requirements

**Development:**
- Node.js 24.x
- npm (ealch-v2) or pnpm (ealch-admin)
- For mobile dev: Expo CLI, EAS CLI
- For admin: No additional local services required (pglite for offline dev testing)
- Optional: Python 3.12 for running French validation gates locally

**Production - ealch-v2:**
- iOS: App Store (EAS submission via Expo)
- Android: Google Play Store (EAS submission via service account key)
- OTA updates: Expo Updates over HTTPS from Expo infrastructure
- Supabase backend (auth, storage, Edge Functions)

**Production - ealch-admin:**
- Deployment platform: Self-hosted Node.js server or serverless (not yet specified)
- PostgreSQL database: Supabase (managed Postgres)
- Edge Functions: Supabase (for coach, tts, stt, etc.)

---

*Stack analysis: 2026-09-19*
*Update after major dependency changes or runtime upgrades*
