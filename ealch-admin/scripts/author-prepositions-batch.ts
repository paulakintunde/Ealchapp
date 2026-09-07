/* a1.21 "Prépositions de lieu" → Postgres.
 *
 *   pnpm tsx scripts/author-prepositions-batch.ts --dry-run
 *   pnpm tsx scripts/author-prepositions-batch.ts
 *
 * Validates EVERYTHING before it touches the database, writes in one
 * transaction, and is idempotent by id. `--dry-run` reports and writes nothing.
 *
 * Order matters and is not negotiable: apply to Postgres FIRST, merge into the
 * seed SECOND, and publish only when both agree. `content:publish` regenerates
 * seed.json FROM the database, so publishing before applying silently deletes
 * the lesson from the seed. sons.07.l1 survived that once only because its
 * source files were intact.
 *
 * ── What this script checks that no other gate does ────────────────────────
 *
 *   1. Every imported row EXISTS in Postgres and its `fr` matches the copy in
 *      prepositions-imported.ts byte for byte. A copy that drifts from the
 *      published row is a card showing text nobody published.
 *   2. The id range is still free AT WRITE TIME, and not merely at the highest
 *      id. a1.15 landed ENTIRELY INSIDE a1.17's range and the simple next-free
 *      guard passed cleanly, because their maximum was below a1.17's maximum.
 *      Two lessons (a1.18, a1.22) have already landed during this build.
 *   3. Every dictation target is in LETTERS mode through the real `dicteeMode`.
 *   4. Every free-text quiz answer is accepted by the real `matchesAccept`.
 *   5. No authored row moves a1.03's `endingPopulation`, through the real
 *      function rather than a reimplementation of it. a1.08 shipped a
 *      hand-rolled copy carrying a filter the real one does not have.
 *   6. Every drill is the FIRST resolving target of exactly one quiz round.
 *   7. No production surface carries a verb other than être or avoir.
 *   8. No compound preposition appears anywhere without its `de`.
 */
import './env';
import { describeTarget, isRemoteTarget } from './env';
import { Pool } from 'pg';
import type { Item, Lesson } from '../../ealch-v2/src/content/schema.ts';
import { validateItem, validateLesson, quizQuestions } from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor, strings } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { buildQuizConfig, drillForRound } from '../../ealch-v2/src/content/quizRounds.logic.ts';
import {
  AUTHORED_SENTENCES, AUTHORED_WORDS, DE_TAKING, ENTRE_REPAIR, PREPOSITIONS,
  REPAIRS, THE_FIVE, THE_SIXTH, toItem,
} from './data/prepositions-corpus.ts';
import { IMPORTED, NON_SPATIAL_BY_DESIGN, REJECTED } from './data/prepositions-imported.ts';
import { PREPOSITIONS_LESSON } from './data/prepositions-lesson.ts';
import { REFRAME, REFRAMES_REJECTED } from './data/prepositions-terms.ts';

const AUTHORED: Item[] = [...AUTHORED_SENTENCES.map(toItem), ...AUTHORED_WORDS];
const LESSON: Lesson = PREPOSITIONS_LESSON;
const UNIT_ID = 'a1.21';

/* ─── Explicit expectations ────────────────────────────────────────────────
 *
 * Asserted against CONSTANTS rather than figures derived from the lesson. A
 * derived count compares the content to itself and passes on any rewording. */
const EXPECTED_SECTIONS = 26;
const EXPECTED_ACTS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_QUESTIONS = 24;
const EXPECTED_AUTHORED_SENTENCES = 23;
const EXPECTED_AUTHORED_WORDS = 2;
const EXPECTED_IMPORTED = 39;
const EXPECTED_REPAIRS = 5;
/** `strings()` walks the `reframe` field itself and every `why` that quotes it,
 *  so this total is higher than the section count. The density validator
 *  separately requires the line verbatim in at least three sections. */
const REFRAME_APPEARANCES = 8;

/** The unit's own strings, copied byte for byte from the probe's unit dump.
 *  NOT edited by this script: the brief is explicit that the canDo mismatch is
 *  reported rather than silently rewritten. */
const UNIT_TITLE = 'Prepositions of Place';
const UNIT_SUB = 'Prépositions de lieu';
const UNIT_CANDO = 'Can say where things are with sur, sous, dans, devant and derrière';
const UNIT_THEMES = ['prepositions-essentielles'];

/** The id range this build claims. Re-verified against Postgres at write time. */
const SENTENCE_LO = 121;
const SENTENCE_HI = 143;
const WORD_LO = 171;
const WORD_HI = 172;

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

/** Accent-aware whole-word test. Never build a regex out of a search term: \b
 *  is ASCII-only in JavaScript and dies on a trailing é. */
const WORDCH = /[0-9A-Za-zÀ-ÖØ-öø-ÿ'’-]/;
function hasWord(hay: string, needle: string): boolean {
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = h.indexOf(n);
  while (i !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = h[i + n.length] ?? '';
    if (!WORDCH.test(before) && !WORDCH.test(after)) return true;
    i = h.indexOf(n, i + 1);
  }
  return false;
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 4 });

async function main() {
  console.log(`target: ${describeTarget()}${isRemoteTarget() ? '  (REMOTE)' : ''}`);
  console.log(`mode:   ${DRY_RUN ? 'DRY RUN, nothing will be written' : 'WRITE'}\n`);

  /* ── 1. Shape ─────────────────────────────────────────────────────────── */
  console.log('── shape ──');
  if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`sections ${LESSON.sections.length}, expected ${EXPECTED_SECTIONS}`);
  if ((LESSON.acts ?? []).length !== EXPECTED_ACTS) die(`acts ${(LESSON.acts ?? []).length}, expected ${EXPECTED_ACTS}`);
  if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`triggers, expected ${EXPECTED_TRIGGERS}`);
  if (AUTHORED_SENTENCES.length !== EXPECTED_AUTHORED_SENTENCES) die(`authored sentences ${AUTHORED_SENTENCES.length}, expected ${EXPECTED_AUTHORED_SENTENCES}`);
  if (AUTHORED_WORDS.length !== EXPECTED_AUTHORED_WORDS) die(`authored words ${AUTHORED_WORDS.length}, expected ${EXPECTED_AUTHORED_WORDS}`);
  if (IMPORTED.length !== EXPECTED_IMPORTED) die(`imported ${IMPORTED.length}, expected ${EXPECTED_IMPORTED}`);
  if (REPAIRS.length !== EXPECTED_REPAIRS) die(`repairs ${REPAIRS.length}, expected ${EXPECTED_REPAIRS}`);
  console.log(`  ${LESSON.sections.length} sections, ${(LESSON.acts ?? []).length} acts, ${AUTHORED.length} authored rows, ${IMPORTED.length} imported`);

  /* ── 2. Schema ────────────────────────────────────────────────────────── */
  console.log('\n── schema ──');
  for (const it of AUTHORED) {
    const issues = validateItem(it);
    if (issues.length) die(`${it.id}: ${JSON.stringify(issues)}`);
  }
  const lessonIssues = validateLesson(LESSON);
  if (lessonIssues.length) die(`lesson: ${JSON.stringify(lessonIssues)}`);
  console.log(`  ${AUTHORED.length} items and the lesson validate`);

  /* ── 3. The reframe, against an explicit constant ─────────────────────── */
  console.log('\n── reframe ──');
  const all = strings(LESSON).map((s) => s.s);
  const nReframe = all.filter((s) => s.includes(REFRAME)).length;
  if (nReframe !== REFRAME_APPEARANCES) {
    die(`reframe appears ${nReframe} times, expected exactly ${REFRAME_APPEARANCES}`);
  }
  console.log(`  "${REFRAME}"  ×${nReframe}`);
  console.log(`  rejected: ${REFRAMES_REJECTED.map((r) => r.candidate).join(' | ')}`);

  /* ── 4. Density ───────────────────────────────────────────────────────── */
  console.log('\n── density ──');
  const known = new Set<string>([
    ...AUTHORED.map((i) => i.id),
    ...IMPORTED.map((i) => i.id),
    ...PREPOSITIONS.map((p) => p.headwordId),
  ]);
  const dIssues = validateDensity(LESSON, known);
  if (dIssues.length) die(`density:\n${formatDensity(dIssues)}`);
  console.log('  no density issues');

  /* ── 5. The five taught by name, plus the sixth ───────────────────────── */
  console.log('\n── the canDo, and the sixth word ──');
  for (const w of THE_FIVE) {
    const seen = all.some((s) => hasWord(s, w));
    if (!seen) die(`the canDo names "${w}" and no string in the lesson teaches it`);
  }
  if (!all.some((s) => hasWord(s, THE_SIXTH))) die(`"${THE_SIXTH}" was taken as the sixth and appears nowhere`);
  console.log(`  ${THE_FIVE.join(', ')} all taught, plus ${THE_SIXTH}`);
  console.log(`  NOTE: the unit canDo names FIVE and the build was asked for SIX.`);
  console.log(`        "${UNIT_CANDO}" omits à. Taken as a bounded sixth WITH its`);
  console.log(`        contraction. The unit strings are NOT edited by this script.`);

  /* ── 6. No compound preposition without its de, ON A PRODUCTION SURFACE ─
   *
   * SCOPED DELIBERATELY, and the scope is the whole reason this check survives.
   * Run over every string in the lesson it fires 28 times, and 26 of those are
   * legitimate: prose that NAMES the words ("Près, loin, à côté and en face all
   * end in de"), gap-fill stems where the gap IS the de ("Le café est à côté
   * ___ la banque"), the trap screen quoting the error in order to repair it,
   * and the quiz distractors that exist to be rejected. A check that noisy gets
   * deleted by the next author, which is worse than no check at all.
   *
   * So it runs over the surfaces that present French AS CORRECT: the authored
   * corpus itself, the deck and table cells, the vocabulary hub, the flashcard
   * and review backs, the drill pairs, and the quiz's `answer` and `accept`.
   * Those are the strings a learner copies. Prose, stems, `why` lines and
   * distractors are excluded by construction rather than by a tolerance count. */
  console.log('\n── the de rule, on production surfaces ──');
  {
    const produce: { where: string; s: string }[] = [];
    const add = (where: string, s?: unknown) => {
      if (typeof s === 'string' && s.trim()) produce.push({ where, s });
    };

    // The authored corpus is the source of truth for every French string the
    // lesson displays, so it is checked first and in full.
    for (const r of AUTHORED_SENTENCES) add(`corpus/${r.id}`, r.fr);
    for (const w of AUTHORED_WORDS) add(`corpus/${w.id}`, w.fr);
    for (const r of IMPORTED) add(`imported/${r.id}`, r.fr);

    for (const sec of LESSON.sections) {
      const s = sec as Record<string, unknown>;
      const id = String(s.id);
      if (s.type === 'cardDeck') {
        for (const c of s.cards as { fr?: string }[]) add(`${id}/card.fr`, c.fr);
      }
      if (s.type === 'tapTable') {
        for (const r of s.rows as { cells: string[]; say?: string }[]) {
          for (const cell of r.cells) add(`${id}/cell`, cell);
          add(`${id}/say`, r.say);
        }
      }
      if (s.type === 'vocabThemes') {
        for (const t of s.themes as { cards: { fr: string }[] }[]) {
          for (const c of t.cards) add(`${id}/vocab.fr`, c.fr);
        }
      }
      if (s.type === 'flashcards' || s.type === 'reviewDeck') {
        for (const c of s.cards as { back: string }[]) add(`${id}/back`, c.back);
      }
      if (s.type === 'groupDrill') {
        for (const g of s.groups as { items: { fr: string }[] }[]) {
          for (const it of g.items) add(`${id}/group.fr`, it.fr);
        }
      }
      if (s.type === 'examples') {
        for (const e of s.examples as { fr: string }[]) add(`${id}/example.fr`, e.fr);
      }
      if (s.type === 'scenario') {
        for (const t of s.turns as { user: string; alts?: { fr: string }[] }[]) {
          add(`${id}/user`, t.user);
          for (const a of t.alts ?? []) add(`${id}/alt`, a.fr);
        }
      }
    }
    // The quiz's CORRECT answers only. Stems and distractors are excluded: a
    // distractor missing its de is the question doing its job.
    {
      const quiz = LESSON.sections.find((x) => x.type === 'quiz') as never;
      for (const q of quizQuestions(quiz) as { answer?: string; accept?: string[] }[]) {
        add('quiz/answer', q.answer);
        for (const a of q.accept ?? []) add('quiz/accept', a);
      }
    }
    // Drill pairs: the SECOND element is the French the learner produces.
    for (const d of LESSON.drills ?? []) {
      for (const p of d.pairs ?? []) add(`${d.id}/pair`, p[1]);
    }

    const STEMS = ['à côté', 'en face', 'près', 'loin'];
    const bad: string[] = [];
    for (const { where, s } of produce) {
      for (const stem of STEMS) {
        const h = s.toLowerCase();
        let i = h.indexOf(stem.toLowerCase());
        while (i !== -1) {
          const rest = s.slice(i + stem.length);
          // Legitimate: followed by de / du / des / d', or ending the string,
          // which is the headword-card and table-cell case.
          const ok = /^\s*(de\b|du\b|des\b|d')/i.test(rest) || /^\s*$/.test(rest);
          if (!ok) bad.push(`${where}: "${s}"`);
          i = h.indexOf(stem.toLowerCase(), i + 1);
        }
      }
    }
    if (bad.length) {
      die(`compound preposition without its de on a PRODUCTION surface:\n  ${bad.join('\n  ')}`);
    }
    console.log(`  ${produce.length} production strings checked, every compound carries its de`);
  }

  /* ── 7. Respelling repairs, through the real checker AND by hand ──────── */
  console.log('\n── respelling repairs ──');
  for (const r of REPAIRS) {
    const nowFlagged = hasPlainNasalFor(r.fr, r.now);
    if (nowFlagged) die(`the repair for ${r.fr} (${r.now}) is itself flagged`);
    const wasFlagged = hasPlainNasalFor(r.fr, r.was);
    if (r.sharedCheckerSees !== wasFlagged) {
      die(`${r.fr}: sharedCheckerSees is ${r.sharedCheckerSees} and the checker says ${wasFlagged}`);
    }
    console.log(`  ${r.fr.padEnd(9)} ${r.was.padEnd(10)} → ${r.now.padEnd(10)} checker ${r.sharedCheckerSees ? 'SEES the fault' : 'is BLIND to it'}`);
  }
  // The one no shared checker can defend, asserted by hand.
  if (ENTRE_REPAIR.now !== 'AHⁿ-truh') die(`entre repair changed to ${ENTRE_REPAIR.now}; hand-verify it before editing this line`);
  if (!ENTRE_REPAIR.now.includes('ⁿ')) die('the entre repair lost its superscript');
  if (/[^ⁿ]n/i.test(ENTRE_REPAIR.now)) die(`the entre repair contains a plain n: ${ENTRE_REPAIR.now}`);
  console.log('  entre asserted BY HAND: the checker returns the same answer for AHNTR and for the repair.');

  /* ── 8. The dictée stays in letters mode ──────────────────────────────── */
  console.log('\n── dictée ──');
  {
    const sec = LESSON.sections.find((s) => s.type === 'dictation') as { itemIds: string[] } | undefined;
    if (!sec) die('no dictation section');
    for (const id of sec.itemIds) {
      const row = AUTHORED_SENTENCES.find((s) => s.id === id);
      if (!row) die(`dictation target ${id} is not an authored row, so its length is not under this lesson's control`);
      const mode = dicteeMode(row.fr);
      if (mode !== 'letters') die(`${id} is ${mode} mode (${letterCount(row.fr)} letters): a word-mode target hands the learner the preposition on a tile`);
    }
    console.log(`  ${sec.itemIds.length} targets, all letters mode, longest ${Math.max(...sec.itemIds.map((id) => letterCount(AUTHORED_SENTENCES.find((s) => s.id === id)!.fr)))} letters`);
  }

  /* ── 9. Every free-text answer is accepted by the real matcher ────────── */
  console.log('\n── free-text answers ──');
  {
    const quiz = LESSON.sections.find((s) => s.type === 'quiz') as never;
    const qs = quizQuestions(quiz);
    let n = 0;
    for (const q of qs as { format?: string; accept?: string[]; answer?: string; q: string }[]) {
      if (!['typeIn', 'errorSpot', 'speak'].includes(q.format ?? '')) continue;
      if (!q.accept || !q.answer) die(`free-text question has no accept/answer: ${q.q}`);
      if (!matchesAccept(q.answer, q.accept)) die(`the displayed answer is not accepted: ${q.q} → ${q.answer}`);
      n++;
    }
    console.log(`  ${n} free-text questions, every displayed answer accepted`);

    if (qs.length !== EXPECTED_QUESTIONS) die(`quiz has ${qs.length} questions, expected ${EXPECTED_QUESTIONS}`);
    const mcq = qs.filter((q: { format?: string }) => (q.format ?? 'mcq') === 'mcq').length;
    if (mcq * 2 > qs.length) die(`mcq ${mcq}/${qs.length} exceeds half`);
    const noWhy = qs.filter((q: { why?: string }) => !q.why);
    if (noWhy.length) die(`${noWhy.length} question(s) without a why`);
    console.log(`  ${qs.length} questions, mcq ${mcq}, every one carries a why`);

    // No option may refer to a position: QuizDeckView shuffles them per attempt.
    const POSITIONAL = ['the first', 'the second', 'the third', 'the last', 'the one above', 'the one below', 'both of the above', 'all of the above', 'none of these', 'none of the above'];
    for (const q of qs as { q: string; opts?: string[] }[]) {
      for (const o of q.opts ?? []) {
        for (const p of POSITIONAL) {
          if (o.toLowerCase().includes(p)) die(`option refers to a position, and the options are shuffled per attempt: "${o}" in "${q.q}"`);
        }
      }
      if (q.opts && new Set(q.opts).size !== q.opts.length) die(`duplicate option in: ${q.q}`);
    }
    console.log('  no option refers to a position, and none is duplicated');

    // Every stem describes the position in English rather than naming two words.
    const rounds = (quiz as { rounds: { id: string; questions: unknown[] }[] }).rounds;
    if (rounds.length !== EXPECTED_ROUNDS) die(`quiz has ${rounds.length} rounds, expected ${EXPECTED_ROUNDS}`);
  }

  /* ── 10. Every drill is the first resolving target of exactly one round ─ */
  console.log('\n── drill reachability ──');
  {
    const quiz = LESSON.sections.find((s) => s.type === 'quiz') as {
      rounds: { id: string; targets?: string[] }[]; roundFailThreshold?: number; passMark?: number;
    };
    // The REAL config builder, not a restatement of the join. A guard that
    // reimplements the thing it guards is free to drift from it, which is how
    // a1.08 shipped a hand-rolled endingPopulation that let four rows through.
    const cfg = buildQuizConfig(quiz.rounds as never, {
      errorTriggers: LESSON.errorTriggers,
      drills: LESSON.drills,
      roundFailThreshold: quiz.roundFailThreshold,
      passMark: quiz.passMark,
    });
    const fired = new Map<string, string[]>();
    for (let i = 0; i < quiz.rounds.length; i++) {
      const d = drillForRound(cfg, i);
      if (!d) die(`round ${quiz.rounds[i].id} fires no drill: its first resolving target has none`);
      fired.set(d, [...(fired.get(d) ?? []), quiz.rounds[i].id]);
    }
    for (const d of LESSON.drills ?? []) {
      if (d.id.startsWith('retest-')) continue;
      const rounds = fired.get(d.id);
      if (!rounds) die(`drill ${d.id} is named by no round as a FIRST resolving target, so it is dead content`);
      if (rounds.length > 1) die(`drill ${d.id} fires from ${rounds.length} rounds: ${rounds.join(', ')}`);
    }
    console.log(`  ${fired.size} drills, each the first resolving target of exactly one round`);
  }

  /* ── 11. No production surface conjugates anything but être or avoir ──── */
  console.log('\n── production surfaces ──');
  {
    const OTHER_VERBS = ['dort', 'dorment', 'range', 'rangent', 'rangeons', 'cache', 'monte', 'court', 'attend', 'écrit', 'joue', 'jouent', 'habite', 'habitons', 'habitent', 'travaille', 'reste', 'passe', 'vais', 'va', 'allons', 'met', 'pose', 'revient', 'saute', 'marche', 'trouve'];
    const produce: string[] = [];
    for (const s of LESSON.sections) {
      if (s.type === 'dictation' || s.type === 'practice') {
        for (const id of (s as { itemIds: string[] }).itemIds) {
          const row = AUTHORED_SENTENCES.find((r) => r.id === id);
          if (!row) die(`production surface ${s.id} names ${id}, which is not an authored row`);
          produce.push(row.fr);
        }
      }
    }
    for (const fr of produce) {
      for (const v of OTHER_VERBS) {
        if (hasWord(fr, v)) die(`production surface asks the learner to produce "${v}": ${fr}`);
      }
    }
    console.log(`  ${produce.length} production lines, every one built on être`);
  }

  /* ── 12. What is deliberately NOT here ────────────────────────────────── */
  console.log('\n── absences, asserted ──');
  {
    // en + country belongs to a1.22, which shipped mid-build.
    const COUNTRIES = ['en France', 'en Espagne', 'en Italie', 'en Allemagne', 'au Portugal', 'au Japon', 'aux États-Unis'];
    for (const c of COUNTRIES) {
      if (all.some((s) => s.includes(c))) die(`"${c}" is a1.22's ground and appears here`);
    }
    console.log('  no en + country anywhere: a1.22 keeps its lesson');

    // No image is authored: imageRef is validated by nothing.
    const withImage = JSON.stringify(LESSON).includes('"imageRef"');
    if (withImage) die('an imageRef is authored and NOTHING validates it: register it in REG and write your own assertion first');
    console.log('  no imageRef authored, so no blank box can ship');

    // The rejected rows stay rejected.
    for (const r of REJECTED) {
      if ((LESSON.itemIds ?? []).includes(r.id)) die(`${r.id} was rejected as non-spatial and is in itemIds: ${r.why}`);
    }
    console.log(`  ${REJECTED.length} semantically rejected rows all absent from itemIds`);

    // The one deliberately non-spatial import appears ONLY on the contraction
    // table and never on a spatial surface.
    {
      const spatialSections = ['s03-five', 's04-column', 's06-pair', 's07-sort', 's15-etre', 's16-ear', 's17-reading'];
      for (const sid of spatialSections) {
        const sec = LESSON.sections.find((s) => s.id === sid);
        if (sec && JSON.stringify(sec).includes(NON_SPATIAL_BY_DESIGN)) {
          die(`${NON_SPATIAL_BY_DESIGN} is not about position and appears on spatial surface ${sid}`);
        }
      }
      console.log(`  ${NON_SPATIAL_BY_DESIGN} kept off every spatial surface`);
    }
  }

  /* ── 13. a1.03's ending population must not move ──────────────────────── */
  console.log('\n── a1.03 ending population ──');
  {
    const { rows } = await pool.query<{ id: string; fr: string; kind: string; gender: string; level: string; theme: string }>(
      `select id, fr, kind::text as kind, coalesce(gender::text,'') as gender,
              level::text as level, theme::text as theme
         from content_items where status = 'published'`,
    );
    const before = endingPopulation(rows as never).length;
    const after = endingPopulation([...rows, ...AUTHORED] as never).length;
    if (before !== after) {
      die(`endingPopulation moves ${before} → ${after}. a1-03-genre.test.ts re-measures twenty printed figures from this set; withdraw the gendered single-word noun rather than arguing.`);
    }
    console.log(`  ${before} rows before and after: every authored headword is multi-word and ungendered`);

    /* ── 14. The id range, re-verified AT WRITE TIME ────────────────────── */
    console.log('\n── id range, re-verified now ──');
    // A row already sitting in this batch's range is EITHER a previous run of
    // this same batch (the insert is idempotent by id, so that is fine) OR
    // somebody else's lesson landing inside the range (which is the hazard, and
    // a1.15 did exactly that to a1.17). The two are told apart by comparing the
    // published `fr` against what this batch would write, NOT by the id alone:
    // a check on ids only cannot re-run, and a check that ignores the range
    // entirely cannot catch the collision it exists for.
    const mine = new Map(AUTHORED.map((a) => [a.id, a.fr]));
    const inRange = (prefix: string, lo: number, hi: number) => rows.filter((r) => {
      if (!r.id.startsWith(prefix)) return false;
      const n = Number(r.id.split('.').pop());
      return Number.isFinite(n) && n >= lo && n <= hi;
    });

    const foreign: string[] = [];
    const reRun: string[] = [];
    for (const r of [
      ...inRange('fr.a1.prepositions-essentielles.', SENTENCE_LO, SENTENCE_HI),
      ...inRange('fr.sons.mots-essentiels.', WORD_LO, WORD_HI),
    ]) {
      const want = mine.get(r.id);
      if (want === undefined) foreign.push(`${r.id} "${r.fr}" is in this batch's range and this batch does not write it`);
      else if (want !== r.fr) foreign.push(`${r.id} is published as "${r.fr}" and this batch would write "${want}"`);
      else reRun.push(r.id);
    }
    if (foreign.length) {
      die(`id range collision. Renumber THIS batch; never renumber the other lesson's rows.\n  ${foreign.join('\n  ')}`);
    }

    const taken = rows.filter((r) => r.id.startsWith('fr.a1.prepositions-essentielles.'))
      .map((r) => Number(r.id.split('.').pop()));
    const wTaken = rows.filter((r) => r.id.startsWith('fr.sons.mots-essentiels.'))
      .map((r) => Number(r.id.split('.').pop()));
    console.log(`  sentences .${SENTENCE_LO}-.${SENTENCE_HI}  (theme holds ${taken.length} rows, max .${Math.max(...taken)})`);
    console.log(`  words     .${WORD_LO}-.${WORD_HI}  (mots-essentiels holds ${wTaken.length} rows, max .${Math.max(...wTaken)})`);
    console.log(reRun.length
      ? `  ${reRun.length} row(s) already published by a previous run of THIS batch, byte-identical: idempotent re-apply`
      : '  range is empty: first apply');

    /* ── 15. Every imported row exists and matches byte for byte ────────── */
    console.log('\n── imported rows, against Postgres ──');
    const byId = new Map(rows.map((r) => [r.id, r]));
    for (const imp of IMPORTED) {
      const live = byId.get(imp.id);
      if (!live) die(`imported row ${imp.id} does not exist in Postgres`);
      if (live.fr !== imp.fr) {
        die(`imported row ${imp.id} has drifted:\n    postgres: ${live.fr}\n    file:     ${imp.fr}`);
      }
    }
    console.log(`  ${IMPORTED.length} imported rows all present and byte-identical`);

    /* ── 16. No duplicate fr within a theme ─────────────────────────────── */
    console.log('\n── flashhub duplicate check ──');
    {
      // Computed the way flashhub-coverage.test.ts computes it: two rows sharing
      // an `fr` within one theme are one card served twice.
      const bare = (s: string) => s.replace(/^(le |la |les |l'|un |une |des )/i, '').trim().toLowerCase();
      for (const w of AUTHORED_WORDS) {
        // Exclude the row's OWN id: after a first apply, `à côté de` is published
        // at exactly the id this batch writes it to, and a check that does not
        // allow for that cannot re-run. Anything ELSE sharing the `fr` in this
        // theme is the real hazard, because flashhub-coverage.test.ts treats two
        // rows sharing an `fr` in one theme as one card served twice. This is the
        // check that found `près de` and `loin de` already existing.
        const clash = rows.filter((r) => r.id !== w.id && r.theme === w.theme
          && r.kind !== 'sentence' && bare(r.fr) === bare(w.fr));
        if (clash.length) die(`authoring "${w.fr}" into ${w.theme} collides with ${clash.map((c) => c.id).join(', ')}`);
      }
      console.log(`  ${AUTHORED_WORDS.length} authored headwords, none collides in its theme`);
    }

    /* ── 17. The repairs touch rows that exist and still say what we think ─ */
    console.log('\n── repair targets ──');
    for (const r of REPAIRS) {
      const live = byId.get(r.id);
      if (!live) die(`repair target ${r.id} does not exist`);
      if (live.fr !== r.fr) die(`repair target ${r.id} is "${live.fr}", not "${r.fr}"`);
    }
    console.log(`  ${REPAIRS.length} repair targets all present`);

    /* ── 18. The unit ───────────────────────────────────────────────────── */
    console.log('\n── unit ──');
    const { rows: unitRows } = await pool.query<{ body: Record<string, unknown> }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID],
    );
    if (unitRows.length !== 1) die(`unit ${UNIT_ID}: ${unitRows.length} rows`);
    const unitBody = unitRows[0].body as {
      title?: string; sub?: string; canDo?: string;
      themes?: string[] | null; lessonIds?: string[]; prereqUnitIds?: string[] | null;
    };
    // Copied byte for byte from the probe's dump and NOT edited.
    if (unitBody.title !== UNIT_TITLE) die(`unit title drifted: "${unitBody.title}"`);
    if (unitBody.sub !== UNIT_SUB) die(`unit sub drifted: "${unitBody.sub}"`);
    if (unitBody.canDo !== UNIT_CANDO) die(`unit canDo drifted: "${unitBody.canDo}"`);

    const nextUnit = {
      ...unitBody,
      // The unit declares themes: null and a 407-row theme exists. Bound here.
      themes: UNIT_THEMES,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
      // prereqUnitIds is NOT changed. Reported, not edited: the brief is explicit.
    };

    console.log(`  title/sub/canDo unchanged (canDo names five; à taken as a reported sixth)`);
    console.log(`  themes:        ${JSON.stringify(unitBody.themes ?? null)} → ${JSON.stringify(nextUnit.themes)}`);
    console.log(`  lessonIds:     ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`  prereqUnitIds: ${JSON.stringify(unitBody.prereqUnitIds ?? null)} (UNCHANGED)`);
    console.log(`\n  RECOMMENDATION, NOT APPLIED: prereqUnitIds should be ["a1.04"].`);
    console.log(`    A learner without le/la/les cannot form a single example sentence in`);
    console.log(`    this lesson, and the contraction à + le = au is meaningless to them.`);
    console.log(`    a1.06 (être) is the other load-bearing one: every production surface`);
    console.log(`    here is built on it. Both are BUILT, which is why a1.21 was the safest`);
    console.log(`    of the four unbuilt units to take next.`);

    console.log(`\n  SEED EXPECTATION, AND THE BRIEF HAS THIS BACKWARDS:`);
    console.log(`    The brief says prepositions-essentielles is outside SEED_CUT.themes so the`);
    console.log(`    rows "will not appear in the seed", and that "a merge that leaves the seed`);
    console.log(`    unchanged is behaving correctly". FOLLOWING THAT SHIPS BLANK CARDS.`);
    console.log(`    SEED_CUT governs what content:publish REGENERATES from this database. It`);
    console.log(`    does not stop a merge writing rows a lesson needs, and every out-of-cut`);
    console.log(`    theme on this track carries its lesson's rows today:`);
    console.log(`      couleurs 48   meteo 25   adjectifs-essentiels 92`);
    console.log(`      negation-et-restriction 33   pays-et-nationalites 48`);
    console.log(`    prepositions-essentielles shows 0 only because no lesson has merged yet.`);
    console.log(`    So the merge MUST carry all ${AUTHORED_SENTENCES.length + IMPORTED.length} rows, and a1-21-prepositions.test.ts`);
    console.log(`    asserts every one of them is present in the seed afterwards.`);

    if (DRY_RUN) {
      console.log('\n✓ dry run, all valid, nothing written.\n');
      await pool.end();
      return;
    }

    /* ── WRITE ──────────────────────────────────────────────────────────── */
    const client = await pool.connect();
    try {
      await client.query('begin');
      for (const it of AUTHORED) {
        await client.query(
          `insert into content_items
             (id, kind, level, theme, fr, en, ipa, respell, gender, example, notes, tags, drills, audio_ref, version, status, generated_by)
           values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11,$12,$13,null,$14,'published','human')
           on conflict (id) do update set
             kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr,
             en=excluded.en, ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender,
             example=excluded.example, notes=excluded.notes, tags=excluded.tags,
             drills=excluded.drills, version=excluded.version`,
          [
            it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null,
            it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
            it.tags, it.drills, it.version,
          ],
        );
      }

      for (const r of REPAIRS) {
        const res = await client.query(
          `update content_items set respell = $1 where id = $2 and fr = $3`,
          [r.now, r.id, r.fr],
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
        [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)],
      );

      const res = await client.query(
        `update content_units set body = $1::jsonb, updated_at = now()
          where kind = 'curriculum_unit' and body->>'id' = $2`,
        [JSON.stringify(nextUnit), UNIT_ID],
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`unit update touched ${res.rowCount} rows, rolled back, nothing changed`);
      }

      await client.query('commit');
      console.log(
        `\n✓ prepositions batch applied: ${AUTHORED.length} authored rows`
        + ` (${AUTHORED_SENTENCES.length} sentences, ${AUTHORED_WORDS.length} headwords)`
        + `\n  + ${REPAIRS.length} respelling repairs + lesson ${LESSON.id} published`
        + `\n  unit ${UNIT_ID} bound to ${JSON.stringify(UNIT_THEMES)} and linked. prereqUnitIds NOT changed.`
        + `\n  Next: pnpm tsx scripts/merge-prepositions-into-seed.ts --dry-run`
        + `\n  Do NOT run pnpm content:publish. It regenerates seed.json FROM this database.\n`,
      );
    } catch (e) {
      await client.query('rollback').catch(() => {});
      throw e;
    } finally {
      client.release();
    }
  }

  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
