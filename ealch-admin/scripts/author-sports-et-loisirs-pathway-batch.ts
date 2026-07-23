// Content batch — sports-et-loisirs pathway breadth (Build + Listen).
//
// Adds 12 new A1 sentence items for 'sports-et-loisirs': 6 for the
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
//   pnpm tsx scripts/author-sports-et-loisirs-pathway-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-sports-et-loisirs-pathway-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

export const ITEMS: Item[] = [
  // ── 6 Build (Construire) items ──
  { id: 'fr.a1.sports-et-loisirs.084', kind: 'sentence', level: 'a1', theme: 'sports-et-loisirs', fr: 'Elle joue au tennis avec sa sœur.', en: 'She plays tennis with her sister.', notes: '{"tiles":[{"w":"Elle joue","t":"she plays"},{"w":"au tennis","t":"tennis"},{"w":"avec sa sœur.","t":"with her sister"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.sports-et-loisirs.085', kind: 'sentence', level: 'a1', theme: 'sports-et-loisirs', fr: 'Nous faisons du ski en hiver.', en: 'We go skiing in winter.', notes: '{"tiles":[{"w":"Nous faisons","t":"we go"},{"w":"du ski","t":"skiing"},{"w":"en hiver.","t":"in winter"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.sports-et-loisirs.086', kind: 'sentence', level: 'a1', theme: 'sports-et-loisirs', fr: 'Le joueur marque un but.', en: 'The player scores a goal.', notes: '{"tiles":[{"w":"Le joueur","t":"the player"},{"w":"marque","t":"scores"},{"w":"un but.","t":"a goal"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.sports-et-loisirs.087', kind: 'sentence', level: 'a1', theme: 'sports-et-loisirs', fr: "L'équipe a gagné le match hier.", en: 'The team won the match yesterday.', notes: '{"tiles":[{"w":"L\'équipe","t":"the team"},{"w":"a gagné","t":"won"},{"w":"le match","t":"the match"},{"w":"hier.","t":"yesterday"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.sports-et-loisirs.088', kind: 'sentence', level: 'a1', theme: 'sports-et-loisirs', fr: 'Mon frère fait de la photographie le week-end.', en: 'My brother does photography on weekends.', notes: '{"tiles":[{"w":"Mon frère","t":"my brother"},{"w":"fait","t":"does"},{"w":"de la photographie","t":"photography"},{"w":"le week-end.","t":"on weekends"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.sports-et-loisirs.089', kind: 'sentence', level: 'a1', theme: 'sports-et-loisirs', fr: "J'aime les jeux vidéo le soir.", en: 'I like video games in the evening.', notes: '{"tiles":[{"w":"J\'aime","t":"I like"},{"w":"les jeux vidéo","t":"video games"},{"w":"le soir.","t":"in the evening"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  // ── 6 Listen (Écouter) items ──
  { id: 'fr.a1.sports-et-loisirs.090', kind: 'sentence', level: 'a1', theme: 'sports-et-loisirs', fr: 'Elle met ses baskets pour courir.', en: 'She puts on her sneakers to run.', notes: '"ses" is possessive (her), not "ces" (these/those).', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.sports-et-loisirs.091', kind: 'sentence', level: 'a1', theme: 'sports-et-loisirs', fr: 'Le champion gagne la compétition.', en: 'The champion wins the competition.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.sports-et-loisirs.092', kind: 'sentence', level: 'a1', theme: 'sports-et-loisirs', fr: 'Nous allons au stade dimanche.', en: 'We are going to the stadium on Sunday.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.sports-et-loisirs.093', kind: 'sentence', level: 'a1', theme: 'sports-et-loisirs', fr: "L'arbitre porte un sifflet noir.", en: 'The referee wears a black whistle.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.sports-et-loisirs.094', kind: 'sentence', level: 'a1', theme: 'sports-et-loisirs', fr: 'Ils font du jardinage le samedi.', en: 'They do some gardening on Saturdays.', notes: '"font" (they do) sounds like "fond" (bottom), but is spelled with a t.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.sports-et-loisirs.095', kind: 'sentence', level: 'a1', theme: 'sports-et-loisirs', fr: 'Elle aime sa collection de cartes.', en: 'She loves her card collection.', notes: '"-tion" sounds like "syon" but is always spelled t-i-o-n.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
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
      `select count(*)::text as n from content_items where theme = 'sports-et-loisirs' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  sports-et-loisirs published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-affirmed)`);
    console.log(`  sports-et-loisirs after: ${beforeN + (ITEMS.length - updating.length)}`);

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
    console.log(`\n✓ sports-et-loisirs pathway batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
