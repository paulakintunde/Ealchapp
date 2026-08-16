/* a2.25 — the second probe: the repair candidates and the import candidates.
 *
 *     pnpm tsx scripts/_a225_probe2.ts
 */
import './env';
import { Pool } from 'pg';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const CANDIDATES = [
  'fr.sons.expressions-utiles.130', 'fr.sons.expressions-utiles.136',
  'fr.sons.expressions-utiles.157', 'fr.sons.expressions-utiles.158',
  'fr.sons.expressions-utiles.059', 'fr.b2.expressions-argot.034',
  'fr.b2.expressions-argot.035',
  'fr.a2.pronoms-essentiels.029', 'fr.a2.pronoms-essentiels.031',
  'fr.a2.pronoms-essentiels.032', 'fr.a1.pronoms-essentiels.100',
  'fr.a2.entraide.008', 'fr.a2.rp-voyage.007',
  'fr.sons.jours-et-mois.081', 'fr.sons.jours-et-mois.080',
  'fr.a2.prepositions-essentielles.173', 'fr.a2.prepositions-essentielles.185',
  'fr.a2.prepositions-essentielles.186', 'fr.a1.pays-et-nationalites.081',
  'fr.sons.verbes-essentiels.003', 'fr.sons.verbes-essentiels.020',
  'fr.sons.verbes-essentiels.023', 'fr.sons.verbes-essentiels.007',
  'fr.sons.verbes-essentiels.002', 'fr.a1.cuisine.042',
  'fr.sons.verbes-essentiels.012', 'fr.b1.verbes.083',
  'fr.a2.pronoms-essentiels.237', 'fr.a2.pronoms-essentiels.238',
  'fr.a2.pronoms-essentiels.190',
];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  const c = await pool.connect();

  console.log('\n══ CANDIDATE ROWS, IN FULL ═══════════════════════════════════\n');
  const { rows } = await c.query('select * from content_items where id = any($1) order by id', [CANDIDATES]);
  for (const r of rows) {
    const flag = r.respell ? (hasPlainNasalFor(r.fr, r.respell) ? '  ← FLAGGED' : '') : '';
    console.log(`${r.id}`);
    console.log(`   fr      « ${r.fr} »`);
    console.log(`   en      ${r.en}`);
    console.log(`   theme   ${r.theme}   kind=${r.kind}  level=${r.level}  status=${r.status}${r.gender ? `  GENDER=${r.gender}` : ''}`);
    console.log(`   respell ${r.respell ?? '(none)'}${flag}`);
    if (r.ipa) console.log(`   ipa     ${r.ipa}`);
    if (r.notes) console.log(`   notes   ${String(r.notes).slice(0, 150)}`);
    console.log(`   drills  ${r.drills}`);
    console.log('');
  }
  const missing = CANDIDATES.filter((id) => !rows.some((r) => r.id === id));
  if (missing.length) console.log(`NOT FOUND: ${missing.join(', ')}\n`);

  /* ── Every published row whose respelling carries a broken `en` nasal ──── */
  console.log('══ EVERY RESPELLED ROW CARRYING j\'en / n\'en / t\'en / s\'en / y en ══\n');
  const { rows: all } = await c.query(
    "select id, fr, en, theme, respell, gender from content_items where respell is not null and status='published'");
  const EL = /(?<![\p{L}\p{N}-])(j|n|m|t|s|qu)['’](y|en)(?![\p{L}\p{N}'’-])/iu;
  const YEN = /(?<![\p{L}\p{N}'’-])y\s+en(?![\p{L}\p{N}'’-])/iu;
  const hits = all.filter((r) => EL.test(r.fr) || YEN.test(r.fr));
  for (const r of hits) {
    console.log(`${hasPlainNasalFor(r.fr, r.respell) ? 'FLAGGED ' : 'clean   '} ${r.id.padEnd(42)} ${r.theme.padEnd(22)} « ${r.fr} »`);
    console.log(`         [${r.respell}]${r.gender ? `  GENDER=${r.gender}` : ''}`);
  }
  console.log(`\n  ${hits.length} rows, ${hits.filter((r) => hasPlainNasalFor(r.fr, r.respell)).length} FLAGGED\n`);

  /* ── The `en France` and `en + duration` population ────────────────────── */
  console.log('══ en + NOUN, the preposition, respelled ═════════════════════\n');
  const prep = all.filter((r) => /(?<![\p{L}\p{N}'’-])en\s+(France|Espagne|Italie|Belgique|Allemagne|Suisse|deux|une|trois|train|avion|retard|avance)(?![\p{L}\p{N}'’-])/iu.test(r.fr));
  for (const r of prep.slice(0, 22)) {
    console.log(`${hasPlainNasalFor(r.fr, r.respell) ? 'FLAGGED ' : 'clean   '} ${r.id.padEnd(42)} « ${r.fr.slice(0, 48)} »  [${String(r.respell).slice(0, 34)}]${r.gender ? ` g=${r.gender}` : ''}`);
  }
  console.log(`\n  ${prep.length} rows\n`);

  c.release();
  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
