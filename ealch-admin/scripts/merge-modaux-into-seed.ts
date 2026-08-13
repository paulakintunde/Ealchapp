/* Merges a2.13.l1 "Irréguliers 3 : vouloir, pouvoir, devoir" into
 * ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-modaux-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-modaux-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is canonical and the seed is a CUT of it; the
 * order is always apply, then merge, then publish only when both agree.
 *
 * ── WHY THE CARRY EXISTS ──────────────────────────────────────────────────
 *
 * The seed holds roughly a quarter of the database. This lesson imports out of
 * ELEVEN themes and several of them — `jardinage`, `argent-quotidien`,
 * `rp-achats`, `amis` — sit outside SEED_CUT.themes entirely. A lesson whose
 * `itemIds` resolve to nothing renders empty cards on a device, so the imported
 * rows are carried through the cut rather than assumed present.
 *
 * ── THE THREE TRANSFORMS, AND WHY THEY LIVE HERE TOO ──────────────────────
 *
 * The manifest is a read of Postgres taken BEFORE the batch ran. The batch then
 * changes three kinds of thing about rows it does not own:
 *
 *   5 respellings repaired      a plain n where a nasal vowel belongs
 *   2 respellings ADDED         both halves of the register pair held null
 *   1 drill added               fr.a1.verbes-du-quotidien.035 gains flashcard
 *
 * Carrying the manifest verbatim would put the pre-batch value in the seed while
 * Postgres held the post-batch one. All three are applied here, from the same
 * constants, in the same order, and the result is checked field by field.
 *
 * ── THE DRILL-ORDER TRAP, INHERITED FROM a2.12 ────────────────────────────
 *
 * `drills` is a Postgres ENUM array and `array_agg(distinct e order by e)`
 * orders by DECLARATION order, not alphabetically. a2.12's merge sorted the same
 * values as STRINGS and shipped `flashcard, review, voiceflash` into the seed
 * while the database held `flashcard, voiceflash, review`. Same set, same
 * meaning, and a divergence on rows the build owned, invisible to 3,195 tests
 * because nothing compares drill ORDER. It was found by `content:publish`
 * regenerating the seed. `drillOrder()` below sorts by `DRILL_KINDS`, which
 * `enum-parity.test.ts` already pins to the enum.
 */
import './env';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  DRILL_KINDS, formatIssues, quizQuestions, validateItem, validateLesson,
  type Item, type Lesson, type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import {
  AUTHORED_IDS as AUTHORED_ID_LIST, BLIND_NASALS, CITED_UNITS, DICTATION_IDS,
  DRILL_ADDITIONS, ENDINGS, FORBIDDEN_CONDITIONAL_SHAPE, FRAME_ROWS, FRAME_VERB,
  IL_FAUT, MODAL_ORDER, MODAUX, PARADIGM, PARADIGM_IDS, POLITE_FORMS,
  POUVOIR_SENSES, READ_NOT_IMPORTED, RESERVED_FOR_NEIGHBOURS, RESPELL_ADDITIONS,
  RESPELL_REPAIRS_SENTENCES, RESPELL_REPAIRS_VISIBLE, SAVOIR_SHAPE,
  SINGULAR_SPELLINGS, SINGULAR_TRIPLES, STEMS, UNSEEN_VERB, toItem,
  MISSION_TITLE_MAX, GROUPDRILL_LG_DROPS, GROUPDRILL_LG_RENDERS,
  EXPECTED_GROUPDRILLS, EXPECTED_GROUPDRILL_ITEMS,
} from './data/modaux-corpus.ts';
import {
  IMPORTED_BY_ID, INFINITIVES, READ_ONLY_ROWS, SOURCE_THEMES, infinitiveId,
} from './data/modaux-imported.ts';
import {
  BOUNDARY_SECTION_ID, GRID_SECTION_ID, MODAUX_ACTS, MODAUX_ITEM_IDS,
  MODAUX_LESSON, MODAUX_SPEAK_IDS, REFRAME, REGISTER_ROW_ORDER,
  REGISTER_SECTION_ID, SENSES_SECTION_ID, SHEET_ID, UNSEEN_SECTION_ID,
} from './data/modaux-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = MODAUX_LESSON;
const UNIT_ID = 'a2.13';
const UNIT_TITLE = 'Irregular Verbs 3: Vouloir, Pouvoir, Devoir';
const UNIT_SUB = 'Irréguliers 3 : vouloir, pouvoir, devoir';
const UNIT_CANDO = 'Can say what they want, can and must do with a modal plus an infinitive';
const REFRAME_APPEARANCES = 23;
const EXPECTED_SECTIONS = 32;
const EXPECTED_ACTS = 7;
const EXPECTED_QUESTIONS = 45;
const OWNS_ACT_ID = 'act3';
const PARADIGM_ACT_ID = 'act2';

const AUTHORED_ITEMS: Item[] = MODAUX.map(toItem);
const AUTHORED_IDS = new Set(AUTHORED_ID_LIST);
const RESPELL_REPAIRS = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_SENTENCES];

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

const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment']);
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}

/** Accent-aware. `\b` is ASCII-only in JavaScript and returns zero on a trailing
 *  accent, which looks exactly like an absence. */
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

/* ─── THE CARRIED ROWS, WITH THE BATCH'S OWN TRANSFORMS APPLIED ──────────── */

const REPAIR_BY_ID = new Map(RESPELL_REPAIRS.map((r) => [r.id, r] as const));
const ADDITION_BY_ID = new Map(RESPELL_ADDITIONS.map((a) => [a.id, a] as const));
const DRILL_BY_ID = new Map(DRILL_ADDITIONS.map((d) => [d.id, d] as const));

/** Order a drill array the way POSTGRES does: `DRILL_KINDS` order, which is the
 *  enum's declaration order, NOT alphabetical. See the header. */
const drillOrder = (ds: Item['drills']): Item['drills'] =>
  [...(ds ?? [])].sort((x, y) => DRILL_KINDS.indexOf(x) - DRILL_KINDS.indexOf(y)) as Item['drills'];

const MANIFEST_ROWS = [...IMPORTED_BY_ID.values()];

const CARRIED: Item[] = MANIFEST_ROWS.map((row) => {
  const fix = REPAIR_BY_ID.get(row.id);
  const add = ADDITION_BY_ID.get(row.id);
  const drill = DRILL_BY_ID.get(row.id);
  if (!fix && !add && !drill) return row;

  /* A repair is PARTIAL: one token inside a longer respelling. An addition is
     total, and only onto a null. Both are guarded by what the manifest recorded,
     so a manifest regenerated after somebody else edited the row fails here
     rather than overwriting their work. */
  let respell = row.respell;
  if (fix) {
    if (!String(respell ?? '').includes(fix.from)) {
      die(`${row.id} is recorded as ${JSON.stringify(respell)} and the repair expects to find ${JSON.stringify(fix.from)} in it. Regenerate the manifest.`);
    }
    respell = String(respell).split(fix.from).join(fix.to);
  }
  if (add) {
    if (respell != null) die(`${row.id} is recorded with a respelling (${JSON.stringify(respell)}) and this build would ADD one. Re-decide.`);
    respell = add.to;
  }
  const drills = drill && !(row.drills ?? []).includes(drill.add as Item['drills'][number])
    ? drillOrder([...(row.drills ?? []), drill.add as Item['drills'][number]])
    : row.drills;
  return { ...row, respell, drills };
});

/** Every transform landed on the row it names, and on no other. */
{
  const byId = new Map(CARRIED.map((r) => [r.id, r] as const));
  for (const r of RESPELL_REPAIRS) {
    const now = String(byId.get(r.id)?.respell ?? '');
    if (!now.includes(r.to)) die(`the carry did not apply the repair to ${r.id}: ${JSON.stringify(now)}`);
    if (r.from !== r.to && now.includes(r.from)) die(`the carry left the unrepaired value in ${r.id}: ${JSON.stringify(now)}`);
  }
  for (const a of RESPELL_ADDITIONS) {
    if (byId.get(a.id)?.respell !== a.to) die(`the carry did not add the respelling to ${a.id}`);
  }
  for (const d of DRILL_ADDITIONS) {
    if (!(byId.get(d.id)?.drills ?? []).includes(d.add as Item['drills'][number])) die(`the carry did not add the ${d.add} drill to ${d.id}`);
  }
  const touched = new Set([...REPAIR_BY_ID.keys(), ...ADDITION_BY_ID.keys(), ...DRILL_BY_ID.keys()]);
  const untouched = CARRIED.filter((r) => !touched.has(r.id));
  const changed = untouched.filter((r) => JSON.stringify(r) !== JSON.stringify(MANIFEST_ROWS.find((x) => x.id === r.id)));
  if (changed.length) die(`the carry changed ${changed.length} row(s) it does not own: ${changed.map((r) => r.id).join(', ')}`);
  console.log(`\n  carry: ${CARRIED.length} rows, ${RESPELL_REPAIRS.length} repaired, ${RESPELL_ADDITIONS.length} given a respelling they never had, ${DRILL_ADDITIONS.length} given a drill, ${untouched.length} byte-identical to the manifest`);
}

/** AND THE REPAIRED ROWS COME OUT CLEAN. The nasal checker is run on the carry
 *  rather than on the manifest, because the carry is what reaches a screen. */
{
  const flagged = CARRIED.filter((r) => r.respell && hasPlainNasalFor(r.fr, r.respell));
  if (flagged.length) {
    die(`${flagged.length} carried row(s) are flagged by the nasal checker after the carry:\n  ${flagged.map((r) => `${r.id}  ${r.respell}`).join('\n  ')}`);
  }
}

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

console.log(`  merging ${LESSON.id} into seed.json${DRY_RUN ? '  (DRY RUN)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

/* ── The lessons this merge MUST NOT DISTURB, BY NAME ─────────────────────
 *
 * Named rather than counted. A count alone lets a one-for-one swap through, and
 * that is exactly the shape of the accident this project has already had: the
 * seed and Postgres drift, somebody's uncommitted lesson is replaced by another,
 * and the total never moves.                                                  */
const MUST_NOT_DISTURB = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const UNITS_BEFORE = seed.units.length;
const MINE = new Set<string>([...AUTHORED_IDS, ...CARRIED.map((r) => r.id)]);
const UNTOUCHED_BEFORE = new Map(
  seed.items.filter((i) => !MINE.has(i.id)).map((i) => [i.id, JSON.stringify(i)] as const),
);

/** THE READ-ONLY ROWS AND THE UNSEEN VERB ARE NOT IN `MINE`.
 *
 *  The unseen row matters more than the refused ones. `arroser` is read from
 *  Postgres so the mission can print a checked respelling, and if it ever drifts
 *  into the carry it becomes a card, and the moment it is a card the lesson has
 *  taught it and the generalisation mission proves nothing. */
{
  const carried = READ_ONLY_ROWS.filter((r) => MINE.has(r.id)).map((r) => `${r.fr} (${r.id})`);
  if (carried.length) die(`read-only row(s) in the carry set: ${carried.join(', ')}. They are read, never written.`);
  if (MINE.has(UNSEEN_VERB.sourceId)) {
    die(`the unseen verb ${UNSEEN_VERB.sourceId} is in the carry set. It must reach no card: the whole claim of ${UNSEEN_SECTION_ID} is that the learner was never taught it.`);
  }
}

/* ── Everything the batch checked, checked again against the POST-MERGE seed ─ */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(formatIssues(itemIssues));
const carriedIssues = CARRIED.flatMap((it) => validateItem(it, it.id));
if (carriedIssues.length) die(`the rows carried through the cut do not validate:\n${formatIssues(carriedIssues)}`);

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(formatIssues(lessonIssues));

const POST_MERGE_IDS = new Set([
  ...seed.items.map((i) => i.id),
  ...AUTHORED_ITEMS.map((i) => i.id),
  ...CARRIED.map((i) => i.id),
]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(formatDensity(density));

const missing = LESSON.itemIds.filter((id) => !POST_MERGE_IDS.has(id));
if (missing.length) {
  die(
    `${missing.length} itemId(s) will NOT be in the seed after this merge: ${missing.slice(0, 6).join(', ')}\n`
    + `  A lesson whose itemIds resolve to nothing renders empty cards on a device. This lesson imports out of\n`
    + `  ${SOURCE_THEMES.length} themes and several are outside SEED_CUT.themes, so the carry is not optional.`,
  );
}

/* ── The claims that ARE the lesson ──────────────────────────────────────── */

if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz) die('the lesson has no quiz');
const qs = quizQuestions(quiz);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} quiz questions, expected ${EXPECTED_QUESTIONS}`);
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('more than one quiz; lessonPager renders the first and drops the rest');

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
if (LESSON.reframe !== REFRAME) die('the lesson reframe field disagrees with the terms file');

/* THE STEM RULE, DERIVED. The merge re-derives rather than trusting the batch,
   because the two run at different times and against different sources. */
for (const m of MODAL_ORDER) {
  const s = STEMS[m];
  if (s.singular + s.nous.slice(-1) !== s.ils) die(`the stem recipe fails on ${m}`);
  if (!PARADIGM[5].forms[m].startsWith(s.ils)) die(`${PARADIGM[5].forms[m]} does not begin with ${s.ils}`);
}

/* THE SINGULAR ARITHMETIC. */
for (const t of SINGULAR_TRIPLES) {
  if (new Set(t.forms).size !== SINGULAR_SPELLINGS) die(`${t.modal} has ${new Set(t.forms).size} distinct singular spellings, the lesson says ${SINGULAR_SPELLINGS}`);
  if (t.forms[0] !== t.forms[1] || t.forms[2] === t.forms[0]) die(`${t.modal}: je and tu must be identical and il must differ`);
}
if (/three spellings/i.test(prose(LESSON).join('  '))) die('a surface says "three spellings"; two of the three singular cells are spelled identically');

/* ── THE THREE LAYOUT CLAIMS, BY SECTION ID ──────────────────────────────── */

const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);

const grid = byId(GRID_SECTION_ID) as { examples?: { fr: string }[] } | undefined;
if (!grid) die(`${GRID_SECTION_ID} is missing`);
if ((grid.examples ?? []).length !== PARADIGM.length) die(`${GRID_SECTION_ID} has ${(grid.examples ?? []).length} lines, expected ${PARADIGM.length}`);
(grid.examples ?? []).forEach((ex, i) => {
  for (const m of MODAL_ORDER) {
    if (!hasPhrase(ex.fr, PARADIGM[i].forms[m])) die(`${GRID_SECTION_ID} line ${i} is missing the ${m} form ${PARADIGM[i].forms[m]}`);
  }
});

const reg = byId(REGISTER_SECTION_ID) as { examples?: { fr: string }[] } | undefined;
if (!reg) die(`${REGISTER_SECTION_ID} is missing`);
if ((reg.examples ?? []).length !== REGISTER_ROW_ORDER.length) die(`${REGISTER_SECTION_ID} has ${(reg.examples ?? []).length} lines, expected ${REGISTER_ROW_ORDER.length}`);
REGISTER_ROW_ORDER.forEach((id, i) => {
  const want = MODAUX.find((r) => r.id === id)?.fr ?? IMPORTED_BY_ID.get(id)?.fr;
  if (!want) die(`${id} is named in the register order and is neither authored nor imported`);
  if ((reg.examples ?? [])[i].fr !== want) die(`${REGISTER_SECTION_ID} line ${i} is not ${JSON.stringify(want)}`);
});

const senses = byId(SENSES_SECTION_ID);
if (!senses) die(`${SENSES_SECTION_ID} is missing`);
for (const s of POUVOIR_SENSES) if (!strings(senses).includes(s.id)) die(`${SENSES_SECTION_ID} does not draw ${s.id} (${s.key})`);

/* ── THE MISSION THE LESSON EXISTS FOR ───────────────────────────────────── */

const unseenSection = byId(UNSEEN_SECTION_ID);
if (!unseenSection) die(`${UNSEEN_SECTION_ID} is missing. That mission is the reason this lesson exists.`);
if (!strings(unseenSection).some((s) => hasPhrase(s, UNSEEN_VERB.fr))) die(`${UNSEEN_SECTION_ID} does not name ${UNSEEN_VERB.fr}`);
if (LESSON.itemIds.includes(UNSEEN_VERB.sourceId)) die(`${UNSEEN_VERB.sourceId} is in itemIds; the unseen verb must reach no card`);
if ((LESSON.deckTranche ?? []).flat().includes(UNSEEN_VERB.sourceId)) die(`${UNSEEN_VERB.sourceId} is released by a deck tranche`);

/* ── EVERY SECOND VERB IS IMPORTED ───────────────────────────────────────── */
{
  const authored: string[] = [];
  for (const r of MODAUX) {
    if (!r.infinitive || r.infinitive === UNSEEN_VERB.fr) continue;
    try { infinitiveId(r.infinitive); } catch { authored.push(`${r.id} uses "${r.infinitive}"`); }
  }
  if (authored.length) die(`row(s) use a second verb this build did not import:\n  ${authored.join('\n  ')}`);
  if (INFINITIVES.length !== 10) die(`${INFINITIVES.length} imported infinitives, expected 10`);
  const frameVerbs = new Set(FRAME_ROWS.map((r) => r.infinitive));
  if (frameVerbs.size !== 1 || !frameVerbs.has(FRAME_VERB)) die(`the grid uses ${[...frameVerbs].join(', ')} rather than the single frame ${FRAME_VERB}`);
}

/* ── WHAT THE NEIGHBOURS OWN ─────────────────────────────────────────────── */
{
  const produced = LESSON.sections
    .filter((s) => (s as { id?: string }).id !== BOUNDARY_SECTION_ID)
    .flatMap((s) => prose(s))
    .concat(prose(LESSON.sheets), prose(LESSON.terms), [LESSON.intro ?? ''], prose(LESSON.overview))
    .join('  ');
  if (SAVOIR_SHAPE.test(produced)) {
    die(`a form of savoir or connaître is on a production surface. ${RESERVED_FOR_NEIGHBOURS[0].unit} owns that split outright.`);
  }
  if (hasPhrase(produced, 'nager')) die(`"nager" is on a production surface; je sais nager is ${RESERVED_FOR_NEIGHBOURS[0].unit}'s headline contrast`);
  if (FORBIDDEN_CONDITIONAL_SHAPE.test(strings(LESSON).join('  '))) {
    die(`a form of the polite family beyond ${POLITE_FORMS.join(' and ')} appears. Those two ship as fixed forms and nothing else does.`);
  }
  const politeRows = MODAUX.filter((r) => POLITE_FORMS.some((f) => hasPhrase(r.fr, f)));
  if (politeRows.length !== POLITE_FORMS.length) die(`${politeRows.length} polite rows, expected ${POLITE_FORMS.length}`);
  const learner = [...prose(LESSON.sections), ...prose(LESSON.sheets), ...prose(LESSON.terms), LESSON.intro ?? ''].join('  ');
  const uncited = CITED_UNITS.filter((u) => !hasPhrase(learner, u));
  if (uncited.length) die(`cited units findable nowhere: ${uncited.join(', ')} (check for a possessive: "'" is a word character)`);
  if (learner.includes('—')) die('an em dash reached a learner surface');
  if (strings(LESSON).some((s) => s.includes('‿'))) die('U+203F UNDERTIE reached the lesson');
}

/* ── il faut: THE DECISION HOLDS ─────────────────────────────────────────── */
{
  const present = hasPhrase(strings(LESSON).join('  '), 'il faut');
  if (present !== IL_FAUT.included) die(`the corpus records il faut as ${IL_FAUT.included ? 'included' : 'excluded'} and the lesson disagrees`);
  if (IL_FAUT.included && /(^|[^a-zà-ÿ])(fallait|faudra|faudrait|falloir)(?![a-zà-ÿ])/i.test(strings(LESSON).join('  '))) {
    die('a second form of the impersonal appears; it ships as one shape for recognition');
  }
}

/* ── THE NASAL CHECKER, ON THE AUTHORED ROWS ─────────────────────────────── */
{
  let visible = 0;
  const blind: string[] = [];
  for (const r of MODAUX) {
    if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} ships a flagged respelling: ${r.respell}`);
    if (!(r.respell ?? '').includes('ⁿ')) continue;
    if (hasPlainNasalFor(r.fr, (r.respell ?? '').replace(/ⁿ/g, 'n'))) visible++; else blind.push(r.id);
  }
  if (blind.length !== BLIND_NASALS.length) die(`${blind.length} blind superscript(s), corpus declares ${BLIND_NASALS.length}: ${blind.join(', ')}`);
  console.log(`  nasals: ${visible} superscripts, all seen by the checker, ${blind.length} blind`);
}

/* ── THE DICTÉE, THROUGH THE REAL dicteeMode ─────────────────────────────── */
{
  const wordMode = DICTATION_IDS.filter((id) => dicteeMode(MODAUX.find((r) => r.id === id)!.fr) !== 'letters');
  if (wordMode.length) die(`dictée target(s) in WORD mode, where every word arrives pre-spelled: ${wordMode.join(', ')}`);
  const longest = Math.max(...DICTATION_IDS.map((id) => MODAUX.find((r) => r.id === id)!.fr.replace(/[^\p{L}]/gu, '').length));
  if (longest > 16) die(`the longest dictée target is ${longest} letters and the limit is 16`);
  console.log(`  dictée: ${DICTATION_IDS.length} targets, all LETTERS mode, longest ${longest} of 16`);
}

/* ── a1.03 DOES NOT MOVE ─────────────────────────────────────────────────── */
{
  const joiners = endingPopulation([...AUTHORED_ITEMS, ...CARRIED]);
  if (joiners.length) die(`${joiners.length} row(s) join a1.03's ending population: ${joiners.map((j) => JSON.stringify(j)).join(', ')}`);
}

/* ── THE OWNS ACT IS THE HEAVIEST ────────────────────────────────────────── */
{
  const owns = MODAUX_ACTS.find((a) => a.id === OWNS_ACT_ID);
  const para = MODAUX_ACTS.find((a) => a.id === PARADIGM_ACT_ID);
  if (!owns || !para) die(`${OWNS_ACT_ID} or ${PARADIGM_ACT_ID} is gone`);
  if (owns.sections.length <= para.sections.length) {
    die(
      `the Owns act holds ${owns.sections.length} missions and the grid act holds ${para.sections.length}.\n`
      + `  Doctrine §B.5: if the act structure gives the grid more missions than the Owns, the wrong lesson was built.`,
    );
  }
  const sizes = MODAUX_ACTS.map((a) => a.sections.length);
  if (Math.max(...sizes) !== owns.sections.length || sizes.filter((n) => n === Math.max(...sizes)).length !== 1) {
    die(`the Owns act is not the heaviest alone: ${sizes.join(' ')}`);
  }
  const claimed = MODAUX_ACTS.flatMap((a) => a.sections);
  if (new Set(claimed).size !== claimed.length) die('a section is claimed by two acts');
  if (claimed.length !== LESSON.sections.length) die('a section belongs to no act');
}

/* ── The id collision check, against the seed this time ──────────────────── */
{
  const taken = seed.items.filter((i) => AUTHORED_IDS.has(i.id) && !MODAUX.some((r) => r.id === i.id && r.fr === i.fr));
  if (taken.length) {
    die(`${taken.length} of this build's ids are already held in the seed by DIFFERENT rows:\n  ${taken.map((i) => `${i.id} ${JSON.stringify(i.fr)}`).join('\n  ')}`);
  }
}

/* ── No two non-sentence rows in one theme may share an `fr` ─────────────── */
{
  const replaced = new Set([...AUTHORED_IDS, ...CARRIED.map((r) => r.id)]);
  const post = [...seed.items.filter((i) => !replaced.has(i.id)), ...AUTHORED_ITEMS, ...CARRIED];
  const seen = new Map<string, string[]>();
  for (const i of post) {
    if (i.kind === 'sentence') continue;
    const k = `${i.theme}::${i.fr.toLowerCase()}`;
    seen.set(k, [...(seen.get(k) ?? []), i.id]);
  }
  const clashes = [...seen.entries()].filter(([, ids]) => ids.length > 1 && ids.some((id) => replaced.has(id)));
  if (clashes.length) {
    die(`flashhub-coverage: two rows in one theme would share an fr, so one card is served twice:\n  ${clashes.map(([k, ids]) => `${k} -> ${ids.join(', ')}`).join('\n  ')}`);
  }
}

/* ── The one sheet ───────────────────────────────────────────────────────── */
{
  const DRAWABLE = new Set(['teach', 'letterGrid', 'table']);
  if ((LESSON.sheets ?? []).length !== 1) die(`${(LESSON.sheets ?? []).length} sheets, expected 1`);
  const sh = (LESSON.sheets ?? [])[0];
  if (sh.id !== SHEET_ID) die(`sheet id ${sh.id}, expected ${SHEET_ID}`);
  for (const s of sh.sections ?? []) {
    const t = (s as { type?: string }).type ?? '';
    if (!DRAWABLE.has(t)) die(`the sheet holds a "${t}" section; ReferenceSheet.tsx draws teach, letterGrid and table and nothing else`);
  }
  const declared = new Set((LESSON.sheets ?? []).map((s) => s.id));
  for (const s of LESSON.sections) {
    const ref = (s as { sheetId?: string }).sheetId;
    if (ref && !declared.has(ref)) die(`${(s as { id?: string }).id} names sheet ${ref}, which this lesson does not declare`);
  }
}

/* ── THE TWO BUDGETS MEASURED ON GLASS ───────────────────────────────────
 *
 * Added after the a2.13 DEVICE PASS, which found both of these in v1 with every
 * host gate green. They are re-checked here rather than trusted to the batch,
 * because the merge is what decides what a learner actually receives.        */
{
  let sections = 0; let items = 0;
  const ghosts: string[] = []; const noNote: string[] = [];
  for (const s of LESSON.sections) {
    if (s.type !== 'groupDrill') continue;
    const id = (s as { id?: string }).id ?? '(anon)';
    const size = (s as { size?: string }).size ?? '';
    sections++;
    for (const g of (s as { groups?: { items?: Record<string, unknown>[] }[] }).groups ?? []) {
      for (const it of g.items ?? []) {
        items++;
        if (size === 'xl') continue;
        const bad = GROUPDRILL_LG_DROPS.filter((k) => it[k] !== undefined && it[k] !== '');
        if (bad.length) ghosts.push(`${id} "${String(it.fr).slice(0, 28)}" carries ${bad.join(', ')}`);
        if (!it.note) noNote.push(`${id} "${String(it.fr).slice(0, 28)}"`);
      }
    }
  }
  if (ghosts.length) {
    die(`${ghosts.length} groupDrill item(s) at lg carry a field the renderer does not draw:\n  ${ghosts.slice(0, 6).join('\n  ')}\n`
      + `  MissionRich.tsx:439 draws ${GROUPDRILL_LG_RENDERS.join(', ')} and nothing else at this size.`);
  }
  if (noNote.length) {
    die(`${noNote.length} groupDrill item(s) at lg render as a bare French string:\n  ${noNote.slice(0, 6).join('\n  ')}`);
  }
  if (sections !== EXPECTED_GROUPDRILLS || items !== EXPECTED_GROUPDRILL_ITEMS) {
    die(`${items} groupDrill items across ${sections} sections, expected ${EXPECTED_GROUPDRILL_ITEMS} across ${EXPECTED_GROUPDRILLS}`);
  }
  const over = LESSON.sections
    .map((x) => ({ id: (x as { id?: string }).id, title: (x as { title?: string }).title ?? '' }))
    .filter((x) => x.title.length > MISSION_TITLE_MAX);
  if (over.length) {
    die(`${over.length} mission title(s) exceed the ${MISSION_TITLE_MAX}-char hub budget and will ellipsise:\n`
      + over.map((x) => `  ${String(x.title.length).padStart(2)}  ${x.id}  ${x.title}`).join('\n'));
  }
  console.log(`  cards: ${items} groupDrill items, all carrying a note; longest title ${Math.max(...LESSON.sections.map((x) => ((x as { title?: string }).title ?? '').length))} of ${MISSION_TITLE_MAX}`);
}

/* ── The unit ────────────────────────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID) as (Unit & { lessonIds?: string[]; seq?: string | number; sub?: string; canDo?: string }) | undefined;
if (!unit) die(`unit ${UNIT_ID} is not in the seed, so its lesson cannot be attached`);
if (unit.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: ${JSON.stringify(unit.title)}`);
if (unit.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: ${JSON.stringify(unit.sub)}`);
if (unit.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: ${JSON.stringify(unit.canDo)}`);
const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${JSON.stringify(unit.seq)}, so the header draws ${JSON.stringify(expectedTag)}`);

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

const itemsById = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;
let carriedNew = 0;
/** The imported rows FIRST, so an authored id could never be shadowed by one. */
for (const it of CARRIED) {
  if (!itemsById.has(it.id)) carriedNew++;
  itemsById.set(it.id, it);
}
for (const it of AUTHORED_ITEMS) {
  if (itemsById.has(it.id)) updatedItems++; else added++;
  itemsById.set(it.id, it);
}

/** EVERY RELEASED ROW CAN BE SERVED AS THE DECK THAT RELEASES IT EXPECTS. */
{
  const short = LESSON.itemIds.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`row(s) released to the hub with no flashcard drill: ${short.join(', ')}`);
  const unspeakable = MODAUX_SPEAK_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('voiceflash'));
  if (unspeakable.length) die(`speak target(s) with no voiceflash, which the mic cannot score: ${unspeakable.join(', ')}`);
  const undictatable = DICTATION_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('dictation'));
  if (undictatable.length) die(`dictée target(s) with no dictation drill: ${undictatable.join(', ')}`);
  const gendered = [...MODAL_ORDER].map((m) => itemsById.get(MODAUX_ITEM_IDS.find((id) => IMPORTED_BY_ID.get(id)?.fr === m)!)).filter((r) => r && (r as { gender?: string }).gender);
  if (gendered.length) die(`naming form(s) carrying a gender: ${gendered.map((r) => r!.id).join(', ')}. A naming form is not a noun.`);
}

const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

const out: Seed = {
  ...seed,
  items: [...itemsById.values()],
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

/** The refused rows and the unseen verb are still absent, unless somebody else
 *  put them there. */
{
  const before = new Set(seed.items.map((i) => i.id));
  const introduced = [...READ_ONLY_ROWS.map((r) => r.id), UNSEEN_VERB.sourceId]
    .filter((id) => !before.has(id) && out.items.some((i) => i.id === id));
  if (introduced.length) die(`this merge would carry row(s) it refused into the seed: ${introduced.join(', ')}`);
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
  + `\n    ${PARADIGM_IDS.length} grid sentences on one frame (${FRAME_VERB}), ${AUTHORED_ITEMS.length - PARADIGM_IDS.length} others`
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    out of ${SOURCE_THEMES.length} themes: ${SOURCE_THEMES.join(', ')}`
  + `\n  ${READ_ONLY_ROWS.length} refused and ${UNSEEN_VERB.fr} read-not-released, none of them in the seed`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${LESSON.itemIds.length} items`
  + `\n  endings: ${ENDINGS.filter((e) => e.owned).length} of ${ENDINGS.length} already the learner's`,
);

if (DRY_RUN) {
  console.log('\n  DRY RUN: every guard passed, seed.json not written.\n');
} else {
  /* CANONICAL FORMATTING. `JSON.stringify(x, null, 2)` with a trailing newline is
     the shape every other merge writes, and a whole-file rewrite in any other
     shape produces a diff nobody can read. */
  writeFileSync(SEED, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
  console.log(`\n  wrote ${SEED}`);
  console.log(`  seed now: ${out.items.length} items, ${out.lessons.length} lessons, ${out.units.length} units, version ${out.version} (unchanged)\n`);
  console.log('  NEXT: run the suite, then pnpm content:parity before any publish.\n');
}
