# Phase 8 Pattern Map

**Mapped:** 2026-09-27
**Scope:** Current `ealch-v2/app` and `ealch-v2/src/components` TSX. Inventory command: `rg -n '<Press\b|<Pressable\b|<Button\b|onPress=' ealch-v2/app ealch-v2/src/components -g '*.tsx'`. At planning time it finds 336 `<Press` call sites, 9 direct `<Pressable` call sites, 36 `<Button` call sites, and 2 tappable `Text` elements in `Type.tsx`. Those syntactic forms occur in 87 distinct files. Re-run during execution because source may change. `src/components/ui.tsx` contains the shared `Pressable` implementation; `Button` is a separate semantic wrapper built from `Press`. Comments and components can change counts; the file partition below is the stable audit handoff.

## Existing analogs

| Need | Existing analog | Rule to carry forward |
|------|-----------------|-----------------------|
| Per-action role and name | `src/components/ui.tsx` `Button` and `Toggle`, `src/components/LevelPanel.tsx` `LevelChip` | Keep `Press` neutral; give the always-button `Button` wrapper a button role/name/disabled state; use the actual role and state at remaining call sites. |
| Multi-choice selected state | `src/components/PanelRow.tsx`, `app/levels.tsx` | Selected state belongs to the choice. Do not mark an actionable locked row disabled. |
| Localized accessible labels | `src/components/LanguagePanel.tsx` `LanguageChip`, `src/i18n/strings.ts` | UI words come from `useT()`; authored French stays unchanged. |
| Bounded scrolling overlay | `src/components/LanguagePanel.tsx` and `LevelPanel.tsx` | Sheet body scrolls; backdrop is separate. Add title-first focus and suppress background accessibility. |
| Theme colors | `src/theme/palette.ts`, `src/theme/useTheme.ts`, `app/_layout.tsx` | Binary effective palette; preference may be automatic/dark/light. Keep status/navigation bars coordinated. |
| Flashcard typography | `src/components/Type.tsx`, `src/components/type.logic.ts` | Preserve scaled text; change face layout so overflow scrolls. |
| Component tests | `__tests__/settings.test.tsx`, `__tests__/toggle.test.tsx` | Use RNTL `getByRole` and semantic state assertions; device proof still required. |

## Complete action-site file partition

Each file with a shared `Press` or direct `Pressable` is assigned exactly once. Plan 05 handles appearance code but edits `settings.tsx` after Plan 04. Plan 06 handles `flashcards.tsx`. Plan 10 re-runs the inventory and resolves any newly added sites.

| Plan | Files assigned for semantic audit |
|------|-----------------------------------|
| 01 | `app/home.tsx`, `app/den.tsx`, `app/levels.tsx`; `src/components/ui.tsx`, `TrailCard.tsx`, `TrailGateRow.tsx`, `TrailHeading.tsx`, `TrailRow.tsx`, `LevelPanel.tsx`, `PanelRow.tsx`, `TabBar.tsx` |
| 02 | `app/act.tsx`, `app/lesson.tsx`, `app/fiche.tsx`; `src/components/ActCheckpoint.tsx`, `LanguagePanel.tsx`, `LessonKeyIntro.tsx`, `LessonPager.tsx`, `LessonSection.tsx`, `BottomSheet.tsx`, `DictionaryOverlay.tsx`, `LessonModal.tsx`, `ReferenceSheet.tsx` |
| 03 | `src/components/LessonDeck.tsx`, `LessonRich.tsx`, `MissionRich.tsx`, `MissionSection.tsx`, `QuizRoundsView.tsx`, `ReadingPages.tsx`, `ScenePlayer.tsx`, `TaskView.tsx`, `SilentCards.tsx`, `WordCardXL.tsx`, `WordPractice.tsx`, `SpeedPicker.tsx`, `TimeWheel.tsx`, `Type.tsx` |
| 04 | `app/settings.tsx`, `app/paywall.tsx`, `app/profile.tsx`, `app/signin.tsx`, `app/reset.tsx`, `app/delete-account.tsx`, `app/licences.tsx`, `app/feedback.tsx`; `src/components/AuthFields.tsx`, `PushBanner.tsx`, `ErrorScreen.tsx` |
| 06 | `app/flashcards.tsx` |
| 07 | `app/flashhub.tsx`, `app/flashthemes.tsx`, `app/flashtypes.tsx`, `app/voiceflash.tsx`, `app/voicehub.tsx`, `app/voices.tsx`, `app/voicethemes.tsx`, `app/speak.tsx`, `app/speakmap.tsx`, `app/smartreview.tsx`, `app/review.tsx` |
| 08 | `app/dictation.tsx`, `app/dictationhub.tsx`, `app/dictationthemes.tsx`, `app/sentence.tsx`, `app/sentencehub.tsx`, `app/sentencethemes.tsx`, `app/roleplay.tsx`, `app/roleplayhub.tsx`, `app/chat.tsx`, `app/theme.tsx`, `app/themes.tsx` |
| 09 | `app/downloads.tsx`, `app/exam.tsx`, `app/exam-paper.tsx`, `app/exam-report.tsx`, `app/exam-section.tsx`, `app/narrated.tsx`, `app/onboarding.tsx`, `app/placement.tsx`, `app/player.tsx`, `app/playlists.tsx`, `app/preroll.tsx`; `src/components/ExamAudioPart.tsx`, `ExamClock.tsx`, `ExamDebateTask.tsx`, `ExamInterlocutorTask.tsx`, `ExamSpeakTask.tsx` |

The bare component names in `src/components` rows all resolve under `ealch-v2/src/components/`; bare app names resolve under `ealch-v2/app/`. Direct `Pressable` sites include backdrops in `LevelPanel`, `LanguagePanel`, `BottomSheet`, `DictionaryOverlay`, `LessonModal`, `WordPractice`, plus `ErrorScreen` and the `ui.tsx` wrapper. Treat a backdrop as a separate dismiss action only if it is meant to be reachable; do not let it swallow panel focus or expose background content.

## Verification handoff

- Each semantic batch writes `08-AUDIT-NN.md` during execution with a row per action site: file:line or stable action ID, actual role, accessible name source, state/value, and expected activation. Include shared `Press`, direct `Pressable`, `Button`, and tappable `Text`, and inspect custom controls carrying `onPress`. Plan 10 reconciles these into `08-PRESS-AUDIT.md` and adds device results. A static role count cannot stand in for these tables.
- Run `rg -n '<Press\b|<Pressable\b'` again after changes and reconcile all sites with the audit table, including new ones. Decorative or noninteractive instances must be explicitly marked, not silently skipped.
- Keep targeted RNTL tests for representative controls and a real TalkBack pass for every touched screen/overlay. Record hardware/OS/font scale and failures/fixes in device evidence.
