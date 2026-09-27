// The pack cache, pinned at the source, the same way contentCache.test.ts pins
// the snapshot's: packs.ts imports react-native, AsyncStorage and
// expo-file-system, none of which load under node --test, so the shape of the
// code is asserted instead.
import { ok } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const strip = (src: string) =>
  src.replace(/\/\*[\s\S]*?\*\//g, '').split('\n').filter((l) => !l.trim().startsWith('//')).join('\n');
const PACKS = strip(readFileSync(resolve(HERE, 'packs.ts'), 'utf8'));
const CONTENT = strip(readFileSync(resolve(HERE, 'content.ts'), 'utf8'));

test('a pack is streamed to a staging file, size-checked, verified, then promoted, then recorded', () => {
  const dl = PACKS.indexOf('File.downloadFileAsync(got.url, staged');
  const cap = PACKS.indexOf('MAX_SNAPSHOT_BYTES', dl);
  const read = PACKS.indexOf('staged.text()', dl);
  const verify = PACKS.indexOf('verifyPack(text, entry)', read);
  const validate = PACKS.indexOf('validateCorpus(partialValidationView', verify);
  const move = PACKS.indexOf('staged.move(live)', validate);
  const marker = PACKS.indexOf('saveRegistry()', move);
  ok(dl > 0 && cap > dl && read > cap && verify > read && validate > verify && move > validate && marker > move,
    'download -> size -> read -> checksum -> merged validation -> promote -> marker');
  ok(/content-pack-\$\{n\}\.part/.test(PACKS) && /content-pack-\$\{n\}\.json/.test(PACKS), 'staging and live are different files');
});

test('packs live under Paths.document and only the small registry goes to AsyncStorage', () => {
  ok(/new File\(Paths\.document,/.test(PACKS));
  ok(!/Paths\.cache/.test(PACKS));
  const writes = [...PACKS.matchAll(/AsyncStorage\.setItem\(\s*([A-Za-z_]\w*)/g)].map((m) => m[1]);
  ok(writes.length > 0 && writes.every((w) => w === 'REGISTRY_KEY'), `only the registry: ${writes.join(',')}`);
});

test('a pack URL comes only from the edge function, never a public path', () => {
  ok(PACKS.includes('ENV.contentPackUrlFunction'));
  ok(!/object\/public\/content-packs/.test(PACKS), 'the pack bucket is private');
});

test('retention and entitlement: nothing is decided before the entitlement is known, and a lapse re-merges at once', () => {
  ok(/if \(!useEntitlement\.getState\(\)\.hydrated\) return;/.test(PACKS));
  ok(PACKS.indexOf('applyRetention(') < PACKS.indexOf('host?.changed()'), 'lock before any network');
  ok(/useEntitlement\.subscribe\(/.test(PACKS), 'every entitlement change (purchase, restore, lapse) triggers a pass');
  ok(!/useProgress/.test(PACKS), 'progress is never touched');
});

test('content.ts syncs packs before deciding the core, and validates a core as a partial corpus', () => {
  const sync = CONTENT.indexOf('await syncPacks(v2)');
  const adopt = CONTENT.indexOf('shouldAdoptCore(');
  ok(sync > 0 && adopt > sync);
  ok(/verifySnapshot\(text, manifest, validatorFor\(kind\)\)/.test(CONTENT));
  ok(/loadCachedPacks\(\)/.test(CONTENT), 'cached packs are merged at launch, offline');
});
