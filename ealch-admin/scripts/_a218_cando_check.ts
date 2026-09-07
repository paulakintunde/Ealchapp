/* Reads a2.18's canDo back out of Postgres and out of seed.json, and compares
 * both against the spine script's value. The spine's own dry run reports
 * created / resequenced / retitled and does NOT surface a canDo change, so
 * this is what confirms the reword landed.
 *
 *     pnpm tsx scripts/_a218_cando_check.ts
 */
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool } from 'pg';
import { UNIT, CANDO_OVERCLAIM } from './data/prepositions-temps-corpus.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const { rows } = await pool.query(
    "select body->>'canDo' c, body->>'seq' s, body->>'title' t, body->>'sub' u"
    + " from content_units where kind='curriculum_unit' and body->>'id'='a2.18'",
  );
  await pool.end();

  const seed = JSON.parse(readFileSync(SEED, 'utf8')) as {
    units: { id: string; canDo?: string; seq?: string | number }[];
  };
  const su = seed.units.find((x) => x.id === 'a2.18');

  const db = rows[0]?.c ?? '(missing)';
  const sd = su?.canDo ?? '(missing)';

  console.log(`\n  source  ${JSON.stringify(UNIT.canDo)}`);
  console.log(`  postgres${db === UNIT.canDo ? ' ✓ same' : ` ✗ ${JSON.stringify(db)}`}`);
  console.log(`  seed    ${sd === UNIT.canDo ? ' ✓ same' : ` ✗ ${JSON.stringify(sd)}`}`);
  console.log(`\n  was     ${JSON.stringify(CANDO_OVERCLAIM.wasShipped)}`);
  console.log(`  seq     db ${rows[0]?.s} · seed ${su?.seq}`);
  console.log(`  title   ${JSON.stringify(rows[0]?.t)}`);

  const bad = [db !== UNIT.canDo && 'postgres', sd !== UNIT.canDo && 'seed'].filter(Boolean);
  if (bad.length) {
    console.log(`\n  ${bad.join(' and ')} still disagree with the source.\n`);
    process.exit(1);
  }
  console.log('\n  all three agree.\n');
}

main().catch((e) => { console.error(e); process.exit(1); });
