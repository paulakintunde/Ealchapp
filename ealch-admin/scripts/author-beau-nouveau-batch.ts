/* a2.16 "Beau, nouveau, vieux" — corpus, lesson and terms, applied to Postgres
 * in one transaction.
 *
 *     pnpm content:beau-nouveau --dry-run
 *     pnpm content:beau-nouveau
 *
 * ── WHAT THIS BATCH GUARDS THAT NO EARLIER ONE DID ────────────────────────
 *
 * THE THIRD FORM AND THE FEMININE ARE ONE SOUND, AND THE PROOF IS SOMEBODY
 * ELSE'S DATA. `bel` and `belle` were respelled by different authors in
 * different themes and agree byte for byte; so do `vieil` and `vieille`. The
 * whole lesson rests on that, so it is re-read out of Postgres here rather than
 * quoted from the manifest, and the build dies if either pair has drifted.
 *
 * FIVE WRITTEN FORMS AND EXACTLY TWO SOUNDS, per adjective, asserted off the
 * GRID constant. Three forms in one sound group and two in the other, three
 * times over with no exception. That arithmetic is the lesson, and a future
 * author who "corrects" one respelling breaks it here rather than on a screen.
 *
 * THE THIRD FORM HAS NO PREDICATE CELL, AND THE ACCESSOR ENFORCES IT.
 * `cellId(adj, 'vowel')` does not typecheck, because « Il est bel. » is not
 * French. The masculine-only trap is a fact about where the form can stand and
 * the batch checks that no production surface ever puts it after a verb.
 *
 * NO EAR QUESTION MAY ASK ABOUT ANYTHING BUT THE ONE AUDIBLE PAIR. This lesson
 * has more homophone groups than any in the band — five written forms collapse
 * into two sounds — so the plain-against-short contrast is the ONLY thing a
 * `listenChoose` can legally ask. Corrections §5, enforced rather than reported.
 *
 * THE INVENTED FEMININE IS PINNED TO TWO LOCATIONS, IN BOTH DIRECTIONS. It is
 * the trap the brief asks for and it is INAUDIBLE, so it may appear only where
 * it is marked as an error, and it must still be there, because a reservation
 * list that has quietly emptied has stopped guarding.
 *
 * a1.03's ENDING POPULATION IS MEASURED, NOT ARGUED ABOUT. Zero gendered rows
 * are authored or carried, and that is by construction: every noun this lesson
 * needs exists as a gendered headword and every one of them is refused.
 *
 * ── GUARDS COPIED, WITH THE REASON ────────────────────────────────────────
 *
 * The jargon walk includes `intro` AND `overview` (ledger §0, corrections §9),
 * runs over `display()` as well as `prose()` so a cardDeck `sub` is seen
 * (a2.15 §3), and includes `fr`, `en` and `notes` on every AUTHORED ROW
 * (a2.03 §4, the fourth guard hole this batch found). Every JARGON entry is
 * checked in its -s plural (a2.15 §3). The manifest staleness check EXEMPTS
 * the rows this build transforms (a2.13 §5). Every itemId must be DRAWN or
 * RELEASED (a1.08 shipped forty-three that were neither). Every `scenario` turn
 * carries two `alts` and a `userEn` (a2.03 §11.1, seed-wide and undocumented).
 *
 * ── GUARDS DELIBERATELY NOT COPIED ────────────────────────────────────────
 *
 * a2.03's "no cold adjective may appear outside two sections". THIS LESSON HAS
 * NO COLD ADJECTIVES and EXPECTED_UNSEEN is 0. That is not laziness: a2.03's
 * generalisation test works because adjective classes are open, and this
 * lesson's subject is a CLOSED SET OF THREE. There is no fourth word to hand
 * over cold — `fol` and `mol` exist and are literary — so the production test
 * here is the two written exam rounds instead, which is where the trap lives.
 *
 * a2.03's "the frame contains no liaison". THIS LESSON'S FRAME IS NOTHING BUT
 * enchaînement: every third-form phrase runs its final consonant into the
 * following vowel, and that is the subject rather than a hazard. What replaces
 * it is the U+203F check in the manifest, which refused the one published row
 * that respells it, and the hyphen notation read off four shipped rows.
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
  ADJ_ORDER, ADVERB_MUST_FIRE, ADVERB_MUST_NOT_FIRE, ADVERB_SHAPE, ADVERB_UNIT,
  ALL_REPAIRS, AUDIBLE_PAIR, AUTHORED_HEADWORDS, AUTHORED_IDS, BEAU_NOUVEAU,
  BLIND_NASALS, CITED_UNITS, DICTATION_IDS, DICTEE_WORD_MODE_ROWS,
  DRILL_ADDITIONS, ELISION_UNIT, EXPECTED_ACTS, EXPECTED_ADJECTIVES,
  EXPECTED_AUTHORED, EXPECTED_AUTHORED_HEADWORDS, EXPECTED_BLIND_NASALS,
  EXPECTED_CARDDECKS, EXPECTED_DICTEE, EXPECTED_DRILLS,
  EXPECTED_DRILL_ADDITIONS, EXPECTED_FALSE_POSITIVES, EXPECTED_FORMS,
  EXPECTED_GRID_ROWS, EXPECTED_IMPORTED, EXPECTED_PHRASE_ROWS,
  EXPECTED_QUESTIONS, EXPECTED_READ_ONLY, EXPECTED_REFRAME_SECTIONS,
  EXPECTED_REFRAME_USES, EXPECTED_RESPELL_ADDITIONS, EXPECTED_RESPELL_REPAIRS,
  EXPECTED_RESPELL_REPAIRS_HOUSE, EXPECTED_RESPELL_REPAIRS_INVISIBLE,
  EXPECTED_RESPELL_REPAIRS_VISIBLE, EXPECTED_ROUNDS, EXPECTED_SECTIONS,
  EXPECTED_SEEN_NASALS, EXPECTED_SHEETS, EXPECTED_SOURCE_THEMES,
  EXPECTED_SUPERSCRIPTS, EXPECTED_TAPTABLES, EXPECTED_TRIGGERS, EXPECTED_UNSEEN,
  FALSE_POSITIVES_FOUND, FALSE_POSITIVE_CANDIDATES, FORM_LABEL, FORM_ORDER,
  GRID, GRID_ROWS, HEADER_WORD_MAX,
  HOMOPHONE_GROUPS, ID_BLOCK, INVENTED_FEMININES, INVENTED_SHAPE, LESSON_ID,
  MISSION_TITLE_MAX, NOT_REPAIRED, ONE_SOUND_FORMS, OTHER_SOUND_FORMS,
  OVER_PLURALISED, OVER_PLURALISED_SHAPE, PHRASE_ROWS, PLURAL_UNCHANGED,
  PLURAL_OWNERS_LITERAL, PLURAL_UNCHANGED_UNITS, PLURAL_X, PLURAL_X_FORMS,
  PREDICATE_SUBJECT,
  READ_NOT_IMPORTED,
  REFRAME, REFRAME_MAX_WORDS, RESPELL_ADDITIONS, RESPELL_REPAIRS_HOUSE,
  RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE, ROW_COUNT_BEFORE,
  TERM_CHIP_ROW_MAX, THEME, THEME_COUNT_BEFORE, UNIT, UNIT_ID as CORPUS_UNIT_ID,
  cellId, dropCheck, form, formRespell, phraseId, toItem, vowelJoinConsonant,
  type Adj, type Form,
} from './data/beau-nouveau-corpus.ts';
import {
  CARRIED_IDS, EVIDENCE_IDS, IMPORTED_BY_ID, IMPORTED_IDS, ONE_SOUND_EVIDENCE,
  READ_ONLY_ROWS, SOURCE_THEMES, displayRespell, importedFr, silentHId,
  silentHPartnerId, vowelRespell, vowelRowId,
} from './data/beau-nouveau-imported.ts';
import {
  BEAU_NOUVEAU_ACTS, BEAU_NOUVEAU_DECK_TRANCHE, BEAU_NOUVEAU_DICTEE_IDS,
  BEAU_NOUVEAU_ITEM_IDS, BEAU_NOUVEAU_LESSON, BEAU_NOUVEAU_SHEETS,
  BEAU_NOUVEAU_SPEAK_IDS, BORROW_SECTION_ID, CHAIN_SECTION_ID,
  ERRORS_SECTION_ID, GRID_SECTION_ID, HEAR_SECTION_ID, INVENTED_SECTION_ID,
  ONLY_PAIR_SECTION_ID, PAIRS_SECTION_ID, PLURAL_SECTION_ID, QUIZ_SECTION_ID,
  REASON_SECTION_ID, REVIEW_SECTION_ID, ROUNDUP_SECTION_ID, SCENARIO_SECTION_ID,
  SHEET_ID, SILENT_H_SECTION_ID,
} from './data/beau-nouveau-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = BEAU_NOUVEAU_LESSON;
const UNIT_ID = 'a2.16';

/** No grammar jargon on a learner surface. Invariants §8.
 *
 *  THE LINE IS MEASURED, the way a2.03 §7 asks. a2.03 counted the learner
 *  surfaces of the adjective arc and found `feminine` used 71 times by a1.13,
 *  `plural` 40, `noun` 115 by a1.16. Those are HOUSE VOCABULARY and this lesson
 *  uses them. What none of the neighbours uses even once is below.
 *
 *  `anti-hiatus` is the entry that hurts, because a1.20's grammarIntroduced
 *  uses it and it is the exact name for what act 3 teaches. Invariants §8 says
 *  grammarIntroduced may use the precise words and a card may not, so it is in
 *  this list and in this lesson's own grammarIntroduced.
 *
 *  Every entry is also checked in its -s plural, because `hasPhrase` is
 *  boundary-exact: a list holding `paradigm` does not catch `paradigms`, and
 *  a2.15 shipped exactly that on an act title, which is drawn on the resume
 *  interstitial. a2.15 §3. */
const JARGON = [
  'anti-hiatus', 'hiatus', 'elision', 'elide', 'proclitic', 'enchainement',
  'enchaînement', 'liaison', 'pre-vocalic', 'prevocalic', 'allomorph',
  'suppletion', 'suppletive', 'inflection', 'inflected', 'paradigm',
  'declension', 'morpheme', 'morphology', 'attributive', 'predicative',
  'prenominal', 'postnominal', 'phoneme', 'phonological', 'lexeme',
  'null-marked', 'geminate', 'epenthetic', 'grammatical', 'orthography',
  'first person', 'second person', 'third person', 'inflectional class',
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
 *  syllables with a full stop, so `/bɛ.laʁbʁ/` reads as a standalone `laʁbʁ`. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** Machine keys. Section ids, refs and accept-lists are not learner surfaces,
 *  and a guard that reads them fires on `s08-borrow` and on the wrong options a
 *  drill has to print. a2.14 §6: rename an identifier rather than growing an
 *  exception list nobody can reason about. */
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

const AUTHORED_ITEMS: Item[] = BEAU_NOUVEAU.map(toItem);
const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection);

console.log(`\n  a2.16 "Beau, nouveau, vieux"${DRY_RUN ? '  (dry run)' : ''}\n`);

/* ══════════════════════════════════════════════════════════════════════════
 *  COUNTS, AGAINST EXPLICIT CONSTANTS
 * ═══════════════════════════════════════════════════════════════════════ */

if (CORPUS_UNIT_ID !== UNIT_ID) die(`the corpus says the unit is ${CORPUS_UNIT_ID} and this batch says ${UNIT_ID}`);
if (LESSON.id !== LESSON_ID) die(`the corpus says the lesson is ${LESSON_ID} and the lesson says ${LESSON.id}`);
if (BEAU_NOUVEAU.length !== EXPECTED_AUTHORED) die(`${BEAU_NOUVEAU.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (GRID_ROWS.length !== EXPECTED_GRID_ROWS) die(`${GRID_ROWS.length} predicate rows, expected ${EXPECTED_GRID_ROWS}`);
if (PHRASE_ROWS.length !== EXPECTED_PHRASE_ROWS) die(`${PHRASE_ROWS.length} phrase rows, expected ${EXPECTED_PHRASE_ROWS}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (SOURCE_THEMES.length !== EXPECTED_SOURCE_THEMES) die(`imported out of ${SOURCE_THEMES.length} themes, expected ${EXPECTED_SOURCE_THEMES}`);
if (READ_ONLY_ROWS.length !== EXPECTED_READ_ONLY) die(`${READ_ONLY_ROWS.length} read-only rows, expected ${EXPECTED_READ_ONLY}`);
if (ADJ_ORDER.length !== EXPECTED_ADJECTIVES) die(`${ADJ_ORDER.length} adjectives, expected ${EXPECTED_ADJECTIVES}`);
if (FORM_ORDER.length !== EXPECTED_FORMS) die(`${FORM_ORDER.length} forms, expected ${EXPECTED_FORMS}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`${(LESSON.errorTriggers ?? []).length} triggers, expected ${EXPECTED_TRIGGERS}`);
if ((LESSON.drills ?? []).length !== EXPECTED_DRILLS) die(`${(LESSON.drills ?? []).length} drills, expected ${EXPECTED_DRILLS}`);
if ((LESSON.sheets ?? []).length !== EXPECTED_SHEETS) die(`${(LESSON.sheets ?? []).length} sheets, expected ${EXPECTED_SHEETS}`);
if (BEAU_NOUVEAU_DICTEE_IDS.length !== EXPECTED_DICTEE) die(`${BEAU_NOUVEAU_DICTEE_IDS.length} dictée targets, expected ${EXPECTED_DICTEE}`);
if (ALL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`${ALL_REPAIRS.length} respell repairs, expected ${EXPECTED_RESPELL_REPAIRS}`);
if (RESPELL_REPAIRS_VISIBLE.length !== EXPECTED_RESPELL_REPAIRS_VISIBLE) die(`${RESPELL_REPAIRS_VISIBLE.length} visible repairs, expected ${EXPECTED_RESPELL_REPAIRS_VISIBLE}`);
if (RESPELL_REPAIRS_INVISIBLE.length !== EXPECTED_RESPELL_REPAIRS_INVISIBLE) die(`${RESPELL_REPAIRS_INVISIBLE.length} invisible repairs, expected ${EXPECTED_RESPELL_REPAIRS_INVISIBLE}`);
if (RESPELL_REPAIRS_HOUSE.length !== EXPECTED_RESPELL_REPAIRS_HOUSE) die(`${RESPELL_REPAIRS_HOUSE.length} house-convention repairs, expected ${EXPECTED_RESPELL_REPAIRS_HOUSE}`);
if (RESPELL_ADDITIONS.length !== EXPECTED_RESPELL_ADDITIONS) die(`${RESPELL_ADDITIONS.length} respell additions, expected ${EXPECTED_RESPELL_ADDITIONS}`);
if (DRILL_ADDITIONS.length !== EXPECTED_DRILL_ADDITIONS) die(`${DRILL_ADDITIONS.length} drill additions, expected ${EXPECTED_DRILL_ADDITIONS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} quiz questions, expected ${EXPECTED_QUESTIONS}`);
if ((quizSection as { rounds?: unknown[] }).rounds?.length !== EXPECTED_ROUNDS) die(`${(quizSection as { rounds?: unknown[] }).rounds?.length} rounds, expected ${EXPECTED_ROUNDS}`);
console.log(`  counts        ${BEAU_NOUVEAU.length} authored · ${IMPORTED_IDS.length} imported from ${SOURCE_THEMES.length} themes · ${LESSON.sections.length} sections · ${EXPECTED_ACTS} acts · ${qs.length} questions`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE ONE HEADWORD THIS BUILD AUTHORS
 *
 *  The brief said all three third forms would be absent and that this lesson
 *  would author them. `bel` and `vieil` are published rows in this lesson's own
 *  home theme. ONE is authored, and the count is asserted so a later author who
 *  adds a second has to say why.
 * ═══════════════════════════════════════════════════════════════════════ */

const headwordRows = BEAU_NOUVEAU.filter((r) => r.role === 'naming');
if (headwordRows.length !== EXPECTED_AUTHORED_HEADWORDS) {
  die(`${headwordRows.length} authored headwords, expected ${EXPECTED_AUTHORED_HEADWORDS}.\n`
    + `  The brief predicted THREE. bel is fr.sons.adjectifs-essentiels.314 and vieil is .315, both published\n`
    + `  and both in this theme, and a2.03's own READ_NOT_IMPORTED already flagged them as a2.16's.`);
}
for (const r of headwordRows) {
  if (!AUTHORED_HEADWORDS[r.fr]) die(`${r.id} authors "${r.fr}", which is not in AUTHORED_HEADWORDS with a reason`);
  if (r.kind !== 'word') die(`${r.id} "${r.fr}" is a headword and its kind is ${r.kind}`);
  if ((r as { gender?: string }).gender) die(`${r.id} "${r.fr}" carries a gender. A gendered single-word row joins a1.03's ending population.`);
  if (/\s/.test(r.fr)) die(`${r.id} "${r.fr}" is a headword with a space in it. Bare adjectives only, no article.`);
}
console.log(`  headwords     ${headwordRows.length} authored: ${headwordRows.map((r) => r.fr).join(', ')}   (the brief predicted 3)`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS: FIVE WRITTEN FORMS, TWO SOUNDS, AND THE THIRD FORM IS THE FEMININE
 *
 *  This is the arithmetic the whole lesson rests on. It is asserted off the
 *  GRID constant, so a future author who "corrects" one respelling breaks the
 *  build here rather than shipping a grid that contradicts itself.
 * ═══════════════════════════════════════════════════════════════════════ */

if (ONE_SOUND_FORMS.length + OTHER_SOUND_FORMS.length !== FORM_ORDER.length) {
  die(`the two sound groups hold ${ONE_SOUND_FORMS.length} + ${OTHER_SOUND_FORMS.length} forms and there are ${FORM_ORDER.length}`);
}
for (const a of ADJ_ORDER) {
  const groupA = new Set(ONE_SOUND_FORMS.map((f) => formRespell(a, f)));
  const groupB = new Set(OTHER_SOUND_FORMS.map((f) => formRespell(a, f)));
  if (groupA.size !== 1) {
    die(`${a}: ${ONE_SOUND_FORMS.join(', ')} should be ONE sound and they respell as ${[...groupA].join(' / ')}.\n`
      + `  THE WHOLE LESSON IS THAT THE FORM BEFORE A VOWEL IS THE FEMININE. If you came here to make the short\n`
      + `  form sound different from the feminine, it does not, and fr.sons.adjectifs-essentiels.314 against\n`
      + `  fr.sons.consonnes.138 says so in rows two different people wrote.`);
  }
  if (groupB.size !== 1) die(`${a}: ${OTHER_SOUND_FORMS.join(' and ')} should be ONE sound and they respell as ${[...groupB].join(' / ')}`);
  if ([...groupA][0] === [...groupB][0]) die(`${a}: all five forms respell identically, so there is no contrast left to teach`);
  // AND THE DROP IS EXACT. feminine minus the last two letters IS the short
  // form, in all three, with no exception. It is what makes the reframe a rule
  // a learner can run rather than three facts to memorise.
  if (!dropCheck(a)) {
    die(`${a}: ${form(a, 'fem')} minus its last two letters is not ${form(a, 'vowel')}.\n`
      + `  The reframe says "drop its last two letters" and it is asserted, not assumed.`);
  }
}
console.log(`  the Owns      ${FORM_ORDER.length} forms and 2 sounds for all ${ADJ_ORDER.length}, and ${ADJ_ORDER.map((a) => `${form(a, 'fem')}-le=${form(a, 'vowel')}`).join(', ')}`);

/* THE GRID, EVERY COPY AGAINST EVERY OTHER COPY.
   a2.13 §6.2 and a2.14 §5. Fifteen cells appear FOUR times: the GRID constant,
   the row they resolve to, the tapTable in the flow, and the reference sheet. */

for (const a of ADJ_ORDER) {
  for (const f of FORM_ORDER) {
    if (f === 'vowel') {
      // The third form lives in an IMPORTED sentence, not an authored one, and
      // beau-nouveau-imported.ts refuses to load if the two have drifted. Here
      // the check is on the RESPELLING, and it is not a substring check.
      //
      // THE SHORT FORM'S RESPELLING NEVER APPEARS INTACT IN A PHRASE. Its final
      // consonant has moved onto the front of the next word — that is what the
      // form exists to do — so `bel arbre` is `beh-LAHRBR` and `BEL` is not in
      // it. The first version of this guard looked for the substring and failed
      // on a correct row; see the corpus header on vowelJoinConsonant.
      const sentence = importedFr(vowelRowId(a));
      if (!hasPhrase(sentence, form(a, 'vowel'))) die(`${vowelRowId(a)} is ${JSON.stringify(sentence)} and does not contain ${JSON.stringify(form(a, 'vowel'))}`);
      const rs = vowelRespell(a);
      const join = vowelJoinConsonant(a);
      if (!rs.toUpperCase().includes(`-${join.toUpperCase()}`)) {
        die(`${vowelRowId(a)} respells as ${JSON.stringify(rs)} and the ${join} of ${form(a, 'vowel')} does not open a syllable.\n`
          + `  The short form's last consonant runs onto the front of the next word. That is what the form is FOR,\n`
          + `  and a respelling that keeps ${formRespell(a, 'vowel')} intact spells out a pronunciation nobody uses.`);
      }
      if (new RegExp(`(^|[\\s-])${formRespell(a, 'vowel')}([\\s]|$)`, 'i').test(rs)) {
        die(`${vowelRowId(a)} respells as ${JSON.stringify(rs)} and keeps ${JSON.stringify(formRespell(a, 'vowel'))} as a standalone token. The consonant has to join the next word.`);
      }
      continue;
    }
    const id = cellId(a, f as Exclude<Form, 'vowel'>);
    const row = BEAU_NOUVEAU.find((r) => r.id === id);
    if (!row) die(`no authored row for ${a}/${f}`);
    const expected = `${PREDICATE_SUBJECT[f as Exclude<Form, 'vowel'>]} ${form(a, f)}.`;
    if (row.fr !== expected) die(`${id} is ${JSON.stringify(row.fr)} and the GRID constant builds ${JSON.stringify(expected)}`);
    if (!(row.respell ?? '').endsWith(formRespell(a, f))) {
      die(`${id} respells as ${JSON.stringify(row.respell)} and the GRID constant says the adjective is ${JSON.stringify(formRespell(a, f))}`);
    }
    if (row.adj !== a || row.form !== f) die(`${id} is tagged ${row.adj}/${row.form} and should be ${a}/${f}`);
  }
}

const grid = byId(GRID_SECTION_ID) as { rows?: { cells: string[] }[] } | undefined;
if (!grid?.rows) die(`${GRID_SECTION_ID} has no rows`);
if (grid.rows.length !== ADJ_ORDER.length) die(`${GRID_SECTION_ID} has ${grid.rows.length} rows and there are ${ADJ_ORDER.length} adjectives`);
grid.rows.forEach((r, i) => {
  const a = ADJ_ORDER[i];
  FORM_ORDER.forEach((f, j) => {
    if (r.cells[j] !== form(a, f)) die(`${GRID_SECTION_ID} row ${i} cell ${j} is ${JSON.stringify(r.cells[j])} and the corpus says ${JSON.stringify(form(a, f))}`);
  });
});
/* AND THE THIRD FORM IS THE SECOND COLUMN, NOT THE LAST. It is built out of the
   feminine and used in place of the plain form, so it belongs between them.
   Putting it fifth is the version of this screen that teaches three exceptions
   rather than one rule, and it is the change a later author is most likely to
   make on tidiness grounds. */
if (FORM_ORDER[1] !== 'vowel') die(`the third form is column ${FORM_ORDER.indexOf('vowel') + 1} of the grid and it belongs SECOND, between the plain form it replaces and the feminine it is made of`);

const sheet = BEAU_NOUVEAU_SHEETS[0];
const sheetGrid = sheet.sections?.find((s) => (s as { id?: string }).id === 'sheet-grid') as { rows?: string[][] } | undefined;
const sheetSay = sheet.sections?.find((s) => (s as { id?: string }).id === 'sheet-say') as { rows?: string[][] } | undefined;
if (!sheetGrid?.rows || !sheetSay?.rows) die('the sheet is missing sheet-grid or sheet-say');
sheetGrid.rows.forEach((r, i) => {
  const a = ADJ_ORDER[i];
  FORM_ORDER.forEach((f, j) => {
    if (r[j + 1] !== form(a, f)) die(`sheet-grid row ${i} cell ${j} is ${JSON.stringify(r[j + 1])} and the corpus says ${JSON.stringify(form(a, f))}`);
  });
});
sheetSay.rows.forEach((r, i) => {
  const a = ADJ_ORDER[i];
  FORM_ORDER.forEach((f, j) => {
    if (r[j + 1] !== formRespell(a, f)) die(`sheet-say row ${i} cell ${j} is ${JSON.stringify(r[j + 1])} and the corpus says ${JSON.stringify(formRespell(a, f))}`);
  });
});
/* THE COLUMN HEADERS FIT. Found on a Pixel 6: the five-column grid broke three
   of the first set MID-WORD, and every host gate was green because the strings
   are valid and only the width is wrong. `plain` and `vowel` are five characters
   and set on one line; `woman` is five and did not, because w and m are the two
   widest lowercase glyphs. Ledger §a2.14-13 in a third field. */
for (const f of FORM_ORDER) {
  for (const w of FORM_LABEL[f].split(/[\s,]+/).filter(Boolean)) {
    if (w.length > HEADER_WORD_MAX) {
      die(`the column header ${JSON.stringify(FORM_LABEL[f])} holds the word ${JSON.stringify(w)}, which is ${w.length} characters. `
        + `The five-column grid breaks anything past ${HEADER_WORD_MAX} MID-WORD on a Pixel 6, and no host gate can see it.`);
    }
    // CALIBRATED TO THE OBSERVATION, and the first version of this check was one
    // glyph too strict: it rejected `vowel`, which rendered on one line.
    //   plain   5 chars, 0 wide glyphs   ONE LINE
    //   vowel   5 chars, 1 wide glyph    ONE LINE
    //   woman   5 chars, 2 wide glyphs   BROKE  woma|n
    //   Several 7 chars, 0 wide glyphs   BROKE  Severa|l
    // So the budget is six characters, and at most one w or m past four.
    const wide = (w.match(/[wm]/gi) ?? []).length;
    if (w.length > 4 && wide > 1) {
      die(`the column header ${JSON.stringify(FORM_LABEL[f])} holds ${JSON.stringify(w)}: ${w.length} characters with ${wide} wide glyphs. `
        + 'w and m are the two widest lowercase glyphs. `woman` broke at five characters with two of them '
        + 'and `vowel` did not at five with one.');
    }
  }
}
console.log(`  grid          ${ADJ_ORDER.length}x${FORM_ORDER.length} agrees across the corpus, ${GRID_SECTION_ID}, sheet-grid and sheet-say; headers fit`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CONTRAST PAIRS, THE SECOND LAYOUT CLAIM, AND THE AUDIO CONSTRAINT
 *
 *  "un beau livre and un bel appartement belong side by side, audible, one tap
 *  each ... recorded adjacently. Recorded apart, the learner compares two
 *  performances instead of two sounds and the entire teaching is lost."
 * ═══════════════════════════════════════════════════════════════════════ */

const pairs = byId(PAIRS_SECTION_ID) as { type?: string; rows?: { cells: string[]; detail?: { body?: string } }[] } | undefined;
if (!pairs?.rows) die(`${PAIRS_SECTION_ID} has no rows`);
if (pairs.type !== 'tapTable') die(`${PAIRS_SECTION_ID} is a ${pairs.type} and the contrast has to be AUDIBLE, one tap per row`);
if (pairs.rows.length !== ADJ_ORDER.length) die(`${PAIRS_SECTION_ID} has ${pairs.rows.length} rows and there are ${ADJ_ORDER.length} pairs`);
pairs.rows.forEach((r, i) => {
  const a = ADJ_ORDER[i];
  if (r.cells[1] !== form(a, 'plain')) die(`${PAIRS_SECTION_ID} row ${i} column 2 is ${JSON.stringify(r.cells[1])} and the consonant-initial half must be the PLAIN form ${JSON.stringify(form(a, 'plain'))}`);
  if (r.cells[2] !== form(a, 'vowel')) die(`${PAIRS_SECTION_ID} row ${i} column 3 is ${JSON.stringify(r.cells[2])} and the vowel-initial half must be the SHORT form ${JSON.stringify(form(a, 'vowel'))}`);
  // The order is the claim: consonant first, then vowel. Reversed, the screen
  // shows the exception before the rule.
  const body = r.detail?.body ?? '';
  const iC = body.indexOf(form(a, 'plain'));
  const iV = body.indexOf(form(a, 'vowel'));
  if (iC < 0 || iV < 0 || iC > iV) die(`${PAIRS_SECTION_ID} row ${i} detail does not put the plain form before the short one`);
});
/* THE CONSONANT-INITIAL NOUN IS HELD CONSTANT. It is the control: if it moved
   too, the pair would differ by two things and the screen would prove nothing. */
const consonantTails = ADJ_ORDER.map((a) => BEAU_NOUVEAU.find((r) => r.id === phraseId(a))!.fr.split(' ').pop());
if (new Set(consonantTails).size !== 1) {
  die(`the three consonant-initial phrases end in ${consonantTails.join(', ')}. They must all end in the SAME noun, or the pair differs by two things.`);
}
/* AND THE AUDIO BRIEF SAYS "ONE TAKE" IN AS MANY WORDS, for both pairs the
   brief names. Invariants §10: a constraint on how something is recorded
   becomes invisible the moment the clip is delivered, so it is pinned here. */
const recorded = (LESSON.audio?.recorded ?? []) as { id: string; desc: string; clipIds?: string[] }[];
const pairTake = recorded.find((r) => r.id === 'rec-a2-16-pairs');
if (!pairTake) die('there is no rec-a2-16-pairs take, and the contrast is the lesson');
for (const phrase of ['ONE TAKE', 'RECORDED APART']) {
  if (!pairTake.desc.toUpperCase().includes(phrase)) die(`rec-a2-16-pairs does not say ${JSON.stringify(phrase)}, and that constraint cannot be recovered once the clip exists`);
}
for (const a of ADJ_ORDER) {
  const c = BEAU_NOUVEAU.find((r) => r.id === phraseId(a))!.fr;
  const v = importedFr(vowelRowId(a));
  if (!(pairTake.clipIds ?? []).includes(c) || !(pairTake.clipIds ?? []).includes(v)) {
    die(`rec-a2-16-pairs does not carry both halves of the ${a} pair`);
  }
  if ((pairTake.clipIds ?? []).indexOf(c) + 1 !== (pairTake.clipIds ?? []).indexOf(v)) {
    die(`rec-a2-16-pairs lists the ${a} pair non-adjacently, and adjacency IS the instruction`);
  }
}
// The silent-h pair is the second one the brief names by hand.
if (!(pairTake.clipIds ?? []).includes(importedFr(silentHId))) die('rec-a2-16-pairs does not carry the silent-h line, which is the second pair the brief briefs by name');
console.log(`  contrast      ${PAIRS_SECTION_ID} is a tapTable, ${ADJ_ORDER.length} pairs, one noun held constant, and both pairs briefed as one take`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE THIRD FORM HAS NO PREDICATE CELL
 *
 *  « Il est bel. » is not French. `cellId(adj, 'vowel')` does not typecheck, so
 *  the type system carries half of this; the other half is that no production
 *  surface may print it either, and it appears exactly where it is marked wrong.
 * ═══════════════════════════════════════════════════════════════════════ */

const PREDICATE_SHORT = ADJ_ORDER.flatMap((a) =>
  Object.values(PREDICATE_SUBJECT).map((subj) => `${subj} ${form(a, 'vowel')}`));
const legalWrong = new Set([INVENTED_SECTION_ID, QUIZ_SECTION_ID]);
/* BOUNDARY-AWARE, AND THE FIRST VERSION OF THIS GUARD WAS NOT.
   `.includes("Elle est bel")` fires on « Elle est belle. », which is the grid's
   own hero row, because the short form is a PREFIX of the feminine in all three
   adjectives. That is not a corner case here: it is the central fact of the
   lesson, so any guard in this build that searches for a short form has to
   check the character after it. Invariants §0, and it cost one run. */
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '?';
  for (const bad of PREDICATE_SHORT) {
    if (strings(s).some((x) => hasPhrase(x, bad)) && !legalWrong.has(sid)) {
      die(`${sid} prints ${JSON.stringify(bad)}. The short form only exists to run into a following word, so it cannot stand after a verb, and only ${[...legalWrong].join(' and ')} may show it as a marked error.`);
    }
  }
}
const predicateShownWrong = LESSON.sections.filter((s) => legalWrong.has((s as { id?: string }).id ?? '')
  && strings(s).some((x) => PREDICATE_SHORT.some((bad) => hasPhrase(x, bad))));
if (predicateShownWrong.length < 2) {
  die(`the short-form-in-a-predicate error is drilled in ${predicateShownWrong.length} of the two sections that may show it. A reservation list that has emptied has stopped guarding.`);
}
console.log(`  no predicate  « Il est ${form('beau', 'vowel')}. » appears only in ${predicateShownWrong.length} sections, both as a marked error`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE INVENTED FEMININE, IN BOTH DIRECTIONS
 *
 *  The brief's second trap. It is INAUDIBLE — the short form and the feminine
 *  are one sound — so only a written surface can catch it, and it may appear
 *  only where it is marked as wrong.
 * ═══════════════════════════════════════════════════════════════════════ */

for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '?';
  const hit = strings(s).find((x) => INVENTED_SHAPE.test(x));
  if (hit && !legalWrong.has(sid)) {
    die(`${sid} prints an invented feminine: ${JSON.stringify(hit.slice(0, 80))}\n  Only ${[...legalWrong].join(' and ')} may, and only as a marked error.`);
  }
}
const inventedHomes = LESSON.sections.filter((s) => legalWrong.has((s as { id?: string }).id ?? '')
  && strings(s).some((x) => INVENTED_SHAPE.test(x)));
if (inventedHomes.length !== legalWrong.size) {
  die(`the invented feminine is drilled in ${inventedHomes.length} of the ${legalWrong.size} sections that may show it, and it is the trap this lesson exists to stop`);
}
/* AND IT MUST BE TESTED BY A WRITTEN SURFACE. mcq is recognition; the claim is
   that the learner cannot hear the mistake, so they have to correct it in
   writing. errorSpot is the only format that makes them. */
const inventedFixes = qs.filter((q) => q.format === 'errorSpot' && INVENTED_SHAPE.test(q.prompt ?? ''));
if (inventedFixes.length < 2) {
  die(`${inventedFixes.length} errorSpot questions ask the learner to fix an invented feminine, and at least 2 are needed.\n`
    + `  mcq is recognition. The whole claim of this trap is that the ear signs the mistake off, so the exam has to\n`
    + `  make the learner produce the right form in writing. Corrections §5.`);
}
/* AND NO EAR QUESTION MAY ASK ABOUT IT, because there is nothing to hear. */
for (const q of qs) {
  if (q.format !== 'listenChoose') continue;
  if ((q.opts ?? []).some((o) => INVENTED_SHAPE.test(o))) die(`a listenChoose offers an invented feminine as an option, and it is the same sound as the right answer`);
}
console.log(`  invented fem  pinned to ${inventedHomes.length} sections, ${inventedFixes.length} errorSpot questions, 0 ear questions`);

/* ══════════════════════════════════════════════════════════════════════════
 *  NO EAR QUESTION MAY ASK BETWEEN TWO FORMS THAT ARE ONE SOUND
 *
 *  Corrections §5. THIS LESSON HAS MORE HOMOPHONE GROUPS THAN ANY IN THE BAND,
 *  because five written forms collapse into two sounds. The plain-against-short
 *  contrast is the ONLY thing a listenChoose can legally ask about, and the
 *  guard proves that rather than the report claiming it.
 * ═══════════════════════════════════════════════════════════════════════ */

// The groups are declared in the corpus AND re-derived here off the GRID, so a
// hand-maintained list that has drifted from the respellings fails.
const derivedGroups: string[][] = ADJ_ORDER.flatMap((a) => {
  const bySound = new Map<string, string[]>();
  for (const f of FORM_ORDER) {
    const k = formRespell(a, f);
    bySound.set(k, [...new Set([...(bySound.get(k) ?? []), form(a, f)])]);
  }
  return [...bySound.values()];
});
for (const g of derivedGroups) {
  const declared = HOMOPHONE_GROUPS.find((d) => g.every((x) => d.includes(x)));
  if (!declared) die(`the respellings put ${g.join(', ')} in one sound group and HOMOPHONE_GROUPS does not`);
}
let earChecked = 0;
for (const q of qs) {
  if (q.format !== 'listenChoose') continue;
  earChecked += 1;
  const opts = q.opts ?? [];
  for (const group of derivedGroups) {
    for (const x of group) {
      for (const y of group) {
        if (x === y) continue;
        for (let i = 0; i < opts.length; i += 1) {
          for (let j = 0; j < opts.length; j += 1) {
            if (i === j) continue;
            // Fires only when two options differ ONLY by a member of one group,
            // so an option pair that also differs by its noun stays legal.
            if (opts[i].replace(x, y) === opts[j]) {
              die(`a listenChoose offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}, which are one sound. Corrections §5: marking one right certifies a bug.`);
            }
          }
        }
      }
    }
  }
}
/* AND EVERY EAR QUESTION MUST TURN ON THE ONE PAIR THAT IS AUDIBLE. Refusing
   the illegal ones is not enough: an ear question that asks something trivial
   passes the check above and teaches nothing. */
const [audA, audB] = AUDIBLE_PAIR;
for (const q of qs) {
  if (q.format !== 'listenChoose') continue;
  const opts = q.opts ?? [];
  const turnsOnIt = ADJ_ORDER.some((a) =>
    opts.some((o) => hasPhrase(o, form(a, audA))) && opts.some((o) => hasPhrase(o, form(a, audB))));
  if (!turnsOnIt) {
    die(`a listenChoose does not contrast the ${audA} form against the ${audB} form, and that is the only audible distinction in this lesson`);
  }
}
if (earChecked < 2) die(`${earChecked} listenChoose questions, and the one audible contrast deserves at least two`);
console.log(`  homophones    ${derivedGroups.length} sound groups derived from the respellings, ${earChecked} ear questions and all of them on the ${audA}/${audB} pair`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE PLURAL: -x ON TWO OF THEM, NOTHING ON THE THIRD
 * ═══════════════════════════════════════════════════════════════════════ */

for (const a of PLURAL_X) {
  if (!form(a, 'plainPl').endsWith('x')) {
    die(`${a}'s plural is ${JSON.stringify(form(a, 'plainPl'))} and it MUST end in x.\n`
      + `  If you came here to "fix" it to an s, do not: beaus and nouveaus are not French. The -eaux plural is\n`
      + `  claimed by no unit at any level, which is why this lesson owns it.`);
  }
  if (form(a, 'plainPl') !== `${form(a, 'plain')}x`) {
    die(`${a}'s plural is not its singular plus an x: ${form(a, 'plain')} against ${form(a, 'plainPl')}`);
  }
}
/* AND THE THIRD ONE'S MASCULINE PLURAL IS ITS SINGULAR. DELIBERATELY.
   The brief asks for this by name. a1.14 owns the fact for this exact word and
   a2.03 generalised it to the class, so both are NAMED rather than re-taught. */
if (form(PLURAL_UNCHANGED, 'plain') !== form(PLURAL_UNCHANGED, 'plainPl')) {
  die(`${PLURAL_UNCHANGED}'s singular is ${JSON.stringify(form(PLURAL_UNCHANGED, 'plain'))} and its plural is ${JSON.stringify(form(PLURAL_UNCHANGED, 'plainPl'))}.\n`
    + `  THEY MUST BE THE SAME WORD. A word already ending in -x has nowhere to put a plural s, so vieuxs is not\n`
    + `  French and never has been. ${PLURAL_UNCHANGED_UNITS.join(' teaches it for this word and ')} generalises it to\n`
    + `  the class. If you came here to add the missing s, do not.`);
}
if (formRespell(PLURAL_UNCHANGED, 'plain') !== formRespell(PLURAL_UNCHANGED, 'plainPl')) {
  die(`the two identical ${PLURAL_UNCHANGED} cells respell differently`);
}
const pluralSection = byId(PLURAL_SECTION_ID);
if (!pluralSection) die(`${PLURAL_SECTION_ID} does not exist and it is the section that teaches the plural`);
// LITERAL, not PLURAL_UNCHANGED_UNITS. Looping over the constant the section
// renders is comparing the content to itself, and the mutation harness renamed
// it to 'the earlier lessons' and passed every layer.
for (const u of PLURAL_OWNERS_LITERAL) {
  if (!strings(pluralSection).some((s) => hasPhrase(s, u))) {
    die(`${PLURAL_SECTION_ID} does not name ${u}, and pointing at the lesson that already owns two thirds of this is the teaching`);
  }
}
/* The over-pluralised forms appear ONLY where they are marked as wrong. */
const overUses = LESSON.sections.filter((s) => strings(s).some((x) => OVER_PLURALISED_SHAPE.test(x)));
const legalOver = new Set([INVENTED_SECTION_ID, QUIZ_SECTION_ID, ERRORS_SECTION_ID, REVIEW_SECTION_ID, PLURAL_SECTION_ID]);
for (const s of overUses) {
  const sid = (s as { id?: string }).id ?? '?';
  if (!legalOver.has(sid)) die(`${sid} prints an over-pluralised form. Only ${[...legalOver].join(', ')} may, and only as a marked error.`);
}
if (overUses.length === 0) die(`nothing anywhere prints ${OVER_PLURALISED[0]} as an error, so the guard is guarding nothing`);
console.log(`  the plural    ${PLURAL_X_FORMS.join('/')} take -x, ${form(PLURAL_UNCHANGED, 'plainPl')} = ${form(PLURAL_UNCHANGED, 'plain')}, and ${PLURAL_UNCHANGED_UNITS.join(' + ')} are both named`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE BACK-REFERENCES THE BRIEF ASKS FOR BY NAME
 * ═══════════════════════════════════════════════════════════════════════ */

const reason = byId(REASON_SECTION_ID);
if (!reason) die(`${REASON_SECTION_ID} does not exist and it is where sons.07 is quoted`);
if (!strings(reason).some((s) => hasPhrase(s, ELISION_UNIT))) die(`${REASON_SECTION_ID} does not name ${ELISION_UNIT} by unit id, and the brief asks for it by name`);
/* AND IT QUOTES THE REFRAME VERBATIM. A paraphrase is not the connection: the
   whole value is that the learner recognises a sentence they have already read
   in a pronunciation lesson. */
const s07Reframe = 'Two vowels collide, the little word gives way.';
if (!strings(reason).some((s) => s.includes(s07Reframe))) die(`${REASON_SECTION_ID} does not quote sons.07's reframe verbatim: ${JSON.stringify(s07Reframe)}`);
const chain = byId(CHAIN_SECTION_ID);
if (!chain) die(`${CHAIN_SECTION_ID} does not exist`);
if (!strings(chain).some((s) => hasPhrase(s, 'a1.17'))) die(`${CHAIN_SECTION_ID} does not name a1.17, whose ma-to-mon is the same operation in the other direction`);
const silentH = byId(SILENT_H_SECTION_ID);
if (!silentH) die(`${SILENT_H_SECTION_ID} does not exist`);
if (!strings(silentH).some((s) => hasPhrase(s, ELISION_UNIT))) die(`${SILENT_H_SECTION_ID} does not name ${ELISION_UNIT}, which owns h muet against h aspiré`);
/* The silent-h section shows the two rows that make the point, and shows them
   in that order: the vowel-letter row first, then the silent-h one. */
const hEx = silentH as { examples?: { fr: string }[] };
if (!hEx.examples) die(`${SILENT_H_SECTION_ID} has no examples`);
if (hEx.examples[0].fr !== importedFr(silentHPartnerId)) die(`${SILENT_H_SECTION_ID} example 0 must be ${JSON.stringify(importedFr(silentHPartnerId))}, the ordinary vowel case`);
if (hEx.examples[1].fr !== importedFr(silentHId)) die(`${SILENT_H_SECTION_ID} example 1 must be ${JSON.stringify(importedFr(silentHId))}, the silent-h case`);
/* AND THE TWO ROWS DIFFER BY THE NOUN ALONE, which is what makes them evidence
   rather than two sentences. */
const stem = (s: string) => s.replace(/\s+\S+\.$/, '');
if (stem(importedFr(silentHPartnerId)) !== stem(importedFr(silentHId))) {
  die(`the silent-h pair is not minimal: ${JSON.stringify(importedFr(silentHPartnerId))} against ${JSON.stringify(importedFr(silentHId))}`);
}
console.log(`  back-refs     ${ELISION_UNIT} quoted verbatim in ${REASON_SECTION_ID}, a1.17 in ${CHAIN_SECTION_ID}, and the h pair is minimal`);

/* ══════════════════════════════════════════════════════════════════════════
 *  PLACEMENT IS NOT TAUGHT, SCOPED TO PRODUCTION SURFACES
 *
 *  The brief asks for the ban to be scoped rather than absolute, because a1.16
 *  IS named in one line and the naming is required. What may not happen is a
 *  screen that TEACHES where the word goes.
 * ═══════════════════════════════════════════════════════════════════════ */

const PRODUCTION_IDS = new Set([GRID_SECTION_ID, PAIRS_SECTION_ID, BORROW_SECTION_ID, PLURAL_SECTION_ID, INVENTED_SECTION_ID]);
const PLACEMENT_TEACHING = ['goes after the noun', 'goes before the noun', 'comes after the noun', 'after the thing it describes', 'des becomes de'];
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '?';
  if (!PRODUCTION_IDS.has(sid)) continue;
  for (const p of PLACEMENT_TEACHING) {
    if (strings(s).some((x) => hasPhrase(x, p))) die(`${sid} teaches placement (${JSON.stringify(p)}), which is a1.16's`);
  }
}
/* AND -ment IS a2.17's, guarded by the THING rather than by the letters.
   a2.03 §ADVERB_SHAPE found that a suffix guard fires on `appartement`, and
   THIS LESSON PRINTS `appartement` in its scene and its reading passage. */
for (const f of ADVERB_MUST_FIRE) if (!ADVERB_SHAPE.test(f)) die(`ADVERB_SHAPE does not fire on ${JSON.stringify(f)}, so it is guarding nothing`);
for (const f of ADVERB_MUST_NOT_FIRE) if (ADVERB_SHAPE.test(f)) die(`ADVERB_SHAPE fires on ${JSON.stringify(f)}, which is a legitimate word this lesson prints`);
const learnerText = [
  ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
  ...strings(LESSON.acts ?? []), ...strings(LESSON.drills ?? []),
  LESSON.intro ?? '', ...strings(LESSON.overview ?? {}),
  // a2.03 §4: two mutations wrote a neighbour's subject into an authored row's
  // `notes` and ALL THREE LAYERS MISSED THEM, because every build in this band
  // walks the LESSON only. The corpus rows are content this build authored.
  ...BEAU_NOUVEAU.flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']),
].join('\n');
if (ADVERB_SHAPE.test(learnerText)) {
  const hit = learnerText.split('\n').find((l) => ADVERB_SHAPE.test(l));
  die(`a -ment adverb appears on a learner surface, and that is ${ADVERB_UNIT}'s: ${JSON.stringify((hit ?? '').slice(0, 90))}`);
}
console.log(`  neighbours    placement not taught on ${PRODUCTION_IDS.size} production surfaces, 0 -ment adverbs, and the shape fires on ${ADVERB_MUST_FIRE.length} and spares ${ADVERB_MUST_NOT_FIRE.length}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME, AND THE JARGON WALK
 * ═══════════════════════════════════════════════════════════════════════ */

if (LESSON.reframe !== REFRAME) die(`the lesson's reframe is ${JSON.stringify(LESSON.reframe)} and the corpus says ${JSON.stringify(REFRAME)}`);
/* a2.03 §14 row 26: replacing the REFRAME constant replaces it everywhere, so
   the count does not move and a count-only guard passes. What is guardable is
   the LENGTH: doctrine §B.4 asks for something runnable mid-utterance and
   density.logic.ts caps an `xl` string at 12 words. */
const reframeWords = REFRAME.trim().split(/\s+/).length;
if (reframeWords > REFRAME_MAX_WORDS) {
  die(`the reframe is ${reframeWords} words and the cap is ${REFRAME_MAX_WORDS}. Doctrine §B.4: could the learner run it in the half-second before the noun?`);
}
const reframeUses = countPhrase(strings(LESSON.sections).join('\n') + '\n' + strings(LESSON.sheets ?? []).join('\n') + '\n' + strings(LESSON.terms ?? {}).join('\n'), REFRAME);
const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
if (reframeUses !== EXPECTED_REFRAME_USES) die(`the reframe is used ${reframeUses} times, expected ${EXPECTED_REFRAME_USES}`);
if (reframeSections !== EXPECTED_REFRAME_SECTIONS) die(`the reframe appears in ${reframeSections} sections, expected ${EXPECTED_REFRAME_SECTIONS}`);

for (const j of JARGON) {
  for (const term of [j, `${j}s`]) {
    // prose() and display() BOTH, so a cardDeck `sub` is seen. a2.15 §3.
    for (const [label, walk] of [['prose', prose], ['display', display]] as const) {
      const hit = walk(LESSON.sections).concat(walk(LESSON.sheets ?? []), walk(LESSON.terms ?? {}),
        walk(LESSON.acts ?? []), walk(LESSON.drills ?? []),
        [LESSON.intro ?? ''], walk(LESSON.overview ?? {}),
        BEAU_NOUVEAU.flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']))
        .find((s) => hasPhrase(s, term));
      if (hit) die(`grammar jargon on a learner surface (${label} walk): ${JSON.stringify(term)} in ${JSON.stringify(hit.slice(0, 100))}`);
    }
  }
}
/* `intro` IN ITS OWN ASSERTION. a2.11 shipped "third person" there while every
   other gate was green, because the walk stopped at `sections`. Pinned so a
   later author who trims the walk back fails with the reason. */
if (!LESSON.intro || LESSON.intro.length < 80) die('`intro` is missing or too short, and it is drawn on the lesson overview card AND the lesson cover');
for (const j of JARGON) if (hasPhrase(LESSON.intro, j) || hasPhrase(LESSON.intro, `${j}s`)) die(`\`intro\` holds the jargon ${JSON.stringify(j)}, and it is drawn on two screens`);
/* House copy. No em dash, and no "honest". */
const houseText = display(LESSON.sections).concat(display(LESSON.sheets ?? []), display(LESSON.terms ?? {}),
  display(LESSON.acts ?? []), display(LESSON.drills ?? []), [LESSON.intro ?? ''], display(LESSON.overview ?? {}),
  BEAU_NOUVEAU.flatMap((r) => [r.fr, r.en ?? '', r.notes ?? '']));
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
/* Ledger §a2.03-3: the term-chip ROW budget is 37, measured off a Pixel 6, and
   a first version of that guard set at 32 failed two screens that were fine. */
for (const s of LESSON.sections) {
  const chips = ((s as { terms?: string[] }).terms ?? []).map((k) => (LESSON.terms ?? {})[k]?.term ?? k);
  if (chips.length > 3) die(`${(s as { id?: string }).id} declares ${chips.length} term chips and the renderer shows 3`);
  const width = chips.join('').length + Math.max(0, chips.length - 1);
  if (width > TERM_CHIP_ROW_MAX) die(`${(s as { id?: string }).id} declares chips totalling ${width} characters (${chips.join(' + ')}) and the measured row budget is ${TERM_CHIP_ROW_MAX}`);
}
/* a2.14 §14: `frSub` is the one field that is deliberately French, and a2.14
   put an English constant in one. A crude but real check: an frSub that is all
   ASCII and holds a common English function word is almost certainly English. */
const ENGLISH_TELLS = ['the', 'and', 'what', 'you', 'is', 'of', 'that', 'with', 'form', 'word'];
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
for (const act of BEAU_NOUVEAU_ACTS) {
  for (const sid of act.sections) {
    if (!sectionIds.includes(sid)) die(`act ${act.id} names ${sid}, which is not a section`);
    if (claimed.has(sid)) die(`${sid} is claimed by ${claimed.get(sid)} and by ${act.id}`);
    claimed.set(sid, act.id);
  }
}
for (const sid of sectionIds) if (!claimed.has(sid)) die(`${sid} is in no act`);

/* THE OWNS OUTWEIGHS THE PARADIGM. Doctrine §B.5, asserted rather than felt. */
const ownsAct = BEAU_NOUVEAU_ACTS.find((a) => a.id === 'act3');
const paradigmAct = BEAU_NOUVEAU_ACTS.find((a) => a.id === 'act2');
if (!ownsAct || !paradigmAct) die('act2 or act3 is missing');
if (ownsAct.sections.length <= paradigmAct.sections.length) {
  die(`the Owns act has ${ownsAct.sections.length} missions and the paradigm act has ${paradigmAct.sections.length}.\n`
    + `  Doctrine §B.5: if the paradigm gets more missions than the Owns, the wrong lesson was built.`);
}

/* EVERY itemId IS DRAWN OR RELEASED. a1.08 shipped forty-three that resolved
   perfectly and were rendered by nothing. a2.13 §6.1. */
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
const released = new Set(BEAU_NOUVEAU_DECK_TRANCHE.flat());
const orphan = BEAU_NOUVEAU_ITEM_IDS.filter((id) => !drawn.has(id) && !released.has(id));
if (orphan.length) die(`${orphan.length} itemIds are neither drawn by a section nor released by a tranche:\n  ${orphan.join('\n  ')}`);
const ghosts = [...released].filter((id) => !BEAU_NOUVEAU_ITEM_IDS.includes(id));
if (ghosts.length) die(`a tranche releases ${ghosts.length} ids the lesson does not declare: ${ghosts.join(', ')}`);
if (BEAU_NOUVEAU_DECK_TRANCHE.length !== EXPECTED_ACTS) die(`${BEAU_NOUVEAU_DECK_TRANCHE.length} tranches and ${EXPECTED_ACTS} acts`);
/* AND NOTHING IS RELEASED BEFORE THE ACT THAT SHOWS IT. */
for (let i = 0; i < BEAU_NOUVEAU_DECK_TRANCHE.length; i += 1) {
  const shownBy = new Set<string>();
  for (let j = 0; j <= i; j += 1) {
    for (const sid of BEAU_NOUVEAU_ACTS[j].sections) {
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
      // A row is also "shown" if its French is printed on a card in that act.
      for (const r of BEAU_NOUVEAU) if (strings(s).some((x) => x.includes(r.fr))) shownBy.add(r.id);
      for (const id of IMPORTED_IDS) if (strings(s).some((x) => x.includes(importedFr(id)))) shownBy.add(id);
    }
  }
  for (const id of BEAU_NOUVEAU_DECK_TRANCHE[i]) {
    if (!shownBy.has(id)) die(`tranche ${i} releases ${id} and no act up to and including act ${i + 1} puts it on a screen`);
  }
}
/* EVERY SPEAK ITEM CARRIES voiceflash. For the four imported sentences that is
   true ONLY because this build adds it, so the check reads the post-transaction
   intent rather than the manifest. */
for (const id of BEAU_NOUVEAU_SPEAK_IDS) {
  const authored = BEAU_NOUVEAU.find((r) => r.id === id);
  if (authored) {
    if (!authored.drills.includes('voiceflash')) die(`the speak mission names ${id} and it has no voiceflash drill`);
    continue;
  }
  const imported = IMPORTED_BY_ID.get(id);
  if (!imported) die(`the speak mission names ${id}, which is neither authored nor imported`);
  const willHave = new Set([...(imported.drills ?? []), ...(DRILL_ADDITIONS.find((d) => d.id === id)?.add ?? [])]);
  if (!willHave.has('voiceflash')) die(`the speak mission names ${id}, which has no voiceflash drill and gains none in this build`);
}
console.log(`  reachability  ${BEAU_NOUVEAU_ITEM_IDS.length} items, all drawn or released · act3 ${ownsAct.sections.length} missions against act2's ${paradigmAct.sections.length} · ${BEAU_NOUVEAU_SPEAK_IDS.length} speak items all voiceflash`);

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
/* EACH ROUND LEADS ON A DIFFERENT TRIGGER. drillForRound fires the drill of the
   FIRST resolving target only and then stops, so a drill never named first can
   never fire. a1.05 ships two such drills and its own test fails on them. */
const rounds = (quizSection as { rounds: { id: string; targets: string[] }[] }).rounds;
const leads = rounds.map((r) => r.targets[0]);
if (new Set(leads).size !== leads.length) die(`two rounds lead on the same trigger: ${leads.join(', ')}`);
const triggerIds = new Set((LESSON.errorTriggers ?? []).map((t) => t.id));
for (const r of rounds) for (const t of r.targets) if (!triggerIds.has(t)) die(`round ${r.id} targets ${t}, which is not a trigger`);
const unled = [...triggerIds].filter((t) => !leads.includes(t));
if (unled.length) die(`${unled.join(', ')} lead no round, so their drills can never fire`);
/* AND EVERY DRILL THAT NAMES ITEM IDS NAMES REAL ONES. Passing display strings
   validates as broken ids and the drill silently scores against nothing. */
for (const d of LESSON.drills ?? []) {
  const items = (d as { items?: string[] }).items ?? [];
  for (const id of items) {
    if (!BEAU_NOUVEAU_ITEM_IDS.includes(id)) die(`drill ${d.id} names ${JSON.stringify(id)}, which is not an itemId of this lesson`);
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
/* EVERY FREE-TEXT QUESTION ACCEPTS THE ANSWER IT DISPLAYS, through the REAL
   matchesAccept rather than a copy. */
for (const q of qs) {
  if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
  if (!q.answer) die(`a free-text question has no answer: ${JSON.stringify(q.q).slice(0, 80)}`);
  if (!matchesAccept(q.answer, q.accept ?? [])) {
    die(`the free-text question ${JSON.stringify(q.q).slice(0, 60)} displays ${JSON.stringify(q.answer)} and its accept list does not take it`);
  }
}
/* NO QUESTION MAY TURN ON A DIFFERENCE fold() CANNOT SEE. Corrections §5: a
   typed question turning on an accent accepts the mistake and tells the learner
   they spelled it right. This lesson has no accented forms, and the check is
   here so that a later author who adds one finds out. */
for (const q of qs) {
  if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
  const stripped = (q.answer ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '');
  if (stripped !== (q.answer ?? '').normalize('NFD')) {
    die(`the free-text question ${JSON.stringify(q.q).slice(0, 60)} answers ${JSON.stringify(q.answer)}, which carries a diacritic. fold() strips it, so the question would accept the mistake.`);
  }
}
/* CORRECT ANSWERS MUST NOT CLUSTER. The density validator fails any option slot
   holding more than 40% of closed-format questions. */
const closed = qs.filter((q) => typeof q.correct === 'number');
const slots = new Map<number, number>();
for (const q of closed) slots.set(q.correct as number, (slots.get(q.correct as number) ?? 0) + 1);
for (const [slot, n] of slots) {
  if (n / closed.length > 0.4) die(`option slot ${slot} holds ${n} of ${closed.length} closed questions (${Math.round((n / closed.length) * 100)}%), and the cap is 40%`);
}
console.log(`  quiz          ${qs.length} questions, ${mcq} mcq (${Math.round((mcq / qs.length) * 100)}%), every one with a why and a ref, spread ${[...slots.entries()].sort().map(([s, n]) => `${s}:${n}`).join(' ')}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SCENARIO
 *
 *  a2.03 §11.1: `scenario.logic.test.ts` is SEED-WIDE, requires two `alts` and
 *  a `userEn` on every turn, and is mentioned in NO document this band reads.
 *  a2.03's batch and merge were both green and the suite went red the moment
 *  the merge landed.
 * ═══════════════════════════════════════════════════════════════════════ */

const scenario = byId(SCENARIO_SECTION_ID) as { turns?: { user?: string; userEn?: string; alts?: unknown[] }[] } | undefined;
if (!scenario?.turns) die(`${SCENARIO_SECTION_ID} has no turns`);
scenario.turns.forEach((t, i) => {
  if (!t.userEn) die(`${SCENARIO_SECTION_ID} turn ${i} has no userEn, and scenario.logic.test.ts requires one`);
  if ((t.alts ?? []).length < 2) die(`${SCENARIO_SECTION_ID} turn ${i} has ${(t.alts ?? []).length} alts and needs at least 2: "one accepted answer per turn is the cloze-test failure this content exists to fix"`);
});
console.log(`  scenario      ${scenario.turns.length} turns, every one with a userEn and at least 2 alts`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE
 *
 *  Corrections §4, through the REAL dicteeMode rather than a character count.
 * ═══════════════════════════════════════════════════════════════════════ */

const frOf = (id: string) => BEAU_NOUVEAU.find((r) => r.id === id)?.fr ?? importedFr(id);
for (const id of BEAU_NOUVEAU_DICTEE_IDS) {
  const text = frOf(id);
  if (dicteeMode(text) !== 'letters') {
    die(`${id} ${JSON.stringify(text)} is a dictée target and dicteeMode() puts it in WORD tiles.\n`
      + `  Word mode hands every real word over pre-spelled, so a lesson about a spelling tested there is testing nothing.`);
  }
}
/* AND THE ROWS THIS BUILD SAYS IT CANNOT REACH GENUINELY CANNOT BE REACHED, so
   the claim is a measurement rather than an excuse. */
for (const text of DICTEE_WORD_MODE_ROWS) {
  if (dicteeMode(text) === 'letters') {
    die(`${JSON.stringify(text)} is listed as too long for the dictée and dicteeMode() puts it in LETTERS. Add it to the dictée.`);
  }
}
/* THE THIRD FORM IS IN THE DICTÉE. A dictée that could not test the short form
   would test everything in this lesson except its subject, and the short form
   only exists in rows somebody else published. */
const shortInDictee = ADJ_ORDER.filter((a) => BEAU_NOUVEAU_DICTEE_IDS.includes(vowelRowId(a)));
if (shortInDictee.length < 2) {
  die(`only ${shortInDictee.length} of the ${ADJ_ORDER.length} short forms is a dictée target, and it is the form the lesson is about`);
}
console.log(`  dictée        ${BEAU_NOUVEAU_DICTEE_IDS.length} targets, all LETTERS mode, ${DICTEE_WORD_MODE_ROWS.length} rows proven to be WORD mode, ${shortInDictee.length} short forms spelled`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE NASALS, MEASURED THROUGH THE REAL CHECKER
 *
 *  Corrections §6 and ledger a2.14 §2: run every respelling through the real
 *  function before believing any brief about it, in either direction.
 * ═══════════════════════════════════════════════════════════════════════ */

const respelled: [string, string][] = [
  ...BEAU_NOUVEAU.map((r) => [r.fr, r.respell ?? ''] as [string, string]),
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
  die(`${blind.length} superscripts are INVISIBLE to the checker and this build measured ${EXPECTED_BLIND_NASALS}:\n  ${blind.join('\n  ')}\n`
    + `  Corrections §6: a repair that trusts the checker fixes the half it can see and leaves the other half wrong.`);
}
if (BLIND_NASALS.length !== EXPECTED_BLIND_NASALS) die(`BLIND_NASALS holds ${BLIND_NASALS.length} entries and ${EXPECTED_BLIND_NASALS} were measured`);
/* THE FALSE-POSITIVE PATH. Corrections §6 asks for it to be looked for and its
   ABSENCE reported. Every candidate is run through the real function, so a
   recorded absence cannot go stale. */
if (FALSE_POSITIVES_FOUND.length !== EXPECTED_FALSE_POSITIVES) die(`${FALSE_POSITIVES_FOUND.length} false positives found, expected ${EXPECTED_FALSE_POSITIVES}`);
for (const c of FALSE_POSITIVE_CANDIDATES) {
  if (hasPlainNasalFor(c.fr, c.respell)) {
    die(`${JSON.stringify(c.fr)} / ${JSON.stringify(c.respell)} is recorded as NOT flagged and the checker flags it. The absence in the corpus header has gone stale.`);
  }
}
console.log(`  nasals        ${superscripts} superscripts, ${seen} seen, ${blind.length} blind · ${FALSE_POSITIVE_CANDIDATES.length} false-positive candidates tried, ${FALSE_POSITIVES_FOUND.length} found`);

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

  /* THE ROW COUNT IS THE ONLY SIGNAL. Ledger §10. a2.03 opened this namespace
     with 33 rows and reserved .041..080 for this build, so ANY row inside the
     block that this build does not own is somebody else landing in it. */
  const mineNow = await c.query<{ id: string }>(
    "select id from content_items where id like 'fr.a2.adjectifs-essentiels.%' order by id");
  const inBlock = mineNow.rows.map((r) => r.id).filter((id) => id >= ID_BLOCK.from && id <= ID_BLOCK.to);
  const foreign = inBlock.filter((id) => !AUTHORED_IDS.includes(id));
  if (foreign.length) {
    c.release(); await pool.end();
    die(`${foreign.length} rows exist inside this build's block ${ID_BLOCK.from}..${ID_BLOCK.to} and it does not own them:\n  ${foreign.join('\n  ')}`);
  }
  const before = mineNow.rowCount ?? 0;
  const expectedBefore = [ROW_COUNT_BEFORE, ROW_COUNT_BEFORE + AUTHORED_IDS.length];
  if (!expectedBefore.includes(before)) {
    // a2.14 §12: a total that has GROWN by somebody else's allocation OUTSIDE
    // the block is a report; what is fatal is a row inside the block that this
    // build does not own, and that is checked above.
    if (before < ROW_COUNT_BEFORE) {
      c.release(); await pool.end();
      die(`fr.a2.adjectifs-essentiels held ${ROW_COUNT_BEFORE} rows and now holds ${before}. A SHRINKING total is somebody deleting rows.`);
    }
    console.log(`  !! fr.a2.adjectifs-essentiels holds ${before} rows and this build expected ${ROW_COUNT_BEFORE}. Nothing is inside ${ID_BLOCK.from}..${ID_BLOCK.to}, so this is somebody else's allocation. Reported, not fatal.`);
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

  /* NO DUPLICATE fr INSIDE THE THEME. flashhub-coverage.test.ts treats two rows
     sharing an fr in one theme as one card served twice, and it strips the
     article first. THIS IS THE CHECK THAT DECIDED THE NOUNS: `C'est un bel
     arbre.` already exists in this theme, so this build IMPORTS it rather than
     authoring a copy, and the three consonant-initial phrases were written with
     a noun that collides with nothing. */
  const strip = (s: string) => s.replace(/^(le |la |les |l'|un |une |des |du |de la )/i, '').toLowerCase().trim();
  const themeRows = await c.query<{ id: string; fr: string }>(
    'select id, fr from content_items where theme = $1', [THEME]);
  const seenFr = new Map<string, string>();
  for (const r of themeRows.rows) if (!AUTHORED_IDS.includes(r.id)) seenFr.set(strip(r.fr), r.id);
  for (const r of BEAU_NOUVEAU) {
    const clash = seenFr.get(strip(r.fr));
    if (clash) {
      c.release(); await pool.end();
      die(`${r.id} ${JSON.stringify(r.fr)} collides with ${clash} inside ${THEME}. The flashcard hub would serve one card twice.`);
    }
  }

  /* a1.03's ENDING POPULATION. It runs the REAL function rather than a copy:
     a1.08 shipped a hand-rolled endingPopulation carrying a filter the real one
     does not have, let four rows through, and moved two of a1.03's printed
     cards. Zero gendered rows are authored or carried here, by construction. */
  const gendered = BEAU_NOUVEAU.filter((r) => (r as { gender?: string }).gender);
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

  /* THE MEASUREMENT THE LESSON RESTS ON, RE-READ FROM POSTGRES.
     The manifest recorded it; this proves it is still true at apply time. */
  const soundRows = await c.query<{ id: string; respell: string; ipa: string }>(
    'select id, respell, ipa from content_items where id = any($1)',
    [['fr.sons.adjectifs-essentiels.314', 'fr.sons.consonnes.138',
      'fr.sons.adjectifs-essentiels.315', 'fr.sons.adjectifs-essentiels.312']]);
  const sb = new Map(soundRows.rows.map((r) => [r.id, r]));
  for (const [name, a, b] of [
    ['bel / belle', 'fr.sons.adjectifs-essentiels.314', 'fr.sons.consonnes.138'],
    ['vieil / vieille', 'fr.sons.adjectifs-essentiels.315', 'fr.sons.adjectifs-essentiels.312'],
  ] as [string, string, string][]) {
    if (sb.get(a)?.respell !== sb.get(b)?.respell || sb.get(a)?.ipa !== sb.get(b)?.ipa) {
      c.release(); await pool.end();
      die(`${name} no longer agree in Postgres, and the whole lesson claims they are ONE SOUND.`);
    }
  }
  console.log(`  the evidence  ${ONE_SOUND_EVIDENCE.map((e) => `${e.pair} = ${e.respell}`).join(' · ')}, re-read from Postgres`);

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
    if (!DRILL_ADDITIONS.some((d) => d.id === id)) {
      const mine = [...(rec.drills ?? [])].sort().join(',');
      const theirs = pgArray(row.drills).sort().join(',');
      if (mine !== theirs) stale.push(`${id} drills: manifest ${mine}, Postgres ${theirs}`);
    }
  }
  if (stale.length) {
    c.release(); await pool.end();
    die(`the manifest is stale. Regenerate it with pnpm tsx scripts/_a216_manifest.ts:\n  ${stale.join('\n  ')}`);
  }

  /* THE INSPECTED ROWS STILL SAY WHAT THE CORPUS HEADER SAYS THEY SAY. */
  const inspected = await c.query<{ id: string; respell: string | null }>(
    'select id, respell from content_items where id = any($1)', [NOT_REPAIRED.map((r) => r.id)]);
  for (const r of inspected.rows) {
    const claimed = NOT_REPAIRED.find((x) => x.id === r.id)!.respell;
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
  for (const d of DRILL_ADDITIONS) if (!liveBy.get(d.id)) pending.push(`${d.id} takes a drill addition and is not in Postgres`);
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

  /* EVERY UNIT THIS LESSON CITES STILL EXISTS AND IS NAMED ON A SCREEN. */
  const cited = await c.query<{ id: string }>(
    "select body->>'id' id from content_units where kind = 'curriculum_unit' and body->>'id' = any($1)", [[...CITED_UNITS]]);
  const foundUnits = new Set(cited.rows.map((r) => r.id));
  for (const u of CITED_UNITS) if (!foundUnits.has(u)) die(`this lesson names ${u} and no such unit exists`);
  const surfaces = display(LESSON.sections).concat(display(LESSON.sheets ?? []), display(LESSON.terms ?? {}));
  for (const u of CITED_UNITS) {
    if (!surfaces.some((s) => hasPhrase(s, u))) die(`${u} is in CITED_UNITS and is named on no learner surface`);
  }

  /* DEPENDENTS. Probed rather than copied: a2.12 had none, a2.13 had two,
     a2.14 and a2.15 had none, a2.03 had three. */
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
    // THE RESPELLINGS THIS BUILD SUPPLIES. a2.03 §7: only where there is none,
    // so a row somebody has respelled since the manifest read is left alone and
    // the staleness check reports it rather than the merge overwriting it.
    for (const a of RESPELL_ADDITIONS) {
      await c.query(
        'update content_items set respell = $2 where id = $1 and (respell is null or respell = \'\')',
        [a.id, a.to]);
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
  const after = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.adjectifs-essentiels.%'");
  const check = await c.query<{ id: string; respell: string | null; drills: string[] }>(
    'select id, respell, drills::text[] drills from content_items where id = any($1)',
    [[...ALL_REPAIRS.map((r) => r.id), ...RESPELL_ADDITIONS.map((a) => a.id), ...DRILL_ADDITIONS.map((d) => d.id)]]);
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
  for (const d of DRILL_ADDITIONS) {
    const have = pgArray(post.get(d.id)?.drills);
    for (const want of d.add) if (!have.includes(want)) failed.push(`${d.id} still has no ${want} drill`);
  }
  const mineAfter = Number(after.rows[0].n);
  if (mineAfter !== before + AUTHORED_ITEMS.length && mineAfter !== before) {
    failed.push(`fr.a2.adjectifs-essentiels holds ${mineAfter} rows and it held ${before} before this build's ${AUTHORED_ITEMS.length}`);
  }
  if (failed.length) { c.release(); await pool.end(); die(`the transaction committed and these did not land:\n  ${failed.join('\n  ')}`); }

  console.log(
    `\n  applied to Postgres:\n`
    + `    ${AUTHORED_ITEMS.length} rows authored into ${THEME}, ${AUTHORED_ITEMS[0].id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1].id}\n`
    + `      ${Object.keys(AUTHORED_HEADWORDS).length} HEADWORD AUTHORED (${Object.keys(AUTHORED_HEADWORDS).join(', ')}), and the brief predicted three\n`
    + `      ${GRID_ROWS.length} predicate cells and ${PHRASE_ROWS.length} noun phrases; the ${ADJ_ORDER.length} third forms are IMPORTED\n`
    + `    ${ALL_REPAIRS.length} respelling repaired (${RESPELL_REPAIRS_VISIBLE.length} visible, ${RESPELL_REPAIRS_INVISIBLE.length} invisible, ${RESPELL_REPAIRS_HOUSE.length} house convention)\n`
    + `    ${RESPELL_ADDITIONS.length} respellings SUPPLIED to rows that had none, ${DRILL_ADDITIONS.length} drill additions, all verified after the commit\n`
    + `    ${IMPORTED_IDS.length} rows imported by id out of ${SOURCE_THEMES.length} themes\n`
    + `    ${READ_NOT_IMPORTED.length} rows read and refused, including the only respelled third-form sentence in the corpus (U+203F)\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${BEAU_NOUVEAU_ITEM_IDS.length} items\n`
    + `    fr.a2.adjectifs-essentiels row count: ${before} before, ${mineAfter} after (max ${after.rows[0].mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-beau-nouveau-into-seed.ts\n`);

  c.release();
  await pool.end();
}

if (EXPECTED_UNSEEN !== 0) die('EXPECTED_UNSEEN is not 0, and this lesson deliberately has no cold-test adjectives');
if (INVENTED_FEMININES.length < 4) die(`${INVENTED_FEMININES.length} invented feminines are declared, and the trap needs a spread`);
if (SHEET_ID !== (BEAU_NOUVEAU_SHEETS[0]?.id ?? '')) die('the sheet id constant and the sheet disagree');
if (!byId(HEAR_SECTION_ID) || !byId(ONLY_PAIR_SECTION_ID)) die('one of the two listening sections is missing');
if (LESSON.sections.filter((s) => s.type === 'tapTable').length !== EXPECTED_TAPTABLES) die(`${LESSON.sections.filter((s) => s.type === 'tapTable').length} tapTables, expected ${EXPECTED_TAPTABLES}`);
if (LESSON.sections.filter((s) => s.type === 'cardDeck').length !== EXPECTED_CARDDECKS) die(`${LESSON.sections.filter((s) => s.type === 'cardDeck').length} cardDecks, expected ${EXPECTED_CARDDECKS}`);
if (!byId(ROUNDUP_SECTION_ID)) die('the roundup is missing');
if (DICTATION_IDS.length + 3 !== EXPECTED_DICTEE) die(`${DICTATION_IDS.length} authored dictée rows plus the three imported ones is not ${EXPECTED_DICTEE}`);

main().catch((e) => { console.error(e); process.exit(1); });
