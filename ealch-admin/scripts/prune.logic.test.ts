// planPrune decides which published snapshots get deleted. It is the one piece
// of this system that destroys something, and it now runs unattended at the end
// of every publish, so the interesting cases are the ones where it could delete
// too much rather than the ones where it works.

import { deepStrictEqual, strictEqual, throws } from 'node:assert';
import { test } from 'node:test';
import { planPrune, versionOf } from './prune.logic.ts';
import type { StorageObject } from './snapshot-utils.ts';

/** Objects for the given versions, 1 MiB each, in bucket order (name asc). */
const objects = (...versions: number[]): StorageObject[] =>
  versions.map((v) => ({ name: `snapshots/v${v}.json`, size: 1048576 }));

const versions = (p: { version: number }[]) => p.map((o) => o.version);

test('keeps the newest N versions and dooms the rest', () => {
  const plan = planPrune(objects(1, 2, 3, 4, 5), [1, 2, 3, 4, 5], 5, 2);
  deepStrictEqual(versions(plan.kept), [5, 4]);
  deepStrictEqual(versions(plan.doomed), [3, 2, 1]);
  strictEqual(plan.freedBytes, 3 * 1048576);
  strictEqual(plan.totalBytes, 5 * 1048576);
});

test('keeps everything when the window is wider than the history', () => {
  const plan = planPrune(objects(1, 2, 3), [1, 2, 3], 3, 10);
  strictEqual(plan.doomed.length, 0);
  strictEqual(plan.freedBytes, 0);
});

test('an already-pruned gap does not pull an older version back into the window', () => {
  // v41-46 are gone; rows for v1 and v40 remain. Keeping 3 must mean v47-49,
  // NOT "three surviving objects", or a prune would ratchet backwards and
  // start preserving ancient versions to make up the count.
  const known = [49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 1];
  const plan = planPrune(objects(1, 40, 47, 48, 49), known, 49, 3);
  deepStrictEqual(versions(plan.kept), [49, 48, 47]);
  deepStrictEqual(versions(plan.doomed), [40, 1]);
  deepStrictEqual(plan.missing, [46, 45, 44, 43, 42, 41]);
});

test('the live version survives even when it falls outside the window', () => {
  // Rollback republishes old content as a NEW version, so the live version is
  // normally the newest. If it ever is not, it is still what devices fetch.
  const plan = planPrune(objects(1, 2, 3, 4, 5), [1, 2, 3, 4, 5], 1, 2);
  deepStrictEqual(versions(plan.kept), [5, 4, 1]);
  deepStrictEqual(versions(plan.doomed), [3, 2]);
});

test('no combination of inputs ever dooms the live version', () => {
  // The throw inside planPrune is defence in depth and is UNREACHABLE through
  // the current maths, because keepVersions.add(liveVersion) runs before the
  // split. Asserting that it throws would be asserting a guard that cannot
  // fire. The invariant it protects is what is worth testing, so this sweeps
  // the live version across every position: newest, oldest, middle, and a
  // version whose bytes are already gone.
  const all = [1, 2, 3, 4, 5, 6, 7, 8];
  for (const live of all) {
    for (const keep of [2, 3, 5, 9]) {
      const plan = planPrune(objects(...all), all, live, keep);
      strictEqual(
        plan.doomed.some((o) => o.version === live), false,
        `live v${live} was doomed at keep=${keep}`
      );
      strictEqual(
        plan.kept.some((o) => o.version === live), true,
        `live v${live} was not kept at keep=${keep}`
      );
    }
  }
});

test('refuses a window smaller than two, which would leave nothing to roll back onto', () => {
  throws(() => planPrune(objects(1, 2, 3), [1, 2, 3], 3, 1), /keep must be an integer >= 2/);
  throws(() => planPrune(objects(1, 2, 3), [1, 2, 3], 3, 2.5), /keep must be an integer >= 2/);
});

test('objects that are not v{n}.json are reported and never doomed', () => {
  const odd = [{ name: 'snapshots/README.txt', size: 10 }, { name: 'snapshots/v9.json.bak', size: 20 }];
  const plan = planPrune([...objects(1, 2, 3), ...odd], [1, 2, 3], 3, 2);
  deepStrictEqual(plan.unversioned.map((o) => o.name), ['snapshots/README.txt', 'snapshots/v9.json.bak']);
  deepStrictEqual(versions(plan.doomed), [1]);
  // and their bytes are not counted as reclaimable
  strictEqual(plan.totalBytes, 3 * 1048576);
});

test('rows whose bytes are already gone are reported, not re-deleted', () => {
  const plan = planPrune(objects(9, 10), [1, 2, 9, 10], 10, 2);
  deepStrictEqual(plan.missing, [2, 1]);
  strictEqual(plan.doomed.length, 0);
});

test('duplicate version rows do not shrink the retention window', () => {
  const plan = planPrune(objects(1, 2, 3, 4), [4, 4, 3, 3, 2, 1], 4, 3);
  deepStrictEqual(versions(plan.kept), [4, 3, 2]);
  deepStrictEqual(versions(plan.doomed), [1]);
});

test('unsorted knownVersions are handled, since the DB order is the caller choice', () => {
  const plan = planPrune(objects(1, 2, 3, 4, 5), [3, 1, 5, 2, 4], 5, 2);
  deepStrictEqual(versions(plan.kept), [5, 4]);
});

test('versionOf accepts only the exact snapshot shape', () => {
  strictEqual(versionOf('snapshots/v7.json'), 7);
  strictEqual(versionOf('snapshots/v57.json'), 57);
  strictEqual(versionOf('snapshots/v7.json.gz'), null);
  strictEqual(versionOf('manifest.json'), null);
  strictEqual(versionOf('snapshots/v.json'), null);
  strictEqual(versionOf('other/v7.json'), null);
});
