// a1.23 "La nourriture" -> seed.json.
//
//   pnpm tsx scripts/merge-nourriture-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-nourriture-into-seed.ts
//
// RUN THE BATCH FIRST. Order is Postgres, then the seed, then publish only when
// the two agree. `content:publish` regenerates the seed FROM the database, so a
// seed written before the batch is a seed the next publish silently deletes.
//
// What this writes into seed.json:
//
//   3   authored items    fr.a1.cuisine.272 .273 .274
//   8   carried items     7 au-restaurant + 1 mots-essentiels, all OUTSIDE the cut
//   37  respelling repairs applied to the seed's own copies of those rows
//   1   lesson            a1.23.l1
//   1   unit rebind       a1.23 themes -> cuisine + marche, lessonIds linked
//
// It does NOT touch `seed.version`. That is the OTA snapshot number, derived by
// publish-content.ts as previous + 1, and a merge must never hand-bump it. The
// LESSON's own `version` is a different field and this lesson ships at 1.
//
// ── Why this names the lessons it must not disturb ─────────────────────────
//
// A count alone lets a one-for-one swap through: delete somebody's lesson, add
// yours, and the total is unchanged. So the list below is BY ID, captured
// before the write and compared after it.
//
// ── Why the carried rows are only eight ────────────────────────────────────
//
// `cuisine` and `marche` are both inside SEED_CUT.themes, so 52 of the 60 food
// cards are already in the binary and need nothing. Only rows in themes outside
// the cut have to be carried, or the card renders blank on a fresh offline
// install. a1.22 had to carry forty for exactly the opposite reason.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  formatIssues,
  quizQuestions,
  validateItem,
  validateLesson,
  type Item,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { measureEnding } from '../../ealch-v2/src/content/gender.logic.ts';
import { ENDING_RULES, WORTHLESS_ENDINGS, MORE_ENDINGS } from './data/genre-endings.ts';

import {
  AUTHORED_ITEMS, COUNTS, ELIDED, FOODS, NASAL_FORMS, NOT_NASAL_FORMS, NOT_REPAIRED,
  OUTSIDE_THE_CUT, RESPELL_REPAIRS, THEME_DECISION, TWIN_REPAIRS,
} from './data/nourriture-corpus.ts';
import { IMPORTED, REUSED } from './data/nourriture-imported.ts';
import {
  NOURRITURE_BORROWED_NOT_RELEASED, NOURRITURE_ITEM_IDS, NOURRITURE_LESSON, NOURRITURE_TRANCHES, REFRAME,
} from './data/nourriture-lesson.ts';
import { REFRAME_COUNT } from './data/nourriture-terms.ts';

type Seed = {
  version: number;
  units: (Unit & { themes?: string[]; lessonIds?: string[] })[];
  lessons: Lesson[];
  items: Item[];
  [k: string]: unknown;
};

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

const UNIT_ID = 'a1.23';
const LESSON: Lesson = NOURRITURE_LESSON;
const ALL_REPAIRS = [...RESPELL_REPAIRS, ...TWIN_REPAIRS];

/* Explicit, not derived. Invariant §5. */
const EXPECTED_FOODS = 60;
const EXPECTED_AUTHORED = 3;
const EXPECTED_CARRIED = 8;
const EXPECTED_REPAIRS = 37;
const EXPECTED_SECTIONS = 29;
const EXPECTED_ROUNDS = 6;

function die(msg: string): never {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

function ok(label: string, detail = '') {
  console.log(`  ✓ ${label}${detail ? `  ${detail}` : ''}`);
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

console.log(`\na1.23 "La nourriture" -> seed.json v${seed.version}`);
if (DRY_RUN) console.log('  (dry run, nothing will be written)');
console.log(`  ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units before\n`);

/* ── What must survive, BY NAME rather than by count ───────────────────────── */
const MUST_KEEP_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const CARRIED: Item[] = IMPORTED;
const NEW_ITEMS: Item[] = [...AUTHORED_ITEMS, ...CARRIED];
const NEW_IDS = new Set(NEW_ITEMS.map((i) => i.id));
const MUST_KEEP_ITEMS = seed.items.filter((i) => !NEW_IDS.has(i.id)).map((i) => i.id).sort();
const ITEMS_BEFORE = seed.items.length;

/* ── Pre-flight, the same checks the batch ran ─────────────────────────────── */
console.log('pre-flight:');
if (FOODS.length !== EXPECTED_FOODS) die(`${FOODS.length} foods, expected ${EXPECTED_FOODS}`);
if (COUNTS.authored !== EXPECTED_AUTHORED) die(`${COUNTS.authored} authored, expected ${EXPECTED_AUTHORED}`);
if (OUTSIDE_THE_CUT.length !== EXPECTED_CARRIED) die(`${OUTSIDE_THE_CUT.length} rows outside the cut, expected ${EXPECTED_CARRIED}`);
if (CARRIED.length !== EXPECTED_CARRIED) die(`${CARRIED.length} carried rows, expected ${EXPECTED_CARRIED}`);
if (ALL_REPAIRS.length !== EXPECTED_REPAIRS) die(`${ALL_REPAIRS.length} repairs, expected ${EXPECTED_REPAIRS}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items do not validate:\n${formatIssues(itemIssues)}`);
const lessonIssues = validateLesson(LESSON);
if (lessonIssues.length) die(`the lesson does not validate:\n${formatIssues(lessonIssues)}`);
const density = validateDensity(LESSON);
if (density.length) die(`density:\n${formatDensity(density)}`);
ok(`${NEW_ITEMS.length} items and the lesson validate, density clean`);

// The carried set and OUTSIDE_THE_CUT must be the same set, or the merge is
// carrying something nobody decided to carry.
const carriedIds = CARRIED.map((i) => i.id).sort();
if (carriedIds.join() !== [...OUTSIDE_THE_CUT].sort().join()) {
  die(`the carried rows and OUTSIDE_THE_CUT disagree:\n  carried ${carriedIds.join(' ')}\n  declared ${[...OUTSIDE_THE_CUT].sort().join(' ')}`);
}
ok(`the ${EXPECTED_CARRIED} carried rows are exactly the ones declared outside the cut`);

// Nothing this lesson names may be missing from the post-merge seed.
const seedIds = new Set(seed.items.map((i) => i.id));
for (const id of NEW_IDS) seedIds.add(id);
const dangling = NOURRITURE_ITEM_IDS.filter((id) => !seedIds.has(id));
if (dangling.length) {
  die(
    `${dangling.length} id(s) the lesson names would not be in the seed after this merge: ${dangling.join(' ')}\n`
    + `  Either carry them (add to IMPORTED) or stop naming them.`,
  );
}
ok(`all ${NOURRITURE_ITEM_IDS.length} declared ids resolve in the post-merge seed`);

// The reused rows must ALREADY be there. If one is missing the cut has moved.
const missingReused = REUSED.map((r) => r.id).filter((id) => !seed.items.some((i) => i.id === id));
if (missingReused.length) {
  die(
    `${missingReused.length} REUSED row(s) are not in the seed today: ${missingReused.join(' ')}\n`
    + `  They were measured as present on 2026-08-07. Re-run scripts/_nourriture_imported_gen.ts and move them to IMPORTED.`,
  );
}
ok(`all ${REUSED.length} reused rows are already in the seed and are left untouched`);

/* ── The write ─────────────────────────────────────────────────────────────── */
console.log('\nwriting:');

let inserted = 0;
let updated = 0;
for (const it of NEW_ITEMS) {
  const ix = seed.items.findIndex((i) => i.id === it.id);
  if (ix === -1) { seed.items.push(it); inserted++; } else { seed.items[ix] = it; updated++; }
}
ok(`${inserted} items inserted, ${updated} updated`);

// The repairs, applied to the seed's own copies. A repair whose row is not in
// the seed is not an error: `au-restaurant` is outside the cut, so most of that
// theme is legitimately absent. A repair that finds a row carrying neither the
// broken value nor the repaired one IS an error.
let repaired = 0;
let alreadyRight = 0;
let notInSeed = 0;
for (const r of ALL_REPAIRS) {
  const row = seed.items.find((i) => i.id === r.id);
  if (!row) { notInSeed++; continue; }
  if (row.fr !== r.fr) die(`repair target ${r.id} reads "${row.fr}" in the seed, this build measured "${r.fr}"`);
  const stored = row.respell ?? '';
  if (stored === r.to) { alreadyRight++; continue; }
  if (stored !== r.from) {
    die(`${r.id} "${r.fr}" carries "${stored}" in the seed and this build measured "${r.from}". Nothing written.`);
  }
  row.respell = r.to;
  repaired++;
}
ok(`${repaired} respellings repaired in the seed`, `${alreadyRight} already right, ${notInSeed} not in the cut`);

// The rows documented as already correct must still be correct.
for (const n of NOT_REPAIRED) {
  const row = seed.items.find((i) => i.id === n.id);
  if (!row) continue;
  if ((row.respell ?? '') !== n.respell) {
    die(
      `${n.id} "${n.fr}" was correct at "${n.respell}" and the seed now reads "${row.respell}". `
      + `Somebody has "fixed" a row this lesson documents as already right.`,
    );
  }
}
ok(`${NOT_REPAIRED.length} correctly-authored rows untouched`);

const lix = seed.lessons.findIndex((l) => l.id === LESSON.id);
if (lix === -1) { seed.lessons.push(LESSON); ok(`lesson ${LESSON.id} added at v${LESSON.version}`); }
else {
  const was = seed.lessons[lix].version;
  seed.lessons[lix] = LESSON;
  ok(`lesson ${LESSON.id} replaced, v${was} -> v${LESSON.version}`);
}

const uix = seed.units.findIndex((u) => u.id === UNIT_ID);
if (uix === -1) die(`unit ${UNIT_ID} is not in the seed`);
const unit = seed.units[uix];
const themesWas = unit.themes ?? [];
if (themesWas.join() !== THEME_DECISION.was.join() && themesWas.join() !== THEME_DECISION.now.join()) {
  die(`unit ${UNIT_ID} themes are ${JSON.stringify(themesWas)}, expected ${JSON.stringify(THEME_DECISION.was)} or ${JSON.stringify(THEME_DECISION.now)}`);
}
unit.themes = [...THEME_DECISION.now];
unit.lessonIds = [...new Set([...(unit.lessonIds ?? []), LESSON.id])];
ok(`unit ${UNIT_ID} themes ${JSON.stringify(themesWas)} -> ${JSON.stringify(unit.themes)}`);
ok(`unit ${UNIT_ID} lessonIds -> ${JSON.stringify(unit.lessonIds)}`);

/* ── Post-merge, against the seed as it now stands ─────────────────────────── */
console.log('\npost-merge checks:');

const keptLessons = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const lostLessons = MUST_KEEP_LESSONS.filter((id) => !keptLessons.includes(id));
if (lostLessons.length) die(`this merge DELETED ${lostLessons.length} lesson(s): ${lostLessons.join(' ')}`);
ok(`all ${MUST_KEEP_LESSONS.length} other lessons survive, checked BY NAME`);

const keptItems = new Set(seed.items.map((i) => i.id));
const lostItems = MUST_KEEP_ITEMS.filter((id) => !keptItems.has(id));
if (lostItems.length) die(`this merge DELETED ${lostItems.length} item(s): ${lostItems.slice(0, 12).join(' ')}`);
ok(`all ${MUST_KEEP_ITEMS.length} other items survive, checked BY NAME`);

if (seed.items.length !== ITEMS_BEFORE + inserted) {
  die(`item count is ${seed.items.length}, expected ${ITEMS_BEFORE} + ${inserted}`);
}

// No two vocab rows may share a normalised `fr` within one theme.
//
// THE AUTHORITATIVE GATE IS flashhub-coverage.test.ts, which runs this over the
// WHOLE seed in the suite. What follows is scoped to the rows THIS MERGE ADDS,
// so a collision is named here with the id that caused it rather than surfacing
// later as a whole-seed failure with no author attached.
//
// The normalisation and the vocab filter are lifted verbatim from
// flashhub-coverage.test.ts:29-30. Note what `norm` does NOT strip:
//
//     const vocabType = (it) => (it.cardType ?? 'vocab') === 'vocab';
//     const norm = (s) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
//
// `du` and `de la` are absent from that list ON PURPOSE, which is why
// fr.a1.cuisine.265 « du pain » and fr.a1.cuisine.002 « le pain » both ship and
// are not duplicates. A first draft of this merge used `bareNoun` from
// gender.logic.ts, which DOES strip them, and it false-flagged three of a1.29's
// partitive rows. That is invariant §5's "run the real functions" warning
// arriving from the other direction: a guard that is stricter than the thing it
// guards blocks correct content.
const normFr = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
const isVocab = (i: Item) => ((i as { cardType?: string }).cardType ?? 'vocab') === 'vocab';

for (const added of NEW_ITEMS) {
  if (!isVocab(added) || added.kind === 'sentence') continue;
  const clash = seed.items.find((i) => (
    i.id !== added.id
    && i.theme === added.theme
    && i.kind !== 'sentence'
    && isVocab(i)
    && normFr(i.fr) === normFr(added.fr)
  ));
  if (clash) {
    die(
      `${added.id} "${added.fr}" collides with ${clash.id} "${clash.fr}" in theme ${added.theme}. `
      + `flashhub-coverage.test.ts treats two rows sharing a normalised fr in one theme as one card served twice.`,
    );
  }
}
ok(`none of the ${NEW_ITEMS.length} added rows collides in its theme`, 'rule lifted from flashhub-coverage.test.ts:29-30');

// The respelling rules, re-checked on the seed rather than on the source.
for (const fr of NASAL_FORMS) {
  const f = FOODS.find((x) => x.fr === fr)!;
  const row = seed.items.find((i) => i.id === f.id);
  if (row && !(row.respell ?? '').includes('ⁿ')) die(`${f.id} "${fr}" is nasal and the SEED carries "${row.respell}"`);
}
for (const fr of NOT_NASAL_FORMS) {
  const f = FOODS.find((x) => x.fr === fr)!;
  const row = seed.items.find((i) => i.id === f.id);
  if (row && (row.respell ?? '').includes('ⁿ')) die(`${f.id} "${fr}" has no nasal and the SEED carries "${row.respell}"`);
}
const flagged = FOODS
  .filter((f) => seed.items.some((i) => i.id === f.id))
  .filter((f) => hasPlainNasalFor(f.bare, seed.items.find((i) => i.id === f.id)!.respell ?? ''))
  .map((f) => f.fr);
if (flagged.join() !== ['la crème'].join()) {
  die(`the shared checker flags ${JSON.stringify(flagged)} in the seed; this build expects exactly ["la crème"]`);
}
ok(`${NASAL_FORMS.length} nasals closed, ${NOT_NASAL_FORMS.length} correctly open, one documented false positive`);

// a1.03's printed figures, re-measured against the seed THIS MERGE JUST WROTE.
//
// THE GUARD THAT WAS MISSING. The batch checks only the 3 rows it writes to
// Postgres, which is right for Postgres. But a1-03-genre.test.ts measures the
// SEED, and the merge adds 8 CARRIED rows on top of the 3 authored ones. Nine of
// those eleven join the ending population, and three of a1.03's printed figures
// moved: -e (880->881, la bière), -é (50->52 and 52%->54%, le café and le thé)
// and -in (43->44, le vin).
//
// A first version of this merge had no such check and the suite found it three
// tests later. Now the merge says so, with the numbers, before the suite runs.
{
  const printed = [
    ...ENDING_RULES.map((e) => ({ ending: e.ending, items: e.items, accuracy: e.accuracy, where: 'flow' })),
    ...WORTHLESS_ENDINGS.map((e) => ({ ending: e.ending, items: e.items, accuracy: e.accuracy, where: 'worthless' })),
    ...MORE_ENDINGS.map((e) => ({ ending: e.ending, items: e.items, accuracy: e.accuracy, where: 'sheet' })),
  ];
  const drifted: string[] = [];
  for (const p of printed) {
    const m = measureEnding(seed.items, p.ending);
    if (!m) { drifted.push(`-${p.ending}: nothing ends this way any more`); continue; }
    if (m.n !== p.items || m.accuracy !== p.accuracy) {
      drifted.push(`-${p.ending} [${p.where}]: a1.03 prints n=${p.items} acc=${p.accuracy}%, the merged seed measures n=${m.n} acc=${m.accuracy}%`);
    }
  }
  if (drifted.length) {
    die(
      `this merge moved ${drifted.length} of a1.03's printed figures:\n    ${drifted.join('\n    ')}\n`
      + `  Re-measure them in scripts/data/genre-endings.ts, or a1-03-genre.test.ts stays red.\n`
      + `  scripts/_nourriture_endings_moved.ts prints the before and after for every one.`,
    );
  }
  ok(`all ${printed.length} of a1.03's printed endings still agree with the merged seed`);
}

const reframeCount = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (reframeCount !== REFRAME_COUNT) die(`the reframe appears ${reframeCount}x, the constant says ${REFRAME_COUNT}`);
ok(`the reframe appears ${reframeCount}x`);

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz || quiz.type !== 'quiz') die('no quiz section');
if ((quiz.rounds?.length ?? 0) !== EXPECTED_ROUNDS) die(`${quiz.rounds?.length} rounds, expected ${EXPECTED_ROUNDS}`);
const qs = quizQuestions(quiz);
const mcq = qs.filter((q) => q.format === 'mcq').length;
if (mcq > qs.length / 2) die(`mcq is ${mcq}/${qs.length}, over the half ceiling`);
for (const q of qs) if (!q.why) die(`a quiz question has no why`);
ok(`${qs.length} questions, ${EXPECTED_ROUNDS} rounds, mcq ${mcq}/${qs.length}, every one with a why`);

const released = NOURRITURE_TRANCHES.flat();
const dupes = released.filter((id, i) => released.indexOf(id) !== i);
if (dupes.length) die(`released more than once: ${[...new Set(dupes)].join(' ')}`);
for (const id of NOURRITURE_BORROWED_NOT_RELEASED) {
  if (released.includes(id)) die(`${id} belongs to a1.29 and must be shown but not released`);
}
ok(`${released.length} items released exactly once`);

if (seed.version !== JSON.parse(readFileSync(SEED, 'utf8')).version) {
  die('seed.version changed. It is the OTA snapshot number and a merge must never move it.');
}
ok(`seed.version left at ${seed.version}`, 'it is the OTA snapshot number, not a counter');

/* ── Write ─────────────────────────────────────────────────────────────────── */
if (DRY_RUN) {
  console.log(`\n✓ dry run, all valid, nothing written.`);
  console.log(`  would write ${seed.items.length} items (+${inserted}), ${seed.lessons.length} lessons, ${repaired} repairs.\n`);
  process.exit(0);
}

// Canonical formatting: JSON.stringify(x, null, 2) with a trailing newline. A
// whole-file rewrite is safe and expected; a huge diff here is the content, not
// a reformat.
writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');

console.log(
  `\n✓ nourriture merged into seed.json:`
  + ` ${inserted} items added (${AUTHORED_ITEMS.length} authored, ${CARRIED.length} carried), ${updated} updated,`
  + ` ${repaired} respellings repaired, lesson ${LESSON.id} at v${LESSON.version},`
  + ` unit ${UNIT_ID} rebound to ${JSON.stringify(THEME_DECISION.now)}.`
  + `\n  seed.version left at ${seed.version}.`
  + `\n  Next: cd ../ealch-v2 && npx tsc --noEmit && node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"`
  + `\n  Then: pnpm content:parity. Do NOT run content:publish until it is clean.\n`,
);
