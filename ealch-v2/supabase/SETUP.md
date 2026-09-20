# Ealch v2 — Backend Setup (Supabase)

Follow these steps top to bottom; ~20 minutes. When you finish, sign-in,
remote config, and the AI coach in the app are real.

## 1. Create the project

1. Go to [database.new](https://database.new) (Supabase dashboard → New project).
2. Name: `ealch`, region: closest to your users (e.g. `eu-west-3` Paris).
3. Save the **database password** somewhere safe.
4. From **Project Settings → API**, copy:
   - `Project URL` → `EXPO_PUBLIC_SUPABASE_URL`
   - `anon public` key → `EXPO_PUBLIC_SUPABASE_ANON_KEY`

## 2. Create the schema + seed the control plane

Dashboard → **SQL Editor** → paste and run, in order:

1. `supabase/schema.sql` — tables + RLS + active config row
2. `supabase/seed.sql` — versioned system prompts (coach / examiner / survival)

(Or with the CLI: `supabase db push` after `supabase link`.)

## 3. Enable auth providers

Dashboard → **Authentication → Providers**:

- **Email**: on (magic links optional).
- **Apple / Google**: add when you have the OAuth credentials from the
  developer accounts (step 5 of the launch plan). Email alone is enough to
  test.

## 4. Deploy the Edge Functions

Install the CLI ([docs](https://supabase.com/docs/guides/cli)) then:

```bash
cd ealch-v2
supabase login
supabase link --project-ref <YOUR_PROJECT_REF>   # ref is in the dashboard URL

# provider secrets — set the ones you have; the function falls through the chain
supabase secrets set KIE_API_KEY=...        # primary orchestrator
supabase secrets set NVIDIA_API_KEY=...     # secondary (failover)
supabase secrets set ANTHROPIC_API_KEY=...  # tertiary (direct Claude)
supabase secrets set POSTHOG_API_KEY=...    # optional: failover telemetry

supabase functions deploy coach --no-verify-jwt
supabase functions deploy tts   --no-verify-jwt   # optional premium voices
# for tts: supabase secrets set ELEVENLABS_API_KEY=... (and/or FISH_API_KEY=...)
```

Smoke-test the coach from your terminal:

```bash
curl -s "https://<PROJECT_REF>.supabase.co/functions/v1/coach" \
  -H "Authorization: Bearer <ANON_KEY>" -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Pourquoi « je voudrais » et pas « je veux » ?"}],"lang":"en"}'
# → {"reply":"...","provider":"kie"}
```

Smoke-test the hardened `tts` function (Phase 3, SEC-01) — three cases, all should be true after 03-04-PLAN.md deploys the wired function:

```bash
# 1. Zero Authorization header at all → must be rejected, not served.
curl -s -o /dev/null -w "%{http_code}\n" "https://<PROJECT_REF>.supabase.co/functions/v1/tts" \
  -X POST -H "Content-Type: application/json" -d '{"text":"bonjour"}'
# → 401 (Supabase's own platform gate rejects a request with no apikey at all;
#   this checks the request never reaches application code without ANY key)

# 2. Only the anon key (no signed-in user) → must be treated as guest, not premium.
curl -s "https://<PROJECT_REF>.supabase.co/functions/v1/tts" \
  -X POST -H "Authorization: Bearer <ANON_KEY>" -H "Content-Type: application/json" \
  -d '{"text":"bonjour"}'
# → 401 {"error":"...","reason":"guest_not_allowed"} — the anon key alone
#   never resolves to a real auth.uid() (D-03/Pitfall 1's exact concern)

# 3. A real signed-in user's JWT (from a logged-in device/app session) → succeeds
#    up to their tier's cap, then 429 past it.
curl -s "https://<PROJECT_REF>.supabase.co/functions/v1/tts" \
  -X POST -H "Authorization: Bearer <USER_JWT>" -H "Content-Type: application/json" \
  -d '{"text":"bonjour"}'
# → 200 {"audio":"...","format":"mp3","provider":"elevenlabs"} while under cap,
#   429 {"error":"...","reason":"daily_chars"|"daily_requests"|"monthly_chars"|"burst"|"free_preview_exhausted"} once exceeded
```

Deploy the exam-start gate (Phase 4, PAY-03, `start-exam-attempt`) — no new secret required, it only reads the platform-injected `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` / `SUPABASE_ANON_KEY`:

```bash
supabase functions deploy start-exam-attempt --no-verify-jwt
```

`start-exam-attempt` re-derives the entire exam-access decision server-side — it reads `system_config.config.examGateOn` / `examFreePapers` and the `entitlements` mirror, and writes the authorized attempt to `exam_attempts`. It never trusts a client-supplied paper number, entitlement flag, or duration. Smoke-test its auth boundary — all three must return 401 before any database read:

```bash
# 1. Zero credentials.
curl -s "https://<PROJECT_REF>.supabase.co/functions/v1/start-exam-attempt" \
  -X POST -H "Content-Type: application/json" -d '{"paperId":"paper.tef_canada.blanc.1","skill":"CO"}'
# → 401 {"error":"...","reason":"auth_required"}

# 2. Anon key only, no signed-in user.
curl -s "https://<PROJECT_REF>.supabase.co/functions/v1/start-exam-attempt" \
  -X POST -H "Authorization: Bearer <ANON_KEY>" -H "apikey: <ANON_KEY>" -H "Content-Type: application/json" \
  -d '{"paperId":"paper.tef_canada.blanc.1","skill":"CO"}'
# → 401 {"error":"...","reason":"auth_required"} — an anon key alone never resolves to auth.getUser()

# 3. Malformed/nonexistent input, no credentials — proves the uid check runs before any paper lookup.
curl -s "https://<PROJECT_REF>.supabase.co/functions/v1/start-exam-attempt" \
  -X POST -H "Content-Type: application/json" -d '{"paperId":"nonexistent-paper-zzz-999","skill":"XX"}'
# → 401, not 400 (avoid literal "../" path-traversal-shaped payloads here — Cloudflare's
#   WAF intercepts those with its own 403 before the request ever reaches the function)
```

Flipping `system_config.config.examGateOn` to `true` is what actually activates the exam paywall — both the client (`src/utils/examGate.logic.ts`) and this function must agree on the decision, held honest by `src/utils/examGate.parity.test.ts`. Do not flip it until this function is deployed and curl-proven.

## 5. Point the app at the project

```bash
cp .env.example .env
# fill in:
#   EXPO_PUBLIC_SUPABASE_URL=https://<PROJECT_REF>.supabase.co
#   EXPO_PUBLIC_SUPABASE_ANON_KEY=<anon key>
npx expo start -c        # -c clears the env cache
```

What changes in the app once `.env` is set:

- **Sign in / create account** → real Supabase Auth sessions
- **Le Coach chat & "Pourquoi ?"** → live LLM replies via the `coach` function
  (canned replies remain as the offline fallback — the app never hard-fails)
- **Launch & foreground** → `system_config` fetched and cached (change the
  row in the dashboard and relaunch: models/providers/prompts swap with no
  app update — this is the admin control plane)

## 6. Verify the control plane

In the dashboard, edit `system_config.config` → set `"promptVersion": "v2"`,
insert a `system_prompts` row (`key='coach', version='v2', active=true`) with
a different persona, relaunch the app, and ask the coach a question — the new
prompt should be live. That round-trip is the whole point of the
architecture: no redeploy, fully auditable, reversible by flipping `active`.

## Costs

Free tier covers all of this during development (500K Edge Function
invocations/month, 50K MAU auth). The only real spend is the LLM provider
key you plug in.
