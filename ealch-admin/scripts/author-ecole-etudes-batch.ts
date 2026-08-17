// a2.31.l1 « L'école & les études » — apply to Postgres.
//
//   pnpm content:ecole-etudes --dry     guards only, writes nothing
//   pnpm content:ecole-etudes           applies
//
// POSTGRES FIRST, SEED SECOND. Run merge-ecole-etudes-into-seed.ts after this,
// or the lesson exists in the database and nowhere the app can read it.
//
// DO NOT run author-full-curriculum-spine.ts. A naive re-run would revert 74 of
// 75 unit titles, which is what spine-drift.test.ts exists to catch — and
// a2.31's `themes: ['ecole']` is ALREADY CORRECT in that file.
// DO NOT run content:publish from here. Doctrine §C: publishing is not part of
// a lesson build, and content:parity must be read first.
// DO NOT run `pnpm content:verbes`. The verbes batch is a landmine.
import './env';
import {
  ALL_ROWS, UNIT, THEME, LESSON_ID, E, ID_FIRST, ID_LAST,
  IMPORT_IDS, REPAIR_IDS, REPAIR_FR, LADDER_IDS, DICTEE_IDS,
  IMPARFAIT_IDS, OTHER_VOICE_FLOOR, BANNED_SUBSTRINGS, FORBIDDEN_CLAIMS,
  FORBIDDEN_TENSE_WORD, JARGON, NEAR_MISSES, A2_30_RESERVED,
  DEAD_AUDIO_FIELDS, DEAD_LESSON_FIELDS,
} from './data/ecole-etudes-corpus.ts';
import { LESSON, ITEM_IDS } from './data/ecole-etudes-lesson.ts';
import { validateLesson } from '../../ealch-v2/src/content/schema.ts';
import { validateDensity, formatDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { fold } from '../../ealch-v2/src/content/answer.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';

const DRY_RUN = process.argv.includes('--dry');
const REAPPLY = process.argv.includes('--reapply');
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

/** `drills` is a Postgres enum array and node-postgres can hand it back as the
 *  RAW LITERAL `{flashcard,review}`. A `.includes()` on that string is a
 *  substring test that lies. */
const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};

/** Corrections §14.3: THE HOUSE WORD BOUNDARY EXCLUDES AN APOSTROPHE, so a
 *  guard built on it cannot see `l'université`, `l'école` or `c'est
 *  l'équivalent de`. Drop the apostrophe from the LEFT boundary and keep it on
 *  the right. This unit is more exposed to that hole than any other in the
 *  band, because half its vocabulary elides. */
const hasWord = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![\\p{L}\\p{N}'’-])`, 'iu').test(hay);

async function main() {
  /* ── OFFLINE GUARDS. These need no database and they are the cheap ones. ── */

  const schemaIssues = validateLesson(LESSON, LESSON_ID);
  if (schemaIssues.length) die(`validateLesson:\n${schemaIssues.map((i) => `    ${i.path}: ${i.message}`).join('\n')}`);

  const density = validateDensity(LESSON, new Set(ITEM_IDS));
  if (density.length) die(`validateDensity:\n${formatDensity(density)}`);

  const ids = ALL_ROWS.map((r) => r.id);
  if (new Set(ids).size !== ids.length) die('a duplicate id in the authored rows');
  const nums = ids.map((i) => Number(i.split('.').pop()));
  if (Math.min(...nums) < ID_FIRST || Math.max(...nums) > ID_LAST) {
    die(`an authored id sits outside the requested block ${E(ID_FIRST)}..${E(ID_LAST)}`);
  }

  // The 14-word sentence budget (doctrine §C).
  for (const r of ALL_ROWS) {
    if (r.kind === 'sentence' && r.fr.split(/\s+/).length > 14) die(`${r.id} runs past the 14-word sentence budget`);
  }

  // The band's other-voice mandate (collation §1.5), MEASURED not asserted.
  const other = ALL_ROWS.filter((r) => r.voice === 'other').length;
  const ratio = other / ALL_ROWS.length;
  if (ratio < OTHER_VOICE_FLOOR) die(`only ${(ratio * 100).toFixed(1)}% of authored rows are in the registrar's voice`);

  // a2.07 owns the repair move. ZERO authored here, checked string by string.
  const authoredFr = new Set(ALL_ROWS.map((r) => r.fr));
  for (const fr of REPAIR_FR) if (authoredFr.has(fr)) die(`this build authored one of a2.07's frozen repair rows: "${fr}"`);

  /* ── THE IMPARFAIT. THE GUARD THAT MATTERS, AND IT IS SCOPED TO a2.31. ────
   *  Collation 1.8 settles the tense OUT OF BAND. 306 published a2 rows use it
   *  incidentally, so a seed-wide assertion would go red on content that is
   *  none of this unit's business. Everything below reads THIS LESSON ONLY. */

  const IMPARFAIT = /(?<![\p{L}\p{N}])(ét[ai]i[st]|étaient|étions|étiez|av[ai]i[st]|avaient|avions|aviez|fais[ai]i[st]|faisaient|voul[ai]i[st]|pouv[ai]i[st]|all[ai]i[st]|sav[ai]i[st]|aim[ai]i[st]|oubli[ai]i[st]|détest[ai]i[st]|habit[ai]i[st]|jou[ai]i[st]|travaill[ai]i[st])(?![\p{L}\p{N}])/iu;

  // 1. Not one authored row carries an imparfait form.
  for (const r of ALL_ROWS) {
    if (IMPARFAIT.test(r.fr)) die(`${r.id} carries an imparfait form: "${r.fr}"`);
  }

  // 2. The two ecole imparfait rows are named by NO scored section, and by no
  //    deckTranche, no drill and no practice/dictation list.
  const SCORED = new Set(['quiz', 'dictation', 'practice', 'groupDrill', 'trapDrill', 'scenario']);
  for (const sec of LESSON.sections) {
    if (!SCORED.has(sec.type)) continue;
    const text = strs(sec).join('\n');
    for (const id of IMPARFAIT_IDS) {
      if (text.includes(id)) die(`${sec.id} is a scored section and names ${id}, which is an imparfait row`);
    }
  }
  for (const id of IMPARFAIT_IDS) {
    if (ITEM_IDS.includes(id)) die(`${id} is in the lesson's itemIds. It must not be reachable from this lesson at all.`);
    if (LESSON.deckTranche?.some((t) => t.includes(id))) die(`${id} is released by a deckTranche`);
    if (LESSON.drills?.some((d) => (d as { items?: string[] }).items?.includes(id))) die(`${id} is named by a LessonDrill`);
  }

  // 3. No imparfait form in any quiz question, option, accept[] entry or why,
  //    nor in any scenario `user` line, nor in any trapDrill drill step.
  const quiz = LESSON.sections.find((s) => s.type === 'quiz') as { rounds?: { questions: unknown[] }[] } | undefined;
  for (const q of (quiz?.rounds ?? []).flatMap((r) => r.questions)) {
    for (const s of strs(q)) if (IMPARFAIT.test(s)) die(`a quiz string carries an imparfait form: "${s}"`);
  }
  for (const sec of LESSON.sections) {
    if (sec.type === 'scenario') {
      for (const t of (sec as { turns: { user: string }[] }).turns) {
        if (IMPARFAIT.test(t.user)) die(`a scenario user line carries an imparfait form: "${t.user}"`);
      }
    }
    if (sec.type === 'trapDrill') {
      for (const s of strs((sec as { drill?: unknown }).drill)) {
        if (IMPARFAIT.test(s)) die(`a trapDrill drill step carries an imparfait form: "${s}"`);
      }
    }
  }

  // 4. EXACTLY TWICE, RECEPTIVELY, AS ONE UNANALYSED CHUNK: once in the
  //    listening model text and once in the reading passage, both as
  //    `quand j'étais petit(e)`, glossed in reading.glossary. No form is given,
  //    no paradigm is shown.
  //
  //    COUNTED ON THE PASSAGE ITSELF, not on the serialised section. The
  //    reading's glossary KEY is the same chunk being glossed, which is what
  //    the contract asks for, and counting it as a third exposure would forbid
  //    the gloss the contract requires.
  const listening = LESSON.sections.find((s) => s.type === 'listening') as { lines: { fr: string }[] } | undefined;
  const reading = LESSON.sections.find((s) => s.type === 'reading') as
    { text: string; glossary?: { word: string; en: string; note?: string }[] } | undefined;
  if (!listening || !reading) die('the two receptive sections are not both present');

  const countIn = (s: string) => (s.match(new RegExp(IMPARFAIT.source, 'giu')) ?? []).length;
  const inListening = listening.lines.reduce((n, l) => n + countIn(l.fr), 0);
  const inReading = countIn(reading.text);
  if (inListening !== 1) die(`the listening carries ${inListening} imparfait forms; the contract is exactly one`);
  if (inReading !== 1) die(`the reading passage carries ${inReading} imparfait forms; the contract is exactly one`);

  const CHUNK = /quand j'étais petit/i;
  if (!listening.lines.some((l) => CHUNK.test(l.fr))) die('the listening exposure is not the authorised chunk');
  if (!CHUNK.test(reading.text)) die('the reading exposure is not the authorised chunk');
  const gloss = (reading.glossary ?? []).find((g) => /j'étais petite/i.test(g.word));
  if (!gloss) die('the reading does not gloss the chunk, which the contract requires');
  if (!/when i was small/i.test(gloss.en)) die(`the gloss reads "${gloss.en}" and the contract says "when I was small"`);

  // And NOWHERE ELSE, including the terms, the overview and the intro.
  const elsewhere = LESSON.sections.filter((s) => s.type !== 'listening' && s.type !== 'reading');
  const countImp = (v: unknown) => strs(v).filter((s) => IMPARFAIT.test(s)).length;
  const inElsewhere = countImp(elsewhere) + countImp(LESSON.terms) + countImp(LESSON.overview) + countImp(LESSON.intro);
  if (inElsewhere > 0) die(`${inElsewhere} imparfait form(s) outside the listening and the reading`);

  /* ── THE HOUSE RULES, OVER EVERY LEARNER-FACING STRING ──────────────────── */

  // Corrections §9: the walk must cover `intro` and `overview` as well as the
  // sections. a2.11 shipped "third person" in `intro` with every host gate
  // green. §13: run it over the sections including cardDeck card `sub`, which
  // prose() drops because `sub` is a NOTATION_KEY on most other cards.
  const LEARNER_TEXT = [
    ...strs(LESSON.sections), ...strs(LESSON.terms),
    LESSON.intro ?? '', ...strs(LESSON.overview ?? {}),
  ].join('\n');
  const ALL_TEXT = [LEARNER_TEXT, ...ALL_ROWS.map((r) => `${r.fr} ${r.en}`)].join('\n');

  // The word "imparfait" appears in NO user-facing string, and in NEITHER
  // grammarIntroduced nor grammarAssumed.
  if (LEARNER_TEXT.toLowerCase().includes(FORBIDDEN_TENSE_WORD)) die(`"${FORBIDDEN_TENSE_WORD}" appears in a learner-facing string`);
  for (const g of [...(LESSON.grammarIntroduced ?? []), ...(LESSON.grammarAssumed ?? [])]) {
    if (g.toLowerCase().includes(FORBIDDEN_TENSE_WORD)) die(`"${FORBIDDEN_TENSE_WORD}" is claimed in a grammar list`);
  }

  // Jargon, with the -s plural of every entry (Corrections §13: `hasPhrase` is
  // boundary-exact, so a list holding `paradigm` does not catch `paradigms`).
  for (const j of JARGON) {
    for (const form of [j, `${j}s`]) {
      if (hasWord(LEARNER_TEXT, form)) die(`jargon on a learner surface: "${form}"`);
    }
  }

  // a2.30's ground. Its build report reserves the interview, the parcours
  // professionnel and the job titles, and asserts it never authored ours.
  for (const w of A2_30_RESERVED) if (hasWord(ALL_TEXT, w)) die(`authors a2.30's ground: "${w}"`);

  // A PLAIN SUBSTRING TEST IN BOTH DIRECTIONS, deliberately NOT word-bounded:
  // the band's inherited `\bhonest` guard cannot see "dishonest" (a2.06).
  for (const b of BANNED_SUBSTRINGS) if (ALL_TEXT.toLowerCase().includes(b)) die(`authored copy contains "${b}"`);
  for (const c of FORBIDDEN_CLAIMS) {
    if (ALL_TEXT.toLowerCase().includes(c.toLowerCase())) die(`claims something the app cannot deliver: "${c}"`);
  }
  if (/—/.test(ALL_TEXT)) die('an em dash in authored copy');
  if (/‿/.test(ALL_TEXT)) die('U+203F, which renders as a low underscore on a Pixel 6');

  // The five fields that draw nothing, and the six audio fields nothing reads.
  for (const f of DEAD_LESSON_FIELDS) {
    if (f in (LESSON as unknown as Record<string, unknown>)) die(`the Lesson carries \`${f}\`, which draws nothing`);
  }
  const serialised = JSON.stringify(LESSON);
  for (const f of DEAD_AUDIO_FIELDS) {
    if (serialised.includes(`"${f}"`)) die(`\`${f}\` is authored somewhere; it validates, publishes and is read by no renderer`);
  }
  for (const sec of LESSON.sections) {
    if (sec.type !== 'groupDrill') continue;
    for (const g of (sec as { groups?: { items?: Record<string, unknown>[] }[] }).groups ?? []) {
      for (const it of g.items ?? []) if ('sub' in it) die(`${sec.id}: a groupDrill item carries \`sub\`, which draws nothing. Use \`note\`.`);
    }
  }
  for (const sec of LESSON.sections) {
    if (sec.type === 'cardDeck' && 'itemIds' in sec) die(`${sec.id}: \`itemIds\` on a cardDeck draws nothing. Release through deckTranche.`);
    if (sec.type === 'commonErrors' && !(sec as { swipe?: boolean }).swipe) die(`${sec.id}: commonErrors without \`swipe\` draws a blank screen`);
    if (sec.type === 'practice' && (sec as { skill?: string }).skill !== 'speak') {
      die(`${sec.id}: a practice skill other than 'speak' renders a speaking drill anyway and is silently wrong`);
    }
  }
  if (LESSON.sections.filter((s) => s.type === 'quiz').length !== 1) die('exactly one quiz section, or the second is silently never rendered');

  /* ── THE ANSWER FOLD, AND THE BAND RULE ADDED 2026-08-15 ────────────────── */

  // Every free-text question must ACCEPT THE ANSWER IT DISPLAYS, checked
  // through the real fold(). matchesAccept reads `accept` only, never `answer`.
  for (const round of (quiz?.rounds ?? []) as { questions: Record<string, unknown>[] }[]) {
    for (const q of round.questions) {
      if (!q.why) die(`a quiz question has no \`why\`: ${String(q.q)}`);
      if (q.format === 'errorSpot' && !q.prompt) die(`an errorSpot has no \`prompt\`: ${String(q.q)}`);
      if (q.format === 'typeIn' || q.format === 'errorSpot') {
        const accept = (q.accept ?? []) as string[];
        if (!accept.some((a) => fold(a) === fold(String(q.answer)))) {
          die(`a ${String(q.format)} does not accept the answer it displays: "${String(q.answer)}"`);
        }
        if (String(q.answer).split(/\s+/).length > 9) die(`a ${String(q.format)} answer runs past one clause: "${String(q.answer)}"`);
      }
    }
  }

  // BAND RULE: fold the expected answer and the most plausible wrong answer. If
  // they collide the item tests nothing and must move to mcq or listenChoose.
  for (const [a, b] of NEAR_MISSES) {
    if (fold(a) === fold(b)) die(`a near-miss pair folds to one string and tests nothing: "${a}" / "${b}"`);
  }

  /* ── THE DICTÉE, THROUGH THE REAL dicteeMode ────────────────────────────── */

  for (const id of DICTEE_IDS) {
    const row = ALL_ROWS.find((r) => r.id === id);
    if (!row) die(`${id} is a dictée id and was not authored`);
    if (!toArray(row.drills).includes('dictation')) die(`${id} is a dictée id and does not carry the dictation drill`);
    const mode = dicteeMode(row.fr);
    if (mode !== 'letters') die(`${id} "${row.fr}" resolves to ${mode} mode; a lesson about spelling needs LETTER mode`);
  }

  /* ── THE RESPELLINGS, THROUGH THE REAL hasPlainNasalFor ─────────────────── */

  /* A FIFTH DEFECT IN THE NASAL CHECKER, AND IT IS IN THE JOIN BETWEEN ITS TWO
   * HALVES RATHER THAN IN EITHER HALF.
   *
   * `hasPlainNasalFor` opens with `if (hasPlainNasal(respell)) return true`
   * (density.logic.ts:210), and only AFTER that does it consult the French
   * spelling to clear a consonant that is genuinely pronounced — the line at
   * :226 whose whole purpose is aime, dame, jaune, scène.
   *
   * SO WHENEVER THE RESPELLING USES ONE OF THE SEVEN DIGRAPHS (AH OH EH UH EU
   * AI OU) BEFORE A TOKEN-FINAL N OR M, THE EARLY RETURN FIRES AND THE FRENCH
   * REPAIR IS UNREACHABLE. `diplôme` is exactly that: ô is a real /o/, m is a
   * real /m/, the French carries `ôme` and :226 would clear it — but `PLOHM`
   * matches the digraph rule at :210 and the function never gets there.
   *
   * The house form is `dee-PLOHM` and THREE PUBLISHED ROWS ALREADY CARRY IT,
   * including fr.a1.ecole.187 in this unit's own theme and fr.a2.ecole.009,
   * which this lesson imports. Invariants §9 says not to add a fourth variant
   * of a word that already has competing respellings, so this build keeps the
   * shipped form and files the flag as the false positive it is.
   *
   * Asserted BOTH ways, per Corrections §14.1: each row must STILL be flagged
   * (so the day the checker is fixed this list goes stale and we find out), and
   * the French must carry the vowel + m/n + e that proves the consonant real. */
  const FALSE_POSITIVES = [E(47), E(52), E(68), E(73)];
  const REAL_CONSONANT = /[aeiouyàâäéèêëîïôöûüù][nm]e/i;
  for (const id of FALSE_POSITIVES) {
    const row = ALL_ROWS.find((r) => r.id === id);
    if (!row?.respell) die(`${id} is on the false-positive list and carries no respelling`);
    if (!hasPlainNasalFor(row.fr, row.respell)) {
      die(`${id} is on the false-positive list and the checker NO LONGER flags it. The checker improved; drop this entry.`);
    }
    if (!REAL_CONSONANT.test(row.fr)) {
      die(`${id} is on the false-positive list and its French has no vowel + n/m + e, so the flag may be real`);
    }
  }
  const flagged = ALL_ROWS.filter((r) => r.respell && hasPlainNasalFor(r.fr, r.respell))
    .filter((r) => !FALSE_POSITIVES.includes(r.id));
  if (flagged.length) die(`${flagged.length} respelling(s) close a nasal with a plain n/m: ${flagged.map((r) => `${r.id} ${r.respell}`).join(', ')}`);

  // AND THE CHECKER IS BLIND TO A NASAL FOLLOWED BY A CONSONANT INSIDE A TOKEN
  // (Corrections §6, as amended by §14.1). `lee-SAHⁿSS` and `ay-kee-va-LAHⁿSS`
  // are exactly that shape: correct, and the checker cannot see either way.
  // Assert the superscript BY NAME so the day the checker improves we find out.
  /* ONE TABLE, THREE VALUES PER ROW, per Corrections §14.1 — whose whole point
   * is that §6's two-table split is BY ROW and the shape it needs is BY NASAL.
   * A word with a nasal the checker sees AND a nasal it cannot see holds one of
   * each in ONE string, so it belongs in both of §6's tables at once. An author
   * following §6 literally files such a row under VISIBLE, repairs what the
   * checker reported, gets a clean report and ships a wrong value.
   *
   *   `plain`  every superscript broken back to n. What an unrepaired row looks
   *            like.
   *   `half`   the value you get by repairing ONLY WHAT THE CHECKER REPORTS.
   *   `to`     the authored value.
   *
   * `blind` says the checker cannot see any of the row's nasals; `mixed` says
   * it sees some and not others. The three assertions below run through the
   * REAL function, and `half !== to` on the mixed rows is asserted BY NAME, so
   * the day the checker improves this list goes stale and we find out rather
   * than carrying it dead.
   *
   * This unit's exposure is `-ence` and `-ance`: a nasal followed by a
   * consonant INSIDE the token, which is the shape a2.11 measured at 11 misses
   * in 25. `licence` and `équivalence` are the whole of it. */
  const NASAL_TABLE = [
    { id: E(24), kind: 'blind', plain: 'ün lee-SAHNSS', half: 'ün lee-SAHNSS', to: 'ün lee-SAHⁿSS' },
    { id: E(46), kind: 'mixed', plain: 'zhay fee-NEE ma lee-SAHNSS ahn trwa-ZAHN', half: 'zhay fee-NEE ma lee-SAHNSS ahⁿ trwa-ZAHⁿ', to: 'zhay fee-NEE ma lee-SAHⁿSS ahⁿ trwa-ZAHⁿ' },
    { id: E(64), kind: 'mixed', plain: 'ohn va duh-mahn-DAY ü-nay-kee-va-LAHNSS', half: 'ohⁿ va duh-mahⁿ-DAY ü-nay-kee-va-LAHNSS', to: 'ohⁿ va duh-mahⁿ-DAY ü-nay-kee-va-LAHⁿSS' },
    // NOT `as const`. With literal types the admin typecheck proves
    // `half !== to` can never be false and rejects the comparison as
    // unintentional — which would leave the assertion looking like a guard and
    // being one only by accident. Widened to `string` so the runtime check is
    // real for the next author who edits one of these values.
  ] as { id: string; kind: 'blind' | 'mixed'; plain: string; half: string; to: string }[];
  for (const { id, kind, plain, half, to } of NASAL_TABLE) {
    const row = ALL_ROWS.find((r) => r.id === id);
    if (row?.respell !== to) die(`${id} respelling drifted from the by-name table: "${row?.respell}"`);
    const seesPlain = hasPlainNasalFor(row.fr, plain);
    if (kind === 'blind' && seesPlain) die(`${id} is filed blind and the checker CAN see its unrepaired value`);
    if (kind === 'mixed' && !seesPlain) die(`${id} is filed mixed and the checker cannot see its unrepaired value either`);
    if (hasPlainNasalFor(row.fr, half)) die(`${id}: the checker still flags the half-repair, so it is not the trap this entry describes`);
    if (hasPlainNasalFor(row.fr, to)) die(`${id}: the checker flags the AUTHORED value`);
    // THE POINT OF THE WHOLE TABLE: a clean report on the half-repair is not a
    // correct value. On a mixed row the two differ, and only the by-name check
    // can tell them apart.
    if (kind === 'mixed' && half === to) die(`${id} is filed mixed and its half-repair equals its final value`);
  }

  console.log(`\n  offline guards passed: ${ALL_ROWS.length} rows, ${LESSON.sections.length} sections, `
    + `${(ratio * 100).toFixed(1)}% in the registrar's voice, ${IMPORT_IDS.length} imports`);

  /* ── DATABASE GUARDS ────────────────────────────────────────────────────── */

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const count = async (theme: string, level?: string) => Number((await c.query<{ n: string }>(
      `select count(*)::text as n from content_items where theme=$1 and status='published'${level ? ' and level=$2' : ''}`,
      level ? [theme, level] : [theme])).rows[0].n);

    const beforeTheme = await count(THEME);
    const beforeA2 = await count(THEME, 'a2');
    console.log(`  ${THEME} before: ${beforeTheme} published (${beforeA2} at a2)`);

    // THE ID BLOCK. A highest-id check cannot see a concurrent lesson landing
    // BELOW the top of the range — a1.19/a1.20 and a1.14/a1.15 both collided
    // that way. Check the WHOLE BLOCK, not the maximum.
    const taken = await c.query<{ id: string }>('select id from content_items where id = any($1::text[])', [ids]);
    if (taken.rowCount && !REAPPLY) {
      die(`${taken.rowCount} of this build's ids already exist: ${taken.rows.map((r) => r.id).slice(0, 8).join(', ')}. `
        + 'Another lesson landed in the block. Re-measure and move, or pass --reapply if this is your own re-run.');
    }

    // Intra-theme duplicate `fr`. The flashcard hub keys on `fr` PER THEME and
    // serves two rows sharing one as a single card, twice. This is what caught
    // `redoubler`, which the prompt told this build to author and which already
    // exists at fr.a1.ecole.111 IN THIS THEME.
    const clash = await c.query<{ id: string; fr: string }>(
      `select id, fr from content_items where theme=$1 and status='published' and fr = any($2::text[])`,
      [THEME, ALL_ROWS.map((r) => r.fr)]);
    if (clash.rowCount && !REAPPLY) {
      die(`${clash.rowCount} authored fr string(s) already exist in ${THEME}: ${clash.rows.map((r) => `${r.id} "${r.fr}"`).slice(0, 5).join(', ')}`);
    }

    // EVERY IMPORT MUST EXIST AND BE PUBLISHED. Collation §1.3: a published row
    // is REACHABLE and must be imported by itemId, never re-authored.
    const found = await c.query<{ id: string; status: string; fr: string; drills: unknown }>(
      'select id, status, fr, drills from content_items where id = any($1::text[])', [IMPORT_IDS]);
    const missing = IMPORT_IDS.filter((i) => !found.rows.some((r) => r.id === i));
    if (missing.length) die(`${missing.length} imported id(s) are not in Postgres: ${missing.join(', ')}`);
    const unpub = found.rows.filter((r) => r.status !== 'published');
    if (unpub.length) die(`${unpub.length} imported id(s) are not published: ${unpub.map((r) => r.id).join(', ')}`);

    // DOCTRINE §E, CHECKED AGAINST POSTGRES AND NOT THE SEED: every item a
    // deckTranche releases must carry `flashcard`, or the release is a line
    // that looks like it works and does nothing.
    const released = [...new Set((LESSON.deckTranche ?? []).flat())];
    const byId = new Map(found.rows.map((r) => [r.id, toArray(r.drills)]));
    for (const r of ALL_ROWS) byId.set(r.id, toArray(r.drills));
    const noDeck = released.filter((id) => !(byId.get(id) ?? []).includes('flashcard'));
    if (noDeck.length) {
      console.log(`  NOTE: ${noDeck.length} released id(s) carry no \`flashcard\` drill, so no deck can serve them:`);
      console.log(`        ${noDeck.slice(0, 12).join(', ')}${noDeck.length > 12 ? ` … and ${noDeck.length - 12} more` : ''}`);
    }

    // `practice` with skill 'speak' needs `voiceflash` ON EVERY ITEM IT NAMES.
    const practice = LESSON.sections.find((s) => s.type === 'practice') as { itemIds: string[] } | undefined;
    for (const id of practice?.itemIds ?? []) {
      if (!(byId.get(id) ?? []).includes('voiceflash')) die(`${id} is named by the practice section and carries no voiceflash drill`);
    }

    // a2.07's SIX FROZEN ROWS, verified string by string. The list is frozen at
    // publication and seven other units depend on it.
    const rb = await c.query<{ id: string; fr: string }>('select id, fr from content_items where id = any($1::text[])', [[...REPAIR_IDS]]);
    if (rb.rowCount !== 6) die(`a2.07's repair block reads back ${rb.rowCount} rows, expected 6. a2.07 may not be applied.`);
    REPAIR_IDS.forEach((id, i) => {
      const row = rb.rows.find((r) => r.id === id);
      if (row?.fr !== REPAIR_FR[i]) die(`a2.07's frozen row ${id} reads "${row?.fr}", expected "${REPAIR_FR[i]}". The block moved.`);
    });

    // a2.29's ladder rows.
    const lb = await c.query<{ id: string }>("select id from content_items where id = any($1::text[]) and status='published'", [[...LADDER_IDS]]);
    if (lb.rowCount !== LADDER_IDS.length) die(`a2.29's ladder reads back ${lb.rowCount} of ${LADDER_IDS.length} rows. a2.29 may not be applied.`);

    // The unit row, read from Postgres rather than assumed (Corrections §1).
    const unitRow = await c.query<{ body: Record<string, unknown> }>(
      "select body from content_units where kind='curriculum_unit' and body->>'id'=$1", [UNIT.id]);
    if (unitRow.rowCount !== 1) die(`${UNIT.id} is not in content_units`);
    const unit = unitRow.rows[0].body as { id: string; canDo?: string; themes?: string[]; lessonIds?: string[] };
    if (unit.canDo !== UNIT.canDo) die(`the unit row canDo reads "${unit.canDo}" and the spine says "${UNIT.canDo}"`);
    // THIS UNIT NEEDS NO RE-MAP. If a re-map diff arrives that changes it, it is
    // wrong, and this is where that gets caught.
    if (!(unit.themes ?? []).includes(THEME)) die(`the unit row does not carry '${THEME}'; something re-mapped a theme that was already correct`);

    console.log(`  database guards passed: ${IMPORT_IDS.length} imports published, a2.07 and a2.29 verified, unit canDo matches`);

    if (DRY_RUN) { console.log('\n  DRY RUN: every guard passed, nothing written.\n'); return; }

    /* ── THE WRITE ────────────────────────────────────────────────────────── */

    await c.query('begin');
    try {
      for (const r of ALL_ROWS) {
        await c.query(
          `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills, version, status)
           values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,'published')
           on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
             fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell,
             gender=excluded.gender, notes=excluded.notes, tags=excluded.tags, drills=excluded.drills,
             version=excluded.version, status='published'`,
          [r.id, r.kind, r.level, r.theme, r.fr, r.en, r.ipa ?? null, r.respell ?? null,
            (r as { gender?: string }).gender ?? null, r.notes ?? null, r.tags ?? [], r.drills ?? [], r.version ?? 1]);
      }
      await c.query(
        `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
         values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
         on conflict (slug) do update set title=excluded.title, level=excluded.level,
           body=excluded.body, status='published', updated_at=now()`,
        [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]);
      const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };
      const uu = await c.query(
        `update content_units set body=$1::jsonb, updated_at=now()
          where kind='curriculum_unit' and body->>'id'=$2`, [JSON.stringify(nextUnit), UNIT.id]);
      if (uu.rowCount !== 1) throw new Error(`the unit update touched ${uu.rowCount} rows, expected 1`);
      await c.query('commit');
    } catch (e) {
      await c.query('rollback');
      die(`rolled back: ${(e as Error).message}`);
    }

    // THE ROW COUNT AFTER, NOT THE MAXIMUM ID (Corrections §10).
    const afterTheme = await count(THEME);
    const afterA2 = await count(THEME, 'a2');
    console.log(`\n  ${THEME}: ${beforeTheme} -> ${afterTheme} (+${afterTheme - beforeTheme}, authored ${ALL_ROWS.length})`);
    console.log(`  ${THEME} a2 slice: ${beforeA2} -> ${afterA2} (+${afterA2 - beforeA2})`);
    if (afterTheme - beforeTheme !== ALL_ROWS.length && !REAPPLY) {
      die(`the theme moved by ${afterTheme - beforeTheme} and this build authored ${ALL_ROWS.length}. Something else landed during the apply.`);
    }
    console.log(`  ${LESSON.id} written, and ${UNIT.id} now claims it`);
    console.log('\n  NEXT: pnpm tsx scripts/merge-ecole-etudes-into-seed.ts\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
