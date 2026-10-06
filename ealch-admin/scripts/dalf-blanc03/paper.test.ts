// DALF C1 blanc-03, against the format's rules.
//
// The format's rules live in dalf/paper-rules.ts and are fired against broken
// input in dalf/paper-rules.test.ts, because a rule proved only against a paper
// that satisfies it has been proved to do nothing. What this file adds is the
// call on THIS paper, plus explicit asserts for the item-level promises made in
// its headers (a corrigé that meets its own keywords, a quote found verbatim in
// its text, keywords never lifted from their question), the lengths of
// STANDARD-dalf-c1 §6-7, the audio estimates, the casting conventions the
// renderer relies on, and the copy rules no shared rule checks yet.
import { deepStrictEqual, ok } from 'node:assert';
import { test } from 'node:test';
import type { ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { validateExamPaper, validateExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { spokenTranscript } from '../../../ealch-v2/src/utils/coPlayback.logic.ts';
import { fold, keywordsMet } from '../../../ealch-v2/src/utils/shortAnswer.logic.ts';
import { countWords, dalfPaperViolations, topicLedgerViolations } from '../dalf/paper-rules.ts';
import { TOPICS as TOPICS_01 } from '../dalf-blanc01/common.ts';
import { TOPICS as TOPICS_02 } from '../dalf-blanc02/common.ts';
import * as blanc03 from './paper.ts';

const itemsOf = (ts: ExamTask[]) =>
  ts.flatMap((t) => (t.parts ?? []).flatMap((p) => (p.items ?? []).map((it, i) => ({ t, p, it, where: `${t.id} · ${p.label} item ${i}` }))));
const closed = itemsOf([...blanc03.CO_TASKS, ...blanc03.CE_TASKS]);
const kind = (it: QcmItem) => it.kind ?? 'mcq';
const words = (s?: string) => countWords(s ?? '');
const dossier = (t: ExamTask) => (t.parts ?? []).reduce((n, p) => n + words(p.text), 0);
const inside = (n: number, lo: number, hi: number, what: string) => ok(n >= lo && n <= hi, `${what}: ${n} words, outside ${lo}-${hi}`);

test('dalf blanc-03: the schema accepts every task and the paper', () => {
  for (const t of blanc03.TASKS) {
    const issues = validateExamTask(t);
    ok(issues.length === 0, `${t.id}: ${issues.map((i) => `${i.path} ${i.message}`).join(' · ')}`);
  }
  const p = validateExamPaper(blanc03.PAPER);
  ok(p.length === 0, p.map((i) => `${i.path} ${i.message}`).join(' · '));
});

test('dalf blanc-03: every rule of the format (zero dalfPaperViolations)', () => {
  const problems = dalfPaperViolations(blanc03);
  deepStrictEqual(problems, [], `blanc-03 breaks the format:\n  ${problems.join('\n  ')}`);
});

test('dalf blanc-03: id, variant and format version', () => {
  deepStrictEqual(blanc03.PAPER.id, 'paper.dalf_c1.blanc-03.3');
  deepStrictEqual(blanc03.PAPER.variant, 'blanc-03');
  for (const t of blanc03.TASKS) deepStrictEqual(t.formatVersion, 'dalf-c1-2026.10', t.id);
});

test('dalf blanc-03: the topic ledger is exactly the pre-assigned draw, and disjoint from papers 1-2', () => {
  deepStrictEqual([...blanc03.TOPICS], ['DALF-03', 'DALF-13', 'DALF-15', 'DALF-34', 'DALF-43', 'DALF-52', 'DALF-56']);
  deepStrictEqual(
    topicLedgerViolations([
      { variant: 'blanc-01', topics: TOPICS_01 },
      { variant: 'blanc-02', topics: TOPICS_02 },
      { variant: 'blanc-03', topics: blanc03.TOPICS },
    ]),
    []
  );
});

test('dalf blanc-03: closed tasks route misses to the C1 target cards', () => {
  for (const t of blanc03.CO_TASKS) ok((t.targetItemIds ?? []).every((id) => id.startsWith('fr.c1.discours-dexamen.')) && t.targetItemIds!.length === 12, `${t.id}: CO targets`);
  for (const t of blanc03.CE_TASKS) ok((t.targetItemIds ?? []).every((id) => id.startsWith('fr.c1.strategies-de-comprehension.')) && t.targetItemIds!.length === 12, `${t.id}: CE targets`);
});

test('dalf blanc-03: every short answer’s own model meets its keyword groups', () => {
  const shorts = closed.filter(({ it }) => kind(it) === 'short');
  ok(shorts.length === 11, `expected 6 CO + 5 CE short answers, got ${shorts.length}`);
  for (const { it, where } of shorts) {
    ok(it.model && keywordsMet(it.model, it.keywords ?? []), `${where}: the model does not meet its keywords`);
  }
});

test('dalf blanc-03: keywords are stems of four letters or more, and none is lifted from its question', () => {
  // STANDARD-dalf-c1 §4 rules 2 and 4: a candidate copying the question back must not pass.
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

test('dalf blanc-03: copying the question back never meets the keywords', () => {
  for (const { it, where } of closed.filter(({ it }) => kind(it) === 'short')) {
    ok(!keywordsMet(it.q, it.keywords ?? []), `${where}: the question itself passes its keywords`);
  }
});

test('dalf blanc-03: every vrai/faux quote is verbatim in its text, and the key is two Vrai, two Faux', () => {
  const tfj = closed.filter(({ it }) => kind(it) === 'tfj');
  ok(tfj.length === 4, `expected 4 vrai/faux, got ${tfj.length}`);
  for (const { p, it, where } of tfj) {
    for (const q of it.quotes ?? []) {
      // Verbatim, not just fold-equal: the candidate copies from the page.
      ok((p.text ?? '').includes(q), `${where}: quote "${q.slice(0, 50)}" is not verbatim in the text`);
      ok(q.split(/\s+/).length >= 5, `${where}: quote "${q}" is under five words`);
    }
  }
  deepStrictEqual(tfj.map(({ it }) => it.correct).sort(), [0, 0, 1, 1], 'two Vrai and two Faux');
});

test('dalf blanc-03: MCQ keys are scattered per part and the scatter left short and tfj items alone', () => {
  const mcq = closed.filter(({ it }) => kind(it) === 'mcq');
  ok(mcq.length === 14, `expected 4 + 7 + 3 MCQ, got ${mcq.length}`);
  for (const opt of [0, 1, 2]) ok(mcq.some(({ it }) => it.correct === opt), `option ${opt} is never the key`);
  for (const t of [...blanc03.CO_TASKS, ...blanc03.CE_TASKS]) {
    for (const p of t.parts ?? []) {
      const keys = p.items.filter((i) => kind(i) === 'mcq').map((i) => i.correct);
      ok(!blanc03.hasAscendingRun(keys), `${p.label}: MCQ keys ${keys.join(',')} read as a rotation`);
    }
  }
  for (const { it, where } of closed.filter(({ it }) => kind(it) === 'short')) {
    ok(it.correct === -1 && it.opts.length === 0, `${where}: a short answer was touched by the scatter`);
  }
  for (const { it, where } of closed.filter(({ it }) => kind(it) === 'tfj')) {
    deepStrictEqual(it.opts, ['Vrai', 'Faux'], `${where}: Vrai/Faux reordered`);
  }
});

test('dalf blanc-03: points follow the published pattern', () => {
  const [p1, p2] = blanc03.CO_TASKS;
  const pts = (t: ExamTask, k: 'mcq' | 'short' | 'tfj') => (t.parts ?? []).flatMap((p) => p.items).filter((i) => kind(i) === k).map((i) => i.points);
  deepStrictEqual(pts(p1!, 'mcq'), [1, 1.5, 1.5, 2]);
  deepStrictEqual(pts(p1!, 'short'), [2, 2, 2, 2, 2, 2]);
  deepStrictEqual(pts(p2!, 'mcq'), [1, 1, 1, 1, 1, 1, 1]);
  const ce = blanc03.CE_TASKS[0]!;
  deepStrictEqual(pts(ce, 'mcq'), [1, 2, 2]);
  deepStrictEqual([...pts(ce, 'short')].sort(), [2, 2, 2, 3, 3]);
  deepStrictEqual(pts(ce, 'tfj'), [2, 2, 2, 2]);
});

test('dalf blanc-03: lengths sit inside STANDARD-dalf-c1 §6-7 and the brief', () => {
  const ce = words(blanc03.CE_TASKS[0]!.parts![0]!.text);
  inside(ce, 1500, 2000, 'CE text');

  const [syn, essai] = blanc03.PE_TASKS;
  inside(dossier(syn!), 950, 1050, 'synthèse dossier');
  inside(words(syn!.modelAnswer), 200, 240, 'model synthèse');
  inside(words(essai!.modelAnswer), 280, 350, 'model essai');
  // Decision 36: the essai's dossier is the same documents, same labels and texts.
  deepStrictEqual(essai!.parts, syn!.parts, 'the essai must repeat the synthèse dossier');

  for (const expo of blanc03.PO_TASKS.filter((t) => t.taskType === 'po_monologue')) {
    ok((expo.parts ?? []).length === 2, `${expo.id}: the exposé dossier has two documents`);
    inside(dossier(expo), 800, 1100, `${expo.id} dossier`);
    inside(words(expo.modelAnswer), 1100, 1300, `${expo.id} model exposé`);
  }
});

test('dalf blanc-03: each durationS is the spoken-word estimate at 175 wpm, and the audio fits 600 s', () => {
  let total = 0;
  for (const t of blanc03.CO_TASKS) {
    for (const p of t.parts ?? []) {
      const est = Math.ceil((countWords(spokenTranscript(p.text ?? '')) * 60) / 175);
      ok(Math.abs((p.durationS ?? 0) - est) <= 2, `${p.label}: durationS ${p.durationS}, the text now reads ${est} s at 175 wpm`);
      total += p.durationS ?? 0;
    }
  }
  ok(total <= 600, `${total} s of recorded audio`);
});

test('dalf blanc-03: every speaker turn starts on its own line, and part 2 names its genre', () => {
  const LABEL = /^(UN|UNE) [A-ZÀ-Ý]+ : \S/;
  const MIDLINE = /\S\s+(UN|UNE) [A-ZÀ-Ý]{3,}\s*:/;
  for (const t of blanc03.CO_TASKS) {
    for (const p of t.parts ?? []) {
      for (const line of (p.text ?? '').split('\n')) {
        ok(LABEL.test(line), `${p.label}: a line does not open on a speaker label: « ${line.slice(0, 50)} »`);
        ok(!MIDLINE.test(line), `${p.label}: a speaker label sits mid-line: « ${line.slice(0, 80)} »`);
      }
    }
  }
  const labels = (blanc03.CO_TASKS[1]!.parts ?? []).map((p) => p.label);
  deepStrictEqual(labels, ['Document 1 · chronique', 'Document 2 · sondage']);
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

test('dalf blanc-03: copy rules (dashes, banned word, apostrophes, spacing, sans que)', () => {
  const all = blanc03.TASKS.flatMap((t) => strings(t).map((s) => ({ id: t.id, s })));
  for (const { id, s } of all) {
    const at = (re: RegExp) => s.slice(Math.max(0, s.search(re) - 30), s.search(re) + 30);
    ok(!/[—–]/.test(s), `${id}: dash in « ${at(/[—–]/)} »`);
    ok(!/honn[eê]t|\bhonest/i.test(s), `${id}: banned word in « ${at(/honn[eê]t|\bhonest/i)} »`);
    ok(!/[A-Za-zÀ-ÿ]'[A-Za-zÀ-ÿ]/.test(s), `${id}: straight apostrophe in « ${at(/[A-Za-zÀ-ÿ]'[A-Za-zÀ-ÿ]/)} »`);
    // House convention: a plain space before ? ! ; :
    ok(!/[^\s][?!;:]/.test(s), `${id}: ? ! ; or : without a space before it in « ${at(/[^\s][?!;:]/)} »`);
    ok(!/[^ \n] {2,}\S/.test(s), `${id}: doubled space in « ${at(/ {2,}/)} »`);
    // No expletive « ne » after « sans que ».
    ok(!/sans qu(e |’)(\S+ ){0,4}(ne |n’)/i.test(s), `${id}: « ne » after « sans que » in « ${at(/sans qu(e |’)/i)} »`);
  }
});

test('dalf blanc-03: no passing mention of an FEI demo-excluded topic', () => {
  // TOPICS-dalf-c1 « Excluded »: happiness or national wealth, rediscovered
  // species, postcards, career change and guest houses, language diversity,
  // work and idleness (and automation shrinking work), biodiversity. None
  // may appear even in passing.
  const text = fold(blanc03.TASKS.flatMap((t) => strings(t)).join(' \n '));
  for (const banned of [
    'bonheur', 'heureux', 'heureuse', 'produit interieur', 'pib', 'richesse nationale', 'fossile', 'espece', 'biodiversit',
    'oiseau', 'insecte', 'faune', 'flore', 'chambre d hote', 'reconversion', 'oisivete', 'paresse', 'langue regionale',
    'langues en danger', 'patois', 'dialecte', 'bilingu', 'carte postale', 'cartes postales', 'automatisation', 'robot',
  ]) {
    ok(!` ${text} `.includes(` ${banned}`), `excluded-topic word « ${banned} » appears in the paper`);
  }
});
