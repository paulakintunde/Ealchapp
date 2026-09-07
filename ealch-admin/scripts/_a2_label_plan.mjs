// WHICH FILES BELONG TO A UNIT, so the migration can be run one lesson at a
// time rather than as a band-wide sweep.
//
// A band-wide sweep was tried first and rolled back: it turned the suite red in
// one step with no way to tell which lesson broke, and it wrote the seed
// directly, so source and seed drifted. One lesson at a time keeps each step
// small enough to verify and keeps the source as the thing that is edited.
//
// OWNERSHIP IS NOT CITATION. Nearly every A2 corpus mentions a dozen other
// units as prerequisites, so "the file that contains the string a2.13" matches
// twenty files. The owner is the file that DECLARES the unit: `export const
// UNIT = { id: 'a2.13' }` or `export const LESSON_ID = 'a2.13.l1'`.
//
//   node scripts/_a2_label_plan.mjs a2.13

import { readdirSync, readFileSync } from 'node:fs';

const unit = process.argv[2];
// BAND-AGNOSTIC. Written for A2 and generalised when A1 and sons turned out to
// carry the same defect; nothing in the resolution is A2-specific.
if (!/^(a1|a2|b1|b2|c1|sons)\.\d\d$/.test(unit ?? '')) {
  console.error('usage: _a2_label_plan.mjs <track>.NN');
  process.exit(1);
}

const rd = (p) => { try { return readFileSync(p, 'utf8'); } catch { return ''; } };
const esc = unit.replace('.', '\\.');
// THE `id:` KEY, NOT ANY ID IN THE BLOCK. `prereqUnitIds` lives inside the same
// UNIT literal, so a looser match made passe-compose-corpus claim to own a2.01
// because a2.01 is one of a2.05's prerequisites.
const OWNS = new RegExp(
  `export\\s+const\\s+UNIT\\s*(?::[^=]+)?=\\s*(?:\\{[^}]*?\\bid:\\s*)?['"\`]${esc}['"\`]`, 's');
const OWNS_LESSON = new RegExp(`export\\s+const\\s+LESSON_ID\\s*(?::[^=]+)?=\\s*['"\`]${esc}\\.l\\d`);
const LESSON_OF = new RegExp(`\\bid:\\s*['"\`]${esc}\\.l\\d`);

const data = readdirSync('scripts/data').filter((f) => f.endsWith('.ts'));
// The owning corpus names the stem every sibling file shares.
const owner = data.find((f) => OWNS.test(rd(`scripts/data/${f}`)))
  ?? data.find((f) => OWNS_LESSON.test(rd(`scripts/data/${f}`)))
  ?? data.find((f) => LESSON_OF.test(rd(`scripts/data/${f}`)));
if (!owner) { console.error(`no owning data file for ${unit}`); process.exit(2); }

const stem = owner.replace(/-(corpus|lesson|terms|quiz|drills|sheet)\.ts$/, '').replace(/\.ts$/, '');
// ONLY THE STEM'S OWN SUFFIXES. `startsWith(`${stem}-`)` let the stem
// `prepositions` (a1.21) swallow `prepositions-lieu-*` (a2.04) and
// `prepositions-temps-*` (a2.18), so a run for one lesson rewrote two others.
const PARTS = ['corpus', 'lesson', 'terms', 'imported', 'display', 'quiz', 'drills', 'sheet', 'wanted', 'rows.gen'];
const family = data.filter((f) => f === `${stem}.ts` || PARTS.some((x) => f === `${stem}-${x}.ts`));

const scripts = readdirSync('scripts');
const batch = scripts.find((f) => new RegExp(`^author-${stem}(-batch)?\\.ts$`).test(f))
  ?? scripts.find((f) => /^author-.*-batch\.ts$/.test(f) && new RegExp(`from '\\./data/${stem}-`).test(rd(`scripts/${f}`)));
const merge = scripts.find((f) => new RegExp(`^merge-${stem}-into-seed\\.ts$`).test(f))
  ?? scripts.find((f) => /^merge-.*-into-seed\.ts$/.test(f) && new RegExp(`from '\\./data/${stem}-`).test(rd(`scripts/${f}`)));

const tests = readdirSync('../ealch-v2/src/content')
  .filter((f) => f.startsWith(`${unit.replace('.', '-')}-`) && f.endsWith('.test.ts'));

const version = (() => {
  for (const f of family) {
    const m = rd(`scripts/data/${f}`).match(/^\s*version:\s*(\d+),/m);
    if (m) return Number(m[1]);
  }
  return null;
})();

console.log(JSON.stringify({ unit, stem, version, data: family, batch, merge, tests }, null, 2));
