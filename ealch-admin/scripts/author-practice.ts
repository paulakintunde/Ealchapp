// Close the lesson→corpus join (master plan Phase 2.B — the exit blocker).
//
// The three shipped lessons carry `itemIds: []` and no practice section, so
// lesson study feeds the SRS nothing and the Den's progress bars divide by
// zero. This pass gives each lesson a practice section whose items HONESTLY
// exercise its ground, and populates Lesson.itemIds — the join that makes
// lesson study produce drillable, schedulable work.
//
// "Honestly" is the constraint that shaped the data below: sons.03 practices
// on existing items that actually contain nasal vowels; a1.04 on items that
// actually contain definite articles; and a2.01 (regular verbs) had exactly
// ONE honest item in the whole corpus, so this pass also authors five new a2
// sentences, one per verb family, rather than pointing the lesson at content
// that does not practice what it teaches.
//
// Ships with the `lesson-has-practice` publish gate (publish-content.ts): the
// gate and the re-authoring land together, per the plan, so the gate never
// bricks publishing.
//
// Usage:
//   pnpm tsx scripts/author-practice.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-practice.ts              apply, one transaction
//
// Idempotent: items upsert by id; the practice section replaces any existing
// practice section rather than stacking a duplicate.

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateItem, validateLesson, type Item, type Lesson, type LessonSection } from '../../ealch-v2/src/content/schema.ts';

// ── Five new a2 items: regular verbs in the present, one family at a time ───

const NEW_ITEMS: Item[] = [
  {
    id: 'fr.a2.verbes.001',
    kind: 'sentence',
    level: 'a2',
    theme: 'verbes',
    fr: 'Je parle français.',
    en: 'I speak French.',
    tags: [],
    drills: ['sentence', 'review'],
    audioRef: null,
    version: 1,
    grammarPoints: ['present-er'],
  },
  {
    id: 'fr.a2.verbes.002',
    kind: 'sentence',
    level: 'a2',
    theme: 'verbes',
    fr: 'Tu regardes la télé.',
    en: 'You watch TV.',
    tags: [],
    drills: ['sentence', 'review'],
    audioRef: null,
    version: 1,
    grammarPoints: ['present-er'],
  },
  {
    id: 'fr.a2.verbes.003',
    kind: 'sentence',
    level: 'a2',
    theme: 'verbes',
    fr: 'Nous finissons nos devoirs.',
    en: 'We finish our homework.',
    tags: [],
    drills: ['sentence', 'review'],
    audioRef: null,
    version: 1,
    grammarPoints: ['present-ir'],
  },
  {
    id: 'fr.a2.verbes.004',
    kind: 'sentence',
    level: 'a2',
    theme: 'verbes',
    fr: 'Elle attend le bus.',
    en: 'She waits for the bus.',
    tags: [],
    drills: ['sentence', 'review'],
    audioRef: null,
    version: 1,
    grammarPoints: ['present-re'],
  },
  {
    id: 'fr.a2.verbes.005',
    kind: 'sentence',
    level: 'a2',
    theme: 'verbes',
    fr: 'Ils vendent des fruits au marché.',
    en: 'They sell fruit at the market.',
    tags: [],
    drills: ['sentence', 'review'],
    audioRef: null,
    version: 1,
    grammarPoints: ['present-re'],
  },
];

// ── The join: which items each lesson practices, and why they qualify ───────

const PRACTICE: Record<string, { skill: 'read' | 'write' | 'speak' | 'listen'; itemIds: string[] }> = {
  // Every item here contains a nasal vowel the lesson teaches:
  // Bonjour (on) · un café (un) · une maison (on) · Combien (ien) · bientôt (ien)
  'sons.03.l1': {
    skill: 'speak',
    itemIds: ['fr.a1.cafe.001', 'fr.a1.objets.001', 'fr.a1.objets.002', 'fr.a1.cafe.007', 'fr.a1.cafe.008'],
  },
  // Every item here contains a definite article (or its elision):
  // le soleil · L'addition · à la plage · à la boulangerie
  'a1.04.l1': {
    skill: 'read',
    itemIds: ['fr.a1.objets.004', 'fr.a1.cafe.004', 'fr.a1.dictee.002', 'fr.a1.dictee.003'],
  },
  // One regular present-tense verb per sentence: parler, regarder, finir,
  // attendre, vendre — plus J'achète, the -er spelling-change the lesson's own
  // focus block covers.
  'a2.01.l1': {
    skill: 'write',
    itemIds: [
      'fr.a2.verbes.001',
      'fr.a2.verbes.002',
      'fr.a2.verbes.003',
      'fr.a2.verbes.004',
      'fr.a2.verbes.005',
      'fr.a1.dictee.003',
    ],
  },
};

// ── Apply ───────────────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Practice is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`new items invalid:\n${itemIssues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    const existing = await client.query<{ id: string }>(`select id from content_items where status = 'published'`);
    const itemSet = new Set([...existing.rows.map((r) => r.id), ...NEW_ITEMS.map((i) => i.id)]);

    const lessonRows = await client.query<{ body: Lesson }>(
      `select body from content_units where kind = 'lesson' and status = 'published'`
    );
    const lessons = new Map(lessonRows.rows.map((r) => [r.body.id, r.body]));

    // Every lesson must get a join, and every join must land on a lesson.
    const missing = Object.keys(PRACTICE).filter((id) => !lessons.has(id));
    if (missing.length) die(`PRACTICE names lessons not in the DB: ${missing.join(', ')}`);
    const unears = [...lessons.keys()].filter((id) => !(id in PRACTICE));
    if (unears.length) die(`published lessons PRACTICE does not cover: ${unears.join(', ')} — the gate will reject them`);

    // Build and validate the post-state before writing.
    const next = new Map<string, Lesson>();
    for (const [id, body] of lessons) {
      const p = PRACTICE[id];
      const dangling = p.itemIds.filter((i) => !itemSet.has(i));
      if (dangling.length) die(`${id} practice references unknown items: ${dangling.join(', ')}`);
      const practice: LessonSection = { type: 'practice', title: 'Practice', skill: p.skill, itemIds: p.itemIds };
      // Replace any existing practice section (idempotency); otherwise slot it
      // before the quiz, where working the items precedes being tested on them.
      // The explicit annotation matters: TS 5.5+ infers a type predicate from
      // this filter, narrowing the array to "everything but practice" — which
      // then rejects the very section the splice below inserts.
      const sections: LessonSection[] = body.sections.filter((s) => s.type !== 'practice');
      const quizIx = sections.findIndex((s) => s.type === 'quiz');
      const at = quizIx === -1 ? sections.length : quizIx;
      sections.splice(at, 0, practice);
      next.set(id, { ...body, sections, itemIds: p.itemIds });
    }

    const lessonIssues = [...next.values()].flatMap((l) => validateLesson(l, l.id));
    if (lessonIssues.length) die(`post-state fails validateLesson:\n${lessonIssues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

    console.log(`\n  ${NEW_ITEMS.length} new items · ${next.size} lessons joined:`);
    for (const l of next.values()) {
      console.log(`    ${l.id}  practice[${PRACTICE[l.id].skill}] · ${l.itemIds.length} items`);
    }

    if (DRY_RUN) {
      console.log('\n✓ dry run — post-state valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of NEW_ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, gender, example, notes, tags, drills, audio_ref, version, status, generated_by, grammar_points)
         values ($1,$2,$3,$4,$5,$6,null,null,null,null,$7,$8,null,$9,'published','human',$10)
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           tags=excluded.tags, drills=excluded.drills, version=excluded.version, grammar_points=excluded.grammar_points`,
        [it.id, it.kind, it.level, it.theme, it.fr, it.en, it.tags, it.drills, it.version, it.grammarPoints]
      );
    }
    for (const [id, body] of next) {
      const res = await client.query(
        `update content_units set body = $1::jsonb, updated_at = now()
          where kind = 'lesson' and body->>'id' = $2`,
        [JSON.stringify(body), id]
      );
      if (res.rowCount !== 1) {
        await client.query('rollback');
        die(`update for ${id} touched ${res.rowCount} rows — rolled back, nothing changed`);
      }
    }
    await client.query('commit');
    console.log(`\n✓ join closed: ${NEW_ITEMS.length} items upserted, ${next.size} lessons carry practice. Run content:publish.\n`);
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
