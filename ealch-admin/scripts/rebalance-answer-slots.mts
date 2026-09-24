// Rebalance authored answer slots across the B1 lessons.
//
// WHAT IT DOES: for each closed check it permutes the options array AND the
// `correct` index together, so the item means exactly what it meant before and
// only the position of the right answer moves. It never invents an option, never
// deletes one, and never touches prose.
//
// WHAT IT REFUSES TO TOUCH: any item whose `why` names a position ("La troisieme
// est le present"), because moving the options would make the explanation lie.
//
// TARGET: even distribution within each option-count class (a 2-option check can
// only ever be 50/50, so the blanket "40% lesson-wide" rule is unreachable and
// wrong; see the log's open item), and no run of 3 identical slots in a row.
//
// Usage, from ealch-admin/: pnpm exec tsx scripts/rebalance-answer-slots.mts [--write]
// Guarded by scripts/b1-answer-slots.test.ts.
import ts from 'typescript';
import { readFileSync, writeFileSync } from 'node:fs';

const WRITE = process.argv.includes('--write');
const DIR = 'scripts/data/b1';
const SLUGS = [
  'imparfait-formation', 'imparfait-usage', 'pc-imparfait', 'pc-imparfait-paires',
  'futur-simple', 'futur-irregulier', 'futur-usage', 'conditionnel-present',
  'politesse', 'si-clauses', 'qui-que', 'dont-ou', 'lequel-ce-qui', 'subjonctif-formation',
];
// Prose that names an option's position. Conservative on purpose.
const ORDINAL = /(premi[eè]re?|deuxi[eè]me|troisi[eè]me|derni[eè]re?|first|second|third|last one)/i;

type Item = {
  optsStart: number; optsEnd: number; optsText: string[];
  correctStart: number; correctEnd: number; correct: number;
  n: number; locked: boolean; line: number;
};

function quizRanges(src: ts.SourceFile): [number, number][] {
  // The quiz is reshuffled per attempt by LessonRich, so its authored slots never
  // reach a learner, and validateDensity has its own quiz-spread rule that the
  // authors already satisfied. Leave the whole quiz section alone.
  const out: [number, number][] = [];
  const visit = (n: ts.Node): void => {
    if (ts.isObjectLiteralExpression(n)) {
      const isQuiz = n.properties.some((p) =>
        ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'type' &&
        ts.isStringLiteral(p.initializer) && p.initializer.text === 'quiz');
      if (isQuiz) { out.push([n.getStart(src), n.getEnd()]); return; }
    }
    // Some lessons hoist the rounds into their own const (QUIZ_ROUNDS), outside
    // the quiz object, so a range check on the object alone misses them.
    if (ts.isVariableDeclaration(n) && ts.isIdentifier(n.name) && /quiz/i.test(n.name.text)) {
      out.push([n.getStart(src), n.getEnd()]);
      return;
    }
    ts.forEachChild(n, visit);
  };
  visit(src);
  return out;
}

function collect(src: ts.SourceFile, text: string): Item[] {
  const items: Item[] = [];
  const skip = quizRanges(src);
  const inQuiz = (pos: number) => skip.some(([a, b]) => pos >= a && pos < b);
  const strArray = (n: ts.Node): ts.ArrayLiteralExpression | null =>
    ts.isArrayLiteralExpression(n) && n.elements.length >= 2 &&
    n.elements.every((e) => ts.isStringLiteral(e) || ts.isNoSubstitutionTemplateLiteral(e))
      ? n : null;

  const push = (arr: ts.ArrayLiteralExpression, num: ts.NumericLiteral, prose: string) => {
    if (inQuiz(arr.getStart(src))) return;
    items.push({
      optsStart: arr.getStart(src), optsEnd: arr.getEnd(),
      optsText: arr.elements.map((e) => text.slice(e.getStart(src), e.getEnd())),
      correctStart: num.getStart(src), correctEnd: num.getEnd(),
      correct: Number(num.text), n: arr.elements.length,
      locked: ORDINAL.test(prose),
      line: src.getLineAndCharacterOfPosition(arr.getStart(src)).line + 1,
    });
  };

  const visit = (node: ts.Node): void => {
    // form 1: { opts: [...], correct: N, why: '...' }
    if (ts.isObjectLiteralExpression(node)) {
      let arr: ts.ArrayLiteralExpression | null = null;
      let num: ts.NumericLiteral | null = null;
      let prose = '';
      for (const p of node.properties) {
        if (!ts.isPropertyAssignment(p) || !ts.isIdentifier(p.name)) continue;
        const key = p.name.text;
        if (['opts', 'options', 'choices', 'answers'].includes(key)) arr = strArray(p.initializer) ?? arr;
        if (key === 'correct' && ts.isNumericLiteral(p.initializer)) num = p.initializer;
        if (['why', 'tip', 'note', 'explain'].includes(key)) prose += ' ' + text.slice(p.initializer.getStart(src), p.initializer.getEnd());
      }
      if (arr && num) push(arr, num, prose);
    }
    // form 2: chk(q, [...], N, why) / ctl(label, q, [...], N, why) - an array of
    // strings immediately followed by a number argument.
    if (ts.isCallExpression(node)) {
      const a = node.arguments;
      for (let i = 0; i + 1 < a.length; i++) {
        const arr = strArray(a[i]);
        const num = a[i + 1];
        if (arr && ts.isNumericLiteral(num)) {
          const prose = a.slice(i + 2).map((x) => text.slice(x.getStart(src), x.getEnd())).join(' ');
          push(arr, num, prose);
          break;
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(src);
  return items.sort((x, y) => x.optsStart - y.optsStart);
}

let grandBefore = 0, grandAfter = 0, grandLocked = 0, grandMoved = 0;

for (const slug of SLUGS) {
  const path = `${DIR}/${slug}-lesson.ts`;
  const text = readFileSync(path, 'utf8');
  const src = ts.createSourceFile(path, text, ts.ScriptTarget.Latest, true);
  const items = collect(src, text);

  // Greedy assignment, in source order: pick the slot that is furthest behind
  // its quota for this option-count class and does not make a run of three.
  const counts: Record<number, number[]> = {};
  for (const it of items) counts[it.n] ??= new Array(it.n).fill(0);
  // locked items keep their slot and still count toward the quota
  for (const it of items) if (it.locked) counts[it.n][it.correct]++;

  const seq: number[] = [];
  const plan = new Map<Item, number>();
  const quota: Record<number, number[]> = {};
  for (const [n, arr] of Object.entries(counts)) quota[Number(n)] = arr.slice();

  for (const it of items) {
    if (it.locked) { seq.push(it.correct); continue; }
    const c = quota[it.n];
    const order = c.map((v, i) => [v, i] as const).sort((a, b) => a[0] - b[0]).map(([, i]) => i);
    const last2 = seq.slice(-2);
    const makesRun = (s: number) => last2.length === 2 && last2[0] === s && last2[1] === s;
    const pick = order.find((s) => !makesRun(s)) ?? order[0];
    c[pick]++;
    plan.set(it, pick);
    seq.push(pick);
  }

  // Apply, right to left so offsets stay valid.
  let out = text, moved = 0;
  const edits = [...items].filter((it) => plan.has(it)).sort((a, b) => b.optsStart - a.optsStart);
  for (const it of edits) {
    const target = plan.get(it)!;
    if (target === it.correct) continue;
    const opts = it.optsText.slice();
    const [right] = opts.splice(it.correct, 1);
    opts.splice(target, 0, right);
    out = out.slice(0, it.correctStart) + String(target) + out.slice(it.correctEnd);
    out = out.slice(0, it.optsStart) + '[' + opts.join(', ') + ']' + out.slice(it.optsEnd);
    moved++;
  }

  const before: Record<number, number[]> = {};
  const after: Record<number, number[]> = {};
  for (const it of items) { before[it.n] ??= new Array(it.n).fill(0); after[it.n] ??= new Array(it.n).fill(0); }
  for (const it of items) { before[it.n][it.correct]++; after[it.n][plan.has(it) ? plan.get(it)! : it.correct]++; }
  const fmt = (d: Record<number, number[]>) => Object.entries(d).map(([n, a]) => `${n}opt ${a.join('/')} (${((Math.max(...a) / a.reduce((x, y) => x + y, 0)) * 100).toFixed(0)}%)`).join(' ');
  let runs = 0;
  for (let i = 2; i < seq.length; i++) if (seq[i] === seq[i - 1] && seq[i] === seq[i - 2]) runs++;
  const locked = items.filter((i) => i.locked).length;
  grandBefore += items.length; grandLocked += locked; grandMoved += moved;

  console.log(`${slug.padEnd(22)} items ${String(items.length).padStart(3)} locked ${String(locked).padStart(3)} moved ${String(moved).padStart(3)}`);
  console.log(`   before ${fmt(before)}`);
  console.log(`   after  ${fmt(after)} | runs>=3 ${runs}`);

  if (WRITE && moved) writeFileSync(path, out);
}
console.log(`\n${WRITE ? 'WROTE' : 'DRY RUN'} | items ${grandBefore} | locked by prose ${grandLocked} | moved ${grandMoved}`);
