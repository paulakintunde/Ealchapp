---
phase: 13
slug: ui-ux-polish-audit
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-10-13
---

# Phase 13 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Jest + jest-expo + React Native Testing Library (component-render), plus `node --test` (pure-logic) — both established in Phase 18 |
| **Config file** | `ealch-v2/jest.config.*` (component); native `node --test` runner for `*.logic.test.ts` |
| **Quick run command** | `npm run typecheck && npm test` |
| **Full suite command** | `npm run test:component -- --runInBand --silent` (component) plus `npm test` (logic) |
| **Estimated runtime** | ~60-120 seconds (two fast suites per 08.1-EVIDENCE-PROTOCOL.md precedent) |

---

## Sampling Rate

- **After every task commit:** Run `npm run typecheck && npm test`
- **After every plan wave:** Run `npm run test:component -- --runInBand --silent`
- **Before `/gsd-verify-work`:** Full suite must be green, plus every fix-now item's device-evidence row at `pass` in `13-DEVICE-EVIDENCE.md`
- **Max feedback latency:** 120 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 13-01-01 | 01 | 1 | UX-01 | — / N/A | N/A — pure audit/reconciliation task, no code change | manual | `grep`-based static sweep per RESEARCH.md Pattern 2 | ❌ W0 | ⬜ pending |
| 13-NN-NN | NN | N | UX-01 | — / N/A | Fix-now item renders without the flagged defect (no clipping, correct Button variant/theme token used) | component-render | `npm run test:component -- <new test file> --runInBand --silent` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] One new RNTL component-render test file per fix-now item, following `ealch-v2/TESTING.md`'s recipe (written by Phase 18) — no existing test file renders `LessonRich.tsx`/`MissionRich.tsx`/etc. beyond what Phase 18/08.1 already add.
- [ ] `.planning/phases/13-ui-ux-polish-audit/13-DEVICE-EVIDENCE.md` — create following `08.1-EVIDENCE-PROTOCOL.md`'s table format before any device-gated task.
- [ ] `.planning/phases/13-ui-ux-polish-audit/13-POLISH-FINDINGS.md` — the consolidated, triaged findings list required by success criterion 1 (not a test file, but a required Wave 0 artifact every later task depends on).

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|--------------------|
| Visual-consistency/interaction-quality finding is real and correctly triaged | UX-01 | Subjective visual judgment (spacing, token drift, affordance clarity) cannot be fully automated; this repo's own audit convention (`07.1-UI-AUDIT.md`, `08-QUALITY-AUDIT.md`) relies on a human device pass | Run the static grep sweep (RESEARCH.md Pattern 2), reconcile every hit against `07.1-UI-AUDIT.md` / `08-QUALITY-AUDIT.md` / `10-PRE-DISCUSSION-AUDIT.md` open items, then confirm visually on a Pixel 6/9 EAS `preview` build per `08.1-EVIDENCE-PROTOCOL.md` |
| Fix-now item's rendered output on a real device | UX-01 | This repo's evidence protocol explicitly rejects dev-build/emulator rows as results (release-JS timing and native defects require a real device) | Build/update to EAS `preview` channel, verify on Pixel 6/9 via adb, record in `13-DEVICE-EVIDENCE.md` using the Build/Account/Result columns from `08.1-EVIDENCE-PROTOCOL.md` |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 120s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
