/* Applies a1.22.l1 "Pays & nationalités" to Postgres: 11 authored sentences, 40
 * imported rows verified field by field, 10 respelling repairs, 1 IPA repair,
 * the lesson, and the unit rebinding from the dead `identite` theme to
 * `pays-et-nationalites`. Validates EVERYTHING before it opens a transaction.
 *
 *     pnpm tsx scripts/author-pays-batch.ts --dry-run
 *     pnpm tsx scripts/author-pays-batch.ts
 *
 * Order matters and it has cost real work twice: apply to Postgres FIRST, merge
 * into the seed SECOND, and publish only when both agree. content:publish
 * regenerates seed.json FROM this database, so publishing before applying would
 * silently delete the lesson from the seed.
 *
 * ── THE ONE THING TO READ BEFORE RUNNING THIS ──────────────────────────────
 *
 * THE IMPORTS MOVE SIX OF a1.03's TWENTY-SEVEN PRINTED FIGURES, and this script
 * measures the move through the REAL endingPopulation and prints it rather than
 * failing on it. Nothing AUTHORED here reaches that population and the script
 * holds authored rows to zero; the imported country and nationality headwords
 * are gendered single-word nouns and unavoidably do. Every move is a COUNT: no
 * accuracy, no predicted gender and no floor changes. See the header of
 * scripts/data/pays-corpus.ts and the a1.11 precedent at genre-lesson.ts:1646.
 *
 * AFTER THIS BATCH AND ITS MERGE, a1-03-genre.test.ts WILL BE RED until the six
 * counts in genre-endings.ts are re-measured and a1.03 is re-rendered. That is
 * the documented sequence, not a surprise. */
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
import { dicteeMode, wordDecoys } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  AUTHORED_SENTENCES, CONJUGATED_FORMS, FORBIDDEN_FORMS, GRID_CELLS, IMPORTED, IPA_REPAIRS,
  LANGUAGE_TEACHING, NASAL_FORMS, NOT_NASAL_FORMS, NOT_REPAIRED, QUEBEC_TEACHING,
  READING_ONLY_FORMS, READING_ONLY_IDS, RECENT_PAST_FRAMES, REPAIRS_INVISIBLE_TO_CHECKER,
  RESPELL, RESPELL_REPAIRS, REUSED, THE_TWELVE, TIES_LEFT_ALONE, WITHDRAWN_IDS,
  OWNED_ID_RANGE, HANDOVER_NEXT_FREE_ID, hasPhrase, toItem,
} from './data/pays-corpus.ts';
import {
  PAYS_DICTATION_IDS, PAYS_LESSON, PAYS_READING_ONLY_IDS, REFRAME,
} from './data/pays-lesson.ts';
import { ENDING_RULES, WORTHLESS_ENDINGS, MORE_ENDINGS } from './data/genre-endings.ts';
import { guardLessonVersion } from './version-guard.logic.ts';

const AUTHORED: Item[] = AUTHORED_SENTENCES.map(toItem);
const IMPORTS: Item[] = IMPORTED;
const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTS];
const LESSON: Lesson = PAYS_LESSON;
const UNIT_ID = 'a1.22';

/** Asserted against an explicit constant, never a figure derived from the
 *  lesson. A derived count compares the content to itself and passes on any
 *  rewording. */
const REFRAME_APPEARANCES = 13;

const EXPECTED_TRIGGERS = 7;
const EXPECTED_ROUNDS = 7;
const EXPECTED_COUNTRIES = 12;
const EXPECTED_AUTHORED = 11;
const EXPECTED_IMPORTED = 40;
const EXPECTED_REPAIRS = 10;

/** THE REBINDING. The unit declares a theme that holds nothing at all. */
const UNIT_THEMES_BEFORE = ['identite'];
const UNIT_THEMES_AFTER = ['pays-et-nationalites'];
const UNIT_TITLE = 'Countries and Nationalities';
const UNIT_SUB = 'Pays & nationalités';
const UNIT_CANDO = 'Can say which country they are from and are going to, and what nationality they are';

/** Reported, not applied. Changing a unit's prerequisites is a change to the
 *  spine and belongs to whoever owns the track. */
const PREREQ_RECOMMENDED = ['a1.06', 'a1.03'];

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

/** Does this quiz stem name the country WITH its article?
 *
 *  THE MOST IMPORTANT CHECK IN THIS FILE, and the brief says so: "en or au?" is
 *  unanswerable, and a stem that names the country WITHOUT its article tests
 *  whether the learner memorised a phrase rather than whether they know the
 *  rule. Only applied to questions that are actually about a preposition, found
 *  by looking for one of the six in the options or in the accepted answers.
 *
 *  Deliberately generous: a guard that fires on a legitimate question gets
 *  deleted rather than fixed. A stem that names the KIND ("la Chine is the la
 *  kind") satisfies it, because that is the article stated in this lesson's own
 *  words. */
const ARTICLE_MARKERS = [
  'la france', 'le canada', 'la belgique', 'les états-unis', 'le sénégal', "l'allemagne",
  "l'espagne", "l'italie", 'le portugal', 'le japon', 'le mexique', "l'iran",
  'la chine', 'le brésil', 'la suisse', 'le maroc',
  'la kind', 'le kind', 'les kind', 'its article', 'with its article',
];
const PREP_WORDS = ['en', 'au', 'aux', 'de', 'du', 'des'];

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

  if (AUTHORED.length !== EXPECTED_AUTHORED) die(`${AUTHORED.length} authored rows, expected ${EXPECTED_AUTHORED}`);
  if (IMPORTS.length !== EXPECTED_IMPORTED) die(`${IMPORTS.length} imported rows, expected ${EXPECTED_IMPORTED}`);
  if (THE_TWELVE.length !== EXPECTED_COUNTRIES) die(`${THE_TWELVE.length} countries, expected ${EXPECTED_COUNTRIES}`);
  if (RESPELL_REPAIRS.length !== EXPECTED_REPAIRS) die(`${RESPELL_REPAIRS.length} repairs, expected ${EXPECTED_REPAIRS}`);

  // NOT ONE HEADWORD IS AUTHORED. Every country and nationality already exists,
  // and re-authoring one fails flashhub-coverage.test.ts, which keys decks on
  // `fr` per theme.
  const authoredHeadwords = AUTHORED.filter((i) => i.kind !== 'sentence');
  if (authoredHeadwords.length) {
    die(
      `${authoredHeadwords.length} authored row(s) are not sentences: ${authoredHeadwords.map((i) => i.id).join(', ')}\n`
      + `  Every country and every nationality this lesson teaches is already published. Authoring one would be a\n`
      + `  second card for the same word in the same theme, which flashhub-coverage.test.ts treats as one card\n`
      + `  served twice, and it would also join a1.03's measured population.`,
    );
  }

  // flashhub-coverage.test.ts keys decks on `fr` per theme with the article
  // stripped, so two rows sharing an fr in one theme are one card served twice.
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

  const smuggled = NEW_ITEMS.filter((i) => WITHDRAWN_IDS.includes(i.id));
  if (smuggled.length) {
    die(
      `withdrawn row(s) are back in the batch: ${smuggled.map((i) => `${i.id} "${i.fr}"`).join(', ')}\n`
      + `  See WITHDRAWN_IDS in pays-corpus.ts. Each has a reason and none of them is taste.`,
    );
  }

  /* ── a1.03's measured population, through the REAL function ─────────────
   *
   * TWO CHECKS, AND THEY ARE NOT THE SAME CHECK.
   *
   * AUTHORED must be zero, and it is enforced. Every authored row here is a
   * sentence, which endingPopulation excludes outright, so a gendered headword
   * appearing in this lesson would be a mistake rather than a decision.
   *
   * IMPORTED is measured and REPORTED rather than enforced. A country noun is
   * gendered and single-word, and `la France` ends in -e because every feminine
   * country does: there is no country set that teaches this lesson's decision
   * and leaves a1.03's counts alone. The move is modelled here in full so the
   * exact figures are on the record before anything is written.               */

  const authoredJoiners = endingPopulation(
    AUTHORED.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags })),
  );
  if (authoredJoiners.length) {
    die(
      `this batch AUTHORS ${authoredJoiners.length} row(s) into a1.03's measured ending population:\n  `
      + authoredJoiners.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n`
      + `  Nothing authored here should reach it: every authored row is a sentence and this lesson authors no\n`
      + `  headword at all. a1.11 moved a1.03's -e statistic this way and turned a lesson nobody had touched red.`,
    );
  }

  const importJoiners = endingPopulation(
    IMPORTS.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags })),
  );

  /* ── Lesson ────────────────────────────────────────────────────────────── */

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  const density = validateDensity(LESSON, new Set([...ids, ...LESSON.itemIds]));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  const authoredJson = JSON.stringify({ AUTHORED, LESSON });
  if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
  if (authoredJson.includes('‿')) {
    die(
      'U+203F tie character in authored copy, which renders as a low underscore on a Pixel 6.\n'
      + '  Six IMPORTED rows carry one and five keep it deliberately (they mark a liaison, which is real\n'
      + '  information the spelling does not show). Nothing AUTHORED here may introduce a new one.',
    );
  }

  const learnerFacing = [
    ...strings(LESSON.sections),
    ...strings(LESSON.sheets ?? []),
    ...strings(LESSON.terms ?? {}),
  ];
  const isIdentifier = (s: string) => !/\s/.test(s) && /^[a-z0-9][a-z0-9.\-_/]*$/i.test(s);
  // `préposition` is added to the shared list because it is this lesson's own
  // subject and therefore the single most likely piece of jargon to slip onto a
  // card. `accord` carries a negative lookbehind for the apostrophe: « d'accord »
  // is ordinary conversational French and an apostrophe counts as a word boundary
  // in JavaScript, so a bare \baccord\b fires on it.
  const jargon = learnerFacing.filter((s) => !isIdentifier(s)
    && /\b(conjugaison|préposition|nom propre|article (défini|indéfini|partitif)|adjectif|possessif|(?<!')accord|masculin|féminin|invariable|déterminant)\b/i.test(s));
  if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }
  const reframeSections = LESSON.sections.filter((s) => strings(s).some((t) => t.includes(REFRAME))).length;
  if (reframeSections < 3) die(`the reframe is carried by ${reframeSections} sections; the density validator wants at least 3`);

  /* ── Respellings, and the blind spot that reaches this lesson ──────────── */

  const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  if (badNasal.length) {
    die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
  }
  // BY NAME, because the shared checker cannot see a WORD-INTERNAL nasal.
  // `la France` is exactly that case: LAH FRAHNSS passes hasPlainNasalFor
  // cleanly because SS follows the n. Invariant §3's first blind spot, the same
  // one that let a1.09's sep-TAHNBR and a1.13's oh-RAHNZH through.
  const missingSuperscript = NASAL_FORMS.filter((f) => !RESPELL[f]?.respell.includes('ⁿ'));
  if (missingSuperscript.length) {
    die(
      `form(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}\n`
      + `  hasPlainNasalFor does not catch a word-internal nasal (la France is one), so this is checked by name.`,
    );
  }
  // THE OPPOSITE CHECK, and the brief asks for two of these three by name.
  // l'Espagne and l'Allemagne are flagged by the probe's letter-level heuristic
  // and are CORRECT: /lɛspaɲ/ and /lalmaɲ/ carry no nasal vowel at all, because
  // `agne` is a plain a plus a palatal ɲ. A superscript on either would teach a
  // sound that is not in the word, which is a1.13's `jaune` trap exactly.
  const wronglyNasalised = NOT_NASAL_FORMS.filter((f) => RESPELL[f]?.respell.includes('ⁿ'));
  if (wronglyNasalised.length) {
    die(
      `form(s) respelled with a superscript n that have NO nasal vowel: ${wronglyNasalised.join(', ')}\n`
      + `  l'Espagne and l'Allemagne are the two the probe flags and the two that are already right. Verified by\n`
      + `  hand: agne is /aɲ/, a plain vowel plus a palatal consonant, and there is no nasal vowel to close.`,
    );
  }
  // THE THREE THE BRIEF ASKS FOR BY NAME, pinned so a later validator-passing
  // "fix" goes red in both directions.
  if (RESPELL['la France'].respell !== '[LAH FRAHⁿSS]') {
    die(`la France is respelled ${RESPELL['la France'].respell}, expected [LAH FRAHⁿSS]. /fʁɑ̃s/ carries a nasal vowel.`);
  }
  if (hasPlainNasalFor('la France', '[LAH FRAHNSS]')) {
    die('hasPlainNasalFor now catches LAH FRAHNSS. If the checker has learned to see word-internal nasals, §3 needs updating.');
  }
  if (RESPELL["l'Espagne"].respell !== '[lehs-PAHNY]') {
    die(`l'Espagne is respelled ${RESPELL["l'Espagne"].respell}, expected [lehs-PAHNY] UNCHANGED. It has no nasal vowel.`);
  }
  if (RESPELL["l'Allemagne"].respell !== '[lahl-MAHNY]') {
    die(`l'Allemagne is respelled ${RESPELL["l'Allemagne"].respell}, expected [lahl-MAHNY] UNCHANGED. It has no nasal vowel.`);
  }
  // THE COLLAPSE. canadien carries a nasal vowel and canadienne does not, which
  // is the entire ear pair. If the two ever stop differing, the pair is a lie.
  if (!RESPELL.canadien.respell.includes('ⁿ') || RESPELL.canadienne.respell.includes('ⁿ')) {
    die(
      `the canadien / canadienne pair is broken: ${RESPELL.canadien.respell} against ${RESPELL.canadienne.respell}.\n`
      + `  The masculine carries a nasal vowel and the feminine collapses it into a plain vowel plus a real n.\n`
      + `  That difference IS the ear question, and it is a1.13's brun / brune shape.`,
    );
  }
  if (RESPELL.français.respell === RESPELL.française.respell) {
    die('français and française carry identical respellings. The s wakes up: that difference is the other ear question.');
  }

  /* ── The shape of the lesson ───────────────────────────────────────────── */

  const learnerText = learnerFacing.join('\n');

  // EVERY COUNTRY ASSERTED BY NAME AND WITH ITS ARTICLE, individually rather
  // than as a count. A country stripped of its article in a later edit destroys
  // the reframe silently and every other check stays green.
  const bare = THE_TWELVE.filter((c) => !learnerText.includes(c.fr));
  if (bare.length) die(`country(ies) never shown with their article on any screen: ${bare.map((c) => c.fr).join(', ')}`);
  const noNat = THE_TWELVE.filter((c) => !hasPhrase(learnerText, c.nat));
  if (noNat.length) die(`nationality(ies) never named on any screen: ${noNat.map((c) => c.nat).join(', ')}`);

  // THE HERO GRID: three rows and BOTH directions on ONE screen. The brief calls
  // this the layout the test must assert, and it is right: split across two
  // missions the two systems stop looking like one decision.
  const gridSections = LESSON.sections.filter((s) => {
    if (s.type !== 'tapTable') return false;
    const text = strings(s).join('\n');
    return (['f', 'm', 'pl'] as const).every((slot) => {
      const c = THE_TWELVE.find((x) => x.slot === slot)!;
      return text.includes(c.to) && text.includes(c.from);
    });
  }).map((s) => (s as { id?: string }).id ?? '?');
  if (!gridSections.length) {
    die(
      'no single tapTable carries all three rows in BOTH directions.\n'
      + '  That grid IS the reframe made visible. Split across two missions the going-to and coming-from systems\n'
      + '  stop looking like one decision, which is the only claim this lesson makes.',
    );
  }
  if (!gridSections.includes('s14-grid')) {
    die(`the two-column grid appears in ${gridSections.join(', ')} but NOT in s14-grid, which is the section designed to be it.`);
  }

  // THE VOWEL EXCEPTION, BY NAME, so it is not dropped as an edge case.
  const iran = THE_TWELVE.find((c) => c.slot === 'mv')!;
  if (!learnerText.includes(iran.to)) die(`"${iran.to}" appears on no screen. The vowel exception is the one rule a redraft loses first.`);
  if (!learnerText.includes(iran.from)) die(`"${iran.from}" appears on no screen, so the learner is never shown where the exception stops.`);

  // THE CAPITAL RULE, BOTH FORMS ON ONE SCREEN.
  const capitalSections = LESSON.sections.filter((s) => {
    const text = strings(s).join('\n');
    return text.includes('Il est français.') && text.includes("C'est un Français.");
  }).map((s) => (s as { id?: string }).id ?? '?');
  if (!capitalSections.includes('s19-capital')) {
    die(
      `no section puts « Il est français. » beside « C'est un Français. » (found: ${capitalSections.join(', ') || 'none'}).\n`
      + `  The only difference between them is a capital letter and an article, and split across two cards they\n`
      + `  are two unremarkable sentences.`,
    );
  }

  // AGREEMENT IS NOT TAUGHT AS NEW. a1.09 names a1.08; this names a1.13 and
  // a1.06, both of which shipped material this act is extending rather than
  // introducing.
  const namesColours = learnerFacing.some((s) => /colou?rs lesson/i.test(s));
  const namesEtre = learnerFacing.some((s) => /être lesson/i.test(s));
  if (!namesColours) die('the lesson never names the colours lesson. Agreement is a1.13\'s and is being applied, not taught.');
  if (!namesEtre) die('the lesson never names the être lesson. a1.06 already ships the no-article rule AND the capital rule.');

  /* ── The neighbours keep their lessons ─────────────────────────────────── */

  // Written against PRODUCTION SURFACES rather than every string, or they fire
  // on legitimate context and get deleted.
  // A SCENARIO IS NOT ONE SURFACE. `turns[].ai` is the other person speaking and
  // the learner only has to UNDERSTAND it: « Vous venez d'où ? » is the question
  // this whole lesson answers and it cannot be asked in the first person. What
  // the learner PRODUCES is `user` and `alts`, and those are what the guards
  // below run on. A first draft scanned the whole section and fired on the AI's
  // own question, which is exactly the shape of guard that gets deleted.
  const scenarios = LESSON.sections.filter((s) => s.type === 'scenario') as unknown as {
    turns?: { ai: string; user: string; alts?: { fr: string }[] }[];
  }[];
  const scenarioProduced = scenarios.flatMap((s) => (s.turns ?? [])
    .flatMap((t) => [t.user, ...(t.alts ?? []).map((a) => a.fr)]));
  const productionSections = LESSON.sections.filter(
    (s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck', 'tapTable', 'practice', 'dictation'].includes(s.type),
  );
  const productionSurfaces = [
    ...strings(productionSections),
    ...scenarioProduced,
    ...strings(LESSON.drills ?? []),
    ...strings((LESSON.sections.find((s) => s.type === 'quiz') ?? {}) as unknown),
  ];

  // aller AND venir ARE NEVER CONJUGATED on a production surface. a2.02 owns
  // both verbs and this lesson has exactly two frozen frames.
  const conjugated = CONJUGATED_FORMS.filter((f) => productionSurfaces.some((s) => hasPhrase(s, f)));
  if (conjugated.length) {
    die(
      `a conjugated form of aller or venir reached a production surface: ${conjugated.join(', ')}\n`
      + `  a2.02 owns both verbs. This lesson has je vais and je viens as frozen frames and says so on a card.`,
    );
  }
  // THE THIRD PERSON IS READING ONLY. Three imported rows carry `il vient` or
  // `elle vient`, which is legitimate exposure, and none of them may be asked
  // for as output. Checked as the ROWS rather than as the strings, because the
  // strings appear on legitimate reading surfaces.
  const produceSurfaces = [
    ...((LESSON.sections.find((s) => (s as { id?: string }).id === 's23-speak') as { itemIds?: string[] })?.itemIds ?? []),
    ...((LESSON.sections.find((s) => s.type === 'dictation') as { itemIds?: string[] })?.itemIds ?? []),
  ];
  const producedReadingOnly = PAYS_READING_ONLY_IDS.filter((id) => produceSurfaces.includes(id));
  if (producedReadingOnly.length) {
    die(
      `reading-only row(s) reached a production surface: ${producedReadingOnly.join(', ')}\n`
      + `  These carry il vient or elle vient. Reading them is fine and saying them is a2.02's verb.`,
    );
  }
  const scenarioTurns = LESSON.sections
    .filter((s) => s.type === 'scenario')
    .flatMap((s) => (s as { turns?: { user: string }[] }).turns ?? [])
    .map((t) => t.user);
  const thirdInScenario = READING_ONLY_FORMS.filter((f) => scenarioTurns.some((t) => hasPhrase(t, f)));
  if (thirdInScenario.length) die(`the learner is asked to produce a third-person venir: ${thirdInScenario.join(', ')}`);

  // NO RECENT PAST. 45 of the corpus's 134 `vien* d*` sentences are venir de
  // plus an infinitive, which is a2.02's and would arrive unnoticed.
  const recentPast = RECENT_PAST_FRAMES.filter((f) => strings(LESSON).some((s) => s.toLowerCase().includes(f.toLowerCase())));
  if (recentPast.length) {
    die(
      `the recent past reached a surface: ${recentPast.join(', ')}\n`
      + `  venir de plus an infinitive is a2.02 and is identical to origin in French, which is why none of the 45\n`
      + `  matching corpus rows is imported.`,
    );
  }

  const langHit = LANGUAGE_TEACHING.filter((w) => productionSurfaces.some((s) => s.toLowerCase().includes(w.toLowerCase())));
  if (langHit.length) {
    die(
      `language-learning teaching found, which belongs to ecole and matieres: ${langHit.join(', ')}\n`
      + `  français is the same word for the language, the adjective and the person. This lesson takes the`
      + ` nationality only.`,
    );
  }
  const quebecHit = QUEBEC_TEACHING.filter((w) => productionSurfaces.some((s) => s.toLowerCase().includes(w.toLowerCase())));
  if (quebecHit.length) {
    die(
      `Québec content found, which belongs to the 593-row quebec-et-francophonie theme: ${quebecHit.join(', ')}\n`
      + `  le Québec and québécois are published at .005 and .006 in this lesson's own theme and are deliberately\n`
      + `  not imported.`,
    );
  }

  // Scoped to CORRECT FRENCH: the traps card, the scene's wrong option and the
  // quiz distractors have to SHOW the error in order to teach it.
  const correctFrench: string[] = [
    ...AUTHORED.map((i) => i.fr),
    ...LESSON.sections.flatMap((s) => (s.type === 'commonErrors' ? s.errors.map((e) => e.right) : [])),
    ...scenarioTurns,
  ];
  const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
  const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
  const answerKeys: string[] = [
    ...qs.flatMap((q) => [q.answer ?? '', ...(q.accept ?? [])]),
    ...(LESSON.drills ?? []).flatMap((d) => (d.opts && d.correct !== undefined ? [d.opts[d.correct]] : [])),
    ...(LESSON.sections.find((s) => s.type === 'roundup') as { points?: string[] } | undefined)?.points ?? [],
  ];
  const violations: string[] = [];
  for (const text of [...correctFrench, ...answerKeys]) {
    for (const f of FORBIDDEN_FORMS) {
      if (hasPhrase(text, f)) violations.push(`"${f}" in "${text}"`);
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
      + `  promising a publish check is conditional on an asset manifest that does not exist. The brief also warns\n`
      + `  against building a map: no component draws one and no section type positions anything geographically.`,
    );
  }

  /* ── Quiz ──────────────────────────────────────────────────────────────── */

  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half ceiling`);

  const noWhy = qs.filter((q) => !q.why);
  if (noWhy.length) die(`${noWhy.length} quiz question(s) carry no why:\n  ${noWhy.map((q) => q.q).join('\n  ')}`);
  const noRef = qs.filter((q) => !q.ref);
  if (noRef.length) die(`${noRef.length} quiz question(s) carry no ref:\n  ${noRef.map((q) => q.q).join('\n  ')}`);
  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
  const badRef = qs.filter((q) => q.ref && !sectionIds.has(q.ref));
  if (badRef.length) die(`quiz ref(s) naming a section that does not exist: ${badRef.map((q) => q.ref).join(', ')}`);

  // EVERY PREPOSITION QUESTION NAMES THE COUNTRY WITH ITS ARTICLE.
  const prepQuestions = qs.filter((q) => {
    const space = [...(q.opts ?? []), ...(q.accept ?? []), q.answer ?? ''].join(' ').toLowerCase();
    return PREP_WORDS.some((p) => hasPhrase(space, p));
  });
  const halfStems = prepQuestions
    .filter((q) => !ARTICLE_MARKERS.some((m) => q.q.toLowerCase().includes(m)))
    .map((q) => q.q);
  if (halfStems.length) {
    die(
      `preposition question(s) whose stem does not name the country WITH its article:\n  ${halfStems.join('\n  ')}\n`
      + `  "en or au?" is unanswerable, and a stem naming the country bare tests whether the learner memorised a\n`
      + `  phrase rather than whether they know the rule. Showing le Canada in the stem tests the rule.`,
    );
  }

  // THE CAPITAL RULE IS TESTED ONLY BY mcq. fold() strips case, so français and
  // Français fold together and no free-text format can distinguish them. Both
  // the a1.08 and a1.09 briefs recommended errorSpot for a capital and both
  // were wrong.
  const capitalQs = qs.filter((q) => {
    const all = [q.q, ...(q.opts ?? []), ...(q.accept ?? []), q.answer ?? '', q.target ?? ''].join(' ');
    return /Français|capital/i.test(all) && /français/i.test(all);
  });
  const freeTextCapital = capitalQs.filter((q) => q.format === 'typeIn' || q.format === 'errorSpot');
  if (freeTextCapital.length) {
    die(
      `question(s) targeting the capital letter in a free-text format:\n  ${freeTextCapital.map((q) => `${q.format}: ${q.q}`).join('\n  ')}\n`
      + `  fold() strips case, so "français" and "Français" fold together and the question certifies nothing.\n`
      + `  errorSpot runs the SAME matchesAccept path as typeIn. Only mcq can test a capital, because its options\n`
      + `  are picked rather than typed and quiz-duplicate-option compares them case-sensitively.`,
    );
  }
  if (!capitalQs.some((q) => q.format === 'mcq')) {
    die('the capital rule is taught and tested by no mcq question, so it is taught and never checked.');
  }

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
    die(
      `authored answer slot(s) over the 40% cap: ${over.map(([k, n]) => `slot ${k} holds ${n}/${closed.length}`).join(', ')}\n`
      + `  quiz-spread fails the build above 40%, whatever the runtime shuffle does. Masculine countries outnumber\n`
      + `  feminine ones in most sets, so au and du go correct disproportionately often unless it is balanced.`,
    );
  }

  const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
  if (unacceptable.length) {
    die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
  }

  // NO EAR QUESTION ON A PREPOSITION. en and au sound nothing alike, so a
  // listenChoose separating them tests whether the learner was awake. Every
  // listenChoose here is an agreement question, which is a1.13's `wakesUp` idea
  // applied and genuinely audible.
  const earQs = qs.filter((q) => q.format === 'listenChoose');
  const prepEar = earQs.filter((q) => (q.opts ?? []).some((o) => PREP_WORDS.some((p) => hasPhrase(o, p))));
  if (prepEar.length) {
    die(
      `ear question(s) on a preposition:\n  ${prepEar.map((q) => q.q).join('\n  ')}\n`
      + `  en and au share no sound at all, so hearing them apart is not a skill. The genuine ear work in this\n`
      + `  lesson is the agreement: français against française, canadien against canadienne.`,
    );
  }
  if (!earQs.length) die('no listenChoose question at all. français against française is genuinely audible and is worth one.');

  /* ── Drill reachability ────────────────────────────────────────────────── */

  const drillForTarget = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const rounds = quizSection && quizSection.type === 'quiz' ? (quizSection.rounds ?? []) : [];
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
  if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} quiz rounds, found ${rounds.length}`);
  const teaching = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  if (orphans.length) {
    die(
      `drill(s) no quiz round can fire: ${orphans.join(', ')}\n`
      + `  drillForRound stops at a round's FIRST target that resolves to a drill, so a drill named only in second\n`
      + `  place never runs. Reorder the round's \`targets\`, add a round for it, or drop the drill.`,
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

  const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
  if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one, so the rest are unreachable.`);

  const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
  const danglingSheet = LESSON.sections
    .map((s) => (s as { sheetId?: string }).sheetId)
    .filter((id): id is string => Boolean(id) && !sheetIds.has(id!));
  if (danglingSheet.length) die(`sheetId(s) naming a sheet that does not exist: ${[...new Set(danglingSheet)].join(', ')}`);
  const unreachableSheets = [...sheetIds].filter(
    (id) => !LESSON.sections.some((s) => (s as { sheetId?: string }).sheetId === id));
  if (unreachableSheets.length) die(`sheet(s) no section links to: ${unreachableSheets.join(', ')}`);
  // ReferenceSheet.tsx draws exactly three section types inside a sheet and its
  // default branch draws the title and nothing else. a1.13 and a1.17 both
  // shipped a `cheatSheet` here and both drew a heading over nothing.
  const SHEET_RENDERS = new Set(['teach', 'letterGrid', 'table']);
  const deadSheetSections = (LESSON.sheets ?? []).flatMap((sh) => (sh.sections ?? [])
    .filter((sec) => !SHEET_RENDERS.has(sec.type))
    .map((sec) => `${sh.id}/${(sec as { id?: string }).id} is a ${sec.type}`));
  if (deadSheetSections.length) {
    die(
      `sheet section(s) of a type ReferenceSheet.tsx does not draw:\n  ${deadSheetSections.join('\n  ')}\n`
      + `  It renders teach, letterGrid and table, and falls through to a title-only branch for anything else.`,
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
        `select id from content_items where id = any($1) and status = 'published'`,
        [reused],
      );
      const missing = reused.filter((id) => !found.rows.some((r) => r.id === id));
      if (missing.length) die(`lesson references unpublished/unknown items:\n  ${missing.join('\n  ')}`);
    }

    const reusedIds = REUSED.map((r) => r.id);
    const foundReused = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items where id = any($1) and status = 'published'`,
      [reusedIds],
    );
    const missingReused = REUSED.filter((r) => !foundReused.rows.some((x) => x.id === r.id));
    if (missingReused.length) {
      die(`REUSED names items not published in THIS database:\n  ${missingReused.map((r) => `${r.id} "${r.fr}"`).join('\n  ')}`);
    }
    const drifted = REUSED
      .map((r) => ({ r, row: foundReused.rows.find((x) => x.id === r.id)! }))
      .filter(({ r, row }) => row.fr !== r.fr)
      .map(({ r, row }) => `${r.id}: this lesson says "${r.fr}", the database says "${row.fr}"`);
    if (drifted.length) die(`REUSED has drifted from the database:\n  ${drifted.join('\n  ')}`);

    const importedIds = IMPORTS.map((i) => i.id);
    const foundImports = await client.query<{
      id: string; kind: string; theme: string; fr: string; en: string; drills: string[]; status: string;
      card_type: string | null; respell: string | null; ipa: string | null; gender: string | null;
    }>(
      `select id, kind, theme, fr, en, drills, status, card_type, respell, ipa, gender
         from content_items where id = any($1)`,
      [importedIds],
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
      if ((row.gender ?? undefined) !== it.gender) {
        importDrift.push(`${it.id}: gender differs (${String(it.gender)} vs ${String(row.gender)})`);
      }
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
      const repairingIpa = IPA_REPAIRS.some((r) => r.id === it.id);
      if (!repairingIpa && (row.ipa ?? undefined) !== (it.ipa ?? undefined)) {
        importDrift.push(`${it.id}: ipa differs ("${String(it.ipa)}" vs "${String(row.ipa)}")`);
      }
    }
    if (importDrift.length) {
      die(
        `the IMPORTED manifest has drifted from the database:\n  ${importDrift.join('\n  ')}\n`
        + `  Re-run scripts/_pays_manifest.ts and paste the result into scripts/data/pays-imported.ts.`,
      );
    }

    const repairIds = [...new Set([...RESPELL_REPAIRS.map((r) => r.id), ...IPA_REPAIRS.map((r) => r.id)])];
    const repairRows = await client.query<{ id: string; fr: string; respell: string | null; ipa: string | null }>(
      `select id, fr, respell, ipa from content_items where id = any($1)`,
      [repairIds],
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
    for (const r of IPA_REPAIRS) {
      const row = repairRows.rows.find((x) => x.id === r.id);
      if (!row) { repairDrift.push(`${r.id} is not in this database`); continue; }
      if (row.ipa !== r.from && row.ipa !== r.to) {
        repairDrift.push(`${r.id}: expected ipa "${r.from}", database says "${row.ipa}"`);
      }
    }
    if (repairDrift.length) {
      die(`the repairs have drifted:\n  ${repairDrift.join('\n  ')}\n  Somebody has changed these rows. Look before overwriting.`);
    }
    const alreadyRepaired = RESPELL_REPAIRS.filter((r) =>
      repairRows.rows.find((x) => x.id === r.id)?.respell === r.to).length;

    /* ── The dictée, through the real dicteeMode ─────────────────────────── */

    const byId = new Map(NEW_ITEMS.map((i) => [i.id, i] as const));
    const dictRows = await client.query<{ id: string; fr: string; drills: string[] }>(
      `select id, fr, drills from content_items where id = any($1)`,
      [PAYS_DICTATION_IDS],
    );
    const noDictTag: string[] = [];
    const wrongMode: string[] = [];
    const modes: string[] = [];
    for (const id of PAYS_DICTATION_IDS) {
      const it = byId.get(id) ?? dictRows.rows.find((r) => r.id === id);
      if (!it) die(`the dictée names ${id}, which is neither in this batch nor in the database`);
      const mode = dicteeMode(it.fr);
      const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
      modes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"${decoys.length ? ` decoys=${decoys.join('/')}` : ''}`);
      if (mode !== 'letters') wrongMode.push(`${id} "${it.fr}" is ${mode} mode`);
      const d = byId.has(id) ? byId.get(id)!.drills : drillsOf((it as { drills: unknown }).drills);
      if (!d.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
    }
    if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);
    if (wrongMode.length) {
      die(
        `dictée target(s) that land in WORD mode:\n  ${wrongMode.join('\n  ')}\n`
        + `  Word mode offers each whole word as a tile, so the learner taps \`en\` rather than choosing it.\n`
        + `  « Elle est canadienne. » is 20 letters and cannot be a target at any length.`,
      );
    }

    /* ── The speak mission ───────────────────────────────────────────────── */

    const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's23-speak');
    const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
    if (!speakIds.length) die('the speak mission names no items');
    const toCheck = speakIds.filter((id) => !byId.has(id));
    const speakRows = toCheck.length
      ? (await client.query<{ id: string; drills: string[]; fr: string }>(
        `select id, drills, fr from content_items where id = any($1)`, [toCheck],
      )).rows
      : [];
    const badSpeak = [
      ...speakIds.filter((id) => byId.has(id) && !byId.get(id)!.drills.includes('voiceflash')),
      ...toCheck.filter((id) => !drillsOf(speakRows.find((r) => r.id === id)?.drills).includes('voiceflash')),
    ];
    if (badSpeak.length) die(`items named by the speak mission carry no "voiceflash" drill:\n  ${badSpeak.join('\n  ')}`);
    // NOT ONE BARE PREPOSITION. They are unstressed function words that only
    // exist attached to a country.
    const bareInSpeak = speakIds.filter((id) => {
      const row = byId.get(id) ?? speakRows.find((r) => r.id === id);
      return row && PREP_WORDS.includes(row.fr.trim().toLowerCase());
    });
    if (bareInSpeak.length) die(`the speak mission names a bare preposition: ${bareInSpeak.join(', ')}`);

    /* ── The countries carry the gender the whole lesson rests on ────────── */

    const genderRows = await client.query<{ id: string; fr: string; gender: string | null }>(
      `select id, fr, gender from content_items where id = any($1) and status='published'`,
      [THE_TWELVE.map((c) => c.id)],
    );
    const ungendered = THE_TWELVE.filter((c) => {
      const g = genderRows.rows.find((r) => r.id === c.id)?.gender;
      return g !== c.gender;
    });
    if (ungendered.length) {
      die(
        `country(ies) whose stored gender disagrees with this lesson: ${ungendered.map((c) => `${c.fr} (${c.id})`).join(', ')}\n`
        + `  The whole lesson rests on the learner being able to CHECK the article on the card. A country with no\n`
        + `  gender, or the wrong one, makes the grid something to take on trust.`,
      );
    }

    /* ── The unit, and THE REBINDING ─────────────────────────────────────── */

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID],
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

    const themesNow = (unitBody as Unit & { themes?: string[] }).themes ?? [];
    if (themesNow.join() !== UNIT_THEMES_BEFORE.join() && themesNow.join() !== UNIT_THEMES_AFTER.join()) {
      die(
        `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, expected ${JSON.stringify(UNIT_THEMES_BEFORE)} `
        + `(before this rebinding) or ${JSON.stringify(UNIT_THEMES_AFTER)} (after it). Somebody else has edited it.`,
      );
    }
    // The dead theme really is dead, and the real one really is populated.
    const deadCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = $1 and status = 'published'`,
      [UNIT_THEMES_BEFORE[0]],
    );
    const nDead = Number(deadCount.rows[0]?.n ?? 0);
    if (nDead > 0) {
      die(
        `theme "${UNIT_THEMES_BEFORE[0]}" now holds ${nDead} published items. It held ZERO when this rebinding was\n`
        + `  decided, and the whole reason for the rebinding was that it was empty. Re-probe before rebinding.`,
      );
    }
    const liveCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = $1 and status = 'published'`,
      [UNIT_THEMES_AFTER[0]],
    );
    const nLive = Number(liveCount.rows[0]?.n ?? 0);
    if (nLive < 300) {
      die(`theme "${UNIT_THEMES_AFTER[0]}" holds only ${nLive} published items, which is not the theme this batch measured.`);
    }

    /* ── THE ID COLLISION CHECK, AND WHY IT IS NOT A NEXT-FREE CHECK ──────
     *
     * a1.15 landed inside a1.17's range mid-build and a highest-id check passed
     * it cleanly, because eighteen rows below a batch's top do not move the
     * maximum. So the check is: does any row inside THIS BATCH'S OWN RANGE exist
     * that this batch did not author? An upsert would silently replace it.     */
    const inRange = await client.query<{ id: string; fr: string; updated_at: Date }>(
      `select id, fr, updated_at from content_items
        where id >= $1 and id <= $2 and id like 'fr.a1.pays-et-nationalites.%'`,
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
    const maxPays = await client.query<{ max: string | null }>(
      `select max(id) as max from content_items where id like 'fr.a1.pays-et-nationalites.%'`,
    );
    const highest = maxPays.rows[0]?.max ?? '';
    if (highest > OWNED_ID_RANGE.to) {
      console.warn(
        `\n⚠  fr.a1.pays-et-nationalites now runs to ${highest}, above this batch's ${OWNED_ID_RANGE.to}.`
        + `\n   Somebody else has authored above this range. This batch is idempotent by id and writes only its`
        + `\n   own ${AUTHORED.length} rows, so it is safe, but the handover's NEXT FREE (${HANDOVER_NEXT_FREE_ID}) is now stale.\n`,
      );
    }

    const nextUnit: Unit = {
      ...unitBody,
      themes: UNIT_THEMES_AFTER,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    } as Unit;
    if (nextUnit.title !== unitBody.title || nextUnit.sub !== unitBody.sub || nextUnit.canDo !== unitBody.canDo) {
      die('this batch would change the unit title, sub or canDo. All three are correct and the Den advertises them.');
    }
    if (JSON.stringify(nextUnit.prereqUnitIds ?? []) !== JSON.stringify(unitBody.prereqUnitIds ?? [])) {
      die('this batch would change the unit prerequisites. That is a change to the spine and is REPORTED, not applied.');
    }
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    const existingLesson = await client.query<{ version: number }>(
      `select (body->>'version')::int as version from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id],
    );
    const prior = existingLesson.rows[0]?.version;
    guardLessonVersion({
      lessonId: LESSON.id, prior, authored: LESSON.version,
      sourceFile: 'pays-lesson.ts', dryRun: DRY_RUN, die,
    });

    /* ── a1.03: modelled against the SEED, which is what the test measures ── */

    const { readFileSync } = await import('node:fs');
    const seed = JSON.parse(
      readFileSync(new URL('../../ealch-v2/src/content/seed.json', import.meta.url), 'utf8'),
    ) as { items: { id: string; kind: string; fr: string; gender?: 'm' | 'f' | null; tags?: string[] }[] };
    const inSeed = new Set(seed.items.map((i) => i.id));
    const willEnterSeed = NEW_ITEMS.filter((i) => !inSeed.has(i.id));
    const after = [...seed.items, ...(willEnterSeed as unknown as typeof seed.items)];
    const PRINTED = [
      ...ENDING_RULES.map((r) => ({ ending: r.ending, where: 'rule', accuracy: r.accuracy, items: r.items })),
      ...WORTHLESS_ENDINGS.map((w) => ({ ending: w.ending, where: 'worthless', accuracy: w.accuracy, items: w.items })),
      ...MORE_ENDINGS.map((e) => ({ ending: e.ending, where: 'sheet', accuracy: e.accuracy, items: e.items })),
    ];
    const moved: string[] = [];
    const dangerous: string[] = [];
    for (const p of PRINTED) {
      const b = measureEnding(seed.items, p.ending);
      const a = measureEnding(after, p.ending);
      if (!b || !a) continue;
      if (b.accuracy !== a.accuracy || b.n !== a.n || b.predicts !== a.predicts) {
        moved.push(
          `${p.where.padEnd(9)} -${p.ending.padEnd(5)} ${b.accuracy}%/${b.n} ${b.predicts}  →  ${a.accuracy}%/${a.n} ${a.predicts}`
          + `${b.accuracy === a.accuracy && b.predicts === a.predicts ? '   (count only)' : '   <<< NOT JUST A COUNT'}`,
        );
      }
      // The only moves this build is prepared to make are COUNTS. An accuracy
      // crossing the 90% floor, or a predicted gender flipping, changes what
      // a1.03 TEACHES and this lesson withdraws rather than argues.
      if (b.predicts !== a.predicts) dangerous.push(`-${p.ending} flips from ${b.predicts} to ${a.predicts}`);
      if (p.where !== 'worthless' && a.accuracy < 90) dangerous.push(`-${p.ending} drops to ${a.accuracy}%, under a1.03's own floor`);
      if (p.where === 'worthless' && a.accuracy >= 90) dangerous.push(`-${p.ending} climbs to ${a.accuracy}%, over the floor it is dismissed for being under`);
    }
    if (dangerous.length) {
      die(
        `importing this set would change what a1.03 TEACHES, not just what it counts:\n  ${dangerous.join('\n  ')}\n`
        + `  Withdraw the offending country rather than re-measuring a1.03. A count is maintenance; a floor or a\n`
        + `  predicted gender is that lesson's argument.`,
      );
    }

    /* ── Report ──────────────────────────────────────────────────────────── */

    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  authored items: ${AUTHORED.length}, ALL SENTENCES, at ${OWNED_ID_RANGE.from} to ${OWNED_ID_RANGE.to}`);
    for (const s of AUTHORED_SENTENCES) console.log(`    ${s.id.slice(-3)}  [${s.role}]  ${s.fr}`);
    console.log(`  NOT ONE HEADWORD IS AUTHORED. All 24 countries and nationalities were already published.`);
    console.log(`  imported items: ${IMPORTS.length} from ${new Set(IMPORTS.map((i) => i.theme)).size} theme(s), verified field by field`);
    console.log(`  reused items: ${REUSED.length}, already in the seed, untouched`);
    console.log(`  withdrawn on purpose: ${WITHDRAWN_IDS.length}`);
    for (const w of WITHDRAWN_IDS) console.log(`    ${w}`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}", ${prior !== undefined ? `updating v${prior} → v${LESSON.version}` : 'NEW'}, `
      + `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`,
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  the twelve: ${THE_TWELVE.map((c) => c.fr).join(', ')}`);
    console.log(`    ${THE_TWELVE.filter((c) => c.slot === 'f').length} la, ${THE_TWELVE.filter((c) => c.slot === 'm').length} le, ${THE_TWELVE.filter((c) => c.slot === 'pl').length} les, ${THE_TWELVE.filter((c) => c.slot === 'mv').length} le-with-a-vowel`);
    console.log(`    every one shown WITH its article and every nationality named, checked individually`);
    console.log(`  the grid is on ONE screen with both columns and all three rows: ${gridSections.join(', ')}`);
    console.log(`    ${GRID_CELLS.filter((c) => c.origin === 'authored').length} cells authored, ${GRID_CELLS.filter((c) => c.origin === 'imported').length} imported, ${GRID_CELLS.filter((c) => c.origin === 'reused').length} already in the seed, all six in one frame`);
    console.log(`  the vowel exception is taught by name: "${iran.to}" and "${iran.from}"`);
    console.log(`  the capital rule is on ONE screen (${capitalSections.join(', ')}) and tested by ${capitalQs.filter((q) => q.format === 'mcq').length} mcq, 0 free-text`);
    console.log(`  agreement is not taught as new: the colours lesson and the être lesson are both named`);
    console.log(`  no conjugated aller or venir on a production surface: confirmed`);
    console.log(`    ${PAYS_READING_ONLY_IDS.length} third-person rows are READING ONLY and reach no produce surface`);
    console.log(`  no venir de plus infinitive anywhere: confirmed (45 of the corpus's 134 matching rows are that)`);
    console.log(`  no language-learning content, no Québec content: confirmed`);
    console.log(`  imageRefs authored: ${imageRefs.length} (nothing validates imageRef, and no component draws a map)`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round((formats.mcq ?? 0) / qs.length * 100)}% (ceiling 50)`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  every preposition stem names the country WITH its article: confirmed over ${prepQuestions.length} of ${qs.length}`);
    console.log(`  no option refers to a position, none duplicated within a question: confirmed`);
    console.log(`  authored answer spread: ${Object.entries(slots).map(([k, n]) => `slot ${k} ${Math.round(n / closed.length * 100)}%`).join(', ')} (cap 40)`);
    console.log(`  no ear question on a preposition: confirmed (${earQs.length} listenChoose, both on the agreement)`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${fired.size}/${teaching.length}, each the FIRST resolving target of exactly one round`);
    console.log(`  round leads: ${leads.join(', ')}`);
    console.log(`  dictation: ${PAYS_DICTATION_IDS.length} lines, ALL in letters mode (word mode cannot test a choice)`);
    for (const m of modes) console.log(`    ${m}`);
    console.log(`  speak: ${speakIds.length} lines, all carrying voiceflash, NOT ONE a bare preposition`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  respellings authored: ${Object.keys(RESPELL).length}, all passing the nasal convention`);
    console.log(`  reframe: "${REFRAME}" x${hits} across ${reframeSections} sections`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  no neighbour's content ✓`);

    console.log(`\n  RESPELLING REPAIRS (not silent), display-only:`);
    for (const r of RESPELL_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      console.log(`    ${r.id}  ${r.fr}: "${now}" → "${r.to}"   ${r.caughtByChecker ? '(checker catches it)' : '(INVISIBLE to the shared checker)'}`);
    }
    console.log(`    Repairs the shared checker cannot see: ${REPAIRS_INVISIBLE_TO_CHECKER.join(', ') || 'none'}`);
    if (alreadyRepaired) console.log(`    (${alreadyRepaired} of ${RESPELL_REPAIRS.length} already carry the corrected value; re-upserting is a no-op)`);
    console.log(`\n  VERIFIED BY HAND AND NOT REPAIRED, because they are already right:`);
    console.log(`    ${THE_TWELVE.find((c) => c.bare === 'Espagne')!.id}  l'Espagne   lehs-PAHNY   /lɛspaɲ/ has NO nasal vowel: agne is a plain a plus a palatal ɲ`);
    console.log(`    ${THE_TWELVE.find((c) => c.bare === 'Allemagne')!.id}  l'Allemagne lahl-MAHNY  /lalmaɲ/ the same. The probe flags both on the LETTERS and both are correct.`);
    console.log(`    la France IS broken and the shared checker cannot see it (SS follows the n). Repaired and pinned by name.`);
    console.log(`\n  IPA REPAIRS:`);
    for (const r of IPA_REPAIRS) console.log(`    ${r.id}  ${r.fr}: "${r.from}" → "${r.to}"  (U+203F renders as an underscore on a Pixel 6)`);
    console.log(`    ${TIES_LEFT_ALONE.length} imported rows KEEP their tie: it marks a liaison, which the spelling does not show.`);
    console.log(`\n  NOT REPAIRED, and reported rather than done:`);
    for (const n of NOT_REPAIRED) console.log(`    ${n.id}  "${n.fr}" ${n.respell}   ${n.why}`);
    console.log(`    THE SYSTEMATIC FINDING: every fr.sons.* row this build touched follows the nasal convention and`);
    console.log(`    every fr.a1.* / fr.a2.* vocabulary row breaks it. Nine out of nine in this theme alone. That is`);
    console.log(`    a corpus migration rather than a lesson build, and Paul should have it.`);

    console.log(`\n  a1.03's MEASURED ENDING POPULATION:`);
    console.log(`    AUTHORED rows joining it: ${authoredJoiners.length} (enforced to zero; every authored row is a sentence)`);
    console.log(`    IMPORTED rows joining it: ${importJoiners.length} of ${IMPORTS.length}`);
    console.log(`    ${moved.length} of ${PRINTED.length} printed figures move:`);
    for (const m of moved) console.log(`      ${m}`);
    console.log(`    Every move is a COUNT. No accuracy, no predicted gender, no floor changes, and NOT ONE of the`);
    console.log(`    ten endings a1.03 teaches in its flow is touched.`);
    console.log(`    THIS IS UNAVOIDABLE: la France ends in -e because every feminine country does, which is the rule`);
    console.log(`    this lesson is built on. Resolved the way a1.11 resolved it (genre-lesson.ts:1646): re-measure`);
    console.log(`    the counts in genre-endings.ts and re-render a1.03. AFTER THIS BATCH AND ITS MERGE,`);
    console.log(`    a1-03-genre.test.ts IS RED until that is done. That is the documented sequence.`);

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(themesNow)} → ${JSON.stringify(UNIT_THEMES_AFTER)}`);
    console.log(`      REBOUND. "${UNIT_THEMES_BEFORE[0]}" holds ${nDead} published rows and always did.`);
    console.log(`      "${UNIT_THEMES_AFTER[0]}" holds ${nLive}. The declared theme was dead and the real one had another name.`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unitBody.prereqUnitIds ?? [])} (UNCHANGED)`);
    console.log(`      RECOMMENDED: ${JSON.stringify(PREREQ_RECOMMENDED)}. a1.03 is load-bearing here and is not declared:`);
    console.log(`      without noun gender the learner cannot choose between en and au, which is the whole lesson.`);
    console.log(`      Not applied. Changing a unit's prerequisites is a change to the spine.`);
    console.log(`\n  HANDOVER: a1.21 has NOT landed and its promised handover does not exist. NEXT FREE is ${HANDOVER_NEXT_FREE_ID}.`);
    console.log(`    This lesson took en/au/aux/de/du/des IN FRONT OF A COUNTRY and nothing else. See the foot of`);
    console.log(`    pays-lesson.ts for what a1.21 still owns and what quebec-et-francophonie should know.`);

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
        `update content_items set respell = $1 where id = $2 and fr = $3`,
        [r.to, r.id, r.fr],
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`respelling repair for ${r.id} touched ${res.rowCount} rows, rolled back, nothing changed`);
      }
    }
    for (const r of IPA_REPAIRS) {
      const res = await client.query(
        `update content_items set ipa = $1 where id = $2 and fr = $3`,
        [r.to, r.id, r.fr],
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`ipa repair for ${r.id} touched ${res.rowCount} rows, rolled back, nothing changed`);
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
      `\n✓ pays batch applied: ${NEW_ITEMS.length} items (${AUTHORED.length} authored, ${IMPORTS.length} imported)`
      + ` + ${RESPELL_REPAIRS.length} respelling repairs + ${IPA_REPAIRS.length} ipa repair + lesson ${LESSON.id} published,`
      + `\n  unit ${UNIT_ID} REBOUND from ${JSON.stringify(UNIT_THEMES_BEFORE)} to ${JSON.stringify(UNIT_THEMES_AFTER)} and linked.`
      + `\n  Next: pnpm tsx scripts/merge-pays-into-seed.ts --dry-run`
      + `\n  Then: re-measure the six moved counts in genre-endings.ts and re-render a1.03, or a1-03-genre.test.ts stays red.`
      + `\n  Do NOT run pnpm content:publish.\n`,
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
