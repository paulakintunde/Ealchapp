/* a2.21 pre-flight, part 2. Measured through the REAL functions.
 *
 *   - dicteeMode on every candidate dictée frame
 *   - fold / normalizeFr: can a typed surface test agreement at all?
 *   - hasPlainNasalFor on every respelling this lesson will display
 *   - fr.a1.rp-recits-temps as a PARADIGM GRID, which nothing in the band expects
 *   - the transitive split, verb by verb, with and without an object
 *   - mort / morte, the one audible feminine
 *   - the seed cut for every import candidate
 *
 *     pnpm tsx scripts/_a221_probe2.ts
 */
import './env';
import { Pool } from 'pg';
import { readFileSync } from 'node:fs';
import { dicteeMode, letterCount } from '../../ealch-v2/src/content/dictee.logic.ts';
import { fold } from '../../ealch-v2/src/content/answer.logic.ts';
import { normalizeFr } from '../../ealch-v2/src/utils/score.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const q = async (label: string, sql: string, params: unknown[] = []) => {
  const { rows } = await pool.query(sql, params as never[]);
  console.log(`\n### ${label}`);
  return rows;
};

/** Candidate frames for the dictée. The whole lesson turns on a written ending. */
const DICTEE_CANDIDATES = [
  'Elle est allée.',
  'Elles sont allées.',
  'Il est allé.',
  'Ils sont allés.',
  'Je suis allé.',
  'Je suis allée.',
  'Elle est partie.',
  'Elles sont parties.',
  'Il est parti.',
  'Ils sont partis.',
  'Elle est sortie.',
  'Elles sont sorties.',
  'Elle est venue.',
  'Elles sont venues.',
  'Elle est restée.',
  'Elles sont restées.',
  'Elle est tombée.',
  'Il est né ici.',
  'Elle est née ici.',
  'Elle est morte.',
  'Il est mort.',
  "Elle n'est pas allée.",
  "Il n'est pas allé.",
  "Elles ne sont pas allées.",
  'Elle est allée tôt.',
  'Elles sont allées tôt.',
];

/** Every respelling the lesson may display. */
const RESPELLS: [string, string][] = [
  ['monter', 'mohn-TAY'],
  ['monter', 'mohⁿ-TAY'],
  ['tomber', 'tohn-BAY'],
  ['tomber', 'tohⁿ-BAY'],
  ['descendre', 'day-SAHN-druh'],
  ['descendre', 'day-SAHⁿDR'],
  ['entrer', 'ahn-TRAY'],
  ['entrer', 'ahⁿ-TRAY'],
  ['rentrer', 'rahn-TRAY'],
  ['rentrer', 'rahⁿ-TRAY'],
  ['venir', 'vuh-NEER'],
  ['naître', 'NEHTR'],
  ['mourir', 'moo-REER'],
  ['Elle est allée.', 'ehl eh tah-LAY'],
  ['Elles sont allées.', 'ehl sohⁿ tah-LAY'],
  ['Elles sont allées.', 'ehl sohn tah-LAY'],
  ['Ils sont partis.', 'eel sohⁿ pahr-TEE'],
  ['Elle est venue.', 'ehl eh vuh-NÜ'],
  ['Elle est morte.', 'ehl eh MORT'],
  ['Il est mort.', 'eel eh MOR'],
  ['Elle est descendue.', 'ehl eh day-sahⁿ-DÜ'],
  ['Elle est descendue.', 'ehl eh day-sahn-DÜ'],
  ['Elle est montée.', 'ehl eh mohⁿ-TAY'],
  ['Elle est entrée.', 'ehl eh tahⁿ-TRAY'],
  ['Elle est rentrée.', 'ehl eh rahⁿ-TRAY'],
  ['Elle est tombée.', 'ehl eh tohⁿ-BAY'],
];

/** The four cells of one verb, and the pairs no ear question may separate. */
const CELLS = ['allé', 'allée', 'allés', 'allées'];

async function main() {
  // ── A. dicteeMode ─────────────────────────────────────────────────────────
  console.log('\n### A. dicteeMode ON EVERY CANDIDATE FRAME (>16 letters = WORD mode = useless here)');
  for (const s of DICTEE_CANDIDATES) {
    const n = letterCount(s);
    const m = dicteeMode(s);
    console.log(`  ${String(n).padStart(2)}  ${m === 'letters' ? 'LETTERS' : 'words  '}  ${s}`);
  }

  // ── B. fold / normalizeFr ────────────────────────────────────────────────
  console.log('\n### B. CAN A TYPED SURFACE TEST AGREEMENT? fold and normalizeFr on the four cells');
  for (const a of CELLS) {
    for (const b of CELLS) {
      if (a >= b) continue;
      console.log(
        `  ${a.padEnd(8)} vs ${b.padEnd(8)}  fold ${fold(a) === fold(b) ? 'SAME  (untestable)' : 'differ (TESTABLE)'}   normalizeFr ${normalizeFr(a) === normalizeFr(b) ? 'SAME' : 'differ'}`,
      );
    }
  }
  console.log('\n  And the whole sentence, which is what a typeIn actually compares:');
  for (const [a, b] of [
    ['Elle est allée.', 'Elle est allé.'],
    ['Elles sont allées.', 'Elles sont allée.'],
    ['Ils sont partis.', 'Ils sont parti.'],
    ['Elle est morte.', 'Elle est mort.'],
  ] as [string, string][]) {
    console.log(`  ${a.padEnd(20)} vs ${b.padEnd(20)} fold ${fold(a) === fold(b) ? 'SAME' : 'DIFFER'}`);
  }

  // ── C. hasPlainNasalFor ──────────────────────────────────────────────────
  console.log('\n### C. hasPlainNasalFor, every respelling this lesson may display');
  for (const [fr, respell] of RESPELLS) {
    const flagged = hasPlainNasalFor(fr, respell);
    console.log(`  ${flagged ? 'FLAGGED  ' : 'not seen '} ${String(fr).padEnd(22)} [${respell}]`);
  }

  // ── D. rp-recits-temps AS A GRID ─────────────────────────────────────────
  let rows = await q(
    'D. fr.a1.rp-recits-temps: THE WHOLE THEME, which looks like an authored paradigm walk',
    `select id, fr, en, respell, drills, level from content_items
      where theme='rp-recits-temps' and status='published' order by split_part(id,'.',4)::int`,
  );
  console.log(`  ${rows.length} rows total`);
  const withEtre = rows.filter((r) => /(suis|es|est|sommes|êtes|sont) /i.test(String(r.fr)));
  const withAvoir = rows.filter((r) => /(^|[^a-zà-ÿ])(ai|as|a|avons|avez|ont) /i.test(String(r.fr)) || /j'ai /i.test(String(r.fr)));
  console.log(`  with être + participle: ${withEtre.length}   with avoir: ${withAvoir.length}`);
  console.log(`  carrying a respelling:  ${rows.filter((r) => r.respell).length}`);
  console.log(`  levels: ${JSON.stringify([...new Set(rows.map((r) => r.level))])}`);
  console.log('\n  THE PERSON GRID, être rows only:');
  const persons: Record<string, string[]> = {};
  for (const r of withEtre) {
    const m = String(r.fr).match(/(je suis|j'suis|tu es|il est|elle est|on est|nous sommes|vous êtes|ils sont|elles sont|[A-Za-zà-ÿ' ]+ (?:sont|est))/i);
    const key = (m?.[1] ?? '?').toLowerCase();
    (persons[key] ??= []).push(String(r.fr));
  }
  for (const [k, v] of Object.entries(persons).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`    ${k.padEnd(28)} ${v.length}`);
  }

  // ── E. THE TRANSITIVE SPLIT, VERB BY VERB ────────────────────────────────
  console.log('\n### E. THE TRANSITIVE SPLIT: avoir + form against être + form, per verb');
  for (const [inf, part] of [
    ['sortir', 'sorti'], ['monter', 'monté'], ['descendre', 'descendu'],
    ['passer', 'passé'], ['rentrer', 'rentré'], ['retourner', 'retourné'],
  ] as [string, string][]) {
    const forms = [part, `${part}e`, `${part}s`, `${part}es`].join('|');
    const { rows: av } = await pool.query(
      `select count(*) as n from content_items where status='published'
         and (fr ~* ('(^|[^[:alpha:]])(ai|as|a|avons|avez|ont) +(' || $1 || ')([^[:alpha:]]|$)')
           or fr ~* ('(j''ai|n''ai|qu''il a|qu''elle a) +(' || $1 || ')([^[:alpha:]]|$)'))`,
      [forms] as never[],
    );
    const { rows: et } = await pool.query(
      `select count(*) as n from content_items where status='published'
         and fr ~* ('(^|[^[:alpha:]])(suis|es|est|sommes|êtes|sont) +(' || $1 || ')([^[:alpha:]]|$)')`,
      [forms] as never[],
    );
    console.log(`  ${inf.padEnd(11)} avoir=${String(av[0].n).padStart(3)}   être=${String(et[0].n).padStart(3)}`);
  }

  rows = await q(
    'E2. THE BRIEF\'S OWN EXAMPLE SENTENCE, "elle a sorti la poubelle"',
    `select id, fr, en, respell, theme, level, status, drills from content_items
      where fr ~* 'sorti la poubelle' or fr ~* 'la poubelle'`,
  );
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${String(r.level).padEnd(3)} ${String(r.fr).padEnd(60)} [${r.respell ?? ''}]`);

  // ── F. mort / morte, THE ONE AUDIBLE FEMININE ────────────────────────────
  rows = await q(
    'F. mort / morte / morts / mortes, every row',
    `select fr, id, theme, level, status, respell, ipa, en, gender from content_items
      where fr in ('mort','morte','morts','mortes') or fr ~* '(^|[^[:alpha:]])(mort|morte|morts|mortes)([^[:alpha:]]|$)'
      order by fr, id limit 40`,
  );
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(46)} ${r.id.padEnd(40)} [${r.respell ?? ''}] ${r.ipa ?? ''} g=${r.gender ?? '-'}`);

  // ── G. THE SEED CUT ──────────────────────────────────────────────────────
  const seed = JSON.parse(readFileSync('../ealch-v2/src/content/seed.json', 'utf8')) as {
    version: number; items: { id: string }[]; lessons: { id: string }[]; units?: unknown[];
  };
  const inSeed = new Set(seed.items.map((i) => i.id));
  console.log(`\n### G. THE SEED: version ${seed.version}, ${seed.items.length} items, ${seed.lessons.length} lessons`);
  const CANDIDATES = [
    'fr.a1.transports-quotidiens.045', 'fr.a1.transports-quotidiens.044', 'fr.a1.transports-quotidiens.047',
    'fr.a1.transports-quotidiens.048', 'fr.sons.verbes-essentiels.003', 'fr.sons.verbes-essentiels.010',
    'fr.sons.verbes-essentiels.040', 'fr.sons.verbes-essentiels.041', 'fr.sons.verbes-essentiels.043',
    'fr.sons.verbes-essentiels.044', 'fr.sons.verbes-essentiels.081', 'fr.sons.verbes-essentiels.082',
    'fr.sons.verbes-essentiels.085', 'fr.sons.verbes-essentiels.017', 'fr.sons.verbes-essentiels.021',
    'fr.a2.verbes.013', 'fr.a2.verbes.014', 'fr.a2.verbes.015', 'fr.a2.verbes.016',
    'fr.sons.adjectifs-essentiels.161', 'fr.b1.verbes-du-quotidien.010',
    'fr.a1.presentation-personnelle.025', 'fr.a1.evenements-familiaux.003',
    'fr.a1.rp-recits-temps.038', 'fr.a1.rp-recits-temps.109', 'fr.a1.rp-recits-temps.204',
    'fr.a1.rp-recits-temps.227', 'fr.a1.deplacements.012', 'fr.a1.faux-amis.279',
    'fr.a2.verbes.620', 'fr.a2.verbes.621',
  ];
  for (const id of CANDIDATES) console.log(`  ${inSeed.has(id) ? 'in seed ' : 'ABSENT  '} ${id}`);

  // ── H. WHAT a2.11 SAID ABOUT descendre ───────────────────────────────────
  rows = await q(
    'H. a2.11.l1 AS SHIPPED: does it name descendre\'s auxiliary split?',
    `select body from content_units where kind='lesson' and body->>'id'='a2.11.l1'`,
  );
  const body = JSON.stringify(rows[0]?.body ?? {});
  for (const needle of ['descendre', 'auxiliaire', 'auxiliary', 'a2.21', 'être', 'avoir']) {
    const n = body.split(needle).length - 1;
    console.log(`  "${needle}" appears ${n} times in a2.11.l1`);
  }
  const m = body.match(/[^"]{0,140}a2\.21[^"]{0,140}/g);
  console.log(`  a2.21 in context: ${m ? m.join('\n    ') : '(never named)'}`);

  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
