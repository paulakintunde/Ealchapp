// Premium content packs, the pure half: entitlement to packs, fetch order,
// retention clock, pack verification and partial-corpus validation.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { createHash } from 'node:crypto';
import {
  PACK_ORDER,
  PACK_RETENTION_MS,
  applyRetention,
  composeCorpus,
  entitledPacks,
  heldBands,
  isPacksManifest,
  missingLessonState,
  packsComplete,
  packsToFetch,
  packsToMerge,
  parseRegistry,
  partialValidationView,
  shouldAdoptCore,
  verifyPack,
  type PackName,
  type PacksManifest,
  type PackRegistry,
} from './packs.logic.ts';
import { stableStringify } from './content.logic.ts';
import { validateCorpus, type Corpus } from '../content/schema.ts';

const DAY = 86_400_000;
const sha = (s: string) => createHash('sha256').update(s, 'utf8').digest('hex');

const manifest = (packs: [PackName, string][]): PacksManifest => ({
  schema: 2,
  version: 80,
  core: { version: 80, path: 'core/v80.json', checksum: 'c', bytes: 10 },
  packs: packs.map(([name, checksum]) => ({ name, version: 80, path: `${name}/v80.json`, checksum, bytes: 5 })),
});

const cached = (checksum: string, extra: Partial<{ lockedSince: number }> = {}) => ({
  version: 80, checksum, bytes: 5, cachedAt: 1, ...extra,
});

/* ─── entitlement to packs ─── */

test('entitledPacks: Premiere holds every band pack in fetch order, a2 first; the exam level holds only exam', () => {
  deepStrictEqual(entitledPacks({ levelsAll: true, examiner: false }), ['a2', 'b1', 'b2', 'c1', 'c2']);
  deepStrictEqual(entitledPacks({ levelsAll: false, examiner: true }), ['exam']);
  deepStrictEqual(entitledPacks({ levelsAll: true, examiner: true }), [...PACK_ORDER]);
  deepStrictEqual(entitledPacks({ levelsAll: false, examiner: false }), [], 'a free user or a guest is entitled to nothing');
});

/* ─── manifest ─── */

test('isPacksManifest accepts the published shape and rejects junk, unknown packs and duplicates', () => {
  ok(isPacksManifest(manifest([['a2', 'x'], ['exam', 'y']])));
  ok(!isPacksManifest({ ...manifest([]), schema: 1 }));
  ok(!isPacksManifest(manifest([['a2', 'x'], ['a2', 'y']])), 'a duplicated pack is ambiguous');
  ok(!isPacksManifest({ ...manifest([]), packs: [{ name: 'a1', version: 1, path: 'p', checksum: 'c', bytes: 1 }] }), 'a1 is free, never a pack');
  ok(!isPacksManifest({ ...manifest([]), rollout: '100' }));
  ok(!isPacksManifest(null));
});

/* ─── what to fetch ─── */

test('packsToFetch: only entitled packs, missing or at a different checksum, in PACK_ORDER', () => {
  const m = manifest([['exam', 'e1'], ['b1', 'b1-new'], ['a2', 'a2-same'], ['b2', 'b2']]);
  const registry: PackRegistry = { a2: cached('a2-same'), b1: cached('b1-old') };
  const fetch = packsToFetch(m, registry, ['a2', 'b1', 'b2', 'c1', 'c2']);
  deepStrictEqual(fetch.map((p) => p.name), ['b1', 'b2'], 'an unchanged a2 is never re-fetched; exam is not entitled');
  ok(!packsComplete(m, registry, ['a2', 'b1']));
  ok(packsComplete(m, registry, ['a2']));
  deepStrictEqual(packsToFetch(m, {}, []), [], 'nothing for a free user');
});

test('packsToFetch never asks for a pack the manifest does not list (c1 not published yet)', () => {
  deepStrictEqual(packsToFetch(manifest([['a2', 'x']]), {}, ['a2', 'c1']).map((p) => p.name), ['a2']);
});

test('packsToMerge: a cached pack the user no longer holds is not merged', () => {
  deepStrictEqual(packsToMerge(['b1', 'a2', 'exam'], ['a2', 'b1']), ['a2', 'b1']);
  deepStrictEqual(packsToMerge(['b1', 'a2'], []), []);
});

/* ─── retention: decision 1 ─── */

test('applyRetention: a lapsed pack is stamped, kept 30 days, then expired; progress is not an input', () => {
  const t0 = Date.UTC(2026, 9, 1);
  const r0: PackRegistry = { a2: cached('a') };
  const first = applyRetention(r0, [], t0);
  strictEqual(first.registry.a2?.lockedSince, t0, 'first sight without the entitlement starts the clock');
  deepStrictEqual(first.expired, []);
  ok(first.changed);

  const day29 = applyRetention(first.registry, [], t0 + 29 * DAY);
  ok(day29.registry.a2, 'still kept on day 29');
  deepStrictEqual(day29.expired, []);

  const day30 = applyRetention(first.registry, [], t0 + PACK_RETENTION_MS);
  strictEqual(day30.registry.a2, undefined);
  deepStrictEqual(day30.expired, ['a2'], 'the caller unlinks the file');
});

test('applyRetention: resubscribing inside the window clears the clock, and nothing is re-downloaded', () => {
  const t0 = Date.UTC(2026, 9, 1);
  const locked: PackRegistry = { a2: cached('a', { lockedSince: t0 }) };
  const back = applyRetention(locked, ['a2'], t0 + 10 * DAY);
  strictEqual(back.registry.a2?.lockedSince, undefined);
  strictEqual(back.registry.a2?.checksum, 'a');
  deepStrictEqual(packsToFetch(manifest([['a2', 'a']]), back.registry, ['a2']), []);
});

test('applyRetention: a clock wound back before lockedSince never deletes', () => {
  const t0 = Date.UTC(2026, 9, 1);
  const locked: PackRegistry = { b1: cached('b', { lockedSince: t0 }) };
  const r = applyRetention(locked, [], t0 - 400 * DAY);
  ok(r.registry.b1);
  deepStrictEqual(r.expired, []);
  strictEqual(r.changed, false);
});

test('parseRegistry drops malformed entries and unknown names', () => {
  const r = parseRegistry({ a2: cached('x'), a1: cached('y'), b1: { version: 'x' }, exam: { ...cached('z'), lockedSince: 5 } });
  deepStrictEqual(Object.keys(r).sort(), ['a2', 'exam']);
  strictEqual(r.exam?.lockedSince, 5);
  deepStrictEqual(parseRegistry('junk'), {});
});

/* ─── verifying one pack ─── */

test('verifyPack: checksum, name and version must all match the manifest', () => {
  const body = { version: 80, pack: 'a2', units: [], lessons: [], items: [] };
  const text = JSON.stringify(body);
  const checksum = sha(stableStringify(body));
  ok(verifyPack(text, { name: 'a2', version: 80, checksum }).ok);
  deepStrictEqual(verifyPack(text, { name: 'a2', version: 80, checksum: 'bad' }), { ok: false, reason: 'checksum' });
  deepStrictEqual(verifyPack(text, { name: 'b1', version: 80, checksum }), { ok: false, reason: 'name' });
  deepStrictEqual(verifyPack(text, { name: 'a2', version: 81, checksum }), { ok: false, reason: 'version' });
  deepStrictEqual(verifyPack('{', { name: 'a2', version: 80, checksum }), { ok: false, reason: 'parse' });
});

/* ─── partial corpus validation ─── */

const item = (id: string, level: string) => ({ id, kind: 'word', level, theme: id.split('.')[2], fr: 'x', en: 'x', tags: [], drills: ['flashcard'], audioRef: null, version: 1 });

function skeletonCorpus(): Corpus {
  return {
    version: 1,
    units: [
      { id: 'a1.01', track: 'a1', seq: 1, title: 'A', sub: 'a', lessonIds: [] },
      { id: 'b1.01', seq: 1, title: 'B', sub: 'b', lessonIds: ['b1.01.l1'] },
    ],
    lessons: [],
    items: [item('fr.a1.cafe.001', 'a1')],
    examTasks: [],
  } as unknown as Corpus;
}

test('partialValidationView: a skeleton unit of an unheld band validates; the raw corpus does not', () => {
  const c = skeletonCorpus();
  ok(validateCorpus(c).some((i) => /unknown lesson "b1.01.l1"/.test(i.message)), 'the raw skeleton dangles');
  const issues = validateCorpus(partialValidationView(c, { bands: heldBands([]), exam: false }));
  deepStrictEqual(issues, []);
  strictEqual(c.units[1].lessonIds.length, 1, 'the live corpus is never modified');
});

test('partialValidationView: a dangling reference INSIDE a held band still fails', () => {
  const c = skeletonCorpus();
  const issues = validateCorpus(partialValidationView(c, { bands: heldBands(['b1']), exam: false }));
  ok(issues.some((i) => /unknown lesson "b1.01.l1"/.test(i.message)), 'b1 is held, so its missing lesson is a real defect');
});

test('partialValidationView: exam targets into an unheld band are dropped, targets into a held band are not', () => {
  const c = skeletonCorpus();
  (c as { examTasks: unknown[] }).examTasks = [
    { id: 'exam.t1', targetItemIds: ['fr.b2.x.001', 'fr.a1.missing.001', 'fr.a1.cafe.001'] },
  ];
  const view = partialValidationView(c, { bands: heldBands(['exam']), exam: true });
  deepStrictEqual(view.examTasks?.[0].targetItemIds, ['fr.a1.missing.001', 'fr.a1.cafe.001']);
});

test('heldBands never counts the exam pack as a band', () => {
  deepStrictEqual([...heldBands(['exam', 'a2'])].sort(), ['a1', 'a2', 'sons']);
});

/* ─── composition ─── */

test('composeCorpus: the pack unit replaces the skeleton, everything else unions', () => {
  const core = skeletonCorpus();
  const pack = { version: 1, units: [{ id: 'b1.01', seq: 1, title: 'B full', sub: 'b', lessonIds: ['b1.01.l1'] }], lessons: [], items: [item('fr.b1.x.001', 'b1')] } as unknown as Corpus;
  const out = composeCorpus(core, new Map([['b1', pack]]), ['b1']);
  strictEqual(out.units.find((u) => u.id === 'b1.01')?.title, 'B full');
  strictEqual(out.items.length, 2);
  strictEqual(composeCorpus(core, new Map([['b1', pack]]), []), core, 'an unmerged pack changes nothing');
});

/* ─── core adoption ─── */

test('shouldAdoptCore: the changeover from a legacy full snapshot waits for a subscriber\'s packs', () => {
  const core = { version: 80, path: 'core/v80.json', checksum: 'c', bytes: 1 };
  const base = { core, rollout: 100, bucket: 5 };
  ok(shouldAdoptCore({ ...base, cached: null, packsPending: false }));
  ok(shouldAdoptCore({ ...base, cached: { version: 80, kind: 'full' }, packsPending: false }), 'same version, but full to core takes paid content off the device');
  ok(!shouldAdoptCore({ ...base, cached: { version: 80, kind: 'full' }, packsPending: true }), 'a subscriber keeps the full snapshot until packs land');
  ok(!shouldAdoptCore({ ...base, cached: { version: 80, kind: 'core' }, packsPending: false }), 'core to core only on a newer version');
  ok(shouldAdoptCore({ ...base, cached: { version: 79, kind: 'core' }, packsPending: true }));
  ok(!shouldAdoptCore({ ...base, rollout: 0, cached: null, packsPending: false }), 'rollout 0 is the kill switch');
});

/* ─── the lesson screen's missing-lesson answer ─── */

test('missingLessonState: an absent paid lesson is the paywall for a free user and a download wait for a subscriber', () => {
  strictEqual(missingLessonState('a2.03.l1', false), 'locked');
  strictEqual(missingLessonState('b1.10.l1', true), 'pending');
  strictEqual(missingLessonState('sons.01.l1', false), 'fallback');
  strictEqual(missingLessonState('', false), 'fallback');
});
