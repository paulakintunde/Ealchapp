// Placement and no-coupling contract for the native review request (D-03, D-06, D-11, D-24).
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const read = (p: string) => readFileSync(resolve(root, p), 'utf8');
const count = (s: string, needle: string) => s.split(needle).length - 1;
const slash = (p: string) => p.split('\\').join('/');
function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(resolve(root, dir))) {
    const rel = join(dir, name);
    if (statSync(resolve(root, rel)).isDirectory()) walk(rel, out);
    else if (/\.tsx?$/.test(name)) out.push(slash(rel));
  }
  return out;
}

test('only reviewPrompt.ts imports expo-store-review; no app file calls requestReview', () => {
  const importers = [...walk('src'), ...walk('app')].filter(
    (f) => !/\.test\.tsx?$/.test(f) && /from 'expo-store-review'|require\('expo-store-review'\)|import\('expo-store-review'\)/.test(read(f)),
  );
  strictEqual(importers.length, 1);
  strictEqual(importers[0], 'src/services/reviewPrompt.ts');
  for (const f of walk('app')) ok(!read(f).includes('requestReview'), `${f} must not call requestReview`);
});

test('the review layer has no report-history coupling', () => {
  for (const f of ['src/services/reviewPrompt.ts', 'src/services/reviewPrompt.logic.ts']) {
    const imports = read(f).split('\n').filter((l) => /^\s*(import|export)\b.*from\s/.test(l) || /require\(/.test(l));
    for (const l of imports) ok(!/problemReport/.test(l), `${f} imports problemReport: ${l}`);
  }
});

test('act.tsx and den.tsx each call useReviewPromptOnFocus() once, and no other screen does', () => {
  strictEqual(count(read('app/act.tsx'), 'useReviewPromptOnFocus()'), 1);
  strictEqual(count(read('app/den.tsx'), 'useReviewPromptOnFocus()'), 1);
  for (const f of walk('app')) {
    if (f === 'app/act.tsx' || f === 'app/den.tsx') continue;
    ok(!read(f).includes('useReviewPromptOnFocus'), `${f} must not fire the review request`);
  }
});

test('armReviewPrompt in lesson.tsx runs only after completedRef.current = true', () => {
  const src = read('app/lesson.tsx');
  const calls = [...src.matchAll(/armReviewPrompt\(L\.id\)/g)];
  strictEqual(calls.length, 1);
  const at = calls[0].index as number;
  const guard = src.lastIndexOf('completedRef.current = true;', at);
  ok(guard > -1 && guard < at, 'arm must follow the completedRef guard');
  ok(!src.includes('maybeRequestReview'), 'lesson.tsx must not fire the request');
});

test('no banner kind is a review, rate or report prompt', () => {
  const src = read('src/store/useUI.ts');
  for (const m of src.matchAll(/kind:\s*'([^']+)'/g)) ok(!/review|rate|report/i.test(m[1]), `banner kind ${m[1]}`);
});
