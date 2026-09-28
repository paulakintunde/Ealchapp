---
phase: 08-accessibility-retrofit
plan: "04"
subsystem: ui
tags: [accessibility, paywall, settings, account]
requires:
  - phase: 08-accessibility-retrofit
    provides: Plan 03 per-site control audit pattern
provides:
  - Paywall title-first focus and selected plan semantics
  - Localized settings/profile choices and account actions
  - Named legal links and unavailable-purchase free-route recovery
affects: [08-05, 08-10]
tech-stack:
  added: []
  patterns: [paywall route title focus, live-price radio label, hidden banner exclusion]
key-files:
  created: [.planning/phases/08-accessibility-retrofit/08-AUDIT-04.md, ealch-v2/__tests__/a11y-settings-paywall.test.tsx]
  modified: [ealch-v2/app/paywall.tsx, ealch-v2/app/settings.tsx, ealch-v2/app/profile.tsx, ealch-v2/__tests__/settings.test.tsx]
key-decisions:
  - "The unavailable paywall offers a direct return to Den's free trail while retaining Back."
  - "Paywall plan labels include the live displayed price and selected state without changing purchase authority."
requirements-completed: [A11Y-01, A11Y-02]
duration: ~25min
completed: 2026-09-28
---

# Phase 8 Plan 04: Settings and paywall actions

The paywall's title receives accessibility focus for standard, examiner, and subscribed states. Plan and currency choices announce selection; plan labels use the currently displayed price. Purchase and restore retain their existing service calls. Terms and privacy are links. When purchases are unavailable, a named action returns to the free trail. Settings and profile choices now announce their state, icon-only actions have localized names, and the hidden push banner leaves the accessibility tree.

## Verification

- `npm.cmd run typecheck`: passed.
- `npm.cmd run test:component -- --runInBand --silent __tests__/a11y-settings-paywall.test.tsx __tests__/settings.test.tsx`: 2 suites, 4 tests passed. Purchase services were mocked.
- `git diff --cached --check`: passed.
- Site inventory: `08-AUDIT-04.md` includes the direct ErrorScreen retry action.
- Hardware TalkBack traversal remains in Plan 10.

## Task commits

- Tasks 1 and 2: `b3e40a1` — semantics, localization, focused tests, and audit.

## Deviations from Plan

- Added the settings radio assertion to the existing `settings.test.tsx` suite so it runs independently of the paywall route's asynchronous offer effect.
- The two related tasks landed in one scoped commit.

## Self-Check: PASSED

All assigned action sites are accounted for. Title focus, plan selection, legal link roles, settings radio state, and unavailable recovery are covered by focused tests; typecheck passes.

## Next Phase Readiness

Ready for Plan 05's saved Automatic preference and whole-app resolved theme.
