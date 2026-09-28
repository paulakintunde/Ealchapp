// The band merge under both seed regimes (band-merge.logic.ts).
import { deepStrictEqual, ok, strictEqual, throws } from 'node:assert';
import { test } from 'node:test';
import { SEED_CUT, TEST_CUT } from './seed-cut.config.ts';
import { mergeCutFor, mergeIntoPacksLayer, outsideCutMessage, unitsOutsideCut } from './band-merge.logic.ts';
import { mergeIntoSeed, type Obj, type SeedLike } from './b1-import.logic.ts';
import { composeTestCorpus, packsLayer } from '../../ealch-v2/src/content/seed-plus-packs.ts';
import type { Corpus } from '../../ealch-v2/src/content/schema.ts';

test('legacy: the guard is SEED_CUT.units, exactly as before', () => {
  strictEqual(mergeCutFor('legacy'), SEED_CUT);
  deepStrictEqual(unitsOutsideCut(['b1.01', 'b2.22'], SEED_CUT), [], 'listed units pass');
  deepStrictEqual(unitsOutsideCut(['b2.40', 'c1.01'], SEED_CUT), ['b2.40', 'c1.01'], 'an unlisted paid unit is refused');
  ok(outsideCutMessage('legacy', ['b2.40']).includes('not in SEED_CUT.units'));
});

test('packs: no unit list, every band is a TEST_CUT track', () => {
  strictEqual(mergeCutFor('packs'), TEST_CUT);
  deepStrictEqual(unitsOutsideCut(['b1.01', 'b2.40', 'c1.07', 'c2.01'], TEST_CUT), []);
  deepStrictEqual(unitsOutsideCut(['zz.01'], TEST_CUT), ['zz.01'], 'a unit of no band is still refused');
});

const it = (id: string, fr = id): Obj => ({ id, fr, en: 'x', level: id.split('.')[1], theme: 't', kind: 'word', drills: [] });
const unit = (id: string, lessonIds: string[]): Obj => ({ id, seq: 1, level: id.split('.')[0], title: `T ${id}`, sub: '', canDo: [], lessonIds });
const lesson = (id: string, itemIds: string[], version = 1): Obj => ({
  id, unitId: id.split('.').slice(0, 2).join('.'), title: `L ${id}`, version, itemIds,
  acts: [{ title: 'Act one', sections: [] }], deckTranche: [itemIds],
});

function packsFixture(): { seed: SeedLike; layer: SeedLike } {
  // The core: a free unit and lesson, the a1 row they use, and the b2 unit as
  // a bare skeleton (no lessons published yet).
  const seed = {
    version: 1,
    units: [unit('a1.01', ['a1.01.l1']), unit('b2.30', [])],
    lessons: [lesson('a1.01.l1', ['fr.a1.t.001'])],
    items: [it('fr.a1.t.001'), it('fr.a1.t.002', 'core copy')],
  } as SeedLike;
  const layer = { version: 1, units: [unit('b1.01', ['b1.01.l1'])], lessons: [lesson('b1.01.l1', ['fr.b1.t.001'])], items: [it('fr.b1.t.001')] } as SeedLike;
  return { seed, layer };
}

test('packs merge: full unit, lesson and new rows go to the layer, the skeleton to seed.json', () => {
  const { seed, layer } = packsFixture();
  const add = {
    units: [unit('b2.30', ['b2.30.l1'])],
    lessons: [lesson('b2.30.l1', ['fr.a1.t.001', 'fr.b2.t.001'])],
    items: [it('fr.a1.t.001'), it('fr.b2.t.001')],
  };
  const r = mergeIntoPacksLayer(seed, layer, add, (id) => id.startsWith('fr.b2.'));
  deepStrictEqual(r.layer.units.map((u) => u.id), ['b1.01', 'b2.30']);
  deepStrictEqual(r.layer.lessons.map((l) => l.id), ['b1.01.l1', 'b2.30.l1']);
  deepStrictEqual(r.layer.items.map((i) => i.id), ['fr.b1.t.001', 'fr.b2.t.001'], 'the a1 row the core already holds is not copied');
  strictEqual(r.stats.itemsInCore, 1);
  // seed.json: same lessons and items, the b2 unit now an outlined skeleton
  deepStrictEqual(r.seed.lessons, seed.lessons);
  deepStrictEqual(r.seed.items, seed.items);
  const sk = r.seed.units.find((u) => u.id === 'b2.30') as Obj & { outline?: { lessonId: string; acts: unknown[] }[] };
  deepStrictEqual(sk.lessonIds, ['b2.30.l1']);
  deepStrictEqual(sk.outline?.map((o) => o.lessonId), ['b2.30.l1']);
  deepStrictEqual(r.stats.skeletonsReplaced, ['b2.30']);
  // inputs untouched
  deepStrictEqual(seed.units.find((u) => u.id === 'b2.30')!.lessonIds, []);
  strictEqual(layer.lessons.length, 1);
});

test('packs merge: the composed test corpus is what a legacy merge of the same rows would give', () => {
  const { seed, layer } = packsFixture();
  const add = { units: [unit('b2.30', ['b2.30.l1'])], lessons: [lesson('b2.30.l1', ['fr.b2.t.001'])], items: [it('fr.b2.t.001')] };
  const owned = () => true;
  const r = mergeIntoPacksLayer(seed, layer, add, owned);
  const composed = composeTestCorpus(r.seed as unknown as Corpus, r.layer as unknown as Corpus);
  const legacy = mergeIntoSeed(composeTestCorpus(seed as unknown as Corpus, layer as unknown as Corpus) as unknown as SeedLike, add, owned).seed;
  const byId = (rows: Obj[]) => new Map(rows.map((x) => [x.id, JSON.stringify(x)]));
  for (const k of ['units', 'lessons', 'items'] as const) {
    deepStrictEqual(byId((composed as unknown as SeedLike)[k]), byId(legacy[k]), k);
  }
  // and a layer re-derived the publisher's way holds the same rows
  const again = packsLayer(composed, r.seed as unknown as Corpus);
  deepStrictEqual(byId(again.items as unknown as Obj[]), byId(r.layer.items));
  deepStrictEqual(byId(again.lessons as unknown as Obj[]), byId(r.layer.lessons));
});

test('packs merge: a core row that differs goes to the layer only when owned', () => {
  const { seed, layer } = packsFixture();
  const add = { units: [], lessons: [], items: [it('fr.a1.t.002', 'new copy')] };
  const notOwned = mergeIntoPacksLayer(seed, layer, add, () => false);
  deepStrictEqual(notOwned.stats.itemsLeftAlone, ['fr.a1.t.002']);
  ok(!notOwned.layer.items.some((i) => i.id === 'fr.a1.t.002'));
  const owned = mergeIntoPacksLayer(seed, layer, add, () => true);
  deepStrictEqual(owned.stats.itemsAdded, ['fr.a1.t.002'], 'lands in the layer, which overlays the core copy');
  strictEqual((owned.seed.items.find((i) => i.id === 'fr.a1.t.002') as Obj).fr, 'core copy', 'seed.json is not rewritten');
});

test('packs merge: the version rule still refuses a text-only bump in the layer', () => {
  const { seed, layer } = packsFixture();
  const bumped = { ...lesson('b1.01.l1', ['fr.b1.t.001'], 2) };
  throws(() => mergeIntoPacksLayer(seed, layer, { units: [], lessons: [bumped], items: [] }, () => true));
});
