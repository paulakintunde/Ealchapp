# Phase 8 Android device evidence

**Status:** Pending the blocking Plan 10 hardware checkpoint. No Android device was attached to the installed Android SDK's `adb` on 2026-09-28. No TalkBack, theme, or font-scale result is claimed below.

## Build and environment

| Field | Recorded value |
|---|---|
| Source branch | `feat/sons-course` |
| App source version | `1.0.0` (`ealch-v2/app.json`) |
| Android package | `app.ealch.mobile` |
| Installed native build identifier | Pending; must be rebuilt after the Phase 8 Expo config changes |
| Device model / Android version | Pending |
| TalkBack version and enabled state | Pending |
| OS font scales tested | Pending: 1.3 and one higher scale |
| Connected devices | None (`adb devices -l` returned an empty list) |

## Automated verification

| Command, from `ealch-v2/` | Result | Notes |
|---|---|---|
| `npm.cmd run typecheck` | Passed | Plan 10 full gate; rerun after attribution and test updates before checkpoint |
| `npm.cmd test` | Passed | 5,689 passed, 1 skipped, 0 failed; 94.3 s |
| `npm.cmd run test:component -- --runInBand --silent` | Passed | 11 suites, 39 tests; 67.7 s |
| Fresh source action inventory | Passed source classification | 387 direct JSX sites, 20 custom wrapper call sites, 0 unclassified; see `08-PRESS-AUDIT.md` |

## TalkBack sweep: record each actual observation

For each group, traverse every action in reading order. Record spoken name, role, selected/checked/disabled state, activation outcome, focus return, device/build, failure and passing retest. A pass requires all applicable controls in the group; a source assertion alone is insufficient.

| Screen or overlay | Result | Observation / failure and retest |
|---|---|---|
| Home, Den trail, Levels, level panel | Pending | Include locked Acte 00 and act rows: announce lock and Première paywall action. Level panel title first; covered Den unreachable. |
| Act, lesson, Fiche, language panel, reference and dictionary overlays | Pending | One focus stop per action; panel title first, choices next, covered background unreachable, focus returns on close. |
| Settings, paywall, account, profile, downloads | Pending | Purchase/restore and settings actions announce real outcomes; paywall title first and background unreachable. |
| Flashcards and practice routes: voice, speak, review, dictation, sentence, roleplay, chat, themes | Pending | Playback, recording, selection, grading, and navigation names match action/state. |
| Exam, onboarding, placement, player, playlists, narration | Pending | Exam choices/timer, appearance choices, placement and media controls announce correctly. |

## Automatic appearance

| Case | Result | Observation / failure and retest |
|---|---|---|
| Fresh install defaults to Automatic and Settings shows resolved Light/Dark | Pending | |
| While app remains open, OS Light → Dark → Light updates screen, sheets, paywall, status and navigation bars | Pending | |
| Save explicit Dark, force-stop/reopen; Dark persists through OS changes | Pending | |
| Save explicit Light, force-stop/reopen; Light persists through OS changes | Pending | |

## Large OS text and flashcards

| Case | Result | Observation / failure and retest |
|---|---|---|
| OS font scale 1.3; long front and back, both deck directions | Pending | Card text scrolls fully; progress, Flip, pronunciation, and answer controls stay reachable and visible. |
| OS font scale above 1.3; long front and back, both deck directions | Pending | Preserve enlarged text; no clipping or hidden controls. |
| Flip after scrolling either face | Pending | New face begins at the top; turned-away face is unreachable to TalkBack. |

## Checkpoint decision

Pending. Record the tested device, Android version, installed build, TalkBack state, per-group results, theme transitions, both font scales, and passing retests before marking any hardware item complete. Then the user can approve the GSD checkpoint.
