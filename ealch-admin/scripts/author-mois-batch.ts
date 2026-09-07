// Author a1.09 "Les mois de l'année" into POSTGRES.
//
//   pnpm content:mois --dry-run    validate and report, write nothing
//   pnpm content:mois              apply, one transaction
//
// Everything validates before the database is touched, then the whole set
// upserts inside ONE transaction. Idempotent by id: running it twice against an
// unchanged database is a no-op.
//
// ── What this batch does, in order ─────────────────────────────────────────
//
//   1. Writes 12 authored sentence rows (fr.a1.jours-et-mois.248-259), which
//      are the missing halves of the nine contrast pairs.
//   2. Re-upserts 29 imported rows at their recorded values, which makes the
//      manifest in mois-corpus.ts a source of truth rather than a cached read.
//   3. Repairs 5 respellings that close a nasal vowel with a plain n. Printed,
//      never silent, and refused if the stored value is not the broken one.
//   4. Publishes lesson a1.09.l1.
//   5. Rebinds unit a1.09 from the dead ["temps","calendrier"] to
//      ["jours-et-mois"] and links the lesson.
//
// ── What this batch does NOT do ────────────────────────────────────────────
//
// It authors NO month word. All twelve already exist as headwords in this
// lesson's own theme, which is the brief's largest factual error and is
// documented at the top of mois-corpus.ts. Authoring them would have failed the
// duplicate-headword check below, which is the check that caught it.
//
// It does not run `pnpm content:publish`. That regenerates seed.json FROM this
// database and `pnpm content:parity` exits 1 on pre-existing divergences that
// are not this lesson's. Apply, merge, and stop.

// './env' MUST be imported first, see the incident note in migrate.ts.
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
  CHUNK_IDS, CONTRAST_PAIRS, IMPORTED, MOIS, MONTH_IDS, PAIR_DATE_FRAMES, PAIR_MONTHS,
  PAIR_MONTH_FRAMES, RESPELL, RESPELL_REPAIRS, REUSED, THE_TWELVE, WITHDRAWN_IDS, frOf,
  monthsIn, toItem,
} from './data/mois-corpus.ts';
import {
  DAY_WORDS, MOIS_DICTATION_IDS, MOIS_LESSON, REFRAME, SEASON_WORDS,
} from './data/mois-lesson.ts';

const AUTHORED: Item[] = MOIS.map(toItem);
const IMPORTS: Item[] = IMPORTED;
/** Everything this batch writes to content_items. */
const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTS];
const LESSON: Lesson = MOIS_LESSON;
const UNIT_ID = 'a1.09';

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  An EXPLICIT constant, not a figure derived from the lesson. The brief is
 *  specific about this: "Assert the reframe count against an explicit constant,
 *  not a figure derived from the lesson: a derived count compares the content to
 *  itself and passes on any rewording."
 *
 *  EIGHT sections carry it, plus the `reframe` field itself and two quiz `why`
 *  lines, which `strings()` also walks. The density validator requires three;
 *  a1.01 carries eight sections' worth and a1.08 seven. */
const REFRAME_APPEARANCES = 11;

/** Six error triggers, six drills, six retests and six quiz rounds, and EVERY
 *  teaching drill is the first resolving target of exactly one round.
 *  `drillForRound` walks a round's targets and stops at the first one that
 *  resolves, so a drill named only in second place never runs.
 *
 *  Stated here as explicit constants so a reordering of `targets`, or a round
 *  quietly deleted in a later trim, fails the batch rather than silently
 *  orphaning a drill nobody notices is dead. This landed twice in a1.05 and once
 *  in a first draft of a1.07. */
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;

/** Twelve months, nine authored contrast pairs. Stated explicitly so an edit
 *  that quietly drops a pair fails here rather than shipping a lesson that shows
 *  the contrast on eight months and claims nine. */
const EXPECTED_MONTHS = 12;
const EXPECTED_PAIRS = 9;

/** The five months whose respelling carries a nasal. hasPlainNasalFor cannot
 *  see three of them (septembre, novembre, décembre all have BR behind the
 *  nasal, so it is word-internal), which is why they are named here. */
const NASAL_MONTHS = ['janvier', 'juin', 'septembre', 'novembre', 'décembre'];

/** This unit's themes binding is REBOUND, not cleared. It was
 *  ["temps","calendrier"], both of which resolve to zero items in both copies. */
const UNIT_THEMES_BEFORE = ['temps', 'calendrier'];
const UNIT_THEMES_AFTER = ['jours-et-mois'];

/** What the Den advertises. The batch refuses to change any of the three. Note
 *  the sub carries a CURLY apostrophe in the database; the lesson title uses a
 *  straight one, matching the corpus and every other authored string. */
const UNIT_TITLE = 'Months of the Year';
const UNIT_SUB = 'Les mois de l\u2019année';
const UNIT_CANDO = 'Can name the months and give a date';

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

/** Whole-word containment that never builds a regex out of the needle. The
 *  brief's own warning applies: "A regex assembled from a string in a shell
 *  heredoc can silently become something else." */
function hasWord(haystack: string, needle: string): boolean {
  let from = 0;
  for (;;) {
    const i = haystack.indexOf(needle, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : haystack[i - 1];
    const after = haystack[i + needle.length] ?? ' ';
    if (!/[a-zà-ÿ]/i.test(before) && !/[a-zà-ÿ]/i.test(after)) return true;
    from = i + 1;
  }
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run, nothing will be written)');

  // ── Everything validates before the database is touched ──────────────────

  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

  const ids = NEW_ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  // THE CHECK THAT CAUGHT THE BRIEF'S LARGEST ERROR.
  //
  // Two entries teaching the same WORD in one theme is the .057 incident: the
  // flashcard hub keys decks on `fr` with the article STRIPPED, so `janvier`
  // and `le janvier` are ONE key inside a theme and a duplicate serves the same
  // card twice, taking two SRS ratings for one word.
  //
  // The brief instructs this lesson to author ten month headwords. All twelve
  // already exist at fr.sons.jours-et-mois.008-019 in this very theme, so doing
  // as instructed would have failed the build here. Sentences are exempt, as in
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
  // red on content this lesson does not own.
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
  // suite red on a lesson nobody had touched. a1.08 shipped the same bug through
  // a hand-rolled copy of this guard carrying a `level === 'a1'` filter the real
  // function does not have, and had to withdraw four rows afterwards.
  //
  // THE REAL FUNCTION, not a copy of it. A guard that reimplements the thing it
  // guards is free to drift from it. This is why `le mois`, `l'année` and
  // `la date` are display strings here rather than corpus rows: see
  // WITHDRAWN_IDS in mois-corpus.ts.
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
  // And the three that were withdrawn really are absent, so the reasoning above
  // cannot rot into a comment describing something that stopped being true.
  const smuggled = NEW_ITEMS.filter((i) => WITHDRAWN_IDS.includes(i.id));
  if (smuggled.length) {
    die(
      `withdrawn row(s) are back in the batch: ${smuggled.map((i) => `${i.id} "${i.fr}"`).join(', ')}\n`
      + `  These are gendered single-word nouns and importing them moves a1.03's printed ending figures.`
    );
  }

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

  // The v2 density rules. This is the check that makes the architecture real
  // rather than aspirational: a crowded screen fails the build.
  const density = validateDensity(LESSON, new Set([...ids, ...LESSON.itemIds]));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules the per-lesson tests enforce.
  const authoredJson = JSON.stringify({ AUTHORED, LESSON });
  if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
  // U+203F renders as a low underscore on a Pixel 6 and shipped that way in
  // sons.10. « en août » is a liaison candidate and is exactly the temptation
  // the brief warns about, so this is checked over the AUTHORED half and the
  // LESSON rather than over the imports, which are somebody else's shipped rows.
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
    /\b(conjugaison|article (défini|indéfini|partitif)|adjectif ordinal|préposition|complément circonstanciel|masculin|féminin|déterminant)\b/i.test(s));
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
  // or m to end a token, and septembre, novembre and décembre all have BR
  // behind theirs. So THREE of this lesson's five nasal months pass the shared
  // checker while still being wrong. Checked explicitly here, by name.
  const missingSuperscript = NASAL_MONTHS.filter((m) => !RESPELL[m]?.respell.includes('ⁿ'));
  if (missingSuperscript.length) {
    die(
      `month respelling(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}\n`
      + `  hasPlainNasalFor does not catch a word-internal nasal, so this is checked by name.`
    );
  }
  // juin and juillet must be respelled with the SAME ɥ convention as each other,
  // whichever it is. The brief asks for one to be picked and stated; both
  // shipped rows already use W, so this asserts the pair stays consistent rather
  // than choosing again. It also refuses a fourth form for the glide.
  const juin = RESPELL.juin.respell;
  const juillet = RESPELL.juillet.respell;
  const glide = (s: string) => (s.toUpperCase().includes('ZHW') ? 'W' : s.toUpperCase().includes('Ü') ? 'Ü' : '?');
  if (glide(juin) !== glide(juillet) || glide(juin) === '?') {
    die(
      `juin ${juin} and juillet ${juillet} do not share one convention for the ɥ glide.\n`
      + `  The shipped rows both use W (as huit WEET and la nuit NWEE do). Pick one form for both and do not add a fourth.`
    );
  }

  // The twelve, and the pairs that are the shape of the lesson.
  if (THE_TWELVE.length !== EXPECTED_MONTHS) die(`THE_TWELVE holds ${THE_TWELVE.length} months, expected ${EXPECTED_MONTHS}`);
  if (MONTH_IDS.length !== EXPECTED_MONTHS) die(`${MONTH_IDS.length} month headwords resolve, expected ${EXPECTED_MONTHS}`);
  if (CONTRAST_PAIRS.length !== EXPECTED_PAIRS) {
    die(`${CONTRAST_PAIRS.length} contrast pairs authored, expected ${EXPECTED_PAIRS}`);
  }
  if (PAIR_MONTHS.length !== EXPECTED_PAIRS || PAIR_DATE_FRAMES.length !== EXPECTED_PAIRS) {
    die('PAIR_MONTHS and PAIR_DATE_FRAMES must stay index-aligned with CONTRAST_PAIRS');
  }

  // Every pair really does differ by the FRAME and nothing else, which is the
  // entire claim the contrast mission makes about them.
  //
  // Compared as word sequences with terminal punctuation dropped: strip `en `
  // from the month half and the whole `le <number>` frame from the date half,
  // and what is left must be identical. That is a mechanical check of "one thing
  // moved" rather than a restatement of it.
  const words = (fr: string) => fr.replace(/\s*[.?!]\s*$/u, '').trim();
  const notMinimal: string[] = [];
  for (let i = 0; i < CONTRAST_PAIRS.length; i++) {
    const [monthId, dateId] = CONTRAST_PAIRS[i];
    const monthFrame = PAIR_MONTH_FRAMES[i];
    const dateFrame = PAIR_DATE_FRAMES[i];
    const mf = words(frOf(monthId));
    const df = words(frOf(dateId));
    // The declared frames must really be in the sentences they claim to describe.
    if (!mf.includes(monthFrame)) notMinimal.push(`"${mf}" does not contain its declared frame "${monthFrame}"`);
    if (!df.includes(dateFrame)) notMinimal.push(`"${df}" does not contain its declared frame "${dateFrame}"`);
    // And with the frames reduced to the bare month, the two must be the same.
    const m = PAIR_MONTHS[i];
    if (mf.replace(monthFrame, m) !== df.replace(dateFrame, m)) {
      notMinimal.push(`"${mf}" vs "${df}" differ by more than the frame`);
    }
  }
  if (notMinimal.length) {
    die(
      `contrast pair problem(s):\n  ${notMinimal.join('\n  ')}\n`
      + `  The whole teaching is that ONE thing moved. A pair with a second difference hides it.`
    );
  }
  // Every authored half's `pairWith` agrees with the table, so a pair cannot be
  // half deleted. Only the authored rows carry `pairWith`; the borrowed halves
  // are held together by CONTRAST_PAIRS alone, which is why this is checked
  // against the table rather than derived from it.
  const tableSays = new Map<string, string>();
  for (const [a, b] of CONTRAST_PAIRS) { tableSays.set(a, b); tableSays.set(b, a); }
  const brokenPair = MOIS.filter((w) => w.pairWith && tableSays.get(w.id) !== w.pairWith);
  if (brokenPair.length) {
    die(`authored row(s) whose pairWith disagrees with CONTRAST_PAIRS: ${brokenPair.map((w) => w.id).join(', ')}`);
  }

  // Every one of the twelve is TAUGHT BY NAME somewhere a learner reads, not
  // merely present in a count. The brief asks for exactly this and singles out
  // février, octobre and décembre as the ones most likely to be thin.
  const learnerText = learnerFacing.join('\n');
  const untaught = THE_TWELVE.filter((m) => !hasWord(learnerText, m));
  if (untaught.length) die(`month(s) never named on any screen: ${untaught.join(', ')}`);
  // And every month appears in a real SENTENCE, not only on a vocabulary card,
  // so no month is taught as a word with nothing to do.
  const inSentences = new Set(
    [...NEW_ITEMS, ...REUSED].filter((i) => 'kind' in i ? i.kind === 'sentence' : true)
      .flatMap((i) => monthsIn(i.fr)),
  );
  const noSentence = THE_TWELVE.filter((m) => !inSentences.has(m));
  if (noSentence.length) {
    die(
      `month(s) with no sentence anywhere in this lesson's corpus: ${noSentence.join(', ')}\n`
      + `  The brief claims février, octobre and décembre have none available. Postgres holds 13, 9 and 16.`
    );
  }

  // Nothing that belongs to a neighbour is taught here. Checked over the
  // surfaces a learner PRODUCES from rather than every string, because a day
  // inside a full date is legitimate context in a reading passage and a check
  // over every string would fire on it and then get deleted.
  const productionSurfaces = [
    ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
    ...strings(LESSON.drills ?? []),
    ...strings((LESSON.sections.find((s) => s.type === 'quiz') ?? {}) as unknown),
  ];
  const seasonHit = SEASON_WORDS.filter((w) => productionSurfaces.some((s) => hasWord(s.toLowerCase(), w)));
  if (seasonHit.length) {
    die(`season word(s) taught here, which belong to a1.10: ${seasonHit.join(', ')}`);
  }
  const dayHit = DAY_WORDS.filter((w) => productionSurfaces.some((s) => hasWord(s.toLowerCase(), w)));
  if (dayHit.length) {
    die(
      `day name(s) taught here, which belong to a1.08: ${dayHit.join(', ')}\n`
      + `  A day inside a full date in the reading passage is allowed; drilling one is not.`
    );
  }
  const CLOCK_WORDS = ['heure', 'heures', 'minute', 'midi', 'minuit'];
  const clockHit = CLOCK_WORDS.filter((w) => productionSurfaces.some((s) => hasWord(s.toLowerCase(), w)));
  if (clockHit.length) die(`clock vocabulary taught here, which belongs to a1.12: ${clockHit.join(', ')}`);

  // Every authored month is LOWERCASE, so the corpus itself models the rule. An
  // item whose `fr` is "Janvier" teaches the English habit every time it is
  // shown. Sentence-initial capitals are legitimate and are allowed at index 0.
  const capitalised = NEW_ITEMS.filter((i) =>
    THE_TWELVE.some((m) => i.fr.indexOf(m[0].toUpperCase() + m.slice(1)) > 0));
  if (capitalised.length) {
    die(`item(s) capitalise a month mid-sentence:\n  ${capitalised.map((i) => `${i.id} "${i.fr}"`).join('\n  ')}`);
  }

  // At most half the exam may be mcq. Recognition can be passed by elimination,
  // and this lesson's whole canDo is production.
  const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
  const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half ceiling`);

  // Every question teaches. Every built A1 lesson is at 100% `why` coverage and
  // a1.04 came off the waiver list on 2026-08-05 by earning it.
  const noWhy = qs.filter((q) => !q.why);
  if (noWhy.length) die(`${noWhy.length} quiz question(s) carry no why:\n  ${noWhy.map((q) => q.q).join('\n  ')}`);
  const noRef = qs.filter((q) => !q.ref);
  if (noRef.length) die(`${noRef.length} quiz question(s) carry no ref:\n  ${noRef.map((q) => q.q).join('\n  ')}`);
  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
  const badRef = qs.filter((q) => q.ref && !sectionIds.has(q.ref));
  if (badRef.length) die(`quiz ref(s) naming a section that does not exist: ${badRef.map((q) => q.ref).join(', ')}`);

  // Every free-text question must accept the answer it displays. A question
  // whose own canonical answer is rejected marks a correct learner wrong.
  const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
  if (unacceptable.length) {
    die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
  }

  // No free-text question may claim to test a CAPITAL LETTER. `fold()`
  // lowercases, so typeIn and errorSpot both compare "Juillet" equal to
  // "juillet" and would mark the error correct. The brief recommends errorSpot
  // for this and is wrong: errorSpot runs the same matchesAccept path. Only mcq
  // can test it, because its options are picked rather than typed.
  const foldBlind = qs.filter((q) => {
    const open = q.format === 'typeIn' || q.format === 'errorSpot';
    if (!open) return false;
    const all = [q.answer ?? '', ...(q.accept ?? [])];
    return all.some((a) => THE_TWELVE.some((m) => a.includes(m[0].toUpperCase() + m.slice(1))));
  });
  if (foldBlind.length) {
    die(
      `free-text question(s) whose answer turns on a capital letter:\n  `
      + foldBlind.map((q) => `"${q.q}"`).join('\n  ') + `\n`
      + `  fold() lowercases, so typeIn and errorSpot cannot test this. Use mcq.`
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
  const teaching = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  if (orphans.length) {
    die(
      `drill(s) no quiz round can fire: ${orphans.join(', ')}\n`
      + `  drillForRound stops at a round's FIRST target that resolves to a drill, so a drill named only in second\n`
      + `  place never runs. Reorder the round's \`targets\`, add a round for it, or drop the drill.`
    );
  }
  // Every trigger's drill and retest must exist, and every section it watches.
  const knownDrills = new Set((LESSON.drills ?? []).map((d) => d.id));
  for (const t of LESSON.errorTriggers ?? []) {
    if (!knownDrills.has(t.drill)) die(`trigger ${t.id} names drill "${t.drill}", which is not authored`);
    if (t.retest && !knownDrills.has(t.retest)) die(`trigger ${t.id} names retest "${t.retest}", which is not authored`);
    for (const d of t.detectOn) {
      const base = d.split('/')[0];
      if (!sectionIds.has(base)) die(`trigger ${t.id} detects on "${d}", and section "${base}" does not exist`);
    }
  }

  // Exactly one quiz section. lessonPager.logic.ts appends exactly one quiz
  // page, resolved with `sections.find(s => s.type === 'quiz')`, so a second is
  // unreachable questions. a1.01 shipped 12 that no learner ever saw.
  const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
  if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one, so the rest are unreachable.`);

  // Every sheetId names a sheet the lesson actually declares.
  const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
  const danglingSheet = LESSON.sections
    .map((s) => (s as { sheetId?: string }).sheetId)
    .filter((id): id is string => Boolean(id) && !sheetIds.has(id!));
  if (danglingSheet.length) die(`sheetId(s) naming a sheet that does not exist: ${[...new Set(danglingSheet)].join(', ')}`);

  // No `autoplay` anywhere: it is declared in schema.ts and implemented in no
  // component, so it is an authored field with no reader.
  if (JSON.stringify(LESSON).includes('"autoplay"')) {
    die('autoplay is authored somewhere. It is declared in schema.ts and read by no component. Use audioFirst.');
  }

  // The chunk rows carry a verb no A1 unit conjugates. They may be READ and must
  // never be asked for: no speak mission, no dictée and no production drill may
  // name one.
  const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's18-speak');
  const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
  const producedChunks = [
    ...speakIds.filter((id) => CHUNK_IDS.includes(id)),
    ...MOIS_DICTATION_IDS.filter((id) => CHUNK_IDS.includes(id)),
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
    // compared too: an id that resolves to a different sentence than the one
    // this lesson names is worse than one that does not resolve at all.
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
      id: string; kind: string; theme: string; fr: string; en: string; drills: string[]; status: string;
      card_type: string | null; respell: string | null;
    }>(
      `select id, kind, theme, fr, en, drills, status, card_type, respell from content_items where id = any($1)`,
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
      // `respell` is compared only where the manifest is NOT about to repair it.
      const repairing = RESPELL_REPAIRS.some((r) => r.id === it.id);
      if (!repairing && (row.respell ?? undefined) !== (it.respell ?? undefined)) {
        importDrift.push(`${it.id}: respell differs ("${String(it.respell)}" vs "${String(row.respell)}")`);
      }
    }
    if (importDrift.length) {
      die(
        `the IMPORTED manifest has drifted from the database:\n  ${importDrift.join('\n  ')}\n`
        + `  Re-run scripts/_mois_manifest.ts and paste the result into scripts/data/mois-corpus.ts. The manifest is\n`
        + `  what the merge writes into seed.json, and a stale manifest puts the seed ahead of rows nobody reviewed.`
      );
    }

    // The five respelling repairs. Refuse if the stored value is not the broken
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
    // what this file authors: a shortened `fr` upstream would quietly move a
    // target between modes.
    const byId = new Map(NEW_ITEMS.map((i) => [i.id, i] as const));
    const dictRows = await client.query<{ id: string; fr: string; drills: string[] }>(
      `select id, fr, drills from content_items where id = any($1)`,
      [MOIS_DICTATION_IDS]
    );
    const noDictTag: string[] = [];
    const modes: string[] = [];
    for (const id of MOIS_DICTATION_IDS) {
      const it = byId.get(id) ?? dictRows.rows.find((r) => r.id === id);
      if (!it) die(`the dictée names ${id}, which is neither in this batch nor in the database`);
      const mode = dicteeMode(it.fr);
      const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
      modes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"${decoys.length ? ` decoys=${decoys.join('/')}` : ''}`);
      const d = byId.has(id) ? byId.get(id)!.drills : drillsOf((it as { drills: unknown }).drills);
      if (!d.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
    }
    if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);
    // At least one word-mode target must offer `le` as a decoy the learner has
    // to reject. That is the whole reason this lesson's dictée uses the month
    // frame at all: the bank hands the learner a `le` tile they must decide NOT
    // to place, which is one of this lesson's two errors, in the one place it is
    // visible on the page.
    const leDecoy = MOIS_DICTATION_IDS.filter((id) => {
      const it = byId.get(id) ?? dictRows.rows.find((r) => r.id === id);
      return it && dicteeMode(it.fr) === 'words' && wordDecoys(it.fr).includes('le');
    });
    if (!leDecoy.length) {
      die(
        `no dictée target offers "le" as a decoy.\n`
        + `  A word-mode target on the MONTH frame is what produces it, and it is the exercise's whole question:\n`
        + `  the learner is handed the article and has to decide the sentence does not want one.`
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

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units, cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    // title, sub and canDo are what the Den advertises before a learner opens
    // anything, and authoring the lesson is not a licence to rewrite the promise
    // it was built against. The brief says so explicitly: "Do not change title,
    // sub or canDo. All three are correct and the Den advertises them."
    if (unitBody.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unitBody.title}"`);
    if (unitBody.sub !== UNIT_SUB) {
      die(`unit ${UNIT_ID} sub has changed: "${unitBody.sub}" (expected "${UNIT_SUB}")`);
    }
    if (unitBody.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: "${unitBody.canDo}"`);

    // The eyebrow the Den draws is computed from the unit's seq, and `tag` is
    // the one place it is authored by hand. a1.03 shipped LEÇON 03 at seq 5 and
    // the header above it drew LEÇON 05.
    const expectedTag = `A1 · LEÇON ${String(unitBody.seq).padStart(2, '0')}`;
    if (LESSON.tag !== expectedTag) {
      die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unitBody.seq}, so the header will draw "${expectedTag}"`);
    }

    // The prereq is REPORTED, not changed. The brief offers dropping it as an
    // option on the belief that a1.08 does not exist. It does, so the binding is
    // correct and is left alone.
    const prereq = (unitBody.prereqUnitIds ?? []);
    const prereqLessons: string[] = [];
    if (prereq.length) {
      const r = await client.query<{ id: string; lessons: string[] }>(
        `select body->>'id' id, coalesce(body->'lessonIds','[]'::jsonb) lessons
           from content_units where kind = 'curriculum_unit' and body->>'id' = any($1)`,
        [prereq]
      );
      for (const row of r.rows) {
        const n = Array.isArray(row.lessons) ? row.lessons.length : 0;
        prereqLessons.push(`${row.id} (${n} lesson${n === 1 ? '' : 's'})`);
        if (n === 0) {
          console.warn(
            `\n⚠  prereq unit ${row.id} has no lesson. That is a scheduling fact rather than a runtime error,\n`
            + `   but this lesson's act 3 assumes the days lesson happened. See the handover note in mois-lesson.ts.\n`
          );
        }
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
    // The themes being replaced really do hold nothing, so this is a repair
    // rather than the deletion of something somebody was using.
    const deadCounts: Record<string, number> = {};
    for (const t of UNIT_THEMES_BEFORE) {
      const r = await client.query<{ n: string }>(`select count(*)::text n from content_items where theme = $1`, [t]);
      deadCounts[t] = Number(r.rows[0]?.n ?? 0);
      if (deadCounts[t] > 0) {
        die(`theme "${t}" now holds ${deadCounts[t]} items, so replacing this binding would remove a real chip. Revisit the decision.`);
      }
    }
    // And the theme being bound TO really does hold the vocabulary it promises,
    // including all twelve months. A chip pointing at an empty theme is the
    // failure this edit exists to remove; pointing it somewhere else empty would
    // just move it.
    const boundCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = $1 and status = 'published'`,
      [UNIT_THEMES_AFTER[0]]
    );
    const nBound = Number(boundCount.rows[0]?.n ?? 0);
    if (nBound < 100) {
      die(`theme "${UNIT_THEMES_AFTER[0]}" holds only ${nBound} published items, which is not the theme this batch measured.`);
    }
    const monthsInTheme = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where id = any($1) and theme = $2 and status = 'published'`,
      [MONTH_IDS, UNIT_THEMES_AFTER[0]]
    );
    const nMonths = Number(monthsInTheme.rows[0]?.n ?? 0);
    if (nMonths !== EXPECTED_MONTHS) {
      die(
        `${nMonths} of the twelve month headwords are published in "${UNIT_THEMES_AFTER[0]}", expected ${EXPECTED_MONTHS}.\n`
        + `  This lesson authors none of them and imports all twelve, so a gap here means the ids have moved.`
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
      sourceFile: 'mois-lesson.ts', dryRun: DRY_RUN, die,
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
    console.log(`  NO month word is authored: all twelve already exist at fr.sons.jours-et-mois.008-019 and are IMPORTED`);
    console.log(`  imported items: ${IMPORTS.length} from ${new Set(IMPORTS.map((i) => i.theme)).size} theme(s) OUTSIDE the seed cut, verified field by field`);
    for (const theme of [...new Set(IMPORTS.map((i) => i.theme))]) {
      console.log(`    ${theme}: ${IMPORTS.filter((i) => i.theme === theme).length}`);
    }
    console.log(`  reused items: ${reused.length} named by the lesson, ${REUSED.length} documented and verified against this database`);
    console.log(`  withdrawn on purpose: ${WITHDRAWN_IDS.length} gendered single-word nouns kept OUT of the seed (le mois, l'année, la date)`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}", ${prior !== undefined ? `updating v${prior} → v${LESSON.version}` : 'NEW'}, `
      + `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  the twelve: ${THE_TWELVE.join(', ')}`);
    console.log(`  contrast pairs: ${CONTRAST_PAIRS.length}, every one differing by the FRAME alone`);
    for (let i = 0; i < CONTRAST_PAIRS.length; i++) {
      console.log(`    ${PAIR_MONTH_FRAMES[i].padEnd(14)} / ${PAIR_DATE_FRAMES[i]}`);
    }
    console.log(`  every one of the twelve named on a screen AND present in a sentence: yes`);
    console.log(`  no season taught (a1.10), no day taught (a1.08), no clock taught (a1.12): confirmed`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round((formats.mcq ?? 0) / qs.length * 100)}% (ceiling 50) | errorSpot ${Math.round((formats.errorSpot ?? 0) / qs.length * 100)}% | listenChoose ${Math.round((formats.listenChoose ?? 0) / qs.length * 100)}%`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  the capital letter is tested by mcq, because fold() lowercases and no free-text format can see it`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${fired.size}/${teaching.length}, each the FIRST resolving target of exactly one round`);
    console.log(`  round leads: ${leads.join(', ')}`);
    console.log(`  dictation: ${MOIS_DICTATION_IDS.length} lines`);
    for (const m of modes) console.log(`    ${m}`);
    console.log(`  speak: ${speakIds.length} lines, all carrying voiceflash`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  respellings authored for this lesson: ${Object.keys(RESPELL).length}, all passing the nasal convention`);
    console.log(`  juin ${RESPELL.juin.respell} and juillet ${RESPELL.juillet.respell} share the W convention (as huit WEET and la nuit NWEE do)`);
    console.log(`  août is taught as ${RESPELL['août'].ipa} ${RESPELL['août'].respell}, one form only, never presented as variable`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  no neighbour's content ✓`);

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(priorThemes ?? null)} → ${JSON.stringify(UNIT_THEMES_AFTER)}`);
    console.log(`      "temps" holds ${deadCounts.temps} items and "calendrier" holds ${deadCounts.calendrier}; both chips have always led nowhere.`);
    console.log(`      "jours-et-mois" holds ${nBound} published rows including all ${nMonths} months, and is the theme a1.08 bound to first.`);
    console.log(`      THIS IS THE CLUSTER DECISION: a1.10 should keep "meteo" and drop the dead "temps"; a1.12 should rebind to "jours-et-mois".`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(prereq)} (UNCHANGED) → ${prereqLessons.join(', ') || 'none'}`);

    console.log(`\n  RESPELLING REPAIRS (not silent), display-only, in this lesson's own theme:`);
    for (const r of RESPELL_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      console.log(`    ${r.id}  ${r.fr}: "${now}" → "${r.to}"`);
      console.log(`      ${r.why}`);
    }
    if (alreadyRepaired) console.log(`    (${alreadyRepaired} of ${RESPELL_REPAIRS.length} already carry the corrected value; re-upserting is a no-op)`);

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
        ]
      );
    }

    // The respelling repairs. `respell` only: nothing else about these rows
    // moves, and they belong to the sons track as much as to this lesson. This
    // runs AFTER the imports, which re-upsert the broken value, so the order
    // matters and reversing it would undo the repair in the same transaction.
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
      `\n✓ mois batch applied: ${NEW_ITEMS.length} items (${AUTHORED.length} authored, ${IMPORTS.length} imported)`
      + ` + ${RESPELL_REPAIRS.length} respelling repairs + lesson ${LESSON.id} published,`
      + `\n  unit ${UNIT_ID} linked and rebound from ["temps","calendrier"] to ["jours-et-mois"].`
      + `\n  Next: pnpm tsx scripts/merge-mois-into-seed.ts --dry-run`
      + `\n  Do NOT run pnpm content:publish. It regenerates seed.json FROM this database and`
      + `\n  pnpm content:parity exits 1 on pre-existing divergences that are not this lesson's.\n`
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
