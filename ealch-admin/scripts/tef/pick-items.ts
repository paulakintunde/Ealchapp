// Pick the corpus items a paper's blocks route misses back to.
//
// `targetItemIds` is what makes a wrong answer teach something: the miss is
// decomposed into real published items and those go into the learner's review
// queue. A block whose ids do not exist, or exist at the wrong band, routes
// nothing — the question still scores, but getting it wrong costs the candidate
// the one thing the exam is for.
//
// blanc-01 hand-picked these. That worked for one paper and is exactly the kind
// of typing that goes wrong at four: an id that is a digit out is not a
// compile error, not a validation error, and not visible on device. This reads
// them from the database instead, filtered to `published` and to the bands the
// block actually targets.
//
//   pnpm tsx scripts/tef/pick-items.ts 2     emit the ITEMS block for paper 2
import '../env';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));

/** camelCase key for the generated object, from a theme slug. */
const keyOf = (theme: string) =>
  theme.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase()).replace(/[^A-Za-z0-9]/g, '');

const ORDER = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

/**
 * Themes the plan uses, and the HARDEST band any row demands of each.
 *
 * Not the union of every row's bands, which is what this did first and which
 * silently defeated the whole check: `la-ville` was needed at B2–C1 by a
 * chronique and at A2–B1 by a block G notice, so the union contained a2, the
 * query found A2 items, and the script reported success while the B2/C1 block
 * routed its misses to A2 vocabulary. Taking the hardest band means a theme that
 * cannot serve its most demanding block is reported instead.
 *
 * A theme demanded at two DIFFERENT ranges is reported separately: `ITEMS` is
 * keyed by theme and so cannot route two bands differently, which is a decision
 * for the author rather than something to paper over.
 */
function themesFromPlan(paperNo: number): { need: Map<string, Set<string>>; split: string[] } {
  const md = readFileSync(resolve(HERE, `../../exam-blueprints/PLAN-tef-blanc-0${paperNo}.md`), 'utf8');
  const seen = new Map<string, Set<string>>();
  for (const line of md.split('\n')) {
    const m = line.match(/^\|[^|]*\|[^|]*\|\s*TEF-\d+[^|]*\|([^|]*)\|\s*`([^`]+)`\s*\|/);
    if (!m) continue;
    const range = m[1]!.trim().toLowerCase();
    if (!seen.has(m[2]!)) seen.set(m[2]!, new Set());
    seen.get(m[2]!)!.add(range);
  }

  const need = new Map<string, Set<string>>();
  const split: string[] = [];
  for (const [theme, ranges] of seen) {
    // DISJOINT ranges only. "b1" and "a2–b1" overlap at b1, so one set of items
    // serves both and there is nothing to report; "b2–c1" and "a2–b1" share
    // nothing, and no single set of items can serve both blocks.
    const all = [...ranges].map(bandsOf);
    const common = all.reduce((acc, r) => acc.filter((b) => r.includes(b)));
    if (ranges.size > 1 && common.length === 0) {
      split.push(`${theme}: needed at ${[...ranges].join(' and ')}, which share no band`);
    }
    // The hardest range wins: whichever contains the highest band.
    const top = [...ranges].sort(
      (a, b) => Math.max(...bandsOf(a).map((x) => ORDER.indexOf(x))) - Math.max(...bandsOf(b).map((x) => ORDER.indexOf(x)))
    ).pop()!;
    need.set(theme, new Set(bandsOf(top)));
  }
  return { need, split };
}

/** "a2–b1" spans a2 and b1; "b2" spans only b2. */
function bandsOf(range: string): string[] {
  const parts = range.split(/[–-]/).map((s) => s.trim()).filter(Boolean);
  if (parts.length === 1) return parts;
  const a = ORDER.indexOf(parts[0]!);
  const b = ORDER.indexOf(parts[parts.length - 1]!);
  if (a < 0 || b < 0) return parts;
  return ORDER.slice(Math.min(a, b), Math.max(a, b) + 1);
}

async function main() {
  const paperNo = Number(process.argv[2] ?? '2');
  const { need: themes, split } = themesFromPlan(paperNo);
  if (themes.size === 0) throw new Error(`no themes read out of the plan for paper ${paperNo}`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const c = await pool.connect();
  const lines: string[] = [];
  const thin: string[] = [];
  try {
    for (const [theme, bands] of [...themes].sort((a, b) => a[0].localeCompare(b[0]))) {
      // Prefer items AT the block's band; fall back to the whole theme rather
      // than route nothing, and say which happened.
      const atBand = await c.query<{ id: string }>(
        `select id from content_items
          where status = 'published' and theme = $1 and level::text = any($2::text[])
          order by id limit 5`,
        [theme, [...bands]]
      );
      let rows = atBand.rows;
      let note = '';
      if (rows.length < 5) {
        const any = await c.query<{ id: string }>(
          `select id from content_items where status = 'published' and theme = $1 order by id limit 5`,
          [theme]
        );
        if (any.rows.length > rows.length) {
          rows = any.rows;
          note = `  // only ${atBand.rows.length} at ${[...bands].join('/')}; drawn from the whole theme`;
          thin.push(`${theme}: ${atBand.rows.length} item(s) at ${[...bands].join('/')}`);
        }
      }
      if (rows.length === 0) { thin.push(`${theme}: NOTHING PUBLISHED`); continue; }
      lines.push(`  ${keyOf(theme)}: [${rows.map((r) => `'${r.id}'`).join(', ')}],${note}`);
    }
  } finally {
    c.release();
    await pool.end();
  }

  console.log('export const ITEMS = {');
  for (const l of lines) console.log(l);
  console.log('} as const;\n');

  // NO SILENT CAPS: a theme that could not fill five at its band is reported,
  // not quietly padded.
  // A theme two blocks need at different bands cannot be routed correctly by a
  // theme-keyed table, so it is named rather than resolved silently.
  if (split.length) {
    console.error(`  ${split.length} theme(s) are needed at more than one band; ITEMS cannot route both:`);
    for (const t of split) console.error(`    ${t}`);
  }
  if (thin.length) {
    console.error(`  ${thin.length} theme(s) could not fill five at the block's band:`);
    for (const t of thin) console.error(`    ${t}`);
  } else {
    console.error(`  every one of the ${lines.length} themes filled five at its own band`);
  }
}

main().catch((e) => { console.error(String(e)); process.exit(1); });
