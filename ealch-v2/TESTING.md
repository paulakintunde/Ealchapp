# Testing in ealch-v2

## Two test suites, two commands

This repo runs two independent test suites. Both, plus `npm run typecheck`, must be green before any task counts as done.

- **`npm test`** — the `node --test` suite. 5,447+ pure-logic and source-text tests, globbing `src/**/*.test.ts` and `supabase/functions/**/*.test.ts`. Fast (~30-35s), no Jest, no native mocks, no rendering.
- **`npm run test:component`** — Jest + jest-expo + React Native Testing Library (RNTL), for real component renders. Globs `__tests__/**/*.test.tsx`.

They stay separate on purpose (D-04): Jest's transform pipeline and native-module mock startup are real overhead, and folding component tests into `npm test` would slow down the fast pure-logic feedback loop every developer runs constantly. A cold `npm run test:component` run (empty transform cache, e.g. right after `npm install` in a fresh worktree) can take well over a minute; a warm rerun of the same two files is under 10s.

This package (`ealch-v2`) uses **npm**, not pnpm. `ealch-admin` (the separate authoring console) uses pnpm — running `pnpm test` inside `ealch-v2` is wrong and can silently produce misleading results.

## What is installed

- `jest@30.5.2`
- `jest-expo@57.0.5` (devDependency pinned `~57.0.5`, matching Expo SDK ~57)
- `@testing-library/react-native@14.0.1`
- `test-renderer@1.3.0`
- `@types/jest@30.0.0`

Two traps specific to this stack:

1. **`@testing-library/react-native` must stay on v14+.** v13 depends on the now-deprecated `react-test-renderer`, which does not support React 19's concurrent renderer (this app runs React 19.2.3). Do not downgrade based on older examples or blog posts.
2. **`test-renderer` is v14's peer package, not a renamed `react-test-renderer`.** It's a separate package published by the React core team specifically to replace `react-test-renderer` for React 19+. Do not add `react-test-renderer` as a devDependency alongside it.

`package.json` also carries an `overrides` entry pinning `@react-native/jest-preset` to `0.86.3` — `jest-expo@57.0.5` peers on `^0.86.3` but `react-native@0.86.2` peerOptional-wants exactly `0.86.2`, which otherwise produces an `ERESOLVE` on `npm install`. Keep the override if either package version moves.

## Config

`jest.config.js`:

- `preset: 'jest-expo'` — Expo's official Jest preset. Provides native-module auto-mocks for nearly every `expo-*` package (expo-audio, expo-haptics, expo-linear-gradient, expo-notifications, etc. all get their native bridge calls replaced with `jest.fn()` stubs automatically), plus the default `transformIgnorePatterns` and asset transformers. Do not hand-roll per-module mocks for anything this preset already covers.
- `moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' }` — mirrors `tsconfig.json`'s `@/*` → `./src/*` path alias, so test files can `import ... from '@/store/useStore'` exactly like app code does.
- `setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']` — loads the mock boundary (see below) before every test file runs.
- `testMatch: ['**/__tests__/**/*.test.tsx']` — scoped to `__tests__/` only, so the 5,447+ `node --test` `*.test.ts` files under `src/` are never swept into a Jest run. **This pattern is deliberately NOT `<rootDir>`-prefixed** — in a worktree whose absolute path contains a `.claude` directory segment, Jest's `<rootDir>` substitution plus glob-slash normalization mishandles the backslash before the leading dot on Windows and silently matches zero files. The rootDir-relative form sidesteps this and still only matches `__tests__/`.

**Never put a `*.test.tsx` file under `app/`.** `expo-router` treats every file in `app/` as a route; a test file there either becomes an accidental route or breaks the router's file-based convention.

`*.tsx` test files and `jest.setup.ts` fall inside `tsconfig.json`'s `include`, so `npm run typecheck` type-checks them too — a broken test file can fail typecheck even if you never run Jest.

## The mock boundary

D-05's rule: **mock native modules and network-touching services only.** `jest.setup.ts` currently mocks exactly five things:

- `@react-native-async-storage/async-storage` — via the package's own official Jest mock (`@react-native-async-storage/async-storage/jest/async-storage-mock`). jest-expo's generic preset does NOT auto-mock this one package; without it, `useStore`'s `persist` middleware hits an undefined `NativeModules.RNCAsyncStorage` and throws.
- `@/services/supabase` — mocked to `{ supabase: () => null }`, the same "offline mode" path the app's own lazy `supabase()` factory already takes when unconfigured. Not a fabricated behavior.
- `react-native-adapty` — stubbed `activate`/`isActivated`/`addEventListener`/`restorePurchases`, all resolving inertly.
- `@/services/sound` — `{ sound: { play: jest.fn(), unlock: jest.fn() } }`. `Press` (which `Toggle` wraps) calls `sound.unlock()` then `sound.play(cue)` on every press, so both methods must exist.
- `@/services/notifications` — the full service surface (`requestPermissions`, `scheduleDaily`, `scheduleNudge`, `scheduleReport`, `cancelKind`, `pruneUnknown`, `cancelAll`), all resolving. `useStore`'s `onRehydrateStorage` fires a resync that awaits several of these; jest-expo's generic native stubs return `undefined`, which can reject inside the real (unmocked) resync logic if the service itself isn't mocked.

**`useStore`, `useUI`, and `useEntitlement` (the zustand stores) are deliberately NOT mocked.** Real store logic — selectors, actions, wiring — runs for real during every component test. This is what catches store-wiring bugs that a mocked store would hide. **Adding a mock for any of these three stores is a convention violation, not a shortcut** — do not do it to make a test pass faster or avoid a rehydration timing issue; fix the actual mock underneath instead (see Pitfalls).

## Writing the next component test

1. Create `__tests__/<screen>.test.tsx`.
2. Import the screen under test by relative path from `../app/`, e.g. `import Screen from '../app/some-screen';` — not the `@/` alias, and never mock the screen itself.
3. If the screen or any child calls `useSafeAreaInsets()` (most screens do), wrap the render in `<SafeAreaProvider initialMetrics={...}>` with an explicit metrics object — `initialWindowMetrics` is `null` outside a real app launch.
4. In a `beforeEach`, pin any store fields your assertions depend on via `useStore.setState({...})` (or the equivalent `useUI`/`useEntitlement` setState), so the test doesn't inherit device locale, a previous test's mutated state, or store defaults changing later.
5. Query controls with `getByRole(role, { name })` — never by test id or by digging into the render tree structurally.
6. `await` every `render` and every `fireEvent` call (RNTL v14's core APIs are async). The test function itself must be `async`.
7. Assert explicitly, one concrete fact per expectation. **Never use `toMatchSnapshot()`/`toMatchInlineSnapshot()`** (D-03) — this repo's whole test philosophy, in both suites, is explicit assertions that get read, not snapshots that get rubber-stamped.

`__tests__/settings.test.tsx` is the worked example: a full screen render, a `getByRole` query against a `switch` with an accessible name, and a real `fireEvent.press` proven to flip both the real zustand store value and the rendered `accessibilityState`.

## Pitfalls

1. **RNTL v14's `render`, `fireEvent`, and `act` are all async.** A missing `await` doesn't error at the call site — it produces flaky "element not found" failures later in the test that look like a bad query, not a missing `await`. If a query that should obviously match suddenly can't find anything, check for a missing `await` first.
2. **`useSafeAreaInsets()` throws without a `<SafeAreaProvider>`** — "No safe area value available." Wrap the render (see step 3 above).
3. **`getByRole` needs an accessible name whenever a screen has more than one control of the same role.** Most controls in this app still carry no accessibility role at all — that's Phase 8's app-wide retrofit, not done yet. Today only `Toggle` (via its `accessibilityLabel` prop, threaded from `ToggleRow`'s `title`) and a few explicit call sites (e.g. `FocusHeader`'s Close button) are accessible. Don't assume a role/name exists on a control just because it visually looks like a button or switch — check the component source first.
4. **zustand `persist` rehydrates asynchronously after the first render.** `useStore` reads AsyncStorage (mocked) on mount and may call `set()` again once that resolves, in a microtask after your `await render(...)` has already settled. If you see a "state update was not wrapped in act(...)" console warning despite every RNTL call being awaited, this is almost always the cause — fix it with one `await waitFor(() => expect(...).toBeTruthy())` before your first assertion. This is a timing issue, not a reason to mock the store.
5. **`*.md` is gitignored in this repo** (`.gitignore` line 8, `*.md`). A new markdown doc needs `git add -f <file>.md` or it silently never gets committed. Confirm with `git check-ignore -v <file>.md` first, then confirm it shows up in `git status --short` after the forced add.
