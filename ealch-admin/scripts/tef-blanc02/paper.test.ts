// TEF Canada blanc-02 — the paper's own checks.
//
// The rules every TEF paper must satisfy live in `../tef/paper-rules.ts` and are
// applied by the single call below, so this paper inherits blanc-01's verifier
// rather than a prose description of it. What remains here is what is true of
// THIS paper and no other: its own topics, its own figures, its own arithmetic.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { paperRules } from '../tef/paper-rules.ts';
import { PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS } from './paper.ts';
import { EO_A } from './open.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const itemsOf = (t: ExamTask): QcmItem[] => (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []));

paperRules({
  name: 'blanc-02',
  paperNo: 2,
  variant: 'blanc-02',
  PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS,
  interaction: EO_A,
});

/* ─── this paper's own content ───────────────────────────────────────────── */

test('blanc-02 shares no invented place name with blanc-01', () => {
  // A candidate sitting both papers should not meet Sainte-Ambre twice. The
  // names are the cheapest thing to reuse by accident, because they are typed
  // from memory rather than drawn from anywhere.
  const mine = JSON.stringify(TASKS);
  for (const name of ['Sainte-Ambre', 'Verlune', 'Pralet', 'Corbeny', 'Meillac']) {
    ok(!mine.includes(name), `${name} belongs to blanc-01 and appears in blanc-02`);
  }
  // And this paper's own names must actually be present, or the check above
  // passes for the wrong reason.
  for (const name of ['Nervaux', 'Chantoise', 'Vaudroy']) {
    ok(mine.includes(name), `${name} is declared in common.ts but appears nowhere`);
  }
});

test('blanc-02 shares no document or question with blanc-01', async () => {
  // The real risk when a paper is written from a template: a document gets
  // carried over with its numbers changed and its sentences intact.
  //
  // Compares the OBJECTS, not the source text. A first version scanned for long
  // string literals and flagged three "shared" strings that were the block
  // prompts — «Vous allez entendre quatre annonces…» — which are the format's
  // own instructions and are supposed to be identical in every paper. Scanning
  // source cannot tell a prompt from a transcript; the parsed task can.
  const one = await import('../tef-blanc01/paper.ts');
  // DOCUMENTS only, not question stems. Including stems flagged «Espace (1)»,
  // «Espace (2)» and «Quelle solution est retenue ?» — a gap label is identical
  // in every paper by design, and a formulaic stem is not a carried-over
  // document. The defect this guards is a stimulus reused with its numbers
  // changed and its sentences intact, and a stimulus is long.
  const stimuli = (tasks: ExamTask[]) =>
    tasks.flatMap((t) => (t.parts ?? []).map((p) => p.text ?? '')).filter((s) => s.length > 40);

  const theirs = new Set(stimuli(one.TASKS));
  const shared = stimuli(TASKS).filter((s) => theirs.has(s));
  strictEqual(shared.length, 0, `shared with blanc-01:\n  ${shared.slice(0, 3).join('\n  ')}`);
});

test('the CE-DE arithmetic in the options is actually right', () => {
  // Two items in block D+E are computed rather than looked up, and a wrong key
  // there is invisible to every other check in the suite: the option list looks
  // perfectly well formed.
  const de = CE_TASKS[3]!;
  const items = itemsOf(de);

  // 15,99 x 12 + 10 = 201,88
  const forfait = items.find((i) => i.q.includes('première année'))!;
  strictEqual(forfait.opts[forfait.correct], '201,88 €');
  strictEqual((15.99 * 12 + 10).toFixed(2), '201.88');

  // Card 45 EUR, saving 8 EUR a concert => 6 concerts to come out ahead.
  const carte = items.find((i) => i.q.includes('avantageuse'))!;
  strictEqual(carte.opts[carte.correct], '6 concerts');
  ok(5 * 8 < 45 && 6 * 8 > 45, 'the break-even is not at six concerts');
});

test('the CE-A annulation item is consistent with its own calendar', () => {
  // The key is a date computed from "48 h before Tuesday 14 h 30". If the
  // document ever moves the appointment, this fails rather than shipping a key
  // that no longer follows.
  const a = CE_TASKS[0]!;
  const doc = (a.parts ?? []).find((p) => p.label.includes('rappel'))!;
  ok(doc.text!.includes('mardi 4 mars à 14 h 30'), 'the appointment moved but the key was not recomputed');
  ok(doc.text!.includes('48 h'), 'the 48-hour rule is what the key rests on');
  const item = doc.items.find((i) => i.q.includes('annuler'))!;
  strictEqual(item.opts[item.correct], 'Jusqu’au dimanche 2 mars à 14 h 30');
});

test('block G runs its seventeen documents without repeating a sub-type in a row', () => {
  // The plan asserts this on the plan; this asserts it on what was actually
  // authored, which is the thing a candidate meets.
  const g = CO_TASKS[6]!;
  const labels = (g.parts ?? []).map((p) => p.label);
  strictEqual(labels.length, 17);
  const sub = (l: string) => l.split('·')[1]?.trim() ?? '';
  for (let i = 1; i < labels.length; i += 1) {
    ok(sub(labels[i - 1]!) !== sub(labels[i]!), `documents ${i} and ${i + 1} are both ${sub(labels[i]!)}`);
  }
  const counts: Record<string, number> = {};
  for (const l of labels) counts[sub(l)] = (counts[sub(l)] ?? 0) + 1;
  strictEqual(counts['échange'], 4);
  strictEqual(counts['répondeur'], 3);
  strictEqual(counts['information'], 3);
  strictEqual(counts['micro-trottoir'], 4);
  strictEqual(counts['consignes'], 3);
});

test('the EE Section B prompt names the objection the letter must answer', () => {
  // The rubric marks whether the counter-position was taken seriously. If the
  // prompt does not state it, the criterion marks something the candidate was
  // never asked to do.
  const b = EE_TASKS[1]!;
  ok(/l’énergie consommée doit/.test(b.prompt), 'the objection is missing from the prompt');
  const crit = b.rubric!.criteria.find((c) => c.key === 'contradiction')!;
  ok(crit.descriptors!.some((d) => d.includes('l’énergie consommée doit être payée')),
    'the rubric must quote the same objection the prompt sets');
});

test('the EO Section B objection ladder reaches the grader', () => {
  // examinerNotes render nowhere and are not sent to the grader, so a ladder
  // written only there would reach nobody. It has to be named in the rubric too.
  const b = EO_TASKS[1]!;
  ok(b.examinerNotes?.some((x) => /ÉCHELLE D’OBJECTIONS/.test(x)), 'the ladder must exist for the reviewer');
  const adapt = b.rubric!.criteria.find((c) => c.key === 'adaptation')!;
  ok(adapt.descriptors!.some((d) => /au-delà de la première/.test(d)),
    'the rubric must require more than the first objection');
});
