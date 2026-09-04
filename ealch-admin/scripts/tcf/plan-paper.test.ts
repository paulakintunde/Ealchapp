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
import { BANDS, DOC_SHAPE, ITEM_QUOTA, OPEN_SUITS, parseBank, plan, type Plan } from './plan-paper.ts';

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
