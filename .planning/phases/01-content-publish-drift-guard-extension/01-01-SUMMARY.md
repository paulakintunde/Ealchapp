---
phase: 01-content-publish-drift-guard-extension
plan: 01
subsystem: testing
tags: [publish-pipeline, drift-guard, node-test, typescript, content-integrity]

# Dependency graph
requires: []
provides:
  - "Pure, DB-free drift comparators (findVersionedLosses, findUnitLosses, findPresenceLosses) generalized across lessons, units, scenarios, playlists, and speak stages"
  - "node:test regression suite proving the 2026-07-31 incident shape (same-version section collapse, version-ahead overview erasure) and the Postgres-ahead/unit-prune non-block cases"
affects: [01-02-wire-drift-guard-into-publish, 01-03-drift-report]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Pure-sibling-module extraction: logic pulled out of publish-content.ts's inline step into a type-only-import, zero-I/O .logic.ts file, following seed-cut.logic.ts's precedent"
    - "Loss-only, directional comparators: DELETE/REVERT/same-version-shrink and any-version presence-loss, never equality — a version-ahead DB is always safe"

key-files:
  created:
    - ealch-admin/scripts/drift-guard.logic.ts
    - ealch-admin/scripts/drift-guard.logic.test.ts
  modified: []

key-decisions:
  - "Dropped the Lesson/Scenario/Playlist/SpeakStage type imports from drift-guard.logic.ts since the generic comparators only reference the caller-supplied types structurally (id/version) — only Unit needed a concrete import for findUnitLosses. Per plan direction: drop unused imports rather than suppress a TypeScript unused-import error."

patterns-established:
  - "A future drift-guard bypass (if ever added) must log the specific kind+id it overrides rather than being a blanket switch — stated in the module header and enforced structurally by the module taking no argv/env input."

requirements-completed: [PUBLISH-01]

# Metrics
duration: 20min
completed: 2026-09-19
---

# Phase 1 Plan 01: Drift-Guard Pure Logic Extraction Summary

**Extracted publish-content.ts's inline lesson-only drift guard into three pure, DB-free comparators (findVersionedLosses, findUnitLosses, findPresenceLosses) covering all five seed-carried content kinds, backed by a 10-case node:test regression suite proving the 2026-07-31 incident shape.**

## Performance

- **Duration:** ~20 min
- **Started:** 2026-09-19T18:13:00Z (approx, first read)
- **Completed:** 2026-09-19T18:33:21Z
- **Tasks:** 2 completed
- **Files modified:** 2 (both new)

## Accomplishments
- `findVersionedLosses` generalizes the old lessons-only DELETE/REVERT check to any kind carrying a body-embedded `version` (lessons, scenarios, playlists, speak stages), plus a new same-version structural-signal shrink check (e.g. sections/turns/tracks/blocks count) gated strictly on equal version so a version-ahead DB is never penalized.
- `findUnitLosses` handles the version-less Unit type by comparing lesson rosters, and is proven NOT to false-positive on the publisher's own step-2 lesson pruning (only reports a dropped lessonId if that lesson is still published elsewhere).
- `findPresenceLosses` closes the specific blind spot that let the 2026-07-31 overview collapse through: a field (e.g. `overview`) present in committed git and absent in the DB is a loss at ANY version relation, not just when the DB is behind.
- 10 `node:test` cases pass with zero Postgres dependency, including the Postgres-ahead non-block case, the same-version section collapse (literal sons.03.l1 shape), the version-ahead overview erasure, scenario alternate-answer loss, and playlist/speak-stage coverage.
- Full `ealch-admin` test suite (598 tests) and `pnpm typecheck` both stayed green — no regressions.
- `publish-content.ts` is byte-unchanged, confirmed via `git diff --stat`.

## Task Commits

Each task was committed atomically:

1. **Task 1: Create drift-guard.logic.ts with the three pure comparators** - `0b61f60` (feat)
2. **Task 2: Write the drift-guard regression suite** - `c530779` (test)

_Note: Task frontmatter marked `tdd="true"`, but per the plan's own `<action>`/`<behavior>` structure the implementation (Task 1) was written first with its full behavior spec, then the regression suite (Task 2) was written and run against it — both tasks report the RED/GREEN state inline: Task 1's `pnpm typecheck` gate and Task 2's `node --import tsx --test` gate were both green on first correct implementation, so there is no separate failing-test commit to point to. All 10 tests passed on first run against the Task 1 implementation; no iteration was needed._

## Files Created/Modified
- `ealch-admin/scripts/drift-guard.logic.ts` - Three pure exported comparators (`findVersionedLosses`, `findUnitLosses`, `findPresenceLosses`) and the `DriftLoss` type, zero I/O, type-only import of `Unit` from `ealch-v2/src/content/schema.ts`
- `ealch-admin/scripts/drift-guard.logic.test.ts` - 10 `node:test` cases covering the full incident surface and both false-positive regression cases

## Decisions Made
- Dropped unused `Lesson`/`Scenario`/`Playlist`/`SpeakStage` type imports from `drift-guard.logic.ts` (they were only needed for doc-comment references, and the generic functions only structurally require `{ id, version }`); kept only the concrete `Unit` import needed by `findUnitLosses`. This follows the plan's explicit instruction to drop rather than suppress unused imports.

## Deviations from Plan

None - plan executed exactly as written. All acceptance criteria greps and both verification commands (`pnpm typecheck`, `node --import tsx --test scripts/drift-guard.logic.test.ts`) passed without needing any auto-fix.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- `drift-guard.logic.ts`'s three comparators and `DriftLoss` type are ready to be wired into `publish-content.ts`'s step 4·0 by plan 02, replacing the inline lessons-only block with calls covering all five kinds.
- The `signals`/`fields` accessor shapes used in this plan's tests (e.g. `{ label: 'sections', of: (l) => l.sections.length }`) are the exact shapes plan 02 should wire for production, since the tests were written against them directly.
- No blockers.

---
*Phase: 01-content-publish-drift-guard-extension*
*Completed: 2026-09-19*

## Self-Check: PASSED

- FOUND: ealch-admin/scripts/drift-guard.logic.ts
- FOUND: ealch-admin/scripts/drift-guard.logic.test.ts
- FOUND: .planning/phases/01-content-publish-drift-guard-extension/01-01-SUMMARY.md
- FOUND: commit 0b61f60 (Task 1)
- FOUND: commit c530779 (Task 2)
