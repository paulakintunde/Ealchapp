// Merge the authored a1.11 content into the committed seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-articles-indefinis-batch.ts writes to POSTGRES, which is the source of
// truth, and `pnpm content:publish` then regenerates seed.json from it. That is
// the correct pipeline and this script does not replace it.
//
// But the app READS seed.json — src/services/content.ts imports it directly —
// and so do the tests. lesson-contract.test.ts is the gate that checks every
// lesson in the seed, and a1-11-indefinis.test.ts self-skips its seed-parity
// assertions when the lesson is absent. Until the seed carries this lesson it
// is invisible both to a learner and to the gate.
//
// So this script does the seed-direct half, deliberately and visibly:
//
//   author-articles-indefinis-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-articles-indefinis-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// ── Why a merge rather than `pnpm content:publish` ─────────────────────────
//
// A publish rewrites seed.json FROM Postgres, and `pnpm content:parity` exits 1
// today for reasons that predate this lesson:
//
//   ✗ SEED ONLY  sons.09.l1   a publish would DELETE it
//   ! DB ONLY    b2.01.l1     in_review, so no learner has it
//   ✗ DRIFT      sons.08.l1   the database is a version ahead of the seed
//
// So publishing now would take sons.09 out of the seed to put a1.11 in. Merging
// adds a1.11 without touching anything else, and nobody has to win.
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
// both agree. This script prints which half it is.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-articles-indefinis-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-articles-indefinis-into-seed.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  formatIssues, quizQuestions, validateItem, validateLesson, validateUnit,
  type Item, type Lesson, type Unit,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity, hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { ARTICLES, RESPELL, REUSED, toItem } from './data/articles-indefinis-corpus.ts';
import { INDEFINIS_LESSON, REFRAME } from './data/articles-indefinis-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

/** As in the batch: an EXPLICIT constant, never a figure derived from the
 *  lesson, because a derived count compares the content to itself. */
const REFRAME_APPEARANCES = 9;

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
const NEW_ITEMS = ARTICLES.map(toItem);
const LESSON = INDEFINIS_LESSON;
const UNIT_ID = 'a1.11';

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
// alone would let a swap through: drop one, gain another, same total. These are
// the ids that exist in the seed today and are not ours.
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

// And the two immediate neighbours, named explicitly rather than left to the
// generic list. a1.03 is this lesson's declared prerequisite and a1.04 is the
// lesson a learner walks out of directly into this one; if either goes missing
// the track has a hole in exactly the place this lesson depends on.
const NEIGHBOURS = ['a1.03.l1', 'a1.04.l1'];

// ── Validate before writing anything ────────────────────────────────────────

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in the corpus: ${[...new Set(dupeIds)].join(', ')}`);

// Two entries teaching the same WORD in one theme, computed the way
// flashhub-coverage.test.ts computes it: the article is stripped first, so
// « un café » and « le café » collide. Checked against the WHOLE POST-MERGE
// SEED rather than only against this batch, because the collision that matters
// is with something already there.
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

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

// The corpus as it will be AFTER this merge: what is in the seed already, plus
// what this batch adds. Passing only the batch ids would fail item-resolution
// on all 37 reused items, which are the whole point of reusing them.
const POST_MERGE_IDS = new Set([...seed.items.map((i) => i.id), ...ids]);

const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

// House-style guards. Checked here too, because this script writes the seed
// directly and a failure found at publish time is a failure found too late.
const authored = JSON.stringify({ NEW_ITEMS, LESSON });
if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

const hits = strings(LESSON).filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) {
  die(`the reframe appears ${hits} times, expected exactly ${REFRAME_APPEARANCES}`);
}

const badNasal = Object.values(RESPELL).filter((d) => hasPlainNasalFor(d.fr, d.respell));
if (badNasal.length) {
  die(`respellings close a nasal vowel with a plain n or m:\n  ${badNasal.map((d) => `${d.fr} ${d.respell}`).join('\n  ')}`);
}

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);

// The Den advertises these three before the learner opens anything, and they
// were correct before this lesson existed. Authoring is not a licence to
// rewrite the promise the lesson was built against.
if (unit.title !== 'The Indefinite Articles') die(`unit ${UNIT_ID} title has changed: "${unit.title}"`);
if (unit.sub !== 'Les articles indéfinis') die(`unit ${UNIT_ID} sub has changed: "${unit.sub}"`);
if (!unit.canDo?.startsWith('Can pick un, une or des')) die(`unit ${UNIT_ID} canDo has changed: "${unit.canDo}"`);

// Every id the lesson names must resolve once the merge is done: against this
// batch, or against something already in the seed. An id that dangles renders
// as an empty card rather than erroring.
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
      `Move the version counter forward in articles-indefinis-lesson.ts.`
    );
  }
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

const nextUnit: Unit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
// A grammar unit that claims one theme misrepresents itself in the Den: this
// lesson's nouns come from six themes and none of them is what it is about.
if (nextUnit.themes !== undefined) die(`unit ${UNIT_ID} has grown a themes binding; see the note in articles-indefinis-lesson.ts`);
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
for (const n of NEIGHBOURS) {
  if (!keptLessonIds.includes(n)) {
    die(
      `${n} is gone from the seed after this merge. It is a1.11's immediate neighbour ` +
      `(${n === 'a1.03.l1' ? 'the declared prerequisite' : 'the lesson a learner arrives from'}) and must survive untouched.`
    );
  }
}

const q = LESSON.sections.find((s) => s.type === 'quiz');
const qs = q && q.type === 'quiz' ? quizQuestions(q) : [];

console.log(`  items: +${added} new, ${updated} updated (${seed.items.length} → ${nextItems.length})`);
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | acts: ${LESSON.acts?.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${qs.length} in ${q && q.type === 'quiz' ? (q.rounds?.length ?? 0) : 0} rounds`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  neighbours intact: ${NEIGHBOURS.join(', ')}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate words ✓  reused items match the seed ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.` +
  `\n` +
  `\n  a1.11.l1 is now in BOTH Postgres and the seed, so this lesson is safe.` +
  `\n` +
  `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on` +
  `\n  sons.09.l1 (seed only) and sons.08.l1 (database a version ahead). Do not run` +
  `\n  pnpm content:publish until those are resolved; it would delete sons.09.l1.\n`
);
