// The plan is the one artefact a human approves before any authoring happens,
// so its invariants have to hold before it is put in front of anyone.
//
// Checked against the WRITTEN plan file rather than by re-running the planner:
// a test that re-derives the answer from the same code proves only that the
// code is deterministic. The file is what gets approved and what the authoring
// scripts will be written against, so the file is what is asserted.
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));

/** Every plan that has been generated, so a new paper is covered without
 *  editing this file. Hardcoding paper 2 meant paper 3's plan shipped
 *  unchecked. */
const PLANS = readdirSync(resolve(HERE, '../exam-blueprints'))
  .filter((f) => /^PLAN-tef-blanc-\d+\.md$/.test(f))
  .sort();

/** Block, topic id and situation, in file order. */
function rows(plan: string): { block: string; id: string; text: string }[] {
  const md = readFileSync(resolve(HERE, '../exam-blueprints', plan), 'utf8');
  const out: { block: string; id: string; text: string }[] = [];
  let block = '';
  for (const line of md.split('\n')) {
    const m = line.match(/^\|\s*(?:`([A-Z-]+)`)?\s*\|\s*\d+\s*\|\s*(TEF-\d+)[^|]*\|[^|]*\|[^|]*\|([^|]*)\|/);
    if (!m) continue;
    if (m[1]) block = m[1];
    out.push({ block, id: m[2]!, text: m[3]!.trim() });
  }
  return out;
}

/** What every OTHER paper has spent, from their ledgers. */
function spentElsewhere(mine: string): Set<string> {
  const out = new Set<string>();
  for (const dir of readdirSync(HERE, { withFileTypes: true })) {
    if (!dir.isDirectory() || !/^tef-blanc\d+$/.test(dir.name) || dir.name === mine) continue;
    const f = resolve(HERE, dir.name, 'common.ts');
    let src: string;
    try { src = readFileSync(f, 'utf8'); } catch { continue; }
    for (const id of (src.split('── Integrity')[0] ?? '').match(/TEF-\d+/g) ?? []) out.add(id);
  }
  return out;
}

/**
 * One topic per DOCUMENT, block by block.
 *
 * CO-A is 4 and not 3. The first version of this table read 3 because it was
 * measured from blanc-01's ledger, and that ledger under-recorded its own block
 * A: the block has four documents (échange 1 to 4) and only three topics were
 * written down, so «Échange 4 · à la boulangerie» stands against no situation.
 * A plan built on the ledger's figure supplies block A with three documents for
 * four questions, which is not discovered until someone sits down to author the
 * fourth.
 */
const EXPECTED: Record<string, number> = {
  'CO-A': 4, 'CO-B': 4, 'CO-C': 2, 'CO-D': 1, 'CO-E': 1, 'CO-F': 1, 'CO-G': 17,
  'CE-A': 7, 'CE-DE': 2, 'CE-F': 2, 'CE-G': 1, 'EE-A': 1, 'EE-B': 1, 'EO-A': 1, 'EO-B': 1,
};

test('a plan exists at all', () => {
  ok(PLANS.length > 0, 'no PLAN-tef-blanc-NN.md has been generated');
});

for (const plan of PLANS) {
  const no = plan.match(/(\d+)\.md$/)![1]!;
  const dir = `tef-blanc${no}`;

  test(`${plan}: parses, and every block is filled to its blueprint count`, () => {
    const r = rows(plan);
    ok(r.length > 0, 'no topic rows could be read out of the plan');
    const got: Record<string, number> = {};
    for (const x of r) got[x.block] = (got[x.block] ?? 0) + 1;
    deepStrictEqual(got, EXPECTED);
    // 46 documents: what a TEF paper actually contains. A plan that came out
    // materially cheaper would mean a block quietly went unfilled.
    strictEqual(r.length, 46);
  });

  test(`${plan}: no topic is reused from another paper`, () => {
    // TOPICS rule 1, and the reason the bank was expanded at all.
    const theirs = spentElsewhere(dir);
    const clash = rows(plan).filter((x) => theirs.has(x.id));
    strictEqual(clash.length, 0, `reused elsewhere: ${clash.map((c) => `${c.id} (${c.block})`).join(', ')}`);
  });

  test(`${plan}: no topic is used twice within the paper`, () => {
    // Rule 2: a situation must not appear twice in one paper wearing two hats.
    const ids = rows(plan).map((x) => x.id);
    const dupes = ids.filter((id, k) => ids.indexOf(id) !== k);
    strictEqual(dupes.length, 0, `used twice: ${[...new Set(dupes)].join(', ')}`);
  });

  test(`${plan}: block G alternates its sub-types, never two of a kind in a row`, () => {
    // The blueprint's composition rule for the G-elastic fill: 17 documents
    // "ordered so no two consecutive items share a document type".
    const g = rows(plan).filter((x) => x.block === 'CO-G');
    strictEqual(g.length, 17);
    const type = (t: string) => t.match(/^\[([^\]]+)\]/)?.[1] ?? '(none)';
    for (let k = 1; k < g.length; k += 1) {
      ok(type(g[k - 1]!.text) !== type(g[k]!.text), `documents ${k} and ${k + 1} are both ${type(g[k]!.text)}`);
    }
    const counts: Record<string, number> = {};
    for (const x of g) counts[type(x.text)] = (counts[type(x.text)] ?? 0) + 1;
    deepStrictEqual(counts, { 'échange': 4, 'répondeur': 3, 'information': 3, 'micro-trottoir': 4, 'consignes': 3 });
  });

  test(`${plan}: leaves enough behind for the papers after it`, () => {
    // A planner that over-drew here would not fail until paper 5 had nothing.
    const md = readFileSync(resolve(HERE, '../exam-blueprints', plan), 'utf8');
    const left = Number(md.match(/\*\*(\d+)\*\* remain/)?.[1] ?? '0');
    const after = 5 - Number(no);
    ok(left >= 46 * after, `${left} situations left cannot supply the ${after} paper(s) after this one`);
  });
}
