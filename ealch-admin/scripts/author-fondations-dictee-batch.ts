// Content batch — La Dictée coverage for the 13 previously zero/partial-coverage
// 'fondations' sub-themes: nombres, questions, couleurs, jours-et-mois,
// mots-essentiels, verbes-essentiels, adjectifs-essentiels, expressions-utiles,
// noms-essentiels, adverbes-essentiels, faux-amis, mots-de-liaison,
// rp-recits-temps. 191 new dictée sentence items per theme (2,483 total),
// continuing each theme's existing a1 id sequence where one already existed.
//
// Items live in ./data/fondations-dictee-items.json (2,483 items is too large
// for a readable inline literal). Same contract as author-famille-pathway-batch.ts:
// every item passes validateItem, then the whole set upserts into content_items
// as `published` in ONE transaction. Idempotent — items upsert by id, so
// re-running is a no-op-equivalent.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-fondations-dictee-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-fondations-dictee-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const ITEMS: Item[] = JSON.parse(
  readFileSync(join(__dirname, 'data/fondations-dictee-items.json'), 'utf8')
);

const THEMES = [
  'nombres',
  'questions',
  'couleurs',
  'jours-et-mois',
  'mots-essentiels',
  'verbes-essentiels',
  'adjectifs-essentiels',
  'expressions-utiles',
  'noms-essentiels',
  'adverbes-essentiels',
  'faux-amis',
  'mots-de-liaison',
  'rp-recits-temps',
];

// ── Apply ───────────────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  const issues = ITEMS.flatMap((it) => validateItem(it, it.id));
  if (issues.length) die(`items invalid:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

  const ids = ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    const before = await client.query<{ theme: string; n: string }>(
      `select theme, count(*)::text as n from content_items
       where theme = any($1) and status = 'published'
       group by theme`,
      [THEMES]
    );
    const beforeByTheme = Object.fromEntries(before.rows.map((r) => [r.theme, Number(r.n)]));
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = new Set(overlap.rows.map((r) => r.id));

    console.log(`\n  fondations dictée batch: ${ITEMS.length} items (${ITEMS.length - updating.size} new, ${updating.size} re-affirmed)`);
    for (const t of THEMES) {
      const before_ = beforeByTheme[t] ?? 0;
      const added = ITEMS.filter((it) => it.theme === t && !updating.has(it.id)).length;
      console.log(`    ${t.padEnd(24)} published today: ${String(before_).padStart(4)}  →  after: ${before_ + added}`);
    }

    if (DRY_RUN) {
      console.log('\n✓ dry run — all items valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, gender, example, notes, tags, drills, audio_ref, version, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9::jsonb,$10,$11,$12,null,$13,'published','llm')
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, gender=excluded.gender, example=excluded.example, notes=excluded.notes,
           tags=excluded.tags, drills=excluded.drills, version=excluded.version`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.version,
        ]
      );
    }
    await client.query('commit');
    console.log(`\n✓ fondations dictée batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
