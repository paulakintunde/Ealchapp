/* a2.18 pre-flight, fourth pass. The headline measurement (how many published
 * sentences holding each preposition carry a respelling at all), the `problème`
 * false positive, and the rows this build must not collide with.
 *
 *     pnpm tsx scripts/_a218_probe4.ts
 */
import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function main() {
  console.log('### 1. PUBLISHED SENTENCES PER PREPOSITION, AND HOW MANY CARRY A RESPELLING');
  const { rows } = await pool.query(
    `select p.w,
            count(*) filter (where i.fr ~* ('\\y'||p.p||'\\y')) as total,
            count(*) filter (where i.fr ~* ('\\y'||p.p||'\\y') and i.respell is not null and i.respell <> '') as respelled
       from (values ('depuis','depuis'),('pendant','pendant'),('dans','dans'),
                    ('en','en'),('il y a','il y a'),('pour','pour')) p(w,p)
       cross join content_items i
      where i.status='published' and i.kind='sentence'
      group by 1 order by 2 desc`,
  );
  for (const r of rows) console.log(`  ${String(r.w).padEnd(10)} ${String(r.total).padStart(4)} sentences, ${String(r.respelled).padStart(3)} respelled`);

  console.log('\n### 2. EVERY PUBLISHED ROW HOLDING `depuis` THAT CARRIES A RESPELLING');
  const d = await pool.query(
    `select id, fr, respell from content_items
      where status='published' and fr ~* '\\ydepuis\\y' and respell is not null and respell <> ''
      order by id`,
  );
  console.log(`  ${d.rows.length} rows`);
  for (const r of d.rows) console.log(`  ${r.id.padEnd(38)} ${String(r.fr).slice(0, 46).padEnd(46)} ${r.respell}`);

  console.log('\n### 3. EVERY PUBLISHED ROW HOLDING `il y a` OR `pendant` WITH A RESPELLING AND NO TIE');
  const t = await pool.query(
    `select id, fr, respell from content_items
      where status='published' and (fr ~* '\\yil y a\\y' or fr ~* '\\ypendant\\y')
        and respell is not null and respell <> '' and respell not like '%‿%'
      order by id`,
  );
  for (const r of t.rows) console.log(`  ${r.id.padEnd(38)} ${String(r.fr).slice(0, 46).padEnd(46)} ${r.respell}`);

  console.log('\n### 4. THE `problème` SHAPE: a2.04 FOUND IT ON `même`');
  for (const re of ['uhⁿ proh-BLEHM', 'uhⁿ proh-BLEM', 'proh-BLEHM', 'proh-BLEM', 'pro-BLEHM']) {
    console.log(`  ${re.padEnd(18)} flagged=${hasPlainNasalFor('un problème', re) ? 'YES' : 'no'}`);
  }
  const p = await pool.query(
    `select id, fr, respell from content_items
      where respell is not null and respell <> '' and fr ~* '\\yprobl[èe]me\\y' order by id limit 12`,
  );
  console.log(`  published respellings of problème: ${p.rows.length}`);
  for (const r of p.rows) console.log(`  ${r.id.padEnd(38)} ${String(r.fr).slice(0, 40).padEnd(40)} ${r.respell}`);

  console.log('\n### 5. THE BLOCK: fr.a2.prepositions-essentielles .155 .. .215');
  const b = await pool.query(
    `select id, fr from content_items
      where id like 'fr.a2.prepositions-essentielles.%'
        and split_part(id,'.',4)::int between 155 and 215 order by id`,
  );
  console.log(`  ${b.rows.length} rows in .155..215 (expect 0)`);
  for (const r of b.rows) console.log(`  ${r.id} ${r.fr}`);

  console.log('\n### 6. `en` AS A PRONOUN, WHICH IS NOT THIS LESSON AND NOT a2.04 EITHER');
  const e = await pool.query(
    `select id, seq, title, sub, cando from content_units
      where cando ~* '\\yen\\y' or sub ~* '\\ypronom' or title ~* 'pronoun' order by seq`,
  );
  for (const r of e.rows) console.log(`  ${String(r.id).padEnd(8)} seq ${String(r.seq).padStart(2)}  ${r.title}  |  ${r.cando}`);

  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
