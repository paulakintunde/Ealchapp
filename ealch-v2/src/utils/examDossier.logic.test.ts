import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { dossierOf, graderStimulus } from './examDossier.logic.ts';

const docs = [
  { label: 'Document 1', text: 'La diversité linguistique est un atout.', items: [] },
  { label: 'Document 2', text: 'Une langue disparaît tous les quinze jours.', items: [] },
];

test('an open task lists its dossier in authored order', () => {
  deepStrictEqual(dossierOf({ taskType: 'pe_essay', parts: docs }), [
    { label: 'Document 1', text: 'La diversité linguistique est un atout.' },
    { label: 'Document 2', text: 'Une langue disparaît tous les quinze jours.' },
  ]);
});

test('a closed task has no dossier: its parts are question blocks', () => {
  deepStrictEqual(dossierOf({ taskType: 'ce_mcq', parts: docs }), []);
});

test('the grader sees the instruction and every document, labelled', () => {
  const s = graderStimulus({ taskType: 'pe_short', prompt: 'Vous faites une synthèse des documents proposés.', parts: docs });
  ok(s.startsWith('Vous faites une synthèse des documents proposés.'));
  ok(s.includes('--- Document 1 ---\nLa diversité linguistique est un atout.'));
  ok(s.includes('--- Document 2 ---\nUne langue disparaît tous les quinze jours.'));
});

test('a task without a dossier sends its prompt unchanged', () => {
  strictEqual(graderStimulus({ taskType: 'pe_essay', prompt: 'Écrivez une lettre.', parts: undefined }), 'Écrivez une lettre.');
});

test('every open-task screen draws the dossier, and the grader is sent it', async () => {
  // A component nothing imports is device-proven and unrendered (memory:
  // ealch-authored-but-unrendered). The writing box, the exposé recorder and
  // the entretien all mount ExamDossier; the one grading call reads
  // graderStimulus, never task.prompt alone.
  const { readFileSync } = await import('node:fs');
  const read = (rel: string) => readFileSync(new URL(rel, import.meta.url), 'utf8');
  for (const f of ['../../app/exam-section.tsx', '../components/ExamSpeakTask.tsx', '../components/ExamDebateTask.tsx']) {
    ok(/<ExamDossier task=\{task\} \/>/.test(read(f)), `${f} does not draw the dossier`);
  }
  const section = read('../../app/exam-section.tsx');
  ok(/stimulus: graderStimulus\(task\)/.test(section), 'the grader is not sent the dossier');
  ok(!/stimulus: task\.prompt/.test(section), 'a grading call still sends the prompt alone');
});
