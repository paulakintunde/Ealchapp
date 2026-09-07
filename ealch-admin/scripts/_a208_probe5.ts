// a2.08 pre-flight, round 5: house respellings for every word my authored rows
// use, read OFF published rows rather than invented (a2.15 §13 precedent).
import './env';
import { hasPlainNasalFor, hasPlainNasal } from '../../ealch-v2/src/content/density.logic.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';

const WORDS = [
  'il', 'elle', 'est', 'sont', 'moi', 'jardin', 'la maison', 'le quartier', 'un collègue',
  'travailler', 'parler', 'cuisiner', 'la rue', 'une avenue', 'long', 'longue', 'fort',
  'le thé', 'un café', 'un livre', 'un film', 'le froid', 'intéressant', 'un bâtiment',
  'une fenêtre', 'un arbre', 'un parc', 'autre', 'hier', 'vite', 'grand', 'grande',
];

async function main() {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const all = await c.query<{ id: string; fr: string; theme: string; kind: string; respell: string | null }>(
      `select id, fr, theme, kind, respell from content_items where status='published' and respell is not null`);
    console.log('=== HOUSE RESPELLINGS, read off published rows ===');
    for (const w of WORDS) {
      const bare = w.replace(/^(le |la |les |l'|un |une |des )/, '');
      const rows = all.rows.filter((r) => r.kind !== 'sentence' && (r.fr.toLowerCase() === w || r.fr.toLowerCase() === bare));
      const vals = [...new Set(rows.map((r) => r.respell))];
      console.log(`  ${w.padEnd(16)} ${vals.length ? vals.join(' | ') : 'NO HEADWORD RESPELLING'}   ${rows.slice(0, 2).map((r) => r.id).join(' ')}`);
    }

    console.log('\n=== SENTENCE RESPELLINGS CONTAINING MY FRAME WORDS ===');
    for (const needle of ['plus grand', 'moins ', 'aussi ', 'meilleur', 'mieux', 'jardin', 'quartier', 'collègue', 'travaille', 'cuisine', 'avenue', 'fenêtre']) {
      const rows = all.rows.filter((r) => r.fr.toLowerCase().includes(needle.toLowerCase())).slice(0, 3);
      console.log(`  -- ${needle}`);
      for (const r of rows) console.log(`     ${r.id.padEnd(34)} "${r.fr}" -> ${r.respell}`);
    }

    console.log('\n=== dicteeMode ON MY FIVE DICTÉE TARGETS ===');
    for (const s of ['Il est plus grand.', 'Il est moins grand.', 'Il est le plus grand.',
      'Il travaille mieux.', 'Il est meilleur.', 'Il est aussi grand.', 'Il est plus grand que moi.']) {
      console.log(`  ${String(dicteeMode(s)).padEnd(8)} "${s}"`);
    }

    console.log('\n=== NASAL CHECK ON EVERY RESPELLING I INTEND TO AUTHOR ===');
    const CAND: Array<[string, string]> = [
      ['Il est plus grand que moi.', 'EEL EH plü GRAHⁿ kuh MWAH'],
      ['Il est moins grand que moi.', 'EEL EH mwehⁿ GRAHⁿ kuh MWAH'],
      ['Il est aussi grand que moi.', 'EEL EH oh-see GRAHⁿ kuh MWAH'],
      ['Il est plus grand.', 'EEL EH plü GRAHⁿ'],
      ['Il est moins grand.', 'EEL EH mwehⁿ GRAHⁿ'],
      ['Il est le plus grand.', 'EEL EH luh plü GRAHⁿ'],
      ['Il travaille mieux.', 'EEL tra-VAHY MYUH'],
      ['Il est meilleur.', 'EEL EH meh-YUHR'],
      ["C'est le plus grand jardin du quartier.", 'SEH luh plü GRAHⁿ zhar-DEHⁿ dü kar-TYAY'],
      ["C'est la plus grande maison du quartier.", 'SEH la plü GRAHⁿD meh-ZOHⁿ dü kar-TYAY'],
      ['Ce sont les plus grands jardins du quartier.', 'suh SOHⁿ lay plü GRAHⁿ zhar-DEHⁿ dü kar-TYAY'],
      ['Ce sont les plus grandes maisons du quartier.', 'suh SOHⁿ lay plü GRAHⁿD meh-ZOHⁿ dü kar-TYAY'],
      ["Ce jardin est plus grand que l'autre.", 'suh zhar-DEHⁿ eh plü GRAHⁿ kuh LOHTR'],
      ['Il est meilleur que son collègue.', 'EEL EH meh-YUHR kuh sohⁿ ko-LEG'],
      ['mieux', 'MYUH'],
      ['le mieux', 'luh MYUH'],
      ['Elle parle mieux que moi.', 'EHL PARL MYUH kuh MWAH'],
      ['Elle cuisine mieux que moi.', 'EHL kwee-ZEEN MYUH kuh MWAH'],
      ["Cette rue est moins longue que l'avenue.", 'set RÜ eh mwehⁿ LOHⁿG kuh lav-NÜ'],
      ["Cette rue est aussi longue que l'avenue.", 'set RÜ eh oh-see LOHⁿG kuh lav-NÜ'],
      ['Ce livre est aussi intéressant que le film.', 'suh LEEVR eh oh-see ahⁿ-tay-reh-SAHⁿ kuh luh FEELM'],
      ["Il fait aussi froid qu'hier.", 'EEL FEH oh-see FRWAH kee-YEHR'],
      ['Ce café est aussi fort que le thé.', 'suh ka-FAY eh oh-see FOR kuh luh TAY'],
      ['moins grand', 'mwehⁿ GRAHⁿ'],
      ['aussi cher', 'oh-see SHEHR'],
      ['moins rapide', 'mwehⁿ ra-PEED'],
      ['aussi rapide', 'oh-see ra-PEED'],
      ['plus mauvais', 'plü moh-VEH'],
      ['plus vite', 'plü VEET'],
      ['moins vite', 'mwehⁿ VEET'],
      ['aussi vite', 'oh-see VEET'],
      // the repair table
      ['grand', 'GRAHN'], ['grand', 'GRAHⁿ'],
      ['le bien', 'BYAN'], ['le bien', 'BYAⁿ'], ['le bien', 'BYEHⁿ'],
      ['le bien', 'luh byahn'], ['le bien', 'luh byahⁿ'], ['le bien', 'luh BYEHⁿ'],
      ['moins', 'MWAN'], ['moins', 'MWAⁿ'], ['moins', 'MWEHⁿ'],
      ['moins vite', 'mwan VEET'], ['moins vite', 'mwaⁿ VEET'],
    ];
    for (const [fr, rs] of CAND) {
      const a = hasPlainNasal(rs);
      const b = hasPlainNasalFor(fr, rs);
      console.log(`  ${b ? 'FLAGGED ' : '   ok   '} ${a ? '(bare)' : '      '}  ${rs.padEnd(46)} <- ${fr}`);
    }
  } finally {
    c.release();
    await pool.end();
  }
}
main();
