// a2.08 audit: does the house respell the liaisons this lesson's frames create?
// `est aussi` is /ɛ.t‿o.si/ and `plus intéressant` is /ply.z‿ɛ̃.../, and this
// build's first version wrote neither.
import './env';

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const all = await c.query<{ id: string; fr: string; respell: string; theme: string }>(
      `select id, fr, respell, theme from content_items
        where status='published' and respell is not null and respell <> ''`);

    const show = (label: string, test: (fr: string) => boolean, limit = 14) => {
      console.log(`\n=== ${label} ===`);
      const rows = all.rows.filter((r) => test(r.fr.toLowerCase()));
      console.log(`  ${rows.length} respelled rows`);
      for (const r of rows.slice(0, limit)) console.log(`  ${r.id.padEnd(34)} "${r.fr}"\n${' '.repeat(38)}-> ${r.respell}`);
    };

    // `est` followed by a vowel: the t liaises.
    show('est + VOWEL (the t liaises)', (f) => /\best\s+[aeiouéèêàâîôûùïüh]/.test(f));
    // `plus` followed by a vowel: the s liaises as /z/.
    show('plus + VOWEL (the s liaises as z)', (f) => /\bplus\s+[aeiouéèêàâîôûùïüh]/.test(f));
    // `moins` followed by a vowel.
    show('moins + VOWEL', (f) => /\bmoins\s+[aeiouéèêàâîôûùïüh]/.test(f));
    // And the one this build already got right, as the control.
    show('des + VOWEL', (f) => /\bdes\s+[aeiouéèêàâîôûùïüh]/.test(f), 6);

    console.log('\n=== THIS BUILD\'S OWN ROWS WITH A LIAISON CONTEXT ===');
    const mine = all.rows.filter((r) => /^fr\.a2\.comparaisons\.1(3[3-9]|[4-6][0-9])$/.test(r.id));
    for (const r of mine) {
      const f = r.fr.toLowerCase();
      const hits: string[] = [];
      if (/\best\s+[aeiouéèêàâîôûùïüh]/.test(f)) hits.push('est+V');
      if (/\bplus\s+[aeiouéèêàâîôûùïüh]/.test(f)) hits.push('plus+V');
      if (/\bmoins\s+[aeiouéèêàâîôûùïüh]/.test(f)) hits.push('moins+V');
      if (/\bles\s+[aeiouéèêàâîôûùïüh]/.test(f)) hits.push('les+V');
      if (/\bsont\s+[aeiouéèêàâîôûùïüh]/.test(f)) hits.push('sont+V');
      if (hits.length) console.log(`  ${r.id}  [${hits.join(',')}]  "${r.fr}"\n      -> ${r.respell}`);
    }
  } finally {
    c.release();
    await pool.end();
  }
}
main();
