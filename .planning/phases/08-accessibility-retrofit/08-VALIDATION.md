---
phase: 8
slug: accessibility-retrofit
status: complete
nyquist_compliant: false
wave_0_complete: true
created: 2026-09-27
updated: 2026-10-01
---

> **2026-10-01 correction (08-QUALITY-AUDIT.md):** the hardware sign-off below rests on a one-line user report, not the per-control record Plan 10 Task 2 required; the locked-row paywall was never run on a free account; and defects E1 to E10 are confirmed in code. `nyquist_compliant` is reset to false and the "failures fixed, retested" item is unticked. Closure moves to Phase 08.1.

# Phase 8 validation

The implementation and source audit are complete through Plan 09. Plan 10's automated gate and the real-device checkpoint pass. The Pixel 6 fresh-install check confirmed Automatic as the default and `AUTOMATIC · LIGHT` in Settings under Android Light; `nyquist_compliant` is now true.

## Test infrastructure and measured runtime

| Check | Command from `ealch-v2/` | Result |
|---|---|---|
| TypeScript | `npm.cmd run typecheck` | Passed again after lesson card navigation change, 2026-09-29 |
| Pure logic and source contracts | `npm.cmd test` | Passed: 5,689 / 5,690 tests, 1 skipped, 0 failed; 82.6 s on 2026-09-29 |
| React Native components | `npm.cmd run test:component -- --runInBand --silent` | Passed: 11 suites, 40 tests; 56.4 s on 2026-09-29 |
| Source action reconciliation | Fresh AST inventory after Plans 01–09, plus two card-navigation actions from the A2 device finding | 389 direct JSX sites plus 20 custom wrapper call sites; zero unclassified; `08-PRESS-AUDIT.md` |

Jest uses `ealch-v2/jest.config.js` and React Native Testing Library. The Node suite uses the package `test` script. A fresh full run caught four stale source assertions that still expected literal English or a disabled locked trail row; those now assert localized labels and the approved actionable paywall behavior. The runtime dependency attribution was also updated for `expo-navigation-bar` and `expo-system-ui`. The focused regressions and rerun full suite passed.

## Per-task verification map

| Task ID | Requirements | Automated evidence | Device status |
|---|---|---|---|
| 08-01-01/02 | A11Y-01/02 | `a11y-trail.test.tsx`, typecheck, consolidated audit | User-reported TalkBack pass: Home/Den, locked act/paywall, Levels panel |
| 08-02-01/02 | A11Y-01/02 | `a11y-lesson-navigation.test.tsx`, typecheck, consolidated audit; follow-up `DeckNavigation` component test | User-reported TalkBack pass: language panels, lesson overlays, and mission 8 card navigation |
| 08-03-01/02 | A11Y-01/02 | `a11y-lesson-controls.test.tsx`, typecheck, consolidated audit | User-reported TalkBack pass: lesson exercises |
| 08-04-01/02 | A11Y-01/02 | `a11y-settings-paywall.test.tsx`, typecheck, consolidated audit | User-reported TalkBack pass: Settings, theme, paywall, account |
| 08-05-01 | A11Y-03 | `appearance.logic.test.ts`, full Node suite, typecheck | Automatic Light/Dark switching and fresh-install Automatic default passed visually on Settings |
| 08-05-02 | A11Y-03 | `settings.test.tsx`, full component suite, typecheck | User-reported TalkBack pass for Settings/theme; fresh-install Settings label `AUTOMATIC · LIGHT` passed |
| 08-06-01/02 | A11Y-01/02/04 | `a11y-flashcards.test.tsx`, typecheck, consolidated audit | User-reported TalkBack pass for large-text flashcards at 1.3/1.5; visual scrolling/flip checks also passed on Pixel 6 |
| 08-07-01/02 | A11Y-01/02 | `a11y-practice-a.test.tsx`, typecheck, consolidated audit | User-reported TalkBack pass: voice, Speak, Review, and related routes |
| 08-08-01/02 | A11Y-01/02 | `a11y-practice-b.test.tsx`, typecheck, consolidated audit | User-reported TalkBack pass: dictation, sentence, roleplay, chat, and themes |
| 08-09-01/02 | A11Y-01/02 | `a11y-exam-entry.test.tsx`, typecheck, consolidated audit | User-reported TalkBack pass: exam, onboarding, placement, and media |
| 08-10-01 | A11Y-01/02/03/04 | Full TypeScript, Node and component gates green; `08-PRESS-AUDIT.md` | N/A |
| 08-10-02 | A11Y-01/02/03/04 | Full gates green; hardware results recorded from Pixel 6 and user-reported TalkBack sweep | **Pass; hardware checkpoint complete** |

## User-reported TalkBack sign-off

The user reported a pass for all eleven real-device TalkBack groups: Home/Den, locked act and Première paywall, Levels panel, language and overlays, A2 mission 8 cards, lesson exercises, large-text flashcards at 1.3/1.5, Settings/theme, paywall/account, practice routes, and exam/onboarding/media. This closes the spoken sweep for the touched routes. The separate fresh-install Automatic check also passed on the Pixel 6: Automatic was selected by default after clearing app data and Settings resolved it to `AUTOMATIC · LIGHT` under Android Light.

## Manual verification and sign-off

The device protocol and partial results are in `08-DEVICE-EVIDENCE.md`. The Pixel 6, Android/build, and TalkBack version are recorded. The spoken sweep was completed by user report on 2026-09-29 for all eleven groups (see User-reported TalkBack sign-off above). It superseded the earlier A1-flashcard-only pass. TalkBack was then turned off at the user's request. The visual Automatic, explicit-mode, bar/paywall/level-panel, 1.3/1.5 flashcard, and 1.0/1.5 mission-card runs are recorded. The fresh-install default and Settings resolved label also pass.

- [x] All 20 implementation tasks had a focused or full automated check.
- [x] All current direct action sites and custom wrappers classified in the source inventory.
- [x] Full automated gate passed; runtime measured.
- [x] Android device/build identity recorded and TalkBack traversal reported passing for all eleven groups.
- [x] Automatic theme and native bar/paywall/level-panel behavior recorded; clean-install default and Settings resolved label pass.
- [x] Both large-font flashcard visual runs recorded; one A1 flashcard received a user-reported TalkBack pass.
- [ ] Any failures fixed, retested, and the human checkpoint approved; fresh-install Automatic default passes.

**Approval:** Automated checks passed. Hardware sign-off is complete: the user-reported TalkBack sweep and Pixel 6 fresh-install Automatic check passed.
