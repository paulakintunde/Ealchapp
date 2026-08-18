// a2.33 « Les démonstratifs » — the RESPELLING probe.
//
// Cited by `A2-33-BUILD-REPORT.md` §2.6. It settles whether `ce` and `ceux`
// sharing `SUH` is a defect, and it is not: `A1-BUILD-INVARIANTS.md` §3 says
// the house writes /ø œ/ as `EU`, and measured across all published rows
// **1,882 respellings contain `UH` against 16 for `EU`** (deux DUH, vieux
// VYUH, peu PUH, bleu BLUH, mieux MYUH, eux UH). `RESPELL-CONVENTION.md`
// already says « EU / UH », i.e. both; the invariants quote half of it.
//
// Prints every /ø/ headword with its respelling, every respelling of the eight
// demonstratives, and the unseen-noun candidate scan.
//
// TRACKED because the report leans on its numbers. Re-run before repairing
// anything in that family.
import './env';
type R = { id: string; fr: string; respell: string | null; kind: string; theme: string; level: string; gender: string | null; en: string };
async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const { rows } = await c.query<R>(`select id, fr, en, respell, kind, theme, level, gender from content_items where status='published' and respell is not null`);
    // How does the house respell /ø/ in a word-final -eux / -eu / -eut?
    console.log('=== HEADWORD ROWS ENDING IN -eux / -eu / -eut / -eux, with their respelling ===');
    const targets = ['deux','ceux','eux','mieux','vieux','peu','bleu','jeu','feu','veut','peut','yeux','cheveux','heureux','nombreux','sérieux','delicieux','délicieux','dangereux','nerveux','joyeux','curieux','mieux','milieu','lieu','adieu','européen'];
    for (const t of targets) {
      const hits = rows.filter((r) => r.kind !== 'sentence' && r.fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des |du )/,'').trim() === t);
      if (!hits.length) continue;
      for (const h of hits) console.log(`  ${h.fr.padEnd(16)} ${String(h.respell).padEnd(22)} ${h.id}`);
    }
    console.log('\n=== EVERY respelling of a bare `ceux` / `ce` / `celle` / `celles` / `cet` / `cette` / `ces` row ===');
    for (const w of ['ce','cet','cette','ces','celui','celle','ceux','celles','celui-ci','celle-là','ceux-ci','celles-là']) {
      const hits = rows.filter((r) => r.fr.toLowerCase() === w);
      for (const h of hits) console.log(`  ${h.fr.padEnd(12)} ${String(h.respell).padEnd(18)} ${h.kind.padEnd(8)} ${h.id}`);
      const none = rows.filter((r) => r.fr.toLowerCase() === w).length === 0;
      if (none) console.log(`  ${w.padEnd(12)} (no respelled row)`);
    }
    console.log('\n=== SUH vs SEU vs EU: how many respellings contain each token ===');
    const cnt = (re: RegExp) => rows.filter((r) => re.test(r.respell ?? '')).length;
    console.log('  contains "EU" (uppercase, word-ish):', cnt(/(^|[^A-Za-zÀ-ÿ])EU/));
    console.log('  contains "UH":', cnt(/UH/));
    console.log('  respellings that are exactly SUH:', rows.filter(r=>r.respell==='SUH').map(r=>`${r.fr}(${r.id})`).join(', '));
    console.log('  respellings that are exactly SEU:', rows.filter(r=>r.respell==='SEU').map(r=>`${r.fr}(${r.id})`).join(', '));

    console.log('\n=== UNSEEN CANDIDATES: masculine vowel-initial nouns, and whether any demonstrative row carries them ===');
    for (const n of ["l'orage","un orage","l'aéroport","l'ascenseur","l'imperméable","l'oreiller","l'escalier","l'ordinateur","l'appareil","l'oiseau","l'anniversaire","l'immeuble","l'exercice","l'endroit","l'exemple","l'arbre","l'appartement","l'hôpital","l'article","l'examen"]) {
      const bare = n.replace(/^(le |la |les |l'|un |une |des )/,'');
      const head = rows.filter((r)=>r.kind!=='sentence' && r.fr.toLowerCase().replace(/^(le |la |les |l'|un |une |des )/,'')===bare);
      const withDem = rows.filter((r)=>/\b(ce|cet|cette|ces|celui|celle|ceux|celles)\b/i.test(r.fr) && r.fr.toLowerCase().includes(bare));
      console.log(`  ${bare.padEnd(16)} headwords=${head.length}${head.length?` [${head.map(h=>h.id+' '+h.respell+' g='+(h.gender??'-')).join(' | ')}]`:''}  rows-with-a-demonstrative=${withDem.length}`);
    }
  } finally { c.release(); await pool.end(); }
}
main();
