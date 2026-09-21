---
phase: 6
slug: notification-correctness-body-format-toggles
status: draft
nyquist_compliant: false
wave_0_complete: false
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

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 06-01-01 | TBD | 0 | NOTIFY-02 | — / V5 (marginal) | `formatNotifText` substitutes every declared `{key}` with no literal braces surviving | unit | `node --test src/utils/notifText.logic.test.ts` | ❌ W0 | ⬜ pending |
| 06-01-02 | TBD | 0 | NOTIFY-02 | — | Every notification-related `strings.ts` entry (`bannerText`, new `reportBody`/`nudgeBody`) has its declared placeholders substituted at each call site (D-07 broader guard) | static/regression | `node --test src/i18n/i18n.test.ts` (extend) or new sibling `src/i18n/notifPlaceholders.test.ts` | ❌ W0 | ⬜ pending |
| 06-01-03 | TBD | 1 | NOTIFY-02 | — | `useStore.ts` scheduler body and `PushBanner.tsx` display body produce identical output for the same inputs (no drift) — both call sites route through the same shared formatter | unit | New test asserting shared import/behavioral parity | ❌ W0 | ⬜ pending |
| 06-02-01 | TBD | 1 | NOTIFY-01 | — | Toggling `report`/`nudge`/`daily` off cancels exactly that kind's pending schedule (not the others), via deterministic per-kind `identifier`s + `cancelScheduledNotificationAsync` | integration (device-only) | manual-only: device-verification checklist item, per existing Phase 3/5 convention | N/A — manual by design | ⬜ pending |
| 06-02-02 | TBD | 1 | NOTIFY-01 | — | Toggling `report`/`nudge` on schedules real device notifications matching D-04/D-05 cadence | integration (device-only) | manual-only: device-verification checklist item | N/A — manual by design | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*
*Task IDs above are placeholders — the planner will assign actual plan/task IDs; this table's Req/Test-Type/Command mapping is authoritative and must carry through.*

---

## Wave 0 Requirements

- [ ] `src/utils/notifText.logic.ts` — the shared formatter itself, does not exist yet
- [ ] `src/utils/notifText.logic.test.ts` — unit tests for the formatter (covers NOTIFY-02's literal wording: "no literal `{t}`/`{name}` placeholder")
- [ ] Broader placeholder-guard test (D-07) — either extend `src/i18n/i18n.test.ts` or add a sibling file scanning `strings.ts`'s notification-related keys
- [ ] Framework install: none — `node:test` is a Node built-in, already used repo-wide

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Toggling report/nudge/daily off cancels exactly that kind's pending schedule, not the others | NOTIFY-01 | `expo-notifications` scheduling requires a native runtime; cannot run under `node --test` | On device: enable all 3 toggles, verify 3 distinct scheduled notifications exist (via `getAllScheduledNotificationsAsync` debug log or OS notification settings), toggle one off, re-check that only that kind's identifier is gone and the other 2 remain scheduled |
| Toggling report/nudge on schedules real device notifications matching D-04/D-05 cadence | NOTIFY-01 | Same — native runtime required | On device: enable report, complete a session, confirm notification fires per D-04's chosen trigger design; enable nudge, confirm it fires on the D-05/D-06 cadence chosen during planning |
| No notification body ever renders a literal `{t}`/`{name}` placeholder in the actual OS notification tray | NOTIFY-02 | Rendering in the real Android/iOS notification tray is the final proof; unit tests cover the formatter logic but not the OS rendering path | On device: trigger daily, report, and nudge notifications and visually confirm the tray text has no literal braces and reads naturally |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 20s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
