/* a2.05 pre-flight, part 4. The final verification before authoring:
 * every planned respelling through the real checker, every planned import's
 * gender and tie, and the frames checked for collisions inside `verbes`.
 *
 *     pnpm tsx scripts/_a205_probe4.ts
 */
import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const PLANNED: Array<[string, string]> = [
  ["J'ai mangé.", 'zhay mahⁿ-ZHAY'],
  ['Tu as mangé.', 'tü ah mahⁿ-ZHAY'],
  ['Il a mangé.', 'eel ah mahⁿ-ZHAY'],
  ['Nous avons mangé.', 'noo za-vohⁿ mahⁿ-ZHAY'],
  ['Vous avez mangé.', 'voo za-vay mahⁿ-ZHAY'],
  ['Ils ont mangé.', 'eel zohⁿ mahⁿ-ZHAY'],
  ["Je n'ai pas mangé.", 'zhuh nay pa mahⁿ-ZHAY'],
  ["Tu n'as pas mangé.", 'tü na pa mahⁿ-ZHAY'],
  ["Nous n'avons pas mangé.", 'noo na-vohⁿ pa mahⁿ-ZHAY'],
  ["Vous n'avez pas mangé.", 'voo na-vay pa mahⁿ-ZHAY'],
  ["Ils n'ont pas mangé.", 'eel nohⁿ pa mahⁿ-ZHAY'],
  ["J'ai parlé.", 'zhay par-LAY'],
  ['Il a fini.', 'eel ah fee-NEE'],
  ['Il a vendu.', 'eel ah vahⁿ-DÜ'],
  ['Nous avons choisi.', 'noo za-vohⁿ shwah-ZEE'],
  ['Ils ont répondu.', 'eel zohⁿ ray-pohⁿ-DÜ'],
  ['Tu as travaillé.', 'tü ah trah-vah-YAY'],
  ["J'ai bien mangé.", 'zhay byehⁿ mahⁿ-ZHAY'],
  ['Il a déjà fini.', 'eel ah day-ZHAH fee-NEE'],
  ['Nous avons beaucoup travaillé.', 'noo za-vohⁿ boh-KOO trah-vah-YAY'],
  ['Elle a bien répondu.', 'ehl ah byehⁿ ray-pohⁿ-DÜ'],
  ["J'ai travaillé hier.", 'zhay trah-vah-YAY YEHR'],
  ['Il a fini la semaine dernière.', 'eel ah fee-NEE lah suh-MEN dehr-NYEHR'],
  ['On a mangé il y a une heure.', 'ohⁿ na mahⁿ-ZHAY eel ee ah ün UHR'],
  ['Tu as parlé avant-hier ?', 'tü ah par-LAY ah-vahⁿ-TYEHR'],
  ['Je vais manger.', 'zhuh veh mahⁿ-ZHAY'],
  ['Il va manger.', 'eel va mahⁿ-ZHAY'],
  ["J'ai mangé une pomme.", 'zhay mahⁿ-ZHAY ün POM'],
  ['Elle a mangé une pomme.', 'ehl ah mahⁿ-ZHAY ün POM'],
  ['Et hier soir, alors ?', 'ay yehr SWAR ah-LOR'],
  ["J'ai mangé avec des amis.", 'zhay mahⁿ-ZHAY ah-VEK day-za-MEE'],
  ['Ah, ce soir alors !', 'ah suh SWAR ah-LOR'],
  ['Et toi, tu as travaillé samedi ?', 'ay TWAH · tü ah trah-vah-YAY sam-DEE'],
  ["Non, je n'ai pas travaillé.", 'nohⁿ · zhuh nay pa trah-vah-YAY'],
  ['Vous avez fini le rapport ?', 'voo za-vay fee-NEE luh ra-POR'],
  ["Non, nous n'avons pas fini.", 'nohⁿ · noo na-vohⁿ pa fee-NEE'],
];

const SUPPLIED: Array<[string, string, string]> = [
  ['fr.a2.negation-et-restriction.113', "Elle n'a pas répondu à mon message.", 'ehl na pa ray-pohⁿ-DÜ a mohⁿ meh-SAHZH'],
  ['fr.a2.negation-et-restriction.114', "Nous n'avons pas visité le musée samedi.", 'noo na-vohⁿ pa vee-zee-TAY luh mü-ZAY sam-DEE'],
  ['fr.a2.negation-et-restriction.117', "Ils n'ont pas payé la facture ce mois-ci.", 'eel nohⁿ pa pay-YAY lah fak-TÜR suh mwah-SEE'],
  ['fr.a2.negation-et-restriction.142', "Il n'a pas travaillé la semaine dernière.", 'eel na pa trah-vah-YAY lah suh-MEN dehr-NYEHR'],
];

const IMPORTS = [
  'fr.sons.verbes-essentiels.002', 'fr.sons.muettes.037', 'fr.sons.verbes-essentiels.015',
  'fr.sons.verbes-essentiels.037', 'fr.a2.verbes.027', 'fr.a2.verbes.031', 'fr.a2.verbes.020',
  'fr.sons.verbes-essentiels.038', 'fr.sons.jours-et-mois.025', 'fr.sons.jours-et-mois.036',
  'fr.sons.jours-et-mois.027', 'fr.sons.mots-essentiels.045', 'fr.sons.mots-essentiels.053',
  'fr.sons.masterclass.021', 'fr.a2.prepositions-essentielles.174',
  'fr.a2.prepositions-essentielles.186', 'fr.sons.alphabet.402', 'fr.sons.voyelles.355',
  'fr.sons.voyelles.445', 'fr.a2.verbes.527',
  'fr.a2.negation-et-restriction.113', 'fr.a2.negation-et-restriction.114',
  'fr.a2.negation-et-restriction.117', 'fr.a2.negation-et-restriction.142',
];

async function main() {
  console.log('### 1. EVERY PLANNED RESPELLING, AND THE BREAK TEST ON EVERY SUPERSCRIPT');
  let seen = 0; let missed = 0; const missedRows: string[] = [];
  for (const [fr, re] of [...PLANNED, ...SUPPLIED.map((s) => [s[1], s[2]] as [string, string])]) {
    const flagged = hasPlainNasalFor(fr, re);
    let s = 0; let m = 0;
    for (let k = 0; k < re.length; k += 1) {
      if (re[k] !== 'ⁿ') continue;
      const broken = `${re.slice(0, k)}n${re.slice(k + 1)}`;
      if (hasPlainNasalFor(fr, broken)) { s += 1; seen += 1; } else { m += 1; missed += 1; missedRows.push(fr); }
    }
    console.log(`  ${flagged ? 'FLAGGED ' : 'clean   '} seen=${s} missed=${m}  ${fr.padEnd(34)} ${re}`);
  }
  console.log(`  TOTAL seen=${seen} missed=${missed}`);
  if (missedRows.length) console.log(`  MISSED IN: ${[...new Set(missedRows)].join(' | ')}`);

  console.log('\n### 2. FALSE-POSITIVE CANDIDATES (a2.04 §2 / a2.18 §2 shape)');
  for (const [fr, re] of [
    ['une pomme', 'ün POM'], ['la semaine dernière', 'lah suh-MEN dehr-NYEHR'],
    ['samedi', 'sam-DEE'], ['une heure', 'ün UHR'], ['la personne', 'lah pehr-SONN'],
    ['le problème', 'luh proh-BLEHM'], ['la pomme', 'lah POM'],
  ] as const) {
    console.log(`  ${hasPlainNasalFor(fr, re) ? 'FIRES  ' : 'clean  '} ${fr.padEnd(24)} ${re}`);
  }

  console.log('\n### 3. THE REPAIR CANDIDATE: avant-hier');
  for (const [fr, re] of [['avant-hier', 'ah-vahn-TYEHR'], ['avant-hier', 'ah-vahⁿ-TYEHR']] as const) {
    console.log(`  ${hasPlainNasalFor(fr, re) ? 'FLAGGED' : 'clean  '} ${fr} ${re}`);
  }

  console.log('\n### 4. THE DICTÉE, EVERY AUTHORED FRAME');
  for (const [fr] of PLANNED) {
    console.log(`  ${String(letterCount(fr)).padStart(2)} ${dicteeMode(fr).padEnd(8)} ${fr}`);
  }
  console.log(`  IMPORTED  ${String(letterCount("Il n'a pas mangé.")).padStart(2)} ${dicteeMode("Il n'a pas mangé.")} Il n'a pas mangé.  (fr.sons.masterclass.021)`);

  const pool2 = pool;
  const c = await pool2.connect();

  console.log('\n### 5. THE IMPORTS: gender, tie, respell, drills, status');
  const { rows } = await c.query(
    'select id, kind, theme, fr, respell, en, gender, status, drills::text[] drills from content_items where id = any($1) order by id',
    [IMPORTS],
  );
  for (const r of rows) {
    const tie = String(r.respell ?? '').includes('‿') ? '  TIE!' : '';
    console.log(`  ${r.id.padEnd(42)} ${String(r.kind).padEnd(9)} g=${String(r.gender ?? '-').padEnd(2)} [${r.respell ?? ''}]${tie}  d=${JSON.stringify(r.drills)} ${r.status}`);
  }
  const found = new Set(rows.map((r) => r.id));
  for (const id of IMPORTS) if (!found.has(id)) console.log(`  MISSING: ${id}`);

  console.log('\n### 6. WOULD ANY AUTHORED fr COLLIDE INSIDE `verbes`?');
  const frs = PLANNED.map(([fr]) => fr);
  const { rows: clash } = await c.query(
    "select id, fr from content_items where theme = 'verbes' and fr = any($1) order by id", [frs],
  );
  console.log(clash.length ? clash.map((r) => `  COLLISION ${r.id} ${r.fr}`).join('\n') : '  none inside verbes');
  const { rows: anywhere } = await c.query(
    'select id, theme, fr, respell from content_items where fr = any($1) order by fr, id', [frs],
  );
  console.log(anywhere.length ? `  and anywhere in the corpus:\n${anywhere.map((r) => `    ${r.id.padEnd(40)} ${String(r.theme).padEnd(18)} ${r.fr}`).join('\n')}` : '  and nowhere else in the corpus');

  console.log('\n### 7. THE SOURCE ROWS THE SUPPLIED RESPELLINGS ARE READ OFF');
  const SRC = ['fr.sons.masterclass.021', 'fr.a2.verbes.031', 'fr.sons.jours-et-mois.036',
    'fr.a2.verbes.020', 'fr.sons.noms-essentiels.048', 'fr.sons.voyelles.445', 'fr.a2.verbes.510',
    'fr.sons.verbes-essentiels.129', 'fr.a2.tourisme.001', 'fr.sons.jours-et-mois.006',
    'fr.sons.verbes-essentiels.059', 'fr.a2.courses.054', 'fr.a2.prepositions-essentielles.175',
    'fr.a2.negation-et-restriction.164', 'fr.sons.verbes-essentiels.037', 'fr.sons.verbes-essentiels.019'];
  const { rows: src } = await c.query('select id, fr, respell from content_items where id = any($1) order by id', [SRC]);
  for (const r of src) console.log(`  ${r.id.padEnd(42)} ${String(r.fr).padEnd(44)} ${r.respell ?? '(none)'}`);

  console.log('\n### 8. THE BLOCK .541..590 AND .591..650');
  const { rows: blk } = await c.query(
    "select id, fr from content_items where id like 'fr.a2.verbes.%' and split_part(id,'.',4)::int between 541 and 650 order by id",
  );
  console.log(blk.length ? blk.map((r) => `  OCCUPIED ${r.id} ${r.fr}`).join('\n') : '  .541 through .650 is completely clear');

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
