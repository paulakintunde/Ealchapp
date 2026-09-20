---
phase: 04-entitlement-verification-signed-out-purchase-fix
plan: 01
subsystem: payments
tags: [exam-gate, entitlement, grace-window, node-test, pure-logic]

# Dependency graph
requires: []
provides:
  - "examPaperAllowed's complete four-input decision table pinned by an automated test (examGate.logic.test.ts), including the gateOn=false production-state regression guard"
  - "examAttempt.logic.ts: pure grace-window math (ATTEMPT_GRACE_S, MAX_TIMING_S, clampTimingS, attemptExpiresAt, attemptStillGradable) for D-06's 'section duration + 60 minutes' authorized-attempt window"
  - "examAttempt.logic.test.ts: boundary tests proving 59-minutes-after-expiry is gradable and 61-minutes-after is not, and that expiry is exclusive"
affects: [04-02, 04-03, 04-04, 04-05, 04-06]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Pure decision-function file discipline (zero imports, node --test-able) reused from examGate.logic.ts / entitlement.logic.ts for the new grace-window math"
    - "deepStrictEqual on the full GateDecision object (not just the boolean) so a changed reason string fails the test"

key-files:
  created:
    - ealch-v2/src/utils/examGate.logic.test.ts
    - ealch-v2/src/utils/examAttempt.logic.ts
    - ealch-v2/src/utils/examAttempt.logic.test.ts
  modified: []

key-decisions:
  - "Followed the plan's exact specified implementation for clampTimingS/attemptExpiresAt/attemptStillGradable verbatim rather than deriving alternatives, since the plan pinned exact formulas as part of D-06's contract with plans 05/06's Deno parity test"

patterns-established:
  - "Grace-window authorization math lives in a zero-import pure logic file (examAttempt.logic.ts), matching examGate.logic.ts and entitlement.logic.ts — plans 05/06 will duplicate this into Deno and diff source text for parity"

requirements-completed: [PAY-03]

# Metrics
duration: ~15min
completed: 2026-09-20
---

# Phase 4 Plan 01: Exam Gate Truth Table & Attempt Grace-Window Math Summary

**Pinned `examPaperAllowed`'s four-input decision table with an 8-case automated truth table, and built the pure `examAttempt.logic.ts` grace-window math (`timingS` seconds + fixed 3600s buffer) that plans 05/06's server-side exam-attempt gate will depend on.**

## Performance

- **Duration:** ~15 min
- **Completed:** 2026-09-20
- **Tasks:** 2/2 completed
- **Files modified:** 3 (all new)

## Accomplishments
- `examGate.logic.test.ts` pins all 8 rows of `examPaperAllowed`'s decision table, including the ship-day production case (`gateOn=false, entitled=false, freePapers=0, paperNo=20 => allowed`) with the exact named comment required by the plan, without modifying `examGate.logic.ts` itself
- `examAttempt.logic.ts` implements D-06's grace window as a zero-import pure file: `ATTEMPT_GRACE_S = 3600` (fixed, not a `system_config` tunable), `MAX_TIMING_S = 21600` clamp, `clampTimingS`, `attemptExpiresAt`, and `attemptStillGradable` (exclusive expiry, matching SQL's `expires_at > now()`)
- `examAttempt.logic.test.ts` proves the 59-minute-gradable / 61-minute-not-gradable boundary and the exclusive-expiry edge case
- Zero references to the nonexistent `overview.minutes` field anywhere except the deliberate disclaimer line in the header comment

## Task Commits

Each task was committed atomically:

1. **Task 1: Pin the four-input exam gate decision with a complete truth table** - `7684592` (test)
2. **Task 2: Build the pure attempt grace-window logic (D-06) and its boundary tests** - `2f3af47` (feat)

**Plan metadata:** (this commit)

## Files Created/Modified
- `ealch-v2/src/utils/examGate.logic.test.ts` - 8-case truth table for `examPaperAllowed`, including the gateOn=false ship-day regression guard
- `ealch-v2/src/utils/examAttempt.logic.ts` - Pure grace-window math: `ATTEMPT_GRACE_S`, `MAX_TIMING_S`, `clampTimingS`, `attemptExpiresAt`, `attemptStillGradable`
- `ealch-v2/src/utils/examAttempt.logic.test.ts` - Boundary tests for the grace window (clamping, 59min/61min edges, exclusive expiry)

## Decisions Made
- Implemented `clampTimingS`/`attemptExpiresAt`/`attemptStillGradable` exactly as the plan's `<action>` block specified (formula-for-formula), since these exact semantics are what 04-05's Deno parity test will diff against — no discretionary deviation taken here.

## Deviations from Plan

None — plan executed exactly as written. Both files' content, exports, and test coverage match the plan's `<action>`/`<behavior>` blocks precisely.

## Issues Encountered

**Worktree missing `node_modules` blocked the plan's full `npx tsc --noEmit` verification step.** This git worktree (.claude/worktrees/agent-a8560eb4fc8a8efa4) has no installed dependencies (`node_modules` is gitignored and not populated per-worktree; only `.bin`/`.deno` shims exist). Running `npx tsc` locally errored with "not the tsc command you are looking for" (no local install). Running the main checkout's `typescript` binary directly against this worktree's `tsconfig.json` surfaced dozens of pre-existing, unrelated `TS2307: Cannot find module 'react'/'zustand'/'react-native'/...` errors across files this plan never touched (`useStore.ts`, `useUI.ts`, `useProgress.ts`, `theme/*`, `utils/reduceMotion.ts`) — all attributable to the missing `node_modules`, not to any code in this plan. **Zero errors were reported against `examAttempt.logic.ts` or `examAttempt.logic.test.ts`** when checked this way, confirming the new files themselves typecheck cleanly against the project's real dependency graph. Per the deviation rules' scope boundary, this pre-existing worktree/tooling gap is out of scope for this plan and is not fixed here — `node --test` (the plan's other verification command) ran cleanly with `# fail 0` for both new test files. Recommend the orchestrator or a future plan ensure worktree agents have `node_modules` available (e.g., via `npm ci` at worktree setup, or a shared symlink) before requiring `tsc --noEmit` as a hard gate in parallel wave execution.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness
- `examAttempt.logic.ts`'s five exported symbols and `examGate.logic.ts`'s `examPaperAllowed` (now test-pinned) are ready for 04-02+ to build the actual server-side `grade-exam` entitlement gate and exam-start authorization flow on top of.
- Plan 05's Deno-copy parity test can diff its ported function bodies against these exact, now-frozen-by-test source files.
- No blockers for the next wave's plans.

---
*Phase: 04-entitlement-verification-signed-out-purchase-fix*
*Completed: 2026-09-20*

## Self-Check: PASSED

- FOUND: ealch-v2/src/utils/examGate.logic.test.ts
- FOUND: ealch-v2/src/utils/examAttempt.logic.ts
- FOUND: ealch-v2/src/utils/examAttempt.logic.test.ts
- FOUND: .planning/phases/04-entitlement-verification-signed-out-purchase-fix/04-01-SUMMARY.md
- FOUND commit: 7684592 (test(04-01): pin the four-input exam gate decision table)
- FOUND commit: 2f3af47 (feat(04-01): add pure attempt grace-window math (D-06))
