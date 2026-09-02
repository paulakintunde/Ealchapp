// Write one TEF paper to the database.
//
// The generalised form of author-tef-blanc01.ts, which only knew about the gold
// paper. Everything it validated is validated here, plus the carry that stops an
// authoring run from deleting a render (see merge-rendered.ts).
//
// EVERYTHING LANDS in_review. No human has read these papers yet; the open tasks
// are 100%-review tier regardless (reviewTier.ts). Publishing is a separate,
// deliberate step.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/tef/apply-paper.ts 2 --dry-run    validate and report
//   pnpm tsx scripts/tef/apply-paper.ts 2              apply, one transaction
//   pnpm tsx scripts/tef/apply-paper.ts 2 3 4 5        several, each its own tx

// '../env' MUST be imported first — see the incident note in migrate.ts.
import '../env';
import { describeTarget } from '../env';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { validateExamPaper, validateExamTask, type ExamPaper, type ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { mergeRenderedParts, mergeRenderedBank } from './merge-rendered.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const DRY_RUN = process.argv.includes('--dry-run');

type Loaded = {
  PAPER: ExamPaper;
  TASKS: ExamTask[];
  CO_TASKS: ExamTask[];
  CE_TASKS: ExamTask[];
  EE_TASKS: ExamTask[];
  EO_TASKS: ExamTask[];
};

async function load(n: number): Promise<Loaded> {
  const dir = `tef-blanc${String(n).padStart(2, '0')}`;
  // pathToFileURL: a Windows absolute path is not a valid ESM specifier.
  return (await import(pathToFileURL(resolve(HERE, `../${dir}/paper.ts`)).href)) as Loaded;
}

function validate(p: Loaded): string[] {
  const problems: string[] = [];
  for (const t of p.TASKS) {
    for (const i of validateExamTask(t)) problems.push(`${t.id} · ${i.path}: ${i.message}`);
  }
  for (const i of validateExamPaper(p.PAPER)) problems.push(`${p.PAPER.id} · ${i.path}: ${i.message}`);

  // The counts the blueprint fixes. Asserted here as well as in each paper's
  // test, because the test protects the source and this protects the WRITE: a
  // script that can put 39 questions in a 40-question épreuve eventually will.
  const count = (ts: ExamTask[]) =>
    ts.reduce((n, t) => n + (t.parts ? t.parts.flatMap((x) => x.items).length : (t.items ?? []).length), 0);
  if (count(p.CO_TASKS) !== 40) problems.push(`CO has ${count(p.CO_TASKS)} questions, expected 40`);
  if (count(p.CE_TASKS) !== 40) problems.push(`CE has ${count(p.CE_TASKS)} questions, expected 40`);
  if (p.EE_TASKS.length !== 2) problems.push(`EE has ${p.EE_TASKS.length} tasks, expected 2`);
  if (p.EO_TASKS.length !== 2) problems.push(`EO has ${p.EO_TASKS.length} tasks, expected 2`);
  return problems;
}

async function write(p: Loaded): Promise<void> {
  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();
  try {
    await client.query('begin');

    // What is already stored, so a render's writes survive this upsert.
    const priorRows = await client.query<{
      id: string;
      parts: NonNullable<ExamTask['parts']> | null;
      interlocutor: NonNullable<ExamTask['interlocutor']> | null;
    }>(
      `select id, parts, interlocutor from content_exam_tasks where format = $1 and variant = $2`,
      [p.PAPER.format, p.PAPER.variant]
    );
    const prior = new Map(priorRows.rows.map((r) => [r.id, r]));
    let carried = 0;

    for (const t of p.TASKS) {
      const was = prior.get(t.id);
      const parts = t.parts ? mergeRenderedParts(t.parts, was?.parts ?? null) : null;
      const bank = t.interlocutor ? mergeRenderedBank(t.interlocutor, was?.interlocutor ?? null) : null;
      carried +=
        (parts ?? []).filter((x) => x.audioRef).length +
        (bank ? [bank.opening, bank.catchAll, bank.closing, ...bank.answers].filter((x) => x.audioRef).length : 0);

      await client.query(
        `insert into content_exam_tasks
           (id, format, variant, task_type, skill, level, format_version, prompt, label,
            items, parts, response_spec, prep_s, interlocutor, rubric, model_answer,
            examiner_notes, timing_s, target_item_ids, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,'in_review','llm')
         on conflict (id) do update set
           prompt=excluded.prompt, label=excluded.label, items=excluded.items, parts=excluded.parts,
           response_spec=excluded.response_spec, prep_s=excluded.prep_s,
           interlocutor=excluded.interlocutor, rubric=excluded.rubric,
           model_answer=excluded.model_answer, examiner_notes=excluded.examiner_notes,
           timing_s=excluded.timing_s, target_item_ids=excluded.target_item_ids,
           level=excluded.level, format_version=excluded.format_version, updated_at=now()`,
        [
          t.id, t.format, t.variant, t.taskType, t.skill, t.level, t.formatVersion, t.prompt, t.label ?? null,
          t.items ? JSON.stringify(t.items) : null,
          parts ? JSON.stringify(parts) : null,
          t.responseSpec ? JSON.stringify(t.responseSpec) : null,
          t.prepS ?? null,
          bank ? JSON.stringify(bank) : null,
          t.rubric ? JSON.stringify(t.rubric) : null,
          t.modelAnswer ?? null,
          t.examinerNotes ?? [],
          t.timingS,
          t.targetItemIds ?? [],
        ]
      );
    }

    await client.query(
      `insert into content_exam_papers (id, format, variant, paper_no, sections, status)
       values ($1,$2,$3,$4,$5,'in_review')
       on conflict (id) do update set sections=excluded.sections, updated_at=now()`,
      [p.PAPER.id, p.PAPER.format, p.PAPER.variant, p.PAPER.paperNo, JSON.stringify(p.PAPER.sections)]
    );

    // Read the status back rather than announcing the one we insert with.
    // `status` is deliberately absent from both `do update set` lists, so a
    // re-run of an already-published paper leaves it published — and a message
    // saying "landing in_review" would then be plainly false to anyone reading
    // the log. Report what is actually there.
    const after = await client.query<{ status: string; n: string }>(
      `select status, count(*)::text as n from content_exam_tasks
        where format = $1 and variant = $2 group by status order by status`,
      [p.PAPER.format, p.PAPER.variant]
    );
    await client.query('commit');
    const states = after.rows.map((r) => `${r.n} ${r.status}`).join(', ');
    console.log(`  ✓ written · ${p.TASKS.length} tasks, ${p.PAPER.sections.length} sections · ${states}` +
      (carried ? ` · ${carried} rendered clip(s) carried across` : ''));
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

async function main() {
  const nums = process.argv.slice(2).filter((a) => /^\d+$/.test(a)).map(Number);
  if (nums.length === 0) throw new Error('give one or more paper numbers, e.g. `apply-paper.ts 2 3 4 5`');

  console.log(`\n  target: ${describeTarget()}`);

  // Validate EVERY paper before writing ANY of them. Half a batch applied is a
  // worse state than none, and the papers are independent only until one of
  // them fails.
  const loaded: Loaded[] = [];
  const problems: string[] = [];
  for (const n of nums) {
    const p = await load(n);
    loaded.push(p);
    for (const msg of validate(p)) problems.push(`${p.PAPER.variant}: ${msg}`);
  }

  if (problems.length) {
    console.error(`\n✗ ${problems.length} problem(s); nothing written:\n`);
    for (const msg of problems.slice(0, 40)) console.error(`  ${msg}`);
    process.exit(1);
  }

  for (const p of loaded) {
    const count = (ts: ExamTask[]) =>
      ts.reduce((n, t) => n + (t.parts ? t.parts.flatMap((x) => x.items).length : (t.items ?? []).length), 0);
    console.log(
      `\n  ${p.PAPER.id}\n` +
      `    CO ${count(p.CO_TASKS)} · CE ${count(p.CE_TASKS)} · EE ${p.EE_TASKS.length} · EO ${p.EO_TASKS.length}` +
      `  =  ${count(p.CO_TASKS) + count(p.CE_TASKS) + p.EE_TASKS.length + p.EO_TASKS.length} scored units`
    );
    if (!DRY_RUN) await write(p);
  }

  console.log(DRY_RUN
    ? '\n✓ dry run — everything valid, nothing written.\n'
    : '\n✓ applied. Statuses are as reported above; nothing reaches a learner until content:publish.\n');
}

main().catch((e) => { console.error(String(e)); process.exit(1); });
