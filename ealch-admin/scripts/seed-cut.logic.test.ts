// Guards the exam seed cut (phase 22.1, D-01/D-02/D-03): every published
// paper ships unfiltered, tasks ship only when a bundled paper references
// them, and a paper naming a task the seed lacks refuses at validateCorpus.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { cutExamTasks, examCutDrift, paperTaskIdSet } from './seed-cut.logic.ts';
import { validateCorpus } from '../../ealch-v2/src/content/schema.ts';
import type { ExamPaper, ExamTask } from '../../ealch-v2/src/content/schema.ts';

const task = (id: string, skill = 'CO') => ({ id, skill } as unknown as ExamTask);

const paper = (id: string, sections: [string, string[]][]) =>
  ({
    id,
    format: 'tef_canada',
    variant: 'blanc-01',
    paperNo: 1,
    sections: sections.map(([skill, taskIds]) => ({ skill, taskIds, timingS: 60, blueprintId: 'b' })),
  }) as unknown as ExamPaper;

test('paperTaskIdSet collects every taskId across every section of every paper', () => {
  const p = paper('paper.1', [
    ['CO', ['exam.t1', 'exam.t2']],
    ['CE', ['exam.t3']],
  ]);
  const ids = paperTaskIdSet([p]);
  strictEqual(ids.size, 3, 'must collect all three task ids across both sections');
  ok(ids.has('exam.t1') && ids.has('exam.t2') && ids.has('exam.t3'), 'every referenced id must be present');
});

test('paperTaskIdSet tolerates a section with no taskIds', () => {
  const p = { id: 'paper.1', sections: [{ skill: 'CO' }] } as unknown as ExamPaper;
  const ids = paperTaskIdSet([p]);
  strictEqual(ids.size, 0, 'a section missing taskIds must not throw and must contribute nothing');
});

test('cutExamTasks keeps only tasks a bundled paper references, orphan excluded', () => {
  const t1 = task('exam.t1');
  const t2 = task('exam.t2');
  const t3 = task('exam.t3');
  const orphan = task('exam.orphan'); // the PE remediation shape: no paper names it
  const p = paper('paper.1', [['CO', ['exam.t1', 'exam.t2', 'exam.t3']]]);
  const result = cutExamTasks([t1, t2, t3, orphan], [p]);
  strictEqual(result.length, 3, 'the orphan task must not ship');
  ok(
    result.map((t) => t.id).join(',') === 'exam.t1,exam.t2,exam.t3',
    'input order must be preserved: ' + result.map((t) => t.id).join(',')
  );
  ok(!result.some((t) => t.id === 'exam.orphan'), 'orphan published task must stay OTA-only');
});

test('cutExamTasks against no papers returns nothing', () => {
  const result = cutExamTasks([task('exam.t1'), task('exam.t2')], []);
  strictEqual(result.length, 0, 'no bundled papers means no task is referenced by anything bundled');
});

test('cutExamTasks ships a task once even when two papers share it', () => {
  const shared = task('exam.shared');
  const p1 = paper('paper.1', [['CO', ['exam.shared']]]);
  const p2 = paper('paper.2', [['CO', ['exam.shared']]]);
  const result = cutExamTasks([shared], [p1, p2]);
  strictEqual(result.length, 1, 'a task referenced by two papers still ships exactly once');
});

test('examCutDrift: seed paper not in db becomes seedOnlyPapers', () => {
  const seedPapers = [paper('paper.gone', [['CO', []]])];
  const drift = examCutDrift(seedPapers, [], [], []);
  ok(drift.seedOnlyPapers.includes('paper.gone'), 'a seed paper absent from the db must be flagged seed-only');
});

test('examCutDrift: seed task not in cutExamTasks(db) becomes seedOnlyTasks', () => {
  const drift = examCutDrift([], [{ id: 'exam.gone' }], [], []);
  ok(drift.seedOnlyTasks.includes('exam.gone'), 'a seed task the db cut no longer produces must be flagged seed-only');
});

test('examCutDrift: db paper not in seed becomes missingPapers', () => {
  const dbPapers = [paper('paper.new', [['CO', []]])];
  const drift = examCutDrift([], [], dbPapers, []);
  ok(drift.missingPapers.includes('paper.new'), 'a db paper absent from the seed must be flagged missing');
});

test('examCutDrift: cut task not in seed becomes missingTasks', () => {
  const dbPapers = [paper('paper.1', [['CO', ['exam.new']]])];
  const drift = examCutDrift([], [], dbPapers, ['exam.new']);
  ok(drift.missingTasks.includes('exam.new'), 'a task the db cut now requires but the seed lacks must be flagged missing');
});

test('examCutDrift: same paper id with different canonicalJson(sections) becomes changedPapers', () => {
  const seedPapers = [paper('paper.1', [['CO', ['exam.t1']]])];
  const dbPapers = [paper('paper.1', [['CO', ['exam.t1', 'exam.t2']]])];
  const drift = examCutDrift(seedPapers, [], dbPapers, []);
  ok(drift.changedPapers.includes('paper.1'), 'a paper whose sections differ in the db must be flagged changed');
});

test('examCutDrift: identical paper produces no drift at all', () => {
  const seedPapers = [paper('paper.1', [['CO', ['exam.t1']]])];
  const dbPapers = [paper('paper.1', [['CO', ['exam.t1']]])];
  const drift = examCutDrift(seedPapers, [{ id: 'exam.t1' }], dbPapers, ['exam.t1']);
  strictEqual(drift.seedOnlyPapers.length, 0);
  strictEqual(drift.seedOnlyTasks.length, 0);
  strictEqual(drift.missingPapers.length, 0);
  strictEqual(drift.missingTasks.length, 0);
  strictEqual(drift.changedPapers.length, 0);
});

test('D-03: a bundled paper naming a task the seed cut dropped fails validateCorpus', () => {
  // A paper referencing a task id that is not among the published tasks kept
  // by the cut (e.g. an orphan PE remediation task excluded per D-02).
  const publishedTasksWithoutIt: ExamTask[] = [task('exam.other')];
  const papers: ExamPaper[] = [paper('paper.x', [['CO', ['exam.x.missing']]])];
  const corpus = {
    version: 1,
    units: [],
    lessons: [],
    items: [],
    examPapers: papers,
    examTasks: cutExamTasks(publishedTasksWithoutIt, papers),
  };
  const issues = validateCorpus(corpus);
  ok(
    issues.some((i) => /references unknown exam task/.test(i.message)),
    `expected a dangling-reference issue, got: ${issues.map((i) => i.message).join(' | ')}`
  );
});
