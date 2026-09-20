---
phase: 05-paywall-coverage-expansion-upgrade-nudge
plan: 02
subsystem: paywall
tags: [react-native, expo-router, entitlement, zustand, paywall]

# Dependency graph
requires:
  - phase: 04-entitlement-verification-signed-out-purchase-fix
    provides: hardened entitlement/restore verification that this plan's widened gating relies on
provides:
  - "lesson.tsx and narrated.tsx no longer write a gated lesson's title into the persisted resume pointer"
  - "theme.tsx renders the PREMIERE lock pill on parcours steps whose band is outside FREE_BANDS"
  - "flashthemes.tsx, dictationthemes.tsx, voicethemes.tsx, sentencethemes.tsx render the PREMIERE lock pill on rows whose theme has no free band"
  - "lockVisibilityWiring.test.ts source-text suite proving all seven wirings landed"
affects: [05-03, 05-07]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Reused den.tsx's lock-pill JSX verbatim across five browse/parcours screens instead of inventing a second lock visual"
    - "Source-text assertion test (readFileSync + node:assert) for JSX behaviours with no RNTL render harness, following entitlementDowngrade.test.ts's pattern"

key-files:
  created:
    - ealch-v2/src/store/lockVisibilityWiring.test.ts
  modified:
    - ealch-v2/app/lesson.tsx
    - ealch-v2/app/narrated.tsx
    - ealch-v2/app/theme.tsx
    - ealch-v2/app/flashthemes.tsx
    - ealch-v2/app/dictationthemes.tsx
    - ealch-v2/app/voicethemes.tsx
    - ealch-v2/app/sentencethemes.tsx

key-decisions:
  - "No new state or moved gate checks for the setResume fix — bandLocked was already computed above both leaking effects, so the fix is a one-condition change per file"
  - "The four browse screens key their lock on the theme's LOWEST band (r.lo), not its full range, because these screens push into the drill screen with no level param and thus open the whole theme across every band"

requirements-completed: [PAY-02]

# Metrics
duration: ~25min
completed: 2026-09-20
---

# Phase 5 Plan 02: Lock-Visibility Gaps (setResume leak + upstream lock pill) Summary

**Fixed the setResume leak that wrote a locked A2 lesson into home's "continue" pointer, and added the PREMIERE lock pill to theme.tsx's parcours steps and all four theme-browse screens, reusing den.tsx's pill JSX verbatim.**

## Performance

- **Duration:** ~25 min
- **Tasks:** 3 completed
- **Files modified:** 7 (2 bug fixes, 5 pill wirings), 1 test file created

## Accomplishments
- `lesson.tsx` and `narrated.tsx` both gate their `setResume` write on `!bandLocked`, so bouncing off a locked lesson no longer leaves it named in home's continue pointer (D-05)
- `theme.tsx`'s parcours step rows now show the PREMIÈRE lock pill (independent of the existing progression lock) when the selected band is outside `FREE_BANDS` and the user lacks `levels.all`
- All four theme-browse screens (`flashthemes.tsx`, `dictationthemes.tsx`, `voicethemes.tsx`, `sentencethemes.tsx`) show the same pill on rows whose theme has no free-band content at all
- `lockVisibilityWiring.test.ts` asserts all seven edits against the screen sources and would fail if any were reverted

## Task Commits

Each task was committed atomically:

1. **Task 1: Stop a locked lesson writing itself into the resume pointer** - `b738139` (fix)
2. **Task 2: Show the PREMIERE lock pill on locked parcours steps in theme.tsx** - `aca1ca5` (feat)
3. **Task 3: Show the PREMIERE lock pill on fully-gated theme rows in the four browse screens** - `dee861b` (feat)

## Files Created/Modified
- `ealch-v2/app/lesson.tsx` - gated the resume-write effect on `!bandLocked`
- `ealch-v2/app/narrated.tsx` - gated the resume-write effect on `!bandLocked`
- `ealch-v2/app/theme.tsx` - added `FREE_BANDS`/`useFeature('levels.all')` predicate and the PREMIÈRE pill on locked parcours steps
- `ealch-v2/app/flashthemes.tsx` - added the same lock pill on rows keyed on `r.lo`
- `ealch-v2/app/dictationthemes.tsx` - same
- `ealch-v2/app/voicethemes.tsx` - same
- `ealch-v2/app/sentencethemes.tsx` - same
- `ealch-v2/src/store/lockVisibilityWiring.test.ts` - new source-text assertion suite (3 tests)

## Decisions Made
- Followed the plan's explicit instruction not to move any gate check, not to add a loading state, and not to add a lock placeholder for Task 1 — 05-RESEARCH.md Pitfall 2 already established there is no render flash to fix.
- Kept each browse screen's own unlocked-chevron color (`t.txNonText`) rather than switching to `den.tsx`'s `t.accTx`, per the plan's explicit instruction to match the file being edited for the unlocked state while keeping the pill itself identical to `den.tsx`.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
- The worktree had no `node_modules` installed (fresh worktree checkout). Ran `npm ci --prefer-offline --no-audit --no-fund` inside `ealch-v2/` to install dependencies locally so `typecheck` and `test` could run — this is local tooling setup, not a plan deviation, and `node_modules/` remains gitignored and untracked.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- Plan 03 (the enforcement chokepoint at the four drill screens) can proceed independently; this plan is visibility-only and adds no enforcement.
- The manual device checkpoint deferred to Plan 07 (confirming the pill renders correctly on a free account) is still outstanding, as documented in the plan's own `<verification>` section.

---
*Phase: 05-paywall-coverage-expansion-upgrade-nudge*
*Completed: 2026-09-20*

## Self-Check: PASSED

All modified/created files confirmed present on disk; all three task commits (`b738139`, `aca1ca5`, `dee861b`) confirmed in git history.
