// a2.08 pre-flight, round 3: the two hand-off lessons as SHIPPED, and the
// gender flags on rows a2.17 warned about.
import './env';

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const les = await c.query<{ slug: string; body: unknown; status: string }>(
      `select slug, body, status from content_units where kind='lesson' and slug in ('a2.17.l1','a2.03.l1','a2.16.l1','a2.32.l1')`,
    );
    for (const row of les.rows) {
      const b = row.body as Record<string, unknown>;
      console.log(`\n=== ${row.slug}  v${b.version} ${row.status} ===`);
      console.log(`  title: ${b.title} | sub: ${b.sub}`);
      console.log(`  sections: ${(b.sections as unknown[]).length}`);
      console.log(`  grammarIntroduced: ${JSON.stringify(b.grammarIntroduced)}`);
      console.log(`  grammarAssumed:    ${JSON.stringify(b.grammarAssumed)}`);
      console.log(`  reframe: ${JSON.stringify(b.reframe)}`);
      const s = JSON.stringify(b);
      for (const w of ['a2.08', 'mieux', 'meilleur', 'comparat', 'Comparat', 'plus vite']) {
        const n = s.split(w).length - 1;
        if (n) console.log(`  MENTIONS "${w}": ${n}`);
      }
    }

    console.log('\n=== GENDER FLAGS ON ROWS I MIGHT IMPORT ===');
    const g = await c.query<{ id: string; fr: string; gender: string | null; kind: string; theme: string; respell: string | null }>(
      `select id, fr, gender, kind, theme, respell from content_items
       where id in ('fr.sons.voyelles.174','fr.b2.ethique.052','fr.b2.philosophie.084',
                    'fr.sons.adjectifs-essentiels.062','fr.sons.adjectifs-essentiels.063',
                    'fr.sons.mots-essentiels.140','fr.sons.mots-essentiels.141',
                    'fr.sons.mots-essentiels.045','fr.sons.mots-essentiels.051',
                    'fr.sons.nombres.098','fr.sons.nombres.099','fr.sons.muettes.060',
                    'fr.sons.mots-essentiels.126','fr.sons.expressions-utiles.099',
                    'fr.sons.faux-amis.024','fr.sons.muettes.002')
       order by id`,
    );
    for (const r of g.rows) console.log(`  ${r.id.padEnd(36)} gender=${String(r.gender ?? '-').padEnd(3)} kind=${r.kind.padEnd(9)} theme=${r.theme.padEnd(22)} "${r.fr}" -> ${r.respell ?? '-'}`);

    console.log('\n=== HOUSE RENDERING OF /ɛ̃/ IN fr.sons.nasales.* ===');
    const n = await c.query<{ id: string; fr: string; respell: string | null }>(
      `select id, fr, respell from content_items where theme='nasales' and status='published' and respell is not null order by id`,
    );
    const ehn = n.rows.filter((r) => /EHⁿ|ehⁿ|AHⁿ|ahⁿ|UHⁿ|uhⁿ|OHⁿ|ohⁿ/.test(r.respell ?? ''));
    const buckets: Record<string, string[]> = {};
    for (const r of ehn) {
      for (const m of (r.respell ?? '').matchAll(/[A-Za-zÀ-ÿ]*[Hh]ⁿ/g)) {
        const k = m[0].slice(-3).toUpperCase();
        (buckets[k] ??= []).push(`${r.fr}=${r.respell}`);
      }
    }
    for (const k of Object.keys(buckets).sort()) console.log(`  ${k}  n=${buckets[k].length}   e.g. ${buckets[k].slice(0, 4).join(' | ')}`);

    console.log('\n=== ROWS WHOSE fr CONTAINS a /ɛ̃/ SPELLING, house respell ===');
    for (const w of ['moins', 'le pain', 'la main', 'le train', 'plein', 'le matin', 'bien', 'rien', 'un', 'demain', 'la fin', 'vingt', 'le lapin', 'le vin', 'certain', 'américain', 'le jardin', 'le voisin']) {
      const rows = n.rows.filter((r) => r.fr.toLowerCase() === w);
      if (rows.length) console.log(`  ${w.padEnd(14)} ${rows.map((r) => `${r.respell}`).join(' | ')}`);
    }
    const anyMoins = await c.query<{ id: string; fr: string; respell: string | null; theme: string }>(
      `select id, fr, respell, theme from content_items where status='published' and respell is not null and fr ~* '(^|[^a-zà-ÿ])moins([^a-zà-ÿ]|$)' order by id`,
    );
    console.log('\n=== EVERY RESPELLED ROW CONTAINING "moins" ===');
    for (const r of anyMoins.rows) console.log(`  ${r.id.padEnd(36)} ${r.theme.padEnd(24)} "${r.fr}" -> ${r.respell}`);
  } finally {
    c.release();
    await pool.end();
  }
}
main();
