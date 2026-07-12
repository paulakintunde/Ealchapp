# Ealch — workspace handoff (updated 2026-07-12)

Read this first when resuming work in a new session. It reflects the live state
of the project, not aspirations.

## What this repo contains

| Path | What it is | Status |
|---|---|---|
| `ealch-v2/` | React Native + Expo SDK 57 mobile app (21 screens) | Complete, wired to live backend |
| `ealch-admin/` | Next.js 16 Ops Console (9 screens, 2FA, RBAC, audit log) | Complete, 6/6 Playwright tests pass |
| `project/`, `chats/` | Design handoff artifacts | Reference only |

Branches: `main` is current. `dev` mirrors it. `build/ealch-v2-expo` is an old
pre-backend snapshot — do not build from it.

## Live backend (Supabase)

- Project: **frenchapp Project**, ref `keuquwfrunoncwfmkque`, region us-east-2
- URL: `https://keuquwfrunoncwfmkque.supabase.co`
- Schema: migration `ealch_control_plane` applied — `system_config`,
  `system_prompts`, `profiles`, `review_items`, `sessions`, all with RLS
- Seed: 3 active system prompts (coach / examiner / survival) + active config
  (NVIDIA orchestrator, Nemotron models)
- Edge Functions: `coach` and `tts` deployed (`--no-verify-jwt`), smoke-tested
  end-to-end — coach answers French questions, tts returns Fish Audio MP3
- Secrets are set via dashboard (Settings → Edge Functions)
- **Provider note**: resolver order is AI_API → OpenRouter → NVIDIA → Anthropic.
  `OPENROUTER_API_KEY` is set, so OpenRouter is currently PRIMARY and NVIDIA is
  fallback. To make Nemotron primary: delete the OpenRouter secret, or reorder
  the chain in `ealch-v2/supabase/functions/coach/index.ts` and redeploy.

## Running locally

### Mobile app (`ealch-v2/`)
```
cd ealch-v2
npm install          # already done on this machine
npx expo start       # then Expo Go on phone: exp://<LAN-IP>:8081
```
`.env` (gitignored, already present) needs:
```
EXPO_PUBLIC_SUPABASE_URL=https://keuquwfrunoncwfmkque.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=<anon key — Supabase dashboard → Settings → API>
```

### Ops Console (`ealch-admin/`)
```
cd ealch-admin
pnpm install
pnpm run db:migrate && pnpm run db:seed   # embedded PGlite, no Postgres needed
pnpm dev                                  # http://localhost:3000
```
Login: seeded admin users with TOTP secrets are in `scripts/seed.ts`.
Playwright: `pnpm run test:e2e` (uses port 3100 per `playwright.config.ts`).

## Known issues / loose ends

1. **GitHub PAT is read-only** — the token in `gh auth` can clone but not push
   ("Write access to repository not granted"). Grant it Contents: Read & write
   on `paulakintunde/Ealchapp`. One local commit is waiting to push:
   `cb52a36` (tts operator-precedence fix — the DEPLOYED function already has it).
2. **Key rotation** — the original NVIDIA / Fish Audio / OpenRouter / Supabase
   keys were exposed in an earlier chat. If not yet rotated, rotate and update
   the Edge Function secrets.
3. `ealch-admin` metric KPIs anchor to `max(metrics.ts)`, not wall clock — by
   design, since seed data is static.

## Next steps (launch plan)

1. Decide NVIDIA-vs-OpenRouter primary (see Provider note above)
2. RevenueCat: Monthly $9.99 / Annual products + replace simulated upgrade flow
   in `ealch-v2` Settings; products also needed in App Store Connect / Play Console
3. Real push notifications (Expo Push / FCM / APNs) for practice reminders
4. App identity: bundle IDs in `app.json`, icons, splash
5. EAS preview builds → TestFlight / Play internal testing → submit
   (the `expo@claude-plugins-official` plugin is installed — use its
   `eas-app-stores`, `expo-dev-client`, `eas-workflows` skills)
