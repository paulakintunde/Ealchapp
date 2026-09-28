---
phase: 08-accessibility-retrofit
plan: "01"
subsystem: ui
tags: [accessibility, TalkBack, trail, navigation, React Native]
requires:
  - phase: 07.1-concept-c-spine-rewrite-trail-act-screen-language-control
    provides: Current Den trail, Levels page, and panel controls
provides:
  - Localized action semantics for core navigation and trail
  - Title-first Levels panel focus and background suppression
  - Per-site core action audit and component regression checks
affects: [08-02, 08-10]
tech-stack:
  added: []
  patterns: [neutral Press primitive, semantic role at call site, named modal title focus]
key-files:
  created: [.planning/phases/08-accessibility-retrofit/08-AUDIT-01.md, ealch-v2/__tests__/a11y-trail.test.tsx]
  modified: [ealch-v2/app/home.tsx, ealch-v2/app/den.tsx, ealch-v2/src/components/TrailRow.tsx, ealch-v2/src/components/LevelPanel.tsx, ealch-v2/src/components/ui.tsx, ealch-v2/src/i18n/strings.ts]
key-decisions:
  - "Keep Press neutral and assign roles to the concrete action, including tabs and switches."
  - "Keep a locked trail row enabled because it opens the Première paywall."
requirements-completed: [A11Y-01, A11Y-02]
duration: ~90min
completed: 2026-09-28
---

# Phase 8 Plan 01: Core navigation accessibility

Trail rows now announce title, progress, lock state, and the actual destination as one action. Fiche remains a separate action. Home's nested word-audio and vocabulary controls were separated from their parent actions, icon-only navigation received localized names, tabs expose selection, and the shared Button exposes its name and disabled state. The Levels panel focuses its title on layout, hides the Den beneath it while open, and returns focus to the level chip on dismissal.

## Verification

- `npm.cmd run typecheck`: passed.
- `npm.cmd run test:component -- --runInBand __tests__/a11y-trail.test.tsx`: 4 passed.
- `npm.cmd run test:component -- --runInBand __tests__/settings.test.tsx __tests__/toggle.test.tsx`: 5 passed.
- `git diff --check`: passed.
- Per-site role, label, state, and activation inventory: `08-AUDIT-01.md`.
- Real TalkBack order and focus return: reserved for Plan 10's hardware checkpoint.

## Task commits

- Tasks 1 and 2: `1b30f0b` — core semantics, Levels focus, audit, and regression checks.

## Deviations from Plan

- The two tightly coupled tasks landed in one scoped commit because the shared `ui.tsx`, audit, and component test changed together. Implementation and acceptance checks for both tasks are present.
- The local GSD SDK rejected the optional `_auto_chain_active` config key as unknown; execution remained manual and `state.begin-phase` succeeded.

## Self-Check: PASSED

The files listed above exist, the focused checks pass, locked rows have no false disabled or selected state, and the shared `Press` has no blanket button role.

## Next Phase Readiness

Ready for Plan 02's lesson and overlay controls. The native TalkBack sweep remains a Phase 8 completion checkpoint.
