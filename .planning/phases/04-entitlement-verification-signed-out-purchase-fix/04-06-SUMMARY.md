---
phase: 04-entitlement-verification-signed-out-purchase-fix
plan: 06
subsystem: payments
tags: [supabase, deno, edge-functions, entitlements, exam, grading, source-text-test]

# Dependency graph
requires:
  - phase: 04-01
    provides: examGate.logic.ts (examPaperAllowed), examAttempt.logic.ts (ATTEMPT_GRACE_S/clampTimingS)
  - phase: 04-02
    provides: live exam_attempts table (composite PK on user_id/paper_id/skill, RLS enabled, 0 policies)
  - phase: 04-05
    provides: start-exam-attempt (writes the exam_attempts row this plan's gate reads), SETUP.md deploy precedent
provides:
  - "grade-exam's attempt-validation gate (source built and unit-tested; NOT YET REDEPLOYED — see Task 3 Blocked)"
  - "grade-exam-gate.test.ts pinning the gate's existence, position, expiry bound, flag-conditioning and log visibility"
  - "coach/index.ts's hasUnlimitedCoach comment corrected to name adapty-webhook"
affects: [phase-05-paywall-expansion]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Source-text assertion test for a Deno edge function's internal gate ordering (extends examGate.parity.test.ts's cross-file precedent to an intra-file structural check)"

key-files:
  created:
    - ealch-v2/supabase/functions/grade-exam/grade-exam-gate.test.ts
  modified:
    - ealch-v2/supabase/functions/grade-exam/index.ts
    - ealch-v2/supabase/functions/coach/index.ts

key-decisions:
  - "Fixed a bug in the plan's own test spec during the required deliberate-break proof: the literal search string 'attemptAuthorized(uid' also matches the function's own declaration ('async function attemptAuthorized(uid: string, ...') which sits above the handler and always precedes bumpTurn/buildChain regardless of where the call site actually is — so the position test as literally specified would pass even on a broken (misordered) gate. Narrowed to 'await attemptAuthorized(uid', which matches only the call site. Re-ran the full deliberate-break cycle (misplace after bumpTurn -> test 2 fails -> restore -> test 2 passes) to confirm the fix actually detects the regression the acceptance criteria require it to detect."
  - "Task 3's deploy did not reach the classifier refusal 04-05 hit — a Bash permission rule for 'npx supabase functions deploy *' already exists in .claude/settings.local.json (added during 04-05) — but failed one step later on Supabase CLI authentication ('Access token not provided... run supabase login or set SUPABASE_ACCESS_TOKEN') in this sandboxed worktree shell, the same underlying environment gap 04-05-SUMMARY.md documented ('supabase login's browser callback failed in the sandboxed shell'). Per the known-block protocol, stopped after one attempt rather than token-juggling; curls were NOT run against the stale (pre-Task-1/2) live function, since that would prove nothing about the new gate."

requirements-completed: []  # PAY-03 spans plans 04-05/04-06/04-07/04-09 — this plan's slice (grade-exam's gate built, unit-tested, gates ordered/pinned) is done; PAY-03 overall stays open until this deploy lands (Task 3) and 04-07/04-09 also ship.

# Metrics
duration: ~50min (Tasks 1-2 complete; Task 3 blocked on deploy auth after the pre-deploy config check)
completed: 2026-09-20
---

# Phase 04 Plan 06: grade-exam Attempt-Validation Gate Summary

**`grade-exam` gains a fail-closed, flag-conditioned authorization gate reading `exam_attempts` before spending quota or calling any LLM — built, unit-tested with a source-text assertion suite (including a real deliberate-break proof that caught a bug in the plan's own test spec), and the stale `coach/index.ts` RevenueCat comment corrected. Deploy blocked on this sandbox's Supabase CLI auth, same class of environment gap 04-05 hit.**

## Performance

- **Duration:** ~50 min for Tasks 1-2; Task 3's pre-deploy config check completed, deploy attempt failed on CLI auth (not the classifier this time — see Deviations)
- **Tasks:** 2 of 3 completed; Task 3 partially complete (pre-deploy check done, deploy blocked, curls deliberately not run against stale code)

## Accomplishments

- Extended `GradeRequest` with optional `paperId`/`skill` (identify the attempt, do not assert anything about it — required only when `examGateOn` is true).
- Extended `routing()` to surface `examGateOn` from the same `system_config` row already read for the model/ceiling/quota config, with the same 60s TTL cache — no second round trip added to the grading path.
- Added `attemptAuthorized(uid, paperId, skill)`: fail-closed, reads `exam_attempts` filtered on `user_id` + `paper_id` + `skill` + `.gt("expires_at", new Date().toISOString())`, using this function's own clock, never the client's.
- Inserted the gate between `callerUid` and the quota-key construction — strictly before `bumpTurn` and `buildChain` — conditioned on `routed.examGateOn` so grading is byte-for-byte unchanged while the flag is off (production's current state), with the bypass itself logged (`grade_attempt_check_skipped`) so it's observable rather than invisible.
- Built `grade-exam-gate.test.ts`: 6 source-text assertions covering the gate's existence, its position relative to `bumpTurn`/`buildChain`, that it never reads `from("entitlements")` (D-05), that it's conditioned on `examGateOn`, that refusals reach the console log (not just PostHog), and that `coach/index.ts`'s exemption comment names the correct webhook.
- Ran the plan's required deliberate-break proof, found the position assertion as literally specified was a no-op (see Deviations), fixed it, and re-confirmed the fix actually detects the regression.
- Fixed `coach/index.ts`'s stale comment: `(fed by the revenuecat-webhook fn)` → `(fed by the adapty-webhook fn)` — the CODE has been correct since the 2026-07-22 vendor swap, only the comment was missed.
- Full suite green: `node --test supabase/functions/grade-exam/grade-exam-gate.test.ts` → 6/6 pass; `npm test` → 5347/5347 pass, 0 fail.
- Type-checked clean: `npx deno check supabase/functions/grade-exam/index.ts` → 0 errors (after the same one-time `deno cache --node-modules-dir=auto` step 04-05 documented; the resulting `deno.lock` was deleted afterward, same as 04-05's convention — not committed, no other function in this repo checks one in).

## Task Commits

Each task was committed atomically:

1. **Task 1: Add the attempt-validation gate to grade-exam, before quota and before any LLM call** — `6b1f7d4` (feat)
2. **Task 2: Pin the gate with source-text assertions and fix the stale RevenueCat comment** — `4ab27a2` (test)
3. **Task 3: Redeploy grade-exam and prove the open-position path is unbroken** — BLOCKED, see below. No commit (no file changes; nothing to redo — deploy is a CLI operation, not a source edit).

## Files Created/Modified

- `ealch-v2/supabase/functions/grade-exam/index.ts` — the attempt-validation gate, extended `GradeRequest`/`routing()` (96 insertions, 4 deletions)
- `ealch-v2/supabase/functions/grade-exam/grade-exam-gate.test.ts` — source-text assertion suite (61 lines)
- `ealch-v2/supabase/functions/coach/index.ts` — one-word comment fix (1 line changed)

## Decisions Made

- Fixed the plan's `grade-exam-gate.test.ts` position-check string (Rule 1 — auto-fix bug) rather than shipping it as literally written, because the literal version cannot fulfill the plan's own required acceptance criterion ("Deliberate-break proof... confirm test 2 FAILS") — proven, before the fix, that it does NOT fail when the gate is moved after `bumpTurn`.
- Did not run Task 3's curl proofs against the currently-live (pre-Task-1/2) `grade-exam` deployment. Those curls are specified to prove the *redeployed* function's behavior; running them against stale code that has no gate at all would produce green-looking output that proves nothing about this plan's change, and risks the SUMMARY implying a deploy proof that didn't happen. Left for the orchestrator/user to run once the real deploy lands, matching 04-05's precedent.
- Copied `ealch-admin/.env` (gitignored, not committed, identical credentials already used by this machine's own local scripts) from the main checkout into this worktree so the pre-deploy `system_config` query could run — worktrees do not inherit gitignored files by default. No secret was displayed in any tool output or file; only the two non-sensitive config values (`examGateOn`, `examFreePapers`) were printed.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] `grade-exam-gate.test.ts`'s position check matched the gate function's own declaration, not its call site**

- **Found during:** Task 2, running the plan's own required deliberate-break proof (move the gate block to after `bumpTurn`, confirm test 2 FAILS, restore, confirm it passes).
- **Issue:** The plan's literal spec used `src.indexOf('attemptAuthorized(uid')` to find the gate's position. That substring also appears in the function's own declaration, `async function attemptAuthorized(uid: string, paperId: string, skill: string): Promise<boolean> {`, which is defined well above the `Deno.serve` handler and therefore always has a lower index than `bumpTurn`'s call site — regardless of where inside the handler the actual gate CALL sits. Proof: moved the gate block (the `if (!routed.examGateOn) { ... } else { ... }` block) to immediately after `bumpTurn`'s call, re-ran the test suite, and test 2 still reported PASS — the reorder was invisible to the check.
- **Fix:** Narrowed the search string to `'await attemptAuthorized(uid'`, which matches only the call site (`if (!(await attemptAuthorized(uid, body.paperId, body.skill)))`), not the declaration (which has no `await` before it). Re-ran the identical deliberate-break test: with the gate misplaced after `bumpTurn`, the test now correctly FAILS with `AssertionError [ERR_ASSERTION]: an unauthorized request must not spend the caller's daily quota`. Restored the file to its Task 1 commit state (verified via `git diff --stat` showing zero diff) and reconfirmed 6/6 pass.
- **Files modified:** `ealch-v2/supabase/functions/grade-exam/grade-exam-gate.test.ts` only (the search-string change and an explanatory comment above it). `grade-exam/index.ts` itself was untouched by this fix — the misplace/restore cycle used to prove it left the file byte-identical to the Task 1 commit.
- **Verification:** Full deliberate-break cycle documented directly above; `node --test` 6/6 pass on the restored file; `npm test` 5347/5347 pass on the full suite afterward.
- **Committed in:** `4ab27a2` (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (1 test bug, same class as 04-05's `extract()` bug — a plan-specified string match that coincidentally matched more than the intended target)
**Impact on plan:** Necessary for the position assertion to be a real regression guard rather than a permanently-green no-op. No scope creep — confined to one search string plus its explanatory comment in the new test file; every plan-specified test name, assertion, and acceptance-criteria grep target is present and passing exactly as written.

## Issues Encountered

- Same pre-existing environment gap 04-05 documented: `npx deno check` initially failed on `grade-exam/index.ts` with `Could not find a matching package for 'npm:@supabase/realtime-js@2.116.0' in the node_modules directory`. Resolved identically — `npx deno cache --node-modules-dir=auto supabase/functions/grade-exam/index.ts` once, then `deno check` passed cleanly. The generated `deno.lock` was deleted afterward, not committed.
- The worktree checkout does not inherit `ealch-admin/.env` (gitignored), which the plan's Task 3 pre-deploy query requires. Copied it in from the main checkout (see Decisions) rather than working around it another way.
- `pnpm tsx -e "..."` with a bare top-level `await` in the eval string failed with `Top-level await is currently not supported with the "cjs" output format` — wrapped the query in an `async function main() { ... } main();` IIFE instead of editing the plan's literal one-liner form; same query, same output shape.

## Task 3: Pre-Deploy Check Complete, Deploy Blocked — Completion Record

**A. Pre-deploy config query**, run against the live database:
```
select config->'examGateOn' as gate, config->'examFreePapers' as free from public.system_config where id='active'
=> { gate: null, free: null }
```
Neither key exists yet in the live `system_config.config` object (confirmed via `jsonb_object_keys(config)` — the row has `models`, `voices`, `services`, `ttsVoice`, `sttProvider`, `ttsProvider`, `orchestrator`, `promptVersion`, `ttsFreePreviewChars`, `failoverToastVisible`, `gradeFreeTurnsPerDay`, `ttsPremiumDailyChars`, `ttsPremiumMonthlyChars`, `ttsPremiumDailyRequests`, `ttsPremiumBurstPerMinute` — no `examGateOn`/`examFreePapers`). This is NOT a blocker: both `grade-exam`'s `routing()` (`cfg?.examGateOn === true`) and `start-exam-attempt`'s `examConfig()` (explicit `typeof cfg?.examGateOn === "boolean" ? cfg.examGateOn : false`) treat a missing key as `false`/closed by design — the same fail-safe-to-open-tier stance documented in both functions' comments. The plan's expected literal `{gate: false, free: 1}` is the *effective* value these code paths resolve to, not necessarily a literal row value; the deploy is safe to proceed on rollout-order grounds.

**B. Deploy attempt:**
```
cd ealch-v2 && npx supabase functions deploy grade-exam --no-verify-jwt
```
Result:
```
{"_tag":"Error","error":{"code":"LegacyPlatformAuthRequiredError","message":"Access token not provided. Supply an access token by running `supabase login` or setting the SUPABASE_ACCESS_TOKEN environment variable."}}
```

Unlike 04-05's first attempt, this was **not** refused by the Claude Code auto-mode classifier — a Bash permission rule for `Bash(npx supabase functions deploy *)` already exists in `.claude/settings.local.json` (added by the user during 04-05), so the command ran. It failed one step later, on the Supabase CLI's own login state inside this sandboxed worktree shell — the exact environment gap 04-05-SUMMARY.md documented for its own deploy attempt ("`supabase login`'s browser callback failed in the sandboxed shell; the user's own terminal environment did not have this problem").

Per the known-block protocol: tried once, did not retry, did not attempt workarounds (no token juggling, no alternate login flow, no editing permission settings). Stopping here and reporting BLOCKED.

**C/D. Curl proofs:** NOT run. Running them against the currently-live `grade-exam` (which predates this plan's Tasks 1-2 and has no gate at all) would not exercise or prove anything about the new code — it would just always return whatever the old function already returned, creating a false impression that Task 3's acceptance criteria were satisfied. Deferred to the orchestrator/user, same as 04-05's Task 3 completion pattern: once the user runs the deploy from their own terminal, curls C and D can be run directly against the live endpoint to confirm (C) the rubric guard still returns 400, and (D) a well-formed request with no `paperId`/`skill` still grades (200/503/429), never 403/`attempt_missing_or_expired` or 400/`bad_attempt_ref`.

**`PAY-03` remains unmarked as complete** in this plan's `requirements-completed` — the gate's source is built, unit-tested, and structurally pinned; the deploy that makes it live is outstanding.

## Next Phase Readiness

- `grade-exam`'s gate is fully built and unit-tested; deploying it is a pure CLI operation with zero pending code changes once the user runs it.
- **Process note, confirmed twice now (04-05 and 04-06):** this sandboxed worktree's Supabase CLI cannot complete `supabase login`. The working pattern remains: the user runs `npx supabase functions deploy grade-exam --no-verify-jwt` directly from their own terminal (the permission rule is already in place, so no further settings change is needed), then the orchestrator runs the two non-mutating curl proofs (C and D above) directly against the live endpoint to close out Task 3.
- Plan 04-07 (client wiring) and 04-09 (flipping `examGateOn` for real) should not proceed to actually enabling the gate until this deploy is confirmed live — the code is safe to sit undeployed (existing behavior is unaffected), but PAY-03's server-side half is not "done" until it is.

## Self-Check: PASSED

- FOUND: `ealch-v2/supabase/functions/grade-exam/index.ts` (gate present, `git show 6b1f7d4 --stat` confirms)
- FOUND: `ealch-v2/supabase/functions/grade-exam/grade-exam-gate.test.ts` (`git show 4ab27a2 --stat` confirms)
- FOUND: `ealch-v2/supabase/functions/coach/index.ts` comment fix (`git show 4ab27a2 --stat` confirms)
- FOUND commit `6b1f7d4` in `git log --oneline`
- FOUND commit `4ab27a2` in `git log --oneline`
- CONFIRMED: `node --test supabase/functions/grade-exam/grade-exam-gate.test.ts` exits with `# pass 6` / `# fail 0`
- CONFIRMED: `npm test` exits with `# pass 5347` / `# fail 0`
- CONFIRMED: `grep -cF 'from("entitlements")' supabase/functions/grade-exam/index.ts` returns 0
- CONFIRMED: `grep -cF "revenuecat-webhook" supabase/functions/coach/index.ts` returns 0; `grep -cF "revenuecat-webhook" supabase/schema.sql` returns 1 (historical note untouched)
- CONFIRMED: deploy attempt made once, failed on CLI auth (`LegacyPlatformAuthRequiredError`), not retried

---
*Phase: 04-entitlement-verification-signed-out-purchase-fix*
*Completed: 2026-09-20 (Tasks 1-2 this session; Task 3 pre-deploy check done, deploy blocked, pending user-run deploy + orchestrator-run curl verification)*
