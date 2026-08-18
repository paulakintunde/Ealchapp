// a2.33 « Les démonstratifs » — the PRE-FLIGHT probe.
//
// Cited by `A2-33-BUILD-REPORT.md` §1 and §2.1 as the evidence for the finding
// that reshaped the build: the prompt called the pronoun evidence thin
// (`celui-ci` 3, `celle-là` 0) and it is 104 published rows, sixteen of them a
// complete teaching block sitting in this lesson's own home theme AT b1 —
// which is why an a2-shaped probe never saw it.
//
// Also prints the by-level split, the adjective evidence per form, the `ce`
// vs `ce sont` disambiguation, the eight headwords in full, and the drill
// signatures of `fr.a2.pronoms-essentiels`.
//
// TRACKED rather than thrown away, the same way `_a2_preflight.ts` and
// `_a2_audit_tail.ts` are: a report that cites a probe nobody else has is a
// report whose evidence cannot be re-run. Re-run this before trusting any
// number in §1 or §2 — the corpus moves.
import './env';
import { describeTarget } from './env';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const hasWord = (h: string, n: string): boolean => {
  const a = h.toLowerCase().normalize('NFC'); const b = n.toLowerCase().normalize('NFC');
  let from = 0;
  for (;;) {
    const i = a.indexOf(b, from); if (i < 0) return false;
    const before = i === 0 ? ' ' : a[i - 1];
    const after = a[i + b.length] ?? ' ';
    if (!/[a-zà-ÿœæ]/.test(before) && !/[a-zà-ÿœæ]/.test(after)) return true;
    from = i + 1;
  }
};

type R = { id: string; fr: string; en: string; respell: string | null; kind: string; level: string; theme: string; drills: unknown; gender: string | null };
const drillsOf = (v: unknown): string[] =>
  Array.isArray(v) ? v as string[] : String(v ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

async function main() {
  console.log(`postgres: ${describeTarget()}\n`);
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const all = await c.query<R>(`select id, fr, en, respell, kind, level, theme, drills, gender from content_items where status='published'`);
    const rows = all.rows;
    console.log(`published rows: ${rows.length}\n`);

    // 1. Every row containing a demonstrative pronoun, anywhere.
    const PRONOUNS = ['celui', 'celle', 'ceux', 'celles', 'celui-ci', 'celui-là', 'celle-ci', 'celle-là', 'ceux-ci', 'ceux-là', 'celles-ci', 'celles-là'];
    console.log('=== EVERY ROW CARRYING A DEMONSTRATIVE PRONOUN ===');
    const seen = new Set<string>();
    for (const r of rows) {
      if (!PRONOUNS.some((p) => hasWord(r.fr, p))) continue;
      if (seen.has(r.id)) continue; seen.add(r.id);
      console.log(`  ${r.id.padEnd(42)} ${r.level} ${r.kind.padEnd(8)} [${drillsOf(r.drills).join('/')}]  ${r.fr}`);
    }
    console.log(`  TOTAL ${seen.size}\n`);

    // 2. Level breakdown of the pronoun rows
    const byLevel: Record<string, number> = {};
    for (const id of seen) { const r = rows.find((x) => x.id === id)!; byLevel[r.level] = (byLevel[r.level] ?? 0) + 1; }
    console.log('  by level:', JSON.stringify(byLevel), '\n');

    // 3. The adjective evidence, per form, with drills, restricted to a1/a2/sons
    for (const form of ['ce', 'cet', 'cette', 'ces']) {
      const hits = rows.filter((r) => r.kind === 'sentence' && hasWord(r.fr, form));
      const low = hits.filter((r) => ['a1', 'a2', 'sons'].includes(r.level));
      console.log(`=== "${form}" as a sentence word: ${hits.length} rows, ${low.length} at a1/a2/sons ===`);
      for (const r of low.slice(0, 26)) {
        console.log(`  ${r.id.padEnd(44)} ${r.level} [${drillsOf(r.drills).join('/')}]  ${r.fr}`);
      }
      if (low.length > 26) console.log(`  … +${low.length - 26} more`);
      console.log('');
    }

    // 4. `ce` + noun vs `ce` in c'est / ce sont: how much of the "ce" evidence is impersonal
    const ceRows = rows.filter((r) => r.kind === 'sentence' && hasWord(r.fr, 'ce'));
    const ceSont = ceRows.filter((r) => /\bce sont\b/i.test(r.fr));
    console.log(`=== "ce" disambiguation ===`);
    console.log(`  rows with bare word "ce": ${ceRows.length}`);
    console.log(`  of which "ce sont": ${ceSont.length}`);
    console.log(`  demonstrative-adjective "ce" (ce + noun): ${ceRows.length - ceSont.length}\n`);

    // 5. The eight headwords, full row dump
    console.log('=== THE EIGHT HEADWORDS, FULL ROWS ===');
    for (const id of ['fr.sons.mots-essentiels.089','fr.sons.mots-essentiels.090','fr.sons.mots-essentiels.091','fr.sons.mots-essentiels.092','fr.sons.mots-essentiels.105','fr.sons.mots-essentiels.106','fr.sons.mots-essentiels.107','fr.sons.mots-essentiels.108']) {
      const r = rows.find((x) => x.id === id);
      if (!r) { console.log(`  ${id}  MISSING`); continue; }
      console.log(`  ${r.id}  fr="${r.fr}" en="${r.en}" respell="${r.respell}" kind=${r.kind} level=${r.level} gender=${r.gender ?? '-'} drills=[${drillsOf(r.drills).join('/')}]`);
      if (r.respell) console.log(`      hasPlainNasalFor -> ${hasPlainNasalFor(r.fr, r.respell)}`);
    }
    console.log('');

    // 6. pronoms-essentiels a2 tail, so I can see what neighbours look like
    const pe = rows.filter((r) => r.theme === 'pronoms-essentiels' && r.id.startsWith('fr.a2.'));
    console.log(`=== fr.a2.pronoms-essentiels: ${pe.length} rows. Last 12: ===`);
    for (const r of pe.sort((a, b) => a.id.localeCompare(b.id)).slice(-12)) {
      console.log(`  ${r.id}  ${r.kind.padEnd(8)} [${drillsOf(r.drills).join('/')}] gender=${r.gender ?? '-'}  ${r.fr}`);
    }
    console.log('');
    // drill signature spread in the theme
    const sig: Record<string, number> = {};
    for (const r of pe) { const k = drillsOf(r.drills).sort().join('+'); sig[k] = (sig[k] ?? 0) + 1; }
    console.log('  drill signatures in fr.a2.pronoms-essentiels:', JSON.stringify(sig, null, 0), '\n');
    const gendered = pe.filter((r) => r.gender);
    console.log(`  gendered rows in fr.a2.pronoms-essentiels: ${gendered.length}\n`);
  } finally { c.release(); await pool.end(); }
}
main();
