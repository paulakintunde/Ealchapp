/* a2.21 « Le passé composé avec être », seq 18. Corpus + lesson + terms, to
 * Postgres.
 *
 *     pnpm content:passe-compose-etre -- --dry-run
 *     pnpm content:passe-compose-etre
 *
 * ── WHAT THIS BATCH REFUSES ──────────────────────────────────────────────
 *
 * A BARE PAST FORM AS A CORPUS ROW. a2.05 settled the split, a2.20 agreed it,
 *   and this build inherits it: zero on both sides. A row whose `fr` has no
 *   whitespace is a bare word whatever its `kind` says (a2.05 §4).
 * A ROW INSIDE a2.20's OR a2.05's BLOCK, and a row inside this build's block
 *   that this build does not own.
 * A REFLEXIVE VERB OR A REFLEXIVE MARKER anywhere at all. a2.22 and a2.23 own
 *   those and a2.23 declares this lesson as a prerequisite.
 * AN ENDING AFTER avoir. « elle a mangée » is the error the lesson teaches
 *   against and it may only appear where the error is the content.
 * avoir IN FRONT OF ONE OF THE FIFTEEN outside the six sections that teach the
 *   transitive split, and ON ANY PRODUCTION SURFACE AT ALL.
 * A TRANSITIVE USE ON A PRODUCTION SURFACE. The decision is receptive-only and
 *   this is the guard that makes it true rather than stated.
 * A PARAPHRASE OF a2.01's REFRAME. The bookend is asserted as a LITERAL and a
 *   reworded version must go red; that is what the brief asks for by name.
 * A NEGATION STRING THAT IS NOT a2.19's, quoted through a2.05 to here.
 * AN EAR QUESTION offering two options that are one sound apart, walked over
 *   NO_EAR_QUESTION, which is every pair of cells of fourteen of the fifteen.
 * A DICTÉE TARGET that `dicteeMode` puts in WORD mode.
 * A CELL THE FOUR-FORM SCREEN DOES NOT NAME, form by form, and a contrast pair
 *   whose two halves are not in one section.
 * GRAMMAR JARGON on a learner surface, walked over `sections + sheets + terms +
 *   intro + overview + acts + drills + AUDIO`, in both `prose()` and
 *   `display()`, with every entry checked in its -s plural.
 * A STACKED trapDrill, a trapDrill carrying a `size`, a cards-step label that
 *   miscounts its own array, or an audio step whose recording does not contain
 *   the cards' own lines.
 * A cardDeck HINT over HINT_MAX, and EXACTLY TWO consecutive dots anywhere on a
 *   learner surface. Both were found on a Pixel 6 by a2.20 and no host gate in
 *   this band could have found either.
 * A SCENE BUBBLE whose `fr` contains « ! ». a2.05 §11.2, found on a Pixel 6.
 */
import './env';
import { Pool } from 'pg';
import {
  canonicalJson, formatIssues, quizQuestions, validateItem, validateLesson,
  type Item, type Lesson,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept, fold } from '../../ealch-v2/src/content/answer.logic.ts';
import { normalizeFr } from '../../ealch-v2/src/utils/score.ts';
import {
  A201_REFRAME, A203_REFRAME, A205_BLOCK, A205_REFRAME, A215_REFRAME,
  A220_BLOCK, A220_ETRE_FORMS, A220_REFRAME, AGREEMENT_RULE, AUDIBLE, AUTHORED_IDS,
  BLIND_NASALS, BUILT_FORMS, CELL_IDS, CONTRAST_PAIRS, DICTEE_MAX_LETTERS,
  DICTEE_TOO_LONG, DOUBLE_STOP, ELIDES, ETRE_ROWS, ETRE_VERBS,
  EXPECTED_ACTS, EXPECTED_AUDIBLE_F, EXPECTED_AUTHORED, EXPECTED_FALSE_POSITIVES,
  EXPECTED_IMPORTED, EXPECTED_NASALS_MISSED, EXPECTED_ONE_SOUND_VERBS,
  EXPECTED_QUESTIONS, EXPECTED_SECTIONS, EXPECTED_VERBS,
  FALSE_POSITIVE_CANDIDATES, FALSE_POSITIVES, EXPECTED_FALSE_POSITIVES_FOUND, FAMILIES, FAMILY_SIZES, HINT_MAX, ID_BLOCK,
  IMPORTED_IDS, LESSON_ID, MNEMONIC, NEGATION_RULE, NO_EAR_QUESTION,
  NOT_REPAIRED, OWNS_SECTIONS, PARADIGM_EVIDENCE, PARTICIPLE_DECISION, PATTERN_CLAIM,
  READ_NOT_IMPORTED, REFLEXIVE_MARKERS, REFLEXIVE_VERBS, REFRAME,
  REFRAME_COUNT, REPAIRS, RESPELL_ADDITIONS, ROW_COUNT_BEFORE,
  SCENE_BANNED_SUBSTRING, TERM_ROW_MAX, THEME, TRANSITIVE,
  TRANSITIVE_DECISION, TRANSITIVE_PAIRS, UNIT, WHICH_VERBS_SECTIONS, WRONG,
  isA205, isA220, isMine, reduceNegative, verbsIn,
} from './data/passe-compose-etre-corpus.ts';
import { ETRE_TERMS, TERM_ROWS, rowWidth } from './data/passe-compose-etre-terms.ts';
import { MEASURED, TRANSITIVE_MEASURED, displayRespell, stored } from './data/passe-compose-etre-imported.ts';
import {
  AUDIBLE_SECTION_ID, BOOKEND_SECTION_ID, BORROWED_SECTION_ID,
  CONTRAST_SECTION_ID, DICTATION_SECTION_ID, ETRE_ACTS, ETRE_DICTEE_IDS,
  ETRE_DRILLS, ETRE_ERROR_TRIGGERS, ETRE_ITEM_IDS, ETRE_LESSON,
  ETRE_SCENE_BEATS, ETRE_SHEETS, ETRE_SPEAK_IDS, FOURFORMS_SECTION_ID,
  OBJECT_SECTION_ID, OWNS_SECTION_IDS, PATTERN_SECTION_ID,
  PRODUCTION_SECTIONS, QUIZ_SECTION_ID, RECAP_SECTION_ID, SCENE_SECTION_ID,
  TRANSITIVE_SECTIONS, WHICH_VERBS_SECTION_IDS, WRONG_FORM_SECTIONS,
} from './data/passe-compose-etre-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const die = (m: string): never => { console.error(`\n  REFUSED: ${m}\n`); process.exit(1); };

const LESSON: Lesson = ETRE_LESSON;
const UNIT_ID = UNIT.id;

/* ─── String walks ─────────────────────────────────────────────────────────*/

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

/** Prose only. A word-level guard must not read notation. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** Machine keys. Section ids, refs and accept-lists are not learner surfaces. */
const MACHINE_KEYS = new Set([
  'id', 'ref', 'sheetId', 'itemId', 'itemIds', 'targets', 'detectOn', 'drill',
  'retest', 'accept', 'recordingId', 'audioRef', 'unitId', 'scenarioId',
  'clipIds', 'buckets',
]);

/** AN ID IS NOT PROSE, WHATEVER KEY IT ARRIVES UNDER. a2.04 §3. */
const isId = (s: string): boolean => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d+$/i.test(s);

/** Keeps `sub` and drops only machine keys. a2.15 §3: on a cardDeck card `sub`
 *  holds PROSE, and `prose()` drops it as notation. */
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
 *  `\b` is ASCII-only in JavaScript. Invariants §0.
 *
 *  THE LEFT BOUNDARY DROPS THE APOSTROPHE. a2.17 §3: the house boundary cannot
 *  see `j'ai`, `n'est` or `qu'il`, and this lesson's negatives elide. */
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

/** A UNIT ID IS ALMOST ALWAYS WRITTEN POSSESSIVELY, AND `hasPhrase` CANNOT SEE
 *  ONE THAT IS. a2.19 §1. THE ID PASSED IN IS ALWAYS A LITERAL: a2.18 §6 and
 *  a2.20 §5.4 both found that `namesUnit(text, UNIT_CONST)` renames both sides
 *  when the constant moves, so the guard stays green while the credit vanishes
 *  from every screen. */
const namesUnit = (hay: string, id: string): boolean => {
  const word = (c: string) => /[\p{L}\p{N}-]/u.test(c);
  const h = hay.toLowerCase();
  const n = id.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!word(i === 0 ? '' : h[i - 1]!) && !word(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
};

const countPhrase = (hay: string, needle: string): number => {
  let n = 0; let i = 0;
  const h = hay.toLowerCase(); const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};

/** No grammar jargon on a learner surface. Invariants §8.
 *
 *  THE LINE IS MEASURED the way a2.17 §5 asks rather than guessed. `verb`,
 *  `past`, `form`, `ending` and `subject` are HOUSE VOCABULARY and this lesson
 *  could not say what it is about without them. `participle`, `auxiliary` and
 *  `agreement` are not, and the plain phrases used instead are « the second
 *  word », « the first word » and « the ending ». Every entry is checked in its
 *  -s plural because `hasPhrase` is boundary-exact and a2.15 shipped "Three
 *  paradigms, eighteen cells" past all three of its layers. */
const JARGON = [
  'participle', 'auxiliary', 'agreement', 'agrees with', 'periphrastic',
  'intransitive', 'transitive', 'suppletive', 'compound tense',
  'present perfect', 'preterite', 'infinitive', 'infinitival', 'inflection',
  'inflected', 'paradigm', 'morpheme', 'morphology', 'lexeme', 'lexicalised',
  'phoneme', 'phonological', 'orthography', 'orthographic', 'nasal vowel',
  'complement', 'constituent', 'predicate', 'copula', 'invariable', 'clitic',
  'direct object', 'exponent', 'termination', 'conjugation class',
  'first person', 'second person', 'third person', 'gender and number',
];

const AUTHORED_ITEMS: Item[] = ETRE_ROWS.map((r) => {
  const { role, verb, cell, why, ...rest } = r as Record<string, unknown> & {
    role: string; verb?: string; cell?: number; why: string;
  };
  void role; void verb; void cell; void why;
  return { ...rest, kind: 'sentence', level: 'a2', theme: THEME, version: 1 } as unknown as Item;
});

const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection!);

console.log(`\n  a2.21 "${UNIT.sub}"${DRY_RUN ? '  (dry run)' : ''}\n`);

/* ══════════════════════════════════════════════════════════════════════════
 *  1. THE SPLIT, INHERITED RATHER THAN REOPENED
 * ═══════════════════════════════════════════════════════════════════════ */

if (PARTICIPLE_DECISION.isCorpusItem) die('PARTICIPLE_DECISION says a past form IS a corpus item and a2.05 settled that it is not.');
if (PARTICIPLE_DECISION.authoredHere !== 0) die('PARTICIPLE_DECISION.authoredHere is not zero.');
if (MEASURED.agreedCellsAsHeadwords !== 0) die(`the manifest measured ${MEASURED.agreedCellsAsHeadwords} agreed cells existing as headwords. The split rests on zero.`);
if (MEASURED.a220BlockRows !== 43) die(`a2.20's block holds ${MEASURED.a220BlockRows} rows and that lesson applied 43.`);
if (MEASURED.a205BlockRows !== 36) die(`a2.05's block holds ${MEASURED.a205BlockRows} rows and that lesson applied 36.`);

/* A ROW WITH NO WHITESPACE IN ITS `fr` IS A BARE WORD WHATEVER ITS `kind` SAYS.
   a2.05 §4, found by its mutation 8: the corpus helper writes kind:'sentence'
   unconditionally, so `kind` cannot see it. */
for (const r of ETRE_ROWS) {
  if (!/\s/.test(r.fr)) die(`${r.id} authors « ${r.fr} », which has no whitespace in it. That is a BARE WORD whatever its kind says, and a past form is never a corpus item.`);
  if (!isMine(r.id)) die(`${r.id} is outside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to}.`);
  if (isA220(r.id)) die(`${r.id} is inside a2.20's block ${A220_BLOCK.from}..${A220_BLOCK.to}.`);
  if (isA205(r.id)) die(`${r.id} is inside a2.05's block ${A205_BLOCK.from}..${A205_BLOCK.to}.`);
  if (!r.respell) die(`${r.id} has no respelling and every row this build authors is displayed.`);
  if (!r.ipa) die(`${r.id} has no ipa.`);
}
if (ETRE_ROWS.length !== EXPECTED_AUTHORED) die(`${ETRE_ROWS.length} rows authored and EXPECTED_AUTHORED is ${EXPECTED_AUTHORED}.`);
if (new Set(AUTHORED_IDS).size !== AUTHORED_IDS.length) die('two authored rows share an id.');
if (new Set(ETRE_ROWS.map((r) => r.fr)).size !== ETRE_ROWS.length) die('two authored rows share an `fr`.');
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} rows imported and EXPECTED_IMPORTED is ${EXPECTED_IMPORTED}.`);
console.log(`  the split     0 bare past forms authored, ${MEASURED.agreedCellsAsHeadwords} of ${PARTICIPLE_DECISION.cellsChecked} agreed cells exist as headwords. Settled by a2.05, agreed by a2.20, inherited here.`);

/* ══════════════════════════════════════════════════════════════════════════
 *  2. THE FIFTEEN, AND THE FOUR FAMILIES
 * ═══════════════════════════════════════════════════════════════════════ */

if (ETRE_VERBS.length !== EXPECTED_VERBS) die(`ETRE_VERBS holds ${ETRE_VERBS.length} and EXPECTED_VERBS is ${EXPECTED_VERBS}.`);
if (new Set(ETRE_VERBS.map((v) => v.verb)).size !== ETRE_VERBS.length) die('two entries in ETRE_VERBS share a verb.');
for (const v of ETRE_VERBS) {
  if (v.cells.length !== 4) die(`${v.verb} declares ${v.cells.length} cells and every verb has four.`);
  if (new Set(v.cells).size !== 4) die(`${v.verb}'s four cells are not four distinct strings.`);
  if (v.cells[0] !== v.past) die(`${v.verb}'s first cell is ${v.cells[0]} and its past form is ${v.past}.`);
}
for (const f of FAMILIES) {
  const n = verbsIn(f.key).length;
  if (n !== FAMILY_SIZES[f.key]) die(`the ${f.key} family holds ${n} verbs and FAMILY_SIZES says ${FAMILY_SIZES[f.key]}.`);
}
const movers = ETRE_VERBS.filter((v) => v.family !== 'still').length;
if (movers !== 12) die(`${movers} of the fifteen are in a movement family and the lesson claims twelve.`);

/* THE tapTable NAMES EVERY ONE OF THE FIFTEEN. A family whose members are not
   visible together is a list with a heading on it. */
const patternText = strings(byId(PATTERN_SECTION_ID)).join('\n');
const unnamed = ETRE_VERBS.filter((v) => !hasPhrase(patternText, v.verb)).map((v) => v.verb);
if (unnamed.length) die(`the pattern table does not name ${unnamed.length} of the fifteen: ${unnamed.join(', ')}.`);
/* AND EVERY PAST FORM IS THERE TOO, so the table is a lesson rather than a list
   of infinitives. */
const formless = ETRE_VERBS.filter((v) => !hasPhrase(patternText, v.past)).map((v) => v.verb);
if (formless.length) die(`the pattern table names ${formless.join(', ')} without their past forms.`);
console.log(`  the fifteen   ${ETRE_VERBS.length} verbs in ${FAMILIES.length} families (${FAMILIES.map((f) => `${f.key} ${FAMILY_SIZES[f.key]}`).join(', ')}), ${movers} of them moving`);

/* ══════════════════════════════════════════════════════════════════════════
 *  3. THE FOUR FORMS, ON ONE SCREEN, ASSERTED FORM BY FORM
 *
 *  THE BRIEF ASKS FOR EXACTLY THIS AND SAYS THE TEST MUST ASSERT IT. All four
 *  cells of one verb, in one section, with the statement that they sound
 *  identical.
 * ═══════════════════════════════════════════════════════════════════════ */

const four = byId(FOURFORMS_SECTION_ID);
if (!four) die(`the lesson has no ${FOURFORMS_SECTION_ID}.`);
const fourText = strings(four).join('\n');
const aller = ETRE_VERBS.find((v) => v.verb === 'aller')!;
/* THE CARDS, NOT THE SECTION TEXT. FOUND BY MUTATIONS 1, 7 AND 8, WHICH ARE ONE
   HOLE WITH THREE FACES: this guard read every string in the section, so a
   `check.why` saying « allés and allées are one sound » satisfied the assertion
   that « allées » is ON A CARD. Dropping the form from the card, and taking the
   card out of the group entirely, both walked through it. a2.20 §5.3 in a new
   place: check the thing the learner is SHOWN, not everything the section says
   about it. */
const fourCards = ((four as unknown as { groups?: { items?: { fr?: string }[] }[] }).groups ?? [])
  .flatMap((g) => (g.items ?? []).map((i) => i.fr ?? ''));
if (!fourCards.length) die(`${FOURFORMS_SECTION_ID} draws no cards at all.`);
for (const cell of aller.cells) {
  if (!fourCards.some((f) => hasPhrase(f, cell))) {
    die(`no CARD on ${FOURFORMS_SECTION_ID} shows « ${cell} ». All four cells belong on one screen, and a why that mentions a form is not a card that shows it.`);
  }
}
/* AND THE CLAIM THAT THEY ARE ONE SOUND IS TAUGHT, not merely present as an
   option a learner can pick. « Nothing at all » is one of the wrong answers on
   this very screen and it satisfied the first version of this guard on its own. */
const fourTaught = [
  (four as unknown as { say?: string }).say ?? '',
  ...((four as unknown as { groups?: { check?: { why?: string } }[] }).groups ?? []).map((g) => g.check?.why ?? ''),
].join('\n');
if (!/one sound|identical|completely identical/i.test(fourTaught)) {
  die(`${FOURFORMS_SECTION_ID} shows the four spellings and never TEACHES that they are one sound. The layout without the claim is a table.`);
}
void fourText;
/* AND ALL FOUR RESPELLINGS END THE SAME WAY, which is the evidence for it. */
const tails = CELL_IDS.map((id) => {
  const r = ETRE_ROWS.find((x) => x.id === id)!;
  return r.respell.split(' ').pop()!;
});
if (new Set(tails).size !== 1) {
  die(`the four cells respell their second word as ${tails.join(', ')}. The screen claims they are one sound and the respellings must say so too.`);
}
console.log(`  four forms    ${aller.cells.join(' · ')} on ${FOURFORMS_SECTION_ID}, all four respelled « ${tails[0]} »`);

/* ══════════════════════════════════════════════════════════════════════════
 *  4. THE BOOKEND. a2.01's REFRAME, VERBATIM.
 *
 *  Doctrine §B.7 and the brief both ask for this and the brief says a paraphrase
 *  must go red. The string is a LITERAL on both sides.
 * ═══════════════════════════════════════════════════════════════════════ */

const LITERAL_A201 = 'Four of the six forms sound the same, so the pronoun carries the person.';
if (A201_REFRAME !== LITERAL_A201) {
  die(`A201_REFRAME is « ${A201_REFRAME} » and a2.01 shipped « ${LITERAL_A201} ». Read the shipped lesson; do not reconstruct it.`);
}
const bookend = byId(BOOKEND_SECTION_ID);
if (!bookend) die(`the lesson has no ${BOOKEND_SECTION_ID}.`);
const bookendText = strings(bookend).join('\n');
if (!bookendText.includes(LITERAL_A201)) {
  die(`${BOOKEND_SECTION_ID} does not carry a2.01's reframe verbatim. The brief asks for the literal and says a paraphrase must go red:\n  « ${LITERAL_A201} »`);
}
if (!namesUnit(bookendText, 'a2.01')) die(`${BOOKEND_SECTION_ID} quotes a2.01's reframe and does not name a2.01.`);
/* AND THE DISTANCE IS STATED, because the bookend is about the distance. */
if (!/seventeen/i.test(bookendText)) die(`${BOOKEND_SECTION_ID} does not say how far apart the two lessons are, which is the whole of what makes it a bookend.`);
console.log(`  the bookend   a2.01's reframe verbatim on ${BOOKEND_SECTION_ID}, seventeen lessons on`);

/* ══════════════════════════════════════════════════════════════════════════
 *  5. a2.03's RULE, BORROWED AND CREDITED. AND a2.05's NEGATION, THROUGH a2.19.
 * ═══════════════════════════════════════════════════════════════════════ */

const LITERAL_A203 = 'The plain form tells you the other three.';
const LITERAL_A205 = 'One verb, two words, and the small ones go in between.';
const LITERAL_A219 = 'Wrap the verb that changed, not the one carrying the meaning.';
if (A203_REFRAME !== LITERAL_A203) die(`A203_REFRAME is « ${A203_REFRAME} » and a2.03 shipped « ${LITERAL_A203} ».`);
if (A205_REFRAME !== LITERAL_A205) die(`A205_REFRAME is « ${A205_REFRAME} » and a2.05 shipped « ${LITERAL_A205} ».`);
if (NEGATION_RULE !== LITERAL_A219) die(`NEGATION_RULE is « ${NEGATION_RULE} » and a2.19 shipped « ${LITERAL_A219} », which a2.05 quotes verbatim. Three lessons, one string.`);

/* AND THE TWO THIS BUILD FIRST GOT WRONG. A215_REFRAME was INVENTED rather than
   read off the shipped lesson, and neither the batch nor the merge could see it
   because both compared the constant to itself. Its own test caught it against
   seed.json. Every quoted line now has a literal on this side too. */
const LITERAL_A215 = 'Cover the front of the verb. Build what is left.';
const LITERAL_A220 = 'Do not build these. Reach for the group it is in.';
if (A215_REFRAME !== LITERAL_A215) die(`A215_REFRAME is « ${A215_REFRAME} » and a2.15 shipped « ${LITERAL_A215} ». Read the shipped lesson; do not reconstruct it.`);
if (A220_REFRAME !== LITERAL_A220) die(`A220_REFRAME is « ${A220_REFRAME} » and a2.20 shipped « ${LITERAL_A220} ».`);

const borrowedText = strings(byId(BORROWED_SECTION_ID)).join('\n');
const learnerAll = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...strings(LESSON.overview ?? {}), ...strings(LESSON.acts ?? []),
  ...strings(LESSON.drills ?? []),
].join('\n');
if (!learnerAll.includes(LITERAL_A203)) die(`a2.03's reframe « ${LITERAL_A203} » appears nowhere. The endings are borrowed and the credit is a literal.`);
if (!namesUnit(borrowedText, 'a2.03') && !namesUnit(learnerAll, 'a2.03')) die('a2.03 is never named and this lesson borrows its rule.');
if (!learnerAll.includes(LITERAL_A219)) die(`a2.19's negation rule « ${LITERAL_A219} » appears nowhere, and a2.05 carried it forward for exactly this.`);
if (!learnerAll.includes(LITERAL_A205)) die(`a2.05's reframe « ${LITERAL_A205} » appears nowhere and this lesson stands on it.`);
if (!namesUnit(strings(byId(RECAP_SECTION_ID)).join('\n'), 'a2.05')) die(`${RECAP_SECTION_ID} recaps a2.05 and does not name it.`);
console.log('  the quotes    a2.01, a2.03, a2.05 and a2.19 all quoted verbatim, each credited by unit id');

/* ══════════════════════════════════════════════════════════════════════════
 *  6. THE CONTRAST WITH avoir: ONE AGREEING AND ONE NOT, IN ONE SECTION
 * ═══════════════════════════════════════════════════════════════════════ */

const contrastText = strings(byId(CONTRAST_SECTION_ID)).join('\n');
for (const [av, et] of CONTRAST_PAIRS) {
  const a = ETRE_ROWS.find((r) => r.id === av)!;
  const e = ETRE_ROWS.find((r) => r.id === et)!;
  if (a.fr === e.fr) die(`the contrast pair ${av}/${et} is one sentence twice. A pair of one thing is not a pair.`);
  if (!contrastText.includes(a.fr)) die(`${CONTRAST_SECTION_ID} does not carry « ${a.fr} », the avoir half of a pair.`);
  if (!contrastText.includes(e.fr)) die(`${CONTRAST_SECTION_ID} does not carry « ${e.fr} », the être half of a pair.`);
  /* AND THE TWO DIFFER BY ONE WORD. That is what makes it a contrast rather than
     two sentences about restaurants. */
  const aw = a.fr.split(/\s+/); const ew = e.fr.split(/\s+/);
  const diff = aw.filter((w, i) => w !== ew[i]).length;
  if (diff > 2) die(`the contrast pair ${av}/${et} differs in ${diff} words. « ${a.fr} » against « ${e.fr} » compares two subjects rather than one rule.`);
}
console.log(`  the contrast  ${CONTRAST_PAIRS.length} pairs on ${CONTRAST_SECTION_ID}, each one word apart, one agreeing and one not`);

/* ══════════════════════════════════════════════════════════════════════════
 *  7. NO ENDING AFTER avoir, ANYWHERE THIS LESSON DOES NOT TEACH THE ERROR
 *
 *  THE ERROR a2.05 LEARNERS WILL IMPORT, and the one this lesson creates by
 *  succeeding. The pattern needs a French subject or article in front of the
 *  auxiliary so it cannot fire on English (a2.17 §4: a shape built out of French
 *  morphology reads the English as French).
 * ═══════════════════════════════════════════════════════════════════════ */

const AGREED_AFTER_AVOIR = new RegExp(
  '(?<![\\p{L}\\p{N}-])'
  + "(j'|n'|qu'il |qu'elle |il |elle |on |ils |elles |nous |vous |tu |je )"
  + '(ai|as|a|avons|avez|ont) +'
  // a2.05 taught that a short adverb and `pas` sit in the gap, so the pattern
  // has to reach past one of them or « elle n'a pas mangée » walks through it.
  + '(pas +|bien +|mal +|déjà +|encore +|toujours +|jamais +|beaucoup +|trop +|tout +)?'
  + '[\\p{L}]+(ée|ées|és)(?![\\p{L}\\p{N}\'’-])',
  'iu',
);
const AVOIR_MUST_FIRE = [
  'Elle a mangée au marché.',
  "J'ai mangée.",
  'Ils ont allés au marché.',
  "Elle n'a pas mangée.",
];
const AVOIR_MUST_NOT_FIRE = [
  'Elle a mangé au marché.',
  'Elle est allée au marché.',
  'You have already learned the ending, and it goes on after être.',
  'Elles sont allées au bureau.',
  "Elle n'est pas allée au bureau.",
];
for (const s of AVOIR_MUST_FIRE) if (!AGREED_AFTER_AVOIR.test(s)) die(`the avoir-agreement guard does not fire on « ${s} », which is the error it exists for.`);
for (const s of AVOIR_MUST_NOT_FIRE) if (AGREED_AFTER_AVOIR.test(s)) die(`the avoir-agreement guard fires on « ${s} », which is correct.`);

for (const sec of LESSON.sections) {
  const id = (sec as { id: string }).id;
  if ((WRONG_FORM_SECTIONS as readonly string[]).includes(id)) continue;
  for (const s of strings(sec)) {
    if (AGREED_AFTER_AVOIR.test(s)) die(`${id} carries an ending after avoir: « ${s} ». That is the error the lesson teaches against and it may only appear where the error is the content.`);
  }
}
for (const s of [...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}), LESSON.intro ?? '', ...strings(LESSON.acts ?? []), ...strings(LESSON.drills ?? [])]) {
  if (AGREED_AFTER_AVOIR.test(s)) die(`an ending appears after avoir outside the sections: « ${s} ».`);
}
console.log(`  after avoir   ${AVOIR_MUST_FIRE.length} must-fire and ${AVOIR_MUST_NOT_FIRE.length} must-not-fire; nothing agrees after avoir outside ${WRONG_FORM_SECTIONS.length} sections`);

/* ══════════════════════════════════════════════════════════════════════════
 *  8. THE TRANSITIVE DECISION, ENFORCED RATHER THAN STATED
 *
 *  Corpus file §6: three of the six have ZERO published transitive uses, so the
 *  brief's group of six is a group of two. The decision is RECEPTIVE ONLY and
 *  this is the guard that makes it true.
 * ═══════════════════════════════════════════════════════════════════════ */

if (TRANSITIVE_DECISION.taught) die('TRANSITIVE_DECISION says the split is taught and the canDo asks for être where French REQUIRES it.');
if (!TRANSITIVE_DECISION.receptiveOnly) die('TRANSITIVE_DECISION is not receptive-only and no production surface shows one.');

/* THE MEASUREMENT IS RE-READ FROM THE MANIFEST rather than trusted from the
   corpus file, so the two cannot drift. */
for (const t of TRANSITIVE) {
  const m = TRANSITIVE_MEASURED[t.verb];
  if (!m) die(`${t.verb} is in TRANSITIVE and the manifest did not measure it.`);
  if (m.avoir !== t.avoir || m.etre !== t.etre) {
    die(`${t.verb}: the corpus file says avoir=${t.avoir} être=${t.etre} and the manifest measured avoir=${m.avoir} être=${m.etre}. Re-run scripts/_a221_manifest.ts.`);
  }
}
const measuredZero = TRANSITIVE.filter((t) => t.avoir === 0).map((t) => t.verb);
if (measuredZero.length !== TRANSITIVE_DECISION.zeroEvidence.length) {
  die(`${measuredZero.length} of the six have zero published transitive uses and TRANSITIVE_DECISION names ${TRANSITIVE_DECISION.zeroEvidence.length}.`);
}
for (const v of TRANSITIVE_DECISION.zeroEvidence) {
  if (!measuredZero.includes(v)) die(`TRANSITIVE_DECISION names ${v} as having zero transitive evidence and it has ${TRANSITIVE.find((t) => t.verb === v)?.avoir}.`);
}

/* THE TWO VERBS SHOWN ARE THE TWO WITH THE EVIDENCE, and both pairs are on the
   receptive screen. */
const objectText = strings(byId(OBJECT_SECTION_ID)).join('\n');
for (const v of TRANSITIVE_DECISION.verbsShown) {
  if (!hasPhrase(objectText, v)) die(`${OBJECT_SECTION_ID} shows the split and does not name ${v}.`);
}
for (const [et, av] of TRANSITIVE_PAIRS) {
  const e = ETRE_ROWS.find((r) => r.id === et)!;
  const a = ETRE_ROWS.find((r) => r.id === av)!;
  if (e.fr === a.fr) die(`the transitive pair ${et}/${av} is one sentence twice.`);
  if (!objectText.includes(e.fr) || !objectText.includes(a.fr)) {
    die(`the transitive pair ${et}/${av} is not both on ${OBJECT_SECTION_ID}. The split only teaches as a pair.`);
  }
  /* AND NEITHER MAY CARRY A DICTATION DRILL, because a dictée line is a
     production surface and the decision is receptive-only. */
  for (const r of [e, a]) {
    if (r.drills.includes('dictation')) die(`${r.id} is a transitive row and carries a dictation drill. The split is shown, never produced.`);
  }
}

/* AND NO PRODUCTION SURFACE ASKS FOR ONE.
   THE AVOIR HALF ONLY. The être half of each pair is the INTRANSITIVE use, which
   is precisely what the canDo asks the learner to produce; refusing both halves
   would forbid « elle est passée devant la gare » on the grounds that « elle a
   passé un examen » exists. */
const TRANSITIVE_FRS = TRANSITIVE_PAIRS.map(([, av]) => ETRE_ROWS.find((r) => r.id === av)!.fr);
for (const id of PRODUCTION_SECTIONS) {
  const text = strings(byId(id)).join('\n');
  for (const f of TRANSITIVE_FRS) {
    if (text.includes(f)) die(`${id} is a production surface and it carries « ${f} », which is a transitive use. The decision is receptive-only.`);
  }
}
for (const dictId of ETRE_DICTEE_IDS) {
  const r = ETRE_ROWS.find((x) => x.id === dictId)!;
  if (r.role === 'transitive') die(`${dictId} is a transitive row and it is in the dictée.`);
}

/* a2.11's descendre LOOP, CLOSED FORWARD. That lesson names neither auxiliary,
   so there is nothing to back-reference; what is assertable is that this lesson
   owns it, names a2.11 by unit id, and says which first word it takes. */
if (!hasPhrase(objectText, 'descendre')) die(`${OBJECT_SECTION_ID} does not name descendre, and a2.11 handed it forward.`);
if (!namesUnit(objectText, 'a2.11')) die(`${OBJECT_SECTION_ID} owns descendre's split and does not name a2.11.`);
console.log(`  transitive    ${TRANSITIVE_DECISION.zeroEvidence.length} of six have zero evidence, ${TRANSITIVE_DECISION.verbsShown.length} shown receptively, 0 on any production surface; a2.11's descendre named`);

/* ══════════════════════════════════════════════════════════════════════════
 *  9. NO REFLEXIVE, ANYWHERE. a2.22 AND a2.23 OWN THEM.
 * ═══════════════════════════════════════════════════════════════════════ */

const REFLEX_MUST_FIRE = [
  'Je me suis levé tôt.',
  "Elle s'est habillée.",
  'Nous nous sommes couchés tard.',
];
const REFLEX_MUST_NOT_FIRE = [
  'Je suis allé au bureau.',
  'Elle est restée à la maison.',
  'Nous sommes partis tôt.',
  'Vous êtes arrivés ensemble ?',
];
const hasReflexive = (s: string): boolean =>
  REFLEXIVE_VERBS.some((v) => hasPhrase(s, v))
  || REFLEXIVE_MARKERS.some((m) => s.toLowerCase().includes(m.toLowerCase()));
for (const s of REFLEX_MUST_FIRE) if (!hasReflexive(s)) die(`the reflexive guard does not fire on « ${s} ».`);
for (const s of REFLEX_MUST_NOT_FIRE) if (hasReflexive(s)) die(`the reflexive guard fires on « ${s} », which is this lesson's own French.`);

for (const s of [...display(LESSON.sections), ...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}), LESSON.intro ?? '', ...display(LESSON.drills ?? [])]) {
  if (hasReflexive(s)) die(`a reflexive verb reaches a learner surface: « ${s} ». a2.22 and a2.23 own those and a2.23 declares this lesson as a prerequisite.`);
}
for (const r of ETRE_ROWS) if (hasReflexive(r.fr)) die(`${r.id} authors a reflexive: « ${r.fr} ».`);
console.log(`  reflexives    ${REFLEXIVE_VERBS.length} verbs and ${REFLEXIVE_MARKERS.length} markers refused, ${REFLEX_MUST_FIRE.length} must-fire and ${REFLEX_MUST_NOT_FIRE.length} must-not-fire`);

/* ══════════════════════════════════════════════════════════════════════════
 * 10. WHAT NO EAR QUESTION MAY DO
 *
 *  Corrections §5. A `listenChoose` offering two members of one homophone group
 *  has no correct answer and marking one right certifies a bug. Fourteen of the
 *  fifteen verbs have all four cells in one group; mourir does not, and it is
 *  the one ear question the lesson asks.
 * ═══════════════════════════════════════════════════════════════════════ */

const oneSoundVerbs = ETRE_VERBS.filter((v) => !v.audibleF).length;
const audibleVerbs = ETRE_VERBS.filter((v) => v.audibleF).length;
if (oneSoundVerbs !== EXPECTED_ONE_SOUND_VERBS) die(`${oneSoundVerbs} verbs have four cells in one sound and EXPECTED_ONE_SOUND_VERBS is ${EXPECTED_ONE_SOUND_VERBS}.`);
if (audibleVerbs !== EXPECTED_AUDIBLE_F) die(`${audibleVerbs} verbs have an audible feminine and EXPECTED_AUDIBLE_F is ${EXPECTED_AUDIBLE_F}.`);
if (!ETRE_VERBS.find((v) => v.verb === AUDIBLE.verb)?.audibleF) die(`${AUDIBLE.verb} is named as the audible one and its entry does not say so.`);

for (const q of qs) {
  if (q.format !== 'listenChoose') continue;
  const opts = q.opts ?? [];
  for (let i = 0; i < opts.length; i += 1) {
    for (let j = i + 1; j < opts.length; j += 1) {
      for (const [x, y] of NO_EAR_QUESTION) {
        if (x !== y && opts[i]!.replace(x, y) === opts[j]) {
          die(`an ear question offers « ${opts[i]} » against « ${opts[j]} », which differ only by ${x}/${y}. Those are one sound and the question has no correct answer.`);
        }
      }
    }
  }
  /* AND IT MUST CARRY `say`, or ListenChooseCard speaks the answer. */
  if (!(q as { say?: string }).say) die(`a listenChoose question has no \`say\`, so the card falls back to speaking the correct option aloud.`);
}
/* THE ONE EAR QUESTION IS mourir's PAIR AND NOTHING ELSE. */
const ear = qs.filter((q) => q.format === 'listenChoose');
if (ear.length !== 1) die(`the exam holds ${ear.length} ear questions. Exactly one is legal in this lesson and it is ${AUDIBLE.masculine}/${AUDIBLE.feminine}.`);
const earOpts = (ear[0]!.opts ?? []).join('|');
if (!earOpts.includes(AUDIBLE.masculine) || !earOpts.includes(AUDIBLE.feminine)) {
  die(`the one ear question does not offer ${AUDIBLE.masculine} against ${AUDIBLE.feminine}, which is the only pair in this lesson the ear can settle.`);
}
console.log(`  the ear       ${NO_EAR_QUESTION.length} forbidden pairs walked, ${ear.length} ear question and it is ${AUDIBLE.masculine}/${AUDIBLE.feminine}`);

/* AND THE AUDIBLE PAIR IS REAL, checked through the real fold and normalizeFr:
   these two must DIFFER to a typed surface, and so must all four cells. */
for (const v of ETRE_VERBS) {
  const seen = new Set<string>();
  for (const cell of v.cells) {
    if (seen.has(fold(cell))) die(`${v.verb}'s cells fold together: « ${v.cells.join(', ')} ». A typed surface could not tell them apart and the whole Owns is typed.`);
    seen.add(fold(cell));
  }
}
const audibleSection = strings(byId(AUDIBLE_SECTION_ID)).join('\n');
if (!hasPhrase(audibleSection, AUDIBLE.masculine) || !hasPhrase(audibleSection, AUDIBLE.feminine)) {
  die(`${AUDIBLE_SECTION_ID} teaches the one audible feminine and does not name both halves of it.`);
}
if (!hasPhrase(audibleSection, 'morts') || !hasPhrase(audibleSection, 'mortes')) {
  die(`${AUDIBLE_SECTION_ID} claims that number is still inaudible and does not show the two plurals.`);
}
/* AND THE RESPELLINGS SAY IT: mort ends on R and morte on T. */
const mSg = ETRE_ROWS.find((r) => r.verb === 'mourir' && r.cell === 0)!;
const fSg = ETRE_ROWS.find((r) => r.verb === 'mourir' && r.cell === 1)!;
if (!mSg.respell.includes(AUDIBLE.respellM) || !fSg.respell.includes(AUDIBLE.respellF)) {
  die(`the audible pair is respelled ${mSg.respell} / ${fSg.respell} and the claim is ${AUDIBLE.respellM} against ${AUDIBLE.respellF}.`);
}
/* AND THE PUBLISHED ROW IT WAS READ OFF STILL HOLDS THE T. a2.14 §5. */
if (!stored(AUDIBLE.storedM.id).includes(AUDIBLE.respellM)) {
  die(`${AUDIBLE.storedM.id} held « ${stored(AUDIBLE.storedM.id)} » and the masculine was read off it as ${AUDIBLE.respellM}.`);
}

/* ══════════════════════════════════════════════════════════════════════════
 * 11. THE DICTÉE, THROUGH THE REAL dicteeMode
 * ═══════════════════════════════════════════════════════════════════════ */

if (!ETRE_DICTEE_IDS.length) die('the dictée names no rows.');
for (const id of ETRE_DICTEE_IDS) {
  const r = ETRE_ROWS.find((x) => x.id === id);
  if (!r) die(`${id} is a dictée target and is not an authored row.`);
  const mode = dicteeMode(r!.fr);
  if (mode !== 'letters') {
    die(`${id} « ${r!.fr} » is in ${mode} mode. Word mode hands every real word over pre-spelled, and this lesson is about a written ending.`);
  }
  if (!r!.drills.includes('dictation')) die(`${id} is a dictée target and carries no dictation drill.`);
}
/* AND THE FRAMES THAT DO NOT FIT ARE RECORDED AND STILL DO NOT FIT, so a later
   author does not try them again. */
for (const t of DICTEE_TOO_LONG) {
  if (dicteeMode(t.fr) === 'letters') {
    die(`DICTEE_TOO_LONG says « ${t.fr} » does not fit and dicteeMode now puts it in LETTERS. Something changed; re-measure before trusting the list.`);
  }
}
/* THE FOUR CELLS ARE ALL IN IT, which is the point of the section. */
for (const id of CELL_IDS) {
  if (!ETRE_DICTEE_IDS.includes(id)) die(`${id} is one of the four cells and it is not in the dictée. Agreement is inaudible, so the dictée is the only surface that can ask for it.`);
}
console.log(`  the dictée    ${ETRE_DICTEE_IDS.length} lines, all LETTERS through the real dicteeMode, all four cells in it (limit ${DICTEE_MAX_LETTERS})`);

/* ══════════════════════════════════════════════════════════════════════════
 * 12. THE NEGATIVE: a2.19's RULE, AND THE ELISION THAT IS NOT a2.05's
 * ═══════════════════════════════════════════════════════════════════════ */

const negatives = ETRE_ROWS.filter((r) => r.role === 'negative');
if (!negatives.length) die('the lesson authors no negative and a2.05 handed the rule forward.');
for (const n of negatives) {
  const reduced = reduceNegative(n.fr);
  if (/\bne\b|n['’]|\bpas\b/i.test(reduced)) die(`reduceNegative left « ${reduced} » on ${n.id}.`);
  if (reduced === n.fr) die(`reduceNegative changed nothing on ${n.id} « ${n.fr} », which is supposed to be a negative.`);
  /* AND THE SECOND WORD SURVIVES THE REDUCTION UNCHANGED, which is the claim:
     the ending sits outside both halves of the negative. */
  const last = reduced.replace(/[.?!]$/, '').split(/\s+/).slice(-1)[0]!;
  if (!n.fr.includes(last)) die(`${n.id} loses « ${last} » when the negative is stripped.`);
}
/* THE ELISION IS THREE OF SIX AND a2.05's WAS SIX OF SIX. Asserted by name,
   because a later author will assume it matches. */
for (const person of ELIDES) {
  const aux = person.split(' ')[1]!;
  if (!/^[aeiouéèêà]/i.test(aux)) die(`ELIDES names « ${person} » and ${aux} does not begin with a vowel.`);
}
const nonElided = ETRE_ROWS.filter((r) => r.role === 'negative' && /\bne\s/i.test(r.fr));
const elided = ETRE_ROWS.filter((r) => r.role === 'negative' && /n['’]/i.test(r.fr));
if (!nonElided.length) die('every authored negative elides, and three of the six persons do not.');
if (!elided.length) die('no authored negative elides, and three of the six persons do.');
console.log(`  the negative  ${negatives.length} rows, ${elided.length} elided and ${nonElided.length} not; a2.19's rule quoted through a2.05`);

/* ══════════════════════════════════════════════════════════════════════════
 * 13. THE RESPELLINGS: TWO REPAIRS, BOTH VISIBLE, AND ONE BLIND NASAL
 *
 *  §8 of the corpus file: the brief and corrections §11 both call four of these
 *  invisible and ALL FIVE ARE FLAGGED. a2.17 §14.1 asks for one table with three
 *  assertions through the real function.
 * ═══════════════════════════════════════════════════════════════════════ */

for (const rp of REPAIRS) {
  if (!hasPlainNasalFor(rp.fr, rp.from)) {
    die(`${rp.id} « ${rp.from} » is NOT flagged by hasPlainNasalFor and this build files it as a visible repair. Read the value before overwriting it.`);
  }
  if (hasPlainNasalFor(rp.fr, rp.half)) die(`${rp.id}'s minimal repair « ${rp.half} » is still flagged.`);
  if (hasPlainNasalFor(rp.fr, rp.to)) die(`${rp.id}'s repaired value « ${rp.to} » is still flagged.`);
  if ((rp.half !== rp.to) !== (rp.blind || rp.house)) {
    die(`${rp.id}: half !== to is ${rp.half !== rp.to} and (blind || house) is ${rp.blind || rp.house}. a2.17 §14.1 keeps those two reasons separate and mutually exclusive.`);
  }
  if (rp.blind) die(`${rp.id} is filed as blind and the corpus file measured all five candidates as VISIBLE.`);
  if (displayRespell(rp.id) !== rp.to) die(`the display layer prints « ${displayRespell(rp.id)} » for ${rp.id} and the repaired value is « ${rp.to} ».`);
  if (stored(rp.id) !== rp.from && stored(rp.id) !== rp.to) {
    die(`${rp.id} holds « ${stored(rp.id)} » in the manifest and this build repairs « ${rp.from} ».`);
  }
}
if (RESPELL_ADDITIONS.length !== 0) die(`RESPELL_ADDITIONS holds ${RESPELL_ADDITIONS.length} entries and this build supplies none.`);

/* THE ONE BLIND NASAL IN AN AUTHORED STRING, ASSERTED BY NAME AND IN BOTH
   DIRECTIONS: the stored value is clean, and breaking the superscript produces a
   value the checker STILL calls clean. The day it improves, the second assertion
   goes red instead of the list going quietly dead. */
for (const b of BLIND_NASALS) {
  const row = ETRE_ROWS.find((r) => r.id === b.id);
  if (!row) die(`${b.id} is in BLIND_NASALS and is not an authored row.`);
  if (row!.fr !== b.fr) die(`${b.id} is « ${row!.fr} » and BLIND_NASALS claims « ${b.fr} ».`);
  if (row!.respell !== b.good) die(`${b.id} is respelled « ${row!.respell} » and BLIND_NASALS claims « ${b.good} ».`);
  if (hasPlainNasalFor(b.fr, b.good)) die(`${b.id}'s stored value « ${b.good} » is flagged and this is a BLIND entry.`);
  if (hasPlainNasalFor(b.fr, b.broken)) {
    die(`hasPlainNasalFor now SEES « ${b.broken} » on ${b.id}. The checker has improved and this by-name list can be retired.`);
  }
}
if (BLIND_NASALS.length !== EXPECTED_NASALS_MISSED) die(`BLIND_NASALS holds ${BLIND_NASALS.length} and EXPECTED_NASALS_MISSED is ${EXPECTED_NASALS_MISSED}.`);

/* EVERY OTHER AUTHORED RESPELLING IS SEEN, so the by-name list is not carrying
   rows that ought to be caught by the function. */
let seen = 0;
for (const r of ETRE_ROWS) {
  if (BLIND_NASALS.some((b) => b.id === r.id)) continue;
  if (hasPlainNasalFor(r.fr, r.respell)) die(`${r.id} « ${r.respell} » is flagged by hasPlainNasalFor.`);
  if (/[ⁿ]/.test(r.respell)) seen += 1;
}

/* THE FALSE-POSITIVE DIRECTION. Invariants §3 records jaune, automne and la
   saison. FOUR CANDIDATES WERE TRIED AND NONE OF THEM MET IT; corrections §6
   asks for the absence to be reported rather than left as a silence. */
const falsePositives = FALSE_POSITIVE_CANDIDATES.filter((w) => {
  const row = ETRE_ROWS.find((r) => r.fr.toLowerCase().includes(w.toLowerCase()));
  return row ? hasPlainNasalFor(row.fr, row.respell) : false;
});
if (falsePositives.length !== EXPECTED_FALSE_POSITIVES) {
  die(`${falsePositives.length} false positives found (${falsePositives.join(', ')}) and EXPECTED_FALSE_POSITIVES is ${EXPECTED_FALSE_POSITIVES}.`);
}
/* AND THE ONE THIS BUILD DID MEET, asserted in BOTH directions so the day the
   checker stops false-positiving on `sommes` the assertion goes red rather than
   the entry going quietly dead. */
if (FALSE_POSITIVES.length !== EXPECTED_FALSE_POSITIVES_FOUND) {
  die(`FALSE_POSITIVES holds ${FALSE_POSITIVES.length} and EXPECTED_FALSE_POSITIVES_FOUND is ${EXPECTED_FALSE_POSITIVES_FOUND}.`);
}
for (const fp of FALSE_POSITIVES) {
  if (!hasPlainNasalFor(fp.fr, fp.flagged)) {
    die(`hasPlainNasalFor no longer flags « ${fp.flagged} » on « ${fp.fr} ». The false positive this build worked around has been fixed and the entry can be retired.`);
  }
  if (hasPlainNasalFor(fp.fr, fp.fixed)) die(`the repaired value « ${fp.fixed} » is still flagged.`);
  if (/ⁿ/.test(fp.fixed)) die(`« ${fp.word} » has no nasal vowel and the repair « ${fp.fixed} » carries a superscript, which teaches a sound the word does not have.`);
  const rows = ETRE_ROWS.filter((r) => r.fr.toLowerCase().includes(fp.word.toLowerCase()));
  if (!rows.length) die(`FALSE_POSITIVES names « ${fp.word} » and no authored row contains it.`);
  for (const r of rows) {
    if (hasPlainNasalFor(r.fr, r.respell)) die(`${r.id} carries « ${fp.word} » and is still flagged: « ${r.respell} ».`);
    /* FOUND BY MUTATION 30. Every other respelling guard in this file is phrased
       as "must not be FLAGGED", and a superscript on a word with no nasal vowel
       produces a value the checker calls CLEAN, because its complaint about that
       word was a false positive in the first place. It walks through all of
       them, and only the lesson's own test caught it. */
    if (/ⁿ/.test(r.respell.split(' ')[1] ?? '')) {
      die(`${r.id} respells « ${fp.word} » as « ${r.respell.split(' ')[1]} », with a superscript on a word that has no nasal vowel in it at all.`);
    }
  }
}
console.log(`  respellings   ${REPAIRS.length} repairs, both VISIBLE against a brief that calls two of them blind; ${seen} rows carrying ⁿ and ${BLIND_NASALS.length} blind by name; ${falsePositives.length} false positives; ${NOT_REPAIRED.length} broken copies left alone`);

/* ══════════════════════════════════════════════════════════════════════════
 * 14. NO WRONG FORM OUTSIDE THE SECTIONS THAT TEACH THE ERROR
 * ═══════════════════════════════════════════════════════════════════════ */

for (const sec of LESSON.sections) {
  const id = (sec as { id: string }).id;
  if ((WRONG_FORM_SECTIONS as readonly string[]).includes(id)) continue;
  const text = strings(sec).join('\n');
  for (const b of BUILT_FORMS) {
    if (hasPhrase(text, b)) die(`${id} carries « ${b} », which is not French, and it is not a section where the error is the content.`);
  }
  for (const w of WRONG) {
    if (text.includes(w.wrong)) die(`${id} carries « ${w.wrong} », which is one of the five errors.`);
  }
}
for (const s of [...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}), LESSON.intro ?? '', ...strings(LESSON.overview ?? {}), ...strings(LESSON.acts ?? [])]) {
  for (const w of WRONG) if (s.includes(w.wrong)) die(`« ${w.wrong} » appears outside the sections, in « ${s} ».`);
}
/* AND EVERY ONE OF THE FIVE ERRORS IS DIFFERENT FROM ITS OWN RIGHT ANSWER.
   a2.20 §5.2: a pair guard satisfied by `wrong === right` is not a pair. */
for (const w of WRONG) {
  if (w.wrong === w.right) die(`the error « ${w.wrong} » is identical to its own correction. A pair of one thing is not a pair.`);
  if (fold(w.wrong) === fold(w.right)) die(`the error « ${w.wrong} » folds to the same string as its correction, so no typed surface could tell them apart.`);
}
/* AND NO AUTHORED ROW IS ONE. */
for (const r of ETRE_ROWS) {
  for (const w of WRONG) if (r.fr === w.wrong) die(`${r.id} authors « ${r.fr} », which is one of the five errors.`);
  if (AGREED_AFTER_AVOIR.test(r.fr) && r.role !== 'scene') die(`${r.id} authors an ending after avoir: « ${r.fr} ».`);
}

/* ══════════════════════════════════════════════════════════════════════════
 * 15. THE SCENE
 *
 *  a2.05 §11.2: a bubble whose `fr` ends in a SPACED EXCLAMATION MARK loses its
 *  tail on a Pixel 6 while the gloss under it still translates it.
 *
 *  AND THE GUARD CHECKS THE FRENCH THE SCENE SPEAKS, not every string in it.
 *  a2.20 §5.3: a scene guard walking every string passes on a repaired scene,
 *  because the English gloss still names the error.
 * ═══════════════════════════════════════════════════════════════════════ */

const bubbles = ETRE_SCENE_BEATS.filter((b) => b.kind === 'bubble') as { fr?: string; en?: string }[];
if (bubbles.length < 4) die(`the scene has ${bubbles.length} bubbles and it is a conversation.`);
for (const b of ETRE_SCENE_BEATS) {
  for (const [k, v] of Object.entries(b)) {
    if (k === 'fr' && typeof v === 'string' && v.includes(SCENE_BANNED_SUBSTRING)) {
      die(`a scene beat's fr is « ${v} » and a spaced exclamation mark makes the bubble lose its last word on a Pixel 6 (a2.05 §11.2).`);
    }
  }
}
/* THE STALL IS ON THE FIRST WORD, which is what makes this an A2 scene: in
   speech the ending costs nothing and the auxiliary costs everything. */
const spokenFrench = ETRE_SCENE_BEATS.flatMap((b) => {
  const out: string[] = [];
  const add = (v: unknown) => { if (typeof v === 'string') out.push(v); };
  add((b as { fr?: string }).fr);
  for (const o of ((b as { options?: { fr?: string }[] }).options ?? [])) add(o.fr);
  const br = b as { wrong?: { fr?: string }; right?: { fr?: string } };
  add(br.wrong?.fr); add(br.right?.fr);
  return out;
}).join('\n');
if (!spokenFrench.includes(SCENE_ERROR_LITERAL())) {
  die(`the scene never SPEAKS the wrong sentence. A scene whose failure is only described in English is a scene that did not happen.`);
}
function SCENE_ERROR_LITERAL(): string { return 'J’ai sorti avec des amis.'; }
if (!/j['’]ai/i.test(strings(ETRE_SCENE_BEATS).join('\n'))) die('the scene never shows the auxiliary the learner reaches for.');
console.log(`  the scene     ${bubbles.length} bubbles, 0 spaced exclamation marks, and the wrong sentence is SPOKEN rather than described`);

/* ══════════════════════════════════════════════════════════════════════════
 * 16. THE MNEMONIC, AND THE PATTERN BESIDE IT
 * ═══════════════════════════════════════════════════════════════════════ */

if (!learnerAll.includes(MNEMONIC)) die(`${MNEMONIC} appears nowhere. The brief asks for it as a memory aid and for the pattern beside it.`);
/* THE PATTERN IS TAUGHT, NOT ONLY THE MNEMONIC, AND THE GUARD IS A RATIO RATHER
   THAN A CEILING. a2.17 §5: guarding the RATIO is what lets a legitimate word
   appear as often as the content needs while still failing the build the moment
   it starts doing the teaching. Mutation 5 removes the pattern and leaves the
   crutch, and this is what catches it. */
const patternWords = ['movement', 'move', 'moves', 'moving'];
const crutchCount = countPhrase(learnerAll, MNEMONIC);
const patternCount = patternWords.reduce((n, w) => n + (hasPhrase(learnerAll, w) ? countPhrase(learnerAll, w) : 0), 0);
if (patternCount === 0) {
  die('the mnemonic is present and the real pattern is not. A learner with only the crutch cannot decide about a verb outside it.');
}
/* AND THE STATEMENT ITSELF, AS A LITERAL. FOUND BY MUTATION 5: the ratio above
   counts the word « movement », which is also a TERM CHIP LABEL, so replacing
   the whole pattern with the crutch left the count non-zero and every layer
   green. The claim has to be on a screen, not a word that happens to be. */
const LITERAL_PATTERN = 'Twelve of the fifteen move, and the other three change what is true rather than where you are.';
if (PATTERN_CLAIM !== LITERAL_PATTERN) die(`PATTERN_CLAIM is « ${PATTERN_CLAIM} » and the pattern this lesson teaches is « ${LITERAL_PATTERN} ».`);
if (!learnerAll.includes(LITERAL_PATTERN)) die('the pattern statement appears on no screen, and a crutch is not a pattern.');
if (crutchCount >= patternCount) {
  die(`${MNEMONIC} appears ${crutchCount} times against ${patternCount} for the pattern. It is a memory aid and the pattern is the teaching; the moment the crutch outnumbers it, the lesson is teaching a list of initials.`);
}
if (!hasPhrase(learnerAll, 'passer')) die('the lesson never names passer, which is the verb the mnemonic misses.');
if (!hasPhrase(learnerAll, 'rester')) die('the lesson never names rester, which is the verb the pattern misses.');

/* ══════════════════════════════════════════════════════════════════════════
 * 17. ACT WEIGHTS: THE OWNS AGAINST THE LIST
 * ═══════════════════════════════════════════════════════════════════════ */

if (OWNS_SECTION_IDS.length !== OWNS_SECTIONS) die(`OWNS_SECTION_IDS holds ${OWNS_SECTION_IDS.length} and OWNS_SECTIONS is ${OWNS_SECTIONS}.`);
if (WHICH_VERBS_SECTION_IDS.length !== WHICH_VERBS_SECTIONS) die(`WHICH_VERBS_SECTION_IDS holds ${WHICH_VERBS_SECTION_IDS.length} and WHICH_VERBS_SECTIONS is ${WHICH_VERBS_SECTIONS}.`);
if (OWNS_SECTIONS <= WHICH_VERBS_SECTIONS) die(`the Owns has ${OWNS_SECTIONS} sections and the list has ${WHICH_VERBS_SECTIONS}. Doctrine §B.5: if the paradigm gets more missions than the Owns, the wrong lesson got built.`);
for (const id of [...OWNS_SECTION_IDS, ...WHICH_VERBS_SECTION_IDS]) if (!byId(id)) die(`${id} is declared and the lesson has no such section.`);
const ownsAct = ETRE_ACTS.find((a) => a.id === 'act3')!;
if (ownsAct.sections.length !== OWNS_SECTIONS) die(`act3 holds ${ownsAct.sections.length} sections and the Owns is ${OWNS_SECTIONS}.`);
console.log(`  act weights   the Owns ${OWNS_SECTIONS} sections against the list's ${WHICH_VERBS_SECTIONS}`);

/* ══════════════════════════════════════════════════════════════════════════
 * 18. THE SHAPE: SECTIONS, ACTS, TRANCHES, QUESTIONS
 * ═══════════════════════════════════════════════════════════════════════ */

if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections and EXPECTED_SECTIONS is ${EXPECTED_SECTIONS}.`);
if (ETRE_ACTS.length !== EXPECTED_ACTS) die(`${ETRE_ACTS.length} acts and EXPECTED_ACTS is ${EXPECTED_ACTS}.`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} questions and EXPECTED_QUESTIONS is ${EXPECTED_QUESTIONS}.`);
/* THE VERSION STARTS AT 1 AND ONLY MOVES FORWARD. Corrections §1 measured that
   every remaining unit has `lessonIds: []`, so this build is greenfield and its
   counter starts at 1; ledger §10 says a correction after an apply moves the
   counter rather than reusing the number, so it may be above 1 on a re-apply.
   What it may never be is zero, negative or unset. */
if (LESSON.version < 1) die(`the lesson is v${LESSON.version} and a version counter starts at 1.`);
if (LESSON.version > 1) {
  console.log(`  version       v${LESSON.version}: a correction after an earlier apply. Ledger §10 moves the counter rather than reusing the number.`);
}

const sectionIds = LESSON.sections.map((s) => (s as { id: string }).id);
if (new Set(sectionIds).size !== sectionIds.length) die('two sections share an id.');
const claimed = ETRE_ACTS.flatMap((a) => a.sections);
if (new Set(claimed).size !== claimed.length) die('two acts claim one section.');
for (const id of sectionIds) if (!claimed.includes(id)) die(`${id} is in no act.`);
for (const id of claimed) if (!sectionIds.includes(id)) die(`act names ${id} and the lesson has no such section.`);
if (LESSON.deckTranche?.length !== EXPECTED_ACTS) die(`${LESSON.deckTranche?.length} tranches and there are ${EXPECTED_ACTS} acts.`);

/* EVERY ITEM RELEASED EXACTLY ONCE AND NOTHING UNTAUGHT. */
const released = (LESSON.deckTranche ?? []).flat();
if (new Set(released).size !== released.length) die('a tranche releases an item twice.');
for (const id of released) if (!ETRE_ITEM_IDS.includes(id)) die(`a tranche releases ${id}, which is not in itemIds.`);
const unreleased = ETRE_ITEM_IDS.filter((id) => !released.includes(id));
if (unreleased.length) die(`${unreleased.length} items are never released: ${unreleased.slice(0, 6).join(', ')}`);

/* ONE QUIZ. A second is silently never rendered. */
const quizzes = LESSON.sections.filter((s) => s.type === 'quiz');
if (quizzes.length !== 1) die(`${quizzes.length} quiz sections. lessonPager appends exactly one and the rest are dead content.`);

/* EVERY QUESTION HAS A `why` AND A `ref` THAT RESOLVES. */
for (const q of qs) {
  if (!q.why) die(`a quiz question has no why: « ${q.q} »`);
  const ref = (q as { ref?: string }).ref;
  if (!ref) die(`a quiz question has no ref: « ${q.q} »`);
  if (!sectionIds.includes(ref!)) die(`a quiz question refs ${ref}, which is not a section in this lesson.`);
}
/* AT MOST HALF mcq. */
const mcq = qs.filter((q) => q.format === 'mcq').length;
if (mcq * 2 > qs.length) die(`${mcq} of ${qs.length} questions are mcq and at most half may be.`);
/* AND EVERY FREE-TEXT QUESTION ACCEPTS THE ANSWER IT DISPLAYS, through the real
   matchesAccept. */
for (const q of qs) {
  if (!['typeIn', 'errorSpot'].includes(q.format ?? '')) continue;
  const answer = (q as { answer?: string }).answer;
  if (!answer) die(`a ${q.format} question has no answer: « ${q.q} »`);
  // matchesAccept(input, accept), NOT (question, answer). The signature reads
  // the other way round from every other guard helper in this band.
  if (!matchesAccept(answer!, (q as { accept?: string[] }).accept)) {
    die(`a ${q.format} question does not accept its own answer « ${answer} »: « ${q.q} »`);
  }
}
/* CORRECT ANSWERS MUST NOT CLUSTER: no option slot above 40% of the closed
   questions. */
const closed = qs.filter((q) => typeof (q as { correct?: number }).correct === 'number');
const slots: Record<number, number> = {};
for (const q of closed) { const i = (q as { correct: number }).correct; slots[i] = (slots[i] ?? 0) + 1; }
for (const [slot, n] of Object.entries(slots)) {
  if (n / closed.length > 0.4) die(`option slot ${slot} holds ${n} of ${closed.length} closed answers, which is over the 40% the density validator allows.`);
}

/* EACH ROUND LEADS ON A DIFFERENT TRIGGER, so all six drills are reachable.
   drillForRound fires the FIRST resolving target and then stops. */
const rounds = (quizSection as { rounds?: { id: string; targets?: string[] }[] }).rounds ?? [];
const leads = rounds.map((r) => r.targets?.[0] ?? '');
if (new Set(leads).size !== leads.length) die(`two rounds lead on the same trigger: ${leads.join(', ')}. drillForRound stops at the first resolving target, so the second one's drill is dead content.`);
for (const t of ETRE_ERROR_TRIGGERS) {
  if (!leads.includes(t.id)) die(`${t.id} leads no round, so its drill never fires.`);
  if (!ETRE_DRILLS.find((d) => d.id === t.drill)) die(`${t.id} names drill ${t.drill}, which does not exist.`);
  if (!ETRE_DRILLS.find((d) => d.id === t.retest)) die(`${t.id} names retest ${t.retest}, which does not exist.`);
  for (const d of t.detectOn) {
    const base = d.split('/')[0]!;
    if (!sectionIds.includes(base)) die(`${t.id} detects on ${d} and there is no section ${base}.`);
  }
}
console.log(`  the shape     ${LESSON.sections.length} sections, ${ETRE_ACTS.length} acts, ${qs.length} questions (${mcq} mcq), ${ETRE_ERROR_TRIGGERS.length} triggers each leading one round`);

/* ══════════════════════════════════════════════════════════════════════════
 * 19. HOUSE COPY, JARGON, AND THE TWO THINGS A PIXEL 6 FOUND
 * ═══════════════════════════════════════════════════════════════════════ */

/* THE WALK READS `intro`, `overview`, `acts`, `drills` AND `audio`.
   Corrections §9: the jargon walk did not read intro and a2.11 shipped "third
   person" on two screens. a2.05 §3: it did not read audio either and a2.05
   shipped a banned word in a studio brief. */
const houseSurfaces = [
  ...display(LESSON.sections), ...display(LESSON.sheets ?? []), ...display(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...display(LESSON.overview ?? {}), ...display(LESSON.acts ?? []),
  ...display(LESSON.drills ?? []), ...display(LESSON.audio ?? {}),
];
const proseSurfaces = [
  ...prose(LESSON.sections), ...prose(LESSON.sheets ?? []), ...prose(LESSON.terms ?? {}),
  LESSON.intro ?? '', ...prose(LESSON.overview ?? {}), ...prose(LESSON.acts ?? []),
  ...prose(LESSON.drills ?? []),
];
for (const s of houseSurfaces) {
  if (s.includes('—') || s.includes('–')) die(`an em dash reaches a learner surface: « ${s} »`);
  if (/\bhonest(y|ly)?\b/i.test(s)) die(`a banned word reaches a learner surface: « ${s} »`);
  if (s.includes('‿')) die(`U+203F reaches a learner surface and it draws as an underscore on a Pixel 6: « ${s} »`);
  /* EXACTLY TWO CONSECUTIVE DOTS. a2.20 §3, found on a phone: a question quoting
     a corpus row keeps the row's own full stop. Three dots is an ellipsis and is
     left alone. */
  if (/(?<!\.)\.\.(?!\.)/.test(s)) die(`a doubled full stop reaches a learner surface: « ${s} ». Strip the quoted row's own stop with noStop().`);
}
/* JARGON IS CHECKED ON PROSE ONLY, and `overview.titleEn` is exempt because
   `content_units` requires it to match the unit's English title. a2.17 §5. */
const titleEn = (LESSON.overview as { titleEn?: string } | undefined)?.titleEn ?? '';
if (titleEn !== UNIT.title) die(`overview.titleEn is « ${titleEn} » and the unit's title is « ${UNIT.title} ».`);
for (const s of proseSurfaces) {
  if (s === titleEn) continue;
  for (const j of JARGON) {
    if (hasPhrase(s, j) || hasPhrase(s, `${j}s`)) die(`grammar jargon « ${j} » reaches a learner surface: « ${s} »`);
  }
}
/* AND THE RATIO: the plain phrase must outnumber the technical one. a2.17 §5. */
const plain = countPhrase(learnerAll, 'describing word');
const technical = countPhrase(learnerAll, 'adjective');
if (technical > plain) die(`« adjective » appears ${technical} times against « describing word » ${plain}. The house prefers the plain phrase and this lesson guards the ratio.`);

/* A cardDeck HINT IS ONE LINE AND ELLIPSISES AT ABOUT SIXTY CHARACTERS.
   Found on a Pixel 6 by a2.20: 64 shown of 71. */
for (const sec of LESSON.sections) {
  const hint = (sec as { hint?: string }).hint;
  if (hint && hint.length > HINT_MAX) {
    die(`${(sec as { id: string }).id}'s hint is ${hint.length} characters and the budget is ${HINT_MAX}: « ${hint} »`);
  }
}
/* THREE TERM CHIPS, AND THE ROW IS THIRTY-SEVEN WIDE. a2.03 §3. */
for (const sec of LESSON.sections) {
  const terms = (sec as { terms?: string[] }).terms ?? [];
  if (terms.length > 3) die(`${(sec as { id: string }).id} declares ${terms.length} term chips and the renderer shows three.`);
  for (const t of terms) if (!ETRE_TERMS[t]) die(`${(sec as { id: string }).id} names term ${t}, which does not exist.`);
  if (terms.length && rowWidth(terms) > TERM_ROW_MAX) {
    die(`${(sec as { id: string }).id}'s chip row is ${rowWidth(terms)} characters and the budget is ${TERM_ROW_MAX}.`);
  }
}
for (const row of TERM_ROWS) {
  if (rowWidth(row) > TERM_ROW_MAX) die(`the declared chip row ${row.join('+')} is ${rowWidth(row)} characters and the budget is ${TERM_ROW_MAX}.`);
  for (const t of row) if (!ETRE_TERMS[t]) die(`TERM_ROWS names ${t}, which does not exist.`);
}
console.log(`  house copy    0 em dashes, 0 doubled stops, 0 jargon on prose; "describing word" ${plain} against "adjective" ${technical}; hints under ${HINT_MAX}`);

/* ══════════════════════════════════════════════════════════════════════════
 * 20. THE REFRAME, COUNTED AGAINST AN EXPLICIT CONSTANT
 * ═══════════════════════════════════════════════════════════════════════ */

if (LESSON.reframe !== REFRAME) die(`the lesson's reframe is « ${LESSON.reframe} » and REFRAME is « ${REFRAME} ».`);
const reframeCount = countPhrase(learnerAll, REFRAME);
if (reframeCount !== REFRAME_COUNT) {
  die(`the reframe is authored ${reframeCount} times and REFRAME_COUNT is ${REFRAME_COUNT}. Invariants §5: the constant is explicit, never derived, because a derived count compares the content to itself.`);
}
/* AND THE RULE IT STANDS ON IS AUTHORED TOO. */
/* THE LITERAL, NOT THE CONSTANT. FOUND BY MUTATION 44: this read AGREEMENT_RULE
   and compared it against content built from the same constant, so rewording it
   satisfied both sides and only the test noticed. The string is a CROSS-LESSON
   CONTRACT — a2.23 is told to inherit it — so it belongs on the same footing as
   a2.01's reframe, which has been a literal here since the first draft. */
const LITERAL_AGREEMENT = 'Add nothing for a man on his own, e for a woman, s for more than one, and es for more than one woman.';
if (AGREEMENT_RULE !== LITERAL_AGREEMENT) die(`AGREEMENT_RULE is « ${AGREEMENT_RULE} » and a2.23 is told to inherit « ${LITERAL_AGREEMENT} ». Reword it in all three layers or not at all.`);
if (!learnerAll.includes(LITERAL_AGREEMENT)) die('the rule a2.23 is told to inherit appears nowhere.');

/* THE EXAM HAS A FLOOR OF TYPED QUESTIONS, NOT ONLY A CEILING ON mcq. FOUND BY
   MUTATION 40: swapping one typeIn for an mcq left 16 of 36 mcq, which is inside
   the half this file already checks, and nothing else looked. The canDo says
   PRODUCE, and picking one of four is a different job. */
const typedCount = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? '')).length;
if (typedCount < 18) die(`${typedCount} of ${qs.length} questions are typed and the canDo says produce. At least half of this exam is written.`);

/* EVERY ROLE-PLAY TURN HAS TWO ALTERNATIVES AND A userEn. FOUND BY MUTATION 46:
   neither this file nor the merge looked, and the only thing that did was the
   seed-wide scenario.logic.test.ts, which a2.03 shipped past with every gate
   green because it runs after the merge rather than before it. */
{
  const talk = LESSON.sections.find((x) => x.type === 'scenario') as unknown as {
    id: string; turns?: { alts?: unknown[]; userEn?: string }[];
  } | undefined;
  if (!talk?.turns?.length) die('the lesson has no role play, and `features` declares one.');
  for (const turn of talk!.turns!) {
    if ((turn.alts ?? []).length < 2) die(`a turn in ${talk!.id} has ${(turn.alts ?? []).length} alternatives and scenario.logic.test.ts requires two.`);
    if (!turn.userEn) die(`a turn in ${talk!.id} has no userEn.`);
  }
}
console.log(`  the reframe   authored ${reframeCount} times against a constant of ${REFRAME_COUNT}`);

/* ══════════════════════════════════════════════════════════════════════════
 * 21. THE trapDrill SHAPE, WHICH lesson-contract.test.ts ENFORCES SEED-WIDE
 * ═══════════════════════════════════════════════════════════════════════ */

const traps = LESSON.sections.filter((s) => s.type === 'trapDrill') as unknown as {
  id: string; swipe?: boolean; size?: string; steps?: { kind: string; label?: string; gate?: boolean }[];
  cards?: { fr?: string }[]; drill?: unknown[]; audio?: { recordingId?: string }; say?: string;
}[];
if (traps.length !== 2) die(`the lesson has ${traps.length} trapDrills and it declares two.`);
for (const t of traps) {
  if (!t.swipe) die(`${t.id} is a trapDrill without swipe.`);
  if (t.size) die(`${t.id} carries a size, and \`size\` comes OFF a stepped trapDrill (the ledger's trapDrill sweep).`);
  if (!t.say) die(`${t.id} has no say.`);
  const kinds = (t.steps ?? []).map((s) => s.kind);
  if (kinds.join('>') !== 'rule>cards>audio>drill') {
    die(`${t.id} walks ${kinds.join('>')} and every A2 trapDrill walks rule>cards>audio>drill.`);
  }
  if (!(t.steps ?? []).find((s) => s.kind === 'drill')?.gate) die(`${t.id}'s drill step is not gated.`);
  if (!t.audio?.recordingId) die(`${t.id} has no audio recordingId.`);
  /* THE CARDS-STEP LABEL MUST NOT MISCOUNT ITS OWN ARRAY. a2.18 §3. */
  const label = (t.steps ?? []).find((s) => s.kind === 'cards')?.label ?? '';
  const n = t.cards?.length ?? 0;
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
  if (!label.toLowerCase().includes(words[n] ?? '@@') && !label.includes(String(n))) {
    die(`${t.id}'s cards step is labelled « ${label} » and it holds ${n} cards.`);
  }
  /* AND THE AUDIO STEP PLAYS EACH CARD'S `fr`, so the recording must contain
     those lines. The brief for the take is checked against them. */
  const rec = (LESSON.audio?.recorded ?? []).find((r) => r.id === t.audio!.recordingId);
  if (!rec) die(`${t.id} names recording ${String(t.audio!.recordingId)} and no brief declares it.`);
  for (const c of t.cards ?? []) {
    if (!c.fr) die(`${t.id} has a card with no fr, and the audio step plays each card's fr.`);
    if (!/[a-zà-ÿ]/i.test(c.fr!)) die(`${t.id} has a card whose fr is not text.`);
    if (!(rec!.clipIds ?? []).includes(c.fr!) && !(rec!.desc ?? '').includes(c.fr!)) {
      die(`${t.id}'s card « ${c.fr} » is not in recording ${rec!.id}, and the audio step plays it.`);
    }
  }
}
console.log(`  the traps     ${traps.length}, both stepped rule>cards>audio>drill with a gated drill and a recording that holds their lines`);

/* ══════════════════════════════════════════════════════════════════════════
 * 22. THE SCHEMA, THE DENSITY VALIDATOR, AND a1.03's ENDING POPULATION
 * ═══════════════════════════════════════════════════════════════════════ */

for (const it of AUTHORED_ITEMS) {
  const issues = validateItem(it);
  if (issues.length) die(`${it.id} fails validateItem:\n${formatIssues(issues)}`);
  if ((it as { gender?: string }).gender) die(`${it.id} carries a gender.`);
}
const lessonIssues = validateLesson(LESSON);
if (lessonIssues.length) die(`the lesson fails validateLesson:\n${formatIssues(lessonIssues)}`);
const density = validateDensity(LESSON);
if (density.length) die(`the lesson fails validateDensity:\n${formatDensity(density)}`);

/* GENDERED SINGLE-WORD ROWS ARE RADIOACTIVE. Checked through the REAL
   endingPopulation rather than a copy of it: invariants §5, and a1.08 shipped a
   hand-rolled version carrying a filter the real one does not have. */
const pop = endingPopulation(AUTHORED_ITEMS as never);
if (pop.length) die(`${pop.length} authored rows join a1.03's ending population: ${pop.slice(0, 4).map((p) => (p as { id: string }).id).join(', ')}.`);

/* AND THE SPOKEN LIST DRAWS ONLY FROM ROWS THAT CAN BE SPOKEN. */
for (const id of ETRE_SPEAK_IDS) {
  const r = ETRE_ROWS.find((x) => x.id === id)!;
  if (!r.drills.includes('voiceflash')) die(`${id} is in the spoken list and carries no voiceflash drill.`);
}
/* EVERY ITEM IS ON A SCREEN, not merely resolvable. Invariants §1. */
const screenText = [...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {})].join('\n');
const offScreen = ETRE_ROWS.filter((r) => !screenText.includes(r.fr) && !released.includes(r.id));
if (offScreen.length) die(`${offScreen.length} authored rows are on no screen and in no tranche: ${offScreen.map((r) => r.id).join(', ')}.`);
console.log(`  the gates     validateItem, validateLesson, validateDensity and endingPopulation all clean over ${AUTHORED_ITEMS.length} rows`);

/* ══════════════════════════════════════════════════════════════════════════
 * 23. NORMALIZEFR: WHAT THE DICTÉE AND THE SPEECH RECOGNISER COMPARE
 * ═══════════════════════════════════════════════════════════════════════ */

/* THE WHOLE OWNS IS TESTABLE and this is where that is proved. a2.09 lost its
   best question to `fold`; this lesson gets one back, and the assertion is
   through the real functions rather than by inspection. */
for (const v of ETRE_VERBS) {
  const [m, f, mp, fp] = v.cells;
  for (const [a, b] of [[m, f], [m, mp], [m, fp], [f, mp], [f, fp], [mp, fp]] as [string, string][]) {
    if (normalizeFr(a) === normalizeFr(b)) {
      die(`normalizeFr collapses ${v.verb}'s « ${a} » and « ${b} ». The dictée compares through it and could not score the ending.`);
    }
  }
}
console.log(`  normalizeFr   all four cells of all ${ETRE_VERBS.length} verbs stay distinct through fold and normalizeFr`);

/* ══════════════════════════════════════════════════════════════════════════
 *  APPLY
 * ═══════════════════════════════════════════════════════════════════════ */

async function main() {
  const c = await pool.connect();

  const beforeRows = await c.query<{ n: string }>(
    "select count(*) n from content_items where id like 'fr.a2.verbes.%'");
  const before = Number(beforeRows.rows[0]!.n);
  if (before !== ROW_COUNT_BEFORE && before !== ROW_COUNT_BEFORE + AUTHORED_ITEMS.length) {
    c.release(); await pool.end();
    die(`fr.a2.verbes holds ${before} rows and this build measured ${ROW_COUNT_BEFORE} before it, or ${ROW_COUNT_BEFORE + AUTHORED_ITEMS.length} on a re-run. Somebody else has landed rows; re-read the ledger before applying.`);
  }

  /* NOTHING FOREIGN IN THIS BLOCK, AND THE NEIGHBOURS' BLOCKS INTACT. Ledger
     §10: a row inside a block this build does not own is fatal whatever the
     total says. */
  const blockRows = await c.query<{ id: string }>(
    "select id from content_items where id like 'fr.a2.verbes.%' order by id");
  const mineSet = new Set(AUTHORED_IDS);
  const foreign = blockRows.rows.map((r) => r.id).filter((id) => isMine(id) && !mineSet.has(id));
  if (foreign.length) { c.release(); await pool.end(); die(`rows inside ${ID_BLOCK.from}..${ID_BLOCK.to} that this build does not own: ${foreign.join(', ')}`); }
  const inA220 = blockRows.rows.map((r) => r.id).filter(isA220);
  const inA205 = blockRows.rows.map((r) => r.id).filter(isA205);
  if (inA220.length !== 43) { c.release(); await pool.end(); die(`a2.20's block holds ${inA220.length} rows and that lesson applied 43.`); }
  if (inA205.length !== 36) { c.release(); await pool.end(); die(`a2.05's block holds ${inA205.length} rows and that lesson applied 36.`); }

  const unitRow = await c.query<{ body: { id: string; seq: number; title: string; sub: string; canDo: string; lessonIds?: string[] } }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID]);
  const unit = unitRow.rows[0]?.body;
  if (!unit) { c.release(); await pool.end(); die(`${UNIT_ID} is not in content_units.`); }
  for (const k of ['seq', 'title', 'sub', 'canDo'] as const) {
    if (String(unit![k]) !== String(UNIT[k])) {
      c.release(); await pool.end();
      die(`the unit's ${k} is « ${String(unit![k])} » and the corpus file claims « ${String(UNIT[k])} ». Corrections §1: take the identity block from the database.`);
    }
  }
  const expectedTag = `A2 · LEÇON ${String(unit!.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) {
    c.release(); await pool.end();
    die(`the lesson's tag is « ${LESSON.tag} » and missions.ts computes « ${expectedTag} » from the live unit's seq.`);
  }
  const already = (unit!.lessonIds ?? []).includes(LESSON.id);
  console.log(`  unit          ${UNIT_ID} seq ${unit!.seq}, tag ${expectedTag}, lessonIds ${JSON.stringify(unit!.lessonIds ?? [])}${already ? '  (re-run)' : '  (first lesson)'}`);
  const nextUnit = { ...unit!, lessonIds: [...new Set([...(unit!.lessonIds ?? []), LESSON.id])] };

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
    // THE TWO REPAIRS, guarded by the stored value still being the one this
    // build read. Invariants §9.
    for (const rp of REPAIRS) {
      await c.query('update content_items set respell = $2 where id = $1 and respell in ($3, $2)', [rp.id, rp.to, rp.from]);
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
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.verbes.%'");
  const check = await c.query<{ id: string; respell: string | null }>(
    'select id, respell from content_items where id = any($1)', [REPAIRS.map((r) => r.id)]);
  const post = new Map(check.rows.map((r) => [r.id, r] as const));
  const failed: string[] = [];
  for (const rp of REPAIRS) {
    const now = String(post.get(rp.id)?.respell ?? '');
    if (now !== rp.to) failed.push(`${rp.id} respell is ${JSON.stringify(now)} and the repaired value is ${JSON.stringify(rp.to)}`);
    if (hasPlainNasalFor(rp.fr, now)) failed.push(`${rp.id} is still flagged after the repair: ${JSON.stringify(now)}`);
  }
  const nsAfter = Number(afterRows.rows[0]!.n);
  if (nsAfter !== before + AUTHORED_ITEMS.length && nsAfter !== before) {
    failed.push(`fr.a2.verbes holds ${nsAfter} rows and it held ${before} before this build's ${AUTHORED_ITEMS.length}`);
  }
  if (failed.length) { c.release(); await pool.end(); die(`the transaction committed and these did not land:\n  ${failed.join('\n  ')}`); }

  console.log(
    '\n  applied to Postgres:\n'
    + `    ${AUTHORED_ITEMS.length} rows authored into ${THEME}, ${AUTHORED_ITEMS[0]!.id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1]!.id}\n`
    + '      ZERO headwords, ZERO gendered rows and ZERO bare past forms, authored OR imported.\n'
    + `    ${REPAIRS.length} respellings repaired, 0 supplied, ${NOT_REPAIRED.length} found broken and left alone\n`
    + `    ${IMPORTED_IDS.length} rows imported by id, ${READ_NOT_IMPORTED.length} read and refused\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${ETRE_ITEM_IDS.length} items\n`
    + `    ${ETRE_VERBS.length} verbs in ${FAMILIES.length} families; the Owns ${OWNS_SECTIONS} sections against the list's ${WHICH_VERBS_SECTIONS}\n`
    + `    the transitive split: ${TRANSITIVE_DECISION.zeroEvidence.length} of six have zero evidence, shown receptively on ${TRANSITIVE_DECISION.verbsShown.join(' and ')}\n`
    + `    the paradigm: ${PARADIGM_EVIDENCE.corpusWide} published sentences, ${PARADIGM_EVIDENCE.cardsShowingAnEnding} of them cards showing an ending\n`
    + `    fr.a2.verbes row count: ${before} before, ${nsAfter} after (max ${afterRows.rows[0]!.mx})\n`
    + `    a2.20's block still holds ${inA220.length} rows and a2.05's ${inA205.length}\n\n`
    + '  NEXT: pnpm tsx scripts/merge-passe-compose-etre-into-seed.ts\n');

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
