---
phase: 10
slug: feedback-rating-flow
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-10-01
---

# Phase 10 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | node `--test` (pure logic, edge fn logic, wiring greps); jest 30 + jest-expo 57 (component) |
| **Config file** | `ealch-v2/jest.config.js` (testMatch `**/__tests__/**/*.test.tsx`); node glob in `ealch-v2/package.json` `test` script |
| **Quick run command** | `cd ealch-v2 && node --test <touched *.test.ts>` |
| **Full suite command** | `cd ealch-v2 && npm test && npm run test:component && npx tsc --noEmit` |
| **Estimated runtime** | ~120 seconds |

Note: ealch-v2 is npm (never `pnpm test` there). Node 24 reporter prints `ℹ tests N`, not `# tests`.

---

## Sampling Rate

- **After every task commit:** Run the quick command for the touched logic/test file
- **After every plan wave:** Run the full suite command
- **Before `/gsd-verify-work`:** Full suite green AND device evidence rows (D-32) filled
- **Max feedback latency:** 120 seconds

---

## Per-Task Verification Map

Filled by the planner/executor per task. Requirement-level map (from 10-RESEARCH.md § Validation Architecture):

| Requirement | Behavior | Test Type | Automated Command | File Exists | Status |
|-------------|----------|-----------|-------------------|-------------|--------|
| FEEDBACK-01 | All Activity values have FR+EN names, none equal raw id | unit | `node --test src/store/drillNames.test.ts` | ❌ W0 | ⬜ pending |
| FEEDBACK-01 | Headline ring and drill rows exclude `exam-review`; weak list keeps it | unit | `node --test src/store/reportAccuracy.test.ts` | ❌ W0 | ⬜ pending |
| FEEDBACK-01 | Ring a11y label; empty log; populated log | component | `npx jest __tests__/report-phase10.test.tsx` | ❌ W0 | ⬜ pending |
| FEEDBACK-01 | `/feedback` redirects; call sites use `/report` | wiring | `node --test src/store/reportRouteWiring.test.ts` | ❌ W0 | ⬜ pending |
| FEEDBACK-02 | Eligibility matrix skips without spending | unit | `node --test src/services/reviewPrompt.logic.test.ts` | ❌ W0 | ⬜ pending |
| FEEDBACK-02 | Cap 3/365, spacing, window edges, clock skew | unit | same | ❌ W0 | ⬜ pending |
| FEEDBACK-02 | Fires only on perfect non-sons quiz; retry does not re-arm | wiring | `node --test src/services/reviewPrompt.wiring.test.ts` | ❌ W0 | ⬜ pending |
| FEEDBACK-02 | No Ealch UI near `requestReview`; Rate row uses `Linking` | wiring | same | ❌ W0 | ⬜ pending |
| FEEDBACK-02 | `review_requested` allowlisted, stable-id props only | unit | extend `analytics.logic.test.ts` | extend | ⬜ pending |
| FEEDBACK-03 | Payload builder: enum, 1000 cap, drops unknown keys incl. email | unit | `node --test src/services/problemReport.logic.test.ts` | ❌ W0 | ⬜ pending |
| FEEDBACK-03 | Outbox enqueue/prune/validate, idempotent report_id | unit | same | ❌ W0 | ⬜ pending |
| FEEDBACK-03 | Edge fn limits + validation + email-from-token only | unit | `node --test supabase/functions/report-problem/limits.test.ts` | ❌ W0 | ⬜ pending |
| FEEDBACK-03 | Sheet states, pre-fill, guest hides contact | component | `npx jest __tests__/report-problem-phase10.test.tsx` | ❌ W0 | ⬜ pending |
| FEEDBACK-03 | `problem_reports` RLS enabled, zero policies | unit | `node --test src/services/problemReportSchema.test.ts` | ❌ W0 | ⬜ pending |
| All | No em dash, no "honest" in new copy | existing | `npm test` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `npx expo install expo-store-review` (57.x line, matches SDK 57)
- [ ] `src/services/reviewPrompt.logic.test.ts`, `src/services/problemReport.logic.test.ts`, `supabase/functions/report-problem/limits.test.ts`
- [ ] `__tests__/report-phase10.test.tsx`, `__tests__/report-problem-phase10.test.tsx` (reuse `__tests__/helpers`, `settings.test.tsx` render pattern)
- [ ] Wiring tests: route rename, "no UI near review call"

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Review request at trigger moment | FEEDBACK-02 | Native sheet, Play-delivered build only | Pixel 9: perfect non-sons quiz, return to trail; capture `review_requested` (PostHog query) + logcat ReviewManager |
| Cap holds on repeat trigger | FEEDBACK-02 | Persisted device state | Seed AsyncStorage to 3 requests, re-trigger, confirm no event |
| One report reaches destination per entry type | FEEDBACK-03 | End-to-end Supabase write | Submit from Settings + each failure surface; query `problem_reports` |
| Offline report delivered late | FEEDBACK-03 | Network state | Airplane mode submit, reconnect, confirm row |
| Le Rapport populated + empty log | FEEDBACK-01 | Device render | Deep-link `ealch://report` with populated and cleared log; screenshot |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 120s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
