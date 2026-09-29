# Phase 8 Android device evidence

**Status:** Pending the blocking Plan 10 hardware checkpoint. A Pixel 6 connected on 2026-09-28 and the Phase 8 debug APK was installed. Visual theme and large-text flashcard checks are recorded below. The spoken TalkBack sweep and fresh-install default remain open.

## Build and environment

| Field | Recorded value |
|---|---|
| Source branch | `feat/sons-course` |
| App source version | `1.0.0` (`ealch-v2/app.json`) |
| Android package | `app.ealch.mobile` |
| Installed native build identifier | Local Phase 8 `arm64-v8a` debug APK, `versionCode=1`, `versionName=1.0.0`, `lastUpdateTime=2026-09-28 09:04:48`; original `firstInstallTime=2026-08-25 04:24:24` confirms an in-place update. APK `LastWriteTime=2026-09-28 08:57:28` (device-local time). |
| Device model / Android version | Pixel 6 (`oriole`, serial `21041FDF600BMN`), Android 17 |
| TalkBack version and enabled state | TalkBack `17.0.1.926549743` installed; accessibility service setting `null` (off). |
| OS font scales tested | Baseline 1.0; device runs at 1.3 and 1.5 on 2026-09-28. Restored to 1.0 afterward. |
| Connected devices | Pixel 6: `21041FDF600BMN device` (`adb devices -l`, 2026-09-28) |
| Baseline device appearance | Light (`cmd uimode night` = `Night mode: no`) |

## Automated verification

| Command, from `ealch-v2/` | Result | Notes |
|---|---|---|
| `npm.cmd run typecheck` | Passed | Plan 10 full gate; rerun after attribution and test updates before checkpoint |
| `npm.cmd test` | Passed | 5,689 passed, 1 skipped, 0 failed; 94.3 s |
| `npm.cmd run test:component -- --runInBand --silent` | Passed | 11 suites, 39 tests; 67.7 s |
| Fresh source action inventory | Passed source classification | 387 direct JSX sites, 20 custom wrapper call sites, 0 unclassified; see `08-PRESS-AUDIT.md` |

## Native build attempt

On 2026-09-28, `expo prebuild --platform android --no-install --no-clean` completed. The first `gradlew assembleDebug` attempt failed after 27m 29s at `:react-native-reanimated:buildCMakeDebug[armeabi-v7a][reanimated]`: Ninja reported `manifest 'build.ninja' still dirty after 100 tries`. A retry with `-PreactNativeArchitectures=arm64-v8a --max-workers=2 --no-parallel` passed; `adb install -r` succeeded, retaining the original install time. Native theme and flashcard behavior was then checked as recorded below.

The first Metro launch reached Expo's `DevLauncherErrorActivity` because the manifest request failed with `UnexpectedServerError`; the CLI's signed-in-user lookup attempted an online request. Restarting Metro with `EXPO_OFFLINE=1` cleared the error. The Android bundle completed (3,042 modules, 30.7 s) and `dumpsys window` showed `app.ealch.mobile/.MainActivity` foregrounded; a screenshot showed Ealch's home screen. UIAutomator `dump` twice returned `ERROR: could not get idle state`, so no accessibility-tree or spoken TalkBack conclusion is inferred from the screenshot.

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
| Fresh install defaults to Automatic and Settings shows resolved Light/Dark | Partial | Existing app data was preserved, so fresh-install default is not hardware-tested. With Automatic selected, Settings displayed `Automatic · Light` and `Automatic · Dark` as Android changed. |
| While app remains open, OS Light → Dark → Light updates screen, sheets, paywall, status and navigation bars | Pass visually; TalkBack pending | Passed on Settings (Light → Dark → Light), the subscribed Première paywall variant (Light → Dark), the Levels choices screen (Dark → Light), and the open Den level panel (Light → Dark → Light), including status and navigation bars. Spoken TalkBack overlay behavior remains pending. |
| Save explicit Dark, force-stop/reopen; Dark persists through OS changes | Pass | Existing saved Dark survived APK update. Re-selected Dark while Android Light; after force-stop/reopen, home was Dark and Settings still selected Dark. Android Dark was then applied while Settings remained open; Dark stayed selected. |
| Save explicit Light, force-stop/reopen; Light persists through OS changes | Pass | Selected Light while Android Dark; Settings switched Light. After force-stop/reopen, home was Light and Settings still selected Light with Android Dark. Restored device to its original Light mode and app to its original saved Dark choice afterward. |

One exploratory pass showed `Automatic · Dark` in Settings while `cmd uimode night` reported Light after rapid OS/preference changes. A clean app relaunch under Automatic showed Light. A controlled retest then changed Automatic Light → explicit Dark → Automatic Light correctly without relaunch, and the open level panel followed Light → Dark → Light. The mismatch did not recur in that retest; it remains a transient observation, not a claimed stable pass for the untested sequence. The app's original explicit Dark preference was restored.

## Large OS text and flashcards

| Case | Result | Observation / failure and retest |
|---|---|---|
| OS font scale 1.3; long front and back, both deck directions | Pass visually; TalkBack pending | On the long vocabulary card `fr.b2.traditions.003`, both FR→EN and EN→FR fronts and backs were readable with progress and Flip/answer controls fixed. The long grammar back `fr.b1.expressions-de-quantite.1134` scrolled to its final note; controls stayed visible. No answer was graded. |
| OS font scale 1.5; long front and back, both deck directions | Pass visually; TalkBack pending | The long vocabulary front in FR→EN needed scrolling to its last line; its back was readable. EN→FR front/back were readable. The grammar back needed scrolling; the English explanation and final French examples were reachable at the end. Progress, Flip, pronunciation where present, and answer controls remained visible. No answer was graded. |
| Flip after scrolling either face | Pass visually; TalkBack pending | At 1.3 and 1.5, flipping a scrolled grammar back away and back reset it to the first line. At 1.5, changing vocabulary direction reset to its new front. Turned-away face reachability still needs spoken TalkBack verification. |

Changing Android font scale to 1.5 while a flashcard was open returned the app to Home; reopening the card at 1.5 allowed the checks above. This live configuration-change route behavior is recorded for follow-up and is not treated as proof of missing flashcard text. The original OS Light, app Dark, and font scale 1.0 were restored; TalkBack remained off.

## Checkpoint decision

Pending. Record the tested device, Android version, installed build, TalkBack state, per-group results, theme transitions, both font scales, and passing retests before marking any hardware item complete. Then the user can approve the GSD checkpoint.
