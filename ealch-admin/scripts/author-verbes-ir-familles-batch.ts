/* Applies a2.10.l2 "Les autres verbes en -IR" to Postgres: 26 authored rows, 2
 * respelling repairs, the lesson, AND a widening of unit a2.10's `canDo`.
 *
 *     pnpm tsx scripts/author-verbes-ir-familles-batch.ts --dry-run
 *     pnpm tsx scripts/author-verbes-ir-familles-batch.ts
 *
 * Apply to Postgres FIRST, merge into the seed SECOND. Publishing is blocked and
 * is not part of a lesson build.
 *
 * ── THIS IS THE SECOND LESSON OF AN EXISTING UNIT ─────────────────────────
 *
 * a2.10 already carries a2.10.l1. This appends a2.10.l2 to its `lessonIds` and
 * does NOT touch l1. It also WIDENS THE UNIT'S canDo, which l1's own batch, merge
 * and test all assert byte for byte — those three assertions are updated in the
 * same change, deliberately and not by discovery.
 *
 * ── THE ERROR FORM, AND WHY THIS LESSON MAY PRINT IT ──────────────────────
 *
 * a2.10.l1 banned `ils partissent` from every surface including commonErrors,
 * because a card that shows an error only works when the learner holds the form
 * that replaces it, and nobody in l1 held `ils partent`. THIS LESSON TEACHES IT.
 * So the guard inverts: banned on production surfaces, and REQUIRED on a reject
 * surface, because a lesson that exists to stop an error and never shows it has
 * not confronted it. Both halves are checked below.
 */
import './env.ts';
import { describeTarget } from './env.ts';
import {
  canonicalJson, formatIssues, quizQuestions, validateItem, validateLesson,
  type Item, type Lesson, type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { normalizeFr } from '../../ealch-v2/src/utils/score.ts';
import { Pool } from 'pg';
import {
  AUTHORED_IDS, DICTATION_IDS, DICTEE_NEAR_MISS, DRILL_ADDITIONS, ENDING_PREDICTS,
  ENDING_PROVES_NOTHING, ER_ENDING, ER_PAIR, ER_QUARTET, NEITHER, NOT_MINE_FORMS, NUMBER_PAIRS,
  OVER_GENERALISED_FORMS, OWNED_ID_RANGE, RESPELL_REPAIRS, SHEDDERS, SHED_PAIR, SHED_TRIPLE,
  THEME, THE_TWELVE, VERBES_IR_FAM, VOWEL_INITIAL, afterPronoun, toItem,
} from './data/verbes-ir-familles-corpus.ts';
import { IMPORTED_ROWS, IMPORTED_VERBS } from './data/verbes-ir-familles-imported.ts';
import { namesUnitLabel } from './data/_unit-ref.ts';
import {
  A201_BACKREF, A201_REFRAME, A202_BACKREF, A202_BACKREF_UNIT, A210_BACKREF, A210_REFRAME, A211_BACKREF, A211_BACKREF_UNIT,
  BOTH_RULES, ER_ROW_ORDER, ER_SECTION_ID, NOPREDICT_SECTION_ID, NOTMINE_SECTION_ID, REFRAME,
  SHED_ROW_ORDER, SHED_SECTION_ID, VERBES_IR_FAM_DICTATION_IDS, VERBES_IR_FAM_LESSON,
  VERBES_IR_FAM_SPEAK_IDS, WAKING_SECTION_ID,
} from './data/verbes-ir-familles-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = VERBES_IR_FAM_LESSON;
const UNIT_ID = 'a2.10';

const REFRAME_APPEARANCES = 10;
const REFRAME_SECTIONS = 9;
const EXPECTED_SECTIONS = 23;
const EXPECTED_ACTS = 6;
const EXPECTED_TRIGGERS = 5;
const EXPECTED_ROUNDS = 5;
const EXPECTED_QUESTIONS = 30;
const EXPECTED_AUTHORED = 26;
const EXPECTED_IMPORTED_VERBS = 12;
const EXPECTED_RESPELL_REPAIRS = 2;
const EXPECTED_DICTATION = 8;
const EXPECTED_SHEETS = 2;
const EXPECTED_SHEDDERS = 6;
const EXPECTED_ER_ENDING = 5;

/** Copied byte for byte from the probe's unit dump. The title and sub are NOT
 *  touched by this build; only `canDo` widens, because the unit now covers a
 *  second lesson about the verbs the first one excluded. */
const UNIT_TITLE = 'Regular -IR Verbs';
const UNIT_SUB = 'Les verbes en -IR';
/** What a2.10.l1 shipped, and what this build replaces it with. Both are named,
 *  so a re-run is idempotent and a third party's edit is visible. */
const UNIT_CANDO_BEFORE = 'Can conjugate regular -ir verbs and hear where the -iss- belongs';
const UNIT_CANDO_AFTER = 'Can conjugate regular -ir verbs, hear where the -iss- belongs, and tell them apart from the -ir verbs that take no -iss- at all';

const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme', 'first person', 'third person'];

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

const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment']);
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}

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

const AUTHORED_ITEMS: Item[] = VERBES_IR_FAM.map(toItem);

console.log(`\n  a2.10.l2 "Les autres verbes en -IR" → ${describeTarget()}${DRY_RUN ? '  (DRY RUN)' : ''}\n`);

/* ── Counts, against constants ───────────────────────────────────────────── */

if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) die(`expected ${EXPECTED_AUTHORED} authored rows, found ${AUTHORED_ITEMS.length}`);
if (AUTHORED_IDS.length !== EXPECTED_AUTHORED) die(`AUTHORED_IDS holds ${AUTHORED_IDS.length}`);
if (IMPORTED_VERBS.length !== EXPECTED_IMPORTED_VERBS) die(`expected ${EXPECTED_IMPORTED_VERBS} imported verbs, found ${IMPORTED_VERBS.length}`);
if (THE_TWELVE.length !== EXPECTED_IMPORTED_VERBS) die(`THE_TWELVE holds ${THE_TWELVE.length}`);
if (SHEDDERS.length !== EXPECTED_SHEDDERS) die(`${SHEDDERS.length} shedders and every screen says ${EXPECTED_SHEDDERS}`);
if (ER_ENDING.length !== EXPECTED_ER_ENDING) die(`${ER_ENDING.length} -er-ending verbs and every screen says ${EXPECTED_ER_ENDING}`);
if (NEITHER.length !== 1) die(`${NEITHER.length} verbs in neither family; the lesson says one`);
if (RESPELL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`expected ${EXPECTED_RESPELL_REPAIRS} repairs, found ${RESPELL_REPAIRS.length}`);
if (DRILL_ADDITIONS.length !== 0) die(`${DRILL_ADDITIONS.length} drill additions; all twelve rows already carry flashcard, measured by the manifest`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`expected ${EXPECTED_ACTS} acts`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} triggers`);
if ((LESSON.sheets ?? []).length !== EXPECTED_SHEETS) die(`expected ${EXPECTED_SHEETS} sheets`);
if (DICTATION_IDS.length !== EXPECTED_DICTATION) die(`expected ${EXPECTED_DICTATION} dictée targets, found ${DICTATION_IDS.length}`);
if (VERBES_IR_FAM_DICTATION_IDS.join() !== DICTATION_IDS.join()) die('the dictée section and the corpus disagree');
if (SHEDDERS.length + ER_ENDING.length + NEITHER.length !== THE_TWELVE.length) die('the three family lists do not add up to twelve');

/* ── The authored rows ───────────────────────────────────────────────────── */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(formatIssues(itemIssues));

for (const it of AUTHORED_ITEMS) {
  if (it.id < OWNED_ID_RANGE.from || it.id > OWNED_ID_RANGE.to) die(`${it.id} is outside ${OWNED_ID_RANGE.from}..${OWNED_ID_RANGE.to}`);
  if (it.theme !== THEME) die(`${it.id} is in theme "${it.theme}"`);
  if (it.level !== 'a2') die(`${it.id} is level "${it.level}"`);
  if (it.kind !== 'sentence') die(`${it.id} is kind "${it.kind}"`);
  if (it.gender) die(`${it.id} carries a gender`);
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} "${it.fr}" closes a nasal with a plain n or m: ${it.respell}`);
  const words = it.fr.trim().split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  if (words > 14) die(`${it.id} runs to ${words} words: "${it.fr}"`);
}

/** THE SHEDDERS' SINGULAR TRIPLE, as an equality. je pars / tu pars / il part are
 *  one sound, which is why this family is a2.10.l1's paradigm and not a new one. */
{
  const tails = SHED_TRIPLE.map((id) => afterPronoun(VERBES_IR_FAM.find((w) => w.id === id)?.respell ?? ''));
  if (new Set(tails).size !== 1) die(`the shedders' singular triple does not sound the same: ${tails.join(' | ')}`);
  const frs = SHED_TRIPLE.map((id) => VERBES_IR_FAM.find((w) => w.id === id)!.fr);
  if (new Set(frs).size !== 3) die('the triple does not hold three different sentences');
  console.log(`  shedder triple: "${tails[0]}" three times, on three spellings`);
}

/** THE -ER FAMILY'S SILENT QUARTET, also as an equality, and the middle two must
 *  be identical IN FULL and not merely after the pronoun — `il` and `ils` are the
 *  same sound, so their whole respellings match. That is a2.01's claim exactly. */
{
  const rows = ER_QUARTET.map((id) => {
    const w = VERBES_IR_FAM.find((x) => x.id === id);
    if (!w) die(`ER_QUARTET names ${id}, which is not an authored row`);
    return w;
  });
  const tails = rows.map((w) => afterPronoun(w.respell ?? ''));
  if (new Set(tails).size !== 1) die(`the -er family's quartet does not sound the same: ${tails.join(' | ')}`);
  const sing = VERBES_IR_FAM.find((w) => w.id === ER_PAIR.singular)!;
  const plur = VERBES_IR_FAM.find((w) => w.id === ER_PAIR.plural)!;
  if (sing.respell !== plur.respell) {
    die(
      `${ER_PAIR.singular} is respelled "${sing.respell}" and ${ER_PAIR.plural} is "${plur.respell}".\n`
      + `  THEY MUST BE THE SAME STRING. il and ils are one sound and so are couvre and couvrent; the whole\n`
      + `  family exists in this lesson to show a pair the ear cannot separate.`,
    );
  }
  if (sing.fr === plur.fr) die('the -er pair is the same sentence, so it proves nothing');
  console.log(`  -er quartet: "${tails[0]}" four times, and the il/ils pair is one string`);
}

/** AND THE SHEDDERS' PAIR MUST NOT BE. The two families are distinguished by
 *  exactly this, so if both pairs became identical the lesson would be teaching
 *  one rule twice. */
{
  const sing = VERBES_IR_FAM.find((w) => w.id === SHED_PAIR.singular)!;
  const plur = VERBES_IR_FAM.find((w) => w.id === SHED_PAIR.plural)!;
  if (sing.respell === plur.respell) die(`${SHED_PAIR.singular} and ${SHED_PAIR.plural} carry the SAME respelling. A shedder's plural is audible; that is the whole family.`);
  if ((plur.respell ?? '').length <= (sing.respell ?? '').length) die(`${SHED_PAIR.plural} is respelled no longer than its singular; the consonant has to show`);
  console.log(`  shedder pair: "${sing.respell}" against "${plur.respell}", one consonant apart`);
}

/** Every number pair agrees with its own `audible` flag, so a screen cannot claim
 *  the ear settles something the respellings say it does not. */
for (const p of NUMBER_PAIRS) {
  const a = VERBES_IR_FAM.find((w) => w.id === p.singular);
  const b = VERBES_IR_FAM.find((w) => w.id === p.plural);
  if (!a || !b) die(`number pair ${p.singular} / ${p.plural} does not resolve`);
  const differ = a.respell !== b.respell;
  if (differ !== p.audible) {
    die(
      `${p.singular} / ${p.plural} is marked audible: ${p.audible} and its respellings ${differ ? 'differ' : 'match'}.\n`
      + `  "${a.respell}" against "${b.respell}". ${p.why}`,
    );
  }
}
console.log(`  ${NUMBER_PAIRS.length} number pairs, every one agreeing with its audible flag`);

/** The word-internal nasal, by name. `see-LAHⁿS` for `silence` has the nasal
 *  followed by an S inside the token, which hasPlainNasalFor cannot see. */
{
  const BY_NAME: { id: string; must: string; why: string }[] = [
    { id: 'fr.a2.verbes.486', must: 'see-LAHⁿS', why: 'silence: the nasal is followed by an s inside the token' },
    { id: 'fr.a2.verbes.483', must: 'rar-mahⁿ', why: 'rarement: a nasal at the end of the word' },
  ];
  for (const b of BY_NAME) {
    const row = VERBES_IR_FAM.find((w) => w.id === b.id);
    if (!row?.respell?.includes(b.must)) die(`${b.id} must respell with "${b.must}" (${b.why})`);
  }
  if (hasPlainNasalFor('On souffre en silence.', 'ohⁿ soofr ahⁿ see-LAHNS')) {
    die('hasPlainNasalFor now catches a word-internal nasal. Invariants §3 needs updating and this check can go.');
  }
  if (!hasPlainNasalFor('sentir', 'sahn-TEER')) {
    die('a plain-N spelling of "sentir" is no longer flagged. The nasal check has gone quiet.');
  }
  console.log(`  ${BY_NAME.length} word-internal nasals asserted by name, and the blind spot re-confirmed`);
}

/* ── a1.03 ───────────────────────────────────────────────────────────────── */
{
  const joiners = endingPopulation(AUTHORED_ITEMS);
  if (joiners.length !== 0) die(`${joiners.length} authored row(s) join a1.03's ending population: ${joiners.map((j) => j.fr).join(', ')}`);
  console.log('  a1.03 ending population: 0 authored joiners');
}

/* ── The repairs, both directions ────────────────────────────────────────── */
for (const r of RESPELL_REPAIRS) {
  if (hasPlainNasalFor(r.fr, r.to)) die(`the replacement for ${r.id} "${r.fr}" is still flagged: ${r.to}`);
  if (!hasPlainNasalFor(r.fr, r.from)) die(`${r.id} "${r.fr}" is listed as a repair but "${r.from}" is not a violation (invariants §9)`);
}
console.log(`  ${RESPELL_REPAIRS.length} repairs: every "from" flagged, every "to" clean`);

/* ── The lesson ──────────────────────────────────────────────────────────── */

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(formatIssues(lessonIssues));
const density = validateDensity(LESSON);
if (density.length) die(formatDensity(density));

if (LESSON.seq !== 2) die(`this is the SECOND lesson of a2.10 and its seq is ${LESSON.seq}. lessonsOfUnit sorts on it.`);
if (LESSON.unitId !== UNIT_ID) die(`unitId is ${LESSON.unitId}`);

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected ${REFRAME_APPEARANCES}`);
{
  const carrying = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  if (carrying.length !== REFRAME_SECTIONS) die(`the reframe reaches ${carrying.length} sections, expected ${REFRAME_SECTIONS}`);
  console.log(`  reframe in ${carrying.length} sections: ${carrying.map((s) => (s as { id?: string }).id).join(', ')}`);
}

if (JSON.stringify(LESSON).includes('"autoplay"')) die('autoplay is authored somewhere; it is read by no component');
if (JSON.stringify(LESSON).includes('"imageRef"')) die('an imageRef is authored and nothing validates it');
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('the pager renders exactly one quiz');

/* ── The learner-facing surfaces ─────────────────────────────────────────── */

const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
const learnerText = [...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {})].join('\n');
const learnerProse = [...prose(LESSON.sections), ...prose(LESSON.sheets ?? []), ...prose(LESSON.terms ?? {})];

const jargon = JARGON.filter((j) => hasPhrase(learnerText, j));
if (jargon.length) die(`grammar vocabulary reached a learner surface: ${jargon.join(', ')}`);

/* ── BOTH CONTRASTS ARE ADJACENT ROWS OF THEIR OWN TABLE ─────────────────── */
for (const [label, secId, order, pair, mustMatch] of [
  ['shedders', SHED_SECTION_ID, SHED_ROW_ORDER, SHED_PAIR, false],
  ['-er endings', ER_SECTION_ID, ER_ROW_ORDER, ER_PAIR, true],
] as const) {
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === secId);
  if (!sec) die(`${secId} is gone, and it is where the ${label} contrast lives`);
  if (sec.type !== 'tapTable') die(`${secId} is a ${sec.type}, expected a tapTable: only a tapTable gives each row its own audio`);
  if (sec.rows.length !== 6) die(`${secId} has ${sec.rows.length} rows, expected 6; tapTable is not in ownsLayout()`);
  const iS = order.indexOf(pair.singular);
  const iP = order.indexOf(pair.plural);
  if (iS < 0 || iP < 0) die(`${secId} does not hold both halves of its pair`);
  if (Math.abs(iS - iP) !== 1) {
    die(
      `in ${secId} the pair is rows ${iS + 1} and ${iP + 1}. THEY MUST BE NEIGHBOURS.\n`
      + `  Two rows apart the learner scrolls between them and compares two playbacks rather than two forms.`,
    );
  }
  for (const i of [iS, iP]) if (!sec.rows[i].say) die(`a contrast row of ${secId} carries no \`say\`, so it cannot be played with one tap`);
  const sA = sec.rows[iS].say;
  const sB = sec.rows[iP].say;
  if (mustMatch && sA === sB) die(`${secId} plays the same clip for both halves; they are different sentences that sound identical, not one sentence`);
  console.log(`  ${label}: ${secId} rows ${iS + 1} and ${iP + 1}, adjacent, both audible`);
}

/* ── THE TWO BACK-REFERENCES, AND BOTH REFRAMES QUOTED VERBATIM ──────────── */
{
  for (const [ref, what] of [[A210_BACKREF, 'the shedders'], [A201_BACKREF, 'the -er endings']] as const) {
    const holders = LESSON.sections.filter((s) => strings(s).some((x) => hasPhrase(x, ref)));
    if (!holders.length) die(`${ref} is named by no section, and ${what} run its rule`);
  }
  if (!learnerText.includes(A210_REFRAME)) die(`a2.10.l1's reframe does not appear verbatim, and the shedders ARE its rule. Import the constant.`);
  if (!learnerText.includes(A201_REFRAME)) die(`a2.01's reframe does not appear verbatim, and the -er-ending family IS its rule. Import the constant.`);
  if (!learnerText.includes(BOTH_RULES)) die(`"${BOTH_RULES}" appears on no screen, and it is the claim that makes this one lesson`);
  const both = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(BOTH_RULES)));
  if (both.length < 3) die(`"${BOTH_RULES}" reaches ${both.length} sections, expected at least 3`);
  console.log(`  both reframes quoted verbatim, both units named, thesis in ${both.length} sections`);
}

/* ── The quiz, needed before the production scope ────────────────────────── */

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz || quiz.type !== 'quiz') die('no quiz section');
const qs = quizQuestions(quiz);

function producedStrings(): string[] {
  const out: string[] = [];
  for (const q of qs) {
    if (q.answer) out.push(q.answer);
    if (q.target) out.push(q.target);
    for (const a of q.accept ?? []) out.push(a);
    for (const o of q.opts ?? []) out.push(o);
  }
  for (const s of LESSON.sections) {
    if (s.type === 'scenario') for (const t of s.turns) out.push(t.user, ...(t.alts ?? []).map((a) => a.fr));
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) out.push(...g.check.opts);
    if (s.type === 'listening') for (const q2 of s.questions) out.push(...q2.opts);
    if (s.type === 'trapDrill') for (const d of s.drill) out.push(...d.opts);
  }
  for (const d of LESSON.drills ?? []) {
    for (const p of (d as { pairs?: [string, string][] }).pairs ?? []) out.push(p[1]);
    const o = d as { opts?: string[]; correct?: number };
    if (typeof o.correct === 'number' && o.opts) out.push(o.opts[o.correct]);
  }
  return out;
}
function deckStrings(): string[] {
  const out: string[] = [];
  for (const s of LESSON.sections) {
    if (['vocabThemes', 'flashcards', 'reviewDeck', 'dictation', 'practice'].includes(s.type)) out.push(...strings(s));
    if (s.type === 'groupDrill') for (const g of s.groups) out.push(...strings(g.items ?? []));
  }
  return out;
}
const PRODUCTION_SURFACES = [...producedStrings(), ...deckStrings()];

/** THE SURFACES THAT EXIST TO SHOW A THING AND REJECT IT. */
function rejectStrings(): string[] {
  const out: string[] = [];
  for (const s of LESSON.sections) {
    if (s.type === 'commonErrors') for (const e of s.errors) out.push(e.wrong);
    if (s.type === 'scene') for (const b of s.beats) {
      const anyB = b as { wrong?: { fr?: string }; options?: { fr: string; outcome?: string }[] };
      if (anyB.wrong?.fr) out.push(anyB.wrong.fr);
      for (const o of anyB.options ?? []) if (o.outcome === 'breaks') out.push(o.fr);
    }
    if (s.type === 'trapDrill') for (const c of s.cards) if (c.promptSound) out.push(c.promptSound);
  }
  for (const q of qs) if (q.format === 'errorSpot') out.push(q.q);
  return out;
}
const REJECT_SURFACES = rejectStrings();

/* ── THE OVER-GENERALISED FORM: BANNED WHERE PRODUCED, REQUIRED WHERE REJECTED ── */
{
  const leaked = OVER_GENERALISED_FORMS.filter((f) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, f)));
  if (leaked.length) {
    die(
      `an over-generalised form reached a PRODUCTION surface: ${leaked.join(', ')}\n`
      + `  These are not words. They may be shown to be rejected and nowhere else.`,
    );
  }
  const confronted = OVER_GENERALISED_FORMS.filter((f) => REJECT_SURFACES.some((s) => hasPhrase(s, f)));
  if (!confronted.length) {
    die(
      `NO over-generalised form appears on a reject surface.\n`
      + `  a2.10.l1 banned these everywhere because it could not teach the form that replaces them. THIS LESSON\n`
      + `  CAN, so it has to confront the error rather than describe it: a lesson that exists to stop\n`
      + `  \`ils partissent\` and never shows it has not met the learner where the mistake happens.`,
    );
  }
  console.log(`  over-generalised forms: 0 on a production surface, ${confronted.length} confronted on a reject surface (${confronted.join(', ')})`);
}

/* ── The neighbours keep their lessons ───────────────────────────────────── */
{
  const leaked = NOT_MINE_FORMS.filter((f) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, f)));
  if (leaked.length) die(`a form of venir, tenir or mourir reached a production surface: ${leaked.join(', ')}. They are ${A202_BACKREF} and nobody's.`);
  for (const v of ['venir', 'tenir', 'mourir']) {
    if (!hasPhrase(learnerText, v)) die(`${v} is named nowhere. The lesson has to say where each one goes, or say that it goes nowhere.`);
  }
  const card = LESSON.sections.find((s) => (s as { id?: string }).id === NOTMINE_SECTION_ID);
  if (!card) die(`${NOTMINE_SECTION_ID} is gone, and with it the hand-over`);
  const cardText = strings(card).join('\n');
  // BY ID, resolved to the label. The `_BACKREF` constants already hold the
  // label, and passing a label to `namesUnitLabel` asks it to resolve a label.
  for (const ref of [A202_BACKREF_UNIT, A211_BACKREF_UNIT]) {
    if (!namesUnitLabel(cardText, ref)) die(`${NOTMINE_SECTION_ID} does not name ${ref}. A boundary with no destination is a warning, not a teaching.`);
  }
  const RE_VERBS = ['vendent', 'attendent', 'répondent'];
  const re = RE_VERBS.filter((v) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, v)));
  if (re.length) die(`a conjugated -RE verb reached a production surface: ${re.join(', ')}. ${A211_BACKREF} owns them.`);
  console.log(`  venir, tenir and mourir named and conjugated nowhere; ${A211_BACKREF} named and not taught`);
}

/** All twelve, BY NAME, and released. */
{
  const missing = THE_TWELVE.filter((v) => !hasPhrase(learnerText, v));
  if (missing.length) die(`verb(s) named by no screen: ${missing.join(', ')}`);
  const ids = new Set(LESSON.itemIds);
  const unreleased = IMPORTED_VERBS.filter((v) => !ids.has(v.id)).map((v) => v.verb);
  if (unreleased.length) die(`verb(s) on a screen but not in itemIds: ${unreleased.join(', ')}`);
  console.log(`  all ${THE_TWELVE.length} verbs named individually and released by id`);
}

/* ── THE SORT IS PROVED AGAINST a2.10.l1's OWN ROWS ──────────────────────── */
{
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === NOPREDICT_SECTION_ID);
  if (!sec) die(`${NOPREDICT_SECTION_ID} is gone, and it is the only place the sort is shown to be unpredictable`);
  const text = strings(sec).join('\n');
  for (const p of ENDING_PROVES_NOTHING) {
    if (!hasPhrase(text, p.here) || !hasPhrase(text, p.there)) {
      die(`${NOPREDICT_SECTION_ID} does not put ${p.there} beside ${p.here}, and both end in ${p.ending}`);
    }
    const l1 = IMPORTED_ROWS.find((r) => r.id === p.l1Id);
    if (!l1) die(`${p.l1Id} is not in the imported manifest, so a2.10.l1's own sentence cannot be shown`);
    if (!text.includes(l1.fr)) die(`${NOPREDICT_SECTION_ID} does not show a2.10.l1's own row ${p.l1Id} ("${l1.fr}"), which is what makes the contradiction the learner's own`);
  }
  for (const e of ENDING_PREDICTS.endings) if (!hasPhrase(learnerText, e)) die(`${e} is named nowhere, and it is the one ending that DOES decide`);
  console.log(`  the sort: ${ENDING_PROVES_NOTHING.length} pairs against l1's own rows, and ${ENDING_PREDICTS.endings.join('/')} named as the one reliable tell`);
}

/* ── THE LIAISON CASE ────────────────────────────────────────────────────── */
{
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === WAKING_SECTION_ID);
  if (!sec) die(`${WAKING_SECTION_ID} is gone. Two of the five -er-ending verbs are vowel-initial and they are the two a learner meets first.`);
  const text = strings(sec).join('\n');
  for (const v of VOWEL_INITIAL) if (!hasPhrase(text, v)) die(`${WAKING_SECTION_ID} does not name ${v}`);
  const pairIds = ['fr.a2.verbes.473', 'fr.a2.verbes.474'];
  const rows = pairIds.map((id) => VERBES_IR_FAM.find((w) => w.id === id)!);
  if (rows[0].respell === rows[1].respell) die('the liaison pair carries one respelling; the whole point is that this pair IS audible');
  if (!rows[1].respell?.includes('z')) die('the plural of the liaison pair does not show the z. That z is the entire teaching of this mission.');
  console.log(`  liaison: ${WAKING_SECTION_ID} names ${VOWEL_INITIAL.join(' and ')}, and the z is in the respelling`);
}

/* ── The quiz ────────────────────────────────────────────────────────────── */

const rounds = quiz.rounds ?? [];
if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} rounds, found ${rounds.length}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`expected ${EXPECTED_QUESTIONS} questions, found ${qs.length}`);

const mcq = qs.filter((q) => q.format === 'mcq').length;
if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half limit`);
for (const q of qs) {
  if (!q.why) die(`quiz question has no why: ${q.q}`);
  if (!q.ref || !sectionIds.includes(q.ref)) die(`quiz question ref "${q.ref}" names no section: ${q.q}`);
  if (q.opts && new Set(q.opts).size !== q.opts.length) die(`duplicate option in: ${q.q}`);
  if (['typeIn', 'errorSpot'].includes(q.format ?? '')) {
    if (!matchesAccept(q.answer ?? '', q.accept ?? [])) die(`free-text question does not accept the answer it displays: ${q.answer}`);
  }
  if (q.format === 'speak' && !q.target) die(`speak question has no target: ${q.q}`);
  if (q.format === 'listenChoose' && !q.say) die(`listenChoose without a say: ${q.q}`);
}

/** NO EAR QUESTION MAY ASK BETWEEN TWO FORMS OF THE -ER FAMILY, because those
 *  four are one sound and no recording can separate them. The shedders are fair
 *  game and that asymmetry IS the lesson, so the guard is scoped to the family
 *  rather than applied to every verb. */
{
  const ER_HOMOPHONES = ['couvre', 'couvres', 'couvrent', 'offre', 'offres', 'offrent', 'découvre', 'découvres', 'découvrent', 'souffre', 'souffres', 'souffrent'];
  const bad: string[] = [];
  for (const q of qs) {
    if (q.format !== 'listenChoose') continue;
    const opts = q.opts ?? [];
    for (let i = 0; i < opts.length; i++) {
      for (let j = i + 1; j < opts.length; j++) {
        for (const x of ER_HOMOPHONES) {
          for (const y of ER_HOMOPHONES) {
            if (x !== y && opts[i].replace(x, y) === opts[j]) bad.push(`"${q.q}": ${opts[i]} / ${opts[j]}`);
          }
        }
      }
    }
  }
  if (bad.length) die(`ear question(s) whose options are the same sound:\n    ${[...new Set(bad)].join('\n    ')}\n  Ask those as typeIn.`);
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? '')).length;
  if (listen < 4) die(`only ${listen} listenChoose questions; half of this lesson is a decision the ear CAN make`);
  if (typed < 10) die(`only ${typed} typed questions; the other half is a decision only the page can settle`);
  console.log(`  quiz: ${qs.length} questions, ${mcq} mcq, ${typed} typed, ${listen} listenChoose`);
}

/** Every gap question fixes the number and names the verb. */
{
  const SUBJECTS = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'le', 'la', 'les'];
  const gap = qs.filter((q) => q.q.includes('___'));
  if (gap.length < 6) die(`only ${gap.length} gap questions`);
  for (const q of gap) {
    if (!/\([a-zà-ÿ]+ir\)/i.test(q.q)) die(`no -ir naming form in the stem: ${q.q}`);
    if (!SUBJECTS.includes(q.q.trim().split(/\s+/)[0].toLowerCase())) die(`no subject fixing the number: ${q.q}`);
  }
  console.log(`  ${gap.length} gap questions, every one with a naming form and a subject`);
}

/** Answer spread, both surfaces. */
{
  const closed = qs.filter((q): q is (typeof qs)[number] & { correct: number } => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) if ((c / closed.length) * 100 > 40) die(`quiz slot ${s} holds ${Math.round((c / closed.length) * 100)}%, over 40`);
  console.log(`  quiz slots over ${closed.length} closed: ${[...slots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
}
{
  type Closed = { section: string; correct: number; opts: string[] };
  const inMission: Closed[] = [];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct, opts: g.check.opts });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct, opts: q.opts });
    if (s.type === 'trapDrill') for (const d of s.drill) inMission.push({ section: sid, correct: d.correct, opts: d.opts });
  }
  if (!inMission.length) die('no in-mission closed questions found');
  const slots = new Map<number, number>();
  for (const q of inMission) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) if ((c / inMission.length) * 100 > 40) die(`in-mission slot ${s} holds ${Math.round((c / inMission.length) * 100)}%, over 40; MissionRich does not shuffle these`);
  const bySection = new Map<string, Closed[]>();
  for (const q of inMission) { const l = bySection.get(q.section) ?? []; l.push(q); bySection.set(q.section, l); }
  for (const [sid, list] of bySection) {
    for (let k = 1; k < list.length; k++) if (list[k].correct === list[k - 1].correct) die(`${sid}: consecutive in-mission questions share slot ${list[k].correct}`);
    for (const q of list) if (q.correct >= q.opts.length) die(`${sid}: correct index ${q.correct} out of range for ${q.opts.length} options`);
  }
  console.log(`  in-mission slots over ${inMission.length} closed: ${[...slots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
}

/** drillForRound fires the first resolving target and stops. */
{
  const fired = new Set<string>();
  for (const r of rounds) {
    const t = (r.targets ?? []).find((x) => (LESSON.errorTriggers ?? []).some((e) => e.id === x && e.drill));
    if (t) fired.add(t);
  }
  const orphans = (LESSON.errorTriggers ?? []).filter((e) => e.drill && !fired.has(e.id)).map((e) => e.id);
  if (orphans.length) die(`trigger(s) whose drill no round can fire: ${orphans.join(', ')}`);
  console.log(`  all ${fired.size} drills reachable, one per round`);
}

/* ── Sheets ──────────────────────────────────────────────────────────────── */
{
  const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
  const dangling = LESSON.sections.map((s) => (s as { sheetId?: string }).sheetId).filter((id): id is string => typeof id === 'string').filter((id) => !sheetIds.has(id));
  if (dangling.length) die(`sheetId(s) naming no sheet: ${[...new Set(dangling)].join(', ')}`);
  const unreachable = [...sheetIds].filter((id) => !LESSON.sections.some((s) => (s as { sheetId?: string }).sheetId === id));
  if (unreachable.length) die(`sheet(s) no section links to: ${unreachable.join(', ')}`);
  const SHEET_RENDERS = new Set(['teach', 'letterGrid', 'table']);
  const dead = (LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? []).filter((sec) => !SHEET_RENDERS.has(sec.type)).map((sec) => `${sh.id}: a ${sec.type}, which the sheet renderer does not draw`));
  if (dead.length) die(dead.join('\n  '));
  /** Both nine-pronoun tables use the CANONICAL order; the in-flow tables depart
   *  from it so their pairs can be adjacent, and that is only safe because these
   *  are one tap away. */
  const EXPECTED_ORDER = ["je / j'", 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles'];
  for (const id of ['sheet-fam-shed', 'sheet-fam-er']) {
    const t = (LESSON.sheets ?? []).flatMap((sh) => sh.sections ?? []).find((s) => (s as { id?: string }).id === id);
    if (!t || t.type !== 'table') die(`${id} is missing from the sheet`);
    const order = t.rows.map((r) => r[0]);
    if (order.join(',') !== EXPECTED_ORDER.join(',')) die(`${id} runs ${order.join(', ')}; the in-flow tables depart from the usual order so this one may not`);
  }
  console.log(`  sheets: ${sheetIds.size}, both reachable, both nine-pronoun tables in canonical order`);
}

/* ── Tranches and reachability ───────────────────────────────────────────── */
{
  const tranche = LESSON.deckTranche ?? [];
  if (tranche.length !== (LESSON.acts ?? []).length) die(`${tranche.length} tranches for ${(LESSON.acts ?? []).length} acts`);
  const seen = new Set<string>();
  for (const [i, slice] of tranche.entries()) {
    for (const id of slice) {
      if (seen.has(id)) die(`${id} is released twice, in tranche ${i}`);
      seen.add(id);
      if (!LESSON.itemIds.includes(id)) die(`tranche ${i} releases ${id}, not in itemIds`);
    }
  }
  const never = LESSON.itemIds.filter((id) => !seen.has(id));
  if (never.length) die(`item(s) no tranche releases: ${never.join(', ')}`);
  console.log(`  ${seen.size} items released across ${tranche.length} tranches, each exactly once`);
}
{
  const shown = new Set<string>();
  for (const s of LESSON.sections) {
    if (s.type === 'groupDrill') for (const g of s.groups) for (const it of g.items ?? []) if (it.itemId) shown.add(it.itemId);
    if (s.type === 'practice') for (const id of s.itemIds ?? []) shown.add(id);
    if (s.type === 'dictation') for (const id of s.itemIds ?? []) shown.add(id);
  }
  for (const d of LESSON.drills ?? []) for (const it of (d as { items?: string[] }).items ?? []) shown.add(it);
  const orphan = LESSON.itemIds.filter((id) => !shown.has(id));
  if (orphan.length) die(`item(s) declared, resolvable and drawn by nothing: ${orphan.join(', ')}`);
  console.log(`  all ${LESSON.itemIds.length} items reach a screen that renders the row`);
}

/* ── Against the live database ───────────────────────────────────────────── */

function pgArray(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const touched = IMPORTED_ROWS.map((r) => r.id);
  const live = await c.query<{ id: string; fr: string; en: string; respell: string | null; gender: string | null; theme: string; drills: string[]; status: string }>(
    'select id, fr, en, respell, gender, theme, drills, status from content_items where id = any($1)', [[...new Set(touched)]]);
  const byId = new Map(live.rows.map((r) => [r.id, r] as const));
  const repairedTo = new Map<string, string>(RESPELL_REPAIRS.map((r) => [r.id, r.to] as const));

  const drift: string[] = [];
  for (const row of IMPORTED_ROWS) {
    const x = byId.get(row.id);
    if (!x) { drift.push(`${row.id} is no longer in Postgres`); continue; }
    if (x.status !== 'published') drift.push(`${row.id} is ${x.status}`);
    if (x.fr !== row.fr) drift.push(`${row.id} fr: manifest ${JSON.stringify(row.fr)} vs db ${JSON.stringify(x.fr)}`);
    if (x.en !== row.en) drift.push(`${row.id} en: manifest ${JSON.stringify(row.en)} vs db ${JSON.stringify(x.en)}`);
    if (x.theme !== row.theme) drift.push(`${row.id} theme drift`);
    const legal = [row.respell ?? null, repairedTo.get(row.id) ?? null];
    if (!legal.includes(x.respell ?? null)) drift.push(`${row.id} respell: manifest ${JSON.stringify(row.respell ?? null)} or ${JSON.stringify(repairedTo.get(row.id) ?? null)}, db says ${JSON.stringify(x.respell)}`);
  }
  if (drift.length) { c.release(); await pool.end(); die(`the manifest has DRIFTED from Postgres:\n  ${drift.slice(0, 8).join('\n  ')}\n  Regenerate with pnpm tsx scripts/_a210l2_manifest.ts`); }
  console.log(`  manifest verified against Postgres: ${touched.length} rows, field by field`);

  {
    const gendered = IMPORTED_VERBS.filter((v) => byId.get(v.id)?.gender);
    if (gendered.length) { c.release(); await pool.end(); die(`imported verb(s) carrying a gender: ${gendered.map((v) => v.verb).join(', ')}`); }
    const short = IMPORTED_VERBS.filter((v) => !pgArray(byId.get(v.id)?.drills).includes('flashcard'));
    if (short.length) { c.release(); await pool.end(); die(`verb row(s) released to the hub with no flashcard drill: ${short.map((v) => v.verb).join(', ')}`); }
  }

  const range = await c.query<{ n: string; mx: string }>("select count(*) n, coalesce(max(id),'') mx from content_items where theme = $1 and id like 'fr.a2.verbes.%'", [THEME]);
  const claimed = await c.query<{ id: string; fr: string; theme: string }>('select id, fr, theme from content_items where id = any($1)', [AUTHORED_ITEMS.map((i) => i.id)]);
  const foreign = claimed.rows.filter((r) => {
    const mine = AUTHORED_ITEMS.find((a) => a.id === r.id);
    return !mine || mine.fr !== r.fr || mine.theme !== r.theme;
  });
  if (foreign.length) { c.release(); await pool.end(); die(`id(s) taken by DIFFERENT content: ${foreign.map((r) => `${r.id} "${r.fr}"`).join(', ')}`); }
  if (claimed.rows.length) console.log(`  ${claimed.rows.length} authored id(s) already present with matching content: this is a re-run`);
  console.log(`  fr.a2.verbes: ${range.rows[0].n} rows, max ${range.rows[0].mx}, claiming ${AUTHORED_ITEMS[0].id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1].id}`);

  /* THE DICTÉE MODE AND WHAT IT CAN GRADE, through the real functions. */
  for (const id of DICTATION_IDS) {
    const row = AUTHORED_ITEMS.find((i) => i.id === id);
    if (!row) { c.release(); await pool.end(); die(`dictée target ${id} is not an authored row`); }
    const mode = dicteeMode(row.fr);
    if (mode !== 'letters') { c.release(); await pool.end(); die(`dictée target ${id} "${row.fr}" is in ${mode} mode; word tiles cannot test a spelling`); }
    if (!row.drills?.includes('dictation')) { c.release(); await pool.end(); die(`dictée target ${id} carries no dictation drill`); }
  }
  {
    const wrongWay: string[] = [];
    for (const d of DICTEE_NEAR_MISS) {
      const row = AUTHORED_ITEMS.find((i) => i.id === d.id);
      if (!row) { c.release(); await pool.end(); die(`DICTEE_NEAR_MISS names ${d.id}, not an authored row`); }
      if (!DICTATION_IDS.includes(d.id)) { c.release(); await pool.end(); die(`DICTEE_NEAR_MISS names ${d.id}, not a dictée target`); }
      const distinguishable = normalizeFr(row.fr) !== normalizeFr(d.wrong);
      if (distinguishable !== d.scorable) wrongWay.push(`${d.id} scorable: ${d.scorable}, normalizeFr says ${distinguishable} ("${row.fr}" vs "${d.wrong}")`);
    }
    if (wrongWay.length) { c.release(); await pool.end(); die(`the dictée's scoring claims disagree with normalizeFr:\n    ${wrongWay.join('\n    ')}`); }
    const scorable = DICTEE_NEAR_MISS.filter((d) => d.scorable).length;
    if (scorable < 7) { c.release(); await pool.end(); die(`only ${scorable} of ${DICTEE_NEAR_MISS.length} dictée targets graded on the distinction they teach`); }
    console.log(`  dictée: ${DICTATION_IDS.length} targets, all letters mode, ${scorable} graded and ${DICTEE_NEAR_MISS.length - scorable} not (the circumflex)`);
  }

  for (const id of VERBES_IR_FAM_SPEAK_IDS) {
    const mine = AUTHORED_ITEMS.find((i) => i.id === id);
    if (!mine?.drills?.includes('voiceflash')) { c.release(); await pool.end(); die(`speak target ${id} carries no voiceflash`); }
  }
  console.log(`  speak: ${VERBES_IR_FAM_SPEAK_IDS.length} targets, all voiceflash`);

  /* ── The unit: append the lesson, and WIDEN THE canDo ──────────────────── */
  const u = await c.query<{ body: Unit & { seq?: string | number } }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID]);
  if (u.rowCount !== 1) { c.release(); await pool.end(); die(`unit ${UNIT_ID} is not in content_units`); }
  const unit = u.rows[0].body;
  if (unit.title !== UNIT_TITLE) { c.release(); await pool.end(); die(`unit title is ${JSON.stringify(unit.title)}; this build does not change it`); }
  if (unit.sub !== UNIT_SUB) { c.release(); await pool.end(); die(`unit sub is ${JSON.stringify(unit.sub)}; this build does not change it`); }
  if (unit.canDo !== UNIT_CANDO_BEFORE && unit.canDo !== UNIT_CANDO_AFTER) {
    c.release(); await pool.end();
    die(`unit canDo is ${JSON.stringify(unit.canDo)}.\n  Expected either a2.10.l1's ${JSON.stringify(UNIT_CANDO_BEFORE)} or this build's widened one. Somebody else has edited it.`);
  }
  if (!(unit.lessonIds ?? []).includes('a2.10.l1')) { c.release(); await pool.end(); die(`unit ${UNIT_ID} has lost a2.10.l1; this lesson goes BEHIND it, not instead of it`); }
  /** The eyebrow is computed from unit.seq and is the same for both lessons of a
   *  unit, which is correct — it answers "where am I in the track". The in-lesson
   *  header uses the raw tag, which is where the two differ. Asserting the tag
   *  STARTS WITH the computed eyebrow keeps a re-seq loud. */
  const expectedEyebrow = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
  if (!LESSON.tag.startsWith(expectedEyebrow)) {
    c.release(); await pool.end();
    die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${JSON.stringify(unit.seq)}, so the eyebrow will draw ${JSON.stringify(expectedEyebrow)}`);
  }
  if (LESSON.tag === expectedEyebrow) {
    c.release(); await pool.end();
    die(`the lesson tag is identical to a2.10.l1's. lesson.tsx uses the raw tag for the in-lesson header, so the two lessons of this unit would be indistinguishable there. a1.30.l2 is the precedent.`);
  }
  const already = (unit.lessonIds ?? []).includes(LESSON.id);
  console.log(`  unit ${UNIT_ID}: seq ${JSON.stringify(unit.seq)}, tag ${LESSON.tag}, lessonIds ${JSON.stringify(unit.lessonIds ?? [])}${already ? '  (re-run)' : '  (appending l2)'}`);
  console.log(`  unit canDo: ${unit.canDo === UNIT_CANDO_AFTER ? 'already widened' : 'widening now'}`);
  const nextUnit = { ...unit, canDo: UNIT_CANDO_AFTER, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

  const prev = await c.query<{ body: unknown }>("select body from content_units where kind = 'lesson' and slug = $1", [LESSON.id]);
  const prevBody = prev.rows[0]?.body as { version?: number } | undefined;
  const prevVersion = prevBody?.version ?? 0;
  if (LESSON.version < prevVersion) { c.release(); await pool.end(); die(`the stored lesson is v${prevVersion} and this is v${LESSON.version}`); }
  if (LESSON.version === prevVersion && canonicalJson(prevBody) !== canonicalJson(LESSON)) {
    c.release(); await pool.end();
    die(`the stored lesson is v${prevVersion} with DIFFERENT content. Move the lesson's own version counter forward.`);
  }
  console.log(`  lesson ${LESSON.id}: ${prevVersion === 0 ? `new, v${LESSON.version}` : prevVersion === LESSON.version ? `v${LESSON.version} unchanged (idempotent re-run)` : `replacing v${prevVersion} with v${LESSON.version}`}`);

  if (DRY_RUN) { console.log('\n  DRY RUN: nothing written.\n'); c.release(); await pool.end(); return; }

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
          it.gender ?? null, it.notes ?? null, it.tags ?? [], it.drills ?? [], it.version ?? 1, it.cardType ?? null],
      );
    }
    for (const r of RESPELL_REPAIRS) {
      const x = byId.get(r.id)!;
      if ((x.respell ?? null) !== r.from && x.respell !== r.to) throw new Error(`respelling for ${r.id}: expected ${JSON.stringify(r.from)}, Postgres says ${JSON.stringify(x.respell)}`);
      await c.query('update content_items set respell = $2 where id = $1', [r.id, r.to]);
    }
    await c.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)],
    );
    const ur = await c.query(
      `update content_units set body = $1::jsonb, updated_at = now() where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID],
    );
    if (ur.rowCount !== 1) throw new Error(`the unit update touched ${ur.rowCount} rows, expected 1`);
    await c.query('commit');
  } catch (e) {
    await c.query('rollback');
    c.release(); await pool.end();
    die(`transaction rolled back: ${(e as Error).message}`);
  }

  const after = await c.query<{ n: string; mx: string }>("select count(*) n, coalesce(max(id),'') mx from content_items where theme = $1 and id like 'fr.a2.verbes.%'", [THEME]);
  console.log(
    `\n  applied to Postgres:\n`
    + `    ${AUTHORED_ITEMS.length} rows authored, ${AUTHORED_ITEMS[0].id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1].id}\n`
    + `    ${RESPELL_REPAIRS.length} respellings repaired\n`
    + `    ${IMPORTED_VERBS.length} verbs imported by id, 0 authored\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items\n`
    + `    unit ${UNIT_ID}: lessonIds ${JSON.stringify(nextUnit.lessonIds)}, canDo widened\n`
    + `    fr.a2.verbes row count: ${range.rows[0].n} before, ${after.rows[0].n} after (max ${after.rows[0].mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-verbes-ir-familles-into-seed.ts\n`,
  );

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
