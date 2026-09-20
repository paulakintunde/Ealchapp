---
phase: 04-entitlement-verification-signed-out-purchase-fix
plan: 07
subsystem: payments
tags: [supabase-edge-functions, expo-router, entitlement, exam-gate, analytics]

# Dependency graph
requires:
  - phase: 04-01
    provides: examPaperAllowed() four-input gate decision + exam_attempts grace-window math
  - phase: 04-05
    provides: start-exam-attempt edge function (live, deployed) that this plan's client calls
provides:
  - "startExamAttempt() client service (src/services/examAttempt.ts) wrapping the start-exam-attempt edge function"
  - "exam-paper.tsx's go() consulting the client gate then awaiting the server's authorization before navigating to /exam-section"
  - "paperId/skill required on GradeRequest and sent on the only grading call site (exam-section.tsx)"
  - "exam-section.tsx's idempotent mount-time re-issue of the authorization call"
  - "src/services/examAttemptWiring.test.ts source-text wiring assertions"
affects: [phase-05-paywall-expansion]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Three-outcome async gate result ({status:'authorized'|'refused'|'unreachable'}), never throws, same contract style as examGrader.grade()'s live:true/false"
    - "Client-side additive gate (examPaperAllowed) followed by an awaited server authorization call before navigation, mirroring the coach/tts guest-gate posture from earlier phases"

key-files:
  created:
    - ealch-v2/src/services/examAttempt.ts
    - ealch-v2/src/services/examAttemptWiring.test.ts
  modified:
    - ealch-v2/src/services/env.ts
    - ealch-v2/src/services/index.ts
    - ealch-v2/src/services/examGrader.ts
    - ealch-v2/app/exam-section.tsx
    - ealch-v2/app/exam-paper.tsx

key-decisions:
  - "No new i18n key added for the rare-fault (bad_paper_id/bad_skill/unknown_paper/write_failed) error panel on exam-paper.tsx — reused T.chatRetry ('Try again in a moment.' / 'Réessayez dans un instant.') as generic retry copy, since no purpose-built or screen-existing generic failure string existed. Documented here per the plan's explicit fallback instruction."
  - "openSection()'s starting-flag double-tap guard covers SectionRow's onPress path via an early return inside openSection itself, rather than threading a new disabled prop through the separate SectionRow component — SectionRow currently has no disabled prop and all three go()-reaching entry points already converge through openSection or go()."

requirements-completed: [PAY-03]

# Metrics
duration: ~6min task-commit span (297c25c to a87f62e); session also included an interruption/resume and one-time local verification-environment setup (junctioning node_modules to the already-installed main checkout, since the worktree had none)
completed: 2026-09-20
---

# Phase 04 Plan 07: Client Wiring for the Exam Entitlement Gate (D-07) Summary

**Client-side D-07 gate: exam-paper.tsx now consults `examPaperAllowed()` then awaits `startExamAttempt()` before opening a runner, `paperId`/`skill` ride every grading request, and a source-text test file pins the wiring.**

## Performance

- **Duration:** ~6 min across 3 task commits (297c25c → a87f62e)
- **Started:** 2026-09-20T05:14:43-07:00 (first task commit)
- **Completed:** 2026-09-20T05:19:50-07:00 (last task commit)
- **Tasks:** 3/3 completed
- **Files modified:** 5 modified, 2 created

## Accomplishments

- Built `startExamAttempt()` (src/services/examAttempt.ts), a never-throwing client wrapper around the `start-exam-attempt` edge function (04-05), returning one of `authorized` / `refused` / `unreachable` and distinguishing a real 4xx decision from a network outage via `FunctionsHttpError`'s response body.
- `exam-paper.tsx`'s `go()` now runs the four-input client gate (`examPaperAllowed`) first — additive, matching `app/exam.tsx`'s existing pattern — and, only if allowed, awaits the server's authorization before navigating. An explicit `refused` never opens the runner: `auth_required` → `/signin`, `needs-exam-tier` → `/paywall` (with a `gate_blocked` analytics event on both the client and server refusal paths), any other reason surfaces an inline retry panel instead of silently proceeding.
- `unreachable` (and `authorized`) still open the runner — an authorization outage must not cost a candidate their sitting, matching the plan's accepted, explicitly-documented limitation.
- `GradeRequest.paperId`/`.skill` are now required fields (not optional) on `examGrader.ts`, so `tsc --noEmit` proves the only call site (`exam-section.tsx`'s `submit()`) was not left without them.
- `exam-section.tsx` re-issues the idempotent `startExamAttempt()` call on mount (a separate `useEffect`, fire-and-forget), shrinking — not closing — the window where a candidate let in offline could reach an ungraded attempt under a future `examGateOn: true`.
- New `src/services/examAttemptWiring.test.ts`: 4 source-text tests pinning gate-before-navigation ordering, refusal-blocks-navigation, paperId/skill on the grading call, and that the offline/`unreachable` limitation stays documented next to the code.

## Task Commits

1. **Task 1: Add the startExamAttempt client service and its ENV slug** - `297c25c` (feat)
2. **Task 2: Thread paperId + skill through grading** - `a8a5e17` (feat)
3. **Task 3: Gate the paper screen's start button on both the client decision and the server's answer** - `a87f62e` (feat)

**Plan metadata:** (this commit) `docs(04-07): complete client wiring for the exam entitlement gate plan`

## Files Created/Modified

- `ealch-v2/src/services/env.ts` - added `startExamAttemptFunction` Edge Function slug
- `ealch-v2/src/services/examAttempt.ts` - new: `startExamAttempt()`, `StartAttemptResult`
- `ealch-v2/src/services/index.ts` - exported `startExamAttempt`/`StartAttemptResult` from the service registry
- `ealch-v2/src/services/examGrader.ts` - `GradeRequest.paperId`/`.skill` now required
- `ealch-v2/app/exam-section.tsx` - grading call sends `paperId`/`skill`; new mount-time idempotent re-issue effect
- `ealch-v2/app/exam-paper.tsx` - `go()` is now async: client gate → server authorization → navigate/refuse; `starting`/`startErr` state; disabled-while-starting guards; inline fault panel
- `ealch-v2/src/services/examAttemptWiring.test.ts` - new: 4 source-text wiring assertions

## Decisions Made

- Reused `T.chatRetry` for the rare-fault (`bad_paper_id`/`bad_skill`/`unknown_paper`/`write_failed`) inline panel body rather than inventing a new i18n key, per the plan's explicit "do NOT add a new i18n key in this plan" instruction and its documented fallback ("reuse ... the generic failure string already used on this screen"). No string on `exam-paper.tsx` already fit a generic "could not start, try again" meaning without misrepresenting the fault as audio-specific (the screen's only existing failure copy, `T.examAudioOffline`/`examAudioOfflineBody`, explicitly names audio). `T.chatRetry` ("Try again in a moment." / "Réessayez dans un instant.") is generic, already shipped, and does not misdescribe the fault. This panel is reached only on a real server-side fault, not the everyday `needs-exam-tier`/`auth_required` paths, which route away instead of rendering inline.
- `openSection()`'s `starting` guard is a single early-return at its top rather than a `disabled` prop threaded through the separate `SectionRow` component, since `SectionRow` has no `disabled` prop today and every path that can call `go()` (sitting mode, per-section rows, and the audio-warning panel's "start anyway") already funnels through either `openSection()` or `go()` itself, both of which now check `starting`.

## Deviations from Plan

None requiring a code change — plan executed as written. Two verification-only notes, both about the plan's own acceptance-criteria greps being imprecise (not about the implementation):

1. **[Note, not a deviation] `grep -c "throw" examAttempt.ts` returns 1, not the plan's stated 0.** The single match is the word "throws" inside the verbatim-required header comment ("Never throws, on the same principle as examGrader.grade()..."), not an actual `throw` statement — the file contains zero `throw` statements, confirmed by inspection and by `npm test`/`tsc` passing. The header comment was reproduced exactly as the plan specified verbatim; the plan's own grep pattern doesn't anchor to a code context, so it self-matches its own required prose.
2. **[Note, not a deviation] `grep -c "preflightClips" exam-paper.tsx` returns 2, not the plan's stated 1.** The file has always had 2 occurrences (the import and the call site inside `openSection`) both before and after this plan's changes — `preflightClips` itself was not touched. Confirmed via `git diff` on this plan's commits: no line containing `preflightClips` was added, removed, or modified.

## Issues Encountered

- The worktree had no `ealch-v2/node_modules` (a fresh worktree checkout, no install). Rather than running a full `npm install` (slow, and this worktree has no independent lockfile drift from the main checkout), a Windows junction was created from `ealch-v2/node_modules` to the already-installed main checkout's `ealch-v2/node_modules` (`fs.symlinkSync(target, 'node_modules', 'junction')`) so `tsc --noEmit` and `npm test` could run for real verification rather than being skipped. This is a local, gitignored, non-committed environment artifact — it is not part of any task commit and does not appear in `git status` as tracked content.
- One command-history detour: several `ln -s`/`mv`/`rmdir` attempts at creating that junction raced against what turned out to be `node_modules`-path resolution quirks in this Windows/Git-Bash environment (not a real background process, as first suspected) before the `fs.symlinkSync(..., 'junction')` approach worked cleanly. No repo files were affected; confirmed via `git status --short` before the first task commit.
- Session was interrupted by a rate limit after Task 1's `env.ts` edit but before it was committed. On resume, verified via `git status`/`git diff` that only the intended one-line `env.ts` addition was uncommitted, confirmed it was already complete and correct, then proceeded with Task 1's remaining actions (`examAttempt.ts`, `index.ts`) before committing all of Task 1 together.

## User Setup Required

None - no external service configuration required. `start-exam-attempt` (the edge function this plan's client calls) was already deployed in 04-05.

## Next Phase Readiness

- D-07's client-side wiring is complete and green: `npx tsc --noEmit` clean, `npm test` 5345/5345 passing (5341 pre-existing + 4 new wiring tests), and the plan's own `examAttemptWiring.test.ts` passes 4/4.
- **Carried-forward prerequisite for Phase 5 (paywall expansion), restated per 04-07-PLAN.md's objective:** the offline/`unreachable` authorization-outage limitation is accepted and documented (examAttempt.ts's header comment, the plan's threat register T-04-31, and this plan's wiring test), but it is NOT closed. An attempt begun while the `start-exam-attempt` call is unreachable proceeds without a server-recorded authorization row; `exam-section.tsx`'s mount-time re-issue shrinks but does not eliminate the window. **This residual must be resolved before `system_config.examGateOn` is ever flipped to `true`** — Phase 5 must not flip that flag without first addressing this gap.

## Self-Check: PASSED

- FOUND: `ealch-v2/src/services/examAttempt.ts`
- FOUND: `ealch-v2/src/services/examAttemptWiring.test.ts`
- FOUND: `.planning/phases/04-entitlement-verification-signed-out-purchase-fix/04-07-SUMMARY.md`
- FOUND: commit `297c25c`
- FOUND: commit `a8a5e17`
- FOUND: commit `a87f62e`
