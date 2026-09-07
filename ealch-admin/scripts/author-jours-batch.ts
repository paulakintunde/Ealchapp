// Content Batch , Les jours de la semaine: the a1.08.l1 full-rig lesson.
//
// a1.08 ships today with lessonIds: [] and a theme binding that points at two
// themes that hold nothing. This batch authors the lesson, the 16 corpus
// entries it could not build without, the 69 rows it imports from three themes
// outside the seed cut, and four respelling repairs, as the twelfth A1 lesson
// on Lesson Architecture v2.
//
// The content and the corpus live in scripts/data/ (jours-lesson, -corpus and
// -terms) rather than inline here, because all three are large and all three are
// checked by the app's own test suite at authoring time:
//
//   ealch-v2/src/content/a1-08-jours.test.ts
//
// That test is the real gate. It runs in CI on every push, imports these files
// directly, and asserts the whole self-check list. This script re-runs the
// shared validators before it writes so a broken batch dies before it touches
// the database, but the durable check is the test.
//
// ── THE UNIT EDIT, WHICH IS NOT SILENT ─────────────────────────────────────
//
// a1.08 declares `themes: ["temps","calendrier"]`. Neither exists: 144 themes
// are published and neither is one of them, and both resolve to 0 items in both
// copies. The Den renders a unit's theme chips as entry points into a themed
// deck, so both chips have always led nowhere.
//
// This batch REBINDS the unit to `["jours-et-mois"]` rather than clearing it,
// and prints the change as its own line. a1.06 and a1.07 both cleared their dead
// bindings and were right to: they are grammar units drawing from a dozen themes
// and creating one would have meant authoring items from nothing. This unit is
// the opposite case. `jours-et-mois` already exists with 370 published rows, it
// already holds all seven days AND all twelve months as headwords, and it is
// therefore the one theme that is correct for a1.08 and for a1.09 at once. The
// brief asks for a decision made "for both"; this is it, and it needed no theme
// created and no SEED_CUT edit.
//
// `title`, `sub` and `canDo` are what the Den advertises before a learner opens
// anything and none of them is touched.
//
// ── THE RESPELLING REPAIRS, WHICH ARE ALSO NOT SILENT ──────────────────────
//
// Four rows in this lesson's own theme carry a respelling that fails the house
// convention, and the corpus contradicts itself on two of them (consonnes has
// dimanche and vendredi right, jours-et-mois has them wrong). They are the seven
// cards this lesson is built on. `respell` is display-only, so the repair cannot
// break a drill, a score or an id, and the batch refuses if the stored value is
// no longer the broken one it expects.
//
// Same contract as author-avoir-batch.ts: everything validates BEFORE the
// database is touched, then the whole set upserts inside ONE transaction.
// Idempotent by id.
//
// Usage (from ealch-admin/):
//   pnpm content:jours --dry-run   validate + report only
//   pnpm content:jours             apply, one transaction
//   then: pnpm tsx scripts/merge-jours-into-seed.ts
//   NOT: pnpm audio:render. It spends real ElevenLabs credits and
//        ELEVENLABS_VOICE_AMELIE is not set in ealch-admin/.env in any case.
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
import { guardLessonVersion } from './version-guard.logic.ts';
import {
  CHUNK_IDS, CONTRAST_PAIRS, DAY_IDS, IMPORTED, JOURS, MONTH_IDS, RESPELL, RESPELL_REPAIRS,
  REUSED, THE_SEVEN, toItem,
} from './data/jours-corpus.ts';
import {
  JOURS_DICTATION_IDS, JOURS_LESSON, REFRAME,
} from './data/jours-lesson.ts';

const AUTHORED: Item[] = JOURS.map(toItem);
const IMPORTS: Item[] = IMPORTED;
/** Everything this batch writes to content_items: what it authors, plus the
 *  imported rows re-upserted at their recorded values. Re-upserting a row that
 *  is already published is a no-op against a database that has not changed and a
 *  repair against one that has, which is what makes the manifest in
 *  jours-corpus.ts a source of truth rather than a cached read. */
const NEW_ITEMS: Item[] = [...AUTHORED, ...IMPORTS];
const LESSON: Lesson = JOURS_LESSON;
const UNIT_ID = 'a1.08';

/** How many verbatim appearances of the reframe this lesson is authored with.
 *
 *  An EXPLICIT constant, not a figure derived from the lesson. A derived count
 *  compares the content to itself and passes on any rewording, which is exactly
 *  the regression this guard exists to catch. TEN sections carry it plus the
 *  `reframe` field itself and two quiz `why` lines, which `strings()` also
 *  walks. The density validator requires three; a1.01 carries eight and the sons
 *  lessons run five to seven. */
const REFRAME_APPEARANCES = 13;

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

/** Seven days and seven authored minimal pairs, one per day, plus the scene's
 *  own pair. Stated explicitly so an edit that quietly drops a day's pair fails
 *  here rather than shipping a lesson that teaches six days on both sides of its
 *  rule and one on only one side. */
const EXPECTED_DAYS = 7;
const EXPECTED_PAIRS = 8;

/** This unit's themes binding is REBOUND, not cleared. It was
 *  ["temps","calendrier"], both of which resolve to zero items in both copies. */
const UNIT_THEMES_BEFORE = ['temps', 'calendrier'];
const UNIT_THEMES_AFTER = ['jours-et-mois'];

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
  // flashcard hub keys decks on `fr` with the article STRIPPED, so `lundi` and
  // `le lundi` are ONE key inside a theme and a duplicate serves the same card
  // twice, taking two SRS ratings for one word. This is the check that stopped
  // this lesson authoring seven day headwords the brief said were missing:
  // fr.sons.jours-et-mois.001-007 already hold them in this very theme.
  // Sentences are exempt, as in flashhub-coverage.test.ts.
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
  // THE REAL FUNCTION, not a copy of it. v2 of this lesson shipped a hand-rolled
  // version of this check carrying a `level === 'a1'` filter, copied from
  // author-avoir-batch.ts. `endingPopulation` has NO level filter, so the guard
  // passed and four level-'sons' rows went in and moved two of a1.03's cards
  // (-ier from 55 to 56, -ine from 28 to 29). avoir's copy had the same bug and
  // got away with it because its gendered imports were all two-word phrases.
  //
  // A guard that reimplements the thing it guards is free to drift from it,
  // which is the same mistake as a test reimplementing app logic. The four rows
  // are withdrawn (see WITHDRAWN_IDS in jours-corpus.ts) and the check now asks
  // the module the app itself runs.
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
  const density = validateDensity(LESSON, new Set([...ids, ...LESSON.itemIds]));
  if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

  // House-style guards, the same rules the per-lesson tests enforce.
  const authoredJson = JSON.stringify({ AUTHORED, LESSON });
  if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
  // U+203F renders as a low underscore on a Pixel 6 and shipped that way in
  // sons.10. Two imported rows carry it in their stored IPA (fr.a1.ecole.226
  // and the two nous/vous liaison rows), which is why this is checked over the
  // AUTHORED half and the LESSON rather than over the imports: those are
  // somebody else's shipped rows and this lesson does not display their IPA.
  if (authoredJson.includes('‿')) die('U+203F tie character, which renders as an underscore on a device');

  // No grammar vocabulary in learner copy. a1.11 and a1.29 banned « article
  // défini » and « partitif » and asserted it; this lesson inherits that and
  // adds the words a learner arriving from a1.04 has never been given. Scoped to
  // sections, sheets and terms, which is everything a learner reads:
  // `grammarIntroduced` is addressed to the curriculum and is better for using
  // the precise words, and the IMPORTED rows' own `notes` are somebody else's
  // shipped copy.
  const learnerFacing = [
    ...strings(LESSON.sections),
    ...strings(LESSON.sheets ?? []),
    ...strings(LESSON.terms ?? {}),
  ];
  const jargon = learnerFacing.filter((s) =>
    /\b(conjugaison|article (défini|indéfini|partitif)|adverbe de fréquence|complément circonstanciel|masculin|féminin|déterminant)\b/i.test(s));
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
  // or m to end a token, and dimanche's has SH behind it. So `dee-MAHNSH`
  // passes the shared checker and is still wrong. Checked explicitly here, over
  // the three day names that carry a nasal, because the brief's claim that
  // "lundi and dimanche are the words this catches" is true of lundi only.
  const NASAL_DAYS = ['lundi', 'vendredi', 'dimanche'];
  const missingSuperscript = NASAL_DAYS.filter((d) => !RESPELL[d]?.respell.includes('ⁿ'));
  if (missingSuperscript.length) {
    die(
      `day respelling(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}\n`
      + `  hasPlainNasalFor does not catch a word-internal nasal, so this is checked by name.`
    );
  }

  // The seven, and the pairs that are the shape of the lesson.
  if (THE_SEVEN.length !== EXPECTED_DAYS) die(`THE_SEVEN holds ${THE_SEVEN.length} days, expected ${EXPECTED_DAYS}`);
  if (DAY_IDS.length !== EXPECTED_DAYS) die(`${DAY_IDS.length} day headwords resolve, expected ${EXPECTED_DAYS}`);
  if (CONTRAST_PAIRS.length !== EXPECTED_PAIRS) {
    die(`${CONTRAST_PAIRS.length} contrast pairs authored, expected ${EXPECTED_PAIRS}`);
  }
  // Every pair is reciprocal. A half-deleted pair teaches the opposite of what
  // it was written for: one sentence with an article and nothing beside it reads
  // as the only way to say it.
  const byId = new Map(NEW_ITEMS.map((i) => [i.id, i] as const));
  const oneSided = CONTRAST_PAIRS.filter(([h, s]) => {
    const hs = JOURS.find((w) => w.id === h);
    const ss = JOURS.find((w) => w.id === s);
    return !hs || !ss || hs.pairWith !== s || ss.pairWith !== h;
  });
  if (oneSided.length) die(`pair(s) that are not reciprocal: ${oneSided.map((p) => p.join(' / ')).join(', ')}`);
  // And every pair really does differ by the article and nothing else, which is
  // the entire claim the mission makes about them.
  //
  // Compared as WORD SEQUENCES with terminal punctuation dropped, because the
  // claim is about the words. The scene pair is « On se voit le samedi. »
  // against « On se voit samedi ? », which is a statement against a question and
  // is exactly right for the scene: she ASKS about one Saturday and the habit is
  // a statement about a week. The full stop and the question mark are not a
  // second teaching difference, and a check that counted them would have forced
  // the scene to open on a sentence nobody would text.
  const words = (fr: string) => fr.replace(/\s*[.?!]\s*$/u, '').trim();
  const notMinimal = CONTRAST_PAIRS.filter(([h, s]) => {
    const hf = words(byId.get(h)?.fr ?? '');
    const sf = words(byId.get(s)?.fr ?? '');
    return hf.replace(/\ble (?=lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)/, '') !== sf;
  });
  if (notMinimal.length) {
    die(
      `pair(s) that differ by more than the article:\n  `
      + notMinimal.map(([h, s]) => `"${byId.get(h)?.fr}" vs "${byId.get(s)?.fr}"`).join('\n  ') + `\n`
      + `  The whole teaching is that ONE word moved. A pair with a second difference hides it.`
    );
  }
  // Every day appears on BOTH sides of the rule, so no day is taught only as a
  // habit or only as a plan.
  const missingSide = THE_SEVEN.filter((d) => {
    const hasHab = JOURS.some((w) => w.day === d && w.side === 'habitual' && !w.chunk);
    const hasSpec = JOURS.some((w) => w.day === d && w.side === 'specific' && !w.chunk);
    return !hasHab || !hasSpec;
  });
  if (missingSide.length) die(`day(s) taught on only one side of the rule: ${missingSide.join(', ')}`);

  // Every authored day is LOWERCASE, so the corpus itself models the rule. An
  // item whose `fr` is "Lundi" teaches the English habit every time it is shown.
  // Sentence-initial capitals are legitimate and are checked mid-sentence only.
  const capitalised = NEW_ITEMS.filter((i) =>
    THE_SEVEN.some((d) => i.fr.indexOf(d[0].toUpperCase() + d.slice(1)) > 0));
  if (capitalised.length) {
    die(`item(s) capitalise a day mid-sentence:\n  ${capitalised.map((i) => `${i.id} "${i.fr}"`).join('\n  ')}`);
  }

  // No month is taught. `jours-et-mois` holds all twelve one tap away and a1.09
  // declares this unit as its prerequisite, so a lesson that taught them by
  // accident would leave the next one with nothing to introduce.
  const named = new Set(strings(LESSON).filter((s) => /^fr\./.test(s)));
  const months = MONTH_IDS.filter((id) => named.has(id));
  if (months.length) die(`the lesson names a month headword, which belongs to a1.09: ${months.join(', ')}`);

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

  // No free-text question may claim to test a CAPITAL LETTER. `fold()`
  // lowercases, so typeIn and errorSpot both compare "Lundi" equal to "lundi"
  // and would mark the error correct. The brief recommends errorSpot for this
  // and is wrong: errorSpot runs the same matchesAccept path. Only mcq can test
  // it, because its options are picked rather than typed.
  const foldBlind = qs.filter((q) => {
    const open = q.format === 'typeIn' || q.format === 'errorSpot';
    if (!open) return false;
    const all = [q.answer ?? '', ...(q.accept ?? [])];
    // A question whose accepted answers differ from each other ONLY by case is
    // asking for something fold() cannot see.
    return all.some((a) => THE_SEVEN.some((d) => a.includes(d[0].toUpperCase() + d.slice(1))));
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
  const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's18-speak');
  const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
  const producedChunks = [
    ...speakIds.filter((id) => CHUNK_IDS.includes(id)),
    ...JOURS_DICTATION_IDS.filter((id) => CHUNK_IDS.includes(id)),
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
        + `  Re-read the rows into scripts/data/jours-corpus.ts. The manifest is what the merge writes into\n`
        + `  seed.json, and a stale manifest puts the seed ahead of the database on rows nobody reviewed.`
      );
    }

    // The four respelling repairs. Refuse if the stored value is not the broken
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
    // what this file authors: one of the five is a row the batch imports, and a
    // shortened `fr` upstream would quietly move it between modes.
    const dictRows = await client.query<{ id: string; fr: string; drills: string[] }>(
      `select id, fr, drills from content_items where id = any($1)`,
      [JOURS_DICTATION_IDS]
    );
    const noDictTag: string[] = [];
    const modes: string[] = [];
    for (const id of JOURS_DICTATION_IDS) {
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
    // to reject. That is the whole reason this lesson chose word mode where
    // a1.07 chose letters, and if a target is reworded past the length
    // threshold the exercise silently stops asking its question.
    const leDecoy = JOURS_DICTATION_IDS.filter((id) => {
      const it = byId.get(id) ?? dictRows.rows.find((r) => r.id === id);
      return it && dicteeMode(it.fr) === 'words' && wordDecoys(it.fr).includes('le');
    });
    if (!leDecoy.length) {
      die(
        `no dictée target offers "le" as a decoy.\n`
        + `  Word mode is the whole reason this lesson's dictée exists: the bank hands the learner a le tile they\n`
        + `  must decide NOT to place. A bare-day target over 16 letters is what produces it.`
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
    if (unitRow.rowCount !== 1) die(`unit "${UNIT_ID}" not found in content_units , cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;

    // title, sub and canDo are what the Den advertises before a learner opens
    // anything, and authoring the lesson is not a licence to rewrite the promise
    // it was built against.
    if (unitBody.title !== 'Days of the Week') die(`unit ${UNIT_ID} title has changed: "${unitBody.title}"`);
    if (unitBody.sub !== 'Les jours de la semaine') die(`unit ${UNIT_ID} sub has changed: "${unitBody.sub}"`);
    if (unitBody.canDo !== 'Can name the days and say what they do on a given day') {
      die(`unit ${UNIT_ID} canDo has changed: "${unitBody.canDo}"`);
    }
    // The eyebrow the Den draws is computed from the unit's seq, and `tag` is
    // the one place it is authored by hand. a1.03 shipped LEÇON 03 at seq 5 and
    // the header above it drew LEÇON 05.
    const expectedTag = `A1 · LEÇON ${String(unitBody.seq).padStart(2, '0')}`;
    if (LESSON.tag !== expectedTag) {
      die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unitBody.seq}, so the header will draw "${expectedTag}"`);
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
    // including the months a1.09 will inherit. A chip pointing at an empty theme
    // is the failure this whole edit exists to remove; pointing it somewhere
    // else empty would just move it.
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
      sourceFile: 'jours-lesson.ts', dryRun: DRY_RUN, die,
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
    console.log(`  the seven: ${THE_SEVEN.join(', ')}`);
    console.log(`  contrast pairs: ${CONTRAST_PAIRS.length}, every one reciprocal and differing by the article alone`);
    console.log(`  every day taught on both sides of the rule: yes`);
    console.log(`  quiz: ${qs.length} questions in ${rounds.length} rounds`);
    console.log(`  quiz formats: ${Object.entries(formats).map(([k, v]) => `${k} ${v}`).join(', ')}`);
    console.log(`  mcq share: ${Math.round((formats.mcq ?? 0) / qs.length * 100)}% (ceiling 50) | errorSpot share: ${Math.round((formats.errorSpot ?? 0) / qs.length * 100)}%`);
    console.log(`  every question has a why: ${qs.every((q) => q.why) ? 'yes' : 'NO'} and a ref: ${qs.every((q) => q.ref) ? 'yes' : 'NO'}`);
    console.log(`  the capital letter is tested by mcq, because fold() lowercases and no free-text format can see it`);
    console.log(`  SRS tranches: ${LESSON.deckTranche?.map((t) => t.length).join(' + ')} = ${LESSON.deckTranche?.flat().length} cards across ${LESSON.acts?.length} acts`);
    console.log(`  drills fired by a round: ${fired.size}/${teaching.length}, each the FIRST resolving target of exactly one round`);
    console.log(`  round leads: ${leads.join(', ')}`);
    console.log(`  dictation: ${JOURS_DICTATION_IDS.length} lines, both modes deliberately`);
    for (const m of modes) console.log(`    ${m}`);
    console.log(`  speak: ${speakIds.length} lines, all carrying voiceflash, ${CHUNK_IDS.length} chunk row(s) excluded`);
    console.log(`  recordings requested: ${LESSON.audio?.recorded?.length} (all fall back to TTS until delivered)`);
    console.log(`  respellings authored for this lesson: ${Object.keys(RESPELL).length}, all passing the nasal convention`);
    console.log(`  reframe: "${REFRAME}" x${hits}`);
    console.log(`  validators: schema ✓  density ✓  house style ✓  no grammar jargon ✓  no month taught ✓  no chunk produced ✓`);

    console.log(`\n  UNIT EDIT (not silent):`);
    console.log(`    ${UNIT_ID} themes:    ${JSON.stringify(priorThemes ?? null)} → ${JSON.stringify(UNIT_THEMES_AFTER)}`);
    console.log(`      "temps" holds ${deadCounts.temps} items and "calendrier" holds ${deadCounts.calendrier}; both chips have always led nowhere.`);
    console.log(`      "jours-et-mois" holds ${nBound} published rows including all seven days and ${nMonths} of the twelve months,`);
    console.log(`      so a1.09 (Months of the Year, prereq a1.08) inherits the same binding with nothing left to create.`);
    console.log(`    ${UNIT_ID} lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
    console.log(`    ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unitBody.prereqUnitIds ?? [])} (UNCHANGED, and reported: a1.04 is the unit this lesson's rule comes from and is not named)`);

    console.log(`\n  RESPELLING REPAIRS (not silent), display-only, in this lesson's own theme:`);
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
      `\n✓ jours batch applied: ${NEW_ITEMS.length} items (${AUTHORED.length} authored, ${IMPORTS.length} imported)`
      + ` + ${RESPELL_REPAIRS.length} respelling repairs + lesson ${LESSON.id} published,`
      + `\n  unit ${UNIT_ID} linked and rebound from ["temps","calendrier"] to ["jours-et-mois"].`
      + `\n  Next: pnpm tsx scripts/merge-jours-into-seed.ts --dry-run`
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
