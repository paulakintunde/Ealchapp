// The exam section runner's logic, and the wiring that makes it reachable.
//
// Two kinds of test in one file, on purpose. The folds below are pure and
// tested as such; the last test reads the app's source, because this codebase
// has shipped a device-proven component that nothing imported and had no way to
// notice. A runner that works and is not routed to is not a runner.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { isScored, paperProgress, sectionProgress, sectionRaw, sectionStatusFor, type ExamResult } from './progress.logic.ts';
import { scoreClosedTask, taskQuestions } from '../services/content.logic.ts';
import { validateExamTask, validateSectionScoring, type ExamTask } from '../content/schema.ts';
import { devExamPapers, devExamTasks } from '../content/devExamFixture.ts';
import { EXAM_FORMAT_FACTS, EXAM_FORMAT_ORDER, formatSitting, sectionBreakdown } from '../content/examFormats.ts';
import { examPaperAllowed } from '../utils/examGate.logic.ts';

const appDir = resolve(dirname(fileURLToPath(import.meta.url)), '../../app');
const srcDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (f: string) => readFileSync(resolve(appDir, f), 'utf8');

/* ─── fixtures ───────────────────────────────────────────────────────────── */

const result = (over: Partial<ExamResult> = {}): ExamResult => ({
  id: 'exr-1',
  date: '2026-08-25',
  taskId: 'exam.tef_canada.blanc-01.ce_mcq.001',
  paperId: 'paper.tef_canada.blanc-01.1',
  format: 'tef_canada',
  taskType: 'ce_mcq',
  skill: 'CE',
  band: 'b1',
  passed: true,
  ...over,
});

const flatTask = (over: Partial<ExamTask> = {}): ExamTask => ({
  id: 'exam.tef_canada.blanc-01.ce_mcq.001',
  format: 'tef_canada',
  variant: 'blanc-01',
  taskType: 'ce_mcq',
  skill: 'CE',
  level: 'b1',
  formatVersion: 'tef-canada-2025.09',
  prompt: 'La bibliothèque sera fermée du 3 au 10 avril.',
  items: [
    { q: 'Quand ?', opts: ['En avril', 'En mai'], correct: 0 },
    { q: 'Pourquoi ?', opts: ['Travaux', 'Vacances'], correct: 0 },
  ],
  timingS: 600,
  ...over,
});

const partedTask = (): ExamTask => ({
  ...flatTask(),
  items: undefined,
  parts: [
    { label: 'Document 1', text: 'Fermeture du 3 au 10 avril.', items: [{ q: 'Quand ?', opts: ['Avril', 'Mai'], correct: 0 }] },
    {
      label: 'Document 2',
      text: 'Le marché ouvre le samedi.',
      items: [
        { q: 'Quel jour ?', opts: ['Samedi', 'Lundi'], correct: 0 },
        { q: 'Quoi ?', opts: ['Un marché', 'Une école'], correct: 0 },
      ],
    },
  ],
});

/* ─── isScored ───────────────────────────────────────────────────────────── */

test('a practice attempt is never scored, and a result predating modes is', () => {
  ok(isScored(result({ mode: 'exam' })));
  ok(!isScored(result({ mode: 'practice' })));
  // Absent means "sat before practice mode existed", and at that point every
  // attempt WAS a real sitting. Defaulting the other way would silently void
  // every result already on a device.
  ok(isScored(result({})));
});

/* ─── sectionProgress ────────────────────────────────────────────────────── */

const PAPER = 'paper.tef_canada.blanc-01.1';
const A = 'exam.tef_canada.blanc-01.ce_mcq.001';
const B = 'exam.tef_canada.blanc-01.ce_mcq.002';

test('a section with nothing logged is available, not in progress', () => {
  const p = sectionProgress([A, B], [], PAPER);
  deepStrictEqual(p, { status: 'available', answered: 0, total: 2, practice: false });
});

test('a section moves available → in progress → done', () => {
  strictEqual(sectionProgress([A, B], [result({ taskId: A })], PAPER).status, 'in-progress');
  strictEqual(
    sectionProgress([A, B], [result({ taskId: A }), result({ taskId: B, id: 'exr-2' })], PAPER).status,
    'done'
  );
});

test('a retried task counts once, so a section can actually reach done', () => {
  // Counting RESULTS rather than tasks, a section of two tasks where one was
  // retried reports 2/2 and looks finished while the second task was never
  // opened — or reports 3/2 and never reaches 'done' at all.
  const retried = [result({ taskId: A }), result({ taskId: A, id: 'exr-2', passed: false })];
  const p = sectionProgress([A, B], retried, PAPER);
  strictEqual(p.answered, 1);
  strictEqual(p.status, 'in-progress');
});

test('results from another paper do not count toward this one', () => {
  // Papers are parallel: the same task id can be sat in a different paper only
  // by authoring error, but results from OTHER papers are routine and must not
  // leak into this paper's progress.
  const elsewhere = [result({ taskId: A, paperId: 'paper.tef_canada.blanc-01.2' })];
  strictEqual(sectionProgress([A, B], elsewhere, PAPER).status, 'available');
});

test('one practice attempt marks the whole section unscored', () => {
  const mixed = [result({ taskId: A, mode: 'exam' }), result({ taskId: B, id: 'exr-2', mode: 'practice' })];
  const p = sectionProgress([A, B], mixed, PAPER);
  strictEqual(p.status, 'done');
  ok(p.practice, 'a section containing any practice attempt cannot be reported as a sitting');
});

test('an empty section is never "done"', () => {
  // total 0 would divide-by-nothing into done and report an épreuve complete
  // that contains no tasks at all.
  strictEqual(sectionProgress([], [], PAPER).status, 'available');
});

test('paperProgress keeps the four épreuves in sitting order', () => {
  const sections = [
    { skill: 'CO' as const, taskIds: ['co1'] },
    { skill: 'CE' as const, taskIds: [A, B] },
    { skill: 'PE' as const, taskIds: ['pe1'] },
    { skill: 'PO' as const, taskIds: ['po1'] },
  ];
  const p = paperProgress(sections, [result({ taskId: A })], PAPER);
  deepStrictEqual(p.map((s) => s.skill), ['CO', 'CE', 'PE', 'PO']);
  // Each épreuve is folded independently: one answered task in CE leaves CE
  // half done and touches none of the other three.
  strictEqual(p[1]!.status, 'in-progress');
  strictEqual(p[1]!.answered, 1);
  strictEqual(p[0]!.status, 'available');
  strictEqual(p[3]!.status, 'available');
});

/* ─── taskQuestions / scoreClosedTask ────────────────────────────────────── */

test('taskQuestions flattens both task shapes with stable, unique keys', () => {
  deepStrictEqual(taskQuestions(flatTask()).map((q) => q.key), ['i0', 'i1']);
  const parted = taskQuestions(partedTask());
  deepStrictEqual(parted.map((q) => q.key), ['p0.i0', 'p1.i0', 'p1.i1']);
  // Each question knows which document it came from, so the runner can group
  // them under the right stimulus.
  deepStrictEqual(parted.map((q) => q.partLabel), ['Document 1', 'Document 2', 'Document 2']);
  strictEqual(new Set(parted.map((q) => q.key)).size, 3, 'keys must be unique within a task');
});

test('an unanswered question is wrong, not excluded from the total', () => {
  // Both boards score one point per correct answer with nothing deducted and
  // nothing forgiven for a blank. Scoring "out of what was attempted" would
  // turn a candidate who ran out of time into a candidate who aced it.
  const task = flatTask();
  deepStrictEqual(scoreClosedTask(task, {}), { correct: 0, total: 2 });
  deepStrictEqual(scoreClosedTask(task, { i0: 0 }), { correct: 1, total: 2 });
  deepStrictEqual(scoreClosedTask(task, { i0: 0, i1: 1 }), { correct: 1, total: 2 });
  deepStrictEqual(scoreClosedTask(task, { i0: 0, i1: 0 }), { correct: 2, total: 2 });
  // An explicit null is the same as never answering.
  deepStrictEqual(scoreClosedTask(task, { i0: null, i1: null }), { correct: 0, total: 2 });
});

test('scoring reaches inside parts, not just the flat list', () => {
  deepStrictEqual(scoreClosedTask(partedTask(), { 'p0.i0': 0, 'p1.i1': 0 }), { correct: 2, total: 3 });
});

/* ─── wiring ─────────────────────────────────────────────────────────────── */

test('the section runner is reachable, and the retired one is gone', () => {
  // A runner nothing routes to is not a runner. This repo has shipped exactly
  // that before.
  const layout = read('_layout.tsx');
  ok(layout.includes('name="exam-paper"'), 'exam-paper must be registered in the stack');
  ok(layout.includes('name="exam-section"'), 'exam-section must be registered in the stack');
  ok(!layout.includes('name="exam-task"'), 'the retired runner must not still be routed');

  ok(read('exam.tsx').includes("pathname: '/exam-paper'"), 'the format hub must open a paper');
  ok(read('exam-paper.tsx').includes("pathname: '/exam-section'"), 'the paper must open a section');
});

test('the section runner has no way to reveal an answer mid-section', () => {
  // Rule 1 of the runner, enforced by absence: the old screen compared the
  // selected option against `qi.correct` while the candidate was still
  // answering, which turns question 3 into a hint for question 4.
  const src = read('exam-section.tsx');
  ok(!/\.correct\b/.test(src.replace(/scoreClosedTask/g, '')), 'the runner must not read an answer key while rendering');
  ok(!src.includes('revealed'), 'no reveal phase belongs in a section');
});

test('the renderable set stays an explicit, checked list', () => {
  // PO without a microphone measures typing. Refused until E4 builds it.
  const src = read('exam-section.tsx');
  ok(/RENDERABLE[^\n]*=\s*\[\s*'CO',\s*'CE',\s*'PE',\s*'PO'\s*\]/.test(src), 'all four épreuves render');
  ok(src.includes('RENDERABLE.includes'), 'the refusal must actually be checked');
});

test('the dev fixture cannot reach a release build', () => {
  // A content path that only exists in dev is the shape of this codebase's past
  // incidents, so the fence is pinned rather than trusted.
  strictEqual(devExamPapers(false).length, 0, 'no fixture paper outside dev');
  strictEqual(devExamTasks(false).length, 0, 'no fixture task outside dev');
  ok(devExamPapers(true).length > 0, 'and it must actually exist in dev, or it proves nothing');

  // It used to sit in a sandbox namespace (`dev-fixture`) that no authored
  // paper would use. It no longer does: the dev build now carries the REAL
  // gold paper, waiting on review, under its real id. So the protection moved
  // from the namespace to the merge — `withDevExamFixture` skips any paper the
  // published corpus already has, and published wins.
  for (const p of devExamPapers(true)) ok(p.format === 'tef_canada', `${p.id} is not the gold paper`);
  const src = readFileSync(resolve(srcDir, 'services/content.ts'), 'utf8');
  ok(/const have = new Set/.test(src), 'the merge must check what the corpus already has');
  ok(/filter\(\(p\) => !have\.has\(p\.id\)\)/.test(src), 'and must drop a paper that is already published');

  // All four épreuves, in the order a candidate sits them.
  const skills = devExamPapers(true).flatMap((p) => p.sections.map((s) => s.skill));
  deepStrictEqual(skills, ['CO', 'CE', 'PE', 'PO']);
});

test('every fixture task validates, so the runner is proven on real shapes', () => {
  // A fixture that would not survive validateExamTask proves the runner against
  // something the corpus could never contain.
  for (const task of devExamTasks(true)) {
    deepStrictEqual(validateExamTask(task, task.id), [], `${task.id} must be a valid task`);
  }
});

test('a listening result whose audio never played is not scored', () => {
  // Two different reasons a result is excluded, and the report has to be able
  // to tell them apart: one the candidate chose, one we caused.
  ok(!isScored(result({ audioFailed: true })));
  ok(!isScored(result({ mode: 'exam', audioFailed: true })), 'exam mode does not override a dead document');
  ok(isScored(result({ mode: 'exam', audioFailed: false })));
});

test('the listening runner asks the audio service once, not twice', () => {
  // A clip and device TTS are one call, not two code paths — the second of
  // which nobody would exercise until E8 renders real clips.
  const src = readFileSync(resolve(srcDir, 'components/ExamAudioPart.tsx'), 'utf8');
  strictEqual((src.match(/speakItem\(/g) ?? []).length, 1, 'exactly one speakItem call site');
  ok(!/audioRef\s*\?\s*[^:]*:\s*/.test(src.replace(/part\.audioRef \?\? null/g, '')),
    'the component must not branch on whether a clip exists');
});

test('exam conditions offer no replay, no transcript and no scrub bar', () => {
  const src = readFileSync(resolve(srcDir, 'components/ExamAudioPart.tsx'), 'utf8');
  // Both affordances exist ONLY behind a practice-mode check.
  ok(src.includes("mode === 'practice' && pb.phase !== 'unplayable'"), 'replay/transcript are practice-gated');
  ok(src.includes('showsTranscript(mode)'), 'the transcript goes through the mode check');
  // Nothing seekable: there is nothing to seek on a single-play recording.
  ok(!/Slider|onSeek|seekTo|progressBar/i.test(src), 'no scrub bar belongs on exam audio');
});

test('a listening task with no parts is refused, not rendered silently', () => {
  // A CO task with no parts has no audio, which makes it a reading task wearing
  // a listening label — the defect this whole phase exists to prevent.
  const src = readFileSync(resolve(appDir, 'exam-section.tsx'), 'utf8');
  ok(src.includes('if (!task.parts?.length)'), 'the runner must check for audio before rendering CO');
});

test('the dev paper exercises both play counts', () => {
  // A single-play part and a double-play part must behave differently, and the
  // 1 Sept 2025 two-play interview block is the case most worth proving. The
  // check is across the whole listening épreuve now rather than one task: TEF
  // puts the two-play rule in block E alone, so a per-task assertion would be
  // asserting the wrong thing.
  const co = devExamTasks(true).filter((t) => t.skill === 'CO');
  ok(co.length > 0, 'the dev paper must carry a listening épreuve');
  const counts = new Set(co.flatMap((t) => (t.parts ?? []).map((p) => p.playCount)));
  deepStrictEqual([...counts].sort(), [1, 2], 'both play counts must appear somewhere in CO');
  for (const t of co) {
    for (const part of t.parts ?? []) {
      ok((part.text ?? '').length > 0, `${part.label} needs a transcript, or device TTS has nothing to say`);
    }
  }
});

test('speaking records rather than asking the candidate to type', () => {
  // The defect E4 exists to remove: po_* used to render a TextInput, so a
  // speaking score measured typing.
  const src = readFileSync(resolve(appDir, 'exam-section.tsx'), 'utf8');
  ok(src.includes('<ExamSpeakTask'), 'PO must route to the recorder');
  ok(/RENDERABLE[^\n]*=\s*\[\s*'CO',\s*'CE',\s*'PE',\s*'PO'\s*\]/.test(src), 'all four épreuves render now');

  const spk = readFileSync(resolve(srcDir, 'components/ExamSpeakTask.tsx'), 'utf8');
  // Match real USAGE, not the word inside the header comment that explains
  // what this component replaced.
  ok(!/<TextInput/.test(spk), 'a speaking task must render no text input');
  ok(!/^import[^\n]*TextInput/m.test(spk), 'and must not even import one');
  ok(spk.includes('unavailable: true'), 'an unreachable mic is a reported outcome, not a silent one');
});

test('a dead microphone is our failure, not a bad answer', () => {
  // Same shape as a dead listening document: logged, flagged, excluded from
  // every number, and never scored as though the candidate said nothing.
  const src = readFileSync(resolve(appDir, 'exam-section.tsx'), 'utf8');
  ok(/spokenAnswer\?\.unavailable/.test(src), 'the runner must check it');
  ok(/audioFailed: true/.test(src), 'and flag the result rather than grading silence');
  ok(!isScored({ audioFailed: true }), 'a flagged result cannot feed a number');
});

test('the prep clock is separate from the answer clock, and optional', () => {
  // TCF tâche 2 gives two minutes with the document; tâches 1 and 3 give none.
  // A zero-length prep phase is not a prep phase.
  const spk = readFileSync(resolve(srcDir, 'components/ExamSpeakTask.tsx'), 'utf8');
  ok(spk.includes("if (!task.prepS)"), 'a task without prep must skip straight to recording');
  ok(spk.includes("phase === 'prep'"), 'and one with prep must render the phase');

  // The schema refuses the shapes that would make it meaningless.
  const po = devExamTasks(true).find((t) => t.skill === 'PO')!;
  ok(validateExamTask({ ...po, prepS: 0 }).some((i) => /zero-length prep phase/.test(i.message)));
  // Preparation belongs to a spoken task: on a written one it is
  // indistinguishable from the answer time the candidate already has.
  const written = devExamTasks(true).find((t) => t.skill === 'PE')!;
  ok(validateExamTask({ ...written, prepS: 120 }).some((i) => /belongs to a spoken task/.test(i.message)));
});

test('the recorder does not cut a long answer off at the drill default', () => {
  // stt.ts defaults to 6 SECONDS, tuned for a drill utterance. A TEF Section B
  // answer runs to ten minutes, and the default would score the stump.
  const spk = readFileSync(resolve(srcDir, 'components/ExamSpeakTask.tsx'), 'utf8');
  ok(/maxMs:\s*\(task\.timingS/.test(spk), 'the cap must come from the task, not the drill default');
});

test('delivery signals reach the grader only when something was measured', () => {
  const src = readFileSync(resolve(appDir, 'exam-section.tsx'), 'utf8');
  ok(src.includes('deliveryNote('), 'the runner must build the labelled note');
  ok(/\?\?\s*undefined/.test(src), 'a null note must become an absent field, not an empty string');

  const grader = readFileSync(resolve(srcDir, 'services/examGrader.ts'), 'utf8');
  ok(/delivery\?:\s*string/.test(grader), 'the request type must actually carry it');
});

test('the grader is forbidden from turning pacing into pronunciation', () => {
  // The edge function is the last line: the client already disclaims, but the
  // prompt has to bound what the model may do with the numbers.
  const fn = readFileSync(resolve(srcDir, '../supabase/functions/grade-exam/index.ts'), 'utf8');
  ok(fn.includes('NOT heard by anyone'), 'the block must say nothing listened');
  ok(/fluency criterion ONLY/.test(fn), 'it may inform one criterion and no others');
  ok(/not evidence of pronunciation, accent or intelligibility/.test(fn));
  ok(/trust the transcript/.test(fn), 'the transcript outranks the proxies on conflict');
  // And an empty delivery string must never reach the prompt.
  ok(/typeof delivery === "string" && delivery\.trim\(\)/.test(fn));
});

test('the fixture now carries all four épreuves, in order', () => {
  const skills = devExamPapers(true).flatMap((p) => p.sections.map((s) => s.skill));
  deepStrictEqual(skills, ['CO', 'CE', 'PE', 'PO']);
  const po = devExamTasks(true).find((t) => t.skill === 'PO');
  ok(po, 'the fixture must carry a speaking task');
  ok(po!.prepS && po!.prepS > 0, 'and it must exercise the prep clock');
  ok(po!.rubric && po!.modelAnswer, 'an open task is invalid without both');
});

/* ─── the report ─────────────────────────────────────────────────────────── */

test('a section status names WHOSE failure it was, ours before theirs', () => {
  // A section can be several things at once. The candidate needs the reason
  // that is most ours, because that is the one they can do nothing about.
  const T = ['t1', 't2'];
  strictEqual(sectionStatusFor(T, [], PAPER), 'not-sat');

  const both = [
    result({ taskId: 't1', mode: 'practice' }),
    result({ taskId: 't2', id: 'r2', audioFailed: true }),
  ];
  strictEqual(sectionStatusFor(T, both, PAPER), 'audio-failed', 'our failure outranks their choice');

  const ungraded = [
    result({ taskId: 't1', taskType: 'pe_essay', mode: 'practice' }),
    result({ taskId: 't2', id: 'r2', taskType: 'pe_essay' }),
  ];
  strictEqual(sectionStatusFor(T, ungraded, PAPER), 'not-graded', 'an ungraded open task outranks practice');

  const practice = [result({ taskId: 't1', mode: 'practice' }), result({ taskId: 't2', id: 'r2', mode: 'practice' })];
  strictEqual(sectionStatusFor(T, practice, PAPER), 'practice');

  const clean = [result({ taskId: 't1' }), result({ taskId: 't2', id: 'r2' })];
  strictEqual(sectionStatusFor(T, clean, PAPER), 'scored');
});

test('a half-finished section is not scored', () => {
  // One of two tasks answered cannot report a level for the épreuve.
  strictEqual(sectionStatusFor(['t1', 't2'], [result({ taskId: 't1' })], PAPER), 'not-sat');
});

test('a section reports QUESTIONS right, not tasks passed', () => {
  // Found on device: a listening épreuve of three questions reported "0/1"
  // because the fold counted tasks. The section's scoring map is indexed by
  // questions, so the raw count handed to it was in the wrong unit entirely.
  const two = [
    result({ taskId: 't1', correct: 12, askedTotal: 20, passed: true }),
    result({ taskId: 't2', id: 'r2', correct: 7, askedTotal: 20, passed: false }),
  ];
  deepStrictEqual(sectionRaw(['t1', 't2'], two, PAPER), { raw: 19, total: 40 });
});

test('results logged before question counts existed fall back honestly', () => {
  // Wrong unit, but it is what those rows actually know. Inventing question
  // counts for them would be worse than reporting what was recorded.
  const legacy = [result({ taskId: 't1', passed: true }), result({ taskId: 't2', id: 'r2', passed: false })];
  deepStrictEqual(sectionRaw(['t1', 't2'], legacy, PAPER), { raw: 1, total: 2 });
  // A mix falls back too rather than summing incomparable units.
  const mixed = [
    result({ taskId: 't1', correct: 12, askedTotal: 20, passed: true }),
    result({ taskId: 't2', id: 'r2', passed: false }),
  ];
  deepStrictEqual(sectionRaw(['t1', 't2'], mixed, PAPER), { raw: 1, total: 2 });
});

test('only a closed task contributes a raw count, and a retry counts once', () => {
  // An open task has no raw count, which is why writing and speaking report a
  // band rather than a fraction.
  strictEqual(sectionRaw(['t1'], [result({ taskId: 't1', taskType: 'pe_essay' })], PAPER), null);

  const retried = [
    result({ taskId: 't1', correct: 9, askedTotal: 10, passed: true }),
    result({ taskId: 't1', id: 'r2', correct: 3, askedTotal: 10, passed: false }),
    result({ taskId: 't2', id: 'r3', correct: 8, askedTotal: 10, passed: true }),
  ];
  // The later result wins, and the task is counted once: 3 + 8, not 9 + 3 + 8.
  deepStrictEqual(sectionRaw(['t1', 't2'], retried, PAPER), { raw: 11, total: 20 });
});

test('the report cannot average, and cannot report an overall off three skills', () => {
  const src = readFileSync(resolve(appDir, 'exam-report.tsx'), 'utf8');
  ok(src.includes('paperOutcome('), 'the headline must come from the fold, not local arithmetic');
  ok(!/reduce\(\(a, b\) => a \+ b/.test(src), 'no summing anywhere near the headline');
  ok(src.includes('examLowestGoverns'), 'rule 1 must be stated on screen, or the range reads as an average');
  ok(src.includes('examParallelNotEquated'), 'rule 2 must justify the range beside the number');
  ok(src.includes('examDisclaimer'), 'Gate H on the most shareable screen');
});

test('every non-scored state gets its own wording on the report', () => {
  // Collapsing them into one "unavailable" would hide whether the gap is the
  // candidate's or ours.
  const src = readFileSync(resolve(appDir, 'exam-report.tsx'), 'utf8');
  for (const key of ['examAudioFailed', 'examUngraded', 'examUnscored', 'examNoScoring', 'examNotSat']) {
    ok(src.includes(key), `${key} must be distinguishable on the report`);
  }
});

test('the section runner lands on the report, and the report is routed', () => {
  ok(read('exam-section.tsx').includes("pathname: '/exam-report'"), 'submitting must reveal something');
  ok(read('_layout.tsx').includes('name="exam-report"'), 'and the route must exist');
  ok(read('exam-paper.tsx').includes("pathname: '/exam-report'"), 'the paper must offer it too');
});

test('a missing prep lesson is surfaced, not dropped', () => {
  // dueExamSkills returns prepLessonId: null when no lesson exists at that
  // band. That is a real corpus gap and the candidate should see it.
  const src = readFileSync(resolve(appDir, 'exam-report.tsx'), 'utf8');
  ok(src.includes('examNoPrepLesson'), 'a null prep lesson must render as a stated gap');
});

test('every fixture section carries a scoring map with ranged bands', () => {
  // A fixture is the easiest place to quietly ship a point estimate.
  for (const paper of devExamPapers(true)) {
    for (const sec of paper.sections) {
      ok(sec.scoring, `${paper.id} ${sec.skill} needs scoring or the report shows nothing`);
      deepStrictEqual(validateSectionScoring(sec.scoring, sec.skill), []);
      ok(sec.scoring!.nclc.some((r) => r.nclcHigh > r.nclcLow), `${sec.skill} must span levels, not claim one`);
    }
  }
});

/* ─── the home cards and the format hub ──────────────────────────────────── */

test('no exam is described by one of its four épreuves, ever again', () => {
  // THE defect this whole redesign started from. `examMeta` captioned the three
  // home cards with one épreuve each — 'Speaking · 15 min · timed' for TEF,
  // 'Listening · single play' for TCF — each true of one paper and false of the
  // exam. Read as a set they said TEF was the speaking one.
  const strings = readFileSync(resolve(srcDir, 'i18n/strings.ts'), 'utf8');
  ok(!strings.includes('examMeta'), 'examMeta must not exist');
  ok(!/The examiner interrupts you/.test(strings), 'and neither must its captions');
  ok(!/Listening · single play/.test(strings));

  // Usage, not mentions: home carries a comment explaining what was removed
  // and why, which is worth keeping and is not a use.
  const home = readFileSync(resolve(appDir, 'home.tsx'), 'utf8');
  ok(!/T\.examMeta|examMeta\[/.test(home), 'home must not read examMeta');
  ok(!/^const EXAMS =/m.test(home), 'nor the index-aligned array it paired with');
});

test('every format card carries the same four kinds of fact', () => {
  // Uniform frame, format-specific values. That is what stops one card
  // characterising its exam by a single épreuve.
  for (const fmt of EXAM_FORMAT_ORDER) {
    const f = EXAM_FORMAT_FACTS[fmt];
    strictEqual(f.sections.length, 4, `${fmt} must show four épreuves`);
    ok(f.totalS > 0, `${fmt} must show a sitting length`);
    deepStrictEqual(f.sections.map((x) => x.skill), ['CO', 'CE', 'PE', 'PO'], `${fmt} in sitting order`);
    ok(f.blueprintId.length > 0, `${fmt} must cite the blueprint its numbers came from`);
  }
});

test('a fact the board does not publish is omitted, not guessed', () => {
  // DELF B2's per-exercise question counts are not published anywhere E0 could
  // reach. Null, and the breakdown simply drops the number.
  const delf = EXAM_FORMAT_FACTS.delf_b2;
  ok(delf.sections.some((x) => x.questions === null), 'unpublished counts stay null');
  const line = sectionBreakdown(delf);
  ok(line.includes('CO') && !/CO \d/.test(line), 'CO shows no invented count');
  // TEF publishes its counts, so they appear.
  ok(/CO 40/.test(sectionBreakdown(EXAM_FORMAT_FACTS.tef_canada)));
});

test('the breakdown uses the labels a candidate meets on the paper', () => {
  // Production-first skill codes, candidate-facing épreuve abbreviations: the
  // section carrying skill 'PE' is labelled EE, and 'PO' is labelled EO.
  // Printing 'PE'/'PO' would put two strings on the card that appear on no
  // exam paper anywhere.
  const line = sectionBreakdown(EXAM_FORMAT_FACTS.tef_canada);
  ok(line.includes('EE 2') && line.includes('EO 2'), `expected EE/EO, got: ${line}`);
  ok(!line.includes('PE ') && !line.includes('PO '), 'the internal skill codes must not leak');
});

test('the sitting length reads in hours and minutes', () => {
  strictEqual(formatSitting(10_500, 'fr'), '2 h 55');
  strictEqual(formatSitting(10_500, 'en'), '2h 55m');
  strictEqual(formatSitting(1800, 'fr'), '30 min');
});

/* ─── the gate ───────────────────────────────────────────────────────────── */

test('the gate ships OPEN, and being off beats everything else', () => {
  // examGateOn is false in config. Nothing else can close it.
  const off = { gateOn: false, entitled: false, freePapers: 0, paperNo: 20 };
  ok(examPaperAllowed(off).allowed, 'a closed-looking case must still open when the gate is off');
});

test('when the gate is on, the free allowance is papers and is 1-based', () => {
  const on = { gateOn: true, entitled: false, freePapers: 1 };
  ok(examPaperAllowed({ ...on, paperNo: 1 }).allowed, 'an allowance of 1 opens paper 1');
  const blocked = examPaperAllowed({ ...on, paperNo: 2 });
  strictEqual(blocked.allowed, false);
  if (!blocked.allowed) strictEqual(blocked.reason, 'needs-exam-tier');
  // Entitlement overrides the allowance entirely.
  ok(examPaperAllowed({ ...on, entitled: true, paperNo: 20 }).allowed);
  // An allowance of 0 opens nothing.
  strictEqual(examPaperAllowed({ ...on, freePapers: 0, paperNo: 1 }).allowed, false);
});

test('the exam entry point actually calls the gate', () => {
  // entitlement.logic.ts has modelled `examiner` since Phase 10 and nothing
  // checked it: the screens were free by omission rather than by decision.
  const hub = readFileSync(resolve(appDir, 'exam.tsx'), 'utf8');
  ok(hub.includes("useFeature('examiner')"), 'the hub must ask about entitlement');
  ok(hub.includes('examPaperAllowed('), 'and route the answer through the gate');
  ok(hub.includes("router.push('/paywall')"), 'a blocked paper must go somewhere');
});

test('the clock is mounted once and drives expiry', () => {
  const src = read('exam-section.tsx');
  ok(src.includes('<ExamClock'), 'the section must render the clock');
  ok(src.includes('onExpire={submit}'), 'expiry must submit the section');
  ok(src.includes('submitted.current'), 'submission must be guarded against firing twice');
});

/* ─── the recorded interlocutor ──────────────────────────────────────────── */

test('an interaction routes to the interlocutor, and does so before the recorder', () => {
  // Order is the whole guard. `task.skill === 'PO'` matches an interaction too,
  // so if the recorder branch came first an interaction would silently render
  // as a monologue with an answer bank nobody could reach.
  const src = read('exam-section.tsx');
  const interaction = src.indexOf('<ExamInterlocutorTask');
  const recorder = src.indexOf('<ExamSpeakTask');
  ok(interaction > -1, 'po_interaction must route somewhere');
  ok(recorder > -1, 'and a monologue must still reach the recorder');
  ok(interaction < recorder, 'the interaction branch must be tested first');
  ok(/taskType === 'po_interaction'/.test(src), 'and it must branch on the task type, not the skill');
});

test('the interlocutor scores nothing against a target line', () => {
  // The reason the role-play engine was not reused: a ScenarioTurn carries
  // `user`, a target the learner is marked against. That is a recite drill, and
  // the exam task is "obtain the information you need" — there is no sentence
  // the candidate is supposed to say.
  const c = readFileSync(resolve(srcDir, 'components/ExamInterlocutorTask.tsx'), 'utf8');
  const code = c.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
  ok(!/ScenarioTurn/.test(code), 'no role-play turn type may leak in');
  ok(!/<TextInput/.test(code), 'an interaction is spoken, never typed');
  ok(!/^import[^\n]*TextInput/m.test(code), 'and must not even import one');
  // stt.listen's first argument is the phrase an utterance is scored against.
  // Empty is the point: nothing here knows what the candidate should say.
  ok(/stt\.listen\(''/.test(code), 'the recogniser must be given no expected phrase');
});

test('a silent candidate is closed out, not looped forever', () => {
  // Without a bound the same deflection repeats until the section clock dies,
  // which reads as a broken app rather than a finished task.
  const c = readFileSync(resolve(srcDir, 'components/ExamInterlocutorTask.tsx'), 'utf8');
  ok(/MAX_SILENT_TURNS/.test(c), 'the bound must exist');
  ok(/silences\.current >= MAX_SILENT_TURNS/.test(c), 'and actually gate the loop');
  ok(/speak\(bank\.closing\)/.test(c), 'closing on the way out, not dead air');
});

test('delivery is measured over the mic, not the whole interview', () => {
  // Wall-clock would count the examiner's own turns as the candidate's
  // speaking time, understating their rate on every interaction task.
  const c = readFileSync(resolve(srcDir, 'components/ExamInterlocutorTask.tsx'), 'utf8');
  ok(/durationMs: speakingMs\.current/.test(c), 'duration must come from the summed mic windows');
  ok(!/durationMs: Date\.now\(\)/.test(c), 'never from wall-clock since the task began');
});

test('coverage reaches the grader as evidence, and is sent even when it is zero', () => {
  const src = read('exam-section.tsx');
  ok(/coverage: coverageNote\(/.test(src), 'the runner must build the coverage line');
  // Guarded on the ENTRY existing, not on its contents: `0/9 obtained` is the
  // most important thing this task can report, and a truthiness check on the
  // note would drop exactly the candidate who obtained nothing.
  ok(/coverage\[task\.id\] \?/.test(src), 'presence of a coverage record is what gates it');

  const grader = readFileSync(resolve(srcDir, 'services/examGrader.ts'), 'utf8');
  ok(/coverage\?:\s*string/.test(grader), 'the request type must carry it');

  const edge = readFileSync(resolve(srcDir, '../supabase/functions/grade-exam/index.ts'), 'utf8');
  ok(/coverageBlock/.test(edge), 'and the prompt must actually place it');
  ok(edge.indexOf('coverageBlock ? [coverageBlock]') < edge.indexOf('deliveryBlock ? [deliveryBlock]'),
    'evidence before proxies: coverage sits with the transcript, delivery last');
});

test('a po_interaction without a bank is refused at authoring time', () => {
  const po = devExamTasks(true).find((t) => t.taskType === 'po_interaction')!;
  ok(po.interlocutor, 'the fixture must carry one to prove against');
  const { interlocutor: _drop, ...bankless } = po;
  ok(validateExamTask(bankless as ExamTask).some((i) => /interlocutor/.test(i.message)),
    'an interaction with nothing to interact with is a monologue');
  // And the reverse: a bank on a task nobody would interact with is dead weight
  // that would never play.
  const written = devExamTasks(true).find((t) => t.skill === 'PE')!;
  ok(validateExamTask({ ...written, interlocutor: po.interlocutor }).some((i) => /interlocutor/.test(i.message)));
});
