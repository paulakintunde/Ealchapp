/* Merges a2.03.l1 "L'accord des adjectifs" into
 * ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-accord-adjectifs-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-accord-adjectifs-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is canonical and the seed is a CUT of it; the
 * order is always apply, then merge, then publish only when both agree.
 *
 * ── WHY THE CARRY EXISTS ──────────────────────────────────────────────────
 *
 * The seed holds roughly a quarter of the database: `adjectifs-essentiels` shows
 * 92 rows in the seed and holds 645 in Postgres, and `couleurs` shows 48 against
 * 339. This lesson imports out of SIX themes and most of the rows it leans on
 * hardest are outside the cut. A lesson whose `itemIds` resolve to nothing
 * renders empty cards on a device, so the imported rows are carried rather than
 * assumed present. a2.11 found that NEITHER of the two rows its lesson leaned on
 * hardest was in the seed.
 *
 * ── THE THREE TRANSFORMS, AND WHY THEY LIVE HERE TOO ──────────────────────
 *
 * The manifest is a read of Postgres taken BEFORE the batch ran, and the batch
 * then changes three kinds of thing about rows it does not own:
 *
 *   1  six respellings repaired    four invisible nasals, one false positive,
 *                                  one house-convention mismatch
 *   2  two respellings SUPPLIED    the only published sportif/sportive rows had
 *                                  none at all
 *   3  two drills added            the same two rows carried only `dictation`
 *
 * Carrying the manifest verbatim would put the pre-batch value in the seed while
 * Postgres held the post-batch one. All three are applied here, from the same
 * constants, and the result is checked field by field.
 *
 * a2.15's merge DIES if `RESPELL_ADDITIONS` is non-empty, with the note that it
 * "has no path for them". This one has the path, and it is the same shape as the
 * repair path with one difference: an addition may only land on a row whose
 * respelling is EMPTY, so it can never overwrite somebody else's work.
 *
 * ── THE DRILL-ORDER TRAP, INHERITED FROM a2.12 ────────────────────────────
 *
 * `drills` is a Postgres ENUM array and `array_agg(distinct e order by e)`
 * orders by DECLARATION order, not alphabetically. a2.12's merge sorted the same
 * values as STRINGS and shipped `flashcard, review, voiceflash` into the seed
 * while the database held `flashcard, voiceflash, review`. Same set, same
 * meaning, and a divergence on rows the build owned, invisible to the suite
 * because nothing compares drill ORDER. `drillOrder()` below sorts by
 * `DRILL_KINDS`, which `enum-parity.test.ts` already pins to the enum.
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
  ACCORD_ADJECTIFS, ADVERB_MUST_FIRE, ADVERB_MUST_NOT_FIRE, ADVERB_SHAPE,
  AUTHORED_HEADWORDS, AUTHORED_IDS as AUTHORED_ID_LIST, BEAU_SHAPE,
  BLIND_NASAL_ROWS, CELL_ORDER, CITED_UNITS, COMPARATIVE_SHAPE, DICTATION_IDS,
  DRILL_ADDITIONS, EXPECTED_ACTS, EXPECTED_AUTHORED, EXPECTED_BLIND_NASALS,
  EXPECTED_DICTATION, EXPECTED_GRID_ROWS, EXPECTED_IMPORTED, EXPECTED_QUESTIONS,
  EXPECTED_REFRAME_SECTIONS, EXPECTED_REFRAME_USES, EXPECTED_SECTIONS,
  EXPECTED_SEEN_NASALS, EXPECTED_SUPERSCRIPTS, FALSE_POSITIVES_FOUND, GRID_ROWS,
  IDENTICAL_CELLS, IDENTICAL_PATTERN, MISSION_TITLE_MAX, OVER_PLURALISED,
  OVER_PLURALISED_SHAPE, PATTERN_ORDER, REFRAME, RESPELL_ADDITIONS,
  RESPELL_REPAIRS_HOUSE, RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE,
  THEME, UNIT, UNSEEN, UNSEEN_HOMES, UNSEEN_SHAPE, cellId, form, formRespell,
  toItem,
} from './data/accord-adjectifs-corpus.ts';
import {
  IMPORTED_BY_ID, IMPORTED_IDS, READ_ONLY_ROWS, SOURCE_THEMES,
} from './data/accord-adjectifs-imported.ts';
import {
  ACCORD_ADJECTIFS_ITEM_IDS, ACCORD_ADJECTIFS_LESSON, ACCORD_ADJECTIFS_SPEAK_IDS,
  COLD_SECTION_ID, CONTRAST_PAIR, ERRORS_SECTION_ID, GRID_SECTION_ID,
  IDENTICAL_SECTION_ID, INVARIABLE_SECTION_ID, QUIZ_SECTION_ID, REVIEW_SECTION_ID,
} from './data/accord-adjectifs-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = ACCORD_ADJECTIFS_LESSON;
const UNIT_ID = UNIT.id;

const AUTHORED_ITEMS: Item[] = ACCORD_ADJECTIFS.map(toItem);
const AUTHORED_IDS = new Set(AUTHORED_ID_LIST);
const ALL_REPAIRS = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE, ...RESPELL_REPAIRS_HOUSE];

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
    /* AN ADDITION MAY ONLY LAND ON AN EMPTY FIELD. This is the difference
       between an addition and a repair, and it is what makes the path a2.15
       refused to write safe: a row somebody has respelled since the manifest
       read is left exactly as it is, and the guard below then reports the
       divergence rather than the merge silently overwriting it. */
    if (respell) die(`${row.id} already carries ${JSON.stringify(respell)} and this build would supply ${JSON.stringify(add.to)}. Regenerate the manifest.`);
    respell = add.to;
  }
  const drills = drill && !(row.drills ?? []).includes(drill.add as Item['drills'][number])
    ? drillOrder([...(row.drills ?? []), drill.add as Item['drills'][number]])
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
    if (!(byIdMap.get(d.id)?.drills ?? []).includes(d.add as Item['drills'][number])) die(`the carry did not add the ${d.add} drill to ${d.id}`);
  }
  const touched = new Set([...REPAIR_BY_ID.keys(), ...ADD_BY_ID.keys(), ...DRILL_BY_ID.keys()]);
  const untouched = CARRIED.filter((r) => !touched.has(r.id));
  const changed = untouched.filter((r) => JSON.stringify(r) !== JSON.stringify(MANIFEST_ROWS.find((x) => x.id === r.id)));
  if (changed.length) die(`the carry changed ${changed.length} row(s) it does not own: ${changed.map((r) => r.id).join(', ')}`);
  console.log(`\n  carry: ${CARRIED.length} rows, ${ALL_REPAIRS.length} repaired, ${RESPELL_ADDITIONS.length} given a respelling, ${DRILL_ADDITIONS.length} given a drill, ${untouched.length} byte-identical to the manifest`);
}

/** AND THE CARRY COMES OUT CLEAN. The nasal checker runs on the carry rather
 *  than on the manifest, because the carry is what reaches a screen.
 *
 *  NOTE THAT THIS PASSES ON FOUR ROWS THE CHECKER CANNOT SEE: `dahn-zhuh-RUH`,
 *  `nohn-BRUH`, `an-pewl-SEEF` and `VEHR fohn-SAY` are all UNFLAGGED before the
 *  repair and after it, because corrections §6's blind spot swallows them. This
 *  assertion is necessary and not sufficient, and the by-name check below is
 *  what actually guards those four. */
{
  const flagged = CARRIED.filter((r) => r.respell && hasPlainNasalFor(r.fr, r.respell));
  if (flagged.length) {
    die(`${flagged.length} carried row(s) are flagged by the nasal checker after the carry:\n  ${flagged.map((r) => `${r.id}  ${r.respell}`).join('\n  ')}`);
  }
  for (const r of RESPELL_REPAIRS_INVISIBLE) {
    const now = CARRIED.find((x) => x.id === r.id)?.respell ?? '';
    if (!now.includes('ⁿ')) {
      die(`${r.id} carries ${JSON.stringify(now)} after the repair and it holds no superscript.\n`
        + '  hasPlainNasalFor cannot see this row in either state, so the by-name assertion is the only guard on it.');
    }
  }
  /* THE FALSE POSITIVE IS THE OPPOSITE CASE and must NOT gain a superscript.
     `crème` has a real /m/ and no nasal vowel; invariants §3 on `jaune` says the
     fix is to drop the H. A later author "completing" the repair set by adding a
     ⁿ here would teach a sound that is not in the word. */
  for (const f of FALSE_POSITIVES_FOUND) {
    const row = CARRIED.find((r) => r.fr === f.fr);
    if (!row) continue;
    if ((row.respell ?? '').includes('ⁿ')) die(`${row.id} ${JSON.stringify(f.fr)} has gained a superscript. There is no nasal vowel in it.`);
    if (row.respell !== f.fix) die(`${row.id} carries ${JSON.stringify(row.respell)} and the recorded fix is ${JSON.stringify(f.fix)}`);
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

/** THE READ-ONLY ROWS ARE NOT IN `MINE`. The three that matter most are the
 *  cold adjectives: carrying `fr.sons.couleurs.013`, `fr.sons.adjectifs-
 *  essentiels.094` or `fr.sons.muettes.027` would put `turquoise`, `courageux`
 *  or `actif` in the seed as this lesson's, and the whole last act depends on
 *  their not being anywhere near it. */
{
  const carried = READ_ONLY_ROWS.filter((r) => MINE.has(r.id)).map((r) => `${r.fr} (${r.id})`);
  if (carried.length) die(`read-only row(s) in the carry set: ${carried.join(', ')}. They are read, never written.`);
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
    + `  The seed is a CUT: ${THEME} shows a fraction of what Postgres holds, and this lesson imports out of\n`
    + `  ${SOURCE_THEMES.length} themes, so the carry is not optional.`);
}

if (ACCORD_ADJECTIFS.length !== EXPECTED_AUTHORED) die(`${ACCORD_ADJECTIFS.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (GRID_ROWS.length !== EXPECTED_GRID_ROWS) die(`${GRID_ROWS.length} grid rows, expected ${EXPECTED_GRID_ROWS}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported, expected ${EXPECTED_IMPORTED}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz) die('the lesson has no quiz section');
const qs = quizQuestions(quiz);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions, expected ${EXPECTED_QUESTIONS}`);
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('more than one quiz section; a second is silently never rendered');

/* ── The learner-surface walks, INCLUDING intro and overview ──────────────
 *
 * Ledger §0 and corrections §9. a2.11 shipped grammar jargon in `intro`, which
 * is drawn on the overview card AND the lesson cover, while every guard in the
 * band walked sections, sheets and terms and not that. a2.15 §3 adds `display()`
 * beside `prose()` so a cardDeck `sub` is seen.                              */

/* THE WALK INCLUDES THE AUTHORED CORPUS ROWS. The mutation harness wrote
   a2.17's adverb and a2.08's comparative into an authored row's `notes` and all
   three layers missed them; they were the only two blind spots in twenty-six.
   `Item.notes` reaches no component today, so it was not a learner-visible leak,
   and it was still content this build owns making a claim the guard could not
   see. See the batch for the full note. */
const production = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro, ...strings(LESSON.overview ?? {}), ...strings(LESSON.acts ?? []),
  ...strings(LESSON.drills ?? []),
  ...ACCORD_ADJECTIFS.flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']),
];
const learnerDisplay = [
  ...display(LESSON.sections), ...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...display(LESSON.acts ?? []), ...display(LESSON.drills ?? []),
].join('\n');
const learnerProse = [
  ...prose(LESSON.sections), ...prose(LESSON.sheets ?? []), ...prose(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...prose(LESSON.acts ?? []), ...prose(LESSON.drills ?? []),
].join('\n');
if (learnerDisplay.includes('—')) die('an em dash reached a learner surface');
if (/honest/i.test(learnerDisplay)) die('"honest" reached a learner surface');
if (!LESSON.intro || LESSON.intro.length < 80) die('Lesson.intro is missing or too short to be the learner surface it is');
if (LESSON.overview?.titleEn !== UNIT.title) die('overview.titleEn and the unit title disagree');
if (LESSON.overview?.subFr !== UNIT.sub) die('overview.subFr and the unit sub disagree');

/* THE REFRAME. */
if (LESSON.reframe !== REFRAME) die('Lesson.reframe is not the corpus REFRAME');
const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
if (reframeSections !== EXPECTED_REFRAME_SECTIONS) die(`the reframe is in ${reframeSections} sections, expected ${EXPECTED_REFRAME_SECTIONS}`);
const reframeUses = production.reduce((n, s) => n + countPhrase(s, REFRAME), 0);
if (reframeUses !== EXPECTED_REFRAME_USES) die(`the reframe appears ${reframeUses} times, expected ${EXPECTED_REFRAME_USES}`);

/* a2.16 AND a2.17 STILL HAVE LESSONS. */
for (const s of production) {
  const m = BEAU_SHAPE.exec(s);
  if (m) die(`a production surface prints ${JSON.stringify(m[0])}, which is a2.16's: ${JSON.stringify(s.slice(0, 100))}`);
  const a = ADVERB_SHAPE.exec(s);
  if (a) die(`a production surface prints the adverb ${JSON.stringify(a[0])}, which is a2.17's: ${JSON.stringify(s.slice(0, 100))}`);
  const c = COMPARATIVE_SHAPE.exec(s);
  if (c) die(`a production surface prints ${JSON.stringify(c[0])}, which is a2.08's: ${JSON.stringify(s.slice(0, 100))}`);
}
if (BEAU_SHAPE.test('beaucoup')) die('BEAU_SHAPE fires on "beaucoup"; the boundary is broken');
if (!BEAU_SHAPE.test('un beau jardin')) die('BEAU_SHAPE does not fire on a real leak');
for (const w of ADVERB_MUST_FIRE) if (!ADVERB_SHAPE.test(w)) die(`ADVERB_SHAPE does not fire on ${JSON.stringify(w)}`);
for (const w of ADVERB_MUST_NOT_FIRE) if (ADVERB_SHAPE.test(w)) die(`ADVERB_SHAPE fires on ${JSON.stringify(w)}, which is a noun or an English word`);

/* THE THREE COLD ADJECTIVES. */
const coldHomes = new Set<string>(UNSEEN_HOMES);
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '?';
  const hit = strings(s).find((x) => UNSEEN_SHAPE.test(x));
  if (hit && !coldHomes.has(sid)) die(`${sid} prints a cold adjective: ${JSON.stringify(hit.slice(0, 90))}`);
}
for (const home of UNSEEN_HOMES) {
  const s = LESSON.sections.find((x) => (x as { id?: string }).id === home);
  if (!s) die(`${home} does not exist`);
  const found = UNSEEN.filter((u) => strings(s).some((x) => hasPhrase(x, u.masculine)));
  if (found.length !== UNSEEN.length) die(`${home} names ${found.length} of the ${UNSEEN.length} cold adjectives`);
}
for (const u of UNSEEN) {
  if (LESSON.itemIds.includes(u.liveRow ?? '')) die(`${u.liveRow} (${u.masculine}) is an itemId`);
  if (ACCORD_ADJECTIFS.some((r) => Object.values(u.forms).some((f) => hasPhrase(r.fr, f)))) die(`a corpus row holds a form of ${u.masculine}`);
}
const coldProduction = qs.filter((q) => (q.format === 'typeIn' || q.format === 'errorSpot')
  && UNSEEN.some((u) => Object.values(u.forms).some((f) => hasPhrase(q.answer ?? '', f))));
if (coldProduction.length < UNSEEN.length) die(`only ${coldProduction.length} free-text questions produce a cold form and there are ${UNSEEN.length} cold adjectives`);
/* PER ADJECTIVE, NOT IN TOTAL. The count alone passes with four questions on one
   word and none on the other two. */
for (const u of UNSEEN) {
  const mine = coldProduction.filter((q) => Object.values(u.forms).some((f) => hasPhrase(q.answer ?? '', f)));
  if (!mine.length) die(`nothing in the exam makes the learner produce a form of ${u.masculine}, which is the ${u.pattern} pattern's only cold test`);
}
/* THE REFRAME MUST STAY SHORT ENOUGH TO RUN MID-SENTENCE. Doctrine §B.4, and a
   count guard cannot see it get longer. */
if (REFRAME.trim().split(/\s+/).length > 12) die(`the reframe is ${REFRAME.trim().split(/\s+/).length} words and the ceiling is 12`);

/* THE GRID, AGAIN, AGAINST THE POST-MERGE ROWS. */
for (const p of PATTERN_ORDER) {
  for (const c of CELL_ORDER) {
    const id = cellId(p, c);
    const row = AUTHORED_ITEMS.find((r) => r.id === id);
    if (!row) die(`no authored row for ${p}/${c}`);
    if (!row.fr.endsWith(`${form(p, c)}.`)) die(`${id} is ${JSON.stringify(row.fr)} and the GRID constant says the adjective is ${JSON.stringify(form(p, c))}`);
    if (!(row.respell ?? '').endsWith(formRespell(p, c))) die(`${id} respells as ${JSON.stringify(row.respell)} and the GRID says ${JSON.stringify(formRespell(p, c))}`);
  }
}

/* THE -EUX MASCULINE PLURAL IS THE SINGULAR. DELIBERATELY. */
{
  const [a, b] = IDENTICAL_CELLS;
  if (form(IDENTICAL_PATTERN, a) !== form(IDENTICAL_PATTERN, b)) {
    die(`${IDENTICAL_PATTERN}/${a} and ${IDENTICAL_PATTERN}/${b} must be the same word.\n`
      + `  An adjective ending in -x has nowhere to put a plural s, so ${OVER_PLURALISED} is not French.\n`
      + '  If you came here to "fix" the missing s, do not.');
  }
  const rowA = AUTHORED_ITEMS.find((r) => r.id === cellId(IDENTICAL_PATTERN, a));
  const rowB = AUTHORED_ITEMS.find((r) => r.id === cellId(IDENTICAL_PATTERN, b));
  const adjA = (rowA?.fr ?? '').split(' ').pop();
  const adjB = (rowB?.fr ?? '').split(' ').pop();
  if (adjA !== adjB) die(`the two identical cells hold ${JSON.stringify(adjA)} and ${JSON.stringify(adjB)} in the SEED rows`);
  const legalOver = new Set([ERRORS_SECTION_ID, QUIZ_SECTION_ID, COLD_SECTION_ID, REVIEW_SECTION_ID]);
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (strings(s).some((x) => OVER_PLURALISED_SHAPE.test(x)) && !legalOver.has(sid)) {
      die(`${sid} prints an over-pluralised form outside the sections that mark it as wrong`);
    }
  }
}

/* THE INVARIABLE CLASS SITS BESIDE A REGULAR ADJECTIVE. */
{
  const inv = LESSON.sections.find((s) => (s as { id?: string }).id === INVARIABLE_SECTION_ID) as { examples?: { fr: string }[] } | undefined;
  if (!inv?.examples) die(`${INVARIABLE_SECTION_ID} has no examples`);
  const pair = CONTRAST_PAIR.map((id) => AUTHORED_ITEMS.find((r) => r.id === id)?.fr ?? '');
  if (inv.examples[0].fr !== pair[0] || inv.examples[1].fr !== pair[1]) {
    die(`${INVARIABLE_SECTION_ID} must open with ${JSON.stringify(pair[0])} then ${JSON.stringify(pair[1])}, in that order`);
  }
  const stem = (s: string) => s.replace(/\s+\S+\.$/, '');
  if (stem(pair[0]) !== stem(pair[1])) die('the contrast pair is not a minimal pair');
}

/* THE GRID SECTION AND THE IDENTICAL SECTION BOTH EXIST AND SAY WHAT THEY MUST. */
for (const sid of [GRID_SECTION_ID, IDENTICAL_SECTION_ID, INVARIABLE_SECTION_ID, COLD_SECTION_ID]) {
  if (!LESSON.sections.some((s) => (s as { id?: string }).id === sid)) die(`${sid} is missing from the lesson`);
}
for (const u of CITED_UNITS) {
  if (!production.some((s) => namesUnitLabel(s, u))) die(`${u} is in CITED_UNITS and is named on no learner surface`);
}

/* THE NASALS, ON THE AUTHORED ROWS, AGAIN. */
{
  let seen = 0; let missed = 0;
  for (const r of ACCORD_ADJECTIFS) {
    const respell = r.respell ?? '';
    for (let i = 0; i < respell.length; i += 1) {
      if (respell[i] !== 'ⁿ') continue;
      const broken = respell.slice(0, i) + 'n' + respell.slice(i + 1);
      if (hasPlainNasalFor(r.fr, broken)) seen += 1; else missed += 1;
    }
    if (hasPlainNasalFor(r.fr, respell)) die(`${r.id} ${JSON.stringify(respell)} is flagged as authored`);
  }
  if (seen + missed !== EXPECTED_SUPERSCRIPTS) die(`${seen + missed} superscripts, expected ${EXPECTED_SUPERSCRIPTS}`);
  if (seen !== EXPECTED_SEEN_NASALS) die(`${seen} seen, expected ${EXPECTED_SEEN_NASALS}`);
  if (missed !== EXPECTED_BLIND_NASALS) die(`${missed} blind, expected ${EXPECTED_BLIND_NASALS}`);
  for (const b of BLIND_NASAL_ROWS) {
    const row = ACCORD_ADJECTIFS.find((r) => r.id === b.id);
    if (!row || !(row.respell ?? '').includes(b.token)) die(`${b.id} no longer contains ${JSON.stringify(b.token)}`);
  }
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
}

/* THE DICTÉE. */
if (DICTATION_IDS.length !== EXPECTED_DICTATION) die(`${DICTATION_IDS.length} dictée targets, expected ${EXPECTED_DICTATION}`);
for (const id of DICTATION_IDS) {
  const row = ACCORD_ADJECTIFS.find((r) => r.id === id);
  if (!row) die(`${id} is a dictation target and is not an authored row`);
  if (dicteeMode(row.fr) !== 'letters') die(`${id} ${JSON.stringify(row.fr)} spells in WORD mode and tests nothing`);
  if (/[œŒ]/u.test(row.fr)) die(`${id} holds U+0153, which the letter bank and the target both drop`);
}
/* AND THE TWO CELLS THAT CANNOT BE TESTED STAY OUT. */
for (const r of GRID_ROWS) {
  const isTarget = DICTATION_IDS.includes(r.id);
  if ((dicteeMode(r.fr) === 'letters') !== isTarget) {
    die(`${r.id} ${JSON.stringify(r.fr)} is ${dicteeMode(r.fr)} mode and ${isTarget ? 'IS' : 'is NOT'} a dictée target`);
  }
}

/* EVERY ROLE-PLAY TURN OFFERS AT LEAST TWO WAYS TO ANSWER. `scenario.logic
   .test.ts` enforces it across the whole seed and no document in this band
   mentions it; a2.03 v1 shipped three turns with one apiece. */
{
  const scen = LESSON.sections.find((s) => s.type === 'scenario') as { turns?: { alts?: unknown[]; userEn?: string; user: string }[] } | undefined;
  if (!scen?.turns?.length) die('the lesson has no scenario turns');
  const thin = scen.turns.map((t, i) => ((t.alts?.length ?? 0) >= 2 ? null : `turn ${i}`)).filter(Boolean);
  if (thin.length) die(`${thin.length} role-play turn(s) offer fewer than two alternatives: ${thin.join(', ')}`);
  const untranslated = scen.turns.map((t, i) => (t.userEn?.trim() ? null : `turn ${i}`)).filter(Boolean);
  if (untranslated.length) die(`${untranslated.length} role-play turn(s) have no userEn: ${untranslated.join(', ')}`);
}

/* THE HUB TITLE CEILING, AND THE TERM-CHIP ROW BUDGET.
   The second was found on a Pixel 6: two chips sharing a row on s13-bank
   overflowed and the truncated one lost the two characters that named its group.
   Both are WIDTHS rather than counts, so both are necessary and not sufficient. */
{
  const over = LESSON.sections.map((s) => (s as { id?: string; title?: string }))
    .filter((s) => (s.title ?? '').length > MISSION_TITLE_MAX);
  if (over.length) die(`${over.length} mission title(s) past ${MISSION_TITLE_MAX} characters: ${over.map((s) => s.id).join(', ')}`);
  for (const s of LESSON.sections) {
    const terms = (s as { terms?: string[] }).terms ?? [];
    const w = terms.reduce((n, t) => n + ((LESSON.terms ?? {})[t]?.term.length ?? 0), 0);
    // 37 is measured: "the ones that never change" + "four shapes" is 37 and
    // renders in full; "words ending in -eux" + "words ending in -if" is 39 and
    // the second was cut. A width, not a count.
    if (w > 37) die(`${(s as { id?: string }).id}'s term chips total ${w} characters and the row budget is 37; the overflow is truncated`);
  }
}

/* THE THREE AUTHORED HEADWORDS ARE IN THE SEED AS BARE, UNGENDERED WORDS. */
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
  const unspeakable = ACCORD_ADJECTIFS_SPEAK_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('voiceflash'));
  if (unspeakable.length) die(`speak target(s) with no voiceflash, which the mic cannot score: ${unspeakable.join(', ')}`);
  const undictatable = DICTATION_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('dictation'));
  if (undictatable.length) die(`dictée target(s) with no dictation drill: ${undictatable.join(', ')}`);
  const gendered = [...MINE].map((id) => itemsById.get(id)).filter((r) => r && (r as { gender?: string }).gender);
  if (gendered.length) die(`row(s) in this lesson carrying a gender: ${gendered.map((r) => r!.id).join(', ')}. They would join a1.03's ending population.`);
  /* NO DUPLICATE fr INSIDE THE THEME, computed the way flashhub-coverage does:
     article stripped, per theme. The theme holds 645 rows in Postgres and zero
     duplicates, and a second copy of one of them is one card served twice. */
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
  + `\n    ${Object.keys(AUTHORED_HEADWORDS).length} HEADWORDS AUTHORED (${Object.keys(AUTHORED_HEADWORDS).join(', ')})`
  + `\n    ${GRID_ROWS.length} grid cells on ONE frame, ${PATTERN_ORDER.length} patterns x ${CELL_ORDER.length} shapes`
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    out of ${SOURCE_THEMES.length} themes: ${SOURCE_THEMES.join(', ')}`
  + `\n    ${ALL_REPAIRS.length} repaired (${RESPELL_REPAIRS_VISIBLE.length} the checker sees, ${RESPELL_REPAIRS_INVISIBLE.length} it does not, ${RESPELL_REPAIRS_HOUSE.length} not about a nasal)`
  + `\n    ${RESPELL_ADDITIONS.length} given a respelling they never had, ${DRILL_ADDITIONS.length} given a flashcard drill`
  + `\n  ${READ_ONLY_ROWS.length} refused, none of them in the seed`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${LESSON.itemIds.length} items`
  + `\n  dictée: ${DICTATION_IDS.length} targets, all LETTERS; ${GRID_ROWS.length - DICTATION_IDS.length} grid cells too long and named`
  + `\n  cold:   ${UNSEEN.map((u) => u.masculine).join(', ')} in ${UNSEEN_HOMES.join(' + ')} and nowhere else`,
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
console.log(`  itemIds resolved: ${ACCORD_ADJECTIFS_ITEM_IDS.length}\n`);
