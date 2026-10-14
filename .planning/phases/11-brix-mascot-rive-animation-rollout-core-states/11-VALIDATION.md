---
phase: 11
slug: brix-mascot-rive-animation-rollout-core-states
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-10-13
---

# Phase 11 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Jest 29 + `jest-expo` preset + React Native Testing Library (component tests); Node's built-in `node --test` (pure-logic tests) — both already configured |
| **Config file** | `ealch-v2/jest.config.js` (component), bare `node --test` glob for logic (`package.json`'s `"test"` script) |
| **Quick run command** | `npx jest __tests__/mascot-*.test.tsx` |
| **Full suite command** | `npm run test:component` (Jest/RNTL) and `npm test` (node --test logic suite) |
| **Estimated runtime** | ~30 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npx jest <touched test file> -x`
- **After every plan wave:** Run `npm run test:component && npm test`
- **Before `/gsd-verify-work`:** Full suite must be green, plus a real-device check (Pixel 6/Pixel 9) confirming the Rive view actually renders on physical Android hardware — this project's established pattern for every UI/native-module phase, and the only way to verify success criteria 1-2 since Jest mocks the native Rive view entirely.
- **Max feedback latency:** 30 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Threat Ref | Secure Behavior | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|------------|-----------------|-----------|-------------------|-------------|--------|
| 11-01-01 | 01 | 0 | ANIM-01 | — | N/A | infra | manual mock creation: `__mocks__/rive-react-native.ts` | ❌ W0 | ⬜ pending |
| 11-01-02 | 01 | 0 | ANIM-01 | — | N/A | infra | `metro.config.js` resolver.assetExts includes `'riv'` | ❌ W0 | ⬜ pending |
| 11-0N-0M | TBD | 1+ | ANIM-01 (a11y) | — | `MascotAvatar` stays `accessibilityElementsHidden` + `importantForAccessibility="no-hide-descendants"` regardless of `state` | unit/component | `npx jest __tests__/mascot-a11y.test.tsx -x` | ❌ W0 | ⬜ pending |
| 11-0N-0M | TBD | 1+ | ANIM-01 (reduced motion) | — | `useReduceMotion()===true` pauses Rive playback / does not drive the state machine, no crash | component (RNTL, mocked `AccessibilityInfo.isReduceMotionEnabled`) | `npx jest __tests__/mascot-reduce-motion.test.tsx -x` | ❌ W0 | ⬜ pending |
| 11-0N-0M | TBD | 1+ | ANIM-01 (state mapping) | — | idle/listening/speaking/celebrating/thinking each map to the correct `setInputState`/`fireState` calls on the mocked `RiveRef` | component (RNTL + manual mock) | `npx jest __tests__/mascot-state-machine.test.tsx -x` | ❌ W0 | ⬜ pending |
| 11-0N-0M | TBD | 1+ | ANIM-01 (call-site retrofit) | — | `speak.tsx` passes `'listening'`/`'speaking'` (not the old `'thinking'` placeholder) at the correct moments | component (RNTL) | `npx jest __tests__/speak-mascot-states.test.tsx -x` | ❌ W0 | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

*Exact Task IDs will be finalized once the planner assigns plan/wave numbers; this table establishes the required automated-verify coverage per ANIM-01 sub-behavior that every plan touching `MascotAvatar.tsx` must satisfy.*

---

## Wave 0 Requirements

- [ ] `__mocks__/rive-react-native.ts` — manual Jest mock exporting a `forwardRef` stub `<Rive>` component plus a ref object exposing no-op `setInputState`/`fireState`/`play`/`pause`/`stop`/`reset` jest-mock functions. No official mock ships with `rive-react-native`; without this, every component test for the new states is blocked.
- [ ] `ealch-v2/metro.config.js` — add `resolver.assetExts.push('riv')`. Build-time prerequisite every other Wave 0 item depends on.
- [ ] `npx expo install rive-react-native@9.8.5` (legacy runtime, NOT the Nitro-based `@rive-app/react-native` — that runtime deprecates the state-machine-input mechanism this phase needs).
- [ ] `__tests__/mascot-a11y.test.tsx` — first test ever written against `MascotAvatar`'s accessibility-hiding behavior in this codebase; stubs required before any Rive-internals swap can be verified as non-regressing.
- [ ] `__tests__/mascot-reduce-motion.test.tsx` — stubs for the reduced-motion criterion.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Rive view actually renders the Brix roster's squash-and-stretch animation on-device, with correct visual state transitions | ANIM-01 (success criteria 1-2) | Jest mocks the native `<Rive>` view entirely — there is no way to assert pixel/animation output in the test environment, and no `.riv` asset content can be validated outside a real render | Build a dev client (EAS cloud build — local Android `gradlew assembleRelease` is blocked on this machine per STATE.md), install on Pixel 6/Pixel 9, step through idle → listening → speaking → celebrating → thinking in `speak.tsx` and confirm visually correct animation + no visual flashing/placeholder states |
| Screen reader does not announce or focus the mascot | ANIM-01 (success criterion 3) | Automated RNTL assertions on `accessibilityElementsHidden`/`importantForAccessibility` only prove the props are set; they don't prove TalkBack/VoiceOver actually honors them with the new Rive native view wrapper | On-device TalkBack sweep of a lesson screen containing the mascot; confirm it is never focused/announced |
| Reduced-motion system setting on a real device shows static/minimal presentation | ANIM-01 (success criterion 4) | `AccessibilityInfo.isReduceMotionEnabled` mocking in Jest proves the JS logic branches correctly, not that the Rive native layer actually stops animating on-device | Enable Android "Remove animations" developer setting (or iOS Reduce Motion once an iOS device is available per STATE.md's iOS-readiness blocker), relaunch, confirm mascot is static/minimal |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references (`rive-react-native` mock, metro config, package install)
- [ ] No watch-mode flags
- [ ] Feedback latency < 30s
- [ ] `nyquist_compliant: true` set in frontmatter (set once the planner's task breakdown confirms per-task coverage against this map)

**Approval:** pending
