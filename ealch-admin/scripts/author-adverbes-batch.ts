/* a2.17 "Les adverbes" — corpus, lesson and terms, applied to Postgres in one
 * transaction.
 *
 *     pnpm content:adverbes --dry-run
 *     pnpm content:adverbes
 *
 * ── WHAT THIS BATCH GUARDS THAT NO EARLIER ONE DID ────────────────────────
 *
 * THE ARITHMETIC OF THE DERIVATION, AS TWO IDENTITIES ON THE RESPELLINGS.
 * The feminine is the masculine plus one consonant, and the adverb is the
 * feminine plus -MAHⁿ. Three adjectives, three different consonants, no
 * exception, and for `sérieux` all three cells are somebody else's published
 * rows. A future author who "corrects" one respelling breaks the build here
 * rather than shipping a chain that contradicts itself.
 *
 * THE NASAL SPLIT IS PER-NASAL RATHER THAN PER-ROW, WHICH CORRECTIONS §6 DOES
 * NOT SAY. A `-ment` adverb on a nasal stem carries two nasals in one string and
 * the checker sees one of them, so repairing what it reports produces a value it
 * calls clean and which is still wrong. Every repair carries a HALF-REPAIRED
 * value and all three are asserted through the real function.
 *
 * NO COMPOUND TENSE IS CONJUGATED ANYWHERE, and the guard is a SHAPE rather than
 * a word list, because the list of participles is open. It is proved to fire on
 * four real compound phrases and to spare twelve of this lesson's own rows,
 * including « Il est lent. » and « Elle est constante. », which a naive
 * auxiliary-plus-word guard would take with it.
 *
 * THE TWO UNSEEN ADJECTIVES ARE ABSENT IN BOTH DIRECTIONS. They must appear on
 * no screen except the exam questions that ask for them, AND those questions
 * must still exist, because a generalisation test that has quietly been deleted
 * has stopped testing anything. Their adverbs are never imported.
 *
 * `mieux` APPEARS NOWHERE, RESERVING a2.08. It is the comparative of `bien` and
 * `bien` is in this lesson, which is exactly why it needs a guard rather than a
 * note.
 *
 * ── GUARDS COPIED, WITH THE REASON ────────────────────────────────────────
 *
 * The jargon walk includes `intro` AND `overview` (ledger §0, corrections §9),
 * runs over `display()` as well as `prose()` so a cardDeck `sub` is seen
 * (a2.15 §3), and includes `fr`, `en` and `notes` on every AUTHORED ROW
 * (a2.03 §4). Every JARGON entry is checked in its -s plural (a2.15 §3). The
 * manifest staleness check EXEMPTS the rows this build transforms (a2.13 §5).
 * Every itemId must be DRAWN or RELEASED (a1.08 shipped forty-three that were
 * neither). Every `scenario` turn carries two `alts` and a `userEn` (a2.03
 * §11.1, seed-wide and undocumented). Back-references are asserted as LITERALS
 * rather than looped over the constant the section renders (ledger §a2.16-3).
 *
 * ── GUARDS DELIBERATELY NOT COPIED ────────────────────────────────────────
 *
 * a2.16's "no ear question may ask between two forms that are one sound, and
 * every ear question must turn on the ONE audible pair". The first half is here
 * and the second is not, because this lesson's audible surface is wide rather
 * than narrow: three different consonants arrive in three different places and
 * the stems of every adverb differ. What IS one sound is the -emment/-amment
 * SUFFIX, so the refusal is scoped to that rather than to a pair of forms.
 *
 * a2.16's five-column header budget. This lesson's tables are three columns and
 * four, so the measured number does not apply; it is applied anyway, because it
 * is the only figure anybody has read off a phone, and the build report names
 * the extrapolation.
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
  ADJ_ORDER, ADVERBES, AGREEMENT_UNIT, ALREADY_E, ALL_REPAIRS, AMMENT,
  AUTHORED_HEADWORDS, AUTHORED_IDS, A203_REFRAME, A203_ROWS, BON_BIEN_SHAPE,
  BON_BIEN_WRONG, CHAIN, CHAIN_CELL_MAX, CHAIN_ROW, CITED_UNITS,
  COMPARATIVE_UNIT, COMPOUND_MUST_FIRE, COMPOUND_MUST_NOT_FIRE, COMPOUND_SHAPE,
  DEFERRAL_LINE, DICTATION_IDS, DICTEE_WORD_MODE_ROWS, DRILL_ADDITIONS, ENGLISH_ORDER,
  ENGLISH_ORDER_MUST_FIRE, ENGLISH_ORDER_MUST_NOT_FIRE, ENGLISH_ORDER_SHAPE,
  EXPECTED_ACTS, EXPECTED_ADJECTIVE_ROWS, EXPECTED_AMMENT, EXPECTED_AUTHORED,
  EXPECTED_AUTHORED_ADVERBS, EXPECTED_AUTHORED_HEADWORDS, EXPECTED_BLIND_NASALS,
  EXPECTED_CARDDECKS, EXPECTED_CHAIN_ADJECTIVES, EXPECTED_CHAIN_STEPS,
  EXPECTED_DICTEE, EXPECTED_DRILLS, EXPECTED_DRILL_ADDITIONS,
  EXPECTED_IMPORTED, EXPECTED_IRREGULARS, EXPECTED_PAIR_ROWS,
  EXPECTED_PLACEMENT_ROWS, EXPECTED_QUESTIONS, EXPECTED_READ_ONLY,
  EXPECTED_REFRAME_SECTIONS, EXPECTED_REFRAME_USES, EXPECTED_RESPELL_ADDITIONS,
  EXPECTED_RESPELL_REPAIRS, EXPECTED_RESPELL_REPAIRS_INVISIBLE,
  EXPECTED_RESPELL_REPAIRS_VISIBLE, EXPECTED_ROUNDS, EXPECTED_SECTIONS,
  EXPECTED_SEEN_NASALS, EXPECTED_SHEETS, EXPECTED_SOURCE_THEMES,
  EXPECTED_SUPERSCRIPTS, EXPECTED_TAPTABLES, EXPECTED_UNSEEN, HEADER_WORD_MAX,
  CHAIN_CELL_MEASURED, CHAIN_CELL_WRAPS, ID_BLOCK, IRREGULARS, IRREGULAR_FROM, LESSON_ID, MENT, MISSION_TITLE_MAX,
  NEGATION_EXAMPLE, NEGATION_UNIT, NOT_FROM_FEMININE, NOT_FROM_FEMININE_SHAPE,
  NOT_REPAIRED, PASSE_UNIT, PLACEMENT_EVIDENCE, PLACEMENT_ROWS, PLACE_CELL_MAX,
  READ_NOT_IMPORTED, REFRAME, REFRAME_MAX_WORDS, RESERVED_FOR_A208,
  RESERVED_MUST_FIRE, RESERVED_MUST_NOT_FIRE, RESERVED_SHAPE, RESPELL_ADDITIONS,
  RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE, ROW_COUNT_BEFORE,
  STEP_LABEL, STEP_ORDER, SUFFIX_HOMOPHONES, TERM_CHIP_ROW_MAX, THEME,
  THEME_COUNT_BEFORE, UNIT, UNIT_ID as CORPUS_UNIT_ID, UNSEEN, UNSEEN_SHAPE,
  UNSEEN_WORDS, addedConsonant, adverbCheck, adverbSentenceId, chainOf,
  femCheck, pairId, step, stepRespell, toItem, type Adj,
} from './data/adverbes-corpus.ts';
import {
  CARRIED_IDS, IMPORTED_BY_ID, IMPORTED_IDS, READ_ONLY_ROWS, SOURCE_THEMES,
  TWO_WAYS_EVIDENCE, chainId, chainIsAuthored, chainRespell, displayRespell,
  halfRepaired, importedFr, namingId,
} from './data/adverbes-imported.ts';
import {
  ADVERBES_ACTS, ADVERBES_DECK_TRANCHE, ADVERBES_DICTEE_IDS,
  ADVERBES_ITEM_IDS, ADVERBES_LESSON, ADVERBES_SHEETS, ADVERBES_SPEAK_IDS,
  AFTER_SECTION_ID, ALREADY_SECTION_ID, AMMENT_SECTION_ID,
  BON_BIEN_SECTION_ID, CHAIN_SECTION_ID, DECK_SECTION_ID, ERRORS_SECTION_ID,
  HEAR_SECTION_ID, IRREGULAR_SECTION_ID, KNOWN_SECTION_ID, ORDER_SECTION_ID,
  PAYOFF_SECTION_ID, PLACE_SECTION_ID, QUIZ_SECTION_ID, READING_SECTION_ID,
  REVIEW_SECTION_ID, ROUNDUP_SECTION_ID, SCENARIO_SECTION_ID, SCENE_SECTION_ID,
  SHEET_ID, UNSEEN_SECTION_ID,
} from './data/adverbes-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = ADVERBES_LESSON;
const UNIT_ID = 'a2.17';

/** The fields the stepped-trapDrill guard reads, none of which the section type
 *  exposes at the top level. */
type LessonSectionLike = {
  id?: string;
  steps?: { kind: string; gate?: boolean; title?: string }[];
  swipe?: boolean;
  say?: string;
  size?: string;
  audio?: unknown;
  cards?: { fr: string }[];
};

/** No grammar jargon on a learner surface. Invariants §8.
 *
 *  THE LINE IS MEASURED, the way a2.03 §7 asks. `feminine`, `plural`,
 *  `masculine`, `noun`, `verb` and `vowel` are HOUSE VOCABULARY for this arc —
 *  a1.16 uses `noun` 115 times and a1.13 uses `feminine` 71 — and this lesson
 *  uses them. What none of the neighbours uses even once is below.
 *
 *  `adverb` IS NOT IN THIS LIST, AND THE FIRST VERSION OF IT PUT `adverb` AT THE
 *  TOP. Measured across all 53 shipped lessons' learner surfaces:
 *
 *    verb 2607 · noun 1405 · plural 740 · feminine 350 · masculine 203
 *    adjective 147 · describing word 137 · adverb 3 · adverbs 2
 *
 *  `adjective` is used 147 times on cards, so `adverb` is not jargon by the
 *  house's own measurement and banning it would have been this build inventing a
 *  rule. What the house DOES do is prefer the plain phrase: a1.16 says
 *  `describing word` 74 times against `adjective` 12. So the ban is replaced by
 *  a RATIO check below — the plain phrase must outnumber the technical one — and
 *  `overview.titleEn` stays "Adverbs", which is what the unit is called.
 *
 *  Every entry is also checked in its -s plural, because `hasPhrase` is
 *  boundary-exact: a list holding `paradigm` does not catch `paradigms`, and
 *  a2.15 shipped exactly that on an act title. a2.15 §3. */
const JARGON = [
  'adverbial', 'derivation', 'derivational', 'derive', 'suffix',
  'suffixation', 'affix', 'stem', 'base form', 'inflection', 'inflected',
  'paradigm', 'morpheme', 'morphology', 'allomorph', 'suppletion',
  'suppletive', 'lexeme', 'phoneme', 'phonological', 'orthography',
  'modifier', 'modifies', 'attributive', 'predicative', 'nasal vowel',
  'first person', 'second person', 'third person', 'inflectional class',
  'productive rule', 'manner adverb',
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
 *  syllables with a full stop, so `/lɑ̃t.mɑ̃/` reads as a standalone token. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** Machine keys. Section ids, refs and accept-lists are not learner surfaces. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets',
]);

/** Keeps `sub` and drops only machine keys. a2.15 §3. */
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

const AUTHORED_ITEMS: Item[] = ADVERBES.map(toItem);
const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection);

console.log(`\n  a2.17 "Les adverbes"${DRY_RUN ? '  (dry run)' : ''}\n`);

/* ══════════════════════════════════════════════════════════════════════════
 *  COUNTS, AGAINST EXPLICIT CONSTANTS
 * ═══════════════════════════════════════════════════════════════════════ */

if (CORPUS_UNIT_ID !== UNIT_ID) die(`the corpus says the unit is ${CORPUS_UNIT_ID} and this batch says ${UNIT_ID}`);
if (LESSON.id !== LESSON_ID) die(`the corpus says the lesson is ${LESSON_ID} and the lesson says ${LESSON.id}`);
if (ADVERBES.length !== EXPECTED_AUTHORED) die(`${ADVERBES.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (SOURCE_THEMES.length !== EXPECTED_SOURCE_THEMES) die(`imported out of ${SOURCE_THEMES.length} themes, expected ${EXPECTED_SOURCE_THEMES}`);
if (READ_ONLY_ROWS.length !== EXPECTED_READ_ONLY) die(`${READ_ONLY_ROWS.length} read-only rows, expected ${EXPECTED_READ_ONLY}`);
if (ADJ_ORDER.length !== EXPECTED_CHAIN_ADJECTIVES) die(`${ADJ_ORDER.length} chain adjectives, expected ${EXPECTED_CHAIN_ADJECTIVES}`);
if (STEP_ORDER.length !== EXPECTED_CHAIN_STEPS) die(`${STEP_ORDER.length} chain steps, expected ${EXPECTED_CHAIN_STEPS}`);
if (IRREGULARS.length !== EXPECTED_IRREGULARS) die(`${IRREGULARS.length} irregulars, expected ${EXPECTED_IRREGULARS}`);
if (AMMENT.length !== EXPECTED_AMMENT) die(`${AMMENT.length} -emment/-amment adjectives, expected ${EXPECTED_AMMENT}`);
if (UNSEEN.length !== EXPECTED_UNSEEN) die(`${UNSEEN.length} unseen adjectives, expected ${EXPECTED_UNSEEN}`);
if (PLACEMENT_ROWS.length !== EXPECTED_PLACEMENT_ROWS) die(`${PLACEMENT_ROWS.length} placement rows, expected ${EXPECTED_PLACEMENT_ROWS}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if ((LESSON.drills ?? []).length !== EXPECTED_DRILLS) die(`${(LESSON.drills ?? []).length} drills, expected ${EXPECTED_DRILLS}`);
if ((LESSON.sheets ?? []).length !== EXPECTED_SHEETS) die(`${(LESSON.sheets ?? []).length} sheets, expected ${EXPECTED_SHEETS}`);
if (ADVERBES_DICTEE_IDS.length !== EXPECTED_DICTEE) die(`${ADVERBES_DICTEE_IDS.length} dictée targets, expected ${EXPECTED_DICTEE}`);
if (ALL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`${ALL_REPAIRS.length} respell repairs, expected ${EXPECTED_RESPELL_REPAIRS}`);
if (RESPELL_REPAIRS_VISIBLE.length !== EXPECTED_RESPELL_REPAIRS_VISIBLE) die(`${RESPELL_REPAIRS_VISIBLE.length} visible repairs, expected ${EXPECTED_RESPELL_REPAIRS_VISIBLE}`);
if (RESPELL_REPAIRS_INVISIBLE.length !== EXPECTED_RESPELL_REPAIRS_INVISIBLE) die(`${RESPELL_REPAIRS_INVISIBLE.length} blind repairs, expected ${EXPECTED_RESPELL_REPAIRS_INVISIBLE}`);
if (RESPELL_ADDITIONS.length !== EXPECTED_RESPELL_ADDITIONS) die(`${RESPELL_ADDITIONS.length} respell additions, expected ${EXPECTED_RESPELL_ADDITIONS}`);
if (DRILL_ADDITIONS.length !== EXPECTED_DRILL_ADDITIONS) die(`${DRILL_ADDITIONS.length} drill additions, expected ${EXPECTED_DRILL_ADDITIONS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} quiz questions, expected ${EXPECTED_QUESTIONS}`);
if ((quizSection as { rounds?: unknown[] }).rounds?.length !== EXPECTED_ROUNDS) die(`${(quizSection as { rounds?: unknown[] }).rounds?.length} rounds, expected ${EXPECTED_ROUNDS}`);
console.log(`  counts        ${ADVERBES.length} authored · ${IMPORTED_IDS.length} imported from ${SOURCE_THEMES.length} themes · ${LESSON.sections.length} sections · ${EXPECTED_ACTS} acts · ${qs.length} questions`);

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT THIS BUILD AUTHORS, AND WHAT IT DOES NOT
 *
 *  FOUR ADJECTIVES AND NOT ONE ADVERB. The brief's shape suggests the opposite
 *  and `adverbes-essentiels` holds 120 adverb headwords; every adverb this
 *  lesson teaches is imported.
 * ═══════════════════════════════════════════════════════════════════════ */

/* Selected by KIND rather than by role. The four are `lente` and `douce`, which
   are the middle step of the chain, and `évident` and `constant`, which belong
   to the trap that does not use the middle step at all — so they carry two
   different roles and are one class of thing: a headword this build creates. */
const headwordRows = ADVERBES.filter((r) => r.kind === 'word');
if (headwordRows.length !== EXPECTED_AUTHORED_HEADWORDS) {
  die(`${headwordRows.length} authored headwords, expected ${EXPECTED_AUTHORED_HEADWORDS}`);
}
for (const r of headwordRows) {
  if (!AUTHORED_HEADWORDS[r.fr]) die(`${r.id} authors "${r.fr}", which is not in AUTHORED_HEADWORDS with a reason`);
  if (r.kind !== 'word') die(`${r.id} "${r.fr}" is a headword and its kind is ${r.kind}`);
  if ((r as { gender?: string }).gender) die(`${r.id} "${r.fr}" carries a gender. A gendered single-word row joins a1.03's ending population.`);
  if (/\s/.test(r.fr)) die(`${r.id} "${r.fr}" is a headword with a space in it. Bare adjectives only, no article.`);
}
/* AND NOT ONE AUTHORED HEADWORD MAY BE AN ADVERB. The theme already holds every
   one this lesson teaches, and authoring a second would make the flashcard hub
   serve one card twice. */
const authoredAdverbs = ADVERBES.filter((r) => r.kind === 'word' && /ment$/i.test(r.fr));
if (authoredAdverbs.length !== EXPECTED_AUTHORED_ADVERBS) {
  die(`${authoredAdverbs.length} authored headwords end in -ment and this build authors ${EXPECTED_AUTHORED_ADVERBS}:\n`
    + `  ${authoredAdverbs.map((r) => `${r.id} ${r.fr}`).join('\n  ')}\n`
    + `  \`adverbes-essentiels\` holds 120 adverb headwords and every one this lesson teaches is imported.`);
}
if (headwordRows.length !== EXPECTED_ADJECTIVE_ROWS) die('the adjective row count moved');
if (ADVERBES.filter((r) => r.role === 'pair').length !== EXPECTED_PAIR_ROWS) die('the pair row count moved');
console.log(`  headwords     ${headwordRows.length} ADJECTIVES authored (${headwordRows.map((r) => r.fr).join(', ')}), ${authoredAdverbs.length} adverbs`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS, AS ARITHMETIC ON THE RESPELLINGS
 *
 *    the feminine = the masculine + one consonant
 *    the adverb   = the feminine  + -MAHⁿ
 *
 *  Three adjectives, three DIFFERENT consonants, no exception. Asserted off the
 *  CHAIN constant, so a future author who "corrects" one respelling breaks the
 *  build here rather than shipping a chain that contradicts itself.
 * ═══════════════════════════════════════════════════════════════════════ */

const consonants = new Set<string>();
for (const a of ADJ_ORDER) {
  if (!femCheck(a)) {
    die(`${a}: the woman form respells as ${JSON.stringify(stepRespell(a, 'fem'))} and the plain form as ${JSON.stringify(stepRespell(a, 'masc'))}.\n`
      + `  THE WHOLE LESSON IS THAT THE WOMAN FORM IS THE PLAIN ONE PLUS ONE CONSONANT. If those two stop\n`
      + `  standing in that relation there is nothing audible left to teach and the chain is three vocabulary items.`);
  }
  if (!adverbCheck(a)) {
    die(`${a}: the adverb respells as ${JSON.stringify(stepRespell(a, 'adverb'))} and the woman form plus -${MENT} would be `
      + `${JSON.stringify(`${stepRespell(a, 'fem').toLowerCase()}-${MENT}`)}.\n`
      + `  For sérieux both halves of that are somebody else's published data (fr.a2.adjectifs-essentiels.019 and\n`
      + `  fr.sons.adverbes-essentiels.021), so if this fires on sérieux somebody has edited one of them.`);
  }
  const c = addedConsonant(a);
  if (!c) die(`${a}: the woman form adds no consonant at all, so there is nothing for the adverb to keep`);
  consonants.add(c);
}
if (consonants.size !== ADJ_ORDER.length) {
  die(`the ${ADJ_ORDER.length} chain adjectives add ${consonants.size} different consonant(s) (${[...consonants].join(', ')}).\n`
    + `  Three adjectives with three DIFFERENT consonants is what makes this a rule rather than a fact about one word.\n`
    + `  fortement was considered as a fourth row and refused because its t duplicates lentement's. NOT_REPAIRED.`);
}
/* AND EVERY ADVERB RESPELLING ENDS IN THE HOUSE SUFFIX, which is the decision
   this lesson settles for the level. Checked on the CHAIN and on every authored
   and imported row that holds a -ment word. */
for (const a of ADJ_ORDER) {
  if (!stepRespell(a, 'adverb').endsWith(`-${MENT}`)) {
    die(`${a}'s adverb respells as ${JSON.stringify(stepRespell(a, 'adverb'))} and the house suffix is -${MENT}. `
      + `499 rows in this corpus end in MAHN and 79 end in ${MENT}; the 79 include every respelled SENTENCE in the sons themes.`);
  }
}
console.log(`  the Owns      ${ADJ_ORDER.map((a) => `${step(a, 'masc')}+${addedConsonant(a)}=${step(a, 'fem')}, +${MENT}=${step(a, 'adverb')}`).join(' · ')}`);

/* THE CHAIN, EVERY COPY AGAINST EVERY OTHER COPY.
   a2.13 §6.2 and a2.14 §5. Nine cells appear FOUR times: the CHAIN constant,
   the row they resolve to, the tapTable in the flow, and the reference sheet. */

for (const a of ADJ_ORDER) {
  for (const s of STEP_ORDER) {
    const id = chainId(a, s);
    if (chainIsAuthored(a, s)) {
      const row = ADVERBES.find((r) => r.id === id);
      if (!row) die(`the chain says ${a}/${s} is authored at ${id} and there is no such authored row`);
      if (row.fr !== step(a, s)) die(`${id} is ${JSON.stringify(row.fr)} and the CHAIN says ${JSON.stringify(step(a, s))}`);
      if (row.respell !== stepRespell(a, s)) die(`${id} respells as ${JSON.stringify(row.respell)} and the CHAIN says ${JSON.stringify(stepRespell(a, s))}`);
      continue;
    }
    if (importedFr(id) !== step(a, s)) die(`${id} is ${JSON.stringify(importedFr(id))} and the CHAIN says ${JSON.stringify(step(a, s))}`);
    if (chainRespell(a, s) !== stepRespell(a, s)) die(`${id} repairs to ${JSON.stringify(chainRespell(a, s))} and the CHAIN says ${JSON.stringify(stepRespell(a, s))}`);
  }
}

const chainSection = byId(CHAIN_SECTION_ID) as { type?: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
if (!chainSection?.rows) die(`${CHAIN_SECTION_ID} has no rows`);
if (chainSection.type !== 'tapTable') die(`${CHAIN_SECTION_ID} is a ${chainSection.type} and the chain has to be AUDIBLE, one tap per row`);
if (chainSection.rows.length !== ADJ_ORDER.length) die(`${CHAIN_SECTION_ID} has ${chainSection.rows.length} rows and there are ${ADJ_ORDER.length} adjectives`);
/* THE CHAIN IS ONE SECTION AND IT IS A CHAIN, NOT THREE STRINGS.
   The brief asks for this by name: "asserted as a chain, not as three separate
   strings". Every row is the ORDERED TRIPLE for one adjective, in one section,
   and the guard checks the cells by index against chainOf(). */
chainSection.rows.forEach((r, i) => {
  const a = ADJ_ORDER[i];
  const want = chainOf(a);
  if (r.cells.length !== STEP_ORDER.length) die(`${CHAIN_SECTION_ID} row ${i} has ${r.cells.length} cells and the chain has ${STEP_ORDER.length} steps`);
  want.forEach((w, j) => {
    if (r.cells[j] !== w) die(`${CHAIN_SECTION_ID} row ${i} cell ${j} is ${JSON.stringify(r.cells[j])} and the chain says ${JSON.stringify(w)}`);
  });
});
/* AND THE ORDER OF THE COLUMNS IS THE ORDER OF THE OPERATION. Plain, then the
   woman form, then the ending. Any other order is a table of three words. */
if (STEP_ORDER.join(',') !== 'masc,fem,adverb') die(`the chain columns are ${STEP_ORDER.join(', ')} and the operation runs plain, woman form, ending`);
/* THE COLUMN HEADERS FIT, and the first two are a2.16's byte for byte. */
for (const s of STEP_ORDER) {
  for (const w of STEP_LABEL[s].split(/[\s,]+/).filter(Boolean)) {
    if (w.length > HEADER_WORD_MAX) die(`the column header ${JSON.stringify(STEP_LABEL[s])} holds ${JSON.stringify(w)}, which is ${w.length} characters and the measured ceiling is ${HEADER_WORD_MAX}`);
    const wide = (w.match(/[wm]/gi) ?? []).length;
    if (w.length > 4 && wide > 1) die(`the column header ${JSON.stringify(STEP_LABEL[s])} holds ${JSON.stringify(w)}: ${w.length} characters with ${wide} wide glyphs`);
  }
}
if (STEP_LABEL.masc !== 'Plain' || STEP_LABEL.fem !== 'For her') {
  die(`the first two column headers are ${JSON.stringify([STEP_LABEL.masc, STEP_LABEL.fem])} and a2.16 shipped "Plain" and "For her" one lesson ago. `
    + 'The continuity is the point: the learner met that grid a mission list ago and these are the same two columns.');
}
/* AND THE CELL WIDTHS ARE MEASURED, NOT GUESSED. Read off a Pixel 6 on
   2026-08-13: eleven characters set on one line in a three-column tapTable and
   twelve do not. `sérieusement` is the one cell over it and the wrap is
   ACCEPTED, so it is named rather than tolerated silently: a later author who
   adds a second one has to say so, and a later author who "fixes" this one by
   dropping the row would be trading a2.03's own card for a line break. */
for (const a of ADJ_ORDER) {
  for (const cell of chainOf(a)) {
    if (cell.length > CHAIN_CELL_MAX) {
      die(`the chain cell ${JSON.stringify(cell)} is ${cell.length} characters and the ceiling is ${CHAIN_CELL_MAX}`);
    }
    if (cell.length > CHAIN_CELL_MEASURED && !CHAIN_CELL_WRAPS.includes(cell)) {
      die(`the chain cell ${JSON.stringify(cell)} is ${cell.length} characters and a three-column cell on a Pixel 6 holds ${CHAIN_CELL_MEASURED}.\n`
        + `  It will wrap mid-word. Either shorten it or add it to CHAIN_CELL_WRAPS with the reason, the way sérieusement is.`);
    }
  }
}
for (const cell of CHAIN_CELL_WRAPS) {
  if (!ADJ_ORDER.some((a) => chainOf(a).includes(cell))) {
    die(`CHAIN_CELL_WRAPS names ${JSON.stringify(cell)} and the chain no longer prints it. A recorded exception nobody re-checks is a comment.`);
  }
}
/* AND THE PLACEMENT TABLE HAS NO CELL OVER THE MEASURED WIDTH AT ALL. Its
   widest is `doucement` at nine, which was read on the same phone on the same
   run and set on one line with room to spare. */
for (const p of PLACEMENT_ROWS) {
  for (const cell of [p.subject, p.verb, p.adverb]) {
    if (cell.length > CHAIN_CELL_MEASURED) die(`the placement cell ${JSON.stringify(cell)} is ${cell.length} characters and a three-column cell holds ${CHAIN_CELL_MEASURED}`);
  }
}

const sheet = ADVERBES_SHEETS[0];
const sheetChain = sheet.sections?.find((s) => (s as { id?: string }).id === 'sheet-chain') as { rows?: string[][] } | undefined;
const sheetSay = sheet.sections?.find((s) => (s as { id?: string }).id === 'sheet-say') as { rows?: string[][] } | undefined;
if (!sheetChain?.rows || !sheetSay?.rows) die('the sheet is missing sheet-chain or sheet-say');
sheetChain.rows.forEach((r, i) => {
  const a = ADJ_ORDER[i];
  chainOf(a).forEach((w, j) => {
    if (r[j + 1] !== w) die(`sheet-chain row ${i} cell ${j} is ${JSON.stringify(r[j + 1])} and the chain says ${JSON.stringify(w)}`);
  });
});
sheetSay.rows.forEach((r, i) => {
  const a = ADJ_ORDER[i];
  STEP_ORDER.forEach((s, j) => {
    if (r[j + 1] !== stepRespell(a, s)) die(`sheet-say row ${i} cell ${j} is ${JSON.stringify(r[j + 1])} and the chain says ${JSON.stringify(stepRespell(a, s))}`);
  });
});
console.log(`  chain         ${ADJ_ORDER.length}x${STEP_ORDER.length} agrees across the corpus, ${CHAIN_SECTION_ID}, sheet-chain and sheet-say; headers fit and are a2.16's`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE a2.03 PAYOFF, ASSERTED AS LITERALS
 *
 *  Ledger §a2.16-3: a guard that loops over the constant the content renders is
 *  guarding nothing. The unit id and the reframe are LITERALS here.
 * ═══════════════════════════════════════════════════════════════════════ */

const payoff = byId(PAYOFF_SECTION_ID);
if (!payoff) die(`${PAYOFF_SECTION_ID} does not exist and it is where a2.03 is named`);
if (!strings(payoff).some((s) => hasPhrase(s, 'a2.03'))) die(`${PAYOFF_SECTION_ID} does not name a2.03 by unit id, and the brief asks for it by name`);
if (!strings(payoff).some((s) => s.includes('The plain form tells you the other three.'))) {
  die(`${PAYOFF_SECTION_ID} does not quote a2.03's reframe verbatim. A paraphrase is not the connection: the value is that the learner recognises a sentence they have already read.`);
}
if (A203_REFRAME !== 'The plain form tells you the other three.') die('A203_REFRAME has drifted from what a2.03 ships');
/* AND THE PAYOFF RUNS ON a2.03's OWN ROWS RATHER THAN ON COPIES. All three
   sérieux cells are published and this build edits one character of one of
   them. If the payoff screen stopped naming those rows it would be a claim
   about a connection rather than the connection. */
for (const id of [A203_ROWS.mascSentence, A203_ROWS.femSentence, A203_ROWS.fem]) {
  if (!IMPORTED_IDS.includes(id)) die(`${id} is one of a2.03's own rows and this lesson does not import it`);
}
if (chainId('serieux', 'fem') !== A203_ROWS.fem) die(`the sérieux row of the chain must resolve to a2.03's own ${A203_ROWS.fem}`);
if (chainIsAuthored('serieux', 'masc') || chainIsAuthored('serieux', 'fem') || chainIsAuthored('serieux', 'adverb')) {
  die('one of the sérieux cells is authored. All three are published rows by other authors and that is what makes the payoff evidence rather than a claim.');
}
console.log(`  the payoff    ${PAYOFF_SECTION_ID} names a2.03 and quotes its reframe; all three sérieux cells are imported`);

/* ══════════════════════════════════════════════════════════════════════════
 *  PLACEMENT, AND THE ENGLISH ORDER IS PINNED IN BOTH DIRECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

const place = byId(PLACE_SECTION_ID) as { type?: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
if (!place?.rows) die(`${PLACE_SECTION_ID} has no rows`);
if (place.type !== 'tapTable') die(`${PLACE_SECTION_ID} is a ${place.type} and the brief asks for a tapTable: a row per sentence, tap to hear where the word lands`);
if (place.rows.length !== PLACEMENT_ROWS.length) die(`${PLACE_SECTION_ID} has ${place.rows.length} rows and there are ${PLACEMENT_ROWS.length}`);
/* THE COLUMNS ARE THE WORD ORDER. Who, then does, then how, left to right, and
   the third column is the adverb in every row. Reversed or reordered, the
   screen shows a table instead of a rule. */
place.rows.forEach((r, i) => {
  const p = PLACEMENT_ROWS[i];
  if (r.cells[0] !== p.subject || r.cells[1] !== p.verb || r.cells[2] !== p.adverb) {
    die(`${PLACE_SECTION_ID} row ${i} is ${JSON.stringify(r.cells)} and the corpus says ${JSON.stringify([p.subject, p.verb, p.adverb])}`);
  }
  for (const cell of r.cells) {
    if (cell.length > PLACE_CELL_MAX) die(`${PLACE_SECTION_ID} row ${i} holds the cell ${JSON.stringify(cell)}, which is ${cell.length} characters and the budget is ${PLACE_CELL_MAX}`);
  }
  /* AND THE ROW'S ADVERB REALLY IS THE LAST WORD OF THE SENTENCE IT PLAYS. */
  const sentence = importedFr(p.id);
  const last = sentence.replace(/[.?!]$/, '').split(' ').pop();
  if (last !== p.adverb) die(`${PLACE_SECTION_ID} row ${i} says the word for how is ${JSON.stringify(p.adverb)} and ${p.id} ends with ${JSON.stringify(last)}`);
});
if ((place.cols ?? []).length !== 3) die(`${PLACE_SECTION_ID} has ${(place.cols ?? []).length} columns and the word order has three positions`);

/* THE ENGLISH ORDER APPEARS ONLY WHERE IT IS MARKED WRONG, AND IT MUST STILL
   BE THERE. A reservation list that has quietly emptied has stopped guarding. */
for (const f of ENGLISH_ORDER_MUST_FIRE) if (!ENGLISH_ORDER_SHAPE.test(f)) die(`ENGLISH_ORDER_SHAPE does not fire on ${JSON.stringify(f)}, so it is guarding nothing`);
for (const f of ENGLISH_ORDER_MUST_NOT_FIRE) if (ENGLISH_ORDER_SHAPE.test(f)) die(`ENGLISH_ORDER_SHAPE fires on ${JSON.stringify(f)}, which is correct French this lesson prints`);
const legalWrongOrder = new Set([SCENE_SECTION_ID, ORDER_SECTION_ID, QUIZ_SECTION_ID]);
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '?';
  const hit = strings(s).find((x) => ENGLISH_ORDER_SHAPE.test(x));
  if (hit && !legalWrongOrder.has(sid)) {
    die(`${sid} prints the English word order: ${JSON.stringify(hit.slice(0, 80))}\n  Only ${[...legalWrongOrder].join(', ')} may, and only as a marked error.`);
  }
}
const orderHomes = LESSON.sections.filter((s) => legalWrongOrder.has((s as { id?: string }).id ?? '')
  && strings(s).some((x) => ENGLISH_ORDER_SHAPE.test(x)));
if (orderHomes.length !== legalWrongOrder.size) {
  die(`the English order is drilled in ${orderHomes.length} of the ${legalWrongOrder.size} sections that may show it, and it is the trap the scene opens on`);
}
/* AND IT MUST BE FIXED IN WRITING. The brief asks for errorSpot on placement
   because "the wrong order is a whole-sentence error and free-text is the only
   format that catches it". */
const orderFixes = qs.filter((q) => q.format === 'errorSpot' && ENGLISH_ORDER_SHAPE.test(q.prompt ?? ''));
if (orderFixes.length < 2) {
  die(`${orderFixes.length} errorSpot questions ask the learner to fix the word order, and at least 2 are needed.\n`
    + `  mcq is recognition. The wrong order is a whole-sentence error and free text is the only format that makes the learner rebuild it.`);
}
console.log(`  placement     ${PLACE_SECTION_ID} is a ${place.rows.length}-row tapTable whose columns ARE the order; the English order is pinned to ${orderHomes.length} sections and fixed in ${orderFixes.length} errorSpots`);

/* ══════════════════════════════════════════════════════════════════════════
 *  bon AGAINST bien, AND THE THREE THAT ARE NOT BUILT
 * ═══════════════════════════════════════════════════════════════════════ */

const legalBonBien = new Set([BON_BIEN_SECTION_ID, QUIZ_SECTION_ID]);
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '?';
  const hit = strings(s).find((x) => BON_BIEN_SHAPE.test(x));
  if (hit && !legalBonBien.has(sid)) die(`${sid} prints a describing word after a verb: ${JSON.stringify(hit.slice(0, 80))}`);
}
const bonHomes = LESSON.sections.filter((s) => legalBonBien.has((s as { id?: string }).id ?? '')
  && strings(s).some((x) => BON_BIEN_SHAPE.test(x)));
if (bonHomes.length !== legalBonBien.size) die(`the bon/bien error is drilled in ${bonHomes.length} of the ${legalBonBien.size} sections that may show it`);
/* THE CONTRAST IS PRESENT WITH BOTH SIDES IN ONE SECTION. The brief asks for it
   in those words. */
const bonBien = byId(BON_BIEN_SECTION_ID);
if (!bonBien) die(`${BON_BIEN_SECTION_ID} does not exist`);
for (const w of [IRREGULAR_FROM.bien!, IRREGULARS[0]]) {
  if (!strings(bonBien).some((s) => hasPhrase(s, w))) die(`${BON_BIEN_SECTION_ID} does not print ${JSON.stringify(w)}, and the brief asks for both sides of the contrast in ONE section`);
}
/* AND THE THREE IRREGULARS ARE EACH TAUGHT AS IRREGULAR, BY NAME. */
const irregularSection = byId(IRREGULAR_SECTION_ID);
if (!irregularSection) die(`${IRREGULAR_SECTION_ID} does not exist`);
for (const w of IRREGULARS) {
  if (!strings(irregularSection).some((s) => hasPhrase(s, w))) {
    die(`${IRREGULAR_SECTION_ID} does not name ${JSON.stringify(w)}. The brief asks for bien, mal and vite each to be taught as irregular, asserted by name.`);
  }
}
/* AND THE REGULARISED FORMS APPEAR ONLY AS ERRORS. A learner who applies the
   rule to these three produces them, so they must be shown and refused. */
const REGULARISED = ['bonnement', 'mauvaisement', 'vitement', 'biennement'];
const legalRegularised = new Set([IRREGULAR_SECTION_ID, BON_BIEN_SECTION_ID, ERRORS_SECTION_ID, QUIZ_SECTION_ID]);
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '?';
  for (const bad of REGULARISED) {
    if (strings(s).some((x) => hasPhrase(x, bad)) && !legalRegularised.has(sid)) die(`${sid} prints ${JSON.stringify(bad)}, which is not a word`);
  }
}
if (!REGULARISED.some((bad) => strings(LESSON.sections).some((x) => hasPhrase(x, bad)))) {
  die('nothing anywhere shows a regularised irregular as an error, so the guard is guarding nothing');
}
console.log(`  irregulars    ${IRREGULARS.join(', ')} each named in ${IRREGULAR_SECTION_ID}; bon/bien in one section; the regularised forms pinned to ${legalRegularised.size} sections`);

/* ══════════════════════════════════════════════════════════════════════════
 *  TWO SPELLINGS, ONE SOUND, AND NEITHER IS BUILT FROM THE FEMININE
 * ═══════════════════════════════════════════════════════════════════════ */

const ammentSection = byId(AMMENT_SECTION_ID) as { type?: string } | undefined;
if (!ammentSection) die(`${AMMENT_SECTION_ID} does not exist`);
if (ammentSection.type !== 'listening') die(`${AMMENT_SECTION_ID} is a ${ammentSection.type} and the brief asks for the pair to be AUDIBLE and side by side`);
for (const x of AMMENT) {
  if (!strings(ammentSection).some((s) => hasPhrase(s, x.adverb))) {
    die(`${AMMENT_SECTION_ID} does not print ${JSON.stringify(x.adverb)}. The brief asks for évidemment and constamment to appear TOGETHER, because two spellings and one sound is only teachable as a pair.`);
  }
}
/* THE TWO SUFFIXES ARE ONE SOUND, PROVED OFF THE RESPELLINGS RATHER THAN
   CLAIMED. Both adverbs must end in the same tail. */
const tails = new Set(AMMENT.map((x) => x.adverbRespell.slice(-(`a-${MENT}`).length)));
if (tails.size !== 1) {
  die(`the two -emment/-amment adverbs respell as ${AMMENT.map((x) => x.adverbRespell).join(' and ')}, whose tails are ${[...tails].join(' / ')}.\n`
    + `  The whole screen says they are ONE SOUND. If the respellings disagree the screen is claiming something the corpus does not support.`);
}
/* AND THE TWO SPELLINGS GENUINELY DIFFER, or there is nothing to teach. */
if (new Set(AMMENT.map((x) => x.adverbEnding)).size !== AMMENT.length) die('the two adverb endings are the same string, so there is no contrast');
/* NEITHER IS BUILT FROM THE FEMININE, AND THE FEMININES APPEAR NOWHERE.
   Header item 9: `évidente` + ment is `évidentement`, which is not a word, and
   a lesson that has just handed the learner the feminine rule must say where it
   stops. */
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '?';
  const hit = strings(s).find((x) => NOT_FROM_FEMININE_SHAPE.test(x));
  if (hit && sid !== QUIZ_SECTION_ID) die(`${sid} prints one of ${NOT_FROM_FEMININE.join(', ')}: ${JSON.stringify(hit.slice(0, 80))}\n  These two do not use the woman form at all, so printing it teaches the rule where it does not apply.`);
}
if (!strings(ammentSection).some((s) => /do not use the woman form|not the answer|taken off and replaced/i.test(s))) {
  die(`${AMMENT_SECTION_ID} says the two endings are one sound and does not say that neither is built from the woman form. `
    + 'Header item 9: saying the first without the second leaves the learner applying the rule they were just given.');
}
/* NO EAR QUESTION MAY TURN ON THE SUFFIX, because there is nothing to hear.
   Corrections §5, scoped to the suffix rather than to a pair of forms. */
for (const q of qs) {
  if (q.format !== 'listenChoose') continue;
  const opts = q.opts ?? [];
  for (const [x, y] of SUFFIX_HOMOPHONES) {
    for (let i = 0; i < opts.length; i += 1) {
      for (let j = 0; j < opts.length; j += 1) {
        if (i === j) continue;
        if (opts[i].split(x).join(y) === opts[j]) {
          die(`a listenChoose offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}, which differ only by ${x}/${y} and are ONE SOUND. Corrections §5: marking one right certifies a bug.`);
        }
      }
    }
  }
}
/* AND THE SPELLING IS TESTED WHERE IT CAN BE: THE DICTÉE. Both adverbs are
   dictée targets, and they are BARE WORDS because the sentences are too long. */
for (const x of AMMENT) {
  if (!ADVERBES_DICTEE_IDS.includes(namingId(x.adverb))) {
    die(`${x.adverb} is not a dictée target, and the dictée is the only surface that can make the learner produce a spelling the sound cannot give them.`);
  }
}
console.log(`  two spellings ${AMMENT.map((x) => `${x.adjEnding}->${x.adverbEnding}`).join(' and ')} both respell -${[...tails][0]}; both are dictée rows; no ear question turns on the suffix`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE GENERALISATION TEST, IN BOTH DIRECTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

/* THE UNSEEN ADJECTIVES ARE ABSENT FROM THE LESSON'S VOCABULARY. */
for (const u of UNSEEN) {
  for (const w of [u.adj, u.fem, u.adverb]) {
    if (ADVERBES.some((r) => hasPhrase(r.fr, w))) die(`the authored row set holds ${JSON.stringify(w)}, which must be unseen`);
    if (IMPORTED_IDS.some((id) => hasPhrase(importedFr(id), w))) die(`the imported row set holds ${JSON.stringify(w)}, which must be unseen`);
  }
}
/* AND FROM EVERY SCREEN EXCEPT THE ONES THAT ASK FOR THEM. */
const legalUnseen = new Set([UNSEEN_SECTION_ID, QUIZ_SECTION_ID]);
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '?';
  const hit = strings(s).find((x) => UNSEEN_SHAPE.test(x));
  if (hit && !legalUnseen.has(sid)) {
    die(`${sid} prints one of the unseen words (${UNSEEN_WORDS.join(', ')}): ${JSON.stringify(hit.slice(0, 80))}\n`
      + `  Showing it anywhere else deletes the generalisation question. Only ${[...legalUnseen].join(' and ')} may.`);
  }
}
/* AND AT LEAST ONE PRODUCTION ITEM STILL ASKS FOR ONE. The brief asks for the
   absence AND the item, and a test that only asserts the absence passes on a
   lesson that has quietly dropped the question. */
const unseenProduction = qs.filter((q) => (q.format === 'typeIn' || q.format === 'errorSpot')
  && UNSEEN.some((u) => (q.answer ?? '') === u.adverb));
if (unseenProduction.length < UNSEEN.length) {
  die(`${unseenProduction.length} free-text questions ask the learner to build an adverb from an adjective the lesson never lists, and there are ${UNSEEN.length} unseen adjectives.\n`
    + `  Doctrine §B.1: a mission that makes the learner produce a form from a word the lesson never showed them has taught the system.`);
}
/* AND THE STEM MUST GIVE THEM WHAT THEY NEED. The brief: "Every derivation
   question needs the adjective's gender available, or the learner cannot form
   the feminine." */
for (const q of unseenProduction) {
  const u = UNSEEN.find((x) => x.adverb === q.answer)!;
  if (!hasPhrase(q.q ?? '', u.fem)) {
    die(`the unseen question ${JSON.stringify((q.q ?? '').slice(0, 60))} asks for ${u.adverb} and does not give ${u.fem} in the stem.\n`
      + `  Every derivation question needs the woman form available, or the learner cannot run the rule at all.`);
  }
}
console.log(`  unseen        ${UNSEEN.map((u) => `${u.adj}->${u.adverb}`).join(', ')}: absent from every row and every screen but ${[...legalUnseen].join('/')}, and ${unseenProduction.length} free-text questions ask for them`);

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT IS LEFT TO NEIGHBOURS
 * ═══════════════════════════════════════════════════════════════════════ */

/* NO COMPOUND TENSE IS CONJUGATED ANYWHERE. The brief asks for it in those
   words, and the guard is a SHAPE because the participle list is open. */
for (const f of COMPOUND_MUST_FIRE) if (!COMPOUND_SHAPE.test(f)) die(`COMPOUND_SHAPE does not fire on ${JSON.stringify(f)}, so it is guarding nothing`);
for (const f of COMPOUND_MUST_NOT_FIRE) if (COMPOUND_SHAPE.test(f)) die(`COMPOUND_SHAPE fires on ${JSON.stringify(f)}, which is a present-tense sentence this lesson prints`);
/* THE DEFERRAL LINE IS THE ONE LEGAL PLACE, AND THE BRIEF ASKS FOR IT BY NAME:
   "Name the deferral in one line so a learner who meets j'ai bien mangé in the
   wild is not confused." So the phrase is quoted there, once, and the guard is
   pinned to that string in BOTH directions — a compound tense anywhere else is
   fatal, and a deferral line that has quietly lost its example has stopped
   doing the job the brief asked for. */
{
  const surface = [
    ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
    ...strings(LESSON.acts ?? []), ...strings(LESSON.drills ?? []),
    LESSON.intro ?? '', ...strings(LESSON.overview ?? {}),
    ...ADVERBES.flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']),
  ];
  const stray = surface.filter((s) => COMPOUND_SHAPE.test(s) && !s.includes(DEFERRAL_LINE));
  if (stray.length) {
    die(`a compound tense is conjugated on a learner surface outside the deferral line:\n  ${stray.slice(0, 3).map((s) => JSON.stringify(s.slice(0, 100))).join('\n  ')}\n`
      + `  The passé composé is ${PASSE_UNIT} at seq 16, four lessons after this one.`);
  }
  const deferralHomes = surface.filter((s) => s.includes(DEFERRAL_LINE));
  if (!deferralHomes.length) {
    die(`the deferral line appears on no learner surface. The brief: "Name the deferral in one line so a learner who meets j'ai bien mangé in the wild is not confused."`);
  }
  if (!COMPOUND_SHAPE.test(DEFERRAL_LINE)) {
    die('the deferral line no longer holds the compound-tense example. It is the one thing the learner needs it for: they will meet the form before they meet the tense.');
  }
  /* AND IT NAMES a2.05 BY UNIT ID. LITERAL, not the constant the sheet renders:
     ledger §a2.16-3, where looping over the constant the content prints passed
     every layer. */
  if (!hasPhrase(DEFERRAL_LINE, 'a2.05')) die('the deferral line does not name a2.05 by unit id');
  if (!/in a past tense the short ones move/i.test(DEFERRAL_LINE)) {
    die('the deferral line must say that the rule changes in a past tense and that the tense arrives later, in one sentence.');
  }
  console.log(`  deferral      the one compound tense in the lesson is inside the deferral line, on ${deferralHomes.length} surface(s), and it names ${PASSE_UNIT}`);
}

/* NEGATION IS NOT RE-TAUGHT, SCOPED TO PRODUCTION SURFACES.
   a1.18 IS named in one line and the naming is required; what may not happen is
   a screen that TEACHES the wrap. */
{
  const PRODUCTION_IDS = new Set([CHAIN_SECTION_ID, PLACE_SECTION_ID, HEAR_SECTION_ID, ALREADY_SECTION_ID, AMMENT_SECTION_ID, IRREGULAR_SECTION_ID]);
  const NEGATION_TEACHING = ['ne goes in front', 'pas goes behind', 'wrap the verb', 'either side of the verb', 'two words, one either side', 'ne wraps'];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (!PRODUCTION_IDS.has(sid)) continue;
    for (const p of NEGATION_TEACHING) {
      if (strings(s).some((x) => hasPhrase(x, p))) die(`${sid} teaches negation (${JSON.stringify(p)}), which is ${NEGATION_UNIT}'s`);
    }
  }
  /* AND THE ONE NEGATIVE SENTENCE IN THE LESSON IS THE ONE THE CORPUS DECLARES,
     so the "show it if you need it" line cannot quietly become a second lesson. */
  const negatives = strings(LESSON.sections).concat(strings(LESSON.sheets ?? []), strings(LESSON.terms ?? {}))
    .filter((s) => /\bne\s+\S+\s+pas\b|\bn'\S+\s+pas\b/i.test(s));
  const stray = negatives.filter((s) => !s.includes(NEGATION_EXAMPLE));
  if (stray.length) die(`${stray.length} learner string(s) build a negative sentence that is not the one the corpus declares:\n  ${stray.slice(0, 3).map((s) => JSON.stringify(s.slice(0, 90))).join('\n  ')}`);
  if (!negatives.length) die(`nothing shows ${JSON.stringify(NEGATION_EXAMPLE)}, and the brief asks for the interaction with ${NEGATION_UNIT} to be shown rather than left silent`);
}

/* `mieux` APPEARS NOWHERE, RESERVING a2.08. */
for (const f of RESERVED_MUST_FIRE) if (!RESERVED_SHAPE.test(f)) die(`RESERVED_SHAPE does not fire on ${JSON.stringify(f)}, so it is guarding nothing`);
for (const f of RESERVED_MUST_NOT_FIRE) if (RESERVED_SHAPE.test(f)) die(`RESERVED_SHAPE fires on ${JSON.stringify(f)}, which this lesson prints`);
{
  const everything = [
    ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
    ...strings(LESSON.acts ?? []), ...strings(LESSON.drills ?? []), LESSON.intro ?? '',
    ...strings(LESSON.overview ?? {}),
    ...ADVERBES.flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']),
  ];
  const hit = everything.find((s) => RESERVED_SHAPE.test(s));
  if (hit) die(`a comparative appears on a learner surface and they are ${COMPARATIVE_UNIT}'s: ${JSON.stringify(hit.slice(0, 90))}\n  ${RESERVED_FOR_A208.join(', ')} are all reserved, and mieux is the tempting one because bien is here.`);
}
console.log(`  neighbours    0 compound tenses, ${PASSE_UNIT} named in the deferral, ${NEGATION_UNIT} named and not re-taught, 0 comparatives (${COMPARATIVE_UNIT} reserved)`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE STEPPED trapDrill, AND THE ONE FIELD THAT IS NOT FREE
 *
 *  `lesson-contract.test.ts` enforces the four fields seed-wide and this build
 *  shipped both trapDrills stacked until it did. What that test does NOT check,
 *  and what the ledger's sweep names as the one step with a cost, is that the
 *  AUDIO STEP PLAYS EACH CARD'S `fr`, so the `recordingId` has to point at a
 *  take that actually contains those lines. a2.03 had to brief a new take for
 *  exactly this reason: every take in that lesson was sentences and its trap's
 *  words were bare naming forms.
 *
 *  And `size` comes OFF: the stepped branch of MissionSection sizes off
 *  `steps?.length` and no stepped trapDrill in the corpus carries one.
 * ═══════════════════════════════════════════════════════════════════════ */

{
  const recorded = (LESSON.audio?.recorded ?? []) as { id: string; desc: string; clipIds?: string[] }[];
  const traps = LESSON.sections.filter((s) => s.type === 'trapDrill') as (LessonSectionLike)[];
  if (traps.length !== 2) die(`${traps.length} trapDrills, expected 2`);
  for (const t of traps) {
    const kinds = (t.steps ?? []).map((x) => x.kind).join('>');
    if (kinds !== 'rule>cards>audio>drill') die(`${t.id}: trapDrill steps are ${JSON.stringify(kinds)}, and A2 walks rule, cards, audio, drill`);
    if (t.swipe !== true) die(`${t.id}: a stepped trapDrill must set swipe, or the pager hands it a scrolling page and the check lands below the fold`);
    if (!t.say) die(`${t.id}: has no say line, so the mission opens with no lead-in`);
    if (t.size) die(`${t.id}: carries size ${JSON.stringify(t.size)}, and a stepped trapDrill sizes off steps.length. No stepped trapDrill in the corpus has one.`);
    if (!(t.steps ?? []).some((x) => x.kind === 'drill' && x.gate === true)) {
      die(`${t.id}: the drill step is not gated, and a reflex the learner can swipe past is not a reflex that was tested`);
    }
    const rec = (t.audio as { recordingId?: string } | undefined)?.recordingId;
    if (!rec) die(`${t.id}: names an audio step and declares no audio with a recordingId`);
    const take = recorded.find((r) => r.id === rec);
    if (!take) die(`${t.id}'s audio step points at ${JSON.stringify(rec)} and there is no such take`);
    /* THE TAKE CONTAINS EVERY LINE THE STEP WILL PLAY. */
    for (const card of t.cards ?? []) {
      if (!(take.clipIds ?? []).includes(card.fr)) {
        die(`${t.id}'s audio step plays ${JSON.stringify(card.fr)} and ${rec} does not carry it.\n`
          + `  The step plays each card's fr at the section's speeds, so a take that does not contain the line resolves to bare TTS\n`
          + `  with nothing for the studio to deliver against. a2.03 briefed a new take rather than point at one it did not have.`);
      }
    }
    /* AND IT DOES NOT CLAIM « Wrong, Then Right » UNLESS IT IS ONE. Ten A2 traps
       title theirs that way and it is true of those; neither of these is a wrong
       reading followed by a right one, so neither says it. */
    const audioStep = (t.steps ?? []).find((x) => x.kind === 'audio') as { title?: string } | undefined;
    if (/wrong,? then right/i.test(audioStep?.title ?? '')) {
      die(`${t.id}'s audio step is titled ${JSON.stringify(audioStep?.title)} and ${rec} is not a wrong reading followed by a right one`);
    }
  }
  console.log(`  trapDrills    ${traps.length} stepped rule>cards>audio>drill, gated, no size, and both takes carry every line their step plays`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME, AND THE JARGON WALK
 * ═══════════════════════════════════════════════════════════════════════ */

if (LESSON.reframe !== REFRAME) die(`the lesson's reframe is ${JSON.stringify(LESSON.reframe)} and the corpus says ${JSON.stringify(REFRAME)}`);
const reframeWords = REFRAME.trim().split(/\s+/).length;
if (reframeWords > REFRAME_MAX_WORDS) {
  die(`the reframe is ${reframeWords} words and the cap is ${REFRAME_MAX_WORDS}. Doctrine §B.4: could the learner run it in the half-second before the word?`);
}
/* AND IT SAYS `Say`, NOT `Take`. The one word this build changed from the
   brief's candidate, and the reason is the whole Owns: `take` is an operation on
   the page and `say` is an operation in the mouth, which is where the consonant
   the adverb keeps actually lives. */
if (!/^Say the feminine/.test(REFRAME)) {
  die(`the reframe is ${JSON.stringify(REFRAME)} and it must begin "Say the feminine".\n`
    + `  The brief's candidate was "Take the feminine, add -ment" and the verb is the point: a learner who TAKES\n`
    + `  the form gets the right letters, and a learner who SAYS it hears whether they took the right one.`);
}
const reframeUses = countPhrase(strings(LESSON.sections).join('\n') + '\n' + strings(LESSON.sheets ?? []).join('\n') + '\n' + strings(LESSON.terms ?? {}).join('\n'), REFRAME);
const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
if (reframeUses !== EXPECTED_REFRAME_USES) die(`the reframe is used ${reframeUses} times, expected ${EXPECTED_REFRAME_USES}`);
if (reframeSections !== EXPECTED_REFRAME_SECTIONS) die(`the reframe appears in ${reframeSections} sections, expected ${EXPECTED_REFRAME_SECTIONS}`);

for (const j of JARGON) {
  for (const term of [j, `${j}s`]) {
    for (const [label, walk] of [['prose', prose], ['display', display]] as const) {
      const hit = walk(LESSON.sections).concat(walk(LESSON.sheets ?? []), walk(LESSON.terms ?? {}),
        walk(LESSON.acts ?? []), walk(LESSON.drills ?? []),
        [LESSON.intro ?? ''], walk(LESSON.overview ?? {}),
        ADVERBES.flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']))
        .find((s) => hasPhrase(s, term));
      if (hit) die(`grammar jargon on a learner surface (${label} walk): ${JSON.stringify(term)} in ${JSON.stringify(hit.slice(0, 100))}`);
    }
  }
}
/* `intro` IN ITS OWN ASSERTION. a2.11 shipped "third person" there while every
   other gate was green, because the walk stopped at `sections`. */
if (!LESSON.intro || LESSON.intro.length < 80) die('`intro` is missing or too short, and it is drawn on the lesson overview card AND the lesson cover');
for (const j of JARGON) if (hasPhrase(LESSON.intro, j) || hasPhrase(LESSON.intro, `${j}s`)) die(`\`intro\` holds the jargon ${JSON.stringify(j)}, and it is drawn on two screens`);
/* THE PLAIN PHRASE OUTNUMBERS THE TECHNICAL ONE, WHICH IS WHAT THE HOUSE DOES.
   Measured across the 53 shipped lessons: `adjective` 147 against `describing
   word` 137, and a1.16 alone runs 12 against 74. `adverb` is not banned — it is
   the unit's own English name and its sibling is on 147 cards — but a lesson
   that reached for it on every screen would be labelling rather than teaching.

   `overview.titleEn` and `overview.subFr` are EXEMPT: they are the unit's name
   and they have to match `content_units` byte for byte, which the unit check
   below enforces in the other direction. */
{
  const cards = display(LESSON.sections).concat(display(LESSON.sheets ?? []), display(LESSON.terms ?? {}),
    display(LESSON.acts ?? []), display(LESSON.drills ?? []), [LESSON.intro ?? '']);
  const technical = cards.reduce((n, s) => n + countPhrase(s, 'adverb') + countPhrase(s, 'adverbs'), 0);
  const plain = cards.reduce((n, s) => n + countPhrase(s, 'word for how') + countPhrase(s, 'the long word'), 0);
  if (technical > plain) {
    die(`the learner surfaces say "adverb" ${technical} times and the plain phrase ${plain} times.\n`
      + `  The house prefers the plain phrase: a1.16 says "describing word" 74 times against "adjective" 12.\n`
      + `  This is a ratio rather than a ban, because "adjective" is on 147 shipped cards and "adverb" is its sibling.`);
  }
  if (!plain) die('no learner surface uses the plain phrase at all, so the ratio guard is guarding nothing');
  console.log(`  plain phrase  ${plain} uses of the plain phrase against ${technical} of "adverb", and the house ratio is a1.16's 74 to 12`);
}

/* House copy. No em dash, and no "honest". */
const houseText = display(LESSON.sections).concat(display(LESSON.sheets ?? []), display(LESSON.terms ?? {}),
  display(LESSON.acts ?? []), display(LESSON.drills ?? []), [LESSON.intro ?? ''], display(LESSON.overview ?? {}),
  ADVERBES.flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']));
for (const s of houseText) {
  if (s.includes('—')) die(`an em dash on a learner surface: ${JSON.stringify(s.slice(0, 90))}`);
  if (/honest/i.test(s)) die(`the word "honest" on a learner surface: ${JSON.stringify(s.slice(0, 90))}`);
}
console.log(`  copy          reframe ${reframeWords} words in ${reframeSections} sections / ${reframeUses} uses · ${JARGON.length} jargon terms checked in singular and plural over prose() and display() · intro pinned`);

/* ══════════════════════════════════════════════════════════════════════════
 *  TITLES, TERM CHIPS AND frSub
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of LESSON.sections) {
  const t = (s as { title?: string }).title ?? '';
  if (t.length > MISSION_TITLE_MAX) die(`the mission title ${JSON.stringify(t)} is ${t.length} characters and the hub ceiling is ${MISSION_TITLE_MAX}`);
}
for (const s of LESSON.sections) {
  const chips = ((s as { terms?: string[] }).terms ?? []).map((k) => (LESSON.terms ?? {})[k]?.term ?? k);
  if (chips.length > 3) die(`${(s as { id?: string }).id} declares ${chips.length} term chips and the renderer shows 3`);
  const width = chips.join('').length + Math.max(0, chips.length - 1);
  if (width > TERM_CHIP_ROW_MAX) die(`${(s as { id?: string }).id} declares chips totalling ${width} characters (${chips.join(' + ')}) and the measured row budget is ${TERM_CHIP_ROW_MAX}`);
}
const ENGLISH_TELLS = ['the', 'and', 'what', 'you', 'is', 'of', 'that', 'with', 'form', 'word', 'how'];
for (const s of LESSON.sections) {
  const f = (s as { frSub?: string }).frSub;
  if (!f) continue;
  const words = f.toLowerCase().split(/[^\p{L}']+/u).filter(Boolean);
  const tells = words.filter((w) => ENGLISH_TELLS.includes(w));
  if (tells.length) die(`the frSub ${JSON.stringify(f)} on ${(s as { id?: string }).id} looks English (${tells.join(', ')}). frSub is the one field that is deliberately French.`);
}
console.log(`  chrome        ${LESSON.sections.length} titles under ${MISSION_TITLE_MAX}, every chip row under ${TERM_CHIP_ROW_MAX}, every frSub French`);

/* ══════════════════════════════════════════════════════════════════════════
 *  ACTS, TRANCHES AND REACHABILITY
 * ═══════════════════════════════════════════════════════════════════════ */

const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id ?? '');
const claimed = new Map<string, string>();
for (const act of ADVERBES_ACTS) {
  for (const sid of act.sections) {
    if (!sectionIds.includes(sid)) die(`act ${act.id} names ${sid}, which is not a section`);
    if (claimed.has(sid)) die(`${sid} is claimed by ${claimed.get(sid)} and by ${act.id}`);
    claimed.set(sid, act.id);
  }
}
for (const sid of sectionIds) if (!claimed.has(sid)) die(`${sid} is in no act`);

/* THE OWNS OUTWEIGHS THE PARADIGM. Doctrine §B.5, asserted rather than felt. */
const ownsAct = ADVERBES_ACTS.find((a) => a.id === 'act3');
const paradigmAct = ADVERBES_ACTS.find((a) => a.id === 'act2');
if (!ownsAct || !paradigmAct) die('act2 or act3 is missing');
if (ownsAct.sections.length <= paradigmAct.sections.length) {
  die(`the Owns act has ${ownsAct.sections.length} missions and the paradigm act has ${paradigmAct.sections.length}.\n`
    + `  Doctrine §B.5: if the paradigm gets more missions than the Owns, the wrong lesson was built.`);
}

/* EVERY itemId IS DRAWN OR RELEASED. a1.08 shipped forty-three that resolved
   perfectly and were rendered by nothing. */
const drawn = new Set<string>();
const collectIds = (v: unknown): void => {
  if (Array.isArray(v)) { for (const x of v) collectIds(x); return; }
  if (!v || typeof v !== 'object') return;
  const o = v as Record<string, unknown>;
  if (typeof o.itemId === 'string') drawn.add(o.itemId);
  if (Array.isArray(o.itemIds)) for (const x of o.itemIds) if (typeof x === 'string') drawn.add(x);
  if (Array.isArray(o.items)) for (const x of o.items) if (typeof x === 'string') drawn.add(x);
  for (const x of Object.values(o)) collectIds(x);
};
collectIds(LESSON.sections);
collectIds(LESSON.drills ?? []);
collectIds(LESSON.terms ?? {});
const released = new Set(ADVERBES_DECK_TRANCHE.flat());
const orphan = ADVERBES_ITEM_IDS.filter((id) => !drawn.has(id) && !released.has(id));
if (orphan.length) die(`${orphan.length} itemIds are neither drawn by a section nor released by a tranche:\n  ${orphan.join('\n  ')}`);
const ghosts = [...released].filter((id) => !ADVERBES_ITEM_IDS.includes(id));
if (ghosts.length) die(`a tranche releases ${ghosts.length} ids the lesson does not declare: ${ghosts.join(', ')}`);
if (ADVERBES_DECK_TRANCHE.length !== EXPECTED_ACTS) die(`${ADVERBES_DECK_TRANCHE.length} tranches and ${EXPECTED_ACTS} acts`);
/* AND NOTHING IS RELEASED BEFORE THE ACT THAT SHOWS IT. */
for (let i = 0; i < ADVERBES_DECK_TRANCHE.length; i += 1) {
  const shownBy = new Set<string>();
  for (let j = 0; j <= i; j += 1) {
    for (const sid of ADVERBES_ACTS[j].sections) {
      const s = byId(sid);
      const ids = new Set<string>();
      const walk = (v: unknown): void => {
        if (Array.isArray(v)) { for (const x of v) walk(x); return; }
        if (!v || typeof v !== 'object') return;
        const o = v as Record<string, unknown>;
        if (typeof o.itemId === 'string') ids.add(o.itemId);
        if (Array.isArray(o.itemIds)) for (const x of o.itemIds) if (typeof x === 'string') ids.add(x);
        for (const x of Object.values(o)) walk(x);
      };
      walk(s);
      for (const id of ids) shownBy.add(id);
      for (const r of ADVERBES) if (strings(s).some((x) => x.includes(r.fr))) shownBy.add(r.id);
      for (const id of IMPORTED_IDS) if (strings(s).some((x) => x.includes(importedFr(id)))) shownBy.add(id);
    }
  }
  for (const id of ADVERBES_DECK_TRANCHE[i]) {
    if (!shownBy.has(id)) die(`tranche ${i} releases ${id} and no act up to and including act ${i + 1} puts it on a screen`);
  }
}
/* EVERY SPEAK ITEM CARRIES voiceflash. For the four `nasales` sentences that is
   true ONLY because this build adds it. */
for (const id of ADVERBES_SPEAK_IDS) {
  const authored = ADVERBES.find((r) => r.id === id);
  if (authored) {
    if (!authored.drills.includes('voiceflash')) die(`the speak mission names ${id} and it has no voiceflash drill`);
    continue;
  }
  const imported = IMPORTED_BY_ID.get(id);
  if (!imported) die(`the speak mission names ${id}, which is neither authored nor imported`);
  const willHave = new Set([...(imported.drills ?? []), ...(DRILL_ADDITIONS.find((d) => d.id === id)?.add ?? [])]);
  if (!willHave.has('voiceflash')) die(`the speak mission names ${id}, which has no voiceflash drill and gains none in this build`);
}
console.log(`  reachability  ${ADVERBES_ITEM_IDS.length} items, all drawn or released · act3 ${ownsAct.sections.length} missions against act2's ${paradigmAct.sections.length} · ${new Set(ADVERBES_SPEAK_IDS).size} speak items all voiceflash`);

/* ══════════════════════════════════════════════════════════════════════════
 *  DRILLS, TRIGGERS AND ROUNDS
 * ═══════════════════════════════════════════════════════════════════════ */

const drillIds = new Set((LESSON.drills ?? []).map((d) => d.id));
for (const t of LESSON.errorTriggers ?? []) {
  if (!drillIds.has(t.drill)) die(`trigger ${t.id} names drill ${t.drill}, which does not exist`);
  if (!t.retest || !drillIds.has(t.retest)) die(`trigger ${t.id} names retest ${t.retest}, which does not exist`);
  for (const d of t.detectOn) {
    const [sid] = d.split('/');
    if (!sectionIds.includes(sid)) die(`trigger ${t.id} detects on ${d}, and ${sid} is not a section`);
  }
}
const rounds = (quizSection as { rounds: { id: string; targets: string[] }[] }).rounds;
const leads = rounds.map((r) => r.targets[0]);
if (new Set(leads).size !== leads.length) die(`two rounds lead on the same trigger: ${leads.join(', ')}`);
const triggerIds = new Set((LESSON.errorTriggers ?? []).map((t) => t.id));
for (const r of rounds) for (const t of r.targets) if (!triggerIds.has(t)) die(`round ${r.id} targets ${t}, which is not a trigger`);
const unled = [...triggerIds].filter((t) => !leads.includes(t));
if (unled.length) die(`${unled.join(', ')} lead no round, so their drills can never fire`);
for (const d of LESSON.drills ?? []) {
  const items = (d as { items?: string[] }).items ?? [];
  for (const id of items) {
    if (!ADVERBES_ITEM_IDS.includes(id)) die(`drill ${d.id} names ${JSON.stringify(id)}, which is not an itemId of this lesson`);
  }
}
console.log(`  drills        ${drillIds.size} drills, ${triggerIds.size} triggers, ${rounds.length} rounds, each leading on a different trigger`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

const mcq = qs.filter((q) => q.format === 'mcq').length;
if (mcq * 2 > qs.length) die(`${mcq} of ${qs.length} questions are mcq, and at most half may be`);
for (const q of qs) {
  if (!q.why) die(`a quiz question has no why: ${JSON.stringify(q.q).slice(0, 80)}`);
  if (!q.ref) die(`a quiz question has no ref: ${JSON.stringify(q.q).slice(0, 80)}`);
  if (!sectionIds.includes(q.ref)) die(`a quiz question refs ${q.ref}, which is not a section`);
}
for (const q of qs) {
  if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
  if (!q.answer) die(`a free-text question has no answer: ${JSON.stringify(q.q).slice(0, 80)}`);
  if (!matchesAccept(q.answer, q.accept ?? [])) {
    die(`the free-text question ${JSON.stringify(q.q).slice(0, 60)} displays ${JSON.stringify(q.answer)} and its accept list does not take it`);
  }
}
/* NO QUESTION MAY TURN ON A DIFFERENCE fold() CANNOT SEE. Corrections §5.
   THIS LESSON HAS ACCENTED ANSWERS — `évidemment` — and that is fine, because
   the accent is not what is being tested: the question turns on `emment`
   against `amment`, and fold() keeps both. What would be wrong is a question
   whose ONLY difference from the wrong answer is a diacritic. */
for (const q of qs) {
  if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
  const ans = q.answer ?? '';
  const folded = ans.normalize('NFD').replace(/[̀-ͯ]/g, '');
  if (folded === ans) continue;
  // The answer carries a diacritic. It is legal only if the thing being tested
  // survives folding, which it does when a plausible wrong answer also folds to
  // something different.
  const wrongForms = [
    ...NOT_FROM_FEMININE, ...BON_BIEN_WRONG, ...ENGLISH_ORDER,
    ...AMMENT.map((x) => `${x.adj.slice(0, -3)}amment`),
    ...AMMENT.map((x) => `${x.adj}ement`),
  ];
  const separable = wrongForms.some((w) => {
    const wf = w.normalize('NFD').replace(/[̀-ͯ]/g, '');
    return wf !== folded && w !== ans && folded.length > 0;
  });
  if (!separable) {
    die(`the free-text question ${JSON.stringify((q.q ?? '').slice(0, 60))} answers ${JSON.stringify(ans)}, which carries a diacritic, and nothing distinguishes it once fold() strips it.`);
  }
}
const closed = qs.filter((q) => typeof q.correct === 'number');
const slots = new Map<number, number>();
for (const q of closed) slots.set(q.correct as number, (slots.get(q.correct as number) ?? 0) + 1);
for (const [slot, n] of slots) {
  if (n / closed.length > 0.4) die(`option slot ${slot} holds ${n} of ${closed.length} closed questions (${Math.round((n / closed.length) * 100)}%), and the cap is 40%`);
}
console.log(`  quiz          ${qs.length} questions, ${mcq} mcq (${Math.round((mcq / qs.length) * 100)}%), every one with a why and a ref, spread ${[...slots.entries()].sort().map(([s, n]) => `${s}:${n}`).join(' ')}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SCENARIO
 * ═══════════════════════════════════════════════════════════════════════ */

const scenario = byId(SCENARIO_SECTION_ID) as { turns?: { user?: string; userEn?: string; alts?: unknown[] }[] } | undefined;
if (!scenario?.turns) die(`${SCENARIO_SECTION_ID} has no turns`);
scenario.turns.forEach((t, i) => {
  if (!t.userEn) die(`${SCENARIO_SECTION_ID} turn ${i} has no userEn, and scenario.logic.test.ts requires one`);
  if ((t.alts ?? []).length < 2) die(`${SCENARIO_SECTION_ID} turn ${i} has ${(t.alts ?? []).length} alts and needs at least 2`);
});
console.log(`  scenario      ${scenario.turns.length} turns, every one with a userEn and at least 2 alts`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE
 * ═══════════════════════════════════════════════════════════════════════ */

const frOf = (id: string) => ADVERBES.find((r) => r.id === id)?.fr ?? importedFr(id);
for (const id of ADVERBES_DICTEE_IDS) {
  const text = frOf(id);
  if (dicteeMode(text) !== 'letters') {
    die(`${id} ${JSON.stringify(text)} is a dictée target and dicteeMode() puts it in WORD tiles.\n`
      + `  Word mode hands every real word over pre-spelled, so a lesson about a spelling tested there is testing nothing.`);
  }
}
for (const text of DICTEE_WORD_MODE_ROWS) {
  if (dicteeMode(text) === 'letters') {
    die(`${JSON.stringify(text)} is listed as too long for the dictée and dicteeMode() puts it in LETTERS. Add it to the dictée.`);
  }
}
/* THE MIDDLE STEP IS IN THE DICTÉE. A dictée that could not spell the woman
   form would test everything in this lesson except its subject, and the two
   forms that carry the audible consonant are the two this build authored. */
const femInDictee = ADJ_ORDER.filter((a) => ADVERBES_DICTEE_IDS.includes(chainId(a, 'fem')));
if (femInDictee.length < 2) die(`only ${femInDictee.length} of the ${ADJ_ORDER.length} woman forms is a dictée target, and it is the step the lesson is about`);
console.log(`  dictée        ${ADVERBES_DICTEE_IDS.length} targets, all LETTERS mode, ${DICTEE_WORD_MODE_ROWS.length} rows proven to be WORD mode, ${femInDictee.length} woman forms spelled`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NASALS, MEASURED THROUGH THE REAL CHECKER
 *
 *  AND THE SPLIT IS PER-NASAL RATHER THAN PER-ROW, which is the thing
 *  corrections §6 does not say. Every repair carries a HALF-REPAIRED value: what
 *  you get by fixing exactly what the checker reports. For two of the ten that
 *  value is DIFFERENT from the correct one and the checker calls it clean.
 * ═══════════════════════════════════════════════════════════════════════ */

const respelled: [string, string][] = [
  ...ADVERBES.map((r) => [r.fr, r.respell ?? ''] as [string, string]),
  ...IMPORTED_IDS.map((id) => [importedFr(id), displayRespell(id)] as [string, string]),
];
for (const [frText, rs] of respelled) {
  if (hasPlainNasalFor(frText, rs)) die(`hasPlainNasalFor flags ${JSON.stringify(frText)} / ${JSON.stringify(rs)}`);
}
let superscripts = 0; let seen = 0; const blind: string[] = [];
for (const [frText, rs] of respelled) {
  for (let i = 0; i < rs.length; i += 1) {
    if (rs[i] !== 'ⁿ') continue;
    superscripts += 1;
    const broken = `${rs.slice(0, i)}n${rs.slice(i + 1)}`;
    if (hasPlainNasalFor(frText, broken)) seen += 1; else blind.push(`${frText} :: ${broken}`);
  }
}
if (superscripts !== EXPECTED_SUPERSCRIPTS) die(`${superscripts} superscripts, expected ${EXPECTED_SUPERSCRIPTS}`);
if (seen !== EXPECTED_SEEN_NASALS) die(`the checker sees ${seen} of them, expected ${EXPECTED_SEEN_NASALS}`);
if (blind.length !== EXPECTED_BLIND_NASALS) {
  die(`${blind.length} superscripts are INVISIBLE to the checker and this build measured ${EXPECTED_BLIND_NASALS}:\n  ${blind.slice(0, 8).join('\n  ')}\n`
    + `  Corrections §6: a repair that trusts the checker fixes the half it can see and leaves the other half wrong.`);
}

/* THE REPAIR TABLE, ALL THREE VALUES THROUGH THE REAL FUNCTION.
   stored FLAGGED, half NOT flagged, to NOT flagged, and for the blind ones
   half !== to, which is the proof that the checker's report is incomplete. */
for (const r of ALL_REPAIRS) {
  if (!hasPlainNasalFor(r.fr, r.from)) {
    die(`${r.id} is repaired from ${JSON.stringify(r.from)} and the checker does NOT flag it.\n`
      + `  Every repair in this build is on a value the checker reports. If this one has stopped being reported,\n`
      + `  either the checker has changed or the row has.`);
  }
  if (hasPlainNasalFor(r.fr, r.to)) die(`${r.id} repairs to ${JSON.stringify(r.to)} and the checker still flags it`);
  if (hasPlainNasalFor(r.fr, r.half)) die(`${r.id}'s half-repaired value ${JSON.stringify(r.half)} is flagged, so it is not what the checker reports`);
  /* THE HALF-REPAIRED VALUE DIFFERS FROM THE CORRECT ONE FOR EXACTLY TWO
     REASONS, AND THEY ARE DIFFERENT REASONS.

     `blind`  the row carries a SECOND nasal the checker cannot see, so repairing
              what it reports leaves the row wrong and clean at the same time.
     `house`  the checker sees the nasal and the minimal repair is not the house
              value. `bien` BYAN is flagged; BYAⁿ fixes the flag and BYEHⁿ is
              what four published rows and this lesson's own imports hold.

     The first version of this table had one boolean for both and the batch
     caught it on `bien` at once. */
  const differs = r.half !== r.to;
  if (differs !== (r.blind || r.house)) {
    die(`${r.id} is recorded as blind=${r.blind} house=${r.house} and its half-repaired value ${JSON.stringify(r.half)} `
      + `${differs ? 'differs from' : 'equals'} the correct one ${JSON.stringify(r.to)}.`);
  }
  if (r.blind && r.house) die(`${r.id} is recorded as both blind and a house-convention repair, and they are different reasons`);
}
const blindRepairs = ALL_REPAIRS.filter((r) => r.blind);
if (blindRepairs.length !== EXPECTED_RESPELL_REPAIRS_INVISIBLE) die(`${blindRepairs.length} blind repairs, expected ${EXPECTED_RESPELL_REPAIRS_INVISIBLE}`);
/* AND THE BLIND ONES ARE ASSERTED BY NAME, so the day the checker improves the
   build fails rather than carrying a dead list. */
for (const name of ['lentement', 'constamment']) {
  if (!blindRepairs.some((r) => r.fr === name)) {
    die(`${JSON.stringify(name)} is not in the blind repair list and this build measured it as blind. `
      + 'Corrections §6 asks for the blindness to be asserted as a negative so a change in the checker is found rather than carried.');
  }
}
/* AND `halfRepaired()` AGREES WITH THE TABLE, so the guards and the accessor
   cannot drift apart. */
for (const r of ALL_REPAIRS) {
  if (halfRepaired(r.id) !== r.half) die(`halfRepaired(${r.id}) returns ${JSON.stringify(halfRepaired(r.id))} and the table says ${JSON.stringify(r.half)}`);
}
console.log(`  nasals        ${superscripts} superscripts, ${seen} seen, ${blind.length} blind · ${ALL_REPAIRS.length} repairs, ${blindRepairs.length} of them carrying a nasal the checker CANNOT see (${blindRepairs.map((r) => r.fr).join(', ')})`);

/* THE SAME WORD RESPELLED TWO WAYS IN ONE DATABASE, AND THE SENTENCE HALF IS
   RIGHT. This is what makes the ten repairs a bringing-into-line rather than an
   invention, so it is re-derived rather than asserted in a comment. */
for (const e of TWO_WAYS_EVIDENCE) {
  const rep = ALL_REPAIRS.find((r) => r.id === e.headword);
  if (!rep) die(`${e.headword} is in TWO_WAYS_EVIDENCE and is not repaired`);
  if (!e.published.includes(rep.to)) {
    die(`${e.headword} is repaired to ${JSON.stringify(rep.to)} on the grounds that ${e.sentence} already publishes it, and ${e.sentence} holds ${JSON.stringify(e.published)}.`);
  }
  if (e.stored === rep.to) die(`${e.headword} already holds the repaired value, so the manifest is post-batch`);
}
console.log(`  read off      ${TWO_WAYS_EVIDENCE.map((e) => `${e.word}: ${e.stored} against ${e.published}`).join(' · ')}`);

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

  /* THE ROW COUNT IS THE ONLY SIGNAL, and this is a NEW NAMESPACE, so it is 0
     and anything at all inside the block is somebody else. Ledger §10. */
  const mineNow = await c.query<{ id: string }>(
    "select id from content_items where id like 'fr.a2.adverbes-essentiels.%' order by id");
  const inBlock = mineNow.rows.map((r) => r.id).filter((id) => id >= ID_BLOCK.from && id <= ID_BLOCK.to);
  const foreign = inBlock.filter((id) => !AUTHORED_IDS.includes(id));
  if (foreign.length) {
    c.release(); await pool.end();
    die(`${foreign.length} rows exist inside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to} and it does not own them:\n  ${foreign.join('\n  ')}`);
  }
  const before = mineNow.rowCount ?? 0;
  if (before !== ROW_COUNT_BEFORE && before !== ROW_COUNT_BEFORE + AUTHORED_IDS.length) {
    if (before < ROW_COUNT_BEFORE) {
      c.release(); await pool.end();
      die(`fr.a2.adverbes-essentiels held ${ROW_COUNT_BEFORE} rows and now holds ${before}. A SHRINKING total is somebody deleting rows.`);
    }
    console.log(`  !! fr.a2.adverbes-essentiels holds ${before} rows and this build expected ${ROW_COUNT_BEFORE}. Nothing is inside the block, so this is somebody else's allocation. Reported, not fatal.`);
  }

  /* THE THEME-WIDE COUNT. Ledger §a2.14-12: grown is a report, shrunk is fatal. */
  const themeNow = await c.query<{ n: string }>(
    'select count(*) n from content_items where theme = $1 and id <> all($2)', [THEME, AUTHORED_IDS]);
  const themeCount = Number(themeNow.rows[0].n);
  if (themeCount < THEME_COUNT_BEFORE) {
    c.release(); await pool.end();
    die(`${THEME} held ${THEME_COUNT_BEFORE} rows and now holds ${themeCount}. A SHRINKING total is somebody deleting rows.`);
  }
  if (themeCount > THEME_COUNT_BEFORE) {
    console.log(`  !! ${THEME} has grown from ${THEME_COUNT_BEFORE} to ${themeCount} since this build measured it. Reported, not fatal.`);
  }

  /* AND `adverbes` (no suffix) IS STILL DEAD, which is the half of ledger §3
     that was right and the premise this build's theme decision rests on. */
  const deadTheme = await c.query<{ n: string }>("select count(*) n from content_items where theme = 'adverbes'");
  if (Number(deadTheme.rows[0].n) > 0) {
    c.release(); await pool.end();
    die(`the theme \`adverbes\` now holds ${deadTheme.rows[0].n} rows. Ledger §3 recorded it as dead and this build wrote into \`${THEME}\` on that basis.`);
  }

  /* NO DUPLICATE fr INSIDE THE THEME. flashhub-coverage.test.ts treats two rows
     sharing an fr in one theme as one card served twice, and it strips the
     article first. THIS IS THE CHECK THAT DECIDED THE THEME: `lentement`
     already has a card here, so this build IMPORTS it rather than authoring a
     copy, and every one of the 24 authored strings was measured against the
     theme's 325 before it was written. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const themeRows = await c.query<{ id: string; fr: string }>(
    'select id, fr from content_items where theme = $1', [THEME]);
  const seenFr = new Map<string, string>();
  for (const r of themeRows.rows) if (!AUTHORED_IDS.includes(r.id)) seenFr.set(strip(r.fr), r.id);
  for (const r of ADVERBES) {
    const clash = seenFr.get(strip(r.fr));
    if (clash) {
      c.release(); await pool.end();
      die(`${r.id} ${JSON.stringify(r.fr)} collides with ${clash} inside ${THEME}. The flashcard hub would serve one card twice.`);
    }
  }

  /* a1.03's ENDING POPULATION. It runs the REAL function rather than a copy.
     Adverbs are invariable and are not nouns, and neither are the four
     adjectives this build authors, so nothing here can join the population; the
     check is the proof rather than the argument. */
  const gendered = ADVERBES.filter((r) => (r as { gender?: string }).gender);
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
  const baseRows = themeRows.rows.filter((r) => !AUTHORED_IDS.includes(r.id));
  const popBefore = endingPopulation(baseRows as never);
  const popAfter = endingPopulation([...baseRows, ...AUTHORED_ITEMS] as never);
  if (popBefore.length !== popAfter.length) {
    c.release(); await pool.end();
    die(`this build changes a1.03's ending population from ${popBefore.length} rows to ${popAfter.length}`);
  }
  console.log(`  a1.03         ending population unchanged at ${popBefore.length} rows from this theme, 0 gendered rows authored or imported`);

  /* THE ARITHMETIC, RE-READ FROM POSTGRES. For `sérieux` all three cells are
     published rows and the middle one is a2.03's. */
  const chainIds = ADJ_ORDER.flatMap((a) => STEP_ORDER.filter((s) => !chainIsAuthored(a, s)).map((s) => chainId(a, s)));
  const chainRows = await c.query<{ id: string; respell: string }>(
    'select id, respell from content_items where id = any($1)', [chainIds]);
  const cb = new Map(chainRows.rows.map((r) => [r.id, r.respell]));
  for (const a of ADJ_ORDER) {
    for (const s of STEP_ORDER) {
      if (chainIsAuthored(a, s)) continue;
      const stored = String(cb.get(chainId(a, s)) ?? '');
      const rep = ALL_REPAIRS.find((r) => r.id === chainId(a, s));
      const after = rep ? stored.split(rep.from).join(rep.to) : stored;
      if (after !== stepRespell(a, s)) {
        c.release(); await pool.end();
        die(`${chainId(a, s)} holds ${JSON.stringify(stored)}, which after this build's repairs is ${JSON.stringify(after)}, and the chain says ${JSON.stringify(stepRespell(a, s))}.`);
      }
    }
  }
  console.log(`  the evidence  ${ADJ_ORDER.map((a) => chainOf(a).join('/')).join(' · ')}, re-read from Postgres`);

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
    const transformed = ALL_REPAIRS.some((r) => r.id === id);
    if (!transformed && (rec.respell ?? null) !== (row.respell ?? null)) {
      stale.push(`${id} respell: manifest ${JSON.stringify(rec.respell)}, Postgres ${JSON.stringify(row.respell)}`);
    }
    if (!DRILL_ADDITIONS.some((d) => d.id === id)) {
      const mine = [...(rec.drills ?? [])].sort().join(',');
      const theirs = pgArray(row.drills).sort().join(',');
      if (mine !== theirs) stale.push(`${id} drills: manifest ${mine}, Postgres ${theirs}`);
    }
  }
  if (stale.length) {
    c.release(); await pool.end();
    die(`the manifest is stale. Regenerate it with pnpm tsx scripts/_a217_manifest.ts:\n  ${stale.join('\n  ')}`);
  }

  /* THE INSPECTED ROWS STILL SAY WHAT THE CORPUS HEADER SAYS THEY SAY. */
  const inspected = await c.query<{ id: string; respell: string | null }>(
    'select id, respell from content_items where id = any($1)', [NOT_REPAIRED.map((r) => r.id)]);
  for (const r of inspected.rows) {
    const claimedValue = NOT_REPAIRED.find((x) => x.id === r.id)!.respell;
    if (String(r.respell ?? '') !== claimedValue) {
      c.release(); await pool.end();
      die(`${r.id} is recorded in NOT_REPAIRED as ${JSON.stringify(claimedValue)} and Postgres holds ${JSON.stringify(r.respell)}`);
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
  for (const d of DRILL_ADDITIONS) if (!liveBy.get(d.id)) pending.push(`${d.id} takes a drill addition and is not in Postgres`);
  if (pending.length) {
    c.release(); await pool.end();
    die(`repairs cannot be applied safely:\n  ${pending.join('\n  ')}`);
  }
  /* AND THE REPAIRED VALUES MUST BE WHAT THE SCREENS WILL PRINT. */
  for (const r of ALL_REPAIRS) {
    const stored = String(liveBy.get(r.id)?.respell ?? '');
    const expected = stored.split(r.from).join(r.to);
    if (displayRespell(r.id) !== expected) {
      c.release(); await pool.end();
      die(`displayRespell(${r.id}) returns ${JSON.stringify(displayRespell(r.id))} and the transaction will write ${JSON.stringify(expected)}`);
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

  /* EVERY UNIT THIS LESSON CITES STILL EXISTS AND IS NAMED ON A SCREEN. */
  const cited = await c.query<{ id: string }>(
    "select body->>'id' id from content_units where kind = 'curriculum_unit' and body->>'id' = any($1)", [[...CITED_UNITS]]);
  const foundUnits = new Set(cited.rows.map((r) => r.id));
  for (const u of CITED_UNITS) if (!foundUnits.has(u)) die(`this lesson names ${u} and no such unit exists`);
  const surfaces = display(LESSON.sections).concat(display(LESSON.sheets ?? []), display(LESSON.terms ?? {}));
  for (const u of CITED_UNITS) {
    if (!surfaces.some((s) => hasPhrase(s, u))) die(`${u} is in CITED_UNITS and is named on no learner surface`);
  }

  /* THE PLACEMENT MEASUREMENT, RE-RUN. The lesson prints "76 times out of 76"
     on a learner surface, so a number that has moved is a printed figure that
     has become false. A REPORT rather than a death: the corpus grows. */
  const AFTER_RE = '\\y(mange|parle|chante|travaille|arrive|répond|comprend|joue|marche|écoute|regarde)\\s+(souvent|toujours|bien|mal|vite|lentement|rapidement|doucement|vraiment|beaucoup)\\y';
  const BEFORE_RE = '\\y(souvent|toujours|bien|mal|vite|lentement|rapidement|doucement|vraiment)\\s+(mange|parle|chante|travaille|arrive|répond|comprend|joue|marche|écoute|regarde)\\y';
  /* THE MEASUREMENT EXCLUDES THIS BUILD'S OWN ROWS, and the first version did
     not. After the first apply the count went from 80 to 87, because seven of
     this lesson's own authored sentences match the pattern it is measuring. A
     lesson that counted itself would print a figure that grows every time
     somebody re-applies it, and the claim it is making is about the corpus the
     learner has ALREADY seen. */
  const NOT_MINE = 'fr.a2.adverbes-essentiels.%';
  const after = await c.query<{ n: string }>(
    `select count(*) n from content_items where kind='sentence' and status='published' and fr ~* $1 and id not like $2`,
    [AFTER_RE, NOT_MINE]);
  const beforeCount = await c.query<{ n: string }>(
    `select count(*) n from content_items where kind='sentence' and status='published' and fr ~* $1 and id not like $2`,
    [BEFORE_RE, NOT_MINE]);
  if (Number(beforeCount.rows[0].n) !== PLACEMENT_EVIDENCE.adverbThenVerb) {
    c.release(); await pool.end();
    die(`${beforeCount.rows[0].n} published sentences now put the word for how IN FRONT of the verb and this build measured ${PLACEMENT_EVIDENCE.adverbThenVerb}.\n`
      + `  The lesson prints that figure on a learner surface and says the rule is exceptionless. It is no longer.`);
  }
  if (Number(after.rows[0].n) !== PLACEMENT_EVIDENCE.verbThenAdverb) {
    console.log(`  !! the verb-then-adverb count is ${after.rows[0].n} and this build measured ${PLACEMENT_EVIDENCE.verbThenAdverb}. The lesson prints the old figure. Reported, not fatal.`);
  }
  console.log(`  placement     re-measured: ${after.rows[0].n} verb-then-adverb, ${beforeCount.rows[0].n} adverb-then-verb`);

  /* DEPENDENTS. Probed rather than copied. */
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
    // THE DRILL ADDITIONS. `drills` is an ENUM ARRAY (drill_kind[]), not text[]:
    // concatenating a text[] fails with "operator does not exist: drill_kind[]
    // || text[]" and takes the whole transaction with it. Ledger §5.
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
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.adverbes-essentiels.%'");
  const check = await c.query<{ id: string; respell: string | null; drills: string[] }>(
    'select id, respell, drills::text[] drills from content_items where id = any($1)',
    [[...ALL_REPAIRS.map((r) => r.id), ...DRILL_ADDITIONS.map((d) => d.id)]]);
  const post = new Map(check.rows.map((r) => [r.id, r] as const));
  const failed: string[] = [];
  for (const r of ALL_REPAIRS) {
    const now = String(post.get(r.id)?.respell ?? '');
    if (!now.includes(r.to)) failed.push(`${r.id} respell is ${JSON.stringify(now)} and does not contain ${JSON.stringify(r.to)}`);
    if (now.includes(r.from) && r.from !== r.to) failed.push(`${r.id} still contains the unrepaired ${JSON.stringify(r.from)}`);
    if (hasPlainNasalFor(r.fr, now)) failed.push(`${r.id} is still flagged by the nasal checker after the repair: ${JSON.stringify(now)}`);
  }
  for (const d of DRILL_ADDITIONS) {
    const have = pgArray(post.get(d.id)?.drills);
    for (const want of d.add) if (!have.includes(want)) failed.push(`${d.id} still has no ${want} drill`);
  }
  const mineAfter = Number(afterRows.rows[0].n);
  if (mineAfter !== before + AUTHORED_ITEMS.length && mineAfter !== before) {
    failed.push(`fr.a2.adverbes-essentiels holds ${mineAfter} rows and it held ${before} before this build's ${AUTHORED_ITEMS.length}`);
  }
  if (failed.length) { c.release(); await pool.end(); die(`the transaction committed and these did not land:\n  ${failed.join('\n  ')}`); }

  console.log(
    `\n  applied to Postgres:\n`
    + `    ${AUTHORED_ITEMS.length} rows authored into ${THEME}, ${AUTHORED_ITEMS[0].id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1].id}\n`
    + `      ${Object.keys(AUTHORED_HEADWORDS).length} ADJECTIVES authored (${Object.keys(AUTHORED_HEADWORDS).join(', ')}) and ZERO adverbs\n`
    + `      the theme opened a new level namespace: fr.a2.${THEME} did not exist before this build\n`
    + `    ${ALL_REPAIRS.length} respellings repaired (${RESPELL_REPAIRS_VISIBLE.length} the checker reported, ${RESPELL_REPAIRS_INVISIBLE.length} carrying a second nasal it cannot see)\n`
    + `    ${RESPELL_ADDITIONS.length} respellings supplied, ${DRILL_ADDITIONS.length} drill additions, all verified after the commit\n`
    + `    ${IMPORTED_IDS.length} rows imported by id out of ${SOURCE_THEMES.length} themes: ${SOURCE_THEMES.join(', ')}\n`
    + `    ${READ_NOT_IMPORTED.length} rows read and refused, including both answers to the generalisation questions\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${ADVERBES_ITEM_IDS.length} items\n`
    + `    fr.a2.adverbes-essentiels row count: ${before} before, ${mineAfter} after (max ${afterRows.rows[0].mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-adverbes-into-seed.ts\n`);

  c.release();
  await pool.end();
}

if (LESSON.sections.filter((s) => s.type === 'tapTable').length !== EXPECTED_TAPTABLES) die(`${LESSON.sections.filter((s) => s.type === 'tapTable').length} tapTables, expected ${EXPECTED_TAPTABLES}`);
if (LESSON.sections.filter((s) => s.type === 'cardDeck').length !== EXPECTED_CARDDECKS) die(`${LESSON.sections.filter((s) => s.type === 'cardDeck').length} cardDecks, expected ${EXPECTED_CARDDECKS}`);
if (SHEET_ID !== (ADVERBES_SHEETS[0]?.id ?? '')) die('the sheet id constant and the sheet disagree');
if (!byId(HEAR_SECTION_ID) || !byId(AMMENT_SECTION_ID)) die('one of the two listening sections is missing');
for (const sid of [SCENE_SECTION_ID, AFTER_SECTION_ID, KNOWN_SECTION_ID, ALREADY_SECTION_ID, READING_SECTION_ID, DECK_SECTION_ID, REVIEW_SECTION_ID, ROUNDUP_SECTION_ID, UNSEEN_SECTION_ID]) {
  if (!byId(sid)) die(`${sid} is missing from the lesson`);
}
if (DICTATION_IDS.length + AMMENT.length !== EXPECTED_DICTEE) die(`${DICTATION_IDS.length} authored dictée rows plus the ${AMMENT.length} imported ones is not ${EXPECTED_DICTEE}`);
if (ALREADY_E.length < 2) die('the already-ends-in-e case needs at least two examples to read as a class rather than as one word');
if (AGREEMENT_UNIT !== 'a2.03') die('AGREEMENT_UNIT has drifted');

main().catch((e) => { console.error(e); process.exit(1); });
