---
phase: 10-feedback-rating-flow
plan: "01"
subsystem: i18n
tags: [strings, icons, copy, d-36]
requires: []
provides:
  - "drillNames typed Record<Activity, string> (13 activities, FR+EN)"
  - "42 Phase 10 string keys in FR+EN (prob*, rate*, storeSec, menuMoreA11y, profileReport*, report*A11y)"
  - "Icon glyphs flag and more"
affects: [10-03, 10-05, 10-10]
tech-stack:
  patterns: ["French NBSP/NNBSP written as escape text by script, verified by node test"]
key-files:
  created:
    - ealch-v2/src/store/drillNames.test.ts
    - ealch-v2/src/i18n/phase10Copy.test.ts
    - ealch-v2/scripts/phase10-strings.mjs
  modified:
    - ealch-v2/src/i18n/strings.ts
    - ealch-v2/src/components/Icon.tsx
key-decisions:
  - "Strings inserted by script because Write/Edit can turn NBSP into plain spaces"
requirements-completed: [FEEDBACK-01, FEEDBACK-03]
duration: ~25min
completed: 2026-10-15
---

# Phase 10 Plan 01: Copy and glyph contract Summary

All 13 Activity values now have FR and EN drill names enforced by `Record<Activity, string>`, 42 Phase 10 copy keys exist in both languages under D-36 typography, and Icon gains `flag` and `more`.

## Commits
- e9b9df4: Task 1, activity names plus drillNames.test.ts
- 21421e5: Task 2, strings script, strings.ts keys, phase10Copy.test.ts, Icon glyphs

## Verification
- `node node_modules/typescript/bin/tsc --noEmit` exit 0 (`npx tsc` printed an install prompt in this shell; the local binary was invoked directly).
- `npm test`: 0 failures on the final run (one earlier run showed 1 failure that did not reproduce twice; likely a concurrent executor's in-flight file).
- phase10Copy.test.ts: 5 tests pass (presence, U+202F/U+00A0/guillemets, no em dash/`...`/honest, ellipsis, no rating wording in prob* keys). Escapes confirmed as text in strings.ts.

## Deviations from Plan
**1. [Rule 1 - consistency] `probSelected`** The plan parenthetical said `'{c} sélectionné'`, but the UI-SPEC copy table (declared the source of every value) gives FR `Choix : {c}` / EN `{c} selected`. Used the UI-SPEC value.

**2. Icon `more`** UI-SPEC N3 gives no exact path, so the plan's three-dot path data was used. Icon already draws with round caps, so the dots render.

## Notes
- D-37: strings.ts and Icon.tsx were clean before editing; diff stat checked before commit showed only own hunks. At start no 08.1 SUMMARY existed, so 08.1-04/05 (which list strings.ts) are still unexecuted; they must rebase onto these keys.
- Crash-screen copy deliberately not added (ErrorScreen keeps its own table, plan 10-10).
- The counter `{n}/1000` has no key (plan list omits it).

## Known Stubs
None.

## Self-Check: PASSED
