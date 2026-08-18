/* a2.15 "Irréguliers 5 : prendre, mettre, battre" — corpus, lesson and terms,
 * applied to Postgres in one transaction.
 *
 *     pnpm content:prendre-mettre --dry-run
 *     pnpm content:prendre-mettre
 *
 * ── WHAT THIS BATCH GUARDS THAT NO EARLIER ONE DID ────────────────────────
 *
 * THE FAMILY RULE, ROW BY ROW AND CELL BY CELL. Every compound this lesson
 * prints is checked against the head verb it claims to follow: strip the front
 * off the compound form and what is left must be the head's form for the same
 * person, character for character. That is the entire claim of the lesson and it
 * is the one thing a later author is most likely to break by adding a plausible
 * sentence.
 *
 * THE TWO UNSEEN COMPOUNDS, IN BOTH DIRECTIONS. `reprendre` and `admettre` must
 * appear in exactly two sections and nowhere else — not a corpus row, not an
 * itemId, not a deck release, not a term, not a card. And they must still BE
 * there: a guard whose exception list has quietly emptied is a guard that has
 * stopped guarding.
 *
 * THE FRAME CHECK IS THE INVERSE OF a2.14's. a2.14 asserts its two columns use
 * DIFFERENT frames, because the complement was what it taught. Here the stem is
 * what is taught and the complement is noise, so prendre and mettre must SHARE
 * one frame and battre must not, because you do not beat a key.
 *
 * THE WEIGHT OF battre, MEASURED. Two missions, seven authored rows and four
 * paradigm cells against prendre's six missions, fifteen rows and six cells. The
 * inequality is asserted in three places so that a later author "balancing" the
 * lesson breaks the build rather than shipping a worse one.
 *
 * ── GUARDS COPIED, WITH THE REASON ────────────────────────────────────────
 *
 * The jargon walk includes `intro` AND `overview` (ledger §0, corrections §9).
 * The manifest staleness check EXEMPTS the rows this build transforms (a2.13
 * §3.8). Every itemId must be DRAWN by some section, drill or term (a1.08
 * shipped forty-three that were not). The grid on screen is compared to the rows
 * the learner is scored on (a2.13 §6.2) and so are the sheet's respellings
 * (a2.14 §5). The respell-repair table is SPLIT by whether the checker can see
 * the violation (corrections §6).
 *
 * ── GUARDS DELIBERATELY NOT COPIED ────────────────────────────────────────
 *
 * a2.14's "the two frames must differ". Inverted here, and copying it would fail
 * a correct build.
 *
 * a2.14's refusal of `respell` and `en` on an lg groupDrill item. e584bd8 fixed
 * that in the renderer across 583 cards in 28 lessons, so the refusal would now
 * block a legal pattern. What survives is the defect: a card must put SOMETHING
 * under the French.
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
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { Pool } from 'pg';
import { namesUnitLabel } from './data/_unit-ref.ts';
import {
  A211_LINE, A211_UNIT, AUTHORED_IDS, AUTHORED_INFINITIVES, BATTRE_EVIDENCE,
  BATTRE_SHAPE, BLIND_NASALS, BLIND_NASAL_ROWS, CITED_UNITS, COMPOUND_ROWS,
  DICTATION_IDS, DOUBLING_PAIR, DOUBLING_PERSON, DRILL_ADDITIONS, EXPECTED_ACTS,
  EXPECTED_AUTHORED, EXPECTED_AUTHORED_INFINITIVES, EXPECTED_BLIND_NASALS,
  EXPECTED_CARRIED, EXPECTED_DICTATION, EXPECTED_DRILLS,
  EXPECTED_DRILL_ADDITIONS, EXPECTED_EVIDENCE_ROWS, EXPECTED_HEAD_ROWS,
  EXPECTED_IMPORTED, EXPECTED_PERSONS, EXPECTED_QUESTIONS, EXPECTED_READ_ONLY,
  EXPECTED_REFRAME_USES, EXPECTED_RESPELL_ADDITIONS, EXPECTED_RESPELL_REPAIRS,
  EXPECTED_RESPELL_REPAIRS_INVISIBLE, EXPECTED_RESPELL_REPAIRS_VISIBLE,
  EXPECTED_ROUNDS, EXPECTED_SECTIONS, EXPECTED_SHEETS, EXPECTED_SOURCE_THEMES,
  EXPECTED_SUPERSCRIPTS, EXPECTED_TAPTABLES, EXPECTED_TRIGGERS, EXPECTED_VERBS,
  FALSE_POSITIVE_CANDIDATES, FAMILIES, FRAMES, HEAD_IDS, HEAD_ROWS,
  HOMOPHONE_FORMS, LESSON_ID, METTRE_SHAPE, MISSIONS_BY_VERB,
  MISSION_TITLE_MAX, NEIGHBOUR_SHAPE, OVER_GENERALISED, OVER_GENERALISED_SHAPE,
  STEM_PRINCIPLE,
  OWNED_ID_RANGE, OWNS_ACT_ID, OWN_FRAME_VERB, PARADIGM, PARADIGM_ACT_ID,
  PRENDRE_METTRE, PRENDRE_SHAPE, READ_NOT_IMPORTED, RESERVED_FOR,
  RESERVED_SHAPE, RESPELL_ADDITIONS, RESPELL_REPAIRS_INVISIBLE,
  RESPELL_REPAIRS_VISIBLE, ROW_COUNT_BEFORE, SHARED_FRAME_VERBS, STEMS,
  STEM_UNIT, THEME, UNIT, UNIT_ID as CORPUS_UNIT_ID, UNSEEN, UNSEEN_HOMES,
  UNSEEN_INFINITIVES, UNSEEN_SHAPE, VERBS_BOUGHT, VERB_ORDER, VISIBLE_NASALS,
  compoundIds, headIds, rowsFor, toItem, type PmRow, type Verb,
} from './data/prendre-mettre-corpus.ts';
import {
  CARRIED_IDS, EVIDENCE_IDS, IMPORTED_BY_ID, IMPORTED_IDS, READ_ONLY_ROWS,
  REPAIR_ONLY_ROWS, SOURCE_THEMES, repairedRespell,
} from './data/prendre-mettre-imported.ts';
import {
  ADJACENT_PAIR, BATTRE_FAMILY_SECTION_ID, BATTRE_SECTION_ID,
  DOUBLED_SECTION_ID, ERRORS_SECTION_ID, EVIDENCE_SECTION_ID, GOALS_SECTION_ID,
  GRID_SECTION_ID, IDENTITY_SECTION_ID, LISTENING_SECTION_ID, NOTVENDRE_SECTION_ID,
  NOUS_ON, NOUS_ON_SECTION_ID, PRENDRE_METTRE_ACTS, PRENDRE_METTRE_DECK_TRANCHE,
  PRENDRE_METTRE_ITEM_IDS, PRENDRE_METTRE_LESSON, PRENDRE_METTRE_SPEAK_IDS,
  QUIZ_SECTION_ID, REFRAME, ROUNDUP_SECTION_ID, SHEET_ID, TRAP_SECTION_ID,
  UNSEEN_SECTION_ID, WHICH_SECTION_ID,
} from './data/prendre-mettre-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = PRENDRE_METTRE_LESSON;
const UNIT_ID = 'a2.15';

const JARGON = [
  'conjugation', 'conjugate', 'conjugated', 'infinitive', 'infinitives',
  'conditional', 'indicative', 'subjunctive', 'morpheme', 'inflection',
  'paradigm', 'orthography', 'phoneme', 'modal verb', 'modal verbs',
  'auxiliary', 'first person', 'second person', 'third person',
  // Added here: this lesson's own subject invites them.
  'prefix', 'prefixes', 'prefixed', 'derivation', 'stem-final', 'geminate',
  'root', 'radical', 'past participle', 'participle',
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
 *  syllables with a full stop, so `/nu pʁə.nɔ̃/` reads as a standalone word
 *  `nɔ̃`, and a2.01's aller check fired on `.va.` while its lesson was correct. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** Machine keys. Section ids, refs and accept-lists are not learner surfaces and
 *  a guard that reads them fires on `s06-prendre` and on the wrong options a
 *  drill has to print. a2.14 §6: rename an identifier rather than growing an
 *  exception list nobody can reason about. */
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
  let n = 0;
  let i = 0;
  const h = hay.toLowerCase();
  const q = needle.toLowerCase();
  while ((i = h.indexOf(q, i)) !== -1) { n += 1; i += q.length; }
  return n;
};

const pgArray = (v: unknown): string[] => {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
};

const AUTHORED_ITEMS: Item[] = PRENDRE_METTRE.map(toItem);
const RESPELL_REPAIRS = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE];
const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection);

console.log(`\n  a2.15 "Irréguliers 5 : prendre, mettre, battre"${DRY_RUN ? '  (dry run)' : ''}\n`);

/* ══════════════════════════════════════════════════════════════════════════
 *  COUNTS, AGAINST EXPLICIT CONSTANTS
 * ═══════════════════════════════════════════════════════════════════════ */

if (CORPUS_UNIT_ID !== UNIT_ID) die(`the corpus says the unit is ${CORPUS_UNIT_ID} and this batch says ${UNIT_ID}`);
if (LESSON.id !== LESSON_ID) die(`the corpus says the lesson is ${LESSON_ID} and the lesson says ${LESSON.id}`);
if (PRENDRE_METTRE.length !== EXPECTED_AUTHORED) die(`${PRENDRE_METTRE.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (HEAD_ROWS.length !== EXPECTED_HEAD_ROWS) die(`${HEAD_ROWS.length} head-verb cells, expected ${EXPECTED_HEAD_ROWS}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (CARRIED_IDS.length !== EXPECTED_CARRIED) die(`${CARRIED_IDS.length} carried rows, expected ${EXPECTED_CARRIED}`);
if (SOURCE_THEMES.length !== EXPECTED_SOURCE_THEMES) die(`imported out of ${SOURCE_THEMES.length} themes, expected ${EXPECTED_SOURCE_THEMES}`);
if (READ_ONLY_ROWS.length !== EXPECTED_READ_ONLY) die(`${READ_ONLY_ROWS.length} read-only rows, expected ${EXPECTED_READ_ONLY}`);
if (EVIDENCE_IDS.length !== EXPECTED_EVIDENCE_ROWS) die(`${EVIDENCE_IDS.length} evidence rows, expected ${EXPECTED_EVIDENCE_ROWS}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`${(LESSON.errorTriggers ?? []).length} triggers, expected ${EXPECTED_TRIGGERS}`);
if ((LESSON.drills ?? []).length !== EXPECTED_DRILLS) die(`${(LESSON.drills ?? []).length} drills, expected ${EXPECTED_DRILLS}`);
if ((LESSON.sheets ?? []).length !== EXPECTED_SHEETS) die(`${(LESSON.sheets ?? []).length} sheets, expected ${EXPECTED_SHEETS}`);
if (DICTATION_IDS.length !== EXPECTED_DICTATION) die(`${DICTATION_IDS.length} dictation targets, expected ${EXPECTED_DICTATION}`);
if (RESPELL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`${RESPELL_REPAIRS.length} respell repairs, expected ${EXPECTED_RESPELL_REPAIRS}`);
if (RESPELL_REPAIRS_VISIBLE.length !== EXPECTED_RESPELL_REPAIRS_VISIBLE) die(`${RESPELL_REPAIRS_VISIBLE.length} visible repairs, expected ${EXPECTED_RESPELL_REPAIRS_VISIBLE}`);
if (RESPELL_REPAIRS_INVISIBLE.length !== EXPECTED_RESPELL_REPAIRS_INVISIBLE) die(`${RESPELL_REPAIRS_INVISIBLE.length} invisible repairs, expected ${EXPECTED_RESPELL_REPAIRS_INVISIBLE}`);
if (RESPELL_ADDITIONS.length !== EXPECTED_RESPELL_ADDITIONS) die(`${RESPELL_ADDITIONS.length} respell additions, expected ${EXPECTED_RESPELL_ADDITIONS}`);
if (DRILL_ADDITIONS.length !== EXPECTED_DRILL_ADDITIONS) die(`${DRILL_ADDITIONS.length} drill additions, expected ${EXPECTED_DRILL_ADDITIONS}`);
if (VERB_ORDER.length !== EXPECTED_VERBS) die(`${VERB_ORDER.length} verbs, expected ${EXPECTED_VERBS}`);
if (PARADIGM.length !== EXPECTED_PERSONS) die(`${PARADIGM.length} persons, expected ${EXPECTED_PERSONS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} quiz questions, expected ${EXPECTED_QUESTIONS}`);
console.log(`  counts        ${PRENDRE_METTRE.length} authored · ${IMPORTED_IDS.length} imported from ${SOURCE_THEMES.length} themes · ${LESSON.sections.length} sections · ${EXPECTED_ACTS} acts · ${qs.length} questions`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE THREE INFINITIVES THIS BUILD AUTHORS
 *
 *  A FIRST FOR THIS BAND. Corrections §2: five A2 builds in a row authored not
 *  one. The batch checks the row exists, is a bare infinitive with no gender and
 *  no article, and is NOT one of the two the exam gives cold.
 * ═══════════════════════════════════════════════════════════════════════ */

const infinitiveRows = PRENDRE_METTRE.filter((r) => r.role === 'naming');
if (infinitiveRows.length !== EXPECTED_AUTHORED_INFINITIVES) {
  die(`${infinitiveRows.length} authored infinitives, expected ${EXPECTED_AUTHORED_INFINITIVES}`);
}
for (const r of infinitiveRows) {
  if (AUTHORED_INFINITIVES[r.fr] !== r.id) die(`${r.id} authors ${JSON.stringify(r.fr)} and the corpus records ${AUTHORED_INFINITIVES[r.fr] ?? '(nothing)'}`);
  if (r.kind !== 'word') die(`${r.id} is an authored infinitive and its kind is ${r.kind}`);
  if ((r as { gender?: string }).gender) die(`${r.id} carries a gender. Infinitives are not nouns, and a gendered single-word row joins a1.03 ending population.`);
  if (/\s/.test(r.fr)) die(`${r.id} authors ${JSON.stringify(r.fr)}, which is not a bare infinitive. Ledger §5.`);
  if (UNSEEN_INFINITIVES.includes(r.fr)) die(`${r.id} authors ${JSON.stringify(r.fr)}, which is one of the two the exam gives cold. Authoring it deletes the mission this lesson exists for.`);
}
console.log(`  authored inf  ${infinitiveRows.map((r) => r.fr).join(', ')}  (first A2 build to author one)`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FAMILY RULE, CHECKED CELL BY CELL AGAINST THE FRENCH
 *
 *  THE ONE GUARD THIS LESSON EXISTS FOR. Strip the front off a compound form and
 *  what is left must be the head verb's form for the same person, character for
 *  character. Nothing about the front may change anything behind it.
 * ═══════════════════════════════════════════════════════════════════════ */

const PERSON_IX: Record<string, number> = { je: 0, tu: 1, il: 2, nous: 3, vous: 4, ils: 5 };

for (const v of VERB_ORDER) {
  for (const compound of FAMILIES[v]) {
    if (!compound.endsWith(v)) die(`${compound} is listed in the ${v} family and does not end in ${v}`);
    const front = compound.slice(0, compound.length - v.length);
    if (!front) die(`${compound} is listed as a compound of ${v} and has nothing in front of it`);
    for (const p of PARADIGM) {
      const built = front + p.forms[v];
      // the head form with the front put back on is what the language uses, and
      // the whole lesson rests on there being no exception anywhere in it.
      if (built.slice(front.length) !== p.forms[v]) {
        die(`${compound} at ${p.person} does not reduce to ${p.forms[v]}`);
      }
    }
  }
}

/* AND EVERY AUTHORED COMPOUND SENTENCE CARRIES A FORM THAT REDUCES. */
for (const r of COMPOUND_ROWS) {
  const v = r.verb;
  const person = r.person;
  if (!person) die(`${r.id} is a compound row with no person`);
  const headForm = PARADIGM[PERSON_IX[person]].forms[v];
  const candidates = FAMILIES[v].map((c) => c.slice(0, c.length - v.length) + headForm);
  const found = candidates.find((f) => hasPhrase(r.fr, f) || hasPhrase(r.fr, `j'${f}`) || hasPhrase(r.fr, `j’${f}`));
  if (!found) {
    die(`${r.id} is declared a ${v} compound at ${person} and carries none of ${candidates.join(', ')}: ${JSON.stringify(r.fr)}\n`
      + `  A compound sentence whose verb is not the head form with a front on it is the one thing this lesson cannot ship.`);
  }
}

/* AND EVERY HEAD ROW CARRIES ITS OWN CELL. */
for (const v of VERB_ORDER) {
  for (const id of headIds(v)) {
    const r = PRENDRE_METTRE.find((x) => x.id === id)!;
    const cell = PARADIGM[PERSON_IX[r.person!]].forms[v];
    if (!hasPhrase(r.fr, cell)) die(`${id} is the ${v} row at ${r.person} and does not carry ${cell}: ${JSON.stringify(r.fr)}`);
  }
}
console.log(`  family rule   ${VERB_ORDER.map((v) => `${v}+${FAMILIES[v].length}`).join(' · ')} = ${VERBS_BOUGHT} verbs · ${COMPOUND_ROWS.length} compound rows, 0 violations`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE STEMS, DERIVED AND COMPARED
 *
 *  The corpus writes STEMS out by hand because it is the claim of the lesson.
 *  The batch derives them from PARADIGM, so neither copy can drift alone.
 * ═══════════════════════════════════════════════════════════════════════ */

const commonPrefix = (a: string, b: string): string => {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i += 1;
  return a.slice(0, i);
};
for (const v of VERB_ORDER) {
  const sing = PARADIGM[2].forms[v];
  const nous = PARADIGM[3].forms[v].replace(/ons$/, '');
  const vous = PARADIGM[4].forms[v].replace(/ez$/, '');
  const ils = PARADIGM[5].forms[v].replace(/ent$/, '');
  if (nous !== vous) die(`${v}: nous and vous do not share a stem (${nous} against ${vous}). Every verb in this lesson does.`);
  const derived = [...new Set([sing, nous, ils])];
  const declared = STEMS[v].map((s) => s.replace(/-$/, ''));
  if (derived.join('|') !== declared.join('|')) {
    die(`${v}: the corpus declares stems ${declared.join(', ')} and the grid gives ${derived.join(', ')}.\n`
      + `  STEMS is written out by hand because it is the claim of the lesson; this check is what stops the two copies drifting.`);
  }
}
/* AND prendre HAS THREE WHERE THE OTHER TWO HAVE TWO. If that stops being true
   the lesson has no trap and no reason to exist in this shape. */
if (STEMS.prendre.length !== 3) die(`prendre has ${STEMS.prendre.length} stems and the lesson is built on it having three`);
for (const v of ['mettre', 'battre'] as Verb[]) {
  if (STEMS[v].length !== 2) die(`${v} has ${STEMS[v].length} stems and the lesson calls it the control, which needs two`);
  const plural = [3, 4, 5].map((i) => PARADIGM[i].forms[v].replace(/(ons|ez|ent)$/, ''));
  if (new Set(plural).size !== 1) die(`${v} does not keep ONE plural stem: ${plural.join(', ')}. That is the whole of the control claim.`);
}
/* AND THE DOUBLING IS IN EXACTLY ONE CELL. */
const doubledCells = PARADIGM.filter((p) => /(\w)\1/.test(p.forms.prendre)).map((p) => p.person);
if (doubledCells.length !== 1 || doubledCells[0] !== DOUBLING_PERSON) {
  die(`prendre doubles a consonant in ${doubledCells.length} cell(s) (${doubledCells.join(', ')}); the lesson teaches it on ${DOUBLING_PERSON} alone`);
}
if (commonPrefix(PARADIGM[3].forms.prendre, PARADIGM[5].forms.prendre).length >= PARADIGM[3].forms.prendre.replace(/ons$/, '').length + 1) {
  die('the nous and ils stems of prendre no longer differ, so the pair the lesson is built on has gone');
}
console.log(`  stems         ${VERB_ORDER.map((v) => `${v}:${STEMS[v].length}`).join(' · ')} · doubling in ${doubledCells[0]} alone`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE FRAME, AND IT IS THE INVERSE OF a2.14's CHECK
 * ═══════════════════════════════════════════════════════════════════════ */

for (const v of VERB_ORDER) {
  const rows = headIds(v).map((id) => PRENDRE_METTRE.find((r) => r.id === id)!);
  const complement = FRAMES[v].complement;
  for (const r of rows) {
    if (!hasPhrase(r.fr, complement)) die(`${r.id} is a ${v} cell and does not carry the frame ${JSON.stringify(complement)}`);
    const tail = r.fr.replace(/[.!?…]\s*$/u, '').trim().split(/\s+/u).slice(-complement.split(/\s+/u).length).join(' ');
    if (tail !== complement) die(`${r.id} does not END on the frame: ${JSON.stringify(r.fr)} ends on ${JSON.stringify(tail)}`);
  }
}
const [a, b] = SHARED_FRAME_VERBS;
if (FRAMES[a].complement !== FRAMES[b].complement) {
  die(`${a} and ${b} do not share a frame (${FRAMES[a].complement} against ${FRAMES[b].complement}).\n`
    + `  a2.14 asserts the OPPOSITE for its two verbs, because there the complement was the teaching. Here the stem is\n`
    + `  the teaching and the back of the sentence must not move: if it does, the learner is comparing two objects as\n`
    + `  well as two verbs.`);
}
if (FRAMES[OWN_FRAME_VERB].complement === FRAMES[a].complement) {
  die(`${OWN_FRAME_VERB} shares the frame of ${a}. You do not beat a key; the asymmetry is real and the lesson says so.`);
}
console.log(`  frame         ${a} and ${b} share "${FRAMES[a].complement}" · ${OWN_FRAME_VERB} takes "${FRAMES[OWN_FRAME_VERB].complement}"`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TWO COMPOUNDS THE EXAM GIVES COLD
 * ═══════════════════════════════════════════════════════════════════════ */

const allStrings = strings(LESSON);
{
  /* THEY ARE IN NO ROW, NO ITEMID, NO DECK AND NO TERM. */
  for (const u of UNSEEN_INFINITIVES) {
    const row = PRENDRE_METTRE.find((r) => hasPhrase(r.fr, u));
    if (row) die(`${row.id} authors ${u}, which the exam gives cold. It must be in no corpus row.`);
  }
  const released = PRENDRE_METTRE_DECK_TRANCHE.flat();
  for (const id of [...PRENDRE_METTRE_ITEM_IDS, ...released]) {
    const r = IMPORTED_BY_ID.get(id) ?? PRENDRE_METTRE.find((x) => x.id === id);
    if (r && UNSEEN_SHAPE.test(r.fr)) die(`${id} ${JSON.stringify(r.fr)} carries one of the unseen compounds and is in itemIds or a deck`);
  }
  if (UNSEEN_SHAPE.test(strings(LESSON.terms ?? {}).join('  '))) {
    die('a term names one of the two compounds the exam gives cold. They belong on two screens and in no glossary.');
  }

  /* AND THEY APPEAR IN EXACTLY THE TWO SECTIONS THAT MAY HOLD THEM. */
  const homes = LESSON.sections
    .filter((s) => strings(s).some((x) => UNSEEN_SHAPE.test(x)))
    .map((s) => (s as { id?: string }).id ?? '(anon)');
  if (homes.join('|') !== [...UNSEEN_HOMES].join('|')) {
    die(`the unseen compounds appear in [${homes.join(', ')}] and the corpus permits exactly [${UNSEEN_HOMES.join(', ')}].\n`
      + `  Doctrine §B.1: a pattern that generalises to items the lesson never taught is the only thing that\n`
      + `  distinguishes A2 from a table. A card for either of these deletes that.`);
  }

  /* AND THE EXAM ACTUALLY MAKES THE LEARNER PRODUCE THEM, IN FREE TEXT. */
  const produced = qs.filter((q) => {
    const qq = q as { format?: string; answer?: string };
    return (qq.format === 'typeIn' || qq.format === 'errorSpot') && UNSEEN_SHAPE.test(String(qq.answer ?? ''));
  });
  if (produced.length < 4) {
    die(`${produced.length} free-text question(s) answer with an unseen compound; the brief asks for several and this lesson ships four typeIn plus one errorSpot.\n`
      + `  A groupDrill check is an mcq, so the MISSION cannot be the production surface. The exam is.`);
  }
  const forms = new Set(produced.map((q) => String((q as { answer?: string }).answer ?? '')));
  if (forms.size < 4) die(`the unseen production asks for ${forms.size} distinct forms; four different cells is what proves the pattern rather than one memorised answer`);
  /* AND BOTH OF THEM ARE IN THE MISSION, NOT JUST ONE.
     Found by the mutation harness: dropping `reprendre` out of one of the three
     checks left the other two naming it, so UNSEEN_HOMES was unchanged and the
     claim was still true. a2.14 §8: a claim made in three strings needs three
     anchors, and a guard on the SET rather than on the section is what makes one
     anchor enough. */
  const cold = strings(byId(UNSEEN_SECTION_ID)).join('  ');
  for (const u of UNSEEN_INFINITIVES) {
    if (!hasPhrase(cold, u)) {
      die(`${UNSEEN_SECTION_ID} does not name ${u}, and it is one of the two verbs this lesson exists to prove the pattern on.
`
        + `  Both must be there: one cold verb is an example and two is a pattern.`);
    }
  }
  console.log(`  unseen        ${UNSEEN_INFINITIVES.join(', ')} in ${homes.join(' + ')} only · ${produced.length} free-text productions, ${forms.size} distinct forms`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT THIS LESSON MAY NOT TEACH
 * ═══════════════════════════════════════════════════════════════════════ */

/* THE PAST PARTICIPLES ARE a2.20's, AT seq 17, AND THE BRIEF RESERVES THEM BY
   NAME. `pris` is in 198 published rows and `mis` in 81, so this has to be a
   guard rather than an intention. */
const reserved = allStrings.filter((s) => RESERVED_SHAPE.test(s));
if (reserved.length) {
  die(`a past form of one of these three reached a surface: ${reserved.map((s) => JSON.stringify(s.slice(0, 120))).join('\n  ')}\n`
    + `  pris and mis are ${RESERVED_FOR}'s and they are among its most important. The corpus header flags them as`
    + ` deliberately left, so ${RESERVED_FOR} knows the omission was a decision.`);
}

/* THE NEIGHBOURS' OPENINGS. Scoped to PRODUCTION surfaces rather than to every
   string, so the roundup can say where they are taught without naming a noun. */
const PRODUCTION_SECTIONS = new Set([GRID_SECTION_ID, DOUBLED_SECTION_ID, 's06-prendre', 's07-mettre',
  BATTRE_SECTION_ID, IDENTITY_SECTION_ID, 's11-apprendre', 's12-remettre', WHICH_SECTION_ID,
  BATTRE_FAMILY_SECTION_ID, LISTENING_SECTION_ID, NOUS_ON_SECTION_ID, 's21-build', 's22-dictation',
  's23-speak', 's24-review', UNSEEN_SECTION_ID, QUIZ_SECTION_ID]);
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id ?? '';
  if (!PRODUCTION_SECTIONS.has(sid)) continue;
  const hit = display(s).find((x) => NEIGHBOUR_SHAPE.test(x));
  if (hit) {
    die(`${sid} is a production surface and it names a noun that opens another unit: ${JSON.stringify(hit.slice(0, 120))}\n`
      + `  The brief: prendre le bus is a2.27 at seq 26 and je prends un café is a2.07 at seq 24, and neither may become\n`
      + `  a vocabulary or scenario section here or two later units lose their opening.`);
  }
}
for (const r of PRENDRE_METTRE) {
  if (NEIGHBOUR_SHAPE.test(r.fr)) die(`${r.id} authors ${JSON.stringify(r.fr)}, which belongs to a2.07 or a2.27`);
}

/* THE OVER-GENERALISED FORM HAS EXACTLY ONE HOME.
   a2.11 refused to print it at all, on the argument that a learner with nothing
   to overwrite it with keeps it. Six missions of paradigm later that argument no
   longer applies, and this is the a2.01 `je parles` shape. One card, once. */
const overGen = LESSON.sections
  .filter((s) => strings(s).some((x) => OVER_GENERALISED_SHAPE.test(x)))
  .map((s) => (s as { id?: string }).id);
if (overGen.join('|') !== [ERRORS_SECTION_ID, QUIZ_SECTION_ID].join('|')) {
  die(`the over-generalised form appears in [${overGen.join(', ')}] and it belongs in ${ERRORS_SECTION_ID} and the exam distractor and nowhere else`);
}
if (!strings(byId(ERRORS_SECTION_ID)).some((s) => s.includes(OVER_GENERALISED))) {
  die(`${ERRORS_SECTION_ID} no longer shows ${JSON.stringify(OVER_GENERALISED)}. It is the form ${A211_UNIT} refused to print and this lesson is where it gets rejected.`);
}
console.log(`  boundaries    0 reserved participles · 0 neighbour nouns on a production surface · ${OVER_GENERALISED} in ${ERRORS_SECTION_ID} only`);

/* ══════════════════════════════════════════════════════════════════════════
 *  battre IS THE SMALL ONE AND THE BUILD SAYS SO IN THREE WAYS
 * ═══════════════════════════════════════════════════════════════════════ */

{
  const rows = Object.fromEntries(VERB_ORDER.map((v) => [v, rowsFor(v).length])) as Record<Verb, number>;
  if (!(rows.battre < rows.mettre && rows.mettre < rows.prendre)) {
    die(`authored rows per verb: ${VERB_ORDER.map((v) => `${v} ${rows[v]}`).join(', ')}.\n`
      + `  The brief: "Do not pad battre to make the three verbs look equal." battre must have strictly fewer rows\n`
      + `  than mettre and mettre strictly fewer than prendre.`);
  }
  if (headIds('battre').length >= headIds('prendre').length) {
    die(`battre has ${headIds('battre').length} paradigm cells and prendre ${headIds('prendre').length}; the small one must be smaller`);
  }
  const missions = Object.fromEntries(VERB_ORDER.map((v) => [v, MISSIONS_BY_VERB[v].length])) as Record<Verb, number>;
  if (!(missions.battre < missions.prendre)) {
    die(`battre has ${missions.battre} declared missions and prendre ${missions.prendre}. The brief asks for the inequality by name.`);
  }
  const declared = VERB_ORDER.flatMap((v) => MISSIONS_BY_VERB[v]);
  const dupes = declared.filter((x, i) => declared.indexOf(x) !== i);
  if (dupes.length) die(`a section is declared under two verbs: ${dupes.join(', ')}`);
  for (const id of declared) if (!byId(id)) die(`MISSIONS_BY_VERB names ${id}, which is not a section`);
  /* AND EVERY DECLARED battre MISSION ACTUALLY NAMES battre. */
  for (const id of MISSIONS_BY_VERB.battre) {
    if (!strings(byId(id)).some((x) => BATTRE_SHAPE.test(x))) die(`${id} is declared a battre mission and names no form of it`);
  }
  console.log(`  weight        rows ${VERB_ORDER.map((v) => `${v} ${rows[v]}`).join(' · ')} · missions ${VERB_ORDER.map((v) => `${v} ${missions[v]}`).join(' · ')} · battre evidence in the corpus: ${BATTRE_EVIDENCE.conjugated.battent} conjugated`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TWO BACK-REFERENCES THE BRIEF ASKS FOR BY ITS LESSON LABEL
 * ═══════════════════════════════════════════════════════════════════════ */

{
  const doubled = byId(DOUBLED_SECTION_ID);
  if (!doubled) die(`${DOUBLED_SECTION_ID} is missing`);
  const text = prose(doubled).join('  ');
  if (!namesUnitLabel(text, STEM_UNIT)) {
    die(`${DOUBLED_SECTION_ID} shows the doubled n and does not name ${STEM_UNIT}.\n`
      + `  The brief: "Point back at a2.09 by its lesson label. A learner who sees two lessons connect stops believing French\n`
      + `  is arbitrary, and this is the clearest connection available in batch 1."`);
  }
  /* AND THE PAIR IS ADJACENT, BY INDEX. */
  const ex = (doubled as { examples?: { fr: string }[] }).examples ?? [];
  const ia = ex.findIndex((e) => e.fr === PRENDRE_METTRE.find((r) => r.id === ADJACENT_PAIR[0])!.fr);
  const ib = ex.findIndex((e) => e.fr === PRENDRE_METTRE.find((r) => r.id === ADJACENT_PAIR[1])!.fr);
  if (ia < 0 || ib < 0 || ib - ia !== 1) {
    die(`${DOUBLED_SECTION_ID} does not put ${ADJACENT_PAIR[0]} directly above ${ADJACENT_PAIR[1]} (found at ${ia} and ${ib}).\n`
      + `  The brief: "nous prenons and ils prennent belong on one screen, adjacent. This is the layout the test must assert."`);
  }

  const notv = byId(NOTVENDRE_SECTION_ID);
  if (!notv) die(`${NOTVENDRE_SECTION_ID} is missing`);
  if (!strings(notv).some((s) => s.includes(A211_LINE))) {
    die(`${NOTVENDRE_SECTION_ID} does not carry the line that closes ${A211_UNIT}'s loop.\n`
      + `  The brief: "a2.11 named it and refused to conjugate it. Close that loop explicitly — the learner was told to\n`
      + `  wait, and this is the lesson they were waiting for."`);
  }
  /* AND THE MECHANISM IS STATED, NOT JUST THE UNIT NUMBER.
     Found by the mutation harness: cutting a2.09 out of STEM_PRINCIPLE left the
     section's own `say` still naming the unit, so the by-id check passed on a
     lesson that no longer said WHY. The sentence is asserted verbatim. */
  if (!strings(LESSON).some((s) => s.includes(STEM_PRINCIPLE))) {
    die(`the sentence that ties the doubled n to the silent ending appears nowhere:
  ${JSON.stringify(STEM_PRINCIPLE)}
`
      + `  Naming ${STEM_UNIT} without it is a citation. The brief asks for the connection, not the reference.`);
  }
  if (!namesUnitLabel(STEM_PRINCIPLE, STEM_UNIT)) {
    die(`STEM_PRINCIPLE no longer names ${STEM_UNIT}, so the sentence that carries the connection has stopped carrying it`);
  }
  console.log(`  backrefs      ${STEM_UNIT} in ${DOUBLED_SECTION_ID} · ${A211_UNIT} in ${NOTVENDRE_SECTION_ID} · pair adjacent at ${ia},${ib}`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLINGS
 * ═══════════════════════════════════════════════════════════════════════ */

for (const r of PRENDRE_METTRE) {
  if (!r.respell) die(`${r.id} has no respelling. A card the learner cannot say is not a card.`);
  if (hasPlainNasalFor(r.fr, r.respell)) die(`${r.id} closes a nasal with a plain n or m: ${JSON.stringify(r.respell)}`);
  if (r.respell.includes('‿')) die(`${r.id} respells with U+203F UNDERTIE, which renders as a low underscore on a Pixel 6`);
  if (/[œŒ]/u.test(r.fr) || /[œŒ]/u.test(r.respell)) {
    die(`${r.id} holds U+0153 œ. letterCount() strips it and so does the dictée letter bank, so the ligature vanishes from the exercise AND from the target it is compared against.`);
  }
}

/* THE BLIND SWEEP. Corrections §6 asks every build to break each superscript
   back to a plain n, one at a time, and to assert the blindness as a NEGATIVE so
   the day the checker improves you find out rather than carrying a dead list. */
const blind: string[] = [];
let superscripts = 0;
for (const r of PRENDRE_METTRE) {
  const re = r.respell ?? '';
  if (!re.includes('ⁿ')) continue;
  if (!VISIBLE_NASALS.includes(r.id)) die(`${r.id} carries a superscript and is not in VISIBLE_NASALS`);
  for (let i = 0; i < re.length; i += 1) {
    if (re[i] !== 'ⁿ') continue;
    superscripts += 1;
    const broken = re.slice(0, i) + 'n' + re.slice(i + 1);
    if (!hasPlainNasalFor(r.fr, broken)) blind.push(`${r.id} [${broken}]`);
  }
}
if (superscripts !== EXPECTED_SUPERSCRIPTS) die(`${superscripts} superscripts, expected ${EXPECTED_SUPERSCRIPTS}`);
if (blind.join('|') !== BLIND_NASALS.join('|')) {
  die(`the checker's blind spots have moved.\n  measured: ${blind.length ? blind.join('\n            ') : '(none)'}\n  corpus BLIND_NASALS: ${BLIND_NASALS.length ? BLIND_NASALS.join(', ') : '(empty)'}\n`
    + `  The two this lesson knows about are both ray-POHⁿS in réponse: the nasal is followed by a consonant INSIDE the\n`
    + `  token, which is corrections §6's shape. Everything else here is AHⁿ or OHⁿ, which hasPlainNasal catches on its\n`
    + `  first branch before the French is consulted, so a2.14's doubled-nasal blind spot never fires even on the lines\n`
    + `  holding prennent and apprennent.`);
}
if (blind.length !== EXPECTED_BLIND_NASALS) die(`${blind.length} invisible superscripts, expected ${EXPECTED_BLIND_NASALS}`);
for (const b of BLIND_NASAL_ROWS) {
  const row = PRENDRE_METTRE.find((r) => r.id === b.id);
  if (!row) die(`${b.id} is recorded as carrying an invisible nasal and is not an authored row`);
  if (!(row.respell ?? '').includes(b.token)) {
    die(`${b.id} no longer carries ${JSON.stringify(b.token)}: ${JSON.stringify(row.respell)}\n  ${b.why}\n`
      + `  hasPlainNasalFor CANNOT see this one, so this assertion is the only thing standing between a dropped\n`
      + `  superscript and a shipped card teaching a sound that is not in the word.`);
  }
}

/* THE FALSE-POSITIVE CANDIDATES, MEASURED RATHER THAN CLAIMED. */
for (const c of FALSE_POSITIVE_CANDIDATES) {
  const actual = hasPlainNasalFor(c.fr, c.respell);
  if (actual !== c.flagged) {
    die(`${c.fr} [${c.respell}] is ${actual ? 'FLAGGED' : 'not flagged'} and the corpus records ${c.flagged ? 'FLAGGED' : 'not flagged'}.\n  ${c.why}`);
  }
}

/* THE REPAIR TABLE IS SPLIT THE WAY CORRECTIONS §6 REQUIRES. a2.10's guard
   demands the stored value be FLAGGED before it accepts a repair, which is right
   for a variant somebody is about to overwrite and wrong for the three rows here
   whose violation the checker cannot see. */
for (const r of RESPELL_REPAIRS_VISIBLE) {
  if (!hasPlainNasalFor(r.fr, r.from)) {
    die(`${r.id} is in RESPELL_REPAIRS_VISIBLE and hasPlainNasalFor does NOT flag ${JSON.stringify(r.from)}. It belongs in the invisible table, where the guard runs the other way.`);
  }
  if (hasPlainNasalFor(r.fr, r.to)) die(`${r.id} would be repaired to ${JSON.stringify(r.to)}, which the checker still flags`);
}
for (const r of RESPELL_REPAIRS_INVISIBLE) {
  if (hasPlainNasalFor(r.fr, r.from)) {
    die(`${r.id} is in RESPELL_REPAIRS_INVISIBLE and hasPlainNasalFor DOES flag ${JSON.stringify(r.from)}. It belongs in the visible table.`);
  }
  if (hasPlainNasalFor(r.fr, r.to)) die(`${r.id} would be repaired to ${JSON.stringify(r.to)}, which the checker flags`);
  if (!r.to.includes('ⁿ')) die(`${r.id} is an invisible repair and its replacement ${JSON.stringify(r.to)} carries no superscript. The checker cannot check this one, so the value is asserted BY NAME or it is not asserted at all.`);
}
console.log(`  respell       ${PRENDRE_METTRE.length} authored, 0 flagged · ${superscripts} superscripts, ${blind.length} invisible · ${RESPELL_REPAIRS_VISIBLE.length} visible + ${RESPELL_REPAIRS_INVISIBLE.length} invisible repairs · ${FALSE_POSITIVE_CANDIDATES.length} false-positive candidates checked`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE
 * ═══════════════════════════════════════════════════════════════════════ */

for (const id of DICTATION_IDS) {
  const row = PRENDRE_METTRE.find((r) => r.id === id);
  if (!row) die(`${id} is a dictation target and is not an authored row`);
  if (dicteeMode(row.fr) !== 'letters') {
    die(`${id} ${JSON.stringify(row.fr)} spells in WORD mode, which hands every word over pre-spelled and tests nothing`);
  }
  if (/[œŒ]/u.test(row.fr)) {
    die(`${id} holds U+0153. letterCount() reports ${letterCount(row.fr)} where the line has ${row.fr.replace(/[^\p{L}]/gu, '').length} letters, and the bank and the target BOTH drop the ligature, so a learner who never spells it is marked correct.`);
  }
}
/* AND THE DOUBLED CONSONANT IS ACTUALLY IN THE DICTÉE, which is the one thing a
   typed surface CAN test that an accent cannot. Corrections §5. */
if (!DICTATION_IDS.includes(DOUBLING_PAIR.single) || !DICTATION_IDS.includes(DOUBLING_PAIR.doubled)) {
  die(`the dictée does not carry both halves of ${DOUBLING_PAIR.single}/${DOUBLING_PAIR.doubled}.\n`
    + `  fold() strips accents and cannot test one, and it KEEPS a doubled letter. The doubled n is the one thing in\n`
    + `  this lesson a typed surface can genuinely score, so it belongs here.`);
}
console.log(`  dictée        ${DICTATION_IDS.length} targets, all LETTERS, no ligature · both halves of the doubling pair present`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LAYOUT CLAIMS
 * ═══════════════════════════════════════════════════════════════════════ */

/* THE PARADIGM GRID: all three verbs on every line. */
const grid = byId(GRID_SECTION_ID) as { type?: string; examples?: { fr: string }[] } | undefined;
if (!grid || grid.type !== 'examples') die(`${GRID_SECTION_ID} is missing or is not an examples section`);
if ((grid.examples ?? []).length !== PARADIGM.length) die(`${GRID_SECTION_ID} has ${(grid.examples ?? []).length} lines, expected ${PARADIGM.length}`);
(grid.examples ?? []).forEach((ex, i) => {
  for (const v of VERB_ORDER) {
    if (!hasPhrase(ex.fr, PARADIGM[i].forms[v])) {
      die(`${GRID_SECTION_ID} line ${i} does not carry the ${v} form ${PARADIGM[i].forms[v]}`);
    }
  }
});

/* THE IDENTITY GRID: a head verb and TWO of its compounds, on every line. */
const identity = byId(IDENTITY_SECTION_ID) as { type?: string; examples?: { fr: string }[] } | undefined;
if (!identity || identity.type !== 'examples') die(`${IDENTITY_SECTION_ID} is missing or is not an examples section`);
if ((identity.examples ?? []).length !== PARADIGM.length) die(`${IDENTITY_SECTION_ID} has ${(identity.examples ?? []).length} lines, expected ${PARADIGM.length}`);
(identity.examples ?? []).forEach((ex, i) => {
  const head = PARADIGM[i].forms.prendre;
  for (const front of ['', 'ap', 'com']) {
    // `j'apprends` elides, and hasPhrase treats the apostrophe as a word
    // character, so the bare form is not findable on the je line. That is the
    // same allowance the compound-row check above makes.
    const form = front + head;
    if (!hasPhrase(ex.fr, form) && !hasPhrase(ex.fr, `j'${form}`) && !hasPhrase(ex.fr, `j’${form}`)) {
      die(`${IDENTITY_SECTION_ID} line ${i} does not carry ${JSON.stringify(front + head)}.\n`
        + `  The brief: "One grid showing a head verb and two of its compounds in the same conjugation, so the identity\n`
        + `  is visible rather than asserted."`);
    }
  }
});

/* THE GRID ON SCREEN IS THE ROW THE LEARNER IS SCORED ON. a2.13 §6.2. */
for (const v of VERB_ORDER) {
  headIds(v).forEach((id) => {
    const row = PRENDRE_METTRE.find((r) => r.id === id)!;
    const cell = PARADIGM[PERSON_IX[row.person!]].forms[v];
    if (!hasPhrase(row.fr, cell)) {
      die(`the grid says ${v} at ${row.person} is ${JSON.stringify(cell)} and the row the learner is scored on is ${JSON.stringify(row.fr)}.`);
    }
  });
}

/* THE SHEET'S RESPELLINGS ARE THE CARDS' RESPELLINGS. a2.14 §5: two independent
   copies of the same values in two files, and nothing compared them. */
{
  const sheet = (LESSON.sheets ?? [])[0] as { sections?: { id?: string; rows?: string[][] }[] };
  const say = (sheet.sections ?? []).find((s) => s.id === 'sheet-say');
  if (!say) die('sheet-say is missing');
  (say.rows ?? []).forEach((row, i) => {
    if (row[0] !== PARADIGM[i].person) die(`sheet-say row ${i} is ${JSON.stringify(row[0])}, expected ${JSON.stringify(PARADIGM[i].person)}`);
    VERB_ORDER.forEach((v, j) => {
      if (row[j + 1] !== PARADIGM[i].respells[v]) {
        die(`sheet-say says ${JSON.stringify(row[j + 1])} for ${v} at ${PARADIGM[i].person} and the grid says ${JSON.stringify(PARADIGM[i].respells[v])}`);
      }
      const id = headIds(v)[PARADIGM.slice(0, i + 1).filter((p) => headIds(v).length === 6 || ['je', 'il', 'nous', 'ils'].includes(p.person.split(' ')[0])).length - 1];
      void id;
    });
  });
  /* AND EVERY CELL RESPELLING IS INSIDE THE ROW THAT TEACHES IT. */
  for (const v of VERB_ORDER) {
    for (const id of headIds(v)) {
      const row = PRENDRE_METTRE.find((r) => r.id === id)!;
      const cell = PARADIGM[PERSON_IX[row.person!]].respells[v];
      if (!(row.respell ?? '').includes(cell)) {
        die(`${id} respells ${JSON.stringify(row.respell)} and the grid says the verb is ${JSON.stringify(cell)}. The sheet prints the grid and the card prints the row; if they disagree the learner reads one and is scored on the other.`);
      }
    }
  }
}

/* THE ONE tapTable. */
const taps = LESSON.sections.filter((s) => s.type === 'tapTable');
if (taps.length !== EXPECTED_TAPTABLES) die(`${taps.length} tapTables, expected ${EXPECTED_TAPTABLES}`);
const which = byId(WHICH_SECTION_ID) as { type?: string; rows?: unknown[] } | undefined;
if (!which || which.type !== 'tapTable') die(`${WHICH_SECTION_ID} is missing or is not a tapTable`);
if ((which.rows ?? []).length > 6) die(`${WHICH_SECTION_ID} has ${(which.rows ?? []).length} rows; tapTable is not in ownsLayout() and six is the Pixel 6 ceiling`);

/* THE PUBLISHED EVIDENCE IS ON A SCREEN. */
const ev = byId(EVIDENCE_SECTION_ID);
if (!ev) die(`${EVIDENCE_SECTION_ID} is missing`);
for (const id of EVIDENCE_IDS) {
  const f = IMPORTED_BY_ID.get(id)?.fr ?? '';
  if (!strings(ev).some((s) => s.includes(f))) die(`${EVIDENCE_SECTION_ID} does not draw ${id} ${JSON.stringify(f)}`);
}
console.log(`  layout        grid ${GRID_SECTION_ID} · identity ${IDENTITY_SECTION_ID} (3 verbs on all ${PARADIGM.length} lines) · doubling ${DOUBLED_SECTION_ID} · tapTable ${(which.rows ?? []).length} rows`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS ACT IS THE HEAVIEST, ALONE
 * ═══════════════════════════════════════════════════════════════════════ */

const actSizes = PRENDRE_METTRE_ACTS.map((x) => x.sections.length);
const ownsIx = PRENDRE_METTRE_ACTS.findIndex((x) => x.id === OWNS_ACT_ID);
if (ownsIx < 0) die(`there is no act ${OWNS_ACT_ID}`);
const heaviest = Math.max(...actSizes);
if (actSizes[ownsIx] !== heaviest || actSizes.filter((n) => n === heaviest).length !== 1) {
  die(`the Owns act (${OWNS_ACT_ID}) is not the heaviest alone: ${actSizes.map((n, i) => `${PRENDRE_METTRE_ACTS[i].id}:${n}`).join(' ')}\n`
    + `  Doctrine §B.5: if the paradigm act outweighs the Owns, this has become another table lesson.`);
}
const paradigmIx = PRENDRE_METTRE_ACTS.findIndex((x) => x.id === PARADIGM_ACT_ID);
if (actSizes[paradigmIx] >= actSizes[ownsIx]) {
  die(`the paradigm act has ${actSizes[paradigmIx]} missions and the family act ${actSizes[ownsIx]}.\n`
    + `  Eighteen cells with a story attached is not a lesson.`);
}
const inActs = PRENDRE_METTRE_ACTS.flatMap((x) => x.sections);
const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
if (inActs.join('|') !== sectionIds.join('|')) die('the act running order does not match the section order');
/* AND THE UNSEEN MISSION IS THE LAST ONE BEFORE THE EXAM. */
const unseenIx = sectionIds.indexOf(UNSEEN_SECTION_ID);
const quizIx = sectionIds.indexOf(QUIZ_SECTION_ID);
if (quizIx - unseenIx !== 1) {
  die(`${UNSEEN_SECTION_ID} sits ${quizIx - unseenIx} section(s) before the exam.\n`
    + `  The brief: "It should be the last mission before the quiz."`);
}
console.log(`  acts          ${actSizes.map((n, i) => `${PRENDRE_METTRE_ACTS[i].id}:${n}`).join(' ')}  Owns is ${OWNS_ACT_ID} · ${UNSEEN_SECTION_ID} is last before the exam`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LEARNER-FACING SURFACES
 * ═══════════════════════════════════════════════════════════════════════ */

const learnerText = [
  ...prose(LESSON.sections),
  ...prose(LESSON.sheets),
  ...prose(LESSON.terms),
  ...prose(LESSON.drills),
  LESSON.intro ?? '',
  ...prose(LESSON.overview),
  ...prose(LESSON.acts),
].join('  ');

/** A SECOND WALK, AND THIS BUILD SHIPPED A BANNED WORD PAST THE FIRST ONE.
 *
 *  `prose()` drops NOTATION_KEYS, and `sub` is on that list because on a card it
 *  usually holds a respelling. On a `cardDeck` card it holds PROSE, and this
 *  lesson put "honest" in one: every guard in the batch and the merge was green
 *  and `sons-alphabet.test.ts`, which reads the seed and walks every string,
 *  went red the moment the merge landed.
 *
 *  The house-copy rules and the jargon list are therefore checked over
 *  `display()` as well, which keeps `sub` and drops only machine keys. Nothing
 *  in an IPA or a respelling can be an em dash, the word "honest" or a piece of
 *  grammar jargon, so the wider walk costs nothing and closes the hole. Every
 *  A2 lesson before this one has the same gap. */
const displayText = [
  ...display(LESSON.sections), ...display(LESSON.sheets), ...display(LESSON.terms),
  ...display(LESSON.drills), LESSON.intro ?? '', ...display(LESSON.overview), ...display(LESSON.acts),
].join('  ');

/** THE JARGON MATCH HAS TO COVER THE PLURAL, AND THIS BUILD SHIPPED ONE PAST IT.
 *
 *  `hasPhrase` is boundary-exact, so `paradigm` does not match `paradigms`: the
 *  character after the needle is a letter and the boundary check fails. v2's act
 *  2 was titled "Three paradigms, eighteen cells" and it was read off the resume
 *  interstitial on a Pixel 6 with every host gate green. a2.14's list carries
 *  `infinitive` AND `infinitives` for exactly this reason, one word at a time;
 *  this closes the class instead. */
const hasJargon = (hay: string, j: string) => hasPhrase(hay, j) || hasPhrase(hay, `${j}s`);
const jargon = JARGON.filter((j) => hasJargon(learnerText, j) || hasJargon(displayText, j));
if (jargon.length) die(`grammar jargon on a learner surface: ${jargon.join(', ')}`);
if (!LESSON.intro || LESSON.intro.length < 40) die('the lesson intro is missing or too short to be the cover copy');
const introJargon = JARGON.filter((j) => hasJargon(LESSON.intro!, j));
if (introJargon.length) die(`jargon in Lesson.intro, which is drawn on TWO screens: ${introJargon.join(', ')}`);

/* HOUSE COPY RULES, OVER THE WIDER WALK. */
if (displayText.includes('—')) die('an em dash reached a learner surface');
if (hasPhrase(displayText, 'honest') || hasPhrase(displayText, 'honesty')) {
  die('"honest" is banned from authored content, and it is enforced across the whole seed by sons-alphabet.test.ts.\n'
    + '  NOTE THE WALK: prose() drops `sub`, which on a cardDeck card is prose rather than notation. This build put the\n'
    + '  word in one and every host gate was green until the merge landed and the seed-wide test caught it.');
}
if (allStrings.some((s) => s.includes('‿'))) die('U+203F UNDERTIE reached the lesson; it renders as a low underscore on a Pixel 6');
if (allStrings.some((s) => /[œŒ]/u.test(s))) die('U+0153 œ reached the lesson. The dictée cannot see it and neither can letterCount().');

/* THE REFRAME IS CARRIED VERBATIM, AGAINST AN EXPLICIT CONSTANT. */
const reframeUses = countPhrase(learnerText, REFRAME);
if (reframeUses !== EXPECTED_REFRAME_USES) {
  die(`the reframe appears ${reframeUses} times and the corpus says ${EXPECTED_REFRAME_USES}.\n  ${JSON.stringify(REFRAME)}`);
}
const reframeSections = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
if (reframeSections < 3) die(`the density validator requires the reframe in at least three sections; found ${reframeSections}`);

/* EVERY CITED UNIT IS FINDABLE. */
const uncited = CITED_UNITS.filter((u) => !namesUnitLabel(learnerText, u));
if (uncited.length) {
  die(`these units are named in the corpus as cited and appear nowhere a search can see: ${uncited.join(', ')}\n`
    + `  Check for a possessive: hasPhrase treats "'" as a word character, so "a2.20's" does not match "a2.20".`);
}

/* a2.01's nous/on STATEMENT HAS EXACTLY ONE SECTION HOME. It also appears in the
   nousOn TERM, which is where it is defined; the guard reads sections. */
const nousOnIds = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON))).map((s) => (s as { id?: string }).id);
if (nousOnIds.length !== 2 || nousOnIds[0] !== NOUS_ON_SECTION_ID || nousOnIds[1] !== QUIZ_SECTION_ID) {
  die(`a2.01's nous/on statement appears in [${nousOnIds.join(', ')}]; it belongs in ${NOUS_ON_SECTION_ID} and the one exam question that asks about it`);
}

/* THE SHEET DRAWS ONLY WHAT ReferenceSheet.tsx CAN DRAW. */
const DRAWABLE = new Set(['teach', 'letterGrid', 'table']);
for (const sh of LESSON.sheets ?? []) {
  if (sh.id !== SHEET_ID) die(`sheet id ${sh.id}, expected ${SHEET_ID}`);
  for (const s of sh.sections ?? []) {
    const t = (s as { type?: string }).type ?? '';
    if (!DRAWABLE.has(t)) die(`the sheet holds a "${t}" section. ReferenceSheet.tsx draws teach, letterGrid and table and NOTHING else; a1.13 ships a cheatSheet in a sheet that draws its title and no rows.`);
    if ((s as { layer?: string }).layer !== 'deep') die(`sheet section ${(s as { id?: string }).id} is not at layer deep`);
  }
}
const declaredSheets = new Set((LESSON.sheets ?? []).map((s) => s.id));
for (const s of LESSON.sections) {
  const ref = (s as { sheetId?: string }).sheetId;
  if (ref && !declaredSheets.has(ref)) die(`${(s as { id?: string }).id} names sheet ${ref}, which this lesson does not declare`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  THE BUDGETS ONLY A DEVICE FINDS
 * ═══════════════════════════════════════════════════════════════════════ */

{
  const over = LESSON.sections
    .map((s) => (s as { id?: string; title?: string }))
    .filter((s) => (s.title ?? '').length > MISSION_TITLE_MAX);
  if (over.length) {
    die(`${over.length} mission title(s) past the ${MISSION_TITLE_MAX}-character hub ceiling:\n  `
      + over.map((s) => `${String((s.title ?? '').length).padStart(2)}  ${s.id}  ${JSON.stringify(s.title)}`).join('\n  ')
      + `\n  Ledger §a2.14-13: the budget is a rendered WIDTH and the count is an approximation, so 26 to 27 with wide glyphs is unverified until it has been read off the hub.`);
  }
}

/* EVERY groupDrill ITEM PUTS SOMETHING UNDER THE FRENCH. */
{
  let items = 0;
  for (const s of LESSON.sections) {
    if (s.type !== 'groupDrill') continue;
    for (const g of ((s as { groups?: { items?: Record<string, unknown>[] }[] }).groups ?? [])) {
      for (const it of (g.items ?? [])) {
        items += 1;
        if (!it.note && !it.ipa && !it.respell && !it.en) {
          die(`${(s as { id?: string }).id} has a groupDrill item with no note, ipa, respell or en, so the learner gets the French and a play button and nothing else: ${JSON.stringify(it.fr)}\n`
            + '  583 cards across 28 lessons rendered that way until e584bd8.');
        }
      }
    }
  }
  console.log(`  cards         ${items} groupDrill items, every one carrying something under the French`);
}

/* THE RENDERER'S OWN RULES. */
for (const s of LESSON.sections) {
  const sid = (s as { id?: string }).id;
  if (s.type === 'commonErrors' && !(s as { swipe?: boolean }).swipe) {
    die(`${sid} is a commonErrors section without swipe: true, which renders a blank screen`);
  }
  if (s.type === 'reading') {
    const r = s as { questionsInModal?: boolean; questions?: unknown[] };
    if (!r.questionsInModal || !(r.questions ?? []).length) die(`${sid} is a reading section without questionsInModal AND questions`);
  }
  if (s.type === 'practice') {
    const p = s as { skill?: string; itemIds?: string[] };
    if (p.skill === 'write') die(`${sid} uses practice skill "write", which draws no writing surface`);
    const missing = (p.itemIds ?? []).filter((id) => !PRENDRE_METTRE_ITEM_IDS.includes(id));
    if (missing.length) die(`${sid} practises ids the lesson does not carry: ${missing.join(', ')}`);
  }
  const chips = (s as { terms?: string[] }).terms ?? [];
  if (chips.length > 3) die(`${sid} declares ${chips.length} term chips; the renderer shows three and collapses the rest`);
  for (const t of chips) if (!LESSON.terms?.[t]) die(`${sid} names undefined term "${t}"`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DECK, AND WHAT IT RELEASES
 * ═══════════════════════════════════════════════════════════════════════ */

if ((LESSON.deckTranche ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.deckTranche ?? []).length} deck tranches, expected one per act (${EXPECTED_ACTS})`);
const released = PRENDRE_METTRE_DECK_TRANCHE.flat();
const dupeReleased = released.filter((x, i) => released.indexOf(x) !== i);
if (dupeReleased.length) die(`released twice: ${dupeReleased.join(', ')}`);
const notReleased = PRENDRE_METTRE_ITEM_IDS.filter((id) => !released.includes(id));
if (notReleased.length) die(`in itemIds and released by no act: ${notReleased.join(', ')}`);
const releasedNotCarried = released.filter((id) => !PRENDRE_METTRE_ITEM_IDS.includes(id));
if (releasedNotCarried.length) die(`released and not in itemIds: ${releasedNotCarried.join(', ')}`);

/* EVERY ITEM IS DRAWN BY SOME SECTION, DRILL OR TERM. */
const drawnBy = new Map<string, string[]>();
for (const s of LESSON.sections) {
  const id = (s as { id?: string }).id ?? '(anon)';
  for (const str of strings(s)) if (PRENDRE_METTRE_ITEM_IDS.includes(str)) drawnBy.set(str, [...(drawnBy.get(str) ?? []), id]);
}
for (const d of LESSON.drills ?? []) {
  for (const str of strings(d)) if (PRENDRE_METTRE_ITEM_IDS.includes(str)) drawnBy.set(str, [...(drawnBy.get(str) ?? []), d.id]);
}
for (const t of Object.values(LESSON.terms ?? {})) {
  for (const str of strings(t)) if (PRENDRE_METTRE_ITEM_IDS.includes(str)) drawnBy.set(str, [...(drawnBy.get(str) ?? []), 'term']);
}
const undrawn = PRENDRE_METTRE_ITEM_IDS.filter((id) => !drawnBy.has(id));
if (undrawn.length) {
  die(`${undrawn.length} item(s) are in itemIds, released by an act, and drawn by NO section, drill or term:\n  ${undrawn.join('\n  ')}\n`
    + `  a1.08 shipped forty-three of these. They resolve, they validate, and a learner never sees them.`);
}

/* NOTHING IS RELEASED BEFORE THE ACT THAT SHOWS IT. */
PRENDRE_METTRE_DECK_TRANCHE.forEach((tranche, actIx) => {
  const shownBy = new Set<string>();
  for (let i = 0; i <= actIx; i += 1) for (const sid of PRENDRE_METTRE_ACTS[i].sections) shownBy.add(sid);
  for (const id of tranche) {
    const where = drawnBy.get(id) ?? [];
    if (!where.some((w) => shownBy.has(w) || w === 'term' || (LESSON.drills ?? []).some((d) => d.id === w))) {
      die(`${id} is released at the end of ${PRENDRE_METTRE_ACTS[actIx].id} and is first drawn in ${where.join(', ') || 'nothing'}`);
    }
  }
});

/* SPEAK ONLY WHAT THE MIC CAN SCORE. */
const unspeakable = PRENDRE_METTRE_SPEAK_IDS.filter((id) => {
  const r = PRENDRE_METTRE.find((x) => x.id === id);
  return !r || !r.drills.includes('voiceflash');
});
if (unspeakable.length) die(`the speak deck names rows without a voiceflash drill, which the mic cannot score: ${unspeakable.join(', ')}`);

/* READ-ONLY ROWS ARE RELEASED TO NOTHING, AND SO IS THE REPAIR-ONLY ROW. */
for (const r of READ_ONLY_ROWS) {
  if (PRENDRE_METTRE_ITEM_IDS.includes(r.id)) die(`${r.id} is read-only and is in itemIds`);
  if (released.includes(r.id)) die(`${r.id} is read-only and is released by a deck tranche`);
}
for (const r of REPAIR_ONLY_ROWS) {
  if (PRENDRE_METTRE_ITEM_IDS.includes(r.id)) {
    die(`${r.id} is repaired and carried and it is in itemIds. It is not imported: this build fixes its respelling in Postgres and in the seed and shows it on no screen.`);
  }
  if (strings(LESSON).some((s) => s === r.id)) die(`${r.id} is named in the lesson body`);
}
const tieRow = READ_NOT_IMPORTED.find((r) => r.why.includes('U+203F'));
if (!tieRow) die('the U+203F refusal is no longer recorded in READ_NOT_IMPORTED');
const ligatureRow = READ_NOT_IMPORTED.find((r) => r.why.includes('U+0153'));
if (!ligatureRow) die('the U+0153 refusal is no longer recorded in READ_NOT_IMPORTED; it is the reason battre les œufs is not this lesson frame');

console.log(`  decks         ${PRENDRE_METTRE_ITEM_IDS.length} items, all released exactly once and all drawn · ${PRENDRE_METTRE_SPEAK_IDS.length} speak · ${REPAIR_ONLY_ROWS.length} repaired and shown to nobody`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE QUIZ
 * ═══════════════════════════════════════════════════════════════════════ */

const rounds = (byId(QUIZ_SECTION_ID) as { rounds?: { id: string; targets?: string[]; questions: unknown[] }[] })?.rounds ?? [];
if (rounds.length !== EXPECTED_ROUNDS) die(`${rounds.length} rounds, expected ${EXPECTED_ROUNDS}`);
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) {
  die('more than one quiz section. lessonPager.logic.ts appends exactly one and the rest are silently never rendered.');
}

const mcq = qs.filter((q) => (q as { format?: string }).format === 'mcq').length;
if (mcq * 2 > qs.length) die(`${mcq} of ${qs.length} questions are mcq; at most half may be`);
for (const q of qs) {
  const qq = q as { q: string; why?: string; ref?: string; format?: string; answer?: string; accept?: string[] };
  if (!qq.why) die(`a question has no why: ${JSON.stringify(qq.q)}`);
  if (!qq.ref) die(`a question has no ref: ${JSON.stringify(qq.q)}`);
  if (!byId(qq.ref)) die(`a question refs ${qq.ref}, which is not a section in this lesson`);
  if (qq.format === 'typeIn' || qq.format === 'errorSpot') {
    if (!matchesAccept(qq.answer ?? '', qq.accept ?? [])) {
      die(`a ${qq.format} question displays ${JSON.stringify(qq.answer)} and does not accept it: ${JSON.stringify(qq.q)}`);
    }
  }
  /* EVERY QUESTION FIXES PERSON AND NUMBER. The brief asks for it by name, and
     on a paradigm whose three singular persons are one sound it is the
     difference between a question and a coin toss. */
  if (qq.format === 'typeIn') {
    const frame = String(qq.q);
    if (!/(^|[^a-zà-ÿ])(je|j'|tu|il|elle|on|nous|vous|ils|elles)(?![a-zà-ÿ])/i.test(frame)) {
      die(`a typeIn question fixes no person: ${JSON.stringify(frame)}\n  The brief: "Every question needs a subject pronoun or a frame that fixes person and number."`);
    }
  }
}

/* NO EAR QUESTION BETWEEN TWO MEMBERS OF ONE HOMOPHONE GROUP. THREE GROUPS HERE,
   one per verb: the three singular persons of each are one sound. */
for (const q of qs) {
  if ((q as { format?: string }).format !== 'listenChoose') continue;
  const opts = ((q as { opts?: string[] }).opts ?? []);
  for (const group of HOMOPHONE_FORMS) {
    for (const x of group) {
      for (const y of group) {
        if (x === y) continue;
        for (let i = 0; i < opts.length; i += 1) {
          for (let j = 0; j < opts.length; j += 1) {
            if (i === j) continue;
            if (opts[i].replace(x, y) === opts[j]) {
              die(`a listenChoose offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}, which differ only by ${x}/${y}. They are one sound and the question has no correct answer.`);
            }
          }
        }
      }
    }
  }
  if (!(q as { say?: string }).say) die(`a listenChoose has no "say"; the card would speak the correct option aloud`);
}

/* EACH ROUND LEADS ON A DIFFERENT TRIGGER. */
const triggerById = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t]));
const leads: string[] = [];
for (const r of rounds) {
  const first = (r.targets ?? []).find((t) => triggerById.get(t)?.drill);
  if (!first) die(`round ${r.id} has no target with a drill, so failing it teaches nothing`);
  leads.push(first);
}
const dupeLeads = leads.filter((x, i) => leads.indexOf(x) !== i);
if (dupeLeads.length) die(`two rounds lead on the same trigger (${dupeLeads.join(', ')}), so at least one drill can never fire`);
for (const t of LESSON.errorTriggers ?? []) {
  if (!leads.includes(t.id)) die(`trigger ${t.id} is never the FIRST resolving target of any round, so its drill is dead content`);
  if (!(LESSON.drills ?? []).some((d) => d.id === t.drill)) die(`trigger ${t.id} names drill ${t.drill}, which does not exist`);
  if (t.retest && !(LESSON.drills ?? []).some((d) => d.id === t.retest)) die(`trigger ${t.id} names retest ${t.retest}, which does not exist`);
  for (const on of t.detectOn ?? []) {
    const secId = on.split('/')[0];
    if (!byId(secId)) die(`trigger ${t.id} detects on ${on}, and ${secId} is not a section`);
  }
}
console.log(`  quiz          ${qs.length} questions, ${mcq} mcq (${Math.round((mcq / qs.length) * 100)}%), ${rounds.length} rounds · every why, ref and person resolves`);

/* ══════════════════════════════════════════════════════════════════════════
 *  SCHEMA AND DENSITY
 * ═══════════════════════════════════════════════════════════════════════ */

for (const it of AUTHORED_ITEMS) {
  const issues = validateItem(it);
  if (issues.length) die(`${it.id} fails validateItem:\n${formatIssues(issues)}`);
}
const lessonIssues = validateLesson(LESSON);
if (lessonIssues.length) die(`the lesson fails validateLesson:\n${formatIssues(lessonIssues)}`);
const density = validateDensity(LESSON);
if (density.length) die(`density:\n${formatDensity(density)}`);

/* NO DUPLICATE fr WITHIN THE THEME. */
const strip = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des |du |de la )/u, '').trim();
const seen = new Map<string, string>();
for (const r of PRENDRE_METTRE) {
  const k = strip(r.fr);
  if (seen.has(k)) die(`${r.id} and ${seen.get(k)} share an fr inside ${THEME}: ${JSON.stringify(r.fr)}`);
  seen.set(k, r.id);
}

/* NO AUTHORED ROW JOINS a1.03's MEASURED ENDING POPULATION. Through the REAL
   endingPopulation: a1.08 shipped a hand-rolled copy carrying a filter the real
   one does not have. The three authored infinitives are the reason this matters
   more here than in the five builds before it. */
const pop = endingPopulation(AUTHORED_ITEMS as never);
if (pop.length) die(`${pop.length} authored row(s) join a1.03's ending population: ${pop.map((p) => (p as { id?: string }).id ?? '?').join(', ')}`);

console.log(`  schema        ${AUTHORED_ITEMS.length} items valid · lesson valid · density clean · 0 duplicate fr · 0 rows in the ending population`);

/* ══════════════════════════════════════════════════════════════════════════
 *  POSTGRES
 * ═══════════════════════════════════════════════════════════════════════ */

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  /* THE ID BLOCK. Ledger §10: the row COUNT is the only signal, and ledger
     §a2.14-12 narrows it — a total that has GROWN by somebody else's allocation
     is a report, a total that has SHRUNK is fatal, and rows inside THIS range
     that this build does not own stay fatal. */
  const blk = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.verbes.%'",
  );
  const before = Number(blk.rows[0].n);
  if (before < ROW_COUNT_BEFORE) {
    c.release(); await pool.end();
    die(`fr.a2.verbes holds ${before} rows and the ledger says ${ROW_COUNT_BEFORE} before this build. A total that has SHRUNK means somebody has deleted rows.`);
  }
  if (before !== ROW_COUNT_BEFORE && before !== ROW_COUNT_BEFORE + AUTHORED_ITEMS.length) {
    console.log(`  !! fr.a2.verbes holds ${before} rows; the ledger says ${ROW_COUNT_BEFORE} before this build and ${ROW_COUNT_BEFORE + AUTHORED_ITEMS.length} after.`);
    console.log(`     Somebody else has allocated inside the theme. Reported, not fatal; the range check below is the one that matters.`);
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

  /* THE THREE AUTHORED INFINITIVES DO NOT EXIST YET, ANYWHERE, AT ANY STATUS.
     That is the claim that makes this the first A2 build to author one, and it
     is checked rather than trusted. */
  const clash = await c.query<{ id: string; fr: string; status: string }>(
    'select id, fr, status from content_items where lower(fr) = any($1) and id <> all($2)',
    [Object.keys(AUTHORED_INFINITIVES).map((w) => w.toLowerCase()), AUTHORED_IDS],
  );
  if (clash.rowCount) {
    c.release(); await pool.end();
    die(`these headwords already exist and this build authors them:\n  ${clash.rows.map((r) => `${r.id} ${JSON.stringify(r.fr)} (${r.status})`).join('\n  ')}\n`
      + `  Corrections §2: import rather than author. If somebody has published one since 2026-08-12, import it instead.`);
  }

  /* THE MANIFEST, FIELD BY FIELD, AGAINST POSTGRES RATHER THAN THE SEED. */
  const allImported = [...CARRIED_IDS, ...READ_ONLY_ROWS.map((r) => r.id)];
  const live = await c.query<Record<string, unknown>>(
    'select *, drills::text[] drills from content_items where id = any($1)', [allImported]);
  const liveBy = new Map(live.rows.map((r) => [String(r.id), r]));
  const stale: string[] = [];
  for (const id of allImported) {
    const row = liveBy.get(id);
    if (!row) { stale.push(`${id} is not in Postgres`); continue; }
    if (row.status !== 'published') stale.push(`${id} is ${row.status}`);
    const rec = IMPORTED_BY_ID.get(id) ?? REPAIR_ONLY_ROWS.find((r) => r.id === id) ?? READ_ONLY_ROWS.find((r) => r.id === id);
    if (!rec) { stale.push(`${id} is in no manifest group`); continue; }
    if (rec.fr !== row.fr) stale.push(`${id} fr: manifest ${JSON.stringify(rec.fr)}, Postgres ${JSON.stringify(row.fr)}`);

    /* THE MANIFEST IS A PRE-BATCH READ, so it legitimately disagrees with
       Postgres on every row this build transforms once the build has run.
       a2.13 §3.8. */
    const transformed = RESPELL_REPAIRS.some((r) => r.id === id) || RESPELL_ADDITIONS.some((x) => x.id === id);
    if (!transformed && (rec.respell ?? null) !== (row.respell ?? null)) {
      stale.push(`${id} respell: manifest ${JSON.stringify(rec.respell)}, Postgres ${JSON.stringify(row.respell)}`);
    }
    const drillsTransformed = DRILL_ADDITIONS.some((d) => d.id === id);
    if (!drillsTransformed) {
      const mine = [...(rec.drills ?? [])].sort().join(',');
      const theirs = pgArray(row.drills).sort().join(',');
      if (mine !== theirs) stale.push(`${id} drills: manifest ${mine}, Postgres ${theirs}`);
    }
  }
  if (stale.length) {
    c.release(); await pool.end();
    die(`the manifest is stale. Regenerate it with pnpm tsx scripts/_a215_manifest.ts:\n  ${stale.join('\n  ')}`);
  }

  /* THE REPAIRS MUST STILL APPLY. A guarded update that matches nothing reports
     success and changes nothing. */
  const pending: string[] = [];
  for (const r of RESPELL_REPAIRS) {
    const stored = String(liveBy.get(r.id)?.respell ?? '');
    if (!stored.includes(r.from) && !stored.includes(r.to)) pending.push(`${r.id} holds ${JSON.stringify(stored)}, which contains neither the value to repair nor the repaired one`);
  }
  for (const d of DRILL_ADDITIONS) {
    if (!liveBy.get(d.id)) pending.push(`${d.id} takes a drill addition and is not in Postgres`);
  }
  if (pending.length) {
    c.release(); await pool.end();
    die(`repairs cannot be applied safely:\n  ${pending.join('\n  ')}`);
  }

  /* THE UNIT, BYTE FOR BYTE. Corrections §1. */
  const ur = await c.query<{ body: Unit }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID],
  );
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

  /* DEPENDENTS. a2.13 kept a2.02's strict check because it had two; a2.12 had to
     loosen it because it genuinely had none. Probed rather than copied. */
  const dependents = await c.query<{ id: string; seq: number }>(
    "select body->>'id' id, (body->>'seq')::int seq from content_units where kind = 'curriculum_unit' and body->'prereqUnitIds' ? $1 order by 2", [UNIT_ID],
  );
  if (dependents.rowCount === 0) {
    console.log(`  !! ${UNIT_ID} is a LEAF: no unit declares it as a prerequisite. Measured 2026-08-12 and reported, not fatal.`);
    console.log(`     a2.03 (seq 10) is next on the trail and rests on a1.14 and a1.16, not on this one.`);
  } else {
    console.log(`  trail         ${dependents.rowCount} unit(s) rest on ${UNIT_ID}: ${dependents.rows.map((r) => `${r.id}(seq ${r.seq})`).join(' ')}`);
  }

  const already = (unit.lessonIds ?? []).includes(LESSON.id);
  console.log(`  unit          ${UNIT_ID} seq ${unit.seq}, tag ${expectedTag}, lessonIds ${JSON.stringify(unit.lessonIds ?? [])}${already ? '  (re-run)' : '  (first lesson)'}`);
  const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

  /* THE VERSION MOVES FORWARD WHEN THE CONTENT MOVES. */
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
    // value is not silently overwritten.
    for (const r of RESPELL_REPAIRS) {
      await c.query(
        'update content_items set respell = replace(respell, $2, $3) where id = $1 and respell like $4',
        [r.id, r.from, r.to, `%${r.from}%`],
      );
    }
    // THE DRILL ADDITIONS. `drills` is an ENUM ARRAY (drill_kind[]), not text[]:
    // concatenating a text[] onto it fails with "operator does not exist:
    // drill_kind[] || text[]" and takes the whole transaction with it. Ledger §5.
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
    [[...RESPELL_REPAIRS.map((r) => r.id), ...DRILL_ADDITIONS.map((d) => d.id)]],
  );
  const post = new Map(check.rows.map((r) => [r.id, r] as const));
  const failed: string[] = [];
  for (const r of RESPELL_REPAIRS) {
    const now = String(post.get(r.id)?.respell ?? '');
    if (!now.includes(r.to)) failed.push(`${r.id} respell is ${JSON.stringify(now)} and does not contain ${JSON.stringify(r.to)}`);
    if (now.includes(r.from) && r.from !== r.to) failed.push(`${r.id} still contains the unrepaired ${JSON.stringify(r.from)}`);
  }
  for (const d of DRILL_ADDITIONS) {
    if (!pgArray(post.get(d.id)?.drills).includes(d.add)) failed.push(`${d.id} still has no ${d.add} drill`);
  }
  if (failed.length) { c.release(); await pool.end(); die(`the transaction committed and these did not land:\n  ${failed.join('\n  ')}`); }

  console.log(
    `\n  applied to Postgres:\n`
    + `    ${AUTHORED_ITEMS.length} rows authored, ${AUTHORED_ITEMS[0].id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1].id}\n`
    + `      ${Object.keys(AUTHORED_INFINITIVES).length} INFINITIVES AUTHORED (${Object.keys(AUTHORED_INFINITIVES).join(', ')}), a first in this band\n`
    + `      ${HEAD_IDS.length} paradigm cells on ${new Set(VERB_ORDER.map((v) => FRAMES[v].complement)).size} frames, ${COMPOUND_ROWS.length} compound sentences\n`
    + `    ${RESPELL_REPAIRS.length} respellings repaired (${RESPELL_REPAIRS_VISIBLE.length} the checker sees, ${RESPELL_REPAIRS_INVISIBLE.length} it does not), ${DRILL_ADDITIONS.length} drill additions, all verified after the commit\n`
    + `    ${IMPORTED_IDS.length} rows imported by id out of ${SOURCE_THEMES.length} themes, 1 repaired and shown to nobody\n`
    + `    ${READ_ONLY_ROWS.length} rows read and refused\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${PRENDRE_METTRE_ITEM_IDS.length} items\n`
    + `    fr.a2.verbes row count: ${before} before, ${after.rows[0].n} after (max ${after.rows[0].mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-prendre-mettre-into-seed.ts\n`,
  );

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
