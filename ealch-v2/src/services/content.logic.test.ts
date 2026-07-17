// Content-logic guard. Runs on plain Node:  npm test
// content.logic.ts imports only schema.ts (itself import-free), so this runs
// with no device, no bundler, no AsyncStorage.
//
// The load-bearing test here is sha256: if this hash ever diverges from the one
// ealch-admin/scripts/publish-content.ts writes (node:crypto), every valid
// snapshot fails its own checksum and OTA updates silently stop forever. So it
// is checked against node:crypto directly, not merely against a fixed vector.
import { createHash } from 'node:crypto';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { validateCorpus, type Corpus, type Item, type Lesson, type Unit } from '../content/schema.ts';
import {
  getItem,
  getScenario,
  isManifest,
  lessonsOfUnit,
  manifestIsNewer,
  mergeCorpus,
  scenariosFor,
  selectItems,
  sha256Hex,
  shouldAdopt,
  stableStringify,
  unitsInTrack,
  verifySnapshot,
  type Manifest,
} from './content.logic.ts';

/* ─── sha256 vs node:crypto — the one that must never drift ───────────────── */

const nodeSha = (s: string) => createHash('sha256').update(s, 'utf8').digest('hex');

test('sha256Hex matches node:crypto on known and edge inputs', () => {
  const cases = [
    '',
    'abc',
    'a',
    'The quick brown fox jumps over the lazy dog',
    // Multi-byte UTF-8: the exact content this app hashes (accents, IPA, guillemets).
    'Je voudrais un café — « bon vin blanc » ɔ̃ ɑ̃ ɛ̃ œ̃',
    // Length that straddles the 56-byte padding boundary in both directions.
    'x'.repeat(55),
    'x'.repeat(56),
    'x'.repeat(64),
    'x'.repeat(1000),
    // A realistic snapshot payload.
    JSON.stringify({ version: 3, units: [{ id: 'sons.03' }], items: Array.from({ length: 50 }, (_, i) => ({ id: `fr.a1.cafe.${i}` })) }),
  ];
  for (const c of cases) {
    strictEqual(sha256Hex(c), nodeSha(c), `mismatch for input of length ${c.length}`);
  }
});

test('sha256Hex agrees with node:crypto across many generated inputs', () => {
  // Walk a deterministic sequence (no Math.random by policy) over an alphabet
  // that includes astral characters. Indexing by UTF-16 code unit deliberately
  // slices some surrogate pairs in half, so this also proves parity with
  // node:crypto on LONE surrogates — which Node maps to U+FFFD and sha256Hex
  // must too, or the publish checksum diverges on malformed input.
  let s = '';
  const alphabet = 'a£好𝔘é😀 \n\t{}[],:"';
  for (let i = 0; i < 300; i++) {
    s += alphabet[(i * 7 + 3) % alphabet.length];
    strictEqual(sha256Hex(s), nodeSha(s), `mismatch at length ${s.length}`);
  }
});

/* ─── stableStringify — must match the publish script byte for byte ──────── */

test('stableStringify sorts object keys but preserves array order', () => {
  strictEqual(stableStringify({ b: 1, a: 2 }), stableStringify({ a: 2, b: 1 }));
  strictEqual(stableStringify({ b: 1, a: 2 }), '{"a":2,"b":1}');
  // Arrays are order-significant (a lesson's sections, a unit's lessonIds).
  strictEqual(stableStringify([3, 1, 2]), '[3,1,2]');
  // Nested.
  strictEqual(
    stableStringify({ z: { y: 1, x: 2 }, a: [{ q: 1, p: 2 }] }),
    '{"a":[{"p":2,"q":1}],"z":{"x":2,"y":1}}'
  );
});

test('stableStringify is insensitive to input key order at every depth', () => {
  const a = { version: 1, units: [{ id: 'u', track: 't', seq: 1 }], items: [] };
  const b = { items: [], units: [{ seq: 1, track: 't', id: 'u' }], version: 1 };
  strictEqual(stableStringify(a), stableStringify(b));
});

/* ─── fixtures ───────────────────────────────────────────────────────────── */

const item = (id: string, over: Partial<Item> = {}): Item => ({
  id,
  kind: 'word',
  level: 'a1',
  theme: 'cafe',
  fr: 'café',
  en: 'coffee',
  tags: [],
  drills: ['flashcard', 'review'],
  audioRef: null,
  version: 1,
  ...over,
});

const lesson = (id: string, unitId: string, seq: number): Lesson => ({
  id,
  unitId,
  seq,
  title: 'L',
  level: 'sons',
  tag: 'SONS',
  intro: 'x',
  sections: [{ type: 'teach', title: 't', body: 'b' }],
  itemIds: [],
  version: 1,
});

const unit = (id: string, seq: number, lessonIds: string[] = []): Unit => ({
  id,
  // Track from the id prefix, not hardcoded — otherwise an 'a1.01' unit would
  // silently carry track 'sons' and unitsInTrack('sons') would over-match.
  track: id.split('.')[0] as Unit['track'],
  seq,
  title: 'U',
  sub: 's',
  lessonIds,
});

/* ─── merge ──────────────────────────────────────────────────────────────── */

test('a null snapshot returns the seed unchanged', () => {
  const seed: Corpus = { version: 2, units: [unit('sons.01', 1)], lessons: [], items: [item('fr.a1.cafe.001')] };
  strictEqual(mergeCorpus(seed, null), seed);
});

test('a snapshot overlays the seed, union by id, snapshot winning conflicts', () => {
  const seed: Corpus = { version: 1, units: [], lessons: [], items: [item('fr.a1.cafe.001', { fr: 'OLD' }), item('fr.a1.cafe.002')] };
  const snap: Corpus = { version: 2, units: [], lessons: [], items: [item('fr.a1.cafe.001', { fr: 'NEW' }), item('fr.a1.cafe.003')] };
  const merged = mergeCorpus(seed, snap);
  strictEqual(merged.version, 2);
  strictEqual(merged.items.length, 3); // 001 (merged), 002 (seed only), 003 (snap only)
  strictEqual(getItem(merged, 'fr.a1.cafe.001')?.fr, 'NEW'); // snapshot wins
  ok(getItem(merged, 'fr.a1.cafe.002')); // seed-only item survives
  ok(getItem(merged, 'fr.a1.cafe.003')); // snapshot-only item added
});

test('merge is a floor the network raises but never lowers — a seed item a snapshot drops still survives', () => {
  // This is the offline guarantee: shipped content cannot vanish because a later
  // publish happened not to include it.
  const seed: Corpus = { version: 1, units: [], lessons: [], items: [item('fr.sons.nasales.001')] };
  const snap: Corpus = { version: 2, units: [], lessons: [], items: [item('fr.a1.cafe.001')] };
  const merged = mergeCorpus(seed, snap);
  ok(getItem(merged, 'fr.sons.nasales.001'), 'the bundled seed item must not disappear');
  ok(getItem(merged, 'fr.a1.cafe.001'));
});

/* ─── selection ──────────────────────────────────────────────────────────── */

const corpus: Corpus = {
  version: 1,
  units: [unit('sons.01', 1, ['sons.01.l1', 'sons.01.l2']), unit('a1.01', 2)],
  lessons: [lesson('sons.01.l2', 'sons.01', 2), lesson('sons.01.l1', 'sons.01', 1)],
  items: [
    item('fr.a1.cafe.001', { drills: ['flashcard', 'voiceflash'] }),
    item('fr.a1.marche.001', { theme: 'marche', drills: ['flashcard'] }),
    item('fr.a2.cafe.001', { level: 'a2', drills: ['dictation'] }),
  ],
};

test('selectItems returns only items that allow the drill', () => {
  strictEqual(selectItems(corpus, 'flashcard').length, 2);
  strictEqual(selectItems(corpus, 'dictation').length, 1);
  strictEqual(selectItems(corpus, 'roleplay').length, 0);
});

test('selectItems filters by level and theme', () => {
  strictEqual(selectItems(corpus, 'flashcard', { level: 'a1' }).length, 2);
  strictEqual(selectItems(corpus, 'flashcard', { theme: 'marche' }).length, 1);
  strictEqual(selectItems(corpus, 'flashcard', { level: 'a1', theme: 'cafe' }).length, 1);
});

test('selectItems by ids honours order and drill-eligibility, skips the unknown', () => {
  const got = selectItems(corpus, 'flashcard', {
    ids: ['fr.a1.marche.001', 'fr.a2.cafe.001', 'fr.a1.cafe.001', 'fr.does.not.exist.001'],
  });
  // a2.cafe.001 is dictation-only → excluded; unknown id → skipped; order preserved.
  deepStrictEqual(got.map((i) => i.id), ['fr.a1.marche.001', 'fr.a1.cafe.001']);
});

test('unitsInTrack and lessonsOfUnit both return seq order', () => {
  deepStrictEqual(unitsInTrack(corpus, 'sons').map((u) => u.id), ['sons.01']);
  // lessons were inserted out of order; must come back 1 then 2.
  deepStrictEqual(lessonsOfUnit(corpus, 'sons.01').map((l) => l.id), ['sons.01.l1', 'sons.01.l2']);
});

test('lessonsOfUnit drops links to lessons that are not present', () => {
  const c: Corpus = { ...corpus, units: [unit('sons.01', 1, ['sons.01.l1', 'sons.01.l9'])] };
  deepStrictEqual(lessonsOfUnit(c, 'sons.01').map((l) => l.id), ['sons.01.l1']);
});

/* ─── scenarios ──────────────────────────────────────────────────────────── */

const scen = (id: string, level: 'a1' | 'a2' | 'b1', theme: string) => ({
  id,
  level,
  theme,
  title: 'S',
  turns: [{ ai: 'a', en: 'e', user: 'u' }],
  version: 1,
});

test('mergeCorpus overlays scenarios by id, and a seed scenario survives', () => {
  const seed: Corpus = { version: 1, units: [], lessons: [], items: [], scenarios: [scen('sc.a1.marche.001', 'a1', 'marche')] };
  const snap: Corpus = { version: 2, units: [], lessons: [], items: [], scenarios: [scen('sc.a2.cafe.001', 'a2', 'cafe')] };
  const merged = mergeCorpus(seed, snap);
  strictEqual(merged.scenarios.length, 2);
  ok(getScenario(merged, 'sc.a1.marche.001'), 'the bundled scenario must not vanish');
  ok(getScenario(merged, 'sc.a2.cafe.001'));
});

test('scenariosFor filters by level and theme', () => {
  const c: Corpus = {
    version: 1, units: [], lessons: [], items: [],
    scenarios: [scen('sc.a1.marche.001', 'a1', 'marche'), scen('sc.a2.marche.001', 'a2', 'marche'), scen('sc.a1.cafe.001', 'a1', 'cafe')],
  };
  strictEqual(scenariosFor(c).length, 3);
  strictEqual(scenariosFor(c, { level: 'a1' }).length, 2);
  strictEqual(scenariosFor(c, { theme: 'marche' }).length, 2);
  strictEqual(scenariosFor(c, { level: 'a1', theme: 'marche' }).length, 1);
});

test('scenario helpers tolerate a corpus with no scenarios array', () => {
  const legacy = { version: 0, units: [], lessons: [], items: [] } as unknown as Corpus;
  strictEqual(getScenario(legacy, 'sc.a1.marche.001'), null);
  strictEqual(scenariosFor(legacy).length, 0);
});

/* ─── verifySnapshot: the three gates ────────────────────────────────────── */

const goodCorpus: Corpus = {
  version: 5,
  units: [unit('sons.01', 1, ['sons.01.l1'])],
  lessons: [lesson('sons.01.l1', 'sons.01', 1)],
  items: [item('fr.a1.cafe.001')],
};
const goodText = JSON.stringify(goodCorpus);
const goodManifest = (): Manifest => ({
  version: 5,
  path: 'snapshots/v5.json',
  checksum: sha256Hex(stableStringify(goodCorpus)),
});

test('verifySnapshot accepts a well-formed, correctly-checksummed snapshot', () => {
  const r = verifySnapshot(goodText, goodManifest(), validateCorpus);
  ok(r.ok);
  if (r.ok) strictEqual(r.corpus.version, 5);
});

test('verifySnapshot rejects unparseable bytes', () => {
  const r = verifySnapshot('{ this is not json', goodManifest(), validateCorpus);
  ok(!r.ok && r.reason === 'parse');
});

test('verifySnapshot rejects a checksum mismatch (tamper / stale CDN)', () => {
  const r = verifySnapshot(goodText, { ...goodManifest(), checksum: 'deadbeef' }, validateCorpus);
  ok(!r.ok && r.reason === 'checksum');
});

test('verifySnapshot rejects a structurally invalid corpus even if the checksum matches', () => {
  // A dangling itemId: valid JSON, honest checksum, but a broken lesson. This is
  // the case that renders as a blank practice block with no error.
  const broken = { ...goodCorpus, lessons: [{ ...lesson('sons.01.l1', 'sons.01', 1), itemIds: ['fr.a1.cafe.999'] }] };
  const text = JSON.stringify(broken);
  const manifest: Manifest = { version: 5, path: 'p', checksum: sha256Hex(stableStringify(broken)) };
  const r = verifySnapshot(text, manifest, validateCorpus);
  ok(!r.ok && r.reason === 'invalid');
});

test('verifySnapshot rejects a snapshot whose version disagrees with its manifest', () => {
  const manifest: Manifest = { version: 6, path: 'p', checksum: sha256Hex(stableStringify(goodCorpus)) };
  const r = verifySnapshot(goodText, manifest, validateCorpus);
  ok(!r.ok && r.reason === 'version');
});

test('manifestIsNewer only fires on a strictly higher version', () => {
  const m = (v: number): Manifest => ({ version: v, path: 'p', checksum: 'c' });
  ok(manifestIsNewer(m(3), 2));
  ok(!manifestIsNewer(m(2), 2));
  ok(!manifestIsNewer(m(1), 2));
});

/* ─── Staged rollout — the OTA safety gate (master plan Phase 2) ──────────── */

test('isManifest tolerates absent rollout, accepts numbers, rejects junk', () => {
  const base = { version: 1, path: 'p', checksum: 'c' };
  // Absent = the pre-rollout manifests already in the field.
  ok(isManifest(base));
  ok(isManifest({ ...base, rollout: 0 }));
  ok(isManifest({ ...base, rollout: 100 }));
  // Junk rejects the WHOLE manifest: a publisher writing garbage here should
  // look broken at the next fetch, not silently roll out to everyone.
  ok(!isManifest({ ...base, rollout: '50' }));
  ok(!isManifest({ ...base, rollout: null }));
});

test('shouldAdopt: absent rollout means everyone (the back-compat contract)', () => {
  const m: Manifest = { version: 3, path: 'p', checksum: 'c' };
  ok(shouldAdopt(m, 2, 0));
  ok(shouldAdopt(m, 2, 99));
});

test('shouldAdopt gates by lot: bucket < rollout, boundary exact', () => {
  const m = (rollout: number): Manifest => ({ version: 3, path: 'p', checksum: 'c', rollout });
  // At 50, lots 0..49 adopt and 50..99 wait — raising the number only ever
  // ADDS devices; nobody who adopted can fall back out.
  ok(shouldAdopt(m(50), 2, 49));
  ok(!shouldAdopt(m(50), 2, 50));
  ok(shouldAdopt(m(100), 2, 99));
});

test('shouldAdopt: rollout 0 is the kill switch — nobody adopts, whatever their lot', () => {
  const m: Manifest = { version: 3, path: 'p', checksum: 'c', rollout: 0 };
  ok(!shouldAdopt(m, 2, 0));
  ok(!shouldAdopt(m, 2, 99));
});

test('shouldAdopt never overrides version monotonicity', () => {
  // A full rollout of an older or equal version is still a no: healing a bad
  // adoption is content:rollback (old bytes as a NEW version), never a
  // downgrade — the cache and merge paths assume versions only rise.
  const m: Manifest = { version: 2, path: 'p', checksum: 'c', rollout: 100 };
  ok(!shouldAdopt(m, 2, 0));
  ok(!shouldAdopt(m, 3, 0));
});

test('shouldAdopt clamps out-of-range rollout and refuses NaN', () => {
  const m = (rollout: number): Manifest => ({ version: 3, path: 'p', checksum: 'c', rollout });
  ok(shouldAdopt(m(250), 2, 99)); // clamped to 100
  ok(!shouldAdopt(m(-5), 2, 0)); // clamped to 0
  ok(!shouldAdopt(m(NaN), 2, 0)); // refuse, do not default
});
