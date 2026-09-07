// Where the OTA snapshot is cached, pinned at the source.
//
// ── What this test is, and what it is not ──────────────────────────────────
//
// content.ts is the service SHELL: it imports react-native, AsyncStorage and
// expo-file-system, none of which load under `node --test`. So this reads the
// file and asserts the shape of the code, which is weaker than exercising it
// and is the strongest thing available without a device.
//
// It exists because the defect it guards was invisible in exactly this way.
// v66 is 27 MB; AsyncStorage on Android ships a 6 MB SQLite budget; the write
// threw; the catch that anticipates an unwritable cache swallowed it; and the
// corpus upgraded for the session and vanished on exit. Every automated check
// stayed green, the downloads screen correctly reported v66, and the only
// symptom was 27 MB re-downloaded on every cold start plus "no exams available
// yet" for anyone offline — exam content ships ONLY in the snapshot.
//
// Nothing about that is caught by a type or by a unit test of the pure logic.
// A reader deciding "AsyncStorage is simpler" reintroduces it in one line.
import { deepStrictEqual, ok } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = readFileSync(resolve(HERE, 'content.ts'), 'utf8');

/** Source with comments and string literals stripped, so a rule about what the
 *  CODE does is never satisfied or broken by prose describing it. */
const CODE = SRC.replace(/\/\*[\s\S]*?\*\//g, '')
  .split('\n')
  .filter((l) => !l.trim().startsWith('//'))
  .join('\n');

test('the snapshot is written to a file, never to AsyncStorage', () => {
  ok(/snapshotFile\(\)\.write\(text\)/.test(CODE), 'the verified text must be written to the snapshot file');

  // The precise regression: a multi-megabyte value going back into the 6 MB
  // key-value store. Every REMAINING AsyncStorage write must be a small one.
  const writes = [...CODE.matchAll(/AsyncStorage\.setItem\(\s*([A-Za-z_][\w]*)/g)].map((m) => m[1]);
  deepStrictEqual(
    [...new Set(writes)].sort(),
    ['BUCKET_KEY', 'CACHE_META_KEY'],
    'only the rollout lot and the commit marker may be written to AsyncStorage'
  );
});

test('the commit marker and the payload live in different stores', () => {
  // This is what makes a torn write readable as "no cache" rather than as
  // unverified bytes: the marker is written second and read first, so a marker
  // without a file, or a file without a marker, is simply absent.
  ok(/AsyncStorage\.setItem\(\s*\n?\s*CACHE_META_KEY/.test(CODE), 'the marker belongs in AsyncStorage');

  const write = CODE.slice(CODE.indexOf('snapshotFile().write(text)'));
  const fileAt = write.indexOf('snapshotFile().write(text)');
  const metaAt = write.indexOf('CACHE_META_KEY');
  ok(fileAt >= 0 && metaAt > fileAt, 'the file must be written BEFORE the marker');
});

test('the cache survives storage pressure: document, not cache', () => {
  // Paths.cache is evictable by the OS. An app whose downloads screen promises
  // "everything works offline" cannot have its corpus reclaimed between
  // launches, and the re-download it would trigger is 27 MB.
  ok(/new File\(Paths\.document,/.test(CODE), 'the snapshot must live under Paths.document');
  ok(!/new File\(Paths\.cache,/.test(CODE), 'Paths.cache is evictable and must not hold the snapshot');
});

test('the pre-filesystem key is read once and then removed', () => {
  // Installs that cached a snapshot while it still fit under 6 MB hold one now.
  // Dropping it on upgrade costs each of them a re-download for nothing, so it
  // is read; leaving it behind keeps those bytes squeezing progress, settings
  // and the rollout lot, so it is deleted.
  ok(/AsyncStorage\.getItem\(LEGACY_CACHE_KEY\)/.test(CODE), 'the legacy key must still be readable');

  // Scoped to each path that must do the removal, NOT counted across the file.
  // A bare count passes while the write path quietly stops cleaning up, because
  // the migration path still references the key — which is exactly what a first
  // draft of this test did.
  const between = (from: string, to: string) => {
    const a = CODE.indexOf(from);
    ok(a > 0, `${from} must exist`);
    const b = CODE.indexOf(to, a + from.length);
    ok(b > a, `${to} must follow ${from}`);
    return CODE.slice(a, b);
  };

  ok(
    /removeItem\(LEGACY_CACHE_KEY\)/.test(between('snapshotFile().write(text)', 'cachedSnapshotVersion =')),
    'a successful write must delete the old AsyncStorage copy — otherwise the bytes it frees are the whole point'
  );
  ok(
    /removeItem\(LEGACY_CACHE_KEY\)/.test(between('const legacy = await AsyncStorage.getItem', 'return legacy;')),
    'a migrated read must delete the old copy once it has been moved to the file'
  );
  ok(
    /multiRemove\(\[CACHE_META_KEY, LEGACY_CACHE_KEY\]\)/.test(CODE),
    'purging the cache must clear the legacy key too'
  );
});

test('every cache path still refuses to throw', () => {
  // The cardinal rule in this file's own header: never block first paint, never
  // throw. Moving to a filesystem API adds new throw sites — `write` is sync
  // and `delete` throws on a missing file — so each must sit inside a catch.
  for (const fn of ['async function purgeCache', 'async function readSnapshotText']) {
    const at = CODE.indexOf(fn);
    ok(at > 0, `${fn} must exist`);
    const body = CODE.slice(at, CODE.indexOf('\n}', at));
    ok(/catch\s*\{/.test(body), `${fn} must swallow storage failure — the seed is the safe fallback`);
  }
});
