/* a2.21 pre-flight. Le passé composé avec être, seq 18.
 *
 * Answers, against Postgres:
 *   - the identity block, the dependents, the neighbours
 *   - the id block: fr.a2.verbes row count and what is free above a2.20's .650
 *   - the fifteen être-verbs as headwords, with their respellings and genders
 *   - THE AGREED FORMS themselves: allé/allée/allés/allées and the rest
 *   - published sentences with être + a participle, which is the agreement evidence
 *   - THE TRANSITIVE USES: j'ai sorti / monté / descendu / passé / rentré / retourné
 *   - reflexives, which must not appear (a2.22 and a2.23 own them)
 *   - the seed cut, for the imports
 *
 *     pnpm tsx scripts/_a221_probe.ts
 */
import './env';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const q = async (label: string, sql: string, params: unknown[] = []) => {
  const { rows } = await pool.query(sql, params as never[]);
  console.log(`\n### ${label}`);
  return rows;
};

/** The brief's fifteen, in the order it lists them. */
const ETRE_VERBS = [
  'aller', 'venir', 'partir', 'sortir', 'monter', 'descendre', 'rester', 'tomber',
  'naître', 'mourir', 'entrer', 'rentrer', 'retourner', 'arriver', 'passer',
];

/** Every agreed form of every one of them, all four cells. */
const AGREED: string[] = [];
for (const [m] of [
  ['allé'], ['venu'], ['parti'], ['sorti'], ['monté'], ['descendu'], ['resté'], ['tombé'],
  ['né'], ['entré'], ['rentré'], ['retourné'], ['arrivé'], ['passé'],
] as [string][]) {
  AGREED.push(m, `${m}e`, `${m}s`, `${m}es`);
}
AGREED.push('mort', 'morte', 'morts', 'mortes');

/** The six with a transitive twin, and the reflexives a2.22/a2.23 own. */
const TRANSITIVE = ['sortir', 'monter', 'descendre', 'passer', 'rentrer', 'retourner'];
const REFLEXIVES = ['se lever', 'se coucher', 'se laver', "s'habiller", 'se réveiller', 'se promener', "s'appeler", 'se souvenir'];

async function main() {
  // ── 1. IDENTITY ───────────────────────────────────────────────────────────
  let rows = await q(
    '1. THE UNIT a2.21',
    `select body from content_units where kind='curriculum_unit' and body->>'id'='a2.21'`,
  );
  console.log(JSON.stringify(rows[0]?.body, null, 2));

  rows = await q(
    '1b. UNITS DECLARING a2.21 AS A PREREQUISITE',
    `select body->>'id' as id, body->>'seq' as seq, body->>'title' as title
       from content_units where kind='curriculum_unit' and body->'prereqUnitIds' ? 'a2.21'`,
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id} seq=${r.seq} ${r.title}`).join('\n') : '  NONE.');

  rows = await q(
    '1c. NEIGHBOURS, seq 15..22',
    `select body->>'id' as id, body->>'seq' as seq, body->>'title' as t, body->>'canDo' as cando,
            body->'lessonIds' as lessons
       from content_units where kind='curriculum_unit' and body->>'level'='A2'
        and (body->>'seq')::int between 15 and 22 order by 2`,
  );
  for (const r of rows) {
    console.log(`  ${r.id} seq=${String(r.seq).padStart(2)} ${String(r.t).padEnd(38)} lessons=${JSON.stringify(r.lessons)}`);
    console.log(`        canDo: ${r.cando}`);
  }

  // ── 2. THE ID BLOCK ───────────────────────────────────────────────────────
  rows = await q(
    '2. fr.a2.verbes ROW COUNT AND MAX (ledger: 482 after a2.20)',
    `select count(*) as n, max(split_part(id,'.',4)::int) as maxid from content_items where id like 'fr.a2.verbes.%'`,
  );
  console.log(`  n=${rows[0].n}  max=${rows[0].maxid}`);

  rows = await q(
    '2b. EVERY ROW AT OR ABOVE fr.a2.verbes.591 (a2.20 block + anything after)',
    `select id, fr from content_items where id like 'fr.a2.verbes.%'
       and split_part(id,'.',4)::int >= 591 order by split_part(id,'.',4)::int`,
  );
  console.log(`  ${rows.length} rows, ${rows[0]?.id ?? '-'} .. ${rows[rows.length - 1]?.id ?? '-'}`);

  rows = await q(
    '2c. ANY ROW INSIDE fr.a2.verbes.651 .. .720 (a2.21 CANDIDATE BLOCK)',
    `select id, fr, status from content_items where id like 'fr.a2.verbes.%'
       and split_part(id,'.',4)::int between 651 and 720 order by id`,
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id} ${r.fr}`).join('\n') : '  NONE. The candidate block is free.');

  rows = await q(
    '2d. THEME TOTALS',
    `select theme, count(*) filter (where status='published') as published, count(*) as all_rows
       from content_items where theme in ('verbes','verbes-essentiels','routines','transports-quotidiens') group by 1 order by 1`,
  );
  for (const r of rows) console.log(`  ${String(r.theme).padEnd(24)} published=${r.published} all=${r.all_rows}`);

  // ── 3. THE FIFTEEN ÊTRE-VERBS ─────────────────────────────────────────────
  rows = await q(
    '3. THE FIFTEEN, every row at every status',
    `select fr, id, theme, status, kind, level, respell, ipa, en, gender, drills from content_items
      where fr = any($1) order by fr, id`,
    [ETRE_VERBS],
  );
  for (const r of rows) {
    console.log(`  ${String(r.fr).padEnd(12)} ${r.id.padEnd(42)} ${String(r.theme).padEnd(24)} ${String(r.status).padEnd(10)} ${String(r.level).padEnd(3)} [${r.respell ?? ''}] ${String(r.en ?? '').padEnd(20)} g=${r.gender ?? '-'} d=${JSON.stringify(r.drills)}`);
  }
  const present = new Set(rows.map((r) => r.fr as string));
  console.log(`\n  ABSENT: ${ETRE_VERBS.filter((v) => !present.has(v)).join(' · ') || '(none)'}`);

  // ── 4. THE AGREED FORMS AS BARE ROWS ─────────────────────────────────────
  rows = await q(
    '4. EVERY BARE-WORD ROW WHOSE fr IS ONE OF THE AGREED FORMS',
    `select fr, id, theme, status, kind, respell, en, gender from content_items
      where fr = any($1) and fr !~ ' ' order by fr, id`,
    [AGREED],
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) {
    console.log(`  ${String(r.fr).padEnd(11)} ${r.id.padEnd(42)} ${String(r.theme).padEnd(24)} ${String(r.status).padEnd(10)} ${String(r.kind).padEnd(9)} [${r.respell ?? ''}] ${r.en ?? ''} g=${r.gender ?? '-'}`);
  }

  // ── 5. être + PARTICIPLE IN A PUBLISHED SENTENCE ─────────────────────────
  rows = await q(
    '5. PUBLISHED ROWS: a form of être followed by one of the agreed forms',
    `select id, fr, theme, respell, en from content_items where status='published'
      and fr ~* ('(^|[^[:alpha:]])(suis|es|est|sommes|êtes|sont) +(' || $1 || ')([^[:alpha:]]|$)')
      order by id limit 120`,
    [AGREED.join('|')],
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${r.id.padEnd(42)} ${String(r.fr).padEnd(52)} [${r.respell ?? ''}]`);

  console.log('\n  BY FORM, count of published rows with être in front:');
  for (const f of AGREED) {
    const { rows: r } = await pool.query(
      `select count(*) as n from content_items where status='published'
         and fr ~* ('(^|[^[:alpha:]])(suis|es|est|sommes|êtes|sont) +' || $1 || '([^[:alpha:]]|$)')`,
      [f] as never[],
    );
    if (Number(r[0].n) > 0) console.log(`    ${f.padEnd(12)} ${r[0].n}`);
  }

  console.log('\n  FEMININE AND PLURAL AGREEMENT, anywhere at all:');
  for (const f of AGREED.filter((x) => /(e|s|es)$/.test(x) && !['passé', 'né', 'resté', 'monté', 'tombé', 'entré', 'rentré', 'retourné', 'arrivé'].includes(x))) {
    const { rows: r } = await pool.query(
      `select count(*) as n from content_items where status='published'
         and fr ~* ('(^|[^[:alpha:]])' || $1 || '([^[:alpha:]]|$)')`,
      [f] as never[],
    );
    if (Number(r[0].n) > 0) console.log(`    ${f.padEnd(12)} ${r[0].n}`);
  }

  // ── 6. THE TRANSITIVE USES ───────────────────────────────────────────────
  rows = await q(
    '6. PUBLISHED ROWS: a form of avoir followed by one of the six transitive participles',
    `select id, fr, theme, respell, en from content_items where status='published'
      and fr ~* '(^|[^[:alpha:]])(ai|as|a|avons|avez|ont) +(sorti|monté|descendu|passé|rentré|retourné)([^[:alpha:]]|$)'
      order by id limit 60`,
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id.padEnd(42)} ${r.fr}`).join('\n') : '  NONE.');

  rows = await q(
    "6b. j'ai / il a + those forms, elided, which the house boundary cannot see",
    `select id, fr, theme from content_items where status='published'
      and fr ~* '(j''ai|n''ai|qu''il a) +(sorti|monté|descendu|passé|rentré|retourné)([^[:alpha:]]|$)'
      order by id limit 40`,
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id.padEnd(42)} ${r.fr}`).join('\n') : '  NONE.');

  // ── 7. REFLEXIVES, WHICH MUST NOT APPEAR ─────────────────────────────────
  rows = await q(
    '7. REFLEXIVE HEADWORDS (a2.22 and a2.23 own these; this lesson must not teach them)',
    `select fr, id, theme, status, respell, en from content_items where fr = any($1) order by fr, id`,
    [REFLEXIVES],
  );
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(14)} ${r.id.padEnd(42)} ${String(r.status).padEnd(10)} [${r.respell ?? ''}] ${r.en ?? ''}`);

  rows = await q(
    '7b. PUBLISHED ROWS WITH A REFLEXIVE PASSÉ COMPOSÉ (me/te/se + être)',
    `select count(*) as n from content_items where status='published'
      and fr ~* '(^|[^[:alpha:]])(me|te|se|nous|vous|s''|m''|t'') *(suis|es|est|sommes|êtes|sont)([^[:alpha:]]|$)'`,
  );
  console.log(`  ${rows[0].n} published rows`);

  // ── 8. RESPELLINGS THE BRIEF SAYS ARE BROKEN ─────────────────────────────
  rows = await q(
    '8. EVERY ROW CARRYING A RESPELLING FOR THE SIX NASAL VERBS',
    `select fr, id, theme, status, respell from content_items
      where fr in ('monter','tomber','descendre','entrer','rentrer','rentrer à la maison')
        and respell is not null order by fr, id`,
  );
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(22)} ${r.id.padEnd(42)} ${String(r.status).padEnd(10)} [${r.respell}]`);

  rows = await q(
    '8b. fr.a1.transports-quotidiens.045, the descendre row a2.11 repaired',
    `select id, fr, respell, ipa, en, theme, status, drills from content_items where id='fr.a1.transports-quotidiens.045'`,
  );
  console.log(JSON.stringify(rows[0], null, 2));

  // ── 9. THE SEED CUT ──────────────────────────────────────────────────────
  rows = await q(
    '9. verbes / verbes-essentiels IN POSTGRES (the seed holds a fraction)',
    `select theme, count(*) as n from content_items where status='published'
       and theme in ('verbes','verbes-essentiels','transports-quotidiens','routines') group by 1 order by 1`,
  );
  for (const r of rows) console.log(`  ${String(r.theme).padEnd(26)} ${r.n}`);

  // ── 10. a2.03's AGREEMENT LESSON ─────────────────────────────────────────
  rows = await q(
    '10. a2.03 AND a2.01 AS SHIPPED: reframe, grammarIntroduced',
    `select body->>'id' as id, body->>'version' as v, body->>'reframe' as reframe,
            body->'grammarIntroduced' as gi
       from content_units where kind='lesson' and body->>'id' in ('a2.03.l1','a2.01.l1','a2.05.l1','a2.20.l1','a2.19.l1')
      order by 1`,
  );
  for (const r of rows) {
    console.log(`  ${r.id} v${r.v}`);
    console.log(`    reframe: ${r.reframe}`);
    console.log(`    grammarIntroduced: ${JSON.stringify(r.gi)}`);
  }

  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
