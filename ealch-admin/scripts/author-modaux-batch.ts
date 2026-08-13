/* a2.13 "Irréguliers 3 : vouloir, pouvoir, devoir" — authored rows, repairs and
 * the lesson, applied to Postgres in one transaction.
 *
 *   pnpm content:modaux --dry-run     every guard, nothing written
 *   pnpm content:modaux               the same guards, then the transaction
 *
 * ── WHAT THIS BUILD CLAIMS, AND THEREFORE WHAT IS GUARDED ─────────────────
 *
 * 1. EVERY INFINITIVE IN THIS LESSON IS IMPORTED. Ten verbs out of ten themes,
 *    and not one authored. The Owns is that a modal lets a learner use a verb
 *    nobody taught them; a corpus that authored its own infinitives would be
 *    quietly contradicting the missions. Guarded both ways: every second verb in
 *    an authored row must resolve to an imported id, and no authored row may be
 *    a bare infinitive.
 *
 * 2. `arroser` REACHES NO CARD. It is the unseen verb. It is in no itemId, no
 *    deck tranche, no term and no deck string, and the batch asserts all four,
 *    because the absence IS the claim the lesson makes.
 *
 * 3. EVERY AUTHORED ROW PAIRS A MODAL WITH A SECOND VERB, with exactly one
 *    named exception. `Tu me dois de l'argent.` is bare on purpose and is on
 *    BARE_MODAL_EXCEPTIONS; a second bare row fails the build. The brief asks
 *    for this directly: "a bare conjugated modal in a deck teaches the wrong
 *    shape."
 *
 * 4. `savoir` AND `connaître` APPEAR NOWHERE ON A PRODUCTION SURFACE. a2.14
 *    declares this unit as its prerequisite precisely so it can bring pouvoir
 *    back as its contrast, and its entire payload is that split. The guard is
 *    scoped to production surfaces, because s24-notmine has to be able to point
 *    at a2.14 in order to hand it over.
 *
 * 5. THE CONDITIONAL IS NOT CONJUGATED. POLITE_FORMS is a closed list of two and
 *    every other form of that family is refused anywhere in the lesson,
 *    including inside a `note` or a `why`.
 *
 * 6. NO BLIND NASAL, ASSERTED RATHER THAN ASSUMED. Every superscript this build
 *    displays is run through the real `hasPlainNasalFor` in BOTH directions:
 *    clean as shipped, and FLAGGED when the superscript is removed. A mark the
 *    checker cannot see is a mark the next author can delete silently.
 *
 * 7. a1.03 DOES NOT MOVE. Every authored row is a sentence, and every imported
 *    row is ungendered, so `endingPopulation` returns zero over both halves. Run
 *    through the REAL function rather than reasoned about.
 *
 * 8. THE THREE LAYOUT CLAIMS THE BRIEF SAYS THE TEST MUST ASSERT are checked by
 *    SECTION ID and by INDEX, not by searching the lesson for strings:
 *      - the single grid holds all three verbs on every line
 *      - the register pair is four rows on ONE screen, blunt/polite/blunt/polite
 *      - the unseen mission names a verb that is in no vocabulary of the lesson
 *
 * 9. NO listenChoose ANYWHERE. veux/veut, peux/peut and dois/doit are
 *    homophones and a question asking a learner to separate them by ear would
 *    certify a bug. The brief says so and this refuses the format outright.
 *
 * ── TWO a2.02 GUARD SHAPES THAT ARE DELIBERATELY NOT COPIED ───────────────
 *
 * a2.02's batch DIES when no unit depends on it. a2.12 is a leaf and had to
 * loosen that to a report. a2.13 is NOT a leaf — a2.14 rests on it — so the
 * check is kept and is expected to find one dependent.
 *
 * a2.02's number-pair guard demands a NASAL singular against a plain plural.
 * That is false for all three verbs here and the direction is reversed: the
 * singular of these is a bare vowel and the plural adds a consonant. Copying it
 * would fail a correct build.
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
import { Pool } from 'pg';
import {
  AUTHORED_IDS, BARE_MODAL_EXCEPTIONS, BARE_MODAL_SHAPE, BLIND_NASALS,
  CITED_UNITS, DEVOIR_OWE_ID, DICTATION_IDS, DRILL_ADDITIONS, ENDINGS,
  EXPECTED_AUTHORED, EXPECTED_FRAME_ROWS, EXPECTED_IMPORTED,
  EXPECTED_SOURCE_THEMES, FORBIDDEN_CONDITIONAL_SHAPE, FRAME_ROWS, FRAME_VERB,
  IL_FAUT, LESSON_ID, MODAL_INFINITIVE_SHAPE, MODAL_ORDER, MODAUX,
  NAMING_FORMS, OWNED_ID_RANGE, PARADIGM, PARADIGM_IDS, POLITE_FORMS,
  POUVOIR_SENSES, READ_NOT_IMPORTED, RESERVED_FOR_NEIGHBOURS,
  RESPELL_ADDITIONS, RESPELL_REPAIRS_SENTENCES, RESPELL_REPAIRS_VISIBLE,
  ROW_COUNT_BEFORE, SAVOIR_SHAPE, SINGULAR_PERSONS, SINGULAR_SPELLINGS,
  SINGULAR_TRIPLES, STEMS, THEME, THE_NEW_ENDING, THE_NEW_ENDING_FORMS,
  UNIT_ID as CORPUS_UNIT_ID, UNIT_SEQ, UNSEEN_VERB, VISIBLE_NASALS, toItem,
} from './data/modaux-corpus.ts';
import {
  ALL_REPAIRS, IMPORTED_BY_ID, IMPORTED_IDS, INFINITIVES, SOURCE_THEMES,
  READ_ONLY_ROWS, UNSEEN_VERB_ROW, infinitiveId, repairedRespell,
} from './data/modaux-imported.ts';
import {
  BOUNDARY_SECTION_ID, ENDINGS_CLAIM, GRID_SECTION_ID, MODAUX_ACTS,
  MODAUX_DECK_TRANCHE, MODAUX_ITEM_IDS, MODAUX_LESSON, MODAUX_SPEAK_IDS,
  NOUS_ON, NOUS_ON_SECTION_ID, REFRAME, REGISTER_ROW_ORDER,
  REGISTER_SECTION_ID, SENSES_SECTION_ID, SHEET_ID, SINGULAR_CLAIM,
  SINGULAR_SECTION_ID, STEMS_SECTION_ID, STEM_CLAIM, UNSEEN_SECTION_ID,
} from './data/modaux-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = MODAUX_LESSON;
const UNIT_ID = 'a2.13';

/** Asserted against explicit constants, never figures derived from the lesson. A
 *  derived count compares the content to itself and passes on any rewording. */
const REFRAME_APPEARANCES = 23;
const REFRAME_SECTIONS = 14;
/** THIRTY-TWO, and it is the largest lesson in the corpus by one section.
 *  Deliberate, and sized in the lesson header: there is no ceiling in schema.ts
 *  and the 24-section shape every other A2 lesson ships was inherited from
 *  a2.01 rather than measured against a subject. */
const EXPECTED_SECTIONS = 32;
const EXPECTED_ACTS = 7;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_QUESTIONS = 45;
const EXPECTED_DRILLS = 12;
const EXPECTED_DICTATION = 14;
const EXPECTED_RESPELL_REPAIRS = 5;
const EXPECTED_RESPELL_ADDITIONS = 2;
const EXPECTED_DRILL_ADDITIONS = 2;
const EXPECTED_READ_ONLY = 6;
/** ONE sheet, and its centre is a grid on ONE frame rather than a sixth ending
 *  table. */
const EXPECTED_SHEETS = 1;
/** ZERO. a2.12's tapTable was its headline screen; this lesson has nothing that
 *  belongs in one, and corrections §8 caps it at six rows anyway. */
const EXPECTED_TAPTABLES = 0;
/** THE THREE VERBS AND THE SIX CELLS OF A PARADIGM. */
const EXPECTED_VERBS = 3;
const EXPECTED_CELLS = 6;
/** The ten verbs this lesson borrows so it can avoid teaching any of them. */
const EXPECTED_INFINITIVES = 10;
/** The Owns act must stay the heaviest. If this ever inverts, the lesson has
 *  become a table lesson and doctrine §B.5 has been lost. */
const OWNS_ACT_ID = 'act3';

/** Copied BYTE FOR BYTE from the probe's unit dump on 2026-08-12, not from the
 *  brief. Checked anyway, because it costs one query and four A2 briefs in a row
 *  got it wrong before the corrections file existed. */
const UNIT_TITLE = 'Irregular Verbs 3: Vouloir, Pouvoir, Devoir';
const UNIT_SUB = 'Irréguliers 3 : vouloir, pouvoir, devoir';
const UNIT_CANDO = 'Can say what they want, can and must do with a modal plus an infinitive';

/** Grammar vocabulary that must not reach a learner surface. Deliberately short:
 *  a checker that fires on ordinary teaching prose gets silenced wholesale.
 *
 *  `infinitive` IS here, and that is the difference from a2.12's list. This
 *  lesson's entire subject is a construction whose textbook name uses the word,
 *  the brief's own reframe candidates both use it, and the reflex to write it is
 *  therefore much stronger here than anywhere else in the band. What a learner
 *  sees instead is "the second verb", "the naming form" and "the shape a
 *  dictionary gives it".
 *
 *  `stem` is NOT here: this band uses it as ordinary English and a2.12 shipped
 *  it. `irregular` is not here either, because it is the unit's own title in the
 *  database, drawn on the trail card above this lesson. */
const JARGON = [
  'conjugation', 'conjugate', 'conjugated', 'infinitive', 'infinitives',
  'conditional', 'indicative', 'subjunctive', 'morpheme', 'inflection',
  'paradigm', 'orthography', 'phoneme', 'modal verb', 'modal verbs',
  'auxiliary', 'first person', 'second person', 'third person',
];

function die(msg: string): never {
  console.error(`\n  ${msg}\n`);
  process.exit(1);
}

/** Every string anywhere inside a value, so a guard reads what a learner could
 *  possibly see rather than the fields somebody remembered to check. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

/** The same walk with the TRANSCRIPTION fields left out.
 *
 *  A word-level guard must not read IPA. IPA separates syllables with a full
 *  stop, so `/nu vu.lɔ̃/` reads as a standalone word `lɔ̃`, and a2.01's aller
 *  check fired on `.va.` while its lesson was correct. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment']);
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}

/** Accent-aware word-boundary search. NEVER build a regex out of a search term:
 *  `\b` is ASCII-only in JavaScript and returns zero on a trailing accent, which
 *  looks exactly like an absence. a2.02 shipped that bug and a2.12 found it.
 *
 *  Note also that `'` counts as a word character here, which is why every unit
 *  citation in this lesson is followed by a comma or a full stop rather than by
 *  an apostrophe-s: `a2.14's` does not match a search for `a2.14`, and that cost
 *  a2.12 a version bump. */
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

const pgArray = (v: unknown): string[] => {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
};

const AUTHORED_ITEMS: Item[] = MODAUX.map(toItem);
const RESPELL_REPAIRS = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_SENTENCES];

console.log(`\n  a2.13 "Irréguliers 3 : vouloir, pouvoir, devoir"${DRY_RUN ? '  (dry run)' : ''}\n`);

/* ── Counts, against constants ───────────────────────────────────────────── */

if (CORPUS_UNIT_ID !== UNIT_ID) die(`the corpus says the unit is ${CORPUS_UNIT_ID} and this batch says ${UNIT_ID}`);
if (LESSON.id !== LESSON_ID) die(`the corpus says the lesson is ${LESSON_ID} and the lesson says ${LESSON.id}`);
if (MODAUX.length !== EXPECTED_AUTHORED) die(`${MODAUX.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (FRAME_ROWS.length !== EXPECTED_FRAME_ROWS) die(`${FRAME_ROWS.length} grid rows, expected ${EXPECTED_FRAME_ROWS}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (SOURCE_THEMES.length !== EXPECTED_SOURCE_THEMES) die(`imported out of ${SOURCE_THEMES.length} themes, expected ${EXPECTED_SOURCE_THEMES}`);
if (INFINITIVES.length !== EXPECTED_INFINITIVES) die(`${INFINITIVES.length} imported infinitives, expected ${EXPECTED_INFINITIVES}`);
if (READ_ONLY_ROWS.length !== EXPECTED_READ_ONLY) die(`${READ_ONLY_ROWS.length} read-only rows, expected ${EXPECTED_READ_ONLY}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`${(LESSON.errorTriggers ?? []).length} triggers, expected ${EXPECTED_TRIGGERS}`);
if ((LESSON.drills ?? []).length !== EXPECTED_DRILLS) die(`${(LESSON.drills ?? []).length} drills, expected ${EXPECTED_DRILLS}`);
if ((LESSON.sheets ?? []).length !== EXPECTED_SHEETS) die(`${(LESSON.sheets ?? []).length} sheets, expected ${EXPECTED_SHEETS}`);
if (DICTATION_IDS.length !== EXPECTED_DICTATION) die(`${DICTATION_IDS.length} dictation targets, expected ${EXPECTED_DICTATION}`);
if (RESPELL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`${RESPELL_REPAIRS.length} respell repairs, expected ${EXPECTED_RESPELL_REPAIRS}`);
if (RESPELL_ADDITIONS.length !== EXPECTED_RESPELL_ADDITIONS) die(`${RESPELL_ADDITIONS.length} respell additions, expected ${EXPECTED_RESPELL_ADDITIONS}`);
if (DRILL_ADDITIONS.length !== EXPECTED_DRILL_ADDITIONS) die(`${DRILL_ADDITIONS.length} drill additions, expected ${EXPECTED_DRILL_ADDITIONS}`);
if (MODAL_ORDER.length !== EXPECTED_VERBS) die(`${MODAL_ORDER.length} verbs, expected ${EXPECTED_VERBS}`);
if (PARADIGM.length !== EXPECTED_CELLS) die(`${PARADIGM.length} persons, expected ${EXPECTED_CELLS}`);
if (ENDINGS.length !== EXPECTED_CELLS) die(`${ENDINGS.length} endings, expected ${EXPECTED_CELLS}`);
console.log(`  counts        ${MODAUX.length} authored · ${IMPORTED_IDS.length} imported from ${SOURCE_THEMES.length} themes · ${LESSON.sections.length} sections · ${EXPECTED_ACTS} acts`);

/* ── THE STEM RULE, DERIVED RATHER THAN TRUSTED ──────────────────────────── */

for (const m of MODAL_ORDER) {
  const s = STEMS[m];
  const derived = s.singular + s.nous.slice(-1);
  if (derived !== s.ils) {
    die(`the stem recipe fails on ${m}: ${s.singular} + "${s.nous.slice(-1)}" (from ${s.nous}) = ${derived}, but the table says ${s.ils}.\n`
      + `  The whole lesson claims the plural stem is derivable. If it is not, the claim has to go before the content does.`);
  }
  // And the table's own plural must actually START with the derived stem.
  if (!PARADIGM[5].forms[m].startsWith(s.ils)) {
    die(`${PARADIGM[5].forms[m]} does not begin with the derived stem ${s.ils}`);
  }
}
console.log(`  stem recipe   ${STEM_CLAIM}`);

/* ── THE GRID, CELL BY CELL, AGAINST THE ROWS ────────────────────────────── */

for (const p of PARADIGM) {
  for (const m of MODAL_ORDER) {
    const form = p.forms[m];
    const row = FRAME_ROWS.find((r) => r.modal === m && hasPhrase(r.fr, form));
    if (!row) die(`the grid says ${m} at ${p.person} is "${form}" and no authored row carries it`);
    if (row.infinitive !== FRAME_VERB) die(`${row.id} is a grid row and its second verb is ${row.infinitive}, not ${FRAME_VERB}. The grid is ONE frame or it is not a comparison.`);
  }
}
const frameVerbs = new Set(FRAME_ROWS.map((r) => r.infinitive));
if (frameVerbs.size !== 1) die(`the grid uses ${frameVerbs.size} different second verbs: ${[...frameVerbs].join(', ')}. It must use exactly one.`);

/* ── THE SINGULAR ARITHMETIC, WHICH THIS BUILD GOT WRONG FIRST TIME ──────── */

for (const t of SINGULAR_TRIPLES) {
  if (t.forms.length !== SINGULAR_PERSONS) die(`${t.modal} has ${t.forms.length} singular cells, expected ${SINGULAR_PERSONS}`);
  const distinct = new Set(t.forms).size;
  if (distinct !== SINGULAR_SPELLINGS) {
    die(`${t.modal} has ${distinct} distinct singular spellings and the lesson says ${SINGULAR_SPELLINGS}.\n`
      + `  ${t.forms.join(' / ')}\n`
      + `  A lesson that states the wrong figure sends a learner looking for a distinction that is not there.`);
  }
  if (t.forms[0] !== t.forms[1] || t.forms[2] === t.forms[0]) {
    die(`${t.modal}: je and tu must be IDENTICAL and il must differ. Got ${t.forms.join(' / ')}`);
  }
  const rs = [0, 1, 2].map((i) => PARADIGM[i].respells[t.modal]);
  if (new Set(rs).size !== 1) die(`${t.modal} is claimed to be one sound across the singular and its respellings are ${rs.join(' / ')}`);
}
/* AND NO SURFACE MAY STATE A DIFFERENT FIGURE. The claim string is derived; a
   hand-typed "three spellings" anywhere would contradict it silently. */
const allProse = prose(LESSON).join('  ');
if (/three spellings/i.test(allProse)) {
  die(`a surface says "three spellings". ${SINGULAR_CLAIM} Two of the three cells are spelled identically.`);
}
console.log(`  singular      ${SINGULAR_CLAIM}`);

/* ── THE ONE NEW ENDING ──────────────────────────────────────────────────── */

/* THE CLAIM IS ABOUT DISTINCT ENDINGS, NOT ABOUT CELLS, AND THE FIRST VERSION OF
   THIS GUARD CONFUSED THE TWO. `je` and `tu` are two cells and they carry ONE
   ending between them, so "one letter here is new" is true while two of the six
   rows are marked unowned. A guard that demanded `owned === ENDINGS.length - 1`
   fails a correct table. What must hold is that the NEW endings, deduplicated,
   number exactly one. */
const owned = ENDINGS.filter((e) => e.owned).length;
const newEndings = [...new Set(ENDINGS.filter((e) => !e.owned).map((e) => e.ending))];
if (newEndings.length !== 1) {
  die(`${newEndings.length} distinct new endings (${newEndings.join(', ')}); the lesson claims exactly one letter is new`);
}
if (!newEndings[0].includes(THE_NEW_ENDING)) die(`the new ending is ${JSON.stringify(newEndings[0])} and the corpus names -${THE_NEW_ENDING}`);
/* And the cells that carry it must be je and tu, which is what makes the claim
   "one letter" rather than "one row". */
const newCells = ENDINGS.filter((e) => !e.owned).map((e) => e.person);
if (newCells.join('|') !== 'je|tu') die(`the new ending sits on ${newCells.join(', ')}; the lesson teaches it on je and tu`);
for (const f of THE_NEW_ENDING_FORMS) {
  if (!f.endsWith(THE_NEW_ENDING)) die(`${f} is listed as taking -${THE_NEW_ENDING} and does not end in it`);
}
/* devoir must NOT take it, which is half the teaching of that mission. */
if (PARADIGM[0].forms.devoir.endsWith(THE_NEW_ENDING)) die(`devoir is claimed not to take -${THE_NEW_ENDING} and its je form is ${PARADIGM[0].forms.devoir}`);
console.log(`  endings       ${ENDINGS_CLAIM}`);

/* ── EVERY AUTHORED ROW PAIRS A MODAL WITH A SECOND VERB ─────────────────── */

const bare: string[] = [];
for (const r of MODAUX) {
  const excepted = (BARE_MODAL_EXCEPTIONS as readonly string[]).includes(r.id);
  const hasSecond = MODAL_INFINITIVE_SHAPE.test(r.fr);
  if (excepted) {
    if (hasSecond) die(`${r.id} is on the bare-modal exception list and DOES carry a second verb: ${r.fr}`);
    if (!BARE_MODAL_SHAPE.test(r.fr)) die(`${r.id} is on the bare-modal exception list and carries no modal at all: ${r.fr}`);
    continue;
  }
  if (!hasSecond) { bare.push(`${r.id}  ${r.fr}`); continue; }
  if (!r.infinitive) die(`${r.id} declares no second verb`);
}
if (bare.length) {
  die(`${bare.length} authored row(s) put a modal on a card with no second verb after it:\n  ${bare.join('\n  ')}\n`
    + `  The brief: "a bare conjugated modal in a deck teaches the wrong shape."\n`
    + `  If one of these is deliberate, name it in BARE_MODAL_EXCEPTIONS with the reason.`);
}

/* ── AND EVERY SECOND VERB IS IMPORTED, NEVER AUTHORED ───────────────────── */

const authoredVerbs: string[] = [];
for (const r of MODAUX) {
  if (!r.infinitive) continue;
  if (r.infinitive === UNSEEN_VERB.fr) continue; // the unseen verb, deliberately not an import
  try { infinitiveId(r.infinitive); } catch { authoredVerbs.push(`${r.id} uses "${r.infinitive}"`); }
}
if (authoredVerbs.length) {
  die(`${authoredVerbs.length} row(s) use a second verb this build did not import:\n  ${authoredVerbs.join('\n  ')}\n`
    + `  Every infinitive here is imported. That is the argument of the lesson and it has to be true of the corpus.`);
}
console.log(`  second verbs  ${INFINITIVES.length} imported, 0 authored, 1 unseen (${UNSEEN_VERB.fr}, released to nothing)`);

/* ── THE UNSEEN VERB REACHES NO CARD ─────────────────────────────────────── */

if (MODAUX_ITEM_IDS.includes(UNSEEN_VERB.sourceId)) {
  die(`${UNSEEN_VERB.sourceId} is in itemIds. The moment the lesson hands the learner a card for ${UNSEEN_VERB.fr}, the lesson has taught it and the generalisation mission proves nothing.`);
}
if (MODAUX_DECK_TRANCHE.flat().includes(UNSEEN_VERB.sourceId)) die(`${UNSEEN_VERB.sourceId} is released by a deck tranche`);
if (strings(LESSON.terms).some((s) => s.includes(UNSEEN_VERB.sourceId))) die(`a term names ${UNSEEN_VERB.sourceId}`);
if (IMPORTED_IDS.includes(UNSEEN_VERB.sourceId)) die(`${UNSEEN_VERB.sourceId} is in the importable set`);
/* And the row the mission prints from must be the row Postgres holds. */
if (UNSEEN_VERB_ROW.length !== 1 || UNSEEN_VERB_ROW[0].fr !== UNSEEN_VERB.fr) {
  die(`the unseen verb row is missing or is not ${UNSEEN_VERB.fr}`);
}
if (UNSEEN_VERB_ROW[0].respell !== UNSEEN_VERB.respell) {
  die(`the unseen verb respelling disagrees: the manifest says ${JSON.stringify(UNSEEN_VERB_ROW[0].respell)}, the corpus says ${JSON.stringify(UNSEEN_VERB.respell)}`);
}
/* THE MISSION MUST ACTUALLY NAME IT. An absence guard that passes because the
   mission was deleted is worse than no guard. */
const unseenSection = LESSON.sections.find((s) => (s as { id?: string }).id === UNSEEN_SECTION_ID);
if (!unseenSection) die(`${UNSEEN_SECTION_ID} is missing. That mission is the reason this lesson exists.`);
if (!strings(unseenSection).some((s) => hasPhrase(s, UNSEEN_VERB.fr))) {
  die(`${UNSEEN_SECTION_ID} does not name ${UNSEEN_VERB.fr}`);
}
const unseenRows = MODAUX.filter((r) => r.infinitive === UNSEEN_VERB.fr);
if (unseenRows.length !== UNSEEN_VERB.answerIds.length) die(`${unseenRows.length} rows use the unseen verb, expected ${UNSEEN_VERB.answerIds.length}`);

/* ── savoir AND connaître APPEAR NOWHERE A LEARNER PRODUCES ──────────────── */

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz) die('the lesson has no quiz');
const qs = quizQuestions(quiz);

/** Production surfaces: what the learner is asked to say, spell, type or pick.
 *  The boundary card is NOT here, because it has to name a2.14 in order to hand
 *  the material over, and a guard that fired on a hand-off would be silenced. */
function producedStrings(): string[] {
  const out: string[] = [];
  for (const s of LESSON.sections) {
    const id = (s as { id?: string }).id;
    if (id === BOUNDARY_SECTION_ID) continue;
    out.push(...prose(s));
  }
  out.push(...prose(LESSON.sheets));
  out.push(...prose(LESSON.terms));
  out.push(LESSON.intro ?? '', ...prose(LESSON.overview));
  return out;
}
const produced = producedStrings().join('  ');
if (SAVOIR_SHAPE.test(produced)) {
  const m = SAVOIR_SHAPE.exec(produced);
  die(`"${m?.[2]}" appears on a production surface. ${RESERVED_FOR_NEIGHBOURS[0].unit} owns savoir against connaître outright and it is that lesson's entire payload.`);
}
/* And `nager`, because `je sais nager` is a2.14's headline example. */
if (hasPhrase(produced, 'nager')) die(`"nager" appears on a production surface, and je sais nager is ${RESERVED_FOR_NEIGHBOURS[0].unit}'s headline contrast`);

/* ── THE CONDITIONAL IS NOT CONJUGATED ───────────────────────────────────── */

const everything = strings(LESSON).join('  ');
if (FORBIDDEN_CONDITIONAL_SHAPE.test(everything)) {
  const m = FORBIDDEN_CONDITIONAL_SHAPE.exec(everything);
  die(`"${m?.[2]}" appears in the lesson. Only ${POLITE_FORMS.join(' and ')} may ship, as fixed forms, and nothing else from that family.`);
}
const politeRows = MODAUX.filter((r) => POLITE_FORMS.some((f) => hasPhrase(r.fr, f)));
if (politeRows.length !== POLITE_FORMS.length) die(`${politeRows.length} polite rows, expected ${POLITE_FORMS.length}`);
/* AND EACH ONE MUST BE SAID TO BE FIXED. Naming a form as fixed is the brief's
   own condition for teaching it at all. */
const politeText = [
  ...prose(LESSON.sections.find((s) => (s as { id?: string }).id === 's17-polite')),
  ...prose(LESSON.terms?.thePolite),
].join('  ').toLowerCase();
if (!/fixed form|learn(ed)? (it |them )?whole|learned whole/.test(politeText)) {
  die(`${POLITE_FORMS[0]} is taught and nowhere is it SAID to be a fixed form. The brief: "Naming a form as fixed is honest; letting the learner think it is a present tense is not."`);
}
console.log(`  polite        ${POLITE_FORMS.join(' · ')}, both named as fixed, 0 other forms of the family`);

/* ── THE NASAL CHECKER, IN BOTH DIRECTIONS ───────────────────────────────── */

let visible = 0;
const blind: string[] = [];
for (const r of MODAUX) {
  const respell = r.respell ?? '';
  if (hasPlainNasalFor(r.fr, respell)) die(`${r.id} ships a respelling the nasal checker flags: ${respell}`);
  if (!respell.includes('ⁿ')) continue;
  if (hasPlainNasalFor(r.fr, respell.replace(/ⁿ/g, 'n'))) visible++;
  else blind.push(r.id);
}
if (blind.length !== BLIND_NASALS.length) {
  die(`${blind.length} superscript(s) are INVISIBLE to hasPlainNasalFor and the corpus declares ${BLIND_NASALS.length}:\n  ${blind.join('\n  ')}\n`
    + `  A mark the checker cannot see is a mark the next author can delete in silence.`);
}
if (visible + blind.length !== VISIBLE_NASALS.length) die(`${visible + blind.length} superscripts measured, VISIBLE_NASALS lists ${VISIBLE_NASALS.length}`);
/* AND THE REPAIRED IMPORTS MUST COME OUT CLEAN TOO. */
const stillFlagged: string[] = [];
for (const rep of RESPELL_REPAIRS) {
  const row = IMPORTED_BY_ID.get(rep.id);
  if (!row) die(`${rep.id} is repaired and is not an imported row`);
  const after = repairedRespell(rep.id);
  if (hasPlainNasalFor(row.fr, after)) stillFlagged.push(`${rep.id}  ${after}`);
}
if (stillFlagged.length) {
  die(`${stillFlagged.length} repaired import(s) are STILL flagged by the nasal checker:\n  ${stillFlagged.join('\n  ')}\n`
    + `  Either the repair is incomplete, or the row holds a nasal the house cannot respell without U+203F.\n`
    + `  In the second case the row does not belong in this lesson: put it in READ_NOT_IMPORTED with the reason.`);
}
console.log(`  nasals        ${visible} superscripts, ${visible} seen by the checker, ${blind.length} blind`);

/* ── THE DICTÉE, THROUGH THE REAL dicteeMode ─────────────────────────────── */

const wordMode = DICTATION_IDS.filter((id) => {
  const r = MODAUX.find((x) => x.id === id)!;
  return dicteeMode(r.fr) !== 'letters';
});
if (wordMode.length) {
  die(`${wordMode.length} dictée target(s) fall into WORD mode, where every word arrives pre-spelled and nothing is tested:\n  ${wordMode.join('\n  ')}`);
}
const notInLesson = DICTATION_IDS.filter((id) => !MODAUX_ITEM_IDS.includes(id));
if (notInLesson.length) die(`dictée targets not in itemIds: ${notInLesson.join(', ')}`);

/* ── a1.03: joiners enforced to ZERO, authored AND imported ──────────────── */

const importedItems = [...IMPORTED_BY_ID.values()];
const joiners = endingPopulation([...AUTHORED_ITEMS, ...importedItems]);
if (joiners.length) {
  die(`${joiners.length} row(s) join a1.03's measured ending population, which moves twenty printed figures in a1-03-genre.test.ts:\n  ${joiners.map((j) => JSON.stringify(j)).join('\n  ')}`);
}
const gendered = importedItems.filter((r) => (r as { gender?: string }).gender);
if (gendered.length) die(`imported row(s) carry a gender: ${gendered.map((r) => r.id).join(', ')}`);
console.log(`  a1.03         0 joiners across ${AUTHORED_ITEMS.length} authored and ${importedItems.length} imported rows`);

/* ── The authored rows themselves ────────────────────────────────────────── */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`the authored rows do not validate:\n${formatIssues(itemIssues)}`);
for (const it of AUTHORED_ITEMS) {
  if (it.theme !== THEME) die(`${it.id} is in theme ${it.theme}, expected ${THEME}`);
  if (it.id < OWNED_ID_RANGE.from || it.id > OWNED_ID_RANGE.to) die(`${it.id} is outside this build's block ${OWNED_ID_RANGE.from}..${OWNED_ID_RANGE.to}`);
  if ((it as { gender?: string }).gender) die(`${it.id} carries a gender`);
}
const dupeIds = AUTHORED_IDS.filter((x, i) => AUTHORED_IDS.indexOf(x) !== i);
if (dupeIds.length) die(`duplicate authored ids: ${dupeIds.join(', ')}`);
/* flashhub-coverage: two non-sentence rows sharing an `fr` in one theme is one
   card served twice. Every authored row here is a sentence, and that is checked
   rather than assumed. */
const nonSentences = AUTHORED_ITEMS.filter((it) => it.kind !== 'sentence');
if (nonSentences.length) die(`authored non-sentence row(s): ${nonSentences.map((r) => r.id).join(', ')}. Every authored row here is a full sentence with a person in it.`);
const dupeFr = AUTHORED_ITEMS.map((r) => r.fr).filter((x, i, a) => a.indexOf(x) !== i);
if (dupeFr.length) die(`two authored rows share an fr: ${dupeFr.join(', ')}`);

/* ── The lesson ──────────────────────────────────────────────────────────── */

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`the lesson does not validate:\n${formatIssues(lessonIssues)}`);
const density = validateDensity(LESSON);
if (density.length) die(`density:\n${formatDensity(density)}`);

/* THE REFRAME, COUNTED AGAINST EXPLICIT CONSTANTS. */
const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected ${REFRAME_APPEARANCES}`);
const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
if (reframeSections !== REFRAME_SECTIONS) die(`the reframe reaches ${reframeSections} sections, expected ${REFRAME_SECTIONS}`);
if (LESSON.reframe !== REFRAME) die('the lesson reframe field disagrees with the terms file');

/* ONE QUIZ. lessonPager.logic.ts takes sections.find(quiz) and a second one is
   silently never rendered, which a1.30 found at the cost of a whole lesson. */
const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
if (quizCount !== 1) die(`${quizCount} quiz sections. lessonPager.logic.ts renders the FIRST and silently drops the rest.`);
const rounds = (quiz as { rounds?: { id: string; targets?: string[] }[] }).rounds ?? [];
if (rounds.length !== EXPECTED_ROUNDS) die(`${rounds.length} quiz rounds, expected ${EXPECTED_ROUNDS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} quiz questions, expected ${EXPECTED_QUESTIONS}`);

/* EACH ROUND LEADS ON A DIFFERENT TRIGGER. drillForRound returns the FIRST
   target that has a drill and then stops, so a drill never named first can
   never fire. a1.05 ships two such drills and its own test fails on them. */
const leads = rounds.map((r) => (r.targets ?? [])[0]);
if (new Set(leads).size !== leads.length) die(`two rounds lead on the same trigger: ${leads.join(', ')}`);
const triggerIds = (LESSON.errorTriggers ?? []).map((t) => t.id);
const unreachable = triggerIds.filter((t) => !leads.includes(t));
if (unreachable.length) die(`these drills can never fire, because no round leads on their trigger: ${unreachable.join(', ')}`);

/* NO listenChoose. The singular cells are homophones. */
const listen = qs.filter((q) => (q as { format?: string }).format === 'listenChoose');
if (listen.length) {
  die(`${listen.length} listenChoose question(s). veux/veut, peux/peut and dois/doit are ONE SOUND, and a question asking a learner to separate them by ear certifies a bug.`);
}
console.log(`  quiz          ${rounds.length} rounds · ${qs.length} questions · ${leads.length} distinct lead triggers · 0 listenChoose`);

/* ── THE THREE LAYOUT CLAIMS, BY SECTION ID AND BY INDEX ─────────────────── */

const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);

/* 1. THE SINGLE GRID. Every line carries all three verbs. */
const grid = byId(GRID_SECTION_ID) as { type?: string; examples?: { fr: string; en: string }[] } | undefined;
if (!grid || grid.type !== 'examples') die(`${GRID_SECTION_ID} is missing or is not an examples section`);
if ((grid.examples ?? []).length !== PARADIGM.length) die(`${GRID_SECTION_ID} has ${(grid.examples ?? []).length} lines, expected ${PARADIGM.length}`);
(grid.examples ?? []).forEach((ex, i) => {
  for (const m of MODAL_ORDER) {
    if (!hasPhrase(ex.fr, PARADIGM[i].forms[m])) {
      die(`${GRID_SECTION_ID} line ${i} does not carry the ${m} form ${PARADIGM[i].forms[m]}. The brief: the three belong in ONE grid, and three separate tables hide the pattern.`);
    }
  }
});

/* 2. THE REGISTER PAIR, FOUR ROWS ON ONE SCREEN, IN ORDER. */
const reg = byId(REGISTER_SECTION_ID) as { examples?: { fr: string }[] } | undefined;
if (!reg) die(`${REGISTER_SECTION_ID} is missing`);
const regEx = reg.examples ?? [];
if (regEx.length !== REGISTER_ROW_ORDER.length) die(`${REGISTER_SECTION_ID} has ${regEx.length} lines, expected ${REGISTER_ROW_ORDER.length}`);
REGISTER_ROW_ORDER.forEach((id, i) => {
  const want = MODAUX.find((r) => r.id === id)?.fr ?? IMPORTED_BY_ID.get(id)?.fr;
  if (!want) die(`${id} is named in the register order and is neither authored nor imported`);
  if (regEx[i].fr !== want) die(`${REGISTER_SECTION_ID} line ${i} is ${JSON.stringify(regEx[i].fr)}, expected ${JSON.stringify(want)}`);
});
/* AND THE FIRST PAIR MUST BE THE SAME SENTENCE TWICE. That is the teaching:
   one word changed and nothing else moved. */
const bluntTail = MODAUX.find((r) => r.id === REGISTER_ROW_ORDER[0])!.fr.replace(/^Je veux /, '');
const politeTail = MODAUX.find((r) => r.id === REGISTER_ROW_ORDER[1])!.fr.replace(new RegExp(`^Je ${POLITE_FORMS[0]} `), '');
if (bluntTail !== politeTail) {
  die(`the register pair is not a minimal pair: ${JSON.stringify(bluntTail)} against ${JSON.stringify(politeTail)}.\n`
    + `  The point is that ONE word changed. Two different sentences make it a comparison of situations instead.`);
}

/* 3. THE THREE SENSES, EACH WITH A ROW BEHIND IT. */
const senses = byId(SENSES_SECTION_ID);
if (!senses) die(`${SENSES_SECTION_ID} is missing`);
for (const s of POUVOIR_SENSES) {
  if (!MODAUX.find((r) => r.id === s.id)) die(`the ${s.key} sense names ${s.id} and no authored row has that id`);
  if (!strings(senses).includes(s.id)) die(`${SENSES_SECTION_ID} does not draw ${s.id} (${s.key})`);
}
console.log(`  layout        grid ${GRID_SECTION_ID} · register ${REGISTER_SECTION_ID} · senses ${SENSES_SECTION_ID} · unseen ${UNSEEN_SECTION_ID}`);

/* ── THE OWNS ACT IS THE HEAVIEST, ALONE ─────────────────────────────────── */

const actSizes = MODAUX_ACTS.map((a) => a.sections.length);
const ownsIx = MODAUX_ACTS.findIndex((a) => a.id === OWNS_ACT_ID);
if (ownsIx < 0) die(`there is no act ${OWNS_ACT_ID}`);
const heaviest = Math.max(...actSizes);
if (actSizes[ownsIx] !== heaviest || actSizes.filter((n) => n === heaviest).length !== 1) {
  die(`the Owns act (${OWNS_ACT_ID}) is not the heaviest alone: ${actSizes.map((n, i) => `${MODAUX_ACTS[i].id}:${n}`).join(' ')}\n`
    + `  Doctrine §B.5: if the paradigm act outweighs the Owns, this has become another table lesson.`);
}
const inActs = MODAUX_ACTS.flatMap((a) => a.sections);
const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
if (inActs.join('|') !== sectionIds.join('|')) die('the act running order does not match the section order');
console.log(`  acts          ${actSizes.map((n, i) => `${MODAUX_ACTS[i].id}:${n}`).join(' ')}  Owns is ${OWNS_ACT_ID}`);

/* ── The learner-facing surfaces ─────────────────────────────────────────── */

/* THE JARGON WALK INCLUDES intro AND overview. `intro` is drawn on the lesson
   overview card AND on the lesson cover, and a2.11 shipped "third person" there
   in v1 because every guard in the band walked sections, sheets and terms and
   not this. grammarAssumed and grammarIntroduced are DELIBERATELY excluded:
   invariants §8 says those are addressed to the curriculum and may use the
   precise words. */
const learnerText = [
  ...prose(LESSON.sections),
  ...prose(LESSON.sheets),
  ...prose(LESSON.terms),
  ...prose(LESSON.drills),
  LESSON.intro ?? '',
  ...prose(LESSON.overview),
  ...prose(LESSON.acts),
].join('  ');
const jargon = JARGON.filter((j) => hasPhrase(learnerText, j));
if (jargon.length) die(`grammar jargon on a learner surface: ${jargon.join(', ')}`);
/* AND intro IS PINNED IN ITS OWN RIGHT, so a later author who trims the walk
   back still fails here with the reason. */
if (!LESSON.intro || LESSON.intro.length < 40) die('the lesson intro is missing or too short to be the cover copy');
const introJargon = JARGON.filter((j) => hasPhrase(LESSON.intro!, j));
if (introJargon.length) die(`jargon in Lesson.intro, which is drawn on TWO screens: ${introJargon.join(', ')}`);

/* HOUSE COPY RULES. */
if (learnerText.includes('—')) die('an em dash reached a learner surface');
if (hasPhrase(learnerText, 'honest') || hasPhrase(learnerText, 'honesty')) die('"honest" is banned from authored content');
if (strings(LESSON).some((s) => s.includes('‿'))) die('U+203F UNDERTIE reached the lesson; it renders as a low underscore on a Pixel 6');

/* ── EVERY CITED UNIT IS FINDABLE ────────────────────────────────────────── */

const uncited = CITED_UNITS.filter((u) => !hasPhrase(learnerText, u));
if (uncited.length) {
  die(`these units are named in the corpus as cited and appear nowhere a search can see: ${uncited.join(', ')}\n`
    + `  Check for a possessive: hasPhrase treats "'" as a word character, so "a2.14's" does not match "a2.14".`);
}
/* AND THE BOUNDARY SECTION MUST NAME THE NEIGHBOUR IT HANDS OVER TO. */
const boundary = byId(BOUNDARY_SECTION_ID);
if (!boundary) die(`${BOUNDARY_SECTION_ID} is missing`);
if (!hasPhrase(prose(boundary).join('  '), RESERVED_FOR_NEIGHBOURS[0].unit)) {
  die(`${BOUNDARY_SECTION_ID} does not name ${RESERVED_FOR_NEIGHBOURS[0].unit}, which owns the other half of "can"`);
}

/* ── a2.01's nous/on STATEMENT HAS EXACTLY ONE HOME ──────────────────────── */

const nousOnSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON)));
const nousOnIds = nousOnSections.map((s) => (s as { id?: string }).id);
if (nousOnIds.length !== 1 || nousOnIds[0] !== NOUS_ON_SECTION_ID) {
  die(`a2.01's nous/on statement appears in ${nousOnIds.length} section(s) (${nousOnIds.join(', ')}); it belongs in ${NOUS_ON_SECTION_ID} alone`);
}

/* ── il faut: THE DECISION IS RECORDED AND HONOURED ──────────────────────── */

const ilFautText = strings(LESSON).join('  ');
const ilFautPresent = hasPhrase(ilFautText, 'il faut');
if (ilFautPresent !== IL_FAUT.included) {
  die(`the corpus records il faut as ${IL_FAUT.included ? 'INCLUDED' : 'EXCLUDED'} and the lesson ${ilFautPresent ? 'uses' : 'does not use'} it`);
}
if (IL_FAUT.included) {
  /* IT IS CONTEXT, NOT A FOURTH PARADIGM. No conjugated form of falloir beyond
     `faut` may appear, and it may not be a quiz answer the learner produces. */
  if (/(^|[^a-zà-ÿ])(fallait|faudra|faudrait|falloir)(?![a-zà-ÿ])/i.test(ilFautText)) {
    die('a second form of the impersonal appears. It ships as ONE shape for recognition, not as a paradigm.');
  }
  const typed = qs.filter((q) => (q as { format?: string }).format === 'typeIn' && /faut/i.test(String((q as { answer?: string }).answer ?? '')));
  if (typed.length) die('a typeIn question asks the learner to produce "faut". It is for recognition only.');
}
console.log(`  il faut       included as ${IL_FAUT.as}; owned by ${IL_FAUT.ownedByUnits.length} units at any level, in ${IL_FAUT.sentenceCount} published sentences`);

/* ── THE SHEET DRAWS ONLY WHAT ReferenceSheet.tsx CAN DRAW ───────────────── */

const DRAWABLE = new Set(['teach', 'letterGrid', 'table']);
for (const sh of LESSON.sheets ?? []) {
  if (sh.id !== SHEET_ID) die(`sheet id ${sh.id}, expected ${SHEET_ID}`);
  for (const s of sh.sections ?? []) {
    const t = (s as { type?: string }).type ?? '';
    if (!DRAWABLE.has(t)) die(`the sheet holds a "${t}" section. ReferenceSheet.tsx draws teach, letterGrid and table and NOTHING else; a1.13 ships a cheatSheet in a sheet that draws its title and no rows.`);
    if ((s as { layer?: string }).layer !== 'deep') die(`sheet section ${(s as { id?: string }).id} is not at layer deep`);
  }
}
/* NO CROSS-LESSON SHEET REFERENCE. A sheetId resolves only inside the lesson
   that declares it (schema.ts:3490, lesson-contract.test.ts:91). */
const declared = new Set((LESSON.sheets ?? []).map((s) => s.id));
for (const s of LESSON.sections) {
  const ref = (s as { sheetId?: string }).sheetId;
  if (ref && !declared.has(ref)) die(`${(s as { id?: string }).id} names sheet ${ref}, which this lesson does not declare`);
}

/* ── tapTable, commonErrors, practice: the renderer's own rules ──────────── */

const tapTables = LESSON.sections.filter((s) => s.type === 'tapTable');
if (tapTables.length !== EXPECTED_TAPTABLES) die(`${tapTables.length} tapTables, expected ${EXPECTED_TAPTABLES}`);
for (const s of LESSON.sections) {
  if (s.type === 'commonErrors' && !(s as { swipe?: boolean }).swipe) {
    die(`${(s as { id?: string }).id} is a commonErrors section without swipe: true, which renders a blank screen`);
  }
  if (s.type === 'reading') {
    const r = s as { questionsInModal?: boolean; questions?: unknown[] };
    if (!r.questionsInModal || !(r.questions ?? []).length) die(`${(s as { id?: string }).id} is a reading section without questionsInModal AND questions, so its glossary reaches no renderer`);
  }
  if (s.type === 'practice') {
    const p = s as { skill?: string; itemIds?: string[] };
    if (p.skill === 'write') die(`${(s as { id?: string }).id} uses practice skill "write", which draws no writing surface`);
    const missing = (p.itemIds ?? []).filter((id) => !MODAUX_ITEM_IDS.includes(id));
    if (missing.length) die(`${(s as { id?: string }).id} practises ids the lesson does not carry: ${missing.join(', ')}`);
  }
  const chips = (s as { terms?: string[] }).terms ?? [];
  if (chips.length > 3) die(`${(s as { id?: string }).id} declares ${chips.length} term chips; the renderer shows three and collapses the rest`);
  for (const t of chips) if (!LESSON.terms?.[t]) die(`${(s as { id?: string }).id} names undefined term "${t}"`);
}

/* ── The deck, and what it releases ──────────────────────────────────────── */

if ((LESSON.deckTranche ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.deckTranche ?? []).length} deck tranches, expected one per act (${EXPECTED_ACTS})`);
const released = MODAUX_DECK_TRANCHE.flat();
const dupeReleased = released.filter((x, i) => released.indexOf(x) !== i);
if (dupeReleased.length) die(`released twice: ${dupeReleased.join(', ')}`);
const notReleased = MODAUX_ITEM_IDS.filter((id) => !released.includes(id));
if (notReleased.length) die(`in itemIds and released by no act: ${notReleased.join(', ')}`);
const releasedNotCarried = released.filter((id) => !MODAUX_ITEM_IDS.includes(id));
if (releasedNotCarried.length) die(`released and not in itemIds: ${releasedNotCarried.join(', ')}`);
/* EVERY ITEM IS DRAWN BY SOME SECTION.
 *
 * THE a1.08 DEFECT: forty-three itemIds that resolved perfectly against the
 * corpus and were rendered by nothing at all. Being in `itemIds` makes a row
 * available; it does not put it on a screen. This build hit the same thing in
 * miniature — one imported sentence sat in the deck and in itemIds while no
 * section drew it — and the guard is what found it.
 *
 * A section "draws" an id if the id appears anywhere in it: as an `itemId` on a
 * card, in a practice or dictation `itemIds` list, or as a drill item. */
const drawnBy = new Map<string, string[]>();
for (const s of LESSON.sections) {
  const id = (s as { id?: string }).id ?? '(anon)';
  for (const str of strings(s)) if (MODAUX_ITEM_IDS.includes(str)) drawnBy.set(str, [...(drawnBy.get(str) ?? []), id]);
}
for (const d of LESSON.drills ?? []) {
  for (const str of strings(d)) if (MODAUX_ITEM_IDS.includes(str)) drawnBy.set(str, [...(drawnBy.get(str) ?? []), d.id]);
}
for (const t of Object.values(LESSON.terms ?? {})) {
  for (const str of strings(t)) if (MODAUX_ITEM_IDS.includes(str)) drawnBy.set(str, [...(drawnBy.get(str) ?? []), 'term']);
}
const undrawn = MODAUX_ITEM_IDS.filter((id) => !drawnBy.has(id));
if (undrawn.length) {
  die(`${undrawn.length} item(s) are in itemIds, released by an act, and drawn by NO section, drill or term:\n  ${undrawn.join('\n  ')}\n`
    + `  a1.08 shipped forty-three of these. They resolve, they validate, and a learner never sees them.`);
}

/* SPEAK ONLY WHAT THE MIC CAN SCORE. */
const unspeakable = MODAUX_SPEAK_IDS.filter((id) => {
  const r = MODAUX.find((x) => x.id === id);
  return !r || !r.drills.includes('voiceflash');
});
if (unspeakable.length) die(`the speak deck names rows without a voiceflash drill, which the mic cannot score: ${unspeakable.join(', ')}`);

/* ── READ-ONLY ROWS ARE RELEASED TO NOTHING ──────────────────────────────── */

for (const r of READ_ONLY_ROWS) {
  if (MODAUX_ITEM_IDS.includes(r.id)) die(`${r.id} is read-only and is in itemIds`);
  if (released.includes(r.id)) die(`${r.id} is read-only and is released by a deck tranche`);
}
/* The refusal reasons are recorded, and the one that matters is the U+203F row:
   importing it would have put a low underscore on an a2.13 screen. */
const tieRow = READ_NOT_IMPORTED.find((r) => r.why.includes('U+203F'));
if (!tieRow) die('the U+203F refusal is no longer recorded in READ_NOT_IMPORTED');

console.log(`  surfaces      0 jargon · 0 em dash · 0 U+203F · ${CITED_UNITS.length} cited units all findable`);
console.log(`  decks         ${MODAUX_ITEM_IDS.length} items, all released exactly once · ${MODAUX_SPEAK_IDS.length} speak · ${DICTATION_IDS.length} dictée, all LETTERS`);

/* ══════════════════════════════════════════════════════════════════════════
 *  POSTGRES
 * ═══════════════════════════════════════════════════════════════════════ */

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  /* THE ID BLOCK. The row COUNT is the only signal left: a2.10.l2 took .461..500,
     above the whole batch-1 reservation, so `max` has been past every remaining
     block since before any of them was claimed. Ledger §2. */
  const blk = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.verbes.%'",
  );
  const before = Number(blk.rows[0].n);
  if (before !== ROW_COUNT_BEFORE && before !== ROW_COUNT_BEFORE + AUTHORED_ITEMS.length) {
    c.release(); await pool.end();
    die(`fr.a2.verbes holds ${before} rows. The ledger says ${ROW_COUNT_BEFORE} before this build and ${ROW_COUNT_BEFORE + AUTHORED_ITEMS.length} after.\n`
      + `  Somebody has landed inside a block. Do not take another range quietly: amend A2-BATCH-1-LEDGER.md and say so.`);
  }
  const inBlock = await c.query<{ id: string; fr: string }>(
    'select id, fr from content_items where id >= $1 and id <= $2 and id <> all($3) order by id',
    [OWNED_ID_RANGE.from, OWNED_ID_RANGE.to, AUTHORED_IDS],
  );
  if (inBlock.rowCount) {
    c.release(); await pool.end();
    die(`rows inside ${OWNED_ID_RANGE.from}..${OWNED_ID_RANGE.to} that this build does not own:\n  ${inBlock.rows.map((r) => `${r.id} ${JSON.stringify(r.fr)}`).join('\n  ')}`);
  }
  console.log(`  block         fr.a2.verbes holds ${before} rows (ledger: ${ROW_COUNT_BEFORE}), ${OWNED_ID_RANGE.from}..${OWNED_ID_RANGE.to} is clear`);

  /* THE MANIFEST, FIELD BY FIELD, AGAINST POSTGRES RATHER THAN THE SEED. The two
     drift, and an id that exists only in the seed renders as an empty card. */
  const allImported = [...IMPORTED_IDS, ...READ_ONLY_ROWS.map((r) => r.id), UNSEEN_VERB.sourceId];
  const live = await c.query<Record<string, unknown>>('select * from content_items where id = any($1)', [allImported]);
  const liveBy = new Map(live.rows.map((r) => [String(r.id), r]));
  const stale: string[] = [];
  for (const id of allImported) {
    const row = liveBy.get(id);
    if (!row) { stale.push(`${id} is not in Postgres`); continue; }
    if (row.status !== 'published') stale.push(`${id} is ${row.status}`);
    const rec = IMPORTED_BY_ID.get(id) ?? READ_ONLY_ROWS.find((r) => r.id === id) ?? UNSEEN_VERB_ROW.find((r) => r.id === id);
    if (!rec) { stale.push(`${id} is in no manifest group`); continue; }
    if (rec.fr !== row.fr) stale.push(`${id} fr: manifest ${JSON.stringify(rec.fr)}, Postgres ${JSON.stringify(row.fr)}`);

    /* THE MANIFEST IS A PRE-BATCH READ, SO IT WILL LEGITIMATELY DISAGREE WITH
       POSTGRES ON EVERY ROW THIS BUILD TRANSFORMS, ONCE THE BUILD HAS RUN.
       Five rows get a respelling repaired and two get one supplied; comparing
       those to the manifest by equality makes the batch refuse its own second
       run, which is not staleness, it is success.
       FOUND BY THE MUTATION HARNESS'S BASELINE CHECK, after the first apply.
       The transformed rows are checked separately, just below. */
    const transformed = RESPELL_REPAIRS.some((r) => r.id === id) || RESPELL_ADDITIONS.some((a) => a.id === id);
    if (!transformed && (rec.respell ?? null) !== (row.respell ?? null)) {
      stale.push(`${id} respell: manifest ${JSON.stringify(rec.respell)}, Postgres ${JSON.stringify(row.respell)}`);
    }
  }
  if (stale.length) {
    c.release(); await pool.end();
    die(`the manifest is stale. Regenerate it with pnpm tsx scripts/_a213_manifest.ts:\n  ${stale.join('\n  ')}`);
  }

  /* THE REPAIRS AND ADDITIONS MUST STILL APPLY. A guarded update that matches
     nothing reports success and changes nothing. */
  const pending: string[] = [];
  for (const r of RESPELL_REPAIRS) {
    const stored = String(liveBy.get(r.id)?.respell ?? '');
    if (!stored.includes(r.from) && !stored.includes(r.to)) pending.push(`${r.id} holds ${JSON.stringify(stored)}, which contains neither the value to repair nor the repaired one`);
  }
  for (const a of RESPELL_ADDITIONS) {
    const stored = liveBy.get(a.id)?.respell;
    if (stored != null && stored !== a.to) pending.push(`${a.id} now HAS a respelling (${JSON.stringify(stored)}) and this build would overwrite it. Re-decide.`);
  }
  if (pending.length) {
    c.release(); await pool.end();
    die(`repairs cannot be applied safely:\n  ${pending.join('\n  ')}`);
  }

  /* THE UNIT, BYTE FOR BYTE. */
  const ur = await c.query<{ body: Unit }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID],
  );
  if (ur.rowCount !== 1) { c.release(); await pool.end(); die(`${ur.rowCount} rows for unit ${UNIT_ID}`); }
  const unit = ur.rows[0].body as Unit & { sub?: string; canDo?: string; seq?: number; lessonIds?: string[]; prereqUnitIds?: string[] };
  if (unit.title !== UNIT_TITLE) die(`unit title is ${JSON.stringify(unit.title)}, this build expects ${JSON.stringify(UNIT_TITLE)}`);
  if (unit.sub !== UNIT_SUB) die(`unit sub is ${JSON.stringify(unit.sub)}, this build expects ${JSON.stringify(UNIT_SUB)}`);
  if (unit.canDo !== UNIT_CANDO) die(`unit canDo is ${JSON.stringify(unit.canDo)}, this build expects ${JSON.stringify(UNIT_CANDO)}`);
  if (Number(unit.seq) !== UNIT_SEQ) die(`unit seq is ${JSON.stringify(unit.seq)}, the corpus says ${UNIT_SEQ}`);
  const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and missions.ts computes ${JSON.stringify(expectedTag)} from the live unit`);

  /* THIS UNIT IS NOT A LEAF, AND THE CHECK IS KEPT RATHER THAN LOOSENED.
     a2.12 had to relax a2.02's version of this because it genuinely had no
     dependents. a2.13 does: a2.14 declares it as a prerequisite precisely so it
     can bring pouvoir back as its contrast. */
  const dependents = await c.query<{ id: string; seq: number }>(
    "select body->>'id' id, (body->>'seq')::int seq from content_units where kind = 'curriculum_unit' and body->'prereqUnitIds' ? $1 order by 2", [UNIT_ID],
  );
  if (dependents.rowCount === 0) {
    console.log(`  !! ${UNIT_ID} is a LEAF: no unit declares it as a prerequisite. The brief says ${RESERVED_FOR_NEIGHBOURS[0].unit} should. Reported, not fatal.`);
  } else {
    console.log(`  trail         ${dependents.rowCount} unit(s) rest on ${UNIT_ID}: ${dependents.rows.map((r) => `${r.id}(seq ${r.seq})`).join(' ')}`);
  }

  const already = (unit.lessonIds ?? []).includes(LESSON.id);
  console.log(`  unit          ${UNIT_ID} seq ${unit.seq}, tag ${expectedTag}, lessonIds ${JSON.stringify(unit.lessonIds ?? [])}${already ? '  (re-run)' : '  (first lesson)'}`);
  const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

  /* THE VERSION MOVES FORWARD WHEN THE CONTENT MOVES. Equal version is legal
     only when the stored body is byte-identical, compared through canonicalJson
     because Postgres jsonb normalises key order on write. */
  const prev = await c.query<{ body: unknown }>(
    "select body from content_units where kind = 'lesson' and slug = $1", [LESSON.id],
  );
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
        + `  Move the lesson's own version counter forward. Two different bodies under one number is exactly the\n`
        + `  drift that makes Postgres and seed.json disagree while both report the same version.`);
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
    // already fixed is left alone and a row somebody else has changed to a third
    // value is not silently overwritten. Two of the six are PARTIAL: one token
    // inside a longer respelling, so they use replace() rather than an equality.
    for (const r of RESPELL_REPAIRS) {
      await c.query(
        'update content_items set respell = replace(respell, $2, $3) where id = $1 and respell like $4',
        [r.id, r.from, r.to, `%${r.from}%`],
      );
    }
    // THE ADDITIONS. Only onto a NULL, so a respelling somebody adds between the
    // guard and the transaction survives.
    for (const a of RESPELL_ADDITIONS) {
      await c.query('update content_items set respell = $2 where id = $1 and respell is null', [a.id, a.to]);
    }
    // THE DRILL ADDITIONS. `drills` is an ENUM ARRAY (drill_kind[]), not text[]:
    // concatenating a text[] onto it fails with "operator does not exist:
    // drill_kind[] || text[]" and takes the whole transaction with it. The double
    // cast is the only route. Ledger §5.
    for (const d of DRILL_ADDITIONS) {
      await c.query(
        `update content_items
            set drills = (select array_agg(distinct e order by e)
                            from unnest(drills || $2::text[]::drill_kind[]) e)
          where id = $1`,
        [d.id, [d.add]],
      );
    }
    await c.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)],
    );
    const uu = await c.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID],
    );
    if (uu.rowCount !== 1) throw new Error(`the unit update touched ${uu.rowCount} rows, expected exactly 1`);
    await c.query('commit');
  } catch (e) {
    await c.query('rollback');
    c.release(); await pool.end();
    die(`transaction rolled back: ${(e as Error).message}`);
  }

  /* IT LANDED. Read back rather than assumed. */
  const after = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.verbes.%'",
  );
  const check = await c.query<{ id: string; respell: string | null; drills: string[] }>(
    'select id, respell, drills::text[] drills from content_items where id = any($1)',
    [[...RESPELL_REPAIRS.map((r) => r.id), ...RESPELL_ADDITIONS.map((a) => a.id), ...DRILL_ADDITIONS.map((d) => d.id)]],
  );
  const post = new Map(check.rows.map((r) => [r.id, r] as const));
  const failed: string[] = [];
  for (const r of RESPELL_REPAIRS) {
    const now = String(post.get(r.id)?.respell ?? '');
    if (!now.includes(r.to)) failed.push(`${r.id} respell is ${JSON.stringify(now)} and does not contain ${JSON.stringify(r.to)}`);
    if (now.includes(r.from) && r.from !== r.to) failed.push(`${r.id} still contains the unrepaired ${JSON.stringify(r.from)}`);
  }
  for (const a of RESPELL_ADDITIONS) {
    if (post.get(a.id)?.respell !== a.to) failed.push(`${a.id} respell is ${JSON.stringify(post.get(a.id)?.respell)}, expected ${JSON.stringify(a.to)}`);
  }
  for (const d of DRILL_ADDITIONS) {
    if (!pgArray(post.get(d.id)?.drills).includes(d.add)) failed.push(`${d.id} still has no ${d.add} drill`);
  }
  if (failed.length) { c.release(); await pool.end(); die(`the transaction committed and these did not land:\n  ${failed.join('\n  ')}`); }

  console.log(
    `\n  applied to Postgres:\n`
    + `    ${AUTHORED_ITEMS.length} rows authored, ${AUTHORED_ITEMS[0].id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1].id}\n`
    + `      ${PARADIGM_IDS.length} grid sentences on one frame (${FRAME_VERB}), ${AUTHORED_ITEMS.length - PARADIGM_IDS.length} others\n`
    + `    ${RESPELL_REPAIRS.length} respellings repaired, ${RESPELL_ADDITIONS.length} added where Postgres held none, ${DRILL_ADDITIONS.length} drill addition, all verified after the commit\n`
    + `    ${IMPORTED_IDS.length} rows imported by id out of ${SOURCE_THEMES.length} themes, 0 infinitives authored\n`
    + `    ${READ_ONLY_ROWS.length} row(s) read and refused, and ${UNSEEN_VERB.fr} read and deliberately not released\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${MODAUX_ITEM_IDS.length} items\n`
    + `    fr.a2.verbes row count: ${before} before, ${after.rows[0].n} after (max ${after.rows[0].mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-modaux-into-seed.ts\n`,
  );

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
