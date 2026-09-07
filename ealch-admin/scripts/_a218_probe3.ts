/* a2.18 pre-flight, third pass. The frame words through the REAL dicteeMode,
 * the respelling candidates through the REAL checker, and the import
 * candidates read for the tie glyph and their drills.
 *
 *     pnpm tsx scripts/_a218_probe3.ts
 */
import './env';
import { Pool } from 'pg';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const CANDIDATES = [
  "J'habite ici depuis trois ans.",
  'Il pleut depuis hier.',
  'Il tousse depuis hier.',
  'Je pars dans dix minutes.',
  'Il part dans une heure.',
  'Il finit en une heure.',
  'Je finis en deux heures.',
  'Il travaille depuis hier.',
  'depuis trois ans',
  'pendant une heure',
  'il y a une heure',
  'dans dix minutes',
  'en deux heures',
  'il y a trois jours',
  'Je travaille pendant deux heures.',
  'On mange pendant une heure.',
  'Il dort pendant deux heures.',
  'Elle habite ici depuis mars.',
  'Il pleut depuis ce matin.',
  'Je suis ici depuis mars.',
  'Tu es ici depuis quand ?',
  'Depuis quand es-tu ici ?',
  'Il y a un problème.',
  'Il y a deux jours.',
  'Le film commence dans dix minutes.',
];

const RESPELLS: Array<[string, string]> = [
  ['pendant', 'pahn-DAHⁿ'],
  ['pendant', 'pahⁿ-DAHN'],
  ['pendant', 'pahⁿ-DAHⁿ'],
  ['en', 'AHⁿ'],
  ['en', 'ahⁿ'],
  ['dans', 'DAHⁿ'],
  ['dans', 'dahⁿ'],
  ['il y a', 'EEL EE AH'],
  ['il y a', 'eel ee ah'],
  ['depuis', 'duh-PWEE'],
  ['trois ans', 'trwah-Zahⁿ'],
  ['deux heures', 'deu-ZEUR'],
  ['dix minutes', 'dee mee-NÜT'],
  ['une heure', 'ün UHR'],
  ['trois jours', 'trwah ZHOOR'],
  ['un problème', 'uhⁿ proh-BLEHM'],
  ['maintenant', 'mahⁿt-NAHⁿ'],
  ['longtemps', 'lohⁿ-TAHⁿ'],
  ['quand', 'KAHⁿ'],
  ["J'habite ici depuis trois ans.", 'zha-BEET ee-SEE duh-PWEE trwah-Zahⁿ'],
];

async function main() {
  console.log('### 1. dicteeMode THROUGH THE REAL FUNCTION');
  for (const s of CANDIDATES) {
    const m = dicteeMode(s);
    console.log(`  ${m === 'letters' ? 'LETTERS' : 'words  '}  ${String(letterCount(s)).padStart(2)}  ${s}`);
  }

  console.log('\n### 2. RESPELLINGS THROUGH hasPlainNasalFor');
  for (const [fr, re] of RESPELLS) {
    console.log(`  ${hasPlainNasalFor(fr, re) ? 'FLAGGED' : 'clean  '}  ${fr.padEnd(32)} ${re}`);
  }

  console.log('\n### 3. IMPORT CANDIDATES: tie glyph, respell, drills');
  const ids = [
    'fr.sons.jours-et-mois.081', 'fr.sons.alphabet.414', 'fr.sons.mots-essentiels.027',
    'fr.sons.mots-essentiels.028', 'fr.sons.mots-essentiels.013', 'fr.sons.mots-essentiels.088',
    'fr.sons.mots-essentiels.018', 'fr.a2.prepositions-essentielles.006',
    'fr.a2.prepositions-essentielles.005', 'fr.a1.temps-et-frequence.035',
    'fr.a1.temps-et-frequence.086', 'fr.a2.temps-et-frequence.039',
    'fr.a2.heure-et-date.108', 'fr.a1.faux-amis.048', 'fr.a1.mots-essentiels.051',
    'fr.a2.symptomes.006', 'fr.a1.musique.050', 'fr.a1.nombres.060',
    'fr.a2.heure-et-date.061', 'fr.b1.heure-et-date.024', 'fr.a1.la-ville.170',
    'fr.a2.heure-et-date.113', 'fr.a1.questions.024', 'fr.sons.questions.049',
    'fr.a1.maison.005', 'fr.a1.nombres.048', 'fr.sons.nasales.029',
    'fr.sons.nasales.030', 'fr.sons.nasales.039', 'fr.a1.prepositions-essentielles.088',
    'fr.a1.prepositions-essentielles.093', 'fr.a2.prepositions-essentielles.036',
    'fr.a2.recits-au-passe.118', 'fr.a2.temps-et-frequence.099', 'fr.b1.recits-au-passe.109',
    'fr.a1.temps-et-frequence.087', 'fr.a1.temps-et-frequence.021', 'fr.a2.matieres.010',
    'fr.a2.musique.004', 'fr.a1.pronoms-essentiels.083', 'fr.a1.corps.210',
    'fr.a2.presentation-personnelle.004', 'fr.a1.rp-identite.008',
  ];
  const { rows } = await pool.query(
    `select id, fr, en, respell, kind, theme, level, status, drills, gender
       from content_items where id = any($1::text[]) order by id`, [ids],
  );
  const seen = new Set<string>();
  for (const r of rows) {
    seen.add(r.id);
    const tie = String(r.respell ?? '').includes('‿') ? ' ⚠TIE' : '';
    const nasal = r.respell ? (hasPlainNasalFor(r.fr, r.respell) ? ' ⚠NASAL' : '') : ' ⚠NO-RESPELL';
    console.log(`  ${r.id.padEnd(38)} ${String(r.kind).padEnd(9)} g=${r.gender ?? '-'} ${String(r.drills ?? '')}${tie}${nasal}`);
    console.log(`      ${r.fr}`);
    console.log(`      ${r.respell ?? '(none)'}   |  ${r.en ?? ''}`);
  }
  const missing = ids.filter((i) => !seen.has(i));
  if (missing.length) console.log(`  MISSING: ${missing.join(', ')}`);

  await pool.end();
}

main().catch((e) => { console.error(e); process.exit(1); });
