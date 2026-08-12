/* Merges a2.10.l2 "Les autres verbes en -IR" into ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-verbes-ir-familles-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-verbes-ir-familles-into-seed.ts
 *
 * RUN THE BATCH FIRST.
 *
 * ── THIS ADDS A SECOND LESSON TO AN EXISTING UNIT ─────────────────────────
 *
 * a2.10 already carries a2.10.l1, and this merge must leave it exactly where it
 * is: the unit's `lessonIds` gains a2.10.l2 at the END, l1's own body is not
 * touched, and the unit's `canDo` widens to cover both. `lessonsOfUnit` sorts by
 * `Lesson.seq`, so l2's seq of 2 is what actually puts it behind l1 — the array
 * order is belt and braces and is checked anyway.
 *
 * ── NEVER `git checkout seed.json` ────────────────────────────────────────
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
  DICTATION_IDS, DICTEE_NEAR_MISS, ER_ENDING, ER_PAIR, ER_QUARTET, NUMBER_PAIRS,
  OVER_GENERALISED_FORMS, RESPELL_REPAIRS, SHEDDERS, SHED_PAIR, SHED_TRIPLE, THEME, THE_TWELVE,
  VERBES_IR_FAM, afterPronoun, toItem,
} from './data/verbes-ir-familles-corpus.ts';
import { IMPORTED_ROWS, IMPORTED_VERBS } from './data/verbes-ir-familles-imported.ts';
import {
  A201_BACKREF, A201_REFRAME, A210_BACKREF, A210_REFRAME, BOTH_RULES, ER_ROW_ORDER,
  ER_SECTION_ID, REFRAME, SHED_ROW_ORDER, SHED_SECTION_ID, VERBES_IR_FAM_LESSON,
} from './data/verbes-ir-familles-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = VERBES_IR_FAM_LESSON;
const UNIT_ID = 'a2.10';
const SIBLING_ID = 'a2.10.l1';
const UNIT_TITLE = 'Regular -IR Verbs';
const UNIT_SUB = 'Les verbes en -IR';
const UNIT_CANDO_BEFORE = 'Can conjugate regular -ir verbs and hear where the -iss- belongs';
const UNIT_CANDO_AFTER = 'Can conjugate regular -ir verbs, hear where the -iss- belongs, and tell them apart from the -ir verbs that take no -iss- at all';
const REFRAME_APPEARANCES = 10;
const AUTHORED_ITEMS: Item[] = VERBES_IR_FAM.map(toItem);
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
    if (!isWord(i === 0 ? '' : h[i - 1]) && !isWord(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

console.log(`\n  merging a2.10.l2 into seed.json${DRY_RUN ? '  (DRY RUN)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

const MUST_NOT_DISTURB = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
if (!MUST_NOT_DISTURB.includes(SIBLING_ID)) die(`${SIBLING_ID} is not in the seed. This lesson goes BEHIND it and cannot be merged without it.`);
const SIBLING_BEFORE = JSON.stringify(seed.lessons.find((l) => l.id === SIBLING_ID));
const UNITS_BEFORE = seed.units.length;
const MINE = new Set<string>([
  ...AUTHORED_IDS,
  ...IMPORTED_ROWS.map((r) => r.id),
  ...RESPELL_REPAIRS.map((r) => r.id),
]);
const UNTOUCHED_BEFORE = new Map(seed.items.filter((i) => !MINE.has(i.id)).map((i) => [i.id, JSON.stringify(i)] as const));

/* ── Everything the batch checked, checked again against the POST-MERGE seed ─ */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(formatIssues(itemIssues));
const carriedIssues = IMPORTED_ROWS.flatMap((it) => validateItem(it, it.id));
if (carriedIssues.length) die(`the carried rows do not validate:\n${formatIssues(carriedIssues)}`);
const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(formatIssues(lessonIssues));

const POST_MERGE_IDS = new Set([...seed.items.map((i) => i.id), ...AUTHORED_ITEMS.map((i) => i.id), ...IMPORTED_ROWS.map((i) => i.id)]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(formatDensity(density));

const missing = LESSON.itemIds.filter((id) => !POST_MERGE_IDS.has(id));
if (missing.length) die(`${missing.length} itemId(s) will not be in the seed: ${missing.slice(0, 6).join(', ')}`);

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected ${REFRAME_APPEARANCES}`);

/* ── The claims that ARE the lesson ──────────────────────────────────────── */
for (const [label, secId, order, pair, mustMatch] of [
  ['shedders', SHED_SECTION_ID, SHED_ROW_ORDER, SHED_PAIR, false],
  ['-er endings', ER_SECTION_ID, ER_ROW_ORDER, ER_PAIR, true],
] as const) {
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === secId);
  if (!sec || sec.type !== 'tapTable') die(`${secId} is gone or is no longer a tapTable`);
  if (sec.rows.length !== 6) die(`${secId} has ${sec.rows.length} rows, expected 6`);
  const iS = order.indexOf(pair.singular);
  const iP = order.indexOf(pair.plural);
  if (Math.abs(iS - iP) !== 1) die(`in ${secId} the ${label} pair is rows ${iS + 1} and ${iP + 1}; they must be neighbours`);
  if (!sec.rows[iS].say || !sec.rows[iP].say) die(`a contrast row of ${secId} cannot be played with one tap`);
  const a = VERBES_IR_FAM.find((w) => w.id === pair.singular)!;
  const b = VERBES_IR_FAM.find((w) => w.id === pair.plural)!;
  if (mustMatch && a.respell !== b.respell) die(`${secId}: the pair must carry ONE respelling; the -er family is a pair the ear cannot separate`);
  if (!mustMatch && a.respell === b.respell) die(`${secId}: the pair carries one respelling; a shedder's plural is audible`);
}
{
  const tails = SHED_TRIPLE.map((id) => afterPronoun(VERBES_IR_FAM.find((w) => w.id === id)?.respell ?? ''));
  if (new Set(tails).size !== 1) die(`the shedders' singular triple no longer sounds the same: ${tails.join(' | ')}`);
  const q = ER_QUARTET.map((id) => afterPronoun(VERBES_IR_FAM.find((w) => w.id === id)?.respell ?? ''));
  if (new Set(q).size !== 1) die(`the -er quartet no longer sounds the same: ${q.join(' | ')}`);
}
for (const p of NUMBER_PAIRS) {
  const a = VERBES_IR_FAM.find((w) => w.id === p.singular);
  const b = VERBES_IR_FAM.find((w) => w.id === p.plural);
  if (!a || !b) die(`number pair ${p.singular} / ${p.plural} does not resolve`);
  if ((a.respell !== b.respell) !== p.audible) die(`${p.singular} / ${p.plural} disagrees with its audible flag`);
}
{
  const learner = [...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {})].join('\n');
  if (!learner.includes(A210_REFRAME)) die(`a2.10.l1's reframe no longer appears verbatim, and the shedders are its rule`);
  if (!learner.includes(A201_REFRAME)) die(`a2.01's reframe no longer appears verbatim, and the -er family is its rule`);
  if (!learner.includes(BOTH_RULES)) die(`"${BOTH_RULES}" appears on no screen`);
  for (const ref of [A210_BACKREF, A201_BACKREF]) if (!learner.includes(ref)) die(`${ref} is named nowhere`);
  const gone = THE_TWELVE.filter((v) => !hasPhrase(learner, v));
  if (gone.length) die(`verb(s) named by no screen: ${gone.join(', ')}`);
  if (SHEDDERS.length !== 6 || ER_ENDING.length !== 5) die('the family lists have changed size and every screen states them');
}

/* ── The error form: banned where produced ───────────────────────────────── */
{
  const produced: string[] = [];
  const quiz = LESSON.sections.find((s) => s.type === 'quiz');
  if (quiz && quiz.type === 'quiz') {
    for (const q of quizQuestions(quiz)) {
      if (q.answer) produced.push(q.answer);
      if (q.target) produced.push(q.target);
      for (const a of q.accept ?? []) produced.push(a);
      for (const o of q.opts ?? []) produced.push(o);
    }
  }
  for (const s of LESSON.sections) {
    if (s.type === 'scenario') for (const t of s.turns) produced.push(t.user, ...(t.alts ?? []).map((a) => a.fr));
    if (s.type === 'groupDrill') for (const g of s.groups) { if (g.check) produced.push(...g.check.opts); produced.push(...strings(g.items ?? [])); }
    if (s.type === 'listening') for (const q of s.questions) produced.push(...q.opts);
    if (s.type === 'trapDrill') for (const d of s.drill) produced.push(...d.opts);
    if (['flashcards', 'reviewDeck', 'dictation', 'practice'].includes(s.type)) produced.push(...strings(s));
  }
  for (const d of LESSON.drills ?? []) {
    for (const p of (d as { pairs?: [string, string][] }).pairs ?? []) produced.push(p[1]);
    const o = d as { opts?: string[]; correct?: number };
    if (typeof o.correct === 'number' && o.opts) produced.push(o.opts[o.correct]);
  }
  const leaked = OVER_GENERALISED_FORMS.filter((f) => produced.some((s) => hasPhrase(s, f)));
  if (leaked.length) die(`an over-generalised form reached a production surface: ${leaked.join(', ')}`);
}

/* ── Ids, collisions, a1.03, respellings ─────────────────────────────────── */
{
  const taken = seed.items.filter((i) => AUTHORED_IDS.has(i.id));
  const differs = taken.filter((i) => i.fr !== AUTHORED_ITEMS.find((a) => a.id === i.id)!.fr);
  if (differs.length) die(`id(s) already in the seed with DIFFERENT content: ${differs.map((i) => `${i.id} "${i.fr}"`).join(', ')}`);
  if (taken.length) console.log(`  ${taken.length} authored id(s) already in the seed with matching fr: this is a re-run`);
}
{
  const replaced = new Set([...AUTHORED_IDS, ...IMPORTED_ROWS.map((r) => r.id)]);
  const post = [...seed.items.filter((i) => !replaced.has(i.id)), ...AUTHORED_ITEMS, ...IMPORTED_ROWS];
  const seen = new Map<string, string>();
  const clashes: string[] = [];
  for (const i of post) {
    if (i.kind === 'sentence') continue;
    const key = JSON.stringify([i.theme, i.fr]);
    const prev = seen.get(key);
    if (prev) clashes.push(`${i.theme} "${i.fr}": ${prev} and ${i.id}`);
    else seen.set(key, i.id);
  }
  const themesIcarry = new Set(IMPORTED_ROWS.map((r) => r.theme));
  const mine = clashes.filter((c) => themesIcarry.has(c.split(' ')[0]));
  if (mine.length) die(`fr collision inside a theme this merge writes into:\n  ${mine.join('\n  ')}`);
  console.log(`  no fr collision in the themes this merge carries (${clashes.length} pre-existing elsewhere)`);
}
{
  const joiners = endingPopulation([...AUTHORED_ITEMS, ...IMPORTED_ROWS]);
  if (joiners.length !== 0) die(`${joiners.length} row(s) join a1.03's ending population: ${joiners.map((j) => j.fr).join(', ')}`);
  console.log('  a1.03 ending population: 0 joiners, authored or carried');
}
for (const r of RESPELL_REPAIRS) {
  if (hasPlainNasalFor(r.fr, r.to)) die(`the replacement for ${r.id} is still flagged: ${r.to}`);
  if (!hasPlainNasalFor(r.fr, r.from)) die(`${r.id} "${r.fr}": "${r.from}" was not a violation`);
}
for (const it of AUTHORED_ITEMS) {
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} "${it.fr}" closes a nasal with a plain n or m`);
}

/* ── Quiz spread, both surfaces ──────────────────────────────────────────── */
{
  const quiz = LESSON.sections.find((s) => s.type === 'quiz');
  if (!quiz || quiz.type !== 'quiz') die('no quiz section');
  if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('more than one quiz section');
  const qs = quizQuestions(quiz);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} are mcq, over the half limit`);
  if (qs.filter((q) => !q.why).length) die('a quiz question has no why');
  const closed = qs.filter((q): q is (typeof qs)[number] & { correct: number } => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) if ((c / closed.length) * 100 > 40) die(`quiz slot ${s} holds ${Math.round((c / closed.length) * 100)}%`);
  const inMission: { section: string; correct: number }[] = [];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct });
    if (s.type === 'trapDrill') for (const d of s.drill) inMission.push({ section: sid, correct: d.correct });
  }
  const mslots = new Map<number, number>();
  for (const q of inMission) mslots.set(q.correct, (mslots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of mslots) if ((c / inMission.length) * 100 > 40) die(`in-mission slot ${s} holds ${Math.round((c / inMission.length) * 100)}%`);
  let prev: { section: string; correct: number } | null = null;
  for (const q of inMission) {
    if (prev && prev.section === q.section && prev.correct === q.correct) die(`${q.section}: consecutive in-mission questions share slot ${q.correct}`);
    prev = q;
  }
  console.log(`  answer spread: quiz ${[...slots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')} | in-mission ${[...mslots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
}

/* ── The dictée against the POST-MERGE item set ──────────────────────────── */
{
  const postById = new Map<string, Item>([
    ...seed.items.map((i) => [i.id, i] as const),
    ...IMPORTED_ROWS.map((i) => [i.id, i] as const),
    ...AUTHORED_ITEMS.map((i) => [i.id, i] as const),
  ]);
  for (const id of DICTATION_IDS) {
    const it = postById.get(id);
    if (!it) die(`the dictée names ${id}, which will not be in the seed`);
    if (!(it.drills ?? []).includes('dictation')) die(`${id} carries no dictation drill`);
    if (dicteeMode(it.fr) !== 'letters') die(`dictée target ${id} "${it.fr}" is in word mode`);
  }
  const wrongWay = DICTEE_NEAR_MISS.filter((d) => (normalizeFr(postById.get(d.id)!.fr) !== normalizeFr(d.wrong)) !== d.scorable);
  if (wrongWay.length) die(`the dictée's scoring claims disagree with normalizeFr: ${wrongWay.map((d) => d.id).join(', ')}`);
  const scorable = DICTEE_NEAR_MISS.filter((d) => d.scorable).length;
  console.log(`  dictée: ${DICTATION_IDS.length} targets, all letters mode, ${scorable} graded and ${DICTEE_NEAR_MISS.length - scorable} not`);
}

/* ── The unit ────────────────────────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID) as (Unit & { lessonIds?: string[]; seq?: string | number }) | undefined;
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);
if (unit.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: ${JSON.stringify(unit.title)}`);
if (unit.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: ${JSON.stringify(unit.sub)}`);
if (unit.canDo !== UNIT_CANDO_BEFORE && unit.canDo !== UNIT_CANDO_AFTER) {
  die(`unit ${UNIT_ID} canDo is ${JSON.stringify(unit.canDo)}; expected l1's or this build's widened one`);
}
if (!(unit.lessonIds ?? []).includes(SIBLING_ID)) die(`unit ${UNIT_ID} has lost ${SIBLING_ID}`);
const expectedEyebrow = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (!LESSON.tag.startsWith(expectedEyebrow)) die(`the lesson tag ${JSON.stringify(LESSON.tag)} does not start with the computed eyebrow ${JSON.stringify(expectedEyebrow)}`);
if (LESSON.tag === expectedEyebrow) die(`the tag is identical to a2.10.l1's; lesson.tsx uses the raw tag for the in-lesson header`);
if (LESSON.seq !== 2) die(`lessonsOfUnit sorts by seq and this lesson's is ${LESSON.seq}`);

/* ── Write ───────────────────────────────────────────────────────────────── */

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing && existing.version > LESSON.version) die(`the seed carries v${existing.version} and this source is v${LESSON.version}`);
if (existing) console.warn(`\n! seed.json already carries ${LESSON.id}; overwriting with the authored copy.\n`);

const byId = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;
let carried = 0;
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
  if (now !== r.from && now !== r.to) die(`respelling for ${r.id}: expected ${JSON.stringify(r.from)}, the seed says ${JSON.stringify(now)}`);
  if (now !== r.to) { byId.set(r.id, { ...row, respell: r.to }); respellApplied.push(`${r.id} ${r.fr}: ${JSON.stringify(r.from)} → ${JSON.stringify(r.to)}`); }
}

{
  const wrong = IMPORTED_VERBS.map((v) => ({ v, row: byId.get(v.id)! })).filter(({ row }) => row.respell && hasPlainNasalFor(row.fr, row.respell));
  if (wrong.length) die(`verb row(s) still closing a nasal with a plain n: ${wrong.map((w) => `${w.v.verb} ${w.row.respell}`).join(', ')}`);
  const short = IMPORTED_VERBS.filter((v) => !(byId.get(v.id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`verb row(s) released to the hub with no flashcard drill: ${short.map((v) => v.verb).join(', ')}`);
}

/** l2 goes at the END of lessonIds, and l1 stays exactly where it is. */
const nextUnit = { ...unit, canDo: UNIT_CANDO_AFTER, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };
if (nextUnit.lessonIds[0] !== SIBLING_ID) die(`${SIBLING_ID} is no longer first in lessonIds, and den.tsx opens lessonIds[0]`);

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
/** And a2.10.l1 comes out BYTE-IDENTICAL. It is the sibling in the same unit and
 *  the one thing this merge is most likely to damage. */
if (JSON.stringify(out.lessons.find((l) => l.id === SIBLING_ID)) !== SIBLING_BEFORE) die(`this merge would EDIT ${SIBLING_ID}, which it does not own`);
if (out.units.length !== UNITS_BEFORE) die(`unit count moved from ${UNITS_BEFORE} to ${out.units.length}`);
if (out.version !== seed.version) die('seed.version moved; it is the OTA snapshot number');
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
  console.log(`  ${SIBLING_ID}: byte-identical`);
}

console.log(
  `\n  ${added} item(s) authored and added, ${updatedItems} updated`
  + `\n  ${carried} row(s) CARRIED through the seed cut`
  + `\n  ${respellApplied.length} respelling change(s):${respellApplied.length ? `\n    ${respellApplied.join('\n    ')}` : ' none'}`
  + `\n  unit ${UNIT_ID}: lessonIds ${JSON.stringify(nextUnit.lessonIds)}, canDo widened`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`
  + `\n  items ${seed.items.length} → ${out.items.length}`
  + `\n  ${MUST_NOT_DISTURB.length} other lesson(s) untouched, by name`,
);

if (DRY_RUN) { console.log('\n  DRY RUN: seed.json not written.\n'); process.exit(0); }

writeFileSync(SEED, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
console.log(`\n  seed.json written. seed.version left at ${out.version}.\n  NEXT: cd ../ealch-v2 && node --test "src/**/*.test.ts"\n`);
