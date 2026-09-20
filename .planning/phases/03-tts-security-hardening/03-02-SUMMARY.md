---
phase: 03-tts-security-hardening
plan: 02
subsystem: database
tags: [postgres, supabase, rls, rpc]

requires: []
provides:
  - "Live tts_usage_daily/monthly/minute + tts_free_preview tables"
  - "Live tts_bump / tts_bump_free_preview atomic RPCs"
  - "system_config.active carries 5 new ttsPremium*/ttsFreePreviewChars keys"
affects: [03-04-tts-security-hardening]

tech-stack:
  added: []
  patterns:
    - "schema.sql + a one-off ealch-admin script IS this project's migration mechanism (no supabase/migrations/ dir)"

key-files:
  created:
    - ealch-admin/scripts/apply-tts-quota-schema.ts
  modified:
    - ealch-v2/supabase/schema.sql
    - ealch-v2/supabase/SETUP.md

key-decisions:
  - "Left MAX_CHARS at 2400 in tts/index.ts unchanged (03-CONTEXT.md's explicit discretion) rather than bumping to match freePreviewChars=2500 — immaterial gap, avoids touching a working constant for no functional gain"

patterns-established: []

requirements-completed: [SEC-01]

duration: 20min
completed: 2026-09-20
---

# Phase 3 Plan 02: Live TTS Quota Schema Summary

**tts_usage_daily/monthly/minute + tts_free_preview tables and tts_bump/tts_bump_free_preview RPCs are now live on ogbothupjcivwruesgsu, verified idempotent (2 successful runs)**

## Performance

- **Duration:** ~20 min
- **Tasks:** 3 (schema.sql append, live apply, SETUP.md smoke-test docs)
- **Files modified:** 3

## Accomplishments
- 4 new tables + 2 RPCs added to `schema.sql`, RLS-enabled with zero policies, revoked from anon/authenticated (service-role only)
- Applied to the live Supabase project (confirmed `ACTIVE_HEALTHY` before running) — all 4 tables, both functions, and 5 config keys verified present via the apply script's own queries
- Re-ran the apply script a second time with identical output, proving idempotency
- `SETUP.md` documents the 3-case tts smoke test 03-04 will need

## Task Commits

1. **Task 1: schema.sql append** - `2f0377d` (feat)
2. **Task 2 [BLOCKING]: live apply** - `18e2daf` (feat)
3. **Task 3: SETUP.md smoke-test docs** - `f8162d6` (docs)

## Files Created/Modified
- `ealch-v2/supabase/schema.sql` - New tts_* tables, RPCs, revokes, 5 config keys merged into existing seed JSON
- `ealch-admin/scripts/apply-tts-quota-schema.ts` - One-off idempotent live-apply script
- `ealch-v2/supabase/SETUP.md` - tts smoke-test block

## Decisions Made
- None beyond the plan's own explicit discretion note (MAX_CHARS left at 2400).

## Deviations from Plan

### Auto-fixed Issues

**1. [Path bug in plan's own script template] Fixed `import.meta.url`-relative path**
- **Found during:** Task 2 (running the apply script)
- **Issue:** Plan's script used `'../ealch-v2/supabase/schema.sql'` resolved against `import.meta.url`, which is the script's own location (`ealch-admin/scripts/`) — one level short, causing `ENOENT` at `ealch-admin/ealch-v2/supabase/schema.sql`.
- **Fix:** Changed to `'../../ealch-v2/supabase/schema.sql'`.
- **Files modified:** `ealch-admin/scripts/apply-tts-quota-schema.ts`
- **Verification:** Script ran successfully, all 4 tables/2 functions/5 config keys confirmed present, re-run twice with identical output.
- **Committed in:** `18e2daf` (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (path bug)
**Impact on plan:** Trivial path fix, no scope change. All other plan content applied verbatim.

## Issues Encountered
None beyond the path bug above.

## User Setup Required
None — the live database change is already applied and verified; no manual dashboard step remains for this plan.

## Next Phase Readiness
- 03-04-PLAN.md's edge function wiring can now call `tts_bump`/`tts_bump_free_preview` against real, live tables and read `system_config.active`'s 5 new TTS limit keys.

---
*Phase: 03-tts-security-hardening*
*Completed: 2026-09-20*
