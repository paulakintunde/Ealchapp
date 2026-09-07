// Print every string a candidate or a grader reads, as JSON, for the gender gate.
//
// gates/check_french.py and check_gender.py operate on CORPUS ITEMS: they read
// `verbCheck` targets and `gender` fields. An exam paper has neither — it is
// prose — so those gates cannot see a word of it. This dump is what makes the
// prose checkable by gates/check_prose_gender.py instead.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/tef/dump-prose.ts | python gates/check_prose_gender.py
//   pnpm tsx scripts/tef/dump-prose.ts 3 | python gates/check_prose_gender.py
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';

const HERE = dirname(fileURLToPath(import.meta.url));

/** Defaults to all five papers: the gate is cheap and a paper left out of it is
 *  a paper nobody checked. */
const ARGS = process.argv.slice(2).filter((a) => /^\d+$/.test(a)).map(Number);
const PAPERS = ARGS.length ? ARGS : [1, 2, 3, 4, 5];

async function main() {
  const out: string[] = [];
  for (const n of PAPERS) {
    const dir = `tef-blanc${String(n).padStart(2, '0')}`;
    // pathToFileURL: a Windows absolute path is not a valid ESM specifier.
    const { TASKS } = (await import(pathToFileURL(resolve(HERE, `../${dir}/paper.ts`)).href)) as { TASKS: ExamTask[] };
    for (const t of TASKS) {
      out.push(t.prompt, t.modelAnswer ?? '');
      for (const p of t.parts ?? []) out.push(p.label, p.text ?? '', p.imageAlt ?? '');
      const items = t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []);
      for (const it of items) out.push(it.q, it.why ?? '', ...it.opts);
      for (const c of t.rubric?.criteria ?? []) out.push(c.label, ...(c.descriptors ?? []));
      for (const n2 of t.examinerNotes ?? []) out.push(n2);
      const b = t.interlocutor;
      if (b) for (const turn of [b.opening, b.catchAll, b.closing, ...b.answers]) out.push(turn.text, turn.covers);
    }
  }
  process.stdout.write(JSON.stringify(out.filter((s) => s && s.trim())) + '\n');
}

main().catch((e) => { console.error(String(e)); process.exit(1); });
