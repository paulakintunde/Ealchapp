---
phase: 08-accessibility-retrofit
verified: 2026-09-29T00:00:00Z
status: human_needed
score: 4/4 must-haves verified in code; 5 evidence caveats require human decision
overrides_applied: 0
human_verification:
  - test: "Locked act/level row, spoken TalkBack pass, on a genuinely free (no A2 entitlement) account"
    expected: "TalkBack announces the row as locked AND that activating it opens the Ealch Première paywall (T.a11yLockedPaywall = 'locked, opens Ealch Première'), and activation actually routes to /paywall, not into the lesson"
    why_human: "The device evidence explicitly records that the test account had A2 unlocked, so this exact behavior — the one D-04 was written to require — was never exercised with TalkBack live. Code path exists (onLockedPress -> router.push('/paywall', {from:'gate:levels'})) and is unit-testable but the real-device spoken confirmation is outstanding; the user has a free test account available for this."
  - test: "TalkBack traversal of the closed A1 level chip, listening specifically for whether the CEFR level is spoken as a distinct 'A1' versus a generic 'level A'"
    expected: "The level identity is unambiguous by ear"
    why_human: "08-DEVICE-EVIDENCE.md records the actual observed utterance as 'level A, collapsed, tap to activate...' and explicitly flags this as unconfirmed — it was not resolved before sign-off."
  - test: "Per-screen TalkBack re-sweep (or at least a sampled subset) with observation notes captured per screen, matching the granularity already on record for Home/Den, Levels panel, and the A2 mission-8 card fix"
    expected: "Spoken name/role/state/activation/focus-return recorded per screen for the remaining 8 of 11 groups"
    why_human: "08-VALIDATION.md and 08-DEVICE-EVIDENCE.md are explicit that the final sign-off for 8 of the 11 groups (lesson exercises, Settings/theme, paywall/account, practice routes voice/speak/review/dictation/sentence/roleplay/chat/themes, exam/onboarding/placement/media) is a single 'user reported a pass for all eleven groups' statement with no per-screen detail, unlike the earlier partial table which had per-screen observations. This is evidence of a completed pass, but it is not independently reproducible from the written record."
  - test: "Reproduce and resolve (or confirm truly transient) the 'Automatic · Dark' label observed while the OS reported Light after rapid Automatic/explicit switching"
    expected: "Automatic's resolved label always matches the live OS state, with no window where it can read stale"
    why_human: "08-DEVICE-EVIDENCE.md records this exact mismatch once, states it 'did not recur' in a controlled retest, and explicitly does not claim it is resolved. The `useTheme()` memo dependency on `useColorScheme()` looks correct in code, so this reads as a possible RN/OS-timing race rather than a logic bug, but it is undiagnosed."
  - test: "Change the OS font-scale setting while a flashcard screen is open (live, not before opening) and confirm the resulting screen and behavior"
    expected: "Either the app handles the live config change gracefully on the flashcard screen, or this is formally logged as a known follow-up distinct from A11Y-04's clipping requirement"
    why_human: "08-DEVICE-EVIDENCE.md records that this action returns the app to Home rather than clipping text, and explicitly defers it as 'recorded for follow-up' rather than resolving it. It does not falsify A11Y-04 as literally worded (reopening the card at the new scale shows unclipped, scrollable text — verified in code and by the `a11y-flashcards.test.tsx` regression test), but it is a real, undismissed UX gap on the same surface."
---

# Phase 8: Accessibility Retrofit Verification Report

**Phase Goal:** Every interactive control is operable and correctly announced by a screen reader, and dark mode/font-scale behave as advertised.
**Verified:** 2026-09-29
**Status:** human_needed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|---|---|---|
| 1 | Every control built on the shared `Press` announces a correct role per its actual type (button/link/switch/tab), audited per screen (home, lesson flow, settings, paywall first) | ✓ VERIFIED (code) / caveat on device breadth | `Press` in `ealch-v2/src/components/ui.tsx:19-43` sets **no** default `accessibilityRole` — Pitfall 3's blanket-role trap is not present. A full-repo scan of every `<Press` JSX open tag (338 sites in `app/` + `src/components/`) found **zero** sites missing an explicit `accessibilityRole`. Spot-checked real call sites: `Button`→`"button"` (ui.tsx:102), `Toggle`→`"switch"` + `accessibilityState={{checked}}` (ui.tsx:236-238), `TabBar`→`"tab"` + `accessibilityState={{selected}}` (TabBar.tsx:41-43), `MissionRich` sound-lab tabs→`"tab"` + `accessibilityState={{selected}}` (MissionRich.tsx:1341), Settings appearance/accent/avatar/language pickers→`"radio"` + `accessibilityState={{selected}}` (settings.tsx:309,343,376,402,427,506), paywall plan rows→`"radio"` (paywall.tsx:303-306), paywall legal links→`"link"` (paywall.tsx:450,460), `TrailRow` act/acte-0 rows→`"button"` with locked-vs-unlocked label branching (TrailRow.tsx:113-119,159-166). Raw non-`Press` `Pressable` uses (overlay backdrops in `BottomSheet`, `LanguagePanel`, `LevelPanel`, `DictionaryOverlay`, `WordPractice`, `LessonModal`) all carry `accessibilityRole="button"` + a curated `accessibilityLabel`. Automated regression: 8 dedicated `a11y-*.test.tsx` suites (trail, lesson-navigation, lesson-controls, settings-paywall, flashcards, practice-a, practice-b, exam-entry) plus `test:component` all pass. **Device breadth caveat:** the real-device TalkBack sign-off for 8 of 11 groups is a single "user reported pass for all eleven groups" line with no per-screen spoken detail (unlike the earlier partial table, which did have per-screen notes) — see human_verification. |
| 2 | Remaining icon-only/custom buttons not covered by `Press`'s default have explicit, curated accessible labels (not derived from concatenated children) | ✓ VERIFIED | `FocusHeader`'s X/gear icon buttons use `T.a11yClose` / `T.a11yOpenSettings` (ui.tsx:290-291,328-329), not the icon's own content. Flashcard speaker icon buttons use `T.playAudioA11y` (flashcards.tsx:517,589). All overlay-backdrop dismiss presses use `T.a11yDismissPanel`. `TrailRow` composes curated segments (`title`, `releaseLine`, then `T.a11yLockedPaywall` or `T.a11yOpenAct`) rather than reading child `Text` nodes — confirmed in `strings.ts` (`a11yLockedPaywall: 'locked, opens Ealch Première'`, line 1439). New `DeckNavigation` (commit `b5f4fff`) uses `T.lessonPrevCard`/`T.lessonNextCard` labels with `accessibilityState={{disabled}}` at the edges (LessonDeck.tsx:507-533) and is explicitly listed in `08-PRESS-AUDIT.md`'s summary as the two new card-navigation sites — commit b5f4fff is covered by the audit. |
| 3 | Selecting "automatic" theme makes the app follow the OS dark/light setting | ✓ VERIFIED (code) / caveat on one unresolved device observation | `useTheme()` (`src/theme/useTheme.ts`) reads `useColorScheme()` live and recomputes via `useMemo` keyed on `[accent, mode, systemScheme]`, so an OS change while the app is open triggers an immediate re-render — matches D-07. `resolveAppearance(mode, systemScheme)` (`appearance.logic.ts`) returns the saved explicit mode unchanged, or follows the OS only when `automatic`. `useStore.ts`'s `migrate`/`merge` call `normalizeAppearancePreference(s.mode)` unconditionally: an existing persisted `'dark'`/`'light'` passes through unchanged (D-06 — no forced migration to Automatic), while an absent/invalid value falls back to `DEFAULT_APPEARANCE = 'automatic'` (D-05 — fresh installs default to Automatic). Settings renders the resolved label, e.g. `${T.modeAutomatic} · ${t.isDark ? T.modeDark : T.modeLight}` (settings.tsx:366-368), matching D-08. Device evidence: fresh-install-defaults-to-Automatic passed on a cleared Pixel 6 install (`AUTOMATIC · LIGHT`), and both explicit-Dark and explicit-Light survive an APK update through force-stop/reopen and subsequent OS flips. **Caveat:** one exploratory pass recorded `Automatic · Dark` in Settings while the OS actually reported Light, after rapid preference/OS switching; a controlled retest did not reproduce it and the app's own reactive wiring looks correct in code, but the mismatch was never diagnosed or closed — see human_verification. |
| 4 | Increasing the OS font-scale setting no longer clips flashcard text | ✓ VERIFIED (code, test, and device) / caveat on a related but distinct live-reflow bug | `app/flashcards.tsx` renders each face's text inside a bounded `ScrollView` (`flashcard-front-scroll` / `flashcard-back-scroll`, lines 480,549) with `flex: 1` and no `numberOfLines` truncation on the card text (`card.prompt`/`fr`/`en`, lines 488-489, 552-553) — content that overflows scrolls instead of clipping (D-10). `flipCard`/`goCard` call `frontScroll.current?.scrollTo({y:0})` / `backScroll.current?.scrollTo({y:0})` (line ~139-140), returning each face to the top on flip/advance (D-11). Deck progress, Flip, and the audio pill sit outside the scroll region so they stay visible while the card face scrolls (D-12). Regression test `a11y-flashcards.test.tsx` asserts `numberOfLines` is `undefined` on long front/back text at both states, asserts both scroll views are `flex:1`/`nestedScrollEnabled`, and asserts `scrollTo({y:0,animated:false})` fires on both flip and advance — this is a substantive, non-stub test, not a placeholder. Device evidence: OS font scale 1.3 and 1.5 both pass visually on real long vocabulary/grammar cards, front and back, both deck directions, with controls staying fixed. **Caveat:** changing the OS font-scale setting live while a flashcard screen is already open returns the app to Home rather than reflowing in place; reopening the card at the new scale then shows correct, unclipped, scrollable text (which is what was actually device-tested). This does not falsify the stated success criterion as literally worded, but it is a real, open UX gap on the exact same screen — see human_verification. |

**Score:** 4/4 truths hold in code and automated tests; each carries at least one recorded, unresolved device-evidence caveat that requires a human decision rather than a code fix.

### Required Artifacts

| Artifact | Expected | Status | Details |
|---|---|---|---|
| `ealch-v2/src/components/ui.tsx` (`Press`, `Button`, `Toggle`, `FocusHeader`) | Shared control primitive with no blanket role; typed variants set explicit roles/state | ✓ VERIFIED | No default `accessibilityRole` on `Press`; `Button`→button, `Toggle`→switch+state, `FocusHeader` icon buttons→curated labels |
| `ealch-v2/src/components/TrailRow.tsx` | Locked-vs-unlocked act/acte-0 row semantics | ✓ VERIFIED | Composed label branches on `row.locked`, routes to `onPressLocked` (paywall) instead of the lesson when locked |
| `ealch-v2/app/den.tsx` | Trail screen locked-row wiring | ✓ VERIFIED | `onLockedPress` tracks `gate_blocked` and routes to `/paywall?from=gate:levels`, never opens the lesson |
| `ealch-v2/src/theme/appearance.logic.ts`, `ealch-v2/src/theme/useTheme.ts` | Automatic resolution and live OS observation | ✓ VERIFIED | `resolveAppearance`, `normalizeAppearancePreference`, live `useColorScheme()` wiring, all present and covered by `appearance.logic.test.ts` |
| `ealch-v2/app/flashcards.tsx` | Scrollable, non-clipping card faces | ✓ VERIFIED | Bounded `ScrollView` per face, no `numberOfLines`, `scrollTo({y:0})` on flip/advance, controls outside scroll region |
| `ealch-v2/src/components/LessonDeck.tsx` (`DeckNavigation`) | Explicit card-navigation controls added post-device-finding (commit `b5f4fff`) | ✓ VERIFIED | Present, curated labels, disabled edge state, and explicitly named in `08-PRESS-AUDIT.md`'s summary paragraph |
| `ealch-v2/__tests__/a11y-*.test.tsx` (8 files) | Non-stub automated a11y regression coverage | ✓ VERIFIED | 470 combined lines across 8 files; substantive assertions (role/state/label queries, scroll behavior), not placeholders; all pass |
| `.planning/REQUIREMENTS.md` A11Y-01..04 checkboxes / traceability table | Requirement bookkeeping closed out | ⚠️ STALE | Checkboxes still unchecked (`- [ ]`) and traceability rows still read "Pending" despite `08-VALIDATION.md` recording the phase complete — a documentation/bookkeeping gap, not a code gap |

### Key Link Verification

| From | To | Via | Status | Details |
|---|---|---|---|---|
| `TrailRow` locked act row | `/paywall` | `onPressLocked` → `onLockedPress` in `den.tsx` | WIRED | `router.push({pathname:'/paywall', params:{from:'gate:levels'}})`, gated on `row.locked`, never falls through to the lesson route |
| `Settings` appearance radio | `useStore.setMode` → `useTheme()` | `onPress={() => setMode(m)}` then store-driven `useMemo` recompute | WIRED | Confirmed by `settings.test.tsx` and `appearance.logic.test.ts` passing in the full suite |
| `useTheme()` | live OS appearance | `useColorScheme()` react-native hook, included in the `useMemo` dependency array | WIRED | Re-render triggers on OS change while app is foregrounded; device evidence confirms Light→Dark→Light updates screen, sheets, paywall, and system bars |
| `flashcards.tsx` flip/advance | face scroll position | `frontScroll.current.scrollTo` / `backScroll.current.scrollTo` | WIRED | Exercised directly by `a11y-flashcards.test.tsx`'s second test, mocking `ScrollView.prototype.scrollTo` |
| `LessonDeck.tsx`/`LessonRich.tsx` mission cards | `DeckNavigation` | `<DeckNavigation index={...} total={...} onPrevious={...} onNext={...} />` | WIRED | Both `LessonDeck.tsx:464` and `LessonRich.tsx:646` render it; matches the device-evidence A2 mission-8 finding and commit `b5f4fff` |

### Data-Flow Trace (Level 4)

Not applicable in the usual sense (no server/DB-backed dynamic list here) — the relevant "data" is OS state (`useColorScheme()`) and persisted preference (`useStore` mode), both traced above and confirmed live-reactive rather than a static/hardcoded fallback.

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|---|---|---|---|
| Every `<Press` call site has an explicit `accessibilityRole` | Node script scanning all `<Press` JSX opens in `app/` + `src/components` for `accessibilityRole` in the same tag | 338 sites scanned, 0 missing | ✓ PASS |
| TypeScript compiles clean | `npm run typecheck` (ealch-v2) | No errors | ✓ PASS |
| Full Node/pure-logic suite | `npm test` (ealch-v2) | 5,700 passed / 3 failed / 5,703 total | ✓ PASS (the 3 failures are the pre-flagged, uncommitted Phase 9 `useStore`/onboarding version-8 changes — `dayOne.test.ts` "version is still 7", `dayOne.test.ts` partialize key set, `englishMode.test.ts` v6→v7 step — not Phase 8 code, not modified) |
| Component/RNTL suite | `npm run test:component -- --runInBand --silent` | 42 passed / 2 failed / 44 total, 12/13 suites green | ✓ PASS (the 2 failures are in `__tests__/onboarding-phase9.test.tsx`, same pre-flagged uncommitted Phase 9 work — `wizard_id` undefined and a missing `/splash` navigation call, both onboarding-flow specific, unrelated to any Phase 8 file) |

### Requirements Coverage

| Requirement | Source Plan | Description | Status | Evidence |
|---|---|---|---|---|
| A11Y-01 | 08-01..10 | Every `Press`-built control announces a correct role per actual type | ✓ SATISFIED (code); REQUIREMENTS.md checkbox/table not updated | See Truth 1 |
| A11Y-02 | 08-01..10 | Icon-only/custom buttons have curated labels | ✓ SATISFIED (code); REQUIREMENTS.md checkbox/table not updated | See Truth 2 |
| A11Y-03 | 08-05 | Automatic theme follows OS | ✓ SATISFIED (code + device); REQUIREMENTS.md checkbox/table not updated | See Truth 3 |
| A11Y-04 | 08-06 | Flashcard text not clipped at large font-scale | ✓ SATISFIED (code, test, device); REQUIREMENTS.md checkbox/table not updated | See Truth 4 |

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|---|---|---|---|---|
| `.planning/REQUIREMENTS.md` | 24-27, 139-142 | A11Y-01..04 checkboxes unchecked and traceability table still says "Pending" | ℹ️ Info | Bookkeeping only; does not affect the shipped code, but should be closed out alongside this verification |

No `TODO`/`FIXME`/placeholder markers, blanket empty handlers, or hardcoded-empty renders were found in the files inspected for this phase (`ui.tsx`, `TrailRow.tsx`, `den.tsx`, `act.tsx`, `settings.tsx`, `paywall.tsx`, `flashcards.tsx`, `useTheme.ts`, `appearance.logic.ts`, `LessonDeck.tsx`, `TabBar.tsx`, `MissionRich.tsx`, overlay components).

### Human Verification Required

See the `human_verification` block in the frontmatter above for the full list. Summarized:

1. **Locked-row/paywall TalkBack announcement on a genuinely free account** — never exercised with TalkBack live; the test device had A2 unlocked. Code path is correct and unit-verifiable, but this is the one behavior D-04 was specifically written to require, and it remains unconfirmed by ear.
2. **Whether TalkBack reads the level chip as a distinct "A1"** — the recorded observation was "level A, collapsed...", and the phase's own device evidence flags this as unresolved.
3. **Per-screen TalkBack detail for 8 of 11 swept groups** — the final sign-off is one summary line ("user reported pass for all eleven groups"), not independently reviewable per-screen observations like the earlier partial table had.
4. **The one-time "Automatic · Dark" / actual-Light mismatch** — did not recur in a retest, code looks correct, but was never diagnosed or formally closed.
5. **Live OS font-scale change while a flashcard is open returns the app to Home** — a real, open follow-up on the exact screen A11Y-04 targets; does not falsify the literal success criterion (reopening at the new scale is correctly unclipped) but is an unresolved rough edge on the same surface.

### Gaps Summary

No code-level gap was found for any of the four roadmap success criteria — the `Press` role-threading, curated-label, Automatic-theme, and flashcard-scroll implementations all exist, are substantive (not stubs), are wired end-to-end, and are covered by passing automated regression tests specific to this phase. TypeScript, the full Node suite, and the component suite all pass, with the only failures being the three Node tests and two Jest tests that are pre-identified, uncommitted Phase 9 onboarding work (`useStore.ts` version 8, `onboarding.logic.ts`) explicitly out of scope here and left untouched.

What keeps this phase at `human_needed` rather than `passed` is evidentiary, not code: the phase's own `08-DEVICE-EVIDENCE.md` and `08-VALIDATION.md` openly record five specific caveats (locked/paywall announcement untested on a free account, level-chip "A1" legibility unconfirmed, coarse-grained rather than per-screen TalkBack sign-off for most of the sweep, one non-reproducing Automatic-label mismatch, and a live font-scale-change/Home-remount bug) that were carried forward as open items rather than resolved before this phase was marked complete. None of them contradict the code; all of them are exactly the kind of device-only fact this verifier cannot settle by reading source, and the phase's own instructions require recording them honestly rather than treating documentation completeness as truth.

---

_Verified: 2026-09-29_
_Verifier: Claude (gsd-verifier)_
