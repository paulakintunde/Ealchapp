/* Runs a2.13.l1 through the REAL validators before a batch, a merge or a test is
 * written on top of it. Everything here is the app's own code, not a copy:
 *
 *   validateLesson   the schema contract
 *   densityReport    the 45-word core cap and the 12-word xl cap
 *   ownsLayout       which sections get the viewport
 *
 * Plus the structural claims this build makes in prose:
 *   - the Owns act is the heaviest by mission count
 *   - every act's sections exist, in order, with nothing orphaned
 *   - each quiz round leads on a DIFFERENT trigger, so every drill is reachable
 *   - no listenChoose anywhere, because the singular cells are homophones
 *   - the unseen verb is in no deck, no term and no itemId
 *
 *     pnpm tsx scripts/_a213_lesson_check.ts
 */
import './env';
import { MODAUX_LESSON } from './data/modaux-lesson.ts';
import { UNSEEN_VERB, MODAL_ORDER, PARADIGM } from './data/modaux-corpus.ts';

let fails = 0;
const ok = (cond: boolean, msg: string) => { console.log(`  ${cond ? 'ok  ' : 'FAIL'} ${msg}`); if (!cond) fails++; };

async function main() {
  const schema = await import('../../ealch-v2/src/content/schema.ts');
  const density = await import('../../ealch-v2/src/content/density.logic.ts');
  const L = MODAUX_LESSON;

  console.log('## 1. validateLesson\n');
  const validate = (schema as Record<string, unknown>).validateLesson as ((l: unknown) => string[]) | undefined;
  if (typeof validate !== 'function') {
    ok(false, 'validateLesson is not exported from schema.ts under that name');
  } else {
    const errs = validate(L);
    ok(errs.length === 0, `${errs.length} schema errors`);
    for (const e of errs.slice(0, 30)) {
      console.log(`       ${typeof e === 'string' ? e : JSON.stringify(e)}`);
    }
  }

  console.log('\n## 2. Density, through the real report\n');
  const validateDensity = (density as Record<string, unknown>).validateDensity as ((l: unknown) => unknown[]);
  const formatDensity = (density as Record<string, unknown>).formatDensity as ((f: unknown) => string) | undefined;
  const dfails = validateDensity(L);
  ok(dfails.length === 0, `${dfails.length} density failures`);
  if (dfails.length && formatDensity) console.log(formatDensity(dfails).split('\n').map((l) => `       ${l}`).join('\n'));

  console.log('\n## 3. Structure\n');
  const ids = L.sections.map((s) => (s as { id?: string }).id ?? '(none)');
  ok(new Set(ids).size === ids.length, `${ids.length} sections, all ids distinct`);
  const inActs = L.acts!.flatMap((a) => a.sections);
  ok(inActs.length === ids.length, `${inActs.length} sections named across ${L.acts!.length} acts, ${ids.length} sections exist`);
  const orphan = ids.filter((i) => !inActs.includes(i));
  const ghost = inActs.filter((i) => !ids.includes(i));
  ok(orphan.length === 0, `no section outside an act${orphan.length ? `: ${orphan.join(', ')}` : ''}`);
  ok(ghost.length === 0, `no act names a section that does not exist${ghost.length ? `: ${ghost.join(', ')}` : ''}`);
  ok(inActs.join('|') === ids.join('|'), 'act order matches section order exactly');

  const sizes = L.acts!.map((a) => a.sections.length);
  const owns = L.acts!.findIndex((a) => a.id === 'act3');
  const biggest = Math.max(...sizes);
  ok(sizes[owns] === biggest && sizes.filter((n) => n === biggest).length === 1,
    `the Owns act is the heaviest ALONE: ${sizes.map((n, i) => `act${i + 1}:${n}`).join(' ')}`);

  console.log('\n## 4. The quiz\n');
  const quizzes = L.sections.filter((s) => s.type === 'quiz');
  ok(quizzes.length === 1, `${quizzes.length} quiz section (a second is silently never rendered)`);
  const quiz = quizzes[0] as { rounds?: { id: string; targets?: string[]; questions?: { format?: string; ref?: string }[] }[] };
  const rounds = quiz.rounds ?? [];
  const leads = rounds.map((r) => (r.targets ?? [])[0]);
  ok(new Set(leads).size === leads.length, `each of ${rounds.length} rounds leads on a DIFFERENT trigger: ${leads.join(', ')}`);
  const triggerIds = L.errorTriggers!.map((t) => t.id);
  ok(leads.every((t) => triggerIds.includes(t!)), 'every lead target is a declared trigger');
  const unled = triggerIds.filter((t) => !leads.includes(t));
  ok(unled.length === 0, `every trigger is led on by some round${unled.length ? ` — UNREACHABLE DRILL: ${unled.join(', ')}` : ''}`);

  const qs = rounds.flatMap((r) => r.questions ?? []);
  console.log(`  ${qs.length} questions across ${rounds.length} rounds`);
  const listen = qs.filter((q) => q.format === 'listenChoose');
  ok(listen.length === 0, `no listenChoose anywhere — the singular cells are homophones and it would certify a bug`);
  const refs = qs.map((q) => q.ref).filter(Boolean) as string[];
  const badRefs = refs.filter((r) => !ids.includes(r));
  ok(badRefs.length === 0, `every question ref points at a real section${badRefs.length ? `: ${badRefs.join(', ')}` : ''}`);

  /* THE ANSWER-POSITION SPREAD. density.logic.ts refuses a quiz that puts more
     than 40% of its correct answers in one slot, and it is right to: a learner
     who notices the pattern stops reading the options. Printed per question so a
     failure names what to move rather than only that something is skewed. */
  console.log('\n## 4b. Where the correct answers sit\n');
  const mcq = rounds.flatMap((r) => (r.questions ?? []).map((q) => ({ r: r.id, q: q as Record<string, unknown> })))
    .filter((x) => typeof x.q.correct === 'number');
  const tally = [0, 0, 0, 0];
  for (const x of mcq) tally[x.q.correct as number]++;
  console.log(`  ${mcq.length} questions with a fixed option position`);
  tally.forEach((n, i) => console.log(`    position ${i}: ${String(n).padStart(2)}  ${((100 * n) / mcq.length).toFixed(0)}%`));
  ok(Math.max(...tally) / mcq.length <= 0.4, `no position holds more than 40% (worst is ${((100 * Math.max(...tally)) / mcq.length).toFixed(0)}%)`);
  for (const x of mcq) {
    console.log(`    ${x.r.padEnd(22)} correct=${x.q.correct} of ${((x.q.opts as unknown[]) ?? []).length}  ${String(x.q.q).slice(0, 52)}`);
  }

  console.log('\n## 5. The unseen verb reaches no card\n');
  ok(!L.itemIds!.includes(UNSEEN_VERB.sourceId), `${UNSEEN_VERB.sourceId} is NOT in itemIds`);
  const tranche = (L.deckTranche ?? []).flat();
  ok(!tranche.includes(UNSEEN_VERB.sourceId), 'and not in any deck tranche');
  const termBlob = JSON.stringify(L.terms);
  ok(!termBlob.includes(UNSEEN_VERB.sourceId), 'and no term names its row');
  ok(tranche.every((id) => L.itemIds!.includes(id)), 'every released id is in itemIds');
  const unreleased = L.itemIds!.filter((id) => !tranche.includes(id));
  ok(unreleased.length === 0, `every itemId is released by some act${unreleased.length ? `: ${unreleased.slice(0, 8).join(', ')}` : ''}`);

  console.log('\n## 6. Sizes\n');
  console.log(`  sections     ${L.sections.length}`);
  console.log(`  acts         ${L.acts!.length}  (${sizes.join(' · ')})`);
  console.log(`  questions    ${qs.length}`);
  console.log(`  itemIds      ${L.itemIds!.length}`);
  console.log(`  triggers     ${L.errorTriggers!.length}  drills ${L.drills!.length}`);
  console.log(`  body         ${Math.round(JSON.stringify(L).length / 1024)} KiB`);
  console.log(`  grid cells   ${PARADIGM.length * MODAL_ORDER.length}`);

  console.log(`\n${fails === 0 ? 'ALL CHECKS PASS' : `${fails} FAILURES`}`);
  process.exit(fails === 0 ? 0 : 1);
}
main().catch((e) => { console.error(e); process.exit(1); });
