// `layer: 'more'` is read by no renderer, and seven shipped sections were
// authored believing it put them off the main path.
//
// Measured 2026-08-16 (`A2-SITUATIONS/47-LAYER-IS-NOT-READ.md`) and re-measured
// here on every run. The finding is not that `more` is unused — it is that its
// ONLY effect is to relax the density caps on a section the learner still walks,
// which is close to the opposite of what "optional depth" suggests.
//
// This file does two things:
//   1. proves the claim, against the real source, so it cannot rot into folklore
//   2. pins the seven, so an eighth is a decision somebody made on purpose

import { test } from 'node:test';
import { ok, deepStrictEqual } from 'node:assert';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import seed from './seed.json' with { type: 'json' };

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(HERE, '..');
/** Expo Router puts the routes at the PROJECT ROOT, not under `src`. The first
 *  version of this file walked `src/app`, which does not exist, and the whole
 *  guard died on ENOENT instead of measuring anything. */
const ROOT = resolve(SRC, '..');

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) { if (e !== 'node_modules') walk(p, out); }
    else if (/\.(ts|tsx)$/.test(e) && !/\.test\.tsx?$/.test(e)) out.push(p);
  }
  return out;
}

test('NO renderer reads `layer`, so `more` cannot hide anything', () => {
  /* The claim, re-measured rather than quoted. If a component ever starts
   * reading it, this goes red and the doc on LAYERS in schema.ts is stale. */
  const files = walk(join(SRC, 'components')).concat(walk(join(ROOT, 'app')));
  ok(files.length > 20, `only ${files.length} render files found; the walk is wrong`);

  const readers: string[] = [];
  for (const f of files) {
    const body = readFileSync(f, 'utf8');
    // Any comparison against a layer value, or a read of `.layer` that is not
    // a type import.
    if (/===\s*['"](?:more|deep|core)['"]/.test(body) || /\blayer\s*===/.test(body) || /\.layer\b/.test(body)) {
      readers.push(f.slice(SRC.length + 1));
    }
  }
  deepStrictEqual(readers, [],
    `these render files now read \`layer\`: ${readers.join(', ')}.\n`
    + '      If that is deliberate, the LAYERS doc in schema.ts and 47-LAYER-IS-NOT-READ.md both need updating: '
    + 'they say no renderer reads it, and seven shipped sections rest on that being true.');
});

test('the seven `more` sections are the known seven, and an eighth is a decision', () => {
  /* Authored before the finding, and left alone on purpose: changing them
   * moves shipped content in five lessons owned by five builds, for a
   * rendering that is already correct. What is NOT fine is a new one added by
   * an author who still thinks `more` hides a section.
   *
   * If you are here because you added one: `more` does not put it off the main
   * path. It renders as an ordinary numbered mission and it silently opts out
   * of the density caps. Use `render: 'sheet'` with a `sheetId` if you want it
   * genuinely optional, or use `core` and respect the caps. */
  const KNOWN = [
    'a1.24.l1/s19-words',
    'a2.27.l1/s15-annonce',
    'a2.27.l1/s20-review',
    'a2.28.l1/s14-notmedical',
    'a2.28.l1/s17-quebec',
    'a2.29.l1/s14-quebec',
    'a2.31.l1/s06-quebec',
  ];

  type Sec = { id?: string; layer?: string };
  type Lsn = { id: string; sections?: Sec[] };
  const found = (seed.lessons as unknown as Lsn[])
    .flatMap((l) => (l.sections ?? []).filter((s) => s.layer === 'more').map((s) => `${l.id}/${s.id}`))
    .sort();

  deepStrictEqual(found, [...KNOWN].sort(),
    'the set of `layer: "more"` sections has changed.\n'
    + `      now:    ${found.join(', ')}\n`
    + `      known:  ${KNOWN.join(', ')}\n`
    + '      `more` does not hide a section: it renders as an ordinary numbered mission and only '
    + 'relaxes the density caps. Use render: "sheet" if you want one off the main path.');
});

test('no `deep` section ships outside a reference sheet, which is where density is relaxed', () => {
  type Sec = { id?: string; layer?: string; render?: string };
  type Lsn = { id: string; sections?: Sec[] };
  const stray = (seed.lessons as unknown as Lsn[])
    .flatMap((l) => (l.sections ?? [])
      .filter((s) => s.layer === 'deep' && s.render !== 'sheet')
      .map((s) => `${l.id}/${s.id}`));
  deepStrictEqual(stray, [],
    `\`deep\` outside a sheet: ${stray.join(', ')}. It exempts the section from every density cap `
    + 'while still rendering it in the flow, which is the largest version of the `more` problem.');
});
