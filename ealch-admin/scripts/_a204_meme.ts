/* How the corpus respells `même`, and whether the shared checker flags every
 * one of them. A2.04 wants the word and the first branch of `hasPlainNasal`
 * has no rescue path for a real /m/ after a two-letter vowel.
 */
import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
(async () => {
  const c = await pool.connect();
  for (const w of ['même', 'mêmes', 'femme', 'pomme', 'homme', 'comme']) {
    const r = await c.query(
      `select id, fr, respell from content_items
        where status = 'published' and respell is not null and fr ~* ('\\y' || $1 || '\\y')
        order by id limit 8`,
      [w],
    );
    console.log(`\n${w}  ${r.rowCount} card-ready rows`);
    for (const x of r.rows as Record<string, string>[]) {
      console.log(`   ${hasPlainNasalFor(x.fr, x.respell) ? 'FLAG' : ' ok '} ${x.id.padEnd(36)} ${x.fr}   [${x.respell}]`);
    }
  }
  // the isolated question
  console.log('\nisolated:');
  for (const [fr, re] of [['même', 'MEHM'], ['même', 'mehm'], ['même', 'MEHMM'], ['même', 'MEM'], ['la même porte', 'lah MEHM PORT'], ['la même porte', 'lah MEHMM PORT']]) {
    console.log(`   ${hasPlainNasalFor(fr, re) ? 'FLAG' : ' ok '} ${fr} [${re}]`);
  }
  c.release(); await pool.end();
})();
