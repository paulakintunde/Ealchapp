// The client half of BUG-02, asserted on source text.
//
// There is no component-test infrastructure in this repo yet (Jest + RNTL is
// TEST-02, a later phase). What matters here is structural: is the draft read
// on mount and fed into every state setter, does a discrete answer commit
// checkpoint immediately while typing is debounced, does backgrounding/unmount
// flush, and — the BUG-02 assertion proper — is the response on disk before
// grading starts, and is nothing ever graded twice.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok } from 'node:assert';
import { test } from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const read = (rel: string) => readFileSync(resolve(here, rel), 'utf8');

// Strip comments before every assertion below. This file's assertions quote
// the very identifiers they forbid or require, and exam-section.tsx is a
// heavily commented file whose prose would otherwise satisfy a naive
// `includes()` check on its own explanation of the fix.
const strip = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
const section = () => strip(read('../../app/exam-section.tsx'));

test('the runner has a durable store and a lifecycle hook', () => {
  const src = section();
  ok(src.includes("from '@react-native-async-storage/async-storage'"));
  ok(/import \{[^}]*AppState[^}]*\} from 'react-native'/.exec(src) !== null);
  ok(src.includes("from '@/services/examDraft.logic'"));
});

test('the draft is read on mount and its contents reach the state setters', () => {
  const src = section();
  ok(src.includes('AsyncStorage.getItem('));
  ok(src.includes('parseDraft('));
  ok(src.includes('restoreState('));
  for (const setter of ['setAnswers(', 'setTexts(', 'setSpoken(', 'setCoverage(', 'setDebate(']) {
    ok(src.indexOf(setter) !== -1, `${setter} must appear`);
  }
  ok(
    src.indexOf('restoreState(') < src.lastIndexOf('setDebate('),
    'the restore must feed the setters, not sit beside them'
  );
});

test('typing is debounced and everything else checkpoints at once', () => {
  const src = section();
  ok(src.includes('DRAFT_DEBOUNCE_MS'));
  ok(src.includes('setTimeout('));
  ok(src.includes('clearTimeout('));

  // Locate the immediate-checkpoint effect by its marker comment and pin that
  // its dependency array does not watch `texts` — that effect fires on every
  // discrete answer commit, and D-01 forbids a write per keystroke.
  const markerAt = src.indexOf('CHECKPOINT_DISCRETE');
  ok(markerAt !== -1, 'CHECKPOINT_DISCRETE marker must be present');
  const depsStart = src.indexOf('}, [', markerAt);
  ok(depsStart !== -1, 'the marked effect must have a dependency array');
  const depsEnd = src.indexOf(']', depsStart);
  const depsLine = src.slice(depsStart, depsEnd + 1);
  ok(/\btexts\b/.exec(depsLine) === null, 'the discrete checkpoint effect must not depend on texts');
});

test('backgrounding and unmount both flush', () => {
  const src = section();
  ok(src.includes("AppState.addEventListener('change'"));
  ok(src.includes('sub.remove()'));
  ok(src.includes('FLUSH_ON_UNMOUNT'));
});

test('nothing is graded before it is written, and nothing is graded twice', () => {
  const src = section();
  const flushAt = src.indexOf('FLUSH_BEFORE_GRADING');
  const skipAt = src.indexOf('isGraded(');
  const closedAt = src.indexOf('scoreClosedTask(');
  const gradeAt = src.indexOf('examGrader.grade(');
  ok(flushAt !== -1 && skipAt !== -1 && closedAt !== -1 && gradeAt !== -1);
  ok(flushAt < skipAt, 'the response must be on disk before the loop starts');
  ok(skipAt < closedAt, 'the already-graded check must precede local scoring');
  ok(skipAt < gradeAt, 'the already-graded check must precede the network grader');
  ok(src.includes('markGraded('), 'each grade must be recorded as it lands');
  ok(
    !src.includes('useProgress.getState().examResults'),
    'dedupe must be sitting-scoped via the draft, not history-scoped via examResults'
  );
});

test('a clean submit leaves nothing behind', () => {
  const src = section();
  ok(src.includes('AsyncStorage.removeItem('));
  ok(
    src.indexOf('AsyncStorage.removeItem(') < src.indexOf("pathname: '/exam-report'"),
    'the draft is cleared before the report replaces the screen'
  );
});
