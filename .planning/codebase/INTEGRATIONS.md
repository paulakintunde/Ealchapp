# External Integrations

**Analysis Date:** 2026-09-19

## APIs & External Services

**Language Models (Coach - Speak analysis, tutor, role play):**
- NVIDIA - Primary/default provider (cheap tier)
  - SDK/Client: Direct REST API via Supabase Edge Function
  - Auth: `NVIDIA_API_KEY` secret in Supabase (server-side)
  - Model: `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` (default)
  - Cost tier: cheap
  - Endpoint: Coach function routes via `coach/index.ts`

- Anthropic - Premium LLM tier
  - SDK/Client: Direct REST API via Supabase Edge Function
  - Auth: `ANTHROPIC_API_KEY` secret in Supabase (server-side)
  - Models: claude-* (e.g., claude-sonnet-5)
  - Cost tier: premium
  - Cost ceiling: Configurable, defaults to 'standard' (blocks premium unless raised)

- OpenRouter - Vendor-agnostic routing
  - SDK/Client: REST API via Supabase Edge Function
  - Auth: API key in Supabase secrets
  - Cost tier: standard
  - Model format: vendor/model-id (matched via prefix rules in routing.ts)

- AI API (Operator override)
  - SDK/Client: OpenAI-compatible REST endpoint
  - Auth: `AI_API_KEY` secret in Supabase
  - Cost tier: standard (assumed, true cost unknown to system)
  - Routing: Generic override when explicitly configured

**Text-to-Speech (Premium voice synthesis):**
- ElevenLabs - Primary TTS provider
  - SDK/Client: Direct REST API via Supabase Edge Function (`supabase/functions/tts/index.ts`)
  - Auth: `ELEVENLABS_API_KEY` secret in Supabase
  - Models: eleven_multilingual_v2 (default), eleven_v3 (switchable server-side)
  - Voice roles (cast, recastable server-side without app rebuild):
    - `narrator` (Liam) - Course narration, default for all speak surfaces
    - `amelie` - Young confident (Quebec French) - dictée fallback
    - `leo` - Gentle enthusiastic (Quebec French) - dictée fallback
  - Voice IDs: Configurable via secrets (Liam has safe premade id, Amélie/Léo are Voice Library IDs)
  - Response: Base64 MP3 audio
  - Cost: Primarily voice synthesis; model choice is control-plane configurable

- Fish Audio - TTS fallback provider
  - SDK/Client: Fallback in tts/index.ts if ElevenLabs unavailable
  - Auth: Configured via Supabase secrets

- Custom OpenAI-compatible - TTS fallback
  - SDK/Client: Generic OpenAI-like endpoint
  - Auth: Server-side configuration

- Device TTS (expo-speech) - Fallback
  - On-device French speech synthesis (no API cost)
  - Silent unless EXPO_PUBLIC_SUPABASE_URL is set

**Speech-to-Speech (Exam grading - pronunciation assessment):**
- Azure Speech Services - Prosody scoring
  - Status: en-US only, no React Native SDK (blocking for multilingual)
  - Alternative: Deterministic written grader (implemented in `grade-exam` function)
  - On-device STT: expo-speech-recognition (Google on Android, native on iOS)

**Paywall & Subscriptions:**
- Adapty - In-app purchases, entitlements, renewals
  - SDK/Client: `react-native-adapty` v4.0.1 (ealch-v2)
  - Auth: Public SDK key in `EXPO_PUBLIC_ADAPTY_KEY` (client-safe, app-internal only)
  - Plans: monthly ('mo'), annual ('yr')
  - Stores: App Store (iOS), Google Play Store (Android), Stripe (web), Paystack (Africa PPP web checkout)
  - Webhook: Supabase function receives purchase/renewal events, persists to entitlement cache
  - Features: 'examiner' (one-time exam tier), subscription features per plan
  - Fallback: Offline free plan (honest default for users with no entitlement cached)

## Data Storage

**Databases:**
- PostgreSQL on Supabase - Primary data store
  - Connection: `DATABASE_URL` env var (server-side only)
  - Client: Drizzle ORM v0.45.2 (ealch-admin)
  - Migrations: `drizzle-kit` in `ealch-admin/drizzle/` directory
  - Dialect: PostgreSQL
  - Auth: Supabase managed (JWT auth for RLS, service role key for server functions)
  - RLS policies: Row-level security enforced (coached by Supabase Auth)

- PGlite (Embedded Postgres) - Local dev testing
  - Client: `@electric-sql/pglite` (ealch-admin only)
  - Purpose: Offline schema development, testing migrations without remote DB

**File Storage:**
- Supabase Storage - User content
  - SDK/Client: `@supabase/supabase-js` (ealch-v2)
  - Buckets:
    - Content bucket (lessons, vocab, corpus)
    - Snapshots bucket (OTA snapshot versions)
  - Auth: Supabase Auth (JWT-based, RLS policies)

- R2 (Cloudflare) - Pre-rendered asset CDN
  - Purpose: Audio files (Phase 7, AUDIO-RENDER-SPEC.md end-state)
  - SDK/Client: Public base URL in `EXPO_PUBLIC_ASSET_BASE_URL`
  - Connection: Fallback from Supabase Storage if not configured
  - Access: Public read (no auth required for assets)

**Caching:**
- AsyncStorage (React Native) - Client-side persistence
  - Purpose: Entitlement cache (offline-first, reconciles on foreground)
  - Package: `@react-native-async-storage/async-storage`
  - Best-effort only (corrupt reads default to free plan)

- Redis - Not used (all data queries direct to Postgres)

## Authentication & Identity

**Auth Provider - ealch-v2 (Mobile App):**
- Supabase Auth
  - SDK: `@supabase/supabase-js` v2.110.2
  - Session: JWT refresh tokens (Supabase manages token refresh)
  - Token storage: httpOnly-equivalent on mobile (AsyncStorage for local auth state)
  - OAuth: Not currently integrated (email/password + demo mode)
  - RLS: Row-level security enforced on queries via auth.uid()

**Auth Provider - ealch-admin (Console):**
- next-auth v5.0.0-beta.31 (beta)
  - Provider(s): Not yet fully specified in codebase scan
  - Session: Server-side sessions (Next.js middleware)
  - Token: httpOnly cookies recommended (session management)

**Guest Access:**
- Coach, TTS, STT Edge Functions: `--no-verify-jwt` flag allows guest access (no authentication required for core app features)

## Monitoring & Observability

**Analytics:**
- PostHog - Product analytics
  - SDK/Client: HTTP POST to PostHog capture endpoint (no SDK library)
  - Auth: Public key in `EXPO_PUBLIC_POSTHOG_KEY` (client-safe)
  - Host: `https://us.i.posthog.com` (configurable via `EXPO_PUBLIC_POSTHOG_HOST`)
  - Features: No autocapture, no session replay, no cohort telemetry (Phase 2 gap, client-side only)
  - Events: Paywall funnel (paywall_viewed, plan_selected, purchase_completed, etc.), gating events
  - Event schema: `AnalyticsEvent` union type (see `src/services/analytics.ts`)
  - Fire-and-forget: Offline or PostHog down = event dropped (no queue)

**Error Tracking:**
- Not integrated (no Sentry or equivalent detected)

**Logs:**
- Console stdout/stderr only (no centralized logging)
- GitHub Actions CI logs (for builds, tests, dry-run publish)

**Circuit Breaker (Coach LLM):**
- Module-scope best-effort circuit breaker in coach/index.ts
- Trips after repeated failures, re-probes on cooldown
- PostHog integration: Trips/recoveries logged when `POSTHOG_API_KEY` is set
- Per-instance (ephemeral edge instances), not durable

## CI/CD & Deployment

**Version Control:**
- GitHub repository (wonerocks-team/wonerock)
- Main branch: `build/ealch-v2-expo`

**CI Pipeline:**
- GitHub Actions (`.github/workflows/ci.yml`)
  - Runs on: Every PR and pushes to build/* branches
  - ealch-v2 job:
    - Node 24, npm
    - typecheck (tsc --noEmit)
    - pure-island tests (node --test)
    - Honesty gates (fabricated card numbers, price literals, SRS ladder)
    - seed.json byte ceiling check (16 MiB limit)
  - ealch-admin job:
    - Node 24, pnpm
    - typecheck (includes cross-repo TS import surface)
  - publish-dry-run job (conditional, requires `DATABASE_URL` secret):
    - Python 3.12 for French validation gates
    - content:publish --dry-run against canonical Postgres

**Mobile Deployment - ealch-v2:**
- EAS (Expo Application Services)
  - Builds: development (dev client), preview (internal APK), production (signed)
  - Channels: `preview`, `production`
  - Submission: Google Play (via service account key in play-service-account.json), App Store (via EAS)
  - Version source: Remote (managed by EAS)
  - Runtime version: Fingerprint-based (content-based versioning)

- Expo Updates (OTA)
  - Update server: `https://u.expo.dev/f7effa79-feb1-4e79-a567-536e32da5306`
  - Project ID: `f7effa79-feb1-4e79-a567-536e32da5306`
  - Owner: `wonerocks-team`
  - Channels: Development, preview, production (separate release tracks)

**Admin Deployment - ealch-admin:**
- Hosting platform: Not yet deployed/specified
- Database: Supabase (managed Postgres, daily backups)
- Node.js server runtime: Required

**Build Secrets/Configuration:**
- GitHub repo secrets (configured in repo settings):
  - `DATABASE_URL` - Postgres connection (Supabase production)
  - Any future provider keys (NVIDIA_API_KEY, ANTHROPIC_API_KEY, etc.)
- EAS secrets: Managed via `eas secrets` CLI (per-build-profile)
- Supabase secrets: Injected into Edge Functions at deploy time

**Supabase Edge Functions Deployment:**
- Deploy: `supabase functions deploy <function-name>`
- Functions:
  - `coach` - LLM routing and prompting (--no-verify-jwt)
  - `tts` - ElevenLabs/Fish Audio voice synthesis (--no-verify-jwt)
  - `stt` - Speech-to-text (not yet detailed)
  - `delete-account` - User account deletion (--no-verify-jwt)
  - `grade-exam` - Exam answer grading with deterministic rubric
  - `adapty-webhook` - Handles Adapty subscription events

## Environment Configuration

**Development - ealch-v2:**
- Required env vars: None (app runs fully offline with simulated coaching)
- Optional env vars:
  - `EXPO_PUBLIC_SUPABASE_URL`, `EXPO_PUBLIC_SUPABASE_ANON_KEY` - For real auth, storage, functions
  - `EXPO_PUBLIC_ADAPTY_KEY` - For paywall testing (Adapty sandbox)
  - `EXPO_PUBLIC_POSTHOG_KEY` - For analytics (optional)
  - `EXPO_PUBLIC_ASSET_BASE_URL` - For R2 asset CDN (optional, falls back to Supabase)
- Secrets location: `.env` (gitignored, never committed)
- Mock/stub services: Device speech (no API key needed), Adapty sandbox mode

**Development - ealch-admin:**
- Required env vars:
  - `DATABASE_URL` - Supabase connection string (or local pglite for offline)
- Secrets location: `.env` (gitignored)
- Local DB: PGlite for testing migrations without remote DB

**Production - ealch-v2:**
- Secrets management: EAS secrets (stored securely, injected at build time)
- Monitoring: PostHog (optional, fire-and-forget)
- Supabase: Production project (separate from dev/staging)

**Production - ealch-admin:**
- Secrets management: Environment variables (platform-specific, e.g., Vercel env vars if deployed there)
- Database: Supabase production project with daily backups
- Logging: Platform logs only (stdout/stderr)

**Staging:**
- Separate Supabase project recommended (staging branch)
- Adapty: Sandbox mode (test subscriptions)
- PostHog: Separate staging workspace (optional)

## Webhooks & Callbacks

**Incoming:**
- Adapty webhook - `/supabase/functions/adapty-webhook/index.ts`
  - Events: Subscription created, renewed, cancelled, refunded
  - Verification: Adapty signature validation (server-side secret)
  - Response: Updates entitlement cache for offline reconciliation

**Outgoing:**
- None detected

## Content Publishing Pipeline

**Data Flow:**
- `ealch-admin` reads canonical TS schema from `ealch-v2/src/content/schema.ts` (one-way import)
- `content:publish` script validates all content, runs French gates, and updates Postgres
- `pnpm run content:publish -- --dry-run` runs full validation against DATABASE_URL (GitHub Actions gate)
- Seed cut: Offline seed.json extracted via `seed-cut.config.ts` (subset of Postgres for offline access)

**French Validation Gates (Phase 2.D):**
- Tools: verbecc (verb conjugation), mlconjug3 alternatives
- Execution: Python subprocess spawned by publish-content.ts
- Binary: `PYTHON_BIN` env var or `python` on PATH
- CI requirement: Python 3.12 via GitHub Actions setup

---

*Integration audit: 2026-09-19*
*Update when adding/removing external services or changing provider configuration*
