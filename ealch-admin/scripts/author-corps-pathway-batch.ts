// Content batch — corps pathway breadth (Build + Listen).
//
// Adds 12 new A1 sentence items for 'corps': 6 for the Construire/Build
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
//   pnpm tsx scripts/author-corps-pathway-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-corps-pathway-batch.ts              apply, one transaction
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

export const ITEMS: Item[] = [
  // ── 6 Build (Construire) items ──
  { id: 'fr.a1.corps.110', kind: 'sentence', level: 'a1', theme: 'corps', fr: "J'ai mal au ventre ce matin.", en: 'My stomach hurts this morning.', notes: '{"tiles":[{"w":"J\'ai mal","t":"I have pain"},{"w":"au ventre","t":"in the stomach"},{"w":"ce matin.","t":"this morning"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.corps.111', kind: 'sentence', level: 'a1', theme: 'corps', fr: 'Elle a mal à la gorge.', en: 'Her throat hurts.', notes: '{"tiles":[{"w":"Elle a mal","t":"she has pain"},{"w":"à la gorge.","t":"in the throat"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.corps.112', kind: 'sentence', level: 'a1', theme: 'corps', fr: 'Elle a les yeux verts.', en: 'She has green eyes.', notes: '{"tiles":[{"w":"Elle a","t":"she has"},{"w":"les yeux verts.","t":"green eyes"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.corps.113', kind: 'sentence', level: 'a1', theme: 'corps', fr: 'Je me brosse les dents le matin.', en: 'I brush my teeth in the morning.', notes: '{"tiles":[{"w":"Je me brosse","t":"I brush"},{"w":"les dents","t":"my teeth"},{"w":"le matin.","t":"in the morning"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.corps.114', kind: 'sentence', level: 'a1', theme: 'corps', fr: 'Mon genou me fait mal après le sport.', en: 'My knee hurts after exercising.', notes: '{"tiles":[{"w":"Mon genou","t":"my knee"},{"w":"me fait mal","t":"hurts"},{"w":"après le sport.","t":"after exercising"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  { id: 'fr.a1.corps.115', kind: 'sentence', level: 'a1', theme: 'corps', fr: "Elle a mal à l'épaule droite.", en: 'Her right shoulder hurts.', notes: '{"tiles":[{"w":"Elle a mal","t":"she has pain"},{"w":"à l\'épaule droite.","t":"in the right shoulder"}]}', tags: [], drills: ['sentence', 'review'], audioRef: null, version: 1 },
  // ── 6 Listen (Écouter) items ──
  { id: 'fr.a1.corps.116', kind: 'sentence', level: 'a1', theme: 'corps', fr: "J'ai mal à l'estomac depuis ce matin.", en: 'My stomach has hurt since this morning.', notes: '"l\'estomac" takes the elided article because it starts with a vowel sound; it is masculine so l\', not la.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.corps.117', kind: 'sentence', level: 'a1', theme: 'corps', fr: 'Ses mains sont froides.', en: 'Her hands are cold.', notes: '"ses" (her, his, possessive) is not "ces" (these), same sound but different jobs.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.corps.118', kind: 'sentence', level: 'a1', theme: 'corps', fr: 'Le médecin touche mon genou droit.', en: 'The doctor touches my right knee.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.corps.119', kind: 'sentence', level: 'a1', theme: 'corps', fr: 'J\'ai mal à la gorge et à la tête.', en: 'My throat and head both hurt.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.corps.120', kind: 'sentence', level: 'a1', theme: 'corps', fr: 'Il a les cheveux courts et bruns.', en: 'He has short brown hair.', notes: '"courts" and "bruns" both add -s to agree with the plural "cheveux".', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
  { id: 'fr.a1.corps.121', kind: 'sentence', level: 'a1', theme: 'corps', fr: 'Le patient a le bras cassé.', en: 'The patient has a broken arm.', tags: [], drills: ['dictation'], audioRef: null, version: 1 },
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
      `select count(*)::text as n from content_items where theme = 'corps' and status = 'published'`
    );
    const beforeN = Number(before.rows[0]?.n ?? '0');
    const overlap = await client.query<{ id: string }>(`select id from content_items where id = any($1)`, [ids]);
    const updating = overlap.rows.map((r) => r.id);

    console.log(`\n  corps published today: ${beforeN}`);
    console.log(`  this batch: ${ITEMS.length} items (${ITEMS.length - updating.length} new, ${updating.length} re-affirmed)`);
    console.log(`  corps after: ${beforeN + (ITEMS.length - updating.length)}`);

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
    console.log(`\n✓ corps pathway batch applied: ${ITEMS.length} items published. Run pnpm content:publish to ship it OTA.\n`);
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
