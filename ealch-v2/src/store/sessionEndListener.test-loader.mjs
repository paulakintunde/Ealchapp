// Test-only ESM resolve hook, registered via Node's built-in `module.register`
// API (no external loader package). It exists solely so that
// sessionEndListener.behavior.test.ts can import the REAL useProgress.ts (the
// zustand store shell, not progress.logic.ts) under plain `node --test`.
//
// Two purely environmental blockers stand in the way, neither a code defect:
//   1. useProgress.ts imports `AppState` from 'react-native'. react-native's
//      entry file uses Flow syntax that Node's native TS/JS type-stripping
//      cannot parse (confirmed: `node -e "import('react-native')"` throws
//      `SyntaxError: Unexpected token 'typeof'"` on a clean checkout).
//   2. useProgress.ts imports sibling modules by extensionless specifier
//      (e.g. `from './progress.logic'`), which Metro/tsc resolve but Node's
//      strict ESM resolver does not (`ERR_MODULE_NOT_FOUND`).
//
// Both are stubbed/patched here, in a test-only file, never in application
// source — see notifications.guard.test.ts and drillGateWiring.test.ts for
// this repo's existing (source-text-only) answer to the same class of
// problem. This hook lets one gap (T-06-17) get a real behavioral test
// instead of a source-text guard, without touching useProgress.ts itself.
const RN_STUB = 'data:text/javascript,' + encodeURIComponent(
  `export const AppState = { addEventListener: () => ({ remove: () => {} }) };\n` +
  `export const Platform = { OS: 'android' };\n` +
  `export default { AppState, Platform };\n`
);
const ASYNC_STORAGE_STUB = 'data:text/javascript,' + encodeURIComponent(
  `const mem = new Map();\n` +
  `const AsyncStorage = {\n` +
  `  getItem: async (k) => (mem.has(k) ? mem.get(k) : null),\n` +
  `  setItem: async (k, v) => { mem.set(k, v); },\n` +
  `  removeItem: async (k) => { mem.delete(k); },\n` +
  `};\n` +
  `export default AsyncStorage;\n`
);

// useProgress.ts persists through progressStorage.ts, which writes shards with
// expo-file-system. Its package entry is untranspiled TS under node_modules,
// which Node refuses to type-strip, so it gets an in-memory stand-in too.
const EXPO_FS_STUB = 'data:text/javascript,' + encodeURIComponent(
  `const files = new Map();\n` +
  `const join = (parts) => parts.map((p) => (typeof p === 'string' ? p : p.uri)).join('/');\n` +
  `export const Paths = { document: 'mem://doc' };\n` +
  `export class Directory {\n` +
  `  constructor(...parts) { this.uri = join(parts); }\n` +
  `  get exists() { return true; }\n` +
  `  create() {}\n` +
  `}\n` +
  `export class File {\n` +
  `  constructor(...parts) { this.uri = join(parts); }\n` +
  `  get exists() { return files.has(this.uri); }\n` +
  `  write(t) { files.set(this.uri, t); }\n` +
  `  async text() { return files.get(this.uri); }\n` +
  `  async move(dest) { files.set(dest.uri, files.get(this.uri)); files.delete(this.uri); this.uri = dest.uri; }\n` +
  `  delete() { files.delete(this.uri); }\n` +
  `}\n`
);

export async function resolve(specifier, context, nextResolve) {
  if (specifier === 'react-native') return nextResolve(RN_STUB, context);
  if (specifier === 'expo-file-system') return nextResolve(EXPO_FS_STUB, context);
  if (specifier === '@react-native-async-storage/async-storage') return nextResolve(ASYNC_STORAGE_STUB, context);
  try {
    return await nextResolve(specifier, context);
  } catch (err) {
    if (err && err.code === 'ERR_MODULE_NOT_FOUND' && (specifier.startsWith('./') || specifier.startsWith('../'))) {
      for (const ext of ['.ts', '.tsx']) {
        try {
          return await nextResolve(specifier + ext, context);
        } catch {
          // try the next extension
        }
      }
    }
    throw err;
  }
}
