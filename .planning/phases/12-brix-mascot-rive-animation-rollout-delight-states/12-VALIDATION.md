---
phase: 12
slug: brix-mascot-rive-animation-rollout-delight-states
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-10-13
---

# Phase 12 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Two-track: `node --test` for pure logic modules (`*.logic.ts`, no React/RN import); `jest` + `jest-expo` + `@testing-library/react-native` for component-render tests |
| **Config file** | `ealch-v2/package.json` (`"test"` and `"test:component"` scripts) — no standalone jest.config found |
| **Quick run command** | `node --test src/hooks/<new-logic-file>.logic.test.ts` (exact filename TBD — depends on the dozeOff logic module the planner introduces) |
| **Full suite command** | `npm run typecheck && npm test && npm run test:component -- --runInBand --silent` |
| **Estimated runtime** | ~unverified this session — reuse `08.1-EVIDENCE-PROTOCOL.md`'s established gate, no independent timing taken |

---

## Sampling Rate

- **After every task commit:** Run `npm run typecheck`, plus the relevant quick `node --test` file for any new `*.logic.ts` module touched by that task
- **After every plan wave:** Run `npm run typecheck && npm test && npm run test:component -- --runInBand --silent`
- **Before `/gsd-verify-work`:** Full suite must be green AND the device-evidence file (see Manual-Only Verifications) must be filled in, not just stubbed
- **Max feedback latency:** Not independently measured this session; inherits the project's existing full-suite runtime from `08.1-EVIDENCE-PROTOCOL.md`'s established gate (no watch-mode flags)

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 12-TBD-dozeOff-logic | TBD | 0 | ANIM-01 | — | "dozeOff fires given elapsed-inactivity ≥ threshold" as a pure function | unit | `node --test src/hooks/mascotIdleTimer.logic.test.ts` (name TBD) | ❌ W0 — module + test both to be written | ⬜ pending |
| 12-TBD-reduceMotion-gate | TBD | TBD | ANIM-01 | — | Calling any new state with `useReduceMotion()` true skips the Rive trigger / shows static frame | component (RNTL) | `npm run test:component -- MascotAvatar` (filter TBD) | ❌ — depends on Phase 11 landing the base Rive component first | ⬜ pending |
| 12-TBD-a11y-structure | TBD | TBD | ANIM-01 | — | Rendered tree has the accessible (tappable) node OUTSIDE the Rive view; the Rive view itself keeps `accessibilityElementsHidden` | component (RNTL, tree/role inspection) | `npm run test:component -- MascotAvatar` | ❌ — same Phase 11 dependency | ⬜ pending |
| 12-TBD-tap-easter-egg-sweep | TBD | TBD | ANIM-01 (SC3) | — | TalkBack announces exactly one correct label on the new tap target; nothing from inside the Rive view is announced | manual-only (device) | N/A — human-verify checkpoint | N/A by nature | ⬜ pending |
| 12-TBD-silent-state-transitions | TBD | TBD | ANIM-01 (SC2) | — | dozeOff / transform-in-out transitions do not themselves trigger a screen-reader announcement | mixed (unit: no new `accessibilityLiveRegion`/announcement call in the code path; manual: device confirmation) | partially `npm run test:component`, partially device sweep | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

**Note:** Task IDs, plan IDs, and waves are placeholders (`TBD`) — this VALIDATION.md was created from RESEARCH.md ahead of planning (step 5.5 of the plan-phase workflow runs before the planner). The planner must replace these rows with its actual task/plan IDs when PLAN.md files are written, preserving the requirement/behavior/test-type mapping established here.

---

## Wave 0 Requirements

- [ ] `src/hooks/mascotIdleTimer.logic.ts` (or equivalent name) — pure dozeOff-timeout decision module, plus `node --test` coverage. Cannot be meaningfully written until the dozeOff threshold/AppState-backgrounding behavior (RESEARCH.md Open Question 1) is decided — do not stub with an invented number.
- [ ] A component test file for `MascotAvatar.tsx`'s new states — none exists today for this component at all. Blocked on Phase 11 landing the base Rive-wrapped component first; cannot be written against real props/state-machine names until then.
- [ ] A `12-DEVICE-EVIDENCE.md` (or equivalently named) file following `.planning/phases/08.1-accessibility-quality-pass/08.1-EVIDENCE-PROTOCOL.md`'s row format verbatim, scoped to the mascot's new tap-easter-egg target specifically — nothing in Phase 8 or 8.1's existing evidence files covers the mascot (confirmed absent from `08-PATTERNS.md`'s file partition table).

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| TalkBack reads the tap-easter-egg's accessible label correctly and announces nothing from inside the hidden Rive view | ANIM-01 (SC3) | Screen-reader focus order/announcement text cannot be asserted from RNTL with the same fidelity as a real TalkBack pass; Phase 8's own precedent treated this class of check as device-only | Real-device sweep (established Pixel 9/Pixel 6 USB + TalkBack setup per project memory `ealch-device-deep-link`), following `08.1-EVIDENCE-PROTOCOL.md`'s verbatim-utterance row format: tap the mascot, record the exact TalkBack utterance, confirm it matches the authored `accessibilityLabel` and that no stray announcement fires from the Rive view's internal elements |
| dozeOff and transform-in-out transitions do not themselves trigger an unwanted announcement, and reduced-motion users see a static/minimal presentation | ANIM-01 (SC2) | Confirming "nothing announced" and "visually static" are negative/perceptual assertions best confirmed on a real device with TalkBack + a reduced-motion OS setting toggled, matching Phase 8/8.1's existing methodology for this class of claim | Same device pass as above, additionally toggling OS-level reduced-motion and OS-level inactivity to observe dozeOff; record both TalkBack silence and the visual fallback presentation |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies — **pending**, task list does not exist yet (planning gated behind UI-SPEC per step 5.6; see 12-RESEARCH.md and orchestrator note)
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify — **pending planning**
- [ ] Wave 0 covers all MISSING references — **pending planning**
- [ ] No watch-mode flags — satisfied by inherited project convention (`08.1-EVIDENCE-PROTOCOL.md`'s gate), to be re-confirmed once this phase's own tasks exist
- [ ] Feedback latency < {N}s — not independently measured this session
- [ ] `nyquist_compliant: true` set in frontmatter — **not yet** (left `false` above; flip once the planner's actual task list satisfies the checks above)

**Approval:** pending — this file was authored during the research step, before planning. The plan-phase workflow's UI-SPEC gate (step 5.6) stopped this run before the planner ran, so no PLAN.md exists yet to validate rows against. Re-run `/gsd-plan-phase 12` after `/gsd-ui-phase 12` produces a UI-SPEC.md to complete planning and finalize this file's Per-Task Verification Map with real task/plan IDs.
