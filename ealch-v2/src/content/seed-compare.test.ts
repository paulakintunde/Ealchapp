// `seedEqual` and the guard that stops the old shape coming back.

import { test } from 'node:test';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { seedEqual, seedDiff, seedMismatch } from './seed-compare.ts';

const HERE = dirname(fileURLToPath(import.meta.url));

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE HELPER
 * ═══════════════════════════════════════════════════════════════════════════ */

test('key order is not content', () => {
  ok(seedEqual({ a: 1, b: 2 }, { b: 2, a: 1 }));
  ok(seedEqual({ x: { p: 1, q: 2 } }, { x: { q: 2, p: 1 } }));
});

test('an omitted optional equals an absent one, which is the grammarPoints case', () => {
  // 667 item bodies changed in v51 by exactly this and not one changed content.
  ok(seedEqual({ id: 'a', grammarPoints: undefined }, { id: 'a' }));
  ok(seedEqual({ id: 'a' }, { id: 'a', grammarPoints: undefined }));
});

test('but an EMPTY ARRAY is not the same as an absent field', () => {
  // The generator omits `grammarPoints: []`, so the two shapes exist in the
  // wild — but `[]` is a real value a test may legitimately assert, and
  // silently equating it with absence would hide a field that was dropped.
  ok(!seedEqual({ id: 'a', grammarPoints: [] }, { id: 'a' }),
    'an explicit [] and an absent key are different states; only `undefined` normalises away');
});

test('array ORDER is content and is never normalised away', () => {
  ok(!seedEqual({ sections: ['a', 'b'] }, { sections: ['b', 'a'] }),
    'section order is the lesson; reordering it must fail');
});

test('a real content change is still caught', () => {
  ok(!seedEqual({ fr: 'un mail' }, { fr: 'un courriel' }));
  ok(!seedEqual({ n: 37 }, { n: 38 }));
});

test('seedDiff names the paths that differ, not the reordering', () => {
  const a = { id: 'x', b: 1, sections: [{ id: 's1', title: 'One' }] };
  const b = { sections: [{ title: 'Two', id: 's1' }], b: 1, id: 'x' };
  const d = seedDiff(a, b);
  strictEqual(d.length, 1, `expected one difference, got: ${d.join(' | ')}`);
  ok(d[0].includes('sections[0].title'), d[0]);
  ok(d[0].includes('One') && d[0].includes('Two'), d[0]);
});

test('seedDiff reports a length change rather than walking past it', () => {
  const d = seedDiff({ xs: [1, 2, 3] }, { xs: [1, 2] });
  strictEqual(d.length, 1);
  ok(d[0].includes('length 3 vs 2'), d[0]);
});

test('seedMismatch is empty when they match, and explains when they do not', () => {
  strictEqual(seedMismatch({ a: 1, b: 2 }, { b: 2, a: 1 }), '');
  ok(seedMismatch({ fr: 'un mail' }, { fr: 'un courriel' }).includes('drifted'));
});

/* ═══════════════════════════════════════════════════════════════════════════
 *  THE GUARD — so the shape that broke a2.30 cannot come back
 * ═══════════════════════════════════════════════════════════════════════════ */

test('no suite byte-compares a lesson against its seed copy', () => {
  /* `strictEqual(JSON.stringify(shipped), JSON.stringify(L))` asserts key
   * order, which a publish changes on every id. a2.30 shipped that shape and it
   * was green for weeks because nobody had published since it was written.
   *
   * Comments are stripped first: this file and the fix plan both quote the bad
   * shape on purpose, and a guard that fires on its own explanation is the
   * false-positive class this codebase keeps rediscovering. */
  const BAD = /JSON\.stringify\(\s*(shipped|seedCopy|fromSeed)\s*\)/;
  const offenders: string[] = [];
  for (const f of readdirSync(HERE).filter((x) => /\.test\.ts$/.test(x))) {
    if (f === 'seed-compare.test.ts') continue;
    const raw = readFileSync(join(HERE, f), 'utf8');
    const code = raw.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
    if (BAD.test(code)) offenders.push(f);
  }
  deepStrictEqual(offenders, [],
    `these suites byte-compare against the seed: ${offenders.join(', ')}.\n`
    + '      A publish regenerates seed.json and changes key order on every id, so this asserts\n'
    + '      the serialiser rather than the lesson. Use seedEqual() from ./seed-compare.ts.');
});
