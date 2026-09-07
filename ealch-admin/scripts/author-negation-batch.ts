/* Applies a1.18.l1 "La négation" to Postgres: 27 authored rows, 18 imported rows
 * verified field by field, 1 respelling repair, the lesson, and the unit link
 * INCLUDING ITS THEME BINDING, which a1.18 does not currently declare at all.
 *
 *     pnpm tsx scripts/author-negation-batch.ts --dry-run
 *     pnpm tsx scripts/author-negation-batch.ts
 *
 * Order matters and it has cost real work twice: apply to Postgres FIRST, merge
 * into the seed SECOND, and publish only when both agree. content:publish
 * regenerates seed.json FROM this database, so publishing before applying would
 * silently delete the lesson from the seed.
 *
 * The guards below are not decoration. Each one is either a rule from
 * A1-BUILD-INVARIANTS.md or a requirement this lesson's brief names explicitly,
 * and every one of them runs the REAL app function rather than a copy. */
import './env';
import { describeTarget } from './env';
import {
  formatIssues, quizQuestions, validateItem, validateLesson, validateUnit,
  type Item, type Lesson, type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode, wordDecoys } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { guardLessonVersion } from './version-guard.logic.ts';
import {
  AUTHORED_ITEMS, AUTHORED_IDS, CONTRAST_LIVRE, DROPPED_NE, FORBIDDEN_FORMS, IMPERATIVE_IDS,
  IMPORTED, INFINITIVE_FRAMES, NASAL_FORMS, NEGATIVE_IDS, NOT_NASAL_FORMS, NOT_REPAIRED,
  NE_LESS_SHAPES, OTHER_NEGATORS, OWNED_ID_RANGE, PAIRS, POSITIVE_IDS, RESPELL, RESPELL_REPAIRS, REUSED,
} from './data/negation-corpus.ts';
import {
  BOTH_CHANGES_SECTION_ID, CONTRAST_SECTION_ID, HANDOVER_NEXT_FREE_ID, NEGATION_DICTATION_IDS,
  NEGATION_LESSON, NEGATION_SPEAK_IDS, QUESTION_TEACHING, REFRAME,
} from './data/negation-lesson.ts';

const AUTHORED: Item[] = AUTHORED_ITEMS;
const IMPORTS: Item[] = IMPORTED;
const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTS];
const LESSON: Lesson = NEGATION_LESSON;
const UNIT_ID = 'a1.18';

/** Asserted against an explicit constant, never a figure derived from the
 *  lesson. A derived count compares the content to itself and passes on any
 *  rewording. */
const REFRAME_APPEARANCES = 13;

const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_PAIRS = 13;
const EXPECTED_AUTHORED = 27;
const EXPECTED_ETRE_EXCEPTION_ROWS = 6;
const EXPECTED_SECTIONS = 28;

/** THE UNIT DOES NOT DECLARE THIS AND THIS BATCH SETS IT. a1.18 ships with
 *  `themes: null`, and a theme named for its own subject holds 604 published
 *  rows. This is the one unit edit the batch makes beyond linking the lesson. */
const UNIT_THEMES = ['negation-et-restriction'];
const UNIT_TITLE = 'Negation';
/** Copied BYTE FOR BYTE from the probe's unit dump. `sub` and `canDo` are not
 *  retyped: the canDo carries U+2026 HORIZONTAL ELLIPSIS in « ne… pas », not
 *  three periods, and a1.09's `sub` carried a curly apostrophe that a retyped
 *  brief broke. Both are compared against the database before anything is
 *  written and the batch dies rather than "fixing" them. */
const UNIT_SUB = 'La négation';
const UNIT_CANDO = 'Can turn any sentence they know negative with ne… pas';

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
 *  /\bne\b/ fails on every accented neighbour and a regex that returns zero
 *  looks exactly like an absence. Invariant §0. */
function hasWord(haystack: string, needle: string): boolean {
  let from = 0;
  for (;;) {
    const i = haystack.indexOf(needle, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : haystack[i - 1];
    const after = haystack[i + needle.length] ?? ' ';
    if (!/[a-zà-ÿœæ]/i.test(before) && !/[a-zà-ÿœæ]/i.test(after)) return true;
    from = i + 1;
  }
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run, nothing will be written)');

  /* ── Items ─────────────────────────────────────────────────────────────── */

  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

  const ids = NEW_ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  if (AUTHORED.length !== EXPECTED_AUTHORED) {
    die(`${AUTHORED.length} authored rows, expected ${EXPECTED_AUTHORED} (${EXPECTED_PAIRS} pairs plus the dropped-ne row)`);
  }
  if (PAIRS.length !== EXPECTED_PAIRS) die(`${PAIRS.length} pairs, expected ${EXPECTED_PAIRS}`);

  // EVERY PAIR IS A PAIR. Both halves exist, they are adjacent in the sequence,
  // and the negative is not simply the positive again. The whole corpus is
  // built on this and nothing else checks it.
  for (const p of PAIRS) {
    const seq = (id: string) => Number(id.split('.').pop());
    if (seq(p.negId) !== seq(p.posId) + 1) {
      die(`pair "${p.pos}" is not adjacent in the sequence: ${p.posId} then ${p.negId}`);
    }
    if (p.pos === p.neg) die(`pair ${p.posId} has an identical positive and negative`);
    if (!/\b(ne|n')\b/.test(p.neg.toLowerCase()) || !hasWord(p.neg.toLowerCase(), 'pas')) {
      die(`the negative of ${p.posId} does not carry both halves of the wrap: "${p.neg}"`);
    }
    if (hasWord(p.pos.toLowerCase(), 'pas')) die(`the POSITIVE of ${p.posId} contains pas: "${p.pos}"`);
  }

  // flashhub-coverage.test.ts keys decks on `fr` per theme with the article
  // stripped, so two NON-SENTENCE rows sharing an fr in one theme are one card
  // served twice. Sentences are exempt, which is what lets this lesson author
  // « Je n'ai pas de voiture. » in its own theme while fr.a1.famille.233 keeps
  // the same string: the pair has to live in one theme to be a pair.
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const seenWord = new Map<string, string>();
  const dupeWords: string[] = [];
  for (const w of NEW_ITEMS) {
    if (w.kind === 'sentence') continue;
    if ((w.cardType ?? 'vocab') !== 'vocab') continue;
    const key = `${w.theme}::${headword(w.fr)}`;
    const prior = seenWord.get(key);
    if (prior) dupeWords.push(`${prior} vs ${w.id} ("${w.fr}")`);
    else seenWord.set(key, w.id);
  }
  if (dupeWords.length) die(`the same word twice in one theme:\n  ${dupeWords.join('\n  ')}`);

  const SEPARATE_POOLS = new Set(['review+voiceflash', 'flashcard+review']);
  const strandedVocab = NEW_ITEMS.filter(
    (i) => (i.level === 'a1' || i.level === 'a2')
      && i.kind !== 'sentence'
      && (i.cardType ?? 'vocab') === 'vocab'
      && !SEPARATE_POOLS.has([...i.drills].sort().join('+'))
      && !(i.drills.includes('flashcard') && i.drills.includes('voiceflash')),
  );
  if (strandedVocab.length) {
    die(`a1/a2 vocab items missing flashcard or voiceflash:\n  ${strandedVocab.map((i) => `${i.id} ${JSON.stringify(i.drills)}`).join('\n  ')}`);
  }

  /* ── a1.03's measured population, through the REAL function ──────────────
   *
   * The brief calls this a live risk and it is right about the reason: this
   * lesson needs countable nouns (un frère, une voiture, un livre) and a1.11
   * broke a1.03's -e statistic exactly this way. It is ZERO here BY
   * CONSTRUCTION, because every authored row is a SENTENCE with no gender
   * field and every noun on a screen is already published. Checked through the
   * real function anyway: a1.08 shipped a hand-rolled copy carrying a filter
   * the real one does not have and let four rows through. */
  const genderPopulation = endingPopulation(
    NEW_ITEMS.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags })),
  );
  if (genderPopulation.length) {
    die(
      `this batch would add ${genderPopulation.length} row(s) to a1.03's measured ending population, which can move `
      + `a statistic printed on two of its cards:\n  `
      + genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n`
      + `  NOTHING in this lesson should reach that population. Every authored row is a sentence and carries no\n`
      + `  gender field; the nouns are borrowed rather than authored for exactly this reason. If a row here has\n`
      + `  grown a gender or become a word, remove it rather than re-measuring a1.03.`,
    );
  }

  /* ── Lesson ────────────────────────────────────────────────────────────── */

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  if (LESSON.sections.length !== EXPECTED_SECTIONS) {
    die(`${LESSON.sections.length} sections, expected ${EXPECTED_SECTIONS}`);
  }

  const density = validateDensity(LESSON, new Set([...ids, ...LESSON.itemIds]));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  const authoredJson = JSON.stringify({ AUTHORED, LESSON });
  if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
  if (authoredJson.includes('‿')) {
    die('U+203F tie character in authored copy, which renders as a low underscore on a Pixel 6');
  }

  const learnerFacing = [
    ...strings(LESSON.sections),
    ...strings(LESSON.sheets ?? []),
    ...strings(LESSON.terms ?? {}),
  ];
  // Identifiers are not learner copy. `sheet.a1.18.procedure` and
  // `rec-a1-18-pair` are names this file chose for its own plumbing.
  const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
  // `négation` and `verbe` are added to a1.17's list because they are this
  // lesson's own subject and therefore the two most likely pieces of jargon to
  // slip onto a card. `accord` keeps its negative lookbehind for the
  // apostrophe: « d'accord » is ordinary conversational French.
  const jargon = learnerFacing.filter((s) => !isIdentifier(s)
    && /\b(conjugaison|article (défini|indéfini|partitif)|adjectif|possessif|(?<!')accord|complément circonstanciel|masculin|féminin|invariable|déterminant|négation|proposition subordonnée)\b/i.test(s));
  if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  /* ── Respellings ───────────────────────────────────────────────────────── */

  const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  if (badNasal.length) {
    die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
  }
  // BY NAME, because the shared checker cannot see a WORD-INTERNAL nasal.
  // `day zahⁿ-FAHⁿ` and `suh nuh sohⁿ PAH` are exactly that shape and would
  // pass hasPlainNasalFor while being wrong. Invariant §3's first blind spot,
  // the same one that let a1.09's sep-TAHNBR and a1.13's oh-RAHNZH through.
  const missingSuperscript = NASAL_FORMS.filter((f) => !RESPELL[f]?.respell.includes('ⁿ'));
  if (missingSuperscript.length) {
    die(
      `form(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}\n`
      + `  hasPlainNasalFor does not catch a word-internal nasal, so this is checked by name.`,
    );
  }
  // THE OPPOSITE CHECK, and it is the shape that produced a1.13's `jaune` trap.
  // ne, pas, de, le livre and the rest have no nasal vowel at all and the
  // checker never flagged them, so a superscript would teach a sound that is
  // not in the word while silencing nothing.
  const wronglyNasalised = NOT_NASAL_FORMS.filter((f) => RESPELL[f]?.respell.includes('ⁿ'));
  if (wronglyNasalised.length) {
    die(
      `form(s) respelled with a superscript n that have NO nasal vowel: ${wronglyNasalised.join(', ')}\n`
      + `  These carry no nasal at all and the checker never flagged them.`,
    );
  }
  // THE REPAIR, BY NAME, so a later author's revert to NOHN goes red.
  if (RESPELL.non.respell !== '[NOHⁿ]') {
    die(`non is respelled ${RESPELL.non.respell}, expected [NOHⁿ]. It is a plain nasal and must carry the superscript.`);
  }
  if (!hasPlainNasalFor('non', 'NOHN')) {
    die('hasPlainNasalFor no longer flags NOHN. If the checker has changed, read invariant §3 before trusting this repair.');
  }

  /* ── The teaching this lesson exists for ───────────────────────────────── */

  const sectionById = new Map(LESSON.sections.map((s) => [(s as { id?: string }).id ?? '', s]));
  const textOf = (id: string) => strings(sectionById.get(id) ?? {}).join('\n');

  // ═══ BOTH STEPS ON ONE SCREEN ═══
  //
  // The brief's first named layout requirement: "J'ai un frère → Je n'ai pas de
  // frère is a PAIR, so give it two columns on one screen. Positive left,
  // negative right, with both changes visible at once. This is the layout the
  // test must assert."
  //
  // Checked as ONE NAMED SECTION carrying a positive with un/une/des AND its
  // own negative with de. A find() over every section would be satisfied by the
  // reading passage, which carries the contrast in prose and is not the screen.
  {
    const t = textOf(BOTH_CHANGES_SECTION_ID);
    if (!t) die(`${BOTH_CHANGES_SECTION_ID} does not exist, and it is the both-changes screen`);
    const shown = PAIRS.filter((p) => p.outcome === 'collapses' && t.includes(p.pos) && t.includes(p.neg));
    if (shown.length < 3) {
      die(
        `${BOTH_CHANGES_SECTION_ID} shows ${shown.length} complete positive/negative pair(s), expected at least 3.\n`
        + `  A learner who sees only the ne… pas wrap and meets the article change three missions later will have\n`
        + `  already fossilised pas un. Both changes have to be on ONE screen.`,
      );
    }
  }

  // ═══ THE ÊTRE EXCEPTION, WITH THE REGULAR CASE BESIDE IT ═══
  //
  // The brief: "Assert that a section carries both a `pas de` and a `pas un`
  // example, and that the `pas un` one is after être. This is the content you
  // authored from nothing and the most likely to be lost in a later edit."
  {
    const t = textOf(CONTRAST_SECTION_ID);
    if (!t) die(`${CONTRAST_SECTION_ID} does not exist, and it is the screen this lesson is judged on`);
    const collapsed = CONTRAST_LIVRE.find((p) => p.outcome === 'collapses');
    const survivesEtre = CONTRAST_LIVRE.find((p) => p.outcome === 'survives-etre');
    const survivesDef = CONTRAST_LIVRE.find((p) => p.outcome === 'survives-definite');
    if (!collapsed || !survivesEtre || !survivesDef) {
      die('CONTRAST_LIVRE does not carry all three outcomes. The three-way contrast IS the lesson.');
    }
    for (const p of [collapsed, survivesEtre, survivesDef]) {
      if (!t.includes(p.neg)) {
        die(
          `${CONTRAST_SECTION_ID} does not show "${p.neg}".\n`
          + `  All three outcomes have to be on ONE screen. Split across missions they become three ordinary\n`
          + `  sentences and the fact that only the VERB separates them is never visible.`,
        );
      }
    }
    // AND THE THREE SHARE ONE NOUN. Without that they prove nothing: three
    // different nouns would let a learner believe the noun is what decides.
    const nouns = new Set(CONTRAST_LIVRE.map((p) => p.pos.replace(/.*\b(un|une|des|le|la|les)\s+/, '').replace(/[.!?]$/, '')));
    if (nouns.size !== 1) {
      die(
        `the three-way contrast uses ${nouns.size} different nouns (${[...nouns].join(', ')}), expected 1.\n`
        + `  The claim is that ONLY the verb separates these sentences. Three nouns lets a learner conclude the\n`
        + `  noun is what decides, which is the thing the screen exists to disprove.`,
      );
    }
    if (!hasWord(t.toLowerCase(), 'pas de') || !hasWord(t.toLowerCase(), 'pas un')) {
      die(`${CONTRAST_SECTION_ID} must carry both a "pas de" and a "pas un" example. The brief asks for it by name.`);
    }
  }

  // HOW MANY ÊTRE-EXCEPTION ROWS WERE AUTHORED. The brief asks to be told,
  // because the corpus has effectively none: 2 rows in 47,444, neither usable.
  const etreExceptionRows = AUTHORED.filter((i) => i.tags.includes('exception'));
  if (etreExceptionRows.length !== EXPECTED_ETRE_EXCEPTION_ROWS) {
    die(`${etreExceptionRows.length} être-exception rows authored, expected ${EXPECTED_ETRE_EXCEPTION_ROWS}`);
  }

  // le / la / les SHOWN SURVIVING, so the rule is not over-generalised.
  {
    const def = PAIRS.find((p) => p.outcome === 'survives-definite');
    if (!def) die('no pair shows le, la or les surviving a negative. The rule ships over-generalised without one.');
    const anywhere = learnerFacing.join('\n');
    if (!anywhere.includes(def.neg)) die(`the le-survival example "${def.neg}" is on no screen`);
  }

  /* ── The neighbours keep their lessons ─────────────────────────────────── */

  // Written against PRODUCTION SURFACES rather than every string, or they fire
  // on legitimate context and get deleted. a1.13's brief says so explicitly and
  // its first draft proved it.
  const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
  const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
  const productionSurfaces = [
    ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck', 'tapTable', 'practice', 'dictation'].includes(s.type))),
    ...strings(LESSON.drills ?? []),
    ...strings((quizSection ?? {}) as unknown),
  ];

  // ne… jamais, ne… plus, ne… rien, ne… personne reach NO production surface,
  // so the A2 units keep their lesson. Written as the second half of a wrap
  // rather than as bare words: `plus` and `personne` are ordinary French and
  // « moi non plus » is imported HERE, so a bare-word guard would fire on this
  // lesson's own material and get deleted.
  const negatorHit = OTHER_NEGATORS.filter((w) => productionSurfaces.some((s) => hasWord(s.toLowerCase(), w)));
  if (negatorHit.length) {
    die(
      `another negator reached a production surface: ${negatorHit.join(', ')}\n`
      + `  ne… jamais, ne… plus, ne… rien and ne… personne are excluded by this lesson's canDo and no A1 unit\n`
      + `  owns them. That gap is REPORTED at the foot of negation-lesson.ts, not filled here.`,
    );
  }

  // NO NEGATIVE IMPERATIVE, so fr.a1.negation-et-restriction.018/.019/.020 are
  // not imported as models. Checked BY ID as well as by shape, because the ids
  // sit in this lesson's own theme slice and are the likeliest thing a later
  // bulk import would sweep in.
  const imperativeImported = IMPERATIVE_IDS.filter((id) => ids.includes(id) || LESSON.itemIds.includes(id));
  if (imperativeImported.length) {
    die(
      `negative imperative(s) imported: ${imperativeImported.join(', ')}\n`
      + `  An imperative has no subject and the learner has never conjugated one. Not in this canDo.`,
    );
  }
  // `ne pas` + INFINITIVE, which looks exactly like this lesson's rule and
  // teaches the opposite shape.
  const infinitiveHit = INFINITIVE_FRAMES.filter((f) => productionSurfaces.some((s) => s.toLowerCase().includes(f)));
  if (infinitiveHit.length) {
    die(`ne pas + infinitive reached a production surface: ${infinitiveHit.join(', ')}. That is a different construction.`);
  }
  // a1.19 and a1.20 keep `si` and the question machinery.
  const questionHit = QUESTION_TEACHING.filter((w) => productionSurfaces.some((s) => s.toLowerCase().includes(w)));
  if (questionHit.length) {
    die(
      `question teaching found, which belongs to a1.19 and a1.20: ${questionHit.join(', ')}\n`
      + `  Both are the next two units and both are empty. si is deliberately left for them.`,
    );
  }

  // ═══ THE DROPPED ne IS RECOGNITION ONLY, CHECKED BY ID ═══
  //
  // The brief: "Assert no practice with skill: 'speak', no typeIn and no
  // dictation target asks the learner to produce a ne-less form. This is the
  // assertion that stops a well-meaning later author modernising the lesson."
  //
  // BY ID rather than by string, so a reword cannot slip past it.
  {
    const ORAL_ID = DROPPED_NE.id;
    if (NEGATION_SPEAK_IDS.includes(ORAL_ID)) {
      die(`the speak mission names ${ORAL_ID}, which is the ne-less form. It is recognition only.`);
    }
    if (NEGATION_DICTATION_IDS.includes(ORAL_ID)) {
      die(`the dictée names ${ORAL_ID}, which is the ne-less form. It is recognition only.`);
    }
    const produceKeys = [
      ...qs.filter((q) => ['typeIn', 'errorSpot', 'speak'].includes(q.format ?? 'mcq'))
        .flatMap((q) => [q.answer ?? '', ...(q.accept ?? []), (q as { target?: string }).target ?? '']),
      ...(LESSON.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
    ].filter(Boolean);
    // Checked on the SUBJECT-PLUS-VERB shapes that can only occur once the ne
    // has gone. A first version looked for "a pas with no ne in front of it"
    // and fired on fourteen correct answer keys, because an accept list is
    // written for fold(), which strips apostrophes: « je nai pas soif » is a
    // legitimate entry and contains no `ne`. See NE_LESS_SHAPES.
    const neless = produceKeys.flatMap((s) =>
      NE_LESS_SHAPES.filter((shape) => hasWord(s.toLowerCase(), shape)).map(() => s));
    if (neless.length) {
      die(
        `a ne-less negative is a PRODUCE answer key:\n  ${neless.join('\n  ')}\n`
        + `  Dropping the ne is taught here for RECOGNITION ONLY. Asking a learner to produce it while they are\n`
        + `  still placing the two words teaches them to drop the half that is easier to hear.`,
      );
    }
    // And it IS on a recognition surface, or the teaching is missing entirely.
    if (!LESSON.itemIds.includes(ORAL_ID)) die(`${ORAL_ID} is in no itemIds, so the dropped ne is taught nowhere`);
  }

  // ═══ NO PRODUCTION SURFACE ASKS FOR A VERB OUTSIDE ÊTRE AND AVOIR ═══
  //
  // There is no regular-verb unit anywhere in A1: -er verbs are a2.01 and faire
  // is a2.12. Reading exposure is allowed and this lesson has seven rows of it;
  // asking for one as output is not.
  {
    const OUT_OF_REACH = ['parle', 'parles', 'parlez', 'parlons', 'mange', 'manges', 'mangez', 'mangeons',
      'aime', 'aimes', 'aimez', 'aimons', 'habite', 'habites', 'habitons', 'habitez',
      'travaille', 'regarde', 'ferme', 'fermez', 'trouve', 'écoute', 'écoutes', 'fume',
      'prends', 'prennent', 'sortent', 'bois', 'boit', 'fait', 'faites', 'connaît', 'veux', 'veut'];
    const produceKeys = [
      ...qs.filter((q) => ['typeIn', 'errorSpot', 'speak'].includes(q.format ?? 'mcq'))
        .flatMap((q) => [q.answer ?? '', ...(q.accept ?? []), (q as { target?: string }).target ?? '']),
      ...NEGATION_SPEAK_IDS.map((id) => NEW_ITEMS.find((i) => i.id === id)?.fr
        ?? REUSED.find((r) => r.id === id)?.fr ?? ''),
      ...NEGATION_DICTATION_IDS.map((id) => NEW_ITEMS.find((i) => i.id === id)?.fr ?? ''),
      ...LESSON.sections.filter((s) => s.type === 'scenario')
        .flatMap((s) => (s.type === 'scenario' ? s.turns.flatMap((t) => [t.user, ...(t.alts ?? []).map((a) => a.fr)]) : [])),
    ].filter(Boolean);
    const unreachable = produceKeys.flatMap((s) =>
      OUT_OF_REACH.filter((v) => hasWord(s.toLowerCase(), v)).map((v) => `"${v}" in "${s}"`));
    if (unreachable.length) {
      die(
        `a produce surface asks the learner to conjugate a verb they have never been taught:\n  `
        + unreachable.join('\n  ') + `\n`
        + `  être and avoir are the only two verbs in A1. Reading exposure is fine and this lesson has seven rows\n`
        + `  of it; asking for one as output is not.`,
      );
    }
  }

  // Ungrammatical forms are never authored as correct French. Scoped to
  // CORRECT-FRENCH surfaces: the traps card and the quiz options have to SHOW
  // the error in order to teach it.
  const correctFrench: string[] = [
    ...AUTHORED.map((i) => i.fr),
    ...LESSON.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
    ...(LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? []).flatMap((sec) =>
      (sec.type === 'table' ? sec.rows.flat() : []))),
  ];
  const answerKeys: string[] = [
    ...qs.flatMap((q) => [q.answer ?? '', ...(q.accept ?? [])]),
    ...(LESSON.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
    ...(LESSON.sections.find((s) => s.type === 'roundup') as { points?: string[] } | undefined)?.points ?? [],
  ];
  const violations: string[] = [];
  for (const text of [...correctFrench, ...answerKeys]) {
    for (const f of FORBIDDEN_FORMS) {
      if (hasWord(text.toLowerCase(), f)) violations.push(`"${f}" in "${text}"`);
    }
  }
  if (violations.length) {
    die(
      `an ungrammatical form is authored as correct French:\n  ${violations.join('\n  ')}\n`
      + `  This teaches the exact error the lesson exists to prevent.`,
    );
  }

  /* ── imageRef: nothing validates it, so this lesson authors none ───────── */

  const imageRefs = strings(LESSON).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  if (imageRefs.length) {
    die(
      `${imageRefs.length} imageRef(s) authored: ${imageRefs.join(', ')}\n`
      + `  Nothing validates imageRef. lesson-contract.test.ts contains no reference to it and the schema comment\n`
      + `  promising a publish check is conditional on an asset manifest that does not exist. Register any ref in\n`
      + `  src/content/lessonImages.ts AND write the assertion yourself.`,
    );
  }

  /* ── Quiz ──────────────────────────────────────────────────────────────── */

  const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
  if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one, so the rest are unreachable.`);

  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half ceiling`);

  const noWhy = qs.filter((q) => !q.why);
  if (noWhy.length) die(`${noWhy.length} quiz question(s) carry no why:\n  ${noWhy.map((q) => q.q).join('\n  ')}`);
  const noRef = qs.filter((q) => !q.ref);
  if (noRef.length) die(`${noRef.length} quiz question(s) carry no ref:\n  ${noRef.map((q) => q.q).join('\n  ')}`);
  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
  const badRef = qs.filter((q) => q.ref && !sectionIds.has(q.ref));
  if (badRef.length) die(`quiz ref(s) naming a section that does not exist: ${badRef.map((q) => q.ref).join(', ')}`);

  // NO OPTION REFERS TO A POSITION, and no option is duplicated within a
  // question. QuizDeckView shuffles the options of every closed question per
  // attempt, so a positional option is broken by design and a duplicate makes a
  // shuffled question genuinely ambiguous. This lesson is exposed: the article
  // answer space is de / un / le / des and repeats easily across a round.
  const POSITIONAL = ['the first', 'the second', 'the third', 'the last', 'both of the above',
    'all of the above', 'none of these', 'none of the above', 'the one above', 'the one below'];
  const positional = qs.flatMap((q) => (q.opts ?? [])
    .filter((o) => POSITIONAL.some((p) => o.toLowerCase().includes(p)))
    .map((o) => `"${o}" in "${q.q}"`));
  if (positional.length) {
    die(
      `quiz option(s) referring to a position:\n  ${positional.join('\n  ')}\n`
      + `  The options are shuffled per question per attempt, so the positions the learner sees are not the ones\n`
      + `  you wrote.`,
    );
  }
  const dupeOpts = qs.flatMap((q) => {
    const seen = new Set<string>();
    return (q.opts ?? []).filter((o) => (seen.has(o) ? true : (seen.add(o), false)))
      .map((o) => `"${o}" twice in "${q.q}"`);
  });
  if (dupeOpts.length) die(`quiz question(s) with a duplicate option:\n  ${dupeOpts.join('\n  ')}`);

  const closed = qs.filter((q) => typeof q.correct === 'number');
  const slots = closed.reduce<Record<number, number>>((a, q) => {
    a[q.correct as number] = (a[q.correct as number] ?? 0) + 1;
    return a;
  }, {});
  const over = Object.entries(slots).filter(([, n]) => n / closed.length > 0.4);
  if (over.length) {
    die(`authored answer slot(s) over the 40% cap: ${over.map(([k, n]) => `slot ${k} holds ${n}/${closed.length}`).join(', ')}`);
  }

  const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
  if (unacceptable.length) {
    die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
  }

  const rounds = quizSection && quizSection.type === 'quiz' ? (quizSection.rounds ?? []) : [];

  // ═══ THE ROUND THAT WOULD OTHERWISE CERTIFY A BUG ═══
  //
  // "No format can test whether the learner knows the article rule has
  // exceptions. A learner can pass every article question by always answering
  // `de` if you never mix être items into the same round. Mix them, or the
  // round certifies a bug."
  //
  // Walks the round's OWN answer keys and requires at least one answer where a
  // un/une/des SURVIVES. A round of four `de` answers fails here.
  {
    const r4 = rounds.find((r) => r.id === 'r4-the-verb-decides');
    if (!r4) die('the article round r4-the-verb-decides is gone, and it is the only round that mixes the two outcomes');
    const keys = (r4.questions ?? []).map((q) => `${q.answer ?? ''} ${(q.opts ?? [])[q.correct as number] ?? ''}`.toLowerCase());
    const survives = keys.filter((k) => /pas (un|une|des)\b/.test(k)).length;
    const collapses = keys.filter((k) => /pas d[e']/.test(k)).length;
    if (survives < 1 || collapses < 1) {
      die(
        `round r4-the-verb-decides has ${survives} surviving-article answer(s) and ${collapses} de answer(s).\n`
        + `  It needs BOTH. A learner who has decided the answer is always de must FAIL this round; without the\n`
        + `  mixture the round certifies somebody who has understood exactly half the rule.`,
      );
    }
  }

  // NO EAR QUESTION ON A CAREFULLY-SPOKEN ne… pas. "Do not write ear questions
  // on ne… pas itself, which is unmissable when spoken carefully." The one real
  // ear question is the dropped ne.
  const earQs = qs.filter((q) => q.format === 'listenChoose');
  if (!earQs.length) die('no listenChoose question at all. The dropped ne is a real ear question and is worth one.');

  /* ── Drill reachability ────────────────────────────────────────────────── */

  const drillForTarget = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const leads: string[] = [];
  for (const r of rounds) {
    const lead = (r.targets ?? []).find((t) => drillForTarget.has(t));
    if (!lead) die(`round ${r.id} names no target that resolves to a drill, so it can fire nothing`);
    if (leads.includes(lead)) die(`round ${r.id} leads on "${lead}", which another round already leads on, so one drill is dead`);
    leads.push(lead);
  }
  const fired = new Set(leads.map((t) => drillForTarget.get(t)!));
  if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) {
    die(`expected ${EXPECTED_TRIGGERS} error triggers, found ${(LESSON.errorTriggers ?? []).length}`);
  }
  if (rounds.length !== EXPECTED_ROUNDS) {
    die(`expected ${EXPECTED_ROUNDS} quiz rounds, found ${rounds.length}. One round per drill, or a drill is dead.`);
  }
  const teaching = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  if (orphans.length) {
    die(
      `drill(s) no quiz round can fire: ${orphans.join(', ')}\n`
      + `  drillForRound stops at a round's FIRST target that resolves to a drill, so a drill named only in second\n`
      + `  place never runs.`,
    );
  }
  const knownDrills = new Set((LESSON.drills ?? []).map((d) => d.id));
  for (const t of LESSON.errorTriggers ?? []) {
    if (!knownDrills.has(t.drill)) die(`trigger ${t.id} names drill "${t.drill}", which is not authored`);
    if (t.retest && !knownDrills.has(t.retest)) die(`trigger ${t.id} names retest "${t.retest}", which is not authored`);
    for (const d of t.detectOn) {
      const base = d.split('/')[0];
      if (!sectionIds.has(base)) die(`trigger ${t.id} detects on "${d}", and section "${base}" does not exist`);
    }
  }

  const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
  const danglingSheet = LESSON.sections
    .map((s) => (s as { sheetId?: string }).sheetId)
    .filter((id): id is string => Boolean(id) && !sheetIds.has(id!));
  if (danglingSheet.length) die(`sheetId(s) naming a sheet that does not exist: ${[...new Set(danglingSheet)].join(', ')}`);
  const unreachableSheets = [...sheetIds].filter(
    (id) => !LESSON.sections.some((s) => (s as { sheetId?: string }).sheetId === id));
  if (unreachableSheets.length) die(`sheet(s) no section links to: ${unreachableSheets.join(', ')}`);

  // NO cheatSheet INSIDE A REFERENCE SHEET. ReferenceSheet.tsx renders exactly
  // three section types (`teach`, `letterGrid`, `table`) and its default branch
  // draws the TITLE AND NOTHING ELSE. a1.13 has this defect shipped and a1.17
  // shipped it in v2. This lesson does not reopen it.
  const badSheetSections = (LESSON.sheets ?? []).flatMap((sh) =>
    (sh.sections ?? []).filter((sec) => !['teach', 'letterGrid', 'table'].includes(sec.type))
      .map((sec) => `${sh.id}/${(sec as { id?: string }).id} is a ${sec.type}`));
  if (badSheetSections.length) {
    die(
      `reference sheet section(s) of a type the component does not draw:\n  ${badSheetSections.join('\n  ')}\n`
      + `  ReferenceSheet.tsx draws teach, letterGrid and table, and falls through to a title-only branch for\n`
      + `  anything else. a1.13 has this shipped and a1.17 shipped it in v2. Both were found on a device.`,
    );
  }

  if (JSON.stringify(LESSON).includes('"autoplay"')) {
    die('autoplay is authored somewhere. It is declared in schema.ts and read by no component. Use audioFirst.');
  }

  /* ── The database ──────────────────────────────────────────────────────── */

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    const reused = LESSON.itemIds.filter((id) => !ids.includes(id));
    if (reused.length) {
      const found = await client.query<{ id: string }>(
        `select id from content_items where id = any($1) and status = 'published'`, [reused],
      );
      const missing = reused.filter((id) => !found.rows.some((r) => r.id === id));
      if (missing.length) die(`lesson references unpublished/unknown items:\n  ${missing.join('\n  ')}`);
    }

    const reusedIds = REUSED.map((r) => r.id);
    const foundReused = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items where id = any($1) and status = 'published'`, [reusedIds],
    );
    const drifted = REUSED
      .map((r) => ({ r, row: foundReused.rows.find((x) => x.id === r.id) }))
      .filter(({ r, row }) => !row || row.fr !== r.fr)
      .map(({ r, row }) => `${r.id}: this lesson says "${r.fr}", the database says "${row?.fr ?? 'NOT PUBLISHED'}"`);
    if (drifted.length) die(`REUSED has drifted from the database:\n  ${drifted.join('\n  ')}`);

    const importedIds = IMPORTS.map((i) => i.id);
    const foundImports = await client.query<{
      id: string; kind: string; theme: string; fr: string; en: string; drills: string[]; status: string;
      card_type: string | null; respell: string | null;
    }>(
      `select id, kind, theme, fr, en, drills, status, card_type, respell from content_items where id = any($1)`,
      [importedIds],
    );
    const importDrift: string[] = [];
    for (const it of IMPORTS) {
      const row = foundImports.rows.find((r) => r.id === it.id);
      if (!row) { importDrift.push(`${it.id} is not in this database at all`); continue; }
      if (row.status !== 'published') importDrift.push(`${it.id} is ${row.status}, not published`);
      if (row.fr !== it.fr) importDrift.push(`${it.id}: manifest says "${it.fr}", database says "${row.fr}"`);
      if ((row.en ?? '') !== it.en) importDrift.push(`${it.id}: gloss differs ("${it.en}" vs "${row.en}")`);
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
        + `  Re-run scripts/_negation_manifest.ts and rebuild scripts/data/negation-imported.ts.`,
      );
    }

    const repairIds = RESPELL_REPAIRS.map((r) => r.id);
    const repairRows = await client.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where id = any($1)`, [repairIds],
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

    /* ── The dictée, through the real dicteeMode ─────────────────────────── */

    const byId = new Map(NEW_ITEMS.map((i) => [i.id, i] as const));
    const noDictTag: string[] = [];
    const wrongMode: string[] = [];
    const modes: string[] = [];
    for (const id of NEGATION_DICTATION_IDS) {
      const it = byId.get(id);
      if (!it) die(`the dictée names ${id}, which this batch does not author`);
      const mode = dicteeMode(it.fr);
      const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
      modes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"${decoys.length ? ` decoys=${decoys.join('/')}` : ''}`);
      // MEASURED, not assumed, and WORDS is the mode this lesson wants. The
      // first step of a negative is an ORDER: ne in front of the verb and pas
      // behind it. Word mode hands the learner the sentence's own words and
      // makes them place the two particles, which is the only mode that tests
      // it. a1.17 needed the opposite for the opposite reason.
      if (mode !== 'words') {
        wrongMode.push(`${id} "${it.fr}" is ${mode} mode`);
      }
      if (!it.drills.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
    }
    if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);
    if (wrongMode.length) {
      die(
        `dictée target(s) that land in LETTERS mode:\n  ${wrongMode.join('\n  ')}\n`
        + `  Letters mode is a spelling test and this lesson does not teach spelling. Word mode is the ORDER test,\n`
        + `  which is exactly the first step of a negative. Choose a longer target.`,
      );
    }

    /* ── The speak mission ───────────────────────────────────────────────── */

    if (!NEGATION_SPEAK_IDS.length) die('the speak mission names no items');
    const toCheck = NEGATION_SPEAK_IDS.filter((id) => !byId.has(id));
    const speakRows = toCheck.length
      ? (await client.query<{ id: string; drills: string[] }>(
        `select id, drills from content_items where id = any($1)`, [toCheck])).rows
      : [];
    const badSpeak = [
      ...NEGATION_SPEAK_IDS.filter((id) => byId.has(id) && !byId.get(id)!.drills.includes('voiceflash')),
      ...toCheck.filter((id) => !drillsOf(speakRows.find((r) => r.id === id)?.drills).includes('voiceflash')),
    ];
    if (badSpeak.length) die(`items named by the speak mission carry no "voiceflash" drill:\n  ${badSpeak.join('\n  ')}`);
    // NOT ONE POSITIVE. A speak mission that had the learner say « J'ai un
    // livre » out loud would be practising the sentence this lesson exists to
    // change.
    const positivesInSpeak = NEGATION_SPEAK_IDS.filter((id) => POSITIVE_IDS.includes(id));
    if (positivesInSpeak.length) {
      die(`the speak mission names positive sentence(s): ${positivesInSpeak.join(', ')}. Every line said out loud is a negative.`);
    }

    /* ── The unit, and the theme binding this batch CREATES ──────────────── */

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`, [UNIT_ID],
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units, cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    if (unitBody.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unitBody.title}"`);
    if (unitBody.sub !== UNIT_SUB) {
      die(
        `unit ${UNIT_ID} sub has changed: "${unitBody.sub}"\n`
        + `  Expected "${UNIT_SUB}". Do not "fix" this by retyping: compare the bytes.`,
      );
    }
    if (unitBody.canDo !== UNIT_CANDO) {
      die(
        `unit ${UNIT_ID} canDo has changed:\n`
        + `    database: ${JSON.stringify(unitBody.canDo)}\n`
        + `    expected: ${JSON.stringify(UNIT_CANDO)}\n`
        + `  The canDo contains U+2026 HORIZONTAL ELLIPSIS in « ne… pas », not three periods. If these differ by\n`
        + `  one character, that is almost certainly it.`,
      );
    }

    const expectedTag = `A1 · LEÇON ${String(unitBody.seq).padStart(2, '0')}`;
    if (LESSON.tag !== expectedTag) {
      die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unitBody.seq}, so the header will draw "${expectedTag}"`);
    }

    const themesNow = (unitBody as Unit & { themes?: string[] | null }).themes;
    if (themesNow != null && themesNow.join() !== UNIT_THEMES.join()) {
      die(
        `unit ${UNIT_ID} already declares themes ${JSON.stringify(themesNow)}, expected null or ${JSON.stringify(UNIT_THEMES)}.\n`
        + `  Somebody has bound this unit since the probe. Look before overwriting.`,
      );
    }
    const boundCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = $1 and status = 'published'`, [UNIT_THEMES[0]],
    );
    const nBound = Number(boundCount.rows[0]?.n ?? 0);
    if (nBound < 500) {
      die(`theme "${UNIT_THEMES[0]}" holds only ${nBound} published items, which is not the theme this batch measured (604).`);
    }

    /* ── THE ID COLLISION CHECK, AND WHY IT IS NOT A NEXT-FREE CHECK ──────
     *
     * a1.15 landed at 23:36 UTC on 2026-08-06, between a1.17's pre-flight probe
     * and its first dry run, and took exactly the range a1.17 had authored into.
     * A HIGHEST-ID CHECK PASSED IT CLEANLY, because eighteen rows below this
     * batch's top do not move the maximum. The tell was a row COUNT that had
     * moved, which nothing was looking at.
     *
     * So the check is: does any row inside THIS BATCH'S OWN RANGE exist that
     * this batch did not author? */
    const inRange = await client.query<{ id: string; fr: string; updated_at: Date }>(
      `select id, fr, updated_at from content_items
        where id >= $1 and id <= $2 and id like 'fr.a1.negation-et-restriction.%'`,
      [OWNED_ID_RANGE.from, OWNED_ID_RANGE.to],
    );
    const foreign = inRange.rows.filter((r) => !ids.includes(r.id));
    if (foreign.length) {
      die(
        `${foreign.length} row(s) inside this batch's own id range were authored by somebody else:\n  `
        + foreign.map((r) => `${r.id} "${r.fr}" (updated ${r.updated_at.toISOString()})`).join('\n  ') + `\n`
        + `  Writing this batch would OVERWRITE them. Renumber this lesson rather than forcing it.`,
      );
    }
    const maxTheme = await client.query<{ max: string | null }>(
      `select max(id) as max from content_items where id like 'fr.a1.negation-et-restriction.%'`,
    );
    const highest = maxTheme.rows[0]?.max ?? '';
    if (highest > OWNED_ID_RANGE.to) {
      console.warn(
        `\n⚠  fr.a1.negation-et-restriction now runs to ${highest}, above this batch's ${OWNED_ID_RANGE.to}.`
        + `\n   This batch is idempotent by id and writes only its own rows, so it is safe, but the handover's`
        + `\n   NEXT FREE (${HANDOVER_NEXT_FREE_ID}) is now stale.\n`,
      );
    }

    const nextUnit: Unit = {
      ...unitBody,
      themes: UNIT_THEMES,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    } as Unit;
    if (nextUnit.title !== unitBody.title || nextUnit.sub !== unitBody.sub || nextUnit.canDo !== unitBody.canDo) {
      die('this batch would change the unit title, sub or canDo. All three are correct and the Den advertises them.');
    }
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    const existingLesson = await client.query<{ version: number }>(
      `select (body->>'version')::int as version from content_units where kind = 'lesson' and slug = $1`, [LESSON.id],
    );
    const prior = existingLesson.rows[0]?.version;
    guardLessonVersion({
      lessonId: LESSON.id, prior, authored: LESSON.version,
      sourceFile: 'negation-lesson.ts', dryRun: DRY_RUN, die,
    });

    /* ── Report ──────────────────────────────────────────────────────────── */

    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  authored items: ${AUTHORED.length} (${PAIRS.length} positive/negative PAIRS plus the dropped-ne row)`);
    console.log(`    fr.a1.negation-et-restriction.043-.069, continuing from .042. The gap at .027 is left as a gap.`);
    console.log(`    ÊTRE-EXCEPTION ROWS AUTHORED: ${etreExceptionRows.length}. The corpus has TWO in 47,444 rows and neither is usable:`);
    console.log(`      fr.sons.alphabet.370 is a spelling contrast, fr.c1.rhetorique.028 is C1.`);
    console.log(`      "ne sont pas des", "ne suis pas un/une" and "n'es pas un/une" all return ZERO.`);
    console.log(`  imported items: ${IMPORTS.length}, verified field by field, ALL ABSENT FROM THE SEED`);
    console.log(`  reused items: ${REUSED.length}, already in the seed, untouched`);
    console.log(`  a1.03's ending population: ${genderPopulation.length} rows added (every authored row is a sentence with no gender)`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}", ${prior !== undefined ? `updating v${prior} → v${LESSON.version}` : 'NEW'}, `
      + `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`,
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  BOTH CHANGES ON ONE SCREEN: ${BOTH_CHANGES_SECTION_ID}, three complete pairs`);
    console.log(`  THE THREE-WAY CONTRAST: ${CONTRAST_SECTION_ID}, one noun, three outcomes, only the verb differs`);
    console.log(`    ${CONTRAST_LIVRE.map((p) => `${p.neg} (${p.outcome})`).join('  |  ')}`);
    console.log(`  the dropped ne is RECOGNITION ONLY: not in speak, not in the dictée, no produce answer key`);
    console.log(`  no other negator, no negative imperative, no ne pas + infinitive on any production surface`);
    console.log(`  no produce surface asks for a verb outside être and avoir (7 reading-exposure rows allowed)`);
    console.log(`  imageRefs authored: ${imageRefs.length} (nothing validates imageRef, so this lesson uses none)`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round((formats.mcq ?? 0) / qs.length * 100)}% (ceiling 50)`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  no option refers to a position, none duplicated within a question: confirmed`);
    console.log(`  authored answer spread: ${Object.entries(slots).map(([k, n]) => `slot ${k} ${Math.round(n / closed.length * 100)}%`).join(', ')} (cap 40)`);
    console.log(`  r4-the-verb-decides MIXES the two outcomes, so it cannot be passed by always answering de`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${fired.size}/${teaching.length}, each the FIRST resolving target of exactly one round`);
    console.log(`  round leads: ${leads.join(', ')}`);
    console.log(`  dictation: ${NEGATION_DICTATION_IDS.length} lines, ALL in WORD mode (the order test, which is step one)`);
    for (const m of modes) console.log(`    ${m}`);
    console.log(`  speak: ${NEGATION_SPEAK_IDS.length} lines, all carrying voiceflash, all negatives, none ne-less`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  respellings authored: ${Object.keys(RESPELL).length}, all passing the nasal convention`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  no neighbour's content ✓`);

    console.log(`\n  RESPELLING REPAIR (not silent), display-only:`);
    for (const r of RESPELL_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      console.log(`    ${r.id}  ${r.fr}: "${now}" → "${r.to}"   ${r.caughtByChecker ? '(checker catches it)' : '(INVISIBLE to the shared checker)'}`);
      console.log(`      hasPlainNasalFor('non','NOHN') = ${hasPlainNasalFor('non', 'NOHN')}, ('non','NOHⁿ') = ${hasPlainNasalFor('non', 'NOHⁿ')}`);
    }
    if (alreadyRepaired) console.log(`    (already carries the corrected value; re-upserting is a no-op)`);
    console.log(`\n  NOT REPAIRED, and reported rather than done:`);
    for (const n of NOT_REPAIRED) console.log(`    ${n.id}  "${n.fr}" ${n.respell}`);
    console.log(`    rien and personne belong to ne… rien and ne… personne, which this canDo excludes and which no`);
    console.log(`    A1 unit owns. Neither appears on any screen this lesson draws. Invariant §9.`);

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(themesNow ?? null)} → ${JSON.stringify(UNIT_THEMES)}   <- THE BINDING THIS BATCH CREATES`);
    console.log(`      the theme holds ${nBound} published rows and the unit pointed at nothing`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unitBody.prereqUnitIds ?? [])} (UNCHANGED)`);
    console.log(`\n  HANDOVER: NEXT FREE is ${HANDOVER_NEXT_FREE_ID}. si is left for a1.19, untouched.`);

    if (DRY_RUN) {
      console.log('\n✓ dry run, all valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of NEW_ITEMS) {
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
        ],
      );
    }

    for (const r of RESPELL_REPAIRS) {
      const res = await client.query(
        `update content_items set respell = $1 where id = $2 and fr = $3`, [r.to, r.id, r.fr],
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
      `\n✓ negation batch applied: ${NEW_ITEMS.length} items (${AUTHORED.length} authored, ${IMPORTS.length} imported)`
      + ` + ${RESPELL_REPAIRS.length} respelling repair + lesson ${LESSON.id} published,`
      + `\n  unit ${UNIT_ID} linked AND BOUND to "${UNIT_THEMES[0]}" for the first time.`
      + `\n  Next: pnpm tsx scripts/merge-negation-into-seed.ts --dry-run`
      + `\n  Do NOT run pnpm content:publish. It regenerates seed.json FROM this database and`
      + `\n  pnpm content:parity exits 1 on pre-existing divergences that are not this lesson's.\n`,
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
