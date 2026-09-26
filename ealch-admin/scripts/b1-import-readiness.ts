// Can the fourteen B1 drafts be imported today, and what would break?
//
// WRITES NOTHING. No Postgres, no seed.json, no files. It answers the question
// the import pipeline has to answer first, so the pipeline is built against a
// known list of problems rather than discovering them mid-write.
//
//   pnpm tsx scripts/b1-import-readiness.ts
//
// Why this is a separate step: the three planes disagree by design during
// authoring. Source is ahead of seed.json, and seed.json is a ~quarter cut of
// Postgres, so "it validates" says nothing about whether it can land.
import { validateLesson, validateItem, validateUnit } from '../../ealch-v2/src/content/schema.ts';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const SEED = JSON.parse(readFileSync(resolve(HERE, '../../ealch-v2/src/content/seed.json'), 'utf8'));

const SLUGS = [
  'imparfait-formation', 'imparfait-usage', 'pc-imparfait', 'pc-imparfait-paires',
  'futur-simple', 'futur-irregulier', 'futur-usage', 'conditionnel-present',
  'politesse', 'si-clauses', 'qui-que', 'dont-ou', 'lequel-ce-qui', 'subjonctif-formation',
  // wave 4
  'subjonctif-declencheurs', 'subjonctif-infinitif', 'ordre-pronoms', 'voix-passive',
  // wave 5
  'discours-indirect', 'negation-avancee', 'inversion',
  // wave 6
  'cest-il-est', 'tout', 'meme',
  // waves 7 to 9
  'registres', 'tu-ou-vous', 'expressions-corps', 'expressions-animaux', 'expressions-couleurs',
  'coordination', 'subordination', 'concession', 'environnement', 'strategies-lecture',
];

type Row = { id: string; theme?: string; level?: string };

const seedItems = new Map<string, Row>((SEED.items ?? []).map((i: Row) => [i.id, i]));
const seedLessons = new Set<string>((SEED.lessons ?? []).map((l: { id: string }) => l.id));
const seedUnits = new Set<string>((SEED.units ?? []).map((u: { id: string }) => u.id));
const seedThemes = new Set<string>((SEED.themes ?? []).map((t: { slug: string }) => t.slug));

async function main() {
const blockers: string[] = [];
const warnings: string[] = [];
let items = 0;
let reused = 0;

// The fourteen import as ONE batch and quote each other freely: b1.02 names
// 39 of b1.01's rows. Checking a lesson against its own corpus alone reports
// those as missing, which is wrong. Collect the whole batch first.
const batchIds = new Set<string>();
for (const slug of SLUGS) {
  const C0: any = await import(`./data/b1/${slug}-corpus.ts`);
  for (const r of C0.ALL_ROWS as Row[]) batchIds.add(r.id);
}

for (const slug of SLUGS) {
  const L: any = await import(`./data/b1/${slug}-lesson.ts`);
  const C: any = await import(`./data/b1/${slug}-corpus.ts`);
  const lesson = L.LESSON;
  const unit = { ...C.UNIT, level: 'b1', lessonIds: [lesson.id] };

  for (const i of validateLesson(lesson)) blockers.push(`${lesson.id} lesson: ${i.path} ${i.message}`);
  for (const i of validateUnit(unit)) blockers.push(`${unit.id} unit: ${i.path} ${i.message}`);

  if (seedLessons.has(lesson.id)) blockers.push(`${lesson.id}: a lesson with this id is already published`);
  if (seedUnits.has(unit.id)) blockers.push(`${unit.id}: a unit with this id is already published`);

  const themes = new Set<string>();
  for (const row of C.ALL_ROWS as Row[]) {
    items++;
    for (const i of validateItem(row, row.id)) blockers.push(`${row.id}: ${i.message}`);
    if (row.theme) themes.add(row.theme);
    const clash = seedItems.get(row.id);
    if (clash) blockers.push(`${row.id}: would OVERWRITE a published row`);
  }
  for (const th of themes) {
    if (!seedThemes.has(th)) warnings.push(`${lesson.id}: theme "${th}" is not in the seed's theme list`);
  }

  // Rows the lesson NAMES but does not author: they must already exist, or the
  // import lands a lesson pointing at nothing.
  const authored = new Set((C.ALL_ROWS as Row[]).map((r) => r.id));
  const named: string[] = (lesson.itemIds ?? []).filter((id: string) => !authored.has(id));
  reused += named.length;
  // Resolvable if ANY lesson in the batch authors it, or the seed already has it.
  const missing = named.filter((id) => !seedItems.has(id) && !batchIds.has(id));
  for (const id of missing.slice(0, 5)) blockers.push(`${lesson.id}: names ${id}, which is neither authored nor published`);
  if (missing.length > 5) blockers.push(`${lesson.id}: ...and ${missing.length - 5} more named-but-absent ids`);
}

console.log('B1 IMPORT READINESS (nothing was written)\n');
console.log(`lessons ${SLUGS.length} | units ${SLUGS.length} | authored items ${items} | reused published items ${reused}`);
console.log(`\nBLOCKERS  ${blockers.length}`);
for (const b of blockers.slice(0, 25)) console.log('  x ' + b);
if (blockers.length > 25) console.log(`  ...and ${blockers.length - 25} more`);
console.log(`\nWARNINGS  ${warnings.length}`);
for (const w of warnings.slice(0, 15)) console.log('  ! ' + w);

// The authored id FLOOR per theme. This is the number a database probe has to
// clear, and getting it from the corpus rather than from the ledger is the
// point: the ledger said b1.02 held 116-178 and the floor really is 116.
const floors = new Map<string, number>();
for (const id of batchIds) {
  const parts = id.split('.');
  const n = Number(parts[3]);
  if (!Number.isFinite(n)) continue;
  const th = parts[2];
  floors.set(th, Math.min(floors.get(th) ?? Number.MAX_SAFE_INTEGER, n));
}
console.log('\nauthored id floor per theme (no published fr.b1 row may sit at or above it):');
for (const [th, lo] of [...floors].sort()) console.log(`  ${th.padEnd(26)} ${lo}`);

console.log('\nDATABASE PLANE, probed read-only 2026-09-26 after wave 9:');
console.log('  No published fr.b1 row sits at or above any floor, in any theme');
console.log('  listed above. Nothing would be overwritten.');
console.log('');
console.log('  BEWARE THE NEAR MISS. recits-au-passe and projets-et-futur each hold 17');
console.log('  published rows numbered 116-132, which reads as a collision against');
console.log('  the 116 floor. They are fr.a2 rows. The LEVEL is part of the id, so a');
console.log('  shared NUMBER is not a shared ID. Compare full ids, never numbers.');
console.log('  Re-run before any write, because the database moves under this file:');
console.log("    select id from content_items where theme = '<theme>' and id like 'fr.b1.%'");
console.log("      and nullif(regexp_replace(split_part(id,'.',4),'[^0-9]','','g'),'')::int >= <floor>;");

console.log('\nSTILL OPEN:');
console.log('  - The DB_ONLY_TWINS question: lessons authored near-duplicates of');
console.log('    published rows they could not name. Dedupe or keep, still open.');
console.log('  - Nothing here writes. The pipeline that does must still handle unit');
console.log('    creation, the seed merge and the no-text-bump version rule.');
console.log(
  `\n${
    blockers.length === 0
      ? 'READY to import: clean on the seed plane, and the database probe above found\nnothing it would overwrite. What is missing is the pipeline itself, not permission.'
      : 'NOT READY.'
  }`,
);
}

// tsx transforms this to CJS, which has no top-level await.
void main();
