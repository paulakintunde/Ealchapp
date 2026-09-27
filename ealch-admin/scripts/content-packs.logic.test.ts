// The premium-pack split (PREMIUM-PACKS-SPEC.md): every item goes to exactly
// one place, borrowed items resolve, core + every pack merged IS the legacy
// full snapshot, and each partial state the app can be in validates.
import { deepStrictEqual, ok, strictEqual, throws } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  FREE_EXAM_PAPERS,
  corpusFingerprint,
  itemHomes,
  itemPlacements,
  mergeSplit,
  packOfBand,
  planPublish,
  skeletonUnit,
  splitCorpus,
  type PackBody,
} from './content-packs.logic.ts';
import { buildCoreSeed } from './seed-cut.logic.ts';
import { CORE_SEED_CUT } from './seed-cut.config.ts';
import { stableStringify, sha256 } from './snapshot-utils.ts';
import { validateCorpus, validateUnit, type Corpus, type Lesson, type Unit } from '../../ealch-v2/src/content/schema.ts';
import { heldBands, partialValidationView, verifyPack, isPacksManifest, type PackName } from '../../ealch-v2/src/services/packs.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));

/* ─── a small hand-built corpus ─── */

const item = (id: string) => {
  const [, level, theme] = id.split('.');
  return { id, kind: 'word', level, theme, fr: id, en: id, tags: [], drills: ['flashcard'], audioRef: null, version: 1 } as unknown as Corpus['items'][number];
};
const lesson = (id: string, itemIds: string[], extra: Partial<Lesson> = {}) =>
  ({ id, unitId: id.split('.').slice(0, 2).join('.'), title: `T ${id}`, itemIds, acts: [{ title: 'Act' }], deckTranche: [itemIds], ...extra }) as unknown as Lesson;
const unit = (id: string, lessonIds: string[]): Unit => ({ id, seq: 1, title: id, sub: id, lessonIds, ...(['sons', 'a1', 'a2'].includes(id.split('.')[0]) ? { track: id.split('.')[0] as Unit['track'] } : {}) });

function tiny(): Corpus {
  return {
    version: 9,
    domains: [{ slug: 'd', title: 'D', order: 1 }] as Corpus['domains'],
    themes: [],
    units: [unit('a1.01', ['a1.01.l1']), unit('a2.01', ['a2.01.l1']), unit('b1.01', ['b1.01.l1']), unit('b2.01', [])],
    lessons: [
      // a1 borrows an a2 row: it must stay in the core.
      lesson('a1.01.l1', ['fr.a1.x.001', 'fr.a2.x.002']),
      // a2 borrows a b1 row (pulled down to a2) and an a1 row (stays in core).
      lesson('a2.01.l1', ['fr.a2.x.001', 'fr.b1.x.002', 'fr.a1.x.001']),
      lesson('b1.01.l1', ['fr.b1.x.001']),
    ],
    items: ['fr.a1.x.001', 'fr.a2.x.001', 'fr.a2.x.002', 'fr.b1.x.001', 'fr.b1.x.002', 'fr.b2.x.001'].map(item),
    scenarios: [{ id: 'sc.a2.x.001', level: 'a2' }, { id: 'sc.a1.x.001', level: 'a1' }] as Corpus['scenarios'],
    playlists: [{ id: 'pl.b1', minLevel: 'b1' }] as Corpus['playlists'],
    speakPath: [{ id: 'speak.1.1', world: 1, seq: 1, level: 'sons', blocks: [] }] as unknown as Corpus['speakPath'],
    examPapers: [
      { id: 'paper.tef.x.1', paperNo: 1, sections: [{ taskIds: ['exam.t1'] }] },
      { id: 'paper.tef.x.2', paperNo: 2, sections: [{ taskIds: ['exam.t2'] }] },
    ] as unknown as Corpus['examPapers'],
    examTasks: [
      { id: 'exam.t1', targetItemIds: ['fr.b2.x.001'] },
      { id: 'exam.t2', targetItemIds: ['fr.b2.x.001'] },
    ] as unknown as Corpus['examTasks'],
  };
}

test('itemHomes: a borrowed higher-band item comes down to the lowest band that names it', () => {
  const h = itemHomes(tiny());
  strictEqual(h.get('fr.a2.x.002'), 'a1', 'a free lesson must never have a blank card');
  strictEqual(h.get('fr.b1.x.002'), 'a2');
  strictEqual(h.get('fr.a1.x.001'), 'a1', 'lower-band borrowing moves nothing');
  strictEqual(h.get('fr.b2.x.001'), 'b2', 'an exam target does not pull an item anywhere');
});

test('every item goes to exactly one place', () => {
  const split = splitCorpus(tiny());
  const places = itemPlacements(split);
  strictEqual(places.size, 6);
  for (const [id, where] of places) strictEqual(where.length, 1, `${id} shipped in ${where.join(', ')}`);
  deepStrictEqual(Object.fromEntries(places), {
    'fr.a1.x.001': ['core'], 'fr.a2.x.002': ['core'], 'fr.a2.x.001': ['a2'], 'fr.b1.x.002': ['a2'], 'fr.b1.x.001': ['b1'], 'fr.b2.x.001': ['b2'],
  });
  deepStrictEqual(split.pulledDown, { 'a2->a1': 1, 'b1->a2': 1 });
});

test('the core carries no paid lesson, only the free exam paper, and every paid unit as a skeleton', () => {
  const { core, packs } = splitCorpus(tiny());
  deepStrictEqual(core.lessons.map((l) => l.id), ['a1.01.l1']);
  // The free paper (paper 1 of each format) and its tasks stay in the core.
  deepStrictEqual(core.examPapers?.map((x) => x.id), ['paper.tef.x.1']);
  deepStrictEqual(core.examTasks?.map((x) => x.id), ['exam.t1']);
  deepStrictEqual(core.units.map((u) => u.id), ['a1.01', 'a2.01', 'b1.01', 'b2.01']);
  deepStrictEqual(core.units.find((u) => u.id === 'a2.01')?.outline, [{ lessonId: 'a2.01.l1', title: 'T a2.01.l1', acts: [{ title: 'Act', cards: 3 }] }]);
  strictEqual(core.units.find((u) => u.id === 'b2.01')?.outline, undefined, 'a lesson-less unit is its own skeleton');
  deepStrictEqual(core.scenarios.map((s) => s.id), ['sc.a1.x.001']);
  deepStrictEqual(packs.map((p) => p.pack), ['a2', 'b1', 'b2', 'exam']);
  const exam = packs.find((p) => p.pack === 'exam')!;
  deepStrictEqual(exam.examPapers?.map((x) => x.id), ['paper.tef.x.2']);
  deepStrictEqual(exam.examTasks?.map((x) => x.id), ['exam.t2']);
  strictEqual(exam.items.length, 0);
});

test('core + every pack merged == the legacy full snapshot', () => {
  const full = tiny();
  const split = splitCorpus(full);
  strictEqual(corpusFingerprint(mergeSplit(split.core, split.packs)), corpusFingerprint(full));
});

test('skeletonUnit carries act titles and card counts, never lesson content', () => {
  const l = lesson('b1.02.l1', ['fr.b1.x.001'], { narration: { stages: [] }, features: ['narrated'] } as unknown as Partial<Lesson>);
  const sk = skeletonUnit(unit('b1.02', ['b1.02.l1']), new Map([[l.id, l]]));
  deepStrictEqual(sk.outline, [{ lessonId: 'b1.02.l1', title: 'T b1.02.l1', acts: [{ title: 'Act', cards: 1 }], narrated: true }]);
  ok(!JSON.stringify(sk).includes('fr.b1.x.001'), 'no item id leaks into the skeleton');
});

test('packOfBand refuses a band no layer names rather than guessing', () => {
  strictEqual(packOfBand('a1'), 'core');
  strictEqual(packOfBand('c1'), 'c1');
  throws(() => packOfBand('z9'));
  throws(() => packOfBand(null));
});

/* ─── planPublish ─── */

test('planPublish: an unchanged pack keeps its version and is not uploaded again', () => {
  const split = splitCorpus(tiny());
  const first = planPublish({ version: 9, rollout: 100, split, previous: null, stringify: stableStringify, sha256 });
  ok(isPacksManifest(first.manifest));
  deepStrictEqual(first.uploads.map((u) => `${u.bucket}:${u.path}`), [
    'content:core/v9.json', 'content-packs:a2/v9.json', 'content-packs:b1/v9.json', 'content-packs:b2/v9.json', 'content-packs:exam/v9.json',
  ]);

  // v10: only b1 changed.
  const next = tiny();
  next.version = 10;
  next.items = next.items.map((i) => (i.id === 'fr.b1.x.001' ? { ...i, en: 'changed' } : i));
  const second = planPublish({ version: 10, rollout: 100, split: splitCorpus(next), previous: first.manifest, stringify: stableStringify, sha256 });
  deepStrictEqual(second.uploads.map((u) => u.path), ['core/v10.json', 'b1/v10.json']);
  deepStrictEqual(second.reused, ['a2', 'b2', 'exam']);
  strictEqual(second.manifest.packs.find((p) => p.name === 'a2')?.path, 'a2/v9.json');

  // A reused pack still verifies on the device against its manifest entry.
  const a2 = splitCorpus(next).packs.find((p) => p.pack === 'a2')!;
  const entry = second.manifest.packs.find((p) => p.name === 'a2')!;
  ok(verifyPack(stableStringify({ ...a2, version: entry.version }), entry).ok);
});

/* ─── the real seed ─── */

// The committed seed is itself a valid corpus holding sons, a1, a2, most of
// b1, exam papers and the b2/c1 rows the exams target, so it is the honest
// stand-in for a published snapshot here.
const seed = JSON.parse(readFileSync(resolve(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as Corpus;
const real = splitCorpus(seed);
const packMap = new Map(real.packs.map((p) => [p.pack, p] as const));
const view = (c: Corpus, loaded: PackName[]) => partialValidationView(c, { bands: heldBands(loaded), exam: loaded.includes('exam') });

test('real seed: core + every pack merged is byte-for-byte the same content', () => {
  strictEqual(corpusFingerprint(mergeSplit(real.core, real.packs)), corpusFingerprint(seed));
});

test('real seed: every item in exactly one place', () => {
  const places = itemPlacements(real);
  strictEqual(places.size, seed.items.length);
  const twice = [...places].filter(([, w]) => w.length !== 1);
  deepStrictEqual(twice, []);
});

test('real seed: the free core validates on its own, and carries nothing paid but skeletons', () => {
  deepStrictEqual(validateCorpus(view(real.core, [])).slice(0, 5), []);
  deepStrictEqual(real.core.units.flatMap((u) => validateUnit(u)).slice(0, 5), [], 'every skeleton, outline included, is a valid unit');
  ok(real.core.units.some((u) => u.outline?.length), 'paid units carry outlines');
  ok(real.core.lessons.every((l) => ['sons', 'a1'].includes(l.unitId.split('.')[0])));
  const free = (seed.examPapers ?? []).filter((x) => x.paperNo === 1);
  deepStrictEqual((real.core.examPapers ?? []).map((x) => x.id).sort(), free.map((x) => x.id).sort(), 'paper 1 of each format stays free');
  strictEqual((real.core.examTasks ?? []).length, new Set(free.flatMap((x) => x.sections.flatMap((sec) => sec.taskIds ?? []))).size);
});

test('real seed: each paid band on top of the core validates, in fetch order', () => {
  const loaded: PackName[] = [];
  let merged = real.core;
  for (const p of real.packs) {
    merged = mergeSplit(merged, [p as PackBody]);
    loaded.push(p.pack);
    deepStrictEqual(validateCorpus(view(merged, loaded)).slice(0, 5), [], `after ${loaded.join('+')}`);
  }
});

test('real seed: an exam-only holder (no band packs) validates', () => {
  const exam = packMap.get('exam');
  ok(exam, 'the seed carries exams');
  deepStrictEqual(validateCorpus(view(mergeSplit(real.core, [exam!]), ['exam'])).slice(0, 5), []);
});

test('real seed: the core seed is a subset of the core and validates', () => {
  const coreSeed = buildCoreSeed(real.core, CORE_SEED_CUT);
  deepStrictEqual(validateCorpus(view(coreSeed, [])).slice(0, 5), []);
  const coreIds = new Set(real.core.items.map((i) => i.id));
  ok(coreSeed.items.every((i) => coreIds.has(i.id)));
  ok(coreSeed.items.every((i) => ['sons', 'a1'].includes(i.level) || real.pulledDown[`${i.level}->a1`] || real.pulledDown[`${i.level}->sons`]));

  // The measurement the spec asked for, printed on every run.
  const mb = (s: string) => (Buffer.byteLength(s, 'utf8') / 1e6).toFixed(2);
  console.log(`  seed today (min) ${mb(JSON.stringify(seed))} MB | core seed (min) ${mb(JSON.stringify(coreSeed))} MB, pretty ${mb(JSON.stringify(coreSeed, null, 2))} MB`);
  console.log(`  core snapshot ${mb(stableStringify(real.core))} MB | ` + real.packs.map((p) => `${p.pack} ${mb(stableStringify(p))} MB`).join(' | '));
  console.log(`  pulled down: ${JSON.stringify(real.pulledDown)}`);
});

test('FREE_EXAM_PAPERS matches the app\'s free allowance (RemoteConfig.examFreePapers default)', () => {
  const cfg = readFileSync(new URL('../../ealch-v2/src/services/config.ts', import.meta.url), 'utf8');
  const m = cfg.match(/examFreePapers:\s*(\d+),/);
  ok(m, 'config.ts must set a default examFreePapers');
  strictEqual(Number(m![1]), FREE_EXAM_PAPERS, 'the core carries the papers the app lets a free user open; move both together');
});
