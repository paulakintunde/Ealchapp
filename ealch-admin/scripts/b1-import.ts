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
 * TWINS ARE DEDUPED TO THE PUBLISHED ROW (Paul, 2026-09-26). A twin is a row
 * a corpus declares in DB_ONLY_TWINS, or one the flashcard hub would deal as
 * the same card as a published row no B1 lesson authors. When the French is
 * the same after normFr (case, apostrophes, punctuation, spacing; accents
 * count), the authored row is NOT inserted and every reference to it, in every
 * lesson, is rewritten to the published id. Otherwise the authored row is kept
 * and printed as a WARNING. Decided band-wide by resolveDedupe, which the
 * seed merge calls too, so both rewrite identically.
 *
 * A row that exists and is identical but not published (b1.01-b1.04 were set
 * back to draft on 2026-09-26) plans as PROMOTE: an apply flips its status.
 */
import './env';
import { Pool, type PoolClient } from 'pg';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { validateLesson, validateItem, validateUnit } from '../../ealch-v2/src/content/schema.ts';
import { describeTarget } from './env';
import { itemsReferencedBy } from './seed-cut.logic.ts';
import {
  BAND_SLUGS, parseBand, applyDedupe, authoredFloors, crossLessonClashes, dbRowToItem, decideTwins, declaredTwins,
  headwordClashes, planLesson, sameItem, unitBody,
  type AuthoredRow, type DbState, type LessonInput, type LessonPlan,
} from './b1-import.logic.ts';

const { band: BAND, rest: argv } = parseBand(process.argv.slice(2));
const SLUGS = BAND_SLUGS[BAND];
const APPLY = argv.includes('--apply');
const REAPPLY = argv.includes('--reapply');
const named = argv.filter((a) => !a.startsWith('--'));
const HERE = dirname(fileURLToPath(import.meta.url));

function die(msg: string): never {
  console.error(`\n  STOP  ${msg}\n`);
  process.exit(1);
}

export async function loadLesson(slug: string, band: string = 'b1'): Promise<LessonInput> {
  const L: any = await import(`./data/${band}/${slug}-lesson.ts`);
  const C: any = await import(`./data/${band}/${slug}-corpus.ts`);
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

/** Decide every twin in the band against Postgres (read-only): the rows the
 *  corpora declare in DB_ONLY_TWINS plus the flashcard-hub clashes with
 *  published rows no B1 lesson authors. Shared by the import and the seed
 *  merge, so both rewrite the lessons identically. */
export async function resolveDedupe(c: PoolClient, all: LessonInput[]) {
  const bandAuthored = new Set(all.flatMap((x) => x.rows.map((r) => r.id)));
  const declaredIds = [...new Set(all.flatMap((x) => declaredTwins(x.twins).map((d) => d.dbId)))];
  const themes = [...new Set(all.flatMap((x) => x.rows.map((r) => r.theme)))];
  const q = await c.query<{ id: string; kind: string; theme: string; fr: string; cardType: string | null; status: string }>(
    `select id, kind::text as kind, theme, fr, card_type::text as "cardType", status::text as status from content_items
      where (theme = any($1::text[]) and status = 'published' and kind <> 'sentence') or id = any($2::text[])`,
    [themes, declaredIds]);
  const outside = q.rows.filter((r) => !bandAuthored.has(r.id));
  const published = new Map(outside.filter((r) => r.status === 'published').map((r) => [r.id, { fr: r.fr }]));
  const bandRows = [...new Map(all.flatMap((x) => x.rows.map((r) => [r.id, r] as const))).values()];
  const hub = headwordClashes(bandRows, outside.filter((r) => r.status === 'published' && r.kind !== 'sentence'))
    .filter((h) => bandAuthored.has(h.a) !== bandAuthored.has(h.b))
    .map((h) => (bandAuthored.has(h.b) ? { authored: h.b, published: h.a } : { authored: h.a, published: h.b }));
  return decideTwins(all, published, hub);
}

async function main() {
  const unknown = named.filter((s) => !SLUGS.includes(s));
  if (unknown.length) die(`unknown slug(s): ${unknown.join(', ')}. Known: ${BAND.toUpperCase()}_SLUGS in b1-import.logic.ts`);
  const slugs = named.length ? named : [...SLUGS];
  if (REAPPLY && !APPLY) console.log('  (--reapply without --apply: the plan shows what a re-apply would replace)');

  /* ── 1. LOAD. Every B1 lesson, so ownership is judged against the band. ── */
  const source = await Promise.all(SLUGS.map((x) => loadLesson(x, BAND)));
  const bandAuthored = new Set(source.flatMap((x) => x.rows.map((r) => r.id)));

  const offline: string[] = [];
  for (const x of source.filter((y) => slugs.includes(y.slug))) {
    for (const r of x.rows) for (const i of validateItem(r, r.id)) offline.push(`${r.id}: ${i.message}`);
    for (const i of validateUnit(unitBody(x.unit, x.lesson.id))) offline.push(`${x.unit.id}: ${i.path} ${i.message}`);
  }
  offline.push(...crossLessonClashes(source));
  if (offline.length) die(`${offline.length} content problem(s), the database was not opened:\n  ${offline.slice(0, 12).join('\n  ')}`);

  console.log(`${BAND.toUpperCase()} IMPORT  ${APPLY ? '*** APPLY ***' : 'DRY RUN, nothing will be written'}${REAPPLY ? '  (--reapply)' : ''}`);
  console.log(`  ${describeTarget()}`);
  console.log(`  lessons in this run: ${slugs.length} of ${source.length} authored`);

  /* ── 2. READ POSTGRES. Read-only until step 4. ─────────────────────────── */
  if (!process.env.DATABASE_URL) die('DATABASE_URL is not set. Nothing was attempted.');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    // 2a. TWINS: decided band-wide, applied to every lesson, so a row one
    // lesson dedupes is rewritten in every lesson that quotes it too.
    const twins = await resolveDedupe(c, source);
    const all = source.map((x) => applyDedupe(x, twins.map));
    const run = all.filter((x) => slugs.includes(x.slug));
    const runAuthored = new Set(run.flatMap((x) => x.rows.map((r) => r.id)));
    for (const x of run) {
      for (const i of validateLesson(x.lesson)) offline.push(`${x.lesson.id} (after the twin rewrite): ${i.path} ${i.message}`);
    }
    if (offline.length) die(`${offline.length} lesson problem(s), nothing was written:\n  ${offline.slice(0, 12).join('\n  ')}`);

    const wantItems = new Set<string>(runAuthored);
    for (const x of run) for (const id of itemsReferencedBy(x.lesson as never)) wantItems.add(id);
    const dedupedInRun = run.flatMap((x) => x.deduped);
    for (const id of dedupedInRun) wantItems.add(id);
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
          where theme = $1 and id like 'fr.' || $3 || '.%'
            and nullif(regexp_replace(split_part(id,'.',4),'[^0-9]','','g'),'')::int >= $2`, [theme, floor, BAND]);
      foreign.set(theme, q.rows.map((r) => r.id).filter((id) => !bandAuthored.has(id)));
    }

    const db: DbState = {
      items: new Map(itemRows.rows.map((r) => [r.id as string, { status: r.status as string, item: dbRowToItem(r) }])),
      units: new Map(unitRows.rows.map((r) => [r.slug, { kind: r.kind, status: r.status, body: r.body }])),
      themes: new Set(themeRows.rows.map((r) => r.slug)),
      foreignAboveFloor: foreign,
    };
    // A deduped twin that an earlier apply already wrote stays in Postgres,
    // unreferenced, at whatever status it has. Never deleted here.
    const orphans = dedupedInRun.filter((id) => db.items.has(id));

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
    const promoteIds = [...new Set(plans.flatMap((p) => p.promote))];

    const keptBy = (lessonId: string) => twins.kept.filter((k) => k.lesson === lessonId);
    const dedupedBy = (lessonId: string) => twins.dedupe.filter((d) => d.lesson === lessonId);

    console.log('\n  lesson     slug                     authored  insert  skip  promote  update  conflict  reused(pub/run)  twins(ded/kept)  unit     lesson   v');
    for (const [i, p] of plans.entries()) {
      console.log(
        `  ${p.lessonId.padEnd(10)} ${p.slug.padEnd(24)} ${String(p.authored).padStart(8)}  ${String(p.insert.length).padStart(6)}  ${String(p.skip.length).padStart(4)}  ` +
        `${String(p.promote.length).padStart(7)}  ${String(p.update.length).padStart(6)}  ${String(p.conflict.length).padStart(8)}  ${`${p.reusedPublished}/${p.reusedInRun}`.padStart(15)}  ` +
        `${`${run[i]!.deduped.length}/${keptBy(p.lessonId).length}`.padStart(15)}  ${p.unit.padEnd(7)}  ${p.lesson.padEnd(7)}  ${p.lessonVersion}`,
      );
    }
    const sum = (f: (p: LessonPlan) => number) => plans.reduce((n, p) => n + f(p), 0);
    console.log('\n  TOTALS');
    console.log(`    lessons ${plans.length} | authored rows after dedupe ${sum((p) => p.authored)} | to insert ${sum((p) => p.insert.length)} | identical, published ${sum((p) => p.skip.length)} | identical, to publish ${sum((p) => p.promote.length)} | to update ${sum((p) => p.update.length)} | conflicts ${sum((p) => p.conflict.length)}`);
    console.log(`    distinct item rows this run would write: ${writeIds.length}${sharedInRun ? ` (${sharedInRun} authored twice in the run, written once)` : ''}; rows to flip to published: ${promoteIds.length}`);
    console.log(`    reused rows: ${sum((p) => p.reusedPublished)} published, ${sum((p) => p.reusedInRun)} authored by another lesson in this run`);
    console.log(`    twins deduped to the published row: ${dedupedInRun.length} (${run.reduce((n, x) => n + x.replaced, 0)} references rewritten); twins kept as authored: ${run.reduce((n, x) => n + keptBy(x.lesson.id).length, 0)}`);
    if (orphans.length) console.log(`    deduped twins ALREADY in Postgres from an earlier apply, left as they are and unreferenced: ${orphans.join(', ')}`);
    const act = (k: 'unit' | 'lesson', a: string) => plans.filter((p) => p[k] === a).length;
    console.log(`    units: ${act('unit', 'create')} create, ${act('unit', 'skip')} skip, ${act('unit', 'promote')} to publish, ${act('unit', 'update')} update | lessons: ${act('lesson', 'create')} create, ${act('lesson', 'skip')} skip, ${act('lesson', 'promote')} to publish, ${act('lesson', 'update')} update`);
    for (const [theme, floor] of [...floors].sort()) {
      console.log(`    floor ${theme.padEnd(30)} ${String(floor).padStart(5)}  ${(foreign.get(theme) ?? []).length ? 'FOREIGN ROWS ABOVE' : 'clear'}`);
    }

    console.log('\n  TWINS DEDUPED TO THE PUBLISHED ROW (every pair)');
    for (const x of run) {
      for (const d of dedupedBy(x.lesson.id)) console.log(`    = ${d.lesson.padEnd(9)} ${d.authored} -> ${d.published}  [${d.source}]  « ${d.publishedFr} »`);
    }

    // THE FLASHCARD HUB'S DUPLICATE RULE, after the dedupe. Two B1 lessons
    // authoring the same headword is an authoring defect and blocks. A clash
    // with a published row that survived the dedupe is a kept twin (below).
    const themes = [...new Set(run.flatMap((x) => x.rows.map((r) => r.theme)))];
    const pub = await c.query(
      `select id, kind::text as kind, theme, fr, card_type::text as "cardType" from content_items
        where theme = any($1::text[]) and status = 'published' and kind <> 'sentence'`, [themes]);
    const runRows = [...new Map(run.flatMap((x) => x.rows.map((r) => [r.id, r] as const))).values()];
    const hubBlock = headwordClashes(runRows, pub.rows).filter((h) => bandAuthored.has(h.a) && bandAuthored.has(h.b));
    const owner = (h: { a: string; b: string }) =>
      plans[run.findIndex((x) => x.rows.some((r) => r.id === h.b || r.id === h.a))] ?? plans[0]!;
    for (const h of hubBlock) owner(h).blockers.push(`${h.a} and ${h.b} are the same flashcard (${h.key}), both authored by B1 lessons`);
    // A deduped twin's lesson now deals the PUBLISHED row, which may carry
    // fewer drills than the authored row did (a dictation or speaking section
    // needs its drill). Said, not fixed.
    const pairsInRun = run.flatMap((x) => dedupedBy(x.lesson.id));
    if (pairsInRun.length) {
      const dq = await c.query<{ id: string; drills: string[] }>(
        'select id, drills::text[] as drills from content_items where id = any($1::text[])', [pairsInRun.map((d) => d.published)]);
      const drillsOf = new Map(dq.rows.map((r) => [r.id, r.drills]));
      const src = new Map(source.flatMap((x) => x.rows.map((r) => [r.id, r] as const)));
      // `review` is missing from almost every published row, so it is counted
      // in one line rather than warned 60 times; the other drills are warned.
      let reviewOnly = 0;
      for (const d of pairsInRun) {
        const all = ((src.get(d.authored)?.drills ?? []) as string[]).filter((k) => !(drillsOf.get(d.published) ?? []).includes(k));
        const lost = all.filter((k) => k !== 'review');
        if (all.includes('review')) reviewOnly++;
        if (lost.length) {
          plans[run.findIndex((x) => x.lesson.id === d.lesson)]!.warnings.push(
            `DEDUPED ${d.authored} -> ${d.published}: the published row lacks drill(s) ${lost.join(', ')} that the authored row carried`);
        }
      }
      if (reviewOnly) console.log(`    (${reviewOnly} of ${pairsInRun.length} published rows deduped to lack the 'review' drill the authored twin carried)`);
    }
    for (const x of run) {
      for (const k of keptBy(x.lesson.id)) {
        plans[run.indexOf(x)]!.warnings.push(`TWIN KEPT ${k.lesson} ${k.authored ?? '(no authored row)'} vs published ${k.published} [${k.source}]: ${k.reason}`);
      }
    }

    const warnings = plans.flatMap((p) => p.warnings);
    if (warnings.length) {
      console.log(`\n  WARNINGS ${warnings.length}`);
      for (const w of warnings) console.log(`    ! ${w}`);
    }
    const blockers = plans.flatMap((p) => p.blockers);
    console.log(`\n  BLOCKERS ${blockers.length}`);
    for (const b of blockers.slice(0, 60)) console.log(`    x ${b}`);
    if (blockers.length > 60) console.log(`    ...and ${blockers.length - 60} more`);

    if (blockers.length) die(`${blockers.length} blocker(s). Nothing was written.`);
    if (!APPLY) {
      console.log('\n  DRY RUN COMPLETE. Nothing was written. Re-run with the slugs and --apply to write.\n');
      return;
    }

    /* ── 4. WRITE, one transaction, rollback on anything. ───────────────── */
    const byId = new Map(run.flatMap((x) => x.rows.map((r) => [r.id, r] as const)));
    const counts = { itemsInserted: 0, itemsUpdated: 0, itemsPromoted: 0, unitsCreated: 0, unitsUpdated: 0, unitsPromoted: 0, lessonsCreated: 0, lessonsUpdated: 0, lessonsPromoted: 0 };
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
             card_type=excluded.card_type, prompt=excluded.prompt, status='published', published_at=now(), updated_at=now()` : ''}`,
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
      if (promoteIds.length) {
        const res = await c.query(
          `update content_items set status = 'published', published_at = now(), updated_at = now()
            where id = any($1::text[]) and status <> 'published'`, [promoteIds]);
        if (res.rowCount !== promoteIds.length) throw new Error(`promoting ${promoteIds.length} rows touched ${res.rowCount}`);
        counts.itemsPromoted = res.rowCount;
      }
      const upsertUnit = async (slug: string, title: string, kind: 'curriculum_unit' | 'lesson', body: unknown, upd: boolean) => {
        const res = await c.query(
          `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by, published_at)
           values ($1,$2,$3::content_kind,$5::content_level,'fr','published',$4::jsonb,1,'human',now())
           ${upd ? `on conflict (slug) do update set title=excluded.title, body=excluded.body, status='published', published_at=now(), updated_at=now()` : ''}`,
          [slug, title, kind, JSON.stringify(body), BAND],
        );
        if (res.rowCount !== 1) throw new Error(`${slug}: the write touched ${res.rowCount} rows`);
      };
      const promoteUnit = async (slug: string) => {
        const res = await c.query(
          `update content_units set status = 'published', published_at = now(), updated_at = now()
            where slug = $1 and status <> 'published'`, [slug]);
        if (res.rowCount !== 1) throw new Error(`${slug}: promoting touched ${res.rowCount} rows`);
      };
      for (const [i, p] of plans.entries()) {
        const x = run[i]!;
        if (p.unit === 'create' || p.unit === 'update') {
          await upsertUnit(x.unit.id, String(x.unit.title), 'curriculum_unit', unitBody(x.unit, x.lesson.id), p.unit === 'update');
          if (p.unit === 'create') counts.unitsCreated++; else counts.unitsUpdated++;
        } else if (p.unit === 'promote') { await promoteUnit(x.unit.id); counts.unitsPromoted++; }
        if (p.lesson === 'create' || p.lesson === 'update') {
          await upsertUnit(x.lesson.id, String(x.lesson.title), 'lesson', x.lesson, p.lesson === 'update');
          if (p.lesson === 'create') counts.lessonsCreated++; else counts.lessonsUpdated++;
        } else if (p.lesson === 'promote') { await promoteUnit(x.lesson.id); counts.lessonsPromoted++; }
      }
      await c.query('commit');
    } catch (e) {
      await c.query('rollback');
      die(`rolled back, nothing was written: ${(e as Error).message}`);
    }

    /* ── 5. READ BACK AND PROVE IT. ─────────────────────────────────────── */
    const back = await c.query(`${ITEM_SELECT} where id = any($1::text[])`, [[...runAuthored]]);
    const got = new Map(back.rows.map((r) => [r.id as string, r]));
    const bad = [...runAuthored].filter((id) => {
      const r = got.get(id);
      return !r || r.status !== 'published' || !sameItem(dbRowToItem(r), byId.get(id)!);
    });
    if (bad.length) die(`${bad.length} row(s) did not read back as authored and published, first ${bad[0]}`);
    const ub = await c.query<{ slug: string; body: unknown }>(
      `select slug, body from content_units where slug = any($1::text[]) and status = 'published'`, [unitSlugs]);
    if (ub.rowCount !== unitSlugs.length) die(`expected ${unitSlugs.length} published unit/lesson rows, read back ${ub.rowCount}`);

    console.log(`\n  APPLIED. content_items: ${counts.itemsInserted} inserted, ${counts.itemsUpdated} updated, ${counts.itemsPromoted} flipped to published.`);
    console.log(`  content_units: curriculum_unit ${counts.unitsCreated} created, ${counts.unitsUpdated} updated, ${counts.unitsPromoted} published; lesson ${counts.lessonsCreated} created, ${counts.lessonsUpdated} updated, ${counts.lessonsPromoted} published.`);
    console.log(`  Read back: ${runAuthored.size} authored rows published and identical; ${unitSlugs.length} unit/lesson rows published.`);
    console.log(`\n  NEXT: pnpm tsx scripts/b1-merge-into-seed.ts ${slugs.join(' ')} --dry\n`);
  } finally {
    c.release();
    await pool.end();
  }
}

// Running this file imports; importing it must not.
if (process.argv[1] && /b1-import\.ts$/.test(process.argv[1])) void main();
