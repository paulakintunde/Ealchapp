// THE BATCH HALF OF THE UNIT-LABEL MIGRATION.
//
// Nine A2 batches carry a local `namesUnit` that matches the RAW ID with the
// house word boundary, and the rest spell the same check inline as
// `hasWord(text, SOME_UNIT)`. Both look for a string the learner surface no
// longer contains, so after the migration they can only fail.
//
// Redefining the helper is better than rewriting its twelve call sites: the
// call sites already say what they mean, and the only thing that changed is
// what « named » looks like on the page.
//
//   node scripts/_a2_label_batchfix.mjs scripts/author-x-batch.ts [--write]

import { readFileSync, writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const files = args.filter((a) => !a.startsWith('--'));

const HELPER = /const namesUnit = \([^)]*\)[^;]*?;\n(?:\s*new RegExp[^;]*;\n)?/;
const BODY = `const namesUnit = (hay: string, unit: string): boolean => namesUnitLabel(hay, unit);\n`;
// NO BARE IDENTIFIERS. `for (const u of UNSEEN_INFINITIVES)` loops over French
// verbs, and keying on the loop variable's NAME turned `hasPhrase(cold, u)`
// into a unit check that could only fail. Only a *_UNIT constant or a literal
// id is safe to convert here; a loop over units is covered anyway by the local
// `namesUnit` helper being redefined above.
const UNITISH = /^(?:[A-Z][A-Z0-9_]*_UNIT|['"](?:a1|a2|b1|b2|c1|sons)\.\d{2}['"])$/;
const HASWORD = /\b(?:hasWord|hasPhrase|bounded)\(([^()]*?),\s*([^(),]+?)\)/g;
const BOUNDED_TEST = /\bbounded\(\s*([A-Z][A-Z0-9_]*_UNIT|['"](?:a1|a2|b1|b2|c1|sons)\.\d{2}['"])\s*\)\.test\(([^()]+?)\)/g;

let grand = 0;
for (const f of files) {
  let s = readFileSync(f, 'utf8');
  let n = 0;

  // 1. The local helper, if the file has one.
  const m = s.match(/const namesUnit = \([\s\S]*?\.test\(hay\);\n/);
  if (m) {
    s = s.replace(m[0],
      '/** A LEARNER SURFACE NAMES A LESSON BY ITS LABEL, NOT BY ITS ID.\n' +
      ' *\n' +
      ' *  Resolved through the shipped `unit.seq`, never by slicing the id: 31 of 35\n' +
      ' *  A2 units disagree with their own id number, and a2.24 shipped « since seq\n' +
      ' *  17 of A1 » about a unit that is seq 20, which is somebody reading the id as\n' +
      ' *  the position.\n' +
      ' *\n' +
      ' *  Case-insensitive, and it does NOT also accept the raw id: a guard taking\n' +
      ' *  either would pass on exactly the thing this change removed. */\n' + BODY);
    n++;
  }

  // 2. bounded(X_UNIT).test(text)  ->  namesUnitLabel(text, X_UNIT)
  s = s.replace(BOUNDED_TEST, (mm, unit, hay) => { n++; return `namesUnitLabel(${hay}, ${unit})`; });

  // 3. hasWord(text, X_UNIT)  ->  namesUnitLabel(text, X_UNIT)
  s = s.replace(HASWORD, (mm, hay, needle) => {
    if (!UNITISH.test(needle.trim())) return mm;
    n++;
    return `namesUnitLabel(${hay}, ${needle.trim()})`;
  });

  if (n) {
    if (!/_unit-ref\.ts'/.test(s)) {
      const imports = [...s.matchAll(/^import .*?;$/gm)];
      const at = imports.length ? imports[imports.length - 1].index + imports[imports.length - 1][0].length : 0;
      s = s.slice(0, at) + "\nimport { namesUnitLabel } from './data/_unit-ref.ts';" + s.slice(at);
    }
    s = s.replace(/ by unit id\b/g, ' by its lesson label').replace(/ BY UNIT ID\b/g, ' BY ITS LESSON LABEL');
    if (WRITE) writeFileSync(f, s, 'utf8');
    console.log(`${WRITE ? 'wrote' : 'would change'} ${String(n).padStart(3)}  ${f}`);
  }
  grand += n;
}
console.log(`\n${grand} guard${grand === 1 ? '' : 's'}${WRITE ? '' : '  (dry run; pass --write)'}`);
