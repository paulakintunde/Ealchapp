// Apply the role-play alternatives to seed.json.
//
// Reads scripts/data/scenario-alts.ts and writes `userEn` and `alts` onto the
// matching turns of each lesson's `scenario` section. Idempotent: running it
// twice produces the same file.
//
// NOT a publish. It touches ealch-v2/src/content/seed.json and nothing else.
// The database is a separate step and deliberately not done here — seed.json
// routinely runs AHEAD of Postgres during authoring, and a script that wrote
// both would make it impossible to tell which of the two was the source of a
// later disagreement. Apply here, verify on a device, then push to the
// database with the normal lesson upsert path.
//
// SAFETY
//
//   · Every turn is matched by INDEX and then checked against the model line
//     recorded in the data file. A mismatch aborts the whole run rather than
//     attaching answers to a re-authored turn, which would be silent on review
//     and wrong on a device.
//   · Nothing is written until every lesson has validated. A partially
//     applied batch is worse than an unapplied one.
//   · The section is re-validated with the app's own validateLessonSection
//     after patching, so a malformed alternative dies here and not in a
//     learner's hands.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/apply-scenario-alts.ts --dry-run
//   pnpm tsx scripts/apply-scenario-alts.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateLesson } from '../../ealch-v2/src/content/schema.ts';
import { SCENARIO_ALTS, type TurnAlt } from './data/scenario-alts.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = resolve(here, '../../ealch-v2/src/content/seed.json');
const dryRun = process.argv.includes('--dry-run');

type Turn = { ai: string; en: string; user: string; userEn?: string; alts?: { fr: string; en: string }[] };
type Section = { type: string; title?: string; turns?: Turn[] };
type Lesson = { id: string; sections?: Section[] };

/** Casing/accent/punctuation-insensitive compare — the same fold the schema
 *  validator uses. A curly apostrophe must not read as a re-authored line. */
const fold = (s: string): string =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

/**
 * Match the apostrophe the lesson already uses.
 *
 * The a1 lessons were authored with the typographic apostrophe (’) and the
 * sons lessons with the straight one ('). Mixing both inside a single
 * conversation is visible on a device, so new lines adopt whichever the
 * surrounding turns use rather than imposing one.
 */
function apostropheOf(turns: Turn[]): "'" | '’' {
  const text = turns.map((t) => `${t.ai}${t.user}`).join('');
  const curly = (text.match(/’/g) ?? []).length;
  const straight = (text.match(/'/g) ?? []).length;
  return curly > straight ? '’' : "'";
}

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as { lessons?: Lesson[] };
const lessons = seed.lessons ?? [];

const problems: string[] = [];
const planned: { lessonId: string; title: string; turns: number; alts: number; mark: "'" | '’' }[] = [];

for (const [lessonId, rows] of Object.entries(SCENARIO_ALTS)) {
  const lesson = lessons.find((l) => l.id === lessonId);
  if (!lesson) {
    problems.push(`${lessonId}: no such lesson in seed.json`);
    continue;
  }
  const section = (lesson.sections ?? []).find((s) => s.type === 'scenario');
  if (!section?.turns?.length) {
    problems.push(`${lessonId}: no scenario section with turns`);
    continue;
  }
  if (section.turns.length !== rows.length) {
    problems.push(`${lessonId}: seed has ${section.turns.length} turns, the batch has ${rows.length}`);
    continue;
  }
  rows.forEach((row: TurnAlt, i: number) => {
    const seedUser = section.turns![i].user;
    if (fold(seedUser) !== fold(row.user)) {
      problems.push(
        `${lessonId} turn ${i}: the model line has changed.\n` +
          `    seed:  ${seedUser}\n` +
          `    batch: ${row.user}`
      );
    }
    if (!row.alts.length) problems.push(`${lessonId} turn ${i}: no alternatives`);
    for (const a of row.alts) {
      if (fold(a.fr) === fold(row.user)) {
        problems.push(`${lessonId} turn ${i}: alternative "${a.fr}" repeats the model line`);
      }
    }
    const seen = new Set(row.alts.map((a) => fold(a.fr)));
    if (seen.size !== row.alts.length) problems.push(`${lessonId} turn ${i}: two alternatives are the same line`);
  });
  planned.push({
    lessonId,
    title: section.title ?? '(untitled)',
    turns: rows.length,
    alts: rows.reduce((n, r) => n + r.alts.length, 0),
    mark: apostropheOf(section.turns),
  });
}

if (problems.length) {
  console.error('\nREFUSING TO WRITE. Fix these first:\n');
  for (const p of problems) console.error(`  · ${p}`);
  process.exit(1);
}

// What each lesson already complains about, BEFORE this batch touches it.
//
// Measured rather than assumed: several of these lessons predate checks that
// were added after they were authored, so they do not validate clean today.
// Failing on the absolute count would block a correct batch on somebody
// else's old issue; failing on NEW messages catches exactly what this script
// is responsible for.
const issuesFor = (lessonId: string): Set<string> => {
  const lesson = lessons.find((l) => l.id === lessonId)!;
  return new Set(validateLesson(lesson, lessonId).map((i) => `${i.path}: ${i.message}`));
};
const before = new Map(Object.keys(SCENARIO_ALTS).map((id) => [id, issuesFor(id)]));

// ── Everything validated. Patch. ──────────────────────────────────────────
let turnsWritten = 0;
let altsWritten = 0;

for (const [lessonId, rows] of Object.entries(SCENARIO_ALTS)) {
  const lesson = lessons.find((l) => l.id === lessonId)!;
  const section = (lesson.sections ?? []).find((s) => s.type === 'scenario')!;
  const mark = apostropheOf(section.turns!);
  const punct = (s: string) => (mark === '’' ? s.replace(/'/g, '’') : s.replace(/’/g, "'"));

  rows.forEach((row, i) => {
    const turn = section.turns![i];
    turn.userEn = row.userEn;
    turn.alts = row.alts.map((a) => ({ fr: punct(a.fr), en: a.en }));
    turnsWritten++;
    altsWritten += turn.alts.length;
  });
}

// The app's own validator, re-run on the patched lessons. Anything this batch
// introduced dies here rather than in a learner's hands.
const introduced: string[] = [];
for (const lessonId of Object.keys(SCENARIO_ALTS)) {
  const was = before.get(lessonId)!;
  for (const issue of issuesFor(lessonId)) {
    if (!was.has(issue)) introduced.push(issue);
  }
}
if (introduced.length) {
  console.error('\nREFUSING TO WRITE. This batch introduces validation errors:\n');
  for (const i of introduced) console.error(`  · ${i}`);
  process.exit(1);
}

console.log(`\nRole-play alternatives — ${planned.length} lessons\n`);
for (const p of planned) {
  console.log(`  ${p.lessonId.padEnd(11)} ${String(p.turns).padStart(2)} turns  +${p.alts} answers  ${p.mark}  ${p.title}`);
}
console.log(`\n  ${turnsWritten} turns, ${altsWritten} new answers, ${turnsWritten} translations.`);

if (dryRun) {
  console.log('\n--dry-run: seed.json not written.\n');
  process.exit(0);
}

// Match the file's existing formatting (2-space, trailing newline).
writeFileSync(SEED, `${JSON.stringify(seed, null, 2)}\n`, 'utf8');
console.log(`\nWrote ${SEED}\n`);
console.log('Next: pnpm --dir ../ealch-v2 test, then run it on a device.');
console.log('The database is NOT updated by this script.\n');
