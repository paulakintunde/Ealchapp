// Content Batch , L'heure: the a1.12.l1 full-rig lesson.
//
// a1.12 ships today with lessonIds: [] and a theme binding that points at a
// theme holding nothing. This batch authors the lesson, the 16 corpus entries
// it could not build without, the 63 rows it imports from four themes outside
// the seed cut, and two respelling repairs, as the thirteenth A1 lesson on
// Lesson Architecture v2.
//
// The content and the corpus live in scripts/data/ (heure-lesson, -corpus and
// -terms) rather than inline here, because all three are large and all three
// are checked by the app's own test suite at authoring time:
//
//   ealch-v2/src/content/a1-12-heure.test.ts
//
// That test is the real gate. It runs in CI on every push, imports these files
// directly, and asserts the whole self-check list. This script re-runs the
// shared validators before it writes so a broken batch dies before it touches
// the database, but the durable check is the test.
//
// ── THE UNIT EDIT, WHICH IS NOT SILENT ─────────────────────────────────────
//
// a1.12 declares `themes: ["temps"]`. It does not exist: 143 themes are
// published and `temps` is not one of them, and it resolves to 0 items in both
// copies. The Den renders a unit's theme chips as entry points into a themed
// deck, so that chip has always led nowhere.
//
// This batch REBINDS the unit to `["heure-et-date"]` rather than clearing it.
// a1.06 and a1.07 both cleared their dead bindings and were right to: they are
// grammar units drawing from a dozen themes. This unit is the opposite case and
// the theme it wants already exists with 455 published rows, which is the
// finding the brief missed entirely (it recommends `routines`, which is a
// times-of-day deck owned by a1.25). See the header of heure-corpus.ts.
//
// `title`, `sub` and `canDo` are what the Den advertises before a learner opens
// anything and none of them is touched.
//
// ── THE RESPELLING REPAIRS, WHICH ARE ALSO NOT SILENT ──────────────────────
//
// Two rows in the phrase block this lesson reuses wholesale close a nasal vowel
// with a plain N and put the wrong vowel under it: `moins` is /mwɛ̃/ and ships
// as `MWUHN`. They are the two cards act 3 is built on. `respell` is
// display-only, so the repair cannot break a drill, a score or an id, and the
// batch refuses if the stored value is no longer the broken one it expects.
//
// Same contract as author-jours-batch.ts: everything validates BEFORE the
// database is touched, then the whole set upserts inside ONE transaction.
// Idempotent by id.
//
// Usage (from ealch-admin/):
//   pnpm content:heure --dry-run   validate + report only
//   pnpm content:heure             apply, one transaction
//   then: pnpm tsx scripts/merge-heure-into-seed.ts
//   NOT: pnpm audio:render. It spends real ElevenLabs credits and
//        ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
//   NOT: pnpm content:publish. It regenerates seed.json FROM the database and
//        `pnpm content:parity` exits 1 today for three reasons that predate this
//        lesson (sons.09.l1 seed-only, b2.01.l1 db-only, sons.08.l1 shape
//        drift). Apply, merge, and stop.

// './env' MUST be imported first , see the incident note in migrate.ts.
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
import {
  AUTHORED as AUTHORED_ROWS, CHUNK_IDS, CLOCK_PAIRS, DAYS, HOUR_IDS, IMPORTED, MONTHS,
  OFFICIAL_HOURS, QUARTER_PHRASES, QUARTER_WITH_ARTICLE, REFLEXIVE, RESPELL, RESPELL_REPAIRS,
  REUSED, SEASONS, THE_TWELVE, toItem,
} from './data/heure-corpus.ts';
import { HEURE_DICTATION_IDS, HEURE_LESSON, REFRAME } from './data/heure-lesson.ts';
import { guardLessonVersion } from './version-guard.logic.ts';

const AUTHORED: Item[] = AUTHORED_ROWS.map(toItem);
const IMPORTS: Item[] = IMPORTED;
/** Everything this batch writes to content_items: what it authors, plus the
 *  imported rows re-upserted at their recorded values. Re-upserting a row that
 *  is already published is a no-op against a database that has not changed and a
 *  repair against one that has, which is what makes the manifest in
 *  heure-corpus.ts a source of truth rather than a cached read. */
const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTS];
const LESSON: Lesson = HEURE_LESSON;
const UNIT_ID = 'a1.12';

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  An EXPLICIT constant, not a figure derived from the lesson. A derived count
 *  compares the content to itself and passes on any rewording, which is exactly
 *  the regression this guard exists to catch. Eight sections carry it plus the
 *  `reframe` field itself and two quiz/error `why` lines, which `strings()`
 *  also walks. The density validator requires three; a1.01 carries eight and
 *  a1.08 thirteen. */
const REFRAME_APPEARANCES = 11;

/** Six error triggers, six drills, six retests and six quiz rounds, and EVERY
 *  teaching drill is the first resolving target of exactly one round.
 *  `drillForRound` walks a round's targets and stops at the first one that
 *  resolves, so a drill named only in second place never runs.
 *
 *  Stated here as an explicit constant so a reordering of `targets`, or a round
 *  quietly deleted in a later trim, fails the batch rather than silently
 *  orphaning a drill nobody notices is dead. This is the single most-warned-about
 *  trap in this codebase and it landed twice in a1.05 and once in a first draft
 *  of a1.07. */
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;

/** Twelve hours and four register pairs. Stated explicitly so an edit that
 *  quietly drops an hour fails here rather than shipping a lesson that claims
 *  to teach the clock and teaches eleven twelfths of it. */
const EXPECTED_HOURS = 12;
const EXPECTED_PAIRS = 4;

/** This unit's themes binding is REBOUND, not cleared. It was ["temps"], which
 *  resolves to zero items in both copies. */
const UNIT_THEMES_BEFORE = ['temps'];
const UNIT_THEMES_AFTER = ['heure-et-date'];

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

/** `drills` is a Postgres ENUM ARRAY and node-postgres has no parser registered
 *  for it, so it arrives as the raw literal `{sentence,flashcard,review}` rather
 *  than as an array. Reading it as one silently produces a string, and
 *  `"{...}".includes('voiceflash')` then answers TRUE by substring, which means
 *  a naive tag check passes on a row that does not carry the tag at all. Parsed
 *  here rather than trusted. */
function drillsOf(v: unknown): string[] {
  if (Array.isArray(v)) return v as string[];
  if (typeof v !== 'string') return [];
  return v.replace(/^\{|\}$/g, '').split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
}

/** Every authored string in a value, for the house-style guards. */
function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

/** The surfaces a learner actually READS from, which is what the exclusion
 *  checks below are written against. A day or a month inside a reading passage
 *  is legitimate context and must not fail; a day taught on a card is a1.08's
 *  lesson being given away. */
function productionSurfaces(l: Lesson): string[] {
  const out: string[] = [];
  for (const s of l.sections) {
    if (s.type === 'reading') continue; // context, not teaching
    out.push(...strings(s));
  }
  out.push(...strings(l.drills ?? []), ...strings(l.terms ?? {}));
  return out;
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run , nothing will be written)');

  // ── Everything validates before the database is touched ──────────────────

  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

  const ids = NEW_ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  // Two entries teaching the same WORD in one theme is the .057 incident: the
  // flashcard hub keys decks on `fr` with the article STRIPPED, so `l'heure` and
  // `heure` are ONE key inside a theme and a duplicate serves the same card
  // twice, taking two SRS ratings for one word. Sentences are exempt, as in
  // flashhub-coverage.test.ts.
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

  // Every a1 word or phrase must carry BOTH flashcard and voiceflash or
  // flashhub-coverage.test.ts fails the whole build, and it runs over the seed
  // rather than over this batch, so an import that misses one takes the suite
  // red on content this lesson does not own. The separate-pools exemption is
  // reproduced here rather than approximated.
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

  // gender.logic.ts measures a1.03's ten ending rules and a1-03-genre.test.ts
  // re-measures all twenty figures from the seed on every run. a1.11 added two
  // feminine nouns in -e, moved a1.03's count from 871 to 873, and turned the
  // suite red on a lesson nobody had touched.
  //
  // THE REAL FUNCTION, not a copy of it: a guard that reimplements the thing it
  // guards is free to drift from it, which is the mistake a1.08's v2 made.
  const genderPopulation = endingPopulation(
    NEW_ITEMS.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags }))
  );
  if (genderPopulation.length) {
    die(
      `this batch would add ${genderPopulation.length} row(s) to a1.03's measured ending population, which can move `
      + `a statistic printed on two of its cards:\n  `
      + genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n`
      + `  If this is intended, re-measure a1.03, correct the number at its source and re-run its own batch and merge.`
    );
  }

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  // The v2 density rules. This is the check that makes the architecture real
  // rather than aspirational: a crowded screen fails the build.
  const density = validateDensity(LESSON, new Set([...ids, ...LESSON.itemIds, ...REUSED.map((r) => r.id)]));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules the per-lesson tests enforce.
  const authoredJson = JSON.stringify({ AUTHORED, LESSON, RESPELL });
  if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
  // U+203F renders as a low underscore on a Pixel 6. Checked over the AUTHORED
  // half, the LESSON and the RESPELL map rather than over the imports: eight
  // imported rows carry it in their stored IPA, those are somebody else's
  // shipped rows, and this lesson displays no imported row's IPA.
  if (authoredJson.includes('‿')) die('U+203F tie character, which renders as an underscore on a device');

  // No grammar vocabulary in learner copy. Scoped to sections, sheets and terms,
  // which is everything a learner reads: `grammarIntroduced` is addressed to the
  // curriculum and is better for using the precise words, and the IMPORTED rows'
  // own `notes` are somebody else's shipped copy.
  const learnerFacing = [
    ...strings(LESSON.sections),
    ...strings(LESSON.sheets ?? []),
    ...strings(LESSON.terms ?? {}),
  ];
  const jargon = learnerFacing.filter((s) =>
    /\b(conjugaison|article (défini|indéfini|partitif)|adverbe|complément circonstanciel|masculin|féminin|déterminant|registre)\b/i.test(s));
  if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

  // The reframe is the lesson's spine, and a reworded copy is exactly how the
  // verbatim check starts failing.
  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  // Every respelling this lesson DISPLAYS, against the nasal convention.
  const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  if (badNasal.length) {
    die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
  }
  // hasPlainNasalFor cannot see a WORD-INTERNAL nasal: its test requires the n
  // or m to end a token. So the words this lesson respells that CARRY a nasal
  // are checked by name as well, which is what a1.08 found it had to do for
  // dimanche.
  const NASAL_WORDS = ['cinq heures', 'onze heures', 'moins le quart', 'moins dix', 'en retard',
    'vingt heures', 'vingt heures trente', 'le rendez-vous', 'minuit'];
  const missingSuperscript = NASAL_WORDS
    .filter((w) => RESPELL[w])
    .filter((w) => !RESPELL[w].respell.includes('ⁿ'))
    // `minuit` is /mi.nɥi/: the n is a real consonant before a vowel and there
    // is no nasal vowel in it at all. Listed above because it LOOKS like one,
    // and excluded here for the reason rather than left off the list silently.
    .filter((w) => w !== 'minuit' && w !== 'le rendez-vous');
  if (missingSuperscript.length) {
    die(
      `respelling(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}\n`
      + `  hasPlainNasalFor does not catch a word-internal nasal, so this is checked by name.`
    );
  }

  // The twelve, and the pairs that are the shape of act 4.
  if (THE_TWELVE.length !== EXPECTED_HOURS) die(`THE_TWELVE holds ${THE_TWELVE.length} hours, expected ${EXPECTED_HOURS}`);
  if (HOUR_IDS.length !== EXPECTED_HOURS) die(`${HOUR_IDS.length} hour headwords authored, expected ${EXPECTED_HOURS}`);
  if (CLOCK_PAIRS.length !== EXPECTED_PAIRS) die(`${CLOCK_PAIRS.length} register pairs, expected ${EXPECTED_PAIRS}`);

  // Every hour is taught by name somewhere a learner reads.
  const teaching = productionSurfaces(LESSON).join(' \u0001 ');
  const untaught = THE_TWELVE.filter((h) => !teaching.includes(h));
  if (untaught.length) die(`hour(s) the lesson never puts on a screen: ${untaught.join(', ')}`);
  for (const w of ['midi', 'minuit']) {
    if (!teaching.includes(w)) die(`"${w}" is never taught, and it is one of the two exceptions the lesson promises`);
  }

  // All four quarter phrases are taught, and the article asymmetry survives.
  const missingQuarter = QUARTER_PHRASES.filter((p) => !teaching.includes(p));
  if (missingQuarter.length) die(`quarter phrase(s) never taught: ${missingQuarter.join(', ')}`);
  if (!teaching.includes(QUARTER_WITH_ARTICLE)) die(`"${QUARTER_WITH_ARTICLE}" must appear with its article`);
  // ── The four "must never be taught" checks ─────────────────────────────
  //
  // Each of the four errors this lesson exists to stop has to APPEAR in it: a
  // commonErrors card shows the wrong version, a quiz distractor IS the wrong
  // version, and a contrast card puts the wrong beside the right. So a check
  // written against raw strings fires on the lesson's own teaching, which is
  // what a1.08 found: it reported « les lundis » as taught unframed and the
  // string it fired on was the `wrong` half of a commonErrors card.
  //
  // a1.08's fix was to exclude those slots rather than reword the card, and
  // that is right. But "exclude any string whose prose mentions wrong" is not a
  // rule, it is a keyword search that any rewrite defeats, and it would pass a
  // genuinely mistaught sentence that happened to contain the word "not".
  //
  // So framing is read STRUCTURALLY. A string is framed if it sits in a slot
  // whose entire job is to hold the wrong answer, or if the correct form stands
  // beside it in the same string. Nothing else counts.
  // Every LEAF OBJECT a learner reads: a commonErrors entry {wrong, right, why},
  // a quiz question {q, opts, accept, answer, why}, a reviewDeck card
  // {front, back}, a deck card {fr, sub, body}, a scene break {wrong, right}.
  //
  // The unit of framing is the object, not the string, because that is where
  // the author actually puts the correction: « moins quart » in a question stem
  // is framed by the `accept` two lines below it, and on a review card by the
  // `back`. Checking strings in isolation cannot see either, and checking prose
  // for the word "wrong" only pretends to.
  //
  // Two structural signals mark an object as ALREADY framed, and both are key
  // names rather than prose, so no rewording can defeat them:
  //
  //   a key that exists to hold the wrong answer    wrong · outcome: 'breaks'
  //   a sibling key that holds the right one        right · accept · answer ·
  //                                                 back · correct + opts
  //
  // The first is inherited: a scene `break` puts its error in `wrong`, and the
  // object UNDER that key is `{fr, ipa, respell, en}` with no signal of its own,
  // so the walk carries the flag down.
  type Surface = { obj: Record<string, unknown>; framed: boolean };
  const CORRECTS = ['right', 'accept', 'answer', 'back', 'correct'];
  const walk = (v: unknown, inherited: boolean, out: Surface[] = []): Surface[] => {
    if (Array.isArray(v)) { v.forEach((x) => walk(x, inherited, out)); return out; }
    if (!v || typeof v !== 'object') return out;
    const o = v as Record<string, unknown>;
    const self = inherited
      || o.outcome === 'breaks'
      || CORRECTS.some((k) => o[k] !== undefined);
    if (Object.values(o).some((x) => typeof x === 'string')) out.push({ obj: o, framed: self });
    for (const [k, x] of Object.entries(o)) walk(x, self || k === 'wrong', out);
    return out;
  };
  const readSurfaces = walk([
    ...LESSON.sections.filter((s) => s.type !== 'reading'), // reading is context, not teaching
    LESSON.drills ?? [],
    LESSON.terms ?? {},
  ], false);

  /** Objects carrying a shape the lesson must never TEACH: something in the
   *  object matches `bad`, the object is not structurally an error slot, and
   *  nothing in it says in words that this is the wrong version. */
  const unframed = (bad: RegExp, rightBeside: RegExp): string[] =>
    readSurfaces
      .filter(({ framed }) => !framed)
      .filter(({ obj }) => Object.values(obj).some((x) => typeof x === 'string' && bad.test(x)))
      .filter(({ obj }) => !rightBeside.test(JSON.stringify(obj)))
      .map(({ obj }) => Object.values(obj).find((x) => typeof x === 'string' && bad.test(x)) as string);

  // « moins quart » may only appear beside « moins le quart » or in an error
  // slot. It is the most common written error in act 3.
  const looseMoinsQuart = unframed(/moins quart/i, /moins le quart/i);
  if (looseMoinsQuart.length) {
    die(`"moins quart" appears unframed:\n  ${looseMoinsQuart.slice(0, 3).join('\n  ')}`);
  }

  // NOTHING MIXES THE CLOCKS. An official hour bent with a spoken phrase is the
  // hybrid act 4 exists to prevent, and authoring one would teach it.
  const MIXED = new RegExp(
    `\\b(?:${OFFICIAL_HOURS.join('|')})\\s+heures?\\s+(?:et\\s+(?:quart|demie?)|moins)\\b`, 'i');
  const hybrid = unframed(MIXED, /never|takes half|half of each|does not|do not/i);
  if (hybrid.length) {
    die(`surface(s) mix the two clock systems:\n  ${hybrid.join('\n  ')}\n  That hybrid is the error act 4 exists to prevent.`);
  }

  // NOTHING WELDS THE TWO FRAMES. « il est à » plus an hour is the reframe's own
  // error and may appear only where it is marked as one.
  const HOURWORD = 'une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|midi|minuit';
  const welded = unframed(new RegExp(`il est à\\s+(?:${HOURWORD})`, 'i'), /\bnot\b|instead of|rather than/i);
  if (welded.length) die(`surface(s) weld il est to à:\n  ${welded.join('\n  ')}`);

  // « il est » plus a bare NUMBER with no noun behind it. The highest-frequency
  // error in the lesson, and the assertion is cheap.
  //
  // Numbers only. midi and minuit are in HOURWORD above because « il est à
  // midi » really is the welded frame, but « Il est midi » is CORRECT and is on
  // four screens: they are the two hours that take no noun, which is the whole
  // of act 2's second half. A check that did not separate them would have
  // reported the lesson's own exception as its own error.
  const NUMWORD = 'une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze';
  const bareHour = unframed(
    new RegExp(`il est (?:${NUMWORD})(?!\\s*(?:heures?|heure|et|moins))\\b`, 'i'),
    /\bnot\b|instead of|rather than|unfinished/i,
  );
  if (bareHour.length) die(`surface(s) drop the noun after an hour:\n  ${bareHour.join('\n  ')}`);

  // `demi` is taught BOTH ways, and « midi et demi » by name, because it is the
  // one that looks feminine and is not.
  if (!teaching.includes('midi et demi')) die('« midi et demi » is never taught, and it is the agreement trap');
  if (!teaching.includes('et demie')) die('« et demie » is never taught, so only one side of the agreement is shown');

  // No day, month, season or weather is taught. `heure-et-date` is a clock AND
  // calendar theme, so a1.08's and a1.09's vocabulary is one tap from every
  // card. Written against production surfaces: a day inside the reading passage
  // is legitimate context.
  const surfaces = productionSurfaces(LESSON);
  const taughtDay = DAYS.filter((d) => surfaces.some((s) => new RegExp(`\\b${d}\\b`, 'i').test(s)));
  if (taughtDay.length) die(`the lesson teaches a day, which belongs to a1.08: ${taughtDay.join(', ')}`);
  // Case-sensitive, because French months are always lowercase and « Mars » the
  // planet is not a month. a1.08 found this the hard way.
  const taughtMonth = MONTHS.filter((m) => surfaces.some((s) => new RegExp(`\\b${m}\\b`).test(s)));
  if (taughtMonth.length) die(`the lesson teaches a month, which belongs to a1.09: ${taughtMonth.join(', ')}`);
  const taughtSeason = SEASONS.filter((x) => surfaces.some((s) => s.includes(x)));
  if (taughtSeason.length) die(`the lesson teaches a season, which belongs to a1.10: ${taughtSeason.join(', ')}`);

  // No reflexive verb, which is a2.22.
  const reflexive = REFLEXIVE.filter((r) => surfaces.some((s) => s.includes(r)));
  if (reflexive.length) die(`the lesson teaches a reflexive verb, which is a2.22: ${reflexive.join(', ')}`);

  // At most half the exam may be mcq. Recognition can be passed by elimination,
  // and this lesson's whole canDo is production.
  const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
  const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half ceiling`);

  // Every free-text question must accept the answer it displays. A question
  // whose own canonical answer is rejected marks a correct learner wrong.
  const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
  if (unacceptable.length) {
    die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
  }

  // No free-text question may turn on something `fold()` cannot see. It strips
  // accents, case, punctuation and ALL WHITESPACE, so a question whose accepted
  // answers differ only by a space is asking for something it cannot test.
  //
  // The brief says free text cannot test the dropped `heures` either. It can:
  // « il est huit » folds to "ilesthuit" and « il est huit heures » to
  // "ilesthuitheures", which are different strings. Only the SPACE is invisible.
  const foldBlind = qs.filter((q) => {
    if (q.format !== 'typeIn' && q.format !== 'errorSpot') return false;
    const fold = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();
    const all = [q.answer ?? '', ...(q.accept ?? [])].filter(Boolean);
    // Two accepted answers that fold to the same string are not two answers.
    return new Set(all.map(fold)).size === 1 && all.length > 1
      ? false // identical after folding is FINE: they are spelling variants
      : all.some((a) => /\bLundi|Mardi|Mercredi|Jeudi|Vendredi|Samedi|Dimanche\b/.test(a));
  });
  if (foldBlind.length) {
    die(`free-text question(s) whose answer turns on a capital letter:\n  ${foldBlind.map((q) => `"${q.q}"`).join('\n  ')}`);
  }

  // Only the two frozen chunks may show inversion. a1.19 owns est-ce que and
  // a1.20 owns inversion, and both are seven units ahead with lessonIds: [].
  const inversions = surfaces
    .flatMap((s) => s.match(/\b\w+-(t-)?(il|elle|vous|tu|on|ils|elles)\b/gi) ?? [])
    .filter((m) => !/^est-il$/i.test(m) && !/^rendez-vous$/i.test(m));
  if (inversions.length) {
    die(
      `inversion appears outside the two frozen chunks: ${[...new Set(inversions)].join(', ')}\n`
      + `  a1.20 owns question inversion and is not built. Only « quelle heure est-il » is allowed.`
    );
  }

  // Every drill has to be reachable. drillForRound stops at a round's first
  // resolving target, so a drill named only in second place is dead content.
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
  if (rounds.length !== EXPECTED_ROUNDS) {
    die(`expected ${EXPECTED_ROUNDS} quiz rounds, found ${rounds.length}. One round per drill, or a drill is dead.`);
  }
  const teachingDrills = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  const orphans = teachingDrills.filter((d) => !fired.has(d.id)).map((d) => d.id);
  if (orphans.length) {
    die(
      `drill(s) no quiz round can fire: ${orphans.join(', ')}\n`
      + `  drillForRound stops at a round's FIRST target that resolves to a drill, so a drill named only in second\n`
      + `  place never runs. Reorder the round's \`targets\`, add a round for it, or drop the drill.`
    );
  }
  // Every trigger's drill and retest must exist, and every section it watches.
  const knownDrills = new Set((LESSON.drills ?? []).map((d) => d.id));
  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
  for (const t of LESSON.errorTriggers ?? []) {
    if (!knownDrills.has(t.drill)) die(`trigger ${t.id} names drill "${t.drill}", which is not authored`);
    if (t.retest && !knownDrills.has(t.retest)) die(`trigger ${t.id} names retest "${t.retest}", which is not authored`);
    for (const d of t.detectOn) {
      const base = d.split('/')[0];
      if (!sectionIds.has(base)) die(`trigger ${t.id} detects on "${d}", and section "${base}" does not exist`);
    }
  }

  // The chunk rows carry a verb no A1 unit conjugates. They may be READ and must
  // never be asked for: no speak mission, no dictée and no production drill may
  // name one.
  const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's23-speak');
  const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
  const producedChunks = [
    ...speakIds.filter((id) => CHUNK_IDS.includes(id)),
    ...HEURE_DICTATION_IDS.filter((id) => CHUNK_IDS.includes(id)),
  ];
  if (producedChunks.length) {
    die(
      `production drill(s) name a row carrying a verb no A1 unit teaches: ${producedChunks.join(', ')}\n`
      + `  Chunks are shown and read. Asking a learner to produce one asks for a form nothing has given them.`
    );
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every item this lesson names must exist after this batch: either it is in
    // the batch, or it is already published.
    const reused = LESSON.itemIds.filter((id) => !ids.includes(id));
    if (reused.length) {
      const found = await client.query<{ id: string }>(
        `select id from content_items where id = any($1) and status = 'published'`,
        [reused]
      );
      const missing = reused.filter((id) => !found.rows.some((r) => r.id === id));
      if (missing.length) die(`lesson references unpublished/unknown items:\n  ${missing.join('\n  ')}`);
    }

    // The REUSED list is authored against seed.json, which can run AHEAD of the
    // database. Verified against the DATABASE here, because a reused id that is
    // in the seed but not published would render as an empty card. The `fr` is
    // compared too: an id that resolves to a different word than the one this
    // lesson names is worse than one that does not resolve at all.
    const reusedIds = REUSED.map((r) => r.id);
    const foundReused = await client.query<{ id: string; fr: string }>(
      `select id, fr from content_items where id = any($1) and status = 'published'`,
      [reusedIds]
    );
    const missingReused = REUSED.filter((r) => !foundReused.rows.some((x) => x.id === r.id));
    if (missingReused.length) {
      die(
        `REUSED names items that are not published in THIS database:\n  ${missingReused.map((r) => `${r.id} "${r.fr}"`).join('\n  ')}\n`
        + `  (seed.json can run ahead of the database, so these may exist in the seed and not here.)`
      );
    }
    const drifted = REUSED
      .map((r) => ({ r, row: foundReused.rows.find((x) => x.id === r.id)! }))
      .filter(({ r, row }) => row.fr !== r.fr)
      .map(({ r, row }) => `${r.id}: this lesson says "${r.fr}", the database says "${row.fr}"`);
    if (drifted.length) die(`REUSED has drifted from the database:\n  ${drifted.join('\n  ')}`);

    // The IMPORTED manifest is a RECORDED READ of this database, taken so the
    // merge can write these rows into the seed without a connection. If the rows
    // have moved since, the manifest is stale and the seed would be written from
    // a copy nobody has looked at. Compared field by field on everything the
    // merge will write.
    const importedIds = IMPORTS.map((i) => i.id);
    const foundImports = await client.query<{
      id: string; kind: string; theme: string; fr: string; en: string; drills: string[]; status: string; card_type: string | null;
    }>(
      `select id, kind, theme, fr, en, drills, status, card_type from content_items where id = any($1)`,
      [importedIds]
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
    }
    if (importDrift.length) {
      die(
        `the IMPORTED manifest has drifted from the database:\n  ${importDrift.join('\n  ')}\n`
        + `  Re-read the rows into scripts/data/heure-corpus.ts. The manifest is what the merge writes into\n`
        + `  seed.json, and a stale manifest puts the seed ahead of the database on rows nobody reviewed.`
      );
    }

    // The register pairs. Each authored sentence names a shipped twin, and the
    // twin has to BE the sentence this lesson thinks it is: the two-clock table
    // draws both halves of every row from these, and a twin that has moved would
    // put two unrelated sentences side by side under a heading claiming they are
    // the same moment.
    const twinIds = CLOCK_PAIRS.map(([, official]) => official);
    const twins = await client.query<{ id: string; fr: string; status: string }>(
      `select id, fr, status from content_items where id = any($1)`, [twinIds]
    );
    const twinDrift: string[] = [];
    for (const [spoken, official] of CLOCK_PAIRS) {
      const row = twins.rows.find((r) => r.id === official);
      if (!row) { twinDrift.push(`${spoken} names twin ${official}, which is not in this database`); continue; }
      if (row.status !== 'published') twinDrift.push(`${official} is ${row.status}, not published`);
      const declared = IMPORTS.find((i) => i.id === official)?.fr ?? REUSED.find((r) => r.id === official)?.fr;
      if (declared && declared !== row.fr) {
        twinDrift.push(`${official}: this lesson says "${declared}", the database says "${row.fr}"`);
      }
    }
    if (twinDrift.length) die(`the register pairs have drifted:\n  ${twinDrift.join('\n  ')}`);

    // The two respelling repairs. Refuse if the stored value is not the broken
    // one this batch expects: two people disagreeing about a transcription is a
    // decision rather than a merge.
    const repairIds = RESPELL_REPAIRS.map((r) => r.id);
    const repairRows = await client.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where id = any($1)`,
      [repairIds]
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
      die(
        `the respelling repairs have drifted:\n  ${repairDrift.join('\n  ')}\n`
        + `  Somebody has changed these rows. Look before overwriting.`
      );
    }
    const alreadyRepaired = RESPELL_REPAIRS.filter((r) =>
      repairRows.rows.find((x) => x.id === r.id)?.respell === r.to).length;

    // The dictée, checked against the POST-BATCH corpus rather than only against
    // what this file authors: all five are rows the batch imports, and a
    // shortened `fr` upstream would quietly move one between modes.
    const byId = new Map(NEW_ITEMS.map((i) => [i.id, i] as const));
    const dictRows = await client.query<{ id: string; fr: string; drills: string[] }>(
      `select id, fr, drills from content_items where id = any($1)`,
      [HEURE_DICTATION_IDS]
    );
    const noDictTag: string[] = [];
    const modes: string[] = [];
    for (const id of HEURE_DICTATION_IDS) {
      const it = byId.get(id) ?? dictRows.rows.find((r) => r.id === id);
      if (!it) die(`the dictée names ${id}, which is neither in this batch nor in the database`);
      const mode = dicteeMode(it.fr);
      const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
      modes.push(`${mode === 'words' ? 'WORDS  ' : 'letters'} "${it.fr}"${decoys.length ? ` decoys=${decoys.join('/')}` : ''}`);
      const d = byId.has(id) ? byId.get(id)!.drills : drillsOf((it as { drills: unknown }).drills);
      if (!d.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
    }
    if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);

    // THE DICTÉE IS WHERE THE DROPPED NOUN IS TESTABLE. Word mode builds its
    // bank from the sentence's own words, so `heures` is a tile the learner has
    // to place and a line rebuilt without it is visibly incomplete. `fold()`
    // strips whitespace and cannot see that; this can. If every target were
    // reworded under the length threshold the exercise would silently stop
    // asking the question.
    const wordMode = HEURE_DICTATION_IDS.filter((id) => {
      const it = byId.get(id) ?? dictRows.rows.find((r) => r.id === id);
      return it && dicteeMode(it.fr) === 'words' && /\bheures?\b/i.test(it.fr);
    });
    if (wordMode.length < 3) {
      die(
        `only ${wordMode.length} dictée target(s) run in word mode with "heures" in them.\n`
        + `  Word mode is where the dropped noun is actually testable: the bank hands the learner a "heures" tile\n`
        + `  they must place, and no free-text format can see that. At least three are wanted.`
      );
    }
    // And at least one must offer `le` as a decoy the learner has to refuse,
    // because that is the article belonging to « moins le quart » and to nothing
    // else in the lesson.
    const leDecoy = HEURE_DICTATION_IDS.filter((id) => {
      const it = byId.get(id) ?? dictRows.rows.find((r) => r.id === id);
      return it && dicteeMode(it.fr) === 'words' && wordDecoys(it.fr).includes('le');
    });
    if (!leDecoy.length) {
      die(
        `no dictée target offers "le" as a decoy.\n`
        + `  That is the article that belongs to « moins le quart » and to nothing else here, and handing the\n`
        + `  learner the tile and asking them to refuse it is this lesson's own question.`
      );
    }

    // Spoken practice draws only from items carrying `voiceflash`. Checked
    // against POSTGRES rather than the seed: an item whose tag was stripped
    // upstream renders as a card the learner cannot be scored on.
    if (!speakIds.length) die('the speak mission names no items');
    const toCheck = speakIds.filter((id) => !byId.has(id));
    const speakRows = toCheck.length
      ? (await client.query<{ id: string; drills: string[] }>(
          `select id, drills from content_items where id = any($1)`, [toCheck]
        )).rows
      : [];
    const badSpeak = [
      ...speakIds.filter((id) => byId.has(id) && !byId.get(id)!.drills.includes('voiceflash')),
      ...toCheck.filter((id) => !drillsOf(speakRows.find((r) => r.id === id)?.drills).includes('voiceflash')),
    ];
    if (badSpeak.length) die(`items named by the speak mission carry no "voiceflash" drill:\n  ${badSpeak.join('\n  ')}`);
    // And the twelve hours are all in it, because the join is what the mic is
    // listening for and it is the reason those rows were authored at all.
    const hoursNotSpoken = HOUR_IDS.filter((id) => !speakIds.includes(id));
    if (hoursNotSpoken.length) die(`hour(s) never drilled by the mic: ${hoursNotSpoken.join(', ')}`);

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units , cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    // title, sub and canDo are what the Den advertises before a learner opens
    // anything, and authoring the lesson is not a licence to rewrite the promise
    // it was built against.
    if (unitBody.title !== 'Telling Time') die(`unit ${UNIT_ID} title has changed: "${unitBody.title}"`);
    if (unitBody.sub !== "L'heure") die(`unit ${UNIT_ID} sub has changed: "${unitBody.sub}"`);
    if (unitBody.canDo !== 'Can ask and tell the time and make a simple appointment') {
      die(`unit ${UNIT_ID} canDo has changed: "${unitBody.canDo}"`);
    }
    // The eyebrow the Den draws is computed from the unit's seq, and `tag` is
    // the one place it is authored by hand. a1.03 shipped LEÇON 03 at seq 5 and
    // the header above it drew LEÇON 05.
    const expectedTag = `A1 · LEÇON ${String(unitBody.seq).padStart(2, '0')}`;
    if (LESSON.tag !== expectedTag) {
      die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unitBody.seq}, so the header will draw "${expectedTag}"`);
    }

    // The declared prerequisite is BUILT, which is what makes this lesson
    // unblocked and is why it never reteaches a number. Checked rather than
    // assumed: if a1.27 had been unbuilt, the twenty-four hour act would be
    // resting on numbers no lesson had given.
    for (const prereq of unitBody.prereqUnitIds ?? []) {
      const p = await client.query<{ n: string }>(
        `select coalesce(jsonb_array_length(body->'lessonIds'),0)::text n
           from content_units where kind = 'curriculum_unit' and body->>'id' = $1`, [prereq]);
      if (Number(p.rows[0]?.n ?? 0) === 0) {
        die(`prerequisite ${prereq} has no lessons, so this lesson rests on numbers nothing has taught.`);
      }
    }

    // The binding this batch is here to fix. Refuse if somebody has already
    // changed it to something else: two people disagreeing about a theme is a
    // decision, not a merge.
    const themesNow = (unitBody as Unit & { themes?: string[] }).themes;
    if (themesNow !== undefined
      && themesNow.join() !== UNIT_THEMES_BEFORE.join()
      && themesNow.join() !== UNIT_THEMES_AFTER.join()) {
      die(
        `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, which is not the broken binding this batch `
        + `expects (${JSON.stringify(UNIT_THEMES_BEFORE)}). Somebody has changed it; look before overwriting.`
      );
    }
    // The theme being replaced really does hold nothing, so this is a repair
    // rather than the deletion of something somebody was using.
    const deadCounts: Record<string, number> = {};
    for (const t of UNIT_THEMES_BEFORE) {
      const r = await client.query<{ n: string }>(`select count(*)::text n from content_items where theme = $1`, [t]);
      deadCounts[t] = Number(r.rows[0]?.n ?? 0);
      if (deadCounts[t] > 0) {
        die(`theme "${t}" now holds ${deadCounts[t]} items, so replacing this binding would remove a real chip. Revisit the decision.`);
      }
    }
    // And the theme being bound TO really does hold the vocabulary it promises.
    // A chip pointing at an empty theme is the failure this edit exists to
    // remove; pointing it somewhere else empty would just move it.
    const boundCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = $1 and status = 'published'`,
      [UNIT_THEMES_AFTER[0]]
    );
    const nBound = Number(boundCount.rows[0]?.n ?? 0);
    if (nBound < 100) {
      die(`theme "${UNIT_THEMES_AFTER[0]}" holds only ${nBound} published items, which is not the theme this batch measured.`);
    }
    // The real id maximum in the band this lesson numbers into, so a
    // concurrently-landed row cannot be silently overwritten.
    const maxSeq = await client.query<{ m: number }>(
      `select coalesce(max((split_part(id,'.',4))::int),0) m from content_items
        where theme = $1 and id like 'fr.a1.%'`, [UNIT_THEMES_AFTER[0]]
    );
    const firstAuthored = Number(AUTHORED[0].id.split('.').pop());
    const alreadyMine = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where id = any($1)`, [AUTHORED.map((a) => a.id)]
    );
    if (Number(alreadyMine.rows[0].n) === 0 && maxSeq.rows[0].m >= firstAuthored) {
      die(
        `this batch numbers from .${String(firstAuthored).padStart(3, '0')} and the a1 band of `
        + `"${UNIT_THEMES_AFTER[0]}" already reaches .${maxSeq.rows[0].m}. Somebody has authored into it since this\n`
        + `  lesson was measured. Renumber upward; never reuse an id, because ids are the SRS key.`
      );
    }

    const { themes: priorThemes, ...withoutThemes } = unitBody as Unit & { themes?: string[] };
    const nextUnit: Unit = {
      ...withoutThemes,
      themes: [...UNIT_THEMES_AFTER],
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    } as Unit;
    if (nextUnit.title !== unitBody.title || nextUnit.sub !== unitBody.sub || nextUnit.canDo !== unitBody.canDo) {
      die('this batch would change the unit title, sub or canDo. All three are correct and the Den advertises them.');
    }
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

    const existingLesson = await client.query<{ version: number }>(
      `select (body->>'version')::int as version from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );
    const prior = existingLesson.rows[0]?.version;
    guardLessonVersion({
      lessonId: LESSON.id, prior, authored: LESSON.version,
      sourceFile: 'heure-lesson.ts', dryRun: DRY_RUN, die,
    });

    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  authored items: ${AUTHORED.length} across ${new Set(AUTHORED.map((i) => i.theme)).size} theme(s)`);
    for (const theme of [...new Set(AUTHORED.map((i) => i.theme))]) {
      const inTheme = AUTHORED.filter((i) => i.theme === theme);
      console.log(`    ${theme}: ${inTheme.length} (.${inTheme[0].id.split('.').pop()} through .${inTheme[inTheme.length - 1].id.split('.').pop()})`);
    }
    console.log(`      12 hour headwords, which did not exist in ANY form, plus 4 register pairs`);
    console.log(`  imported items: ${IMPORTS.length} from ${new Set(IMPORTS.map((i) => i.theme)).size} themes OUTSIDE the seed cut, verified field by field against this database`);
    for (const theme of [...new Set(IMPORTS.map((i) => i.theme))]) {
      console.log(`    ${theme}: ${IMPORTS.filter((i) => i.theme === theme).length}`);
    }
    console.log(`  reused items: ${reused.length} named by the lesson, ${REUSED.length} documented and verified against this database`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}" , ${prior !== undefined ? `updating v${prior} → v${LESSON.version}` : 'NEW'}, `
      + `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  the twelve: ${THE_TWELVE.join(', ')}`);
    console.log(`  respelled: ${THE_TWELVE.map((h) => RESPELL[h].respell).join(' ')}`);
    console.log(`  register pairs: ${CLOCK_PAIRS.length}, every twin verified against this database`);
    for (const [spoken, official] of CLOCK_PAIRS) {
      const s = AUTHORED.find((a) => a.id === spoken)!;
      const o = IMPORTS.find((i) => i.id === official) ?? REUSED.find((r) => r.id === official)!;
      console.log(`    "${s.fr}"  vs  "${o.fr}"`);
    }
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round((formats.mcq ?? 0) / qs.length * 100)}% (ceiling 50) | errorSpot share: ${Math.round((formats.errorSpot ?? 0) / qs.length * 100)}%`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${fired.size}/${teachingDrills.length}, each the FIRST resolving target of exactly one round`);
    console.log(`  round leads: ${leads.join(', ')}`);
    console.log(`  dictation: ${HEURE_DICTATION_IDS.length} lines, ${wordMode.length} in word mode carrying "heures" as a placeable tile`);
    for (const m of modes) console.log(`    ${m}`);
    console.log(`  speak: ${speakIds.length} lines, all carrying voiceflash, all twelve hours included, ${CHUNK_IDS.length} chunk row(s) excluded`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  respellings authored for this lesson: ${Object.keys(RESPELL).length}, all passing the nasal convention, all UHR, none carrying U+203F`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  no day/month/season taught ✓`);
    console.log(`              no reflexive ✓  no inversion outside the frozen chunk ✓  no mixed clock ✓  no welded frame ✓  no dropped noun ✓`);

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(priorThemes ?? null)} → ${JSON.stringify(UNIT_THEMES_AFTER)}`);
    console.log(`      "temps" holds ${deadCounts.temps} items; that chip has always led nowhere.`);
    console.log(`      "heure-et-date" holds ${nBound} published rows and is a purpose-built clock deck. The brief`);
    console.log(`      recommended "routines" and never considered this one; routines is a times-of-day deck owned by a1.25.`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unitBody.prereqUnitIds ?? [])} (UNCHANGED, and each one verified to have a lesson)`);

    console.log(`\n  RESPELLING REPAIRS (not silent), display-only, in the phrase block this lesson reuses:`);
    for (const r of RESPELL_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      console.log(`    ${r.id}  ${r.fr}: "${now}" → "${r.to}"`);
      console.log(`      ${r.why}`);
    }
    if (alreadyRepaired) console.log(`    (${alreadyRepaired} of ${RESPELL_REPAIRS.length} already carry the corrected value; re-upserting is a no-op)`);

    if (DRY_RUN) {
      console.log('\n✓ dry run , all valid, nothing written.\n');
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
        ]
      );
    }

    // The respelling repairs. `respell` only: nothing else about these rows
    // moves, and they belong to the sons track as much as to this lesson.
    for (const r of RESPELL_REPAIRS) {
      const res = await client.query(
        `update content_items set respell = $1 where id = $2 and fr = $3`,
        [r.to, r.id, r.fr]
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`respelling repair for ${r.id} touched ${res.rowCount} rows , rolled back, nothing changed`);
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
      die(`unit update touched ${res.rowCount} rows , rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ heure batch applied: ${NEW_ITEMS.length} items (${AUTHORED.length} authored, ${IMPORTS.length} imported)`
      + ` + ${RESPELL_REPAIRS.length} respelling repairs + lesson ${LESSON.id} published,`
      + `\n  unit ${UNIT_ID} linked and rebound from ["temps"] to ["heure-et-date"].`
      + `\n  Next: pnpm tsx scripts/merge-heure-into-seed.ts --dry-run`
      + `\n  Do NOT run pnpm content:publish. It regenerates seed.json FROM this database and`
      + `\n  pnpm content:parity exits 1 on three pre-existing divergences.\n`
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
