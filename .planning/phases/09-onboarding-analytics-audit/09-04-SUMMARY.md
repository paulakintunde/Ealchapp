---
phase: 09-onboarding-analytics-audit
plan: "04"
subsystem: acquisition
tags: [analytics, install-referrer, retention]
requires:
  - phase: 09-onboarding-analytics-audit
    provides: typed capture and install identity from Plan 01
provides:
  - one first-open milestone per install and next-local-day foreground return
  - parsed Android Play campaign fields with distinct lookup statuses
  - explicit iPhone unavailable status for app-side attribution
affects: [09-06]
tech-stack:
  added: [expo-application]
  patterns: [persistent install milestones, allowlisted attribution]
key-files:
  created:
    - ealch-v2/src/services/acquisition.logic.ts
    - ealch-v2/src/services/acquisition.logic.test.ts
    - ealch-v2/src/services/acquisition.ts
    - ealch-v2/__tests__/acquisition-phase9.test.tsx
  modified:
    - ealch-v2/app/_layout.tsx
    - ealch-v2/package.json
    - ealch-v2/package-lock.json
    - ealch-v2/src/content/licences.ts
requirements-completed: [QA-02]
completed: 2026-09-29
---

# Phase 9 Plan 04 Summary

First open is recorded once per install without waiting for the Play referrer. A foreground return on the next local calendar day records D1 once. Android campaign attribution is parsed into source, medium, and campaign only; lookup failure, no campaign, and unavailable service remain distinct. iPhone records unavailable for app-side attribution.

## Verification

- Pure acquisition tests: 6 passed. Focused acquisition component tests: 5 passed.
- Full component suite: 58 passed, 0 failed. TypeScript check passed.
- Native Android build succeeded with `expo-application` autolinked; the resulting debug APK installed successfully on the connected Android phone.
- The full unit suite found one Plan 04 dependency credit gap, which was fixed and its six focused licence tests passed. The remaining full-suite failure concerns uncommitted B2 lesson image references outside this phase.
- `git diff --cached --check` passed.

## Commits

- `dd730e9` — first-open and local-day D1 milestones.
- `1003c7d` — parsed Play attribution, iPhone status, native dependency, and licence credit.

## Deviation from Plan

Expo SDK 57 already includes Android Play Install Referrer access through `expo-application.getInstallReferrerAsync()`. We used that maintained native module instead of creating the planned duplicate Kotlin module. A Play-installed build is still needed in Plan 06 to prove a real campaign referrer; a sideloaded debug APK cannot supply that evidence. App Store Connect campaign reporting remains a separate aggregate check.

## Self-Check: PASSED WITH EXTERNAL UNIT-SUITE FAILURE

Plan 04's focused tests, typecheck, component suite, Android build, and debug install passed. The repository-wide unit gate remains red because of unrelated in-progress B2 content image references.
