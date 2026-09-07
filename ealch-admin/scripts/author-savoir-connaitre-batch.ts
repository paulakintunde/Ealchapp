/* a2.14 "Irréguliers 4 : savoir & connaître" — corpus, lesson and terms, applied
 * to Postgres in one transaction.
 *
 *     pnpm content:savoir-connaitre --dry-run
 *     pnpm content:savoir-connaitre
 *
 * ── WHAT THIS BATCH GUARDS THAT NO EARLIER ONE DID ────────────────────────
 *
 * THE REFRAME, ROW BY ROW. Every authored row declares what follows its verb
 * (`complement`), and the batch checks that declaration against the FRENCH and
 * against the verb. A savoir row whose complement is a bare name, or a connaître
 * row whose complement is a clause, fails the build. That is the lesson's whole
 * claim and it is the one thing a later author is most likely to break by adding
 * a plausible sentence.
 *
 * THE TWO FRAMES ARE DIFFERENT, AND THE CHECK IS THE INVERSE OF a2.13's.
 * a2.13 asserts that its eighteen grid rows share ONE second verb. Copying that
 * here would fail a correct build: savoir and connaître take different
 * complements by construction, and a shared frame would delete the only thing
 * the grid exists to show. This batch asserts that the two columns use exactly
 * one frame EACH and that the two frames DIFFER.
 *
 * THE CONNAÎTRE-BEFORE-A-CLAUSE GUARD IS SCOPED, AND IT HAS TO BE.
 * « Je ne connais que le centre-ville. » is correct French and is published
 * three times. `ne … que` is a restriction rather than a clause opener, and the
 * thing is still there behind it. This lesson authors no `ne … que`, so the
 * absolute rule is safe to assert over ITS OWN strings, and the guard says so
 * in its failure message rather than leaving the next author to discover it.
 *
 * ── GUARDS COPIED, WITH THE REASON ────────────────────────────────────────
 *
 * The jargon walk includes `intro` AND `overview` (ledger §0, corrections §9).
 * The manifest staleness check EXEMPTS the rows this build transforms (a2.13
 * §3.8: a pre-batch manifest legitimately disagrees with Postgres after a
 * successful run, and a strict equality makes the batch refuse its own second
 * run). Every itemId must be DRAWN by some section, drill or term (a1.08 shipped
 * forty-three that were not). The grid on screen is compared to the rows the
 * learner is scored on (a2.13 §6.2).
 *
 * ── GUARDS DELIBERATELY NOT COPIED ────────────────────────────────────────
 *
 * a2.13's stem-recipe derivation. These two verbs have no shared recipe and
 * inventing one would be a claim the language does not support.
 *
 * a2.13's "one frame across the whole grid". See above; it is inverted here.
 *
 * a2.10's respell-repair guard, which requires the stored value to be FLAGGED
 * before it accepts a repair. This build's one repair is not a rule violation
 * and is not flagged; it is a teaching repair, argued for in the corpus, and it
 * is guarded by RESPELL_REPAIRS_STEM's own rule instead.
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
import { namesUnitLabel } from './data/_unit-ref.ts';
import {
  ASSERTED_RESPELLINGS, AUTHORED_IDS, BLIND_NASALS, BLIND_NASAL_ROWS, CHROME_DECISION, CIRCUMFLEX,
  CITED_UNITS, CLAUSE_OPENERS, CONNAITRE_CLAUSE_SHAPE, CONNAITRE_SHAPE,
  CONTRAST_UNIT, DICTATION_IDS, DRILL_ADDITIONS, EXPECTED_ACTS,
  EXPECTED_AUTHORED, EXPECTED_DICTATION, EXPECTED_DRILLS,
  EXPECTED_DRILL_ADDITIONS, EXPECTED_FRAME_ROWS, EXPECTED_IMPORTED,
  EXPECTED_PERSONS, EXPECTED_QUESTIONS, EXPECTED_READ_ONLY,
  EXPECTED_REFRAME_USES, EXPECTED_RESPELL_ADDITIONS, EXPECTED_RESPELL_REPAIRS,
  EXPECTED_ROUNDS, EXPECTED_SECTIONS, EXPECTED_SHEETS, EXPECTED_SKILL_VERBS,
  EXPECTED_SOURCE_THEMES, EXPECTED_TAPTABLES, EXPECTED_TRIGGERS,
  EXPECTED_GROUPDRILLS, EXPECTED_GROUPDRILL_ITEMS, EXPECTED_VERBS,
  FALSE_POSITIVE_CANDIDATES, GROUPDRILL_LG_DROPS, GROUPDRILL_LG_RENDERS,
  MISSION_TITLE_MAX, FAMILY_MEMBER, FAMILY_NOT_NAMED,
  FAMILY_UNIT, FLAT_SPELLINGS, FLAT_SPELLING_SHAPE, FRAMES, FRAME_ROWS,
  FLAT_PERMITTED, FUTURE_FORMS, FUTURE_SHAPE, HOMOPHONE_FORMS, IMPOSSIBLE, IMPOSSIBLE_STRINGS,
  LESSON_ID, NAMING_FORMS, OWNED_ID_RANGE, OWNS_ACT_ID, PARADIGM, PARADIGM_IDS,
  PAST_SHAPE, POUVOIR_ALLOWED, POUVOIR_FORBIDDEN_SHAPE, READ_NOT_IMPORTED,
  RESPELL_ADDITIONS, RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_STEM,
  RESPELL_REPAIRS_VISIBLE, ROW_COUNT_BEFORE, SAVOIR_CONNAITRE, SAVOIR_SHAPE,
  SINGULAR_PERSONS, SINGULAR_SPELLINGS, THEME, TRAP_PAIR,
  UNIT, UNIT_ID as CORPUS_UNIT_ID, VERB_ORDER, VISIBLE_NASALS, paradigmIds,
  toItem, type ScRow, type Verb,
} from './data/savoir-connaitre-corpus.ts';
import {
  EVIDENCE_IDS, IMPORTED_BY_ID, IMPORTED_IDS, READ_ONLY_ROWS,
  SKILL_VERBS, SOURCE_THEMES, repairedRespell, verbId,
} from './data/savoir-connaitre-imported.ts';
import {
  ADJACENT_PAIR, EVIDENCE_SECTION_ID, FAMILY_SECTION_ID, GOALS_SECTION_ID,
  GRID_SECTION_ID, IMPOSSIBLE_SECTION_ID, NEXT_SECTION_ID, NOUS_ON,
  NOUS_ON_SECTION_ID, PLACE_SECTION_ID, POUVOIR_SECTION_ID, QUIZ_SECTION_ID,
  REFRAME, ROUNDUP_SECTION_ID, SAVOIR_CONNAITRE_ACTS,
  SAVOIR_CONNAITRE_DECK_TRANCHE, SAVOIR_CONNAITRE_ITEM_IDS,
  SAVOIR_CONNAITRE_LESSON, SAVOIR_CONNAITRE_SPEAK_IDS, SHEET_ID,
  SITUATIONS_SECTION_ID, TRAP_SECTION_ID,
} from './data/savoir-connaitre-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = SAVOIR_CONNAITRE_LESSON;
const UNIT_ID = 'a2.14';

const JARGON = [
  'conjugation', 'conjugate', 'conjugated', 'infinitive', 'infinitives',
  'conditional', 'indicative', 'subjunctive', 'morpheme', 'inflection',
  'paradigm', 'orthography', 'phoneme', 'modal verb', 'modal verbs',
  'auxiliary', 'first person', 'second person', 'third person',
  // Added here: this lesson's own subject invites them.
  'direct object', 'subordinate clause', 'transitive', 'intransitive',
  'complement', 'noun phrase', 'circumflex', 'diacritic',
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
 *  syllables with a full stop, so `/nu sa.vɔ̃/` reads as a standalone word
 *  `vɔ̃`, and a2.01's aller check fired on `.va.` while its lesson was correct. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment', 'sub']);

/** Machine keys. Section ids, refs and accept-lists are not learner surfaces and
 *  a guard that reads them fires on `s07-second-verb` and on the flat variants a
 *  typed question has to accept. Both happened on the first run of this build's
 *  circumflex guard. */
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
 *  looks exactly like an absence. a2.02 shipped that bug and a2.12 found it.
 *  It bites harder here than anywhere: `connaît` ends in `t` and `connaître`
 *  does not, and both sit beside an accent.
 *
 *  Note also that `'` counts as a word character, which is why every unit
 *  citation in this lesson is followed by a comma, a space or a full stop rather
 *  than by an apostrophe-s. */
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

const AUTHORED_ITEMS: Item[] = SAVOIR_CONNAITRE.map(toItem);
const RESPELL_REPAIRS = [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE, ...RESPELL_REPAIRS_STEM];
const byId = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection) die('the lesson has no quiz section');
const qs = quizQuestions(quizSection);

console.log(`\n  a2.14 "Irréguliers 4 : savoir & connaître"${DRY_RUN ? '  (dry run)' : ''}\n`);

/* ══════════════════════════════════════════════════════════════════════════
 *  COUNTS, AGAINST EXPLICIT CONSTANTS
 * ═══════════════════════════════════════════════════════════════════════ */

if (CORPUS_UNIT_ID !== UNIT_ID) die(`the corpus says the unit is ${CORPUS_UNIT_ID} and this batch says ${UNIT_ID}`);
if (LESSON.id !== LESSON_ID) die(`the corpus says the lesson is ${LESSON_ID} and the lesson says ${LESSON.id}`);
if (SAVOIR_CONNAITRE.length !== EXPECTED_AUTHORED) die(`${SAVOIR_CONNAITRE.length} authored rows, expected ${EXPECTED_AUTHORED}`);
if (FRAME_ROWS.length !== EXPECTED_FRAME_ROWS) die(`${FRAME_ROWS.length} grid rows, expected ${EXPECTED_FRAME_ROWS}`);
if (IMPORTED_IDS.length !== EXPECTED_IMPORTED) die(`${IMPORTED_IDS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
if (SOURCE_THEMES.length !== EXPECTED_SOURCE_THEMES) die(`imported out of ${SOURCE_THEMES.length} themes, expected ${EXPECTED_SOURCE_THEMES}`);
if (READ_ONLY_ROWS.length !== EXPECTED_READ_ONLY) die(`${READ_ONLY_ROWS.length} read-only rows, expected ${EXPECTED_READ_ONLY}`);
if (SKILL_VERBS.length !== EXPECTED_SKILL_VERBS) die(`${SKILL_VERBS.length} skill verbs, expected ${EXPECTED_SKILL_VERBS}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`${(LESSON.acts ?? []).length} acts, expected ${EXPECTED_ACTS}`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`${(LESSON.errorTriggers ?? []).length} triggers, expected ${EXPECTED_TRIGGERS}`);
if ((LESSON.drills ?? []).length !== EXPECTED_DRILLS) die(`${(LESSON.drills ?? []).length} drills, expected ${EXPECTED_DRILLS}`);
if ((LESSON.sheets ?? []).length !== EXPECTED_SHEETS) die(`${(LESSON.sheets ?? []).length} sheets, expected ${EXPECTED_SHEETS}`);
if (DICTATION_IDS.length !== EXPECTED_DICTATION) die(`${DICTATION_IDS.length} dictation targets, expected ${EXPECTED_DICTATION}`);
if (RESPELL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`${RESPELL_REPAIRS.length} respell repairs, expected ${EXPECTED_RESPELL_REPAIRS}`);
if (RESPELL_ADDITIONS.length !== EXPECTED_RESPELL_ADDITIONS) die(`${RESPELL_ADDITIONS.length} respell additions, expected ${EXPECTED_RESPELL_ADDITIONS}`);
if (DRILL_ADDITIONS.length !== EXPECTED_DRILL_ADDITIONS) die(`${DRILL_ADDITIONS.length} drill additions, expected ${EXPECTED_DRILL_ADDITIONS}`);
if (VERB_ORDER.length !== EXPECTED_VERBS) die(`${VERB_ORDER.length} verbs, expected ${EXPECTED_VERBS}`);
if (PARADIGM.length !== EXPECTED_PERSONS) die(`${PARADIGM.length} persons, expected ${EXPECTED_PERSONS}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`${qs.length} quiz questions, expected ${EXPECTED_QUESTIONS}`);
console.log(`  counts        ${SAVOIR_CONNAITRE.length} authored · ${IMPORTED_IDS.length} imported from ${SOURCE_THEMES.length} themes · ${LESSON.sections.length} sections · ${EXPECTED_ACTS} acts · ${qs.length} questions`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE TWO FRAMES, AND THEY MUST DIFFER
 *
 *  a2.13 asserts its eighteen grid rows share ONE second verb. That check
 *  copied here would fail a correct build, because the complement is the thing
 *  being taught. What must hold is that each column uses exactly one frame and
 *  that the two frames are not the same word.
 * ═══════════════════════════════════════════════════════════════════════ */

for (const v of VERB_ORDER) {
  const colRows = paradigmIds(v).map((id) => SAVOIR_CONNAITRE.find((r) => r.id === id)!);
  if (colRows.length !== EXPECTED_PERSONS) die(`${v} has ${colRows.length} grid rows, expected ${EXPECTED_PERSONS}`);
  const complement = FRAMES[v].complement;
  for (const r of colRows) {
    if (!hasPhrase(r.fr, complement)) die(`${r.id} is a ${v} grid row and does not carry the frame ${JSON.stringify(complement)}`);
  }
  // and it must be the LAST word, which is what makes reading down the column
  // show that only the middle of the sentence moves.
  for (const r of colRows) {
    const tail = r.fr.replace(/[.!?…]\s*$/u, '').trim().split(/\s+/u).pop();
    if (tail !== complement) die(`${r.id} does not END on the frame: ${JSON.stringify(r.fr)} ends on ${JSON.stringify(tail)}`);
  }
}
if (FRAMES.savoir.complement === FRAMES['connaître'].complement) {
  die('the two columns share one frame word.\n'
    + '  a2.13 got eighteen cells onto one frame and that was right for a lesson whose claim was that\n'
    + '  the back of the sentence never moves. Here the back of the sentence IS the teaching, and a\n'
    + '  shared frame deletes the only difference the grid exists to show.');
}
if (FRAMES.savoir.kind === FRAMES['connaître'].kind) {
  die(`both frames are declared as ${FRAMES.savoir.kind}. One must be a verb and the other a name.`);
}
console.log(`  frames        savoir + ${FRAMES.savoir.complement} (${FRAMES.savoir.kind}) · connaître + ${FRAMES['connaître'].complement} (${FRAMES['connaître'].kind})`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE REFRAME, CHECKED ROW BY ROW AGAINST THE FRENCH
 *
 *  THE ONE GUARD THIS LESSON EXISTS FOR. Every authored row declares what
 *  follows its verb; the batch checks that declaration is TRUE of the sentence.
 * ═══════════════════════════════════════════════════════════════════════ */

/** The word directly after the given verb form in a sentence, or null. */
function afterVerb(sentence: string, form: string): string | null {
  const toks = sentence.replace(/[.,!?…]/gu, ' ').split(/\s+/u).filter(Boolean);
  const ix = toks.findIndex((t) => t.toLowerCase() === form.toLowerCase());
  if (ix < 0) return null;
  return toks[ix + 1] ?? null;
}

/** Is this token a clause opener?
 *
 *  IT CANNOT BE A SET MEMBERSHIP TEST, because `que` elides onto a following
 *  vowel and arrives as ONE token: `qu'elle`, `qu'il`, `qu'on`. A set lookup
 *  reports the commonest shape in the lesson as "not a clause" and lets a real
 *  connaître-plus-clause sentence through. Found by this guard firing on
 *  fr.a2.verbes.408, which is correct savoir-plus-clause. */
const CLAUSE_SET = new Set<string>(CLAUSE_OPENERS);
const opensClause = (w: string): boolean => {
  const t = w.toLowerCase().replace(/[«»,.!?…]/gu, '');
  return CLAUSE_SET.has(t) || /^qu['’]/u.test(t);
};
const isVerbish = (w: string) => /(er|ir|re|oir)$/i.test(w);

for (const r of SAVOIR_CONNAITRE) {
  if (!r.verb) continue;
  const form = PARADIGM.find((p) => hasPhrase(r.fr, p.forms[r.verb!]))?.forms[r.verb];
  if (!form) die(`${r.id} is declared as a ${r.verb} row and carries no form of it: ${JSON.stringify(r.fr)}`);
  const next = afterVerb(r.fr, form);

  if (r.verb === 'connaître') {
    if (r.complement === 'clause') die(`${r.id} declares a clause after connaître. There is no such sentence in French.`);
    if (next && opensClause(next)) {
      die(`${r.id} puts ${JSON.stringify(next)} straight after ${form}: ${JSON.stringify(r.fr)}\n`
        + `  connaître has to land on a thing. NOTE: « ne … que » IS legal French with connaître and is published\n`
        + `  three times (fr.a2.negation-et-restriction.177 and two b1 rows). This lesson authors none, which is\n`
        + `  what makes the absolute rule safe to assert over its OWN strings. If you are adding a ne … que\n`
        + `  sentence deliberately, widen this guard and say so in the corpus header.`);
    }
  }

  if (r.verb === 'savoir') {
    if (r.complement === 'name') {
      die(`${r.id} declares a bare name after savoir: ${JSON.stringify(r.fr)}\n`
        + `  This lesson deliberately authors no savoir-plus-noun sentence. « savoir la réponse » exists in\n`
        + `  French and so does « connaître la réponse », and opening that case makes the reframe false on the\n`
        + `  lesson's own content. Corpus header, and READ_NOT_IMPORTED holds the two rows refused for it.`);
    }
    if (r.complement === 'verb' && next && !isVerbish(next)) {
      die(`${r.id} declares a verb after savoir and the next word is ${JSON.stringify(next)}: ${JSON.stringify(r.fr)}`);
    }
    if (r.complement === 'clause' && next && !opensClause(next)) {
      die(`${r.id} declares a clause after savoir and the next word is ${JSON.stringify(next)}: ${JSON.stringify(r.fr)}`);
    }
  }
}

/* AND THE TWO SIDES ARE BOTH POPULATED, so a build cannot pass by having no
   rows on one side of the contrast at all. */
const savoirRows = SAVOIR_CONNAITRE.filter((r) => r.verb === 'savoir');
const connRows = SAVOIR_CONNAITRE.filter((r) => r.verb === 'connaître');
if (savoirRows.length < EXPECTED_PERSONS + 3) die(`only ${savoirRows.length} savoir rows; the grid alone needs ${EXPECTED_PERSONS}`);
if (connRows.length < EXPECTED_PERSONS + 3) die(`only ${connRows.length} connaître rows; the grid alone needs ${EXPECTED_PERSONS}`);
const savoirClauses = savoirRows.filter((r) => r.complement === 'clause');
const connThings = connRows.filter((r) => r.complement === 'thing' || r.complement === 'name');
if (savoirClauses.length < 3) die(`${savoirClauses.length} savoir-plus-clause rows; the Owns needs at least three`);
if (connThings.length < 3) die(`${connThings.length} connaître-plus-thing rows; the Owns needs at least three`);
console.log(`  reframe rule  ${savoirRows.length} savoir rows (${savoirClauses.length} clausal) · ${connRows.length} connaître rows (${connThings.length} nominal) · 0 violations`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE IMPOSSIBLE SENTENCE HAS EXACTLY TWO HOMES
 * ═══════════════════════════════════════════════════════════════════════ */

const allStrings = strings(LESSON);
const offenders: string[] = [];
for (const s of allStrings) {
  if (!CONNAITRE_CLAUSE_SHAPE.test(s)) continue;
  if (IMPOSSIBLE_STRINGS.some((w) => s.includes(w))) continue;
  offenders.push(s);
}
if (offenders.length) {
  die(`a connaître form stands in front of a clause opener outside the two sentences that exist to be rejected:\n  ${offenders.map((s) => JSON.stringify(s.slice(0, 140))).join('\n  ')}\n`
    + `  The permitted strings are:\n  ${IMPOSSIBLE_STRINGS.map((s) => JSON.stringify(s)).join('\n  ')}`);
}
/* AND BOTH OF THEM MUST STILL BE THERE. A guard whose exception list is never
   exercised is a guard that has quietly stopped guarding anything. */
const joined = allStrings.join('\n');
for (const w of IMPOSSIBLE_STRINGS) {
  if (!joined.includes(w)) die(`${JSON.stringify(w)} is on the permitted list and appears nowhere. The lesson has stopped teaching the rejection.`);
}
/* AND EACH SITS WHERE IT BELONGS. */
const neverSec = byId(IMPOSSIBLE_SECTION_ID);
if (!neverSec) die(`${IMPOSSIBLE_SECTION_ID} is missing`);
if (!strings(neverSec).some((s) => s.includes(IMPOSSIBLE.wrong))) {
  die(`${IMPOSSIBLE_SECTION_ID} does not show ${JSON.stringify(IMPOSSIBLE.wrong)}, which is the mission it exists for`);
}
/* THE REJECTION IS DRILLED AS FREE TEXT, not only selected. The brief: "Drill
   the rejection, not just the selection: errorSpot on a sentence that uses
   connaître before que or où." */
const rejectionSpots = qs.filter((q) => (q as { format?: string }).format === 'errorSpot'
  && IMPOSSIBLE_STRINGS.some((w) => String((q as { q?: string }).q ?? '').includes(w)));
if (rejectionSpots.length < 2) {
  die(`${rejectionSpots.length} errorSpot question(s) put the impossible sentence in front of the learner; the brief asks for the rejection to be drilled as free text and this lesson ships two`);
}
console.log(`  impossible    ${IMPOSSIBLE_STRINGS.length} permitted strings, ${rejectionSpots.length} errorSpot rejections, 0 leaks`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE SINGULAR ARITHMETIC, ON BOTH VERBS
 * ═══════════════════════════════════════════════════════════════════════ */

for (const v of VERB_ORDER) {
  const forms = [0, 1, 2].map((i) => PARADIGM[i].forms[v]);
  const distinct = new Set(forms).size;
  if (distinct !== SINGULAR_SPELLINGS) {
    die(`${v} has ${distinct} distinct singular spellings and the lesson says ${SINGULAR_SPELLINGS}: ${forms.join(' / ')}`);
  }
  if (forms[0] !== forms[1] || forms[2] === forms[0]) {
    die(`${v}: je and tu must be IDENTICAL and il must differ. Got ${forms.join(' / ')}`);
  }
  const rs = [0, 1, 2].map((i) => PARADIGM[i].respells[v]);
  if (new Set(rs).size !== 1) die(`${v} is claimed to be one sound across the singular and its respellings are ${rs.join(' / ')}`);
}
const allProse = prose(LESSON).join('  ');
if (/three spellings/i.test(allProse)) die(`a surface says "three spellings". ${SINGULAR_PERSONS} persons, ${SINGULAR_SPELLINGS} spellings.`);
console.log(`  singular      ${SINGULAR_PERSONS} persons, ${SINGULAR_SPELLINGS} spellings, one sound, on both verbs`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE PLURAL: THE DOUBLE S, AND SAVOIR SHORTENING
 * ═══════════════════════════════════════════════════════════════════════ */

for (const i of [3, 4, 5]) {
  const f = PARADIGM[i].forms['connaître'];
  if (!f.includes('ss')) die(`${f} is a connaître plural and has no double s. The lesson says it arrives with nous and stays.`);
}
for (const i of [0, 1, 2]) {
  if (PARADIGM[i].forms['connaître'].includes('ss')) die(`${PARADIGM[i].forms['connaître']} is a singular and carries the double s`);
}
if (PARADIGM[5].forms.savoir.length >= PARADIGM[5].forms['connaître'].length) {
  die(`the lesson says savoir gets shorter where connaître grows, and ${PARADIGM[5].forms.savoir} is not shorter than ${PARADIGM[5].forms['connaître']}`);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  THE CIRCUMFLEX
 * ═══════════════════════════════════════════════════════════════════════ */

if (!CIRCUMFLEX.on) die('the corpus has turned the circumflex off and this build is written for it being on');
const flat = display(LESSON).filter((s) => FLAT_SPELLING_SHAPE.test(s) && !FLAT_PERMITTED.includes(s as never));
if (flat.length) {
  die(`a flat -aître spelling reached a DISPLAY surface: ${flat.map((s) => JSON.stringify(s.slice(0, 100))).join(', ')}\n`
    + `  Measured 2026-08-12: ${CIRCUMFLEX.measured.withCircumflex} published rows spell an -aître word and ${CIRCUMFLEX.measured.without} spell one flat.\n`
    + `  The only permitted display is the wrong option of the mcq that tests the accent: ${FLAT_PERMITTED.map((s) => JSON.stringify(s)).join(', ')}`);
}
/* AND THE PERMITTED ONE MUST STILL BE THERE, in an mcq and nowhere else. A
   permit whose entry has vanished is a rule that has stopped being tested. */
for (const p of FLAT_PERMITTED) {
  const homes = qs.filter((q) => ((q as { opts?: string[] }).opts ?? []).includes(p));
  if (homes.length !== 1) die(`${JSON.stringify(p)} is permitted as an mcq distractor and appears as one in ${homes.length} question(s)`);
  if ((homes[0] as { format?: string }).format !== 'mcq') die(`${JSON.stringify(p)} is permitted only inside an mcq; fold() cannot test an accent in any typed format`);
}
/* IT SITS ON EXACTLY ONE CELL OF THE PARADIGM, and the lesson says so. */
const withHat = PARADIGM.filter((p) => p.forms['connaître'].includes('î')).map((p) => p.person);
if (withHat.length !== 1 || withHat[0] !== PARADIGM[2].person) {
  die(`the circumflex is on ${withHat.length} cell(s) (${withHat.join(', ')}); the lesson teaches it on ${PARADIGM[2].person} alone`);
}
/* AND NO TYPED QUESTION TURNS ON IT. fold() strips combining marks, so a typeIn
   or errorSpot asking for the accent ACCEPTS the mistake and tells the learner
   they spelled it right. Only mcq can test one. Corrections §5. */
for (const q of qs) {
  const f = (q as { format?: string }).format;
  if (f !== 'typeIn' && f !== 'errorSpot') continue;
  const ans = String((q as { answer?: string }).answer ?? '');
  const acc = ((q as { accept?: string[] }).accept ?? []);
  if (!ans.includes('î')) continue;
  // A typed answer containing the accent is fine ONLY if a flat variant is also
  // accepted, so the learner is never told a foldable mistake was correct.
  const flatAns = ans.normalize('NFD').replace(/[̀-ͯ]/gu, '');
  if (!acc.some((a) => a.normalize('NFD').replace(/[̀-ͯ]/gu, '').toLowerCase().includes(flatAns.replace(/[.?!]/gu, '').toLowerCase().split(' ').pop() ?? ''))) {
    die(`a ${f} question answers ${JSON.stringify(ans)} and does not accept the flat form. fold() strips the accent, so the question cannot test it and must not appear to.`);
  }
}
console.log(`  circumflex    on, ${CIRCUMFLEX.measured.withCircumflex} published rows agree and ${CIRCUMFLEX.measured.without} disagree; one paradigm cell carries it`);

/* ══════════════════════════════════════════════════════════════════════════
 *  WHAT THIS LESSON MAY NOT TEACH
 * ═══════════════════════════════════════════════════════════════════════ */

/* THE PASSÉ COMPOSÉ MEANING SHIFT IS a2.05's, AT seq 16. */
const pastLeaks = allStrings.filter((s) => PAST_SHAPE.test(s));
if (pastLeaks.length) {
  die(`a past-tense form of savoir or connaître reached a surface: ${pastLeaks.map((s) => JSON.stringify(s.slice(0, 120))).join('\n  ')}\n`
    + `  j'ai su means I found out and j'ai connu means I met, and that shift belongs to a2.05 at seq 16.`);
}

/* THE FUTURE APPEARS IN EXACTLY ONE PLACE: the goals heading, where 36 of the
   49 lessons in the seed already put it. */
const futureHomes = LESSON.sections
  .filter((s) => strings(s).some((x) => FUTURE_SHAPE.test(x)))
  .map((s) => (s as { id?: string }).id);
if (futureHomes.length !== 1 || futureHomes[0] !== GOALS_SECTION_ID) {
  die(`a future form of savoir appears in ${futureHomes.length} section(s) (${futureHomes.join(', ')}). It is permitted in ${GOALS_SECTION_ID} alone, where the house chrome puts it.`);
}
const goals = byId(GOALS_SECTION_ID) as { frSub?: string } | undefined;
if (goals?.frSub !== CHROME_DECISION.goalsHeading) {
  die(`${GOALS_SECTION_ID} frSub is ${JSON.stringify(goals?.frSub)}, expected the house heading ${JSON.stringify(CHROME_DECISION.goalsHeading)}`);
}
for (const f of FUTURE_FORMS) {
  const outside = allStrings.filter((s) => s !== CHROME_DECISION.goalsHeading && hasPhrase(s, f));
  if (outside.length) die(`the future form ${JSON.stringify(f)} appears outside the goals heading: ${JSON.stringify(outside[0].slice(0, 120))}`);
}

/* THE CHROME DECISION IS HONOURED AND NAMED. */
const roundup = byId(ROUNDUP_SECTION_ID) as { frSub?: string } | undefined;
if (roundup?.frSub !== CHROME_DECISION.roundupHeading) {
  die(`${ROUNDUP_SECTION_ID} frSub is ${JSON.stringify(roundup?.frSub)}, expected ${JSON.stringify(CHROME_DECISION.roundupHeading)}`);
}
if (!strings(roundup).some((s) => s !== CHROME_DECISION.roundupHeading && s.includes(CHROME_DECISION.roundupHeading))) {
  die(`${ROUNDUP_SECTION_ID} uses the house heading and does not NAME it in its prose.\n`
    + `  a2.13 replaced this string with a pouvoir version to stay clear of this lesson and handed the decision here.\n`
    + `  The decision is to ship it AND pay it off: it is savoir plus a verb, on a screen the learner has read 34 times.`);
}

/* pouvoir IS a2.13's AND ONLY ITS SINGULAR APPEARS. */
const pouvoirLeaks = allStrings.filter((s) => POUVOIR_FORBIDDEN_SHAPE.test(s));
if (pouvoirLeaks.length) {
  die(`a form of pouvoir this lesson does not own reached a surface: ${pouvoirLeaks.map((s) => JSON.stringify(s.slice(0, 120))).join('\n  ')}\n`
    + `  ${CONTRAST_UNIT} owns the paradigm. Only ${POUVOIR_ALLOWED.join(' and ')} may appear here.`);
}
if (!namesUnitLabel(allProse, CONTRAST_UNIT)) die(`the lesson never names ${CONTRAST_UNIT}, which owns the third verb`);
const pouvoirSec = byId(POUVOIR_SECTION_ID);
if (!pouvoirSec) die(`${POUVOIR_SECTION_ID} is missing`);
if (!namesUnitLabel(prose(pouvoirSec).join('  '), CONTRAST_UNIT)) {
  die(`${POUVOIR_SECTION_ID} is the savoir/pouvoir contrast and does not name ${CONTRAST_UNIT}. The brief asks for it by its lesson label.`);
}
/* THE MINIMAL PAIR IS A MINIMAL PAIR. One word changed, nothing else moved. */
const skillRow = SAVOIR_CONNAITRE.find((r) => r.id === TRAP_PAIR.skill);
const permRow = SAVOIR_CONNAITRE.find((r) => r.id === TRAP_PAIR.permission);
if (!skillRow || !permRow) die('the trap pair names a row that does not exist');
const skillTail = skillRow.fr.split(/\s+/u).slice(2).join(' ');
const permTail = permRow.fr.split(/\s+/u).slice(2).join(' ');
if (skillTail !== permTail) {
  die(`the savoir/pouvoir pair is not minimal: ${JSON.stringify(skillTail)} against ${JSON.stringify(permTail)}.\n`
    + `  The point is that ONE word changed. Two different sentences make it a comparison of situations instead.`);
}
if (!strings(pouvoirSec).some((s) => s.includes(skillRow.fr)) || !strings(pouvoirSec).some((s) => s.includes(permRow.fr))) {
  die(`${POUVOIR_SECTION_ID} does not put both halves of the minimal pair on the screen`);
}

/* THE FAMILY IS NAMED ONCE AND THE PRINCIPLE IS NOT TAUGHT. */
for (const f of FAMILY_NOT_NAMED) {
  if (hasPhrase(allProse, f)) die(`${f} is named. The brief says name ONE family member; ${FAMILY_MEMBER.fr} is the one and ${FAMILY_UNIT} owns the principle.`);
}
const famSec = byId(FAMILY_SECTION_ID);
if (!famSec) die(`${FAMILY_SECTION_ID} is missing`);
if (!namesUnitLabel(prose(famSec).join('  '), FAMILY_UNIT)) die(`${FAMILY_SECTION_ID} does not hand the principle to ${FAMILY_UNIT}`);
/* AND IT MUST NOT CLAIM reconnaître FOLLOWS connaître IN WHAT COMES AFTER IT.
   Measured: six published sentences put reconnaître straight before `que`,
   which is the shape this lesson has just taught the learner to reject. */
const famProse = prose(famSec).join('  ').toLowerCase();
for (const claim of ['exactly like connaître', 'follows connaître exactly', 'behaves like connaître', 'same as connaître']) {
  if (famProse.includes(claim)) {
    die(`${FAMILY_SECTION_ID} claims ${JSON.stringify(claim)}. It is false for syntax: reconnaître takes a whole sentence and connaître never does.\n`
      + `  fr.b2.recherche.151, fr.b2.recits-au-passe.007 and four more put it straight before "que".`);
  }
}

console.log(`  boundaries    0 past forms · future in ${GOALS_SECTION_ID} only · pouvoir singular only · family = ${FAMILY_MEMBER.fr}, principle to ${FAMILY_UNIT}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE RESPELLINGS
 * ═══════════════════════════════════════════════════════════════════════ */

/* EVERY AUTHORED RESPELLING, THROUGH THE REAL CHECKER. */
for (const r of SAVOIR_CONNAITRE) {
  if (!r.respell) die(`${r.id} has no respelling. A card the learner cannot say is not a card.`);
  if (hasPlainNasalFor(r.fr, r.respell)) die(`${r.id} closes a nasal with a plain n or m: ${JSON.stringify(r.respell)}`);
  if (r.respell.includes('‿')) die(`${r.id} respells with U+203F UNDERTIE, which renders as a low underscore on a Pixel 6`);
}

/* THE FORMS ASSERTED BY NAME, AND THE REASON THEY LOOK WRONG.
 *
 *  The brief predicted the validator would object to connaissons, connaissez and
 *  connaissent. It does not, and the corpus header explains why. They are pinned
 *  here anyway so that a later author "fixing" koh-NEHS into koh-NEHⁿ breaks the
 *  build rather than shipping a sound that is not in the word. */
for (const a of ASSERTED_RESPELLINGS) {
  const cell = PARADIGM.find((p) => p.forms.savoir === a.form || p.forms['connaître'] === a.form);
  if (!cell) die(`${a.form} is asserted by name and is not a form in either paradigm`);
  const stored = cell.forms.savoir === a.form ? cell.respells.savoir : cell.respells['connaître'];
  if (stored !== a.respell) {
    die(`the respelling of ${a.form} is ${JSON.stringify(stored)} and this build asserts ${JSON.stringify(a.respell)}.\n  ${a.why}`);
  }
  if (hasPlainNasalFor(a.form, a.respell)) die(`${a.form} [${a.respell}] is flagged by hasPlainNasalFor and the corpus says it is not`);
}

/* THE VISIBLE NASALS ARE ALL VISIBLE, and the BLIND list is asserted EMPTY by
 *  measurement rather than by assertion: break each superscript back to a plain
 *  n, one at a time, and require the checker to notice. Corrections §6 asks for
 *  the blindness to be asserted as a negative so the day the checker improves
 *  you find out rather than carrying a dead by-name list. */
const blind: string[] = [];
for (const r of SAVOIR_CONNAITRE) {
  const re = r.respell ?? '';
  if (!re.includes('ⁿ')) continue;
  if (!VISIBLE_NASALS.includes(r.id)) die(`${r.id} carries a superscript and is not in VISIBLE_NASALS`);
  for (let i = 0; i < re.length; i += 1) {
    if (re[i] !== 'ⁿ') continue;
    const broken = re.slice(0, i) + 'n' + re.slice(i + 1);
    if (!hasPlainNasalFor(r.fr, broken)) blind.push(`${r.id} [${broken}]`);
  }
}
if (blind.join('|') !== BLIND_NASALS.join('|')) {
  die(`the checker's blind spots have moved.\n  measured: ${blind.length ? blind.join('\n            ') : '(none)'}\n  corpus BLIND_NASALS: ${BLIND_NASALS.length ? BLIND_NASALS.join(', ') : '(empty)'}\n`
    + `  The one this lesson knows about is byaⁿ in fr.a2.verbes.401: hasPlainNasalFor runs its doubled-nasal\n`
    + `  rescue on the WHOLE French string, and « connaît » puts an nn in every line it appears in. Run\n`
    + `  pnpm tsx scripts/_a214_blindspot.ts for the isolated proof.`);
}

/* AND THE TOKEN THE CHECKER CANNOT SEE IS ASSERTED BY NAME. This is the
   corrections §6 shape: where the shared function is blind, the by-name
   assertion is the only guard, and it has to name the value rather than
   re-derive it. */
for (const b of BLIND_NASAL_ROWS) {
  const row = SAVOIR_CONNAITRE.find((r) => r.id === b.id);
  if (!row) die(`${b.id} is recorded as carrying an invisible nasal and is not an authored row`);
  if (!(row.respell ?? '').includes(b.token)) {
    die(`${b.id} no longer carries ${JSON.stringify(b.token)}: ${JSON.stringify(row.respell)}\n  ${b.why}\n`
      + `  hasPlainNasalFor CANNOT see this one, so this assertion is the only thing standing between a\n`
      + `  dropped superscript and a shipped card teaching a sound that is not in the word.`);
  }
}

/* THE FALSE-POSITIVE CANDIDATE, MEASURED RATHER THAN CLAIMED. Corrections §6
   asks every build to look for a real /n/ the checker reads as an unmarked
   nasal, and to report the absence if it finds none. This lesson finds one, in
   `la voisine`, and it is correctly NOT flagged. */
for (const c of FALSE_POSITIVE_CANDIDATES) {
  const actual = hasPlainNasalFor(c.fr, c.respell);
  if (actual !== c.flagged) {
    die(`${c.fr} [${c.respell}] is ${actual ? 'FLAGGED' : 'not flagged'} and the corpus records ${c.flagged ? 'FLAGGED' : 'not flagged'}.\n  ${c.why}`);
  }
}

/* AND THE ONE REPAIR IS THE ONE THE CORPUS DESCRIBES. */
if (RESPELL_REPAIRS_VISIBLE.length || RESPELL_REPAIRS_INVISIBLE.length) {
  die(`this build records ${RESPELL_REPAIRS_VISIBLE.length} visible and ${RESPELL_REPAIRS_INVISIBLE.length} invisible nasal repairs and the corpus header says both are empty. If you have found one, amend the header.`);
}
for (const r of RESPELL_REPAIRS_STEM) {
  if (hasPlainNasalFor(r.fr, r.from)) {
    die(`${r.id} is in RESPELL_REPAIRS_STEM and its stored value IS flagged by hasPlainNasalFor. A rule violation belongs in RESPELL_REPAIRS_VISIBLE, where the guard is different.`);
  }
  if (hasPlainNasalFor(r.fr, r.to)) die(`${r.id} would be repaired to ${JSON.stringify(r.to)}, which the checker flags`);
  // The teaching argument the repair rests on: the singular is the naming form
  // minus its last two letters, and the respelling has to show that.
  const singular = PARADIGM[2].respells['connaître'];
  if (!r.to.startsWith(singular)) {
    die(`the repaired naming form ${JSON.stringify(r.to)} does not begin with the singular respelling ${JSON.stringify(singular)}.\n`
      + `  That is the entire argument for making this repair at all; without it, invariants §9 applies and the\n`
      + `  stored variant should be left alone.`);
  }
}
console.log(`  respell       ${SAVOIR_CONNAITRE.length} authored, 0 flagged · ${VISIBLE_NASALS.length} superscripts, ${blind.length} invisible · ${RESPELL_REPAIRS.length} repair · ${FALSE_POSITIVE_CANDIDATES.length} false-positive candidate checked`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE DICTÉE
 * ═══════════════════════════════════════════════════════════════════════ */

for (const id of DICTATION_IDS) {
  const row = SAVOIR_CONNAITRE.find((r) => r.id === id);
  if (!row) die(`${id} is a dictation target and is not an authored row`);
  if (dicteeMode(row.fr) !== 'letters') {
    die(`${id} ${JSON.stringify(row.fr)} spells in WORD mode, which hands every word over pre-spelled and tests nothing`);
  }
}
/* AND THE CONNAÎTRE PLURAL IS ABSENT BECAUSE IT CANNOT BE THERE. Asserted so
   that a later author who "adds the missing cells" learns why they are missing
   rather than shipping three targets that test nothing. */
for (const i of [3, 4, 5]) {
  const id = paradigmIds('connaître')[i];
  const row = SAVOIR_CONNAITRE.find((r) => r.id === id)!;
  if (DICTATION_IDS.includes(id)) {
    die(`${id} ${JSON.stringify(row.fr)} is a dictation target and it is ${row.fr.replace(/[^\p{L}]/gu, '').length} letters, past the 16-letter limit.\n`
      + `  connaissons is eleven letters before anything follows it. No object is short enough: Paris gives 20,\n`
      + `  Rome 19, Marie 20. The connaître plural cannot be dictated in this app and that is measured, not a choice.`);
  }
  if (dicteeMode(row.fr) === 'letters') {
    die(`${id} ${JSON.stringify(row.fr)} now spells in LETTERS mode. The corpus header says the connaître plural cannot; re-measure and correct it.`);
  }
}
console.log(`  dictée        ${DICTATION_IDS.length} targets, all LETTERS · connaître plural excluded by measurement`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LAYOUT CLAIM
 * ═══════════════════════════════════════════════════════════════════════ */

const grid = byId(GRID_SECTION_ID) as { type?: string; examples?: { fr: string }[] } | undefined;
if (!grid || grid.type !== 'examples') die(`${GRID_SECTION_ID} is missing or is not an examples section`);
if ((grid.examples ?? []).length !== PARADIGM.length) die(`${GRID_SECTION_ID} has ${(grid.examples ?? []).length} lines, expected ${PARADIGM.length}`);
(grid.examples ?? []).forEach((ex, i) => {
  for (const v of VERB_ORDER) {
    if (!hasPhrase(ex.fr, PARADIGM[i].forms[v])) {
      die(`${GRID_SECTION_ID} line ${i} does not carry the ${v} form ${PARADIGM[i].forms[v]}.\n`
        + `  The brief: "Both verbs belong on one screen, two columns, adjacent. Separated, the lesson is two\n`
        + `  small paradigms and the choice never appears."`);
    }
  }
  /* AND BOTH FRAMES ARE ON THE LINE, so the two complements are visible side by
     side rather than one column being bare forms. */
  for (const v of VERB_ORDER) {
    if (!hasPhrase(ex.fr, FRAMES[v].complement)) die(`${GRID_SECTION_ID} line ${i} does not carry the ${v} frame ${FRAMES[v].complement}`);
  }
});
/* THE GRID ON SCREEN IS COMPARED TO THE ROWS THE LEARNER IS SCORED ON. a2.13
   §6.2: changing its paradigm table from veulent to voulent was caught by the
   batch and the merge and sailed through the test file, because the grid renders
   from its own table and nothing compared it to the cards. */
for (const v of VERB_ORDER) {
  paradigmIds(v).forEach((id, i) => {
    const row = SAVOIR_CONNAITRE.find((r) => r.id === id)!;
    if (!hasPhrase(row.fr, PARADIGM[i].forms[v])) {
      die(`the grid says ${v} at ${PARADIGM[i].person} is ${JSON.stringify(PARADIGM[i].forms[v])} and the row the learner is scored on is ${JSON.stringify(row.fr)}.\n`
        + `  A learner would read one spelling and be graded on another with every gate green.`);
    }
  });
}
/* THE ADJACENT PAIR, BY INDEX. The two halves of the contrast have to be
   next to each other on the first line the learner meets. */
const nextSec = byId(NEXT_SECTION_ID) as { cards?: { fr?: string }[] } | undefined;
if (!nextSec) die(`${NEXT_SECTION_ID} is missing`);
const nextFr = (nextSec.cards ?? []).map((c) => c.fr ?? '');
const a = SAVOIR_CONNAITRE.find((r) => r.id === ADJACENT_PAIR[0])!;
const b = SAVOIR_CONNAITRE.find((r) => r.id === ADJACENT_PAIR[1])!;
const ia = nextFr.indexOf(a.fr);
const ib = nextFr.indexOf(b.fr);
if (ia < 0 || ib < 0 || Math.abs(ia - ib) !== 1) {
  die(`${NEXT_SECTION_ID} does not put ${JSON.stringify(a.fr)} and ${JSON.stringify(b.fr)} next to each other (found at ${ia} and ${ib}).\n`
    + `  The brief requires one savoir-plus-clause item and one connaître-plus-object item ADJACENT, as a pair.`);
}
if (a.verb !== 'savoir' || b.verb !== 'connaître') die('the adjacent pair is not one of each verb');

/* THE SITUATIONS TABLE. The brief asks for a row per situation, tap to hear. */
const sits = byId(SITUATIONS_SECTION_ID) as { type?: string; rows?: unknown[] } | undefined;
if (!sits || sits.type !== 'tapTable') die(`${SITUATIONS_SECTION_ID} is missing or is not a tapTable`);
if ((sits.rows ?? []).length > 6) die(`${SITUATIONS_SECTION_ID} has ${(sits.rows ?? []).length} rows; tapTable is not in ownsLayout() and six is the Pixel 6 ceiling`);
if ((sits.rows ?? []).length < 4) die(`${SITUATIONS_SECTION_ID} has ${(sits.rows ?? []).length} rows; the brief asks for a row per situation and there are at least four`);

/* THE PLACE MISSION, WHICH IS WHERE THE REFRAME EARNS ITS KEEP. */
const place = byId(PLACE_SECTION_ID) as { examples?: { fr: string }[] } | undefined;
if (!place) die(`${PLACE_SECTION_ID} is missing`);
const placeFr = (place.examples ?? []).map((e) => e.fr);
const placeSavoir = placeFr.filter((f) => SAVOIR_SHAPE.test(f)).length;
const placeConn = placeFr.filter((f) => CONNAITRE_SHAPE.test(f)).length;
if (placeSavoir < 2 || placeConn < 2) {
  die(`${PLACE_SECTION_ID} has ${placeSavoir} savoir line(s) and ${placeConn} connaître line(s). It exists to show that PLACES take both, so it needs at least two of each.`);
}

/* THE PUBLISHED EVIDENCE IS ON A SCREEN. */
const ev = byId(EVIDENCE_SECTION_ID);
if (!ev) die(`${EVIDENCE_SECTION_ID} is missing`);
for (const id of EVIDENCE_IDS) {
  const f = IMPORTED_BY_ID.get(id)?.fr ?? '';
  if (!strings(ev).some((s) => s.includes(f))) die(`${EVIDENCE_SECTION_ID} does not draw ${id} ${JSON.stringify(f)}`);
}
console.log(`  layout        grid ${GRID_SECTION_ID} (both verbs on all ${PARADIGM.length} lines) · situations ${SITUATIONS_SECTION_ID} · place ${PLACE_SECTION_ID} · trap ${TRAP_SECTION_ID}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE OWNS ACT IS THE HEAVIEST, ALONE
 * ═══════════════════════════════════════════════════════════════════════ */

const actSizes = SAVOIR_CONNAITRE_ACTS.map((x) => x.sections.length);
const ownsIx = SAVOIR_CONNAITRE_ACTS.findIndex((x) => x.id === OWNS_ACT_ID);
if (ownsIx < 0) die(`there is no act ${OWNS_ACT_ID}`);
const heaviest = Math.max(...actSizes);
if (actSizes[ownsIx] !== heaviest || actSizes.filter((n) => n === heaviest).length !== 1) {
  die(`the Owns act (${OWNS_ACT_ID}) is not the heaviest alone: ${actSizes.map((n, i) => `${SAVOIR_CONNAITRE_ACTS[i].id}:${n}`).join(' ')}\n`
    + `  Doctrine §B.5: if the paradigm act outweighs the Owns, this has become another table lesson.`);
}
/* AND THE PARADIGM ACT IS SMALLER THAN THE PRODUCTION ACT, which is what the
   brief's "more production than any other lesson in batch 1" amounts to. */
const paradigmAct = actSizes[1];
const productionAct = actSizes[4];
if (paradigmAct >= productionAct) {
  die(`the paradigm act has ${paradigmAct} missions and the production act ${productionAct}.\n`
    + `  The brief: "Because there are only two paradigms, you have room for more production than any other\n`
    + `  lesson in batch 1. Use it."`);
}
const inActs = SAVOIR_CONNAITRE_ACTS.flatMap((x) => x.sections);
const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
if (inActs.join('|') !== sectionIds.join('|')) die('the act running order does not match the section order');
console.log(`  acts          ${actSizes.map((n, i) => `${SAVOIR_CONNAITRE_ACTS[i].id}:${n}`).join(' ')}  Owns is ${OWNS_ACT_ID}`);

/* ══════════════════════════════════════════════════════════════════════════
 *  THE LEARNER-FACING SURFACES
 * ═══════════════════════════════════════════════════════════════════════ */

/* THE JARGON WALK INCLUDES intro AND overview. `intro` is drawn on the lesson
   overview card AND on the lesson cover, and a2.11 shipped "third person" there
   in v1 because every guard in the band walked sections, sheets and terms and
   not this. grammarAssumed and grammarIntroduced are DELIBERATELY excluded:
   invariants §8 says those are addressed to the curriculum and may use the
   precise words, and this lesson's grammarIntroduced uses several of them. */
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
if (!LESSON.intro || LESSON.intro.length < 40) die('the lesson intro is missing or too short to be the cover copy');
const introJargon = JARGON.filter((j) => hasPhrase(LESSON.intro!, j));
if (introJargon.length) die(`jargon in Lesson.intro, which is drawn on TWO screens: ${introJargon.join(', ')}`);

/* HOUSE COPY RULES. */
if (learnerText.includes('—')) die('an em dash reached a learner surface');
if (hasPhrase(learnerText, 'honest') || hasPhrase(learnerText, 'honesty')) die('"honest" is banned from authored content');
if (allStrings.some((s) => s.includes('‿'))) die('U+203F UNDERTIE reached the lesson; it renders as a low underscore on a Pixel 6');

/* THE REFRAME IS CARRIED VERBATIM, AGAINST AN EXPLICIT CONSTANT. A count
   derived from the lesson compares the content to itself and passes on any
   rewording. Invariants §5. */
const reframeUses = countPhrase(learnerText, REFRAME);
if (reframeUses !== EXPECTED_REFRAME_USES) {
  die(`the reframe appears ${reframeUses} times and the corpus says ${EXPECTED_REFRAME_USES}.\n  ${JSON.stringify(REFRAME)}`);
}
if (reframeUses < 3) die('the density validator requires the reframe in at least three sections');

/* EVERY CITED UNIT IS FINDABLE. */
const uncited = CITED_UNITS.filter((u) => !namesUnitLabel(learnerText, u));
if (uncited.length) {
  die(`these units are named in the corpus as cited and appear nowhere a search can see: ${uncited.join(', ')}\n`
    + `  Check for a possessive: hasPhrase treats "'" as a word character, so "a2.15's" does not match "a2.15".`);
}

/* a2.01's nous/on STATEMENT HAS EXACTLY ONE HOME. */
const nousOnIds = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON))).map((s) => (s as { id?: string }).id);
if (nousOnIds.length !== 1 || nousOnIds[0] !== NOUS_ON_SECTION_ID) {
  die(`a2.01's nous/on statement appears in ${nousOnIds.length} section(s) (${nousOnIds.join(', ')}); it belongs in ${NOUS_ON_SECTION_ID} alone`);
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
 *  THE TWO BUDGETS a2.13's DEVICE PASS MEASURED, AND THIS LESSON HAD BOTH
 *
 *  Neither is visible to the schema, the density validator or anything else in
 *  this file. They are here because a2.13 found them on a Pixel 6 after its v1
 *  had shipped, and a2.14 was carrying the same two defects at v2.
 * ═══════════════════════════════════════════════════════════════════════ */

/* 1. THE FIELDS THAT DO NOT RENDER AT `lg`. MissionRich.tsx:439 draws fr, ipa
      and note and nothing else. A card carrying `respell` and `en` looks
      complete in the source and puts a bare French sentence on the screen. */
{
  let drills = 0;
  let items = 0;
  for (const s of LESSON.sections) {
    if (s.type !== 'groupDrill') continue;
    const size = (s as { size?: string }).size;
    if (size === 'xl') continue;
    drills += 1;
    for (const g of ((s as { groups?: { items?: Record<string, unknown>[] }[] }).groups ?? [])) {
      for (const it of (g.items ?? [])) {
        items += 1;
        /* RELAXED 2026-08-13, AND THE REASON MATTERS.
         *
         * This guard used to REFUSE `respell` and `en` here, because the `lg`
         * branch drew `note` alone and dropped them in silence, which is how
         * a2.13 shipped 59 bare cards and a2.14 built 53.
         *
         * e584bd8 fixed that in the RENDERER rather than in the content:
         * MissionRich now draws respell and en on the second line, with `note`
         * winning when present, across all 583 affected cards in 28 lessons.
         * Refusing the two fields would now block a legal pattern, and the
         * comment justifying it would be false.
         *
         * WHAT STILL HAS TO HOLD IS THE THING THAT WAS ACTUALLY BROKEN: a card
         * must put SOMETHING under the French. That survives the renderer fix,
         * because a card carrying none of the four still renders as a word and
         * a play button. */
        if (!it.note && !it.ipa && !it.respell && !it.en) {
          die(`${(s as { id?: string }).id} has a groupDrill item with no note, ipa, respell or en, so the learner gets the French and a play button and nothing else: ${JSON.stringify(it.fr)}\n`
            + '  583 cards across 28 lessons rendered that way until e584bd8. Valid data is not the same as data that reaches a screen.');
        }
      }
    }
  }
  if (drills !== EXPECTED_GROUPDRILLS) die(`${drills} lg groupDrills, expected ${EXPECTED_GROUPDRILLS}`);
  if (items !== EXPECTED_GROUPDRILL_ITEMS) die(`${items} groupDrill item cards, expected ${EXPECTED_GROUPDRILL_ITEMS}`);
  console.log(`  cards         ${items} groupDrill items across ${drills} lg sections, every one carrying a note`);
}

/* 2. THE MISSION-ROW TITLE CEILING. The hub draws the title and a type chip on
      one row and the chip wins, so a longer title ellipsises. */
{
  const over = LESSON.sections
    .map((s) => (s as { id?: string; title?: string }))
    .filter((s) => (s.title ?? '').length > MISSION_TITLE_MAX);
  if (over.length) {
    die(`${over.length} mission title(s) past the ${MISSION_TITLE_MAX}-character hub ceiling, so they ellipsise in the missions list:\n  `
      + over.map((s) => `${String((s.title ?? '').length).padStart(2)}  ${s.id}  ${JSON.stringify(s.title)}`).join('\n  ')
      + `\n  Measured on a Pixel 6 by a2.13's device pass. The same titles render in full on the act checkpoint screen.`);
  }
}

/* THE RENDERER'S OWN RULES. */
const tapTables = LESSON.sections.filter((s) => s.type === 'tapTable');
if (tapTables.length !== EXPECTED_TAPTABLES) die(`${tapTables.length} tapTables, expected ${EXPECTED_TAPTABLES}`);
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
    const missing = (p.itemIds ?? []).filter((id) => !SAVOIR_CONNAITRE_ITEM_IDS.includes(id));
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
const released = SAVOIR_CONNAITRE_DECK_TRANCHE.flat();
const dupeReleased = released.filter((x, i) => released.indexOf(x) !== i);
if (dupeReleased.length) die(`released twice: ${dupeReleased.join(', ')}`);
const notReleased = SAVOIR_CONNAITRE_ITEM_IDS.filter((id) => !released.includes(id));
if (notReleased.length) die(`in itemIds and released by no act: ${notReleased.join(', ')}`);
const releasedNotCarried = released.filter((id) => !SAVOIR_CONNAITRE_ITEM_IDS.includes(id));
if (releasedNotCarried.length) die(`released and not in itemIds: ${releasedNotCarried.join(', ')}`);

/* EVERY ITEM IS DRAWN BY SOME SECTION, DRILL OR TERM. a1.08 shipped forty-three
   ids that resolved perfectly and were rendered by nothing; a2.13 shipped one
   before this guard caught it. */
const drawnBy = new Map<string, string[]>();
for (const s of LESSON.sections) {
  const id = (s as { id?: string }).id ?? '(anon)';
  for (const str of strings(s)) if (SAVOIR_CONNAITRE_ITEM_IDS.includes(str)) drawnBy.set(str, [...(drawnBy.get(str) ?? []), id]);
}
for (const d of LESSON.drills ?? []) {
  for (const str of strings(d)) if (SAVOIR_CONNAITRE_ITEM_IDS.includes(str)) drawnBy.set(str, [...(drawnBy.get(str) ?? []), d.id]);
}
for (const t of Object.values(LESSON.terms ?? {})) {
  for (const str of strings(t)) if (SAVOIR_CONNAITRE_ITEM_IDS.includes(str)) drawnBy.set(str, [...(drawnBy.get(str) ?? []), 'term']);
}
const undrawn = SAVOIR_CONNAITRE_ITEM_IDS.filter((id) => !drawnBy.has(id));
if (undrawn.length) {
  die(`${undrawn.length} item(s) are in itemIds, released by an act, and drawn by NO section, drill or term:\n  ${undrawn.join('\n  ')}\n`
    + `  a1.08 shipped forty-three of these. They resolve, they validate, and a learner never sees them.`);
}

/* NOTHING IS RELEASED BEFORE THE ACT THAT SHOWS IT. */
SAVOIR_CONNAITRE_DECK_TRANCHE.forEach((tranche, actIx) => {
  const shownBy = new Set<string>();
  for (let i = 0; i <= actIx; i += 1) for (const sid of SAVOIR_CONNAITRE_ACTS[i].sections) shownBy.add(sid);
  for (const id of tranche) {
    const where = drawnBy.get(id) ?? [];
    if (!where.some((w) => shownBy.has(w) || w === 'term' || (LESSON.drills ?? []).some((d) => d.id === w))) {
      die(`${id} is released at the end of ${SAVOIR_CONNAITRE_ACTS[actIx].id} and is first drawn in ${where.join(', ') || 'nothing'}`);
    }
  }
});

/* SPEAK ONLY WHAT THE MIC CAN SCORE. */
const unspeakable = SAVOIR_CONNAITRE_SPEAK_IDS.filter((id) => {
  const r = SAVOIR_CONNAITRE.find((x) => x.id === id);
  return !r || !r.drills.includes('voiceflash');
});
if (unspeakable.length) die(`the speak deck names rows without a voiceflash drill, which the mic cannot score: ${unspeakable.join(', ')}`);

/* READ-ONLY ROWS ARE RELEASED TO NOTHING. */
for (const r of READ_ONLY_ROWS) {
  if (SAVOIR_CONNAITRE_ITEM_IDS.includes(r.id)) die(`${r.id} is read-only and is in itemIds`);
  if (released.includes(r.id)) die(`${r.id} is read-only and is released by a deck tranche`);
}
const tieRow = READ_NOT_IMPORTED.find((r) => r.why.includes('U+203F'));
if (!tieRow) die('the U+203F refusal is no longer recorded in READ_NOT_IMPORTED');
const semanticRow = READ_NOT_IMPORTED.find((r) => r.id === 'fr.a2.collegues.009');
if (!semanticRow) die('the refusal of fr.a2.collegues.009, which states the rejected reframe in French, is no longer recorded');

console.log(`  decks         ${SAVOIR_CONNAITRE_ITEM_IDS.length} items, all released exactly once and all drawn · ${SAVOIR_CONNAITRE_SPEAK_IDS.length} speak`);

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
  const qq = q as { q: string; why?: string; ref?: string; format?: string; answer?: string; accept?: string[]; opts?: string[]; correct?: number | string };
  if (!qq.why) die(`a question has no why: ${JSON.stringify(qq.q)}`);
  if (!qq.ref) die(`a question has no ref: ${JSON.stringify(qq.q)}`);
  if (!byId(qq.ref)) die(`a question refs ${qq.ref}, which is not a section in this lesson`);
  /* EVERY FREE-TEXT QUESTION ACCEPTS THE ANSWER IT DISPLAYS, through the real
     matchesAccept rather than a hand-rolled copy. */
  if (qq.format === 'typeIn' || qq.format === 'errorSpot') {
    if (!matchesAccept(qq.answer ?? '', qq.accept ?? [])) {
      die(`a ${qq.format} question displays ${JSON.stringify(qq.answer)} and does not accept it: ${JSON.stringify(qq.q)}`);
    }
  }
}

/* NO EAR QUESTION BETWEEN TWO MEMBERS OF ONE HOMOPHONE GROUP. A listenChoose
   whose two options differ ONLY by a member of one group has no correct answer,
   and marking one right certifies a bug. a2.10 and a2.11 enforce this with a
   list rather than a sentence in a report, because a sentence cannot fail. */
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
  /* AND IT MUST SAY WHAT IS HEARD. Without `say`, ListenChooseCard falls back to
     speaking opts[correct], which speaks the answer. a1.25 shipped two. */
  if (!(q as { say?: string }).say) die(`a listenChoose has no "say"; the card would speak the correct option aloud`);
}

/* THE THIRD LEG IS TESTED, NOT MENTIONED. The brief: "Include at least two
   pouvoir distractors, so the three-way choice is tested." */
const pouvoirQs = qs.filter((q) => {
  const s = [String((q as { q?: string }).q ?? ''), ...(((q as { opts?: string[] }).opts) ?? []), String((q as { answer?: string }).answer ?? '')].join('  ');
  return /(^|[^a-zà-ÿ])(peux|peut|pouvoir)(?![a-zà-ÿ])/i.test(s);
});
if (pouvoirQs.length < 2) die(`${pouvoirQs.length} question(s) involve pouvoir; the brief asks for at least two so the three-way choice is tested`);

/* EACH ROUND LEADS ON A DIFFERENT TRIGGER, so every drill is reachable.
   `drillForRound` returns the FIRST target that has a drill and then stops. */
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
console.log(`  quiz          ${qs.length} questions, ${mcq} mcq (${Math.round((mcq / qs.length) * 100)}%), ${rounds.length} rounds, ${pouvoirQs.length} three-way · every why and ref resolves`);

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

/* NO DUPLICATE fr WITHIN THE THEME, computed the way flashhub-coverage.test.ts
   computes it: two rows sharing an `fr` in one theme are one card served twice. */
const strip = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des |du |de la )/u, '').trim();
const seen = new Map<string, string>();
for (const r of SAVOIR_CONNAITRE) {
  const k = strip(r.fr);
  if (seen.has(k)) die(`${r.id} and ${seen.get(k)} share an fr inside ${THEME}: ${JSON.stringify(r.fr)}`);
  seen.set(k, r.id);
}

/* NO AUTHORED ROW JOINS a1.03's MEASURED ENDING POPULATION. A gendered
   single-word noun moves twenty printed figures in a1-03-genre.test.ts. Checked
   through the REAL endingPopulation rather than a copy of it: a1.08 shipped a
   hand-rolled version carrying a filter the real one does not have. */
const pop = endingPopulation(AUTHORED_ITEMS as never);
if (pop.length) die(`${pop.length} authored row(s) join a1.03's ending population: ${pop.map((p) => (p as { id?: string }).id ?? '?').join(', ')}`);

console.log(`  schema        ${AUTHORED_ITEMS.length} items valid · lesson valid · density clean · 0 duplicate fr · 0 rows in the ending population`);

/* ══════════════════════════════════════════════════════════════════════════
 *  POSTGRES
 * ═══════════════════════════════════════════════════════════════════════ */

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  /* THE ID BLOCK. The row COUNT is the only signal left: a2.10.l2 took .461..500,
     above the whole batch-1 reservation, so `max` has been past every remaining
     block since before any of them was claimed. Ledger §10. */
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

  /* THE MANIFEST, FIELD BY FIELD, AGAINST POSTGRES RATHER THAN THE SEED. */
  const allImported = [...IMPORTED_IDS, ...READ_ONLY_ROWS.map((r) => r.id)];
  const live = await c.query<Record<string, unknown>>(
    'select *, drills::text[] drills from content_items where id = any($1)', [allImported]);
  const liveBy = new Map(live.rows.map((r) => [String(r.id), r]));
  const stale: string[] = [];
  for (const id of allImported) {
    const row = liveBy.get(id);
    if (!row) { stale.push(`${id} is not in Postgres`); continue; }
    if (row.status !== 'published') stale.push(`${id} is ${row.status}`);
    const rec = IMPORTED_BY_ID.get(id) ?? READ_ONLY_ROWS.find((r) => r.id === id);
    if (!rec) { stale.push(`${id} is in no manifest group`); continue; }
    if (rec.fr !== row.fr) stale.push(`${id} fr: manifest ${JSON.stringify(rec.fr)}, Postgres ${JSON.stringify(row.fr)}`);

    /* THE MANIFEST IS A PRE-BATCH READ, so it will legitimately disagree with
       Postgres on every row this build transforms once the build has run.
       Comparing those by equality makes the batch refuse its own second run,
       which is not staleness, it is success. a2.13 §3.8, found by the mutation
       harness's baseline check rather than by anybody reading the code. */
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
    die(`the manifest is stale. Regenerate it with pnpm tsx scripts/_a214_manifest.ts:\n  ${stale.join('\n  ')}`);
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

  /* THE UNIT, BYTE FOR BYTE. Corrections §1: every A2 brief so far has had title
     and sub swapped, so this is checked rather than trusted. */
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
    die(`unit prereqUnitIds is ${JSON.stringify(unit.prereqUnitIds)}, this build expects ${JSON.stringify(UNIT.prereqUnitIds)}.\n`
      + `  ${CONTRAST_UNIT} is the prerequisite precisely so this lesson can bring pouvoir back as its contrast.`);
  }
  const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and missions.ts computes ${JSON.stringify(expectedTag)} from the live unit`);

  /* DEPENDENTS. a2.13 kept a2.02's strict check because it has two; a2.12 had to
     loosen it because it genuinely had none. Probed rather than copied. */
  const dependents = await c.query<{ id: string; seq: number }>(
    "select body->>'id' id, (body->>'seq')::int seq from content_units where kind = 'curriculum_unit' and body->'prereqUnitIds' ? $1 order by 2", [UNIT_ID],
  );
  if (dependents.rowCount === 0) {
    console.log(`  !! ${UNIT_ID} is a LEAF: no unit declares it as a prerequisite. Measured 2026-08-12 and reported, not fatal.`);
    console.log(`     ${FAMILY_UNIT} (seq 9) is the next lesson and rests on a2.02, not on this one.`);
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
    // THE REPAIR. Guarded by the STORED value, so a row somebody else has
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
    + `      ${PARADIGM_IDS.length} grid sentences on TWO frames (${FRAMES.savoir.complement} · ${FRAMES['connaître'].complement}), ${AUTHORED_ITEMS.length - PARADIGM_IDS.length} others\n`
    + `    ${RESPELL_REPAIRS.length} respelling repaired, ${DRILL_ADDITIONS.length} drill additions, all verified after the commit\n`
    + `    ${IMPORTED_IDS.length} rows imported by id out of ${SOURCE_THEMES.length} themes, 0 naming forms authored\n`
    + `    ${READ_ONLY_ROWS.length} rows read and refused\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${EXPECTED_ACTS} acts, ${qs.length} questions, ${SAVOIR_CONNAITRE_ITEM_IDS.length} items\n`
    + `    fr.a2.verbes row count: ${before} before, ${after.rows[0].n} after (max ${after.rows[0].mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-savoir-connaitre-into-seed.ts\n`,
  );

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
