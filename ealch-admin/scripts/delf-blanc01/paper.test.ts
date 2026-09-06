// DELF B2 blanc-01, against the format's rules.
//
// There is no scripts/delf/paper-rules.ts yet, on purpose. The TCF rules module
// earns its keep because five papers share it; extracting one for a single
// paper would be guessing at what papers 2 to 5 need. When paper 2 is authored,
// what has proved general here moves out — and what is specific to blanc-01
// stays.
//
// The TCF rules could NOT have been reused as they are. `clockShortfalls`
// assumes one play per document, and this format's first two exercises play
// twice; using it here would have understated the clock by the whole length of
// two documents.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { validateExamPaper, validateExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { PAPER, TASKS, CO_TASKS, CE_TASKS, PE_TASKS, PO_TASKS } from './paper.ts';

const parts = (t: (typeof TASKS)[number]) => t.parts ?? [];
const items = (t: (typeof TASKS)[number]) => parts(t).flatMap((p) => p.items ?? []);
const pointsOf = (t: (typeof TASKS)[number]) =>
  items(t).reduce((n, i) => n + (i.points ?? 1), 0);

test('delf blanc-01: the schema accepts every task and the paper', () => {
  for (const t of TASKS) {
    const issues = validateExamTask(t);
    ok(issues.length === 0, `${t.id}: ${issues.map((i) => `${i.path} ${i.message}`).join(' · ')}`);
  }
  const p = validateExamPaper(PAPER);
  ok(p.length === 0, p.map((i) => `${i.path} ${i.message}`).join(' · '));
});

test('delf blanc-01: the weighting IS the instrument — 9, 9, 7 and 25', () => {
  // A weight typo is invisible question by question and changes the paper.
  // Both épreuves, exercise by exercise, then the total.
  for (const [name, tasks] of [['CO', CO_TASKS], ['CE', CE_TASKS]] as const) {
    deepStrictEqual(
      tasks.map(pointsOf),
      [9, 9, 7],
      `${name}: exercises must be worth 9, 9 and 7`
    );
    strictEqual(tasks.reduce((n, t) => n + pointsOf(t), 0), 25, `${name} must total 25`);
    deepStrictEqual(tasks.map((t) => items(t).length), [7, 7, 6], `${name}: 7, 7 and 6 questions`);
  }
});

test('delf blanc-01: every closed item carries a weight and sits at b2', () => {
  // Unlike TCF the band is constant, but it must still be present: `band` is
  // what the schema and the report read, and an untagged item reads as unknown
  // rather than as B2.
  for (const t of [...CO_TASKS, ...CE_TASKS]) {
    for (const [i, it] of items(t).entries()) {
      strictEqual(it.band, 'b2', `${t.id} item ${i}: DELF has one band`);
      ok(typeof it.points === 'number', `${t.id} item ${i}: no points, so it would be weighted 1`);
      ok(Math.round(it.points! * 2) === it.points! * 2, `${t.id} item ${i}: ${it.points} is off the half-point grid`);
    }
  }
});

test('delf blanc-01: exercises 1 and 2 play twice, exercise 3 plays once', () => {
  // The format fact this paper introduced to the pack. TCF's rule is "plays
  // once, everywhere"; that rule is TCF's, and applying it here would remove
  // the second listening the questions are designed around.
  deepStrictEqual(parts(CO_TASKS[0]!).map((p) => p.playCount), [2]);
  deepStrictEqual(parts(CO_TASKS[1]!).map((p) => p.playCount), [2]);
  deepStrictEqual(parts(CO_TASKS[2]!).map((p) => p.playCount), [1, 1, 1]);
});

test('delf blanc-01: the listening clock covers TWO plays of the long documents', () => {
  // The reason tcf/paper-rules.ts could not be reused. Counting each document
  // once understates exercises 1 and 2 by their whole length.
  const ANSWER_S = 8;
  let need = 0;
  for (const t of CO_TASKS) {
    for (const p of parts(t)) {
      need += (p.readWindowS ?? 0) + (p.durationS ?? 0) * (p.playCount ?? 1) + (p.items ?? []).length * ANSWER_S;
    }
  }
  const clock = PAPER.sections.find((s) => s.skill === 'CO')!.timingS;
  ok(need <= clock, `CO needs ${need}s and the clock gives ${clock}s`);
});

test('delf blanc-01: total recorded audio stays under the blueprint ceiling', () => {
  // The ceiling is on RECORDED duration — "durée maximale de l'ensemble des
  // documents" — so a document heard twice is still one document. The first
  // version of this multiplied by playCount and failed at 902s, which measured
  // playback time rather than the set of documents.
  //
  // Playback is bounded too, and separately: the CO clock test above adds every
  // play, both read windows and the answering time.
  const total = CO_TASKS.flatMap(parts).reduce((n, p) => n + (p.durationS ?? 0), 0);
  ok(total <= 15 * 60, `${total}s of recorded audio against a 900s ceiling`);
});

test('delf blanc-01: the attribution exercise is answerable', () => {
  // CE exercise 3 is a different exercise wearing MCQ clothing, and it fails in
  // ways an ordinary MCQ cannot. Each rule here is one of those ways.
  const ex3 = parts(CE_TASKS[2]!)[0]!;
  const speakers = ex3.items![0]!.opts;
  strictEqual(speakers.length, 4, 'four speakers');

  for (const it of ex3.items!) {
    // IN ORDER, not sorted. The first version of this sorted both sides before
    // comparing, so it passed while the six items really did present the names
    // in six different orders — the exact defect it was written to catch. A
    // candidate scanning down the page sees six different lists.
    deepStrictEqual(
      it.opts,
      speakers,
      'every item must offer the same four names in the same order'
    );
  }

  const answers = ex3.items!.map((i) => i.opts[i.correct]!);
  for (const s of speakers) {
    const n = answers.filter((a) => a === s).length;
    ok(n >= 1, `${s} answers nothing and is decoration`);
    ok(n <= answers.length / 2, `${s} answers ${n} of ${answers.length} items`);
  }
});

test('delf blanc-01: the answer key is spread across the options', () => {
  // The first version asserted only that not EVERY key was the same, which is
  // a bar the paper cleared with nineteen identical answers. It caught the
  // unscattered draft by luck rather than by design, because that draft was at
  // twenty out of twenty.
  //
  // A candidate who answers the same letter throughout should score near a
  // quarter, so no option may hold more than 40 percent, and every option must
  // be the answer at least once. Both épreuves, measured.
  for (const [name, tasks] of [['CO', CO_TASKS], ['CE', CE_TASKS]] as const) {
    const keys = tasks.flatMap((t) => items(t).map((i) => i.correct));
    const counts = new Map<number, number>();
    for (const k of keys) counts.set(k, (counts.get(k) ?? 0) + 1);

    for (const opt of [0, 1, 2, 3]) {
      const n = counts.get(opt) ?? 0;
      ok(n > 0, `${name}: option ${opt} is never the answer across ${keys.length} questions`);
      ok(
        n / keys.length <= 0.4,
        `${name}: option ${opt} answers ${n} of ${keys.length} — a candidate guessing it throughout scores too well`
      );
    }
  }
});

test('delf blanc-01: the debate can attack whichever side the candidate takes', () => {
  // THE rule for this bank, and the one the schema also enforces. Which side
  // they argue is unknown until they have spoken for five to seven minutes.
  const debate = PO_TASKS.find((t) => t.taskType === 'po_debate')!.debate!;
  for (const side of ['pour', 'contre'] as const) {
    const axes = debate.axes.filter((a) => a.against === side);
    ok(axes.length >= 3, `only ${axes.length} axes attack "${side}"; a debate runs 10 to 13 minutes`);
    ok(
      axes.some((a) => a.moves.some((m) => m.kind === 'concession')),
      `no concession probe against "${side}" — the characteristic B2 examiner move`
    );
    ok(
      axes.some((a) => a.moves.some((m) => m.kind === 'retreat')),
      `no retreat move against "${side}" — a candidate who folds must be asked why`
    );
  }
});

test('delf blanc-01: the debate has enough turns to fill its clock', () => {
  // The failure the whole design exists for. A TEF-shaped bank of seven answers
  // closes in about three minutes, and an examiner silent for the remaining ten
  // has broken the épreuve.
  const debate = PO_TASKS.find((t) => t.taskType === 'po_debate')!.debate!;
  for (const side of ['pour', 'contre'] as const) {
    const moves = debate.axes
      .filter((a) => a.against === side)
      .flatMap((a) => a.moves)
      .filter((m) => m.kind !== 'retreat');
    // At ~40s per exchange, the 600s floor needs 15 turns; the bank re-opens
    // its weakest axis after that, so the floor here is what it takes to get
    // most of the way there on fresh material.
    ok(moves.length >= 9, `only ${moves.length} non-retreat moves against "${side}"`);
  }
});

test('delf blanc-01: each section clock matches the blueprint', () => {
  const want: Record<string, number> = { CO: 1800, CE: 3600, PE: 3600, PO: 1200 };
  for (const sec of PAPER.sections) {
    strictEqual(sec.timingS, want[sec.skill], `${sec.skill}: ${sec.timingS}s`);
  }
  // Preparation is clocked on the task, never inside the section.
  const mono = PO_TASKS.find((t) => t.taskType === 'po_monologue')!;
  strictEqual(mono.prepS, 1800, 'thirty minutes with the document, before a word is spoken');
});

test('delf blanc-01: no image anywhere, which is what this format is', () => {
  // Measured from the official samples: every DELF stimulus is text or audio.
  // The schema refuses an image on a delf_b2 part; this asserts the paper does
  // not rely on that refusal.
  for (const t of TASKS) {
    for (const p of parts(t)) {
      strictEqual(p.imageRef, undefined, `${t.id}: DELF stimuli are text and audio`);
    }
  }
});

test('delf blanc-01: every open task carries a rubric and a model answer', () => {
  for (const t of [...PE_TASKS, ...PO_TASKS]) {
    ok((t.rubric?.criteria ?? []).length >= 3, `${t.label}: fewer than three criteria`);
    ok((t.modelAnswer ?? '').length > 200, `${t.label}: model answer too short to mark against`);
    deepStrictEqual(t.targetItemIds, undefined, `${t.label}: an open task has no atoms to route to`);
  }
  // The writing task's own instruction, which the grid scores rather than gates.
  strictEqual(PE_TASKS[0]!.responseSpec?.kind, 'text');
  strictEqual((PE_TASKS[0]!.responseSpec as { minWords?: number }).minWords, 250);
});
