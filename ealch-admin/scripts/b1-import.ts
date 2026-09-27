/* The B1+ import pipeline, Postgres half. ONE generic script for the band, not
 * one per lesson as A2 did.
 *
 *   pnpm tsx scripts/b1-import.ts                         DRY RUN over every B1 lesson
 *   pnpm tsx scripts/b1-import.ts imparfait-formation ... DRY RUN over the slugs named
 *   pnpm tsx scripts/b1-import.ts <slugs> --apply         writes, in one transaction
 *   pnpm tsx scripts/b1-import.ts <slugs> --apply --reapply
 *                                                         also replaces this lesson's
 *                                                         own rows that differ
 *
 * DRY RUN IS THE DEFAULT. Nothing is written without `--apply`, and even then
 * nothing is written if any lesson in the run has a blocker.
 *
 * Then: `b1-merge-into-seed.ts <slugs> --dry`, then without --dry, then
 * `pnpm content:publish --dry-run`. Postgres first, seed second, publish last.
 *
 * ── WHAT IT WRITES ─────────────────────────────────────────────────────────
 *
 *   content_items   each AUTHORED row of each lesson, status 'published'
 *   content_units   the curriculum unit (kind 'curriculum_unit', slug b1.NN,
 *                   body = corpus UNIT + level b1 + lessonIds) and the lesson
 *                   (kind 'lesson', slug b1.NN.l1, body = LESSON, task section
 *                   and act openers included as authored)
 *
 * Status is 'published', as every A2 author-batch writes. An earlier draft of
 * this script wrote 'draft', but publish-content.ts reads status='published'
 * only, so a draft row can never reach the seed or a phone, and a seed merge on
 * top of drafts is exactly the seed-ahead-of-Postgres state that a publish then
 * destroys. Nothing reaches a LEARNER until the next real publish either way.
 *
 * ── THE GUARDS (pure, in b1-import.logic.ts, pinned by its test) ───────────
 *
 *  - an authored id already in Postgres: skipped if identical, REFUSED if it
 *    differs, unless --reapply
 *  - every theme must exist in content_themes
 *  - no fr.b1 row at or above a theme's authored floor that NO B1 lesson owns
 *  - every id a lesson names but does not author must be published, or be
 *    authored by another lesson in the same run
 *  - Lesson.version moves only when the section list changes (no text bumps)
 *  - an id authored by two lessons must be the same row
 *
 * DB_ONLY_TWINS are imported AS AUTHORED. Their count is printed per lesson;
 * the dedupe decision is Paul's and still open.
 */
import './env';
import { Pool } from 'pg';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { validateLesson, validateItem, validateUnit } from '../../ealch-v2/src/content/schema.ts';
import { describeTarget } from './env';
import {
  B1_SLUGS, authoredFloors, crossLessonClashes, dbRowToItem, headwordClashes, planLesson, unitBody,
  type AuthoredRow, type DbState, type LessonInput, type LessonPlan,
} from './b1-import.logic.ts';

const argv = process.argv.slice(2);
const APPLY = argv.includes('--apply');
const REAPPLY = argv.includes('--reapply');
const named = argv.filter((a) => !a.startsWith('--'));
const HERE = dirname(fileURLToPath(import.meta.url));

function die(msg: string): never {
  console.error(`\n  STOP  ${msg}\n`);
  process.exit(1);
}

export async function loadLesson(slug: string): Promise<LessonInput> {
  const L: any = await import(`./data/b1/${slug}-lesson.ts`);
  const C: any = await import(`./data/b1/${slug}-corpus.ts`);
  return { slug, unit: C.UNIT, lesson: L.LESSON, rows: C.ALL_ROWS as AuthoredRow[], twins: C.DB_ONLY_TWINS };
}

export function registeredImages(): Set<string> {
  const src = readFileSync(resolve(HERE, '../../ealch-v2/src/content/lessonImages.ts'), 'utf8');
  return new Set([...src.matchAll(/^\s*'([^']+)':\s*require\(/gm)].map((m) => m[1]!));
}

const ITEM_SELECT = `select id, kind::text as kind, level::text as level, theme, fr, en, ipa, respell,
  gender::text as gender, example, notes, tags, drills::text[] as drills, audio_ref, image_ref,
  segments, asset_key, version, skill::text as skill, register::text as register, can_do,
  grammar_points, modality::text as modality, verb_check, card_type::text as card_type, prompt,
  status::text as status from content_items`;

async function main() {
  const unknown = named.filter((s) => !(B1_SLUGS as readonly string[]).includes(s));
  if (unknown.length) die(`unknown slug(s): ${unknown.join(', ')}. Known: B1_SLUGS in b1-import.logic.ts`);
  const slugs = named.length ? named : [...B1_SLUGS];
  if (REAPPLY && !APPLY) console.log('  (--reapply without --apply: the plan shows what a re-apply would replace)');

  /* ── 1. LOAD. Every B1 lesson, so ownership is judged against the band. ── */
  const all = await Promise.all(B1_SLUGS.map(loadLesson));
  const run = all.filter((x) => slugs.includes(x.slug));
  const bandAuthored = new Set(all.flatMap((x) => x.rows.map((r) => r.id)));
  const runAuthored = new Set(run.flatMap((x) => x.rows.map((r) => r.id)));

  const offline: string[] = [];
  for (const x of run) {
    for (const i of validateLesson(x.lesson)) offline.push(`${x.lesson.id}: ${i.path} ${i.message}`);
    for (const i of validateUnit(unitBody(x.unit, x.lesson.id))) offline.push(`${x.unit.id}: ${i.path} ${i.message}`);
    for (const r of x.rows) for (const i of validateItem(r, r.id)) offline.push(`${r.id}: ${i.message}`);
  }
  offline.push(...crossLessonClashes(all));
  if (offline.length) die(`${offline.length} content problem(s), the database was not opened:\n  ${offline.slice(0, 12).join('\n  ')}`);

  console.log(`B1 IMPORT  ${APPLY ? '*** APPLY ***' : 'DRY RUN, nothing will be written'}${REAPPLY ? '  (--reapply)' : ''}`);
  console.log(`  ${describeTarget()}`);
  console.log(`  lessons in this run: ${run.length} of ${all.length} authored`);

  /* ── 2. READ POSTGRES. Read-only until step 4. ─────────────────────────── */
  if (!process.env.DATABASE_URL) die('DATABASE_URL is not set. Nothing was attempted.');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const wantItems = new Set<string>(runAuthored);
    const { itemsReferencedBy } = await import('./seed-cut.logic.ts');
    for (const x of run) for (const id of itemsReferencedBy(x.lesson as never)) wantItems.add(id);
    const itemRows = await c.query(`${ITEM_SELECT} where id = any($1::text[])`, [[...wantItems]]);
    const unitSlugs = run.flatMap((x) => [x.unit.id, x.lesson.id]);
    const unitRows = await c.query<{ slug: string; kind: string; status: string; body: Record<string, unknown> }>(
      `select slug, kind::text as kind, status::text as status, body from content_units where slug = any($1::text[])`, [unitSlugs]);
    const themeRows = await c.query<{ slug: string }>('select slug from content_themes');

    const floors = authoredFloors(runAuthored);
    const foreign = new Map<string, string[]>();
    for (const [theme, floor] of floors) {
      const q = await c.query<{ id: string }>(
        `select id from content_items
          where theme = $1 and id like 'fr.b1.%'
            and nullif(regexp_replace(split_part(id,'.',4),'[^0-9]','','g'),'')::int >= $2`, [theme, floor]);
      foreign.set(theme, q.rows.map((r) => r.id).filter((id) => !bandAuthored.has(id)));
    }

    const db: DbState = {
      items: new Map(itemRows.rows.map((r) => [r.id as string, { status: r.status as string, item: dbRowToItem(r) }])),
      units: new Map(unitRows.rows.map((r) => [r.slug, { kind: r.kind, status: r.status, body: r.body }])),
      themes: new Set(themeRows.rows.map((r) => r.slug)),
      foreignAboveFloor: foreign,
    };

    /* ── 3. PLAN, and print it before anything else happens. ─────────────── */
    const images = registeredImages();
    const plans: LessonPlan[] = run.map((x) => planLesson(x, db, { reapply: REAPPLY, runAuthored, images }));

    // An id authored by two lessons in this run is written once, by the first.
    const claimed = new Set<string>();
    const writeIds: string[] = [];
    let sharedInRun = 0;
    for (const p of plans) {
      for (const id of [...p.insert, ...p.update]) {
        if (claimed.has(id)) { sharedInRun++; continue; }
        claimed.add(id);
        writeIds.push(id);
      }
    }

    console.log('\n  lesson     slug                       authored  insert  skip  update  conflict  reused(pub/run)  twins  unit    lesson  v');
    for (const p of plans) {
      console.log(
        `  ${p.lessonId.padEnd(10)} ${p.slug.padEnd(26)} ${String(p.authored).padStart(8)}  ${String(p.insert.length).padStart(6)}  ${String(p.skip.length).padStart(4)}  ` +
        `${String(p.update.length).padStart(6)}  ${String(p.conflict.length).padStart(8)}  ${`${p.reusedPublished}/${p.reusedInRun}`.padStart(15)}  ${String(p.twins).padStart(5)}  ` +
        `${p.unit.padEnd(6)}  ${p.lesson.padEnd(6)}  ${p.lessonVersion}`,
      );
    }
    const sum = (f: (p: LessonPlan) => number) => plans.reduce((n, p) => n + f(p), 0);
    console.log('\n  TOTALS');
    console.log(`    lessons ${plans.length} | authored rows ${sum((p) => p.authored)} | to insert ${sum((p) => p.insert.length)} | already there, identical ${sum((p) => p.skip.length)} | to update ${sum((p) => p.update.length)} | conflicts ${sum((p) => p.conflict.length)}`);
    console.log(`    distinct item rows this run would write: ${writeIds.length}${sharedInRun ? ` (${sharedInRun} authored twice in the run, written once)` : ''}`);
    console.log(`    reused rows: ${sum((p) => p.reusedPublished)} published, ${sum((p) => p.reusedInRun)} authored by another lesson in this run`);
    console.log(`    DB_ONLY_TWINS carried as authored: ${sum((p) => p.twins)} (dedupe decision still open)`);
    console.log(`    units: ${plans.filter((p) => p.unit === 'create').length} create, ${plans.filter((p) => p.unit === 'skip').length} skip, ${plans.filter((p) => p.unit === 'update').length} update | lessons: ${plans.filter((p) => p.lesson === 'create').length} create, ${plans.filter((p) => p.lesson === 'skip').length} skip, ${plans.filter((p) => p.lesson === 'update').length} update`);
    for (const [theme, floor] of [...floors].sort()) {
      console.log(`    floor ${theme.padEnd(30)} ${String(floor).padStart(5)}  ${(foreign.get(theme) ?? []).length ? 'FOREIGN ROWS ABOVE' : 'clear'}`);
    }

    // THE FLASHCARD HUB'S DUPLICATE RULE, across the run and what is already
    // published in the same themes. Two B1 lessons authoring the same headword
    // is an authoring defect and blocks (the app's seed tests fail on it, as
    // b1.02 and b1.03 found with « d'habitude » and « chaque été »). A clash
    // with a published row outside B1 is a twin, and twins are Paul's call.
    const themes = [...new Set(run.flatMap((x) => x.rows.map((r) => r.theme)))];
    const pub = await c.query(
      `select id, kind::text as kind, theme, fr, card_type::text as "cardType" from content_items
        where theme = any($1::text[]) and status = 'published' and kind <> 'sentence'`, [themes]);
    const runRows = [...new Map(run.flatMap((x) => x.rows.map((r) => [r.id, r] as const))).values()];
    const hub = headwordClashes(runRows, pub.rows);
    const hubBlock = hub.filter((h) => bandAuthored.has(h.a) && bandAuthored.has(h.b));
    const hubWarn = hub.filter((h) => !(bandAuthored.has(h.a) && bandAuthored.has(h.b)));
    const owner = (h: { a: string; b: string }) =>
      plans[run.findIndex((x) => x.rows.some((r) => r.id === h.b || r.id === h.a))] ?? plans[0]!;
    for (const h of hubBlock) owner(h).blockers.push(`${h.a} and ${h.b} are the same flashcard (${h.key}), both authored by B1 lessons`);
    for (const h of hubWarn) owner(h).warnings.push(`${h.b} and published ${h.a} are one flashcard (${h.key}); a twin, Paul's dedupe call`);

    const warnings = plans.flatMap((p) => p.warnings);
    if (warnings.length) {
      console.log(`\n  WARNINGS ${warnings.length}`);
      for (const w of warnings.slice(0, 40)) console.log(`    ! ${w}`);
      if (warnings.length > 40) console.log(`    ...and ${warnings.length - 40} more`);
    }
    const blockers = plans.flatMap((p) => p.blockers);
    console.log(`\n  BLOCKERS ${blockers.length}`);
    for (const b of blockers.slice(0, 40)) console.log(`    x ${b}`);
    if (blockers.length > 40) console.log(`    ...and ${blockers.length - 40} more`);

    if (blockers.length) die(`${blockers.length} blocker(s). Nothing was written.`);
    if (!APPLY) {
      console.log('\n  DRY RUN COMPLETE. Nothing was written. Re-run with the slugs and --apply to write.\n');
      return;
    }

    /* ── 4. WRITE, one transaction, rollback on anything. ───────────────── */
    const byId = new Map(run.flatMap((x) => x.rows.map((r) => [r.id, r] as const)));
    const counts = { itemsInserted: 0, itemsUpdated: 0, unitsCreated: 0, unitsUpdated: 0, lessonsCreated: 0, lessonsUpdated: 0 };
    const updateSet = new Set(plans.flatMap((p) => p.update));
    await c.query('begin');
    try {
      for (const id of writeIds) {
        const it = byId.get(id)! as any;
        const upd = updateSet.has(id);
        const res = await c.query(
          `insert into content_items
             (id, kind, level, theme, fr, en, ipa, respell, gender, example, notes, tags, drills,
              audio_ref, image_ref, segments, asset_key, version,
              skill, register, can_do, grammar_points, modality, verb_check,
              card_type, prompt, status, published_at)
           values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13::text[]::drill_kind[],
                   $14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,'published',now())
           ${upd ? `on conflict (id) do update set
             kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
             ipa=excluded.ipa, respell=excluded.respell, gender=excluded.gender, example=excluded.example,
             notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, audio_ref=excluded.audio_ref,
             image_ref=excluded.image_ref, segments=excluded.segments, asset_key=excluded.asset_key,
             version=excluded.version, skill=excluded.skill, register=excluded.register, can_do=excluded.can_do,
             grammar_points=excluded.grammar_points, modality=excluded.modality, verb_check=excluded.verb_check,
             card_type=excluded.card_type, prompt=excluded.prompt, status='published', updated_at=now()` : ''}`,
          [
            it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null, it.respell ?? null, it.gender ?? null,
            it.example ? JSON.stringify(it.example) : null, it.notes ?? null, it.tags ?? [], it.drills ?? [],
            it.audioRef ?? null, it.imageRef ?? null, it.segments ? JSON.stringify(it.segments) : null, it.assetKey ?? null,
            it.version ?? 1, it.skill ?? null, it.register ?? null, it.canDo ?? null, it.grammarPoints ?? [],
            it.modality ?? null, it.verbCheck ? JSON.stringify(it.verbCheck) : null, it.cardType ?? null, it.prompt ?? null,
          ],
        );
        if (res.rowCount !== 1) throw new Error(`${id}: the write touched ${res.rowCount} rows`);
        if (upd) counts.itemsUpdated++; else counts.itemsInserted++;
      }
      const upsertUnit = async (slug: string, title: string, kind: 'curriculum_unit' | 'lesson', body: unknown, upd: boolean) => {
        const res = await c.query(
          `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by, published_at)
           values ($1,$2,$3::content_kind,'b1','fr','published',$4::jsonb,1,'human',now())
           ${upd ? `on conflict (slug) do update set title=excluded.title, body=excluded.body, status='published', updated_at=now()` : ''}`,
          [slug, title, kind, JSON.stringify(body)],
        );
        if (res.rowCount !== 1) throw new Error(`${slug}: the write touched ${res.rowCount} rows`);
      };
      for (const [i, p] of plans.entries()) {
        const x = run[i]!;
        if (p.unit === 'create' || p.unit === 'update') {
          await upsertUnit(x.unit.id, String(x.unit.title), 'curriculum_unit', unitBody(x.unit, x.lesson.id), p.unit === 'update');
          if (p.unit === 'create') counts.unitsCreated++; else counts.unitsUpdated++;
        }
        if (p.lesson === 'create' || p.lesson === 'update') {
          await upsertUnit(x.lesson.id, String(x.lesson.title), 'lesson', x.lesson, p.lesson === 'update');
          if (p.lesson === 'create') counts.lessonsCreated++; else counts.lessonsUpdated++;
        }
      }
      await c.query('commit');
    } catch (e) {
      await c.query('rollback');
      die(`rolled back, nothing was written: ${(e as Error).message}`);
    }

    /* ── 5. READ BACK AND PROVE IT. ─────────────────────────────────────── */
    const back = await c.query(`${ITEM_SELECT} where id = any($1::text[])`, [[...runAuthored]]);
    const got = new Map(back.rows.map((r) => [r.id as string, r]));
    const { sameItem } = await import('./b1-import.logic.ts');
    const bad = [...runAuthored].filter((id) => {
      const r = got.get(id);
      return !r || r.status !== 'published' || !sameItem(dbRowToItem(r), byId.get(id)!);
    });
    if (bad.length) die(`${bad.length} row(s) did not read back as authored and published, first ${bad[0]}`);
    const ub = await c.query<{ slug: string; body: unknown }>(
      `select slug, body from content_units where slug = any($1::text[]) and status = 'published'`, [unitSlugs]);
    if (ub.rowCount !== unitSlugs.length) die(`expected ${unitSlugs.length} published unit/lesson rows, read back ${ub.rowCount}`);

    console.log(`\n  APPLIED. content_items: ${counts.itemsInserted} inserted, ${counts.itemsUpdated} updated.`);
    console.log(`  content_units: ${counts.unitsCreated} curriculum_unit created, ${counts.unitsUpdated} updated; ${counts.lessonsCreated} lesson created, ${counts.lessonsUpdated} updated.`);
    console.log(`  Read back: ${runAuthored.size} authored rows published and identical; ${unitSlugs.length} unit/lesson rows published.`);
    console.log(`\n  NEXT: pnpm tsx scripts/b1-merge-into-seed.ts ${slugs.join(' ')} --dry\n`);
  } finally {
    c.release();
    await pool.end();
  }
}

// Running this file imports; importing it must not.
if (process.argv[1] && /b1-import\.ts$/.test(process.argv[1])) void main();
