# Phase 3: TTS Security Hardening - Context

**Gathered:** 2026-09-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Close the unmetered-cost exposure on the `tts` Supabase Edge Function (`ealch-v2/supabase/functions/tts/index.ts`) so it cannot be abused for unlimited-cost ElevenLabs synthesis by an unauthenticated or anonymous caller, while every real caller (guest, free signed-in, premium signed-in) still gets usable audio — never silence. This phase implements auth + rate-limiting + fallback; it does not implement any onboarding-funnel A/B testing or growth experimentation (explicitly deferred, see `<deferred>`).

</domain>

<decisions>
## Implementation Decisions

### Pre-auth / guest usage
- **D-01:** Guests (no Supabase session, e.g. during onboarding/placement before sign-in) must NOT get unrestricted live ElevenLabs synthesis. Default guest experience is device TTS and/or cached, pre-generated premium audio clips (pre-rendered, not live-synthesized).
- **D-02:** If hearing custom premium speech pre-signup is judged essential to activation, guests may get exactly ONE short live preview (~300–500 characters), protected by IP/device limits, bot controls, and a global spend ceiling. Prefer a pre-recorded sample over a live synthesis call wherever one can serve the same purpose (a pre-rendered clip costs nothing per play; a live call does).
- **D-03 (research required before implementation, per user request):** Verify whether onboarding/placement (`app/onboarding.tsx`, `app/placement.tsx`) actually calls the remote TTS path today, or whether guest screens already run device-only. PITFALLS.md's Pitfall 1 assumption ("check what auth state the caller is in when TTS is invoked") must be validated against the real call graph, not assumed. This determines whether D-01/D-02 requires new gating code or just confirms existing behavior.

### Signed-in user rate limits (config values, not hardcoded — tune later from observed p50/p95)
- **D-04:** Meter primarily by **characters**, not just request count.
- **D-05: Premium (entitled) tier** — 2,000 chars/day · 25,000 chars/month · 30 requests/day · 3 requests/minute burst limit · 2,500 chars/request cap. (Note: the edge function's current `MAX_CHARS` constant is 2400, not 2500 — Claude's discretion whether to bump it to 2500 or treat 2400 as close enough; the 100-char difference is not material.)
- **D-06: Free (signed-in, non-paying) tier** — a **one-shot preview allowance**, not a recurring day/month budget: 2,500 characters, once (lifetime or until some reset policy the planner proposes), rather than an ongoing daily/monthly quota. This is deliberately closer to "a taste of premium voice" than an ongoing feature — free users who exhaust it fall back to device TTS for all subsequent speech, same as anyone who is rate-limited.
- **D-07:** "Premium" vs "free" maps to the existing entitlement/purchase check (see `ealch-v2/src/store/entitlement.logic.ts`) — a signed-in user with no active entitlement is "free" for TTS-quota purposes, not a third tier.

### Admin / authoring usage
- **D-08 (already verified, no action needed):** Admin content authoring does NOT call this public edge function at all. `ealch-admin/scripts/render-audio.ts` calls the ElevenLabs API directly with its own `ELEVENLABS_API_KEY` from `ealch-admin/.env` — a separate, already-isolated pipeline (local Node script, server-side credential, never shipped to a browser or client bundle). No shared quota, bypass, or admin-role check needs to be designed for this phase; the two paths do not intersect. (Confirmed via repo search: no `functions.invoke` call to the `tts` function anywhere in `ealch-admin`.)
- If research/planning turns up any OTHER path that does call the public edge function from an authoring context (e.g. a preview button inside `ealch-admin`'s UI), it must go through a verified server-side admin role or a separate batch job with its own distinct quota — never an unlimited bypass, and never a client-exposed API key.

### Endpoint direction
- **D-09:** Harden and retain the endpoint — do NOT retire it (CONCERNS.md floated retirement as an option; explicitly rejected in favor of hardening).
- **D-10:** Required hardening surface: keep the ElevenLabs key server-side (already true), add input length limits (already true — `MAX_CHARS`), add real authorization (currently missing entirely — deployed with `--no-verify-jwt` and no in-body `auth.uid()` check), add character-weighted per-user quotas (D-04–D-07), add caching (avoid re-synthesizing identical text+voice+lang — the client already caches synthesized audio to disk by content hash, per `ealch-v2/src/services/tts.ts:102-125`; decide whether server-side caching is also worth adding or whether client-side caching is sufficient), concurrency control, spend alerts, audit logging, and confirm the automatic device-TTS fallback already in `tts.ts` correctly triggers on BOTH quota-exhaustion (429) and provider failure (502) — not just provider failure as today.

### Claude's Discretion
- Exact free-tier reset policy (does the one-shot 2,500-char allowance ever refresh, e.g. monthly, or is it truly once-per-account-ever?) — user specified "once" but didn't rule out a slow reset; pick something sensible and state the choice explicitly in the plan.
- Whether to bump `MAX_CHARS` from 2400 to 2500 or leave it (D-05 note).
- Exact mechanism for the guest global spend ceiling and bot controls (D-02) — CAPTCHA, device attestation, IP+device fingerprint combo, etc. — implementation detail.
- Whether server-side response caching is added on top of the client's existing disk cache, or the client cache is judged sufficient (D-10).
- Concurrency-control mechanism (e.g., a Postgres-backed token bucket vs. an in-memory Deno KV counter vs. a dedicated rate-limit table) — implementation detail, informed by research into what's easiest to operate on Supabase's free tier.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Research already done for this phase
- `.planning/research/PITFALLS.md` Pitfall 1 — "Gating the TTS function with `verify_jwt = true` breaks the app before a single line of rate-limit code runs." The anon key IS a valid JWT, so `verify_jwt=true` alone is cosmetic; the fix must read `ctx.userClaims.sub`/`auth.uid()` inside the function body.
- `.planning/codebase/CONCERNS.md` — "Unmetered, unauthenticated TTS endpoint" and "Unauthenticated TTS endpoint — Critical cost vector" entries. Note: this doc's file path for the edge function (`ealch-admin/supabase/functions/tts/index.ts`) is STALE — the real path is `ealch-v2/supabase/functions/tts/index.ts`. Also note CONCERNS.md's framing that "device TTS is the default" is only true when the `ttsProvider` control-plane flag (in `system_config`) is set to `'device'` — when it's `'elevenlabs'`, remote synthesis is genuinely the default for every user, not just an abuse-only cost path. Research should check the live value of this flag to size current real-world exposure.

### Requirements & roadmap
- `.planning/REQUIREMENTS.md` — SEC-01 (this phase's requirement)
- `.planning/ROADMAP.md` Phase 3 section — goal, 4 success criteria, Pitfall Watch

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `ealch-v2/src/services/tts.ts` — client already has a full graceful-degradation chain: `resolveRemote()` returns `null` on ANY failure (network, auth, provider), and the caller falls through to device speech automatically. A 401 or 429 from the hardened function should reach this same `null`-on-error path with zero client changes required for the fallback itself — only the trigger conditions (quota exhaustion, auth rejection) are new.
- `ealch-v2/src/store/entitlement.logic.ts` — existing entitlement/purchase check; this is what D-07's "premium vs free" distinction should read, not a new entitlement mechanism.
- `ealch-v2/supabase/functions/tts/index.ts` — the file to harden. Already has `MAX_CHARS = 2400`, a 3-provider fallback chain (ElevenLabs → custom → Fish Audio), and CORS headers `Access-Control-Allow-Origin: "*"` (unrestricted — worth revisiting alongside the auth work, though CORS is not itself the cost vector since a browser isn't the primary caller here).

### Established Patterns
- Every existing fallback in this codebase's audio/speech stack degrades to something audible, never silence (documented house rule per the file's own header comments) — the new auth/rate-limit rejection paths must follow the same rule via the existing device-TTS fallback, not introduce a new silent-failure mode.
- The client's `sb.functions.invoke()` call already sends whatever Authorization the current Supabase session has (anon key if signed out, user JWT if signed in) — the gap is entirely server-side (the function ignores it, and is deployed with `--no-verify-jwt`), not a client wiring problem.

### Integration Points
- Rate-limit state needs a place to live — likely a new Postgres table or Supabase KV, keyed on `auth.uid()` (never per-IP — mobile NAT/carrier IPs are shared across many real users, flagged explicitly in PITFALLS.md).
- Any new `system_config`-style read (e.g. for a global guest spend ceiling) should follow the existing `elevenModelId()` pattern in the same file (60s TTL cache, service-role read, safe fallback on failure).

### Dev-workflow caution (execution-time, not a design decision)
- Editing `ealch-v2/src/services/tts.ts` during a Metro dev session leaves Android's native TextToSpeech binding dead until a full app restart (force-stop + relaunch) — a Fast Refresh artifact, not a code bug. If this phase's implementation touches the client file (e.g. to surface a new error path), the executor must test with a cold restart, not shake-to-reload, or will misdiagnose a working fix as broken. Production is unaffected (real users never hot-reload).

</code_context>

<specifics>
## Specific Ideas

- Exact numbers are locked (D-05, D-06) — not "reasonable defaults," these specific figures, as configuration values the planner should make easy to retune later from observed usage.
- User explicitly wants character-based metering as the PRIMARY dimension, with request-count and burst limits as secondary guards against many-small-requests abuse.

</specifics>

<deferred>
## Deferred Ideas

- **Onboarding funnel A/B test** (guest device/cached TTS vs. one limited live premium preview, measuring activation/signup-conversion/retention/TTS-engagement/cost-per-activated-user) — this is a growth/analytics experiment, not an auth/rate-limit change, and was explicitly deferred by the user to its own future phase rather than built into Phase 3. It likely depends on Phase 9's analytics audit (QA-02) landing first, since that phase is what builds out funnel-level event tracking. Flag for the roadmapper as a candidate future phase.

None — no other discussion stayed outside phase scope.

</deferred>

---

*Phase: 3-TTS Security Hardening*
*Context gathered: 2026-09-20*
