// a2.34.l1 « Pronoms possessifs » — apply to Postgres.
//
//   pnpm content:pronoms-possessifs --dry     guards only, writes nothing
//   pnpm content:pronoms-possessifs           applies
//
// THE SCRIPT NAME IS `pronoms-possessifs` AND NOT `possessifs`. The prompt asks
// for the collision to be checked and it is real: `author-possessifs-batch.ts`,
// `merge-possessifs-into-seed.ts`, `scripts/data/possessifs-{corpus,lesson,
// terms}.ts` and the package script `content:possessifs` are all a1.17's and all
// shipped.
//
// POSTGRES FIRST, SEED SECOND. Run merge-pronoms-possessifs-into-seed.ts after
// this, or the lesson exists in the database and nowhere the app can read it.
//
// DO NOT run author-full-curriculum-spine.ts. A naive re-run would revert 74 of
// 75 unit titles, which is what spine-drift.test.ts exists to catch. This build
// changes NO spine field: `a2.34` already reads exactly as the prompt's measured
// identity block, verified against `content_units` below.
//
// DO NOT run content:publish from here. Doctrine §C: publishing is not part of
// a lesson build, and content:parity must be read first.
//
// THIS BUILD WRITES ELEVEN RESPELL REPAIRS TO ROWS IT DOES NOT OWN. All eleven
// are b1 and b2 rows in this lesson's own home theme and all eleven close their
// ending with a plain n. Nothing else about those rows is touched: not `gender`,
// not `kind`, not `drills`, so none of them can move a1.03's measured ending
// population. See corpus §E, which is the largest single finding in this build.
import './env';
import {
  ALL_ROWS, UNIT, THEME, LESSON_ID, E, ID_FIRST, ID_LAST,
  THEME_ROWS_BEFORE, THEME_A2_BEFORE,
  IMPORT_IDS, IMPORTED, NOT_DECK_ABLE, NOT_IMPORTED, DICTEE_IDS, DICTEE_MODE_EXPECTED,
  RESPELL_REPAIRS, REPAIR_IDS, REPAIR_SOURCES, NOT_REPAIRED, HOUSE_ENDINGS, HOUSE_ENDING,
  PAIR_CELLS, GRID_CELLS, THIRD_CELLS, COLLAPSE_ROW,
  THREE_FORM_FAMILIES, LEUR_PLURAL_PAIR, CIRCUMFLEX_PAIRS, CIRCUMFLEX_FORMS,
  REGISTER_PAIRS, SPOKEN_MARK, WRITTEN_MARK, LIAISON_ROWS, TIE_GLYPH,
  A117_REFRAME, A117_TEST, A117_RESERVED, A117_FORBIDDEN, POSSESSIVE_ADJ_UNIT,
  GENDER_LOST, LEUR_RULE, LEUR_RULE_SCOPE, INDIRECT_UNIT,
  A233_REFRAME, A233_RESERVED, A234_SHAPE, DEMONSTRATIVE_UNIT,
  WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT,
  COMPARATIVE_UNIT, GENDER_UNIT, AGREEMENT_UNIT, REGISTER_UNIT,
  BARE_STEMS, LEGAL_ARTICLES, BARE_ALLOWED_IN,
  THREE_LEURS, NO_SUCH_FORM, NO_SUCH_FORM_ALLOWED_IN, FALSE_LEUR_CLAIMS,
  OUT_OF_BAND_TENSES, PRONOMINAL_EN_Y, DEMONSTRATIVE_PRONOUNS, COMPARATIVE_FORMS,
  MUST_FIRE, MUST_NOT_FIRE,
  JARGON, PLAIN_PHRASE, TECHNICAL_WORD, BANNED_SUBSTRINGS, FORBIDDEN_CLAIMS,
  DEAD_AUDIO_FIELDS, DEAD_LESSON_FIELDS,
  NEAR_MISSES, FOLD_COLLISIONS, HOMOPHONE_FORMS, ACCENT_PAIRS, DISPLAY_PARITY,
  UNSEEN, REFRAME, REFRAME_COUNT, STRESSED_USED,
} from './data/pronoms-possessifs-corpus.ts';
import { LESSON, ITEM_IDS, DECK_TRANCHE } from './data/pronoms-possessifs-lesson.ts';
import { validateLesson, quizQuestions } from '../../ealch-v2/src/content/schema.ts';
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

/** Every authored string reachable from a value. A RAW walk, deliberately:
 *  `prose()` drops NOTATION_KEYS and `sub` is on that list because on most
 *  cards it holds a respelling. On a `cardDeck` card `sub` holds PROSE, so the
 *  house-copy and jargon checks never see it (Corrections §13). */
const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};

/** Corrections §14.3: THE HOUSE WORD BOUNDARY EXCLUDES AN APOSTROPHE, so a
 *  guard built on it cannot see `c'est`, `qu'il` or `l'autre`. Drop the
 *  apostrophe from the LEFT boundary and keep it on the right.
 *
 *  THE HYPHEN IS IN NEITHER CLASS HERE, unlike a2.33's. Nothing in this lesson
 *  is hyphenated, so keeping it would be cargo, and dropping it means `moi` in
 *  `moi-même` would match — which is correct, because that form is not this
 *  lesson's and should be caught if it appears. */
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hasWord = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}])${esc(needle)}(?![\\p{L}\\p{N}'’])`, 'iu').test(hay);
const countOf = (hay: string, needle: string): number =>
  (hay.match(new RegExp(`(?<![\\p{L}\\p{N}])${esc(needle)}(?![\\p{L}\\p{N}'’])`, 'giu')) ?? []).length;

/** A UNIT ID IS NOT A FRENCH WORD, AND THE HOUSE BOUNDARY IS THE WRONG SHAPE
 *  FOR ONE. `hasWord` keeps the apostrophe in the RIGHT-hand class so that `l'`
 *  cannot match a bare `l`, and that same clause makes « a2.24's line »
 *  invisible to a check for `a2.24`.
 *
 *  EVERY CITATION IN THIS BAND IS WRITTEN AS "<unit>'s line", so a guard built
 *  on `hasWord` was asking for the one form the house never writes. It caught
 *  this build on `s15-trap`, where a2.24 is named twice and both times with an
 *  apostrophe after it.
 *
 *  Corrections §14.3 records the MIRROR IMAGE of this: the LEFT-hand class
 *  excludes `'`, so a shape cannot see `c'est`, and the fix there is to drop it
 *  from the left. Here it has to come off BOTH sides, and only for a unit id,
 *  which can never be part of an elided French word. */
const namesUnit = (hay: string, unit: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}])${esc(unit)}(?![\\p{L}\\p{N}])`, 'iu').test(hay);

/** THE BARE-POSSESSIVE SHAPE, AND IT TOOK FOUR CHECKS RATHER THAN ONE.
 *
 *  A2-TAIL-AUDIT §4 says guard the THING, not the letters. Each check after the
 *  first was added because the version before it fired on correct content, and
 *  the sentences that broke each one are in MUST_NOT_FIRE.bare so the next
 *  author does not rediscover them.
 *
 *  1. THE STEM WITH NO ARTICLE IN FRONT. `C'est mien.` is the trap and
 *     `C'est le mien.` is the lesson. So the check is: does one of the twelve
 *     stems appear with none of `le`, `la`, `les`, `du`, `des`, `au`, `aux`
 *     immediately before it?
 *
 *  2. THE POSSESSIVE ADJECTIVE IS NOT THE TRAP, AND IT LOOKS EXACTLY LIKE IT.
 *     `mon sac` is `mon` with nothing in front of it and it is correct French
 *     that a1.17 owns. The stems list therefore holds only the PRONOUN stems —
 *     `mien`, `mienne`, … — and never `mon`, `ma`, `mes`, `notre`, `leur`.
 *     This broke the second version of the guard.
 *
 *  3. AN ENUMERATION IS NOT A SENTENCE. A lesson cannot teach four forms it is
 *     forbidden to list, and `le mien · la mienne · les miens · les miennes`
 *     is a real string off this lesson's own surfaces. A run of the family
 *     separated by list punctuation is a label.
 *
 *  4. AND THE GUARD IS ABOUT FRENCH. « The word mien never appears on its own »
 *     is English prose MENTIONING a French word, which is half of every
 *     teaching surface in this product (invariants §8). Evaluated one clause at
 *     a time, so a French clause inside an English card body still fires. */
const FAMILY_ONLY_RX = /^[\s.,;:·/|]*(?:(?:le|la|les)\s+)?(?:mien|mienne|miens|miennes|tien|tienne|tiens|tiennes|sien|sienne|siens|siennes)[\s.,;:·/|]*(?:(?:and|or|et)[\s.,;:·/|]*)?(?:(?:(?:le|la|les)\s+)?(?:mien|mienne|miens|miennes|tien|tienne|tiens|tiennes|sien|sienne|siens|siennes)[\s.,;:·/|]*(?:(?:and|or|et)[\s.,;:·/|]*)?)*$/iu;
const ENGLISH_MARKERS = [
  'the', 'and', 'is', 'are', 'was', 'you', 'your', 'this', 'that', 'these',
  'those', 'what', 'why', 'which', 'not', 'with', 'of', 'for', 'it', 'one',
  'ones', 'they', 'them', 'he', 'she', 'sentence', 'word', 'never', 'own',
  'thing', 'both', 'each', 'about', 'from', 'have', 'has',
] as const;
const looksEnglish = (s: string): boolean => ENGLISH_MARKERS.some((w) => hasWord(s, w));
/** `PassagePage` splits a reading passage on the same boundary. */
const clauses = (s: string): string[] => s.split(/(?<=[.!?…])\s+/u).filter(Boolean);

const bareInClause = (s: string): boolean => {
  if (FAMILY_ONLY_RX.test(s)) return false;
  if (looksEnglish(s)) return false;
  for (const stem of BARE_STEMS) {
    const rx = new RegExp(`(?<![\\p{L}\\p{N}])${esc(stem)}(?![\\p{L}\\p{N}'’])`, 'giu');
    for (const m of s.matchAll(rx)) {
      const at = m.index ?? 0;
      const before = s.slice(0, at).trimEnd();
      const lastWord = (before.match(/[\p{L}'’]+$/u) ?? [''])[0].toLowerCase();
      if ((LEGAL_ARTICLES as readonly string[]).includes(lastWord)) continue;
      return true;
    }
  }
  return false;
};
const hasBarePossessive = (s: string): boolean => {
  if (FAMILY_ONLY_RX.test(s)) return false;
  return clauses(s).some(bareInClause);
};

async function main() {
  /* ── OFFLINE GUARDS. These need no database and they are the cheap ones. ── */

  const schemaIssues = validateLesson(LESSON, LESSON_ID);
  if (schemaIssues.length) die(`validateLesson:\n${schemaIssues.map((i) => `    ${i.path}: ${i.message}`).join('\n')}`);

  const density = validateDensity(LESSON, new Set(ITEM_IDS));
  if (density.length) die(`validateDensity:\n${formatDensity(density)}`);

  const ids = ALL_ROWS.map((r) => r.id);
  if (new Set(ids).size !== ids.length) die('a duplicate id in the authored rows');

  // AUTHORED ROWS AGAINST EACH OTHER, under the flashcard hub's own norm.
  // a2.08 shipped `mieux` and `le mieux` — authored in one batch, both
  // normalising to `mieux` — past every local gate and failed the seed-wide
  // `flashhub-coverage.test.ts`. Corpus §A.3 is why this build authors only ONE
  // headword: `le leur` and `la leur` BOTH normalise to `leur`, and `la nôtre`
  // and `la vôtre` collide with the published masculines.
  const hubNorm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const selfSeen = new Map<string, string>();
  for (const r of ALL_ROWS) {
    if (r.kind === 'sentence') continue;
    const k = hubNorm(r.fr);
    const prior = selfSeen.get(k);
    if (prior) die(`${prior} and ${r.id} both normalise to "${k}" inside ${THEME}. The hub keys on fr per theme and would serve one card twice.`);
    selfSeen.set(k, r.id);
  }
  // AND THE THREE FORMS THAT CANNOT BE HEADWORDS STAY SENTENCES. Corpus §A.3:
  // the article is the only thing separating them from a published row, and the
  // hub strips exactly that. Asserted as a POSITIVE so the finding cannot rot
  // into a silence.
  for (const impossible of ['la nôtre', 'la vôtre', 'le leur', 'la leur']) {
    const asHeadword = ALL_ROWS.find((r) => r.kind !== 'sentence' && r.fr === impossible);
    if (asHeadword) die(`${asHeadword.id} authors "${impossible}" as a headword. hubNorm strips the article, so it collides with the published masculine or with its own pair (corpus §A.3). It must live inside a sentence.`);
    // THE FULL TWO-WORD FORM, NOT THE BARE STEM. The first version of this line
    // asked for `impossible.split(' ')[1]`, which is `leur` — and `le leur`
    // satisfies it, so `la leur` was missing from every row while the batch
    // reported clean. The test caught it; this is the same check at the same
    // strength.
    if (!ALL_ROWS.some((r) => r.kind === 'sentence' && r.fr.includes(impossible))) {
      die(`"${impossible}" cannot be a headword and no authored SENTENCE carries it either, so the cell is missing from the lesson entirely`);
    }
  }

  const nums = ids.map((i) => Number(i.split('.').pop()));
  if (Math.min(...nums) < ID_FIRST || Math.max(...nums) > ID_LAST) {
    die(`an authored id sits outside the requested block ${E(ID_FIRST)}..${E(ID_LAST)}`);
  }

  // The 14-word sentence budget (doctrine §C).
  for (const r of ALL_ROWS) {
    if (r.kind === 'sentence' && r.fr.split(/\s+/).length > 14) die(`${r.id} runs past the 14-word sentence budget`);
  }

  // NOT ONE AUTHORED ROW IS GENDERED. A gendered single-word row joins a1.03's
  // measured ending population and moves twenty printed figures in
  // `a1-03-genre.test.ts`.
  for (const r of ALL_ROWS) {
    if ((r as { gender?: string }).gender) die(`${r.id} carries a gender, which is the shape that moves a1.03`);
  }

  // THE RESPELLING RULE, through the real checker rather than a copy of it.
  for (const r of ALL_ROWS) {
    if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} "${r.fr}" -> "${r.respell}" closes a nasal with a plain n or m`);
  }

  // THE LIAISON, WHICH NO LAYER IN THIS PROJECT CHECKS (invariants §3,
  // Corrections §15.3). a2.08 shipped four `est aussi` frames as `eh oh-see`
  // with the t missing, past every gate. Every `est` + vowel frame this lesson
  // creates is named in LIAISON_ROWS and the respelling must carry the moving
  // consonant ONTO the following syllable.
  for (const l of LIAISON_ROWS) {
    const row = ALL_ROWS.find((r) => r.id === l.id);
    if (!row) die(`LIAISON_ROWS names ${l.id}, which this build does not author`);
    if (!row.fr.includes(l.frame)) die(`${l.id} is listed as carrying the frame "${l.frame}" and its fr does not`);
    if (!(row.respell ?? '').includes(l.respell)) {
      die(`${l.id} "${row.fr}" respells "${row.respell}" and the liaison wants "${l.respell}" — the t moves onto the next syllable and is never dropped`);
    }
  }
  // AND EVERY `est` + VOWEL FRAME IS IN THE TABLE, so a later author cannot add
  // one that nothing watches.
  for (const r of ALL_ROWS) {
    if (!/\best\s+[aàeéèêiîoôuûhy]/i.test(r.fr)) continue;
    if (!LIAISON_ROWS.some((l) => l.id === r.id)) die(`${r.id} "${r.fr}" creates an est+vowel liaison and is not in LIAISON_ROWS`);
  }

  const sec = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id ?? ''));

  const { titleEn: OVERVIEW_TITLE_EN, ...OVERVIEW_REST } = (LESSON.overview ?? {}) as Record<string, unknown>;
  if (OVERVIEW_TITLE_EN !== UNIT.title) die(`overview.titleEn is "${String(OVERVIEW_TITLE_EN)}" and content_units requires "${UNIT.title}"`);

  const LEARNER_TEXT = [
    ...strs(LESSON.sections), ...strs(LESSON.terms), ...strs(LESSON.sheets ?? []),
    LESSON.intro ?? '', ...strs(OVERVIEW_REST), ...strs(LESSON.drills ?? []),
    ...strs(LESSON.acts ?? []), ...strs(LESSON.errorTriggers ?? []),
  ].join('\n');

  if (LEARNER_TEXT.length < 12000) die(`the learner-text walk produced ${LEARNER_TEXT.length} chars, which is too few to be real`);

  console.log(`\n  learner text: ${LEARNER_TEXT.length} chars across ${strs(LESSON.sections).length} section strings`);

  /* ══════════════════════════════════════════════════════════════════════
   *  THE THREE REQUIRED LAYOUTS
   * ══════════════════════════════════════════════════════════════════════ */

  // LAYOUT 1: all four forms of ONE possessive, with the owned noun VISIBLE in
  // each. Asserted CELL BY CELL, by name, so a dropped form fails with the form
  // it dropped rather than with a count.
  {
    const s = sec('s04-four') as { cards?: Array<Record<string, unknown>> } | undefined;
    if (!s) die('s04-four is missing, and it is required layout 1');
    const cards = s.cards ?? [];
    if (cards.length !== 4) die(`required layout 1 wants four cards, one per cell, and has ${cards.length}`);
    for (const c of GRID_CELLS) {
      const row = ALL_ROWS.find((r) => r.id === c.id);
      if (!row) die(`the ${c.gender} ${c.number} cell (${c.id}) is missing from the corpus`);
      if (!hasWord(row.fr, c.form)) die(`${c.id} is the "${c.form}" cell and does not contain it`);
      // THE OWNED NOUN IS VISIBLE, WHICH IS THE HALF THE PROMPT INSISTS ON.
      if (countOf(row.fr, c.noun) !== 1) die(`${c.id} says "${c.noun}" ${countOf(row.fr, c.noun)} times; required layout 1 needs the owned noun visible exactly once`);
      const card = cards.find((cd) => strs(cd).some((t) => t.includes(row.fr)));
      if (!card) die(`no card in s04-four carries "${row.fr}", so the ${c.gender} ${c.number} cell is not on a screen`);
      if (!strs(card).some((t) => hasWord(t, c.noun))) die(`the ${c.form} card does not name "${c.noun}", and the whole layout is that the source of the agreement is visible`);
    }
    // AND THE FOUR CELLS ARE FOUR DIFFERENT FORMS, not one form four times.
    const forms = new Set(GRID_CELLS.map((c) => c.form));
    if (forms.size !== 4) die(`required layout 1 shows ${forms.size} distinct forms and the paradigm has four`);
  }

  // LAYOUT 2: `mon sac` beside `le mien`, adjective against pronoun, SAME
  // referent. Asserted on the SHAPE: the noun is in the adjective half and
  // absent from the pronoun half.
  {
    const s = sec('s03-adj') as { cards?: Array<Record<string, unknown>> } | undefined;
    if (!s) die('s03-adj is missing, and it is required layout 2');
    const cards = s.cards ?? [];
    if (cards.length !== 4) die(`required layout 2 wants four cards and has ${cards.length}`);
    for (const p of PAIR_CELLS) {
      const adj = ALL_ROWS.find((r) => r.id === p.adj);
      const pron = ALL_ROWS.find((r) => r.id === p.pron);
      if (!adj || !pron) die(`the ${p.gender} ${p.number} pair (${p.adj}/${p.pron}) is missing from the corpus`);
      if (!hasWord(adj.fr, p.adjForm)) die(`${p.adj} is the adjective half and does not carry "${p.adjForm}"`);
      if (!hasWord(adj.fr, p.noun)) die(`${p.adj} is the adjective half and does not name "${p.noun}"`);
      if (!hasWord(pron.fr, p.pronForm)) die(`${p.pron} is the pronoun half and does not carry "${p.pronForm}"`);
      // THE WHOLE CLAIM THE LAYOUT MAKES.
      if (hasWord(pron.fr, p.noun)) die(`${p.pron} names "${p.noun}" in the half that is supposed not to`);
      const card = cards.find((cd) => {
        const t = strs(cd).join(' ');
        return t.includes(adj.fr) && t.includes(pron.fr);
      });
      if (!card) die(`no card in s03-adj carries "${adj.fr}" AND "${pron.fr}", so the ${p.gender} ${p.number} contrast is not on one screen`);
    }
  }

  // LAYOUT 3: `C'est le mien` beside `C'est à moi`, WITH THE REGISTER MARKED ON
  // EACH. The prompt says "on each", so both halves are checked and a card that
  // labels only the spoken one fails.
  {
    const s = sec('s17-amoi') as { cards?: Array<Record<string, unknown>> } | undefined;
    if (!s) die('s17-amoi is missing, and it is required layout 3');
    const text = strs(s).join('\n');
    for (const p of REGISTER_PAIRS) {
      const w = ALL_ROWS.find((r) => r.id === p.written)!;
      const sp = ALL_ROWS.find((r) => r.id === p.spoken)!;
      if (!text.includes(w.fr)) die(`required layout 3 does not carry the written half "${w.fr}"`);
      if (!text.includes(sp.fr)) die(`required layout 3 does not carry the spoken half "${sp.fr}"`);
    }
    if (!text.includes(SPOKEN_MARK)) die(`required layout 3 does not mark the spoken register with "${SPOKEN_MARK}"`);
    if (!text.includes(WRITTEN_MARK)) die(`required layout 3 does not mark the written register with "${WRITTEN_MARK}", and the prompt asks for the register on EACH`);
    // AND THE TWO MARKS ARE ON THE TWO HALVES rather than both on one card.
    const cards = s.cards ?? [];
    const spokenCard = cards.find((cd) => strs(cd).some((t) => t.includes(ALL_ROWS.find((r) => r.id === REGISTER_PAIRS[0].spoken)!.fr)));
    const writtenCard = cards.find((cd) => strs(cd).some((t) => t.includes(ALL_ROWS.find((r) => r.id === REGISTER_PAIRS[0].written)!.fr)));
    if (!spokenCard || !writtenCard) die('required layout 3 has no card for one of the two registers');
    if (!strs(spokenCard).some((t) => t.includes(SPOKEN_MARK))) die('the C\'est à moi card is not marked as the spoken one');
    if (!strs(writtenCard).some((t) => t.includes(WRITTEN_MARK))) die("the C'est le mien card is not marked as the written one");
    // a2.01 OWNS THE REGISTER AXIS and this lesson adds two entries to it
    // rather than a second axis.
    if (!namesUnit(LEARNER_TEXT, REGISTER_UNIT)) die(`${REGISTER_UNIT} set the level's register axis and is never named`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE FOUR QUOTATIONS, ALL IMPORTED SO "VERBATIM" IS MECHANICAL
   * ══════════════════════════════════════════════════════════════════════ */

  // a1.17's REFRAME, and the unit named beside it. The prompt asks for this
  // lesson to « name a1.17 and present this as a rule the learner already has ».
  if (!LEARNER_TEXT.includes(A117_REFRAME)) die(`${POSSESSIVE_ADJ_UNIT}'s reframe is not quoted verbatim on any learner surface`);
  if (!namesUnit(LEARNER_TEXT, POSSESSIVE_ADJ_UNIT)) die(`${POSSESSIVE_ADJ_UNIT} is quoted and not named`);
  // AND THE QUOTATION AND THE UNIT ARE ON THE SAME SCREEN. a2.33's mutation
  // harness found that a section-wide check passes while the unit id sits on
  // any one of three cards.
  {
    const carriers = LESSON.sections.filter((s) => strs(s).some((t) => t.includes(A117_REFRAME)));
    if (!carriers.length) die(`${POSSESSIVE_ADJ_UNIT}'s reframe reaches no section`);
    for (const c of carriers) {
      if (!namesUnit(strs(c).join('\n'), POSSESSIVE_ADJ_UNIT)) {
        die(`${(c as { id?: string }).id} quotes ${POSSESSIVE_ADJ_UNIT}'s reframe and does not name ${POSSESSIVE_ADJ_UNIT}`);
      }
    }
  }
  // a1.17's TEST, which a2.24 also quotes and which this lesson EXTENDS.
  if (!LEARNER_TEXT.includes(A117_TEST)) die(`« ${A117_TEST} » is ${POSSESSIVE_ADJ_UNIT}'s test, quoted by ${INDIRECT_UNIT} as well, and it is not quoted here`);

  // a2.24's TWO STRINGS, both of which the prompt names. Imported, so a
  // paraphrase cannot pass and a2.24 rewording fails this build.
  if (!LEARNER_TEXT.includes(GENDER_LOST)) die(`${INDIRECT_UNIT}'s lui framing is not quoted verbatim; the prompt asks for it by name`);
  if (!LEARNER_TEXT.includes(LEUR_RULE)) die(`${INDIRECT_UNIT}'s leur/leurs wording is not quoted verbatim; the prompt asks for it by name`);
  if (!namesUnit(LEARNER_TEXT, INDIRECT_UNIT)) die(`${INDIRECT_UNIT} is quoted twice and never named`);
  // EACH ON THE SAME CARD AS ITS OWNER.
  for (const [quote, label] of [[GENDER_LOST, 'the lui framing'], [LEUR_RULE, 'the leur rule']] as [string, string][]) {
    const carriers = LESSON.sections.filter((s) => strs(s).some((t) => t.includes(quote)));
    if (!carriers.length) die(`${label} reaches no section`);
    for (const c of carriers) {
      if (!namesUnit(strs(c).join('\n'), INDIRECT_UNIT)) die(`${(c as { id?: string }).id} quotes ${label} and does not name ${INDIRECT_UNIT}`);
    }
  }
  // AND a2.24's SENTENCE IS SCOPED WHERE IT IS QUOTED. It is true of the object
  // pronoun and false of the possessive, so quoting it without the scope would
  // teach the prompt's own error (corpus §A.4).
  {
    const carriers = LESSON.sections.filter((s) => strs(s).some((t) => t.includes(LEUR_RULE)));
    for (const c of carriers) {
      if (!strs(c).join('\n').includes(LEUR_RULE_SCOPE)) {
        die(`${(c as { id?: string }).id} quotes ${INDIRECT_UNIT}'s leur rule without the words « ${LEUR_RULE_SCOPE} », which is the clause that keeps it off the possessive`);
      }
    }
  }

  // a2.33's REFRAME, the third turn of the recurring shape, and this lesson's
  // own extension after it (corpus §C).
  if (!LEARNER_TEXT.includes(A233_REFRAME)) die(`${DEMONSTRATIVE_UNIT}'s reframe is not quoted verbatim`);
  if (!namesUnit(LEARNER_TEXT, DEMONSTRATIVE_UNIT)) die(`${DEMONSTRATIVE_UNIT} is quoted and not named`);
  if (!LEARNER_TEXT.includes(A234_SHAPE)) die("a2.33's line is quoted and this lesson's own extension is not, which leaves a rule about pointing on a card about owning");
  {
    const i = LEARNER_TEXT.indexOf(A233_REFRAME);
    const j = LEARNER_TEXT.indexOf(A234_SHAPE);
    if (j < i) die('the extension appears before the quotation it extends');
  }

  // a2.02's RECURRING SHAPE, quoted and attributed (doctrine §B.7).
  if (!LEARNER_TEXT.includes(WHAT_FOLLOWS)) die(`« ${WHAT_FOLLOWS} » is not quoted, and this is the shape's next turn`);
  if (!namesUnit(LEARNER_TEXT, WHAT_FOLLOWS_UNIT)) die(`${WHAT_FOLLOWS_UNIT} owns that line and is not named`);

  /* ══════════════════════════════════════════════════════════════════════
   *  THE FOUR TRAPS
   * ══════════════════════════════════════════════════════════════════════ */

  // TRAP 1: `le sien` is his OR hers, and the gloss must say both.
  for (const c of THIRD_CELLS) {
    const row = ALL_ROWS.find((r) => r.id === c.id);
    if (!row) die(`${c.id} is a trap 1 row and is missing`);
    if (!hasWord(row.fr, c.form)) die(`${c.id} is the "${c.form}" row and does not contain it`);
    for (const w of c.both) {
      if (!hasWord(row.en ?? '', w)) die(`${c.id} glosses "${row.en}" and does not say "${w}". A row that gives one reading teaches half the trap.`);
    }
  }
  // AND THE ONE-SENTENCE VERSION: two owners, one form, and only the English
  // moves.
  {
    const row = ALL_ROWS.find((r) => r.id === COLLAPSE_ROW);
    if (!row) die(`${COLLAPSE_ROW} is trap 1 in one sentence and is missing`);
    if (countOf(row.fr, 'le sien') !== 2) die(`${COLLAPSE_ROW} should say "le sien" twice and says it ${countOf(row.fr, 'le sien')} times`);
    if (!hasWord(row.en ?? '', 'his') || !hasWord(row.en ?? '', 'hers')) die(`${COLLAPSE_ROW} glosses "${row.en}" and the whole card is that the English needs two words where the French has one`);
  }

  // TRAP 2: THE THREE `leur`s, AND THE PROMPT'S VERSION IS REFUSED.
  //
  // Corpus §A.4: « leur never takes an -s; the article does » is not true of
  // French. `les leurs` puts an s on both words. So the FALSE claims are banned
  // outright and the true shape is asserted positively.
  for (const t of strs(LESSON)) {
    for (const claim of FALSE_LEUR_CLAIMS) {
      if (t.toLowerCase().includes(claim.toLowerCase())) {
        die(`"${claim}" is the prompt's trap 2 and it is false about French (corpus §A.4). Found in: "${t.slice(0, 80)}"`);
      }
    }
  }
  for (const s of MUST_FIRE.leurClaim) if (!FALSE_LEUR_CLAIMS.some((c) => s.toLowerCase().includes(c.toLowerCase()))) die(`the false-claim guard does not fire on "${s}"`);
  for (const s of MUST_NOT_FIRE.leurClaim) if (FALSE_LEUR_CLAIMS.some((c) => s.toLowerCase().includes(c.toLowerCase()))) die(`the false-claim guard fires on "${s}", which is a2.24's TRUE sentence or this lesson's own material`);
  // THE THREE LEURS ARE ALL ON ONE SCREEN, by row, and the trapDrill is it.
  {
    const trap = sec('s15-trap');
    if (!trap) die('s15-trap is missing, and it is trap 2');
    const t = strs(trap).join('\n');
    for (const l of THREE_LEURS) {
      if (!t.includes(l.fr)) die(`s15-trap does not carry "${l.fr}" (${l.job}), and trap 2 is that all of them are on one screen`);
    }
    // AND THE JOBS ARE DISTINGUISHED, which is what makes it a trap rather than
    // a list: at least one takes an -s and at least one never can.
    if (!THREE_LEURS.some((l) => l.takesS)) die('THREE_LEURS claims none of them takes an s, which is the prompt error this build exists to correct');
    if (!THREE_LEURS.some((l) => !l.takesS)) die('THREE_LEURS claims all of them take an s, which loses a2.24 finding');
  }
  // `les leur` DOES NOT EXIST and appears only where it is marked as the error.
  for (const r of ALL_ROWS) {
    if (hasWord(r.fr, NO_SUCH_FORM)) die(`${r.id} authors "${NO_SUCH_FORM}", which is not a form of French`);
  }
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if ((NO_SUCH_FORM_ALLOWED_IN as readonly string[]).includes(sid)) continue;
    for (const t of strs(s)) {
      if (hasWord(t, NO_SUCH_FORM)) die(`${sid} shows "${NO_SUCH_FORM}", which does not exist. Only ${NO_SUCH_FORM_ALLOWED_IN.join(' and ')} may, and only as the error.`);
    }
  }
  for (const sid of NO_SUCH_FORM_ALLOWED_IN) {
    if (!strs(sec(sid)).some((t) => hasWord(t, NO_SUCH_FORM))) die(`${sid} is allowed to show "${NO_SUCH_FORM}" and does not, so the allowance is dead`);
  }
  for (const s of MUST_FIRE.noSuchForm) if (!hasWord(s, NO_SUCH_FORM)) die(`the no-such-form guard does not fire on "${s}"`);
  for (const s of MUST_NOT_FIRE.noSuchForm) if (hasWord(s, NO_SUCH_FORM)) die(`the no-such-form guard fires on "${s}", which is real French`);

  // TRAP 3: the register pair, and the stressed-pronoun gap this build is asked
  // to name. Only `moi` and `toi` are used and no paradigm is built.
  {
    const STRESSED_ALL = ['moi', 'toi', 'lui', 'elle', 'eux', 'elles'];
    const authored = STRESSED_ALL.filter((p) => ALL_ROWS.some((r) => hasWord(r.fr, p)));
    const extra = authored.filter((p) => !(STRESSED_USED as readonly string[]).includes(p));
    if (extra.length) die(`this build authors the stressed pronoun(s) ${extra.join(', ')}, and the prompt asks for two or three and no paradigm`);
    for (const p of STRESSED_USED) {
      if (!ALL_ROWS.some((r) => hasWord(r.fr, p))) die(`STRESSED_USED names "${p}" and no authored row carries it`);
    }
  }

  // TRAP 4: THE CIRCUMFLEX, AND NO TYPED SURFACE MAY TURN ON IT.
  for (const p of CIRCUMFLEX_PAIRS) {
    const adj = ALL_ROWS.find((r) => r.id === p.adjective);
    const pron = ALL_ROWS.find((r) => r.id === p.pronoun);
    if (!adj || !pron) die(`the circumflex pair ${p.adjective}/${p.pronoun} is missing`);
    if (!adj.fr.includes(p.bare)) die(`${p.adjective} is the bare half and does not carry "${p.bare}"`);
    if (!pron.fr.includes(p.accented)) die(`${p.pronoun} is the accented half and does not carry "${p.accented}"`);
    if (adj.fr.includes(p.accented.split(' ')[1])) die(`${p.adjective} carries the ACCENTED form, so the pair shows no contrast`);
  }
  // THE ACCENT IS PRESENT, ASSERTED BY NAME, and this comment is the one the
  // prompt asks for: IT IS DELIBERATE. `nôtre` and `vôtre` carry U+00F4 and a
  // later author reading a diff will see two characters that look like a typo.
  for (const f of CIRCUMFLEX_FORMS) {
    if (!LEARNER_TEXT.includes(f)) die(`"${f}" carries a circumflex ON PURPOSE and reaches no learner surface`);
    if (!/[ôÔ]/.test(f)) die(`CIRCUMFLEX_FORMS holds "${f}", which has no circumflex in it`);
  }
  // AND `fold()` CONFIRMS IT CANNOT BE TYPED, so the mcq-only rule is measured
  // rather than assumed.
  for (const [bare, accented] of ACCENT_PAIRS) {
    if (fold(bare) !== fold(accented)) die(`ACCENT_PAIRS claims "${bare}" and "${accented}" collide under fold() and they no longer do — a typed question is now possible and the quiz should use one`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE BARE FORM
   * ══════════════════════════════════════════════════════════════════════ */

  for (const r of ALL_ROWS) {
    if (hasBarePossessive(r.fr)) die(`${r.id} "${r.fr}" carries a possessive with no article, which is not French`);
  }
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if ((BARE_ALLOWED_IN as readonly string[]).includes(sid)) continue;
    for (const t of strs(s)) {
      if (hasBarePossessive(t)) die(`${sid} carries a bare possessive in "${t.slice(0, 70)}". Only ${BARE_ALLOWED_IN.join(', ')} may show it, and only as the error.`);
    }
  }
  // A REMEDIATION DRILL'S `opts` IS A MARKED SLOT TOO, and the guard fired on
  // one: `d-article` offers « C'est mienne. » as the distractor a learner who
  // has just tripped `no-article` most needs to reject. Everything else about a
  // drill is unmarked prose, so `opts` is dropped by name rather than the whole
  // drill being exempted.
  const drillsWithoutOpts = (LESSON.drills ?? []).map((d) => {
    const { opts, ...rest } = d as Record<string, unknown>;
    return rest;
  });
  for (const t of [...strs(LESSON.terms), ...strs(LESSON.sheets ?? []), ...strs(drillsWithoutOpts), LESSON.intro ?? '', ...strs(OVERVIEW_REST)]) {
    if (hasBarePossessive(t)) die(`a bare possessive reaches a learner outside the marked sections: "${t.slice(0, 70)}"`);
  }
  // AND THE DROPPED FIELD IS NOT A HOLE: a drill `opts` entry may hold the bare
  // form and may hold NOTHING ELSE this lesson forbids.
  for (const d of LESSON.drills ?? []) {
    for (const o of ((d as { opts?: string[] }).opts ?? [])) {
      if (hasWord(o, NO_SUCH_FORM) && (d as { id?: string }).id !== 'd-leur') {
        die(`the drill ${(d as { id?: string }).id} offers "${NO_SUCH_FORM}" and only d-leur teaches that contrast`);
      }
    }
  }
  for (const sid of BARE_ALLOWED_IN) {
    const s = sec(sid);
    if (!s) die(`${sid} is on the bare-form allow list and does not exist`);
    if (!strs(s).some(hasBarePossessive)) die(`${sid} is allowed to show the bare form and does not, so the allowance is dead`);
  }
  for (const s of MUST_FIRE.bare) if (!hasBarePossessive(s)) die(`the bare-possessive guard does not fire on "${s}"`);
  for (const s of MUST_NOT_FIRE.bare) if (hasBarePossessive(s)) die(`the bare-possessive guard fires on "${s}", which is legal`);
  // a1.17's OWN ARTICLE-SLOT ERRORS, IMPORTED. `le mon sac` is ungrammatical in
  // both lessons and a hit is always a defect.
  for (const t of ALL_ROWS.map((r) => r.fr)) {
    for (const f of A117_FORBIDDEN) if (hasWord(t, f)) die(`"${f}" is on a1.17 forbidden list and this build authors it: "${t}"`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE BOUNDARIES
   * ══════════════════════════════════════════════════════════════════════ */

  // a2.33's DEMONSTRATIVE PRONOUNS. `production-surface.test.ts` enforces this
  // seed-wide for every A2 lesson BEFORE seq 33 and stops there, so seq 34 is
  // outside its scope and this is the local half of the same rule.
  for (const t of strs(LESSON)) {
    for (const d of DEMONSTRATIVE_PRONOUNS) {
      if (hasWord(t, d) || hasWord(t, `${d}-ci`) || hasWord(t, `${d}-là`)) {
        die(`"${d}" belongs to ${DEMONSTRATIVE_UNIT} and appears in "${t.slice(0, 70)}"`);
      }
    }
  }
  for (const s of MUST_FIRE.demonstrative) if (!DEMONSTRATIVE_PRONOUNS.some((d) => hasWord(s, d))) die(`the demonstrative guard does not fire on "${s}"`);
  for (const s of MUST_NOT_FIRE.demonstrative) if (DEMONSTRATIVE_PRONOUNS.some((d) => hasWord(s, d))) die(`the demonstrative guard fires on "${s}", where the word is the ADJECTIVE a2.33 taught or an English one`);

  // a2.08's COMPARATIVE. This lesson imports seven of its rows and teaches none
  // of it, so the guard is scoped to where a word would be TAUGHT — a card
  // body, a term, a sheet, a roundup point — rather than to every surface,
  // because the imported rows themselves carry `plus grand` by definition.
  {
    const TEACHING = ['cardDeck', 'tapTable', 'trapDrill', 'commonErrors', 'roundup', 'progressCheck'];
    const teachText = [
      ...strs(LESSON.sections.filter((s) => TEACHING.includes(s.type))),
      ...strs(LESSON.terms), ...strs(LESSON.sheets ?? []),
    ].join('\n');
    for (const f of COMPARATIVE_FORMS) {
      if (teachText.toLowerCase().includes(f)) die(`"${f}" is ${COMPARATIVE_UNIT}'s and appears on a teaching surface`);
    }
    if (!namesUnit(LEARNER_TEXT, COMPARATIVE_UNIT)) die(`${COMPARATIVE_UNIT} lends this lesson seven rows and is never named`);
  }

  // a2.24 AND a2.25 PUT A SMALL WORD IN FRONT OF THE VERB AND THIS ONE DOES
  // NOT. Said in one line, and the units named.
  for (const u of [INDIRECT_UNIT, 'a2.25', DEMONSTRATIVE_UNIT, GENDER_UNIT, AGREEMENT_UNIT, POSSESSIVE_ADJ_UNIT]) {
    if (!namesUnit(LEARNER_TEXT, u)) die(`${u} is a boundary this lesson leans on and is never named`);
  }

  // a2.33 RESERVED THESE TWENTY-ONE FORMS FOR THIS UNIT BY NAME and asserted
  // they appear nowhere in a2.33. This is the other half of that hand-off: this
  // lesson must actually teach them. Asserted as a POSITIVE, which is the
  // direction nobody checks.
  {
    const missing = A233_RESERVED.filter((f) => !LEARNER_TEXT.toLowerCase().includes(f.toLowerCase()));
    if (missing.length > 3) {
      die(`${DEMONSTRATIVE_UNIT} reserved 21 forms for this unit and ${missing.length} of them reach no learner surface: ${missing.join(', ')}`);
    }
    console.log(`  ${DEMONSTRATIVE_UNIT} reserved ${A233_RESERVED.length} forms; ${A233_RESERVED.length - missing.length} reach a screen here${missing.length ? ` (absent: ${missing.join(', ')})` : ''}`);
  }
  // AND a1.17's LIST IS THE SAME TWENTY-ONE, which is worth asserting because
  // the two lists are maintained in different files by different builds.
  {
    const a = [...A117_RESERVED].sort().join('|');
    const b = [...A233_RESERVED].sort().join('|');
    if (a !== b) die(`a1.17 reserved list and a2.33 reserved list have drifted apart, and this unit is the one that has to satisfy both:\n    a1.17: ${a}\n    a2.33: ${b}`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE BAND'S TENSE CEILING, AND THE PRONOUNS a2.25 OWNS
   * ══════════════════════════════════════════════════════════════════════ */

  const FR_KEYS = new Set(['fr', 'ai', 'user', 'text', 'promptSound', 'promptLabel', 'answer', 'prompt', 'say', 'wrong', 'right', 'back', 'word']);
  const frenchStrings = (v: unknown, out: string[] = []): string[] => {
    if (Array.isArray(v)) { v.forEach((x) => frenchStrings(x, out)); return out; }
    if (v && typeof v === 'object') {
      for (const [k, x] of Object.entries(v)) {
        if (typeof x === 'string' && FR_KEYS.has(k)) out.push(x);
        else frenchStrings(x, out);
      }
      return out;
    }
    return out;
  };
  const FRENCH = [
    ...frenchStrings(LESSON.sections), ...frenchStrings(LESSON.drills ?? []),
    ...frenchStrings(LESSON.terms ?? {}), ...frenchStrings(LESSON.sheets ?? []),
    ...ALL_ROWS.map((r) => r.fr),
  ];
  if (FRENCH.length < 150) die(`the French walk produced ${FRENCH.length} strings, which is too few to be real`);

  /** Anchored on verb STEMS, not on endings. An ending alone reads half the
   *  French lexicon as a verb. */
  const tenseHit = (s: string): string | null => {
    for (const t of OUT_OF_BAND_TENSES) {
      const rx = new RegExp(`(?<![\\p{L}\\p{N}-])(?:${t.stems.join('|')})(?:${t.endings.join('|')})(?![\\p{L}\\p{N}'’-])`, 'iu');
      const m = s.match(rx);
      if (m) return `${t.name}: "${m[0]}"`;
    }
    return null;
  };
  const enYHit = (s: string): string | null => {
    for (const p of PRONOMINAL_EN_Y) if (hasWord(s, p)) return p;
    return null;
  };

  for (const s of FRENCH) {
    const t = tenseHit(s);
    if (t) die(`${t} on a French learner surface, and A2 teaches no tense past the passé composé and the futur proche: "${s.slice(0, 80)}"`);
    const e = enYHit(s);
    if (e) die(`the pronominal "${e}" belongs to a2.25 and reaches a learner surface: "${s.slice(0, 80)}"`);
  }
  for (const s of MUST_FIRE.tense) if (!tenseHit(s)) die(`the tense guard does not fire on "${s}"`);
  for (const s of MUST_NOT_FIRE.tense) if (tenseHit(s)) die(`the tense guard fires on "${s}", which contains no out-of-band verb`);
  for (const s of MUST_FIRE.enY) if (!enYHit(s)) die(`the en/y guard does not fire on "${s}"`);
  for (const s of MUST_NOT_FIRE.enY) if (enYHit(s)) die(`the en/y guard fires on "${s}", where en is the PREPOSITION`);
  console.log(`  tense + en/y ceiling: ${FRENCH.length} French strings clear`);

  /* ══════════════════════════════════════════════════════════════════════
   *  THE CORPUS
   * ══════════════════════════════════════════════════════════════════════ */

  // THE EIGHTEEN PUBLISHED HEADWORDS ARE IMPORTED IDS, ASSERTED BY ID, NOT
  // RE-AUTHORED. The prompt asks for five; corpus §A.1 measured eighteen.
  if (IMPORTED.headwords.length !== 18) die(`the headword list holds ${IMPORTED.headwords.length} and the corpus publishes 18`);
  for (const id of IMPORTED.headwords) {
    if (!ITEM_IDS.includes(id)) die(`${id} is one of the eighteen headwords and the lesson does not carry it`);
    if (ALL_ROWS.some((r) => r.id === id)) die(`${id} is imported and authored at the same time`);
  }
  // NOT ONE OF THE EIGHTEEN IS RE-AUTHORED AS A HEADWORD.
  const PUBLISHED_FORMS = [
    'le mien', 'la mienne', 'les miens', 'les miennes',
    'le tien', 'la tienne', 'les tiennes',
    'le sien', 'la sienne', 'les siens', 'les siennes',
    'le nôtre', 'les nôtres', 'le vôtre', 'les vôtres', 'les leurs',
  ];
  for (const f of PUBLISHED_FORMS) {
    if (ALL_ROWS.some((r) => r.kind !== 'sentence' && r.fr === f)) die(`"${f}" is re-authored as a headword and it already exists in ${THEME}`);
  }
  // AND EXACTLY ONE IS AUTHORED: `les tiens`, the single absent cell.
  {
    const authoredHeadwords = ALL_ROWS.filter((r) => r.kind !== 'sentence');
    if (authoredHeadwords.length !== 1) die(`${authoredHeadwords.length} headwords authored; corpus §A.2 measured exactly one absent cell`);
    if (authoredHeadwords[0].fr !== 'les tiens') die(`the one authored headword is "${authoredHeadwords[0].fr}" and the measured gap is "les tiens"`);
  }

  // THE THREE-FORM FAMILIES: the plural is ONE row for both genders, which is
  // the entire claim of act 3.
  for (const f of THREE_FORM_FAMILIES) {
    for (const id of [f.singularF, f.plural].filter(Boolean) as string[]) {
      if (!ALL_ROWS.some((r) => r.id === id)) die(`${id} is part of the ${f.stem} family and is missing`);
    }
    for (const id of [f.headwordM, f.headwordPl]) {
      if (!ITEM_IDS.includes(id)) die(`${id} is the published ${f.stem} headword and the lesson does not carry it`);
    }
  }
  // AND THE PROOF: a masculine plural noun and a feminine plural noun taking the
  // identical form.
  {
    const m = ALL_ROWS.find((r) => r.id === LEUR_PLURAL_PAIR.masculine);
    const f = ALL_ROWS.find((r) => r.id === LEUR_PLURAL_PAIR.feminine);
    if (!m || !f) die('the leur plural pair is missing');
    if (!hasWord(m.fr, LEUR_PLURAL_PAIR.form) || !hasWord(f.fr, LEUR_PLURAL_PAIR.form)) {
      die(`the leur plural pair does not show "${LEUR_PLURAL_PAIR.form}" on both halves`);
    }
    if (m.fr === f.fr) die('the leur plural pair is one sentence twice, so it proves nothing about gender');
  }

  // THE DICTÉE IS LETTERS MODE, through the real function.
  if (DICTEE_IDS.length < 6) die(`only ${DICTEE_IDS.length} dictée targets, which is thin for a lesson whose whole agreement is written`);
  for (const id of DICTEE_IDS) {
    const row = ALL_ROWS.find((r) => r.id === id)!;
    const mode = dicteeMode(row.fr);
    if (mode !== DICTEE_MODE_EXPECTED) die(`${id} "${row.fr}" resolves to ${mode} mode, and word mode hands every real word over pre-spelled`);
  }
  {
    const d = sec('s18-dictee') as { itemIds?: string[] } | undefined;
    if (!d) die('s18-dictee is missing');
    if ((d.itemIds ?? []).join(',') !== DICTEE_IDS.join(',')) die('the dictation section and DICTEE_IDS disagree');
    // AND IT TESTS THE AGREEMENT, which is the only thing fold() can see here.
    const targets = DICTEE_IDS.map((id) => ALL_ROWS.find((r) => r.id === id)!.fr).join('\n');
    for (const f of ['le mien', 'la mienne', 'les miens', 'les miennes']) {
      if (!targets.includes(f)) die(`the dictée does not ask the learner to write "${f}", and the -e and -s are the only things fold() can see`);
    }
  }

  // REACHABILITY, BOTH DIRECTIONS.
  const released = new Set(DECK_TRANCHE.flat());
  for (const id of NOT_DECK_ABLE) {
    if (released.has(id)) die(`${id} is dictation-only or sentence-only and a tranche releases it, which draws nothing`);
  }
  const named = new Set<string>();
  for (const s of LESSON.sections) for (const v of collectIds(s)) named.add(v);
  for (const d of LESSON.drills ?? []) for (const v of (d as { items?: string[] }).items ?? []) named.add(v);
  for (const t of Object.values(LESSON.terms ?? {})) {
    for (const ex of (t as { examples?: Array<{ itemId?: string }> }).examples ?? []) if (ex.itemId) named.add(ex.itemId);
  }
  for (const id of NOT_DECK_ABLE) {
    if (!named.has(id)) die(`${id} can never be released by a tranche and no section, drill or term names it, so it is on no screen at all`);
  }
  for (const id of ITEM_IDS) {
    if (!released.has(id) && !named.has(id)) die(`${id} is neither released nor named, so a learner never sees it`);
  }
  // THE ROWS DELIBERATELY LEFT BEHIND STAY LEFT BEHIND.
  for (const n of NOT_IMPORTED) {
    if (ITEM_IDS.includes(n.id)) die(`${n.id} is on the do-not-import list (${n.why}) and the lesson carries it`);
  }

  // DISPLAY PARITY: where the copy IS the teaching, the section carries the
  // row's `fr` verbatim.
  for (const p of DISPLAY_PARITY) {
    const s = sec(p.section);
    if (!s) die(`DISPLAY_PARITY names ${p.section}, which is not a section`);
    const row = ALL_ROWS.find((r) => r.id === p.itemId) ?? null;
    if (!row) die(`DISPLAY_PARITY names ${p.itemId}, which this build does not author`);
    if (!strs(s).some((t) => t.includes(row.fr))) {
      die(`${p.section} no longer carries ${p.itemId} verbatim ("${row.fr}") — ${p.why}`);
    }
  }
  // AND EVERY groupDrill ITEM SAYS WHAT ITS ROW SAYS, which is the seed-wide
  // rule in `production-surface.test.ts`. Checked here too so a failure names
  // this build rather than arriving as a whole-seed red.
  for (const s of LESSON.sections) {
    for (const g of ((s as { groups?: Array<{ items?: Array<{ itemId?: string; fr?: string }> }> }).groups ?? [])) {
      for (const it of g.items ?? []) {
        if (!it.itemId || !it.fr) continue;
        const row = ALL_ROWS.find((r) => r.id === it.itemId);
        if (!row) continue;  // imported rows are checked against Postgres below
        if (!fold(row.fr).includes(fold(it.fr))) {
          die(`${(s as { id?: string }).id} shows "${it.fr}" and ${it.itemId} says "${row.fr}"`);
        }
      }
    }
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE GENERALISATION, AND WHAT MUST STAY UNSEEN
   * ══════════════════════════════════════════════════════════════════════ */

  {
    const s = sec('s08-unseen') as { groups?: Array<{ items?: unknown[]; check?: { opts?: string[]; correct?: number } }> } | undefined;
    if (!s) die('s08-unseen is missing, and doctrine §B.1 is the reason it exists');
    const control = (s.groups ?? []).find((g) => (g.items ?? []).length === 0);
    if (!control) die('s08-unseen has no control page, which is the house pattern for a generalisation check');
    const opts = control.check?.opts ?? [];
    const keyed = opts[control.check?.correct ?? -1] ?? '';
    if (!keyed.includes(UNSEEN.answer)) die(`the control check keys on "${keyed}" and the unseen noun forces "${UNSEEN.answer}"`);
  }
  // The unseen noun appears NOWHERE except the places that ask for it, and in no
  // row this lesson authors or imports.
  for (const r of ALL_ROWS) {
    if (hasWord(`${r.fr} ${r.en}`, UNSEEN.noun)) die(`${r.id} carries "${UNSEEN.noun}", which must stay unseen`);
  }
  {
    const asks = LESSON.sections.filter((s) => strs(s).some((t) => hasWord(t, UNSEEN.noun))).map((s) => (s as { id?: string }).id);
    if (asks.length !== 2 || !asks.includes('s08-unseen') || !asks.includes('s22-quiz')) {
      die(`"${UNSEEN.noun}" appears in ${asks.join(', ') || 'no section'}; it may appear only in s08-unseen and s22-quiz, which are the two that ask for it`);
    }
  }
  // AND THE PROMPT'S OTHER REQUIREMENT: at least one QUIZ item uses a noun
  // absent from the lesson's own vocabulary.
  {
    const qs0 = quizQuestions(sec('s22-quiz') as never) as Array<Record<string, unknown>>;
    if (!qs0.some((q) => hasWord(strs(q).join(' '), UNSEEN.noun))) {
      die(`no quiz question uses "${UNSEEN.noun}", and the prompt asks for at least one item on a noun absent from the lesson vocabulary`);
    }
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  WHAT `fold()` CAN AND CANNOT SEE
   * ══════════════════════════════════════════════════════════════════════ */

  for (const [a, b] of NEAR_MISSES) {
    if (fold(a) === fold(b)) die(`NEAR_MISSES claims "${a}" and "${b}" survive fold() and they do not`);
  }
  for (const [a, b] of FOLD_COLLISIONS) {
    if (fold(a) !== fold(b)) die(`FOLD_COLLISIONS claims "${a}" and "${b}" collide under fold() and they no longer do`);
  }

  const quizSection = sec('s22-quiz');
  if (!quizSection) die('s22-quiz is missing');
  const qs = quizQuestions(quizSection as never) as Array<Record<string, unknown>>;
  if (qs.length !== 30) die(`the quiz holds ${qs.length} questions and the A2 house shape is 30`);

  // NO EAR QUESTION MAY OFFER TWO MEMBERS OF ONE HOMOPHONE GROUP. Corpus §A.5:
  // the groups are the SINGULAR against its own PLURAL, because the -s is
  // silent on all eighteen forms — NOT the masculine against the feminine,
  // which is the one contrast the ear can settle and which the prompt has
  // backwards.
  for (const q of qs) {
    const opts = (q.opts as string[] | undefined) ?? [];
    const heard = q.format === 'listenChoose' || !!q.say;
    if (!heard) continue;
    for (const group of HOMOPHONE_FORMS) {
      const present = group.filter((g) => opts.some((o) => hasWord(o, g)));
      if (present.length > 1) die(`the ear question "${q.q}" offers ${present.join(' and ')}, which are one sound`);
    }
    for (let i = 0; i < opts.length; i++) {
      for (let j = i + 1; j < opts.length; j++) {
        for (const group of HOMOPHONE_FORMS) {
          for (const x of group) for (const y of group) {
            if (x === y || opts[i] === opts[j]) continue;
            if (opts[i].replace(x, y) === opts[j]) die(`the ear question "${q.q}" offers "${opts[i]}" against "${opts[j]}", which differ only by ${x}/${y}`);
          }
        }
      }
    }
  }
  // AND NO SCORED FREE-TEXT QUESTION MAY TURN ON THE CIRCUMFLEX, which fold()
  // strips. Trap 4 is mcq-or-nothing and the guard says so rather than the
  // report.
  for (const q of qs) {
    if (q.format === 'mcq' || q.format === 'listenChoose') continue;
    const answer = String(q.answer ?? '');
    const accept = (q.accept as string[] | undefined) ?? [];
    for (const f of CIRCUMFLEX_FORMS) {
      if (!hasWord(answer, f)) continue;
      // It is allowed to APPEAR, as long as the accept list also takes the
      // unaccented spelling: otherwise the question silently marks a learner
      // wrong for something fold() cannot see either way.
      const bare = f.replace(/ô/g, 'o');
      if (!accept.some((a) => a.includes(bare))) {
        die(`"${q.q}" is free text and keys on "${f}", whose accent fold() strips. Accept the unaccented spelling too, or make it an mcq.`);
      }
    }
  }
  // EVERY FREE-TEXT QUESTION ACCEPTS THE ANSWER IT DISPLAYS, through the real
  // fold(). a2.22's own guard compared a constant to itself; this compares the
  // DISPLAYED answer to the ACCEPT list.
  for (const q of qs) {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') continue;
    const answer = String(q.answer ?? '');
    const accept = (q.accept as string[] | undefined) ?? [];
    if (!accept.length) die(`"${q.q}" is free text and has no accept list`);
    if (!accept.some((a) => fold(a) === fold(answer))) die(`"${q.q}" displays "${answer}" and does not accept it`);
  }
  // Every question has a `why` and a `ref` that resolves.
  for (const q of qs) {
    if (!q.why) die(`"${q.q}" has no why`);
    if (!q.ref || !sectionIds.has(String(q.ref))) die(`"${q.q}" refs "${q.ref}", which is not a section in this lesson`);
  }
  {
    const mix: Record<string, number> = {};
    for (const q of qs) mix[String(q.format)] = (mix[String(q.format)] ?? 0) + 1;
    if ((mix.mcq ?? 0) > qs.length / 2) die(`the quiz is ${mix.mcq}/${qs.length} mcq, and at most half may be`);
    // THE PROMPT ASKS FOR typeIn-WEIGHTED and the band's own figure is 32%.
    if ((mix.typeIn ?? 0) <= (mix.mcq ?? 0)) die(`the quiz is ${mix.typeIn} typeIn against ${mix.mcq} mcq, and the prompt asks for it weighted toward typeIn`);
    console.log(`  quiz: ${qs.length} questions, ${JSON.stringify(mix)}`);
  }
  // AND EVERY typeIn ON AGREEMENT FIXES THE GENDER AND NUMBER IN THE STEM,
  // which the prompt asks for by name. Checked on the four-cell questions.
  {
    const CELL_ANSWERS = ['le mien', 'la mienne', 'les miens', 'les miennes'];
    for (const q of qs) {
      if (q.format !== 'typeIn') continue;
      const a = String(q.answer ?? '').toLowerCase();
      if (!CELL_ANSWERS.some((c) => a.includes(c))) continue;
      const stem = String(q.q ?? '').toLowerCase();
      const fixes = /masculine|feminine|plural|singular|it's mine|they're mine/.test(stem);
      if (!fixes) die(`"${q.q}" is a typeIn on agreement and its stem does not fix the owned noun gender and number`);
    }
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  HOUSE COPY
   * ══════════════════════════════════════════════════════════════════════ */

  // THE JARGON WALK COVERS `intro` AND `overview` (Corrections §9), runs over a
  // RAW walk so it sees `sub` (Corrections §13), and checks the `-s` PLURAL of
  // every entry, because `hasPhrase` is boundary-exact and a2.15 shipped
  // "paradigms" past a list holding "paradigm".
  for (const j of JARGON) {
    for (const form of [j, `${j}s`]) {
      if (hasWord(LEARNER_TEXT, form)) die(`"${form}" is grammar jargon and reaches a learner surface`);
    }
  }
  if (JARGON.some((j) => hasWord(LESSON.intro ?? '', j))) die('intro carries jargon, and it is drawn on the lesson cover');
  // Corrections §14.5: `possessive` is house vocabulary, not jargon. Guard the
  // RATIO so the plain phrase outnumbers the technical one.
  {
    const plain = countOf(LEARNER_TEXT, PLAIN_PHRASE);
    const tech = countOf(LEARNER_TEXT, TECHNICAL_WORD) + countOf(LEARNER_TEXT, `${TECHNICAL_WORD}s`);
    if (plain <= tech) die(`"${PLAIN_PHRASE}" appears ${plain} times against ${tech} for "${TECHNICAL_WORD}"; the house prefers the plain phrase`);
    console.log(`  plain phrase ${plain} vs technical ${tech}`);
  }
  // `\bhonest` CANNOT SEE "dishonest" (a2.06). Fire on the SUBSTRING.
  for (const t of strs(LESSON)) {
    for (const b of BANNED_SUBSTRINGS) {
      if (t.toLowerCase().includes(b.toLowerCase())) die(`"${b}" appears in "${t.slice(0, 70)}"`);
    }
  }
  for (const t of ALL_ROWS.flatMap((r) => [r.fr, r.en ?? ''])) {
    for (const b of BANNED_SUBSTRINGS) if (t.toLowerCase().includes(b.toLowerCase())) die(`"${b}" appears in a corpus row: "${t}"`);
  }
  for (const c of FORBIDDEN_CLAIMS) {
    if (LEARNER_TEXT.toLowerCase().includes(c)) die(`AI-tell phrasing: "${c}"`);
  }
  // THE DOUBLE-STOP GUARD IS A SENTENCE-FINAL STOP FOLLOWED BY ANY
  // PUNCTUATION, not two dots (a2.22).
  for (const t of strs(LESSON)) {
    if (/[.!?][.,!?;:]/.test(t.replace(/\.\.\./g, ''))) die(`double punctuation in "${t.slice(0, 70)}"`);
  }
  // U+203F RENDERS AS A LOW UNDERSCORE ON A PIXEL 6. Not one reaches a screen,
  // and this lesson creates five liaisons, which is where one would come from.
  for (const t of [...strs(LESSON), ...ALL_ROWS.map((r) => r.respell ?? '')]) {
    if (t.includes(TIE_GLYPH)) die(`U+203F reaches a learner surface in "${t.slice(0, 70)}"; it draws as an underscore`);
  }
  // Dead fields.
  for (const f of DEAD_AUDIO_FIELDS) if (f in (LESSON.audio ?? {})) die(`Lesson.audio.${f} is read by no renderer`);
  for (const f of DEAD_LESSON_FIELDS) if (f in LESSON) die(`Lesson.${f} draws nothing`);
  // `practice` with `skill: 'write'` DRAWS NO WRITING SURFACE.
  for (const s of LESSON.sections) {
    if (s.type === 'practice' && (s as { skill?: string }).skill === 'write') die("practice skill:'write' draws no writing surface");
  }

  // THE REFRAME, against an EXPLICIT CONSTANT rather than a derived figure.
  {
    const n = strs(LESSON).filter((t) => t.includes(REFRAME)).length;
    if (n !== REFRAME_COUNT) die(`the reframe is carried ${n} times and REFRAME_COUNT says ${REFRAME_COUNT}`);
    console.log(`  reframe carried ${n} times`);
  }

  // THE SHAPE, AND THE OWNS OUTWEIGHING THE SCENE AND THE TRAP.
  if (LESSON.sections.length !== 24) die(`${LESSON.sections.length} missions; the measured A2 house shape is 24`);
  {
    const acts = LESSON.acts ?? [];
    const of = (id: string) => (acts.find((a) => a.id === id)?.sections ?? []).length;
    const owns = of('act2') + of('act3');
    const rest = of('act1') + of('act4');
    if (owns <= rest) die(`the Owns is ${owns} missions and the scene plus the trap is ${rest}; doctrine §B.5 wants the Owns heavier`);
    console.log(`  acts: ${acts.map((a) => `${a.id}=${a.sections.length}`).join(' ')}  owns=${owns} vs scene+trap=${rest}`);
  }
  // ONE tapTable IN THE FLOW AND NO table ANYWHERE IN `sections`.
  {
    const tap = LESSON.sections.filter((s) => s.type === 'tapTable');
    if (tap.length !== 1) die(`${tap.length} tapTables in the flow; the prompt asks for one`);
    const rows = ((tap[0] as { rows?: unknown[] }).rows ?? []).length;
    if (rows > 6) die(`the tapTable has ${rows} rows and six is the Pixel 6 ceiling`);
    if (LESSON.sections.some((s) => s.type === 'table')) die('a table at layer core is a density failure and draws in the flow');
    const sheetTables = (LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? []).filter((x) => x.type === 'table'));
    if (sheetTables.length !== 1) die(`${sheetTables.length} tables in the reference sheet; the prompt asks for one`);
    for (const t of sheetTables) {
      const cols = ((t as { cols?: unknown[] }).cols ?? []).length;
      if (cols > 3) die(`the sheet table has ${cols} columns and a Pixel 6 cuts the fourth off with no affordance (a2.08)`);
    }
  }
  // THREE TERM CHIPS PER SECTION, MAXIMUM.
  for (const s of LESSON.sections) {
    const n = ((s as { terms?: string[] }).terms ?? []).length;
    if (n > 3) die(`${(s as { id?: string }).id} declares ${n} term chips and the renderer shows three`);
  }
  // `commonErrors` NEEDS `swipe`, or it draws a blank screen.
  for (const s of LESSON.sections) {
    if (s.type === 'commonErrors' && !(s as { swipe?: boolean }).swipe) die(`${(s as { id?: string }).id} is commonErrors without swipe and draws nothing`);
  }

  console.log(`\n  offline guards: all clear (${ALL_ROWS.length} authored, ${IMPORT_IDS.length} imported)`);

  /* ══════════════════════════════════════════════════════════════════════
   *  THE DATABASE
   * ══════════════════════════════════════════════════════════════════════ */

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    // IDENTITY, BYTE FOR BYTE, AND THIS BUILD CHANGES NONE OF IT.
    //
    // `content_units` IS NOT A COLUMNAR UNIT TABLE. The unit's own fields live
    // inside `body` as jsonb, keyed by `kind='curriculum_unit'`. Lessons live in
    // the SAME table under `kind='lesson'`, keyed by slug.
    const unitRow = await c.query<{ body: Record<string, unknown> }>(
      "select body from content_units where kind='curriculum_unit' and body->>'id'=$1", [UNIT.id]);
    if (unitRow.rowCount !== 1) die(`${UNIT.id} is not in content_units`);
    const unit = unitRow.rows[0].body as {
      id: string; seq?: number | string; title?: string; sub?: string; canDo?: string;
      themes?: string[] | null; lessonIds?: string[]; prereqUnitIds?: string[];
    };
    if (unit.title !== UNIT.title) die(`unit title is "${unit.title}" and the build says "${UNIT.title}"`);
    if (unit.sub !== UNIT.sub) die(`unit sub is "${unit.sub}" and the build says "${UNIT.sub}"`);
    if (unit.canDo !== UNIT.canDo) die(`unit canDo is "${unit.canDo}" and the build says "${UNIT.canDo}"`);
    if (String(unit.seq) !== String(UNIT.seq)) die(`unit seq is ${unit.seq} and the build says ${UNIT.seq}`);
    if (!(unit.prereqUnitIds ?? []).includes(UNIT.prereqUnitIds[0])) die(`unit prereq reads ${JSON.stringify(unit.prereqUnitIds)}`);
    if ((unit.lessonIds ?? []).length && !REAPPLY) die(`${UNIT.id} already claims ${JSON.stringify(unit.lessonIds)}; this is meant to be a first build`);
    if (unit.themes != null) die(`${UNIT.id}.themes is ${JSON.stringify(unit.themes)} and this build does not create a themes array`);
    console.log(`\n  unit ${unit.id} seq ${unit.seq} "${unit.title}" / "${unit.sub}" — identity confirmed, lessonIds ${JSON.stringify(unit.lessonIds ?? [])}`);

    // THE ROW COUNT IS THE ONLY ID SIGNAL (Corrections §10).
    const before = await c.query<{ n: string }>(
      `select count(*)::text as n from content_items where theme = $1 and status = 'published'`, [THEME]);
    const beforeA2 = await c.query<{ n: string }>(
      `select count(*)::text as n from content_items where theme = $1 and id like 'fr.a2.%' and status = 'published'`, [THEME]);
    const nBefore = Number(before.rows[0].n);
    const nA2Before = Number(beforeA2.rows[0].n);
    console.log(`  ${THEME}: ${nBefore} published (${nA2Before} at fr.a2.*). The build measured ${THEME_ROWS_BEFORE} / ${THEME_A2_BEFORE}.`);
    if (nBefore !== THEME_ROWS_BEFORE || nA2Before !== THEME_A2_BEFORE) {
      console.log('  NOTE: the theme has moved since this build measured it. A concurrent lesson has landed.');
    }

    // EVERY ID IN THE BLOCK IS FREE, or this is a re-apply.
    const taken = await c.query<{ id: string }>(
      `select id from content_items where id = any($1::text[])`, [ALL_ROWS.map((r) => r.id)]);
    if (taken.rows.length && !REAPPLY) {
      die(`${taken.rows.length} id(s) in the block are already taken: ${taken.rows.slice(0, 6).map((r) => r.id).join(', ')}. `
        + 'Another build has landed inside this range. Amend the ledger and take a new block, or pass --reapply if these are yours.');
    }

    // EVERY IMPORT EXISTS, IS PUBLISHED, AND HAS THE DRILLS THE LESSON ASSUMES.
    const imp = await c.query<{ id: string; fr: string; kind: string; status: string; drills: unknown; gender: string | null; respell: string | null; level: string; en: string }>(
      `select id, fr, en, kind, status, drills, gender, respell, level from content_items where id = any($1::text[])`, [IMPORT_IDS]);
    const missing = IMPORT_IDS.filter((i) => !imp.rows.some((r) => r.id === i));
    if (missing.length) die(`${missing.length} imported row(s) are not in Postgres: ${missing.join(', ')}`);
    const unpub = imp.rows.filter((r) => r.status !== 'published');
    if (unpub.length) die(`${unpub.length} imported row(s) are not published: ${unpub.map((r) => r.id).join(', ')}`);
    // NO IMPORTED GENDERED SINGLE WORD.
    const genderedWord = imp.rows.filter((r) => r.gender && r.kind === 'word'
      && !r.fr.replace(/^(le |la |les |l'|un |une |des )/, '').includes(' '));
    if (genderedWord.length) die(`${genderedWord.length} imported row(s) are gendered single words: ${genderedWord.map((r) => r.id).join(', ')}`);
    // THE CROSS-LEVEL IMPORT, WHICH THE PROMPT ASKS TO BE CHECKED BEFORE THE
    // CORPUS IS PLANNED. Measured: eighteen b1/b2 rows, and a2.33 shipped four
    // of the same shape in this same theme one seq back.
    {
      const byLevel: Record<string, number> = {};
      for (const r of imp.rows) byLevel[r.level] = (byLevel[r.level] ?? 0) + 1;
      console.log(`  imports by level: ${JSON.stringify(byLevel)} — the lesson is a2 and no level guard exists anywhere (corpus §A.9)`);
      if (!(byLevel.b1 || byLevel.b2)) die('no b1 or b2 row is imported, and corpus §A.1 measured eighteen of them');
    }
    // The eighteen headwords really are ungendered, respelled and deck-able.
    for (const id of IMPORTED.headwords) {
      const r = imp.rows.find((x) => x.id === id)!;
      if (r.gender) die(`${id} "${r.fr}" is gendered, which is the shape that moves a1.03`);
      if (!r.respell) die(`${id} "${r.fr}" has no respelling and this lesson prints it`);
      const d = toArray(r.drills);
      if (!d.includes('flashcard') || !d.includes('voiceflash')) die(`${id} lacks flashcard or voiceflash, and both a tranche and practice need them`);
    }
    // a2.24's THREE `leur` ROWS carry flashcard, so the tranche can release them.
    for (const id of IMPORTED.leurRows) {
      const d = toArray(imp.rows.find((x) => x.id === id)!.drills);
      if (!d.includes('flashcard')) die(`${id} is released by a tranche and does not carry flashcard`);
    }
    // The nine comparative rows really are the population no deck can serve.
    for (const id of NOT_DECK_ABLE) {
      const d = toArray(imp.rows.find((x) => x.id === id)!.drills);
      if (d.includes('flashcard')) die(`${id} DOES carry flashcard, so NOT_DECK_ABLE is stale and a tranche could release it`);
    }
    // `practice skill: 'speak'` needs voiceflash on every id it names.
    {
      const p = sec('s20-speak') as { itemIds?: string[]; skill?: string } | undefined;
      if (p?.skill === 'speak') {
        const authoredIds = new Set(ALL_ROWS.map((r) => r.id));
        for (const id of p.itemIds ?? []) {
          if (authoredIds.has(id)) continue;
          const r = imp.rows.find((x) => x.id === id);
          if (!r) die(`practice names ${id}, which is neither authored nor imported`);
          if (!toArray(r.drills).includes('voiceflash')) die(`practice speaks ${id} and it has no voiceflash, so the card is silent`);
        }
      }
    }
    // EVERY groupDrill ITEM NAMING AN IMPORTED ROW SAYS WHAT THAT ROW SAYS.
    for (const s of LESSON.sections) {
      for (const g of ((s as { groups?: Array<{ items?: Array<{ itemId?: string; fr?: string }> }> }).groups ?? [])) {
        for (const it of g.items ?? []) {
          if (!it.itemId || !it.fr) continue;
          const r = imp.rows.find((x) => x.id === it.itemId);
          if (!r) continue;
          if (!fold(r.fr).includes(fold(it.fr))) die(`${(s as { id?: string }).id} shows "${it.fr}" and ${it.itemId} says "${r.fr}"`);
        }
      }
    }
    // TRAP 1's GLOSSES: the published `le sien` headword says both readings, and
    // this build leans on it rather than asserting the fact on a card alone.
    {
      const sien = imp.rows.find((x) => x.id === 'fr.b1.pronoms-essentiels.034');
      if (!sien) die('fr.b1.pronoms-essentiels.034 is the le sien headword and did not come back');
      if (!/his/i.test(sien.en) || !/her/i.test(sien.en)) {
        die(`fr.b1.pronoms-essentiels.034 glosses "${sien.en}" and trap 1 leans on it saying both`);
      }
    }
    // THE THREE-FORM CLAIM, MEASURED IN THE CORPUS RATHER THAN ASSERTED: the
    // plural of nôtre, vôtre and leur is ONE published row with no gender in the
    // gloss, where mien has two.
    for (const [id, stem] of [['fr.b2.pronoms-essentiels.005', 'nôtre'], ['fr.b2.pronoms-essentiels.008', 'vôtre'], ['fr.b2.pronoms-essentiels.012', 'leur']] as [string, string][]) {
      const r = imp.rows.find((x) => x.id === id)!;
      if (/masc|fem/i.test(r.en)) die(`${id} glosses "${r.en}", so the ${stem} plural DOES mark gender and act 3 claim is wrong`);
    }
    for (const id of ['fr.b1.pronoms-essentiels.028', 'fr.b1.pronoms-essentiels.029']) {
      const r = imp.rows.find((x) => x.id === id)!;
      if (!/masc|fem/i.test(r.en)) die(`${id} glosses "${r.en}" with no gender, so the mien plural does NOT split and act 3 contrast is gone`);
    }

    // NO DUPLICATE `fr` INSIDE THE THEME, computed the way flashhub does.
    const themeRows = await c.query<{ id: string; fr: string; kind: string }>(
      `select id, fr, kind from content_items where theme = $1 and status = 'published'`, [THEME]);
    const existing = new Map<string, string>();
    for (const r of themeRows.rows) { if (r.kind !== 'sentence') existing.set(hubNorm(r.fr), r.id); }
    for (const r of ALL_ROWS) {
      if (r.kind === 'sentence') continue;
      const prior = existing.get(hubNorm(r.fr));
      if (prior && prior !== r.id) die(`"${r.fr}" already exists in ${THEME} as ${prior}; the hub would serve one card twice`);
    }
    // AND THE FINDING THAT SHAPED THE CORPUS, ASSERTED AGAINST POSTGRES: the
    // three forms this build could not author as headwords would each have
    // collided with a published row under the hub norm.
    for (const [impossible, collidesWith] of [['la nôtre', 'le nôtre'], ['la vôtre', 'le vôtre']] as [string, string][]) {
      const prior = existing.get(hubNorm(impossible));
      if (!prior) die(`corpus §A.3 says "${impossible}" would collide with the published "${collidesWith}" and Postgres no longer holds one — the finding is stale and the headword may now be authorable`);
    }

    // THE RESPELL REPAIRS, ALL THREE STATES, through the real checker.
    // Corrections §6 as amended by §14.1 wants ONE table carrying `half`, with
    // `blind` and `house` as SEPARATE, mutually exclusive reasons.
    const rep = await c.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where id = any($1::text[])`, [REPAIR_IDS]);
    for (const r of RESPELL_REPAIRS) {
      const cur = rep.rows.find((x) => x.id === r.id);
      if (!cur) die(`${r.id} is a repair target and is not in Postgres`);
      if (cur.respell !== r.from && cur.respell !== r.to) {
        die(`${r.id} reads "${cur.respell}", and the table expects "${r.from}" before or "${r.to}" after`);
      }
      // STATE 1: does the checker see the stored value?
      const seesFrom = hasPlainNasalFor(r.fr, r.from);
      if (seesFrom === r.blind) die(`${r.id} is marked blind:${r.blind} and the checker ${seesFrom ? 'DOES' : 'does not'} flag "${r.from}"`);
      // STATE 2: the minimal repair is clean.
      if (hasPlainNasalFor(r.fr, r.half)) die(`${r.id}: the checker still flags the half-repair "${r.half}"`);
      // STATE 3: the final value is clean.
      if (hasPlainNasalFor(r.fr, r.to)) die(`${r.id}: the checker flags the repaired "${r.to}"`);
      // AND a2.17 §14.1's THIRD REASON, kept separate: half !== to means the
      // minimal repair was not the house value.
      if ((r.half !== r.to) !== r.house) {
        die(`${r.id}: half ${r.half === r.to ? 'equals' : 'differs from'} to and house is ${r.house}. The two must agree, or the two reasons have been conflated.`);
      }
    }
    // THE SPLIT ITSELF: five masculine rows where the minimal repair IS the
    // house value, and six feminine rows where it is clean and WRONG.
    {
      const nasal = RESPELL_REPAIRS.filter((r) => !r.house);
      const oral = RESPELL_REPAIRS.filter((r) => r.house);
      if (nasal.length !== 5 || oral.length !== 6) die(`the repair table splits ${nasal.length}/${oral.length} and corpus §E measured 5 nasal / 6 oral`);
      // AND THE HARM IS REAL: on the oral rows the minimal repair collapses the
      // feminine onto the masculine, which is the one contrast the ear can
      // settle. Asserted rather than described.
      for (const r of oral) {
        const masc = RESPELL_REPAIRS.find((m) => !m.house && m.half.split(' ')[1] === r.half.split(' ')[1]);
        if (!masc) continue;
        if (masc.to.split(' ')[1] !== r.half.split(' ')[1]) {
          die(`${r.id}: the half-repair "${r.half}" was expected to collide with ${masc.id}'s final "${masc.to}", and corpus §E claim that it does is the reason this row is house:true`);
        }
      }
    }
    // The house value was READ OFF a published row, not invented (a2.15 §13).
    const src = await c.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where id = any($1::text[])`, [REPAIR_SOURCES]);
    if (src.rows.length !== REPAIR_SOURCES.length) die(`${REPAIR_SOURCES.length - src.rows.length} repair source row(s) are missing from Postgres`);
    for (const s of src.rows) {
      const up = (s.respell ?? '').toUpperCase();
      if (!HOUSE_ENDINGS.some((e) => up.endsWith(e))) {
        die(`${s.id} "${s.fr}" respells "${s.respell}", which does not end in ${HOUSE_ENDINGS.join(' or ')}. It was named as the evidence for the house ending and it no longer is.`);
      }
    }
    // AND EVERY REPAIR THAT NEEDED A HOUSE VALUE USES IT. This is the half that
    // proves the value was read off rather than invented: the six oral rows are
    // exactly the ones whose minimal repair is not the house form, and all six
    // land on the ending the sources carry.
    for (const r of RESPELL_REPAIRS) {
      if (!r.house) continue;
      if (!r.to.toUpperCase().endsWith(HOUSE_ENDING)) {
        die(`${r.id} is house:true and repairs to "${r.to}", which does not end in ${HOUSE_ENDING} — the value the published sources carry`);
      }
    }
    // AND THE TWO ROWS DELIBERATELY NOT REPAIRED still read what the file says
    // they read, so a silence does not become an oversight.
    {
      const nr = await c.query<{ id: string; respell: string | null }>(
        `select id, respell from content_items where id = any($1::text[])`, [NOT_REPAIRED.map((n) => n.id)]);
      for (const n of NOT_REPAIRED) {
        const row = nr.rows.find((x) => x.id === n.id);
        if (!row) die(`${n.id} is on the not-repaired list and is not in Postgres`);
        if (row.respell !== n.respell) die(`${n.id} now reads "${row.respell}" and the not-repaired note says "${n.respell}" — somebody else has repaired it and the note is stale`);
      }
    }

    if (DRY_RUN) {
      console.log('\n  --dry: every guard passed and nothing was written.\n');
      return;
    }

    /* ── THE WRITE ────────────────────────────────────────────────────── */

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
            (r as { gender?: string }).gender ?? null, r.notes ?? null, r.tags ?? [], r.drills ?? [], r.version ?? 1],
        );
      }
      // THE ELEVEN REPAIRS. `respell` ONLY. Nothing else about those rows is
      // touched, so none of them can move a1.03's ending population.
      for (const r of RESPELL_REPAIRS) {
        const up = await c.query('update content_items set respell=$1, updated_at=now() where id=$2', [r.to, r.id]);
        if (up.rowCount !== 1) throw new Error(`the repair of ${r.id} touched ${up.rowCount} rows, expected 1`);
      }
      // THE LESSON IS A `content_units` ROW WITH kind='lesson', KEYED BY SLUG.
      await c.query(
        `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
         values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
         on conflict (slug) do update set title=excluded.title, level=excluded.level,
           body=excluded.body, status='published', updated_at=now()`,
        [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)],
      );
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

    /* ── READ BACK AND PROVE IT ───────────────────────────────────────── */

    const after = await c.query<{ n: string }>(
      `select count(*)::text as n from content_items where theme = $1 and status = 'published'`, [THEME]);
    const afterA2q = await c.query<{ n: string }>(
      `select count(*)::text as n from content_items where theme = $1 and id like 'fr.a2.%' and status = 'published'`, [THEME]);
    const nAfter = Number(after.rows[0].n);
    const expected = nBefore + ALL_ROWS.filter((r) => !taken.rows.some((t) => t.id === r.id)).length;
    console.log(`\n  ${THEME}: ${nBefore} -> ${nAfter} published (+${nAfter - nBefore}, authored ${ALL_ROWS.length})`);
    console.log(`  ${THEME} a2 slice: ${nA2Before} -> ${Number(afterA2q.rows[0].n)}`);
    if (nAfter !== expected && !REAPPLY) {
      die(`the theme moved by ${nAfter - nBefore} and this build authored ${ALL_ROWS.length}. Something else landed during the apply.`);
    }
    for (const r of RESPELL_REPAIRS) {
      const back = await c.query<{ fr: string; respell: string | null }>('select fr, respell from content_items where id = $1', [r.id]);
      if (back.rows[0]?.respell !== r.to) die(`${r.id} reads back "${back.rows[0]?.respell}", expected "${r.to}"`);
      if (hasPlainNasalFor(back.rows[0].fr, back.rows[0].respell ?? '')) die(`${r.id} reads back a value the checker flags`);
    }
    const lessonBack = await c.query<{ slug: string }>(
      "select slug from content_units where kind='lesson' and slug=$1", [LESSON.id]);
    if (!lessonBack.rows.length) die(`${LESSON.id} is not in content_units after the write`);
    const unitBack = await c.query<{ body: { lessonIds?: string[] } }>(
      "select body from content_units where kind='curriculum_unit' and body->>'id'=$1", [UNIT.id]);
    if (!(unitBack.rows[0].body.lessonIds ?? []).includes(LESSON.id)) die(`${UNIT.id} does not claim ${LESSON.id}`);

    console.log(`  ${LESSON.id} applied, ${ALL_ROWS.length} rows written, ${RESPELL_REPAIRS.length} respellings repaired`);
    console.log(`  ${UNIT.id}.lessonIds = ${JSON.stringify(unitBack.rows[0].body.lessonIds)}`);
    console.log('\n  NEXT: pnpm tsx scripts/merge-pronoms-possessifs-into-seed.ts\n');
  } finally {
    c.release();
    await pool.end();
  }
}

/** Every id-shaped string a section names, wherever it hides: `itemIds`,
 *  `practiceOn`, a groupDrill item's `itemId`, a term example. */
function collectIds(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (/^fr\.[a-z0-9]+\./.test(v)) out.push(v); return out; }
  if (Array.isArray(v)) { v.forEach((x) => collectIds(x, out)); return out; }
  if (v && typeof v === 'object') { Object.values(v).forEach((x) => collectIds(x, out)); return out; }
  return out;
}

const hubNorm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();

main();
