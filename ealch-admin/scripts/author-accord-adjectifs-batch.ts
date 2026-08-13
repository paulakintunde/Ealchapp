/* a2.03 "L'accord des adjectifs" — corpus, lesson and terms, applied to
 * Postgres in one transaction.
 *
 *     pnpm content:accord-adjectifs --dry-run
 *     pnpm content:accord-adjectifs
 *
 * ── WHAT THIS BATCH GUARDS THAT NO EARLIER ONE DID ────────────────────────
 *
 * THE GRID, CELL BY CELL, AGAINST THE ROWS THE LEARNER IS SCORED ON. Sixteen
 * cells appear in four places: the GRID constant, the authored sentence, the
 * tapTable and the reference sheet. a2.13 §6.2 shipped a grid that disagreed
 * with the cards and a2.14 §5 found the same shape one file apart in the
 * respellings. Every copy is compared to every other copy here.
 *
 * THE -EUX MASCULINE PLURAL IS ASSERTED IDENTICAL TO THE SINGULAR, and the
 * assertion carries the reason so a future author who "corrects" it by adding an
 * s reads why before they change it back.
 *
 * THE THREE COLD ADJECTIVES, IN BOTH DIRECTIONS. `courageux`, `actif` and
 * `turquoise` must appear in exactly two sections and nowhere else: not a corpus
 * row, not an itemId, not a deck release, not a term, not a card, not a drill.
 * And they must still BE there, because a guard whose exception list has quietly
 * emptied is a guard that has stopped guarding.
 *
 * a2.16's AND a2.17's LESSONS ARE PROTECTED. No form of beau, nouveau or vieux
 * appears on any production surface, and no -ment adverb does either. Both are
 * boundary-aware searches: `beaucoup` contains `beau` and `comment` contains
 * `ment`, and a substring check would fire on both.
 *
 * a1.03's ENDING POPULATION IS MEASURED, NOT ARGUED ABOUT. The real
 * `endingPopulation` runs over the seed before and after. Three A1 builds broke
 * on this and the brief predicted this one would.
 *
 * ── GUARDS COPIED, WITH THE REASON ────────────────────────────────────────
 *
 * The jargon walk includes `intro` AND `overview` (ledger §0, corrections §9),
 * and it runs over `display()` as well as `prose()` so a cardDeck `sub` is seen
 * (a2.15 §3). Every JARGON entry is checked in its -s plural too, because
 * `hasPhrase` is boundary-exact and a list holding `paradigm` does not catch
 * `paradigms` (a2.15 §3). The manifest staleness check EXEMPTS the rows this
 * build transforms (a2.13 §5). Every itemId must be DRAWN or RELEASED (a1.08
 * shipped forty-three that were neither). The respell-repair table is SPLIT by
 * whether the checker can see the violation (corrections §6), with a third
 * table for the one repair that is not about a nasal at all.
 *
 * ── GUARDS DELIBERATELY NOT COPIED ────────────────────────────────────────
 *
 * a2.15's "the two head verbs must SHARE one frame". This lesson's sixteen cells
 * share one frame by construction, so the check would be a tautology; what
 * matters here instead is that the frame contains NO LIAISON, which is checked,
 * and that is a constraint a2.15 never had.
 *
 * a2.15's refusal of any carried row without a respelling. Two of this build's
 * carried rows have none and this build supplies them; see the manifest.
 */
import './env';
import {
  canonicalJson,
  formatIssues,
  quizQuestions,
  validateItem,
  validateLesson,
  type Item,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { Pool } from 'pg';
import {
  ACCORD_ADJECTIFS, ADVERB_ALLOWED, ADVERB_MUST_FIRE, ADVERB_MUST_NOT_FIRE,
  ADVERB_SHAPE, ADVERB_UNIT, AUTHORED_HEADWORDS,
  AUTHORED_IDS, BEAU_SHAPE, BEAU_UNIT, BLIND_NASALS, BLIND_NASAL_ROWS,
  CELL_ORDER, CELL_SUBJECT, CITED_UNITS, COMPARATIVE_SHAPE, COMPARATIVE_UNIT,
  DICTATION_IDS, EXPECTED_ACTS, EXPECTED_AUTHORED, EXPECTED_AUTHORED_HEADWORDS,
  EXPECTED_BLIND_NASALS, EXPECTED_CARDDECKS, EXPECTED_CELLS, EXPECTED_DICTATION,
  EXPECTED_DRILLS, EXPECTED_DRILL_ADDITIONS, EXPECTED_FALSE_POSITIVES,
  EXPECTED_GRID_DICTEE, EXPECTED_GRID_ROWS, EXPECTED_GROUPDRILLS,
  EXPECTED_IMPORTED, EXPECTED_PATTERNS, EXPECTED_QUESTIONS, EXPECTED_READ_ONLY,
  EXPECTED_REFRAME_SECTIONS, EXPECTED_REFRAME_USES, EXPECTED_RESPELL_ADDITIONS,
  EXPECTED_RESPELL_REPAIRS, EXPECTED_RESPELL_REPAIRS_HOUSE,
  EXPECTED_RESPELL_REPAIRS_INVISIBLE, EXPECTED_RESPELL_REPAIRS_VISIBLE,
  EXPECTED_ROUNDS, EXPECTED_SECTIONS, EXPECTED_SEEN_NASALS, EXPECTED_SHEETS,
  EXPECTED_SOURCE_THEMES, EXPECTED_SUPERSCRIPTS, EXPECTED_TAPTABLES,
  EXPECTED_TRIGGERS, EXPECTED_UNSEEN, EXPECTED_USECASES, EXPECTED_VOCABTHEMES,
  FALSE_POSITIVES_FOUND, FALSE_POSITIVE_CANDIDATES, GRID, GRID_ROWS,
  IDENTICAL_CELLS, IDENTICAL_PATTERN, IDENTICAL_UNIT, ID_BLOCK, LESSON_ID,
  MISSION_TITLE_MAX, NOT_REPAIRED, OVER_PLURALISED, OVER_PLURALISED_SHAPE,
  PATTERN_ORDER, READ_NOT_IMPORTED, REFRAME, RESPELL_ADDITIONS,
  RESPELL_REPAIRS_HOUSE, RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE,
  ROW_COUNT_BEFORE, THEME, THEME_COUNT_BEFORE, UNIT, UNIT_ID as CORPUS_UNIT_ID,
  UNSEEN, UNSEEN_FORMS, UNSEEN_HOMES, UNSEEN_SHAPE, cellId, form, formRespell,
  toItem, type Cell, type Pattern,
} from './data/accord-adjectifs-corpus.ts';
import {
  CARRIED_IDS, EVIDENCE_IDS, IMPORTED_BY_ID, IMPORTED_IDS, READ_ONLY_ROWS,
  SOURCE_THEMES, displayRespell,
} from './data/accord-adjectifs-imported.ts';
import {
  ACCORD_ADJECTIFS_ACTS, ACCORD_ADJECTIFS_DECK_TRANCHE,
  ACCORD_ADJECTIFS_ITEM_IDS, ACCORD_ADJECTIFS_LESSON, ACCORD_ADJECTIFS_SHEETS,
  ACCORD_ADJECTIFS_SPEAK_IDS, COLD_SECTION_ID, CONTRAST_PAIR,
  EAR_SECTION_ID, ERRORS_SECTION_ID, EUX_SECTION_ID, GOALS_SECTION_ID,
  GRID_SECTION_ID, IDENTICAL_SECTION_ID, IF_SECTION_ID,
  INVARIABLE_SECTION_ID, QUIZ_SECTION_ID, READING_SECTION_ID,
  REVIEW_SECTION_ID, ROUNDUP_SECTION_ID, SHEET_ID, SILENT_SECTION_ID,
} from './data/accord-adjectifs-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = ACCORD_ADJECTIFS_LESSON;
const UNIT_ID = 'a2.03';

/** No grammar jargon on a learner surface. Invariants §8.
 *
 *  THE LINE IS MEASURED RATHER THAN CHOSEN, and the first version of this list
 *  was WRONG in the direction nobody checks: it was STRICTER than the house.
 *  It banned `adjective`, `masculine`, `feminine` and `plural`, which would have
 *  made a2.03 the only lesson in the adjective arc that avoids them. Counted on
 *  the learner surfaces of the three prerequisites and the two newest A2
 *  lessons, with grammarAssumed and grammarIntroduced excluded
 *  (`scripts/_a203_jargon.ts` prints the table):
 *
 *    word         a1.13  a1.14  a1.16  a2.15  a2.01
 *    feminine       71     39      0      0      0
 *    plural         40     30     33     43      2
 *    masculine      15      0      0      0      0
 *    noun            9      9    115      0      0
 *    agreement      13      2      0      0      1
 *    adjective       1      2      8      0      0
 *    invariable      3      0      0      0      0
 *
 *  So those seven are HOUSE VOCABULARY for this arc and a2.03 uses them. What
 *  none of the five uses even once is the list below, and that is the real line.
 *
 *  Every entry is also checked in its -s plural, because `hasPhrase` is
 *  boundary-exact: a list holding `paradigm` does not catch `paradigms`, and
 *  a2.15 shipped exactly that on an act title, which is drawn on the resume
 *  interstitial. a2.15 §3. */
const JARGON = [
  'inflection', 'inflected', 'inflect', 'paradigm', 'declension',
  'morpheme', 'morphology', 'morphological', 'attributive', 'predicative',
  'prenominal', 'postnominal', 'suffix', 'suffixation', 'affix',
  'orthography', 'orthographic', 'phoneme', 'phonological', 'lexeme',
  'denominal', 'productive class', 'null-marked', 'geminate', 'suppletion',
  'first person', 'second person', 'third person', 'conjugation', 'conjugate',
  'grammatical',
];

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

/** Prose only. A word-level guard must not read notation: IPA separates
 *  syllables with a full stop, so `/se.ʁjø/` reads as a standalone `ʁjø`. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** Machine keys. Section ids, refs and accept-lists are not learner surfaces and
 *  a guard that reads them fires on `s09-eux` and on the wrong options a drill
 *  has to print. a2.14 §6: rename an identifier rather than growing an exception
 *  list nobody can reason about. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets',
]);

/** Keeps `sub` and drops only machine keys. a2.15 §3: `prose()` drops
 *  NOTATION_KEYS and `sub` is on that list because on most cards it holds a
 *  respelling — but on a cardDeck card it holds PROSE, and a2.15 v1 shipped a
 *  banned word in one that only the seed-wide test caught. */
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

/** Accent-aware word-boundary search. NEVER build a regex out of a search term:
 *  `\b` is ASCII-only in JavaScript and returns zero on a trailing accent, which
 *  looks exactly like an absence. a2.02 shipped that bug and a2.12 found it. */
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

const pgArray = (v: unknown): string[] => {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
};

const AUTHORED_ITEMS: Item[] = ACCORD_ADJECTIFS.map(toItem);
const ALL_REPAIRS = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE, ...RESPELL_REPAIRS_HOUSE];
const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection);

console.log(`\n  a2.03 "L'accord des adjectifs"${DRY_RUN ? '  (dry run)' : ''}\n`);

/* ══════════════════════════════════════════════════════════════════════════
 *  COUNTS, AGAINST EXPLICIT CONSTANTS
 * ═══════════════════════════════════════════════════════════════════════ */

if (CORPUS_UNIT_ID !== UNIT_ID) die(`the corpus says the unit is ${CORPUS_UNIT_ID} and this batch says ${UNIT_ID}`);
if (LESSON.id !== LESSON_ID) die(`the corpus says the lesson is ${LESSON_ID} and the lesson says ${LESSON.id}`);
if (ACCORD_ADJECTIFS.length !== EXPECTED_AUTHORED) die(`${ACCORD_ADJECTIFS.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (GRID_ROWS.length !== EXPECTED_GRID_ROWS) die(`${GRID_ROWS.length} grid rows, expected ${EXPECTED_GRID_ROWS}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (SOURCE_THEMES.length !== EXPECTED_SOURCE_THEMES) die(`imported out of ${SOURCE_THEMES.length} themes, expected ${EXPECTED_SOURCE_THEMES}`);
if (READ_ONLY_ROWS.length !== EXPECTED_READ_ONLY) die(`${READ_ONLY_ROWS.length} read-only rows, expected ${EXPECTED_READ_ONLY}`);
if (PATTERN_ORDER.length !== EXPECTED_PATTERNS) die(`${PATTERN_ORDER.length} patterns, expected ${EXPECTED_PATTERNS}`);
if (CELL_ORDER.length !== EXPECTED_CELLS) die(`${CELL_ORDER.length} cells, expected ${EXPECTED_CELLS}`);
if (UNSEEN.length !== EXPECTED_UNSEEN) die(`${UNSEEN.length} cold adjectives, expected ${EXPECTED_UNSEEN}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`${(LESSON.errorTriggers ?? []).length} triggers, expected ${EXPECTED_TRIGGERS}`);
if ((LESSON.drills ?? []).length !== EXPECTED_DRILLS) die(`${(LESSON.drills ?? []).length} drills, expected ${EXPECTED_DRILLS}`);
if ((LESSON.sheets ?? []).length !== EXPECTED_SHEETS) die(`${(LESSON.sheets ?? []).length} sheets, expected ${EXPECTED_SHEETS}`);
if (DICTATION_IDS.length !== EXPECTED_DICTATION) die(`${DICTATION_IDS.length} dictation targets, expected ${EXPECTED_DICTATION}`);
if (ALL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`${ALL_REPAIRS.length} respell repairs, expected ${EXPECTED_RESPELL_REPAIRS}`);
if (RESPELL_REPAIRS_VISIBLE.length !== EXPECTED_RESPELL_REPAIRS_VISIBLE) die(`${RESPELL_REPAIRS_VISIBLE.length} visible repairs, expected ${EXPECTED_RESPELL_REPAIRS_VISIBLE}`);
if (RESPELL_REPAIRS_INVISIBLE.length !== EXPECTED_RESPELL_REPAIRS_INVISIBLE) die(`${RESPELL_REPAIRS_INVISIBLE.length} invisible repairs, expected ${EXPECTED_RESPELL_REPAIRS_INVISIBLE}`);
if (RESPELL_REPAIRS_HOUSE.length !== EXPECTED_RESPELL_REPAIRS_HOUSE) die(`${RESPELL_REPAIRS_HOUSE.length} house-convention repairs, expected ${EXPECTED_RESPELL_REPAIRS_HOUSE}`);
if (RESPELL_ADDITIONS.length !== EXPECTED_RESPELL_ADDITIONS) die(`${RESPELL_ADDITIONS.length} respell additions, expected ${EXPECTED_RESPELL_ADDITIONS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} quiz questions, expected ${EXPECTED_QUESTIONS}`);
if ((quizSection as { rounds?: unknown[] }).rounds?.length !== EXPECTED_ROUNDS) die(`${(quizSection as { rounds?: unknown[] }).rounds?.length} rounds, expected ${EXPECTED_ROUNDS}`);
console.log(`  counts        ${ACCORD_ADJECTIFS.length} authored · ${IMPORTED_IDS.length} imported from ${SOURCE_THEMES.length} themes · ${LESSON.sections.length} sections · ${EXPECTED_ACTS} acts · ${qs.length} questions`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE THREE HEADWORDS THIS BUILD AUTHORS
 *
 *  a2.15 was the first A2 build to author an infinitive and corrections §2
 *  predicted it. This is the second build in the band to author anything, and
 *  the third headword is one NEITHER the brief NOR corrections §2 lists.
 * ═══════════════════════════════════════════════════════════════════════ */

const headwordRows = ACCORD_ADJECTIFS.filter((r) => r.role === 'naming');
if (headwordRows.length !== EXPECTED_AUTHORED_HEADWORDS) {
  die(`${headwordRows.length} authored headwords, expected ${EXPECTED_AUTHORED_HEADWORDS}`);
}
for (const r of headwordRows) {
  if (!AUTHORED_HEADWORDS[r.fr]) die(`${r.id} authors "${r.fr}", which is not in AUTHORED_HEADWORDS with a reason`);
  if (r.kind !== 'word') die(`${r.id} "${r.fr}" is a headword and its kind is ${r.kind}`);
  if ((r as { gender?: string }).gender) die(`${r.id} "${r.fr}" carries a gender. A gendered single-word row joins a1.03's ending population.`);
  if (/\s/.test(r.fr)) die(`${r.id} "${r.fr}" is a headword with a space in it. Bare adjectives only, no article.`);
  if (UNSEEN.some((u) => Object.values(u.forms).includes(r.fr))) {
    die(`${r.id} authors "${r.fr}", which is a form of a COLD adjective. Authoring it deletes the mission it exists for.`);
  }
}
console.log(`  headwords     ${headwordRows.length} authored: ${headwordRows.map((r) => r.fr).join(', ')}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GRID, EVERY COPY AGAINST EVERY OTHER COPY
 *
 *  a2.13 §6.2 and a2.14 §5. Sixteen cells appear FOUR times: the GRID constant,
 *  the authored row, the tapTable in the flow, and the reference sheet.
 * ═══════════════════════════════════════════════════════════════════════ */

for (const p of PATTERN_ORDER) {
  for (const c of CELL_ORDER) {
    const id = cellId(p, c);
    const row = ACCORD_ADJECTIFS.find((r) => r.id === id);
    if (!row) die(`no authored row for ${p}/${c}`);
    const expected = `${CELL_SUBJECT[c]} ${form(p, c)}.`;
    if (row.fr !== expected) die(`${id} is ${JSON.stringify(row.fr)} and the GRID constant builds ${JSON.stringify(expected)}`);
    if (!(row.respell ?? '').endsWith(formRespell(p, c))) {
      die(`${id} respells as ${JSON.stringify(row.respell)} and the GRID constant says the adjective is ${JSON.stringify(formRespell(p, c))}`);
    }
    if (row.pattern !== p || row.cell !== c) die(`${id} is tagged ${row.pattern}/${row.cell} and should be ${p}/${c}`);
  }
}

const grid = byId(GRID_SECTION_ID) as { rows?: { cells: string[] }[] } | undefined;
if (!grid?.rows) die(`${GRID_SECTION_ID} has no rows`);
if (grid.rows.length !== PATTERN_ORDER.length) die(`${GRID_SECTION_ID} has ${grid.rows.length} rows and there are ${PATTERN_ORDER.length} patterns`);
grid.rows.forEach((r, i) => {
  const p = PATTERN_ORDER[i];
  CELL_ORDER.forEach((c, j) => {
    if (r.cells[j] !== form(p, c)) die(`${GRID_SECTION_ID} row ${i} cell ${j} is ${JSON.stringify(r.cells[j])} and the corpus says ${JSON.stringify(form(p, c))}`);
  });
});

const sheet = ACCORD_ADJECTIFS_SHEETS[0];
const sheetGrid = sheet.sections?.find((s) => (s as { id?: string }).id === 'sheet-grid') as { rows?: string[][] } | undefined;
const sheetSay = sheet.sections?.find((s) => (s as { id?: string }).id === 'sheet-say') as { rows?: string[][] } | undefined;
if (!sheetGrid?.rows || !sheetSay?.rows) die('the sheet is missing sheet-grid or sheet-say');
sheetGrid.rows.forEach((r, i) => {
  const p = PATTERN_ORDER[i];
  CELL_ORDER.forEach((c, j) => {
    if (r[j + 1] !== form(p, c)) die(`sheet-grid row ${i} cell ${j} is ${JSON.stringify(r[j + 1])} and the corpus says ${JSON.stringify(form(p, c))}`);
  });
});
sheetSay.rows.forEach((r, i) => {
  const p = PATTERN_ORDER[i];
  CELL_ORDER.forEach((c, j) => {
    if (r[j + 1] !== formRespell(p, c)) die(`sheet-say row ${i} cell ${j} is ${JSON.stringify(r[j + 1])} and the corpus says ${JSON.stringify(formRespell(p, c))}`);
  });
});
console.log(`  grid          ${PATTERN_ORDER.length}x${CELL_ORDER.length} agrees across the corpus, ${GRID_SECTION_ID}, sheet-grid and sheet-say`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE -EUX MASCULINE PLURAL IS THE SINGULAR. DELIBERATELY.
 *
 *  This is the assertion the brief asks for by name, and it is what stops a
 *  future author adding an s. a1.14 owns the fact for `vieux` and `mauvais`;
 *  a2.03 generalises it to the class and names a1.14 on the screen that does it.
 * ═══════════════════════════════════════════════════════════════════════ */

const [aCell, bCell] = IDENTICAL_CELLS;
if (form(IDENTICAL_PATTERN, aCell) !== form(IDENTICAL_PATTERN, bCell)) {
  die(`${IDENTICAL_PATTERN}/${aCell} is ${JSON.stringify(form(IDENTICAL_PATTERN, aCell))} and ${IDENTICAL_PATTERN}/${bCell} is ${JSON.stringify(form(IDENTICAL_PATTERN, bCell))}.\n`
    + `  THEY MUST BE THE SAME WORD. An adjective already ending in -x has nowhere to put a plural s, so\n`
    + `  ${OVER_PLURALISED} is not French and never has been. ${IDENTICAL_UNIT} teaches this for vieux and mauvais and\n`
    + `  this lesson generalises it to the whole class. If you came here to "fix" the missing s, do not.`);
}
if (formRespell(IDENTICAL_PATTERN, aCell) !== formRespell(IDENTICAL_PATTERN, bCell)) {
  die(`the two identical cells respell differently: ${formRespell(IDENTICAL_PATTERN, aCell)} against ${formRespell(IDENTICAL_PATTERN, bCell)}`);
}
const identicalSection = byId(IDENTICAL_SECTION_ID);
if (!identicalSection) die(`${IDENTICAL_SECTION_ID} does not exist and it is the section that teaches the identical cell`);
if (!strings(identicalSection).some((s) => hasPhrase(s, IDENTICAL_UNIT))) {
  die(`${IDENTICAL_SECTION_ID} does not name ${IDENTICAL_UNIT}, and pointing at the earlier instance is the teaching`);
}
// And the whole lesson must never print the over-pluralised form except where
// it is MARKED as wrong. Four sections may, and each one has the same shape:
//
//   s18-errors   the `wrong` half of an error card, struck through by the renderer
//   s24-quiz     a distractor, in a question that asks which of four is not a word
//   s15-cold     the same, on three adjectives the learner has never seen
//   s22-review   a review card whose FRONT is "why is it not this?"
//
// Anywhere else it would be a wrong form presented as a right one, which on this
// subject is the single most expensive thing the lesson could do.
const overUses = LESSON.sections.filter((s) => strings(s).some((x) => OVER_PLURALISED_SHAPE.test(x)));
const legalOver = new Set([ERRORS_SECTION_ID, QUIZ_SECTION_ID, COLD_SECTION_ID, REVIEW_SECTION_ID]);
for (const s of overUses) {
  const sid = (s as { id?: string }).id ?? '?';
  if (!legalOver.has(sid)) die(`${sid} prints an over-pluralised form. Only ${[...legalOver].join(' and ')} may, and only as a marked error.`);
}
if (overUses.length === 0) die('nothing anywhere prints the over-pluralised form as an error, so the guard is guarding nothing');
console.log(`  -eux plural   ${form(IDENTICAL_PATTERN, aCell)} = ${form(IDENTICAL_PATTERN, bCell)}, asserted, and ${OVER_PLURALISED} appears only in ${overUses.length} marked places`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE INVARIABLE CLASS, WITH A REGULAR ADJECTIVE BESIDE IT
 *
 *  The brief's second layout claim: the class needs a regular adjective visible
 *  in the same section or it reads as a bug. Asserted BY INDEX, because the
 *  order is the claim.
 * ═══════════════════════════════════════════════════════════════════════ */

const inv = byId(INVARIABLE_SECTION_ID) as { examples?: { fr: string }[] } | undefined;
if (!inv?.examples) die(`${INVARIABLE_SECTION_ID} has no examples`);
const contrastFr = CONTRAST_PAIR.map((id) => ACCORD_ADJECTIFS.find((r) => r.id === id)?.fr ?? '');
if (inv.examples[0].fr !== contrastFr[0]) die(`${INVARIABLE_SECTION_ID} example 0 is ${JSON.stringify(inv.examples[0].fr)} and the regular adjective must come first: ${JSON.stringify(contrastFr[0])}`);
if (inv.examples[1].fr !== contrastFr[1]) die(`${INVARIABLE_SECTION_ID} example 1 is ${JSON.stringify(inv.examples[1].fr)} and the invariable one must be second: ${JSON.stringify(contrastFr[1])}`);
// The pair must genuinely be a minimal pair: same noun, same number, one word
// apart. Otherwise the section shows two sentences rather than a contrast.
const stem = (s: string) => s.replace(/\s+\S+\.$/, '');
if (stem(contrastFr[0]) !== stem(contrastFr[1])) {
  die(`the contrast pair is not a minimal pair: ${JSON.stringify(contrastFr[0])} against ${JSON.stringify(contrastFr[1])}. Everything but the last word must match.`);
}
if (!strings(inv).some((s) => hasPhrase(s, 'a1.13'))) die(`${INVARIABLE_SECTION_ID} does not name a1.13, which owns the invariable colours`);
console.log(`  invariable    ${INVARIABLE_SECTION_ID} shows ${JSON.stringify(contrastFr[0])} then ${JSON.stringify(contrastFr[1])}, one word apart`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SOUND CHANGE IS COVERED BY A LISTENING ITEM
 * ═══════════════════════════════════════════════════════════════════════ */

const listening = byId(SILENT_SECTION_ID) as { lines?: { fr: string }[]; questions?: unknown[] } | undefined;
if (!listening?.lines?.length) die(`${SILENT_SECTION_ID} is not a listening section with lines`);
if (!listening.questions?.length) die(`${SILENT_SECTION_ID} has lines and no questions`);
const ear = byId(EAR_SECTION_ID) as { rows?: { cells: string[] }[] } | undefined;
if (!ear?.rows) die(`${EAR_SECTION_ID} has no rows`);
for (const p of ['eux', 'if'] as Pattern[]) {
  const row = ear.rows.find((r) => r.cells[0] === form(p, 'm.sg'));
  if (!row) die(`${EAR_SECTION_ID} has no row for the ${p} group, and the audible feminine is what that section exists for`);
  if (row.cells[1] !== form(p, 'f.sg')) die(`${EAR_SECTION_ID} row for ${p} shows ${JSON.stringify(row.cells[1])} rather than ${JSON.stringify(form(p, 'f.sg'))}`);
}
// AND THE EAR ITEM IS ASSERTED BY ITEM, not just by section. The brief asks for
// the -eux sound change to be "covered by a listening item, asserted by item".
const euxEarQuestion = qs.find((q) => q.format === 'listenChoose' && q.say === ACCORD_ADJECTIFS.find((r) => r.id === cellId('eux', 'f.sg'))?.fr);
if (!euxEarQuestion) die(`no listenChoose question plays ${JSON.stringify(cellId('eux', 'f.sg'))}, and the -eux feminine is the one agreement in this lesson the ear can genuinely do`);
const ifEarQuestion = qs.find((q) => q.format === 'listenChoose' && q.say === ACCORD_ADJECTIFS.find((r) => r.id === cellId('if', 'f.sg'))?.fr);
if (!ifEarQuestion) die(`no listenChoose question plays the ${'if'} feminine`);
console.log(`  the ear       ${SILENT_SECTION_ID} + ${EAR_SECTION_ID}, and listenChoose covers the -eux and -if feminines by item`);

/* ══════════════════════════════════════════════════════════════════════════
 *  NO EAR QUESTION MAY ASK BETWEEN TWO FORMS THAT ARE ONE SOUND
 *
 *  Corrections §5. A `listenChoose` offering two members of one homophone group
 *  has no correct answer and marking one right certifies a bug. THIS LESSON HAS
 *  SIX SUCH GROUPS, one per pattern per gender, and they are the whole point of
 *  the listening act: the singular and the plural of every cell are one sound.
 * ═══════════════════════════════════════════════════════════════════════ */

const HOMOPHONE_FORMS: string[][] = PATTERN_ORDER.flatMap((p) => [
  [form(p, 'm.sg'), form(p, 'm.pl')],
  [form(p, 'f.sg'), form(p, 'f.pl')],
]).filter(([a, b]) => a !== b);
for (const q of qs) {
  if (q.format !== 'listenChoose') continue;
  const opts = q.opts ?? [];
  for (const group of HOMOPHONE_FORMS) {
    for (const x of group) {
      for (const y of group) {
        if (x === y) continue;
        for (let i = 0; i < opts.length; i += 1) {
          for (let j = 0; j < opts.length; j += 1) {
            if (i === j) continue;
            // Fires only when two options differ ONLY by a member of one group,
            // so an option pair that also differs by its subject stays legal.
            if (opts[i].replace(x, y) === opts[j]) {
              die(`a listenChoose offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}, which are one sound. Corrections §5: marking one right certifies a bug.`);
            }
          }
        }
      }
    }
  }
}
console.log(`  homophones    ${HOMOPHONE_FORMS.length} groups, no ear question offers two members of one`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE THREE COLD ADJECTIVES, IN BOTH DIRECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

const coldHomes = new Set<string>(UNSEEN_HOMES);
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '?';
  const hit = strings(s).find((x) => UNSEEN_SHAPE.test(x));
  if (hit && !coldHomes.has(sid)) {
    die(`${sid} prints a cold adjective: ${JSON.stringify(hit.slice(0, 90))}\n  Only ${[...coldHomes].join(' and ')} may, and a cold adjective on a teaching card deletes the mission it exists for.`);
  }
}
// AND THEY MUST STILL BE THERE.
for (const home of UNSEEN_HOMES) {
  const s = byId(home);
  if (!s) die(`${home} is named as a home for the cold adjectives and does not exist`);
  const found = UNSEEN.filter((u) => strings(s).some((x) => hasPhrase(x, u.masculine)));
  if (found.length !== UNSEEN.length) {
    die(`${home} names ${found.length} of the ${UNSEEN.length} cold adjectives. A guard whose reservation list has emptied has stopped guarding.`);
  }
}
// Not a corpus row, not an itemId, not a deck release, not a term, not a drill.
for (const u of UNSEEN) {
  for (const f of Object.values(u.forms)) {
    if (ACCORD_ADJECTIFS.some((r) => hasPhrase(r.fr, f))) die(`a corpus row holds the cold form ${JSON.stringify(f)}`);
  }
  if (IMPORTED_IDS.includes(u.liveRow ?? '')) die(`${u.liveRow} (${u.masculine}) is imported, and it is a cold adjective`);
  if (ACCORD_ADJECTIFS_ITEM_IDS.includes(u.liveRow ?? '')) die(`${u.liveRow} (${u.masculine}) is an itemId`);
  for (const tranche of ACCORD_ADJECTIFS_DECK_TRANCHE) {
    if (tranche.includes(u.liveRow ?? '')) die(`${u.liveRow} (${u.masculine}) is released by a deck tranche`);
  }
  if (strings(LESSON.terms ?? {}).some((x) => hasPhrase(x, u.masculine))) die(`a term names the cold adjective ${u.masculine}`);
  if (strings(LESSON.drills ?? []).some((x) => hasPhrase(x, u.masculine))) die(`a drill names the cold adjective ${u.masculine}`);
  if (strings(LESSON.sheets ?? []).some((x) => hasPhrase(x, u.masculine))) die(`the sheet names the cold adjective ${u.masculine}`);
}
// And the exam must genuinely make the learner PRODUCE them. Free text only:
// mcq would be recognition and the whole claim is that they can build a form.
const coldProduction = qs.filter((q) => (q.format === 'typeIn' || q.format === 'errorSpot')
  && UNSEEN_FORMS.some((f) => hasPhrase(q.answer ?? '', f) || (q.accept ?? []).some((a) => hasPhrase(a, f))));
if (coldProduction.length < UNSEEN.length) {
  die(`only ${coldProduction.length} free-text questions produce a cold form, and there are ${UNSEEN.length} cold adjectives.\n`
    + '  a2.15 §6: a groupDrill check is an mcq, so the mission cannot be the production surface. The exam is.');
}
/* PER ADJECTIVE, NOT IN TOTAL. The count above passes with four questions on one
   word and none on the other two, which is exactly what the mutation harness
   demonstrated: turning one of the five into an mcq left four, four is still
   more than three, and the guard stayed green while a whole pattern lost its
   only production test. */
for (const u of UNSEEN) {
  const mine = coldProduction.filter((q) => Object.values(u.forms).some((f) => hasPhrase(q.answer ?? '', f)));
  if (!mine.length) {
    die(`nothing in the exam makes the learner PRODUCE a form of ${u.masculine}, which is the ${u.pattern} pattern's only cold test.\n`
      + '  The whole claim of this lesson is that four groups beat sixteen words, and it is only true if every group is tested cold.');
  }
}
console.log(`  cold          ${UNSEEN.map((u) => u.masculine).join(', ')} in ${UNSEEN_HOMES.length} sections only, ${coldProduction.length} free-text questions produce them`);

/* ══════════════════════════════════════════════════════════════════════════
 *  a2.16 AND a2.17 STILL HAVE LESSONS
 * ═══════════════════════════════════════════════════════════════════════ */

/* THE WALK INCLUDES THE AUTHORED CORPUS ROWS, AND THE MUTATION HARNESS IS WHY.
 *
 * The first version walked the LESSON only — sections, sheets, terms, intro,
 * overview, acts, drills — which is what every build in this band walks. Two
 * mutations wrote a2.17's `-ment` adverb and a2.08's comparative into an
 * authored row's `notes` and ALL THREE LAYERS MISSED THEM. They were the only
 * two blind spots in twenty-six.
 *
 * `Item.notes` reaches no component today: it is referenced by density.logic.ts,
 * schema.ts and content.logic.ts and by nothing in `src/components`. So the leak
 * was not visible to a learner, and it was still a hole, because the guard's
 * claim is "this lesson does not teach a2.17's subject" and the notes are
 * content this build authored and owns. schema.ts calls the field "a teaching
 * note, hack or clue" and says the dictation why-tip lands there, so a renderer
 * arriving later would ship it.
 *
 * `fr`, `en` and `notes` on every authored row are now in the walk. */
const production = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro, ...strings(LESSON.overview ?? {}), ...strings(LESSON.acts ?? []),
  ...strings(LESSON.drills ?? []),
  ...ACCORD_ADJECTIFS.flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']),
];
for (const s of production) {
  const m = BEAU_SHAPE.exec(s);
  if (m) die(`a production surface prints ${JSON.stringify(m[0])}: ${JSON.stringify(s.slice(0, 100))}\n  ${BEAU_UNIT} is seq 11 and it is the next lesson on the trail. This is the guard that keeps it alive.`);
}
for (const s of production) {
  const m = ADVERB_SHAPE.exec(s);
  if (m) die(`a production surface prints the adverb ${JSON.stringify(m[0])}: ${JSON.stringify(s.slice(0, 100))}\n  Building adverbs off the feminine is ${ADVERB_UNIT}, seq 12.`);
}
// THE EXCEPTION LIST MUST STAY EMPTY. The shape is built from feminine stems
// rather than from the suffix, so a noun or an English word cannot reach it and
// there is nothing to except. a2.14 §6.
if (ADVERB_ALLOWED.length) die(`ADVERB_ALLOWED has ${ADVERB_ALLOWED.length} entries. The shape is stem-based and needs none; an exception here means somebody widened it back to the suffix.`);
// AND THE GUARD MUST BE ABLE TO FIRE, on the thing it exists for and not on the
// five strings that broke the two earlier versions of it.
for (const w of ADVERB_MUST_FIRE) if (!ADVERB_SHAPE.test(w)) die(`ADVERB_SHAPE does not fire on ${JSON.stringify(w)}, so it would not catch a real leak into ${ADVERB_UNIT}`);
for (const w of ADVERB_MUST_NOT_FIRE) if (ADVERB_SHAPE.test(w)) die(`ADVERB_SHAPE fires on ${JSON.stringify(w)}, which is a noun or an English word`);
for (const s of production) {
  const m = COMPARATIVE_SHAPE.exec(s);
  if (m) die(`a production surface prints ${JSON.stringify(m[0])}, which is ${COMPARATIVE_UNIT}'s: ${JSON.stringify(s.slice(0, 100))}`);
}
// AND THE GUARD MUST BE ABLE TO FIRE. `beaucoup` contains `beau` and `comment`
// contains `ment`; if the boundary-aware shape ever regresses to a substring
// check, these two prove it immediately.
if (BEAU_SHAPE.test('beaucoup')) die('BEAU_SHAPE fires on "beaucoup". The boundary is broken and every guard built on it is now a false positive.');
if (ADVERB_SHAPE.test('comment') && !ADVERB_ALLOWED.includes('comment')) die('ADVERB_SHAPE fires on "comment" and it is not in the allow list');
if (!BEAU_SHAPE.test('un beau jardin')) die('BEAU_SHAPE does not fire on "un beau jardin", so it would not catch a real leak');
console.log(`  neighbours    no beau/nouveau/vieux form, no -ment adverb, no comparative, and all three shapes fire on a real leak`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME, AND THE JARGON WALK
 * ═══════════════════════════════════════════════════════════════════════ */

const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
const reframeUses = production.reduce((n, s) => n + countPhrase(s, REFRAME), 0);
if (reframeSections !== EXPECTED_REFRAME_SECTIONS) die(`the reframe is in ${reframeSections} sections, expected ${EXPECTED_REFRAME_SECTIONS}`);
if (reframeUses !== EXPECTED_REFRAME_USES) die(`the reframe appears ${reframeUses} times, expected ${EXPECTED_REFRAME_USES}`);
if (LESSON.reframe !== REFRAME) die('Lesson.reframe is not the corpus REFRAME');
/* AND IT MUST STAY SHORT ENOUGH TO RUN MID-SENTENCE.
   Doctrine §B.4: an A2 reframe is a rule the learner runs while the sentence is
   already moving, and the test is whether they could apply it in the half-second
   between the noun and the adjective. A count guard cannot see a reframe getting
   longer, because replacing the constant replaces it everywhere and the count
   does not move; the mutation harness found that. Twelve words is the cap
   density.logic.ts puts on every string in an xl section, and it is the right
   ceiling here for the same reason. */
const REFRAME_WORD_CAP = 12;
if (REFRAME.trim().split(/\s+/).length > REFRAME_WORD_CAP) {
  die(`the reframe is ${REFRAME.trim().split(/\s+/).length} words and the ceiling is ${REFRAME_WORD_CAP}.\n`
    + '  Doctrine §B.4: if it needs a table to apply, it is a term rather than a reframe.');
}

/* THE WALK INCLUDES `intro` AND `overview`, AND IT RUNS OVER `display()` AS
   WELL AS `prose()`. Ledger §0 and a2.15 §3: a2.11 shipped "third person" in
   `intro`, which is drawn on the overview card and the lesson cover, and a2.15
   shipped a banned word in a cardDeck `sub`, which `prose()` drops. */
const learnerProse = [
  ...prose(LESSON.sections), ...prose(LESSON.sheets ?? []), ...prose(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...prose(LESSON.overview ?? {}), ...prose(LESSON.acts ?? []),
  ...prose(LESSON.drills ?? []),
].join('\n');
const learnerDisplay = [
  ...display(LESSON.sections), ...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...display(LESSON.overview ?? {}), ...display(LESSON.acts ?? []),
  ...display(LESSON.drills ?? []),
].join('\n');
for (const j of JARGON) {
  for (const w of [j, `${j}s`]) {
    const hitP = [...prose(LESSON.sections), ...prose(LESSON.sheets ?? []), ...prose(LESSON.terms ?? {}),
      LESSON.intro ?? '', ...prose(LESSON.acts ?? []), ...prose(LESSON.drills ?? [])].find((s) => hasPhrase(s, w));
    if (hitP) die(`grammar jargon on a learner surface: ${JSON.stringify(w)} in ${JSON.stringify(hitP.slice(0, 110))}`);
    const hitD = [...display(LESSON.sections), ...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}),
      ...display(LESSON.acts ?? []), ...display(LESSON.drills ?? [])].find((s) => hasPhrase(s, w));
    if (hitD) die(`grammar jargon in a display-only field (a sub, most likely): ${JSON.stringify(w)} in ${JSON.stringify(hitD.slice(0, 110))}`);
  }
}
/* `overview.titleEn` AND `overview.subFr` ARE EXEMPT, AND IT IS NOT A DODGE.
   Both must equal the unit's own `title` and `sub` byte for byte — the batch
   asserts the unit fields a few lines below — and the unit is the curriculum
   spine's, not this lesson's. "Adjective Agreement" is the database's title for
   a2.03 and a lesson cannot reword it without a spine change, which
   `author-full-curriculum-spine.ts` cannot safely do (it is 74/75 units stale
   and would revert every A2 title if run). a2.15 ships "Irregular Verbs 5" in
   the same field for the same reason. What IS checked is that the exemption is
   exactly those two fields and that they match the unit. */
if (LESSON.overview?.titleEn !== UNIT.title) die(`overview.titleEn is ${JSON.stringify(LESSON.overview?.titleEn)} and the unit title is ${JSON.stringify(UNIT.title)}`);
if (LESSON.overview?.subFr !== UNIT.sub) die(`overview.subFr is ${JSON.stringify(LESSON.overview?.subFr)} and the unit sub is ${JSON.stringify(UNIT.sub)}`);
for (const j of JARGON) {
  for (const w of [j, `${j}s`]) {
    const rest = [LESSON.overview?.introFr ?? '', LESSON.overview?.glyph ?? ''];
    if (rest.some((s) => hasPhrase(s, w))) die(`grammar jargon in an overview field that is NOT exempt: ${JSON.stringify(w)}`);
  }
}
// `intro` in its own assertion, so a later author who trims the walk back fails
// with the reason rather than silently.
for (const j of JARGON) {
  if (hasPhrase(LESSON.intro, j)) die(`Lesson.intro holds jargon: ${JSON.stringify(j)}. It is drawn on the overview card AND the lesson cover.`);
}
if (!LESSON.intro || LESSON.intro.length < 80) die('Lesson.intro is missing or too short to be the learner surface it is');
// House copy, over display() so a `sub` is seen.
if (learnerDisplay.includes('—')) die('an em dash reached a learner surface');
if (/honest/i.test(learnerDisplay)) die('"honest" reached a learner surface');
console.log(`  copy          reframe in ${reframeSections} sections / ${reframeUses} uses, ${JARGON.length} jargon terms checked in singular and plural, over prose() and display()`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SECTION MIX, MEASURED AGAINST THE NINE VERB LESSONS
 * ═══════════════════════════════════════════════════════════════════════ */

const mix: Record<string, number> = {};
for (const s of LESSON.sections) mix[s.type] = (mix[s.type] ?? 0) + 1;
if ((mix.tapTable ?? 0) !== EXPECTED_TAPTABLES) die(`${mix.tapTable ?? 0} tapTables, expected ${EXPECTED_TAPTABLES}`);
if ((mix.useCases ?? 0) !== EXPECTED_USECASES) die(`${mix.useCases ?? 0} useCases, expected ${EXPECTED_USECASES}`);
if ((mix.vocabThemes ?? 0) !== EXPECTED_VOCABTHEMES) die(`${mix.vocabThemes ?? 0} vocabThemes, expected ${EXPECTED_VOCABTHEMES}`);
if ((mix.groupDrill ?? 0) !== EXPECTED_GROUPDRILLS) die(`${mix.groupDrill ?? 0} groupDrills, expected ${EXPECTED_GROUPDRILLS}. The band averages 4.5 and leaning on it is what makes this lesson feel like the ten before it.`);
if ((mix.cardDeck ?? 0) !== EXPECTED_CARDDECKS) die(`${mix.cardDeck ?? 0} cardDecks, expected ${EXPECTED_CARDDECKS}`);
if ((mix.table ?? 0) !== 0) die('a `table` in the flow is a table-in-core density failure. The full grid belongs in the sheet.');
if ((mix.quiz ?? 0) !== 1) die(`${mix.quiz} quiz sections. A second is silently never rendered.`);
if ((mix.cheatSheet ?? 0) !== 0) die('a cheatSheet renders its title and nothing under it inside a reference sheet');
console.log(`  mix           ${Object.entries(mix).sort((a, b) => b[1] - a[1]).map(([k, v]) => (v > 1 ? `${k}x${v}` : k)).join(' ')}`);

/* THE LAYOUT RULES THAT ARE BUGS. */
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '?';
  if (!sid || sid === '?') die('a section has no id');
  if (s.type === 'commonErrors' && !(s as { swipe?: boolean }).swipe) die(`${sid} is a commonErrors without swipe, which draws a blank screen`);
  if (s.type === 'reading') {
    const r = s as { text: string; glossary?: { word: string }[]; questions?: unknown[]; questionsInModal?: boolean };
    if (/\n/.test(r.text)) die(`${sid}: a reading passage is ONE BLOCK. PassagePage splits on sentence ends and discards an authored newline.`);
    if (r.glossary?.length && (!r.questionsInModal || !r.questions?.length)) {
      die(`${sid}: a reading glossary needs questionsInModal AND questions, or nothing reaches the glossary renderer`);
    }
    for (const g of r.glossary ?? []) {
      if (g.word.trim().split(/\s+/).length >= 5) die(`${sid}: glossary key ${JSON.stringify(g.word)} is five or more words and MAX_GLOSS_WORDS is four`);
      if (!r.text.includes(g.word)) die(`${sid}: glossary key ${JSON.stringify(g.word)} does not appear in the passage`);
    }
  }
  if (s.type === 'tapTable') {
    const rows = (s as { rows: unknown[] }).rows;
    if (rows.length > 6) die(`${sid}: ${rows.length} tapTable rows. tapTable is not in ownsLayout() and six is the Pixel 6 ceiling.`);
  }
  const terms = (s as { terms?: string[] }).terms ?? [];
  if (terms.length > 3) die(`${sid} declares ${terms.length} term chips and the renderer shows three`);
  for (const t of terms) if (!LESSON.terms?.[t]) die(`${sid} names the term ${t}, which the lesson does not declare`);
  /* AND THE CHIPS ON ONE ROW MUST FIT ON IT.
     Found on a Pixel 6: `words ending in -eux` and `words ending in -if` share a
     row on s13-bank and the second was drawn as "words ending in", losing the
     two characters that name the group. Every host gate was green because the
     strings are valid and both chips render; only the WIDTH was wrong. Ledger
     §a2.14-13's finding one field over.

     THE FIRST VERSION OF THIS GUARD WAS SET AT 32 AND WAS WRONG, in the
     direction that costs a correct build: it failed s14-reading and s16-never,
     whose chips were read off the phone on this same pass and render IN FULL.
     Read off three hub screens:

       37   "the ones that never change" + "four shapes"      BOTH FULL
       39   "words ending in -eux" + "words ending in -if"    SECOND CUT
       40   three chips on s12-ear                            over, by the guard

     So the budget is 37, measured, and like the title ceiling IT IS A WIDTH
     RATHER THAN A COUNT: 37 of narrow lowercase fits and 39 of wider glyphs does
     not, so anything from 34 up stays UNVERIFIED until it has been read off the
     hub. Necessary and not sufficient. */
  const CHIP_ROW_BUDGET = 37;
  const chipWidth = terms.reduce((n, t) => n + (LESSON.terms?.[t]?.term.length ?? 0), 0);
  if (chipWidth > CHIP_ROW_BUDGET) {
    die(`${sid}'s term chips total ${chipWidth} characters (${terms.map((t) => JSON.stringify(LESSON.terms?.[t]?.term)).join(' + ')}) and the row budget is ${CHIP_ROW_BUDGET}.\n`
      + '  The chip that overflows is TRUNCATED, and it is usually the one carrying the distinguishing word.');
  }
  if (s.type === 'practice' && (s as { skill?: string }).skill === 'write') {
    die(`${sid} is a practice with skill 'write', which draws no writing surface at all`);
  }
  const title = (s as { title?: string }).title ?? '';
  if (title.length > MISSION_TITLE_MAX) die(`${sid} title is ${title.length} characters and the hub row ceiling is ${MISSION_TITLE_MAX}`);
}
// `frSub` is the one field that is deliberately French. a2.14 §14 put an English
// constant in one and it was the only English line in a column of French subs.
/* `frSub` IS THE ONE FIELD THAT IS DELIBERATELY FRENCH, and nothing in the band
   checks it. a2.14 §14 put an English constant in one and it shipped as the only
   lowercase English line in a column of French subs; neither the batch, the
   merge nor the test could see it, and a2.14 said in as many words that it was
   worth a guard and that it did not add one. This is that guard.

   The heuristic: a French sub either carries a character English does not, or
   holds a French function word. Checked with hasPhrase rather than a regex,
   because a start-anchored version rejected « Tout, en un paquet » on the comma
   after `Tout` and that is exactly the class of false positive invariants §0
   warns about. */
const FRENCH_ACCENT = /[àâçéèêëîïôûùüÿœ’]/i;
const FRENCH_WORDS = ['la', 'le', 'les', 'un', 'une', 'des', 'du', 'de', 'en', 'dans',
  'ce', 'ces', 'que', 'qui', 'ne', 'pas', 'vous', 'quel', 'quelle', 'trois', 'quatre',
  'cinq', 'tout', 'et', 'sur', 'avec', 'pour', 'au', 'aux', 'mots', 'faire'];
let checkedSubs = 0;
for (const s of LESSON.sections) {
  const frSub = (s as { frSub?: string }).frSub;
  if (!frSub) die(`${(s as { id?: string }).id} has no frSub, and every mission row in this band carries one`);
  checkedSubs += 1;
  const looksFrench = FRENCH_ACCENT.test(frSub) || frSub.includes("'") || FRENCH_WORDS.some((w) => hasPhrase(frSub, w));
  if (!looksFrench) {
    die(`${(s as { id?: string }).id} has an frSub that does not look French: ${JSON.stringify(frSub)}\n`
      + '  Invariants §8: English UI chrome, French content, and frSub is the one field that is deliberately French.');
  }
}
// And the check must be able to fail, or it is 25 assertions that always pass.
if (FRENCH_ACCENT.test('The Whole Thing') || FRENCH_WORDS.some((w) => hasPhrase('The Whole Thing', w))) {
  die('the frSub heuristic accepts "The Whole Thing", so it would not catch a2.14\'s defect');
}
/* EVERY ROLE-PLAY TURN OFFERS AT LEAST TWO WAYS TO ANSWER, AND SAYS WHAT THE
   MODEL LINE MEANS.
   `scenario.logic.test.ts` enforces both across the WHOLE SEED and nothing in
   the doctrine, the invariants, the corrections or the ledger mentions either.
   a2.03 v1 shipped three turns with one alternative apiece, every gate in this
   build was green, and the suite went red the moment the merge landed. The rule
   is now checked here, in the merge and in the test, so the next author in this
   band finds out before the apply rather than after it. */
{
  const scen = LESSON.sections.find((s) => s.type === 'scenario') as { turns?: { alts?: unknown[]; userEn?: string; user: string }[] } | undefined;
  if (!scen?.turns?.length) die('the lesson has no scenario turns');
  const thin = scen.turns.map((t, i) => ((t.alts?.length ?? 0) >= 2 ? null : `turn ${i}`)).filter(Boolean);
  if (thin.length) {
    die(`${thin.length} role-play turn(s) offer fewer than two alternatives: ${thin.join(', ')}\n`
      + '  scenario.logic.test.ts, seed-wide: "one accepted answer per turn is the cloze-test failure this\n'
      + '  content exists to fix". It is not in any document this band reads.');
  }
  const untranslated = scen.turns.map((t, i) => (t.userEn?.trim() ? null : `turn ${i}`)).filter(Boolean);
  if (untranslated.length) die(`${untranslated.length} role-play turn(s) have no userEn: ${untranslated.join(', ')}`);
  for (const [i, t] of scen.turns.entries()) {
    const all = [t.user, ...(t.alts ?? []).map((a) => (a as { fr: string }).fr)];
    if (new Set(all).size !== all.length) die(`role-play turn ${i} repeats an answer`);
  }
  console.log(`  role play     ${scen.turns.length} turns, every one with a translation and at least two ways to answer`);
}

console.log(`  layout        every section has an id, a French frSub, at most three chips and a title inside ${MISSION_TITLE_MAX}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  ACTS, TRANCHES AND REACHABILITY
 * ═══════════════════════════════════════════════════════════════════════ */

const sectionIds = LESSON.sections.map((s) => (s as { id: string }).id);
const claimed = new Set<string>();
for (const a of ACCORD_ADJECTIFS_ACTS) {
  for (const sid of a.sections) {
    if (!sectionIds.includes(sid)) die(`act ${a.id} names ${sid}, which is not a section`);
    if (claimed.has(sid)) die(`${sid} is claimed by two acts`);
    claimed.add(sid);
  }
}
for (const sid of sectionIds) if (!claimed.has(sid)) die(`${sid} is in no act`);

/* THE OWNS MUST OUTWEIGH THE PARADIGM. Doctrine §B.5. */
const ownsAct = ACCORD_ADJECTIFS_ACTS.find((a) => a.id === 'act3');
const gridAct = ACCORD_ADJECTIFS_ACTS.find((a) => a.id === 'act2');
if (!ownsAct || !gridAct) die('act2 or act3 is missing');
if (ownsAct.sections.length <= gridAct.sections.length) {
  die(`the Owns act has ${ownsAct.sections.length} missions and the grid act has ${gridAct.sections.length}.\n`
    + '  Doctrine §B.5: if the paradigm gets more missions than the Owns, the wrong lesson was built.\n'
    + '  a1.13 and a1.14 both already print a four-form grid; the two named groups are what is new.');
}

/* NOTHING IS RELEASED BEFORE THE ACT THAT SHOWS IT. */
if (ACCORD_ADJECTIFS_DECK_TRANCHE.length !== ACCORD_ADJECTIFS_ACTS.length) {
  die(`${ACCORD_ADJECTIFS_DECK_TRANCHE.length} tranches and ${ACCORD_ADJECTIFS_ACTS.length} acts, and they are index-aligned`);
}
const released = new Set<string>();
for (const t of ACCORD_ADJECTIFS_DECK_TRANCHE) {
  for (const id of t) {
    if (!ACCORD_ADJECTIFS_ITEM_IDS.includes(id)) die(`a tranche releases ${id}, which is not an itemId`);
    if (released.has(id)) die(`${id} is released by two tranches`);
    released.add(id);
  }
}

/* EVERY itemId IS DRAWN OR RELEASED. a1.08 shipped forty-three that were
   neither: they resolved perfectly and no component ever drew them. */
const drawn = new Set<string>();
const collectIds = (v: unknown) => {
  if (Array.isArray(v)) { for (const x of v) collectIds(x); return; }
  if (!v || typeof v !== 'object') return;
  const o = v as Record<string, unknown>;
  for (const k of ['itemId', 'practiceOn']) {
    if (typeof o[k] === 'string') drawn.add(o[k] as string);
    if (Array.isArray(o[k])) for (const x of o[k] as unknown[]) if (typeof x === 'string') drawn.add(x);
  }
  for (const k of ['itemIds', 'items']) {
    if (Array.isArray(o[k])) for (const x of o[k] as unknown[]) if (typeof x === 'string' && x.startsWith('fr.')) drawn.add(x);
  }
  for (const x of Object.values(o)) collectIds(x);
};
collectIds(LESSON.sections);
collectIds(LESSON.drills ?? []);
collectIds(LESSON.terms ?? {});
const withFlashcard = new Set([
  ...ACCORD_ADJECTIFS.filter((r) => r.drills.includes('flashcard')).map((r) => r.id),
  ...IMPORTED_IDS.filter((id) => (IMPORTED_BY_ID.get(id)?.drills ?? []).includes('flashcard')),
  // The two evidence rows gain `flashcard` in this transaction.
  ...EVIDENCE_IDS,
]);
const unreachable = ACCORD_ADJECTIFS_ITEM_IDS.filter((id) => !drawn.has(id) && !(released.has(id) && withFlashcard.has(id)));
if (unreachable.length) {
  die(`${unreachable.length} itemIds are neither drawn by a section nor released with a flashcard drill:\n  ${unreachable.join('\n  ')}`);
}
/* AND NOTHING IS AN itemId THAT IS NOT A REAL ROW. */
const knownIds = new Set([...AUTHORED_IDS, ...IMPORTED_IDS]);
for (const id of ACCORD_ADJECTIFS_ITEM_IDS) if (!knownIds.has(id)) die(`itemId ${id} is neither authored nor imported`);
for (const id of READ_ONLY_ROWS.map((r) => r.id)) {
  if (ACCORD_ADJECTIFS_ITEM_IDS.includes(id)) die(`${id} is a READ-ONLY row and it is in itemIds`);
}
/* SPEAK ITEMS NEED voiceflash. */
for (const id of ACCORD_ADJECTIFS_SPEAK_IDS) {
  const drills = ACCORD_ADJECTIFS.find((r) => r.id === id)?.drills ?? IMPORTED_BY_ID.get(id)?.drills ?? [];
  if (!drills.includes('voiceflash')) die(`${id} is in the speak list and has no voiceflash drill, so the mic cannot score it`);
}
console.log(`  reachability  ${ACCORD_ADJECTIFS_ITEM_IDS.length} items, ${drawn.size} drawn, ${released.size} released, 0 unreachable`);

/* ══════════════════════════════════════════════════════════════════════════
 *  DRILLS, TRIGGERS AND ROUNDS
 * ═══════════════════════════════════════════════════════════════════════ */

const drillIds = new Set((LESSON.drills ?? []).map((d) => d.id));
for (const t of LESSON.errorTriggers ?? []) {
  if (!drillIds.has(t.drill)) die(`trigger ${t.id} names drill ${t.drill}, which does not exist`);
  if (t.retest && !drillIds.has(t.retest)) die(`trigger ${t.id} names retest ${t.retest}, which does not exist`);
  for (const d of t.detectOn) {
    const base = d.split('/')[0];
    if (!sectionIds.includes(base)) die(`trigger ${t.id} detects on ${d}, and ${base} is not a section`);
  }
}
/* EACH ROUND LEADS ON A DIFFERENT TRIGGER. `drillForRound` returns the FIRST
   target that has a drill and then stops, so a drill named only in second place
   can never fire. a1.05 ships two such drills and its own test fails on them. */
const rounds = (quizSection as { rounds: { id: string; targets?: string[] }[] }).rounds;
const leads = rounds.map((r) => r.targets?.[0]);
if (new Set(leads).size !== leads.length) die(`two rounds lead on the same trigger: ${leads.join(', ')}`);
const triggerIds = new Set((LESSON.errorTriggers ?? []).map((t) => t.id));
for (const r of rounds) for (const t of r.targets ?? []) if (!triggerIds.has(t)) die(`round ${r.id} targets ${t}, which is not a trigger`);
for (const t of triggerIds) if (!leads.includes(t)) die(`trigger ${t} is never the FIRST target of any round, so its drill can never fire`);
/* A SORT DRILL SCORES AGAINST THE CORPUS, so its items are ids and not display
   strings. Passing display strings here validates as broken ids. */
for (const d of LESSON.drills ?? []) {
  if (d.format !== 'sort') continue;
  for (const item of d.items ?? []) if (!knownIds.has(item)) die(`drill ${d.id} names ${JSON.stringify(item)}, which is not a corpus id`);
}
console.log(`  drills        ${drillIds.size} drills, ${triggerIds.size} triggers, ${rounds.length} rounds, every drill reachable as a first target`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

const fmt: Record<string, number> = {};
for (const q of qs) fmt[q.format ?? 'mcq'] = (fmt[q.format ?? 'mcq'] ?? 0) + 1;
if ((fmt.mcq ?? 0) * 2 > qs.length) die(`${fmt.mcq} of ${qs.length} questions are mcq and at most half may be`);
for (const [i, q] of qs.entries()) {
  if (!q.why) die(`question ${i + 1} has no why`);
  if (!q.ref) die(`question ${i + 1} has no ref`);
  if (!sectionIds.includes(q.ref)) die(`question ${i + 1} refs ${q.ref}, which is not a section`);
  if ((q.format === 'typeIn' || q.format === 'errorSpot')) {
    if (!q.answer) die(`question ${i + 1} is ${q.format} with no answer`);
    if (!matchesAccept(q.answer, q.accept ?? [])) {
      die(`question ${i + 1} (${q.format}) does not accept the answer it displays: ${JSON.stringify(q.answer)} against ${JSON.stringify(q.accept)}`);
    }
  }
  if (q.format === 'errorSpot' && !q.prompt) {
    die(`question ${i + 1} is an errorSpot with no prompt. ErrorSpotCard renders q alone, so the learner is asked to fix a phrase that never appears.`);
  }
  if (q.opts && new Set(q.opts).size !== q.opts.length) die(`question ${i + 1} has a duplicate option`);
}
/* NO TYPED QUESTION MAY TURN ON AN ACCENT OR A CEDILLA. Corrections §5:
   `fold()` strips every combining mark, so the question accepts the mistake and
   tells the learner they spelled it right, which is worse than not asking. This
   lesson's -eux group is spelled `sérieux` and every typed answer in rounds 2
   and 5 carries an é, so the check is that the accent is never the ONLY
   difference being tested. */
for (const [i, q] of qs.entries()) {
  if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
  const ans = q.answer ?? '';
  const flat = ans.normalize('NFD').replace(/[̀-ͯ]/g, '');
  if (flat === ans) continue;
  // The answer carries an accent. It is only a problem if the accent is what
  // distinguishes it from the prompt, which would make the question untestable.
  const p = (q.prompt ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '');
  if (p && p === flat) die(`question ${i + 1} differs from its prompt ONLY by an accent, and fold() cannot see one`);
}
console.log(`  quiz          ${Object.entries(fmt).map(([k, v]) => `${k}=${v}`).join(' ')}, every question has a why and a ref`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE
 * ═══════════════════════════════════════════════════════════════════════ */

const dict = LESSON.sections.find((s) => s.type === 'dictation') as { itemIds: string[] } | undefined;
if (!dict) die('the lesson has no dictation section');
if (dict.itemIds.join(',') !== DICTATION_IDS.join(',')) die('the dictation section and DICTATION_IDS disagree');
for (const id of DICTATION_IDS) {
  const row = ACCORD_ADJECTIFS.find((r) => r.id === id);
  if (!row) die(`dictation names ${id}, which is not an authored row`);
  const mode = dicteeMode(row.fr);
  if (mode !== 'letters') {
    die(`dictation target ${id} ${JSON.stringify(row.fr)} is ${mode} mode.\n`
      + '  Corrections §4: WORD mode hands every real word over pre-spelled, so a lesson about a spelling\n'
      + '  tested in word mode is testing nothing.');
  }
  if (!row.drills.includes('dictation')) die(`${id} is a dictation target and has no dictation drill`);
}
/* AND THE TWO CELLS THAT CANNOT BE TESTED ARE NAMED RATHER THAN SILENTLY
   DROPPED. Doctrine §F: a gap you name costs an hour, a gap you paper over
   costs a session. */
const gridDictee = GRID_ROWS.filter((r) => r.drills.includes('dictation')).length;
if (gridDictee !== EXPECTED_GRID_DICTEE) die(`${gridDictee} of the ${GRID_ROWS.length} grid cells are dictée targets, expected ${EXPECTED_GRID_DICTEE}`);
for (const r of GRID_ROWS) {
  const mode = dicteeMode(r.fr);
  const isTarget = r.drills.includes('dictation');
  if ((mode === 'letters') !== isTarget) {
    die(`${r.id} ${JSON.stringify(r.fr)} is ${mode} mode and ${isTarget ? 'IS' : 'is NOT'} a dictée target. The two must agree.`);
  }
}
console.log(`  dictée        ${DICTATION_IDS.length} targets, all letters mode; ${GRID_ROWS.length - gridDictee} grid cells too long and named`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FRAME CONTAINS NO LIAISON
 *
 *  a2.15 §4 asks which half of the sentence the lesson is about before copying
 *  a frame check. Here it is the adjective, so the front of the sentence is
 *  fixed by construction and checking that would be a tautology. What is NOT a
 *  tautology, and what picked the head adjective, is that no cell liaises:
 *  `Ils sont heureux.` links the t of `sont` into the vowel, correct notation
 *  for that needs U+203F, and that glyph renders as a low underscore on a
 *  Pixel 6.
 * ═══════════════════════════════════════════════════════════════════════ */

const VOWEL_START = /^[aeiouâàéèêëîïôùûühyœ]/i;
for (const r of GRID_ROWS) {
  const adj = r.fr.replace(/^\S+\s+\S+\s+/, '').replace(/\.$/, '');
  if (VOWEL_START.test(adj)) {
    die(`the grid cell ${r.id} ${JSON.stringify(r.fr)} starts its adjective with a vowel, so the frame liaises.\n`
      + '  Correct notation needs U+203F, which renders as a low underscore on a Pixel 6 and which invariants §2\n'
      + '  forbids introducing. This is why the -eux group is headed by sérieux and not heureux.');
  }
}
for (const r of ACCORD_ADJECTIFS) {
  if ((r.respell ?? '').includes('‿')) die(`${r.id} respells with U+203F UNDERTIE`);
  if (/[œŒ]/u.test(r.fr) || /[œŒ]/u.test(r.respell ?? '')) die(`${r.id} holds U+0153 œ, which the dictée strips from both sides (a2.15 §2)`);
}
console.log(`  frame         no liaison in any of the ${GRID_ROWS.length} cells, no U+203F, no U+0153`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NASALS, MEASURED THROUGH THE REAL CHECKER
 * ═══════════════════════════════════════════════════════════════════════ */

let seen = 0;
let missed = 0;
const missedTokens: string[] = [];
for (const r of ACCORD_ADJECTIFS) {
  const respell = r.respell ?? '';
  for (let i = 0; i < respell.length; i += 1) {
    if (respell[i] !== 'ⁿ') continue;
    const broken = respell.slice(0, i) + 'n' + respell.slice(i + 1);
    if (hasPlainNasalFor(r.fr, broken)) seen += 1;
    else { missed += 1; missedTokens.push(`${r.id}:${broken}`); }
  }
  if (hasPlainNasalFor(r.fr, respell)) die(`${r.id} ${JSON.stringify(r.respell)} is flagged AS AUTHORED`);
}
if (seen + missed !== EXPECTED_SUPERSCRIPTS) die(`${seen + missed} superscripts, expected ${EXPECTED_SUPERSCRIPTS}`);
if (seen !== EXPECTED_SEEN_NASALS) die(`${seen} superscripts the checker sees, expected ${EXPECTED_SEEN_NASALS}`);
if (missed !== EXPECTED_BLIND_NASALS) die(`${missed} superscripts the checker CANNOT see, expected ${EXPECTED_BLIND_NASALS}`);
/* AND THE BLIND ONES ARE ASSERTED BY NAME, so the day the checker improves the
   build fails rather than carrying a dead list. Corrections §6. */
for (const b of BLIND_NASAL_ROWS) {
  const row = ACCORD_ADJECTIFS.find((r) => r.id === b.id);
  if (!row) die(`BLIND_NASAL_ROWS names ${b.id}, which is not an authored row`);
  if (!(row.respell ?? '').includes(b.token)) die(`${b.id} does not contain the blind token ${JSON.stringify(b.token)}`);
  const broken = (row.respell ?? '').replace(b.token, b.token.replace('ⁿ', 'n'));
  if (hasPlainNasalFor(row.fr, broken)) {
    die(`${b.id} ${JSON.stringify(b.token)} is recorded as INVISIBLE and the checker now sees it.\n`
      + '  The checker has improved. Move this row out of BLIND_NASAL_ROWS and re-measure the counts.');
  }
}
if (BLIND_NASALS.length !== EXPECTED_BLIND_NASALS) die(`BLIND_NASALS has ${BLIND_NASALS.length} entries and ${missed} were measured`);
/* THE FALSE-POSITIVE PATH, FOUND. Corrections §6 asks for it to be looked for
   and its absence reported; it was found, and the repair is invariants §3's
   jaune fix rather than a superscript. */
if (FALSE_POSITIVES_FOUND.length !== EXPECTED_FALSE_POSITIVES) die(`${FALSE_POSITIVES_FOUND.length} false positives found, expected ${EXPECTED_FALSE_POSITIVES}`);
for (const f of FALSE_POSITIVES_FOUND) {
  if (!hasPlainNasalFor(f.fr, f.respell)) die(`${JSON.stringify(f.fr)} is recorded as a false positive and the checker no longer fires on ${JSON.stringify(f.respell)}`);
  if (hasPlainNasalFor(f.fr, f.fix)) die(`the fix ${JSON.stringify(f.fix)} for ${JSON.stringify(f.fr)} is still flagged`);
  if (f.fix.includes('ⁿ')) die(`the fix for ${JSON.stringify(f.fr)} adds a superscript. There is no nasal vowel in it; invariants §3 says drop the H.`);
}
for (const c of FALSE_POSITIVE_CANDIDATES) {
  if (hasPlainNasalFor(c.fr, c.respell)) die(`${JSON.stringify(c.respell)} is recorded as NOT flagged and it is`);
}
/* a2.14 §1's doubled-nasal rescue, asserted as an ABSENCE. */
const doubled = ACCORD_ADJECTIFS.filter((r) => /(?:nn|mm)/i.test(r.fr));
if (doubled.length) die(`${doubled.length} French strings hold nn or mm, which switches hasPlainNasalFor off for the whole line (a2.14 §1): ${doubled.map((r) => r.fr).join(' | ')}`);
console.log(`  nasals        ${seen + missed} superscripts, ${seen} seen, ${missed} blind and asserted by name; ${FALSE_POSITIVES_FOUND.length} false positive found and repaired`);

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

  /* THE ROW COUNT IS THE ONLY SIGNAL. Ledger §10. Here it is the easy case:
     the namespace did not exist, so ANY row inside the block this build does not
     own is somebody else landing in it. */
  const mineNow = await c.query<{ id: string }>(
    "select id from content_items where id like 'fr.a2.adjectifs-essentiels.%' order by id");
  const foreign = mineNow.rows.map((r) => r.id).filter((id) => !AUTHORED_IDS.includes(id));
  if (foreign.length) {
    c.release(); await pool.end();
    die(`${foreign.length} rows already exist in this build's id block and it does not own them:\n  ${foreign.join('\n  ')}`);
  }
  const before = mineNow.rowCount ?? 0;
  if (before !== ROW_COUNT_BEFORE && before !== AUTHORED_IDS.length) {
    c.release(); await pool.end();
    die(`fr.a2.adjectifs-essentiels holds ${before} rows, and this build expects ${ROW_COUNT_BEFORE} before or ${AUTHORED_IDS.length} on a re-run`);
  }

  /* THE THEME-WIDE COUNT. Ledger §a2.14-12 narrows it: a total that has GROWN
     by somebody else's allocation is a REPORT, one that has SHRUNK is fatal. */
  const themeNow = await c.query<{ n: string }>(
    "select count(*) n from content_items where theme = $1 and status = 'published' and id not like 'fr.a2.adjectifs-essentiels.%'", [THEME]);
  const themeCount = Number(themeNow.rows[0].n);
  if (themeCount < THEME_COUNT_BEFORE) {
    c.release(); await pool.end();
    die(`${THEME} held ${THEME_COUNT_BEFORE} published rows and now holds ${themeCount}. A SHRINKING total is somebody deleting rows.`);
  }
  if (themeCount > THEME_COUNT_BEFORE) {
    console.log(`  !! ${THEME} has grown from ${THEME_COUNT_BEFORE} to ${themeCount} since this build measured it. Reported, not fatal.`);
  }

  /* NO DUPLICATE fr INSIDE THE THEME. flashhub-coverage.test.ts treats two rows
     sharing an fr in one theme as one card served twice, and it strips the
     article first. The theme holds 645 rows and ZERO duplicates today. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const themeRows = await c.query<{ id: string; fr: string }>(
    'select id, fr from content_items where theme = $1', [THEME]);
  const seenFr = new Map<string, string>();
  for (const r of themeRows.rows) if (!AUTHORED_IDS.includes(r.id)) seenFr.set(strip(r.fr), r.id);
  for (const r of ACCORD_ADJECTIFS) {
    const clash = seenFr.get(strip(r.fr));
    if (clash) {
      c.release(); await pool.end();
      die(`${r.id} ${JSON.stringify(r.fr)} collides with ${clash} inside ${THEME}. The flashcard hub would serve one card twice.`);
    }
  }

  /* a1.03's ENDING POPULATION. Three A1 builds broke on this and the brief said
     this one would. It runs the REAL function rather than a copy: a1.08 shipped
     a hand-rolled endingPopulation carrying a filter the real one does not have,
     let four rows through, and moved two of a1.03's printed cards. */
  const gendered = ACCORD_ADJECTIFS.filter((r) => (r as { gender?: string }).gender);
  if (gendered.length) {
    c.release(); await pool.end();
    die(`${gendered.length} authored rows carry a gender: ${gendered.map((r) => r.id).join(', ')}`);
  }
  for (const id of IMPORTED_IDS) {
    const g = (IMPORTED_BY_ID.get(id) as { gender?: string } | undefined)?.gender;
    if (g) {
      c.release(); await pool.end();
      die(`imported row ${id} carries gender ${JSON.stringify(g)}. Invariants §5: withdraw rather than argue.`);
    }
  }
  const popBefore = endingPopulation(themeRows.rows.filter((r) => !AUTHORED_IDS.includes(r.id)) as never);
  const popAfter = endingPopulation([...themeRows.rows.filter((r) => !AUTHORED_IDS.includes(r.id)), ...AUTHORED_ITEMS] as never);
  if (popBefore.length !== popAfter.length) {
    c.release(); await pool.end();
    die(`this build changes a1.03's ending population from ${popBefore.length} rows to ${popAfter.length}`);
  }
  console.log(`  a1.03         ending population unchanged at ${popBefore.length} rows from this theme, 0 gendered rows authored or imported`);

  /* THE MANIFEST IS NOT STALE. */
  const live = await c.query<Record<string, unknown>>(
    'select id, fr, respell, drills::text[] drills, gender, status from content_items where id = any($1)',
    [[...CARRIED_IDS, ...READ_ONLY_ROWS.map((r) => r.id)]]);
  const liveBy = new Map(live.rows.map((r) => [String(r.id), r]));
  const stale: string[] = [];
  for (const id of [...CARRIED_IDS, ...READ_ONLY_ROWS.map((r) => r.id)]) {
    const row = liveBy.get(id);
    if (!row) { stale.push(`${id} is not in Postgres`); continue; }
    const rec = IMPORTED_BY_ID.get(id) ?? READ_ONLY_ROWS.find((r) => r.id === id);
    if (!rec) { stale.push(`${id} is in no manifest group`); continue; }
    if (rec.fr !== row.fr) stale.push(`${id} fr: manifest ${JSON.stringify(rec.fr)}, Postgres ${JSON.stringify(row.fr)}`);
    /* THE MANIFEST IS A PRE-BATCH READ, so it legitimately disagrees with
       Postgres on every row this build transforms once the build has run.
       a2.13 §5. */
    const transformed = ALL_REPAIRS.some((r) => r.id === id) || RESPELL_ADDITIONS.some((x) => x.id === id);
    if (!transformed && (rec.respell ?? null) !== (row.respell ?? null)) {
      stale.push(`${id} respell: manifest ${JSON.stringify(rec.respell)}, Postgres ${JSON.stringify(row.respell)}`);
    }
    const drillsTransformed = (LESSON_DRILL_ADDITIONS).some((d) => d.id === id);
    if (!drillsTransformed) {
      const mine = [...(rec.drills ?? [])].sort().join(',');
      const theirs = pgArray(row.drills).sort().join(',');
      if (mine !== theirs) stale.push(`${id} drills: manifest ${mine}, Postgres ${theirs}`);
    }
  }
  if (stale.length) {
    c.release(); await pool.end();
    die(`the manifest is stale. Regenerate it with pnpm tsx scripts/_a203_manifest.ts:\n  ${stale.join('\n  ')}`);
  }

  /* THE INSPECTED ROWS STILL SAY WHAT THE CORPUS HEADER SAYS THEY SAY. */
  const inspected = await c.query<{ id: string; respell: string | null }>(
    'select id, respell from content_items where id = any($1)', [NOT_REPAIRED.map((r) => r.id)]);
  for (const r of inspected.rows) {
    const claimed = NOT_REPAIRED.find((x) => x.id === r.id)?.why !== undefined
      ? NOT_REPAIRED.find((x) => x.id === r.id)!.respell : '';
    if (String(r.respell ?? '') !== claimed) {
      c.release(); await pool.end();
      die(`${r.id} is recorded in NOT_REPAIRED as ${JSON.stringify(claimed)} and Postgres holds ${JSON.stringify(r.respell)}`);
    }
  }

  /* THE REPAIRS MUST STILL APPLY. A guarded update that matches nothing reports
     success and changes nothing. */
  const pending: string[] = [];
  for (const r of ALL_REPAIRS) {
    const stored = String(liveBy.get(r.id)?.respell ?? '');
    if (!stored.includes(r.from) && !stored.includes(r.to)) {
      pending.push(`${r.id} holds ${JSON.stringify(stored)}, which contains neither the value to repair nor the repaired one`);
    }
  }
  for (const a of RESPELL_ADDITIONS) {
    const stored = String(liveBy.get(a.id)?.respell ?? '');
    if (stored && stored !== a.to) pending.push(`${a.id} already has a respelling ${JSON.stringify(stored)} and this build would write ${JSON.stringify(a.to)} over it`);
  }
  for (const d of LESSON_DRILL_ADDITIONS) if (!liveBy.get(d.id)) pending.push(`${d.id} takes a drill addition and is not in Postgres`);
  if (pending.length) {
    c.release(); await pool.end();
    die(`repairs cannot be applied safely:\n  ${pending.join('\n  ')}`);
  }
  /* AND THE REPAIRED VALUES MUST BE WHAT THE SCREENS WILL PRINT. displayRespell
     is the only function a screen may call; if it and the transaction disagree,
     the lesson prints one thing and Postgres holds another. a2.12 found exactly
     that one layer down. */
  for (const r of ALL_REPAIRS) {
    const stored = String(liveBy.get(r.id)?.respell ?? '');
    const expected = stored.split(r.from).join(r.to);
    if (displayRespell(r.id) !== expected) {
      c.release(); await pool.end();
      die(`displayRespell(${r.id}) returns ${JSON.stringify(displayRespell(r.id))} and the transaction will write ${JSON.stringify(expected)}`);
    }
  }
  for (const a of RESPELL_ADDITIONS) {
    if (displayRespell(a.id) !== a.to) {
      c.release(); await pool.end();
      die(`displayRespell(${a.id}) returns ${JSON.stringify(displayRespell(a.id))} and the transaction will write ${JSON.stringify(a.to)}`);
    }
  }

  /* THE UNIT, BYTE FOR BYTE. Corrections §1. */
  const ur = await c.query<{ body: Unit }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID]);
  if (ur.rowCount !== 1) { c.release(); await pool.end(); die(`${ur.rowCount} rows for unit ${UNIT_ID}`); }
  const unit = ur.rows[0].body as Unit & { sub?: string; canDo?: string; seq?: number; lessonIds?: string[]; prereqUnitIds?: string[] };
  if (unit.title !== UNIT.title) die(`unit title is ${JSON.stringify(unit.title)}, this build expects ${JSON.stringify(UNIT.title)}`);
  if (unit.sub !== UNIT.sub) die(`unit sub is ${JSON.stringify(unit.sub)}, this build expects ${JSON.stringify(UNIT.sub)}`);
  if (unit.canDo !== UNIT.canDo) die(`unit canDo is ${JSON.stringify(unit.canDo)}, this build expects ${JSON.stringify(UNIT.canDo)}`);
  if (Number(unit.seq) !== UNIT.seq) die(`unit seq is ${JSON.stringify(unit.seq)}, the corpus says ${UNIT.seq}`);
  if ((unit.prereqUnitIds ?? []).join(',') !== UNIT.prereqUnitIds.join(',')) {
    die(`unit prereqUnitIds is ${JSON.stringify(unit.prereqUnitIds)}, this build expects ${JSON.stringify(UNIT.prereqUnitIds)}`);
  }
  const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and missions.ts computes ${JSON.stringify(expectedTag)} from the live unit`);

  /* EVERY UNIT THIS LESSON CITES STILL EXISTS. */
  const cited = await c.query<{ id: string }>(
    "select body->>'id' id from content_units where kind = 'curriculum_unit' and body->>'id' = any($1)", [[...CITED_UNITS]]);
  const found = new Set(cited.rows.map((r) => r.id));
  for (const u of CITED_UNITS) if (!found.has(u)) die(`this lesson names ${u} and no such unit exists`);
  /* AND EACH ONE IS ACTUALLY NAMED SOMEWHERE ON A LEARNER SURFACE, so a
     hand-off that has quietly been dropped fails rather than sitting in a
     constant nobody reads. */
  for (const u of CITED_UNITS) {
    if (!production.some((s) => hasPhrase(s, u))) die(`${u} is in CITED_UNITS and is named on no learner surface`);
  }

  /* DEPENDENTS. Probed rather than copied: a2.12 had none, a2.13 had two, a2.14
     and a2.15 had none. This one has two and they are the reason the guards
     above exist. */
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
        + '  Move the lesson\'s own version counter forward. Two different bodies under one number is exactly the\n'
        + '  drift that makes Postgres and seed.json disagree while both report the same version.');
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
        `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills, version, card_type, status)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,'published')
         on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
           fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
           card_type=excluded.card_type, status='published'`,
        [it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          (it as { gender?: string }).gender ?? null, it.notes ?? null, it.tags ?? [], it.drills ?? [],
          it.version ?? 1, (it as { cardType?: string }).cardType ?? null],
      );
    }
    // THE REPAIRS. Guarded by the STORED value, so a row somebody else has
    // already fixed is left alone and a row somebody else has changed to a
    // third value is not silently overwritten.
    for (const r of ALL_REPAIRS) {
      await c.query(
        'update content_items set respell = replace(respell, $2, $3) where id = $1 and respell like $4',
        [r.id, r.from, r.to, `%${r.from}%`]);
    }
    // THE RESPELLINGS THIS BUILD SUPPLIES. Only where there is none, so a row
    // somebody has respelled since the manifest read is left alone.
    for (const a of RESPELL_ADDITIONS) {
      await c.query(
        'update content_items set respell = $2 where id = $1 and (respell is null or respell = \'\')',
        [a.id, a.to]);
    }
    // THE DRILL ADDITIONS. `drills` is an ENUM ARRAY (drill_kind[]), not text[]:
    // concatenating a text[] fails with "operator does not exist: drill_kind[]
    // || text[]" and takes the whole transaction with it. Ledger §5.
    for (const d of LESSON_DRILL_ADDITIONS) {
      await c.query(
        `update content_items
            set drills = (select array_agg(distinct e order by e)
                            from unnest(drills || $2::text[]::drill_kind[]) e)
          where id = $1`,
        [d.id, [d.add]]);
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
  const after = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.adjectifs-essentiels.%'");
  const check = await c.query<{ id: string; respell: string | null; drills: string[] }>(
    'select id, respell, drills::text[] drills from content_items where id = any($1)',
    [[...ALL_REPAIRS.map((r) => r.id), ...RESPELL_ADDITIONS.map((a) => a.id), ...LESSON_DRILL_ADDITIONS.map((d) => d.id)]]);
  const post = new Map(check.rows.map((r) => [r.id, r] as const));
  const failed: string[] = [];
  for (const r of ALL_REPAIRS) {
    const now = String(post.get(r.id)?.respell ?? '');
    if (!now.includes(r.to)) failed.push(`${r.id} respell is ${JSON.stringify(now)} and does not contain ${JSON.stringify(r.to)}`);
    if (now.includes(r.from) && r.from !== r.to) failed.push(`${r.id} still contains the unrepaired ${JSON.stringify(r.from)}`);
  }
  for (const a of RESPELL_ADDITIONS) {
    if (String(post.get(a.id)?.respell ?? '') !== a.to) failed.push(`${a.id} respell is ${JSON.stringify(post.get(a.id)?.respell)} and should be ${JSON.stringify(a.to)}`);
  }
  for (const d of LESSON_DRILL_ADDITIONS) {
    if (!pgArray(post.get(d.id)?.drills).includes(d.add)) failed.push(`${d.id} still has no ${d.add} drill`);
  }
  if (Number(after.rows[0].n) !== AUTHORED_ITEMS.length) failed.push(`fr.a2.adjectifs-essentiels holds ${after.rows[0].n} rows and this build authored ${AUTHORED_ITEMS.length}`);
  if (failed.length) { c.release(); await pool.end(); die(`the transaction committed and these did not land:\n  ${failed.join('\n  ')}`); }

  console.log(
    `\n  applied to Postgres:\n`
    + `    ${AUTHORED_ITEMS.length} rows authored into ${THEME}, ${AUTHORED_ITEMS[0].id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1].id}\n`
    + `      ${Object.keys(AUTHORED_HEADWORDS).length} HEADWORDS AUTHORED (${Object.keys(AUTHORED_HEADWORDS).join(', ')}), and one of the three is in NO absence list anywhere\n`
    + `      ${GRID_ROWS.length} grid cells on one frame, ${PATTERN_ORDER.length} patterns x ${CELL_ORDER.length} shapes\n`
    + `    ${ALL_REPAIRS.length} respellings repaired (${RESPELL_REPAIRS_VISIBLE.length} the checker sees, ${RESPELL_REPAIRS_INVISIBLE.length} it does not, ${RESPELL_REPAIRS_HOUSE.length} not about a nasal at all)\n`
    + `    ${RESPELL_ADDITIONS.length} respellings SUPPLIED to rows that had none, ${LESSON_DRILL_ADDITIONS.length} drill additions, all verified after the commit\n`
    + `    ${IMPORTED_IDS.length} rows imported by id out of ${SOURCE_THEMES.length} themes\n`
    + `    ${READ_NOT_IMPORTED.length} rows read and refused\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${ACCORD_ADJECTIFS_ITEM_IDS.length} items\n`
    + `    fr.a2.adjectifs-essentiels row count: ${before} before, ${after.rows[0].n} after (max ${after.rows[0].mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-accord-adjectifs-into-seed.ts\n`);

  c.release();
  await pool.end();
}

/* Named apart so the two "drill additions" ideas cannot be confused: the corpus
   constant is the DATA and this is what the transaction iterates. */
import { DRILL_ADDITIONS as LESSON_DRILL_ADDITIONS } from './data/accord-adjectifs-corpus.ts';
if (LESSON_DRILL_ADDITIONS.length !== EXPECTED_DRILL_ADDITIONS) die(`${LESSON_DRILL_ADDITIONS.length} drill additions, expected ${EXPECTED_DRILL_ADDITIONS}`);

main().catch((e) => { console.error(e); process.exit(1); });
