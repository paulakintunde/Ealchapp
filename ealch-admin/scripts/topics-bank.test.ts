// The topic bank is an INPUT to authoring, and nothing checked it.
//
// Phase E9 grew the TEF bank from 66 situations to 250 because paper 1 had
// consumed 45 and left 21, which is less than one further paper. A bank that is
// about to be fanned out over four papers needs to be well-formed before that
// happens: a duplicate id silently gives two blocks the same situation, an
// unknown Suits code means a block quietly finds nothing tagged for it, and a
// malformed row is simply invisible to every parser that reads the file.
//
// Structural only, on purpose. Whether a theme resolves against content_themes
// is a database question and lives in `scripts/theme-fitness.ts`; a test that
// needed a live connection would be skipped in CI and prove nothing.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { parseBank, plan } from './tcf/plan-paper.ts';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));

/** Every Suits code the blueprint defines. `CE-BC` is deliberately absent from
 *  the rows (gap-fill is written to a grammar point, not a situation) but is a
 *  real block, so it is legal to write. */
const CODES = new Set([
  'CO-A', 'CO-B', 'CO-C', 'CO-D', 'CO-E', 'CO-F', 'CO-G',
  'CE-A', 'CE-BC', 'CE-DE', 'CE-F', 'CE-G',
  'EE-A', 'EE-B', 'EO-A', 'EO-B',
  // TCF is a ramp, not blocks: its rows tag the épreuve and the task.
  'CO', 'CE', 'EE-T1', 'EE-T2', 'EE-T3', 'EO-T1', 'EO-T2', 'EO-T3',
]);

/**
 * Pairs the overlap check flags that a person has read and judged distinct.
 *
 * Every one of these shares a FRAME rather than a subject — "une interview d'un
 * X de quartier", two documents that both say "centre-ville", two that both say
 * "médecin traitant". The measure cannot tell a shared frame from a shared
 * situation, so the judgement is recorded here with its reason rather than by
 * loosening the threshold, which would let real duplicates back through.
 */
const REVIEWED_DISTINCT = new Set([
  // A bookseller and an association president are different people doing
  // different things; the overlap is "une interview" and "de quartier".
  'TEF-171|TEF-207',
  // Pedestrianising a centre and empty housing in a centre are different
  // arguments. The overlap is the words "centre" and "ville".
  'TEF-30|TEF-77',
  // A reportage about rural areas having no GP, against one person asking to
  // change theirs. Shared phrase, unrelated documents.
  'TEF-19|TEF-102',
  // A subscription card for a concert hall, against a concert hall in a noise
  // dispute with its neighbours. Same building, different situation.
  'TEF-173|TEF-174',
]);

type Row = { id: string; situation: string; theme: string; suits: string[]; line: number };

function bank(file: string): Row[] {
  const md = readFileSync(resolve(HERE, '../exam-blueprints', file), 'utf8');
  const out: Row[] = [];
  md.split('\n').forEach((line, i) => {
    if (!/^\|\s*(?:TEF|TCF)-\d+\s*\|/.test(line)) return;
    const cells = line.split('|').slice(1, -1).map((c) => c.trim());
    const theme = line.match(/`([a-z0-9-]+)`/);
    out.push({
      id: cells[0]!,
      situation: cells[1] ?? '',
      theme: theme ? theme[1]! : '',
      // Suits is always the LAST cell in both layouts, which is what makes one
      // parser work for the 5-column TEF table and the 4-column TCF one.
      suits: (cells[cells.length - 1] ?? '').split(',').map((s) => s.trim()).filter(Boolean),
      line: i + 1,
    });
  });
  return out;
}

for (const [file, prefix, floor] of [
  ['TOPICS-tef-canada.md', 'TEF', 255],
  ['TOPICS-tcf-canada.md', 'TCF', 72],
] as const) {
  test(`${file}: ids are unique and run 1..N with no gaps`, () => {
    const rows = bank(file);
    // A FLOOR, not an exact count. Growing the bank is the normal thing to do
    // and should not fail a test; losing rows is what must never pass silently.
    // Contiguity and uniqueness below are what actually guard the shape.
    ok(rows.length >= floor, `the bank has shrunk to ${rows.length}, below the ${floor} recorded here`);

    const ids = rows.map((r) => r.id);
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    strictEqual(dupes.length, 0, `duplicate ids: ${[...new Set(dupes)].join(', ')}`);

    // A gap is not cosmetic. The paper planner draws by id, and a missing id
    // reads as a topic that was deliberately withdrawn rather than one that was
    // never written.
    const nums = ids.map((id) => Number(id.split('-')[1])).sort((a, b) => a - b);
    const gaps = [];
    for (let n = 1; n <= nums[nums.length - 1]!; n += 1) if (!nums.includes(n)) gaps.push(n);
    strictEqual(gaps.length, 0, `gaps at ${prefix}-${gaps.join(`, ${prefix}-`)}`);
  });

  test(`${file}: every row is complete and every Suits code is real`, () => {
    for (const r of bank(file)) {
      ok(r.situation.length > 10, `${r.id} (line ${r.line}): situation is empty or too short`);
      ok(/^[a-z0-9-]+$/.test(r.theme), `${r.id} (line ${r.line}): theme "${r.theme}" is not a slug`);
      ok(r.suits.length > 0, `${r.id} (line ${r.line}): no Suits code, so no block can ever draw it`);
      for (const c of r.suits) {
        ok(CODES.has(c), `${r.id} (line ${r.line}): "${c}" is not a block code`);
      }
    }
  });

  test(`${file}: no two situations say the same thing`, () => {
    // OVERLAP, not equality.
    //
    // The first version of this test compared sorted word-sets and demanded an
    // exact match. It passed the whole 250-row bank while fifteen rows restated
    // an existing situation in different words — "une chronique sur l'inflation
    // des prix alimentaires" against "une chronique sur la hausse des prix
    // alimentaires", or two separate rows for wind turbines dividing a village.
    // Two papers drawing those is precisely the collision rule 1 exists to
    // prevent, and different wording is exactly how it gets through.
    //
    // So this measures Jaccard overlap on stemmed content words. Sharing a
    // theme lowers the bar: two `ecologie` rows with half their words in common
    // are far more likely to be one situation twice than two rows from
    // unrelated domains that happen to share vocabulary.
    const STOP = new Set(['dans', 'pour', 'avec', 'une', 'des', 'les', 'son', 'ses', 'sur',
      'cette', 'quoi', 'sont', 'plus', 'faut', 'micro', 'trottoir']);
    const words = (s: string) =>
      new Set(
        s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
          .split(/[^a-z]+/)
          // Stemmed to six characters: "éoliennes"/"éolienne" and
          // "alimentaires"/"alimentaire" must not read as different words.
          .filter((w) => w.length > 3 && !STOP.has(w)).map((w) => w.slice(0, 6))
      );

    const rows = bank(file).map((r) => ({ ...r, w: words(r.situation) }));
    const hits: string[] = [];
    const cleared = new Set<string>();

    for (let i = 0; i < rows.length; i += 1) {
      for (let j = i + 1; j < rows.length; j += 1) {
        const a = rows[i]!, b = rows[j]!;
        if (a.w.size === 0 || b.w.size === 0) continue;
        const shared = [...a.w].filter((w) => b.w.has(w)).length;
        const overlap = shared / new Set([...a.w, ...b.w]).size;
        const limit = a.theme === b.theme ? 0.25 : 0.34;
        if (overlap < limit) continue;
        const pair = `${a.id}|${b.id}`;
        if (REVIEWED_DISTINCT.has(pair)) { cleared.add(pair); continue; }
        hits.push(
          `${a.id} + ${b.id} (${Math.round(overlap * 100)}%${a.theme === b.theme ? `, both \`${a.theme}\`` : ''})\n` +
          `        ${a.situation}\n        ${b.situation}`
        );
      }
    }
    // Reported together. Fixing one at a time and re-running to find the next is
    // how a fifteen-row problem takes fifteen rounds to see.
    strictEqual(hits.length, 0, `${hits.length} near-duplicate pair(s):\n      ${hits.join('\n      ')}`);

    // An allowlist that outlives its reason quietly stops guarding anything, so
    // an entry that no longer overlaps is itself a failure.
    const stale = [...REVIEWED_DISTINCT].filter((p) => !cleared.has(p) && p.startsWith(prefix));
    strictEqual(stale.length, 0, `these pairs no longer overlap and should leave the allowlist: ${stale.join(', ')}`);
  });
}

test('the TEF bank can actually supply four more papers', () => {
  // The arithmetic that was wrong in the file's own prose for the whole of E7
  // and E8: it claimed 66 was "more than five papers require" when a paper
  // spends ~45. Asserted here so the bank cannot silently shrink below what the
  // remaining papers need.
  const rows = bank('TOPICS-tef-canada.md');
  const spent = new Set(
    (readFileSync(resolve(HERE, 'tef-blanc01/common.ts'), 'utf8')
      .split('── Integrity')[0] ?? '').match(/TEF-\d+/g) ?? []
  );
  const free = rows.filter((r) => !spent.has(r.id)).length;
  const PER_PAPER = 45;
  ok(free >= PER_PAPER * 4, `${free} free situations cannot supply 4 papers at ${PER_PAPER} each`);
});

test('the TCF bank can actually supply five papers, drawn the way the planner draws', () => {
  // NOT a count. A count is what failed here, twice.
  //
  // First pass: the demand table lists comprehension only, so 47 topics a paper
  // looked right. The six open tasks draw topics too — a paper spends 53, and
  // five spend 265, not 235.
  //
  // Second pass: per-cell supply still over-counted, because a situation tagged
  // both CO and CE is counted in both cells and can only be spent once. CO is
  // planned first, so it quietly starves CE. Provisioning to the measured edge
  // left paper 5 unable to fill CO B1.
  //
  // So this simulates the actual draw, in order, and asserts every paper fills.
  // It is the only form of this check that has ever been right.
  const rows = parseBank(readFileSync(resolve(HERE, '../exam-blueprints/TOPICS-tcf-canada.md'), 'utf8'));
  const taken = new Set<string>();
  for (let n = 1; n <= 5; n += 1) {
    const p = plan(rows, n, taken);
    deepStrictEqual(p.short, [], `paper ${n} cannot be drawn from the bank`);
    for (const r of [...p.co, ...p.ce]) taken.add(r.situation.id);
    for (const o of p.open) taken.add(o.situation.id);
  }
});

/* ── DELF B2 ──────────────────────────────────────────────────────────────
 *
 * A different bank shape, for a different reason. TEF's rows are tagged by
 * block and TCF's by band; DELF has one band and no blocks, so its rows are
 * tagged by SUIT — which slot of the paper they can fill. A three-minute
 * broadcast debate and a seventy-second bulletin item are both B2 and are not
 * interchangeable, and that is the only distinction the bank needs to carry.
 *
 * These checks are structural, like the ones above, and for the same reason:
 * whether a theme resolves is a database question. The coverage claims in the
 * file's own closing section were written by hand and were WRONG on first
 * draft — 32 distinct themes claimed against 38 actual, and a hand-listed set
 * of untouched themes that did not match the query. Hence a test.
 */

/** Rows a paper draws from each suit, per the blueprint's paper shape. */
const DELF_DRAW: Record<string, number> = {
  'CO-L': 2, // listening exercises 1 and 2
  'CO-S': 3, // listening exercise 3, three short documents
  'CE-T': 2, // reading exercises 1 and 2
  'CE-O': 1, // reading exercise 3, one cluster of opinions
  PE: 1,
  PO: 2, // two drawn, one chosen
};

/** Counts each suit heading claims for itself, e.g. `## CO-L · … (24)`. Read
 *  while parsing rather than with a second regex: building one from a template
 *  literal silently eats the backslashes, so `\\(` and `\\d` arrive as `(` and
 *  `d` and the pattern matches nothing. */
const delfClaimed = new Map<string, number>();

function delfBank(): { id: number; suit: string; theme: string }[] {
  const md = readFileSync(resolve(HERE, '../exam-blueprints/TOPICS-delf-b2.md'), 'utf8');
  const out: { id: number; suit: string; theme: string }[] = [];
  let suit = '';
  delfClaimed.clear();
  // `.trimEnd()` is load-bearing on Windows. This file is checked out with CRLF
  // endings, so a line split on '\n' still carries a trailing '\r' and an
  // anchored `$` never matches it. The first version of this parser returned
  // zero rows for exactly that reason — and said so, because the test below
  // asserts the bank is non-empty rather than trusting whatever it parsed.
  for (const raw of md.split('\n')) {
    const line = raw.trimEnd();
    const h = line.match(/^## ([A-Z-]+) · .*\((\d+)\)\s*$/);
    if (h) {
      suit = h[1]!;
      delfClaimed.set(suit, Number(h[2]));
    }
    const row = line.match(/^\| DELF-(\d+) \|.+\|\s*`([a-z0-9-]+)`\s*\|$/);
    if (row && suit) out.push({ id: Number(row[1]), suit, theme: row[2]! });
  }
  return out;
}

test('TOPICS-delf-b2.md: ids are unique and run 1..N with no gaps', () => {
  const bank = delfBank();
  ok(bank.length > 0, 'no rows parsed — the table shape changed and every reader of this file is now blind');
  const ids = bank.map((r) => r.id);
  strictEqual(new Set(ids).size, ids.length, 'a duplicate id gives two slots the same situation');
  const max = Math.max(...ids);
  deepStrictEqual(
    [...Array(max)].map((_, i) => i + 1).filter((n) => !ids.includes(n)),
    [],
    'a gap means a row was deleted rather than replaced'
  );
  strictEqual(bank.length, max, `${bank.length} rows but ids run to ${max}`);
});

test('TOPICS-delf-b2.md: every row carries a suit the paper actually has', () => {
  for (const r of delfBank()) {
    ok(DELF_DRAW[r.suit] !== undefined, `DELF-${r.id} is tagged "${r.suit}", which is not a slot of the paper`);
    ok(/^[a-z0-9-]+$/.test(r.theme), `DELF-${r.id} has a malformed theme`);
  }
});

test('TOPICS-delf-b2.md: the header counts match the rows beneath them', () => {
  // The counts in the "How to use this" table are what a planner would trust
  // before it reads a single row.
  const bank = delfBank();
  for (const suit of Object.keys(DELF_DRAW)) {
    const actual = bank.filter((r) => r.suit === suit).length;
    const claimed = delfClaimed.get(suit);
    strictEqual(actual, claimed, `${suit}: ${actual} rows under a heading claiming ${claimed}`);
  }
  strictEqual(delfClaimed.size, Object.keys(DELF_DRAW).length, 'a suit heading lost its count');
});

test('the DELF bank can supply five papers, suit by suit', () => {
  // The TEF bank ran out because nobody multiplied 45 by 5 until after paper 1
  // was authored. A bank with enough ROWS can still run out inside one suit,
  // which is the only arithmetic that matters here.
  const bank = delfBank();
  const short: string[] = [];
  for (const [suit, per] of Object.entries(DELF_DRAW)) {
    const have = bank.filter((r) => r.suit === suit).length;
    if (have < per * 5) short.push(`${suit}: ${have} rows, five papers need ${per * 5}`);
  }
  deepStrictEqual(short, [], 'the bank cannot supply the pack');

  const spend = Object.values(DELF_DRAW).reduce((a, b) => a + b, 0);
  strictEqual(spend, 11, 'a DELF paper spends 11 topics; the blueprint says so and the draw table must agree');
});
