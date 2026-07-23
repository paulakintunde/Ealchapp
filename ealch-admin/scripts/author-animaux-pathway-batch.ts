// Content batch — animaux pathway breadth (Build + Listen).
//
// Adds 12 new A1 sentence items for 'animaux': 6 for the Construire/Build
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
//   pnpm tsx scripts/author-animaux-pathway-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-animaux-pathway-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

export const ITEMS: Item[] = [
  // ── 6 Build (Construire) items ──
  { id: 'fr.a1.animaux.097', kind: 'sentence', level: 'a1', theme: 'animaux', fr: 'Le chien mange sa nourriture le matin.', en: 'The dog eats his food in the morning.', notes: '{"tiles":[{"w":"Le chien","t":"the dog"},{"w":"mange","t":"eats"},{"w":"sa nourriture","t":"his food"},{"w":"le matin.","t":"in the morning"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.animaux.098', kind: 'sentence', level: 'a1', theme: 'animaux', fr: 'Mon chat dort dans son panier.', en: 'My cat sleeps in its basket.', notes: '{"tiles":[{"w":"Mon chat","t":"my cat"},{"w":"dort","t":"sleeps"},{"w":"dans son panier.","t":"in its basket"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.animaux.099', kind: 'sentence', level: 'a1', theme: 'animaux', fr: 'Le lapin mange une carotte orange.', en: 'The rabbit eats an orange carrot.', notes: '{"tiles":[{"w":"Le lapin","t":"the rabbit"},{"w":"mange","t":"eats"},{"w":"une carotte","t":"a carrot"},{"w":"orange.","t":"orange"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.animaux.100', kind: 'sentence', level: 'a1', theme: 'animaux', fr: "Le cheval boit de l'eau fraîche.", en: 'The horse drinks cool water.', notes: '{"tiles":[{"w":"Le cheval","t":"the horse"},{"w":"boit","t":"drinks"},{"w":"de l\'eau","t":"water"},{"w":"fraîche.","t":"cool"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.animaux.101', kind: 'sentence', level: 'a1', theme: 'animaux', fr: 'Le poisson nage dans son bocal.', en: 'The fish swims in its bowl.', notes: '{"tiles":[{"w":"Le poisson","t":"the fish"},{"w":"nage","t":"swims"},{"w":"dans son bocal.","t":"in its bowl"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.animaux.102', kind: 'sentence', level: 'a1', theme: 'animaux', fr: 'Le chiot joue avec une balle.', en: 'The puppy plays with a ball.', notes: '{"tiles":[{"w":"Le chiot","t":"the puppy"},{"w":"joue","t":"plays"},{"w":"avec une balle.","t":"with a ball"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  // ── 6 Listen (Écouter) items ──
  { id: 'fr.a1.animaux.103', kind: 'sentence', level: 'a1', theme: 'animaux', fr: 'La poule pond un œuf tous les jours.', en: 'The hen lays an egg every day.', notes: '"pond" (from pondre) rhymes with "rond"; the final d is silent.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.animaux.104', kind: 'sentence', level: 'a1', theme: 'animaux', fr: "Le canard nage sur l'étang calme.", en: 'The duck swims on the calm pond.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.animaux.105', kind: 'sentence', level: 'a1', theme: 'animaux', fr: 'Les moutons broutent dans le pré vert.', en: 'The sheep graze in the green meadow.', notes: '"broutent" ends in a silent -ent to agree with the plural subject.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.animaux.106', kind: 'sentence', level: 'a1', theme: 'animaux', fr: 'Le cochon adore jouer dans la boue.', en: 'The pig loves playing in the mud.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.animaux.107', kind: 'sentence', level: 'a1', theme: 'animaux', fr: "Mon chien a mal à la patte.", en: "My dog's paw hurts.", notes: '"a mal" (avoir mal) means "hurts", not a literal "has bad".', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.animaux.108', kind: 'sentence', level: 'a1', theme: 'animaux', fr: 'Le vétérinaire soigne les animaux malades.', en: 'The vet takes care of sick animals.', notes: '"vétérinaire" is often shortened to "véto" in everyday speech.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
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
      `select count(*)::text as n from content_items where theme = 'animaux' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  animaux published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-affirmed)`);
    console.log(`  animaux after: ${beforeN + (ITEMS.length - updating.length)}`);

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
    console.log(`\n✓ animaux pathway batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
