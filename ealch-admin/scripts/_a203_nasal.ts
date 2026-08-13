/* a2.03: every superscript in the authored rows, broken back to a plain n one at
 * a time, asked of the real `hasPlainNasalFor`. Corrections §6 asks for the
 * measurement rather than the prediction, in both directions.
 *
 *     pnpm tsx scripts/_a203_nasal.ts
 */
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import {
  ACCORD_ADJECTIFS, FALSE_POSITIVE_CANDIDATES, FALSE_POSITIVES_FOUND, RESPELL_ADDITIONS,
  RESPELL_REPAIRS_INVISIBLE, RESPELL_REPAIRS_VISIBLE,
} from './data/accord-adjectifs-corpus.ts';

let seen = 0;
let missed = 0;
const missedRows: string[] = [];

console.log('\n## Every superscript, broken one at a time\n');
for (const r of ACCORD_ADJECTIFS) {
  const respell = r.respell ?? '';
  if (!respell.includes('ⁿ')) continue;
  // Break each superscript individually, leaving the others intact.
  const positions: number[] = [];
  for (let i = 0; i < respell.length; i += 1) if (respell[i] === 'ⁿ') positions.push(i);
  for (const p of positions) {
    const broken = respell.slice(0, p) + 'n' + respell.slice(p + 1);
    const token = broken.split(/[\s|]+/).find((t) => t.includes('n') && !respell.split(/[\s|]+/).includes(t)) ?? broken;
    const flagged = hasPlainNasalFor(r.fr, broken);
    if (flagged) seen += 1; else { missed += 1; missedRows.push(`${r.id}  ${token}  in  ${broken}`); }
    console.log(`  ${flagged ? 'SEEN ' : 'BLIND'}  ${r.id.padEnd(34)} ${broken.padEnd(26)} "${r.fr}"`);
  }
}
console.log(`\n  ${seen} seen, ${missed} MISSED, ${seen + missed} superscripts total`);
if (missedRows.length) {
  console.log('\n  the blind ones, which must be asserted BY NAME:');
  for (const m of missedRows) console.log(`    ${m}`);
}

console.log('\n## Whole-row check: is the row as authored ever flagged? (it must not be)\n');
for (const r of ACCORD_ADJECTIFS) {
  if (hasPlainNasalFor(r.fr, r.respell ?? '')) console.log(`  !! ${r.id} "${r.fr}" ${r.respell} IS FLAGGED AS AUTHORED`);
}
console.log('  (nothing above means every authored row is clean)');

console.log('\n## a2.14 §1: does any French string hold nn or mm? (the rescue that disables the check)\n');
const doubled = ACCORD_ADJECTIFS.filter((r) => /(?:nn|mm)/i.test(r.fr));
console.log(`  ${doubled.length} rows: ${doubled.map((r) => r.fr).join(' | ') || '(none)'}`);

console.log('\n## The false-positive path, asserted as an ABSENCE\n');
for (const c of FALSE_POSITIVE_CANDIDATES) {
  const flagged = hasPlainNasalFor(c.fr, c.respell);
  console.log(`  ${flagged ? 'FLAGGED (claim is wrong)' : 'not flagged (as claimed)'}  ${c.respell}  "${c.fr}"`);
}

console.log('\n## The repairs, through the real function\n');
for (const r of [...RESPELL_REPAIRS_VISIBLE, ...RESPELL_REPAIRS_INVISIBLE]) {
  const from = r.from.replace(/ⁿ/g, 'n');
  console.log(`  ${r.id.padEnd(36)} ${r.fr.padEnd(12)} ${from} -> ${r.to}`);
}

console.log('\n## dicteeMode over every authored sentence\n');
let letters = 0; let words = 0;
for (const r of ACCORD_ADJECTIFS) {
  if (r.kind !== 'sentence') continue;
  const m = dicteeMode(r.fr);
  if (m === 'letters') letters += 1; else words += 1;
  console.log(`  ${String(m).padEnd(8)} ${String(letterCount(r.fr)).padStart(2)}  ${r.fr}`);
}
console.log(`\n  ${letters} letters, ${words} words`);

console.log('\n## The respellings this build SUPPLIES\n');
for (const a of RESPELL_ADDITIONS) {
  console.log(`  ${a.id.padEnd(40)} "${a.fr}"  -> ${a.to}  flagged=${hasPlainNasalFor(a.fr, a.to)}`);
}
