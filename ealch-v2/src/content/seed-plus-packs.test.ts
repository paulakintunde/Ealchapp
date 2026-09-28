// The test corpus helper (seed-plus-packs.ts): the pure layer arithmetic, and
// the committed pair of files it reads.
import { test } from 'node:test';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { readFileSync } from 'node:fs';
import type { Corpus } from './schema';
import { canonicalJson } from './schema.ts';
import {
  PACKS_LAYER_PATH, composeTestCorpus, emptyLayer, layerIsEmpty, packsLayer, readPacksLayer, readSeed, regimeOf,
  seedPlusPacks, seedRegime,
} from './seed-plus-packs.ts';

const unit = (id: string, extra: Record<string, unknown> = {}) => ({ id, seq: 1, level: id.split('.')[0], title: id, sub: '', canDo: [], lessonIds: [], ...extra });
const item = (id: string, fr = id) => ({ id, fr, en: 'x', level: id.split('.')[1], theme: 't', kind: 'word', drills: [] });

function corpora(): { full: Corpus; core: Corpus } {
  const full = {
    version: 9,
    units: [unit('a1.01'), unit('a2.01', { lessonIds: ['a2.01.l1'] })],
    lessons: [{ id: 'a2.01.l1', unitId: 'a2.01' }],
    items: [item('fr.a1.t.001'), item('fr.a2.t.001'), item('fr.a1.t.002', 'changed in full')],
    themes: [{ slug: 't', title: 'T' }],
    examPapers: [{ id: 'paper.x.1' }, { id: 'paper.x.2' }],
  } as unknown as Corpus;
  const core = {
    version: 9,
    units: [unit('a1.01'), unit('a2.01', { lessonIds: ['a2.01.l1'], outline: [{ lessonId: 'a2.01.l1' }] })],
    lessons: [],
    items: [item('fr.a1.t.001'), item('fr.a1.t.002')],
    themes: [{ slug: 't', title: 'T' }],
    examPapers: [{ id: 'paper.x.1' }],
  } as unknown as Corpus;
  return { full, core };
}

test('the layer is every row the bundled seed lacks or holds differently, in the full order', () => {
  const { full, core } = corpora();
  const layer = packsLayer(full, core);
  deepStrictEqual(layer.units.map((u) => u.id), ['a2.01'], 'the full unit rides over its skeleton; the identical free unit does not');
  deepStrictEqual(layer.lessons.map((l) => l.id), ['a2.01.l1']);
  deepStrictEqual(layer.items.map((i) => i.id), ['fr.a2.t.001', 'fr.a1.t.002']);
  deepStrictEqual((layer.examPapers ?? []).map((p) => p.id), ['paper.x.2']);
  strictEqual(layer.themes, undefined, 'an array with nothing to add is left out, so the file stays small');
});

test('seed composed with its layer holds every row of the full cut, exactly as the full cut has it', () => {
  const { full, core } = corpora();
  const composed = composeTestCorpus(core, packsLayer(full, core));
  for (const k of ['units', 'lessons', 'items', 'examPapers', 'themes'] as const) {
    const want = new Map(((full[k] ?? []) as { id?: string; slug?: string }[]).map((r) => [r.id ?? r.slug, canonicalJson(r)]));
    const got = new Map(((composed[k] ?? []) as { id?: string; slug?: string }[]).map((r) => [r.id ?? r.slug, canonicalJson(r)]));
    deepStrictEqual(got, want, k);
  }
});

test('an empty or absent layer is the legacy regime, and the seed comes back untouched', () => {
  const { core } = corpora();
  ok(layerIsEmpty(null));
  ok(layerIsEmpty(emptyLayer(3)));
  strictEqual(regimeOf(emptyLayer(3)), 'legacy');
  strictEqual(composeTestCorpus(core, emptyLayer(3)), core, 'the same object, not a re-keyed copy');
  strictEqual(composeTestCorpus(core, null), core);
  strictEqual(regimeOf(packsLayer(corpora().full, core)), 'packs');
});

test('the committed layer is canonical JSON and composes with the committed seed', () => {
  // A checkout with core.autocrlf turns LF into CRLF on disk; git stores LF,
  // which is what the writers produce, so compare with line endings folded.
  const raw = readFileSync(PACKS_LAYER_PATH, 'utf8').replace(/\r\n/g, '\n');
  const layer = readPacksLayer();
  ok(layer, 'seed-packs.json is committed beside seed.json');
  strictEqual(raw, `${JSON.stringify(layer, null, 2)}\n`, 'seed-packs.json is in canonical form (JSON.stringify(x, null, 2) plus a newline)');
  const seed = readSeed();
  if (seedRegime() === 'legacy') {
    strictEqual(seedPlusPacks(), seed, 'before packs, the content tests read seed.json exactly');
  } else {
    ok(seedPlusPacks<Corpus>().lessons.length > seed.lessons.length, 'under packs the layer adds the paid lessons');
  }
});
