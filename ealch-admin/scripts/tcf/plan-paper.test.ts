// Two papers must not draw the same topics.
//
// This is the ramp's version of the answer-key failure. Five TEF papers shipped
// sharing one answer key across all 80 questions, because each was checked
// alone and nothing ever compared two of them. The planner had the same hole in
// a different place: `spent()` derives its ledger from AUTHORED papers, which is
// the right source and the reason it cannot drift, but a paper contributes
// nothing until it is authored. Planning 2, 3, 4 and 5 in one sitting therefore
// handed back four IDENTICAL papers, 53 of 53 situations shared, each one
// internally valid and short of nothing.
//
// The accumulator in main() fixes it. These tests are what says so, and they
// work on `plan()` directly rather than on the CLI so the property is stated
// once and checked in both directions.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  BANDS,
  DOC_SHAPE,
  ITEM_QUOTA,
  OPEN_SUITS,
  ledgerFor,
  parseBank,
  plan,
  planFor,
  type Plan,
} from './plan-paper.ts';
import { existsSync } from 'node:fs';

const HERE = dirname(fileURLToPath(import.meta.url));
const BANK = parseBank(
  readFileSync(resolve(HERE, '../../exam-blueprints/TOPICS-tcf-canada.md'), 'utf8')
);

const idsOf = (p: Plan): string[] => [...p.co, ...p.ce, ...p.open].map((r) => r.situation.id);

/** Plan `count` papers the way a build of the whole pack does: each one seeing
 *  everything the earlier ones took. */
function pack(count: number): Plan[] {
  const taken = new Set<string>();
  const out: Plan[] = [];
  for (let n = 1; n <= count; n += 1) {
    const p = plan(BANK, n, new Set(taken));
    for (const id of idsOf(p)) taken.add(id);
    out.push(p);
  }
  return out;
}

test('the declared document shapes reconcile with the blueprint ramp', () => {
  // A mistyped shape would produce a 37-question épreuve that looked fine.
  for (const epreuve of ['CO', 'CE'] as const) {
    for (const band of BANDS) {
      const got = DOC_SHAPE[epreuve][band].reduce((a, b) => a + b, 0);
      strictEqual(got, ITEM_QUOTA[band], `${epreuve}.${band} sums to ${got}`);
    }
  }
});

test('one paper spends 53 topics, not the 47 the demand table implies', () => {
  // The bank's own arithmetic was wrong twice, both times by counting only the
  // comprehension épreuves and forgetting that the six open tasks draw too.
  const [p1] = pack(1);
  const ids = idsOf(p1!);
  strictEqual(new Set(ids).size, ids.length, 'a paper reuses a topic within itself');
  strictEqual(ids.length, 53);
  strictEqual(p1!.open.length, OPEN_SUITS.length, 'an open task went unplanned');
});

test('no two papers in a pack of five share a single topic', () => {
  // The failure this file exists for. Checked pairwise, because a total-distinct
  // count over all five would also pass if two papers swapped one topic each.
  const papers = pack(5);
  for (let i = 0; i < papers.length; i += 1) {
    for (let j = i + 1; j < papers.length; j += 1) {
      const a = new Set(idsOf(papers[i]!));
      const shared = idsOf(papers[j]!).filter((id) => a.has(id));
      deepStrictEqual(shared, [], `papers ${i + 1} and ${j + 1} share ${shared.length} topic(s)`);
    }
  }
});

test('planning without the accumulator reproduces the defect', () => {
  // The guard has to be shown FIRING, and this is what the planner did before:
  // every paper after the first sees only the authored ones, so they all draw
  // the same next 53. If this ever stops being true the test above is no longer
  // testing anything.
  const spentByBlanc01 = new Set(idsOf(plan(BANK, 1, new Set())));
  const two = idsOf(plan(BANK, 2, new Set(spentByBlanc01)));
  const three = idsOf(plan(BANK, 3, new Set(spentByBlanc01)));
  deepStrictEqual(two, three, 'two papers planned against the same ledger must collide');
});

test('the bank can actually supply five papers', () => {
  // Counting the bank does not answer this: situations are tagged for CO, CE or
  // an open suit, so a bank with enough ROWS can still run out inside one band.
  // Only running the draw settles it, which is why this simulates rather than
  // counts.
  const papers = pack(5);
  for (const p of papers) {
    deepStrictEqual(p.short, [], `paper ${p.paperNo} is short: ${p.short.join(' · ')}`);
  }
  const used = new Set(papers.flatMap(idsOf));
  strictEqual(used.size, 265, 'five papers spend 53 topics each');
  ok(BANK.length >= used.size, `bank holds ${BANK.length}, five papers need ${used.size}`);
});

test('a sixth paper is where the bank runs out, and it says so', () => {
  // Worth pinning: the bank was expanded to 282 for a five-paper pack and has
  // 17 spare. That is enough and it is not enough for a sixth, so whoever asks
  // for one should meet a named shortage rather than a silent reuse.
  const taken = new Set(pack(5).flatMap(idsOf));
  const sixth = plan(BANK, 6, taken);
  ok(sixth.short.length > 0, 'a sixth paper drew a full set from a bank that cannot supply one');
});

/* ── planFor: one accumulation rule, shared ────────────────────────────────
 *
 * The rule was implemented twice and the copies disagreed, twice over.
 *
 *   plan-paper's own loop, without an accumulator, returned four identical
 *   papers for 2-5.
 *
 *   pick-items replayed the bank instead of reading authored papers, which
 *   misses that blanc-01 authored TCF-07 and TCF-17 that a replay does not
 *   draw. Paper 2 then contained a `marche` document whose theme never reached
 *   the routing query, so ITEMS came out with no key for it and nothing failed.
 *
 * planFor is now the only implementation. These tests describe the property
 * rather than the call, so a third copy would have to break them.
 */

test('the ledger accounts for EVERY earlier paper, authored or not', () => {
  // The invariant, not the state. A first version of this asserted that paper
  // 4's ledger contained a paper labelled "not yet written", which was true
  // while two papers existed and false the moment a third was authored — a test
  // pinned to a transient fact, which fails for the right thing happening.
  //
  // What must always hold: a paper's ledger names every paper before it, as an
  // authored source or as a simulated one. Missing either half is what made
  // four papers come back identical.
  for (const n of [2, 3, 4, 5, 6]) {
    const sources = new Set(ledgerFor(BANK, n).values());
    for (let earlier = 1; earlier < n; earlier += 1) {
      const dir = `tcf-blanc${String(earlier).padStart(2, '0')}`;
      ok(
        [...sources].some((s) => s.startsWith(dir)),
        `paper ${n}'s ledger does not account for ${dir}; it names: ${[...sources].join(', ')}`
      );
    }
  }
});

test('a paper that does not exist yet is labelled as simulated', () => {
  // The other half, stated so it cannot expire: whatever is authored today,
  // a ledger reaching past the last authored paper must SAY that the papers it
  // is standing in for have not been written. Paper 20 will not be authored.
  const sources = new Set(ledgerFor(BANK, 20).values());
  ok(
    [...sources].some((s) => s.includes('not yet written')),
    `expected simulated papers to be labelled, got: ${[...sources].join(', ')}`
  );
});

test('planFor reproduces the plan file a human approved', () => {
  // The property that matters, and NOT `planFor === pack()`. Those two are
  // legitimately different: `pack` replays the bank, while planFor reads what
  // papers actually authored, and blanc-01 authored TCF-07 and TCF-17 that a
  // replay never draws. The written plan is the artefact a paper is built from,
  // so it is the thing planFor has to agree with — which is exactly what
  // pick-items failed to do on papers 4 and 5.
  for (let n = 2; n <= 5; n += 1) {
    const file = resolve(HERE, `../../exam-blueprints/PLAN-tcf-blanc-0${n}.md`);
    if (!existsSync(file)) continue;
    const written = new Set(readFileSync(file, 'utf8').match(/TCF-\d+/g) ?? []);
    const derived = new Set(idsOf(planFor(BANK, n)));
    deepStrictEqual(
      [...written].filter((id) => !derived.has(id)),
      [],
      `paper ${n}: the written plan holds situations planFor does not draw`
    );
    deepStrictEqual(
      [...derived].filter((id) => !written.has(id)),
      [],
      `paper ${n}: planFor draws situations the written plan does not hold`
    );
  }
});

test('no two papers planned via planFor share a topic', () => {
  const papers = [1, 2, 3, 4, 5].map((n) => planFor(BANK, n));
  for (let i = 0; i < papers.length; i += 1) {
    for (let j = i + 1; j < papers.length; j += 1) {
      const a = new Set(idsOf(papers[i]!));
      const shared = idsOf(papers[j]!).filter((id) => a.has(id));
      deepStrictEqual(shared, [], `papers ${i + 1} and ${j + 1} share ${shared.length}`);
    }
  }
});
