// Backfill Item.verbCheck (master plan Phase 2.D) for the five regular-verb
// sentences author-practice.ts introduced (fr.a2.verbes.001-005) — so
// publish-content.ts's French conjugation gate has real targets to check
// today, rather than landing as code with nothing in the corpus to prove it.
//
// Usage:
//   pnpm tsx scripts/backfill-verb-check.ts --dry-run    validate + report only
//   pnpm tsx scripts/backfill-verb-check.ts              apply, one transaction
//
// Idempotent: re-running writes the same values.

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, type Item } from '../../ealch-v2/src/content/schema.ts';

// Verified against verbecc 2.x directly (see gates/check_french.py): each of
// these matches the sentence author-practice.ts wrote for it exactly.
const VERB_CHECK: Record<string, NonNullable<Item['verbCheck']>> = {
  'fr.a2.verbes.001': { infinitive: 'parler', tense: 'présent', person: '1', number: 's' }, // Je parle français.
  'fr.a2.verbes.002': { infinitive: 'regarder', tense: 'présent', person: '2', number: 's' }, // Tu regardes la télé.
  'fr.a2.verbes.003': { infinitive: 'finir', tense: 'présent', person: '1', number: 'p' }, // Nous finissons nos devoirs.
  'fr.a2.verbes.004': { infinitive: 'attendre', tense: 'présent', person: '3', number: 's' }, // Elle attend le bus.
  'fr.a2.verbes.005': { infinitive: 'vendre', tense: 'présent', person: '3', number: 'p' }, // Ils vendent des fruits au marché.
};

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. verbCheck is backfilled against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  const ids = Object.keys(VERB_CHECK);
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    const rows = await client.query(
      `select id, kind::text as kind, level::text as level, theme, fr, en, ipa,
              gender::text as gender, example, notes, tags, drills::text[] as drills,
              audio_ref, version, grammar_points
         from content_items where id = any($1)`,
      [ids]
    );
    if (rows.rowCount !== ids.length) {
      const found = new Set(rows.rows.map((r) => r.id));
      die(`expected ${ids.length} rows, found ${rows.rowCount}. Missing: ${ids.filter((i) => !found.has(i)).join(', ')}`);
    }

    // Build and validate the post-state before writing — the same discipline
    // author-practice.ts uses: a bad backfill must fail here, not at publish.
    const next: Item[] = rows.rows.map((r) => ({
      id: r.id,
      kind: r.kind,
      level: r.level,
      theme: r.theme,
      fr: r.fr,
      en: r.en,
      ...(r.ipa ? { ipa: r.ipa } : {}),
      ...(r.gender ? { gender: r.gender } : {}),
      ...(r.example ? { example: r.example } : {}),
      ...(r.notes ? { notes: r.notes } : {}),
      tags: r.tags ?? [],
      drills: r.drills ?? [],
      audioRef: r.audio_ref ?? null,
      version: r.version,
      ...(r.grammar_points?.length ? { grammarPoints: r.grammar_points } : {}),
      verbCheck: VERB_CHECK[r.id],
    }));

    const issues = next.flatMap((it) => validateItem(it, it.id));
    if (issues.length) die(`post-state fails validateItem:\n${issues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

    console.log(`\n  ${next.length} item(s) to backfill:`);
    for (const it of next) {
      const vc = it.verbCheck!;
      console.log(`    ${it.id}  ${vc.infinitive} · ${vc.tense} · person ${vc.person} · number ${vc.number}`);
    }

    if (DRY_RUN) {
      console.log('\n✓ dry run — post-state valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of next) {
      const res = await client.query(`update content_items set verb_check = $1::jsonb where id = $2`, [
        JSON.stringify(it.verbCheck),
        it.id,
      ]);
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`update for ${it.id} touched ${res.rowCount} rows — rolled back, nothing changed`);
      }
    }
    await client.query('commit');
    console.log(`\n✓ verbCheck backfilled for ${next.length} item(s). Run content:publish.\n`);
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
