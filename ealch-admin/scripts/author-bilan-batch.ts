/* Applies a1.30.l1 "A1 Review" to Postgres: 2 authored rows, 3 drill additions,
 * the lesson, and the unit binding from a NULL theme to `expressions-frequentes`.
 * Validates everything before it opens a transaction.
 *
 *     pnpm tsx scripts/author-bilan-batch.ts --dry-run
 *     pnpm tsx scripts/author-bilan-batch.ts
 *
 * Order matters: apply to Postgres FIRST, merge into the seed SECOND, publish
 * only when both agree. content:publish regenerates the seed FROM this database.
 *
 * ── WHAT IS DIFFERENT ABOUT A CAPSTONE, AND WHAT THIS SCRIPT ENFORCES ──────
 *
 * THE TRANCHE CONTRACT INVERTS. All 87 review rows are already released by the
 * units that taught them. The SRS keys on (itemId, modality), so re-releasing
 * takes two ratings for one card. This script fails if any review row reaches a
 * tranche, and fails if any owned row does not.
 *
 * a1.03 DOES NOT MOVE. Neither authored row carries a gender and neither is a
 * single-word noun, so nothing joins a1.03's measured ending population. Proven
 * through the real endingPopulation rather than claimed.
 */
import './env';
import { describeTarget } from './env';
import {
  formatIssues, quizQuestions, validateItem, validateLesson,
  type Item, type Lesson, type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { Pool } from 'pg';
import {
  ABOVE_BAND, AUTHORED_ITEMS, CANDO_CLAUSES, COVERED_UNITS, DRILL_ADDITIONS,
  JARGON, OWNED_ID_RANGE, TEACHING_TELLS,
} from './data/bilan-corpus.ts';
import { KIT_IMPORTED, KIT_REUSED, REVIEW } from './data/bilan-imported.ts';
import {
  BILAN_DICTATION_IDS, BILAN_LESSON, BILAN_OWNED_IDS, BILAN_SHOWN_ONLY_IDS,
  BILAN_SPEAK_IDS, BILAN_TRANCHES, REFRAME,
} from './data/bilan-lesson.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const LESSON: Lesson = BILAN_LESSON;
const UNIT_ID = 'a1.30';

const REFRAME_APPEARANCES = 7;
const EXPECTED_SECTIONS = 25;
const EXPECTED_ACTS = 6;
const EXPECTED_TRIGGERS = 9;
const EXPECTED_ROUNDS = 10;
const EXPECTED_QUESTIONS = 50;
const EXPECTED_AUTHORED = 2;
const EXPECTED_REVIEW = 87;
const EXPECTED_KIT_IMPORTED = 11;
/** The target set with the product owner, against sons.09's 63 and a1.25's 37. */
const EXPECTED_SCORED_MIN = 85;

/** THE BINDING. The unit declares NULL, not an empty array. */
const UNIT_THEMES_BEFORE: string[] = [];
const UNIT_THEMES_AFTER = ['expressions-frequentes'];
const UNIT_TITLE = 'A1 Review';
const UNIT_SUB = 'Bilan A1';
const UNIT_CANDO = 'Can hold a short everyday exchange using the whole A1 band: introduce themselves, ask questions, count, tell the time and describe their world';

function die(msg: string): never { console.error(`\n  ${msg}\n`); process.exit(1); }

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
}

/** Accent-aware. `\b` is ASCII-only in JavaScript and returns zero on a trailing
 *  accent, which looks exactly like an absence. */
function hasPhrase(hay: string, needle: string): boolean {
  const w = (c: string) => /[\p{L}\p{N}'’-]/u.test(c);
  const h = hay.toLowerCase(); const n = needle.toLowerCase();
  let i = 0;
  while ((i = h.indexOf(n, i)) !== -1) {
    if (!w(i === 0 ? '' : h[i - 1]) && !w(h[i + n.length] ?? '')) return true;
    i += 1;
  }
  return false;
}

function pgArray(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

console.log(`\n  a1.30.l1 "Bilan A1" → ${describeTarget()}${DRY_RUN ? '  (DRY RUN)' : ''}\n`);

/* ── Counts, against constants ───────────────────────────────────────────── */

if (AUTHORED_ITEMS.length !== EXPECTED_AUTHORED) die(`expected ${EXPECTED_AUTHORED} authored rows, found ${AUTHORED_ITEMS.length}`);
if (REVIEW.length !== EXPECTED_REVIEW) die(`expected ${EXPECTED_REVIEW} review rows, found ${REVIEW.length}`);
if (KIT_IMPORTED.length !== EXPECTED_KIT_IMPORTED) die(`expected ${EXPECTED_KIT_IMPORTED} imported kit rows, found ${KIT_IMPORTED.length}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);
if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`expected ${EXPECTED_ACTS} acts, found ${(LESSON.acts ?? []).length}`);
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} triggers, found ${(LESSON.errorTriggers ?? []).length}`);

/* ── EVEN COVERAGE: all 29 units, three contributions each ───────────────── */
{
  const byUnit = new Map<string, number>();
  for (const r of REVIEW) byUnit.set(r.unit, (byUnit.get(r.unit) ?? 0) + 1);
  const missing = COVERED_UNITS.filter((u) => !byUnit.has(u));
  if (missing.length) die(`unit(s) the capstone represents with nothing: ${missing.join(', ')}`);
  const wrong = [...byUnit.entries()].filter(([, n]) => n !== 3);
  if (wrong.length) die(`unit(s) not contributing exactly three: ${wrong.map(([u, n]) => `${u}=${n}`).join(', ')}`);
  const extra = [...byUnit.keys()].filter((u) => !COVERED_UNITS.includes(u as never));
  if (extra.length) die(`unit(s) in the selection that COVERED_UNITS does not declare: ${extra.join(', ')}`);
  console.log(`  even coverage: ${byUnit.size} units, three contributions each`);
}

/* ── THE TRANCHE CONTRACT, WHICH IS THE INVERSE OF EVERY OTHER LESSON'S ──── */
{
  const released = BILAN_TRANCHES.flat();
  const dupes = released.filter((id, i) => released.indexOf(id) !== i);
  if (dupes.length) die(`row(s) released by two tranches: ${[...new Set(dupes)].join(', ')}`);
  const owned = new Set(BILAN_OWNED_IDS);
  const shown = new Set(BILAN_SHOWN_ONLY_IDS);
  const leaked = released.filter((id) => shown.has(id));
  if (leaked.length) {
    die(
      `${leaked.length} row(s) an earlier lesson already released reached a tranche: ${leaked.slice(0, 5).join(', ')}\n`
      + `  The SRS keys on (itemId, modality). Releasing these costs the learner a second rating on a card they own.`,
    );
  }
  const never = BILAN_OWNED_IDS.filter((id) => !released.includes(id));
  if (never.length) die(`owned row(s) released by no tranche, so they never reach spaced repetition: ${never.join(', ')}`);
  if (BILAN_TRANCHES.length !== (LESSON.acts ?? []).length) die('tranches and acts are not index-aligned');
  console.log(`  tranche contract: ${released.length} released of ${LESSON.itemIds.length} shown, and ZERO double releases`);
}

/* ── The authored rows ───────────────────────────────────────────────────── */

const itemIssues = AUTHORED_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(formatIssues(itemIssues));
for (const it of AUTHORED_ITEMS) {
  if (it.id < OWNED_ID_RANGE.from || it.id > OWNED_ID_RANGE.to) die(`${it.id} is outside ${OWNED_ID_RANGE.from}..${OWNED_ID_RANGE.to}`);
  if (it.theme !== 'expressions-frequentes') die(`${it.id} is in theme "${it.theme}"; this lesson writes only into expressions-frequentes`);
  if (it.respell && hasPlainNasalFor(it.fr, it.respell)) die(`${it.id} closes a nasal with a plain n or m: ${it.respell}`);
}
/** `lentement` carries TWO nasal vowels and the shared checker can only see the
 *  one that ends a token. Asserted by name for the one it cannot see. */
{
  const slower = AUTHORED_ITEMS.find((i) => i.fr.startsWith('Plus lentement'));
  if (!slower) die('the "more slowly" row is gone. It is the whole point of this lesson.');
  if (!slower.respell?.startsWith('plü lahⁿt-')) die(`the lentement respelling must open plü lahⁿt-, found ${JSON.stringify(slower.respell)}`);
}
{
  const joiners = endingPopulation(AUTHORED_ITEMS);
  if (joiners.length !== 0) die(`${joiners.length} authored row(s) join a1.03's ending population: ${joiners.map((j) => j.fr).join(', ')}`);
  console.log('  a1.03 ending population: 0 authored joiners, so no printed figure moves');
}

/* ── The lesson ──────────────────────────────────────────────────────────── */

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(formatIssues(lessonIssues));
const density = validateDensity(LESSON);
if (density.length) die(formatDensity(density));

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);

const blob = JSON.stringify(LESSON);
if (blob.includes('"autoplay"')) die('autoplay is authored somewhere. Declared in schema.ts and read by no component.');
if (blob.includes('"imageRef"')) die('an imageRef is authored. lesson-contract.test.ts does not check it and an unregistered ref draws a blank box.');
if (blob.includes('"adaptive"')) die('adaptive is authored. It is declared in schema.ts:1068 and read by NO component, same class as autoplay.');
if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('the pager renders exactly one quiz section');

/* ── The learner-facing surfaces ─────────────────────────────────────────── */

const learner = [...strings(LESSON.sections), ...strings(LESSON.sheets ?? []), ...strings(LESSON.terms ?? {})];
const learnerText = learner.join('\n');

const jargon = JARGON.filter((j) => hasPhrase(learnerText, j));
if (jargon.length) die(`grammar vocabulary reached an A1 learner: ${jargon.join(', ')}`);
const above = ABOVE_BAND.filter((f) => hasPhrase(learnerText, f));
if (above.length) die(`content above the A1 band reached a learner surface: ${above.join(', ')}`);
const teaching = TEACHING_TELLS.filter((f) => hasPhrase(learnerText, f));
if (teaching.length) die(`the capstone has started TEACHING rather than reviewing: ${teaching.join(', ')}`);

/** All five canDo clauses are exercised. A capstone quietly losing one is
 *  invisible without this, because nothing else in the build would notice. */
{
  const unmet = CANDO_CLAUSES.filter((c) => {
    const reps = REVIEW.filter((r) => (c.units as readonly string[]).includes(r.unit));
    return !reps.some((r) => learnerText.includes(r.fr));
  });
  if (unmet.length) die(`canDo clause(s) no section exercises: ${unmet.map((c) => c.clause).join('; ')}`);
  console.log(`  all ${CANDO_CLAUSES.length} canDo clauses exercised`);
}

/* ── The quiz, and BOTH answer-spread surfaces ───────────────────────────── */

const quiz = LESSON.sections.find((s) => s.type === 'quiz');
if (!quiz || quiz.type !== 'quiz') die('no quiz section');
const rounds = quiz.rounds ?? [];
if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} rounds, found ${rounds.length}`);
const qs = quizQuestions(quiz);
if (qs.length !== EXPECTED_QUESTIONS) die(`expected ${EXPECTED_QUESTIONS} questions, found ${qs.length}`);

const sectionIds = LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
const mcq = qs.filter((q) => q.format === 'mcq').length;
if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} are mcq, over the half limit`);
for (const q of qs) {
  if (!q.why) die(`quiz question has no why: ${q.q}`);
  if (!q.ref || !sectionIds.includes(q.ref)) die(`quiz ref ${JSON.stringify(q.ref)} names no section: ${q.q}`);
  if (q.opts && new Set(q.opts).size !== q.opts.length) die(`duplicate option in: ${q.q}`);
  if (['typeIn', 'errorSpot', 'speak'].includes(q.format ?? '')) {
    if (!matchesAccept(q.answer ?? '', q.accept ?? [])) die(`free-text question does not accept the answer it displays: ${q.answer}`);
  }
}

/** Shuffled at runtime by QuizDeckView; the cap is authoring hygiene. */
{
  const closed = qs.filter((q) => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct!, (slots.get(q.correct!) ?? 0) + 1);
  for (const [s, c] of slots) if ((c / closed.length) * 100 > 40) die(`quiz slot ${s} holds ${Math.round((c / closed.length) * 100)}%, over 40`);
  console.log(`  quiz slots over ${closed.length} closed: ${[...slots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
}

/** NOT shuffled by anything. THREE surfaces: MissionRich renders q.opts.map in
 *  authored order at :347 (groupDrill check), :732 (TrapOptions) and :1941
 *  (listening). The first version of this check missed trapDrill, which is where
 *  16 of this lesson's questions live. */
let scored = qs.length;
{
  type C = { section: string; correct: number; opts: string[] };
  const inMission: C[] = [];
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '?';
    if (s.type === 'groupDrill') for (const g of s.groups) if (g.check) inMission.push({ section: sid, correct: g.check.correct, opts: g.check.opts });
    if (s.type === 'trapDrill') for (const d of s.drill ?? []) inMission.push({ section: sid, correct: d.correct, opts: d.opts });
    if (s.type === 'listening') for (const q of s.questions) inMission.push({ section: sid, correct: q.correct, opts: q.opts });
  }
  if (!inMission.length) die('no in-mission closed questions; the spread check would pass vacuously');
  scored += inMission.length;
  const slots = new Map<number, number>();
  for (const q of inMission) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  for (const [s, c] of slots) {
    if ((c / inMission.length) * 100 > 40) die(`in-mission slot ${s} holds ${Math.round((c / inMission.length) * 100)}%, over 40, and NOTHING shuffles these`);
  }
  const bySection = new Map<string, C[]>();
  for (const q of inMission) { const l = bySection.get(q.section) ?? []; l.push(q); bySection.set(q.section, l); }
  for (const [sid, list] of bySection) {
    for (let k = 1; k < list.length; k++) if (list[k].correct === list[k - 1].correct) die(`${sid}: consecutive in-mission questions both answer in slot ${list[k].correct}`);
    for (const q of list) if (q.correct >= q.opts.length) die(`${sid}: correct index out of range`);
  }
  console.log(`  in-mission slots over ${inMission.length} closed: ${[...slots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
}
if (scored < EXPECTED_SCORED_MIN) die(`${scored} scored moments, under the ${EXPECTED_SCORED_MIN} this capstone was specified at`);
console.log(`  ${scored} scored moments (sons.09 is 63, a1.25 is 37)`);

/** drillForRound fires the FIRST resolving target and stops. */
{
  const fired = new Set<string>();
  for (const r of rounds) {
    const t = (r.targets ?? []).find((x) => (LESSON.errorTriggers ?? []).some((e) => e.id === x && e.drill));
    if (t) fired.add(t);
  }
  const orphans = (LESSON.errorTriggers ?? []).filter((e) => e.drill && !fired.has(e.id)).map((e) => e.id);
  if (orphans.length) die(`trigger(s) whose drill no round can fire: ${orphans.join(', ')}`);
}

/* ── Sheets ──────────────────────────────────────────────────────────────── */
{
  const ids = new Set((LESSON.sheets ?? []).map((s) => s.id));
  const dangling = LESSON.sections.map((s) => (s as { sheetId?: string }).sheetId).filter((id): id is string => Boolean(id) && !ids.has(id!));
  if (dangling.length) die(`sheetId(s) naming no sheet: ${[...new Set(dangling)].join(', ')}`);
  const unreachable = [...ids].filter((id) => !LESSON.sections.some((s) => (s as { sheetId?: string }).sheetId === id));
  if (unreachable.length) die(`sheet(s) no section links to: ${unreachable.join(', ')}`);
  const DRAWN = new Set(['teach', 'letterGrid', 'table']);
  const dead = (LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? []).filter((s) => !DRAWN.has(s.type)).map((s) => `${sh.id}: a ${s.type}, which the sheet renderer does not draw`));
  if (dead.length) die(dead.join('\n  '));
}

/* ── Against the live database ───────────────────────────────────────────── */

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const fail = async (m: string): Promise<never> => { c.release(); await pool.end(); die(m); };

  const named = [...REVIEW.map((r) => r.id), ...KIT_IMPORTED.map((r) => r.id), ...KIT_REUSED.map((r) => r.id)];
  const live = await c.query<{ id: string; fr: string; en: string; respell: string | null; drills: string[]; status: string; level: string }>(
    'select id, fr, en, respell, drills, status, level from content_items where id = any($1)', [named],
  );
  const byId = new Map(live.rows.map((r) => [r.id, r] as const));

  const gone = named.filter((id) => !byId.has(id));
  if (gone.length) await fail(`row(s) no longer in Postgres: ${gone.slice(0, 6).join(', ')}`);
  const unpub = live.rows.filter((r) => r.status !== 'published');
  if (unpub.length) await fail(`row(s) not published: ${unpub.map((r) => r.id).join(', ')}`);
  const tooHigh = live.rows.filter((r) => !['a1', 'sons'].includes(r.level));
  if (tooHigh.length) await fail(`row(s) above a1 reached this lesson: ${tooHigh.map((r) => `${r.id} (${r.level})`).join(', ')}`);

  /* The recorded manifests are verified field by field. Two values are legal for
     a row this build touches: what the manifest recorded, and what this build
     writes, so a re-run after a rolled-back transaction is not read as drift. */
  const addFor = new Map(DRILL_ADDITIONS.map((d) => [d.id, d.add] as const));
  const drift: string[] = [];
  for (const r of [...REVIEW, ...KIT_REUSED]) {
    const x = byId.get(r.id)!;
    if (x.fr !== r.fr) drift.push(`${r.id} fr: manifest ${JSON.stringify(r.fr)} vs db ${JSON.stringify(x.fr)}`);
    if (x.en !== r.en) drift.push(`${r.id} en drift`);
    if ((x.respell ?? null) !== r.respell) drift.push(`${r.id} respell: manifest ${JSON.stringify(r.respell)} vs db ${JSON.stringify(x.respell)}`);
  }
  for (const r of KIT_IMPORTED) {
    const x = byId.get(r.id)!;
    if (x.fr !== r.fr) drift.push(`${r.id} fr drift`);
    const d = pgArray(x.drills).slice().sort().join();
    const add = addFor.get(r.id);
    const before = (r.drills ?? []).slice().sort().join();
    const after = [...new Set([...(r.drills ?? []), ...(add ? [add] : [])])].sort().join();
    if (d !== before && d !== after) drift.push(`${r.id} drills: ${JSON.stringify(pgArray(x.drills))}`);
  }
  if (drift.length) await fail(`the recorded manifest has DRIFTED from Postgres:\n  ${drift.slice(0, 8).join('\n  ')}\n  Regenerate with pnpm tsx scripts/_bilan_manifest.ts`);
  console.log(`  manifests verified against Postgres: ${named.length} rows`);

  /* EVERY REVIEW ROW IS STILL TAUGHT AND RELEASED BY ITS OWN UNIT. If that ever
     stops being true the tranche contract is wrong and this lesson would be
     withholding a card nobody releases. */
  const lessons = await c.query<{ body: Lesson }>("select body from content_units where kind = 'lesson' and status = 'published'");
  const releasedElsewhere = new Set<string>();
  for (const l of lessons.rows) {
    if (l.body?.id === LESSON.id) continue;
    for (const id of (l.body?.deckTranche ?? []).flat()) releasedElsewhere.add(id);
  }
  const orphanedReview = BILAN_SHOWN_ONLY_IDS.filter((id) => !releasedElsewhere.has(id));
  if (orphanedReview.length) {
    await fail(
      `${orphanedReview.length} row(s) this lesson SHOWS but does not release are released by NO other lesson either:\n    `
      + `${orphanedReview.slice(0, 6).join('\n    ')}\n  They would never reach spaced repetition at all.`,
    );
  }
  console.log(`  every one of the ${BILAN_SHOWN_ONLY_IDS.length} withheld rows is released by another lesson`);

  /* The ids this lesson claims must be free, or already be its own. */
  const claimed = await c.query<{ id: string; fr: string }>('select id, fr from content_items where id = any($1)', [AUTHORED_ITEMS.map((i) => i.id)]);
  const foreign = claimed.rows.filter((r) => AUTHORED_ITEMS.find((a) => a.id === r.id)?.fr !== r.fr);
  if (foreign.length) await fail(`id(s) taken by different content: ${foreign.map((r) => `${r.id} "${r.fr}"`).join(', ')}`);
  if (claimed.rows.length) console.log(`  ${claimed.rows.length} authored id(s) already present with matching content: this is a re-run`);

  const range = await c.query<{ n: string; mx: string }>("select count(*)::text n, coalesce(max(id),'') mx from content_items where theme = 'expressions-frequentes' and id like 'fr.a1.%'");
  console.log(`  fr.a1.expressions-frequentes: ${range.rows[0].n} rows, max ${range.rows[0].mx}`);

  const clash = await c.query<{ id: string; fr: string }>(
    "select id, fr from content_items where theme = 'expressions-frequentes' and kind <> 'sentence' and fr = any($1)",
    [AUTHORED_ITEMS.filter((i) => i.kind !== 'sentence').map((i) => i.fr)],
  );
  const realClash = clash.rows.filter((r) => !AUTHORED_ITEMS.some((a) => a.id === r.id));
  if (realClash.length) await fail(`fr collision in expressions-frequentes: ${realClash.map((r) => `${r.id} "${r.fr}"`).join(', ')}`);

  /* The dictée, against the real function. */
  for (const id of BILAN_DICTATION_IDS) {
    const x = byId.get(id);
    if (!x) await fail(`dictée target ${id} is not in Postgres`);
    const mode = dicteeMode(x!.fr);
    if (mode !== 'letters') {
      await fail(`dictée target ${id} "${x!.fr}" lands in ${mode} mode, which hands the learner every word as a pre-spelled tile`);
    }
    console.log(`    dictée ${id}: ${mode} mode`);
  }
  for (const id of BILAN_SPEAK_IDS) {
    const x = byId.get(id) ?? { drills: [] as string[] };
    // Three ways a row legitimately has voiceflash by the time a learner sees
    // it: it already does, this build authored it with one, or DRILL_ADDITIONS
    // is about to add one. Checking only the first made the script non-idempotent
    // and, worse, unable to see its own fix.
    const has = pgArray(x.drills).includes('voiceflash')
      || AUTHORED_ITEMS.some((a) => a.id === id && (a.drills ?? []).includes('voiceflash'))
      || DRILL_ADDITIONS.some((d) => d.id === id && d.add === 'voiceflash');
    if (!has) await fail(`spoken practice names ${id}, which carries no voiceflash and would play nothing`);
  }

  /* The unit, and THE BINDING. */
  const u = await c.query<{ body: Unit & { themes?: string[]; lessonIds?: string[] } }>(
    "select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1", [UNIT_ID],
  );
  if (u.rowCount !== 1) await fail(`unit ${UNIT_ID} is not in content_units`);
  const unit = u.rows[0].body;
  if (unit.title !== UNIT_TITLE) await fail(`unit title is "${unit.title}", expected "${UNIT_TITLE}"`);
  if (unit.sub !== UNIT_SUB) await fail(`unit sub is "${unit.sub}"`);
  if (unit.canDo !== UNIT_CANDO) await fail(`unit canDo has changed`);
  const themesNow = unit.themes ?? UNIT_THEMES_BEFORE;
  if (themesNow.length && themesNow.join() !== UNIT_THEMES_AFTER.join()) {
    await fail(`unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, expected null/empty or the bound ${JSON.stringify(UNIT_THEMES_AFTER)}`);
  }
  const expectedTag = `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
  if (LESSON.tag !== expectedTag) await fail(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unit.seq}, so the header will draw "${expectedTag}"`);
  const nextUnit = { ...unit, themes: UNIT_THEMES_AFTER, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };
  console.log(`  unit ${UNIT_ID}: binding ${JSON.stringify(themesNow)} → ${JSON.stringify(UNIT_THEMES_AFTER)}`);

  if (DRY_RUN) { console.log('\n  DRY RUN: nothing written.\n'); c.release(); await pool.end(); return; }

  await c.query('begin');
  try {
    for (const it of AUTHORED_ITEMS) {
      await c.query(
        `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills, version, card_type, status)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12::text[]::drill_kind[],$13,$14,'published')
         on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
           fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
           card_type=excluded.card_type, status='published'`,
        [it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          it.gender ?? null, it.notes ?? null, it.tags ?? [], it.drills ?? [], it.version ?? 1, it.cardType ?? null],
      );
    }
    // `drills` is an ENUM ARRAY. Concatenating a text[] onto it fails with
    // "operator does not exist: drill_kind[] || text[]" and takes the whole
    // transaction with it, which is how a1.25's first run rolled back.
    for (const d of DRILL_ADDITIONS) {
      await c.query(
        `update content_items set drills = (select array_agg(distinct e order by e) from unnest(drills || $2::text[]::drill_kind[]) e) where id = $1`,
        [d.id, [d.add]],
      );
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
    if (ur.rowCount !== 1) throw new Error(`the unit binding touched ${ur.rowCount} rows, expected 1`);
    await c.query('commit');
  } catch (e) {
    await c.query('rollback');
    c.release(); await pool.end();
    die(`transaction rolled back: ${(e as Error).message}`);
  }

  console.log(
    `\n  applied to Postgres:\n`
    + `    ${AUTHORED_ITEMS.length} rows authored (${AUTHORED_ITEMS.map((i) => `"${i.fr}"`).join(', ')})\n`
    + `    ${DRILL_ADDITIONS.length} dictation drills added\n`
    + `    unit ${UNIT_ID} bound to ${JSON.stringify(UNIT_THEMES_AFTER)}\n`
    + `    lesson ${LESSON.id} v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items, ${scored} scored moments\n\n`
    + `  NEXT: pnpm tsx scripts/merge-bilan-into-seed.ts --dry-run\n`
    + `  The merge must CARRY the ${KIT_IMPORTED.length} imported kit rows, which are outside the seed cut.\n`,
  );

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
