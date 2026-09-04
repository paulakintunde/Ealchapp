// TEF Canada, Examen 1 (`blanc-01`) — the gold paper.
//
// Four épreuves, 17 tasks, 84 scored units, authored by hand against
// BLUEPRINT-tef-canada.md and STANDARD-tef-canada.md. This is the template
// every later TEF paper is generated against, so a structural defect here
// costs once and a missed one costs five times.
//
// The content lives in scripts/tef-blanc01/. This file only validates it and
// writes it.
//
//   common.ts    the topic ledger and the shared constants
//   co.ts        listening blocks A to D
//   co-efg.ts    listening blocks E, F and G
//   ce.ts        reading blocks A, B, C and D+E
//   ce-fg.ts     reading blocks F and G
//   open.ts      the two written tasks and the two spoken ones
//   scoring.ts   the four raw-to-scaled ladders and the NCLC ranges
//   finalise.ts  the answer-key scatter
//   paper.ts     the assembled paper
//   paper.test.ts  STANDARD §6 and §9 as assertions rather than a wish list
//
// EVERYTHING LANDS in_review. `generatedBy` is 'llm', honestly: an AI drafted
// this paper and no human has yet read a word of it. The open tasks are
// 100%-review tier regardless (reviewTier.ts). Review all four sections at
// /admin/content/exams before publishing.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-tef-blanc01.ts --dry-run    validate and report
//   pnpm tsx scripts/author-tef-blanc01.ts              apply, one transaction

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import { validateExamPaper, validateExamTask, type ExamTask } from '../../ealch-v2/src/content/schema.ts';
import { PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS } from './tef-blanc01/paper.ts';
// Shared with scripts/tef/apply-paper.ts. The local copy here covered `parts`
// only, so an authoring run after a render wiped the interlocutor's thirteen
// clips off a PUBLISHED paper. See merge-rendered.ts.
import { mergeRenderedParts, mergeRenderedBank } from './exam/merge-rendered.ts';

const DRY_RUN = process.argv.includes('--dry-run');

function main() {
  console.log(`\nTEF Canada — Examen 1 (${PAPER.id})`);
  console.log(`  target: ${describeTarget()}`);

  /* ── validate before anything is written ─────────────────────────────── */

  const problems: string[] = [];
  for (const t of TASKS) {
    for (const i of validateExamTask(t)) problems.push(`${t.id} · ${i.path}: ${i.message}`);
  }
  for (const i of validateExamPaper(PAPER)) problems.push(`${PAPER.id} · ${i.path}: ${i.message}`);

  // The counts the blueprint fixes. Asserted here as well as in the test,
  // because the test protects the source and this protects the write: a script
  // that can put 39 questions in a 40-question épreuve will eventually do it.
  const count = (ts: typeof TASKS) =>
    ts.reduce((n, t) => n + (t.parts ? t.parts.flatMap((p) => p.items).length : (t.items ?? []).length), 0);
  if (count(CO_TASKS) !== 40) problems.push(`CO has ${count(CO_TASKS)} questions, expected 40`);
  if (count(CE_TASKS) !== 40) problems.push(`CE has ${count(CE_TASKS)} questions, expected 40`);
  if (EE_TASKS.length !== 2) problems.push(`EE has ${EE_TASKS.length} tasks, expected 2`);
  if (EO_TASKS.length !== 2) problems.push(`EO has ${EO_TASKS.length} tasks, expected 2`);

  if (problems.length) {
    console.error(`\n✗ ${problems.length} problem(s); nothing written:\n`);
    for (const p of problems.slice(0, 40)) console.error(`  ${p}`);
    process.exit(1);
  }

  console.log(`  CO ${count(CO_TASKS)} · CE ${count(CE_TASKS)} · EE ${EE_TASKS.length} · EO ${EO_TASKS.length}` +
    `  =  ${count(CO_TASKS) + count(CE_TASKS) + EE_TASKS.length + EO_TASKS.length} scored units`);
  console.log(`  ${TASKS.length} tasks, ${PAPER.sections.length} sections`);
  // Not "landing in_review": `status` is absent from the do-update lists, so a
  // re-run of this paper AFTER it was published leaves it published. Saying
  // otherwise would tell a reader the live paper had just been demoted.
  console.log('  new tasks land in_review; any already published stay published');

  if (DRY_RUN) {
    console.log('\n✓ dry run — everything valid, nothing written.\n');
    return;
  }
  return write();
}

async function write() {
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
      [PAPER.format, PAPER.variant]
    );
    const prior = new Map(priorRows.rows.map((r) => [r.id, r]));

    for (const t of TASKS) {
      await client.query(
        `insert into content_exam_tasks
           (id, format, variant, task_type, skill, level, format_version, prompt, label,
            items, parts, response_spec, prep_s, interlocutor, rubric, model_answer,
            examiner_notes, timing_s, target_item_ids, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10::jsonb,$11::jsonb,$12::jsonb,$13,$14::jsonb,
                 $15::jsonb,$16,$17,$18,$19,'in_review','llm')
         on conflict (id) do update set
           prompt=excluded.prompt, label=excluded.label, items=excluded.items, parts=excluded.parts,
           response_spec=excluded.response_spec, prep_s=excluded.prep_s,
           interlocutor=excluded.interlocutor, rubric=excluded.rubric,
           model_answer=excluded.model_answer, examiner_notes=excluded.examiner_notes,
           timing_s=excluded.timing_s, target_item_ids=excluded.target_item_ids,
           level=excluded.level, format_version=excluded.format_version, updated_at=now()`,
        [
          t.id, t.format, t.variant, t.taskType, t.skill, t.level, t.formatVersion, t.prompt,
          t.label ?? null,
          t.items ? JSON.stringify(t.items) : null,
          t.parts ? JSON.stringify(mergeRenderedParts(t.parts, prior.get(t.id)?.parts ?? null)) : null,
          t.responseSpec ? JSON.stringify(t.responseSpec) : null,
          t.prepS ?? null,
          t.interlocutor ? JSON.stringify(mergeRenderedBank(t.interlocutor, prior.get(t.id)?.interlocutor ?? null)) : null,
          t.rubric ? JSON.stringify(t.rubric) : null,
          t.modelAnswer ?? null,
          t.examinerNotes ?? [],
          t.timingS,
          t.targetItemIds ?? [],
        ]
      );
    }

    await client.query(
      // content_exam_papers carries no provenance columns: a paper is a
      // container, and the provenance that matters is on the tasks inside it.
      `insert into content_exam_papers (id, format, variant, paper_no, sections, status)
       values ($1,$2,$3,$4,$5::jsonb,'in_review')
       on conflict (id) do update set sections=excluded.sections, updated_at=now()`,
      [PAPER.id, PAPER.format, PAPER.variant, PAPER.paperNo, JSON.stringify(PAPER.sections)]
    );

    // Read the status back rather than asserting the one we insert with: this
    // paper is published, and `status` is absent from the do-update lists so it
    // stays that way. Claiming "all in_review" would misreport the live paper.
    const after = await client.query<{ status: string; n: string }>(
      `select status, count(*)::text as n from content_exam_tasks
        where format = $1 and variant = $2 group by status order by status`,
      [PAPER.format, PAPER.variant]
    );
    await client.query('commit');
    const states = after.rows.map((r) => `${r.n} ${r.status}`).join(', ');
    console.log(
      `\n✓ applied: ${TASKS.length} tasks and 1 paper · ${states}.\n` +
      '  Review all four sections at /admin/content/exams before publishing.\n' +
      '  Nothing reaches a phone until the rows are published AND content:publish runs.\n'
    );
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

Promise.resolve(main()).catch((e) => {
  console.error(e);
  process.exit(1);
});
