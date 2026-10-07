// DALF oral: two subjects drawn, one chosen. Only the chosen pair is sat.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { choiceOptions, needsChoice, sittableCount, tasksToSit } from './examChoice.logic.ts';
import { validateExamPaper, type ExamPaper, type ExamSection, type ExamTask } from '../content/schema.ts';
import { buildDraft, parseDraft, serializeDraft } from '../services/examDraft.logic.ts';

const id = (n: string) => `exam.dalf_c1.blanc-09.${n}`;
const T = (n: string, prompt: string) => ({ id: id(n), prompt } as unknown as ExamTask);
const tasks = [T('po_monologue.010', 'Sujet A'), T('po_debate.011', 'Entretien A'), T('po_monologue.012', 'Sujet B'), T('po_debate.013', 'Entretien B')];
const section = {
  skill: 'PO', timingS: 1800, blueprintId: 'dalf-c1-2026.10', taskIds: tasks.map((t) => t.id),
  choiceGroups: [[tasks[0]!.id, tasks[1]!.id], [tasks[2]!.id, tasks[3]!.id]],
} as ExamSection;

test('a section with groups sits nothing until a choice, then only that group', () => {
  ok(needsChoice(section));
  deepStrictEqual(tasksToSit(section, tasks, null), []);
  deepStrictEqual(tasksToSit(section, tasks, 1).map((t) => t.prompt), ['Sujet B', 'Entretien B']);
  strictEqual(sittableCount(section), 2, 'the exam card counts what a candidate sits');
  deepStrictEqual(choiceOptions(section, tasks).map((o) => o.lead?.prompt), ['Sujet A', 'Sujet B']);
});

test('a section without groups is unchanged', () => {
  const plain = { ...section, choiceGroups: undefined };
  ok(!needsChoice(plain));
  strictEqual(tasksToSit(plain, tasks, null).length, 4);
  strictEqual(sittableCount(plain), 4);
});

test('the validator holds the groups to a partition of equal size', () => {
  const paper = (po: Partial<ExamSection>) => ({
    id: 'paper.dalf_c1.blanc-09.9', format: 'dalf_c1', variant: 'blanc-09', paperNo: 9,
    sections: (['CO', 'CE', 'PE', 'PO'] as const).map((skill, i) => skill === 'PO'
      ? { ...section, ...po }
      : { skill, timingS: 60, blueprintId: 'x', taskIds: [id(`ce_mcq.00${i}`)] }),
  } as unknown as ExamPaper);
  const msgs = (po: Partial<ExamSection>) => validateExamPaper(paper(po)).map((i) => i.message).join(' | ');
  ok(!/choiceGroups/.test(msgs({})), msgs({}));
  ok(/split taskIds exactly/.test(msgs({ choiceGroups: [[tasks[0]!.id, tasks[1]!.id], [tasks[2]!.id]] })));
  ok(/same size/.test(msgs({ choiceGroups: [[tasks[0]!.id], [tasks[1]!.id, tasks[2]!.id, tasks[3]!.id]] })));
  ok(/2\+ non-empty/.test(msgs({ choiceGroups: [tasks.map((t) => t.id)] })));
});

test('the choice survives a crash in the draft', () => {
  const base = { paperId: 'paper.dalf_c1.blanc-09.9', skill: 'PO', answers: {}, texts: {}, spoken: {}, coverage: {}, debate: {}, graded: [], sittingId: 's1', outcomes: {} };
  const d = parseDraft(serializeDraft(buildDraft({ ...base, choice: 1 })), base.paperId, 'PO', 'x');
  strictEqual(d?.choice, 1);
  strictEqual(parseDraft(serializeDraft(buildDraft({ ...base, choice: null })), base.paperId, 'PO', 'x')?.choice, undefined);
});

test('the section screen draws the chooser before anything is timed (not authored-but-unrendered)', () => {
  const src = readFileSync(new URL('../../app/exam-section.tsx', import.meta.url), 'utf8');
  ok(/if \(awaitingChoice\) \{/.test(src), 'no chooser branch');
  ok(/choiceOptions\(pinnedSection/.test(src), 'the chooser does not list the groups');
  ok(/clock === null && !awaitingChoice/.test(src), 'the clock starts before the choice');
  ok(/tasksToSit\(pinnedSection, pinnedTasksOf\(sitting\), choice\)/.test(src), 'all four tasks would be sat');
});
