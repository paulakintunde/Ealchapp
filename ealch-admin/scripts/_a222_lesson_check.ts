/* Runs the a2.22 lesson through the REAL validators before anything is written.
 *
 *     pnpm tsx scripts/_a222_lesson_check.ts
 */
import { validateLesson } from '../../ealch-v2/src/content/schema.ts';
import { validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import { LESSON, PRON_ACTS, PRON_ITEM_IDS, PRON_SECTIONS } from './data/pronominaux-lesson.ts';
import { AUTHORED_IDS, IMPORTED_IDS } from './data/pronominaux-corpus.ts';

const known = new Set([...AUTHORED_IDS, ...IMPORTED_IDS]);
let bad = 0;
const fail = (m: string) => { console.log(`  FAIL  ${m}`); bad += 1; };

console.log(`=== a2.22.l1 v${LESSON.version}: ${LESSON.sections.length} sections, ${PRON_ACTS.length} acts ===`);

const issues = validateLesson(LESSON);
console.log(`\nvalidateLesson: ${issues.length} issue(s)`);
for (const i of issues) { fail(`${i.path}: ${i.message}`); }

const dens = validateDensity(LESSON, known);
console.log(`\nvalidateDensity: ${dens.length} issue(s)`);
for (const d of dens) { fail(`${d.rule} ${d.path}: ${d.message}`); }

/* ── the acts cover every section exactly once ─────────────────────────── */
const inActs = PRON_ACTS.flatMap((a) => a.sections);
const secIds = PRON_SECTIONS.map((s) => s.id!);
for (const id of secIds) if (!inActs.includes(id)) fail(`${id} belongs to no act`);
for (const id of inActs) if (!secIds.includes(id)) fail(`act names ${id}, which is not a section`);
if (new Set(inActs).size !== inActs.length) fail('a section is claimed by two acts');
console.log(`\nacts: ${PRON_ACTS.map((a) => `${a.id}=${a.sections.length}`).join(' ')}  total ${inActs.length}`);

/* ── every itemId resolves ─────────────────────────────────────────────── */
for (const id of PRON_ITEM_IDS) if (!known.has(id)) fail(`section names ${id}, which this build neither authors nor imports`);
for (const id of LESSON.itemIds) if (!known.has(id)) fail(`lesson.itemIds holds ${id}, which is neither authored nor imported`);
const tranche = (LESSON.deckTranche ?? []).flat();
if (new Set(tranche).size !== tranche.length) fail('an item is released by two tranches');
for (const id of known) if (!tranche.includes(id)) fail(`${id} is authored or imported and released by no tranche`);
console.log(`itemIds: ${LESSON.itemIds.length} owned, ${PRON_ITEM_IDS.length} named by a section, ${tranche.length} released`);

/* ── the quiz ──────────────────────────────────────────────────────────── */
type Q = { format: string; q: string; why?: string; ref?: string; accept?: string[]; opts?: string[]; correct?: number };
const quiz = LESSON.sections.find((s) => s.type === 'quiz') as unknown as { rounds: { id: string; questions: Q[]; targets?: string[] }[] };
const qs = quiz.rounds.flatMap((r) => r.questions);
const fmt: Record<string, number> = {};
for (const q of qs) fmt[q.format] = (fmt[q.format] ?? 0) + 1;
console.log(`\nquiz: ${qs.length} questions in ${quiz.rounds.length} rounds — ${Object.entries(fmt).map(([k, v]) => `${k} ${v}`).join(', ')}`);
if ((fmt.mcq ?? 0) > qs.length / 2) fail(`${fmt.mcq} of ${qs.length} are mcq, and at most half may be`);
for (const q of qs) {
  if (!q.why) fail(`a question has no why: ${q.q}`);
  if (!q.ref) fail(`a question has no ref: ${q.q}`);
  else if (!secIds.includes(q.ref)) fail(`a question refs ${q.ref}, which is not a section`);
  /* EVERY FREE-TEXT QUESTION MUST ACCEPT THE ANSWER IT DISPLAYS. */
  if (q.accept) {
    for (const a of q.accept) {
      if (!matchesAccept(a, q.accept)) fail(`« ${a} » is not accepted by its own accept list: ${q.q}`);
    }
  }
  if (q.opts && q.opts.length !== new Set(q.opts).size) fail(`duplicate option: ${q.q}`);
}
/* Correct answers must not cluster: no slot above 40% of closed-format items. */
const closed = qs.filter((q) => typeof q.correct === 'number');
const slots: Record<number, number> = {};
for (const q of closed) slots[q.correct!] = (slots[q.correct!] ?? 0) + 1;
for (const [slot, n] of Object.entries(slots)) {
  const pct = Math.round((n / closed.length) * 100);
  console.log(`  option slot ${slot}: ${n}/${closed.length} (${pct}%)`);
  if (n / closed.length > 0.4) fail(`option slot ${slot} holds ${pct}% of the ${closed.length} closed questions, and the cap is 40%`);
}

/* ── each round's FIRST resolving target is a distinct drill ────────────── */
const drillIds = new Set((LESSON.drills ?? []).map((d) => d.id));
const trigger = new Map((LESSON.errorTriggers ?? []).map((t) => [t.id, t.drill] as const));
const fired: string[] = [];
for (const r of quiz.rounds) {
  const first = (r.targets ?? []).find((t) => trigger.has(t));
  if (!first) { fail(`round ${r.id} names no target that resolves to a drill`); continue; }
  fired.push(trigger.get(first)!);
}
console.log(`rounds fire: ${fired.join(', ')}`);
for (const d of drillIds) {
  if (d.startsWith('retest-')) continue;
  if (!fired.includes(d)) fail(`${d} is the first resolving target of no round, so it is dead content`);
}

console.log(bad === 0 ? '\n  ALL CLEAR\n' : `\n  ${bad} PROBLEM(S)\n`);
process.exit(bad === 0 ? 0 : 1);
