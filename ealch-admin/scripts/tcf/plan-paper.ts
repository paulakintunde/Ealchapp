// Draw a TCF paper plan from the topic bank, deterministically.
//
// ── Why this is not scripts/plan-paper.ts with different constants ─────────
//
// TEF is a paper of BLOCKS: seven named exercise families, each with its own
// band range, and the planner's hard problem is scarcity — allocate the block
// with five candidates before the block with fifty takes them.
//
// TCF is a paper of a SLOPE. There are no families. 39 questions run A1 to C2
// in order, and three things follow that the TEF planner has no concept of:
//
//   1. A situation's band is WHERE IT SITS IN THE BANK, not a column. TCF rows
//      are `ID | Situation | Theme | Suits` — no bands field — because on this
//      instrument the band is a position, not a property.
//   2. Order is content. Item 4 is A2 because it is item 4, so the plan has to
//      lay out positions, not just pick a set.
//   3. Documents carry MORE THAN ONE item as the slope rises, which is why 47
//      topics yield 78 questions. The item counts per document are declared
//      here and checked against the band quota, so a mistyped table cannot
//      quietly produce a 37-question épreuve.
//
// The one thing it shares with TEF: NO REUSE across papers, read from what the
// other papers actually authored rather than from what a ledger claims. Paper 1
// of TEF had a hand-typed ledger and both its figures were wrong.
//
//   pnpm tsx scripts/tcf/plan-paper.ts 1          plan paper 1, print it
//   pnpm tsx scripts/tcf/plan-paper.ts 1 --write  also write the plan file
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const BANK = resolve(HERE, '../../exam-blueprints/TOPICS-tcf-canada.md');

export type Situation = { id: string; text: string; theme: string; suits: string[]; band: string };

export const BANDS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
export type Band = (typeof BANDS)[number];

/**
 * How many items each document carries, per band, per épreuve.
 *
 * The blueprint gives items per band (3/6/10/10/7/3) and the TOPICS file gives
 * topics to draw (~6/12/14/8/5/2 across both épreuves). Those two only
 * reconcile if documents carry more than one item as the slope rises, and the
 * shape of that is a decision, not an inference — so it is written down here as
 * an explicit list per band and asserted against the quota at startup.
 *
 * Read `[3, 3, 2, 2]` as "four documents, carrying three, three, two and two
 * items". Length is the topic cost; the sum is the item quota.
 */
export const DOC_SHAPE: Record<'CO' | 'CE', Record<Band, number[]>> = {
  CO: {
    A1: [1, 1, 1],
    A2: [1, 1, 1, 1, 1, 1],
    B1: [2, 2, 2, 1, 1, 1, 1],
    B2: [3, 3, 2, 2],
    C1: [3, 2, 2],
    C2: [3],
  },
  CE: {
    A1: [1, 1, 1],
    A2: [1, 1, 1, 1, 1, 1],
    B1: [2, 2, 2, 1, 1, 1, 1],
    B2: [3, 3, 2, 2],
    C1: [4, 3],
    C2: [3],
  },
};

/** Items per band per épreuve, from BLUEPRINT-tcf-canada. The ramp itself. */
export const ITEM_QUOTA: Record<Band, number> = { A1: 3, A2: 6, B1: 10, B2: 10, C1: 7, C2: 3 };

/** The open épreuves, which draw topics too. Three tasks each (STANDARD §5, §6). */
export const OPEN_SUITS = ['EE-T1', 'EE-T2', 'EE-T3', 'EO-T1', 'EO-T2', 'EO-T3'] as const;

/** Reads the bank. Band comes from the `## XX —` heading a row sits under,
 *  because a TCF row has no bands column — see the note at the top. */
export function parseBank(md: string): Situation[] {
  const out: Situation[] = [];
  let band: Band | null = null;
  for (const line of md.split('\n')) {
    const h = /^## (A1|A2|B1|B2|C1|C2) /.exec(line);
    if (h) {
      band = h[1] as Band;
      continue;
    }
    const m = /^\|\s*(TCF-\d+)\s*\|\s*(.+?)\s*\|\s*`([a-z0-9-]+)`\s*\|\s*(.+?)\s*\|/.exec(line);
    if (!m || !band) continue;
    out.push({
      id: m[1]!,
      text: m[2]!,
      theme: m[3]!,
      suits: m[4]!.split(',').map((s) => s.trim()).filter(Boolean),
      band,
    });
  }
  return out;
}

/** Every situation id an OTHER TCF paper has already authored. Read from the
 *  papers themselves; a ledger that is typed rather than derived goes wrong.
 *
 *  EXPORTED because pick-items.ts must use the SAME source. It used to replay
 *  the bank instead, on the argument that re-deriving cannot drift. It can:
 *  blanc-01 authored TCF-07 and TCF-17, which a fresh replay of the bank does
 *  not draw, so the two disagreed by two situations and paper 2 came out with a
 *  theme that had no corpus routing at all. Nothing failed. */
export function spent(exclude: string): Map<string, string> {
  const out = new Map<string, string>();
  const dir = resolve(HERE, '..');
  for (const d of readdirSync(dir, { withFileTypes: true })) {
    if (!d.isDirectory() || !/^tcf-blanc\d+$/.test(d.name)) continue;
    if (d.name === exclude) continue;
    const f = resolve(dir, d.name, 'common.ts');
    if (!existsSync(f)) continue;
    const head = readFileSync(f, 'utf8').split('── Integrity')[0] ?? '';
    for (const id of head.match(/TCF-\d+/g) ?? []) out.set(id, d.name);
  }
  return out;
}

/** Which papers have actually been authored, by number. */
export function authoredPapers(): Set<number> {
  const out = new Set<number>();
  const dir = resolve(HERE, '..');
  for (const d of readdirSync(dir, { withFileTypes: true })) {
    const m = /^tcf-blanc(\d+)$/.exec(d.name);
    if (!d.isDirectory() || !m) continue;
    if (existsSync(resolve(dir, d.name, 'common.ts'))) out.add(Number(m[1]));
  }
  return out;
}

/**
 * The plan for ONE paper, with the ledger every earlier paper contributes.
 *
 * This is the whole rule in one place, and it needs to be, because it was in
 * two and they disagreed. An AUTHORED paper contributes what it actually
 * authored, read from its own source. An UNAUTHORED one contributes what it
 * would draw, which has to be simulated because nothing has written it down
 * yet. Miss the second half and every unauthored paper draws the same
 * situations: that is how planning 2, 3, 4 and 5 in one sitting first returned
 * four identical papers, and how pick-items.ts later derived paper 4 and paper
 * 5 identically while the written plans were correctly distinct.
 */
export function ledgerFor(bank: Situation[], no: number): Map<string, string> {
  const dirName = (n: number) => `tcf-blanc${String(n).padStart(2, '0')}`;
  const authored = authoredPapers();
  const out = spent(dirName(no));
  for (let i = 1; i < no; i += 1) {
    if (authored.has(i)) continue; // already counted, from what it really used
    // ONCE. Calling plan() again after adding to the ledger returns a different
    // paper, so co, ce and open must all come from the same call.
    const earlier = plan(bank, i, new Set(out.keys()));
    for (const r of [...earlier.co, ...earlier.ce, ...earlier.open]) {
      if (!out.has(r.situation.id)) out.set(r.situation.id, `${dirName(i)} (not yet written)`);
    }
  }
  return out;
}

export function planFor(bank: Situation[], no: number): Plan {
  return plan(bank, no, new Set(ledgerFor(bank, no).keys()));
}

/** Deterministic pick: lowest id first, so two runs of the same plan agree and
 *  a diff between papers is a diff in what was AVAILABLE, not in luck. */
function draw(pool: Situation[], n: number, taken: Set<string>): Situation[] {
  const got: Situation[] = [];
  for (const s of pool) {
    if (got.length === n) break;
    if (taken.has(s.id)) continue;
    got.push(s);
    taken.add(s.id);
  }
  return got;
}

export type Plan = {
  paperNo: number;
  co: { band: Band; items: number; situation: Situation }[];
  ce: { band: Band; items: number; situation: Situation }[];
  open: { suit: string; situation: Situation }[];
  short: string[];
};

export function plan(bank: Situation[], paperNo: number, already: Set<string>): Plan {
  const taken = new Set(already);
  const short: string[] = [];
  const co: Plan['co'] = [];
  const ce: Plan['ce'] = [];

  for (const epreuve of ['CO', 'CE'] as const) {
    for (const band of BANDS) {
      const shape = DOC_SHAPE[epreuve][band];
      // The pool: right band, and tagged for this épreuve. Suits is a
      // suggestion in the file's own words, but a suggestion worth following:
      // a situation tagged CE only is a text, and reading it aloud makes a
      // listening document nobody designed.
      const pool = bank.filter((s) => s.band === band && s.suits.includes(epreuve));
      const got = draw(pool, shape.length, taken);
      if (got.length < shape.length) {
        short.push(`${epreuve} ${band}: needs ${shape.length} topic(s), pool has ${got.length}`);
      }
      got.forEach((s, i) => {
        const row = { band, items: shape[i]!, situation: s };
        if (epreuve === 'CO') co.push(row);
        else ce.push(row);
      });
    }
  }

  const open: Plan['open'] = [];
  for (const suit of OPEN_SUITS) {
    // The open tasks sit at the top of the range: an EE-T3 comparing two
    // viewpoints is not an A1 task. B1 and above, hardest first.
    const pool = bank.filter((s) => s.suits.includes(suit) && ['B1', 'B2', 'C1', 'C2'].includes(s.band));
    const got = draw(pool, 1, taken);
    if (got.length === 0) short.push(`${suit}: no unspent situation tagged for it at B1+`);
    else open.push({ suit, situation: got[0]! });
  }

  return { paperNo, co, ce, open, short };
}

function render(p: Plan, spentBy: Map<string, string>): string {
  const line = (r: { band: Band; items: number; situation: Situation }) =>
    `| ${r.situation.id} | ${r.band} | ${r.items} | ${r.situation.text} | \`${r.situation.theme}\` |`;
  const sum = (rows: { items: number }[]) => rows.reduce((n, r) => n + r.items, 0);

  return `# PLAN — TCF Canada Examen ${p.paperNo}

Generated by \`scripts/tcf/plan-paper.ts\`. Do not hand-edit: re-run it.

TCF is a slope, so this plan is a LAYOUT, not a shopping list. The order of the
rows is the order of the questions, and the band column is what makes item 4
an A2 item. Documents carry more than one question as the slope rises.

**Spent by earlier papers:** ${spentBy.size} situation(s).

## Compréhension orale — ${sum(p.co)} questions across ${p.co.length} documents

| ID | Band | Items | Situation | Theme |
|---|---|---|---|---|
${p.co.map(line).join('\n')}

## Compréhension écrite — ${sum(p.ce)} questions across ${p.ce.length} documents

| ID | Band | Items | Situation | Theme |
|---|---|---|---|---|
${p.ce.map(line).join('\n')}

## Expression écrite et orale — 6 tasks

| Suit | ID | Situation | Theme |
|---|---|---|---|
${p.open.map((o) => `| ${o.suit} | ${o.situation.id} | ${o.situation.text} | \`${o.situation.theme}\` |`).join('\n')}

**Topics spent by this paper:** ${p.co.length + p.ce.length + p.open.length}
${p.short.length ? `\n## ⚠ The bank could not supply\n\n${p.short.map((s) => `- ${s}`).join('\n')}\n` : ''}`;
}

function main() {
  const argv = process.argv.slice(2);
  const numbers = argv.filter((a) => /^\d+$/.test(a)).map(Number);
  if (!numbers.length) throw new Error('give a paper number, e.g. `plan-paper.ts 1`, or several: `2 3 4 5`');

  // The declared document shapes must reconcile with the blueprint's ramp, or
  // the plan is internally consistent and still wrong.
  for (const epreuve of ['CO', 'CE'] as const) {
    for (const band of BANDS) {
      const got = DOC_SHAPE[epreuve][band].reduce((a, b) => a + b, 0);
      if (got !== ITEM_QUOTA[band]) {
        throw new Error(`DOC_SHAPE.${epreuve}.${band} sums to ${got}, blueprint says ${ITEM_QUOTA[band]}`);
      }
    }
  }

  const bank = parseBank(readFileSync(BANK, 'utf8'));

  // ONE RULE, in planFor(), which every caller shares.
  //
  // This loop used to carry its own accumulator, and pick-items.ts derived the
  // same thing a third way. All three disagreed. An authored paper contributes
  // what it really used; an unauthored one contributes what it would draw, and
  // simulating the second half is what stops four papers coming back identical.
  // Both failures happened: plan-paper without the accumulator returned four
  // copies of one paper, and pick-items without it derived papers 4 and 5
  // identically while the written plans were correctly distinct.
  let failed = false;

  for (const no of numbers) {
    const p = planFor(bank, no);
    // The ledger, not just the authored part of it. A situation withheld by a
    // paper nobody has written yet is still withheld, and reporting only the
    // authored count would understate what this plan had to avoid.
    const spentBy = ledgerFor(bank, no);
    const md = render(p, spentBy);

    if (argv.includes('--write')) {
      const out = resolve(HERE, `../../exam-blueprints/PLAN-tcf-blanc-${String(no).padStart(2, '0')}.md`);
      writeFileSync(out, md, 'utf8');
      console.log(`  wrote ${out}`);
    } else {
      console.log(md);
    }
    if (p.short.length) failed = true;
  }
  if (failed) process.exit(1);
}

// Importable for tests; only plans when run directly.
if (process.argv[1] && process.argv[1].endsWith('plan-paper.ts') && process.argv[1].includes('tcf')) {
  main();
}
