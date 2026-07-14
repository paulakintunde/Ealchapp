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
