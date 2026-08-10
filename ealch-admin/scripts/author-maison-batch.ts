/* Applies a1.26.l1 "La maison" to POSTGRES.
 *
 *     pnpm content:maison --dry-run
 *     pnpm content:maison
 *
 * Writes three authored rows, forty-two respelling repairs and the lesson, and
 * links the lesson to unit a1.26. Everything is validated before the database is
 * touched, the write is one transaction, and re-running is idempotent.
 *
 * RUN THIS BEFORE THE MERGE. Postgres is the source of truth and seed.json is a
 * cut of it; content:publish regenerates the seed FROM the database, so a lesson
 * that exists only in the seed is deleted the next time anybody publishes.
 *
 * ── What this build found that its brief did not know ─────────────────────
 *
 *   `la pièce` CANNOT BE AUTHORED. It moves a1.03's printed -e figure from 880
 *   to 881. The plural `les pièces` is outside the ending population and is what
 *   ships. Measured through the real endingPopulation; see maison-corpus.ts.
 *
 *   EVERY DICTÉE TARGET IN THIS THEME IS IN WORD MODE and there is no
 *   alternative: DICTEE_LETTER_LIMIT is 16 and the shortest dictation row is 24
 *   letters. Checked here through the real dicteeMode.
 *
 *   THE ROUNDS QUIZ DOES NOT SHUFFLE ITS OPTIONS. QuizRoundsView renders `opts`
 *   in authored order, so the `correct` index is the position the learner sees.
 *   The spread is checked here against QUIZ_SLOT_SPREAD rather than against the
 *   density validator's looser 40 percent cap.
 */
import './env';
import { describeTarget } from './env';
import {
  formatIssues,
  quizQuestions,
  validateItem,
  validateLesson,
  validateUnit,
  type Item,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation, measureEnding } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { guardLessonVersion } from './version-guard.logic.ts';
import {
  AUTHORED_IDS, AUTHORED_ROWS, BATH_PAIR, CHORE_VERBS_A125_OWNS, COMPOUND_APPLIANCES,
  EXCLUDED_IDS, FORBIDDEN_FORMS, IMPORTED, NOT_REPAIRED, POSSESSIVE_RULE_PHRASES,
  PREPOSITIONS_A121_OWNS, PREPOSITION_RULE_PHRASES, REPAIRS_INVISIBLE_TO_CHECKER,
  RESPELL, RESPELL_REPAIRS, SIMPLE_APPLIANCES, TAUGHT_WORDS, THE_THREE_ROOM_WORDS,
  TENANCY_NOT_TAUGHT, WIDER_DEBT_NOT_TOUCHED,
} from './data/maison-corpus.ts';
import {
  BATH_PAIR_SECTION, MAISON_DICTATION_IDS, MAISON_LESSON, MAISON_SPEAK_IDS,
  QUIZ_SLOT_SPREAD, REFRAME, THREE_WAY_SECTION,
} from './data/maison-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const AUTHORED: Item[] = AUTHORED_ROWS;
const LESSON: Lesson = MAISON_LESSON;

const UNIT_ID = 'a1.26';
const UNIT_THEMES = ['maison'];
const UNIT_TITLE = 'The House';
const UNIT_SUB = 'La maison';
const UNIT_CANDO = 'Can name the rooms and the furniture and say where things are at home';

const REFRAME_APPEARANCES = 9;
const EXPECTED_AUTHORED = 3;
const EXPECTED_REPAIRS = 42;
const EXPECTED_SECTIONS = 26;
const EXPECTED_ACTS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_TRIGGERS = 7;
const EXPECTED_TAUGHT_WORDS = 58;

/** Nasal-carrying words this lesson displays. The shared checker cannot see a
 *  word-internal nasal, so these are asserted BY NAME as well. */
const NASAL_BY_NAME = [
  'la maison', 'la chambre', 'le salon', 'le jardin', 'le balcon', 'le plafond',
  'la lampe', "l'appartement", "l'ampoule", 'le micro-ondes', 'le sèche-linge',
  'la salle de bain', 'la salle à manger',
];

/** Displayed and correctly carrying NO superscript. */
const NOT_NASAL = ['la cuisine', 'la porte', 'le lit', 'la table'];

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

function drillsOf(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  const s = String(v ?? '');
  return s.startsWith('{') ? s.slice(1, -1).split(',').filter(Boolean) : [];
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** Accent-aware whole-word containment. Never builds a regex out of the needle,
 *  and never uses \b, which is ASCII-only and fails on a trailing accent. */
function hasWord(haystack: string, needle: string): boolean {
  const h = haystack.toLowerCase().normalize('NFC');
  const n = needle.toLowerCase().normalize('NFC');
  let from = 0;
  for (;;) {
    const i = h.indexOf(n, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : h[i - 1];
    const after = h[i + n.length] ?? ' ';
    if (!/[a-zà-ÿœæ]/.test(before) && !/[a-zà-ÿœæ]/.test(after)) return true;
    from = i + 1;
  }
}

/** What the learner is asked to PRODUCE or CHOOSE, as opposed to every string in
 *  the lesson. A guard over every string fires on « Le lit est près de la
 *  fenêtre. », which is legitimate context, and gets deleted by whoever it
 *  blocks. a1.09 learned this and its test scopes the same way. */
function productionSurfaces(l: Lesson): string[] {
  const out: string[] = [];
  for (const s of l.sections) {
    const sec = s as Record<string, unknown>;
    for (const k of ['cards', 'rows', 'groups', 'errors', 'turns', 'lines', 'goals', 'points', 'themes']) {
      if (sec[k]) strings(sec[k], out);
    }
  }
  strings(l.drills ?? [], out);
  strings(l.terms ?? {}, out);
  return out;
}

/** What the lesson PRESENTS AS CORRECT. Everything above MINUS the slots whose
 *  whole job is to hold a wrong answer: a quiz distractor, a commonErrors
 *  `wrong`, a scene choice marked `breaks`, and a drill bucket label.
 *
 *  The first draft of this file checked FORBIDDEN_FORMS over every string in the
 *  lesson and died on « la chambre de bain », which is a QUIZ DISTRACTOR and is
 *  there precisely because it is not French. That is the guard-false-positive
 *  shape the invariants warn about, and a guard that fires on correct content
 *  gets deleted by whoever it blocks. */
function teachingSurfaces(l: Lesson): string[] {
  const out: string[] = [];
  for (const s of l.sections) {
    const sec = s as Record<string, unknown>;
    for (const k of ['cards', 'rows', 'themes', 'lines', 'goals', 'points']) {
      if (sec[k]) strings(sec[k], out);
    }
    // A groupDrill's `items` teach; its `check.opts` deliberately hold wrong ones.
    if (Array.isArray(sec.groups)) {
      for (const g of sec.groups as Record<string, unknown>[]) if (g.items) strings(g.items, out);
    }
    // commonErrors: the `right` half teaches, the `wrong` half must not be read.
    if (Array.isArray(sec.errors)) {
      for (const e of sec.errors as Record<string, unknown>[]) if (e.right) strings(e.right, out);
    }
    // A scenario models correct French in `user` and `alts`.
    if (Array.isArray(sec.turns)) {
      for (const t of sec.turns as Record<string, unknown>[]) {
        if (t.user) strings(t.user, out);
        if (t.alts) strings(t.alts, out);
      }
    }
  }
  strings(l.sheets ?? [], out);
  strings(l.terms ?? {}, out);
  for (const d of l.drills ?? []) {
    const dd = d as Record<string, unknown>;
    if (dd.pairs) strings(dd.pairs, out);
    if (dd.coach) strings(dd.coach, out);
  }
  return out;
}

async function main() {
  console.log(`  target: ${describeTarget()}`);

  /* ── Shape ──────────────────────────────────────────────────────────── */

  if (AUTHORED.length !== EXPECTED_AUTHORED) die(`expected ${EXPECTED_AUTHORED} authored rows, found ${AUTHORED.length}`);
  if (RESPELL_REPAIRS.length !== EXPECTED_REPAIRS) die(`expected ${EXPECTED_REPAIRS} repairs, found ${RESPELL_REPAIRS.length}`);
  if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);
  if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`expected ${EXPECTED_ACTS} acts, found ${(LESSON.acts ?? []).length}`);
  if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} triggers`);
  if (TAUGHT_WORDS.length !== EXPECTED_TAUGHT_WORDS) die(`expected ${EXPECTED_TAUGHT_WORDS} taught words, found ${TAUGHT_WORDS.length}`);

  for (const it of AUTHORED) {
    const issues = validateItem(it, it.id);
    if (issues.length) die(`${it.id} fails validateItem:\n${formatIssues(issues)}`);
  }
  const lessonIssues = validateLesson(LESSON);
  if (lessonIssues.length) die(`${LESSON.id} fails validateLesson:\n${formatIssues(lessonIssues)}`);
  const density = validateDensity(LESSON);
  if (density.length) die(`${LESSON.id} fails the density validator:\n${formatDensity(density)}`);

  /* ── House rules ────────────────────────────────────────────────────── */

  const all = strings(LESSON);
  const hits = all.filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} time(s), the constant says ${REFRAME_APPEARANCES}`);
  const emDash = all.filter((s) => s.includes('—'));
  if (emDash.length) die(`em dash found in: ${emDash.slice(0, 3).join(' | ')}`);
  const honest = all.filter((s) => /honest/i.test(s));
  if (honest.length) die(`"honest" found in: ${honest.slice(0, 3).join(' | ')}`);
  if (JSON.stringify(LESSON).includes('"autoplay"')) die('autoplay is implemented in no component');
  if (JSON.stringify(LESSON).includes('‿')) die('U+203F renders as a low underscore on a Pixel 6');
  const imageRefs = all.filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  if (imageRefs.length) die(`${imageRefs.length} imageRef(s) authored and nothing validates imageRef`);
  // Scoped to what the lesson PRESENTS AS CORRECT. A quiz distractor and a
  // commonErrors `wrong` are supposed to hold these forms. See teachingSurfaces.
  const teaching = teachingSurfaces(LESSON);
  const forbidden = FORBIDDEN_FORMS.filter((f) => teaching.some((s) => hasWord(s, f)));
  if (forbidden.length) die(`a form that is not French is presented as correct: ${forbidden.join(', ')}`);

  /* ── The respellings, through the REAL checker ──────────────────────── */

  for (const [fr, d] of Object.entries(RESPELL)) {
    const r = d.respell.replace(/^\[|\]$/g, '');
    if (hasPlainNasalFor(fr, r)) die(`${fr} "${r}" closes a nasal with a plain n/m`);
  }
  // The blind spot: assert the superscript BY NAME as well as calling the checker.
  for (const fr of NASAL_BY_NAME) {
    const r = RESPELL[fr]?.respell;
    if (!r) die(`${fr} is named as nasal-carrying and has no display row`);
    if (!r.includes('ⁿ')) die(`${fr} carries a nasal and its respelling has no superscript: ${r}`);
  }
  for (const fr of NOT_NASAL) {
    const r = RESPELL[fr]?.respell ?? '';
    if (r.includes('ⁿ')) die(`${fr} has no nasal vowel and its respelling carries a superscript: ${r}`);
  }
  // The false positive stays broken-looking on purpose.
  for (const k of NOT_REPAIRED) {
    if (RESPELL_REPAIRS.some((r) => r.id === k.id)) die(`${k.id} is in NOT_REPAIRED and in RESPELL_REPAIRS`);
  }

  /* ── The neighbours ─────────────────────────────────────────────────── */

  const surfaces = productionSurfaces(LESSON);
  const ruleLeak = PREPOSITION_RULE_PHRASES.filter((p) => surfaces.some((s) => s.toLowerCase().includes(p)));
  if (ruleLeak.length) die(`a1.21's headline rule reached a learner surface: ${ruleLeak.join(', ')}`);
  const possLeak = POSSESSIVE_RULE_PHRASES.filter((p) => surfaces.some((s) => s.toLowerCase().includes(p)));
  if (possLeak.length) die(`a1.17's rule reached a learner surface: ${possLeak.join(', ')}`);
  const choreLeak = CHORE_VERBS_A125_OWNS.filter((v) => surfaces.some((s) => hasWord(s, v)));
  if (choreLeak.length) die(`a conjugated chore verb a1.25 owns reached a surface: ${choreLeak.join(', ')}`);
  const tenancyLeak = TENANCY_NOT_TAUGHT.filter((w) => surfaces.some((s) => hasWord(s, w)));
  if (tenancyLeak.length) die(`tenancy vocabulary A2/B1 owns reached a surface: ${tenancyLeak.join(', ')}`);

  /* ── The quiz ───────────────────────────────────────────────────────── */

  const quizzes = LESSON.sections.filter((s) => s.type === 'quiz');
  if (quizzes.length !== 1) die(`${quizzes.length} quiz sections; the pager renders exactly one`);
  const rounds = (quizzes[0] as unknown as { rounds?: { id: string; targets?: string[] }[] }).rounds ?? [];
  if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} rounds, found ${rounds.length}`);

  const qs = quizQuestions(quizzes[0]) as unknown as {
    q: string; format?: string; opts?: string[]; correct?: number; accept?: string[];
    answer?: string; why?: string; ref?: string;
  }[];
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq} of ${qs.length} questions are mcq, and the ceiling is half`);
  if (qs.some((q) => !q.why)) die('a question has no why');
  if (qs.some((q) => !q.ref)) die('a question has no ref');
  const secIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id));
  for (const q of qs) if (q.ref && !secIds.has(q.ref)) die(`quiz ref names a section that does not exist: ${q.ref}`);
  for (const q of qs) {
    const o = q.opts ?? [];
    if (new Set(o).size !== o.length) die(`duplicate option in "${q.q.slice(0, 50)}"`);
  }
  for (const q of qs.filter((x) => ['typeIn', 'errorSpot', 'speak'].includes(x.format ?? ''))) {
    if (!q.answer || !q.accept || !matchesAccept(q.answer, q.accept)) {
      die(`"${q.q.slice(0, 40)}" does not accept the answer it displays`);
    }
  }

  // THE ANSWER SPREAD. QuizRoundsView does not shuffle, so the authored index is
  // what the learner sees. Tighter than the density validator's 40 percent cap.
  const closed = qs.filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number');
  const slots: Record<number, number> = {};
  for (const q of closed) slots[q.correct!] = (slots[q.correct!] ?? 0) + 1;
  for (const s of [0, 1, 2, 3]) {
    const share = (slots[s] ?? 0) / closed.length;
    if (share > QUIZ_SLOT_SPREAD.maxShare) die(`answer slot ${s} holds ${Math.round(share * 100)}% of closed questions, cap is ${QUIZ_SLOT_SPREAD.maxShare * 100}%`);
    if (share < QUIZ_SLOT_SPREAD.minShare) die(`answer slot ${s} holds ${Math.round(share * 100)}% of closed questions, floor is ${QUIZ_SLOT_SPREAD.minShare * 100}%`);
  }
  // And the other tell: a learner who always picks the longest option.
  const longest = closed.filter((q) => {
    const lens = q.opts!.map((o) => o.length);
    const mx = Math.max(...lens);
    return lens[q.correct!] === mx && lens.filter((l) => l === mx).length === 1;
  }).length;
  if (longest * 3 > closed.length) {
    die(`the correct answer is the uniquely longest option in ${longest} of ${closed.length} closed questions`);
  }

  // NOT ONE correct answer is a preposition a1.21 owns.
  for (const q of closed) {
    const ans = q.opts![q.correct!].toLowerCase().trim();
    if (PREPOSITIONS_A121_OWNS.includes(ans)) die(`a quiz answer is a preposition a1.21 owns: "${ans}"`);
  }
  // Every stem about a room word carries a situation rather than a bare gloss.
  const bare = qs.filter((q) => /^what (is|does) .{0,20}(mean|room)\??$/i.test(q.q.trim()));
  if (bare.length) die(`a stem is a bare translation prompt: ${bare.map((q) => q.q).join(' | ')}`);

  /* ── Each drill is the FIRST resolving target of exactly one round ───── */

  const drillIds = new Set((LESSON.drills ?? []).map((d) => d.id));
  const triggerById = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t] as const));
  for (const t of LESSON.errorTriggers ?? []) {
    if (t.drill && !drillIds.has(t.drill)) die(`trigger ${t.id} names a drill that does not exist: ${t.drill}`);
    if (t.retest && !drillIds.has(t.retest)) die(`trigger ${t.id} names a retest that does not exist: ${t.retest}`);
  }
  const fired = new Set<string>();
  const leads: string[] = [];
  for (const r of rounds) {
    const first = (r.targets ?? []).map((id) => triggerById.get(id)).find((t) => t?.drill);
    if (!first) die(`round ${r.id} names no target with a drill, so failing it teaches nothing`);
    if (fired.has(first.drill!)) die(`drill ${first.drill} is the first resolving target of more than one round`);
    fired.add(first.drill!);
    leads.push(`${r.id} -> ${first.drill}`);
  }

  /* ── The layout the reframe depends on ──────────────────────────────── */

  const three = LESSON.sections.find((s) => (s as { id?: string }).id === THREE_WAY_SECTION) as
    { type: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
  if (!three || three.type !== 'tapTable') die(`${THREE_WAY_SECTION} must be a tapTable`);
  if ((three.cols ?? []).length !== 2) die(`${THREE_WAY_SECTION} must have exactly two columns`);
  if ((three.rows ?? []).length !== 3) die(`${THREE_WAY_SECTION} must have three rows, one per room word`);
  for (const w of THE_THREE_ROOM_WORDS) {
    if (!(three.rows ?? []).some((r) => r.cells.includes(w.fr))) {
      die(`${THREE_WAY_SECTION} does not carry "${w.fr}" and the three-way contrast is the lesson`);
    }
  }
  const bath = LESSON.sections.find((s) => (s as { id?: string }).id === BATH_PAIR_SECTION) as
    { type: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
  if (!bath || bath.type !== 'tapTable') die(`${BATH_PAIR_SECTION} must be a tapTable`);
  if ((bath.cols ?? []).length !== 2) die(`${BATH_PAIR_SECTION} must have exactly two columns`);
  const bathStrings = strings(bath);
  for (const w of [BATH_PAIR.bath, BATH_PAIR.toilet]) {
    if (!bathStrings.some((s) => s.includes(w))) die(`${BATH_PAIR_SECTION} does not carry "${w}"`);
  }
  // The compound rule needs both sides visible or it is not a rule.
  const machines = strings(LESSON.sections.find((s) => (s as { id?: string }).id === 's14-machines'));
  for (const w of [...COMPOUND_APPLIANCES, ...SIMPLE_APPLIANCES]) {
    if (!machines.some((s) => s.includes(w))) die(`s14-machines does not carry "${w}", so the rule has no boundary`);
  }
  // Every taught word is on a production surface.
  const unseen = TAUGHT_WORDS.filter((w) => !surfaces.some((s) => s.includes(w)));
  if (unseen.length) die(`taught word(s) on no production surface:\n  ${unseen.join('\n  ')}`);
  // The two excluded rows stay excluded.
  for (const e of EXCLUDED_IDS) {
    if (LESSON.itemIds.includes(e.id)) die(`${e.id} is excluded on purpose and the lesson names it`);
  }

  /* ── The database ────────────────────────────────────────────────────── */

  const seed = JSON.parse(readFileSync(SEED, 'utf8')) as { items: Item[] };

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    /* ── NO CLOBBER ─────────────────────────────────────────────────── */

    const existing = await client.query<{ id: string; fr: string; updated_at: string }>(
      `select id, fr, updated_at::text as updated_at from content_items where id = any($1)`,
      [AUTHORED_IDS]
    );
    const mine = new Map(AUTHORED.map((a) => [a.id, a.fr] as const));
    const foreign = existing.rows.filter((r) => mine.get(r.id) !== r.fr);
    if (foreign.length) {
      die(
        `${foreign.length} of this lesson's ${AUTHORED_IDS.length} authored ids are held by SOMEBODY ELSE:\n  `
        + foreign.map((r) => `${r.id} is "${r.fr}", this lesson wants "${mine.get(r.id)}" (written ${r.updated_at})`).join('\n  ')
        + `\n\n  REBASE rather than overwriting: run  pnpm corpus:probe --theme maison  for the new NEXT FREE\n`
        + `  and renumber AUTHORED_ROWS. Nothing has been written.`
      );
    }
    const reapplying = existing.rowCount ?? 0;

    // Every id the lesson names but does not author must already be published.
    const reused = LESSON.itemIds.filter((id) => !AUTHORED_IDS.includes(id));
    const found = await client.query<{ id: string }>(
      `select id from content_items where id = any($1) and status = 'published'`,
      [reused]
    );
    const missing = reused.filter((id) => !found.rows.some((r) => r.id === id));
    if (missing.length) die(`lesson references unpublished/unknown items:\n  ${missing.join('\n  ')}`);

    // The imported manifest, field by field.
    const foundImports = await client.query<{
      id: string; kind: string; theme: string; fr: string; en: string; drills: string[]; status: string;
      card_type: string | null; respell: string | null;
    }>(
      `select id, kind, theme, fr, en, drills, status, card_type, respell from content_items where id = any($1)`,
      [IMPORTED.map((i) => i.id)]
    );
    const importDrift: string[] = [];
    for (const it of IMPORTED) {
      const row = foundImports.rows.find((r) => r.id === it.id);
      if (!row) { importDrift.push(`${it.id} is not in this database at all`); continue; }
      if (row.status !== 'published') importDrift.push(`${it.id} is ${row.status}, not published`);
      if (row.fr !== it.fr) importDrift.push(`${it.id}: manifest says "${it.fr}", database says "${row.fr}"`);
      if (row.en !== it.en) importDrift.push(`${it.id}: gloss differs ("${it.en}" vs "${row.en}")`);
      if (row.kind !== it.kind) importDrift.push(`${it.id}: kind differs (${it.kind} vs ${row.kind})`);
      if (row.theme !== it.theme) importDrift.push(`${it.id}: theme differs (${it.theme} vs ${row.theme})`);
      const rowDrills = drillsOf(row.drills);
      if ([...rowDrills].sort().join() !== [...it.drills].sort().join()) {
        importDrift.push(`${it.id}: drills differ (${JSON.stringify(it.drills)} vs ${JSON.stringify(rowDrills)})`);
      }
      const repairing = RESPELL_REPAIRS.some((r) => r.id === it.id);
      if (!repairing && (row.respell ?? undefined) !== (it.respell ?? undefined)) {
        importDrift.push(`${it.id}: respell differs ("${String(it.respell)}" vs "${String(row.respell)}")`);
      }
    }
    if (importDrift.length) {
      die(
        `the IMPORTED manifest has drifted from the database:\n  ${importDrift.join('\n  ')}\n`
        + `  Re-run: pnpm tsx scripts/_maison_manifest.ts > scripts/data/maison-imported.ts`
      );
    }

    // NOTHING RE-AUTHORS AN EXISTING ROW. With 363 rows in the theme this is the
    // assertion that protects the build.
    const wholeTheme = await client.query<{ id: string; fr: string; kind: string }>(
      `select id, fr, kind from content_items where theme = 'maison' and status = 'published'`
    );
    const norm = (s: string) => s.toLowerCase().normalize('NFC').replace(/^(le |la |les |l'|un |une |des |du )/, '').trim();
    const ownIds = new Set(AUTHORED_IDS);
    const clash: string[] = [];
    for (const a of AUTHORED) {
      if (a.kind === 'sentence') continue;
      for (const r of wholeTheme.rows) {
        if (r.kind === 'sentence' || ownIds.has(r.id)) continue;
        if (norm(r.fr) === norm(a.fr)) clash.push(`${a.id} "${a.fr}" collides with ${r.id} "${r.fr}"`);
      }
    }
    if (clash.length) die(`authored row(s) re-author a word the theme already holds:\n  ${clash.join('\n  ')}`);

    /* ── The respelling repairs ──────────────────────────────────────── */

    const repairRows = await client.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where id = any($1)`,
      [RESPELL_REPAIRS.map((r) => r.id)]
    );
    const repairDrift: string[] = [];
    let alreadyRepaired = 0;
    for (const r of RESPELL_REPAIRS) {
      const row = repairRows.rows.find((x) => x.id === r.id);
      if (!row) { repairDrift.push(`${r.id} is not in this database`); continue; }
      if (row.fr !== r.fr) repairDrift.push(`${r.id}: expected "${r.fr}", database says "${row.fr}"`);
      const now = row.respell ?? '';
      if (now !== r.from && now !== r.to) {
        repairDrift.push(`${r.id}: expected respell "${r.from}", database says "${now}"`);
      }
      if (now === r.to) alreadyRepaired += 1;
    }
    if (repairDrift.length) {
      die(`the respelling repairs have drifted from the database:\n  ${repairDrift.join('\n  ')}\n  Look before overwriting.`);
    }

    /* ── a1.03's printed figures, re-measured ────────────────────────── */

    const popBefore = endingPopulation(seed.items).length;
    const withMine = [...seed.items.filter((i) => !ownIds.has(i.id)), ...AUTHORED];
    const popAfter = endingPopulation(withMine).length;
    const ENDINGS = ['e', 'age', 'eau', 'ment', 'tion', 'té', 'eur', 'ier', 'isme', 'ette',
      'ance', 'ence', 'oir', 'ie', 'ure', 'ail', 'euse', 'aire', 'in', 'on',
      'ard', 'et', 'is', 'if', 'ude', 'esse', 'al'];
    const moved: string[] = [];
    for (const e of ENDINGS) {
      const a = measureEnding(seed.items, e);
      const b = measureEnding(withMine, e);
      const fa = a ? `${a.n}/${a.accuracy}%/${a.predicts}` : 'none';
      const fb = b ? `${b.n}/${b.accuracy}%/${b.predicts}` : 'none';
      if (fa !== fb) moved.push(`-${e}: ${fa} -> ${fb}`);
    }
    if (moved.length) {
      die(
        `these authored rows move a1.03's measured ending figures:\n  ${moved.join('\n  ')}\n`
        + `  a1-03-genre.test.ts compares each of them exactly. Withdraw the row rather than editing a1.03.\n`
        + `  This is exactly why the SINGULAR "la pièce" is not authored. See maison-corpus.ts.`
      );
    }
    if (popAfter !== popBefore) die(`the ending population moved ${popBefore} -> ${popAfter}`);

    /* ── The dictée and the speak mission, against POSTGRES ──────────── */

    const drillRows = await client.query<{ id: string; fr: string; drills: string[] }>(
      `select id, fr, drills from content_items where id = any($1)`,
      [[...MAISON_DICTATION_IDS, ...MAISON_SPEAK_IDS]]
    );
    const modes: string[] = [];
    let nWords = 0;
    for (const id of MAISON_DICTATION_IDS) {
      const row = drillRows.rows.find((r) => r.id === id);
      if (!row) die(`the dictée names ${id}, which is not published`);
      if (!drillsOf(row.drills).includes('dictation')) die(`${id} "${row.fr}" carries no dictation drill`);
      const m = dicteeMode(row.fr);
      if (m === 'words') nWords += 1;
      modes.push(`${id}  ${m.padEnd(7)} ${row.fr.replace(/[^A-Za-zÀ-ÿœæ]/g, '').length} letters  ${row.fr}`);
    }
    if (nWords !== MAISON_DICTATION_IDS.length) {
      die(`${nWords} of ${MAISON_DICTATION_IDS.length} dictée targets are in word mode and ALL of them should be; see the header`);
    }
    const badSpeak = MAISON_SPEAK_IDS.filter((id) => {
      const row = drillRows.rows.find((r) => r.id === id);
      const local = AUTHORED.find((a) => a.id === id);
      const drills = local ? local.drills : drillsOf(row?.drills);
      return !drills.includes('voiceflash');
    });
    if (badSpeak.length) die(`items named by the speak mission carry no "voiceflash" drill:\n  ${badSpeak.join('\n  ')}`);

    /* ── The unit ────────────────────────────────────────────────────── */

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units, cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    if (unitBody.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unitBody.title}"`);
    if (unitBody.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: "${unitBody.sub}"`);
    if (unitBody.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: "${unitBody.canDo}"`);

    const expectedTag = `A1 · LEÇON ${String(unitBody.seq).padStart(2, '0')}`;
    if (LESSON.tag !== expectedTag) {
      die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unitBody.seq}, so the header will draw "${expectedTag}"`);
    }

    const themesNow = (unitBody as Unit & { themes?: string[] }).themes;
    if (themesNow !== undefined && themesNow.join() !== UNIT_THEMES.join()) {
      die(
        `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, expected ${JSON.stringify(UNIT_THEMES)}.\n`
        + `  This lesson does NOT rebind the unit: maison is already correct and already populated.`
      );
    }
    const boundCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = $1 and status = 'published'`,
      [UNIT_THEMES[0]]
    );
    const nBound = Number(boundCount.rows[0]?.n ?? 0);
    if (nBound < 350) die(`theme "maison" holds only ${nBound} published items, which is not the theme this batch measured (363).`);

    const inSeedCount = seed.items.filter((i) => i.theme === 'maison').length;
    const seedComplete = inSeedCount === nBound;

    const nextUnit: Unit = {
      ...unitBody,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    } as Unit;
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    const existingLesson = await client.query<{ version: number }>(
      `select (body->>'version')::int as version from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );
    const prior = existingLesson.rows[0]?.version;
    guardLessonVersion({
      lessonId: LESSON.id, prior, authored: LESSON.version,
      sourceFile: 'maison-lesson.ts', dryRun: DRY_RUN, die,
    });

    /* ── Report ──────────────────────────────────────────────────────── */

    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  THE BRIEF'S CENTRAL ASSUMPTION, re-measured:`);
    console.log(`    theme maison: ${nBound} published in Postgres, ${inSeedCount} present in the seed`);
    console.log(`    ${seedComplete ? 'CONFIRMED: the seed IS complete for maison, because the theme is inside SEED_CUT.themes.' : 'WRONG: the seed is NOT complete for maison. The brief rests on this. Stop and report.'}`);

    console.log(`\n  WHERE THE BRIEF WAS WRONG:`);
    console.log(`    it asked for "la pièce" at .156. That row moves a1.03's printed -e from 880 to 881.`);
    console.log(`    SHIPPED INSTEAD: "les pièces", plural, outside the ending population. Measured, not preferred.`);
    console.log(`    it said the dictée runs in sentence mode. All ${MAISON_DICTATION_IDS.length} targets are WORD mode and none can be otherwise.`);
    console.log(`    it assumed nothing about the renderer. QuizRoundsView does NOT shuffle options, so`);
    console.log(`    the authored correct index is what the learner sees. The spread below is real.`);

    console.log(`\n  authored items: ${AUTHORED.length} at ${AUTHORED_IDS.join(', ')}`);
    console.log(`    ${AUTHORED.filter((a) => a.kind === 'word').length} word, ${AUTHORED.filter((a) => a.kind === 'sentence').length} sentences`);
    console.log(`  no-clobber: ${reapplying} of ${AUTHORED_IDS.length} authored ids already carry THIS lesson's rows; 0 held by another build`);
    console.log(`  imported items: ${IMPORTED.length}, verified field by field against Postgres`);
    console.log(`  no existing fr in the theme was re-authored: confirmed against all ${wholeTheme.rowCount} published maison rows`);
    console.log(`  a1.03 ending population: ${popBefore} -> ${popAfter} (unchanged, through the real endingPopulation)`);
    console.log(`  excluded on purpose (reported, not deleted): ${EXCLUDED_IDS.map((e) => e.id).join(', ')}`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}", ${prior !== undefined ? `updating v${prior} -> v${LESSON.version}` : 'NEW'}, `
      + `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  taught words: ${TAUGHT_WORDS.length}, every one on a production surface`);
    console.log(`  three-way contrast on ONE screen: ${THREE_WAY_SECTION} (${(three.rows ?? []).length} rows, ${(three.cols ?? []).length} columns)`);
    console.log(`  bath and toilet on ONE screen: ${BATH_PAIR_SECTION}`);
    console.log(`  compound rule with its boundary: s14-machines carries ${COMPOUND_APPLIANCES.length} compounds and ${SIMPLE_APPLIANCES.length} non-compounds`);
    console.log(`  imageRefs authored: ${imageRefs.length} (nothing validates imageRef, so this lesson uses none)`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round(mcq / qs.length * 100)}% (ceiling 50)`);
    console.log(`  ANSWER SPREAD over ${closed.length} closed questions: ${[0, 1, 2, 3].map((s) => `slot ${s} ${Math.round(((slots[s] ?? 0) / closed.length) * 100)}%`).join(', ')}`);
    console.log(`    bounds ${QUIZ_SLOT_SPREAD.minShare * 100}% to ${QUIZ_SLOT_SPREAD.maxShare * 100}%, tighter than the density validator's 40% cap,`);
    console.log(`    because QuizRoundsView renders opts in AUTHORED ORDER and never shuffles.`);
    console.log(`  correct answer is the uniquely longest option in ${longest} of ${closed.length} (ceiling one third)`);
    console.log(`  no correct answer is a preposition a1.21 owns: confirmed over ${closed.length} closed questions`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${fired.size}/${rounds.length}, each the FIRST resolving target of exactly one round`);
    console.log(`  round leads: ${leads.join(', ')}`);
    console.log(`  dictation: ${MAISON_DICTATION_IDS.length} lines, ALL in word mode`);
    for (const m of modes) console.log(`    ${m}`);
    console.log(`    DICTEE_LETTER_LIMIT is 16 and the shortest dictation row in this theme is 24 letters, so`);
    console.log(`    letters mode is unreachable. wordDecoys returns ["et","le"], so this section does NOT`);
    console.log(`    test which room word the learner picks. Measured, and named rather than papered over.`);
    console.log(`  speak: ${MAISON_SPEAK_IDS.length} lines, all carrying voiceflash`);
    console.log(`    NOTE: not one published SENTENCE in theme "maison" carries voiceflash, so the spoken`);
    console.log(`    mission is the headwords and the three chore phrases. Measured, not chosen.`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  no em dash ✓  no "honest" ✓  no neighbour's content ✓`);

    console.log(`\n  RESPELLING REPAIRS (${RESPELL_REPAIRS.length}), display-only, in this lesson's own theme:`);
    console.log(`    THE SUPERSCRIPT WAS MISSING FROM THE ENTIRE THEME: 0 of 112 respelled maison rows carried it.`);
    for (const r of RESPELL_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      console.log(`    ${r.id}  ${r.fr}: "${now}" -> "${r.to}"   ${r.caughtByChecker ? '(checker catches it)' : '(INVISIBLE to the shared checker)'}`);
    }
    console.log(`    Invisible to hasPlainNasalFor, asserted by name: ${REPAIRS_INVISIBLE_TO_CHECKER.length} of ${RESPELL_REPAIRS.length}`);
    if (alreadyRepaired) console.log(`    (${alreadyRepaired} of ${RESPELL_REPAIRS.length} already carry the corrected value; re-upserting is a no-op)`);

    console.log(`\n  FLAGGED BY THE CHECKER AND DELIBERATELY NOT REPAIRED:`);
    for (const k of NOT_REPAIRED) {
      console.log(`    ${k.id}  "${k.fr}"  ${k.respell}`);
      console.log(`      ${k.why.split('.')[0]}.`);
    }
    console.log(`\n  WIDER DEBT FOUND AND NOT TOUCHED: ${WIDER_DEBT_NOT_TOUCHED.what}`);
    console.log(`    ${WIDER_DEBT_NOT_TOUCHED.scope}`);

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(themesNow ?? null)} (UNCHANGED: maison holds ${nBound} published rows)`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} -> ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unitBody.prereqUnitIds ?? [])} (UNCHANGED)`);
    console.log(`    NOTE: scripts/author-full-curriculum-spine.ts:437 declares title "La maison" / sub`);
    console.log(`    "rooms, furniture & household items". The DATABASE holds title "${UNIT_TITLE}" / sub "${UNIT_SUB}"`);
    console.log(`    and the Den renders the database. The drift is REPORTED and deliberately NOT resolved here.`);

    if (DRY_RUN) {
      console.log('\n✓ dry run, all valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of AUTHORED) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, respell, gender, example, notes, tags, drills, audio_ref, version, status, generated_by, card_type, prompt)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,null,$14,'published','human',$15,$16)
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender, example=excluded.example,
           notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
           card_type=excluded.card_type, prompt=excluded.prompt`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.version, it.cardType ?? null, it.prompt ?? null,
        ]
      );
    }

    for (const r of RESPELL_REPAIRS) {
      const res = await client.query(
        `update content_items set respell = $1 where id = $2 and fr = $3`,
        [r.to, r.id, r.fr]
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`respelling repair for ${r.id} touched ${res.rowCount} rows, rolled back, nothing changed`);
      }
    }

    await client.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]
    );

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = $2`,
      [JSON.stringify(nextUnit), UNIT_ID]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows, rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ maison batch applied: ${AUTHORED.length} authored items + ${RESPELL_REPAIRS.length} respelling repairs`
      + ` + lesson ${LESSON.id} published,\n  unit ${UNIT_ID} linked. Its theme binding was already correct and was not touched.`
      + `\n  Next: pnpm tsx scripts/merge-maison-into-seed.ts --dry-run`
      + `\n  maison IS in SEED_CUT.themes, so the merge WILL change seed contents. That is correct, not a bug.`
      + `\n  Do NOT run pnpm content:publish without checking git diff on seed.json first.\n`
    );
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
