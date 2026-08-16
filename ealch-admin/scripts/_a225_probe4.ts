import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  const c = await pool.connect();
  console.log('== a2.04 rows: en + country ==');
  const { rows } = await c.query("select id, fr, en, kind, respell, gender, theme from content_items where theme='prepositions-essentielles' and status='published' and fr ~* '(^|[^a-zà-ÿ])en (France|Espagne|Italie|Belgique|Allemagne|Suisse|Angleterre)' order by id limit 14");
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${r.kind.padEnd(8)} « ${r.fr} » [${r.respell ?? '-'}]${r.gender ? ` g=${r.gender}` : ''}`);
  console.log('\n== en + country anywhere, respelled, ungendered ==');
  const { rows: r2 } = await c.query("select id, fr, kind, respell, gender, theme from content_items where status='published' and respell is not null and gender is null and fr ~* '(^|[^a-zà-ÿ])en (France|Espagne|Italie|Belgique|Allemagne|Suisse)' order by id limit 14");
  for (const r of r2) console.log(`  ${hasPlainNasalFor(r.fr, r.respell) ? 'FLAG ' : 'ok   '} ${r.id.padEnd(42)} ${r.kind.padEnd(8)} « ${r.fr.slice(0,44)} » [${String(r.respell).slice(0,34)}] ${r.theme}`);
  console.log('\n== gender / status on every import candidate ==');
  const IDS = ['fr.sons.verbes-essentiels.003','fr.sons.verbes-essentiels.020','fr.sons.verbes-essentiels.023','fr.sons.verbes-essentiels.007','fr.sons.verbes-essentiels.002','fr.a1.cuisine.042','fr.sons.verbes-essentiels.012','fr.a2.pronoms-essentiels.028','fr.a2.pronoms-essentiels.031','fr.a2.pronoms-essentiels.029','fr.a2.pronoms-essentiels.030','fr.a2.pronoms-essentiels.032','fr.a2.pronoms-essentiels.033','fr.a2.rp-voyage.007','fr.a2.pronoms-essentiels.237','fr.a2.pronoms-essentiels.238','fr.a2.pronoms-essentiels.190','fr.sons.jours-et-mois.081','fr.a2.prepositions-essentielles.186','fr.a2.prepositions-essentielles.185','fr.a1.cafe.151','fr.a1.cuisine.259','fr.a1.expressions-de-quantite.001','fr.sons.expressions-utiles.158'];
  const { rows: r3 } = await c.query('select id, fr, kind, level, theme, respell, gender, status, drills from content_items where id = any($1) order by id', [IDS]);
  for (const r of r3) console.log(`  ${r.id.padEnd(44)} ${r.kind.padEnd(8)} ${r.level.padEnd(4)} ${r.gender ? `GENDER=${r.gender}` : 'no gender'}  ${r.status}  drills=${r.drills}`);
  console.log(`  missing: ${IDS.filter((i) => !r3.some((r) => r.id === i)).join(', ') || 'none'}`);
  console.log('\n== seed cut: which of these are in seed.json ==');
  c.release(); await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
