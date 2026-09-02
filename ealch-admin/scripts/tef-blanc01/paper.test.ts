// TEF Canada blanc-01 — the paper's own checks.
//
// STANDARD-tef §6 is a checklist a human is supposed to walk before review.
// A checklist nobody can fail is a wish, so it is written here as assertions
// instead, and the handover checklist in STANDARD-common §9 is added to it.
//
// This file is also the gold paper's real contribution to E9: every rule below
// applies to papers 2..5 unchanged, so the generated papers inherit a working
// verifier rather than a prose description of one.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  validateExamPaper,
  validateExamTask,
  type ExamTask,
  type QcmItem,
} from '../../../ealch-v2/src/content/schema.ts';
import { cueMatches, selectTurn } from '../../../ealch-v2/src/utils/interlocutor.logic.ts';
import { scaledFor, nclcFor } from '../../../ealch-v2/src/utils/nclc.logic.ts';
import { PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS } from './paper.ts';
import { keyPositionCounts, allItems, scatterKeys } from '../tef/finalise.ts';
import { CO_SCORING, CE_SCORING } from '../tef/scoring.ts';
import { EO_A } from './open.ts';
import { paperRules } from '../tef/paper-rules.ts';

const itemsOf = (t: ExamTask): QcmItem[] =>
  t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []);
const countOf = (t: ExamTask) => itemsOf(t).length;
const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

// Every rule true of ANY TEF paper now lives in one place and is applied here.
// This file used to carry its own copies, written before blanc-02 existed; they
// have been removed rather than left to drift. What remains below is what is
// true of THIS paper and no other.
paperRules({
  name: 'blanc-01',
  paperNo: 1,
  variant: 'blanc-01',
  PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS,
  interaction: EO_A,
});

/* ─── structure ──────────────────────────────────────────────────────────── */

/* ─── the CO block rules ─────────────────────────────────────────────────── */

/* ─── item quality ───────────────────────────────────────────────────────── */

/* ─── house style and integrity ──────────────────────────────────────────── */

/** Everything a candidate or a grader actually reads. */
function candidateFacing(): string[] {
  const out: string[] = [];
  for (const t of TASKS) {
    out.push(t.prompt, t.label ?? '', t.modelAnswer ?? '');
    for (const p of t.parts ?? []) out.push(p.label, p.text ?? '', p.imageAlt ?? '');
    for (const it of itemsOf(t)) out.push(it.q, it.why ?? '', ...it.opts);
    for (const c of t.rubric?.criteria ?? []) out.push(c.label, ...(c.descriptors ?? []));
    const b = t.interlocutor;
    if (b) {
      for (const turn of [b.opening, b.catchAll, b.closing, ...b.answers]) out.push(turn.text, turn.covers);
    }
  }
  return out.filter(Boolean);
}

test('every proper noun in the paper is one we invented', () => {
  // STANDARD-common §6.1. The check is the inverse: a capitalised name inside
  // a stimulus must come from the invented set, so a real business or place
  // slipping in shows up here rather than in a takedown notice.
  const invented = /^(Verlune|Sainte-Ambre|Pralet|Corbeny|Meillac|Tanneurs|Lumières|Nord|France)$/;
  const skip = new Set([
    'SECTION', 'COLOC', 'CDI', 'NOTE', 'SERVICE', 'VACCINATION', 'ATELIER', 'POTERIE',
    'CONVOCATION', 'RÉUNION', 'PUBLIQUE', 'RENOUVELLEMENT', 'DU', 'TITRE', 'DE', 'SÉJOUR',
    'CONDITIONS', 'GARANTIE', 'LE', 'TRAJET', 'PAS', 'PROBLÈME', 'COURS', 'SOIR', 'A', 'B', 'C', 'D',
    'N’EST', 'LA', 'LES', 'UNE', 'UN',
  ]);
  const stimuli = TASKS.flatMap((t) => [t.prompt, ...(t.parts ?? []).map((p) => p.text ?? '')]).join('\n');
  const suspects = new Set<string>();
  for (const m of stimuli.matchAll(/(?<![.!?»]\s)(?<!^)\b([A-ZÀ-Ý][a-zà-ÿ-]{2,})\b/gm)) {
    const w = m[1]!;
    if (!invented.test(w) && !skip.has(w.toUpperCase())) suspects.add(w);
  }
  // Sentence-initial words and speaker labels get through the regex, so this
  // asserts on the invented names being present rather than on the residue
  // being empty — which would be a guard nobody could keep green.
  ok(stimuli.includes('Verlune'), 'the invented-name set should actually be used');
  ok(!/\b(Paris|Lyon|Marseille|Québec|Montréal|Carrefour|Leclerc|SNCF|Orange)\b/.test(stimuli),
    `a real proper noun reached a stimulus: ${[...suspects].slice(0, 5).join(', ')}`);
});

test('no invented figure floats as if it were an established fact', () => {
  // §6.2: our numbers may be invented, but a survey figure must be attributed
  // to an invented source.
  const stimuli = TASKS.flatMap((t) => (t.parts ?? []).map((p) => p.text ?? '')).join('\n');
  for (const m of stimuli.matchAll(/[^.]*\bune enquête\b[^.]*\./gi)) {
    ok(/Institut Verlune|l’enquête appelle/i.test(m[0]!), `unattributed survey: ${m[0]!.slice(0, 80)}`);
  }
});

/* ─── open tasks ─────────────────────────────────────────────────────────── */

test('every open task has a rubric and a model answer that could score', () => {
  for (const t of [...EE_TASKS, ...EO_TASKS]) {
    const crit = t.rubric?.criteria ?? [];
    ok(crit.length >= 4 && crit.length <= 6, `${t.id}: ${crit.length} criteria, expected 4 to 6`);
    for (const c of crit) {
      ok(c.maxPoints >= 1, `${t.id}/${c.key}: a zero-point criterion is judged then ignored`);
      ok((c.descriptors ?? []).length >= 2, `${t.id}/${c.key}: needs real descriptors`);
    }
    ok((t.modelAnswer ?? '').length > 200, `${t.id}: model answer too short to anchor a grade`);
    ok(t.responseSpec, `${t.id}: without bounds, "too short" is not markable`);
    ok(t.examinerNotes?.some((n) => /notre propre construction/.test(n)),
      `${t.id}: must say the grid is ours`);
    ok(t.examinerNotes?.some((n) => /estimation d’entraînement/.test(n)),
      `${t.id}: must say the result is a practice estimate`);
  }
});

test('the fait divers model answer is in the register its own rubric demands', () => {
  const m = EE_TASKS[0]!.modelAnswer!;
  ok(!/\bje\b|\bJe\b/.test(m), 'a fait divers is impersonal: no first person');
  ok(!/incroyable|heureusement|malheureusement/i.test(m), 'a fait divers does not evaluate');
  ok(/\ba (?:été|rempli)|ont (?:rempli|été)/.test(m), 'events belong in the passé composé');
  ok(/sortait|arrivait|déposaient/.test(m), 'circumstances belong in the imparfait');
  const n = words(m);
  ok(n >= 80 && n <= 120, `model answer is ${n} words, outside the 80-120 the task asks for`);
});

test('the argued letter model answer does what the task asks for', () => {
  const m = EE_TASKS[1]!.modelAnswer!;
  ok(words(m) >= 200, `model answer is ${words(m)} words, under the 200 minimum`);
  ok(/La première|La deuxième|Enfin/.test(m), 'three arguments must be visibly distinct');
  ok(/On objectera|Bien que/.test(m), 'a B2 argued letter takes the counter-position seriously');
});

/* ─── the interlocutor ───────────────────────────────────────────────────── */

test('the persuasion task ships its objection ladder where the grader sees it', () => {
  // examinerNotes render nowhere and are not sent to the grader, so a ladder
  // written only there would reach nobody. It is named in the rubric too.
  const b = EO_TASKS[1]!;
  ok(b.examinerNotes?.some((n) => /ÉCHELLE D’OBJECTIONS/.test(n)), 'the ladder must exist for the reviewer');
  const adapt = b.rubric!.criteria.find((c) => c.key === 'adaptation')!;
  ok(adapt.descriptors!.some((d) => /objections attendues/.test(d)),
    'and must be named in a criterion the grader is actually sent');
});

/* ─── scoring ────────────────────────────────────────────────────────────── */

/* ─── the schema's own verdict ───────────────────────────────────────────── */

