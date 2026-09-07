// TEF Canada blanc-04 — the paper's own checks.
//
// Every rule true of ANY TEF paper lives in `../tef/paper-rules.ts` and is
// applied by the single call below. What remains here is true of THIS paper and
// no other: its own arithmetic, its own names, its own routings.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import type { ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { paperRules } from '../tef/paper-rules.ts';
import { PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS } from './paper.ts';
import { EO_A } from './open.ts';

const itemsOf = (t: ExamTask): QcmItem[] => (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []));

paperRules({
  name: 'blanc-04',
  paperNo: 4,
  variant: 'blanc-04',
  PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS,
  interaction: EO_A,
});

/* ─── this paper's own content ───────────────────────────────────────────── */

test('blanc-04 shares no invented place name with the earlier papers', () => {
  // A candidate sitting four papers should not meet the same village twice.
  // Names are the cheapest thing to reuse by accident: they are typed from
  // memory rather than drawn from anywhere.
  const mine = JSON.stringify(TASKS);
  for (const name of [
    'Sainte-Ambre', 'Verlune', 'Pralet', 'Corbeny', 'Meillac',
    'Nervaux', 'Chantoise', 'Beaulieu-le-Haut', 'Vaudroy', 'Ferrand-sur-Aize',
    'Aubercy', 'Grandvaux', 'Pierrefonte', 'Mesnil-Doré', 'Valcourt',
  ]) {
    ok(!mine.includes(name), `${name} belongs to an earlier paper and appears in blanc-04`);
  }
  // And this paper's own names must be present, or the check above passes for
  // the wrong reason.
  for (const name of ['Roquelaure', 'Bellevance', 'Tournoy', 'Marnac']) {
    ok(mine.includes(name), `${name} is declared in common.ts but appears nowhere`);
  }
});

test('blanc-04 shares no document with any earlier paper', async () => {
  // The real risk when a paper is written from a template: a document carried
  // over with its numbers changed and its sentences intact.
  //
  // DOCUMENTS only. Comparing question stems would flag «Espace (1)» and other
  // formulaic labels, which are identical in every paper by design.
  const earlier = await Promise.all([
    import('../tef-blanc01/paper.ts'),
    import('../tef-blanc02/paper.ts'),
    import('../tef-blanc03/paper.ts'),
  ]);
  const stimuli = (tasks: ExamTask[]) =>
    tasks.flatMap((t) => (t.parts ?? []).map((p) => p.text ?? '')).filter((s) => s.length > 40);

  const theirs = new Set(earlier.flatMap((m) => stimuli(m.TASKS)));
  const shared = stimuli(TASKS).filter((s) => theirs.has(s));
  strictEqual(shared.length, 0, `shared with an earlier paper:\n  ${shared.slice(0, 3).join('\n  ')}`);
});

test('the computed options in CE-A and CE-DE are actually right', () => {
  // Three items are arithmetic rather than lookup, and a wrong key there is
  // invisible to every structural check: the option list looks well formed.
  const a = itemsOf(CE_TASKS[0]!);

  // 1 point per 10 EUR, 100 points for an 8 EUR voucher => 1 000 EUR of spend.
  const fidelite = a.find((i) => i.q.includes('bon de 8'))!;
  strictEqual(fidelite.opts[fidelite.correct], '1 000 €');
  strictEqual(100 * 10, 1000);

  // 30 hours starts a second day, and a started day is due: 9 x 2.
  const consigne = a.find((i) => i.q.includes('30 heures'))!;
  strictEqual(consigne.opts[consigne.correct], '18 €');
  strictEqual(9 * 2, 18);

  // 4 weeks renewable once.
  const de = itemsOf(CE_TASKS[3]!);
  const pret = de.find((i) => i.q.includes('gardé au maximum'))!;
  strictEqual(pret.opts[pret.correct], '8 semaines');
  strictEqual(4 * 2, 8);
});

test('the CE-DE library item is consistent with its own document', () => {
  // The key is derived from two figures in the document. If either moves, this
  // fails rather than shipping a key that no longer follows.
  const doc = (CE_TASKS[3]!.parts ?? []).find((p) => p.label.includes('bibliothèque'))!;
  ok(doc.text!.includes('4 semaines, renouvelable une fois'), 'the loan rule is what the key rests on');
  ok(doc.text!.includes('1 semaine'), 'the DVD week must stay, it is the distractor');
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

test('blocks C and D route their misses to items that exist at their band', () => {
  // `musique` (block C's situation) and `la-ville` (block D's) carry NOTHING
  // above A2. Routing a B2 miss there would send the learner A2 vocabulary, so
  // C routes to questions-sociales/ethique and D to hebergement. Asserted
  // because regenerating ITEMS would silently undo the substitution.
  for (const [name, task] of [['C', CO_TASKS[2]!], ['D', CO_TASKS[3]!]] as const) {
    ok((task.targetItemIds ?? []).length > 0, `block ${name} routes nowhere`);
    for (const id of task.targetItemIds ?? []) {
      ok(/^fr\.b[12]\./.test(id), `block ${name}: ${id} is below B1, and the block is B2`);
    }
  }
});

test('the EE Section B prompt names the objection the letter must answer', () => {
  // The rubric marks whether the counter-position was taken seriously. If the
  // prompt does not state it, the criterion marks something never asked for.
  const b = EE_TASKS[1]!;
  ok(/présence sur site est nécessaire à la cohésion/.test(b.prompt), 'the objection is missing from the prompt');
  const crit = b.rubric!.criteria.find((c) => c.key === 'contradiction')!;
  ok(crit.descriptors!.some((d) => d.includes('présence sur site est nécessaire à la cohésion')),
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
