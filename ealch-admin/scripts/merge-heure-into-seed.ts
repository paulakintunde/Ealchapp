// Merge the authored a1.12 content into the committed seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-heure-batch.ts writes to POSTGRES, which is the source of truth, and
// `pnpm content:publish` then regenerates seed.json from it. That is the correct
// pipeline and this script does not replace it.
//
// But the app READS seed.json , src/services/content.ts imports it directly ,
// and so do the tests. lesson-contract.test.ts is the gate that checks every
// lesson in the seed, and a1-12-heure.test.ts self-skips its seed-parity
// assertions when the lesson is absent. Until the seed carries this lesson it is
// invisible both to a learner and to the gate.
//
//   author-heure-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-heure-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// ── The 60 rows this merge copies in ───────────────────────────────────────
//
// 72 of the 81 items this lesson names live in `heure-et-date`,
// `temps-et-frequence`, `jours-et-mois`, `questions` and `expressions-utiles`.
// All are PUBLISHED in Postgres. `heure-et-date` and `temps-et-frequence` are
// not in SEED_CUT.themes at all, so they hold 0 rows in seed.json against 455
// and 310 in the database, and the clock block inside `jours-et-mois` was not
// part of the 119-row slice a1.08 pulled in.
//
// That gap is the whole reason the brief for this lesson reported that the
// telling half had to be authored from nothing and that « moins le quart »
// appeared nowhere. Both are there; they were simply not in the copy the brief
// was measured against. See the header of heure-corpus.ts.
//
// publish-content.ts pulls in every item a bundled lesson references, so those
// ids would arrive at the next publish. A publish is not available (see the
// hazard below), and lesson-contract.test.ts resolves `itemIds` against the
// seed, so without this the lesson lands with 60 dangling ids that render as
// empty cards.
//
// ── What this merge does that the others did not ───────────────────────────
//
// Three things, and each is called out on its own line in the report:
//
//   It REBINDS the unit to a theme the brief never considered. a1.06 and a1.07
//   cleared dead bindings; a1.08 rebound to a theme it had to go looking for;
//   this one rebinds to `heure-et-date`, which is a purpose-built clock deck.
//
//   It writes two RESPELLING REPAIRS onto rows the sons track also uses.
//   Display-only, and refused if the stored value is not the broken one this
//   merge expects.
//
//   It introduces two entire themes to the seed that have never been in it,
//   and pulls in a slice of a third. Only the clock half of `heure-et-date` is
//   taken: it is a clock AND calendar theme, and a month or a day arriving in
//   the seed under this lesson's name would give a1.09 and a1.08 vocabulary
//   they already own and put cards in the flashcard hub that no lesson teaches.
//
// ── The hazard this script is careful about (incident 2026-07-31) ──────────
//
// Writing seed.json directly makes git run AHEAD of Postgres. publish-content
// reads Postgres as the source of truth and rewrites seed.json from it, so a
// publish that happens BEFORE the batch has been applied silently deletes this
// lesson from the seed. That is not hypothetical: it is what happened to
// sons.03.l1 and to five lessons' `overview`, and sons.07.l1 survived the same
// thing only because its source files were intact.
//
// Order: apply to Postgres first, merge into the seed second, publish only when
// both agree.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-heure-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-heure-into-seed.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  formatIssues, quizQuestions, validateItem, validateLesson, validateUnit,
  type Item, type Lesson, type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode, wordDecoys } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  AUTHORED as AUTHORED_ROWS, CHUNK_IDS, CLOCK_PAIRS, DAYS, HOUR_IDS, IMPORTED, MONTHS,
  QUARTER_PHRASES, QUARTER_WITH_ARTICLE, REFLEXIVE, RESPELL, RESPELL_REPAIRS, REUSED, SEASONS,
  THE_TWELVE, toItem,
} from './data/heure-corpus.ts';
import { HEURE_DICTATION_IDS, HEURE_LESSON, REFRAME } from './data/heure-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

/** As in the batch: EXPLICIT constants, never figures derived from the lesson,
 *  because a derived count compares the content to itself and passes on any
 *  rewording. */
const REFRAME_APPEARANCES = 11;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_HOURS = 12;
const EXPECTED_PAIRS = 4;

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

type Seed = {
  items: Item[];
  lessons: Lesson[];
  units: Unit[];
  [k: string]: unknown;
};

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const AUTHORED = AUTHORED_ROWS.map(toItem);
const IMPORTS = IMPORTED;
const NEW_ITEMS = [...AUTHORED, ...IMPORTS];
const LESSON = HEURE_LESSON;
const UNIT_ID = 'a1.12';
const UNIT_THEMES_BEFORE = ['temps'];
const UNIT_THEMES_AFTER = ['heure-et-date'];

// ── Never shrink the seed (incident 2026-08-02) ────────────────────────────
//
// This script merges: it adds its own items and lesson and leaves everything
// else alone. So the item and lesson counts can only ever go UP, and a run that
// would reduce either means the file changed underneath it. A concurrent process
// added sons.07's items to seed.json between two runs of the accents merge, and
// the second run wrote back a state that no longer had them.
//
// Checked against what is on disk RIGHT NOW rather than against a remembered
// count, because the whole failure mode is acting on a stale read.
const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;

// The lessons this merge must not disturb, NAMED rather than counted. A count
// alone would let a swap through: drop one, gain another, same total. Twenty
// four lessons ship before this one lands and every one of them must survive.
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

// And the ones that matter most to THIS lesson, named explicitly rather than
// left to the generic list, so a failure says WHICH one and why rather than only
// that a count moved.
const NEIGHBOURS: Record<string, string> = {
  'a1.27.l1': 'the declared prerequisite. Numbers 21 to 100, which this lesson treats as owned and never re-teaches, and which the whole twenty-four hour act rests on.',
  'a1.02.l1': 'the numbers one to twenty, which is where eleven of this lesson\'s twelve hours come from.',
  'a1.06.l1': 'the verb être. « il est » is entirely inside it, which is why this lesson explains only the subject and not the verb.',
  'a1.07.l1': 'the verb avoir, which is what makes « Vous avez l\'heure ? » the transparent question rather than a second frozen chunk.',
  'a1.08.l1': 'Days of the Week, whose vocabulary sits one tap away in this lesson\'s own theme and which this lesson must not teach.',
  'a1.09.l1': 'Months of the Year, in the same position and for the same reason.',
  'a1.01.l1': 'the A1 reference implementation, and the lesson whose tone this one matches.',
};

// ── Validate before writing anything ────────────────────────────────────────

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in the corpus: ${[...new Set(dupeIds)].join(', ')}`);

// Two entries teaching the same WORD in one theme, computed the way
// flashhub-coverage.test.ts computes it: the article is stripped first, so
// `l'heure` and `heure` collide.
//
// Checked against the WHOLE POST-MERGE SEED rather than only against this batch,
// because the collision that matters is with something already there, and
// because this merge introduces two entire new themes. This is the check that
// confirmed the twelve hour headwords were genuinely free: `heure-et-date` holds
// only five non-sentence rows and all five are clock PARTS (la pendule, le
// cadran, l'aiguille des heures, le minuteur, la trotteuse).
const authoredIds = new Set(ids);
const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
{
  const byWord = new Map<string, string>();
  const collisions: string[] = [];
  const post = [...seed.items.filter((i) => !authoredIds.has(i.id)), ...NEW_ITEMS];
  for (const w of post) {
    if (w.kind === 'sentence') continue;
    if ((w.cardType ?? 'vocab') !== 'vocab') continue;
    const key = `${w.theme}::${headword(w.fr)}`;
    const prior = byWord.get(key);
    // Only report a collision this merge is responsible for. The seed has
    // pre-existing ones in themes this lesson does not touch, and failing on
    // those would make this script impossible to run.
    if (prior && (authoredIds.has(prior) || authoredIds.has(w.id))) {
      collisions.push(`${prior} vs ${w.id} ("${w.fr}")`);
    } else if (!prior) byWord.set(key, w.id);
  }
  if (collisions.length) die(`this batch duplicates a word already in its theme:\n  ${collisions.join('\n  ')}`);
}

// flashhub-coverage.test.ts runs over the WHOLE seed and fails the build if any
// a1/a2 vocab word or phrase lacks flashcard or voiceflash. This merge writes 60
// rows it did not author, so the check has to happen here rather than being
// assumed of somebody else's theme.
const SEPARATE_POOLS = new Set(['review+voiceflash', 'flashcard+review']);
const strandedVocab = NEW_ITEMS.filter(
  (i) => (i.level === 'a1' || i.level === 'a2')
    && i.kind !== 'sentence'
    && (i.cardType ?? 'vocab') === 'vocab'
    && !SEPARATE_POOLS.has([...i.drills].sort().join('+'))
    && !(i.drills.includes('flashcard') && i.drills.includes('voiceflash')),
);
if (strandedVocab.length) {
  die(`a1/a2 vocab items missing flashcard or voiceflash, which fails flashhub-coverage over the whole seed:\n  ${strandedVocab.map((i) => `${i.id} ${JSON.stringify(i.drills)}`).join('\n  ')}`);
}

// gender.logic.ts measures a1.03's ending rules over gendered single-word nouns,
// and a1-03-genre.test.ts re-measures all twenty of its printed figures from the
// SEED on every run. a1.11 moved that count by two and took the suite red on a
// lesson nobody had touched.
//
// THE REAL FUNCTION, not a copy. This guard is what caught three rows in the
// first draft of this lesson (« l'heure », « la demi-heure », « un rendez-vous »)
// and they are withdrawn; see the note on DURATION in heure-lesson.ts.
const genderPopulation = endingPopulation(
  NEW_ITEMS.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags }))
);
if (genderPopulation.length) {
  die(
    `this merge would add ${genderPopulation.length} row(s) to a1.03's measured ending population, which can move a `
    + `statistic printed on two of its cards:\n  ${genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ')}\n`
    + `  If this is intended, re-measure a1.03, correct the number at its source and re-run its own batch and merge.`
  );
}

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

// The corpus as it will be AFTER this merge: what is in the seed already, plus
// what this batch adds. Passing only the batch ids would fail item-resolution on
// the twelve reused items, which are the whole point of reusing them.
const POST_MERGE_IDS = new Set([...seed.items.map((i) => i.id), ...ids]);

const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

// House-style guards. Checked here too, because this script writes the seed
// directly and a failure found at publish time is a failure found too late.
const authoredJson = JSON.stringify({ AUTHORED, LESSON, RESPELL });
if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
// Scoped to the authored half, the lesson and the respelling map: eight imported
// rows carry U+203F in their stored IPA, those are somebody else's shipped rows,
// and this lesson displays no imported row's IPA.
if (authoredJson.includes('‿')) die('U+203F tie character, which renders as an underscore on a device');

const learnerFacing = [
  ...strings(LESSON.sections),
  ...strings(LESSON.sheets ?? []),
  ...strings(LESSON.terms ?? {}),
];
const jargon = learnerFacing.filter((s) =>
  /\b(conjugaison|article (défini|indéfini|partitif)|adverbe|complément circonstanciel|masculin|féminin|déterminant|registre)\b/i.test(s));
if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) {
  die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
}

const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
if (badNasal.length) {
  die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
}

// The respelling of `heure` is internally consistent. This lesson chose UHR and
// the whole argument for choosing it is that a fourth spelling was the thing to
// avoid, so a single stray EUR would undo the decision it documents.
const strayEur = Object.values(RESPELL)
  .filter((d) => /\bheures?\b/i.test(d.fr) || /^l'heure$/i.test(d.fr))
  .filter((d) => !/UHR/i.test(d.respell));
if (strayEur.length) {
  die(`respelling(s) of heure not using UHR:\n  ${strayEur.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
}

// The twelve, and the pairs that are the shape of act 4.
if (THE_TWELVE.length !== EXPECTED_HOURS) die(`THE_TWELVE holds ${THE_TWELVE.length} hours, expected ${EXPECTED_HOURS}`);
if (HOUR_IDS.length !== EXPECTED_HOURS) die(`${HOUR_IDS.length} hour headwords, expected ${EXPECTED_HOURS}`);
if (CLOCK_PAIRS.length !== EXPECTED_PAIRS) die(`${CLOCK_PAIRS.length} register pairs, expected ${EXPECTED_PAIRS}`);

// Every register pair is reciprocal in the sense that matters here: the spoken
// half is authored by this lesson and the official half must be a row that will
// EXIST after this merge, or the two-clock table draws half a row.
for (const [spoken, official] of CLOCK_PAIRS) {
  if (!AUTHORED.some((a) => a.id === spoken)) die(`register pair names ${spoken}, which this lesson does not author`);
  if (!POST_MERGE_IDS.has(official)) die(`register pair names twin ${official}, which will not exist after this merge`);
}

// No month, day or season reaches the seed under this lesson's name.
// `heure-et-date` is a clock AND calendar theme, so a1.08's and a1.09's
// vocabulary is one tap from every card this lesson binds to.
const namedIds = new Set(strings(LESSON).filter((s) => /^fr\./.test(s)));
const danglingAnywhere = [...namedIds].filter((id) => !POST_MERGE_IDS.has(id));
if (danglingAnywhere.length) {
  die(`the lesson body names items that will not exist:\n  ${danglingAnywhere.join('\n  ')}`);
}
const dangling = LESSON.itemIds.filter((id) => !POST_MERGE_IDS.has(id));
if (dangling.length) die(`lesson names items that will not exist:\n  ${dangling.join('\n  ')}`);

// Written against the surfaces the lesson TEACHES from rather than every string,
// because a day inside the reading passage is legitimate context.
const productionSurfaces = [
  ...LESSON.sections.filter((s) => s.type !== 'reading').flatMap((s) => strings(s)),
  ...strings(LESSON.drills ?? []),
  ...strings(LESSON.terms ?? {}),
];
const taughtDay = DAYS.filter((d) => productionSurfaces.some((s) => new RegExp(`\\b${d}\\b`, 'i').test(s)));
if (taughtDay.length) die(`the lesson teaches a day, which belongs to a1.08: ${taughtDay.join(', ')}`);
// Case-sensitive, because French months are always lowercase and « Mars » the
// planet is not a month. a1.08 found this the hard way.
const taughtMonth = MONTHS.filter((m) => productionSurfaces.some((s) => new RegExp(`\\b${m}\\b`).test(s)));
if (taughtMonth.length) die(`the lesson teaches a month, which belongs to a1.09: ${taughtMonth.join(', ')}`);
const taughtSeason = SEASONS.filter((x) => productionSurfaces.some((s) => s.includes(x)));
if (taughtSeason.length) die(`the lesson teaches a season, which belongs to a1.10: ${taughtSeason.join(', ')}`);
const reflexive = REFLEXIVE.filter((r) => productionSurfaces.some((s) => s.includes(r)));
if (reflexive.length) die(`the lesson teaches a reflexive verb, which is a2.22: ${reflexive.join(', ')}`);

// And no day or month WORD arrives in the seed on a row this merge writes. A
// headword landing here would put a card in the flashcard hub that no lesson
// teaches, which is what a1.08's month guard exists to stop.
const calendarWritten = NEW_ITEMS.filter((i) =>
  i.kind !== 'sentence'
  && [...DAYS, ...MONTHS].some((w) => headword(i.fr) === w));
if (calendarWritten.length) {
  die(`this merge would write a day or month headword into the seed: ${calendarWritten.map((i) => i.id).join(', ')}`);
}

// All four quarter phrases survive, and the article asymmetry with them. This is
// the check that stops a later edit quietly regularising « moins le quart »,
// which is the single most tempting tidy-up in the lesson.
const teaching = productionSurfaces.join(' \u0001 ');
const missingQuarter = QUARTER_PHRASES.filter((p) => !teaching.includes(p));
if (missingQuarter.length) die(`quarter phrase(s) never taught: ${missingQuarter.join(', ')}`);
if (!teaching.includes(QUARTER_WITH_ARTICLE)) die(`"${QUARTER_WITH_ARTICLE}" must appear with its article`);
const untaughtHour = THE_TWELVE.filter((h) => !teaching.includes(h));
if (untaughtHour.length) die(`hour(s) the lesson never puts on a screen: ${untaughtHour.join(', ')}`);
for (const w of ['midi et demi', 'et demie', 'midi', 'minuit', 'neuf heures']) {
  if (!teaching.includes(w)) die(`"${w}" is never taught, and the lesson promises it`);
}

// No `prompt` on any item this lesson writes. `Item.prompt` is read by no
// component; see the argument in avoir-lesson.ts.
const withPrompt = NEW_ITEMS.filter((i) => i.prompt !== undefined);
if (withPrompt.length) {
  die(`item(s) carry a \`prompt\`, which no lesson component reads:\n  ${withPrompt.map((i) => `${i.id} "${i.prompt}"`).join('\n  ')}`);
}

// Every drill has to be reachable, and every round has to lead on a different
// trigger. drillForRound stops at a round's first resolving target.
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
const rounds = quizSection && quizSection.type === 'quiz' ? (quizSection.rounds ?? []) : [];
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) {
  die(`expected ${EXPECTED_TRIGGERS} error triggers, found ${(LESSON.errorTriggers ?? []).length}`);
}
if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} quiz rounds, found ${rounds.length}`);
{
  const drillForTarget = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t.drill]));
  const leads: string[] = [];
  for (const r of rounds) {
    const lead = (r.targets ?? []).find((t) => drillForTarget.has(t));
    if (!lead) die(`round ${r.id} names no target that resolves to a drill`);
    if (leads.includes(lead)) die(`round ${r.id} leads on "${lead}", which another round already leads on`);
    leads.push(lead);
  }
  const fired = new Set(leads.map((t) => drillForTarget.get(t)!));
  const orphans = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-') && !fired.has(d.id)).map((d) => d.id);
  if (orphans.length) die(`drill(s) no quiz round can fire: ${orphans.join(', ')}`);
}

// Every free-text question accepts the answer it displays, and at most half the
// exam is mcq.
const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
if (unacceptable.length) {
  die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}"`).join('\n  ')}`);
}
const mcqCount = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
if (mcqCount * 2 > qs.length) die(`${mcqCount}/${qs.length} questions are mcq, over the half ceiling`);

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);

// The Den advertises these three before the learner opens anything, and they
// were correct before this lesson existed. Authoring is not a licence to rewrite
// the promise the lesson was built against.
if (unit.title !== 'Telling Time') die(`unit ${UNIT_ID} title has changed: "${unit.title}"`);
if (unit.sub !== "L'heure") die(`unit ${UNIT_ID} sub has changed: "${unit.sub}"`);
if (unit.canDo !== 'Can ask and tell the time and make a simple appointment') {
  die(`unit ${UNIT_ID} canDo has changed: "${unit.canDo}"`);
}

// The eyebrow the Den draws is computed from the unit's seq, and `tag` is the
// one place it is authored by hand.
const expectedTag = `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) {
  die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unit.seq}, so the header will draw "${expectedTag}"`);
}

// The theme binding, REBOUND rather than cleared. Refused if somebody else has
// already changed it to a third thing.
const themesNow = (unit as Unit & { themes?: string[] }).themes;
if (themesNow !== undefined
  && themesNow.join() !== UNIT_THEMES_BEFORE.join()
  && themesNow.join() !== UNIT_THEMES_AFTER.join()) {
  die(
    `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, which is not the broken binding this merge expects `
    + `(${JSON.stringify(UNIT_THEMES_BEFORE)}). Somebody has changed it; look before overwriting.`
  );
}
// The theme being replaced really does hold nothing in the copy the Den reads on
// a first launch with no network, so this is a repair rather than a deletion.
const deadInSeed: Record<string, number> = {};
for (const t of UNIT_THEMES_BEFORE) {
  deadInSeed[t] = seed.items.filter((i) => i.theme === t).length;
  if (deadInSeed[t] > 0) {
    die(`theme "${t}" holds ${deadInSeed[t]} items in the seed, so replacing this binding would remove a real chip.`);
  }
}

// REUSED is documented against the database by the batch. Here it is checked
// against the SEED, which is the copy the app and the tests read.
const inSeed = new Map(seed.items.map((i) => [i.id, i]));
const reusedMissing = REUSED.filter((r) => !inSeed.has(r.id));
if (reusedMissing.length) die(`REUSED names items missing from the seed:\n  ${reusedMissing.map((r) => `${r.id} "${r.fr}"`).join('\n  ')}`);
const reusedDrift = REUSED
  .filter((r) => inSeed.get(r.id)!.fr !== r.fr)
  .map((r) => `${r.id}: this lesson says "${r.fr}", the seed says "${inSeed.get(r.id)!.fr}"`);
if (reusedDrift.length) die(`REUSED has drifted from the seed:\n  ${reusedDrift.join('\n  ')}`);

// The dictée, re-checked against the post-merge corpus rather than only against
// what this file authors: all five are rows this merge imports, and a lengthened
// `fr` upstream would quietly move one between modes.
const dictModes: string[] = [];
{
  const post = new Map<string, Item>([...seed.items.map((i) => [i.id, i] as const), ...NEW_ITEMS.map((i) => [i.id, i] as const)]);
  const noTag: string[] = [];
  let wordModeWithNoun = 0;
  for (const id of HEURE_DICTATION_IDS) {
    const it = post.get(id);
    if (!it) die(`the dictée names ${id}, which will not exist after this merge`);
    const mode = dicteeMode(it.fr);
    const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
    dictModes.push(`${mode === 'words' ? 'WORDS  ' : 'letters'} "${it.fr}"${decoys.length ? ` decoys=${decoys.join('/')}` : ''}`);
    if (!it.drills.includes('dictation')) noTag.push(`${id} "${it.fr}"`);
    if (mode === 'words' && /\bheures?\b/i.test(it.fr)) wordModeWithNoun++;
  }
  if (noTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noTag.join('\n  ')}`);
  // WORD MODE IS WHERE THE DROPPED NOUN IS TESTABLE. The bank is the sentence's
  // own words plus two decoys, so `heures` is a tile the learner has to place.
  // `fold()` strips whitespace and cannot see that; this can.
  if (wordModeWithNoun < 3) {
    die(`only ${wordModeWithNoun} dictée target(s) run in word mode with "heures" in them, and at least three are wanted.`);
  }
  const leDecoy = HEURE_DICTATION_IDS.filter((id) => {
    const it = post.get(id)!;
    return dicteeMode(it.fr) === 'words' && wordDecoys(it.fr).includes('le');
  });
  if (!leDecoy.length) {
    die('no dictée target offers "le" as a decoy, which is the article belonging to « moins le quart » and to nothing else here');
  }
}

// The chunk rows carry a verb no A1 unit conjugates. They may be READ and must
// never be asked for.
const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's23-speak');
const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
const producedChunks = [
  ...speakIds.filter((id) => CHUNK_IDS.includes(id)),
  ...HEURE_DICTATION_IDS.filter((id) => CHUNK_IDS.includes(id)),
];
if (producedChunks.length) {
  die(`production drill(s) name a row carrying a verb no A1 unit teaches: ${producedChunks.join(', ')}`);
}
// And every speak id carries voiceflash in the POST-MERGE seed, which is the
// copy the mic-scored deck reads. All twelve hours are in it, because the join
// is what the mic is listening for.
{
  const post = new Map<string, Item>([...seed.items.map((i) => [i.id, i] as const), ...NEW_ITEMS.map((i) => [i.id, i] as const)]);
  const badSpeak = speakIds.filter((id) => !post.get(id)?.drills.includes('voiceflash'));
  if (badSpeak.length) die(`speak items with no voiceflash after this merge:\n  ${badSpeak.join('\n  ')}`);
  const hoursNotSpoken = HOUR_IDS.filter((id) => !speakIds.includes(id));
  if (hoursNotSpoken.length) die(`hour(s) never drilled by the mic: ${hoursNotSpoken.join(', ')}`);
}

// If the seed already has this lesson and it does NOT match what is authored
// here, something has published in between and the two copies have diverged.
const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing && JSON.stringify(existing) !== JSON.stringify(LESSON)) {
  console.warn(
    `\n! seed.json already carries a DIFFERENT ${LESSON.id}`
    + `\n  seed: v${existing.version}, ${existing.sections.length} sections, ${existing.itemIds.length} items`
    + `\n  here: v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items`
    + `\n  Overwriting with the authored copy. If the seed copy was newer, restore it from git first.\n`
  );
  if (existing.version > LESSON.version) {
    die(
      `the seed carries v${existing.version} and this source is v${LESSON.version}. Replacing a higher version with `
      + `a lower one reads as a rollback in the log and is almost always a mistake. Move the version counter forward `
      + `in heure-lesson.ts.`
    );
  }
}

// ── Merge, idempotent by id ─────────────────────────────────────────────────

const byId = new Map(seed.items.map((i) => [i.id, i]));
let added = 0;
let updated = 0;
let importedNew = 0;
const importedIdSet = new Set(IMPORTS.map((i) => i.id));
for (const it of NEW_ITEMS) {
  if (byId.has(it.id)) updated++;
  else {
    added++;
    if (importedIdSet.has(it.id)) importedNew++;
  }
  byId.set(it.id, it);
}

// The two respelling repairs, applied to whatever copy of those rows the seed
// holds. `respell` only: nothing else about them moves, and they belong to the
// sons track as much as to this lesson. Refused if the stored value is neither
// the broken one nor the corrected one, because that means somebody else has
// been here.
const repaired: string[] = [];
for (const r of RESPELL_REPAIRS) {
  const row = byId.get(r.id);
  if (!row) {
    // The row is one of the imports, so it is already in NEW_ITEMS above and its
    // respell came from the manifest. That manifest carries the OLD value on
    // purpose (it is a recorded read), so the repair still has to be applied.
    die(`respelling repair names ${r.id}, which is not in the seed after this merge`);
  }
  if (row.respell !== r.from && row.respell !== r.to) {
    die(
      `respelling repair for ${r.id}: expected "${r.from}", the seed says "${row.respell}".\n`
      + `  Somebody has changed this row. Look before overwriting.`
    );
  }
  if (row.respell !== r.to) {
    byId.set(r.id, { ...row, respell: r.to });
    repaired.push(`${r.id} ${r.fr}: "${r.from}" → "${r.to}"`);
  }
}

const nextItems = [...byId.values()];
const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

// The themes key is REPLACED rather than removed: unlike a1.06 and a1.07, this
// unit has a real theme to point at.
const { themes: priorThemes, ...unitWithoutThemes } = unit as Unit & { themes?: string[] };
const nextUnit: Unit = {
  ...unitWithoutThemes,
  themes: [...UNIT_THEMES_AFTER],
  lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])],
} as Unit;
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

// No other unit's themes binding moves either. a1.25 declares the dead SINGULAR
// `routine` and it is TEMPTING to fix it here, since measuring this lesson's
// theme options answered that question too (the live theme is `routines`, and
// its a1 band runs to fr.a1.routines.184 rather than the seed's .095). It is not
// fixed: a1.25 is its own build and changing another unit's shipped body is that
// unit's decision, which is the line a1.06 drew for a1.07 and every lesson since
// has kept. It is in the report instead.
for (const before of seed.units) {
  if (before.id === UNIT_ID) continue;
  const after = nextUnits.find((u) => u.id === before.id);
  const ta = JSON.stringify((before as { themes?: unknown }).themes ?? null);
  const tb = JSON.stringify((after as { themes?: unknown } | undefined)?.themes ?? null);
  if (ta !== tb) die(`this merge would change unit ${before.id}'s themes: ${ta} -> ${tb}`);
  if (JSON.stringify(before.lessonIds ?? []) !== JSON.stringify(after?.lessonIds ?? [])) {
    die(`this merge would change unit ${before.id}'s lessonIds`);
  }
}

// The guards described above. A merge that drops somebody else's content is a
// bug in this script, not an outcome to confirm, so it dies rather than asking.
const keptItems = nextItems.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const keptLessons = nextLessons.filter((l) => l.id !== LESSON.id).length;
const keptLessonIds = nextLessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
if (keptItems < OTHER_ITEMS || keptLessons < OTHER_LESSONS) {
  die(
    `this merge would DROP content that is not its own:\n`
    + `  other items:   ${OTHER_ITEMS} -> ${keptItems}\n`
    + `  other lessons: ${OTHER_LESSONS} -> ${keptLessons}\n`
    + `  Something rewrote seed.json underneath this run. Re-run it; do not force it.`
  );
}
// Named, not merely counted, so a one-for-one swap cannot pass.
const lost = OTHER_LESSON_IDS.filter((id) => !keptLessonIds.includes(id));
if (lost.length) die(`this merge would drop lesson(s) it does not own: ${lost.join(', ')}`);
// And the seven that matter most to THIS lesson, named for their own sake so the
// failure message says why they matter rather than only that one is gone.
for (const [id, why] of Object.entries(NEIGHBOURS)) {
  if (!keptLessonIds.includes(id)) {
    die(`${id} is gone from the seed after this merge. It is ${why} It must survive untouched.`);
  }
}

console.log(`  items: +${added} new (${AUTHORED.length} authored, ${importedNew} imported from outside the seed cut), ${updated} updated (${seed.items.length} → ${nextItems.length})`);
for (const theme of [...new Set(IMPORTS.map((i) => i.theme))]) {
  const n = IMPORTS.filter((i) => i.theme === theme).length;
  const already = seed.items.filter((i) => i.theme === theme).length;
  console.log(`    ${theme}: ${already} in the seed before this run, +${n} copied in from the IMPORTED manifest`);
}
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | acts: ${LESSON.acts?.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${qs.length} in ${rounds.length} rounds`);
console.log(`  the twelve: ${THE_TWELVE.join(', ')}, every one taught by name and drilled by the mic`);
console.log(`  respelled with UHR throughout: ${THE_TWELVE.map((h) => RESPELL[h].respell).join(' ')}`);
console.log(`  register pairs: ${CLOCK_PAIRS.length}, both halves on one screen in s13-clocks`);
console.log(`  dictation: ${HEURE_DICTATION_IDS.length} lines, both modes deliberately`);
for (const m of dictModes) console.log(`    ${m}`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify(priorThemes ?? null)} → ${JSON.stringify(UNIT_THEMES_AFTER)}`);
console.log(`    "temps" holds ${deadInSeed.temps} items in the seed; that chip has always led nowhere.`);
console.log(`    "heure-et-date" will hold ${nextItems.filter((i) => i.theme === 'heure-et-date').length} rows in the seed after this run, none of them a day or a month.`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
if (repaired.length) {
  console.log(`  respelling repairs applied to the seed (display only):`);
  for (const r of repaired) console.log(`    ${r}`);
} else {
  console.log(`  respelling repairs: already applied, nothing to do`);
}
console.log(`  a1.25 NOT touched: it declares the dead singular "routine" and the live theme is "routines" (a1 band runs to fr.a1.routines.184, not the seed's .095). Reported, not done.`);
console.log(`  neighbours intact: ${Object.keys(NEIGHBOURS).join(', ')}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate words ✓  flashhub coverage ✓  a1.03 population untouched ✓`);
console.log(`              reused items match the seed ✓  no day/month/season written ✓  no other unit moved ✓  UHR throughout ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run , all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.`
  + `\n`
  + `\n  a1.12.l1 is now in BOTH Postgres and the seed, so this lesson is safe.`
  + `\n`
  + `\n  NOTE for whoever runs the next publish: ${importedNew} rows from heure-et-date,`
  + `\n  temps-et-frequence, jours-et-mois, questions and expressions-utiles are now in the seed and`
  + `\n  NEITHER heure-et-date NOR temps-et-frequence is in SEED_CUT.themes. They survive a publish`
  + `\n  because publish-content.ts pulls in every item a bundled lesson references, and a1.12.l1`
  + `\n  references all of them. If this lesson is ever unbundled, those rows leave with it.`
  + `\n`
  + `\n  NOTE for a1.25 "Daily Routine": it declares themes: ["routine"], SINGULAR, which holds 0 items.`
  + `\n  The live theme is "routines" with 338 rows, and its a1 band runs to fr.a1.routines.184 rather`
  + `\n  than the seed's fr.b1.routines.095. That unit will hit the same wall this one did.`
  + `\n`
  + `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on three`
  + `\n  pre-existing divergences (sons.09.l1 seed-only, b2.01.l1 db-only, sons.08.l1 shape`
  + `\n  drift). Do not run pnpm content:publish until those are resolved.\n`
);
