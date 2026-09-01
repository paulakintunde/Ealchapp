// WHICH SNAPSHOTS DIE, decided in one place.
//
// Two callers prune: `content:prune` (the standalone tool) and `content:publish`
// (which self-trims after a successful publish so the bucket stays flat without
// anyone remembering). snapshot-utils.ts already warns what happens when two
// scripts carry their own copy of a shared contract, so the decision lives here
// and both import it.
//
// Pure on purpose: no network, no database, no process.exit. It takes what the
// bucket holds and what the DB knows, and returns what should happen. That is
// what makes the dangerous part testable.

import type { StorageObject } from './snapshot-utils.ts';

export type VersionedObject = StorageObject & { version: number };

export type PrunePlan = {
  /** Objects inside the retention window. */
  kept: VersionedObject[];
  /** Objects to delete. Never contains the live version. */
  doomed: VersionedObject[];
  /** Versions with a content_snapshots row but no object — already pruned.
   *  This is the CORRECT end state, not a fault: rows are the version counter
   *  and outlive their bytes. */
  missing: number[];
  /** Objects under the prefix that are not v{n}.json. Reported, never deleted:
   *  this prunes a known shape, it does not empty a directory. */
  unversioned: StorageObject[];
  totalBytes: number;
  freedBytes: number;
};

/** Parse snapshots/v{n}.json, or null for anything else. */
export function versionOf(name: string): number | null {
  const m = /^snapshots\/v(\d+)\.json$/.exec(name);
  return m ? Number(m[1]) : null;
}

/**
 * @param objects       everything under snapshots/ , as Storage reports it
 * @param knownVersions every version in content_snapshots, ANY order
 * @param liveVersion   the version manifest.json currently points at
 * @param keep          how many of the newest published versions to retain
 *
 * Throws rather than returning a bad plan. A caller that mis-computes the
 * window must not get the chance to delete what devices are being served.
 */
export function planPrune(
  objects: StorageObject[],
  knownVersions: number[],
  liveVersion: number,
  keep: number
): PrunePlan {
  if (!Number.isInteger(keep) || keep < 2) {
    throw new Error(`keep must be an integer >= 2, got ${keep}. Keeping fewer than two leaves nothing to roll back onto.`);
  }
  if (!Number.isInteger(liveVersion) || liveVersion < 1) {
    throw new Error(`liveVersion must be a positive integer, got ${liveVersion}`);
  }

  const versioned: VersionedObject[] = [];
  const unversioned: StorageObject[] = [];
  for (const o of objects) {
    const version = versionOf(o.name);
    if (version === null) unversioned.push(o);
    else versioned.push({ ...o, version });
  }
  versioned.sort((a, b) => b.version - a.version);

  // The window is the newest KEEP *published versions*, taken from the DB and
  // not from the bucket. Deriving it from the bucket would let an already
  // pruned gap pull an older version back in to fill the count.
  const desc = [...new Set(knownVersions)].sort((a, b) => b - a);
  const keepVersions = new Set(desc.slice(0, keep));
  keepVersions.add(liveVersion); // the served version is never optional

  const kept = versioned.filter((o) => keepVersions.has(o.version));
  const doomed = versioned.filter((o) => !keepVersions.has(o.version));

  // Belt and braces. If the window maths above ever regresses, this is what
  // stops it becoming a deleted live snapshot.
  if (doomed.some((o) => o.version === liveVersion)) {
    throw new Error(`refusing: the prune set contains the LIVE version v${liveVersion}`);
  }

  return {
    kept,
    doomed,
    missing: desc.filter((v) => !versioned.some((o) => o.version === v)),
    unversioned,
    totalBytes: versioned.reduce((n, o) => n + o.size, 0),
    freedBytes: doomed.reduce((n, o) => n + o.size, 0),
  };
}

export const mib = (b: number) => `${(b / 1048576).toFixed(1)} MiB`;
