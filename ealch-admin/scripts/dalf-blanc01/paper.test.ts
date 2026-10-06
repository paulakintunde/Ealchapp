// DALF C1 blanc-01, against the format's rules.
//
// The format's rules live in dalf/paper-rules.ts and are fired against broken
// input in dalf/paper-rules.test.ts, because a rule proved only against a paper
// that satisfies it has been proved to do nothing. What this file adds is the
// call on THIS paper, plus explicit asserts for the two typed-answer
// properties the brief names (a corrigé that meets its own keywords, a quote
// found in its text) and the copy and keyword-authoring rules that no shared
// rule checks yet (STANDARD-dalf-c1 §4, STANDARD-common §6).
import { ok, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import type { ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { validateExamPaper, validateExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { fold, keywordsMet } from '../../../ealch-v2/src/utils/shortAnswer.logic.ts';
import { countWords, dalfPaperViolations, topicLedgerViolations } from '../dalf/paper-rules.ts';
import * as blanc01 from './paper.ts';

const itemsOf = (ts: ExamTask[]) =>
  ts.flatMap((t) => (t.parts ?? []).flatMap((p) => (p.items ?? []).map((it, i) => ({ t, p, it, where: `${t.id} · ${p.label} item ${i}` }))));
const closed = itemsOf([...blanc01.CO_TASKS, ...blanc01.CE_TASKS]);
const kind = (it: QcmItem) => it.kind ?? 'mcq';

test('dalf blanc-01: the schema accepts every task and the paper', () => {
  for (const t of blanc01.TASKS) {
    const issues = validateExamTask(t);
    ok(issues.length === 0, `${t.id}: ${issues.map((i) => `${i.path} ${i.message}`).join(' · ')}`);
  }
  const p = validateExamPaper(blanc01.PAPER);
  ok(p.length === 0, p.map((i) => `${i.path} ${i.message}`).join(' · '));
});

test('dalf blanc-01: every rule of the format (zero dalfPaperViolations)', () => {
  const problems = dalfPaperViolations(blanc01);
  ok(problems.length === 0, `blanc-01 breaks the format:\n  ${problems.join('\n  ')}`);
});

test('dalf blanc-01: the topic ledger is the seven pre-assigned ids', () => {
  deepStrictEqual([...blanc01.TOPICS], ['DALF-01', 'DALF-10', 'DALF-11', 'DALF-32', 'DALF-41', 'DALF-50', 'DALF-53']);
  deepStrictEqual(topicLedgerViolations([{ variant: 'blanc-01', topics: blanc01.TOPICS }]), []);
});

test('dalf blanc-01: every short answer’s own model meets its keyword groups', () => {
  const shorts = closed.filter(({ it }) => kind(it) === 'short');
  ok(shorts.length === 11, `expected 6 CO + 5 CE short answers, got ${shorts.length}`);
  for (const { it, where } of shorts) {
    ok(it.model && keywordsMet(it.model, it.keywords ?? []), `${where}: the model does not meet its keywords`);
  }
});

test('dalf blanc-01: every vrai/faux quote appears in its text', () => {
  const tfj = closed.filter(({ it }) => kind(it) === 'tfj');
  ok(tfj.length === 4, `expected 4 vrai/faux, got ${tfj.length}`);
  for (const { p, it, where } of tfj) {
    for (const q of it.quotes ?? []) {
      // Verbatim, not just fold-equal: the candidate copies from the page.
      ok((p.text ?? '').includes(q), `${where}: quote "${q.slice(0, 50)}" is not verbatim in the text`);
      ok(q.split(/\s+/).length >= 5, `${where}: quote "${q}" is under five words`);
    }
  }
  const keys = tfj.map(({ it }) => it.correct).sort();
  deepStrictEqual(keys, [0, 0, 1, 1], 'two Vrai and two Faux');
});

test('dalf blanc-01: keywords are stems of four letters or more, and none is lifted from its question', () => {
  for (const { it, where } of closed.filter(({ it }) => kind(it) === 'short')) {
    const stem = ` ${fold(it.q)} `;
    for (const g of it.keywords ?? []) {
      for (const w of g) {
        const k = fold(w);
        ok(k.length >= 4 || /^\d+$/.test(k), `${where}: keyword "${w}" is shorter than four letters`);
        ok(!stem.includes(` ${k}`), `${where}: keyword "${w}" appears in the question, so copying the question back would pass`);
      }
    }
  }
});

test('dalf blanc-01: MCQ keys are scattered and the scatter left short and tfj items alone', () => {
  const mcq = closed.filter(({ it }) => kind(it) === 'mcq');
  ok(mcq.length === 14, `expected 4 + 7 + 3 MCQ, got ${mcq.length}`);
  for (const opt of [0, 1, 2]) ok(mcq.some(({ it }) => it.correct === opt), `option ${opt} is never the key`);
  for (const { it, where } of closed.filter(({ it }) => kind(it) === 'short')) {
    ok(it.correct === -1 && it.opts.length === 0, `${where}: a short answer was touched by the scatter`);
  }
  for (const { it, where } of closed.filter(({ it }) => kind(it) === 'tfj')) {
    deepStrictEqual(it.opts, ['Vrai', 'Faux'], `${where}: Vrai/Faux reordered`);
  }
});

test('dalf blanc-01: dossier and exposé lengths sit inside STANDARD-dalf-c1 §6-7', () => {
  const words = (s?: string) => countWords(s ?? '');
  const dossier = (t: ExamTask) => (t.parts ?? []).reduce((n, p) => n + words(p.text), 0);
  const inside = (n: number, lo: number, hi: number, what: string) => ok(n >= lo && n <= hi, `${what}: ${n} words, outside ${lo}-${hi}`);

  // §6.1: about 1000 words; held to 950-1050 here, tighter than paper-rules' 850-1150.
  const [syn, essai] = blanc01.PE_TASKS;
  inside(dossier(syn!), 950, 1050, 'synthèse dossier');
  // Decision 36: the essai's dossier is the same documents, same labels and texts.
  deepStrictEqual(essai!.parts, syn!.parts, 'the essai must repeat the synthèse dossier');

  // §6.3: two documents, 800-1100 words in all. §7.4: the exposé model is 8-9 min, 1100-1300 words.
  for (let i = 0; i < blanc01.PO_TASKS.length; i += 2) {
    const expo = blanc01.PO_TASKS[i]!;
    ok((expo.parts ?? []).length === 2, `${expo.id}: the exposé dossier has two documents`);
    inside(dossier(expo), 800, 1100, `${expo.id} dossier`);
    inside(words(expo.modelAnswer), 1100, 1300, `${expo.id} model exposé`);
  }
});

/** Every string a candidate or the grader reads, collected from the tasks. */
function strings(v: unknown, out: string[] = [], key = ''): string[] {
  // keywords and sideCues are folded matching tokens, not copy.
  if (key === 'keywords' || key === 'sideCues' || key === 'targetItemIds' || key === 'cues') return out;
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) strings(x, out, k);
  return out;
}

test('dalf blanc-01: copy rules (no em dash, no honnête family, curly apostrophes, spaced ? and !)', () => {
  const all = blanc01.TASKS.flatMap((t) => strings(t).map((s) => ({ id: t.id, s })));
  for (const { id, s } of all) {
    const at = (re: RegExp) => s.slice(Math.max(0, (s.search(re)) - 30), s.search(re) + 30);
    ok(!/[—–]/.test(s), `${id}: dash in « ${at(/[—–]/)} »`);
    ok(!/honn[eê]t/i.test(s), `${id}: banned word in « ${at(/honn[eê]t/i)} »`);
    ok(!/[A-Za-zÀ-ÿ]'[A-Za-zÀ-ÿ]/.test(s), `${id}: straight apostrophe in « ${at(/[A-Za-zÀ-ÿ]'[A-Za-zÀ-ÿ]/)} »`);
    ok(!/[^\s][?!]/.test(s), `${id}: ? or ! without a space before it in « ${at(/[^\s][?!]/)} »`);
    ok(!/ {2,}[?!]|[^ \n] {2,}\S/.test(s), `${id}: doubled space in « ${at(/ {2,}/)} »`);
  }
});
