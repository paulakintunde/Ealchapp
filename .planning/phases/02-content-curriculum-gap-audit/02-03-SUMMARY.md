---
phase: 02-content-curriculum-gap-audit
plan: 03
subsystem: database
tags: [postgres, supabase, exam-content, drizzle, content-audit]

# Dependency graph
requires:
  - phase: 02-content-curriculum-gap-audit
    provides: "Plan 01's confirmed-healthy Supabase project, GAPS.md skeleton, severity taxonomy, and finding-id scheme this plan writes local ids against"
provides:
  - "02-EVIDENCE-exams.md: per-paper structural conformance evidence for all 15 published exam papers (5 TEF Canada, 5 TCF Canada, 5 DELF B2) against their format blueprints"
  - "Four EXAM-nn findings (EXAM-01..04) ready for Plan 05 to map into GAPS.md's Finding Index"
  - "A corrected, measured scope for the DELF blanc-02..05 unlistened-audio gap (~36.8 min, not ~2 hours)"
affects: [02-05, 02-06]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Supabase MCP unavailable -> fallback is a throwaway node+pg script in the session scratchpad dir (never ealch-admin/scripts/), reading DATABASE_URL directly from the main checkout's ealch-admin/.env (this worktree has no .env of its own since it is gitignored/untracked) via a hardcoded absolute path, issuing SELECT-only queries"
    - "Worktree missing recent commits: this worktree branched from a stale point that predated feat/sons-course's Phase 1/Phase 2 planning docs; merged feat/sons-course into the worktree branch (clean, no conflicts) before any plan files existed to read"
    - "check-speech-rate.ts could not be run (no ealch-admin node_modules in this worktree); secondary speech-rate input was produced instead via direct parts[].text/durationS spot-check queries, hand-counting words"

key-files:
  created:
    - .planning/phases/02-content-curriculum-gap-audit/02-EVIDENCE-exams.md
  modified: []

key-decisions:
  - "Task 1 orphan check: the previously-documented known orphan exam.delf_b2.blanc-01.pe_essay.001 no longer exists in the database at all (not merely archived) -- classified info/already-explained per plan instruction, with a note that check-orphans.ts's header comment is now stale documentation"
  - "Task 2 speech-rate secondary input: since ealch-admin's node_modules are not installed in this worktree, check-speech-rate.ts could not be invoked; substituted a manual spot-check of 5 CO documents (parts[].text word count vs parts[].durationS), which surfaced a real finding (EXAM-02) rather than silently skipping the step"
  - "Task 1/2 acceptance-gate regex bug: the plan's own literal verify scripts use grep -oE \"paper\\.[a-z_]+\\...\" which structurally cannot match delf_b2 paper ids (the character class excludes digits, and 'b2' contains one) -- confirmed with a minimal repro, then re-ran with a corrected [a-z0-9_]+ class to confirm all 15 papers really are named individually (Task 1: 15/15, Task 2: 60/60 diff rows) before treating the acceptance criteria as met"
  - "Task 3: corrected CONTEXT.md D-05's 'roughly two hours' audio-volume estimate to a measured ~36.8 minutes (564+554+544+546 seconds) across the 4 named DELF papers, based on real per-clip durationS sums"
  - "Task 3: classified TEF papers 2-5 and TCF papers 2-5 as 'unknowable-from-data' rather than 'assumed clear' or 'verified' -- reviewed_by/reviewed_at are NULL on all 220 exam tasks in the database (every format), and audio_assets is empty and keyed to content_items, not content_exam_tasks, so no schema location could express an audio-listening attestation for any paper of any format even if one had occurred"

patterns-established:
  - "02-EVIDENCE-exams.md's local EXAM-nn ids map to GAP-nn via Plan 05's Finding Index table, per the scheme Plan 01 locked in GAPS.md"

requirements-completed: []

# Metrics
duration: ~30min (active work, spanning a worktree base-branch repair before any plan files were readable)
completed: 2026-09-20
---

# Phase 2 Plan 3: Exam Paper Structural Conformance Audit Summary

**Re-verified all 15 published exam papers (5 TEF Canada, 5 TCF Canada, 5 DELF B2) against their format blueprints with zero structural or count defects found, but surfaced two new findings: TEF blanc-01's audio runs measurably hotter than STANDARD-common's speech-rate envelope, and no exam paper of any format has ever had an audio-listening pass recorded anywhere in the schema.**

## Performance

- **Duration:** ~30 min active execution (includes an unplanned worktree-repair step: the assigned worktree had branched from a stale point predating this phase's own planning docs, requiring a clean merge of `feat/sons-course` before `.planning/phases/02-content-curriculum-gap-audit/02-03-PLAN.md` even existed to read)
- **Started:** ~2026-09-20T03:20Z (approx, from worktree branch check)
- **Completed:** 2026-09-20T03:50:52Z
- **Tasks:** 3/3 completed
- **Files modified:** 1 created (`02-EVIDENCE-exams.md`, built incrementally across the three tasks)

## Accomplishments
- Enumerated all 15 published exam papers with their four sections in CO/CE/PE/PO order; confirmed zero deviation on section count, skill order, taskId resolution, and orphan status (zero orphans exist in the database today; the one previously-documented DELF draft orphan no longer exists in the table at all)
- Diffed all 60 (paper, skill) pairs against their format's exact blueprint numbers (TEF 40/40, TCF 39/39 with 3/6/10/10/7/3 band distribution, DELF 20/20 weighted 9/9/7): every single row has delta = 0
- Verified every format-specific structural rule with zero exceptions: TEF `playCount`/Block-C-3-options/Section-A-imageAlt, TCF band-position strictness and PO tâche timing, DELF `band`/`points`/`playCount` reconciliation against the current-format (sample 3) calibration
- Logged the DELF blanc-02..05 unlistened-audio gap as a named finding per D-05's unconditional instruction, and corrected its scope estimate from CONTEXT.md's "roughly two hours" to a measured ~36.8 minutes
- Answered RESEARCH.md's Open Question 1 directly from the schema: zero of 220 exam tasks (every format) carry any value in `reviewed_by`/`reviewed_at`, and `audio_assets` is both empty and structurally incapable of recording exam-audio review — so TEF/TCF papers 2-5 are classified `unknowable-from-data`, not assumed clear
- Surfaced one new finding not anticipated by the plan's own targets: a hand-verified speech-rate spot-check found TEF `blanc-01`'s Sections D/E/F running measurably faster (169-192 wpm) than `STANDARD-common.md`'s stated band ceilings (160-175 wpm)

## Task Commits

Each task was committed atomically, incrementally building the shared evidence file:

1. **Task 1: Per-paper section shape and task resolution** - `01eef0c` (docs)
2. **Task 2: Per-format item/task count conformance against the blueprints** - `7e9c34f` (docs)
3. **Task 3: Audio-verification gap — DELF blanc-02..05 and the E8 attestation question (D-05)** - `058efd1` (docs)

**Plan metadata:** (this commit, made after this SUMMARY)

## Files Created/Modified
- `.planning/phases/02-content-curriculum-gap-audit/02-EVIDENCE-exams.md` - Full structural-conformance evidence for all 15 published exam papers: section shape (§1), per-format item/task count diff and format-specific rule checks (§2), and audio-verification gap analysis (§3), with 25 fenced SQL blocks and 4 named `EXAM-nn` findings

## Decisions Made
- **Worktree base-branch mismatch (pre-Task-1):** This worktree's branch had been created from a stale point (`31d59b4`, a PR-merge commit) that predated `feat/sons-course`'s Phase 1 and Phase 2 planning history by 70 commits — `.planning/phases/02-content-curriculum-gap-audit/02-03-PLAN.md` did not exist on disk at session start. Merged `feat/sons-course` into the worktree branch (`git merge feat/sons-course --no-edit`), which completed cleanly with zero conflicts (the worktree's own 2 unique commits were themselves old merge commits of an earlier `feat/sons-course` state into another branch, fully superseded). Verified the merge did not alter `HEAD`'s protected-branch status before any commit.
- **Missing `.env` in worktree:** `ealch-admin/.env` is gitignored and therefore absent from this fresh worktree checkout. Read `DATABASE_URL` directly from the main checkout's `.env` via a hardcoded absolute path in a throwaway scratchpad script, rather than copying the file into the worktree (avoids ever writing secrets into a git-tracked location).
- **`check-speech-rate.ts` could not be run:** this worktree has no `node_modules` installed for `ealch-admin`, and installing the full admin dependency tree to run one optional secondary-input script was judged disproportionate for a read-only audit plan. Substituted a manual, hand-verified spot-check (raw `parts[].text` word counts against `parts[].durationS`) on 5 documents across TEF/TCF/DELF, which is arguably more rigorous than trusting the heuristic script's own unverified output (the exact trap RESEARCH.md Pitfall 6 warns against) — and this manual check is what surfaced EXAM-02.
- **Acceptance-gate regex bug, verified and worked around, not silently ignored:** the plan's own literal Task 1/Task 2 automated verify scripts use `grep -oE "paper\.[a-z_]+\...`, whose character class excludes digits and therefore can never match a `delf_b2` paper id (`b2` contains a digit). Reproduced this with a minimal test string before concluding it was a plan-tooling bug rather than a shortfall in the evidence file, then re-ran both counts with a corrected `[a-z0-9_]+` class to confirm the underlying acceptance criteria (>=15 distinct paper ids named individually; >=60 diff-table rows) are genuinely met (15/15 and 60/60 respectively).
- **Evidence file built and committed in three passes matching the plan's task structure**, even though all research/queries were run together for efficiency, so per-task git history stays meaningful for later review.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Worktree branched from a stale base predating this phase's planning docs**
- **Found during:** Pre-Task-1 setup (worktree branch check / file reads)
- **Issue:** `.planning/phases/02-content-curriculum-gap-audit/02-03-PLAN.md` and all other required context files (`GAPS.md`, `02-01-SUMMARY.md`, `PROJECT.md`, `STATE.md`, `config.json`) did not exist in this worktree — the assigned branch had been created from `31d59b4`, a commit 70 commits behind `feat/sons-course`'s current tip.
- **Fix:** Ran `git merge feat/sons-course --no-edit` from the worktree root. Completed with zero conflicts and zero file-content ambiguity (verified via `git status --short` showing a clean tree immediately after).
- **Files modified:** none directly (a merge commit, `29d8db6`, bringing in ~450 files unrelated to this plan's own changes)
- **Verification:** `git log --oneline -5` post-merge showed the expected Phase 1/Phase 2 commit history; all required plan/context files then read successfully.
- **Committed in:** `29d8db6` (merge commit, prior to any of this plan's own task commits)

**2. [Rule 3 - Blocking] Supabase MCP tool and `ealch-admin` DATABASE_URL both unavailable in this worktree**
- **Found during:** Task 1 (before running the first Step A query)
- **Issue:** No `mcp__claude_ai_Supabase__*` tools present in this session's toolset (same gap Plan 01 recorded); `ealch-admin/.env` does not exist in this worktree (gitignored, untracked, so absent from a fresh worktree checkout even though it exists in the main repo checkout).
- **Fix:** Used the plan's own pre-authorized fallback: a throwaway Node/`pg` script in the session scratchpad directory, reading `DATABASE_URL` directly from the main checkout's `ealch-admin/.env` via a hardcoded absolute path (never copied into the worktree, never committed).
- **Files modified:** none (scratchpad-only)
- **Verification:** `select 1 as ok` smoke query succeeded; all subsequent SELECT-only queries returned expected shapes matching the plan's documented interfaces.
- **Committed in:** n/a (no file changes; queries run entirely from scratchpad)

**3. [Rule 3 - Blocking] `check-speech-rate.ts` could not be invoked (no `ealch-admin` `node_modules` in this worktree)**
- **Found during:** Task 2, Step E
- **Issue:** The plan's optional Step E instructs running `pnpm tsx scripts/exam/check-speech-rate.ts`, but this worktree has no installed dependencies for `ealch-admin` and installing them was judged out of scope for a read-only audit plan.
- **Fix:** Per the plan's own instruction for exactly this situation ("spot-verify 2-3 of the flagged rows... paste that raw row as the evidence" / "still spot-verify 2-3 rows by hand"), ran direct queries against `parts[].text` and `parts[].durationS` for 5 documents (3 TEF blocks, 1 TCF C2 document, 1 DELF exercise) and computed words-per-minute by hand.
- **Files modified:** `.planning/phases/02-content-curriculum-gap-audit/02-EVIDENCE-exams.md`
- **Verification:** Cross-checked word counts against raw pasted transcript text; the resulting pattern (3 of 3 TEF documents running hot) was consistent enough across independent documents that it was recorded as EXAM-02 rather than dismissed as measurement noise.
- **Committed in:** `7e9c34f` (Task 2 commit)

---

**Total deviations:** 3 auto-fixed (all Rule 3 - blocking, all resolved via the plan's own documented or clearly-analogous fallback paths for exactly these scenarios)
**Impact on plan:** No scope creep. The worktree-repair merge was a prerequisite to reading the plan at all, not new content work. The two environment-fallback deviations (DB connection, speech-rate check) both used mechanisms the plan itself anticipated and pre-authorized, and the speech-rate fallback additionally surfaced a real finding (EXAM-02) that running the automated script blindly and trusting a "clean" result might have missed.

## Issues Encountered

- **Acceptance-gate regex bug (not a deviation, a verification-tooling defect):** the plan's own literal `grep -oE "paper\.[a-z_]+\..."` automated verify commands for Task 1 and Task 2 structurally cannot count any `delf_b2` paper id (the format token contains a digit, `[a-z_]+` does not). Confirmed with a minimal repro (`echo "paper.delf_b2.blanc-01.1" | grep -oE "paper\.[a-z_]+\..."` produces no match), then re-validated the actual acceptance criteria (paper ids named individually >= 15; diff-table rows >= 60) using a corrected `[a-z0-9_]+` character class, which the evidence file passes cleanly (15/15 papers, 60/60 rows). Flagging this for whoever next touches `02-03-PLAN.md` or writes similar per-paper grep gates elsewhere in this phase — any acceptance script matching exam paper ids by format needs a character class that includes digits.
- No other issues. All three tasks' own acceptance criteria (headings, forbidden/required strings, minimum SQL-block counts) pass on the final committed file.

## User Setup Required

None - no external service configuration required. No write was issued against the database at any point (confirmed: every query began with `select` or `with … select`; the scratchpad query runner itself refuses anything else).

## Next Phase Readiness
- Plan 05 can lift all four `EXAM-nn` findings (`EXAM-01` through `EXAM-04`) directly into `GAPS.md`'s Finding Index without re-querying the database — each carries its own evidence, severity, and scope estimate.
- `EXAM-03` (DELF audio-verification gap) supersedes CONTEXT.md D-05's volume estimate with a measured number (~36.8 min, not ~2 hours) — Plan 05/06 should cite the corrected figure.
- `EXAM-04` (no attestation field exists anywhere in the schema) is the more structurally important of the two audio findings: it means the same silent gap could exist on any TEF or TCF paper without anyone being able to tell from the database, not just the 4 named DELF papers.
- `EXAM-02` (TEF speech-rate spot-check) is based on a single paper's 3-document sample, not an exhaustive measurement — its own scope-estimate section recommends running `check-speech-rate.ts` properly (from a checkout with dependencies installed) across all 5 TEF papers before treating it as more than a lead.
- This worktree is now caught up with `feat/sons-course` (merge commit `29d8db6`), so any sibling plan resuming in a similarly-stale worktree should check for the same base-branch mismatch before assuming missing plan files indicate a different problem.

## Self-Check: PASSED

- FOUND: `.planning/phases/02-content-curriculum-gap-audit/02-EVIDENCE-exams.md`
- FOUND: commit `01eef0c` in git log
- FOUND: commit `7e9c34f` in git log
- FOUND: commit `058efd1` in git log

---
*Phase: 02-content-curriculum-gap-audit*
*Completed: 2026-09-20*
