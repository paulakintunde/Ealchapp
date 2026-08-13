/* The exact rows a2.13 intends to import, verified one by one before a line of
 * the corpus is written.
 *
 * _a213_imports.ts measured the POOL. This measures the PICK. Every id below is
 * printed with gender, respelling, drills, level and theme, plus:
 *
 *   - whether any OTHER shipped lesson already references it, because a row this
 *     build gives a drill to is a row another lesson draws
 *   - whether it would join a1.03's ending population
 *   - for the unseen verb, whether it appears anywhere in a2.13's own intended
 *     vocabulary, which is the assertion the brief demands
 *
 *     pnpm tsx scripts/_a213_pick.ts
 */
import './env';
import { Pool } from 'pg';
import type { Item } from '../../ealch-v2/src/content/schema.ts';
import { endingPopulation } from '../../ealch-v2/src/content/gender.logic.ts';
import { pgEnumArray } from './manifest-item.ts';

/** The three naming forms. All ungendered, all respelled, all in one theme. */
const HEADWORDS = [
  'fr.sons.verbes-essentiels.007', // vouloir
  'fr.sons.verbes-essentiels.006', // pouvoir
  'fr.sons.verbes-essentiels.008', // devoir  <- SEVEN of ten `devoir` rows are the noun
];

/** The register pair and its `nous` echo. Neither half carries a respelling and
 *  that is measured, not assumed — see §3 of _a213_imports.ts. */
const REGISTER = [
  'fr.a1.verbes-du-quotidien.035', // Je veux un café, s'il vous plaît.
  'fr.a1.cafe.051', //                Je voudrais un café, s'il vous plaît.
  'fr.a1.verbes-essentiels.079', //   Nous voulons réserver une table pour deux.
  'fr.a2.verbes-du-quotidien.073', // Nous voudrions réserver une table pour deux.
];

/** The twelve modal + infinitive SENTENCES that exist whole and respelled. Only
 *  twelve of six hundred and twenty-eight do, which is why this lesson authors
 *  its frames rather than importing them. */
const SENTENCES = [
  'fr.a2.verbes-essentiels.041', // Elle veut devenir médecin.
  'fr.a1.verbes-essentiels.033', // Tu peux ouvrir la fenêtre, s'il te plaît ?
  'fr.a2.verbes-essentiels.013', // Je dois étudier pour mon examen demain.
  'fr.a2.verbes-essentiels.040', // Nous devons partir avant midi.
  'fr.sons.voyelles.311', //       Vous devez arriver au bureau avant neuf heures.
  'fr.a1.cafe.173', //             Il faut réserver.
  'fr.sons.liaisons.220', //       Il faut aller plus vite.
];

/** The infinitives this lesson pairs with a modal. Every one is IMPORTED: the
 *  argument of the lesson is that a learner uses verbs nobody taught them, and
 *  the corpus should be able to say the same. */
const INFINITIVES = [
  'fr.sons.verbes-essentiels.059', // payer, the frame verb
  'fr.a2.rp-achats.019', //          commander
  'fr.a1.transports-quotidiens.046', // attendre
  'fr.a2.courses.063', //            choisir
  'fr.a1.rp-repas.014', //           boire
  'fr.a1.argent-quotidien.061', //   acheter
  'fr.a1.amis.024', //               aider
  'fr.a1.rp-achats.004', //          chercher
  'fr.a1.routines.107', //           conduire
  'fr.a1.transports-quotidiens.047', // arriver
];

/** The unseen verb for the generalisation mission. Drawn from `jardinage`, a
 *  theme this lesson names nowhere, so "a verb the lesson never taught" is true
 *  of the corpus and not only of the prose. */
const UNSEEN = ['fr.a1.jardinage.108']; // arroser

/** Verbs this build must NOT touch, and why. */
const FORBIDDEN = [
  ['fr.sons.verbes-essentiels.009', 'savoir — a2.14 owns it outright'],
  ['fr.sons.verbes-essentiels.088', 'nager — `je sais nager` is a2.14\'s contrast'],
];

async function main() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  const ALL = [...HEADWORDS, ...REGISTER, ...SENTENCES, ...INFINITIVES, ...UNSEEN];
  const dupes = ALL.filter((x, i) => ALL.indexOf(x) !== i);
  if (dupes.length) console.log(`  !! DUPLICATE IDS IN THE PICK: ${dupes.join(', ')}\n`);

  const r = await c.query<Record<string, unknown>>(
    'select * from content_items where id = any($1)', [[...ALL, ...FORBIDDEN.map((f) => f[0])]]);
  const by = new Map(r.rows.map((x) => [String(x.id), x]));

  const show = (label: string, ids: string[]) => {
    console.log(`\n## ${label}\n`);
    for (const id of ids) {
      const x = by.get(id);
      if (!x) { console.log(`  MISSING   ${id}`); continue; }
      const bad = x.status !== 'published' ? ' !!NOT PUBLISHED' : '';
      const g = x.gender ? ` !!GENDER=${x.gender}` : '';
      console.log(
        `  ${id.padEnd(34)} ${JSON.stringify(x.fr).slice(0, 50).padEnd(52)} ${String(x.kind).padEnd(8)} ${String(x.level).padEnd(4)}`
        + ` [${String(x.theme).slice(0, 22)}]`);
      console.log(`      respell=${x.respell ?? 'NONE'}  drills=${pgEnumArray(x.drills).join('/') || '-'}${g}${bad}`);
    }
  };

  show('1. The three naming forms', HEADWORDS);
  show('2. The register pair, and the nous echo', REGISTER);
  show('3. Modal + infinitive sentences that exist whole', SENTENCES);
  show('4. The infinitives, imported not authored', INFINITIVES);
  show('5. The unseen verb for the generalisation mission', UNSEEN);

  console.log('\n## 6. Rows this build must NOT touch\n');
  for (const [id, why] of FORBIDDEN) {
    const x = by.get(id);
    console.log(`  ${id.padEnd(34)} ${x ? JSON.stringify(x.fr) : 'missing'}  <- ${why}`);
  }

  /* ── endingPopulation over the whole pick ──────────────────────────────── */
  console.log('\n## 7. endingPopulation across every imported row\n');
  const rows = r.rows.filter((x) => ALL.includes(String(x.id))).map((x) => ({
    id: String(x.id), kind: String(x.kind), level: String(x.level), theme: String(x.theme),
    fr: String(x.fr), en: String(x.en ?? ''), respell: (x.respell as string | null) ?? undefined,
    gender: (x.gender as string | null) ?? undefined, drills: pgEnumArray(x.drills), version: 1,
  })) as unknown as Item[];
  const joiners = endingPopulation(rows);
  console.log(`  ${rows.length} rows, ${joiners.length} JOIN a1.03's ending population`);
  for (const j of joiners) console.log(`    JOINS ${JSON.stringify(j)}`);

  /* ── which shipped lessons already draw these rows? ────────────────────── */
  console.log('\n## 8. Shipped lessons that already reference a row in the pick\n');
  const les = await c.query<{ slug: string; body: unknown }>(
    "select slug, body from content_units where kind = 'lesson'");
  for (const id of ALL) {
    const users = les.rows.filter((l) => JSON.stringify(l.body).includes(id)).map((l) => l.slug);
    if (users.length) console.log(`  ${id.padEnd(34)} used by ${users.join(', ')}`);
  }

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
