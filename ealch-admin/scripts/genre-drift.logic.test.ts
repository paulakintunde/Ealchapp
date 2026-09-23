// genre-drift.logic: the two questions a publish asks about a1.03's endings.
//
// No corpus and no connection. Measurements are handed in as lookups, which is
// the whole reason that module takes them that way: the real -eur and -oire
// cases can be reproduced here exactly, with three lines of fixture each.
import { test } from 'node:test';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import {
  findArtifacts,
  findFigureMoves,
  formatGenreDrift,
  type EndingClaim,
  type Measurement,
} from './genre-drift.logic.ts';

const FLOOR = 90;

/** A lookup built from a plain table, so a fixture reads as data. */
const lookup = (table: Record<string, Measurement>) => (ending: string) => table[ending] ?? null;

const claim = (ending: string, predicts: string, accuracy: number, items: number): EndingClaim =>
  ({ ending, predicts, accuracy, items });

/* ═══ Figure moves ════════════════════════════════════════════════════════ */

test('a figure that still matches the seed is not a move', () => {
  const moves = findFigureMoves(
    [claim('tion', 'f', 100, 52)],
    lookup({ tion: { n: 52, accuracy: 100, predicts: 'f' } }),
  );
  deepStrictEqual(moves, []);
});

test('a population that moved is reported with both numbers', () => {
  const moves = findFigureMoves(
    [claim('tion', 'f', 100, 45)],
    lookup({ tion: { n: 52, accuracy: 100, predicts: 'f' } }),
  );
  strictEqual(moves.length, 1);
  deepStrictEqual(moves[0], { ending: 'tion', wasN: 45, nowN: 52, wasAcc: 100, nowAcc: 100 });
});

test('accuracy is compared rounded, the way a card states it', () => {
  // 92.4% prints as 92, so a card saying 92 has not drifted.
  const moves = findFigureMoves(
    [claim('eau', 'm', 92, 39)],
    lookup({ eau: { n: 39, accuracy: 92.4, predicts: 'm' } }),
  );
  deepStrictEqual(moves, []);
});

test('an ending nothing ends with is left to the artifact check, not counted as a move', () => {
  deepStrictEqual(findFigureMoves([claim('zzz', 'm', 100, 3)], lookup({})), []);
});

/* ═══ Artifacts ═══════════════════════════════════════════════════════════ */

test('a rule true in both corpora raises nothing', () => {
  const out = findArtifacts(
    [claim('tion', 'f', 100, 52)],
    [],
    lookup({ tion: { n: 52, accuracy: 100, predicts: 'f' } }),
    lookup({ tion: { n: 455, accuracy: 100, predicts: 'f' } }),
    FLOOR,
  );
  deepStrictEqual(out, []);
});

test('-oire: cleared the floor in the seed and not in the corpus, the real 2026 case', () => {
  const out = findArtifacts(
    [claim('oire', 'f', 90, 10)],
    [],
    lookup({ oire: { n: 10, accuracy: 90, predicts: 'f' } }),
    lookup({ oire: { n: 41, accuracy: 61, predicts: 'f' } }),
    FLOOR,
  );
  strictEqual(out.length, 1);
  strictEqual(out[0].kind, 'taught-below-floor');
  ok(out[0].detail.includes('61%'), out[0].detail);
  ok(out[0].detail.includes('should not be taught'), out[0].detail);
});

test('-eur: 93 in the seed, 86 in the corpus, still under the floor where it counts', () => {
  const out = findArtifacts(
    [claim('eur', 'm', 93, 15)],
    [],
    lookup({ eur: { n: 15, accuracy: 93, predicts: 'm' } }),
    lookup({ eur: { n: 60, accuracy: 86, predicts: 'm' } }),
    FLOOR,
  );
  strictEqual(out.length, 1);
  strictEqual(out[0].kind, 'taught-below-floor');
});

test('a gender that flips between the two corpora is named an artifact of the cut', () => {
  const out = findArtifacts(
    [claim('age', 'm', 93, 41)],
    [],
    lookup({ age: { n: 41, accuracy: 93, predicts: 'm' } }),
    lookup({ age: { n: 194, accuracy: 95, predicts: 'f' } }),
    FLOOR,
  );
  strictEqual(out.length, 1);
  strictEqual(out[0].kind, 'taught-predicts-flip');
  ok(out[0].detail.includes('artifact of the cut'), out[0].detail);
});

test('a dismissed ending stays dismissed while it is under the floor in both', () => {
  const out = findArtifacts(
    [],
    [claim('on', 'm', 53, 173)],
    lookup({ on: { n: 173, accuracy: 53, predicts: 'm' } }),
    lookup({ on: { n: 787, accuracy: 74, predicts: 'm' } }),
    FLOOR,
  );
  deepStrictEqual(out, [], 'under 90 in both, so waving it away is still honest teaching');
});

test('a dismissed ending that starts clearing the floor is reported, in either corpus', () => {
  const inCorpus = findArtifacts(
    [], [claim('on', 'm', 53, 173)],
    lookup({ on: { n: 173, accuracy: 53, predicts: 'm' } }),
    lookup({ on: { n: 787, accuracy: 94, predicts: 'm' } }),
    FLOOR,
  );
  strictEqual(inCorpus.length, 1);
  strictEqual(inCorpus[0].kind, 'dismissed-clears-floor');
  ok(inCorpus[0].detail.includes('corpus'), inCorpus[0].detail);

  const inSeed = findArtifacts(
    [], [claim('on', 'm', 91, 173)],
    lookup({ on: { n: 173, accuracy: 91, predicts: 'm' } }),
    lookup({ on: { n: 787, accuracy: 74, predicts: 'm' } }),
    FLOOR,
  );
  strictEqual(inSeed.length, 1);
  ok(inSeed[0].detail.includes('seed'), inSeed[0].detail);
});

test('an ending missing from one corpus is reported rather than skipped', () => {
  const out = findArtifacts(
    [claim('zzz', 'm', 100, 3)], [],
    lookup({ zzz: { n: 3, accuracy: 100, predicts: 'm' } }),
    lookup({}),
    FLOOR,
  );
  strictEqual(out.length, 1);
  strictEqual(out[0].kind, 'absent');
});

/* ═══ What a publish prints ═══════════════════════════════════════════════ */

test('a clean run prints nothing at all', () => {
  deepStrictEqual(formatGenreDrift([], []), []);
});

test('a figure move prints the exact commands that fix it', () => {
  const lines = formatGenreDrift(
    [{ ending: 'tion', wasN: 45, nowN: 52, wasAcc: 100, nowAcc: 100 }],
    [],
  ).join('\n');
  ok(lines.includes('45 -> 52'), lines);
  ok(lines.includes('_a1_genre_remeasure.ts --write'), lines);
  ok(lines.includes('content:gender'), lines);
  ok(!lines.includes('CONTENT problem'), 'a routine move must not be dressed up as a content failure');
});

test('an artifact is named a content problem and says re-measuring hides it', () => {
  const lines = formatGenreDrift(
    [],
    [{ ending: 'oire', kind: 'taught-below-floor', detail: '61% over 41 nouns in the corpus is under the 90% floor, so it should not be taught' }],
  ).join('\n');
  ok(lines.includes('CONTENT problem'), lines);
  ok(lines.includes('Re-measuring hides it'), lines);
  ok(lines.includes('-eur and -oire'), lines);
});

test('when both happen the artifact is printed first', () => {
  const lines = formatGenreDrift(
    [{ ending: 'tion', wasN: 45, nowN: 52, wasAcc: 100, nowAcc: 100 }],
    [{ ending: 'oire', kind: 'taught-below-floor', detail: 'under the floor' }],
  );
  const artifactAt = lines.findIndex((l) => l.includes('no longer hold'));
  const moveAt = lines.findIndex((l) => l.includes('printed figure(s) moved'));
  ok(artifactAt >= 0 && moveAt >= 0, lines.join('\n'));
  ok(artifactAt < moveAt, 'the serious one goes first');
});
