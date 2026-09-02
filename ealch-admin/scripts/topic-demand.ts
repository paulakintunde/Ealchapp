// What the topic bank must actually contain to build papers 2..N.
//
// "We need 160 more situations" is the wrong unit. A situation is consumed by
// ONE block, and blocks are wildly unequal: CO-G is seventeen single-document
// items in one block while CO-D is one. So the bank has to satisfy a demand
// PER `Suits` CODE, and a bank that is large in total can still be unbuildable
// because one code is starved.
//
// Reads the shipped TOPICS file and EVERY paper ledger, and reports the deficit
// per code for a given number of further papers.
//
//   pnpm tsx scripts/topic-demand.ts [papers=4]
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));

/** Per-paper block appetite. Measured from blanc-01, but CORRECTED against its
 *  actual documents rather than its ledger: block A has four documents and the
 *  ledger recorded three, so a table read straight off the ledger under-supplies
 *  block A by one document per paper. */
const PER_PAPER: Record<string, number> = {
  'CO-A': 4, 'CO-B': 4, 'CO-C': 2, 'CO-D': 1, 'CO-E': 1, 'CO-F': 1, 'CO-G': 17,
  'CE-A': 7, 'CE-DE': 2, 'CE-F': 2, 'CE-G': 1,
  'EE-A': 1, 'EE-B': 1, 'EO-A': 1, 'EO-B': 1,
};

type Row = { id: string; bands: string; theme: string; suits: string[] };

function bank(): Row[] {
  const md = readFileSync(resolve(HERE, '../exam-blueprints/TOPICS-tef-canada.md'), 'utf8');
  const out: Row[] = [];
  for (const line of md.split('\n')) {
    const m = line.match(/^\|\s*(TEF-\d+)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|/);
    if (!m) continue;
    out.push({
      id: m[1]!,
      bands: m[3]!.trim(),
      theme: m[4]!.replace(/`/g, '').trim(),
      suits: m[5]!.split(',').map((s) => s.trim()).filter(Boolean),
    });
  }
  return out;
}

/**
 * Ids already spent, by EVERY paper that exists.
 *
 * This read only `tef-blanc01` until blanc-02 landed, at which point it
 * under-reported the spend by 45 situations and would have told the planner
 * papers 3 to 5 were better supplied than they are. Same discovery rule as
 * `plan-paper.ts`, so a new paper directory counts without editing anything.
 */
function consumed(): Set<string> {
  const out = new Set<string>();
  for (const dir of readdirSync(HERE, { withFileTypes: true })) {
    if (!dir.isDirectory() || !/^tef-blanc\d+$/.test(dir.name)) continue;
    const f = resolve(HERE, dir.name, 'common.ts');
    if (!existsSync(f)) continue;
    const src = readFileSync(f, 'utf8');
    for (const id of (src.split('── Integrity')[0] ?? '').match(/TEF-\d+/g) ?? []) out.add(id);
  }
  return out;
}

function main() {
  const papers = Number(process.argv[2] ?? '4');
  const rows = bank();
  const used = consumed();
  const free = rows.filter((r) => !used.has(r.id));

  console.log(`\n  bank ${rows.length} · spent by existing papers ${used.size} · free ${free.length}`);
  console.log(`  demand for ${papers} further paper(s)\n`);

  const codes = Object.keys(PER_PAPER);
  const width = Math.max(...codes.map((c) => c.length));
  let worst = 0;
  let totalNeed = 0;

  console.log(`  ${'code'.padEnd(width)}  need   free  short   (free = untouched situations tagged for that code)`);
  for (const code of codes) {
    const need = PER_PAPER[code]! * papers;
    // A situation tagged for several codes can only ever be spent once, so this
    // per-code figure is an UPPER bound on availability, not a guarantee.
    const avail = free.filter((r) => r.suits.includes(code)).length;
    const short = Math.max(0, need - avail);
    totalNeed += need;
    worst = Math.max(worst, short);
    const flag = short > 0 ? `  <- author ${short} more` : '';
    console.log(`  ${code.padEnd(width)}  ${String(need).padStart(4)}  ${String(avail).padStart(5)}  ${String(short).padStart(5)}${flag}`);
  }

  console.log(`\n  ${totalNeed} situations needed in total, ${free.length} free.`);
  // The per-code shortfalls cannot simply be added: one authored situation can
  // carry several Suits codes and relieve more than one row. But it can only be
  // SPENT once, so the total is the binding constraint and the per-code rows
  // say what those new situations have to be usable for.
  console.log(`  Total shortfall: ${Math.max(0, totalNeed - free.length)} situations.`);
  console.log('  Per-code rows are upper bounds (a situation tagged twice can still only be used once),');
  console.log('  so treat them as "what the new situations must be able to serve", not as a sum.\n');
}

main();
