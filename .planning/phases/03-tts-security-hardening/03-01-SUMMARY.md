---
phase: 03-tts-security-hardening
plan: 01
subsystem: api
tags: [deno, edge-function, rate-limiting, node-test]

requires: []
provides:
  - "quota.ts: classifyTier(), decide(), evaluatePremiumUsage(), evaluateFreePreview(), DEFAULT_LIMITS"
affects: [03-04-tts-security-hardening]

tech-stack:
  added: []
  patterns:
    - "Import-free 'logic file' pair (quota.ts + quota.test.ts), same discipline as coach/routing.ts — runs under node --test with zero Deno dependency"

key-files:
  created:
    - ealch-v2/supabase/functions/tts/quota.ts
    - ealch-v2/supabase/functions/tts/quota.test.ts
  modified: []

key-decisions:
  - "Free tier's allowance is passed as a single freePreviewTotal number, never a {day,chars} window object — makes the one-shot rule structural, not just a low config number"
  - "evaluatePremiumUsage() checks daily_chars -> daily_requests -> monthly_chars -> burst in that fixed order, each independently, so a caller under every other window still fails on burst alone"

patterns-established:
  - "decide(tier, usage, freePreviewTotal, limits) is the single call site tts/index.ts (03-04) will use — guest short-circuits before usage is ever read"

requirements-completed: [SEC-01]

duration: 15min
completed: 2026-09-20
---

# Phase 3 Plan 01: TTS Quota Decision Layer Summary

**Pure, import-free TTS quota logic (quota.ts) with 18 node:test cases pinning tier classification, four independent premium windows, and the free tier's structural one-shot allowance**

## Performance

- **Duration:** ~15 min
- **Tasks:** 2 (RED test file, GREEN implementation)
- **Files modified:** 2

## Accomplishments
- `classifyTier()` fail-closed tier classification (guest/free/premium) from uid + entitlements row
- `decide()`/`evaluatePremiumUsage()`/`evaluateFreePreview()` covering all D-05/D-06 windows
- `DEFAULT_LIMITS` pinned to the exact locked numbers (2000/25000/30/3/2500)
- 18/18 tests green, zero imports in quota.ts

## Task Commits

1. **Task 1 (RED): quota.test.ts** - `8f06e84` (test)
2. **Task 2 (GREEN): quota.ts** - `bb07a7c` (feat)

## Files Created/Modified
- `ealch-v2/supabase/functions/tts/quota.ts` - Pure tier classification + multi-window quota decision logic
- `ealch-v2/supabase/functions/tts/quota.test.ts` - 18 node:test cases

## Decisions Made
None - followed plan as specified.

## Deviations from Plan
None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- `quota.ts`'s `decide()` is ready for 03-04-PLAN.md to wire into `tts/index.ts` alongside the live entitlements read and the `tts_bump`/`tts_bump_free_preview` RPCs from 03-02.

---
*Phase: 03-tts-security-hardening*
*Completed: 2026-09-20*
