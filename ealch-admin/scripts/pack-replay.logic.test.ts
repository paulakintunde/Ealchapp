import { test } from 'node:test';
import { deepStrictEqual, ok, strictEqual } from 'node:assert/strict';
import { planPublish, splitCorpus } from './content-packs.logic.ts';
import { packVersionsAt, replayUpgrade, type DeviceState, type HeldPack, type Target } from './pack-replay.logic.ts';
import { stableStringify, sha256 } from './snapshot-utils.ts';
import { validateCorpus, type Corpus, type Lesson, type Unit } from '../../ealch-v2/src/content/schema.ts';
import { PACK_ORDER, verifyPack, type PackName, type PacksManifest } from '../../ealch-v2/src/services/packs.logic.ts';

const item = (id: string) => {
  const [, level, theme] = id.split('.');
  return { id, kind: 'word', level, theme, fr: id, en: id, tags: [], drills: ['flashcard'], audioRef: null, version: 1 } as unknown as Corpus['items'][number];
};
const lesson = (id: string, itemIds: string[]) =>
  ({ id, unitId: id.split('.').slice(0, 2).join('.'), title: `T ${id}`, itemIds, acts: [{ title: 'Act' }], deckTranche: [itemIds] }) as unknown as Lesson;
const unit = (id: string, seq: number, lessonIds: string[]): Unit => ({
  id, seq, title: id, sub: id, lessonIds, ...(['sons', 'a1', 'a2'].includes(id.split('.')[0]) ? { track: id.split('.')[0] as Unit['track'] } : {}),
});

/** v9: one lesson per band. v10 adds a2.02 and b1.02: their outlines go into
 *  the NEW core, their bodies only into the new a2 and b1 packs. That is the
 *  shape of v81 + v82 (a2.36 inserted, B2 lessons 9 to 16 added). */
function corpus(version: 9 | 10): Corpus {
  const grown = version === 10;
  return {
    version,
    domains: [{ slug: 'd', title: 'D', order: 1 }] as Corpus['domains'],
    themes: [],
    units: [
      unit('a1.01', 1, ['a1.01.l1']),
      unit('a2.01', 1, ['a2.01.l1']),
      ...(grown ? [unit('a2.02', 2, ['a2.02.l1'])] : []),
      unit('b1.01', 1, ['b1.01.l1']),
      ...(grown ? [unit('b1.02', 2, ['b1.02.l1'])] : []),
    ],
    lessons: [
      lesson('a1.01.l1', ['fr.a1.x.001']),
      lesson('a2.01.l1', ['fr.a2.x.001']),
      ...(grown ? [lesson('a2.02.l1', ['fr.a2.x.002'])] : []),
      lesson('b1.01.l1', ['fr.b1.x.001']),
      ...(grown ? [lesson('b1.02.l1', ['fr.b1.x.002'])] : []),
    ],
    items: ['fr.a1.x.001', 'fr.a2.x.001', 'fr.b1.x.001', ...(grown ? ['fr.a2.x.002', 'fr.b1.x.002'] : [])].map(item),
    scenarios: [],
    playlists: [],
    speakPath: [],
    examPapers: [],
    examTasks: [],
  } as unknown as Corpus;
}

function publish(version: 9 | 10, previous: PacksManifest | null) {
  const split = splitCorpus(corpus(version));
  const plan = planPublish({ version, rollout: 100, split, previous, stringify: stableStringify, sha256 });
  // Each pack as a device holds it: the uploaded bytes, verified and parsed.
  const bodies = new Map<PackName, Corpus>();
  for (const body of split.packs) {
    const entry = plan.manifest.packs.find((p) => p.name === body.pack)!;
    const v = verifyPack(stableStringify({ ...body, version: entry.version }), entry);
    if (!v.ok) throw new Error(`${body.pack} does not verify`);
    bodies.set(body.pack, v.corpus as Corpus);
  }
  return { core: split.core, manifest: plan.manifest, bodies };
}

const v9 = publish(9, null);
const v10 = publish(10, v9.manifest);
const target: Target = { manifest: v10.manifest, core: v10.core, packs: v10.bodies };
const premium: PackName[] = [...PACK_ORDER];

function onV9(): DeviceState {
  const packs = new Map<PackName, HeldPack>();
  for (const e of v9.manifest.packs) packs.set(e.name, { version: e.version, checksum: e.checksum, corpus: v9.bodies.get(e.name)! });
  return { label: 'core v9 + packs v9', base: v9.core, baseKind: 'core', baseVersion: 9, packs };
}

// The fixtures are outline-thin, not schema-complete lessons, so the test judges
// references only; the publish check runs the full validator.
const validate = (c: Corpus) => validateCorpus(c).filter((i) => /unknown/i.test(i.message));
const describe = (i: unknown) => (i as { message: string }).message;

test('replay: both packs changed, the app rule lands them in one launch', () => {
  deepStrictEqual(v10.manifest.packs.filter((p) => p.version === 10).map((p) => p.name).sort(), ['a2', 'b1']);
  const r = replayUpgrade({ device: onV9(), target, entitled: premium, validate, describe });
  strictEqual(r.converged, true);
  strictEqual(r.launches, 1);
  deepStrictEqual(r.rejections, []);
});

test('replay: the core adopted first (late entitlement) still converges under trialPacks', () => {
  const r = replayUpgrade({ device: onV9(), target, entitled: premium, validate, describe, coreFirst: true });
  strictEqual(r.converged, true);
  strictEqual(r.launches, 2);
  deepStrictEqual(r.rejections, []);
});

test('replay: the pre-3721ca4 trial rule deadlocks, and the replay says so (the v82 bug)', () => {
  // The old rule judged a candidate with every pack in memory, stale ones included.
  const naive = (loaded: ReadonlyMap<PackName, Corpus>, c: { name: PackName; corpus: Corpus }) => new Map(loaded).set(c.name, c.corpus);
  const r = replayUpgrade({ device: onV9(), target, entitled: premium, validate, describe, coreFirst: true, trial: naive });
  strictEqual(r.converged, false, 'a2 fails against the stale b1, b1 against the stale a2, on every launch');
  deepStrictEqual([...new Set(r.rejections.map((x) => x.pack))].sort(), ['a2', 'b1']);
  ok(r.rejections.some((x) => x.sample.some((m) => /b1\.02\.l1/.test(m))), 'the reason names the lesson the stale pack lacks');
});

test('replay: a legacy full snapshot waits for its packs, then takes the core', () => {
  const full = onV9();
  const legacy: DeviceState = { ...full, label: 'full v9 + packs v9', base: corpus(9), baseKind: 'full' };
  const r = replayUpgrade({ device: legacy, target, entitled: premium, validate, describe });
  strictEqual(r.converged, true);
  deepStrictEqual(r.rejections, []);
});

test('replay: a free device only takes the core', () => {
  const free: DeviceState = { ...onV9(), label: 'free on v9', packs: new Map() };
  const r = replayUpgrade({ device: free, target, entitled: [], validate, describe });
  strictEqual(r.converged, true);
  strictEqual(r.launches, 1);
});

test('packVersionsAt: the newest stored version at or below the one the device was on', () => {
  const stored = new Map<PackName, number[]>([['a2', [79, 81]], ['b2', [79, 82]], ['c1', [79]], ['b1', [83]]]);
  deepStrictEqual(Object.fromEntries(packVersionsAt(81, stored)), { a2: 81, b2: 79, c1: 79 });
  deepStrictEqual(Object.fromEntries(packVersionsAt(82, stored)), { a2: 81, b2: 82, c1: 79 });
});
