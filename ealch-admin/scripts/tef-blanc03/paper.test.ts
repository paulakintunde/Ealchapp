// TEF Canada blanc-03 — the paper's own checks.
//
// Every rule true of ANY TEF paper lives in `../tef/paper-rules.ts` and is
// applied by the single call below. What remains here is what is true of THIS
// paper and no other: its own arithmetic, its own names, its own block-G order.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import type { ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { paperRules } from '../tef/paper-rules.ts';
import { PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS } from './paper.ts';
import { EO_A } from './open.ts';

const itemsOf = (t: ExamTask): QcmItem[] => (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []));

paperRules({
  name: 'blanc-03',
  paperNo: 3,
  variant: 'blanc-03',
  PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS,
  interaction: EO_A,
});

/* ─── this paper's own content ───────────────────────────────────────────── */

test('blanc-03 shares no invented place name with the earlier papers', () => {
  // A candidate sitting all three should not meet Sainte-Ambre or Nervaux again.
  // Names are the cheapest thing to reuse by accident: they are typed from
  // memory rather than drawn from anywhere.
  const mine = JSON.stringify(TASKS);
  for (const name of [
    'Sainte-Ambre', 'Verlune', 'Pralet', 'Corbeny', 'Meillac',
    'Nervaux', 'Chantoise', 'Beaulieu-le-Haut', 'Vaudroy', 'Ferrand-sur-Aize',
  ]) {
    ok(!mine.includes(name), `${name} belongs to an earlier paper and appears in blanc-03`);
  }
  // And this paper's own names must be present, or the check above passes for
  // the wrong reason.
  for (const name of ['Aubercy', 'Grandvaux', 'Pierrefonte', 'Valcourt']) {
    ok(mine.includes(name), `${name} is declared in common.ts but appears nowhere`);
  }
});

test('blanc-03 shares no document with either earlier paper', async () => {
  // The real risk when a paper is written from a template: a document carried
  // over with its numbers changed and its sentences intact.
  //
  // DOCUMENTS only. Comparing question stems too would flag «Espace (1)» and
  // other formulaic labels, which are identical in every paper by design.
  const one = await import('../tef-blanc01/paper.ts');
  const two = await import('../tef-blanc02/paper.ts');
  const stimuli = (tasks: ExamTask[]) =>
    tasks.flatMap((t) => (t.parts ?? []).map((p) => p.text ?? '')).filter((s) => s.length > 40);

  const theirs = new Set([...stimuli(one.TASKS), ...stimuli(two.TASKS)]);
  const shared = stimuli(TASKS).filter((s) => theirs.has(s));
  strictEqual(shared.length, 0, `shared with an earlier paper:\n  ${shared.slice(0, 3).join('\n  ')}`);
});

test('the computed options in CE-A and CE-DE are actually right', () => {
  // Three items are arithmetic rather than lookup, and a wrong key there is
  // invisible to every structural check: the option list looks well formed.
  const a = itemsOf(CE_TASKS[0]!);
  const pressing = a.find((i) => i.q.includes('service express'))!;
  strictEqual(pressing.opts[pressing.correct], '27 €');
  strictEqual(18 * 1.5, 27);

  const de = itemsOf(CE_TASKS[3]!);
  const acompte = de.find((i) => i.q.includes('à la réservation'))!;
  strictEqual(acompte.opts[acompte.correct], '267 €');
  strictEqual(890 * 0.3, 267);

  const trois = de.find((i) => i.q.includes('entrée, un plat et un dessert'))!;
  strictEqual(trois.opts[trois.correct], '24 €');
});

test('the CE-A brocante item is consistent with its own timetable', () => {
  // The key rests on a time stated in the document. If the schedule ever moves,
  // this fails rather than shipping a key that no longer follows.
  const doc = (CE_TASKS[0]!.parts ?? []).find((p) => p.label.includes('brocante'))!;
  ok(doc.text!.includes('non occupés à 8 h sont réattribués'), 'the reattribution rule is what the key rests on');
  ok(doc.text!.includes('après 7 h 30'), 'the vehicle rule must stay, it is the distractor');
  const item = doc.items.find((i) => i.q.includes('8 h 15'))!;
  strictEqual(item.opts[item.correct], 'Son emplacement a déjà été donné à quelqu’un d’autre');
});

test('block G runs its seventeen documents without repeating a sub-type in a row', () => {
  // The plan asserts this on the plan; this asserts it on what was authored,
  // which is the thing a candidate meets.
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

test('block F routes its miss to items that exist at its own band', () => {
  // `ecole`, the situation's own theme, carries nothing above A2. A C1 reportage
  // routing a miss there would send the learner A1 school vocabulary, so this
  // block routes to `examens-et-diplomes` instead. Asserted because the
  // substitution is easy to undo by regenerating ITEMS.
  const f = CO_TASKS[5]!;
  ok((f.targetItemIds ?? []).length > 0, 'block F routes nowhere');
  for (const id of f.targetItemIds ?? []) {
    ok(/^fr\.b[12]\./.test(id), `${id} is below B1, and block F is a C1 item`);
  }
});

test('the EE Section B prompt names the objection the letter must answer', () => {
  // The rubric marks whether the counter-position was taken seriously. If the
  // prompt does not state it, the criterion marks something never asked for.
  const b = EE_TASKS[1]!;
  ok(/brochure tarifaire vaut information/.test(b.prompt), 'the objection is missing from the prompt');
  const crit = b.rubric!.criteria.find((c) => c.key === 'contradiction')!;
  ok(crit.descriptors!.some((d) => d.includes('brochure tarifaire vaut information')),
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
