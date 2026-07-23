// Content batch — famille pathway breadth (Build + Listen).
//
// Adds 12 new A1 sentence items for 'famille': 6 for the Construire/Build
// step (drills: sentence+review) and 6 for the Écouter/Listen step
// (drills: dictation) — closing the "By Theme" practice pathway gap for
// this theme.
//
// Same contract as author-marche-batch.ts: every item passes validateItem,
// then the whole set upserts into content_items as `published` in ONE
// transaction. Idempotent — items upsert by id, so re-running is a
// no-op-equivalent.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-famille-pathway-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-famille-pathway-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

export const ITEMS: Item[] = [
  // ── 6 Build (Construire) items ──
  { id: 'fr.a1.famille.087', kind: 'sentence', level: 'a1', theme: 'famille', fr: 'Mon oncle habite avec ma tante.', en: 'My uncle lives with my aunt.', notes: '{"tiles":[{"w":"Mon oncle","t":"my uncle"},{"w":"habite avec","t":"lives with"},{"w":"ma tante.","t":"my aunt"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.famille.088', kind: 'sentence', level: 'a1', theme: 'famille', fr: 'Mes grands-parents ont trois enfants.', en: 'My grandparents have three children.', notes: '{"tiles":[{"w":"Mes grands-parents","t":"my grandparents"},{"w":"ont","t":"have"},{"w":"trois enfants.","t":"three children"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.famille.089', kind: 'sentence', level: 'a1', theme: 'famille', fr: 'Ma cousine ressemble à sa mère.', en: 'My cousin looks like her mother.', notes: '{"tiles":[{"w":"Ma cousine","t":"my cousin"},{"w":"ressemble à","t":"looks like"},{"w":"sa mère.","t":"her mother"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.famille.090', kind: 'sentence', level: 'a1', theme: 'famille', fr: "Le mari de ma tante s'appelle Marc.", en: "My aunt's husband is named Marc.", notes: '{"tiles":[{"w":"Le mari","t":"the husband"},{"w":"de ma tante","t":"of my aunt"},{"w":"s\'appelle Marc.","t":"is named Marc"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.famille.091', kind: 'sentence', level: 'a1', theme: 'famille', fr: 'Mon neveu et ma nièce jouent ensemble.', en: 'My nephew and my niece play together.', notes: '{"tiles":[{"w":"Mon neveu","t":"my nephew"},{"w":"et ma nièce","t":"and my niece"},{"w":"jouent ensemble.","t":"play together"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.famille.092', kind: 'sentence', level: 'a1', theme: 'famille', fr: 'Le fils de mon frère est mon neveu.', en: "My brother's son is my nephew.", notes: '{"tiles":[{"w":"Le fils","t":"the son"},{"w":"de mon frère","t":"of my brother"},{"w":"est mon neveu.","t":"is my nephew"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  // ── 6 Listen (Écouter) items ──
  { id: 'fr.a1.famille.093', kind: 'sentence', level: 'a1', theme: 'famille', fr: 'Mon grand-père a quatre-vingts ans.', en: 'My grandfather is eighty years old.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.famille.094', kind: 'sentence', level: 'a1', theme: 'famille', fr: 'Ma tante est mariée, mais mon oncle est divorcé.', en: 'My aunt is married, but my uncle is divorced.', notes: '"mariée" takes an extra e to agree with "tante" (feminine).', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.famille.095', kind: 'sentence', level: 'a1', theme: 'famille', fr: 'Les parents de mon mari habitent à Nice.', en: "My husband's parents live in Nice.", tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.famille.096', kind: 'sentence', level: 'a1', theme: 'famille', fr: 'Ma grand-mère aime toute sa famille.', en: 'My grandmother loves her whole family.', notes: '"toute", not "tout", agrees with the feminine "famille".', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.famille.097', kind: 'sentence', level: 'a1', theme: 'famille', fr: 'Mon cousin se marie en juin.', en: 'My cousin is getting married in June.', notes: '"se marier" is reflexive, do not drop the "se".', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.famille.098', kind: 'sentence', level: 'a1', theme: 'famille', fr: 'Mon beau-frère a un nouveau bébé.', en: 'My brother-in-law has a new baby.', notes: '"a" (has, from avoir), not "à" (to), classic homophone trap.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
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
    const before = await client.query<{ n: string }>(
      `select count(*)::text as n from content_items where theme = 'famille' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  famille published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-affirmed)`);
    console.log(`  famille after: ${beforeN + (ITEMS.length - updating.length)}`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all items valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, gender, example, notes, tags, drills, audio_ref, version, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9::jsonb,$10,$11,$12,null,$13,'published','human')
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
    console.log(`\n✓ famille pathway batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
