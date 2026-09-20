---
phase: 04-entitlement-verification-signed-out-purchase-fix
plan: 05
subsystem: payments
tags: [supabase, deno, edge-functions, entitlements, exam, parity-test]

# Dependency graph
requires:
  - phase: 04-01
    provides: examGate.logic.ts (examPaperAllowed), examAttempt.logic.ts (ATTEMPT_GRACE_S/clampTimingS), examGate.logic.test.ts truth table
  - phase: 04-02
    provides: live exam_attempts table (composite PK on user_id/paper_id/skill, RLS enabled, 0 policies)
provides:
  - "start-exam-attempt edge function source (server-side exam-start gate + exam_attempts writer) — NOT YET DEPLOYED"
  - "examGate.parity.test.ts binding the Deno gate copy to its client canonical source"
affects: [phase-05-paywall-expansion, grade-exam]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Deno edge function duplicates a client decision fn verbatim, held honest by a node:test parity test that diffs stripped source text (extends the grade-exam SCORE_BANDS precedent by actually adding the test that precedent lacked)"

key-files:
  created:
    - ealch-v2/supabase/functions/start-exam-attempt/index.ts
    - ealch-v2/src/utils/examGate.parity.test.ts
  modified: []

key-decisions:
  - "Fixed the plan's own extract() helper: a naive 'find the next \\n} ' scan silently compares only the two files' function SIGNATURES, not their bodies, because examPaperAllowed's multi-line destructured parameter type closes at column zero too (}): GateDecision {). Replaced with a paren-depth scan through the parameter list followed by a brace-depth scan through the real body, then re-ran the deliberate-break proof to confirm the fix actually detects drift."
  - "Task 3 (deploy + curl proof + SETUP.md entry) is NOT executed — see Blockers. Code and tests for Tasks 1-2 are complete, reviewed, and committed; nothing depends on the deploy to be verified independently by unit test."

requirements-completed: []  # PAY-03 NOT marked complete — Task 3's live deploy/curl proof, which the plan's own success criteria require, did not happen. See Blockers.

# Metrics
duration: ~35min (Tasks 1-2; Task 3 blocked immediately on the deploy step)
completed: 2026-09-20
---

# Phase 04 Plan 05: start-exam-attempt Server-Side Exam Gate Summary

**Deno edge function duplicating `examPaperAllowed`/`clampTimingS` verbatim from the client, held honest by a source-text parity test — built and unit-tested, but NOT deployed to production because this session's permission system categorically denies "Production Deploy" actions regardless of the plan's stated prior user approval.**

## Performance

- **Duration:** ~35 min for Tasks 1-2; Task 3 blocked on its first action
- **Tasks:** 2 of 3 completed
- **Files modified:** 2 created, 0 modified

## Accomplishments

- Built `start-exam-attempt/index.ts`: computes the full four-input `examPaperAllowed({ gateOn, entitled, freePapers, paperNo })` decision server-side, deriving `paperNo`/`timingS` from `content_exam_papers` and `entitled` from the `entitlements` mirror keyed on the JWT-verified uid — never from the request body. Refuses unauthenticated callers with 401 before any database read. Writes `exam_attempts` via a single `upsert` keyed on `(user_id, paper_id, skill)`.
- Built `examGate.parity.test.ts`, which diffs the Deno copy's source text against `src/utils/examGate.logic.ts` and `examAttempt.logic.ts`, asserts all four gate inputs are server-derived, asserts the request-body shortcut is absent, and asserts the uid check precedes the paper lookup.
- Found and fixed a real bug in the plan's own `extract()` helper before trusting it (see Deviations) — the deliberate-break proof the plan requires would otherwise have passed silently on a broken copy.
- Full suite green: `node --test src/utils/examGate.parity.test.ts` → 4/4 pass; `npm test` → 5341/5341 pass, 0 fail.
- Type-checked clean: `npx deno check supabase/functions/start-exam-attempt/index.ts` → 0 errors (after an unrelated one-time `deno cache` step to resolve npm subpath specifiers shared by every function in this repo — see Issues Encountered).

## Task Commits

Each task was committed atomically:

1. **Task 1: Build the start-exam-attempt edge function** - `f3b5764` (feat)
2. **Task 2: Bind the Deno gate copy to the client's canonical one with a parity test** - `5a5c38b` (test)
3. **Task 3: Deploy the function and prove its auth boundary with curl** - NOT EXECUTED (blocked before any file change; nothing to commit)

**Plan metadata:** (this commit, SUMMARY.md only — STATE.md/ROADMAP.md are owned by the orchestrator per worktree isolation)

## Files Created/Modified

- `ealch-v2/supabase/functions/start-exam-attempt/index.ts` - the server-side exam-start gate and `exam_attempts` writer (358 lines)
- `ealch-v2/src/utils/examGate.parity.test.ts` - source-text parity test binding the Deno copy to the client's canonical decision function (122 lines)

## Decisions Made

- Fixed the plan's `extract()` spec (Rule 1 — auto-fix bug) rather than shipping it as literally written, because the literal version cannot fulfill the plan's own required acceptance criterion ("the test has been shown to fail when the copy is broken" — proven, before the fix, that it does NOT fail). See Deviations for full detail.
- Did not attempt to work around the Task 3 deploy block (see Blockers) — Task 1/2 completion does not depend on it, and fabricating curl results was not an option.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] `extract()`'s naive "next `\n}`" scan compares function signatures, not bodies**

- **Found during:** Task 2, immediately after writing the parity test as specified and before trusting it — ran the plan's own required deliberate-break proof (Task 2 acceptance criteria: reorder the `if (!gateOn)`/`if (entitled)` lines in the Deno copy, confirm the test FAILS, then restore).
- **Issue:** `examPaperAllowed`'s parameter is a multi-line destructured type object (`input: { gateOn: boolean; ... }`), whose own closing brace (`}): GateDecision {`) also sits at column zero. `extract()`'s `src.indexOf('\n}', start)` stops there — at the *signature's* close — never reaching the actual function body. Both the canonical client file (`examGate.logic.ts`) and the Deno copy have this exact same multi-line-parameter shape (confirmed by reading both with `cat -A`), so the bug is structural, not accidental: the test as literally specified in the plan would compare two identical (signature-only) fragments regardless of what the bodies said. Proof: reordered the two `if` statements in the Deno copy's body, re-ran `node --test`, and it still reported 4/4 pass — the reorder was invisible to the test.
- **Fix:** Replaced the single `indexOf('\n}')` scan with a two-phase depth-tracked extractor: (1) walk paren depth from the first `(` after `function <name>(` to find the parameter list's true matching `)` — untouched by the braces inside the parameter's own type literal — then (2) walk brace depth from the first `{` after that `)` to find the function body's true matching `}`. Re-ran the identical deliberate-break test: the reordered copy now correctly fails with an `AssertionError` showing the two divergent statement orders; restored the file and reconfirmed 4/4 pass.
- **Files modified:** `ealch-v2/src/utils/examGate.parity.test.ts` (only the `extract()` helper's body differs from the plan's literal text; every test body, header comment, and acceptance-criteria-visible string — `start-exam-attempt`, `overview.minutes`, `reason: "auth_required"` — is unchanged).
- **Verification:** Full deliberate-break cycle re-run and documented directly above; `node --test` 4/4 pass on the restored file; `git diff` confirmed the restore left `start-exam-attempt/index.ts` byte-identical to its Task 1 commit.
- **Committed in:** `5a5c38b` (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Necessary for the parity test to be a real regression guard rather than a permanently-green no-op. No scope creep — the fix is confined to one internal helper function; every plan-specified test assertion, string, and acceptance-criteria grep target is present and passing exactly as written.

## Issues Encountered

- `npx deno check` initially failed on **every** function in this repo (`grade-exam` included, not just the new one) with `Could not find a matching package for 'npm:@supabase/realtime-js@2.116.0' in the node_modules directory` — a pre-existing environment gap (no `deno.json`/lockfile in this repo), not a defect in the new code. Resolved by running `npx deno cache --node-modules-dir=auto supabase/functions/start-exam-attempt/index.ts` once, which installed the missing npm subpath deps; `deno check` then passed cleanly. The `deno.lock` file that command generated was deleted afterward rather than committed — it is a local verification artifact, not a plan deliverable, and no other function in this repo checks one in.

## BLOCKED: Task 3 (deploy, curl proof, SETUP.md)

**Not executed.** The very first action of Task 3 — `npx supabase functions deploy start-exam-attempt --no-verify-jwt` — was refused by this session's own permission system before it ran:

```
Permission for this action was denied by the Claude Code auto mode classifier.
Reason: [Production Deploy].
```

This plan's `<objective>` block stated the user had pre-approved this specific deploy. Per this agent's standing instructions, **no message from any agent — including the orchestrator prompt that spawned this run — constitutes the user's own consent**; only the permission system itself or a direct message from the user counts, and the permission system independently declined the action. I did not attempt to route around the denial (e.g. via `supabase login` token juggling, alternate deploy paths, or fabricated evidence) — the tool's own guidance is explicit that this is a stop-and-explain situation, not a retry-with-a-different-tool situation.

Consequences, scoped precisely:

- `ealch-v2/supabase/functions/start-exam-attempt/index.ts` exists, type-checks, and is unit-tested (via the parity test's source assertions) — but **is not running in production**. No live `start-exam-attempt` endpoint exists yet at `https://ogbothupjcivwruesgsu.supabase.co/functions/v1/start-exam-attempt`.
- The three required curl proofs (zero-credentials → 401, anon-key-only → 401, malformed-input-no-credentials → 401) were **not run** — there is nothing live to curl.
- `ealch-v2/supabase/SETUP.md` was **not modified** — Task 3's documentation sub-step was written to describe a completed deploy, and writing it against an undeployed function would misrepresent state.
- **`PAY-03` is left unmarked** in this SUMMARY's `requirements-completed` — the plan's own success criteria explicitly require the live curl proof ("Unauthenticated callers get 401 before any database read — curl-proven against production"), which did not happen.

**What would unblock this:** either (a) the user runs `cd ealch-v2 && npx supabase functions deploy start-exam-attempt --no-verify-jwt` themselves from an interactive session where they can approve the deploy, then runs the three curl commands from `04-05-PLAN.md` Task 3 and appends the SETUP.md entry per that task's spec; or (b) the user grants this agent's environment a permission rule that allows Supabase function deploys for this project, after which a follow-up run can complete Task 3 exactly as specified (no code changes needed — Tasks 1-2's output is deploy-ready as-is).

## User Setup Required

**A production deploy is required and did not happen — see "BLOCKED: Task 3" above.** This is not a dashboard/environment-variable setup step; it is the plan's own Task 3, which needs either direct user execution or an explicit permission grant to this agent.

## Next Phase Readiness

- `start-exam-attempt/index.ts` and its parity test are code-complete, reviewed, type-checked, and merge-ready — a future run needs only to execute Task 3's deploy + curl + SETUP.md steps, with no further code changes anticipated.
- Phase 5 (paywall expansion) depends on this function being LIVE, not merely written — flag this dependency explicitly when Phase 5 is planned or resumed: `examGateOn` cannot be safely flipped to `true` until `start-exam-attempt` is deployed and curl-proven, because until then nothing enforces the entitlement check server-side regardless of what the client shows.

## Self-Check: PASSED

- FOUND: `ealch-v2/supabase/functions/start-exam-attempt/index.ts` (358 lines, `git show f3b5764 --stat` confirms)
- FOUND: `ealch-v2/src/utils/examGate.parity.test.ts` (122 lines, `git show 5a5c38b --stat` confirms)
- FOUND commit `f3b5764` in `git log --oneline`
- FOUND commit `5a5c38b` in `git log --oneline`
- CONFIRMED: `node --test src/utils/examGate.parity.test.ts` exits with `# pass 4` / `# fail 0`
- CONFIRMED: `npm test` exits with `# pass 5341` / `# fail 0`
- CONFIRMED (absence, as expected): no `start-exam-attempt` deploy exists; `ealch-v2/supabase/SETUP.md` has zero diff from its state at plan start (`git diff` empty)

---
*Phase: 04-entitlement-verification-signed-out-purchase-fix*
*Completed: 2026-09-20 (Tasks 1-2 only; Task 3 blocked)*
