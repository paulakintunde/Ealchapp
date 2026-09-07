/* Fast local validation of a1.25's lesson body, so the shape is right before the
 * batch is written. Runs the REAL validators, not a copy of them.
 *
 *   pnpm tsx scripts/_routine_validate.ts
 */
import { formatIssues, quizQuestions, validateLesson } from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { ROUTINE_LESSON, ROUTINE_DICTATION_IDS } from './data/routine-lesson.ts';
import { REUSED } from './data/routine-imported.ts';
import { AUTHORED_ITEMS } from './data/routine-corpus.ts';
import { REFRAME } from './data/routine-terms.ts';

const L = ROUTINE_LESSON;
let bad = 0;
const fail = (m: string) => { console.error(`  FAIL ${m}`); bad++; };

const issues = validateLesson(L);
if (issues.length) { console.error(formatIssues(issues)); bad += issues.length; }
else console.log('  validateLesson: clean');

const dens = validateDensity(L);
if (dens.length) { console.error(formatDensity(dens)); bad += dens.length; }
else console.log('  validateDensity: clean');

/* ── sections, acts, tranches ─────────────────────────────────────────────── */
const ids = L.sections.map((s) => (s as { id?: string }).id).filter(Boolean) as string[];
if (ids.length !== L.sections.length) fail('a section has no id');
if (new Set(ids).size !== ids.length) fail('two sections share an id');
console.log(`  sections: ${L.sections.length}, acts: ${L.acts?.length}, tranches: ${L.deckTranche?.length}`);

const named = new Set((L.acts ?? []).flatMap((a) => a.sections));
for (const id of ids) if (!named.has(id)) fail(`section ${id} is in no act`);
for (const id of named) if (!ids.includes(id)) fail(`act names ${id}, which is not a section`);
if ((L.acts ?? []).length !== (L.deckTranche ?? []).length) fail('acts and tranches are not index-aligned');

/* ── the reframe, counted against a constant ─────────────────────────────── */
const blob = JSON.stringify(L);
let n = 0; let i = 0;
while ((i = blob.indexOf(REFRAME, i)) !== -1) { n++; i += REFRAME.length; }
console.log(`  reframe appears ${n} time(s)`);
if (n < 3) fail('the reframe must appear verbatim in at least three places');

/* ── the quiz ─────────────────────────────────────────────────────────────── */
const quiz = L.sections.find((s) => s.type === 'quiz');
if (!quiz || quiz.type !== 'quiz') fail('no quiz');
else {
  const qs = quizQuestions(quiz);
  const mcq = qs.filter((q) => q.format === 'mcq').length;
  console.log(`  quiz: ${qs.length} questions in ${quiz.rounds?.length} rounds, ${mcq} mcq`);
  if (mcq * 2 > qs.length) fail(`${mcq}/${qs.length} are mcq, over the half limit`);
  for (const q of qs) {
    if (!q.why) fail(`quiz question has no why: ${q.q}`);
    if (!q.ref) fail(`quiz question has no ref: ${q.q}`);
    else if (!ids.includes(q.ref)) fail(`quiz ref ${q.ref} names no section`);
    if (['typeIn', 'errorSpot', 'speak'].includes(q.format ?? '')) {
      const shown = q.answer ?? '';
      if (!matchesAccept(shown, q.accept ?? [])) fail(`free text does not accept its own answer: ${shown}`);
    }
    if (q.opts && new Set(q.opts).size !== q.opts.length) fail(`duplicate option in: ${q.q}`);
  }
  // A type PREDICATE, not a bare filter. `correct` is `number | string` because
  // tapSilent names the silent letters rather than indexing options, and
  // .filter() does not carry that narrowing out, so the Map key below was
  // `string | number` and the non-null assertions were hiding it.
  const closed = qs.filter((q): q is (typeof qs)[number] & { correct: number } => typeof q.correct === 'number');
  const slots = new Map<number, number>();
  for (const q of closed) slots.set(q.correct, (slots.get(q.correct) ?? 0) + 1);
  const spread = [...slots.entries()].sort((a, b) => a[0] - b[0])
    .map(([s, c]) => `${s}:${c} (${Math.round((c / closed.length) * 100)}%)`).join('  ');
  console.log(`  quiz answer slots over ${closed.length} closed questions: ${spread}`);
  for (const [s, c] of slots) if ((c / closed.length) * 100 > 40) fail(`slot ${s} holds ${Math.round((c / closed.length) * 100)}%, over 40`);
}

/* ── the IN-MISSION closed questions, which nothing shuffles ──────────────── */
type Closed = { section: string; q: string; correct: number; opts: string[] };
const inMission: Closed[] = [];
for (const s of L.sections) {
  const sid = (s as { id?: string }).id ?? '?';
  if (s.type === 'groupDrill') {
    for (const g of s.groups) if (g.check) inMission.push({ section: sid, q: g.check.q, correct: g.check.correct, opts: g.check.opts });
  }
  if (s.type === 'listening') {
    for (const q of s.questions) inMission.push({ section: sid, q: q.q, correct: q.correct, opts: q.opts });
  }
}
const mslots = new Map<number, number>();
for (const q of inMission) mslots.set(q.correct, (mslots.get(q.correct) ?? 0) + 1);
console.log(`  in-mission closed questions: ${inMission.length}, slots ${[...mslots.entries()].sort((a, b) => a[0] - b[0]).map(([s, c]) => `${s}:${c}`).join(' ')}`);
for (const [s, c] of mslots) {
  if ((c / inMission.length) * 100 > 40) fail(`in-mission slot ${s} holds ${Math.round((c / inMission.length) * 100)}%, over 40`);
}
const bySection = new Map<string, Closed[]>();
for (const q of inMission) (bySection.get(q.section) ?? bySection.set(q.section, []).get(q.section)!).push(q);
for (const [sid, list] of bySection) {
  for (let k = 1; k < list.length; k++) {
    if (list[k].correct === list[k - 1].correct) fail(`${sid}: questions ${k} and ${k + 1} share slot ${list[k].correct}, and MissionRich does not shuffle these`);
  }
  for (const q of list) if (q.correct >= q.opts.length) fail(`${sid}: correct index out of range`);
}

/* ── every itemId resolves, and the dictée is real ───────────────────────── */
const known = new Set([...REUSED.map((r) => r.id), ...AUTHORED_ITEMS.map((a) => a.id)]);
for (const id of L.itemIds) if (!known.has(id)) fail(`itemId ${id} is in no manifest`);
console.log(`  itemIds: ${L.itemIds.length}, all resolving against the manifest`);
for (const id of ROUTINE_DICTATION_IDS) {
  const r = REUSED.find((x) => x.id === id);
  if (!r) { fail(`dictation target ${id} is not in the manifest`); continue; }
  if (!r.drills.includes('dictation')) fail(`dictation target ${id} carries no dictation drill`);
  console.log(`    dictée ${id}: ${dicteeMode(r.fr)} mode`);
}

/* ── drills are reachable ────────────────────────────────────────────────── */
const firstTargets = new Set<string>();
if (quiz && quiz.type === 'quiz') {
  for (const r of quiz.rounds ?? []) {
    const t = (r.targets ?? []).find((x) => (L.errorTriggers ?? []).some((e) => e.id === x && e.drill));
    if (t) firstTargets.add(t);
  }
}
for (const e of L.errorTriggers ?? []) {
  if (e.drill && !firstTargets.has(e.id)) fail(`trigger ${e.id} has a drill but is not the FIRST resolving target of any round, so drillForRound never fires it`);
}

console.log(bad ? `\n  ${bad} PROBLEM(S)` : '\n  clean');
process.exit(bad ? 1 : 0);
