---
phase: 08-accessibility-retrofit
plan: "07"
subsystem: practice-routes
tags: [accessibility, flashcards, speech, review]
requires:
  - phase: 08-accessibility-retrofit
    provides: Plans 01-06 semantic controls and flashcard layout
provides:
  - Named roles and states for 45 flash, voice, speech, and review actions
  - Live microphone start/stop announcements
  - Per-site practice-route action audit
affects: [08-08, 08-10]
tech-stack:
  added: []
  patterns: [localized action labels tied to current handler state]
key-files:
  created: [.planning/phases/08-accessibility-retrofit/08-AUDIT-07.md, ealch-v2/__tests__/a11y-practice-a.test.tsx]
  modified: [ealch-v2/app/flashhub.tsx, ealch-v2/app/flashthemes.tsx, ealch-v2/app/flashtypes.tsx, ealch-v2/app/voiceflash.tsx, ealch-v2/app/voicehub.tsx, ealch-v2/app/voices.tsx, ealch-v2/app/voicethemes.tsx, ealch-v2/app/speak.tsx, ealch-v2/app/smartreview.tsx, ealch-v2/app/review.tsx, ealch-v2/src/i18n/strings.ts]
key-decisions:
  - "Difficulty chips announce radio selection; route cards announce button names and live counts."
  - "Mic buttons announce Start recording or Stop recording from actual listening state."
requirements-completed: [A11Y-01, A11Y-02]
duration: ~40min
completed: 2026-09-28
---

# Phase 8 Plan 07: Practice route controls

All 45 action sites across 11 assigned routes have been reconciled in `08-AUDIT-07.md`. Route cards, playback, grading, review, Close, Settings, Next, and microphone controls expose button roles and accessible names. The flashcard difficulty filter is a radio choice with selected state. Voice audition indicates the currently playing voice. Voice Flash and Speak microphone labels change with listening state. The two Speak report actions now show localized report text. Speech scoring, review scheduling, and route handlers remain unchanged.

## Verification

- `npm.cmd run typecheck`: passed.
- `npm.cmd run test:component -- --runInBand --silent __tests__/a11y-practice-a.test.tsx`: 3 tests passed for radio selection, recording action transition, and review navigation.
- `node scripts/phase8-audit-sites.cjs` over all 11 routes: 45 sites; no unset role/name source.
- `git diff --check`: passed.
- Android TalkBack traversal and microphone hardware remain in Plan 10.

## Deviations from Plan

- The dev-only voice audition route is included in the audit. Its action is named in the app language even though its instructional text remains developer-facing.
- `speakmap.tsx` already had a named, disabled station button, so it required no code change.

## Self-Check: PASSED

All assigned action sites are inventoried, typecheck and focused tests pass, and scoring handlers were not modified.

## Next Phase Readiness

Ready for Plan 08's dictation, sentence, roleplay, chat, and theme route audit.
