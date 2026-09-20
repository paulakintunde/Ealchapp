---
phase: 04-entitlement-verification-signed-out-purchase-fix
plan: 04
subsystem: payments
tags: [restore, adapty, purchases, testing, refactor]

# Dependency graph
requires:
  - phase: 04-entitlement-verification-signed-out-purchase-fix (prior plans)
    provides: purchases.ts's PurchasesStatus/restorePurchases() contract (unmodified by this plan)
provides:
  - "Pure, tested restoreOutcome() decision function (src/services/purchases.logic.ts)"
  - "Single source of truth for the four restore outcomes, consumed by both settings.tsx and paywall.tsx"
affects: [04-08 (device-level restore checkpoint), any future restore/entitlement UI work]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Pure-logic file discipline (zero imports, prose header, paired node:test .test.ts) — matches examGate.logic.ts / entitlement.logic.ts convention"
    - "Exhaustive Record<Union, string> copy map so a new union member is a compile error at every call site, not a silent gap on one"

key-files:
  created:
    - ealch-v2/src/services/purchases.logic.ts
    - ealch-v2/src/services/purchases.logic.test.ts
  modified:
    - ealch-v2/app/settings.tsx
    - ealch-v2/app/paywall.tsx

key-decisions:
  - "Fixed a second stale RevenueCat comment (settings.tsx line 122, outside the plan's named Restore-row comment) to satisfy the plan's own zero-revenuecat-references acceptance criterion — Rule 1/3 auto-fix, comment-only, zero behavior change"
  - "paywall.tsx's restore() passes its existing render-scope `status` const (already typed PurchasesStatus via inference) rather than re-calling purchasesStatus(), per the plan's explicit code sample"

patterns-established:
  - "restoreOutcome(res, status) is the one place the four-branch restore decision is evaluated; screens only map its result through a Record"

requirements-completed: [PAY-01]

# Metrics
duration: ~14min
completed: 2026-09-20
---

# Phase 04 Plan 04: Extract and share the restore-outcome decision Summary

**Pure, tested `restoreOutcome()` function replacing the identical untested four-branch conditional duplicated in `settings.tsx` and `paywall.tsx`, wired through an exhaustive `Record<RestoreOutcome, string>` copy map.**

## Performance

- **Duration:** ~14 min
- **Started:** 2026-09-20T01:55:02-07:00 (RED commit)
- **Completed:** 2026-09-20T02:09:27-07:00 (REFACTOR/rewire commit)
- **Tasks:** 2 completed
- **Files modified:** 4 (2 created, 2 modified)

## Accomplishments
- Extracted the restore-feedback decision (restored / none / failed / unavailable) into `src/services/purchases.logic.ts` — pure, zero imports, with a 5-test truth table in `purchases.logic.test.ts` (first automated test for the `purchases` domain)
- Compile-time parity assertion between `RestoreOutcome`'s `PurchasesStatusLike` and `purchases.ts`'s real `PurchasesStatus` union, so the two can never silently diverge
- Rewired both `settings.tsx` and `paywall.tsx` to call `restoreOutcome()` once and render from an identical exhaustive `Record<RestoreOutcome, string>` copy map
- `restore_completed`'s `found` analytics prop is now derived from the same `outcome` the user is shown, rather than being recomputed from `res.ok && res.premium` a second time
- `restorePurchases()` and the rest of `purchases.ts` remain completely untouched (confirmed via `git diff --stat`)

## Task Commits

Each task was committed atomically (TDD gate sequence for Task 1):

1. **Task 1: Extract restoreOutcome into a pure logic file with its truth table**
   - `cd4fbd2` test(04-04): add failing truth table for restoreOutcome (RED)
   - `5bfae71` feat(04-04): extract restoreOutcome into a pure logic file (GREEN)
2. **Task 2: Rewire Settings and the paywall to the shared outcome + exhaustive copy map** — `bcee0c3` (refactor)

_No REFACTOR-only commit was needed beyond Task 2's rewire — the logic file needed no cleanup after GREEN._

## Files Created/Modified
- `ealch-v2/src/services/purchases.logic.ts` - Pure `restoreOutcome()` decision + `RestoreOutcome`/`PurchasesStatusLike` types
- `ealch-v2/src/services/purchases.logic.test.ts` - 5-test truth table + compile-time union-parity assertion
- `ealch-v2/app/settings.tsx` - `doRestore()` now calls `restoreOutcome()` + renders from the copy map; fixed two stale RevenueCat comments
- `ealch-v2/app/paywall.tsx` - `restore()` now calls `restoreOutcome()` + renders from the copy map

## Decisions Made
- Fixed a second, out-of-plan-scope stale "RevenueCat" comment in `settings.tsx` (line 122, unrelated to the Restore row) because the plan's own acceptance criterion (`grep -riF "revenuecat" ealch-v2/app/settings.tsx` returns 0) would otherwise fail — a Rule 1/3 auto-fix (comment-only, zero behavior change), not a new scope item.
- `paywall.tsx`'s `restore()` passes the screen's existing `status` const (typed `PurchasesStatus` by inference from `purchasesStatus()`) rather than re-calling `purchasesStatus()` inline, matching the plan's explicit code sample exactly.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug/stale reference] Fixed a second stale RevenueCat comment outside the named Restore-row comment**
- **Found during:** Task 2 (Rewire Settings and the paywall)
- **Issue:** `settings.tsx` line 122's comment ("the plan card reads the REAL entitlement (RevenueCat-fed useEntitlement)") still named the vendor removed in the 2026-07-22 Adapty swap. The plan named only the Restore-row comment (lines 228-229) for this fix, but its acceptance criteria checks the whole file for `revenuecat` case-insensitively, which this second occurrence would fail.
- **Fix:** Changed "RevenueCat-fed" to "Adapty-fed" in the plan-card comment. No code/behavior change.
- **Files modified:** ealch-v2/app/settings.tsx
- **Verification:** `grep -riF "revenuecat" ealch-v2/app/settings.tsx` now returns 0 matches
- **Committed in:** bcee0c3 (Task 2 commit)

**2. [Rule 3 - Blocking] Installed missing node_modules in the worktree**
- **Found during:** Task 1 verification (running `node --test` / `npx tsc --noEmit`)
- **Issue:** This worktree's `ealch-v2/node_modules` existed but only contained `.bin` shims and a near-empty `.deno` cache (1 package), with no real dependency trees installed — `tsc` and other tooling failed with `MODULE_NOT_FOUND`.
- **Fix:** Ran `npm install --prefer-offline --no-audit --no-fund` in `ealch-v2/` (resolved from the shared local npm cache, no network-fetch surprises). `node_modules` is gitignored and untracked by design.
- **Files modified:** none tracked (node_modules is gitignored)
- **Verification:** `npx tsc --noEmit` and `npm test` both run clean afterward
- **Committed in:** N/A (gitignored, not committed)

---

**Total deviations:** 2 auto-fixed (1 bug/stale-reference, 1 blocking)
**Impact on plan:** Both fixes were necessary to satisfy the plan's own acceptance criteria and to run verification at all. No scope creep — no code paths, exports, or copy strings changed beyond what the plan specified.

## Issues Encountered
- Local worktree had an incomplete `node_modules` (see deviation 2 above) — resolved by a local `npm install`, no external service or credential involvement.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- PAY-01's restore-feedback requirement is now backed by one tested, pure decision function consumed identically by both surfaces — plan 04-08's device-level checkpoint can proceed to verify `restorePurchases()`'s real Adapty SDK behavior against this same decision layer.
- No blockers for the next plan in this phase.

---
*Phase: 04-entitlement-verification-signed-out-purchase-fix*
*Completed: 2026-09-20*

## Self-Check: PASSED

- FOUND: ealch-v2/src/services/purchases.logic.ts
- FOUND: ealch-v2/src/services/purchases.logic.test.ts
- FOUND: ealch-v2/app/settings.tsx
- FOUND: ealch-v2/app/paywall.tsx
- FOUND: .planning/phases/04-entitlement-verification-signed-out-purchase-fix/04-04-SUMMARY.md
- FOUND commit: cd4fbd2 (test)
- FOUND commit: 5bfae71 (feat)
- FOUND commit: bcee0c3 (refactor)
