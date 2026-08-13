/* a2.03: schema, density, dictée, quiz and house-copy checks, run without
 * touching Postgres. The fast loop while the lesson is being written.
 *
 *     pnpm tsx scripts/_a203_check.ts
 */
import {
  formatIssues, quizQuestions, validateItem, validateLesson,
} from '../../ealch-v2/src/content/schema.ts';
import { formatDensity, validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';
import {
  ACCORD_ADJECTIFS, EXPECTED_ACTS, EXPECTED_AUTHORED, EXPECTED_DICTATION,
  EXPECTED_QUESTIONS, EXPECTED_ROUNDS, EXPECTED_SECTIONS, MISSION_TITLE_MAX,
  MISSION_TITLE_TARGET, REFRAME, toItem,
} from './data/accord-adjectifs-corpus.ts';
import { ACCORD_ADJECTIFS_LESSON } from './data/accord-adjectifs-lesson.ts';

const L = ACCORD_ADJECTIFS_LESSON;
let bad = 0;
const fail = (m: string) => { console.log(`  !! ${m}`); bad += 1; };

console.log('\n## 1. Items\n');
for (const r of ACCORD_ADJECTIFS) {
  const issues = validateItem(toItem(r));
  if (issues.length) fail(`${r.id}: ${formatIssues(issues)}`);
}
console.log(`  ${ACCORD_ADJECTIFS.length} authored rows validated (expected ${EXPECTED_AUTHORED})`);

console.log('\n## 2. Lesson\n');
const issues = validateLesson(L);
if (issues.length) { console.log(formatIssues(issues)); bad += issues.length; }
else console.log('  clean');

console.log('\n## 3. Density\n');
const d = validateDensity(L);
if (d.length) { console.log(formatDensity(d)); bad += d.length; }
else console.log('  clean');

console.log('\n## 4. Shape\n');
console.log(`  sections ${L.sections.length} (expected ${EXPECTED_SECTIONS})`);
console.log(`  acts     ${(L.acts ?? []).length} (expected ${EXPECTED_ACTS})`);
const quiz = L.sections.find((s) => s.type === 'quiz');
const qs = quiz ? quizQuestions(quiz as never) : [];
console.log(`  quiz     ${qs.length} questions (expected ${EXPECTED_QUESTIONS}), ${(quiz as { rounds?: unknown[] })?.rounds?.length} rounds (expected ${EXPECTED_ROUNDS})`);
console.log(`  itemIds  ${L.itemIds.length}`);

const byType: Record<string, number> = {};
for (const s of L.sections) byType[s.type] = (byType[s.type] ?? 0) + 1;
console.log(`  mix      ${Object.entries(byType).sort((a, b) => b[1] - a[1]).map(([k, v]) => (v > 1 ? `${k}x${v}` : k)).join(' ')}`);

console.log('\n## 5. Mission titles (ceiling 27, target 25)\n');
for (const s of L.sections) {
  const t = (s as { title?: string }).title ?? '';
  const flag = t.length > MISSION_TITLE_MAX ? 'OVER' : t.length > MISSION_TITLE_TARGET ? 'watch' : '';
  if (flag) console.log(`  ${flag.padEnd(6)} ${String(t.length).padStart(2)}  "${t}"`);
  if (t.length > MISSION_TITLE_MAX) bad += 1;
}
console.log(`  (nothing marked OVER means every title is within the ceiling)`);

console.log('\n## 6. The reframe, verbatim\n');
const strings = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) for (const x of v) strings(x, out);
  else if (v && typeof v === 'object') for (const x of Object.values(v)) strings(x, out);
  return out;
};
const inSections = L.sections.filter((s) => strings(s).some((x) => x.includes(REFRAME))).length;
const total = [...strings(L.sections), ...strings(L.sheets ?? []), ...strings(L.terms ?? {}), L.intro]
  .reduce((n, s) => n + (s.split(REFRAME).length - 1), 0);
console.log(`  "${REFRAME}"  in ${inSections} sections, ${total} times overall`);
if (inSections < 3) fail('the density validator wants the reframe verbatim in at least three sections');

console.log('\n## 7. Dictée: every target is LETTERS mode\n');
const dict = L.sections.find((s) => s.type === 'dictation') as { itemIds: string[] } | undefined;
const byId = new Map(ACCORD_ADJECTIFS.map((r) => [r.id, r]));
for (const id of dict?.itemIds ?? []) {
  const row = byId.get(id);
  if (!row) { fail(`dictation names ${id}, which is not an authored row`); continue; }
  const mode = dicteeMode(row.fr);
  if (mode !== 'letters') fail(`dictation target ${id} "${row.fr}" is ${mode} mode`);
}
console.log(`  ${dict?.itemIds.length} targets (expected ${EXPECTED_DICTATION}), all letters`);

console.log('\n## 8. Quiz: format mix, why, and free text accepting its own answer\n');
const fmt: Record<string, number> = {};
for (const q of qs) fmt[q.format ?? 'mcq'] = (fmt[q.format ?? 'mcq'] ?? 0) + 1;
console.log(`  ${Object.entries(fmt).map(([k, v]) => `${k}=${v}`).join(' ')}`);
const mcq = fmt.mcq ?? 0;
if (mcq * 2 > qs.length) fail(`${mcq} of ${qs.length} are mcq, and at most half may be`);
for (const [i, q] of qs.entries()) {
  if (!q.why) fail(`question ${i + 1} has no why`);
  if (!q.ref) fail(`question ${i + 1} has no ref`);
  if ((q.format === 'typeIn' || q.format === 'errorSpot') && q.answer) {
    if (!matchesAccept(q.answer, q.accept ?? [])) fail(`question ${i + 1} (${q.format}) does not accept the answer it displays: ${JSON.stringify(q.answer)} against ${JSON.stringify(q.accept)}`);
  }
}
const refs = new Set(L.sections.map((s) => (s as { id?: string }).id));
for (const [i, q] of qs.entries()) if (q.ref && !refs.has(q.ref)) fail(`question ${i + 1} refs ${q.ref}, which is not a section`);

console.log('\n## 9. Correct-answer clustering (the density validator fails over 40%)\n');
const slots: Record<number, number> = {};
let closed = 0;
for (const q of qs) {
  if (typeof q.correct === 'number') { slots[q.correct] = (slots[q.correct] ?? 0) + 1; closed += 1; }
}
for (const [k, v] of Object.entries(slots)) {
  const pct = Math.round((v / closed) * 100);
  console.log(`  slot ${k}: ${v}/${closed} = ${pct}%${pct > 40 ? '  OVER' : ''}`);
  if (pct > 40) bad += 1;
}

console.log('\n## 10. House copy\n');
const learner = [
  ...strings(L.sections), ...strings(L.sheets ?? []), ...strings(L.terms ?? {}),
  L.intro, ...strings(L.overview ?? {}), ...strings(L.acts ?? []), ...strings(L.drills ?? []),
].join('\n');
if (learner.includes('—')) fail('an em dash reached a learner surface');
if (/honest/i.test(learner)) fail('"honest" reached a learner surface');

console.log(`\n${bad === 0 ? '  ALL CLEAN' : `  ${bad} PROBLEM(S)`}\n`);
process.exit(bad === 0 ? 0 : 1);
