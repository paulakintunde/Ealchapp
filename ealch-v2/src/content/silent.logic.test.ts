import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { glyphs, silentChars, silentIndicesValid, silentRuns } from './silent.logic.ts';

test('glyphs marks exactly the indices given', () => {
  const g = glyphs('petit', [4]);
  strictEqual(g.length, 5);
  strictEqual(g.filter((x) => x.silent).length, 1);
  strictEqual(g[4].ch, 't');
  ok(g[4].silent);
  ok(!g[0].silent);
});

test('silentChars reads back what the indices actually grey', () => {
  // This is the authoring check: the readback has to spell the silent letters.
  strictEqual(silentChars('petit', [4]), 't');
  strictEqual(silentChars('temps', [2, 3, 4]), 'mps');
  strictEqual(silentChars('vingt', [3, 4]), 'gt');
  strictEqual(silentChars('ils parlent', [8, 9, 10]), 'ent');
  strictEqual(silentChars('sac', []), '');
});

test('indices are over CHARACTERS, not UTF-16 code units', () => {
  // The accented characters the corpus actually carries. If this ever splits
  // by code unit the greyed letter shifts and the card teaches the wrong thing.
  strictEqual(silentChars('hôtel', [0]), 'h');
  strictEqual(silentChars('héros', [0, 4]), 'hs');
  strictEqual(silentChars('française', [8]), 'e');
  strictEqual([...'française'].length, 9);
});

test('silentIndicesValid catches the off-by-one that ships a wrong card', () => {
  // The two real errors found while authoring the sons.06 corpus.
  ok(!silentIndicesValid('histoire', [0, 8]), 'index 8 is past the end of an 8-character word');
  ok(silentIndicesValid('histoire', [0, 7]));
  ok(!silentIndicesValid('ils parlent', [8, 9, 10, 11]), 'index 11 is past the end');
  ok(silentIndicesValid('ils parlent', [8, 9, 10]));
  // Pointing at the space is always a slip: it greys nothing visible.
  ok(!silentIndicesValid('ils parlent', [3]));
  // No indices at all is valid — most words have every letter pronounced.
  ok(silentIndicesValid('sac'));
  ok(silentIndicesValid('sac', []));
});

test('out-of-range indices render un-greyed rather than throwing', () => {
  // A bad index must not crash a lesson mid-swipe; the schema validator is
  // what refuses it at authoring time.
  const g = glyphs('sac', [99]);
  strictEqual(g.length, 3);
  strictEqual(g.filter((x) => x.silent).length, 0);
});

test('silentRuns groups contiguous silent letters', () => {
  deepStrictEqual(silentRuns('ils parlent', [8, 9, 10]), [{ start: 8, end: 10 }]);
  deepStrictEqual(silentRuns('temps', [2, 3, 4]), [{ start: 2, end: 4 }]);
  // héros greys the leading h and the trailing s: two separate runs.
  deepStrictEqual(silentRuns('héros', [0, 4]), [
    { start: 0, end: 0 },
    { start: 4, end: 4 },
  ]);
  deepStrictEqual(silentRuns('sac', []), []);
});

test('the whole muettes corpus has valid silent indices', async () => {
  // The corpus lives in the admin repo; skip cleanly when it is not present
  // (the app repo is published on its own) rather than failing the suite.
  let MUETTES: { id: string; fr: string; silent: number[] }[];
  try {
    ({ MUETTES } = await import('../../../ealch-admin/scripts/data/muettes-corpus.ts'));
  } catch {
    return;
  }
  for (const w of MUETTES) {
    ok(
      silentIndicesValid(w.fr, w.silent),
      `${w.id} "${w.fr}" has invalid silent indices ${JSON.stringify(w.silent)} (greys "${silentChars(w.fr, w.silent)}")`
    );
  }
});
