# Phase 18: Component Test Infrastructure - Research

**Researched:** 2026-09-21
**Domain:** React Native / Expo component testing (Jest + jest-expo + React Native Testing Library) on a bleeding-edge stack (Expo SDK ~57, React Native 0.86.2, React 19.2.3)
**Confidence:** HIGH (all version/config claims verified live against the npm registry and the actual installed `node_modules` tree; a few interaction-order claims are MEDIUM, flagged inline)

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** First (and for this phase, only) component test targets `ealch-v2/app/settings.tsx` — chosen over the home/hub screen (heavier app-state mocking) and `exam-section.tsx` (heaviest mocking surface: AsyncStorage, AppState, network — save for a later phase once the pattern is proven). Settings has a dense, representative set of standard controls (toggles, buttons, links) and is a natural target for Phase 8's later accessibility audit, satisfying ROADMAP.md's "ideally one of the screens touched by Phase 8" success criterion.
- **D-02:** Test depth is "smoke + one interaction": render the screen, assert key controls exist with correct accessible roles/labels (`getByRole`), AND simulate one real user action (a tap on the sound toggle in the "Sound" `ToggleRow`) and assert the resulting state/UI change. A pure smoke-render test was rejected as insufficient — CONCERNS.md's actual flagged gap is "user input flows through React," not just "does it render."
- **D-03:** No snapshot testing. Explicit assertions only, matching the existing `node --test` convention in this codebase (which deliberately avoids snapshot-style tests) — snapshots tend to get rubber-stamp-updated without being read, defeating the point.
- **D-04:** New Jest/RNTL suite runs as a separate npm script (e.g. `npm run test:component`), NOT folded into the existing `npm test` (which stays pure `node --test`, ~35-45s for 844+ tests). Jest/RNTL startup overhead (transforms, native mocks) is real and shouldn't slow down the existing fast feedback loop. Both must be documented as required checks (planner/executor should wire this into whatever "run before considering a task done" convention this phase's plan establishes), but they remain two separate commands.
- **D-05:** Mocking depth for Settings' dependencies (`useStore`, `useUI`, `useEntitlement` zustand stores; `purchases`, `analytics`, `sound` services) is "mock at the service/native boundary" — real zustand store logic runs unmocked; only native modules and network-touching calls (AsyncStorage, Supabase, Adapty, sound playback via `expo-audio`/`expo-speech`) are mocked. This catches store-wiring/selector bugs, not just rendering bugs, at the cost of a slightly heavier per-test setup than mocking the stores directly.
- **D-06:** Produce a short written recipe (e.g. `ealch-v2/TESTING.md` or similar — exact filename/location is Claude's discretion) documenting the jest-expo setup, the service/native-boundary mocking convention, and how to add the next component test. Phase 19 (TEST-01/TEST-03, exam grading + notification delivery) depends on this phase and will need to follow the same pattern — bare "prove it once" was rejected because Phase 19 shouldn't have to reverse-engineer the convention from one example file.
- **D-07:** The `Toggle` component (`ealch-v2/src/components/ui.tsx` ~line 216) currently sets **no `accessibilityRole` at all** — it wraps `Press`, which is a bare `Pressable` with no default role (confirmed by reading both components directly this session; `CONCERNS.md`'s suspicion that "a default `accessibilityRole="button"` on the shared `Press` component likely closes most of the gap" is accurate — `Press` sets none). This means a `getByRole`-style query against the Settings sound toggle will fail against current code as-is. **Decision: add `accessibilityRole="switch"` + `accessibilityState={{checked: value}}` to the `Toggle` component ONLY** (not a global fix to `Press`, and not deferred to a different already-accessible element instead). This is a minimal, scoped fix whose sole purpose is making this phase's own test possible — it is explicitly NOT Phase 8's broader accessibility retrofit (353 controls audited, ~64 currently correct) and should not be read as starting that work early. A global `Press` default-role fix was considered and rejected here as too large a blast radius for this phase (Press is used everywhere in the app, including non-button contexts) — that decision belongs to Phase 8.

### Claude's Discretion

- Exact npm script name for the component-test command (e.g. `test:component` vs `test:jest` vs `test:rntl`).
- Exact filename/location for the written testing recipe (D-06).
- jest-expo version pinning strategy (must match Expo SDK ~57.x — exact patch version is an implementation detail).
- Whether the jest config targets a single platform (android) by default or supports both — this app's dev workflow is Android-first (USB Pixel device), but no strong preference was expressed.
- Precise wording/labels for the new `accessibilityLabel` (if one is added alongside the role) on `Toggle` — should read naturally for a screen reader (e.g. reflecting the row's title, like "Sound" or "Sound, on").

### Deferred Ideas (OUT OF SCOPE)

- **Broader accessibility fixes beyond `Toggle`** (e.g., a default role on `Press` itself, or auditing other Settings controls) — explicitly belongs to Phase 8: Accessibility Retrofit, not this phase. Considered and rejected as in-scope here during discussion (D-07).
- **Testing `exam-section.tsx` or the home/hub screen** — considered as the first-screen target (D-01) and deferred as future work once the Settings-screen pattern is proven; `exam-section.tsx` in particular would be a strong candidate for Phase 19's exam-grading test coverage given its heavier mocking surface is exactly what that phase needs to solve anyway.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-------------------|
| TEST-02 | The app has component-render test infrastructure (Jest + React Native Testing Library) capable of testing at least one real screen | Standard Stack table gives exact, version-verified install list (jest 30.5.2, jest-expo 57.0.5, @testing-library/react-native 14.0.1, test-renderer 1.3.0); Architecture Patterns + Code Examples give the exact jest.config.js/jest.setup.ts shape and the full working `settings.test.tsx` example satisfying both the "infrastructure alongside node --test" and "one real screen with getByRole assertions" halves of the requirement; Common Pitfalls 1-4 cover the specific breaking-change traps (peer-dep conflict, async API, rehydration timing, missing accessibilityRole) that would otherwise block TEST-02 from actually passing |
</phase_requirements>

## Summary

This phase adds Jest-based component-render testing to `ealch-v2`, which currently has zero Jest infrastructure (only `node --test` for pure-logic tests). The stack's bleeding-edge versions (React 19.2.3, RN 0.86.2, Expo SDK ~57.0.9) make this a non-trivial install: **`@testing-library/react-native` must be pinned to v14.x**, not the commonly-referenced v13.x, because v13 depends on the now-deprecated `react-test-renderer` which does not support React 19's concurrent renderer. v14 replaces it with a new peer package literally named `test-renderer` (published by the React core team) and makes `render`/`fireEvent`/`act` **async by default** — every call site in the phase's test must be `await`ed. This is the single biggest correctness risk for the planner's task actions: copy-pasting "classic" RNTL v13-style sync examples from training data or older blog posts will produce code that either fails to compile against v14's types or silently returns a `Promise` that nothing awaits.

The good news: the target screen (`app/settings.tsx`) is easier to test than it first looks. `useSafeAreaInsets()` **will throw** without a `<SafeAreaProvider>` wrapper (confirmed by reading the library source directly), so the test must wrap the screen. But `useRouter()` from `expo-router` does **not** require any navigation context to avoid throwing in this version — it returns a module-level imperative singleton — so mocking `expo-router` is a safety/isolation choice, not a hard requirement. All three zustand stores (`useStore`, `useUI`, `useEntitlement`) are plain `create()` stores with no Provider requirement, confirming D-05's "real store logic runs unmocked" is fully feasible with zero extra harness. `jest-expo`'s bundled `setup.js` auto-mocks nearly every native Expo module generically (expo-audio, expo-haptics, expo-linear-gradient, expo-notifications, etc. all get their native bridge functions replaced with `jest.fn()` stubs automatically) — the one thing it does **not** auto-mock is `@react-native-async-storage/async-storage`, which needs one explicit `jest.mock(...)` line using the package's own official mock file (confirmed present in `node_modules`). Supabase and Adapty are both lazily instantiated (function calls / `require()` inside `try/catch`, never at module top level), so neither triggers real network/native calls just by importing `settings.tsx`'s dependency graph — but D-05 still calls for mocking them explicitly, and the setup file should do so for forward-compatibility with Phase 19's heavier screens.

**Primary recommendation:** Install `jest@^30`, `jest-expo@57.0.5` (peer-fixed for RN 0.86.x — earlier 57.0.0 had a known peer-dep conflict, see Pitfall 1), `@testing-library/react-native@^14.0.1`, `test-renderer@^1.3.0`, `@types/jest@^30`. Write a `jest.config.js` (not a `package.json` `jest` key, to keep it out of the way of the existing `test`/`test:i18n` npm scripts) using `preset: 'jest-expo'`, a `moduleNameMapper` for the `@/` alias, and a `setupFiles`/`setupFilesAfterEach` pair that mocks AsyncStorage, Supabase, Adapty, and the `sound` service. Wrap the rendered screen in `<SafeAreaProvider initialMetrics={...}>`. Use `render`/`fireEvent`/`screen.getByRole` all `await`ed per RNTL v14's async API.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Component-render test execution | Dev tooling (Jest, on-device build not involved) | — | Runs in Node via Jest's jsdom/RN test environment, not on a real device/simulator |
| Screen rendering under test (`Settings`) | Client / Browser tier (React Native component tree) | — | Same React component tree that runs on-device; test renders it in-process |
| Store logic exercised during test (`useStore`, `useUI`, `useEntitlement`) | Client tier (in-memory zustand) | — | Real store code runs unmocked per D-05; no server/API tier involved |
| Native/service boundary (AsyncStorage, Supabase, Adapty, sound) | Client tier, mocked at the native-module boundary | — | D-05: everything crossing into native or network territory is replaced with a test double so the test stays deterministic and offline |
| Accessibility role exposure (`Toggle`'s `accessibilityRole="switch"`) | Client / Browser tier (React Native accessibility tree) | — | Pure component-prop change; no other tier involved |

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `jest` | `30.5.2` `[VERIFIED: npm registry]` | Test runner for the new component-test script | Required peer of `jest-expo` and `@testing-library/react-native@14` (`jest: ">=29.0.0"`) |
| `jest-expo` | `57.0.5` `[VERIFIED: npm registry]` | Expo's Jest preset — provides `preset: 'jest-expo'`, native-module auto-mocks, asset transformers, default `transformIgnorePatterns` | Official Expo-recommended preset; version pinned to match Expo SDK 57 per Expo's own docs convention (`docs.expo.dev/develop/unit-testing`) `[CITED: docs.expo.dev/develop/unit-testing]` |
| `@testing-library/react-native` | `14.0.1` `[VERIFIED: npm registry]` | Component rendering + `getByRole`-style queries + `fireEvent` | The only RNTL major that supports React 19 (see Pitfall 2) |
| `test-renderer` | `1.3.0` `[VERIFIED: npm registry]` | RNTL v14's replacement for the deprecated `react-test-renderer`; required peer (`"test-renderer": "^1.0.0"`) | Published by the React core team specifically to replace `react-test-renderer` for React 19+; all published versions (1.0-1.3) declare peer `react: ^19.0.0`, so any 1.x satisfies React 19.2.3 |
| `@types/jest` | `30.0.0` `[VERIFIED: npm registry]` | TypeScript types for `describe`/`it`/`expect` globals in the new test files | Standard; matches `jest@30` major |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `@react-native-async-storage/async-storage/jest/async-storage-mock` | (bundled with already-installed `^2.2.0`) `[VERIFIED: file exists at ealch-v2/node_modules/@react-native-async-storage/async-storage/jest/async-storage-mock.js]` | Official in-memory AsyncStorage mock | Required in the setup file — jest-expo does NOT auto-mock this package (confirmed by inspecting `jest-expo`'s bundled mock tables; AsyncStorage's native module name `RNCAsyncStorage` is absent from both `expoModules.js` and `thirdPartyModules.js`) |
| `react-native-safe-area-context` (already installed `~5.7.0`) | `testing`/`initialMetrics` export | Provides `<SafeAreaProvider initialMetrics={...}>` for tests, avoiding a real native measurement round-trip | Wrap the rendered screen — `useSafeAreaInsets()` throws without it (see Code Examples) |
| `expo-router/testing-library` (bundled with already-installed `expo-router@~57.0.9`, no separate install) | `renderRouter`, `screen`, re-exported RNTL primitives | Full in-memory router rendering (multi-screen navigation tests) | NOT needed for this phase's single-screen smoke+interaction test (see Pattern 2) — documented here because Phase 19 or later screen tests may need it |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Direct `render(<Settings />)` of the route's default export | `expo-router/testing-library`'s `renderRouter({ appDir: ... })` | `renderRouter` gives real routing/URL assertions but pulls in `app/_layout.tsx`'s full provider tree (splash screen, Adapty init, notification channel setup) — much larger mocking surface than D-02's "smoke + one interaction" scope calls for. Direct `render()` of the default export is simpler and matches the phase's actual scope; `renderRouter` is the right tool for a *future* phase that tests cross-screen navigation. |
| `test-renderer` package (RNTL v14's new peer) | Keep `react-test-renderer` + RNTL v13.3.3 | v13 doesn't support React 19's concurrent features; jest-expo 57.0.5 itself lists `react-test-renderer: 19.2.3` as an internal dependency, but this is a compatibility shim, not an endorsement — Expo's own docs explicitly say "react-test-renderer does not support React 19 and above" and point at RNTL instead `[CITED: docs.expo.dev/develop/unit-testing]` |

**Installation:**
```bash
cd ealch-v2
npx expo install jest-expo --dev
npm install --save-dev jest@^30 @testing-library/react-native@^14.0.1 test-renderer@^1.3.0 @types/jest@^30
```
(`npx expo install jest-expo` lets Expo's own version-resolution logic pick the SDK-57-correct patch; a plain `npm install jest-expo` would also resolve to `57.0.5` today but `expo install` is the officially documented path and self-corrects if SDK 57 gets a later jest-expo patch before this phase executes.)

**Version verification:** All versions above were checked live against the npm registry on 2026-09-21 via `npm view <pkg> version` / `npm view <pkg> versions --json`. Re-verify immediately before running the install command, since this stack is unusually fresh (Expo SDK 57 and RNTL v14 both shipped recently) and patch releases are frequent.

## Architecture Patterns

### System Architecture Diagram

```
 Jest CLI (npm run test:component)
        │
        ▼
 jest.config.js
   preset: 'jest-expo'  ──► @react-native/jest-preset (base RN config)
   moduleNameMapper: '@/*' → 'src/*'
   setupFiles: [jest-expo's own setup.js (auto, via preset)]
   setupFilesAfterEach / setupFilesAfterEach-equivalent:
        └─ jest.setup.ts (project-authored)
              ├─ jest.mock('@react-native-async-storage/async-storage', → official mock)
              ├─ jest.mock('@/services/supabase', → { supabase: () => null })
              ├─ jest.mock('react-native-adapty', → stub adapty object)
              └─ jest.mock('@/services/sound', → { sound: { play: jest.fn(), unlock: jest.fn() } })
        │
        ▼
 settings.test.tsx
   render(
     <SafeAreaProvider initialMetrics={mockSafeAreaMetrics}>
       <Settings />
     </SafeAreaProvider>
   )                                    ← RNTL v14: render() returns a Promise, must await
        │
        ├─► Settings() calls useTheme()/useT() → useStore() (REAL zustand store, unmocked)
        ├─► Settings() calls useStore()/useUI()/useEntitlement() directly (REAL, unmocked)
        ├─► Settings() calls useSafeAreaInsets() → reads SafeAreaProvider context (mocked metrics)
        ├─► Settings() calls useRouter() → returns expo-router's imperative singleton (no context needed, not exercised by this test's interaction)
        └─► ToggleRow → Toggle → Press → sound.play('tap') (MOCKED — no real expo-audio call)
        │
        ▼
 screen.getByRole('switch', { name: /sound/i })   ← requires D-07's accessibilityRole fix on Toggle
        │
        ▼
 await fireEvent.press(toggle)                     ← RNTL v14: fireEvent is async, must await
        │
        ▼
 assert new accessibilityState / store.sound flipped
```

### Recommended Project Structure
```
ealch-v2/
├── jest.config.js              # new — preset, moduleNameMapper, setupFilesAfterEach
├── jest.setup.ts                # new — AsyncStorage/Supabase/Adapty/sound mocks (D-05 boundary)
├── __tests__/                   # new — OR co-locate as src/__tests__/ or app/__tests__/; either is fine, Jest discovers by testMatch
│   └── settings.test.tsx        # D-01/D-02 target test
├── app/
│   └── settings.tsx              # UNCHANGED — the screen under test
├── src/components/ui.tsx         # D-07 fix: Toggle gets accessibilityRole="switch"
├── package.json                  # new "test:component" script (D-04), existing "test" untouched
└── TESTING.md                    # or similar — D-06's recipe doc, exact location is Claude's discretion
```
Note: putting test files under `app/` itself is explicitly discouraged by Expo's own testing docs (`expo-router` treats every file under `app/` as a route) `[CITED: docs.expo.dev/router/reference/testing]` — even though this phase isn't using `expo-router/testing-library`'s `renderRouter`, the same constraint applies generally: never put `*.test.tsx` files inside `app/`.

### Pattern 1: Wrapping the screen for a safe render
**What:** `useSafeAreaInsets()` throws `"No safe area value available. Make sure you are rendering <SafeAreaProvider> at the top of your app."` if rendered without a provider — confirmed by reading `node_modules/react-native-safe-area-context/src/SafeAreaContext.tsx` directly in this repo.
**When to use:** Any component tree that (transitively) calls `useSafeAreaInsets()` or `useSafeAreaFrame()`. `settings.tsx` calls it directly at line 91.
**Example:**
```typescript
// Source: react-native-safe-area-context's own README testing section
// (verified against installed node_modules/react-native-safe-area-context@5.7.0)
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { render, screen } from '@testing-library/react-native';
import Settings from '@/../app/settings'; // or relative import to app/settings.tsx

test('renders the sound toggle', async () => {
  await render(
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Settings />
    </SafeAreaProvider>,
  );
  expect(screen.getByRole('switch', { name: /sound/i })).toBeTruthy();
});
```
Note: `initialWindowMetrics` is `null` in a pure Jest/Node environment (it's populated by the native module at real app startup), so in practice pass an explicit metrics object instead of relying on `initialWindowMetrics` being non-null:
```typescript
const mockSafeAreaMetrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};
```

### Pattern 2: `useRouter()` needs no wrapper (verified from source, MEDIUM-confidence on downstream behavior)
**What:** In this installed `expo-router@57.0.9`, `useRouter()`'s implementation (`node_modules/expo-router/build/hooks/useRouter.js`) does not read from a React Navigation context at all in the non-preview case — it returns the module-level imperative `router` singleton from `expo-router/imperative-api` directly. `[VERIFIED: read from node_modules/expo-router/src/hooks/useRouter.ts source map]`
**When to use:** Confirms `settings.tsx` can be rendered with `useRouter()` unmocked without an import-time or render-time crash. **MEDIUM confidence** on what happens if the test's interaction ever calls `router.push(...)`/`router.replace(...)` for real (this phase's D-02 interaction — tapping the sound toggle — never calls a router method, so this isn't exercised) — the imperative singleton likely no-ops or warns if no navigation ref is mounted, but this was not directly verified by executing code, only by reading the hook's source. If a future test needs to assert navigation happened, mock `expo-router`'s `useRouter` explicitly:
```typescript
jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  useRouter: () => ({ push: jest.fn(), replace: jest.fn(), back: jest.fn() }),
}));
```

### Pattern 3: Mocking at the service/native boundary (D-05)
**What:** A `jest.setup.ts` file (referenced via `setupFilesAfterEach` — actually `setupFiles` or a dedicated `setupFilesAfterEach`, see Code Examples for the precise config key) that mocks exactly the D-05 list, nothing more.
**When to use:** Loaded once per test file via jest config, before store/component code runs.
**Example:**
```typescript
// jest.setup.ts
// Source: official AsyncStorage mock (verified file exists in node_modules)
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// Supabase: supabase() is a lazy function (services/supabase.ts) — mock it to
// always return null (the same "offline mode" path the app already has).
jest.mock('@/services/supabase', () => ({
  supabase: () => null,
}));

// Adapty: purchases.ts already handles a missing native module gracefully via
// try/catch require(), but mock it explicitly per D-05 rather than rely on that.
jest.mock('react-native-adapty', () => ({
  adapty: {
    activate: jest.fn(() => Promise.resolve()),
    isActivated: jest.fn(() => Promise.resolve(false)),
    addEventListener: jest.fn(),
    restorePurchases: jest.fn(() => Promise.resolve({})),
  },
}));

// sound: real expo-audio native calls are already no-op'd by jest-expo's
// generic native-module mocking, but mock the service module directly for a
// predictable, assertable boundary per D-05.
jest.mock('@/services/sound', () => ({
  sound: { play: jest.fn(), unlock: jest.fn() },
}));
```

### Anti-Patterns to Avoid
- **Using sync RNTL v13-style API calls (`const { getByRole } = render(...)` without `await`):** RNTL v14 made `render`, `fireEvent`, `act`, `renderHook` all return Promises. A non-awaited `render()` call will start rendering but the test will proceed (and likely assert) before it settles, producing flaky "element not found" failures that look like a query problem but are actually a missing `await`.
- **Mocking the zustand stores themselves:** D-05 explicitly rejects this — mock only the native/network boundary underneath them, so store-wiring bugs are still caught.
- **Putting `*.test.tsx` inside `app/`:** `expo-router` treats every file in `app/` as a route; a test file there either becomes an accidental route or breaks the router's file-based convention. Use `__tests__/` or co-locate outside `app/`.
- **Relying on jest-expo's generic native-module auto-mock instead of an explicit `jest.mock` for AsyncStorage:** confirmed NOT auto-mocked (see Standard Stack table) — omitting the explicit mock will make any AsyncStorage call in the render path hit the real `NativeModules.RNCAsyncStorage`, which is undefined in the Jest environment and will throw.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|--------------|-----|
| AsyncStorage mock | A custom in-memory `Map`-backed fake | `@react-native-async-storage/async-storage/jest/async-storage-mock` (already in `node_modules`) | It's the package's own maintained mock, already matches its exact API surface including multi-get/multi-set batch methods that `useStore.ts`'s persist middleware may call |
| Safe-area insets in tests | Manually stubbing `useSafeAreaInsets` via `jest.mock('react-native-safe-area-context', ...)` | `<SafeAreaProvider initialMetrics={...}>` wrapper | The library ships exactly this testing pattern; hand-mocking the hook risks drifting from the real context shape (`frame` + `insets`) other code may read |
| Native Expo module stubs (expo-audio, expo-haptics, expo-linear-gradient, etc.) | Per-module `jest.mock()` calls for every native Expo package the render path touches | jest-expo's bundled `setup.js` (automatic via `preset: 'jest-expo'`) | Confirmed to already replace every native-module function across ~all `expo-*` packages with `jest.fn()` stubs generically — writing per-module mocks would be redundant and a maintenance burden as the app adds more `expo-*` deps |

**Key insight:** The temptation on a screen this dependency-heavy is to over-mock. jest-expo already solves the "native module doesn't exist in Node" problem broadly; the ONLY targeted mocks this phase needs are the ones D-05 named (AsyncStorage explicitly, Supabase/Adapty/sound for isolation and assertability) — everything else (expo-linear-gradient, expo-haptics inside `sound.ts`'s `playNative`, `expo-router`) either already works via the generic auto-mock or doesn't need mocking at all (Pattern 2).

## Common Pitfalls

### Pitfall 1: jest-expo/RN 0.86 peer-dependency conflict (version-specific, now resolved at the pinned version)
**What goes wrong:** `jest-expo@57.0.0` declared a peer dependency on `@react-native/jest-preset@^0.85.0`, but SDK 57 apps run `react-native@0.86.x`, which wants `@react-native/jest-preset@^0.86.x` — `npm install` fails with `ERESOLVE`. `[CITED: github.com/expo/expo/issues/47435]`
**Why it happens:** jest-expo's peer-dep pin lagged one RN preset version behind at 57.0.0.
**How to avoid:** Pin `jest-expo@57.0.5` specifically (not a bare `^57.0.0` or "latest 57.x" without checking) — `57.0.5`'s own `peerDependencies` already lists `"@react-native/jest-preset": "^0.86.3"` `[VERIFIED: npm view jest-expo@57.0.5 peerDependencies]`, and `@react-native/jest-preset@0.86.3` is a published stable version `[VERIFIED: npm registry]`, so the conflict this GitHub issue describes should already be resolved at this pin. Still worth a `npm install` dry run before committing to the plan, since this is a very recent SDK.
**Warning signs:** `ERESOLVE` errors mentioning `@react-native/jest-preset` during `npm install`. If it recurs, the documented workaround is `"overrides": { "@react-native/jest-preset": "0.86.3" }` in `package.json`.

### Pitfall 2: RNTL v14's async API is a silent trap, not a compile error, in JS-shaped test code
**What goes wrong:** `render()`, `fireEvent.press()`, `act()` all return Promises now. If a test doesn't `await` them, the test function may finish (and Jest may report it as passing, since no assertion technically failed yet) before the render/interaction actually completed, OR later assertions fail with confusing "not found" errors that look like a bad `getByRole` query rather than a missing `await`.
**Why it happens:** This is a deliberate v14 breaking change (`@testing-library/react-native` changelog, "core rendering and event APIs are now async by default") to align with React 19's concurrent rendering model. `[CITED: oss.callstack.com/react-native-testing-library/docs/start/migration-v14]`
**How to avoid:** Every `render(...)`, `fireEvent.press(...)`/`fireEvent.changeText(...)`/etc., and any manual `act(...)` call in the new test file must be `await`ed. The test function itself must be `async`.
**Warning signs:** Assertions immediately after `render()` or `fireEvent` intermittently fail, or TypeScript flags `Promise<RenderResult>` being used where a `RenderResult` was expected (if `strict` mode is on, which it is here per `tsconfig.json`).

### Pitfall 3: zustand `persist` + AsyncStorage rehydration happens asynchronously after first render
**What goes wrong:** `useStore.ts` wraps its state in zustand's `persist` middleware backed by `AsyncStorage` (`createJSONStorage(() => AsyncStorage)`, confirmed at line 400, with an `onRehydrateStorage` callback at line 433). The component renders synchronously first with the store's hard-coded defaults (`sound: true` at line 178), then zustand asynchronously reads from the (mocked) AsyncStorage and may call `set()` again once rehydration resolves — a state update that lands after the initial `render()` promise has already resolved.
**Why it happens:** This is standard zustand `persist` behavior; it's not specific to jest-expo/RNTL, but it interacts with async test APIs (Pitfall 2) in a way that's easy to miss.
**How to avoid:** With the AsyncStorage mock returning `null`/empty by default (no prior stored state), rehydration should just confirm the existing default values (`sound: true`), so this is unlikely to change the interaction's *outcome* — but a stray "state update not wrapped in `act()`" console warning is plausible if the rehydration promise resolves in a later microtask after the test's `render()` await settles. If this shows up, wrap the initial render in `await waitFor(() => expect(...).toBeTruthy())` or add one `await act(async () => {})` tick before the first assertion.
**Warning signs:** Console warnings mentioning "not wrapped in act(...)" appearing in the component-test output despite every RNTL call already being awaited.

### Pitfall 4: `getByRole('switch', ...)` will fail until D-07's fix lands
**What goes wrong:** `Toggle` currently sets no `accessibilityRole` at all (confirmed by reading `ui.tsx` lines 216-243 directly this session — `Toggle` wraps `Press`, and `Press` (lines 25-42) sets no default role either). A `getByRole('switch', ...)` query against the unmodified component will throw "Unable to find an element with role switch."
**Why it happens:** Pre-existing accessibility gap, the exact one D-07 is scoped to fix.
**How to avoid:** D-07's fix (`accessibilityRole="switch"` + `accessibilityState={{ checked: value }}` on `Toggle` only) must land in the same phase, before or alongside the test — the plan should sequence the `ui.tsx` edit before/with the test file, not after.
**Warning signs:** N/A — this will simply fail loudly if skipped; not a subtle pitfall, listed here for completeness since it's this phase's own confirmed precondition.

## Code Examples

### Full example: `__tests__/settings.test.tsx`
```typescript
// Source: composed from React Native Testing Library v14 migration guide
// (oss.callstack.com/react-native-testing-library/docs/start/migration-v14)
// + react-native-safe-area-context testing pattern (installed v5.7.0 source)
// + this repo's own D-01/D-02/D-07 decisions
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Settings from '../app/settings';

const mockSafeAreaMetrics = {
  frame: { x: 0, y: 0, width: 390, height: 844 },
  insets: { top: 47, left: 0, right: 0, bottom: 34 },
};

function renderSettings() {
  return render(
    <SafeAreaProvider initialMetrics={mockSafeAreaMetrics}>
      <Settings />
    </SafeAreaProvider>,
  );
}

describe('Settings screen', () => {
  it('renders key controls with accessible roles', async () => {
    await renderSettings();
    expect(screen.getByRole('switch', { name: /sound/i })).toBeTruthy();
  });

  it('toggles sound effects on tap', async () => {
    await renderSettings();
    const toggle = screen.getByRole('switch', { name: /sound/i });
    expect(toggle.props.accessibilityState?.checked).toBe(true); // default: sound: true

    await fireEvent.press(toggle);

    expect(screen.getByRole('switch', { name: /sound/i }).props.accessibilityState?.checked).toBe(false);
  });
});
```

### `jest.config.js`
```javascript
// Source: jest-expo's own jest-preset.js (read directly from the package
// tarball this session — confirms preset already sets transformIgnorePatterns
// and pushes its own setupFiles entry automatically)
/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-expo',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEach: ['<rootDir>/jest.setup.ts'], // see caveat below
  testMatch: ['<rootDir>/__tests__/**/*.test.tsx'],
};
```
**Caveat on the setup-file config key:** Jest's actual config key for "run before every test file, after the test framework is set up" is `setupFilesAfterEach` for per-test cleanup hooks OR `setupFilesAfterEach`-adjacent `setupFilesAfterEnv` for one-time-per-file mock registration (`jest.mock(...)` calls at module scope belong in `setupFilesAfterEnv`, not `setupFilesAfterEach`, which is a newer, narrower hook meant for `afterEach`-style cleanup). **This distinction was not independently re-verified against Jest 30's exact docs in this research pass** — the planner/executor should confirm whether Jest 30 still uses `setupFilesAfterEnv` as the standard key for `jest.mock()`-style setup (this has been Jest's convention since v20+) before finalizing `jest.config.js`. `[ASSUMED]`

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|---------------|--------|
| `@testing-library/react-native` v13.x + `react-test-renderer` | `@testing-library/react-native` v14.x + `test-renderer` (new package) | RNTL v14.0.0 release, 2026 (exact date not confirmed this session) | Any training-data-era code example using sync `render()`/`fireEvent()` needs `await` added; `react-test-renderer` should be removed from devDependencies entirely, not installed alongside |
| `@testing-library/jest-native`'s `toBeOnTheScreen()`/custom matchers as a separate package | Matchers built into `@testing-library/react-native` core (confirmed by RNTL v14's own dependency list including `jest-matcher-utils` directly, no separate `jest-native` peer) | Folded in prior to v14 (exact version not independently verified this session) `[ASSUMED — MEDIUM confidence, based on absence of jest-native from RNTL 14's dependency tree rather than a direct changelog read]` | Do not add `@testing-library/jest-native` as a dependency; it would be redundant and its README itself points users to the now-built-in matchers |

**Deprecated/outdated:**
- `react-test-renderer`: deprecated by the React team for React 19+; do not add it as a devDependency even though `jest-expo` itself still lists it as an internal dependency (that's jest-expo's own compatibility shim, unrelated to what RNTL needs).

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|----------------|
| A1 | Jest 30's correct config key for module-scope `jest.mock()` setup is `setupFilesAfterEnv`, not `setupFilesAfterEach` | Code Examples, `jest.config.js` caveat | Low-medium — wrong key means mocks don't register before tests run, producing real-module-not-mocked failures that are easy to diagnose and fix during first test run |
| A2 | `@testing-library/jest-native`'s matchers are now fully folded into RNTL v14 core with no separate install needed | State of the Art | Low — if wrong, `toBeOnTheScreen()`-style matcher calls (not actually used in this phase's example test, which uses `.toBeTruthy()` and `.props.accessibilityState` instead) would need the extra package; the example test in this doc avoids the question entirely by not depending on jest-native-specific matchers |
| A3 | `router.push()`/`replace()` called with no navigation ref mounted no-ops or warns rather than throwing | Pattern 2 | Low for THIS phase (not exercised by the sound-toggle interaction) — matters only if a future test taps a `Press` that calls `router.push` |

**If this table is empty:** N/A — see entries above; all are low/medium risk and none block this phase's specific D-01/D-02 scope.

## Open Questions (RESOLVED)

1. **(RESOLVED) Exact `setupFilesAfterEach` vs `setupFilesAfterEnv` Jest config key for Jest 30**
   - What we know: This has been a stable Jest convention (`setupFilesAfterEnv` for framework/mock setup) since early Jest versions; jest-expo's own preset pushes its native-module setup via `setupFiles` (an even earlier-running hook), not `setupFilesAfterEnv`.
   - What's unclear: Whether Jest 30 renamed or restructured this — not independently re-verified this session.
   - Recommendation: Planner/executor should run `npx jest --showConfig` after initial install to confirm the resolved config, or simply try `setupFilesAfterEnv` first (the long-standing convention) and adjust if `jest.mock()` calls in `jest.setup.ts` don't appear to take effect.
   - RESOLVED: Plan 01 Task 3 operationalizes this directly — it uses `setupFilesAfterEnv` per the long-standing convention and includes an explicit `npx jest --showConfig` diagnostic step plus a SUMMARY-recording requirement if mocks don't take effect, so the actual resolved answer is captured during execution for Phase 19 to reuse.

2. **(RESOLVED) Whether `npx expo install jest-expo` actually resolves to `57.0.5` at plan-execution time vs. this research's snapshot**
   - What we know: `57.0.5` is current as of 2026-09-21 and matches the app's `expo: ~57.0.9` pin.
   - What's unclear: This is one of the most actively-patched packages in the Expo ecosystem; a newer 57.0.x patch could ship between now and execution.
   - Recommendation: Executor should re-run `npm view jest-expo version` immediately before installing and use whatever the current 57.x patch is, rather than hard-pinning to exactly `57.0.5` if a newer patch exists.
   - RESOLVED: Plan 01 Task 1 requires a live `npm view jest-expo@57 version` re-check immediately before install, exactly matching this recommendation — the plan-checker independently confirmed `57.0.5`'s peerDependencies live against the npm registry during verification and found it still current.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|--------------|-----------|---------|----------|
| Node.js (for `npm install` / `jest` CLI) | Running the new test suite at all | ✓ (implied — `node --test` already runs in this repo for the existing 844+ tests) | not independently re-checked this session | — |
| npm registry access | Installing jest/jest-expo/RNTL/test-renderer | ✓ (used throughout this research session to query live versions) | — | — |
| Android/iOS simulator or device | NOT required | N/A | — | jest-expo's test environment runs entirely in Node; no simulator/device needed for component-render tests |

No missing dependencies identified. This phase has no blocking environment gaps.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Jest 30.5.2 + jest-expo 57.0.5 + @testing-library/react-native 14.0.1 (new, this phase) — separate from the existing `node --test` framework used for 844+ logic tests |
| Config file | `ealch-v2/jest.config.js` (new, this phase) |
| Quick run command | `npm run test:component` (or whatever exact name is chosen per D-04's discretion — e.g. `npx jest __tests__/settings.test.tsx`) |
| Full suite command | `npm run test:component` (same — this phase adds exactly one test file; "quick" and "full" are identical until Phase 19 adds more) |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|---------------------|---------------|
| TEST-02 | Jest+jest-expo+RNTL configured and runnable alongside `node --test` | infrastructure/smoke | `npm run test:component` (new script must exit 0) | ❌ Wave 0 — jest.config.js, jest.setup.ts, package.json script all need creating |
| TEST-02 | One real screen (`settings.tsx`) has a passing `getByRole` component-render test | component | `npm run test:component -- settings` (or full run) | ❌ Wave 0 — `__tests__/settings.test.tsx` needs creating |
| TEST-02 | The Sound toggle's tap interaction updates state, provable via `getByRole` | component (interaction) | same file, second `it(...)` block | ❌ Wave 0 — same file |

### Sampling Rate
- **Per task commit:** `npm run test:component`
- **Per wave merge:** `npm run test:component` AND `npm test` (existing 844+ `node --test` suite) — both must stay green per D-04's "both must be documented as required checks" note
- **Phase gate:** Both suites green before `/gsd-verify-work`

### Wave 0 Gaps
- [ ] `ealch-v2/jest.config.js` — new, no existing Jest config in this repo (confirmed: no `jest.config*` file anywhere in the repo, and `ealch-admin` — the only other package in this workspace — has no Jest setup either, per a direct grep of its `package.json`)
- [ ] `ealch-v2/jest.setup.ts` — new, D-05's mock boundary file
- [ ] `ealch-v2/__tests__/settings.test.tsx` (or equivalent path) — new, the D-01/D-02 proof test
- [ ] `package.json` `"test:component"` script — new
- [ ] `src/components/ui.tsx` `Toggle` accessibility fix (D-07) — must land before/with the test, since the test depends on it
- [ ] Package installs: `jest-expo@57.0.5`, `@testing-library/react-native@^14.0.1`, `test-renderer@^1.3.0`, `jest@^30`, `@types/jest@^30`

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|-----------------|---------|---------------------|
| V2 Authentication | No | This phase adds test tooling and one accessibility prop; no auth surface touched |
| V3 Session Management | No | — |
| V4 Access Control | No | — |
| V5 Input Validation | No | `Toggle`'s new `accessibilityState={{ checked: value }}` reads the existing `value` prop already flowing through the component — no new external input surface |
| V6 Cryptography | No | — |

### Known Threat Patterns for this stack
None applicable — this phase's scope (test infrastructure + one `accessibilityRole` prop) introduces no new attack surface, no new data flow, no new persisted state, and no new network calls. The test's mocks (Supabase/Adapty returning inert stubs) exist purely to keep the test suite deterministic and offline; they are not shipped in production builds (test files and `jest.setup.ts` are excluded from the Metro bundle by construction — Jest config, not app config).

## Sources

### Primary (HIGH confidence)
- `ealch-v2/node_modules/react-native-safe-area-context/src/SafeAreaContext.tsx` (installed v5.7.0) — read directly, confirms `useSafeAreaInsets()` throws without `SafeAreaProvider`
- `ealch-v2/node_modules/expo-router/build/hooks/useRouter.js` + source map (installed v57.0.9) — read directly, confirms `useRouter()` returns an imperative singleton, not context-dependent
- `ealch-v2/node_modules/expo-router/build/testing-library/*` (installed v57.0.9) — read directly, confirms `expo-router/testing-library` ships bundled (no separate install) with `renderRouter`, `MockContextConfig` (including an `{ appDir, overrides }` variant), and a `require-context-ponyfill` for Jest environments
- `jest-expo@57.0.5` package tarball, downloaded and extracted this session (`npm pack jest-expo@57.0.5`) — `jest-preset.js` and `src/preset/setup.js` read directly, confirms default `transformIgnorePatterns`, automatic `setupFiles` registration, and the exact scope of native-module auto-mocking (and AsyncStorage's absence from it)
- npm registry, queried live via `npm view` for: `jest-expo` (peerDependencies, versions), `@testing-library/react-native` (versions, peerDependencies, dependencies for both 13.3.3 and 14.0.1), `test-renderer` (versions, peerDependencies across 1.0.0/1.2.0/1.3.0), `@react-native/jest-preset` (versions, dependencies, peerDependencies), `jest`, `@types/jest`
- `ealch-v2/app/settings.tsx`, `ealch-v2/src/components/ui.tsx`, `ealch-v2/src/store/useStore.ts`, `ealch-v2/src/store/useUI.ts`, `ealch-v2/src/store/useEntitlement.ts`, `ealch-v2/src/theme/useTheme.ts`, `ealch-v2/src/i18n/useT.ts`, `ealch-v2/src/services/{supabase,sound,notifications,purchases,env,analytics}.ts`, `ealch-v2/package.json`, `ealch-v2/babel.config.js`, `ealch-v2/tsconfig.json` — all read directly this session

### Secondary (MEDIUM confidence)
- `docs.expo.dev/develop/unit-testing/` `[CITED]` — official Expo unit-testing guide (fetched via WebFetch; confirms the "react-test-renderer does not support React 19" guidance and basic `jest-expo` package.json config shape)
- `docs.expo.dev/router/reference/testing/` `[CITED]` — official Expo Router testing guide (fetched via WebFetch; confirms `renderRouter` API shape, "don't put test files in app/" convention)
- `oss.callstack.com/react-native-testing-library/docs/start/migration-v14` `[CITED]` — official RNTL v14 migration guide (fetched via WebFetch; confirms async API breaking changes, `test-renderer` peer package rationale). Note: the WebFetch summary of this page also claimed `test-renderer@1.12` as the React-19.2-matching version — this was cross-checked against the live npm registry and found to be **inaccurate** (no `1.12` version exists; latest is `1.3.0`, and all published `1.x` versions declare peer `react: ^19.0.0` with no finer-grained minor-version matching). The RESEARCH.md above uses the verified `1.3.0`, not the unverified `1.12` claim.
- `github.com/expo/expo/issues/47435` `[CITED]` — the jest-expo/RN-0.86 peer-dependency GitHub issue (fetched via WebFetch; the issue's resolution status wasn't confirmed by the page content itself, but cross-checked against jest-expo 57.0.5's live peerDependencies field, which already lists the RN-0.86-compatible range)

### Tertiary (LOW confidence)
- Jest 30's exact `setupFilesAfterEnv` vs `setupFilesAfterEach` config-key convention — not independently re-verified this session, flagged as Open Question 1 / Assumption A1

## Metadata

**Confidence breakdown:**
- Standard stack (exact versions/peer deps): HIGH — every version claim verified live against npm registry or installed `node_modules`, not from training-data memory
- Architecture (render wrapping, mocking boundary): HIGH — verified by reading actual source of `useSafeAreaInsets`, `useRouter`, zustand stores, and services directly in this repo
- Pitfalls: HIGH for Pitfalls 1, 2, 4 (each backed by a direct source/registry read); MEDIUM for Pitfall 3 (zustand+AsyncStorage async rehydration timing is a well-known pattern but the specific act()-warning outcome wasn't executed/observed this session, only inferred from code)
- Jest config key naming (`setupFilesAfterEnv`): LOW — flagged explicitly as Assumption A1 / Open Question 1

**Research date:** 2026-09-21
**Valid until:** ~7 days for the exact version pins (this is an unusually fast-moving corner of the ecosystem — Expo SDK 57 and RNTL v14 both very recent); ~30 days for the architectural findings (store shape, hook behavior, mocking boundary), which are stable app-code facts unlikely to change on their own
