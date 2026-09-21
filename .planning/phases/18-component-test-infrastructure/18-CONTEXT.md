# Phase 18: Component Test Infrastructure - Context

**Gathered:** 2026-09-22
**Status:** Ready for planning

<domain>
## Phase Boundary

Add a working Jest + jest-expo + React Native Testing Library setup to `ealch-v2`, running alongside (not replacing) the existing 844+ `node --test` logic tests, and prove it works with one passing component-render test against a real screen using `getByRole`-style assertions. This phase delivers the harness and one proof-of-concept test — it does not attempt broad screen coverage (that's future work) and does not perform Phase 8's full accessibility retrofit (only the minimal, scoped a11y fix needed to make this one test's `getByRole` query possible — see D-07).

</domain>

<decisions>
## Implementation Decisions

### Target screen and test shape
- **D-01:** First (and for this phase, only) component test targets `ealch-v2/app/settings.tsx` — chosen over the home/hub screen (heavier app-state mocking) and `exam-section.tsx` (heaviest mocking surface: AsyncStorage, AppState, network — save for a later phase once the pattern is proven). Settings has a dense, representative set of standard controls (toggles, buttons, links) and is a natural target for Phase 8's later accessibility audit, satisfying ROADMAP.md's "ideally one of the screens touched by Phase 8" success criterion.
- **D-02:** Test depth is "smoke + one interaction": render the screen, assert key controls exist with correct accessible roles/labels (`getByRole`), AND simulate one real user action (a tap on the sound toggle in the "Sound" `ToggleRow`) and assert the resulting state/UI change. A pure smoke-render test was rejected as insufficient — CONCERNS.md's actual flagged gap is "user input flows through React," not just "does it render."
- **D-03:** No snapshot testing. Explicit assertions only, matching the existing `node --test` convention in this codebase (which deliberately avoids snapshot-style tests) — snapshots tend to get rubber-stamp-updated without being read, defeating the point.

### Test infrastructure shape
- **D-04:** New Jest/RNTL suite runs as a separate npm script (e.g. `npm run test:component`), NOT folded into the existing `npm test` (which stays pure `node --test`, ~35-45s for 844+ tests). Jest/RNTL startup overhead (transforms, native mocks) is real and shouldn't slow down the existing fast feedback loop. Both must be documented as required checks (planner/executor should wire this into whatever "run before considering a task done" convention this phase's plan establishes), but they remain two separate commands.
- **D-05:** Mocking depth for Settings' dependencies (`useStore`, `useUI`, `useEntitlement` zustand stores; `purchases`, `analytics`, `sound` services) is "mock at the service/native boundary" — real zustand store logic runs unmocked; only native modules and network-touching calls (AsyncStorage, Supabase, Adapty, sound playback via `expo-audio`/`expo-speech`) are mocked. This catches store-wiring/selector bugs, not just rendering bugs, at the cost of a slightly heavier per-test setup than mocking the stores directly.
- **D-06:** Produce a short written recipe (e.g. `ealch-v2/TESTING.md` or similar — exact filename/location is Claude's discretion) documenting the jest-expo setup, the service/native-boundary mocking convention, and how to add the next component test. Phase 19 (TEST-01/TEST-03, exam grading + notification delivery) depends on this phase and will need to follow the same pattern — bare "prove it once" was rejected because Phase 19 shouldn't have to reverse-engineer the convention from one example file.

### Accessibility gap discovered during discussion
- **D-07:** The `Toggle` component (`ealch-v2/src/components/ui.tsx` ~line 216) currently sets **no `accessibilityRole` at all** — it wraps `Press`, which is a bare `Pressable` with no default role (confirmed by reading both components directly; `CONCERNS.md`'s suspicion that "a default `accessibilityRole="button"` on the shared `Press` component likely closes most of the gap" is accurate — `Press` sets none). This means a `getByRole`-style query against the Settings sound toggle will fail against current code as-is. **Decision: add `accessibilityRole="switch"` + `accessibilityState={{checked: value}}` to the `Toggle` component ONLY** (not a global fix to `Press`, and not deferred to a different already-accessible element instead). This is a minimal, scoped fix whose sole purpose is making this phase's own test possible — it is explicitly NOT Phase 8's broader accessibility retrofit (353 controls audited, ~64 currently correct) and should not be read as starting that work early. A global `Press` default-role fix was considered and rejected here as too large a blast radius for this phase (Press is used everywhere in the app, including non-button contexts) — that decision belongs to Phase 8.

### Claude's Discretion
- Exact npm script name for the component-test command (e.g. `test:component` vs `test:jest` vs `test:rntl`).
- Exact filename/location for the written testing recipe (D-06).
- jest-expo version pinning strategy (must match Expo SDK ~57.x — exact patch version is an implementation detail).
- Whether the jest config targets a single platform (android) by default or supports both — this app's dev workflow is Android-first (USB Pixel device), but no strong preference was expressed.
- Precise wording/labels for the new `accessibilityLabel` (if one is added alongside the role) on `Toggle` — should read naturally for a screen reader (e.g. reflecting the row's title, like "Sound" or "Sound, on").

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Roadmap/requirements
- `.planning/ROADMAP.md` § Phase 18 — the two success criteria (Jest+jest-expo+RNTL configured alongside `node --test`; one real screen with `getByRole`-style assertions, ideally accessibility-audit-relevant) this phase is scoped against
- `.planning/REQUIREMENTS.md` — TEST-02: "The app has component-render test infrastructure (Jest + React Native Testing Library) capable of testing at least one real screen" (this phase's sole requirement; framework choice is locked by this requirement, not open for discussion)
- `.planning/codebase/CONCERNS.md` § Test Coverage Gaps, "No component render tests" — the source of this phase, including the `Press` default-role suggestion that informed D-07

### Existing test convention (must match, per D-03)
- `ealch-v2/src/services/examAttemptWiring.test.ts` — the `node:test`/`node:assert`/`readFileSync` source-text-assertion convention already used for service-layer logic; component tests are a different style (real rendering, not source-text assertion) but should share the "explicit assertions, no snapshots" philosophy
- `ealch-v2/package.json` lines 56-57 — current `"test"` and `"test:i18n"` scripts, the glob pattern (`src/**/*.test.ts` `supabase/functions/**/*.test.ts`) the new component-test script must NOT collide with (D-04 requires it stay separate)

### Target screen and components (read in full before touching anything)
- `ealch-v2/app/settings.tsx` (634 lines) — the D-01 target screen; imports `useStore`, `useUI`, `useEntitlement`/`useIsPremium`, `useTheme`, `useT` (i18n), `purchases`/`purchases.logic` services, `analytics` (`track`), `sound` service, `expo-router`, `expo-linear-gradient`; the "Sound" `ToggleRow` (D-02's interaction target) is around line 454, rendering the shared `ToggleRow` local component (defined ~line 47) which wraps the `Toggle` component
- `ealch-v2/src/components/ui.tsx` lines 216-231 — the `Toggle` component (D-07's fix target)
- `ealch-v2/src/components/ui.tsx` lines 25-42 — the `Press` component `Toggle` wraps; confirmed to set no default accessibility role (informs D-07's "why", not a fix target itself)
- `ealch-v2/src/components/ui.tsx` lines 273-274 — an existing example of a control that DOES set `accessibilityRole="button"` + `accessibilityLabel` explicitly (the "Close" button), useful as a pattern reference for D-07's fix

### Project structure/config
- `ealch-v2/package.json` — dependencies/devDependencies (no jest, jest-expo, or `@testing-library/react-native` currently installed; `expo: ~57.0.9`, `react-native: 0.86.2`, `react: 19.2.3` — jest-expo version must match SDK 57)
- `ealch-v2/babel.config.js` — current babel config (`babel-preset-expo` + `react-native-worklets/plugin` last); jest-expo's babel transform needs to compose with this, not replace it

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `ToggleRow` (local component in `settings.tsx`, ~line 47) — wraps `Toggle` with a title/subtitle; the D-02 interaction (tap the Sound toggle) goes through this
- Existing `node --test` source-text-assertion convention (`examAttemptWiring.test.ts` and similar) — establishes the "no snapshots, explicit assertions" house style this phase's component tests should also follow (D-03), even though the testing *mechanism* differs (real render vs source-text regex)

### Established Patterns
- Zustand stores (`useStore`, `useUI`, `useEntitlement`) are used directly as hooks throughout screens, not injected via props/context — this is why D-05's "mock at the service/native boundary" (not the store level) is meaningful: the real store code will execute during tests
- No existing precedent for accessibility roles being consistently set — `Press` (the base pressable primitive used almost everywhere) sets none by default; individual call sites set roles ad hoc (the Close button does, `Toggle` does not) — Phase 8 exists specifically to close this gap app-wide; this phase only touches `Toggle`

### Integration Points
- `ealch-v2/package.json` `scripts` — where the new `test:component` (or similar) script attaches (D-04)
- `ealch-v2/src/components/ui.tsx`'s `Toggle` function — where D-07's `accessibilityRole`/`accessibilityState` addition attaches
- A new jest config (location/filename is planner's call — likely `jest.config.js` or a `jest` key in `package.json`) and likely a jest setup file for native-module mocks (D-05)

</code_context>

<specifics>
## Specific Ideas

No exact UI copy or visual treatment applies — this is test infrastructure, not a user-facing feature. The one piece of specific, concrete guidance from discussion: the accessibility label added to `Toggle` (if any, beyond the role) should read naturally for a screen reader per the row it's in (e.g., reflecting "Sound" for the Settings sound toggle), not a generic placeholder.

</specifics>

<deferred>
## Deferred Ideas

- **Broader accessibility fixes beyond `Toggle`** (e.g., a default role on `Press` itself, or auditing other Settings controls) — explicitly belongs to Phase 8: Accessibility Retrofit, not this phase. Considered and rejected as in-scope here during discussion (D-07).
- **Testing `exam-section.tsx` or the home/hub screen** — considered as the first-screen target (D-01) and deferred as future work once the Settings-screen pattern is proven; `exam-section.tsx` in particular would be a strong candidate for Phase 19's exam-grading test coverage given its heavier mocking surface is exactly what that phase needs to solve anyway.

### Reviewed Todos (not folded)
None — `todo.match-phase` returned zero matches for Phase 18.

</deferred>

---

*Phase: 18-Component Test Infrastructure*
*Context gathered: 2026-09-22*
