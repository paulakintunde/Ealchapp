---
phase: 10-feedback-rating-flow
plan: "06"
subsystem: feedback-client
tags: [outbox, claim-then-send, privacy, delete-account]
requires: ["10-03", "10-04", "10-05"]
provides:
  - problemReport.ts (submitProblemReport, flushProblemReportOutbox, clearProblemReportOutbox, collectContext)
  - ENV.reportProblemFunction
  - launch/foreground flush in _layout.tsx
  - delete-account clears the report outbox and sends install_id
affects: [10-08, 10-10, 10-13, 10-14 entry points; 10-09 deploy]
key-files:
  created:
    - ealch-v2/src/services/problemReport.ts
    - ealch-v2/__tests__/problemReport-queue-phase10.test.tsx
    - ealch-v2/__tests__/delete-account-outbox-phase10.test.tsx
  modified:
    - ealch-v2/src/services/env.ts
    - ealch-v2/app/_layout.tsx
    - ealch-v2/src/services/auth.ts
decisions:
  - "Draft input to submitProblemReport is {category, details, contact, screen, lesson_id, item_id, theme}; report_id, install_id and context are added by the service."
  - "A flush skips report_ids whose first send is still in flight in this process, so a submit and a flush never double-send."
  - "save-failed is returned only when the claim write failed AND the send did not succeed (including a 4xx)."
metrics:
  tasks: 2
  completed: 2026-10-15
---

# Phase 10 Plan 06: Report service Summary

Claim-then-send report delivery on one promise queue: the report is in the outbox before any network call, 429 holds until the next UTC midnight, and queued reports flush on launch and each foreground.

## Commits
- 6bb9488 feat(10-06): service, env key, _layout flush, auth delete-account change
- 12cfa35 test(10-06): behaviour tests

## Verification
- `node node_modules/jest/bin/jest.js` on the two new files: 13 pass.
- Full jest: 145 pass; only the two known baseline failures (analytics-phase9, onboarding-phase9).
- `tsc --noEmit` clean.
- grep gate: 0 matches for email, logError, REPORT_LAST in problemReport.ts. claimReport precedes `await send(`.
- Not run: `npm test` (node --test) in full; the logic tests are unchanged by this plan.

## Design note (D-20, accepted)
`deleteAccount()` clears the report outbox BEFORE calling delete-account. If the delete then fails, queued reports are lost. D-20 accepts this, because a queued report must never recreate a row after deletion.

## Deviations from Plan
- None in behaviour. The delete-account test mocks `@/services/analytics`, so the installIdSafe fallback to AsyncStorage was not needed (auth.ts already imported analytics, no cycle); installIdSafe returns null if installId() throws.
- The 15 s timer from a never-answering send can leave a worker-exit warning in jest ("worker failed to exit gracefully"); tests pass.

## D-37 / D-46
env.ts, _layout.tsx and auth.ts were clean before editing; `git diff --stat` before each commit showed only own hunks (env +1, _layout +3, auth +16/-2). Flag: 08.1-02-PLAN lists `_layout.tsx` and has no SUMMARY yet, so it is still unexecuted and will need to rebase over these three added lines.

## Known Stubs
None.

## Threat Flags
None beyond the plan's threat model.

## Self-Check: PASSED
All six files exist; commits 6bb9488 and 12cfa35 are in git log.
