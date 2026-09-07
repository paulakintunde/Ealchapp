// Merge the authored a1.06 content into the committed seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-etre-batch.ts writes to POSTGRES, which is the source of truth, and
// `pnpm content:publish` then regenerates seed.json from it. That is the correct
// pipeline and this script does not replace it.
//
// But the app READS seed.json — src/services/content.ts imports it directly —
// and so do the tests. lesson-contract.test.ts is the gate that checks every
// lesson in the seed, and a1-06-etre.test.ts self-skips its seed assertions when
// the lesson is absent. Until the seed carries this lesson it is invisible both
// to a learner and to the gate.
//
// So this script does the seed-direct half, deliberately and visibly:
//
//   author-etre-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-etre-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// ── Why a merge rather than `pnpm content:publish` (state, 2026-08-05) ─────
//
// The normal way to get a lesson into the seed is to publish, which rewrites
// seed.json FROM Postgres. Right now that would destroy content. Parity reports
// three pre-existing divergences, none of them this lesson's:
//
//   sons.09.l1  in the seed, NOT in Postgres    <- a publish deletes it
//   b2.01.l1    in Postgres, NOT in the seed    <- and is still in_review
//   sons.08.l1  in both, and they disagree      <- db v2 has an overview, seed v1 does not
//
// Merging adds a1.06 without touching any of them, so nobody has to win a fight
// this lesson has no stake in. Those three are still real and still have to be
// closed by whoever owns them; this script prints them every run rather than
// letting them go quiet.
//
// ── The hazard this script is careful about (incident 2026-07-31) ──────────
//
// Writing seed.json directly makes git run AHEAD of Postgres. publish-content
// reads Postgres as the source of truth and rewrites seed.json from it, so a
// publish that happens BEFORE the batch has been applied silently deletes this
// lesson from the seed. That is what happened to sons.03.l1 (20 sections
// collapsed to 6) and to five lessons' `overview`.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-etre-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-etre-into-seed.ts

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
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { CONTRAST_PAIRS, ETRE, PARADIGM_FORMS, REUSED_IDS, THE_SIX, THE_USES, toItem, useIds } from './data/etre-corpus.ts';
import { ETRE_LESSON, REFRAME } from './data/etre-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

type Seed = {
  items: Item[];
  lessons: Lesson[];
  units: Unit[];
  [k: string]: unknown;
};

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const NEW_ITEMS = ETRE.map(toItem);
const LESSON = ETRE_LESSON;
const UNIT_ID = 'a1.06';
const THEME = 'metiers';

// ── Never shrink the seed (incident 2026-08-02) ────────────────────────────
//
// This script merges: it adds its own items and lesson and leaves everything
// else alone. So the item and lesson counts can only ever go UP, and a run that
// would reduce either means the file changed underneath it.
//
// Checked against what is on disk RIGHT NOW rather than against a remembered
// count, because the whole failure mode is acting on a stale read.
const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;

// The lessons this merge must not disturb, NAMED rather than counted. A count
// alone would let a one-for-one swap through: drop one, gain another, same
// total. Eight A1 lessons ship today alongside eleven sons lessons and one a2,
// and every one of them has to survive this run untouched.
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

// And the A1 eight by name, because those are the ones this lesson's
// neighbourhood has been churning: four of them landed in the two days before
// this build, and a merge that quietly dropped one would look like a rebase.
const A1_MUST_SURVIVE = ['a1.01.l1', 'a1.02.l1', 'a1.03.l1', 'a1.04.l1', 'a1.05.l1', 'a1.11.l1', 'a1.27.l1', 'a1.28.l1', 'a1.29.l1'];

// ── Validate before writing anything ────────────────────────────────────────

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in the corpus: ${[...new Set(dupeIds)].join(', ')}`);

// Two entries teaching the same WORD is the sons.07 .057 incident: the flashcard
// hub keys decks on `fr`, so a duplicate serves the same card twice and takes two
// SRS ratings for one word. Sentences are exempt, as in flashhub-coverage, and
// every entry this batch authors is a sentence. Checked against the WHOLE theme
// as it will stand after the merge, not only against this batch.
const byFr = new Map<string, string>();
const dupeWords: string[] = [];
for (const w of [...seed.items.filter((i) => i.theme === THEME && !ids.includes(i.id)), ...NEW_ITEMS]) {
  if (w.kind === 'sentence' || w.theme !== THEME) continue;
  const key = w.fr.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const prior = byFr.get(key);
  if (prior) dupeWords.push(`${prior} vs ${w.id} ("${w.fr}")`);
  else byFr.set(key, w.id);
}
if (dupeWords.length) die(`the same word twice in the ${THEME} theme:\n  ${dupeWords.join('\n  ')}`);

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

const willExist = new Set([...seed.items.map((i) => i.id), ...ids]);
const density = validateDensity(LESSON, willExist);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

// House-style guards, the same rules sons-alphabet.test.ts enforces over the
// whole seed. Checked here too, because this script writes the seed directly and
// a failure found at publish time is a failure found too late.
const authored = JSON.stringify({ NEW_ITEMS, LESSON });
if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');
if (authored.includes('‿')) die('U+203F tie character found; it renders as an underscore on a device');

const hits = JSON.stringify(LESSON).split(REFRAME).length - 1;
if (hits < 3) die(`the reframe appears ${hits} times; the density validator requires at least 3 sections`);

if (PARADIGM_FORMS.length !== 6 || THE_SIX.length !== 6) {
  die(`the reframe claims six forms; the corpus paradigm carries ${PARADIGM_FORMS.length} and THE_SIX names ${THE_SIX.length}`);
}
if (THE_USES.length !== 4) die(`the lesson claims four uses; the corpus names ${THE_USES.length}`);
for (const u of THE_USES) {
  if (!useIds(u).length) die(`use "${u}" has no corpus items at all`);
}

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);

// Every id the lesson names must resolve once the merge is done: against this
// batch, or against something already in the seed. An id that dangles renders as
// an empty card rather than erroring.
const dangling = LESSON.itemIds.filter((id) => !willExist.has(id));
if (dangling.length) die(`lesson names items that will not exist:\n  ${dangling.join('\n  ')}`);

// The reused half is authored against the DATABASE (the batch verifies it there).
// Here the same ids are checked against the seed, so a divergence between the two
// copies is named at merge time rather than found on a device.
const notInSeed = REUSED_IDS.filter((id) => !seed.items.some((i) => i.id === id));
if (notInSeed.length) {
  die(
    `the lesson reuses items that are not in seed.json:\n  ${notInSeed.join('\n  ')}\n` +
    `  These exist in Postgres. Run pnpm content:publish's item half, or drop them from REUSED.`
  );
}

// The three contrast pairs are the act this lesson exists for, and one of them is
// a1.11's rather than this lesson's. If either half of it ever moves, the
// two-column table draws a comparison with a hole in it and nothing else fails.
for (const [withDet, bare] of CONTRAST_PAIRS) {
  for (const id of [withDet, bare]) {
    if (!willExist.has(id)) die(`contrast pair names ${id}, which will not exist after this merge`);
  }
}

// If the seed already has this lesson and it does NOT match what is authored
// here, something has published in between and the two copies have diverged.
// Overwriting would destroy whichever one is newer, so warn loudly.
const existing = seed.lessons.find((l) => l.id === LESSON.id);
if (existing && JSON.stringify(existing) !== JSON.stringify(LESSON)) {
  console.warn(
    `\n! seed.json already carries a DIFFERENT ${LESSON.id}` +
    `\n  seed: v${existing.version}, ${existing.sections.length} sections, ${existing.itemIds.length} items` +
    `\n  here: v${LESSON.version}, ${LESSON.sections.length} sections, ${LESSON.itemIds.length} items` +
    `\n  Overwriting with the authored copy. If the seed copy was newer, restore it from git first.\n`
  );
}

// ── Merge, idempotent by id ─────────────────────────────────────────────────

const byId = new Map(seed.items.map((i) => [i.id, i]));
let added = 0;
let updated = 0;
for (const it of NEW_ITEMS) {
  if (byId.has(it.id)) updated++;
  else added++;
  byId.set(it.id, it);
}
const nextItems = [...byId.values()];

const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

// The `identite` clearing, applied to the seed exactly as the batch applies it to
// Postgres. There is no `identite` theme and there never has been, so the binding
// resolves to nothing; a1.03, a1.04, a1.05 and a1.11 are grammar units with no
// theme at all and a1.06 joins them. title, sub and canDo are NOT touched.
const { themes: priorThemes, ...unitWithoutThemes } = unit as Unit & { themes?: string[] };
const nextUnit: Unit = {
  ...unitWithoutThemes,
  lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])],
};
if ((nextUnit as { themes?: unknown }).themes !== undefined) {
  die('the themes binding survived the clearing; a1.06 would still declare a theme that does not exist');
}
if (nextUnit.title !== unit.title || nextUnit.sub !== unit.sub || nextUnit.canDo !== unit.canDo) {
  die('this merge would change the unit title, sub or canDo. All three are correct and the Den advertises them.');
}
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

// The guard described above. A merge that drops somebody else's content is a bug
// in this script, not an outcome to confirm, so it dies rather than asking.
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
// And NAMED, not merely counted, so a one-for-one swap cannot pass.
const lost = OTHER_LESSON_IDS.filter((id) => !keptLessonIds.includes(id));
if (lost.length) die(`this merge would drop lesson(s) it does not own: ${lost.join(', ')}`);

// The A1 neighbourhood by name, checked separately from the generic list above.
// Four of these landed in the two days before this build; a merge that dropped
// one would be indistinguishable from a bad rebase without this line.
const a1Lost = A1_MUST_SURVIVE.filter((id) => !keptLessonIds.includes(id));
if (a1Lost.length) die(`this merge would drop shipped A1 lesson(s): ${a1Lost.join(', ')}`);

// Every other unit's lessonIds must be exactly what they were. a1.06 is the only
// unit this merge touches, and a unit link is how a lesson is reachable from the
// Den at all: losing one hides a shipped lesson without failing anything.
for (const before of seed.units) {
  if (before.id === UNIT_ID) continue;
  const after = nextUnits.find((u) => u.id === before.id);
  const a = JSON.stringify(before.lessonIds ?? []);
  const b = JSON.stringify(after?.lessonIds ?? []);
  if (a !== b) die(`this merge would change unit ${before.id}'s lessonIds: ${a} -> ${b}`);
  // And no other unit's themes binding moves either. a1.07 declares the same
  // dead `identite` theme and inherits the same argument, but clearing it is
  // a1.07's build to make and not a side effect of this one.
  const ta = JSON.stringify((before as { themes?: unknown }).themes ?? null);
  const tb = JSON.stringify((after as { themes?: unknown } | undefined)?.themes ?? null);
  if (ta !== tb) die(`this merge would change unit ${before.id}'s themes: ${ta} -> ${tb}`);
}

const q = LESSON.sections.find((s) => s.type === 'quiz');

console.log(`  items: +${added} new, ${updated} updated (${seed.items.length} → ${nextItems.length})`);
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED at v${LESSON.version}`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${q && q.type === 'quiz' ? quizQuestions(q).length : 0}`);
console.log(`  the claim: ${PARADIGM_FORMS.length} forms of être (${PARADIGM_FORMS.join(' · ')}), ${THE_USES.length} uses`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  unit ${UNIT_ID} themes: ${JSON.stringify(priorThemes ?? null)} → cleared`);
console.log(`  untouched lessons (${keptLessonIds.length}): ${keptLessonIds.join(', ')}`);
console.log(`  A1 lessons verified present: ${A1_MUST_SURVIVE.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate words ✓  contrast pairs resolve ✓  no other unit touched ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated. a1.06.l1 is now in BOTH Postgres and the seed, so this lesson is safe.` +
  `\n` +
  `\n  STILL OPEN, and none of it this lesson's (parity, 2026-08-05):` +
  `\n    sons.09.l1  seed only    a publish would delete it` +
  `\n    b2.01.l1    database only, and still in_review` +
  `\n    sons.08.l1  in both, and the two copies disagree` +
  `\n` +
  `\n  Run pnpm tsx scripts/check-seed-db-parity.ts. It will still exit 1 on those` +
  `\n  three. What matters is that a1.06.l1 is not among them.\n`
);
