// BUG-02: the exam draft is what survives a force-stop mid-exam. These tests
// pin the three things that actually matter about it — the key never collides
// across papers/skills, the recorded audio path never reaches disk (D-09),
// and a corrupt/foreign/version-mismatched draft degrades to "no draft"
// rather than throwing inside a live exam (see the threat register in
// 07-01-PLAN.md, T-07-01/T-07-03).
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  DRAFT_DEBOUNCE_MS,
  DRAFT_VERSION,
  buildDraft,
  draftKey,
  hasContent,
  isGraded,
  markGraded,
  parseDraft,
  restoreState,
  serializeDraft,
  type ExamDraft,
} from './examDraft.logic.ts';
import type { Coverage } from '../utils/interlocutor.logic.ts';
import type { DebateReport } from '../utils/debate.logic.ts';
import type { SpokenAnswer } from '../components/ExamSpeakTask.tsx';

const spokenInput = (): Record<string, SpokenAnswer> => ({
  'task-po-1': {
    transcript: 'Bonjour, je m’appelle Paul.',
    signals: { durationMs: 8200, words: 41, wpm: 120 },
    audioUri: 'file:///data/user/0/app/cache/rec-1.wav',
    unavailable: false,
  },
});

const baseInput = (over: Partial<Parameters<typeof buildDraft>[0]> = {}) => ({
  paperId: 'tef_canada-blanc-01',
  skill: 'PO',
  answers: {} as Record<string, Record<string, number | null>>,
  texts: {} as Record<string, string>,
  spoken: spokenInput(),
  coverage: {} as Record<string, Coverage>,
  debate: {} as Record<string, DebateReport>,
  graded: [] as string[],
  now: 1_700_000_000_000,
  ...over,
});

test('draftKey is derived from paperId + skill alone, no attemptId', () => {
  strictEqual(draftKey('tef_canada-blanc-01', 'PO'), 'exam-draft:tef_canada-blanc-01:PO');
});

test('a serialized draft never contains the recorded audio file path or the audioUri key', () => {
  const d = buildDraft(baseInput());
  const raw = serializeDraft(d);
  ok(!raw.includes('rec-1.wav'), 'audio file name leaked into the persisted draft');
  ok(!raw.includes('audioUri'), 'audioUri key leaked into the persisted draft');
});

test('measured delivery signals survive a serialize -> parse round trip unchanged', () => {
  const d = buildDraft(baseInput());
  const parsed = parseDraft(serializeDraft(d), d.paperId, d.skill);
  ok(parsed);
  deepStrictEqual(parsed!.spoken['task-po-1'].signals, { durationMs: 8200, words: 41, wpm: 120 });
});

test('parseDraft(serializeDraft(d)) deep-equals d, including graded', () => {
  const d = buildDraft(baseInput({ graded: ['task-1'] }));
  const parsed = parseDraft(serializeDraft(d), d.paperId, d.skill);
  deepStrictEqual(parsed, d);
});

test('parseDraft on garbage returns null and does not throw', () => {
  strictEqual(parseDraft('not json at all', 'p1', 'PO'), null);
});

test('parseDraft(null, ...) returns null', () => {
  strictEqual(parseDraft(null, 'p1', 'PO'), null);
});

test('parseDraft rejects a version mismatch', () => {
  const d = buildDraft(baseInput({ paperId: 'p1' }));
  const raw = JSON.stringify({ ...d, v: 99 });
  strictEqual(parseDraft(raw, 'p1', 'PO'), null);
});

test('parseDraft rejects a foreign paperId or skill — a stale key must never resurrect another paper’s answers', () => {
  const d = buildDraft(baseInput({ paperId: 'paper-A', skill: 'PO' }));
  const raw = serializeDraft(d);
  strictEqual(parseDraft(raw, 'paper-B', 'PO'), null, 'foreign paperId must not resurrect');
  strictEqual(parseDraft(raw, 'paper-A', 'CE'), null, 'foreign skill must not resurrect');
});

test('restoreState rebuilds spoken with audioUri always null, other fields intact', () => {
  const d = buildDraft(baseInput());
  const state = restoreState(d);
  strictEqual(state.spoken['task-po-1'].audioUri, null);
  strictEqual(state.spoken['task-po-1'].transcript, 'Bonjour, je m’appelle Paul.');
  deepStrictEqual(state.spoken['task-po-1'].signals, { durationMs: 8200, words: 41, wpm: 120 });
  strictEqual(state.spoken['task-po-1'].unavailable, false);
});

test('isGraded reflects the per-sitting graded list, and is false for a null draft', () => {
  const d = buildDraft(baseInput({ graded: ['task-1'] }));
  strictEqual(isGraded(d, 'task-1'), true);
  strictEqual(isGraded(d, 'task-2'), false);
  strictEqual(isGraded(null, 'task-1'), false);
});

test('markGraded returns a new object, input not mutated, no duplicate entries', () => {
  const d = buildDraft(baseInput());
  const marked = markGraded(d, 'task-1');
  ok(marked !== d, 'markGraded must not return the same reference');
  deepStrictEqual(d.graded, [], 'the original draft must not be mutated');
  deepStrictEqual(marked.graded, ['task-1']);

  const markedAgain = markGraded(marked, 'task-1');
  deepStrictEqual(markedAgain.graded, ['task-1'], 'marking the same task twice must not duplicate it');
});

test('hasContent is false for an all-empty draft, true as soon as any bucket has a key', () => {
  const empty = buildDraft(baseInput({ spoken: {} }));
  strictEqual(hasContent(empty), false);

  const withAnswers = buildDraft(baseInput({ spoken: {}, answers: { 't1': { q1: 0 } } }));
  strictEqual(hasContent(withAnswers), true);

  const withTexts = buildDraft(baseInput({ spoken: {}, texts: { t1: 'hello' } }));
  strictEqual(hasContent(withTexts), true);

  const withSpoken = buildDraft(baseInput());
  strictEqual(hasContent(withSpoken), true);

  const withCoverage = buildDraft(
    baseInput({ spoken: {}, coverage: { t1: { covered: ['a'], missed: [], total: 1 } } })
  );
  strictEqual(hasContent(withCoverage), true);

  const withDebate = buildDraft(
    baseInput({
      spoken: {},
      debate: {
        t1: {
          side: 'for' as unknown as DebateReport['side'],
          held: true,
          depthByAxis: {},
          concessionsAnswered: 0,
          retreatsTriggered: 0,
          axesOpened: 0,
          axesAvailable: 0,
        },
      },
    })
  );
  strictEqual(hasContent(withDebate), true);

  const withGraded = buildDraft(baseInput({ spoken: {}, graded: ['task-1'] }));
  strictEqual(hasContent(withGraded), true);
});

test('DRAFT_DEBOUNCE_MS equals 1500', () => {
  strictEqual(DRAFT_DEBOUNCE_MS, 1500);
});

test('DRAFT_VERSION is a stable positive integer', () => {
  strictEqual(DRAFT_VERSION, 1);
});

test('buildDraft stamps savedAt from the provided now, or Date.now() when omitted', () => {
  const d: ExamDraft = buildDraft(baseInput({ now: 42 }));
  strictEqual(d.savedAt, 42);

  const before = Date.now();
  const d2 = buildDraft({ ...baseInput(), now: undefined });
  const after = Date.now();
  ok(d2.savedAt >= before && d2.savedAt <= after, 'savedAt must default to Date.now()');
});
