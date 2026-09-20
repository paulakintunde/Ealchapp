# Phase 3: TTS Security Hardening - Research

**Researched:** 2026-09-19
**Domain:** Supabase Edge Functions (Deno) auth + per-user rate limiting on top of an existing ElevenLabs TTS proxy, in a React Native/Expo client with an existing entitlement/purchase system
**Confidence:** HIGH — every load-bearing claim below was verified directly against this repo's code (not training-data guesses), cross-checked against an already-shipped, structurally-identical pattern (`coach` edge function) in the same codebase.

## Summary

The `tts` Supabase Edge Function (`ealch-v2/supabase/functions/tts/index.ts`) has zero identity check today: it's deployed with `--no-verify-jwt`, reads no `auth.uid()`, and enforces only a flat 2400-character-per-request cap shared by every caller on the internet. The fix is not novel — this exact problem (unauthenticated/guest-exposed edge function that must still serve guests, capped per-identity, atomic under concurrency, tunable from `system_config` without a redeploy) was already solved in this codebase for the `coach` function (`ealch-v2/supabase/functions/coach/index.ts`) during a prior phase. That function's `callerUid()` (verify-the-caller's-own-JWT pattern), `bumpTurn()` (single-statement atomic Postgres UPSERT via RPC), and `hasUnlimitedCoach()` (server-side entitlements-table read, fail-closed) are the three building blocks TTS hardening should copy near-verbatim, then extend for character-weighted, multi-window quotas (daily/monthly chars, daily/burst request counts, one-shot free allowance) instead of `coach`'s single daily-count check.

The most important correction to CONTEXT.md's open question (D-03): guests are **not** already isolated from the remote TTS path by any code-level gate. `ealch-v2/app/placement.tsx` (reachable by a fully unauthenticated "Continue as Guest" user via `den.tsx`'s placement banner, with no sign-in required anywhere in that path) calls `tts.speak(q.item.fr)` directly, and `tts.ts`'s `speak()` has no auth-state branch at all — it goes remote whenever `getConfig().ttsProvider !== 'device'`, for every caller, signed in or not. The only reason guests don't hit ElevenLabs today is that `system_config.ttsProvider` defaults to `'device'` — a **config value**, not a code guard, and CONTEXT.md itself notes this flag can be flipped from the Ops Console with no app release. This means D-01/D-02 require real new gating code, not just a confirmation of existing safe behavior.

**Primary recommendation:** Copy `coach/index.ts`'s three-function pattern (`callerUid`, an atomic Postgres RPC counter, entitlements-table tier lookup) into `tts/index.ts`, extend the RPC to be character-weighted and multi-window, add the new SQL objects directly to `ealch-v2/supabase/schema.sql` (this project has no `supabase/migrations/*.sql` directory — schema changes are hand-applied via the Supabase Dashboard SQL Editor or `supabase db push`, not a migration file), and change nothing in `ealch-v2/src/services/tts.ts` — its `resolveRemote()` already funnels every failure mode (401, 429, 502, network) through the same `return null` → device-speech fallback path with zero branching on status code.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| SEC-01 | The TTS edge function rejects unauthenticated requests (real `auth.uid()` check, not just `verify_jwt=true` which still accepts the anon key) and enforces a per-user rate limit | `callerUid()` pattern (verified, copied from `coach/index.ts`) answers the auth-check half; the `coach_usage`/`coach_bump` atomic-counter pattern (verified, same file) answers the rate-limit half. See Architecture Patterns and Code Examples below for the exact extension needed (character-weighted, multi-window) versus `coach`'s simpler single daily count. |

</phase_requirements>

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Pre-auth / guest usage**
- **D-01:** Guests (no Supabase session, e.g. during onboarding/placement before sign-in) must NOT get unrestricted live ElevenLabs synthesis. Default guest experience is device TTS and/or cached, pre-generated premium audio clips (pre-rendered, not live-synthesized).
- **D-02:** If hearing custom premium speech pre-signup is judged essential to activation, guests may get exactly ONE short live preview (~300–500 characters), protected by IP/device limits, bot controls, and a global spend ceiling. Prefer a pre-recorded sample over a live synthesis call wherever one can serve the same purpose (a pre-rendered clip costs nothing per play; a live call does).
- **D-03 (research required before implementation, per user request):** Verify whether onboarding/placement (`app/onboarding.tsx`, `app/placement.tsx`) actually calls the remote TTS path today, or whether guest screens already run device-only. PITFALLS.md's Pitfall 1 assumption ("check what auth state the caller is in when TTS is invoked") must be validated against the real call graph, not assumed. This determines whether D-01/D-02 requires new gating code or just confirms existing behavior.
  - **ANSWER (this research, VERIFIED against code): new gating code is required.** See Summary above and "D-03 Findings" below for the full call-graph trace.

**Signed-in user rate limits (config values, not hardcoded — tune later from observed p50/p95)**
- **D-04:** Meter primarily by **characters**, not just request count.
- **D-05: Premium (entitled) tier** — 2,000 chars/day · 25,000 chars/month · 30 requests/day · 3 requests/minute burst limit · 2,500 chars/request cap. (Note: the edge function's current `MAX_CHARS` constant is 2400, not 2500 — Claude's discretion whether to bump it to 2500 or treat 2400 as close enough; the 100-char difference is not material.)
- **D-06: Free (signed-in, non-paying) tier** — a **one-shot preview allowance**, not a recurring day/month budget: 2,500 characters, once (lifetime or until some reset policy the planner proposes), rather than an ongoing daily/monthly quota. This is deliberately closer to "a taste of premium voice" than an ongoing feature — free users who exhaust it fall back to device TTS for all subsequent speech, same as anyone who is rate-limited.
- **D-07:** "Premium" vs "free" maps to the existing entitlement/purchase check (see `ealch-v2/src/store/entitlement.logic.ts`) — a signed-in user with no active entitlement is "free" for TTS-quota purposes, not a third tier.

**Admin / authoring usage**
- **D-08 (already verified, no action needed):** Admin content authoring does NOT call this public edge function at all. `ealch-admin/scripts/render-audio.ts` calls the ElevenLabs API directly with its own `ELEVENLABS_API_KEY` from `ealch-admin/.env` — a separate, already-isolated pipeline (local Node script, server-side credential, never shipped to a browser or client bundle). No shared quota, bypass, or admin-role check needs to be designed for this phase; the two paths do not intersect. (Confirmed via repo search: no `functions.invoke` call to the `tts` function anywhere in `ealch-admin`.)
  - **RE-CONFIRMED (this research):** grep of `ealch-admin` for `functions.invoke(...tts...)` and `ttsFunction` returns zero matches; `render-audio.ts` reads `process.env.ELEVENLABS_API_KEY` directly (lines 326-327, 630-631), never via Supabase.
- If research/planning turns up any OTHER path that does call the public edge function from an authoring context (e.g. a preview button inside `ealch-admin`'s UI), it must go through a verified server-side admin role or a separate batch job with its own distinct quota — never an unlimited bypass, and never a client-exposed API key.
  - No such path was found.

**Endpoint direction**
- **D-09:** Harden and retain the endpoint — do NOT retire it (CONCERNS.md floated retirement as an option; explicitly rejected in favor of hardening).
- **D-10:** Required hardening surface: keep the ElevenLabs key server-side (already true), add input length limits (already true — `MAX_CHARS`), add real authorization (currently missing entirely — deployed with `--no-verify-jwt` and no in-body `auth.uid()` check), add character-weighted per-user quotas (D-04–D-07), add caching (avoid re-synthesizing identical text+voice+lang — the client already caches synthesized audio to disk by content hash, per `ealch-v2/src/services/tts.ts:102-125`; decide whether server-side caching is also worth adding or whether client-side caching is sufficient), concurrency control, spend alerts, audit logging, and confirm the automatic device-TTS fallback already in `tts.ts` correctly triggers on BOTH quota-exhaustion (429) and provider failure (502) — not just provider failure as today.
  - **VERIFIED (this research):** `resolveRemote()` in `tts.ts` treats every failure identically — `if (error || !data?.audio) return null;` — with no branching on HTTP status. A 401 or 429 from the hardened function reaches this exact line and falls to device speech with **zero client code changes needed**. See "tts.ts Client Fallback Verification" below.

### Claude's Discretion
- Exact free-tier reset policy (does the one-shot 2,500-char allowance ever refresh, e.g. monthly, or is it truly once-per-account-ever?) — user specified "once" but didn't rule out a slow reset; pick something sensible and state the choice explicitly in the plan.
- Whether to bump `MAX_CHARS` from 2400 to 2500 or leave it (D-05 note).
- Exact mechanism for the guest global spend ceiling and bot controls (D-02) — CAPTCHA, device attestation, IP+device fingerprint combo, etc. — implementation detail.
- Whether server-side response caching is added on top of the client's existing disk cache, or the client cache is judged sufficient (D-10).
- Concurrency-control mechanism (e.g., a Postgres-backed token bucket vs. an in-memory Deno KV counter vs. a dedicated rate-limit table) — implementation detail, informed by research into what's easiest to operate on Supabase's free tier.
  - **Research finding for this discretion point:** Deno KV is NOT available on Supabase's Edge Runtime (see Environment Availability). A Postgres-backed counter via RPC is not just "easiest" — it's the only durable option available, and it is already the proven, production pattern in this exact codebase (`coach_usage` table + `coach_bump()` RPC). Recommend extending that pattern rather than evaluating alternatives.

### Deferred Ideas (OUT OF SCOPE)
- **Onboarding funnel A/B test** (guest device/cached TTS vs. one limited live premium preview, measuring activation/signup-conversion/retention/TTS-engagement/cost-per-activated-user) — this is a growth/analytics experiment, not an auth/rate-limit change, and was explicitly deferred by the user to its own future phase rather than built into Phase 3. It likely depends on Phase 9's analytics audit (QA-02) landing first, since that phase is what builds out funnel-level event tracking. Flag for the roadmapper as a candidate future phase.

None — no other discussion stayed outside phase scope.
</user_constraints>

## Project Constraints (from CLAUDE.md)

No `CLAUDE.md` exists in the Ealchapp working directory (`C:\Users\harki\Downloads\gitbuild appealch\Ealchapp\CLAUDE.md` — confirmed absent by direct read attempt). The `CLAUDE.md` content visible in this session's system context is scoped to an unrelated home-directory workspace (`agentic r antigravity/`) and does not apply to this project. No project-level directives to reconcile against for this phase. No `.claude/skills/` or `.agents/skills/` directory exists in this repo either (confirmed via glob — zero matches).

## D-03 Findings: The Real Guest Call Graph (traced, not assumed)

This is the specific research task the user called out by name. Full trace, file and line cited at each hop:

1. **`ealch-v2/app/onboarding.tsx`** — never calls `tts.speak()` or any TTS API directly (grepped for `tts.`, `TtsVoice`, `speak(` — zero matches). It does call `stt.listen()` for the mic-calibration step (step 9), which is unrelated (speech-to-text, not TTS). **Onboarding itself is TTS-silent.**
2. Onboarding's step 1 ("Account") offers `continueAsGuest()` (line 181-185 of `onboarding.tsx`), which sets `s.accountType = 'guest'` and advances the wizard **with no Supabase Auth call at all** — `auth.signUpWithEmail` is only invoked by the sign-up path, never by the guest path. A guest who finishes onboarding (`finish()`, line 137-144) calls `s.completeOnboarding(level)` and routes to `/splash` → `/home`, all without ever creating a Supabase session. `useAuthSession()` (`ealch-v2/src/services/session.ts`) never fires `setSession()` for this user; `useStore` has no `userId`.
3. From `home.tsx`, a guest can navigate to `den.tsx` with no auth gate (`app/_layout.tsx`'s route stack has no auth-guard wrapper on any screen — routing is entirely `expo-router`'s flat Stack, gated only on `hydrated`/fonts, never on session state).
4. **`ealch-v2/app/den.tsx:107-119`** renders a "Placement banner" (`T.denBanT`/`T.denBanS`, unconditional — no entitlement or auth check on this `Press`) that does `router.push('/placement')`.
5. **`ealch-v2/app/placement.tsx:189`** — the quick-check quiz screen — calls `tts.speak(q.item.fr)` directly on every question's "listen" button press, with **no auth check, no guest-specific branch, no length/rate guard beyond whatever `tts.ts` itself does**.
6. **`ealch-v2/src/services/tts.ts`, `speak()` (line 299 onward):** the remote-vs-device branch (line 346-368) is `const provider = getConfig().ttsProvider; if (provider !== 'device' && ... ) { ... resolveRemote(...) ... }`. **There is no auth-state check anywhere in this function.** A guest and a signed-in user hit the exact same code path; the only variable is the global `ttsProvider` config flag.
7. **`ealch-v2/src/services/config.ts:98`** — `ttsProvider: 'device'` is the compiled-in default, and the live value is normally read from `system_config.config.ttsProvider` in Postgres (line 98 comment: "'device' by POLICY (approved 2026-07-21)"). CONTEXT.md's canonical_refs section already flags that when an operator flips this to `'elevenlabs'` in the Ops Console (e.g., to audition a voice, or by mistake), **remote synthesis becomes the default for every user, including every guest who has ever reached `placement.tsx`**, with no additional code path required.

**Conclusion for the planner:** D-01/D-02 are not "confirm existing behavior" — they require an explicit, code-level guest gate inside `tts.speak()` or `resolveRemote()` (or at the call site in `placement.tsx`) that does not rely on `ttsProvider` staying `'device'` as its only safety net. The server-side hardening in `tts/index.ts` (auth check + rate limit) is the primary and sufficient enforcement point regardless of what the client does — an unauthenticated caller (guest, sending only the anon key) hitting the edge function directly must be rejected or capped there, which closes this gap even if `placement.tsx`'s client-side call site is left unchanged. Client-side guest gating (D-02's "exactly ONE short live preview") is an additional UX-level decision, not required for SEC-01's security boundary, but IS required to satisfy CONTEXT.md's D-01 product decision.

## tts.ts Client Fallback Verification (D-10's last sub-item)

Read in full: `ealch-v2/src/services/tts.ts:96-129` (`resolveRemote`). The function:
```ts
const { data, error } = await sb.functions.invoke(ENV.ttsFunction, {
  body: { text, voice, lang: lang.startsWith('en') ? 'en' : 'fr' },
});
if (error || !data?.audio) return null;
```
`supabase-js`'s `functions.invoke()` surfaces any non-2xx response as a populated `error` (a `FunctionsHttpError`), regardless of status code — 400, 401, 429, 502 all take the same branch. `resolveRemote()` never inspects `error.context?.status` or any status code; it treats every failure uniformly and returns `null`. The caller (`speak()`, line 356-368) treats a `null` return as "no remote audio," sets a 60-second cooldown (`remoteDownUntil`), and falls through to the device-speech `attempt()` path (line 370 onward), which never produces silence (retries once on Android's "not bound" race, per the file's own documented `START_GRACE_MS` handling).

**Verified: no client-side code change is required to support 401 (auth rejected) or 429 (quota exhausted) responses from the hardened function.** Both already produce the same "fall back to device speech" behavior as today's 502 (all-providers-failed) case. The only new behavior introduced by this phase is which HTTP status the edge function returns and why — the client is already correct.

One minor consequence worth flagging to the planner: because `resolveRemote()`'s cooldown is a global (module-scope) 60-second flag, not per-status-code, a guest who gets 401'd once will not retry the remote path again for 60 seconds even though a retry would 401 again regardless — this is harmless (it just avoids hammering the endpoint) but means a 401 and a transient 502 are indistinguishable to the client. This is existing, acceptable behavior — no fix needed for SEC-01.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Verify caller identity (`auth.uid()`) | API / Backend (Edge Function) | — | Must happen server-side; a client-asserted identity is exactly the vulnerability being closed. `--no-verify-jwt` stays (per `coach`'s precedent) because guests must still be servable — the function does its own `getUser()` check in-body instead of relying on the platform gate. |
| Character-weighted quota tracking (daily/monthly/burst/one-shot) | Database / Storage (Postgres via RPC) | API / Backend (Edge Function calls RPC) | Must be atomic under concurrent requests from the same user (parallel devices, retries) — a read-then-write in JS is a race; a single SQL statement is not. Same reasoning already encoded in this repo's `coach_bump` comment. |
| Premium vs. free tier classification | Database / Storage (`entitlements` table, service-role read) | — | The client's `entitlement.logic.ts` is not reachable from Deno; the server-side mirror table (`public.entitlements`, written by `adapty-webhook`) is the only trustworthy source an edge function can read without trusting a client claim. |
| Guest/pre-auth gating (D-01/D-02) | Browser / Client (`tts.ts` / `placement.tsx` call site) AND API / Backend (edge function still enforces its own guest cap as defense-in-depth) | — | Product-level guest UX (device-only default, or a capped one-shot preview) is naturally a client decision about what to *call*; but the edge function must not trust the client to have applied it, so the server-side unauthenticated-caller cap is the actual security boundary. |
| Provider fallback chain (ElevenLabs → custom → Fish) | API / Backend (Edge Function, unchanged) | — | Already correctly placed; this phase does not need to touch `elevenlabs()`/`customTts()`/`fishAudio()`. |
| Device-TTS fallback on any remote failure | Browser / Client (`tts.ts`, unchanged) | — | Already correctly placed and already correct for the new failure modes (verified above). |
| Remote-config-driven quota values (tunable without redeploy) | Database / Storage (`system_config` row) | API / Backend (Edge Function reads via service role, 60s TTL cache) | Matches the existing `elevenModelId()`/`routing()` pattern exactly — this phase should add new keys to the same `system_config.config` JSON blob, not a new config mechanism. |

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `@supabase/supabase-js` (via `jsr:@supabase/supabase-js@2`) | 2.x (JSR-pinned, matches existing `coach`/`tts` imports) | Server-side Supabase client inside the Deno edge function, used both for the service-role `system_config`/`entitlements`/RPC calls and for the caller-scoped `getUser()` identity check | Already the exclusive DB/auth client used by every other edge function in this repo (`coach`, `delete-account`, `grade-exam`, `adapty-webhook`) — no reason to introduce anything else |
| Deno (Supabase Edge Runtime) | Whatever Supabase's hosted Edge Runtime currently ships (not independently pinned by this repo) | Execution environment for `tts/index.ts` | Platform-mandated; local `deno --version` on this dev machine reports 2.9.5, consistent with recent Supabase Edge Runtime Deno 2.x support [CITED: Supabase blog "Edge Functions: Deploy from the Dashboard + Deno 2.1"] |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| PL/pgSQL (Postgres, built-in) | Whatever the Supabase project runs (Postgres 15+ typical) | Atomic increment-and-check RPC functions for the rate-limit counters | This is the correct tool for "atomic under concurrency" per the existing `coach_bump` precedent — no external rate-limiting library needed or available |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Postgres-backed counter table + RPC | Deno KV | **Not available** on Supabase's hosted Edge Runtime as of this research (community reports confirm attempts to enable `"unstable": ["kv"]` in `deno.json` do not work on Supabase's platform) [CITED: GitHub supabase/discussions#40713] — ruled out, not a real option |
| Postgres-backed counter table + RPC | Upstash Redis (or similar external rate-limit service) | Works, and is what generic Supabase rate-limiting guides recommend [CITED: supabase.com/docs/guides/functions/examples/rate-limiting], but adds a new paid third-party dependency and a new secret/connection to manage, when this exact problem is already solved in-repo with Postgres for `coach`. Only worth it if Postgres RPC latency becomes a measured problem — not justified up front for a solo-dev app on Supabase's free/low tier. |
| Server-side entitlement check via `entitlements` mirror table | Re-deriving entitlement state via an Adapty server SDK call per TTS request | Adds a network round-trip to a third party on every TTS call and a new secret; the `entitlements` table already exists specifically so server-side functions don't have to do this (see `coach`'s `hasUnlimitedCoach`, which reads the same table) |

**Installation:** No new packages. `jsr:@supabase/supabase-js@2` is already imported in `tts/index.ts`.

**Version verification:** Not applicable — no new npm/JSR package versions are being introduced; this phase extends existing, already-pinned imports and adds pure SQL.

## Architecture Patterns

### System Architecture Diagram

```
                                   ┌─────────────────────────────┐
                                   │      system_config table     │
                                   │  (ttsPremiumDailyChars, etc)  │
                                   └───────────────┬──────────────┘
                                                    │ service-role read, 60s TTL cache
                                                    │ (same pattern as elevenModelId())
                                                    ▼
 Client (guest/free/premium)          ┌─────────────────────────────────────┐
 ealch-v2/src/services/tts.ts         │      Supabase Edge Function: tts      │
 speak() → resolveRemote()            │      ealch-v2/supabase/functions/tts  │
        │                             │                                       │
        │ sb.functions.invoke('tts')  │  1. Parse text/voice/lang, MAX_CHARS  │
        │ Authorization: <anon key>   │     guard (existing, unchanged)       │
        │   OR <user JWT>             │              │                       │
        └────────────────────────────►  2. callerUid(req)  ─── NEW ──────────┤
                                      │     verify caller's own JWT via a     │
                                      │     fresh anon-key client + forwarded │
                                      │     Authorization header, .getUser()  │
                                      │              │                       │
                                      │     uid = null (guest) ──────┐        │
                                      │              │               │        │
                                      │     uid present               │        │
                                      │              │               │        │
                                      │  3. entitlements table read   │        │
                                      │     (service role) → tier     │        │
                                      │     'premium' | 'free'        │        │
                                      │              │               │        │
                                      │  4. Postgres RPC: atomic      │        │
                                      │     increment+check for the   │        │
                                      │     resolved tier's window(s) │        │
                                      │     (daily/monthly/burst/     │        │
                                      │     one-shot) ── NEW ─────────┤        │
                                      │              │               │        │
                                      │     guest path: coarse IP/    ◄────────┘
                                      │     device cap (D-02), far    │
                                      │     stricter, or reject       │
                                      │     outright per D-01         │
                                      │              │                       │
                                      │  5. allowed? ─── no ──► 401/429 JSON  │
                                      │              │  yes                  │
                                      │              ▼                       │
                                      │  6. existing provider chain           │
                                      │     (ElevenLabs → custom → Fish)      │
                                      │     UNCHANGED                         │
                                      └───────────────┬───────────────────────┘
                                                       │ 200 { audio, format, provider }
                                                       │   OR 401/429/502 { error, reason }
                                                       ▼
                                      resolveRemote(): error||!data.audio
                                        → return null (UNCHANGED, already correct)
                                                       │
                                                       ▼
                                      speak(): fall through to Speech.speak()
                                        (device TTS) — never silence
```

### Recommended Project Structure
No new directories. Changes land in:
```
ealch-v2/supabase/functions/tts/
├── index.ts       # add callerUid(), tier lookup, RPC call — mirror coach/index.ts's shape
└── quota.ts        # NEW, optional but recommended: pure logic (limit resolution, tier
                     #   classification helpers) with NO Deno/supabase imports, so it can be
                     #   unit-tested with `node --test`, exactly like coach/routing.ts +
                     #   coach/routing.test.ts already do.
ealch-v2/supabase/schema.sql   # append new table(s) + RPC function(s) — this project has
                                #   no supabase/migrations/*.sql; schema.sql IS the migration.
```

### Pattern 1: Verify-caller's-own-JWT (`callerUid`)
**What:** Construct a fresh Supabase client using the **anon key** (never the service role) with the caller's own `Authorization` header forwarded, then call `.auth.getUser()`. An expired, forged, or absent token simply fails this call rather than being trusted.
**When to use:** Any `--no-verify-jwt` edge function that must still serve unauthenticated callers but needs to know, when present, who the real signed-in user is.
**Example:**
```ts
// Source: ealch-v2/supabase/functions/coach/index.ts:156-179 (VERIFIED, already in production)
async function callerUid(req: Request): Promise<string | null> {
  const authHeader = req.headers.get("authorization");
  const url = Deno.env.get("SUPABASE_URL");
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
  if (!authHeader || !url || !anonKey) return null;
  try {
    const caller = createClient(url, anonKey, {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const { data, error } = await caller.auth.getUser();
    if (error || !data.user) return null;
    return data.user.id;
  } catch {
    return null;
  }
}
```
This is the exact answer to Pitfall 1 in PITFALLS.md ("flipping `verify_jwt=true` alone is cosmetic") — the fix is precisely this in-body check, already proven in this codebase, not a hypothetical.

### Pattern 2: Atomic single-statement quota counter (Postgres RPC)
**What:** A `SECURITY DEFINER`-style (via `set search_path = ''` hardening, not `security definer` itself — see note) PL/pgSQL function that does an `INSERT ... ON CONFLICT ... DO UPDATE ... RETURNING` in one statement, so two concurrent requests from the same user can never both read "9 of 10" and both proceed.
**When to use:** Any per-subject counter that must be race-free under concurrent edge function invocations (which are horizontally scaled and stateless — a module-scope JS counter resets per cold start and is per-instance, so it caps nothing).
**Example:**
```sql
-- Source: ealch-v2/supabase/schema.sql:191-225 (VERIFIED, already in production)
create or replace function public.coach_bump(p_key text, p_day date, p_limit integer)
returns table (used integer, allowed boolean)
language plpgsql
set search_path = ''
as $$
begin
  insert into public.coach_usage (subject_key, day, count)
  values (p_key, p_day, 1)
  on conflict (subject_key, day)
    do update set count = coach_usage.count + 1
  returning coach_usage.count into used;

  allowed := used <= p_limit;
  return next;
end;
$$;

revoke all on function public.coach_bump(text, date, integer) from public;
revoke all on function public.coach_bump(text, date, integer) from anon;
revoke all on function public.coach_bump(text, date, integer) from authenticated;
```
**Extension needed for TTS (proposed, not yet implemented — see Assumptions Log A1):** the same shape, generalized to (a) increment by `p_chars` instead of a flat `1`, and (b) check against multiple limits in one call (daily chars, daily requests, monthly chars, per-minute burst) so the whole decision stays one round-trip and one set of atomic upserts. A sketch:
```sql
-- PROPOSED — not yet in schema.sql. Mirrors coach_bump's atomicity discipline,
-- generalized to character-weighted, multi-window checks.
create or replace function public.tts_bump(
  p_key text,            -- 'auth:<uid>' or a guest key, mirrors coach's subjectKey()
  p_chars integer,       -- weight of THIS request
  p_daily_char_limit integer,
  p_daily_req_limit integer,
  p_monthly_char_limit integer,
  p_minute_req_limit integer
) returns table (allowed boolean, reason text)
language plpgsql
set search_path = ''
as $$
declare
  v_day_chars integer; v_day_reqs integer;
  v_month_chars integer; v_minute_reqs integer;
begin
  insert into public.tts_usage_daily (subject_key, day, chars, requests)
  values (p_key, current_date, p_chars, 1)
  on conflict (subject_key, day)
    do update set chars = tts_usage_daily.chars + p_chars,
                  requests = tts_usage_daily.requests + 1
  returning chars, requests into v_day_chars, v_day_reqs;

  insert into public.tts_usage_monthly (subject_key, month, chars)
  values (p_key, date_trunc('month', current_date)::date, p_chars)
  on conflict (subject_key, month)
    do update set chars = tts_usage_monthly.chars + p_chars
  returning chars into v_month_chars;

  insert into public.tts_usage_minute (subject_key, minute_bucket, requests)
  values (p_key, date_trunc('minute', now()), 1)
  on conflict (subject_key, minute_bucket)
    do update set requests = tts_usage_minute.requests + 1
  returning requests into v_minute_reqs;

  if v_day_chars > p_daily_char_limit then return query select false, 'daily_chars';
  elsif v_day_reqs > p_daily_req_limit then return query select false, 'daily_requests';
  elsif v_month_chars > p_monthly_char_limit then return query select false, 'monthly_chars';
  elsif v_minute_reqs > p_minute_req_limit then return query select false, 'burst';
  else return query select true, null::text;
  end if;
end;
$$;
```
The one-shot free-preview allowance (D-06) does not fit this daily/monthly shape — it needs its own tiny table (`tts_free_preview(subject_key primary key, chars_used integer not null default 0)`, incremented the same atomic way, checked against the 2,500-char lifetime cap with no day/month reset unless the planner chooses one per the "Claude's Discretion" note).

### Pattern 3: Server-side entitlement tier lookup (fail-closed)
**What:** Read the `entitlements` mirror table (service role) for the caller's `uid`; treat any error, missing row, or expired row as "free," never as "premium."
**When to use:** Any server-side capability that must distinguish paying from free users without trusting a client-supplied claim.
**Example:**
```ts
// Source: ealch-v2/supabase/functions/coach/index.ts:209-223 (VERIFIED, already in production)
async function hasUnlimitedCoach(uid: string): Promise<boolean> {
  try {
    const { data, error } = await serviceClient()
      .from("entitlements")
      .select("features, expiry")
      .eq("user_id", uid)
      .maybeSingle();
    if (error || !data) return false;
    const features: string[] = Array.isArray(data.features) ? data.features : [];
    if (!features.includes("coach.unlimited")) return false;
    return !data.expiry || new Date(data.expiry).getTime() > Date.now();
  } catch (_) {
    return false;
  }
}
```
**For TTS (D-07), the equivalent check is simpler** — it doesn't need a specific feature flag, it needs "is this user's `plan` anything other than `'free'`, and is it not expired," which is the server-side mirror of `entitlement.logic.ts`'s `isPremium()`:
```ts
// PROPOSED, mirroring the verified pattern above and entitlement.logic.ts's isPremium()
async function ttsTier(uid: string): Promise<'premium' | 'free'> {
  try {
    const { data, error } = await serviceClient()
      .from("entitlements")
      .select("plan, expiry")
      .eq("user_id", uid)
      .maybeSingle();
    if (error || !data) return 'free';
    const active = !data.expiry || new Date(data.expiry).getTime() > Date.now();
    return data.plan !== 'free' && active ? 'premium' : 'free';
  } catch {
    return 'free';
  }
}
```
`ealch-v2/supabase/schema.sql:138-152` confirms the `entitlements` table's exact shape (`plan text not null default 'free'`, `features text[]`, `expiry timestamptz`) — this table already has everything D-07 needs; no schema change required for the tier lookup itself, only for the new usage-counter tables.

### Pattern 4: `system_config`-driven, tunable limits (60s TTL cache, safe fallback)
**What:** Read numeric limits from `system_config.config` (service role, `id = 'active'`), cache briefly so a config flip doesn't take effect mid-burst but also doesn't require a redeploy, and always have a hardcoded fallback for when the config read fails.
**Example (existing, exact pattern to copy):**
```ts
// Source: ealch-v2/supabase/functions/tts/index.ts:81-108 (VERIFIED, already in this file)
const MODEL_TTL_MS = 60_000;
let modelCache: { id: string; at: number } | null = null;

async function elevenModelId(): Promise<string> {
  const fallback = Deno.env.get("ELEVENLABS_MODEL_ID") ?? "eleven_multilingual_v2";
  const now = Date.now();
  if (modelCache && now - modelCache.at < MODEL_TTL_MS) return modelCache.id;
  let id = fallback;
  try {
    const { data } = await createClient(/* service role */)
      .from("system_config").select("config").eq("id", "active").maybeSingle();
    const audio = (data?.config as any)?.models?.audio;
    if (typeof audio === "string" && audio.startsWith("eleven_")) id = audio;
  } catch { /* env/default model still speaks */ }
  modelCache = { id, at: now };
  return id;
}
```
The planner should add new keys to the same `system_config.config` JSON (e.g. `ttsPremiumDailyChars`, `ttsPremiumMonthlyChars`, `ttsPremiumDailyRequests`, `ttsPremiumBurstPerMinute`, `ttsFreePreviewChars`) rather than inventing a second config mechanism, and seed sane defaults matching D-05/D-06 directly into `schema.sql`'s existing `insert into public.system_config` seed block (line 239 onward), the same way `coachCostCeiling`/`coachFreeTurnsPerDay` were added there.

### Anti-Patterns to Avoid
- **Flipping `verify_jwt = true` in `config.toml` (or the Dashboard) as "the fix":** Pitfall 1 (PITFALLS.md) — the anon key is a valid JWT, so this either does nothing or breaks every guest call. `tts` must keep `--no-verify-jwt` (matching `coach`'s documented reasoning) and do its own `callerUid()` check in-body.
- **Read-then-write quota checks in JS (`SELECT count; if count < limit: UPDATE count+1`):** a race under concurrent requests from the same user (two devices, a retry storm) — always one atomic SQL statement, per the `coach_bump` comment's own explicit warning ("read-then-write in the function would let two concurrent turns both see 9, both conclude they are under a limit of 10, and both spend").
- **Per-IP rate limiting as the primary key:** explicitly called out in PITFALLS.md and in `coach/index.ts`'s own `subjectKey()` comment as "spoofable, and IP is worse than spoofable — a school or an office behind one NAT shares a single quota." Use `auth.uid()` as the primary key for signed-in users; IP/device is only acceptable as the guest-tier fallback key (D-02), same as `coach`'s existing `subjectKey()` for guests.
- **Trusting a client-sent `deviceId` or `tier` field for anything security-relevant:** `coach`'s own comment on `subjectKey()` is explicit that a client-asserted id is "a cost limiter and not a security boundary" for guests — acceptable for the guest tier's soft cap, never acceptable as a substitute for `callerUid()` for the signed-in path.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|--------------|-----|
| JWT verification / "is this a real user" | Manual JWT decode/verify in the edge function | `supabase-js`'s `auth.getUser()` against a caller-scoped client (Pattern 1) | Supabase's SDK already handles signature verification, expiry, and revocation correctly; hand-rolling JWT parsing in Deno is exactly the kind of security-critical code that should never be reinvented |
| Atomic per-user counters under concurrency | An in-memory Map/counter in the edge function, or a naive read-then-write | Postgres `INSERT ... ON CONFLICT ... DO UPDATE ... RETURNING` inside a single RPC (Pattern 2) | Edge functions are stateless and horizontally scaled — anything module-scope resets on cold start and is per-instance; only the database can serialize concurrent writers |
| Rate-limiting infrastructure generally | A custom sliding-window/token-bucket library, or reaching for Deno KV | The existing `coach_usage`/`coach_bump` Postgres pattern, extended | Deno KV isn't available on Supabase's Edge Runtime (verified below); a bespoke in-memory algorithm would be both wrong (doesn't survive cold starts) and unnecessary (the DB-backed pattern already exists and is proven in this repo) |

**Key insight:** every piece this phase needs already has a working, shipped reference implementation in the same repository (`coach`). This is not a "research the ecosystem" problem — it's a "copy and correctly extend an internal pattern" problem, which should sharply lower both the implementation risk and the amount of new surface area a reviewer has to trust.

## Common Pitfalls

### Pitfall 1: Believing guests are already TTS-isolated (D-03's core risk)
**What goes wrong:** Someone reads `ttsProvider: 'device'` as the default and concludes guests can't reach ElevenLabs, so the guest-gating work in D-01/D-02 gets skipped or under-scoped.
**Why it happens:** The safety is real today, but it lives in a Postgres config row (`system_config.ttsProvider`), not in code — and that row is explicitly documented (`config.ts:91-98`) as something an operator flips from the Ops Console for voice auditioning.
**How to avoid:** Treat the server-side auth/quota check in `tts/index.ts` as the actual security boundary (it doesn't care what the client's config says), and treat any client-side guest gating in `placement.tsx`/`tts.ts` as a separate, additive product decision (D-01/D-02), not a substitute.
**Warning signs:** A plan that only touches `system_config` defaults, or only adds a guest check inside `placement.tsx`, without touching `tts/index.ts`'s own auth logic, has not actually closed SEC-01's cost-vector risk — a scripted client using the extractable anon key bypasses any client-side check entirely.

### Pitfall 2: Building the quota check as a single flat counter (copying `coach_bump` without extending it)
**What goes wrong:** `coach_bump` checks exactly one window (turns per day). D-04–D-06 require FOUR simultaneous windows for premium (daily chars, monthly chars, daily requests, per-minute burst) plus a fifth, structurally different one for free (lifetime one-shot chars). A plan that reuses `coach_bump` unmodified, or checks only one of these dimensions, under-delivers the locked decision.
**How to avoid:** Use the multi-window RPC sketch in Pattern 2 (or equivalent), and write a test asserting each limit independently trips (e.g., a request that's under the daily cap but over the burst cap must still be rejected).
**Warning signs:** Only one `system_config` key is added for TTS limits, or the new table has only a `count` column with no separate `chars` column.

### Pitfall 3: The one-shot free allowance implemented as a per-day/per-month quota
**What goes wrong:** D-06 is explicit that the free tier's 2,500 chars is "once," not recurring — reusing the daily/monthly table shape for it (even at a very low limit) silently turns it into a recurring quota, which is a materially different, more generous product decision than what was locked.
**How to avoid:** Give it its own table (`tts_free_preview`, keyed by `subject_key` with no time dimension) so "once" is structurally enforced, not just configured to a very low periodic number. Document the reset-policy choice explicitly (Claude's Discretion item) in the plan, since the user left it open but specified "once" as the default reading.

### Pitfall 4: Forgetting this repo has no `supabase/migrations/` directory
**What goes wrong:** A plan task titled "create a new migration file at `supabase/migrations/<timestamp>_tts_quota.sql`" doesn't match this project's actual convention and either creates a directory nothing applies, or gets built against tooling (`supabase migration new`) that isn't part of this project's documented workflow (`SETUP.md` documents pasting `schema.sql` into the Dashboard SQL Editor, or `supabase db push` after `supabase link`).
**How to avoid:** New SQL objects (tables + RPC functions) go directly into `ealch-v2/supabase/schema.sql`, appended near the existing `coach_usage`/`coach_bump`/`entitlements` block, and the plan must include an explicit "apply schema.sql to the live project" task (Dashboard SQL Editor paste, or `supabase db push` if the executor has the CLI linked — this dev machine does not currently have the `supabase` CLI installed, see Environment Availability) as a distinct, non-optional step before the edge function deploy.

### Pitfall 5 (inherited, re-verified): Gating with `verify_jwt = true` alone
See PITFALLS.md Pitfall 1 — fully re-verified against the actual `tts/index.ts` and `coach/index.ts` code in this session (not just asserted from training knowledge). The fix is Pattern 1 above, already proven in `coach`.

## Common Pitfalls — "Looks Done But Isn't" Checklist (TTS-specific, extending PITFALLS.md's)
- [ ] A test exists that calls the deployed function with **zero** `Authorization` header and confirms it's rejected or capped, not just "has a JWT" (per PITFALLS.md's own checklist item, now concretely actionable: `curl` with no `-H "Authorization: ..."` at all against the deployed URL).
- [ ] A test exists that calls with **only the anon key** (no user JWT) and confirms it's treated as guest-tier, not premium-tier.
- [ ] A test exists that a real signed-in free-tier user's calls succeed up to exactly 2,500 lifetime characters and are rejected/fallback-triggering after.
- [ ] A test exists that a real signed-in premium user hitting the 3-req/minute burst cap gets 429 while still under their daily cap (isolates the burst check from the daily check).
- [ ] `placement.tsx`'s guest call path was re-tested after the change (guest, fresh install, `ttsProvider` forced to `'elevenlabs'` in a test project) to confirm the new server-side guest cap actually triggers, not just the client default.

## Code Examples

See the four "Pattern" code blocks above (Patterns 1-4) — each is either a direct verified excerpt from this repo's shipped `coach` function/`schema.sql`, or an explicitly-labeled proposed extension of that verified pattern. No external/ecosystem code examples were needed for this phase; everything reusable already lives in this codebase.

## State of the Art

| Old Approach (this repo's OWN prior phase) | Current Approach (this phase should apply the same evolution to `tts`) | When Changed | Impact |
|--------------------------------------------|----------------------------------------------|---------------|--------|
| `coach` function: `--no-verify-jwt`, spoofable device/IP-only subject key, no server auth check | `coach` function (Phase 9 per its own comments): `callerUid()` verifies the real JWT, `auth:<uid>` becomes the subject key for signed-in callers, guests keep the old device/IP fallback | Already shipped in this repo (see `coach/index.ts` comment: "Phase 9: verify the caller's own JWT") | Directly the template this Phase 3 should replicate for `tts` — this is not a new pattern to invent, it's the second application of one this codebase already validated in production |
| `coach` function: any signed-in user capped equally | `coach` function (Phase 10 per its own comments): `hasUnlimitedCoach()` exempts entitled users via the `entitlements` mirror table | Already shipped in this repo | Directly the template for D-07 (premium vs free tier) |

**Deprecated/outdated:** Nothing in the TTS domain itself is deprecated; the "state of the art" here is entirely internal precedent, not an external ecosystem shift.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | The proposed `tts_bump` RPC / `tts_usage_daily` / `tts_usage_monthly` / `tts_usage_minute` / `tts_free_preview` schema (exact table names, columns, and the multi-window RPC shape) is this research's own synthesis extending the verified `coach_usage`/`coach_bump` pattern — it has not been implemented, deployed, or tested anywhere. | Architecture Patterns, Pattern 2 | LOW — the underlying atomicity technique (single-statement UPSERT-and-return) is proven in production for `coach_usage`; only the specific new column/table names and the four-window consolidation are unverified. The planner/executor should treat exact naming as a free implementation choice, not a locked contract. |
| A2 | Supabase's Postgres version on this project supports the exact PL/pgSQL syntax shown (assumed Postgres 15+, matching typical current Supabase provisioning) — not independently queried against the live project this session. | Standard Stack, Architecture Patterns | LOW — `coach_bump` already uses this exact syntax successfully in the same live project (per `STATE.md`'s confirmation that the Supabase project `ogbothupjcivwruesgsu` is `ACTIVE_HEALTHY`), so compatibility is effectively pre-verified by precedent even though this session didn't re-run `SELECT version()`. |
| A3 | The ElevenLabs pricing figure ($288/1000 requests) cited in `CONCERNS.md` and reused implicitly for cost-motivation context was not re-verified against ElevenLabs's current pricing page this session — it's inherited from a prior research pass dated 2026-09-19. | Summary (implicit cost motivation) | LOW — this figure doesn't drive any implementation decision in this phase (the locked D-05/D-06 numbers are fixed regardless of exact per-character cost); it only matters for prioritization framing, which is already settled by the roadmap. |
| A4 | The one-shot free-preview reset policy is left as "once, no reset" by default per D-06's literal wording, pending the planner's explicit choice (Claude's Discretion). | User Constraints, Pitfall 3 | MEDIUM if the plan silently picks a recurring reset without calling it out — this is a locked-decision-adjacent product choice the user explicitly deferred to the planner with a request that it be stated explicitly, not implied. |

**If this table is empty:** N/A — see entries above; all are LOW risk except A4 which is a discretionary product choice the user already anticipated and asked to be stated explicitly.

## Open Questions (RESOLVED)

1. **Exact `system_config` key names for the new tunable limits**
   - What we know: the pattern (service-role read, 60s TTL cache, JSON blob under `system_config.config`, safe fallback) is fully verified and should be reused.
   - What's unclear: this research proposes names (`ttsPremiumDailyChars`, etc.) but they are not locked — any consistent naming the planner picks is fine as long as it's added to both the TypeScript `RemoteConfig` type comment block in `config.ts` (documentation-only on the client; the client doesn't need to read these) and the edge function's config-read code.
   - Recommendation: planner names these during task-writing; not a blocker.
   - **RESOLVED (03-02-PLAN.md):** the planner locked in `ttsPremiumDailyChars`, `ttsPremiumMonthlyChars`, `ttsPremiumDailyRequests`, `ttsPremiumBurstPerMinute`, `ttsFreePreviewChars` — consistent with this research's proposed names, seeded into `system_config.active.config` and read by 03-04-PLAN.md's `ttsLimits()`.

2. **Whether guests get D-02's "exactly one short live preview" at all, versus D-01's stricter "device/cached only, no live guest synthesis ever"**
   - What we know: both are locked as acceptable outcomes in CONTEXT.md, with D-02 explicitly conditional ("If hearing custom premium speech pre-signup is judged essential to activation").
   - What's unclear: which of the two the planner should actually build — this is a product call CONTEXT.md left open pending the planner's/user's judgment, not something research can resolve from the code.
   - Recommendation: the plan should pick one explicitly rather than build partial support for both; the server-side edge function's guest-tier cap (a coarse device/IP counter, reusing `coach`'s `subjectKey()` shape) supports either choice equally — D-01 is "cap = 0 live chars for guests" and D-02 is "cap = ~300-500 chars once per device/IP," same mechanism, different config value.
   - **RESOLVED (03-01-PLAN.md / 03-04-PLAN.md):** the planner picked D-01's strict reading — guests are rejected outright (`decide('guest', ...)` always returns `guest_not_allowed`, `callerUid()` returning `null` yields a flat 401 with zero provider calls). D-02's metered preview was evaluated and explicitly not built; see 03-04-PLAN.md's objective for the rationale (smaller/more auditable attack surface, activation question deferred to the already-deferred onboarding A/B test phase).

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| `supabase` CLI | `supabase functions deploy tts`, `supabase db push` (schema apply) | ✗ (not found on this dev machine) | — | Apply `schema.sql` changes via the Supabase Dashboard SQL Editor (documented, existing project workflow per `SETUP.md`); deploy the function via the Dashboard's function editor/deploy UI, or install the CLI (`npm install -g supabase` or platform equivalent) if the executor has permission to do so. A Supabase MCP tool is also available in this environment per session tooling instructions and can apply SQL/read logs/advisories directly as a further fallback. |
| Deno KV | Considered as a rate-limit store option (D-10's "Claude's Discretion" concurrency mechanism) | ✗ (confirmed unavailable on Supabase's hosted Edge Runtime) | — | Postgres-backed RPC counter (Pattern 2) — already the project's proven approach, no fallback needed beyond "use what's already there" |
| Deno (local) | Local edge function type-checking / potential local testing | ✓ | 2.9.5 | — |
| Node.js | Running `node --test` for any extracted pure-logic quota/tier helper module (mirroring `coach/routing.test.ts`) | ✓ | v24.15.0 | — |
| Supabase project (`ogbothupjcivwruesgsu`) | All of the above — target of schema/function changes | ✓ (confirmed `ACTIVE_HEALTHY` per `.planning/STATE.md` Phase 02 findings) | — | — |

**Missing dependencies with no fallback:** None — the one missing tool (`supabase` CLI) has a documented, already-used-in-this-project fallback (Dashboard SQL Editor / Dashboard function deploy), and Deno KV's unavailability is fully absorbed by the existing Postgres pattern.

**Missing dependencies with fallback:** `supabase` CLI (→ Dashboard), Deno KV (→ Postgres RPC, which is the recommendation anyway, not a downgrade).

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Node's built-in test runner (`node --test`), with native TypeScript type-stripping (Node v24.15.0 confirmed on this machine) |
| Config file | None — driven by the `test` script in `ealch-v2/package.json`: `"node --test \"src/**/*.test.ts\" \"supabase/functions/**/*.test.ts\""` |
| Quick run command | `cd ealch-v2 && node --test "supabase/functions/tts/*.test.ts"` (once a test file exists) |
| Full suite command | `cd ealch-v2 && npm test` |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| SEC-01 | A pure-logic tier/limit-resolution helper (analogous to `coach/routing.ts`) correctly classifies premium vs free and resolves the right limit set | unit | `node --test "supabase/functions/tts/quota.test.ts"` | ❌ Wave 0 — file and the extracted logic module (`quota.ts`) both need to be created; this mirrors `coach/routing.ts` + `coach/routing.test.ts`, which already exist as the template to copy |
| SEC-01 | The deployed edge function rejects a request with zero `Authorization` header | manual/smoke (requires a live/staging deployment; Deno's edge auth flow cannot be meaningfully unit-tested without either a deployed function or `supabase functions serve`, and the `supabase` CLI is not installed locally — see Environment Availability) | `curl -s https://<PROJECT_REF>.supabase.co/functions/v1/tts -X POST -H "Content-Type: application/json" -d '{"text":"test"}'` — expect 401, not 200 | ❌ Wave 0 — no existing smoke-test script for `tts`; `SETUP.md` documents the equivalent manual `curl` pattern for `coach`, which should be mirrored and, ideally, checked into a `scripts/smoke-tts.sh`-style script rather than left purely manual |
| SEC-01 | The deployed function rejects/caps a request bearing only the anon key (no user JWT) | manual/smoke | `curl ... -H "Authorization: Bearer <ANON_KEY>" ...` — expect 401 or guest-tier-capped behavior, not premium treatment | ❌ Wave 0 |
| SEC-01 | Atomic quota RPC correctly rejects a request that exceeds any one of the four premium windows | unit (if the RPC logic is also mirrored in a pure TS helper for pre-flight estimation) OR integration against a local/staging Postgres | `node --test` (pure logic) or a `psql`/Supabase SQL Editor manual run of `select * from tts_bump(...)` with contrived prior rows | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** `node --test "supabase/functions/tts/*.test.ts"` (pure-logic tests only — fast, no network)
- **Per wave merge:** `npm test` (full suite, `ealch-v2`) plus the manual `curl` smoke checks against a deployed staging/dev instance of the function
- **Phase gate:** Full `npm test` green AND the "Looks Done But Isn't" checklist above manually walked against a real deployed function before `/gsd-verify-work`

### Wave 0 Gaps
- [ ] `ealch-v2/supabase/functions/tts/quota.ts` — pure logic module (tier classification, limit resolution), no Deno/supabase imports, extracted so it's unit-testable exactly like `coach/routing.ts`
- [ ] `ealch-v2/supabase/functions/tts/quota.test.ts` — unit tests for the above, following `coach/routing.test.ts`'s structure
- [ ] A documented (ideally scripted) manual smoke-test procedure for the zero-auth and anon-key-only cases, since these require a live deployed function and cannot be exercised by `node --test` alone — `SETUP.md` already documents the `curl` pattern for `coach`; extend it for `tts` in the same file or a sibling doc
- [ ] Framework install: none needed — `node --test` is already wired via the existing `npm test` script

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | yes | `callerUid()` pattern (Pattern 1) — verify the caller's own Supabase JWT server-side via `auth.getUser()`, never trust a client-asserted identity |
| V3 Session Management | no | This function doesn't create or manage sessions itself; it only reads the caller's existing session token, which Supabase Auth already manages elsewhere in the app |
| V4 Access Control | yes | Server-side tier classification via the `entitlements` table (Pattern 3), fail-closed to "free" on any error/missing row — mirrors `coach`'s `hasUnlimitedCoach` exactly |
| V5 Input Validation | yes | Existing `MAX_CHARS` length check (unchanged) plus the existing `lang` ISO-639-1 regex allowlist (`/^[a-z]{2}$/`, unchanged) — both already present and correct in `tts/index.ts`; no new input surface is introduced by this phase beyond what the quota RPC consumes (an integer char count, already validated as `<= MAX_CHARS`) |
| V6 Cryptography | no | No new cryptographic operations introduced; JWT verification is delegated entirely to `supabase-js`, never hand-rolled (see Don't Hand-Roll) |

### Known Threat Patterns for this stack

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Anon-key replay to bypass a cosmetic `verify_jwt` gate | Spoofing | In-body `callerUid()` check that actually calls `getUser()`, not just presence-of-a-JWT (Pattern 1) — this is the exact threat PITFALLS.md Pitfall 1 and this repo's own `coach` function comments describe |
| Unbounded-cost resource exhaustion via a public, unmetered paid-API proxy | Denial of Service (financial) | Character-weighted, multi-window, atomic Postgres-backed rate limiting (Pattern 2), scoped per-`auth.uid()` for signed-in callers and per-device/IP (coarse, capped low) for guests |
| Race-condition double-spend on a shared quota (two concurrent requests both reading "under limit") | Tampering (of the accounting record) / Elevation of resource use | Single-statement atomic `INSERT ... ON CONFLICT ... DO UPDATE ... RETURNING` inside a `SECURITY`-hardened (`set search_path = ''`) Postgres function, never a read-then-write in application code (Pattern 2, and the `coach_bump` comment's own explicit warning) |
| Privilege confusion between "has a valid Supabase key" and "is a specific, quota-tracked identity" | Elevation of Privilege | Explicit distinction maintained throughout: `--no-verify-jwt` stays at the platform level (guests must still be servable), but `callerUid()` inside the function body is the actual identity check that quota/tier decisions key off of |

## Sources

### Primary (HIGH confidence — read directly from this repo, this session)
- `ealch-v2/supabase/functions/tts/index.ts` (full file read) — current auth/quota gap, `MAX_CHARS=2400`, provider chain, CORS headers
- `ealch-v2/src/services/tts.ts` (full file read) — client fallback chain, `resolveRemote()`, `ttsProvider` branch, no auth-state check
- `ealch-v2/src/store/entitlement.logic.ts` (full file read) — `Feature`/`Plan`/`isPremium`/`hasFeature` client-side vocabulary
- `ealch-v2/supabase/functions/coach/index.ts` (full file read) — `callerUid`, `bumpTurn`, `hasUnlimitedCoach`, `subjectKey`, `routing()` patterns, all directly reusable
- `ealch-v2/supabase/schema.sql` (relevant sections read) — `coach_usage`, `coach_bump` RPC, `entitlements` table shape, RLS policy stance, `system_config` seed row
- `ealch-v2/supabase/functions/adapty-webhook/index.ts` (grepped) — confirms what writes `entitlements.plan`/`features`
- `ealch-v2/supabase/SETUP.md` (full file read) — confirms no `supabase/migrations/` convention; schema applied via Dashboard SQL Editor or `supabase db push`
- `ealch-v2/app/onboarding.tsx` (full file read) — confirms no TTS calls, confirms `continueAsGuest()` creates no Supabase session
- `ealch-v2/app/placement.tsx`, `ealch-v2/app/den.tsx`, `ealch-v2/app/_layout.tsx`, `ealch-v2/app/index.tsx`, `ealch-v2/src/services/session.ts` (read/grepped) — full D-03 guest call-graph trace
- `ealch-v2/src/services/config.ts` (full file read) — `ttsProvider` default and control-plane shape
- `ealch-v2/supabase/functions/coach/routing.test.ts` + `ealch-v2/package.json` test script (read) — confirms `node --test` framework and the pure-logic-extraction testing pattern
- Local environment probes this session: `supabase` CLI absent, `deno 2.9.5` present, `node v24.15.0` present

### Secondary (MEDIUM confidence — WebSearch, cross-referenced against official domains)
- [Supabase Edge Functions Limits docs](https://supabase.com/docs/guides/functions/limits) — wall-clock timeout figures (150s free / 400s paid tier)
- [Supabase blog: Edge Functions Deploy from Dashboard + Deno 2.1](https://supabase.com/blog/supabase-edge-functions-deploy-dashboard-deno-2-1) — confirms recent Deno 2.x support on the platform

### Tertiary (LOW confidence — community sources, used only to confirm a negative claim)
- [GitHub supabase/discussions#40713 "How to use Deno KV in a Supabase Edge Function?"](https://github.com/orgs/supabase/discussions/40713) — community-confirmed absence of working Deno KV support on Supabase's Edge Runtime; used only to rule out an option already disfavored by the stronger in-repo precedent (Postgres), not as the sole basis for a positive recommendation
- [Supabase Rate Limiting Edge Functions example docs](https://supabase.com/docs/guides/functions/examples/rate-limiting) — generic guidance (Upstash Redis example); referenced only in the Alternatives Considered table to show the ecosystem-standard alternative was considered and deliberately not chosen

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new libraries; every reused piece is an existing, running import in this exact codebase
- Architecture: HIGH — every pattern is copied from a structurally identical, already-shipped function (`coach`) in the same repo, not inferred from generic best practice
- Pitfalls: HIGH for the inherited/re-verified ones (directly checked against code this session); MEDIUM for the newly-identified schema-design pitfalls (Pitfalls 2-4), since those are this research's own synthesis rather than something the codebase has already hit and documented

**Research date:** 2026-09-19
**Valid until:** 30 days (stable domain — this is internal-pattern-reuse, not fast-moving ecosystem tracking; re-verify only if `coach/index.ts`, `schema.sql`'s `entitlements`/`coach_usage` shapes, or the Adapty webhook change materially before implementation starts)
