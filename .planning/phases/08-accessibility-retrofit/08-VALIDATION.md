---
phase: 8
slug: accessibility-retrofit
status: awaiting_device
nyquist_compliant: false
wave_0_complete: true
created: 2026-09-27
updated: 2026-09-28
---

# Phase 8 validation

The implementation and source audit are complete through Plan 09. Plan 10 Task 1's automated gate passes. The blocking real-device checkpoint remains pending; `nyquist_compliant` stays false until hardware evidence passes and is approved.

## Test infrastructure and measured runtime

| Check | Command from `ealch-v2/` | Result |
|---|---|---|
| TypeScript | `npm.cmd run typecheck` | Passed, about 32 s |
| Pure logic and source contracts | `npm.cmd test` | Passed: 5,689 / 5,690 tests, 1 skipped, 0 failed; 94.3 s |
| React Native components | `npm.cmd run test:component -- --runInBand --silent` | Passed: 11 suites, 39 tests; 67.7 s |
| Source action reconciliation | Fresh AST inventory after Plans 01–09 | 387 direct JSX sites plus 20 custom wrapper call sites; zero unclassified; `08-PRESS-AUDIT.md` |

Jest uses `ealch-v2/jest.config.js` and React Native Testing Library. The Node suite uses the package `test` script. A fresh full run caught four stale source assertions that still expected literal English or a disabled locked trail row; those now assert localized labels and the approved actionable paywall behavior. The runtime dependency attribution was also updated for `expo-navigation-bar` and `expo-system-ui`. The focused regressions and rerun full suite passed.

## Per-task verification map

| Task ID | Requirements | Automated evidence | Device status |
|---|---|---|---|
| 08-01-01/02 | A11Y-01/02 | `a11y-trail.test.tsx`, typecheck, consolidated audit | Pending TalkBack |
| 08-02-01/02 | A11Y-01/02 | `a11y-lesson-navigation.test.tsx`, typecheck, consolidated audit | Pending TalkBack panels/overlays |
| 08-03-01/02 | A11Y-01/02 | `a11y-lesson-controls.test.tsx`, typecheck, consolidated audit | Pending TalkBack |
| 08-04-01/02 | A11Y-01/02 | `a11y-settings-paywall.test.tsx`, typecheck, consolidated audit | Pending TalkBack/paywall |
| 08-05-01 | A11Y-03 | `appearance.logic.test.ts`, full Node suite, typecheck | Pending OS theme switch |
| 08-05-02 | A11Y-03 | `settings.test.tsx`, full component suite, typecheck | Pending native bars/sheets/restart |
| 08-06-01/02 | A11Y-01/02/04 | `a11y-flashcards.test.tsx`, typecheck, consolidated audit | Pending font 1.3+ and TalkBack |
| 08-07-01/02 | A11Y-01/02 | `a11y-practice-a.test.tsx`, typecheck, consolidated audit | Pending TalkBack |
| 08-08-01/02 | A11Y-01/02 | `a11y-practice-b.test.tsx`, typecheck, consolidated audit | Pending TalkBack |
| 08-09-01/02 | A11Y-01/02 | `a11y-exam-entry.test.tsx`, typecheck, consolidated audit | Pending TalkBack |
| 08-10-01 | A11Y-01/02/03/04 | Full TypeScript, Node and component gates green; `08-PRESS-AUDIT.md` | N/A |
| 08-10-02 | A11Y-01/02/03/04 | Full gates green; hardware cannot be inferred from tests | **Blocking checkpoint pending** |

## Manual verification and sign-off

The device protocol and empty result fields are in `08-DEVICE-EVIDENCE.md`. Record device model, Android/installed build and TalkBack version. Sweep all touched screens with panel title-first focus, covered-background suppression, truthful lock/paywall action, and stateful controls. Verify Automatic against OS light/dark changes while open and after explicit-mode restarts, including bars, sheets and paywall. At font scale 1.3 and a higher scale, verify long flashcards scroll fully in both directions, the new face resets to top, and progress/actions stay visible.

- [x] All 20 implementation tasks had a focused or full automated check.
- [x] All current direct action sites and custom wrappers classified in the source inventory.
- [x] Full automated gate passed; runtime measured.
- [ ] Android device/build identity and TalkBack traversal recorded.
- [ ] Automatic theme and native bar/sheet behavior recorded.
- [ ] Both large-font flashcard runs recorded.
- [ ] Any failures fixed, retested, and the human checkpoint approved.

**Approval:** Automated checks passed. Hardware sign-off remains open; Phase 8 is not yet verified complete.
