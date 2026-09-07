// Which of a1.03's PRINTED endings did this lesson move, and by how much?
// Compares the seed as it stands against the seed minus the 11 rows a1.23 added.
import { readFileSync } from 'node:fs';
import { measureEnding, endingPopulation, bareNoun } from '../../ealch-v2/src/content/gender.logic.ts';
import { AUTHORED_ITEMS } from './data/nourriture-corpus.ts';
import { IMPORTED } from './data/nourriture-imported.ts';
import { ENDING_RULES, WORTHLESS_ENDINGS, MORE_ENDINGS } from './data/genre-endings.ts';

const seed = JSON.parse(readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8'));
const added = new Set([...AUTHORED_ITEMS, ...IMPORTED].map((i) => i.id));
const now = seed.items;
const before = seed.items.filter((i: { id: string }) => !added.has(i.id));

console.log(`seed now ${now.length}, before this lesson ${before.length}, added ${added.size}`);
console.log(`ending population: ${endingPopulation(before).length} -> ${endingPopulation(now).length}\n`);

console.log('which added rows JOIN the population:');
for (const it of [...AUTHORED_ITEMS, ...IMPORTED]) {
  const joins = endingPopulation([it as never]).length === 1;
  console.log(`  ${joins ? 'JOINS ' : '  --  '} ${it.id.padEnd(30)} ${String(it.fr).padEnd(18)} bare="${bareNoun(it.fr)}"`);
}

const printed = [
  ...ENDING_RULES.map((e: any) => ({ ending: e.ending, items: e.items, accuracy: e.accuracy, where: 'RULE' })),
  ...WORTHLESS_ENDINGS.map((e: any) => ({ ending: e.ending, items: e.items, accuracy: e.accuracy, where: 'WORTHLESS' })),
  ...MORE_ENDINGS.map((e: any) => ({ ending: e.ending, items: e.items, accuracy: e.accuracy, where: 'SHEET' })),
];
console.log(`\na1.03 prints ${printed.length} endings. Moved:`);
let moved = 0;
for (const p of printed) {
  const b = measureEnding(before, p.ending);
  const a = measureEnding(now, p.ending);
  if (!a) { console.log(`  ${p.ending}: DISAPPEARED`); moved++; continue; }
  if (b && b.n === a.n && b.accuracy === a.accuracy && b.predicts === a.predicts) continue;
  moved++;
  console.log(`  -${p.ending.padEnd(6)} [${p.where}]  card says n=${p.items} acc=${p.accuracy}%`);
  console.log(`${' '.repeat(12)}before n=${b?.n} acc=${b?.accuracy}%  ->  NOW n=${a.n} acc=${a.accuracy}% predicts=${a.predicts}`);
}
console.log(moved ? `\n${moved} printed ending(s) moved. genre-endings.ts must be re-measured.` : '\nnothing a1.03 prints has moved.');
