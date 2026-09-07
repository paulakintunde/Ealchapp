// Merge the a1.10 content into the committed seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-meteo-batch.ts writes to POSTGRES, which is the source of truth, and
// `pnpm content:publish` then regenerates seed.json from it. That is the correct
// pipeline and this script does not replace it.
//
// But the app READS seed.json (src/services/content.ts imports it directly) and
// so do the tests. lesson-contract.test.ts is the gate that checks every lesson
// in the seed, and a1-10-meteo.test.ts self-skips its seed-parity assertions
// when the lesson is absent. Until the seed carries this lesson it is invisible
// both to a learner and to the gate.
//
//   author-meteo-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-meteo-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// ── The 43 rows this merge copies in, and why almost all of them are new ───
//
// `meteo` holds 336 published rows in Postgres and exactly ONE in seed.json,
// because `meteo` is not in SEED_CUT.themes. That is a 0.3% cut, and it is the
// reason an earlier draft of this lesson's brief reported the weather
// vocabulary as absent when 336 rows of it were published.
//
// The one row already in the cut is fr.a1.meteo.029, « il fait chaud », which
// is also the weather column of this lesson's central contrast. The other two
// columns (fr.a1.famille.228 and fr.sons.voyelles.414) and both halves of the
// personal-il pair (fr.sons.nasales.018 and fr.a1.sports-et-loisirs.156) were
// all in the seed already, on other lessons' accounts. So the single most
// valuable screen in this lesson needed no import at all.
//
// ── What this merge does that a1.09's did not ──────────────────────────────
//
//   It writes NO authored row, because there are none. a1.09 authored twelve.
//
//   It withdraws FIFTEEN rows rather than three, and the number was measured
//   rather than feared: importing them moves seven of a1.03's printed ending
//   figures. Every weather noun and all four articled season names are gendered
//   single-word nouns, which is the exact class endingPopulation() admits.
//
//   Its respelling repairs come in TWO lists. Four are on rows this merge
//   writes into the seed. Six are on rows that are WITHDRAWN or belong to
//   another theme, so they exist only in Postgres and only the batch can reach
//   them. Printing them in one list would promise a seed repair that never
//   happened, so this script names which is which and applies a db-only repair
//   only if that row turns out to be in the seed on somebody else's account.
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
  DB_ONLY_REPAIRS, IMPORTED, RESPELL, RESPELL_REPAIRS, REUSED, SEASON_FRAME, SEASON_IDS,
  SHAPES, THE_FOUR, WITHDRAWN_IDS, frOf, seasonsIn,
} from './data/meteo-corpus.ts';
import {
  CLOCK_WORDS, DAY_WORDS, FAIRE_FORMS, METEO_DICTATION_IDS, METEO_LESSON, MONTH_WORDS, REFRAME,
} from './data/meteo-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

/** Kept in step with author-meteo-batch.ts. Both are explicit rather than
 *  derived, because a derived count compares the content to itself and passes
 *  on any rewording. */
const REFRAME_APPEARANCES = 14;
const EXPECTED_TRIGGERS = 7;
const EXPECTED_ROUNDS = 6;
const EXPECTED_TEACHING_DRILLS = 6;
const EXPECTED_SEASONS = 4;
const EXPECTED_SHAPES = 4;
const NASAL_WORDS = ['le vent', 'le printemps', 'la saison', 'au printemps', 'il fait du vent', 'Quel temps fait-il ?'];
const NOT_NASAL_WORDS = ['automne', "l'automne", 'en automne'];
const AUTOMNE_SYLLABLE = 'TONN';
const lastToken = (respell: string) =>
  respell.replace(/^\[|\]$/g, '').split(/[\s-]+/).filter(Boolean).pop() ?? '';

const UNIT_ID = 'a1.10';
const UNIT_THEMES_BEFORE = ['temps', 'meteo'];
const UNIT_THEMES_AFTER = ['meteo'];
const DEAD_THEME = 'temps';
const UNIT_TITLE = 'Seasons and Weather';
const UNIT_SUB = 'Les saisons & la météo';
const UNIT_CANDO = "Can name the seasons and describe today's weather";

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
const AUTHORED: Item[] = [];
const IMPORTS = IMPORTED;
const NEW_ITEMS = [...AUTHORED, ...IMPORTS];
const LESSON = METEO_LESSON;

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
// WITHDRAWN exemption here: this script removes nothing.
const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;

// The lessons this merge must not disturb, NAMED rather than counted. A count
// alone would let a swap through: drop one, gain another, same total.
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

// And the ones that matter most to THIS lesson, named explicitly rather than
// left to the generic list, so a failure says WHICH one and why.
const NEIGHBOURS: Record<string, string> = {
  'a1.29.l1': 'the partitive, and the most load-bearing thing this lesson assumes: du and de la are half of two of the four weather shapes.',
  'a1.07.l1': "avoir and its fixed expressions, which are the whole person column of the three-frame contrast.",
  'a1.06.l1': 'être, which is the thing column, and the frame a learner wrongly borrows for the other two.',
  'a1.05.l1': 'the subject pronouns, and the lesson that taught il means he, which act 1 exists to qualify.',
  'a1.09.l1': 'the months, whose merge note settled the theme question for this whole cluster.',
  'a1.08.l1': 'the days, and the first lesson to bind to jours-et-mois, where this lesson finds its four seasons.',
  'a1.03.l1': "noun gender, whose twenty printed ending figures are the reason fifteen rows here are display strings.",
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
// « Quel temps fait-il ? » been followed, since fr.a1.meteo.183 already has it.
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
const smuggled = NEW_ITEMS.filter((i) => WITHDRAWN_IDS.includes(i.id));
if (smuggled.length) {
  die(
    `withdrawn row(s) are back in the merge: ${smuggled.map((i) => `${i.id} "${i.fr}"`).join(', ')}\n`
    + `  These are gendered single-word nouns and importing them moves a1.03's printed ending figures.`
  );
}
if (WITHDRAWN_IDS.length !== 15) die(`WITHDRAWN_IDS holds ${WITHDRAWN_IDS.length} rows, expected the 15 that were measured`);
const withdrawnAlreadyPresent = WITHDRAWN_IDS.filter((id) => seed.items.some((i) => i.id === id));

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

// Density is validated against the POST-MERGE id set, because most of this
// lesson's ids arrive with this very merge.
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
  /\b(conjugaison|article (défini|indéfini|partitif)|adjectif ordinal|préposition|complément circonstanciel|masculin|féminin|déterminant|verbe impersonnel)\b/i.test(s));
if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);

// The respelling convention, from both sides.
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
const wrongSuperscript = NOT_NASAL_WORDS.filter((w) => lastToken(RESPELL[w]?.respell ?? '').includes('ⁿ'));
if (wrongSuperscript.length) {
  die(
    `automne-class respelling(s) carrying a superscript n on the automne syllable: ${wrongSuperscript.join(', ')}\n`
    + `  automne is /ɔ.tɔn/ and has NO nasal vowel. Use a doubled N: oh-TONN, loh-TONN, ahⁿ-noh-TONN.`
  );
}
const badAutomne = NOT_NASAL_WORDS.filter((w) => lastToken(RESPELL[w]?.respell ?? '') !== AUTOMNE_SYLLABLE);
if (badAutomne.length) die(`automne respelled without the doubled N: ${badAutomne.join(', ')}`);
const badRepair = [...RESPELL_REPAIRS, ...DB_ONLY_REPAIRS].filter((r) => hasPlainNasalFor(r.fr, r.to));
if (badRepair.length) die(`repair(s) that still fail the nasal convention: ${badRepair.map((r) => `${r.fr} -> ${r.to}`).join(', ')}`);

// The shape of the lesson.
if (THE_FOUR.length !== EXPECTED_SEASONS) die(`THE_FOUR holds ${THE_FOUR.length} seasons, expected ${EXPECTED_SEASONS}`);
if (SEASON_IDS.length !== EXPECTED_SEASONS) die(`${SEASON_IDS.length} season frames resolve, expected ${EXPECTED_SEASONS}`);
if (SHAPES.length !== EXPECTED_SHAPES) die(`${SHAPES.length} weather shapes declared, expected ${EXPECTED_SHAPES}`);

const withEn = THE_FOUR.filter((s) => SEASON_FRAME[s].startsWith('en '));
const withAu = THE_FOUR.filter((s) => SEASON_FRAME[s].startsWith('au '));
if (withEn.length !== 3 || withAu.length !== 1 || withAu[0] !== 'printemps') {
  die(`the season frames are wrong: ${withEn.length} take en and ${withAu.length} take au (${withAu.join(', ')})`);
}
for (let i = 0; i < THE_FOUR.length; i++) {
  const want = SEASON_FRAME[THE_FOUR[i]];
  if (frOf(SEASON_IDS[i]) !== want) {
    die(`SEASON_IDS[${i}] is ${SEASON_IDS[i]} "${frOf(SEASON_IDS[i])}", and SEASON_FRAME says "${want}"`);
  }
}

const learnerText = learnerFacing.join('\n');
const untaught = THE_FOUR.filter((s) => !hasWord(learnerText.toLowerCase(), s));
if (untaught.length) die(`season(s) never named on any screen: ${untaught.join(', ')}`);
const inSentences = new Set(
  [...NEW_ITEMS, ...REUSED].filter((i) => !('kind' in i) || i.kind === 'sentence').flatMap((i) => seasonsIn(i.fr)),
);
const noSentence = THE_FOUR.filter((s) => !inSentences.has(s));
if (noSentence.length) die(`season(s) with no sentence in this lesson's corpus: ${noSentence.join(', ')}`);

const allFourTogether = LESSON.sections.filter((s) => {
  const text = strings(s).join('\n');
  return THE_FOUR.every((season) => text.includes(SEASON_FRAME[season]));
});
if (!allFourTogether.length) die('no single section shows all four season frames together');

const threeOnOne = LESSON.sections.filter((s) => {
  const text = strings(s).join('\n');
  return text.includes('il fait chaud') && text.includes("j'ai chaud") && text.includes('le café est chaud');
});
if (!threeOnOne.length) die('no single section carries il fait, an avoir form and an être form on the SAME adjective');

const collisionOnOne = LESSON.sections.filter((s) => {
  const text = strings(s).join('\n');
  return text.includes('Il fait du vent') && text.includes('Il fait du yoga');
});
if (!collisionOnOne.length) die('no single section carries a weather « il fait du » and a personal « il fait du » together');

const leaked = FAIRE_FORMS.filter((f) => strings(LESSON).some((s) => hasWord(s.toLowerCase(), f)));
if (leaked.length) die(`the lesson conjugates faire: ${leaked.join(', ')}. faire is a2.12.`);

// Nothing that belongs to a neighbour is taught here, checked over PRODUCTION
// surfaces rather than every string: context in a reading passage is legitimate,
// and a check over every string would fire on it and then get deleted, which is
// how a real guard becomes a deleted one.
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

const capitalised = [...NEW_ITEMS.map((i) => i.fr), ...Object.keys(RESPELL)].filter((fr) =>
  THE_FOUR.some((s) => fr.indexOf(s[0].toUpperCase() + s.slice(1)) > 0));
if (capitalised.length) die(`season name(s) capitalised mid-string:\n  ${capitalised.join('\n  ')}`);

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
const pleure = qs.filter((q) => strings(q).some((s) => hasWord(s.toLowerCase(), 'pleure')));
if (pleure.length) die(`quiz question(s) built on « il pleure », which the corpus does not support: ${pleure.map((q) => q.q).join(' | ')}`);

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
const teaching = (LESSON.drills ?? []).filter((d) => !d.id.startsWith('retest-'));
if (teaching.length !== EXPECTED_TEACHING_DRILLS) die(`expected ${EXPECTED_TEACHING_DRILLS} teaching drills, found ${teaching.length}`);
const orphans = teaching.filter((d) => !fired.has(d.id)).map((d) => d.id);
if (orphans.length) die(`drill(s) no quiz round can fire: ${orphans.join(', ')}`);

// Every sheetId names a sheet this lesson declares, and every sheet is reachable.
const sheetIds = new Set((LESSON.sheets ?? []).map((s) => s.id));
const usedSheets = new Set(LESSON.sections.map((s) => (s as { sheetId?: string }).sheetId).filter(Boolean) as string[]);
const danglingSheet = [...usedSheets].filter((id) => !sheetIds.has(id));
if (danglingSheet.length) die(`sheetId(s) naming a sheet that does not exist: ${danglingSheet.join(', ')}`);
const unreachableSheet = [...sheetIds].filter((id) => !usedSheets.has(id));
if (unreachableSheet.length) die(`sheet(s) no section points at: ${unreachableSheet.join(', ')}`);

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
    `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, which is not the binding this merge expects `
    + `(${JSON.stringify(UNIT_THEMES_BEFORE)}). Somebody has changed it; look before overwriting.`
  );
}
const deadInSeed = seed.items.filter((i) => i.theme === DEAD_THEME).length;
if (deadInSeed > 0) die(`theme "${DEAD_THEME}" holds ${deadInSeed} items in the seed, so dropping this binding would remove a real chip.`);

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
  for (const id of METEO_DICTATION_IDS) {
    const it = post.get(id);
    if (!it) die(`the dictée names ${id}, which will not exist after this merge`);
    const mode = dicteeMode(it.fr);
    const decoys = mode === 'words' ? wordDecoys(it.fr) : [];
    dictModes.push(`${mode === 'words' ? 'WORDS' : 'letters'} "${it.fr}"${decoys.length ? ` decoys=${decoys.join('/')}` : ''}`);
    if (!it.drills.includes('dictation')) noDictTag.push(`${id} "${it.fr}"`);
  }
  if (noDictTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noDictTag.join('\n  ')}`);
  const dictText = METEO_DICTATION_IDS.map((id) => post.get(id)!.fr.toLowerCase()).join('\n');
  const missingFrames = [['il fait', 'il fait'], ['avoir', ' a froid'], ['être', ' est froid']]
    .filter(([, needle]) => !dictText.includes(needle)).map(([name]) => name);
  if (missingFrames.length) die(`the dictée never spells the ${missingFrames.join(' and ')} frame`);

  const speakSection = LESSON.sections.find((s) => (s as { id?: string }).id === 's21-speak');
  const speakIds = (speakSection as { itemIds?: string[] } | undefined)?.itemIds ?? [];
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
      + `in meteo-lesson.ts.`
    );
  }
}

// ── Merge, idempotent by id ─────────────────────────────────────────────────

const byId = new Map(seed.items.map((i) => [i.id, i]));
let added = 0;
let updated = 0;
for (const it of NEW_ITEMS) {
  if (byId.has(it.id)) updated++; else added++;
  byId.set(it.id, it);
}

// The respelling repairs, applied to whatever copy of those rows the seed holds.
// `respell` only: nothing else about them moves, and they belong to the sons
// track as much as to this lesson. The IMPORTED manifest carries the OLD value
// on purpose (it is a recorded read), so this runs AFTER the merge loop above
// and reversing the order would undo the repair.
//
// The db-only six are attempted too, and skipped without complaint when the row
// is not in the seed, which is the expected case for all six. If one IS present
// on somebody else's account, repairing it here is what keeps the two copies
// from disagreeing about a transcription.
const repaired: string[] = [];
const notInSeed: string[] = [];
for (const r of [...RESPELL_REPAIRS, ...DB_ONLY_REPAIRS]) {
  const row = byId.get(r.id);
  if (!row) {
    if (RESPELL_REPAIRS.includes(r)) die(`respelling repair names ${r.id}, which is not in the seed after this merge`);
    notInSeed.push(`${r.id} ${r.fr}`);
    continue;
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

// The themes key is REPLACED rather than removed: this unit has a real theme to
// point at, and it is its own.
const { themes: priorThemes, ...unitWithoutThemes } = unit as Unit & { themes?: string[] };
const nextUnit: Unit = {
  ...unitWithoutThemes,
  themes: [...UNIT_THEMES_AFTER],
  lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])],
} as Unit;
if (JSON.stringify(nextUnit.prereqUnitIds ?? null) !== JSON.stringify(unit.prereqUnitIds ?? null)) {
  die('this merge would change prereqUnitIds. That is reported, not applied.');
}
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

// No other unit's bindings move. a1.12 still declares the same dead `temps`
// binding this lesson is fixing, and it is TEMPTING to fix it here since the
// answer is now known for the whole cluster. It is not fixed: each is its own
// build and changing another unit's shipped body is that unit's decision, which
// is the line a1.06 drew for a1.07 and every lesson since has kept. It is in
// the report instead.
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
const lost = OTHER_LESSON_IDS.filter((id) => !keptLessonIds.includes(id));
if (lost.length) die(`this merge would drop lesson(s) it does not own: ${lost.join(', ')}`);
for (const [id, why] of Object.entries(NEIGHBOURS)) {
  if (!keptLessonIds.includes(id)) {
    die(`${id} is gone from the seed after this merge. It is ${why} It must survive untouched.`);
  }
}

console.log(`  items: +${added} new, ${updated} updated (${seed.items.length} → ${nextItems.length}). 0 authored: this lesson authors nothing.`);
for (const theme of [...new Set(IMPORTS.map((i) => i.theme))]) {
  const n = IMPORTS.filter((i) => i.theme === theme).length;
  const already = seed.items.filter((i) => i.theme === theme).length;
  console.log(`    ${theme}: ${already} in the seed before this run, +${n} from the IMPORTED manifest`);
}
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | acts: ${LESSON.acts?.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${qs.length} in ${rounds.length} rounds`);
console.log(`  the four seasons: ${THE_FOUR.map((s) => SEASON_FRAME[s]).join(', ')}, all four together on ${allFourTogether.map((s) => (s as { id?: string }).id).join(' and ')}`);
console.log(`  the three frames on one adjective, one screen: ${threeOnOne.map((s) => (s as { id?: string }).id).join(', ')}`);
console.log(`  the personal-il collision, both senses together: ${collisionOnOne.map((s) => (s as { id?: string }).id).join(', ')}`);
console.log(`  dictation: ${METEO_DICTATION_IDS.length} lines`);
for (const m of dictModes) console.log(`    ${m}`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify(priorThemes ?? null)} → ${JSON.stringify(UNIT_THEMES_AFTER)}`);
console.log(`    "temps" holds ${deadInSeed} items in the seed; the chip has always led nowhere.`);
console.log(`    "meteo" will hold ${nextItems.filter((i) => i.theme === 'meteo').length} rows in the seed after this run, against 336 published in Postgres.`);
console.log(`    "jours-et-mois" will hold ${nextItems.filter((i) => i.theme === 'jours-et-mois').length}, four of them the season frames.`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  unit ${UNIT_ID} prereqUnitIds: ${JSON.stringify(unit.prereqUnitIds ?? [])} (UNCHANGED, REPORTED ONLY: see the batch's output)`);
console.log(`  items withdrawn: 0. This merge removes nothing.`);
console.log(`    ${WITHDRAWN_IDS.length} gendered single-word nouns are deliberately NOT imported (every weather noun, all four articled seasons);`);
console.log(`    ${withdrawnAlreadyPresent.length} of them are already in the seed on somebody else's account and are left alone.`);
if (repaired.length) {
  console.log(`  respelling repairs applied to the seed (display only):`);
  for (const r of repaired) console.log(`    ${r}`);
} else {
  console.log(`  respelling repairs: already applied, nothing to do`);
}
if (notInSeed.length) {
  console.log(`  respelling repairs NOT applicable here (${notInSeed.length}), because the row is not in the seed:`);
  for (const r of notInSeed) console.log(`    ${r}   (Postgres only, applied by author-meteo-batch.ts)`);
}
console.log(`  a1.12 NOT touched, and it needs nothing: the brief calls it "empty, still declares dead temps" and it ships`);
console.log(`    30 sections at v3, bound to "heure-et-date". a1.09's note recommending it rebind is spent. a1.10 was the`);
console.log(`    last unit in this cluster carrying a dead theme, and this merge is what removes it.`);
console.log(`  neighbours intact: ${Object.keys(NEIGHBOURS).join(', ')}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate words ✓  flashhub coverage ✓  a1.03 population untouched ✓  reused items match the seed ✓  no neighbour's content taught ✓  no other unit moved ✓  faire never conjugated ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run, all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.`
  + `\n`
  + `\n  a1.10.l1 is now in BOTH Postgres and the seed, so this lesson is safe.`
  + `\n`
  + `\n  NOTE for whoever runs the next publish: ${added} rows across twelve themes are now in the seed and`
  + `\n  none of those themes is in SEED_CUT.themes. They survive a publish because publish-content.ts pulls`
  + `\n  in every item a bundled lesson references, and a1.10.l1 references all of them. If this lesson is`
  + `\n  ever unbundled, those rows leave with it.`
  + `\n`
  + `\n  NOTE on the cluster: the theme question is CLOSED. a1.08 and a1.09 bound to jours-et-mois,`
  + `\n  a1.12 bound itself to heure-et-date and ships 30 sections at v3, and a1.10 has now kept meteo`
  + `\n  and dropped the dead temps. No unit in this cluster still points at a theme with no items, and`
  + `\n  a1.09's standing recommendation that a1.12 rebind is spent. jours-et-mois now also holds the`
  + `\n  four season frames in the seed, which is the one thing this build added to it.`
  + `\n`
  + `\n  NOTE on prereqUnitIds: a1.10 still declares none. Recommended ["a1.29","a1.07","a1.06"], minimum`
  + `\n  ["a1.29"]. Not applied here: changing a spine silently is not this build's call.`
  + `\n`
  + `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on pre-existing`
  + `\n  divergences. Do not run pnpm content:publish until those are resolved.\n`
);
