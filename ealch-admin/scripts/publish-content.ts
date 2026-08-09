// PUBLISH — the one path from the database to a learner's phone.
//
//   Supabase (canonical)
//        │  status = 'published'
//        ▼
//   assemble a Corpus  ──►  VALIDATE (abort on any issue)
//        │
//        ├──► snapshots/v{n}.json + manifest.json   → Storage bucket `content`
//        │                                            (the OTA channel)
//        ├──► content_snapshots row                 → the canonical version
//        └──► ealch-v2/src/content/seed.json        → committed to git
//                                                     (what ships in the binary)
//
// The DB is the source of truth and git is a MIRROR, never a rival writer. That
// is the whole reason seed.json is GENERATED here rather than hand-edited: the
// committed diff is exactly what the Ops Console approved, so the two review
// paths (approve in the console, or review the PR) can never disagree.
//
// Usage:
//   pnpm content:publish              publish for real
//   pnpm content:publish --dry-run    validate + report, write and upload nothing
//   pnpm content:publish --no-upload  everything except the Storage upload
import './env';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { getTableColumns } from 'drizzle-orm';
import { describeTarget } from './env';
import { contentItems } from '../src/db/schema';
import { buildVocabPoolFromItems, recycledShare, themeLevelKey, tokenize, RECYCLED_VOCAB_FLOOR } from '../src/lib/vocab';
import { buildLevelPools, loadLexiconFreqRank, scoreCefrFit, type ItemLevel } from '../src/lib/gates/cefr';
import { SEED_CUT, describeCut } from './seed-cut.config.ts';
import { stableStringify, sha256, uploadToStorage } from './snapshot-utils.ts';
// The app's own ceiling: a device REFUSES to parse a snapshot past this, so
// producing one would publish bytes no phone will adopt. One number, app-side,
// imported — never restated here.
import { MAX_SNAPSHOT_BYTES } from '../../ealch-v2/src/services/content.logic.ts';
// THE canonical schema — the same file the app, the tests and the generator read.
// Imported, never copied: a copy drifts, and a drift means this script can ship
// content the app cannot render.
import {
  formatIssues,
  unitBand,
  validateCorpus,
  type Corpus,
  type ExamSeries,
  type ExamTask,
  type Item,
  type Lesson,
  type LessonSection,
  type Playlist,
  type SpeakStage,
  type Scenario,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';

const argv = process.argv.slice(2);
const args = new Set(argv);
const DRY_RUN = args.has('--dry-run');
const NO_UPLOAD = args.has('--no-upload') || DRY_RUN;

// --rollout <0..100>: the share of devices that adopt this snapshot (staged
// rollout, master plan Phase 2 OTA safety). Each install holds a stable random
// bucket 0-99 and adopts only when bucket < rollout. Default 100 = everyone.
// Ramp a risky publish: --rollout 10, then content:rollout 50 / 100 to widen
// WITHOUT republishing. content:rollout 0 is the kill switch (halts adoption);
// content:rollback heals devices that already took a bad version.
const rolloutIx = argv.indexOf('--rollout');
const ROLLOUT = rolloutIx === -1 ? 100 : Number(argv[rolloutIx + 1]);
if (!Number.isInteger(ROLLOUT) || ROLLOUT < 0 || ROLLOUT > 100) {
  console.error(`\n✖ --rollout must be an integer 0..100, got "${argv[rolloutIx + 1]}"\n`);
  process.exit(1);
}

const SEED_PATH = resolve(process.cwd(), '../ealch-v2/src/content/seed.json');

/* ─── helpers ────────────────────────────────────────────────────────────── */

// A function DECLARATION, not an arrow const: TypeScript only narrows control
// flow through a never-returning call when it can see the declaration (or an
// explicit annotation on the variable). As an arrow const, callers after `die()`
// still think `url` might be undefined.
function die(msg: string): never {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

// stableStringify + sha256 + Storage I/O live in snapshot-utils.ts, shared
// with rollback-content.ts: two copies of the byte contract is how the app's
// checksum verification quietly diverges from what publishing produces.

type GateReport = { checked: number; issues: { id: string; message: string }[]; skipped?: string };

/** Runs one of the gates/*.py subprocess gates and returns its parsed report,
 *  or `{ error }` if the subprocess itself could not be run. Used only by
 *  ADVISORY gates (4c): unlike the hard-fail conjugation gate, a failure to
 *  run must never die() — it degrades to a warning in the gate list, same as
 *  any other advisory finding. */
async function runPythonGate(
  scriptRelPath: string,
  payload: unknown
): Promise<GateReport | { error: string }> {
  const { spawnSync } = await import('node:child_process');
  const python = process.env.PYTHON_BIN || 'python';
  const gatePath = resolve(process.cwd(), scriptRelPath);
  const result = spawnSync(python, [gatePath], { input: JSON.stringify(payload), encoding: 'utf8' });
  if (result.error || result.status !== 0) {
    return {
      error: result.error?.message ?? `python exited ${result.status}${result.stderr ? `: ${result.stderr.trim()}` : ''}`,
    };
  }
  try {
    return JSON.parse(result.stdout) as GateReport;
  } catch {
    return { error: `non-JSON output: ${result.stdout.slice(0, 200)}` };
  }
}

/* ─── The projection guard ───────────────────────────────────────────────── */

// The failure this exists to stop: this script hand-picks columns. It is an
// allowlist, not `select *`. So a column added to content_items — with a
// migration, a Drizzle field, an Ops Console editor and real authored data
// behind it — reaches the app as UNDEFINED unless someone also remembers to edit
// the SELECT and the mapper thirty lines apart in this file. Nothing errors. The
// content validates. The field is simply, silently, not there.
//
// So every column must be classified exactly once, here. A new column belongs to
// one of these two sets or publishing stops until someone decides which.
//
// This is deliberately a hand-maintained list rather than something derived from
// the mapper: the point is to force a DECISION about each column, and a derived
// check would happily conclude that a forgotten column was intentionally
// forgotten.

// ─── PUBLISH-PROJECTION DEBT: schema fields that exist and do NOT ship yet ───
//
// The schema extension defined these. Nothing carries them to a phone. They are
// listed here, rather than in a plan document, because this file is where the
// person wiring them up will be standing — and because a field that validates,
// type-checks and reaches the app empty is the exact failure the guard below
// exists to prevent. Each entry says what is missing and what "done" means.
//
//   Item.segments, Item.assetKey        (schema.ts: AudioSegment, AssetKeyed)
//     No columns on content_items, so they are absent from every snapshot.
//     Deliberate for now: nothing renders real audio yet and there is nothing
//     to put in them. DONE = add the columns (jsonb for segments, text for
//     assetKey), add them to the SELECT, the mapper and PROJECTED_ITEM_COLUMNS.
//     Blocked on the Phase 7 audio pipeline actually producing timings.
//
//   Domain, Theme, Pack     (Corpus.domains/themes/packs)
//     No tables at all. validateCorpus treats the arrays as empty, so a corpus
//     without them is valid and the app sees no catalogue.
//     Sequenced later by design (the plan scopes tables and data out of this
//     pass). DONE = tables + a read here + the arrays on the emitted Corpus.
//     NOTE for whoever does it: unlike content_items, there is no guard holding
//     these honest. Nothing will tell you the arrays are empty.
//
//   ExamTask, ExamSeries     (Corpus.examTasks/examSeries)
//     DONE (Phase 8 gap-closure) — read below, mapped onto the full `corpus`
//     object. Deliberately NOT added to the seed cut (`seed`, step 5): exam
//     content is b1/b2-banded and the seed cut today only bundles a1/a2/sons
//     content, so it ships via the network snapshot like any other exam-band
//     content would, not the offline-bundled binary. Provenance columns are
//     WITHHELD the same way Item's are — see WITHHELD_ITEM_COLUMNS.
//
//   Item.provenance                                (schema.ts: Provenance)
//     NOT debt — a decision. The columns exist and are deliberately withheld;
//     see WITHHELD_ITEM_COLUMNS. The field stays absent on purpose.
//
// Lesson/Unit/Scenario need nothing: they ship as whole `body` jsonb documents,
// so grammarAssumed/grammarIntroduced/provenance already round-trip. Only
// content_items is column-mapped, which is precisely why only it can lose a
// field silently.

/** Columns projected into the Item the app receives. */
const PROJECTED_ITEM_COLUMNS = new Set([
  'id', 'kind', 'level', 'theme', 'fr', 'en', 'ipa', 'respell', 'gender', 'example', 'notes',
  'tags', 'drills', 'audio_ref', 'image_ref', 'segments', 'asset_key', 'version',
  'skill', 'register', 'can_do', 'grammar_points', 'modality', 'verb_check',
  'card_type', 'prompt',
]);

/** Columns deliberately NOT shipped, each with the reason it stays behind. */
const WITHHELD_ITEM_COLUMNS = new Set([
  'status',        // publish-time filter; every shipped row is 'published' by definition
  'published_at',  // editorial history, not content
  'scheduled_publish_at', // a future publish TIME (Workstream 3 Phase 5) — editorial queue state, not content
  'pack_id',       // an internal review grouping; the app finds items by level+theme
  'created_at',    // ditto
  'updated_at',    // ditto
  // Provenance is authoring metadata: who/what wrote this and who signed it off.
  // It is real and it is audited in the console, but it is not content, and it
  // would put reviewer ids in a public snapshot on every phone.
  'generated_by', 'model', 'prompt_version', 'source_refs', 'reviewed_by', 'reviewed_at',
]);

/** Fail publish if any content_items column is unclassified. Runs before the
 *  DB is touched, so a forgotten column costs a message rather than a snapshot. */
function assertItemProjectionIsComplete(): void {
  const columns = Object.values(getTableColumns(contentItems)).map((c) => c.name);
  const unclassified = columns.filter(
    (c) => !PROJECTED_ITEM_COLUMNS.has(c) && !WITHHELD_ITEM_COLUMNS.has(c)
  );
  if (unclassified.length) {
    die(
      `content_items has ${unclassified.length} column(s) this script does not know about:\n` +
        unclassified.map((c) => `    · ${c}`).join('\n') +
        '\n\n  Every column must be classified in publish-content.ts, because the SELECT is an\n' +
        '  allowlist: an unlisted column reaches the app as undefined with no error anywhere.\n' +
        '  Either add it to the SELECT + the row→Item mapper + PROJECTED_ITEM_COLUMNS,\n' +
        '  or add it to WITHHELD_ITEM_COLUMNS with the reason it stays in the database.'
    );
  }
  // The reverse: a column removed from the table but still claimed here would
  // make the SELECT fail at runtime with a Postgres error rather than here.
  const stale = [...PROJECTED_ITEM_COLUMNS, ...WITHHELD_ITEM_COLUMNS].filter((c) => !columns.includes(c));
  if (stale.length) {
    die(`publish-content.ts claims column(s) that content_items no longer has: ${stale.join(', ')}`);
  }
}

/** Every item a lesson depends on: its itemIds plus anything a practice section
 *  points at. Miss the practice sections and the seed ships a lesson whose
 *  practice block is silently empty. */
function itemsReferencedBy(l: Lesson): string[] {
  const ids = [...l.itemIds];
  for (const s of l.sections as LessonSection[]) {
    if (s.type === 'practice') ids.push(...s.itemIds);
  }
  return ids;
}

/* ─── main ───────────────────────────────────────────────────────────────── */

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (DRY_RUN) console.log('  (dry run — nothing will be written or uploaded)');

  // Before anything else, and before the DB is touched: if a column is not
  // classified, a field that someone authored is about to ship as undefined.
  assertItemProjectionIsComplete();

  const { Pool } = await import('pg');
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Publishing reads the canonical database; it must not run against PGlite.');
  }
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });

  // ── 1. Read what is published ──────────────────────────────────────────
  const unitRows = await pool.query<{ body: Unit }>(
    `select body from content_units where kind = 'curriculum_unit' and status = 'published'`
  );
  const lessonRows = await pool.query<{ body: Lesson }>(
    `select body from content_units where kind = 'lesson' and status = 'published'`
  );
  // drills::text[] is not cosmetic. node-postgres ships no parser for a CUSTOM
  // enum array (drill_kind[]), so it hands back the raw Postgres literal
  // '{flashcard,voiceflash}' as a *string*. tags is a native text[] and parses
  // fine, which is exactly what makes the bug easy to miss. The cast tells pg to
  // treat it as a plain text array, which it does know how to parse.
  const itemRows = await pool.query(
    `select id, kind::text as kind, level::text as level, theme, fr, en, ipa, respell,
            gender::text as gender, example, notes, tags, drills::text[] as drills,
            audio_ref, image_ref, segments, asset_key, version,
            skill::text as skill, register::text as register, can_do,
            grammar_points, modality::text as modality, verb_check,
            card_type::text as card_type, prompt
       from content_items where status = 'published'`
  );

  const scenarioRows = await pool.query<{ body: Scenario }>(
    `select body from content_units where kind = 'scenario' and status = 'published'`
  );
  const playlistRows = await pool.query<{ body: Playlist }>(
    `select body from content_units where kind = 'playlist' and status = 'published'`
  );
  const speakStageRows = await pool.query<{ body: SpeakStage }>(
    `select body from content_units where kind = 'speak_stage' and status = 'published'`
  );
  // Same enum-cast reasoning as content_items above: format/task_type/skill/
  // level are custom Postgres enums, cast to text so node-postgres hands back
  // plain strings. target_item_ids/examiner_notes are native text[] (like
  // tags), so they parse fine uncast.
  const examTaskRows = await pool.query(
    `select id, format::text as format, variant, task_type::text as task_type,
            skill::text as skill, level::text as level, format_version, prompt,
            items, response_spec, rubric, model_answer, examiner_notes,
            timing_s, scoring_map, target_item_ids
       from content_exam_tasks where status = 'published'`
  );
  const examSeriesRows = await pool.query(
    `select id, format::text as format, variant, series_no, task_ids
       from content_exam_series where status = 'published'`
  );

  const units: Unit[] = unitRows.rows.map((r) => r.body);
  const lessons: Lesson[] = lessonRows.rows.map((r) => r.body);
  const scenarios: Scenario[] = scenarioRows.rows.map((r) => r.body);
  const playlists: Playlist[] = playlistRows.rows.map((r) => r.body);
  // Walk order is (world, seq) — store it sorted so every consumer (and every
  // diff of the snapshot) sees the one true order.
  const speakPath: SpeakStage[] = speakStageRows.rows
    .map((r) => r.body)
    .sort((a, b) => a.world - b.world || a.seq - b.seq);
  const examTasks: ExamTask[] = examTaskRows.rows.map((r) => ({
    id: r.id,
    format: r.format,
    variant: r.variant,
    taskType: r.task_type,
    skill: r.skill,
    level: r.level,
    formatVersion: r.format_version,
    prompt: r.prompt,
    ...(r.items ? { items: r.items } : {}),
    ...(r.response_spec ? { responseSpec: r.response_spec } : {}),
    ...(r.rubric ? { rubric: r.rubric } : {}),
    ...(r.model_answer ? { modelAnswer: r.model_answer } : {}),
    ...(r.examiner_notes?.length ? { examinerNotes: r.examiner_notes } : {}),
    timingS: r.timing_s,
    ...(r.scoring_map ? { scoringMap: r.scoring_map } : {}),
    ...(r.target_item_ids?.length ? { targetItemIds: r.target_item_ids } : {}),
    // provenance intentionally withheld — same reasoning as WITHHELD_ITEM_COLUMNS.
  }));
  const examSeries: ExamSeries[] = examSeriesRows.rows.map((r) => ({
    id: r.id,
    format: r.format,
    variant: r.variant,
    seriesNo: r.series_no,
    taskIds: r.task_ids ?? [],
  }));
  const items: Item[] = itemRows.rows.map((r) => ({
    id: r.id,
    kind: r.kind,
    level: r.level,
    theme: r.theme,
    fr: r.fr,
    en: r.en,
    ...(r.ipa ? { ipa: r.ipa } : {}),
    ...(r.respell ? { respell: r.respell } : {}),
    ...(r.gender ? { gender: r.gender } : {}),
    ...(r.example ? { example: r.example } : {}),
    ...(r.notes ? { notes: r.notes } : {}),
    tags: r.tags ?? [],
    drills: r.drills ?? [],
    audioRef: r.audio_ref ?? null,
    ...(r.image_ref ? { imageRef: r.image_ref } : {}),
    ...(r.segments ? { segments: r.segments } : {}),
    ...(r.asset_key ? { assetKey: r.asset_key } : {}),
    version: r.version,
    // The spine. Spread-when-present, like ipa/gender above: a null column must
    // become an ABSENT key, not `skill: null`. The app's validators check
    // type-when-present, and `null` is present — it would be rejected, and the
    // snapshot checksum would churn on fields that carry no information.
    ...(r.skill ? { skill: r.skill } : {}),
    ...(r.register ? { register: r.register } : {}),
    ...(r.can_do ? { canDo: r.can_do } : {}),
    ...(r.grammar_points?.length ? { grammarPoints: r.grammar_points } : {}),
    ...(r.modality ? { modality: r.modality } : {}),
    ...(r.verb_check ? { verbCheck: r.verb_check } : {}),
    ...(r.card_type ? { cardType: r.card_type } : {}),
    ...(r.prompt ? { prompt: r.prompt } : {}),
  }));

  console.log(
    `\n  published: ${units.length} units · ${lessons.length} lessons · ${items.length} items · ` +
      `${scenarios.length} scenarios · ${playlists.length} playlists · ` +
      `${examTasks.length} exam tasks · ${examSeries.length} exam series`
  );

  if (
    !units.length && !lessons.length && !items.length && !scenarios.length && !playlists.length &&
    !examTasks.length && !examSeries.length
  ) {
    await pool.end();
    die('Nothing is published. Approve some content in the Ops Console first.');
  }

  // ── 2. Prune, on one rule ──────────────────────────────────────────────
  //
  // A UNIT listing an unpublished lesson is NORMAL — lessons are published one
  // at a time, and the Den must show what is actually live. So we prune the
  // unit's lessonIds down to what exists.
  //
  // A LESSON referencing an unpublished item is BROKEN, and we refuse to ship
  // it. It is not a partial lesson, it is a lesson whose practice block renders
  // blank with no error anywhere. Pruning it would hide exactly the failure this
  // pipeline exists to catch, so validateCorpus below is left to fail on it.
  const liveLessons = new Set(lessons.map((l) => l.id));
  let prunedRefs = 0;
  const prunedUnits: Unit[] = units.map((u) => {
    const keep = (u.lessonIds ?? []).filter((id) => liveLessons.has(id));
    prunedRefs += (u.lessonIds?.length ?? 0) - keep.length;
    return { ...u, lessonIds: keep };
  });
  if (prunedRefs > 0) {
    console.log(`  pruned ${prunedRefs} unit→lesson reference(s) to unpublished lessons (expected)`);
  }

  // ── 3. Version, from the DB. Not from whatever is in Storage. ──────────
  const prev = await pool.query<{ version: number; counts: Record<string, number>; checksum: string }>(
    `select version, counts, checksum from content_snapshots order by version desc limit 1`
  );
  const previous = prev.rows[0];
  const version = (previous?.version ?? 0) + 1;

  const corpus: Corpus = { version, units: prunedUnits, lessons, items, scenarios, playlists, examTasks, examSeries, speakPath };

  // ── 4. THE GATE ────────────────────────────────────────────────────────
  // Every failure below is one that does NOT crash in production. A dangling
  // itemId renders as a blank drill; a bad quiz index tells the learner they
  // failed whatever they picked. They must die here, in one line of output.
  const issues = validateCorpus(corpus);
  if (issues.length) {
    await pool.end();
    console.error(`\n✖ Corpus is invalid — ${issues.length} issue(s). NOTHING was published.\n`);
    console.error(formatIssues(issues.slice(0, 40)));
    if (issues.length > 40) console.error(`  … and ${issues.length - 40} more`);
    console.error('');
    process.exit(1);
  }
  console.log('  ✓ corpus valid');

  // ── 4·0. RULE no-silent-regression — the git/DB split-brain guard ───────
  //
  // Publishing rewrites seed.json from the database (step 9). That is correct
  // and deliberate: the DB is the source of truth, git is a mirror. But it
  // means any lesson that exists ONLY in the committed seed is destroyed by a
  // publish — silently, because a lesson the DB never had is not "changed",
  // it is simply absent from the query at step 1.
  //
  // This has already happened once. On 2026-07-31, sons.02/sons.03 were
  // authored seed-direct, a publish overwrote them from older DB rows, and
  // sons.03.l1 collapsed 20 sections -> 6. restore-lesson-bodies-from-seed.ts
  // exists to undo that, and its header documents the whole incident. The
  // hazard is structural, not a one-off: seed-direct authoring is a normal
  // part of the workflow, so the window reopens every time someone uses it.
  //
  // So compare the committed seed against what we are about to publish, and
  // refuse on any lesson that would DISAPPEAR or REGRESS. This is deliberately
  // narrow — it does not police edits, only losses:
  //
  //   - a lesson in the committed seed with no published DB row  (deleted)
  //   - a DB lesson at a LOWER version than the committed one    (reverted)
  //
  // A lesson the DB has and git does not is fine and unremarked: that is the
  // normal direction, new content flowing DB -> seed.
  //
  // Runs during --dry-run too. A dry run is what you use to decide whether it
  // is safe to publish, so a dry run that stays quiet about a pending loss is
  // worse than no dry run at all.
  {
    // The COMMITTED seed, read through git rather than from disk: the
    // working-tree file may already be mid-edit, and what we need to protect
    // is the content that is checked in.
    let committed: { lessons?: Lesson[] } | null = null;
    try {
      const { execFileSync } = await import('node:child_process');
      const repoRoot = resolve(process.cwd(), '..');
      committed = JSON.parse(
        execFileSync('git', ['show', 'HEAD:ealch-v2/src/content/seed.json'], {
          cwd: repoRoot,
          maxBuffer: 512 * 1024 * 1024,
          encoding: 'utf8',
        })
      );
    } catch (err) {
      // No git, no HEAD, or an unreadable seed. Warn, do not die: publishing
      // from a tarball or a fresh clone without history is legitimate, and
      // this guard must not become the reason a good publish cannot run.
      console.log(
        `  ! no-silent-regression: could not read the committed seed (${
          err instanceof Error ? err.message.split('\n')[0] : String(err)
        }) — guard SKIPPED`
      );
    }

    if (committed?.lessons) {
      const live = new Map(lessons.map((l) => [l.id, l]));
      const losses: string[] = [];

      for (const git of committed.lessons) {
        const db = live.get(git.id);
        if (!db) {
          losses.push(
            `${git.id}: in the committed seed (v${git.version}, ${git.sections.length} sections) ` +
              `but NOT published in the DB — this publish would DELETE it`
          );
          continue;
        }
        if (db.version < git.version) {
          losses.push(
            `${git.id}: DB is v${db.version}, committed seed is v${git.version} ` +
              `— this publish would REVERT it`
          );
        }
      }

      if (losses.length) {
        await pool.end();
        console.error(
          `\n✖ no-silent-regression: ${losses.length} lesson(s) would be lost. NOTHING was published.\n`
        );
        for (const l of losses) console.error(`  ✖ ${l}`);
        console.error(
          '\n  The database does not yet contain content that is committed to git.\n' +
            '  Publishing now would overwrite seed.json and destroy it.\n\n' +
            '  Push the committed bodies into Postgres first:\n' +
            '    pnpm tsx scripts/restore-lesson-bodies-from-seed.ts --dry-run\n' +
            '    pnpm tsx scripts/restore-lesson-bodies-from-seed.ts\n\n' +
            '  Then re-run this publish. When the DB and git agree, a --dry-run\n' +
            '  leaves seed.json byte-identical, which is the proof that nothing\n' +
            '  can be lost.\n'
        );
        process.exit(1);
      }
      console.log(`  ✓ no-silent-regression (${committed.lessons.length} committed lessons accounted for)`);
    }
  }

  // ── 4a. RULE deterministic-french-gates (master plan Phase 2.D) ─────────
  // A Python subprocess (publish/CI environment only — never bundled, never
  // installed on device) checks every item carrying a `verbCheck` target
  // against a real conjugator (verbecc). Deterministic French checkers are
  // authoritative over any LLM-authored guess: a wrong conjugation must
  // never reach a phone. Skipped entirely (no subprocess spawned) when
  // nothing in this publish carries a verbCheck target — most publishes for
  // a long while yet, until authoring backfills more of the corpus.
  {
    const verbTargeted = items.filter((i) => i.verbCheck);
    if (verbTargeted.length > 0) {
      const { spawnSync } = await import('node:child_process');
      const python = process.env.PYTHON_BIN || 'python';
      const gatePath = resolve(process.cwd(), 'gates/check_french.py');
      const payload = JSON.stringify({
        items: verbTargeted.map((i) => ({ id: i.id, fr: i.fr, verbCheck: i.verbCheck })),
      });
      const result = spawnSync(python, [gatePath], { input: payload, encoding: 'utf8' });

      if (result.error || result.status !== 0) {
        await pool.end();
        die(
          `The French conjugation gate could not run (${result.error?.message ?? `python exited ${result.status}`}).\n` +
            (result.stderr ? `  ${result.stderr.trim()}\n` : '') +
            '  Install its dependencies: pip install -r gates/requirements.txt\n' +
            `  (set PYTHON_BIN if "${python}" is not the right interpreter on this machine).`
        );
      }

      let report: { checked: number; issues: { id: string; message: string }[] };
      try {
        report = JSON.parse(result.stdout);
      } catch {
        await pool.end();
        die(`The French conjugation gate produced non-JSON output on stdout:\n${result.stdout}\n${result.stderr}`);
      }

      if (report.issues.length) {
        await pool.end();
        console.error(
          `\n✖ French conjugation gate: ${report.issues.length} of ${report.checked} checked item(s) failed. NOTHING was published.\n`
        );
        for (const issue of report.issues) console.error(`  · ${issue.message}`);
        console.error('');
        process.exit(1);
      }
      console.log(`  ✓ French conjugation gate: ${report.checked} item(s) checked`);
    }
  }

  // ── 4b. RULE lesson-has-practice (master plan Phase 2.B) ────────────────
  // Every published lesson must carry >=1 practice section with a non-empty,
  // fully-resolvable itemIds[], and Lesson.itemIds must be populated. This is
  // the one rule that converts lesson study into review-deck cards: a lesson
  // referencing no items feeds the SRS nothing and the Den's progress bars
  // divide by zero.
  //
  // It lives HERE and not in validateCorpus, on purpose: phones carry cached
  // corpora whose lessons predate this rule, and verifySnapshot runs
  // validateCorpus on device — putting the rule there would invalidate every
  // corpus already in the field. The publish contract is where a rule about
  // what may SHIP belongs.
  //
  // EXCEPT for assessment lessons. A bilan or an exam tests what other lessons
  // taught; it owns no corpus rows and must release no SRS cards, because every
  // row it quotes already belongs to the lesson that introduced it. The A1
  // capstone met this rule first, on 2026-08-09, and the two were in deliberate
  // opposition: a1-30-bilan.test.ts pins `itemIds.length === 0` ("a unit that
  // quotes twenty-nine lessons owns none of their rows") while this rule
  // demanded the opposite. The old a1.30 did list 101 itemIds and released all
  // of them to SRS a second time, which is the bug that test exists to prevent.
  //
  // The exemption is POSITIVE — `features: ['assessment']`, declared on the
  // lesson — and never inferred from the absence of practice. Inferring it
  // would let every genuinely broken lesson exempt itself, which is the whole
  // failure this gate was built to catch.
  //
  // A marked lesson that DOES own rows or DOES carry practice is a
  // contradiction: either the marker is wrong or the body is. That fails too,
  // separately, so the flag cannot be used to wave a teaching lesson through.
  const itemIdSet = new Set(items.map((i) => i.id));
  const practiceless: string[] = [];
  const contradictory: string[] = [];
  const assessments: string[] = [];
  for (const l of lessons) {
    const practices = (l.sections as LessonSection[]).filter((s) => s.type === 'practice');
    const joined = Array.isArray(l.itemIds) && l.itemIds.length > 0;

    if (l.features?.includes('assessment')) {
      assessments.push(l.id);
      if (joined || practices.length > 0) contradictory.push(l.id);
      continue;
    }

    const resolvable =
      practices.length > 0 &&
      practices.every((p) => p.itemIds.length > 0 && p.itemIds.every((id) => itemIdSet.has(id)));
    if (!resolvable || !joined) practiceless.push(l.id);
  }
  if (contradictory.length) {
    await pool.end();
    console.error(`\n✖ RULE lesson-has-practice: ${contradictory.length} lesson(s) claim 'assessment' but own corpus rows or carry practice. NOTHING was published.`);
    console.error(`  ${contradictory.join(', ')}`);
    console.error("  An assessment lesson releases no SRS cards. Drop the feature, or drop the itemIds and practice.\n");
    process.exit(1);
  }
  if (practiceless.length) {
    await pool.end();
    console.error(`\n✖ RULE lesson-has-practice: ${practiceless.length} lesson(s) ship no resolvable practice. NOTHING was published.`);
    console.error(`  ${practiceless.join(', ')}`);
    console.error("  Author real practice sections (scripts/author-practice.ts is the pattern), mark the lesson");
    console.error("  features: ['assessment'] if it examines rather than teaches, or unpublish it.\n");
    process.exit(1);
  }
  console.log(
    `  ✓ lesson-has-practice: every teaching lesson feeds the SRS` +
    (assessments.length ? ` (${assessments.length} assessment lesson(s) exempt: ${assessments.join(', ')})` : ''),
  );

  // ── 4c. MACHINE GATES (Phase 6b, CF-24) — warnings, never failures ──────
  // Breadth rules the corpus is expected to GROW INTO. They warn instead of
  // failing because the corpus is still early: making them hard gates today
  // would block every publish until Phase 2 authoring lands, and a gate nobody
  // can pass just gets deleted. The day the corpus clears them, flip to errors.
  {
    const gate: string[] = [];

    // A theme below ~20 items starves every deck built from it.
    const themeCounts = new Map<string, number>();
    for (const i of items) themeCounts.set(i.theme, (themeCounts.get(i.theme) ?? 0) + 1);
    const thin = [...themeCounts.entries()].filter(([, n]) => n < 20);
    if (thin.length) {
      gate.push(`theme breadth: ${thin.map(([t, n]) => `${t}=${n}`).join(', ')} (target ≥ 20 items per theme)`);
    }

    // An item only one drill can reach barely earns its place in the corpus.
    const singleDrill = items.filter((i) => i.drills.length === 1);
    if (singleDrill.length) {
      gate.push(`single-drill items (${singleDrill.length}): ${singleDrill.map((i) => i.id).join(', ')}`);
    }

    // imageRef shape is validated by validateCorpus; RESOLVABILITY is not yet —
    // the dangling-ref hard gate arrives with the snapshot asset manifest.
    const withImage = items.filter((i) => typeof i.imageRef === 'string' && i.imageRef.length > 0);
    if (withImage.length) {
      gate.push(`imageRef on ${withImage.length} item(s) — resolvability is not machine-checked until the asset manifest lands; verify the uploads`);
    }

    // RULE recycled-vocab (CONTENT-AUTHORING-GUIDE.md §2, Workstream 4) — advisory
    // for now: a first real run found themes (dictee, verbes) with zero non-
    // sentence items to recycle from at all, which a hard gate would treat as
    // an unfixable publish blocker rather than an authoring gap. Same posture
    // as every other rule in this block: flip to a die() once the corpus
    // actually clears its own floor. ≥30% at a1/a2/b1, ≥25% at b2, ≥20% at c1.
    {
      const vocabPool = buildVocabPoolFromItems(items.filter((i) => i.kind !== 'sentence'));
      const recycleFailing: string[] = [];
      for (const i of items) {
        if (i.kind !== 'sentence') continue;
        const floor = RECYCLED_VOCAB_FLOOR[i.level];
        if (floor === undefined) continue;
        const tokens = tokenize(i.fr);
        if (tokens.length === 0) continue; // degenerate/empty fr is validateCorpus's job, not this gate's
        const pct = recycledShare(tokens, vocabPool.get(themeLevelKey(i.level, i.theme)));
        if (pct < floor) recycleFailing.push(`${i.id}=${Math.round(pct * 100)}%(need ${Math.round(floor * 100)}%)`);
      }
      if (recycleFailing.length) {
        gate.push(`recycled-vocab below §2 floor (${recycleFailing.length}): ${recycleFailing.join(', ')}`);
      }
    }

    // Gender-lexicon gate (Workstream 4, gates/check_gender.py) — advisory:
    // ships in the same run it lands, per the explicit decision to promote
    // it to a hard die() only after one real publish shows zero false
    // positives against the live corpus (the authoring guide's own §11 also
    // currently calls gender "flag for human review pending full automation").
    {
      const genderTargeted = items.filter((i) => i.gender === 'm' || i.gender === 'f');
      if (genderTargeted.length > 0) {
        const report = await runPythonGate('gates/check_gender.py', {
          items: genderTargeted.map((i) => ({ id: i.id, fr: i.fr, gender: i.gender })),
        });
        if ('error' in report) {
          gate.push(`gender-lexicon gate could not run: ${report.error}`);
        } else if (report.issues.length) {
          gate.push(`gender-lexicon mismatches (${report.issues.length}): ${report.issues.map((i) => i.message).join(' | ')}`);
        }
      }
    }

    // IPA gate (Workstream 4, gates/check_ipa.py) — advisory, subsumes the
    // old voiceflash-only presence check (now also covers dictation) plus an
    // espeak-ng cross-check when the binary is present on this machine.
    {
      const ipaTargeted = items.filter((i) => i.drills.includes('voiceflash') || i.drills.includes('dictation'));
      if (ipaTargeted.length > 0) {
        const report = await runPythonGate('gates/check_ipa.py', {
          items: ipaTargeted.map((i) => ({ id: i.id, fr: i.fr, ipa: i.ipa ?? null, drills: i.drills })),
        });
        if ('error' in report) {
          gate.push(`IPA gate could not run: ${report.error}`);
        } else {
          if (report.skipped) gate.push(`IPA cross-check skipped: ${report.skipped}`);
          if (report.issues.length) gate.push(`IPA issues (${report.issues.length}): ${report.issues.map((i) => i.message).join(' | ')}`);
        }
      }
    }

    // CEFR-fit heuristic gate (Workstream 4, src/lib/gates/cefr.ts) — a
    // Tier-1 stand-in for the "real" classifier the master plan calls for,
    // pure TypeScript (no subprocess), always advisory. Every flag it
    // produces says so in its own text (`[CEFR heuristic v1]`).
    {
      // Same scope as the recycled-vocab gate: pools built from non-sentence
      // (word/phrase) items, sentences scored against them — a word IS
      // vocabulary, not something composed FROM vocabulary, so scoring one
      // against a pool containing itself would trivially "pass" every time.
      const pools = buildLevelPools(items.filter((i) => i.kind !== 'sentence'));
      const freqRank = loadLexiconFreqRank();
      const cefrFlags: string[] = [];
      for (const i of items) {
        if (i.kind !== 'sentence') continue;
        const score = scoreCefrFit({ fr: i.fr, level: i.level as ItemLevel }, pools, freqRank);
        if (score.flags.length) cefrFlags.push(`${i.id}: ${score.flags.join('; ')}`);
      }
      if (cefrFlags.length) {
        gate.push(`CEFR-fit heuristic flags (${cefrFlags.length}): ${cefrFlags.join(' || ')}`);
      }
    }

    if (gate.length) {
      console.log(`\n  ⚠ machine gates (advisory, publish continues):`);
      for (const g of gate) console.log(`    · ${g}`);
      console.log('');
    } else {
      console.log('  ✓ machine gates: breadth, multi-drill, ipa, image refs');
    }
  }

  // ── 5. The seed cut — what ships inside the binary ─────────────────────
  console.log(`\n  seed cut: ${describeCut()}`);

  // Band comes off the ID, not off u.track. A unit past a2 has no track at all
  // (it belongs to no Den column), so reading u.track here would compare against
  // undefined and quietly drop it — and worse, a b1 unit named explicitly in
  // SEED_CUT.units would ship while contributing `undefined` to seedLevels below,
  // taking its scenarios with it. unitBand() reads the one field that is always
  // present and cannot disagree.
  const wantUnit = (u: Unit) =>
    (SEED_CUT.tracks as readonly string[]).includes(unitBand(u.id) ?? '') || SEED_CUT.units.includes(u.id);

  // The cut must be PREREQ-CLOSED: if a unit ships in the binary, the units it
  // gates on ship too, transitively. A seed unit whose prerequisite lives only
  // on the network is a gate whose key needs a network call — on a fresh
  // offline install, a gate that never opens. This is also what lets the seed
  // pass validateCorpus below, whose prereq check (rightly) does not know the
  // difference between a subset and a corpus.
  //
  // A pulled-in unit is a full citizen of the seed: its lessons (and their
  // items, below) come with it, because a unit whose lessonIds dangle fails
  // seed validation exactly like a dangling prereq does. That growth is the
  // honest cost of shipping the gate; today's prereqs are lesson-less A1 units
  // and cost bytes, not megabytes. If closure ever drags in something heavy,
  // the fix is in seed-cut.config.ts (name a lighter cut), never here.
  const unitById = new Map(prunedUnits.map((u) => [u.id, u]));
  const seedUnitMap = new Map(prunedUnits.filter(wantUnit).map((u) => [u.id, u]));
  const cutUnitIds = new Set(seedUnitMap.keys());
  const queue = [...seedUnitMap.values()];
  while (queue.length) {
    const u = queue.pop()!;
    for (const p of u.prereqUnitIds ?? []) {
      const pu = unitById.get(p);
      if (pu && !seedUnitMap.has(pu.id)) {
        seedUnitMap.set(pu.id, pu);
        queue.push(pu);
      }
    }
  }
  const seedUnits = [...seedUnitMap.values()];
  const pulledIn = seedUnits.filter((u) => !cutUnitIds.has(u.id));
  if (pulledIn.length) {
    console.log(`  prereq closure pulled in: ${pulledIn.map((u) => u.id).join(', ')}`);
  }
  const seedUnitIds = new Set(seedUnitMap.keys());
  const seedLessons = lessons.filter((l) => seedUnitIds.has(l.unitId));

  // Speak stages ship for the configured worlds, and their blocks' items come
  // with them — a bundled stage whose sentences live only on the network is a
  // trail a fresh offline install cannot walk (and a validateCorpus failure
  // below, which is the guard that makes forgetting this impossible).
  const seedSpeak = speakPath.filter((s) => SEED_CUT.speakWorlds.includes(s.world));

  // Everything the bundled lessons depend on, plus the core themes, plus the
  // bundled speak stages' blocks. A seed that ships a lesson without its items
  // is a seed that ships a broken lesson.
  const needed = new Set([
    ...seedLessons.flatMap(itemsReferencedBy),
    ...seedSpeak.flatMap((s) => s.blocks.flatMap((b) => b.itemIds)),
  ]);
  const seedItems = items.filter((i) => needed.has(i.id) || SEED_CUT.themes.includes(i.theme));

  // Scenarios ship in the seed when their level is represented in the seed — by a
  // bundled track OR a bundled unit (a1.01 pulls a1 in). So a fresh, offline
  // install can run Role Play at the levels it actually ships content for.
  const seedLevels = new Set<string>([
    ...SEED_CUT.tracks,
    ...seedUnits.map((u) => unitBand(u.id)).filter((b): b is NonNullable<typeof b> => b !== null),
  ]);
  const seedScenarios = scenarios.filter((s) => seedLevels.has(s.level));
  // Playlists ship in the seed on the same rule as scenarios: honest listening
  // for a level a fresh offline install actually has content for.
  const seedPlaylists = playlists.filter((p) => seedLevels.has(p.minLevel));

  const seed: Corpus = {
    version, units: seedUnits, lessons: seedLessons, items: seedItems,
    scenarios: seedScenarios, playlists: seedPlaylists, speakPath: seedSpeak,
  };

  // The seed must be a coherent corpus IN ITS OWN RIGHT. It is what a user with
  // no network sees, so a dangling reference here is invisible until someone is
  // offline — the worst possible time to discover it.
  const seedIssues = validateCorpus(seed);
  if (seedIssues.length) {
    await pool.end();
    console.error(`\n✖ The SEED CUT is not a valid corpus — ${seedIssues.length} issue(s). NOTHING was published.`);
    console.error('  The full corpus is fine; the subset selected by seed-cut.config.ts is not.\n');
    console.error(formatIssues(seedIssues.slice(0, 20)));
    console.error('');
    process.exit(1);
  }
  console.log(
    `  ✓ seed valid: ${seedUnits.length} units · ${seedLessons.length} lessons · ${seedItems.length} items · ` +
      `${seedScenarios.length} scenarios · ${seedPlaylists.length} playlists · ${seedSpeak.length} speak stages`
  );

  // ── 6. Bytes ───────────────────────────────────────────────────────────
  const snapshotJson = stableStringify(corpus);
  if (snapshotJson.length > MAX_SNAPSHOT_BYTES) {
    await pool.end();
    die(
      `snapshot is ${snapshotJson.length} bytes — past the app's ${MAX_SNAPSHOT_BYTES}-byte ceiling; devices will refuse it.\n` +
        '  Heavy media belongs in the audio asset manifest, not the snapshot. If the corpus has\n' +
        '  genuinely outgrown the ceiling, raise MAX_SNAPSHOT_BYTES in content.logic.ts as a\n' +
        '  DECISION (it is a perf and OOM budget on low-end devices), then republish.'
    );
  }
  const checksum = sha256(snapshotJson);
  const path = `snapshots/v${version}.json`;
  const counts = {
    units: corpus.units.length,
    lessons: corpus.lessons.length,
    items: corpus.items.length,
    scenarios: corpus.scenarios.length,
    playlists: (corpus.playlists ?? []).length,
    examTasks: (corpus.examTasks ?? []).length,
    examSeries: (corpus.examSeries ?? []).length,
  };
  const seedCounts = {
    units: seed.units.length,
    lessons: seed.lessons.length,
    items: seed.items.length,
    scenarios: seed.scenarios.length,
    playlists: (seed.playlists ?? []).length,
  };

  // `rollout` is the staged-rollout gate the app honors (content.logic.ts
  // shouldAdopt): a device adopts only if its stable bucket < rollout. Written
  // even at 100 so the field's presence is the norm, not the exception.
  const manifest = { version, path, checksum, rollout: ROLLOUT, counts, publishedAt: new Date().toISOString() };
  if (ROLLOUT < 100) console.log(`  staged rollout: ${ROLLOUT}% of devices adopt v${version}`);

  // ── 7. What changed ────────────────────────────────────────────────────
  console.log('\n  ── diff ──');
  if (!previous) {
    console.log(`  v${version} is the FIRST snapshot.`);
  } else if (previous.checksum === checksum) {
    console.log(`  identical to v${previous.version} — nothing changed.`);
  } else {
    const p = previous.counts ?? {};
    const d = (k: keyof typeof counts) => {
      const delta = counts[k] - (Number(p[k]) || 0);
      return `${counts[k]} (${delta >= 0 ? '+' : ''}${delta})`;
    };
    console.log(`  v${previous.version} → v${version}`);
    console.log(`    units:      ${d('units')}`);
    console.log(`    lessons:    ${d('lessons')}`);
    console.log(`    items:      ${d('items')}`);
    console.log(`    scenarios:  ${d('scenarios')}`);
    console.log(`    playlists:  ${d('playlists')}`);
    console.log(`    examTasks:  ${d('examTasks')}`);
    console.log(`    examSeries: ${d('examSeries')}`);
  }
  console.log(`  checksum: ${checksum.slice(0, 16)}…`);

  if (DRY_RUN) {
    await pool.end();
    console.log('\n✓ dry run — valid, nothing written.\n');
    return;
  }

  // ── 8. Upload the OTA artifacts ────────────────────────────────────────
  if (!NO_UPLOAD) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      await pool.end();
      die(
        'Storage upload needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in ealch-admin/.env.\n' +
          '  (The service-role key is required to WRITE to the bucket; the app only ever reads it.)\n' +
          '  Re-run with --no-upload to generate seed.json without publishing over the air.'
      );
    }
    await uploadToStorage(url, key, path, snapshotJson);
    // The manifest is written LAST and points at a snapshot that is already
    // there. A client that reads the manifest must never be told about bytes
    // that have not finished uploading.
    await uploadToStorage(url, key, 'manifest.json', JSON.stringify(manifest, null, 2));
    console.log(`\n  ↑ uploaded ${path} and manifest.json`);
  } else {
    console.log('\n  (--no-upload: Storage untouched)');
  }

  // ── 9. The committed mirror, BEFORE the counter ────────────────────────
  // Written before the content_snapshots insert on purpose (publish atomicity,
  // master plan Phase 2): a crash between the two now leaves a fresher mirror
  // than the counter, which the next publish simply overwrites — harmless. The
  // old order could record a version whose committed mirror never landed.
  mkdirSync(dirname(SEED_PATH), { recursive: true });
  writeFileSync(SEED_PATH, JSON.stringify(seed, null, 2) + '\n', 'utf8');
  console.log(`  ✎ ${SEED_PATH}`);

  // ── 10. Record it. The DB is the version counter. ──────────────────────
  await pool.query(
    `insert into content_snapshots (version, path, checksum, counts, seed_counts)
     values ($1, $2, $3, $4, $5)`,
    [version, path, checksum, JSON.stringify(counts), JSON.stringify(seedCounts)]
  );
  await pool.end();

  console.log(`\n✓ published v${version}\n`);
}

// upload() moved to snapshot-utils.ts (uploadToStorage), shared with the
// rollout and rollback scripts. It throws rather than die()s: die() exits with
// the pg pool open, which on Windows aborts with a native UV_HANDLE_CLOSING
// panic mid-teardown; main()'s catch reports it cleanly, and the snapshot row
// is inserted after upload so a failed upload leaves no orphan version.

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
