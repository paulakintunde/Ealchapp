/* CAN the 591 bare cards actually be repaired, and from what?
 *
 * A card renders bare when a `lg` groupDrill item has no `note`. The fix is to
 * give it one. The question this answers is where each note's CONTENT would
 * come from, because that decides whether this is a mechanical sweep or an
 * authoring job:
 *
 *   A. the item already carries respell/en   -> move them, no new content
 *   B. the item carries an itemId            -> read the corpus row
 *   C. neither                               -> somebody has to WRITE it
 *
 * Also counts what a repair would cost elsewhere: every lesson whose body
 * changes must move its version forward, and a lesson with its own test file
 * may assert that number.
 *
 *   pnpm tsx scripts/_sweep_probe.ts
 */
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const CONTENT_DIR = join(here, '../../ealch-v2/src/content');

type Item = { id: string; fr: string; en?: string; respell?: string; ipa?: string };
type Sec = { id?: string; type?: string; size?: string; groups?: { items?: Record<string, unknown>[] }[] };
type Lesson = { id: string; version?: number; sections?: Sec[] };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as { version: number; lessons: Lesson[]; items: Item[] };
const byId = new Map(seed.items.map((i) => [i.id, i]));

let A = 0; let B = 0; let C = 0;
const perLesson = new Map<string, { bare: number; a: number; b: number; c: number }>();
const examples: string[] = [];

for (const L of seed.lessons) {
  for (const s of L.sections ?? []) {
    if (s.type !== 'groupDrill' || s.size === 'xl') continue;
    for (const it of (s.groups ?? []).flatMap((g) => g.items ?? [])) {
      if (it.note) continue;
      const rec = perLesson.get(L.id) ?? { bare: 0, a: 0, b: 0, c: 0 };
      rec.bare++;
      const hasOwn = !!(it.respell || it.en);
      const row = it.itemId ? byId.get(String(it.itemId)) : undefined;
      const hasRow = !!(row && (row.respell || row.en));
      if (hasOwn) { A++; rec.a++; }
      else if (hasRow) { B++; rec.b++; }
      else {
        C++; rec.c++;
        if (examples.length < 10) examples.push(`${L.id} ${s.id} "${String(it.fr).slice(0, 32)}" itemId=${it.itemId ?? 'none'}`);
      }
      perLesson.set(L.id, rec);
    }
  }
}

console.log(`\n  Where a repaired note would come from, across ${A + B + C} bare cards:\n`);
console.log(`    A  the item already carries respell/en   ${String(A).padStart(4)}   move them, no new content`);
console.log(`    B  the item carries a resolvable itemId  ${String(B).padStart(4)}   read the corpus row`);
console.log(`    C  neither                               ${String(C).padStart(4)}   somebody must WRITE it`);

if (examples.length) {
  console.log(`\n  Cards with no source for a note:`);
  for (const e of examples) console.log(`    ${e}`);
}

/* What a repair costs elsewhere: a version bump per lesson, and a test file
   that may assert it. */
console.log(`\n  Lessons touched: ${perLesson.size}\n`);
console.log('  lesson       bare   A    B    C   test file');
let withTest = 0;
for (const [id, r] of [...perLesson.entries()].sort((a, b) => b[1].bare - a[1].bare)) {
  const slug = id.replace(/\./g, '-').replace(/-l\d+$/, '');
  const hits = ['a1', 'a2', 'sons'].flatMap(() => []);
  void hits;
  const guess = existsSync(join(CONTENT_DIR, `${slug}.test.ts`));
  const any = guess || ['', '-genre', '-articles'].some((sfx) => existsSync(join(CONTENT_DIR, `${slug}${sfx}.test.ts`)));
  if (any) withTest++;
  console.log(`  ${id.padEnd(12)} ${String(r.bare).padStart(4)} ${String(r.a).padStart(4)} ${String(r.b).padStart(4)} ${String(r.c).padStart(4)}   ${any ? 'yes' : '-'}`);
}
console.log(`\n  ${withTest} of ${perLesson.size} have a test file that may assert a version or a count.\n`);
