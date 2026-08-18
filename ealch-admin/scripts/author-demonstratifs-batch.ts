// a2.33.l1 « Les démonstratifs » — apply to Postgres.
//
//   pnpm content:demonstratifs --dry     guards only, writes nothing
//   pnpm content:demonstratifs           applies
//
// POSTGRES FIRST, SEED SECOND. Run merge-demonstratifs-into-seed.ts after this,
// or the lesson exists in the database and nowhere the app can read it.
//
// DO NOT run author-full-curriculum-spine.ts. A naive re-run would revert 74 of
// 75 unit titles, which is what spine-drift.test.ts exists to catch. This build
// changes NO spine field: `a2.33` already reads exactly as the prompt's
// measured identity block, verified against `content_units` below.
//
// DO NOT run content:publish from here. Doctrine §C: publishing is not part of
// a lesson build, and content:parity must be read first.
//
// THIS BUILD WRITES TWO RESPELL REPAIRS TO ROWS IT DOES NOT OWN. Both are b1
// rows in this lesson's own home theme and both write the open e as English
// orthography (`sell-LAH`) where the convention says `EH`. Nothing else about
// those rows is touched: not `gender`, not `kind`, not `drills`, so neither can
// move a1.03's measured ending population. See corpus §E.
import './env';
import {
  ALL_ROWS, UNIT, THEME, LESSON_ID, E, ID_FIRST, ID_LAST,
  THEME_ROWS_BEFORE, THEME_A2_BEFORE,
  IMPORT_IDS, IMPORTED, NOT_DECK_ABLE, DICTEE_IDS, DICTEE_MODE_EXPECTED,
  RESPELL_REPAIRS, REPAIR_IDS, REPAIR_SOURCES,
  GRID_CELLS, CI_LA_CELLS, BOTH_CELLS, VOWEL_PAIR, TAILS,
  A206_SHAPE, A233_SHAPE, A206_ENDS_ON_A_VERB, OBJECT_UNIT,
  WHAT_FOLLOWS, WHAT_FOLLOWS_UNIT, VOWEL_UNIT, ELISION_UNIT, ELISION_REFRAME,
  A216_REFRAME, GENDER_UNIT, POSSESSIVE_UNIT, COMPARATIVE_UNIT, COMPARATIVE_HANDOVER,
  INDIRECT_UNIT, Y_EN_UNIT,
  BARE_PRONOUNS, LEGAL_TAILS, BARE_ALLOWED_IN,
  POSSESSIVE_FORMS, OBJECT_FORMS, OBJECT_IN_IMPORTS, IMPERSONAL_FORMS, IMPERSONAL_ALLOWED_IN,
  OUT_OF_BAND_TENSES, PRONOMINAL_EN_Y,
  MUST_FIRE, MUST_NOT_FIRE, B1_NOT_IMPORTED, TIE_ROW, TIE_GLYPH,
  JARGON, PLAIN_PHRASE, TECHNICAL_WORD, BANNED_SUBSTRINGS, FORBIDDEN_CLAIMS,
  DEAD_AUDIO_FIELDS, DEAD_LESSON_FIELDS,
  NEAR_MISSES, FOLD_COLLISIONS, HOMOPHONE_FORMS, HOMOPHONE_WRITTEN_ALLOWED, DISPLAY_PARITY,
  UNSEEN, REFRAME, REFRAME_COUNT,
} from './data/demonstratifs-corpus.ts';
import { LESSON, ITEM_IDS, DECK_TRANCHE, SECTIONS } from './data/demonstratifs-lesson.ts';
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
 *  The HYPHEN stays on both sides on purpose here, and it is load-bearing:
 *  `celui` inside `celui-ci` must NOT count as a whole word, or the bare-form
 *  guard fires on every correct sentence in the lesson. */
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hasWord = (hay: string, needle: string): boolean =>
  new RegExp(`(?<![\\p{L}\\p{N}-])${esc(needle)}(?![\\p{L}\\p{N}'’-])`, 'iu').test(hay);
const countOf = (hay: string, needle: string): number =>
  (hay.match(new RegExp(`(?<![\\p{L}\\p{N}-])${esc(needle)}(?![\\p{L}\\p{N}'’-])`, 'giu')) ?? []).length;

/** THE BARE-PRONOUN SHAPE, AND IT TOOK FOUR CHECKS RATHER THAN ONE.
 *
 *  A2-TAIL-AUDIT §4 says guard the THING, not the letters. Each of the three
 *  checks after the first was added because the version before it fired on
 *  correct content, and the sentences that broke each one are in
 *  MUST_NOT_FIRE.bare so the next author does not rediscover them.
 *
 *  1. THE BOUNDARY. The house shape already refuses to match `celui` inside
 *     `celui-ci`, because its right-hand class holds `-`. That handles the two
 *     attached tails for free. It handles neither detached one: `celui de
 *     Marie` and `celui qui est sur la table` are both legal and both look
 *     like a whole word followed by a space.
 *
 *  2. THE DETACHED TAIL. So after a boundary match, is the next word one of
 *     `de`, `du`, `des`, `d'`, `que`, `qu'`, `qui`, `dont`, `où`?
 *
 *  3. THE SENTENCE HAS TO STOP THERE. The trap is a sentence that ENDS on the
 *     word; a pronoun mid-sentence with an ordinary continuation is not it.
 *     Without this the guard fired on
 *
 *         « Act 3: celui, celle, ceux, celles, and what has to follow them »
 *
 *     which is the goals card naming the four forms it is about to teach. A
 *     lesson cannot teach four words it is forbidden to list.
 *
 *  4. AND A STRING THAT IS NOTHING BUT THE FORMS IS A LABEL, NOT A SENTENCE.
 *     A `cardDeck` card headed `celui` is the form as a heading. So is
 *     `celui · celle`. Neither is a French sentence stopping early, and check
 *     3 alone cannot tell them apart, because a heading has nothing after it
 *     either. */
const WORD_TAIL_RX = /^\s+(?:d['’]|qu['’]|(?:de|des|du|que|qui|dont|où)(?![\p{L}'’]))/iu;
/** The sentence stops here: end of string, or sentence-final punctuation. */
const STOPS_RX = /^\s*(?:[.!?…]|$)/u;
/** The whole string is family members and separators, so it is a label. */
const FAMILY_ONLY_RX = /^[\s.,;:·/|]*(?:(?:celui|celle|ceux|celles)(?:-(?:ci|là))?[\s.,;:·/|]*(?:and|or|et)?[\s.,;:·/|]*)+$/iu;
/** Another member of the family immediately precedes it as a list item, so the
 *  stop belongs to the enumeration rather than to a sentence. */
const LIST_TAIL_RX = /(?:celui|celle|ceux|celles)(?:-(?:ci|là))?\s*(?:,|·|\/|\band\b|\bor\b|\bet\b)\s*$/iu;

/** 5. AND THE GUARD IS ABOUT FRENCH.
 *
 *  `Je veux celui.` is a French sentence that stopped early, which is the
 *  trap. « Why celle and not celui? » is an English question that MENTIONS two
 *  French words, which is half of every teaching surface in the product
 *  (invariants §8: English instruction, French content). Checks 1 to 4 cannot
 *  tell a mention from a use, because both end on the word.
 *
 *  So a clause carrying an English function word is English prose and the
 *  guard leaves it alone. Whole-word and accent-sensitive, so `thé` is not
 *  `the`, and deliberately short: every entry is a word that cannot appear in
 *  a French sentence at all.
 *
 *  6. PER CLAUSE, NOT PER STRING, AND THE MUTATION HARNESS FOUND THIS.
 *
 *  The version before this one asked whether the WHOLE STRING looked English
 *  and skipped it if so. A card body is English prose with French quoted
 *  inside it, so that skipped exactly the place the error would actually
 *  appear. The harness put
 *
 *      « Je prends celui. This one, the one nearer you. »
 *
 *  into a card body and the guard stayed green. It is now evaluated one
 *  sentence at a time: the first clause is French and fires, the second is
 *  English and does not. The mutation string is in MUST_FIRE.bare. */
const ENGLISH_MARKERS = [
  'the', 'and', 'is', 'are', 'was', 'you', 'your', 'this', 'that', 'these',
  'those', 'what', 'why', 'which', 'not', 'with', 'of', 'for', 'it', 'one',
  'ones', 'they', 'them', 'he', 'she', 'sentence', 'word', 'noun',
] as const;
const looksEnglish = (s: string): boolean => ENGLISH_MARKERS.some((w) => hasWord(s, w));

/** `PassagePage` splits a reading passage on the same boundary. */
const clauses = (s: string): string[] => s.split(/(?<=[.!?…])\s+/u).filter(Boolean);

const bareInClause = (s: string): boolean => {
  if (FAMILY_ONLY_RX.test(s)) return false;
  if (looksEnglish(s)) return false;
  for (const p of BARE_PRONOUNS) {
    const rx = new RegExp(`(?<![\\p{L}\\p{N}-])${esc(p)}(?![\\p{L}\\p{N}'’-])`, 'giu');
    for (const m of s.matchAll(rx)) {
      const at = m.index ?? 0;
      const after = s.slice(at + p.length);
      if (WORD_TAIL_RX.test(after)) continue;
      if (!STOPS_RX.test(after)) continue;
      if (LIST_TAIL_RX.test(s.slice(0, at))) continue;
      return true;
    }
  }
  return false;
};
const hasBarePronoun = (s: string): boolean => {
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
  // a2.08 shipped `mieux` and `le mieux` — authored in the same batch, both
  // normalising to `mieux` — past every local gate and failed the seed-wide
  // `flashhub-coverage.test.ts`. This build authors four hyphenated phrases in
  // a theme that already publishes four of their opposite numbers, so the
  // check runs against BOTH sets.
  const hubNorm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const selfSeen = new Map<string, string>();
  for (const r of ALL_ROWS) {
    if (r.kind === 'sentence') continue;
    const k = hubNorm(r.fr);
    const prior = selfSeen.get(k);
    if (prior) die(`${prior} and ${r.id} both normalise to "${k}" inside ${THEME}. The hub keys on fr per theme and would serve one card twice.`);
    selfSeen.set(k, r.id);
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
  // `a1-03-genre.test.ts`. The four phrases are hyphenated compounds and none
  // of the eight is a noun.
  for (const r of ALL_ROWS) {
    if ((r as { gender?: string }).gender) die(`${r.id} carries a gender, which is the shape that moves a1.03`);
  }

  // THE RESPELLING RULE, through the real checker rather than a copy of it.
  for (const r of ALL_ROWS) {
    if (hasPlainNasalFor(r.fr, r.respell ?? '')) die(`${r.id} "${r.fr}" -> "${r.respell}" closes a nasal with a plain n or m`);
  }

  const sec = (id: string) => LESSON.sections.find((s) => (s as { id?: string }).id === id);
  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id ?? ''));

  // `overview.titleEn` IS EXCLUDED, AND CORRECTIONS §14.5 IS WHY. It has to
  // match the unit's own English name in `content_units`, and this unit's
  // English name is "Demonstrative Adjectives and Pronouns" — two words that
  // are on the jargon list and cannot be reworded from a lesson build. It is
  // asserted equal to UNIT.title instead, immediately below, so excluding it
  // buys the guard nothing it could smuggle content through.
  const { titleEn: OVERVIEW_TITLE_EN, ...OVERVIEW_REST } = (LESSON.overview ?? {}) as Record<string, unknown>;
  if (OVERVIEW_TITLE_EN !== UNIT.title) die(`overview.titleEn is "${String(OVERVIEW_TITLE_EN)}" and content_units requires "${UNIT.title}"`);

  const LEARNER_TEXT = [
    ...strs(LESSON.sections), ...strs(LESSON.terms), ...strs(LESSON.sheets ?? []),
    LESSON.intro ?? '', ...strs(OVERVIEW_REST), ...strs(LESSON.drills ?? []),
    ...strs(LESSON.acts ?? []), ...strs(LESSON.errorTriggers ?? []),
  ].join('\n');
  const ALL_TEXT = [LEARNER_TEXT, ...ALL_ROWS.map((r) => `${r.fr} ${r.en}`)].join('\n');

  if (LEARNER_TEXT.length < 12000) die(`the learner-text walk produced ${LEARNER_TEXT.length} chars, which is too few to be real`);

  console.log(`\n  learner text: ${LEARNER_TEXT.length} chars across ${strs(LESSON.sections).length} section strings`);

  /* ══════════════════════════════════════════════════════════════════════
   *  THE OWNS, AND THE THREE REQUIRED LAYOUTS
   * ══════════════════════════════════════════════════════════════════════ */

  // LAYOUT 1: the four adjectives AND the four pronouns in ONE section, in TWO
  // ROWS. Asserted on both rows and on every one of the eight forms by name, so
  // a version that drops `ceux` fails with `ceux` rather than with a count.
  {
    const s = sec('s03-both') as { rows?: Array<{ cells: string[] }>; cols?: string[] } | undefined;
    if (!s) die('s03-both is missing, and it is required layout 1');
    const rows = s.rows ?? [];
    if (rows.length !== 2) die(`required layout 1 wants TWO rows, one per job, and has ${rows.length}`);
    const rowText = rows.map((r) => r.cells.join(' '));
    const POINTS = ['ce', 'cet', 'cette', 'ces'];
    const REPLACES = ['celui', 'celle', 'ceux', 'celles'];
    for (const f of POINTS) if (!hasWord(rowText[0], f)) die(`required layout 1 row 0 does not carry "${f}"`);
    for (const f of REPLACES) if (!hasWord(rowText[1], f)) die(`required layout 1 row 1 does not carry "${f}"`);
    // And the rows are not the same row twice: nothing that points may appear
    // in the replacing row and nothing that replaces in the pointing row.
    for (const f of REPLACES) if (hasWord(rowText[0], f)) die(`required layout 1 row 0 (points) carries "${f}", which replaces`);
    for (const f of POINTS) if (hasWord(rowText[1], f)) die(`required layout 1 row 1 (replaces) carries "${f}", which points`);
    if ((s.cols ?? []).length > 3) die(`required layout 1 has ${(s.cols ?? []).length} columns; four or more cut off on a Pixel 6`);
  }

  // LAYOUT 2: `ce livre` beside `celui-ci`, the same referent with and without
  // the noun. Asserted on the SHAPE — each card must hold a pointing form AND a
  // replacing form and the same noun must be present exactly once.
  {
    const s = sec('s04-grid') as { cards?: Array<Record<string, unknown>> } | undefined;
    if (!s) die('s04-grid is missing, and it is required layout 2');
    const cards = s.cards ?? [];
    if (cards.length !== 4) die(`required layout 2 wants four cards, one per cell, and has ${cards.length}`);
    const c0 = strs(cards[0]).join(' ');
    if (!c0.includes('Je prends ce livre.')) die('required layout 2 card 0 does not carry the noun named');
    if (!c0.includes('Je prends celui-ci.')) die('required layout 2 card 0 does not carry the same noun unnamed');
    // The noun appears in the first half and NOT in the second, which is the
    // whole claim the layout makes.
    for (const [i, card] of cards.entries()) {
      const fr = String((card as { fr?: string }).fr ?? '');
      const [named, unnamed] = fr.split(' / ');
      if (!named || !unnamed) die(`required layout 2 card ${i} is not two sentences separated by " / "`);
      const noun = named.replace(/^Je prends (ce|cet|cette|ces)\s+/, '').replace(/\.$/, '');
      if (!noun || named === noun) die(`required layout 2 card ${i} does not open on a pointing form plus a noun`);
      if (unnamed.includes(noun)) die(`required layout 2 card ${i} names "${noun}" in the half that is supposed not to`);
    }
  }

  // LAYOUT 3: `cet homme` beside `ce livre`, AUDIBLE, ONE TAP EACH.
  {
    const s = sec('s06-vowel') as { lines?: Array<{ fr: string }>; hideLines?: boolean; audio?: { recordingId?: string } } | undefined;
    if (!s) die('s06-vowel is missing, and it is required layout 3');
    const lines = (s.lines ?? []).map((l) => l.fr);
    if (!lines.includes('Regarde ce livre.')) die('required layout 3 does not carry the consonant half');
    if (!lines.includes('Regarde cet homme.')) die('required layout 3 does not carry the vowel half');
    if (lines.indexOf('Regarde cet homme.') !== lines.indexOf('Regarde ce livre.') + 1) {
      die('required layout 3 wants the two adjacent, in that order, because they are one take');
    }
    if (!s.hideLines) die('s06-vowel without hideLines is a reading exercise with a play button');
    const rec = s.audio?.recordingId;
    if (!rec) die('required layout 3 has no recordingId, so the one-take constraint has nowhere to live');
    const spec = (LESSON.audio as { recorded?: Array<{ id: string; desc: string }> } | undefined)?.recorded?.find((r) => r.id === rec);
    if (!spec) die(`${rec} is named by s06-vowel and has no entry in Lesson.audio.recorded`);
    for (const phrase of ['ONE TAKE', 'ONE VOICE', 'ADJACENTLY']) {
      if (!spec.desc.includes(phrase)) die(`${rec} desc does not say ${phrase}, and the constraint cannot be recovered once the clip is delivered`);
    }
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE QUOTATIONS
   * ══════════════════════════════════════════════════════════════════════ */

  // a2.06's ARTICLE-AGAINST-PRONOUN WORDING, VERBATIM, AND THE UNIT NAMED.
  // The string is IMPORTED from a2.06's own corpus file, so "verbatim" is
  // mechanical: a paraphrase cannot pass and a2.06 rewording fails this build.
  if (!LEARNER_TEXT.includes(A206_SHAPE)) die(`${OBJECT_UNIT}'s article-against-pronoun wording is not quoted verbatim on any learner surface`);
  if (!hasWord(LEARNER_TEXT, OBJECT_UNIT)) die(`${OBJECT_UNIT} is quoted and not named`);
  // AND ITS EXTENSION, because a2.06's sentence ends "leans on a verb", which
  // is false of these pronouns. Corpus §C.
  if (!A206_ENDS_ON_A_VERB) die(`${OBJECT_UNIT}'s sentence no longer ends on "a verb", so ${A233_SHAPE ? 'A233_SHAPE' : ''} may be quoting a sentence it no longer needs to correct. Re-read corpus §C.`);
  if (!LEARNER_TEXT.includes(A233_SHAPE)) die("a2.06's line is quoted and this lesson's own extension is not, which leaves a false rule on the card");
  {
    const i = LEARNER_TEXT.indexOf(A206_SHAPE);
    const j = LEARNER_TEXT.indexOf(A233_SHAPE);
    if (j < i) die('the extension appears before the quotation it extends');
  }

  // a2.02's RECURRING SHAPE, quoted and attributed (doctrine §B.7).
  if (!LEARNER_TEXT.includes(WHAT_FOLLOWS)) die(`« ${WHAT_FOLLOWS} » is not quoted, and this is the shape's next turn`);
  if (!hasWord(LEARNER_TEXT, WHAT_FOLLOWS_UNIT)) die(`${WHAT_FOLLOWS_UNIT} owns that line and is not named`);

  // a2.16 NAMED BY UNIT ID AS THE REASON FOR `cet`, and sons.07 beside it.
  {
    const why = sec('s07-why');
    if (!why) die('s07-why is missing, and it is where the reason for cet lives');
    const t = strs(why).join('\n');
    if (!hasWord(t, VOWEL_UNIT)) die(`${VOWEL_UNIT} is not named by unit id as the reason for cet`);
    if (!hasWord(t, ELISION_UNIT)) die(`${ELISION_UNIT} is not named beside it, and it is the same pressure a third time`);
    if (!t.includes(ELISION_REFRAME)) die(`${ELISION_UNIT}'s reframe is not quoted verbatim`);
    if (!t.includes(A216_REFRAME)) die(`${VOWEL_UNIT}'s reframe is not quoted verbatim`);
    if (!t.includes('cet homme')) die('the card naming a2.16 does not show the form it is explaining');
    // PER CARD, NOT PER SECTION, AND THE MUTATION HARNESS ASKED FOR IT. The
    // section-wide check above passes while the unit id sits on any one of the
    // three cards, so blanking it from the card that carries a2.16's reframe
    // left the guard green. The unit that owns a quotation has to be named
    // beside it, on the same card, or the learner is told a rule with no owner.
    const cards = (why as { cards?: Array<Record<string, unknown>> }).cards ?? [];
    const pairs: [string, string][] = [[A216_REFRAME, VOWEL_UNIT], [ELISION_REFRAME, ELISION_UNIT]];
    for (const [quote, owner] of pairs) {
      const card = cards.find((cd) => strs(cd).some((x) => x.includes(quote)));
      if (!card) die(`no card in s07-why quotes ${owner}'s reframe`);
      if (!hasWord(strs(card).join('\n'), owner)) die(`the card quoting ${owner}'s reframe does not name ${owner}`);
    }
  }
  // AND a2.16's THREE ADJECTIVES ARE QUOTED, NOT TAUGHT: `bel` appears once,
  // on that card, and `nouvel` and `vieil` appear nowhere at all.
  if (countOf(LEARNER_TEXT, 'bel') > 1) die('bel appears more than once, which is teaching a2.16 rather than citing it');
  for (const f of ['nouvel', 'vieil']) {
    if (hasWord(LEARNER_TEXT, f)) die(`${f} belongs to ${VOWEL_UNIT} and appears here`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE FOUR TRAPS
   * ══════════════════════════════════════════════════════════════════════ */

  // TRAP 1: no quiz option pair may differ ONLY by a member of one homophone
  // group. Enforced as a list rather than reported in prose, because a sentence
  // in a report cannot fail.
  const quizSection = sec('s22-quiz');
  if (!quizSection) die('s22-quiz is missing');
  const qs = quizQuestions(quizSection as never) as Array<Record<string, unknown>>;
  if (qs.length !== 30) die(`the quiz holds ${qs.length} questions and the A2 house shape is 30`);
  const usedAllowance = new Set<string>();
  for (const q of qs) {
    const opts = (q.opts as string[] | undefined) ?? [];
    // HEARD or READ. The rule is absolute on anything with audio behind it and
    // takes a named exception list for anything read off the page. Corpus §H.
    const heard = q.format === 'listenChoose' || !!q.say;
    const allowance = HOMOPHONE_WRITTEN_ALLOWED.find((a) => String(q.q).includes(a.stem));
    for (let i = 0; i < opts.length; i++) {
      for (let j = i + 1; j < opts.length; j++) {
        for (const group of HOMOPHONE_FORMS) {
          for (const x of group) {
            for (const y of group) {
              if (x === y) continue;
              if (opts[i] === opts[j] || opts[i].replace(x, y) !== opts[j]) continue;
              if (heard) die(`the ear question "${q.q}" offers "${opts[i]}" against "${opts[j]}", which differ only by ${x}/${y}. They are one sound and the question has no correct answer.`);
              if (!allowance) die(`"${q.q}" offers "${opts[i]}" against "${opts[j]}", which differ only by ${x}/${y}. Add it to HOMOPHONE_WRITTEN_ALLOWED with a reason, or rewrite it.`);
              if (q.format !== 'mcq') die(`"${q.q}" is on the written allowance list and is a ${q.format}. Only mcq reads its options off the page.`);
              usedAllowance.add(allowance.stem);
            }
          }
        }
      }
    }
    // AND NO EAR QUESTION MAY OFFER TWO MEMBERS OF A GROUP AT ALL, in either
    // slot, however differently the rest of the option is worded.
    if (heard) {
      for (const group of HOMOPHONE_FORMS) {
        const present = group.filter((g) => opts.some((o) => hasWord(o, g)));
        if (present.length > 1) die(`the ear question "${q.q}" offers ${present.join(' and ')}, which are one sound`);
      }
    }
  }
  // AN ALLOWANCE NOBODY USES IS A HOLE LEFT OPEN. Every entry must be spent.
  for (const a of HOMOPHONE_WRITTEN_ALLOWED) {
    if (!usedAllowance.has(a.stem)) die(`HOMOPHONE_WRITTEN_ALLOWED holds "${a.stem}" and no question needs it, so the exception is dead and should be deleted`);
  }

  // TRAP 3: NO AUTHORED CORRECT SENTENCE CARRIES A BARE PRONOUN. Permitted only
  // in the three marked sections, and there only as the error.
  for (const r of ALL_ROWS) {
    if (hasBarePronoun(r.fr)) die(`${r.id} "${r.fr}" ends on a bare pronoun, which is not French`);
  }
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    if ((BARE_ALLOWED_IN as readonly string[]).includes(sid)) continue;
    for (const t of strs(s)) {
      if (hasBarePronoun(t)) die(`${sid} carries a bare pronoun in "${t.slice(0, 70)}". Only ${BARE_ALLOWED_IN.join(', ')} may show it, and only as the error.`);
    }
  }
  for (const t of [...strs(LESSON.terms), ...strs(LESSON.sheets ?? []), ...strs(LESSON.drills ?? []), LESSON.intro ?? '', ...strs(LESSON.overview ?? {})]) {
    if (hasBarePronoun(t)) die(`a bare pronoun reaches a learner outside the three marked sections: "${t.slice(0, 70)}"`);
  }
  // AND IT REALLY IS THERE, in all three. A guard that only forbids has never
  // been tested against the thing it forbids.
  for (const sid of BARE_ALLOWED_IN) {
    const s = sec(sid);
    if (!s) die(`${sid} is on the bare-form allow list and does not exist`);
    if (!strs(s).some(hasBarePronoun)) die(`${sid} is allowed to show the bare form and does not, so the allowance is dead`);
  }
  // The two halves of the shape, proved against their own tables.
  for (const s of MUST_FIRE.bare) if (!hasBarePronoun(s)) die(`the bare-pronoun guard does not fire on "${s}"`);
  for (const s of MUST_NOT_FIRE.bare) if (hasBarePronoun(s)) die(`the bare-pronoun guard fires on "${s}", which is legal`);
  // Every legal tail is actually taught, by row.
  for (const t of TAILS) {
    if (!ITEM_IDS.includes(t.example)) die(`the "${t.tail}" tail names ${t.example}, which the lesson does not carry`);
  }

  // TRAP 4: `c'est` and `ce sont` are NAMED IN ONE PLACE AND TAUGHT NOWHERE.
  for (const s of LESSON.sections) {
    const sid = (s as { id?: string }).id ?? '';
    for (const t of strs(s)) {
      for (const f of IMPERSONAL_FORMS) {
        if (!hasWord(t, f)) continue;
        if (sid === IMPERSONAL_ALLOWED_IN) continue;
        die(`${sid} carries "${f}". Trap 4 is named in ${IMPERSONAL_ALLOWED_IN} and taught nowhere: "${t.slice(0, 70)}"`);
      }
    }
  }
  for (const r of ALL_ROWS) {
    for (const f of IMPERSONAL_FORMS) if (hasWord(r.fr, f)) die(`${r.id} carries "${f}", and no authored row may`);
  }
  {
    const roundup = strs(sec(IMPERSONAL_ALLOWED_IN)).join('\n');
    for (const f of IMPERSONAL_FORMS) if (!hasWord(roundup, f)) die(`trap 4 requires "${f}" to be NAMED, and ${IMPERSONAL_ALLOWED_IN} does not name it`);
  }
  for (const s of MUST_FIRE.impersonal) if (!IMPERSONAL_FORMS.some((f) => hasWord(s, f))) die(`the impersonal guard does not fire on "${s}"`);
  for (const s of MUST_NOT_FIRE.impersonal) if (IMPERSONAL_FORMS.some((f) => hasWord(s, f))) die(`the impersonal guard fires on "${s}", which is this lesson's own material`);

  /* ══════════════════════════════════════════════════════════════════════
   *  THE BOUNDARIES
   * ══════════════════════════════════════════════════════════════════════ */

  // NO OBJECT PRONOUN AND NO POSSESSIVE PRONOUN, ANYWHERE, INCLUDING IN AN
  // `alts` LINE. An alt is a line the learner may produce.
  for (const t of strs(LESSON)) {
    for (const f of POSSESSIVE_FORMS) {
      if (t.toLowerCase().includes(f.toLowerCase())) die(`"${f}" belongs to ${POSSESSIVE_UNIT} and appears in "${t.slice(0, 70)}"`);
    }
    for (const f of OBJECT_FORMS) {
      if (hasWord(t, f)) die(`"${f}" belongs to ${INDIRECT_UNIT} and appears in "${t.slice(0, 70)}"`);
    }
  }
  for (const s of MUST_FIRE.possessive) if (!POSSESSIVE_FORMS.some((f) => s.toLowerCase().includes(f.toLowerCase()))) die(`the possessive guard does not fire on "${s}"`);
  for (const s of MUST_NOT_FIRE.possessive) if (POSSESSIVE_FORMS.some((f) => s.toLowerCase().includes(f.toLowerCase()))) die(`the possessive guard fires on "${s}", which carries a possessive ADJECTIVE and not a pronoun`);
  for (const s of MUST_FIRE.object) if (!OBJECT_FORMS.some((f) => hasWord(s, f))) die(`the object-pronoun guard does not fire on "${s}"`);
  for (const s of MUST_NOT_FIRE.object) if (OBJECT_FORMS.some((f) => hasWord(s, f))) die(`the object-pronoun guard fires on "${s}", and half of that list is English`);
  // THE NARROWING HAS A MEASURED COST AND IT IS NAMED. Two imported rows carry
  // an object pronoun; the claim is that this lesson AUTHORS none, not that it
  // prints none, and both halves are checked rather than asserted in prose.
  for (const r of ALL_ROWS) {
    for (const f of ['lui', 'leur', 'leurs', 'me', 'te', 'se']) {
      if (hasWord(r.fr, f)) die(`${r.id} "${r.fr}" AUTHORS the object pronoun "${f}"`);
    }
  }
  for (const o of OBJECT_IN_IMPORTS) {
    if (!IMPORT_IDS.includes(o.id)) die(`${o.id} is listed as an import carrying "${o.form}" and is not imported`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE BAND'S TENSE CEILING, AND THE PRONOUNS a2.25 OWNS
   *
   *  ADDED BY THE SELF-AUDIT. Two authored French strings reached the applied
   *  lesson with no gate anywhere holding an opinion about them: the imparfait
   *  `vouliez` and the pronominal `J'en ai`. Thirty guards, 111 assertions and
   *  19 mutations were all green, because every one of them was pointed at this
   *  lesson's own material and none at the band it sits in.
   * ══════════════════════════════════════════════════════════════════════ */

  /** Fields that hold FRENCH on a learner surface. A tense guard run over the
   *  English half would fire on half the product. */
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

  /** Anchored on verb STEMS, not on endings. The audit script's own first
   *  version matched « Parfait » with an ending-only shape. */
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
    if (e) die(`the pronominal "${e}" belongs to ${Y_EN_UNIT} and reaches a learner surface: "${s.slice(0, 80)}"`);
  }
  for (const s of MUST_FIRE.tense) if (!tenseHit(s)) die(`the tense guard does not fire on "${s}"`);
  for (const s of MUST_NOT_FIRE.tense) if (tenseHit(s)) die(`the tense guard fires on "${s}", which contains no out-of-band verb`);
  for (const s of MUST_FIRE.enY) if (!enYHit(s)) die(`the en/y guard does not fire on "${s}"`);
  for (const s of MUST_NOT_FIRE.enY) if (enYHit(s)) die(`the en/y guard fires on "${s}", where en is the PREPOSITION`);
  console.log(`  tense + en/y ceiling: ${FRENCH.length} French strings clear`);
  // The next unit and the three previous ones are NAMED, once each.
  for (const u of [POSSESSIVE_UNIT, INDIRECT_UNIT, Y_EN_UNIT, GENDER_UNIT]) {
    if (!hasWord(LEARNER_TEXT, u)) die(`${u} is a boundary this lesson leans on and is never named`);
  }

  /* ══════════════════════════════════════════════════════════════════════
   *  THE CORPUS
   * ══════════════════════════════════════════════════════════════════════ */

  // ALL EIGHT HEADWORDS ARE IMPORTED IDS, ASSERTED BY ID, NOT RE-AUTHORED.
  if (IMPORTED.headwords.length !== 8) die(`the eight headwords list holds ${IMPORTED.headwords.length}`);
  for (const id of IMPORTED.headwords) {
    if (!ITEM_IDS.includes(id)) die(`${id} is one of the eight headwords and the lesson does not carry it`);
    if (ALL_ROWS.some((r) => r.id === id)) die(`${id} is imported and authored at the same time`);
  }
  const HEADWORD_FORMS = ['ce', 'cet', 'cette', 'ces', 'celui', 'celle', 'ceux', 'celles'];
  for (const f of HEADWORD_FORMS) {
    if (ALL_ROWS.some((r) => r.kind !== 'sentence' && r.fr === f)) die(`"${f}" is re-authored as a headword and it already exists in mots-essentiels`);
  }

  // THE EIGHT `-ci`/`-là` CELLS, four imported and four authored.
  for (const c of CI_LA_CELLS) {
    if (!ITEM_IDS.includes(c.id)) die(`the ${c.form} cell (${c.id}) is not carried by the lesson`);
    const authored = ALL_ROWS.some((r) => r.id === c.id);
    if (authored !== c.authored) die(`${c.form} is marked authored:${c.authored} and is actually ${authored ? 'authored' : 'imported'}`);
    if (authored && !ALL_ROWS.some((r) => r.id === c.id && r.fr === c.form)) die(`${c.id} is meant to be "${c.form}"`);
  }

  // THE EIGHT-CELL GRID AND THE FOUR BOTH-JOBS ROWS.
  for (const c of GRID_CELLS) {
    const row = ALL_ROWS.find((r) => r.id === c.id);
    if (!row) die(`the ${c.gender} ${c.number} ${c.job} cell (${c.id}) is missing`);
    if (!hasWord(row.fr, c.form)) die(`${c.id} is the "${c.form}" cell and does not contain it`);
  }
  for (const c of BOTH_CELLS) {
    const row = ALL_ROWS.find((r) => r.id === c.id);
    if (!row) die(`${c.id} is a both-jobs row and is missing`);
    if (!hasWord(row.fr, c.points)) die(`${c.id} does not carry the pointing form "${c.points}"`);
    if (!hasWord(row.fr, c.replaces)) die(`${c.id} does not carry the replacing form "${c.replaces}"`);
    if (countOf(row.fr, c.noun) !== 1) die(`${c.id} says "${c.noun}" ${countOf(row.fr, c.noun)} times, and the whole claim is that it is said once`);
  }
  // The vowel pair, and the silent h that proves the rule is about sound.
  for (const id of Object.values(VOWEL_PAIR)) if (!ALL_ROWS.some((r) => r.id === id)) die(`${id} is part of the vowel pair and is missing`);

  // THE DICTÉE IS LETTERS MODE, through the real function.
  if (DICTEE_IDS.length < 5) die(`only ${DICTEE_IDS.length} dictée targets, which is thin for a lesson whose whole distinction is written`);
  for (const id of DICTEE_IDS) {
    const row = ALL_ROWS.find((r) => r.id === id)!;
    const mode = dicteeMode(row.fr);
    if (mode !== DICTEE_MODE_EXPECTED) die(`${id} "${row.fr}" resolves to ${mode} mode, and word mode hands every real word over pre-spelled`);
  }
  {
    const d = sec('s18-dictee') as { itemIds?: string[] } | undefined;
    if (!d) die('s18-dictee is missing');
    if ((d.itemIds ?? []).join(',') !== DICTEE_IDS.join(',')) die('the dictation section and DICTEE_IDS disagree');
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

  /* ══════════════════════════════════════════════════════════════════════
   *  THE GENERALISATION, AND WHAT MUST STAY UNSEEN
   * ══════════════════════════════════════════════════════════════════════ */

  {
    const s = sec('s08-unseen') as { groups?: Array<{ items?: unknown[]; check?: { opts?: string[]; correct?: number } }> } | undefined;
    if (!s) die('s08-unseen is missing, and doctrine §B.1 is the reason it exists');
    const control = (s.groups ?? []).find((g) => (g.items ?? []).length === 0);
    if (!control) die('s08-unseen has no control page, which is the house pattern for a generalisation check');
    const opts = control.check?.opts ?? [];
    if (!opts.some((o) => o === UNSEEN.answer)) die(`the control check does not offer "${UNSEEN.answer}"`);
    if (opts[control.check?.correct ?? -1] !== UNSEEN.answer) die('the control check does not key on the unseen form');
  }
  // The unseen noun appears NOWHERE except the two places that ask for it, and
  // in no row this lesson authors.
  for (const r of ALL_ROWS) {
    if (hasWord(`${r.fr} ${r.en}`, UNSEEN.noun)) die(`${r.id} carries "${UNSEEN.noun}", which must stay unseen`);
  }
  {
    const asks = LESSON.sections.filter((s) => strs(s).some((t) => hasWord(t, UNSEEN.noun))).map((s) => (s as { id?: string }).id);
    if (asks.length !== 2 || !asks.includes('s08-unseen') || !asks.includes('s22-quiz')) {
      die(`"${UNSEEN.noun}" appears in ${asks.join(', ') || 'no section'}; it may appear only in s08-unseen and s22-quiz, which are the two that ask for it`);
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
  // AND NO FREE-TEXT QUESTION TURNS ON SOMETHING fold() CANNOT SEE: if every
  // accepted form folds to the answer, an accent-only or hyphen-only variant is
  // not being tested, it is being silently allowed. Said rather than guarded,
  // via WANTED_AND_IMPOSSIBLE, and checked here on the one that matters: no
  // typed question may be keyed on `celle-là`.
  for (const q of qs) {
    if (q.format === 'mcq' || q.format === 'listenChoose') continue;
    const answer = String(q.answer ?? '');
    if (/celle-l[àa]\s*$/i.test(answer.replace(/\.$/, ''))) {
      die(`"${q.q}" is typed and keys on celle-là, whose accent fold() strips. Only mcq can test it.`);
    }
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
    console.log(`  quiz: ${qs.length} questions, ${JSON.stringify(mix)}`);
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
  // Corrections §14.5: `pronoun` is house vocabulary, not jargon. Guard the
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
  for (const t of ALL_ROWS.flatMap((r) => [r.fr, r.en])) {
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
  // and the published row that carries one is named rather than imported.
  for (const t of [...strs(LESSON), ...ALL_ROWS.map((r) => r.respell ?? '')]) {
    if (t.includes(TIE_GLYPH)) die(`U+203F reaches a learner surface in "${t.slice(0, 70)}"; it draws as an underscore`);
  }
  if (ITEM_IDS.includes(TIE_ROW)) die(`${TIE_ROW} carries a U+203F respelling and this lesson imports it`);
  // The four b1 rows left behind stay left behind.
  for (const b of B1_NOT_IMPORTED) {
    if (ITEM_IDS.includes(b.id)) die(`${b.id} is on the do-not-import list (${b.why}) and the lesson carries it`);
  }
  // Dead fields.
  for (const f of DEAD_AUDIO_FIELDS) if (f in (LESSON.audio ?? {})) die(`Lesson.audio.${f} is read by no renderer`);
  for (const f of DEAD_LESSON_FIELDS) if (f in LESSON) die(`Lesson.${f} draws nothing`);

  // THE REFRAME, against an EXPLICIT CONSTANT rather than a derived figure.
  {
    const n = strs(LESSON).filter((t) => t.includes(REFRAME)).length;
    if (n !== REFRAME_COUNT) die(`the reframe is carried ${n} times and REFRAME_COUNT says ${REFRAME_COUNT}`);
    console.log(`  reframe carried ${n} times`);
  }

  // THE SHAPE, AND THE OWNS OUTWEIGHING THE TRAP.
  if (LESSON.sections.length !== 24) die(`${LESSON.sections.length} missions; the measured A2 house shape is 24`);
  {
    const acts = LESSON.acts ?? [];
    const of = (id: string) => (acts.find((a) => a.id === id)?.sections ?? []).length;
    const owns = of('act2') + of('act3');
    const rest = of('act1') + of('act4');
    if (owns <= rest) die(`the Owns is ${owns} missions and the scene plus the trap is ${rest}; doctrine §B.5 wants the Owns heavier`);
    console.log(`  acts: ${acts.map((a) => `${a.id}=${a.sections.length}`).join(' ')}  owns=${owns} vs scene+trap=${rest}`);
  }

  console.log(`\n  offline guards: all clear (${ALL_ROWS.length} authored, ${IMPORT_IDS.length} imported)`);

  /* ══════════════════════════════════════════════════════════════════════
   *  THE DATABASE
   * ══════════════════════════════════════════════════════════════════════ */

  const { Pool } = await import('pg');
  const pool = await import('./env').then(() => new Pool({ connectionString: process.env.DATABASE_URL, max: 1 }));
  const c = await pool.connect();
  try {
    // IDENTITY, BYTE FOR BYTE, AND THIS BUILD CHANGES NONE OF IT.
    //
    // `content_units` IS NOT A COLUMNAR UNIT TABLE. It is a generic
    // `slug/title/kind/level/locale/status/body/version/generated_by` table,
    // and the unit's own fields live inside `body` as jsonb, keyed by
    // `kind='curriculum_unit'`. Lessons live in the SAME table under
    // `kind='lesson'`, keyed by slug. A first draft of this script wrote
    // `select id, seq, title, sub, can_do ... from content_units` and Postgres
    // answered « column "seq" does not exist », which is the cheapest possible
    // version of this mistake and the reason it is written down here.
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
    // `seq` is a NUMBER in the body and `corpus:probe` stringifies it when it
    // prints, which is how the batch-1 ledger came to record it wrongly.
    if (String(unit.seq) !== String(UNIT.seq)) die(`unit seq is ${unit.seq} and the build says ${UNIT.seq}`);
    if (!(unit.prereqUnitIds ?? []).includes(UNIT.prereqUnitIds[0])) die(`unit prereq reads ${JSON.stringify(unit.prereqUnitIds)}`);
    if ((unit.lessonIds ?? []).length && !REAPPLY) die(`${UNIT.id} already claims ${JSON.stringify(unit.lessonIds)}; this is meant to be a first build`);
    if (unit.themes != null) die(`${UNIT.id}.themes is ${JSON.stringify(unit.themes)} and this build does not create a themes array`);
    console.log(`\n  unit ${unit.id} seq ${unit.seq} "${unit.title}" / "${unit.sub}" — identity confirmed, lessonIds ${JSON.stringify(unit.lessonIds ?? [])}`);

    // THE ROW COUNT IS THE ONLY ID SIGNAL (Corrections §10). `max(id)` has been
    // useless since a2.10.l2 took .461..500, and a concurrent lesson landing
    // BELOW the top of a range is invisible to a highest-id check.
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
    const imp = await c.query<{ id: string; fr: string; kind: string; status: string; drills: unknown; gender: string | null; respell: string | null; level: string }>(
      `select id, fr, kind, status, drills, gender, respell, level from content_items where id = any($1::text[])`, [IMPORT_IDS]);
    const missing = IMPORT_IDS.filter((i) => !imp.rows.some((r) => r.id === i));
    if (missing.length) die(`${missing.length} imported row(s) are not in Postgres: ${missing.join(', ')}`);
    const unpub = imp.rows.filter((r) => r.status !== 'published');
    if (unpub.length) die(`${unpub.length} imported row(s) are not published: ${unpub.map((r) => r.id).join(', ')}`);
    // NO IMPORTED GENDERED SINGLE WORD. That shape joins a1.03's measured
    // ending population and moves twenty printed figures.
    const genderedWord = imp.rows.filter((r) => r.gender && r.kind === 'word'
      && !r.fr.replace(/^(le |la |les |l'|un |une |des )/, '').includes(' '));
    if (genderedWord.length) die(`${genderedWord.length} imported row(s) are gendered single words: ${genderedWord.map((r) => r.id).join(', ')}`);
    // The eight headwords really are ungendered, respelled and deck-able.
    for (const id of IMPORTED.headwords) {
      const r = imp.rows.find((x) => x.id === id)!;
      if (r.gender) die(`${id} "${r.fr}" is gendered, which is the shape that moves a1.03`);
      if (!r.respell) die(`${id} "${r.fr}" has no respelling and this lesson prints it`);
      const d = toArray(r.drills);
      if (!d.includes('flashcard') || !d.includes('voiceflash')) die(`${id} lacks flashcard or voiceflash, and both a tranche and practice need them`);
    }
    // The twelve adjective rows really are the population no deck can serve.
    for (const id of NOT_DECK_ABLE) {
      const d = toArray(imp.rows.find((x) => x.id === id)!.drills);
      if (d.includes('flashcard')) die(`${id} DOES carry flashcard, so NOT_DECK_ABLE is stale and a tranche could release it`);
    }
    // And the twelve b1 pronoun rows really do carry flashcard, which is what
    // lets the tranche release them. Measured, not assumed.
    for (const id of [...IMPORTED.pronounCards, ...IMPORTED.pronounSentences]) {
      const d = toArray(imp.rows.find((x) => x.id === id)!.drills);
      if (!d.includes('flashcard')) die(`${id} is released by a tranche and does not carry flashcard`);
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
    // a2.08's handover row is the one it named.
    if (!IMPORT_IDS.includes(COMPARATIVE_HANDOVER)) die(`${COMPARATIVE_UNIT} reserved ${COMPARATIVE_HANDOVER} for this unit and it is not imported`);

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

    // THE RESPELL REPAIRS, ALL THREE STATES, through the real checker.
    // Corrections §6 as amended by §14.1 wants ONE table with `half` and all
    // three states asserted. Neither of these rows holds a nasal, so the
    // checker is silent on all three — ASSERTED AS A NEGATIVE, so the day it
    // grows an /ɛ/ rule this stops being invisible and the build says so.
    const rep = await c.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where id = any($1::text[])`, [REPAIR_IDS]);
    for (const r of RESPELL_REPAIRS) {
      const cur = rep.rows.find((x) => x.id === r.id);
      if (!cur) die(`${r.id} is a repair target and is not in Postgres`);
      if (cur.respell !== r.from && cur.respell !== r.to) {
        die(`${r.id} reads "${cur.respell}", and the table expects "${r.from}" before or "${r.to}" after`);
      }
      if (hasPlainNasalFor(r.fr, r.from)) die(`${r.id}: the checker DOES flag "${r.from}", so blind:true is wrong`);
      if (hasPlainNasalFor(r.fr, r.half)) die(`${r.id}: the checker flags the half-repair "${r.half}"`);
      if (hasPlainNasalFor(r.fr, r.to)) die(`${r.id}: the checker flags the repaired "${r.to}"`);
      if (!r.blind) die(`${r.id} is marked blind:false and the checker reports nothing about it`);
      if ((r.half !== r.to) !== (r.house || false)) {
        // `half === to` here on both rows, because there is no report to act on.
        if (r.half !== r.from) die(`${r.id}: half should equal from when the checker is silent`);
      }
    }
    // The house value was READ OFF a published row, not invented (a2.15 §13).
    const src = await c.query<{ id: string; respell: string | null }>(
      `select id, respell from content_items where id = any($1::text[])`, [REPAIR_SOURCES]);
    for (const s of src.rows) {
      if (!RESPELL_REPAIRS.some((r) => r.to.toUpperCase().includes((s.respell ?? '').toUpperCase()))) {
        die(`${s.id} respells "${s.respell}" and no repair reads off it, so the house value was invented`);
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
      // THE TWO REPAIRS. `respell` ONLY. Nothing else about those rows is
      // touched, so neither can move a1.03's ending population.
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

    // THE ROW COUNT AFTER, NOT THE MAXIMUM ID (Corrections §10).
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
    console.log('\n  NEXT: pnpm tsx scripts/merge-demonstratifs-into-seed.ts\n');
  } finally {
    c.release();
    await pool.end();
  }
}

/** Every id-shaped string a section names, wherever it hides: `itemIds`,
 *  `practiceOn`, a groupDrill item's `itemId`, a term example. A section that
 *  names an id in a field this misses looks unreachable and is not, which is
 *  the failure mode this walk exists to avoid. */
function collectIds(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') { if (/^fr\.[a-z0-9]+\./.test(v)) out.push(v); return out; }
  if (Array.isArray(v)) { v.forEach((x) => collectIds(x, out)); return out; }
  if (v && typeof v === 'object') { Object.values(v).forEach((x) => collectIds(x, out)); return out; }
  return out;
}

const hubNorm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();

main();
