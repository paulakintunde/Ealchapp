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
  adoptedForLaunch,
  anchorForItem,
  examSeriesFor,
  examTasksOfSeries,
  formatAnchor,
  getExamSeries,
  getExamTask,
  getItem,
  getScenario,
  isCacheMeta,
  isManifest,
  lessonsOfUnit,
  looksLikeCorpus,
  manifestIsNewer,
  MAX_SNAPSHOT_BYTES,
  mergeArticleTiles,
  mergeCorpus,
  parseAnchor,
  resolveAnchor,
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

/* ─── positional deep-link anchors ──────────────────────────────────────── */

const anchorLesson: Lesson = {
  ...lesson('a1.04.l1', 'a1.04', 1),
  sections: [
    { type: 'teach', title: 't', body: 'b' },
    { type: 'practice', title: 'Practice', skill: 'read', itemIds: ['fr.a1.cafe.001', 'fr.a1.cafe.002'] },
  ],
};
const anchorCorpus: Corpus = {
  version: 5,
  units: [unit('a1.04', 1, ['a1.04.l1'])],
  lessons: [anchorLesson],
  items: [item('fr.a1.cafe.001'), item('fr.a1.cafe.002')],
};

test('formatAnchor and parseAnchor round-trip', () => {
  const a = { lessonId: 'a1.04.l1', sectionIndex: 1, itemIndex: 0 };
  deepStrictEqual(parseAnchor(formatAnchor(a)), a);
});

test('parseAnchor rejects a malformed string', () => {
  strictEqual(parseAnchor('not-an-anchor'), null);
  strictEqual(parseAnchor('a1.04.l1#s1'), null);
  strictEqual(parseAnchor('a1.04.l1#sX.0'), null);
});

test('anchorForItem finds an item inside a practice section by position', () => {
  deepStrictEqual(anchorForItem(anchorLesson, 'fr.a1.cafe.002'), {
    lessonId: 'a1.04.l1',
    sectionIndex: 1,
    itemIndex: 1,
  });
});

test('anchorForItem returns null when the lesson does not teach the item', () => {
  strictEqual(anchorForItem(anchorLesson, 'fr.a1.does.not.exist'), null);
});

test('resolveAnchor resolves a practice-section anchor to its lesson, section, and item', () => {
  const anchor = anchorForItem(anchorLesson, 'fr.a1.cafe.002')!;
  const resolved = resolveAnchor(anchorCorpus, anchor);
  ok(resolved);
  strictEqual(resolved!.lesson.id, 'a1.04.l1');
  strictEqual(resolved!.section.type, 'practice');
  strictEqual(resolved!.item?.id, 'fr.a1.cafe.002');
});

test('resolveAnchor resolves a non-practice section with no item', () => {
  const resolved = resolveAnchor(anchorCorpus, { lessonId: 'a1.04.l1', sectionIndex: 0, itemIndex: 0 });
  ok(resolved);
  strictEqual(resolved!.section.type, 'teach');
  strictEqual(resolved!.item, null);
});

test('resolveAnchor fails closed on a missing lesson, out-of-range section, or out-of-range item', () => {
  strictEqual(resolveAnchor(anchorCorpus, { lessonId: 'no.such.lesson', sectionIndex: 0, itemIndex: 0 }), null);
  strictEqual(resolveAnchor(anchorCorpus, { lessonId: 'a1.04.l1', sectionIndex: 9, itemIndex: 0 }), null);
  strictEqual(resolveAnchor(anchorCorpus, { lessonId: 'a1.04.l1', sectionIndex: 1, itemIndex: 9 }), null);
  // Non-practice section with a nonzero item index has nothing to resolve.
  strictEqual(resolveAnchor(anchorCorpus, { lessonId: 'a1.04.l1', sectionIndex: 0, itemIndex: 1 }), null);
});

test('resolveAnchor invalidates on a corpusVersion mismatch — a stale anchor fails closed, not wrong', () => {
  const anchor = anchorForItem(anchorLesson, 'fr.a1.cafe.001')!;
  ok(resolveAnchor(anchorCorpus, anchor, { atCorpusVersion: anchorCorpus.version }));
  strictEqual(resolveAnchor(anchorCorpus, anchor, { atCorpusVersion: anchorCorpus.version - 1 }), null);
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

test('mergeCorpus overlays domains/themes/packs/examTasks/examSeries/playlists/templates — regression for the four-touchpoint bug', () => {
  // These five arrays existed on Corpus and were validated, but mergeCorpus
  // never learned to overlay them: a snapshot carrying any of them would
  // merge back down to the seed's empty floor. This is the direct guard for
  // that fix, extended to cover playlists/templates so the same class of bug
  // cannot silently recur for the next optional array.
  const seed: Corpus = {
    version: 1, units: [], lessons: [], items: [],
    domains: [{ slug: 'vie-quotidienne', title: 'Daily life', order: 1 }],
    themes: [{ slug: 'cafe', title: 'Café', domain: 'vie-quotidienne', levelRange: ['a1', 'a1'], examFlag: false, immigFlag: false, subThemes: [] }],
    packs: [{ id: 'pack.a1.cafe', theme: 'cafe', level: 'a1', goal: 'g', modeTargets: {}, status: 'published' }],
    examTasks: [{ id: 'exam.tcf_canada.2024a.co_mcq.001', format: 'tcf_canada', variant: '2024a', taskType: 'co_mcq', skill: 'CO', level: 'a1', formatVersion: 'v1', prompt: 'p', timingS: 60 }],
    examSeries: [{ id: 'series.tcf_canada.2024a.1', format: 'tcf_canada', variant: '2024a', seriesNo: 1, taskIds: [] }],
    playlists: [{ id: 'pl.sons.la-voix', minLevel: 'sons', word: 'W', tag: 'T', glow: 'g', labelFr: 'f', labelEn: 'e', topicFr: 'tf', topicEn: 'te', tracks: [{ id: 't1', title: 'T', lines: [{ fr: 'f', en: 'e' }] }], version: 1, status: 'published' }],
    templates: [{ id: 'tpl.item.verb-conjugation-drill', target: 'item', name: 'N', description: 'd', levels: ['a1'], promptSkeleton: 'p', example: 'e', version: 1, status: 'published' }],
  };
  const snap: Corpus = { version: 2, units: [], lessons: [], items: [] };
  const merged = mergeCorpus(seed, snap);
  strictEqual(merged.domains?.length, 1, 'domain must survive the merge');
  strictEqual(merged.themes?.length, 1, 'theme must survive the merge');
  strictEqual(merged.packs?.length, 1, 'pack must survive the merge');
  strictEqual(merged.examTasks?.length, 1, 'exam task must survive the merge');
  strictEqual(merged.examSeries?.length, 1, 'exam series must survive the merge');
  strictEqual(merged.playlists?.length, 1, 'playlist must survive the merge');
  strictEqual(merged.templates?.length, 1, 'template must survive the merge');
});

test('getExamTask/getExamSeries/examSeriesFor/examTasksOfSeries resolve the exam corpus', () => {
  const corpus: Corpus = {
    version: 1, units: [], lessons: [], items: [],
    examTasks: [
      { id: 'exam.tcf_canada.2024a.co_mcq.001', format: 'tcf_canada', variant: '2024a', taskType: 'co_mcq', skill: 'CO', level: 'b1', formatVersion: 'v1', prompt: 'p', timingS: 60 },
      { id: 'exam.tcf_canada.2024a.ce_mcq.001', format: 'tcf_canada', variant: '2024a', taskType: 'ce_mcq', skill: 'CE', level: 'b1', formatVersion: 'v1', prompt: 'p', timingS: 60 },
    ],
    examSeries: [
      { id: 'series.tcf_canada.2024a.1', format: 'tcf_canada', variant: '2024a', seriesNo: 1, taskIds: ['exam.tcf_canada.2024a.co_mcq.001', 'exam.tcf_canada.2024a.ce_mcq.001'] },
      { id: 'series.delf_b2.2024a.1', format: 'delf_b2', variant: '2024a', seriesNo: 1, taskIds: [] },
    ],
  };
  ok(getExamTask(corpus, 'exam.tcf_canada.2024a.co_mcq.001'));
  strictEqual(getExamTask(corpus, 'exam.nope.001'), null);
  ok(getExamSeries(corpus, 'series.tcf_canada.2024a.1'));
  strictEqual(examSeriesFor(corpus, 'tcf_canada').length, 1);
  strictEqual(examSeriesFor(corpus, 'delf_b2').length, 1);
  strictEqual(examSeriesFor(corpus, 'tef_canada').length, 0);
  deepStrictEqual(
    examTasksOfSeries(corpus, 'series.tcf_canada.2024a.1').map((t) => t.id),
    ['exam.tcf_canada.2024a.co_mcq.001', 'exam.tcf_canada.2024a.ce_mcq.001']
  );
  // A series listing a task that has not published yet yields fewer tasks,
  // not a blank entry — same posture as lessonsOfUnit.
  const withDangling: Corpus = {
    ...corpus,
    examSeries: [{ id: 'series.tcf_canada.2024a.1', format: 'tcf_canada', variant: '2024a', seriesNo: 1, taskIds: ['exam.tcf_canada.2024a.co_mcq.001', 'exam.ghost.999'] }],
  };
  strictEqual(examTasksOfSeries(withDangling, 'series.tcf_canada.2024a.1').length, 1);
});

test('mergeCorpus overlays domains/themes by slug, snapshot winning conflicts', () => {
  const seed: Corpus = {
    version: 1, units: [], lessons: [], items: [],
    domains: [{ slug: 'vie-quotidienne', title: 'OLD', order: 1 }],
  };
  const snap: Corpus = {
    version: 2, units: [], lessons: [], items: [],
    domains: [{ slug: 'vie-quotidienne', title: 'NEW', order: 1 }, { slug: 'travail', title: 'Work', order: 2 }],
  };
  const merged = mergeCorpus(seed, snap);
  strictEqual(merged.domains?.length, 2);
  strictEqual(merged.domains?.find((d) => d.slug === 'vie-quotidienne')?.title, 'NEW');
});

/* ─── The dev overlay guard (found on a Pixel 6, 2026-08-06) ──────────────── */

test('adoptedForLaunch drops the cached snapshot in dev and keeps it in release', () => {
  const cached: Corpus = { version: 11, units: [], lessons: [], items: [] };
  strictEqual(adoptedForLaunch(cached, true), null, 'dev must not overlay a cached snapshot onto the seed');
  strictEqual(adoptedForLaunch(cached, false), cached, 'release must still adopt the cache');
  strictEqual(adoptedForLaunch(null, false), null);
  strictEqual(adoptedForLaunch(undefined, true), null);
});

test('in dev, a stale cached lesson can no longer outrank the edited seed', () => {
  // The actual defect. `mergeCorpus` overlays the snapshot ON TOP of the seed, so
  // for any id in both, the cache wins. A device holding a published snapshot
  // therefore showed the OLD copy of a lesson the author had just edited, through
  // any number of Metro rebuilds, because the bundle is only layer 1 of 3.
  //
  // Note the shape of the confusion this caused: the NEW lesson appears either
  // way (nothing to lose to) and only the EDITED one is suppressed, which is why
  // it read as "Metro is serving a stale bundle" for two sessions.
  const seed: Corpus = {
    version: 19,
    units: [],
    lessons: [
      { id: 'a1.09.l1', unitId: 'a1.09', seq: 1, title: 'EDITED LOCALLY', level: 'a1', sections: [], itemIds: [], version: 2 },
      { id: 'a1.99.l1', unitId: 'a1.99', seq: 1, title: 'BRAND NEW', level: 'a1', sections: [], itemIds: [], version: 1 },
    ] as unknown as Lesson[],
    items: [],
  };
  const cached: Corpus = {
    version: 19,
    units: [],
    lessons: [
      { id: 'a1.09.l1', unitId: 'a1.09', seq: 1, title: 'STALE PUBLISHED COPY', level: 'a1', sections: [], itemIds: [], version: 1 },
    ] as unknown as Lesson[],
    items: [],
  };

  // Release: the cache still wins, which is the shipped contract and is correct.
  const release = mergeCorpus(seed, adoptedForLaunch(cached, false));
  strictEqual(release.lessons.find((l) => l.id === 'a1.09.l1')?.title, 'STALE PUBLISHED COPY');

  // Dev: the seed is authoritative, which is what makes device verification mean
  // anything at all.
  const dev = mergeCorpus(seed, adoptedForLaunch(cached, true));
  strictEqual(dev.lessons.find((l) => l.id === 'a1.09.l1')?.title, 'EDITED LOCALLY');
  strictEqual(dev.lessons.find((l) => l.id === 'a1.99.l1')?.title, 'BRAND NEW');
  strictEqual(dev.lessons.length, 2, 'dev must not lose seed content');
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

/* ─── The trusted cache — paint-path primitives (Phase 2 perf budget) ──────── */

test('isCacheMeta demands the commit-marker shape', () => {
  ok(isCacheMeta({ version: 3, checksum: 'abc' }));
  ok(!isCacheMeta(null));
  ok(!isCacheMeta({ version: 3 }));
  ok(!isCacheMeta({ version: '3', checksum: 'abc' }));
});

test('looksLikeCorpus is the O(1) gate: shape yes, contents unexamined', () => {
  // What it MUST catch: the torn or wrong-key cache that would crash a merge.
  ok(!looksLikeCorpus(null));
  ok(!looksLikeCorpus('{"version":1'));
  ok(!looksLikeCorpus({ version: 1, units: [], lessons: [] })); // items missing
  ok(!looksLikeCorpus({ version: 'x', units: [], lessons: [], items: [] }));
  // What it deliberately does NOT catch: invalid entities. That is
  // validateCorpus's job, deferred to after paint — this stays O(1).
  ok(looksLikeCorpus({ version: 1, units: [], lessons: [], items: [] }));
  ok(looksLikeCorpus({ version: 1, units: [{ garbage: true }], lessons: [], items: [] }));
});

test('the snapshot ceiling is a real number and the current seed clears it', () => {
  // The ceiling exists on both ends (publish refuses to produce, the app
  // refuses to parse); this pins it against accidental edits to something
  // meaninglessly small or absurdly large. Band widened with the deliberate
  // 30 MiB raise (2026-07-28) — the full 46k-item corpus is ~21 MiB.
  ok(MAX_SNAPSHOT_BYTES >= 1024 * 1024 && MAX_SNAPSHOT_BYTES <= 32 * 1024 * 1024);
});

// ── mergeArticleTiles: the article travels with its noun (Phase 6b) ──────────

test('a determiner merges into the noun that follows it', () => {
  deepStrictEqual(
    mergeArticleTiles([
      { w: 'Je', t: 'I' },
      { w: 'voudrais', t: 'would like' },
      { w: 'un', t: 'a' },
      { w: 'café', t: 'coffee' },
    ]),
    [
      { w: 'Je', t: 'I' },
      { w: 'voudrais', t: 'would like' },
      { w: 'un café', t: 'a coffee' },
    ]
  );
});

test("elision joins without a space: l' + été is l'été", () => {
  deepStrictEqual(mergeArticleTiles([{ w: "l'", t: 'the' }, { w: 'été', t: 'summer' }]), [
    { w: "l'été", t: 'the summer' },
  ]);
});

test('bare de never merges — it is usually a preposition, not an article', () => {
  deepStrictEqual(
    mergeArticleTiles([
      { w: 'à côté', t: 'next' },
      { w: 'de', t: 'to' },
      { w: 'la', t: 'the' },
      { w: 'gare', t: 'station' },
    ]),
    [
      { w: 'à côté', t: 'next' },
      { w: 'de', t: 'to' },
      { w: 'la gare', t: 'the station' },
    ]
  );
});

test('a trailing determiner with nothing after it is left alone', () => {
  deepStrictEqual(mergeArticleTiles([{ w: 'le', t: 'the' }]), [{ w: 'le', t: 'the' }]);
});

test('merging never changes the space-joined sentence the arrange step checks', () => {
  const tiles = [
    { w: 'Je', t: '' },
    { w: 'voudrais', t: '' },
    { w: 'un', t: '' },
    { w: 'café', t: '' },
  ];
  const before = tiles.map((x) => x.w).join(' ');
  const after = mergeArticleTiles(tiles).map((x) => x.w).join(' ');
  strictEqual(after, before);
});
