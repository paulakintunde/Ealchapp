// Content batch — metiers pathway breadth (Build + Listen).
//
// Adds 12 new A1 sentence items for 'metiers': 6 for the Construire/Build
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
//   pnpm tsx scripts/author-metiers-pathway-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-metiers-pathway-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

export const ITEMS: Item[] = [
  // ── 6 Build (Construire) items ──
  { id: 'fr.a1.metiers.124', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Ma sœur est vétérinaire dans une clinique.', en: 'My sister is a veterinarian at a clinic.', notes: '{"tiles":[{"w":"Ma sœur","t":"my sister"},{"w":"est vétérinaire","t":"is a veterinarian"},{"w":"dans une clinique.","t":"at a clinic"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.125', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Mon oncle travaille comme architecte à Paris.', en: 'My uncle works as an architect in Paris.', notes: '{"tiles":[{"w":"Mon oncle","t":"my uncle"},{"w":"travaille comme architecte","t":"works as an architect"},{"w":"à Paris.","t":"in Paris"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.126', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Le journaliste travaille pour un grand journal.', en: 'The journalist works for a major newspaper.', notes: '{"tiles":[{"w":"Le journaliste","t":"the journalist"},{"w":"travaille","t":"works"},{"w":"pour un grand journal.","t":"for a major newspaper"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.127', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Le boulanger fait du pain tous les matins.', en: 'The baker makes bread every morning.', notes: '{"tiles":[{"w":"Le boulanger","t":"the baker"},{"w":"fait du pain","t":"makes bread"},{"w":"tous les matins.","t":"every morning"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.128', kind: 'sentence', level: 'a1', theme: 'metiers', fr: "L'infirmière travaille à l'hôpital la nuit.", en: 'The nurse works at the hospital at night.', notes: '{"tiles":[{"w":"L\'infirmière","t":"the nurse"},{"w":"travaille","t":"works"},{"w":"à l\'hôpital","t":"at the hospital"},{"w":"la nuit.","t":"at night"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.129', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Le facteur apporte le courrier chaque jour.', en: 'The mail carrier brings the mail every day.', notes: '{"tiles":[{"w":"Le facteur","t":"the mail carrier"},{"w":"apporte le courrier","t":"brings the mail"},{"w":"chaque jour.","t":"every day"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  // ── 6 Listen (Écouter) items ──
  { id: 'fr.a1.metiers.130', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Le pharmacien travaille dans une grande pharmacie.', en: 'The pharmacist works at a large pharmacy.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.131', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Le coiffeur coupe les cheveux de ses clients.', en: "The hairdresser cuts his clients' hair.", notes: '"ses" (possessive) and "ces" (these) sound identical, only "ses" fits here.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.132', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Le vendeur aide les clients dans le magasin.', en: 'The salesperson helps customers in the store.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.133', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Le mécanicien répare les voitures dans son garage.', en: 'The mechanic repairs cars in his garage.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.134', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Le photographe a pris de belles photos hier.', en: 'The photographer took some beautiful photos yesterday.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.metiers.135', kind: 'sentence', level: 'a1', theme: 'metiers', fr: 'Le chirurgien a opéré un patient ce matin.', en: 'The surgeon operated on a patient this morning.', notes: '"ce" (this) and "se" (reflexive pronoun) sound identical, but "ce" precedes the noun here.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
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
      `select count(*)::text as n from content_items where theme = 'metiers' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  metiers published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-affirmed)`);
    console.log(`  metiers after: ${beforeN + (ITEMS.length - updating.length)}`);

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
    console.log(`\n✓ metiers pathway batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
