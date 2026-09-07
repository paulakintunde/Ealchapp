// The publish script maps database rows to shipped objects by hand. That hand
// mapping can read a column the SELECT never asked for, and when it does the
// value is `undefined`, the conditional spread contributes `{}`, and the field
// simply is not there. No error, no warning, no type failure — `pool.query`
// returns `any` rows, so TypeScript cannot help either.
//
// That is not hypothetical. `interlocutor` and `prep_s` were read by the exam
// task mapping and absent from its SELECT for the whole of E6 and E7. It stayed
// invisible because the corpus had no published exam tasks: with zero rows the
// mapping never ran and the validator had nothing to reject. The moment a paper
// was flipped to published for real, the publish died on
//
//   corpus.examTasks[16]: taskType "po_interaction" MUST have an interlocutor
//
// which is a speaking test with nobody on the other end. A candidate would have
// got an examiner who never spoke.
//
// So this reads the script as text and checks the two halves agree. Static, but
// it is the only check that runs whether or not the tables have rows in them.
import { ok } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SRC = readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), 'publish-content.ts'), 'utf8');

/** The column names a `select ... from <table>` asks for, by their result alias
 *  (`x::text as x` is read back as `r.x`). */
function selected(table: string): Set<string> {
  // Anchor on the table and walk BACKWARDS to its own `select`. Matching
  // forwards from the first backtick-select in the file instead spans several
  // unrelated queries and yields a column list that belongs to none of them.
  const at = SRC.search(new RegExp('from\\s+' + table + '\\b'));
  if (at < 0) throw new Error(`no query found against ${table}`);
  const start = SRC.lastIndexOf('`select', at);
  if (start < 0) throw new Error(`no select found for ${table}`);
  const cols = SRC.slice(start + '`select'.length, at);
  const out = new Set<string>();
  for (const raw of cols.split(',')) {
    const col = raw.trim().replace(/\s+/g, ' ');
    if (!col) continue;
    const alias = col.match(/\bas\s+([a-z_][a-z0-9_]*)$/i);
    out.add((alias ? alias[1]! : col.split(' ')[0]!).replace(/.*\./, ''));
  }
  return out;
}

/** Every `r.<column>` the named mapping reads. */
function readBy(startMarker: string): Set<string> {
  const from = SRC.indexOf(startMarker);
  ok(from >= 0, `mapping not found: ${startMarker}`);
  // To the end of the .map( call — the first line that closes it at this indent.
  const end = SRC.indexOf('\n  }));', from);
  ok(end > from, `could not find the end of ${startMarker}`);
  const body = SRC.slice(from, end);
  const out = new Set<string>();
  for (const m of body.matchAll(/\br\.([a-z_][a-z0-9_]*)/g)) out.add(m[1]!);
  return out;
}

for (const [what, marker, table] of [
  ['exam tasks', 'const examTasks: ExamTask[] =', 'content_exam_tasks'],
  ['exam papers', 'const examPapers: ExamPaper[] =', 'content_exam_papers'],
  ['items', 'const items: Item[] =', 'content_items'],
] as const) {
  test(`every column the ${what} mapping reads is actually selected`, () => {
    const have = selected(table);
    const missing = [...readBy(marker)].filter((c) => !have.has(c));
    ok(
      missing.length === 0,
      `${table}: the mapping reads ${missing.map((c) => `r.${c}`).join(', ')} but the SELECT does not ask for ` +
        `${missing.join(', ')}. Those fields ship as undefined and vanish from the snapshot.`
    );
  });
}

test('the exam task select still asks for the two columns that were missing', () => {
  // Named explicitly as well as covered by the general check above, because
  // these two are the ones that actually shipped broken, and a future edit that
  // removes BOTH the select and the mapping line would satisfy the general
  // check while quietly dropping the recorded interlocutor.
  const have = selected('content_exam_tasks');
  ok(have.has('interlocutor'), 'interlocutor is not selected — po_interaction tasks would have no examiner');
  ok(have.has('prep_s'), 'prep_s is not selected — speaking tasks would lose their preparation time');
});
