// EVERY CORE STRING THAT NOW RUNS OVER THE 45-WORD CAP, with enough of the
// text to trim it in one pass.
//
// A lesson label is longer than a unit id — « lesson 22 in A2 » against
// « a2.24 » is three words for one — so a body that sat at 44 lands at 47. The
// remedy is to TRIM THE PROSE, never to raise the cap and never to shorten a
// verbatim carry: a quotation is quoted because another lesson owns the words.
//
//   npx tsx scripts/_a2_label_over.ts <lesson-module-path> [export]

import { validateDensity } from '../../ealch-v2/src/content/density.logic.ts';

const [rel, exportName] = process.argv.slice(2);
if (!rel) { console.error('usage: _a2_label_over.ts ./data/x-lesson.ts [EXPORT]'); process.exit(1); }

(async () => {
const mod = (await import(rel)) as Record<string, unknown>;
const lesson = (exportName ? mod[exportName] : undefined)
  ?? mod.LESSON ?? Object.values(mod).find((v) => v && typeof v === 'object' && 'sections' in (v as object));
if (!lesson) { console.error('no lesson export found; pass one explicitly'); process.exit(2); }

const issues = validateDensity(lesson as never) as Array<{ rule: string; path: string; message: string }>;
const over = issues.filter((i) => i.rule === 'core-words');
if (!over.length) { console.log('no core string is over the cap'); process.exit(0); }

const at = (root: unknown, path: string): unknown => {
  let v: unknown = root;
  for (const raw of path.split('.')) {
    const m = raw.match(/^(.*?)\[(\d+)\]$/);
    if (m) {
      v = (v as Record<string, unknown>)[m[1]];
      v = (v as unknown[])[Number(m[2])];
    } else if (/^\d+$/.test(raw)) {
      v = (v as unknown[])[Number(raw)];
    } else {
      v = (v as Record<string, unknown>)[raw];
    }
  }
  return v;
};

const sections = (lesson as { sections: Array<{ id: string }> }).sections;
for (const i of over) {
  // The path is section-relative: `s06-persons.cards[0].body`.
  const [secId, ...rest] = i.path.split('.');
  const sec = sections.find((s) => s.id === secId);
  const text = sec ? at(sec, rest.join('.')) : undefined;
  const words = typeof text === 'string' ? text.split(/\s+/).filter(Boolean).length : 0;
  console.log(`\n${i.path}  ${words} words, cut ${words - 45}`);
  console.log(typeof text === 'string' ? text : `(could not resolve: ${i.message})`);
}
console.log(`\n${over.length} core string${over.length === 1 ? '' : 's'} over the cap`);
})();
