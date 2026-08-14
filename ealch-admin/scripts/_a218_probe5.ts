/* a2.18 pre-flight, fifth pass. The three consecutive rows in
 * fr.sons.jours-et-mois that hold this lesson's central contrast, and whether
 * the other two members of the set were ever published as cards.
 *
 *     pnpm tsx scripts/_a218_probe5.ts
 */
import './env';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function main() {
  const { rows } = await pool.query(
    `select id, kind, status, fr, en, respell from content_items
      where id like 'fr.sons.jours-et-mois.%'
        and split_part(id,'.',4)::int between 74 and 96 order by id`,
  );
  console.log('### fr.sons.jours-et-mois .074 .. .096');
  for (const r of rows) {
    console.log(`  ${r.id.padEnd(30)} ${String(r.kind).padEnd(9)} ${String(r.status).padEnd(10)} ${String(r.fr).padEnd(28)} ${String(r.respell ?? '')}`);
  }

  const c = await pool.query(
    `select id, kind, status, fr, respell from content_items
      where fr in ('dans une heure','en une heure','dans deux heures','en deux heures',
                   'depuis deux ans','il y a deux jours','pendant deux heures','dans dix minutes',
                   'depuis hier','il y a un an','pendant les vacances','depuis longtemps')
      order by fr, id`,
  );
  console.log('\n### THE OTHER DURATIONS, AS CARDS');
  console.log(`  ${c.rows.length} rows`);
  for (const r of c.rows) console.log(`  ${r.id.padEnd(38)} ${String(r.status).padEnd(10)} ${String(r.fr).padEnd(22)} ${r.respell ?? '(none)'}`);

  const u = await pool.query(
    `select id, title, sub, cando from content_units
      where cando ~* 'pronoun' or title ~* 'Pronoun' order by id`,
  );
  console.log('\n### PRONOUN UNITS (the OTHER `en`, which is nobody in this batch)');
  for (const r of u.rows) console.log(`  ${String(r.id).padEnd(8)} ${String(r.title).padEnd(40)} ${r.cando}`);

  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
