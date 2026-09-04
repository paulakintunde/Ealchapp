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
