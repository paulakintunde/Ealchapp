// `dev-preview-b101.json` is the only way b1.01 reaches a phone. A dev build
// merges it ON TOP of the seed (services/content.ts, `__DEV__ ? mergeCorpus(...)`),
// and in `mergeCorpus` the overlay wins for any id present in both.
//
// It drifted through three b1.01 source commits without anyone noticing:
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
// Reading the lesson source cannot catch any of this, which is why the source
// side guards all passed. These tests read the FIXTURE.
//
// If one fails, the fix is almost always: pnpm tsx scripts/data/b1/_preview-b101.ts
import { ok, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { buildPreview, serialise, PREVIEW_PATH } from './data/b1/_preview-b101.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const SEED = resolve(HERE, '../../ealch-v2/src/content/seed.json');

const onDisk = () => readFileSync(fileURLToPath(PREVIEW_PATH), 'utf8');

test('the fixture is what _preview-b101.ts would build today', () => {
  const expected = serialise(buildPreview());
  const actual = onDisk();
  if (expected === actual) return ok(true);
  // Say WHAT drifted, not just that something did.
  const e = JSON.parse(expected), a = JSON.parse(actual);
  const eL = e.lessons[0], aL = a.lessons[0];
  const sheetIds = (L: any) => (L.sections ?? []).filter((s: any) => s.sheetId).length;
  const notes = [
    `sections ${aL.sections?.length} on disk vs ${eL.sections?.length} expected`,
    `sheetId links ${sheetIds(aL)} vs ${sheetIds(eL)}`,
    `items ${a.items?.length} vs ${e.items?.length}`,
    `version ${aL.version} vs ${eL.version}`,
  ];
  ok(false, `the fixture is stale, so the phone is not showing the current b1.01:\n  ${notes.join('\n  ')}\n  Rebuild it: pnpm tsx scripts/data/b1/_preview-b101.ts`);
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

test('every reference sheet in the fixture is reachable from a mission', () => {
  const fx = JSON.parse(onDisk());
  const L = fx.lessons[0];
  const sheets: string[] = (L.sheets ?? []).map((s: any) => s.id);
  ok(sheets.length > 0, 'the fixture lesson carries no sheets at all');
  const linked = new Set((L.sections ?? []).map((s: any) => s.sheetId).filter(Boolean));
  const unreachable = sheets.filter((s) => !linked.has(s));
  ok(unreachable.length === 0, `unreachable on a phone: ${unreachable.join(', ')}`);
});

test('the fixture lesson and unit still agree with the source', () => {
  const fx = JSON.parse(onDisk());
  const built = buildPreview();
  deepStrictEqual(fx.units[0].id, built.units[0].id);
  deepStrictEqual(fx.lessons[0].id, built.lessons[0].id);
  deepStrictEqual(fx.lessons[0].version, built.lessons[0].version);
});
