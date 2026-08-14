/* a2.05 pre-flight, part 3. The tokens the supplied respellings must be read
 * off, the `pas` spelling split, and the frames this build wants to author.
 *
 *     pnpm tsx scripts/_a205_probe3.ts
 */
import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const q = async (label: string, sql: string, params: unknown[] = []) => {
  const { rows } = await pool.query(sql, params as never[]);
  console.log(`\n### ${label}`);
  return rows;
};

async function main() {
  // 1. THE `pas` SPELLING SPLIT
  let rows = await q(
    '1. HOW THE CORPUS RESPELLS `pas` (pah vs pa), across published rows',
    `select
       count(*) filter (where respell ~ '(^| )pah( |$)') as pah,
       count(*) filter (where respell ~ '(^| )pa( |$)')  as pa,
       count(*) filter (where respell ~ '(^| )PAH( |$)') as pah_caps,
       count(*) filter (where respell ~ '(^| )PA( |$)')  as pa_caps
     from content_items where status='published' and respell is not null and respell <> ''
       and fr ~* '(^|[ ''’])(ne|n'')[^.]* pas\\y'`,
  );
  console.log(`  pah=${rows[0].pah} pa=${rows[0].pa} PAH=${rows[0].pah_caps} PA=${rows[0].pa_caps}`);

  rows = await q(
    '1b. EVERY RESPELLED ROW WHOSE FRENCH HOLDS ne...pas',
    `select id, fr, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr ~* '(^|[ ''’])(ne|n'')[^.]* pas\\y' order by id limit 40`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(40)} ${String(r.fr).padEnd(40)} ${r.respell}`);

  // 2. THE TOKENS THE SUPPLIED RESPELLINGS NEED
  rows = await q(
    '2. SOURCE ROWS FOR THE TOKENS',
    `select fr, id, respell from content_items
      where status='published' and respell is not null and respell <> ''
        and fr in ('les devoirs','le devoir','un message','le message','la facture','le musée',
                   'hier soir','le soir','la semaine dernière','samedi','le message','la lettre',
                   'répondre','finir','travailler','payer','visiter','danser','inviter','commencer',
                   'la porte','les clés','la clé','le pain','ce matin','le matin','trouver','acheter',
                   'mes devoirs','déjà','bien','hier','avant-hier','manger','parler','vendre',
                   'choisir','attendre','avoir','le train','le film','le rapport','la télé')
      order by fr, id`,
  );
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(24)} ${r.id.padEnd(40)} ${r.respell}`);

  // 3. THE NEGATION ROWS THIS BUILD MIGHT SUPPLY A RESPELLING FOR
  rows = await q(
    '3. THE CANDIDATE NEGATIVES, with drills and status',
    `select id, fr, respell, ipa, drills::text[] drills, status from content_items
      where id in ('fr.a2.negation-et-restriction.112','fr.a2.negation-et-restriction.113',
                   'fr.a2.negation-et-restriction.114','fr.a2.negation-et-restriction.117',
                   'fr.a2.negation-et-restriction.123','fr.a2.negation-et-restriction.127',
                   'fr.a2.negation-et-restriction.142','fr.a2.negation-et-restriction.101',
                   'fr.sons.masterclass.021','fr.sons.alphabet.402','fr.sons.voyelles.355',
                   'fr.sons.voyelles.445','fr.a2.verbes-essentiels.003','fr.a2.verbes-essentiels.017',
                   'fr.a2.prepositions-essentielles.174','fr.a2.prepositions-essentielles.186',
                   'fr.sons.jours-et-mois.025','fr.sons.jours-et-mois.027','fr.sons.jours-et-mois.036',
                   'fr.sons.mots-essentiels.045','fr.sons.mots-essentiels.053')
      order by id`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${String(r.fr).padEnd(44)} [${r.respell ?? ''}] ipa=${r.ipa ?? '-'} d=${JSON.stringify(r.drills)} ${r.status}`);

  // 4. WOULD ANY SENTENCE THIS BUILD WANTS TO AUTHOR ALREADY EXIST?
  const WANT = [
    "J'ai mangé.", 'Tu as mangé.', 'Il a mangé.', 'Nous avons mangé.', 'Vous avez mangé.', 'Ils ont mangé.',
    "Je n'ai pas mangé.", "Tu n'as pas mangé.", "Il n'a pas mangé.", "Nous n'avons pas mangé.",
    "Vous n'avez pas mangé.", "Ils n'ont pas mangé.",
    'Je vais manger.', "J'ai bien mangé.", "Il a déjà mangé.", "J'ai parlé.", "Il a parlé.",
    "Il a fini.", "Il a vendu.", "J'ai fini hier.", "Il a mangé hier.", "On a mangé hier.",
    "J'ai mangé il y a une heure.", "Elle a choisi.", "Nous avons attendu.", "Ils ont répondu.",
    "J'ai travaillé hier.", "Tu as visité Paris ?", "On a fini tôt.",
  ];
  rows = await q(
    '4. ANY EXISTING ROW WITH ONE OF THE FRAMES THIS BUILD WANTS',
    `select id, theme, fr, respell, status from content_items where fr = any($1) order by fr, id`,
    [WANT],
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id.padEnd(42)} ${String(r.theme).padEnd(22)} ${String(r.fr).padEnd(30)} [${r.respell ?? ''}] ${r.status}`).join('\n') : '  NONE of them exists. Every frame is free.');

  // 5. THE FULL DICTEE MATRIX FOR THE FRAME
  console.log('\n### 5. THE DICTÉE MATRIX FOR manger, THROUGH THE REAL FUNCTION');
  const M: readonly [string, string, string][] = [
    ['Je', "J'ai", "Je n'ai pas"], ['Tu', 'Tu as', "Tu n'as pas"], ['Il', 'Il a', "Il n'a pas"],
    ['On', 'On a', "On n'a pas"], ['Elle', 'Elle a', "Elle n'a pas"],
    ['Nous', 'Nous avons', "Nous n'avons pas"], ['Vous', 'Vous avez', "Vous n'avez pas"],
    ['Ils', 'Ils ont', "Ils n'ont pas"],
  ];
  for (const [person, pos, neg] of M) {
    const p = `${pos} mangé.`;
    const n = `${neg} mangé.`;
    console.log(`  ${person.padEnd(5)} ${p.padEnd(24)} ${String(letterCount(p)).padStart(2)} ${dicteeMode(p).padEnd(8)}  ${n.padEnd(26)} ${String(letterCount(n)).padStart(2)} ${dicteeMode(n)}`);
  }
  console.log('  and the a2.19 comparison, which predicted this lesson would be LONGER:');
  for (const s of ['Je ne vais pas partir.', "Je n'ai pas mangé.", 'Je vais partir.', "J'ai mangé."]) {
    console.log(`    ${s.padEnd(26)} ${String(letterCount(s)).padStart(2)} ${dicteeMode(s)}`);
  }

  // 6. THE RESPELLINGS THIS BUILD PLANS, THROUGH THE REAL CHECKER
  console.log('\n### 6. PLANNED RESPELLINGS UNDER hasPlainNasalFor');
  const C: Array<[string, string]> = [
    ["J'ai mangé.", 'zhay mahⁿ-ZHAY'],
    ['Tu as mangé.', 'tü ah mahⁿ-ZHAY'],
    ['Il a mangé.', 'eel ah mahⁿ-ZHAY'],
    ['Nous avons mangé.', 'noo za-vohⁿ mahⁿ-ZHAY'],
    ['Vous avez mangé.', 'voo za-vay mahⁿ-ZHAY'],
    ['Ils ont mangé.', 'eel zohⁿ mahⁿ-ZHAY'],
    ["Je n'ai pas mangé.", 'zhuh nay pah mahⁿ-ZHAY'],
    ["Tu n'as pas mangé.", 'tü nah pah mahⁿ-ZHAY'],
    ["Il n'a pas mangé.", 'eel nah pah mahⁿ-ZHAY'],
    ["Nous n'avons pas mangé.", 'noo na-vohⁿ pah mahⁿ-ZHAY'],
    ["Vous n'avez pas mangé.", 'voo na-vay pah mahⁿ-ZHAY'],
    ["Ils n'ont pas mangé.", 'eel nohⁿ pah mahⁿ-ZHAY'],
    ['Je vais manger.', 'zhuh veh mahⁿ-ZHAY'],
    ["J'ai bien mangé.", 'zhay byehⁿ mahⁿ-ZHAY'],
    ["Il a déjà mangé.", 'eel ah day-ZHAH mahⁿ-ZHAY'],
    ["J'ai parlé.", 'zhay par-LAY'],
    ["Il a fini.", 'eel ah fee-NEE'],
    ["Il a vendu.", 'eel ah vahⁿ-DÜ'],
    ["Ils ont répondu.", 'eel zohⁿ ray-pohⁿ-DÜ'],
    ["Nous avons attendu.", 'noo za-vohⁿ ah-tahⁿ-DÜ'],
    ["Elle a choisi.", 'ehl ah shwah-ZEE'],
    ["J'ai travaillé hier.", 'zhay trah-vah-YAY YEHR'],
    ["On a mangé hier.", 'ohⁿ na mahⁿ-ZHAY YEHR'],
    ["J'ai mangé il y a une heure.", 'zhay mahⁿ-ZHAY eel ee ah ün UHR'],
    ["Il a fini la semaine dernière.", 'eel ah fee-NEE lah suh-MEN dehr-NYEHR'],
    // the supplied ones
    ["Je n'ai pas fini mes devoirs hier soir.", 'zhuh nay pah fee-NEE may duh-VWAR yehr SWAR'],
    ["Elle n'a pas répondu à mon message.", 'ehl nah pah ray-pohⁿ-DÜ a mohⁿ meh-SAHZH'],
    ["Il n'a pas travaillé la semaine dernière.", 'eel nah pah trah-vah-YAY lah suh-MEN dehr-NYEHR'],
    ["Ils n'ont pas payé la facture ce mois-ci.", 'eel nohⁿ pah pay-YAY lah fak-TÜR suh mwah-SEE'],
    ["Nous n'avons pas visité le musée samedi.", 'noo na-vohⁿ pah vee-zee-TAY luh mü-ZAY sam-DEE'],
    // repairs
    ['Elle a dansé toute la soirée.', 'ell ah dahn-SAY toot lah swah-RAY'],
    ['Elle a dansé toute la soirée.', 'ell ah dahⁿ-SAY toot lah swah-RAY'],
    ['Il a invité toute la famille pour Noël.', 'eel ah an-vee-TAY toot lah fah-MEE poor no-EL'],
    ['Il a invité toute la famille pour Noël.', 'eel ah ahⁿ-vee-TAY toot lah fah-MEE poor no-EL'],
    ['avant-hier', 'ah-vahn-TYEHR'],
    ['avant-hier', 'ah-vahⁿ-TYEHR'],
  ];
  for (const [fr, re] of C) {
    console.log(`  ${fr.padEnd(42)} ${re.padEnd(48)} flagged=${hasPlainNasalFor(fr, re) ? 'YES' : 'no '}`);
  }

  // 7. IS THERE A UNIT OWNING negation-et-restriction, i.e. is a1.18 the only one?
  rows = await q(
    '7. THEME SIZES FOR THE THEMES THIS BUILD IMPORTS FROM',
    `select theme, count(*) filter (where status='published') published, count(*) all_rows
       from content_items
      where theme in ('negation-et-restriction','jours-et-mois','mots-essentiels','masterclass',
                      'alphabet','voyelles','verbes-essentiels','prepositions-essentielles','muettes','verbes')
      group by 1 order by 1`,
  );
  for (const r of rows) console.log(`  ${String(r.theme).padEnd(28)} published=${r.published} all=${r.all_rows}`);

  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
