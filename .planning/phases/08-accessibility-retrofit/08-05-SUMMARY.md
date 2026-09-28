---
phase: 08-accessibility-retrofit
plan: "05"
subsystem: appearance
tags: [accessibility, theme, expo]
requires:
  - phase: 08-accessibility-retrofit
    provides: Plan 04 settings radio semantics
provides:
  - Automatic appearance preference with live OS resolution
  - Preserved explicit Dark and Light preferences
  - Expo native config, status/navigation bar and root background appearance wiring
affects: [08-06, 08-10]
tech-stack:
  added: [expo-system-ui, expo-navigation-bar]
  patterns: [saved preference separated from effective binary palette]
key-files:
  created: [ealch-v2/src/theme/appearance.logic.ts, ealch-v2/src/theme/appearance.logic.test.ts]
  modified: [ealch-v2/src/store/useStore.ts, ealch-v2/src/theme/useTheme.ts, ealch-v2/app/_layout.tsx, ealch-v2/app/settings.tsx, ealch-v2/app/onboarding.tsx]
key-decisions:
  - "Unknown OS appearance resolves to Dark until a light/dark value is available."
  - "The persisted mode key remains unchanged; invalid values normalize to Automatic at hydration."
  - "The unused toggleMode action is removed; the three visible choices set preferences directly."
requirements-completed: [A11Y-03]
duration: ~35min
completed: 2026-09-28
---

# Phase 8 Plan 05: Automatic appearance

Fresh installs save Automatic and follow the observed OS mode. Existing Dark and Light values remain explicit. Settings and onboarding present all three choices with selected radio state; Settings shows the localized effective mode beside Automatic. The root layout applies the effective palette to the app frame and sheets, controls status and Android navigation bar icon contrast, and clears or applies the React Native native appearance override when the preference changes. Tracked Expo config selects automatic mode and disables navigation bar contrast enforcement for button style control on the next native prebuild.

## Verification

- `npm.cmd run typecheck`: passed.
- `node --test src/theme/appearance.logic.test.ts`: 4 tests passed.
- `npm.cmd run test:component -- --runInBand __tests__/settings.test.tsx`: 4 tests passed.
- `git diff --check`: passed.
- Native config requires a fresh prebuild and rebuilt binary. Plan 10 must verify foreground OS changes, button and gesture navigation, bars, sheets, and paywall on Android hardware.

## Deviations from Plan

- The persisted store version remains 7 because the key is unchanged. A merge guard normalizes same-version invalid values as well as values from older versions.
- The former two-state toggle action had no call sites, so it was removed.
- `ealch-v2/android` is generated and ignored by Git, despite the plan describing it as checked in. The native settings live in tracked `app.json` plugins; generated files were inspected and left unchanged.

## Self-Check: PASSED

Automated preference, Settings, and type checks pass. Native visual behavior remains a Plan 10 device checkpoint.

## Next Phase Readiness

Ready for Plan 06 flashcard large-text scrolling and separate controls.
