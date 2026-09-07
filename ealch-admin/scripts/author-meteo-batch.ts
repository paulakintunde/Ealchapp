// Author a1.10 "Les saisons & la météo" into POSTGRES.
//
//   pnpm content:meteo --dry-run    validate and report, write nothing
//   pnpm content:meteo              apply, one transaction
//
// Everything validates before the database is touched, then the whole set
// upserts inside ONE transaction. Idempotent by id: running it twice against an
// unchanged database is a no-op.
//
// ── What this batch does, in order ─────────────────────────────────────────
//
//   1. Writes NO authored row. Not one. Every word this lesson needs was
//      already published, including « Quel temps fait-il ? », which the brief
//      says returns zero in both copies and which exists four times over.
//   2. Re-upserts 43 imported rows at their recorded values, which makes the
//      manifest in meteo-corpus.ts a source of truth rather than a cached read.
//   3. Repairs 10 respellings across two lists: 4 on rows that land in the seed
//      and 6 on rows that exist only here. Printed, never silent, and refused
//      if the stored value is not the broken one this batch expects.
//   4. Publishes lesson a1.10.l1.
//   5. Rebinds unit a1.10 from ["temps","meteo"] to ["meteo"] and links the
//      lesson. `temps` holds zero items in both copies and always has.
//
// ── What this batch does NOT do ────────────────────────────────────────────
//
// It does not import the fifteen gendered single-word nouns this lesson most
// obviously wants. Measured through the REAL `endingPopulation`, importing them
// moves seven of a1.03's printed ending figures, four of which are percentages
// on a card. All fifteen are display strings instead. See WITHDRAWN_IDS.
//
// It does not touch `prereqUnitIds`, which is empty and should not be. The
// recommendation is printed and not applied: changing another decision's shape
// silently is how a spine drifts.
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
  DB_ONLY_REPAIRS, IMPORTED, RESPELL, RESPELL_REPAIRS, REUSED, SEASON_FRAME, SEASON_IDS,
  SHAPES, THE_FOUR, WITHDRAWN_IDS, frOf, seasonsIn,
} from './data/meteo-corpus.ts';
import {
  CLOCK_WORDS, DAY_WORDS, FAIRE_FORMS, METEO_DICTATION_IDS, METEO_LESSON, MONTH_WORDS, REFRAME,
} from './data/meteo-lesson.ts';

/** a1.10 authors nothing. Stated as an explicit empty array rather than left
 *  implicit, because "0 authored" is a finding rather than an oversight and a
 *  later author adding a row here should have to delete this comment first. */
const AUTHORED: Item[] = [];
const IMPORTS: Item[] = IMPORTED;
/** Everything this batch writes to content_items. */
const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTS];
const LESSON: Lesson = METEO_LESSON;
const UNIT_ID = 'a1.10';

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  An EXPLICIT constant, not a figure derived from the lesson: a derived count
 *  compares the content to itself and passes on any rewording. The density
 *  validator requires three SECTIONS; this lesson carries it in eight, and the
 *  total below is higher because `strings()` also walks the `reframe` field
 *  itself, the tapTable detail bodies and the quiz `why` lines that quote it. */
const REFRAME_APPEARANCES = 14;

/** Seven error triggers, six teaching drills, six retests and six quiz rounds.
 *  Seven and six because err-personal-il and err-personal-il-2 are the two
 *  directions of one confusion and share `drill-collision`: misreading the
 *  weather as a man and misreading a man as the weather are different failures
 *  and are detected separately, but the remediation is the same sort.
 *
 *  `drillForRound` walks a round's targets and stops at the first one that
 *  resolves, so a drill named only in second place never runs. Stated here as
 *  explicit constants so a reordering of `targets`, or a round quietly deleted
 *  in a later trim, fails the batch rather than silently orphaning a drill
 *  nobody notices is dead. This landed twice in a1.05 and once in a1.07. */
const EXPECTED_TRIGGERS = 7;
const EXPECTED_ROUNDS = 6;
const EXPECTED_TEACHING_DRILLS = 6;

/** Four seasons and four weather shapes. The SHAPE of the lesson, so a
 *  hardcoded count is correct here: a quiet drop is exactly what it guards. */
const EXPECTED_SEASONS = 4;
const EXPECTED_SHAPES = 4;

/** Respellings that MUST carry the superscript, by name.
 *
 *  `hasPlainNasalFor` cannot see a word-internal nasal (its test needs the n or
 *  m to end a token), and it also has to be checked from the other side: a
 *  word with a genuine nasal whose respelling was rewritten could lose the
 *  superscript without any shared checker noticing. */
const NASAL_WORDS = ['le vent', 'le printemps', 'la saison', 'au printemps', 'il fait du vent', 'Quel temps fait-il ?'];

/** And the syllable that must NOT carry it, which is the whole automne
 *  decision.
 *
 *  `automne` is /ɔ.tɔn/: the m is silent and the n is a real consonant, so
 *  there is no nasal vowel and a superscript would teach a sound that is not
 *  there. `hasPlainNasalFor` flags every single-N respelling of it because the
 *  French spelling is `mne` and it looks for a vowel after the n. The passing
 *  form is a doubled N. This check is what stops a future author "fixing" it.
 *
 *  Checked on the LAST TOKEN rather than on the whole string, because
 *  « en automne » legitimately carries a superscript on `en`, which IS a real
 *  nasal. A whole-string check would refuse the correct answer. */
const NOT_NASAL_WORDS = ['automne', "l'automne", 'en automne'];
const AUTOMNE_SYLLABLE = 'TONN';
const lastToken = (respell: string) =>
  respell.replace(/^\[|\]$/g, '').split(/[\s-]+/).filter(Boolean).pop() ?? '';

/** This unit's themes binding is REBOUND, not cleared. `temps` resolves to zero
 *  items in both copies; `meteo` holds 336 published rows. */
const UNIT_THEMES_BEFORE = ['temps', 'meteo'];
const UNIT_THEMES_AFTER = ['meteo'];
/** The one being dropped, which must really be empty. */
const DEAD_THEME = 'temps';

/** What the Den advertises. The batch refuses to change any of the three. The
 *  brief: "Do not change title, sub or canDo. All three are correct and the Den
 *  advertises them." */
const UNIT_TITLE = 'Seasons and Weather';
const UNIT_SUB = 'Les saisons & la météo';
const UNIT_CANDO = "Can name the seasons and describe today's weather";

/** REPORTED, NOT APPLIED. a1.10 is the only unit in this cluster with no
 *  prerequisite at all, which is almost certainly an oversight: the lesson
 *  leans on four built units and two of them are load-bearing in the sense
 *  that a learner cannot fake their way past them. */
const PREREQ_RECOMMENDATION = ['a1.29', 'a1.07', 'a1.06'];
const PREREQ_MINIMUM = ['a1.29'];

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

/** `drills` is a Postgres ENUM ARRAY and node-postgres has no parser registered
 *  for it, so it arrives as the raw literal `{sentence,flashcard,review}` rather
 *  than as an array. Reading it as one silently produces a string, and
 *  `"{...}".includes('voiceflash')` then answers TRUE by substring, which means
 *  a naive tag check passes on a row that does not carry the tag at all. */
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

/** Whole-word containment that never builds a regex out of the needle. `\b` is
 *  ASCII-only in JavaScript, so /\ben été\b/ matches NOTHING and looks exactly
 *  like an absence. */
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

  // THE CHECK THAT WOULD HAVE CAUGHT THE BRIEF'S ONE REMAINING ERROR.
  //
  // Two entries teaching the same WORD in one theme is the .057 incident: the
  // flashcard hub keys decks on `fr` with the article STRIPPED, so a duplicate
  // serves the same card twice and takes two SRS ratings for one word.
  //
  // The brief instructs this lesson to author « Quel temps fait-il ? » from
  // nothing. fr.a1.meteo.183 already carries it, in this unit's own theme, so
  // doing as instructed would have failed here. Sentences are exempt, as in
  // flashhub-coverage.test.ts, and so is anything whose cardType is not vocab.
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
  // re-measures all twenty figures from the seed on every run.
  //
  // THE REAL FUNCTION, not a copy of it. a1.08 shipped a hand-rolled version of
  // this guard carrying a `level === 'a1'` filter the real one does not have,
  // let four rows through and moved two of a1.03's printed cards. This is why
  // fifteen rows are display strings here: see WITHDRAWN_IDS.
  const genderPopulation = endingPopulation(
    NEW_ITEMS.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags }))
  );
  if (genderPopulation.length) {
    die(
      `this batch would add ${genderPopulation.length} row(s) to a1.03's measured ending population, which moves `
      + `statistics printed on its cards:\n  `
      + genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n`
      + `  Measured: importing this lesson's fifteen gendered nouns moves -age, -té, -ie, -e, -on, -ps and -er.`
    );
  }
  const smuggled = NEW_ITEMS.filter((i) => WITHDRAWN_IDS.includes(i.id));
  if (smuggled.length) {
    die(
      `withdrawn row(s) are back in the batch: ${smuggled.map((i) => `${i.id} "${i.fr}"`).join(', ')}\n`
      + `  These are gendered single-word nouns and importing them moves a1.03's printed ending figures.`
    );
  }
  if (WITHDRAWN_IDS.length !== 15) die(`WITHDRAWN_IDS holds ${WITHDRAWN_IDS.length} rows, expected the 15 that were measured`);

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
  // sons.10. FOUR imported rows carry it in their own `ipa` (en été, en hiver,
  // au printemps, en automne and three sentences), so this is checked over the
  // AUTHORED half and the LESSON rather than over the imports, which are
  // somebody else's shipped rows. The lesson displays none of those ipa fields.
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
    /\b(conjugaison|article (défini|indéfini|partitif)|adjectif ordinal|préposition|complément circonstanciel|masculin|féminin|déterminant|verbe impersonnel)\b/i.test(s));
  if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

  // The reframe is the lesson's spine, and a reworded copy is exactly how the
  // verbatim check starts failing.
  const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
  if (hits !== REFRAME_APPEARANCES) {
    die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
  }

  // ── The respelling convention, from both sides ───────────────────────────
  const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
  if (badNasal.length) {
    die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
  }
  const missingSuperscript = NASAL_WORDS.filter((w) => !RESPELL[w]?.respell.includes('ⁿ'));
  if (missingSuperscript.length) {
    die(
      `respelling(s) carrying a genuine nasal vowel with no superscript n: ${missingSuperscript.join(', ')}\n`
      + `  hasPlainNasalFor cannot see a word-internal nasal, so these are checked by name.`
    );
  }
  // AND THE ONE THAT MUST NOT HAVE IT. Read the note above DB_ONLY_REPAIRS in
  // meteo-corpus.ts before changing this.
  const wrongSuperscript = NOT_NASAL_WORDS.filter((w) => lastToken(RESPELL[w]?.respell ?? '').includes('ⁿ'));
  if (wrongSuperscript.length) {
    die(
      `automne-class respelling(s) carrying a superscript n on the automne syllable: ${wrongSuperscript.join(', ')}\n`
      + `  automne is /ɔ.tɔn/. The m is SILENT and the n is a REAL CONSONANT, so there is no nasal vowel and a\n`
      + `  superscript teaches a sound that is not there. Use a doubled N: oh-TONN, loh-TONN, ahⁿ-noh-TONN.`
    );
  }
  // And automne really does use the doubled-N form everywhere it is displayed,
  // so "not a superscript" cannot decay into "not written at all".
  const badAutomne = NOT_NASAL_WORDS.filter((w) => lastToken(RESPELL[w]?.respell ?? '') !== AUTOMNE_SYLLABLE);
  if (badAutomne.length) {
    die(`automne respelled without the doubled N: ${badAutomne.map((w) => `${w} ${RESPELL[w]?.respell}`).join(', ')}`);
  }

  // ── The shape of the lesson ─────────────────────────────────────────────
  if (THE_FOUR.length !== EXPECTED_SEASONS) die(`THE_FOUR holds ${THE_FOUR.length} seasons, expected ${EXPECTED_SEASONS}`);
  if (SEASON_IDS.length !== EXPECTED_SEASONS) die(`${SEASON_IDS.length} season frames resolve, expected ${EXPECTED_SEASONS}`);
  if (SHAPES.length !== EXPECTED_SHAPES) die(`${SHAPES.length} weather shapes declared, expected ${EXPECTED_SHAPES}`);

  // Three take en and exactly one takes au, which is the whole of act 2.
  const withEn = THE_FOUR.filter((s) => SEASON_FRAME[s].startsWith('en '));
  const withAu = THE_FOUR.filter((s) => SEASON_FRAME[s].startsWith('au '));
  if (withEn.length !== 3 || withAu.length !== 1 || withAu[0] !== 'printemps') {
    die(`the season frames are wrong: ${withEn.length} take en and ${withAu.length} take au (${withAu.join(', ')})`);
  }
  // And the corpus rows really say what the map says, so the exception cannot be
  // right in this file and wrong on the card.
  for (let i = 0; i < THE_FOUR.length; i++) {
    const want = SEASON_FRAME[THE_FOUR[i]];
    if (frOf(SEASON_IDS[i]) !== want) {
      die(`SEASON_IDS[${i}] is ${SEASON_IDS[i]} "${frOf(SEASON_IDS[i])}", and SEASON_FRAME says "${want}"`);
    }
  }

  // Every season is TAUGHT BY NAME on a screen, asserted individually rather
  // than as a count of four, which is what the brief asks for.
  const learnerText = learnerFacing.join('\n');
  const untaught = THE_FOUR.filter((s) => !hasWord(learnerText.toLowerCase(), s));
  if (untaught.length) die(`season(s) never named on any screen: ${untaught.join(', ')}`);
  // And every one appears in a real SENTENCE, so no season is taught as a card
  // with nothing to do.
  const inSentences = new Set(
    [...NEW_ITEMS, ...REUSED].filter((i) => !('kind' in i) || i.kind === 'sentence').flatMap((i) => seasonsIn(i.fr)),
  );
  const noSentence = THE_FOUR.filter((s) => !inSentences.has(s));
  if (noSentence.length) die(`season(s) with no sentence in this lesson's corpus: ${noSentence.join(', ')}`);

  // ALL FOUR PREPOSITIONS TOGETHER on at least one section. The brief:
  // "Splitting them across screens is how the exception gets lost."
  const allFourTogether = LESSON.sections.filter((s) => {
    const text = strings(s).join('\n');
    return THE_FOUR.every((season) => text.includes(SEASON_FRAME[season]));
  });
  if (!allFourTogether.length) {
    die('no single section shows all four season frames together, so au printemps has nothing to be the exception to');
  }

  // THE THREE FRAMES, ONE ADJECTIVE, ONE SCREEN. The brief calls this "the
  // single most valuable screen in the lesson" and requires it be asserted.
  const threeOnOne = LESSON.sections.filter((s) => {
    const text = strings(s).join('\n');
    return text.includes('il fait chaud') && text.includes("j'ai chaud") && text.includes('le café est chaud');
  });
  if (!threeOnOne.length) {
    die('no single section carries il fait, an avoir form and an être form on the SAME adjective. That contrast is the lesson.');
  }

  // THE PERSONAL-IL COLLISION, both senses on one screen.
  const collisionOnOne = LESSON.sections.filter((s) => {
    const text = strings(s).join('\n');
    return text.includes('Il fait du vent') && text.includes('Il fait du yoga');
  });
  if (!collisionOnOne.length) {
    die('no single section carries a weather « il fait du » and a personal « il fait du » together');
  }

  // `il fait` IS NEVER CONJUGATED. faire is a2.12, and a learner here has être
  // and avoir and nothing else. Checked over every authored string, because a
  // conjugated form is wrong in a reading passage too.
  const leaked = FAIRE_FORMS.filter((f) => strings(LESSON).some((s) => hasWord(s.toLowerCase(), f)));
  if (leaked.length) {
    die(
      `the lesson conjugates faire: ${leaked.join(', ')}\n`
      + `  faire is taught in a2.12, a whole band away. Impersonal weather faire has exactly one form.`
    );
  }

  // Nothing that belongs to a neighbour is taught here. Checked over the
  // surfaces a learner PRODUCES from rather than every string, because context
  // in a reading passage is legitimate and a check over every string would fire
  // on it and then get deleted, which is how a real guard becomes a deleted one.
  const productionSurfaces = [
    ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
    ...strings(LESSON.drills ?? []),
    ...strings((LESSON.sections.find((s) => s.type === 'quiz') ?? {}) as unknown),
  ];
  const monthHit = MONTH_WORDS.filter((w) => productionSurfaces.some((s) => hasWord(s.toLowerCase(), w)));
  if (monthHit.length) die(`month name(s) taught here, which belong to a1.09: ${monthHit.join(', ')}`);
  const dayHit = DAY_WORDS.filter((w) => productionSurfaces.some((s) => hasWord(s.toLowerCase(), w)));
  if (dayHit.length) die(`day name(s) taught here, which belong to a1.08: ${dayHit.join(', ')}`);
  const clockHit = CLOCK_WORDS.filter((w) => productionSurfaces.some((s) => hasWord(s.toLowerCase(), w)));
  if (clockHit.length) die(`clock vocabulary taught here, which belongs to a1.12: ${clockHit.join(', ')}`);

  // Every season and weather word this lesson displays is LOWERCASE, so the
  // corpus itself models the rule. A card reading "Printemps" teaches the
  // English habit every time it is shown. Sentence-initial capitals are
  // legitimate and are allowed at index 0.
  const capitalised = [...NEW_ITEMS.map((i) => i.fr), ...Object.keys(RESPELL)].filter((fr) =>
    THE_FOUR.some((s) => fr.indexOf(s[0].toUpperCase() + s.slice(1)) > 0));
  if (capitalised.length) {
    die(`season name(s) capitalised mid-string:\n  ${capitalised.join('\n  ')}`);
  }

  // ── The exam ─────────────────────────────────────────────────────────────
  const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
  const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
  const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
  if (mcq * 2 > qs.length) die(`${mcq}/${qs.length} questions are mcq, over the half ceiling`);

  const noWhy = qs.filter((q) => !q.why);
  if (noWhy.length) die(`${noWhy.length} quiz question(s) carry no why:\n  ${noWhy.map((q) => q.q).join('\n  ')}`);
  const noRef = qs.filter((q) => !q.ref);
  if (noRef.length) die(`${noRef.length} quiz question(s) carry no ref:\n  ${noRef.map((q) => q.q).join('\n  ')}`);
  const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
  const badRef = qs.filter((q) => q.ref && !sectionIds.has(q.ref));
  if (badRef.length) die(`quiz ref(s) naming a section that does not exist: ${badRef.map((q) => q.ref).join(', ')}`);

  const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
  if (unacceptable.length) {
    die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
  }

  // NO listenChoose ROUND ON il pleut / il pleure. The brief: it is a real
  // minimal pair, and the corpus holds ONE « il pleure » sentence in Postgres
  // and none in the seed, so a question on it would be teaching from a single
  // unsupported line. Checked over the whole quiz rather than only over rounds.
  const pleure = qs.filter((q) => strings(q).some((s) => hasWord(s.toLowerCase(), 'pleure')));
  if (pleure.length) {
    die(
      `quiz question(s) built on « il pleure »: ${pleure.map((q) => q.q).join(' | ')}\n`
      + `  The corpus holds one such sentence in Postgres and none in the seed. One card is fine; a quiz is not.`
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
  if (teaching.length !== EXPECTED_TEACHING_DRILLS) {
    die(`expected ${EXPECTED_TEACHING_DRILLS} teaching drills, found ${teaching.length}`);
  }
  const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
  if (orphans.length) {
    die(
      `drill(s) no quiz round can fire: ${orphans.join(', ')}\n`
      + `  drillForRound stops at a round's FIRST target that resolves to a drill, so a drill named only in second\n`
      + `  place never runs. Reorder the round's \`targets\`, add a round for it, or drop the drill.`
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

  // Exactly one quiz section. lessonPager.logic.ts appends exactly one quiz
  // page, resolved with `sections.find(s => s.type === 'quiz')`, so a second is
  // unreachable questions. a1.01 shipped 12 that no learner ever saw.
  const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
  if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one, so the rest are unreachable.`);

  // Every sheetId names a sheet the lesson actually declares, and every sheet is
  // reachable from some section.
  const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
  const usedSheets = new Set(LESSON.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[]);
  const danglingSheet = [...usedSheets].filter((id) => !sheetIds.has(id));
  if (danglingSheet.length) die(`sheetId(s) naming a sheet that does not exist: ${danglingSheet.join(', ')}`);
  const unreachableSheet = [...sheetIds].filter((id) => !usedSheets.has(id));
  if (unreachableSheet.length) die(`sheet(s) no section points at: ${unreachableSheet.join(', ')}`);

  // No `autoplay` anywhere: declared in schema.ts, read by no component.
  if (JSON.stringify(LESSON).includes('"autoplay"')) {
    die('autoplay is authored somewhere. It is declared in schema.ts and read by no component. Use audioFirst.');
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
    const allRepairs = [...RESPELL_REPAIRS, ...DB_ONLY_REPAIRS];
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
      const repairing = allRepairs.some((r) => r.id === it.id);
      if (!repairing && (row.respell ?? undefined) !== (it.respell ?? undefined)) {
        importDrift.push(`${it.id}: respell differs ("${String(it.respell)}" vs "${String(row.respell)}")`);
      }
    }
    if (importDrift.length) {
      die(
        `the IMPORTED manifest has drifted from the database:\n  ${importDrift.join('\n  ')}\n`
        + `  Re-run scripts/_meteo_manifest.ts and paste the result into scripts/data/meteo-corpus.ts. The manifest is\n`
        + `  what the merge writes into seed.json, and a stale manifest puts the seed ahead of rows nobody reviewed.`
      );
    }

    // The ten respelling repairs, both lists. Refuse if the stored value is not
    // the broken one this batch expects: two people disagreeing about a
    // transcription is a decision rather than a merge.
    const repairIds = allRepairs.map((r) => r.id);
    const repairRows = await client.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where id = any($1)`,
      [repairIds]
    );
    const repairDrift: string[] = [];
    for (const r of allRepairs) {
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
    const alreadyRepaired = allRepairs.filter((r) =>
      repairRows.rows.find((x) => x.id === r.id)?.respell === r.to).length;
    // And every repaired value passes the shared checker, so a repair cannot
    // introduce the violation it exists to remove.
    const badRepair = allRepairs.filter((r) => hasPlainNasalFor(r.fr, r.to));
    if (badRepair.length) die(`repair(s) that still fail the nasal convention: ${badRepair.map((r) => `${r.fr} -> ${r.to}`).join(', ')}`);

    // The dictée, checked against the POST-BATCH corpus rather than only against
    // what this file writes: a shortened `fr` upstream would quietly move a
    // target between modes.
    const byId = new Map(NEW_ITEMS.map((i) => [i.id, i] as const));
    const dictRows = await client.query<{ id: string; fr: string; drills: string[] }>(
      `select id, fr, drills from content_items where id = any($1)`,
      [METEO_DICTATION_IDS]
    );
    const noDictTag: string[] = [];
    const modes: string[] = [];
    for (const id of METEO_DICTATION_IDS) {
      const it = byId.get(id) ?? dictRows.rows.find((r) => r.id === id);
      if (!it) die(`the dictée names ${id}, which is neither in this batch nor in the database`);
      const mode = dicteeMode(it.fr);
      const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
      modes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"${decoys.length ? ` decoys=${decoys.join('/')}` : ''}`);
      const d = byId.has(id) ? byId.get(id)!.drills : drillsOf((it as { drills: unknown }).drills);
      if (!d.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
    }
    if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);
    // All three frames must be spelled somewhere in the dictée, or the exercise
    // tests spelling rather than this lesson's own decision.
    const dictText = METEO_DICTATION_IDS
      .map((id) => (byId.get(id) ?? dictRows.rows.find((r) => r.id === id))!.fr.toLowerCase())
      .join('\n');
    const framesInDictee = [
      ['il fait', 'il fait'], ['avoir', ' a froid'], ['être', ' est froid'],
    ].filter(([, needle]) => !dictText.includes(needle)).map(([name]) => name);
    if (framesInDictee.length) {
      die(`the dictée never spells the ${framesInDictee.join(' and ')} frame, so it tests spelling rather than this lesson`);
    }

    // Spoken practice draws only from items carrying `voiceflash`. Checked
    // against POSTGRES rather than the seed: an item whose tag was stripped
    // upstream renders as a card the learner cannot be scored on.
    const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's21-speak');
    const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
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

    // ── The unit ────────────────────────────────────────────────────────────
    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = $1`,
      [UNIT_ID]
    );
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units, cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    if (unitBody.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unitBody.title}"`);
    if (unitBody.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: "${unitBody.sub}" (expected "${UNIT_SUB}")`);
    if (unitBody.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: "${unitBody.canDo}"`);

    // The eyebrow the Den draws is computed from the unit's seq, and `tag` is
    // the one place it is authored by hand. a1.03 shipped LEÇON 03 at seq 5 and
    // the header above it drew LEÇON 05.
    const expectedTag = `A1 · LEÇON ${String(unitBody.seq).padStart(2, '0')}`;
    if (LESSON.tag !== expectedTag) {
      die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unitBody.seq}, so the header will draw "${expectedTag}"`);
    }

    // The prereq is REPORTED, not changed. a1.10 is the only unit in this
    // cluster with none at all.
    const prereq = (unitBody.prereqUnitIds ?? []);
    const prereqLessons: string[] = [];
    const recCheck = await client.query<{ id: string; lessons: string[] }>(
      `select body->>'id' id, coalesce(body->'lessonIds','[]'::jsonb) lessons
         from content_units where kind = 'curriculum_unit' and body->>'id' = any($1)`,
      [PREREQ_RECOMMENDATION]
    );
    for (const row of recCheck.rows) {
      const n = Array.isArray(row.lessons) ? row.lessons.length : 0;
      prereqLessons.push(`${row.id} (${n} lesson${n === 1 ? '' : 's'})`);
    }
    const recMissing = PREREQ_RECOMMENDATION.filter((id) => !recCheck.rows.some((r) => r.id === id));
    if (recMissing.length) {
      console.warn(`\n⚠  recommended prereq unit(s) do not exist: ${recMissing.join(', ')}. The recommendation is stale.\n`);
    }

    // The binding this batch is here to fix. Refuse if somebody has already
    // changed it to something else: two people disagreeing about a theme is a
    // decision, not a merge.
    const themesNow = (unitBody as Unit & { themes?: string[] }).themes;
    if (themesNow !== undefined
      && themesNow.join() !== UNIT_THEMES_BEFORE.join()
      && themesNow.join() !== UNIT_THEMES_AFTER.join()) {
      die(
        `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, which is not the binding this batch expects `
        + `(${JSON.stringify(UNIT_THEMES_BEFORE)}). Somebody has changed it; look before overwriting.`
      );
    }
    // The theme being dropped really does hold nothing, so this is a repair
    // rather than the deletion of something somebody was using.
    const deadRow = await client.query<{ n: string }>(`select count(*)::text n from content_items where theme = $1`, [DEAD_THEME]);
    const deadCount = Number(deadRow.rows[0]?.n ?? 0);
    if (deadCount > 0) {
      die(`theme "${DEAD_THEME}" now holds ${deadCount} items, so dropping this binding would remove a real chip. Revisit the decision.`);
    }
    // And the theme being kept really does hold the vocabulary it promises.
    const boundCount = await client.query<{ n: string }>(
      `select count(*)::text n from content_items where theme = $1 and status = 'published'`,
      [UNIT_THEMES_AFTER[0]]
    );
    const nBound = Number(boundCount.rows[0]?.n ?? 0);
    if (nBound < 100) {
      die(`theme "${UNIT_THEMES_AFTER[0]}" holds only ${nBound} published items, which is not the theme this batch measured.`);
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
    if (JSON.stringify(nextUnit.prereqUnitIds ?? null) !== JSON.stringify(unitBody.prereqUnitIds ?? null)) {
      die('this batch would change prereqUnitIds. That is reported, not applied.');
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
      sourceFile: 'meteo-lesson.ts', dryRun: DRY_RUN, die,
    });

    const formats = qs.reduce<Record<string, number>>((a, q) => {
      const f = q.format ?? 'mcq';
      a[f] = (a[f] ?? 0) + 1;
      return a;
    }, {});

    console.log(`\n  authored items: ${AUTHORED.length}. THIS LESSON AUTHORS NOTHING.`);
    console.log(`    Every word it needs was already published, including « Quel temps fait-il ? », which the brief`);
    console.log(`    says returns zero in Postgres and the seed. It exists at fr.a1.meteo.183, fr.a1.rp-meteo-nature.001,`);
    console.log(`    fr.sons.questions.057 and fr.a1.meteo.213, and authoring it would have collided inside "meteo".`);
    console.log(`  imported items: ${IMPORTS.length} from ${new Set(IMPORTS.map((i) => i.theme)).size} theme(s), verified field by field against this database`);
    for (const theme of [...new Set(IMPORTS.map((i) => i.theme))]) {
      console.log(`    ${theme}: ${IMPORTS.filter((i) => i.theme === theme).length}`);
    }
    console.log(`  reused items: ${reused.length} named by the lesson, ${REUSED.length} documented and verified against this database`);
    console.log(`  withdrawn on purpose: ${WITHDRAWN_IDS.length} gendered single-word nouns kept OUT (every weather noun and all four articled season names)`);
    console.log(`    measured: importing them moves a1.03's -age, -té, -ie, -e, -on, -ps and -er figures. Four of those are printed percentages.`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}", ${prior !== undefined ? `updating v${prior} → v${LESSON.version}` : 'NEW'}, `
      + `${LESSON.sections.length} sections, ${LESSON.itemIds.length} itemIds`
    );
    console.log(`  acts: ${LESSON.acts?.length} | drills: ${LESSON.drills?.length} | sheets: ${LESSON.sheets?.length} | triggers: ${LESSON.errorTriggers?.length} | terms: ${Object.keys(LESSON.terms ?? {}).length}`);
    console.log(`  the four seasons: ${THE_FOUR.map((s) => SEASON_FRAME[s]).join(', ')}`);
    console.log(`    three take en, one takes au, all four shown together on ${allFourTogether.map((s) => (s as { id?: string }).id).join(' and ')}`);
    console.log(`  the three frames on ONE adjective, one screen: ${threeOnOne.map((s) => (s as { id?: string }).id).join(', ')}`);
    console.log(`  the personal-il collision, both senses together: ${collisionOnOne.map((s) => (s as { id?: string }).id).join(', ')}`);
    console.log(`  faire is NEVER conjugated: no je fais / tu fais / nous faisons / vous faites / ils font anywhere ✓`);
    console.log(`  no month (a1.09), no day (a1.08), no clock (a1.12) on any production surface ✓`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round((formats.mcq ?? 0) / qs.length * 100)}% (ceiling 50) | errorSpot ${Math.round((formats.errorSpot ?? 0) / qs.length * 100)}% | listenChoose ${Math.round((formats.listenChoose ?? 0) / qs.length * 100)}%`);
    console.log(`  listenChoose is on il fait / il a / il est, never on il pleut / il pleure ✓`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${fired.size}/${teaching.length}, each the FIRST resolving target of exactly one round`);
    console.log(`  round leads: ${leads.join(', ')}`);
    console.log(`  dictation: ${METEO_DICTATION_IDS.length} lines, all three frames spelled`);
    for (const m of modes) console.log(`    ${m}`);
    console.log(`  speak: ${speakIds.length} lines, all carrying voiceflash`);
    console.log(`    il pleut is NOT among them: fr.a1.meteo.006 carries flashcard only, and the only voiceflash "il pleut" is B1.`);
    console.log(`    It is produced by the r5 speak question instead, whose target is a display string.`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  respellings authored for this lesson: ${Object.keys(RESPELL).length}, all passing the nasal convention`);
    console.log(`    superscript asserted by name on: ${NASAL_WORDS.join(', ')}`);
    console.log(`    superscript REFUSED by name on: ${NOT_NASAL_WORDS.join(', ')} (automne has no nasal vowel; the m is silent and the n is real)`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  no neighbour's content ✓  a1.03 population untouched ✓`);

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(priorThemes ?? null)} → ${JSON.stringify(UNIT_THEMES_AFTER)}`);
    console.log(`      "temps" holds ${deadCount} items and always has; the chip has always led nowhere.`);
    console.log(`      "meteo" holds ${nBound} published rows and is this lesson's own theme.`);
    console.log(`      CLUSTER DECISION HONOURED: a1.09's merge note says "a1.10 should keep meteo and drop the dead temps". Done.`);
    console.log(`      SEASONS: taught from BOTH themes, which is the brief's option 1. The four prepositional forms are`);
    console.log(`      corpus rows in "jours-et-mois" (.120-.123) and the four articled nouns are DISPLAY STRINGS, because`);
    console.log(`      importing them moves a1.03's figures. The four rows that survive carry the preposition, which is the point.`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(prereq)} (UNCHANGED, REPORTED ONLY)`);
    console.log(`      RECOMMENDED: ${JSON.stringify(PREREQ_RECOMMENDATION)} → ${prereqLessons.join(', ') || 'none resolve'}`);
    console.log(`        a1.29  du / de la / de l'   load-bearing: "il fait du vent", "il y a du soleil"`);
    console.log(`        a1.07  avoir                load-bearing: "j'ai chaud" against "il fait chaud"`);
    console.log(`        a1.06  être                 load-bearing: "le café est chaud"`);
    console.log(`      DEFENSIBLE MINIMUM: ${JSON.stringify(PREREQ_MINIMUM)}, because the partitive is the one thing a learner cannot fake.`);
    console.log(`      a1.02 and a1.27 (numbers, for "il fait moins cinq degrés") are supporting rather than load-bearing.`);

    console.log(`\n  RESPELLING REPAIRS (not silent). ${RESPELL_REPAIRS.length} land in the seed, ${DB_ONLY_REPAIRS.length} are Postgres only:`);
    for (const r of RESPELL_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      console.log(`    [seed too] ${r.id}  ${r.fr}: "${now}" → "${r.to}"`);
      console.log(`      ${r.why}`);
    }
    for (const r of DB_ONLY_REPAIRS) {
      const now = repairRows.rows.find((x) => x.id === r.id)?.respell;
      console.log(`    [db only]  ${r.id}  ${r.fr}: "${now}" → "${r.to}"`);
      console.log(`      ${r.why}`);
    }
    console.log(`    (the db-only six are on WITHDRAWN rows or another theme's row, so no merge can reach them.)`);
    if (alreadyRepaired) console.log(`    (${alreadyRepaired} of ${allRepairs.length} already carry the corrected value; re-upserting is a no-op)`);

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
    for (const r of allRepairs) {
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
      `\n✓ meteo batch applied: ${NEW_ITEMS.length} items (0 authored, ${IMPORTS.length} imported)`
      + ` + ${allRepairs.length} respelling repairs + lesson ${LESSON.id} published,`
      + `\n  unit ${UNIT_ID} linked and rebound from ["temps","meteo"] to ["meteo"].`
      + `\n  Next: pnpm tsx scripts/merge-meteo-into-seed.ts --dry-run`
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
