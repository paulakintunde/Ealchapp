/* a2.14 status, measured. Reports the shipped state of the lesson across
 * Postgres and the seed, and re-checks the two budgets a2.13's device pass
 * measured, which are the ones no other guard can see.
 *
 *     pnpm tsx scripts/_a214_status.ts
 */
import './env';
import { Pool } from 'pg';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import type { Item, Lesson } from '../../ealch-v2/src/content/schema.ts';
import { dicteeMode } from '../../ealch-v2/src/content/dictee.logic.ts';
import { hasPlainNasalFor } from '../../ealch-v2/src/content/density.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));
const SEED = join(here, '../../ealch-v2/src/content/seed.json');

const MISSION_TITLE_MAX = 27;
const LG_DROPS = ['respell', 'en', 'silent'] as const;

async function main() {
  const seed = JSON.parse(readFileSync(SEED, 'utf8')) as {
    version: number; items: Item[]; lessons: Lesson[]; units: { id: string; lessonIds?: string[] }[];
  };
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();

  /* ── 1. POSTGRES AND THE SEED AGREE ────────────────────────────────────── */
  const db = await c.query<{ slug: string; v: number; n: number }>(
    `select slug, (body->>'version')::int v, jsonb_array_length(body->'sections') n
       from content_units where kind='lesson' and slug in ('a2.13.l1','a2.14.l1') order by slug`);
  const rows = await c.query<{ n: string; mx: string }>(
    "select count(*) n, coalesce(max(id),'') mx from content_items where id like 'fr.a2.verbes.%'");
  const mine = await c.query<{ n: string }>(
    "select count(*) n from content_items where id >= 'fr.a2.verbes.381' and id <= 'fr.a2.verbes.410' and status='published'");

  console.log('\n## 1. Postgres and the seed\n');
  for (const r of db.rows) {
    const s = seed.lessons.find((l) => l.id === r.slug);
    const agree = s && s.version === r.v && s.sections.length === r.n;
    console.log(`  ${r.slug}   postgres v${r.v} ${r.n} sections   seed v${s?.version} ${s?.sections.length} sections   ${agree ? 'AGREE' : '!! DISAGREE'}`);
  }
  console.log(`  fr.a2.verbes  ${rows.rows[0].n} rows (max ${rows.rows[0].mx})   a2.14's block .381..410: ${mine.rows[0].n} published`);
  console.log(`  seed          version ${seed.version}, ${seed.items.length} items, ${seed.lessons.length} lessons`);
  const unit = seed.units.find((u) => u.id === 'a2.14');
  console.log(`  unit a2.14    lessonIds ${JSON.stringify(unit?.lessonIds ?? [])}`);

  /* ── 2. THE TWO BUDGETS THAT NO OTHER GUARD CAN SEE ────────────────────── */
  const L = seed.lessons.find((l) => l.id === 'a2.14.l1')!;
  const secs = L.sections as unknown as Record<string, unknown>[];

  console.log('\n## 2. The two budgets a2.13 measured on glass\n');
  let items = 0; let bad = 0; let noNote = 0; let drills = 0;
  for (const s of secs) {
    if (s.type !== 'groupDrill' || s.size === 'xl') continue;
    drills += 1;
    for (const g of ((s.groups ?? []) as { items?: Record<string, unknown>[] }[])) {
      for (const it of (g.items ?? [])) {
        items += 1;
        if (LG_DROPS.some((k) => it[k] !== undefined && it[k] !== '')) bad += 1;
        if (!it.note && !it.ipa) noNote += 1;
      }
    }
  }
  console.log(`  lg groupDrill items       ${items} across ${drills} sections`);
  console.log(`    carrying a dropped field  ${bad}   ${bad === 0 ? 'clean' : '!! these render as bare French'}`);
  console.log(`    with neither note nor ipa ${noNote}   ${noNote === 0 ? 'clean' : '!! only the French renders'}`);
  const over = secs.filter((s) => String(s.title ?? '').length > MISSION_TITLE_MAX);
  console.log(`  titles over ${MISSION_TITLE_MAX} chars        ${over.length}   ${over.length === 0 ? 'clean' : '!! ellipsised on the hub'}`);
  for (const s of over) console.log(`      ${String(s.title).length}  ${s.id}  ${JSON.stringify(s.title)}`);

  /* ── 3. THE CLAIMS THE LESSON RESTS ON, RE-MEASURED ────────────────────── */
  console.log('\n## 3. The lesson\'s own claims, re-measured from the seed\n');
  const authored = seed.items.filter((i) => i.id >= 'fr.a2.verbes.381' && i.id <= 'fr.a2.verbes.410');
  const flagged = authored.filter((r) => hasPlainNasalFor(r.fr, r.respell ?? ''));
  const dict = (secs.find((s) => s.id === 's23-dictation')?.itemIds ?? []) as string[];
  const words = dict.filter((id) => dicteeMode(seed.items.find((i) => i.id === id)!.fr) !== 'letters');
  const blind = authored.find((r) => r.id === 'fr.a2.verbes.401');
  console.log(`  authored rows             ${authored.length}   respell flagged by the checker: ${flagged.length}`);
  console.log(`  dictée targets            ${dict.length}   not in LETTERS mode: ${words.length}`);
  console.log(`  the blind-spot row        ${blind?.respell?.includes('byaⁿ') ? 'byaⁿ intact' : '!! byaⁿ GONE'}`);
  console.log(`  connaître naming form     ${seed.items.find((i) => i.id === 'fr.sons.verbes-essentiels.048')?.respell}`);
  const evid = ['fr.sons.nasales.110', 'fr.sons.voyelles.309']
    .map((id) => seed.items.find((i) => i.id === id))
    .filter((r) => (r?.drills ?? []).includes('flashcard')).length;
  console.log(`  evidence rows with flashcard  ${evid} of 2`);

  c.release();
  await pool.end();
}
main().catch((e) => { console.error(e); process.exit(1); });
