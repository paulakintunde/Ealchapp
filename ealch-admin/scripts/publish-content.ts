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
import { createHash } from 'node:crypto';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { getTableColumns } from 'drizzle-orm';
import { describeTarget } from './env';
import { contentItems } from '../src/db/schema';
import { SEED_CUT, describeCut } from './seed-cut.config.ts';
// THE canonical schema — the same file the app, the tests and the generator read.
// Imported, never copied: a copy drifts, and a drift means this script can ship
// content the app cannot render.
import {
  formatIssues,
  unitBand,
  validateCorpus,
  type Corpus,
  type Item,
  type Lesson,
  type LessonSection,
  type Scenario,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has('--dry-run');
const NO_UPLOAD = args.has('--no-upload') || DRY_RUN;

const SEED_PATH = resolve(process.cwd(), '../ealch-v2/src/content/seed.json');
const BUCKET = 'content';

/* ─── helpers ────────────────────────────────────────────────────────────── */

// A function DECLARATION, not an arrow const: TypeScript only narrows control
// flow through a never-returning call when it can see the declaration (or an
// explicit annotation on the variable). As an arrow const, callers after `die()`
// still think `url` might be undefined.
function die(msg: string): never {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

/** Stable JSON. Key order must not depend on row order, or an unchanged corpus
 *  produces a different checksum and a spurious git diff every single publish. */
function stableStringify(v: unknown): string {
  return JSON.stringify(v, (_k, val) => {
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      return Object.fromEntries(Object.entries(val as object).sort(([a], [b]) => a.localeCompare(b)));
    }
    return val;
  });
}

const sha256 = (s: string) => createHash('sha256').update(s, 'utf8').digest('hex');

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
//   Domain, Theme, Pack, ExamTask, ExamSeries     (Corpus.domains/…/examSeries)
//     No tables at all. validateCorpus treats the arrays as empty, so a corpus
//     without them is valid and the app sees no catalogue and no exams.
//     Sequenced later by design (the plan scopes tables and data out of this
//     pass). DONE = tables + a read here + the arrays on the emitted Corpus.
//     NOTE for whoever does it: unlike content_items, there is no guard holding
//     these honest. Nothing will tell you the arrays are empty.
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
  'id', 'kind', 'level', 'theme', 'fr', 'en', 'ipa', 'gender', 'example', 'notes',
  'tags', 'drills', 'audio_ref', 'version',
  'skill', 'register', 'can_do', 'grammar_points', 'modality',
]);

/** Columns deliberately NOT shipped, each with the reason it stays behind. */
const WITHHELD_ITEM_COLUMNS = new Set([
  'status',        // publish-time filter; every shipped row is 'published' by definition
  'published_at',  // editorial history, not content
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
    `select id, kind::text as kind, level::text as level, theme, fr, en, ipa,
            gender::text as gender, example, notes, tags, drills::text[] as drills,
            audio_ref, version,
            skill::text as skill, register::text as register, can_do,
            grammar_points, modality::text as modality
       from content_items where status = 'published'`
  );

  const scenarioRows = await pool.query<{ body: Scenario }>(
    `select body from content_units where kind = 'scenario' and status = 'published'`
  );

  const units: Unit[] = unitRows.rows.map((r) => r.body);
  const lessons: Lesson[] = lessonRows.rows.map((r) => r.body);
  const scenarios: Scenario[] = scenarioRows.rows.map((r) => r.body);
  const items: Item[] = itemRows.rows.map((r) => ({
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
    // The spine. Spread-when-present, like ipa/gender above: a null column must
    // become an ABSENT key, not `skill: null`. The app's validators check
    // type-when-present, and `null` is present — it would be rejected, and the
    // snapshot checksum would churn on fields that carry no information.
    ...(r.skill ? { skill: r.skill } : {}),
    ...(r.register ? { register: r.register } : {}),
    ...(r.can_do ? { canDo: r.can_do } : {}),
    ...(r.grammar_points?.length ? { grammarPoints: r.grammar_points } : {}),
    ...(r.modality ? { modality: r.modality } : {}),
  }));

  console.log(
    `\n  published: ${units.length} units · ${lessons.length} lessons · ${items.length} items · ${scenarios.length} scenarios`
  );

  if (!units.length && !lessons.length && !items.length && !scenarios.length) {
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

  const corpus: Corpus = { version, units: prunedUnits, lessons, items, scenarios };

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
  const itemIdSet = new Set(items.map((i) => i.id));
  const practiceless: string[] = [];
  for (const l of lessons) {
    const practices = (l.sections as LessonSection[]).filter((s) => s.type === 'practice');
    const resolvable =
      practices.length > 0 &&
      practices.every((p) => p.itemIds.length > 0 && p.itemIds.every((id) => itemIdSet.has(id)));
    const joined = Array.isArray(l.itemIds) && l.itemIds.length > 0;
    if (!resolvable || !joined) practiceless.push(l.id);
  }
  if (practiceless.length) {
    await pool.end();
    console.error(`\n✖ RULE lesson-has-practice: ${practiceless.length} lesson(s) ship no resolvable practice. NOTHING was published.`);
    console.error(`  ${practiceless.join(', ')}`);
    console.error('  Author real practice sections (scripts/author-practice.ts is the pattern), or unpublish the lesson.\n');
    process.exit(1);
  }
  console.log('  ✓ lesson-has-practice: every lesson feeds the SRS');

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

  // Everything the bundled lessons depend on, plus the core themes. A seed that
  // ships a lesson without its items is a seed that ships a broken lesson.
  const needed = new Set(seedLessons.flatMap(itemsReferencedBy));
  const seedItems = items.filter((i) => needed.has(i.id) || SEED_CUT.themes.includes(i.theme));

  // Scenarios ship in the seed when their level is represented in the seed — by a
  // bundled track OR a bundled unit (a1.01 pulls a1 in). So a fresh, offline
  // install can run Role Play at the levels it actually ships content for.
  const seedLevels = new Set<string>([
    ...SEED_CUT.tracks,
    ...seedUnits.map((u) => unitBand(u.id)).filter((b): b is NonNullable<typeof b> => b !== null),
  ]);
  const seedScenarios = scenarios.filter((s) => seedLevels.has(s.level));

  const seed: Corpus = { version, units: seedUnits, lessons: seedLessons, items: seedItems, scenarios: seedScenarios };

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
    `  ✓ seed valid: ${seedUnits.length} units · ${seedLessons.length} lessons · ${seedItems.length} items · ${seedScenarios.length} scenarios`
  );

  // ── 6. Bytes ───────────────────────────────────────────────────────────
  const snapshotJson = stableStringify(corpus);
  const checksum = sha256(snapshotJson);
  const path = `snapshots/v${version}.json`;
  const counts = {
    units: corpus.units.length,
    lessons: corpus.lessons.length,
    items: corpus.items.length,
    scenarios: corpus.scenarios.length,
  };
  const seedCounts = {
    units: seed.units.length,
    lessons: seed.lessons.length,
    items: seed.items.length,
    scenarios: seed.scenarios.length,
  };

  const manifest = { version, path, checksum, counts, publishedAt: new Date().toISOString() };

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
    console.log(`    units:     ${d('units')}`);
    console.log(`    lessons:   ${d('lessons')}`);
    console.log(`    items:     ${d('items')}`);
    console.log(`    scenarios: ${d('scenarios')}`);
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
    await upload(url, key, path, snapshotJson);
    // The manifest is written LAST and points at a snapshot that is already
    // there. A client that reads the manifest must never be told about bytes
    // that have not finished uploading.
    await upload(url, key, 'manifest.json', JSON.stringify(manifest, null, 2));
    console.log(`\n  ↑ uploaded ${path} and manifest.json`);
  } else {
    console.log('\n  (--no-upload: Storage untouched)');
  }

  // ── 9. Record it. The DB is the version counter. ───────────────────────
  await pool.query(
    `insert into content_snapshots (version, path, checksum, counts, seed_counts)
     values ($1, $2, $3, $4, $5)`,
    [version, path, checksum, JSON.stringify(counts), JSON.stringify(seedCounts)]
  );
  await pool.end();

  // ── 10. The committed mirror ───────────────────────────────────────────
  mkdirSync(dirname(SEED_PATH), { recursive: true });
  writeFileSync(SEED_PATH, JSON.stringify(seed, null, 2) + '\n', 'utf8');
  console.log(`  ✎ ${SEED_PATH}`);

  console.log(`\n✓ published v${version}\n`);
}

async function upload(baseUrl: string, key: string, path: string, body: string) {
  // Send the key in BOTH headers. New-style secret keys (sb_secret_…) are NOT
  // JWTs, so Storage's gateway rejects them in `Authorization: Bearer` with
  // "Invalid Compact JWS" — it validates that header as a JWT. The `apikey`
  // header is where the new format authenticates. Legacy service_role JWTs work
  // in either, so setting both is correct for both key formats.
  const res = await fetch(`${baseUrl}/storage/v1/object/${BUCKET}/${path}`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      'Cache-Control': 'max-age=300',
      'x-upsert': 'true',
    },
    body,
  });
  if (!res.ok) {
    // Throw rather than die(): die() calls process.exit while the pg pool is
    // still open, which on Windows aborts with a native UV_HANDLE_CLOSING panic
    // mid-teardown. main()'s catch reports it cleanly. The snapshot row is
    // inserted AFTER upload, so a failed upload leaves no orphan version.
    throw new Error(`Storage upload failed for ${path}: HTTP ${res.status} ${await res.text()}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
