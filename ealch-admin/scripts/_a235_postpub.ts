import './env';

/** Post-publish check: is v55 actually adoptable, and are the four orphan rows
 *  that keep flipping a1.03's figures referenced by anything at all? */
async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  console.log('  === snapshots ===');
  const s = await c.query(
    `select version, path, checksum, published_at from content_snapshots order by version desc limit 3`);
  for (const r of s.rows) {
    console.log(`  v${r.version}  ${r.path}  ${new Date(r.published_at).toISOString()}`);
  }

  console.log('\n  === the four orphan rows: is anything pointing at them? ===');
  const ORPHANS = [
    'fr.sons.jours-et-mois.020', 'fr.sons.jours-et-mois.021',
    'fr.sons.jours-et-mois.031', 'fr.sons.jours-et-mois.044',
  ];
  for (const id of ORPHANS) {
    const row = await c.query(
      `select fr, theme, level, status, drills from content_items where id = $1`, [id]);
    const r = row.rows[0];
    if (!r) { console.log(`  ${id}  NOT IN POSTGRES`); continue; }
    // Does any lesson body mention the id?
    const ref = await c.query(
      `select count(*)::int as n from content_units
        where kind = 'lesson' and body::text like '%' || $1 || '%'`, [id]);
    console.log(`  ${id}  "${r.fr}"  ${r.status}  drills ${JSON.stringify(r.drills)}  referenced by ${ref.rows[0].n} lesson(s)`);
  }

  console.log('\n  === how many rows in cut themes are referenced by no lesson at all? ===');
  const CUT = ['cafe', 'objets', 'dictee', 'marche', 'salutations', 'nombres', 'cuisine', 'ecole',
    'deplacements', 'metiers', 'corps', 'maison', 'animaux', 'routines', 'famille',
    'sports-et-loisirs', 'jours-et-mois', 'heure-et-date'];
  const tot = await c.query(
    `select count(*)::int as n from content_items where theme = any($1) and status = 'published'`, [CUT]);
  console.log(`  ${tot.rows[0].n} published rows live in the 18 cut themes`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
