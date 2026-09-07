/* MUTATION-TESTING TOOL. Not part of the build.
 *
 * Splices a2.12.l1 into seed.json with NO GUARDS AT ALL, so the a2-12 test file
 * can be asked what it catches independently of the batch and the merge.
 *
 * Doctrine §F and A2-BRIEF-CORRECTIONS §9: "a mutation caught only by the batch
 * and not by the test is a hole in the test." That can only be measured by
 * getting the broken content past the batch, which every real script refuses to
 * do. This is the only thing that will.
 *
 * NEVER run this as part of a build. It writes seed.json unchecked.
 *
 *     pnpm tsx scripts/_a212_force.ts
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import type { Item, Lesson, Unit } from '../../ealch-v2/src/content/schema.ts';
import { FAIRE_DIRE_LIRE, RESPELL_REPAIRS, DRILL_ADDITIONS, toItem } from './data/faire-dire-lire-corpus.ts';
import { IMPORTED_ROWS } from './data/faire-dire-lire-imported.ts';
import { FAIRE_DIRE_LIRE_LESSON } from './data/faire-dire-lire-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: (Unit & { lessonIds?: string[] })[] };

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const REPAIR = new Map(RESPELL_REPAIRS.map((r) => [r.id, r] as const));
const ADD = new Map(DRILL_ADDITIONS.map((d) => [d.id, d] as const));

const carried: Item[] = IMPORTED_ROWS.map((row) => {
  const fix = REPAIR.get(row.id);
  const add = ADD.get(row.id);
  const drills = add && !(row.drills ?? []).includes(add.add)
    ? ([...(row.drills ?? []), add.add].sort() as Item['drills'])
    : row.drills;
  return { ...row, ...(fix && row.respell === fix.from ? { respell: fix.to } : {}), drills };
});

const byId = new Map(seed.items.map((i) => [i.id, i] as const));
for (const it of carried) byId.set(it.id, it);
for (const it of FAIRE_DIRE_LIRE.map(toItem)) byId.set(it.id, it);

const out: Seed = {
  ...seed,
  items: [...byId.values()],
  lessons: [...seed.lessons.filter((l) => l.id !== FAIRE_DIRE_LIRE_LESSON.id), FAIRE_DIRE_LIRE_LESSON],
  units: seed.units.map((u) => (u.id === 'a2.12'
    ? { ...u, lessonIds: [...new Set([...(u.lessonIds ?? []), FAIRE_DIRE_LIRE_LESSON.id])] }
    : u)),
};
writeFileSync(SEED, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
console.log(`forced ${out.items.length} items, ${out.lessons.length} lessons`);
