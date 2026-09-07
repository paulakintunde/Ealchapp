// a2.30.l1 « Le travail & les métiers » — apply to Postgres.
//
//   pnpm content:travail-metiers --dry     guards only, writes nothing
//   pnpm content:travail-metiers           applies
//
// POSTGRES FIRST, SEED SECOND. Run merge-travail-metiers-into-seed.ts after
// this, or the lesson exists in the database and nowhere the app can read it.
//
// DO NOT run `pnpm content:verbes`. The verbes batch is a landmine.
// DO NOT run author-full-curriculum-spine.ts. A naive re-run would revert 74 of
// 75 unit titles, which is exactly what spine-drift.test.ts exists to catch —
// and a2.30's `themes: ['metiers']` is ALREADY CORRECT in that file.
// DO NOT run content:publish from here. It is blocked upstream by sons.09.l1
// and is not part of a lesson build.
import './env';
import { ALL_ROWS, UNIT, THEME, LESSON_ID, M, ID_FIRST, ID_LAST,
  IMPORT_IDS, REPAIR_IDS, REPAIR_FR, LADDER_IDS, DICTEE_IDS,
  A2_31_RESERVED, MINTED_FEMININE_IDS, MINTED_FEMININE_ANCHORS,
  OTHER_VOICE_FLOOR, BANNED_SUBSTRINGS, FORBIDDEN_CLAIMS } from './data/travail-metiers-corpus.ts';
import { LESSON, ITEM_IDS } from './data/travail-metiers-lesson.ts';
import { validateLesson } from '../../ealch-v2/src/content/schema.ts';
import { validateDensity, formatDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { assertReachable } from './lib/reachability.ts';

const DRY_RUN = process.argv.includes('--dry');
const REAPPLY = process.argv.includes('--reapply');
const die: (m: string) => never = (m) => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

/** `drills` is a Postgres enum array and node-postgres can hand it back as the
 *  RAW LITERAL `{flashcard,review}`. A `.includes()` on that string is a
 *  substring test that lies. */
const toArray = (d: unknown): string[] =>
  Array.isArray(d) ? d as string[] : String(d ?? '').replace(/[{}"]/g, '').split(',').filter(Boolean);

const strs = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strs(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strs(x, out));
  return out;
};

async function main() {
  /* ── OFFLINE GUARDS. These need no database and they are the cheap ones. ── */

  const schemaIssues = validateLesson(LESSON, LESSON_ID);
  if (schemaIssues.length) die(`validateLesson:\n${schemaIssues.map((i) => `    ${i.path}: ${i.message}`).join('\n')}`);

  const density = validateDensity(LESSON, new Set(ITEM_IDS));
  if (density.length) die(`validateDensity:\n${formatDensity(density)}`);

  /* PART A: EVERY AUTHORED ROW MUST BE REACHABLE.
   *
   * Doctrine §E required this all along and nothing enforced it, so a2.29
   * shipped fr.a2.hebergement.086 past 33 green guards. It surfaced three weeks
   * later, for an unrelated reason: a publish regenerated seed.json, the cut
   * dropped the unreferenced row, and a seed-based block count went red. */
  assertReachable(LESSON, ALL_ROWS, die);

  const ids = ALL_ROWS.map((r) => r.id);
  if (new Set(ids).size !== ids.length) die('a duplicate id in the authored rows');
  const nums = ids.map((i) => Number(i.split('.').pop()));
  if (Math.min(...nums) < ID_FIRST || Math.max(...nums) > ID_LAST) {
    die(`an authored id sits outside the requested block ${M(ID_FIRST)}..${M(ID_LAST)}`);
  }

  // The 14-word sentence budget. The four moves JOINED run past it, which is
  // why the joined answer is lesson text and never a row.
  for (const r of ALL_ROWS) {
    if (r.kind === 'sentence' && r.fr.split(/\s+/).length > 14) die(`${r.id} runs past the 14-word sentence budget`);
  }

  // The band's other-voice mandate (collation §1.5), measured not asserted.
  const other = ALL_ROWS.filter((r) => r.voice === 'other').length;
  const ratio = other / ALL_ROWS.length;
  if (ratio < OTHER_VOICE_FLOOR) die(`only ${(ratio * 100).toFixed(1)}% of authored rows are in the other party's voice`);

  // a2.07 owns the repair move. ZERO authored here.
  const authoredFr = new Set(ALL_ROWS.map((r) => r.fr));
  for (const fr of REPAIR_FR) if (authoredFr.has(fr)) die(`this build authored one of a2.07's frozen repair rows: "${fr}"`);

  // Pairs only. No orphan feminines.
  const importable = new Set(IMPORT_IDS);
  MINTED_FEMININE_IDS.forEach((id, i) => {
    if (!ids.includes(id)) die(`${id} is listed as minted and was not authored`);
    if (!importable.has(MINTED_FEMININE_ANCHORS[i])) die(`${id} has no imported masculine anchor`);
  });

  // a2.31's ground, and the house rules, over every learner-facing string.
  const ALL_TEXT = [...strs(LESSON.sections), ...strs(LESSON.sheets), ...strs(LESSON.terms),
    LESSON.intro, ...strs(LESSON.overview), ...ALL_ROWS.map((r) => `${r.fr} ${r.en}`)].join('\n');
  for (const w of A2_31_RESERVED) {
    if (new RegExp(`\\b${w}\\b`, 'i').test(ALL_TEXT)) die(`authors a2.31's ground: "${w}"`);
  }
  for (const b of BANNED_SUBSTRINGS) if (ALL_TEXT.toLowerCase().includes(b)) die(`authored copy contains "${b}"`);
  for (const c of FORBIDDEN_CLAIMS) {
    if (ALL_TEXT.toLowerCase().includes(c.toLowerCase())) die(`claims something the app cannot deliver: "${c}"`);
  }
  if (/—/.test(ALL_TEXT)) die('an em dash in authored copy');

  console.log(`\n  offline guards passed: ${ALL_ROWS.length} rows, ${LESSON.sections.length} sections, `
    + `${(ratio * 100).toFixed(1)}% in the other party's voice`);

  /* ── DATABASE GUARDS ────────────────────────────────────────────────────── */

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const count = async (theme: string, level?: string) => Number((await c.query<{ n: string }>(
      `select count(*)::text as n from content_items where theme=$1 and status='published'${level ? ' and level=$2' : ''}`,
      level ? [theme, level] : [theme])).rows[0].n);

    const beforeTheme = await count(THEME);
    const beforeA2 = await count(THEME, 'a2');
    console.log(`  ${THEME} before: ${beforeTheme} published (${beforeA2} at a2)`);

    // THE ID BLOCK. A highest-id check cannot see a concurrent lesson landing
    // BELOW the top of the range — a1.19 and a1.20 collided exactly that way.
    // Check the WHOLE BLOCK, not the maximum.
    const mine = new Set(ids);
    const taken = await c.query<{ id: string }>('select id from content_items where id = any($1::text[])', [[...mine]]);
    if (taken.rowCount && !REAPPLY) {
      die(`${taken.rowCount} of this build's ids already exist: ${taken.rows.map((r) => r.id).slice(0, 8).join(', ')}. `
        + 'Another lesson landed in the block. Re-measure and move, or pass --reapply if this is your own re-run.');
    }

    // Intra-theme duplicate `fr`. The flashcard hub keys on `fr` PER THEME and
    // serves two rows sharing one as a single card, twice.
    const clash = await c.query<{ id: string; fr: string }>(
      `select id, fr from content_items where theme=$1 and status='published' and fr = any($2::text[])`,
      [THEME, ALL_ROWS.map((r) => r.fr)]);
    if (clash.rowCount && !REAPPLY) {
      die(`${clash.rowCount} authored fr string(s) already exist in ${THEME}: ${clash.rows.map((r) => `${r.id} "${r.fr}"`).slice(0, 5).join(', ')}`);
    }

    // EVERY IMPORT MUST EXIST AND BE PUBLISHED. Collation §1.3: a published row
    // is REACHABLE and must be imported by itemId, never re-authored.
    const found = await c.query<{ id: string; status: string; fr: string }>(
      'select id, status, fr from content_items where id = any($1::text[])', [IMPORT_IDS]);
    const missing = IMPORT_IDS.filter((i) => !found.rows.some((r) => r.id === i));
    if (missing.length) die(`${missing.length} imported id(s) are not in Postgres: ${missing.join(', ')}`);
    const unpub = found.rows.filter((r) => r.status !== 'published');
    if (unpub.length) die(`${unpub.length} imported id(s) are not published: ${unpub.map((r) => r.id).join(', ')}`);

    // a2.07's SIX FROZEN ROWS, verified string by string. The list is frozen at
    // publication and seven other units depend on it.
    const rb = await c.query<{ id: string; fr: string }>('select id, fr from content_items where id = any($1::text[])', [[...REPAIR_IDS]]);
    if (rb.rowCount !== 6) die(`a2.07's repair block reads back ${rb.rowCount} rows, expected 6. a2.07 may not be applied.`);
    REPAIR_IDS.forEach((id, i) => {
      const row = rb.rows.find((r) => r.id === id);
      if (row?.fr !== REPAIR_FR[i]) die(`a2.07's frozen row ${id} reads "${row?.fr}", expected "${REPAIR_FR[i]}". The block moved.`);
    });

    // a2.29's ladder rows.
    const lb = await c.query<{ id: string }>('select id from content_items where id = any($1::text[]) and status=\'published\'', [[...LADDER_IDS]]);
    if (lb.rowCount !== LADDER_IDS.length) die(`a2.29's ladder reads back ${lb.rowCount} of ${LADDER_IDS.length} rows. a2.29 may not be applied.`);

    // THE DICTÉE, CHECKED AGAINST POSTGRES AND NOT THE SEED. Every dictée item
    // must carry the `dictation` drill or the section silently drills nothing.
    for (const id of DICTEE_IDS) {
      const row = ALL_ROWS.find((r) => r.id === id);
      if (!row) die(`${id} is a dictée id and was not authored`);
      if (!toArray(row.drills).includes('dictation')) die(`${id} is a dictée id and does not carry the dictation drill`);
    }

    // The unit row, read from Postgres rather than assumed.
    const unitRow = await c.query<{ body: Record<string, unknown> }>(
      "select body from content_units where kind='curriculum_unit' and body->>'id'=$1", [UNIT.id]);
    if (unitRow.rowCount !== 1) die(`${UNIT.id} is not in content_units`);
    const unit = unitRow.rows[0].body as { id: string; themes?: string[]; lessonIds?: string[] };
    // THIS UNIT NEEDS NO RE-MAP. If a re-map diff arrives that changes it, it is
    // wrong, and this is where that gets caught.
    if (!(unit.themes ?? []).includes('metiers')) die("the unit row does not carry 'metiers'; something re-mapped a theme that was already correct");

    console.log(`  database guards passed: ${IMPORT_IDS.length} imports published, a2.07 and a2.29 verified`);

    if (DRY_RUN) { console.log('\n  DRY RUN: every guard passed, nothing written.\n'); return; }

    /* ── THE WRITE ────────────────────────────────────────────────────────── */

    await c.query('begin');
    try {
      for (const r of ALL_ROWS) {
        await c.query(
          `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, gender, notes, tags, drills, version, status)
           values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,'published')
           on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
             fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell,
             gender=excluded.gender, notes=excluded.notes, tags=excluded.tags, drills=excluded.drills,
             version=excluded.version, status='published'`,
          [r.id, r.kind, r.level, r.theme, r.fr, r.en, r.ipa ?? null, r.respell ?? null,
            (r as { gender?: string }).gender ?? null, r.notes ?? null, r.tags ?? [], r.drills ?? [], r.version ?? 1]);
      }
      await c.query(
        `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
         values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
         on conflict (slug) do update set title=excluded.title, level=excluded.level,
           body=excluded.body, status='published', updated_at=now()`,
        [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]);
      const nextUnit = { ...unit, lessonIds: [...new Set([...(unit.lessonIds ?? []), LESSON.id])] };
      const uu = await c.query(
        `update content_units set body=$1::jsonb, updated_at=now()
          where kind='curriculum_unit' and body->>'id'=$2`, [JSON.stringify(nextUnit), UNIT.id]);
      if (uu.rowCount !== 1) throw new Error(`the unit update touched ${uu.rowCount} rows, expected 1`);
      await c.query('commit');
    } catch (e) {
      await c.query('rollback');
      die(`rolled back: ${(e as Error).message}`);
    }

    // THE ROW COUNT AFTER, NOT THE MAXIMUM ID.
    const afterTheme = await count(THEME);
    const afterA2 = await count(THEME, 'a2');
    console.log(`\n  ${THEME}: ${beforeTheme} -> ${afterTheme} (+${afterTheme - beforeTheme}, authored ${ALL_ROWS.length})`);
    console.log(`  ${THEME} a2 slice: ${beforeA2} -> ${afterA2} (+${afterA2 - beforeA2})`);
    if (afterTheme - beforeTheme !== ALL_ROWS.length && !REAPPLY) {
      die(`the theme moved by ${afterTheme - beforeTheme} and this build authored ${ALL_ROWS.length}. Something else landed during the apply.`);
    }
    console.log(`  ${LESSON.id} written, and ${UNIT.id} now claims it`);
    console.log('\n  NEXT: pnpm tsx scripts/merge-travail-metiers-into-seed.ts\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
