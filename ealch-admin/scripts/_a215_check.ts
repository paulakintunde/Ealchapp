/* a2.15 design checks, through the REAL app functions, before anything is
 * authored. Four questions decide the shape of this lesson:
 *
 *   1. THE PARADIGMS. Is `mettre` really the control the brief says it is, and
 *      is `battre` really predictable from it? That claim is the whole reason
 *      battre is in the lesson, and it is arithmetic, not opinion.
 *   2. THE FRAME. a2.13 got all eighteen cells onto ONE dictee frame (`payer`)
 *      because a modal takes any verb. These three take different OBJECTS, so
 *      one frame may be impossible. Measured through the real dicteeMode.
 *   3. THE NASALS. Every prendre compound is respelled with a plain n today and
 *      one row already holds the house form. Both directions, real checker.
 *   4. a1.03. Every import candidate through the real endingPopulation.
 *
 *   pnpm tsx scripts/_a215_check.ts
 */
import './env';
import { Pool } from 'pg';
import type { Item } from '../../ealch-v2/src/content/schema.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { pgEnumArray } from './manifest-item.ts';

const PARADIGM = [
  { person: 'je', prendre: 'prends', mettre: 'mets', battre: 'bats' },
  { person: 'tu', prendre: 'prends', mettre: 'mets', battre: 'bats' },
  { person: 'il', prendre: 'prend', mettre: 'met', battre: 'bat' },
  { person: 'nous', prendre: 'prenons', mettre: 'mettons', battre: 'battons' },
  { person: 'vous', prendre: 'prenez', mettre: 'mettez', battre: 'battez' },
  { person: 'ils', prendre: 'prennent', mettre: 'mettent', battre: 'battent' },
];

/** Candidate frames. One object per verb, chosen short, because a dictee target
 *  over 16 letters falls into WORD mode and tests nothing. */
const FRAMES: [string, string[]][] = [
  ['prendre / le bus', ['Je prends le bus.', 'Tu prends le bus.', 'Il prend le bus.', 'Nous prenons le bus.', 'Vous prenez le bus.', 'Ils prennent le bus.']],
  ['mettre / la table', ['Je mets la table.', 'Tu mets la table.', 'Il met la table.', 'Nous mettons la table.', 'Vous mettez la table.', 'Ils mettent la table.']],
  ['battre / les oeufs', ['Je bats les œufs.', 'Tu bats les œufs.', 'Il bat les œufs.', 'Nous battons les œufs.', 'Vous battez les œufs.', 'Ils battent les œufs.']],
];

const IMPORTS = [
  'fr.sons.consonnes.107', 'fr.sons.verbes-essentiels.012', 'fr.a1.transports-quotidiens.041',
  'fr.a1.dictee.095', 'fr.a1.ecole.051', 'fr.a2.disciplines.051',
  'fr.sons.verbes-essentiels.030', 'fr.sons.verbes-essentiels.225',
  'fr.sons.verbes-essentiels.014', 'fr.sons.verbes-essentiels.196', 'fr.b1.verbes.022',
  'fr.sons.verbes-essentiels.191',
];

async function main() {
  console.log('## 1. Is mettre the control, and is battre predictable from it?\n');
  let sameShape = 0;
  for (const p of PARADIGM) {
    /* The claim: mettre and battre share ONE shape (single consonant in the
       singular, doubled in the plural), and prendre does not. Derived by
       stripping the stem and comparing what is left. */
    const mEnd = p.mettre.replace(/^met+/, '');
    const bEnd = p.battre.replace(/^bat+/, '');
    const same = mEnd === bEnd;
    if (same) sameShape++;
    console.log(`  ${p.person.padEnd(5)} ${p.prendre.padEnd(9)} ${p.mettre.padEnd(8)} ${p.battre.padEnd(8)}  mettre/battre ending: ${JSON.stringify(mEnd)} / ${JSON.stringify(bEnd)}  ${same ? 'MATCH' : 'differ'}`);
  }
  console.log(`  mettre and battre share ${sameShape} of ${PARADIGM.length} endings`);
  const prendreDoubles = PARADIGM[5].prendre.includes('nn');
  const mettreDoubles = PARADIGM[3].mettre.includes('tt') && PARADIGM[0].mettre.replace('mets', '') === '';
  console.log(`  prendre doubles its n at ils only: ${prendreDoubles} (nous ${PARADIGM[3].prendre} has one n)`);
  console.log(`  mettre keeps tt throughout the plural: ${mettreDoubles}`);

  console.log('\n## 2. THE FRAME, through the real dicteeMode\n');
  for (const [label, rows] of FRAMES) {
    let worst = 0; let words = 0;
    for (const fr of rows) {
      const letters = fr.replace(/[^\p{L}]/gu, '').length;
      worst = Math.max(worst, letters);
      if (dicteeMode(fr) !== 'letters') words++;
      console.log(`  ${dicteeMode(fr) === 'letters' ? 'LETTERS' : 'WORDS  '} ${String(letters).padStart(2)}  ${fr}`);
    }
    console.log(`  ${label}: longest ${worst}, ${words} in WORD mode\n`);
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  console.log('## 3. The prendre family respellings, and the checker\n');
  const r = await c.query<Record<string, unknown>>('select * from content_items where id = any($1)', [IMPORTS]);
  const by = new Map(r.rows.map((x) => [String(x.id), x]));
  for (const id of IMPORTS) {
    const x = by.get(id);
    if (!x) { console.log(`  MISSING ${id}`); continue; }
    const fr = String(x.fr); const respell = String(x.respell ?? '');
    const flagged = hasPlainNasalFor(fr, respell);
    const fixed = respell.replace(/AHN/g, 'AHⁿ').replace(/ohn/g, 'ohⁿ').replace(/AHN-/g, 'AHⁿ-');
    const seen = flagged ? hasPlainNasalFor(fr, fixed) : false;
    console.log(`  ${fr.padEnd(11)} ${id.padEnd(34)} ${respell.padEnd(16)} ${flagged ? `FLAGGED -> ${fixed}${seen ? ' STILL FLAGGED' : ' clean'}` : 'clean'}`);
  }

  console.log('\n## 4. endingPopulation over every import candidate\n');
  const rows = r.rows.map((x) => ({
    id: String(x.id), kind: String(x.kind), level: String(x.level), theme: String(x.theme),
    fr: String(x.fr), en: String(x.en ?? ''), respell: (x.respell as string | null) ?? undefined,
    gender: (x.gender as string | null) ?? undefined, drills: pgEnumArray(x.drills), version: 1,
  })) as unknown as Item[];
  const joiners = endingPopulation(rows);
  console.log(`  ${rows.length} rows, ${joiners.length} JOIN a1.03's ending population`);
  for (const j of joiners) console.log(`    JOINS ${JSON.stringify(j)}`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
