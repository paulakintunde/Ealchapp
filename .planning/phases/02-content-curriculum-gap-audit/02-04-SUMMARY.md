---
phase: 02-content-curriculum-gap-audit
plan: 04
subsystem: content-audit
tags: [postgres, supabase, content-audit, node-test, grep-diff]

# Dependency graph
requires:
  - phase: 02-content-curriculum-gap-audit (plan 01)
    provides: confirmed-healthy Supabase project, GAPS.md skeleton, severity taxonomy, finding-id scheme
provides:
  - Fresh re-verification of the numbers-scoring and playlist-voice-deck fixes (both STILL FIXED)
  - Fresh DB+seed count of build-note contamination, with a new finding (DEF-01)
  - Confirmed seed.json ships all 75 declared curriculum units, no exam content (by design)
affects: [02-05, 02-06]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Reused the scratchpad pg query runner (run-query.js) and DATABASE_URL from ealch-admin/.env for SELECT-only evidence gathering, consistent with 02-01/02-03's pattern"
    - "grep -qiF crashes (SIGABRT/core dump) on this Windows/MSYS grep build when the searched file contains certain accented UTF-8 content; grep -qi or grep -qF alone are stable substitutes"

key-files:
  created: []
  modified:
    - .planning/phases/02-content-curriculum-gap-audit/02-EVIDENCE-defects.md

key-decisions:
  - "Worktree branch was created from a stale base commit lacking .planning/ entirely and lacking the frNumbers.logic.ts/speakDeck.logic.ts source files the plan requires reading and testing. Merged feat/sons-course (clean, no conflicts) at the start of execution to bring in the required files before starting Task 1."
  - "fr.a2.au-restaurant.187's note classified as real contamination (DEF-01, info severity) despite also containing legitimate usage guidance, because its opening clause references an internal authoring/script-structure concept ('stage 6') a learner cannot decode."
  - "fr.a1.ecole.056's note classified as a false positive: it only matched the regex because it defines a vocabulary word ('brouillon' = 'a first draft'), not because it is leftover build commentary."
  - "find-french-notes.ts (Step D, optional per plan) was not run: it is untracked in this repository on every branch checked (feat/sons-course, build/ealch-v2-expo, this worktree's merged HEAD), so it is not available in this execution environment. Its header/frenchScore were read per read_first; Steps A-C fully satisfy the task's evidence requirements without it."

patterns-established:
  - "Evidence-file sectioning (## N. <topic>, ### N.M <sub-check>, ## Findings from section N) used consistently across three independent D-08 sub-checks in one file, each citing raw command output before its verdict/finding."

requirements-completed: [CONTENT-01]

# Metrics
duration: ~35min (active work, spanning one session-limit interruption and resume)
completed: 2026-09-20
---

# Phase 2 Plan 4: Known Quality Defects Re-Measured (D-08) Summary

**Re-verified two already-shipped fixes stayed fixed via pinned tests (frNumbers 9/9, speakDeck 21/21) plus source+live-data checks, found one surviving build-note contamination row (DEF-01, down from 81) via fresh DB+seed counts, and confirmed all 75 declared curriculum units ship in seed.json with zero exam content by design.**

## Performance

- **Duration:** ~35 min active execution (spanning one session rate-limit interruption between Task 3's evidence writing and its verification gate; resumed from the exact uncommitted-edit point per coordinator instruction)
- **Started:** 2026-09-19T23:34:10Z (approx, from evidence file's `read_at`)
- **Completed:** 2026-09-20T03:19:46Z (approx)
- **Tasks:** 3/3 completed
- **Files modified:** 1 (`02-EVIDENCE-defects.md`, built incrementally across 3 commits)

## Accomplishments
- Re-ran both pinned regression tests from scratch (not cited from memory): `frNumbers.logic.test.ts` EXIT=0 (9/9 pass), `speakDeck.logic.test.ts` EXIT=0 (21/21 pass); read the fold/deck-derivation source and confirmed both `speak.tsx`/`player.tsx` call sites thread the playlist id through rather than falling back to a shared default
- Ran a live-data cross-check: 20 published playlists, 20 distinct `tracks_fingerprint` values, zero content collisions
- Re-counted flashcard build-note contamination fresh against both `content_items` (Postgres) and `seed.json`: 2 raw regex hits, hand-read and classified individually (1 false positive, 1 real) — corrects the 2026-09-10 memory's "fixed to 0" claim to "1 real instance survives," logged as new finding `DEF-01`
- Diffed the 75 curriculum-unit ids declared in `author-full-curriculum-spine.ts` against the 75 present in the shipped `seed.json` cut: both `comm -23`/`comm -13` directions empty — exact match, nothing silently missing a fresh install
- Confirmed `paper.`/`exam.` content is intentionally absent from `seed.json` (both counts 0) — design, not a gap
- No write of any kind was issued against the database; `seed.json` is byte-unchanged (confirmed via `git diff --stat` against HEAD)

## Task Commits

Each task was committed atomically:

1. **Task 1: Re-verify the numbers-scoring and playlist-voice-deck fixes stayed fixed** - `c6afe57` (docs)
2. **Task 2: Fresh count of build-note contamination in shipped content (D-08)** - `48bcc6c` (docs)
3. **Task 3: What the shipped seed.json cut actually contains for the 75 units** - `7a881c6` (docs)

**Plan metadata:** (this commit, made after this SUMMARY)

## Files Created/Modified
- `.planning/phases/02-content-curriculum-gap-audit/02-EVIDENCE-defects.md` - Evidence file with three sections: (1) numbers-scoring/playlist-voice-deck fixes re-verified STILL FIXED, (2) build-note contamination fresh count with DEF-01 finding, (3) seed-vs-DB unit/exam-content shipping check, no findings

## Decisions Made
- **Worktree base repair (pre-Task-1):** The assigned worktree branch (`worktree-agent-a6c24ad77ca8c38a5`) was created from a commit that predates all of Phase 2's `.planning/` history and predates the `frNumbers.logic.ts`/`speakDeck.logic.ts` source files Task 1 requires. Merged `feat/sons-course` into the worktree branch (clean merge, zero conflicts, verified via `git status --short` before and after) to bring in the required files before any task work began. This is a Rule 3 (blocking) auto-fix: without it, Task 1 could not run at all.
- **DEF-01 classification call:** `fr.a2.au-restaurant.187`'s note was classified as real contamination rather than a borderline false positive, because its "OFF SCRIPT ... stage 6" opening references internal authoring/script-structure jargon a learner cannot decode — same class of defect as the original 81-row finding, just one surviving instance. Full reasoning recorded in the evidence file's 2.1 table per D-03's evidence-discipline requirement.
- **find-french-notes.ts not run (Step D, explicitly optional):** confirmed untracked on every branch checked; read as required by `read_first` but not executed, since it is unavailable in this environment and Steps A-C already gave complete evidence.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Worktree branch missing .planning/ and prerequisite source files**
- **Found during:** Pre-Task-1 setup (immediately after the mandatory worktree-branch check)
- **Issue:** The worktree's HEAD (`31d59b4`) was a descendant of `build/ealch-v2-expo` but not of `feat/sons-course`'s current tip — it predated the entire Phase 2 `.planning/` history (no `.planning/` directory existed at all) and predated `ealch-v2/src/utils/frNumbers.logic.ts` / `speakDeck.logic.ts`, both required by Task 1's `read_first` and test-run steps.
- **Fix:** Ran `git merge feat/sons-course` from the worktree branch. Merge completed cleanly with zero conflicts (verified: working tree was clean before, `git status --short` after the merge showed no unmerged paths). This brought in `.planning/` in full plus the two required source files and their pinned tests.
- **Files modified:** none beyond the merge commit itself (`9679e67`) — a merge of pre-existing, already-reviewed commits, not new work.
- **Verification:** `git log --oneline -3` after the merge showed the expected `.planning/phases/02-content-curriculum-gap-audit/02-04-PLAN.md` etc. present; `ls ealch-v2/src/utils/` confirmed both required `.logic.ts` files existed post-merge.
- **Committed in:** `9679e67` (pre-Task-1 setup commit, separate from the three task commits)

**2. [Rule 3 - Blocking] `grep -qiF` crashes (SIGABRT) on this Windows/MSYS grep build**
- **Found during:** Task 3 (verification gate for the `content:parity` / "secondary" check)
- **Issue:** The plan's literal automated-verification one-liner uses `grep -qiF "secondary" "$F"`; on this environment's grep binary, the combined `-i` + `-F` flags against this particular UTF-8 file crash with `Aborted (core dumped)` rather than returning a normal match/no-match exit code, and left a stray `grep.exe.stackdump` file in the working tree.
- **Fix:** Verified the same check using `grep -qi` (no `-F`) instead, which returned the correct result (found, exit 0) without crashing. Confirmed via isolated testing that `-i` alone and `-F` alone both work individually; only the combination crashes. Deleted the stray `grep.exe.stackdump` artifact before staging/committing.
- **Files modified:** none (verification-tooling workaround only; no evidence-file content changed because of this)
- **Verification:** `grep -ic "secondary" <file>` returned `3` (word present); the substitute check script returned `OK`.
- **Committed in:** n/a (verification-only; the stackdump was deleted, never staged)

---

**Total deviations:** 2 auto-fixed (both Rule 3 - blocking, both environment/tooling issues rather than content issues)
**Impact on plan:** No scope creep. Both fixes were necessary preconditions for running the plan's own prescribed checks; neither altered what evidence was gathered or how findings were classified.

## Issues Encountered
- One session rate-limit interruption occurred between finishing Task 3's evidence write and running its verification gate. Resumed per the coordinator's explicit instruction: worktree and prior commits (`c6afe57`, `48bcc6c`) were untouched, the in-progress edit to `02-EVIDENCE-defects.md` was still present uncommitted, and execution continued from exactly that point (fixed the `content:parity`/"secondary" wording, then ran and passed Task 3's gate).

## User Setup Required

None - no external service configuration required. All database access used the existing `ealch-admin/.env` `DATABASE_URL` via the pre-authorized scratchpad fallback pattern (SELECT-only queries, never committed to the repo).

## Next Phase Readiness
- Plan 05 has one new finding to map into `GAPS.md`: `DEF-01` (build-note contamination, info severity, single-row content fix, live in both Postgres and `seed.json`) — needs a D-09 cross-reference against BUG-01/02/03/QA-01/02, none of which currently name this defect class.
- Sections 1 and 3 of `02-EVIDENCE-defects.md` closed clean ("No findings" statements present, citing the exact evidence per D-03) — Plan 05 can cite these directly without re-measuring.
- No write of any kind was issued against the database in this plan; `seed.json` is confirmed byte-unchanged (`git diff --stat HEAD -- ealch-v2/src/content/seed.json` produced no output).
- Flag for whichever plan/process next touches this worktree: the base-branch mismatch (Deviation 1 above) may recur for sibling wave-2 worktrees (02-02, 02-03) if they were cut from the same stale base — worth a quick `git log --oneline -3` sanity check in each.

## Self-Check: PASSED

- FOUND: `.planning/phases/02-content-curriculum-gap-audit/02-EVIDENCE-defects.md`
- FOUND: commit `c6afe57` in git log
- FOUND: commit `48bcc6c` in git log
- FOUND: commit `7a881c6` in git log

---
*Phase: 02-content-curriculum-gap-audit*
*Completed: 2026-09-20*
