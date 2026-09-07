/* Counts this build's nasals through the REAL hasPlainNasalFor, in both
 * directions, and prints the ones the checker cannot see.
 *     pnpm tsx scripts/_a220_nasal.ts
 */
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { PARTICIPES } from './data/participes-corpus.ts';

let seen = 0; let missed = 0;
for (const r of PARTICIPES) {
  if (hasPlainNasalFor(r.fr, r.respell!)) console.log(`FLAGGED  ${r.fr}  ${r.respell}`);
  const re = r.respell!;
  for (let i = 0; i < re.length; i += 1) {
    if (re[i] !== 'ⁿ') continue;
    const broken = `${re.slice(0, i)}n${re.slice(i + 1)}`;
    if (hasPlainNasalFor(r.fr, broken)) seen += 1;
    else { missed += 1; console.log(`MISSED   ${r.id}  ${r.fr}  ${broken}`); }
  }
}
console.log(`seen=${seen} missed=${missed}`);
