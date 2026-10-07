// DALF C1 blanc-05, against the format's rules.
//
// The rules live in dalf/paper-rules.ts and are exercised on deliberately
// broken input in its own test. What runs here is the call on this paper, plus
// the item-level promises made in its headers, asserted directly so a failure
// names the item rather than a rule: the corrigé meets its own keywords, no
// keyword is lifted from its question, copying the question back never passes,
// every quote is verbatim, the topic ledger across all five papers, the point
// pattern, the length ranges, the audio estimates, the speaker labels, the
// copy rules and the excluded topics. Everything blanc-03's and blanc-04's
// tests cover, in one file.
import { deepStrictEqual, ok } from 'node:assert';
import { test } from 'node:test';
import type { ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { validateExamPaper, validateExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { spokenTranscript } from '../../../ealch-v2/src/utils/coPlayback.logic.ts';
import { fold, keywordsMet } from '../../../ealch-v2/src/utils/shortAnswer.logic.ts';
import { countWords, dalfPaperViolations, topicLedgerViolations } from '../dalf/paper-rules.ts';
import { TOPICS as TOPICS_01 } from '../dalf-blanc01/common.ts';
import { TOPICS as TOPICS_02 } from '../dalf-blanc02/common.ts';
import { TOPICS as TOPICS_03 } from '../dalf-blanc03/common.ts';
import { TOPICS as TOPICS_04 } from '../dalf-blanc04/common.ts';
import * as blanc05 from './paper.ts';

const itemsOf = (ts: ExamTask[]) =>
  ts.flatMap((t) => (t.parts ?? []).flatMap((p) => (p.items ?? []).map((it, i) => ({ t, p, it, where: `${t.id} · ${p.label} item ${i}` }))));
const closed = itemsOf([...blanc05.CO_TASKS, ...blanc05.CE_TASKS]);
const kind = (it: QcmItem) => it.kind ?? 'mcq';
const words = (s?: string) => countWords(s ?? '');
const dossier = (t: ExamTask) => (t.parts ?? []).reduce((n, p) => n + words(p.text), 0);
const inside = (n: number, lo: number, hi: number, what: string) => ok(n >= lo && n <= hi, `${what}: ${n} words, outside ${lo}-${hi}`);

test('dalf blanc-05: the schema accepts every task and the paper', () => {
  for (const t of blanc05.TASKS) {
    const issues = validateExamTask(t);
    ok(issues.length === 0, `${t.id}: ${issues.map((i) => `${i.path} ${i.message}`).join(' · ')}`);
  }
  const p = validateExamPaper(blanc05.PAPER);
  ok(p.length === 0, p.map((i) => `${i.path} ${i.message}`).join(' · '));
});

test('dalf blanc-05: every rule of the format (zero dalfPaperViolations)', () => {
  const problems = dalfPaperViolations(blanc05);
  deepStrictEqual(problems, [], `blanc-05 breaks the format:\n  ${problems.join('\n  ')}`);
});

test('dalf blanc-05: id, variant and format version', () => {
  deepStrictEqual(blanc05.PAPER.id, 'paper.dalf_c1.blanc-05.5');
  deepStrictEqual(blanc05.PAPER.variant, 'blanc-05');
  for (const t of blanc05.TASKS) deepStrictEqual(t.formatVersion, 'dalf-c1-2026.10', t.id);
});

test('dalf blanc-05: the topic ledger is exactly the pre-assigned draw, and disjoint from papers 1-4', () => {
  deepStrictEqual([...blanc05.TOPICS], ['DALF-05', 'DALF-18', 'DALF-19', 'DALF-36', 'DALF-45', 'DALF-58', 'DALF-60']);
  deepStrictEqual(
    topicLedgerViolations([
      { variant: 'blanc-01', topics: TOPICS_01 },
      { variant: 'blanc-02', topics: TOPICS_02 },
      { variant: 'blanc-03', topics: TOPICS_03 },
      { variant: 'blanc-04', topics: TOPICS_04 },
      { variant: 'blanc-05', topics: blanc05.TOPICS },
    ]),
    []
  );
});

test('dalf blanc-05: closed tasks route misses to the C1 target cards', () => {
  for (const t of blanc05.CO_TASKS) ok((t.targetItemIds ?? []).every((id) => id.startsWith('fr.c1.discours-dexamen.')) && t.targetItemIds!.length === 12, `${t.id}: CO targets`);
  for (const t of blanc05.CE_TASKS) ok((t.targetItemIds ?? []).every((id) => id.startsWith('fr.c1.strategies-de-comprehension.')) && t.targetItemIds!.length === 12, `${t.id}: CE targets`);
});

test('dalf blanc-05: every short answer’s own model meets its keyword groups', () => {
  const shorts = closed.filter(({ it }) => kind(it) === 'short');
  ok(shorts.length === 11, `expected 6 CO + 5 CE short answers, got ${shorts.length}`);
  for (const { it, where } of shorts) {
    ok(it.model && keywordsMet(it.model, it.keywords ?? []), `${where}: the model does not meet its keywords`);
  }
});

test('dalf blanc-05: keywords are stems of four letters or more, and none is a word of its own question', () => {
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

test('dalf blanc-05: copying the question back never meets the keywords', () => {
  for (const { it, where } of closed.filter(({ it }) => kind(it) === 'short')) {
    ok(!keywordsMet(it.q, it.keywords ?? []), `${where}: the question itself passes its keywords`);
  }
});

test('dalf blanc-05: every vrai/faux quote appears verbatim in its text, at least five words, two Vrai and two Faux', () => {
  const tfj = closed.filter(({ it }) => kind(it) === 'tfj');
  ok(tfj.length === 4, `expected 4 vrai/faux, got ${tfj.length}`);
  for (const { p, it, where } of tfj) {
    ok((it.quotes ?? []).length > 0, `${where}: no quote`);
    for (const q of it.quotes ?? []) {
      ok(fold(p.text ?? '').includes(fold(q)), `${where}: quote not in the text: "${q}"`);
      // Verbatim, not only fold-equal: the candidate copies what they read.
      ok((p.text ?? '').includes(q), `${where}: quote not verbatim: "${q}"`);
      ok(q.split(/\s+/).length >= 5, `${where}: quote "${q}" is under five words`);
    }
  }
  deepStrictEqual(tfj.map(({ it }) => it.correct).sort(), [0, 0, 1, 1], 'two Vrai and two Faux');
});

test('dalf blanc-05: MCQ keys are scattered per part, and short and tfj items were left alone', () => {
  const mcq = closed.filter(({ it }) => kind(it) === 'mcq');
  ok(mcq.length === 14, `expected 4 + 7 + 3 MCQ, got ${mcq.length}`);
  for (const opt of [0, 1, 2]) ok(mcq.some(({ it }) => it.correct === opt), `option ${opt} is never the key`);
  for (const p of [...blanc05.CO_TASKS, ...blanc05.CE_TASKS].flatMap((t) => t.parts ?? [])) {
    const keys = p.items.filter((i) => kind(i) === 'mcq').map((i) => i.correct);
    ok(!blanc05.hasMonotoneRun(keys), `${p.label}: MCQ keys ${keys.join(',')} read as a rotation (ascending or descending)`);
  }
  for (const { it, where } of closed.filter(({ it }) => kind(it) === 'short')) {
    ok(it.correct === -1 && it.opts.length === 0, `${where}: a short answer was touched by the scatter`);
  }
  for (const { it, where } of closed.filter(({ it }) => kind(it) === 'tfj')) {
    deepStrictEqual(it.opts, ['Vrai', 'Faux'], `${where}: Vrai/Faux reordered`);
  }
});

test('dalf blanc-05: points follow the published pattern', () => {
  const [p1, p2] = blanc05.CO_TASKS;
  const pts = (t: ExamTask, k: 'mcq' | 'short' | 'tfj') => (t.parts ?? []).flatMap((p) => p.items).filter((i) => kind(i) === k).map((i) => i.points);
  deepStrictEqual(pts(p1!, 'mcq'), [1.5, 1.5, 1, 2]);
  deepStrictEqual(pts(p1!, 'short'), [2, 2, 2, 2, 2, 2]);
  deepStrictEqual(pts(p2!, 'mcq'), [1, 1, 1, 1, 1, 1, 1]);
  const ce = blanc05.CE_TASKS[0]!;
  deepStrictEqual(pts(ce, 'mcq'), [1, 2, 2]);
  deepStrictEqual([...pts(ce, 'short')].sort(), [2, 2, 2, 3, 3]);
  deepStrictEqual(pts(ce, 'tfj'), [2, 2, 2, 2]);
});

test('dalf blanc-05: lengths by the FEI count', () => {
  inside(words(blanc05.CE_TASKS[0]!.parts![0]!.text), 1500, 2000, 'CE text');

  const [syn, essai] = blanc05.PE_TASKS;
  inside(dossier(syn!), 950, 1050, 'synthèse dossier');
  // Decision 36: the essai repeats the dossier identically.
  deepStrictEqual(essai!.parts!.map((d) => [d.label, d.text]), syn!.parts!.map((d) => [d.label, d.text]));
  deepStrictEqual(essai!.parts, syn!.parts, 'the essai must repeat the synthèse dossier');
  inside(words(syn!.modelAnswer), 200, 240, 'synthèse model');
  inside(words(essai!.modelAnswer), 280, 350, 'essai model (STANDARD §6.2)');

  for (const t of blanc05.PO_TASKS.filter((x) => x.taskType === 'po_monologue')) {
    ok((t.parts ?? []).length === 2, `${t.id}: the exposé dossier has two documents`);
    inside(dossier(t), 800, 1100, `${t.id} exposé dossier (STANDARD §6.3)`);
    inside(words(t.modelAnswer), 1100, 1300, `${t.id} exposé model (STANDARD §7.4)`);
  }
});

test('dalf blanc-05: each durationS is the 175 wpm estimate, and the recording stays under 570 s', () => {
  let recorded = 0;
  for (const p of blanc05.CO_TASKS.flatMap((t) => t.parts ?? [])) {
    const est = Math.ceil((countWords(spokenTranscript(p.text ?? '')) / 175) * 60);
    deepStrictEqual(p.durationS, est, `${p.label}: durationS ${p.durationS} is not the 175 wpm estimate ${est}`);
    recorded += est;
  }
  ok(recorded <= 570, `recorded audio estimated at ${recorded}s, leaving under 30s of headroom below 600s`);
});

test('dalf blanc-05: every speaker turn starts its own line with its label, and part 2 names its genre', () => {
  // A label in mid-line would be read aloud by the previous speaker's voice.
  const label = /(?:UNE?|LA|LE) [A-ZÀ-Ý’' -]{2,28} :/g;
  const LEAD = /^(UN|UNE) [A-ZÀ-Ý]+ : \S/;
  for (const p of blanc05.CO_TASKS.flatMap((t) => t.parts ?? [])) {
    for (const line of (p.text ?? '').split('\n')) {
      const hits = [...line.matchAll(label)];
      ok(hits.length === 1 && hits[0]!.index === 0, `${p.label}: line without exactly one leading label: « ${line.slice(0, 60)} »`);
      ok(LEAD.test(line), `${p.label}: a line does not open on a one-word speaker label: « ${line.slice(0, 50)} »`);
    }
  }
  deepStrictEqual((blanc05.CO_TASKS[1]!.parts ?? []).map((p) => p.label), ['Document 1 · chronique', 'Document 2 · flash d’information']);
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

test('dalf blanc-05: copy rules (dashes, banned word, apostrophes, spacing, sans que)', () => {
  const all = blanc05.TASKS.flatMap((t) => strings(t).map((s) => ({ id: t.id, s })));
  for (const { id, s } of all) {
    const at = (re: RegExp) => s.slice(Math.max(0, s.search(re) - 30), s.search(re) + 30);
    ok(!/[—–]/.test(s), `${id}: dash in « ${at(/[—–]/)} »`);
    ok(!/honn[eê]t|\bhonest/i.test(s), `${id}: banned word in « ${at(/honn[eê]t|\bhonest/i)} »`);
    ok(!s.includes("'"), `${id}: straight apostrophe in « ${at(/'/)} »`);
    // House convention: a plain space before ? ! ; :
    ok(!/[^\s][?!;:]/.test(s), `${id}: ? ! ; or : without a space before it in « ${at(/[^\s][?!;:]/)} »`);
    ok(!/[^ \n] {2,}\S/.test(s), `${id}: doubled space in « ${at(/ {2,}/)} »`);
    // No expletive « ne » after « sans que ».
    ok(!/sans qu(?:e |’)(?:\S+ ){0,4}n(?:e |’)/i.test(s), `${id}: « ne » after « sans que » in « ${at(/sans qu/i)} »`);
  }
});

test('dalf blanc-05: no FEI demo-excluded topic is mentioned, even in passing', () => {
  // TOPICS-dalf-c1 « Excluded »: happiness or national wealth, rediscovered
  // species, postcards, career change and guest houses, language diversity,
  // work and idleness (and automation shrinking work), biodiversity.
  const banned = /biodiversit|esp[eè]ces? (?:menac|disparu|redécouv)|fossile vivant|langues? (?:menac|r[ée]gional|en danger|étrang)|diversit[ée] linguistique|bonheur|carte postale|chambres? d’h[oô]tes|oisivet|automatisation/i;
  for (const t of blanc05.TASKS) {
    for (const s of strings(t)) ok(!banned.test(s), `${t.id}: excluded topic in « ${s.slice(Math.max(0, s.search(banned) - 30), s.search(banned) + 40)} »`);
  }
  const text = fold(blanc05.TASKS.flatMap((t) => strings(t)).join(' \n '));
  for (const w of [
    'bonheur', 'heureux', 'heureuse', 'produit interieur', 'pib', 'richesse nationale', 'fossile', 'espece', 'biodiversit',
    'oiseau', 'insecte', 'faune', 'flore', 'chambre d hote', 'reconversion', 'oisivete', 'paresse', 'langue regionale',
    'langues en danger', 'patois', 'dialecte', 'bilingu', 'carte postale', 'cartes postales', 'automatisation', 'robot',
    'chomage', 'emplois supprimes', 'perte d emploi', 'remplacer les travailleurs',
  ]) {
    ok(!` ${text} `.includes(` ${w}`), `excluded-topic word « ${w} » appears in the paper`);
  }
});
