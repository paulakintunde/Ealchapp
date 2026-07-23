// Content batch — routines pathway breadth (Build + Listen).
//
// Adds 12 new A1 sentence items for 'routines': 6 for the Construire/Build
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
//   pnpm tsx scripts/author-routines-pathway-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-routines-pathway-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

export const ITEMS: Item[] = [
  // ── 6 Build (Construire) items ──
  { id: 'fr.a1.routines.091', kind: 'sentence', level: 'a1', theme: 'routines', fr: 'Le soir, il se brosse les dents avant de se coucher.', en: 'In the evening, he brushes his teeth before going to bed.', notes: '{"tiles":[{"w":"Le soir,","t":"in the evening,"},{"w":"il se brosse les dents","t":"he brushes his teeth"},{"w":"avant de se coucher.","t":"before going to bed"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.routines.092', kind: 'sentence', level: 'a1', theme: 'routines', fr: 'Nous prenons le petit déjeuner tôt le matin.', en: 'We have breakfast early in the morning.', notes: '{"tiles":[{"w":"Nous prenons","t":"we have"},{"w":"le petit déjeuner","t":"breakfast"},{"w":"tôt le matin.","t":"early in the morning"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.routines.093', kind: 'sentence', level: 'a1', theme: 'routines', fr: "Elle se douche, puis elle s'habille.", en: 'She showers, then gets dressed.', notes: '{"tiles":[{"w":"Elle se douche,","t":"she showers,"},{"w":"puis","t":"then"},{"w":"elle s\'habille.","t":"she gets dressed"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.routines.094', kind: 'sentence', level: 'a1', theme: 'routines', fr: 'Après le travail, il rentre à la maison.', en: 'After work, he goes home.', notes: '{"tiles":[{"w":"Après le travail,","t":"after work,"},{"w":"il rentre à la maison.","t":"he goes home"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.routines.095', kind: 'sentence', level: 'a1', theme: 'routines', fr: 'Le week-end, nous faisons la grasse matinée.', en: 'On weekends, we sleep in.', notes: '{"tiles":[{"w":"Le week-end,","t":"on weekends,"},{"w":"nous faisons la grasse matinée.","t":"we sleep in"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.routines.096', kind: 'sentence', level: 'a1', theme: 'routines', fr: 'Avant de dormir, elle éteint la lumière.', en: 'Before sleeping, she turns off the light.', notes: '{"tiles":[{"w":"Avant de dormir,","t":"before sleeping,"},{"w":"elle éteint la lumière.","t":"she turns off the light"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  // ── 6 Listen (Écouter) items ──
  { id: 'fr.a1.routines.097', kind: 'sentence', level: 'a1', theme: 'routines', fr: 'Le matin, elle se maquille et se coiffe.', en: 'In the morning, she puts on makeup and does her hair.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.routines.098', kind: 'sentence', level: 'a1', theme: 'routines', fr: "Il se rase avant d'aller au travail.", en: 'He shaves before going to work.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.routines.099', kind: 'sentence', level: 'a1', theme: 'routines', fr: 'Nous faisons la vaisselle après le dîner.', en: 'We do the dishes after dinner.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.routines.100', kind: 'sentence', level: 'a1', theme: 'routines', fr: 'Elle range sa chambre tous les jours.', en: 'She tidies her room every day.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.routines.101', kind: 'sentence', level: 'a1', theme: 'routines', fr: 'Ses enfants font leurs lits chaque matin.', en: 'Her children make their beds every morning.', notes: '"Ses" is a possessive (her, his), not to be confused with "ces" (these, those).', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.routines.102', kind: 'sentence', level: 'a1', theme: 'routines', fr: "Le week-end, nous faisons la sieste l'après-midi.", en: 'On weekends, we take a nap in the afternoon.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
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
      `select count(*)::text as n from content_items where theme = 'routines' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  routines published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-affirmed)`);
    console.log(`  routines after: ${beforeN + (ITEMS.length - updating.length)}`);

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
    console.log(`\n✓ routines pathway batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
