// Authoring check for the a1.30 bilan rounds. Counts, format mix, answer
// spread, and the two house rules that are easy to break by hand (no em dash,
// no "honest"). Run it after every edit to the round data.
//
//   pnpm tsx scripts/_bilan_check.ts

import { REVIEW_ROUNDS } from './data/bilan-rounds.ts';
import { EXAM_ROUNDS } from './data/bilan-exam.ts';
import { BILAN_LESSONS } from './data/bilan-lesson.ts';
import { formatIssues, validateLesson, type QuizRound } from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';

function report(name: string, rounds: QuizRound[]) {
  let n = 0;
  const fmt: Record<string, number> = {};
  const slots: number[] = [];
  const problems: string[] = [];

  for (const r of rounds) {
    n += r.questions.length;
    for (const q of r.questions) {
      const f = q.format ?? 'mcq';
      fmt[f] = (fmt[f] ?? 0) + 1;
      if (!q.why) problems.push(`no why: ${q.q.slice(0, 50)}`);
      if (!q.ref) problems.push(`no ref: ${q.q.slice(0, 50)}`);
      if (Array.isArray(q.opts) && typeof q.correct === 'number') {
        slots.push(q.correct);
        if (q.correct < 0 || q.correct >= q.opts.length) problems.push(`correct out of range: ${q.q.slice(0, 50)}`);
        if (new Set(q.opts).size !== q.opts.length) problems.push(`duplicate option: ${q.q.slice(0, 50)}`);
      }
      // Open formats need something to compare against.
      if (['typeIn', 'errorSpot', 'speak'].includes(f) && !q.accept?.length) {
        problems.push(`no accept: ${q.q.slice(0, 50)}`);
      }
      if (f === 'speak' && !q.target) problems.push(`speak with no target: ${q.q.slice(0, 50)}`);
      // The card speaks the correct OPTION when the clip is missing, which
      // reads the answer out before the learner chooses.
      if (f === 'listenChoose' && !q.audio?.clip) problems.push(`listenChoose with no audio.clip: ${q.q.slice(0, 50)}`);
    }
  }

  const tally: Record<number, number> = {};
  slots.forEach((s) => (tally[s] = (tally[s] ?? 0) + 1));
  const spread = Object.entries(tally)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([k, v]) => `${k}:${v} (${((v / slots.length) * 100).toFixed(0)}%)`)
    .join('  ');
  const worst = Math.max(...Object.values(tally)) / slots.length * 100;

  const ids = rounds.map((r) => r.id);
  const labels = rounds.map((r) => r.label);
  const json = JSON.stringify(rounds);

  console.log(`\n── ${name} ──`);
  console.log(`  rounds ${rounds.length}   questions ${n}`);
  console.log(`  formats ${JSON.stringify(fmt)}`);
  console.log(`  closed ${slots.length}   spread ${spread}`);
  console.log(`  worst slot ${worst.toFixed(0)}%  ${worst > 40 ? '✖ OVER the 40% limit' : '✓ under the 40% limit'}`);
  console.log(`  duplicate round ids ${ids.length - new Set(ids).size}   duplicate labels ${labels.length - new Set(labels).size}`);
  console.log(`  em dash ${json.includes('—') ? '✖ PRESENT' : '✓ none'}   "honest" ${/honest/i.test(json) ? '✖ PRESENT' : '✓ none'}`);
  if (problems.length) {
    console.log(`  ✖ ${problems.length} problem(s):`);
    problems.forEach((p) => console.log(`      ${p}`));
  } else {
    console.log('  ✓ no per-question problems');
  }
  return { n, slots, problems };
}

const a = report('a1.30.l1 review', REVIEW_ROUNDS);
const b = report('a1.30.l2 exam', EXAM_ROUNDS);

// The density validator measures the spread PER LESSON, not across both, so
// the combined figure is informational only.
console.log(`\n  total questions ${a.n + b.n}`);

/* ── Schema and density, the same two gates CI runs ───────────────────────── */
let bad = a.problems.length + b.problems.length;
for (const lesson of BILAN_LESSONS) {
  console.log(`\n── ${lesson.id} ──`);
  const issues = validateLesson(lesson);
  if (issues.length) {
    bad += issues.length;
    console.log(`  ✖ schema: ${issues.length}`);
    console.log(formatIssues(issues));
  } else {
    console.log('  ✓ schema clean');
  }
  // Empty item set: these lessons carry no corpus ids, so item-resolution has
  // nothing to check and passing an empty set skips exactly that one rule.
  const density = validateDensity(lesson, new Set());
  if (density.length) {
    bad += density.length;
    console.log(`  ✖ density: ${density.length}`);
    console.log(formatDensity(density));
  } else {
    console.log('  ✓ density clean');
  }
  const sectionIds = lesson.sections.map((s) => (s as { id?: string }).id).filter(Boolean);
  const inActs = (lesson.acts ?? []).flatMap((act) => act.sections);
  const orphan = sectionIds.filter((id) => !inActs.includes(id as string));
  const dangling = inActs.filter((id) => !sectionIds.includes(id));
  if (orphan.length) { bad++; console.log(`  ✖ sections in no act: ${orphan.join(', ')}`); }
  if (dangling.length) { bad++; console.log(`  ✖ acts naming a missing section: ${dangling.join(', ')}`); }
  // A round targeting a family with no drill silently loses its remediation.
  const drillIds = new Set((lesson.drills ?? []).map((d) => d.id));
  const triggerIds = new Set((lesson.errorTriggers ?? []).map((t) => t.id));
  for (const t of lesson.errorTriggers ?? []) {
    if (!drillIds.has(t.drill)) { bad++; console.log(`  ✖ trigger ${t.id} names a missing drill ${t.drill}`); }
    if (t.retest && !drillIds.has(t.retest)) { bad++; console.log(`  ✖ trigger ${t.id} names a missing retest ${t.retest}`); }
  }
  const quiz = lesson.sections.find((s) => s.type === 'quiz') as { rounds?: QuizRound[]; exam?: boolean } | undefined;
  for (const r of quiz?.rounds ?? []) {
    for (const target of r.targets ?? []) {
      if (!triggerIds.has(target)) { bad++; console.log(`  ✖ round ${r.id} targets unknown trigger ${target}`); }
    }
  }
  const untargeted = (quiz?.rounds ?? []).filter((r) => !r.targets?.length).length;
  console.log(`  quiz: ${quiz?.rounds?.length ?? 0} rounds, exam=${quiz?.exam === true}, ${untargeted} round(s) with no remediation target`);
}

if (bad) {
  console.log(`\n✖ ${bad} problem(s)\n`);
  process.exit(1);
}
console.log('\n✓ all clear\n');
