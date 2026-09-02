// Does grading actually work end to end?
//
// `grade-exam` had never been deployed, so every open task in the app has
// always come back "grading unavailable". A deploy that returns 200 to a
// health check proves nothing about that: what matters is whether a real task,
// with its real rubric and model answer, comes back with a band.
//
// Sends the paper's own EE Section A, using its MODEL ANSWER as the candidate
// response. That is the one input whose expected outcome is knowable: a model
// answer written to score at the task's target band should come back at or
// above it. Anything less means the grader is not reading the rubric.
//
// Usage: pnpm tsx scripts/tef-blanc01/probe-grader.ts
import './../env';
import { EE_A, EE_B, EO_A, EO_B } from './open.ts';

const TASKS = { A: EE_A, B: EE_B, EOA: EO_A, EOB: EO_B } as const;

async function main() {
  const pick = (process.argv[2] ?? 'A').toUpperCase() as keyof typeof TASKS;
  const EE_A = TASKS[pick] ?? TASKS.A;
  const url = process.env.SUPABASE_URL;
  const anon = process.env.SUPABASE_ANON_KEY ?? process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
  if (!url) throw new Error('SUPABASE_URL is not set');

  const body = {
    stimulus: EE_A.prompt,
    candidateResponse: EE_A.modelAnswer,
    rubric: EE_A.rubric,
    modelAnswer: EE_A.modelAnswer,
    targetBand: EE_A.level,
    lang: 'fr',
    // A fresh subject per run. The daily cap is per device, and a probe that
    // shares one bucket exhausts it in five calls and then reports 429s that
    // say nothing about whether grading works.
    deviceId: `probe-grade-exam-${Date.now()}`,
  };

  console.log(`\n→ ${url.replace(/^https:\/\//, '')}/functions/v1/grade-exam`);
  console.log(`  task: ${EE_A.id}  target band: ${EE_A.level}`);
  console.log(`  sending its own model answer (${EE_A.modelAnswer!.split(/\s+/).length} words)\n`);

  const started = Date.now();
  const res = await fetch(`${url.replace(/\/$/, '')}/functions/v1/grade-exam`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(anon ? { apikey: anon, Authorization: `Bearer ${anon}` } : {}),
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(60_000),
  });
  const took = ((Date.now() - started) / 1000).toFixed(1);
  const text = await res.text();

  console.log(`  HTTP ${res.status} in ${took}s`);
  let json: Record<string, unknown> | null = null;
  try { json = JSON.parse(text); } catch { /* not json */ }

  if (!res.ok || !json) {
    console.log(`  body: ${text.slice(0, 400)}\n`);
    process.exit(1);
  }

  console.log(`  band     : ${json.band}`);
  console.log(`  provider : ${json.provider}  (${json.model})`);
  console.log(`  estimate : ${json.practiceEstimate === true ? 'labelled a practice estimate' : 'NOT LABELLED — the client relies on this'}`);
  console.log(`  feedback : ${String(json.feedback).slice(0, 300)}\n`);

  const BANDS = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
  const got = BANDS.indexOf(String(json.band));
  const want = BANDS.indexOf(EE_A.level);
  if (got < 0) {
    console.log(`  ✗ "${json.band}" is not a band.\n`);
    process.exit(1);
  }
  console.log(
    got >= want
      ? `  ✓ graded ${json.band} against a ${EE_A.level} target — the model answer scores at its own band.\n`
      : `  ! graded ${json.band}, BELOW the ${EE_A.level} target. The model answer should reach its own band;\n` +
        `    either the rubric is not being read or the model answer is weaker than it claims.\n`
  );
}

main().catch((e) => { console.error(String(e)); process.exit(1); });
