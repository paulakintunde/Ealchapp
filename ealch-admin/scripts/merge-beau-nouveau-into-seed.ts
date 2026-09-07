/* Merges a2.16.l1 "Beau, nouveau, vieux" into ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-beau-nouveau-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-beau-nouveau-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is canonical and the seed is a CUT of it; the
 * order is always apply, then merge, then publish only when both agree.
 *
 * ── WHY THE CARRY EXISTS, AND IT IS NOT OPTIONAL HERE ─────────────────────
 *
 * The seed holds roughly a fifth of this theme: `adjectifs-essentiels` shows 133
 * rows in the seed and holds 678 in Postgres. TWO OF THE TWELVE CARRIED ROWS ARE
 * NOT IN THE SEED TODAY — `fr.a1.adjectifs-essentiels.038` (« C'est un nouvel
 * ami. », the nouveau cell of the grid) and `fr.a1.rencontres.095` (`nouvelle`,
 * the feminine that cell is built from) — so a merge that did not carry them
 * would render the hero column of this lesson as two blank cards.
 *
 * ── THE THREE TRANSFORMS, AND WHY THEY LIVE HERE TOO ──────────────────────
 *
 * The manifest is a read of Postgres taken BEFORE the batch ran, and the batch
 * then changes three kinds of thing about rows it does not own:
 *
 *   1  one respelling repaired   `nouvelle` noo-VELL to noo-VEL, so the pair
 *                                the grid calls ONE SOUND is spelled one way
 *   2  four respellings SUPPLIED the four published third-form sentences had
 *                                none at all, and they are this lesson's heroes
 *   3  four sets of drills added the same four could not be drawn on a card,
 *                                spoken, or spelled
 *
 * Carrying the manifest verbatim would put the pre-batch value in the seed while
 * Postgres held the post-batch one. All three are applied here, from the same
 * constants, and the result is checked field by field.
 *
 * a2.15's merge DIES if `RESPELL_ADDITIONS` is non-empty, with the note that it
 * "has no path for them". a2.03 wrote the path and this inherits it: an addition
 * may only land on a row whose respelling is EMPTY, so it can never overwrite
 * somebody else's work.
 *
 * ── THE DRILL-ORDER TRAP, INHERITED FROM a2.12 ────────────────────────────
 *
 * `drills` is a Postgres ENUM array and `array_agg(distinct e order by e)`
 * orders by DECLARATION order, not alphabetically. a2.12's merge sorted the same
 * values as STRINGS and shipped `flashcard, review, voiceflash` into the seed
 * while the database held `flashcard, voiceflash, review`. Same set, same
 * meaning, and a divergence on rows the build owned, invisible to the suite
 * because nothing compares drill ORDER. `drillOrder()` below sorts by
 * `DRILL_KINDS`, which `enum-parity.test.ts` already pins to the enum. This
 * build adds drills to FOUR rows rather than two, so it is four chances to
 * repeat that.
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
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { namesUnitLabel } from './data/_unit-ref.ts';
import {
  ADJ_ORDER, ADVERB_MUST_FIRE, ADVERB_MUST_NOT_FIRE, ADVERB_SHAPE, ALL_REPAIRS,
  AUTHORED_HEADWORDS, AUTHORED_IDS as AUTHORED_ID_LIST, BEAU_NOUVEAU,
  CITED_UNITS, DICTEE_WORD_MODE_ROWS, DRILL_ADDITIONS, ELISION_REFRAME,
  ELISION_UNIT, EXPECTED_ACTS, EXPECTED_AUTHORED, EXPECTED_BLIND_NASALS,
  EXPECTED_DICTEE, EXPECTED_GRID_ROWS, EXPECTED_IMPORTED, EXPECTED_QUESTIONS,
  EXPECTED_REFRAME_SECTIONS, EXPECTED_REFRAME_USES, EXPECTED_SECTIONS,
  EXPECTED_SEEN_NASALS, EXPECTED_SUPERSCRIPTS, FALSE_POSITIVE_CANDIDATES,
  FORM_ORDER, GRID_ROWS, INVENTED_SHAPE, MISSION_TITLE_MAX, ONE_SOUND_FORMS,
  OTHER_SOUND_FORMS, OVER_PLURALISED_SHAPE, PHRASE_ROWS, PLURAL_UNCHANGED,
  PLURAL_X, PREDICATE_SUBJECT, REFRAME, REFRAME_MAX_WORDS, RESPELL_ADDITIONS,
  RESPELL_REPAIRS_HOUSE, RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE,
  PLURAL_OWNERS_LITERAL, PLURAL_UNCHANGED_UNITS, TERM_CHIP_ROW_MAX, THEME, UNIT,
  cellId, dropCheck,
  form, formRespell,
  phraseId, toItem, vowelJoinConsonant, type Form,
} from './data/beau-nouveau-corpus.ts';
import {
  IMPORTED_BY_ID, IMPORTED_IDS, READ_ONLY_ROWS, SOURCE_THEMES, silentHId,
  silentHPartnerId, vowelRowId,
} from './data/beau-nouveau-imported.ts';
import {
  BEAU_NOUVEAU_DICTEE_IDS, BEAU_NOUVEAU_ITEM_IDS, BEAU_NOUVEAU_LESSON,
  BEAU_NOUVEAU_SPEAK_IDS, BORROW_SECTION_ID, CHAIN_SECTION_ID,
  ERRORS_SECTION_ID, GRID_SECTION_ID, INVENTED_SECTION_ID, ONLY_PAIR_SECTION_ID,
  PAIRS_SECTION_ID, PLURAL_SECTION_ID, QUIZ_SECTION_ID, REASON_SECTION_ID,
  REVIEW_SECTION_ID, SILENT_H_SECTION_ID,
} from './data/beau-nouveau-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = BEAU_NOUVEAU_LESSON;
const UNIT_ID = UNIT.id;
const AUTHORED_ITEMS: Item[] = BEAU_NOUVEAU.map(toItem);
const AUTHORED_IDS = new Set(AUTHORED_ID_LIST);

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
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets',
]);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k) && !MACHINE_KEYS.has(k)) prose(x, out);
  }
  return out;
}
function hasPhrase(hay: string, needle: string): boolean {
  const isWord = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase(); const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWord(i === 0 ? '' : h[i - 1]) && !isWord(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}
const countPhrase = (hay: string, needle: string): number => {
  let n = 0; let i = 0;
  const h = hay.toLowerCase(); const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};

/* ─── THE CARRIED ROWS, WITH THE BATCH'S OWN TRANSFORMS APPLIED ──────────── */

const REPAIR_BY_ID = new Map(ALL_REPAIRS.map((r) => [r.id, r] as const));
const ADD_BY_ID = new Map(RESPELL_ADDITIONS.map((a) => [a.id, a] as const));
const DRILL_BY_ID = new Map(DRILL_ADDITIONS.map((d) => [d.id, d] as const));

/** Order a drill array the way POSTGRES does: `DRILL_KINDS` order, which is the
 *  enum's declaration order, NOT alphabetical. See the header. */
const drillOrder = (ds: Item['drills']): Item['drills'] =>
  [...(ds ?? [])].sort((x, y) => DRILL_KINDS.indexOf(x) - DRILL_KINDS.indexOf(y)) as Item['drills'];

const MANIFEST_ROWS = [...IMPORTED_BY_ID.values()];

const CARRIED: Item[] = MANIFEST_ROWS.map((row) => {
  const fix = REPAIR_BY_ID.get(row.id);
  const add = ADD_BY_ID.get(row.id);
  const drill = DRILL_BY_ID.get(row.id);
  if (!fix && !add && !drill) return row;

  let respell = row.respell;
  if (fix) {
    if (!String(respell ?? '').includes(fix.from)) {
      die(`${row.id} is recorded as ${JSON.stringify(respell)} and the repair expects to find ${JSON.stringify(fix.from)} in it. Regenerate the manifest.`);
    }
    respell = String(respell).split(fix.from).join(fix.to);
  }
  if (add) {
    /* AN ADDITION MAY ONLY LAND ON AN EMPTY FIELD. a2.03 §7: this is the one
       line that makes the path a2.15 refused to write safe. A row somebody has
       respelled since the manifest read is left exactly as it is, and the guard
       below then reports the divergence rather than the merge overwriting it. */
    if (respell) die(`${row.id} already carries ${JSON.stringify(respell)} and this build would supply ${JSON.stringify(add.to)}. Regenerate the manifest.`);
    respell = add.to;
  }
  const drills = drill
    ? drillOrder([...new Set([...(row.drills ?? []), ...drill.add])] as Item['drills'])
    : row.drills;
  return { ...row, respell, drills };
});

/** Every transform landed on the row it names, and on no other. */
{
  const byIdMap = new Map(CARRIED.map((r) => [r.id, r] as const));
  for (const r of ALL_REPAIRS) {
    const now = String(byIdMap.get(r.id)?.respell ?? '');
    if (!now.includes(r.to)) die(`the carry did not apply the repair to ${r.id}: ${JSON.stringify(now)}`);
    if (r.from !== r.to && now.includes(r.from)) die(`the carry left the unrepaired value in ${r.id}: ${JSON.stringify(now)}`);
  }
  for (const a of RESPELL_ADDITIONS) {
    if (String(byIdMap.get(a.id)?.respell ?? '') !== a.to) die(`the carry did not supply the respelling for ${a.id}`);
  }
  for (const d of DRILL_ADDITIONS) {
    for (const want of d.add) {
      if (!(byIdMap.get(d.id)?.drills ?? []).includes(want as Item['drills'][number])) die(`the carry did not add the ${want} drill to ${d.id}`);
    }
  }
  const touched = new Set([...REPAIR_BY_ID.keys(), ...ADD_BY_ID.keys(), ...DRILL_BY_ID.keys()]);
  const untouched = CARRIED.filter((r) => !touched.has(r.id));
  const changed = untouched.filter((r) => JSON.stringify(r) !== JSON.stringify(MANIFEST_ROWS.find((x) => x.id === r.id)));
  if (changed.length) die(`the carry changed ${changed.length} row(s) it does not own: ${changed.map((r) => r.id).join(', ')}`);
  console.log(`\n  carry: ${CARRIED.length} rows, ${ALL_REPAIRS.length} repaired, ${RESPELL_ADDITIONS.length} given a respelling, ${DRILL_ADDITIONS.length} given drills, ${untouched.length} byte-identical to the manifest`);
}

/** AND THE CARRY COMES OUT CLEAN. The nasal checker runs on the carry rather
 *  than on the manifest, because the carry is what reaches a screen. */
{
  const flagged = CARRIED.filter((r) => r.respell && hasPlainNasalFor(r.fr, r.respell));
  if (flagged.length) {
    die(`${flagged.length} carried row(s) are flagged by the nasal checker after the carry:\n  ${flagged.map((r) => `${r.id}  ${r.respell}`).join('\n  ')}`);
  }
  /* THE FOUR SUPPLIED RESPELLINGS ARE THE HERO ROWS, so they get their own
     assertions rather than only the blanket one above. Each one must join its
     final consonant onto the next word, which is what the form exists to do and
     what a later author "tidying" the value would undo. */
  for (const a of ADJ_ORDER) {
    const row = CARRIED.find((r) => r.id === vowelRowId(a));
    if (!row?.respell) die(`${vowelRowId(a)} has no respelling after the carry, and it is the ${a} cell of the grid`);
    const join = vowelJoinConsonant(a);
    if (!row.respell.toUpperCase().includes(`-${join.toUpperCase()}`)) {
      die(`${row.id} carries ${JSON.stringify(row.respell)} and the ${join} of ${form(a, 'vowel')} does not open a syllable in it.`);
    }
  }
  const h = CARRIED.find((r) => r.id === silentHId);
  if (!h?.respell?.includes('-L')) die(`${silentHId} carries ${JSON.stringify(h?.respell)} and the l of ${form('beau', 'vowel')} must run into the silent h`);
  /* THE FALSE-POSITIVE ABSENCE IS RE-MEASURED. Corrections §6 asks for the path
     to be looked for and its absence reported; a recorded absence that nothing
     re-runs is a comment. */
  for (const c of FALSE_POSITIVE_CANDIDATES) {
    if (hasPlainNasalFor(c.fr, c.respell)) die(`${JSON.stringify(c.fr)} is recorded as NOT flagged and the checker now flags it`);
  }
}

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

console.log(`  merging ${LESSON.id} into seed.json${DRY_RUN ? '  (DRY RUN)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

/* ── The lessons this merge MUST NOT DISTURB, BY NAME ─────────────────────
 *
 * Named rather than counted. A count alone lets a one-for-one swap through, and
 * that is exactly the shape of the accident this project has already had.     */
const MUST_NOT_DISTURB = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const UNITS_BEFORE = seed.units.length;
const MINE = new Set<string>([...AUTHORED_IDS, ...CARRIED.map((r) => r.id)]);
const UNTOUCHED_BEFORE = new Map(
  seed.items.filter((i) => !MINE.has(i.id)).map((i) => [i.id, JSON.stringify(i)] as const),
);

/** THE READ-ONLY ROWS ARE NOT IN `MINE`. The one that matters most is
 *  `fr.sons.masterclass.034`: it is the only respelled third-form sentence in
 *  the corpus and it carries TWO U+203F UNDERTIES, which render as low
 *  underscores on a Pixel 6. Carrying it would put that glyph on this lesson's
 *  hero screen. */
{
  const carried = READ_ONLY_ROWS.filter((r) => MINE.has(r.id)).map((r) => `${r.fr} (${r.id})`);
  if (carried.length) die(`read-only row(s) in the carry set: ${carried.join(', ')}. They are read, never written.`);
  const tie = CARRIED.filter((r) => String(r.respell ?? '').includes('‿'));
  if (tie.length) die(`${tie.length} carried row(s) hold U+203F: ${tie.map((r) => r.id).join(', ')}`);
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
  die(`${missing.length} itemId(s) would not resolve in the seed and would render blank cards:\n  ${missing.join('\n  ')}\n`
    + `  The seed is a CUT: ${THEME} shows 133 rows against 678 in Postgres, and two of this lesson's twelve\n`
    + '  carried rows are outside it, so the carry is not optional.');
}

if (BEAU_NOUVEAU.length !== EXPECTED_AUTHORED) die(`${BEAU_NOUVEAU.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (GRID_ROWS.length !== EXPECTED_GRID_ROWS) die(`${GRID_ROWS.length} predicate rows, expected ${EXPECTED_GRID_ROWS}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported, expected ${EXPECTED_IMPORTED}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz) die('the lesson has no quiz section');
const qs = quizQuestions(quiz);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions, expected ${EXPECTED_QUESTIONS}`);
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('more than one quiz section; a second is silently never rendered');

/* ── The learner-surface walks, INCLUDING intro, overview and the authored rows ─
 *
 * Ledger §0 and corrections §9 for `intro`; a2.15 §3 for `display()` beside
 * `prose()`; a2.03 §4 for the authored rows' `fr`, `en` and `notes`, which was
 * the fourth guard hole this band found and the only one nothing caught.     */

const production = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro, ...strings(LESSON.overview ?? {}), ...strings(LESSON.acts ?? []),
  ...strings(LESSON.drills ?? []),
  ...BEAU_NOUVEAU.flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']),
];
const learnerDisplay = [
  ...display(LESSON.sections), ...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...display(LESSON.acts ?? []), ...display(LESSON.drills ?? []),
  ...BEAU_NOUVEAU.flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']),
].join('\n');
const learnerProse = [
  ...prose(LESSON.sections), ...prose(LESSON.sheets ?? []), ...prose(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...prose(LESSON.acts ?? []), ...prose(LESSON.drills ?? []),
].join('\n');
if (learnerDisplay.includes('—')) die('an em dash reached a learner surface');
if (/honest/i.test(learnerDisplay)) die('"honest" reached a learner surface');
if (/honest/i.test(learnerProse)) die('"honest" reached a learner surface via prose()');
if (!LESSON.intro || LESSON.intro.length < 80) die('Lesson.intro is missing or too short to be the learner surface it is');
if (LESSON.overview?.titleEn !== UNIT.title) die('overview.titleEn and the unit title disagree');
if (LESSON.overview?.subFr !== UNIT.sub) die('overview.subFr and the unit sub disagree');

/* THE REFRAME. */
if (LESSON.reframe !== REFRAME) die('Lesson.reframe is not the corpus REFRAME');
const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
if (reframeSections !== EXPECTED_REFRAME_SECTIONS) die(`the reframe is in ${reframeSections} sections, expected ${EXPECTED_REFRAME_SECTIONS}`);
const reframeUses = production.reduce((n, s) => n + countPhrase(s, REFRAME), 0);
if (reframeUses !== EXPECTED_REFRAME_USES) die(`the reframe appears ${reframeUses} times, expected ${EXPECTED_REFRAME_USES}`);
/* AND IT STAYS SHORT ENOUGH TO RUN MID-SENTENCE. Doctrine §B.4, and a count
   guard cannot see it get longer. a2.03 §14 row 26. */
if (REFRAME.trim().split(/\s+/).length > REFRAME_MAX_WORDS) {
  die(`the reframe is ${REFRAME.trim().split(/\s+/).length} words and the ceiling is ${REFRAME_MAX_WORDS}`);
}

/* a2.17 STILL HAS A LESSON, and the guard is on the THING rather than the
   letters, because this lesson prints `appartement` and `immeuble`. */
for (const s of production) {
  const a = ADVERB_SHAPE.exec(s);
  if (a) die(`a production surface prints the adverb ${JSON.stringify(a[0])}, which is a2.17's: ${JSON.stringify(s.slice(0, 100))}`);
}
for (const w of ADVERB_MUST_FIRE) if (!ADVERB_SHAPE.test(w)) die(`ADVERB_SHAPE does not fire on ${JSON.stringify(w)}`);
for (const w of ADVERB_MUST_NOT_FIRE) if (ADVERB_SHAPE.test(w)) die(`ADVERB_SHAPE fires on ${JSON.stringify(w)}, which is a noun or an English word this lesson prints`);

/* ── THE OWNS, AGAIN, AGAINST THE POST-MERGE ROWS ────────────────────────── */

for (const a of ADJ_ORDER) {
  if (new Set(ONE_SOUND_FORMS.map((f) => formRespell(a, f))).size !== 1) {
    die(`${a}: the form before a vowel, the feminine and the feminine plural must be ONE sound.\n`
      + '  That is the whole lesson, and fr.sons.adjectifs-essentiels.314 against fr.sons.consonnes.138 is\n'
      + '  two different authors agreeing about it.');
  }
  if (new Set(OTHER_SOUND_FORMS.map((f) => formRespell(a, f))).size !== 1) die(`${a}: the plain form and its plural must be one sound`);
  if (!dropCheck(a)) die(`${a}: ${form(a, 'fem')} minus its last two letters is not ${form(a, 'vowel')}`);
  for (const f of FORM_ORDER) {
    if (f === 'vowel') {
      const row = CARRIED.find((r) => r.id === vowelRowId(a));
      if (!row || !hasPhrase(row.fr, form(a, 'vowel'))) die(`${vowelRowId(a)} does not hold ${JSON.stringify(form(a, 'vowel'))} after the carry`);
      continue;
    }
    const id = cellId(a, f as Exclude<Form, 'vowel'>);
    const row = AUTHORED_ITEMS.find((r) => r.id === id);
    if (!row) die(`no authored row for ${a}/${f}`);
    if (row.fr !== `${PREDICATE_SUBJECT[f as Exclude<Form, 'vowel'>]} ${form(a, f)}.`) die(`${id} is ${JSON.stringify(row.fr)} and the GRID builds something else`);
    if (!(row.respell ?? '').endsWith(formRespell(a, f))) die(`${id} respells as ${JSON.stringify(row.respell)} and the GRID says ${JSON.stringify(formRespell(a, f))}`);
  }
}

/* THE PLURAL. */
for (const a of PLURAL_X) {
  if (form(a, 'plainPl') !== `${form(a, 'plain')}x`) {
    die(`${a}'s plural must be its singular plus an x. beaus and nouveaus are not French, and the -eaux plural\n`
      + '  is claimed by no unit at any level, which is why this lesson owns it.');
  }
}
if (form(PLURAL_UNCHANGED, 'plain') !== form(PLURAL_UNCHANGED, 'plainPl')) {
  die(`${PLURAL_UNCHANGED}'s masculine plural must be the same word as its singular. a1.14 teaches it for this word\n`
    + '  and a2.03 generalises it to the class. If you came here to add the missing s, do not.');
}

/* THE FORMS THAT MAY ONLY APPEAR AS MARKED ERRORS. */
{
  const legalWrong = new Set([INVENTED_SECTION_ID, QUIZ_SECTION_ID]);
  const legalOver = new Set([INVENTED_SECTION_ID, QUIZ_SECTION_ID, ERRORS_SECTION_ID, REVIEW_SECTION_ID, PLURAL_SECTION_ID]);
  const PREDICATE_SHORT = ADJ_ORDER.flatMap((a) =>
    Object.values(PREDICATE_SUBJECT).map((subj) => `${subj} ${form(a, 'vowel')}`));
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (strings(s).some((x) => INVENTED_SHAPE.test(x)) && !legalWrong.has(sid)) die(`${sid} prints an invented feminine outside the sections that mark it wrong`);
    // BOUNDARY-AWARE. The short form is a PREFIX of the feminine in all three,
    // so `.includes("Elle est bel")` fires on « Elle est belle. », which is the
    // grid's own hero row. The batch's first version did exactly that.
    if (PREDICATE_SHORT.some((bad) => strings(s).some((x) => hasPhrase(x, bad))) && !legalWrong.has(sid)) die(`${sid} puts the short form after a verb`);
    if (strings(s).some((x) => OVER_PLURALISED_SHAPE.test(x)) && !legalOver.has(sid)) die(`${sid} prints an over-pluralised form outside the sections that mark it wrong`);
  }
  /* AND THEY MUST STILL BE THERE. A reservation list that has quietly emptied
     has stopped guarding. */
  const inventedHomes = LESSON.sections.filter((s) => legalWrong.has((s as { id?: string }).id ?? '')
    && strings(s).some((x) => INVENTED_SHAPE.test(x)));
  if (inventedHomes.length !== legalWrong.size) die(`the invented feminine is drilled in ${inventedHomes.length} of ${legalWrong.size} sections`);
  const fixes = qs.filter((q) => q.format === 'errorSpot' && INVENTED_SHAPE.test(q.prompt ?? ''));
  if (fixes.length < 2) die(`${fixes.length} errorSpot questions fix an invented feminine, and it is UNHEARABLE, so only a written surface can test it`);
}

/* THE CONTRAST PAIRS AND THE SILENT H. */
{
  const pairs = LESSON.sections.find((s) => (s as { id?: string }).id === PAIRS_SECTION_ID) as { type?: string; rows?: { cells: string[] }[] } | undefined;
  if (pairs?.type !== 'tapTable') die(`${PAIRS_SECTION_ID} must be a tapTable: the contrast is a SOUND contrast and has to be one tap per row`);
  if ((pairs.rows ?? []).length !== ADJ_ORDER.length) die(`${PAIRS_SECTION_ID} has ${(pairs.rows ?? []).length} rows and there are ${ADJ_ORDER.length} pairs`);
  (pairs.rows ?? []).forEach((r, i) => {
    const a = ADJ_ORDER[i];
    if (r.cells[1] !== form(a, 'plain') || r.cells[2] !== form(a, 'vowel')) die(`${PAIRS_SECTION_ID} row ${i} does not put the plain form before the short one`);
  });
  const tails = ADJ_ORDER.map((a) => BEAU_NOUVEAU.find((r) => r.id === phraseId(a))!.fr.split(' ').pop());
  if (new Set(tails).size !== 1) die(`the three consonant-initial phrases end in ${tails.join(', ')} and the noun must be held constant`);

  const h = LESSON.sections.find((s) => (s as { id?: string }).id === SILENT_H_SECTION_ID) as { examples?: { fr: string }[] } | undefined;
  if (!h?.examples) die(`${SILENT_H_SECTION_ID} has no examples`);
  const partner = CARRIED.find((r) => r.id === silentHPartnerId)!.fr;
  const hRow = CARRIED.find((r) => r.id === silentHId)!.fr;
  if (h.examples[0].fr !== partner || h.examples[1].fr !== hRow) die(`${SILENT_H_SECTION_ID} must open with ${JSON.stringify(partner)} then ${JSON.stringify(hRow)}`);
  const stem = (s: string) => s.replace(/\s+\S+\.$/, '');
  if (stem(partner) !== stem(hRow)) die('the silent-h pair is not a minimal pair');
}

/* ── SIX CHECKS THE MUTATION HARNESS FOUND THIS LAYER MISSING ─────────────
 *
 * Rows 4, 8, 15, 20, 22, 23 and 24 of `_a216_mutate.mjs` were all caught by the
 * batch and MISSED here. None of them shipped, because the batch runs first and
 * two of the three layers caught each one — but a merge that is thinner than
 * the batch is a merge that stops being a check and becomes a formality, and
 * this is the layer that runs when somebody re-merges without re-applying.  */

/* THE JARGON WALK, over prose() AND display(), with the -s plural of every
   entry, and INCLUDING `intro` and the authored rows' notes. */
{
  const JARGON = [
    'anti-hiatus', 'hiatus', 'elision', 'elide', 'proclitic', 'enchainement',
    'enchaînement', 'liaison', 'pre-vocalic', 'prevocalic', 'allomorph',
    'suppletion', 'suppletive', 'inflection', 'inflected', 'paradigm',
    'declension', 'morpheme', 'morphology', 'attributive', 'predicative',
    'prenominal', 'postnominal', 'phoneme', 'phonological', 'lexeme',
    'null-marked', 'geminate', 'epenthetic', 'grammatical', 'orthography',
    'first person', 'second person', 'third person', 'inflectional class',
  ];
  for (const j of JARGON) {
    for (const term of [j, `${j}s`]) {
      for (const [label, text] of [['prose', learnerProse], ['display', learnerDisplay]] as const) {
        const hit = text.split('\n').find((x) => hasPhrase(x, term));
        if (hit) die(`grammar jargon on a learner surface (${label} walk): ${JSON.stringify(term)} in ${JSON.stringify(hit.slice(0, 90))}`);
      }
    }
    if (hasPhrase(LESSON.intro ?? '', j) || hasPhrase(LESSON.intro ?? '', `${j}s`)) {
      die(`\`intro\` holds the jargon ${JSON.stringify(j)}, and it is drawn on the overview card AND the lesson cover`);
    }
  }
}

/* THE OWNS ACT OUTWEIGHS THE PARADIGM ACT. Doctrine §B.5. */
{
  const owns = (LESSON.acts ?? []).find((a) => a.id === 'act3');
  const para = (LESSON.acts ?? []).find((a) => a.id === 'act2');
  if (!owns || !para) die('act2 or act3 is missing');
  if (owns.sections.length <= para.sections.length) {
    die(`the paradigm act has ${para.sections.length} missions and the Owns act has ${owns.sections.length}. `
      + 'Doctrine §B.5: if the paradigm outweighs the Owns, the wrong lesson was built. '
      + 'a2.03 already printed four of these five columns at seq 10, and a1.13 and a1.14 before it.');
  }
}

/* THE THIRD FORM IS THE SECOND COLUMN, NOT AN APPENDIX. */
if (FORM_ORDER[1] !== 'vowel') {
  die(`the third form is column ${FORM_ORDER.indexOf('vowel') + 1} and it belongs SECOND, between the plain `
    + 'form it replaces and the feminine it is made of. Fifth is the version that teaches three exceptions.');
}

/* PLACEMENT IS NOT TAUGHT, SCOPED TO PRODUCTION SURFACES, because a1.16 IS
   named in one line and the naming is required. */
{
  const PRODUCTION_IDS = new Set([GRID_SECTION_ID, PAIRS_SECTION_ID, BORROW_SECTION_ID, PLURAL_SECTION_ID, INVENTED_SECTION_ID]);
  const TEACHING = ['goes after the noun', 'goes before the noun', 'comes after the noun', 'after the thing it describes', 'des becomes de'];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (!PRODUCTION_IDS.has(sid)) continue;
    for (const p of TEACHING) {
      if (strings(s).some((x) => hasPhrase(x, p))) die(`${sid} teaches placement (${JSON.stringify(p)}), which is a1.16's`);
    }
  }
}

/* THE PLURAL SCREEN NAMES BOTH LESSONS THAT ALREADY OWN TWO THIRDS OF IT. */
{
  const s = LESSON.sections.find((x) => (x as { id?: string }).id === PLURAL_SECTION_ID);
  // LITERAL, not the constant the section renders. See the batch.
  for (const u of PLURAL_OWNERS_LITERAL) {
    if (!strings(s).some((x) => namesUnitLabel(x, u))) die(`${PLURAL_SECTION_ID} does not name ${u}, which already owns two thirds of the plural`);
  }
}

/* THE CONTRAST PAIRS ARE BRIEFED AS ONE TAKE. Invariants §10: a constraint on
   how something is recorded becomes invisible the moment the clip is
   delivered, so it is pinned in every layer rather than only in the batch. */
{
  const take = (LESSON.audio?.recorded ?? []).find((r) => r.id === 'rec-a2-16-pairs');
  if (!take) die('there is no rec-a2-16-pairs take, and the contrast is the lesson');
  for (const phrase of ['ONE TAKE', 'RECORDED APART']) {
    if (!take.desc.toUpperCase().includes(phrase)) die(`rec-a2-16-pairs does not say ${JSON.stringify(phrase)}`);
  }
  const clips = take.clipIds ?? [];
  for (const a of ADJ_ORDER) {
    const c = BEAU_NOUVEAU.find((r) => r.id === phraseId(a))!.fr;
    const v = CARRIED.find((r) => r.id === vowelRowId(a))!.fr;
    if (clips.indexOf(c) + 1 !== clips.indexOf(v)) die(`rec-a2-16-pairs lists the ${a} pair non-adjacently, and adjacency IS the instruction`);
  }
}

/* THE BACK-REFERENCES. */
{
  const reason = LESSON.sections.find((s) => (s as { id?: string }).id === REASON_SECTION_ID);
  if (!reason || !strings(reason).some((s) => s.includes(ELISION_REFRAME))) die(`${REASON_SECTION_ID} does not quote ${ELISION_UNIT}'s reframe verbatim`);
  const chain = LESSON.sections.find((s) => (s as { id?: string }).id === CHAIN_SECTION_ID);
  if (!chain || !strings(chain).some((s) => namesUnitLabel(s, 'a1.17'))) die(`${CHAIN_SECTION_ID} does not name a1.17`);
  for (const sid of [GRID_SECTION_ID, PAIRS_SECTION_ID, BORROW_SECTION_ID, ONLY_PAIR_SECTION_ID, SILENT_H_SECTION_ID, PLURAL_SECTION_ID, INVENTED_SECTION_ID]) {
    if (!LESSON.sections.some((s) => (s as { id?: string }).id === sid)) die(`${sid} is missing from the lesson`);
  }
  for (const u of CITED_UNITS) {
    if (!production.some((s) => namesUnitLabel(s, u))) die(`${u} is in CITED_UNITS and is named on no learner surface`);
  }
}

/* THE NASALS, ON EVERY ROW THAT REACHES A SCREEN. */
{
  const rows: [string, string][] = [
    ...BEAU_NOUVEAU.map((r) => [r.fr, r.respell ?? ''] as [string, string]),
    ...CARRIED.map((r) => [r.fr, r.respell ?? ''] as [string, string]),
  ];
  let seen = 0; let missed = 0;
  for (const [frText, respell] of rows) {
    for (let i = 0; i < respell.length; i += 1) {
      if (respell[i] !== 'ⁿ') continue;
      const broken = respell.slice(0, i) + 'n' + respell.slice(i + 1);
      if (hasPlainNasalFor(frText, broken)) seen += 1; else missed += 1;
    }
    if (hasPlainNasalFor(frText, respell)) die(`${JSON.stringify(frText)} ${JSON.stringify(respell)} is flagged`);
  }
  if (seen + missed !== EXPECTED_SUPERSCRIPTS) die(`${seen + missed} superscripts, expected ${EXPECTED_SUPERSCRIPTS}`);
  if (seen !== EXPECTED_SEEN_NASALS) die(`${seen} seen, expected ${EXPECTED_SEEN_NASALS}`);
  if (missed !== EXPECTED_BLIND_NASALS) die(`${missed} blind, expected ${EXPECTED_BLIND_NASALS}`);
}

/* THE QUIZ. */
{
  const fmt: Record<string, number> = {};
  for (const q of qs) fmt[q.format ?? 'mcq'] = (fmt[q.format ?? 'mcq'] ?? 0) + 1;
  if ((fmt.mcq ?? 0) * 2 > qs.length) die(`${fmt.mcq} of ${qs.length} are mcq and at most half may be`);
  const sectionIds = LESSON.sections.map((s) => (s as { id: string }).id);
  for (const [i, q] of qs.entries()) {
    if (!q.why) die(`question ${i + 1} has no why`);
    if (!q.ref || !sectionIds.includes(q.ref)) die(`question ${i + 1} has no valid ref`);
    if ((q.format === 'typeIn' || q.format === 'errorSpot') && !matchesAccept(q.answer ?? '', q.accept ?? [])) {
      die(`question ${i + 1} does not accept the answer it displays`);
    }
    if (q.format === 'errorSpot' && !q.prompt) die(`question ${i + 1} is an errorSpot with no prompt`);
  }
  /* NO EAR QUESTION MAY ASK BETWEEN TWO FORMS THAT ARE ONE SOUND, and every ear
     question must turn on the ONE pair that is audible. Corrections §5. */
  const groups: string[][] = ADJ_ORDER.map((a) => ONE_SOUND_FORMS.map((f) => form(a, f)))
    .concat(ADJ_ORDER.map((a) => OTHER_SOUND_FORMS.map((f) => form(a, f))));
  for (const q of qs) {
    if (q.format !== 'listenChoose') continue;
    const opts = q.opts ?? [];
    for (const g of groups) {
      for (const x of g) for (const y of g) {
        if (x === y) continue;
        for (let i = 0; i < opts.length; i += 1) for (let j = 0; j < opts.length; j += 1) {
          if (i !== j && opts[i].replace(x, y) === opts[j]) die(`a listenChoose offers two options that are one sound: ${JSON.stringify(opts[i])} / ${JSON.stringify(opts[j])}`);
        }
      }
    }
    const audible = ADJ_ORDER.some((a) => opts.some((o) => hasPhrase(o, form(a, 'plain'))) && opts.some((o) => hasPhrase(o, form(a, 'vowel'))));
    if (!audible) die('a listenChoose does not contrast the plain form against the short one, and that is the only audible difference in this lesson');
  }
}

/* THE DICTÉE. */
if (BEAU_NOUVEAU_DICTEE_IDS.length !== EXPECTED_DICTEE) die(`${BEAU_NOUVEAU_DICTEE_IDS.length} dictée targets, expected ${EXPECTED_DICTEE}`);
{
  const frOf = (id: string) => BEAU_NOUVEAU.find((r) => r.id === id)?.fr ?? CARRIED.find((r) => r.id === id)?.fr ?? '';
  for (const id of BEAU_NOUVEAU_DICTEE_IDS) {
    const text = frOf(id);
    if (!text) die(`${id} is a dictée target and is in neither the authored nor the carried set`);
    if (dicteeMode(text) !== 'letters') die(`${id} ${JSON.stringify(text)} spells in WORD mode and tests nothing`);
    if (/[œŒ]/u.test(text)) die(`${id} holds U+0153, which the letter bank and the target both drop`);
  }
  for (const text of DICTEE_WORD_MODE_ROWS) {
    if (dicteeMode(text) === 'letters') die(`${JSON.stringify(text)} is recorded as too long and dicteeMode puts it in LETTERS`);
  }
  const short = ADJ_ORDER.filter((a) => BEAU_NOUVEAU_DICTEE_IDS.includes(vowelRowId(a)));
  if (short.length < 2) die(`only ${short.length} short form(s) are dictée targets, and it is the form the lesson is about`);
}

/* EVERY ROLE-PLAY TURN OFFERS AT LEAST TWO WAYS TO ANSWER, AND A userEn.
   `scenario.logic.test.ts` enforces it across the whole seed and no document in
   this band mentions it; a2.03 v1 shipped three turns with one apiece and its
   merge was green. */
{
  const scen = LESSON.sections.find((s) => s.type === 'scenario') as { turns?: { alts?: unknown[]; userEn?: string }[] } | undefined;
  if (!scen?.turns?.length) die('the lesson has no scenario turns');
  const thin = scen.turns.map((t, i) => ((t.alts?.length ?? 0) >= 2 ? null : `turn ${i}`)).filter(Boolean);
  if (thin.length) die(`${thin.length} role-play turn(s) offer fewer than two alternatives: ${thin.join(', ')}`);
  const untranslated = scen.turns.map((t, i) => (t.userEn?.trim() ? null : `turn ${i}`)).filter(Boolean);
  if (untranslated.length) die(`${untranslated.length} role-play turn(s) have no userEn: ${untranslated.join(', ')}`);
}

/* THE HUB TITLE CEILING, AND THE TERM-CHIP ROW BUDGET. Both are WIDTHS rather
   than counts (ledger §a2.14-13 and §a2.03-3), so both are necessary and not
   sufficient, and anything from 34 up wants a look at the phone. */
{
  const over = LESSON.sections.map((s) => (s as { id?: string; title?: string }))
    .filter((s) => (s.title ?? '').length > MISSION_TITLE_MAX);
  if (over.length) die(`${over.length} mission title(s) past ${MISSION_TITLE_MAX} characters: ${over.map((s) => s.id).join(', ')}`);
  for (const s of LESSON.sections) {
    const terms = (s as { terms?: string[] }).terms ?? [];
    if (terms.length > 3) die(`${(s as { id?: string }).id} declares ${terms.length} term chips and the renderer shows 3`);
    const w = terms.reduce((n, t) => n + ((LESSON.terms ?? {})[t]?.term.length ?? 0), 0) + Math.max(0, terms.length - 1);
    if (w > TERM_CHIP_ROW_MAX) die(`${(s as { id?: string }).id}'s term chips total ${w} characters and the row budget is ${TERM_CHIP_ROW_MAX}`);
  }
}

/* THE ONE AUTHORED HEADWORD IS IN THE SEED AS A BARE, UNGENDERED WORD. */
for (const word of Object.keys(AUTHORED_HEADWORDS)) {
  const row = AUTHORED_ITEMS.find((r) => r.fr === word);
  if (!row) die(`${word} is recorded as authored and is not in the authored set`);
  if ((row as { gender?: string }).gender) die(`${row.id} carries a gender; it would join a1.03's ending population`);
  if (/\s/.test(row.fr)) die(`${row.id} is a headword with a space in it`);
}

/* ── The unit ────────────────────────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID) as (Unit & { lessonIds?: string[]; seq?: string | number; sub?: string; canDo?: string }) | undefined;
if (!unit) die(`unit ${UNIT_ID} is not in the seed, so its lesson cannot be attached`);
if (unit.title !== UNIT.title) die(`unit ${UNIT_ID} title has changed: ${JSON.stringify(unit.title)}`);
if (unit.sub !== UNIT.sub) die(`unit ${UNIT_ID} sub has changed: ${JSON.stringify(unit.sub)}`);
if (unit.canDo !== UNIT.canDo) die(`unit ${UNIT_ID} canDo has changed: ${JSON.stringify(unit.canDo)}`);
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
    + '\n  Overwriting with the authored copy.\n',
  );
}

const itemsById = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;
let carriedNew = 0;
/** The imported rows FIRST, so an authored id could never be shadowed by one. */
for (const it of CARRIED) {
  if (!itemsById.has(it.id)) carriedNew += 1;
  itemsById.set(it.id, it);
}
for (const it of AUTHORED_ITEMS) {
  if (itemsById.has(it.id)) updatedItems += 1; else added += 1;
  itemsById.set(it.id, it);
}

/** EVERY RELEASED ROW CAN BE SERVED AS THE DECK THAT RELEASES IT EXPECTS. */
{
  const short = LESSON.itemIds.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`row(s) released to the hub with no flashcard drill: ${short.join(', ')}`);
  const unspeakable = BEAU_NOUVEAU_SPEAK_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('voiceflash'));
  if (unspeakable.length) die(`speak target(s) with no voiceflash, which the mic cannot score: ${unspeakable.join(', ')}`);
  const undictatable = BEAU_NOUVEAU_DICTEE_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('dictation'));
  if (undictatable.length) die(`dictée target(s) with no dictation drill: ${undictatable.join(', ')}`);
  const gendered = [...MINE].map((id) => itemsById.get(id)).filter((r) => r && (r as { gender?: string }).gender);
  if (gendered.length) die(`row(s) in this lesson carrying a gender: ${gendered.map((r) => r!.id).join(', ')}. They would join a1.03's ending population.`);
  /* NO DUPLICATE fr INSIDE THE THEME, computed the way flashhub-coverage does:
     article stripped, per theme. THIS IS THE CHECK THAT DECIDED THE NOUNS:
     « C'est un bel arbre. » already exists here, so it is IMPORTED rather than
     authored, and the three consonant-initial phrases use a noun that collides
     with nothing. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const inTheme = [...itemsById.values()].filter((i) => i.theme === THEME);
  const byFr = new Map<string, string[]>();
  for (const i of inTheme) byFr.set(strip(i.fr), [...(byFr.get(strip(i.fr)) ?? []), i.id]);
  const dupes = [...byFr.entries()].filter(([, ids]) => ids.length > 1);
  if (dupes.length) die(`${dupes.length} duplicate fr inside ${THEME}: ${dupes.slice(0, 5).map(([k, ids]) => `${k} (${ids.join(', ')})`).join('; ')}`);
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

/** The refused rows are still absent, unless somebody else put them there. */
{
  const before = new Set(seed.items.map((i) => i.id));
  const introduced = READ_ONLY_ROWS.map((r) => r.id)
    .filter((id) => !before.has(id) && out.items.some((i) => i.id === id));
  if (introduced.length) die(`this merge would carry row(s) it refused into the seed: ${introduced.join(', ')}`);
}

/** Every row this merge does not own comes out BYTE-IDENTICAL. */
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
  + `\n    ${Object.keys(AUTHORED_HEADWORDS).length} HEADWORD AUTHORED (${Object.keys(AUTHORED_HEADWORDS).join(', ')}); the brief predicted three`
  + `\n    ${GRID_ROWS.length} predicate cells and ${PHRASE_ROWS.length} noun phrases; the ${ADJ_ORDER.length} third forms are IMPORTED`
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    out of ${SOURCE_THEMES.length} themes: ${SOURCE_THEMES.join(', ')}`
  + `\n    ${ALL_REPAIRS.length} repaired (${RESPELL_REPAIRS_VISIBLE.length} visible, ${RESPELL_REPAIRS_INVISIBLE.length} invisible, ${RESPELL_REPAIRS_HOUSE.length} house convention)`
  + `\n    ${RESPELL_ADDITIONS.length} given a respelling they never had, ${DRILL_ADDITIONS.length} given drills`
  + `\n  ${READ_ONLY_ROWS.length} refused, none of them in the seed`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${LESSON.itemIds.length} items`
  + `\n  dictée: ${BEAU_NOUVEAU_DICTEE_IDS.length} targets, all LETTERS; ${DICTEE_WORD_MODE_ROWS.length} rows too long and named on the grid`,
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
console.log(`  itemIds resolved: ${BEAU_NOUVEAU_ITEM_IDS.length}\n`);
