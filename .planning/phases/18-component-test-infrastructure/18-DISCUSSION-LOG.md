# Phase 18: Component Test Infrastructure - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-09-22
**Phase:** 18-Component Test Infrastructure
**Areas discussed:** First screen target, Test depth, Reusable pattern investment, Snapshot testing policy, Test-command wiring, Mocking depth, Accessibility gap on Toggle

---

## First screen target

| Option | Description | Selected |
|--------|-------------|----------|
| Settings screen | Dense set of standard controls (toggles/switches, buttons, links), natural accessibility-audit target, moderate complexity, low native-module mocking surface | ✓ |
| Home/hub screen | First screen every user sees; many CTAs and cards, but heavier app-state mocking | |
| exam-section.tsx | Proves the hardest case first (BUG-02's screen); heaviest mocking surface (AsyncStorage, AppState, network) | |

**User's choice:** Settings screen (recommended option accepted)
**Notes:** exam-section.tsx and the home/hub screen were explicitly deferred as future candidates once the pattern is proven — see CONTEXT.md's Deferred Ideas.

---

## Test depth

| Option | Description | Selected |
|--------|-------------|----------|
| Smoke + role assertions | Renders without crashing, asserts key controls exist with correct roles/labels | |
| Smoke + one interaction | Same, plus simulates one real tap and asserts the resulting state/UI change | ✓ |

**User's choice:** Smoke + one interaction (recommended option accepted)
**Notes:** Chosen because CONCERNS.md's actual flagged gap is "user input flows through React," not just "does it render."

---

## Reusable pattern investment

| Option | Description | Selected |
|--------|-------------|----------|
| Prove once, document later | Land the harness + one passing test; future phases figure out their own approach | |
| Document a short recipe | A brief TESTING.md capturing mocking setup, conventions, and how to add the next test | ✓ |

**User's choice:** Document a short recipe (recommended option accepted)
**Notes:** Phase 19 depends on Phase 18 and will need to follow the same pattern for exam/notification screens.

---

## Snapshot testing policy

| Option | Description | Selected |
|--------|-------------|----------|
| No snapshots — explicit assertions only | Matches the existing node --test convention, which deliberately avoids snapshot-style tests | ✓ |
| Allow snapshots | Standard RNTL/Jest practice, faster to write, but can silently accept regressions | |

**User's choice:** No snapshots (recommended option accepted)

---

## Test-command wiring

| Option | Description | Selected |
|--------|-------------|----------|
| Separate command for now | Add npm run test:component as its own script, keeping node --test fast | ✓ |
| Fold into npm test | One command runs everything | |

**User's choice:** Separate command for now (recommended option accepted)

---

## Mock depth

| Option | Description | Selected |
|--------|-------------|----------|
| Mock at the service/native boundary | Real zustand store logic runs; only native modules/network calls are mocked | ✓ |
| Mock the stores directly | Replace useStore/useUI/useEntitlement with fake return values | |

**User's choice:** Mock at the service/native boundary (recommended option accepted)

---

## Accessibility gap on Toggle

| Option | Description | Selected |
|--------|-------------|----------|
| Add role to Toggle only | Minimal, scoped fix: accessibilityRole="switch" + accessibilityState on Toggle only | ✓ |
| Pick a different, already-accessible element instead | Test an element elsewhere on Settings that already has a role, leaving Toggle for Phase 8 | |
| Fix Press's default role globally now | Add a default accessibilityRole="button" to the shared Press component itself | |

**User's choice:** Add role to Toggle only (recommended option accepted)
**Notes:** Discovered mid-discussion by reading `ui.tsx` directly — `Toggle` (wrapping `Press`) has no accessibilityRole at all today, confirming CONCERNS.md's suspicion about `Press`'s missing default role. A global `Press` fix was explicitly rejected as too large a blast radius for this phase; that decision belongs to Phase 8.

---

## Claude's Discretion

- Exact npm script name for the component-test command
- Exact filename/location for the written testing recipe
- jest-expo version pinning strategy (must match Expo SDK ~57.x)
- Whether the jest config targets android only or both platforms
- Precise accessibilityLabel wording on Toggle, if one is added alongside the role

## Deferred Ideas

- Broader accessibility fixes beyond Toggle (e.g., a default role on Press itself) — belongs to Phase 8: Accessibility Retrofit
- Testing exam-section.tsx or the home/hub screen — deferred as future work; exam-section.tsx flagged as a strong candidate for Phase 19's exam-grading coverage
