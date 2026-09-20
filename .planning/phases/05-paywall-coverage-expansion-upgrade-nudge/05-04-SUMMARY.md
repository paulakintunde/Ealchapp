---
phase: 05-paywall-coverage-expansion-upgrade-nudge
plan: 04
subsystem: payments
tags: [paywall, expo-router, i18n, analytics, node-test, typescript]

# Dependency graph
requires:
  - phase: 05-paywall-coverage-expansion-upgrade-nudge (plan 01)
    provides: the 9 pwTitle*/pwLead*/pwExam* i18n key pairs this plan consumes verbatim, no new copy authored
provides:
  - "PAYWALL_COPY map in paywall.tsx keyed on the from route param (gate:levels/gate:coach/gate:roleplay), generic fallback for home/settings/placement/direct"
  - "gate:examiner explainer branch, checked ahead of the already-premium branch, with a dismiss-only CTA and no plan picker"
  - "all three exam-gate /paywall pushes (exam.tsx paper-list, exam-paper.tsx pre-check, exam-paper.tsx server-refusal) now carry from: 'gate:examiner'"
  - "the exam.tsx paper-list gate now emits track('gate_blocked', { feature: 'examiner', from: 'exam' }) — previously untracked"
  - "paywallContextWiring.test.ts pinning the copy map, branch ordering, three call sites, feature-row count and dismiss behaviour"
affects: [05-05, 05-06, 05-07]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Paywall display context flows through the existing `from` route param's `gate:<feature>` prefix convention — no second param introduced"
    - "Source-text assertion tests (readFileSync + node:assert) for screen JSX with no RNTL infra, matching entitlementDowngrade.test.ts's established pattern"

key-files:
  created:
    - ealch-v2/src/store/paywallContextWiring.test.ts
  modified:
    - ealch-v2/app/paywall.tsx
    - ealch-v2/app/exam.tsx
    - ealch-v2/app/exam-paper.tsx
    - ealch-v2/src/services/examAttemptWiring.test.ts
    - ealch-v2/src/store/examSection.logic.test.ts

key-decisions:
  - "gate:examiner is deliberately NOT a PAYWALL_COPY key — it short-circuits to its own explainer branch before the copy map is even consulted, because PREMIERE_FEATURES excludes 'examiner' and showing the plan picker there would sell a subscription that doesn't unlock what the user tried to open (T-05-18)"
  - "The examiner branch is checked before the already-premium branch, not after — a Première holder hitting an exam gate needs the explainer, not a false 'you already have access' message"
  - "Two pre-existing source-text tests (examAttemptWiring.test.ts, examSection.logic.test.ts) asserted the literal old router.push('/paywall') string; updated in the same commit since this task's own change broke them (Rule 1)"

requirements-completed: [PAY-02]

duration: 12min
completed: 2026-09-20
---

# Phase 5 Plan 4: Contextual Paywall Copy & Examiner Explainer Summary

**Paywall headline/lead now read a `from`-keyed copy map instead of one generic sell screen, and a dismiss-only examiner explainer (no plan picker) is reachable from all three exam gate sites**

## Performance

- **Duration:** ~12 min
- **Started:** 2026-09-20T11:33:00-07:00
- **Completed:** 2026-09-20T11:42:16-07:00
- **Tasks:** 2 completed
- **Files modified:** 6 (1 created, 5 modified)

## Accomplishments

- Closed D-08: `paywall.tsx`'s sell screen headline/lead now come from `PAYWALL_COPY[from ?? ''] ?? { title: T.pwTitle, lead: T.pwLead }`, giving the lesson-level gate, the coach cap and the roleplay cap each their own headline while home/settings/placement/direct keep today's copy unchanged.
- Closed D-02 / mitigated T-05-18: added a `gate:examiner` render branch, checked ahead of the already-premium branch, that explains the exam tier is a separate pass and offers only a dismiss CTA — no plan picker, no price, so a user can never be sold a subscription that doesn't include exams.
- Wired all three exam-gate call sites (`exam.tsx` paper-list gate, `exam-paper.tsx` pre-check, `exam-paper.tsx` server refusal) to push `from: 'gate:examiner'`; the paper-list gate previously pushed with no params AND emitted no analytics — it now also tracks `gate_blocked` (mitigates T-05-21).
- Verified by inspection (no code change) that D-03/D-04 already hold: `featureRows` has exactly three entries and no `audio.packs` bullet exists anywhere in the file.
- Added `paywallContextWiring.test.ts` (5 passing suites) pinning the copy map, the branch ordering, the three call sites, the three-bullet feature list, and the shared `router.back()` dismiss behaviour across all three paywall branches.

## Task Commits

1. **Task 1: Make the paywall contextual and add the examiner explainer branch** - `aed6588` (feat)
2. **Task 2: Give the three exam gates their paywall context, and pin the whole wiring** - `f8c18c0` (feat)

**Plan metadata:** committed with this SUMMARY.md (worktree mode — orchestrator handles STATE.md/ROADMAP.md centrally after merge)

## Files Created/Modified

- `ealch-v2/app/paywall.tsx` - adds `PAYWALL_COPY` map, uses `copy.title`/`copy.lead` in the sell-screen headline, adds the `gate:examiner` explainer branch ahead of the already-premium branch
- `ealch-v2/app/exam.tsx` - imports `track`, paper-list gate now tracks `gate_blocked` and pushes `from: 'gate:examiner'`
- `ealch-v2/app/exam-paper.tsx` - both the pre-check gate and the server-refusal gate now push `from: 'gate:examiner'`; their distinct `track('gate_blocked', { ..., from: 'exam-paper' | 'exam-paper-server' })` analytics origins are untouched
- `ealch-v2/src/store/paywallContextWiring.test.ts` - new: 5 source-text assertion suites covering the copy map, the examiner branch, the three call sites, the feature-row count and the dismiss behaviour
- `ealch-v2/src/services/examAttemptWiring.test.ts` - updated one assertion from the literal `router.push('/paywall')` to the new context-carrying push (deviation, see below)
- `ealch-v2/src/store/examSection.logic.test.ts` - same update for its own copy of the same assertion (deviation, see below)

## Decisions Made

- Followed the plan's exact code blocks for the copy map, the examiner branch, and the three call-site edits — no deviation from specified implementation shape.
- Kept the plan's comma-expression form for `exam.tsx`'s ternary (`track(...), router.push(...)`) rather than converting to a block body — the project's lint config accepted it without complaint.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Updated two pre-existing tests broken by this task's own intentional change**
- **Found during:** Task 2 (full-suite verification step)
- **Issue:** `examAttemptWiring.test.ts` and `examSection.logic.test.ts` both contained source-text assertions matching the literal old string `router.push('/paywall')` in `exam-paper.tsx` and `exam.tsx` respectively. This plan intentionally replaces that literal with `router.push({ pathname: '/paywall', params: { from: 'gate:examiner' } })`, so both pre-existing tests failed after Task 2's edits.
- **Fix:** Updated both assertions to match the new context-carrying push, with a comment pointing to `paywallContextWiring.test.ts` as the source of truth for the full contract.
- **Files modified:** `ealch-v2/src/services/examAttemptWiring.test.ts`, `ealch-v2/src/store/examSection.logic.test.ts`
- **Verification:** `npm --prefix ealch-v2 test` — full suite (5379 tests) green after the fix.
- **Committed in:** `f8c18c0` (Task 2 commit)

---

**Total deviations:** 1 auto-fixed (1 bug fix, in-scope — both broken tests asserted exactly the line this task was instructed to change)
**Impact on plan:** No scope creep; both fixes were a direct consequence of Task 2's own specified edits and were required to keep `npm test` green per the task's acceptance criteria.

## Issues Encountered

- This worktree checkout has no `node_modules` (git worktrees don't carry gitignored directories). Created a temporary Windows junction (`ealch-v2/node_modules` → the main checkout's `ealch-v2/node_modules`, via `fs.symlinkSync(..., 'junction')`) to run `tsc --noEmit`, `node --test` and `npm test`. Removed the junction (`fs.rmdirSync`) before the final commit; confirmed absent from `git status --short` throughout — no tracked file or commit is affected.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- `gate:examiner` is now a fully wired, testable paywall trigger — any future exam-gate call site should reuse `from: 'gate:examiner'` rather than pushing bare.
- Manual device verification (four distinct paywall screens: lesson gate, coach cap, roleplay cap, exam paper) is deferred to Plan 07's device checkpoint per the plan's own `<verification>` section — not performed in this plan.
- No blockers. `tsc --noEmit` is clean and the full `npm --prefix ealch-v2 test` suite (5379 tests) is green.

---
*Phase: 05-paywall-coverage-expansion-upgrade-nudge*
*Completed: 2026-09-20*

## Self-Check: PASSED

- FOUND: ealch-v2/app/paywall.tsx
- FOUND: ealch-v2/app/exam.tsx
- FOUND: ealch-v2/app/exam-paper.tsx
- FOUND: ealch-v2/src/store/paywallContextWiring.test.ts
- FOUND commit: aed6588 (feat: paywall contextual copy + examiner explainer)
- FOUND commit: f8c18c0 (feat: exam gates wired to paywall context)
