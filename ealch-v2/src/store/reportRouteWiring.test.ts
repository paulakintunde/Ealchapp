// Phase 10 / D-30: Le Rapport moved from /feedback to /report. Source-grep wiring.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok } from 'node:assert';
import { test } from 'node:test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const read = (p: string) => readFileSync(resolve(root, p), 'utf8');

function walk(dir: string, out: string[] = []): string[] {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.tsx?$/.test(n)) out.push(p);
  }
  return out;
}

test('report.tsx exists and exports Report', () => {
  ok(existsSync(resolve(root, 'app/report.tsx')));
  ok(read('app/report.tsx').includes('export default function Report'));
});

test('feedback.tsx is a redirect stub to /report', () => {
  ok(read('app/feedback.tsx').includes('href="/report"'));
});

test("nothing else routes to '/feedback'", () => {
  const isTest = (f: string) => f.includes('.test.');
  const isStub = (f: string) => f.replaceAll(String.fromCharCode(92), '/').endsWith('app/feedback.tsx');
  const files = [...walk(resolve(root, 'app')), ...walk(resolve(root, 'src'))].filter((f) => !isTest(f) && !isStub(f));
  const bad = files.filter((f) => readFileSync(f, 'utf8').includes("'/feedback'"));
  ok(bad.length === 0, `stale /feedback route in: ${bad.join(', ')}`);
});

test('entry points and layout use /report', () => {
  ok(read('app/profile.tsx').includes("router.push('/report')"));
  ok(read('app/roleplay.tsx').includes("router.push('/report')"));
  ok(read('app/speak.tsx').includes("router.push('/report')"));
  ok(read('app/_layout.tsx').includes('name="report"'));
});

test('report.tsx uses the shared figures, localized names and a11y labels', () => {
  const src = read('app/report.tsx');
  ok(src.includes('reportFigures('));
  ok(src.includes('T.reportRingA11y'));
  ok(src.includes('T.reportWeakA11y'));
  ok(!src.includes('?? act'), 'no raw-id fallback for drill names');
});

test('profile accuracy uses headlineAttempts(attempts)', () => {
  ok(read('app/profile.tsx').includes('headlineAttempts(attempts)'));
});

test('R6 wiring: weak row pushes /lesson with the anchor and lesson reads params.at', () => {
  const src = read('app/report.tsx');
  ok(src.includes("pathname: '/lesson'") && src.includes('at: anchor'));
  ok(read('app/lesson.tsx').includes('params.at'));
});
