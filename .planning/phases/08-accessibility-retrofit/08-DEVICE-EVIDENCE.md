# Phase 8 Android device evidence

**Status:** Hardware checkpoint complete. A Pixel 6 connected on 2026-09-28 and the Phase 8 debug APK was installed. Visual theme, large-text flashcard, TalkBack, and fresh-install appearance checks are recorded below.

## Build and environment

| Field | Recorded value |
|---|---|
| Source branch | `feat/sons-course` |
| App source version | `1.0.0` (`ealch-v2/app.json`) |
| Android package | `app.ealch.mobile` |
| Installed native build identifier | Local Phase 8 `arm64-v8a` debug APK, `versionCode=1`, `versionName=1.0.0`, `lastUpdateTime=2026-09-28 09:04:48`; original `firstInstallTime=2026-08-25 04:24:24` confirms an in-place update. APK `LastWriteTime=2026-09-28 08:57:28` (device-local time). |
| Device model / Android version | Pixel 6 (`oriole`, serial `21041FDF600BMN`), Android 17 |
| TalkBack version and enabled state | TalkBack `17.0.1.926549743` installed; enabled for the spoken sweep on 2026-09-29 and later left off at the user's request. The user reported passing results for all eleven groups. |
| OS font scales tested | Baseline 1.0; device runs at 1.3 and 1.5 on 2026-09-28; mission 8 revisited at 1.5 on 2026-09-29. Restored to 1.0 afterward. |
| Connected devices | Pixel 6: `21041FDF600BMN device` (`adb devices -l`, 2026-09-28) |
| Baseline device appearance | Light (`cmd uimode night` = `Night mode: no`) |

## Automated verification

| Command, from `ealch-v2/` | Result | Notes |
|---|---|---|
| `npm.cmd run typecheck` | Passed | Reran after the lesson card navigation change on 2026-09-29 |
| `npm.cmd test` | Passed | 5,689 passed, 1 skipped, 0 failed; 82.6 s on 2026-09-29 |
| `npm.cmd run test:component -- --runInBand --silent` | Passed | 11 suites, 40 tests; 56.4 s on 2026-09-29 |
| Fresh source action inventory | Passed source classification | 389 direct JSX sites, including the two new card-navigation actions; 20 custom wrapper call sites, 0 unclassified; see `08-PRESS-AUDIT.md` |

## Native build attempt

On 2026-09-28, `expo prebuild --platform android --no-install --no-clean` completed. The first `gradlew assembleDebug` attempt failed after 27m 29s at `:react-native-reanimated:buildCMakeDebug[armeabi-v7a][reanimated]`: Ninja reported `manifest 'build.ninja' still dirty after 100 tries`. A retry with `-PreactNativeArchitectures=arm64-v8a --max-workers=2 --no-parallel` passed; `adb install -r` succeeded, retaining the original install time. Native theme and flashcard behavior was then checked as recorded below.

The first Metro launch reached Expo's `DevLauncherErrorActivity` because the manifest request failed with `UnexpectedServerError`; the CLI's signed-in-user lookup attempted an online request. Restarting Metro with `EXPO_OFFLINE=1` cleared the error. The Android bundle completed (3,042 modules, 30.7 s) and `dumpsys window` showed `app.ealch.mobile/.MainActivity` foregrounded; a screenshot showed Ealch's home screen. UIAutomator `dump` twice returned `ERROR: could not get idle state`, so no accessibility-tree or spoken TalkBack conclusion is inferred from the screenshot.

## TalkBack sweep: record each actual observation

For each group, traverse every action in reading order. Record spoken name, role, selected/checked/disabled state, activation outcome, focus return, device/build, failure and passing retest. A pass requires all applicable controls in the group; a source assertion alone is insufficient.

| Screen or overlay | Result | Observation / failure and retest |
|---|---|---|
| Home, Den trail, Levels, level panel | Partial; level panel and focus return pass | With TalkBack enabled, opening Den's level panel placed the visible focus rectangle on its `Levels` title. UIAutomator exposed one focusable panel title, seven focusable level choices with Sounds selected, and a Close panel action; no dimmed Den control appeared in that tree. The user reported “Panel pass” after swiping through the title and choices: Sounds was announced as selected, choices followed in order, and Den controls behind the panel were unreachable. After activating Close, the user reported “Focus return pass” for the Den level control and trail actions. The user reported the closed A1 level chip as sounding like “level A, collapsed, tap to activate, tap actions available, use tap with 3 fingers to view.” A2 rows are unlocked on the current account, so the locked-act/paywall announcement cannot be checked with it; the user has a free test account available for a later check. Confirm whether TalkBack says “A1” distinctly; remaining Den actions and locked act/paywall behavior remain pending. |
| Act, lesson, Fiche, language panel, reference and dictionary overlays | Partial; spoken sweep pending | Opened the A2 Den directly after the user confirmed A2 was unlocked. UIAutomator exposed separate actionable act rows and Unit info actions with labels such as `The sentence that stopped. Practice only, no new words.. open act` and `Regular -ER Verbs. Unit info`. Spoken order, activation, panels, overlays, and focus return still need user verification. |
| Settings, paywall, account, profile, downloads | Pending | Purchase/restore and settings actions announce real outcomes; paywall title first and background unreachable. |
| Flashcards and practice routes: voice, speak, review, dictation, sentence, roleplay, chat, themes | Partial | On 2026-09-29, the user reported “Flashcard pass” after checking TalkBack stops for card text, pronunciation, Flip, Again, and Got it, and that only the visible face was reachable after flipping, on the A1 card then open. Other practice routes still need spoken verification. |
| Exam, onboarding, placement, player, playlists, narration | Pending | Exam choices/timer, appearance choices, placement and media controls announce correctly. |

During the A2 lesson sweep, the user confirmed that an act opens and Back behaves normally. On mission 8 of `a2.01.l1` (`One Sound, Four Spellings`), the user found that the instruction to use a two-finger TalkBack swipe was unclear and that the mission did not explain how to advance its cards. The screen had an authored “Swipe. Say each one out loud…” hint, dots, and a decorative chevron, while the bottom `Next` action moved the whole lesson page. The source now adds explicit Previous card/Next card actions, a localized two-finger instruction, current-card-only accessibility exposure, and Previous page/Next page labels. Typecheck, Node suite, and component suite pass after this change. On the Pixel with TalkBack off, the new controls fit on mission 8, Next card moved from `1 of 6` to `2 of 6` without leaving the mission, and Previous card returned to `1 of 6`. **Spoken TalkBack retest pending**; this is not yet a passing accessibility result.

The later user-reported sweep supersedes the earlier pending spoken-retest note for the eleven groups listed above.

After a debug-app restart, Expo's development launcher showed a recorded `java.lang.NullPointerException` in `CxxInspectorPackagerConnection` from 01:00:04 device time and temporarily stalled reconnecting. Metro itself answered at `127.0.0.1:8082`; entering that address in the launcher restored the app without clearing user data. The native crash is a development-runtime observation, not attributed to the lesson card change. A development-only `GO_BACK` warning appeared when trying to close a lesson opened as a root deep link; it was dismissed before the card check.

At font scale 1.5, the mission 8 instruction, all card and page controls, and the full authored hint stayed visible; Next card moved from `1 of 6` to `2 of 6` within mission 8. The phone was restored to font scale 1.0. Spoken TalkBack retest remains pending at the user's request to leave TalkBack off.

The table above contains the pre-sweep partial statuses. The user's completed sweep and final results are recorded in the section below; those eleven groups supersede the earlier pending labels.

## TalkBack user-reported completion

On 2026-09-29, the user completed the requested real-device TalkBack sweep and reported a pass for all eleven groups: Home/Den, locked act and Première paywall, Levels panel, language and overlays, A2 mission 8 cards, lesson exercises, large-text flashcards at 1.3/1.5, Settings/theme, paywall/account, practice routes, and exam/onboarding/media. This confirms the spoken names, roles, states, activation outcomes, and focus behavior for the tested flows. No credentials were recorded. The separate fresh-install Automatic visual/device-state check below also passes.

## Automatic appearance

| Case | Result | Observation / failure and retest |
|---|---|---|
| Fresh install defaults to Automatic and Settings shows resolved Light/Dark | Pass | After `adb shell pm clear app.ealch.mobile` on the Pixel 6, Android was Light (`cmd uimode night` = `Night mode: no`) with font scale `1.0`. The fresh guest onboarding theme step showed `AUTOMATIC` selected and the app rendered Light. Opening Settings directly then showed `AUTOMATIC · LIGHT`. |
| While app remains open, OS Light → Dark → Light updates screen, sheets, paywall, status and navigation bars | Pass visually; TalkBack user-reported | Passed on Settings (Light → Dark → Light), the subscribed Première paywall variant (Light → Dark), the Levels choices screen (Dark → Light), and the open Den level panel (Light → Dark → Light), including status and navigation bars. The user-reported TalkBack sweep covers this route. |
| Save explicit Dark, force-stop/reopen; Dark persists through OS changes | Pass | Existing saved Dark survived APK update. Re-selected Dark while Android Light; after force-stop/reopen, home was Dark and Settings still selected Dark. Android Dark was then applied while Settings remained open; Dark stayed selected. |
| Save explicit Light, force-stop/reopen; Light persists through OS changes | Pass | Selected Light while Android Dark; Settings switched Light. After force-stop/reopen, home was Light and Settings still selected Light with Android Dark. Restored device to its original Light mode and app to its original saved Dark choice afterward. |

One exploratory pass showed `Automatic · Dark` in Settings while `cmd uimode night` reported Light after rapid OS/preference changes. A clean app relaunch under Automatic showed Light. A controlled retest then changed Automatic Light → explicit Dark → Automatic Light correctly without relaunch, and the open level panel followed Light → Dark → Light. The mismatch did not recur in that retest; it remains a transient observation, not a claimed stable pass for the untested sequence. The app's original explicit Dark preference was restored.

## Large OS text and flashcards

| Case | Result | Observation / failure and retest |
|---|---|---|
| OS font scale 1.3; long front and back, both deck directions | Pass visually; TalkBack user-reported | On the long vocabulary card `fr.b2.traditions.003`, both FR→EN and EN→FR fronts and backs were readable with progress and Flip/answer controls fixed. The long grammar back `fr.b1.expressions-de-quantite.1134` scrolled to its final note; controls stayed visible. No answer was graded. |
| OS font scale 1.5; long front and back, both deck directions | Pass visually; TalkBack user-reported | The long vocabulary front in FR→EN needed scrolling to its last line; its back was readable. EN→FR front/back were readable. The grammar back needed scrolling; the English explanation and final French examples were reachable at the end. Progress, Flip, pronunciation where present, and answer controls remained visible. No answer was graded. |
| Flip after scrolling either face | Pass visually; TalkBack user-reported | At 1.3 and 1.5, flipping a scrolled grammar back away and back reset it to the first line. At 1.5, changing vocabulary direction reset to its new front. The user-reported TalkBack sweep confirmed only the visible face is reachable after flipping. |

Changing Android font scale to 1.5 while a flashcard was open returned the app to Home; reopening the card at 1.5 allowed the checks above. This live configuration-change route behavior is recorded for follow-up and is not treated as proof of missing flashcard text. The original OS Light, app Dark, and font scale 1.0 were restored. TalkBack was subsequently enabled by the user for the spoken sweep.

## Checkpoint decision

The spoken TalkBack sweep is complete by user report for all eleven groups. The fresh-install Automatic check now also passes: a cleared install selected Automatic by default, followed the Light OS appearance, and Settings displayed `AUTOMATIC · LIGHT`. The Phase 8 hardware checkpoint is complete.
