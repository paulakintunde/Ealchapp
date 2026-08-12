/* Merges a2.02.l1 "Irréguliers 1 : aller, venir, tenir" into
 * ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-aller-venir-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-aller-venir-into-seed.ts
 *
 * RUN THE BATCH FIRST. Order has cost real work twice: apply to Postgres, merge
 * into the seed, publish only when both agree. content:publish regenerates the
 * seed FROM the database, so a merge that runs before its batch is a lesson
 * waiting to be deleted by the next publish. Publishing is not part of a lesson
 * build.
 *
 * ── WHY THIS MERGE CARRIES ROWS ───────────────────────────────────────────
 *
 * `verbes` and `verbes-essentiels` are both outside SEED_CUT.themes: measured
 * 2026-08-12, Postgres holds 494 published rows in the first and 535 in the
 * second, against a small fraction of each in the seed. a2.11 found that NEITHER
 * of the two rows its lesson leaned on hardest was in the seed. A lesson whose
 * itemIds resolve to nothing renders empty cards on a device, so this merge
 * CARRIES all ten imported rows: six naming forms and four sentences.
 *
 * THE FOUR SENTENCES ARE a2.10's, NOT THIS LESSON'S. `fr.a2.verbes.183`/.186 are
 * a2.10.l1's `Il finit tôt.` and `Ils finissent tôt.`, and `.463`/.464 are
 * a2.10.l2's `Il part tôt.` and `Ils partent tôt.`. This build reads them and
 * carries them; it must not EDIT them, and the untouched-rows check below covers
 * that from the other side.
 *
 * THE READ-ONLY ROW IS NOT CARRIED. `appartenir` is read by the manifest so the
 * decision not to import it was taken with the row in front of it, and it is
 * named on no screen. Carrying it would put a card in the flashcard hub for a
 * fourth compound against a ceiling of three.
 *
 * ── NEVER `git checkout seed.json` ────────────────────────────────────────
 *
 * Reverting it discards other authors' uncommitted lessons. If this merge writes
 * something wrong, fix the source and run it again.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  formatIssues, quizQuestions, validateItem, validateLesson,
  type Item, type Lesson, type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { normalizeFr } from '../../ealch-v2/src/utils/score.ts';
import {
  A210_BACKREF, ALLER_VENIR, AUTHORED_IDS as CORPUS_AUTHORED_IDS, BLIND_NASALS,
  COMPOUNDS, DICTATION_IDS, DICTEE_NEAR_MISS, DOUBLE_N, DRILL_ADDITIONS,
  FAMILY_UNIT, FRAME_WORD, FUTUR_PROCHE_SHAPE, FUTUR_PROCHE_UNIT,
  HALF_REPAIRED_NANTES, NUMBER_PAIRS, PARADIGM, PASSE_COMPOSE_PHRASES,
  PASSE_COMPOSE_SHAPE, PASSE_COMPOSE_UNIT, RESPELL_REPAIRS,
  SINGULAR_TRIPLES, TENIR_FOLLOWS_VENIR, THEME, THE_THREE, TOT_FRAME, TWO_JOBS,
  TWO_JOBS_SHARED_PREFIX, afterPronoun, toItem,
} from './data/aller-venir-corpus.ts';
import {
  IMPORTED_ROWS, IMPORTED_SENTENCE_IDS, IMPORTED_VERBS, READ_ONLY_VERBS,
} from './data/aller-venir-imported.ts';
import {
  ALLER_VENIR_LESSON, BOUNDARY_SECTION_ID, FAMILY_SECTION_ID, NOUS_ON,
  NOUS_ON_SECTION_ID, REFRAME, SHEET_ID, TENIR_CLAIM, TIMELINE, TOT_SECTION_ID,
  TWO_JOBS_ROWS, TWO_JOBS_SECTION_ID, WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT,
} from './data/aller-venir-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const LESSON: Lesson = ALLER_VENIR_LESSON;
const UNIT_ID = 'a2.02';
const UNIT_TITLE = 'Irregular Verbs 1: Aller, Venir, Tenir';
const UNIT_SUB = 'Irréguliers 1 : aller, venir, tenir';
const UNIT_CANDO = 'Can use aller, venir and tenir in the present, including venir de for the recent past';
const REFRAME_APPEARANCES = 11;
const MAX_COMPOUNDS = 3;
const AUTHORED_ITEMS: Item[] = ALLER_VENIR.map(toItem);
const AUTHORED_IDS = new Set(AUTHORED_ITEMS.map((i) => i.id));

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

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

console.log(`\n  merging a2.02.l1 into seed.json${DRY_RUN ? '  (DRY RUN)' : ''}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

/* ── The lessons this merge MUST NOT DISTURB, BY NAME ─────────────────────
 *
 * Named rather than counted. A count alone lets a one-for-one swap through, and
 * that is exactly the shape of the accident this project has already had: the
 * seed and Postgres drift, somebody's uncommitted lesson is replaced by another,
 * and the total never moves.                                                  */
const MUST_NOT_DISTURB = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const UNITS_BEFORE = seed.units.length;
/** Every item id this merge is allowed to touch. Anything else must come out the
 *  far side byte-identical, and that is checked rather than assumed. */
const MINE = new Set<string>([
  ...AUTHORED_IDS,
  ...IMPORTED_ROWS.map((r) => r.id),
  ...RESPELL_REPAIRS.map((r) => r.id),
  ...DRILL_ADDITIONS.map((d) => d.id),
]);
const UNTOUCHED_BEFORE = new Map(
  seed.items.filter((i) => !MINE.has(i.id)).map((i) => [i.id, JSON.stringify(i)] as const),
);

/** AND THE READ-ONLY ROW IS NOT IN `MINE`. If it ever drifts into the carry this
 *  fails, because a verb named on no screen and released to the hub is a card for
 *  a verb the learner has never met. */
{
  const carried = READ_ONLY_VERBS.filter((b) => MINE.has(b.id)).map((b) => b.verb);
  if (carried.length) die(`read-only verb(s) in the carry set: ${carried.join(', ')}. appartenir is read, never written.`);
}

/* ── Everything the batch checked, checked again against the POST-MERGE seed ─ */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(formatIssues(itemIssues));
const carriedIssues = IMPORTED_ROWS.flatMap((it) => validateItem(it, it.id));
if (carriedIssues.length) die(`the rows carried through the cut do not validate:\n${formatIssues(carriedIssues)}`);

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(formatIssues(lessonIssues));

const POST_MERGE_IDS = new Set([
  ...seed.items.map((i) => i.id),
  ...AUTHORED_ITEMS.map((i) => i.id),
  ...IMPORTED_ROWS.map((i) => i.id),
]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(formatDensity(density));

const missing = LESSON.itemIds.filter((id) => !POST_MERGE_IDS.has(id));
if (missing.length) {
  die(
    `${missing.length} itemId(s) will NOT be in the seed after this merge: ${missing.slice(0, 6).join(', ')}\n`
    + `  A lesson whose itemIds resolve to nothing renders empty cards on a device. Add them to the carry.`,
  );
}

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);

/* ── The claims that ARE the lesson ──────────────────────────────────────── */
{
  /** THE TWO JOBS, ON ONE SCREEN, WITH THE SHARED PREFIX IN THE HEADER. */
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === TWO_JOBS_SECTION_ID);
  if (!sec || sec.type !== 'tapTable') die(`${TWO_JOBS_SECTION_ID} is gone or is no longer a tapTable`);
  if (sec.rows.length !== TWO_JOBS.length) die(`${TWO_JOBS_SECTION_ID} has ${sec.rows.length} rows, expected ${TWO_JOBS.length}. Both uses belong on ONE screen.`);
  if (sec.cols.length !== 2) die(`${TWO_JOBS_SECTION_ID} has ${sec.cols.length} columns, expected 2`);
  if (!sec.cols[0].startsWith(TWO_JOBS_SHARED_PREFIX.trim())) die(`the first column of ${TWO_JOBS_SECTION_ID} does not lead with ${JSON.stringify(TWO_JOBS_SHARED_PREFIX.trim())}`);
  if (TWO_JOBS_ROWS.join() !== TWO_JOBS.map((j) => j.id).join()) die('the lesson and the corpus disagree about the row order of the two jobs');
  const kinds = new Set(TWO_JOBS.map((j) => j.kind));
  if (!kinds.has('place') || !kinds.has('infinitive')) die(`TWO_JOBS holds ${[...kinds].join(', ')}; BOTH sides must be present or there is no contrast`);
  sec.rows.forEach((row, i) => {
    const want = ALLER_VENIR.find((w) => w.id === TWO_JOBS[i].id)!;
    if (row.say !== want.fr) die(`row ${i + 1} of ${TWO_JOBS_SECTION_ID} plays ${JSON.stringify(row.say)}, expected ${JSON.stringify(want.fr)}`);
    if (want.afterDe !== TWO_JOBS[i].kind) die(`${TWO_JOBS[i].id} is authored with afterDe ${JSON.stringify(want.afterDe)} and TWO_JOBS says ${JSON.stringify(TWO_JOBS[i].kind)}`);
  });
  const notShared = TWO_JOBS.filter((j) => !ALLER_VENIR.find((w) => w.id === j.id)!.fr.startsWith(TWO_JOBS_SHARED_PREFIX));
  if (notShared.length) die(`${notShared.map((j) => j.id).join(', ')} does not start with ${JSON.stringify(TWO_JOBS_SHARED_PREFIX)}, so the two rows are not the same sentence up to de`);

  /** THE REASON tenir IS HERE. */
  if (TENIR_FOLLOWS_VENIR.length !== PARADIGM.length) {
    die(`tenir follows venir in ${TENIR_FOLLOWS_VENIR.length} of ${PARADIGM.length} cells. That link is the only reason this lesson holds a third verb.`);
  }
}
for (const triple of SINGULAR_TRIPLES) {
  const tails = triple.map((id) => afterPronoun(ALLER_VENIR.find((w) => w.id === id)?.respell ?? ''));
  if (new Set(tails).size !== 1) die(`the singular triple ${triple.join(' / ')} no longer sounds the same: ${tails.join(' | ')}`);
}
for (const [sing, plur] of NUMBER_PAIRS) {
  const a = ALLER_VENIR.find((w) => w.id === sing);
  const b = ALLER_VENIR.find((w) => w.id === plur);
  if (!a || !b) die(`number pair ${sing} / ${plur} does not resolve`);
  const va = (a.respell ?? '').split(' ')[1] ?? '';
  const vb = (b.respell ?? '').split(' ')[1] ?? '';
  if (!va.includes('ⁿ')) die(`${sing} respells its verb "${va}", which carries no nasal; the singular of venir and tenir is a nasal vowel`);
  if (vb.includes('ⁿ')) die(`${plur} respells its verb "${vb}", which carries a nasal; the plural is an oral vowel and a real n`);
  if (!vb.endsWith('nn')) die(`${plur} respells its verb "${vb}", which does not end on the doubled n`);
}

{
  // `intro` and `overview` are learner surfaces too: the overview card and the
  // lesson cover both draw the intro. a2.11 shipped "third person" there because
  // this walk was sections+sheets+terms. Widened 2026-08-12 after a device pass.
  const learner = [
    ...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {}),
    LESSON.intro ?? '', ...strings(LESSON.overview ?? {}),
  ].join('\n');
  const learnerProse = [
    ...prose(LESSON.sections), ...prose(LESSON.sheets ?? []), ...prose(LESSON.terms ?? {}),
    LESSON.intro ?? '', ...prose(LESSON.overview ?? {}),
  ];
  const JARGON = ['conjugation', 'conjugate', 'conjugated', 'indicative', 'morpheme', 'inflection', 'paradigm', 'orthography', 'phoneme', 'first person', 'second person', 'third person'];
  const jargon = JARGON.filter((j) => hasPhrase(learner, j));
  if (jargon.length) die(`grammar vocabulary reached a learner surface: ${jargon.join(', ')}`);
  if (!LESSON.intro) die('the lesson has no intro. It is drawn on the overview card and on the lesson cover.');
  const inIntro = JARGON.filter((j) => hasPhrase(LESSON.intro ?? '', j));
  if (inIntro.length) die(`grammar vocabulary in Lesson.intro, drawn on TWO learner surfaces: ${inIntro.join(', ')}`);

  if (!hasPhrase(learner, A210_BACKREF)) die(`${A210_BACKREF} is named nowhere, and this lesson is the payoff of two of its lessons`);
  if (!hasPhrase(learner, WHAT_FOLLOWS)) die(`"${WHAT_FOLLOWS}" appears on no screen, and three later lessons are told to quote it`);
  if (!learner.includes(TENIR_CLAIM)) die(`"${TENIR_CLAIM}" appears on no screen, and without it the third verb is arbitrary`);
  if (!learner.includes(TIMELINE)) die(`"${TIMELINE}" appears on no screen, and it is where this lesson says what the Owns is worth`);
  if (!learner.includes(NOUS_ON)) die("the nous/on statement no longer appears verbatim. It is a2.01's constant and it is imported, not reworded.");
  const holders = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(NOUS_ON))).map((s) => (s as { id?: string }).id);
  if (holders.length !== 1 || holders[0] !== NOUS_ON_SECTION_ID) die(`the nous/on statement is in ${JSON.stringify(holders)}, expected exactly [${JSON.stringify(NOUS_ON_SECTION_ID)}]`);

  const gone = THE_THREE.filter((v) => !hasPhrase(learner, v));
  if (gone.length) die(`verb(s) named by no screen: ${gone.join(', ')}`);
  const unnamed = COMPOUNDS.filter((v) => !hasPhrase(learner, v));
  if (unnamed.length) die(`compound(s) named by no screen: ${unnamed.join(', ')}`);
  if (COMPOUNDS.length > MAX_COMPOUNDS) die(`${COMPOUNDS.length} compounds, and the brief's ceiling is ${MAX_COMPOUNDS}`);
  for (const ro of READ_ONLY_VERBS) {
    if (hasPhrase(learner, ro.verb)) die(`"${ro.verb}" is on a learner surface, making a fourth compound against a ceiling of ${MAX_COMPOUNDS}`);
    if (LESSON.itemIds.includes(ro.id)) die(`${ro.id} (${ro.verb}) is in itemIds and is released to nothing`);
  }
  const family = LESSON.sections.find((s) => (s as { id?: string }).id === FAMILY_SECTION_ID);
  if (!family || !strings(family).join('\n').includes(FAMILY_UNIT)) die(`${FAMILY_SECTION_ID} no longer says where the family principle is taught. It is ${FAMILY_UNIT}.`);
  const boundary = LESSON.sections.find((s) => (s as { id?: string }).id === BOUNDARY_SECTION_ID);
  if (!boundary) die(`${BOUNDARY_SECTION_ID} is gone, and with it the acknowledgement that aller has a second job`);
  const bText = strings(boundary).join('\n');
  if (!bText.includes(FUTUR_PROCHE_UNIT)) die(`${BOUNDARY_SECTION_ID} does not name ${FUTUR_PROCHE_UNIT}`);
  if (!bText.includes(WHAT_FOLLOWS_UNIT)) die(`${BOUNDARY_SECTION_ID} does not carry the unit id ${WHAT_FOLLOWS_UNIT} that three later lessons are told to cite`);
  if (FUTUR_PROCHE_SHAPE.test(bText)) die(`${BOUNDARY_SECTION_ID} shows the futur proche in order to defer it, which is teaching it`);
  if (!hasPhrase(learner, PASSE_COMPOSE_UNIT)) die(`${PASSE_COMPOSE_UNIT} is named nowhere, so "a past tense, early" has nothing behind it`);

  const pcShaped = learnerProse.filter((s) => PASSE_COMPOSE_SHAPE.test(s));
  const pcPhrased = PASSE_COMPOSE_PHRASES.filter((p) => learnerProse.some((s) => hasPhrase(s, p)));
  if (pcShaped.length || pcPhrased.length) die(`a passé composé is on a learner surface: ${[...pcShaped.slice(0, 2), ...pcPhrased].join(', ')}`);
}

/* ── THE a2.10 LOOP, AND THE FOUR ROWS IT RUNS ON ────────────────────────── */
{
  const sec = LESSON.sections.find((s) => (s as { id?: string }).id === TOT_SECTION_ID);
  if (!sec || sec.type !== 'listening') die(`${TOT_SECTION_ID} is gone or is no longer a listening mission`);
  if (sec.lines.length !== TOT_FRAME.length * 2) die(`${TOT_SECTION_ID} plays ${sec.lines.length} lines, expected ${TOT_FRAME.length * 2}`);
  const offFrame = sec.lines.filter((l) => !hasPhrase(l.fr, FRAME_WORD));
  if (offFrame.length) die(`${TOT_SECTION_ID} plays ${offFrame.map((l) => JSON.stringify(l.fr)).join(', ')}, which is not on the ${FRAME_WORD} frame`);
  const theirs = TOT_FRAME.filter((r) => r.unit !== UNIT_ID).flatMap((r) => [r.singular, r.plural]);
  const notImported = theirs.filter((id) => !IMPORTED_SENTENCE_IDS.includes(id));
  if (notImported.length) die(`${notImported.join(', ')} is played on ${TOT_SECTION_ID} and is not one of the imported rows`);
  /** AND THE FOUR ARE NOT THIS BUILD'S TO AUTHOR. If one ever appears in the
   *  authored corpus, this build has started rewriting a2.10's content. */
  const stolen = theirs.filter((id) => CORPUS_AUTHORED_IDS.includes(id));
  if (stolen.length) die(`${stolen.join(', ')} is both imported and authored. Those rows belong to ${A210_BACKREF} and this build only reads them.`);
}

/* ── The one sheet ───────────────────────────────────────────────────────── */
{
  if ((LESSON.sheets ?? []).length !== 1) die(`${(LESSON.sheets ?? []).length} sheets, expected 1`);
  const sheet = (LESSON.sheets ?? []).find((s) => s.id === SHEET_ID);
  if (!sheet) die(`${SHEET_ID} is gone`);
  const grid = (sheet.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-three-verbs');
  if (!grid || grid.type !== 'table') die(`${SHEET_ID} no longer holds the three-verb grid, which is the one table the brief asked for`);
  if (grid.rows.length !== PARADIGM.length) die(`the grid has ${grid.rows.length} rows, expected ${PARADIGM.length}`);
  PARADIGM.forEach((r, i) => {
    if (grid.rows[i].join('|') !== [r.person, r.aller, r.venir, r.tenir].join('|')) {
      die(`grid row ${i + 1} reads ${JSON.stringify(grid.rows[i])} and PARADIGM says ${JSON.stringify([r.person, r.aller, r.venir, r.tenir])}`);
    }
  });
  const jobs = (sheet.sections ?? []).find((s) => (s as { id?: string }).id === 'sheet-two-jobs');
  if (!jobs || jobs.type !== 'table') die(`${SHEET_ID} no longer holds the two-job table`);
}

/* ── The id collision check, against the seed this time ──────────────────── */
{
  const taken = seed.items.filter((i) => AUTHORED_IDS.has(i.id));
  if (taken.length) {
    const differs = taken.filter((i) => {
      const mine = AUTHORED_ITEMS.find((a) => a.id === i.id)!;
      return i.fr !== mine.fr;
    });
    if (differs.length) die(`id(s) already in the seed carrying DIFFERENT content: ${differs.map((i) => `${i.id} "${i.fr}"`).join(', ')}`);
    console.log(`  ${taken.length} authored id(s) already in the seed with matching fr: this is a re-run`);
  }
}

/* ── No two non-sentence rows in one theme may share an `fr` ─────────────── */
{
  const replaced = new Set([...AUTHORED_IDS, ...IMPORTED_ROWS.map((r) => r.id)]);
  const post = [...seed.items.filter((i) => !replaced.has(i.id)), ...AUTHORED_ITEMS, ...IMPORTED_ROWS];
  const seen = new Map<string, string>();
  const clashes: string[] = [];
  for (const i of post) {
    if (i.kind === 'sentence') continue;
    // A two-element array as the key rather than a NUL join: a NUL made
    // seed-writing scripts BINARY to git and every diff opaque.
    const key = JSON.stringify([i.theme, i.fr]);
    const prev = seen.get(key);
    if (prev) clashes.push(`${i.theme} "${i.fr}": ${prev} and ${i.id}`);
    else seen.set(key, i.id);
  }
  const themesIcarry = new Set(IMPORTED_ROWS.map((r) => r.theme));
  const mine = clashes.filter((c) => themesIcarry.has(c.split(' ')[0]));
  if (mine.length) die(`fr collision inside a theme this merge writes into:\n  ${mine.join('\n  ')}\n  flashhub-coverage treats that as one card served twice.`);
  console.log(`  no fr collision in the themes this merge carries (${clashes.length} pre-existing elsewhere, none of them this build's)`);
}

/* ── a1.03: joiners enforced to ZERO, authored AND carried ──────────────── */
{
  const joiners = endingPopulation([...AUTHORED_ITEMS, ...IMPORTED_ROWS]);
  if (joiners.length !== 0) {
    die(
      `${joiners.length} row(s) this merge writes join a1.03's measured ending population: ${joiners.map((j) => `${j.id} "${j.fr}"`).join(', ')}\n`
      + `  a1-03-genre.test.ts re-measures twenty printed figures from the SEED on every run, so a carried row counts too.\n`
      + `  devenir has a gendered twin at fr.b2.philosophie.136 ("le devenir", a noun). Check which row is being carried.`,
    );
  }
  console.log('  a1.03 ending population: 0 joiners, authored or carried');
}

/* ── The respelling work: none, and the by-name lists instead ────────────── */
if (RESPELL_REPAIRS.length !== 0) die(`${RESPELL_REPAIRS.length} respelling repairs, and this build measured that none of the six naming forms carries a nasal vowel`);
for (const it of AUTHORED_ITEMS) {
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} "${it.fr}" closes a nasal with a plain n or m`);
}
for (const b of BLIND_NASALS) {
  const row = AUTHORED_ITEMS.find((i) => i.id === b.id);
  if (!row?.respell?.includes(b.must)) die(`${b.id} must respell with "${b.must}" (${b.why}); the shared checker cannot see it`);
}
for (const d of DOUBLE_N) {
  const row = AUTHORED_ITEMS.find((i) => i.id === d.id);
  if (!row?.respell?.includes(d.must)) die(`${d.id} must respell with "${d.must}" (${d.why}); the checker short-circuits on the doubled n in the French spelling`);
}
if (hasPlainNasalFor(HALF_REPAIRED_NANTES.fr, HALF_REPAIRED_NANTES.respell)) {
  die('hasPlainNasalFor now flags the half-repaired Nantes. The blind spot has closed and invariants §3 needs updating.');
}
if (!hasPlainNasalFor('bon', 'BOHN')) die('hasPlainNasalFor no longer flags a plain-n nasal at all, so every negative result here is meaningless');

/* ── The quiz, and BOTH answer-spread surfaces ───────────────────────────── */
{
  const quiz = LESSON.sections.find((s) => s.type === 'quiz');
  if (!quiz || quiz.type !== 'quiz') die('no quiz section');
  if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('more than one quiz section; the pager renders exactly one');
  const qs = quizQuestions(quiz);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half limit`);
  const noWhy = qs.filter((q) => !q.why).length;
  if (noWhy) die(`${noWhy} quiz question(s) have no why`);
  const typed = qs.filter((q) => ['typeIn', 'errorSpot'].includes(q.format ?? '')).length;
  const listen = qs.filter((q) => q.format === 'listenChoose').length;
  if (typed <= listen * 2) die(`${typed} typed against ${listen} listenChoose; the written half has to carry this quiz`);
  /** THE OWNS CARRIES THE QUIZ. If the balance tips back to the paradigms, this
   *  lesson has become the memorisation task the brief warns about. */
  const owns = qs.filter((q) => {
    const t = `${q.q} ${q.answer ?? ''} ${q.target ?? ''} ${(q.accept ?? []).join(' ')} ${(q.opts ?? []).join(' ')}`;
    return /\b(vien|ven)\w*\s+(de|d['’])/i.test(t) || /___\s+(de|d['’])\b/i.test(t) || /\b(after|follows|following)\s+de\b/i.test(t);
  });
  if (owns.length * 2 < qs.length) die(`only ${owns.length} of ${qs.length} quiz questions touch venir de. The Owns is the timeline and the paradigms are the scaffolding.`);

  // A type PREDICATE, not a bare filter: `correct` is `number | string` and
  // .filter() does not narrow it out.
  const closed = qs.filter((q): q is (typeof qs)[number] & { correct: number } => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) if ((c / closed.length) * 100 > 40) die(`quiz slot ${s} holds ${Math.round((c / closed.length) * 100)}%, over 40`);

  // The IN-MISSION surface, which nothing shuffles. MissionRich renders
  // q.opts.map in AUTHORED order.
  const inMission: { section: string; correct: number }[] = [];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct });
    if (s.type === 'trapDrill') for (const d of s.drill) inMission.push({ section: sid, correct: d.correct });
  }
  const mslots = new Map<number, number>();
  for (const q of inMission) mslots.set(q.correct, (mslots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of mslots) if ((c / inMission.length) * 100 > 40) die(`in-mission slot ${s} holds ${Math.round((c / inMission.length) * 100)}%, over 40, and nothing shuffles these`);
  let prev: { section: string; correct: number } | null = null;
  for (const q of inMission) {
    if (prev && prev.section === q.section && prev.correct === q.correct) die(`${q.section}: consecutive in-mission questions share slot ${q.correct}`);
    prev = q;
  }
  console.log(`  quiz: ${owns.length}/${qs.length} on venir de | spread ${[...slots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')} | in-mission ${[...mslots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
}

/* ── The futur proche, against the post-merge production surfaces ────────── */
{
  const out: string[] = [];
  const quiz = LESSON.sections.find((s) => s.type === 'quiz');
  if (quiz && quiz.type === 'quiz') {
    for (const q of quizQuestions(quiz)) {
      if (q.answer) out.push(q.answer);
      if (q.target) out.push(q.target);
      for (const a of q.accept ?? []) out.push(a);
      for (const o of q.opts ?? []) out.push(o);
    }
  }
  for (const s of LESSON.sections) {
    if (s.type === 'scenario') for (const t of s.turns) out.push(t.user, ...(t.alts ?? []).map((a) => a.fr));
    if (s.type === 'groupDrill') for (const g of s.groups) { if (g.check) out.push(...g.check.opts); out.push(...strings(g.items ?? [])); }
    if (s.type === 'listening') for (const q of s.questions) out.push(...q.opts);
    if (s.type === 'trapDrill') for (const d of s.drill) out.push(...d.opts);
    if (['vocabThemes', 'flashcards', 'reviewDeck', 'dictation', 'practice'].includes(s.type)) out.push(...strings(s));
  }
  for (const d of LESSON.drills ?? []) {
    for (const p of (d as { pairs?: [string, string][] }).pairs ?? []) out.push(p[1]);
    const o = d as { opts?: string[]; correct?: number };
    if (typeof o.correct === 'number' && o.opts) out.push(o.opts[o.correct]);
  }
  const leaked = out.filter((s) => FUTUR_PROCHE_SHAPE.test(s));
  if (leaked.length) die(`the futur proche reached a production surface: ${[...new Set(leaked)].slice(0, 4).map((s) => JSON.stringify(s)).join(', ')}. That is ${FUTUR_PROCHE_UNIT}.`);
  console.log(`  futur proche: 0 on ${out.length} production surfaces`);
}

/* ── The dictée, against the POST-MERGE item set, and what it can grade ──── */
{
  const postById = new Map<string, Item>([
    ...seed.items.map((i) => [i.id, i] as const),
    ...IMPORTED_ROWS.map((i) => [i.id, i] as const),
    ...AUTHORED_ITEMS.map((i) => [i.id, i] as const),
  ]);
  for (const id of DICTATION_IDS) {
    const it = postById.get(id);
    if (!it) die(`the dictée names ${id}, which will not be in the seed after this merge`);
    if (!(it.drills ?? []).includes('dictation')) die(`dictation item ${id} carries no "dictation" drill`);
    const mode = dicteeMode(it.fr);
    if (mode !== 'letters') die(`dictée target ${id} "${it.fr}" is in ${mode} mode. Word mode hands every real word over pre-spelled.`);
  }
  const wrongWay = DICTEE_NEAR_MISS.filter((d) => {
    const it = postById.get(d.id)!;
    return (normalizeFr(it.fr) !== normalizeFr(d.wrong)) !== d.scorable;
  });
  if (wrongWay.length) die(`the dictée's scoring claims disagree with the real normalizeFr: ${wrongWay.map((d) => d.id).join(', ')}`);
  const theOne = DICTEE_NEAR_MISS.find((d) => d.wrong === 'Je viens manger.');
  if (!theOne?.scorable) die('the dictée no longer grades the dropped de, and that is the error the lesson exists to stop');
  const unscorable = DICTEE_NEAR_MISS.filter((d) => !d.scorable);
  if (unscorable.length !== 1) die(`${unscorable.length} unscorable dictée targets, expected exactly 1 (the capital on Paris)`);
  console.log(`  dictée: ${DICTATION_IDS.length} targets, all letters mode, ${DICTEE_NEAR_MISS.length - 1} graded on the distinction and 1 not`);
}

/* ── The unit ────────────────────────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID) as (Unit & { lessonIds?: string[]; seq?: string | number }) | undefined;
if (!unit) die(`unit ${UNIT_ID} is not in the seed, so its lesson cannot be attached`);
if (unit.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: ${JSON.stringify(unit.title)}`);
if (unit.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: ${JSON.stringify(unit.sub)}`);
if (unit.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: ${JSON.stringify(unit.canDo)}`);
const expectedTag = `A2 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) die(`the lesson tag is ${JSON.stringify(LESSON.tag)} and the unit sits at seq ${JSON.stringify(unit.seq)}, so the header will draw ${JSON.stringify(expectedTag)}`);

/* ── Write ───────────────────────────────────────────────────────────────── */

const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing) {
  if (existing.version > LESSON.version) {
    die(`the seed carries v${existing.version} and this source is v${LESSON.version}. Move the LESSON's own version counter forward (not seed.version).`);
  }
  console.warn(
    `\n! seed.json already carries ${LESSON.id}`
    + `\n  seed: v${existing.version}, ${existing.sections.length} sections, ${existing.itemIds.length} items`
    + `\n  here: v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`
    + `\n  Overwriting with the authored copy.\n`,
  );
}

const byId = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updatedItems = 0;
let carried = 0;
/** The imported rows FIRST, so an authored id could never be shadowed by one. */
for (const it of IMPORTED_ROWS) {
  if (!byId.has(it.id)) carried++;
  byId.set(it.id, it);
}
for (const it of AUTHORED_ITEMS) {
  if (byId.has(it.id)) updatedItems++; else added++;
  byId.set(it.id, it);
}

/** THE SIX MUST CARRY A `flashcard` DRILL IN THE SEED, because every one is
 *  released by a tranche and served as a hub card. All six already carry one,
 *  which is why DRILL_ADDITIONS is empty. */
{
  const short = IMPORTED_VERBS.filter((v) => !(byId.get(v.id)!.drills ?? []).includes('flashcard'));
  if (short.length) die(`verb row(s) released to the hub with no flashcard drill: ${short.map((v) => `${v.verb} (${v.id})`).join(', ')}`);
  const gendered = IMPORTED_VERBS.filter((v) => byId.get(v.id)!.gender);
  if (gendered.length) die(`imported verb(s) carrying a gender: ${gendered.map((v) => v.verb).join(', ')}. A naming form is not a noun.`);
}

const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

const out: Seed = {
  ...seed,
  items: [...byId.values()],
  lessons: [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON],
  units: seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u)),
};

/* ── Nothing else moved ──────────────────────────────────────────────────── */

const survivors = out.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const lost = MUST_NOT_DISTURB.filter((id) => !survivors.includes(id));
if (lost.length) die(`this merge would DROP lesson(s): ${lost.join(', ')}`);
const gained = survivors.filter((id) => !MUST_NOT_DISTURB.includes(id));
if (gained.length) die(`this merge would ADD lesson(s) it does not own: ${gained.join(', ')}`);
if (out.units.length !== UNITS_BEFORE) die(`unit count moved from ${UNITS_BEFORE} to ${out.units.length}`);
if (out.version !== seed.version) die('seed.version moved. It is the OTA snapshot number and a merge must never touch it.');

/** AND THE READ-ONLY ROW IS STILL ABSENT unless somebody else put it there. */
{
  const before = new Set(seed.items.map((i) => i.id));
  const introduced = READ_ONLY_VERBS.filter((b) => !before.has(b.id) && out.items.some((i) => i.id === b.id));
  if (introduced.length) die(`this merge would carry read-only verb(s) into the seed: ${introduced.map((b) => b.verb).join(', ')}`);
}

/** Every row this merge does not own comes out BYTE-IDENTICAL. A count would not
 *  catch an edit, and an edit is what the publish hazard is made of. This is also
 *  what protects a2.10's four sentences from being rewritten by this build. */
{
  const changed: string[] = [];
  const dropped: string[] = [];
  const after = new Map(out.items.map((i) => [i.id, i] as const));
  for (const [id, before] of UNTOUCHED_BEFORE) {
    const now = after.get(id);
    if (!now) { dropped.push(id); continue; }
    if (JSON.stringify(now) !== before) changed.push(id);
  }
  if (dropped.length) die(`this merge would DROP ${dropped.length} row(s) it does not own: ${dropped.slice(0, 6).join(', ')}`);
  if (changed.length) die(`this merge would EDIT ${changed.length} row(s) it does not own: ${changed.slice(0, 6).join(', ')}`);
  console.log(`  ${UNTOUCHED_BEFORE.size} rows this merge does not own: byte-identical`);
}

console.log(
  `\n  ${added} item(s) authored and added, ${updatedItems} updated`
  + `\n  ${carried} row(s) CARRIED through the seed cut so no card draws blank`
  + `\n    ${IMPORTED_VERBS.length} naming forms and ${IMPORTED_SENTENCE_IDS.length} sentences (${A210_BACKREF}'s, on the ${FRAME_WORD} frame)`
  + `\n  ${RESPELL_REPAIRS.length} respelling change(s), ${DRILL_ADDITIONS.length} drill change(s)`
  + `\n  ${READ_ONLY_VERBS.length} verb(s) read and NOT carried: ${READ_ONLY_VERBS.map((b) => b.verb).join(', ')}`
  + `\n  unit ${UNIT_ID}: lessonIds ${JSON.stringify(nextUnit.lessonIds)}`
  + `\n  lesson ${LESSON.id} v${LESSON.version}: ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`
  + `\n  items ${seed.items.length} → ${out.items.length}`
  + `\n  ${MUST_NOT_DISTURB.length} other lesson(s) untouched, by name`,
);

if (DRY_RUN) {
  console.log('\n  DRY RUN: seed.json not written.\n');
  process.exit(0);
}

// Canonical formatting. A whole-file rewrite at this shape is correct and a huge
// git diff here is a real content change rather than a reformat.
writeFileSync(SEED, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
console.log(`\n  seed.json written. seed.version left at ${out.version}.\n  NEXT: cd ../ealch-v2 && node --test "src/**/*.test.ts"\n`);
