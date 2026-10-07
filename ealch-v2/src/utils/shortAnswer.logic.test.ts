// Typed answers (DALF C1), marked the way the FEI corrigé says: any wording
// that means the answer, spelling ignored. Examples are from the shape of the
// official demo paper, written fresh (FEI copyright).
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { fold, isAnswered, keywordsMet, markAnswer, quoteMatches } from './shortAnswer.logic.ts';
import { scoreClosedTask, shortCheckBatch } from '../services/content.logic.ts';
import { validateExamTask, type ExamTask, type QcmItem } from '../content/schema.ts';

const short: QcmItem = {
  kind: 'short', q: 'Pourquoi le bonheur est-il difficile à mesurer ?', opts: [], correct: -1,
  keywords: [['individu', 'personne', 'chacun'], ['cultur']], model: 'Il dépend des individus et de la culture.', points: 2,
};
const tfj: QcmItem = {
  kind: 'tfj', q: 'La crise favorise la reconversion.', opts: ['Vrai', 'Faux'], correct: 0,
  quotes: ['La crise de l’emploi encourage chacun à être plus mobile.'], points: 2,
};
const mcq: QcmItem = { q: 'Le journaliste affirme que…', opts: ['A', 'B', 'C'], correct: 2, points: 1.5 };

test('fold is accent-, case- and punctuation-blind', () => {
  strictEqual(fold('L’Économie, Œuvre !'), 'l economie oeuvre');
});

test('key words: every group met, from the start of a word, spelling-blind', () => {
  ok(keywordsMet('Ça dépend de chaque individu et de sa culture', short.keywords!));
  ok(keywordsMet('selon les PERSONNES et les cultures', short.keywords!), 'case and plural');
  ok(!keywordsMet('ça dépend de la culture', short.keywords!), 'one group missing');
  ok(!keywordsMet('agriculture', [['cultur']]), 'inside a word does not count');
});

test('a typed answer is right on its key words, UNSURE without them, wrong when blank', () => {
  strictEqual(markAnswer(short, 'chacun le vit selon sa culture'), 'right');
  strictEqual(markAnswer(short, 'parce que ce n’est pas pareil pour tout le monde ni partout'), 'unsure', 'a rewording goes to the AI, never marked wrong outright');
  strictEqual(markAnswer(short, '   '), 'wrong');
  strictEqual(markAnswer(short, null), 'wrong');
});

test('vrai/faux needs the choice AND a justifying quote', () => {
  strictEqual(markAnswer(tfj, { choice: 1, text: 'La crise de l’emploi encourage chacun à être plus mobile.' }), 'wrong', 'wrong choice');
  strictEqual(markAnswer(tfj, { choice: 0, text: '' }), 'wrong', 'no quote, no points');
  strictEqual(markAnswer(tfj, { choice: 0, text: 'la crise de l emploi encourage chacun a etre plus mobile' }), 'right', 'copied without accents');
  strictEqual(markAnswer(tfj, { choice: 0, text: 'encourage chacun à être plus mobile' }), 'right', 'part of the sentence');
  strictEqual(markAnswer(tfj, { choice: 0, text: 'Les gens changent de métier plus souvent qu’avant.' }), 'unsure', 'another passage: the AI decides');
  ok(!quoteMatches('mobile', tfj.quotes!), 'one word is not a quote');
});

test('multiple choice is unchanged', () => {
  strictEqual(markAnswer(mcq, 2), 'right');
  strictEqual(markAnswer(mcq, 0), 'wrong');
});

test('answered means something was entered', () => {
  ok(isAnswered(0));
  ok(!isAnswered(''));
  ok(!isAnswered({ choice: 0, text: '' }), 'a vrai/faux without its quote is not finished');
  ok(isAnswered({ choice: 0, text: 'encourage chacun' }));
});

const task = {
  id: 'exam.dalf_c1.blanc-01.ce_mcq.001', format: 'dalf_c1', taskType: 'ce_mcq', skill: 'CE', level: 'c1',
  prompt: 'Lisez le texte puis répondez aux questions.', formatVersion: 'dalf-c1-2026.10', variant: 'blanc-01', timingS: 3000,
  parts: [{ label: 'Texte', text: 'Un long texte d’idées.', items: [mcq, short, tfj] }],
} as unknown as ExamTask;

test('a task scores unsure answers only on a "yes" from the grader', () => {
  const answers = { 'p0.i0': 2, 'p0.i1': 'ce n’est pas pareil pour tout le monde ni partout', 'p0.i2': { choice: 0, text: 'Les gens changent de métier plus souvent.' } };
  const before = scoreClosedTask(task, answers);
  strictEqual(before.points, 1.5, 'only the tick counts before any verdict');
  deepStrictEqual(before.unsure, ['p0.i1', 'p0.i2']);
  deepStrictEqual(before.unchecked, ['p0.i1', 'p0.i2'], 'no verdict = unchecked, reported');
  const after = scoreClosedTask(task, answers, { 'p0.i1': true, 'p0.i2': false });
  strictEqual(after.points, 3.5);
  deepStrictEqual(after.unchecked, []);
});

test('the AI batch carries every typed answer it can rule on (decision 40), with the corrigé and the text', () => {
  const b = shortCheckBatch(task, { 'p0.i0': 2, 'p0.i1': 'pas pareil pour tout le monde', 'p0.i2': { choice: 0, text: 'encourage chacun à être plus mobile' } });
  deepStrictEqual(b.items.map((i) => i.key), ['p0.i1', 'p0.i2'], 'a matched quote is checked too; the tick is not');
  strictEqual(b.items[0]!.expected, short.model);
  strictEqual(b.passage, 'Un long texte d’idées.');
  const none = shortCheckBatch(task, { 'p0.i0': 2, 'p0.i1': '', 'p0.i2': { choice: 1, text: 'x y z w' } });
  deepStrictEqual(none.items, [], 'blank and wrong-choice answers are wrong outright, never sent');
});

test('a verdict decides, even against a key-word match; without one the key words stand', () => {
  // A reversal that meets every key word: the AI says no, and that is final.
  const answers = { 'p0.i0': 2, 'p0.i1': 'chacun le vit selon sa culture', 'p0.i2': { choice: 0, text: 'encourage chacun à être plus mobile' } };
  strictEqual(scoreClosedTask(task, answers).points, 5.5, 'offline: all three right on key words');
  strictEqual(scoreClosedTask(task, answers, { 'p0.i1': false, 'p0.i2': true }).points, 3.5, 'the AI overrules the key words on p0.i1');
});

test('the validator holds each kind to its shape', () => {
  deepStrictEqual(validateExamTask(task), []);
  const bad = (item: Partial<QcmItem>) =>
    validateExamTask({ ...task, parts: [{ label: 'Texte', text: 'x', items: [item as QcmItem] }] } as ExamTask).map((i) => i.message).join(' | ');
  ok(/keywords must be/.test(bad({ ...short, keywords: [] })));
  ok(/model is required/.test(bad({ ...short, model: undefined })));
  ok(/opts must be \[\] and correct -1/.test(bad({ ...short, opts: ['a', 'b'], correct: 0 })));
  ok(/quotes must list/.test(bad({ ...tfj, quotes: [] })));
  ok(/exactly the two choices/.test(bad({ ...tfj, opts: ['Vrai', 'Faux', 'On ne sait pas'] })));
  ok(/no kind/.test(bad({ ...mcq, keywords: [['x']] })), 'key words on an MCQ are a forgotten kind');
});

test('the runner draws a box for each typed kind (not authored-but-unrendered)', () => {
  const src = readFileSync(new URL('../../app/exam-section.tsx', import.meta.url), 'utf8');
  ok(/kind === 'short' \? \(/.test(src), 'no answer box for short answers');
  ok(/kind === 'tfj' \? \(/.test(src), 'no quote box for vrai/faux');
  ok(/examGrader\.checkShort\(/.test(src), 'unsure answers are never sent to the grader');
  ok(/shortUnchecked: unchecked\.length/.test(src), 'unchecked answers are not logged for the report');
});

test('an answer that negates never passes on key words alone: it goes to the AI', () => {
  // DALF blanc-01 review: « l'oubli n'est pas légitime » met every group of
  // « l'oubli est légitime » and would have been marked right on the spot.
  const legit: QcmItem = { kind: 'short', q: 'Sa position finale ?', opts: [], correct: -1, keywords: [['legitim'], ['oubli']], model: 'L’oubli peut être légitime.', points: 2 };
  strictEqual(markAnswer(legit, 'l’oubli est légitime sous conditions'), 'right');
  strictEqual(markAnswer(legit, 'l’oubli n’est pas légitime'), 'unsure');
  strictEqual(markAnswer(legit, 'jamais l’oubli ne serait légitime'), 'unsure');
  strictEqual(markAnswer(legit, 'un oubli sans rien de légitime'), 'unsure');
});
