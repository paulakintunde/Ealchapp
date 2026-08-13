/* Merges a2.15.l1 "Irréguliers 5 : prendre, mettre, battre" into
 * ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-prendre-mettre-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-prendre-mettre-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is canonical and the seed is a CUT of it; the
 * order is always apply, then merge, then publish only when both agree.
 *
 * ── WHY THE CARRY EXISTS ──────────────────────────────────────────────────
 *
 * The seed holds roughly a quarter of the database. This lesson imports out of
 * FIVE themes and several of them sit outside SEED_CUT.themes. A lesson whose
 * `itemIds` resolve to nothing renders empty cards on a device, so the imported
 * rows are carried through the cut rather than assumed present. a2.11 found that
 * NEITHER of the two rows its lesson leaned on hardest was in the seed.
 *
 * ── THE THIRTEENTH ROW, WHICH IS IN NO itemId ─────────────────────────────
 *
 * `fr.a1.transports-quotidiens.041` is repaired by the batch and shown on no
 * screen. It still has to be carried, because Postgres now holds `PRAHⁿDR` and
 * the seed would otherwise hold `PRAHN-druh` for the same row: two copies, one
 * repair, and a divergence nothing in the suite compares. It is deliberately
 * absent from IMPORTABLE_IDS and the merge asserts it is in no itemId.
 *
 * ── THE TWO TRANSFORMS, AND WHY THEY LIVE HERE TOO ────────────────────────
 *
 * The manifest is a read of Postgres taken BEFORE the batch ran, and the batch
 * then changes two kinds of thing about rows it does not own:
 *
 *   1 five respellings repaired   the prendre family's word-internal nasal
 *   2 five drills added           the evidence rows and apprendre gain flashcard
 *
 * Carrying the manifest verbatim would put the pre-batch value in the seed while
 * Postgres held the post-batch one. Both are applied here, from the same
 * constants, and the result is checked field by field.
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
import {
  A211_LINE, A211_UNIT, AUTHORED_IDS as AUTHORED_ID_LIST, AUTHORED_INFINITIVES,
  BATTRE_SHAPE, BLIND_NASALS, BLIND_NASAL_ROWS, CITED_UNITS, COMPOUND_ROWS,
  DICTATION_IDS, DOUBLING_PAIR, DRILL_ADDITIONS, EXPECTED_ACTS,
  EXPECTED_AUTHORED, EXPECTED_BLIND_NASALS, EXPECTED_DICTATION,
  EXPECTED_QUESTIONS, EXPECTED_REFRAME_USES, EXPECTED_SECTIONS,
  EXPECTED_SUPERSCRIPTS, FAMILIES, FRAMES, HEAD_IDS, MISSIONS_BY_VERB,
  MISSION_TITLE_MAX, NEIGHBOUR_SHAPE, OVER_GENERALISED_SHAPE, OWNS_ACT_ID,
  PARADIGM, PARADIGM_ACT_ID, PRENDRE_METTRE, READ_NOT_IMPORTED,
  RESERVED_SHAPE, RESPELL_ADDITIONS, RESPELL_REPAIRS_INVISIBLE,
  RESPELL_REPAIRS_VISIBLE, SHARED_FRAME_VERBS, STEMS, STEM_PRINCIPLE, STEM_UNIT, UNIT,
  HOMOPHONE_FORMS,
  UNSEEN_HOMES, UNSEEN_INFINITIVES, UNSEEN_SHAPE, VERB_ORDER, headIds,
  rowsFor, toItem, type Verb,
} from './data/prendre-mettre-corpus.ts';
import {
  CARRIED_BY_ID, EVIDENCE_IDS, READ_ONLY_ROWS, REPAIR_ONLY_ROWS, SOURCE_THEMES,
} from './data/prendre-mettre-imported.ts';
import {
  ADJACENT_PAIR, DOUBLED_SECTION_ID, ERRORS_SECTION_ID, EVIDENCE_SECTION_ID,
  GRID_SECTION_ID, IDENTITY_SECTION_ID, NOTVENDRE_SECTION_ID,
  PRENDRE_METTRE_ACTS, PRENDRE_METTRE_ITEM_IDS, PRENDRE_METTRE_LESSON,
  PRENDRE_METTRE_SPEAK_IDS, QUIZ_SECTION_ID, REFRAME, SHEET_ID,
  UNSEEN_SECTION_ID, WHICH_SECTION_ID,
} from './data/prendre-mettre-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = PRENDRE_METTRE_LESSON;
const UNIT_ID = UNIT.id;

const AUTHORED_ITEMS: Item[] = PRENDRE_METTRE.map(toItem);
const AUTHORED_IDS = new Set(AUTHORED_ID_LIST);
const RESPELL_REPAIRS = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE];

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
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}

const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
]);
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
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
const countPhrase = (hay: string, needle: string): number => {
  let n = 0; let i = 0;
  const h = hay.toLowerCase(); const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};

/* ─── THE CARRIED ROWS, WITH THE BATCH'S OWN TRANSFORMS APPLIED ──────────── */

const REPAIR_BY_ID = new Map(RESPELL_REPAIRS.map((r) => [r.id, r] as const));
const DRILL_BY_ID = new Map(DRILL_ADDITIONS.map((d) => [d.id, d] as const));

/** Order a drill array the way POSTGRES does: `DRILL_KINDS` order, which is the
 *  enum's declaration order, NOT alphabetical. See the header. */
const drillOrder = (ds: Item['drills']): Item['drills'] =>
  [...(ds ?? [])].sort((x, y) => DRILL_KINDS.indexOf(x) - DRILL_KINDS.indexOf(y)) as Item['drills'];

const MANIFEST_ROWS = [...CARRIED_BY_ID.values()];

const CARRIED: Item[] = MANIFEST_ROWS.map((row) => {
  const fix = REPAIR_BY_ID.get(row.id);
  const drill = DRILL_BY_ID.get(row.id);
  if (!fix && !drill) return row;

  let respell = row.respell;
  if (fix) {
    if (!String(respell ?? '').includes(fix.from)) {
      die(`${row.id} is recorded as ${JSON.stringify(respell)} and the repair expects to find ${JSON.stringify(fix.from)} in it. Regenerate the manifest.`);
    }
    respell = String(respell).split(fix.from).join(fix.to);
  }
  const drills = drill && !(row.drills ?? []).includes(drill.add as Item['drills'][number])
    ? drillOrder([...(row.drills ?? []), drill.add as Item['drills'][number]])
    : row.drills;
  return { ...row, respell, drills };
});

/** Every transform landed on the row it names, and on no other. */
{
  const byIdMap = new Map(CARRIED.map((r) => [r.id, r] as const));
  for (const r of RESPELL_REPAIRS) {
    const now = String(byIdMap.get(r.id)?.respell ?? '');
    if (!now.includes(r.to)) die(`the carry did not apply the repair to ${r.id}: ${JSON.stringify(now)}`);
    if (r.from !== r.to && now.includes(r.from)) die(`the carry left the unrepaired value in ${r.id}: ${JSON.stringify(now)}`);
  }
  for (const d of DRILL_ADDITIONS) {
    if (!(byIdMap.get(d.id)?.drills ?? []).includes(d.add as Item['drills'][number])) die(`the carry did not add the ${d.add} drill to ${d.id}`);
  }
  if (RESPELL_ADDITIONS.length) die(`this build records ${RESPELL_ADDITIONS.length} respell additions and the merge has no path for them`);
  const touched = new Set([...REPAIR_BY_ID.keys(), ...DRILL_BY_ID.keys()]);
  const untouched = CARRIED.filter((r) => !touched.has(r.id));
  const changed = untouched.filter((r) => JSON.stringify(r) !== JSON.stringify(MANIFEST_ROWS.find((x) => x.id === r.id)));
  if (changed.length) die(`the carry changed ${changed.length} row(s) it does not own: ${changed.map((r) => r.id).join(', ')}`);
  console.log(`\n  carry: ${CARRIED.length} rows, ${RESPELL_REPAIRS.length} repaired, ${DRILL_ADDITIONS.length} given a drill, ${untouched.length} byte-identical to the manifest`);
}

/** AND THE REPAIRED ROWS COME OUT CLEAN. The nasal checker is run on the carry
 *  rather than on the manifest, because the carry is what reaches a screen.
 *
 *  NOTE THAT THIS PASSES ON THREE ROWS THE CHECKER CANNOT SEE. `PRAHNDR`,
 *  `a-PRAHNDR` and `sür-PRAHNDR` are all UNFLAGGED before the repair and after
 *  it, because corrections §6's blind spot swallows them. This assertion is
 *  therefore necessary and not sufficient, and the by-name assertion below is
 *  what actually guards those three. */
{
  const flagged = CARRIED.filter((r) => r.respell && hasPlainNasalFor(r.fr, r.respell));
  if (flagged.length) {
    die(`${flagged.length} carried row(s) are flagged by the nasal checker after the carry:\n  ${flagged.map((r) => `${r.id}  ${r.respell}`).join('\n  ')}`);
  }
  for (const r of RESPELL_REPAIRS_INVISIBLE) {
    const now = CARRIED.find((x) => x.id === r.id)?.respell ?? '';
    if (!now.includes('ⁿ')) {
      die(`${r.id} carries ${JSON.stringify(now)} after the repair and it holds no superscript.\n`
        + `  hasPlainNasalFor cannot see this row in either state, so the by-name assertion is the only guard on it.`);
    }
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
 *  fr.a1.cuisine.166: it holds `BATR LAY ZUH`, which is where this build read
 *  the house respelling for a verb nobody had written a headword for, and it is
 *  refused because it holds U+0153. */
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
  die(
    `${missing.length} itemId(s) will NOT be in the seed after this merge: ${missing.slice(0, 6).join(', ')}\n`
    + `  A lesson whose itemIds resolve to nothing renders empty cards on a device. This lesson imports out of\n`
    + `  ${SOURCE_THEMES.length} themes and several are outside SEED_CUT.themes, so the carry is not optional.`,
  );
}

/* ── The claims that ARE the lesson ──────────────────────────────────────── */

if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if (PRENDRE_METTRE.length !== EXPECTED_AUTHORED) die(`${PRENDRE_METTRE.length} authored rows, expected ${EXPECTED_AUTHORED}`);
const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz) die('the lesson has no quiz');
const qs = quizQuestions(quiz);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} quiz questions, expected ${EXPECTED_QUESTIONS}`);
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('more than one quiz; lessonPager renders the first and drops the rest');

const learnerText = [
  ...prose(LESSON.sections), ...prose(LESSON.sheets), ...prose(LESSON.terms),
  ...prose(LESSON.drills), LESSON.intro ?? '', ...prose(LESSON.overview), ...prose(LESSON.acts),
].join('  ');
/** THE WIDER WALK. `prose()` drops `sub`, which on a cardDeck card is prose; this
 *  build put a banned word in one and only the seed-wide test caught it. See the
 *  batch for the full note. */
const displayText = [
  ...display(LESSON.sections), ...display(LESSON.sheets), ...display(LESSON.terms),
  ...display(LESSON.drills), LESSON.intro ?? '', ...display(LESSON.overview), ...display(LESSON.acts),
].join('  ');
if (!LESSON.intro || LESSON.intro.length < 40) die('the lesson intro is missing or too short to be the cover copy');
if (displayText.includes('—')) die('an em dash reached a learner surface');
if (hasPhrase(displayText, 'honest') || hasPhrase(displayText, 'honesty')) die('"honest" is banned from authored content and sons-alphabet.test.ts enforces it across the whole seed');
if (strings(LESSON).some((s) => s.includes('‿'))) die('U+203F UNDERTIE reached the lesson');
if (strings(LESSON).some((s) => /[œŒ]/u.test(s))) die('U+0153 œ reached the lesson; the dictée cannot see it and neither can letterCount()');

/** THE JARGON WALK, WHICH THIS MERGE DID NOT HAVE UNTIL A DEVICE FOUND ONE.
 *
 *  v2 titled act 2 "Three paradigms, eighteen cells" and shipped it. The batch's
 *  list held `paradigm`, `hasPhrase` is boundary-exact, and `paradigm` does not
 *  match `paradigms`. Nothing else in the band checks the plural either.
 *  a2.14's list works round it one word at a time (`infinitive`, `infinitives`);
 *  this closes the class. */
const JARGON = [
  'conjugation', 'conjugate', 'conjugated', 'infinitive', 'conditional',
  'indicative', 'subjunctive', 'morpheme', 'inflection', 'paradigm',
  'orthography', 'phoneme', 'auxiliary', 'first person', 'second person',
  'third person', 'prefix', 'prefixed', 'derivation', 'geminate', 'participle',
];
const hasJargon = (hay: string, j: string) => hasPhrase(hay, j) || hasPhrase(hay, `${j}s`);
{
  const found = JARGON.filter((j) => hasJargon(learnerText, j) || hasJargon(displayText, j));
  if (found.length) {
    die(`grammar jargon on a learner surface: ${found.join(', ')}
`
      + `  NOTE THE PLURAL. hasPhrase is boundary-exact, so a list holding "paradigm" does not catch "paradigms",
`
      + `  which is how v2 shipped an act title that was read off the resume interstitial on a Pixel 6.`);
  }
}

const hits = countPhrase(learnerText, REFRAME);
if (hits !== EXPECTED_REFRAME_USES) die(`the reframe appears ${hits} times, expected exactly ${EXPECTED_REFRAME_USES}`);
if (LESSON.reframe !== REFRAME) die('the lesson reframe field disagrees with the corpus');

const uncited = CITED_UNITS.filter((u) => !hasPhrase(learnerText, u));
if (uncited.length) die(`cited units that appear nowhere: ${uncited.join(', ')}`);

/* ── THE FAMILY RULE, RE-DERIVED. The merge re-checks rather than trusting the
   batch, because the two run at different times and against different sources. */
const PERSON_IX: Record<string, number> = { je: 0, tu: 1, il: 2, nous: 3, vous: 4, ils: 5 };
for (const r of COMPOUND_ROWS) {
  const headForm = PARADIGM[PERSON_IX[r.person!]].forms[r.verb];
  const candidates = FAMILIES[r.verb].map((c) => c.slice(0, c.length - r.verb.length) + headForm);
  if (!candidates.some((f) => hasPhrase(r.fr, f) || hasPhrase(r.fr, `j'${f}`))) {
    die(`${r.id} is a ${r.verb} compound at ${r.person} and carries none of ${candidates.join(', ')}: ${JSON.stringify(r.fr)}`);
  }
}
for (const v of VERB_ORDER) {
  for (const id of headIds(v)) {
    const row = PRENDRE_METTRE.find((x) => x.id === id)!;
    if (!hasPhrase(row.fr, PARADIGM[PERSON_IX[row.person!]].forms[v])) {
      die(`${id} is the ${v} cell at ${row.person} and does not carry it: ${JSON.stringify(row.fr)}`);
    }
  }
}

/* THE STEMS. prendre has three and the other two have one plural stem each. */
for (const v of VERB_ORDER) {
  const plural = [3, 4, 5].map((i) => PARADIGM[i].forms[v].replace(/(ons|ez|ent)$/, ''));
  const distinct = new Set(plural).size;
  if (v === 'prendre' && distinct !== 2) die(`prendre has ${distinct} plural stems and the lesson is built on it having two`);
  if (v !== 'prendre' && distinct !== 1) die(`${v} has ${distinct} plural stems and the lesson calls it the control`);
  if (STEMS[v].length !== (v === 'prendre' ? 3 : 2)) die(`${v} declares ${STEMS[v].length} stems`);
}

/* THE TWO COMPOUNDS THE EXAM GIVES COLD, IN BOTH DIRECTIONS. */
{
  for (const u of UNSEEN_INFINITIVES) {
    if (PRENDRE_METTRE.some((r) => hasPhrase(r.fr, u))) die(`${u} is authored as a corpus row and the exam gives it cold`);
  }
  const homes = LESSON.sections
    .filter((s) => strings(s).some((x) => UNSEEN_SHAPE.test(x)))
    .map((s) => (s as { id?: string }).id ?? '(anon)');
  if (homes.join('|') !== [...UNSEEN_HOMES].join('|')) {
    die(`the unseen compounds appear in [${homes.join(', ')}] and the corpus permits [${UNSEEN_HOMES.join(', ')}]`);
  }
  if (UNSEEN_SHAPE.test(strings(LESSON.terms ?? {}).join('  '))) die('a term names one of the two compounds the exam gives cold');
  const produced = qs.filter((q) => {
    const qq = q as { format?: string; answer?: string };
    return (qq.format === 'typeIn' || qq.format === 'errorSpot') && UNSEEN_SHAPE.test(String(qq.answer ?? ''));
  });
  if (produced.length < 4) die(`${produced.length} free-text question(s) answer with an unseen compound; the exam ships five`);
  /* BOTH of them are in the cold mission, not just one. Mutation harness. */
  const cold = strings(LESSON.sections.find((s) => (s as { id?: string }).id === UNSEEN_SECTION_ID)).join('  ');
  for (const u of UNSEEN_INFINITIVES) {
    if (!hasPhrase(cold, u)) die(`${UNSEEN_SECTION_ID} does not name ${u}; one cold verb is an example and two is a pattern`);
  }
}

/* WHAT THIS LESSON MAY NOT TEACH. */
{
  const reserved = strings(LESSON).filter((s) => RESERVED_SHAPE.test(s));
  if (reserved.length) die(`a past form of one of these three reached a surface: ${reserved.map((s) => JSON.stringify(s.slice(0, 110))).join('\n  ')}`);
  for (const r of PRENDRE_METTRE) {
    if (NEIGHBOUR_SHAPE.test(r.fr)) die(`${r.id} authors ${JSON.stringify(r.fr)}, which belongs to a2.07 or a2.27`);
  }
  const overGen = LESSON.sections
    .filter((s) => strings(s).some((x) => OVER_GENERALISED_SHAPE.test(x)))
    .map((s) => (s as { id?: string }).id);
  if (overGen.join('|') !== [ERRORS_SECTION_ID, QUIZ_SECTION_ID].join('|')) {
    die(`the over-generalised form appears in [${overGen.join(', ')}] and belongs in ${ERRORS_SECTION_ID} and one exam distractor`);
  }
}

/* THE RESPELLINGS. */
for (const r of PRENDRE_METTRE) {
  if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} closes a nasal with a plain n: ${JSON.stringify(r.respell)}`);
}
{
  const blind: string[] = [];
  let sup = 0;
  for (const r of PRENDRE_METTRE) {
    const re = r.respell ?? '';
    for (let i = 0; i < re.length; i += 1) {
      if (re[i] !== 'ⁿ') continue;
      sup += 1;
      if (!hasPlainNasalFor(r.fr, re.slice(0, i) + 'n' + re.slice(i + 1))) blind.push(`${r.id} [${re.slice(0, i)}n${re.slice(i + 1)}]`);
    }
  }
  if (sup !== EXPECTED_SUPERSCRIPTS) die(`${sup} superscripts, expected ${EXPECTED_SUPERSCRIPTS}`);
  if (blind.length !== EXPECTED_BLIND_NASALS) die(`${blind.length} invisible superscripts, expected ${EXPECTED_BLIND_NASALS}`);
  if (blind.join('|') !== BLIND_NASALS.join('|')) die(`the checker's blind spots have moved:\n  ${blind.join('\n  ')}`);
}
for (const b of BLIND_NASAL_ROWS) {
  const row = PRENDRE_METTRE.find((r) => r.id === b.id);
  if (!row || !(row.respell ?? '').includes(b.token)) {
    die(`${b.id} no longer carries ${JSON.stringify(b.token)}.\n  ${b.why}\n  hasPlainNasalFor CANNOT see this one, so this assertion is the only guard on it.`);
  }
}
/* AND THE FIVE REPAIRED ROWS ARE ASSERTED BY NAME, because three of the five are
   invisible to the shared checker in both states. */
for (const r of RESPELL_REPAIRS) {
  const now = CARRIED.find((x) => x.id === r.id)?.respell ?? '';
  if (now !== r.to && !now.includes(r.to)) die(`${r.id} carries ${JSON.stringify(now)} and this build ships ${JSON.stringify(r.to)}`);
}

/* EVERY CELL RESPELLING IS INSIDE THE ROW THAT TEACHES IT.
   FOUND BY THE MUTATION HARNESS: changing the grid respelling of `prennent` from
   PREN to PRENN moved the sheet and the grid together, because the sheet renders
   FROM the grid, so the sheet-vs-grid check above passed on a lesson whose card
   said one thing and whose reference said another. a2.13 §6.2 in the respelling
   dimension: the third copy is the ROW, and it is the one the learner is scored
   on. */
for (const v of VERB_ORDER) {
  for (const id of headIds(v)) {
    const row = PRENDRE_METTRE.find((r) => r.id === id)!;
    const cell = PARADIGM[PERSON_IX[row.person!]].respells[v];
    if (!(row.respell ?? '').includes(cell)) {
      die(`${id} respells ${JSON.stringify(row.respell)} and the grid says the ${v} verb is ${JSON.stringify(cell)}.
`
        + `  The sheet prints the grid and the card prints the row. If they disagree the learner reads one pronunciation
`
        + `  and is scored on another, with every other gate green.`);
    }
  }
}

/* NO EAR QUESTION BETWEEN TWO MEMBERS OF ONE HOMOPHONE GROUP, AND EVERY ONE SAYS
   WHAT IS HEARD. Both were missed by this layer until the mutation harness asked
   it: the batch had them and the merge did not, which is exactly the shape of a
   guard that exists in one place and is trusted in two. */
{
  const ears = qs.filter((q) => (q as { format?: string }).format === 'listenChoose');
  if (!ears.length) die('the lesson ships no listenChoose; the audible plural is the one thing the ear can settle here');
  for (const q of ears) {
    const opts = ((q as { opts?: string[] }).opts ?? []);
    for (const group of HOMOPHONE_FORMS) {
      for (const x of group) for (const y of group) {
        if (x === y) continue;
        for (let i = 0; i < opts.length; i += 1) for (let j = 0; j < opts.length; j += 1) {
          if (i !== j && opts[i].replace(x, y) === opts[j]) {
            die(`a listenChoose offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}, which differ only by ${x}/${y}.
`
              + `  They are one sound, so the question has no correct answer and marking one right certifies a bug.`);
          }
        }
      }
    }
    if (!(q as { say?: string }).say) die('a listenChoose has no "say"; ListenChooseCard would fall back to speaking opts[correct], which speaks the answer');
  }
}

/* THE FRAME, AND IT IS THE INVERSE OF a2.14's CHECK. */
{
  const [a, b] = SHARED_FRAME_VERBS;
  if (FRAMES[a].complement !== FRAMES[b].complement) die(`${a} and ${b} no longer share a frame; the stem is the teaching and the back of the sentence must not move`);
  for (const v of VERB_ORDER) {
    for (const id of headIds(v)) {
      const row = PRENDRE_METTRE.find((r) => r.id === id)!;
      const words = FRAMES[v].complement.split(/\s+/u).length;
      const tail = row.fr.replace(/[.!?…]\s*$/u, '').trim().split(/\s+/u).slice(-words).join(' ');
      if (tail !== FRAMES[v].complement) die(`${id} does not end on the ${v} frame: ${JSON.stringify(row.fr)}`);
    }
  }
}

/* battre IS THE SMALL ONE. */
{
  const rows = Object.fromEntries(VERB_ORDER.map((v) => [v, rowsFor(v).length])) as Record<Verb, number>;
  if (!(rows.battre < rows.mettre && rows.mettre < rows.prendre)) {
    die(`authored rows per verb: ${VERB_ORDER.map((v) => `${v} ${rows[v]}`).join(', ')}. battre must have strictly fewer than mettre and mettre than prendre.`);
  }
  if (headIds('battre').length >= headIds('prendre').length) die('battre no longer has fewer paradigm cells than prendre');
  if (MISSIONS_BY_VERB.battre.length >= MISSIONS_BY_VERB.prendre.length) die('battre no longer has fewer missions than prendre');
  for (const id of MISSIONS_BY_VERB.battre) {
    const sec = LESSON.sections.find((s) => (s as { id?: string }).id === id);
    if (!sec) die(`MISSIONS_BY_VERB names ${id}, which is not a section`);
    if (!strings(sec).some((x) => BATTRE_SHAPE.test(x))) die(`${id} is declared a battre mission and names no form of it`);
  }
}

/* ── THE LAYOUT CLAIMS, BY SECTION ID ────────────────────────────────────── */

const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);

const grid = byId(GRID_SECTION_ID) as { examples?: { fr: string }[] } | undefined;
if (!grid) die(`${GRID_SECTION_ID} is missing`);
if ((grid.examples ?? []).length !== PARADIGM.length) die(`${GRID_SECTION_ID} has ${(grid.examples ?? []).length} lines, expected ${PARADIGM.length}`);
(grid.examples ?? []).forEach((ex, i) => {
  for (const v of VERB_ORDER) {
    if (!hasPhrase(ex.fr, PARADIGM[i].forms[v])) die(`${GRID_SECTION_ID} line ${i} is missing the ${v} form ${PARADIGM[i].forms[v]}`);
  }
});

const identity = byId(IDENTITY_SECTION_ID) as { examples?: { fr: string }[] } | undefined;
if (!identity) die(`${IDENTITY_SECTION_ID} is missing`);
(identity.examples ?? []).forEach((ex, i) => {
  const head = PARADIGM[i].forms.prendre;
  for (const front of ['', 'ap', 'com']) {
    const form = front + head;
    if (!hasPhrase(ex.fr, form) && !hasPhrase(ex.fr, `j'${form}`)) {
      die(`${IDENTITY_SECTION_ID} line ${i} is missing ${JSON.stringify(form)}`);
    }
  }
});

/* THE DOUBLING PAIR, BY INDEX, WITH a2.09 IN THE SAME SECTION. */
{
  const doubled = byId(DOUBLED_SECTION_ID) as { examples?: { fr: string }[] } | undefined;
  if (!doubled) die(`${DOUBLED_SECTION_ID} is missing`);
  const frs = (doubled.examples ?? []).map((e) => e.fr);
  const ia = frs.indexOf(PRENDRE_METTRE.find((r) => r.id === ADJACENT_PAIR[0])!.fr);
  const ib = frs.indexOf(PRENDRE_METTRE.find((r) => r.id === ADJACENT_PAIR[1])!.fr);
  if (ia < 0 || ib < 0 || ib - ia !== 1) die(`${DOUBLED_SECTION_ID} does not put the two halves of the doubling pair adjacent (${ia}, ${ib})`);
  if (!hasPhrase(prose(doubled).join('  '), STEM_UNIT)) die(`${DOUBLED_SECTION_ID} does not name ${STEM_UNIT}`);
  /* AND THE MECHANISM IS STATED, NOT JUST THE UNIT NUMBER. Mutation harness. */
  if (!strings(LESSON).some((x) => x.includes(STEM_PRINCIPLE))) {
    die(`the sentence tying the doubled n to the silent ending appears nowhere:
  ${JSON.stringify(STEM_PRINCIPLE)}`);
  }
  if (!hasPhrase(STEM_PRINCIPLE, STEM_UNIT)) die(`STEM_PRINCIPLE no longer names ${STEM_UNIT}`);
}
if (!strings(byId(NOTVENDRE_SECTION_ID)).some((s) => s.includes(A211_LINE))) {
  die(`${NOTVENDRE_SECTION_ID} does not carry the line that closes ${A211_UNIT}'s loop`);
}

for (const id of [WHICH_SECTION_ID, EVIDENCE_SECTION_ID, ERRORS_SECTION_ID, UNSEEN_SECTION_ID]) {
  if (!byId(id)) die(`${id} is missing`);
}
for (const id of EVIDENCE_IDS) {
  const f = CARRIED_BY_ID.get(id)?.fr ?? '';
  if (!strings(byId(EVIDENCE_SECTION_ID)).some((s) => s.includes(f))) die(`${EVIDENCE_SECTION_ID} does not draw ${id}`);
}

/* THE OWNS ACT IS THE HEAVIEST, ALONE, AND THE UNSEEN MISSION IS LAST. */
{
  const sizes = PRENDRE_METTRE_ACTS.map((a) => a.sections.length);
  const ix = PRENDRE_METTRE_ACTS.findIndex((a) => a.id === OWNS_ACT_ID);
  const max = Math.max(...sizes);
  if (sizes[ix] !== max || sizes.filter((n) => n === max).length !== 1) {
    die(`the Owns act (${OWNS_ACT_ID}) is not the heaviest alone: ${sizes.map((n, i) => `${PRENDRE_METTRE_ACTS[i].id}:${n}`).join(' ')}`);
  }
  const par = PRENDRE_METTRE_ACTS.findIndex((a) => a.id === PARADIGM_ACT_ID);
  if (sizes[par] >= sizes[ix]) die(`the paradigm act (${sizes[par]}) is not smaller than the family act (${sizes[ix]})`);
  const inActs = PRENDRE_METTRE_ACTS.flatMap((a) => a.sections);
  const ids = LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
  if (inActs.join('|') !== ids.join('|')) die('the act running order does not match the section order');
  if (ids.indexOf(QUIZ_SECTION_ID) - ids.indexOf(UNSEEN_SECTION_ID) !== 1) {
    die(`${UNSEEN_SECTION_ID} is not the last mission before the exam`);
  }
}

/* THE SHEET, AND ITS RESPELLINGS AGAINST THE CARDS. a2.14 §5. */
{
  const DRAWABLE = new Set(['teach', 'letterGrid', 'table']);
  const sh = (LESSON.sheets ?? [])[0] as { id?: string; sections?: { id?: string; type?: string; rows?: string[][] }[] };
  if (!sh || sh.id !== SHEET_ID) die(`sheet id ${sh?.id}, expected ${SHEET_ID}`);
  for (const s of sh.sections ?? []) {
    if (!DRAWABLE.has(s.type ?? '')) die(`the sheet holds a "${s.type}" section; ReferenceSheet.tsx draws teach, letterGrid and table and nothing else`);
  }
  const say = (sh.sections ?? []).find((s) => s.id === 'sheet-say');
  if (!say) die('sheet-say is missing');
  (say.rows ?? []).forEach((row, i) => {
    VERB_ORDER.forEach((v, j) => {
      if (row[j + 1] !== PARADIGM[i].respells[v]) {
        die(`sheet-say says ${JSON.stringify(row[j + 1])} for ${v} at ${PARADIGM[i].person} and the grid says ${JSON.stringify(PARADIGM[i].respells[v])}`);
      }
    });
  });
  const declared = new Set((LESSON.sheets ?? []).map((s) => s.id));
  for (const s of LESSON.sections) {
    const ref = (s as { sheetId?: string }).sheetId;
    if (ref && !declared.has(ref)) die(`${(s as { id?: string }).id} names sheet ${ref}, which this lesson does not declare`);
  }
}

/* THE DICTÉE. */
if (DICTATION_IDS.length !== EXPECTED_DICTATION) die(`${DICTATION_IDS.length} dictée targets, expected ${EXPECTED_DICTATION}`);
for (const id of DICTATION_IDS) {
  const row = PRENDRE_METTRE.find((r) => r.id === id);
  if (!row) die(`${id} is a dictation target and is not an authored row`);
  if (dicteeMode(row.fr) !== 'letters') die(`${id} ${JSON.stringify(row.fr)} spells in WORD mode and tests nothing`);
  if (/[œŒ]/u.test(row.fr)) die(`${id} holds U+0153, which the letter bank and the target both drop`);
}
if (!DICTATION_IDS.includes(DOUBLING_PAIR.single) || !DICTATION_IDS.includes(DOUBLING_PAIR.doubled)) {
  die('the dictée does not carry both halves of the doubling pair, which is the one thing a typed surface can test here');
}

/* THE HUB TITLE CEILING. */
{
  const over = LESSON.sections.map((s) => (s as { id?: string; title?: string }))
    .filter((s) => (s.title ?? '').length > MISSION_TITLE_MAX);
  if (over.length) die(`${over.length} mission title(s) past ${MISSION_TITLE_MAX} characters: ${over.map((s) => s.id).join(', ')}`);
}

/* THE THREE AUTHORED INFINITIVES ARE IN THE SEED AS BARE, UNGENDERED WORDS. */
for (const [word, id] of Object.entries(AUTHORED_INFINITIVES)) {
  const row = AUTHORED_ITEMS.find((r) => r.id === id);
  if (!row) die(`${id} authors ${word} and is not in the authored set`);
  if (row.fr !== word) die(`${id} is recorded as ${word} and holds ${JSON.stringify(row.fr)}`);
  if ((row as { gender?: string }).gender) die(`${id} carries a gender; infinitives are not nouns`);
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
  const unspeakable = PRENDRE_METTRE_SPEAK_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('voiceflash'));
  if (unspeakable.length) die(`speak target(s) with no voiceflash, which the mic cannot score: ${unspeakable.join(', ')}`);
  const undictatable = DICTATION_IDS.filter((id) => !(itemsById.get(id)!.drills ?? []).includes('dictation'));
  if (undictatable.length) die(`dictée target(s) with no dictation drill: ${undictatable.join(', ')}`);
  const gendered = [...MINE].map((id) => itemsById.get(id)).filter((r) => r && (r as { gender?: string }).gender);
  if (gendered.length) die(`row(s) in this lesson carrying a gender: ${gendered.map((r) => r!.id).join(', ')}. They would join a1.03's ending population.`);
  /* AND THE REPAIR-ONLY ROW IS CARRIED AND IN NO itemId. */
  for (const r of REPAIR_ONLY_ROWS) {
    if (LESSON.itemIds.includes(r.id)) die(`${r.id} is repaired and carried and it is in itemIds; it is shown on no screen`);
    if (!itemsById.has(r.id)) die(`${r.id} is repaired in Postgres and would not reach the seed, so the two copies would disagree`);
  }
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
  + `\n    ${Object.keys(AUTHORED_INFINITIVES).length} INFINITIVES AUTHORED (${Object.keys(AUTHORED_INFINITIVES).join(', ')}), a first in this band`
  + `\n    ${HEAD_IDS.length} paradigm cells on 2 frames (${FRAMES.prendre.complement} · ${FRAMES.battre.complement}), ${COMPOUND_ROWS.length} compound sentences`
  + `\n  ${carriedNew} row(s) newly CARRIED through the seed cut so no card draws blank`
  + `\n    out of ${SOURCE_THEMES.length} themes: ${SOURCE_THEMES.join(', ')}`
  + `\n    ${RESPELL_REPAIRS.length} of them repaired (${RESPELL_REPAIRS_VISIBLE.length} the checker sees, ${RESPELL_REPAIRS_INVISIBLE.length} it does not) and ${REPAIR_ONLY_ROWS.length} carried without being shown`
  + `\n  ${READ_ONLY_ROWS.length} refused, none of them in the seed`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${LESSON.itemIds.length} items`
  + `\n  dictée: ${DICTATION_IDS.length} targets, all LETTERS and none holding the ligature the bank cannot see`
  + `\n  unseen: ${UNSEEN_INFINITIVES.join(', ')} in ${UNSEEN_HOMES.join(' + ')} and nowhere else`,
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
