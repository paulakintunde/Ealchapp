// Does `ealch-admin/scripts/author-full-curriculum-spine.ts` still describe the
// curriculum that actually ships?
//
// ── WHY THIS FILE EXISTS ───────────────────────────────────────────────────
//
// On 2026-08-11 that script was measured against the database for the first time
// since it was written. Run dry it reported:
//
//     0 created · 0 resequenced · 74 retitled
//
// Seventy-four units out of seventy-five. Every A2, A1 and SONS unit's `title`
// and `sub` had been swapped in the database (English name in `title`, French
// name in `sub`) while the script still held the old convention, and eighteen
// `themes` and two `prereqUnitIds` had moved besides. Running the script would
// have reverted all of it and taken three shipped A2 lessons' tests red.
//
// It could drift that far for one reason: NOTHING COULD READ IT. `main()` ran at
// module scope, so importing the file opened a transaction against the canonical
// database, so no test ever imported it, so nothing ever compared it to reality.
// The script now exports CURRICULUM and only runs `main()` when executed
// directly, and this file is the thing that was missing.
//
// ── WHAT THIS GUARDS, AND WHAT IT DOES NOT ─────────────────────────────────
//
// It compares the script against `seed.json`, not against Postgres — a unit test
// gets no database. The seed is a published cut of that database and is the
// committed artefact the app ships, so it is the right thing for a committed
// script to agree with. The remaining gap is the window between an edit landing
// in Postgres and the next publish; `pnpm content:parity` is what covers that.
//
// If this goes red, DO NOT "fix" it by editing the expectation. Either the
// database moved and the script must follow (re-run the reconciliation), or the
// script is being edited to change the curriculum on purpose, in which case the
// change belongs in Postgres first and in the seed second.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';

import type { Unit } from './schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as { units: Unit[] };
const byId = new Map(seed.units.map((u) => [u.id, u] as const));

type SpineUnit = {
  id: string;
  seq: number;
  title: string;
  sub: string;
  canDo: string;
  gloss?: string;
  themes?: string[];
  prereqUnitIds?: string[];
};

/** The script is in a sibling package. If it cannot be imported the guard is
 *  worthless, so an import failure FAILS rather than skipping — the whole point
 *  of this file is that the module stayed unreadable for months. */
let CURRICULUM: { track: string; units: SpineUnit[] }[] | null = null;
let importError = '';
try {
  const mod = await import('../../../ealch-admin/scripts/author-full-curriculum-spine.ts');
  CURRICULUM = mod.CURRICULUM as typeof CURRICULUM;
} catch (e) {
  importError = (e as Error).message;
}

test('the spine script can be imported without touching a database', () => {
  ok(
    CURRICULUM,
    'could not import author-full-curriculum-spine.ts. If main() has gone back to running at module\n'
    + `scope, or an import lost its explicit .ts, this guard is dead and the script will drift again.\n${importError}`,
  );
});

const units = () => (CURRICULUM ?? []).flatMap((c) => c.units);
const noSpine = !CURRICULUM;

test('it declares exactly the units the seed ships', { skip: noSpine }, () => {
  const spineIds = units().map((u) => u.id).sort();
  // Compared against the SEED, which is what a learner actually holds. That
  // used to differ from Postgres: b2.01 sat in the database only, in_review,
  // outside the three tracks the spine declares. It was deleted on 2026-09-07
  // (ealch-admin/scripts/remove-b2-01-stub.ts) and the two sides now agree, so
  // this is no longer a narrower check than one against the database.
  const seedIds = seed.units.map((u) => u.id).sort();
  deepStrictEqual(spineIds, seedIds, 'the spine and the seed disagree about which units exist');
});

test('EVERY UNIT AGREES ON seq, title, sub AND canDo', { skip: noSpine }, () => {
  const drift: string[] = [];
  for (const s of units()) {
    const d = byId.get(s.id);
    if (!d) { drift.push(`${s.id}: not in the seed`); continue; }
    if (s.seq !== d.seq) drift.push(`${s.id} seq: spine ${s.seq} / seed ${d.seq}`);
    if (s.title !== d.title) drift.push(`${s.id} title:\n      spine ${JSON.stringify(s.title)}\n      seed  ${JSON.stringify(d.title)}`);
    if (s.sub !== d.sub) drift.push(`${s.id} sub:\n      spine ${JSON.stringify(s.sub)}\n      seed  ${JSON.stringify(d.sub)}`);
    if (s.canDo !== d.canDo) drift.push(`${s.id} canDo:\n      spine ${JSON.stringify(s.canDo)}\n      seed  ${JSON.stringify(d.canDo)}`);
  }
  strictEqual(
    drift.join('\n  '), '',
    `${drift.length} field(s) drifted. Running the spine script would overwrite the shipping curriculum with these.`,
  );
});

test('and on themes and prereqUnitIds', { skip: noSpine }, () => {
  const drift: string[] = [];
  for (const s of units()) {
    const d = byId.get(s.id);
    if (!d) continue;
    const a = JSON.stringify(s.themes ?? null);
    const b = JSON.stringify((d as { themes?: string[] }).themes ?? null);
    if (a !== b) drift.push(`${s.id} themes: spine ${a} / seed ${b}`);
    const p = JSON.stringify(s.prereqUnitIds ?? null);
    const q = JSON.stringify((d as { prereqUnitIds?: string[] }).prereqUnitIds ?? null);
    if (p !== q) drift.push(`${s.id} prereqUnitIds: spine ${p} / seed ${q}`);
  }
  strictEqual(drift.join('\n  '), '', `${drift.length} field(s) drifted`);
});

test('the title/sub convention is the shipped one, not the old swapped one', { skip: noSpine }, () => {
  // The specific failure that happened: `title` held the FRENCH name and `sub`
  // held an English gloss, while the database held English in `title` and French
  // in `sub`. Three A2 briefs were generated from the old convention and all
  // three told their author the wrong thing. Named as its own assertion so a
  // reversal reads as itself rather than as 148 anonymous string diffs.
  const swapped = units().filter((s) => {
    const d = byId.get(s.id);
    return d && s.title === d.sub && s.title !== d.title;
  });
  strictEqual(
    swapped.length, 0,
    `${swapped.length} unit(s) have title and sub swapped relative to the seed: ${swapped.slice(0, 5).map((u) => u.id).join(', ')}.\n`
    + '  This is the exact drift that made three A2 briefs wrong. See A2-10-BUILD-REPORT.md §1.',
  );
});

test('the preserved English glosses are still preserved', { skip: noSpine }, () => {
  // The reconciliation moved 74 hand-written gloss lines out of `sub` and into
  // `gloss`, which is declared, never written to the database and never
  // rendered. It exists so that reconciling did not silently delete authored
  // copy. If somebody deletes the field, that is a decision; if it evaporates by
  // attrition, that is the thing this project keeps doing.
  const withGloss = units().filter((u) => u.gloss);
  ok(withGloss.length >= 70, `only ${withGloss.length} units still carry their English gloss; 74 were preserved`);
  const same = withGloss.filter((u) => u.gloss === u.sub);
  strictEqual(same.length, 0, `${same.length} gloss(es) are just a copy of the sub, which means the field has stopped meaning anything`);
});

test('no unit title carries an em dash, which the house style bans', { skip: noSpine }, () => {
  const bad = units().filter((u) => u.title.includes('—')).map((u) => `${u.id}: ${u.title}`);
  strictEqual(bad.join(', '), '');
});
