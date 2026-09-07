/* Writes a1.16.l1 "La place de l'adjectif" into ealch-v2/src/content/seed.json.
 *
 *     pnpm tsx scripts/merge-placement-into-seed.ts --dry-run
 *     pnpm tsx scripts/merge-placement-into-seed.ts
 *
 * RUN THE BATCH FIRST. Postgres is the source of truth and seed.json is a cut of
 * it; content:publish regenerates the seed FROM the database, so a lesson that
 * exists only in the seed is deleted the next time anybody publishes. sons.07.l1
 * was written to the seed, erased by somebody else's publish, and survived only
 * because its source files were intact.
 *
 * `adjectifs-essentiels` IS NOT IN SEED_CUT.themes. It holds 636 published rows
 * in Postgres, so every row this lesson names has to be carried in here BY ID or
 * it renders as an empty card on a device. That is why this merge touches far
 * more items than the nine the lesson authors.
 *
 * ── a1.14 IS IN THIS SEED AND IN THIS THEME ───────────────────────────────
 *
 * a1.14 was built, applied and merged while this lesson was being written, into
 * the same theme, and it carried 43 rows of its own into the seed on the way.
 * So this merge runs over a seed that a concurrent build has just changed.
 *
 * NEIGHBOURS below names a1.14.l1 and a1.13.l1 rather than counting lessons,
 * because a count alone lets a one-for-one swap through. Invariant §5.
 *
 * NEVER `git checkout seed.json` to undo something. It discards other authors'
 * uncommitted lessons, and there is at least one other author working in this
 * theme today. Re-run this script. */
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
import { dicteeMode, dicteeWords } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  ALREADY_MET, AUTHORED, CLOSED_SET, DICTEE_PAIRS, NEWLY_ADDED, NOT_REPAIRED, RESPELL,
  RESPELL_REPAIRS, THE_PAIRS, pairFor, toItem,
} from './data/placement-corpus.ts';
import { IMPORTED, REUSED, type ImportedRow } from './data/placement-imported.ts';
import { PLACEMENT_LESSON } from './data/placement-lesson.ts';
import { AGREEMENT_TEACHING, REFRAME, REFRAME_SECTIONS, VOCAB_TEACHING } from './data/placement-terms.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

type Seed = { version: number; items: Item[]; lessons: Lesson[]; units: Unit[] };

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

const WORDCH = /[a-zà-öø-ÿœæ'’-]/i;
function hasPhrase(hay: string, needle: string): boolean {
  const h = hay.toLowerCase();
  const n = needle.toLowerCase();
  let i = h.indexOf(n);
  while (i !== -1) {
    const before = i === 0 ? '' : h[i - 1];
    const after = i + n.length >= h.length ? '' : h[i + n.length];
    if (!WORDCH.test(before) && !WORDCH.test(after)) return true;
    i = h.indexOf(n, i + 1);
  }
  return false;
}

/** An imported manifest row, as an Item. Every field is reproduced exactly as it
 *  was read from Postgres; nothing is normalised on the way through. */
const asItem = (r: ImportedRow): Item => ({
  id: r.id,
  kind: r.kind as Item['kind'],
  level: r.level as Item['level'],
  theme: r.theme,
  fr: r.fr,
  en: r.en,
  ...(r.ipa === null ? {} : { ipa: r.ipa }),
  ...(r.respell === null ? {} : { respell: r.respell }),
  ...(r.notes === null ? {} : { notes: r.notes }),
  ...(r.gender === null ? {} : { gender: r.gender as Item['gender'] }),
  ...(r.cardType === null ? {} : { cardType: r.cardType as Item['cardType'] }),
  tags: r.tags,
  drills: r.drills as Item['drills'],
  version: r.version,
});

const AUTHORED_ITEMS: Item[] = AUTHORED.map(toItem);
const IMPORTED_ITEMS: Item[] = [...IMPORTED, ...REUSED].map(asItem);
const NEW_ITEMS: Item[] = [...AUTHORED_ITEMS, ...IMPORTED_ITEMS];
const LESSON: Lesson = PLACEMENT_LESSON;
const UNIT_ID = 'a1.16';
const THEME = 'adjectifs-essentiels';

/** Named, not counted. Each of these must still be in the seed afterwards, and
 *  a1.14.l1 is here because it landed in this theme two hours before this run. */
const NEIGHBOURS: Record<string, string> = {
  'a1.14.l1': 'the Basic Adjectives lesson, which shipped into this very theme while this one was being written.',
  'a1.13.l1': 'the Colors lesson, which introduced agreement and handed this lesson its subject.',
  'a1.11.l1': 'the Indefinite Articles lesson, which owns un/une/des and the negative de.',
};

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as Seed;
console.log(`  seed version ${seed.version}: ${seed.items.length} items, ${seed.lessons.length} lessons, ${seed.units.length} units`);

const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

/* ── Everything the batch checks, checked again here ──────────────────────
 *
 * Not redundant. The batch writes Postgres and this writes a file, they can be
 * run in either order by somebody who has forgotten which, and a guard that
 * lives in only one of them protects only one of them.                       */

for (const it of AUTHORED_ITEMS) {
  const issues = validateItem(it);
  if (issues.length) die(`item ${it.id} is invalid:\n${formatIssues(issues)}`);
}
const lessonIssues = validateLesson(LESSON);
if (lessonIssues.length) die(`the lesson is invalid:\n${formatIssues(lessonIssues)}`);
const density = validateDensity(LESSON);
if (density.length) die(`density:\n${formatDensity(density)}`);

/* ── The minimal-pair discipline ─────────────────────────────────────────── */

for (const p of THE_PAIRS) {
  const [before, after] = pairFor(p);
  const b = before.fr.replace(/[.]/g, '').split(' ').sort().join(' ');
  const a = after.fr.replace(/[.]/g, '').split(' ').sort().join(' ');
  if (b !== a) die(`the ${p} pair is not minimal:\n  ${before.fr}\n  ${after.fr}`);
  if (before.en === after.en) die(`the ${p} pair carries the same English gloss on both sides`);
}

/* ── No duplicate `fr` within the theme, the way flashhub computes it ─────
 *
 * flashhub-coverage.test.ts treats two rows sharing an fr in one theme as one
 * card served twice. Computed against the POST-MERGE seed, which now contains
 * a1.14's rows as well as this lesson's.                                     */

const stripArticle = (fr: string) =>
  fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des |du |de la |de l')/u, '').trim();

{
  const post = new Map<string, Item>([
    ...seed.items.map((i) => [i.id, i] as const),
    ...NEW_ITEMS.map((i) => [i.id, i] as const),
  ]);
  const byKey = new Map<string, string[]>();
  for (const i of post.values()) {
    if (i.theme !== THEME) continue;
    if (i.kind === 'sentence') continue;   // flashhub keys non-sentence rows
    const k = stripArticle(i.fr);
    byKey.set(k, [...(byKey.get(k) ?? []), i.id]);
  }
  const dupes = [...byKey.entries()].filter(([, ids]) => ids.length > 1)
    .filter(([, ids]) => ids.some((id) => NEW_ITEMS.some((n) => n.id === id)));
  if (dupes.length) {
    die(
      `after this merge, ${THEME} would hold rows sharing an fr, which flashhub serves as one card twice:\n`
      + dupes.map(([k, ids]) => `  "${k}": ${ids.join(', ')}`).join('\n')
    );
  }
}

/* ── a1.03's measured ending population must not move ─────────────────────── */

{
  const before = endingPopulation(seed.items);
  const authoredIds = new Set(AUTHORED_ITEMS.map((i) => i.id));
  const post = [...seed.items.filter((i) => !authoredIds.has(i.id)), ...NEW_ITEMS];
  const after = endingPopulation(post);
  const delta = after.length - before.length;
  if (delta !== 0) {
    die(
      `this merge would move a1.03's measured ending population by ${delta} row(s).\n`
      + `  a1-03-genre.test.ts re-measures twenty printed figures from the seed on every run, and a1.11 broke\n`
      + `  its -e statistic exactly this way. Withdraw the gendered single-word nouns rather than argue.`
    );
  }
}

/* ── Every declared itemId will exist after the merge ─────────────────────── */

const willExist = new Set([...seed.items.map((i) => i.id), ...NEW_ITEMS.map((i) => i.id)]);
const dangling = (LESSON.itemIds ?? []).filter((id) => !willExist.has(id));
if (dangling.length) die(`itemId(s) that will not exist after this merge: ${dangling.join(', ')}`);

/* ── Reused rows must match what the seed already holds ───────────────────── */

{
  const inSeed = new Map(seed.items.map((i) => [i.id, i] as const));
  const mismatch: string[] = [];
  for (const r of IMPORTED_ITEMS) {
    const have = inSeed.get(r.id);
    if (!have) continue;                       // it is being added, not reused
    if (have.fr !== r.fr) mismatch.push(`${r.id}: fr differs ("${r.fr}" vs "${have.fr}")`);
  }
  if (mismatch.length) {
    die(
      `row(s) already in the seed differ from the manifest:\n  ${mismatch.join('\n  ')}\n`
      + `  Somebody has edited them since the manifest was generated. Re-run:\n`
      + `  pnpm tsx scripts/_placement_manifest.ts > scripts/data/placement-imported.ts`
    );
  }
}

/* ── The quiz, the drills, the reframe, the house rules ───────────────────── */

const quizSection = LESSON.sections.find((s) => s.type === 'quiz');
if (!quizSection || quizSection.type !== 'quiz') die('no quiz section');
// quizQuestions takes a SECTION, not a lesson: passing the lesson returns [] and
// every check below then passes on an empty array.
const qs = quizQuestions(quizSection);
if (!qs.length) die('the quiz resolved to zero questions, so nothing below would be checked');
const mcq = qs.filter((q) => q.format === 'mcq').length;
if (mcq * 2 > qs.length) die(`mcq is ${mcq} of ${qs.length}, over the half ceiling`);
const sectionIds = new Set(LESSON.sections.map((s) => (s as { id?: string }).id));
for (const q of qs) {
  if (!q.why) die(`quiz question with no why: ${q.q}`);
  if (!q.ref || !sectionIds.has(q.ref)) die(`quiz ref does not resolve: ${q.q}`);
}
const closed = qs.filter((q) => Array.isArray((q as { opts?: string[] }).opts));
{
  const slots = new Map<number, number>();
  for (const q of closed) {
    const c = (q as { correct?: number }).correct ?? -1;
    slots.set(c, (slots.get(c) ?? 0) + 1);
  }
  for (const [slot, n] of slots) {
    if (n / closed.length > 0.4) die(`authored slot ${slot} holds ${n}/${closed.length} closed questions, over the 40% cap`);
  }
  const POSITIONAL = ['the first', 'the second', 'the third', 'the last one', 'both of the above',
    'none of these', 'none of the above', 'all of the above', 'a and c', 'the one above', 'the top one'];
  for (const q of closed) {
    const opts = (q as { opts: string[] }).opts;
    if (new Set(opts).size !== opts.length) die(`duplicate option in: ${q.q}`);
    for (const o of opts) {
      for (const p of POSITIONAL) {
        if (o.toLowerCase().includes(p)) die(`an option refers to a position, which the runtime shuffle breaks: "${o}"`);
      }
    }
  }
}
for (const q of qs) {
  const answer = (q as { answer?: string }).answer;
  const accept = (q as { accept?: string[] }).accept;
  if (answer && accept && !matchesAccept(answer, accept)) {
    die(`the displayed answer "${answer}" is not accepted by ${JSON.stringify(accept)}`);
  }
}

{
  const triggers = LESSON.errorTriggers ?? [];
  const fired = new Map<string, string[]>();
  for (const r of quizSection.rounds ?? []) {
    const first = (r.targets ?? []).map((t) => triggers.find((x) => x.id === t)).find((t) => t?.drill);
    if (!first?.drill) die(`round ${r.id} fires no drill`);
    fired.set(first.drill, [...(fired.get(first.drill) ?? []), r.id]);
  }
  for (const t of triggers) {
    const rounds = fired.get(t.drill ?? '') ?? [];
    if (rounds.length !== 1) die(`drill ${t.drill} is the first resolving target of ${rounds.length} rounds, not 1`);
  }
}

const reframeSections = LESSON.sections.filter((s) => strings(s).some((t) => t.includes(REFRAME))).length;
if (reframeSections !== REFRAME_SECTIONS) die(`the reframe appears in ${reframeSections} sections, expected ${REFRAME_SECTIONS}`);

/* ── The dictée is a word-ORDER test, not a spelling test ─────────────────── */

const dictation = LESSON.sections.find((s) => (s as { id?: string }).id === 's19-dictation');
if (!dictation || dictation.type !== 'dictation') die('s19-dictation is missing or is not a dictation');
const authoredById = new Map(AUTHORED_ITEMS.map((i) => [i.id, i] as const));
const dictModes: string[] = [];
for (const id of dictation.itemIds ?? []) {
  const it = authoredById.get(id);
  if (!it) die(`the dictée names ${id}, which this lesson does not author`);
  const mode = dicteeMode(it.fr);
  if (mode !== 'words') {
    die(
      `the dictée target ${id} ("${it.fr}") is in ${mode} mode.\n`
      + `  Letters mode asks the learner to spell. Word mode hands them a bank of the sentence's own words\n`
      + `  plus decoys and asks them to assemble it, which is the only thing this lesson teaches.`
    );
  }
  dictModes.push(`${mode.padEnd(7)} ${it.fr}  [${dicteeWords(it.fr).join('|')}]`);
}

/* ── The neighbours keep their lessons ────────────────────────────────────── */

const learnerText = [
  ...strings(LESSON.sections),
  ...strings(LESSON.drills ?? []),
  ...strings(LESSON.sheets ?? []),
  ...strings(LESSON.terms ?? {}),
].join('\n').toLowerCase();

const agreementHit = AGREEMENT_TEACHING.filter((w) => learnerText.includes(w));
if (agreementHit.length) die(`agreement teaching found, which belongs to a1.13: ${agreementHit.join(', ')}`);
const vocabHit = VOCAB_TEACHING.filter((w) => learnerText.includes(w));
if (vocabHit.length) die(`vocabulary teaching found, which belongs to a1.14: ${vocabHit.join(', ')}`);

/* ── The des error appears only where it is marked wrong ──────────────────── */

{
  const DES_ERRORS = ['des beaux', 'des belles', 'des bons', 'des bonnes', 'des petits', 'des jolies', 'des vieux'];
  const wrongHalves = LESSON.sections
    .filter((s) => s.type === 'commonErrors')
    .flatMap((s) => ((s as { errors?: { wrong?: string }[] }).errors ?? []).map((e) => e.wrong ?? ''));
  const rejectable: string[] = [];
  for (const r of quizSection.rounds ?? []) {
    for (const qq of r.questions ?? []) {
      const opts = (qq as { opts?: string[] }).opts;
      const correct = (qq as { correct?: number }).correct;
      if (Array.isArray(opts)) opts.forEach((o, i) => { if (i !== correct) rejectable.push(o); });
    }
  }
  for (const d of LESSON.drills ?? []) {
    const opts = (d as { opts?: string[] }).opts;
    const correct = (d as { correct?: number }).correct;
    if (Array.isArray(opts)) opts.forEach((o, i) => { if (i !== correct) rejectable.push(o); });
  }
  const notLearnerFacing = [
    ...(LESSON.errorTriggers ?? []).map((t) => t.description ?? ''),
    ...(LESSON.audio?.recorded ?? []).map((r) => r.desc ?? ''),
  ];
  const sanctioned = new Set([...wrongHalves, ...rejectable, ...notLearnerFacing]);
  for (const bad of DES_ERRORS) {
    const loose = strings(LESSON).filter((t) => hasPhrase(t, bad) && !sanctioned.has(t));
    if (loose.length) die(`« ${bad} » appears outside a marked-wrong context:\n    ${loose.map((t) => t.slice(0, 90)).join('\n    ')}`);
    if (strings(AUTHORED_ITEMS).some((t) => hasPhrase(t, bad))) die(`« ${bad} » is authored into the corpus`);
  }
  if (!DES_ERRORS.some((bad) => wrongHalves.some((w) => hasPhrase(w, bad)))) {
    die('no commonErrors card shows the des form that the de rule exists to prevent');
  }
}

/* ── House rules and respellings ──────────────────────────────────────────── */

{
  const everything = [...strings(LESSON), ...strings(AUTHORED_ITEMS)];
  if (everything.some((s) => s.includes('—'))) die('em dash on an authored surface');
  const BANNED = ['hon', 'est'].join('');
  if (everything.some((s) => new RegExp(`\\b${BANNED}`, 'i').test(s))) die(`"${BANNED}" on an authored surface`);
  if (everything.some((s) => s.includes('‿'))) die('U+203F tie on an authored surface, which draws as an underscore on a Pixel 6');
  for (const j of ['épithète', 'attribut', 'antéposé', 'attributive', 'post-nominal', 'pre-nominal', 'prenominal']) {
    if (learnerText.includes(j)) die(`grammar jargon on a learner surface: "${j}"`);
  }
  const exempt = new Set(NOT_REPAIRED.map((n) => n.fr));
  for (const [fr, d] of Object.entries(RESPELL)) {
    const res = d.respell.replace(/^\[|\]$/g, '');
    if (hasPlainNasalFor(fr, res) && !exempt.has(fr)) die(`the lesson would display a flagged respelling: ${fr} ${res}`);
  }
}

/* ── imageRef: nothing validates it, so this lesson authors none ──────────── */

{
  const imageRefs = strings(LESSON).filter((s) => /^lessons\/[a-z0-9-]+\/[a-z0-9-]+\.(jpg|png|webp)$/i.test(s));
  if (imageRefs.length) {
    die(
      `this lesson authors ${imageRefs.length} imageRef(s) and NOTHING validates them.\n`
      + `  lessonImage() is a plain lookup in a statically enumerated REG in src/content/lessonImages.ts and an\n`
      + `  unregistered ref draws a blank box. Register them and write the assertion yourself, or remove them.`
    );
  }
}

/* ── The seed edit ────────────────────────────────────────────────────────── */

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);

const byId = new Map(seed.items.map((i) => [i.id, i] as const));
let added = 0;
let updated = 0;
for (const it of NEW_ITEMS) {
  if (byId.has(it.id)) updated += 1; else added += 1;
  byId.set(it.id, it);
}
const nextItems = [...byId.values()];
const nextLessons = [...seed.lessons.filter((l) => l.id !== LESSON.id), LESSON];

const nextUnit: Unit = {
  ...unit,
  themes: [THEME],
  lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])],
} as Unit;
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

// `seed.version` is the OTA SNAPSHOT number and is NOT this merge's counter.
// publish-content.ts derives it as previous + 1 and content.ts compares it
// against the downloaded manifest. Spread the seed and leave it alone.
const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

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

/* ── The report ───────────────────────────────────────────────────────────── */

const themeBefore = seed.items.filter((i) => i.theme === THEME).length;
const themeAfter = nextItems.filter((i) => i.theme === THEME).length;
const existing = seed.lessons.find((l) => l.id === LESSON.id);
const formats = qs.reduce<Record<string, number>>((a, q) => {
  const f = q.format ?? 'mcq';
  a[f] = (a[f] ?? 0) + 1;
  return a;
}, {});

console.log(`  items: +${added} new (${AUTHORED_ITEMS.length} authored, ${added - AUTHORED_ITEMS.length} imported from outside the seed cut), ${updated} updated (${seed.items.length} → ${nextItems.length})`);
console.log(`    theme "${THEME}": ${themeBefore} → ${themeAfter} rows in the seed`);
console.log(`    "${THEME}" is NOT in SEED_CUT.themes, which is why the merge has to carry these BY ID.`);
console.log(`    a1.14 merged into this same theme earlier today; its rows are counted in the before figure.`);
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} in ${(LESSON.acts ?? []).length} acts`);
console.log(`  quiz: ${qs.length} questions in ${(quizSection.rounds ?? []).length} rounds  ${Object.entries(formats).map(([f, n]) => `${f}:${n}`).join('  ')}`);
console.log(`  drills: ${(LESSON.drills ?? []).length}, each the first resolving target of exactly one round`);
console.log(`  closed set: ${CLOSED_SET.length} (${ALREADY_MET.length} already met in a1.14: ${ALREADY_MET.join(', ')})`);
console.log(`              (${NEWLY_ADDED.length} new here: ${NEWLY_ADDED.join(', ')})`);
console.log(`  pairs: ${THE_PAIRS.join(', ')}   dictée pairs: ${DICTEE_PAIRS.join(', ')}`);
console.log(`  dictation: ${(dictation.itemIds ?? []).length} lines, all WORDS mode, which is the mode that tests an order`);
for (const m of dictModes) console.log(`    ${m}`);
console.log(`  reframe: "${REFRAME}" in ${reframeSections} sections`);
console.log(`  respellings: ${Object.keys(RESPELL).length} authored`);
console.log(`    repaired here: ${RESPELL_REPAIRS.map((r) => `${r.fr} ${r.was}→${r.now}`).join(', ')}`);
console.log(`    NOT repaired and correct as stored: ${NOT_REPAIRED.map((n) => `${n.fr} ${n.stored}`).join(', ')}`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify((unit as { themes?: unknown }).themes ?? null)} → ${JSON.stringify([THEME])}`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  items withdrawn: 0. This merge removes nothing.`);
console.log(`  neighbours intact: ${Object.keys(NEIGHBOURS).join(', ')}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate fr in theme ✓  a1.03 population untouched ✓  reused rows match the seed ✓  no neighbour's content taught ✓  no other unit moved ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run, all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.`
  + `\n`
  + `\n  a1.16.l1 is now in BOTH Postgres and the seed, so this lesson is safe.`
  + `\n`
  + `\n  NOTE for whoever runs the next publish: the rows this lesson carries are in`
  + `\n  ${THEME} and couleurs, and NEITHER theme is in SEED_CUT.themes. They survive a`
  + `\n  publish because publish-content.ts pulls in every item a bundled lesson references, and`
  + `\n  a1.16.l1 references all of them. If this lesson is ever unbundled, those rows leave with it.`
  + `\n`
  + `\n  NOTE for a1.15 and a1.17: both declare "famille", which IS in the cut, so neither has to`
  + `\n  do what this lesson and a1.13 both had to do. sheet.a1.16.sides is written to be the thing`
  + `\n  a learner opens during those two lessons and through all of A2.`
  + `\n`
  + `\n  Do NOT run pnpm content:publish on the strength of this. It regenerates seed.json FROM`
  + `\n  Postgres, and pnpm content:parity exits 1 on three pre-existing divergences that are not`
  + `\n  this lesson's (sons.09.l1 seed-only, b2.01.l1 db-only, sons.08.l1 shape drift).\n`
);
