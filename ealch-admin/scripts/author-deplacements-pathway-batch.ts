// Content batch — deplacements pathway breadth (Build + Listen).
//
// Adds 12 new A1 sentence items for 'deplacements': 6 for the
// Construire/Build step (drills: sentence+review) and 6 for the
// Écouter/Listen step (drills: dictation) — closing the "By Theme"
// practice pathway gap for this theme.
//
// Same contract as author-marche-batch.ts: every item passes validateItem,
// then the whole set upserts into content_items as `published` in ONE
// transaction. Idempotent — items upsert by id, so re-running is a
// no-op-equivalent.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-deplacements-pathway-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-deplacements-pathway-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

export const ITEMS: Item[] = [
  // ── 6 Build (Construire) items ──
  { id: 'fr.a1.deplacements.130', kind: 'sentence', level: 'a1', theme: 'deplacements', fr: 'Le passager monte dans le bus.', en: 'The passenger gets on the bus.', notes: '{"tiles":[{"w":"Le passager","t":"the passenger"},{"w":"monte","t":"gets on"},{"w":"dans le bus.","t":"in the bus"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.deplacements.131', kind: 'sentence', level: 'a1', theme: 'deplacements', fr: "Le conducteur s'arrête au feu rouge.", en: 'The driver stops at the red light.', notes: '{"tiles":[{"w":"Le conducteur","t":"the driver"},{"w":"s\'arrête","t":"stops"},{"w":"au feu rouge.","t":"at the red light"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.deplacements.132', kind: 'sentence', level: 'a1', theme: 'deplacements', fr: 'Nous cherchons la station de métro.', en: "We're looking for the metro station.", notes: '{"tiles":[{"w":"Nous cherchons","t":"we\'re looking for"},{"w":"la station de métro.","t":"the metro station"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.deplacements.133', kind: 'sentence', level: 'a1', theme: 'deplacements', fr: 'Nous avons attendu le train sur le quai.', en: 'We waited for the train on the platform.', notes: '{"tiles":[{"w":"Nous avons attendu","t":"we waited for"},{"w":"le train","t":"the train"},{"w":"sur le quai.","t":"on the platform"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.deplacements.134', kind: 'sentence', level: 'a1', theme: 'deplacements', fr: 'Je veux un aller-retour pour Lyon.', en: 'I want a round-trip ticket to Lyon.', notes: '{"tiles":[{"w":"Je veux","t":"I want"},{"w":"un aller-retour","t":"a round-trip ticket"},{"w":"pour Lyon.","t":"to Lyon"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.deplacements.135', kind: 'sentence', level: 'a1', theme: 'deplacements', fr: 'La voiture continue tout droit sur la route.', en: 'The car keeps going straight on the road.', notes: '{"tiles":[{"w":"La voiture","t":"the car"},{"w":"continue tout droit","t":"keeps going straight"},{"w":"sur la route.","t":"on the road"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  // ── 6 Listen (Écouter) items ──
  { id: 'fr.a1.deplacements.136', kind: 'sentence', level: 'a1', theme: 'deplacements', fr: 'Le contrôleur vérifie les billets dans le train.', en: 'The ticket inspector checks the tickets on the train.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.deplacements.137', kind: 'sentence', level: 'a1', theme: 'deplacements', fr: "Nous attendons dans la salle d'attente.", en: "We're waiting in the waiting room.", tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.deplacements.138', kind: 'sentence', level: 'a1', theme: 'deplacements', fr: 'Le piéton traverse la rue au passage piéton.', en: 'The pedestrian crosses the street at the crosswalk.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.deplacements.139', kind: 'sentence', level: 'a1', theme: 'deplacements', fr: "Il y a un embouteillage à l'heure de pointe.", en: "There's a traffic jam during rush hour.", notes: '"a" (from avoir, no accent) vs "à" (preposition, with accent), don\'t mix them up', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.deplacements.140', kind: 'sentence', level: 'a1', theme: 'deplacements', fr: "Le conducteur s'est garé dans le parking.", en: 'The driver parked in the car park.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.deplacements.141', kind: 'sentence', level: 'a1', theme: 'deplacements', fr: 'Le camion roule doucement à cause des travaux.', en: 'The truck is driving slowly because of the roadworks.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
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
      `select count(*)::text as n from content_items where theme = 'deplacements' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  deplacements published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-affirmed)`);
    console.log(`  deplacements after: ${beforeN + (ITEMS.length - updating.length)}`);

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
    console.log(`\n✓ deplacements pathway batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
