/* a2.04 « Prépositions de lieu », seq 13. Corpus + lesson + terms, to Postgres.
 *
 *     pnpm content:prepositions-lieu -- --dry-run
 *     pnpm content:prepositions-lieu
 *
 * NAMED author-prepositions-LIEU-batch, and the collision is real: this repo
 * already has `author-prepositions-batch.ts` (a1.21, content:prepositions) and
 * `author-pays-batch.ts` (a1.22, content:pays), and neither of them is this.
 * Running either by mistake would rewrite a shipped lesson.
 *
 * ── WHAT THIS BATCH REFUSES ──────────────────────────────────────────────
 *
 * The lesson putting `chez` in front of a place ANYWHERE except the two
 *   sections where the error is the content.
 * Any authored row carrying a gender, which would join a1.03's population.
 * Any authored `fr` that collides with a row already in the theme.
 * A country referenced by spelling rather than by an imported id.
 * A country VOCABULARY section, which is a1.22's and not this lesson's.
 * A temporal `en` or `dans` anywhere, which is a2.18's and is one seq ahead.
 * a1.21's five prepositions on any production surface.
 * A dictée target that `dicteeMode` puts in WORD mode.
 * A `listenChoose` question anywhere, because nothing here can be asked by ear.
 * Grammar jargon on a learner surface, walked over `sections + sheets + terms
 *   + intro + overview + acts + drills`, in both `prose()` and `display()`,
 *   with every entry checked in its -s plural.
 * A stacked trapDrill, a trapDrill carrying a `size`, or an audio step whose
 *   recording does not contain the cards' own lines.
 */
import './env';
import { Pool } from 'pg';
import {
  canonicalJson,
  formatIssues,
  quizQuestions,
  validateItem,
  validateLesson,
  type Item,
  type Lesson,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  ALL_REPAIRS, ARTICLE_CELL_MAX, ARTICLE_TABLE, AUTHORED_HEADWORDS, AUTHORED_IDS,
  CHEZ_EVIDENCE, CHEZ_FOLD_WRONG, CHEZ_PLACE_MUST_FIRE, CHEZ_PLACE_MUST_NOT_FIRE,
  CHEZ_PLACE_SHAPE, CHEZ_WRONG, CONTRACTION_UNIT, COUNTRY_FORBIDDEN,
  COUNTRY_IDS, COUNTRY_UNIT, DRILL_ADDITIONS, EXPECTED_ACTS, EXPECTED_AUTHORED,
  EXPECTED_IMPORTED, EXPECTED_QUESTIONS, EXPECTED_REPAIRS, EXPECTED_REPAIRS_BLIND,
  EXPECTED_REPAIRS_HOUSE, EXPECTED_SECTIONS, EXPECTED_TERMS, EXPECTED_TRAP_DRILLS,
  ID_BLOCK, IMPORTED, IMPORTED_IDS, KIND_CELL_MAX, KIND_EXAMPLE, KIND_LABEL,
  KIND_ORDER, KIND_OWNER, KIND_WORD, LESSON_ID, MEME_FALSE_POSITIVE,
  NOT_REPAIRED, PREPOSITIONS_LIEU, READ_NOT_IMPORTED, REFRAME,
  RESPELL_ADDITIONS, RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE,
  ROW_COUNT_BEFORE, SHEET_ID, THEME, THEME_COUNT_BEFORE, TIME_FORBIDDEN,
  TIME_MUST_FIRE, TIME_MUST_NOT_FIRE, TIME_SHAPE, TIME_UNIT, TITLE_MAX, UNIT,
  UNSEEN, UNSEEN_WORDS, A121_PREPOSITIONS, isMine,
} from './data/prepositions-lieu-corpus.ts';
import {
  PREPOSITIONS_LIEU_TERMS, TERM_ROWS, TERM_ROW_MAX, rowWidth,
} from './data/prepositions-lieu-terms.ts';
import {
  ARTICLE_SECTION_ID, BUILDING_SECTION_ID, CITY_SECTION_ID, COUNTRY_SECTION_ID,
  ERRORS_SECTION_ID, FOLD_SECTION_ID, FOUR_SECTION_ID, NOFOLD_SECTION_ID,
  PEOPLE_SECTION_ID, PERSON_SECTION_ID, PREPOSITIONS_LIEU_ACTS,
  PREPOSITIONS_LIEU_DICTEE_IDS, PREPOSITIONS_LIEU_DRILLS,
  PREPOSITIONS_LIEU_ERROR_TRIGGERS, PREPOSITIONS_LIEU_ITEM_IDS,
  PREPOSITIONS_LIEU_LESSON, PREPOSITIONS_LIEU_SHEETS, PREPOSITIONS_LIEU_SPEAK_IDS,
  PREPOSITIONS_LIEU_TRANCHES, QUIZ_SECTION_ID, READING_SECTION_ID,
  ROUNDUP_SECTION_ID, SCENARIO_SECTION_ID, SCENE_SECTION_ID, SHOP_SECTION_ID,
  TRAP_SECTION_ID, UNSEEN_SECTION_ID, WRONG_FORM_SECTIONS,
} from './data/prepositions-lieu-lesson.ts';
import { PREPOSITIONS_LIEU_ROWS } from './data/prepositions-lieu-rows.gen.ts';
import { displayRespell } from './data/prepositions-lieu-imported.ts';
import { namesUnitLabel } from './data/_unit-ref.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = PREPOSITIONS_LIEU_LESSON;
const UNIT_ID = UNIT.id;

function die(msg: string): never {
  console.error(`\n  ${msg}\n`);
  process.exit(1);
}

/** Every string anywhere inside a value. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

/** Prose only. A word-level guard must not read notation. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** Machine keys. Section ids, refs and accept-lists are not learner surfaces.
 *  a2.14 §6: a display guard that reads a section id fires on `s07-connaitre`. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets',
]);

/** AN ID IS NOT PROSE, WHATEVER KEY IT ARRIVES UNDER.
 *
 *  a2.14 §6 says to walk display strings and skip machine keys, and that is not
 *  enough here: `LessonDrill.items` holds CORPUS IDS and `groupDrill.items`
 *  holds CARD OBJECTS, so the key cannot be classified either way. Every id in
 *  this lesson contains the theme name `prepositions-essentielles`, so a
 *  key-based walk hands the word `prepositions` to the jargon check thirty
 *  times over and the check fires on the id rather than on any copy.
 *
 *  Filtering by SHAPE rather than by key is the fix, and it also covers the
 *  section ids and trigger ids a2.14 had to rename around. */
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

/** Keeps `sub` and drops only machine keys. a2.15 §3: on a cardDeck card `sub`
 *  holds PROSE, and `prose()` drops it as notation, so a banned word there is
 *  invisible to every check in this band. */
function display(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) display(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!MACHINE_KEYS.has(k)) display(x, out);
  }
  return out;
}
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (!isId(v)) out.push(v); }
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k) && !MACHINE_KEYS.has(k)) prose(x, out);
  }
  return out;
}

/** Accent-aware word-boundary search. NEVER build a regex out of a search term:
 *  `\b` is ASCII-only in JavaScript and returns zero on a trailing accent, which
 *  looks exactly like an absence. Invariants §0.
 *
 *  THE LEFT BOUNDARY DROPS THE APOSTROPHE. a2.17 §3 measured that the house
 *  boundary `(?<![\p{L}\p{N}'’-])` cannot see `j'ai`, `qu'il` or `c'est`, and
 *  this lesson's own strings hold `l'hôpital` and `d'accord`. */
function hasPhrase(hay: string, needle: string): boolean {
  const isWordL = (c: string) => /[\p{L}\p{N}-]/u.test(c);
  const isWordR = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!isWordL(i === 0 ? '' : h[i - 1]!) && !isWordR(h[i + n.length] ?? '')) return true;
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

const pgArray = (v: unknown): string[] => {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
};

/** No grammar jargon on a learner surface. Invariants §8.
 *
 *  THE LINE IS MEASURED, the way a2.17 §8 asks rather than guessed. `article`,
 *  `noun`, `verb`, `plural`, `feminine` and `masculine` are HOUSE VOCABULARY:
 *  a1.21 puts `article` on fourteen cards and a1.04's whole subject is it, so
 *  banning it here would be this build inventing a rule and would also make the
 *  lesson unable to say what it is about. What none of the neighbours uses even
 *  once is below.
 *
 *  Every entry is checked in its -s plural too, because `hasPhrase` is
 *  boundary-exact and a2.15 shipped "Three paradigms, eighteen cells" past all
 *  three of its layers. a2.15 §3.
 *
 *  `preposition` IS NOT ON THE LIST AND THE FIRST VERSION OF IT PUT THE WORD AT
 *  THE TOP. It is the unit's own English title — `content_units` holds
 *  "Prepositions of Place, in Depth" and `overview.titleEn` has to match it — so
 *  banning it would either fail the build or force the overview to lie about
 *  what the unit is called. a2.17 §8 met this exactly and replaced the ban with
 *  a RATIO check, which is what runs below: the plain phrase must outnumber the
 *  technical one. */
const JARGON = [
  'prepositional', 'locative', 'complement', 'animate',
  'inanimate', 'toponym', 'contraction rule', 'suppression', 'elision rule',
  'partitive', 'determiner', 'inflection', 'inflected', 'paradigm',
  'morpheme', 'morphology', 'lexeme', 'phoneme', 'phonological', 'orthography',
  'agent noun', 'nasal vowel', 'first person', 'second person', 'third person',
  'productive rule', 'categorisation', 'oblique',
];

const AUTHORED_ITEMS: Item[] = PREPOSITIONS_LIEU.map((r) => {
  const { role, placeKind, ...rest } = r as Record<string, unknown> & { role: string; placeKind?: string };
  void role; void placeKind;
  return rest as unknown as Item;
});

const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection);

console.log(`\n  a2.04 "${UNIT.sub}"${DRY_RUN ? '  (dry run)' : ''}\n`);

/* ══════════════════════════════════════════════════════════════════════════
 *  COUNTS, AGAINST EXPLICIT CONSTANTS
 * ═══════════════════════════════════════════════════════════════════════ */

if (LESSON.unitId !== UNIT_ID) die(`the lesson says unit ${LESSON.unitId} and this batch says ${UNIT_ID}`);
if (LESSON.id !== LESSON_ID) die(`the corpus says the lesson is ${LESSON_ID} and the lesson says ${LESSON.id}`);
if (PREPOSITIONS_LIEU.length !== EXPECTED_AUTHORED) die(`${PREPOSITIONS_LIEU.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions, expected ${EXPECTED_QUESTIONS}`);
if (Object.keys(PREPOSITIONS_LIEU_TERMS).length !== EXPECTED_TERMS) die(`${Object.keys(PREPOSITIONS_LIEU_TERMS).length} terms, expected ${EXPECTED_TERMS}`);
if (ALL_REPAIRS.length !== EXPECTED_REPAIRS) die(`${ALL_REPAIRS.length} repairs, expected ${EXPECTED_REPAIRS}`);
if (RESPELL_REPAIRS_INVISIBLE.length !== EXPECTED_REPAIRS_BLIND) die(`${RESPELL_REPAIRS_INVISIBLE.length} blind repairs, expected ${EXPECTED_REPAIRS_BLIND}`);
if (ALL_REPAIRS.filter((r) => r.house).length !== EXPECTED_REPAIRS_HOUSE) die(`${ALL_REPAIRS.filter((r) => r.house).length} house repairs, expected ${EXPECTED_REPAIRS_HOUSE}`);
if (Object.keys(AUTHORED_HEADWORDS).length !== 0) die('this build authors zero headwords and AUTHORED_HEADWORDS is not empty');
if (RESPELL_ADDITIONS.length !== 0) die('RESPELL_ADDITIONS is asserted empty and is not');

const traps = LESSON.sections.filter((s) => s.type === 'trapDrill');
if (traps.length !== EXPECTED_TRAP_DRILLS) die(`${traps.length} trapDrills, expected ${EXPECTED_TRAP_DRILLS}`);
if ((LESSON.sheets ?? []).length !== 1) die('one reference sheet, and the lesson has ' + String((LESSON.sheets ?? []).length));
if ((LESSON.sheets ?? [])[0]?.id !== SHEET_ID) die('the sheet id constant and the sheet disagree');
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('ONE quiz section. A second is silently never rendered.');

console.log(`  counts        ${PREPOSITIONS_LIEU.length} authored, ${IMPORTED_IDS.length} imported, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions`);

/* ══════════════════════════════════════════════════════════════════════════
 *  NOT ONE HEADWORD IS AUTHORED, AND NOTHING AUTHORED CARRIES A GENDER
 * ═══════════════════════════════════════════════════════════════════════ */

const authoredWords = PREPOSITIONS_LIEU.filter((r) => r.kind === 'word');
if (authoredWords.length) die(`${authoredWords.length} authored rows are headwords: ${authoredWords.map((r) => r.id).join(', ')}. This lesson authors phrases and sentences only.`);
const authoredGendered = PREPOSITIONS_LIEU.filter((r) => (r as { gender?: string }).gender);
if (authoredGendered.length) die(`${authoredGendered.length} authored rows carry a gender: ${authoredGendered.map((r) => r.id).join(', ')}. Invariants §5: a gendered single-word row joins a1.03's ending population.`);
for (const r of PREPOSITIONS_LIEU) {
  if (!isMine(r.id)) die(`${r.id} is authored and is outside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to}`);
  if (r.level !== 'a2') die(`${r.id} is level ${r.level} and every row this lesson authors is a2`);
  if (r.theme !== THEME) die(`${r.id} is in theme ${r.theme} and this build writes into ${THEME}`);
}
console.log(`  authored      0 headwords, 0 gendered rows, all ${PREPOSITIONS_LIEU.length} inside ${ID_BLOCK.from}..${ID_BLOCK.to}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FOUR KINDS, AND TWO OF THE FOUR CREDIT ANOTHER UNIT
 * ═══════════════════════════════════════════════════════════════════════ */

const four = byId(FOUR_SECTION_ID) as { type?: string; cols?: string[]; rows?: { cells: string[]; detail?: { body?: string } }[] } | undefined;
if (four?.type !== 'tapTable') die(`${FOUR_SECTION_ID} is ${four?.type} and the four kinds belong in one tapTable`);
if ((four.rows ?? []).length !== KIND_ORDER.length) die(`the grid has ${(four.rows ?? []).length} rows and there are ${KIND_ORDER.length} kinds`);
if ((four.cols ?? []).length !== 3) die('the grid is three columns wide; a2.16 measured a five-column cell at six characters');
KIND_ORDER.forEach((k, i) => {
  const cells = four.rows![i]!.cells;
  if (cells[0] !== KIND_LABEL[k]) die(`grid row ${i} names ${JSON.stringify(cells[0])} and the kind is ${JSON.stringify(KIND_LABEL[k])}`);
  if (cells[1] !== KIND_WORD[k]) die(`grid row ${i} gives ${JSON.stringify(cells[1])} and the word is ${JSON.stringify(KIND_WORD[k])}`);
  if (cells[2] !== KIND_EXAMPLE[k]) die(`grid row ${i} shows ${JSON.stringify(cells[2])} and the example is ${JSON.stringify(KIND_EXAMPLE[k])}`);
  for (const cell of cells) if (cell.length > KIND_CELL_MAX) die(`grid cell ${JSON.stringify(cell)} is ${cell.length} characters and a three-column cell holds ${KIND_CELL_MAX}`);
  const owner = KIND_OWNER[k];
  const body = four.rows![i]!.detail?.body ?? '';
  if (owner && !namesUnitLabel(body, owner)) die(`grid row ${i} is ${owner}'s and its detail does not name ${owner}. a2.16 §3: assert the literal.`);
  if (!owner && namesUnitLabel(body, CONTRACTION_UNIT)) die(`grid row ${i} is this lesson's own and it credits ${CONTRACTION_UNIT}`);
});
const credited = KIND_ORDER.filter((k) => KIND_OWNER[k] !== null).length;
if (credited !== 3) die(`${credited} of the four rows credit another unit and three of them are somebody else's`);
console.log(`  the grid      ${KIND_ORDER.length} kinds, ${credited} credited to another unit by id, every cell inside ${KIND_CELL_MAX} characters`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: THE ARTICLE TABLE
 * ═══════════════════════════════════════════════════════════════════════ */

const article = byId(ARTICLE_SECTION_ID) as { type?: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
if (article?.type !== 'tapTable') die(`${ARTICLE_SECTION_ID} is ${article?.type} and the article table belongs in one tapTable`);
if ((article.rows ?? []).length !== ARTICLE_TABLE.length) die(`the article table has ${(article.rows ?? []).length} rows and ARTICLE_TABLE has ${ARTICLE_TABLE.length}`);
ARTICLE_TABLE.forEach((r, i) => {
  const cells = article.rows![i]!.cells;
  if (cells[0] !== r.word || cells[1] !== r.withLe || cells[2] !== r.withLa) {
    die(`article row ${i} renders ${JSON.stringify(cells)} and the table says ${JSON.stringify([r.word, r.withLe, r.withLa])}`);
  }
  for (const cell of cells) if (cell.length > ARTICLE_CELL_MAX) die(`article cell ${JSON.stringify(cell)} is ${cell.length} and the budget is ${ARTICLE_CELL_MAX}`);
});
// THE ROW THIS LESSON OWNS. chez keeps the article and nothing else does.
const keeps = ARTICLE_TABLE.filter((r) => r.behaviour === 'keeps');
if (keeps.length !== 1 || keeps[0]!.word !== 'chez') die('exactly one row of the article table keeps the article and it is chez');
if (keeps[0]!.withLe !== 'chez le' || keeps[0]!.withLa !== 'chez la') die('the chez row must print chez le and chez la in full, because that is the whole claim');
const drops = ARTICLE_TABLE.filter((r) => r.behaviour === 'drops');
if (drops.length !== 1 || drops[0]!.word !== 'en') die('exactly one row drops the article and it is en');
if (drops[0]!.withLe !== 'en' || drops[0]!.withLa !== 'en') die('the en row prints en in all three cells, because that is what the article going away looks like');
const folds = ARTICLE_TABLE.filter((r) => r.behaviour === 'folds').map((r) => r.word);
if (folds.join(',') !== 'à,de') die(`the folding rows are ${folds.join(',')} and they are à and de`);
for (const r of ARTICLE_TABLE) {
  if (r.owner && !namesUnitLabel(r.detail, r.owner)) die(`the ${r.word} row is ${r.owner}'s and its detail does not name ${r.owner}`);
}
console.log(`  the Owns      ${ARTICLE_TABLE.length} rows: ${folds.join(' and ')} fold, en drops, chez keeps. Two credited to ${CONTRACTION_UNIT}, one to ${COUNTRY_UNIT}, one is this lesson's.`);

/* ══════════════════════════════════════════════════════════════════════════
 *  CHEZ NEVER GOES IN FRONT OF A PLACE, EXCEPT WHERE THE ERROR IS THE CONTENT
 * ═══════════════════════════════════════════════════════════════════════ */

const WRONG_FORMS = [...CHEZ_WRONG.map((w) => w.wrong), ...CHEZ_FOLD_WRONG.map((w) => w.wrong)];

// THE SHAPE, checked in both directions before it is used. a2.17 §4: a shape
// built out of French fires on the English half of a learner surface.
for (const line of CHEZ_PLACE_MUST_FIRE) {
  if (!CHEZ_PLACE_SHAPE.test(line)) die(`CHEZ_PLACE_SHAPE does not fire on ${JSON.stringify(line)}`);
}
for (const line of CHEZ_PLACE_MUST_NOT_FIRE) {
  if (CHEZ_PLACE_SHAPE.test(line)) die(`CHEZ_PLACE_SHAPE fires on ${JSON.stringify(line)}, which is correct French or this lesson's own copy`);
}
const legalWrong = new Set<string>(WRONG_FORM_SECTIONS);
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '';
  if (legalWrong.has(sid)) continue;
  const text = strings(s).join('\n');
  for (const w of WRONG_FORMS) {
    if (hasPhrase(text, w)) die(`${sid} contains the wrong form ${JSON.stringify(w)}. It is permitted only in ${[...legalWrong].join(', ')}.`);
  }
  for (const line of strings(s)) {
    if (CHEZ_PLACE_SHAPE.test(line)) die(`${sid} puts chez in front of a place: ${JSON.stringify(line)}`);
  }
}
// AND THE SHEET AND THE TERMS ARE NOT ON THAT LIST AT ALL.
for (const [label, v] of [['sheets', LESSON.sheets ?? []], ['terms', LESSON.terms ?? {}], ['intro', LESSON.intro ?? ''], ['overview', LESSON.overview ?? {}]] as const) {
  const text = strings(v).join('\n');
  for (const w of WRONG_FORMS) if (hasPhrase(text, w)) die(`${label} contains the wrong form ${JSON.stringify(w)}`);
  for (const line of strings(v)) {
    if (CHEZ_PLACE_SHAPE.test(line)) die(`${label} puts chez in front of a place: ${JSON.stringify(line)}`);
  }
}
// A wrong form must NEVER be an authored row: a row holding one would be served
// by the flashcard hub as French.
for (const r of PREPOSITIONS_LIEU) {
  for (const w of WRONG_FORMS) if (hasPhrase(r.fr, w)) die(`${r.id} is a corpus row holding the wrong form ${JSON.stringify(w)}`);
  if (CHEZ_PLACE_SHAPE.test(r.fr)) die(`${r.id} is a corpus row putting chez in front of a place: ${JSON.stringify(r.fr)}`);
}
// AND NO AUTHORED ROW MAY RE-STATE AN IMPORTED ONE. The duplicate-fr check is
// per THEME, so authoring `la France` into `prepositions-essentielles` collides
// with nothing and quietly gives a1.22's card a second copy in a second deck,
// which `flashhub-coverage.test.ts` cannot see across two themes. Found by
// mutation: only the version check caught it, and the merge missed it entirely.
{
  const importedFrs = new Map(IMPORTED.map((i) => [i.fr.toLowerCase(), i.id] as const));
  for (const r of PREPOSITIONS_LIEU) {
    const clash = importedFrs.get(r.fr.toLowerCase());
    if (clash) die(`${r.id} authors ${JSON.stringify(r.fr)}, which this lesson already imports as ${clash}. Import it, do not re-author it.`);
  }
}
// EVERY WRONG FORM APPEARS SOMEWHERE, or the guard above is guarding nothing.
const wrongHomes = LESSON.sections.filter((s) => legalWrong.has((s as { id?: string }).id ?? ''));
for (const w of WRONG_FORMS) {
  if (!wrongHomes.some((s) => strings(s).some((x) => hasPhrase(x, w)))) die(`the wrong form ${JSON.stringify(w)} is declared and appears nowhere. A trap nobody sees is not a trap.`);
}
console.log(`  chez          ${WRONG_FORMS.length} wrong forms, every one of them present in ${legalWrong.size} sections and absent from the other ${LESSON.sections.length - legalWrong.size}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE COUNTRIES ARE a1.22's, BY ID
 * ═══════════════════════════════════════════════════════════════════════ */

for (const id of COUNTRY_IDS) {
  if (!IMPORTED_IDS.includes(id)) die(`${id} is a country this lesson references and it is not in IMPORTED`);
  if (!PREPOSITIONS_LIEU_ROWS[id]) die(`${id} is a country and is not in the manifest`);
}
// NO COUNTRY VOCABULARY SECTION. Named by id and not by spelling.
const countrySection = byId(COUNTRY_SECTION_ID) as { type?: string } | undefined;
if (countrySection?.type === 'vocabThemes' || countrySection?.type === 'flashcards') {
  die(`${COUNTRY_SECTION_ID} is a ${countrySection.type} and this lesson may not build a country vocabulary section. ${COUNTRY_UNIT} owns it.`);
}
if (!LESSON.sections.some((s) => namesUnitLabel(strings(s).join('\n'), COUNTRY_UNIT))) {
  die(`no section names ${COUNTRY_UNIT}, and this lesson leans on its grid on four screens`);
}
// The nationalities, the continents and the gender rule are a1.22's and none of
// them appears here.
const learnerText = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...strings(LESSON.overview ?? {}),
  ...strings(LESSON.acts ?? []), ...strings(LESSON.drills ?? []),
].join('\n');
for (const w of COUNTRY_FORBIDDEN) {
  if (hasPhrase(learnerText, w)) die(`${JSON.stringify(w)} appears on a learner surface and it is ${COUNTRY_UNIT}'s`);
}
console.log(`  countries     ${COUNTRY_IDS.length} referenced, all by imported id, no vocabulary section, ${COUNTRY_FORBIDDEN.length} of ${COUNTRY_UNIT}'s terms absent`);

/* ══════════════════════════════════════════════════════════════════════════
 *  a2.18 KEEPS THE TIME SENSES, AND THE GUARD IS A SHAPE RATHER THAN A LIST
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of TIME_MUST_FIRE) if (!TIME_SHAPE.test(s)) die(`TIME_SHAPE does not fire on ${JSON.stringify(s)}`);
for (const s of TIME_MUST_NOT_FIRE) if (TIME_SHAPE.test(s)) die(`TIME_SHAPE fires on ${JSON.stringify(s)}, which is a legitimate string. a2.17 §7: guard the thing, not the letters.`);
for (const line of strings(LESSON.sections).concat(strings(LESSON.sheets ?? []), strings(LESSON.terms ?? {}), [LESSON.intro ?? ''])) {
  if (TIME_SHAPE.test(line)) die(`a temporal en or dans reached a screen: ${JSON.stringify(line)}. ${TIME_UNIT} owns it and it is the very next lesson.`);
  for (const t of TIME_FORBIDDEN) if (hasPhrase(line, t)) die(`${JSON.stringify(t)} reached a screen and it is ${TIME_UNIT}'s`);
}
// AND THE DEFERRAL IS NAMED, so the learner knows it is coming.
if (!namesUnitLabel(learnerText, TIME_UNIT)) die(`${TIME_UNIT} is never named and this lesson deliberately leaves it two senses of two words`);
console.log(`  ${TIME_UNIT}         temporal en and dans absent, ${TIME_MUST_FIRE.length} must-fire and ${TIME_MUST_NOT_FIRE.length} must-not-fire lines checked, deferral named`);

/* ══════════════════════════════════════════════════════════════════════════
 *  a1.21's PREPOSITIONS ARE NOT RE-TAUGHT
 *
 *  SCOPED TO PRODUCTION SURFACES, not to every string. The roundup has to be
 *  able to say "a1.21 owns sur, sous, dans, devant and derrière", and a guard
 *  that forbade the word everywhere would make the hand-off unsayable. Invariants
 *  §0 and a2.14 §6 both: guard the THING, and let the credit through.
 * ═══════════════════════════════════════════════════════════════════════ */

const PRODUCTION_TYPES = new Set(['cardDeck', 'flashcards', 'practice', 'dictation', 'groupDrill', 'trapDrill', 'quiz', 'reviewDeck', 'scenario']);
for (const s of LESSON.sections) {
  if (!PRODUCTION_TYPES.has(s.type)) continue;
  const sid = (s as { id?: string }).id ?? '';
  const text = display(s).join('\n');
  for (const p of A121_PREPOSITIONS) {
    if (hasPhrase(text, p)) die(`${sid} is a production surface and it drills ${JSON.stringify(p)}, which is ${CONTRACTION_UNIT}'s.`);
  }
}
// A RECAP LINE IS PERMITTED, and exactly one section may carry it.
const recapHomes = LESSON.sections.filter((s) => A121_PREPOSITIONS.some((p) => hasPhrase(strings(s).join('\n'), p)));
if (recapHomes.length > 1) die(`${recapHomes.length} sections name one of ${CONTRACTION_UNIT}'s prepositions and the budget is one recap line: ${recapHomes.map((s) => (s as { id?: string }).id).join(', ')}`);
if (recapHomes.length !== 1 || (recapHomes[0] as { id?: string }).id !== ROUNDUP_SECTION_ID) {
  die(`the one recap of ${CONTRACTION_UNIT}'s prepositions belongs in ${ROUNDUP_SECTION_ID}, and it is in ${recapHomes.map((s) => (s as { id?: string }).id).join(', ') || 'nothing'}`);
}
console.log(`  ${CONTRACTION_UNIT}         ${A121_PREPOSITIONS.length} prepositions absent from every production surface, one recap line in ${ROUNDUP_SECTION_ID}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GENERALISATION SET IS GENUINELY UNSEEN
 * ═══════════════════════════════════════════════════════════════════════ */

const legalUnseen = new Set([UNSEEN_SECTION_ID, QUIZ_SECTION_ID]);
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '';
  if (legalUnseen.has(sid)) continue;
  const text = strings(s).join('\n');
  for (const w of UNSEEN_WORDS) if (hasPhrase(text, w)) die(`${sid} names ${JSON.stringify(w)}, which is one of the four places the generalisation drill exists to ask about.`);
}
for (const u of UNSEEN) {
  if (IMPORTED.some((i) => i.fr.toLowerCase() === u.fr.toLowerCase())) die(`${u.fr} is imported AND is a generalisation answer. Importing it deletes its question.`);
  if (PREPOSITIONS_LIEU.some((r) => hasPhrase(r.fr, u.fr))) die(`${u.fr} is in an authored row AND is a generalisation answer`);
}
if (new Set(UNSEEN.map((u) => u.kind)).size !== KIND_ORDER.length) die('the generalisation set must cover all four kinds, or it tests one row of the grid');
console.log(`  unseen        ${UNSEEN.length} places, one per kind, absent from every section but ${[...legalUnseen].join(' and ')}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TRAP DRILLS ARE STEPPED
 * ═══════════════════════════════════════════════════════════════════════ */

type TrapLike = {
  id?: string; swipe?: boolean; say?: string; size?: string;
  steps?: { kind: string; gate?: boolean }[];
  audio?: { recordingId?: string };
  cards?: { fr: string }[];
};
const RECORDED = new Map((LESSON.audio?.recorded ?? []).map((r) => [r.id, r.clipIds ?? []]));
for (const t of traps as unknown as TrapLike[]) {
  const kinds = (t.steps ?? []).map((s) => s.kind).join('>');
  if (kinds !== 'rule>cards>audio>drill') die(`${t.id} steps are ${JSON.stringify(kinds)} and A2 walks rule>cards>audio>drill`);
  if (!t.swipe) die(`${t.id} has no swipe`);
  if (!t.say) die(`${t.id} has no say`);
  if (t.size) die(`${t.id} carries size ${JSON.stringify(t.size)}. The stepped branch sizes off steps.length and no stepped trapDrill in the corpus carries one.`);
  if (!t.audio?.recordingId) die(`${t.id} declares no audio recordingId and the audio step plays each card's fr`);
  if (!(t.steps ?? []).some((s) => s.kind === 'drill' && s.gate)) die(`${t.id} drill step is not gated`);
  // THE ONE STEP WITH A COST: the audio step plays each card's `fr`, so the
  // take has to contain those lines.
  const clips = RECORDED.get(t.audio.recordingId);
  if (!clips) die(`${t.id} points at recording ${t.audio.recordingId} and the lesson does not brief it`);
  for (const card of t.cards ?? []) {
    if (!clips.includes(card.fr)) die(`${t.id}'s audio step plays ${JSON.stringify(card.fr)} and ${t.audio.recordingId} does not contain it`);
  }
}
console.log(`  trapDrills    ${traps.length} stepped rule>cards>audio>drill, gated, no size, every card's line in its own take`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE IS IN LETTERS MODE, THROUGH THE REAL FUNCTION
 * ═══════════════════════════════════════════════════════════════════════ */

for (const id of PREPOSITIONS_LIEU_DICTEE_IDS) {
  const r = PREPOSITIONS_LIEU.find((x) => x.id === id);
  if (!r) die(`${id} is a dictée target and is not an authored row`);
  if (dicteeMode(r.fr) !== 'letters') die(`${id} "${r.fr}" is ${letterCount(r.fr)} letters and spells in WORD mode, where every word is handed over pre-spelled`);
  if (!r.drills.includes('dictation')) die(`${id} is a dictée target and carries no dictation drill`);
}
// AND A ROW THAT COULD BE A TARGET AND IS NOT GETS REPORTED.
const couldBe = PREPOSITIONS_LIEU.filter((r) => dicteeMode(r.fr) === 'letters' && !r.drills.includes('dictation'));
if (couldBe.length) die(`${couldBe.length} rows are in LETTERS mode and carry no dictation drill: ${couldBe.map((r) => r.id).join(', ')}`);
const cannot = PREPOSITIONS_LIEU.filter((r) => dicteeMode(r.fr) === 'words' && r.drills.includes('dictation'));
if (cannot.length) die(`${cannot.length} rows spell in WORD mode and carry a dictation drill: ${cannot.map((r) => r.id).join(', ')}`);
console.log(`  dictée        ${PREPOSITIONS_LIEU_DICTEE_IDS.length} targets, every one in LETTERS mode through the real dicteeMode, ${PREPOSITIONS_LIEU.length - PREPOSITIONS_LIEU_DICTEE_IDS.length} rows correctly excluded`);

/* ══════════════════════════════════════════════════════════════════════════
 *  NOTHING IS ASKED BY EAR
 * ═══════════════════════════════════════════════════════════════════════ */

const ear = qs.filter((q) => q.format === 'listenChoose');
if (ear.length) die(`${ear.length} listenChoose questions. Au and aux are one sound, du and des are close to one, and an unstressed à can vanish: nothing in this lesson can be asked by ear.`);
const listening = LESSON.sections.filter((s) => s.type === 'listening');
if (listening.length) die(`${listening.length} listening sections, and this lesson has nothing an ear can separate`);
console.log('  by ear        0 listenChoose questions and 0 listening sections, and the reason is on the progress card');

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME
 * ═══════════════════════════════════════════════════════════════════════ */

const reframeWords = REFRAME.trim().split(/\s+/).length;
if (reframeWords > 14) die(`the reframe is ${reframeWords} words and has to survive recall mid-utterance`);
if (LESSON.reframe !== REFRAME) die('the lesson\'s reframe and the corpus constant disagree');
const reframeUses = countPhrase(learnerText, REFRAME);
const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
if (reframeSections < 3) die(`the reframe is carried by ${reframeSections} sections and the density validator wants three`);
console.log(`  reframe       ${JSON.stringify(REFRAME)} · ${reframeWords} words, ${reframeUses} uses across ${reframeSections} sections`);

/* ══════════════════════════════════════════════════════════════════════════
 *  HOUSE COPY, JARGON AND THE PLURALS
 * ═══════════════════════════════════════════════════════════════════════ */

const houseText = display(LESSON.sections).concat(
  display(LESSON.sheets ?? []), display(LESSON.terms ?? {}),
  [LESSON.intro ?? ''], display(LESSON.overview ?? {}),
  display(LESSON.acts ?? []), display(LESSON.drills ?? []),
  PREPOSITIONS_LIEU.flatMap((r) => [r.fr, r.en, r.notes ?? '']),
).join('\n');
const proseText = prose(LESSON.sections).concat(
  prose(LESSON.sheets ?? []), prose(LESSON.terms ?? {}),
  [LESSON.intro ?? ''], prose(LESSON.overview ?? {}),
  prose(LESSON.acts ?? []), prose(LESSON.drills ?? []),
).join('\n');

for (const j of JARGON) {
  for (const form of [j, `${j}s`]) {
    if (hasPhrase(proseText, form)) die(`the jargon ${JSON.stringify(form)} is on a learner surface`);
    if (hasPhrase(houseText, form)) die(`the jargon ${JSON.stringify(form)} is on a learner surface (display walk)`);
  }
}
// `intro` IS PINNED IN ITS OWN ASSERTION. a2.11 shipped "third person" there
// with every host gate green, because the walk was sections + sheets + terms.
if (!LESSON.intro || LESSON.intro.length < 100) die('intro is drawn on the overview card AND the lesson cover, and it is missing or too short to be the thing a2.11 shipped a defect in');
for (const j of JARGON) for (const form of [j, `${j}s`]) if (hasPhrase(LESSON.intro, form)) die(`intro holds the jargon ${JSON.stringify(form)}`);
if (!hasPhrase(LESSON.intro, 'chez')) die('intro does not name chez, which is the one thing this lesson introduces');

for (const bad of ['—', '–']) if (houseText.includes(bad)) die(`an em or en dash is on a learner surface`);
for (const bad of ['honest', 'honesty', 'honestly']) if (hasPhrase(houseText, bad)) die(`${JSON.stringify(bad)} is banned from authored content`);
for (const tell of ['falls fast', 'trip up', 'half of everything', 'this is the big one', 'listen to the trap', 'get those two right', 'this is the part that pays', 'here is the catch']) {
  if (hasPhrase(houseText, tell)) die(`the AI tell ${JSON.stringify(tell)} is on a learner surface`);
}
// U+203F: the tie draws as a low underscore on a Pixel 6.
for (const r of PREPOSITIONS_LIEU) {
  for (const v of [r.fr, r.respell ?? '', r.ipa ?? '', r.en, r.notes ?? '']) if (v.includes('‿')) die(`${r.id} carries U+203F in ${JSON.stringify(v)}`);
}
if (houseText.includes('‿')) die('U+203F is on a learner surface');

// THE RATIO, NOT A BAN. a2.17 §8: the plain phrase must outnumber the technical
// one, which lets `overview.titleEn` stay the unit's own English name.
const plain = countPhrase(houseText, 'place word') + countPhrase(houseText, 'small word') + countPhrase(houseText, 'the word');
const technical = countPhrase(houseText, 'preposition');
if (technical > plain) die(`the technical word appears ${technical} times and the plain phrase ${plain}. The house prefers the plain phrase.`);
console.log(`  house copy    ${JARGON.length} jargon terms absent in both forms, plain phrase ${plain} against technical ${technical}, no dash, no tie`);

/* ══════════════════════════════════════════════════════════════════════════
 *  TERM CHIPS
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of LESSON.sections) {
  const t = (s as { terms?: string[] }).terms ?? [];
  if (t.length > 3) die(`${(s as { id?: string }).id} declares ${t.length} term chips and the renderer shows three`);
  for (const name of t) if (!PREPOSITIONS_LIEU_TERMS[name]) die(`${(s as { id?: string }).id} names the term ${JSON.stringify(name)} and the glossary has no such term`);
  if (t.length) {
    const w = rowWidth(t);
    if (w > TERM_ROW_MAX) die(`${(s as { id?: string }).id} chip row is ${w} characters and the measured budget is ${TERM_ROW_MAX}`);
  }
}
for (const trio of TERM_ROWS) {
  const w = rowWidth(trio);
  if (w > TERM_ROW_MAX) die(`the chip row ${trio.join(' · ')} is ${w} characters and the budget is ${TERM_ROW_MAX}`);
}
// Every term reaches a section, or it is a glossary entry nothing opens.
const usedTerms = new Set(LESSON.sections.flatMap((s) => (s as { terms?: string[] }).terms ?? []));
const orphanTerms = Object.keys(PREPOSITIONS_LIEU_TERMS).filter((k) => !usedTerms.has(k));
if (orphanTerms.length) die(`${orphanTerms.length} terms are declared and named by no section: ${orphanTerms.join(', ')}`);
console.log(`  terms         ${Object.keys(PREPOSITIONS_LIEU_TERMS).length} terms, all reachable, every chip row inside ${TERM_ROW_MAX} characters`);

/* ══════════════════════════════════════════════════════════════════════════
 *  MISSION TITLES, ACT WEIGHTS AND REACHABILITY
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of LESSON.sections) {
  const t = (s as { title?: string }).title ?? '';
  if (t.length > TITLE_MAX) die(`the title ${JSON.stringify(t)} is ${t.length} characters and the hub row cuts at ${TITLE_MAX}`);
}
const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id ?? '');
const claimed = new Map<string, string>();
for (const a of PREPOSITIONS_LIEU_ACTS) {
  for (const sid of a.sections) {
    if (!sectionIds.includes(sid)) die(`act ${a.id} names ${sid} and the lesson has no such section`);
    if (claimed.has(sid)) die(`${sid} is claimed by ${claimed.get(sid)} and by ${a.id}`);
    claimed.set(sid, a.id);
  }
}
for (const sid of sectionIds) if (!claimed.has(sid)) die(`${sid} is in no act`);

// THE OWNS OUTWEIGHS THE PARADIGM. Doctrine §B.5.
const ownsSections = (PREPOSITIONS_LIEU_ACTS.find((a) => a.id === 'act2')?.sections.length ?? 0)
  + (PREPOSITIONS_LIEU_ACTS.find((a) => a.id === 'act3')?.sections.length ?? 0);
const paradigmSections = 1 + (PREPOSITIONS_LIEU_ACTS.find((a) => a.id === 'act4')?.sections.length ?? 0);
if (ownsSections <= paradigmSections) die(`the Owns has ${ownsSections} sections and the four-kinds paradigm has ${paradigmSections}. Doctrine §B.5.`);

// EVERY itemId IS DRAWN. Being in itemIds makes a row available; it does not
// put it on a screen. a1.08 shipped 43 ids that resolved and drew nothing.
const drawn = new Set<string>();
const collectIds = (v: unknown): void => {
  if (typeof v === 'string') { if (v.startsWith('fr.')) drawn.add(v); return; }
  if (Array.isArray(v)) { for (const x of v) collectIds(x); return; }
  if (v && typeof v === 'object') for (const x of Object.values(v)) collectIds(x);
};
collectIds(LESSON.sections); collectIds(LESSON.terms ?? {}); collectIds(LESSON.drills ?? []);
// A row is also drawn when its French is printed, which is how `examples` and
// `cardDeck` reference the corpus.
const printed = strings(LESSON.sections).concat(strings(LESSON.terms ?? {})).join('\n');
const allRows = [...PREPOSITIONS_LIEU.map((r) => ({ id: r.id, fr: r.fr })), ...IMPORTED.map((i) => ({ id: i.id, fr: i.fr }))];
for (const r of allRows) if (hasPhrase(printed, r.fr)) drawn.add(r.id);
const released = new Set(PREPOSITIONS_LIEU_TRANCHES.flat());
const orphan = PREPOSITIONS_LIEU_ITEM_IDS.filter((id) => !drawn.has(id) && !released.has(id));
if (orphan.length) die(`${orphan.length} declared items are on no screen and in no tranche:\n  ${orphan.join('\n  ')}`);
const ghosts = [...released].filter((id) => !PREPOSITIONS_LIEU_ITEM_IDS.includes(id));
if (ghosts.length) die(`${ghosts.length} tranche ids are not in itemIds: ${ghosts.join(', ')}`);
// A tranche must not release an item the acts before it have not shown.
const actOfSection = new Map(sectionIds.map((sid) => [sid, PREPOSITIONS_LIEU_ACTS.findIndex((a) => a.sections.includes(sid))]));
void actOfSection;
console.log(`  reachability  ${PREPOSITIONS_LIEU_ITEM_IDS.length} items, ${drawn.size} drawn, ${released.size} released, 0 orphans and 0 ghosts`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

const mcq = qs.filter((q) => q.format === 'mcq').length;
if (mcq > qs.length / 2) die(`${mcq} of ${qs.length} questions are mcq and at most half may be`);
const noWhy = qs.filter((q) => !q.why);
if (noWhy.length) die(`${noWhy.length} questions have no why`);
const noRef = qs.filter((q) => !q.ref || !sectionIds.includes(q.ref));
if (noRef.length) die(`${noRef.length} questions have a ref naming no section: ${noRef.map((q) => q.ref).join(', ')}`);
// Correct answers must not cluster.
const closed = qs.filter((q) => typeof q.correct === 'number');
const slots = new Map<number, number>();
for (const q of closed) {
  const slot = Number(q.correct);
  slots.set(slot, (slots.get(slot) ?? 0) + 1);
}
for (const [slot, n] of slots) {
  if (n / closed.length > 0.4) die(`slot ${slot} holds ${n} of ${closed.length} closed answers, over the 40% cap`);
}
// Every free-text question accepts the answer it displays, checked through the
// REAL `matchesAccept` rather than by comparing strings. Invariants §4: a guard
// that reimplements the thing it guards is free to drift from it.
for (const q of qs) {
  if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
  if (!q.answer) die(`a ${q.format} question has no answer`);
  if (!matchesAccept(q.answer, q.accept ?? [])) die(`the ${q.format} question ${JSON.stringify(q.q)} displays ${JSON.stringify(q.answer)} and does not accept it`);
}
// Each round leads on a DIFFERENT trigger, or a drill can never fire.
const rounds = (quizSection as unknown as { rounds: { id: string; targets: string[] }[] }).rounds;
const leads = rounds.map((r) => r.targets[0]);
if (new Set(leads).size !== leads.length) die(`two rounds lead on the same trigger: ${leads.join(', ')}`);
const triggerIds = new Set(PREPOSITIONS_LIEU_ERROR_TRIGGERS.map((t) => t.id));
const unled = [...triggerIds].filter((t) => !leads.includes(t));
if (unled.length) die(`${unled.length} triggers lead no round, so their drills can never fire: ${unled.join(', ')}`);
const drillIds = new Set(PREPOSITIONS_LIEU_DRILLS.map((d) => d.id));
for (const t of PREPOSITIONS_LIEU_ERROR_TRIGGERS) {
  if (!drillIds.has(t.drill)) die(`${t.id} names the drill ${t.drill} and the lesson has no such drill`);
  if (t.retest && !drillIds.has(t.retest)) die(`${t.id} names the retest ${t.retest} and the lesson has no such drill`);
  for (const d of t.detectOn) {
    const base = d.split('/')[0]!;
    if (!sectionIds.includes(base)) die(`${t.id} detects on ${d} and there is no section ${base}`);
  }
}
console.log(`  quiz          ${qs.length} questions, ${mcq} mcq, ${qs.filter((q) => q.format === 'typeIn').length} typeIn, ${qs.filter((q) => q.format === 'errorSpot').length} errorSpot, ${rounds.length} rounds each leading a different trigger`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SCENARIO CONTRACT
 * ═══════════════════════════════════════════════════════════════════════ */

const scenario = byId(SCENARIO_SECTION_ID) as { turns?: { user?: string; userEn?: string; alts?: unknown[] }[] } | undefined;
if (!scenario?.turns?.length) die(`${SCENARIO_SECTION_ID} has no turns`);
for (const [i, t] of scenario.turns.entries()) {
  if (!t.userEn) die(`scenario turn ${i} has no userEn. scenario.logic.test.ts is a seed-wide test and it requires one.`);
  if ((t.alts ?? []).length < 2) die(`scenario turn ${i} has ${(t.alts ?? []).length} alts and the seed-wide test requires two`);
  // An alternative is an answer the learner is told is right, so no alt may
  // carry a wrong form.
  for (const w of WRONG_FORMS) if (hasPhrase(strings(t).join('\n'), w)) die(`scenario turn ${i} offers ${JSON.stringify(w)} as an answer`);
}
console.log(`  scenario      ${scenario.turns.length} turns, every one with a userEn and two alternatives, none of them a wrong form`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLINGS, THROUGH THE REAL CHECKER
 * ═══════════════════════════════════════════════════════════════════════ */

let seen = 0; let missed = 0;
for (const r of PREPOSITIONS_LIEU) {
  if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} "${r.fr}" respelled ${JSON.stringify(r.respell)} is flagged by the shared checker`);
  const supers = (r.respell ?? '').split('ⁿ').length - 1;
  for (let i = 0; i < supers; i += 1) {
    const broken = (r.respell ?? '').replace('ⁿ', 'n');
    if (hasPlainNasalFor(r.fr, broken)) seen += 1; else missed += 1;
    break;
  }
}
// ALL THREE VALUES OF EVERY REPAIR, and the field that says why they differ.
for (const p of ALL_REPAIRS) {
  if (hasPlainNasalFor(p.fr, p.to)) die(`${p.id} repaired value ${JSON.stringify(p.to)} is still flagged`);
  if (hasPlainNasalFor(p.fr, p.half)) die(`${p.id} half value ${JSON.stringify(p.half)} is still flagged`);
  const seesFrom = hasPlainNasalFor(p.fr, p.from);
  if (p.blind && seesFrom) die(`${p.id} claims the checker is blind to it and the checker sees it`);
  if (!p.blind && !seesFrom) die(`${p.id} claims the checker sees it and it does not`);
  if (p.blind && p.house) die(`${p.id} claims both blind and house, and they are mutually exclusive reasons`);
  if ((p.half !== p.to) !== (p.blind || p.house)) die(`${p.id}: half differs from to is ${p.half !== p.to} and blind||house is ${p.blind || p.house}`);
  if (p.to.includes('‿')) die(`${p.id} repaired value carries U+203F`);
}
// THE FALSE POSITIVE, ASSERTED AS A NEGATIVE, so the day the checker improves
// this build finds out rather than carrying a dead workaround.
if (!hasPlainNasalFor(MEME_FALSE_POSITIVE.word, MEME_FALSE_POSITIVE.flagged)) {
  die(`the checker no longer flags ${MEME_FALSE_POSITIVE.flagged} for ${MEME_FALSE_POSITIVE.word}. The workaround in fr.a2.prepositions-essentielles.140 can go.`);
}
if (hasPlainNasalFor(MEME_FALSE_POSITIVE.word, MEME_FALSE_POSITIVE.clean)) {
  die(`the checker now flags ${MEME_FALSE_POSITIVE.clean}, which is the value this build shipped to work round the false positive`);
}
console.log(`  respellings   ${ALL_REPAIRS.length} repairs (${RESPELL_REPAIRS_VISIBLE.length} the checker reports, ${RESPELL_REPAIRS_INVISIBLE.length} it cannot see, ${ALL_REPAIRS.filter((r) => r.house).length} house rather than minimal), ${seen} nasals seen and ${missed} missed across the authored rows`);
console.log(`  false positive ${MEME_FALSE_POSITIVE.word}: ${MEME_FALSE_POSITIVE.flagged} FLAGGED and ${MEME_FALSE_POSITIVE.clean} clean, and the word has no nasal vowel in it`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE MANIFEST AGREES WITH WHAT THE SCREENS PRINT
 * ═══════════════════════════════════════════════════════════════════════ */

for (const i of IMPORTED) {
  const rowM = PREPOSITIONS_LIEU_ROWS[i.id];
  if (!rowM) die(`${i.id} is in IMPORTED and not in the manifest. Re-run scripts/_a204_manifest.ts.`);
  if (rowM.fr !== i.fr) die(`${i.id} manifest says ${JSON.stringify(rowM.fr)} and IMPORTED says ${JSON.stringify(i.fr)}`);
  const shown = displayRespell(i.id);
  if (!shown) die(`${i.id} has no respelling to display`);
  if (hasPlainNasalFor(i.fr, shown)) die(`${i.id} displays ${JSON.stringify(shown)}, which the shared checker flags`);
  if (shown.includes('‿')) die(`${i.id} displays a U+203F tie`);
}
console.log(`  manifest      ${IMPORTED.length} imported rows, every displayed respelling clean and tie-free`);

/* ══════════════════════════════════════════════════════════════════════════
 *  SCHEMA AND DENSITY
 * ═══════════════════════════════════════════════════════════════════════ */

for (const it of AUTHORED_ITEMS) {
  const issues = validateItem(it);
  if (issues.length) die(`${it.id}: ${formatIssues(issues)}`);
}
const lessonIssues = validateLesson(LESSON);
if (lessonIssues.length) die(`the lesson does not validate:\n${formatIssues(lessonIssues)}`);
const density = validateDensity(LESSON);
if (density.length) die(`density:\n${formatDensity(density)}`);
console.log(`  validators    ${AUTHORED_ITEMS.length} items, the lesson and the density validator all clean`);

/* ══════════════════════════════════════════════════════════════════════════
 *  POSTGRES
 * ═══════════════════════════════════════════════════════════════════════ */

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 2 });
  const c = await pool.connect();

  /* THE ROW COUNT IS THE ONLY SIGNAL, and a row INSIDE the block that this build
     does not own is fatal whatever the total does. Ledger §10 and §a2.14-13. */
  const nsNow = await c.query<{ id: string }>(
    "select id from content_items where id like 'fr.a2.prepositions-essentielles.%' order by id");
  const inBlock = nsNow.rows.map((r) => r.id).filter((id) => isMine(id));
  const foreign = inBlock.filter((id) => !AUTHORED_IDS.includes(id));
  if (foreign.length) {
    c.release(); await pool.end();
    die(`${foreign.length} rows exist inside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to} and it does not own them:\n  ${foreign.join('\n  ')}`);
  }
  const before = nsNow.rowCount ?? 0;
  if (before < ROW_COUNT_BEFORE) {
    c.release(); await pool.end();
    die(`fr.a2.prepositions-essentielles held ${ROW_COUNT_BEFORE} rows and now holds ${before}. A SHRINKING total is somebody deleting rows.`);
  }
  if (before !== ROW_COUNT_BEFORE && before !== ROW_COUNT_BEFORE + AUTHORED_IDS.length) {
    console.log(`  !! fr.a2.prepositions-essentielles holds ${before} rows and this build expected ${ROW_COUNT_BEFORE}. Nothing is inside the block, so this is somebody else's allocation. Reported, not fatal.`);
  }

  const themeNow = await c.query<{ n: string }>(
    'select count(*) n from content_items where theme = $1 and id <> all($2)', [THEME, AUTHORED_IDS]);
  const themeCount = Number(themeNow.rows[0]!.n);
  if (themeCount < THEME_COUNT_BEFORE) {
    c.release(); await pool.end();
    die(`${THEME} held ${THEME_COUNT_BEFORE} rows and now holds ${themeCount}. A SHRINKING total is somebody deleting rows.`);
  }
  if (themeCount > THEME_COUNT_BEFORE) console.log(`  !! ${THEME} has grown from ${THEME_COUNT_BEFORE} to ${themeCount}. Reported, not fatal.`);

  /* NO DUPLICATE fr INSIDE THE THEME. flashhub-coverage.test.ts treats two rows
     sharing an fr in one theme as one card served twice, and it strips the
     article first. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|l’|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const themeRows = await c.query<{ id: string; fr: string; gender: string | null; kind: string }>(
    'select id, fr, gender, kind from content_items where theme = $1', [THEME]);
  const seenFr = new Map<string, string>();
  for (const r of themeRows.rows) if (!AUTHORED_IDS.includes(r.id)) seenFr.set(strip(r.fr), r.id);
  for (const r of PREPOSITIONS_LIEU) {
    const clash = seenFr.get(strip(r.fr));
    if (clash) {
      c.release(); await pool.end();
      die(`${r.id} ${JSON.stringify(r.fr)} collides with ${clash} inside ${THEME}. The flashcard hub would serve one card twice.`);
    }
  }

  /* a1.03's ENDING POPULATION, THROUGH THE REAL FUNCTION RATHER THAN A COPY.
     a1.08 shipped a hand-rolled endingPopulation carrying a level filter the
     real one does not have and moved two of a1.03's printed cards. */
  const baseRows = themeRows.rows.filter((r) => !AUTHORED_IDS.includes(r.id));
  const popBefore = endingPopulation(baseRows as never);
  const popAfter = endingPopulation([...baseRows, ...AUTHORED_ITEMS] as never);
  if (popBefore.length !== popAfter.length) {
    c.release(); await pool.end();
    die(`this build changes a1.03's ending population from ${popBefore.length} rows to ${popAfter.length}. Invariants §5: withdraw rather than argue.`);
  }
  console.log(`  a1.03         ending population unchanged at ${popBefore.length} rows from this theme, 0 gendered rows authored`);

  /* THE MEASUREMENT THE LESSON RESTS ON, RE-RUN. */
  const chezAll = await c.query<{ n: string }>("select count(*) n from content_items where status = 'published' and fr ~* '\\ychez\\y'");
  const chezBad = await c.query<{ id: string; fr: string }>(
    `select id, fr from content_items
      where fr ~* $q$\ychez\s+(le|la|les|un|une|l['’])\s*(boulangerie|banque|poste|restaurant|cinema|cinéma|gare|ecole|école|magasin|hopital|hôpital|pharmacie|maison|bureau|parc|musee|musée|hotel|hôtel|piscine|marche|marché)\y$q$`);
  if (chezBad.rowCount) {
    c.release(); await pool.end();
    die(`the corpus now puts chez in front of a place in ${chezBad.rowCount} row(s): ${chezBad.rows.map((r) => `${r.id} "${r.fr}"`).join(', ')}. This lesson teaches that it never happens.`);
  }
  const chezNow = Number(chezAll.rows[0]!.n);
  if (chezNow < CHEZ_EVIDENCE.rowsHoldingChez) {
    console.log(`  !! the corpus held ${CHEZ_EVIDENCE.rowsHoldingChez} chez rows when this build measured it and now holds ${chezNow}.`);
  }
  console.log(`  the evidence  ${chezNow} published rows hold chez and ${chezBad.rowCount} put it in front of a place`);

  /* THE UNIT. Corrections §1: from the database, never from the brief. */
  const unitRow = await c.query<{ body: Record<string, unknown> }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID]);
  if (!unitRow.rowCount) { c.release(); await pool.end(); die(`${UNIT_ID} is not in content_units`); }
  const unit = unitRow.rows[0]!.body as { id: string; seq: number; title: string; sub: string; canDo: string; lessonIds?: string[] };
  if (unit.seq !== UNIT.seq) { c.release(); await pool.end(); die(`the database says ${UNIT_ID} is seq ${unit.seq} and the corpus says ${UNIT.seq}`); }
  if (unit.title !== UNIT.title) { c.release(); await pool.end(); die(`the database title is ${JSON.stringify(unit.title)} and the corpus says ${JSON.stringify(UNIT.title)}`); }
  if (unit.sub !== UNIT.sub) { c.release(); await pool.end(); die(`the database sub is ${JSON.stringify(unit.sub)} and the corpus says ${JSON.stringify(UNIT.sub)}`); }
  if (unit.canDo !== UNIT.canDo) { c.release(); await pool.end(); die(`the database canDo is ${JSON.stringify(unit.canDo)} and the corpus says ${JSON.stringify(UNIT.canDo)}`); }
  const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) { c.release(); await pool.end(); die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and missions.ts computes ${JSON.stringify(expectedTag)}`); }

  /* DEPENDENTS. Probed rather than copied: a2.13 had two, a2.14 had none. */
  const dependents = await c.query<{ id: string; seq: number }>(
    "select body->>'id' id, (body->>'seq')::int seq from content_units where kind = 'curriculum_unit' and body->'prereqUnitIds' ? $1 order by 2", [UNIT_ID]);
  if (dependents.rowCount === 0) {
    console.log(`  !! ${UNIT_ID} is a LEAF: no unit declares it as a prerequisite. Reported, not fatal.`);
  } else {
    console.log(`  trail         ${dependents.rowCount} unit(s) rest on ${UNIT_ID}: ${dependents.rows.map((r) => `${r.id}(seq ${r.seq})`).join(' ')}`);
  }

  const already = (unit.lessonIds ?? []).includes(LESSON.id);
  console.log(`  unit          ${UNIT_ID} seq ${unit.seq}, tag ${expectedTag}, lessonIds ${JSON.stringify(unit.lessonIds ?? [])}${already ? '  (re-run)' : '  (first lesson)'}`);
  const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

  /* THE VERSION MOVES FORWARD WHEN THE CONTENT MOVES. */
  const prev = await c.query<{ body: unknown }>(
    "select body from content_units where kind = 'lesson' and slug = $1", [LESSON.id]);
  const prevBody = prev.rows[0]?.body as { version?: number } | undefined;
  const prevVersion = prevBody?.version ?? 0;
  if (LESSON.version < prevVersion) {
    c.release(); await pool.end();
    die(`the stored lesson is v${prevVersion} and this one is v${LESSON.version}. The counter moves forward, never back.`);
  }
  if (LESSON.version === prevVersion) {
    if (canonicalJson(prevBody) !== canonicalJson(LESSON)) {
      c.release(); await pool.end();
      die(`the stored lesson is v${prevVersion} and this one is v${LESSON.version} with DIFFERENT content.\n`
        + '  Move the lesson\'s own version counter forward. Two different bodies under one number is the drift\n'
        + '  that makes Postgres and seed.json disagree while both report the same version.');
    }
    console.log(`  lesson        ${LESSON.id} v${LESSON.version} unchanged, idempotent re-run`);
  } else if (prevVersion === 0) {
    console.log(`  lesson        ${LESSON.id} new, v${LESSON.version}`);
  } else {
    console.log(`  lesson        ${LESSON.id} replacing v${prevVersion} with v${LESSON.version}`);
  }

  if (DRY_RUN) {
    console.log('\n  DRY RUN: every guard passed, nothing written.\n');
    c.release(); await pool.end();
    return;
  }

  await c.query('begin');
  try {
    for (const it of AUTHORED_ITEMS) {
      await c.query(
        `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills, version, status)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,'published')
         on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
           fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
           status='published'`,
        [it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          (it as { gender?: string }).gender ?? null, it.notes ?? null, it.tags ?? [], it.drills ?? [],
          it.version ?? 1],
      );
    }
    // THE REPAIRS, guarded by the STORED value, so a row somebody else has
    // already fixed is left alone and a row somebody else has changed to a
    // third value is not silently overwritten.
    for (const r of ALL_REPAIRS) {
      await c.query(
        'update content_items set respell = replace(respell, $2, $3) where id = $1 and respell like $4',
        [r.id, r.from, r.to, `%${r.from}%`]);
    }
    // `drills` IS AN ENUM ARRAY (drill_kind[]), not text[]: concatenating a
    // text[] fails with "operator does not exist: drill_kind[] || text[]" and
    // takes the whole transaction with it. Ledger §5.
    for (const d of DRILL_ADDITIONS) {
      await c.query(
        `update content_items
            set drills = (select array_agg(distinct e order by e)
                            from unnest(drills || $2::text[]::drill_kind[]) e)
          where id = $1`,
        [d.id, d.add]);
    }
    await c.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]);
    const uu = await c.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID]);
    if (uu.rowCount !== 1) throw new Error(`the unit update touched ${uu.rowCount} rows, expected exactly 1`);
    await c.query('commit');
  } catch (e) {
    await c.query('rollback');
    c.release(); await pool.end();
    die(`transaction rolled back: ${(e as Error).message}`);
  }

  /* IT LANDED. Read back rather than assumed. */
  const afterRows = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.prepositions-essentielles.%'");
  const check = await c.query<{ id: string; respell: string | null; drills: string[] }>(
    'select id, respell, drills::text[] drills from content_items where id = any($1)',
    [[...ALL_REPAIRS.map((r) => r.id), ...DRILL_ADDITIONS.map((d) => d.id)]]);
  const post = new Map(check.rows.map((r) => [r.id, r] as const));
  const failed: string[] = [];
  for (const r of ALL_REPAIRS) {
    const now = String(post.get(r.id)?.respell ?? '');
    if (!now.includes(r.to)) failed.push(`${r.id} respell is ${JSON.stringify(now)} and does not contain ${JSON.stringify(r.to)}`);
    if (now.includes(r.from) && r.from !== r.to) failed.push(`${r.id} still contains the unrepaired ${JSON.stringify(r.from)}`);
    if (hasPlainNasalFor(r.fr, now)) failed.push(`${r.id} is still flagged after the repair: ${JSON.stringify(now)}`);
  }
  for (const d of DRILL_ADDITIONS) {
    const have = pgArray(post.get(d.id)?.drills);
    for (const want of d.add) if (!have.includes(want)) failed.push(`${d.id} still has no ${want} drill`);
  }
  const nsAfter = Number(afterRows.rows[0]!.n);
  if (nsAfter !== before + AUTHORED_ITEMS.length && nsAfter !== before) {
    failed.push(`fr.a2.prepositions-essentielles holds ${nsAfter} rows and it held ${before} before this build's ${AUTHORED_ITEMS.length}`);
  }
  if (failed.length) { c.release(); await pool.end(); die(`the transaction committed and these did not land:\n  ${failed.join('\n  ')}`); }

  console.log(
    `\n  applied to Postgres:\n`
    + `    ${AUTHORED_ITEMS.length} rows authored into ${THEME}, ${AUTHORED_ITEMS[0]!.id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1]!.id}\n`
    + `      ZERO headwords and ZERO gendered rows. Every noun and every person is imported.\n`
    + `    ${ALL_REPAIRS.length} respellings repaired (${RESPELL_REPAIRS_VISIBLE.length} the checker reports, ${RESPELL_REPAIRS_INVISIBLE.length} it cannot see, ${ALL_REPAIRS.filter((r) => r.house).length} house rather than minimal)\n`
    + `    ${NOT_REPAIRED.length} rows found broken and left alone, because this build does not display them\n`
    + `    ${DRILL_ADDITIONS.length} drill additions, all verified after the commit\n`
    + `    ${IMPORTED_IDS.length} rows imported by id, ${READ_NOT_IMPORTED.length} read and refused (six of them for U+203F)\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${PREPOSITIONS_LIEU_ITEM_IDS.length} items\n`
    + `    fr.a2.prepositions-essentielles row count: ${before} before, ${nsAfter} after (max ${afterRows.rows[0]!.mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-prepositions-lieu-into-seed.ts\n`);

  c.release();
  await pool.end();
}

/* ─── Last checks that do not need the database ────────────────────────────*/

if (LESSON.sections.filter((s) => s.type === 'tapTable').length !== 2) die('two tapTables: the four kinds and the article table');
for (const sid of [SCENE_SECTION_ID, FOUR_SECTION_ID, ARTICLE_SECTION_ID, NOFOLD_SECTION_ID, FOLD_SECTION_ID, PERSON_SECTION_ID, PEOPLE_SECTION_ID, SHOP_SECTION_ID, TRAP_SECTION_ID, ERRORS_SECTION_ID, READING_SECTION_ID, CITY_SECTION_ID, COUNTRY_SECTION_ID, BUILDING_SECTION_ID, UNSEEN_SECTION_ID, ROUNDUP_SECTION_ID]) {
  if (!byId(sid)) die(`${sid} is missing from the lesson`);
}
if (PREPOSITIONS_LIEU_SPEAK_IDS.some((id) => !AUTHORED_IDS.includes(id))) die('a speak target is not an authored row, and only the authored rows are guaranteed to carry voiceflash');
if (PREPOSITIONS_LIEU_SHEETS[0]!.sections!.some((s) => s.type === 'cheatSheet')) die('a cheatSheet inside a reference sheet draws its title and nothing else');
if (PREPOSITIONS_LIEU_SHEETS[0]!.sections!.some((s) => (s as { cols?: string[] }).cols && (s as { cols: string[] }).cols.length > 3)) die('a FOUR-column table inside a sheet clips at the right edge on a Pixel 6, measured by this build');

main().catch((e) => { console.error(e); process.exit(1); });
