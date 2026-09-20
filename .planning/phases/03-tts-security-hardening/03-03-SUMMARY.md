---
phase: 03-tts-security-hardening
plan: 03
subsystem: api
tags: [react-native, expo, node-test, tts]

requires: []
provides:
  - "tts.logic.ts: shouldAttemptRemoteTts() pure predicate"
  - "tts.ts speak() gated on live userId before attempting remote synthesis"
affects: [03-04-tts-security-hardening]

tech-stack:
  added: []
  patterns:
    - "Logic-file pair (tts.logic.ts + tts.logic.test.ts), same discipline as content.logic.ts/examWeighting.logic.ts"

key-files:
  created:
    - ealch-v2/src/services/tts.logic.ts
    - ealch-v2/src/services/tts.logic.test.ts
  modified:
    - ealch-v2/src/services/tts.ts

key-decisions:
  - "Client-side gate is explicitly defense-in-depth, not the security boundary — the real boundary is 03-04's server-side callerUid() check in tts/index.ts"

patterns-established: []

requirements-completed: [SEC-01]

duration: 10min
completed: 2026-09-20
---

# Phase 3 Plan 03: TTS Client Guest Gate Summary

**shouldAttemptRemoteTts() predicate closes D-03's gap — a guest's tts.speak() call never reaches resolveRemote(), regardless of the ttsProvider config flag**

## Performance

- **Duration:** ~10 min
- **Tasks:** 2 (predicate + wiring)
- **Files modified:** 3

## Accomplishments
- `shouldAttemptRemoteTts()` pure predicate, 6/6 node:test cases pass
- Wired into `tts.ts`'s `speak()` via `useStore.getState().userId`
- `npx tsc --noEmit` clean; existing device-path/resolveRemote/playRemote logic untouched

## Task Commits

1. **Task 1 (RED→GREEN): tts.logic.ts + tts.logic.test.ts** - `170fae6` (feat)
2. **Task 2: wire into tts.ts** - `29ecf34` (feat)

## Files Created/Modified
- `ealch-v2/src/services/tts.logic.ts` - Pure guest-gate predicate
- `ealch-v2/src/services/tts.logic.test.ts` - 6 node:test cases
- `ealch-v2/src/services/tts.ts` - `speak()` now calls the predicate before the remote branch

## Decisions Made
None - followed plan as specified.

## Deviations from Plan
None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Client-side half of D-01 is closed. 03-04-PLAN.md's server-side `callerUid()` rejection in `tts/index.ts` is the remaining, primary boundary.
- Note for whoever tests this on-device: editing `tts.ts` during a Metro dev session leaves Android TTS "not bound" until a full app restart (known Fast Refresh artifact, not a regression from this change).

---
*Phase: 03-tts-security-hardening*
*Completed: 2026-09-20*
