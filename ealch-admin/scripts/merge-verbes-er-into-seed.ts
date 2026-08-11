/* Merges a2.01.l1 "Les verbes en -ER" into ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-verbes-er-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-verbes-er-into-seed.ts
 *
 * RUN THE BATCH FIRST. Order has cost real work twice: apply to Postgres, merge
 * into the seed, publish only when both agree. content:publish regenerates the
 * seed FROM the database, so a merge that runs before its batch is a lesson
 * waiting to be deleted by the next publish. Publishing is BLOCKED today anyway
 * and is not part of a lesson build.
 *
 * ── WHY THIS MERGE IS BIG ─────────────────────────────────────────────────
 *
 * `verbes` is OUTSIDE SEED_CUT.themes: 368 published in Postgres, 5 in the seed.
 * Thirty of the thirty-two rows this lesson imports are in the database and NOT
 * in seed.json, so this merge has to CARRY them or every one of the thirty verb
 * cards renders blank on a device. a1.22 hit the same wall with forty rows.
 *
 * That makes the item count move by 55: 25 authored plus 30 carried. Both halves
 * are checked separately below, because "the count went up" is not evidence that
 * the right things went up.
 *
 * ── NEVER `git checkout seed.json` ────────────────────────────────────────
 *
 * Reverting it discards other authors' uncommitted lessons. If this merge writes
 * something wrong, fix the source and run it again.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  formatIssues, quizQuestions, validateItem, validateLesson,
  type Item, type Lesson, type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import {
  DICTATION_IDS, DRILL_ADDITIONS, RESPELL_REPAIRS, THEME, THE_THIRTY, VERBES_ER, toItem,
} from './data/verbes-er-corpus.ts';
import { IMPORTED_ROWS, IMPORTED_VERBS } from './data/verbes-er-imported.ts';
import {
  CONTRAST_SECTION_ID, NOUS_ON, NOUS_ON_SECTION_ID, REFRAME, VERBES_ER_LESSON,
} from './data/verbes-er-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = VERBES_ER_LESSON;
const UNIT_ID = 'a2.01';
const UNIT_TITLE = 'Regular -ER Verbs';
const UNIT_SUB = 'Les verbes en -ER';
const UNIT_CANDO = 'Can conjugate any regular -er verb in the present and use it in a real sentence';
const REFRAME_APPEARANCES = 10;
const AUTHORED_ITEMS: Item[] = VERBES_ER.map(toItem);
const AUTHORED_IDS = new Set(AUTHORED_ITEMS.map((i) => i.id));

function die(msg: string): never {
  console.error(`\n  ${msg}\n`);
  process.exit(1);
}
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

console.log(`\n  merging a2.01.l1 into seed.json${DRY_RUN ? '  (DRY RUN)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

/* ── The lessons this merge MUST NOT DISTURB, BY NAME ─────────────────────
 *
 * Named rather than counted. A count alone lets a one-for-one swap through, and
 * that is exactly the shape of the accident this project has already had: the
 * seed and Postgres drift, somebody's uncommitted lesson is replaced by another,
 * and the total never moves.                                                  */
const MUST_NOT_DISTURB = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const UNITS_BEFORE = seed.units.length;
/** Every item id this merge is allowed to touch. Anything else must come out the
 *  far side byte-identical, and that is checked rather than assumed. */
const MINE = new Set<string>([
  ...AUTHORED_IDS,
  ...IMPORTED_ROWS.map((r) => r.id),
  ...RESPELL_REPAIRS.map((r) => r.id),
  ...DRILL_ADDITIONS.map((d) => d.id),
]);
const UNTOUCHED_BEFORE = new Map(
  seed.items.filter((i) => !MINE.has(i.id)).map((i) => [i.id, JSON.stringify(i)] as const),
);

/* ── Everything the batch checked, checked again against the POST-MERGE seed ─ */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(formatIssues(itemIssues));
const carriedIssues = IMPORTED_ROWS.flatMap((it) => validateItem(it, it.id));
if (carriedIssues.length) die(`the rows carried through the cut do not validate:\n${formatIssues(carriedIssues)}`);

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(formatIssues(lessonIssues));

const POST_MERGE_IDS = new Set([
  ...seed.items.map((i) => i.id),
  ...AUTHORED_ITEMS.map((i) => i.id),
  ...IMPORTED_ROWS.map((i) => i.id),
]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(formatDensity(density));

const missing = LESSON.itemIds.filter((id) => !POST_MERGE_IDS.has(id));
if (missing.length) {
  die(
    `${missing.length} itemId(s) will NOT be in the seed after this merge: ${missing.slice(0, 6).join(', ')}\n`
    + `  A lesson whose itemIds resolve to nothing renders empty cards on a device. Add them to the carry.`,
  );
}

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);

/* ── The three claims that ARE the lesson ────────────────────────────────── */
{
  const FOUR_SILENT = ['je parle', 'tu parles', 'il parle', 'ils parlent'];
  const TWO_AUDIBLE = ['nous parlons', 'vous parlez'];
  const s = LESSON.sections.find((x) => (x as { id?: string }).id === CONTRAST_SECTION_ID);
  if (!s) die(`${CONTRAST_SECTION_ID} is gone`);
  const text = strings(s).join('\n').toLowerCase();
  const absent = [...FOUR_SILENT, ...TWO_AUDIBLE].filter((f) => !text.includes(f));
  if (absent.length) die(`${CONTRAST_SECTION_ID} no longer carries ${absent.join(', ')}. That contrast IS the lesson.`);
}
{
  const holders = LESSON.sections
    .filter((s) => strings(s).some((x) => x.includes(NOUS_ON)))
    .map((s) => (s as { id?: string }).id ?? '?');
  if (holders.length !== 1 || holders[0] !== NOUS_ON_SECTION_ID) {
    die(`the nous/on statement lives in ${holders.length} section(s) (${holders.join(', ') || 'none'}), expected exactly ${NOUS_ON_SECTION_ID}`);
  }
}
{
  const learner = [...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {})].join('\n');
  const gone = THE_THIRTY.filter((v) => !learner.includes(v));
  if (gone.length) die(`verb(s) named by no screen: ${gone.join(', ')}`);
}

/* ── The id collision check, against the seed this time ──────────────────── */
{
  const taken = seed.items.filter((i) => AUTHORED_IDS.has(i.id));
  if (taken.length) {
    const differs = taken.filter((i) => {
      const mine = AUTHORED_ITEMS.find((a) => a.id === i.id)!;
      return i.fr !== mine.fr;
    });
    if (differs.length) {
      die(`id(s) already in the seed carrying DIFFERENT content: ${differs.map((i) => `${i.id} "${i.fr}"`).join(', ')}`);
    }
    console.log(`  ${taken.length} authored id(s) already in the seed with matching fr: this is a re-run`);
  }
}

/* ── No two non-sentence rows in one theme may share an `fr` ─────────────── */
{
  const replaced = new Set([...AUTHORED_IDS, ...IMPORTED_ROWS.map((r) => r.id)]);
  const post = [...seed.items.filter((i) => !replaced.has(i.id)), ...AUTHORED_ITEMS, ...IMPORTED_ROWS];
  const seen = new Map<string, string>();
  const clashes: string[] = [];
  for (const i of post) {
    if (i.kind === 'sentence') continue;
    // A two-element array as the key rather than a NUL join: a NUL made
    // seed-writing scripts BINARY to git and every diff opaque.
    const key = JSON.stringify([i.theme, i.fr]);
    const prev = seen.get(key);
    if (prev) clashes.push(`${i.theme} "${i.fr}": ${prev} and ${i.id}`);
    else seen.set(key, i.id);
  }
  const themesIcarry = new Set(IMPORTED_ROWS.map((r) => r.theme));
  const mine = clashes.filter((c) => themesIcarry.has(c.split(' ')[0]));
  if (mine.length) die(`fr collision inside a theme this merge writes into:\n  ${mine.join('\n  ')}\n  flashhub-coverage treats that as one card served twice.`);
  console.log(`  no fr collision in the themes this merge carries (${clashes.length} pre-existing elsewhere, none of them this build's)`);
}

/* ── a1.03: joiners enforced to ZERO, authored AND carried ──────────────── */
{
  const joiners = endingPopulation([...AUTHORED_ITEMS, ...IMPORTED_ROWS]);
  if (joiners.length !== 0) {
    die(
      `${joiners.length} row(s) this merge writes join a1.03's measured ending population: ${joiners.map((j) => `${j.id} "${j.fr}"`).join(', ')}\n`
      + `  a1-03-genre.test.ts re-measures twenty printed figures from the SEED on every run, so a carried row counts too.`,
    );
  }
  console.log('  a1.03 ending population: 0 joiners, authored or carried');
}

/* ── The respelling work ─────────────────────────────────────────────────── */
for (const r of RESPELL_REPAIRS) {
  if (hasPlainNasalFor(r.fr, r.to)) die(`the replacement for ${r.id} "${r.fr}" still closes a nasal with a plain n or m: ${r.to}`);
  if (!hasPlainNasalFor(r.fr, r.from)) die(`${r.id} "${r.fr}" is listed as a repair but its stored value "${r.from}" is not a violation`);
}
for (const it of AUTHORED_ITEMS) {
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} "${it.fr}" closes a nasal with a plain n or m`);
}

/* ── The quiz, and BOTH answer-spread surfaces ───────────────────────────── */
{
  const quiz = LESSON.sections.find((s) => s.type === 'quiz');
  if (!quiz || quiz.type !== 'quiz') die('no quiz section');
  if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('more than one quiz section; the pager renders exactly one');
  const qs = quizQuestions(quiz);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half limit`);
  const noWhy = qs.filter((q) => !q.why).length;
  if (noWhy) die(`${noWhy} quiz question(s) have no why`);

  // A type PREDICATE, not a bare filter: `correct` is `number | string` and
  // .filter() does not narrow it out.
  const closed = qs.filter((q): q is (typeof qs)[number] & { correct: number } => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) if ((c / closed.length) * 100 > 40) die(`quiz slot ${s} holds ${Math.round((c / closed.length) * 100)}%, over 40`);

  // The IN-MISSION surface, which nothing shuffles. MissionRich renders
  // q.opts.map in AUTHORED order.
  const inMission: { section: string; correct: number }[] = [];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct });
    if (s.type === 'trapDrill') for (const d of s.drill) inMission.push({ section: sid, correct: d.correct });
  }
  const mslots = new Map<number, number>();
  for (const q of inMission) mslots.set(q.correct, (mslots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of mslots) if ((c / inMission.length) * 100 > 40) die(`in-mission slot ${s} holds ${Math.round((c / inMission.length) * 100)}%, over 40, and nothing shuffles these`);
  let prev: { section: string; correct: number } | null = null;
  for (const q of inMission) {
    if (prev && prev.section === q.section && prev.correct === q.correct) die(`${q.section}: consecutive in-mission questions share slot ${q.correct}`);
    prev = q;
  }
  console.log(`  answer spread: quiz ${[...slots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')} | in-mission ${[...mslots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
}

/* ── The dictée, against the POST-MERGE item set ─────────────────────────── */
{
  const postById = new Map<string, Item>([
    ...seed.items.map((i) => [i.id, i] as const),
    ...IMPORTED_ROWS.map((i) => [i.id, i] as const),
    ...AUTHORED_ITEMS.map((i) => [i.id, i] as const),
  ]);
  for (const id of DICTATION_IDS) {
    const it = postById.get(id);
    if (!it) die(`the dictée names ${id}, which will not be in the seed after this merge`);
    if (!(it.drills ?? []).includes('dictation')) die(`dictation item ${id} carries no "dictation" drill`);
    const mode = dicteeMode(it.fr);
    if (mode !== 'letters') {
      die(
        `dictée target ${id} "${it.fr}" is in ${mode} mode.\n`
        + `  Word mode hands every real word over as a pre-spelled tile, so it cannot test a silent ending.`,
      );
    }
  }
  console.log(`  dictée: ${DICTATION_IDS.length} targets, all letters mode, all carrying the drill`);
}

/* ── The unit ────────────────────────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID) as (Unit & { lessonIds?: string[]; seq?: string | number }) | undefined;
if (!unit) die(`unit ${UNIT_ID} is not in the seed, so its lesson cannot be attached`);
if (unit.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: ${JSON.stringify(unit.title)}`);
if (unit.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: ${JSON.stringify(unit.sub)}`);
if (unit.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: ${JSON.stringify(unit.canDo)}`);
const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${JSON.stringify(unit.seq)}, so the header will draw ${JSON.stringify(expectedTag)}`);

/* ── Write ───────────────────────────────────────────────────────────────── */

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing) {
  if (existing.version > LESSON.version) {
    die(`the seed carries v${existing.version} and this source is v${LESSON.version}. Move the LESSON's own version counter forward (not seed.version).`);
  }
  console.warn(
    `\n! seed.json already carries ${LESSON.id}`
    + `\n  seed: v${existing.version}, ${existing.sections.length} sections, ${existing.itemIds.length} items`
    + `\n  here: v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`
    + `\n  This is the pre-v2 stub being replaced by the rebuild. Overwriting with the authored copy.\n`,
  );
}

const byId = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;
let carried = 0;
/** The imported rows FIRST, so an authored id could never be shadowed by one. */
for (const it of IMPORTED_ROWS) {
  if (!byId.has(it.id)) carried++;
  byId.set(it.id, it);
}
for (const it of AUTHORED_ITEMS) {
  if (byId.has(it.id)) updatedItems++; else added++;
  byId.set(it.id, it);
}

const respellApplied: string[] = [];
for (const r of RESPELL_REPAIRS) {
  const row = byId.get(r.id);
  if (!row) { respellApplied.push(`${r.id} ${r.fr}: not in the seed, Postgres only`); continue; }
  const now = row.respell ?? null;
  if (now !== r.from && now !== r.to) {
    die(`respelling for ${r.id}: expected ${JSON.stringify(r.from)}, the seed says ${JSON.stringify(now)}.\n  Somebody has changed this row. Look before overwriting.`);
  }
  if (now !== r.to) {
    byId.set(r.id, { ...row, respell: r.to });
    respellApplied.push(`${r.id} ${r.fr}: ${JSON.stringify(r.from)} → ${JSON.stringify(r.to)}`);
  }
}

const drillsApplied: string[] = [];
for (const d of DRILL_ADDITIONS) {
  const row = byId.get(d.id);
  if (!row) { drillsApplied.push(`${d.id}: not in the seed, Postgres only`); continue; }
  const now = row.drills ?? [];
  if (!now.includes(d.add)) {
    byId.set(d.id, { ...row, drills: [...now, d.add].sort() });
    drillsApplied.push(`${d.id} ${row.fr}: + ${d.add}`);
  }
}

/** THE THIRTY MUST SHOW THE REPAIRED RESPELLING IN THE SEED, not the stored one.
 *  The lesson prints the repaired value on a card; if the seed row still holds
 *  the broken one, the flashcard hub and the lesson disagree on the same word. */
{
  const wrong = IMPORTED_VERBS
    .map((v) => ({ v, row: byId.get(v.id)! }))
    .filter(({ row }) => row.respell && hasPlainNasalFor(row.fr, row.respell));
  if (wrong.length) die(`verb row(s) still closing a nasal with a plain n after the repairs: ${wrong.map((w) => `${w.v.verb} ${w.row.respell}`).join(', ')}`);
}

const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

const out: Seed = {
  ...seed,
  items: [...byId.values()],
  lessons: [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON],
  units: seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u)),
};

/* ── Nothing else moved ──────────────────────────────────────────────────── */

const survivors = out.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const lost = MUST_NOT_DISTURB.filter((id) => !survivors.includes(id));
if (lost.length) die(`this merge would DROP lesson(s): ${lost.join(', ')}`);
const gained = survivors.filter((id) => !MUST_NOT_DISTURB.includes(id));
if (gained.length) die(`this merge would ADD lesson(s) it does not own: ${gained.join(', ')}`);
if (out.units.length !== UNITS_BEFORE) die(`unit count moved from ${UNITS_BEFORE} to ${out.units.length}`);
if (out.version !== seed.version) die('seed.version moved. It is the OTA snapshot number and a merge must never touch it.');

/** Every row this merge does not own comes out BYTE-IDENTICAL. A count would
 *  not catch an edit, and an edit is what the publish hazard is made of. */
{
  const changed: string[] = [];
  const dropped: string[] = [];
  const after = new Map(out.items.map((i) => [i.id, i] as const));
  for (const [id, before] of UNTOUCHED_BEFORE) {
    const now = after.get(id);
    if (!now) { dropped.push(id); continue; }
    if (JSON.stringify(now) !== before) changed.push(id);
  }
  if (dropped.length) die(`this merge would DROP ${dropped.length} row(s) it does not own: ${dropped.slice(0, 6).join(', ')}`);
  if (changed.length) die(`this merge would EDIT ${changed.length} row(s) it does not own: ${changed.slice(0, 6).join(', ')}`);
  console.log(`  ${UNTOUCHED_BEFORE.size} rows this merge does not own: byte-identical`);
}

console.log(
  `\n  ${added} item(s) authored and added, ${updatedItems} updated`
  + `\n  ${carried} row(s) CARRIED through the seed cut so the thirty verb cards are not blank`
  + `\n  ${respellApplied.length} respelling change(s):${respellApplied.length ? `\n    ${respellApplied.join('\n    ')}` : ' none'}`
  + `\n  ${drillsApplied.length} drill change(s):${drillsApplied.length ? `\n    ${drillsApplied.join('\n    ')}` : ' none'}`
  + `\n  unit ${UNIT_ID}: lessonIds ${JSON.stringify(nextUnit.lessonIds)}`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`
  + `\n  items ${seed.items.length} → ${out.items.length}`
  + `\n  ${MUST_NOT_DISTURB.length} other lesson(s) untouched, by name`,
);

if (DRY_RUN) {
  console.log('\n  DRY RUN: seed.json not written.\n');
  process.exit(0);
}

// Canonical formatting. A whole-file rewrite at this shape is correct and a huge
// git diff here is a real content change rather than a reformat.
writeFileSync(SEED, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
console.log(`\n  seed.json written. seed.version left at ${out.version}.\n  NEXT: cd ../ealch-v2 && node --test "src/**/*.test.ts"\n`);
