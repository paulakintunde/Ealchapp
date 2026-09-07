// DELF B2 tout public — the rules every paper of this format must satisfy.
//
// Extracted from delf-blanc01/paper.test.ts at the moment paper 2 was authored,
// which is when that file said it should be: "extracting one for a single paper
// would be guessing at what papers 2 to 5 need." Nothing here is new; all
// thirteen rules proved general, because all thirteen describe the FORMAT
// rather than blanc-01.
//
// ── Why pure functions rather than a shared test() ──────────────────────────
//
// The same reason tcf/paper-rules.ts is shaped this way: a rule proved only
// against a paper that satisfies it has been proved to do nothing. These return
// violations, so paper-rules.test.ts can feed each one a deliberately broken
// input and watch it fire, and each paper's own test asserts the list is empty.
//
// ── Why the TCF rules could not simply be reused ────────────────────────────
//
// `clockShortfalls` there assumes one play per document. This format's first two
// listening exercises play TWICE, and using the TCF rule would have understated
// the clock by the whole length of two documents. That is the difference that
// makes this a second module rather than a parameter on the first.

import type { ExamPaper, ExamTask, ExamDebate, ExamPart, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
// The renderer speaks `spokenTranscript(text)`, not `text` — the SPEAKER labels
// are stripped before anything reaches a voice. Counting the raw string would
// credit a seventeen-turn document with thirty-four words nobody hears, which
// is the difference between passing and failing a band this narrow.
import { spokenTranscript } from '../../../ealch-v2/src/utils/coPlayback.logic.ts';

/** What every DELF paper module exports. `TOPICS` is the eleven bank ids the
 *  paper spends — data, not a comment, so the ledger below can be enforced. */
export type DelfPaper = {
  PAPER: ExamPaper;
  TASKS: ExamTask[];
  CO_TASKS: ExamTask[];
  CE_TASKS: ExamTask[];
  PE_TASKS: ExamTask[];
  PO_TASKS: ExamTask[];
  TOPICS: readonly string[];
};

const parts = (t: ExamTask): ExamPart[] => t.parts ?? [];
const items = (t: ExamTask): QcmItem[] => parts(t).flatMap((p) => p.items ?? []);
const pointsOf = (t: ExamTask) => items(t).reduce((n, i) => n + (i.points ?? 1), 0);

/* ── The instrument ───────────────────────────────────────────────────────── */

/**
 * 9, 9, 7 — and 25.
 *
 * A weight typo is invisible question by question and changes the paper: the
 * 5/25 floor is precisely what four correct answers score under equal
 * weighting, so the difference between a weighted and an unweighted épreuve is
 * the difference between passing an épreuve and failing the diploma.
 */
export function weightingViolations(name: string, tasks: ExamTask[]): string[] {
  const out: string[] = [];
  const marks = tasks.map(pointsOf);
  const counts = tasks.map((t) => items(t).length);
  if (marks.join(',') !== '9,9,7') out.push(`${name}: exercises are worth ${marks.join(', ')}, not 9, 9 and 7`);
  const total = marks.reduce((a, b) => a + b, 0);
  if (total !== 25) out.push(`${name}: totals ${total}, not 25`);
  if (counts.join(',') !== '7,7,6') out.push(`${name}: has ${counts.join(', ')} questions, not 7, 7 and 6`);
  return out;
}

/** DELF has ONE band, but it must still be present: `band` is what the schema
 *  and the report read, and an untagged item reads as unknown rather than B2.
 *  Points must sit on the half-point grid the published grid marks in. */
export function itemViolations(tasks: ExamTask[]): string[] {
  const out: string[] = [];
  for (const t of tasks) {
    items(t).forEach((it, i) => {
      if (it.band !== 'b2') out.push(`${t.id} item ${i}: band ${it.band ?? 'absent'}, and DELF has one band`);
      if (typeof it.points !== 'number') out.push(`${t.id} item ${i}: no points, so it would be weighted 1`);
      else if (Math.round(it.points * 2) !== it.points * 2) out.push(`${t.id} item ${i}: ${it.points} is off the half-point grid`);
    });
  }
  return out;
}

/* ── Listening ────────────────────────────────────────────────────────────── */

/** Exercises 1 and 2 play twice, exercise 3 once. The format fact this pack
 *  learned from DELF; TCF's rule is "plays once, everywhere", and applying it
 *  here removes the second listening the questions are designed around. */
export function playCountViolations(coTasks: ExamTask[]): string[] {
  const out: string[] = [];
  const want = [[2], [2], [1, 1, 1]];
  coTasks.forEach((t, i) => {
    const got = parts(t).map((p) => p.playCount);
    const expect = want[i];
    if (!expect) { out.push(`CO has a fourth exercise: ${t.id}`); return; }
    if (got.join(',') !== expect.join(',')) out.push(`${t.id}: plays ${got.join(',')}, expected ${expect.join(',')}`);
  });
  return out;
}

/** The clock has to cover EVERY play, both read windows and the answering time.
 *  Counting each document once understates exercises 1 and 2 by their whole
 *  length — the specific reason the TCF module could not be reused. */
export function listeningClockViolations(coTasks: ExamTask[], clockS: number, answerS = 8): string[] {
  let need = 0;
  for (const t of coTasks) {
    for (const p of parts(t)) {
      need += (p.readWindowS ?? 0) + (p.durationS ?? 0) * (p.playCount ?? 1) + (p.items ?? []).length * answerS;
    }
  }
  return need <= clockS ? [] : [`CO needs ${need}s of clock and the section gives ${clockS}s`];
}

/**
 * Each document inside its own exercise's published length and word band.
 *
 * STANDARD-delf-b2 §3 gives THREE bands, one per exercise, not one band for
 * long documents and one for short:
 *
 *   | exercise | duration          | words     |
 *   | 1        | 2:45 – 3:15       | 450 – 530 |
 *   | 2        | 2:30 – 3:00       | 410 – 490 |
 *   | 3        | 60 – 80 s each    | 160 – 220 |
 *
 * The first version of this rule keyed on `playCount > 1` and used [150, 195]
 * — the UNION of exercises 1 and 2. A union band is looser than either of the
 * bands it unions, in both directions: it passes an exercise-1 document at
 * 152 s, which is thirteen seconds short of its own floor, and an exercise-2
 * document at 194 s, fourteen over its own ceiling. Nothing in the pack had
 * drifted that far yet, so the looseness was invisible.
 *
 * MISSING ENTIRELY UNTIL blanc-02, and it cost exactly what a missing rule
 * costs. Every other listening rule passed on that paper — the 900 s ceiling,
 * the two-play clock, the play counts — while its three short documents came
 * out at 38, 43 and 44 seconds. The ceiling and the clock are both UPPER
 * bounds, so a paper whose documents are far too short sails through all of
 * them.
 *
 * ── The word band stands in for the clock, and only until the clock exists ──
 *
 * STANDARD-delf-b2 §3 says so itself: "word targets are at a B2 broadcast rate
 * of ~165 wpm". They are the duration band divided by a reference rate, which
 * makes them an ESTIMATE of the duration rather than a second fact about the
 * document. So they are checked only while there is nothing better — before a
 * render, when `durationS` is still an author's guess.
 *
 * Enforcing both at once was tried and was wrong. It failed two blanc-02
 * documents that a candidate hears correctly: exercise 2 at 399 words runs
 * 160 s because that voice delivered 150 wpm, and exercise 3's first document
 * at 239 words runs 79 s because that one delivered 182 wpm. Both sit inside
 * their duration bands. A rule that fails correct audio for missing a proxy of
 * itself is a rule that will be deleted the first time it is inconvenient.
 *
 * The delivered rate across this pack's fifteen documents runs 142 to 182 wpm,
 * so the 165 wpm reference is a midpoint and not a promise — which is exactly
 * why the measured number wins wherever it exists.
 */
/** Words a candidate actually HEARS or reads, speaker labels removed. */
const spokenWords = (text: string): number =>
  spokenTranscript(text).split(/\s+/).filter(Boolean).length;

const CO_BANDS = [
  { name: 'exercice 1', durationS: [165, 195], words: [450, 530] },
  { name: 'exercice 2', durationS: [150, 180], words: [410, 490] },
  { name: 'exercice 3', durationS: [60, 80], words: [160, 220] },
] as const;

export function documentLengthViolations(coTasks: ExamTask[]): string[] {
  const out: string[] = [];
  coTasks.forEach((t, exercise) => {
    // Exercise 3 holds three documents and every one is measured against the
    // same band; exercises 1 and 2 hold one each. Indexing by TASK rather than
    // by part is what makes that fall out — and a fourth CO task would be a
    // paper that is not this format, so it is reported rather than guessed at.
    const band = CO_BANDS[exercise];
    if (!band) { out.push(`${t.id}: CO has a ${exercise + 1}th exercise and the format has three`); return; }
    for (const p of parts(t)) {
      const where = `${t.id} · ${p.label ?? '?'}`;
      const d = p.durationS;
      if (typeof d === 'number') {
        if (d < band.durationS[0] || d > band.durationS[1]) {
          out.push(`${where}: ${d}s, outside the ${band.durationS[0]}-${band.durationS[1]}s ${band.name} runs`);
        }
        continue;
      }
      // No clip yet, so the words answer for it — and the paper is still
      // reported as unmeasured, because an authored estimate is not a length.
      const w = spokenWords(p.text ?? '');
      out.push(
        w < band.words[0] || w > band.words[1]
          ? `${where}: no durationS yet, and ${w} words is outside the ${band.words[0]}-${band.words[1]} ${band.name} carries at 165 wpm`
          : `${where}: no durationS to check`
      );
    }
  });
  return out;
}

/**
 * The ceiling is on RECORDED duration, not playback.
 *
 * "durée maximale de l'ensemble des documents" — a document heard twice is
 * still one document. blanc-01's first version multiplied by playCount and
 * failed at 902s, which measured playback and had nothing to do with the rule.
 * Playback is bounded separately, by the clock rule above.
 */
export function audioCeilingViolations(coTasks: ExamTask[], ceilingS = 15 * 60): string[] {
  const total = coTasks.flatMap(parts).reduce((n, p) => n + (p.durationS ?? 0), 0);
  return total <= ceilingS ? [] : [`${total}s of recorded audio against a ${ceilingS}s ceiling`];
}

/* ── Reading exercise 3, the attribution ──────────────────────────────────── */

/**
 * CE exercise 3 is a different exercise wearing MCQ clothing, and it fails in
 * ways an ordinary MCQ cannot.
 *
 * The order check is IN ORDER, deliberately. blanc-01's first version sorted
 * both sides before comparing, so it passed while the six items really did
 * present the names in six different orders — the exact defect it was written
 * to catch, and a candidate scanning down the page sees six different lists.
 */
export function attributionViolations(ce3: ExamTask): string[] {
  const out: string[] = [];
  const part = parts(ce3)[0];
  if (!part?.items?.length) return [`${ce3.id}: the attribution exercise has no items`];

  const speakers = part.items[0]!.opts;
  if (speakers.length !== 4) out.push(`${ce3.id}: ${speakers.length} speakers, expected four`);

  part.items.forEach((it, i) => {
    if (it.opts.join('|') !== speakers.join('|')) {
      out.push(`${ce3.id} item ${i}: offers a different list, or the same names in a different order`);
    }
  });

  const answers = part.items.map((i) => i.opts[i.correct]);
  for (const s of speakers) {
    const n = answers.filter((a) => a === s).length;
    if (n < 1) out.push(`${ce3.id}: "${s}" answers nothing and is decoration`);
    if (n > answers.length / 2) out.push(`${ce3.id}: "${s}" answers ${n} of ${answers.length} items`);
  }
  return out;
}

/* ── The key ──────────────────────────────────────────────────────────────── */

/**
 * A candidate who answers the same letter throughout should score near a
 * quarter.
 *
 * blanc-01's first version asserted only that not EVERY key was the same, a bar
 * an unscattered paper clears with nineteen identical answers. It caught the
 * bad draft by luck, because that draft happened to be at twenty out of twenty.
 */
export function keyScatterViolations(name: string, tasks: ExamTask[], maxShare = 0.4): string[] {
  const out: string[] = [];
  const keys = tasks.flatMap((t) => items(t).map((i) => i.correct));
  if (keys.length === 0) return [`${name}: no closed questions to scatter`];
  for (const opt of [0, 1, 2, 3]) {
    const n = keys.filter((k) => k === opt).length;
    if (n === 0) out.push(`${name}: option ${opt} is never the answer across ${keys.length} questions`);
    else if (n / keys.length > maxShare) {
      out.push(`${name}: option ${opt} answers ${n} of ${keys.length}, so guessing it throughout scores too well`);
    }
  }
  return out;
}

/* ── The débat ────────────────────────────────────────────────────────────── */

/** Which side the candidate argues is unknown until they have spoken for five
 *  to seven minutes, so the bank must be able to attack either. */
export function debateBalanceViolations(debate: ExamDebate, minAxes = 3): string[] {
  const out: string[] = [];
  for (const side of ['pour', 'contre'] as const) {
    const axes = debate.axes.filter((a) => a.against === side);
    if (axes.length < minAxes) out.push(`only ${axes.length} axes attack "${side}"; a débat runs 10 to 13 minutes`);
    if (!axes.some((a) => a.moves.some((m) => m.kind === 'concession'))) {
      out.push(`no concession probe against "${side}" — the characteristic B2 examiner move`);
    }
    if (!axes.some((a) => a.moves.some((m) => m.kind === 'retreat'))) {
      out.push(`no retreat move against "${side}" — a candidate who folds must be asked why`);
    }
  }
  return out;
}

/** The failure the whole design exists for: a TEF-shaped bank of seven answers
 *  closes in about three minutes, and an examiner silent for the remaining ten
 *  has broken the épreuve. */
export function debateDepthViolations(debate: ExamDebate, minMoves = 9): string[] {
  const out: string[] = [];
  for (const side of ['pour', 'contre'] as const) {
    const moves = debate.axes
      .filter((a) => a.against === side)
      .flatMap((a) => a.moves)
      .filter((m) => m.kind !== 'retreat');
    if (moves.length < minMoves) out.push(`only ${moves.length} non-retreat moves against "${side}"`);
  }
  return out;
}

/* ── The paper ────────────────────────────────────────────────────────────── */

/** The four clocks, and the preparation that is clocked on the task rather than
 *  inside the section. */
export function sectionClockViolations(paper: ExamPaper, poTasks: ExamTask[]): string[] {
  const out: string[] = [];
  const want: Record<string, number> = { CO: 1800, CE: 3600, PE: 3600, PO: 1200 };
  for (const sec of paper.sections) {
    if (sec.timingS !== want[sec.skill]) out.push(`${sec.skill}: ${sec.timingS}s, expected ${want[sec.skill]}s`);
  }
  const mono = poTasks.find((t) => t.taskType === 'po_monologue');
  if (!mono) out.push('PO has no monologue');
  else if (mono.prepS !== 1800) out.push(`monologue prep is ${mono.prepS}s, expected thirty minutes`);
  return out;
}

/** Measured from the official samples: every DELF stimulus is text or audio.
 *  The schema refuses an image on a delf_b2 part; this asserts the paper does
 *  not rely on that refusal. */
export function imageViolations(tasks: ExamTask[]): string[] {
  return tasks
    .flatMap((t) => parts(t).map((p) => (p.imageRef === undefined ? null : `${t.id}: DELF stimuli are text and audio`)))
    .filter((x): x is string => x !== null);
}

export function openTaskViolations(peTasks: ExamTask[], poTasks: ExamTask[]): string[] {
  const out: string[] = [];
  for (const t of [...peTasks, ...poTasks]) {
    if ((t.rubric?.criteria ?? []).length < 3) out.push(`${t.label ?? t.id}: fewer than three rubric criteria`);
    if ((t.modelAnswer ?? '').length <= 200) out.push(`${t.label ?? t.id}: model answer too short to mark against`);
    if (t.targetItemIds !== undefined) out.push(`${t.label ?? t.id}: an open task has no atoms to route to`);
  }
  const pe = peTasks[0];
  if (pe) {
    if (pe.responseSpec?.kind !== 'text') out.push('the writing task does not ask for text');
    if ((pe.responseSpec as { minWords?: number } | undefined)?.minWords !== 250) {
      out.push('the writing task does not carry the 250-word instruction');
    }
  }
  return out;
}

/* ── The topic ledger ─────────────────────────────────────────────────────── */

/**
 * No topic is reused across DELF papers.
 *
 * TOPICS-delf-b2 rule 1, and until now it was a COMMENT in each paper's
 * common.ts. blanc-01's own note says why that is not enough: it "is how the
 * TCF topic ledger came to be implemented three times in ways that disagreed".
 * A comment cannot be checked, and the bank has 124 rows against five papers
 * spending 55 — the collision is not obvious by eye.
 *
 * Each paper exports `TOPICS` as data instead, and this reads them all at once.
 * Also the counts: a paper spends exactly eleven, and spending ten silently
 * means a slot was authored twice from one row.
 */
export function topicLedgerViolations(papers: { variant: string; topics: readonly string[] }[], perPaper = 11): string[] {
  const out: string[] = [];
  const seen = new Map<string, string>();

  for (const p of papers) {
    if (p.topics.length !== perPaper) {
      out.push(`${p.variant} spends ${p.topics.length} topics, expected ${perPaper}`);
    }
    const dupWithin = p.topics.filter((t, i) => p.topics.indexOf(t) !== i);
    for (const d of new Set(dupWithin)) out.push(`${p.variant} spends ${d} twice in one paper`);

    for (const t of new Set(p.topics)) {
      const already = seen.get(t);
      if (already) out.push(`${t} is spent by both ${already} and ${p.variant}`);
      else seen.set(t, p.variant);
    }
  }
  return out;
}

/** Every rule that applies to one paper, in one call. Returns violations so a
 *  caller asserts emptiness and reads the whole list at once rather than dying
 *  on the first. */
export function delfPaperViolations(p: DelfPaper): string[] {
  const co = p.PAPER.sections.find((s) => s.skill === 'CO');
  return [
    ...weightingViolations('CO', p.CO_TASKS),
    ...weightingViolations('CE', p.CE_TASKS),
    ...itemViolations([...p.CO_TASKS, ...p.CE_TASKS]),
    ...playCountViolations(p.CO_TASKS),
    ...documentLengthViolations(p.CO_TASKS),
    ...textLengthViolations(p.CE_TASKS),
    ...listeningClockViolations(p.CO_TASKS, co?.timingS ?? 0),
    ...audioCeilingViolations(p.CO_TASKS),
    ...(p.CE_TASKS[2] ? attributionViolations(p.CE_TASKS[2]) : ['CE has no third exercise']),
    ...keyScatterViolations('CO', p.CO_TASKS),
    ...keyScatterViolations('CE', p.CE_TASKS),
    ...sectionClockViolations(p.PAPER, p.PO_TASKS),
    ...imageViolations(p.TASKS),
    ...openTaskViolations(p.PE_TASKS, p.PO_TASKS),
    ...(() => {
      const debate = p.PO_TASKS.find((t) => t.taskType === 'po_debate')?.debate;
      if (!debate) return ['PO has no débat bank'];
      return [...debateBalanceViolations(debate), ...debateDepthViolations(debate)];
    })(),
  ];
}

/**
 * Each reading text inside its suit's published length.
 *
 * The sibling of documentLengthViolations, and it was missing for the same
 * reason: nothing measured it. The bank fixes 420 to 500 words for a
 * continuous text and 360 to 420 across the four signed pieces of the
 * attribution exercise, and blanc-03's first draft came in at 323 — under by a
 * fifth, with every other reading rule green.
 *
 * A short attribution set is not a cosmetic miss. Four positions in 320 words
 * is 80 words each, which is not enough to state a position AND the concession
 * that separates it from its neighbour, so the exercise degrades toward
 * matching a keyword to a name.
 *
 * Word-counted rather than character-counted because that is the unit the bank
 * publishes; French counts split on whitespace closely enough at this scale.
 */
export function textLengthViolations(ceTasks: ExamTask[]): string[] {
  const out: string[] = [];
  ceTasks.forEach((t, i) => {
    for (const p of parts(t)) {
      if (!p.text) { out.push(`${t.id}: no text to measure`); continue; }
      // Exercise 3 is the attribution set and carries a different budget.
      const attribution = i === 2;
      const [lo, hi] = attribution ? [360, 420] : [420, 500];
      const w = spokenWords(p.text);
      if (w < lo || w > hi) {
        out.push(`${t.id} · ${p.label ?? '?'}: ${w} words, outside the ${lo}-${hi} a ${attribution ? 'CE-O' : 'CE-T'} text runs`);
      }
    }
  });
  return out;
}
