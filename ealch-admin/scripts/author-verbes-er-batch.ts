/* Applies a2.01.l1 "Les verbes en -ER" to Postgres: 25 authored rows, 8
 * respelling repairs, 1 voiceflash drill addition, and the lesson (a REBUILD of
 * the pre-v2 stub already in the unit, v2 -> v3). Validates EVERYTHING before it
 * opens a transaction.
 *
 *     pnpm tsx scripts/author-verbes-er-batch.ts --dry-run
 *     pnpm tsx scripts/author-verbes-er-batch.ts
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
 *    It would overwrite two of this lesson's thirty verbs with nouns.
 *
 * 2. THIS LESSON AUTHORS NO INFINITIVE. All thirty already exist and are
 *    imported by id. The manifest in data/verbes-er-imported.ts is a recorded
 *    read and is verified field by field below; a stale manifest puts the lesson
 *    ahead of rows nobody has looked at.
 *
 * 3. a1.03 DOES NOT MOVE. Every authored row is a `sentence` with no `gender`
 *    and no bare single-word `fr`, so none can join a1.03's measured ending
 *    population. This is proved through the REAL `endingPopulation` and the
 *    script dies if the count is not zero.
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
import { Pool } from 'pg';
import {
  ALLER_FORMS, A209_CHANGED_STEMS, A209_STEM_CHANGERS, AUDIBLE_ENDINGS, DICTATION_IDS, DRILL_ADDITIONS,
  HOMOPHONE_PAIRS, OWNED_ID_RANGE, RESPELL_REPAIRS, SILENT_ENDINGS, THEME, THE_THIRTY,
  VERBES_ER, toItem,
} from './data/verbes-er-corpus.ts';
import { IMPORTED_ROWS, IMPORTED_VERBS, READING_ONLY_IDS } from './data/verbes-er-imported.ts';
import {
  CONTRAST_SECTION_ID, NOUS_ON, NOUS_ON_SECTION_ID, REFRAME, VERBES_ER_LESSON,
  VERBES_ER_DICTATION_IDS, VERBES_ER_SPEAK_IDS,
} from './data/verbes-er-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = VERBES_ER_LESSON;
const UNIT_ID = 'a2.01';

/** Asserted against explicit constants, never figures derived from the lesson.
 *  A derived count compares the content to itself and passes on any rewording. */
/** TEN over the whole lesson object: NINE learner-facing appearances across nine
 *  different sections, plus the `reframe` field itself, which `strings()` walks
 *  like any other. The density validator's own rule counts SECTIONS and wants at
 *  least three; nine is deliberate. */
const REFRAME_APPEARANCES = 10;
const REFRAME_SECTIONS = 9;
const EXPECTED_SECTIONS = 24;
const EXPECTED_ACTS = 6;
const EXPECTED_TRIGGERS = 5;
const EXPECTED_ROUNDS = 5;
const EXPECTED_QUESTIONS = 30;
const EXPECTED_AUTHORED = 25;
const EXPECTED_IMPORTED_VERBS = 30;
const EXPECTED_RESPELL_REPAIRS = 8;
const EXPECTED_DICTATION = 7;
const EXPECTED_SHEETS = 2;

/** Copied BYTE FOR BYTE from the probe's unit dump on 2026-08-11, not from the
 *  brief. The brief has `title` and `sub` swapped and its `sub` is not in the
 *  database at all; a retyped apostrophe has made a batch guard fire before. */
const UNIT_TITLE = 'Regular -ER Verbs';
const UNIT_SUB = 'Les verbes en -ER';
const UNIT_CANDO = 'Can conjugate any regular -er verb in the present and use it in a real sentence';

/** Grammar vocabulary that must not reach a learner surface. Deliberately short:
 *  a checker that fires on ordinary teaching prose gets silenced wholesale.
 *  `infinitive` is NOT here, because it is a glossary KEY and the chip a learner
 *  sees reads "the naming form". */
const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme', 'first person', 'third person'];

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
 *  A word-level guard must not read IPA. The scene's break card carries
 *  `/ʒə tʁa.va.je lœ̃.di/` for `Je travaille lundi.`, and IPA separates syllables
 *  with a full stop, so `.va.` reads as a standalone word `va` and the
 *  "aller is never conjugated" check fired on it. That is a guard failing on
 *  legitimate content, which is how a guard comes to be deleted by the next
 *  author. Prose is scanned; transcriptions are not. */
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

const AUTHORED_ITEMS: Item[] = VERBES_ER.map(toItem);

console.log(`\n  a2.01.l1 "Les verbes en -ER" → ${describeTarget()}${DRY_RUN ? '  (DRY RUN)' : ''}\n`);

/* ── Counts, against constants ───────────────────────────────────────────── */

if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) die(`expected ${EXPECTED_AUTHORED} authored rows, found ${AUTHORED_ITEMS.length}`);
if (IMPORTED_VERBS.length !== EXPECTED_IMPORTED_VERBS) die(`expected ${EXPECTED_IMPORTED_VERBS} imported verbs, found ${IMPORTED_VERBS.length}`);
if (THE_THIRTY.length !== EXPECTED_IMPORTED_VERBS) die(`THE_THIRTY holds ${THE_THIRTY.length} verbs, expected ${EXPECTED_IMPORTED_VERBS}`);
if (RESPELL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`expected ${EXPECTED_RESPELL_REPAIRS} respelling repairs, found ${RESPELL_REPAIRS.length}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`expected ${EXPECTED_ACTS} acts, found ${(LESSON.acts ?? []).length}`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} error triggers, found ${(LESSON.errorTriggers ?? []).length}`);
if ((LESSON.sheets ?? []).length !== EXPECTED_SHEETS) die(`expected ${EXPECTED_SHEETS} reference sheets, found ${(LESSON.sheets ?? []).length}`);
if (DICTATION_IDS.length !== EXPECTED_DICTATION) die(`expected ${EXPECTED_DICTATION} dictée targets, found ${DICTATION_IDS.length}`);
if (VERBES_ER_DICTATION_IDS.join() !== DICTATION_IDS.join()) die('the dictée section and the corpus disagree about the targets');

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
}

/** THE IDENTITY THAT IS THE LESSON. `Il parle français.` and `Ils parlent
 *  français.` must carry the SAME respelling string, character for character.
 *  Checked as an equality rather than trusted to survive an edit: a well-meaning
 *  pass that "clarified" one of them would destroy the only evidence the lesson
 *  has. Same for the travailler pair. */
for (const [a, b] of HOMOPHONE_PAIRS) {
  const x = VERBES_ER.find((w) => w.id === a);
  const y = VERBES_ER.find((w) => w.id === b);
  if (!x || !y) die(`homophone pair ${a} / ${b} does not resolve against the authored corpus`);
  if (x.respell !== y.respell) {
    die(
      `${a} is respelled "${x.respell}" and ${b} is respelled "${y.respell}".\n`
      + `  These two sentences are ONE SOUND. If the respellings differ, the lesson teaches a difference that is not there.`,
    );
  }
  if (x.ipa !== y.ipa) die(`${a} and ${b} carry different IPA (${x.ipa} vs ${y.ipa}) and they are the same sound`);
  if (x.fr === y.fr) die(`${a} and ${b} are the same sentence, so the pair proves nothing`);
}
console.log(`  homophone pairs verified identical: ${HOMOPHONE_PAIRS.map(([a, b]) => `${a}=${b}`).join(', ')}`);

/** The word-internal nasals, asserted BY NAME. hasPlainNasalFor needs the n or m
 *  to END a token, so `MOHNTR` and `DAHNS` would both pass while being wrong.
 *  This is invariants §3's blind spot and it bites exactly two rows here. */
{
  const montres = VERBES_ER.find((w) => w.id === 'fr.a2.verbes.123');
  if (!montres?.respell?.includes('mohⁿtr')) die('fr.a2.verbes.123 must respell montres as mohⁿtr. hasPlainNasalFor cannot see a word-internal nasal, so this is checked by name.');
  const dansent = VERBES_ER.find((w) => w.id === 'fr.a2.verbes.113');
  if (!dansent?.respell?.includes('dahⁿs')) die('fr.a2.verbes.113 must respell dansent as dahⁿs, for the same reason.');
  if (hasPlainNasalFor('Tu montres tes papiers.', 'tü mohntr tay pa-PYAY')) {
    die('hasPlainNasalFor now catches a word-internal nasal. If the checker has learned to see them, invariants §3 needs updating and these by-name checks can go.');
  }
}

/** The false-positive side of the same checker, also by name, so a later author
 *  does not "repair" a correct row. `donne` and `aime` carry REAL consonants. */
if (hasPlainNasalFor("On donne son adresse à l'agent.", 'ohⁿ don sohⁿ-na-dress a la-ZHAHⁿ')) {
  die('the donne row is now flagged. /dɔn/ is a real n and must not take a superscript.');
}
if (hasPlainNasalFor("J'aime beaucoup mon quartier.", 'zhem bo-koo mohⁿ kar-TYAY')) {
  die('the aime row is now flagged. /ɛm/ is a real m and must not take a superscript.');
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

/* ── The repairs, through the REAL checker, in both directions ───────────── */

for (const r of RESPELL_REPAIRS) {
  if (hasPlainNasalFor(r.fr, r.to)) die(`the replacement for ${r.id} "${r.fr}" still closes a nasal with a plain n or m: ${r.to}`);
  if (!hasPlainNasalFor(r.fr, r.from)) {
    die(
      `${r.id} "${r.fr}" is listed as a repair but its stored value "${r.from}" is NOT flagged by hasPlainNasalFor.\n`
      + `  A variant that merely differs is not a violation (invariants §9). Withdraw it from the repair list.`,
    );
  }
}
console.log(`  ${RESPELL_REPAIRS.length} repairs: every "from" is flagged and every "to" is clean, through the real checker`);

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

if (JSON.stringify(LESSON).includes('"autoplay"')) {
  die('autoplay is authored somewhere. It is declared in schema.ts and read by no component. Use audioFirst.');
}
if (JSON.stringify(LESSON).includes('"imageRef"')) {
  die('an imageRef is authored. lesson-contract.test.ts does not check it and an unregistered ref draws a blank box.');
}

const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one.`);

/* ── The learner-facing surfaces ─────────────────────────────────────────── */

const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
const learnerFacing = [
  ...strings(LESSON.sections),
  ...strings(LESSON.sheets ?? []),
  ...strings(LESSON.terms ?? {}),
];
const learnerText = learnerFacing.join('\n');
/** The same surfaces with transcriptions excluded, for the word-level guards. */
const learnerProse = [
  ...prose(LESSON.sections),
  ...prose(LESSON.sheets ?? []),
  ...prose(LESSON.terms ?? {}),
];

const jargon = JARGON.filter((j) => hasPhrase(learnerText, j));
if (jargon.length) die(`grammar vocabulary reached a learner surface: ${jargon.join(', ')}`);

/* ── THE CONTRAST IS THE LESSON, AND IT IS ONE SCREEN ────────────────────── */
{
  const FOUR_SILENT = ['je parle', 'tu parles', 'il parle', 'ils parlent'];
  const TWO_AUDIBLE = ['nous parlons', 'vous parlez'];
  const carries = LESSON.sections.filter((s) => {
    const text = strings(s).join('\n').toLowerCase();
    return FOUR_SILENT.every((f) => text.includes(f)) && TWO_AUDIBLE.every((f) => text.includes(f));
  }).map((s) => (s as { id?: string }).id ?? '?');
  if (!carries.includes(CONTRAST_SECTION_ID)) {
    die(
      `${CONTRAST_SECTION_ID} does not carry all four silent forms AND both audible ones (sections that do: ${carries.join(', ') || 'none'}).\n`
      + `  THAT CONTRAST IS THE LESSON. Split across four missions it is invisible and this becomes a table.`,
    );
  }
  const table = LESSON.sections.find((s) => (s as { id?: string }).id === CONTRAST_SECTION_ID);
  if (!table || table.type !== 'tapTable') die(`${CONTRAST_SECTION_ID} is a ${table?.type}, expected a tapTable`);
  if (table.rows.length !== 6) die(`${CONTRAST_SECTION_ID} has ${table.rows.length} rows, expected 6. tapTable is not in ownsLayout(), so a longer table runs past the fold.`);
  console.log(`  the contrast is on one screen: ${CONTRAST_SECTION_ID}, ${table.rows.length} rows`);
}

/** The endings themselves, taught by name rather than by count. */
for (const e of [...SILENT_ENDINGS, ...AUDIBLE_ENDINGS]) {
  if (!learnerText.includes(e)) die(`the ending "${e}" appears on no screen`);
}

/* ── ALL THIRTY, BY NAME. A count passes after somebody swaps one out. ───── */
{
  const missing = THE_THIRTY.filter((v) => !hasPhrase(learnerText, v));
  if (missing.length) die(`verb(s) named by no screen: ${missing.join(', ')}`);
  const ids = new Set(LESSON.itemIds);
  const unreleased = IMPORTED_VERBS.filter((v) => !ids.has(v.id)).map((v) => v.verb);
  if (unreleased.length) die(`verb(s) on a screen but not in itemIds: ${unreleased.join(', ')}`);
  console.log(`  all ${THE_THIRTY.length} verbs named individually and released by id`);
}

/* ── THE nous / on STATEMENT IS ONE SECTION ──────────────────────────────── */
{
  const holders = LESSON.sections
    .filter((s) => strings(s).some((x) => x.includes(NOUS_ON)))
    .map((s) => (s as { id?: string }).id ?? '?');
  if (holders.length !== 1 || holders[0] !== NOUS_ON_SECTION_ID) {
    die(
      `the nous/on statement lives in ${holders.length} section(s) (${holders.join(', ') || 'none'}), expected exactly ${NOUS_ON_SECTION_ID}.\n`
      + `  Nineteen later A2 lessons quote this. Scattered across three cards, "where is this said?" has no answer.`,
    );
  }
  console.log(`  nous/on stated once, in ${holders[0]}`);
}

/* ── The neighbours keep their lessons ───────────────────────────────────── */

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz || quiz.type !== 'quiz') die('no quiz section');
const qs = quizQuestions(quiz);

/** WHAT THE LEARNER IS ASKED TO PRODUCE. Narrower than "a production section",
 *  and the only scope on which the stem-change guard is honest: s16-notmine
 *  NAMES manger and préférer in order to hand them to a2.09, which is the lesson
 *  doing its job rather than crossing a boundary. A guard that fires on that is
 *  a guard the next author deletes. */
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
    // EVERY option, not only the correct one. A learner reads all four and has
    // to consider each, so a neighbour's material in a distractor is still a
    // neighbour's material put in front of them. Reading only opts[correct] is
    // what let `nous mangeons` through the first version of this guard.
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) out.push(...g.check.opts);
    if (s.type === 'listening') for (const q of s.questions) out.push(...q.opts);
    if (s.type === 'trapDrill') for (const d of s.drill) out.push(...d.opts);
  }
  for (const d of LESSON.drills ?? []) {
    for (const p of (d as { pairs?: [string, string][] }).pairs ?? []) out.push(p[1]);
    const o = d as { opts?: string[]; correct?: number };
    if (typeof o.correct === 'number' && o.opts) out.push(o.opts[o.correct]);
  }
  return out;
}

/** And the vocabulary surfaces, which is a different scope again: a word in a
 *  deck is a word the learner is being handed, whether or not they type it. */
function deckStrings(): string[] {
  const out: string[] = [];
  for (const s of LESSON.sections) {
    if (['vocabThemes', 'flashcards', 'reviewDeck', 'dictation', 'practice'].includes(s.type)) out.push(...strings(s));
    if (s.type === 'groupDrill') for (const g of s.groups) out.push(...strings(g.items ?? []));
  }
  return out;
}

const PRODUCTION_SURFACES = [...producedStrings(), ...deckStrings()];

{
  const leaked = [...A209_STEM_CHANGERS, ...A209_CHANGED_STEMS]
    .filter((v) => PRODUCTION_SURFACES.some((s) => hasPhrase(s, v)));
  if (leaked.length) die(`a stem-changing verb reached a production surface: ${leaked.join(', ')}. Every stem change is a2.09, and it is the very next lesson.`);
  const amongThirty = A209_STEM_CHANGERS.filter((v) => (THE_THIRTY as readonly string[]).includes(v));
  if (amongThirty.length) die(`stem-changing verb(s) among the thirty: ${amongThirty.join(', ')}`);
  console.log('  no stem-changing verb on any production surface, and none among the thirty');
}

/** The hand-off is asserted PRESENT, so a later cleanup that removes it has to
 *  argue with a test rather than with nobody. The lesson is worse without it:
 *  a learner who meets manger in the wild and cannot place it has been left to
 *  conclude the pattern is unreliable. */
if (!hasPhrase(learnerText, 'manger')) {
  die('manger appears nowhere. The lesson gives it up to a2.09 and has to SAY so, or the learner meets it cold.');
}

/** aller may be NAMED, once, as the trap. It may not be conjugated anywhere. */
{
  const conjugated = ALLER_FORMS.filter((f) => learnerProse.some((s) => hasPhrase(s, f)));
  if (conjugated.length) die(`a form of aller reached a learner surface: ${conjugated.join(', ')}. aller is a2.02.`);
  if (!hasPhrase(learnerText, 'aller')) die('aller is named nowhere. One line naming it as a trap is the ceiling, and it is also the floor.');
  console.log('  aller named as a trap, conjugated nowhere');
}

/** The reading-only rows never reach a surface the learner produces into. */
{
  const produce = [...VERBES_ER_SPEAK_IDS, ...VERBES_ER_DICTATION_IDS];
  const bad = READING_ONLY_IDS.filter((id) => produce.includes(id));
  if (bad.length) die(`reading-only row(s) reached a production surface: ${bad.join(', ')}`);
}

/* ── The listening mission carries the Owns ──────────────────────────────── */
{
  const ear = LESSON.sections.find((s) => s.type === 'listening');
  if (!ear || ear.type !== 'listening') die('no listening section. The Owns is an ear problem and needs one.');
  const asksThePerson = ear.questions.some((q) => {
    const t = `${q.q} ${q.opts.join(' ')} ${q.why ?? ''}`.toLowerCase();
    return (t.includes('how many people') || t.includes('who is speaking') || t.includes('what told you'))
      && (t.includes('pronoun') || t.includes('the sound does not say'));
  });
  if (!asksThePerson) {
    die('no listening question requires naming the person where the verb cannot tell you. That question IS the Owns.');
  }
  for (const q of ear.questions) if (!q.why) die(`listening question has no why: ${q.q}`);
  console.log(`  listening: ${ear.lines.length} lines, ${ear.questions.length} questions, and the person question is present`);
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
  // reaches matchesAccept, so running the accept check over it would demand an
  // `accept` list that nothing reads.
  if (['typeIn', 'errorSpot'].includes(q.format ?? '')) {
    if (!matchesAccept(q.answer ?? '', q.accept ?? [])) {
      die(`free-text question does not accept the answer it displays: ${q.answer}`);
    }
  }
  if (q.format === 'speak' && !q.target) die(`speak question has no target: ${q.q}`);
  /** A `listenChoose` whose options are the thing being heard needs `say`, or
   *  ListenChooseCard speaks opts[correct] — which on these questions would
   *  speak the answer, and on one of them would speak an English sentence. */
  if (q.format === 'listenChoose' && !q.say) die(`listenChoose without a say: ${q.q}`);
}
console.log(`  quiz: ${qs.length} questions, ${mcq} mcq, formats ${[...new Set(qs.map((q) => q.format ?? 'mcq'))].sort().join('/')}`);

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
 *  MissionRich renders q.opts.map in AUTHORED ORDER. */
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

/* ── Sheets ──────────────────────────────────────────────────────────────── */
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
  /** ReferenceSheet.tsx draws these three and nothing else. A cheatSheet inside
   *  a sheet draws its title and no rows, which a1.13 ships today. */
  const SHEET_RENDERS = new Set(['teach', 'letterGrid', 'table']);
  const dead = (LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? [])
    .filter((sec) => !SHEET_RENDERS.has(sec.type))
    .map((sec) => `${sh.id}: a ${sec.type} section, which the sheet renderer does not draw`));
  if (dead.length) die(dead.join('\n  '));
}

/* ── Tranches release what has been taught, and nothing else ─────────────── */
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
  for (const row of IMPORTED_ROWS) {
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
    die(`the recorded manifest has DRIFTED from Postgres:\n  ${drift.slice(0, 8).join('\n  ')}\n  Regenerate with pnpm tsx scripts/_a201_manifest.ts`);
  }
  console.log(`  manifest verified against Postgres: ${touched.length} rows, field by field`);

  /** NOT ONE of the thirty may carry a gender. A gendered single-word row joins
   *  a1.03's ending population, and this lesson RELEASES all thirty into the
   *  flashcard hub. `fr.a1.ecole.050` is `écouter` with gender 'm' on it, which
   *  is why this lesson routes around that row. */
  {
    const gendered = IMPORTED_VERBS.filter((v) => byId.get(v.id)?.gender);
    if (gendered.length) {
      c.release(); await pool.end();
      die(`imported verb(s) carrying a gender: ${gendered.map((v) => `${v.verb} (${v.id})`).join(', ')}. An infinitive is not a noun, and a gendered single-word row joins a1.03's measured population.`);
    }
  }

  /* The ids this lesson claims must be free, and the check is a COUNT as well as
     a maximum: a highest-id check misses a concurrent lesson landing below it. */
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
     here is a sentence, so this should find nothing; it is run anyway, because
     "should" is what the flashhub failure mode is made of. */
  const nonSentence = AUTHORED_ITEMS.filter((i) => i.kind !== 'sentence');
  if (nonSentence.length) {
    c.release(); await pool.end();
    die(`${nonSentence.length} authored row(s) are not sentences. See the corpus header: this lesson authors sentences only.`);
  }

  /* THE DICTÉE MODE, THROUGH THE REAL FUNCTION. Word mode hands every real word
     over pre-spelled, so it cannot test a silent ending. Every target must spell
     from LETTERS. */
  for (const id of DICTATION_IDS) {
    const row = AUTHORED_ITEMS.find((i) => i.id === id);
    if (!row) { c.release(); await pool.end(); die(`dictée target ${id} is not an authored row`); }
    const mode = dicteeMode(row.fr);
    if (mode !== 'letters') {
      c.release(); await pool.end();
      die(
        `dictée target ${id} "${row.fr}" is in ${mode} mode.\n`
        + `  Word mode hands every real word over as a pre-spelled tile, so it CANNOT test a silent ending, which is this lesson's whole subject. Shorten it under the letter limit.`,
      );
    }
    if (!row.drills?.includes('dictation')) { c.release(); await pool.end(); die(`dictée target ${id} carries no dictation drill`); }
  }
  console.log(`  dictée: ${DICTATION_IDS.length} targets, all in letters mode`);

  /* Every speak target must carry voiceflash AFTER this build's additions. */
  for (const id of VERBES_ER_SPEAK_IDS) {
    const mine = AUTHORED_ITEMS.find((i) => i.id === id);
    const live2 = byId.get(id);
    const drills = mine ? (mine.drills ?? []) : [...pgArray(live2?.drills), ...(drillsAdded.has(id) ? [drillsAdded.get(id)!] : [])];
    if (!drills.includes('voiceflash')) {
      c.release(); await pool.end();
      die(`speak target ${id} carries no voiceflash, so the mic-scored deck cannot score it`);
    }
  }
  console.log(`  speak: ${VERBES_ER_SPEAK_IDS.length} targets, all voiceflash`);

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
  const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) {
    c.release(); await pool.end();
    die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${JSON.stringify(unit.seq)}, so the header will draw ${JSON.stringify(expectedTag)}`);
  }
  /** THE REBUILD. The unit already carries a2.01.l1 and this build replaces it
   *  in place; lessonIds must not grow a duplicate. */
  const already = (unit.lessonIds ?? []).includes(LESSON.id);
  console.log(`  unit ${UNIT_ID}: seq ${JSON.stringify(unit.seq)}, tag ${expectedTag}, lessonIds ${JSON.stringify(unit.lessonIds ?? [])}${already ? '  (rebuild in place)' : '  (first lesson)'}`);
  const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

  /** The version must move FORWARD when the CONTENT moves.
   *
   *  Two things have to be true at once and a single `>` gets only one of them.
   *  Re-running this script unchanged must be a no-op, because the first run of
   *  a batch has rolled back on an enum-array cast before and had to be run
   *  again. And a DIFFERENT body must never land on a number Postgres has
   *  already used, or the database and the seed both say "v4" and hold different
   *  content, which is the drift this project has lost work to twice.
   *
   *  So: equal version is legal only when the stored body is byte-identical. */
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
    // canonicalJson, not JSON.stringify. Postgres `jsonb` does not preserve key
    // order — it normalises keys on write — so a plain stringify comparison
    // against a round-tripped body NEVER matches and every re-run would look
    // like a rewrite. Found by this script refusing an identical body.
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
      // text[]" and takes the whole transaction with it. The double cast is not
      // decoration: text[] -> drill_kind[] is the only route Postgres offers.
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
    + `    ${RESPELL_REPAIRS.length} respellings repaired (nasal closed with a plain n)\n`
    + `    ${DRILL_ADDITIONS.length} voiceflash drill added\n`
    + `    ${IMPORTED_VERBS.length} verbs imported by id, 0 authored\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items\n`
    + `    fr.a2.verbes row count: ${range.rows[0].n} before, ${after.rows[0].n} after (max ${after.rows[0].mx})\n\n`
    + `  NEXT: pnpm tsx scripts/merge-verbes-er-into-seed.ts\n`,
  );

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
