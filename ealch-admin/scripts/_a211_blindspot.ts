/* a2.11: for EVERY authored respelling, which of its nasals can hasPlainNasalFor
 * see? Anything it cannot see has to be asserted BY NAME, and this is the
 * evidence for that list rather than a guess about it.
 *
 *     pnpm tsx scripts/_a211_blindspot.ts
 */
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

/** fr, the authored respelling. Each ⁿ is broken back to a plain n one at a time
 *  and the checker is asked whether it noticed. */
const ROWS: [string, string][] = [
  ['Je vends ici.', 'zhuh vahⁿ ee-SEE'],
  ['Tu vends ici.', 'tü vahⁿ ee-SEE'],
  ['Il vend ici.', 'eel vahⁿ ee-SEE'],
  ['Nous vendons ici.', 'noo vahⁿ-dohⁿ ee-SEE'],
  ['Vous vendez ici.', 'voo vahⁿ-day ee-SEE'],
  ['Ils vendent ici.', 'eel vahⁿd ee-SEE'],
  ['Il parle ici.', 'eel parl ee-SEE'],
  ['Il finit ici.', 'eel fee-nee ee-SEE'],
  ['Je réponds vite.', 'zhuh ray-pohⁿ VEET'],
  ['Tu réponds vite.', 'tü ray-pohⁿ VEET'],
  ['Il répond vite.', 'eel ray-pohⁿ VEET'],
  ['Elle attend le bus.', 'e la-tahⁿ luh BÜS'],
  ['Ils attendent le bus.', 'eel za-tahⁿd luh BÜS'],
  ['Il entend le train.', 'ee lahⁿ-tahⁿ luh TRAⁿ'],
  ['Ils entendent le train.', 'eel zahⁿ-tahⁿd luh TRAⁿ'],
  ['Elle rend le livre.', 'el rahⁿ luh LEEVR'],
  ['Elles rendent le livre.', 'el rahⁿd luh LEEVR'],
  ['Je perds mes clés.', 'zhuh pehr may KLAY'],
  ['Nous perdons du temps.', 'noo pehr-dohⁿ dü TAHⁿ'],
  ['Il descend ici.', 'eel day-sahⁿ ee-SEE'],
  ['Ils descendent ici.', 'eel day-sahⁿd ee-SEE'],
  ['Vous répondez vite.', 'voo ray-pohⁿ-day VEET'],
  ['On vend des billets ici.', 'ohⁿ vahⁿ day bee-YEH ee-SEE'],
  ['Nous vendons des billets.', 'noo vahⁿ-dohⁿ day bee-YEH'],
  // The seven headwords, as this build will write them.
  ['vendre', 'VAHⁿDR'],
  ['attendre', 'ah-TAHⁿDR'],
  ['répondre', 'ray-POHⁿDR'],
  ['entendre', 'ahⁿ-TAHⁿDR'],
  ['perdre', 'PEHRDR'],
  ['rendre', 'RAHⁿDR'],
  ['descendre', 'day-SAHⁿDR'],
];

let invisible = 0;
let visible = 0;
for (const [fr, good] of ROWS) {
  if (hasPlainNasalFor(fr, good)) { console.log(`!! ${fr}: THE AUTHORED VALUE IS ALREADY FLAGGED: ${good}`); continue; }
  const positions: number[] = [];
  for (let i = 0; i < good.length; i++) if (good[i] === 'ⁿ') positions.push(i);
  if (!positions.length) { console.log(`   ${fr.padEnd(26)} ${good.padEnd(28)} no nasal`); continue; }
  const report = positions.map((p) => {
    const broken = `${good.slice(0, p)}n${good.slice(p + 1)}`;
    const seen = hasPlainNasalFor(fr, broken);
    if (seen) visible++; else invisible++;
    return `${broken.slice(Math.max(0, p - 6), p + 2)}${seen ? ' SEEN' : ' BLIND'}`;
  });
  console.log(`   ${fr.padEnd(26)} ${good.padEnd(28)} ${report.join('  |  ')}`);
}
console.log(`\n  ${visible} nasal(s) the shared checker can see, ${invisible} it cannot.`);
console.log('  Every BLIND one must be asserted BY NAME, or a plain n could be put back and nothing would fail.');
