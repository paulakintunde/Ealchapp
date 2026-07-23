// Content batch — maison pathway breadth (Build + Listen).
//
// Adds 12 new A1 sentence items for 'maison': 6 for the Construire/Build
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
//   pnpm tsx scripts/author-maison-pathway-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-maison-pathway-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

export const ITEMS: Item[] = [
  // ── 6 Build (Construire) items ──
  { id: 'fr.a1.maison.104', kind: 'sentence', level: 'a1', theme: 'maison', fr: 'La clé est sous le paillasson.', en: 'The key is under the doormat.', notes: '{"tiles":[{"w":"La clé","t":"the key"},{"w":"est","t":"is"},{"w":"sous","t":"under"},{"w":"le paillasson.","t":"the doormat"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.maison.105', kind: 'sentence', level: 'a1', theme: 'maison', fr: 'Le canapé est dans le salon.', en: 'The sofa is in the living room.', notes: '{"tiles":[{"w":"Le canapé","t":"the sofa"},{"w":"est","t":"is"},{"w":"dans","t":"in"},{"w":"le salon.","t":"the living room"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.maison.106', kind: 'sentence', level: 'a1', theme: 'maison', fr: 'Il y a un miroir dans la salle de bain.', en: "There's a mirror in the bathroom.", notes: '{"tiles":[{"w":"Il y a","t":"there is"},{"w":"un miroir","t":"a mirror"},{"w":"dans","t":"in"},{"w":"la salle de bain.","t":"the bathroom"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.maison.107', kind: 'sentence', level: 'a1', theme: 'maison', fr: "J'ai fermé la fenêtre.", en: 'I closed the window.', notes: '{"tiles":[{"w":"J\'ai fermé","t":"I closed"},{"w":"la fenêtre.","t":"the window"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.maison.108', kind: 'sentence', level: 'a1', theme: 'maison', fr: 'Le jardin a une grande pelouse.', en: 'The garden has a big lawn.', notes: '{"tiles":[{"w":"Le jardin","t":"the garden"},{"w":"a","t":"has"},{"w":"une grande pelouse.","t":"a big lawn"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.maison.109', kind: 'sentence', level: 'a1', theme: 'maison', fr: 'Nous avons emménagé dans un appartement.', en: 'We moved into an apartment.', notes: '{"tiles":[{"w":"Nous avons emménagé","t":"we moved in"},{"w":"dans","t":"into"},{"w":"un appartement.","t":"an apartment"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  // ── 6 Listen (Écouter) items ──
  { id: 'fr.a1.maison.110', kind: 'sentence', level: 'a1', theme: 'maison', fr: 'Il y a une panne de chauffage.', en: "There's a heating breakdown.", tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.maison.111', kind: 'sentence', level: 'a1', theme: 'maison', fr: 'Il y a une fuite sous le lavabo.', en: "There's a leak under the sink.", tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.maison.112', kind: 'sentence', level: 'a1', theme: 'maison', fr: 'Les volets sont fermés le soir.', en: 'The shutters are closed in the evening.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.maison.113', kind: 'sentence', level: 'a1', theme: 'maison', fr: "Elle range ses draps dans l'armoire.", en: 'She puts her sheets away in the wardrobe.', notes: '"ses" is possessive here, not "ces".', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.maison.114', kind: 'sentence', level: 'a1', theme: 'maison', fr: 'Le compteur électrique est dans le couloir.', en: 'The electric meter is in the hallway.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.maison.115', kind: 'sentence', level: 'a1', theme: 'maison', fr: 'La sonnette ne fonctionne plus.', en: 'The doorbell no longer works.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
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
      `select count(*)::text as n from content_items where theme = 'maison' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  maison published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-affirmed)`);
    console.log(`  maison after: ${beforeN + (ITEMS.length - updating.length)}`);

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
    console.log(`\n✓ maison pathway batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
