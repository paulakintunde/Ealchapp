// The pack download indicator, the pure half (packs.logic.ts) and its copy
// (i18n/strings.ts). The surface is components/PackProgress.tsx, drawn on the
// downloads screen and, for a paid band still arriving, on the Den.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { denPackBanner, packDisplayName, packProgress, packProgressLine, type PackSyncSnapshot } from './packs.logic.ts';
import { T } from '../i18n/strings.ts';

const idle: PackSyncSnapshot = { status: 'idle', current: null, done: 0, total: 0 };
const run = (current: PackSyncSnapshot['current'], done: number, total: number): PackSyncSnapshot => ({ status: 'downloading', current, done, total });

test('nothing to draw while idle, or with nothing to fetch', () => {
  strictEqual(packProgress(idle), null);
  strictEqual(packProgress(run(null, 0, 0)), null);
});

test('step is 1-based and never past total; the bar moves only when a pack lands', () => {
  deepStrictEqual(packProgress(run(null, 0, 3)), { current: null, done: 0, total: 3, step: 1, fraction: 0 });
  deepStrictEqual(packProgress(run('b1', 1, 3)), { current: 'b1', done: 1, total: 3, step: 2, fraction: 1 / 3 });
  const last = packProgress(run('exam', 3, 3))!;
  strictEqual(last.step, 3);
  strictEqual(last.fraction, 1);
  strictEqual(packProgress(run('a2', -2, 2))!.done, 0, 'a bad count is clamped, not drawn');
  strictEqual(packProgress(run('a2', 9, 2))!.done, 2);
});

test('the line names the pack in both languages', () => {
  for (const lang of ['fr', 'en'] as const) {
    const s = T[lang];
    const strs = { stepFmt: s.packDlStepFmt, countFmt: s.packDlCountFmt, examWord: s.packDlExam };
    const a2 = packProgressLine(packProgress(run('a2', 0, 3))!, strs);
    ok(a2.startsWith('A2'), `${lang}: ${a2}`);
    ok(a2.includes('1') && a2.includes('3'), `${lang}: ${a2}`);
    const exam = packProgressLine(packProgress(run('exam', 2, 3))!, strs);
    ok(exam.startsWith(s.packDlExam), `${lang}: ${exam}`);
    const unnamed = packProgressLine(packProgress(run(null, 0, 2))!, strs);
    ok(!/\{|\}/.test(unnamed) && !unnamed.startsWith(' '), `${lang}: every placeholder filled: "${unnamed}"`);
  }
  strictEqual(packDisplayName('c1', 'Exams'), 'C1');
});

test('the Den banner shows only for a paid band still arriving', () => {
  const busy = run('a2', 0, 2);
  ok(denPackBanner(busy, 'a2', false));
  ok(denPackBanner(busy, 'b1', false), 'b1 is queued behind a2: still arriving');
  ok(!denPackBanner(busy, 'b1', true), 'already on the device');
  ok(!denPackBanner(busy, 'a1', false), 'a free band never waits on a pack');
  ok(!denPackBanner(busy, 'sons', false));
  ok(!denPackBanner(idle, 'a2', false), 'no sync running');
});

test('the copy is calm: no em dash, never the banned word', () => {
  const keys = ['packDlT', 'packDlS', 'packDlDenS', 'packDlStepFmt', 'packDlCountFmt', 'packDlExam'] as const;
  for (const lang of ['fr', 'en'] as const) {
    for (const k of keys) {
      const v = T[lang][k];
      ok(typeof v === 'string' && v.length > 0, `${lang}.${k}`);
      ok(!v.includes('—'), `${lang}.${k} has an em dash`);
      ok(!/hon+[eê]t/i.test(v), `${lang}.${k} uses a banned word`);
    }
  }
});
