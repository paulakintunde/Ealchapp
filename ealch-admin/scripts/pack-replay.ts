// Mixed-version pack replay against what is really in Storage (pack-replay.logic.ts).
//
// For each of the last few published versions P, a phone is rebuilt as it was
// on P (core/vP + for each pack the newest stored version at or below P), plus
// one phone still on the legacy full snapshot manifest.json serves. Each is
// then updated to the target with the app's own rules, for a premium device in
// both launch orders (packs first; core first, as when the entitlement cache
// hydrates late) and an exam-only device. A phone that never converges is a
// deadlock, and a --packs publish refuses it.
//
// Usage (read-only; downloads only):
//   npx tsx scripts/pack-replay.ts            replay onto the LIVE manifest-v2
//   npx tsx scripts/pack-replay.ts --from 4   from the last 4 versions (default 3)
// publish-content.ts calls replayFromStorage() with the publish being made.
import './env';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { downloadFromStorage, listStorage, sha256 } from './snapshot-utils.ts';
import { MANIFEST_V2, PACK_BUCKET } from './content-packs.logic.ts';
import { packVersionsAt, replayUpgrade, type DeviceState, type HeldPack, type ReplayResult, type Target } from './pack-replay.logic.ts';
import { validateCorpus, type Corpus } from '../../ealch-v2/src/content/schema.ts';
import {
  PACK_ORDER,
  entitledPacks,
  isPacksManifest,
  verifyPack,
  type PackName,
  type PacksManifest,
} from '../../ealch-v2/src/services/packs.logic.ts';

const describe = (i: unknown) => {
  const x = i as { path?: string; message?: string };
  return `${x.path ?? ''} ${x.message ?? JSON.stringify(i)}`.trim().slice(0, 160);
};

const PROFILES: { name: string; entitled: PackName[]; coreFirst: boolean }[] = [
  { name: 'premium, packs first', entitled: entitledPacks({ levelsAll: true, examiner: true }), coreFirst: false },
  { name: 'premium, core first', entitled: entitledPacks({ levelsAll: true, examiner: true }), coreFirst: true },
  { name: 'exam only', entitled: entitledPacks({ levelsAll: false, examiner: true }), coreFirst: false },
];

export type ReplayReport = { results: (ReplayResult & { profile: string })[]; states: string[]; lines: string[]; deadlocks: number };

export async function replayFromStorage(opts: {
  url: string;
  key: string;
  target: Target;
  /** How many earlier published versions to start from. */
  from?: number;
}): Promise<ReplayReport> {
  const { url, key, target } = opts;
  const from = opts.from ?? 3;
  const tv = target.manifest.version;

  // What is stored: core versions (public bucket) and pack versions (private).
  const verOf = (name: string) => Number(/\/v(\d+)\.json$/.exec(name)?.[1] ?? NaN);
  const coreVersions = (await listStorage(url, key, 'core/')).map((o) => verOf(o.name)).filter((v) => Number.isInteger(v) && v < tv).sort((a, b) => b - a);
  const stored = new Map<PackName, number[]>();
  for (const name of PACK_ORDER) {
    const vs = (await listStorage(url, key, `${name}/`, PACK_BUCKET)).map((o) => verOf(o.name)).filter((v) => Number.isInteger(v));
    if (vs.length) stored.set(name, vs);
  }

  const packCache = new Map<string, HeldPack>();
  const heldPack = async (name: PackName, version: number): Promise<HeldPack> => {
    const k = `${name}/v${version}`;
    if (!packCache.has(k)) {
      const text = await downloadFromStorage(url, key, `${k}.json`, PACK_BUCKET);
      const checksum = sha256(text);
      const v = verifyPack(text, { name, version, checksum });
      if (!v.ok) throw new Error(`${k} does not verify as a pack (${v.reason})`);
      packCache.set(k, { version, checksum, corpus: v.corpus as Corpus });
    }
    return packCache.get(k)!;
  };
  const heldAt = async (version: number) => {
    const out = new Map<PackName, HeldPack>();
    for (const [name, v] of packVersionsAt(version, stored)) out.set(name, await heldPack(name, v));
    return out;
  };

  const devices: DeviceState[] = [];
  for (const p of coreVersions.slice(0, from)) {
    const base = JSON.parse(await downloadFromStorage(url, key, `core/v${p}.json`)) as Corpus;
    devices.push({ label: `core v${p} + its packs`, base, baseKind: 'core', baseVersion: p, packs: await heldAt(p) });
  }
  // A phone still holding the legacy full snapshot (a packs build that has not
  // yet taken a core: its packs must land first).
  try {
    const legacy = JSON.parse(await downloadFromStorage(url, key, 'manifest.json')) as { version: number; path: string };
    const base = JSON.parse(await downloadFromStorage(url, key, legacy.path)) as Corpus;
    devices.push({ label: `legacy full v${legacy.version} + its packs`, base, baseKind: 'full', baseVersion: legacy.version, packs: await heldAt(legacy.version) });
  } catch {
    // No legacy snapshot left to start from: nothing to replay for it.
  }

  const validate = (c: Corpus) => validateCorpus(c);
  const results: ReplayReport['results'] = [];
  const lines: string[] = [];
  for (const device of devices) {
    for (const prof of PROFILES) {
      // A device holds only what it was entitled to.
      const packs = new Map([...device.packs].filter(([n]) => prof.entitled.includes(n)));
      const r = replayUpgrade({ device: { ...device, packs }, target, entitled: prof.entitled, validate, describe, coreFirst: prof.coreFirst });
      results.push({ ...r, profile: prof.name });
      const tag = r.converged ? (r.launches === 1 ? '✓' : `✓ in ${r.launches} launches`) : '✖ NEVER CONVERGES';
      lines.push(`    ${tag.padEnd(18)} ${device.label}, ${prof.name}`);
      for (const x of r.rejections.slice(0, 4)) lines.push(`        launch ${x.launch}: ${x.pack} rejected, ${x.issues} issue(s): ${x.sample[0] ?? ''}`);
    }
  }
  return { results, states: devices.map((d) => d.label), lines, deadlocks: results.filter((r) => !r.converged).length };
}

/** The target as it is live now: manifest-v2, its core and every pack it names. */
async function liveTarget(url: string, key: string): Promise<Target> {
  const manifest = JSON.parse(await downloadFromStorage(url, key, MANIFEST_V2)) as PacksManifest;
  if (!isPacksManifest(manifest)) throw new Error('manifest-v2.json is not a packs manifest');
  const core = JSON.parse(await downloadFromStorage(url, key, manifest.core.path)) as Corpus;
  const packs = new Map<PackName, Corpus>();
  for (const e of manifest.packs) {
    const text = await downloadFromStorage(url, key, e.path, PACK_BUCKET);
    const v = verifyPack(text, e);
    if (!v.ok) throw new Error(`${e.path} does not verify against manifest-v2 (${v.reason})`);
    packs.set(e.name, v.corpus as Corpus);
  }
  return { manifest, core, packs };
}

const invokedDirectly = !!process.argv[1] && resolve(fileURLToPath(import.meta.url)) === resolve(process.argv[1]);
async function main(): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error('✖ needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in ealch-admin/.env');
    process.exit(1);
  }
  const ix = process.argv.indexOf('--from');
  const from = ix === -1 ? 3 : Number(process.argv[ix + 1]);
  const t0 = Date.now();
  const target = await liveTarget(url, key);
  console.log(`replaying phones onto the live v${target.manifest.version}`);
  const rep = await replayFromStorage({ url, key, target, from });
  for (const l of rep.lines) console.log(l);
  console.log(`${rep.deadlocks ? '✖' : '✓'} ${rep.results.length} replays from ${rep.states.length} states, ${rep.deadlocks} deadlock(s), ${((Date.now() - t0) / 1000).toFixed(0)} s`);
  process.exit(rep.deadlocks ? 1 : 0);
}

if (invokedDirectly) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
