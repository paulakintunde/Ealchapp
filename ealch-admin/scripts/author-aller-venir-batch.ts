/* Applies a2.02.l1 "Irréguliers 1 : aller, venir, tenir" to Postgres: 29 authored
 * rows, 0 respelling repairs, 0 drill additions, and the lesson (a FIRST build,
 * v1 — the unit dump says `"lessons": []` and that was probed rather than
 * assumed). Validates EVERYTHING before it opens a transaction.
 *
 *     pnpm tsx scripts/author-aller-venir-batch.ts --dry-run
 *     pnpm tsx scripts/author-aller-venir-batch.ts
 *
 * Order matters and it has cost real work twice: apply to Postgres FIRST, merge
 * into the seed SECOND, and publish only when both agree. content:publish
 * regenerates seed.json FROM this database, so publishing before applying would
 * silently delete the lesson from the seed. Publishing is not part of a lesson
 * build.
 *
 * ── THE THINGS TO READ BEFORE RUNNING THIS ────────────────────────────────
 *
 * 1. DO NOT RUN `pnpm content:verbes`. scripts/author-verbes-batch.ts declares
 *    `fr.a2.verbes.016 = 'les devoirs'` and `fr.a2.verbes.019 = 'le vélo'` while
 *    Postgres holds `rentrer` and `demander` at those ids, and it upserts by id.
 *    Ledger §0.
 *
 * 2. THIS LESSON AUTHORS NO INFINITIVE AND NO RESPELLING REPAIR. Six verbs are
 *    imported by id and a seventh is read and not imported; four sentences are
 *    imported from a2.10.l1 and a2.10.l2. Not one of the ten needs repairing,
 *    because not one of the six naming forms contains a nasal vowel. The repair
 *    machinery is kept, both lists empty, with the guards still running.
 *
 * 3. THE NASAL CHECKER IS BLIND HERE FOR TWO DIFFERENT REASONS AND THE BRIEF
 *    DESCRIBES NEITHER. `Nantes` puts a nasal in front of a consonant inside the
 *    token, which is the a2.11 shape and is the only instance. `viennent` and
 *    `tiennent` have NO nasal vowel at all and the checker short-circuits on the
 *    doubled n in the French spelling, so it would not catch a single-n
 *    respelling either. Both are asserted BY NAME and both blindnesses are
 *    asserted as NEGATIVES.
 *
 * 4. a1.03 DOES NOT MOVE. Every authored row is a `sentence` with no `gender` and
 *    no bare single-word `fr`, so none can join a1.03's measured ending
 *    population. Proved through the REAL `endingPopulation`, and the carried
 *    `devenir` row was chosen against a gendered twin at fr.b2.philosophie.136.
 *
 * 5. THE TWO JOBS ARE A LAYOUT CLAIM AND ARE CHECKED AS ONE. Both uses of
 *    `venir de` must be the two rows of ONE tapTable, in TWO_JOBS order, each
 *    with its own audio, and the shared prefix must be in the column header
 *    rather than in the cells. That is asserted by row index below, not by "the
 *    two strings appear somewhere".
 *
 * 6. THE FUTUR PROCHE IS a2.19's AND THE GUARD IS STRUCTURAL. Any form of aller
 *    followed directly by a naming form is the futur proche, whatever the verb,
 *    and no production surface may hold one. Scoped to production surfaces
 *    exactly as the brief says, because the card that hands the construction over
 *    has to be able to name it.
 */
import './env';
import { describeTarget } from './env';
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
import { normalizeFr } from '../../ealch-v2/src/utils/score.ts';
import { Pool } from 'pg';
import {
  A210_BACKREF, ALLER_STEMS, ALLER_VENIR, AUTHORED_IDS, BLIND_NASALS, COMPOUNDS,
  COMPOUND_BASE, DICTATION_IDS, DICTEE_NEAR_MISS, DOUBLE_N, DRILL_ADDITIONS,
  FAMILY_UNIT, FRAME_WORD, FUTUR_PROCHE_SHAPE, FUTUR_PROCHE_UNIT,
  HALF_REPAIRED_NANTES, HOMOPHONE_FORMS, NUMBER_PAIRS, ORIGIN_IDS, OWNED_ID_RANGE,
  PARADIGM, PASSE_COMPOSE_PHRASES, PASSE_COMPOSE_SHAPE, PASSE_COMPOSE_UNIT,
  PREPOSITION_UNIT, RECENT_PAST_IDS, RESPELL_REPAIRS, RESPELL_REPAIRS_INVISIBLE,
  RESPELL_REPAIRS_VISIBLE, SINGULAR_TRIPLES, TENIR_FOLLOWS_VENIR, THEME, THE_THREE,
  TOT_FRAME, TWO_JOBS, TWO_JOBS_SHARED_PREFIX, afterPronoun, personIds, toItem,
} from './data/aller-venir-corpus.ts';
import {
  IMPORTED_ROWS, IMPORTED_SENTENCE_IDS, IMPORTED_VERBS, READ_ONLY_VERBS,
} from './data/aller-venir-imported.ts';
import {
  A201_REFRAME, A210_REFRAME, ALLER_VENIR_DICTATION_IDS, ALLER_VENIR_LESSON,
  ALLER_VENIR_SPEAK_IDS, BOUNDARY_SECTION_ID, FAMILY_SECTION_ID, NOUS_ON,
  NOUS_ON_SECTION_ID, REFRAME, SHEET_ID, TENIR_CLAIM, TIMELINE, TOT_SECTION_ID,
  TWO_JOBS_ROWS, TWO_JOBS_SECTION_ID, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT,
} from './data/aller-venir-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = ALLER_VENIR_LESSON;
const UNIT_ID = 'a2.02';

/** Asserted against explicit constants, never figures derived from the lesson. A
 *  derived count compares the content to itself and passes on any rewording. */
/** EIGHT over the whole lesson object: SEVEN learner-facing appearances across
 *  seven different sections, plus the `reframe` field itself, which `strings()`
 *  walks like any other. The density validator's own rule counts SECTIONS and
 *  wants at least three; the doctrine says the good lessons use six to eight. */
const REFRAME_APPEARANCES = 11;
const REFRAME_SECTIONS = 8;
const EXPECTED_SECTIONS = 24;
const EXPECTED_ACTS = 6;
const EXPECTED_TRIGGERS = 5;
const EXPECTED_ROUNDS = 5;
const EXPECTED_QUESTIONS = 30;
const EXPECTED_AUTHORED = 29;
const EXPECTED_IMPORTED_VERBS = 6;
const EXPECTED_READ_ONLY_VERBS = 1;
const EXPECTED_IMPORTED_SENTENCES = 4;
const EXPECTED_RESPELL_REPAIRS = 0;
const EXPECTED_DRILL_ADDITIONS = 0;
const EXPECTED_DICTATION = 15;
/** ONE sheet, and it is the forms one. A fourth ending sheet would be worthless:
 *  these verbs have no endings to list. */
const EXPECTED_SHEETS = 1;
/** THE BRIEF'S CEILING. "At most three compounds appear, and the family principle
 *  is not taught." */
const MAX_COMPOUNDS = 3;
/** ONE tapTable in the flow, and it is the two-job contrast rather than a
 *  paradigm. The brief says the two uses belong on ONE screen. */
const EXPECTED_TAPTABLES = 1;
/** SIX cells, and tenir must follow venir in every one of them. If this ever
 *  drops below six, tenir is an arbitrary third verb and the lesson has no
 *  reason to hold it. */
const EXPECTED_TENIR_MATCHES = 6;
/** The three verbs, and the number of rows in a paradigm. */
const EXPECTED_VERBS = 3;
const EXPECTED_CELLS = 6;

/** Copied BYTE FOR BYTE from the probe's unit dump on 2026-08-12, not from the
 *  brief. Unusually, THIS BRIEF'S IDENTITY BLOCK IS RIGHT: it was corrected in
 *  place against A2-BRIEF-CORRECTIONS.md §1 before the build started, and all
 *  three fields match the database exactly. It is still checked here, because it
 *  costs one query and four briefs in a row got it wrong before the corrections
 *  file existed. */
const UNIT_TITLE = 'Irregular Verbs 1: Aller, Venir, Tenir';
const UNIT_SUB = 'Irréguliers 1 : aller, venir, tenir';
const UNIT_CANDO = 'Can use aller, venir and tenir in the present, including venir de for the recent past';

/** Grammar vocabulary that must not reach a learner surface. Deliberately short:
 *  a checker that fires on ordinary teaching prose gets silenced wholesale.
 *  `infinitive` is NOT here, because the chip a learner sees reads "the naming
 *  form"; nor is `stem`, which this band uses as ordinary English.
 *
 *  `irregular` is NOT here either, and that is a decision rather than an
 *  oversight: it is the unit's own title in the database, drawn on the trail card
 *  above this lesson, so banning it from the lesson body would make the lesson
 *  disagree with the screen the learner arrives from. */
const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme', 'first person', 'second person', 'third person'];

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
 *  stop, so `/nu və.nɔ̃/` reads as a standalone word `nɔ̃`, and a2.01's aller
 *  check fired on `.va.` while its lesson was correct. A guard that fires on
 *  legitimate content is a guard the next author deletes. */
const NOTATION_KEYS = new Set(['ipa', 'respell', 'promptSound', 'scoreSegment']);
function prose(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) prose(x, out);
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) if (!NOTATION_KEYS.has(k)) prose(x, out);
  }
  return out;
}

/** Accent-aware word-boundary search. Never build a regex out of a search term:
 *  `\b` is ASCII-only in JavaScript and returns zero on a trailing accent, which
 *  looks exactly like an absence. */
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

const AUTHORED_ITEMS: Item[] = ALLER_VENIR.map(toItem);

console.log(`\n  a2.02.l1 "Irréguliers 1 : aller, venir, tenir" → ${describeTarget()}${DRY_RUN ? '  (DRY RUN)' : ''}\n`);

/* ── Counts, against constants ───────────────────────────────────────────── */

if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) die(`expected ${EXPECTED_AUTHORED} authored rows, found ${AUTHORED_ITEMS.length}`);
if (AUTHORED_IDS.length !== EXPECTED_AUTHORED) die(`AUTHORED_IDS holds ${AUTHORED_IDS.length} ids, expected ${EXPECTED_AUTHORED}`);
if (IMPORTED_VERBS.length !== EXPECTED_IMPORTED_VERBS) die(`expected ${EXPECTED_IMPORTED_VERBS} imported verbs, found ${IMPORTED_VERBS.length}`);
if (READ_ONLY_VERBS.length !== EXPECTED_READ_ONLY_VERBS) die(`expected ${EXPECTED_READ_ONLY_VERBS} read-only verb, found ${READ_ONLY_VERBS.length}`);
if (IMPORTED_SENTENCE_IDS.length !== EXPECTED_IMPORTED_SENTENCES) die(`expected ${EXPECTED_IMPORTED_SENTENCES} imported sentences, found ${IMPORTED_SENTENCE_IDS.length}`);
if (THE_THREE.length !== EXPECTED_VERBS) die(`THE_THREE holds ${THE_THREE.length} verbs and every screen says ${EXPECTED_VERBS}`);
if (COMPOUNDS.length > MAX_COMPOUNDS) die(`${COMPOUNDS.length} compounds named, and the brief's ceiling is ${MAX_COMPOUNDS}. The family principle is ${FAMILY_UNIT}'s.`);
if (RESPELL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`expected ${EXPECTED_RESPELL_REPAIRS} respelling repairs, found ${RESPELL_REPAIRS.length}`);
if (DRILL_ADDITIONS.length !== EXPECTED_DRILL_ADDITIONS) die(`expected ${EXPECTED_DRILL_ADDITIONS} drill additions, found ${DRILL_ADDITIONS.length}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`expected ${EXPECTED_ACTS} acts, found ${(LESSON.acts ?? []).length}`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} error triggers, found ${(LESSON.errorTriggers ?? []).length}`);
if ((LESSON.sheets ?? []).length !== EXPECTED_SHEETS) die(`expected ${EXPECTED_SHEETS} reference sheet, found ${(LESSON.sheets ?? []).length}`);
if (DICTATION_IDS.length !== EXPECTED_DICTATION) die(`expected ${EXPECTED_DICTATION} dictée targets, found ${DICTATION_IDS.length}`);
if (ALLER_VENIR_DICTATION_IDS.join() !== DICTATION_IDS.join()) die('the dictée section and the corpus disagree about the targets');
if (PARADIGM.length !== EXPECTED_CELLS) die(`PARADIGM holds ${PARADIGM.length} rows and a paradigm has ${EXPECTED_CELLS}`);
if (TOT_FRAME.length !== 3) die(`TOT_FRAME holds ${TOT_FRAME.length} pairs, expected 3: two neighbours' and this lesson's`);

/** THE REASON tenir IS IN THIS LESSON, AS ARITHMETIC.
 *
 *  For every one of the six cells, tenir's form is venir's form with its first
 *  letter replaced by a t. The brief is explicit: if that link is missing, tenir
 *  is an arbitrary third verb. So it is checked before any prose is read. */
{
  if (TENIR_FOLLOWS_VENIR.length !== EXPECTED_TENIR_MATCHES) {
    die(
      `tenir follows venir in ${TENIR_FOLLOWS_VENIR.length} of ${PARADIGM.length} cells, expected all ${EXPECTED_TENIR_MATCHES}.\n`
      + `  Missing: ${PARADIGM.filter((r) => !TENIR_FOLLOWS_VENIR.includes(r.person)).map((r) => `${r.person} (${r.venir}/${r.tenir})`).join(', ')}\n`
      + `  That link is the ONLY reason this lesson holds a third verb. Without it, drop tenir or drop the claim.`,
    );
  }
  /** AND aller MUST NOT FOLLOW IT, or the "two of them are one shape and one is
   *  not" claim is false and the whole of act 2 is wrong. */
  const allerMatches = PARADIGM.filter((r) => r.aller === `${r.aller[0]}${r.venir.slice(1)}`);
  if (allerMatches.length) {
    die(`aller matches venir's shape in ${allerMatches.length} cell(s): ${allerMatches.map((r) => r.person).join(', ')}. The lesson says it matches in none.`);
  }
  if (ALLER_STEMS.length !== 2) die(`ALLER_STEMS holds ${ALLER_STEMS.length} stems and the aller act says two`);
  const covered = ALLER_STEMS.reduce((n, s) => n + s.persons.length, 0);
  if (covered !== PARADIGM.length) die(`the two aller stems cover ${covered} of ${PARADIGM.length} cells; every cell must come from one of them`);
  console.log(`  tenir follows venir in ${TENIR_FOLLOWS_VENIR.length}/${PARADIGM.length} cells; aller in 0, from ${ALLER_STEMS.map((s) => `${s.stem}×${s.persons.length}`).join(' + ')}`);
}

/* ── The authored rows ───────────────────────────────────────────────────── */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(formatIssues(itemIssues));

for (const it of AUTHORED_ITEMS) {
  if (it.id < OWNED_ID_RANGE.from || it.id > OWNED_ID_RANGE.to) {
    die(`${it.id} is outside this lesson's owned range ${OWNED_ID_RANGE.from}..${OWNED_ID_RANGE.to}`);
  }
  if (it.theme !== THEME) die(`${it.id} is in theme "${it.theme}". This lesson writes only into "${THEME}".`);
  if (it.level !== 'a2') die(`${it.id} is level "${it.level}". Everything authored here is a2 (doctrine §C).`);
  if (it.kind !== 'sentence') die(`${it.id} is kind "${it.kind}". Every authored row here is a sentence; see the corpus header.`);
  if (it.gender) die(`${it.id} carries a gender. Nothing authored here may join a1.03's ending population.`);
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} "${it.fr}" closes a nasal with a plain n or m: ${it.respell}`);
  /** ≤ 14 words, doctrine §C. */
  const words = it.fr.trim().split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  if (words > 14) die(`${it.id} runs to ${words} words, over the A2 budget of 14: "${it.fr}"`);
  /** NO FUTUR PROCHE IN AN AUTHORED ROW, EVER. Not merely on a production
   *  surface: a corpus row is released to spaced repetition, so an aller row with
   *  an action after it would be drilled for weeks before a2.19 explains it. */
  if (FUTUR_PROCHE_SHAPE.test(it.fr)) {
    die(`${it.id} "${it.fr}" puts an action after aller. That is the futur proche and it is ${FUTUR_PROCHE_UNIT}, seq 15, whose prereq is this unit.`);
  }
  /** AND NO PASSÉ COMPOSÉ. This lesson hands the learner a past without one. */
  if (PASSE_COMPOSE_SHAPE.test(it.fr) || PASSE_COMPOSE_PHRASES.some((p) => hasPhrase(it.fr, p))) {
    die(`${it.id} "${it.fr}" holds an auxiliary and a participle. That is ${PASSE_COMPOSE_UNIT} and every row here is a simple present or a venir de.`);
  }
  /** NO ELISION LEFT UNDONE. `de` in front of a vowel is `d'`, which sons.07
   *  taught. `de arriver` is not French and a placeholder that survived the fix
   *  block in the corpus would ship it. */
  if (/\bde\s+[aeiouyàâéèêëîïôöûüh]/i.test(it.fr)) {
    die(`${it.id} "${it.fr}" leaves de unelided in front of a vowel. sons.07 taught the elision and this lesson does not get to break it.`);
  }
}

/** ALL SEVEN PERSONS REACH A SCREEN, checked against the corpus rather than a
 *  hand list that could quietly lose `vous`. */
{
  const PERSONS = ['je', 'tu', 'il', 'nous', 'vous', 'ils', 'on'] as const;
  const missing = PERSONS.filter((p) => personIds(p).length === 0);
  if (missing.length) die(`no authored row shows the ${missing.join(', ')} form`);
  console.log(`  all ${PERSONS.length} persons authored: ${PERSONS.map((p) => `${p}:${personIds(p).length}`).join(' ')}`);
}

/** ALL THREE PARADIGMS ARE PRESENT IN FULL, CELL BY CELL.
 *
 *  The brief asks for this explicitly and for the irregular cells at minimum. It
 *  is done for all eighteen: every cell of PARADIGM must appear in the authored
 *  sentence for that verb and that person, so a row that is quietly reworded to
 *  a different form breaks here rather than on a device. */
{
  const ORDER: readonly ('je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils')[] = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
  for (const verb of ['aller', 'venir', 'tenir'] as const) {
    const rows = ALLER_VENIR.filter((w) => w.family === verb);
    if (rows.length !== EXPECTED_CELLS) die(`${verb} has ${rows.length} authored cells, expected ${EXPECTED_CELLS}`);
    rows.forEach((row, i) => {
      if (row.person !== ORDER[i]) die(`${row.id} is person "${row.person}" at index ${i} of ${verb}, and the ledger's order is ${ORDER.join(' · ')}`);
      const wanted = PARADIGM[i][verb];
      if (!hasPhrase(row.fr, wanted)) {
        die(`${row.id} "${row.fr}" does not contain the ${verb} form "${wanted}" that PARADIGM gives for ${PARADIGM[i].person}`);
      }
      if (row.verb !== verb) die(`${row.id} is in family "${verb}" and its verb field says "${row.verb}"`);
    });
    /** AND THE SIX RUN ON ONE FRAME. If they do not, the screen compares six
     *  objects as well as six forms and the claim is gone. */
    const frames = rows.map((r) => r.fr.replace(/^\S+\s+\S+\s*/, ''));
    if (new Set(frames).size !== 1) {
      die(`${verb} runs on ${new Set(frames).size} different frames: ${JSON.stringify([...new Set(frames)])}. Only the verb may move.`);
    }
  }
  console.log(`  three paradigms, ${EXPECTED_CELLS} cells each, asserted cell by cell against PARADIGM, one frame per verb`);
}

/** THE SINGULAR TRIPLES, CHECKED AS AN EQUALITY.
 *
 *  je viens / tu viens / il vient are three spellings and one sound, and so are
 *  the tenir three. If the respellings ever disagree about anything after the
 *  pronoun, the lesson prints a difference it spends a mission denying, and no
 *  schema check would catch it. */
for (const triple of SINGULAR_TRIPLES) {
  const rows = triple.map((id) => {
    const w = ALLER_VENIR.find((x) => x.id === id);
    if (!w) die(`SINGULAR_TRIPLES names ${id}, which is not an authored row`);
    return w;
  });
  const tails = rows.map((w) => afterPronoun(w.respell ?? ''));
  if (new Set(tails).size !== 1) {
    die(
      `the singular triple ${triple.join(' / ')} does not sound the same:\n    ${rows.map((w, i) => `${w.fr}  ->  ${tails[i]}`).join('\n    ')}\n`
      + `  Everything after the pronoun MUST be one string. Three spellings and one sound is what makes the dictée the only surface that can test the singular.`,
    );
  }
  if (new Set(rows.map((w) => w.fr)).size !== 3) die(`the triple ${triple.join(' / ')} does not hold three different sentences`);
}
console.log(`  ${SINGULAR_TRIPLES.length} singular triples on ${SINGULAR_TRIPLES.length} verbs: one string after the pronoun`);

/** THE NUMBER PAIRS: singular against plural, pronoun-blind, and the difference
 *  must really be in the verb.
 *
 *  `il` and `ils` are one sound, so the verb is the whole evidence. Both halves
 *  must respell their pronoun IDENTICALLY, or the learner answers from the
 *  pronoun and the ear mission proves nothing. */
for (const [sing, plur] of NUMBER_PAIRS) {
  const a = ALLER_VENIR.find((w) => w.id === sing);
  const b = ALLER_VENIR.find((w) => w.id === plur);
  if (!a || !b) die(`number pair ${sing} / ${plur} does not resolve against the authored corpus`);
  if (a.fr === b.fr) die(`${sing} and ${plur} are the same sentence, so the pair proves nothing`);
  const pa = (a.respell ?? '').split(' ')[0];
  const pb = (b.respell ?? '').split(' ')[0];
  if (pa !== pb) {
    die(
      `${sing} respells its pronoun "${pa}" and ${plur} respells its "${pb}".\n`
      + `  A number pair is where the pronoun gives the learner NOTHING, which is what makes the ear mission a real\n`
      + `  task rather than a pronoun quiz. If the pronouns differ, move the pair out of NUMBER_PAIRS.`,
    );
  }
  /** THE SINGULAR IS NASAL AND THE PLURAL IS NOT. That is the whole audible
   *  claim: `vyaⁿ` against `vyenn`. If the plural still carries a superscript,
   *  the card is teaching a nasal vowel where the language has an oral one. */
  const va = (a.respell ?? '').split(' ')[1] ?? '';
  const vb = (b.respell ?? '').split(' ')[1] ?? '';
  if (!va.includes('ⁿ')) die(`${sing} respells its verb "${va}", which carries no nasal. The singular of venir and tenir is a nasal vowel with no n released.`);
  if (vb.includes('ⁿ')) die(`${plur} respells its verb "${vb}", which carries a nasal. The plural is an ORAL vowel and a real n, and that is the whole of what the ear can settle here.`);
  if (!vb.endsWith('nn')) die(`${plur} respells its verb "${vb}", which does not end on the doubled n. See DOUBLE_N: the checker cannot see this and it is asserted by name.`);
  /** AND THE TWO DIFFER IN THE VERB AND NOWHERE ELSE. */
  const restA = (a.respell ?? '').split(' ').slice(2).join(' ');
  const restB = (b.respell ?? '').split(' ').slice(2).join(' ');
  if (restA !== restB) die(`${sing} and ${plur} differ after the verb ("${restA}" against "${restB}"). Only the verb may move.`);
}
if (NUMBER_PAIRS.length < 2) die(`only ${NUMBER_PAIRS.length} number pairs; the ear mission needs one per verb`);
console.log(`  ${NUMBER_PAIRS.length} number pairs: pronoun identical, singular nasal, plural oral with a doubled n`);

/* ── THE NASAL CHECKER, IN BOTH DIRECTIONS, AND ITS TWO BLIND SPOTS ──────── */
{
  /** BLIND SPOT ONE: a nasal followed by a consonant INSIDE the token. This is
   *  the a2.11 shape and `Nantes` is the only instance in this lesson. */
  for (const b of BLIND_NASALS) {
    const row = ALLER_VENIR.find((w) => w.id === b.id);
    if (!row?.respell?.includes(b.must)) {
      die(`${b.id} must respell with "${b.must}" (${b.why}). Checked by name because the shared checker cannot see it.`);
    }
    // AND THE BLINDNESS IS RE-CONFIRMED, not assumed. If the checker ever learns
    // to see these, invariants §3 needs updating and these by-name checks can go.
    const broken = row.respell.replace(b.must, b.must.replace('ⁿ', 'n'));
    if (hasPlainNasalFor(row.fr, broken)) {
      die(`hasPlainNasalFor now catches the word-internal nasal in ${b.id} ("${broken}"). Update invariants §3 and drop the by-name list.`);
    }
  }
  if (hasPlainNasalFor(HALF_REPAIRED_NANTES.fr, HALF_REPAIRED_NANTES.respell)) {
    die('hasPlainNasalFor now flags the half-repaired Nantes. The blind spot has closed and invariants §3 needs updating.');
  }

  /** BLIND SPOT TWO, AND THE BRIEF MISTAKES IT FOR THE FIRST. `viennent` and
   *  `tiennent` have NO nasal vowel: an oral vowel and a real /n/. The checker
   *  short-circuits on the doubled n in the FRENCH spelling
   *  (density.logic.ts:215), so it returns false for any respelling of them,
   *  including a single-n one that would read as a nasal to an English eye.
   *
   *  Both directions are asserted: the doubled form must be present, and the
   *  single-n form must be confirmed INVISIBLE, so the day the checker improves
   *  this fails rather than carrying a dead list. */
  for (const d of DOUBLE_N) {
    const row = ALLER_VENIR.find((w) => w.id === d.id);
    if (!row?.respell?.includes(d.must)) {
      die(`${d.id} must respell with "${d.must}" (${d.why}). The doubled n is invariants §3's answer to a real consonant read as a nasal.`);
    }
    const single = row.respell.replace(d.must, d.singleN);
    if (hasPlainNasalFor(row.fr, single)) {
      die(`hasPlainNasalFor now flags the single-n "${single}" for ${d.id}. The doubled-n short-circuit has changed and the by-name list can go.`);
    }
    if (!/(?:nn|mm)/i.test(row.fr)) {
      die(`${d.id} "${row.fr}" carries no doubled n in the FRENCH spelling, so density.logic.ts:215 is not what is hiding it. Re-measure before trusting this list.`);
    }
  }
  /** AND A POSITIVE CONTROL, so a checker that has gone quiet altogether is
   *  caught. If this stops being flagged, every "not flagged" result above is
   *  worthless. */
  if (!hasPlainNasalFor('bon', 'BOHN')) {
    die('hasPlainNasalFor no longer flags a plain-n nasal at all. The check has gone quiet and every negative result in this build is meaningless.');
  }
  console.log(`  ${BLIND_NASALS.length} word-internal nasal(s) and ${DOUBLE_N.length} doubled-n row(s) asserted by name; both blindnesses re-confirmed, positive control passes`);
}

/** EVERY HAND-TYPED promptSound IS A REAL ROW'S RESPELLING.
 *
 *  FOUND BY MUTATION-TESTING, 2026-08-12. A trapDrill card's `promptSound` is the
 *  sound of the sentence the learner is being tempted towards, which is a
 *  DIFFERENT row from the card's own `fr` — that is the whole design. So it
 *  cannot be derived from the card, and all four are typed by hand. Nothing
 *  checked them: `eel vyaⁿ duh NAHnT` was pushed into one and every gate stayed
 *  green while the card taught a respelling the corpus does not hold.
 *
 *  Each one must be the respelling of SOME authored row, and must not be the
 *  respelling of the card's own row, or the card is playing itself. */
{
  const respells = new Set(ALLER_VENIR.map((w) => w.respell).filter(Boolean) as string[]);
  const byFr = new Map(ALLER_VENIR.map((w) => [w.fr, w] as const));
  let n = 0;
  for (const s of LESSON.sections) {
    if (s.type !== 'trapDrill') continue;
    for (const [i, card] of (s.cards ?? []).entries()) {
      const ps = (card as { promptSound?: string; fr?: string }).promptSound;
      if (!ps) continue;
      n += 1;
      if (!respells.has(ps)) {
        die(
          `trapDrill card ${i + 1} carries promptSound ${JSON.stringify(ps)}, which is not the respelling of any authored row.\n`
          + `  It is hand-typed, so nothing else in the build can catch a drift. It must be the sound of a real sentence.`,
        );
      }
      const own = byFr.get((card as { fr?: string }).fr ?? '');
      if (own && own.respell === ps) {
        die(`trapDrill card ${i + 1} plays its OWN sound as the prompt, so there is nothing to choose between`);
      }
    }
  }
  if (n === 0) die('no trapDrill promptSound found, so the check above passed vacuously');
  console.log(`  ${n} hand-typed promptSound value(s), every one a real row's respelling`);
}

/** AND THE TWO STRUCTURAL GUARDS REALLY FIRE. Both are asserted against known
 *  positives and known negatives, because a regex that matches nothing passes
 *  every scan silently. The passé composé one shipped broken: it ended with `\b`
 *  after `é`, and `\b` in JavaScript is ASCII-only, so it never fired on a real
 *  participle at all. Invariants §0 records that exact trap. */
{
  const PC_YES = ['Il a mangé.', 'Elle a parlé au voisin', 'ils ont regardé', "j'ai regardé la télé"];
  const PC_NO = ['as a bit of it', 'a visit to the shop', 'Nous venons de manger.', 'a naming form'];
  for (const s of PC_YES) if (!PASSE_COMPOSE_SHAPE.test(s)) die(`PASSE_COMPOSE_SHAPE does not match ${JSON.stringify(s)}, so the guard that uses it scans for nothing`);
  for (const s of PC_NO) if (PASSE_COMPOSE_SHAPE.test(s)) die(`PASSE_COMPOSE_SHAPE fires on ${JSON.stringify(s)}, which is ordinary English; a guard that fires on legitimate prose gets deleted`);
  const FP_YES = ['Je vais manger.', 'ils vont partir', 'nous allons vendre la maison'];
  const FP_NO = ['Je vais au parc.', 'Nous allons au parc.', 'il va bien'];
  for (const s of FP_YES) if (!FUTUR_PROCHE_SHAPE.test(s)) die(`FUTUR_PROCHE_SHAPE does not match ${JSON.stringify(s)}, so the guard that uses it scans for nothing`);
  for (const s of FP_NO) if (FUTUR_PROCHE_SHAPE.test(s)) die(`FUTUR_PROCHE_SHAPE fires on ${JSON.stringify(s)}, which is this lesson's own content`);
  console.log(`  both structural guards fire on ${PC_YES.length + FP_YES.length} known positives and on none of ${PC_NO.length + FP_NO.length} known negatives`);
}

/* ── a1.03: authored joiners enforced to ZERO ────────────────────────────── */
{
  const joiners = endingPopulation(AUTHORED_ITEMS);
  if (joiners.length !== 0) {
    die(
      `${joiners.length} authored row(s) join a1.03's measured ending population: ${joiners.map((j) => j.fr).join(', ')}\n`
      + `  a1-03-genre.test.ts re-measures twenty printed figures on every run. Withdraw rather than argue.`,
    );
  }
  console.log('  a1.03 ending population: 0 authored joiners, so no printed figure moves');
}

/* ── The repairs, in the two directions the two lists need ───────────────── */
for (const r of RESPELL_REPAIRS_VISIBLE) {
  if (hasPlainNasalFor(r.fr, r.to)) die(`the replacement for ${r.id} "${r.fr}" still closes a nasal with a plain n or m: ${r.to}`);
  if (!hasPlainNasalFor(r.fr, r.from)) die(`${r.id} "${r.fr}" is in RESPELL_REPAIRS_VISIBLE and its stored value "${r.from}" is NOT flagged`);
}
for (const r of RESPELL_REPAIRS_INVISIBLE) {
  if (hasPlainNasalFor(r.fr, r.from)) die(`${r.id} "${r.fr}" is in RESPELL_REPAIRS_INVISIBLE and the checker CAN see "${r.from}". Move it.`);
  if (!r.to.includes('ⁿ')) die(`${r.id} is repaired to "${r.to}", which carries no superscript`);
}
console.log(`  ${RESPELL_REPAIRS.length} respelling repairs: none of the six naming forms carries a nasal vowel at all`);

/* ── The lesson ──────────────────────────────────────────────────────────── */

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(formatIssues(lessonIssues));
const density = validateDensity(LESSON);
if (density.length) die(formatDensity(density));

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
{
  const carrying = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME)));
  if (carrying.length !== REFRAME_SECTIONS) {
    die(`the reframe reaches ${carrying.length} sections, expected ${REFRAME_SECTIONS}. A reframe repeated once is a sentence that happened.`);
  }
  console.log(`  reframe in ${carrying.length} sections: ${carrying.map((s) => (s as { id?: string }).id).join(', ')}`);
}

/** THE REFRAME IS ABOUT THE CONSTRUCTION AND NOT ABOUT THE PARADIGMS, which is
 *  the decision the whole lesson is built on. A reframe naming a verb form would
 *  make this three tables with a sentence on top, which is the failure the brief
 *  opens by warning about. */
if (/\b(vais|vas|vont|viens|vient|viennent|tiens|tient|tiennent|allons|allez|venons|venez|tenons|tenez)\b/i.test(REFRAME)) {
  die(`the reframe is "${REFRAME}". A reframe naming a verb form makes this a memorisation lesson with a slogan on it.`);
}
if (REFRAME.trim().split(/\s+/).length > 12) die('a reframe has to survive recall mid-sentence');

if (JSON.stringify(LESSON).includes('"autoplay"')) {
  die('autoplay is authored somewhere. It is declared in schema.ts and read by no component. Use audioFirst.');
}
if (JSON.stringify(LESSON).includes('"imageRef"')) {
  die('an imageRef is authored. lesson-contract.test.ts does not check it and an unregistered ref draws a blank box.');
}

const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one.`);

/** ONE tapTable, AND IT IS THE TWO-JOB CONTRAST rather than a paradigm. The Owns
 *  gets the only screen in the lesson with per-row audio. */
{
  const taps = LESSON.sections.filter((s) => s.type === 'tapTable');
  if (taps.length !== EXPECTED_TAPTABLES) die(`${taps.length} tapTables in the flow, expected ${EXPECTED_TAPTABLES}. One table, one tapTable, then stop.`);
  if ((taps[0] as { id?: string }).id !== TWO_JOBS_SECTION_ID) {
    die(`the only tapTable is ${JSON.stringify((taps[0] as { id?: string }).id)}, expected ${JSON.stringify(TWO_JOBS_SECTION_ID)}. The per-row audio belongs to the Owns.`);
  }
  const coreTables = LESSON.sections.filter((s) => s.type === 'table').length;
  if (coreTables) die(`${coreTables} table section(s) in the flow. A table at layer core is a table-in-core density failure; the single grid belongs in the sheet.`);
}

/* ── The learner-facing surfaces ─────────────────────────────────────────── */

const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
/** EVERY SURFACE A LEARNER READS, and `intro` and `overview` are two of them.
 *
 *  a2.11 shipped the phrase "third person" in `intro` at v1, on the lesson
 *  overview card AND the lesson cover, because every guard in the band walked
 *  `sections + sheets + terms` and nothing looked at `intro`. Every host-side
 *  gate was green and only a Pixel 6 found it. Ledger §0.
 *
 *  `grammarAssumed` and `grammarIntroduced` are deliberately NOT here:
 *  invariants §8 says they are addressed to the curriculum and may use the
 *  precise words, and both of this lesson's do. */
const learnerText = [
  ...strings(LESSON.sections),
  ...strings(LESSON.sheets ?? []),
  ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '',
  ...strings(LESSON.overview ?? {}),
].join('\n');
/** The same surfaces with transcriptions excluded, for the word-level guards. */
const learnerProse = [
  ...prose(LESSON.sections),
  ...prose(LESSON.sheets ?? []),
  ...prose(LESSON.terms ?? {}),
  LESSON.intro ?? '',
  ...prose(LESSON.overview ?? {}),
];

const jargon = JARGON.filter((j) => hasPhrase(learnerText, j));
if (jargon.length) die(`grammar vocabulary reached a learner surface: ${jargon.join(', ')}`);

/** AND `intro` IS PINNED IN ITS OWN ASSERTION, so a later author who trims the
 *  walk back fails with the reason rather than silently. */
{
  if (!LESSON.intro) die('the lesson has no intro. It is drawn on the overview card and on the lesson cover.');
  const inIntro = JARGON.filter((j) => hasPhrase(LESSON.intro ?? '', j));
  if (inIntro.length) die(`grammar vocabulary in Lesson.intro, which is drawn on TWO learner surfaces: ${inIntro.join(', ')}`);
  if (!/past/i.test(LESSON.intro)) die('Lesson.intro does not mention the past. It is the one screen a learner reads before deciding to start, and the Owns is the reason to.');
}

/* ── THE TWO JOBS: ONE SCREEN, TWO ROWS, THE PREFIX IN THE HEADER ────────── */
{
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === TWO_JOBS_SECTION_ID);
  if (!sec) die(`${TWO_JOBS_SECTION_ID} is gone. That is the one screen the trap lives on.`);
  if (sec.type !== 'tapTable') {
    die(
      `${TWO_JOBS_SECTION_ID} is a ${sec.type}, expected a tapTable.\n`
      + `  A \`table\` at layer 'core' is a table-in-core density failure, and only a tapTable gives each row its own\n`
      + `  audio. The learner has to be able to play both without leaving the screen, because the claim is that they\n`
      + `  are identical until the last word.`,
    );
  }
  if (sec.rows.length !== TWO_JOBS.length) {
    die(
      `${TWO_JOBS_SECTION_ID} has ${sec.rows.length} rows, expected ${TWO_JOBS.length}.\n`
      + `  BOTH USES BELONG ON ONE SCREEN. The brief is explicit that separating them destroys the teaching, and this\n`
      + `  is the assertion it asked for.`,
    );
  }
  if (sec.cols.length !== 2) die(`${TWO_JOBS_SECTION_ID} has ${sec.cols.length} columns, expected 2`);
  if (TWO_JOBS_ROWS.join() !== TWO_JOBS.map((j) => j.id).join()) die('the lesson and the corpus disagree about the row order of the two jobs');
  /** THE SHARED PREFIX IS IN THE COLUMN HEADER AND NOT IN THE CELLS. That is
   *  what makes two columns enough, and it is the teaching as a layout. */
  if (!sec.cols[0].startsWith(TWO_JOBS_SHARED_PREFIX.trim())) {
    die(`the first column of ${TWO_JOBS_SECTION_ID} reads ${JSON.stringify(sec.cols[0])} and must lead with ${JSON.stringify(TWO_JOBS_SHARED_PREFIX.trim())}, because that is the half both sentences share`);
  }
  const kinds = new Set(TWO_JOBS.map((j) => j.kind));
  if (!kinds.has('place') || !kinds.has('infinitive')) die(`TWO_JOBS holds ${[...kinds].join(', ')}; BOTH SIDES must be present or there is no contrast`);
  sec.rows.forEach((row, i) => {
    const job = TWO_JOBS[i];
    const want = ALLER_VENIR.find((w) => w.id === job.id);
    if (!want) die(`TWO_JOBS names ${job.id}, which is not an authored row`);
    if (!row.say) die(`row ${i + 1} of ${TWO_JOBS_SECTION_ID} carries no \`say\`, so it cannot be played with one tap`);
    if (row.say !== want.fr) die(`row ${i + 1} of ${TWO_JOBS_SECTION_ID} plays ${JSON.stringify(row.say)}, expected ${JSON.stringify(want.fr)}`);
    if (want.afterDe !== job.kind) die(`${job.id} is authored with afterDe ${JSON.stringify(want.afterDe)} and TWO_JOBS says ${JSON.stringify(job.kind)}`);
    /** AND THE CELLS HOLD ONLY WHAT DIFFERS. A cell that restated the prefix
     *  would put the identical half on the screen twice and lose the point. */
    if (hasPhrase(row.cells[0], 'viens') || row.cells[0].includes(TWO_JOBS_SHARED_PREFIX)) {
      die(`row ${i + 1} of ${TWO_JOBS_SECTION_ID} restates the shared prefix in its cell: ${JSON.stringify(row.cells[0])}`);
    }
  });
  /** THE TWO SENTENCES REALLY ARE IDENTICAL UP TO `de`. Derived rather than
   *  trusted: if somebody swaps one row for a different subject, this fails. */
  const notShared = TWO_JOBS.filter((j) => !ALLER_VENIR.find((w) => w.id === j.id)!.fr.startsWith(TWO_JOBS_SHARED_PREFIX));
  if (notShared.length) {
    die(
      `${notShared.map((j) => j.id).join(', ')} does not start with ${JSON.stringify(TWO_JOBS_SHARED_PREFIX)}.\n`
      + `  The whole trap is that the two sentences are the SAME until the word after de. Two rows with different\n`
      + `  subjects compare two subjects as well as two jobs.`,
    );
  }
  console.log(`  the two jobs: ${TWO_JOBS_SECTION_ID}, ${sec.rows.length} rows, ${sec.cols.length} columns, prefix in the header, both kinds present`);
}

/** THE PATTERN HAS A NAME AND THE NAME IS QUOTABLE. Three later lessons are told
 *  to point back here by unit id, so the name has to be on a learner surface and
 *  the unit id has to be on the card that says so. */
{
  if (!hasPhrase(learnerText, WHAT_FOLLOWS)) {
    die(
      `"${WHAT_FOLLOWS}" appears on no screen.\n`
      + `  a2.18, a2.19 and a2.15 are each told to quote this name and point back at ${WHAT_FOLLOWS_UNIT}. A name that\n`
      + `  is only in a source file is a name three later lessons will each invent differently.`,
    );
  }
  const carrying = LESSON.sections.filter((s) => strings(s).some((x) => hasPhrase(x, WHAT_FOLLOWS)));
  if (carrying.length < 3) die(`"${WHAT_FOLLOWS}" reaches ${carrying.length} sections, expected at least 3`);
  const boundary = LESSON.sections.find((s) => (s as { id?: string }).id === BOUNDARY_SECTION_ID);
  if (!boundary || !strings(boundary).join('\n').includes(WHAT_FOLLOWS_UNIT)) {
    die(`${BOUNDARY_SECTION_ID} does not carry the unit id ${WHAT_FOLLOWS_UNIT}, and that is the card that tells the learner the shape will come back`);
  }
  /** AND THE LOWERCASE TERM NAME NEVER OPENS A SENTENCE.
   *
   *  FOUND ON A PIXEL 6, 2026-08-12. Term names are lowercase by house
   *  convention ("the naming form", "the part that stays"), and this one is
   *  interpolated into running prose in seven places. Five of them had it at the
   *  START of a sentence, so the row detail on the Owns screen read "...the same
   *  de as the row above. what comes next decides, and there is no third
   *  possibility." — which reads as a typo rather than as a quoted term. Every
   *  host-side gate was green.
   *
   *  SCOPED TO THE TERM NAMES AND NOTHING ELSE. The obvious version of this
   *  checks for any lowercase word after a full stop, and it fired on six
   *  legitimate lines: `venir and tenir are one shape`, `il vient stops in the
   *  nose`, `vais is on its own`. A French form quoted at the start of a sentence
   *  keeps its lowercase and is correct. A guard that fires on that is a guard the
   *  next author deletes, and invariants §1 records four ways that has already
   *  happened here. So it looks for the declared term NAMES only, which is
   *  exactly the class of string that is lowercase by convention rather than by
   *  the language. */
  {
    const names = Object.values(LESSON.terms ?? {}).map((t) => t.term).filter((t) => /^[a-z]/.test(t));
    if (!names.length) die('no lowercase term names found, so the check below would pass vacuously');
    const bad: string[] = [];
    for (const s of LESSON.sections) {
      const sid = (s as { id?: string }).id ?? '?';
      for (const x of prose(s)) {
        for (const n of names) {
          const i = x.indexOf(n);
          if (i <= 0) continue;
          if (/[.!?]\s+$/.test(x.slice(0, i))) bad.push(`${sid}: "...${x.slice(Math.max(0, i - 40), i + n.length + 10)}..."`);
        }
      }
    }
    if (bad.length) {
      die(
        `a term name opens a sentence on a learner surface:\n    ${[...new Set(bad)].slice(0, 6).join('\n    ')}\n`
        + `  Term names are lowercase by house convention, so one at the start of a sentence reads as a typo rather\n`
        + `  than as a quoted term. Reword so the term sits inside the sentence.`,
      );
    }
    console.log(`  ${names.length} lowercase term names, none of them opening a sentence`);
  }
  console.log(`  the pattern name "${WHAT_FOLLOWS}" in ${carrying.length} sections, cited as ${WHAT_FOLLOWS_UNIT} on ${BOUNDARY_SECTION_ID}`);
}

/* ── THE a2.10 LOOP, CLOSED BY SHOWING THE MECHANISM ─────────────────────── */
{
  if (!hasPhrase(learnerText, A210_BACKREF)) {
    die(
      `${A210_BACKREF} is named by no section.\n`
      + `  a2.10.l1 named venir and tenir as -ir verbs taking no -iss- and conjugated neither, and a2.10.l2 named the\n`
      + `  MECHANISM and handed it here by unit id. This lesson is the payoff of both and has to say so.`,
    );
  }
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === TOT_SECTION_ID);
  if (!sec) die(`${TOT_SECTION_ID} is gone, and with it the screen that closes the ${A210_BACKREF} loop`);
  if (sec.type !== 'listening') die(`${TOT_SECTION_ID} is a ${sec.type}, expected a listening mission: the loop is closed by hearing the three plurals, not by reading about them`);
  if (sec.lines.length !== TOT_FRAME.length * 2) {
    die(`${TOT_SECTION_ID} plays ${sec.lines.length} lines, expected ${TOT_FRAME.length * 2}: three pairs, singular then plural`);
  }
  /** EVERY LINE IS ON THE SHARED FRAME WORD. That is the whole reason the screen
   *  works, and it is only possible because two neighbours chose the word
   *  deliberately so a later lesson could do this. */
  const offFrame = sec.lines.filter((l) => !hasPhrase(l.fr, FRAME_WORD));
  if (offFrame.length) {
    die(`${TOT_SECTION_ID} plays ${offFrame.map((l) => JSON.stringify(l.fr)).join(', ')}, which is not on the ${FRAME_WORD} frame. Six lines and one word in common is the mission.`);
  }
  /** AND THE FOUR NEIGHBOUR ROWS ARE THE NEIGHBOURS' OWN, imported rather than
   *  twinned. If somebody replaces them with authored copies, the screen compares
   *  four performances instead of four cells. */
  const mine = TOT_FRAME.filter((r) => r.unit === UNIT_ID);
  if (mine.length !== 1) die(`${mine.length} of the three tôt pairs belong to this unit, expected exactly 1`);
  const theirs = TOT_FRAME.filter((r) => r.unit !== UNIT_ID).flatMap((r) => [r.singular, r.plural]);
  const notImported = theirs.filter((id) => !IMPORTED_SENTENCE_IDS.includes(id));
  if (notImported.length) die(`${notImported.join(', ')} is played on ${TOT_SECTION_ID} and is not one of the imported rows. A twin of a neighbour's sentence is a second performance.`);
  console.log(`  the ${A210_BACKREF} loop: ${TOT_SECTION_ID}, ${sec.lines.length} lines on "${FRAME_WORD}", ${theirs.length} imported and ${mine.length * 2} authored`);
}

/* ── THE FAMILY: EVIDENCE HERE, PRINCIPLE AT a2.15 ───────────────────────── */
{
  const named = COMPOUNDS.filter((v) => hasPhrase(learnerText, v));
  if (named.length !== COMPOUNDS.length) {
    die(`compound(s) named by no screen: ${COMPOUNDS.filter((v) => !named.includes(v)).join(', ')}`);
  }
  if (named.length > MAX_COMPOUNDS) die(`${named.length} compounds on a screen, and the brief's ceiling is ${MAX_COMPOUNDS}`);
  /** THE SEVENTH VERB IS NAMED NOWHERE. `appartenir` is read from Postgres and
   *  released to nothing; if it reaches a screen it is a fourth compound and the
   *  ceiling is broken. */
  for (const ro of READ_ONLY_VERBS) {
    if (hasPhrase(learnerText, ro.verb)) {
      die(`"${ro.verb}" is on a learner surface. It is read and not imported, and putting it on a screen makes ${COMPOUNDS.length + 1} compounds against a ceiling of ${MAX_COMPOUNDS}.`);
    }
    if (LESSON.itemIds.includes(ro.id)) die(`${ro.id} (${ro.verb}) is in itemIds. It is read from Postgres and released to nothing.`);
  }
  const card = LESSON.sections.find((s) => (s as { id?: string }).id === FAMILY_SECTION_ID);
  if (!card) die(`${FAMILY_SECTION_ID} is gone, and with it the only place the compounds are named`);
  const cardText = strings(card).join('\n');
  if (!cardText.includes(FAMILY_UNIT)) {
    die(`${FAMILY_SECTION_ID} does not say where the family principle is taught. It is ${FAMILY_UNIT}, seq 9, and a boundary with no destination is a warning rather than a teaching.`);
  }
  /** AND THE PRINCIPLE ITSELF IS NOT STATED. This lesson shows two compounds as
   *  evidence that tenir was worth learning; the rule that this generalises is
   *  a2.15's Owns and the brief says to leave it there. */
  const PRINCIPLE = ['every compound', 'all compounds', 'any compound', 'compounds always', 'the rule is that compounds'];
  const stated = PRINCIPLE.filter((p) => hasPhrase(learnerText, p));
  if (stated.length) {
    die(`the family principle is stated on a learner surface: ${stated.join(', ')}. That is ${FAMILY_UNIT}'s Owns; here the compounds are evidence only.`);
  }
  console.log(`  the family: ${named.length} compounds named on ${FAMILY_SECTION_ID}, handed to ${FAMILY_UNIT}, ${READ_ONLY_VERBS.length} read-only verb named nowhere`);
}

/* ── The quiz, needed before the production-surface scope is built ───────── */

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz || quiz.type !== 'quiz') die('no quiz section');
const qs = quizQuestions(quiz);

/** WHAT THE LEARNER IS ASKED TO PRODUCE OR CHOOSE, plus the vocabulary decks.
 *  Narrower than "a section", and the only scope on which the neighbour guards
 *  are honest: s16-notmine NAMES what aller does next in order to hand it over,
 *  which is the lesson doing its job rather than crossing a boundary. A guard
 *  that fires on that is a guard the next author deletes. */
function producedStrings(): string[] {
  const out: string[] = [];
  for (const q of qs) {
    if (q.answer) out.push(q.answer);
    if (q.target) out.push(q.target);
    for (const a of q.accept ?? []) out.push(a);
    // EVERY option, not only the correct one. A learner reads all four and has to
    // consider each, so a neighbour's material in a distractor is still a
    // neighbour's material put in front of them.
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

/* ── THE FUTUR PROCHE IS NOT TAUGHT ──────────────────────────────────────── */
{
  const leaked = PRODUCTION_SURFACES.filter((s) => FUTUR_PROCHE_SHAPE.test(s));
  if (leaked.length) {
    die(
      `the futur proche reached a production surface: ${[...new Set(leaked)].slice(0, 4).map((s) => JSON.stringify(s)).join(', ')}\n`
      + `  aller followed by an action is ${FUTUR_PROCHE_UNIT}, seq 15, and its prereqUnitIds is ['${UNIT_ID}']. This lesson\n`
      + `  conjugates aller in full and hands that job over in one line with no French example anywhere.`,
    );
  }
  /** AND IT IS ACKNOWLEDGED. One line is the ceiling and zero is not enough: the
   *  learner has aller in full and will meet the construction this week. */
  const boundary = LESSON.sections.find((s) => (s as { id?: string }).id === BOUNDARY_SECTION_ID);
  if (!boundary) die(`${BOUNDARY_SECTION_ID} is gone, and with it the acknowledgement that aller has a second job`);
  const bText = strings(boundary).join('\n');
  if (!bText.includes(FUTUR_PROCHE_UNIT)) die(`${BOUNDARY_SECTION_ID} does not name ${FUTUR_PROCHE_UNIT}, so aller's second job is left as a rumour`);
  if (!bText.includes(PREPOSITION_UNIT)) die(`${BOUNDARY_SECTION_ID} does not name ${PREPOSITION_UNIT}, so which small word follows aller is left as a rumour`);
  /** AND THE CARD ITSELF SHOWS NO EXAMPLE OF IT. A card that printed
   *  `je vais manger` in order to defer it would have taught it. */
  if (FUTUR_PROCHE_SHAPE.test(bText)) {
    die(`${BOUNDARY_SECTION_ID} shows the futur proche in order to defer it. One line acknowledging it exists is the ceiling; an example is teaching it.`);
  }
  console.log(`  futur proche: 0 on ${PRODUCTION_SURFACES.length} production surfaces, named as ${FUTUR_PROCHE_UNIT} with no example`);
}

/* ── THE PASSÉ COMPOSÉ IS NOT TAUGHT EITHER ──────────────────────────────── */
{
  const shaped = learnerProse.filter((s) => PASSE_COMPOSE_SHAPE.test(s));
  const phrased = PASSE_COMPOSE_PHRASES.filter((p) => learnerProse.some((s) => hasPhrase(s, p)));
  if (shaped.length || phrased.length) {
    die(
      `a passé composé is on a learner surface: ${[...shaped.slice(0, 3).map((s) => JSON.stringify(s)), ...phrased].join(', ')}\n`
      + `  Every authored row here is a simple present or a venir de, and the full past tense is ${PASSE_COMPOSE_UNIT}.`,
    );
  }
  /** AND THE LEARNER IS TOLD WHERE IT IS. The Owns is a past tense arriving
   *  early and that only means something if the learner knows what it is early
   *  FOR. */
  if (!hasPhrase(learnerText, PASSE_COMPOSE_UNIT)) die(`${PASSE_COMPOSE_UNIT} is named nowhere, so "a past tense, early" is a claim with nothing behind it`);
  if (!learnerText.includes(TIMELINE)) die(`"${TIMELINE}" appears on no screen, and it is where this lesson says what the Owns is worth`);
}

/** THE THREE VERBS, BY NAME, and the claim about tenir carried verbatim. */
{
  const missing = THE_THREE.filter((v) => !hasPhrase(learnerText, v));
  if (missing.length) die(`verb(s) named by no screen: ${missing.join(', ')}`);
  const ids = new Set(LESSON.itemIds);
  const unreleased = IMPORTED_VERBS.filter((v) => !ids.has(v.id)).map((v) => v.verb);
  if (unreleased.length) die(`verb(s) on a screen but not in itemIds: ${unreleased.join(', ')}`);
  if (!learnerText.includes(TENIR_CLAIM)) {
    die(`"${TENIR_CLAIM}" appears on no screen. Without it the third verb is arbitrary, and the brief says so in its test list.`);
  }
  const carrying = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(TENIR_CLAIM)));
  if (carrying.length < 2) die(`the tenir claim reaches ${carrying.length} sections, expected at least 2`);
  console.log(`  all ${THE_THREE.length} verbs named individually and released by id; the tenir claim in ${carrying.length} sections`);
}

/** THE nous/on STATEMENT IS a2.01's CONSTANT AND IT HAS EXACTLY ONE HOME. */
{
  if (!learnerText.includes(NOUS_ON)) {
    die(
      `the nous/on statement does not appear verbatim.\n`
      + `  The ledger binds all twenty A2 lessons to a2.01's wording, and this lesson needs it: on takes the il form,\n`
      + `  so the commonest spoken way of saying "we have just done it" uses the singular of an irregular verb.`,
    );
  }
  const holders = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON))).map((s) => (s as { id?: string }).id);
  if (holders.length !== 1 || holders[0] !== NOUS_ON_SECTION_ID) {
    die(`the nous/on statement is in ${JSON.stringify(holders)}, expected exactly [${JSON.stringify(NOUS_ON_SECTION_ID)}]`);
  }
}

/** THE NEIGHBOURS' REFRAMES ARE IMPORTED AND AVAILABLE. a2.01's and a2.10's are
 *  imported and re-exported rather than pasted, and this guard makes sure they
 *  still resolve: an import nothing checks is an import somebody deletes. */
{
  // Widened to `string` on the way in. Both constants are `const` exports, so tsc
  // narrows them to their literal types and rejects the comparison below as
  // having no overlap — which is tsc being right about today and wrong about the
  // day somebody rewords one of them, which is the day this guard exists for.
  const a201: string = A201_REFRAME;
  const a210: string = A210_REFRAME;
  if (!a201 || !a210) die('a neighbour reframe no longer resolves, so this lesson has quietly stopped tracking them');
  if (a201 === a210) die('a2.01 and a2.10 now carry the same reframe, which means one of the imports is wrong');
}

/* ── The quiz ────────────────────────────────────────────────────────────── */

const rounds = quiz.rounds ?? [];
if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} quiz rounds, found ${rounds.length}`);
if (qs.length !== EXPECTED_QUESTIONS) die(`expected ${EXPECTED_QUESTIONS} quiz questions, found ${qs.length}`);

const mcq = qs.filter((q) => q.format === 'mcq').length;
if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half limit`);
for (const q of qs) {
  if (!q.why) die(`quiz question has no why: ${q.q}`);
  if (!q.ref || !sectionIds.includes(q.ref)) die(`quiz question ref "${q.ref}" names no section: ${q.q}`);
  if (q.opts && new Set(q.opts).size !== q.opts.length) die(`duplicate option in: ${q.q}`);
  // TYPED formats only. `speak` is scored by STT against `target` and never
  // reaches matchesAccept.
  if (['typeIn', 'errorSpot'].includes(q.format ?? '')) {
    if (!matchesAccept(q.answer ?? '', q.accept ?? [])) {
      die(`free-text question does not accept the answer it displays: ${q.answer}`);
    }
  }
  if (q.format === 'speak' && !q.target) die(`speak question has no target: ${q.q}`);
  /** A `listenChoose` whose options are the thing being heard needs `say`, or
   *  ListenChooseCard speaks opts[correct]. */
  if (q.format === 'listenChoose' && !q.say) die(`listenChoose without a say: ${q.q}`);
}

/** NO EAR QUESTION MAY ASK BETWEEN TWO FORMS THAT ARE ONE SOUND.
 *
 *  `viens`, `viens` and `vient` are identical out loud, and so are `vas` and
 *  `va`. A `listenChoose` offering two of them has no correct answer and marking
 *  one of them right would certify a bug. The brief asked for this to be said in
 *  the report; it is said there AND enforced here.
 *
 *  Checked as "these two options differ ONLY by a member of one homophone group",
 *  not as "two options mention homophones", because a question offering
 *  « Il vient tôt. » against « Ils viennent tôt. » is legitimate: those two are
 *  audibly different and that is what the learner is being asked to catch. */
{
  const bad: string[] = [];
  for (const q of qs) {
    if (q.format !== 'listenChoose') continue;
    const opts = q.opts ?? [];
    for (let i = 0; i < opts.length; i++) {
      for (let j = i + 1; j < opts.length; j++) {
        for (const group of HOMOPHONE_FORMS) {
          for (const x of group) {
            for (const y of group) {
              if (x === y) continue;
              if (opts[i].replace(x, y) === opts[j]) bad.push(`"${q.q}" offers ${JSON.stringify(opts[i])} against ${JSON.stringify(opts[j])}`);
            }
          }
        }
      }
    }
  }
  if (bad.length) {
    die(
      `ear question(s) whose options are the same sound:\n    ${[...new Set(bad)].join('\n    ')}\n`
      + `  No recording can separate viens from vient, or vas from va. Ask that one as typeIn or errorSpot.`,
    );
  }
  console.log(`  no listenChoose asks between two forms that are one sound (${HOMOPHONE_FORMS.length} groups checked)`);
}

/** THE QUIZ WEIGHT IS ON THE OWNS, and it is measured rather than intended.
 *
 *  Two of the five rounds are venir de and a third is its trap, so at least half
 *  the questions must touch the construction rather than a paradigm cell. If the
 *  balance ever tips back to the tables, this lesson has become the memorisation
 *  task the brief warns about. */
{
  const owns = qs.filter((q) => {
    // `target` is in here because a `speak` question carries its French there and
    // nowhere else. Leaving it out undercounted the Owns by one and the omission
    // was invisible: the total simply came in low.
    const t = `${q.q} ${q.answer ?? ''} ${q.target ?? ''} ${(q.accept ?? []).join(' ')} ${(q.opts ?? []).join(' ')}`;
    return /\b(vien|ven)\w*\s+(de|d['’])/i.test(t)   // a form of venir with de after it
      || /___\s+(de|d['’])\b/i.test(t)               // a gap question whose answer lands in front of de
      || /\b(after|follows|following)\s+de\b/i.test(t); // a question ABOUT what comes after de
  });
  if (owns.length * 2 < qs.length) {
    die(
      `only ${owns.length} of ${qs.length} quiz questions touch venir de.\n`
      + `  The Owns is the timeline and the paradigms are the scaffolding. A quiz weighted the other way is the\n`
      + `  memorisation lesson this build exists not to write.`,
    );
  }
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? ''));
  /** THE TRAP IS TESTED WHERE IT CAN BE. The brief is explicit: errorSpot and
   *  typeIn for the venir de trap, because an mcq shows the learner the answer. */
  const typedOwns = typed.filter((q) => /\bde\b/i.test(`${q.answer ?? ''} ${(q.accept ?? []).join(' ')}`));
  if (typedOwns.length < 3) die(`only ${typedOwns.length} typed questions make the learner supply or keep the de, and that is the error the lesson exists to stop`);
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  if (listen < 2) die(`${listen} listenChoose questions; il vient against ils viennent is genuinely audible and the brief asks for one or two`);
  if (listen > 5) die(`${listen} listenChoose questions. The ear settles only the number here, and the Owns is not audible at all.`);
  if (typed.length <= listen * 2) die(`${typed.length} typed against ${listen} listenChoose; the written half has to carry this quiz`);
  console.log(`  quiz: ${qs.length} questions, ${owns.length} on venir de, ${mcq} mcq, ${typed.length} typed (${typedOwns.length} on the de), ${listen} listenChoose, formats ${[...new Set(qs.map((q) => q.format ?? 'mcq'))].sort().join('/')}`);
}

/** EVERY venir de QUESTION FIXES WHICH USE IS MEANT.
 *
 *  The brief is explicit: "Je viens de ___" with no further context has two valid
 *  completions and no single answer. So any question whose gap sits straight
 *  after `de` must supply the verb in brackets, and any question ASKING which job
 *  a sentence is doing must quote a complete sentence. */
{
  const ambiguous = qs.filter((q) => /\bde\s+___/i.test(q.q) && !/\([a-zà-ÿ]+(er|ir|re|oir)\)/i.test(q.q));
  if (ambiguous.length) {
    die(
      `question(s) whose gap follows de with nothing to fix which use is meant:\n    ${ambiguous.map((q) => q.q).join('\n    ')}\n`
      + `  A place and an action are both valid there and only one can be marked right.`,
    );
  }
}

/** EVERY GAP QUESTION FIXES THE PERSON. A stem with no subject has no single
 *  answer, and on three irregular verbs the subject is the only thing that
 *  decides the form. */
{
  const SUBJECTS = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'le', 'la', 'les'];
  const gap = qs.filter((q) => q.q.includes('___'));
  if (gap.length < 6) die(`only ${gap.length} gap questions`);
  for (const q of gap) {
    if (!/\([a-zà-ÿ]+(er|ir|re|oir)\)/i.test(q.q)) die(`no naming form in the stem, so the question has no single answer: ${q.q}`);
    const first = q.q.trim().split(/\s+/)[0].toLowerCase();
    if (!SUBJECTS.includes(first)) die(`no subject fixing the person at the head of the stem: ${q.q}`);
  }
  console.log(`  ${gap.length} gap questions, every one with a naming form and a subject at the head`);
}

/** THE QUIZ IS SHUFFLED AT RUNTIME (QuizDeckView), so the authored slot is
 *  invisible to a learner. The cap is authoring hygiene and it stays. */
{
  const closed = qs.filter((q): q is (typeof qs)[number] & { correct: number } => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) {
    if ((c / closed.length) * 100 > 40) die(`quiz answer slot ${s} holds ${Math.round((c / closed.length) * 100)}% of the ${closed.length} closed questions, over 40`);
  }
  console.log(`  quiz slots over ${closed.length} closed questions: ${[...slots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
}

/** THE IN-MISSION CLOSED QUESTIONS ARE NOT SHUFFLED BY ANYTHING.
 *  MissionRich renders q.opts.map in AUTHORED order. */
{
  type Closed = { section: string; correct: number; opts: string[] };
  const inMission: Closed[] = [];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct, opts: g.check.opts });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct, opts: q.opts });
    if (s.type === 'trapDrill') for (const d of s.drill) inMission.push({ section: sid, correct: d.correct, opts: d.opts });
  }
  if (!inMission.length) die('no in-mission closed questions found. The spread check would pass vacuously.');
  const slots = new Map<number, number>();
  for (const q of inMission) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) {
    if ((c / inMission.length) * 100 > 40) {
      die(`in-mission answer slot ${s} holds ${Math.round((c / inMission.length) * 100)}% of the ${inMission.length} closed questions, over 40. MissionRich does NOT shuffle these.`);
    }
  }
  const bySection = new Map<string, Closed[]>();
  for (const q of inMission) {
    const list = bySection.get(q.section) ?? [];
    list.push(q);
    bySection.set(q.section, list);
  }
  for (const [sid, list] of bySection) {
    for (let k = 1; k < list.length; k++) {
      if (list[k].correct === list[k - 1].correct) die(`${sid}: consecutive in-mission questions both answer in slot ${list[k].correct}, and nothing shuffles them`);
    }
    for (const q of list) if (q.correct >= q.opts.length) die(`${sid}: correct index ${q.correct} is out of range for ${q.opts.length} options`);
  }
  console.log(`  in-mission slots over ${inMission.length} closed questions: ${[...slots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
}

/** drillForRound fires the drill of the FIRST resolving target and stops. */
{
  const fired = new Set<string>();
  for (const r of rounds) {
    const t = (r.targets ?? []).find((x) => (LESSON.errorTriggers ?? []).some((e) => e.id === x && e.drill));
    if (t) fired.add(t);
  }
  const orphans = (LESSON.errorTriggers ?? []).filter((e) => e.drill && !fired.has(e.id)).map((e) => e.id);
  if (orphans.length) die(`trigger(s) whose drill no round can fire: ${orphans.join(', ')}. drillForRound stops at the first resolving target.`);
  console.log(`  all ${fired.size} drills reachable, one per round`);
}

/* ── The sheet ───────────────────────────────────────────────────────────── */
{
  const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
  // The predicate narrows BEFORE the set lookup. Written the other way round,
  // `sheetIds.has(id)` sees `string | undefined` and tsc rejects it.
  const dangling = LESSON.sections
    .map((s) => (s as { sheetId?: string }).sheetId)
    .filter((id): id is string => typeof id === 'string')
    .filter((id) => !sheetIds.has(id));
  if (dangling.length) die(`sheetId(s) naming a sheet that does not exist: ${[...new Set(dangling)].join(', ')}`);
  const unreachable = [...sheetIds].filter((id) => !LESSON.sections.some((s) => (s as { sheetId?: string }).sheetId === id));
  if (unreachable.length) die(`sheet(s) no section links to: ${unreachable.join(', ')}`);
  if (!sheetIds.has(SHEET_ID)) die(`${SHEET_ID} is gone, and it is the only sheet this lesson ships`);
  /** ReferenceSheet.tsx draws these three and nothing else. A cheatSheet inside a
   *  sheet draws its title and no rows, which a1.13 ships today. */
  const SHEET_RENDERS = new Set(['teach', 'letterGrid', 'table']);
  const dead = (LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? [])
    .filter((sec) => !SHEET_RENDERS.has(sec.type))
    .map((sec) => `${sh.id}: a ${sec.type} section, which the sheet renderer does not draw`));
  if (dead.length) die(dead.join('\n  '));

  const sheet = (LESSON.sheets ?? []).find((s) => s.id === SHEET_ID)!;
  /** THE SINGLE GRID THE BRIEF ASKED FOR: all three verbs side by side rather
   *  than three tables, because the point is that two are one shape and one is
   *  not, and three grids hide that. */
  const grid = (sheet.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-three-verbs');
  if (!grid || grid.type !== 'table') die(`${SHEET_ID} no longer holds the three-verb grid, which is the one table the brief asked for`);
  if (grid.cols.length !== THE_THREE.length + 1) die(`the grid has ${grid.cols.length} columns, expected ${THE_THREE.length + 1}: a pronoun and one per verb`);
  if (grid.rows.length !== PARADIGM.length) die(`the grid has ${grid.rows.length} rows, expected ${PARADIGM.length}`);
  PARADIGM.forEach((r, i) => {
    const row = grid.rows[i];
    if (row.join('|') !== [r.person, r.aller, r.venir, r.tenir].join('|')) {
      die(`grid row ${i + 1} reads ${JSON.stringify(row)} and PARADIGM says ${JSON.stringify([r.person, r.aller, r.venir, r.tenir])}`);
    }
  });
  /** AND THE TWO-JOB TABLE IS IN THE SHEET AS WELL, because the trap is the one
   *  thing a learner will come back to the sheet FOR. */
  const jobs = (sheet.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-two-jobs');
  if (!jobs || jobs.type !== 'table') die(`${SHEET_ID} no longer holds the two-job table`);
  if (jobs.rows.length !== TWO_JOBS.length) die(`the two-job table has ${jobs.rows.length} rows, expected ${TWO_JOBS.length}`);
  console.log(`  the sheet: ${SHEET_ID}, ${sheet.sections?.length} sections, the three-verb grid asserted cell by cell`);
}

/* ── Tranches release what has been shown, and nothing else ─────────────── */
{
  const tranche = LESSON.deckTranche ?? [];
  if (tranche.length !== (LESSON.acts ?? []).length) die(`${tranche.length} tranches for ${(LESSON.acts ?? []).length} acts; they are index-aligned`);
  const seen = new Set<string>();
  for (const [i, slice] of tranche.entries()) {
    for (const id of slice) {
      if (seen.has(id)) die(`${id} is released twice, in tranche ${i}`);
      seen.add(id);
      if (!LESSON.itemIds.includes(id)) die(`tranche ${i} releases ${id}, which is not in itemIds`);
    }
  }
  const never = LESSON.itemIds.filter((id) => !seen.has(id));
  if (never.length) die(`item(s) in itemIds that no tranche ever releases: ${never.join(', ')}`);
  console.log(`  ${seen.size} items released across ${tranche.length} tranches, each exactly once`);
}

/** AND EVERY ITEM IS ON A SCREEN, not merely resolvable. a1.08 declared 43
 *  itemIds that resolved perfectly and were drawn by nothing. */
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

  const touched = [...IMPORTED_ROWS, ...READ_ONLY_VERBS.map((b) => b.row)].map((r) => r.id);
  const live = await c.query<{
    id: string; fr: string; en: string; respell: string | null; gender: string | null;
    theme: string; drills: string[]; status: string;
  }>('select id, fr, en, respell, gender, theme, drills, status from content_items where id = any($1)', [[...new Set(touched)]]);
  const byId = new Map(live.rows.map((r) => [r.id, r] as const));

  /* THE MANIFEST IS A RECORDED READ AND IT IS VERIFIED FIELD BY FIELD. This build
     repairs nothing, so there is exactly ONE legal value per field and any
     divergence is somebody else's edit. */
  const drift: string[] = [];
  for (const row of [...IMPORTED_ROWS, ...READ_ONLY_VERBS.map((b) => b.row)]) {
    const id = row.id;
    const x = byId.get(id);
    if (!x) { drift.push(`${id} is no longer in Postgres`); continue; }
    if (x.status !== 'published') drift.push(`${id} is ${x.status}, not published`);
    if (x.fr !== row.fr) drift.push(`${id} fr: manifest ${JSON.stringify(row.fr)} vs db ${JSON.stringify(x.fr)}`);
    if (x.en !== row.en) drift.push(`${id} en: manifest ${JSON.stringify(row.en)} vs db ${JSON.stringify(x.en)}`);
    if (x.theme !== row.theme) drift.push(`${id} theme: manifest ${JSON.stringify(row.theme)} vs db ${JSON.stringify(x.theme)}`);
    if ((x.respell ?? null) !== (row.respell ?? null)) {
      drift.push(`${id} respell: manifest ${JSON.stringify(row.respell ?? null)}, db says ${JSON.stringify(x.respell)}`);
    }
    const d = pgArray(x.drills).slice().sort().join();
    const stored = (row.drills ?? []).slice().sort().join();
    if (d !== stored) drift.push(`${id} drills: manifest ${JSON.stringify(row.drills)}, db says ${JSON.stringify(pgArray(x.drills))}`);
  }
  if (drift.length) {
    c.release(); await pool.end();
    die(`the recorded manifest has DRIFTED from Postgres:\n  ${drift.slice(0, 8).join('\n  ')}\n  Regenerate with pnpm tsx scripts/_a202_manifest.ts`);
  }
  console.log(`  manifest verified against Postgres: ${touched.length} rows, field by field`);

  /** NOT ONE of the six may carry a gender. A gendered single-word row joins
   *  a1.03's ending population, and this lesson RELEASES all six into the
   *  flashcard hub. `devenir` has a gendered twin at fr.b2.philosophie.136 which
   *  is `le devenir`, a noun, and importing that row instead would have moved
   *  twenty printed figures in a1-03-genre.test.ts. */
  {
    const gendered = IMPORTED_VERBS.filter((v) => byId.get(v.id)?.gender);
    if (gendered.length) {
      c.release(); await pool.end();
      die(`imported verb(s) carrying a gender: ${gendered.map((v) => `${v.verb} (${v.id})`).join(', ')}. A naming form is not a noun.`);
    }
  }

  /** AND EVERY ONE MUST CARRY A `flashcard` DRILL, because every one is released
   *  by a tranche and served as a hub card. All six already carry one, which is
   *  why DRILL_ADDITIONS is empty; this proves it rather than assuming it. */
  {
    const short = IMPORTED_VERBS.filter((v) => !pgArray(byId.get(v.id)?.drills).includes('flashcard'));
    if (short.length) {
      c.release(); await pool.end();
      die(`verb row(s) released to the hub with no flashcard drill: ${short.map((v) => `${v.verb} (${v.id})`).join(', ')}`);
    }
  }

  /** THE FOUR IMPORTED SENTENCES ARE THE NEIGHBOURS' OWN AND ARE NOT REWRITTEN.
   *  This build reads them and carries them; it does not own them, and a batch
   *  that edited a2.10's rows would be the publish hazard from the other end. */
  {
    const notMine = IMPORTED_SENTENCE_IDS.filter((id) => AUTHORED_IDS.includes(id));
    if (notMine.length) {
      c.release(); await pool.end();
      die(`${notMine.join(', ')} is both imported and authored. Those rows belong to a2.10 and this build only reads them.`);
    }
  }

  /* The ids this lesson claims must be free, and the check is a COUNT as well as
     a maximum. THE MAXIMUM IS NO USE AT ALL HERE: a2.10.l2 took .461..500, above
     the whole batch-1 reservation, so `max` has been past this block since before
     it was claimed. The row count is the only signal left. */
  const range = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where theme = $1 and id like 'fr.a2.verbes.%'", [THEME],
  );
  const claimed = await c.query<{ id: string; fr: string; theme: string }>(
    'select id, fr, theme from content_items where id = any($1)', [AUTHORED_ITEMS.map((i) => i.id)],
  );
  // A row already at this id is only a collision if it is SOMEBODY ELSE'S. If the
  // fr and theme match, this batch has already run and is being re-run.
  const foreign = claimed.rows.filter((r) => {
    const mine = AUTHORED_ITEMS.find((a) => a.id === r.id);
    return !mine || mine.fr !== r.fr || mine.theme !== r.theme;
  });
  if (foreign.length) {
    c.release(); await pool.end();
    die(`id(s) taken in Postgres by DIFFERENT content: ${foreign.map((r) => `${r.id} "${r.fr}" (${r.theme})`).join(', ')}. A concurrent build has landed inside your block.`);
  }
  if (claimed.rows.length) console.log(`  ${claimed.rows.length} authored id(s) already present with matching content: this is a re-run`);
  console.log(`  fr.a2.verbes: ${range.rows[0].n} rows, max ${range.rows[0].mx}, claiming ${AUTHORED_ITEMS[0].id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1].id}`);

  /* No two non-sentence rows in one theme may share an `fr`. Every authored row
     here is a sentence, so this should find nothing; it runs anyway, because
     "should" is what the flashhub failure mode is made of. */
  const nonSentence = AUTHORED_ITEMS.filter((i) => i.kind !== 'sentence');
  if (nonSentence.length) {
    c.release(); await pool.end();
    die(`${nonSentence.length} authored row(s) are not sentences. See the corpus header: this lesson authors sentences only.`);
  }

  /* THE DICTÉE MODE, THROUGH THE REAL FUNCTION. */
  for (const id of DICTATION_IDS) {
    const row = AUTHORED_ITEMS.find((i) => i.id === id);
    if (!row) { c.release(); await pool.end(); die(`dictée target ${id} is not an authored row`); }
    const mode = dicteeMode(row.fr);
    if (mode !== 'letters') {
      c.release(); await pool.end();
      die(
        `dictée target ${id} "${row.fr}" is in ${mode} mode.\n`
        + `  Word mode hands every real word over as a pre-spelled tile, so it CANNOT test a spelling. The frames are\n`
        + `  "au parc", "${FRAME_WORD}" and "la clé" for exactly this reason.`,
      );
    }
    if (!row.drills?.includes('dictation')) { c.release(); await pool.end(); die(`dictée target ${id} carries no dictation drill`); }
  }

  /* AND WHAT THE DICTÉE CAN ACTUALLY GRADE, THROUGH THE REAL normalizeFr. */
  {
    const wrongWay: string[] = [];
    for (const d of DICTEE_NEAR_MISS) {
      const row = AUTHORED_ITEMS.find((i) => i.id === d.id);
      if (!row) { c.release(); await pool.end(); die(`DICTEE_NEAR_MISS names ${d.id}, which is not an authored row`); }
      if (!DICTATION_IDS.includes(d.id)) { c.release(); await pool.end(); die(`DICTEE_NEAR_MISS names ${d.id}, which is not a dictée target`); }
      const distinguishable = normalizeFr(row.fr) !== normalizeFr(d.wrong);
      if (distinguishable !== d.scorable) {
        wrongWay.push(`${d.id} is marked scorable: ${d.scorable} and normalizeFr says ${distinguishable} ("${row.fr}" vs "${d.wrong}")`);
      }
    }
    if (wrongWay.length) {
      c.release(); await pool.end();
      die(
        `the dictée's scoring claims disagree with the real normalizeFr:\n    ${wrongWay.join('\n    ')}\n`
        + `  If normalizeFr has learned to keep case or diacritics, the unscorable row can move and the corpus header\n`
        + `  needs rewriting. If it has not, fix the table.`,
      );
    }
    if (DICTEE_NEAR_MISS.length !== DICTATION_IDS.length) {
      c.release(); await pool.end();
      die(`${DICTEE_NEAR_MISS.length} near misses for ${DICTATION_IDS.length} targets. Every target needs the error a learner would actually make against it.`);
    }
    /** THE ERROR THE LESSON EXISTS TO STOP MUST BE GRADEABLE. If the dictée
     *  cannot tell `Je viens de manger.` from `Je viens manger.`, the heaviest
     *  production section in the lesson is scoring something else. */
    const theOne = DICTEE_NEAR_MISS.find((d) => d.wrong === 'Je viens manger.');
    if (!theOne?.scorable) { c.release(); await pool.end(); die('the dictée no longer grades the dropped de, and that is the error the lesson exists to stop'); }
    /** AND THE ONE IT CANNOT SETTLE IS NAMED. */
    const unscorable = DICTEE_NEAR_MISS.filter((d) => !d.scorable);
    if (unscorable.length !== 1) {
      c.release(); await pool.end();
      die(`${unscorable.length} unscorable dictée targets, expected exactly 1 (the capital on Paris). Naming the limit is half of what the table is for.`);
    }
    console.log(`  dictée: ${DICTATION_IDS.length} targets, all letters mode, ${DICTEE_NEAR_MISS.length - unscorable.length} graded on the distinction and ${unscorable.length} not (${unscorable[0].id}, the capital)`);
  }

  /* Every speak target must carry voiceflash. */
  for (const id of ALLER_VENIR_SPEAK_IDS) {
    const mine = AUTHORED_ITEMS.find((i) => i.id === id);
    const live2 = byId.get(id);
    const drills = mine ? (mine.drills ?? []) : pgArray(live2?.drills);
    if (!drills.includes('voiceflash')) {
      c.release(); await pool.end();
      die(`speak target ${id} carries no voiceflash, so the mic-scored deck cannot score it`);
    }
  }
  console.log(`  speak: ${ALLER_VENIR_SPEAK_IDS.length} targets, all voiceflash`);

  /* The unit. Units live in content_units as kind = 'curriculum_unit' with the
     whole unit in a jsonb body; there is no flat `sub` column. */
  const u = await c.query<{ body: Unit & { themes?: string[]; seq?: string | number } }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID],
  );
  if (u.rowCount !== 1) { c.release(); await pool.end(); die(`unit ${UNIT_ID} is not in content_units`); }
  const unit = u.rows[0].body;
  if (unit.title !== UNIT_TITLE) { c.release(); await pool.end(); die(`unit title is ${JSON.stringify(unit.title)}, expected ${JSON.stringify(UNIT_TITLE)}. Do not change it; report the divergence.`); }
  if (unit.sub !== UNIT_SUB) { c.release(); await pool.end(); die(`unit sub is ${JSON.stringify(unit.sub)}, expected ${JSON.stringify(UNIT_SUB)}`); }
  if (unit.canDo !== UNIT_CANDO) { c.release(); await pool.end(); die(`unit canDo is ${JSON.stringify(unit.canDo)}, expected ${JSON.stringify(UNIT_CANDO)}`); }
  if (!(unit.prereqUnitIds ?? []).includes('a2.01')) {
    c.release(); await pool.end();
    die(`unit ${UNIT_ID} declares prereqUnitIds ${JSON.stringify(unit.prereqUnitIds ?? [])}, and this lesson rests on a2.01`);
  }
  const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) {
    c.release(); await pool.end();
    die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${JSON.stringify(unit.seq)}, so the header will draw ${JSON.stringify(expectedTag)}`);
  }
  /** THE FOUR UNITS THAT DECLARE THIS ONE AS A PREREQUISITE. The brief calls
   *  this lesson the hinge of batch 1, and that is a measurable claim rather than
   *  a description: if it stops being true, the build order in the doctrine is
   *  wrong and somebody needs to know. */
  const dependents = await c.query<{ id: string; seq: number }>(
    "select body->>'id' id, (body->>'seq')::int seq from content_units where kind = 'curriculum_unit' and body->'prereqUnitIds' ? $1 order by 2", [UNIT_ID],
  );
  if (dependents.rowCount === 0) {
    c.release(); await pool.end();
    die(`no unit declares ${UNIT_ID} as a prerequisite, and the brief calls this the hinge of batch 1. Re-measure before shipping.`);
  }
  console.log(`  ${dependents.rowCount} unit(s) rest on ${UNIT_ID}: ${dependents.rows.map((r) => `${r.id}(seq ${r.seq})`).join(' ')}`);

  const already = (unit.lessonIds ?? []).includes(LESSON.id);
  console.log(`  unit ${UNIT_ID}: seq ${JSON.stringify(unit.seq)}, tag ${expectedTag}, lessonIds ${JSON.stringify(unit.lessonIds ?? [])}${already ? '  (re-run)' : '  (first lesson)'}`);
  const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

  /** The version must move FORWARD when the CONTENT moves, and an unchanged
   *  re-run must be a no-op. Equal version is legal only when the stored body is
   *  byte-identical, compared through canonicalJson because Postgres `jsonb`
   *  normalises key order on write and a plain stringify would never match. */
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
    const same = canonicalJson(prevBody) === canonicalJson(LESSON);
    if (!same) {
      c.release(); await pool.end();
      die(
        `the stored lesson is v${prevVersion} and this one is v${LESSON.version} with DIFFERENT content.\n`
        + `  Move the lesson's own version counter forward. Two different bodies under one number is exactly the\n`
        + `  drift that makes Postgres and seed.json disagree while both report the same version.`,
      );
    }
    console.log(`  lesson ${LESSON.id}: v${LESSON.version} unchanged, this is an idempotent re-run`);
  } else if (prevVersion === 0) {
    console.log(`  lesson ${LESSON.id}: new, v${LESSON.version}`);
  } else {
    console.log(`  lesson ${LESSON.id}: replacing v${prevVersion} with v${LESSON.version}`);
  }

  if (DRY_RUN) {
    console.log('\n  DRY RUN: nothing written.\n');
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
          it.gender ?? null, it.notes ?? null, it.tags ?? [], it.drills ?? [], it.version ?? 1, it.cardType ?? null],
      );
    }
    // NO RESPELL REPAIRS AND NO DRILL ADDITIONS IN THIS BUILD. Both loops are kept
    // because the next author in the band will need them and because an empty
    // loop over an empty list is the honest way to say "measured, and none".
    // `drills` is an ENUM ARRAY (drill_kind[]), not text[]: concatenating a text[]
    // onto it fails with "operator does not exist: drill_kind[] || text[]" and
    // takes the whole transaction with it. The double cast is the only route.
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
    const ur = await c.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID],
    );
    if (ur.rowCount !== 1) throw new Error(`the unit update touched ${ur.rowCount} rows, expected exactly 1`);
    await c.query('commit');
  } catch (e) {
    await c.query('rollback');
    c.release(); await pool.end();
    die(`transaction rolled back: ${(e as Error).message}`);
  }

  const after = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where theme = $1 and id like 'fr.a2.verbes.%'", [THEME],
  );
  console.log(
    `\n  applied to Postgres:\n`
    + `    ${AUTHORED_ITEMS.length} rows authored, ${AUTHORED_ITEMS[0].id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1].id}\n`
    + `    ${RESPELL_REPAIRS.length} respellings repaired, ${DRILL_ADDITIONS.length} drill addition(s)\n`
    + `    ${IMPORTED_VERBS.length} verbs and ${IMPORTED_SENTENCE_IDS.length} sentences imported by id, 0 authored; ${READ_ONLY_VERBS.length} read and not imported\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items\n`
    + `    fr.a2.verbes row count: ${range.rows[0].n} before, ${after.rows[0].n} after (max ${after.rows[0].mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-aller-venir-into-seed.ts\n`,
  );

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
