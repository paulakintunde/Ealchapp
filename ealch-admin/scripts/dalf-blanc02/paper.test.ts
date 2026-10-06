// DALF C1 blanc-02, against the format's rules.
//
// The rules live in dalf/paper-rules.ts and are exercised on deliberately
// broken input in its own test. What runs here is the call on this paper, plus
// the item-level promises made in its headers, asserted directly so a failure
// names the item rather than a rule.
import { deepStrictEqual, ok } from 'node:assert';
import { test } from 'node:test';
import type { QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { validateExamPaper, validateExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { fold, keywordsMet } from '../../../ealch-v2/src/utils/shortAnswer.logic.ts';
import { countWords, dalfPaperViolations, topicLedgerViolations } from '../dalf/paper-rules.ts';
import * as blanc02 from './paper.ts';

const closedParts = () => [...blanc02.CO_TASKS, ...blanc02.CE_TASKS].flatMap((t) => t.parts ?? []);
const kind = (i: QcmItem) => i.kind ?? 'mcq';

test('dalf blanc-02: the schema accepts every task and the paper', () => {
  for (const t of blanc02.TASKS) {
    const issues = validateExamTask(t);
    ok(issues.length === 0, `${t.id}: ${issues.map((i) => `${i.path} ${i.message}`).join(' · ')}`);
  }
  const p = validateExamPaper(blanc02.PAPER);
  ok(p.length === 0, p.map((i) => `${i.path} ${i.message}`).join(' · '));
});

test('dalf blanc-02: every rule of the format', () => {
  const problems = dalfPaperViolations(blanc02);
  deepStrictEqual(problems, [], `blanc-02 breaks the format:\n  ${problems.join('\n  ')}`);
});

test('dalf blanc-02: every short answer’s own model meets its keyword groups', () => {
  let n = 0;
  for (const p of closedParts()) {
    for (const it of p.items.filter((i) => kind(i) === 'short')) {
      n += 1;
      ok(it.model && keywordsMet(it.model, it.keywords ?? []), `model fails its keywords: "${it.q}"`);
    }
  }
  ok(n === 11, `expected 11 short answers (6 CO + 5 CE), found ${n}`);
});

test('dalf blanc-02: no short-answer keyword is a word of its own question', () => {
  // STANDARD-dalf-c1 §4 rule 4: a candidate copying the question back must not pass.
  for (const p of closedParts()) {
    for (const it of p.items.filter((i) => kind(i) === 'short')) {
      const stem = ` ${fold(it.q)} `;
      for (const g of it.keywords ?? []) {
        for (const w of g) ok(!stem.includes(` ${fold(w)}`), `keyword "${w}" is in its own stem: "${it.q}"`);
      }
    }
  }
});

test('dalf blanc-02: every vrai/faux quote appears in its text', () => {
  let n = 0;
  for (const p of closedParts()) {
    const hay = fold(p.text ?? '');
    for (const it of p.items.filter((i) => kind(i) === 'tfj')) {
      n += 1;
      for (const q of it.quotes ?? []) ok(hay.includes(fold(q)), `quote not in the text: "${q}"`);
      // And verbatim, not only fold-equal: the candidate copies what they read.
      for (const q of it.quotes ?? []) ok((p.text ?? '').includes(q), `quote not verbatim: "${q}"`);
    }
  }
  ok(n === 4, `expected 4 vrai/faux, found ${n}`);
});

test('dalf blanc-02: no part’s MCQ keys run strictly ascending for three or more', () => {
  for (const p of closedParts()) {
    const keys = p.items.filter((i) => kind(i) === 'mcq').map((i) => i.correct);
    ok(!blanc02.hasAscendingRun(keys), `${p.label}: MCQ keys ${keys.join(',')} read as a rotation`);
  }
});

test('dalf blanc-02: the topic ledger is exactly the pre-assigned draw', () => {
  deepStrictEqual([...blanc02.TOPICS], ['DALF-02', 'DALF-12', 'DALF-14', 'DALF-33', 'DALF-42', 'DALF-51', 'DALF-55']);
  deepStrictEqual(topicLedgerViolations([{ variant: 'blanc-02', topics: blanc02.TOPICS }]), []);
});

test('dalf blanc-02: lengths by the FEI count', () => {
  const ce = countWords(blanc02.CE_TASKS[0]!.parts![0]!.text!);
  ok(ce >= 1500 && ce <= 2000, `CE text ${ce}`);
  const [syn, essai] = blanc02.PE_TASKS;
  const dossier = syn!.parts!.reduce((n, d) => n + countWords(d.text ?? ''), 0);
  // STANDARD-dalf-c1 §6.1 « about 1000 »: the orchestrator's 950-1050, tighter than paper-rules' 850-1150.
  ok(dossier >= 950 && dossier <= 1050, `synthèse dossier ${dossier} (aim 950-1050)`);
  // Decision 36: the essai repeats the dossier identically.
  deepStrictEqual(essai!.parts!.map((d) => [d.label, d.text]), syn!.parts!.map((d) => [d.label, d.text]));
  const m = countWords(syn!.modelAnswer!);
  ok(m >= 200 && m <= 240, `synthèse model ${m}`);
  const e = countWords(essai!.modelAnswer!);
  ok(e >= 280 && e <= 350, `essai model ${e} (STANDARD §6.2: 280-350)`);
  for (const t of blanc02.PO_TASKS.filter((x) => x.taskType === 'po_monologue')) {
    const d = (t.parts ?? []).reduce((n, p) => n + countWords(p.text ?? ''), 0);
    ok(d >= 800 && d <= 1100, `${t.id}: exposé dossier ${d} (STANDARD §6.3: 800-1100)`);
    const mw = countWords(t.modelAnswer ?? '');
    ok(mw >= 1100 && mw <= 1300, `${t.id}: exposé model ${mw} (STANDARD §7.4: 1100-1300, 8-9 min)`);
  }
});

test('dalf blanc-02: copy rules (no em dash, no banned word, curly apostrophes)', () => {
  const all = JSON.stringify(blanc02.TASKS);
  ok(!all.includes(String.fromCharCode(0x2014)), 'em dash in candidate-facing copy');
  ok(!/hon{2}[eê]te|hon[e]st/i.test(all), 'banned word');
  ok(!all.includes("'"), 'straight apostrophe in a French string');
});
