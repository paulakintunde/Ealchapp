// The DELF pack as a whole — the checks no single paper can make.
//
// A paper's own test reads its own paper. That is exactly how five TEF papers
// came to share one answer key: each was correct alone, and nothing compared
// them. These are the comparisons.
import { ok } from 'node:assert';
import { test } from 'node:test';
import { topicLedgerViolations } from './paper-rules.ts';
import * as blanc01 from '../delf-blanc01/paper.ts';
import * as blanc02 from '../delf-blanc02/paper.ts';
import * as blanc03 from '../delf-blanc03/paper.ts';
import * as blanc04 from '../delf-blanc04/paper.ts';

const PAPERS = [
  { variant: 'blanc-01', mod: blanc01 },
  { variant: 'blanc-02', mod: blanc02 },
  { variant: 'blanc-03', mod: blanc03 },
  { variant: 'blanc-04', mod: blanc04 },
];

test('no DELF topic is spent by two papers', () => {
  // TOPICS-delf-b2 rule 1. The bank holds 124 rows and five papers spend 55, so
  // a collision is not something anyone sees by eye — which is why TOPICS is
  // data now rather than the comment it was through blanc-01.
  const problems = topicLedgerViolations(PAPERS.map((p) => ({ variant: p.variant, topics: p.mod.TOPICS })));
  ok(problems.length === 0, `the topic ledger is broken:\n  ${problems.join('\n  ')}`);
});

test('no two DELF papers share an answer key sequence', () => {
  // The TEF defect, guarded here before it can recur: five papers shared one
  // key because the scatter was seeded on the question index rather than on the
  // paper. scatterKeys is seeded on format AND variant, and this is what proves
  // the seeding actually differs rather than merely being written to.
  const seqs = new Map<string, string[]>();
  for (const { variant, mod } of PAPERS) {
    const keys = [...mod.CO_TASKS, ...mod.CE_TASKS]
      .flatMap((t) => (t.parts ?? []).flatMap((p) => p.items ?? []))
      .map((i) => i.correct)
      .join('');
    const seen = seqs.get(keys);
    ok(!seen, `${variant} and ${seen} have identical answer keys across all 40 questions`);
    seqs.set(keys, [variant] as never);
  }
});

test('no two DELF papers reuse a task id', () => {
  // Ids embed the variant, so a collision means a paper was copied and its
  // constants half-edited — the exact way the TEF pack's promoter once nearly
  // published the wrong rows.
  const seen = new Map<string, string>();
  for (const { variant, mod } of PAPERS) {
    for (const t of mod.TASKS) {
      const already = seen.get(t.id);
      ok(!already, `${t.id} is used by both ${already} and ${variant}`);
      seen.set(t.id, variant);
    }
  }
});
