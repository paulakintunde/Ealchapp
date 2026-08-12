/* Merges a2.11.l1 "Les verbes en -RE" into ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-verbes-re-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-verbes-re-into-seed.ts
 *
 * RUN THE BATCH FIRST. Order has cost real work twice: apply to Postgres, merge
 * into the seed, publish only when both agree. content:publish regenerates the
 * seed FROM the database, so a merge that runs before its batch is a lesson
 * waiting to be deleted by the next publish. Publishing is BLOCKED today anyway
 * and is not part of a lesson build.
 *
 * ── WHY THIS MERGE CARRIES ROWS ───────────────────────────────────────────
 *
 * `verbes` is OUTSIDE SEED_CUT.themes: 470 published in Postgres against 119 in
 * the seed, and `verbes-essentiels` is 535 against 39. NEITHER of the two rows
 * this lesson leans on hardest is in seed.json today: `fr.a2.verbes.027` is
 * `vendre`, the verb the whole paradigm runs on, and `fr.a2.verbes.020` is
 * `répondre`, the verb the second singular triple runs on. A lesson whose
 * itemIds resolve to nothing renders empty cards on a device, so this merge
 * CARRIES every imported row. a2.01 hit the same wall with thirty, a2.09 with
 * seventeen, a2.10 with ten, a1.22 with forty. Both halves of the item count are
 * checked separately below, because "the count went up" is not evidence that the
 * right things went up.
 *
 * THE BOUNDARY ROWS ARE NOT CARRIED. `prendre` and `mettre` are named on one card
 * as display strings and released to nothing, so they are read by the manifest
 * and never written here. Carrying them would put two cards in the flashcard hub
 * for verbs no unit has taught, five units before a2.15 does.
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
import { normalizeFr } from '../../ealch-v2/src/utils/score.ts';
import {
  BARE_CELL, BLIND_NASALS, BLIND_NASALS_IMPORTED, DICTATION_IDS, DICTEE_NEAR_MISS,
  DRILL_ADDITIONS, D_PAIRS, ENDINGS, HALF_REPAIRED_ENTENDRE, NOT_THIS_FAMILY,
  NOT_THIS_FAMILY_COMPOUNDS, NOT_THIS_FAMILY_UNIT, PRONOUN_BLIND_PAIRS,
  RESPELL_REPAIRS, RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE,
  SHEET_DECISION, SINGULAR_TRIPLES, THEME, THE_SEVEN, THREE_CELLS, VERBES_RE,
  afterPronoun, toItem,
} from './data/verbes-re-corpus.ts';
import { BOUNDARY_VERBS, IMPORTED_ROWS, IMPORTED_VERBS } from './data/verbes-re-imported.ts';
import {
  BACKREFS, BOUNDARY_SECTION_ID, CELLS_ROW_IDS, CELLS_SECTION_ID, NOUS_ON,
  REFRAME, SHEET_ID, THREE_GROUPS, VERBES_RE_LESSON,
} from './data/verbes-re-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = VERBES_RE_LESSON;
const UNIT_ID = 'a2.11';
const UNIT_TITLE = 'Regular -RE Verbs';
const UNIT_SUB = 'Les verbes en -RE';
const UNIT_CANDO = 'Can conjugate regular -re verbs, including the il form that takes no ending';
const REFRAME_APPEARANCES = 10;
const AUTHORED_ITEMS: Item[] = VERBES_RE.map(toItem);
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
function hasPhrase(hay: string, needle: string): boolean {
  const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = h[i + n.length] ?? '';
    if (!isWord(before) && !isWord(after)) return true;
    i += 1;
  }
  return false;
}

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

console.log(`\n  merging a2.11.l1 into seed.json${DRY_RUN ? '  (DRY RUN)' : ''}`);
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

/** AND THE BOUNDARY ROWS ARE NOT IN `MINE`. If one ever drifts into the carry
 *  this fails, because a boundary verb released to the hub is a card for a verb
 *  no unit has taught. */
{
  const carried = BOUNDARY_VERBS.filter((b) => MINE.has(b.id)).map((b) => b.verb);
  if (carried.length) die(`boundary verb(s) in the carry set: ${carried.join(', ')}. prendre and mettre are read, never written.`);
}

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

/* ── The claims that ARE the lesson ──────────────────────────────────────── */
{
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === CELLS_SECTION_ID);
  if (!sec || sec.type !== 'tapTable') die(`${CELLS_SECTION_ID} is gone or is no longer a tapTable`);
  if (sec.rows.length !== THREE_CELLS.length) die(`${CELLS_SECTION_ID} has ${sec.rows.length} rows, expected ${THREE_CELLS.length}`);
  if (CELLS_ROW_IDS.join() !== THREE_CELLS.map((c) => c.id).join()) die('the lesson and the corpus disagree about the row order of the three cells');
  sec.rows.forEach((row, i) => {
    const want = VERBES_RE.find((w) => w.id === THREE_CELLS[i].id)!;
    if (row.say !== want.fr) die(`row ${i + 1} of ${CELLS_SECTION_ID} plays ${JSON.stringify(row.say)}, expected ${JSON.stringify(want.fr)}`);
    const expected = THREE_CELLS[i].ending === '' ? 'nothing' : THREE_CELLS[i].ending;
    if (row.cells[2] !== expected) die(`row ${i + 1} of ${CELLS_SECTION_ID} prints ${JSON.stringify(row.cells[2])} in the ending column, expected ${JSON.stringify(expected)}`);
  });
  if (BARE_CELL.length !== 1) die(`${BARE_CELL.length} of the three groups write nothing, and the whole lesson says exactly one`);
  if (ENDINGS.filter((e) => e.ending === '').length !== 1) die('the paradigm no longer has exactly one empty ending');
}
for (const triple of SINGULAR_TRIPLES) {
  const tails = triple.map((id) => afterPronoun(VERBES_RE.find((w) => w.id === id)?.respell ?? ''));
  if (new Set(tails).size !== 1) die(`the singular triple ${triple.join(' / ')} no longer sounds the same: ${tails.join(' | ')}`);
}
for (const [sing, plur] of D_PAIRS) {
  const a = VERBES_RE.find((w) => w.id === sing);
  const b = VERBES_RE.find((w) => w.id === plur);
  if (!a || !b) die(`d pair ${sing} / ${plur} does not resolve`);
  if (a.dSounds || !b.dSounds) die(`${sing} / ${plur} is no longer a singular against a plural`);
}
for (const [sing, plur] of PRONOUN_BLIND_PAIRS) {
  const a = VERBES_RE.find((w) => w.id === sing)!;
  const b = VERBES_RE.find((w) => w.id === plur)!;
  if ((b.respell ?? '').replace('ⁿd', 'ⁿ') !== (a.respell ?? '')) {
    die(`${plur} is respelled "${b.respell}" and ${sing} is "${a.respell}". A pronoun-blind pair differs by the d and by nothing else.`);
  }
}
{
  // `intro` and `overview` are learner surfaces too: the overview card and the
  // lesson cover both draw the intro. v1 shipped "third person" there because
  // this walk was sections+sheets+terms. Widened 2026-08-12 after a device pass.
  const learner = [
    ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
    LESSON.intro ?? '', ...strings(LESSON.overview ?? {}),
  ].join('\n');
  const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme', 'first person', 'second person', 'third person'];
  const jargon = JARGON.filter((j) => hasPhrase(learner, j));
  if (jargon.length) die(`grammar vocabulary reached a learner surface: ${jargon.join(', ')}`);
  for (const unit of BACKREFS) {
    if (!hasPhrase(learner, unit)) die(`${unit} is named nowhere, and the headline screen is a comparison with that unit's own verb in it`);
  }
  if (!learner.includes(THREE_GROUPS)) die(`"${THREE_GROUPS}" appears on no screen, and it is where this lesson says what it is`);
  if (!learner.includes(NOUS_ON)) die("the nous/on statement no longer appears verbatim. It is a2.01's constant and it is imported, not reworded.");
  const gone = THE_SEVEN.filter((v) => !hasPhrase(learner, v));
  if (gone.length) die(`verb(s) named by no screen: ${gone.join(', ')}`);
  const named = [...NOT_THIS_FAMILY, ...NOT_THIS_FAMILY_COMPOUNDS];
  const unnamed = named.filter((v) => !hasPhrase(learner, v));
  if (unnamed.length) die(`boundary verb(s) named by no screen: ${unnamed.join(', ')}`);
  const card = LESSON.sections.find((s) => (s as { id?: string }).id === BOUNDARY_SECTION_ID);
  if (!card) die(`${BOUNDARY_SECTION_ID} is gone, and with it the only place the boundary is named`);
  if (!strings(card).join('\n').includes(NOT_THIS_FAMILY_UNIT)) die(`${BOUNDARY_SECTION_ID} no longer says where ${NOT_THIS_FAMILY.join(', ')} are taught`);
}

/* ── The one sheet, and the reason it is not a third copy ────────────────── */
{
  if ((LESSON.sheets ?? []).length !== SHEET_DECISION.count) {
    die(`${(LESSON.sheets ?? []).length} sheets, expected ${SHEET_DECISION.count}. Two competing sheets is worse than one incomplete sheet.`);
  }
  const sheet = (LESSON.sheets ?? []).find((s) => s.id === SHEET_ID);
  if (!sheet) die(`${SHEET_ID} is gone`);
  const three = (sheet.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-three-groups');
  if (!three || three.type !== 'table') die(`${SHEET_ID} no longer holds the three-group table`);
  const ilRow = three.rows.find((r) => r[0] === 'il · elle · on');
  if (!ilRow || ilRow.slice(1).join('|') !== 'parle|finit|vend') die('the il row of the three-group table has changed');
  const sheetText = strings(sheet).join('\n');
  const unnamed = SHEET_DECISION.names.filter((u) => !hasPhrase(sheetText, u));
  if (unnamed.length) die(`${SHEET_ID} does not name ${unnamed.join(', ')}`);
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

/* ── The respelling work, in the two directions the two lists need ───────── */
for (const r of RESPELL_REPAIRS_VISIBLE) {
  if (hasPlainNasalFor(r.fr, r.to)) die(`the replacement for ${r.id} "${r.fr}" still closes a nasal with a plain n or m: ${r.to}`);
  if (!hasPlainNasalFor(r.fr, r.from)) die(`${r.id} "${r.fr}" is in the VISIBLE list and its stored value "${r.from}" is not flagged`);
}
for (const r of RESPELL_REPAIRS_INVISIBLE) {
  if (hasPlainNasalFor(r.fr, r.from)) die(`${r.id} "${r.fr}" is in the INVISIBLE list and the checker can now see "${r.from}". Move it.`);
  if (!r.to.includes('ⁿ')) die(`${r.id} is repaired to "${r.to}", which carries no superscript`);
}
if (hasPlainNasalFor(HALF_REPAIRED_ENTENDRE.fr, HALF_REPAIRED_ENTENDRE.respell)) {
  die('hasPlainNasalFor now flags the half-repaired entendre. The blind spot has closed and invariants §3 needs updating.');
}
for (const it of AUTHORED_ITEMS) {
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} "${it.fr}" closes a nasal with a plain n or m`);
}
for (const b of BLIND_NASALS) {
  const row = AUTHORED_ITEMS.find((i) => i.id === b.id);
  if (!row?.respell?.includes(b.must)) die(`${b.id} must respell with "${b.must}" (${b.why}); the shared checker cannot see it`);
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
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? '')).length;
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  if (typed <= listen * 2) die(`${typed} typed against ${listen} listenChoose; this is a written distinction and the quiz has to say so`);

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

/* ── The dictée, against the POST-MERGE item set, and what it can grade ──── */
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
        + `  Word mode hands every real word over as a pre-spelled tile, so it cannot test a spelling.`,
      );
    }
  }
  const wrongWay = DICTEE_NEAR_MISS.filter((d) => {
    const it = postById.get(d.id)!;
    return (normalizeFr(it.fr) !== normalizeFr(d.wrong)) !== d.scorable;
  });
  if (wrongWay.length) die(`the dictée's scoring claims disagree with the real normalizeFr: ${wrongWay.map((d) => d.id).join(', ')}`);
  const theOne = DICTEE_NEAR_MISS.find((d) => d.wrong === 'Il vende ici.');
  if (!theOne?.scorable) die('the dictée no longer grades il vend against il vende, and that is the error the lesson exists to stop');
  const scorable = DICTEE_NEAR_MISS.filter((d) => d.scorable).length;
  console.log(`  dictée: ${DICTATION_IDS.length} targets, all letters mode, ${scorable} graded on the distinction and ${DICTEE_NEAR_MISS.length - scorable} not`);
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
    + `\n  Overwriting with the authored copy.\n`,
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

/** THE SEVEN MUST SHOW THE REPAIRED RESPELLING IN THE SEED, not the stored one.
 *  The lesson prints the repaired value on a card; if the seed row still holds the
 *  broken one, the flashcard hub and the lesson disagree on the same word.
 *
 *  AND THE SHARED CHECKER IS NOT ENOUGH HERE. It is blind to four of the six, so
 *  the by-name list runs beside it. `vendre` is the one that matters most: the
 *  lesson prints it beside `eel vahⁿ ee-SEE`, and a card reading `VAHNDR` next to
 *  it teaches a vowel difference that is not there. */
{
  const wrong = IMPORTED_VERBS
    .map((v) => ({ v, row: byId.get(v.id)! }))
    .filter(({ row }) => row.respell && hasPlainNasalFor(row.fr, row.respell));
  if (wrong.length) die(`verb row(s) still closing a nasal with a plain n after the repairs: ${wrong.map((w) => `${w.v.verb} ${w.row.respell}`).join(', ')}`);
  const byName = BLIND_NASALS_IMPORTED.filter((b) => byId.get(b.id)?.respell !== b.must);
  if (byName.length) {
    die(
      `verb row(s) whose repaired respelling is not what this build writes: ${byName.map((b) => `${b.id} (${b.why}) is ${JSON.stringify(byId.get(b.id)?.respell)}, expected ${JSON.stringify(b.must)}`).join('; ')}\n`
      + `  The shared checker is BLIND to these, so it will not catch them. That is what the by-name list is for.`,
    );
  }
}

/** AND EVERY ONE OF THE SEVEN MUST CARRY A `flashcard` DRILL IN THE SEED, because
 *  every one is released by a tranche and served as a hub card. All seven already
 *  carry one, which is why DRILL_ADDITIONS is empty. */
{
  const short = IMPORTED_VERBS.filter((v) => !(byId.get(v.id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`verb row(s) released to the hub with no flashcard drill: ${short.map((v) => `${v.verb} (${v.id})`).join(', ')}`);
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

/** AND THE BOUNDARY ROWS ARE STILL ABSENT unless somebody else put them there.
 *  This merge must not be the reason `prendre` reaches the seed. */
{
  const before = new Set(seed.items.map((i) => i.id));
  const introduced = BOUNDARY_VERBS.filter((b) => !before.has(b.id) && out.items.some((i) => i.id === b.id));
  if (introduced.length) die(`this merge would carry boundary verb(s) into the seed: ${introduced.map((b) => b.verb).join(', ')}`);
}

/** Every row this merge does not own comes out BYTE-IDENTICAL. A count would not
 *  catch an edit, and an edit is what the publish hazard is made of. */
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
  + `\n  ${carried} row(s) CARRIED through the seed cut so the verb cards are not blank`
  + `\n  ${respellApplied.length} respelling change(s):${respellApplied.length ? `\n    ${respellApplied.join('\n    ')}` : ' none'}`
  + `\n  ${drillsApplied.length} drill change(s):${drillsApplied.length ? `\n    ${drillsApplied.join('\n    ')}` : ' none'}`
  + `\n  ${BOUNDARY_VERBS.length} boundary verb(s) named and NOT carried: ${BOUNDARY_VERBS.map((b) => b.verb).join(', ')}`
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
