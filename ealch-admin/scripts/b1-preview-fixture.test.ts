// `dev-preview-b1.json` is the only way the B1 drafts reach a phone. A dev
// build merges it ON TOP of the seed (services/content.ts, `__DEV__ ?
// mergeCorpus(...)`), and in `mergeCorpus` the overlay wins for any id present
// in both. The seed carries no b1 units at all, so this fixture IS the B1 band.
//
// Its predecessor, the b1.01-only fixture, drifted through three source commits
// without anyone noticing:
//
//   251ff95  moved 200 authored ids off published rows
//   bef9a0b  spread the answer slots
//   8dbc275  gave the four reference sheets their 22 sheetId links
//
// So the fixture on a phone had 0 sheetIds, leaving all four sheets
// unreachable, and still carried the OLD low ids, 4 of which collided with
// published seed rows. On a dev build a `recits-au-passe` drill showed
// "je parlais" where the published sentence "La lettre qu'elle a ecrite hier
// n'est jamais arrivee." belongs. Release builds were never affected.
//
// Reading the lesson source cannot catch any of this, which is why every
// source-side guard passed through all three. These tests read the FIXTURE.
//
// If one fails, the fix is almost always: pnpm tsx scripts/data/b1/_preview-b1.ts
import { ok, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { buildPreview, serialise, PREVIEW_PATH } from './data/b1/_preview-b1.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const SEED = resolve(HERE, '../../ealch-v2/src/content/seed.json');
// Waves 1-9 authored 34; an imported lesson (in the seed) leaves the fixture.
const SEEDED_B1 = (JSON.parse(readFileSync(SEED, 'utf8')).lessons ?? []).filter((l: any) => /^b1\./.test(l.id)).length;
const EXPECTED_LESSONS = 34 - SEEDED_B1;

const onDisk = () => readFileSync(fileURLToPath(PREVIEW_PATH), 'utf8');

test('the fixture is what _preview-b1.ts would build today', async () => {
  const expected = serialise(await buildPreview());
  const actual = onDisk();
  if (expected === actual) return ok(true);
  // Say WHAT drifted, not merely that something did.
  const e = JSON.parse(expected);
  const a = JSON.parse(actual);
  const sheetIds = (c: any) => (c.lessons ?? []).reduce((n: number, l: any) => n + (l.sections ?? []).filter((s: any) => s.sheetId).length, 0);
  const acts = (c: any) => (c.lessons ?? []).reduce((n: number, l: any) => n + (l.acts?.length ?? 0), 0);
  const notes = [
    `lessons ${a.lessons?.length} on disk vs ${e.lessons?.length} expected`,
    `units ${a.units?.length} vs ${e.units?.length}`,
    `acts ${acts(a)} vs ${acts(e)}`,
    `sheetId links ${sheetIds(a)} vs ${sheetIds(e)}`,
    `items ${a.items?.length} vs ${e.items?.length}`,
  ];
  ok(false, `the fixture is stale, so the phone is not showing the current drafts:\n  ${notes.join('\n  ')}\n  Rebuild it: pnpm tsx scripts/data/b1/_preview-b1.ts`);
});

test('the fixture carries every draft lesson', () => {
  const fx = JSON.parse(onDisk());
  deepStrictEqual(fx.lessons.length, EXPECTED_LESSONS, `expected ${EXPECTED_LESSONS} draft lessons in the fixture`);
  deepStrictEqual(fx.units.length, EXPECTED_LESSONS, 'one unit per draft lesson');
  const seqs = fx.units.map((u: any) => u.seq);
  deepStrictEqual(new Set(seqs).size, seqs.length, 'two units share a seq, so the trail order is undefined');
  deepStrictEqual([...seqs], [...seqs].sort((x: number, y: number) => x - y), 'units must be written in trail order');
  for (const u of fx.units) {
    deepStrictEqual(u.level, 'b1', `${u.id} must carry level b1 or the trail will not show it`);
    ok((u.lessonIds ?? []).length > 0, `${u.id} has no lessonIds, so its heading opens nothing`);
  }
});

test('no fixture item id collides with a published seed id', () => {
  const fx = JSON.parse(onDisk());
  const seed = JSON.parse(readFileSync(SEED, 'utf8'));
  const seedIds = new Set<string>((seed.items ?? []).map((i: any) => i.id));
  const clash = (fx.items ?? []).map((i: any) => i.id).filter((id: string) => seedIds.has(id));
  ok(
    clash.length === 0,
    `a dev build overlays this fixture on the seed, so these published items would be replaced ` +
    `by draft ones (${clash.length}): ${clash.slice(0, 8).join(', ')}`,
  );
});

test('no fixture unit or lesson id collides with a published one', () => {
  const fx = JSON.parse(onDisk());
  const seed = JSON.parse(readFileSync(SEED, 'utf8'));
  const su = new Set<string>((seed.units ?? []).map((u: any) => u.id));
  const sl = new Set<string>((seed.lessons ?? []).map((l: any) => l.id));
  const uClash = fx.units.map((u: any) => u.id).filter((id: string) => su.has(id));
  const lClash = fx.lessons.map((l: any) => l.id).filter((id: string) => sl.has(id));
  ok(uClash.length === 0, `draft units would replace published ones: ${uClash.join(', ')}`);
  ok(lClash.length === 0, `draft lessons would replace published ones: ${lClash.join(', ')}`);
});

test('every reference sheet in every draft is reachable from a mission', () => {
  const fx = JSON.parse(onDisk());
  const broken: string[] = [];
  for (const L of fx.lessons) {
    const sheets: string[] = (L.sheets ?? []).map((s: any) => s.id);
    const linked = new Set((L.sections ?? []).map((s: any) => s.sheetId).filter(Boolean));
    const unreachable = sheets.filter((s) => !linked.has(s));
    if (unreachable.length) broken.push(`${L.id}: ${unreachable.join(', ')}`);
  }
  ok(broken.length === 0, `unreachable on a phone:\n  ${broken.join('\n  ')}`);
});

test('every draft act carries an opener the trail and act screen can draw', () => {
  const fx = JSON.parse(onDisk());
  const bad: string[] = [];
  for (const L of fx.lessons) {
    (L.acts ?? []).forEach((a: any, i: number) => {
      if (!a.title) bad.push(`${L.id} act ${i}: no title, the trail row reads blank`);
      if (!a.opener?.line && !a.milestone) bad.push(`${L.id} act ${i}: no opener line and no milestone, so act.tsx has nothing to show`);
    });
  }
  ok(bad.length === 0, bad.slice(0, 8).join('\n  '));
});
