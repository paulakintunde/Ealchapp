// Can a candidate who sits a paper actually be told a result?
//
// ── Why this test exists, and why it lives here ─────────────────────────────
//
// When this was written, every exam test in both repos passed and NO published
// paper could report a result. Both were true at once, for a long time.
//
// The reason was that every existing test built its own inputs. nclc.logic's
// suite hands `paperOutcome` four fully-scored sections and checks the fold —
// correctly, and it will never fail, because nothing asked whether the app could
// PRODUCE four fully-scored sections from a real paper. It could not:
// `sectionRaw` returned null for any section holding no closed tasks, PE and PO
// sections are always entirely open, so both were permanently unscored and the
// fold correctly refused an overall it had no right to give.
//
// This file now passes on all eleven papers. It is kept as the thing that made
// them pass and the thing that keeps them passing: it is the only test in either
// repo that joins real authored content to the screen's own arithmetic, and both
// halves have shipped defects the other half's tests could not see.
//
// That is the same seam the DELF débat fell through: content authored, content
// validated, content published, and nothing between the content and the screen
// ever exercised end to end.
//
// ── Why in ealch-admin ──────────────────────────────────────────────────────
//
// Because this is the only repo where both halves exist. Exam content is
// deliberately NOT in seed.json — exams do not ship offline (exam-pack decision
// 11.6), they arrive over the network — so ealch-v2 has no paper to sit and a
// test there would have to invent one, which is precisely the failure being
// fixed. The authored papers are here; the reporting logic is imported from
// there, cross-repo, the same way apply-paper.ts already imports the schema.
//
// ── What "real" means here ──────────────────────────────────────────────────
//
// The papers are loaded through the same specifier apply-paper.ts writes them
// from, so this sits the paper that reaches the database. The results are built
// to match what exam-section.tsx actually logs, field for field — counts and
// `askedTotal` on closed tasks, `points`/`pointsTotal` only where the format
// weights, `aiGrade` and no counts on open ones. And the pipeline below is
// asserted against exam-report.tsx's source, so this test cannot quietly drift
// into checking a sequence the screen does not run.
import { ok, strictEqual } from 'node:assert';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { test } from 'node:test';

import { SCORE_BANDS, type ExamPaper, type ExamSection, type ExamTask, type ScoreBand } from '../../../ealch-v2/src/content/schema.ts';
import {
  PLACEMENT_PASS, sectionBands, sectionRaw, sectionStatusFor, type ExamResult,
} from '../../../ealch-v2/src/store/progress.logic.ts';
import { paperOutcome, sectionOutcome, type SectionOutcome } from '../../../ealch-v2/src/utils/nclc.logic.ts';
import { delfEpreuve, delfOutcome } from '../../../ealch-v2/src/utils/delf.logic.ts';
import { instrumentFor } from '../../../ealch-v2/src/utils/examInstrument.logic.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPORT_SCREEN = resolve(HERE, '../../../ealch-v2/app/exam-report.tsx');

/** Every authored paper, by the directory apply-paper.ts loads it from. Listed
 *  rather than globbed: a paper that stops being loadable should fail here, not
 *  silently drop out of the sweep. */
const PAPER_DIRS = [
  'tef-blanc01', 'tef-blanc02', 'tef-blanc03', 'tef-blanc04', 'tef-blanc05',
  'tcf-blanc01', 'tcf-blanc02', 'tcf-blanc03', 'tcf-blanc04', 'tcf-blanc05',
  'delf-blanc01',
] as const;

type Loaded = { PAPER: ExamPaper; TASKS: ExamTask[] };

async function loadPapers(): Promise<{ dir: string; paper: ExamPaper; tasks: ExamTask[] }[]> {
  const out = [];
  for (const dir of PAPER_DIRS) {
    // pathToFileURL: a Windows absolute path is not a valid ESM specifier.
    const m = (await import(pathToFileURL(resolve(HERE, `../${dir}/paper.ts`)).href)) as Loaded;
    out.push({ dir, paper: m.PAPER, tasks: m.TASKS });
  }
  return out;
}

/** One CEFR band down, floored at a1. What a candidate who missed the task
 *  plausibly produced, rather than a magic constant. */
function bandBelow(level: ScoreBand): ScoreBand {
  return SCORE_BANDS[Math.max(0, SCORE_BANDS.indexOf(level) - 1)]!;
}

const OPEN_TYPES = new Set(['pe_short', 'pe_essay', 'po_monologue', 'po_interaction', 'po_debate']);
const isOpen = (t: ExamTask) => OPEN_TYPES.has(t.taskType);

/** Questions in a task, counted the way apply-paper.ts counts them. */
function questionsIn(t: ExamTask): number {
  return t.parts ? t.parts.flatMap((p) => p.items ?? []).length : (t.items ?? []).length;
}

/** Marks in a task. Equals the question count wherever nothing is weighted,
 *  which is what makes the `weighted` branch below match the screen's. */
function marksIn(t: ExamTask): number {
  const items = t.parts ? t.parts.flatMap((p) => p.items ?? []) : (t.items ?? []);
  return items.reduce((n, i) => n + (i.points ?? 1), 0);
}

/**
 * A sitting, logged the way exam-section.tsx logs one.
 *
 * `share` is the proportion of marks earned, so the same builder produces the
 * perfect sitting and the poor one — a test that can only construct a pass
 * cannot tell a working estimate from a constant.
 */
function sitting(paper: ExamPaper, tasks: ExamTask[], share: number): ExamResult[] {
  const byId = new Map(tasks.map((t) => [t.id, t]));
  const results: ExamResult[] = [];

  for (const sec of paper.sections) {
    for (const id of sec.taskIds) {
      const t = byId.get(id);
      if (!t) continue;

      const base = {
        id: `r-${id}`, date: '2026-09-06', paperId: paper.id, taskId: id,
        format: t.format, taskType: t.taskType, skill: t.skill, band: t.level,
        mode: 'exam' as const,
      };

      if (!isOpen(t)) {
        const total = questionsIn(t);
        const pointsTotal = marksIn(t);
        const correct = Math.round(total * share);
        const points = Math.round(pointsTotal * share);
        // The screen omits the points pair unless it says something the counts
        // do not. Mirrored exactly: carrying it always would let this test pass
        // through a branch no real result ever takes.
        const weighted = pointsTotal !== total || points !== correct;
        results.push({
          ...base,
          passed: pointsTotal > 0 && points / pointsTotal >= PLACEMENT_PASS,
          correct,
          askedTotal: total,
          ...(weighted ? { points, pointsTotal } : {}),
        } as ExamResult);
        continue;
      }

      // Open task, graded. No counts — an open task has no raw count, which is
      // the whole reason writing and speaking are supposed to report a band.
      //
      // The BAND moves with the share, not just `passed`. DELF marks production
      // out of 25 from the band itself, so a harness that graded every sitting
      // at the target band would report a weak candidate and a perfect one
      // identically and prove nothing about either.
      const band = share >= PLACEMENT_PASS ? t.level : bandBelow(t.level);
      results.push({
        ...base,
        passed: SCORE_BANDS.indexOf(band) >= SCORE_BANDS.indexOf(t.level),
        aiGrade: { band, feedback: 'fixture' },
      } as ExamResult);
    }
  }
  return results;
}

/**
 * Whether a paper reported anything, in whichever instrument it is marked on.
 *
 * Both instruments answer the same question — can this candidate be told a
 * result — and neither can answer it for the other. NCLC returns a level range
 * folded from four; DELF returns a mark out of 100 with a floor. `score` is the
 * comparable number each produces, so a weak sitting can be checked against a
 * strong one without pretending the two scales are one.
 */
function reported(paper: ExamPaper, tasks: ExamTask[], results: ExamResult[]):
  { ok: boolean; score: number | null; detail: string; missing: string[] } {
  if (instrumentFor(paper.format) === 'delf') {
    const out = delfOutcome(
      paper.sections.map((sec: ExamSection) => {
        const status = sectionStatusFor(sec.taskIds, results, paper.id);
        const counts = sectionRaw(sec.taskIds, results, paper.id);
        const bands = sectionBands(sec.taskIds, results, paper.id);
        return delfEpreuve({
          skill: sec.skill, status,
          points: bands ? undefined : counts?.raw ?? null,
          bands,
        });
      })
    );
    return {
      ok: out.total !== null && out.verdict !== 'incomplete',
      score: out.total,
      missing: out.missing,
      detail: out.epreuves.map((e) => `${e.skill}=${e.mark ?? `none(${e.status})`}${e.belowFloor ? '!' : ''}`).join(' ')
        + `  total=${out.total ?? 'none'} verdict=${out.verdict}`,
    };
  }
  const { sections, outcome } = runReport(paper, tasks, results);
  return {
    ok: !!outcome.overall && outcome.overallStatus === 'complete',
    score: outcome.overall ? outcome.overall.low : null,
    missing: outcome.missing,
    detail: sections
      .map((x) => `${x.skill}=${x.nclc ? `${x.nclc.low}-${x.nclc.high}` : `none(status=${x.status},raw=${x.raw})`}`)
      .join(' '),
  };
}

/** The NCLC pipeline, exactly as the report screen runs it. */
function runReport(paper: ExamPaper, tasks: ExamTask[], results: ExamResult[]) {
  const byId = new Map(tasks.map((t) => [t.id, t]));
  const sections: SectionOutcome[] = paper.sections.map((sec: ExamSection) => {
    const status = sectionStatusFor(sec.taskIds, results, paper.id);
    const counts = sectionRaw(
      sec.taskIds, results, paper.id,
      sec.scoring?.weights ? (taskId: string) => byId.get(taskId)?.level : undefined
    );
    return sectionOutcome({
      skill: sec.skill,
      status,
      raw: counts?.raw ?? null,
      total: counts?.total ?? 0,
      scoring: sec.scoring,
      byBand: counts?.byBand,
    });
  });
  return { sections, outcome: paperOutcome(sections) };
}

/* ── The headline ─────────────────────────────────────────────────────────── */

test('a perfect sitting of every published paper produces an overall estimate', async () => {
  const papers = await loadPapers();
  strictEqual(papers.length, PAPER_DIRS.length, 'a paper failed to load');

  // Every paper is reported, not just the first to fail. As the causes are
  // fixed this list shrinks, so the message doubles as the progress report.
  const broken: string[] = [];
  for (const { paper, tasks } of papers) {
    const r = reported(paper, tasks, sitting(paper, tasks, 1));
    if (r.ok) continue;
    broken.push(`  ${paper.id.padEnd(30)} [${instrumentFor(paper.format)}] missing=[${r.missing.join(',')}]  ${r.detail}`);
  }

  ok(
    broken.length === 0,
    `${broken.length} of ${papers.length} papers cannot report an overall estimate after a PERFECT sitting:\n${broken.join('\n')}\n\n` +
      'Every question right, every open task graded, exam mode throughout — and the candidate is told no estimate exists.\n' +
      'See progress.logic.ts sectionRaw: it returns null for a section holding no closed tasks, so PE and PO never reach a band.'
  );
});

/* ── The two causes, named separately ─────────────────────────────────────── */
//
// Kept apart from the headline so a partial fix reads as progress rather than
// as the same failure again. The headline says the candidate gets nothing; each
// of these says why.

test('every épreuve of every paper carries a scoring table to be read', async () => {
  const papers = await loadPapers();
  const gaps: string[] = [];
  for (const { paper } of papers) {
    // DELF carries no SectionScoring by design and never will: it reports a
    // mark out of 25 per épreuve against a fixed threshold, not a raw count
    // interpolated onto a scale. Requiring one here would be demanding the
    // wrong instrument, which is how it came to report nothing at all.
    if (instrumentFor(paper.format) !== 'nclc') continue;
    const without = paper.sections.filter((s) => !s.scoring).map((s) => s.skill);
    if (without.length) gaps.push(`  ${paper.id.padEnd(30)} no scoring on: ${without.join(', ')}`);
  }
  ok(
    gaps.length === 0,
    `a section with no scoring table can never report a band, whatever the candidate scores:\n${gaps.join('\n')}\n\n` +
      'TEF authored all four. TCF authored two. DELF authored none — and DELF is not an NCLC exam at all:\n' +
      'it is marked out of 100, passes at 50, and needs at least 5/25 in every épreuve.'
  );
});

test('an open épreuve reaches a raw count, because that is what its map is indexed by', async () => {
  // The narrowest statement of the root cause, and the one to fix first. TEF's
  // PE and PO maps are indexed 0..2 — TASKS PASSED — which is exactly what
  // sectionRaw's own fallback computes. The early return prevents reaching it.
  const papers = await loadPapers();
  const { paper, tasks } = papers.find((p) => p.dir === 'tef-blanc01')!;
  const results = sitting(paper, tasks, 1);

  const po = paper.sections.find((s) => s.skill === 'PO')!;
  const counts = sectionRaw(po.taskIds, results, paper.id);
  ok(
    counts !== null,
    'sectionRaw returned null for a fully-graded speaking épreuve, so its scoring map is unreachable. ' +
      `The map expects raw 0..${po.taskIds.length} (tasks passed); the fallback that computes exactly that is never reached.`
  );
  strictEqual(counts!.total, po.taskIds.length, 'an open épreuve is out of its task count');
  strictEqual(counts!.raw, po.taskIds.length, 'every task passed, so every task should count');
});

/* ── Sanity, so a fix cannot satisfy this file with a constant ────────────── */

/**
 * WEAK, not empty.
 *
 * This started at 0 and reported nothing, which looked like a second bug and
 * was not: TEF's comprehension ladders begin at `minRaw: 16`, with "0..15
 * deliberately uncovered" written above them. NCLC 4 is the floor of the scale,
 * and a paper that reports no band beneath it is being honest rather than
 * broken — the same refusal `scaledFor` makes by returning null off the end of
 * a map instead of extrapolating.
 *
 * So the comparison needs a candidate who is weak and still on the scale.
 * 0.45 puts the comprehension épreuves at 18 of 40 — inside the lowest rule —
 * and leaves every open task below its target band.
 */
const WEAK_SHARE = 0.45;

test('a weak sitting reports a lower estimate than a perfect one', async () => {
  const papers = await loadPapers();
  const compared: string[] = [];

  for (const { paper, tasks } of papers) {
    const good = reported(paper, tasks, sitting(paper, tasks, 1));
    const weak = reported(paper, tasks, sitting(paper, tasks, WEAK_SHARE));
    // Only meaningful once both produce a number. Until every paper reports,
    // there is nothing to compare on some of them, and asserting over two nulls
    // would make this a test that passes because the feature is broken.
    if (good.score === null || weak.score === null) continue;
    compared.push(paper.id);
    ok(
      good.score > weak.score,
      `${paper.id}: a perfect sitting scored ${good.score} and a 45% one scored ${weak.score}, ` +
        'so the result is not reading the performance'
    );
  }

  ok(
    compared.length > 0,
    'no paper produced two comparable estimates, so this check verified nothing. ' +
      'It is gated on the headline test above passing first — fix that and this becomes real.'
  );
});

/* ── The mirror ───────────────────────────────────────────────────────────── */

test('this test runs the same sequence the report screen runs', async () => {
  // Without this, the file above is a private pipeline that happens to share
  // some function names with the app. The report is what a candidate sees, so
  // the report's source is the thing to hold this honest.
  const src = readFileSync(REPORT_SCREEN, 'utf8');
  for (const call of ['sectionStatusFor(', 'sectionRaw(', 'sectionOutcome(', 'paperOutcome(']) {
    ok(src.includes(call), `exam-report.tsx no longer calls ${call} — this test now mirrors nothing`);
  }
  // The weights lookup is conditional in the screen, and passing bandOf
  // unconditionally would change TCF's index from the weighted total to a plain
  // count. Same condition, same meaning.
  ok(
    src.includes('sec.scoring?.weights'),
    'exam-report.tsx no longer gates the band profile on scoring.weights; runReport still does'
  );
});

/* ── "below the scale" has to be true of every authored ladder ────────────── */

test('no authored ladder can be overshot, so "below the scale" is the honest name', async () => {
  // The report tells a scored candidate with no band that they fell BELOW the
  // lowest reportable level. That is a claim about direction, and it is only
  // truthful while every table's NCLC rules reach the top of its own map.
  //
  // If a map ran to raw 40 and the rules stopped at 35, a candidate scoring 38
  // would land outside the ladder and be told they scored under NCLC 4 — the
  // worst possible misreport, and one no test of the app alone could see,
  // because the tables live here.
  const papers = await loadPapers();
  const problems: string[] = [];

  for (const { paper } of papers) {
    for (const sec of paper.sections) {
      if (!sec.scoring) continue;
      const topRule = Math.max(...sec.scoring.nclc.map((r) => r.maxRaw));
      const topMap = Math.max(...sec.scoring.map.map((m) => m.raw));
      if (topRule < topMap) {
        problems.push(`  ${paper.id} ${sec.skill}: the map reaches raw ${topMap}, the rules stop at ${topRule}`);
      }
      // A gap INSIDE the covered range is the same hazard by another route.
      const covered = new Set<number>();
      for (const r of sec.scoring.nclc) for (let i = r.minRaw; i <= r.maxRaw; i += 1) covered.add(i);
      const lowRule = Math.min(...sec.scoring.nclc.map((r) => r.minRaw));
      for (let i = lowRule; i <= topRule; i += 1) {
        if (!covered.has(i)) problems.push(`  ${paper.id} ${sec.skill}: raw ${i} falls in a hole between rules`);
      }
    }
  }

  ok(problems.length === 0, `a candidate could land outside a ladder and be told they scored below it:\n${problems.join('\n')}`);
});
