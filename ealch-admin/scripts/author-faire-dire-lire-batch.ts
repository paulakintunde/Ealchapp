/* Applies a2.12.l1 "Irréguliers 2 : faire, dire, lire" to Postgres: 25 authored
 * rows, 2 respelling repairs, 3 drill additions, and the lesson (a FIRST build,
 * v1 — the unit dump says `"lessons": []` and that was probed rather than
 * assumed). Validates EVERYTHING before it opens a transaction.
 *
 *     pnpm tsx scripts/author-faire-dire-lire-batch.ts --dry-run
 *     pnpm tsx scripts/author-faire-dire-lire-batch.ts
 *
 * Order matters and it has cost real work twice: apply to Postgres FIRST, merge
 * into the seed SECOND, and publish only when both agree. content:publish
 * regenerates seed.json FROM this database, so publishing before applying would
 * silently delete the lesson from the seed. Publishing is not part of a lesson
 * build.
 *
 * ── THE THINGS TO READ BEFORE RUNNING THIS ────────────────────────────────
 *
 * 1. THIS LESSON IMPORTS TWENTY-SIX ROWS OUT OF FIFTEEN THEMES, which is more
 *    than any other lesson in batch 1 by a factor of five. That is the shape of
 *    the Owns rather than sprawl: the reach of `faire` IS the list of themes.
 *    Every one is verified field by field against Postgres before anything is
 *    written.
 *
 * 2. THIS LESSON AUTHORS NO EXPRESSION THAT ALREADY EXISTS. Twenty-three of the
 *    thirty are imported and seven are authored, and all seven returned zero
 *    against 20,233 non-sentence rows and 27,552 sentences. The brief's "probe
 *    them as --tokens, not --words" is the claim that would have caused
 *    twenty-three duplicate rows; see the corpus header.
 *
 * 3. NO BLIND NASAL, AND THAT IS ASSERTED RATHER THAN ASSUMED. Every superscript
 *    this lesson writes ends a space- or hyphen-delimited token, which is
 *    exactly the shape `hasPlainNasalFor` can reach, so BLIND_NASALS is empty
 *    and the emptiness is re-measured here by breaking each one back in turn.
 *    The brief says `font` and `disent` need checking; `font` is seen and
 *    `disent` has no nasal in it at all.
 *
 * 4. a1.03 DOES NOT MOVE. Every authored row is a sentence or a multi-word
 *    phrase with no `gender`, and the two GENDERED `il fait <adjective>` rows
 *    this lesson imports from meteo are run through the REAL endingPopulation
 *    and do not join. Proved rather than argued.
 *
 * 5. THE THREE vous CELLS ARE A LAYOUT CLAIM AND ARE CHECKED AS ONE. `vous
 *    faites`, `vous dites` and `vous lisez` must be the items of ONE group of
 *    ONE section, in that order. Two groups would put a heading between them.
 *    Asserted by item index, not by "the three strings appear somewhere".
 *
 * 6. THE NEIGHBOUR GUARDS ARE SCOPED TO PRODUCTION SURFACES. s16-notmine has to
 *    be able to say the word weather in order to hand a1.10 its subject back,
 *    and a guard that fires on that is a guard the next author deletes.
 *    Invariants §1 records four ways that has already happened here.
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
  ALLER_UNIT, AUTHORED_EXPRESSION_IDS, AUTHORED_IDS, AVOIR_UNIT, BLIND_NASALS,
  BREAKS, CONTROL_BREAKS, DICTATION_IDS, DICTEE_NEAR_MISS, DRILL_ADDITIONS,
  ETRE_UNIT,
  EXPRESSION_TARGET, FAIRE_DIRE_LIRE, FUTUR_PROCHE_SHAPE, HOMOPHONE_FORMS,
  LEARNED_ENDINGS, MODAL_SHAPE, MODAL_UNIT, NO_RESPELL_IDS, NUMBER_PAIRS,
  ONT_CLUB, OWNED_ID_RANGE, PARADIGM, PARADIGM_IDS, PASSE_COMPOSE_PHRASES,
  PASSE_COMPOSE_SHAPE, REACH, REACH_ORDER, REPORTED_SPEECH_SHAPE,
  RESPELL_REPAIRS, RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE,
  ROW_COUNT_BEFORE, SHOPPING_UNIT, SHOPPING_VOCAB, SINGULAR_TRIPLES, TES_CLUB,
  THEME, THE_CONTROL, THE_THREE, THE_VERB, VISIBLE_NASALS, WEATHER_UNIT,
  WEATHER_VOCAB, afterPronoun, personIds, toItem,
} from './data/faire-dire-lire-corpus.ts';
import {
  IMPORTED_EXPRESSIONS, IMPORTED_EXPRESSION_IDS, IMPORTED_ROWS, IMPORTED_VERBS,
  READ_ONLY_VERBS, SOURCE_THEMES,
} from './data/faire-dire-lire-imported.ts';
import {
  A201_REFRAME, A202_REFRAME, BOUNDARY_SECTION_ID, CONTROL_CLAIM,
  EXPRESSION_SECTION_IDS, FAIRE_DIRE_LIRE_DICTATION_IDS,
  FAIRE_DIRE_LIRE_EXPRESSION_IDS, FAIRE_DIRE_LIRE_GROUPED,
  FAIRE_DIRE_LIRE_LESSON, FAIRE_DIRE_LIRE_SPEAK_IDS, NOT_THE_NOUNS, NOUS_ON,
  NOUS_ON_SECTION_ID, ONT_CLAIM, REACH_CLAIM, REACH_SECTION_ID, REFRAME,
  SCENE_RIGHT, SHEET_ID, TES_CLAIM, VOUS_ROW_IDS, VOUS_ROW_SECTION_ID,
  WEATHER_SECTION_ID, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT,
} from './data/faire-dire-lire-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = FAIRE_DIRE_LIRE_LESSON;
const UNIT_ID = 'a2.12';

/** Asserted against explicit constants, never figures derived from the lesson. A
 *  derived count compares the content to itself and passes on any rewording. */
const REFRAME_APPEARANCES = 15;
const REFRAME_SECTIONS = 10;
const EXPECTED_SECTIONS = 24;
const EXPECTED_ACTS = 6;
const EXPECTED_TRIGGERS = 5;
const EXPECTED_ROUNDS = 5;
const EXPECTED_QUESTIONS = 30;
const EXPECTED_AUTHORED = 25;
const EXPECTED_AUTHORED_EXPRESSIONS = 7;
const EXPECTED_IMPORTED_VERBS = 3;
const EXPECTED_IMPORTED_EXPRESSIONS = 23;
const EXPECTED_READ_ONLY = 3;
const EXPECTED_RESPELL_REPAIRS = 2;
const EXPECTED_DRILL_ADDITIONS = 3;
const EXPECTED_DICTATION = 10;
const EXPECTED_NO_RESPELL = 3;
/** ONE sheet, and its centre is the thirty rather than a fifth ending table. */
const EXPECTED_SHEETS = 1;
/** ONE tapTable in the flow, and it is the six English verbs rather than a
 *  paradigm. Corrections §8 puts its ceiling at SIX ROWS on a Pixel 6. */
const EXPECTED_TAPTABLES = 1;
const TAPTABLE_ROW_CEILING = 6;
/** THE THREE CELLS THE LESSON EXISTS TO DRILL. Derived in the corpus and checked
 *  here against an explicit number: faites, font, dites. If this ever moves, the
 *  trap has changed and every card that counts it is wrong. */
const EXPECTED_BREAKS = 3;
/** THE THREE VERBS AND THE SIX CELLS OF A PARADIGM. */
const EXPECTED_VERBS = 3;
const EXPECTED_CELLS = 6;
/** SIX English verbs French refuses to use. */
const EXPECTED_REACH_GROUPS = 6;
/** The source themes this lesson borrows from, which the brief asks to be
 *  reported and which is worth pinning: a build that quietly narrowed to three
 *  themes would have stopped importing and started authoring. */
const EXPECTED_SOURCE_THEMES = 15;

/** Copied BYTE FOR BYTE from the probe's unit dump on 2026-08-12, not from the
 *  brief. This brief's identity block was corrected in place against
 *  A2-BRIEF-CORRECTIONS.md §1 before the build started and all three fields
 *  match the database exactly. It is checked anyway, because it costs one query
 *  and four briefs in a row got it wrong before the corrections file existed. */
const UNIT_TITLE = 'Irregular Verbs 2: Faire, Dire, Lire';
const UNIT_SUB = 'Irréguliers 2 : faire, dire, lire';
const UNIT_CANDO = 'Can use faire, dire and lire and the common expressions built on faire';

/** Grammar vocabulary that must not reach a learner surface. Deliberately short:
 *  a checker that fires on ordinary teaching prose gets silenced wholesale.
 *  `infinitive` is NOT here, because the chip a learner sees reads "the naming
 *  form"; nor is `stem`, which this band uses as ordinary English.
 *
 *  `irregular` is NOT here either, and that is a decision rather than an
 *  oversight: it is the unit's own title in the database, drawn on the trail
 *  card above this lesson, so banning it from the lesson body would make the
 *  lesson disagree with the screen the learner arrives from. */
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
 *  stop, so `/nu fə.zɔ̃/` reads as a standalone word `zɔ̃`, and a2.01's aller
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

const AUTHORED_ITEMS: Item[] = FAIRE_DIRE_LIRE.map(toItem);

console.log(`\n  a2.12.l1 "Irréguliers 2 : faire, dire, lire" → ${describeTarget()}${DRY_RUN ? '  (DRY RUN)' : ''}\n`);

/* ── Counts, against constants ───────────────────────────────────────────── */

if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) die(`expected ${EXPECTED_AUTHORED} authored rows, found ${AUTHORED_ITEMS.length}`);
if (AUTHORED_IDS.length !== EXPECTED_AUTHORED) die(`AUTHORED_IDS holds ${AUTHORED_IDS.length} ids, expected ${EXPECTED_AUTHORED}`);
if (AUTHORED_EXPRESSION_IDS.length !== EXPECTED_AUTHORED_EXPRESSIONS) die(`expected ${EXPECTED_AUTHORED_EXPRESSIONS} authored expressions, found ${AUTHORED_EXPRESSION_IDS.length}`);
if (PARADIGM_IDS.length !== EXPECTED_VERBS * EXPECTED_CELLS) die(`expected ${EXPECTED_VERBS * EXPECTED_CELLS} paradigm rows, found ${PARADIGM_IDS.length}`);
if (IMPORTED_VERBS.length !== EXPECTED_IMPORTED_VERBS) die(`expected ${EXPECTED_IMPORTED_VERBS} imported naming forms, found ${IMPORTED_VERBS.length}`);
if (IMPORTED_EXPRESSIONS.length !== EXPECTED_IMPORTED_EXPRESSIONS) die(`expected ${EXPECTED_IMPORTED_EXPRESSIONS} imported expressions, found ${IMPORTED_EXPRESSIONS.length}`);
if (READ_ONLY_VERBS.length !== EXPECTED_READ_ONLY) die(`expected ${EXPECTED_READ_ONLY} read-only rows, found ${READ_ONLY_VERBS.length}`);
if (THE_THREE.length !== EXPECTED_VERBS) die(`THE_THREE holds ${THE_THREE.length} verbs and every screen says ${EXPECTED_VERBS}`);
if (RESPELL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`expected ${EXPECTED_RESPELL_REPAIRS} respelling repairs, found ${RESPELL_REPAIRS.length}`);
if (NO_RESPELL_IDS.length !== EXPECTED_NO_RESPELL) die(`expected ${EXPECTED_NO_RESPELL} rows with no respelling, found ${NO_RESPELL_IDS.length}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`expected ${EXPECTED_ACTS} acts, found ${(LESSON.acts ?? []).length}`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} error triggers, found ${(LESSON.errorTriggers ?? []).length}`);
if ((LESSON.sheets ?? []).length !== EXPECTED_SHEETS) die(`expected ${EXPECTED_SHEETS} reference sheet, found ${(LESSON.sheets ?? []).length}`);
if (DICTATION_IDS.length !== EXPECTED_DICTATION) die(`expected ${EXPECTED_DICTATION} dictée targets, found ${DICTATION_IDS.length}`);
if (FAIRE_DIRE_LIRE_DICTATION_IDS.join() !== DICTATION_IDS.join()) die('the dictée section and the corpus disagree about the targets');
if (PARADIGM.length !== EXPECTED_CELLS) die(`PARADIGM holds ${PARADIGM.length} rows and a paradigm has ${EXPECTED_CELLS}`);
if (REACH_ORDER.length !== EXPECTED_REACH_GROUPS) die(`REACH_ORDER holds ${REACH_ORDER.length} groups and every screen says ${EXPECTED_REACH_GROUPS}`);
if (SOURCE_THEMES.length !== EXPECTED_SOURCE_THEMES) {
  die(
    `this lesson imports from ${SOURCE_THEMES.length} themes, expected ${EXPECTED_SOURCE_THEMES}: ${SOURCE_THEMES.join(', ')}\n`
    + `  The reach of ${THE_VERB} IS the list of themes. A build that narrowed to three has stopped importing and\n`
    + `  started authoring, which is the one failure doctrine §2 exists to prevent.`,
  );
}

/* ── THE THIRTY, AND THE COUNT IS THE CLAIM ──────────────────────────────── */
{
  const ids = FAIRE_DIRE_LIRE_EXPRESSION_IDS;
  if (ids.length !== EXPRESSION_TARGET) {
    die(
      `${ids.length} expressions, and the lesson says ${EXPRESSION_TARGET} on ${'six'} screens.\n`
      + `  The brief forbids padding to reach a number. If the honest total has changed, change EXPRESSION_TARGET and\n`
      + `  every card that reads it will follow; do not add an expression nobody says.`,
    );
  }
  if (new Set(ids).size !== ids.length) die('an expression is released twice');
  const fromImports = ids.filter((id) => IMPORTED_EXPRESSION_IDS.includes(id)).length;
  const fromAuthored = ids.filter((id) => AUTHORED_EXPRESSION_IDS.includes(id)).length;
  if (fromImports + fromAuthored !== ids.length) die('an expression is neither imported nor authored');
  if (fromImports !== EXPECTED_IMPORTED_EXPRESSIONS) die(`${fromImports} of the thirty are imported, expected ${EXPECTED_IMPORTED_EXPRESSIONS}`);
  /** EVERY GROUP HAS MEMBERS, and the six add up. A group that emptied would
   *  leave a tapTable row playing nothing. */
  const sizes = REACH_ORDER.map((k) => FAIRE_DIRE_LIRE_GROUPED[k].length);
  if (sizes.some((n) => n === 0)) die(`empty expression group(s): ${REACH_ORDER.filter((k) => !FAIRE_DIRE_LIRE_GROUPED[k].length).join(', ')}`);
  if (sizes.reduce((a, b) => a + b, 0) !== EXPRESSION_TARGET) die('the six groups do not add up to the thirty');
  /** AND EVERY EXPRESSION REALLY IS BUILT ON `faire`. An expression that is not
   *  is a vocabulary item, and this lesson teaches no vocabulary. */
  const notFaire = ids.filter((id) => {
    const row = [...AUTHORED_ITEMS, ...IMPORTED_ROWS].find((r) => r.id === id)!;
    return !/^(faire |il fait )/.test(row.fr);
  });
  if (notFaire.length) die(`expression(s) not built on ${THE_VERB}: ${notFaire.join(', ')}`);
  console.log(`  ${ids.length} expressions in ${REACH_ORDER.length} groups (${REACH_ORDER.map((k, i) => `${k}:${sizes[i]}`).join(' ')}), ${fromImports} imported and ${fromAuthored} authored`);
}

/* ── THE TRAP, AS ARITHMETIC ─────────────────────────────────────────────── */
{
  if (BREAKS.length !== EXPECTED_BREAKS) {
    die(
      `${BREAKS.length} cells break the endings a2.01 taught, expected ${EXPECTED_BREAKS}.\n`
      + `  Found: ${BREAKS.map((b) => `${b.verb}/${b.person} ${b.form}`).join(', ')}\n`
      + `  Every card that says "three" reads this. If the paradigm has been corrected, the prose follows it.`,
    );
  }
  /** AND `lire` BREAKS NOTHING. That is the only reason the third verb is in
   *  this lesson, and the brief asks the question directly. */
  if (CONTROL_BREAKS.length !== 0) {
    die(
      `${THE_CONTROL} breaks the ending at ${CONTROL_BREAKS.map((b) => b.person).join(', ')}.\n`
      + `  It is in this lesson as the CONTROL: the verb that takes the endings the learner already has, so that\n`
      + `  the other two can be seen as the exception. If it stops being that, drop it or drop the claim.`,
    );
  }
  /** AND `faire` BREAKS BOTH CELLS while `dire` breaks one. The brief implies
   *  dire is irregular at both and it is not: `disent` ends in -ent. */
  const byVerb = new Map<string, number>();
  for (const b of BREAKS) byVerb.set(b.verb, (byVerb.get(b.verb) ?? 0) + 1);
  if (byVerb.get(THE_VERB) !== LEARNED_ENDINGS.length) die(`${THE_VERB} breaks ${byVerb.get(THE_VERB)} of ${LEARNED_ENDINGS.length} cells, expected all of them`);
  if (byVerb.get(THE_THREE[1]) !== 1) die(`${THE_THREE[1]} breaks ${byVerb.get(THE_THREE[1])} cells, expected exactly 1: disent is regular in shape`);
  console.log(`  ${BREAKS.length} breaking cells (${BREAKS.map((b) => b.form).join(', ')}); ${THE_CONTROL} breaks none`);
}

/* ── THE TWO CLOSED CLUBS ────────────────────────────────────────────────── */
{
  if (TES_CLUB.length !== 3) die(`TES_CLUB holds ${TES_CLUB.length} members and every card says three`);
  if (ONT_CLUB.length !== 4) die(`ONT_CLUB holds ${ONT_CLUB.length} members and every card says four`);
  /** EVERY MEMBER'S FORM REALLY TAKES THE ENDING THE CLUB IS NAMED FOR. */
  for (const m of TES_CLUB) if (!m.form.endsWith('tes')) die(`${m.form} is in TES_CLUB and does not end in -tes`);
  for (const m of ONT_CLUB) if (!m.form.endsWith('ont')) die(`${m.form} is in ONT_CLUB and does not end in -ont`);
  /** AND THIS LESSON REALLY IS THE ONE THAT COMPLETES THEM. Two of the three
   *  -tes forms and one of the four -ont forms are new here; the rest carry the
   *  unit id where the learner met them, which is what makes the claim a payoff
   *  rather than an assertion. */
  const tesNew = TES_CLUB.filter((m) => m.unit === UNIT_ID);
  const ontNew = ONT_CLUB.filter((m) => m.unit === UNIT_ID);
  if (tesNew.length !== 2) die(`${tesNew.length} of the -tes forms are new here, expected 2 (faites and dites)`);
  if (ontNew.length !== 1) die(`${ontNew.length} of the -ont forms are new here, expected 1 (font)`);
  const priors = [...TES_CLUB, ...ONT_CLUB].filter((m) => m.unit !== UNIT_ID).map((m) => m.unit);
  for (const u of new Set(priors)) {
    if (![ETRE_UNIT, AVOIR_UNIT, ALLER_UNIT].includes(u)) die(`a club member cites unit ${u}, which is not one of the three this lesson closes a loop with`);
  }
  console.log(`  -tes: ${TES_CLUB.length} members, ${tesNew.length} new here | -ont: ${ONT_CLUB.length} members, ${ontNew.length} new here`);
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
  if (!['sentence', 'phrase'].includes(it.kind)) die(`${it.id} is kind "${it.kind}". Every authored row here is a sentence or a phrase; see the corpus header.`);
  if (it.gender) die(`${it.id} carries a gender. Nothing authored here may join a1.03's ending population.`);
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} "${it.fr}" closes a nasal with a plain n or m: ${it.respell}`);
  /** ≤ 14 words, doctrine §C. */
  const words = it.fr.trim().split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  if (words > 14) die(`${it.id} runs to ${words} words, over the A2 budget of 14: "${it.fr}"`);
  /** NO FUTUR PROCHE, NO PASSÉ COMPOSÉ AND NO MODAL IN AN AUTHORED ROW, EVER.
   *  Not merely on a production surface: a corpus row is released to spaced
   *  repetition, so it would be drilled for weeks before the unit that owns it
   *  explains it. */
  if (FUTUR_PROCHE_SHAPE.test(it.fr)) die(`${it.id} "${it.fr}" puts an action after aller. That is the futur proche and it is a2.19.`);
  if (PASSE_COMPOSE_SHAPE.test(it.fr) || PASSE_COMPOSE_PHRASES.some((p) => hasPhrase(it.fr, p))) {
    die(`${it.id} "${it.fr}" holds an auxiliary and a participle. That is a2.05, and \`fait\` is this verb's participle as well as its il form.`);
  }
  if (MODAL_SHAPE.test(it.fr)) die(`${it.id} "${it.fr}" puts a naming form after a modal. That is ${MODAL_UNIT}, the very next lesson.`);
  if (REPORTED_SPEECH_SHAPE.test(it.fr)) die(`${it.id} "${it.fr}" puts a clause after a form of ${THE_THREE[1]}. Reported speech is beyond A2 and this lesson uses a direct object only.`);
}

/** ALL SIX PERSONS REACH A SCREEN, checked against the corpus rather than a
 *  hand list that could quietly lose `vous`. */
{
  const PERSONS = ['je', 'tu', 'il', 'nous', 'vous', 'ils'] as const;
  const missing = PERSONS.filter((p) => personIds(p).length !== EXPECTED_VERBS);
  if (missing.length) die(`the ${missing.join(', ')} form is not authored on all ${EXPECTED_VERBS} verbs`);
  console.log(`  all ${PERSONS.length} persons authored on all ${EXPECTED_VERBS} verbs: ${PERSONS.map((p) => `${p}:${personIds(p).length}`).join(' ')}`);
}

/** ALL THREE PARADIGMS ARE PRESENT IN FULL, CELL BY CELL.
 *
 *  Every cell of PARADIGM must appear in the authored sentence for that verb and
 *  that person, so a row quietly reworded to a different form breaks here rather
 *  than on a device. */
{
  const ORDER: readonly ('je' | 'tu' | 'il' | 'nous' | 'vous' | 'ils')[] = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
  for (const verb of ['faire', 'dire', 'lire'] as const) {
    const rows = FAIRE_DIRE_LIRE.filter((w) => w.verb === verb);
    if (rows.length !== EXPECTED_CELLS) die(`${verb} has ${rows.length} authored cells, expected ${EXPECTED_CELLS}`);
    rows.forEach((row, i) => {
      if (row.person !== ORDER[i]) die(`${row.id} is person "${row.person}" at index ${i} of ${verb}, and the ledger's order is ${ORDER.join(' · ')}`);
      const wanted = PARADIGM[i][verb];
      if (!hasPhrase(row.fr, wanted)) {
        die(`${row.id} "${row.fr}" does not contain the ${verb} form "${wanted}" that PARADIGM gives for ${PARADIGM[i].person}`);
      }
      if (row.reach !== null) die(`${row.id} is a paradigm cell and carries a reach group`);
    });
    /** AND THE SIX RUN ON ONE FRAME. If they do not, the screen compares six
     *  objects as well as six forms and the claim is gone. */
    const frames = rows.map((r) => r.fr.replace(/^\S+\s+\S+\s*/, ''));
    if (new Set(frames).size !== 1) {
      die(`${verb} runs on ${new Set(frames).size} different frames: ${JSON.stringify([...new Set(frames)])}. Only the verb may move.`);
    }
  }
  /** AND `faire` RUNS ON ONE OF THE THIRTY, which is what stops act 2 being a
   *  detour from act 3. */
  const faireFrame = FAIRE_DIRE_LIRE.find((w) => w.verb === 'faire')!.fr.replace(/^\S+\s+\S+\s*/, '').replace(/\.$/, '');
  const asExpression = `${THE_VERB} ${faireFrame}`;
  const match = [...AUTHORED_ITEMS, ...IMPORTED_ROWS].find((r) => r.fr === asExpression);
  if (!match || !FAIRE_DIRE_LIRE_EXPRESSION_IDS.includes(match.id)) {
    die(
      `the ${THE_VERB} paradigm runs on "${faireFrame}", which is not one of the ${EXPRESSION_TARGET} expressions.\n`
      + `  The frame was chosen so that act 2 conjugates the Owns rather than stepping away from it.`,
    );
  }
  console.log(`  three paradigms, ${EXPECTED_CELLS} cells each, asserted cell by cell; ${THE_VERB} runs on "${asExpression}" (${match.id})`);
}

/** THE SINGULAR TRIPLES, CHECKED AS AN EQUALITY.
 *
 *  je fais / tu fais / il fait are three spellings and one sound, and so are the
 *  dire three and the lire three. If the respellings ever disagree about
 *  anything after the pronoun, the lesson prints a difference it spends a
 *  mission denying, and no schema check would catch it. */
for (const triple of SINGULAR_TRIPLES) {
  const rows = triple.map((id) => {
    const w = FAIRE_DIRE_LIRE.find((x) => x.id === id);
    if (!w) die(`SINGULAR_TRIPLES names ${id}, which is not an authored row`);
    return w;
  });
  const tails = rows.map((w) => afterPronoun(w.respell ?? ''));
  if (new Set(tails).size !== 1) {
    die(
      `the singular triple ${triple.join(' / ')} does not sound the same:\n    ${rows.map((w, i) => `${w.fr}  ->  ${tails[i]}`).join('\n    ')}\n`
      + `  Everything after the pronoun MUST be one string. Three spellings and one sound is what makes the dictée the\n`
      + `  only surface that can test the singular, and what makes every ear question here about NUMBER.`,
    );
  }
  if (new Set(rows.map((w) => w.fr)).size !== 3) die(`the triple ${triple.join(' / ')} does not hold three different sentences`);
}
if (SINGULAR_TRIPLES.length !== EXPECTED_VERBS) die(`${SINGULAR_TRIPLES.length} singular triples, expected one per verb`);
console.log(`  ${SINGULAR_TRIPLES.length} singular triples on ${SINGULAR_TRIPLES.length} verbs: one string after the pronoun`);

/** THE NUMBER PAIRS: singular against plural, pronoun-blind, and the difference
 *  must really be in the verb.
 *
 *  `il` and `ils` are one sound, so the verb is the whole evidence. Both halves
 *  must respell their pronoun IDENTICALLY, or the learner answers from the
 *  pronoun and the ear mission proves nothing.
 *
 *  DELIBERATELY NOT a2.02's GUARD. That one required the singular to be nasal
 *  and the plural to be oral, which is true of `venir` and false of all three
 *  verbs here: `faire` is the other way round and `dire` and `lire` have no
 *  nasal on either side. What is asserted instead is what is actually claimed on
 *  the screen: the two differ, they differ ONLY in the verb, and the pronoun
 *  gives nothing away. */
for (const [sing, plur] of NUMBER_PAIRS) {
  const a = FAIRE_DIRE_LIRE.find((w) => w.id === sing);
  const b = FAIRE_DIRE_LIRE.find((w) => w.id === plur);
  if (!a || !b) die(`number pair ${sing} / ${plur} does not resolve against the authored corpus`);
  if (a.fr === b.fr) die(`${sing} and ${plur} are the same sentence, so the pair proves nothing`);
  if (a.verb !== b.verb) die(`${sing} and ${plur} are on different verbs, so the pair compares two verbs as well as two numbers`);
  const pa = (a.respell ?? '').split(' ');
  const pb = (b.respell ?? '').split(' ');
  if (pa[0] !== pb[0]) {
    die(
      `${sing} respells its pronoun "${pa[0]}" and ${plur} respells its "${pb[0]}".\n`
      + `  A number pair is where the pronoun gives the learner NOTHING, which is what makes the ear mission a real\n`
      + `  task rather than a pronoun quiz.`,
    );
  }
  if (pa[1] === pb[1]) die(`${sing} and ${plur} respell the VERB identically ("${pa[1]}"), so there is nothing for the ear to catch`);
  if (pa.slice(2).join(' ') !== pb.slice(2).join(' ')) die(`${sing} and ${plur} differ after the verb. Only the verb may move.`);
}
if (NUMBER_PAIRS.length !== EXPECTED_VERBS) die(`${NUMBER_PAIRS.length} number pairs; the ear mission needs one per verb`);
console.log(`  ${NUMBER_PAIRS.length} number pairs: pronoun identical, verb different, nothing else moves`);

/* ── THE NASAL CHECKER, IN BOTH DIRECTIONS ───────────────────────────────── */
{
  /** NO BLIND NASAL, AND THE EMPTINESS IS MEASURED RATHER THAN ASSUMED.
   *
   *  Corrections §6 states the blind shape precisely: a nasal followed by any
   *  consonant INSIDE the token, so that the n or m does not end a
   *  space-delimited token. This lesson has no word of that shape in it, and
   *  the way to keep it true is to re-run the measurement rather than to write
   *  it in a comment: every superscript is broken back to a plain n and the
   *  checker must notice every one. */
  if (BLIND_NASALS.length !== 0) die(`BLIND_NASALS has gained ${BLIND_NASALS.length} entries. Re-read corrections §6 and split the guard.`);
  if (VISIBLE_NASALS.length === 0) die('no superscripts found at all, so the check below would pass vacuously');
  const unseen: string[] = [];
  for (const v of VISIBLE_NASALS) {
    const row = FAIRE_DIRE_LIRE.find((w) => w.id === v.id)!;
    if (row.respell !== v.must) die(`${v.id} respells as ${JSON.stringify(row.respell)} and VISIBLE_NASALS expects ${JSON.stringify(v.must)}`);
    // Break EACH superscript in the row one at a time, not all at once: a row
    // with two of them (sahⁿ-BLAHⁿ) can have one seen and one blind, and
    // breaking both would hide that behind the one the checker catches.
    const positions = [...v.must].reduce<number[]>((acc, c, i) => (c === 'ⁿ' ? [...acc, i] : acc), []);
    for (const p of positions) {
      const broken = `${v.must.slice(0, p)}n${v.must.slice(p + 1)}`;
      if (!hasPlainNasalFor(row.fr, broken)) unseen.push(`${v.id} "${row.fr}": ${broken}`);
    }
  }
  if (unseen.length) {
    die(
      `the shared checker CANNOT see ${unseen.length} of this lesson's nasals:\n    ${unseen.join('\n    ')}\n`
      + `  That is corrections §6's blind shape and this lesson claimed to have none of it. Either move the row into\n`
      + `  BLIND_NASALS and assert it by name, or respell it so the nasal ends its token.`,
    );
  }
  /** AND A POSITIVE CONTROL, so a checker that has gone quiet altogether is
   *  caught. If this stops being flagged, every "seen" result above is
   *  worthless in the other direction. */
  if (!hasPlainNasalFor('bon', 'BOHN')) {
    die('hasPlainNasalFor no longer flags a plain-n nasal at all. The check has gone quiet and every result in this build is meaningless.');
  }
  console.log(`  ${VISIBLE_NASALS.length} authored respellings carry a superscript; every one is SEEN by the shared checker, 0 blind`);
}

/** EVERY HAND-TYPED promptSound IS A REAL ROW'S RESPELLING.
 *
 *  a2.02 found by mutation-testing that a trapDrill card's `promptSound` is the
 *  sound of the sentence the learner is being tempted towards, which is a
 *  DIFFERENT row from the card's own `fr` — that is the whole design — so it
 *  cannot be derived from the card. Here every one is read from `bare()` rather
 *  than typed, and this guard is what keeps that true. */
{
  const respells = new Set(FAIRE_DIRE_LIRE.map((w) => w.respell).filter(Boolean) as string[]);
  const byFr = new Map(FAIRE_DIRE_LIRE.map((w) => [w.fr, w] as const));
  let n = 0;
  for (const s of LESSON.sections) {
    if (s.type !== 'trapDrill') continue;
    for (const [i, card] of (s.cards ?? []).entries()) {
      const ps = (card as { promptSound?: string; fr?: string }).promptSound;
      if (!ps) continue;
      n += 1;
      if (!respells.has(ps)) die(`trapDrill card ${i + 1} carries promptSound ${JSON.stringify(ps)}, which is not the respelling of any authored row`);
      const own = byFr.get((card as { fr?: string }).fr ?? '');
      if (own && own.respell === ps) die(`trapDrill card ${i + 1} plays its OWN sound as the prompt, so there is nothing to choose between`);
    }
    /** AND EVERY DRILL OPTION IS A REAL RESPELLING TOO. A distractor that is not
     *  a real row's sound teaches a pronunciation the corpus does not hold. */
    for (const [i, d] of (s.drill ?? []).entries()) {
      for (const o of d.opts) if (!respells.has(o)) die(`trapDrill drill ${i + 1} offers ${JSON.stringify(o)}, which is not any authored row's respelling`);
      if (new Set(d.opts).size !== d.opts.length) die(`trapDrill drill ${i + 1} repeats an option`);
    }
  }
  if (n === 0) die('no trapDrill promptSound found, so the check above passed vacuously');
  console.log(`  ${n} promptSound value(s) and every drill option is a real row's respelling`);
}

/** AND THE FOUR STRUCTURAL GUARDS REALLY FIRE. Every one is asserted against
 *  known positives and known negatives, because a regex that matches nothing
 *  passes every scan silently. a2.02's passé composé guard shipped broken: it
 *  ended with `\b` after `é`, and `\b` in JavaScript is ASCII-only, so it never
 *  fired on a real participle at all. Invariants §0 records that exact trap. */
{
  const PC_YES = ['Il a mangé.', 'Elle a parlé au voisin', 'ils ont regardé', "j'ai regardé la télé"];
  const PC_NO = ['as a bit of it', 'a visit to the shop', 'Nous faisons le lit.', 'a naming form'];
  for (const s of PC_YES) if (!PASSE_COMPOSE_SHAPE.test(s)) die(`PASSE_COMPOSE_SHAPE does not match ${JSON.stringify(s)}, so the guard that uses it scans for nothing`);
  for (const s of PC_NO) if (PASSE_COMPOSE_SHAPE.test(s)) die(`PASSE_COMPOSE_SHAPE fires on ${JSON.stringify(s)}, which is ordinary English or this lesson's own content`);
  const FP_YES = ['Je vais manger.', 'ils vont partir', 'Je vais faire les courses.'];
  const FP_NO = ['Je vais au parc.', 'il va bien', 'Ils font le lit.'];
  for (const s of FP_YES) if (!FUTUR_PROCHE_SHAPE.test(s)) die(`FUTUR_PROCHE_SHAPE does not match ${JSON.stringify(s)}`);
  for (const s of FP_NO) if (FUTUR_PROCHE_SHAPE.test(s)) die(`FUTUR_PROCHE_SHAPE fires on ${JSON.stringify(s)}, which is this lesson's own content`);
  const MO_YES = ['Il faut faire la queue.', 'je peux faire le ménage', 'Nous devons partir.'];
  const MO_NO = ['Ils font le lit.', 'Il fait la queue.', 'a fault in the wall'];
  for (const s of MO_YES) if (!MODAL_SHAPE.test(s)) die(`MODAL_SHAPE does not match ${JSON.stringify(s)}, so the ${MODAL_UNIT} guard scans for nothing`);
  for (const s of MO_NO) if (MODAL_SHAPE.test(s)) die(`MODAL_SHAPE fires on ${JSON.stringify(s)}`);
  const RS_YES = ['Il dit que oui.', "elle dit qu'elle vient", 'Ils disent que non.'];
  const RS_NO = ['Il dit bonjour.', 'Ils disent bonjour.', 'a diskette'];
  for (const s of RS_YES) if (!REPORTED_SPEECH_SHAPE.test(s)) die(`REPORTED_SPEECH_SHAPE does not match ${JSON.stringify(s)}`);
  for (const s of RS_NO) if (REPORTED_SPEECH_SHAPE.test(s)) die(`REPORTED_SPEECH_SHAPE fires on ${JSON.stringify(s)}, which is this lesson's own content`);
  console.log(`  four structural guards fire on ${PC_YES.length + FP_YES.length + MO_YES.length + RS_YES.length} known positives and on none of ${PC_NO.length + FP_NO.length + MO_NO.length + RS_NO.length} known negatives`);
}

/* ── a1.03: joiners enforced to ZERO, authored AND imported ──────────────── */
{
  const joiners = endingPopulation([...AUTHORED_ITEMS, ...IMPORTED_ROWS]);
  if (joiners.length !== 0) {
    die(
      `${joiners.length} row(s) this build writes or carries join a1.03's measured ending population: ${joiners.map((j) => `${j.id} "${j.fr}"`).join(', ')}\n`
      + `  a1-03-genre.test.ts re-measures twenty printed figures on every run. Withdraw rather than argue.\n`
      + `  Watch fr.a1.meteo.037 and .039: both are kind=word with gender=m, which invariants §5 calls radioactive,\n`
      + `  and both are three words long, which is why they are safe. Re-measure if either is ever shortened.`,
    );
  }
  console.log(`  a1.03 ending population: 0 joiners across ${AUTHORED_ITEMS.length} authored and ${IMPORTED_ROWS.length} carried rows`);
}

/* ── The repairs, in the two directions the two lists need ───────────────── */
for (const r of RESPELL_REPAIRS_VISIBLE) {
  if (hasPlainNasalFor(r.fr, r.to)) die(`the replacement for ${r.id} "${r.fr}" still closes a nasal with a plain n or m: ${r.to}`);
  if (!hasPlainNasalFor(r.fr, r.from)) die(`${r.id} "${r.fr}" is in RESPELL_REPAIRS_VISIBLE and its stored value "${r.from}" is NOT flagged. Move it to the INVISIBLE list.`);
  const row = IMPORTED_ROWS.find((x) => x.id === r.id);
  if (!row) die(`${r.id} is repaired and is not one of the imported rows`);
  if (row.respell !== r.from) die(`${r.id} is stored in the manifest as ${JSON.stringify(row.respell)} and the repair expects ${JSON.stringify(r.from)}. Regenerate the manifest.`);
}
for (const r of RESPELL_REPAIRS_INVISIBLE) {
  if (hasPlainNasalFor(r.fr, r.from)) die(`${r.id} "${r.fr}" is in RESPELL_REPAIRS_INVISIBLE and the checker CAN see "${r.from}". Move it.`);
  if (!r.to.includes('ⁿ')) die(`${r.id} is repaired to "${r.to}", which carries no superscript`);
}
/** ONE OF THE TWO REPAIRS IS DELIBERATELY NOT A SUPERSCRIPT, and that has to be
 *  provable rather than explained. `promenade` is /pʁɔm.nad/ with a real m and
 *  no nasal vowel; invariants §3 records the same case for `jaune` and
 *  `automne`, where adding a superscript teaches a sound that is not there. */
{
  const noSuper = RESPELL_REPAIRS_VISIBLE.filter((r) => !r.to.includes('ⁿ'));
  if (noSuper.length !== 1) die(`${noSuper.length} repairs use no superscript, expected exactly 1 (promenade, invariants §3's jaune case)`);
  for (const r of noSuper) {
    if (/ⁿ/.test(r.from)) die(`${r.id} had a superscript and the repair removes it, which is the wrong direction`);
  }
  console.log(`  ${RESPELL_REPAIRS.length} repairs: ${RESPELL_REPAIRS.length - noSuper.length} superscript, ${noSuper.length} not (a real consonant misread as a nasal)`);
}

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

/** THE REFRAME IS ABOUT THE REACH AND NOT ABOUT THE FORMS, which is the decision
 *  the whole lesson is built on. A reframe naming a verb form would make this
 *  the fifth consecutive table lesson doctrine §B.5 exists to prevent. */
if (/(^|[^a-zà-ÿ])(fais|fait|faisons|faites|font|dis|dit|disons|dites|disent|lis|lit|lisons|lisez|lisent)(?![a-zà-ÿ])/i.test(REFRAME)) {
  die(`the reframe is "${REFRAME}". A reframe naming a verb form makes this a memorisation lesson with a slogan on it.`);
}
if (REFRAME.trim().split(/\s+/).length > 12) die('a reframe has to survive recall mid-sentence');
/** AND IT NAMES THE VERB, because the whole instruction is "keep this one". */
if (!hasPhrase(REFRAME, THE_VERB)) die(`the reframe does not name ${THE_VERB}, and the rule it states is about keeping that verb rather than about anything else`);

if (JSON.stringify(LESSON).includes('"autoplay"')) {
  die('autoplay is authored somewhere. It is declared in schema.ts and read by no component. Use audioFirst.');
}
if (JSON.stringify(LESSON).includes('"imageRef"')) {
  die('an imageRef is authored. lesson-contract.test.ts does not check it and an unregistered ref draws a blank box.');
}

const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one.`);

/** ONE tapTable, IT IS THE SIX-GROUP REACH SCREEN, AND IT IS AT MOST SIX ROWS.
 *
 *  Corrections §8: tapTable is not in ownsLayout(), so it renders inside a
 *  scrolling page, and six rows is the measured ceiling on a Pixel 6. The brief
 *  asks for a row per expression, which is thirty. This is the measurement that
 *  overrides it. */
{
  const taps = LESSON.sections.filter((s) => s.type === 'tapTable');
  if (taps.length !== EXPECTED_TAPTABLES) die(`${taps.length} tapTables in the flow, expected ${EXPECTED_TAPTABLES}. One table, one tapTable, then stop.`);
  const tap = taps[0];
  if ((tap as { id?: string }).id !== REACH_SECTION_ID) {
    die(`the only tapTable is ${JSON.stringify((tap as { id?: string }).id)}, expected ${JSON.stringify(REACH_SECTION_ID)}. The per-row audio belongs to the Owns.`);
  }
  if (tap.type !== 'tapTable') die('unreachable');
  if (tap.rows.length > TAPTABLE_ROW_CEILING) {
    die(
      `${REACH_SECTION_ID} has ${tap.rows.length} rows and the measured ceiling on a Pixel 6 is ${TAPTABLE_ROW_CEILING}.\n`
      + `  tapTable is NOT in ownsLayout() (LessonPager.tsx:162) so it renders inside a scrolling page. The brief asks\n`
      + `  for a row per expression; thirty rows is five screens of scroll with no checkpoint in it, and the thirty\n`
      + `  reach screens through the groupDrills instead.`,
    );
  }
  if (tap.rows.length !== REACH_ORDER.length) die(`${REACH_SECTION_ID} has ${tap.rows.length} rows and there are ${REACH_ORDER.length} groups`);
  tap.rows.forEach((row, i) => {
    const k = REACH_ORDER[i];
    if (row.cells[0] !== REACH[k].english) die(`tapTable row ${i + 1} reads ${JSON.stringify(row.cells[0])}, expected ${JSON.stringify(REACH[k].english)}`);
    if (!row.say) die(`tapTable row ${i + 1} carries no \`say\`, so it cannot be played with one tap`);
    if (!row.detail) die(`tapTable row ${i + 1} carries no detail, so the group behind it is unreachable`);
    /** AND THE DETAIL REALLY LISTS ITS OWN GROUP. A row whose detail listed
     *  somebody else's expressions would be worse than no detail at all. */
    const listed = strings(row.detail).join(' ');
    const missing = FAIRE_DIRE_LIRE_GROUPED[k].filter((id) => {
      const r = [...AUTHORED_ITEMS, ...IMPORTED_ROWS].find((x) => x.id === id)!;
      return !hasPhrase(listed, r.fr);
    });
    if (missing.length) die(`tapTable row ${i + 1} (${k}) does not list ${missing.length} of its own expressions`);
  });
  const coreTables = LESSON.sections.filter((s) => s.type === 'table').length;
  if (coreTables) die(`${coreTables} table section(s) in the flow. A table at layer core is a table-in-core density failure; the grids belong in the sheet.`);
  console.log(`  the reach: ${REACH_SECTION_ID}, ${tap.rows.length} rows (ceiling ${TAPTABLE_ROW_CEILING}), each listing its own group`);
}

/* ── THE LAYOUT CLAIM: THREE vous CELLS, ONE GROUP, IN ORDER ─────────────── */
{
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === VOUS_ROW_SECTION_ID);
  if (!sec) die(`${VOUS_ROW_SECTION_ID} is gone. That is the one screen the trap is visible on.`);
  if (sec.type !== 'groupDrill') die(`${VOUS_ROW_SECTION_ID} is a ${sec.type}, expected a groupDrill: it is the only section type that holds items with itemIds AND owns its layout.`);
  if (sec.groups.length !== 1) {
    die(
      `${VOUS_ROW_SECTION_ID} has ${sec.groups.length} groups, expected exactly 1.\n`
      + `  THE THREE CELLS BELONG ON ONE SCREEN, ADJACENT. The brief is explicit that this is the layout the test must\n`
      + `  assert, and a second group puts a heading between them so the learner compares across it.`,
    );
  }
  const items = sec.groups[0].items ?? [];
  if (items.length !== VOUS_ROW_IDS.length) die(`${VOUS_ROW_SECTION_ID} holds ${items.length} items, expected ${VOUS_ROW_IDS.length}`);
  items.forEach((it, i) => {
    if (it.itemId !== VOUS_ROW_IDS[i]) die(`${VOUS_ROW_SECTION_ID} item ${i + 1} is ${JSON.stringify(it.itemId)}, expected ${JSON.stringify(VOUS_ROW_IDS[i])}`);
    const row = FAIRE_DIRE_LIRE.find((w) => w.id === VOUS_ROW_IDS[i])!;
    if (row.person !== 'vous') die(`${VOUS_ROW_IDS[i]} is person ${JSON.stringify(row.person)} and this screen is the vous row`);
  });
  /** AND THE THREE ARE ONE PER VERB, in the lesson's own verb order. */
  const verbs = VOUS_ROW_IDS.map((id) => FAIRE_DIRE_LIRE.find((w) => w.id === id)!.verb);
  if (verbs.join() !== THE_THREE.join()) die(`the vous row shows ${verbs.join(', ')} and the lesson's order is ${THE_THREE.join(', ')}`);
  console.log(`  the vous row: ${VOUS_ROW_SECTION_ID}, ${sec.groups.length} group, ${items.length} adjacent cells (${verbs.join(' · ')})`);
}

/* ── The learner-facing surfaces ─────────────────────────────────────────── */

const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
/** EVERY SURFACE A LEARNER READS, and `intro` and `overview` are two of them.
 *
 *  a2.11 shipped the phrase "third person" in `intro` at v1, on the lesson
 *  overview card AND the lesson cover, because every guard in the band walked
 *  `sections + sheets + terms` and nothing looked at `intro`. Every host-side
 *  gate was green and only a Pixel 6 found it. Ledger §0. */
const learnerText = [
  ...strings(LESSON.sections),
  ...strings(LESSON.sheets ?? []),
  ...strings(LESSON.terms ?? {}),
  LESSON.intro ?? '',
  ...strings(LESSON.overview ?? {}),
].join('\n');
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
  if (!LESSON.intro.includes(String(EXPRESSION_TARGET))) {
    die(`Lesson.intro does not say how many expressions there are. It is the one screen a learner reads before deciding to start, and the reach is the reason to.`);
  }
}

/* ── THE OWNS IS SAID TO THE LEARNER, NOT ONLY MEANT ─────────────────────── */
{
  for (const [name, claim] of [['REACH_CLAIM', REACH_CLAIM], ['TES_CLAIM', TES_CLAIM], ['ONT_CLAIM', ONT_CLAIM], ['CONTROL_CLAIM', CONTROL_CLAIM], ['NOT_THE_NOUNS', NOT_THE_NOUNS]] as const) {
    if (!learnerText.includes(claim)) die(`${name} appears on no screen: "${claim}"`);
  }
  const reach = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REACH_CLAIM)));
  if (reach.length < 3) die(`the reach claim reaches ${reach.length} sections, expected at least 3`);
  const control = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(CONTROL_CLAIM)));
  if (control.length < 2) die(`the control claim reaches ${control.length} sections, expected at least 2. Without it the third verb is arbitrary.`);
  console.log(`  the five carried claims all reach a screen; reach in ${reach.length} sections, control in ${control.length}`);
}

/** THE PATTERN NAME IS a2.02's AND IT IS QUOTED VERBATIM. This lesson is not one
 *  of doctrine §B.7's four instances and it holds another one, so it borrows the
 *  name rather than inventing a fifth phrase for the same idea. */
{
  if (!hasPhrase(learnerText, WHAT_FOLLOWS)) {
    die(`"${WHAT_FOLLOWS}" appears on no screen. It is a2.02's name for this shape and inventing a second one for the same idea is the drift it exists to prevent.`);
  }
  const carrying = LESSON.sections.filter((s) => strings(s).some((x) => hasPhrase(x, WHAT_FOLLOWS)));
  if (carrying.length < 2) die(`"${WHAT_FOLLOWS}" reaches ${carrying.length} sections, expected at least 2`);
  if (!hasPhrase(learnerText, WHAT_FOLLOWS_UNIT)) die(`${WHAT_FOLLOWS_UNIT} is cited nowhere, so the name is quoted without saying where it came from`);
  /** AND THE LOWERCASE TERM NAME NEVER OPENS A SENTENCE.
   *
   *  a2.02 found this on a Pixel 6 after v2 had shipped. Term names are
   *  lowercase by house convention, so one at the start of a sentence reads as a
   *  typo rather than as a quoted term. SCOPED TO THE DECLARED TERM NAMES and
   *  nothing else: the obvious version fires on a French form quoted at the
   *  start of a sentence, which keeps its lowercase and is correct. */
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
  console.log(`  the pattern name "${WHAT_FOLLOWS}" in ${carrying.length} sections, cited as ${WHAT_FOLLOWS_UNIT}; ${names.length} lowercase term names, none opening a sentence`);
}

/* ── THE a1.10 LOOP, CLOSED BY UNFREEZING THE PHRASES ────────────────────── */
{
  if (!hasPhrase(learnerText, WEATHER_UNIT)) {
    die(
      `${WEATHER_UNIT} is named by no section.\n`
      + `  It taught \`il fait\` + an adjective "as one frozen form and never conjugated" — its own grammarIntroduced\n`
      + `  says so — and this lesson is where those phrases stop being frozen. That has to be said to the learner.`,
    );
  }
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === WEATHER_SECTION_ID);
  if (!sec) die(`${WEATHER_SECTION_ID} is gone, and with it the screen that unfreezes ${WEATHER_UNIT}'s phrases`);
  if (sec.type !== 'groupDrill') die(`${WEATHER_SECTION_ID} is a ${sec.type}, expected a groupDrill`);
  const shown = (sec.groups[0].items ?? []).map((it) => it.itemId);
  if (shown.join() !== FAIRE_DIRE_LIRE_GROUPED.be.join()) die(`${WEATHER_SECTION_ID} shows ${shown.length} weather expressions, expected the ${FAIRE_DIRE_LIRE_GROUPED.be.length} in the group`);
  /** AND ALL FIVE ARE IMPORTED, NOT AUTHORED. If one is ever authored, this
   *  build has started writing a1.10's material. */
  const authoredWeather = FAIRE_DIRE_LIRE_GROUPED.be.filter((id) => AUTHORED_IDS.includes(id));
  if (authoredWeather.length) die(`${authoredWeather.join(', ')} is a weather expression this build AUTHORED. All five are ${WEATHER_UNIT}'s and are imported by id.`);
  const notMeteo = FAIRE_DIRE_LIRE_GROUPED.be.filter((id) => IMPORTED_ROWS.find((r) => r.id === id)?.theme !== 'meteo');
  if (notMeteo.length) die(`${notMeteo.join(', ')} is in the weather group and does not come from the meteo theme`);
  console.log(`  the ${WEATHER_UNIT} loop: ${WEATHER_SECTION_ID}, ${shown.length} phrases, all imported from meteo, 0 authored`);
}

/* ── The quiz, needed before the production-surface scope is built ───────── */

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz || quiz.type !== 'quiz') die('no quiz section');
const qs = quizQuestions(quiz);

/** WHAT THE LEARNER IS ASKED TO PRODUCE OR CHOOSE, plus the vocabulary decks.
 *  Narrower than "a section", and the only scope on which the neighbour guards
 *  are honest: s16-notmine NAMES the weather and the shopping in order to hand
 *  them back, which is the lesson doing its job rather than crossing a boundary.
 *  A guard that fires on that is a guard the next author deletes. */
function producedStrings(): string[] {
  const out: string[] = [];
  for (const q of qs) {
    if (q.answer) out.push(q.answer);
    if (q.target) out.push(q.target);
    for (const a of q.accept ?? []) out.push(a);
    // EVERY option, not only the correct one. A learner reads all four and has
    // to consider each, so a neighbour's material in a distractor is still a
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
    if (s.type === 'tapTable') for (const r of s.rows) out.push(...strings(r));
  }
  return out;
}

const PRODUCTION_SURFACES = [...producedStrings(), ...deckStrings()];
if (PRODUCTION_SURFACES.length < 300) die(`the production-surface scope collapsed to ${PRODUCTION_SURFACES.length} strings, so every neighbour guard below would pass vacuously`);

/* ── THE NEIGHBOURS' MATERIAL STAYS THEIRS ───────────────────────────────── */
{
  const weather = WEATHER_VOCAB.filter((w) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, w)));
  if (weather.length) {
    die(
      `${WEATHER_UNIT}'s weather vocabulary reached a production surface: ${weather.join(', ')}\n`
      + `  This lesson borrows five \`il fait\` phrases and teaches NOT ONE weather word. A learner leaves it able to\n`
      + `  say il fait beau and no better at naming the sky than they were.`,
    );
  }
  const shopping = SHOPPING_VOCAB.filter((w) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, w)));
  if (shopping.length) {
    die(`${SHOPPING_UNIT}'s shopping vocabulary reached a production surface: ${shopping.join(', ')}. faire les courses is an expression here and a topic there.`);
  }
  const futur = PRODUCTION_SURFACES.filter((s) => FUTUR_PROCHE_SHAPE.test(s));
  if (futur.length) die(`the futur proche reached a production surface: ${[...new Set(futur)].slice(0, 4).map((s) => JSON.stringify(s)).join(', ')}. That is a2.19.`);
  const modal = PRODUCTION_SURFACES.filter((s) => MODAL_SHAPE.test(s));
  if (modal.length) die(`a modal plus a naming form reached a production surface: ${[...new Set(modal)].slice(0, 4).map((s) => JSON.stringify(s)).join(', ')}. That is ${MODAL_UNIT}, the very next lesson.`);
  const reported = PRODUCTION_SURFACES.filter((s) => REPORTED_SPEECH_SHAPE.test(s));
  if (reported.length) die(`reported speech reached a production surface: ${[...new Set(reported)].slice(0, 4).map((s) => JSON.stringify(s)).join(', ')}.`);
  console.log(`  neighbours: 0 weather words, 0 shopping words, 0 futur proche, 0 modals, 0 reported speech on ${PRODUCTION_SURFACES.length} production surfaces`);
}

/* ── THE PASSÉ COMPOSÉ IS NOT TAUGHT, AND `fait` MAKES THAT SHARPER ─────── */
{
  const shaped = learnerProse.filter((s) => PASSE_COMPOSE_SHAPE.test(s));
  const phrased = PASSE_COMPOSE_PHRASES.filter((p) => learnerProse.some((s) => hasPhrase(s, p)));
  if (shaped.length || phrased.length) {
    die(
      `a passé composé is on a learner surface: ${[...shaped.slice(0, 3).map((s) => JSON.stringify(s)), ...phrased].join(', ')}\n`
      + `  \`fait\` is this verb's past participle as well as its il form, so \`j'ai fait le lit\` is one word away from a\n`
      + `  screen this lesson already holds. Every authored row is a simple present.`,
    );
  }
}

/** THE THREE VERBS, BY NAME, AND EVERY EXPRESSION ON A SCREEN. */
{
  const missing = THE_THREE.filter((v) => !hasPhrase(learnerText, v));
  if (missing.length) die(`verb(s) named by no screen: ${missing.join(', ')}`);
  const ids = new Set(LESSON.itemIds);
  const unreleased = IMPORTED_VERBS.filter((v) => !ids.has(v.id)).map((v) => v.verb);
  if (unreleased.length) die(`verb(s) on a screen but not in itemIds: ${unreleased.join(', ')}`);
  /** THE READ-ONLY ROWS ARE RELEASED TO NOTHING.
   *
   *  Two separate checks, and conflating them is a mistake this build made once
   *  and had to unpick. NO read-only row may reach `itemIds`, ever: that is what
   *  read-only means and it holds for all three.
   *
   *  The "named on no screen" half is scoped to the read-only rows whose FRENCH
   *  is not also an imported row's. `faire la queue` exists twice — this build
   *  imports fr.b1.tourisme.039 and refuses fr.b1.courses.023 — so the phrase is
   *  legitimately on four screens while the refused ROW is on none. A guard that
   *  read the string alone would fail the build for doing exactly the right
   *  thing, which is invariants §1's shape. */
  const importedFrs = new Set(IMPORTED_ROWS.map((r) => r.fr));
  for (const ro of READ_ONLY_VERBS) {
    if (LESSON.itemIds.includes(ro.id)) die(`${ro.id} (${ro.label}) is in itemIds. It is read from Postgres and released to nothing.`);
    if (importedFrs.has(ro.label)) continue;
    if (hasPhrase(learnerText, ro.label)) die(`"${ro.label}" is on a learner surface. It is read and not imported, and no imported row carries that French.`);
  }
  const silent = READ_ONLY_VERBS.filter((ro) => !importedFrs.has(ro.label));
  /** EVERY UNIT THIS LESSON LEANS ON OR HANDS TO IS CITED BY ID ON A SCREEN.
   *  A boundary with no destination is a warning rather than a teaching, and a
   *  loop closed without naming the earlier unit is a coincidence.
   *
   *  hasPhrase treats `'` as a word character, so `a2.26's` does NOT match a
   *  search for `a2.26`. Both the boundary card and the `notTheNouns` term were
   *  written with an apostrophe-s and this guard is what found it. */
  const CITED = [ETRE_UNIT, AVOIR_UNIT, ALLER_UNIT, WEATHER_UNIT, SHOPPING_UNIT, MODAL_UNIT, WHAT_FOLLOWS_UNIT];
  const uncited = CITED.filter((u) => !hasPhrase(learnerText, u));
  if (uncited.length) {
    die(
      `unit(s) cited on no screen: ${uncited.join(', ')}\n`
      + `  Every one is either a loop this lesson closes (${ETRE_UNIT}, ${AVOIR_UNIT}, ${ALLER_UNIT}, ${WEATHER_UNIT}) or a\n`
      + `  boundary it hands over (${SHOPPING_UNIT}, ${MODAL_UNIT}) or the unit that named the shape (${WHAT_FOLLOWS_UNIT}).\n`
      + `  Check for an apostrophe-s: a word-boundary search reads "'" as a word character, so "${uncited[0]}'s" does not match.`,
    );
  }
  console.log(`  all ${THE_THREE.length} verbs named and released; ${READ_ONLY_VERBS.length} read-only row(s) released to nothing, ${silent.length} named nowhere; ${CITED.length} units cited by id`);
}

/** THE FOUR SECTIONS THAT PUT THE THIRTY ON A SCREEN, and every expression in
 *  exactly one of them. */
{
  const shown = new Map<string, string>();
  for (const sid of EXPRESSION_SECTION_IDS) {
    const s = LESSON.sections.find((x) => (x as { id?: string }).id === sid);
    if (!s) die(`${sid} is gone, and it is one of the four sections that put the thirty on a screen`);
    if (s.type !== 'groupDrill') die(`${sid} is a ${s.type}, expected a groupDrill: it is the only section type that both owns its layout and carries itemIds`);
    for (const g of s.groups) for (const it of g.items ?? []) {
      if (!it.itemId) continue;
      if (shown.has(it.itemId)) die(`${it.itemId} is shown twice, on ${shown.get(it.itemId)} and ${sid}`);
      shown.set(it.itemId, sid);
    }
  }
  const missing = FAIRE_DIRE_LIRE_EXPRESSION_IDS.filter((id) => !shown.has(id));
  if (missing.length) die(`expression(s) in the thirty that no groupDrill shows: ${missing.join(', ')}`);
  console.log(`  the thirty on ${EXPRESSION_SECTION_IDS.length} screens: ${EXPRESSION_SECTION_IDS.map((sid) => `${sid}:${[...shown.values()].filter((v) => v === sid).length}`).join(' ')}`);
}

/** THE nous/on STATEMENT IS a2.01's CONSTANT AND IT HAS EXACTLY ONE HOME. */
{
  if (!learnerText.includes(NOUS_ON)) {
    die(
      'the nous/on statement does not appear verbatim.\n'
      + `  The ledger binds all twenty A2 lessons to a2.01's wording, and this lesson needs it: on takes the il form,\n`
      + `  so the spoken we says on fait, which is the same three letters as the weather's il fait.`,
    );
  }
  const holders = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON))).map((s) => (s as { id?: string }).id);
  if (holders.length !== 1 || holders[0] !== NOUS_ON_SECTION_ID) {
    die(`the nous/on statement is in ${JSON.stringify(holders)}, expected exactly [${JSON.stringify(NOUS_ON_SECTION_ID)}]`);
  }
}

/** THE NEIGHBOURS' REFRAMES ARE IMPORTED AND AVAILABLE. a2.01's and a2.02's are
 *  imported and re-exported rather than pasted, and this guard makes sure they
 *  still resolve: an import nothing checks is an import somebody deletes. */
{
  // Widened to `string` on the way in. Both constants are `const` exports, so
  // tsc narrows them to their literal types and rejects the comparison below as
  // having no overlap — which is tsc being right about today and wrong about the
  // day somebody rewords one of them, which is the day this guard exists for.
  const a201: string = A201_REFRAME;
  const a202: string = A202_REFRAME;
  if (!a201 || !a202) die('a neighbour reframe no longer resolves, so this lesson has quietly stopped tracking them');
  if (a201 === a202) die('a2.01 and a2.02 now carry the same reframe, which means one of the imports is wrong');
  if (a201 === REFRAME || a202 === REFRAME) die('this lesson has adopted a neighbour reframe verbatim');
}

/** THE SCENE'S CONTRAST ROW IS DERIVED FROM TWO CORPUS ROWS, not typed. */
{
  const menage = IMPORTED_ROWS.find((r) => r.fr === 'faire le ménage');
  if (!menage) die('the scene builds its contrast row from `faire le ménage` and that row is not imported');
  const je = FAIRE_DIRE_LIRE.find((w) => w.id === 'fr.a2.verbes.301')!;
  if (!SCENE_RIGHT.fr.startsWith('Je fais ')) die(`the scene's right row is ${JSON.stringify(SCENE_RIGHT.fr)} and must be built from the je cell`);
  if (!SCENE_RIGHT.fr.includes(menage.fr.replace(/^faire /, ''))) die("the scene's right row does not carry the imported expression's object");
  if (!SCENE_RIGHT.respell.startsWith(je.respell!.split(' ').slice(0, 2).join(' '))) die("the scene's respelling does not start with the je cell's own");
  const tail = (menage.respell ?? '').replace(/^FEHR /, '');
  if (!SCENE_RIGHT.respell.endsWith(tail)) die(`the scene's respelling does not end with the imported row's own tail ${JSON.stringify(tail)}`);
  /** AND IT FITS. Ledger §7: a reading row over about 22 characters wraps and
   *  costs the card a line it does not have. */
  if (SCENE_RIGHT.fr.length > 22) die(`the scene's right reading row is ${SCENE_RIGHT.fr.length} characters and wraps past about 22`);
  console.log(`  the scene contrast: ${JSON.stringify(SCENE_RIGHT.fr)} [${SCENE_RIGHT.respell}], both halves derived`);
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
    if (!matchesAccept(q.answer ?? '', q.accept ?? [])) die(`free-text question does not accept the answer it displays: ${q.answer}`);
  }
  if (q.format === 'speak' && !q.target) die(`speak question has no target: ${q.q}`);
  /** A `listenChoose` whose options are the thing being heard needs `say`, or
   *  ListenChooseCard speaks opts[correct]. */
  if (q.format === 'listenChoose' && !q.say) die(`listenChoose without a say: ${q.q}`);
}

/** NO EAR QUESTION MAY ASK BETWEEN TWO FORMS THAT ARE ONE SOUND.
 *
 *  `fais`, `fais` and `fait` are identical out loud, and so are the dire three
 *  and the lire three. A `listenChoose` offering two of them has no correct
 *  answer and marking one right would certify a bug.
 *
 *  Checked as "these two options differ ONLY by a member of one homophone
 *  group", not as "two options mention homophones", because a question offering
 *  « Il fait le lit. » against « Ils font le lit. » is legitimate: those two are
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
      + `  No recording separates fais from fait, dis from dit, or lis from lit. Ask that one as typeIn or errorSpot.`,
    );
  }
  console.log(`  no listenChoose asks between two forms that are one sound (${HOMOPHONE_FORMS.length} groups checked)`);
}

/** THE QUIZ WEIGHT IS ON THE OWNS, and it is measured rather than intended.
 *
 *  The Owns is the reach and the paradigms are the scaffolding. A question
 *  touches the Owns when it quotes one of the thirty expressions anywhere the
 *  learner reads: the stem, the answer, what is accepted, or any option. If the
 *  balance ever tips back to the forms, this lesson has become the memorisation
 *  task doctrine §B.5 warns about. */
{
  /** AN EXPRESSION IS IDENTIFIED BY ITS OBJECT, not by the whole phrase.
   *
   *  FOUND BY RUNNING THIS GUARD. The first version looked for `faire les
   *  courses` verbatim and counted 10 of 30, because the best questions in the
   *  quiz put a FORM and an expression together: « Ils ___ les courses le
   *  samedi. » and « Il fait la cuisine ce soir. » are exactly what the canDo
   *  asks for and neither contains the naming form. Matching on the object is
   *  what the learner is actually choosing between. */
  const objects = FAIRE_DIRE_LIRE_EXPRESSION_IDS
    .map((id) => [...AUTHORED_ITEMS, ...IMPORTED_ROWS].find((r) => r.id === id)!.fr.replace(/^(faire |il fait )/, ''));
  /** The `why` is deliberately NOT in scope. It is read after the answer and a
   *  question can explain an expression without ever asking about one. */
  const visible = (q: (typeof qs)[number]) => `${q.q} ${q.answer ?? ''} ${q.target ?? ''} ${(q.accept ?? []).join(' ')} ${(q.opts ?? []).join(' ')}`;
  const owns = qs.filter((q) => objects.some((o) => hasPhrase(visible(q), o)));
  if (owns.length * 2 < qs.length) {
    die(
      `only ${owns.length} of ${qs.length} quiz questions touch one of the ${EXPRESSION_TARGET}.\n`
      + `  The Owns is the reach and the paradigms are the scaffolding. A quiz weighted the other way is the fifth\n`
      + `  consecutive table lesson this build exists not to write.`,
    );
  }
  /** AND THE SHARPER HALF: how many questions make the learner CHOOSE between
   *  expressions, which is what the canDo actually asks for. Touching one is
   *  cheap — the faire paradigm runs on `faire le lit`, so a pure form question
   *  touches an expression by construction. Choosing between three or four of
   *  them in a described situation is the thing this lesson claims to teach. */
  const choosing = qs.filter((q) => (q.opts ?? []).filter((o) => objects.some((ob) => hasPhrase(o, ob))).length >= 2);
  const MIN_CHOOSING = 6;
  if (choosing.length < MIN_CHOOSING) {
    die(
      `only ${choosing.length} quiz questions make the learner choose between expressions, expected at least ${MIN_CHOOSING}.\n`
      + `  Touching an expression is cheap because the ${THE_VERB} paradigm runs on one of them. Choosing between\n`
      + `  several of them in a situation is what the canDo asks for and what the reach is worth.`,
    );
  }
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? ''));
  /** THE THREE BREAKING CELLS ARE TESTED WHERE THEY CAN BE. The brief is
   *  explicit: typeIn for the irregular cells, because no ear question can catch
   *  `faisez` and an mcq shows the learner the answer. */
  const cells = BREAKS.map((b) => b.form);
  const cellQs = typed.filter((q) => cells.some((c) => hasPhrase(`${q.answer ?? ''} ${(q.accept ?? []).join(' ')}`, c)));
  if (cellQs.length < BREAKS.length) {
    die(`only ${cellQs.length} typed questions make the learner produce one of the ${BREAKS.length} breaking cells (${cells.join(', ')}), and that is the error the lesson exists to stop`);
  }
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  if (listen < 2) die(`${listen} listenChoose questions; the number contrast is genuinely audible on all three verbs and the brief asks for one`);
  if (listen > 5) die(`${listen} listenChoose questions. The ear settles only the number here, and the reach is not audible at all.`);
  if (typed.length <= listen * 2) die(`${typed.length} typed against ${listen} listenChoose; the written half has to carry this quiz`);
  console.log(`  quiz: ${qs.length} questions, ${owns.length} touching an expression and ${choosing.length} choosing between them, ${mcq} mcq, ${typed.length} typed (${cellQs.length} on a breaking cell), ${listen} listenChoose, formats ${[...new Set(qs.map((q) => q.format ?? 'mcq'))].sort().join('/')}`);
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

/** EVERY SITUATION QUESTION CARRIES THE SITUATION. The brief is explicit: every
 *  question about an expression needs the situation in the stem, because
 *  "which one means to cook" is a translation exercise and "the guests arrive at
 *  seven and nothing is on the stove" is the thing the canDo asks for.
 *
 *  Measured as: a question whose OPTIONS are three or more expressions must have
 *  a stem longer than the options it is choosing between. */
{
  const expressions = new Set(FAIRE_DIRE_LIRE_EXPRESSION_IDS.map((id) => [...AUTHORED_ITEMS, ...IMPORTED_ROWS].find((r) => r.id === id)!.fr));
  const thin: string[] = [];
  for (const q of qs) {
    const opts = q.opts ?? [];
    const n = opts.filter((o) => expressions.has(o)).length;
    if (n < 3) continue;
    if (q.q.trim().split(/\s+/).length < 8) thin.push(q.q);
  }
  if (thin.length) {
    die(
      `question(s) choosing between expressions with no situation in the stem:\n    ${thin.join('\n    ')}\n`
      + `  The canDo is about using these in a real moment. A stem that only names the meaning is a translation test.`,
    );
  }
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
  /** ReferenceSheet.tsx draws these three and nothing else. A cheatSheet inside
   *  a sheet draws its title and no rows, which a1.13 ships today. */
  const SHEET_RENDERS = new Set(['teach', 'letterGrid', 'table']);
  const dead = (LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? [])
    .filter((sec) => !SHEET_RENDERS.has(sec.type))
    .map((sec) => `${sh.id}: a ${sec.type} section, which the sheet renderer does not draw`));
  if (dead.length) die(dead.join('\n  '));

  const sheet = (LESSON.sheets ?? []).find((s) => s.id === SHEET_ID)!;
  /** THE TABLE THIS SHEET EXISTS FOR: the thirty, sorted by the English verb.
   *  This is what makes the sheet worth shipping when four ending sheets already
   *  exist in the band. */
  const thirty = (sheet.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-thirty');
  if (!thirty || thirty.type !== 'table') die(`${SHEET_ID} no longer holds the table of the ${EXPRESSION_TARGET}`);
  if (thirty.rows.length !== EXPRESSION_TARGET) die(`the expression table has ${thirty.rows.length} rows, expected ${EXPRESSION_TARGET}`);
  /** AND THE PARADIGM GRID, all three verbs side by side, which is what makes
   *  the control case visible. */
  const grid = (sheet.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-three-verbs');
  if (!grid || grid.type !== 'table') die(`${SHEET_ID} no longer holds the three-verb grid, which is the one table the brief asked for`);
  if (grid.cols.length !== THE_THREE.length + 1) die(`the grid has ${grid.cols.length} columns, expected ${THE_THREE.length + 1}: a pronoun and one per verb`);
  if (grid.rows.length !== PARADIGM.length) die(`the grid has ${grid.rows.length} rows, expected ${PARADIGM.length}`);
  PARADIGM.forEach((r, i) => {
    const row = grid.rows[i];
    if (row.join('|') !== [r.person, r.faire, r.dire, r.lire].join('|')) {
      die(`grid row ${i + 1} reads ${JSON.stringify(row)} and PARADIGM says ${JSON.stringify([r.person, r.faire, r.dire, r.lire])}`);
    }
  });
  const clubs = (sheet.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-clubs');
  if (!clubs || clubs.type !== 'table') die(`${SHEET_ID} no longer holds the two-club table`);
  if (clubs.rows.length !== 2) die(`the club table has ${clubs.rows.length} rows, expected 2`);
  console.log(`  the sheet: ${SHEET_ID}, ${sheet.sections?.length} sections, ${thirty.rows.length} expressions and the grid asserted cell by cell`);
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
  /** THE THIRTY ARE RELEASED BY THE ACT THAT TEACHES THEM, act 3. */
  const act3 = tranche[2] ?? [];
  if (act3.join() !== FAIRE_DIRE_LIRE_EXPRESSION_IDS.join()) die(`act 3 releases ${act3.length} items and the thirty are ${FAIRE_DIRE_LIRE_EXPRESSION_IDS.length}`);
  console.log(`  ${seen.size} items released across ${tranche.length} tranches, each exactly once; act 3 releases all ${act3.length} expressions`);
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

/* ── THE OWNS ACT IS THE HEAVIEST, MEASURED ─────────────────────────────── */
{
  const acts = LESSON.acts ?? [];
  const owns = acts.find((a) => a.id === 'act3');
  const para = acts.find((a) => a.id === 'act2');
  if (!owns || !para) die('act2 or act3 is gone');
  if (owns.sections.length <= para.sections.length) {
    die(
      `the Owns act holds ${owns.sections.length} missions and the paradigm act holds ${para.sections.length}.\n`
      + `  Doctrine §B.5 is explicit: if the act structure gives the paradigm more missions than the Owns, the wrong\n`
      + `  lesson was built. This is the first lesson in batch 1 where the paradigm is genuinely not the point.`,
    );
  }
  const claimed = acts.flatMap((a) => a.sections);
  if (new Set(claimed).size !== claimed.length) die('a section is claimed by two acts');
  if (claimed.length !== LESSON.sections.length) die('a section belongs to no act');
  console.log(`  acts: ${acts.map((a) => `${a.id}:${a.sections.length}`).join(' ')} — Owns ${owns.sections.length} > paradigm ${para.sections.length}`);
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

  /* THE MANIFEST IS A RECORDED READ AND IT IS VERIFIED FIELD BY FIELD. Two rows
     are repaired by this build, so `respell` is checked against the value the
     repair EXPECTS rather than against the manifest blindly: a row somebody else
     has already fixed must not be fixed twice, and a row somebody else has
     changed to a third value must stop the build. */
  const drift: string[] = [];
  const repairById = new Map(RESPELL_REPAIRS.map((r) => [r.id, r] as const));
  for (const row of [...IMPORTED_ROWS, ...READ_ONLY_VERBS.map((b) => b.row)]) {
    const id = row.id;
    const x = byId.get(id);
    if (!x) { drift.push(`${id} is no longer in Postgres`); continue; }
    if (x.status !== 'published') drift.push(`${id} is ${x.status}, not published`);
    if (x.fr !== row.fr) drift.push(`${id} fr: manifest ${JSON.stringify(row.fr)} vs db ${JSON.stringify(x.fr)}`);
    if (x.en !== row.en) drift.push(`${id} en: manifest ${JSON.stringify(row.en)} vs db ${JSON.stringify(x.en)}`);
    if (x.theme !== row.theme) drift.push(`${id} theme: manifest ${JSON.stringify(row.theme)} vs db ${JSON.stringify(x.theme)}`);
    const fix = repairById.get(id);
    const legal = fix ? [fix.from, fix.to] : [row.respell ?? null];
    if (!legal.includes(x.respell ?? null)) {
      drift.push(`${id} respell: db says ${JSON.stringify(x.respell)}, legal values are ${JSON.stringify(legal)}`);
    }
    /* Drills are checked as a SUBSET rather than an equality, because this build
       ADDS `flashcard` to three rows and a re-run must be a no-op. Anything the
       manifest holds must still be there; extra values are somebody's addition
       or this build's own, and neither is a failure. */
    const now = new Set(pgArray(x.drills));
    const lost = (row.drills ?? []).filter((d) => !now.has(d));
    if (lost.length) drift.push(`${id} has LOST drill(s) ${lost.join(',')}: db says ${JSON.stringify([...now])}`);
  }
  if (drift.length) {
    c.release(); await pool.end();
    die(`the recorded manifest has DRIFTED from Postgres:\n  ${drift.slice(0, 8).join('\n  ')}\n  Regenerate with pnpm tsx scripts/_a212_manifest.ts`);
  }
  console.log(`  manifest verified against Postgres: ${touched.length} rows, field by field`);

  /** NOT ONE NAMING FORM MAY CARRY A GENDER. `lire` has a gendered twin at
   *  fr.a1.ecole.048; importing that row instead is what the brief warns about
   *  and this proves the right one was taken. */
  {
    const gendered = IMPORTED_VERBS.filter((v) => byId.get(v.id)?.gender);
    if (gendered.length) {
      c.release(); await pool.end();
      die(`imported naming form(s) carrying a gender: ${gendered.map((v) => `${v.verb} (${v.id})`).join(', ')}. A naming form is not a noun.`);
    }
  }

  /** EVERY RELEASED ROW MUST CARRY A `flashcard` DRILL AFTER THIS BUILD RUNS,
   *  because every one is released by a tranche and served as a hub card. Three
   *  carry {voiceflash, review} only and this build adds one to each; the check
   *  is against the POST-BUILD state. */
  {
    const additions = new Set(DRILL_ADDITIONS.map((d) => d.id));
    const short = IMPORTED_ROWS.filter((r) => !pgArray(byId.get(r.id)?.drills).includes('flashcard') && !additions.has(r.id));
    if (short.length) {
      c.release(); await pool.end();
      die(`row(s) released to the hub with no flashcard drill and no addition planned: ${short.map((r) => `${r.fr} (${r.id})`).join(', ')}`);
    }
    /** AND EVERY PLANNED ADDITION IS ON A ROW THIS LESSON ACTUALLY RELEASES. An
     *  addition to a row nothing releases is an edit to somebody else's row for
     *  nothing. A row that ALREADY has the drill is not an error: on a re-run
     *  this build put it there, and the union is idempotent. */
    const stray = DRILL_ADDITIONS.filter((d) => !LESSON.itemIds.includes(d.id));
    if (stray.length) {
      c.release(); await pool.end();
      die(`drill addition(s) to rows this lesson does not release: ${stray.map((d) => d.id).join(', ')}`);
    }
    const already2 = DRILL_ADDITIONS.filter((d) => pgArray(byId.get(d.id)?.drills).includes(d.add));
    if (already2.length) console.log(`  ${already2.length} drill addition(s) already applied: this is a re-run`);
    console.log(`  drills: ${DRILL_ADDITIONS.length} addition(s) planned, ${IMPORTED_ROWS.length - short.length} rows ready for the hub`);
  }

  /** THE THREE NO-RESPELL ROWS REALLY HAVE NONE. Named in the corpus rather than
   *  left to be found on a device, and re-checked here so the day somebody fills
   *  one in, the list shrinks rather than going stale. */
  {
    const wrong = NO_RESPELL_IDS.filter((id) => byId.get(id)?.respell);
    if (wrong.length) {
      console.log(`  NOTE: ${wrong.length} row(s) in NO_RESPELL_IDS now HAVE a respelling: ${wrong.join(', ')}. Trim the list and the cards will show it.`);
    }
    const surprise = IMPORTED_ROWS.filter((r) => !byId.get(r.id)?.respell && !NO_RESPELL_IDS.includes(r.id));
    if (surprise.length) {
      c.release(); await pool.end();
      die(`row(s) with no respelling that are not in NO_RESPELL_IDS: ${surprise.map((r) => `${r.fr} (${r.id})`).join(', ')}. Name the gap rather than shipping a silent one.`);
    }
    console.log(`  ${NO_RESPELL_IDS.length} imported row(s) display with no bracket, named in NO_RESPELL_IDS`);
  }

  /** THE THIRTY ARE NOT RE-AUTHORED. Every imported expression must still be
   *  somebody else's row, and none of them may appear in this build's own
   *  authored corpus. */
  {
    const stolen = IMPORTED_EXPRESSION_IDS.filter((id) => AUTHORED_IDS.includes(id));
    if (stolen.length) {
      c.release(); await pool.end();
      die(`${stolen.join(', ')} is both imported and authored. Those rows belong to other themes and this build only reads them.`);
    }
  }

  /* The ids this lesson claims must be free, and the check is a COUNT as well as
     a maximum. THE MAXIMUM IS NO USE AT ALL HERE: a2.10.l2 took .461..500, above
     the whole batch-1 reservation, so `max` has been past this block since
     before it was claimed. The row count is the only signal left. */
  const range = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.verbes.%'",
  );
  const before = Number(range.rows[0].n);
  const claimed = await c.query<{ id: string; fr: string; theme: string }>(
    'select id, fr, theme from content_items where id = any($1)', [AUTHORED_ITEMS.map((i) => i.id)],
  );
  // A row already at this id is only a collision if it is SOMEBODY ELSE'S. If
  // the fr and theme match, this batch has already run and is being re-run.
  const foreign = claimed.rows.filter((r) => {
    const mine = AUTHORED_ITEMS.find((a) => a.id === r.id);
    return !mine || mine.fr !== r.fr || mine.theme !== r.theme;
  });
  if (foreign.length) {
    c.release(); await pool.end();
    die(`id(s) taken in Postgres by DIFFERENT content: ${foreign.map((r) => `${r.id} "${r.fr}" (${r.theme})`).join(', ')}. A concurrent build has landed inside your block.`);
  }
  /** AND THE ROW COUNT IS WHAT THE LEDGER SAYS, or somebody has landed inside a
   *  block. On a re-run the count is already `before + everything applied`. */
  if (before !== ROW_COUNT_BEFORE && before !== ROW_COUNT_BEFORE + AUTHORED_ITEMS.length) {
    c.release(); await pool.end();
    die(
      `fr.a2.verbes holds ${before} rows. The ledger's figure when this block was claimed was ${ROW_COUNT_BEFORE},\n`
      + `  and a completed re-run would be ${ROW_COUNT_BEFORE + AUTHORED_ITEMS.length}. Anything else means a concurrent build has landed.\n`
      + `  a1.20 lost an hour to exactly this, because a highest-id check cannot see a lesson landing BELOW the top.`,
    );
  }
  if (claimed.rows.length) console.log(`  ${claimed.rows.length} authored id(s) already present with matching content: this is a re-run`);
  console.log(`  fr.a2.verbes: ${before} rows (ledger says ${ROW_COUNT_BEFORE}), max ${range.rows[0].mx}, claiming ${AUTHORED_ITEMS[0].id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1].id}`);

  /* No two non-sentence rows in one theme may share an `fr`. SEVEN authored rows
     here ARE non-sentences, which is new in this band, so this is a real check
     rather than a formality. */
  {
    const phrases = AUTHORED_ITEMS.filter((i) => i.kind !== 'sentence');
    if (phrases.length !== EXPECTED_AUTHORED_EXPRESSIONS) {
      c.release(); await pool.end();
      die(`${phrases.length} authored non-sentence rows, expected ${EXPECTED_AUTHORED_EXPRESSIONS}`);
    }
    const clash = await c.query<{ id: string; fr: string }>(
      "select id, fr from content_items where theme = $1 and kind <> 'sentence' and fr = any($2::text[]) and id <> all($3::text[])",
      [THEME, phrases.map((p) => p.fr), phrases.map((p) => p.id)],
    );
    if (clash.rowCount) {
      c.release(); await pool.end();
      die(`fr collision inside theme "${THEME}": ${clash.rows.map((r) => `${r.id} "${r.fr}"`).join(', ')}. flashhub-coverage treats that as one card served twice.`);
    }
    console.log(`  ${phrases.length} authored phrases, 0 fr collisions inside "${THEME}"`);
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
        + `  "le lit", "bonjour" and "le menu" for exactly this reason, and Nous disons bonjour. is 17 letters and is\n`
        + `  deliberately not a target.`,
      );
    }
    if (!row.drills?.includes('dictation')) { c.release(); await pool.end(); die(`dictée target ${id} carries no dictation drill`); }
  }

  /** AND ALL THREE BREAKING CELLS ARE IN THE DICTÉE. That is the whole reason
   *  the frames are what they are: one more letter in either and the learner
   *  would have been handed the form on a tile. */
  {
    const inDictee = BREAKS.filter((b) => DICTATION_IDS.some((id) => hasPhrase(AUTHORED_ITEMS.find((i) => i.id === id)!.fr, b.form)));
    if (inDictee.length !== BREAKS.length) {
      c.release(); await pool.end();
      die(`only ${inDictee.length} of the ${BREAKS.length} breaking cells are dictée targets, and the dictée is the only surface that can test a spelling`);
    }
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
    /** THE ERROR THE LESSON EXISTS TO STOP MUST BE GRADEABLE. */
    const theOne = DICTEE_NEAR_MISS.find((d) => d.wrong === 'Vous faisez le lit.');
    if (!theOne?.scorable) { c.release(); await pool.end(); die('the dictée no longer grades faisez, and that is the error the lesson exists to stop'); }
    /** AND THE ONE IT CANNOT SETTLE IS NAMED. */
    const unscorable = DICTEE_NEAR_MISS.filter((d) => !d.scorable);
    if (unscorable.length !== 1) {
      c.release(); await pool.end();
      die(`${unscorable.length} unscorable dictée targets, expected exactly 1 (the sentence-initial capital). Naming the limit is half of what the table is for.`);
    }
    console.log(`  dictée: ${DICTATION_IDS.length} targets, all letters mode, ${DICTEE_NEAR_MISS.length - unscorable.length} graded on the distinction and ${unscorable.length} not (${unscorable[0].id}, the capital)`);
  }

  /* Every speak target must carry voiceflash. */
  for (const id of FAIRE_DIRE_LIRE_SPEAK_IDS) {
    const mine = AUTHORED_ITEMS.find((i) => i.id === id);
    const live2 = byId.get(id);
    const drills = mine ? (mine.drills ?? []) : pgArray(live2?.drills);
    if (!drills.includes('voiceflash')) {
      c.release(); await pool.end();
      die(`speak target ${id} carries no voiceflash, so the mic-scored deck cannot score it`);
    }
  }
  console.log(`  speak: ${FAIRE_DIRE_LIRE_SPEAK_IDS.length} targets, all voiceflash`);

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
  if (!(unit.prereqUnitIds ?? []).includes('a2.02')) {
    c.release(); await pool.end();
    die(`unit ${UNIT_ID} declares prereqUnitIds ${JSON.stringify(unit.prereqUnitIds ?? [])}, and this lesson rests on a2.02`);
  }
  /** AND THE SUB SAYS NOTHING ABOUT A COUNT. The brief says "The `sub` says
   *  thirty and the Den advertises it. Count what you ship." Measured: the
   *  database `sub` is the verb list and holds no number at all, so nothing in
   *  the product had to be padded to meet one. Checked rather than reported,
   *  because a `sub` that later gains a number would make the claim false
   *  silently. */
  /*  Looking for a COUNT rather than for any digit. The sub reads "Irréguliers 2"
      and that 2 is this unit's place in the irregular-verbs series, not a number
      of anything: a bare `/\d/` fired on it and would have failed the build for
      a true statement, which is invariants §1's shape. */
  const COUNT_SHAPE = /(^|[^a-zà-ÿ0-9])(\d{2,}|thirty|trente)(?![a-zà-ÿ0-9])/i;
  if (COUNT_SHAPE.test(String(unit.sub)) || COUNT_SHAPE.test(String(unit.canDo))) {
    c.release(); await pool.end();
    die(`the unit's sub or canDo now carries a count: sub ${JSON.stringify(unit.sub)}, canDo ${JSON.stringify(unit.canDo)}. This build ships ${EXPRESSION_TARGET} expressions; check they agree.`);
  }
  const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) {
    c.release(); await pool.end();
    die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${JSON.stringify(unit.seq)}, so the header will draw ${JSON.stringify(expectedTag)}`);
  }
  /** WHICH UNITS REST ON THIS ONE. a2.02's batch DIES when nothing does, because
   *  the brief calls it the hinge of batch 1. THIS UNIT IS A LEAF: measured
   *  2026-08-12, no unit at any level declares a2.12 as a prerequisite, and that
   *  is a fact about the trail rather than a fault in the build. It is REPORTED
   *  rather than fatal, so the day something does depend on it the line changes
   *  and somebody sees it. Copying a2.02's version verbatim would have failed
   *  this build for a true statement. */
  const dependents = await c.query<{ id: string; seq: number }>(
    "select body->>'id' id, (body->>'seq')::int seq from content_units where kind = 'curriculum_unit' and body->'prereqUnitIds' ? $1 order by 2", [UNIT_ID],
  );
  console.log(
    dependents.rowCount === 0
      ? `  ${UNIT_ID} is a LEAF: no unit declares it as a prerequisite. Measured, not assumed; a2.13 rests on a2.02 rather than on this.`
      : `  ${dependents.rowCount} unit(s) now rest on ${UNIT_ID}: ${dependents.rows.map((r) => `${r.id}(seq ${r.seq})`).join(' ')}`,
  );

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
    // THE REPAIRS. Guarded by the STORED value, so a row somebody else has
    // already fixed is left alone and a row somebody else has changed to a third
    // value is not silently overwritten.
    for (const r of RESPELL_REPAIRS) {
      await c.query('update content_items set respell = $2 where id = $1 and respell = $3', [r.id, r.to, r.from]);
    }
    // THE DRILL ADDITIONS. `drills` is an ENUM ARRAY (drill_kind[]), not text[]:
    // concatenating a text[] onto it fails with "operator does not exist:
    // drill_kind[] || text[]" and takes the whole transaction with it. The
    // double cast is the only route. Ledger §5.
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

  /* THE REPAIRS AND THE ADDITIONS LANDED. Read back rather than assumed: a
     guarded update that matched nothing reports success and changes nothing. */
  const after = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.verbes.%'",
  );
  const check = await c.query<{ id: string; respell: string | null; drills: string[] }>(
    'select id, respell, drills from content_items where id = any($1)',
    [[...RESPELL_REPAIRS.map((r) => r.id), ...DRILL_ADDITIONS.map((d) => d.id)]],
  );
  const post = new Map(check.rows.map((r) => [r.id, r] as const));
  const failed: string[] = [];
  for (const r of RESPELL_REPAIRS) if (post.get(r.id)?.respell !== r.to) failed.push(`${r.id} respell is ${JSON.stringify(post.get(r.id)?.respell)}, expected ${JSON.stringify(r.to)}`);
  for (const d of DRILL_ADDITIONS) if (!pgArray(post.get(d.id)?.drills).includes(d.add)) failed.push(`${d.id} still has no ${d.add} drill`);
  if (failed.length) { c.release(); await pool.end(); die(`the transaction committed and these did not land:\n  ${failed.join('\n  ')}`); }

  console.log(
    `\n  applied to Postgres:\n`
    + `    ${AUTHORED_ITEMS.length} rows authored, ${AUTHORED_ITEMS[0].id}..${AUTHORED_ITEMS[AUTHORED_ITEMS.length - 1].id}\n`
    + `      ${PARADIGM_IDS.length} paradigm sentences and ${AUTHORED_EXPRESSION_IDS.length} expressions\n`
    + `    ${RESPELL_REPAIRS.length} respellings repaired, ${DRILL_ADDITIONS.length} drill addition(s), all verified after the commit\n`
    + `    ${IMPORTED_VERBS.length} naming forms and ${IMPORTED_EXPRESSIONS.length} expressions imported by id out of ${SOURCE_THEMES.length} themes, 0 authored\n`
    + `    ${READ_ONLY_VERBS.length} row(s) read and not imported: ${READ_ONLY_VERBS.map((b) => b.label).join(', ')}\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items, ${EXPRESSION_TARGET} expressions\n`
    + `    fr.a2.verbes row count: ${before} before, ${after.rows[0].n} after (max ${after.rows[0].mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-faire-dire-lire-into-seed.ts\n`,
  );

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
