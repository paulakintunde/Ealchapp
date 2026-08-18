/* Applies a2.11.l1 "Les verbes en -RE" to Postgres: 24 authored rows, 6
 * respelling repairs, 0 drill additions, and the lesson (a FIRST build, v1 — the
 * unit dump says `"lessons": []` and that was probed rather than assumed).
 * Validates EVERYTHING before it opens a transaction.
 *
 *     pnpm tsx scripts/author-verbes-re-batch.ts --dry-run
 *     pnpm tsx scripts/author-verbes-re-batch.ts
 *
 * Order matters and it has cost real work twice: apply to Postgres FIRST, merge
 * into the seed SECOND, and publish only when both agree. content:publish
 * regenerates seed.json FROM this database, so publishing before applying would
 * silently delete the lesson from the seed. Publishing is BLOCKED today anyway
 * and is not part of a lesson build.
 *
 * ── THE THINGS TO READ BEFORE RUNNING THIS ────────────────────────────────
 *
 * 1. DO NOT RUN `pnpm content:verbes`. scripts/author-verbes-batch.ts declares
 *    `fr.a2.verbes.016 = 'les devoirs'` and `fr.a2.verbes.019 = 'le vélo'` while
 *    Postgres holds `rentrer` and `demander` at those ids, and it upserts by id.
 *    Ledger §0.
 *
 * 2. THIS LESSON AUTHORS NO INFINITIVE. All seven already exist and are imported
 *    by id, and so do both verbs it names as exceptions. The manifest in
 *    data/verbes-re-rows.gen.ts is a recorded read and is verified field by field
 *    below; a stale manifest puts the lesson ahead of rows nobody has looked at.
 *
 * 3. THE NASAL CHECKER CANNOT SEE ELEVEN OF THIS LESSON'S NASALS. A regular -RE
 *    stem ends in d, so every plural form and every infinitive puts the nasal
 *    INSIDE a token and `hasPlainNasalFor` needs it to end one. Six of the seven
 *    repairs are therefore invisible to it, and a2.10's repair guard would reject
 *    four of them as "not a violation". The guards below run in BOTH directions
 *    and assert the eleven BY NAME.
 *
 * 4. a1.03 DOES NOT MOVE. Every authored row is a `sentence` with no `gender` and
 *    no bare single-word `fr`, so none can join a1.03's measured ending
 *    population. Proved through the REAL `endingPopulation`.
 *
 * 5. THE THREE CELLS ARE A LAYOUT CLAIM AND ARE CHECKED AS ONE. `il parle`,
 *    `il finit` and `il vend` must be the three rows of ONE tapTable, in trail
 *    order, each with its own audio. That is asserted by row index below, not by
 *    "the three strings appear somewhere".
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
  AUTHORED_IDS, BARE_CELL, BARE_FORM_IDS, BLIND_NASALS, BLIND_NASALS_IMPORTED,
  DICTATION_IDS, DICTEE_NEAR_MISS, DRILL_ADDITIONS, D_PAIRS, D_SOUNDING_ENDINGS,
  ENDINGS, HALF_REPAIRED_ENTENDRE, HOMOPHONE_FORMS, NOT_THIS_FAMILY,
  NOT_THIS_FAMILY_COMPOUNDS, NOT_THIS_FAMILY_FORMS, NOT_THIS_FAMILY_UNIT,
  OVER_GENERALISED_FORMS, OWNED_ID_RANGE, PRONOUN_BLIND_PAIRS, RESPELL_REPAIRS,
  RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE, SHEET_DECISION,
  SINGULAR_TRIPLES, THEME, THE_SEVEN, THREE_CELLS, VERBES_RE, afterPronoun, personIds, toItem,
} from './data/verbes-re-corpus.ts';
import { BOUNDARY_VERBS, IMPORTED_ROWS, IMPORTED_VERBS } from './data/verbes-re-imported.ts';
import { namesUnitLabel } from './data/_unit-ref.ts';
import {
  A201_REFRAME, A210_REFRAME, BACKREFS, BOUNDARY_SECTION_ID, CELLS_ROW_IDS,
  CELLS_SECTION_ID, NOUS_ON, NOUS_ON_SECTION_ID, REFRAME, SHEET_ID, THREE_GROUPS,
  VERBES_RE_DICTATION_IDS, VERBES_RE_LESSON, VERBES_RE_SPEAK_IDS,
} from './data/verbes-re-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = VERBES_RE_LESSON;
const UNIT_ID = 'a2.11';

/** Asserted against explicit constants, never figures derived from the lesson. A
 *  derived count compares the content to itself and passes on any rewording. */
/** TEN over the whole lesson object: NINE learner-facing appearances across nine
 *  different sections, plus the `reframe` field itself, which `strings()` walks
 *  like any other. The density validator's own rule counts SECTIONS and wants at
 *  least three; the doctrine says the good lessons use six to eight, and nine is
 *  one over that because the line is short enough to sit at every point of use
 *  without crowding a card: the scene closing, the goals, the placement deck, the
 *  moment the new cell is introduced, the headline table, the deck that argues
 *  the absence, and the three review surfaces. */
const REFRAME_APPEARANCES = 10;
const REFRAME_SECTIONS = 9;
const EXPECTED_SECTIONS = 24;
const EXPECTED_ACTS = 6;
const EXPECTED_TRIGGERS = 5;
const EXPECTED_ROUNDS = 5;
const EXPECTED_QUESTIONS = 30;
const EXPECTED_AUTHORED = 24;
const EXPECTED_IMPORTED_VERBS = 7;
const EXPECTED_BOUNDARY_VERBS = 2;
const EXPECTED_RESPELL_REPAIRS = 6;
const EXPECTED_REPAIRS_VISIBLE = 2;
const EXPECTED_REPAIRS_INVISIBLE = 4;
const EXPECTED_DRILL_ADDITIONS = 0;
const EXPECTED_DICTATION = 11;
/** ONE sheet, and the decision is in the corpus so a future author breaks a
 *  constant rather than shipping a fourth competing reference. */
const EXPECTED_SHEETS = 1;
/** The class that ends in -re and is built another way. If this grows, the card
 *  that says "three" is wrong, so it is a constant rather than a count. */
const EXPECTED_NOT_THIS_FAMILY = 3;
/** How many of the six cells write nothing. ONE, and the whole lesson says so. */
const EXPECTED_BARE_CELLS = 1;
/** ONE tapTable in the flow, and it is the cross-group comparison rather than the
 *  paradigm. The brief asked for one table and one tapTable, then stop. */
const EXPECTED_TAPTABLES = 1;

/** Copied BYTE FOR BYTE from the probe's unit dump on 2026-08-11, not from the
 *  brief. The brief has `title` and `sub` SWAPPED — the fourth A2 brief in a row
 *  to do so — and its `sub` ("the vendre model — and the bare il form") is not in
 *  the database at all, and carries an em dash besides. The canDo IS right this
 *  time and matches byte for byte. */
const UNIT_TITLE = 'Regular -RE Verbs';
const UNIT_SUB = 'Les verbes en -RE';
const UNIT_CANDO = 'Can conjugate regular -re verbs, including the il form that takes no ending';

/** Grammar vocabulary that must not reach a learner surface. Deliberately short:
 *  a checker that fires on ordinary teaching prose gets silenced wholesale.
 *  `infinitive` is NOT here, because the chip a learner sees reads "the naming
 *  form"; nor is `stem`, which this band uses as ordinary English.
 *
 *  `third person` earns its place here more than it did in a2.10, because THIS
 *  lesson is about one, and the first draft of s07-cells and of the `threeGroups`
 *  term both used it. They now say "the il form", which is what the unit's own
 *  canDo says. */
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
 *  stop, so `/nu vɑ̃.dɔ̃/` reads as a standalone word `dɔ̃`, and a2.01's aller
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

const AUTHORED_ITEMS: Item[] = VERBES_RE.map(toItem);

console.log(`\n  a2.11.l1 "Les verbes en -RE" → ${describeTarget()}${DRY_RUN ? '  (DRY RUN)' : ''}\n`);

/* ── Counts, against constants ───────────────────────────────────────────── */

if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) die(`expected ${EXPECTED_AUTHORED} authored rows, found ${AUTHORED_ITEMS.length}`);
if (AUTHORED_IDS.length !== EXPECTED_AUTHORED) die(`AUTHORED_IDS holds ${AUTHORED_IDS.length} ids, expected ${EXPECTED_AUTHORED}`);
if (IMPORTED_VERBS.length !== EXPECTED_IMPORTED_VERBS) die(`expected ${EXPECTED_IMPORTED_VERBS} imported verbs, found ${IMPORTED_VERBS.length}`);
if (BOUNDARY_VERBS.length !== EXPECTED_BOUNDARY_VERBS) die(`expected ${EXPECTED_BOUNDARY_VERBS} boundary verbs read, found ${BOUNDARY_VERBS.length}`);
if (THE_SEVEN.length !== EXPECTED_IMPORTED_VERBS) die(`THE_SEVEN holds ${THE_SEVEN.length} verbs, expected ${EXPECTED_IMPORTED_VERBS}`);
if (NOT_THIS_FAMILY.length !== EXPECTED_NOT_THIS_FAMILY) die(`NOT_THIS_FAMILY holds ${NOT_THIS_FAMILY.length} verbs and every screen says ${EXPECTED_NOT_THIS_FAMILY}`);
if (RESPELL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`expected ${EXPECTED_RESPELL_REPAIRS} respelling repairs, found ${RESPELL_REPAIRS.length}`);
if (RESPELL_REPAIRS_VISIBLE.length !== EXPECTED_REPAIRS_VISIBLE) die(`expected ${EXPECTED_REPAIRS_VISIBLE} repairs the checker can see, found ${RESPELL_REPAIRS_VISIBLE.length}`);
if (RESPELL_REPAIRS_INVISIBLE.length !== EXPECTED_REPAIRS_INVISIBLE) die(`expected ${EXPECTED_REPAIRS_INVISIBLE} repairs the checker is blind to, found ${RESPELL_REPAIRS_INVISIBLE.length}`);
if (DRILL_ADDITIONS.length !== EXPECTED_DRILL_ADDITIONS) die(`expected ${EXPECTED_DRILL_ADDITIONS} drill additions, found ${DRILL_ADDITIONS.length}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`expected ${EXPECTED_ACTS} acts, found ${(LESSON.acts ?? []).length}`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} error triggers, found ${(LESSON.errorTriggers ?? []).length}`);
if ((LESSON.sheets ?? []).length !== EXPECTED_SHEETS) die(`expected ${EXPECTED_SHEETS} reference sheet, found ${(LESSON.sheets ?? []).length}. See SHEET_DECISION: one sheet, and it is the cross-group one.`);
if (DICTATION_IDS.length !== EXPECTED_DICTATION) die(`expected ${EXPECTED_DICTATION} dictée targets, found ${DICTATION_IDS.length}`);
if (VERBES_RE_DICTATION_IDS.join() !== DICTATION_IDS.join()) die('the dictée section and the corpus disagree about the targets');
if (ENDINGS.length !== 6) die(`ENDINGS holds ${ENDINGS.length} rows and a paradigm has six`);
if (THREE_CELLS.length !== 3) die(`THREE_CELLS holds ${THREE_CELLS.length} rows and there are three regular groups`);
if (BARE_CELL.length !== EXPECTED_BARE_CELLS) {
  die(`${BARE_CELL.length} of the three groups write nothing on the il form, and the whole lesson says exactly ${EXPECTED_BARE_CELLS}`);
}
if (D_SOUNDING_ENDINGS.length !== 3) die(`${D_SOUNDING_ENDINGS.length} endings put letters after the d and every screen says three`);
if (SHEET_DECISION.count !== EXPECTED_SHEETS) die('SHEET_DECISION and the expected sheet count disagree');

/** THE OWNS, AS ARITHMETIC. Exactly one of the six paradigm cells and exactly one
 *  of the three groups writes nothing. If somebody gives the il form an ending
 *  this is the first thing that fails, before any prose is read. */
{
  const bareCells = ENDINGS.filter((e) => e.ending === '');
  if (bareCells.length !== 1) die(`${bareCells.length} of the six endings are empty, expected exactly 1: ${JSON.stringify(bareCells.map((e) => e.person))}`);
  if (bareCells[0].person !== 'il · elle · on') die(`the empty ending is on "${bareCells[0].person}", and it belongs to il, elle and on`);
  if (BARE_CELL[0].group !== '-re') die(`the group that writes nothing is "${BARE_CELL[0].group}", expected -re`);
  const authoredBare = VERBES_RE.filter((w) => w.ending === '');
  if (!authoredBare.length) die('no authored row writes nothing after the stem, and that row is the lesson');
  if (authoredBare.length !== BARE_FORM_IDS.length) die('BARE_FORM_IDS and the authored rows disagree about which cells are empty');
  console.log(`  the empty cell: 1 of ${ENDINGS.length} endings, 1 of ${THREE_CELLS.length} groups, ${BARE_FORM_IDS.length} authored rows`);
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
  /** NO `à` AFTER répondre. The indirect object is a2.24 at seq 22, and the brief
   *  says to use the verb freely without teaching what the à is doing there. The
   *  cheapest way to keep that promise is to author no row that has one. */
  if (/\brépond\w*\s+(à|au|aux)\b/i.test(it.fr)) {
    die(`${it.id} "${it.fr}" puts an indirect object after répondre. That is a2.24, seq 22, and this lesson does not teach it.`);
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

/** THE SINGULAR TRIPLES, CHECKED AS AN EQUALITY.
 *
 *  je vends / tu vends / il vend are three spellings and one sound. If the three
 *  respellings ever disagree about anything after the pronoun, the lesson prints
 *  a difference it spends two missions denying, and no schema check would catch
 *  it. This is a2.01's `.102`/`.105` assertion and a2.10's, applied to the half
 *  of this paradigm that is the same in all three lessons. */
for (const triple of SINGULAR_TRIPLES) {
  const rows = triple.map((id) => {
    const w = VERBES_RE.find((x) => x.id === id);
    if (!w) die(`SINGULAR_TRIPLES names ${id}, which is not an authored row`);
    return w;
  });
  const tails = rows.map((w) => afterPronoun(w.respell ?? ''));
  if (new Set(tails).size !== 1) {
    die(
      `the singular triple ${triple.join(' / ')} does not sound the same:\n    ${rows.map((w, i) => `${w.fr}  ->  ${tails[i]}`).join('\n    ')}\n`
      + `  Everything after the pronoun MUST be one string. Three spellings and one sound is half of what this lesson teaches.`,
    );
  }
  if (new Set(rows.map((w) => w.fr)).size !== 3) die(`the triple ${triple.join(' / ')} does not hold three different sentences`);
  if (rows.some((w) => w.dSounds)) die(`a row in the singular triple ${triple.join(' / ')} is marked dSounds: true, and the singular loses the d`);
  const endings = rows.map((w) => w.ending);
  if (endings.filter((e) => e === '').length !== 1) die(`the triple ${triple.join(' / ')} does not hold exactly one bare form: ${JSON.stringify(endings)}`);
}
console.log(`  ${SINGULAR_TRIPLES.length} singular triples on ${SINGULAR_TRIPLES.length} verbs: one string after the pronoun, one bare form each`);

/** THE D PAIRS: one singular row against one plural row, and the plural must
 *  really carry the d in its respelling. */
for (const [sing, plur] of D_PAIRS) {
  const a = VERBES_RE.find((w) => w.id === sing);
  const b = VERBES_RE.find((w) => w.id === plur);
  if (!a || !b) die(`d pair ${sing} / ${plur} does not resolve against the authored corpus`);
  if (a.dSounds) die(`${sing} is the singular half of a d pair and its row says dSounds: true`);
  if (!b.dSounds) die(`${plur} is the plural half of a d pair and its row says dSounds: false`);
  if (a.fr === b.fr) die(`${sing} and ${plur} are the same sentence, so the pair proves nothing`);
  const ra = a.respell ?? '';
  const rb = b.respell ?? '';
  if (ra === rb) die(`${sing} and ${plur} carry the SAME respelling, and the whole of the ear mission is that these two differ`);
  /** THE D ARRIVES, AND IT IS A CONSONANT RATHER THAN A SYLLABLE. Checked on the
   *  VERB TOKEN alone, because in three of the five pairs the pronoun changes
   *  audibly too (`e la-tahⁿ` against `eel za-tahⁿd`) and comparing whole strings
   *  would make the guard fire on a liaison that is entirely correct.
   *
   *  The strict "singular plus exactly one d" test is the right test and it
   *  belongs to the pronoun-blind subset below, where nothing else may move. */
  //
  // The comparison is on the LAST SYLLABLE of the verb token, not the whole
  // token, because a liaison consonant rides on the front of it and the pronoun
  // that supplies the liaison is different on the two sides: `elle attend` gives
  // `la-tahⁿ` and `ils attendent` gives `za-tahⁿd`. The l and the z are correct
  // and they are not what is being measured. What is being measured is that the
  // syllable the verb ends on grows a d and nothing else.
  const lastSyl = (r: string) => {
    const tok = r.split(' ').find((t) => t.includes('ⁿ')) ?? '';
    return tok.split('-').pop() ?? '';
  };
  const va = lastSyl(ra);
  const vb = lastSyl(rb);
  if (!vb.endsWith('d')) die(`${plur} "${b.fr}" ends its verb on "${vb}", which does not end on the d. The plural is where the d arrives.`);
  if (va.endsWith('d')) die(`${sing} "${a.fr}" ends its verb on "${va}", which carries the d, and the singular loses it`);
  if (vb !== `${va}d`) {
    die(
      `${plur} "${b.fr}" ends its verb on "${vb}" and ${sing} ends its on "${va}".\n`
      + `  The plural is the singular PLUS ONE D and nothing else. If the two differ by more than that, the card is\n`
      + `  teaching a syllable the language does not have, which is the mistake a2.10's brief made about -issent.`,
    );
  }
}
console.log(`  ${D_PAIRS.length} d pairs, each the singular verb plus exactly one d`);

/** AND THE SUBSET WHERE THE PRONOUN IS NO HELP, which is the only set a listening
 *  question may ask "one or several?" about. Both halves must respell their
 *  pronoun IDENTICALLY, or the learner can answer from the pronoun and the
 *  mission proves nothing. */
for (const [sing, plur] of PRONOUN_BLIND_PAIRS) {
  const a = VERBES_RE.find((w) => w.id === sing)!;
  const b = VERBES_RE.find((w) => w.id === plur)!;
  const pa = (a.respell ?? '').split(' ')[0];
  const pb = (b.respell ?? '').split(' ')[0];
  if (pa !== pb) {
    die(
      `${sing} respells its pronoun "${pa}" and ${plur} respells its "${pb}".\n`
      + `  PRONOUN_BLIND_PAIRS is the set where the pronoun gives the learner NOTHING, and it is what makes the one\n`
      + `  listening mission in this lesson possible at all. If the pronouns differ, move the pair out of this list.`,
    );
  }
  if (!D_PAIRS.some(([x, y]) => x === sing && y === plur)) die(`${sing} / ${plur} is pronoun-blind and is not in D_PAIRS`);
  /** AND HERE THE WHOLE STRING MUST BE THE SINGULAR PLUS ONE D. This is the
   *  subset the one listening mission plays, and it is the only place in the
   *  lesson where a learner is asked to name a number from a sound, so nothing
   *  but the d may have moved between the two recordings. */
  if ((b.respell ?? '').replace('ⁿd', 'ⁿ') !== (a.respell ?? '')) {
    die(
      `${plur} is respelled "${b.respell}" and ${sing} is "${a.respell}".\n`
      + `  A pronoun-blind pair must differ by the d and by NOTHING ELSE, or the ear mission is asking about\n`
      + `  something other than the thing it teaches.`,
    );
  }
}
if (PRONOUN_BLIND_PAIRS.length < 2) die(`only ${PRONOUN_BLIND_PAIRS.length} pronoun-blind pairs; the ear mission needs at least two`);
console.log(`  ${PRONOUN_BLIND_PAIRS.length} pronoun-blind pairs: the pronoun respells identically on both sides`);

/* ── THE NASAL CHECKER, IN BOTH DIRECTIONS, AND ITS BLIND SPOT BY NAME ───── */
{
  /** The eleven the shared checker cannot see. Measured 2026-08-11 by breaking
   *  each superscript back to a plain n one at a time; every one of them is a
   *  nasal followed by a d INSIDE the token, which is what a regular -RE stem
   *  always produces. Invariants §3. */
  for (const b of BLIND_NASALS) {
    const row = VERBES_RE.find((w) => w.id === b.id);
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
  /** The same claim about the six imported headwords, after the repairs. */
  for (const b of BLIND_NASALS_IMPORTED) {
    const to = RESPELL_REPAIRS.find((r) => r.id === b.id)?.to;
    if (to !== b.must) die(`${b.id} (${b.why}) is repaired to ${JSON.stringify(to)} and BLIND_NASALS_IMPORTED expects ${JSON.stringify(b.must)}`);
  }
  /** THE HALF REPAIR THAT PASSES THE CHECKER AND IS STILL WRONG.
   *
   *  `entendre` has two nasal vowels. The first ends a token and the checker sees
   *  it; the second is followed by a d and it does not. So repairing what the
   *  checker reports produces `ahⁿ-TAHNDR`, which it then calls clean. This is
   *  the sharpest single piece of evidence in the build that the shared checker
   *  is not the authority here, and it is asserted as a NEGATIVE. */
  if (hasPlainNasalFor(HALF_REPAIRED_ENTENDRE.fr, HALF_REPAIRED_ENTENDRE.respell)) {
    die('hasPlainNasalFor now flags the half-repaired entendre. The blind spot has closed and invariants §3 needs updating.');
  }
  if (!hasPlainNasalFor('entendre', 'ahn-TAHNDR')) {
    die('the fully broken entendre is no longer flagged either. The nasal check has gone quiet and this build is trusting it for the two repairs it can see.');
  }
  console.log(`  ${BLIND_NASALS.length + BLIND_NASALS_IMPORTED.length} nasals asserted by name; the checker's blind spot re-confirmed in both directions`);
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
  if (!hasPlainNasalFor(r.fr, r.from)) {
    die(
      `${r.id} "${r.fr}" is in RESPELL_REPAIRS_VISIBLE and its stored value "${r.from}" is NOT flagged by hasPlainNasalFor.\n`
      + `  Either it is not a violation (invariants §9: a variant is not a violation, withdraw it) or the checker can no\n`
      + `  longer see it and it belongs in RESPELL_REPAIRS_INVISIBLE.`,
    );
  }
}
for (const r of RESPELL_REPAIRS_INVISIBLE) {
  if (hasPlainNasalFor(r.fr, r.from)) {
    die(
      `${r.id} "${r.fr}" is in RESPELL_REPAIRS_INVISIBLE and the checker CAN see its stored value "${r.from}".\n`
      + `  Move it to RESPELL_REPAIRS_VISIBLE, where the guard proves the violation through the shared function.`,
    );
  }
  if (hasPlainNasalFor(r.fr, r.to)) die(`the replacement for ${r.id} "${r.fr}" is flagged: ${r.to}`);
  if (!r.to.includes('ⁿ')) die(`${r.id} "${r.fr}" is repaired to "${r.to}", which carries no superscript, and nothing else in the build can tell`);
  if (r.from.replace(/n(?=[a-z]*[dr])/i, 'ⁿ') === r.from) {
    // Not a strict test of the fix, just a floor: an "invisible" repair whose
    // from and to differ by nothing is somebody's typo.
    if (r.from === r.to) die(`${r.id} "${r.fr}" repairs "${r.from}" to itself`);
  }
}
console.log(`  ${RESPELL_REPAIRS_VISIBLE.length} repairs proved through the checker, ${RESPELL_REPAIRS_INVISIBLE.length} proved by name because it is blind to them`);

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

/** THE REFRAME NAMES THE CELL AND NOT THE SOUND, which is the decision the whole
 *  lesson is built on. "The plural is where the D wakes up" is true, short and
 *  teachable, and it is a2.10's reframe in new clothes; taking it would have made
 *  this the second consecutive lesson about the ear. */
if (/\bd\b/i.test(REFRAME) || /sound|hear|plural/i.test(REFRAME)) {
  die(`the reframe is "${REFRAME}". A reframe about the sound is a2.10's reframe, and this is the third paradigm in four lessons.`);
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

/** ONE TABLE, ONE tapTable, THEN STOP, and the tapTable is the CROSS-GROUP one
 *  rather than the paradigm. a2.10 spent its only tapTable on the paradigm
 *  because its Owns was the sound; the only screen in this lesson with per-row
 *  audio is the one that compares three lessons. */
{
  const taps = LESSON.sections.filter((s) => s.type === 'tapTable');
  if (taps.length !== EXPECTED_TAPTABLES) die(`${taps.length} tapTables in the flow, expected ${EXPECTED_TAPTABLES}. One table, one tapTable, then stop.`);
  if ((taps[0] as { id?: string }).id !== CELLS_SECTION_ID) {
    die(`the only tapTable is ${JSON.stringify((taps[0] as { id?: string }).id)}, expected ${JSON.stringify(CELLS_SECTION_ID)}. The per-row audio belongs to the cross-group comparison.`);
  }
  const coreTables = LESSON.sections.filter((s) => s.type === 'table').length;
  if (coreTables) die(`${coreTables} table section(s) in the flow. A table at layer core is a table-in-core density failure; the full versions belong in the sheet.`);
}

/* ── The learner-facing surfaces ─────────────────────────────────────────── */

const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
/** EVERY SURFACE A LEARNER READS, and `intro` and `overview` are two of them.
 *
 *  WIDENED 2026-08-12 AFTER A DEVICE PASS. This walk was `sections + sheets +
 *  terms`, copied from a2.10, and it missed `intro` — which is drawn on the
 *  lesson overview card AND on the lesson cover. v1 shipped the phrase "third
 *  person" there, on two screens, while every other occurrence in the lesson had
 *  already been caught and reworded by the same JARGON list. A guard that reads
 *  the fields somebody remembered to check is how a1.08's 43 invisible itemIds
 *  happened.
 *
 *  `grammarAssumed` and `grammarIntroduced` are deliberately NOT here: invariants
 *  §8 says they are addressed to the curriculum and may use the precise words. */
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

/* ── THE THREE CELLS: ONE SCREEN, THREE ROWS, IN TRAIL ORDER ─────────────── */
{
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === CELLS_SECTION_ID);
  if (!sec) die(`${CELLS_SECTION_ID} is gone. That is the one screen the whole lesson turns on.`);
  if (sec.type !== 'tapTable') {
    die(
      `${CELLS_SECTION_ID} is a ${sec.type}, expected a tapTable.\n`
      + `  A \`table\` at layer 'core' is a table-in-core density failure, and only a tapTable gives each row its own\n`
      + `  audio. The learner has to be able to play all three without leaving the screen, because the claim is that\n`
      + `  they are indistinguishable.`,
    );
  }
  if (sec.rows.length !== THREE_CELLS.length) die(`${CELLS_SECTION_ID} has ${sec.rows.length} rows, expected ${THREE_CELLS.length}, one per regular group`);
  if (sec.cols.length !== 3) die(`${CELLS_SECTION_ID} has ${sec.cols.length} columns, expected 3`);
  if (CELLS_ROW_IDS.join() !== THREE_CELLS.map((c) => c.id).join()) die('the lesson and the corpus disagree about the row order of the three cells');

  // EVERY ROW PLAYS ITS OWN SENTENCE, and the three are ADJACENT by construction
  // because there are exactly three of them and nothing else in the section.
  sec.rows.forEach((row, i) => {
    const cell = THREE_CELLS[i];
    const want = VERBES_RE.find((w) => w.id === cell.id);
    if (!want) die(`THREE_CELLS names ${cell.id}, which is not an authored row`);
    if (!row.say) die(`row ${i + 1} of ${CELLS_SECTION_ID} carries no \`say\`, so it cannot be played with one tap`);
    if (row.say !== want.fr) die(`row ${i + 1} of ${CELLS_SECTION_ID} plays ${JSON.stringify(row.say)}, expected ${JSON.stringify(want.fr)}`);
    if (want.ending !== cell.ending) die(`${cell.id} is authored with ending ${JSON.stringify(want.ending)} and THREE_CELLS says ${JSON.stringify(cell.ending)}`);
    // AND THE LAST COLUMN CARRIES THE ENDING, which is the column the mission is
    // about. The empty one prints the word rather than an empty cell, because an
    // empty cell reads as a rendering fault.
    const printed = row.cells[2];
    const expected = cell.ending === '' ? 'nothing' : cell.ending;
    if (printed !== expected) die(`row ${i + 1} of ${CELLS_SECTION_ID} prints ${JSON.stringify(printed)} in the ending column, expected ${JSON.stringify(expected)}`);
  });

  // THE THREE FRAMES ARE THE SAME FRAME. If they are not, the screen compares
  // three objects as well as three endings and the claim is gone.
  const frames = THREE_CELLS.map((c) => VERBES_RE.find((w) => w.id === c.id)!.fr.replace(/^\S+\s+\S+\s*/, ''));
  if (new Set(frames).size !== 1) {
    die(
      `the three cells run on different frames: ${JSON.stringify(frames)}.\n`
      + `  ONLY THE VERB MAY MOVE. That is the whole reason this build authored Il parle ici. and Il finit ici.\n`
      + `  rather than reusing a2.01's Il parle français. and a2.10's Il finit tôt.`,
    );
  }
  // AND THE THREE ARE ONE SOUND AFTER THE PRONOUN IS ALLOWED FOR. They are not:
  // parl, fee-nee and vahⁿ are different verbs. What must hold is that none of
  // the three endings is audible, which is checked as "the respelling of the verb
  // does not grow when the ending is added" — for the -re cell the plural half of
  // D_PAIRS already proves it, and for the other two it is the neighbours' own
  // shipped respellings, unchanged.
  const bare = THREE_CELLS.filter((c) => c.ending === '');
  if (bare.length !== 1) die(`${bare.length} of the three cells write nothing, expected exactly one`);
  if (sec.rows[2].cells[2] !== 'nothing') die('the third row of the three-cell table is not the empty one, and the mission is arriving at it');
  console.log(`  the three cells: ${CELLS_SECTION_ID}, ${sec.rows.length} rows, one frame, endings ${THREE_CELLS.map((c) => c.ending || '(none)').join(' / ')}`);
}

/* ── THE BACK-REFERENCES, AND BOTH NEIGHBOURS' REFRAMES AVAILABLE ────────── */
{
  for (const unit of BACKREFS) {
    const holders = LESSON.sections.filter((s) => strings(s).some((x) => hasPhrase(x, unit))).map((s) => (s as { id?: string }).id ?? '?');
    if (!holders.length) {
      die(
        `${unit} is named by no section.\n`
        + `  The headline screen is a three-way comparison and a comparison with one side unattributed is a table\n`
        + `  rather than a teaching: the learner has to know that il parle and il finit are already theirs.`,
      );
    }
  }
  if (!learnerText.includes(THREE_GROUPS)) die(`"${THREE_GROUPS}" appears on no screen, and it is where this lesson says what it is`);
  const carrying = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(THREE_GROUPS)));
  if (carrying.length < 3) die(`"${THREE_GROUPS}" reaches ${carrying.length} sections, expected at least 3`);
  console.log(`  back-references: ${BACKREFS.join(', ')} both named; the three-group line in ${carrying.length} sections`);
}

/** THE NEIGHBOURS' REFRAMES ARE IMPORTED AND AVAILABLE, EVEN THOUGH ONLY ONE IS
 *  QUOTED.
 *
 *  a2.10 quoted a2.01's reframe verbatim because it was inverting it. This lesson
 *  inverts neither: it completes them. So the two constants are imported and
 *  re-exported rather than pasted, and this guard makes sure they still resolve —
 *  the value of the import is that a rewording upstream reaches this build, and an
 *  import nothing checks is an import somebody deletes. */
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

/** THE nous/on STATEMENT IS a2.01's CONSTANT AND IT HAS EXACTLY ONE HOME. */
{
  if (!learnerText.includes(NOUS_ON)) {
    die(
      `the nous/on statement does not appear verbatim.\n`
      + `  The ledger binds all twenty A2 lessons to a2.01's wording, and this lesson needs it: on takes the il form,\n`
      + `  which on a -re verb is the cell that writes nothing. Import the constant; do not reword it.`,
    );
  }
  const holders = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON))).map((s) => (s as { id?: string }).id);
  if (holders.length !== 1 || holders[0] !== NOUS_ON_SECTION_ID) {
    die(`the nous/on statement is in ${JSON.stringify(holders)}, expected exactly [${JSON.stringify(NOUS_ON_SECTION_ID)}]`);
  }
}

/* ── The quiz, needed before the production-surface scope is built ───────── */

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz || quiz.type !== 'quiz') die('no quiz section');
const qs = quizQuestions(quiz);

/** WHAT THE LEARNER IS ASKED TO PRODUCE OR CHOOSE, plus the vocabulary decks.
 *  Narrower than "a production section", and the only scope on which the
 *  neighbour guards are honest: s16-notmine NAMES prendre and mettre in order to
 *  hand them over, which is the lesson doing its job rather than crossing a
 *  boundary. A guard that fires on that is a guard the next author deletes. */
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

/* ── THE BOUNDARY CLASS: NAMED, NEVER CONJUGATED ─────────────────────────── */
{
  const named = [...NOT_THIS_FAMILY, ...NOT_THIS_FAMILY_COMPOUNDS];
  const unnamed = named.filter((v) => !hasPhrase(learnerText, v));
  if (unnamed.length) {
    die(
      `verb(s) of the boundary class named nowhere: ${unnamed.join(', ')}\n`
      + `  Naming the class IS the mission. A learner who runs the vendre model on prendre produces ils prendent, and\n`
      + `  nothing else in this lesson will stop them.`,
    );
  }
  const leaked = NOT_THIS_FAMILY_FORMS.filter((f) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, f)));
  if (leaked.length) {
    die(
      `a conjugated form of the boundary class reached a production surface: ${leaked.join(', ')}\n`
      + `  These verbs are named and not taught. They are ${NOT_THIS_FAMILY_UNIT}, seq 9, and this lesson is seq 4.`,
    );
  }
  // The over-generalised forms are banned EVERYWHERE, not merely on a production
  // surface. See the corpus header: showing `ils prendent` in order to reject it
  // leaves it in memory with nothing to overwrite it, because nobody here holds
  // `ils prennent`.
  const invented = OVER_GENERALISED_FORMS.filter((f) => learnerProse.some((s) => hasPhrase(s, f)));
  if (invented.length) {
    die(
      `an over-generalised form reached a learner surface: ${invented.join(', ')}\n`
      + `  This lesson does not print the error in order to reject it. It DOES print il vende, because the learner\n`
      + `  holds il vend to replace it with, and nobody here holds ils prennent. See the corpus header.`,
    );
  }
  const inItems = named.filter((v) => IMPORTED_VERBS.some((iv) => iv.verb === v));
  if (inItems.length) die(`boundary verb(s) imported as items: ${inItems.join(', ')}. Context is a display string, not a released row.`);
  const inIds = BOUNDARY_VERBS.filter((b) => LESSON.itemIds.includes(b.id)).map((b) => b.verb);
  if (inIds.length) die(`boundary verb row(s) in itemIds: ${inIds.join(', ')}. They are read from Postgres and released to nothing.`);
  // AND THE HAND-OVER IS SPECIFIC. "Some verbs are different" is not a boundary.
  const card = LESSON.sections.find((s) => (s as { id?: string }).id === BOUNDARY_SECTION_ID);
  if (!card) die(`${BOUNDARY_SECTION_ID} is gone, and with it the only place the boundary is named`);
  const cardText = strings(card).join('\n');
  const notOnCard = named.filter((v) => !hasPhrase(cardText, v));
  if (notOnCard.length) die(`${BOUNDARY_SECTION_ID} does not name ${notOnCard.join(', ')}. The whole class belongs on one screen.`);
  if (!namesUnitLabel(cardText, NOT_THIS_FAMILY_UNIT)) {
    die(`${BOUNDARY_SECTION_ID} does not say where ${NOT_THIS_FAMILY.join(', ')} are taught. A boundary with no destination is a warning, not a teaching.`);
  }
  console.log(`  the boundary: ${named.length} named on ${BOUNDARY_SECTION_ID}, 0 forms on a production surface, 0 invented forms anywhere`);
}

/** All seven, BY NAME. A count passes after somebody swaps one out. */
{
  const missing = THE_SEVEN.filter((v) => !hasPhrase(learnerText, v));
  if (missing.length) die(`verb(s) named by no screen: ${missing.join(', ')}`);
  const ids = new Set(LESSON.itemIds);
  const unreleased = IMPORTED_VERBS.filter((v) => !ids.has(v.id)).map((v) => v.verb);
  if (unreleased.length) die(`verb(s) on a screen but not in itemIds: ${unreleased.join(', ')}`);
  console.log(`  all ${THE_SEVEN.length} verbs named individually and released by id`);
}

/* ── The neighbours keep their lessons ───────────────────────────────────── */
{
  // a2.09's changed stems. NOT the -er and -ir verbs themselves: this lesson
  // AUTHORS `Il parle ici.` and `Il finit ici.` on purpose, and a guard that
  // banned them would be a guard against the lesson's own headline screen.
  const STEM_CHANGERS = ['mangeons', 'commençons', 'appelle', 'achète', 'préfère', 'jette'];
  const stems = STEM_CHANGERS.filter((v) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, v)));
  if (stems.length) die(`a2.09's changed stems reached a production surface: ${stems.join(', ')}`);
  // The past and the imperfect. `descendre`'s auxiliary split is a2.21 and
  // `vendu`, `attendu` and `descendu` are the participles that would open it.
  const PAST = ['ai vendu', 'a vendu', 'ai attendu', 'a attendu', 'est descendu', 'suis descendu', 'vendais', 'vendions', 'attendais', 'attendions', 'descendais'];
  const past = PAST.filter((v) => learnerProse.some((s) => hasPhrase(s, v)));
  if (past.length) die(`a past or imperfect form is on a learner surface: ${past.join(', ')}. Every row here is a simple present, and the auxiliary split is a2.21.`);
  // The indirect object, which is a2.24 at seq 22.
  const INDIRECT = ['lui', 'leur', 'réponds à', 'répond à', 'répondez à', 'répondent à'];
  const indirect = INDIRECT.filter((v) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, v)));
  if (indirect.length) die(`an indirect object reached a production surface: ${indirect.join(', ')}. répondre is used freely here and what the à is doing is a2.24.`);
}

/* ── The ear mission exists, and it knows what it cannot settle ─────────── */
{
  const ears = LESSON.sections.filter((s) => s.type === 'listening');
  if (ears.length !== 1) {
    die(
      `${ears.length} listening section(s), expected exactly 1.\n`
      + `  The audible half of this paradigm belongs to a2.10, which owns "the plural puts a sound on the end" and is\n`
      + `  ONE LESSON AGO. Two ear missions here would make this the second consecutive lesson about listening, which\n`
      + `  is the failure the brief opens by warning about. One mission, properly, and the weight stays on the page.`,
    );
  }
  const ear = ears[0];
  if (ear.type !== 'listening') die('the listening section is not a listening section');
  for (const q of ear.questions) if (!q.why) die(`listening question has no why: ${q.q}`);
  // EVERY LINE MUST BE HALF OF A PRONOUN-BLIND PAIR. If the pronoun settles it,
  // the mission is a pronoun quiz.
  const blindFr = new Set(PRONOUN_BLIND_PAIRS.flat().map((id) => VERBES_RE.find((w) => w.id === id)!.fr));
  const stray = ear.lines.map((l) => l.fr).filter((f) => !blindFr.has(f));
  if (stray.length) {
    die(`the ear mission plays ${JSON.stringify(stray)}, which is not half of a pronoun-blind pair. The learner could answer from the pronoun.`);
  }
  // AND ONE QUESTION MUST NAME THE THREE IT CANNOT SETTLE. The mission's job is
  // half boundary: here is what the d gives you, and here is what it does not.
  const namesTheLimit = ear.questions.some((q) => /NOT separate|not separate/i.test(q.q) || /would your ear not/i.test(q.q));
  if (!namesTheLimit) {
    die('no question in the ear mission names the three forms the ear cannot separate. The limit is half of what the mission teaches.');
  }
  console.log(`  listening: 1 mission, ${ear.lines.length} lines all pronoun-blind, ${ear.questions.length} questions, and the limit is named`);
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
 *  je vends, tu vends and il vend are identical out loud. A `listenChoose`
 *  offering two of them has no correct answer and marking one of them right would
 *  certify a bug. The brief asked for this to be said in the report; it is said
 *  there AND enforced here.
 *
 *  Checked as "these two options differ ONLY by a member of one homophone group",
 *  not as "two options mention homophones", because a question offering
 *  « Il vend ici. » against « Je vends ici. » is legitimate: the PRONOUNS are
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
      + `  No recording can separate vends from vend. Ask that one as typeIn or errorSpot.`,
    );
  }
  console.log(`  no listenChoose asks between two forms that are one sound (${HOMOPHONE_FORMS.length} groups checked)`);
}

/** AND THE WRITTEN DISTINCTION IS TESTED WHERE IT CAN BE: TYPED.
 *
 *  This is a page lesson and the quiz has to say so. Sixteen of thirty are typed,
 *  against a2.10's eleven, and four turn on the bare form specifically. */
{
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? ''));
  if (typed.length < 14) die(`only ${typed.length} typed questions; this lesson is a written distinction and the page is the only place it exists`);
  const bareTyped = typed.filter((q) => {
    const t = `${q.answer ?? ''} ${(q.accept ?? []).join(' ')}`;
    return /\b(vend|attend|répond|entend|perd|rend|descend)\b/i.test(t);
  });
  if (bareTyped.length < 4) {
    die(`only ${bareTyped.length} typed questions turn on the bare form, and the dictée plus these are the only surfaces that can`);
  }
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  if (listen > 6) {
    die(
      `${listen} listenChoose questions.\n`
      + `  The ear can only settle the d here, and a2.10 owns that. A quiz that leans on listening in this lesson is\n`
      + `  the previous lesson's quiz with different verbs.`,
    );
  }
  if (typed.length <= listen * 2) die(`${typed.length} typed against ${listen} listenChoose; the written half has to carry this quiz`);
  console.log(`  quiz: ${qs.length} questions, ${mcq} mcq, ${typed.length} typed (${bareTyped.length} on the bare form), ${listen} listenChoose, formats ${[...new Set(qs.map((q) => q.format ?? 'mcq'))].sort().join('/')}`);
}

/** EVERY GAP QUESTION FIXES THE PERSON. A stem with no subject has no single
 *  answer, and in this lesson the subject is the only thing that decides whether
 *  anything at all goes after the stem. */
{
  const SUBJECTS = ['je', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'le', 'la', 'les'];
  const gap = qs.filter((q) => q.q.includes('___'));
  if (gap.length < 6) die(`only ${gap.length} gap questions`);
  for (const q of gap) {
    if (!/\([a-zà-ÿ]+(er|ir|re)\)/i.test(q.q)) die(`no naming form in the stem, so the question has no single answer: ${q.q}`);
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
  /** THE TABLE THIS SHEET EXISTS FOR. The brief asked for a2.01's sheet to be
   *  extended rather than duplicated; a sheetId resolves only inside its own
   *  lesson, so that was never possible, and this is what was done instead. */
  const three = (sheet.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-three-groups');
  if (!three || three.type !== 'table') die(`${SHEET_ID} no longer holds the three-group table, which is the only reason it is not a third copy of a2.01's sheet`);
  if (three.cols.length !== 4) die(`the three-group table has ${three.cols.length} columns, expected 4: a pronoun and one per group`);
  if (three.rows.length !== ENDINGS.length) die(`the three-group table has ${three.rows.length} rows, expected ${ENDINGS.length}`);
  const ilRow = three.rows.find((r) => r[0] === 'il · elle · on');
  if (!ilRow) die('the three-group table has no il row, and that row is the lesson');
  if (ilRow.slice(1).join('|') !== 'parle|finit|vend') die(`the il row of the three-group table reads ${JSON.stringify(ilRow.slice(1))}, expected parle, finit, vend`);
  /** AND IT NAMES THE TWO SHEETS IT COMPLETES, so a learner and a future author
   *  both know the set is finished rather than competing. */
  const sheetText = strings(sheet).join('\n');
  const unnamed = SHEET_DECISION.names.filter((u) => !namesUnitLabel(sheetText, u));
  if (unnamed.length) die(`${SHEET_ID} does not name ${unnamed.join(', ')}. Two competing sheets is worse than one incomplete sheet, and this one says which is which.`);
  /** AND THE CANONICAL PRONOUN ORDER IS IN THE SHEET. */
  const paradigm = (sheet.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-re-paradigm');
  if (!paradigm || paradigm.type !== 'table') die(`the nine-pronoun table is gone from ${SHEET_ID}`);
  const order = paradigm.rows.map((r) => r[0]);
  const EXPECTED_ORDER = ["je / j'", 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles'];
  if (order.join(',') !== EXPECTED_ORDER.join(',')) {
    die(`the sheet's paradigm runs ${order.join(', ')}, and the ledger settles it as ${EXPECTED_ORDER.join(', ')}`);
  }
  console.log(`  the sheet: ${SHEET_ID}, ${sheet.sections?.length} sections, the three-group table intact, ${SHEET_DECISION.names.join(' and ')} named`);
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

  const touched = [...IMPORTED_ROWS, ...BOUNDARY_VERBS.map((b) => b.row)].map((r) => r.id);
  const live = await c.query<{
    id: string; fr: string; en: string; respell: string | null; gender: string | null;
    theme: string; drills: string[]; status: string;
  }>('select id, fr, en, respell, gender, theme, drills, status from content_items where id = any($1)', [[...new Set(touched)]]);
  const byId = new Map(live.rows.map((r) => [r.id, r] as const));

  /* THE MANIFEST IS A RECORDED READ AND IT IS VERIFIED FIELD BY FIELD.
     TWO VALUES ARE LEGAL FOR A ROW THIS BUILD REPAIRS: the value the manifest
     recorded (this batch has not run yet) and the value this build writes (it
     has). Anything else is somebody else's edit. Without this the script is not
     idempotent. */
  const repairedTo = new Map<string, string>(RESPELL_REPAIRS.map((r) => [r.id, r.to] as const));
  const drillsAdded = new Map<string, string>(DRILL_ADDITIONS.map((d) => [d.id, d.add] as const));

  const drift: string[] = [];
  for (const row of [...IMPORTED_ROWS, ...BOUNDARY_VERBS.map((b) => b.row)]) {
    const id = row.id;
    const x = byId.get(id);
    if (!x) { drift.push(`${id} is no longer in Postgres`); continue; }
    if (x.status !== 'published') drift.push(`${id} is ${x.status}, not published`);
    if (x.fr !== row.fr) drift.push(`${id} fr: manifest ${JSON.stringify(row.fr)} vs db ${JSON.stringify(x.fr)}`);
    if (x.en !== row.en) drift.push(`${id} en: manifest ${JSON.stringify(row.en)} vs db ${JSON.stringify(x.en)}`);
    if (x.theme !== row.theme) drift.push(`${id} theme: manifest ${JSON.stringify(row.theme)} vs db ${JSON.stringify(x.theme)}`);
    const legal = [row.respell ?? null, repairedTo.get(id) ?? null];
    if (!legal.includes(x.respell ?? null)) {
      drift.push(`${id} respell: manifest ${JSON.stringify(row.respell ?? null)} or this build's ${JSON.stringify(repairedTo.get(id) ?? null)}, db says ${JSON.stringify(x.respell)}`);
    }
    const d = pgArray(x.drills).slice().sort();
    const add = drillsAdded.get(id);
    const stored = (row.drills ?? []).slice().sort().join();
    const after = [...new Set([...(row.drills ?? []), ...(add ? [add] : [])])].sort().join();
    if (d.join() !== stored && d.join() !== after) {
      drift.push(`${id} drills: manifest ${JSON.stringify(row.drills)} or this build's +${add ?? 'nothing'}, db says ${JSON.stringify(d)}`);
    }
  }
  if (drift.length) {
    c.release(); await pool.end();
    die(`the recorded manifest has DRIFTED from Postgres:\n  ${drift.slice(0, 8).join('\n  ')}\n  Regenerate with pnpm tsx scripts/_a211_manifest.ts`);
  }
  console.log(`  manifest verified against Postgres: ${touched.length} rows, field by field`);

  /** NOT ONE of the seven may carry a gender. A gendered single-word row joins
   *  a1.03's ending population, and this lesson RELEASES all seven into the
   *  flashcard hub. */
  {
    const gendered = IMPORTED_VERBS.filter((v) => byId.get(v.id)?.gender);
    if (gendered.length) {
      c.release(); await pool.end();
      die(`imported verb(s) carrying a gender: ${gendered.map((v) => `${v.verb} (${v.id})`).join(', ')}. An infinitive is not a noun.`);
    }
  }

  /** AND EVERY ONE MUST END UP WITH A `flashcard` DRILL, because every one is
   *  released by a tranche and served as a hub card. All seven already carry one,
   *  which is why DRILL_ADDITIONS is empty; this proves that rather than assuming
   *  it, so the day a row loses its drill the build stops. */
  {
    const short = IMPORTED_VERBS.filter((v) => {
      const now = pgArray(byId.get(v.id)?.drills);
      const add = drillsAdded.get(v.id);
      return !now.includes('flashcard') && add !== 'flashcard';
    });
    if (short.length) {
      c.release(); await pool.end();
      die(`verb row(s) released to the hub with no flashcard drill: ${short.map((v) => `${v.verb} (${v.id})`).join(', ')}. DRILL_ADDITIONS is empty because all seven had one.`);
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
        + `  Word mode hands every real word over as a pre-spelled tile, so it CANNOT test a spelling, which is the\n`
        + `  whole of what this lesson teaches. The frames are "ici" and "vite" for exactly this reason.`,
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
        wrongWay.push(
          `${d.id} is marked scorable: ${d.scorable} and normalizeFr says ${distinguishable}`
          + ` ("${row.fr}" vs "${d.wrong}")`,
        );
      }
    }
    if (wrongWay.length) {
      c.release(); await pool.end();
      die(
        `the dictée's scoring claims disagree with the real normalizeFr:\n    ${wrongWay.join('\n    ')}\n`
        + `  If normalizeFr has learned to keep diacritics, the accent row can move and the corpus header needs\n`
        + `  rewriting. If it has not, fix the table.`,
      );
    }
    if (DICTEE_NEAR_MISS.length !== DICTATION_IDS.length) {
      c.release(); await pool.end();
      die(`${DICTEE_NEAR_MISS.length} near misses for ${DICTATION_IDS.length} targets. Every target needs the error a learner would actually make against it.`);
    }
    /** THE TWO ERRORS THE LESSON EXISTS TO STOP MUST BOTH BE GRADEABLE. If the
     *  dictée cannot tell `Il vend ici.` from `Il vende ici.`, the heaviest
     *  production section in the lesson is scoring something else. */
    const theOne = DICTEE_NEAR_MISS.find((d) => d.wrong === 'Il vende ici.');
    if (!theOne?.scorable) { c.release(); await pool.end(); die('the dictée no longer grades il vend against il vende, and that is the error the lesson exists to stop'); }
    const theOther = DICTEE_NEAR_MISS.find((d) => d.wrong === 'Il réponds vite.');
    if (!theOther?.scorable) { c.release(); await pool.end(); die('the dictée no longer grades the il form given an s it does not take'); }
    const scorable = DICTEE_NEAR_MISS.filter((d) => d.scorable).length;
    if (scorable < 10) {
      c.release(); await pool.end();
      die(`only ${scorable} of ${DICTEE_NEAR_MISS.length} dictée targets are graded on the distinction they teach. An s and a bare stem are letters all the way down and should score.`);
    }
    console.log(`  dictée: ${DICTATION_IDS.length} targets, all letters mode, ${scorable} graded on the distinction and ${DICTEE_NEAR_MISS.length - scorable} not (the accent, folded by normalizeFr)`);
  }

  /* Every speak target must carry voiceflash. */
  for (const id of VERBES_RE_SPEAK_IDS) {
    const mine = AUTHORED_ITEMS.find((i) => i.id === id);
    const live2 = byId.get(id);
    const drills = mine ? (mine.drills ?? []) : [...pgArray(live2?.drills), ...(drillsAdded.has(id) ? [drillsAdded.get(id)!] : [])];
    if (!drills.includes('voiceflash')) {
      c.release(); await pool.end();
      die(`speak target ${id} carries no voiceflash, so the mic-scored deck cannot score it`);
    }
  }
  console.log(`  speak: ${VERBES_RE_SPEAK_IDS.length} targets, all voiceflash`);

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
    for (const r of RESPELL_REPAIRS) {
      const x = byId.get(r.id)!;
      if ((x.respell ?? null) !== r.from && x.respell !== r.to) {
        throw new Error(`respelling for ${r.id}: expected ${JSON.stringify(r.from)}, Postgres says ${JSON.stringify(x.respell)}. Somebody has changed this row.`);
      }
      await c.query('update content_items set respell = $2 where id = $1', [r.id, r.to]);
    }
    for (const d of DRILL_ADDITIONS) {
      // `drills` is an ENUM ARRAY (drill_kind[]), not text[]. Concatenating a
      // text[] onto it fails with "operator does not exist: drill_kind[] ||
      // text[]" and takes the whole transaction with it. The double cast is the
      // only route Postgres offers. This loop is empty in this build and is kept
      // so the next author does not rediscover the cast.
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
    + `    ${RESPELL_REPAIRS.length} respellings repaired (${RESPELL_REPAIRS_VISIBLE.length} the checker could see, ${RESPELL_REPAIRS_INVISIBLE.length} it could not)\n`
    + `    ${DRILL_ADDITIONS.length} drill addition(s)\n`
    + `    ${IMPORTED_VERBS.length} verbs imported by id, 0 authored; ${BOUNDARY_VERBS.length} named and not imported\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items\n`
    + `    fr.a2.verbes row count: ${range.rows[0].n} before, ${after.rows[0].n} after (max ${after.rows[0].mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-verbes-re-into-seed.ts\n`,
  );

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
