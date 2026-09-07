// Which themes can a topic actually be written against?
//
// TOPICS rule 3: the `Theme` column resolves against `content_themes`, and that
// is how `targetItemIds` gets populated from real corpus items. A block whose
// theme has no published items at the needed band is a block whose misses
// cannot route back to the SRS — the item is still answerable, but getting it
// wrong teaches the learner nothing, which is the whole point of the exam
// feeding the review queue.
//
// So a theme is only usable for a topic at bands X-Y if it HAS published items
// at those bands. Prints the fit, so authoring draws from a checked vocabulary
// instead of plausible-sounding slugs.
import './env';

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const rows = await c.query<{ theme: string; level: string; n: number }>(
      `select theme, level::text as level, count(*)::int as n
         from content_items where status = 'published'
        group by 1, 2`
    );
    const known = await c.query<{ slug: string }>(`select slug from content_themes`);
    const valid = new Set(known.rows.map((r) => r.slug));

    const by = new Map<string, Record<string, number>>();
    for (const r of rows.rows) {
      if (!by.has(r.theme)) by.set(r.theme, {});
      by.get(r.theme)![r.level] = r.n;
    }

    // TEF sits on A2-C1, so those are the bands a topic can be pitched at.
    const BANDS = ['a1', 'a2', 'b1', 'b2', 'c1'];
    const usable = [...by.entries()]
      .filter(([t]) => valid.has(t))
      .map(([theme, lv]) => ({ theme, lv, total: BANDS.reduce((s, b) => s + (lv[b] ?? 0), 0) }))
      .filter((r) => r.total > 0)
      .sort((a, b) => b.total - a.total);

    console.log(`\n  ${usable.length} themes carry published items (of ${valid.size} in content_themes)\n`);
    console.log(`  ${'theme'.padEnd(34)} ${BANDS.map((b) => b.toUpperCase().padStart(5)).join('')}   total`);
    for (const r of usable) {
      console.log(
        `  ${r.theme.padEnd(34)} ${BANDS.map((b) => String(r.lv[b] ?? 0).padStart(5)).join('')}   ${r.total}`
      );
    }

    // The ones a topic must NOT name: in the catalogue but with nothing behind
    // them at any band.
    const empty = [...valid].filter((t) => !by.has(t)).sort();
    console.log(`\n  ${empty.length} theme(s) exist but carry NO published items — do not use:`);
    console.log(`    ${empty.join(', ') || '(none)'}`);

    // And the check that matters after an expansion: does every theme the topic
    // bank NAMES actually resolve? A slug that looks plausible but is not in
    // content_themes routes no targetItemIds at all, and nothing else would say
    // so until a paper was built on it.
    const { readFileSync } = await import('node:fs');
    const { resolve, dirname } = await import('node:path');
    const { fileURLToPath } = await import('node:url');
    const here = dirname(fileURLToPath(import.meta.url));
    for (const file of ['TOPICS-tef-canada.md', 'TOPICS-tcf-canada.md']) {
      let md: string;
      try {
        md = readFileSync(resolve(here, '../exam-blueprints', file), 'utf8');
      } catch {
        continue;
      }
      // Column-position-agnostic on purpose: the TEF table is
      // ID|Situation|Bands|Theme|Suits and the TCF one is ID|Situation|Theme|Suits,
      // because TCF's band is its position on the ramp rather than a property of
      // the situation. Anchoring on the backticked slug reads both, and a fixed
      // column index silently reported TCF as having no themes at all.
      const used = new Map<string, number>();
      for (const line of md.split('\n')) {
        if (!/^\|\s*(?:TEF|TCF)-\d+\s*\|/.test(line)) continue;
        const slug = line.match(/`([a-z0-9-]+)`/);
        if (!slug) continue;
        used.set(slug[1]!, (used.get(slug[1]!) ?? 0) + 1);
      }
      const unknown = [...used.keys()].filter((t) => !valid.has(t));
      const barren = [...used.keys()].filter((t) => valid.has(t) && !by.has(t));
      console.log(`\n  ${file}: names ${used.size} distinct theme(s) across ${[...used.values()].reduce((a, b) => a + b, 0)} situations`);
      console.log(`    not in content_themes : ${unknown.join(', ') || 'none'}`);
      console.log(`    no published items    : ${barren.join(', ') || 'none'}`);
    }
    console.log('');
  } finally {
    c.release();
    await pool.end();
  }
}

main().catch((e) => { console.error(String(e)); process.exit(1); });
