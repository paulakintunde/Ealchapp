// THE GUARD HALF OF THE UNIT-LABEL MIGRATION.
//
// Every A2 guard test asserts that a cited unit is NAMED on the surface that
// quotes it, and every one of them spells that as `hasWord(text, 'a2.06')`.
// After the migration the surface says « lesson 21 in A2 » and the id is gone,
// so the assertion can only fail. It has to compare against the LABEL.
//
// `namesUnitLabel` resolves through the shipped `unit.seq`, never by slicing
// the id: 31 of 35 A2 units disagree with their own id number. It deliberately
// does not also accept the raw id, because a guard taking either would pass on
// exactly the thing this change removed.
//
// Only the second argument decides. `hasWord(t, 'chez')` is a French word and
// is left alone; `hasWord(t, VOWEL_UNIT)` is a unit and is rewritten.
//
//   node scripts/_a2_label_testfix.mjs <test-file...> [--write] [--version=N]

import { readFileSync, writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const bump = args.find((a) => a.startsWith('--version='));
const files = args.filter((a) => !a.startsWith('--'));

// A unit-shaped second argument: a *_UNIT constant, a raw id, or the loop
// variables the band uses when it walks a list of neighbours.
const UNITISH = /^(?:(?:C\.)?[A-Z][A-Z0-9_]*_UNIT(?:\s+as\s+string)?|u|unit|owner|other|nb|neighbour|UNIT_ID|['"](?:a1|a2|b1|b2|c1|sons)\.\d{2}['"])$/;
const CALL = /\b(hasWord|namesUnit)\(([^()]*(?:\([^()]*\)[^()]*)*?),\s*([^(),]+?)\)/g;

// THE OTHER SHAPE THE BAND USES. Half the suites never had a `hasWord` helper
// and assert the citation as `textOf(s).includes(ZERO_ARTICLE_UNIT)`, which the
// migration turns into a check that can only fail.
const INCLUDES = /([A-Za-z_$][\w$.]*(?:\([^()]*\))?(?:\.[\w$]+(?:\([^()]*\))?)*)\.includes\(\s*([^()]+?)\s*\)/g;

let grand = 0;
for (const f of files) {
  const src = readFileSync(f, 'utf8');
  let n = 0;

  let out = src.split('\n').map((line) => {
    if (/^\s*(\/\/|\*|\/\*)/.test(line)) return line;
    let L = line.replace(CALL, (m, fn, hay, needle) => {
      if (!UNITISH.test(needle.trim())) return m;
      n++;
      return `namesUnitLabel(${hay}, ${needle.trim()})`;
    });
    // A THIRD SHAPE: /a2\.07/.test(text). The same check, spelled as a regex
    // over the raw id, which after the migration matches nothing.
    L = L.replace(
      /\/(a1|a2|b1|b2|c1|sons)\\\.(\d{2})\/\.test\(([^()]*(?:\([^()]*\)[^()]*)*?)\)/g,
      (m, track, nn, hay) => { n++; return `namesUnitLabel(${hay}, '${track}.${nn}')`; });

    return L.replace(INCLUDES, (m, hay, needle) => {
      const arg = needle.trim();
      if (!UNITISH.test(arg)) return m;
      n++;
      return `namesUnitLabel(${hay}, ${arg.replace(/\s+as\s+string$/, '')})`;
    });
  }).join('\n');

  if (n) {
    if (!/from '\.\/unit-label\.ts'/.test(out)) {
      const imports = [...out.matchAll(/^import .*?;$/gm)];
      const at = imports.length ? imports[imports.length - 1].index + imports[imports.length - 1][0].length : 0;
      out = out.slice(0, at) + "\nimport { namesUnitLabel } from './unit-label.ts';" + out.slice(at);
    }
    // A TEST NAME IS DOCUMENTATION. Leaving « by unit id » on a test that now
    // asserts the opposite is how a suite starts lying about itself.
    out = out.replace(/ by unit id\b/g, ' by its lesson label')
             .replace(/ BY UNIT ID\b/g, ' BY ITS LESSON LABEL')
             .replace(/named by id\b/g, 'named by its lesson label');
  }

  if (bump) {
    const to = Number(bump.split('=')[1]);
    const rx = new RegExp(`(strictEqual\\(\\s*L!?\\.version,\\s*)${to - 1}\\b`);
    if (rx.test(out)) { out = out.replace(rx, `$1${to}`); n++; }
  }

  if (n && WRITE) writeFileSync(f, out, 'utf8');
  if (n) console.log(`${WRITE ? 'wrote' : 'would change'} ${String(n).padStart(3)}  ${f}`);
  grand += n;
}
console.log(`\n${grand} assertion${grand === 1 ? '' : 's'}${WRITE ? '' : '  (dry run; pass --write)'}`);
