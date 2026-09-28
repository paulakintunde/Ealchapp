// The seed cut as a function (cutSeed), the packs-era TEST_CUT, and the paid
// layer a --packs publish writes beside the core seed (seed-packs.json).
//
// The layer is what keeps ~95 app content tests honest once seed.json is the
// free core: they read seedPlusPacks(), which composes the two files. These
// tests prove, on the committed content, that core seed + layer IS the test
// corpus again, row for row, and that cutSeed is the rule publish applied.
import { deepStrictEqual, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { validateCorpus, type Corpus } from '../../ealch-v2/src/content/schema.ts';
import { composeTestCorpus, packsLayer, seedPlusPacks, seedRegime, readSeed } from '../../ealch-v2/src/content/seed-plus-packs.ts';
import { corpusFingerprint, splitCorpus } from './content-packs.logic.ts';
import { CORE_SEED_CUT, SEED_CUT, TEST_CUT } from './seed-cut.config.ts';
import { buildCoreSeed, cutSeed, type CutInput } from './seed-cut.logic.ts';

const asInput = (c: Corpus): CutInput => ({
  version: c.version, domains: c.domains ?? [], themes: c.themes ?? [], units: c.units, lessons: c.lessons, items: c.items,
  scenarios: c.scenarios ?? [], playlists: c.playlists ?? [], speakPath: c.speakPath ?? [],
  examPapers: c.examPapers ?? [], examTasks: c.examTasks ?? [],
});

/** Everything the content tests read: the legacy seed today, core + layer under packs. */
const testCorpus = seedPlusPacks<Corpus>();

test('cutSeed(SEED_CUT) reproduces the committed legacy seed exactly (the rule publish applied)', { skip: seedRegime() !== 'legacy' }, () => {
  const seed = readSeed();
  const { seed: again, pulledIn } = cutSeed(asInput(seed), SEED_CUT);
  strictEqual(corpusFingerprint(again), corpusFingerprint(seed));
  deepStrictEqual(pulledIn, []);
});

test('the test corpus is a fixed point of TEST_CUT: nothing in it falls outside the cut', () => {
  strictEqual(corpusFingerprint(cutSeed(asInput(testCorpus), TEST_CUT).seed), corpusFingerprint(testCorpus));
});

test('TEST_CUT keeps every band and retires the unit list', () => {
  deepStrictEqual(TEST_CUT.units, []);
  deepStrictEqual(TEST_CUT.themes, SEED_CUT.themes);
  deepStrictEqual(TEST_CUT.speakWorlds, SEED_CUT.speakWorlds);
  // every unit the legacy cut named explicitly is inside a TEST_CUT track
  const missing = SEED_CUT.units.filter((id) => !(TEST_CUT.tracks as readonly string[]).includes(id.split('.')[0]));
  deepStrictEqual(missing, []);
});

test('core seed + its layer is the test corpus again, row for row, and validates in full', () => {
  // What a --packs publish of this content would write: seed.json = the core
  // seed, seed-packs.json = the TEST_CUT minus the core seed.
  const core = buildCoreSeed(splitCorpus(testCorpus).core, CORE_SEED_CUT);
  const layer = packsLayer(cutSeed(asInput(testCorpus), TEST_CUT).seed, core);
  const composed = composeTestCorpus(core, layer);
  strictEqual(corpusFingerprint({ ...composed, packs: undefined, templates: undefined }), corpusFingerprint(testCorpus));
  deepStrictEqual(validateCorpus(composed).slice(0, 5), []);
  // and the layer carries no free lesson: sons and a1 bodies stay in the core
  deepStrictEqual(layer.lessons.filter((l) => ['sons', 'a1'].includes(l.unitId.split('.')[0])).map((l) => l.id), []);
});
