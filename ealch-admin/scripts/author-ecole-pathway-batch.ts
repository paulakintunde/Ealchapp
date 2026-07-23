// Content batch — ecole pathway breadth (Build + Listen).
//
// Adds 12 new A1 sentence items for 'ecole': 6 for the Construire/Build
// step (drills: sentence+review) and 6 for the Écouter/Listen step
// (drills: dictation) — closing the "By Theme" practice pathway gap for
// this theme. Discover/Pronounce were already well covered; Construire
// and Écouter had only 3-4 items.
//
// Same contract as author-marche-batch.ts: every item passes validateItem,
// then the whole set upserts into content_items as `published` in ONE
// transaction. Idempotent — items upsert by id, so re-running is a
// no-op-equivalent.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-ecole-pathway-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-ecole-pathway-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

export const ITEMS: Item[] = [
  // ── 6 Build (Construire) items ──
  { id: 'fr.a1.ecole.130', kind: 'sentence', level: 'a1', theme: 'ecole', fr: "L'élève range son cahier dans le cartable.", en: 'The student puts his notebook away in his schoolbag.', notes: '{"tiles":[{"w":"L\'élève","t":"the student"},{"w":"range","t":"puts away"},{"w":"son cahier","t":"his notebook"},{"w":"dans le cartable.","t":"in his schoolbag"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.ecole.131', kind: 'sentence', level: 'a1', theme: 'ecole', fr: 'Le maître explique la leçon au tableau.', en: 'The teacher explains the lesson on the board.', notes: '{"tiles":[{"w":"Le maître","t":"the teacher"},{"w":"explique","t":"explains"},{"w":"la leçon","t":"the lesson"},{"w":"au tableau.","t":"on the board"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.ecole.132', kind: 'sentence', level: 'a1', theme: 'ecole', fr: 'Les élèves font leurs devoirs à la bibliothèque.', en: 'The students do their homework at the library.', notes: '{"tiles":[{"w":"Les élèves","t":"the students"},{"w":"font","t":"do"},{"w":"leurs devoirs","t":"their homework"},{"w":"à la bibliothèque.","t":"at the library"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.ecole.133', kind: 'sentence', level: 'a1', theme: 'ecole', fr: "J'ai besoin d'une gomme et d'un crayon.", en: 'I need an eraser and a pencil.', notes: '{"tiles":[{"w":"J\'ai besoin","t":"I need"},{"w":"d\'une gomme","t":"an eraser"},{"w":"et d\'un crayon.","t":"and a pencil"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.ecole.134', kind: 'sentence', level: 'a1', theme: 'ecole', fr: 'Le surveillant ouvre la porte de la cour.', en: 'The supervisor opens the door to the playground.', notes: '{"tiles":[{"w":"Le surveillant","t":"the supervisor"},{"w":"ouvre","t":"opens"},{"w":"la porte","t":"the door"},{"w":"de la cour.","t":"to the playground"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.ecole.135', kind: 'sentence', level: 'a1', theme: 'ecole', fr: 'Nous consultons le dictionnaire pendant le cours.', en: 'We check the dictionary during class.', notes: '{"tiles":[{"w":"Nous consultons","t":"we check"},{"w":"le dictionnaire","t":"the dictionary"},{"w":"pendant le cours.","t":"during class"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  // ── 6 Listen (Écouter) items ──
  { id: 'fr.a1.ecole.136', kind: 'sentence', level: 'a1', theme: 'ecole', fr: 'Les élèves écrivent leurs réponses sur une feuille.', en: 'The students write their answers on a sheet of paper.', notes: '"leurs" (their, plural) not "leur" (singular).', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.ecole.137', kind: 'sentence', level: 'a1', theme: 'ecole', fr: 'Le maître corrige les copies ce soir.', en: 'The teacher is grading the exam papers tonight.', notes: '"copies" plural s is silent, sounds like "copie".', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.ecole.138', kind: 'sentence', level: 'a1', theme: 'ecole', fr: 'Nous apprenons cette poésie par cœur.', en: "We're learning this poem by heart.", notes: '"cœur" is spelled with the œ ligature, not "coeur".', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.ecole.139', kind: 'sentence', level: 'a1', theme: 'ecole', fr: 'Le prof pose une question difficile.', en: 'The teacher asks a tricky question.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.ecole.140', kind: 'sentence', level: 'a1', theme: 'ecole', fr: 'Les élèves attendent la sonnerie avec impatience.', en: 'The students eagerly wait for the bell.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.ecole.141', kind: 'sentence', level: 'a1', theme: 'ecole', fr: 'Ses crayons de couleur sont dans son casier.', en: 'Her colored pencils are in her locker.', notes: '"ses" (his/her, before plural) not "ces" (these).', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
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
      `select count(*)::text as n from content_items where theme = 'ecole' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  ecole published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-affirmed)`);
    console.log(`  ecole after: ${beforeN + (ITEMS.length - updating.length)}`);

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
    console.log(`\n✓ ecole pathway batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
