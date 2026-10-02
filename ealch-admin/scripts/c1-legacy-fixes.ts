/**
 * Two published legacy rows the C1 wave 3 authors refused on reading
 * (C1-BUILD-LOG, gate C1-2: Paul approved fixing both in the waves 2-3 import):
 *
 *   fr.c1.francais-professionnel-avance.160  « il y a fort à parier que » takes
 *     the indicative: « se fasse » becomes « se fera ». English unchanged.
 *   fr.b1.pronoms-essentiels.1590  « le moment auquel » is not standard; the
 *     B1 où/dont lesson teaches « le moment où ». IPA and respell follow.
 *
 * Each update is guarded on the current text, so a second run changes nothing.
 *
 *   pnpm tsx scripts/c1-legacy-fixes.ts           dry run, read only
 *   pnpm tsx scripts/c1-legacy-fixes.ts --apply   writes, in one transaction
 */
import './env';
import { Pool } from 'pg';

const APPLY = process.argv.includes('--apply');

const FIXES = [
  {
    id: 'fr.c1.francais-professionnel-avance.160',
    from: { fr: 'Il y a fort à parier que la réponse officielle se fasse encore attendre.' },
    to: { fr: 'Il y a fort à parier que la réponse officielle se fera encore attendre.' },
  },
  {
    id: 'fr.b1.pronoms-essentiels.1590',
    from: { fr: 'Le samedi matin est le moment auquel je peux venir.' },
    to: {
      fr: 'Le samedi matin est le moment où je peux venir.',
      ipa: '/lə sam.di ma.tɛ̃ ɛ lə mɔ.mɑ̃ u ʒə pø və.niʁ/',
      respell: 'luh sam-dee mah-TEHⁿ · eh luh moh-mahⁿ OO · zhuh puh vuh-NEER',
    },
  },
] as const;

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  console.log(`C1 LEGACY FIXES  ${APPLY ? 'APPLY' : 'DRY RUN, nothing will be written'}`);
  let changed = 0;
  try {
    await c.query(APPLY ? 'begin' : 'begin transaction read only');
    for (const f of FIXES) {
      const r = await c.query(`select fr, ipa, respell, audio_ref from content_items where id = $1`, [f.id]);
      const row = r.rows[0];
      if (!row) throw new Error(`${f.id}: not in content_items`);
      if (row.fr === f.to.fr) { console.log(`  ${f.id}: already fixed`); continue; }
      if (row.fr !== f.from.fr) throw new Error(`${f.id}: text is not what was reviewed:\n    ${row.fr}`);
      console.log(`  ${f.id}${row.audio_ref ? `  (audio_ref ${row.audio_ref})` : ''}`);
      for (const [k, v] of Object.entries(f.to)) console.log(`    ${k}: ${row[k]}\n      -> ${v}`);
      if (APPLY) {
        const to = f.to as Record<string, string>;
        await c.query(`update content_items set fr = $2, ipa = coalesce($3, ipa), respell = coalesce($4, respell), updated_at = now() where id = $1`,
          [f.id, to.fr, to.ipa ?? null, to.respell ?? null]);
      }
      changed++;
    }
    await c.query('commit');
    console.log(`\n  ${changed} row(s) ${APPLY ? 'updated' : 'would change'}.${APPLY ? '' : ' DRY RUN COMPLETE, nothing written.'}`);
  } catch (e) {
    await c.query('rollback').catch(() => {});
    throw e;
  } finally {
    c.release();
    await pool.end();
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
