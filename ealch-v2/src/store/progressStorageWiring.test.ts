// Wiring guard for the two persisted stores. useProgress.ts and useStore.ts
// import react-native and cannot run under `node --test`; the storage logic is
// tested behaviourally in progressStorage.logic.test.ts, and these assertions
// pin that the stores actually use it the safe way.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok } from 'node:assert';
import { test } from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const read = (rel: string): string => readFileSync(resolve(here, rel), 'utf8');
const progress = read('./useProgress.ts');
const settings = read('./useStore.ts');

const errorBranch = (src: string) => {
  const at = src.indexOf('onRehydrateStorage');
  return src.slice(at, src.indexOf('\n    }\n  )\n);', at));
};

test('the progress log is sharded, not one AsyncStorage row', () => {
  ok(progress.includes('storage: progressStorage'));
  ok(!progress.includes('createJSONStorage'));
  ok(!progress.includes('@react-native-async-storage/async-storage'));
});

test('a failed progress hydrate holds writes BEFORE flipping hydrated', () => {
  const branch = errorBranch(progress);
  const hold = branch.indexOf('progressStorage.hold()');
  const flip = branch.indexOf('useProgress.setState({ hydrated: true })');
  ok(hold > 0 && flip > hold, 'setState writes through persist; it must come after hold()');
});

test('a failed settings hydrate holds writes BEFORE flipping hydrated', () => {
  ok(settings.includes('storage: storeStorage'));
  const branch = errorBranch(settings);
  const hold = branch.indexOf('storeStorage.hold()');
  const flip = branch.indexOf('useStore.setState({ hydrated: true })');
  ok(hold > 0 && flip > hold, 'setState writes through persist; it must come after hold()');
});
