/* The `crème` false positive, isolated. Invariants §3's second blind spot: the
 * checker reads a real /m/ as a nasal. `jaune`, `automne` and `la semaine` are
 * the three already recorded; this is a fourth and it is on a row a2.03 imports.
 */
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const CASES: [string, string][] = [
  ['crème', 'KREHM'],
  ['crème', 'KREM'],
  ['crème', 'KREHMM'],
  ['crème', 'KREHm'],
  ['Les murs sont crème.', 'lay MÜR sohⁿ KREHM'],
  ['Les murs sont crème.', 'lay MÜR sohⁿ KREM'],
  ['Les murs sont crème.', 'lay MÜR sohⁿ KREHMM'],
  ['Les rideaux sont crème.', 'lay ree-DOH sohⁿ KREHM'],
  // The three already on record, for comparison.
  ['jaune', 'ZHOHN'],
  ['jaune', 'ZHON'],
  ['l\'automne', 'loh-TOHN'],
  ['la saison', 'seh-ZOHN'],
  // And the rows this lesson actually ships, as a control.
  ['Ses gants sont bleu marine.', 'say GAHⁿ sohⁿ bluh mah-REEN'],
  ['Mes rideaux sont kaki.', 'may ree-DOH sohⁿ kah-KEE'],
  ['Mes chaises sont bleu clair.', 'may SHEHZ sohⁿ BLUH KLEHR'],
];

for (const [fr, respell] of CASES) {
  console.log(`  ${hasPlainNasalFor(fr, respell) ? 'FLAGGED' : '   ok  '}  ${respell.padEnd(28)} "${fr}"`);
}
