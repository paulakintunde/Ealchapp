# Phase 7, Plan 03: STT continuous-mode regression guard — Summary

**Executed:** 2026-09-21
**Requirement:** BUG-03

## What was built

Re-added the regression test that pins `continuous: false` in `ealch-v2/src/services/stt.ts` as hardcoded and unconditional, recovering it from the deleted `sttLongForm.test.ts` (commit `8cd0be3`, deleted as collateral by the revert commit `17f1fc2`). The new file is `ealch-v2/src/services/sttContinuous.test.ts`.

Two named tests, following the `examAttemptWiring.test.ts` import/`readFileSync` convention:
1. `the recogniser is never asked for continuous mode` — the recovered original assertion, verbatim in spirit: `continuous: false,` must appear in the comment-stripped source.
2. `continuous mode is not reachable through a flag` — new second assertion (per D-11): rejects any conditional form (`true`, `!!`, `opts.`, or a bare ternary `x ?`), and additionally asserts there is exactly one `continuous:` key in the file — closing the "second conditional key hides behind the first literal one" bypass that a single-assertion test would miss.

The header comment records the two-commits-in-thirteen-minutes history (8cd0be3 / 17f1fc2) so the next person to consider deleting this test can see why it exists, and explicitly documents that comments are stripped before every assertion (the comment itself quotes the forbidden option, `continuous: true`, and would trip a guard that couldn't tell prose from code).

`stt.ts` itself required no source change — `continuous: false` at line 298 was already correct, unconditional. This plan adds only the test.

## Files created / modified

- `ealch-v2/src/services/sttContinuous.test.ts` (created) — the regression guard, 2 tests
- `ealch-v2/src/services/stt.ts` — touched three times during mutation testing (task 2) and restored via `git checkout --` after each; byte-identical to its pre-plan committed state when the plan finished (`git diff --exit-code` confirmed clean)

## Mutation evidence (task 2)

Each mutation was applied to `stt.ts`, tested against `sttContinuous.test.ts`, then restored with `git checkout -- src/services/stt.ts` before the next mutation. `git status --porcelain src/services/stt.ts` was confirmed empty before mutation A and after mutation C.

| Mutation | Change | Test 1 (`...never asked for continuous mode`) | Test 2 (`...not reachable through a flag`) | Matches prediction? |
|---|---|---|---|---|
| A — the flag comes back | `continuous: false,` → `continuous: !!opts.longForm,` | FAIL (no literal `false` remains) | FAIL (`opts.` pattern matches) | Yes |
| B — a plain revert | `continuous: false,` → `continuous: true,` | FAIL (no literal `false` remains) | FAIL (`true` pattern matches) | Yes |
| C — a second, conditional key hides behind the good one | kept `continuous: false,`, added a second line `continuous: longForm ? true : false,` below it | PASS (the literal is still present) | FAIL (the bare-ternary pattern and the exactly-one-`continuous:`-key count assertion both fire) | Yes |

Mutation C is the case a single-assertion test (the original, recovered-verbatim `sttLongForm.test.ts` form) would have missed — it's the reason the second test's key-count assertion exists, and this run is the first time it has ever actually caught anything.

After mutation C's restore, `git status --porcelain src/services/stt.ts` printed nothing and `node --test src/services/sttContinuous.test.ts` passed 2/2 again.

## Verification run

```
cd ealch-v2
node --test src/services/sttContinuous.test.ts
# pass 2, fail 0

git diff --exit-code src/services/stt.ts
# exits 0 — byte-identical to committed state
```

## Deviations from the plan

1. **`npm test` (full suite) has one pre-existing, unrelated failure in this worktree.** `src/store/sessionEndListener.behavior.test.ts` fails with `ERR_MODULE_NOT_FOUND: Cannot find package 'react'`. Investigated: this worktree (`.claude/worktrees/agent-ad71903fe27313a2f`) has no `node_modules` directory at all — confirmed via `find . -maxdepth 1 -iname node_modules` returning nothing. Every other test in the 5420-test suite passes because this codebase's convention (per RESEARCH.md) is source-text-assertion tests with zero npm imports; `sessionEndListener.behavior.test.ts` is one of the rare files that imports `react` directly, which isn't installed in this isolated worktree's environment. This is a pre-existing environment/dependency-provisioning gap in the worktree, not a regression introduced by this plan — `git status --short` before any of this plan's edits showed no `node_modules`-related changes, and this plan touches only `sttContinuous.test.ts` (new) and `stt.ts` (temporarily, then fully restored). The plan's own targeted verify command (`node --test src/services/sttContinuous.test.ts`, task 1's and task 2's actual `<automated>` checks) is unaffected and green. Full suite result: `tests 5420, pass 5418, fail 1, skipped 1` — the 1 failure is this unrelated, pre-existing gap.
2. **07-PATTERNS.md did not exist in this worktree** (one of the `<files_to_read>` in the orchestrator's brief). It's not required by 07-03-PLAN.md's own `<context>` block to contain anything beyond what the plan's `<interfaces>` section already embeds verbatim (the exact recovered test body and the `examAttemptWiring.test.ts` import convention), so its absence did not block execution.

No other deviations. Both tasks' acceptance criteria (per 07-03-PLAN.md) were met exactly, including the `grep -c` checks for `8cd0be3`, `17f1fc2`, absence of `longForm`/`maxAlternatives`/`contextualStrings`, and presence of the line-comment stripper.

## Commits

1. `test(07-03): re-add STT continuous-mode regression guard` — adds `sttContinuous.test.ts` (task 1)
2. (this summary) — adds `07-03-SUMMARY.md` (task 2's mutation work made no lasting file change to commit, since `stt.ts` was restored each time; the mutation evidence is recorded here instead)
