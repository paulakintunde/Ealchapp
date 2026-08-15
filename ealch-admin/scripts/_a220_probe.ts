/* a2.20 pre-flight. Participes passés irréguliers, seq 17.
 *
 * Answers, against Postgres:
 *   - the identity block, the dependents, the neighbours
 *   - the id block: fr.a2.verbes row count and whether .591..650 is still empty
 *   - WHETHER THE PARTICIPLES THEMSELVES EXIST AS ROWS   <- the brief's open question
 *   - the infinitives whose participle this lesson teaches, every row
 *   - what the corpus already publishes for each irregular participle in a sentence
 *   - dû against du, and the circumflex
 *   - the seed cut, for the imports
 *
 *     pnpm tsx scripts/_a220_probe.ts
 */
import './env';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const q = async (label: string, sql: string, params: unknown[] = []) => {
  const { rows } = await pool.query(sql, params as never[]);
  console.log(`\n### ${label}`);
  return rows;
};

/** The brief's four families plus its oddities, and a2.05's IRREGULAR_PAST on top. */
const FAMILIES: Record<string, string[]> = {
  '-is': ['pris', 'mis', 'appris', 'compris', 'assis', 'remis', 'promis'],
  '-it': ['dit', 'écrit', 'conduit', 'construit'],
  '-u': ['vu', 'lu', 'bu', 'su', 'pu', 'voulu', 'dû', 'connu', 'venu', 'tenu', 'reçu', 'aperçu', 'cru', 'couru'],
  '-ert': ['ouvert', 'offert', 'couvert', 'souffert'],
  odd: ['fait', 'refait', 'été', 'eu', 'né', 'mort'],
};
const ALL_PARTICIPLES = Object.values(FAMILIES).flat();

/** Every infinitive whose participle is in the list above. */
const INFINITIVES = [
  'prendre', 'mettre', 'apprendre', 'comprendre', 's\'asseoir', 'remettre', 'promettre',
  'dire', 'écrire', 'conduire', 'construire',
  'voir', 'lire', 'boire', 'savoir', 'pouvoir', 'vouloir', 'devoir', 'connaître', 'venir', 'tenir',
  'recevoir', 'apercevoir', 'croire', 'courir',
  'ouvrir', 'offrir', 'couvrir', 'souffrir',
  'faire', 'refaire', 'être', 'avoir', 'naître', 'mourir',
];

async function main() {
  // ── 1. IDENTITY ───────────────────────────────────────────────────────────
  let rows = await q(
    '1. THE UNIT a2.20',
    `select body from content_units where kind='curriculum_unit' and body->>'id'='a2.20'`,
  );
  console.log(JSON.stringify(rows[0]?.body, null, 2));

  rows = await q(
    '1b. UNITS DECLARING a2.20 AS A PREREQUISITE',
    `select body->>'id' as id, body->>'seq' as seq, body->>'title' as title
       from content_units where kind='curriculum_unit' and body->'prereqUnitIds' ? 'a2.20'`,
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id} seq=${r.seq} ${r.title}`).join('\n') : '  NONE.');

  rows = await q(
    '1c. NEIGHBOURS, seq 15..21',
    `select body->>'id' as id, body->>'seq' as seq, body->>'title' as t, body->>'canDo' as cando,
            body->'lessonIds' as lessons
       from content_units where kind='curriculum_unit' and body->>'level'='A2'
        and (body->>'seq')::int between 15 and 21 order by 2`,
  );
  for (const r of rows) {
    console.log(`  ${r.id} seq=${String(r.seq).padStart(2)} ${String(r.t).padEnd(38)} lessons=${JSON.stringify(r.lessons)}`);
    console.log(`        canDo: ${r.cando}`);
  }

  // ── 2. THE ID BLOCK ───────────────────────────────────────────────────────
  rows = await q(
    '2. fr.a2.verbes ROW COUNT AND MAX (ledger: 439 after a2.05, 541-576 used)',
    `select count(*) as n, max(split_part(id,'.',4)::int) as maxid from content_items where id like 'fr.a2.verbes.%'`,
  );
  console.log(`  n=${rows[0].n}  max=${rows[0].maxid}`);

  rows = await q(
    '2b. ANY ROW INSIDE fr.a2.verbes.591 .. .650 (a2.20 RESERVED, must be empty)',
    `select id, fr, status from content_items where id like 'fr.a2.verbes.%'
       and split_part(id,'.',4)::int between 591 and 650 order by id`,
  );
  console.log(rows.length ? rows.map((r) => `  ${r.id} ${r.fr}`).join('\n') : '  NONE. The reservation is intact.');

  rows = await q(
    '2c. ROWS AT OR ABOVE fr.a2.verbes.541 (a2.05 + anything landing after)',
    `select id, fr from content_items where id like 'fr.a2.verbes.%'
       and split_part(id,'.',4)::int >= 541 order by split_part(id,'.',4)::int`,
  );
  console.log(`  ${rows.length} rows, ${rows[0]?.id ?? '-'} .. ${rows[rows.length - 1]?.id ?? '-'}`);

  rows = await q(
    '2d. THEME TOTALS',
    `select theme, count(*) filter (where status='published') as published, count(*) as all_rows
       from content_items where theme in ('verbes','verbes-essentiels') group by 1 order by 1`,
  );
  for (const r of rows) console.log(`  ${String(r.theme).padEnd(24)} published=${r.published} all=${r.all_rows}`);

  // ── 3. DO THE PARTICIPLES EXIST AS ROWS? ─────────────────────────────────
  rows = await q(
    '3. EVERY BARE-WORD ROW WHOSE fr IS ONE OF THE FORTY',
    `select fr, id, theme, status, kind, respell, en, gender from content_items
      where fr = any($1) and fr !~ ' ' order by fr, id`,
    [ALL_PARTICIPLES],
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) {
    console.log(`  ${String(r.fr).padEnd(11)} ${r.id.padEnd(40)} ${String(r.theme).padEnd(22)} ${String(r.status).padEnd(10)} ${String(r.kind).padEnd(9)} [${r.respell ?? ''}] ${r.en ?? ''} g=${r.gender ?? '-'}`);
  }

  const present = new Set(rows.map((r) => r.fr as string));
  console.log('\n  BY FAMILY, present as a bare row:');
  for (const [fam, members] of Object.entries(FAMILIES)) {
    const hit = members.filter((m) => present.has(m));
    console.log(`  ${fam.padEnd(5)} ${hit.length}/${members.length}  ${hit.join(' · ') || '(none)'}`);
  }

  rows = await q(
    '3b. THE SAME FORMS INSIDE A PHRASE ROW (fr contains a space)',
    `select fr, id, theme, status, respell, en from content_items
      where fr ~ ' ' and status='published'
        and fr ~* ('(^|[^[:alpha:]])(' || $1 || ')([^[:alpha:]]|$)') order by id limit 80`,
    [ALL_PARTICIPLES.join('|')],
  );
  console.log(`  ${rows.length} phrase rows shown (limit 80)`);
  for (const r of rows) console.log(`  ${r.id.padEnd(40)} ${String(r.fr).padEnd(46)} ${r.respell ?? ''}`);

  // ── 4. PER-PARTICIPLE EVIDENCE ────────────────────────────────────────────
  console.log('\n### 4. PUBLISHED SENTENCES PER PARTICIPLE, after a form of avoir/être');
  for (const p of ALL_PARTICIPLES) {
    const { rows: r } = await pool.query(
      `select count(*) as n from content_items where status='published'
         and fr ~* ('(^|[^[:alpha:]])(ai|as|a|avons|avez|ont|suis|es|est|sommes|êtes|sont) +' || $1 || '([^[:alpha:]]|$)')`,
      [p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')] as never[],
    );
    const { rows: r2 } = await pool.query(
      `select count(*) as n from content_items where status='published'
         and fr ~* ('(^|[^[:alpha:]])' || $1 || '([^[:alpha:]]|$)')`,
      [p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')] as never[],
    );
    console.log(`  ${p.padEnd(11)} after-aux=${String(r[0].n).padStart(3)}   anywhere=${String(r2[0].n).padStart(4)}`);
  }

  // ── 5. THE INFINITIVES ────────────────────────────────────────────────────
  rows = await q(
    '5. THE INFINITIVES, every row at every status',
    `select fr, id, theme, status, kind, respell, ipa, en, gender, drills from content_items
      where fr = any($1) order by fr, id`,
    [INFINITIVES],
  );
  for (const r of rows) {
    console.log(`  ${String(r.fr).padEnd(12)} ${r.id.padEnd(38)} ${String(r.theme).padEnd(22)} ${String(r.status).padEnd(10)} [${r.respell ?? ''}] ${String(r.en ?? '').padEnd(22)} g=${r.gender ?? '-'} d=${JSON.stringify(r.drills)}`);
  }
  const infPresent = new Set(rows.map((r) => r.fr as string));
  console.log(`\n  ABSENT INFINITIVES: ${INFINITIVES.filter((i) => !infPresent.has(i)).join(' · ') || '(none)'}`);

  // ── 6. dû AGAINST du ──────────────────────────────────────────────────────
  rows = await q(
    '6. dû, du, due, dus AS ROWS AND INSIDE PHRASES',
    `select fr, id, theme, status, respell, en from content_items
      where fr in ('dû','du','due','dus','dues')
         or fr ~* '(^|[^[:alpha:]])(dû|due)([^[:alpha:]]|$)' order by fr, id`,
  );
  for (const r of rows) console.log(`  ${String(r.fr).padEnd(30)} ${r.id.padEnd(40)} ${String(r.status).padEnd(10)} [${r.respell ?? ''}] ${r.en ?? ''}`);

  // ── 7. AGREEMENT AFTER avoir, WHICH MUST NOT APPEAR ──────────────────────
  rows = await q(
    '7. AGREED IRREGULAR PARTICIPLE AFTER avoir (must be zero in what I author)',
    `select count(*) as n from content_items where status='published'
      and fr ~* '(^|[^[:alpha:]])(ai|as|a|avons|avez|ont) +(prise|prises|mise|mises|faite|faites|vue|vues|dite|dites|ouverte|ouvertes)([^[:alpha:]]|$)'`,
  );
  console.log(`  ${rows[0].n} published rows`);

  // ── 8. ÊTRE-TAKING PARTICIPLES, for the a2.21 flag ───────────────────────
  rows = await q(
    '8. PUBLISHED ROWS USING être + one of the être-taking participles',
    `select id, fr, respell from content_items where status='published'
      and fr ~* '(^|[^[:alpha:]])(suis|es|est|sommes|êtes|sont) +(venu|venue|venus|venues|né|née|mort|morte|allé|allée|allés|allées|parti|partie|sorti|sortie|resté|restée|descendu|monté|tombé|entré|rentré|arrivé)([^[:alpha:]]|$)'
      order by id limit 40`,
  );
  console.log(`  ${rows.length} rows`);
  for (const r of rows) console.log(`  ${r.id.padEnd(40)} ${String(r.fr).padEnd(46)} ${r.respell ?? ''}`);

  await pool.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
