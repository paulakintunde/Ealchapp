// RE-RECORD a1.14's IMPORTED MANIFEST AGAINST POSTGRES.
//
// `adjectifs-imported.ts` is documented as a RECORDED READ of the database, and
// its batch refuses to run when the record and the database disagree. Six of
// its 44 rows have drifted, all in the same direction: Postgres holds MORE
// drills, and a respelling where the record has none, because later builds
// enriched those rows after this manifest was taken.
//
// ── WHY NOT JUST REGENERATE ────────────────────────────────────────────────
//
// `_adjectifs_manifest.ts` classifies a row IMPORTED only when it is absent
// from the seed. All 51 are in the seed now, so a faithful regeneration reports
// 0 IMPORTED and would empty an array the lesson expects to hold 44 rows. The
// classification has moved on; the ROWS have not. So this updates the two
// fields that drifted and leaves the array's shape alone.
//
// Only `drills` and `respell` are touched, and only where they differ. `fr`,
// `en`, `kind` and `theme` are compared and a mismatch is refused rather than
// rewritten: those are what the row IS, and a change there means somebody
// re-authored a row this lesson imports, which is not a manifest problem.
//
//   npx tsx scripts/_a114_manifest_rerecord.ts          report
//   npx tsx scripts/_a114_manifest_rerecord.ts --write  update the six

import './env';
import { Pool } from 'pg';
import { readFileSync, writeFileSync } from 'node:fs';
import { IMPORTED } from './data/adjectifs-imported.ts';
import { RESPELL_REPAIRS } from './data/adjectifs-corpus.ts';

const WRITE = process.argv.includes('--write');
const FILE = 'scripts/data/adjectifs-imported.ts';

type Row = { id: string; fr: string; en: string; kind: string; theme: string; drills: string[]; respell?: string | null };

(async () => {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const c = await pool.connect();
  const rows = IMPORTED as unknown as Row[];
  const db = await c.query<{
    id: string; fr: string; en: string; kind: string; theme: string;
    drills: string | string[]; respell: string | null; status: string;
  }>(
    'select id, fr, en, kind, theme, drills, respell, status from content_items where id = any($1)',
    [rows.map((r) => r.id)],
  );
  c.release();
  await pool.end();

  const drillsOf = (d: string | string[]): string[] =>
    Array.isArray(d) ? [...d] : String(d).replace(/[{}"]/g, '').split(',').filter(Boolean);

  const refuse: string[] = [];
  const moved: Array<{ id: string; field: 'drills' | 'respell'; from: string; to: string }> = [];

  for (const r of rows) {
    const row = db.rows.find((x) => x.id === r.id);
    if (!row) { refuse.push(`${r.id} is not in this database at all`); continue; }
    if (row.status !== 'published') refuse.push(`${r.id} is ${row.status}, not published`);
    // What the row IS. A mismatch here is a re-authoring, not a drifted record.
    for (const f of ['fr', 'en', 'kind', 'theme'] as const) {
      if (row[f] !== r[f]) refuse.push(`${r.id}: ${f} differs — manifest ${JSON.stringify(r[f])}, database ${JSON.stringify(row[f])}`);
    }
    const dbDrills = drillsOf(row.drills).sort();
    if (dbDrills.join() !== [...(r.drills ?? [])].sort().join()) {
      moved.push({ id: r.id, field: 'drills', from: JSON.stringify(r.drills ?? []), to: JSON.stringify(dbDrills) });
    }
    // A ROW THIS LESSON REPAIRS KEEPS ITS RECORDED "BEFORE". a1.14 rewrites the
    // respelling of three `sons.` rows itself, and its batch exempts them from
    // the respell check for that reason: the manifest holds what the database
    // said BEFORE the repair, and re-recording it would erase the evidence the
    // repair is asserted against. Mirrored here rather than re-derived.
    const repairing = (RESPELL_REPAIRS as unknown as Array<{ id: string }>).some((x) => x.id === r.id);
    if (!repairing && (row.respell ?? null) !== (r.respell ?? null)) {
      moved.push({ id: r.id, field: 'respell', from: JSON.stringify(r.respell ?? null), to: JSON.stringify(row.respell) });
    }
  }

  if (refuse.length) {
    console.error('✗ refusing to re-record; these are not drifted records:');
    for (const m of refuse) console.error(`    ${m}`);
    process.exit(2);
  }
  if (!moved.length) { console.log('every IMPORTED row matches Postgres'); process.exit(0); }

  for (const m of moved) console.log(`  ${m.id}  ${m.field}  ${m.from}  ->  ${m.to}`);
  const ids = [...new Set(moved.map((m) => m.id))];
  console.log(`\n${moved.length} field(s) across ${ids.length} row(s)`);
  if (!WRITE) { console.log('(dry run; pass --write)'); process.exit(0); }

  let src = readFileSync(FILE, 'utf8');
  for (const m of moved) {
    // Anchored to the row's own object literal, so a value shared with another
    // row cannot be rewritten in the wrong place.
    const esc = m.id.replace(/\./g, '\\.');
    const rx = new RegExp(`(id: "${esc}",[^\\n]*?)${m.field}: ${m.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
    if (rx.test(src)) {
      src = src.replace(rx, (_all, head: string) => `${head}${m.field}: ${m.to}`);
      continue;
    }
    // ABSENT, NOT null. A row that had no respelling in the database simply has
    // no `respell` key, so re-recording one means INSERTING the field rather
    // than replacing it. Placed after `drills`, which every row carries, so the
    // shape stays uniform down the file.
    const ins = new RegExp(`(id: "${esc}",[^\\n]*?drills: \\[[^\\]]*\\])`);
    if (!ins.test(src)) { console.error(`✗ could not locate ${m.id}'s ${m.field}`); process.exit(3); }
    src = src.replace(ins, (_all, head: string) => `${head}, ${m.field}: ${m.to}`);
  }
  writeFileSync(FILE, src, 'utf8');
  console.log(`\nre-recorded in ${FILE}`);
})();
