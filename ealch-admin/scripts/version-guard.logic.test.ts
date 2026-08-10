// guardLessonVersion: the check that stops a batch rewriting a version the
// database already holds, and stops doing so on a dry run.
//
// This is the first unit test in ealch-admin. Until now the only runnable check
// here was Playwright, so every piece of logic in scripts/ was covered by
// running the script that used it — which meant `pnpm content:etre --dry-run`
// was simultaneously the test and the thing under test, and it was the version
// guard itself that made three of those unrunnable.

import { strictEqual, throws, doesNotThrow } from 'node:assert';
import { test } from 'node:test';
import { guardLessonVersion } from './version-guard.logic.ts';

/** A die() that throws instead of exiting, so a test can observe it. */
const dieThrows = (m: string): never => {
  throw new Error(`DIE:${m}`);
};

/** Swallow the warning line the dry-run path prints, and hand back what it said. */
function captureLogs(fn: () => void): string[] {
  const lines: string[] = [];
  const real = console.log;
  console.log = (...a: unknown[]) => void lines.push(a.join(' '));
  try {
    fn();
  } finally {
    console.log = real;
  }
  return lines;
}

const args = (prior: number | undefined, authored: number, dryRun: boolean) => ({
  lessonId: 'a1.06.l1',
  prior,
  authored,
  sourceFile: 'etre-lesson.ts',
  dryRun,
  die: dieThrows,
});

test('a real run dies when the database already holds this version', () => {
  throws(() => guardLessonVersion(args(4, 4, false)), /DIE:.*already carries a1\.06\.l1 at v4/);
});

test('a real run dies when the authored version is BEHIND the database', () => {
  // The rollback case. Lower is worse than equal, and both must stop.
  throws(() => guardLessonVersion(args(5, 4, false)), /DIE:/);
});

test('a real run passes when the version has moved forward', () => {
  doesNotThrow(() => guardLessonVersion(args(3, 4, false)));
});

test('a real run passes when the lesson is new to the database', () => {
  // `prior` is undefined for a lesson Postgres has never seen. A first publish
  // must not be blocked by a guard about rewriting.
  doesNotThrow(() => guardLessonVersion(args(undefined, 1, false)));
});

test('a DRY RUN warns and continues where a real run would die', () => {
  // The whole point. A dry run writes nothing, so it has no stake in the
  // version, and dying here made fourteen lesson sources unverifiable at the
  // moment somebody needed to verify them.
  let logs: string[] = [];
  doesNotThrow(() => {
    logs = captureLogs(() => guardLessonVersion(args(4, 4, true)));
  });
  strictEqual(logs.length, 2, 'the dry-run path says what is wrong and that it is continuing');
  strictEqual(logs[0].includes('already carries a1.06.l1 at v4'), true);
  strictEqual(logs[1].includes('dry run writes nothing'), true);
});

test('a dry run says nothing at all when the version is fine', () => {
  const logs = captureLogs(() => guardLessonVersion(args(3, 4, true)));
  strictEqual(logs.length, 0, 'a passing guard is silent, so the report stays readable');
});

test('the message names the file the version lives in, not the batch', () => {
  // The person reading this error is looking at the batch; the version is in
  // the data module. Naming the wrong file costs a minute every time.
  throws(() => guardLessonVersion(args(4, 4, false)), /etre-lesson\.ts/);
});
