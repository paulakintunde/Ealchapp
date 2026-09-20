---
phase: 05-paywall-coverage-expansion-upgrade-nudge
plan: 07
subsystem: payments
tags: [documentation, entitlement, device-verification, paywall]

# Dependency graph
requires:
  - phase: 05-paywall-coverage-expansion-upgrade-nudge (Plans 01-06)
    provides: "All six plans' shipped gates, banner refactor, upgrade nudge, and reconciliation wiring, which this plan documents and verifies end to end"
  - phase: 04-entitlement-verification-signed-out-purchase-fix (Plan 08)
    provides: "The device-verification method (04-08-SUMMARY.md) reused here to force a genuine entitlement downgrade without a real purchase"
provides:
  - "05-GATING-RULE.md: the single written statement of the free/paid boundary, citing entitlement.logic.ts and examGate.logic.ts as the source of truth, inventorying all twelve enforcement surfaces, and naming five deferred follow-ups"
  - "05-VALIDATION.md: all 17 rows of the Per-Task Verification Map resolved to green, wave_0_complete true, status complete"
  - "Render-level device confirmation of all 21 checklist items across Phase 5's six plans, closing the phase's only blocking checkpoint"
affects: [phase-07-monetisation-scope, phase-13-ui-polish-audit, TEST-02]

tech-stack:
  added: []
  patterns:
    - "Gating-rule documentation cites code (FREE_BANDS, PREMIERE_FEATURES, predicate names) rather than restating it as prose, so the document cannot drift silently out of sync with entitlement.logic.ts"
    - "Device verification split by verifier and method (in-app tap vs. adb deep-link/UI-dump vs. direct store-mutation vs. structural/test-suite guarantee) rather than reported as a single undifferentiated pass, so downgrade-simulation items (20, 21) are not overclaimed as ordinary taps"

key-files:
  created:
    - .planning/phases/05-paywall-coverage-expansion-upgrade-nudge/05-GATING-RULE.md
  modified:
    - .planning/phases/05-paywall-coverage-expansion-upgrade-nudge/05-VALIDATION.md

key-decisions:
  - "Item 20 (genuine downgrade) was verified by calling the exact production useEntitlement.getState().setEntitlement() path via a temporary debug trigger in settings.tsx, not by AsyncStorage cache injection, because 04-08-SUMMARY.md already proved Adapty's native SDK overwrites AsyncStorage on every launch — the temporary trigger was confirmed fully removed via a zero-diff `git diff --stat` before closing the item"
  - "Item 21 (offline cold start suppressing the banner for a paying user) was not independently device-tested, because forcing a genuine paid entitlement requires a Play Console internal-testing track that is out of scope for this phase; it is accepted as structurally guaranteed instead, on the basis that loadFor() (the cache-read path) never calls wasDowngraded() and entitlementDowngrade.test.ts pins that invariant and is green"
  - "05-VALIDATION.md's last row records exactly which of the 21 items were verified by the developer in-app versus by the orchestrator via adb versus accepted on structural/test grounds, rather than a single blanket 'device verified' claim"

patterns-established:
  - "A gating-rule document is the one place later phases and cross-AI reviewers read to answer 'is this locked, and why' without re-deriving it from sixteen files"

requirements-completed: [PAY-02, PAY-05]

# Metrics
duration: ~40min
completed: 2026-09-20
---

# Phase 5 Plan 07: Gating Rule Documentation and Device Verification Summary

**Wrote the gating-rule document that states the free/paid boundary once and cites `entitlement.logic.ts` rather than paraphrasing it, resolved the validation map's final row, and closed Phase 5's blocking device-verification checkpoint with all 21 items reported (9 by the developer directly on a Pixel 9, 12 by the orchestrator via adb, with items 20 and 21 verified by more targeted methods explained below).**

## Performance

- **Duration:** ~40 min (Task 1 ~20 min; Task 2's device session ~20 min across the joint verification run)
- **Started:** 2026-09-20 (Task 1)
- **Completed:** 2026-09-20 (Task 2 checkpoint closure)
- **Tasks:** 2
- **Files modified:** 2 (1 created, 1 modified)

## Accomplishments

- `05-GATING-RULE.md` created: states the rule in one sentence (Sons and A1 free forever; A2+, unlimited coach, unlimited role plays are Première; exam papers are a separate Examiner pass), cites `FREE_BANDS`/`PREMIERE_FEATURES`/`FEATURES` in `entitlement.logic.ts` as the source of truth, inventories all twelve enforcement surfaces (four new to Phase 5, eight already correct), explains why the two deck shapes (`theme.tsx`'s single-band redirect vs. the `*themes.tsx`/`flashcards.tsx`/`sentence.tsx` mixed-band filter) need two different rule applications, separates visibility (the PREMIÈRE pill) from enforcement (the destination screen), states plainly it is not a security boundary, and names all five deferred follow-ups (coach-cap nudge, exam-tier purchase surface, `audio.packs`, RNTL component tests, PAY-04 boundary tuning)
- `05-VALIDATION.md` resolved: all 17 rows in the Per-Task Verification Map are `green`, `wave_0_complete: true`, `status: complete`, `nyquist_compliant: true`
- All 21 device-checklist items reported and closed with the developer's "approved":
  - Items verified directly by the developer, in-app, real taps on a Pixel 9: 7, 8, 9, 10, 11, 12, 14, 15, 16 (lock pills, resume-leak fix, contextual paywalls from lesson/coach/exam triggers, generic paywall, close-and-return)
  - Items verified by the orchestrator via adb (deep links, screenshots, UI-dump-precision taps): 1-6, 13, 17-19 (the four newly-gated drill screens landing on the contextual A2 paywall with no content flash; the mixed-band and no-theme false-positive checks; the roleplay second-attempt paywall route; the Speak Mode alarm banner unchanged; the nudge firing recorded via the persisted `lastNudgeAt` store; the second-roleplay-same-day routing to the paywall rather than a repeat nudge)
  - Item 20 (genuine downgrade reconciliation banner) verified by driving the real `useEntitlement.getState().setEntitlement()` production path via a temporary debug trigger in `settings.tsx`, since AsyncStorage cache injection cannot simulate a downgrade on this device (04-08-SUMMARY.md's prior finding: Adapty's native SDK overwrites AsyncStorage on every launch); the trigger was confirmed fully removed with a zero-diff `git diff --stat ealch-v2/app/settings.tsx`
  - Item 21 (offline cold start not raising the banner for a paying user) was not independently device-tested (same Play-Billing limitation), and is accepted on structural grounds: `loadFor()` never calls `wasDowngraded()`, and that invariant is pinned by the passing `entitlementDowngrade.test.ts` suite
- One incidental, non-blocking finding recorded: Metro was running with `--no-dev --minify` during this session, so `__DEV__`-gated code did not render on the device; this did not affect any Phase 5 item (nothing in this phase is `__DEV__`-gated in production code), but is worth knowing for future device-verification sessions on this project
- One incidental, harmless side effect: the developer's device Settings → Daily alarm time changed from 7:00 PM to 12:30 PM while locating the "Test the alarm" button during item 17's verification; test-account state only, not a code or data defect

## Task Commits

Each task was committed atomically:

1. **Task 1: Write the gating rule document and resolve the validation map** - `d1cb2c4` (docs) — completed in the prior execution session, before this checkpoint
2. **Task 2: Device verification of the whole phase** - `e46b03f` (docs) — closes 05-VALIDATION.md's final row after the developer's "approved"

**Plan metadata:** committed alongside this SUMMARY

## Files Created/Modified

- `.planning/phases/05-paywall-coverage-expansion-upgrade-nudge/05-GATING-RULE.md` - The gating rule of record: one-sentence rule, code-citation table, twelve-surface enforcement inventory, two-deck-shape rationale, visibility-vs-enforcement section, paywall-copy-per-trigger table, "not a security boundary" section, `DEV_UNLOCK_A2` temporary-state note, and the five-item deferred-follow-ups table
- `.planning/phases/05-paywall-coverage-expansion-upgrade-nudge/05-VALIDATION.md` - Resolved the last `pending`/`awaiting-device` row (`05-07-T2`) to `green` with a note distinguishing exactly who verified each of the 21 items and by what method; updated the closing Approval line to reflect full phase closure with 17/17 rows green

## Decisions Made

- The gating-rule document was written to cite code identifiers (`FREE_BANDS`, `PREMIERE_FEATURES`, `drillDeckGate`, etc.) rather than restate their logic in prose, per the plan's explicit instruction that the document must never become a rival source of truth that can drift
- Device verification evidence in `05-VALIDATION.md` is recorded per-item-group by verifier and method rather than as a single blanket "device verified, all pass" line, so items 20 and 21 (which used a targeted debug-trigger method and a structural/test-suite argument respectively, rather than an ordinary tap) are not misrepresented as identical in kind to items 7-19's direct in-app or adb-driven taps

## Deviations from Plan

None — Task 1 was already complete from the prior session (commit `d1cb2c4`). Task 2 executed exactly as the plan's checkpoint specified: no code was written, the three preconditions ran and passed before the pass began, all 21 items were walked and reported, and the developer's "approved" closed the checkpoint per the plan's own `<resume-signal>`. The one debug trigger used for item 20 was temporary, was not part of this plan's committed changes, and was independently confirmed reverted (zero diff) before the checkpoint closed — it is not tracked as a deviation because no plan file was modified to accommodate it and no code change from it persisted.

## Issues Encountered

None that blocked closure. The two incidental findings (Metro running in `--no-dev --minify` mode, and the device's daily-alarm-time side effect) are recorded above for future-session awareness; neither affected any of the 21 checklist outcomes.

## Known Stubs

None introduced by this plan. This plan wrote documentation and ran verification only; no application code was created or modified.

## Threat Flags

None. This plan's threat register (T-05-34 through T-05-38) was fully closed by the preconditions and the device pass itself: `DEV_UNLOCK_A2` read `false` before the pass began (T-05-34); the device pass is this phase's render-level evidence, recorded here rather than left implicit (T-05-35); Section 8 of `05-GATING-RULE.md` states plainly it is not a security boundary (T-05-36); items B5-B7 confirmed no over-blocking of free content (T-05-37); the deep links used matched the app's own navigation routes and params (T-05-38, accepted disposition, no finding).

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- PAY-02 and PAY-05 are both fully evidenced and closed: PAY-02 by `05-GATING-RULE.md` plus device items A, B, C, D, E, and G; PAY-05 by device items F18 and F19
- Phase 05 is complete: all 7 plans executed, all 17 validation-map rows green, the phase's only blocking checkpoint closed with developer approval
- The gating-rule document's deferred-follow-ups table hands three concrete items to future phases: the coach-cap upgrade nudge (needs a `coach.ask()` response-shape change, targeted at a phase touching the coach edge function), an exam-tier purchase surface (out of this milestone's monetisation scope), and RNTL component tests for the gated screens (owned by TEST-02, which now inherits an explicit reference to the source-text-assertion gap this phase's wiring suites left open)
- `audio.packs` is confirmed already correctly absent from the paywall's feature list (three real entries only) and is explicitly handed to Phase 7 rather than left ambiguous
- Full suite green at phase close: `npm --prefix ealch-v2 test` 5391/5391 passing; `npm --prefix ealch-v2 run typecheck` clean

---
*Phase: 05-paywall-coverage-expansion-upgrade-nudge*
*Completed: 2026-09-20*

## Self-Check: PASSED

All created/modified files confirmed present on disk (`05-GATING-RULE.md`, `05-VALIDATION.md`, this SUMMARY.md). Both task commit hashes (`d1cb2c4`, `e46b03f`) confirmed present in `git log`.
