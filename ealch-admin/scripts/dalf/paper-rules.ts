// DALF C1 — the rules every paper of this format must satisfy.
//
// Modelled on delf/paper-rules.ts and shaped the same way for the same reason:
// pure functions that RETURN violations, so paper-rules.test.ts can feed each
// one a deliberately broken input and watch it fire, and each paper's own test
// asserts the combined list is empty. A rule proved only against a paper that
// satisfies it has been proved to do nothing.
//
// Written BEFORE any DALF paper exists, against BLUEPRINT-dalf-c1.md and
// STANDARD-dalf-c1.md. The numbers below are the blueprint's; where a number is
// our calibration rather than a published fact the comment says so.
//
// ── Why the DELF rules could not simply be reused ───────────────────────────
//
// DELF B2 is three exercises worth 9 / 9 / 7, all four-option MCQ. DALF C1 is
// two listening parts worth 18 / 7 and ONE reading text worth 25, with three
// answer kinds (MCQ, short typed answer, vrai/faux with a quote) on three-option
// MCQ, a two-task writing épreuve built on a dossier, and an exposé prepared for
// an hour. Almost nothing transfers by parameter. The débat bank rules do, and
// are imported rather than copied.

import type { ExamPaper, ExamTask, ExamPart, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { spokenTranscript } from '../../../ealch-v2/src/utils/coPlayback.logic.ts';
import { fold, keywordsMet } from '../../../ealch-v2/src/utils/shortAnswer.logic.ts';
import { debateBalanceViolations, debateDepthViolations } from '../delf/paper-rules.ts';

export const FORMAT = 'dalf_c1' as const;
export const FORMAT_VERSION = 'dalf-c1-2026.10';

/** What every DALF paper module exports. `TOPICS` is the bank ids the paper
 *  spends (TOPICS-dalf-c1.md), data rather than a comment so the ledger can be
 *  enforced across papers. */
export type DalfPaper = {
  PAPER: ExamPaper;
  TASKS: ExamTask[];
  /** [part 1 (one long document, two plays), part 2 (short extracts, one play)] */
  CO_TASKS: ExamTask[];
  /** [the one reading text] */
  CE_TASKS: ExamTask[];
  /** [synthèse, essai argumenté] */
  PE_TASKS: ExamTask[];
  /** [exposé, entretien] per subject, in that order: two subjects = four tasks. */
  PO_TASKS: ExamTask[];
  TOPICS: readonly string[];
};

const parts = (t: ExamTask): ExamPart[] => t.parts ?? [];
const items = (t: ExamTask): QcmItem[] => parts(t).flatMap((p) => p.items ?? []);
const pointsOf = (t: ExamTask) => items(t).reduce((n, i) => n + (i.points ?? 1), 0);
const kindOf = (i: QcmItem) => i.kind ?? 'mcq';

/**
 * The FEI word-count rule, from the synthèse consigne: a word is anything
 * between two spaces, so « c'est-à-dire » is one word and « l'ai » is one.
 * Splitting on whitespace IS that rule; do not "improve" it by splitting on
 * apostrophes or hyphens, or a model answer the paper would accept at 238 words
 * reads here as 260.
 */
export const countWords = (text: string): number => text.split(/\s+/).filter(Boolean).length;

/** Words a candidate actually HEARS: speaker labels are stripped before render. */
const spokenWords = (text: string): number => countWords(spokenTranscript(text));

/* ── The instrument: points ───────────────────────────────────────────────── */

/**
 * CO 18 + 7, CE 25, PE 13 + 12, PO 25 per subject.
 *
 * Comprehension points live on the items. Production points live on the rubric
 * criteria; the app marks production from a graded band (delf.logic.ts), so the
 * rubric total is what the GRADER is told the task is worth, and a synthèse
 * rubric that adds up to 12 tells it the wrong thing about a 13-point task.
 */
export function pointViolations(p: Pick<DalfPaper, 'CO_TASKS' | 'CE_TASKS' | 'PE_TASKS' | 'PO_TASKS'>): string[] {
  const out: string[] = [];
  const co = p.CO_TASKS.map(pointsOf);
  if (co.join(',') !== '18,7') out.push(`CO: parts are worth ${co.join(', ')}, not 18 and 7`);
  const coTotal = co.reduce((a, b) => a + b, 0);
  if (coTotal !== 25) out.push(`CO: totals ${coTotal}, not 25`);

  const ce = p.CE_TASKS.reduce((n, t) => n + pointsOf(t), 0);
  if (ce !== 25) out.push(`CE: totals ${ce}, not 25`);

  const rubricTotal = (t?: ExamTask) => (t?.rubric?.criteria ?? []).reduce((n, c) => n + c.maxPoints, 0);
  const pe = p.PE_TASKS.map(rubricTotal);
  if (pe.join(',') !== '13,12') out.push(`PE: rubrics total ${pe.join(', ')}, not 13 (synthèse) and 12 (essai)`);

  for (let i = 0; i < p.PO_TASKS.length; i += 2) {
    const sum = rubricTotal(p.PO_TASKS[i]) + rubricTotal(p.PO_TASKS[i + 1]);
    if (sum !== 25) out.push(`PO subject ${i / 2 + 1}: exposé + entretien rubrics total ${sum}, not 25`);
  }
  return out;
}

/** Question counts the app advertises (EXAM_FORMAT_FACTS: CO 17, CE 12). The
 *  FEI sets these per paper; ours are fixed so the home card stays true. */
export function questionCountViolations(coTasks: ExamTask[], ceTasks: ExamTask[]): string[] {
  const out: string[] = [];
  const co = coTasks.map((t) => items(t).length);
  if (co.join(',') !== '10,7') out.push(`CO: ${co.join(', ')} questions, not 10 and 7`);
  const ce = ceTasks.reduce((n, t) => n + items(t).length, 0);
  if (ce !== 12) out.push(`CE: ${ce} questions, not 12`);
  return out;
}

/* ── The items ────────────────────────────────────────────────────────────── */

/**
 * Every comprehension item, by kind.
 *
 *   all    band c1, points present and on the half-point grid, 0.5 to 3.
 *   mcq    THREE options. The demo's every MCQ is A / B / C; a fourth option is
 *          a different guessing rate and not this format.
 *   short  keyword groups and a model, AND the model must meet its own
 *          keywords. A model that fails them means the author's corrigé would
 *          be sent to the AI grader as "unsure", so every right answer worded
 *          like the corrigé would be too.
 *   tfj    Vrai / Faux, at least one quote, and every quote must be FOUND in
 *          the part's text. The quote is what the candidate copies; a quote
 *          the text does not contain can never be matched, and the item is
 *          worth zero to everyone who answers it correctly.
 */
export function itemViolations(tasks: ExamTask[]): string[] {
  const out: string[] = [];
  for (const t of tasks) {
    parts(t).forEach((p) => {
      (p.items ?? []).forEach((it, i) => {
        const where = `${t.id} · ${p.label ?? '?'} item ${i}`;
        if (it.band !== 'c1') out.push(`${where}: band ${it.band ?? 'absent'}, and DALF C1 has one band`);
        if (typeof it.points !== 'number') out.push(`${where}: no points, so it would be weighted 1`);
        else if (Math.round(it.points * 2) !== it.points * 2) out.push(`${where}: ${it.points} is off the half-point grid`);
        else if (it.points < 0.5 || it.points > 3) out.push(`${where}: ${it.points} points, outside the 0.5-3 the format uses`);

        const kind = kindOf(it);
        if (kind === 'mcq') {
          if (it.opts.length !== 3) out.push(`${where}: ${it.opts.length} options, and DALF C1 MCQ has three`);
        } else if (kind === 'short') {
          const groups = it.keywords ?? [];
          if (groups.length === 0 || groups.some((g) => g.length === 0)) out.push(`${where}: short answer with no keyword groups`);
          if (!it.model?.trim()) out.push(`${where}: short answer with no model`);
          else if (groups.length && !keywordsMet(it.model, groups)) {
            out.push(`${where}: the model does not meet its own keywords, so the corrigé itself would mark "unsure"`);
          }
        } else if (kind === 'tfj') {
          if (it.opts.join('|') !== 'Vrai|Faux') out.push(`${where}: vrai/faux options are ${JSON.stringify(it.opts)}, not ["Vrai","Faux"]`);
          const quotes = it.quotes ?? [];
          if (quotes.length === 0) out.push(`${where}: vrai/faux with no justifying quote`);
          const hay = fold(p.text ?? '');
          for (const q of quotes) {
            if (!fold(q) || !hay.includes(fold(q))) out.push(`${where}: quote "${q.slice(0, 40)}" is not in the text`);
          }
        }
      });
    });
  }
  return out;
}

/**
 * A candidate who ticks the same letter throughout should score near a third.
 * Across CO and CE together, because CE alone carries only a handful of MCQ.
 * Vrai/faux is checked the same way at two options: a paper whose four tfj are
 * all Faux teaches "always Faux".
 */
export function keyScatterViolations(tasks: ExamTask[], maxShare = 0.5): string[] {
  const out: string[] = [];
  const all = tasks.flatMap(items);
  const mcq = all.filter((i) => kindOf(i) === 'mcq').map((i) => i.correct);
  if (mcq.length === 0) out.push('no MCQ to scatter');
  for (const opt of [0, 1, 2]) {
    const n = mcq.filter((k) => k === opt).length;
    if (mcq.length && n === 0) out.push(`MCQ option ${opt} is never the answer across ${mcq.length} questions`);
    else if (mcq.length && n / mcq.length > maxShare) out.push(`MCQ option ${opt} answers ${n} of ${mcq.length}`);
  }
  const tfj = all.filter((i) => kindOf(i) === 'tfj').map((i) => i.correct);
  if (tfj.length >= 2 && new Set(tfj).size === 1) out.push(`all ${tfj.length} vrai/faux answers are ${tfj[0] === 0 ? 'Vrai' : 'Faux'}`);
  return out;
}

/** The three answer modes are the format; a comprehension épreuve of MCQ only
 *  is DELF B2's new format, not DALF C1. CO needs MCQ and short; CE needs all
 *  three. */
export function kindMixViolations(coTasks: ExamTask[], ceTasks: ExamTask[]): string[] {
  const out: string[] = [];
  const kinds = (ts: ExamTask[]) => new Set(ts.flatMap(items).map(kindOf));
  const co = kinds(coTasks);
  for (const k of ['mcq', 'short'] as const) if (!co.has(k)) out.push(`CO has no ${k} questions`);
  const ce = kinds(ceTasks);
  for (const k of ['mcq', 'short', 'tfj'] as const) if (!ce.has(k)) out.push(`CE has no ${k} questions`);
  return out;
}

/* ── Listening ────────────────────────────────────────────────────────────── */

/** Part 1 is ONE document heard twice; part 2 is two or three extracts heard once. */
export function playCountViolations(coTasks: ExamTask[]): string[] {
  const out: string[] = [];
  if (coTasks.length !== 2) out.push(`CO has ${coTasks.length} parts, not 2`);
  const [p1, p2] = coTasks;
  if (p1) {
    const got = parts(p1).map((p) => p.playCount ?? 1);
    if (got.join(',') !== '2') out.push(`${p1.id}: part 1 plays ${got.join(',') || 'nothing'}, expected one document played twice`);
  }
  if (p2) {
    const got = parts(p2).map((p) => p.playCount ?? 1);
    if (got.length < 2 || got.length > 3) out.push(`${p2.id}: part 2 has ${got.length} extracts, expected 2 or 3`);
    if (got.some((n) => n !== 1)) out.push(`${p2.id}: part 2 plays ${got.join(',')}, and every extract is heard once`);
  }
  return out;
}

/**
 * Each document inside its band. The duration wins wherever a render has
 * measured it; before that the word count stands in, at the ~175 wpm C1 rate of
 * STANDARD-common §2, and the paper is still reported as unmeasured.
 *
 * Part 1: 6 to 8 min (360-480 s), FEI fact (« environ 6 minutes » on the demo,
 * six to eight on the cover). Part 2: 60-120 s per extract, OUR calibration:
 * the FEI gives no per-extract length, only the 10-minute ceiling.
 */
const CO_BANDS = [
  { name: 'part 1', durationS: [360, 480], words: [1050, 1400] },
  { name: 'part 2', durationS: [60, 120], words: [175, 350] },
] as const;

export function documentLengthViolations(coTasks: ExamTask[]): string[] {
  const out: string[] = [];
  coTasks.forEach((t, k) => {
    const band = CO_BANDS[k];
    if (!band) return; // playCountViolations reports the extra part
    for (const p of parts(t)) {
      const where = `${t.id} · ${p.label ?? '?'}`;
      if (typeof p.durationS === 'number') {
        if (p.durationS < band.durationS[0] || p.durationS > band.durationS[1]) {
          out.push(`${where}: ${p.durationS}s, outside the ${band.durationS[0]}-${band.durationS[1]}s ${band.name} runs`);
        }
        continue;
      }
      const w = spokenWords(p.text ?? '');
      out.push(
        w < band.words[0] || w > band.words[1]
          ? `${where}: no durationS yet, and ${w} words is outside the ${band.words[0]}-${band.words[1]} ${band.name} carries at 175 wpm`
          : `${where}: no durationS to check`
      );
    }
  });
  return out;
}

/** « Durée maximale des documents : 10 minutes ». Recorded, not playback: the
 *  long document counts once though it is heard twice. */
export function audioCeilingViolations(coTasks: ExamTask[], ceilingS = 600): string[] {
  const total = coTasks.flatMap(parts).reduce((n, p) => n + (p.durationS ?? 0), 0);
  return total <= ceilingS ? [] : [`${total}s of recorded audio against a ${ceilingS}s ceiling`];
}

/**
 * The clock covers every play and every published window: part 1 is 3 min to
 * read, play, 3 min, play, 5 min (so 480 s of answering after the read window);
 * part 2 is 50 s to read and 50 s to answer per extract.
 */
export function listeningClockViolations(coTasks: ExamTask[], clockS: number): string[] {
  let need = 0;
  for (const t of coTasks) {
    for (const p of parts(t)) {
      const plays = p.playCount ?? 1;
      need += (p.readWindowS ?? 0) + (p.durationS ?? 0) * plays + (plays === 2 ? 480 : 50);
    }
  }
  return need <= clockS ? [] : [`CO needs ${need}s of clock and the section gives ${clockS}s`];
}

/** The published read windows, set on the parts so the runner honours them. */
export function readWindowViolations(coTasks: ExamTask[]): string[] {
  const out: string[] = [];
  coTasks.forEach((t, k) => {
    const want = k === 0 ? 180 : 50;
    for (const p of parts(t)) {
      if (p.readWindowS !== want) out.push(`${t.id} · ${p.label ?? '?'}: readWindowS ${p.readWindowS ?? 'absent'}, expected ${want}`);
    }
  });
  return out;
}

/* ── Reading ──────────────────────────────────────────────────────────────── */

/** One text of ideas, 1500 to 2000 words (FEI fact), counted the FEI way. */
export function readingTextViolations(ceTasks: ExamTask[]): string[] {
  const out: string[] = [];
  const ps = ceTasks.flatMap(parts);
  if (ceTasks.length !== 1 || ps.length !== 1) out.push(`CE carries ${ps.length} texts in ${ceTasks.length} tasks, expected one text`);
  for (const p of ps) {
    const w = countWords(p.text ?? '');
    if (w < 1500 || w > 2000) out.push(`CE · ${p.label ?? '?'}: ${w} words, outside 1500-2000`);
  }
  return out;
}

/* ── Writing ──────────────────────────────────────────────────────────────── */

const dossierWords = (t: ExamTask) => parts(t).reduce((n, p) => n + countWords(p.text ?? ''), 0);

/**
 * Synthèse then essai.
 *
 *   synthèse  pe_short or pe_essay; a dossier of at least two documents,
 *             « environ 1 000 mots » (we hold 850-1150); responseSpec text
 *             200-240; a model answer that itself counts 200-240 the FEI way,
 *             because a model outside the range teaches the length penalty.
 *   essai     pe_essay; responseSpec text, minWords 250; model >= 250 words.
 */
export function writingViolations(peTasks: ExamTask[]): string[] {
  const out: string[] = [];
  if (peTasks.length !== 2) out.push(`PE has ${peTasks.length} tasks, expected synthèse and essai`);
  const [syn, essai] = peTasks;
  if (syn) {
    if (syn.taskType !== 'pe_short' && syn.taskType !== 'pe_essay') out.push(`${syn.id}: the synthèse is a ${syn.taskType}`);
    const docs = parts(syn).length;
    if (docs < 2) out.push(`${syn.id}: the synthèse dossier has ${docs} document(s), and a synthèse crosses at least two`);
    const w = dossierWords(syn);
    if (w < 850 || w > 1150) out.push(`${syn.id}: the dossier runs ${w} words, outside 850-1150 (about 1000)`);
    const rs = syn.responseSpec;
    if (rs?.kind !== 'text' || rs.minWords !== 200 || rs.maxWords !== 240) {
      out.push(`${syn.id}: responseSpec must be text, 200-240 words`);
    }
    const m = countWords(syn.modelAnswer ?? '');
    if (m < 200 || m > 240) out.push(`${syn.id}: the model synthèse counts ${m} words, outside 200-240`);
  }
  if (essai) {
    if (essai.taskType !== 'pe_essay') out.push(`${essai.id}: the essai is a ${essai.taskType}, not pe_essay`);
    const rs = essai.responseSpec;
    if (rs?.kind !== 'text' || rs.minWords !== 250) out.push(`${essai.id}: responseSpec must be text with minWords 250`);
    const m = countWords(essai.modelAnswer ?? '');
    if (m < 250) out.push(`${essai.id}: the model essai counts ${m} words, under 250`);
  }
  return out;
}

/* ── Speaking ─────────────────────────────────────────────────────────────── */

/**
 * Per subject: an exposé (po_monologue, 60 min prep, a dossier, 8-10 min) then
 * an entretien (po_debate, 15-20 min). Two subjects are drawn and one chosen,
 * so a paper carries two pairs.
 */
export function speakingViolations(poTasks: ExamTask[]): string[] {
  const out: string[] = [];
  if (poTasks.length !== 4) out.push(`PO has ${poTasks.length} tasks, expected two subjects of exposé + entretien`);
  for (let i = 0; i < poTasks.length; i += 2) {
    const expo = poTasks[i]!;
    const ent = poTasks[i + 1];
    if (expo.taskType !== 'po_monologue') out.push(`${expo.id}: the exposé is a ${expo.taskType}, not po_monologue`);
    if (expo.prepS !== 3600) out.push(`${expo.id}: prep is ${expo.prepS ?? 'absent'}s, expected one hour (3600)`);
    if (parts(expo).length < 1) out.push(`${expo.id}: the exposé has no dossier`);
    const rs = expo.responseSpec;
    if (rs?.kind !== 'audio' || rs.minDurationS !== 480 || rs.maxDurationS !== 600) {
      out.push(`${expo.id}: responseSpec must be audio, 480-600 s (8-10 min)`);
    }
    if (!ent) { out.push(`${expo.id}: no entretien follows the exposé`); continue; }
    if (ent.taskType !== 'po_debate') out.push(`${ent.id}: the entretien is a ${ent.taskType}, not po_debate`);
    if (!ent.debate) out.push(`${ent.id}: the entretien has no débat bank`);
    else out.push(...debateBalanceViolations(ent.debate).map((v) => `${ent.id}: ${v}`),
      ...debateDepthViolations(ent.debate, 12).map((v) => `${ent.id}: ${v}`));
    const es = ent.responseSpec;
    if (es?.kind !== 'audio' || es.minDurationS !== 900 || es.maxDurationS !== 1200) {
      out.push(`${ent.id}: responseSpec must be audio, 900-1200 s (15-20 min)`);
    }
  }
  return out;
}

/** Rubric, model answer, no atoms: STANDARD-common §7, on all four open tasks. */
export function openTaskViolations(peTasks: ExamTask[], poTasks: ExamTask[]): string[] {
  const out: string[] = [];
  for (const t of [...peTasks, ...poTasks]) {
    if ((t.rubric?.criteria ?? []).length < 3) out.push(`${t.id}: fewer than three rubric criteria`);
    if ((t.modelAnswer ?? '').length <= 200) out.push(`${t.id}: model answer too short to mark against`);
    if (t.targetItemIds !== undefined) out.push(`${t.id}: an open task has no atoms to route to`);
  }
  return out;
}

/* ── The paper ────────────────────────────────────────────────────────────── */

const ID_PAPER = /^paper\.dalf_c1\.(blanc-\d{2})\.(\d+)$/;
const ID_TASK = /^exam\.dalf_c1\.(blanc-\d{2})\.(co_mcq|ce_mcq|pe_short|pe_essay|po_monologue|po_debate)\.\d{3}$/;

/**
 * Identity: ids, format, formatVersion, level c1 on every task, and every id
 * naming the same variant as the paper. A task copied from another paper with
 * its id half-edited is how the TEF promoter once nearly published wrong rows.
 */
export function identityViolations(paper: ExamPaper, tasks: ExamTask[]): string[] {
  const out: string[] = [];
  const m = ID_PAPER.exec(paper.id);
  if (!m) out.push(`${paper.id}: not paper.dalf_c1.blanc-NN.N`);
  else {
    if (m[1] !== paper.variant) out.push(`${paper.id}: names ${m[1]} and the paper's variant is ${paper.variant}`);
    if (Number(m[2]) !== paper.paperNo) out.push(`${paper.id}: ends ${m[2]} and paperNo is ${paper.paperNo}`);
  }
  if (paper.format !== FORMAT) out.push(`${paper.id}: format ${paper.format}`);
  for (const t of tasks) {
    const tm = ID_TASK.exec(t.id);
    if (!tm) out.push(`${t.id}: not exam.dalf_c1.blanc-NN.<type>.NNN`);
    else {
      if (tm[1] !== paper.variant) out.push(`${t.id}: belongs to ${tm[1]}, not ${paper.variant}`);
      if (tm[2] !== t.taskType) out.push(`${t.id}: id says ${tm[2]} and taskType is ${t.taskType}`);
    }
    if (t.format !== FORMAT) out.push(`${t.id}: format ${t.format}`);
    if (t.variant !== paper.variant) out.push(`${t.id}: variant ${t.variant}, paper is ${paper.variant}`);
    if (t.level !== 'c1') out.push(`${t.id}: level ${t.level}, and every DALF C1 task is c1`);
    if (t.formatVersion !== FORMAT_VERSION) out.push(`${t.id}: formatVersion ${t.formatVersion}, expected ${FORMAT_VERSION}`);
  }
  return out;
}

/** The four clocks (EXAM_FORMAT_FACTS.dalf_c1). PO's hour of preparation is on
 *  the exposé's prepS, not inside the section figure. */
export function sectionClockViolations(paper: ExamPaper): string[] {
  const out: string[] = [];
  const want: Record<string, number> = { CO: 2400, CE: 3000, PE: 9000, PO: 1800 };
  const order = paper.sections.map((s) => s.skill).join(',');
  if (order !== 'CO,CE,PE,PO') out.push(`sections are ${order}, not CO,CE,PE,PO`);
  for (const sec of paper.sections) {
    if (sec.timingS !== want[sec.skill]) out.push(`${sec.skill}: ${sec.timingS}s, expected ${want[sec.skill]}s`);
    if (sec.blueprintId !== FORMAT_VERSION) out.push(`${sec.skill}: blueprintId ${sec.blueprintId}, expected ${FORMAT_VERSION}`);
  }
  return out;
}

/** Every DALF stimulus is text or audio; the schema refuses an image on a
 *  dalf_c1 part, and this asserts the paper does not lean on that refusal. */
export function imageViolations(tasks: ExamTask[]): string[] {
  return tasks.flatMap((t) => parts(t).filter((p) => p.imageRef != null).map(() => `${t.id}: DALF stimuli are text and audio`));
}

/* ── The topic ledger ─────────────────────────────────────────────────────── */

/**
 * No topic is reused across DALF papers (TOPICS-dalf-c1 rule 1). A paper spends
 * 7 or 8: one CO long, two or three CO short, one CE, one PE, two PO.
 */
export function topicLedgerViolations(papers: { variant: string; topics: readonly string[] }[]): string[] {
  const out: string[] = [];
  const seen = new Map<string, string>();
  for (const p of papers) {
    if (p.topics.length < 7 || p.topics.length > 8) out.push(`${p.variant} spends ${p.topics.length} topics, expected 7 or 8`);
    for (const t of p.topics) if (!/^DALF-\d{2,3}$/.test(t)) out.push(`${p.variant}: "${t}" is not a DALF bank id`);
    const dup = p.topics.filter((t, i) => p.topics.indexOf(t) !== i);
    for (const d of new Set(dup)) out.push(`${p.variant} spends ${d} twice in one paper`);
    for (const t of new Set(p.topics)) {
      const already = seen.get(t);
      if (already) out.push(`${t} is spent by both ${already} and ${p.variant}`);
      else seen.set(t, p.variant);
    }
  }
  return out;
}

/** Every rule that applies to one paper, in one call. */
export function dalfPaperViolations(p: DalfPaper): string[] {
  const co = p.PAPER.sections.find((s) => s.skill === 'CO');
  return [
    ...identityViolations(p.PAPER, p.TASKS),
    ...sectionClockViolations(p.PAPER),
    ...pointViolations(p),
    ...questionCountViolations(p.CO_TASKS, p.CE_TASKS),
    ...itemViolations([...p.CO_TASKS, ...p.CE_TASKS]),
    ...kindMixViolations(p.CO_TASKS, p.CE_TASKS),
    ...keyScatterViolations([...p.CO_TASKS, ...p.CE_TASKS]),
    ...playCountViolations(p.CO_TASKS),
    ...readWindowViolations(p.CO_TASKS),
    ...documentLengthViolations(p.CO_TASKS),
    ...audioCeilingViolations(p.CO_TASKS),
    ...listeningClockViolations(p.CO_TASKS, co?.timingS ?? 0),
    ...readingTextViolations(p.CE_TASKS),
    ...writingViolations(p.PE_TASKS),
    ...speakingViolations(p.PO_TASKS),
    ...openTaskViolations(p.PE_TASKS, p.PO_TASKS),
    ...imageViolations(p.TASKS),
  ];
}
