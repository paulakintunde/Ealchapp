---
phase: 08-accessibility-retrofit
plan: "08"
subsystem: practice-routes
tags: [accessibility, dictation, sentence, roleplay, chat, themes]
requires:
  - phase: 08-accessibility-retrofit
    provides: Plans 01-07 semantic controls and shared audit patterns
provides:
  - Named roles and states for 38 dictation, sentence, roleplay, chat, and theme action sites
  - Separate focus stops for dictation previews and sentence word actions
  - Per-site practice-route action audit
affects: [08-09, 08-10]
tech-stack:
  added: []
  patterns: [localized action labels tied to current handler state]
key-files:
  created: [.planning/phases/08-accessibility-retrofit/08-AUDIT-08.md, ealch-v2/__tests__/a11y-practice-b.test.tsx]
  modified: [ealch-v2/app/dictation.tsx, ealch-v2/app/dictationhub.tsx, ealch-v2/app/dictationthemes.tsx, ealch-v2/app/sentence.tsx, ealch-v2/app/sentencehub.tsx, ealch-v2/app/sentencethemes.tsx, ealch-v2/app/roleplay.tsx, ealch-v2/app/roleplayhub.tsx, ealch-v2/app/chat.tsx, ealch-v2/app/theme.tsx, ealch-v2/app/themes.tsx, ealch-v2/src/i18n/strings.ts, ealch-v2/scripts/phase8-audit-sites.cjs]
key-decisions:
  - "Dictation previews and sentence word actions use separate focus stops."
  - "Playback, recording, send, word tile, and paywall labels name the current action in the app language."
requirements-completed: [A11Y-01, A11Y-02]
duration: ~40min
completed: 2026-09-28
---

# Phase 8 Plan 08: Practice route controls

All 38 action sites across 11 assigned routes are reconciled in `08-AUDIT-08.md`. Dictation playback and previews, sentence word audio and recording, roleplay level selection and microphone, chat send and microphone, and theme level filters expose explicit roles, names, and relevant state. The two nested dictation controls and nested sentence word controls were split into separate focus stops. Authored French learning text, scoring, microphone, and network handlers remain unchanged.

## Verification

- `npm.cmd run typecheck`: passed.
- `npm.cmd run test:component -- --runInBand --silent __tests__/a11y-practice-b.test.tsx`: 3 tests passed for dictation playback name, theme selection state, and chat microphone/send semantics.
- `node scripts/phase8-audit-sites.cjs` over all 11 routes: 38 sites; no unset role/name source.
- `git diff --check`: passed.
- Android TalkBack traversal and hardware microphone remain in Plan 10.

## Deviations from Plan

- The shared audit generator now retains longer expression text so complex dynamic labels remain reviewable in the Markdown table.

## Self-Check: PASSED

All assigned action sites are inventoried; typecheck and focused tests pass.

## Next Phase Readiness

Ready for Plan 09's remaining route and shared component audit.
