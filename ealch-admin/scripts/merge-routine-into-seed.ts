/* Merges a1.25.l1 "La routine quotidienne" into ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-routine-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-routine-into-seed.ts
 *
 * RUN THE BATCH FIRST. Order has cost real work twice: apply to Postgres, merge
 * into the seed, publish only when both agree. content:publish regenerates the
 * seed FROM the database, so a merge that runs before its batch is a lesson
 * waiting to be deleted by the next publish.
 *
 * ── WHY THIS MERGE IS SMALL ────────────────────────────────────────────────
 *
 * `routines` is INSIDE SEED_CUT.themes: 338 published in Postgres, 338 in the
 * seed. All 52 rows this lesson displays are ALREADY HERE. So unlike a1.22,
 * which had to carry 40 rows through the cut or ship blank cards, this merge
 * writes one new item, repairs eight respellings, adds three drills, removes one
 * U+203F tie, rebinds the unit and attaches the lesson.
 *
 * ── NEVER `git checkout seed.json` ─────────────────────────────────────────
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
import { dicteeMode, wordDecoys } from '../../ealch-v2/src/content/dictee.logic.ts';
import {
  AUTHORED_ITEMS, DRILL_ADDITIONS, IPA_REPAIRS, RESPELL_ADDITIONS, RESPELL_REPAIRS,
  TAKES_ARTICLE, TAKES_NOTHING, WITHDRAWN_IDS,
} from './data/routine-corpus.ts';
import { REUSED } from './data/routine-imported.ts';
import { ROUTINE_DICTATION_IDS, ROUTINE_LESSON, REFRAME } from './data/routine-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = ROUTINE_LESSON;
const UNIT_ID = 'a1.25';
const UNIT_THEMES_BEFORE = ['routine'];
const UNIT_THEMES_AFTER = ['routines'];
const UNIT_TITLE = 'Daily Routine';
const UNIT_SUB = 'La routine quotidienne';
const UNIT_CANDO = 'Can describe their day from getting up to going to bed';
const REFRAME_APPEARANCES = 8;

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

console.log(`\n  merging a1.25.l1 into seed.json${DRY_RUN ? '  (DRY RUN)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

/* ── The lessons this merge MUST NOT DISTURB, BY NAME ─────────────────────
 *
 * Named rather than counted. A count alone lets a one-for-one swap through, and
 * that is exactly the shape of the accident this project has already had: the
 * seed and Postgres drift, somebody's uncommitted lesson is replaced by another,
 * and the total never moves.                                                  */
const MUST_NOT_DISTURB = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const OTHER_ITEMS_BEFORE = seed.items.filter((i) => i.id !== AUTHORED_ITEMS[0].id).length;
const UNITS_BEFORE = seed.units.length;

/* ── Everything the batch checked, checked again against the POST-MERGE seed ─ */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(formatIssues(itemIssues));

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(formatIssues(lessonIssues));

const POST_MERGE_IDS = new Set([...seed.items.map((i) => i.id), ...AUTHORED_ITEMS.map((i) => i.id)]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(formatDensity(density));

const missing = LESSON.itemIds.filter((id) => !POST_MERGE_IDS.has(id));
if (missing.length) {
  die(
    `${missing.length} itemId(s) will NOT be in the seed after this merge: ${missing.slice(0, 6).join(', ')}\n`
    + `  A lesson whose itemIds resolve to nothing renders empty cards on a device.`,
  );
}

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);

const smuggled = WITHDRAWN_IDS.filter((id) => LESSON.itemIds.includes(id));
if (smuggled.length) die(`withdrawn row(s) reached itemIds: ${smuggled.join(', ')}`);

/* ── The id collision check, against the seed this time ──────────────────── */
{
  const taken = seed.items.filter((i) => AUTHORED_ITEMS.some((a) => a.id === i.id));
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
  const post = [...seed.items.filter((i) => !AUTHORED_ITEMS.some((a) => a.id === i.id)), ...AUTHORED_ITEMS];
  const seen = new Map<string, string>();
  const clashes: string[] = [];
  for (const i of post) {
    if (i.kind === 'sentence') continue;
    // JSON.stringify over a NUL separator. A NUL is a fine unambiguous
    // joiner and it made this whole file BINARY to git: `git show --numstat`
    // prints "-  -" for it, so every change to a script that rewrites
    // seed.json has landed as an opaque blob with no reviewable diff. A
    // two-element array is just as collision-proof and stays readable.
    const key = JSON.stringify([i.theme, i.fr]);
    const prev = seen.get(key);
    if (prev) clashes.push(`${i.theme} "${i.fr}": ${prev} and ${i.id}`);
    else seen.set(key, i.id);
  }
  const mine = clashes.filter((c) => c.startsWith('routines'));
  if (mine.length) die(`fr collision inside theme routines after this merge:\n  ${mine.join('\n  ')}`);
  console.log(`  no fr collision inside routines (${clashes.length} pre-existing elsewhere in the seed, none of them this build's)`);
}

/* ── a1.03: authored joiners enforced to ZERO ────────────────────────────── */
{
  const joiners = endingPopulation(AUTHORED_ITEMS);
  if (joiners.length !== 0) die(`${joiners.length} authored row(s) join a1.03's ending population: ${joiners.map((j) => j.fr).join(', ')}`);
  console.log('  a1.03 ending population: 0 authored joiners');
}

/* ── The respelling work ─────────────────────────────────────────────────── */
for (const r of [...RESPELL_REPAIRS, ...RESPELL_ADDITIONS]) {
  if (hasPlainNasalFor(r.fr, r.to)) die(`the replacement for ${r.id} "${r.fr}" still closes a nasal with a plain n or m: ${r.to}`);
}
for (const it of AUTHORED_ITEMS) {
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} "${it.fr}" closes a nasal with a plain n or m`);
}

/* ── THE CONTRAST IS THE LESSON, AND IT IS ONE SCREEN ────────────────────── */
{
  const both = LESSON.sections.filter((s) => {
    if (s.type !== 'tapTable') return false;
    const text = strings(s).join('\n');
    return TAKES_ARTICLE.every((p) => text.includes(p.fr)) && TAKES_NOTHING.every((p) => text.includes(p.fr));
  }).map((s) => (s as { id?: string }).id ?? '?');
  if (!both.includes('s05-contrast')) die(`no tapTable carries both columns (found: ${both.join(', ') || 'none'}). That contrast IS the lesson.`);
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

  // A type PREDICATE, not a bare filter — see the note in _routine_validate.ts.
  // `correct` is `number | string` and .filter() does not narrow it out.
  const closed = qs.filter((q): q is (typeof qs)[number] & { correct: number } => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) if ((c / closed.length) * 100 > 40) die(`quiz slot ${s} holds ${Math.round((c / closed.length) * 100)}%, over 40`);

  // The IN-MISSION surface, which nothing shuffles. MissionRich.tsx:347, :732
  // and :1941 render q.opts.map in AUTHORED order.
  const inMission: { section: string; correct: number }[] = [];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct });
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
    ...AUTHORED_ITEMS.map((i) => [i.id, i] as const),
  ]);
  for (const id of ROUTINE_DICTATION_IDS) {
    const it = postById.get(id);
    if (!it) die(`the dictée names ${id}, which will not be in the seed after this merge`);
    if (!(it.drills ?? []).includes('dictation')) die(`dictation item ${id} carries no "dictation" drill`);
    console.log(`    dictée ${id}: ${dicteeMode(it.fr)} mode, decoys ${JSON.stringify(wordDecoys(it.fr))}`);
  }
  const midday = postById.get(ROUTINE_DICTATION_IDS[0])!;
  if (!wordDecoys(midday.fr).map((d) => d.toLowerCase()).includes('le')) {
    die('the midday dictée no longer offers "le" as a decoy. In word mode every real word is handed over as a tile, so without it that target tests nothing this lesson teaches.');
  }
}

/* ── The unit, and THE REBINDING ─────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID) as (Unit & { themes?: string[]; lessonIds?: string[] }) | undefined;
if (!unit) die(`unit ${UNIT_ID} is not in the seed, so its lesson cannot be attached`);
if (unit.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unit.title}"`);
if (unit.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: "${unit.sub}"`);
if (unit.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: "${unit.canDo}"`);
const themesNow = unit.themes ?? [];
if (themesNow.join() !== UNIT_THEMES_BEFORE.join() && themesNow.join() !== UNIT_THEMES_AFTER.join()) {
  die(`unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, expected the dead one or the rebound one`);
}
const expectedTag = `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unit.seq}, so the header will draw "${expectedTag}"`);

const deadInSeed = seed.items.filter((i) => i.theme === UNIT_THEMES_BEFORE[0]).length;
if (deadInSeed !== 0) die(`theme "${UNIT_THEMES_BEFORE[0]}" holds ${deadInSeed} rows in the seed. It was measured empty and the rebinding assumes it.`);
const liveInSeed = seed.items.filter((i) => i.theme === UNIT_THEMES_AFTER[0]).length;
if (liveInSeed === 0) die(`theme "${UNIT_THEMES_AFTER[0]}" holds nothing in the seed. Rebinding to it would attach the unit to an empty theme.`);
console.log(`  themes: "${UNIT_THEMES_BEFORE[0]}" 0 rows (dead), "${UNIT_THEMES_AFTER[0]}" ${liveInSeed} rows`);

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
    + `\n  Overwriting with the authored copy.\n`,
  );
}

const byId = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;
for (const it of AUTHORED_ITEMS) {
  if (byId.has(it.id)) updatedItems++; else added++;
  byId.set(it.id, it);
}

const respellApplied: string[] = [];
for (const r of [...RESPELL_REPAIRS, ...RESPELL_ADDITIONS]) {
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
    byId.set(d.id, { ...row, drills: [...now, d.add] });
    drillsApplied.push(`${d.id} ${d.fr}: + ${d.add}`);
  }
}

const ipaApplied: string[] = [];
for (const r of IPA_REPAIRS) {
  const row = byId.get(r.id);
  if (!row) { ipaApplied.push(`${r.id}: not in the seed, Postgres only`); continue; }
  if (row.ipa !== r.from && row.ipa !== r.to) die(`ipa for ${r.id}: expected ${JSON.stringify(r.from)}, the seed says ${JSON.stringify(row.ipa)}`);
  if (row.ipa !== r.to) {
    byId.set(r.id, { ...row, ipa: r.to });
    ipaApplied.push(`${r.id}: U+203F removed`);
  }
}

/** THE MANIFEST IS VERIFIED AGAINST THE SEED TOO, after the repairs, so a row
 *  the lesson displays cannot have quietly changed underneath it. */
{
  const drift: string[] = [];
  for (const r of REUSED) {
    const row = byId.get(r.id);
    if (!row) { drift.push(`${r.id} is not in the seed`); continue; }
    if (row.fr !== r.fr) drift.push(`${r.id} fr: manifest ${JSON.stringify(r.fr)} vs seed ${JSON.stringify(row.fr)}`);
  }
  if (drift.length) die(`the manifest has drifted from the seed:\n  ${drift.slice(0, 6).join('\n  ')}`);
}

const nextUnit = { ...unit, themes: UNIT_THEMES_AFTER, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

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
const otherAfter = out.items.filter((i) => i.id !== AUTHORED_ITEMS[0].id).length;
if (otherAfter !== OTHER_ITEMS_BEFORE) die(`items other than this build's moved from ${OTHER_ITEMS_BEFORE} to ${otherAfter}`);
if (out.version !== seed.version) die('seed.version moved. It is the OTA snapshot number and a merge must never touch it.');

console.log(
  `\n  ${added} item added, ${updatedItems} updated`
  + `\n  ${respellApplied.length} respelling change(s):${respellApplied.length ? `\n    ${respellApplied.join('\n    ')}` : ' none'}`
  + `\n  ${drillsApplied.length} drill change(s):${drillsApplied.length ? `\n    ${drillsApplied.join('\n    ')}` : ' none'}`
  + `\n  ${ipaApplied.length} ipa change(s):${ipaApplied.length ? `\n    ${ipaApplied.join('\n    ')}` : ' none'}`
  + `\n  unit ${UNIT_ID}: themes ${JSON.stringify(themesNow)} → ${JSON.stringify(UNIT_THEMES_AFTER)}, lessonIds ${JSON.stringify(nextUnit.lessonIds)}`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`
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
