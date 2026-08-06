// Merge the authored a1.07 content into the committed seed.json.
//
// ── Why this exists, and why it is separate from the batch ─────────────────
//
// author-avoir-batch.ts writes to POSTGRES, which is the source of truth, and
// `pnpm content:publish` then regenerates seed.json from it. That is the correct
// pipeline and this script does not replace it.
//
// But the app READS seed.json — src/services/content.ts imports it directly —
// and so do the tests. lesson-contract.test.ts is the gate that checks every
// lesson in the seed, and a1-07-avoir.test.ts self-skips its seed-parity
// assertions when the lesson is absent. Until the seed carries this lesson it is
// invisible both to a learner and to the gate.
//
//   author-avoir-batch.ts    → Postgres   (needs DATABASE_URL)
//   merge-avoir-into-seed.ts → seed.json  (no DB, runs anywhere)
//
// ── The 34 rows this merge copies in ───────────────────────────────────────
//
// 34 of the 90 items this lesson names live in `emotions`,
// `expressions-frequentes`, `mots-essentiels`, `presentation-personnelle`,
// `verbes-essentiels`, `meteo` and `questions`. All seven are PUBLISHED in
// Postgres and none is in SEED_CUT.themes, so between them they have 2 rows in
// seed.json today against 1,181 at a1 in the database.
//
// publish-content.ts pulls in every item a bundled lesson references, so those
// ids would arrive at the next publish. A publish is not available (see the
// hazard below), and lesson-contract.test.ts resolves `itemIds` against the
// seed, so without this the lesson lands with 34 dangling ids that render as
// empty cards.
//
// So this merge COPIES those rows in. The source is IMPORTED in
// scripts/data/avoir-corpus.ts: a recorded read of the database, checked back
// against it by the batch, and a FILE rather than a live query so that this
// script stays reproducible on a machine with no DATABASE_URL. That is a1.29's
// machinery, reused rather than reinvented.
//
// The alternative was to stay inside the cut and author the eleven expressions
// by hand. It was not taken, and the reason is worth recording because the
// BRIEF SAID TO CONSIDER IT and the brief's figures were measured against the
// wrong thing: `expressions-frequentes` .057 to .065 already holds one short,
// clean sentence for each of besoin, envie, peur, raison and tort, and
// `presentation-personnelle` already holds the age question in both registers.
// Re-authoring either would be a second copy of content this project already
// owns and already ships over the air. See the header of avoir-corpus.ts.
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
//   pnpm tsx scripts/merge-avoir-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-avoir-into-seed.ts

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
  AVOIR, FOURTEEN, IMPORTED, METALANGUAGE_IDS, RESPELL, REUSED, THE_ELEVEN, THE_THREE,
  toImportedItem, toItem,
} from './data/avoir-corpus.ts';
import { AVOIR_DICTATION_IDS, AVOIR_LESSON, REFRAME } from './data/avoir-lesson.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const DRY_RUN = process.argv.includes('--dry-run');

/** As in the batch: an EXPLICIT constant, never a figure derived from the
 *  lesson, because a derived count compares the content to itself. */
const REFRAME_APPEARANCES = 10;
const EXPECTED_TRIGGERS = 7;
const EXPECTED_ROUNDS = 7;

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
const AUTHORED = AVOIR.map(toItem);
const IMPORTS = IMPORTED.map(toImportedItem);
const NEW_ITEMS = [...AUTHORED, ...IMPORTS];
const LESSON = AVOIR_LESSON;
const UNIT_ID = 'a1.07';

// ── Never shrink the seed (incident 2026-08-02) ────────────────────────────
//
// This script merges: it adds its own items and lesson and leaves everything
// else alone. So the item and lesson counts can only ever go UP, and a run that
// would reduce either means the file changed underneath it. A concurrent process
// added sons.07's items to seed.json between two runs of the accents merge, and
// the second run wrote back a state that no longer had them.
//
// Checked against what is on disk RIGHT NOW rather than against a remembered
// count, because the whole failure mode is acting on a stale read. THIS LESSON
// IS PARTICULARLY EXPOSED: a1.05 and a1.06 both landed in the last day, and the
// seed changed under a read while the brief for this lesson was being written.
const OTHER_ITEMS = seed.items.filter((i) => !NEW_ITEMS.some((n) => n.id === i.id)).length;
const OTHER_LESSONS = seed.lessons.filter((l) => l.id !== LESSON.id).length;

// The lessons this merge must not disturb, NAMED rather than counted. A count
// alone would let a swap through: drop one, gain another, same total.
const OTHER_LESSON_IDS = seed.lessons.filter((l) => l.id !== LESSON.id).map((l) => l.id).sort();

// And the ones that matter most to THIS lesson, named explicitly rather than
// left to the generic list, so a failure says WHICH one and why rather than only
// that a count moved.
const NEIGHBOURS: Record<string, string> = {
  'a1.05.l1': 'the declared prerequisite, where the nine-to-six collapse this lesson fills in for the second time was taught. It is the newest lesson in the track and its own drill wiring was repaired only when a1.06 landed.',
  'a1.06.l1': 'the other half of this pair. It shipped one day before this lesson, it owns the paradigm shape a1.07 copies, and the prereq chain does NOT name it.',
  'a1.11.l1': 'where un, une and des and their collapse to de under a negative were taught, which is half of s15-negation.',
  'a1.02.l1': 'where the numbers the age rule reuses were taught. Not declared as a prerequisite, and this lesson leans on it.',
};

// ── Validate before writing anything ────────────────────────────────────────

const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
if (itemIssues.length) die(`items invalid:\n${formatIssues(itemIssues)}`);

const ids = NEW_ITEMS.map((i) => i.id);
const dupeIds = ids.filter((id, i) => ids.indexOf(id) !== i);
if (dupeIds.length) die(`duplicate ids in the corpus: ${[...new Set(dupeIds)].join(', ')}`);

// Two entries teaching the same WORD in one theme, computed the way
// flashhub-coverage.test.ts computes it: the article is stripped first, so
// « un café » and « le café » collide.
//
// Checked against the WHOLE POST-MERGE SEED rather than only against this batch,
// because the collision that matters is with something already there, and
// because this merge introduces seven entire new themes.
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
// a1/a2 vocab word or phrase lacks flashcard or voiceflash. This merge writes 34
// rows it did not author, so the check has to happen here rather than being
// assumed of somebody else's theme. The separate-pools exemption is reproduced
// exactly rather than approximated: `fr.a1.emotions.076` carries voiceflash and
// review only, which is that batch's signature and is legitimately exempt.
const SEPARATE_POOLS = new Set(['review+voiceflash', 'flashcard+review']);
const strandedVocab = NEW_ITEMS.filter(
  (i) => i.kind !== 'sentence'
    && (i.cardType ?? 'vocab') === 'vocab'
    && !SEPARATE_POOLS.has([...i.drills].sort().join('+'))
    && !(i.drills.includes('flashcard') && i.drills.includes('voiceflash')),
);
if (strandedVocab.length) {
  die(`vocab items missing flashcard or voiceflash, which fails flashhub-coverage over the whole seed:\n  ${strandedVocab.map((i) => `${i.id} ${JSON.stringify(i.drills)}`).join('\n  ')}`);
}

// gender.logic.ts measures a1.03's ending rules over gendered single-word nouns,
// and a1-03-genre.test.ts re-measures them from the SEED on every run. a1.11
// moved that count by two and took the suite red on a lesson nobody had touched.
// Nothing this lesson authors may enter the population; the imported rows are
// checked too, because a merge that writes them is as responsible for the
// statistic as one that wrote them by hand. Four imports DO carry a gender and
// all four are two-word phrases, so this proves it rather than assuming it.
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
// what this batch adds. Passing only the batch ids would fail item-resolution on
// all 41 reused items, which are the whole point of reusing them.
const POST_MERGE_IDS = new Set([...seed.items.map((i) => i.id), ...ids]);

const density = validateDensity(LESSON, POST_MERGE_IDS);
if (density.length) die(`lesson fails the density validator:\n${formatDensity(density)}`);

// House-style guards. Checked here too, because this script writes the seed
// directly and a failure found at publish time is a failure found too late.
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
  /\b(conjugaison|auxiliaire|participe pass|présent de l'indicatif|verbe irrégulier|article (défini|indéfini|partitif)|masculin|féminin)\b/i.test(s));
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

// No `prompt` on any item this lesson displays. See the note in the batch and
// the full argument in avoir-lesson.ts: `Item.prompt` is read by no component,
// and the conjugation deck renders `fr` and `en` only.
const withPrompt = NEW_ITEMS.filter((i) => i.prompt !== undefined);
if (withPrompt.length) {
  die(`item(s) carry a \`prompt\`, which no lesson component reads:\n  ${withPrompt.map((i) => `${i.id} "${i.prompt}"`).join('\n  ')}`);
}

// The fourteen, and the split that is the shape of the lesson.
if (THE_ELEVEN.length !== 11 || THE_THREE.length !== 3 || FOURTEEN.length !== 14) {
  die(`the fourteen split has moved: ${THE_ELEVEN.length} + ${THE_THREE.length} = ${FOURTEEN.length}`);
}
// Every expression's headword and worked sentence must exist after this merge,
// or a card in the reference sheet points at nothing.
const willExist = new Set([...seed.items.map((i) => i.id), ...ids]);
const danglingExpr = FOURTEEN.flatMap((e) => [e.itemId, e.sentenceId]).filter((id) => !willExist.has(id));
if (danglingExpr.length) die(`expression(s) name items that will not exist: ${[...new Set(danglingExpr)].join(', ')}`);

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

const unit = seed.units.find((u) => u.id === UNIT_ID);
if (!unit) die(`unit ${UNIT_ID} is not in the seed`);

// The Den advertises these three before the learner opens anything, and they
// were correct before this lesson existed. Authoring is not a licence to rewrite
// the promise the lesson was built against.
if (unit.title !== 'The Verb Avoir (To Have)') die(`unit ${UNIT_ID} title has changed: "${unit.title}"`);
if (unit.sub !== 'Le verbe avoir') die(`unit ${UNIT_ID} sub has changed: "${unit.sub}"`);
if (unit.canDo !== 'Can say their age and what they have with avoir') die(`unit ${UNIT_ID} canDo has changed: "${unit.canDo}"`);

// The eyebrow the Den draws is computed from the unit's seq, and `tag` is the
// one place it is authored by hand.
const expectedTag = `A1 · LEÇON ${String(unit.seq).padStart(2, '0')}`;
if (LESSON.tag !== expectedTag) {
  die(`the lesson tag is "${LESSON.tag}" and the unit sits at seq ${unit.seq}, so the header will draw "${expectedTag}"`);
}

// The theme binding, CLEARED rather than rebound or created. Refused if somebody
// else has already changed it to a third thing: two people disagreeing about a
// binding is a decision, not a merge.
const themesNow = (unit as Unit & { themes?: string[] }).themes;
if (themesNow !== undefined && themesNow.join() !== 'identite') {
  die(
    `unit ${UNIT_ID} themes are ${JSON.stringify(themesNow)}, which is not the broken binding this merge expects ` +
    `(["identite"]). Somebody has changed it; look before overwriting.`
  );
}
// And the theme it names really does hold nothing in the copy the Den reads on a
// first launch with no network, so this is a repair rather than a deletion.
const inIdentite = seed.items.filter((i) => i.theme === 'identite').length;
if (inIdentite > 0) {
  die(`an "identite" theme now holds ${inIdentite} items in the seed, so clearing this binding would remove a real chip.`);
}

// Every id the lesson names must resolve once the merge is done: against this
// batch, or against something already in the seed. An id that dangles renders as
// an empty card rather than erroring. This is the check the 34 imported rows
// exist to satisfy.
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

// The dictée lands in LETTER mode, re-checked against the post-merge corpus
// rather than only against what this file authors: three of the seven are rows
// this merge imports or reuses, and a lengthened `fr` upstream would quietly
// promote them into word mode, where the decoy bank holds no verb forms at all.
{
  const post = new Map<string, Item>([...seed.items.map((i) => [i.id, i] as const), ...NEW_ITEMS.map((i) => [i.id, i] as const)]);
  const wordMode: string[] = [];
  const noTag: string[] = [];
  for (const id of AVOIR_DICTATION_IDS) {
    const it = post.get(id);
    if (!it) die(`the dictée names ${id}, which will not exist after this merge`);
    if (dicteeMode(it.fr) !== 'letters') wordMode.push(`${id} "${it.fr}"`);
    if (!it.drills.includes('dictation')) noTag.push(`${id} "${it.fr}"`);
  }
  if (wordMode.length) {
    die(
      `dictation item(s) that fall into WORD mode:\n  ${wordMode.join('\n  ')}\n` +
      `  This lesson chose letter mode deliberately; see the note on DICTATION_IDS in avoir-lesson.ts.`
    );
  }
  if (noTag.length) die(`dictation item(s) with no "dictation" drill:\n  ${noTag.join('\n  ')}`);
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
      `the seed carries v${existing.version} and this source is v${LESSON.version}. Replacing a higher version with ` +
      `a lower one reads as a rollback in the log and is almost always a mistake. Move the version counter forward ` +
      `in avoir-lesson.ts.`
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

// The themes key is REMOVED rather than set to an empty array: an empty array is
// still a declared binding and the Den would render an empty chip row for it.
const { themes: priorThemes, ...unitWithoutThemes } = unit as Unit & { themes?: string[] };
const nextUnit: Unit = {
  ...unitWithoutThemes,
  lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])],
};
if ((nextUnit as { themes?: unknown }).themes !== undefined) {
  die('the themes binding survived the clearing; a1.07 would still declare a theme that does not exist');
}
const unitIssues = validateUnit(nextUnit, nextUnit.id);
if (unitIssues.length) die(`post-state fails validateUnit:\n${formatIssues(unitIssues)}`);
const nextUnits = seed.units.map((u) => (u.id === UNIT_ID ? nextUnit : u));

const next: Seed = { ...seed, items: nextItems, lessons: nextLessons, units: nextUnits };

// No other unit's themes binding moves either. a1.06 cleared its own identical
// binding one day ago and nothing here may touch it, and the other 73 units are
// none of this lesson's business.
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
    `this merge would DROP content that is not its own:\n` +
    `  other items:   ${OTHER_ITEMS} -> ${keptItems}\n` +
    `  other lessons: ${OTHER_LESSONS} -> ${keptLessons}\n` +
    `  Something rewrote seed.json underneath this run. Re-run it; do not force it.`
  );
}
// Named, not merely counted, so a one-for-one swap cannot pass.
const lost = OTHER_LESSON_IDS.filter((id) => !keptLessonIds.includes(id));
if (lost.length) die(`this merge would drop lesson(s) it does not own: ${lost.join(', ')}`);
// And the four that matter most to THIS lesson, named for their own sake so the
// failure message says why they matter rather than only that one is gone.
for (const [id, why] of Object.entries(NEIGHBOURS)) {
  if (!keptLessonIds.includes(id)) {
    die(`${id} is gone from the seed after this merge. It is ${why} It must survive untouched.`);
  }
}

const qs = quizSection && quizSection.type === 'quiz' ? quizQuestions(quizSection) : [];

console.log(`  items: +${added} new (${AUTHORED.length} authored, ${importedNew} imported from outside the seed cut), ${updated} updated (${seed.items.length} → ${nextItems.length})`);
for (const theme of [...new Set(IMPORTS.map((i) => i.theme))]) {
  const n = IMPORTS.filter((i) => i.theme === theme).length;
  const already = seed.items.filter((i) => i.theme === theme).length;
  console.log(`    ${theme}: ${already} in the seed before this run, +${n} copied in from the IMPORTED manifest`);
}
console.log(`  lesson: ${LESSON.id} ${existing ? `REPLACED (v${existing.version} → v${LESSON.version})` : `ADDED (v${LESSON.version})`} (${seed.lessons.length} → ${nextLessons.length})`);
console.log(`  sections: ${LESSON.sections.length} | acts: ${LESSON.acts?.length} | itemIds: ${LESSON.itemIds.length} | quiz: ${qs.length} in ${rounds.length} rounds`);
console.log(`  the fourteen: ${THE_ELEVEN.length} + ${THE_THREE.length}, every headword and worked sentence resolving`);
console.log(`  dictation: ${AVOIR_DICTATION_IDS.length} lines, all in LETTER mode`);
console.log(`  reframe: "${REFRAME}" x${hits}`);
console.log(`  unit ${UNIT_ID} themes:    ${JSON.stringify(priorThemes ?? null)} → cleared   ("identite" holds ${inIdentite} items in the seed; a1.06 cleared the identical binding one day ago)`);
console.log(`  unit ${UNIT_ID} lessonIds: ${JSON.stringify(unit.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);
console.log(`  neighbours intact: ${Object.keys(NEIGHBOURS).join(', ')}`);
console.log(`  untouched lessons: ${keptLessonIds.join(', ')}`);
console.log(`  validators: schema ✓  density ✓  house style ✓  no duplicate words ✓  flashhub coverage ✓  a1.03 population untouched ✓  reused items match the seed ✓  no other unit moved ✓`);

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  `\n✓ seed.json updated.` +
  `\n` +
  `\n  a1.07.l1 is now in BOTH Postgres and the seed, so this lesson is safe.` +
  `\n` +
  `\n  NOTE for whoever runs the next publish: ${importedNew} rows from emotions,` +
  `\n  expressions-frequentes, mots-essentiels, presentation-personnelle, verbes-essentiels,` +
  `\n  meteo and questions are now in the seed and NONE of those themes is in SEED_CUT.themes.` +
  `\n  They survive a publish because publish-content.ts pulls in every item a bundled lesson` +
  `\n  references, and a1.07.l1 references all of them. If this lesson is ever unbundled, those` +
  `\n  rows leave with it.` +
  `\n` +
  `\n  STILL OPEN, and not this lesson's to fix: pnpm content:parity exits 1 on pre-existing` +
  `\n  drift. Do not run pnpm content:publish until that is resolved.\n`
);
