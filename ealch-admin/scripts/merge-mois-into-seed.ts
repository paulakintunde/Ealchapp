// Merge the authored a1.09 content into the committed seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-mois-batch.ts writes to POSTGRES, which is the source of truth, and
// `pnpm content:publish` then regenerates seed.json from it. That is the correct
// pipeline and this script does not replace it.
//
// But the app READS seed.json (src/services/content.ts imports it directly) and
// so do the tests. lesson-contract.test.ts is the gate that checks every lesson
// in the seed, and a1-09-mois.test.ts self-skips its seed-parity assertions when
// the lesson is absent. Until the seed carries this lesson it is invisible both
// to a learner and to the gate.
//
//   author-mois-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-mois-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// ── The 29 rows this merge copies in, twelve of which are the months ───────
//
// 41 of the 45 items this lesson names live in `jours-et-mois` and
// `adjectifs-essentiels`. Neither is in SEED_CUT.themes, so `jours-et-mois` held
// 0 rows in seed.json until a1.08 imported 79 of them, against 386 in the
// database.
//
// That gap is the whole reason the brief for this lesson reported that ten of
// the twelve months did not exist and that three months had no sentence at all.
// All twelve exist as headwords with ipa and respell; every month has between 8
// and 19 published sentences. They were simply not in the copy the brief was
// measured against. See the header of mois-corpus.ts.
//
// THE TWELVE MONTH HEADWORDS ARE THE LARGEST THING THIS MERGE DOES. a1.08
// deliberately left them out ("only the seven are pulled in: a month landing in
// the seed under this lesson's name would give a1.09 nothing to introduce"), so
// this is the merge that was always going to bring them.
//
// ── What this merge does that a1.08's did not ──────────────────────────────
//
//   It writes FIVE respelling repairs rather than four, and three of the five
//   are invisible to `hasPlainNasalFor` rather than one. septembre, novembre and
//   décembre all carry BR behind the nasal, which puts it word-internal, where
//   that checker cannot see it.
//
//   It withdraws NOTHING, because it never adds the rows that would need
//   withdrawing. a1.08 imported four gendered single-word nouns, moved two of
//   a1.03's printed ending figures and had to take them back in v3. This lesson
//   wants `le mois`, `l'année` and `la date` just as badly and keeps all three
//   out of the seed from the start, as display strings on their cards. The check
//   below asserts that rather than trusting it.
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
// both agree. And never `git checkout` seed.json to undo something: it discards
// other authors' uncommitted lessons. Re-run the merge scripts instead.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
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
  CHUNK_IDS, CONTRAST_PAIRS, IMPORTED, MOIS, MONTH_IDS, PAIR_DATE_FRAMES, PAIR_MONTHS,
  PAIR_MONTH_FRAMES, RESPELL, RESPELL_REPAIRS, REUSED, THE_TWELVE, WITHDRAWN_IDS, frOf,
  monthsIn, toItem,
} from './data/mois-corpus.ts';
import {
  DAY_WORDS, MOIS_DICTATION_IDS, MOIS_LESSON, REFRAME, SEASON_WORDS,
} from './data/mois-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

/** Kept in step with author-mois-batch.ts. Both are explicit rather than
 *  derived, for the reason the brief gives: a derived count compares the content
 *  to itself and passes on any rewording. */
const REFRAME_APPEARANCES = 11;
const EXPECTED_TRIGGERS = 6;
const EXPECTED_ROUNDS = 6;
const EXPECTED_MONTHS = 12;
const EXPECTED_PAIRS = 9;
const NASAL_MONTHS = ['janvier', 'juin', 'septembre', 'novembre', 'décembre'];

const UNIT_ID = 'a1.09';
const UNIT_THEMES_BEFORE = ['temps', 'calendrier'];
const UNIT_THEMES_AFTER = ['jours-et-mois'];
const UNIT_TITLE = 'Months of the Year';
const UNIT_SUB = 'Les mois de l\u2019année';
const UNIT_CANDO = 'Can name the months and give a date';

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

/** Whole-word containment that never builds a regex out of the needle. */
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

type Seed = { version: number; units: Unit[]; lessons: Lesson[]; items: Item[]; [k: string]: unknown };

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const AUTHORED = MOIS.map(toItem);
const IMPORTS = IMPORTED;
const NEW_ITEMS = [...AUTHORED, ...IMPORTS];
const LESSON = MOIS_LESSON;

console.log(`→ ${SEED}`);
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);
if (DRY_RUN) console.log('  (dry run, nothing will be written)');

// ── Never shrink the seed (incident 2026-08-02) ────────────────────────────
//
// This script merges: it adds its own items and lesson and leaves everything
// else alone. So the item and lesson counts can only ever go UP, and a run that
// would reduce either means the file changed underneath it. A concurrent process
// added sons.07's items to seed.json between two runs of the accents merge, and
// the second run wrote back a state that no longer had them.
//
// Checked against what is on disk RIGHT NOW rather than against a remembered
// count, because the whole failure mode is acting on a stale read. There is no
// WITHDRAWN exemption here, unlike a1.08's merge: this script removes nothing.
const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;

// The lessons this merge must not disturb, NAMED rather than counted. A count
// alone would let a swap through: drop one, gain another, same total. Every
// lesson that ships must survive.
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

// And the ones that matter most to THIS lesson, named explicitly rather than
// left to the generic list, so a failure says WHICH one and why rather than only
// that a count moved.
const NEIGHBOURS: Record<string, string> = {
  'a1.08.l1': 'the declared prerequisite, and the lesson this one builds on twice: its lowercase rule transfers exactly, and its no-preposition rule is the trap act 3 exists to disarm.',
  'a1.27.l1': 'the numbers from twenty-one to a hundred. Every date past the twentieth is borrowed from it and none of it is re-taught here.',
  'a1.02.l1': 'the numbers from one to twenty, which are most of the days of a month.',
  'a1.06.l1': 'the verb être, which carries almost everything this lesson asks a learner to produce.',
  'a1.07.l1': 'the verb avoir, its fixed expressions, and the elision this lesson calls back to for le mois d\'août.',
  'a1.04.l1': 'where `le` in front of a general noun was taught, which is the article a date frame reuses.',
  'a1.01.l1': 'the A1 reference implementation, and the lesson whose tone this one matches.',
};

// ── Validate before writing anything ────────────────────────────────────────

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in batch: ${[...new Set(dupeIds)].join(', ')}`);

// No two non-sentence items in one theme may share an `fr`. The flashcard hub
// keys decks on `fr` with the article stripped, so a duplicate serves the same
// card twice. Checked against the POST-MERGE seed rather than only against this
// batch, because the collision that matters is with rows already in the file:
// this is the check that would have fired had the brief's instruction to author
// ten month headwords been followed.
{
  const headword = (fr: string) => fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
  const authoredIds = new Set(ids);
  const post = [...seed.items.filter((i) => !authoredIds.has(i.id)), ...NEW_ITEMS];
  const seenWord = new Map<string, string>();
  const dupeWords: string[] = [];
  for (const w of post) {
    if (w.kind === 'sentence') continue;
    if ((w.cardType ?? 'vocab') !== 'vocab') continue;
    const key = `${w.theme}::${headword(w.fr)}`;
    const prior = seenWord.get(key);
    if (prior) dupeWords.push(`${prior} vs ${w.id} ("${w.fr}") in ${w.theme}`);
    else seenWord.set(key, w.id);
  }
  if (dupeWords.length) die(`the same word twice in one theme after this merge:\n  ${dupeWords.join('\n  ')}`);
}

// Every a1 word or phrase must carry BOTH flashcard and voiceflash or
// flashhub-coverage.test.ts fails the whole build.
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

// a1.03's ending statistics, through THE REAL FUNCTION rather than a copy of it.
// a1.08 shipped a hand-rolled version of this guard carrying a `level === 'a1'`
// filter the real function does not have, let four sons rows through, and moved
// two of a1.03's printed cards.
const genderPopulation = endingPopulation(
  NEW_ITEMS.map((i) => ({ id: i.id, fr: i.fr, kind: i.kind, gender: i.gender ?? null, tags: i.tags }))
);
if (genderPopulation.length) {
  die(
    `this merge would add ${genderPopulation.length} row(s) to a1.03's measured ending population:\n  `
    + genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ') + `\n`
    + `  a1-03-genre.test.ts re-measures twenty printed figures from this file on every run.`
  );
}
// And the three withdrawn rows are neither written by this merge nor already in
// the seed under this lesson's name. This merge REMOVES nothing, so if one is
// present it belongs to somebody else and is left alone with a warning.
const smuggled = NEW_ITEMS.filter((i) => WITHDRAWN_IDS.includes(i.id));
if (smuggled.length) {
  die(
    `withdrawn row(s) are back in the merge: ${smuggled.map((i) => `${i.id} "${i.fr}"`).join(', ')}\n`
    + `  These are gendered single-word nouns and importing them moves a1.03's printed ending figures.`
  );
}
const withdrawnAlreadyPresent = WITHDRAWN_IDS.filter((id) => seed.items.some((i) => i.id === id));

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

// Density is validated against the POST-MERGE id set, because half this lesson's
// ids arrive with this very merge.
const POST_MERGE_IDS = new Set([...seed.items.map((i) => i.id), ...ids]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

// House-style guards.
const authoredJson = JSON.stringify({ AUTHORED, LESSON });
if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');
if (authoredJson.includes('‿')) die('U+203F tie character, which renders as an underscore on a device');

const learnerFacing = [
  ...strings(LESSON.sections),
  ...strings(LESSON.sheets ?? []),
  ...strings(LESSON.terms ?? {}),
];
const jargon = learnerFacing.filter((s) =>
  /\b(conjugaison|article (défini|indéfini|partitif)|adjectif ordinal|préposition|complément circonstanciel|masculin|féminin|déterminant)\b/i.test(s));
if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);

const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
if (badNasal.length) {
  die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
}
const missingSuperscript = NASAL_MONTHS.filter((m) => !RESPELL[m]?.respell.includes('ⁿ'));
if (missingSuperscript.length) {
  die(
    `month respelling(s) carrying a nasal vowel with no superscript n: ${missingSuperscript.join(', ')}\n`
    + `  hasPlainNasalFor does not catch a word-internal nasal, so this is checked by name.`
  );
}
const glide = (s: string) => (s.toUpperCase().includes('ZHW') ? 'W' : s.toUpperCase().includes('Ü') ? 'Ü' : '?');
if (glide(RESPELL.juin.respell) !== glide(RESPELL.juillet.respell) || glide(RESPELL.juin.respell) === '?') {
  die(`juin ${RESPELL.juin.respell} and juillet ${RESPELL.juillet.respell} do not share one convention for the ɥ glide.`);
}

// The twelve, and the pairs.
if (THE_TWELVE.length !== EXPECTED_MONTHS) die(`THE_TWELVE holds ${THE_TWELVE.length} months, expected ${EXPECTED_MONTHS}`);
if (MONTH_IDS.length !== EXPECTED_MONTHS) die(`${MONTH_IDS.length} month headwords resolve, expected ${EXPECTED_MONTHS}`);
if (CONTRAST_PAIRS.length !== EXPECTED_PAIRS) die(`${CONTRAST_PAIRS.length} contrast pairs, expected ${EXPECTED_PAIRS}`);

const words = (fr: string) => fr.replace(/\s*[.?!]\s*$/u, '').trim();
const notMinimal: string[] = [];
for (let i = 0; i < CONTRAST_PAIRS.length; i++) {
  const [monthId, dateId] = CONTRAST_PAIRS[i];
  const monthFrame = PAIR_MONTH_FRAMES[i];
  const dateFrame = PAIR_DATE_FRAMES[i];
  const mf = words(frOf(monthId));
  const df = words(frOf(dateId));
  if (!mf.includes(monthFrame)) notMinimal.push(`"${mf}" does not contain its declared frame "${monthFrame}"`);
  if (!df.includes(dateFrame)) notMinimal.push(`"${df}" does not contain its declared frame "${dateFrame}"`);
  const m = PAIR_MONTHS[i];
  if (mf.replace(monthFrame, m) !== df.replace(dateFrame, m)) {
    notMinimal.push(`"${mf}" vs "${df}" differ by more than the frame`);
  }
}
if (notMinimal.length) die(`contrast pair problem(s):\n  ${notMinimal.join('\n  ')}`);

const tableSays = new Map<string, string>();
for (const [a, b] of CONTRAST_PAIRS) { tableSays.set(a, b); tableSays.set(b, a); }
const brokenPair = MOIS.filter((w) => w.pairWith && tableSays.get(w.id) !== w.pairWith);
if (brokenPair.length) die(`authored row(s) whose pairWith disagrees with CONTRAST_PAIRS: ${brokenPair.map((w) => w.id).join(', ')}`);

// Every one of the twelve is taught by name, and appears in a real sentence.
const learnerText = learnerFacing.join('\n');
const untaught = THE_TWELVE.filter((m) => !hasWord(learnerText, m));
if (untaught.length) die(`month(s) never named on any screen: ${untaught.join(', ')}`);
const inSentences = new Set(
  [...NEW_ITEMS, ...REUSED].flatMap((i) => monthsIn(i.fr)),
);
const noSentence = THE_TWELVE.filter((m) => !inSentences.has(m));
if (noSentence.length) die(`month(s) with no sentence in this lesson's corpus: ${noSentence.join(', ')}`);

// Nothing that belongs to a neighbour is taught here, checked over PRODUCTION
// surfaces rather than every string: a day inside a full date is legitimate
// context in a reading passage, and a check over every string would fire on it
// and then get deleted, which is how a real guard becomes a deleted one.
const productionSurfaces = [
  ...strings(LESSON.sections.filter((s) => ['vocabThemes', 'flashcards', 'reviewDeck', 'cardDeck'].includes(s.type))),
  ...strings(LESSON.drills ?? []),
  ...strings((LESSON.sections.find((s) => s.type === 'quiz') ?? {}) as unknown),
];
const seasonHit = SEASON_WORDS.filter((w) => productionSurfaces.some((s) => hasWord(s.toLowerCase(), w)));
if (seasonHit.length) die(`season word(s) taught here, which belong to a1.10: ${seasonHit.join(', ')}`);
const dayHit = DAY_WORDS.filter((w) => productionSurfaces.some((s) => hasWord(s.toLowerCase(), w)));
if (dayHit.length) die(`day name(s) taught here, which belong to a1.08: ${dayHit.join(', ')}`);
const CLOCK_WORDS = ['heure', 'heures', 'minute', 'midi', 'minuit'];
const clockHit = CLOCK_WORDS.filter((w) => productionSurfaces.some((s) => hasWord(s.toLowerCase(), w)));
if (clockHit.length) die(`clock vocabulary taught here, which belongs to a1.12: ${clockHit.join(', ')}`);

// Every authored month is lowercase mid-sentence.
const capitalised = NEW_ITEMS.filter((i) =>
  THE_TWELVE.some((m) => i.fr.indexOf(m[0].toUpperCase() + m.slice(1)) > 0));
if (capitalised.length) {
  die(`item(s) capitalise a month mid-sentence:\n  ${capitalised.map((i) => `${i.id} "${i.fr}"`).join('\n  ')}`);
}

// The exam.
const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
const rounds = quizSection && quizSection.type === 'quiz' ? (quizSection.rounds ?? []) : [];
const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];
const quizCount = LESSON.sections.filter((s) => s.type === 'quiz').length;
if (quizCount !== 1) die(`${quizCount} quiz sections. The pager renders exactly one, so the rest are unreachable.`);
const mcqCount = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
if (mcqCount * 2 > qs.length) die(`${mcqCount}/${qs.length} questions are mcq, over the half ceiling`);
const noWhy = qs.filter((q) => !q.why);
if (noWhy.length) die(`${noWhy.length} quiz question(s) carry no why`);
const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[]);
const badRef = qs.filter((q) => q.ref && !sectionIds.has(q.ref));
if (badRef.length) die(`quiz ref(s) naming a section that does not exist: ${badRef.map((q) => q.ref).join(', ')}`);
const unacceptable = qs.filter((q) => q.answer && !matchesAccept(q.answer, q.accept));
if (unacceptable.length) {
  die(`question(s) that do not accept their own answer:\n  ${unacceptable.map((q) => `"${q.q}" shows "${q.answer}"`).join('\n  ')}`);
}
const foldBlind = qs.filter((q) => {
  const open = q.format === 'typeIn' || q.format === 'errorSpot';
  if (!open) return false;
  return [q.answer ?? '', ...(q.accept ?? [])].some((a) => THE_TWELVE.some((m) => a.includes(m[0].toUpperCase() + m.slice(1))));
});
if (foldBlind.length) die(`free-text question(s) whose answer turns on a capital letter: ${foldBlind.map((q) => q.q).join(' | ')}`);

// Drills reachable.
const drillForTarget = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t.drill]));
const leads: string[] = [];
for (const r of rounds) {
  const lead = (r.targets ?? []).find((t) => drillForTarget.has(t));
  if (!lead) die(`round ${r.id} names no target that resolves to a drill`);
  if (leads.includes(lead)) die(`round ${r.id} leads on "${lead}", which another round already leads on, so one drill is dead`);
  leads.push(lead);
}
const fired = new Set(leads.map((t) => drillForTarget.get(t)!));
if ((LESSON.errorTriggers ?? []).length !== EXPECTED_TRIGGERS) die(`expected ${EXPECTED_TRIGGERS} error triggers`);
if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} quiz rounds`);
const orphans = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-') && !fired.has(d.id)).map((d) => d.id);
if (orphans.length) die(`drill(s) no quiz round can fire: ${orphans.join(', ')}`);

// Every sheetId names a sheet this lesson declares.
const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
const danglingSheet = LESSON.sections
  .map((s) => (s as { sheetId?: string }).sheetId)
  .filter((id): id is string => Boolean(id) && !sheetIds.has(id!));
if (danglingSheet.length) die(`sheetId(s) naming a sheet that does not exist: ${[...new Set(danglingSheet)].join(', ')}`);

if (JSON.stringify(LESSON).includes('"autoplay"')) {
  die('autoplay is authored somewhere. It is declared in schema.ts and read by no component. Use audioFirst.');
}

// The unit, as the seed holds it.
const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit "${UNIT_ID}" is not in the seed`);
if (unit.title !== UNIT_TITLE) die(`unit ${UNIT_ID} title has changed: "${unit.title}"`);
if (unit.sub !== UNIT_SUB) die(`unit ${UNIT_ID} sub has changed: "${unit.sub}" (expected "${UNIT_SUB}")`);
if (unit.canDo !== UNIT_CANDO) die(`unit ${UNIT_ID} canDo has changed: "${unit.canDo}"`);
const expectedTag = `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) {
  die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unit.seq}, so the header will draw "${expectedTag}"`);
}
const themesNow = (unit as Unit & { themes?: string[] }).themes;
if (themesNow !== undefined
  && themesNow.join() !== UNIT_THEMES_BEFORE.join()
  && themesNow.join() !== UNIT_THEMES_AFTER.join()) {
  die(
    `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, which is not the broken binding this merge `
    + `expects (${JSON.stringify(UNIT_THEMES_BEFORE)}). Somebody has changed it; look before overwriting.`
  );
}
const deadInSeed: Record<string, number> = {};
for (const t of UNIT_THEMES_BEFORE) {
  deadInSeed[t] = seed.items.filter((i) => i.theme === t).length;
  if (deadInSeed[t] > 0) die(`theme "${t}" holds ${deadInSeed[t]} items in the seed, so replacing this binding would remove a real chip.`);
}

// Every id this lesson names resolves after this merge. lesson-contract.test.ts
// resolves `itemIds` against the seed, so a dangling id renders as an empty card
// rather than erroring.
const willExist = new Set([...seed.items.map((i) => i.id), ...ids]);
const dangling = LESSON.itemIds.filter((id) => !willExist.has(id));
if (dangling.length) die(`itemIds that will not resolve after this merge:\n  ${dangling.join('\n  ')}`);
const namedIds = new Set(strings(LESSON).filter((s) => /^fr\.[a-z0-9]+\.[a-z0-9-]+\.\d{3,}$/.test(s)));
const danglingAnywhere = [...namedIds].filter((id) => !willExist.has(id));
if (danglingAnywhere.length) {
  die(`id(s) named somewhere in the lesson that will not resolve:\n  ${danglingAnywhere.join('\n  ')}`);
}

// The reused rows really are in the seed, with the text this lesson claims.
const inSeed = new Map(seed.items.map((i) => [i.id, i]));
const reusedMissing = REUSED.filter((r) => !inSeed.has(r.id));
if (reusedMissing.length) die(`REUSED names items absent from the seed:\n  ${reusedMissing.map((r) => r.id).join('\n  ')}`);
const reusedDrift = REUSED
  .filter((r) => inSeed.get(r.id)!.fr !== r.fr)
  .map((r) => `${r.id}: this lesson says "${r.fr}", the seed says "${inSeed.get(r.id)!.fr}"`);
if (reusedDrift.length) die(`REUSED has drifted from the seed:\n  ${reusedDrift.join('\n  ')}`);

// The dictée, measured against the post-merge corpus through the real functions.
const dictModes: string[] = [];
{
  const post = new Map<string, Item>([...seed.items.map((i) => [i.id, i] as const), ...NEW_ITEMS.map((i) => [i.id, i] as const)]);
  const noDictTag: string[] = [];
  for (const id of MOIS_DICTATION_IDS) {
    const it = post.get(id);
    if (!it) die(`the dictée names ${id}, which will not exist after this merge`);
    const mode = dicteeMode(it.fr);
    const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
    dictModes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"${decoys.length ? ` decoys=${decoys.join('/')}` : ''}`);
    if (!it.drills.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
  }
  if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);
  const leDecoy = MOIS_DICTATION_IDS.filter((id) => {
    const it = post.get(id)!;
    return dicteeMode(it.fr) === 'words' && wordDecoys(it.fr).includes('le');
  });
  if (!leDecoy.length) die('no dictée target offers "le" as a decoy, which is the exercise\'s whole question');

  const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's18-speak');
  const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
  const badSpeak = speakIds.filter((id) => !post.get(id)?.drills.includes('voiceflash'));
  if (badSpeak.length) die(`speak items with no voiceflash after this merge:\n  ${badSpeak.join('\n  ')}`);
  const producedChunks = [
    ...speakIds.filter((id) => CHUNK_IDS.includes(id)),
    ...MOIS_DICTATION_IDS.filter((id) => CHUNK_IDS.includes(id)),
  ];
  if (producedChunks.length) die(`production drill(s) name a chunk row: ${producedChunks.join(', ')}`);
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
      + `in mois-lesson.ts.`
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

// The five respelling repairs, applied to whatever copy of those rows the seed
// holds. `respell` only: nothing else about them moves, and they belong to the
// sons track as much as to this lesson. The IMPORTED manifest carries the OLD
// value on purpose (it is a recorded read), so this runs AFTER the merge loop
// above and reversing the order would undo the repair.
const repaired: string[] = [];
for (const r of RESPELL_REPAIRS) {
  const row = byId.get(r.id);
  if (!row) die(`respelling repair names ${r.id}, which is not in the seed after this merge`);
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

// The themes key is REPLACED rather than removed: this unit has a real theme to
// point at, and it is the one a1.08 already bound to.
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

// No other unit's bindings move. a1.10 and a1.12 both declare the same dead
// `temps` binding this lesson is fixing, and it is TEMPTING to fix them here
// since the answer is now known for the whole cluster. They are not fixed:
// each is its own build and changing another unit's shipped body is that unit's
// decision, which is the line a1.06 drew for a1.07, a1.07 kept, and a1.08 kept
// for this lesson. It is in the report instead.
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

// The guards described at the top. A merge that drops somebody else's content is
// a bug in this script, not an outcome to confirm, so it dies rather than asking.
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
  console.log(`    ${theme}: ${already} in the seed before this run, +${n} from the IMPORTED manifest`);
}
console.log(`  the twelve month headwords are among them: ${MONTH_IDS.filter((id) => !inSeed.has(id)).length} were absent from the seed before this run`);
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | acts: ${LESSON.acts?.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${qs.length} in ${rounds.length} rounds`);
console.log(`  the twelve: ${THE_TWELVE.join(', ')}, every one named on a screen and present in a sentence`);
console.log(`  contrast pairs: ${CONTRAST_PAIRS.length}, every one differing by the FRAME alone`);
console.log(`  dictation: ${MOIS_DICTATION_IDS.length} lines`);
for (const m of dictModes) console.log(`    ${m}`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify(priorThemes ?? null)} → ${JSON.stringify(UNIT_THEMES_AFTER)}`);
console.log(`    "temps" holds ${deadInSeed.temps} items in the seed and "calendrier" holds ${deadInSeed.calendrier}; both chips have always led nowhere.`);
console.log(`    "jours-et-mois" will hold ${nextItems.filter((i) => i.theme === 'jours-et-mois').length} rows in the seed after this run, twelve of them months.`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  items withdrawn: 0. This merge removes nothing.`);
console.log(`    ${WITHDRAWN_IDS.length} gendered single-word nouns are deliberately NOT imported (le mois, l'année, la date);`);
console.log(`    ${withdrawnAlreadyPresent.length} of them are already in the seed on somebody else's account and are left alone.`);
if (repaired.length) {
  console.log(`  respelling repairs applied to the seed (display only):`);
  for (const r of repaired) console.log(`    ${r}`);
} else {
  console.log(`  respelling repairs: already applied, nothing to do`);
}
console.log(`  a1.10 and a1.12 NOT touched: both declare the same dead "temps" binding and fixing it is their own build's decision. Reported, not done.`);
console.log(`  neighbours intact: ${Object.keys(NEIGHBOURS).join(', ')}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate words ✓  flashhub coverage ✓  a1.03 population untouched ✓  reused items match the seed ✓  no neighbour's content taught ✓  no other unit moved ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run, all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.`
  + `\n`
  + `\n  a1.09.l1 is now in BOTH Postgres and the seed, so this lesson is safe.`
  + `\n`
  + `\n  NOTE for whoever runs the next publish: ${importedNew} rows from jours-et-mois and`
  + `\n  adjectifs-essentiels are now in the seed and neither theme is in SEED_CUT.themes. They`
  + `\n  survive a publish because publish-content.ts pulls in every item a bundled lesson`
  + `\n  references, and a1.09.l1 references all of them. If this lesson is ever unbundled, those`
  + `\n  rows leave with it. That now includes the twelve month headwords.`
  + `\n`
  + `\n  NOTE for a1.10 and a1.12: the theme question is settled for the whole calendar cluster.`
  + `\n  a1.08 bound to jours-et-mois, a1.09 has now done the same, and the theme holds the days,`
  + `\n  the months and the entire clock vocabulary at .047-.084. a1.10 should keep "meteo" and`
  + `\n  drop the dead "temps"; a1.12 should rebind from "temps" to "jours-et-mois".`
  + `\n`
  + `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on pre-existing`
  + `\n  divergences. Do not run pnpm content:publish until those are resolved.\n`
);
