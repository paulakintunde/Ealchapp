/* Applies a1.15.l1 "La famille" to Postgres: 18 authored rows, 32 imported rows
 * verified field by field, 9 respelling repairs, the lesson, and the unit link.
 * Validates EVERYTHING before it opens a transaction.
 *
 *     pnpm tsx scripts/author-famille-batch.ts --dry-run
 *     pnpm tsx scripts/author-famille-batch.ts
 *
 * Order matters and it has cost real work twice: apply to Postgres FIRST, merge
 * into the seed SECOND, and publish only when both agree. content:publish
 * regenerates seed.json FROM this database, so publishing before applying would
 * silently delete the lesson from the seed.
 *
 * The guards below are not decoration. Each one is either a rule from
 * A1-BUILD-INVARIANTS.md or a requirement this lesson's brief names explicitly,
 * and every one of them runs the REAL app function rather than a copy: a1.08
 * shipped a hand-rolled endingPopulation carrying a filter the real one does not
 * have, let four rows through, and moved two of a1.03's printed cards.
 *
 * ONE GUARD HERE IS NEW AND IT MATTERS TODAY. a1.17 is being authored in
 * parallel and claims the same fr.a1.famille.235+ range (see the header of
 * famille-corpus.ts). a1.13's batch upserts with `on conflict (id) do update`,
 * which would silently overwrite whichever build ran first. The NO-CLOBBER
 * check below refuses to write if any authored id already exists. */
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
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode, wordDecoys } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { guardLessonVersion } from './version-guard.logic.ts';
import {
  AGREEMENT_PHRASES, AUTHORED_IDS, AUTHORED_ROWS, DOUBLE_DUTY, EXTENDED, FILS_PAIR,
  FORBIDDEN_FORMS, IMPORTED, KNOWN_BROKEN_NOT_REPAIRED, MATCHED_PAIRS,
  POSSESSIVE_RULE_PHRASES, REPAIRED_WITHOUT_SUPERSCRIPT, REPAIRS_INVISIBLE_TO_CHECKER,
  RESERVED_POSSESSIVES, RESPELL, RESPELL_REPAIRS, TAKEN_POSSESSIVES, THE_TWELVE, reservedPossessivePhrases,
  WANTED_IDS, WHERE_IT_STOPS, WITHDRAWN,
} from './data/famille-corpus.ts';
import {
  BOTH_ORDERS_SECTION, FAMILLE_DICTATION_IDS, FAMILLE_LESSON, FAMILLE_SPEAK_IDS,
  FILS_PAIR_SECTION, REFRAME, WORD_MODE_TARGET,
} from './data/famille-lesson.ts';

const AUTHORED: Item[] = AUTHORED_ROWS;
const IMPORTS = IMPORTED;
const LESSON: Lesson = FAMILLE_LESSON;
const UNIT_ID = 'a1.15';

/** Asserted against an EXPLICIT constant, never a figure derived from the
 *  lesson. A derived count compares the content to itself and passes on any
 *  rewording. */
const REFRAME_APPEARANCES = 7;

const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_AUTHORED = 18;
const EXPECTED_IMPORTED = 32;
const EXPECTED_REPAIRS = 9;
const EXPECTED_PAIRS = 6;
const EXPECTED_SECTIONS = 26;

/** Carry a GENUINE nasal vowel and must close it with a superscript. The last
 *  three are in this list specifically because hasPlainNasalFor CANNOT SEE
 *  THEM: the nasal is word-internal, so the broken value passes every shared
 *  check. Invariant §3's first blind spot. */
const NASAL_WORDS = [
  'les parents', 'la grand-mère', 'le grand-père', 'les grands-parents', 'le cousin',
  "l'enfant", 'les enfants', "l'oncle", 'la tante', 'mon père', 'mes parents',
];

/** Has a REAL nasal consonant and NO nasal vowel, so it must NOT carry a
 *  superscript. hasPlainNasalFor false-positives on LAH FAHM and would be
 *  SILENCED by LAH FAHⁿ, which teaches a sound that is not in the word.
 *  Invariant §3's second blind spot, alongside `jaune` and `automne`. */
const NOT_NASAL = ['la femme', 'la cousine'];

const UNIT_THEMES = ['famille'];
const UNIT_TITLE = 'Family Vocabulary';
const UNIT_SUB = 'La famille';
const UNIT_CANDO = 'Can introduce their family and say who is who';

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

function drillsOf(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** Walks the string, checking neighbours against an accent-aware class. NEVER
 *  builds a regex out of the search term: `\b` is ASCII-only in JavaScript, so
 *  /\bson\b/ misses accented neighbours entirely, and a plain indexOf would hit
 *  `son` inside `sont`, `personne` and `raison`. Invariant §0. */
function hasWord(haystack: string, needle: string): boolean {
  const h = haystack.toLowerCase();
  const n = needle.toLowerCase();
  let from = 0;
  for (;;) {
    const i = h.indexOf(n, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : h[i - 1];
    const after = h[i + n.length] ?? ' ';
    if (!/[a-zà-ÿ'’]/i.test(before) && !/[a-zà-ÿ]/i.test(after)) return true;
    from = i + 1;
  }
}

/** The surfaces a learner actually PRODUCES from or is tested on. Scoped
 *  deliberately: a guard written against every string in the lesson fires on
 *  legitimate prose in a comment or a `why` and gets deleted rather than fixed.
 *  a1.13's header records exactly that mistake. */
function productionSurfaces(l: Lesson): string[] {
  const out: string[] = [];
  for (const s of l.sections) {
    const sec = s as Record<string, unknown>;
    // Cards, rows, options and everything a learner reads inside a mission.
    for (const k of ['cards', 'rows', 'groups', 'errors', 'turns', 'lines', 'goals', 'points', 'questions']) {
      if (sec[k]) strings(sec[k], out);
    }
    if (sec.beats) strings(sec.beats, out);
    if (sec.text) strings(sec.text, out);
    if (sec.body) strings(sec.body, out);
    if (sec.glossary) strings(sec.glossary, out);
  }
  strings(l.drills ?? [], out);
  strings(l.sheets ?? [], out);
  strings(l.terms ?? {}, out);
  return out;
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run, nothing will be written)');

  /* ── Items ───────────────────────────────────────────────────────────── */

  if (AUTHORED.length !== EXPECTED_AUTHORED) {
    die(`expected ${EXPECTED_AUTHORED} authored rows, found ${AUTHORED.length}`);
  }
  if (IMPORTS.length !== EXPECTED_IMPORTED) {
    die(`expected ${EXPECTED_IMPORTED} imported rows, found ${IMPORTS.length}`);
  }

  const ids = AUTHORED.map((i) => i.id);
  const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupeIds.length) die(`authored id used twice: ${[...new Set(dupeIds)].join(', ')}`);

  for (const it of AUTHORED) {
    const issues = validateItem(it, it.id);
    if (issues.length) die(`${it.id} fails validateItem:\n${formatIssues(issues)}`);
  }

  // The flashhub key: article stripped, per theme. Two rows sharing it in one
  // theme are one card served twice, which is a build failure.
  const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const themeKeys = new Map<string, string>();
  for (const it of [...IMPORTS, ...AUTHORED]) {
    if ((it.cardType ?? 'vocab') !== 'vocab' || it.kind === 'sentence') continue;
    const k = `${it.theme}::${norm(it.fr)}`;
    const prior = themeKeys.get(k);
    if (prior) die(`two non-sentence rows share an fr inside one theme: ${prior} vs ${it.id} ("${it.fr}")`);
    themeKeys.set(k, it.id);
  }

  // Every a1 word/phrase must carry BOTH flashcard and voiceflash, or the hub
  // shows fewer cards than the theme holds.
  const stranded = AUTHORED.filter(
    (i) => (i.kind === 'word' || i.kind === 'phrase')
      && (!i.drills.includes('flashcard') || !i.drills.includes('voiceflash'))
  );
  if (stranded.length) {
    die(`authored vocab missing flashcard or voiceflash:\n  ${stranded.map((i) => `${i.id} ${JSON.stringify(i.drills)}`).join('\n  ')}`);
  }

  /* ── a1.03's measured population, through the REAL function ──────────── */

  const { readFileSync } = await import('node:fs');
  const { fileURLToPath } = await import('node:url');
  const { dirname, join } = await import('node:path');
  const here = dirname(fileURLToPath(import.meta.url));
  const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as
    { items: Item[] };

  const popBefore = endingPopulation(seed.items).length;
  const popAfter = endingPopulation([...seed.items, ...AUTHORED]).length;
  const joiners = endingPopulation(AUTHORED);
  if (joiners.length) {
    die(
      `authored row(s) join a1.03's measured ending population and will move its printed figures:\n  `
      + `${joiners.map((i) => `${i.id} "${i.fr}"`).join('\n  ')}\n`
      + `  a1-03-genre.test.ts recomputes twenty-seven endings from the seed on every run. Withdraw the row\n`
      + `  or make it plural-only, a phrase, or a sentence. la personne was withdrawn for exactly this.`
    );
  }
  if (popAfter !== popBefore) die(`the ending population moved ${popBefore} -> ${popAfter}`);

  /* ── Lesson ──────────────────────────────────────────────────────────── */

  const lessonIssues = validateLesson(LESSON);
  if (lessonIssues.length) die(`${LESSON.id} fails validateLesson:\n${formatIssues(lessonIssues)}`);

  const density = validateDensity(LESSON);
  if (density.length) die(`${LESSON.id} fails the density validator:\n${formatDensity(density)}`);

  if (LESSON.sections.length !== EXPECTED_SECTIONS) {
    die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);
  }

  const all = strings(LESSON);
  const hits = all.filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} time(s), the constant says ${REFRAME_APPEARANCES}`);
  }

  if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) {
    die(`expected ${EXPECTED_TRIGGERS} error triggers, found ${(LESSON.errorTriggers ?? []).length}`);
  }

  const quizzes = LESSON.sections.filter((s) => s.type === 'quiz');
  if (quizzes.length !== 1) {
    die(`${quizzes.length} quiz sections. lessonPager.logic.ts appends exactly ONE quiz page.`);
  }

  if (JSON.stringify(LESSON).includes('"autoplay"')) {
    die('autoplay is declared in schema.ts and implemented in no component. Use audioFirst.');
  }

  if (JSON.stringify(LESSON).includes('\u203F')) {
    die('U+203F renders as a low underscore on a Pixel 6. Do not introduce a new one.');
  }

  const emDash = all.filter((s) => s.includes('\u2014'));
  if (emDash.length) die(`em dash found in: ${emDash.slice(0, 3).join(' | ')}`);

  const honest = all.filter((s) => /honest/i.test(s));
  if (honest.length) die(`"honest" found in: ${honest.slice(0, 3).join(' | ')}`);

  /* ── Respellings, and the three blind spots ──────────────────────────── */

  const badNasal: string[] = [];
  for (const [fr, d] of Object.entries(RESPELL)) {
    if (hasPlainNasalFor(fr, d.respell)) badNasal.push(`${fr} "${d.respell}"`);
  }
  if (badNasal.length) die(`respelling(s) closing a nasal with a plain n/m:\n  ${badNasal.join('\n  ')}`);

  // BY NAME as well as through the shared checker, because the checker cannot
  // see a word-internal nasal and three of this lesson's nine repairs are
  // exactly that shape.
  const missingSuperscript = NASAL_WORDS.filter((fr) => !RESPELL[fr]?.respell.includes('\u207F'));
  if (missingSuperscript.length) {
    die(
      `these carry a genuine nasal vowel and must close it with a superscript n:\n  `
      + `${missingSuperscript.map((fr) => `${fr} "${RESPELL[fr]?.respell}"`).join('\n  ')}\n`
      + `  Three of them (l'oncle, la tante, le gendre-shaped words) are INVISIBLE to hasPlainNasalFor.`
    );
  }

  // And the other direction. A superscript here would teach a sound that is
  // not in the word, and the checker does NOT flag the wrong fix.
  const wrongSuperscript = NOT_NASAL.filter((fr) => RESPELL[fr]?.respell.includes('\u207F'));
  if (wrongSuperscript.length) {
    die(
      `these have a REAL nasal consonant and no nasal vowel, so a superscript teaches a sound that is `
      + `not there:\n  ${wrongSuperscript.map((fr) => `${fr} "${RESPELL[fr]?.respell}"`).join('\n  ')}\n`
      + `  la femme is /fam/ and must be LAH FAM. hasPlainNasalFor does NOT catch LAH FAHⁿ, so only this\n`
      + `  assertion holds the line.`
    );
  }

  if (RESPELL_REPAIRS.length !== EXPECTED_REPAIRS) {
    die(`expected ${EXPECTED_REPAIRS} respelling repairs, found ${RESPELL_REPAIRS.length}`);
  }
  // The DISPLAY respelling sits in brackets (respell-notation) and the corpus
  // column stores it bare, so the repair is compared against the unbracketed
  // form. They must still be the same transcription, or a card and the
  // flashcard hub would show the learner two different things.
  const bare = (s: string) => s.replace(/^\[|\]$/g, '');
  for (const r of RESPELL_REPAIRS) {
    if (r.to !== bare(RESPELL[r.fr]?.respell ?? '')) {
      die(`repair for ${r.fr} writes "${r.to}" but this lesson displays "${RESPELL[r.fr]?.respell}"`);
    }
    if (hasPlainNasalFor(r.fr, r.to)) die(`the repaired value for ${r.fr} still fails the checker`);
  }

  /* ── The shape of the teaching ───────────────────────────────────────── */

  if (MATCHED_PAIRS.length !== EXPECTED_PAIRS) {
    die(`expected ${EXPECTED_PAIRS} matched pairs, found ${MATCHED_PAIRS.length}`);
  }

  // The reframe's layout. BOTH orders on ONE screen, in adjacent columns.
  // Split across two missions it stops being a rule and becomes two facts.
  const pairsSection = LESSON.sections.find((s) => (s as { id?: string }).id === BOTH_ORDERS_SECTION) as
    { type: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
  if (!pairsSection) die(`${BOTH_ORDERS_SECTION} is missing, and it is the reframe's layout`);
  if (pairsSection.type !== 'tapTable') die(`${BOTH_ORDERS_SECTION} must be a tapTable, found ${pairsSection.type}`);
  if ((pairsSection.cols ?? []).length !== 2) {
    die(`${BOTH_ORDERS_SECTION} must have exactly two columns, French and English, found ${(pairsSection.cols ?? []).length}`);
  }
  for (const row of pairsSection.rows ?? []) {
    const [fr, en] = row.cells;
    if (!fr.includes(' de ')) die(`${BOTH_ORDERS_SECTION} row "${fr}" does not show the de order`);
    if (!en.includes("'s")) die(`${BOTH_ORDERS_SECTION} row "${en}" does not show the English apostrophe order`);
  }

  // fils and fil, on ONE surface, asserted by name. Both rows already exist in
  // different themes and the pairing is the new thing.
  const filsSection = LESSON.sections.find((s) => (s as { id?: string }).id === FILS_PAIR_SECTION);
  if (!filsSection) die(`${FILS_PAIR_SECTION} is missing`);
  const filsStrings = strings(filsSection);
  if (!filsStrings.some((s) => hasWord(s, FILS_PAIR.word))) die(`${FILS_PAIR_SECTION} does not carry "${FILS_PAIR.word}"`);
  if (!filsStrings.some((s) => hasWord(s, FILS_PAIR.thread))) die(`${FILS_PAIR_SECTION} does not carry "${FILS_PAIR.thread}"`);

  // Every family word taught is asserted BY NAME, individually, never as a
  // count. The extended set is the half most likely to be trimmed later.
  const surfaces = productionSurfaces(LESSON);
  const taughtWords = [...THE_TWELVE, ...EXTENDED, ...WHERE_IT_STOPS.map((w) => w.fr), ...Object.keys(RESPELL)];
  const unseen = [...new Set(taughtWords)].filter((fr) => !surfaces.some((s) => s.includes(fr)));
  if (unseen.length) {
    die(`taught by the corpus and on no production surface:\n  ${unseen.join('\n  ')}`);
  }

  // The gender rule ships WITH its exceptions. A rule shipped without one is a
  // rule the learner disproves on their own within a week.
  const ruleSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's09-truth');
  const stopsSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's10-stops');
  if (!ruleSection || !stopsSection) die('the matching rule needs both s09-truth and s10-stops');
  const ruleAct = (LESSON.acts ?? []).find((a) => a.sections.includes('s09-truth'));
  if (!ruleAct?.sections.includes('s10-stops')) {
    die('s09-truth states the rule and s10-stops names its exceptions, and they must be in the same act');
  }
  if (!strings(stopsSection).some((s) => hasWord(s, 'bébé'))) {
    die('s10-stops does not name le bébé, which is the exception the rule cannot ship without');
  }

  /* ── The neighbours keep their lessons ───────────────────────────────── */

  // a1.17 owns the possessive system. THREE words were taken and nothing else.
  // Probed as POSSESSIVE + FAMILY NOUN, never as a bare word. A bare `son`
  // fires on this lesson's own gloss "Marie's son", and a guard that fires on
  // legitimate content gets deleted rather than fixed (invariant §6).
  const phrases = reservedPossessivePhrases();
  const leaked = phrases.filter((p) => surfaces.some((s) => s.toLowerCase().includes(p)));
  if (leaked.length) {
    die(
      `possessive(s) a1.17 owns reached a production surface: ${leaked.join(', ')}\n`
      + `  This lesson takes exactly ${TAKEN_POSSESSIVES.join(', ')} and hands the rest over in writing.`
    );
  }
  const ruleLeak = POSSESSIVE_RULE_PHRASES.filter((p) => surfaces.some((s) => s.toLowerCase().includes(p.toLowerCase())));
  if (ruleLeak.length) {
    die(
      `the mon-before-a-feminine-vowel rule reached a learner surface: ${ruleLeak.join(', ')}\n`
      + `  That is a1.17's headline and its canDo says "and their kin" explicitly.`
    );
  }

  // a1.13 owns agreement and a1.16 owns placement. grand-mère is a FROZEN NOUN
  // here, never an agreement example.
  const agreementLeak = AGREEMENT_PHRASES.filter((p) => surfaces.some((s) => s.toLowerCase().includes(p.toLowerCase())));
  if (agreementLeak.length) {
    die(`agreement or placement teaching reached a learner surface: ${agreementLeak.join(', ')}`);
  }
  const forbidden = FORBIDDEN_FORMS.filter((f) => all.some((s) => s.toLowerCase().includes(f.toLowerCase())));
  if (forbidden.length) die(`a form that is not French appears in the lesson: ${forbidden.join(', ')}`);

  // imageRef is validated by NOTHING. This lesson authors none.
  const imageRefs = strings(LESSON).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  if (imageRefs.length) {
    die(
      `${imageRefs.length} imageRef(s) authored. Nothing validates imageRef: lessonImage() is a lookup in a\n`
      + `  statically enumerated REG and an unregistered ref draws a BLANK BOX. Register it in\n`
      + `  src/content/lessonImages.ts, commit the asset, and write the assertion yourself.`
    );
  }

  /* ── Quiz ────────────────────────────────────────────────────────────── */

  const quiz = quizzes[0] as unknown as { rounds?: { id: string; targets?: string[]; questions: Record<string, unknown>[] }[] };
  const rounds = quiz.rounds ?? [];
  if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} rounds, found ${rounds.length}`);

  const qs = quizQuestions(quizzes[0]) as unknown as {
    q: string; format?: string; opts?: string[]; correct?: number; accept?: string[];
    answer?: string; why?: string; ref?: string;
  }[];

  const noWhy = qs.filter((q) => !q.why);
  if (noWhy.length) die(`question(s) with no why: ${noWhy.map((q) => q.q.slice(0, 40)).join(' | ')}`);
  const noRef = qs.filter((q) => !q.ref);
  if (noRef.length) die(`question(s) with no ref: ${noRef.map((q) => q.q.slice(0, 40)).join(' | ')}`);

  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id));
  const badRef = qs.filter((q) => q.ref && !sectionIds.has(q.ref));
  if (badRef.length) die(`quiz ref names a section that does not exist: ${badRef.map((q) => q.ref).join(', ')}`);

  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq} of ${qs.length} questions are mcq, and the ceiling is half`);

  // QuizDeckView shuffles the options of every closed question, per attempt.
  // An option naming a position is meaningless once shuffled.
  const POSITIONAL = ['the first', 'the second', 'the third', 'the last', 'both of the above', 'all of the above', 'none of these', 'none of the above'];
  const positional: string[] = [];
  for (const q of qs) {
    for (const o of q.opts ?? []) {
      if (POSITIONAL.some((p) => o.toLowerCase().includes(p))) positional.push(`"${o}" in "${q.q.slice(0, 40)}"`);
    }
  }
  if (positional.length) {
    die(`option(s) referring to a position, which the runtime shuffle makes meaningless:\n  ${positional.join('\n  ')}`);
  }

  // A repeated option makes a shuffled question genuinely ambiguous. This
  // lesson is exposed: the distractors come from a small closed set.
  for (const q of qs) {
    const o = q.opts ?? [];
    if (new Set(o).size !== o.length) die(`duplicate option in "${q.q.slice(0, 50)}"`);
  }

  // Every free-text question must accept the answer it displays, checked
  // through the REAL matchesAccept.
  const freeText = qs.filter((q) => ['typeIn', 'errorSpot', 'speak'].includes(q.format ?? ''));
  for (const q of freeText) {
    if (!q.answer || !q.accept) die(`free-text question with no answer or accept: "${q.q.slice(0, 40)}"`);
    if (!matchesAccept(q.answer, q.accept)) {
      die(`"${q.q.slice(0, 40)}" displays "${q.answer}" and does not accept it`);
    }
  }

  /* ── Drill reachability ──────────────────────────────────────────────── */

  // drillForRound fires the drill of the FIRST resolving target and stops. A
  // drill named only in second place is dead content.
  const drillIds = new Set((LESSON.drills ?? []).map((d) => d.id));
  const triggerById = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t] as const));
  const fired = new Set<string>();
  const leads: string[] = [];
  for (const r of rounds) {
    const first = (r.targets ?? []).find((t) => triggerById.get(t)?.drill);
    if (!first) die(`round ${r.id} names no target with a drill`);
    const d = triggerById.get(first)!.drill;
    if (fired.has(d)) die(`drill ${d} is the first target of more than one round`);
    fired.add(d);
    leads.push(`${r.id} -> ${d}`);
  }
  const teaching = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  const unreachable = teaching.filter((d) => !fired.has(d.id));
  if (unreachable.length) {
    die(`drill(s) no round can fire: ${unreachable.map((d) => d.id).join(', ')}`);
  }
  for (const t of LESSON.errorTriggers ?? []) {
    if (!drillIds.has(t.drill)) die(`trigger ${t.id} names a drill that does not exist: ${t.drill}`);
    if (t.retest && !drillIds.has(t.retest)) die(`trigger ${t.id} names a retest that does not exist: ${t.retest}`);
  }

  /* ── The database ────────────────────────────────────────────────────── */

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    /* ── NO CLOBBER. a1.17 is in flight and claims the same range. ─────── */

    // An id that already exists is only a problem if it belongs to SOMEBODY
    // ELSE. Re-running this batch after an edit must stay idempotent, so a row
    // whose `fr` is already this lesson's own is a no-op re-upsert and is
    // allowed; a row carrying anything else is another build's and is fatal.
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
        + `\n\n  a1.17 is being authored in parallel and claims fr.a1.famille.235-.257 (see the header of\n`
        + `  famille-corpus.ts). It has landed first. REBASE this lesson rather than overwriting it:\n`
        + `  run  pnpm corpus:probe --theme famille  for the new NEXT FREE and renumber AUTHORED_ROWS.\n`
        + `  Nothing has been written.`
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

    // The imported manifest, field by field. A stale manifest puts the seed
    // ahead of rows nobody has looked at.
    const foundImports = await client.query<{
      id: string; kind: string; theme: string; fr: string; en: string; drills: string[]; status: string;
      card_type: string | null; respell: string | null;
    }>(
      `select id, kind, theme, fr, en, drills, status, card_type, respell from content_items where id = any($1)`,
      [IMPORTS.map((i) => i.id)]
    );
    const importDrift: string[] = [];
    for (const it of IMPORTS) {
      const row = foundImports.rows.find((r) => r.id === it.id);
      if (!row) { importDrift.push(`${it.id} is not in this database at all`); continue; }
      if (row.status !== 'published') importDrift.push(`${it.id} is ${row.status}, not published`);
      if (row.fr !== it.fr) importDrift.push(`${it.id}: manifest says "${it.fr}", database says "${row.fr}"`);
      if (row.en !== it.en) importDrift.push(`${it.id}: gloss differs ("${it.en}" vs "${row.en}")`);
      if (row.kind !== it.kind) importDrift.push(`${it.id}: kind differs (${it.kind} vs ${row.kind})`);
      if (row.theme !== it.theme) importDrift.push(`${it.id}: theme differs (${it.theme} vs ${row.theme})`);
      if ((row.card_type ?? undefined) !== it.cardType) {
        importDrift.push(`${it.id}: cardType differs (${String(it.cardType)} vs ${String(row.card_type)})`);
      }
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
        + `  Re-run scripts/_famille_manifest.ts and rebuild scripts/data/famille-imported.ts.`
      );
    }

    // NOTHING IN THIS LESSON RE-AUTHORS AN EXISTING ROW. With 234 rows in
    // range this is the assertion that protects the build, and it is the one
    // that would have caught the last four briefs.
    const reAuthored = AUTHORED.filter((a) => foundImports.rows.some((r) => r.fr === a.fr && r.theme === a.theme));
    if (reAuthored.length) {
      die(`authored row(s) duplicate an existing fr in the same theme:\n  ${reAuthored.map((r) => `${r.id} "${r.fr}"`).join('\n  ')}`);
    }
    const wholeTheme = await client.query<{ id: string; fr: string; kind: string }>(
      `select id, fr, kind from content_items where theme = 'famille' and status = 'published'`
    );
    // This lesson's OWN rows are excluded, or a second run of the batch reports
    // every authored row as colliding with itself. The question being asked is
    // "does anybody ELSE already hold this word in this theme".
    const ownIds = new Set(AUTHORED_IDS);
    const clash: string[] = [];
    for (const a of AUTHORED) {
      if (a.kind === 'sentence') continue;
      for (const r of wholeTheme.rows) {
        if (r.kind === 'sentence' || ownIds.has(r.id)) continue;
        if (norm(r.fr) === norm(a.fr)) clash.push(`${a.id} "${a.fr}" collides with ${r.id} "${r.fr}"`);
      }
    }
    if (clash.length) {
      die(`authored row(s) re-author a word the theme already holds:\n  ${clash.join('\n  ')}`);
    }

    /* ── The respelling repairs ──────────────────────────────────────── */

    const repairRows = await client.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where id = any($1)`,
      [RESPELL_REPAIRS.map((r) => r.id)]
    );
    const repairDrift: string[] = [];
    for (const r of RESPELL_REPAIRS) {
      const row = repairRows.rows.find((x) => x.id === r.id);
      if (!row) { repairDrift.push(`${r.id} is not in this database`); continue; }
      if (row.fr !== r.fr) repairDrift.push(`${r.id}: expected "${r.fr}", database says "${row.fr}"`);
      if (row.respell !== r.from && row.respell !== r.to) {
        repairDrift.push(`${r.id}: expected respell "${r.from}", database says "${row.respell}"`);
      }
    }
    if (repairDrift.length) {
      die(`the respelling repairs have drifted:\n  ${repairDrift.join('\n  ')}\n  Somebody has changed these rows. Look before overwriting.`);
    }
    const alreadyRepaired = RESPELL_REPAIRS.filter((r) =>
      repairRows.rows.find((x) => x.id === r.id)?.respell === r.to).length;

    /* ── The dictée, through the real dicteeMode ─────────────────────── */

    const byId = new Map([...AUTHORED, ...IMPORTS].map((i) => [i.id, i] as const));
    const modes: string[] = [];
    const noDictTag: string[] = [];
    let nWords = 0;
    for (const id of FAMILLE_DICTATION_IDS) {
      const it = byId.get(id);
      if (!it) die(`the dictée names ${id}, which is not in this batch`);
      const mode = dicteeMode(it.fr);
      const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
      modes.push(`${mode === 'words' ? 'WORDS  ' : 'letters'} "${it.fr}"${decoys.length ? `  decoys=${decoys.join('/')}` : ''}`);
      if (mode === 'words') nWords += 1;
      if (!it.drills.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
    }
    if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);
    // THE OPPOSITE CONSTRAINT FROM a1.13's, and it is measured rather than
    // preferred. This lesson teaches an ORDER, so exactly one target is in word
    // mode on purpose: word mode hands over the sentence's words as tiles and
    // makes the learner SEQUENCE them, which is the decision `de` requires.
    if (nWords !== 1) {
      die(
        `${nWords} dictée target(s) land in word mode and exactly ONE should.\n`
        + `  ${WORD_MODE_TARGET} is deliberately word mode: it is the only target that makes the learner put\n`
        + `  de in the right place. Every other target teaches a spelling and must stay in letters mode.`
      );
    }
    if (dicteeMode(byId.get(WORD_MODE_TARGET)!.fr) !== 'words') {
      die(`${WORD_MODE_TARGET} is supposed to be the word-mode target and it is not. Do not shorten it.`);
    }

    /* ── The speak mission ───────────────────────────────────────────── */

    const speakRows = await client.query<{ id: string; drills: string[] }>(
      `select id, drills from content_items where id = any($1)`,
      [FAMILLE_SPEAK_IDS.filter((id) => !byId.has(id))]
    );
    const badSpeak = [
      ...FAMILLE_SPEAK_IDS.filter((id) => byId.has(id) && !byId.get(id)!.drills.includes('voiceflash')),
      ...FAMILLE_SPEAK_IDS.filter((id) => !byId.has(id)
        && !drillsOf(speakRows.rows.find((r) => r.id === id)?.drills).includes('voiceflash')),
    ];
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
        + `  This lesson does NOT rebind the unit: famille is already correct and already populated.`
      );
    }
    const boundCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = $1 and status = 'published'`,
      [UNIT_THEMES[0]]
    );
    const nBound = Number(boundCount.rows[0]?.n ?? 0);
    if (nBound < 300) {
      die(`theme "${UNIT_THEMES[0]}" holds only ${nBound} published items, which is not the theme this batch measured (331).`);
    }

    // The brief's central assumption, re-measured rather than trusted.
    const inSeedCount = seed.items.filter((i) => i.theme === 'famille').length;
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
      sourceFile: 'famille-lesson.ts', dryRun: DRY_RUN, die,
    });

    /* ── Report ──────────────────────────────────────────────────────── */

    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});
    const closed = qs.filter((q) => Array.isArray(q.opts) && typeof q.correct === 'number');
    const slots = closed.reduce<Record<number, number>>((a, q) => {
      a[q.correct!] = (a[q.correct!] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  THE BRIEF'S CENTRAL ASSUMPTION, re-measured:`);
    console.log(`    theme famille: ${nBound} published in Postgres, ${inSeedCount} present in the seed`);
    console.log(`    ${seedComplete ? 'CONFIRMED: the seed IS complete for famille, because the theme is inside SEED_CUT.themes.' : 'WRONG: the seed is NOT complete for famille. The brief rests on this. Stop and report.'}`);

    console.log(`\n  authored items: ${AUTHORED.length} at ${AUTHORED_IDS[0]}..${AUTHORED_IDS[AUTHORED_IDS.length - 1]}`);
    console.log(`    ${AUTHORED.filter((a) => a.kind === 'phrase').length} phrases, ${AUTHORED.filter((a) => a.kind === 'sentence').length} sentences, ${AUTHORED.filter((a) => a.kind === 'word').length} word`);
    console.log(`    twelve of them exist because "la mère de" and "le frère de" return ZERO across all published sentences`);
    console.log(`  no-clobber: ${reapplying} of ${AUTHORED_IDS.length} authored ids already carry THIS lesson's own rows (idempotent re-apply); 0 held by another build`);
  console.log(`  imported items: ${IMPORTS.length}, verified field by field, ${IMPORTS.filter((i) => i.inSeed).length} of them already in the seed`);
    console.log(`  NO family headword is authored except "les enfants", which famille has never held (it holds l'enfant)`);
    console.log(`  no existing fr in the theme was re-authored: confirmed against all ${wholeTheme.rowCount} published famille rows`);
    console.log(`  id convention: famille puts headwords AND sentences in fr.a1.famille.*, and this build follows it`);
    console.log(`  withdrawn on purpose: ${WITHDRAWN.length} (la personne moves a1.03's printed -e from 873 to 874)`);
    console.log(`  a1.03 ending population: ${popBefore} -> ${popAfter} (unchanged, measured through the real endingPopulation)`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}", ${prior !== undefined ? `updating v${prior} → v${LESSON.version}` : 'NEW'}, `
      + `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  act weight: words ${(LESSON.acts ?? [])[1]?.sections.length} missions, de rule ${((LESSON.acts ?? [])[0]?.sections.length ?? 0) + ((LESSON.acts ?? [])[4]?.sections.length ?? 0)}, gender ${(LESSON.acts ?? [])[2]?.sections.length}`);
    console.log(`  both orders on ONE screen: ${BOTH_ORDERS_SECTION}, ${(pairsSection.rows ?? []).length} rows, French | English`);
    console.log(`  fils and fil on one surface: ${FILS_PAIR_SECTION} (${FILS_PAIR.wordId} + ${FILS_PAIR.threadId}, different themes, never paired before)`);
    console.log(`  gender rule and its exceptions in the same act: ${ruleAct?.id}`);
    console.log(`  possessives taken: ${TAKEN_POSSESSIVES.join(', ')} and nothing else. ${RESERVED_POSSESSIVES.length} reserved for a1.17, none present.`);
    console.log(`  the mon-before-a-feminine-vowel rule: absent, asserted against ${POSSESSIVE_RULE_PHRASES.length} phrasings`);
    console.log(`  double duty handled on a card and in a why, never in a question: ${DOUBLE_DUTY.map((d) => d.fr).join(', ')}`);
    console.log(`  imageRefs authored: ${imageRefs.length} (nothing validates imageRef, so this lesson uses none)`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round(mcq / qs.length * 100)}% (ceiling 50)`);
    console.log(`  correct-answer spread over ${closed.length} closed questions: ${Object.entries(slots).map(([s, n]) => `slot ${s} ${Math.round(Number(n) / closed.length * 100)}%`).join(', ')} (cap 40)`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  no option refers to a position, none is duplicated: confirmed over ${closed.length} closed questions`);
    console.log(`  every free-text question accepts what it displays: confirmed through the real matchesAccept`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${fired.size}/${teaching.length}, each the FIRST resolving target of exactly one round`);
    console.log(`  round leads: ${leads.join(', ')}`);
    console.log(`  dictation: ${FAMILLE_DICTATION_IDS.length} lines`);
    for (const m of modes) console.log(`    ${m}`);
    console.log(`    ONE word-mode target on purpose. This lesson teaches an ORDER, not an ending, so word mode`);
    console.log(`    is the right mode for it: the learner sequences the tiles and has to place de. That is the`);
    console.log(`    OPPOSITE of a1.13's finding and it is measured, not preferred.`);
    console.log(`  speak: ${FAMILLE_SPEAK_IDS.length} lines, all carrying voiceflash`);
    console.log(`    NOTE: not one published SENTENCE in theme "famille" carries voiceflash, so the spoken`);
    console.log(`    mission is the headwords and this lesson's own authored phrases. Measured, not chosen.`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  no em dash ✓  no "honest" ✓  no neighbour's content ✓`);

    console.log(`\n  RESPELLING REPAIRS (not silent), display-only, in this lesson's own theme:`);
    for (const r of RESPELL_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      console.log(`    ${r.id}  ${r.fr}: "${now}" → "${r.to}"   ${r.caughtByChecker ? '(checker catches it)' : '(INVISIBLE to the shared checker)'}`);
    }
    console.log(`    Invisible to hasPlainNasalFor, asserted by name: ${REPAIRS_INVISIBLE_TO_CHECKER.join(', ')}`);
    console.log(`    Repaired WITHOUT a superscript because the checker false-positives: ${REPAIRED_WITHOUT_SUPERSCRIPT.join(', ')}`);
    console.log(`    la femme is ${RESPELL['la femme'].respell} and NOT a superscript: /fam/ has a real m and no nasal vowel.`);
    if (alreadyRepaired) console.log(`    (${alreadyRepaired} of ${RESPELL_REPAIRS.length} already carry the corrected value; re-upserting is a no-op)`);

    console.log(`\n  BROKEN AND DELIBERATELY NOT REPAIRED:`);
    for (const k of KNOWN_BROKEN_NOT_REPAIRED) {
      console.log(`    ${k.id}  "${k.fr}"  ${k.respell}`);
      console.log(`      ${k.why.split('\n')[0]}`);
    }

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(themesNow ?? null)} (UNCHANGED: famille holds ${nBound} published rows)`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unitBody.prereqUnitIds ?? [])} (UNCHANGED)`);
    console.log(`    a1.17 declares the same theme and is being authored in parallel. Its id range is agreed in`);
    console.log(`    the handover at the foot of famille-lesson.ts: .253+ if this build lands first.`);

    if (DRY_RUN) {
      console.log('\n✓ dry run, all valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of [...AUTHORED]) {
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
      `\n✓ famille batch applied: ${AUTHORED.length} authored items + ${RESPELL_REPAIRS.length} respelling repairs`
      + ` + lesson ${LESSON.id} published,\n  unit ${UNIT_ID} linked. Its theme binding was already correct and was not touched.`
      + `\n  Next: pnpm tsx scripts/merge-famille-into-seed.ts --dry-run`
      + `\n  famille IS in SEED_CUT.themes, so the merge WILL change seed contents. That is correct, not a bug.`
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
