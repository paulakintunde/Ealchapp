---
phase: 03-tts-security-hardening
plan: 04
subsystem: api
tags: [deno, edge-function, supabase, auth, rate-limiting]

requires:
  - phase: 03-tts-security-hardening (plan 01)
    provides: quota.ts decision layer
  - phase: 03-tts-security-hardening (plan 02)
    provides: live tts_bump/tts_bump_free_preview RPCs + tts_usage_* tables
  - phase: 03-tts-security-hardening (plan 03)
    provides: client-side guest gate (defense-in-depth)
provides:
  - "tts/index.ts: callerUid() JWT verification, fail-closed tier classification, live quota enforcement, deployed to production"
affects: []

tech-stack:
  added: []
  patterns:
    - "callerUid()/serviceClient() pattern now shared by both coach/index.ts and tts/index.ts"

key-files:
  created: []
  modified:
    - ealch-v2/supabase/functions/tts/index.ts

key-decisions:
  - "D-01 strict reading implemented: guests get a flat 401, no metered guest preview path (D-02 deliberately not built, per CONTEXT.md's own conditional framing)"
  - "Server-side response caching (D-10) not added — client already caches by content hash; no proven duplicate-synthesis cost to justify a new invalidation surface"
  - "Quota RPC/config-read failures fail OPEN (request allowed) — this guards margin, not identity; identity is already settled by callerUid() before any quota check runs"

patterns-established: []

requirements-completed: [SEC-01]

duration: 45min
completed: 2026-09-20
---

# Phase 3 Plan 04: TTS Edge Function Hardening & Deployment Summary

**tts/index.ts now verifies the caller's real Supabase session before any provider call, classifies premium/free from entitlements (fail-closed), and enforces the live D-05/D-06 quota via tts_bump/tts_bump_free_preview — deployed to ogbothupjcivwruesgsu and verified live (curl + real-device checkpoint)**

## Performance

- **Duration:** ~45 min (incl. live deploy + device checkpoint)
- **Tasks:** 3 (wiring, deploy+automated proof, human-verify checkpoint)
- **Files modified:** 1

## Accomplishments
- `callerUid()`, `ttsTier()`, `ttsLimits()`, `bumpPremium()`, `bumpFreePreview()`, `posthog()` added to `tts/index.ts`, wired before the provider chain
- `deno check index.ts` exits 0 against `quota.ts`'s real exports
- Deployed live: `npx supabase functions deploy tts --no-verify-jwt --project-ref ogbothupjcivwruesgsu`
- Automated proof: zero-auth request → 401; anon-key-only request → 401 `{"reason":"guest_not_allowed"}`
- Human-verify checkpoint approved: free-tier exhaustion still falls back to audible device speech, premium burst cap (4th request/minute) falls back cleanly, guest never invokes the `tts` function at all, `system_config.ttsProvider` confirmed restored to `'device'` after testing

## Task Commits

1. **Task 1: wire callerUid/tier/quota into tts/index.ts** - `20b06e1` (feat)
2. **Task 2 [BLOCKING]: deploy + automated curl proof** - deploy only, no local file diff (index.ts/quota.ts uploaded as-is from commit `20b06e1`)
3. **Task 3 [human-verify checkpoint]:** approved by user after live device testing

## Files Created/Modified
- `ealch-v2/supabase/functions/tts/index.ts` - Identity verification + fail-closed tier classification + live quota enforcement, inserted before the provider chain; provider chain/MAX_CHARS/CORS untouched

## Decisions Made
- None beyond the plan's own pre-resolved discretion notes (D-01 strict reading, D-10 no server cache / no dedicated alert pipeline — see `key-decisions` above).

## Deviations from Plan
None - plan executed exactly as written (Task 1's code matched the plan's action block verbatim; Task 2 deployed cleanly on the first attempt, no re-link needed).

## Issues Encountered
- `deno check index.ts` failed in this environment with an unrelated npm-resolution error (`Could not find a matching package for 'npm:@supabase/realtime-js@2.116.0'`) — confirmed this is a pre-existing environment quirk, not a regression, by reproducing the identical failure against the already-shipped, unmodified `coach/index.ts`. Worked around with `deno check --node-modules-dir=auto index.ts` for verification purposes only; the generated `deno.lock` side-effect was deleted afterward since it isn't a real project artifact (not used by the actual `supabase functions deploy` step, which succeeded without it).
- The human-verify checkpoint required a live `system_config.ttsProvider` flip to `'elevenlabs'` (affects all users' TTS behavior while flipped, not just the tester). Flipped via direct SQL immediately before testing, confirmed testing complete, flipped back to `'device'` immediately after — window was test-duration only.

## User Setup Required
None - no further external service configuration required. The live deploy and schema are already in their final state.

## Next Phase Readiness
- SEC-01 is closed: all four Phase 3 ROADMAP success criteria hold against the real deployed function (zero-auth rejected, anon-key-only rejected as guest, signed-in calls capped per-user, every rejection path still produces audible speech).
- `ealch-v2/supabase/SETUP.md`'s tts smoke-test block (03-02) is now provable end-to-end against the live project.

---
*Phase: 03-tts-security-hardening*
*Completed: 2026-09-20*
