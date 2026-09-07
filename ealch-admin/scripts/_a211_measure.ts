/* a2.11: the two shared functions this lesson's design depends on, measured
 * rather than assumed.
 *
 *   hasPlainNasalFor  — which of the -RE respellings it can SEE. The brief says
 *                       vendent/attendent/entendent carry a word-internal nasal
 *                       it cannot. This proves it, in both directions.
 *   dicteeMode        — every dictée candidate must spell from LETTERS.
 *
 *     pnpm tsx scripts/_a211_measure.ts
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { normalizeFr } from '../../ealch-v2/src/utils/score.ts';
import type { Item } from '../../ealch-v2/src/content/schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(join(here, '../../ealch-v2/src/content/seed.json'), 'utf8')) as {
  version: number; items: Item[]; lessons: { id: string }[];
};

console.log('\n=== is the neighbour third person in the SEED (not only Postgres)?');
for (const id of ['fr.a2.verbes.102', 'fr.a2.verbes.183', 'fr.a2.verbes.027', 'fr.a2.verbes.020']) {
  const r = seed.items.find((i) => i.id === id);
  console.log(`  ${id.padEnd(20)} ${r ? `IN SEED  "${r.fr}"  [${r.respell ?? '-'}]` : 'NOT IN SEED'}`);
}

console.log('\n=== hasPlainNasalFor: what it SEES and what it does not');
const PAIRS: [string, string, string][] = [
  // fr, respelling, what we expect to learn
  ['vendre', 'VAHNDR', 'the stored value. Nasal + D INSIDE the token'],
  ['vendre', 'VAHⁿDR', 'the repair'],
  ['répondre', 'ray-PONDR', 'the stored value'],
  ['répondre', 'ray-POHⁿDR', 'the repair'],
  ['attendre', 'ah-TAHNDR', 'the stored value in verbes-essentiels'],
  ['attendre', 'ah-TAHⁿDR', 'the repair'],
  ['attendre', 'a-TAHⁿDR', 'what sons.consonnes.146 ALREADY holds'],
  ['entendre', 'ahn-TAHNDR', 'the stored value: TWO nasals, one token-final and one not'],
  ['entendre', 'ahⁿ-TAHⁿDR', 'the repair'],
  ['entendre', 'ahn-TAHⁿDR', 'first broken, second fixed'],
  ['entendre', 'ahⁿ-TAHNDR', 'first fixed, second broken'],
  ['rendre', 'RAHNDR', 'the stored value'],
  ['rendre', 'RAHⁿDR', 'the repair'],
  ['descendre', 'day-SAHN-druh', 'the stored value: token-final nasal AND a schwa tail'],
  ['descendre', 'day-SAHⁿDR', 'the repair'],
  ['perdre', 'PEHRDR', 'no nasal at all'],
  ['prendre', 'PRAHⁿDR', 'what sons.consonnes.107 already holds'],
  ['mettre', 'METR', 'no nasal'],
  // The authored sentence respellings.
  ['Je vends ici.', 'zhuh vahn ee-SEE', 'plain n, token-final: should be SEEN'],
  ['Je vends ici.', 'zhuh vahⁿ ee-SEE', 'the authored value'],
  ['Ils vendent ici.', 'eel vahnd ee-SEE', 'plain n with D after it INSIDE the token'],
  ['Ils vendent ici.', 'eel vahⁿd ee-SEE', 'the authored value'],
  ['Nous vendons ici.', 'noo vahn-dohn ee-SEE', 'two plain nasals'],
  ['Nous vendons ici.', 'noo vahⁿ-dohⁿ ee-SEE', 'the authored value'],
  ['Je réponds vite.', 'zhuh ray-POHⁿ veet', 'the authored value'],
  ['Je réponds vite.', 'zhuh ray-POHN veet', 'plain'],
  // Candidates for the REAL-/n/ false positive, the other blind spot.
  ['Elle attend une réponse.', 'el a-tahⁿ tün ray-POHⁿS', 'une: a REAL n'],
  ['Ils vendent des pommes.', 'eel vahⁿd day POM', 'pommes: a REAL m'],
  ['Il perd la semaine.', 'eel pehr la suh-MEN', 'semaine: a REAL n (a2.10 used this one)'],
  ['la panne', 'la PAN', 'panne: a REAL n'],
  ['une panne', 'ün PAN', 'two real n'],
];
for (const [fr, respell, why] of PAIRS) {
  const flagged = hasPlainNasalFor(fr, respell);
  console.log(`  ${flagged ? 'FLAGGED    ' : 'not flagged'}  ${fr.padEnd(26)} ${respell.padEnd(24)} ${why}`);
}

console.log('\n=== dicteeMode on every candidate target');
const CANDIDATES = [
  'Je vends ici.', 'Tu vends ici.', 'Il vend ici.',
  'Nous vendons ici.', 'Vous vendez ici.', 'Ils vendent ici.',
  'Il parle ici.', 'Il finit ici.',
  'Je réponds vite.', 'Tu réponds vite.', 'Il répond vite.',
  'Elle attend le bus.', 'Ils attendent le bus.',
  'Nous perdons souvent.', 'Il perd ses clés.',
  'Elle rend le livre.', 'Ils rendent le livre.',
  'Il entend le train.', 'Ils entendent le train.',
  'Il descend ici.', 'Ils descendent ici.',
  'Je vends des fruits.', 'Ils vendent des fruits.',
  'Vous répondez vite.', 'Nous répondons vite.',
];
for (const s of CANDIDATES) {
  const letters = s.replace(/[^\p{L}]/gu, '').length;
  console.log(`  ${dicteeMode(s).padEnd(8)} ${String(letters).padStart(3)} letters  ${s}`);
}

console.log('\n=== normalizeFr: which near misses the dictee can actually score');
const NEAR: [string, string][] = [
  ['Il vend ici.', 'Il vende ici.'],
  ['Il vend ici.', 'Il vends ici.'],
  ['Je vends ici.', 'Je vend ici.'],
  ['Tu vends ici.', 'Tu vend ici.'],
  ['Ils vendent ici.', 'Ils vendes ici.'],
  ['Nous vendons ici.', 'Nous vendrons ici.'],
  ['Vous vendez ici.', 'Vous vendrez ici.'],
  ['Il répond vite.', 'Il réponds vite.'],
  ['Je réponds vite.', 'Je répond vite.'],
  ['Je réponds vite.', 'Je reponds vite.'],
  ['Il finit ici.', 'Il finis ici.'],
  ['Il parle ici.', 'Il parles ici.'],
];
for (const [right, wrong] of NEAR) {
  const distinguishable = normalizeFr(right) !== normalizeFr(wrong);
  console.log(`  ${distinguishable ? 'SCORABLE  ' : 'FOLDS AWAY'}  ${right.padEnd(20)} vs  ${wrong}`);
}
