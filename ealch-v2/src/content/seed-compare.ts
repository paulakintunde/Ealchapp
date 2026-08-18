// Comparing a lesson against its copy in `seed.json`, without asserting the
// serialiser.
//
// ── WHY THIS EXISTS ────────────────────────────────────────────────────────
//
// `seed.json` is written by two different things that produce the SAME CONTENT
// IN A DIFFERENT SHAPE:
//
//   merge-<name>-into-seed.ts   a build's merge. Appends rows in place, so key
//                               order is whatever the author wrote and empty
//                               arrays are written as `[]`.
//   publish-content.ts          a publish. REGENERATES the file from Postgres:
//                               canonical key order, empty arrays omitted, and
//                               rows no lesson references dropped by the cut.
//
// A test written against the merged shape passes until somebody publishes. On
// 2026-08-17 the first publish in a week (v51) moved 10,082 of 10,227 ids to a
// different index and changed 667 item bodies — every one of them ONLY by
// `grammarPoints: []` being omitted rather than written. Not one changed
// content, and `a2-30-travail-metiers.test.ts` went red anyway, because it
// compared with `JSON.stringify` equality.
//
// So: never byte-compare against the seed. Compare through `seedEqual`.

/** Key order and omitted-vs-empty normalised away, recursively.
 *
 *  Arrays keep their order — that is real content. Object keys do not: JSON
 *  preserves insertion order, jsonb does not, and the generator writes its own.
 *  `undefined` members are dropped so an omitted optional and an absent one
 *  compare equal, which is exactly the `grammarPoints` case. */
function normalise(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(normalise);
  if (v && typeof v === 'object') {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(v as object).sort()) {
      const x = normalise((v as Record<string, unknown>)[k]);
      if (x !== undefined) out[k] = x;
    }
    return out;
  }
  return v;
}

/** Do these two describe the same content, ignoring how they were serialised?
 *
 *  Use this wherever a test compares an authored lesson to the copy in the
 *  seed. It is the only comparison that survives a publish. */
export function seedEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(normalise(a)) === JSON.stringify(normalise(b));
}

/** The paths that genuinely differ, for a failure message worth reading.
 *
 *  A byte diff on a lesson is thousands of lines of reordering. This returns
 *  only what `seedEqual` actually objects to, deepest-first, capped so a
 *  wholesale difference does not print a novel. */
export function seedDiff(a: unknown, b: unknown, limit = 20): string[] {
  const out: string[] = [];
  const walk = (x: unknown, y: unknown, path: string): void => {
    if (out.length >= limit) return;
    if (JSON.stringify(normalise(x)) === JSON.stringify(normalise(y))) return;

    const bothArrays = Array.isArray(x) && Array.isArray(y);
    if (bothArrays) {
      const ax = x as unknown[]; const ay = y as unknown[];
      if (ax.length !== ay.length) { out.push(`${path}: length ${ax.length} vs ${ay.length}`); return; }
      ax.forEach((el, i) => walk(el, ay[i], `${path}[${i}]`));
      return;
    }
    const bothObjects = x && y && typeof x === 'object' && typeof y === 'object' && !Array.isArray(x) && !Array.isArray(y);
    if (bothObjects) {
      const kx = Object.keys(x as object); const ky = Object.keys(y as object);
      for (const k of new Set([...kx, ...ky])) {
        walk((x as Record<string, unknown>)[k], (y as Record<string, unknown>)[k], path ? `${path}.${k}` : k);
      }
      return;
    }
    const show = (v: unknown) => {
      const s = typeof v === 'string' ? v : JSON.stringify(v);
      return s === undefined ? 'undefined' : String(s).slice(0, 60);
    };
    out.push(`${path}: ${show(x)}  !==  ${show(y)}`);
  };
  walk(a, b, '');
  return out;
}

/** `seedEqual`, as an assertion message. Returns '' when they match.
 *
 *  Kept here rather than in each suite so the failure reads the same
 *  everywhere and nobody re-derives the diff formatting. */
export function seedMismatch(a: unknown, b: unknown): string {
  if (seedEqual(a, b)) return '';
  const d = seedDiff(a, b);
  return `the seed copy has drifted from the authored source:\n      ${d.join('\n      ')}`;
}
