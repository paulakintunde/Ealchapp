/* a2.15, the final measurement pass: the 34 rows this build will author, through
 * the real checker, the real dicteeMode and the real fold.
 *
 *   pnpm tsx scripts/_a215_measure.ts
 */
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { fold, matchesAccept } from '../../ealch-v2/src/content/answer.logic.ts';

const ROWS: [string, string, string][] = [
  ['fr.a2.verbes.421', 'battre', 'BATR'],
  ['fr.a2.verbes.422', 'combattre', 'kohⁿ-BATR'],
  ['fr.a2.verbes.423', 'remettre', 'ruh-MEHTR'],
  ['fr.a2.verbes.424', 'Je prends la clé.', 'zhuh PRAHⁿ la KLAY'],
  ['fr.a2.verbes.425', 'Tu prends la clé.', 'tü PRAHⁿ la KLAY'],
  ['fr.a2.verbes.426', 'Il prend la clé.', 'eel PRAHⁿ la KLAY'],
  ['fr.a2.verbes.427', 'Nous prenons la clé.', 'noo pruh-NOHⁿ la KLAY'],
  ['fr.a2.verbes.428', 'Vous prenez la clé.', 'voo pruh-NAY la KLAY'],
  ['fr.a2.verbes.429', 'Ils prennent la clé.', 'eel PREN la KLAY'],
  ['fr.a2.verbes.430', 'Je mets la clé.', 'zhuh MEH la KLAY'],
  ['fr.a2.verbes.431', 'Tu mets la clé.', 'tü MEH la KLAY'],
  ['fr.a2.verbes.432', 'Il met la clé.', 'eel MEH la KLAY'],
  ['fr.a2.verbes.433', 'Nous mettons la clé.', 'noo meh-TOHⁿ la KLAY'],
  ['fr.a2.verbes.434', 'Vous mettez la clé.', 'voo meh-TAY la KLAY'],
  ['fr.a2.verbes.435', 'Ils mettent la clé.', 'eel MET la KLAY'],
  ['fr.a2.verbes.436', 'Je bats Paul.', 'zhuh BA POL'],
  ['fr.a2.verbes.437', 'Il bat Paul.', 'eel BA POL'],
  ['fr.a2.verbes.438', 'Nous battons Paul.', 'noo ba-TOHⁿ POL'],
  ['fr.a2.verbes.439', 'Ils battent Paul.', 'eel BAT POL'],
  ['fr.a2.verbes.440', 'J\'apprends le français.', 'zha-PRAHⁿ luh frahⁿ-SEH'],
  ['fr.a2.verbes.441', 'Nous apprenons le français.', 'noo-za-pruh-NOHⁿ luh frahⁿ-SEH'],
  ['fr.a2.verbes.442', 'Ils apprennent le français.', 'eel-za-PREN luh frahⁿ-SEH'],
  ['fr.a2.verbes.443', 'Je comprends la question.', 'zhuh kohⁿ-PRAHⁿ la kes-TYOHⁿ'],
  ['fr.a2.verbes.444', 'Nous comprenons la question.', 'noo kohⁿ-pruh-NOHⁿ la kes-TYOHⁿ'],
  ['fr.a2.verbes.445', 'Ils comprennent la question.', 'eel kohⁿ-PREN la kes-TYOHⁿ'],
  ['fr.a2.verbes.446', 'Le film surprend Marie.', 'luh FEELM sür-PRAHⁿ ma-REE'],
  ['fr.a2.verbes.447', 'Je promets une réponse.', 'zhuh proh-MEH ün ray-POHⁿS'],
  ['fr.a2.verbes.448', 'Nous promettons une réponse.', 'noo proh-meh-TOHⁿ ün ray-POHⁿS'],
  ['fr.a2.verbes.449', 'Ils permettent ce choix.', 'eel pehr-MET suh SHWAH'],
  ['fr.a2.verbes.450', 'Je remets la clé.', 'zhuh ruh-MEH la KLAY'],
  ['fr.a2.verbes.451', 'Ils remettent la clé.', 'eel ruh-MET la KLAY'],
  ['fr.a2.verbes.452', 'Ils combattent le feu.', 'eel kohⁿ-BAT luh FUH'],
  ['fr.a2.verbes.453', 'Tu apprends le français ici ?', 'tü a-PRAHⁿ luh frahⁿ-SEH ee-SEE'],
  ['fr.a2.verbes.454', 'Oui, j\'apprends le français ici.', 'wee, zha-PRAHⁿ luh frahⁿ-SEH ee-SEE'],
];

console.log('\n## 1. hasPlainNasalFor over all 34 authored rows\n');
let flagged = 0;
for (const [id, fr, re] of ROWS) {
  const f = hasPlainNasalFor(fr, re);
  if (f) { flagged += 1; console.log(`  FLAGGED ${id} ${fr}  [${re}]`); }
}
console.log(`  ${flagged} flagged of ${ROWS.length}`);

console.log('\n## 2. The blind sweep: break each superscript back to a plain n\n');
let sup = 0; const blind: string[] = [];
for (const [id, fr, re] of ROWS) {
  for (let i = 0; i < re.length; i += 1) {
    if (re[i] !== 'ⁿ') continue;
    sup += 1;
    const broken = re.slice(0, i) + 'n' + re.slice(i + 1);
    if (!hasPlainNasalFor(fr, broken)) blind.push(`${id} [${broken}]`);
  }
}
console.log(`  ${sup} superscripts, ${blind.length} invisible to the checker`);
for (const b of blind) console.log(`    BLIND ${b}`);

console.log('\n## 3. dicteeMode over every authored sentence\n');
for (const [id, fr] of ROWS) {
  if (!fr.includes(' ')) continue;
  console.log(`  ${dicteeMode(fr) === 'letters' ? 'LETTERS' : '  words'} ${String(letterCount(fr)).padStart(2)}  ${id}  ${fr}`);
}

console.log('\n## 4. THE LIGATURE. letterCount() strips U+0153, so the dictee cannot see it.\n');
for (const s of ['Vous battez les œufs.', 'Je bats les œufs.', 'le cœur', 'la sœur']) {
  const real = letterCount(s);
  const visible = s.replace(/[^\p{L}]/gu, '').length;
  const bank = s.replace(/[^A-Za-zÀ-ÿ]/gu, '');
  console.log(`  ${JSON.stringify(s)}\n      letterCount=${real}  actual letters=${visible}  mode=${dicteeMode(s)}  bank/target=${JSON.stringify(bank)}`);
}

console.log('\n## 5. fold() on the unseen-compound answers\n');
for (const [right, wrong] of [
  ['reprenons', 'reprennons'], ['reprennent', 'reprenent'],
  ['admettons', 'admetons'], ['admettent', 'admetent'],
  ['prenons', 'prennons'], ['prennent', 'prenent'],
  ['mettons', 'metons'], ['battent', 'batent'],
]) {
  console.log(`  ${right.padEnd(12)} vs ${wrong.padEnd(12)} foldEqual=${fold(right) === fold(wrong)}  accepted=${matchesAccept(wrong, [right])}`);
}
