---
phase: 01-content-publish-drift-guard-extension
plan: 03
subsystem: testing
tags: [publish-pipeline, drift-guard, content-integrity, typescript, reporting]

# Dependency graph
requires:
  - phase: 01-content-publish-drift-guard-extension (plan 01)
    provides: "Pure, DB-free drift comparators in drift-guard.logic.ts"
  - phase: 01-content-publish-drift-guard-extension (plan 02)
    provides: "publish-content.ts step 4·0 generalized to all five seed-carried content kinds"
provides:
  - "formatDiffReport — a pure function in drift-guard.logic.ts that renders step 7's diff as one markdown report string"
  - "publish-content.ts step 7 prints and writes ealch-admin/PUBLISH-REPORT.md on every publish and every dry-run, including the first-snapshot and identical/no-op paths"
  - ".gitignore negation keeping PUBLISH-REPORT.md tracked despite the blanket *.md rule, so D-03's 'git history is the audit trail' is actually true"
affects: [01-04-live-postgres-verification]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Report formatting kept pure (no process.env/node:fs/console/Date.now) and unit-tested from a passed-in generatedAt, mirroring drift-guard.logic.ts's existing pure-comparator pattern — the CLI (publish-content.ts) owns all I/O, the logic module owns all string-building"

key-files:
  created:
    - ealch-admin/PUBLISH-REPORT.md
  modified:
    - ealch-admin/scripts/drift-guard.logic.ts
    - ealch-admin/scripts/drift-guard.logic.test.ts
    - ealch-admin/scripts/publish-content.ts
    - .gitignore

key-decisions:
  - "Delta cells in the report's markdown table are the bare signed convention (+3/-2/+0) reused verbatim from publish-content.ts's old console formula, not parenthesized (count (delta)) — the plan's own <action> code block is the load-bearing spec, and the <behavior> section's '(+3)' was descriptive English punctuation, not a literal format requirement."

requirements-completed: [PUBLISH-02]

# Metrics
duration: ~12min active (RED/GREEN for Task 1, plus Tasks 2-3; a session rate-limit pause fell between the GREEN commit and Task 2's start and is excluded)
completed: 2026-09-19
---

# Phase 1 Plan 03: Publish Diff Report Summary

**One markdown report (`formatDiffReport`) built once per publish run, covering all ten corpus kinds including the previously-uncounted `speakPath`, printed to the terminal and written to `ealch-admin/PUBLISH-REPORT.md` on the first-snapshot, no-op, and normal paths alike, and kept git-tracked via a `.gitignore` negation.**

## Performance

- **Duration:** ~12 min active work (test RED ~1 min, GREEN implementation ~1 min, wiring + gitignore ~10 min after a session interruption between Task 1 and Task 2)
- **Started:** 2026-09-19T11:54:53-07:00
- **Completed:** 2026-09-19T13:22:11-07:00 (wall clock spans a rate-limit pause; active work was continuous within each half)
- **Tasks:** 3 completed
- **Files modified:** 4 (1 created)

## Accomplishments

- `formatDiffReport` and `REPORT_KINDS` added to `drift-guard.logic.ts` — a pure function that renders the first-snapshot, identical/no-op, and normal-delta status lines, an optional `compareNote` block, a ten-row counts table (domains, themes, units, lessons, items, scenarios, playlists, **speakPath**, examTasks, examPapers), and a snapshot-byte-size table with a signed delta, all from plain arguments with no `process.env`/`node:fs`/`console.*`/`Date.now()`.
- 9 new tests appended to `drift-guard.logic.test.ts` (19 total in the file, up from 10), covering all eight named behaviors plus the two explicitly-named tests the plan required (`it reports every kind, including the speakPath the old counts object forgot` and `it still reports when nothing changed`). Full TDD RED→GREEN cycle: `35c863b` (test, 9 failing) → `241b2d7` (feat, all 19 passing).
- `publish-content.ts` step 7 rewired: both `counts` and `seedCounts` objects gained `speakPath` (previously absent, so speak stages were invisible to the console diff and to the `content_snapshots.counts`/`.seed_counts` rows persisted at step 10); `previousSnapshotBytes` is captured from the downloaded Storage body; the old console-only diff block was replaced by a single `formatDiffReport` call whose result is both `console.log`'d and `writeFileSync`'d to `REPORT_PATH` (`ealch-admin/PUBLISH-REPORT.md`), placed above the `noop`/`DRY_RUN` early returns so all three outcomes reach the write.
- `.gitignore` gained `!/ealch-admin/PUBLISH-REPORT.md`, mirroring the existing `!/.planning/**/*.md` negation, so the blanket `*.md` rule at line 8 no longer silently swallows the report on creation. `ealch-admin/PUBLISH-REPORT.md` was seeded with a placeholder and confirmed untracked-but-not-ignored via `git status --porcelain` showing `??`.
- `pnpm typecheck` and the full `ealch-admin` test suite (607 tests) stayed green throughout.

## Task Commits

Each task was committed atomically (Task 1 is TDD, so it has two commits):

1. **Task 1 RED: add failing tests for formatDiffReport** - `35c863b` (test)
2. **Task 1 GREEN: implement formatDiffReport** - `241b2d7` (feat)
3. **Task 2: wire the report into step 7** - `06c78e4` (feat)
4. **Task 3: keep the report file tracked by git** - `4494a30` (feat)

## TDD Gate Compliance

Task 1 was `tdd="true"`. Gate sequence verified in git log: `test(01-03): add failing tests...` (`35c863b`) precedes `feat(01-03): implement formatDiffReport...` (`241b2d7`). RED confirmed 9 of 19 tests failing with `formatDiffReport is not a function`/`REPORT_KINDS` undefined before any implementation existed; GREEN confirmed all 19 passing after. No REFACTOR commit — the implementation needed no cleanup pass.

## Files Created/Modified

- `ealch-admin/scripts/drift-guard.logic.ts` - Added `REPORT_KINDS` (ten corpus kinds in print order) and `formatDiffReport` (pure markdown report builder)
- `ealch-admin/scripts/drift-guard.logic.test.ts` - Appended 9 tests covering all `formatDiffReport` behaviors
- `ealch-admin/scripts/publish-content.ts` - Step 7 rewired to build/print/write the report; both counts objects gained `speakPath`; `previousSnapshotBytes` captured; `REPORT_PATH` constant added
- `.gitignore` - Negation rule for `ealch-admin/PUBLISH-REPORT.md`
- `ealch-admin/PUBLISH-REPORT.md` - Created (placeholder, first real publish/dry-run overwrites it)

## Decisions Made

- Report delta cells use the bare signed convention (`+3`, `-2`, `+0`) as a dedicated table column, not the old console format's combined `count (delta)` string — this matches the plan's `<action>` code block exactly (`| domains | {p} | {n} | {+d} |`) and the explicit instruction to reuse `${delta >= 0 ? '+' : ''}${delta}` verbatim. The `<behavior>` section's "(+3)" phrasing was read as descriptive punctuation around an example value, not a literal parenthesized-output requirement, since the load-bearing `<action>` spec and the reused-formula instruction both show no parens.

## Deviations from Plan

None — plan executed exactly as written. One observation, not a deviation: the plan's own verification step 3 (`git check-ignore -v ealch-admin/PUBLISH-REPORT.md` — exits 1) does not hold literally on this repo's git version (2.43.0). With `-v`, git prints the matched negation pattern and exits **0** (a documented git quirk where verbose mode reports negation matches as a "match" for exit-status purposes); without `-v` (i.e. `-q`), it correctly exits 1 with no output. The plan's own `<verify><automated>` block for Task 3 uses `-q`, not `-v`, and that authoritative check passes exactly as specified (`! git check-ignore -q ... && git status --porcelain ... | grep -q "^??"` → PASSED). No code change was needed; flagging so the next planner who writes a `-v`-based acceptance criterion for this repo knows the exit code differs from `-q`.

## Issues Encountered

- `ealch-admin/node_modules` was absent in this worktree (git worktrees do not carry gitignored directories), which meant `node --import tsx --test ...` failed with `ERR_MODULE_NOT_FOUND` before any code changes were even a factor. Resolved by running `pnpm install --frozen-lockfile` in `ealch-admin/` (28.5s, 527 packages, no lockfile changes) before the RED test run. Not a plan deviation — a worktree environment prerequisite, not a code issue.
- A session rate limit paused execution between Task 1's GREEN commit and the start of Task 2's edits. Work resumed from the exact uncommitted diff in progress; no rework was needed since the in-flight edit to `publish-content.ts` was already correct and matched the plan's `<action>` block verbatim.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- `publish-content.ts` now builds, prints, and persists one report per run across all three diff outcomes (first snapshot, identical/no-op, normal), with all ten corpus kinds counted including `speakPath`.
- Plan 04's live-Postgres verification can now additionally confirm (against a real `DATABASE_URL`) that a real `--dry-run` produces `ealch-admin/PUBLISH-REPORT.md` on disk with the expected content — this plan's own verification was necessarily limited to `pnpm typecheck`/`pnpm test`/unit tests on `formatDiffReport`, since `publish-content.ts` refuses to start without a live database connection.
- No blockers.

---
*Phase: 01-content-publish-drift-guard-extension*
*Completed: 2026-09-19*

## Self-Check: PASSED

- FOUND: ealch-admin/scripts/drift-guard.logic.ts
- FOUND: ealch-admin/scripts/drift-guard.logic.test.ts
- FOUND: ealch-admin/scripts/publish-content.ts
- FOUND: .gitignore
- FOUND: ealch-admin/PUBLISH-REPORT.md
- FOUND: .planning/phases/01-content-publish-drift-guard-extension/01-03-SUMMARY.md
- FOUND: commit 35c863b (Task 1 RED)
- FOUND: commit 241b2d7 (Task 1 GREEN)
- FOUND: commit 06c78e4 (Task 2)
- FOUND: commit 4494a30 (Task 3)
