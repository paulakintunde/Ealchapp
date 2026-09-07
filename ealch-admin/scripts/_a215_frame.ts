/* Finding a dictee frame per verb. a2.13 got all eighteen cells onto ONE frame
 * because a modal accepts any second verb; these three take different OBJECTS,
 * so the best available is one frame each, and each must clear the 16-letter
 * limit at every cell or the dictee hands the word over pre-spelled.
 *
 *   pnpm tsx scripts/_a215_frame.ts
 */
import './env';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';

const CELLS: Record<string, string[]> = {
  prendre: ['Je prends', 'Tu prends', 'Il prend', 'Nous prenons', 'Vous prenez', 'Ils prennent'],
  mettre: ['Je mets', 'Tu mets', 'Il met', 'Nous mettons', 'Vous mettez', 'Ils mettent'],
  battre: ['Je bats', 'Tu bats', 'Il bat', 'Nous battons', 'Vous battez', 'Ils battent'],
};

const OBJECTS: Record<string, string[]> = {
  prendre: ['le bus', 'le train', 'le métro', 'un café', 'le thé'],
  mettre: ['le sel', 'la table', 'un pull', 'le pain', 'la clé'],
  battre: ['les œufs', "l'œuf", 'Paul', 'la crème', 'le record'],
};

const letters = (s: string) => s.replace(/[^\p{L}]/gu, '').length;

for (const verb of Object.keys(CELLS)) {
  console.log(`\n## ${verb}\n`);
  for (const obj of OBJECTS[verb]) {
    const rows = CELLS[verb].map((c) => `${c} ${obj}.`);
    const bad = rows.filter((r) => dicteeMode(r) !== 'letters');
    const worst = Math.max(...rows.map(letters));
    const flag = bad.length === 0 ? 'ALL LETTERS' : `${bad.length} in WORD mode`;
    console.log(`  ${obj.padEnd(10)} longest ${String(worst).padStart(2)}  ${flag}`);
    if (bad.length === 0) for (const r of rows) console.log(`      ${String(letters(r)).padStart(2)}  ${r}`);
  }
}
