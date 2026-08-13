/* MUTATION TOOL ONLY. NOT PART OF THE BUILD. NEVER RUN THIS FOR REAL.
 *
 * Writes a2.13.l1 and its thirty authored rows into seed.json with NO GUARDS AT
 * ALL, so that the TEST layer can be asked about broken content independently of
 * the batch and the merge.
 *
 * ── WHY IT HAS TO EXIST ───────────────────────────────────────────────────
 *
 * Mutation testing is only worth anything if each of the three layers is asked
 * separately. If the batch catches a mutation, the merge never runs, and a test
 * that would have missed it is never exercised. a2.12 discovered this the hard
 * way: its first harness `continue`d at the first red and the test column was
 * never measured at all, so "caught by all three" was an untested claim.
 *
 * This pushes the mutated lesson straight past both gates and into the seed, so
 * the question "would the test have caught it on its own?" gets a real answer.
 *
 * It does NOT touch Postgres. It does NOT carry imported rows. It leaves the
 * seed in a state the merge would refuse, which is the point, and the harness
 * restores seed.json from a backup afterwards.
 */
import './env';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import type { Item, Lesson, Unit } from '../../ealch-v2/src/content/schema.ts';
import { MODAUX, toItem } from './data/modaux-corpus.ts';
import { MODAUX_LESSON } from './data/modaux-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: (Unit & { lessonIds?: string[] })[] };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

const byId = new Map(seed.items.map((i) => [i.id, i] as const));
for (const it of MODAUX.map(toItem)) byId.set(it.id, it);

const out: Seed = {
  ...seed,
  items: [...byId.values()],
  lessons: [...seed.lessons.filter((l) => l.id !== MODAUX_LESSON.id), MODAUX_LESSON],
  units: seed.units.map((u) => (u.id === 'a2.13'
    ? { ...u, lessonIds: [...new Set([...(u.lessonIds ?? []), MODAUX_LESSON.id])] }
    : u)),
};

writeFileSync(SEED, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
console.log(`  FORCED ${MODAUX_LESSON.id} into the seed with no guards. ${out.items.length} items, ${out.lessons.length} lessons.`);
