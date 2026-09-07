// a2.33 « Les démonstratifs » — the UNSEEN-NOUN probe.
//
// Cited by `A2-33-BUILD-REPORT.md` §2 and corpus §J. `s08-unseen` hands the
// learner a noun the lesson never taught and requires `cet`, so that noun has
// to be masculine AND vowel-initial AND absent from every row the lesson
// imports, or the mission leaks its own answer.
//
// Checks each candidate against EVERY published row rather than against the
// respelled subset — an earlier version filtered on `respell is not null` and
// reported `immeuble` as clean when `fr.a1.mots-essentiels.159`, which THIS
// LESSON IMPORTS, carries « cet immeuble ». `aéroport` survived: 43 rows, six
// headwords, all masculine, ZERO carrying any demonstrative.
//
// Also dumps the b1 pronoun block and the adjective-evidence candidates in
// full, which is where the import list in corpus §F came from.
//
// TRACKED because corpus §J's eight rejected candidates each name the row that
// disqualified them, and this is what produced them.
import './env';
type R = { id: string; fr: string; en: string; respell: string | null; kind: string; theme: string; level: string; gender: string | null; drills: unknown };
const hasWord = (h: string, n: string): boolean => {
  const a = h.toLowerCase().normalize('NFC'); const b = n.toLowerCase().normalize('NFC');
  let from = 0;
  for (;;) { const i = a.indexOf(b, from); if (i < 0) return false;
    const before = i === 0 ? ' ' : a[i-1]; const after = a[i+b.length] ?? ' ';
    if (!/[a-zà-ÿœæ]/.test(before) && !/[a-zà-ÿœæ]/.test(after)) return true; from = i+1; }
};
const DEM = ['ce','cet','cette','ces','celui','celle','ceux','celles'];
async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const { rows } = await c.query<R>(`select id, fr, en, respell, kind, theme, level, gender, drills from content_items where status='published'`);
    console.log(`ALL published rows: ${rows.length}\n`);
    console.log('=== UNSEEN CANDIDATES, checked against EVERY published row ===');
    for (const bare of ['orage','aeroport','aéroport','ascenseur','escalier','oreiller','anniversaire','immeuble','hopital','hôpital','arbre','exercice','ordinateur','imperméable','endroit']) {
      const withDem = rows.filter((r) => hasWord(r.fr, bare) && DEM.some((d) => hasWord(r.fr, d)));
      const any = rows.filter((r) => hasWord(r.fr, bare));
      const heads = rows.filter((r) => r.kind !== 'sentence' && hasWord(r.fr, bare));
      console.log(`  ${bare.padEnd(14)} rows=${String(any.length).padEnd(4)} with-a-demonstrative=${String(withDem.length).padEnd(3)} headwords=${heads.length}`);
      for (const w of withDem.slice(0, 3)) console.log(`      ! ${w.id}  ${w.fr}`);
    }
    console.log('\n=== THE b1 PRONOUN BLOCK, full rows ===');
    for (const r of rows.filter((x) => /^fr\.b1\.pronoms-essentiels\.0(3[6-9]|4\d|5[01])$/.test(x.id)).sort((a,b)=>a.id.localeCompare(b.id))) {
      console.log(`  ${r.id}  ${r.kind.padEnd(8)} respell=${String(r.respell)}  gender=${r.gender ?? '-'}  drills=${String(r.drills)}`);
      console.log(`      fr="${r.fr}"  en="${r.en}"`);
    }
    console.log('\n=== ADJECTIVE-EVIDENCE IMPORT CANDIDATES ===');
    const cand = ['fr.a2.questions-du-quotidien.053','fr.a2.description-personnes-objets.005','fr.a1.description-personnes-objets.080','fr.a1.description-personnes-objets.098','fr.a1.nombres.076','fr.sons.voyelles.441','fr.a1.questions-du-quotidien.009','fr.a1.questions.048','fr.a2.comparaisons.069','fr.a2.jardinage.041','fr.a1.mots-essentiels.192','fr.a2.entraide.039','fr.a1.mots-essentiels.159','fr.a1.noms-essentiels.041','fr.a2.description-personnes-objets.015','fr.a2.description-personnes-objets.016','fr.a1.rencontres.023','fr.a2.animaux-domestiques.023','fr.a2.bricolage.019','fr.a1.adjectifs-essentiels.102','fr.a2.vetements.053','fr.a2.cinema.005','fr.a1.objets.021'];
    for (const id of cand) {
      const r = rows.find((x) => x.id === id);
      if (!r) { console.log(`  ${id}  MISSING`); continue; }
      console.log(`  ${r.id.padEnd(42)} ${r.level} ${r.kind.padEnd(8)} g=${(r.gender ?? '-').padEnd(2)} [${String(r.drills).replace(/[{}]/g,'')}]`);
      console.log(`      "${r.fr}"  /  "${r.en}"  respell=${r.respell ?? '(none)'}`);
    }
  } finally { c.release(); await pool.end(); }
}
main();
