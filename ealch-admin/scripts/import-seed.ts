// IMPORT-SEED — reconcile the app's shipped seed.json into the canonical DB
// (content_items + content_domains + content_themes), so content authored
// app-side during the flashcard-hub build becomes editable in the review UI
// and publishable through the normal snapshot pipeline.
//
// This is the inverse of the usual flow (DB → publish → snapshot → app) and
// exists because the hub build landed ~1.8k items straight in the seed. It is
// IDEMPOTENT: upserts by id (items) and slug (domains/themes), so re-running
// reconciles rather than duplicating.
//
// What it deliberately does NOT touch on rows that already exist: status,
// generated_by, published_at, reviewed_by/reviewed_at, pack_id — those are
// admin-owned lifecycle state, and an import that clobbers a reviewer's
// verdict with "published" is rewriting history. New rows land as
// 'published' (they are literally in the shipped binary) with generated_by
// taken from provenance, defaulting to 'llm' — never 'human': absent
// provenance means unknown, and unknown must not be read as human-reviewed.
//
// Run:  ALLOW_DESTRUCTIVE=1 npx tsx scripts/import-seed.ts
import './env';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { assertDestructiveAllowed, describeTarget } from './env';
import { validateCorpus, formatIssues, type Corpus, type Item } from '../../ealch-v2/src/content/schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED_PATH = resolve(here, '../../ealch-v2/src/content/seed.json');

async function main() {
  console.log(`→ ${describeTarget()}`);
  // Upsert-only, but it touches production content — gate it like the port.
  assertDestructiveAllowed('import-seed (upserts seed.json into content_items/content_domains/content_themes)');

  const corpus = JSON.parse(readFileSync(SEED_PATH, 'utf8')) as Corpus;
  const issues = validateCorpus(corpus);
  if (issues.length) {
    console.error(`\n✖ seed.json fails validateCorpus — NOTHING written.\n${formatIssues(issues.slice(0, 20))}`);
    process.exit(1);
  }
  const domains = corpus.domains ?? [];
  const themes = corpus.themes ?? [];
  console.log(`  validated: ${corpus.items.length} items · ${domains.length} domains · ${themes.length} themes (corpus v${corpus.version})`);

  if (!process.env.DATABASE_URL) {
    console.error('\n✖ No DATABASE_URL.');
    process.exit(1);
  }
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });

  // Domains first: content_themes.domain is a FK onto content_domains.slug.
  for (const d of domains) {
    await pool.query(
      `insert into content_domains (slug, title, "order") values ($1,$2,$3)
       on conflict (slug) do update set title=excluded.title, "order"=excluded."order"`,
      [d.slug, d.title, d.order]
    );
  }
  console.log(`  ✓ ${domains.length} domains`);

  for (const th of themes) {
    await pool.query(
      `insert into content_themes (slug, title, domain, level_range_lo, level_range_hi, exam_flag, immig_flag, sub_themes)
       values ($1,$2,$3,$4,$5,$6,$7,$8)
       on conflict (slug) do update set
         title=excluded.title, domain=excluded.domain,
         level_range_lo=excluded.level_range_lo, level_range_hi=excluded.level_range_hi,
         exam_flag=excluded.exam_flag, immig_flag=excluded.immig_flag, sub_themes=excluded.sub_themes`,
      [th.slug, th.title, th.domain, th.levelRange[0], th.levelRange[1], th.examFlag, th.immigFlag, th.subThemes]
    );
  }
  console.log(`  ✓ ${themes.length} themes`);

  let n = 0;
  for (const it of corpus.items as Item[]) {
    await pool.query(
      `insert into content_items
         (id, kind, level, theme, fr, en, ipa, respell, gender, example, notes, tags, drills,
          audio_ref, image_ref, segments, asset_key, version,
          skill, register, can_do, grammar_points, modality, verb_check,
          card_type, prompt, model, prompt_version, source_refs,
          status, published_at, generated_by)
       values ($1,$2,$3,$4,$5,$6,$7,$30,$8,$9,$10,$11,$12,
               $13,$14,$15,$16,$17,
               $18,$19,$20,$21,$22,$23,
               $24,$25,$26,$27,$28,
               'published', now(), $29)
       on conflict (id) do update set
         kind=excluded.kind, level=excluded.level, theme=excluded.theme,
         fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender,
         example=excluded.example, notes=excluded.notes, tags=excluded.tags, drills=excluded.drills,
         audio_ref=excluded.audio_ref, image_ref=excluded.image_ref,
         segments=excluded.segments, asset_key=excluded.asset_key, version=excluded.version,
         skill=excluded.skill, register=excluded.register, can_do=excluded.can_do,
         grammar_points=excluded.grammar_points, modality=excluded.modality, verb_check=excluded.verb_check,
         card_type=excluded.card_type, prompt=excluded.prompt,
         model=excluded.model, prompt_version=excluded.prompt_version, source_refs=excluded.source_refs,
         updated_at=now()`,
      [
        it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.gender ?? null,
        it.example ? JSON.stringify(it.example) : null, it.notes ?? null, it.tags,
        `{${it.drills.join(',')}}`,
        it.audioRef ?? null, it.imageRef ?? null,
        it.segments ? JSON.stringify(it.segments) : null, it.assetKey ?? null, it.version,
        it.skill ?? null, it.register ?? null, it.canDo ?? null,
        it.grammarPoints ?? [], it.modality ?? null,
        it.verbCheck ? JSON.stringify(it.verbCheck) : null,
        it.cardType ?? null, it.prompt ?? null,
        it.provenance?.model ?? null, it.provenance?.promptVersion ?? null,
        it.provenance?.sourceRefs ? JSON.stringify(it.provenance.sourceRefs) : null,
        it.provenance?.generatedBy ?? 'llm',
        it.respell ?? null,
      ]
    );
    n += 1;
    if (n % 200 === 0) console.log(`  … ${n}/${corpus.items.length} items`);
  }
  console.log(`  ✓ ${n} items`);

  // ── content_units upserts: scenarios, lessons, speak stages ────────────
  // These three collections are seed-side truth today (the roleplay batch,
  // the sons.01.l1 rebuild and the Speak trail all landed straight in
  // seed.json). Curriculum UNITS are deliberately NOT imported: the DB's 43
  // units were authored DB-first via content:spine and are AHEAD of the
  // seed's 20-unit offline cut — importing the cut would regress them.
  // Conflict target is content_slug_uq (slug is globally unique across
  // kinds, mirroring validateCorpus's global id-collision rule).
  const upsertUnitRow = async (
    kind: 'scenario' | 'lesson' | 'speak_stage',
    slug: string,
    title: string,
    level: string,
    body: unknown
  ) => {
    await pool.query(
      `insert into content_units
         (slug, title, kind, level, locale, status, body, version, generated_by, published_at)
       values ($1,$2,$3::content_kind,$4::content_level,'fr','published',$5,1,'human',now())
       on conflict (slug) do update set
         title = excluded.title, kind = excluded.kind, level = excluded.level,
         body = excluded.body, status = 'published', updated_at = now()`,
      [slug, title, kind, level, JSON.stringify(body)]
    );
  };

  const scenarios = corpus.scenarios ?? [];
  for (const sc of scenarios) await upsertUnitRow('scenario', sc.id, sc.title, sc.level, sc);
  console.log(`  ✓ ${scenarios.length} scenarios`);

  const lessons = corpus.lessons ?? [];
  for (const l of lessons) await upsertUnitRow('lesson', l.id, l.title, l.level, l);
  console.log(`  ✓ ${lessons.length} lessons`);

  const speakPath = corpus.speakPath ?? [];
  for (const s of speakPath) await upsertUnitRow('speak_stage', s.id, s.title, s.level, s);
  console.log(`  ✓ ${speakPath.length} speak stages`);

  await pool.end();
  console.log('\n✓ seed reconciled into the DB. Cards are now editable in the review UI.\n');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
