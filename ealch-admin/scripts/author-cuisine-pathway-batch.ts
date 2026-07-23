// Content batch — cuisine pathway breadth (Build + Listen).
//
// Adds 12 new A1 sentence items for 'cuisine': 6 for the Construire/Build
// step (drills: sentence+review) and 6 for the Écouter/Listen step
// (drills: dictation) — closing the "By Theme" practice pathway gap for
// this theme. Discover/Pronounce were already well covered (160+ items);
// Construire and Écouter had only 1 item each.
//
// Same contract as author-marche-batch.ts: every item passes validateItem,
// then the whole set upserts into content_items as `published` in ONE
// transaction. Idempotent — items upsert by id, so re-running is a
// no-op-equivalent.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-cuisine-pathway-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-cuisine-pathway-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

export const ITEMS: Item[] = [
  // ── 6 Build (Construire) items ──
  { id: 'fr.a1.cuisine.169', kind: 'sentence', level: 'a1', theme: 'cuisine', fr: 'Je coupe les carottes avec un couteau.', en: 'I cut the carrots with a knife.', notes: '{"tiles":[{"w":"Je coupe","t":"I cut"},{"w":"les carottes","t":"the carrots"},{"w":"avec un couteau.","t":"with a knife"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.cuisine.170', kind: 'sentence', level: 'a1', theme: 'cuisine', fr: 'Elle met du sel dans la soupe.', en: 'She puts some salt in the soup.', notes: '{"tiles":[{"w":"Elle met","t":"She puts"},{"w":"du sel","t":"some salt"},{"w":"dans la soupe.","t":"in the soup"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.cuisine.171', kind: 'sentence', level: 'a1', theme: 'cuisine', fr: 'Nous épluchons les pommes de terre pour le repas.', en: 'We peel the potatoes for the meal.', notes: '{"tiles":[{"w":"Nous épluchons","t":"We peel"},{"w":"les pommes de terre","t":"the potatoes"},{"w":"pour le repas.","t":"for the meal"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.cuisine.172', kind: 'sentence', level: 'a1', theme: 'cuisine', fr: 'Tu râpes le fromage sur les pâtes.', en: 'You grate the cheese onto the pasta.', notes: '{"tiles":[{"w":"Tu râpes","t":"You grate"},{"w":"le fromage","t":"the cheese"},{"w":"sur les pâtes.","t":"onto the pasta"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.cuisine.173', kind: 'sentence', level: 'a1', theme: 'cuisine', fr: 'Il assaisonne le poulet avec du poivre.', en: 'He seasons the chicken with pepper.', notes: '{"tiles":[{"w":"Il assaisonne","t":"He seasons"},{"w":"le poulet","t":"the chicken"},{"w":"avec du poivre.","t":"with pepper"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.cuisine.174', kind: 'sentence', level: 'a1', theme: 'cuisine', fr: 'Je mets les assiettes et les fourchettes sur la table.', en: 'I put the plates and forks on the table.', notes: '{"tiles":[{"w":"Je mets","t":"I put"},{"w":"les assiettes","t":"the plates"},{"w":"et les fourchettes","t":"and the forks"},{"w":"sur la table.","t":"on the table"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  // ── 6 Listen (Écouter) items ──
  { id: 'fr.a1.cuisine.175', kind: 'sentence', level: 'a1', theme: 'cuisine', fr: 'Le poisson cuit dans le four.', en: 'The fish is cooking in the oven.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.cuisine.176', kind: 'sentence', level: 'a1', theme: 'cuisine', fr: "Nous buvons du jus d'orange le matin.", en: 'We drink orange juice in the morning.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.cuisine.177', kind: 'sentence', level: 'a1', theme: 'cuisine', fr: 'Le lait est dans le frigo.', en: 'The milk is in the fridge.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.cuisine.178', kind: 'sentence', level: 'a1', theme: 'cuisine', fr: 'Elle achète des fraises au marché.', en: 'She buys strawberries at the market.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.cuisine.179', kind: 'sentence', level: 'a1', theme: 'cuisine', fr: 'Il ajoute ses épices préférées à la sauce.', en: 'He adds his favorite spices to the sauce.', notes: '"ses", possessive, not "ces"', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.cuisine.180', kind: 'sentence', level: 'a1', theme: 'cuisine', fr: 'Le porc rôtit dans le four.', en: 'The pork is roasting in the oven.', notes: '"porc", the final "c" is silent', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
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
      `select count(*)::text as n from content_items where theme = 'cuisine' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  cuisine published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-affirmed)`);
    console.log(`  cuisine after: ${beforeN + (ITEMS.length - updating.length)}`);

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
    console.log(`\n✓ cuisine pathway batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
