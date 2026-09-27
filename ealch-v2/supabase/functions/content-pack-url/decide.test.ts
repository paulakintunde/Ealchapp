// content-pack-url's decision, on plain Node (decide.ts imports nothing),
// plus the structural checks on index.ts the house takes for Deno functions
// (see grade-exam/grade-exam-gate.test.ts).
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  NO_ACCESS,
  SIGNED_URL_TTL_S,
  accessFromAdaptyProfile,
  accessFromMirror,
  decide,
  requiredLevel,
  resolveAccess,
  type ManifestPack,
} from './decide.ts';

const NOW = Date.UTC(2026, 9, 1);
const future = new Date(NOW + 86_400_000).toISOString();
const past = new Date(NOW - 86_400_000).toISOString();
const packs: ManifestPack[] = [
  { name: 'a2', version: 80, path: 'a2/v80.json', checksum: 'x', bytes: 1 },
  { name: 'exam', version: 77, path: 'exam/v77.json', checksum: 'y', bytes: 1 },
];
const PREMIUM = { premium: true, exam: false };
const EXAM = { premium: false, exam: true };

test('the signed URL lives ten minutes', () => strictEqual(SIGNED_URL_TTL_S, 600));

test('every band needs Premiere, exam needs the exam level', () => {
  strictEqual(requiredLevel('a2'), 'premium');
  strictEqual(requiredLevel('c2'), 'premium');
  strictEqual(requiredLevel('exam'), 'exam');
});

test('a guest never receives a pack, whatever else is true', () => {
  deepStrictEqual(decide({ uid: null, pack: 'a2', access: PREMIUM, manifestPacks: packs }), { ok: false, status: 401, reason: 'auth_required' });
});

test('a free user is refused every pack', () => {
  for (const pack of ['a2', 'b1', 'exam']) {
    const d = decide({ uid: 'u', pack, access: NO_ACCESS, manifestPacks: packs });
    deepStrictEqual(d, { ok: false, status: 403, reason: 'not_entitled' });
  }
});

test('Premiere opens bands but not exams; the exam level opens exams but not bands', () => {
  ok(decide({ uid: 'u', pack: 'a2', access: PREMIUM, manifestPacks: packs }).ok);
  strictEqual(decide({ uid: 'u', pack: 'exam', access: PREMIUM, manifestPacks: packs }).ok, false);
  ok(decide({ uid: 'u', pack: 'exam', access: EXAM, manifestPacks: packs }).ok);
  strictEqual(decide({ uid: 'u', pack: 'a2', access: EXAM, manifestPacks: packs }).ok, false);
});

test('the path comes from the manifest, never the request, and an unlisted pack is a 404', () => {
  const d = decide({ uid: 'u', pack: 'a2', access: PREMIUM, manifestPacks: packs });
  ok(d.ok && d.path === 'a2/v80.json');
  deepStrictEqual(decide({ uid: 'u', pack: 'b1', access: PREMIUM, manifestPacks: packs }), { ok: false, status: 404, reason: 'pack_not_published' });
  deepStrictEqual(decide({ uid: 'u', pack: '../a2', access: PREMIUM, manifestPacks: packs }), { ok: false, status: 400, reason: 'bad_request' });
  const hostile = [{ ...packs[0], path: 'b1/v80.json' }];
  strictEqual(decide({ uid: 'u', pack: 'a2', access: PREMIUM, manifestPacks: hostile }).ok, false, 'a2 must never sign a b1 path');
});

/* ─── Adapty profile parsing ─── */

test('Adapty: an unexpired premium level is Premiere; an expired or refunded one is not', () => {
  const body = (levels: unknown[]) => ({ data: { profile_id: 'p', access_levels: levels } });
  deepStrictEqual(accessFromAdaptyProfile(body([{ access_level_id: 'premium', expires_at: future }]), NOW), PREMIUM);
  deepStrictEqual(accessFromAdaptyProfile(body([{ access_level_id: 'premium', expires_at: past }]), NOW), NO_ACCESS);
  deepStrictEqual(accessFromAdaptyProfile(body([{ access_level_id: 'premium', expires_at: future, is_refund: true }]), NOW), NO_ACCESS);
  deepStrictEqual(accessFromAdaptyProfile(body([{ access_level_id: 'premium', expires_at: past, is_in_grace_period: true }]), NOW), PREMIUM, 'grace period keeps access, as the store does');
  deepStrictEqual(accessFromAdaptyProfile(body([{ access_level_id: 'exam', expires_at: null }]), NOW), EXAM, 'lifetime has no expiry');
  deepStrictEqual(accessFromAdaptyProfile(body([]), NOW), NO_ACCESS);
});

test('Adapty: a body we cannot read is null (an outage), not "no access"', () => {
  strictEqual(accessFromAdaptyProfile('junk', NOW), null);
  strictEqual(accessFromAdaptyProfile({ data: { access_levels: 'x' } }, NOW), null);
  strictEqual(accessFromAdaptyProfile({ errors: [{ code: 'x' }] }, NOW), null);
});

/* ─── the mirror ─── */

test('mirror: levels.all within expiry is Premiere; examiner is the exam level; no row is nothing', () => {
  deepStrictEqual(accessFromMirror({ features: ['levels.all', 'coach.unlimited'], expiry: future }, NOW), PREMIUM);
  deepStrictEqual(accessFromMirror({ features: ['levels.all'], expiry: past }, NOW), NO_ACCESS);
  deepStrictEqual(accessFromMirror({ features: ['examiner'], expiry: past }, NOW), EXAM, 'the mirror expiry is Premiere\'s');
  deepStrictEqual(accessFromMirror(null, NOW), NO_ACCESS);
  deepStrictEqual(accessFromMirror({ features: 'levels.all' }, NOW), NO_ACCESS);
});

/* ─── authority and fallback ─── */

test('resolveAccess: Adapty decides alone when it answers; the mirror is not even read', async () => {
  let read = 0;
  const mirror = async () => { read++; return { features: ['levels.all'], expiry: future }; };
  const r = await resolveAccess({ kind: 'profile', body: { data: { profile_id: 'p', access_levels: [] } } }, mirror, NOW);
  deepStrictEqual(r, { access: NO_ACCESS, source: 'adapty' }, 'a refund Adapty knows about beats a stale mirror');
  strictEqual(read, 0);
});

test('resolveAccess: Adapty 404 is an answer (no purchase), not an outage', async () => {
  const r = await resolveAccess({ kind: 'not_found' }, async () => ({ features: ['levels.all'] }), NOW);
  deepStrictEqual(r, { access: NO_ACCESS, source: 'adapty' });
});

test('resolveAccess: Adapty down or unconfigured falls back to the mirror, and a failing mirror is no access', async () => {
  const good = async () => ({ features: ['levels.all'], expiry: future });
  deepStrictEqual(await resolveAccess({ kind: 'unavailable', why: 'http 502' }, good, NOW), { access: PREMIUM, source: 'mirror' });
  deepStrictEqual(await resolveAccess({ kind: 'unconfigured' }, good, NOW), { access: PREMIUM, source: 'mirror' });
  deepStrictEqual(await resolveAccess({ kind: 'profile', body: 'junk' }, good, NOW), { access: PREMIUM, source: 'mirror' });
  const broken = async () => { throw new Error('db down'); };
  deepStrictEqual(await resolveAccess({ kind: 'unavailable', why: 'x' }, broken, NOW), { access: NO_ACCESS, source: 'mirror' });
});

/* ─── index.ts, structurally ─── */

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(resolve(here, './index.ts'), 'utf8');

test('index.ts signs only the manifest path, in the private bucket, for ten minutes', () => {
  ok(src.includes('.from(PACK_BUCKET).createSignedUrl(d.path, SIGNED_URL_TTL_S)'));
  ok(!/getPublicUrl/.test(src), 'a pack never gets a public URL');
});

test('index.ts verifies the JWT itself and refuses before any outbound call', () => {
  ok(src.includes('caller.auth.getUser()'));
  const early = src.indexOf('if (!uid || !isPackName(pack))');
  const adapty = src.indexOf('await askAdapty(uid!)');
  ok(early !== -1 && adapty !== -1 && early < adapty);
});

test('index.ts asks Adapty with the secret key and the customer user id', () => {
  ok(src.includes('Api-Key ${secret}'));
  ok(src.includes('"adapty-customer-user-id": uid'));
});
