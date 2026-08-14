/* a2.17 pre-flight, pass 4. The third and fourth chain adjectives, the scene
 * vocabulary, and the last few absences.
 *
 *   pnpm tsx scripts/_a217_probe4.ts
 */
import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';

const WORDS = [
  'fort', 'forte', 'fortement', 'vif', 'vive', 'vivement', 'net', 'nette', 'nettement',
  'franc', 'franche', 'franchement', 'chaud', 'chaude', 'chaudement',
  'long', 'longue', 'longuement', 'sûr', 'sûre', 'sûrement', 'grand', 'grande',
  'petit', 'petite', 'petitement', 'joli', 'jolie', 'joliment',
  'clair', 'claire', 'clairement', 'complet', 'complète', 'complètement',
  'chanteur', 'chanteuse', 'le collègue', 'la réunion', 'le train', 'le chef',
];

const SENTENCES = [
  'Il parle lentement.', 'Il parle doucement.', 'Il court vite.',
  'Elle chante bien.', 'Il chante mal.', 'Je mange souvent.',
  'Il est fort.', 'Elle est forte.', 'Il parle fortement.',
  'Il est lent.', 'Elle est lente.', 'Il est doux.', 'Elle est douce.',
  'Il est évident.', 'Elle est évidente.', 'Il est constant.', 'Elle est constante.',
  "C'est un bon jour.", 'Il chante bien.', 'Elle travaille bien.',
  'Elle répond vite.', 'Il arrive toujours tard.', 'Elle parle bien.',
  'Il joue mal.', 'Elle marche lentement.', 'Il mange lentement.',
];

async function main() {
  const pg = new Pool({ connectionString: process.env.SUPABASE_DB_URL ?? process.env.DATABASE_URL });
  const { rows } = await pg.query(
    `select id, fr, en, respell, ipa, kind, status, theme, gender, drills::text[] drills, notes
       from content_items
      where lower(regexp_replace(fr, '^(le |la |les |un |une |des |l''|l’)', '')) = any($1) order by fr, id`,
    [WORDS.map((w) => w.replace(/^(le |la |les |un |une |des |l'|l’)/, ''))]);

  console.log('══ 1. THE CANDIDATE CHAIN ADJECTIVES AND THEIR ADVERBS ══');
  for (const w of WORDS) {
    const bare = w.replace(/^(le |la |les |un |une |des |l'|l’)/, '');
    const hit = rows.filter((r: any) => String(r.fr).toLowerCase().replace(/^(le |la |les |un |une |des |l'|l’)/, '') === bare);
    if (!hit.length) { console.log(`  ${w.padEnd(14)} ABSENT`); continue; }
    for (const r of hit) {
      const flag = r.respell ? hasPlainNasalFor(r.fr, r.respell) : false;
      console.log(`  ${w.padEnd(14)} ${r.id.padEnd(38)} ${String(r.fr).padEnd(14)} [${String(r.respell ?? '-').padEnd(18)}] ${r.kind.padEnd(8)} g=${r.gender ?? '-'} ${r.status} ${flag ? 'NASAL-FLAGGED' : ''}  theme=${r.theme}`);
    }
  }

  console.log('\n══ 2. CANDIDATE SENTENCES: does one already exist, and is it LETTERS mode ══');
  const { rows: sent } = await pg.query(
    'select id, fr, theme, respell from content_items where fr = any($1)', [SENTENCES]);
  const have = new Map(sent.map((r: any) => [r.fr, r]));
  for (const s of SENTENCES) {
    const r: any = have.get(s);
    const letters = s.replace(/[^\p{L}]/gu, '').length;
    console.log(`  ${dicteeMode(s) === 'letters' ? 'LETTERS' : 'WORD   '} ${String(letters).padStart(2)}  ${s.padEnd(30)} ${r ? `EXISTS ${r.id} (${r.theme}) [${r.respell ?? '-'}]` : 'new'}`);
  }

  console.log('\n══ 3. WHAT ELSE IS IN adverbes-essentiels THAT THIS LESSON MIGHT WANT ══');
  const { rows: adv } = await pg.query(
    `select id, fr, respell, kind from content_items where theme = 'adverbes-essentiels' and kind = 'word'
      and fr in ('bien','mal','vite','souvent','toujours','beaucoup','trop','assez','peu','jamais','parfois')`);
  console.log(adv.length ? adv.map((r: any) => `  ${r.id} ${r.fr} [${r.respell}]`).join('\n') : '  none of the irregulars live in the adverb theme');

  console.log('\n══ 4. THE a2.03 ROWS THIS LESSON WOULD POINT AT ══');
  const { rows: a203 } = await pg.query(
    `select id, fr, respell from content_items where id in
      ('fr.a2.adjectifs-essentiels.005','fr.a2.adjectifs-essentiels.006','fr.a2.adjectifs-essentiels.019',
       'fr.a2.adjectifs-essentiels.001','fr.a2.adjectifs-essentiels.002') order by id`);
  for (const r of a203) console.log(`  ${r.id} ${String(r.fr).padEnd(24)} [${r.respell}]`);

  console.log('\n══ 5. IS THERE ALREADY A SENTENCE PUTTING bon WHERE bien BELONGS ══');
  const { rows: bon } = await pg.query(
    `select id, fr from content_items where kind='sentence' and status='published'
       and fr ~* '(chante|parle|travaille|joue|danse|cuisine) bon\\M' limit 10`);
  console.log(bon.length ? bon.map((r: any) => `  ${r.id} ${r.fr}`).join('\n') : '  none, as expected: the error is a learner error and the corpus holds no examples');

  await pg.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
