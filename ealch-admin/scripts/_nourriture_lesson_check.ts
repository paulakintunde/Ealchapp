import { NOURRITURE_LESSON as L, NOURRITURE_TRANCHES } from './data/nourriture-lesson.ts';
import { REFRAME, REFRAME_COUNT, NOURRITURE_TERMS } from './data/nourriture-terms.ts';
import { validateDensity, formatDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { quizQuestions } from '../../ealch-v2/src/content/schema.ts';

let bad = 0;
const fail = (m: string) => { console.log('  ✖', m); bad++; };

const secs = L.sections;
const ids = secs.map((s: any) => s.id);
console.log(`sections ${secs.length} | acts ${L.acts?.length} | tranches ${NOURRITURE_TRANCHES.length} | itemIds ${L.itemIds?.length}`);

// one quiz section only: lessonPager appends exactly one via find()
const quizzes = secs.filter((s) => s.type === 'quiz');
if (quizzes.length !== 1) fail(`${quizzes.length} quiz sections; the pager renders only the first`);
const quiz: any = quizzes[0];
const qs = quizQuestions(quiz);
const fmt: Record<string, number> = {};
for (const q of qs) fmt[q.format ?? '?'] = (fmt[q.format ?? '?'] ?? 0) + 1;
console.log(`quiz ${qs.length} questions:`, JSON.stringify(fmt));
if ((fmt.mcq ?? 0) > qs.length / 2) fail(`mcq ${fmt.mcq}/${qs.length} is over half`);
for (const q of qs) { if (!q.why) fail(`quiz question has no why: ${q.q.slice(0, 50)}`); if (!q.ref) fail(`no ref: ${q.q.slice(0,50)}`); }
for (const q of qs) if (q.ref && !ids.includes(q.ref)) fail(`quiz ref names a missing section: ${q.ref}`);

// answer spread, computed the way validateDensity does
const slots: Record<number, number> = {};
let closed = 0;
for (const q of qs) if (Array.isArray(q.opts) && typeof q.correct === 'number') { closed++; slots[q.correct] = (slots[q.correct] ?? 0) + 1; }
console.log(`closed ${closed}, slots`, JSON.stringify(slots), Object.entries(slots).map(([k,v])=>`${k}:${(v/closed*100).toFixed(0)}%`).join(' '));
for (const [k, v] of Object.entries(slots)) if ((v / closed) * 100 > 40) fail(`slot ${k} holds ${(v/closed*100).toFixed(0)}% (limit 40)`);

// acts name real sections, every section in exactly one act
const claimed = new Map<string, string>();
for (const a of L.acts ?? []) for (const sid of a.sections) {
  if (!ids.includes(sid)) fail(`act ${a.id} names a missing section: ${sid}`);
  if (claimed.has(sid)) fail(`${sid} claimed by ${claimed.get(sid)} and ${a.id}`);
  claimed.set(sid, a.id);
}
for (const sid of ids) if (!claimed.has(sid)) fail(`section in no act: ${sid}`);

// terms exist and no section names more than three (the renderer shows three)
for (const s of secs as any[]) for (const t of s.terms ?? []) {
  if (!NOURRITURE_TERMS[t]) fail(`${s.id} names undefined term ${t}`);
  if ((s.terms?.length ?? 0) > 3) fail(`${s.id} names ${s.terms.length} terms; the renderer draws 3`);
}
// every declared term is used somewhere
for (const t of Object.keys(NOURRITURE_TERMS)) if (!secs.some((s: any) => (s.terms ?? []).includes(t))) fail(`term ${t} is defined and named by no section`);

// reframe verbatim count against the EXPLICIT constant
const n = JSON.stringify(L).split(REFRAME).length - 1;
console.log(`reframe appears ${n}x (constant says ${REFRAME_COUNT})`);
if (n < 3) fail(`reframe appears ${n}x; the density validator wants 3+`);

// sheets reachable, and only teach/letterGrid/table inside them
const sheetIds = (L.sheets ?? []).map((s: any) => s.id);
for (const s of secs as any[]) if (s.sheetId && !sheetIds.includes(s.sheetId)) fail(`${s.id} names missing sheet ${s.sheetId}`);
for (const sh of L.sheets ?? []) {
  if (!secs.some((s: any) => s.sheetId === sh.id)) fail(`sheet ${sh.id} is reachable from no section`);
  for (const ss of (sh as any).sections ?? []) if (!['teach','letterGrid','table'].includes(ss.type)) fail(`sheet ${sh.id} has a ${ss.type} section; ReferenceSheet draws only teach/letterGrid/table`);
}

// drills: each is the first resolving target of exactly one round
const drillIds = (L.drills ?? []).map((d: any) => d.id);
const fired = new Map<string, string>();
for (const r of quiz.rounds ?? []) {
  const first = (r.targets ?? []).map((t: string) => (L.errorTriggers ?? []).find((e: any) => e.id === t)).find((e: any) => e?.drill);
  if (!first) { fail(`round ${r.id} fires no drill`); continue; }
  if (fired.has(first.drill)) fail(`drill ${first.drill} fired by ${fired.get(first.drill)} and ${r.id}`);
  fired.set(first.drill, r.id);
}
for (const d of drillIds) if (!d.startsWith('retest-') && !fired.has(d)) fail(`drill ${d} is fired by no round (dead content)`);
for (const e of L.errorTriggers ?? []) {
  if (e.drill && !drillIds.includes(e.drill)) fail(`trigger ${e.id} names missing drill ${e.drill}`);
  if (e.retest && !drillIds.includes(e.retest)) fail(`trigger ${e.id} names missing retest ${e.retest}`);
  for (const d of e.detectOn ?? []) { const base = d.split('/')[0]; if (!ids.includes(base)) fail(`trigger ${e.id} detectOn a missing section: ${d}`); }
}

// THE density validator
const issues = validateDensity(L as any);
console.log(`\ndensity issues: ${issues.length}`);
if (issues.length) console.log(formatDensity(issues));

console.log(bad ? `\n${bad} PROBLEM(S)` : '\nall structural checks pass');
