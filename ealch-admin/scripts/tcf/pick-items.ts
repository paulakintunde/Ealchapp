// Pick the corpus items a TCF paper routes its misses back to.
//
// `targetItemIds` is what makes a wrong answer teach something: the miss is
// decomposed into real published items and those enter the learner's review
// queue. A document whose ids do not exist, or exist at the wrong band, routes
// nothing — the question still scores, and getting it wrong costs the candidate
// the one thing the exam is for.
//
// ── Keyed by theme AND band, unlike TEF ────────────────────────────────────
//
// The TEF picker keys ITEMS by theme alone and takes the HARDEST band any block
// demands, because a TEF theme can appear in blocks spanning different ranges
// and one key cannot serve two. That was the right call there and it is the
// wrong one here.
//
// On TCF every situation sits at exactly ONE band — that is what the bank's
// sections mean — so `marche` used at A1 and `marche` used at B1 are two
// different routing needs, and collapsing them to the harder one would send an
// A1 candidate who missed an A1 question to B1 vocabulary. Remediation has to
// land at or below the failure, never above it.
//
// ── Where the corpus runs out ──────────────────────────────────────────────
//
// There are no published C2 items at all, and 913 C1 items across five themes.
// So the top of the ramp cannot route at its own band, and this FALLS BACK down
// the ramp rather than emitting an empty array — a candidate who misses a C2
// item is not served by nothing, and is not served by C2 material they cannot
// yet use either. Every fallback is reported, because a silent one would hide
// the corpus gap that causes it.
//
//   pnpm tsx scripts/tcf/pick-items.ts 1     emit the ITEMS block for paper 1
import '../env';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseBank, plan, type Band } from './plan-paper.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const BANK = resolve(HERE, '../../exam-blueprints/TOPICS-tcf-canada.md');

const ORDER: Band[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/** camelCase key for the generated object, from a theme slug. */
const keyOf = (theme: string) =>
  theme.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase()).replace(/[^A-Za-z0-9]/g, '');

/** How many ids to route per document. Enough to be a review session, few
 *  enough that one missed question does not flood the queue. */
const PER_DOC = 6;

async function main() {
  const no = Number(process.argv.slice(2).find((a) => /^\d+$/.test(a)));
  if (!no) throw new Error('give a paper number, e.g. `pick-items.ts 1`');

  // The plan is the source of truth for what this paper needs. Re-derived here
  // rather than parsed back out of a plan file, so the two cannot drift.
  //
  // Papers 1..N-1 are REPLAYED to build the spent set. Planning paper N against
  // an empty set is what this did first, and because the draw is deterministic
  // every paper came back with paper 1's plan and therefore paper 1's ITEMS —
  // five papers routing the same corpus items, which no test would have caught
  // because each file was individually valid.
  const bank = parseBank(readFileSync(BANK, 'utf8'));
  const taken = new Set<string>();
  let p = plan(bank, 1, taken);
  for (let i = 1; i <= no; i += 1) {
    p = plan(bank, i, taken);
    if (i < no) {
      for (const r of [...p.co, ...p.ce]) taken.add(r.situation.id);
      for (const o of p.open) taken.add(o.situation.id);
    }
  }
  if (p.short.length) {
    throw new Error(`the bank cannot supply paper ${no}; run plan-paper.ts first:\n  ${p.short.join('\n  ')}`);
  }

  // Every (theme, band) pair the paper actually routes at.
  const need = new Map<string, Set<Band>>();
  for (const r of [...p.co, ...p.ce]) {
    if (!need.has(r.situation.theme)) need.set(r.situation.theme, new Set());
    need.get(r.situation.theme)!.add(r.band);
  }

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const out = new Map<string, Map<Band, string[]>>();
  const fellBack: string[] = [];
  const empty: string[] = [];

  try {
    for (const [theme, bands] of [...need].sort()) {
      for (const band of [...bands].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b))) {
        // Walk DOWN the ramp from the wanted band until something published
        // exists. At or below the failure, never above it.
        let got: string[] = [];
        let landed: Band = band;
        for (let i = ORDER.indexOf(band); i >= 0; i -= 1) {
          const at = ORDER[i]!;
          const res = await pool.query<{ id: string }>(
            `select id from content_items
              where theme = $1 and level = $2::text::content_level and status = 'published'
              order by id limit $3`,
            [theme, at.toLowerCase(), PER_DOC]
          );
          if (res.rows.length > 0) {
            got = res.rows.map((r) => r.id);
            landed = at;
            break;
          }
        }
        if (got.length === 0) {
          empty.push(`${theme} @ ${band}: nothing published at or below this band`);
          continue;
        }
        if (landed !== band) fellBack.push(`${theme}: wanted ${band}, routed ${landed}`);
        if (!out.has(theme)) out.set(theme, new Map());
        out.get(theme)!.set(band, got);
      }
    }
  } finally {
    await pool.end();
  }

  const body = [...out]
    .sort()
    .map(([theme, byBand]) => {
      const inner = [...byBand]
        .sort((a, b) => ORDER.indexOf(a[0]) - ORDER.indexOf(b[0]))
        .map(([band, ids]) => `    ${band.toLowerCase()}: [${ids.map((i) => `'${i}'`).join(', ')}],`)
        .join('\n');
      return `  ${keyOf(theme)}: {\n${inner}\n  },`;
    })
    .join('\n');

  console.log(`
/** Corpus items this paper routes misses back to, by theme and BAND.
 *
 *  Generated by scripts/tcf/pick-items.ts — do not hand-edit, re-run it.
 *  Keyed by band because a TCF document sits at exactly one, and remediation
 *  must land at or below the failure rather than above it. */
export const ITEMS = {
${body}
} as const;
`);

  if (fellBack.length) {
    console.error(`\n  ${fellBack.length} routing(s) fell back down the ramp (the corpus has nothing at the wanted band):`);
    for (const f of fellBack) console.error(`    ${f}`);
  }
  if (empty.length) {
    console.error(`\n  ✗ ${empty.length} theme(s) route NOTHING — a miss there teaches the learner nothing:`);
    for (const e of empty) console.error(`    ${e}`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(String(e));
  process.exit(1);
});
