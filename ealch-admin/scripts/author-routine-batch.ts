/* Applies a1.25.l1 "La routine quotidienne" to Postgres: 1 authored row, 3
 * respelling repairs, 5 respellings added where there were none, 3 voiceflash
 * drills added, 1 IPA repair, the lesson, and the unit rebinding from the dead
 * `routine` theme to `routines`. Validates EVERYTHING before it opens a
 * transaction.
 *
 *     pnpm tsx scripts/author-routine-batch.ts --dry-run
 *     pnpm tsx scripts/author-routine-batch.ts
 *
 * Order matters and it has cost real work twice: apply to Postgres FIRST, merge
 * into the seed SECOND, and publish only when both agree. content:publish
 * regenerates seed.json FROM this database, so publishing before applying would
 * silently delete the lesson from the seed.
 *
 * ── THE ONE THING TO READ BEFORE RUNNING THIS ──────────────────────────────
 *
 * a1.03 DOES NOT MOVE, and this script proves it rather than claiming it. The
 * single authored row is `manger`: a verb, `kind: 'word'`, NO `gender`, so it
 * cannot join a1.03's measured ending population. Every other row this lesson
 * touches is already published and already counted, so a repair to a respelling
 * or a drill list changes no figure a1-03-genre.test.ts prints.
 *
 * a1.22 moved six of a1.03's twenty-seven printed figures and left the suite red
 * until they were re-measured. This build holds the authored joiner count to
 * ZERO through the real `endingPopulation` and dies if it is not zero.
 */
import './env';
import { describeTarget } from './env';
import {
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
import { dicteeMode, wordDecoys } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { Pool } from 'pg';
import {
  AUTHORED_ITEMS, DRILL_ADDITIONS, IPA_REPAIRS, JARGON, NEIGHBOUR_DEMONSTRATIVES,
  NEIGHBOUR_TEACHING, PARADIGM_FORMS, RESPELL_ADDITIONS, RESPELL_REPAIRS,
  TAKES_ARTICLE, TAKES_NOTHING, WITHDRAWN_IDS, OWNED_ID_RANGE,
} from './data/routine-corpus.ts';
import { GROUP_WHY, REUSED } from './data/routine-imported.ts';
import {
  ROUTINE_DICTATION_IDS, ROUTINE_LESSON, ROUTINE_READING_ONLY_IDS, ROUTINE_SPEAK_IDS, REFRAME,
} from './data/routine-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = ROUTINE_LESSON;
const UNIT_ID = 'a1.25';

/** Asserted against explicit constants, never figures derived from the lesson.
 *  A derived count compares the content to itself and passes on any rewording. */
const REFRAME_APPEARANCES = 8;
const EXPECTED_SECTIONS = 27;
const EXPECTED_ACTS = 6;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_QUESTIONS = 24;
const EXPECTED_AUTHORED = 1;
const EXPECTED_REUSED = 52;
const EXPECTED_RESPELL_REPAIRS = 3;
const EXPECTED_RESPELL_ADDITIONS = 5;
const EXPECTED_GROUPS = 10;

/** THE REBINDING. The unit declares a theme that holds nothing at all. */
const UNIT_THEMES_BEFORE = ['routine'];
const UNIT_THEMES_AFTER = ['routines'];
const UNIT_TITLE = 'Daily Routine';
const UNIT_SUB = 'La routine quotidienne';
const UNIT_CANDO = 'Can describe their day from getting up to going to bed';

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

console.log(`\n  a1.25.l1 "La routine quotidienne" → ${describeTarget()}${DRY_RUN ? '  (DRY RUN)' : ''}\n`);

/* ── Counts, against constants ───────────────────────────────────────────── */

if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) die(`expected ${EXPECTED_AUTHORED} authored row, found ${AUTHORED_ITEMS.length}`);
if (REUSED.length !== EXPECTED_REUSED) die(`expected ${EXPECTED_REUSED} reused rows, found ${REUSED.length}`);
if (RESPELL_REPAIRS.length !== EXPECTED_RESPELL_REPAIRS) die(`expected ${EXPECTED_RESPELL_REPAIRS} respelling repairs, found ${RESPELL_REPAIRS.length}`);
if (RESPELL_ADDITIONS.length !== EXPECTED_RESPELL_ADDITIONS) die(`expected ${EXPECTED_RESPELL_ADDITIONS} respelling additions, found ${RESPELL_ADDITIONS.length}`);
if (Object.keys(GROUP_WHY).length !== EXPECTED_GROUPS) die(`expected ${EXPECTED_GROUPS} manifest groups, found ${Object.keys(GROUP_WHY).length}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`expected ${EXPECTED_ACTS} acts, found ${(LESSON.acts ?? []).length}`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} error triggers, found ${(LESSON.errorTriggers ?? []).length}`);

/* ── The authored row ────────────────────────────────────────────────────── */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(formatIssues(itemIssues));

for (const it of AUTHORED_ITEMS) {
  if (it.id < OWNED_ID_RANGE.from || it.id > OWNED_ID_RANGE.to) {
    die(`${it.id} is outside this lesson's owned range ${OWNED_ID_RANGE.from}..${OWNED_ID_RANGE.to}`);
  }
  if (it.theme !== 'routines') die(`${it.id} is in theme "${it.theme}". This lesson writes only into "routines".`);
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} "${it.fr}" closes a nasal with a plain n or m: ${it.respell}`);
}

/** THE ONE THAT MATTERS. mahⁿ-ZHAY, not cuisine's mahn-ZHAY. */
{
  const manger = AUTHORED_ITEMS.find((i) => i.fr === 'manger');
  if (!manger) die('the authored row is no longer manger');
  if (manger.respell !== 'mahⁿ-ZHAY') die(`manger is respelled "${manger.respell}", expected mahⁿ-ZHAY. fr.a1.cuisine.041 carries the broken mahn-ZHAY and must not be copied.`);
  if (manger.gender) die('manger carries a gender. It is a verb, and a gendered single-word noun would join a1.03\'s ending population.');
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

/* ── The respelling work, through the REAL checker ───────────────────────── */

for (const r of [...RESPELL_REPAIRS, ...RESPELL_ADDITIONS]) {
  if (hasPlainNasalFor(r.fr, r.to)) die(`the replacement for ${r.id} "${r.fr}" still closes a nasal with a plain n or m: ${r.to}`);
  if (r.from !== null && !hasPlainNasalFor(r.fr, r.from)) {
    die(`${r.id} "${r.fr}" is listed as a repair but its stored value "${r.from}" is not flagged by hasPlainNasalFor. A variant that merely differs is not a violation.`);
  }
}
/** The word-internal nasal the shared checker CANNOT see, asserted by name.
 *  fr.sons.verbes-essentiels.012 ships PRAHNDR and passes while being wrong. */
{
  const prendre = RESPELL_ADDITIONS.find((r) => r.fr === 'prendre le petit déjeuner');
  if (!prendre || !prendre.to.startsWith('PRAHⁿDR')) {
    die('the prendre respelling must open PRAHⁿDR. hasPlainNasalFor cannot see a word-internal nasal, so this is checked by name.');
  }
  if (hasPlainNasalFor('prendre le petit déjeuner', 'PRAHNDR luh puh-tee day-zhuh-NAY')) {
    die('hasPlainNasalFor now catches PRAHNDR. If the checker has learned to see word-internal nasals, the invariants §3 needs updating.');
  }
}
/** The false-positive side of the same checker, also by name. The brief listed
 *  minuit as a candidate; it is not flagged, and asserting so stops a later
 *  author "repairing" a correct row. */
if (hasPlainNasalFor('minuit', 'mee-NWEE')) die('mee-NWEE is now flagged. minuit has no nasal vowel and must not carry a superscript.');

/* ── The lesson ──────────────────────────────────────────────────────────── */

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(formatIssues(lessonIssues));
const density = validateDensity(LESSON);
if (density.length) die(formatDensity(density));

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);

if (JSON.stringify(LESSON).includes('"autoplay"')) {
  die('autoplay is authored somewhere. It is declared in schema.ts and read by no component. Use audioFirst.');
}
if (JSON.stringify(LESSON).includes('"imageRef"')) {
  die('an imageRef is authored. lesson-contract.test.ts does not check it and an unregistered ref draws a blank box.');
}

const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one.`);

/* ── The learner-facing surfaces ─────────────────────────────────────────── */

const learnerFacing = [
  ...strings(LESSON.sections),
  ...strings(LESSON.sheets ?? []),
  ...strings(LESSON.terms ?? {}),
];
const learnerText = learnerFacing.join('\n');

const jargon = JARGON.filter((j) => hasPhrase(learnerText, j));
if (jargon.length) die(`grammar vocabulary reached an A1 learner: ${jargon.join(', ')}`);

/* ── THE CONTRAST IS THE LESSON, AND IT IS ONE SCREEN ────────────────────── */
{
  const both = LESSON.sections.filter((s) => {
    if (s.type !== 'tapTable') return false;
    const text = strings(s).join('\n');
    return TAKES_ARTICLE.every((p) => text.includes(p.fr)) && TAKES_NOTHING.every((p) => text.includes(p.fr));
  }).map((s) => (s as { id?: string }).id ?? '?');
  if (!both.includes('s05-contrast')) {
    die(
      `no tapTable carries all four articled parts AND both bare ones (found: ${both.join(', ') || 'none'}).\n`
      + `  That contrast IS the lesson. Split across two sections it becomes two lists of times.`,
    );
  }
  console.log(`  the contrast is on one screen: ${both.join(', ')}`);
}

/** Both halves are taught by name rather than by count, so a trim that quietly
 *  drops one goes red instead of shipping. */
for (const p of TAKES_ARTICLE) if (!learnerText.includes(p.fr)) die(`"${p.fr}" appears on no screen`);
for (const p of TAKES_NOTHING) {
  if (!learnerText.includes(p.fr)) die(`"${p.fr}" appears on no screen`);
  if (!learnerText.includes(`à ${p.fr}`)) die(`"à ${p.fr}" appears on no screen, so the learner never sees what the bare form combines with`);
}

/* ── The neighbours keep their lessons ───────────────────────────────────── */

const scenarios = LESSON.sections.filter((s) => s.type === 'scenario') as unknown as {
  turns?: { ai: string; user: string; alts?: { fr: string }[] }[];
}[];
const scenarioProduced = scenarios.flatMap((s) => (s.turns ?? [])
  .flatMap((t) => [t.user, ...(t.alts ?? []).map((a) => a.fr)]));
const productionSections = LESSON.sections.filter(
  (s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck', 'tapTable', 'practice', 'dictation', 'groupDrill'].includes(s.type),
);
const productionSurfaces = [
  ...strings(productionSections),
  ...scenarioProduced,
  ...strings(LESSON.drills ?? []),
  ...strings((LESSON.sections.find((s) => s.type === 'quiz') ?? {}) as unknown),
];

/** a2.22 owns the paradigm, and the corpus proves this lesson cannot have it. */
const paradigm = PARADIGM_FORMS.filter((f) => productionSurfaces.some((s) => hasPhrase(s, f)));
if (paradigm.length) die(`a reflexive person with ZERO corpus evidence reached a production surface: ${paradigm.join(', ')}. a2.22 owns the paradigm.`);

/** WHAT THE LEARNER IS ASKED TO PRODUCE, which is narrower than "a production
 *  section" and is the only scope on which the demonstrative guard is honest.
 *
 *  A first draft of this check scoped it to whole sections and fired on the
 *  quiz question « What is the difference between le soir and Ce soir? », which
 *  is the lesson NAMING the boundary rather than crossing it. A guard that fires
 *  on legitimate content is a guard somebody deletes, so it is scoped to the
 *  strings a learner says, types, or picks as correct. */
const PRODUCED: string[] = [
  ...scenarioProduced,
  ...qsForProduction(),
  ...(LESSON.drills ?? []).flatMap((d) => [
    ...((d as { pairs?: [string, string][] }).pairs ?? []).map((p) => p[1]),
    ...(() => {
      const o = (d as { opts?: string[]; correct?: number });
      return typeof o.correct === 'number' && o.opts ? [o.opts[o.correct]] : [];
    })(),
  ]),
];
function qsForProduction(): string[] {
  const out: string[] = [];
  for (const q of quizQuestions((LESSON.sections.find((s) => s.type === 'quiz') ?? { questions: [] }) as never)) {
    if (q.answer) out.push(q.answer);
    if (q.target) out.push(q.target);
    for (const a of q.accept ?? []) out.push(a);
    if (typeof q.correct === 'number' && q.opts?.[q.correct]) out.push(q.opts[q.correct]);
  }
  return out;
}

/** ce / cet / cette is an A2 unit. It is allowed as CONTEXT and nowhere else.
 *  Scoped to what the learner PRODUCES, not to every string: a guard written
 *  over every string fires on legitimate context and gets deleted. */
const demonstratives = NEIGHBOUR_DEMONSTRATIVES.filter((f) => PRODUCED.some((s) => hasPhrase(s, f)));
if (demonstratives.length) die(`a demonstrative is an answer the learner is asked to produce: ${demonstratives.join(', ')}. It may appear as context only.`);

/** And it must not be a card, a deck entry or a drill target either, which is
 *  the other half of "context only" and is a different scope again. */
const demoDecks = LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'dictation', 'practice'].includes(s.type));
const demoInDecks = NEIGHBOUR_DEMONSTRATIVES.filter((f) => strings(demoDecks).some((s) => hasPhrase(s, f)));
if (demoInDecks.length) die(`a demonstrative reached a deck or a drill: ${demoInDecks.join(', ')}. It may appear as context only.`);

const neighbourTaught = NEIGHBOUR_TEACHING.filter((f) => productionSurfaces.some((s) => hasPhrase(s, f)));
if (neighbourTaught.length) die(`a neighbour's teaching reached a production surface: ${neighbourTaught.join(', ')}`);

/** The demonstrative IS allowed once, and the lesson is worse without it: the
 *  scene turns on it. Asserted present so a later "cleanup" that removes it has
 *  to argue with a test rather than with nobody. */
if (!learnerText.includes('Ce soir')) {
  die('« Ce soir » appears nowhere. The opening scene turns on it as context, and removing it leaves the scene with no contrast to make.');
}

const smuggled = WITHDRAWN_IDS.filter((id) => LESSON.itemIds.includes(id));
if (smuggled.length) die(`withdrawn row(s) reached itemIds: ${smuggled.join(', ')}`);

const produceSurfaces = [...ROUTINE_SPEAK_IDS, ...ROUTINE_DICTATION_IDS];
const producedReadingOnly = ROUTINE_READING_ONLY_IDS.filter((id) => produceSurfaces.includes(id));
if (producedReadingOnly.length) die(`reading-only row(s) reached a production surface: ${producedReadingOnly.join(', ')}`);

/* ── The quiz ────────────────────────────────────────────────────────────── */

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz || quiz.type !== 'quiz') die('no quiz section');
const rounds = quiz.rounds ?? [];
if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} quiz rounds, found ${rounds.length}`);
const qs = quizQuestions(quiz);
if (qs.length !== EXPECTED_QUESTIONS) die(`expected ${EXPECTED_QUESTIONS} quiz questions, found ${qs.length}`);

const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
const mcq = qs.filter((q) => q.format === 'mcq').length;
if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half limit`);
for (const q of qs) {
  if (!q.why) die(`quiz question has no why: ${q.q}`);
  if (!q.ref || !sectionIds.includes(q.ref)) die(`quiz question ref "${q.ref}" names no section: ${q.q}`);
  if (q.opts && new Set(q.opts).size !== q.opts.length) die(`duplicate option in: ${q.q}`);
  if (['typeIn', 'errorSpot', 'speak'].includes(q.format ?? '')) {
    if (!matchesAccept(q.answer ?? '', q.accept ?? [])) die(`free-text question does not accept the answer it displays: ${q.answer}`);
  }
}

/** THE ACT-6 QUIZ IS SHUFFLED AT RUNTIME (QuizDeckView), so the authored slot is
 *  invisible to a learner. The cap is authoring hygiene and it stays. */
{
  const closed = qs.filter((q) => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct!, (slots.get(q.correct!) ?? 0) + 1);
  for (const [s, c] of slots) {
    if ((c / closed.length) * 100 > 40) die(`quiz answer slot ${s} holds ${Math.round((c / closed.length) * 100)}% of the ${closed.length} closed questions, over 40`);
  }
  console.log(`  quiz slots over ${closed.length} closed questions: ${[...slots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
}

/** THE IN-MISSION CLOSED QUESTIONS ARE NOT SHUFFLED BY ANYTHING.
 *  MissionRich.tsx:347, :732 and :1941 render q.opts.map in AUTHORED ORDER.
 *  This check does not exist in any shipped A1 batch; a1.25 adds it. */
{
  type Closed = { section: string; correct: number; opts: string[] };
  const inMission: Closed[] = [];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct, opts: g.check.opts });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct, opts: q.opts });
  }
  if (!inMission.length) die('no in-mission closed questions found. The spread check would pass vacuously.');
  const slots = new Map<number, number>();
  for (const q of inMission) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) {
    if ((c / inMission.length) * 100 > 40) {
      die(
        `in-mission answer slot ${s} holds ${Math.round((c / inMission.length) * 100)}% of the ${inMission.length} closed questions, over 40.\n`
        + `  MissionRich does NOT shuffle these, so a learner sees the authored position.`,
      );
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
}

/* ── Sheets ──────────────────────────────────────────────────────────────── */
{
  const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
  const dangling = LESSON.sections.map((s) => (s as { sheetId?: string }).sheetId)
    .filter((id): id is string => Boolean(id) && !sheetIds.has(id!));
  if (dangling.length) die(`sheetId(s) naming a sheet that does not exist: ${[...new Set(dangling)].join(', ')}`);
  const unreachable = [...sheetIds].filter((id) => !LESSON.sections.some((s) => (s as { sheetId?: string }).sheetId === id));
  if (unreachable.length) die(`sheet(s) no section links to: ${unreachable.join(', ')}`);
  /** ReferenceSheet.tsx draws these three and nothing else. A cheatSheet inside
   *  a sheet draws its title and nothing else, which a1.13 ships today. */
  const SHEET_RENDERS = new Set(['teach', 'letterGrid', 'table']);
  const dead = (LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? [])
    .filter((sec) => !SHEET_RENDERS.has(sec.type))
    .map((sec) => `${sh.id}: a ${sec.type} section, which the sheet renderer does not draw`));
  if (dead.length) die(dead.join('\n  '));
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

  const touched = [
    ...REUSED.map((r) => r.id),
    ...RESPELL_REPAIRS.map((r) => r.id),
    ...RESPELL_ADDITIONS.map((r) => r.id),
    ...DRILL_ADDITIONS.map((r) => r.id),
    ...IPA_REPAIRS.map((r) => r.id),
  ];
  const live = await c.query<{
    id: string; fr: string; en: string; respell: string | null; ipa: string | null;
    drills: string[]; status: string;
  }>('select id, fr, en, respell, ipa, drills, status from content_items where id = any($1)', [[...new Set(touched)]]);
  const byId = new Map(live.rows.map((r) => [r.id, r] as const));

  /* THE MANIFEST IS A RECORDED READ AND IT IS VERIFIED FIELD BY FIELD. A stale
     manifest puts the seed ahead of rows nobody has looked at.

     TWO VALUES ARE LEGAL FOR A ROW THIS BUILD REPAIRS: the value the manifest
     recorded (this batch has not run yet) and the value this build writes (it
     has). Anything else is somebody else's edit. Without this the script is not
     idempotent, which matters because the first run of it rolled back on an
     enum-array cast and had to be run again. */
  const repairedTo = new Map<string, string>([
    ...RESPELL_REPAIRS.map((r) => [r.id, r.to] as const),
    ...RESPELL_ADDITIONS.map((r) => [r.id, r.to] as const),
  ]);
  const drillsAdded = new Map<string, string>(DRILL_ADDITIONS.map((d) => [d.id, d.add] as const));

  const drift: string[] = [];
  for (const r of REUSED) {
    const x = byId.get(r.id);
    if (!x) { drift.push(`${r.id} is no longer in Postgres`); continue; }
    if (x.status !== 'published') drift.push(`${r.id} is ${x.status}, not published`);
    if (x.fr !== r.fr) drift.push(`${r.id} fr: manifest ${JSON.stringify(r.fr)} vs db ${JSON.stringify(x.fr)}`);
    if (x.en !== r.en) drift.push(`${r.id} en: manifest ${JSON.stringify(r.en)} vs db ${JSON.stringify(x.en)}`);

    const legalRespell = [r.respell, repairedTo.get(r.id) ?? null].filter((v) => v !== undefined);
    if (!legalRespell.includes(x.respell ?? null)) {
      drift.push(`${r.id} respell: manifest ${JSON.stringify(r.respell)} or this build's ${JSON.stringify(repairedTo.get(r.id) ?? null)}, db says ${JSON.stringify(x.respell)}`);
    }

    const d = pgArray(x.drills).slice().sort();
    const add = drillsAdded.get(r.id);
    const before = r.drills.slice().sort().join();
    const after = [...new Set([...r.drills, ...(add ? [add] : [])])].sort().join();
    if (d.join() !== before && d.join() !== after) {
      drift.push(`${r.id} drills: manifest ${JSON.stringify(r.drills)} or this build's +${add ?? 'nothing'}, db says ${JSON.stringify(d)}`);
    }
  }
  if (drift.length) {
    c.release(); await pool.end();
    die(`the recorded manifest has DRIFTED from Postgres:\n  ${drift.slice(0, 8).join('\n  ')}\n  Regenerate with pnpm tsx scripts/_routine_manifest.ts`);
  }
  console.log(`  manifest verified against Postgres: ${REUSED.length} rows, field by field`);

  /* The id this lesson claims must be free, and the check is a COUNT as well as
     a maximum: a highest-id check misses a concurrent lesson landing below it. */
  const range = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where theme = 'routines' and id like 'fr.a1.routines.%'",
  );
  const claimed = await c.query<{ id: string; fr: string; theme: string }>(
    'select id, fr, theme from content_items where id = any($1)', [AUTHORED_ITEMS.map((i) => i.id)],
  );
  // A row already at this id is only a collision if it is SOMEBODY ELSE'S. If
  // the fr and theme match, this batch has already run and is being re-run,
  // which is a normal thing to do: the first run of it rolled back on an
  // enum-array cast and the second had to land the same row.
  const foreign = claimed.rows.filter((r) => {
    const mine = AUTHORED_ITEMS.find((a) => a.id === r.id);
    return !mine || mine.fr !== r.fr || mine.theme !== r.theme;
  });
  if (foreign.length) {
    c.release(); await pool.end();
    die(`id(s) taken in Postgres by DIFFERENT content: ${foreign.map((r) => `${r.id} "${r.fr}" (${r.theme})`).join(', ')}. A concurrent build has landed below your top.`);
  }
  if (claimed.rows.length) console.log(`  ${claimed.rows.length} authored id(s) already present with matching content: this is a re-run`);
  console.log(`  fr.a1.routines: ${range.rows[0].n} rows, max ${range.rows[0].mx}, claiming ${AUTHORED_ITEMS.map((i) => i.id).join(', ')}`);

  /* No two non-sentence rows in one theme may share an `fr`. */
  const clash = await c.query<{ fr: string; id: string }>(
    "select fr, id from content_items where theme = 'routines' and kind <> 'sentence' and fr = any($1)",
    [AUTHORED_ITEMS.filter((i) => i.kind !== 'sentence').map((i) => i.fr)],
  );
  // This build's OWN row is not a collision with itself on a re-run.
  const realClash = clash.rows.filter((r) => !AUTHORED_ITEMS.some((a) => a.id === r.id));
  if (realClash.length) {
    c.release(); await pool.end();
    die(`fr collision inside theme routines: ${realClash.map((r) => `${r.id} "${r.fr}"`).join(', ')}. flashhub-coverage treats that as one card served twice.`);
  }

  /* The dictée, against the real functions and the real rows. */
  for (const id of ROUTINE_DICTATION_IDS) {
    const x = byId.get(id);
    if (!x) { c.release(); await pool.end(); die(`dictée target ${id} is not in Postgres`); }
    if (!pgArray(x.drills).includes('dictation')) { c.release(); await pool.end(); die(`dictée target ${id} carries no dictation drill`); }
    const decoys = wordDecoys(x.fr);
    console.log(`    dictée ${id}: ${dicteeMode(x.fr)} mode, decoys ${JSON.stringify(decoys)}`);
  }
  /** THE JUSTIFICATION FOR WORD MODE, ASSERTED. All three targets are over the
   *  letters limit, and word mode only tests anything here because wordDecoys
   *  hands the learner the wrong article. If that generator changes, this dies
   *  rather than silently degrading into tapping pre-spelled tiles. */
  {
    const midday = byId.get(ROUTINE_DICTATION_IDS[0])!;
    const decoys = wordDecoys(midday.fr).map((d) => d.toLowerCase());
    if (!decoys.includes('le')) {
      c.release(); await pool.end();
      die(
        `the midday dictée no longer offers "le" as a decoy (got ${JSON.stringify(decoys)}).\n`
        + `  Word mode hands every real word over as a tile, so without that decoy this target tests nothing this lesson teaches.`,
      );
    }
  }

  /* The unit, and THE REBINDING. Units live in content_units as
     kind = 'curriculum_unit' with the whole unit in a jsonb body; there is no
     flat `sub` column and a query for one dies at parse time. */
  const u = await c.query<{ body: Unit & { themes?: string[] } }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID],
  );
  if (u.rowCount !== 1) { c.release(); await pool.end(); die(`unit ${UNIT_ID} is not in content_units`); }
  const unit = u.rows[0].body;
  if (unit.title !== UNIT_TITLE) { c.release(); await pool.end(); die(`unit title is "${unit.title}", expected "${UNIT_TITLE}". Do not change it; report the divergence.`); }
  if (unit.sub !== UNIT_SUB) { c.release(); await pool.end(); die(`unit sub is "${unit.sub}", expected "${UNIT_SUB}"`); }
  if (unit.canDo !== UNIT_CANDO) { c.release(); await pool.end(); die(`unit canDo is "${unit.canDo}", expected "${UNIT_CANDO}"`); }
  const themesNow = unit.themes ?? [];
  if (themesNow.join() !== UNIT_THEMES_BEFORE.join() && themesNow.join() !== UNIT_THEMES_AFTER.join()) {
    c.release(); await pool.end();
    die(`unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, expected the dead ${JSON.stringify(UNIT_THEMES_BEFORE)} or the rebound ${JSON.stringify(UNIT_THEMES_AFTER)}`);
  }
  const expectedTag = `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) {
    c.release(); await pool.end();
    die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unit.seq}, so the header will draw "${expectedTag}"`);
  }
  const nextUnit = { ...unit, themes: UNIT_THEMES_AFTER, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };

  /* THE DEAD THEME, verified rather than assumed. */
  const dead = await c.query<{ n: string }>(
    "select count(*)::text n from content_items where theme = $1 and status = 'published'", [UNIT_THEMES_BEFORE[0]],
  );
  if (Number(dead.rows[0].n) !== 0) {
    c.release(); await pool.end();
    die(`theme "${UNIT_THEMES_BEFORE[0]}" now holds ${dead.rows[0].n} published rows. It held ZERO when this rebinding was decided, and that emptiness is the whole reason for it. Re-probe first.`);
  }
  console.log(`  theme "${UNIT_THEMES_BEFORE[0]}": 0 rows, still dead. Rebinding ${JSON.stringify(themesNow)} → ${JSON.stringify(UNIT_THEMES_AFTER)}`);

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
    for (const r of [...RESPELL_REPAIRS, ...RESPELL_ADDITIONS]) {
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
    for (const r of IPA_REPAIRS) {
      const x = byId.get(r.id)!;
      if (x.ipa !== r.from && x.ipa !== r.to) throw new Error(`ipa for ${r.id}: expected ${JSON.stringify(r.from)}, Postgres says ${JSON.stringify(x.ipa)}`);
      await c.query('update content_items set ipa = $2 where id = $1', [r.id, r.to]);
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
    if (ur.rowCount !== 1) throw new Error(`the unit rebinding touched ${ur.rowCount} rows, expected exactly 1`);
    await c.query('commit');
  } catch (e) {
    await c.query('rollback');
    c.release(); await pool.end();
    die(`transaction rolled back: ${(e as Error).message}`);
  }

  console.log(
    `\n  applied to Postgres:\n`
    + `    ${AUTHORED_ITEMS.length} row authored (${AUTHORED_ITEMS.map((i) => `${i.id} "${i.fr}"`).join(', ')})\n`
    + `    ${RESPELL_REPAIRS.length} respelling repaired, ${RESPELL_ADDITIONS.length} added where there was none\n`
    + `    ${DRILL_ADDITIONS.length} voiceflash drill added\n`
    + `    ${IPA_REPAIRS.length} U+203F tie removed\n`
    + `    unit ${UNIT_ID} rebound to ${JSON.stringify(UNIT_THEMES_AFTER)}\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items\n\n`
    + `  NEXT: pnpm tsx scripts/merge-routine-into-seed.ts\n`,
  );

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
