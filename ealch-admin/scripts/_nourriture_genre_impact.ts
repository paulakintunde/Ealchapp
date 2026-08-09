// Does authoring these rows move a1.03's printed figures?
//
// a1-03-genre.test.ts re-measures 27 endings (10 rules + 3 "worthless" + 14 on
// the reference sheet) from seed.json on every run and asserts each one's `n`
// and `accuracy` EXACTLY. A gendered single-word noun joins the population it
// measures over and can move both.
//
// Runs the REAL endingPopulation and measureEnding, never a copy: a1.08 shipped
// a hand-rolled copy carrying a `level === 'a1'` filter the real one does not
// have, let four rows through and moved two of a1.03's printed cards.
//
// Run:  pnpm tsx scripts/_nourriture_genre_impact.ts
import './env';
import { readFileSync } from 'node:fs';
import { bareNoun, endingPopulation, measureEnding, type GenderRow } from '../../ealch-v2/src/content/gender.logic.ts';

const seed = JSON.parse(readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8'));
const items: GenderRow[] = seed.items;

type Cand = { fr: string; gender: 'm' | 'f'; note: string };

const CANDIDATES: Cand[] = [
  { fr: 'la pizza', gender: 'f', note: 'single-word, gendered — the one real risk' },
  { fr: 'les céréales', gender: 'f', note: 'plural-only, excluded by isPluralOnly' },
  { fr: 'le haricot vert', gender: 'm', note: 'space in the bare noun, excluded' },
  { fr: 'le biscuit', gender: 'm', note: 'single-word, gendered — second real risk' },
];

const row = (c: Cand, i: number): GenderRow => ({
  id: `fr.a1.cuisine.90${i}`, kind: 'word', fr: c.fr, gender: c.gender, en: 'x', tags: [],
});

const basePop = endingPopulation(items);
console.log(`population today: ${basePop.length} gendered single-word nouns\n`);

for (const [i, c] of CANDIDATES.entries()) {
  const r = row(c, i);
  const withIt = [...items, r];
  const joined = endingPopulation(withIt).length - basePop.length;
  const bare = bareNoun(c.fr);

  if (joined === 0) {
    console.log(`${c.fr.padEnd(18)} DOES NOT JOIN the population (${c.note}). Moves nothing.`);
    continue;
  }

  // Every suffix of the bare noun is an ending that could be measured.
  const moved: string[] = [];
  for (let k = 1; k <= bare.length; k++) {
    const ending = bare.slice(bare.length - k);
    const b = measureEnding(items, ending);
    const a = measureEnding(withIt, ending);
    if (!b && !a) continue;
    if (!b && a) { moved.push(`-${ending}: (none) -> n=${a.n} ${a.accuracy}% ${a.predicts}`); continue; }
    if (b && !a) { moved.push(`-${ending}: DISAPPEARED`); continue; }
    if (b!.n !== a!.n || b!.accuracy !== a!.accuracy || b!.predicts !== a!.predicts) {
      moved.push(`-${ending}: n ${b!.n}->${a!.n}  acc ${b!.accuracy}%->${a!.accuracy}%  predicts ${b!.predicts}->${a!.predicts}`);
    }
  }
  console.log(`${c.fr.padEnd(18)} JOINS the population (${c.note}).`);
  console.log(`${' '.repeat(18)} bare="${bare}", moves ${moved.length} ending(s):`);
  moved.forEach((m) => console.log(`${' '.repeat(20)}${m}`));
}

console.log('\nNOTE: an ending only matters if a1.03 PRINTS it. Cross-check any');
console.log('moved ending against SRC_RULES / SRC_WORTHLESS / SRC_MORE in genre-lesson.ts.');
