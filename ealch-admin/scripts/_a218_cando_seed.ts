/* Brings seed.json's a2.18 unit row into line with the reworded canDo.
 *
 *   pnpm tsx scripts/_a218_cando_seed.ts --dry-run
 *   pnpm tsx scripts/_a218_cando_seed.ts
 *
 * ── WHY THIS EXISTS RATHER THAN A PUBLISH ─────────────────────────────────
 *
 * `content:publish` regenerates the seed FROM the database, which would bring
 * this one field into line as a side effect — and would also cut a new OTA
 * snapshot and ship a2.18 and a2.19 to devices. That is a much larger act than
 * correcting a curriculum field, and it is a decision of its own.
 *
 * This writes ONE FIELD on ONE UNIT and proves that nothing else in the file
 * moved. A later publish regenerates the same value from the same database
 * row, so nothing here is lost or contradicted by one.
 *
 * `spine-drift.test.ts` compares the spine script's canDo against the SEED's,
 * so until this runs that test is red. That is the whole reason the field
 * cannot be left to the next publish.
 *
 * NEVER `git checkout seed.json` to undo this. Re-run it, or run a publish.
 */
import './env';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { UNIT, CANDO_OVERCLAIM } from './data/prepositions-temps-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const die = (m: string): never => { console.error(`\n  ${m}\n`); process.exit(1); };

type Seed = { version: number; units: { id: string; canDo?: string }[]; [k: string]: unknown };

const raw = readFileSync(SEED, 'utf8');
const seed = JSON.parse(raw) as Seed;

const before = JSON.stringify(seed);
const found = seed.units.find((u) => u.id === UNIT.id);
if (!found) die(`the seed has no unit ${UNIT.id}`);
// `die` returns never and TypeScript only narrows across a never-returning call
// when the callee is a function DECLARATION or an explicitly typed const. This
// one is an arrow, so the assertion does the narrowing.
const unit = found!;

if (unit.canDo === UNIT.canDo) {
  console.log(`\n  ${UNIT.id} already carries the reworded canDo. Nothing to do.\n`);
  process.exit(0);
}
if (unit.canDo !== CANDO_OVERCLAIM.wasShipped) {
  die(`${UNIT.id} carries ${JSON.stringify(unit.canDo)}, which is neither the value this build `
    + `replaces nor the replacement. Somebody else has edited it; read that before overwriting.`);
}

unit.canDo = UNIT.canDo;

/* NOTHING ELSE MOVED. The whole file is compared, not just the units array. */
{
  const after = JSON.parse(JSON.stringify(seed)) as Seed;
  const u = after.units.find((x) => x.id === UNIT.id)!;
  u.canDo = CANDO_OVERCLAIM.wasShipped;
  if (JSON.stringify(after) !== before) die('this script changed something other than one canDo field');
}
if (seed.version !== (JSON.parse(raw) as Seed).version) die('seed.version moved; it is the OTA snapshot number');

console.log(`\n  ${UNIT.id} canDo`);
console.log(`    was  ${JSON.stringify(CANDO_OVERCLAIM.wasShipped)}`);
console.log(`    now  ${JSON.stringify(UNIT.canDo)}`);
console.log(`  ${seed.units.length} units, seed.version ${seed.version} (untouched), one field changed`);

if (DRY_RUN) {
  console.log('\n  DRY RUN: nothing written.\n');
} else {
  writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');
  console.log(`\n  wrote ${SEED}\n`);
}
