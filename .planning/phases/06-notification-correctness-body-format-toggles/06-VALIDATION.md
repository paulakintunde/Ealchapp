---
phase: 6
slug: notification-correctness-body-format-toggles
status: approved
nyquist_compliant: true
wave_0_complete: true
created: 2026-09-21
---

# Phase 6 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Node.js built-in `node:test` / `node:assert` (no Jest/Vitest in this repo) |
| **Config file** | none — driven by `package.json` script globs |
| **Quick run command** | `node --test src/utils/notifText.logic.test.ts` |
| **Full suite command** | `npm test` (repo root: `ealch-v2`) → `node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"` |
| **Estimated runtime** | ~10-20 seconds (quick), full suite consistent with repo baseline |

---

## Sampling Rate

- **After every task commit:** Run `node --test src/utils/notifText.logic.test.ts` (and any newly-touched `.test.ts` files)
- **After every plan wave:** Run `npm test` (full suite, `ealch-v2` package)
- **Before `/gsd-verify-work`:** Full suite must be green, PLUS the manual device-verification checklist items below (toggle-fires-correctly cannot be automated — `expo-notifications` requires a native runtime)
- **Max feedback latency:** ~20 seconds

---

## Per-Task Verification Map

Task IDs below are the **actual** plan/task IDs as planned. Every automated row's Wave 0 dependency is satisfied: Plan 01 (Wave 1) creates `notifText.logic.ts` + its test and `notifSchedule.logic.ts` + its test before anything consumes them, and Plan 03 creates `notifPlaceholders.test.ts` before Plan 04 extends it.

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 06-01-01 | 06-01 | 1 | NOTIFY-02 | T-06-11 / V5 (marginal) | `formatNotifText` substitutes every declared `{key}` with no literal braces surviving | unit (TDD) | `node --test ealch-v2/src/utils/notifText.logic.test.ts` | ✅ created by this task | ✅ planned |
| 06-01-02 | 06-01 | 1 | NOTIFY-01 | T-06-13 | Per-kind identifier sets are pairwise disjoint — toggling one kind off cannot cancel another | unit (TDD) | `node --test ealch-v2/src/utils/notifSchedule.logic.test.ts` | ✅ created by this task | ✅ planned |
| 06-01-03 | 06-01 | 1 | NOTIFY-02 | T-06-15 | `reportBody`/`nudgeBody` added to FR+EN with exactly one `{name}` token each | static | `npm --prefix ealch-v2 run test:i18n && npm --prefix ealch-v2 run typecheck` | ✅ exists | ✅ planned |
| 06-02-01 | 06-02 | 2 | NOTIFY-01 | T-06-13 | `notifications.ts` schedules with fixed per-kind identifiers and `cancelKind` cancels only that kind | typecheck + static | `npm --prefix ealch-v2 run typecheck` | ✅ exists | ✅ planned |
| 06-02-02 | 06-02 | 2 | NOTIFY-01 | T-06-13 | Source guard: no per-toggle path may call `cancelAllScheduledNotificationsAsync` | static/regression | `node --test ealch-v2/src/services/notifications.guard.test.ts` | ✅ created by this task | ✅ planned |
| 06-03-01 | 06-03 | 2 | NOTIFY-02 | T-06-09, T-06-10 | Scheduler and banner both build bodies via `formatNotifText`; scheduler supplies `{name}` for the first time | typecheck + unit | `npm --prefix ealch-v2 run typecheck && node --test ealch-v2/src/utils/notifText.logic.test.ts` | ✅ exists | ✅ planned |
| 06-03-02 | 06-03 | 2 | NOTIFY-02 | T-06-11 | D-07 guard: a template whose placeholders no call site supplies, or a hand-rolled `.replace('{`, fails the suite | static/regression | `node --test ealch-v2/src/i18n/notifPlaceholders.test.ts ealch-v2/src/i18n/i18n.test.ts` | ✅ created by this task | ✅ planned |
| 06-04-01 | 06-04 | 3 | NOTIFY-01 | T-06-17 | Session-end listener is injected (no `useProgress → useStore` import) and exception-isolated after `logSession` | typecheck + unit | `npm --prefix ealch-v2 run typecheck && node --test ealch-v2/src/store/progress.logic.test.ts` | ✅ exists | ✅ planned |
| 06-04-02 | 06-04 | 3 | NOTIFY-01 | T-06-13, T-06-16 | Toggling one kind off calls `cancelKind` only; `cancelAll` survives solely in `eraseLocalData`; denied permission reverts the toggle | typecheck + static | `npm --prefix ealch-v2 run typecheck` | ✅ exists | ✅ planned |
| 06-04-03 | 06-04 | 3 | NOTIFY-02 | T-06-15 | The D-07 guard now covers `reportBody` and `nudgeBody` and proves each is referenced by a call site | static/regression | `node --test ealch-v2/src/i18n/notifPlaceholders.test.ts ealch-v2/src/i18n/i18n.test.ts` | ✅ exists | ✅ planned |
| 06-05-01 | 06-05 | 4 | NOTIFY-01, NOTIFY-02 | — | Full-suite + typecheck gate before the device pass | regression | `npm --prefix ealch-v2 run typecheck && npm --prefix ealch-v2 test` | ✅ exists | ✅ planned |
| 06-05-02 (checkpoint:human-verify) | 06-05 | 4 | NOTIFY-01, NOTIFY-02 | T-06-13, T-06-15 | Real OS delivery: per-kind cancel isolation, report/nudge cadence, no literal brace in the tray | integration (device-only) | N/A — manual by design, see "Manual-Only Verifications" | N/A | ✅ planned |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

**Sampling continuity:** no run of 3 consecutive tasks lacks an `<automated>` command. The only manual-only task in the phase is 06-05-02, and it is immediately preceded by 06-05-01's full automated gate.

---

## Wave 0 Requirements

All Wave 0 artefacts are created inside Plan 01 (Wave 1) before any consumer runs — no `MISSING` reference survives into a later wave.

- [x] `ealch-v2/src/utils/notifText.logic.ts` — the shared formatter, created in Plan 01 Task 1 (TDD, test written first)
- [x] `ealch-v2/src/utils/notifText.logic.test.ts` — unit tests for the formatter (covers NOTIFY-02's literal wording: "no literal `{t}`/`{name}` placeholder")
- [x] `ealch-v2/src/utils/notifSchedule.logic.ts` + `.test.ts` — per-kind identifier sets, proven pairwise disjoint (Plan 01 Task 2, TDD)
- [x] Broader placeholder-guard test (D-07) — `ealch-v2/src/i18n/notifPlaceholders.test.ts`, created in Plan 03 Task 2 and extended in Plan 04 Task 3
- [x] Framework install: none — `node:test` is a Node built-in, already used repo-wide

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Toggling report/nudge/daily off cancels exactly that kind's pending schedule, not the others | NOTIFY-01 | `expo-notifications` scheduling requires a native runtime; cannot run under `node --test`. The *logic* half (disjoint identifier sets) IS automated in `notifSchedule.logic.test.ts` — only OS delivery is manual. | On device: enable all 3 toggles, verify the scheduled requests exist (via `getAllScheduledNotificationsAsync` debug log or OS notification settings), toggle one off, re-check that only that kind's identifiers are gone and the others remain scheduled |
| Toggling report/nudge on schedules real device notifications matching D-04/D-05 cadence | NOTIFY-01 | Same — native runtime required | On device: enable report, complete a session, confirm the notification fires ~`REPORT_DELAY_SECONDS` (180s) later; enable nudge, confirm a request exists for each `NUDGE_SLOT` (Mon and Thu 18:30) |
| No notification body ever renders a literal `{t}`/`{name}` placeholder in the actual OS notification tray | NOTIFY-02 | Rendering in the real Android/iOS notification tray is the final proof; unit tests cover the formatter logic and the call-site supply map, but not the OS rendering path | On device: trigger daily, report, and nudge notifications and visually confirm the tray text has no literal braces and reads naturally |

---

## Validation Sign-Off

- [x] All tasks have `<automated>` verify or Wave 0 dependencies
- [x] Sampling continuity: no 3 consecutive tasks without automated verify
- [x] Wave 0 covers all MISSING references
- [x] No watch-mode flags
- [x] Feedback latency < 20s
- [x] `nyquist_compliant: true` set in frontmatter

**Approval:** approved 2026-09-21
