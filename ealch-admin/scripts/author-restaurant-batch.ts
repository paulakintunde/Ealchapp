// a2.07.l1 « Au restaurant » — apply the corpus, the lesson and the unit row to
// Postgres. Trail seq 24, the head of the A2 situations band.
//
//   pnpm content:restaurant --dry     guards only, nothing written
//   pnpm content:restaurant           the real apply, in one transaction
//
// DO NOT CONFUSE THIS WITH `content:nourriture`, which already exists and is
// a1.23's. `nourriture` is a phantom theme here: 0 published, 0 in the seed and
// no themeMeta entry. This build authors into `au-restaurant` per collation §5.
//
// The guards below are the ones that would have caught this build's own
// mistakes. Three of them fired during authoring and are kept for the next
// person:
//
//   * the intra-theme duplicate guard caught « Ce n'est pas ce que j'ai
//     commandé », which is already published at fr.a1.au-restaurant.193;
//   * the dictée-drill guard caught fr.a2.au-restaurant.147 sitting in
//     s20-write without the `dictation` drill;
//   * the frozen-block guard is the one seven other units depend on.
import './env';
import { ALL_ROWS, ROWS, QC_ROWS, UNIT, THEME, QC_THEME, REPAIR_IDS, REPAIR_DRILLS, RESTAURANT_WORDS, ID_FIRST, ID_LAST, THEME_ROWS_BEFORE, SERVER_VOICE_FLOOR, IMPORTED } from './data/restaurant-corpus.ts';
import { LESSON, SECTIONS, ITEM_IDS, DECK_TRANCHE } from './data/restaurant-lesson.ts';
import { validateLesson, quizQuestions } from '../../ealch-v2/src/content/schema.ts';
import { validateDensity } from '../../ealch-v2/src/content/density.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';
import { assertReachable } from './lib/reachability.ts';

const DRY_RUN = process.argv.includes('--dry');
const REAPPLY = process.argv.includes('--reapply');
const die = (m: string): never => { console.error(`\n  STOP: ${m}\n`); process.exit(1); };

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[/[\]()«».,!?;:]/g, '').replace(/[-·’']/g, '').replace(/\s+/g, '').trim();

/* ─── Guards that need no database ─────────────────────────────────────── */

function offlineGuards() {
  // 1. THE FROZEN BLOCK. Seven other units cite these by itemId.
  const six = ROWS.filter((r) => r.bucket === 'repair');
  if (six.length !== 6) die(`the repair block holds ${six.length} rows, and the contract is exactly six`);
  const wantIds = REPAIR_IDS.join(',');
  if (six.map((r) => r.id).join(',') !== wantIds) die(`the repair ids drifted from the frozen block ${wantIds}`);
  const nums = six.map((r) => Number(r.id.slice(-3)));
  if (!nums.every((n, i) => i === 0 || n === nums[i - 1] + 1)) die('the six repair ids are not a contiguous run');
  if (nums[0] !== ID_FIRST) die(`the repair block must sit at the HEAD of the id block (.${ID_FIRST}), not .${nums[0]}`);
  six.forEach((r, i) => {
    if (r.rung !== i + 1) die(`${r.id} is rung ${r.rung} at position ${i + 1}: the face-cost order is part of the contract`);
    if (r.theme !== THEME) die(`${r.id} is in ${r.theme}; every repair row must be in ${THEME}`);
    for (const d of REPAIR_DRILLS) {
      if (!(r.drills ?? []).includes(d)) die(`${r.id} is missing the ${d} drill, which a citing unit will reach for`);
    }
    const leak = RESTAURANT_WORDS.filter((w) => new RegExp(w, 'i').test(r.fr));
    if (leak.length) die(`${r.id} « ${r.fr} » carries the restaurant word(s) ${leak.join(', ')}; every rung must be domain-neutral`);
  });

  // 2. No U+203F anywhere in a respelling. It draws as a low underscore on a
  //    Pixel 6 and has already hit shipped sons.10 content.
  for (const r of ALL_ROWS) {
    if (/‿/.test(r.respell ?? '')) die(`${r.id} carries a U+203F tie in its respelling`);
  }

  // 3. The respelling is CORRECT. Phrased that way deliberately: the checker
  //    has four measured blind spots (Corrections §14.1 plus this build's §10),
  //    so a quiet checker is evidence and not proof.
  const flagged = ALL_ROWS.filter((r) => hasPlainNasalFor(r.fr, r.respell ?? ''));
  if (flagged.length) die(`respelling(s) closing a nasal with a plain n or m: ${flagged.map((r) => `${r.id} ${r.respell}`).join(', ')}`);

  // 4. The band's voice floor. Collation §1.5.
  const srv = ROWS.filter((r) => r.voice === 'server').length;
  const pct = srv / ROWS.length;
  if (pct < SERVER_VOICE_FLOOR) die(`only ${(pct * 100).toFixed(1)}% of authored rows are in the server's voice, and the band floor is ${SERVER_VOICE_FLOOR * 100}%`);

  // 5. Ids inside the ledger block, and no internal fold collisions.
  for (const r of ROWS) {
    const n = Number(r.id.slice(-3));
    if (n < ID_FIRST || n > ID_LAST) die(`${r.id} is outside the ledger block .${ID_FIRST}-.${ID_LAST}`);
  }
  const seen = new Map<string, string>();
  for (const r of ALL_ROWS) {
    const k = `${r.theme}::${fold(r.fr)}`;
    if (seen.has(k)) die(`${r.id} « ${r.fr} » folds onto ${seen.get(k)} inside ${r.theme}: the flashcard hub would serve one card twice`);
    seen.set(k, r.id);
  }

  // 6. Quebec rows never land in au-restaurant, and never exceed two.
  if (QC_ROWS.length > 2) die(`${QC_ROWS.length} Quebec rows; collation §C3 allows at most two`);
  for (const r of QC_ROWS) if (r.theme !== QC_THEME) die(`${r.id} is a Quebec row and must live in ${QC_THEME}`);

  // 7. The lesson itself.
  const issues = validateLesson(LESSON as never) as unknown[];
  if (Array.isArray(issues) && issues.length) die(`validateLesson: ${issues.length} issue(s)\n${issues.slice(0, 8).map((i) => `      ${JSON.stringify(i)}`).join('\n')}`);

  /* PART A: EVERY AUTHORED ROW MUST BE REACHABLE.
   *
   * Doctrine §E required this all along and nothing enforced it, so a2.29
   * shipped fr.a2.hebergement.086 past 33 green guards. It surfaced three weeks
   * later, for an unrelated reason: a publish regenerated seed.json, the cut
   * dropped the unreferenced row, and a seed-based block count went red. */
  assertReachable(LESSON as never, ALL_ROWS, die);
  const dens = validateDensity(LESSON as never) as unknown;
  const dIssues = Array.isArray(dens) ? dens : ((dens as { issues?: unknown[] }).issues ?? []);
  if (dIssues.length) die(`validateDensity: ${dIssues.length} issue(s)\n${dIssues.slice(0, 8).map((i) => `      ${JSON.stringify(i)}`).join('\n')}`);

  if (SECTIONS.filter((s) => s.type === 'quiz').length !== 1) die('exactly one quiz section, always: a second is silently never rendered');
  const practice = SECTIONS.filter((s) => s.type === 'practice');
  if (!practice.length) die('lesson-contract.test.ts:505 fails a teaching lesson with no practice section');
  for (const p of practice) {
    if (!((p as { itemIds?: string[] }).itemIds ?? []).length) die('a practice section with an empty itemIds fails the publish gate');
    if ((p as { skill?: string }).skill === 'write') die("practice skill 'write' draws no writing surface");
  }
  if (!ITEM_IDS.length) die('Lesson.itemIds is empty, so the lesson releases no SRS cards');
  if (DECK_TRANCHE.length !== (LESSON.acts ?? []).length) die(`deckTranche has ${DECK_TRANCHE.length} arrays and the lesson has ${(LESSON.acts ?? []).length} acts`);

  // 8. Every quiz question carries a why; every listenChoose can speak
  //    something other than its own answer; every errorSpot shows its text.
  const qs = quizQuestions(SECTIONS.find((s) => s.type === 'quiz')!);
  for (const q of qs) {
    if (!q.why) die(`quiz question « ${q.q} » has no why`);
    if (q.format === 'listenChoose' && !(q as { say?: string }).say && !(q as { audio?: { clip?: string } }).audio?.clip) {
      die(`listenChoose « ${q.q} » carries neither say nor audio.clip, so the card would speak the answer aloud`);
    }
    if (q.format === 'errorSpot' && !(q as { prompt?: string }).prompt) {
      die(`errorSpot « ${q.q} » has no prompt, so the learner is asked to fix a phrase that never appears`);
    }
  }

  // 9. House copy rules, and the boundaries this unit must not cross.
  const allText = JSON.stringify(LESSON) + JSON.stringify(ALL_ROWS);
  if (/—/.test(allText)) die('an em dash reached an authored string');
  if (/honest/i.test(allText)) die('"honest" reached an authored string (the substring, so "dishonest" is caught too)');
  if (/pourriez-vous/i.test(allText)) die('pourriez-vous is reserved for a2.29 and the a2.13 amendment has not been applied');
  console.log('  offline guards: all passed');
}

/* ─── The apply ────────────────────────────────────────────────────────── */

async function main() {
  console.log(`\n  a2.07.l1 « ${UNIT.sub} » -> ${THEME}${DRY_RUN ? '   [DRY RUN]' : ''}\n`);
  offlineGuards();

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    const before = await c.query<{ n: string }>(
      "select count(*)::text n from content_items where theme=$1 and status='published'", [THEME]);
    const nBefore = Number(before.rows[0].n);
    console.log(`  ${THEME}: ${nBefore} published rows before (the build measured ${THEME_ROWS_BEFORE})`);

    // The id block must still be free. A concurrent build can land BELOW your
    // top without a highest-id check seeing it, so this checks the whole block
    // rather than the maximum.
    //
    // --reapply exempts THIS BUILD'S OWN ids from that check and from the fold
    // sweep below. It is for re-running after an in-build correction (this
    // build used it twice: once when the money guard caught a figure in .179,
    // once when three imported rows turned out to carry only `dictation`). It
    // never exempts anybody else's ids, so a concurrent build landing inside
    // the block is still caught.
    const mine = new Set(ALL_ROWS.map((r) => r.id));
    const taken = await c.query<{ id: string }>(
      'select id from content_items where id = any($1::text[])', [[...mine]]);
    if (taken.rows.length && !REAPPLY) {
      die(`${taken.rows.length} of this build's ids are already in Postgres. If they are yours and you are correcting them, re-run with --reapply. Otherwise a concurrent build has taken part of the block.\n      ${taken.rows.slice(0, 6).map((t) => t.id).join(', ')}${taken.rows.length > 6 ? ' ...' : ''}`);
    }
    if (taken.rows.length) console.log(`  --reapply: updating ${taken.rows.length} rows this build already owns`);

    // No intra-theme fold collision against what is already published, ignoring
    // this build's own rows so a re-apply does not collide with itself.
    const pub = await c.query<{ id: string; fr: string; theme: string }>(
      "select id, fr, theme from content_items where status='published' and theme = any($1::text[])", [[THEME, QC_THEME]]);
    const byFold = new Map<string, string>();
    for (const r of pub.rows) { if (!mine.has(r.id)) byFold.set(`${r.theme}::${fold(r.fr)}`, r.id); }
    for (const r of ALL_ROWS) {
      const hit = byFold.get(`${r.theme}::${fold(r.fr)}`);
      if (hit) die(`${r.id} « ${r.fr} » already exists in ${r.theme} as ${hit}. Import it, do not author it.`);
    }

    // Every imported id is published and therefore reachable.
    const wanted = [...new Set(Object.values(IMPORTED).flat())];
    const found = await c.query<{ id: string; status: string }>(
      'select id, status from content_items where id = any($1::text[])', [wanted]);
    const okIds = new Set(found.rows.filter((r) => r.status === 'published').map((r) => r.id));
    const missing = wanted.filter((w) => !okIds.has(w));
    if (missing.length) die(`imported id(s) not published: ${missing.join(', ')}`);
    console.log(`  imports: ${wanted.length} verified published`);

    // Every dictée item carries the dictation drill, and every practice item
    // carries voiceflash. CHECKED AGAINST POSTGRES, never the seed.
    const need = async (sectionType: string, drill: string) => {
      const sec = SECTIONS.filter((s) => s.type === sectionType);
      const ids = [...new Set(sec.flatMap((s) => (s as { itemIds?: string[] }).itemIds ?? []))];
      if (!ids.length) return;
      const local = new Map(ALL_ROWS.map((r) => [r.id, r.drills ?? []]));
      const remoteIds = ids.filter((i) => !local.has(i));
      const remote = remoteIds.length
        ? await c.query<{ id: string; drills: string[] }>('select id, drills from content_items where id = any($1::text[])', [remoteIds])
        : { rows: [] as Array<{ id: string; drills: string[] }> };
      const remoteMap = new Map(remote.rows.map((r) => [r.id, r.drills ?? []]));
      for (const id of ids) {
        const d = local.get(id) ?? remoteMap.get(id) ?? [];
        // `drills` is a Postgres enum array and can arrive as the raw literal
        // `{flashcard,review}`. A .includes() on the STRING is a substring test
        // that lies, so normalise to a real array first.
        const arr = Array.isArray(d) ? d : String(d).replace(/[{}]/g, '').split(',').filter(Boolean);
        if (!arr.includes(drill)) die(`${sectionType} names ${id}, which does not carry the ${drill} drill`);
      }
      console.log(`  ${sectionType}: all ${ids.length} items carry ${drill}`);
    };
    await need('dictation', 'dictation');
    await need('practice', 'voiceflash');

    const unitRow = await c.query<{ body: Record<string, unknown> }>(
      "select body from content_units where kind='curriculum_unit' and body->>'id'=$1", [UNIT.id]);
    if (!unitRow.rows.length) die(`${UNIT.id} is not in content_units`);
    const unit = unitRow.rows[0].body as { canDo?: string; themes?: string[]; lessonIds?: string[] };
    if (unit.canDo !== UNIT.canDo) die(`canDo drift.\n      db:    ${unit.canDo}\n      build: ${UNIT.canDo}`);
    if ((unit.themes ?? []).includes('nourriture')) {
      console.log('  NOTE: the unit row still carries the phantom theme `nourriture`.');
      console.log('        Band blocking step 2 (the eight-unit spine themes edit) has NOT landed.');
      console.log('        No id in this build lands in `nourriture`; the rows go to `au-restaurant`.');
    }

    if (DRY_RUN) { console.log('\n  DRY RUN: every guard passed, nothing written.\n'); return; }

    await c.query('begin');
    try {
      for (const r of ALL_ROWS) {
        await c.query(
          `insert into content_items (id, kind, level, theme, fr, en, ipa, respell, notes, tags, drills, version, status)
           values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,'published')
           on conflict (id) do update set kind=excluded.kind, level=excluded.level, theme=excluded.theme,
             fr=excluded.fr, en=excluded.en, ipa=excluded.ipa, respell=excluded.respell,
             notes=excluded.notes, tags=excluded.tags, drills=excluded.drills, version=excluded.version,
             status='published'`,
          [r.id, r.kind, r.level, r.theme, r.fr, r.en, r.ipa ?? null, r.respell ?? null,
            r.notes ?? null, r.tags ?? [], r.drills ?? [], r.version ?? 1]);
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

    // Read back. The COUNT, not the maximum: the maximum has been useless since
    // a2.10.l2 took .461..500.
    const after = await c.query<{ n: string }>(
      "select count(*)::text n from content_items where theme=$1 and status='published'", [THEME]);
    const nAfter = Number(after.rows[0].n);
    console.log(`\n  ${THEME}: ${nBefore} -> ${nAfter} published rows (+${nAfter - nBefore}, authored ${ROWS.length})`);

    const rb = await c.query<{ id: string; fr: string; drills: string[] }>(
      'select id, fr, drills from content_items where id = any($1::text[]) order by id', [[...REPAIR_IDS]]);
    console.log('\n  THE FROZEN REPAIR BLOCK, as it now stands in Postgres:');
    for (const r of rb.rows) console.log(`    ${r.id}  ${r.fr}   ${JSON.stringify(r.drills)}`);
    if (rb.rows.length !== 6) die(`read back ${rb.rows.length} repair rows, expected 6`);
    console.log('\n  Applied. Next: pnpm tsx scripts/merge-restaurant-into-seed.ts\n');
  } finally {
    c.release();
    await pool.end();
  }
}

main();
