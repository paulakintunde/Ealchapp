/* a2.14 import selection and frame selection, measured before anything is
 * authored.
 *
 *   1. THE TWO FRAMES. a2.13 got all eighteen cells onto ONE frame. a2.14 cannot
 *      and must not: the complement is the thing being taught, so savoir and
 *      connaître take DIFFERENT frames by construction. Measure both columns
 *      through the real dicteeMode and find out which cells can be dictated.
 *   2. THE IMPORT CANDIDATES, field by field: gender (a1.03 hazard), respell
 *      (a card the learner cannot say), U+203F, drills.
 *   3. DUPLICATE `fr` IN THE TARGET THEME, computed the flashhub way.
 *   4. The corpus row that STATES THE SEMANTIC RULE IN FRENCH, which is reframe
 *      A, the one this build rejects.
 *
 *     pnpm tsx scripts/_a214_pick.ts
 */
import './env';
import { Pool } from 'pg';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';

const SAVOIR_COL = ['Je sais', 'Tu sais', 'Il sait', 'Nous savons', 'Vous savez', 'Ils savent'];
const CONN_COL = ['Je connais', 'Tu connais', 'Il connaît', 'Nous connaissons', 'Vous connaissez', 'Ils connaissent'];

const CANDIDATES = [
  'fr.sons.verbes-essentiels.009', // savoir
  'fr.sons.verbes-essentiels.048', // connaître
  'fr.sons.verbes-essentiels.006', // pouvoir
  'fr.sons.verbes-essentiels.088', // nager
  'fr.sons.verbes-essentiels.187', // reconnaître
  'fr.sons.verbes-essentiels.217', // paraître
  'fr.a1.routines.107',            // conduire, repaired by a2.13
  'fr.a1.routines.109',            // cuisiner
  'fr.a1.cuisine.029',             // cuisiner
  'fr.sons.muettes.004',           // Paris
  'fr.sons.verbes-essentiels.015', // parler
  'fr.sons.nasales.110',           // Tout le monde connaît le nom du champion.
  'fr.sons.voyelles.309',          // Il connaît la vraie raison de son retard ce matin.
  'fr.sons.elision.072',           // Je ne sais pas si c'est l'heure.
  'fr.sons.elision.033',           // je ne sais pas
  'fr.sons.expressions-utiles.105',// qui sait
  'fr.sons.expressions-utiles.228',// on ne sait jamais
  'fr.sons.liaisons.057',          // Ils se connaissent depuis vingt ans.  U+203F
  'fr.a1.verbes-du-quotidien.099', // Je sais nager.
  'fr.a1.verbes-essentiels.088',   // Je sais nager depuis mon enfance.
  'fr.a1.verbes-du-quotidien.045', // Je connais bien ce quartier.
  'fr.a1.pronoms-essentiels.086',  // Elle sait où il travaille.
  'fr.a1.verbes-essentiels.089',   // Tu sais où sont les clés.
  'fr.a2.collegues.009',           // the metalinguistic row: reframe A, in French
  'fr.a1.amis.005',                // Tu connais mon ami Paul ?
  'fr.a2.verbes-du-quotidien.041', // Nous savons que la réponse est correcte.
  'fr.a2.verbes-du-quotidien.042', // Nous connaissons ce restaurant depuis longtemps.
  'fr.a2.verbes-du-quotidien.078', // Connaissez-vous un bon restaurant près d'ici ?
  'fr.a1.musique.118',             // Vous connaissez cette mélodie ?
  'fr.a2.questions-du-quotidien.099', // Est-ce que tu connais cette chanson ?
  'fr.a1.verbes-essentiels.090',   // Il sait cuisiner très bien.
  'fr.a1.verbes-essentiels.092',   // Vous savez parler espagnol.
  'fr.a1.verbes-essentiels.093',   // Elles savent conduire depuis l'année dernière.
];

/** How flashhub-coverage.test.ts compares two rows in one theme. */
const strip = (s: string) => s.toLowerCase().replace(/^(le |la |les |l'|un |une |des |du |de la )/, '').trim();

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  /* ── 1. THE TWO FRAMES ─────────────────────────────────────────────────── */
  console.log('## 1. Frames, through the real dicteeMode (16-letter limit)\n');
  for (const [label, col, comps] of [
    ['savoir  ', SAVOIR_COL, ['nager', 'cuisiner', 'conduire', 'parler']],
    ['connaître', CONN_COL, ['Paris', 'Rome', 'Marie', 'ce film']],
  ] as const) {
    for (const comp of comps) {
      const rows = col.map((p) => `${p} ${comp}.`);
      const modes = rows.map((s) => dicteeMode(s));
      const letters = rows.map((s) => s.replace(/[^\p{L}]/gu, '').length);
      const nLetters = modes.filter((m) => m === 'letters').length;
      console.log(`  ${label} + ${String(comp).padEnd(10)}  ${nLetters}/6 in LETTERS   [${letters.join(' ')}]`);
      for (let i = 0; i < rows.length; i += 1) {
        console.log(`      ${modes[i] === 'letters' ? 'LETTERS' : ' words '} ${String(letters[i]).padStart(2)}  ${rows[i]}`);
      }
    }
  }

  /* the contrast pairs the dictée would actually test */
  console.log('\n  the CHOICE, as a dictée target:');
  for (const s of ['Je sais nager.', 'Je connais Paris.', 'Il sait nager.', 'Il connaît Paris.',
    'Je peux nager.', 'Tu connais Paris.', 'Nous savons nager.', 'Vous savez nager.',
    'Ils savent nager.', 'On connaît Paris.', 'Elle sait nager.', 'Je ne sais pas.']) {
    console.log(`    ${dicteeMode(s) === 'letters' ? 'LETTERS' : ' words '} ${String(s.replace(/[^\p{L}]/gu, '').length).padStart(2)}  ${s}`);
  }

  /* ── 2. THE CANDIDATES, FIELD BY FIELD ─────────────────────────────────── */
  console.log('\n## 2. Import candidates\n');
  const r = await c.query<Record<string, unknown>>(
    'select *, drills::text[] drills from content_items where id = any($1)', [CANDIDATES]);
  const by = new Map(r.rows.map((x) => [String(x.id), x]));
  for (const id of CANDIDATES) {
    const x = by.get(id);
    if (!x) { console.log(`  MISSING  ${id}`); continue; }
    const respell = String(x.respell ?? '');
    const flags = [
      x.gender ? `GENDER=${x.gender}` : '',
      respell ? '' : 'NO RESPELL',
      respell.includes('‿') ? 'U+203F' : '',
      x.status !== 'published' ? `status=${x.status}` : '',
    ].filter(Boolean).join(' ');
    console.log(`  ${(flags || 'ok').padEnd(22)} ${id.padEnd(36)} ${JSON.stringify(x.fr).padEnd(56)} [${respell}]`);
    console.log(`      ${String(x.kind).padEnd(9)} ${String(x.level).padEnd(5)} ${String(x.theme).padEnd(24)} ${(x.drills as string[] ?? []).join('/')}   en=${JSON.stringify(x.en)}`);
  }

  /* ── 3. DUPLICATE fr IN THE TARGET THEME ───────────────────────────────── */
  console.log('\n## 3. Would any authored sentence collide in theme `verbes`?\n');
  const MINE = [
    'Je sais nager.', 'Tu sais nager.', 'Il sait nager.', 'Nous savons nager.', 'Vous savez nager.', 'Ils savent nager.',
    'Je connais Paris.', 'Tu connais Paris.', 'Il connaît Paris.', 'Nous connaissons Paris.', 'Vous connaissez Paris.', 'Ils connaissent Paris.',
    'Je peux nager.', 'Je ne sais pas.', 'Je sais où il habite.', 'Je connais ce film.',
    'Tu connais mon voisin ?', 'Elle sait cuisiner.', 'On connaît ce quartier.',
  ];
  const theme = await c.query<{ id: string; fr: string }>(
    "select id, fr from content_items where theme = 'verbes' and status = 'published'",
  );
  const inTheme = new Map<string, string[]>();
  for (const x of theme.rows) {
    const k = strip(x.fr);
    inTheme.set(k, [...(inTheme.get(k) ?? []), x.id]);
  }
  let collisions = 0;
  for (const s of MINE) {
    const hit = inTheme.get(strip(s));
    if (hit) { console.log(`  COLLIDES  ${JSON.stringify(s)} with ${hit.join(' ')}`); collisions += 1; }
  }
  console.log(`  ${collisions} collisions across ${MINE.length} candidate sentences in a theme holding ${theme.rowCount} published rows`);
  const dupInMine = MINE.map(strip).filter((x, i, a) => a.indexOf(x) !== i);
  console.log(`  duplicates WITHIN my own list: ${dupInMine.length ? dupInMine.join(', ') : 'none'}`);

  /* ── 4. THE ROW THAT STATES REFRAME A, IN FRENCH ───────────────────────── */
  console.log('\n## 4. The corpus already states the semantic rule\n');
  const meta = await c.query<{ id: string; fr: string; en: string | null; theme: string; level: string; respell: string | null }>(
    `select id, fr, en, theme, level, respell from content_items
      where status='published' and (fr ilike '%s''utilise%' or fr ilike '%savoir%avec%' or en ilike '%is used with%')
      order by id`,
  );
  for (const x of meta.rows) {
    console.log(`  ${x.id.padEnd(36)} [${x.level}/${x.theme}]  ${JSON.stringify(x.fr)}`);
    console.log(`      en=${JSON.stringify(x.en)}  respell=${JSON.stringify(x.respell)}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
