/* Writes a1.15.l1 "La famille" into ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-famille-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-famille-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is the source of truth and seed.json is a cut of
 * it; content:publish regenerates the seed FROM the database, so a lesson that
 * exists only in the seed is deleted the next time anybody publishes. sons.07.l1
 * was written to the seed, erased by somebody else's publish, and survived only
 * because its source files were intact.
 *
 * ── This merge is the OPPOSITE SHAPE from a1.13's, and it is worth saying ──
 *
 * `couleurs` is NOT in SEED_CUT.themes, so a1.13's merge had to carry 30
 * imported rows into the seed or they would have rendered as empty cards.
 *
 * `famille` IS in SEED_CUT.themes. 331 published in Postgres, 331 already in
 * the seed. So all 32 imported rows are already there and this merge writes
 * only the EIGHTEEN AUTHORED rows plus the nine respelling repairs.
 *
 * THE MERGE CHANGING SEED CONTENTS IS EXPECTED HERE, NOT A BUG. Anybody
 * reviewing a diff that touches existing famille rows is looking at the nine
 * respelling repairs, which are listed by id below.
 *
 * NEVER `git checkout seed.json` to undo something. It discards other authors'
 * uncommitted lessons. Re-run this script. */
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
import { endingPopulation, measureEnding } from '../../ealch-v2/src/content/gender.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  AGREEMENT_PHRASES, AUTHORED_IDS, AUTHORED_ROWS, EXTENDED, FILS_PAIR, FORBIDDEN_FORMS,
  IMPORTED, POSSESSIVE_RULE_PHRASES, RESPELL, RESPELL_REPAIRS, THE_TWELVE, WHERE_IT_STOPS,
  reservedPossessivePhrases,
} from './data/famille-corpus.ts';
import {
  BOTH_ORDERS_SECTION, FAMILLE_DICTATION_IDS, FAMILLE_LESSON, FILS_PAIR_SECTION, REFRAME,
  WORD_MODE_TARGET,
} from './data/famille-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

const REFRAME_APPEARANCES = 7;
const EXPECTED_AUTHORED = 18;
const EXPECTED_REPAIRS = 9;
const EXPECTED_SECTIONS = 26;
const EXPECTED_ROUNDS = 6;
const UNIT_ID = 'a1.15';
const UNIT_THEMES = ['famille'];

/** The lessons this merge must NOT disturb, BY NAME rather than by count. A
 *  count alone lets a one-for-one swap through. */
const MUST_NOT_DISTURB = [
  'a1.01.l1', 'a1.02.l1', 'a1.03.l1', 'a1.04.l1', 'a1.05.l1', 'a1.06.l1', 'a1.07.l1',
  'a1.08.l1', 'a1.09.l1', 'a1.10.l1', 'a1.11.l1', 'a1.12.l1', 'a1.13.l1', 'a1.27.l1',
  'a1.28.l1', 'a1.29.l1',
];

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

function productionSurfaces(l: Lesson): string[] {
  const out: string[] = [];
  for (const s of l.sections) {
    const sec = s as Record<string, unknown>;
    for (const k of ['cards', 'rows', 'groups', 'errors', 'turns', 'lines', 'goals', 'points', 'questions']) {
      if (sec[k]) strings(sec[k], out);
    }
    if (sec.beats) strings(sec.beats, out);
    if (sec.text) strings(sec.text, out);
    if (sec.body) strings(sec.body, out);
    if (sec.glossary) strings(sec.glossary, out);
  }
  strings(l.drills ?? [], out);
  strings(l.sheets ?? [], out);
  strings(l.terms ?? {}, out);
  return out;
}

const LESSON: Lesson = FAMILLE_LESSON;
const AUTHORED: Item[] = AUTHORED_ROWS;

type Seed = { version: number; units: Unit[]; lessons: Lesson[]; items: Item[]; [k: string]: unknown };
const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;

console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
const missingProtected = MUST_NOT_DISTURB.filter((id) => !OTHER_LESSON_IDS.includes(id));
if (missingProtected.length) {
  console.warn(`  ⚠  named as must-not-disturb and not in this seed: ${missingProtected.join(', ')}`);
}

/* ── Everything the batch checks, checked again here ──────────────────────
 *
 * Duplicated on purpose. The batch writes Postgres and this writes the seed,
 * they can be run independently and out of order, and a guard that only lives
 * in one of them protects only one of the two copies.                        */

if (AUTHORED.length !== EXPECTED_AUTHORED) die(`expected ${EXPECTED_AUTHORED} authored rows, found ${AUTHORED.length}`);
if (RESPELL_REPAIRS.length !== EXPECTED_REPAIRS) die(`expected ${EXPECTED_REPAIRS} repairs, found ${RESPELL_REPAIRS.length}`);
if (LESSON.sections.length !== EXPECTED_SECTIONS) die(`expected ${EXPECTED_SECTIONS} sections, found ${LESSON.sections.length}`);

for (const it of AUTHORED) {
  const issues = validateItem(it, it.id);
  if (issues.length) die(`${it.id} fails validateItem:\n${formatIssues(issues)}`);
}

const lessonIssues = validateLesson(LESSON);
if (lessonIssues.length) die(`${LESSON.id} fails validateLesson:\n${formatIssues(lessonIssues)}`);

const density = validateDensity(LESSON);
if (density.length) die(`${LESSON.id} fails the density validator:\n${formatDensity(density)}`);

const all = strings(LESSON);
const hits = all.filter((s) => s.includes(REFRAME)).length;
if (hits !== REFRAME_APPEARANCES) die(`the reframe appears ${hits} time(s), the constant says ${REFRAME_APPEARANCES}`);

const emDash = all.filter((s) => s.includes('—'));
if (emDash.length) die(`em dash found in: ${emDash.slice(0, 3).join(' | ')}`);
const honest = all.filter((s) => /honest/i.test(s));
if (honest.length) die(`"honest" found in: ${honest.slice(0, 3).join(' | ')}`);
if (JSON.stringify(LESSON).includes('"autoplay"')) die('autoplay is implemented in no component');
if (JSON.stringify(LESSON).includes('‿')) die('U+203F renders as a low underscore on a Pixel 6');

for (const [fr, d] of Object.entries(RESPELL)) {
  if (hasPlainNasalFor(fr, d.respell)) die(`${fr} "${d.respell}" closes a nasal with a plain n/m`);
}

const surfaces = productionSurfaces(LESSON);
const leaked = reservedPossessivePhrases().filter((p) => surfaces.some((s) => s.toLowerCase().includes(p)));
if (leaked.length) die(`possessive(s) a1.17 owns reached a production surface: ${leaked.join(', ')}`);
const ruleLeak = POSSESSIVE_RULE_PHRASES.filter((p) => surfaces.some((s) => s.toLowerCase().includes(p.toLowerCase())));
if (ruleLeak.length) die(`a1.17's headline rule reached a learner surface: ${ruleLeak.join(', ')}`);
const agreementLeak = AGREEMENT_PHRASES.filter((p) => surfaces.some((s) => s.toLowerCase().includes(p.toLowerCase())));
if (agreementLeak.length) die(`agreement or placement teaching reached a learner surface: ${agreementLeak.join(', ')}`);
const forbidden = FORBIDDEN_FORMS.filter((f) => all.some((s) => s.toLowerCase().includes(f.toLowerCase())));
if (forbidden.length) die(`a form that is not French appears in the lesson: ${forbidden.join(', ')}`);

const imageRefs = strings(LESSON).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
if (imageRefs.length) die(`${imageRefs.length} imageRef(s) authored and nothing validates imageRef`);

const quizzes = LESSON.sections.filter((s) => s.type === 'quiz');
if (quizzes.length !== 1) die(`${quizzes.length} quiz sections; the pager renders exactly one`);
const rounds = (quizzes[0] as unknown as { rounds?: unknown[] }).rounds ?? [];
if (rounds.length !== EXPECTED_ROUNDS) die(`expected ${EXPECTED_ROUNDS} rounds, found ${rounds.length}`);

const qs = quizQuestions(quizzes[0]) as unknown as {
  q: string; format?: string; opts?: string[]; correct?: number | string; accept?: string[];
  answer?: string; why?: string; ref?: string;
}[];
const mcq = qs.filter((q) => (q.format ?? 'mcq') === 'mcq').length;
if (mcq * 2 > qs.length) die(`${mcq} of ${qs.length} questions are mcq, and the ceiling is half`);
if (qs.some((q) => !q.why)) die('a question has no why');
if (qs.some((q) => !q.ref)) die('a question has no ref');
for (const q of qs) {
  const o = q.opts ?? [];
  if (new Set(o).size !== o.length) die(`duplicate option in "${q.q.slice(0, 50)}"`);
}
for (const q of qs.filter((x) => ['typeIn', 'errorSpot', 'speak'].includes(x.format ?? ''))) {
  if (!q.answer || !q.accept || !matchesAccept(q.answer, q.accept)) {
    die(`"${q.q.slice(0, 40)}" does not accept the answer it displays`);
  }
}

/* ── The reframe's layout, and the pairing nobody has shipped ─────────────*/

const pairsSection = LESSON.sections.find((s) => (s as { id?: string }).id === BOTH_ORDERS_SECTION) as
  { type: string; cols?: string[]; rows?: { cells: string[] }[] } | undefined;
if (!pairsSection || pairsSection.type !== 'tapTable') die(`${BOTH_ORDERS_SECTION} must be a tapTable`);
if ((pairsSection.cols ?? []).length !== 2) die(`${BOTH_ORDERS_SECTION} must have exactly two columns`);
for (const row of pairsSection.rows ?? []) {
  if (!row.cells[0].includes(' de ')) die(`${BOTH_ORDERS_SECTION} row "${row.cells[0]}" does not show the de order`);
  if (!row.cells[1].includes("'s")) die(`${BOTH_ORDERS_SECTION} row "${row.cells[1]}" does not show the English order`);
}
const filsStrings = strings(LESSON.sections.find((s) => (s as { id?: string }).id === FILS_PAIR_SECTION));
if (!filsStrings.some((s) => s.includes(FILS_PAIR.word))) die(`${FILS_PAIR_SECTION} does not carry "${FILS_PAIR.word}"`);
if (!filsStrings.some((s) => s.includes(FILS_PAIR.thread))) die(`${FILS_PAIR_SECTION} does not carry "${FILS_PAIR.thread}"`);

/* ── The seed, after ──────────────────────────────────────────────────────*/

const authoredIds = new Set(AUTHORED_IDS);
const keptItems = seed.items.filter((i) => !authoredIds.has(i.id));

// The nine repairs, applied to rows the seed already holds.
const repairById = new Map(RESPELL_REPAIRS.map((r) => [r.id, r] as const));
const repaired: string[] = [];
const repairDrift: string[] = [];
const nextItemsBase = keptItems.map((i) => {
  const r = repairById.get(i.id);
  if (!r) return i;
  if (i.fr !== r.fr) { repairDrift.push(`${r.id}: seed says "${i.fr}", the repair expects "${r.fr}"`); return i; }
  if (i.respell !== r.from && i.respell !== r.to) {
    repairDrift.push(`${r.id}: seed respell is "${i.respell}", expected "${r.from}"`);
    return i;
  }
  if (i.respell !== r.to) repaired.push(`${r.id} ${r.fr}: "${i.respell}" -> "${r.to}"`);
  return { ...i, respell: r.to };
});
if (repairDrift.length) {
  die(`the respelling repairs have drifted from the seed:\n  ${repairDrift.join('\n  ')}\n  Look before overwriting.`);
}
const stillBroken = RESPELL_REPAIRS.filter((r) => !nextItemsBase.some((i) => i.id === r.id && i.respell === r.to));
if (stillBroken.length) die(`repair(s) that did not apply: ${stillBroken.map((r) => r.id).join(', ')}`);

const nextItems = [...nextItemsBase, ...AUTHORED];

// Every id the lesson names must resolve in the seed after the merge.
const byId = new Map(nextItems.map((i) => [i.id, i] as const));
const dead = LESSON.itemIds.filter((id) => !byId.has(id));
if (dead.length) die(`lesson declares items absent from the seed:\n  ${dead.join('\n  ')}`);

// No duplicate fr within a theme, computed the way flashhub-coverage does it.
const norm = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/, '').trim();
const seen = new Map<string, string>();
const dupes: string[] = [];
for (const it of nextItems) {
  if ((it.cardType ?? 'vocab') !== 'vocab' || it.kind === 'sentence') continue;
  const k = `${it.theme}::${norm(it.fr)}`;
  const prior = seen.get(k);
  if (prior) dupes.push(`${prior} vs ${it.id} ("${it.fr}")`);
  else seen.set(k, it.id);
}
if (dupes.length) die(`duplicate words within a theme:\n  ${dupes.slice(0, 5).join('\n  ')}`);

// Every a1/a2 word or phrase must carry BOTH flashcard and voiceflash.
const strandedVocab = AUTHORED.filter(
  (i) => (i.kind === 'word' || i.kind === 'phrase')
    && (!i.drills.includes('flashcard') || !i.drills.includes('voiceflash'))
);
if (strandedVocab.length) {
  die(`a1/a2 vocab items missing flashcard or voiceflash:\n  ${strandedVocab.map((i) => `${i.id} ${JSON.stringify(i.drills)}`).join('\n  ')}`);
}

/* ── a1.03's printed figures, re-measured against the POST-MERGE seed ─────
 *
 * The single most valuable check in this file. Family words are gendered
 * singular nouns and a1-03-genre.test.ts recomputes twenty-seven endings from
 * the seed on every run. a1.11 broke the -e statistic exactly this way.        */

const popBefore = endingPopulation(seed.items).length;
const popAfter = endingPopulation(nextItems).length;
const ENDINGS = ['e', 'age', 'eau', 'ment', 'tion', 'té', 'eur', 'ier', 'isme', 'ette',
  'ance', 'ence', 'oir', 'ie', 'ure', 'ail', 'euse', 'aire', 'in', 'on',
  'ard', 'et', 'is', 'if', 'ude', 'esse', 'al'];
const moved: string[] = [];
for (const e of ENDINGS) {
  const a = measureEnding(seed.items, e);
  const b = measureEnding(nextItems, e);
  const fa = a ? `${a.n}/${a.accuracy}%/${a.predicts}` : 'none';
  const fb = b ? `${b.n}/${b.accuracy}%/${b.predicts}` : 'none';
  if (fa !== fb) moved.push(`-${e}: ${fa} -> ${fb}`);
}
if (moved.length) {
  die(
    `this merge moves a1.03's measured ending figures:\n  ${moved.join('\n  ')}\n`
    + `  a1-03-genre.test.ts compares each of them exactly. Withdraw the row rather than editing a1.03.`
  );
}
if (popAfter !== popBefore) die(`the ending population moved ${popBefore} -> ${popAfter}`);

/* ── The dictée, through the real dicteeMode, against the merged seed ─────*/

let nWords = 0;
for (const id of FAMILLE_DICTATION_IDS) {
  const it = byId.get(id);
  if (!it) die(`the dictée names ${id}, which is not in the merged seed`);
  if (!it.drills.includes('dictation')) die(`${id} "${it.fr}" carries no dictation drill`);
  if (dicteeMode(it.fr) === 'words') nWords += 1;
}
if (nWords !== 1) die(`${nWords} dictée targets land in word mode and exactly one should (${WORD_MODE_TARGET})`);

/* ── The unit ─────────────────────────────────────────────────────────────*/

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);
const themesNow = (unit as Unit & { themes?: string[] }).themes;
if (themesNow !== undefined && themesNow.join() !== UNIT_THEMES.join()) {
  die(`unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, expected ${JSON.stringify(UNIT_THEMES)}. This merge does not rebind the unit.`);
}
const nextUnit: Unit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] } as Unit;
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);

const existing = seed.lessons.find((l) => l.id === LESSON.id);
const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

// `seed.version` is the OTA SNAPSHOT number and is NOT this merge's counter.
// publish-content.ts derives it from content_snapshots as previous + 1, and
// content.ts compares it against the downloaded manifest to decide whether to
// adopt an update. A merge must never hand-bump it.
const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

/* ── Nothing else moved ───────────────────────────────────────────────────*/

const keptLessonIds = nextLessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();
if (keptLessonIds.join() !== OTHER_LESSON_IDS.join()) {
  die(
    `this merge changes the set of other lessons:\n`
    + `  before: ${OTHER_LESSON_IDS.join(', ')}\n  after:  ${keptLessonIds.join(', ')}`
  );
}
const disturbed = MUST_NOT_DISTURB.filter((id) => {
  const a = seed.lessons.find((l) => l.id === id);
  const b = nextLessons.find((l) => l.id === id);
  return a && JSON.stringify(a) !== JSON.stringify(b);
});
if (disturbed.length) die(`lesson(s) this merge must not touch have changed: ${disturbed.join(', ')}`);

for (const before of seed.units) {
  const after = nextUnits.find((u) => u.id === before.id);
  if (before.id === UNIT_ID) continue;
  const ta = JSON.stringify((before as { themes?: unknown }).themes ?? null);
  const tb = JSON.stringify((after as { themes?: unknown } | undefined)?.themes ?? null);
  if (ta !== tb) die(`unit ${before.id} themes changed, and this merge only touches ${UNIT_ID}`);
  if (JSON.stringify(before.lessonIds ?? []) !== JSON.stringify(after?.lessonIds ?? [])) {
    die(`unit ${before.id} lessonIds changed, and this merge only touches ${UNIT_ID}`);
  }
}

// Items outside this lesson's own rows are untouched EXCEPT the nine repairs.
const changedOutside: string[] = [];
for (const before of seed.items) {
  if (authoredIds.has(before.id)) continue;
  const after = byId.get(before.id);
  if (!after) { changedOutside.push(`${before.id} was DROPPED`); continue; }
  if (JSON.stringify(before) !== JSON.stringify(after) && !repairById.has(before.id)) {
    changedOutside.push(`${before.id} changed and is not one of the nine repairs`);
  }
}
if (changedOutside.length) {
  die(`this merge changes item(s) it should not:\n  ${changedOutside.slice(0, 8).join('\n  ')}`);
}

/* ── Report ───────────────────────────────────────────────────────────────*/

const famBefore = seed.items.filter((i) => i.theme === 'famille').length;
const famAfter = nextItems.filter((i) => i.theme === 'famille').length;

console.log(`\n  famille IS in SEED_CUT.themes, so this merge CHANGES seed contents. That is correct, not a bug.`);
console.log(`  theme famille in the seed: ${famBefore} -> ${famAfter}`);
console.log(`  items: ${seed.items.length} -> ${nextItems.length} (+${AUTHORED.length} authored, 0 carried: all 32 imported rows were already here)`);
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify(themesNow ?? null)} (UNCHANGED)`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  seed.version: ${seed.version} (UNCHANGED. It is the OTA snapshot number, not this merge's counter.)`);
console.log(`  a1.03's twenty-seven printed endings: all unchanged, population ${popBefore} -> ${popAfter}`);
console.log(`  untouched lessons (named, not counted): ${keptLessonIds.join(', ')}`);

console.log(`\n  RESPELLING REPAIRS applied to rows the seed already held:`);
if (repaired.length) for (const r of repaired) console.log(`    ${r}`);
else console.log(`    (all nine already carried the corrected value; this merge changed none of them)`);

console.log(`\n  Every taught word on a production surface: ${[...THE_TWELVE, ...EXTENDED, ...WHERE_IT_STOPS.map((w) => w.fr)].length} checked`);
console.log(`  Both orders on one screen: ${BOTH_ORDERS_SECTION}. fils beside fil: ${FILS_PAIR_SECTION}.`);

if (DRY_RUN) {
  console.log('\n✓ dry run, all valid, seed.json not written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(`\n✓ seed.json written. Next: cd ../ealch-v2 && node --test "src/**/*.test.ts"`);
console.log(`  Do NOT run pnpm content:publish without checking git diff on seed.json first.\n`);
