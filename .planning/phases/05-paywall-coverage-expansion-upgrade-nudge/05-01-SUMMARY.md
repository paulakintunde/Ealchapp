---
phase: 05-paywall-coverage-expansion-upgrade-nudge
plan: 01
subsystem: payments
tags: [entitlement, i18n, analytics, zustand-free-logic, node-test, typescript]

# Dependency graph
requires:
  - phase: 04-entitlement-verification-signed-out-purchase-fix
    provides: guardedNow()/effectiveNow clock-tamper protection that this plan's predicates take nowMs from
provides:
  - "drillDeckGate / freeBandItems / drillLevelLocked — the single reusable predicate for gating the four flat-deck drill screens (flashcards, dictation, voiceflash, sentence) by FREE_BANDS"
  - "roleplayNudgeDue / NUDGE_COOLDOWN_MS — the 24h-cadence predicate for the roleplay upgrade nudge"
  - "12 new FR+EN string key pairs for contextual paywall copy, exam explainer, nudge and reconciliation banners"
  - "3 new AnalyticsEvent union members: upgrade_nudge_shown, upgrade_nudge_tapped, reconciliation_shown"
affects: [05-02, 05-03, 05-04, 05-05, 05-06]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "All Phase 5 gating decisions route through entitlement.logic.ts predicates, never re-derived per screen"
    - "drillDeckGate composes drillLevelLocked (explicit ?level= param) and freeBandItems (per-item band filter) into one { items, locked } result screens can render directly"

key-files:
  created:
    - ealch-v2/src/store/entitlementDrillGate.test.ts
    - ealch-v2/src/store/entitlementNudge.test.ts
  modified:
    - ealch-v2/src/store/entitlement.logic.ts
    - ealch-v2/src/i18n/strings.ts
    - ealch-v2/src/services/analytics.ts

key-decisions:
  - "drillDeckGate treats an empty raw corpus query as ungated (a thin corpus is not a paywall) but a mixed deck that filters to nothing IS locked"
  - "roleplayNudgeDue is >= the free allowance, not ===, so a user who was entitled earlier and already played past the cap still gets nudged"
  - "No coach-side nudge equivalent added — the coach cap is server-enforced with no client-readable remaining-turn count (05-RESEARCH.md Open Question 2)"

requirements-completed: [PAY-02, PAY-05]

duration: 15min
completed: 2026-09-20
---

# Phase 5 Plan 1: Entitlement Predicates, Nudge Cadence & i18n/Analytics Vocabulary Summary

**Pure node-testable drill-deck band gate, 24h roleplay upgrade-nudge cadence predicate, and the 12 FR+EN string pairs + 3 analytics events every other Phase 5 plan consumes**

## Performance

- **Duration:** ~15 min
- **Started:** 2026-09-20T18:10:00Z (first commit)
- **Completed:** 2026-09-20T18:19:05Z (last task commit)
- **Tasks:** 3 completed
- **Files modified:** 5 (2 created, 3 modified)

## Accomplishments

- Closed the D-06 coverage gap: `drillDeckGate`/`freeBandItems`/`drillLevelLocked` give the four flat-deck drill screens one reusable band gate instead of leaving them to re-derive `FREE_BANDS` logic independently.
- Added `roleplayNudgeDue`/`NUDGE_COOLDOWN_MS` (D-11/D-13): a pure predicate for the 24h-cadence upgrade nudge, composed entirely from existing `hasFeature`/`scenariosPlayedOn` exports with zero new imports.
- Added 12 new FR+EN i18n key pairs (D-08/D-12/D-17) and 3 new closed-union `AnalyticsEvent` members, giving Wave 2's four parallel plans a fixed vocabulary to build against.
- `entitlement.logic.ts` retains exactly one (type-only) import throughout — the pure-logic discipline the file's header comment requires held across both new predicate blocks.

## Task Commits

Each task was committed atomically (TDD RED → GREEN pairs for Tasks 1-2):

1. **Task 1: Add the drill-deck band gate predicates**
   - `c0c641b` (test) — failing `entitlementDrillGate.test.ts`, 10 tests covering all `<behavior>` rows
   - `d04a5e4` (feat) — `freeBandItems`/`drillLevelLocked`/`drillDeckGate` implementation
2. **Task 2: Add the upgrade-nudge cadence predicate**
   - `573cedc` (test) — failing `entitlementNudge.test.ts`, 10 tests
   - `16db66e` (feat) — `roleplayNudgeDue`/`NUDGE_COOLDOWN_MS` implementation
3. **Task 3: Add the phase's i18n strings and analytics event names**
   - `9cba3a5` (feat) — 12 new FR+EN key pairs in `strings.ts`, 3 new `AnalyticsEvent` members in `analytics.ts`

**Plan metadata:** committed with this SUMMARY.md (worktree mode — orchestrator handles STATE.md/ROADMAP.md centrally after merge)

## Files Created/Modified

- `ealch-v2/src/store/entitlementDrillGate.test.ts` - 10 `node --test` cases for the drill-deck band gate
- `ealch-v2/src/store/entitlementNudge.test.ts` - 10 `node --test` cases for the nudge cadence predicate
- `ealch-v2/src/store/entitlement.logic.ts` - adds `LeveledItemLike`, `freeBandItems`, `drillLevelLocked`, `drillDeckGate`, `NUDGE_COOLDOWN_MS`, `roleplayNudgeDue`; no new imports
- `ealch-v2/src/i18n/strings.ts` - 12 new keys (type decl + FR + EN): `pwTitleLevels`/`pwLeadLevels`, `pwTitleCoach`/`pwLeadCoach`, `pwTitleRoleplay`/`pwLeadRoleplay`, `pwExamTitle`/`pwExamBody`/`pwExamGotIt`, `acctTag`, `reconcileBody`, `nudgeRoleplayBody`
- `ealch-v2/src/services/analytics.ts` - extends `AnalyticsEvent` with `upgrade_nudge_shown`, `upgrade_nudge_tapped`, `reconciliation_shown`

## Decisions Made

- Followed the plan's exact code blocks for both new `entitlement.logic.ts` sections and both new copy tables — no deviation from the specified implementation.
- Copy rules honored: no em dash, no "honest" wording, file's existing `\'`-escaped single-quote convention used for FR/EN apostrophes (matched to the rest of the file rather than the plan text's literal double-quote fallback for two lines).

## Deviations from Plan

None — plan executed exactly as written. One environment-only adjustment was needed to run verification (not a code change, no deviation rule applies):

- **Environment note:** This worktree had no `node_modules` (git worktrees don't carry gitignored directories). `npm --prefix ealch-v2 run typecheck` requires `node_modules` for `expo/tsconfig.base` resolution and all package type declarations. Created a Windows junction (`ealch-v2/node_modules` → the main checkout's `ealch-v2/node_modules`, via `fs.symlinkSync(..., 'junction')`) purely to run `tsc --noEmit` and `node --test`. The junction is itself gitignored (matches the existing `node_modules/` rule) and was confirmed absent from `git status --short` before every commit in this plan — no tracked file or commit is affected.

## Issues Encountered

- `npm --prefix ealch-v2 run typecheck` initially failed with `'tsc' is not recognized` because this worktree checkout has no `node_modules` (worktrees do not carry gitignored directories). Resolved via the junction described above, pointing at the main checkout's already-installed `node_modules`. No production dependency was added or changed.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Wave 2's four parallel plans can now call `drillDeckGate`, `drillLevelLocked`, `freeBandItems`, `roleplayNudgeDue`, `NUDGE_COOLDOWN_MS`, all 12 new i18n keys, and all 3 new analytics events directly — no further contract discovery needed.
- No blockers. `entitlement.logic.ts` still carries exactly one (type-only) import; all five `entitlement*.test.ts` suites (46 tests) and the i18n parity test are green; `tsc --noEmit` is clean.

---
*Phase: 05-paywall-coverage-expansion-upgrade-nudge*
*Completed: 2026-09-20*

## Self-Check: PASSED

- FOUND: ealch-v2/src/store/entitlementDrillGate.test.ts
- FOUND: ealch-v2/src/store/entitlementNudge.test.ts
- FOUND: .planning/phases/05-paywall-coverage-expansion-upgrade-nudge/05-01-SUMMARY.md
- FOUND commit: c0c641b (test: drill-deck band gate, RED)
- FOUND commit: d04a5e4 (feat: drill-deck band gate, GREEN)
- FOUND commit: 573cedc (test: nudge cadence, RED)
- FOUND commit: 16db66e (feat: nudge cadence, GREEN)
- FOUND commit: 9cba3a5 (feat: i18n strings + analytics events)
