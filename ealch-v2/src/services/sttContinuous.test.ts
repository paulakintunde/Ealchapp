// The recogniser is never asked for continuous mode. Pinned on source text.
//
// Measured on a Pixel 6, 2026-09-08: `continuous: true` makes the native
// start() throw, the catch resolves `available: false`, and the exam reports
// "Microphone unavailable" without ever opening a microphone session — while
// the drill, four seconds either side, opens one and transcribes perfectly.
//
// The flag was never what made a pause survivable. The segment loop is.
//
// This guard already existed once, as sttLongForm.test.ts (commit 8cd0be3),
// and caught a real defect on its first run. Commit 17f1fc2 reverted the whole
// long-form-capture feature (2fc9244) that the fix rode in with and deleted
// this test as collateral. The line it protects survived that revert by luck.
// BUG-03 puts the guard back.
//
// COMMENTS ARE STRIPPED BEFORE EVERY ASSERTION. The note above deliberately
// quotes the option it forbids, and a guard that cannot tell prose from code
// fires on the explanation of why it exists. It caught exactly that, on itself,
// the first time it ran.
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ok } from 'node:assert';
import { test } from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const read = (rel: string) => readFileSync(resolve(here, rel), 'utf8');
const strip = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');

test('the recogniser is never asked for continuous mode', () => {
  const code = strip(read('./stt.ts'));
  ok(/continuous: false,/.test(code), 'continuous must be false');
});

test('continuous mode is not reachable through a flag', () => {
  const code = strip(read('./stt.ts'));
  ok(!/continuous: (true|!!|opts\.|[A-Za-z_$][\w$]*\s*\?)/.test(code),
     'continuous must be a literal false, never a flag, ternary or negation');
  // Exactly one continuous key, so a second conditional one cannot hide behind
  // the first literal one.
  ok((code.match(/continuous:/g) ?? []).length === 1, 'exactly one continuous option may exist');
});
