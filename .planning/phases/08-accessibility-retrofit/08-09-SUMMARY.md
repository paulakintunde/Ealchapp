---
phase: 08-accessibility-retrofit
plan: "09"
subsystem: exam-entry-media
tags: [accessibility, exam, onboarding, playback, downloads]
requires:
  - phase: 08-accessibility-retrofit
    provides: Plans 01-08 semantic controls and shared audit patterns
provides:
  - Named roles and states for 71 exam, onboarding, placement, player, playlist, narration, and download action sites
  - Per-site exam, entry, and media audit
affects: [08-10]
tech-stack:
  added: []
  patterns: [selected radios for actual choices, state-dependent playback and recording names]
key-files:
  created: [.planning/phases/08-accessibility-retrofit/08-AUDIT-09.md, ealch-v2/__tests__/a11y-exam-entry.test.tsx]
  modified: [ealch-v2/app/downloads.tsx, ealch-v2/app/exam.tsx, ealch-v2/app/exam-paper.tsx, ealch-v2/app/exam-report.tsx, ealch-v2/app/exam-section.tsx, ealch-v2/app/narrated.tsx, ealch-v2/app/onboarding.tsx, ealch-v2/app/placement.tsx, ealch-v2/app/player.tsx, ealch-v2/app/playlists.tsx, ealch-v2/app/preroll.tsx, ealch-v2/src/components/ExamAudioPart.tsx, ealch-v2/src/components/ExamClock.tsx, ealch-v2/src/components/ExamInterlocutorTask.tsx, ealch-v2/src/components/ExamSpeakTask.tsx, ealch-v2/src/i18n/strings.ts]
key-decisions:
  - "Exam mode, question options, placement options, and onboarding choices expose selected radio state."
  - "Player transport, exam audio and timer, and microphone controls name the action available now."
requirements-completed: [A11Y-01, A11Y-02]
duration: ~50min
completed: 2026-09-28
---

# Phase 8 Plan 09: Exam, entry, and media controls

The 71 action sites across all 16 assigned files are reconciled in `08-AUDIT-09.md`. Exam mode and answer choices, onboarding appearance and other choices, placement options, and player transport expose roles, names, and relevant selection or disabled state. Player playback, exam clock, transcript, and recording names follow current state. Plan 05's Automatic/Dark/Light order and default remain intact. Exam attempt, scoring, clock, media, and download service logic was not changed.

## Verification

- `npm.cmd run typecheck`: passed.
- `npm.cmd run test:component -- --runInBand --silent __tests__/a11y-exam-entry.test.tsx`: 4 tests passed for exam mode selection, clock pause/resume, onboarding appearance choices, and player Play/Pause.
- `node scripts/phase8-audit-sites.cjs` over all 16 files plus four custom helper call sites: 71 sites; no unset role/name source.
- `git diff --check`: passed.
- Android TalkBack traversal remains in Plan 10.

## Deviations from Plan

- `ExamDebateTask` already had a named button role, so it required no code edit.
- Existing `ExamClock` labels already matched the timer handler; the audit added its missing explicit button role.

## Self-Check: PASSED

All assigned sites are inventoried; typecheck and focused tests pass.

## Next Phase Readiness

Ready for Plan 10 integration and device verification.
