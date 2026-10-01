// Replays a phone updating its premium packs from an OLDER published state to
// the one about to be published, with the app's own rules (packs.ts syncOnce +
// fetchOne, content.ts's core adoption), and says whether it gets there.
//
// Why: v82 shipped a deadlock no validator saw. Every partial state of the NEW
// publish was valid, but a device holding a2 v79 + b2 v79 judged each new pack
// against the other stale one, rejected both, and kept its old lessons forever
// (found on the Pixel 9, 2026-09-30; fixed by trialPacks in 3721ca4). The only
// way to see that class of bug before a phone does is to replay the upgrade
// from the states phones are actually in. pack-replay.ts feeds this from
// Storage; publish-content.ts runs it on every --packs publish.
//
// Pure: no I/O. The corpora and the validator are passed in.
import {
  PACK_ORDER,
  composeCorpus,
  trialBands,
  partialValidationView,
  shouldAdoptCore,
  trialPacks,
  type PackName,
  type PacksManifest,
  type SnapshotKind,
} from '../../ealch-v2/src/services/packs.logic.ts';
import type { Corpus } from '../../ealch-v2/src/content/schema.ts';

export type HeldPack = { version: number; checksum: string; corpus: Corpus };

/** What a phone holds before it sees the new manifest-v2. */
export type DeviceState = {
  label: string;
  /** The snapshot slot: the core it adopted, or a legacy full snapshot. */
  base: Corpus;
  baseKind: SnapshotKind;
  baseVersion: number;
  packs: ReadonlyMap<PackName, HeldPack>;
};

/** The publish being checked: its manifest-v2, its core, and every pack body
 *  the manifest names (changed ones from this publish, reused ones as stored). */
export type Target = { manifest: PacksManifest; core: Corpus; packs: ReadonlyMap<PackName, Corpus> };

export type Rejection = { launch: number; pack: PackName; issues: number; sample: string[] };

export type ReplayResult = {
  label: string;
  coreFirst: boolean;
  entitled: readonly PackName[];
  converged: boolean;
  /** Launches it took (1 = everything landed on the first one). */
  launches: number;
  rejections: Rejection[];
};

/** How the device builds the trial set; the app's rule by default. Injected so
 *  the test can show the pre-3721ca4 rule deadlocking. */
export type TrialRule = (
  loaded: ReadonlyMap<PackName, Corpus>,
  candidate: { name: PackName; corpus: Corpus },
  stillQueued: Iterable<PackName>,
) => Map<PackName, Corpus>;

export function replayUpgrade(args: {
  device: DeviceState;
  target: Target;
  entitled: readonly PackName[];
  validate: (c: Corpus) => readonly unknown[];
  maxLaunches?: number;
  /** Launch 1 adopts the core before any pack syncs: the entitlement cache has
   *  not hydrated yet, so syncOnce returns at once while a device already on a
   *  core adopts the newer one regardless. This is how a real phone reaches
   *  new core + stale packs, the state the v82 deadlock lived in. */
  coreFirst?: boolean;
  trial?: TrialRule;
  describe?: (issue: unknown) => string;
}): ReplayResult {
  const { target, entitled, validate } = args;
  const trial = args.trial ?? trialPacks;
  const describe = args.describe ?? ((i: unknown) => JSON.stringify(i).slice(0, 160));
  const maxLaunches = args.maxLaunches ?? 3;
  const byName = new Map(target.manifest.packs.map((p) => [p.name, p]));

  let base = args.device.base;
  let cached = { version: args.device.baseVersion, kind: args.device.baseKind };
  const held = new Map(args.device.packs);
  const rejections: Rejection[] = [];

  const pending = () =>
    PACK_ORDER.filter((n) => entitled.includes(n) && byName.has(n) && held.get(n)?.checksum !== byName.get(n)!.checksum);

  for (let launch = 1; launch <= maxLaunches; launch++) {
    // syncOnce: every missing or outdated entitled pack, in fetch order, each
    // judged by the trial rule against the snapshot the device holds NOW.
    const todo = args.coreFirst && launch === 1 ? [] : pending();
    const unlanded = new Set(todo);
    for (const name of todo) {
      const entry = byName.get(name)!;
      const body = target.packs.get(name);
      if (!body) throw new Error(`pack-replay: the target has no body for ${name}`);
      const loaded = new Map([...held].map(([n, h]) => [n, h.corpus] as const));
      const set = trial(loaded, { name, corpus: body }, [...unlanded]);
      const order = PACK_ORDER.filter((p) => set.has(p));
      const merged = composeCorpus(base, set, order);
      const issues = validate(partialValidationView(merged, { bands: trialBands(order, base), exam: order.includes('exam') }));
      if (issues.length) {
        rejections.push({ launch, pack: name, issues: issues.length, sample: issues.slice(0, 3).map(describe) });
        continue;
      }
      held.set(name, { version: entry.version, checksum: entry.checksum, corpus: body });
      unlanded.delete(name);
    }

    // content.ts: then the core, unless a full snapshot must wait for packs.
    const adopt = shouldAdoptCore({
      core: target.manifest.core,
      rollout: 100,
      cached,
      bucket: 0,
      packsPending: pending().length > 0,
    });
    if (adopt) {
      base = target.core;
      cached = { version: target.manifest.core.version, kind: 'core' };
    }

    const done = cached.kind === 'core' && cached.version === target.manifest.core.version && pending().length === 0;
    if (done) return { label: args.device.label, coreFirst: !!args.coreFirst, entitled, converged: true, launches: launch, rejections };
  }
  return { label: args.device.label, coreFirst: !!args.coreFirst, entitled, converged: false, launches: maxLaunches, rejections };
}

/** The pack versions a device held at `version`: for each pack, the newest
 *  stored version at or below it (a pack is only re-uploaded when it changed). */
export function packVersionsAt(version: number, stored: ReadonlyMap<PackName, readonly number[]>): Map<PackName, number> {
  const out = new Map<PackName, number>();
  for (const [name, versions] of stored) {
    const at = versions.filter((v) => v <= version).sort((a, b) => b - a)[0];
    if (at !== undefined) out.set(name, at);
  }
  return out;
}
