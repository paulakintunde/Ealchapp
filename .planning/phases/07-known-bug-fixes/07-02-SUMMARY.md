---
phase: 07-known-bug-fixes
plan: 02
status: complete
completed: 2026-09-21
---

# Plan 07-02 Summary: Wire the Draft Layer into exam-section.tsx (BUG-02)

## What was built

`ealch-v2/src/services/examDraftWiring.test.ts` — a new source-text-assertion test file (the `examAttemptWiring.test.ts` convention: `readFileSync` + `node:assert` + comment-stripped source, no component-render infra) pinning six structural properties of `exam-section.tsx`: it imports `AsyncStorage`/`AppState`/`examDraft.logic`; a mount-time restore feeds all five answer setters; discrete answers checkpoint immediately while only free typing is debounced; backgrounding and unmount both flush; the response is written to disk before the grading loop starts and an already-graded task is never re-sent to the grader; and a clean submit clears the draft before navigating to the report.

`ealch-v2/app/exam-section.tsx` — modified (not created) to wire the tested `examDraft.logic.ts` layer (built by plan 07-01) into the actual exam runner screen:
- Imports `AsyncStorage` and the full `examDraft.logic` surface (`DRAFT_DEBOUNCE_MS`, `draftKey`, `buildDraft`, `serializeDraft`, `parseDraft`, `restoreState`, `isGraded`, `markGraded`, `hasContent`, `ExamDraft`), plus `AppState` added to the existing `react-native` import.
- A `draftRef` live-mirrors the five answer stores (`answers`/`texts`/`spoken`/`coverage`/`debate`) plus this sitting's graded-task list, so a flush triggered from an unmount cleanup or an `AppState` handler never reads a stale closure.
- A silent mount-time restore effect (D-10 — no banner/toast) reads the draft, feeds all five `useState` setters, and never calls `submit()` itself (D-03).
- Three checkpoint effects: `CHECKPOINT_DISCRETE` (an inline-commented marker on the `useEffect` line) writes immediately on any committed answer — MCQ select, a finished recording, coverage, a debate report; a separate debounced effect (1500ms via `DRAFT_DEBOUNCE_MS`) writes only after free typing goes quiet; and `FLUSH_ON_UNMOUNT` flushes on `AppState` backgrounding and on the effect's own cleanup.
- `submit()` now flushes the draft before the grading loop (`FLUSH_BEFORE_GRADING`), reads the draft back (or seeds one in memory if the sitting had no interruption), skips any task already in the draft's graded list as the very first statement of each loop iteration — before `scoreClosedTask()` and before `examGrader.grade()` — and records each grade durably via a `recordGraded()` helper called at all four loop exit paths (closed/MCQ, PO-unavailable, empty-body, and the AI-grade outcome). The draft key is removed once the section finishes cleanly (D-08), before `router.replace` to the report.

## Verification performed

- `node --test src/services/examDraftWiring.test.ts`: **6/6 pass, 0 fail**
- `node --test src/services/examDraft.logic.test.ts` (plan 07-01's suite): **15/15 pass, 0 fail** — unbroken
- `npm run typecheck` (`tsc --noEmit`): clean, exit 0
- `npm test` (full suite): **5447/5447 pass, 0 fail**
- All plan-specified `grep` acceptance criteria re-verified directly against the final committed file, per task:
  - Task 1: exactly 6 `test(` calls; the comment-stripping regex is present in the test file; `examResults` appears (the history-scoped-dedupe prohibition is pinned in the test)
  - Task 2: `CHECKPOINT_DISCRETE` and `FLUSH_ON_UNMOUNT` each appear exactly once; the `AppState` import line matches exactly; `AsyncStorage.getItem(` appears exactly once; no `submit()`-adjacent restore auto-call
  - Task 3: `FLUSH_BEFORE_GRADING` appears exactly once; `if (isGraded(draft, task.id)) continue;` appears exactly once, verbatim; `AsyncStorage.removeItem(` appears exactly once; `examResults` appears zero times in the raw (non-test) file; `recordGraded(task.id)` appears at 4 call sites

## Files created / modified

- `ealch-v2/src/services/examDraftWiring.test.ts` (created, 6 tests, ~95 lines)
- `ealch-v2/app/exam-section.tsx` (modified: imports, draft refs/writer, mirror effect, restore-on-mount effect, three checkpoint effects, and `submit()`'s flush/dedupe/record/clear logic)

Committed as three atomic commits, one per task:
1. `test(exam): pin the six BUG-02 draft-wiring structural properties (RED)`
2. `feat(exam): restore draft on mount, checkpoint on change, flush on background/unmount`
3. `fix(exam): flush draft before grading, skip already-graded tasks, clear on submit`

## Deviations from the plan, with rationale

1. **Marker comments moved from standalone lines to inline trailing comments.** The plan's task 2/3 action blocks show `CHECKPOINT_DISCRETE`, `FLUSH_ON_UNMOUNT`, and `FLUSH_BEFORE_GRADING` as the first line of a multi-line standalone `//` comment block immediately above the marked code. Task 1's own test file strips every comment-only line (`s.replace(/^\s*\/\/.*$/gm, '')`) before asserting — verified directly (`node -e` check against the file) that a standalone marker line does not survive stripping, so `src.includes('CHECKPOINT_DISCRETE')` etc. would never be true no matter how task 2/3 wired the actual logic, making tests 3, 4, and 5 permanently unsatisfiable as literally specified. Resolved by keeping each marker's explanatory prose on its own (stripped-away, that's fine) lines but placing the bare marker token as a trailing inline comment on the associated `useEffect(() => {` / `await writeDraft();` line, which is not a comment-only line and so survives stripping. Re-verified: all three markers now appear in the stripped source and all six structural tests pass.

2. **Reworded two explanatory comments to avoid tripping their own literal-substring prohibition.** Task 3's dedupe-check comment (mirroring CONTEXT.md D-04's own prose) originally read "...deliberately NOT to `useProgress.getState().examResults`..." — but the plan's own acceptance criterion requires `grep -c "examResults" app/exam-section.tsx` to output `0` in the raw (non-test) file. Same class of self-contradiction as plan 07-01's "attemptId" comment/grep conflict (see 07-01-SUMMARY.md deviation 1). Resolved by rewording to "deliberately NOT to useProgress's logged-results history" — same warning, no literal substring match. Re-verified: `grep -c "examResults" app/exam-section.tsx` outputs `0`; the test file itself (which is allowed and expected to contain the word) still asserts the prohibition against `useProgress.getState().examResults` specifically.

3. **`node_modules` was already present from plan 07-01's install... actually it was not** — this worktree started fresh (per the orchestrator's wave-2 isolation) and needed its own `npm install` before `npm run typecheck`/`node --test`/`npm test` could run. One clean, uncontested `npm install` completed in ~5 minutes (671 packages, 0 errors), matching 07-01's own environment-setup note. Not a deviation in delivered code.

4. **Worktree base correction before any work began.** This worktree's HEAD was found to be on an unrelated point in git history (a `feat/sons-course` merge commit far ahead of, but not descended from, the expected wave-1 base `0a28efd`) rather than already sitting on it. Per the plan's own `<worktree_branch_check>` protocol — confirmed the branch was in the `worktree-agent-*` namespace, confirmed a clean working tree, then `git reset --hard 0a28efda4b11e67618d51e5905d09e0d859f5a5b` — the base was corrected before task 1 began. Not a deviation in scope; a required precondition the protocol itself specifies.

## Requirements satisfied

- **BUG-02** (this plan closes it): an exam response now reaches disk before grading is requested, survives process death (verified structurally — device-level force-kill/relaunch verification is out of scope for this plan per its own `<verification>` note, checkpointed to plan 07-05), restores silently on reopen, and a retried submit never re-grades a task already graded in the same sitting. All four `must_haves.truths` from the plan frontmatter are satisfied by the committed code and pinned by the six structural tests.
