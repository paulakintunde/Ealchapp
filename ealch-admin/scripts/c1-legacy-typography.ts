/* Typography fix for the published legacy rows C1 wave 1 reuses but does not
 * own (Paul, C1 wave 1 decision 13): straight apostrophes become ’ in fr,
 * example, notes and prompt. A text edit only: no id, kind, drill, audio or
 * version change (the apostrophe is silent, so no audio re-render).
 *
 *   pnpm tsx scripts/c1-legacy-typography.ts           DRY RUN: prints before / after
 *   pnpm tsx scripts/c1-legacy-typography.ts --apply   writes, in one transaction
 *
 * The ids are the 23 rows wave 1 reused (fixed list, applied at v85) plus every
 * row any C1 lesson references that is neither authored by it nor in seed +
 * packs (computed); rows already clean are left alone. The c1 merge then
 * carries the corrected text into the seed. Run it BEFORE the merge.
 */
import './env';
import { Pool } from 'pg';
import { describeTarget } from './env';

const APPLY = process.argv.includes('--apply');

export const LEGACY_IDS = [
  'fr.b2.journalisme.037', 'fr.b2.journalisme.050', 'fr.b2.litterature.071',
  'fr.c1.discours-dexamen.067', 'fr.c1.discours-dexamen.098', 'fr.c1.discours-dexamen.142',
  'fr.c1.discours-dexamen.150', 'fr.c1.discours-dexamen.161',
  'fr.c1.nuances-et-registres.094', 'fr.c1.nuances-et-registres.107',
  'fr.c1.rhetorique.005', 'fr.c1.rhetorique.016', 'fr.c1.rhetorique.020', 'fr.c1.rhetorique.022',
  'fr.c1.rhetorique.024', 'fr.c1.rhetorique.027', 'fr.c1.rhetorique.032', 'fr.c1.rhetorique.052',
  'fr.c1.rhetorique.092', 'fr.c1.rhetorique.113', 'fr.c1.rhetorique.133', 'fr.c1.rhetorique.139',
  'fr.c1.rhetorique.141',
];
const FIELDS = ['fr', 'example', 'notes', 'prompt'] as const;

/** Every row a C1 lesson references that it does not author and that is not in
 *  seed + packs: the published rows that live only in Postgres. Computed, so
 *  each new wave is covered without editing a list (the wave 1 ids above are
 *  in the seed since v85 and drop out of this set). */
export async function referencedPostgresOnlyIds(): Promise<string[]> {
  const { C1_SLUGS } = await import('./b1-import.logic.ts');
  const { itemsReferencedBy } = await import('./seed-cut.logic.ts');
  const { seedPlusPacks } = await import('../../ealch-v2/src/content/seed-plus-packs.ts');
  const bundled = new Set<string>((seedPlusPacks<{ items: { id: string }[] }>().items ?? []).map((i) => i.id));
  const out = new Set<string>();
  for (const slug of C1_SLUGS) {
    const C = await import(`./data/c1/${slug}-corpus.ts`);
    const L = await import(`./data/c1/${slug}-lesson.ts`);
    const own = new Set<string>(C.ALL_ROWS.map((r: { id: string }) => r.id));
    for (const id of [...(L.LESSON.itemIds ?? []), ...itemsReferencedBy(L.LESSON)]) {
      if (!own.has(id) && !bundled.has(id)) out.add(id);
    }
  }
  return [...out].sort();
}

/** The curly apostrophe the C1 lessons use. A plain space before ? and ! is
 *  the corpus convention (1108 published rows, none with a no-break space), so
 *  question marks are left alone.
 *
 *  Not a blanket replace: some referenced-only rows are bilingual
 *  (`fr.sons.faux-amis.*` notes), and their ENGLISH text scare-quotes the
 *  headword with a straight apostrophe, e.g. `Not 'to realize' (become
 *  aware)`. A blind `'` -> `’` turns the OPENING quote into a second closing
 *  mark (`’to realize’`), which reads as a stray apostrophe, not a quote.
 *  French elisions and English closing quotes/possessives share one glyph
 *  (’, U+2019) either way, so the only case needing a different mark is an
 *  apostrophe that OPENS a quote: preceded by start-of-string, whitespace or
 *  `(`, and followed by a letter. That one becomes ‘ (U+2018); every other
 *  apostrophe, mid-word or closing, becomes ’. */
export function frTypography(s: string): string {
  return s.replace(/(^|[\s(])'(?=\p{L})/gu, '$1‘').replace(/'/g, '’');
}

async function main() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set. Nothing was attempted.');
  console.log(`C1 LEGACY TYPOGRAPHY  ${APPLY ? 'APPLY' : 'DRY RUN, nothing will be written'}`);
  console.log(`  ${describeTarget()}`);
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  try {
    await c.query(APPLY ? 'begin' : 'begin transaction read only');
    const ids = [...new Set([...LEGACY_IDS, ...(await referencedPostgresOnlyIds())])].sort();
    const r = await c.query<Record<string, string | null> & { id: string; status: string }>(
      `select id, status::text as status, fr, example, notes, prompt from content_items where id = any($1::text[]) order by id`,
      [ids]);
    if (r.rows.length !== ids.length) {
      const found = new Set(r.rows.map((x) => x.id));
      throw new Error(`found ${r.rows.length} of ${ids.length} rows (missing: ${ids.filter((i) => !found.has(i)).join(', ')}); nothing written`);
    }
    let changed = 0;
    for (const row of r.rows) {
      if (row.status !== 'published') throw new Error(`${row.id} is ${row.status}, not published; nothing written`);
      const next: Record<string, string | null> = {};
      for (const f of FIELDS) next[f] = typeof row[f] === 'string' ? frTypography(row[f] as string) : row[f];
      const diff = FIELDS.filter((f) => next[f] !== row[f]);
      if (!diff.length) continue;
      changed++;
      for (const f of diff) console.log(`  ~ ${row.id} ${f}: ${row[f]}\n      -> ${next[f]}`);
      if (APPLY) {
        await c.query(`update content_items set fr = $2, example = $3, notes = $4, prompt = $5, updated_at = now() where id = $1`,
          [row.id, next.fr, next.example, next.notes, next.prompt]);
      }
    }
    await c.query('commit');
    console.log(`\n  ${changed} row(s) ${APPLY ? 'updated' : 'would change'} of ${r.rows.length}.${APPLY ? '' : ' DRY RUN COMPLETE, nothing written.'}`);
  } catch (e) {
    await c.query('rollback').catch(() => {});
    throw e;
  } finally {
    c.release();
    await pool.end();
  }
}

// Exact match, not `.includes`: the substring also matches this file's own
// test (c1-legacy-typography.test.ts importing frTypography), which ran
// main() against the live database as an import side effect before this fix.
if (/(^|[\\/])c1-legacy-typography\.(ts|js|mjs|cjs)$/.test(process.argv[1] ?? '')) {
  main().catch((e) => { console.error(e); process.exit(1); });
}
