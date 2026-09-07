/* The two a2.13 device findings, counted across EVERY shipped lesson.
 *
 * Both were found on glass in a2.13 and neither is a2.13-specific:
 *
 *   1. a `lg` groupDrill draws fr/ipa/note only (MissionRich.tsx:439,
 *      schema.ts:899). A card passing respell/en and no note renders as a bare
 *      French string: no pronunciation, no meaning.
 *   2. the missions hub draws the title beside a type chip and the chip wins.
 *      Measured on a Pixel 6: 27 characters fit, 28 ellipsises.
 *
 * This reads seed.json, so it reports what is actually shipped.
 *
 *   pnpm tsx scripts/_house_defects.ts
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const TITLE_MAX = 27;

type Sec = { id?: string; type?: string; size?: string; title?: string; groups?: { items?: Record<string, unknown>[] }[] };
type Lesson = { id: string; version?: number; sections?: Sec[] };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as { version: number; lessons: Lesson[] };

console.log(`\n  seed.json v${seed.version}, ${seed.lessons.length} lessons\n`);

let totCards = 0; let totBare = 0; let totTitles = 0;
const rows: { id: string; bare: number; cards: number; titles: number }[] = [];

for (const L of seed.lessons) {
  let cards = 0; let bare = 0;
  for (const s of L.sections ?? []) {
    if (s.type !== 'groupDrill' || s.size === 'xl') continue;
    for (const g of s.groups ?? []) for (const it of g.items ?? []) {
      cards++;
      if (!it.note) bare++;
    }
  }
  const titles = (L.sections ?? []).filter((s) => (s.title ?? '').length > TITLE_MAX).length;
  totCards += cards; totBare += bare; totTitles += titles;
  if (bare || titles) rows.push({ id: L.id, bare, cards, titles });
}

rows.sort((a, b) => (b.bare + b.titles) - (a.bare + a.titles));
console.log('  lesson       bare cards / lg cards   titles over 27');
for (const r of rows) {
  console.log(`  ${r.id.padEnd(12)} ${String(r.bare).padStart(4)} / ${String(r.cards).padStart(4)}            ${String(r.titles).padStart(3)}`);
}
console.log(`\n  TOTALS: ${totBare} of ${totCards} lg groupDrill cards render bare, across ${rows.filter((r) => r.bare).length} lesson(s)`);
console.log(`          ${totTitles} mission titles ellipsise, across ${rows.filter((r) => r.titles).length} lesson(s)`);
console.log(`          ${seed.lessons.length - rows.length} lesson(s) clean on both\n`);
