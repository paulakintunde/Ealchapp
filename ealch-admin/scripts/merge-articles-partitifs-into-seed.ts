// Merge the authored a1.29 content into the committed seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-articles-partitifs-batch.ts writes to POSTGRES, which is the source of
// truth, and `pnpm content:publish` then regenerates seed.json from it. That is
// the correct pipeline and this script does not replace it.
//
// But the app READS seed.json — src/services/content.ts imports it directly —
// and so do the tests. lesson-contract.test.ts is the gate that checks every
// lesson in the seed, and a1-29-partitifs.test.ts self-skips its seed-parity
// assertions when the lesson is absent. Until the seed carries this lesson it
// is invisible both to a learner and to the gate.
//
//   author-articles-partitifs-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-articles-partitifs-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// ── The thing this script does that no earlier merge did ───────────────────
//
// 27 of the 81 items this lesson names live in `expressions-de-quantite` and
// `au-restaurant`. Both themes are PUBLISHED in Postgres and neither is in
// SEED_CUT.themes, so neither has ever reached seed.json: 0 rows each.
//
// publish-content.ts pulls in every item a bundled lesson references, so those
// ids would arrive at the next publish. A publish is not available (see the
// hazard below), and lesson-contract.test.ts resolves `itemIds` against the
// seed, so without this the lesson lands with 27 dangling ids that render as
// empty cards.
//
// So this merge COPIES those rows in. The source is IMPORTED in
// scripts/data/articles-partitifs-corpus.ts: a recorded read of the database,
// checked back against it by the batch, and a FILE rather than a live query so
// that this script stays reproducible on a machine with no DATABASE_URL. That
// is roughly thirty lines of new machinery and it is the whole reason the
// quantity mission did not have to be authored from nothing.
//
// The alternative was to stay inside the cut and write the quantity sentences
// by hand. It was not taken: `expressions-de-quantite` already holds the four
// quantity words as phrase items with worked sentences behind each, and
// `au-restaurant` already holds the de + le trap set that the fourth mission is
// built on. Re-authoring either would be a second copy of content this project
// already owns and already ships over the air.
//
// ── The hazard this script is careful about (incident 2026-07-31) ──────────
//
// Writing seed.json directly makes git run AHEAD of Postgres. publish-content
// reads Postgres as the source of truth and rewrites seed.json from it, so a
// publish that happens BEFORE the batch has been applied silently deletes this
// lesson from the seed. That is not hypothetical: it is what happened to
// sons.03.l1 (20 sections collapsed to 6) and to five lessons' `overview`, and
// sons.07.l1 survived the same thing only because its source files were intact.
//
// Order: apply to Postgres first, merge into the seed second, publish only when
// both agree.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-articles-partitifs-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-articles-partitifs-into-seed.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  formatIssues, quizQuestions, validateItem, validateLesson, validateUnit,
  type Item, type Lesson, type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import {
  IMPORTED, METALANGUAGE_IDS, PARTITIFS, REUSED, RESPELL, toImportedItem, toItem,
} from './data/articles-partitifs-corpus.ts';
import {
  PARTITIFS_DICTATION_IDS, PARTITIFS_LESSON, PARTITIFS_UNIT_THEME, REFRAME,
} from './data/articles-partitifs-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

/** As in the batch: an EXPLICIT constant, never a figure derived from the
 *  lesson, because a derived count compares the content to itself. */
const REFRAME_APPEARANCES = 10;

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
const AUTHORED = PARTITIFS.map(toItem);
const IMPORTS = IMPORTED.map(toImportedItem);
const NEW_ITEMS = [...AUTHORED, ...IMPORTS];
const LESSON = PARTITIFS_LESSON;
const UNIT_ID = 'a1.29';

// ── Never shrink the seed (incident 2026-08-02) ────────────────────────────
//
// This script merges: it adds its own items and lesson and leaves everything
// else alone. So the item and lesson counts can only ever go UP, and a run that
// would reduce either means the file changed underneath it. A concurrent
// process added sons.07's items to seed.json between two runs of the accents
// merge, and the second run wrote back a state that no longer had them.
//
// Checked against what is on disk RIGHT NOW rather than against a remembered
// count, because the whole failure mode is acting on a stale read.
const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;

// The lessons this merge must not disturb, NAMED rather than counted. A count
// alone would let a swap through: drop one, gain another, same total.
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

// And the two that matter most to THIS lesson, named explicitly rather than
// left to the generic list. a1.04 is the declared prerequisite; a1.11 is the
// lesson this one inherits `des` and the collapse to `de` from, and which the
// prereq chain does NOT name. If either goes missing the track has a hole in
// exactly the place this lesson depends on, and the failure message should say
// which one and why rather than only that a count moved.
const NEIGHBOURS: Record<string, string> = {
  'a1.04.l1': 'the declared prerequisite, and where le for the whole category was taught',
  'a1.11.l1': 'where des and the collapse to de under a negative were taught, and which the prereq chain does not name',
};

// ── Validate before writing anything ────────────────────────────────────────

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in the corpus: ${[...new Set(dupeIds)].join(', ')}`);

// Two entries teaching the same WORD in one theme, computed the way
// flashhub-coverage.test.ts computes it: the article is stripped first, so
// « un café » and « le café » collide. Note `du ` and `de la ` are NOT in that
// strip list, which is why « du pain » and « le pain » do not.
//
// Checked against the WHOLE POST-MERGE SEED rather than only against this
// batch, because the collision that matters is with something already there,
// and because this merge is the first to introduce two entire new themes.
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
// a1/a2 vocab word or phrase lacks flashcard or voiceflash. This merge writes
// 27 rows it did not author, so the check has to happen here rather than being
// assumed of somebody else's theme.
const strandedVocab = NEW_ITEMS.filter(
  (i) => i.kind !== 'sentence'
    && (i.cardType ?? 'vocab') === 'vocab'
    && !(i.drills.includes('flashcard') && i.drills.includes('voiceflash')),
);
if (strandedVocab.length) {
  die(`vocab items missing flashcard or voiceflash, which fails flashhub-coverage over the whole seed:\n  ${strandedVocab.map((i) => `${i.id} ${JSON.stringify(i.drills)}`).join('\n  ')}`);
}

// gender.logic.ts measures a1.03's ending rules over gendered single-word
// nouns, and a1-03-genre.test.ts re-measures them from the SEED on every run.
// a1.11 moved that count by two and took the suite red on a lesson nobody had
// touched. Nothing this lesson authors may enter the population; the imported
// rows are checked too, because a merge that writes them is as responsible for
// the statistic as one that wrote them by hand.
const bare = (fr: string) => fr.replace(/^(?:un|une|le|la|les|des|du|de la)\s+|^l['’]/iu, '').trim();
const genderPopulation = NEW_ITEMS.filter(
  (i) => i.kind === 'word' && (i.gender === 'm' || i.gender === 'f') && !/\s/.test(bare(i.fr)),
);
if (genderPopulation.length) {
  die(
    `this merge would add ${genderPopulation.length} row(s) to a1.03's measured ending population, which can move a ` +
    `statistic printed on two of its cards:\n  ${genderPopulation.map((i) => `${i.id} "${i.fr}"`).join('\n  ')}\n` +
    `  If this is intended, re-measure a1.03, correct the number at its source and re-run its own batch and merge.`
  );
}

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

// The corpus as it will be AFTER this merge: what is in the seed already, plus
// what this batch adds. Passing only the batch ids would fail item-resolution
// on all 41 reused items, which are the whole point of reusing them.
const POST_MERGE_IDS = new Set([...seed.items.map((i) => i.id), ...ids]);

const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

// House-style guards. Checked here too, because this script writes the seed
// directly and a failure found at publish time is a failure found too late.
const authoredJson = JSON.stringify({ AUTHORED, LESSON });
if (authoredJson.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authoredJson)) die('the word "honest" is banned from authored content');

const learnerFacing = [...strings(LESSON.sections), ...strings(LESSON.terms ?? {})];
const jargon = learnerFacing.filter((s) => /\b(article (défini|indéfini|partitif)|partitifs?|partitive|masculin|féminin)\b/i.test(s));
if (jargon.length) die(`grammar vocabulary reached an A1 learner:\n  ${jargon.slice(0, 3).join('\n  ')}`);

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) {
  die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
}

const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
if (badNasal.length) {
  die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
}

const namedIds = new Set(strings(LESSON).filter((s) => /^fr\./.test(s)));
const meta = METALANGUAGE_IDS.filter((id) => namedIds.has(id));
if (meta.length) die(`the lesson names a grammar note as if it were learner French: ${meta.join(', ')}`);

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);

// The Den advertises these three before the learner opens anything, and they
// were correct before this lesson existed. Authoring is not a licence to
// rewrite the promise the lesson was built against.
if (unit.title !== 'The Partitive Articles') die(`unit ${UNIT_ID} title has changed: "${unit.title}"`);
if (unit.sub !== 'Les articles partitifs') die(`unit ${UNIT_ID} sub has changed: "${unit.sub}"`);
if (!unit.canDo?.startsWith('Can ask for an unspecified amount')) die(`unit ${UNIT_ID} canDo has changed: "${unit.canDo}"`);

// The theme rebind, refused if somebody else has already changed it to a third
// thing: two people disagreeing about a binding is a decision, not a merge.
const themesNow = (unit.themes ?? []).join();
if (themesNow !== 'nourriture' && themesNow !== PARTITIFS_UNIT_THEME) {
  die(
    `unit ${UNIT_ID} themes are ${JSON.stringify(unit.themes)}, which is neither the broken binding this merge ` +
    `expects (["nourriture"]) nor the one it writes ([${JSON.stringify(PARTITIFS_UNIT_THEME)}]).`
  );
}
// And the theme it is rebound TO must actually hold a deck, or this has swapped
// one dead chip for another. Measured against the seed, which is the copy the
// Den reads on a first launch with no network.
const inTheme = seed.items.filter((i) => i.theme === PARTITIFS_UNIT_THEME).length;
if (inTheme < 100) {
  die(`theme "${PARTITIFS_UNIT_THEME}" holds ${inTheme} items in the seed, which is not a deck worth pointing a chip at`);
}

// Every id the lesson names must resolve once the merge is done: against this
// batch, or against something already in the seed. An id that dangles renders
// as an empty card rather than erroring. This is the check the 27 imported rows
// exist to satisfy.
const willExist = new Set([...seed.items.map((i) => i.id), ...ids]);
const dangling = LESSON.itemIds.filter((id) => !willExist.has(id));
if (dangling.length) die(`lesson names items that will not exist:\n  ${dangling.join('\n  ')}`);

// REUSED is documented against the database by the batch. Here it is checked
// against the SEED, which is the copy the app and the tests read.
const inSeed = new Map(seed.items.map((i) => [i.id, i]));
const reusedMissing = REUSED.filter((r) => !inSeed.has(r.id));
if (reusedMissing.length) die(`REUSED names items missing from the seed:\n  ${reusedMissing.map((r) => `${r.id} "${r.fr}"`).join('\n  ')}`);
const reusedDrift = REUSED
  .filter((r) => inSeed.get(r.id)!.fr !== r.fr)
  .map((r) => `${r.id}: this lesson says "${r.fr}", the seed says "${inSeed.get(r.id)!.fr}"`);
if (reusedDrift.length) die(`REUSED has drifted from the seed:\n  ${reusedDrift.join('\n  ')}`);

// Dictation lands in word mode, re-checked against the post-merge corpus rather
// than only against what this file authors: four of the six are rows this merge
// imports or reuses, and a shortened `fr` upstream would quietly demote them.
{
  const post = new Map<string, Item>([...seed.items.map((i) => [i.id, i] as const), ...NEW_ITEMS.map((i) => [i.id, i] as const)]);
  const letterMode = PARTITIFS_DICTATION_IDS.filter((id) => {
    const it = post.get(id);
    return it ? dicteeMode(it.fr) !== 'words' : true;
  });
  if (letterMode.length) die(`dictation items that do not assemble from word tiles: ${letterMode.join(', ')}`);
}

// If the seed already has this lesson and it does NOT match what is authored
// here, something has published in between and the two copies have diverged.
const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing && JSON.stringify(existing) !== JSON.stringify(LESSON)) {
  console.warn(
    `\n! seed.json already carries a DIFFERENT ${LESSON.id}` +
    `\n  seed: v${existing.version}, ${existing.sections.length} sections, ${existing.itemIds.length} items` +
    `\n  here: v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items` +
    `\n  Overwriting with the authored copy. If the seed copy was newer, restore it from git first.\n`
  );
  if (existing.version > LESSON.version) {
    die(
      `the seed carries v${existing.version} and this source is v${LESSON.version}. ` +
      `Replacing a higher version with a lower one reads as a rollback in the log and is almost always a mistake. ` +
      `Move the version counter forward in articles-partitifs-lesson.ts.`
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
const nextItems = [...byId.values()];

const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

const nextUnit: Unit = {
  ...unit,
  themes: [PARTITIFS_UNIT_THEME],
  lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])],
};
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

// The guards described above. A merge that drops somebody else's content is a
// bug in this script, not an outcome to confirm, so it dies rather than asking.
const keptItems = nextItems.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const keptLessons = nextLessons.filter((l) => l.id !== LESSON.id).length;
const keptLessonIds = nextLessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
if (keptItems < OTHER_ITEMS || keptLessons < OTHER_LESSONS) {
  die(
    `this merge would DROP content that is not its own:\n` +
    `  other items:   ${OTHER_ITEMS} -> ${keptItems}\n` +
    `  other lessons: ${OTHER_LESSONS} -> ${keptLessons}\n` +
    `  Something rewrote seed.json underneath this run. Re-run it; do not force it.`
  );
}
// Named, not merely counted, so a one-for-one swap cannot pass.
const lost = OTHER_LESSON_IDS.filter((id) => !keptLessonIds.includes(id));
if (lost.length) die(`this merge would drop lesson(s) it does not own: ${lost.join(', ')}`);
// And the two that matter most to THIS lesson, named for their own sake so the
// failure message says why they matter rather than only that one is gone.
for (const [id, why] of Object.entries(NEIGHBOURS)) {
  if (!keptLessonIds.includes(id)) {
    die(`${id} is gone from the seed after this merge. It is ${why}, and it must survive untouched.`);
  }
}

const q = LESSON.sections.find((s) => s.type === 'quiz');
const qs = q && q.type === 'quiz' ? quizQuestions(q) : [];

console.log(`  items: +${added} new (${AUTHORED.length} authored, ${importedNew} imported from outside the seed cut), ${updated} updated (${seed.items.length} → ${nextItems.length})`);
for (const theme of [...new Set(IMPORTS.map((i) => i.theme))]) {
  const n = IMPORTS.filter((i) => i.theme === theme).length;
  const already = seed.items.filter((i) => i.theme === theme).length;
  console.log(`    ${theme}: ${already} in the seed before this run, +${n} copied in from the IMPORTED manifest`);
}
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | acts: ${LESSON.acts?.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${qs.length} in ${q && q.type === 'quiz' ? (q.rounds?.length ?? 0) : 0} rounds`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify(unit.themes ?? null)} → ${JSON.stringify(nextUnit.themes)}   ("${PARTITIFS_UNIT_THEME}" holds ${inTheme} items in the seed; "nourriture" holds 0)`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  neighbours intact: ${Object.keys(NEIGHBOURS).join(', ')}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate words ✓  flashhub coverage ✓  a1.03 population untouched ✓  reused items match the seed ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.` +
  `\n` +
  `\n  a1.29.l1 is now in BOTH Postgres and the seed, so this lesson is safe.` +
  `\n` +
  `\n  NOTE for whoever runs the next publish: ${importedNew} rows from expressions-de-quantite` +
  `\n  and au-restaurant are now in the seed and NEITHER THEME IS IN SEED_CUT.themes. They` +
  `\n  survive a publish because publish-content.ts pulls in every item a bundled lesson` +
  `\n  references, and a1.29.l1 references all of them. If this lesson is ever unbundled,` +
  `\n  those rows leave with it.` +
  `\n` +
  `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on pre-existing` +
  `\n  drift. Do not run pnpm content:publish until that is resolved.\n`
);
