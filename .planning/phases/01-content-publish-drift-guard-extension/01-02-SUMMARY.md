---
phase: 01-content-publish-drift-guard-extension
plan: 02
subsystem: testing
tags: [publish-pipeline, drift-guard, content-integrity, typescript]

# Dependency graph
requires:
  - phase: 01-content-publish-drift-guard-extension (plan 01)
    provides: "Pure, DB-free drift comparators (findVersionedLosses, findUnitLosses, findPresenceLosses) in drift-guard.logic.ts"
provides:
  - "publish-content.ts step 4·0 hard-blocks a regressive publish across all five seed-carried content kinds (lessons, units, scenarios, playlists, speak stages), not lessons only"
  - "Blocked-publish output grouped per kind, naming only recovery scripts that actually exist"
  - "In-source D-05 rationale for why exam papers/tasks are deliberately excluded from the guard"
affects: [01-03-drift-report, 01-04-live-postgres-verification]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Guard body collects DriftLoss[] via the pure comparators, then the CLI groups by `kind` for output — separates loss detection (pure, tested) from loss presentation (CLI-only)"

key-files:
  created: []
  modified:
    - ealch-admin/scripts/publish-content.ts

key-decisions:
  - "No new recovery scripts built for scenario/playlist/speak-stage kinds. The block message names the two that exist (restore-lesson-bodies-from-seed.ts, restore-unit-bodies-from-seed.ts) and points the other three at the Ops Console / originating authoring script, per the plan's explicit anti-sprawl decision."

requirements-completed: [PUBLISH-01]

# Metrics
duration: 14min
completed: 2026-09-19
---

# Phase 1 Plan 02: Wire Drift Guard into Publish Summary

**Replaced publish-content.ts's inline lesson-only step 4·0 regression guard with a five-kind loop (lessons, units, scenarios, playlists, speak stages) driven by plan 01's pure comparators, and rewrote the block-and-exit output to group losses by kind and point only at recovery paths that actually exist.**

## Performance

- **Duration:** ~14 min
- **Started:** 2026-09-19T18:33:21Z (approx, immediately after plan 01)
- **Completed:** 2026-09-19T18:47:05Z
- **Tasks:** 2 completed
- **Files modified:** 1

## Accomplishments
- Step 4·0 now calls `findVersionedLosses`/`findPresenceLosses` for lessons, scenarios, playlists and speak stages, and `findUnitLosses`/`findPresenceLosses` for units — closing the gap where only lessons were watched.
- Units are compared against `prunedUnits` (the post-step-2 array that actually ships), with `liveLessons` as the still-published set, so the publisher's own legitimate lesson-pruning never false-positives as a loss.
- The `committed` seed type was widened from `{ lessons?: Lesson[] }` to also carry `units`, `scenarios`, `playlists`, `speakPath` — read through the same unmodified `git show HEAD:...` call, with the same graceful SKIPPED fallback for a fresh clone / no git history.
- Blocked-publish output is now grouped per content kind (`── lesson ──`, `── unit ──`, etc.), each loss line uses the comparator's own message, and the recovery instructions only name `restore-lesson-bodies-from-seed.ts` and `restore-unit-bodies-from-seed.ts` — scenario/playlist/speak-stage losses are told to re-apply through the Ops Console or the originating authoring script rather than pointing at a script that does not exist.
- The success log line now reports counts for all five kinds, gated on `committed` being non-null so a fresh-clone SKIPPED warning is never followed by a stray success line.
- D-05 (exam papers/tasks deliberately excluded from the guard) is recorded as an in-source comment immediately after the guard's closing brace, citing the one-directional `apply-paper.ts → Postgres → promote-paper.ts` flow as the reason the destructive-overwrite hazard cannot occur for exam content.
- Full `ealch-admin` test suite (598 tests) and `pnpm typecheck` both stayed green throughout. `node --import tsx -e "import('./scripts/publish-content.ts')"` confirmed the `invokedDirectly` guard still holds — importing the module publishes nothing.
- `git diff` across both task commits is confined to the import block (one new line), the step 4·0 header comment, and the step 4·0 body — no edits below the D-05 comment / before step 4a.

## Task Commits

Each task was committed atomically:

1. **Task 1: Generalize step 4·0 to all five seed-carried kinds** - `05eb5ad` (feat)
2. **Task 2: Rewrite the block output — per-kind grouping, real recovery pointers, and the D-05 exemption note** - `ca92376` (feat)

_Note: both tasks are typed `type="auto"` (no `tdd="true"`), so each is a single commit per the plan's own task structure. The plan's Task 1 `<action>` literally ends the replaced block at the `losses.push(...)` call (no exit/success logic yet); Task 1's own verification (`pnpm typecheck` + the drift-guard test) passes in that intermediate state because `ealch-admin`'s tsconfig does not set `noUnusedLocals`. Task 2 then adds the `if (losses.length)` exit block, the success log, and the D-05 comment on top._

## Files Created/Modified
- `ealch-admin/scripts/publish-content.ts` - Step 4·0 generalized from a lesson-only inline check to a five-kind loss collection via `drift-guard.logic.ts`'s comparators, with per-kind grouped block output and an in-source D-05 rationale comment

## Decisions Made
- No new recovery scripts for scenario/playlist/speak-stage kinds (matches the plan's explicit anti-sprawl rationale — PUBLISH-01/02 and the roadmap's four success criteria do not require one, and per-kind copy-paste scripts is exactly the pattern `apply-paper.ts`'s own header records as a past bug). The block message is honest about this: it says "no restore script exists for this kind yet" rather than inventing one.

## Deviations from Plan

None — plan executed exactly as written. One observation, not a deviation: the plan's Task 2 acceptance criterion `grep -c "restore-lesson-bodies-from-seed.ts" ... returns 2` undercounts by one against the actual file, because the pre-existing 2026-07-31 incident-narrative comment (line 571, untouched by this plan, present since before plan 01) already mentions the script name once. Verified via `git show HEAD:ealch-admin/scripts/publish-content.ts | grep -n restore-lesson-bodies-from-seed.ts` against the pre-plan-02 commit, which also returns 3 total (1 narrative + 2 in the old single-kind block) — so the total count is unchanged by this plan's edit, and the criterion's "2" was describing only the two lines this plan adds, not a total-file grep. No code change was needed; flagging for the next planner who greps this file.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- `publish-content.ts` step 4·0 now covers every kind `seed.json` carries; plan 03 (drift report) and plan 04 (live Postgres verification) can build on this without further wiring.
- Plan 04's live-Postgres proof of both directions (a healthy Postgres-ahead dry-run is NOT blocked, and a real regression IS blocked) still needs to run against a real database — this plan's verification was necessarily limited to `pnpm typecheck`/`pnpm test`/the direct-import guard, since `publish-content.ts` refuses to start without `DATABASE_URL`.
- No blockers.

---
*Phase: 01-content-publish-drift-guard-extension*
*Completed: 2026-09-19*

## Self-Check: PASSED

- FOUND: ealch-admin/scripts/publish-content.ts
- FOUND: .planning/phases/01-content-publish-drift-guard-extension/01-02-SUMMARY.md
- FOUND: commit 05eb5ad (Task 1)
- FOUND: commit ca92376 (Task 2)
