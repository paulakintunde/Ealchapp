// The DALF C1 rules, fired on purpose.
//
// Same discipline as delf/paper-rules.test.ts: one synthetic paper that passes
// EVERY rule (so a rule that fires on good input is caught too), then each rule
// fed a copy broken in exactly the way it exists to catch. A rule proved only
// against a paper that satisfies it has been proved to do nothing.
//
// The fixture's text is placeholder tokens (mot0 mot1 ...), never French
// content: these tests measure shape, and no FEI wording belongs anywhere here.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import type { ExamDebate, ExamPaper, ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { validateExamPaper, validateExamTask } from '../../../ealch-v2/src/content/schema.ts';
import {
  audioCeilingViolations,
  countWords,
  dalfPaperViolations,
  documentLengthViolations,
  identityViolations,
  imageViolations,
  itemViolations,
  keyScatterViolations,
  kindMixViolations,
  listeningClockViolations,
  openTaskViolations,
  playCountViolations,
  pointViolations,
  questionCountViolations,
  readingTextViolations,
  readWindowViolations,
  sectionClockViolations,
  speakingViolations,
  topicLedgerViolations,
  writingViolations,
  type DalfPaper,
} from './paper-rules.ts';

/* ── fixtures ─────────────────────────────────────────────────────────────── */

const V = 'blanc-99';
const words = (n: number, tag = 'mot') => Array.from({ length: n }, (_, i) => `${tag}${i}`).join(' ');
const clone = <T>(x: T): T => structuredClone(x);

let mcqSeq = 0;
const mcq = (points: number): QcmItem =>
  ({ q: 'q', opts: ['a', 'b', 'c'], correct: mcqSeq++ % 3, band: 'c1', points });
const short = (points: number): QcmItem =>
  ({ kind: 'short', q: 'q', opts: [], correct: -1, band: 'c1', points,
    keywords: [['quantif', 'mesur'], ['malheur']], model: 'On peut quantifier le malheur, pas le bonheur.' });
let tfjSeq = 0;
const tfj = (points: number, quote: string): QcmItem =>
  ({ kind: 'tfj', q: 'q', opts: ['Vrai', 'Faux'], correct: tfjSeq++ % 2, band: 'c1', points, quotes: [quote] });

const task = (seq: string, taskType: ExamTask['taskType'], skill: ExamTask['skill'], extra: Partial<ExamTask>): ExamTask =>
  ({ id: `exam.dalf_c1.${V}.${taskType}.${seq}`, format: 'dalf_c1', variant: V, taskType, skill, level: 'c1',
    formatVersion: 'dalf-c1-2026.10', prompt: 'p', timingS: 60, ...extra }) as ExamTask;

const QUOTES = ['premiere phrase justificative du texte', 'deuxieme phrase justificative', 'troisieme passage cite', 'quatrieme passage cite ici'];

function coTasks(): ExamTask[] {
  mcqSeq = 0;
  // Part 1: 10 questions worth 18, MCQ and short mixed.
  const p1 = [1.5, 2, 2, 2, 1.5, 2, 2, 2, 1, 2].map((pt, i) => ([0, 1, 4, 8].includes(i) ? mcq(pt) : short(pt)));
  return [
    task('001', 'co_mcq', 'CO', { parts: [{ label: 'Document 1', text: words(1200), durationS: 380, playCount: 2, readWindowS: 180, items: p1 }] }),
    task('002', 'co_mcq', 'CO', { parts: [2, 2, 3].map((n, k) => ({
      label: `Extrait ${k + 1}`, text: words(200), durationS: 70, playCount: 1, readWindowS: 50,
      items: Array.from({ length: n }, () => mcq(1)) })) }),
  ];
}

function ceTasks(): ExamTask[] {
  tfjSeq = 0;
  const text = `${words(1560)} ${QUOTES.join(' ')}`;
  const pts = [1, 2, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2];
  const its = pts.map((pt, i) =>
    [0, 4, 11].includes(i) ? mcq(pt) : [3, 7, 8, 9].includes(i) ? tfj(pt, QUOTES[[3, 7, 8, 9].indexOf(i)]!) : short(pt));
  return [task('003', 'ce_mcq', 'CE', { parts: [{ label: 'Texte', text, items: its }] })];
}

const rubric = (...pts: number[]) => ({ criteria: pts.map((maxPoints, i) => ({ key: `k${i}`, label: `L${i}`, maxPoints, descriptors: ['x'] })) });

function peTasks(): ExamTask[] {
  return [
    task('004', 'pe_short', 'PE', {
      parts: [{ label: 'Document 1', text: words(500), items: [] }, { label: 'Document 2', text: words(480), items: [] }],
      responseSpec: { kind: 'text', minWords: 200, maxWords: 240 }, rubric: rubric(5, 4, 4), modelAnswer: words(220) }),
    task('005', 'pe_essay', 'PE', {
      responseSpec: { kind: 'text', minWords: 250 }, rubric: rubric(4, 4, 4), modelAnswer: words(270) }),
  ];
}

function debate(): ExamDebate {
  const moves = (kinds: string[]) => kinds.map((kind, i) => ({ id: `m${i}`, text: 't', cues: [], covers: 'c', kind, depth: 1 }));
  const axis = (id: string, against: 'pour' | 'contre', kinds: string[]) => ({ id, against, about: 'a', moves: moves(kinds) });
  const four = (side: 'pour' | 'contre') => [
    axis(`${side}1`, side, ['counter', 'consequence', 'concession', 'retreat']),
    axis(`${side}2`, side, ['probe', 'counter-example', 'steelman']),
    axis(`${side}3`, side, ['counter', 'consequence', 'probe']),
    axis(`${side}4`, side, ['counter', 'probe', 'consequence']),
  ];
  return {
    question: 'q', opening: { id: 'o', text: 't', cues: [], covers: 'c' }, clarify: { id: 'cl', text: 't', cues: [], covers: 'c' },
    closing: { id: 'cz', text: 't', cues: [], covers: 'c' }, sideCues: { pour: ['p'], contre: ['c'] },
    axes: [...four('pour'), ...four('contre')],
  } as ExamDebate;
}

function poTasks(): ExamTask[] {
  const pair = (a: string, b: string): ExamTask[] => [
    task(a, 'po_monologue', 'PO', { prepS: 3600, parts: [{ label: 'Document 1', text: words(450), items: [] }, { label: 'Document 2', text: words(450), items: [] }],
      responseSpec: { kind: 'audio', minDurationS: 480, maxDurationS: 600 }, rubric: rubric(5, 3, 3, 2), modelAnswer: words(300) }),
    task(b, 'po_debate', 'PO', { debate: debate(),
      responseSpec: { kind: 'audio', minDurationS: 900, maxDurationS: 1200 }, rubric: rubric(5, 2, 2, 3), modelAnswer: words(300) }),
  ];
  return [...pair('006', '007'), ...pair('008', '009')];
}

function paper(): DalfPaper {
  const CO_TASKS = coTasks(), CE_TASKS = ceTasks(), PE_TASKS = peTasks(), PO_TASKS = poTasks();
  const sec = (skill: 'CO' | 'CE' | 'PE' | 'PO', timingS: number, ts: ExamTask[]) =>
    ({ skill, timingS, taskIds: ts.map((t) => t.id), blueprintId: 'dalf-c1-2026.10' });
  const PAPER: ExamPaper = {
    id: `paper.dalf_c1.${V}.1`, format: 'dalf_c1', variant: V, paperNo: 1,
    sections: [sec('CO', 2400, CO_TASKS), sec('CE', 3000, CE_TASKS), sec('PE', 9000, PE_TASKS), sec('PO', 1800, PO_TASKS)],
  } as ExamPaper;
  return { PAPER, CO_TASKS, CE_TASKS, PE_TASKS, PO_TASKS, TASKS: [...CO_TASKS, ...CE_TASKS, ...PE_TASKS, ...PO_TASKS],
    TOPICS: ['DALF-01', 'DALF-10', 'DALF-11', 'DALF-12', 'DALF-31', 'DALF-40', 'DALF-50', 'DALF-51'] };
}

/* ── the whole paper ──────────────────────────────────────────────────────── */

test('the synthetic paper passes every rule, so no rule fires on good input', () => {
  deepStrictEqual(dalfPaperViolations(paper()), []);
});

test('the FEI word count: anything between two spaces is one word', () => {
  strictEqual(countWords("c'est-à-dire"), 1);
  strictEqual(countWords('un bon sujet'), 3);
  strictEqual(countWords("  je ne l'ai pas vu  depuis avant-hier "), 7);
});

/* ── points and counts ────────────────────────────────────────────────────── */

test('the point rule holds CO to 18 + 7, CE to 25, PE to 13 + 12 and PO to 25 a subject', () => {
  const p = paper();
  p.CO_TASKS[0]!.parts![0]!.items[0]!.points = 2.5; // part 1 now 19
  ok(pointViolations(p).some((v) => v.includes('not 18 and 7')));
  ok(pointViolations(p).some((v) => v.includes('CO: totals 26')));

  const ce = paper();
  ce.CE_TASKS[0]!.parts![0]!.items[6]!.points = 2;
  ok(pointViolations(ce).some((v) => v.includes('CE: totals 24')));

  // The grids are /12.5 each; the paper prints 13 and 12. We author to the paper.
  const pe = paper();
  pe.PE_TASKS[0]!.rubric!.criteria[0]!.maxPoints = 4;
  ok(pointViolations(pe).some((v) => v.includes('not 13 (synthèse) and 12 (essai)')));

  const po = paper();
  po.PO_TASKS[3]!.rubric!.criteria[0]!.maxPoints = 4;
  ok(pointViolations(po).some((v) => v.includes('PO subject 2') && v.includes('total 24')));
});

test('the count rule keeps the paper to the 17 and 12 questions the app advertises', () => {
  const p = paper();
  p.CE_TASKS[0]!.parts![0]!.items.pop();
  ok(questionCountViolations(p.CO_TASKS, p.CE_TASKS).some((v) => v.includes('11 questions, not 12')));
  const q = paper();
  q.CO_TASKS[1]!.parts![2]!.items.pop();
  ok(questionCountViolations(q.CO_TASKS, q.CE_TASKS).some((v) => v.includes('10, 6 questions')));
});

/* ── items ────────────────────────────────────────────────────────────────── */

test('the item rule catches a wrong band, a missing weight and a four-option MCQ', () => {
  const p = paper();
  const its = p.CO_TASKS[0]!.parts![0]!.items;
  its[0]!.band = 'b2';
  delete (its[1] as { points?: number }).points;
  its[4]!.opts = ['a', 'b', 'c', 'd'];
  its[8]!.points = 1.3;
  const v = itemViolations(p.CO_TASKS);
  ok(v.some((x) => x.includes('band b2')));
  ok(v.some((x) => x.includes('weighted 1')));
  ok(v.some((x) => x.includes('4 options')));
  ok(v.some((x) => x.includes('half-point grid')));
});

test('the item rule catches a short answer with no keywords, no model, or a model that fails its own keywords', () => {
  const p = paper();
  const its = p.CE_TASKS[0]!.parts![0]!.items;
  its[1]!.keywords = [];
  its[2]!.model = '';
  its[5]!.model = 'Une réponse qui ne contient aucun des mots attendus.';
  const v = itemViolations(p.CE_TASKS);
  ok(v.some((x) => x.includes('item 1: short answer with no keyword groups')));
  ok(v.some((x) => x.includes('item 2: short answer with no model')));
  ok(v.some((x) => x.includes('item 5: the model does not meet its own keywords')));
});

test('the item rule catches a vrai/faux with no quote, or a quote the text does not contain', () => {
  const p = paper();
  const its = p.CE_TASKS[0]!.parts![0]!.items;
  its[3]!.quotes = [];
  its[7]!.quotes = ['une phrase que le texte ne contient pas'];
  its[8]!.opts = ['Oui', 'Non'];
  const v = itemViolations(p.CE_TASKS);
  ok(v.some((x) => x.includes('item 3: vrai/faux with no justifying quote')));
  ok(v.some((x) => x.includes('item 7: quote') && x.includes('not in the text')));
  ok(v.some((x) => x.includes('not ["Vrai","Faux"]')));
  // A quote typed with different accents or apostrophes still counts as found.
  const q = paper();
  q.CE_TASKS[0]!.parts![0]!.items[3]!.quotes = ['PREMIÈRE phrase  justificative'];
  deepStrictEqual(itemViolations(q.CE_TASKS), []);
});

test('the scatter rule catches an unused MCQ option and an all-Faux vrai/faux set', () => {
  const p = paper();
  for (const t of [...p.CO_TASKS, ...p.CE_TASKS]) for (const pt of t.parts!) for (const it of pt.items) {
    if ((it.kind ?? 'mcq') === 'mcq') it.correct = 0;
    if (it.kind === 'tfj') it.correct = 1;
  }
  const v = keyScatterViolations([...p.CO_TASKS, ...p.CE_TASKS]);
  ok(v.some((x) => x.includes('option 1 is never the answer')));
  ok(v.some((x) => x.includes('option 0 answers 14 of 14')));
  ok(v.some((x) => x.includes('all 4 vrai/faux answers are Faux')));
});

test('the kind-mix rule catches a comprehension épreuve of MCQ only', () => {
  const p = paper();
  const pt = p.CE_TASKS[0]!.parts![0]!;
  pt.items = pt.items.map((it) => ({ q: it.q, opts: ['a', 'b', 'c'], correct: 0, band: 'c1', points: it.points }));
  const v = kindMixViolations(p.CO_TASKS, p.CE_TASKS);
  ok(v.includes('CE has no short questions'));
  ok(v.includes('CE has no tfj questions'));
});

/* ── listening ────────────────────────────────────────────────────────────── */

test('the play-count rule: part 1 twice, every extract once, two or three extracts', () => {
  const once = paper().CO_TASKS;
  once[0]!.parts![0]!.playCount = 1;
  ok(playCountViolations(once).some((v) => v.includes('expected one document played twice')));
  const twice = paper().CO_TASKS;
  twice[1]!.parts![1]!.playCount = 2;
  ok(playCountViolations(twice).some((v) => v.includes('every extract is heard once')));
  const lone = paper().CO_TASKS;
  lone[1]!.parts = lone[1]!.parts!.slice(0, 1);
  ok(playCountViolations(lone).some((v) => v.includes('1 extracts, expected 2 or 3')));
});

test('the read-window rule holds the published 3 min and 50 s', () => {
  const p = paper().CO_TASKS;
  p[0]!.parts![0]!.readWindowS = 60;
  p[1]!.parts![0]!.readWindowS = 15;
  const v = readWindowViolations(p);
  ok(v.some((x) => x.includes('readWindowS 60, expected 180')));
  ok(v.some((x) => x.includes('readWindowS 15, expected 50')));
});

test('the document-length rule: part 1 runs 6-8 min, extracts 60-120 s, words stand in before a render', () => {
  const short1 = paper().CO_TASKS;
  short1[0]!.parts![0]!.durationS = 250;
  ok(documentLengthViolations(short1).some((v) => v.includes('250s, outside the 360-480s part 1')));
  const long2 = paper().CO_TASKS;
  long2[1]!.parts![0]!.durationS = 150;
  ok(documentLengthViolations(long2).some((v) => v.includes('150s, outside the 60-120s part 2')));

  const unrendered = paper().CO_TASKS;
  delete unrendered[0]!.parts![0]!.durationS;
  deepStrictEqual(documentLengthViolations(unrendered), [`exam.dalf_c1.${V}.co_mcq.001 · Document 1: no durationS to check`]);
  unrendered[0]!.parts![0]!.text = words(600);
  ok(documentLengthViolations(unrendered).some((v) => v.includes('600 words is outside the 1050-1400')));
});

test('the ceiling is 10 minutes of RECORDED audio, the long document counted once', () => {
  // 380 + 3 x 70 = 590 s recorded, though 970 s are played.
  deepStrictEqual(audioCeilingViolations(paper().CO_TASKS), []);
  const p = paper().CO_TASKS;
  p[0]!.parts![0]!.durationS = 480; // in its own band, and the paper is now 690 s
  ok(audioCeilingViolations(p).some((v) => v.includes('690s')));
  deepStrictEqual(documentLengthViolations(p), [], 'the band alone does not catch it: the ceiling is a separate rule');
});

test('the listening clock counts both plays and every published window', () => {
  const p = paper().CO_TASKS;
  deepStrictEqual(listeningClockViolations(p, 2400), []);
  // 180 + 2 x 380 + 480 = 1420 for part 1, 3 x (50 + 70 + 50) = 510 for part 2.
  ok(listeningClockViolations(p, 1929).some((v) => v.includes('needs 1930s')));
});

/* ── reading ──────────────────────────────────────────────────────────────── */

test('the reading rule holds one text of 1500 to 2000 words', () => {
  const p = paper().CE_TASKS;
  p[0]!.parts![0]!.text = words(1200);
  ok(readingTextViolations(p).some((v) => v.includes('1200 words, outside 1500-2000')));
  p[0]!.parts![0]!.text = words(2300);
  ok(readingTextViolations(p).some((v) => v.includes('2300 words')));
  const two = paper().CE_TASKS;
  two[0]!.parts!.push({ ...two[0]!.parts![0]!, label: 'Texte 2' });
  ok(readingTextViolations(two).some((v) => v.includes('expected one text')));
});

/* ── writing ──────────────────────────────────────────────────────────────── */

test('the writing rule catches a thin dossier, a wrong range and a model outside it', () => {
  const p = paper().PE_TASKS;
  p[0]!.parts = [{ label: 'Document 1', text: words(600), items: [] }];
  p[0]!.responseSpec = { kind: 'text', minWords: 180, maxWords: 260 };
  p[0]!.modelAnswer = words(250);
  const v = writingViolations(p);
  ok(v.some((x) => x.includes('1 document(s)')));
  ok(v.some((x) => x.includes('600 words, outside 850-1150')));
  ok(v.some((x) => x.includes('text, 200-240 words')));
  ok(v.some((x) => x.includes('counts 250 words, outside 200-240')));
});

test('the writing rule catches an essai without the 250-word floor', () => {
  const p = paper().PE_TASKS;
  p[1]!.responseSpec = { kind: 'text', minWords: 200 };
  p[1]!.modelAnswer = words(230);
  p[1]!.taskType = 'pe_short';
  const v = writingViolations(p);
  ok(v.some((x) => x.includes('minWords 250')));
  ok(v.some((x) => x.includes('under 250')));
  ok(v.some((x) => x.includes('not pe_essay')));
});

/* ── speaking ─────────────────────────────────────────────────────────────── */

test('the speaking rule catches a short prep, a missing dossier and a timed-wrong exposé', () => {
  const p = paper().PO_TASKS;
  p[0]!.prepS = 1800;
  p[2]!.parts = [];
  p[0]!.responseSpec = { kind: 'audio', minDurationS: 300, maxDurationS: 420 };
  const v = speakingViolations(p);
  ok(v.some((x) => x.includes('prep is 1800s, expected one hour')));
  ok(v.some((x) => x.includes('.008: the exposé has no dossier')));
  ok(v.some((x) => x.includes('480-600 s')));
});

test('the speaking rule requires the entretien to be a po_debate with a deep, two-sided bank', () => {
  const p = paper().PO_TASKS;
  p[1]!.taskType = 'po_interaction';
  ok(speakingViolations(p).some((v) => v.includes('not po_debate')));

  const thin = paper().PO_TASKS;
  for (const a of thin[3]!.debate!.axes) a.moves = a.moves.slice(0, 2);
  ok(speakingViolations(thin).some((v) => v.includes('.009: ') && v.includes('non-retreat moves')));

  const one = paper().PO_TASKS;
  one.splice(2, 2);
  ok(speakingViolations(one).some((v) => v.includes('expected two subjects')));
});

test('the open-task rule catches a thin rubric and an unmarkable model answer', () => {
  const p = paper();
  p.PE_TASKS[1]!.rubric = rubric(12);
  p.PO_TASKS[1]!.modelAnswer = 'trop court';
  const v = openTaskViolations(p.PE_TASKS, p.PO_TASKS);
  ok(v.some((x) => x.includes('fewer than three rubric criteria')));
  ok(v.some((x) => x.includes('too short to mark against')));
});

/* ── identity, clocks, images ─────────────────────────────────────────────── */

test('the identity rule catches a bad paper id, a stray variant, a b2 task and a stale formatVersion', () => {
  const p = paper();
  deepStrictEqual(identityViolations({ ...p.PAPER, id: 'paper.dalf_c1.blanc-9.1' }, []), ['paper.dalf_c1.blanc-9.1: not paper.dalf_c1.blanc-NN.N']);
  ok(identityViolations({ ...p.PAPER, id: 'paper.dalf_c1.blanc-98.1' }, []).some((v) => v.includes('names blanc-98')));
  ok(identityViolations({ ...p.PAPER, paperNo: 2 }, []).some((v) => v.includes('paperNo is 2')));

  const t = clone(p.CE_TASKS[0]!);
  t.id = 'exam.dalf_c1.blanc-01.ce_mcq.003';
  t.level = 'b2';
  t.formatVersion = 'delf-b2-2026.09';
  const v = identityViolations(p.PAPER, [t]);
  ok(v.some((x) => x.includes('belongs to blanc-01')));
  ok(v.some((x) => x.includes('level b2')));
  ok(v.some((x) => x.includes('formatVersion delf-b2-2026.09')));
});

test('the clock rule catches a section that drifted or a stale blueprintId', () => {
  const p = paper().PAPER;
  p.sections[1]!.timingS = 3600;
  p.sections[2]!.blueprintId = 'delf-b2-2026.09';
  const v = sectionClockViolations(p);
  ok(v.some((x) => x.includes('CE: 3600s, expected 3000s')));
  ok(v.some((x) => x.includes('PE: blueprintId delf-b2-2026.09')));
});

test('the image rule refuses a stimulus this format never has', () => {
  const p = paper();
  p.CE_TASKS[0]!.parts![0]!.imageRef = 'img/x.png';
  ok(imageViolations(p.TASKS).some((v) => v.includes('text and audio')));
});

/* ── the ledger ───────────────────────────────────────────────────────────── */

test('the topic ledger catches a row spent twice, a short draw and a foreign id', () => {
  const a = ['DALF-01', 'DALF-10', 'DALF-11', 'DALF-12', 'DALF-31', 'DALF-40', 'DALF-50', 'DALF-51'];
  const b = ['DALF-02', 'DALF-13', 'DALF-14', 'DALF-32', 'DALF-41', 'DALF-52', 'DALF-53'];
  deepStrictEqual(topicLedgerViolations([{ variant: 'blanc-01', topics: a }, { variant: 'blanc-02', topics: b }]), []);
  ok(topicLedgerViolations([{ variant: 'blanc-01', topics: a }, { variant: 'blanc-02', topics: [...b.slice(1), 'DALF-10'] }])
    .some((v) => v.includes('DALF-10 is spent by both blanc-01 and blanc-02')));
  ok(topicLedgerViolations([{ variant: 'blanc-02', topics: b.slice(0, 6) }]).some((v) => v.includes('spends 6 topics')));
  ok(topicLedgerViolations([{ variant: 'blanc-02', topics: [...b.slice(1), 'DELF-07'] }]).some((v) => v.includes('not a DALF bank id')));
  ok(topicLedgerViolations([{ variant: 'blanc-02', topics: [...b, 'DALF-13'] }]).some((v) => v.includes('spends DALF-13 twice')));
});

/* ── the fixture is a shape the schema accepts ────────────────────────────── */

test('the passing fixture is schema-valid, so these rules describe a paper that can exist', () => {
  // Without this, the rules could be satisfied only by a shape validateExamTask
  // refuses (a dossier on the wrong task type, a tfj without two options), and
  // the first real paper would discover the contradiction at publish time.
  const p = paper();
  const issues = p.TASKS.filter((t) => t.taskType !== 'po_debate').flatMap((t) => validateExamTask(t, t.id));
  deepStrictEqual(issues, []);
  deepStrictEqual(validateExamPaper(p.PAPER), []);
});
