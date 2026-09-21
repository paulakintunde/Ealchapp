---
phase: 06-notification-correctness-body-format-toggles
plan: 05
subsystem: testing
tags: [expo-notifications, node-test, device-verification, i18n]

# Dependency graph
requires:
  - phase: 06-04
    provides: per-kind notification scheduling (daily/report/nudge), formatNotifText substitution, placeholder guard
provides:
  - Green full-suite + typecheck proof with all Phase 6 changes in place
  - Six recorded structural invariant readings for the notification subsystem
  - Human-confirmed, on-device proof of NOTIFY-01 (toggle independence, report-tracks-toggle) and NOTIFY-02 (no literal placeholders in delivered notification bodies)
affects: [17-notification-tap-handler]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Device-testing gotcha: Expo dev-client's floating shake-menu bubble can overlap and intercept taps on the app's own top-right UI controls; drag it aside before assuming a tap failed"

key-files:
  created:
    - .planning/phases/06-notification-correctness-body-format-toggles/06-05-SUMMARY.md
  modified: []

key-decisions:
  - "Recorded the plan's documented expected notification body text as the observed/confirmed text for Checks A-D, since the human verifier confirmed pass/fail verbally rather than transcribing tray text verbatim, and did not report any deviation from the documented expected text"
  - "Check E (duplicate-daily-after-upgrade) recorded as skipped — no pre-Phase-6 build was readily available to reinstall for the upgrade path"

patterns-established: []

requirements-completed: [NOTIFY-01, NOTIFY-02]

# Metrics
duration: ~25min active work (excludes elapsed time waiting on the human device-verification checkpoint)
completed: 2026-09-21
---

# Phase 6 Plan 05: Full-Suite Gate + Device Verification Summary

**Full `ealch-v2` suite (5417 tests) and typecheck green with all Phase 6 changes in place, plus a human-confirmed on-device pass proving NOTIFY-01 (toggle independence, report tracks its toggle) and NOTIFY-02 (no literal `{t}`/`{name}` in delivered notification bodies) on a real Pixel 9.**

## Performance

- **Duration:** ~25 min active agent work (typecheck/test runs, invariant greps, device diagnostics, checkpoint write-up); additional wall-clock time elapsed while the human ran the device checks, not counted here
- **Completed:** 2026-09-21
- **Tasks:** 2 (Task 1 auto, Task 2 checkpoint:human-verify)
- **Files modified:** 0 source files (plan is verification-only, as specified) — 1 summary file created

## Accomplishments
- Confirmed the entire Phase 6 change set is green: `npm --prefix ealch-v2 run typecheck` (exit 0), `npm --prefix ealch-v2 test` (5417/5417 passing), and the targeted 5-file notification suite (30/30 passing)
- Recorded all six structural invariant readings verbatim (5 of 6 matched expected exactly; 1 investigated and explained as a doc-comment string match, not a code defect)
- Verified Metro/dev-client health on the attached Pixel 9 (USB reverse tunnel, manifest resolving with a real runtimeVersion hash, DEBUGGABLE build installed) before handing off to the human
- Human confirmed on real hardware: notification bodies contain no literal placeholders (Check A), one toggle off does not silence other kinds (Check B), the report notification tracks its own toggle after a logged session (Check C), and the nudge fires at its scheduled weekly slot (Check D)
- Closed NOTIFY-01 and NOTIFY-02

## Task Commits

No task commits — this plan modifies no source files by design (`files_modified: []` in frontmatter). Only this summary is committed, in the plan-metadata commit.

**Plan metadata:** committed alongside STATE.md/ROADMAP.md/REQUIREMENTS.md updates (see final commit below).

## Files Created/Modified
- `.planning/phases/06-notification-correctness-body-format-toggles/06-05-SUMMARY.md` - this summary

## Decisions Made
- The human verifier's confirmations for Checks A-D were terse pass/fail statements ("All good test a to c", "confirmed") rather than independently transcribed tray-text screenshots. Since no deviation from the plan's documented expected body text was reported, this summary records the plan's `<how-to-verify>` expected text as the observed text for each check, explicitly flagged below as a verbal confirmation rather than an agent-captured screenshot/text dump.
- Check E (no duplicate daily notification after upgrading over a pre-Phase-6 build) was skipped rather than forced, because no old build was readily available to reinstall — recorded as skipped-with-reason per the plan's acceptance criteria, not silently omitted.

## Deviations from Plan

### Auto-fixed Issues

None — no code was changed in this plan (verification-only).

### Notable Findings (not auto-fixed, documented per plan instruction)

**1. Invariant reading 4 mismatch — explained, not a defect**
- **Found during:** Task 1, six-invariant grep pass
- **Expected:** `grep -c "useStore" ealch-v2/src/store/useProgress.ts` → 0
- **Actual:** 2
- **Investigation:** Both matches are inside a documentation comment (lines 253/255 of `useProgress.ts`) explaining the intentional one-way dependency between `useStore.ts` and `useProgress.ts` (a runtime-injected listener is used instead of an import, specifically to avoid a circular dependency). Confirmed via a direct `import` grep that `useProgress.ts` has no actual `import` of `useStore` anywhere — the real invariant the check protects (no circular import) holds. The literal string count differs only because the comment names the file by name.
- **Action taken:** None — recorded as-is per plan instruction ("If any command is red, stop and report — that is a gap ... not something to paper over here"). This is a false positive on the literal grep, not a red command; typecheck and the full suite (which would catch an actual circular-import cycle) are both green.
- **Files modified:** None.

**2. Device-testing gotcha: dev-client shake-menu bubble intercepts taps**
- **Found during:** the human's diagnostic pass reaching Settings > Practice reminders (immediately before Task 2)
- **Issue:** Expo dev-client's floating shake-menu bubble overlaps the app's own profile/settings gear icon in the top-right corner and intercepts the first tap, making it look like the in-app control isn't responding.
- **Fix:** Drag the bubble aside before tapping the real in-app UI control underneath it.
- **Scope:** Not a code defect — a known Expo dev-tooling behavior. Flagging here so future device-verification plans in this repo don't misdiagnose it as a broken tap target.

---

**Total deviations:** 0 auto-fixed. 2 notable findings documented (1 grep-invariant false positive explained, 1 device-testing tooling gotcha flagged for future plans).
**Impact on plan:** No scope creep, no code changes. Both findings are informational for future execution/verification work.

## Issues Encountered

**Device access:** the attached Pixel 9 was behind a secure lock screen (PIN/pattern) during the agent's portion of Task 1, which cannot be bypassed by `adb` automation. The agent completed all automatable verification (typecheck, full suite, targeted suite, six invariant greps, Metro/dev-client health checks, reverse-tunnel confirmation, manifest-resolve confirmation) and handed the device-reachability confirmation (reaching Settings > Practice reminders, and the sub-label text match) to the human, who confirmed it during the diagnostic pass immediately preceding Task 2. Resolved — no impact on the plan's outcome.

## Task 2: Device Verification Results

All checks run on the attached Pixel 9 (`tokay`), dev build, Metro on port 8082 over USB.

**Pre-checkpoint diagnostic (human, before Checks A-E):**
- App reaches Settings > Practice reminders correctly in both EN and FR.
- All three toggle rows visible (Evening reminder, Confidence nudges, Daily report).
- Report row sub-label reads exactly "Your report, right after your session" (EN) and "Votre rapport, juste après la séance" (FR) — matches Task 1's acceptance criteria verbatim.

**Check A — body text has no leftovers (NOTIFY-02).**
- **Outcome:** PASSED
- **Recorded text (per plan's documented expected text; human confirmed pass verbally without transcribing the tray, and reported no deviation):** `Your 7:04 PM session is waiting: Au Café, 4 min with Brix.` / FR: `Votre séance de 19:04 vous attend : Au Café, 4 min avec Brix.` — no literal `{t}` or `{name}` observed.

**Check B — one toggle off does not silence the others (NOTIFY-01).**
- **Outcome:** PASSED
- **Observation:** the daily reminder still arrived after turning Confidence nudges on then back off.

**Check C — the report fires after a session, and only when its toggle is on (NOTIFY-01, D-04).**
- **Outcome:** PASSED
- **Recorded text (per plan's documented expected text; human confirmed pass verbally):** `Your report is ready: see how your session with Brix went.` / FR: `Votre rapport est prêt : découvrez comment s'est passée votre séance avec Brix.` — no literal `{name}` observed. With the toggle turned OFF, no report notification arrived after a second logged session.

**Check D — the nudge cadence (optional).**
- **Outcome:** PASSED
- **Procedure confirmed:** device clock set to next Monday 18:28, Confidence nudges toggled off then back on, waited past 18:30.
- **Recorded text (per plan's documented expected text; human confirmed with "confirmed"):** `Two minutes is enough to make progress: Brix is ready for a quick micro-challenge.` / FR: `Deux minutes suffisent pour progresser : Brix vous attend pour un micro-défi.`

**Check E — no duplicate daily after an upgrade (optional).**
- **Outcome:** SKIPPED
- **Reason:** No pre-Phase-6 build was readily available to reinstall for the upgrade path test.

**Note on text provenance:** the body text recorded for Checks A, C and D above is the plan's documented expected text, used here because the human's on-device confirmations were pass/fail verdicts ("All good test a to c", "confirmed") rather than independently transcribed screenshots or tray-text dumps, and no deviation from the documented text was reported. This is recorded transparently rather than presented as an agent-captured verbatim transcription.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- NOTIFY-01 and NOTIFY-02 are closed; the notification subsystem's structural invariants (formatter, per-kind scheduling/cancellation, placeholder guard) are proven both statically (`node --test`) and on real hardware.
- Known limitation, explicitly in scope and not a blocker: tapping a notification opens the app to its default screen rather than the advertised session — that is Phase 17 (NOTIFY-03).
- Phase 6 is otherwise ready to close; no blockers carried forward.

---
*Phase: 06-notification-correctness-body-format-toggles*
*Completed: 2026-09-21*

## Self-Check: PASSED

- FOUND: .planning/phases/06-notification-correctness-body-format-toggles/06-05-SUMMARY.md
- No commit hashes to verify (this plan modified no source files; the only commit is the plan-metadata commit created after this summary).
