// Scratch: which of a2.28's rows moved a1.03's printed ending counts, and is
// any of them withdrawable? Invariants §5: withdraw rather than argue, WHERE IT
// FITS. Not part of the build.
import { readFileSync } from 'node:fs';
import { measureEnding, endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import * as endings from './data/genre-endings.ts';
import { ALL_ROWS } from './data/medecin-corpus.ts';
import { ITEM_IDS } from './data/medecin-lesson.ts';

type Item = { id: string; fr: string; theme?: string };
const seed = JSON.parse(readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8')) as { items: Item[] };

const PRINTED = [
  ...(endings.ENDING_RULES as Array<{ ending: string; items: number; accuracy: number }>),
  ...(endings.WORTHLESS_ENDINGS as unknown as Array<{ ending: string; items: number; accuracy: number }>),
  ...(endings.MORE_ENDINGS as unknown as Array<{ ending: string; items: number; accuracy: number }>),
];

const authored = new Set(ALL_ROWS.map((r) => r.id));
// Everything this build put into the seed: its own rows plus every id it
// references, which is what a CARRY means.
const touched = new Set<string>([...authored, ...ITEM_IDS]);

console.log('=== printed counts that moved ===');
const moved: Array<{ ending: string; printed: number; now: number; accPrinted: number; accNow: number }> = [];
for (const p of PRINTED) {
  const m = measureEnding(seed.items as never, p.ending);
  if (!m) { console.log(`-${p.ending}: NOT MEASURABLE`); continue; }
  if (m.n !== p.items || m.accuracy !== p.accuracy) {
    moved.push({ ending: p.ending, printed: p.items, now: m.n, accPrinted: p.accuracy, accNow: m.accuracy });
  }
}
for (const m of moved) {
  console.log(`  -${m.ending}: items ${m.printed} -> ${m.now}   accuracy ${m.accPrinted}% -> ${m.accNow}%`);
}

console.log('\n=== which rows joined the population, and were they authored or carried? ===');
const pop = endingPopulation(seed.items as never) as Array<{ id: string; fr: string }>;
const mineInPop = pop.filter((i) => touched.has(i.id));
const authoredInPop = mineInPop.filter((i) => authored.has(i.id));
console.log(`  ${mineInPop.length} of this build's touched rows are in a1.03's population`);
console.log(`  of those, ${authoredInPop.length} were AUTHORED and ${mineInPop.length - authoredInPop.length} were CARRIED imports`);
for (const i of mineInPop) {
  const src = seed.items.find((x) => x.id === i.id)!;
  console.log(`    ${authored.has(i.id) ? 'AUTHORED' : 'carried '}  ${i.id}  « ${i.fr} »  [${src.theme}]`);
}
