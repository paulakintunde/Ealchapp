import './env';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
const R: [string,string][] = [
 ['Je vais à Paris.','zhuh VEH ah pah-REE'],
 ["J'y vais.",'zhee VEH'],
 ['Je pense à mon examen.','zhuh PAHⁿSS ah mohⁿ nehg-zah-MEHⁿ'],
 ["J'y pense.",'zhee PAHⁿSS'],
 ['Je parle de mon travail.','zhuh PARL duh mohⁿ trah-VAHY'],
 ["J'en parle.",'zhahⁿ PARL'],
 ['Je bois du café.','zhuh BWAH dü ka-FAY'],
 ["J'en bois.",'zhahⁿ BWAH'],
 ['Tu as du sucre ?','tü AH dü SÜKR'],
 ["Oui, j'en ai.",'wee, zhahⁿ NAY'],
 ['Tu prends du sucre ?','tü PRAHⁿ dü SÜKR'],
 ["Oui, j'en prends.",'wee, zhahⁿ PRAHⁿ'],
 ['Tu as des enfants ?','tü AH day zahⁿ-FAHⁿ'],
 ["Oui, j'en ai trois.",'wee, zhahⁿ nay TRWAH'],
 ["J'en ai beaucoup.",'zhahⁿ nay boh-KOO'],
 ["J'en veux un peu.",'zhahⁿ VUH uhⁿ PUH'],
 ["J'en ai assez.",'zhahⁿ nay ah-SAY'],
 ['Tu vas au marché ?','tü VAH oh mar-SHAY'],
 ["Oui, j'y vais demain.",'wee, zhee VEH duh-MEHⁿ'],
 ['Je joue au tennis.','zhuh ZHOO oh tay-NEESS'],
 ["J'y joue le samedi.",'zhee ZHOO luh sam-DEE'],
 ['Nous y allons ensemble.','noo zee ah-LOHⁿ ahⁿ-SAHⁿBL'],
 ['Tu vas au bureau ?','tü VAH oh bü-ROH'],
 ["Oui, j'y vais.",'wee, zhee VEH'],
 ['Elle en parle.','ehl ahⁿ PARL'],
 ['Elle habite en France.','ehl ah-BEET ahⁿ FRAHⁿSS'],
 ['Il y a du pain.','eel ee ah dü PEHⁿ'],
 ['Il y en a.','eel ee ahⁿ NAH'],
 ['Il y en a trois.','eel ee ahⁿ nah TRWAH'],
 ["Je n'y vais pas.",'zhuh nee VEH PAH'],
 ["Je n'en veux pas.",'zhuh nahⁿ VUH PAH'],
 ["Il n'y pense pas.",'eel nee PAHⁿSS PAH'],
 ["Nous n'en parlons pas.",'noo nahⁿ par-LOHⁿ PAH'],
 ['Tu y vas souvent ?','tü ee VAH soo-VAHⁿ'],
 ['Elle y va tous les jours.','ehl ee VAH too lay ZHOOR'],
 ['Nous en prenons.','noo zahⁿ pruh-NOHⁿ'],
 ['Vous en voulez ?','voo zahⁿ voo-LAY'],
 ['Ils y pensent.','eel ee PAHⁿSS'],
 ['Tu en as ?','tü ahⁿ NAH'],
 ["J'en ai parlé.",'zhahⁿ nay par-LAY'],
 ["Je n'en ai pas parlé.",'zhuh nahⁿ nay pah par-LAY'],
 ["J'y ai pensé.",'zhee ay pahⁿ-SAY'],
 ['Il en rêve.','eel ahⁿ REHV'],
 ['Nous en revenons.','noo zahⁿ ruh-vuh-NOHⁿ'],
 ['Elle y répond.','ehl ee ray-POHⁿ'],
 ["J'en ai besoin.",'zhahⁿ nay buh-ZWEHⁿ'],
 ["Oui, j'y vais tous les samedis.",'wee, zhee VEH too lay sam-DEE'],
 ["Non, je n'en ai plus.",'nohⁿ, zhuh nahⁿ nay PLÜ'],
 ["J'en prends un, merci.",'zhahⁿ PRAHⁿ ZUHⁿ, mehr-SEE'],
 ["Oui, j'en ai parlé hier.",'wee, zhahⁿ nay par-LAY YEHR'],
];
let bad = 0;
for (const [fr, re] of R) {
  const f = hasPlainNasalFor(fr, re);
  const letters = fr.replace(/[^A-Za-zÀ-ÿ]/gu, '').length;
  const words = fr.trim().split(/\s+/).length;
  if (f) bad += 1;
  console.log(`${f ? 'FLAGGED ' : '        '}${String(letters).padStart(2)}L ${dicteeMode(fr).padEnd(7)} ${String(words).padStart(2)}w  ${fr.padEnd(32)} [${re}]`);
}
console.log(`\n${R.length} rows, ${bad} FLAGGED`);
console.log('\n== false-positive hunt: real /n/ after a vowel in this lesson\'s material ==');
for (const [w, re] of [['une','ÜN'],['bureau','bü-ROH'],['tennis','tay-NEESS'],['semaine','suh-MEHN'],['personne','pehr-SON'],['assez','ah-SAY'],['jaune','ZHOHN'],['téléphone','tay-lay-FON'],['marché','mar-SHAY'],['examen','ehg-zah-MEHⁿ'],['examen','ehg-zah-MEHN'],['pain','PEHⁿ'],['pain','PEHN'],['plein','PLEHⁿ'],['sucre','SÜKR'],['travail','trah-VAHY'],['besoin','buh-ZWEHⁿ'],['besoin','buh-ZWEHN'],['enfants','ahⁿ-FAHⁿ'],['prends','PRAHⁿ'],['pense','PAHⁿSS'],['pense','PAHNSS'],['pensent','PAHⁿSS'],['France','FRAHⁿSS'],['ensemble','ahⁿ-SAHⁿBL'],['revenons','ruh-vuh-NOHⁿ'],['demain','duh-MEHⁿ'],['souvent','soo-VAHⁿ'],['plus','PLÜ'],['merci','mehr-SEE'],['un','UHⁿ'],['un','ZUHⁿ']] as [string,string][]) {
  console.log(`  ${w.padEnd(12)} ${re.padEnd(14)} ${hasPlainNasalFor(w, re) ? 'FLAGGED' : 'clean'}`);
}
