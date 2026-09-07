// WHICH OF a1.03's PRINTED ENDING FIGURES NO LONGER MATCH THE SEED, and rewrite
// them in `genre-endings.ts` with a note saying what moved them.
//
// a1.03 prints a population and an accuracy for 35 endings on cards a learner
// reads. They are constants, measured once against the seed, and any build that
// adds or removes a noun moves them. Three suites cross-check them, so a stale
// figure is a red band rather than a quiet inaccuracy.
//
// The remedy is always to RE-MEASURE, never to restore the row: the figure is a
// claim about the shipped corpus, and the corpus is what it is.
//
//   npx tsx scripts/_a1_genre_remeasure.ts          report
//   npx tsx scripts/_a1_genre_remeasure.ts --write  rewrite the moved figures

import { readFileSync, writeFileSync } from 'node:fs';
import { measureEnding } from '../../ealch-v2/src/content/gender.logic.ts';
import * as endings from './data/genre-endings.ts';

const WRITE = process.argv.includes('--write');
const WHY = process.argv.find((a) => a.startsWith('--why='))?.slice(6)
  ?? 'four orphan rows in `sons.jours-et-mois`, referenced by no lesson, were removed from the seed by their owning merges';

type Row = { ending: string; predicts: string; accuracy: number; items: number };
const seed = JSON.parse(
  readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8'),
) as { items: Array<{ id: string; fr: string; theme?: string; kind?: string }> };

// THREE ARRAYS, not one. The ten rule endings a1.03 teaches, the ones it names
// as worthless, and the sheet's long tail — each prints its own population, and
// a1-15-famille.test.ts cross-checks the worthless `-e` specifically.
const E = endings as unknown as {
  ENDING_RULES: Row[]; WORTHLESS_ENDINGS: Row[]; MORE_ENDINGS: Row[];
};
const ALL: Row[] = [...(E.ENDING_RULES ?? []), ...(E.WORTHLESS_ENDINGS ?? []), ...(E.MORE_ENDINGS ?? [])];
if (!ALL.length) { console.error('could not find the endings arrays in genre-endings.ts'); process.exit(2); }

const moved: Array<{ ending: string; wasN: number; nowN: number; wasAcc: number; nowAcc: number }> = [];
for (const e of ALL) {
  const m = measureEnding(seed.items as never, e.ending) as { n: number; accuracy: number; predicts?: string };
  if (m.n !== e.items || Math.round(m.accuracy) !== e.accuracy) {
    moved.push({ ending: e.ending, wasN: e.items, nowN: m.n, wasAcc: e.accuracy, nowAcc: Math.round(m.accuracy) });
  }
}

if (!moved.length) { console.log('every printed ending figure matches the seed'); process.exit(0); }
for (const m of moved) {
  console.log(`  -${m.ending}: n ${m.wasN} -> ${m.nowN}, accuracy ${m.wasAcc}% -> ${m.nowAcc}%`);
}
if (!WRITE) { console.log(`\n${moved.length} moved (dry run; pass --write)`); process.exit(0); }

const p = 'scripts/data/genre-endings.ts';
let src = readFileSync(p, 'utf8');
const today = '2026-08-18';
for (const m of moved) {
  // Anchored to the ending's own block so a shared number cannot be rewritten
  // in the wrong entry.
  const block = new RegExp(`(ending: '${m.ending}',[\\s\\S]{0,9000}?)items: ${m.wasN},`);
  if (!block.test(src)) { console.error(`could not locate the -${m.ending} block`); process.exit(3); }
  const note = `    // ${m.nowN} since ${today}: ${WHY}.\n`;
  src = src.replace(block, (_all, head: string) => `${head}${note}    items: ${m.nowN},`);
  if (m.nowAcc !== m.wasAcc) {
    const accBlock = new RegExp(`(ending: '${m.ending}',[\\s\\S]{0,9000}?)accuracy: ${m.wasAcc},`);
    src = src.replace(accBlock, (_all, head: string) => `${head}accuracy: ${m.nowAcc},`);
  }
}
writeFileSync(p, src, 'utf8');
console.log(`\n${moved.length} figure(s) re-measured in ${p}`);
