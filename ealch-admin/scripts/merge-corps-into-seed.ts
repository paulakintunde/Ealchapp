/**
 * Merge a1.24 "Le corps" into ealch-v2/src/content/seed.json.
 *
 *   pnpm tsx scripts/merge-corps-into-seed.ts --dry-run
 *   pnpm tsx scripts/merge-corps-into-seed.ts
 *
 * ── Why this script names the lessons it must not disturb ──────────────────
 *
 * §5 of the invariants: a merge script must NAME the lessons it must not
 * disturb rather than counting them, because a count alone lets a one-for-one
 * swap through. Every pre-existing lesson id is captured before the write and
 * compared by NAME afterwards.
 *
 * ── seed.json is not a scratch file ────────────────────────────────────────
 *
 * NEVER `git checkout` it: reverting discards other authors' uncommitted
 * lessons, and re-running the merge scripts is the only safe repair. The
 * canonical formatting is JSON.stringify(x, null, 2), so a whole-file rewrite
 * is safe and a huge diff is usually NOT a reformat.
 *
 * ── `corps` IS inside SEED_CUT.themes ──────────────────────────────────────
 *
 * 313 published, 313 in the seed, measured 2026-08-07. So the seed is a
 * COMPLETE read of this theme and the merge can compare the two directly. That
 * is the opposite of most themes in this project and it is why this script can
 * assert parity rather than tolerating drift: after the merge, every published
 * `corps` row must be in the seed and vice versa.
 *
 * ── Do NOT run content:publish after this ──────────────────────────────────
 *
 * git can run AHEAD of Postgres, and publish then regenerates the seed from the
 * database and destroys the difference silently. That cost real work on
 * 2026-07-31. Diff the DB bodies against git before ever publishing.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  formatIssues, quizQuestions, validateItem, validateLesson,
} from '../../ealch-v2/src/content/schema.ts';
import type { Item, Lesson, Unit } from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, hasPlainNasalFor, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  APPEARANCE, AUTHORED, IMPORTED_IDS, NOT_REPAIRED, REPAIRS_INVISIBLE_TO_CHECKER,
  RESPELL_REPAIRS, THE_FOURTEEN, toItem,
} from './data/corps-corpus.ts';
import { CORPS_ITEM_IDS, CORPS_LESSON, REFRAME } from './data/corps-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const DRY_RUN = process.argv.includes('--dry-run');

const UNIT_ID = 'a1.24';
const UNIT_THEMES_AFTER = ['corps'];
const REFRAME_APPEARANCES = 7;

type Seed = {
  version: number;
  units: Unit[];
  lessons: Lesson[];
  items: Item[];
  scenarios?: unknown[];
  playlists?: unknown[];
  speakPath?: unknown;
};

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

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
const NEW_ITEMS = AUTHORED.map(toItem);
const LESSON = CORPS_LESSON;

/* ── What must survive, BY NAME ───────────────────────────────────────────── */

const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const OTHER_ITEM_IDS = new Set(
  seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).map((i) => i.id),
);
const OTHER_UNIT_IDS = seed.units.filter((u) => u.id !== UNIT_ID).map((u) => u.id).sort();

/* ── Validate before touching the file ────────────────────────────────────── */

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`authored items invalid:\n${formatIssues(itemIssues)}`);

const lessonIssues = validateLesson(LESSON, LESSON.id);
if (lessonIssues.length) die(`lesson invalid:\n${formatIssues(lessonIssues)}`);

const POST_MERGE_IDS = new Set([...seed.items.map((i) => i.id), ...NEW_ITEMS.map((i) => i.id)]);
const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(`density:\n${formatDensity(density)}`);

// Every itemId the lesson declares must resolve AFTER the merge.
const dangling = CORPS_ITEM_IDS.filter((id) => !POST_MERGE_IDS.has(id));
if (dangling.length) die(`lesson declares itemId(s) that resolve to nothing: ${dangling.join(', ')}`);

// The reframe, counted in SECTIONS the way the density validator counts it.
const reframeHits = LESSON.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
if (reframeHits !== REFRAME_APPEARANCES) {
  die(`reframe appears in ${reframeHits} section(s), expected exactly ${REFRAME_APPEARANCES}`);
}

// Free text accepts what it displays, through the REAL matcher.
const qs = quizQuestions(LESSON.sections.find((s) => s.type === 'quiz') as never);
const openBad = qs.filter((q) => q.accept?.length && q.answer && !matchesAccept(q.answer, q.accept));
if (openBad.length) die(`free-text question(s) reject their own displayed answer: ${openBad.map((q) => q.q).join(' | ')}`);

// a1.03's ending population, through the REAL function.
const joiners = endingPopulation(NEW_ITEMS);
if (joiners.length) die(`authored row(s) join a1.03's ending population: ${joiners.map((j) => j.id).join(', ')}`);

/* ── Apply, in memory ─────────────────────────────────────────────────────── */

const next: Seed = JSON.parse(JSON.stringify(seed)) as Seed;

// 1. Items: upsert the authored rows.
for (const it of NEW_ITEMS) {
  const at = next.items.findIndex((i) => i.id === it.id);
  if (at >= 0) next.items[at] = it;
  else next.items.push(it);
}

// 2. Items: apply the respelling repairs, each to exactly one row.
for (const r of RESPELL_REPAIRS) {
  const hits = next.items.filter((i) => i.id === r.id && i.fr === r.fr);
  if (hits.length !== 1) die(`repair ${r.id} "${r.fr}" matches ${hits.length} seed rows`);
  hits[0].respell = r.to;
}

// 3. Lesson: replace or append.
const lat = next.lessons.findIndex((l) => l.id === LESSON.id);
if (lat >= 0) next.lessons[lat] = LESSON;
else next.lessons.push(LESSON);

// 4. Unit: drop the dead theme and link the lesson.
const uat = next.units.findIndex((u) => u.id === UNIT_ID);
if (uat < 0) die(`unit ${UNIT_ID} is not in the seed`);
const unitBefore = JSON.parse(JSON.stringify(next.units[uat])) as Unit;
next.units[uat] = { ...next.units[uat], themes: UNIT_THEMES_AFTER, lessonIds: [LESSON.id] };

/* ── Nothing else moved ───────────────────────────────────────────────────── */

const nowLessonIds = next.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const lost = OTHER_LESSON_IDS.filter((id) => !nowLessonIds.includes(id));
if (lost.length) die(`the merge would DELETE lesson(s): ${lost.join(', ')}`);
const gained = nowLessonIds.filter((id) => !OTHER_LESSON_IDS.includes(id));
if (gained.length) die(`the merge would ADD unexpected lesson(s): ${gained.join(', ')}`);

const nowUnitIds = next.units.filter((u) => u.id !== UNIT_ID).map((u) => u.id).sort();
if (JSON.stringify(nowUnitIds) !== JSON.stringify(OTHER_UNIT_IDS)) die('the merge changed the unit list');

for (const id of OTHER_ITEM_IDS) {
  if (!next.items.some((i) => i.id === id)) die(`the merge would DELETE item ${id}`);
}

// Anything the merge touched that it did not mean to touch.
const repaired = new Set(RESPELL_REPAIRS.map((r) => r.id));
const authored = new Set(NEW_ITEMS.map((i) => i.id));
const before = new Map(seed.items.map((i) => [i.id, JSON.stringify(i)]));
const unexpected = next.items.filter(
  (i) => !authored.has(i.id) && !repaired.has(i.id) && before.get(i.id) !== JSON.stringify(i),
);
if (unexpected.length) die(`the merge changed ${unexpected.length} item(s) it should not have: ${unexpected.slice(0, 5).map((i) => i.id).join(', ')}`);

/* ── Theme parity, which this theme uniquely allows ───────────────────────── */

const corpsRows = next.items.filter((i) => i.theme === 'corps');
const strip = (f: string) => f.toLowerCase().replace(/^(le |la |les |l'|un |une |des |du |de l')/, '').trim();
const byFr = new Map<string, string[]>();
for (const r of corpsRows.filter((r) => r.kind !== 'sentence')) {
  const k = strip(r.fr);
  byFr.set(k, [...(byFr.get(k) ?? []), r.id]);
}
const collide = [...byFr.entries()].filter(([, v]) => v.length > 1);
if (collide.length) {
  die(`duplicate fr inside theme corps after the merge:\n`
    + collide.map(([k, v]) => `    "${k}": ${v.join(' + ')}`).join('\n'));
}

// Every repaired row now passes the shared checker, and the one it cannot see
// is verified by name.
const stillFlagged = corpsRows.filter(
  (r) => r.respell && CORPS_ITEM_IDS.includes(r.id) && hasPlainNasalFor(r.fr, r.respell),
);
if (stillFlagged.length) {
  die(`row(s) this lesson names still fail the nasal checker: ${stillFlagged.map((r) => `${r.id} [${r.respell}]`).join(', ')}`);
}
for (const fr of REPAIRS_INVISIBLE_TO_CHECKER) {
  const row = corpsRows.find((r) => r.fr === fr);
  if (!row?.respell?.includes('ⁿ')) {
    die(`"${fr}" carries a nasal the shared checker cannot see and its repaired respelling has no superscript`);
  }
}
// The row deliberately left alone stays left alone.
for (const id of NOT_REPAIRED) {
  const was = seed.items.find((i) => i.id === id)?.respell;
  const now = next.items.find((i) => i.id === id)?.respell;
  if (was !== now) die(`${id} was deliberately NOT repaired and the merge changed it from "${was}" to "${now}"`);
}

/* ── Report ───────────────────────────────────────────────────────────────── */

const corpsBefore = seed.items.filter((i) => i.theme === 'corps').length;
console.log(`\nseed: version ${seed.version}, ${seed.items.length} items, ${seed.lessons.length} lessons`);
console.log(`mode: ${DRY_RUN ? 'DRY RUN, nothing written' : 'APPLY'}\n`);
console.log(`  items      ${seed.items.length} -> ${next.items.length}  (+${next.items.length - seed.items.length} authored)`);
console.log(`  corps      ${corpsBefore} -> ${corpsRows.length}`);
console.log(`  lessons    ${seed.lessons.length} -> ${next.lessons.length}  (${lat >= 0 ? 'replaced' : 'appended'} ${LESSON.id})`);
console.log(`  repairs    ${RESPELL_REPAIRS.length} respellings rewritten in place`);
console.log(`  unit       themes ${JSON.stringify(unitBefore.themes ?? [])} -> ${JSON.stringify(UNIT_THEMES_AFTER)}`);
console.log(`             lessonIds ${JSON.stringify(unitBefore.lessonIds ?? [])} -> ${JSON.stringify([LESSON.id])}`);
console.log(`\n  UNTOUCHED, BY NAME: ${OTHER_LESSON_IDS.length} other lessons, all present:`);
console.log(`    ${OTHER_LESSON_IDS.join(', ')}`);
console.log(`\n  seed.version is NOT bumped here. It is the OTA snapshot number and publish owns it.`);

if (DRY_RUN) {
  console.log('\n✓ dry run, all valid, nothing written.\n');
  process.exit(0);
}

// Canonical formatting: JSON.stringify(x, null, 2) with a trailing newline.
writeFileSync(SEED, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
console.log(`\n✓ seed.json written: ${LESSON.id} merged, ${NEW_ITEMS.length} items added, ${RESPELL_REPAIRS.length} respellings repaired.`);
console.log(`  Next: cd ../ealch-v2 && npx tsc --noEmit && node --test "src/**/*.test.ts" "supabase/functions/**/*.test.ts"`);
console.log(`  Do NOT run pnpm content:publish.\n`);
