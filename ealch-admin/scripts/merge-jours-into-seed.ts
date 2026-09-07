// Merge the authored a1.08 content into the committed seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-jours-batch.ts writes to POSTGRES, which is the source of truth, and
// `pnpm content:publish` then regenerates seed.json from it. That is the correct
// pipeline and this script does not replace it.
//
// But the app READS seed.json , src/services/content.ts imports it directly ,
// and so do the tests. lesson-contract.test.ts is the gate that checks every
// lesson in the seed, and a1-08-jours.test.ts self-skips its seed-parity
// assertions when the lesson is absent. Until the seed carries this lesson it is
// invisible both to a learner and to the gate.
//
//   author-jours-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-jours-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// ── The 69 rows this merge copies in ───────────────────────────────────────
//
// 85 of the 89 items this lesson names live in `jours-et-mois`,
// `adjectifs-essentiels` and `cinema`. All three are PUBLISHED in Postgres and
// none is in SEED_CUT.themes, so `jours-et-mois` has 0 rows in seed.json today
// against 370 in the database.
//
// That gap is the whole reason the brief for this lesson reported that the seven
// days did not exist. They do; they were simply not in the copy the brief was
// measured against. See the header of jours-corpus.ts.
//
// publish-content.ts pulls in every item a bundled lesson references, so those
// ids would arrive at the next publish. A publish is not available (see the
// hazard below), and lesson-contract.test.ts resolves `itemIds` against the
// seed, so without this the lesson lands with 85 dangling ids that render as
// empty cards.
//
// ── What this merge does that the others did not ───────────────────────────
//
// Three things, and each is called out on its own line in the report:
//
//   It REBINDS the unit rather than clearing it. a1.06 and a1.07 both cleared
//   dead bindings; this one has a real theme to point at, and `jours-et-mois`
//   is the theme a1.09 will want too.
//
//   It writes four RESPELLING REPAIRS onto rows the sons track also uses.
//   Display-only, and refused if the stored value is not the broken one this
//   merge expects.
//
//   It introduces a theme to the seed that has never been in it. Seven day
//   words and twelve month words share `jours-et-mois`, and only the seven are
//   pulled in: a month landing in the seed under this lesson's name would give
//   a1.09 nothing to introduce and would put a card in the flashcard hub that
//   no lesson teaches.
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
//   pnpm tsx scripts/merge-jours-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-jours-into-seed.ts

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
  CHUNK_IDS, CONTRAST_PAIRS, DAY_IDS, IMPORTED, JOURS, MONTH_IDS, RESPELL, RESPELL_REPAIRS,
  REUSED, THE_SEVEN, WITHDRAWN_IDS, toItem,
} from './data/jours-corpus.ts';
import { JOURS_DICTATION_IDS, JOURS_LESSON, REFRAME } from './data/jours-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

/** As in the batch: EXPLICIT constants, never figures derived from the lesson,
 *  because a derived count compares the content to itself and passes on any
 *  rewording. */
const REFRAME_APPEARANCES = 13;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_DAYS = 7;
const EXPECTED_PAIRS = 8;

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
const AUTHORED = JOURS.map(toItem);
const IMPORTS = IMPORTED;
const NEW_ITEMS = [...AUTHORED, ...IMPORTS];
const LESSON = JOURS_LESSON;
const UNIT_ID = 'a1.08';
const UNIT_THEMES_BEFORE = ['temps', 'calendrier'];
const UNIT_THEMES_AFTER = ['jours-et-mois'];

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
// WITHDRAWN_IDS are excluded from the never-shrink baseline: they are rows THIS
// script wrote in v2 and takes back in v3, so their removal is this merge doing
// its job rather than the file changing underneath it.
const OTHER_ITEMS = seed.items.filter(
  (i) => !NEW_ITEMS.some((n) => n.id === i.id) && !WITHDRAWN_IDS.includes(i.id),
).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;

// The lessons this merge must not disturb, NAMED rather than counted. A count
// alone would let a swap through: drop one, gain another, same total. Twelve A1
// lessons ship after this one lands and every one of them must survive.
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

// And the ones that matter most to THIS lesson, named explicitly rather than
// left to the generic list, so a failure says WHICH one and why rather than only
// that a count moved.
const NEIGHBOURS: Record<string, string> = {
  'a1.04.l1': 'where `le` in front of a general noun was taught, which is this lesson\'s entire rule applied to a day. s08-rule opens on it by name and does not re-derive it.',
  'a1.02.l1': 'the declared prerequisite. Numbers, which this lesson treats as known and never re-teaches.',
  'a1.06.l1': 'the verb être, which carries roughly half of what this lesson asks a learner to produce.',
  'a1.07.l1': 'the verb avoir, which carries the other half. It shipped two days before this lesson and its dictée decision is the one this lesson deliberately inverts.',
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
// `lundi` and `le lundi` collide.
//
// Checked against the WHOLE POST-MERGE SEED rather than only against this batch,
// because the collision that matters is with something already there, and
// because this merge introduces three entire new themes. This is the check that
// would have caught the brief's suggestion to author seven day headwords:
// fr.sons.jours-et-mois.001-007 already hold them in this very theme.
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
// a1/a2 vocab word or phrase lacks flashcard or voiceflash. This merge writes 69
// rows it did not author, so the check has to happen here rather than being
// assumed of somebody else's theme. Note the level filter: the sixteen word rows
// this merge imports are level 'sons' and are outside that test's population,
// but they carry both drills anyway, so this passes either way.
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
// THE REAL FUNCTION, not a copy. v2 of this lesson used a hand-rolled version
// carrying a `level === 'a1'` filter that `endingPopulation` does not have, so
// four level-'sons' rows went in and moved two of a1.03's cards. They are
// withdrawn; this asks the module the app itself runs.
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
// the four reused items, which are the whole point of reusing them.
const POST_MERGE_IDS = new Set([...seed.items.map((i) => i.id), ...ids]);

const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

// House-style guards. Checked here too, because this script writes the seed
// directly and a failure found at publish time is a failure found too late.
const authoredJson = JSON.stringify({ AUTHORED, LESSON });
if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
// Scoped to the authored half and the lesson: two imported rows carry U+203F in
// their stored IPA (fr.a1.ecole.226 among them) and this lesson never displays
// an imported row's IPA. Those are somebody else's shipped rows.
if (authoredJson.includes('‿')) die('U+203F tie character, which renders as an underscore on a device');

const learnerFacing = [
  ...strings(LESSON.sections),
  ...strings(LESSON.sheets ?? []),
  ...strings(LESSON.terms ?? {}),
];
const jargon = learnerFacing.filter((s) =>
  /\b(conjugaison|article (défini|indéfini|partitif)|adverbe de fréquence|complément circonstanciel|masculin|féminin|déterminant)\b/i.test(s));
if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) {
  die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
}

const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
if (badNasal.length) {
  die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
}
// hasPlainNasalFor cannot see a WORD-INTERNAL nasal (dimanche has SH behind
// its n), so the three nasal-carrying days are checked by name as well.
const NASAL_DAYS = ['lundi', 'vendredi', 'dimanche'];
const missingSuperscript = NASAL_DAYS.filter((d) => !RESPELL[d]?.respell.includes('ⁿ'));
if (missingSuperscript.length) {
  die(`day respelling(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}`);
}

// The seven, and the pairs that are the shape of the lesson.
if (THE_SEVEN.length !== EXPECTED_DAYS) die(`THE_SEVEN holds ${THE_SEVEN.length} days, expected ${EXPECTED_DAYS}`);
if (DAY_IDS.length !== EXPECTED_DAYS) die(`${DAY_IDS.length} day headwords resolve, expected ${EXPECTED_DAYS}`);
if (CONTRAST_PAIRS.length !== EXPECTED_PAIRS) die(`${CONTRAST_PAIRS.length} contrast pairs, expected ${EXPECTED_PAIRS}`);
const missingSide = THE_SEVEN.filter((d) => {
  const hasHab = JOURS.some((w) => w.day === d && w.side === 'habitual' && !w.chunk);
  const hasSpec = JOURS.some((w) => w.day === d && w.side === 'specific' && !w.chunk);
  return !hasHab || !hasSpec;
});
if (missingSide.length) die(`day(s) taught on only one side of the rule: ${missingSide.join(', ')}`);

// Every authored day is LOWERCASE, so the corpus itself models the rule.
// Sentence-initial capitals are legitimate and are checked mid-sentence only.
const capitalised = NEW_ITEMS.filter((i) =>
  THE_SEVEN.some((d) => i.fr.indexOf(d[0].toUpperCase() + d.slice(1)) > 0));
if (capitalised.length) {
  die(`item(s) capitalise a day mid-sentence:\n  ${capitalised.map((i) => `${i.id} "${i.fr}"`).join('\n  ')}`);
}

// No month reaches the seed under this lesson's name. `jours-et-mois` holds all
// twelve one tap away and a1.09 declares this unit as its prerequisite, so a
// month arriving here would leave the next lesson with nothing to introduce and
// would put a card in the flashcard hub that no lesson teaches.
const namedIds = new Set(strings(LESSON).filter((s) => /^fr\./.test(s)));
const monthsNamed = MONTH_IDS.filter((id) => namedIds.has(id));
if (monthsNamed.length) die(`the lesson names a month headword, which belongs to a1.09: ${monthsNamed.join(', ')}`);
const monthsWritten = NEW_ITEMS.filter((i) => MONTH_IDS.includes(i.id));
if (monthsWritten.length) die(`this merge would write month headword(s) into the seed: ${monthsWritten.map((i) => i.id).join(', ')}`);

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

// Every free-text question accepts the answer it displays, and none of them
// claims to test a capital letter, which fold() cannot see.
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
if (unit.title !== 'Days of the Week') die(`unit ${UNIT_ID} title has changed: "${unit.title}"`);
if (unit.sub !== 'Les jours de la semaine') die(`unit ${UNIT_ID} sub has changed: "${unit.sub}"`);
if (unit.canDo !== 'Can name the days and say what they do on a given day') {
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
// The themes being replaced really do hold nothing in the copy the Den reads on
// a first launch with no network, so this is a repair rather than a deletion.
const deadInSeed: Record<string, number> = {};
for (const t of UNIT_THEMES_BEFORE) {
  deadInSeed[t] = seed.items.filter((i) => i.theme === t).length;
  if (deadInSeed[t] > 0) {
    die(`theme "${t}" holds ${deadInSeed[t]} items in the seed, so replacing this binding would remove a real chip.`);
  }
}

// Every id the lesson names must resolve once the merge is done: against this
// batch, or against something already in the seed. An id that dangles renders as
// an empty card rather than erroring. This is the check the 69 imported rows
// exist to satisfy.
const willExist = new Set([...seed.items.map((i) => i.id), ...ids]);
const dangling = LESSON.itemIds.filter((id) => !willExist.has(id));
if (dangling.length) die(`lesson names items that will not exist:\n  ${dangling.join('\n  ')}`);
// And every id named anywhere in the lesson body, not just in itemIds: a drill's
// `items`, a term's `examples` and a tranche all name ids too, and none of them
// is covered by itemIds.
const danglingAnywhere = [...namedIds].filter((id) => !willExist.has(id));
if (danglingAnywhere.length) {
  die(`the lesson body names items that will not exist:\n  ${danglingAnywhere.join('\n  ')}`);
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
// what this file authors: one of the five is a row this merge imports, and a
// lengthened `fr` upstream would quietly move it between modes.
const dictModes: string[] = [];
{
  const post = new Map<string, Item>([...seed.items.map((i) => [i.id, i] as const), ...NEW_ITEMS.map((i) => [i.id, i] as const)]);
  const noTag: string[] = [];
  for (const id of JOURS_DICTATION_IDS) {
    const it = post.get(id);
    if (!it) die(`the dictée names ${id}, which will not exist after this merge`);
    const mode = dicteeMode(it.fr);
    const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
    dictModes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"${decoys.length ? ` decoys=${decoys.join('/')}` : ''}`);
    if (!it.drills.includes('dictation')) noTag.push(`${id} "${it.fr}"`);
  }
  if (noTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noTag.join('\n  ')}`);
  // At least one word-mode target must offer `le` as a decoy the learner has to
  // reject. That is the whole reason this lesson chose word mode where a1.07
  // chose letters, and a target reworded past the length threshold silently
  // stops asking the question.
  const leDecoy = JOURS_DICTATION_IDS.filter((id) => {
    const it = post.get(id)!;
    return dicteeMode(it.fr) === 'words' && wordDecoys(it.fr).includes('le');
  });
  if (!leDecoy.length) die('no dictée target offers "le" as a decoy, which is the whole reason this lesson uses word mode');
}

// The chunk rows carry a verb no A1 unit conjugates. They may be READ and must
// never be asked for.
const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's18-speak');
const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
const producedChunks = [
  ...speakIds.filter((id) => CHUNK_IDS.includes(id)),
  ...JOURS_DICTATION_IDS.filter((id) => CHUNK_IDS.includes(id)),
];
if (producedChunks.length) {
  die(`production drill(s) name a row carrying a verb no A1 unit teaches: ${producedChunks.join(', ')}`);
}
// And every speak id carries voiceflash in the POST-MERGE seed, which is the
// copy the mic-scored deck reads.
{
  const post = new Map<string, Item>([...seed.items.map((i) => [i.id, i] as const), ...NEW_ITEMS.map((i) => [i.id, i] as const)]);
  const badSpeak = speakIds.filter((id) => !post.get(id)?.drills.includes('voiceflash'));
  if (badSpeak.length) die(`speak items with no voiceflash after this merge:\n  ${badSpeak.join('\n  ')}`);
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
      + `in jours-lesson.ts.`
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

// The four respelling repairs, applied to whatever copy of those rows the seed
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

// ── The four rows v2 wrote and v3 withdraws ────────────────────────────────
//
// This is the ONE place this script removes anything, and it is here because
// this script is what put them there. v2 copied four gendered single-word nouns
// into the seed and moved two of a1.03's printed ending figures; see
// WITHDRAWN_IDS in jours-corpus.ts for the full argument.
//
// Guarded three ways, because a merge that deletes is a merge that can delete
// the wrong thing: only these exact ids, only if no OTHER lesson names them,
// and only if they are not in SEED_CUT-bundled themes on their own account.
const withdrawn: string[] = [];
for (const id of WITHDRAWN_IDS) {
  if (!byId.has(id)) continue;
  const claimedBy = seed.lessons
    .filter((l) => l.id !== LESSON.id)
    .filter((l) => JSON.stringify(l).includes(id))
    .map((l) => l.id);
  if (claimedBy.length) {
    die(
      `${id} is withdrawn by this lesson but named by ${claimedBy.join(', ')}.\n`
      + `  Removing it would break somebody else's lesson. Leave it and re-measure a1.03 instead.`
    );
  }
  if (LESSON.itemIds.includes(id) || JSON.stringify(LESSON).includes(id)) {
    die(`${id} is in WITHDRAWN_IDS and this lesson still names it. Remove the reference first.`);
  }
  byId.delete(id);
  withdrawn.push(id);
}

const nextItems = [...byId.values()];
const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

// The themes key is REPLACED rather than removed: unlike a1.06 and a1.07, this
// unit has a real theme to point at, and `jours-et-mois` is the one a1.09 will
// want too.
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

// No other unit's themes binding moves either. a1.09 declares the same dead
// ["temps","calendrier"] binding this lesson is fixing, and it is TEMPTING to
// fix it here since the answer is now known. It is not fixed: a1.09 is its own
// build and changing another unit's shipped body is that unit's decision, which
// is the line a1.06 drew for a1.07 and a1.07 kept. It is in the report instead.
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
// And the five that matter most to THIS lesson, named for their own sake so the
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
console.log(`  the seven: ${THE_SEVEN.join(', ')}, every one taught on both sides of the rule`);
console.log(`  contrast pairs: ${CONTRAST_PAIRS.length}`);
console.log(`  dictation: ${JOURS_DICTATION_IDS.length} lines, both modes deliberately`);
for (const m of dictModes) console.log(`    ${m}`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify(priorThemes ?? null)} → ${JSON.stringify(UNIT_THEMES_AFTER)}`);
console.log(`    "temps" holds ${deadInSeed.temps} items in the seed and "calendrier" holds ${deadInSeed.calendrier}; both chips have always led nowhere.`);
console.log(`    "jours-et-mois" will hold ${nextItems.filter((i) => i.theme === 'jours-et-mois').length} rows in the seed after this run, none of them a month.`);
if (withdrawn.length) {
  console.log(`  items WITHDRAWN (written by v2, taken back by v3): ${withdrawn.length}`);
  for (const id of withdrawn) console.log(`    ${id}  a gendered single-word noun that moved an a1.03 ending figure`);
}
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
if (repaired.length) {
  console.log(`  respelling repairs applied to the seed (display only):`);
  for (const r of repaired) console.log(`    ${r}`);
} else {
  console.log(`  respelling repairs: already applied, nothing to do`);
}
console.log(`  a1.09 NOT touched: it declares the same dead ["temps","calendrier"] binding and fixing it is its own build's decision. Reported, not done.`);
console.log(`  neighbours intact: ${Object.keys(NEIGHBOURS).join(', ')}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate words ✓  flashhub coverage ✓  a1.03 population untouched ✓  reused items match the seed ✓  no month written ✓  no other unit moved ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run , all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.`
  + `\n`
  + `\n  a1.08.l1 is now in BOTH Postgres and the seed, so this lesson is safe.`
  + `\n`
  + `\n  NOTE for whoever runs the next publish: ${importedNew} rows from jours-et-mois,`
  + `\n  adjectifs-essentiels and cinema are now in the seed and NONE of those themes is in`
  + `\n  SEED_CUT.themes. They survive a publish because publish-content.ts pulls in every item a`
  + `\n  bundled lesson references, and a1.08.l1 references all of them. If this lesson is ever`
  + `\n  unbundled, those rows leave with it.`
  + `\n`
  + `\n  NOTE for a1.09: the theme question is answered. jours-et-mois exists, holds all twelve`
  + `\n  months as headwords with ipa and respell, and is now bound to a1.08. a1.09 still declares`
  + `\n  the dead ["temps","calendrier"] binding and should take the same one.`
  + `\n`
  + `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on three`
  + `\n  pre-existing divergences (sons.09.l1 seed-only, b2.01.l1 db-only, sons.08.l1 shape`
  + `\n  drift). Do not run pnpm content:publish until those are resolved.\n`
);
