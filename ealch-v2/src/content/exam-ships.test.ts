// THE EXAMS MUST SHIP IN THE SEED. Phase 22.1, D-11 and D-13.
//
// Until v71 the seed carried no exam content at all. Every published paper and
// task lived only in the OTA snapshot, so a fresh install — or any install
// that had not yet pulled a snapshot — opened the Examiner to an empty list.
// The papers were fine. The shelf they sit on was not in the binary.
//
// Nothing would have caught a regression here:
//
//   · validateCorpus PASSES a corpus with no exams. Its exam checks are
//     referential (does this paper's task exist, is an id duplicated), and an
//     absent array dangles nothing. Same shape of silence that let the
//     catalogue vanish for thirteen publishes; see catalogue-ships.test.ts.
//   · report-reachable.test.ts in ealch-admin does check every published paper,
//     but against POSTGRES. It is green whether or not the seed carries a
//     single one, because it never reads seed.json.
//
// So this file asserts the one thing neither does: that the seed a learner
// installs carries the papers, exactly their tasks, and nothing orphaned. A
// publish that silently drops exams from the cut goes red here.
//
// D-13: it also refuses to let the codebase keep SAYING exams are snapshot-only
// now that they are not. A stale sentence in a comment or a UI string is how
// the next person re-derives the wrong mental model.
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { validateCorpus, type Corpus } from './schema.ts';
import { instrumentFor } from '../utils/examInstrument.logic.ts';
import { heldBands, partialValidationView } from '../services/packs.logic.ts';
import { seedPlusPacks, seedRegime } from './seed-plus-packs.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as Corpus & {
  examPapers?: { id: string; format: string; outline?: true; sections?: { taskIds?: string[] }[] }[];
  examTasks?: { id: string }[];
};

const papers = seed.examPapers ?? [];
const tasks = seed.examTasks ?? [];
const taskIds = new Set(tasks.map((t) => t.id));

/** Every task id any paper names, across all its sections. */
const referenced = new Set<string>();
for (const p of papers) for (const s of p.sections ?? []) for (const t of s.taskIds ?? []) referenced.add(t);

test('the seed ships exam content', () => {
  ok(papers.length > 0, 'seed.examPapers is empty — a fresh install opens the Examiner to nothing');
  ok(tasks.length > 0, 'seed.examTasks is empty — the papers have no questions behind them');
});

test('every seed exam paper resolves all its task ids against seed.examTasks', () => {
  // An outline paper (the packs core's skeleton of a paid paper, v80) names
  // tasks the exam pack holds, by design; it is listed locked, never sat.
  const dangling: string[] = [];
  for (const p of papers.filter((x) => x.outline !== true)) {
    for (const s of p.sections ?? []) {
      for (const t of s.taskIds ?? []) if (!taskIds.has(t)) dangling.push(`${p.id} -> ${t}`);
    }
  }
  strictEqual(dangling.length, 0, `papers name tasks the seed does not carry, so the section renders empty:\n  ${dangling.join('\n  ')}`);
});

test('every seed exam task is referenced by a seed paper', () => {
  const orphans = [...taskIds].filter((t) => !referenced.has(t));
  strictEqual(orphans.length, 0, `tasks bundled that no paper reaches — dead weight in every binary (D-02):\n  ${orphans.join('\n  ')}`);
});

test('every seed exam paper has a reporting instrument', () => {
  const noInstrument: string[] = [];
  for (const p of papers) {
    let instrument: string | undefined;
    try {
      instrument = instrumentFor(p.format as Parameters<typeof instrumentFor>[0]);
    } catch {
      instrument = undefined;
    }
    if (instrument !== 'nclc' && instrument !== 'delf') noInstrument.push(`${p.id} (format ${p.format})`);
  }
  strictEqual(noInstrument.length, 0, `a paper whose format has no instrument cannot be scored into a report:\n  ${noInstrument.join('\n  ')}`);
});

test('validateCorpus reports no exam issues against the shipped seed', () => {
  // Under premium packs the binary is the free core (PREMIUM-PACKS-SPEC.md,
  // decision 4): paper 1 of each format and its tasks. A free paper's task may
  // target a paid-band item (DELF B2 blanc-01 names fr.b2.* rows), which lives
  // in that band's pack. A target is SRS metadata, so it is validated the way
  // a free device holds the corpus: a target into an unheld band is dropped
  // from the view, a target dangling inside the core still fails.
  const view = seedRegime() === 'packs' ? partialValidationView(seed, { bands: heldBands([]), exam: false }) : seed;
  const issues = validateCorpus(view).filter((i) => /exam/i.test(i.path) || /exam/i.test(i.message));
  strictEqual(issues.length, 0, `validateCorpus complains about the seed's exams:\n  ${issues.map((i) => `${i.path}: ${i.message}`).join('\n  ')}`);
});

test('under packs the binary carries the free papers whole, the rest as outlines, and the exam pack fills them', { skip: seedRegime() !== 'packs' }, () => {
  // FREE_EXAM_PAPERS in ealch-admin content-packs.logic.ts, pinned there to
  // RemoteConfig.examFreePapers (default 1): paper 1 of each format is free.
  // Since v80 the core LISTS every paper: paper 1 whole, the rest as outline
  // skeletons with no tasks bundled, so a free learner sees them locked.
  const no = (p: unknown) => (p as { paperNo?: number }).paperNo;
  const paidWhole = papers.filter((p) => no(p) !== 1 && p.outline !== true).map((p) => p.id);
  strictEqual(paidWhole.length, 0, `the free core bundles a paid paper whole:\n  ${paidWhole.join('\n  ')}`);
  const freeOutline = papers.filter((p) => no(p) === 1 && p.outline === true).map((p) => p.id);
  strictEqual(freeOutline.length, 0, `a free paper ships as an outline:\n  ${freeOutline.join('\n  ')}`);
  // The exam pack replaces every skeleton with its full paper.
  const all = seedPlusPacks<{ examPapers?: { id: string; outline?: true }[] }>().examPapers ?? [];
  strictEqual(all.length, papers.length, 'seed + packs lists the same papers the core does');
  const stillOutline = all.filter((p) => p.outline === true).map((p) => p.id);
  strictEqual(stillOutline.length, 0, `the exam pack left skeletons in the test corpus:\n  ${stillOutline.join('\n  ')}`);
});

test('no source file still says exam content is snapshot-only (D-13)', () => {
  const STALE =
    /only in the (OTA )?snapshot|never the seed|ships only in (that|the OTA) snapshot|exams do not ship offline|has NO exam content/i;
  const roots = [resolve(here, '../../app'), resolve(here, '..')];
  const self = resolve(here, 'exam-ships.test.ts');
  const hits: string[] = [];

  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        walk(full);
        continue;
      }
      if (!/\.tsx?$/.test(entry.name)) continue;
      if (full === self) continue;
      const src = readFileSync(full, 'utf8');
      src.split('\n').forEach((line, i) => {
        if (STALE.test(line)) hits.push(`${full.replace(resolve(here, '../..'), '')}:${i + 1}  ${line.trim()}`);
      });
    }
  };
  for (const r of roots) walk(r);

  strictEqual(hits.length, 0, `the seed carries exams since v71, but these still say it does not:\n  ${hits.join('\n  ')}`);
});
