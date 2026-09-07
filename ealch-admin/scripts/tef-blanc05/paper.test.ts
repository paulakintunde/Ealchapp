// TEF Canada blanc-05 — the paper's own checks.
//
// Every rule true of ANY TEF paper lives in `../tef/paper-rules.ts` and is
// applied by the single call below. What remains here is true of THIS paper and
// no other: its own arithmetic, its own names, its own documents.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import type { ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { paperRules } from '../tef/paper-rules.ts';
import { PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS } from './paper.ts';
import { EO_A } from './open.ts';

const itemsOf = (t: ExamTask): QcmItem[] => (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []));

paperRules({
  name: 'blanc-05',
  paperNo: 5,
  variant: 'blanc-05',
  PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS,
  interaction: EO_A,
});

/* ─── this paper's own content ───────────────────────────────────────────── */

/** Every invented place the four earlier papers claimed. */
const TAKEN = [
  'Sainte-Ambre', 'Verlune', 'Pralet', 'Corbeny', 'Meillac',
  'Nervaux', 'Chantoise', 'Beaulieu-le-Haut', 'Vaudroy', 'Ferrand-sur-Aize',
  'Aubercy', 'Grandvaux', 'Pierrefonte', 'Mesnil-Doré', 'Valcourt',
  'Roquelaure', 'Bellevance', 'Tournoy', 'La Chapelle-aux-Bois', 'Marnac',
];

test('blanc-05 shares no invented place name with the earlier papers', () => {
  // A candidate sitting the whole pack should never meet the same village twice.
  // Names are the cheapest thing to reuse by accident, being typed from memory
  // rather than drawn from anywhere.
  const mine = JSON.stringify(TASKS);
  for (const name of TAKEN) {
    ok(!mine.includes(name), `${name} belongs to an earlier paper and appears in blanc-05`);
  }
  for (const name of ['Fontenay-le-Vieux', 'Sarlanges', 'Dourvin', 'Chastel']) {
    ok(mine.includes(name), `${name} is declared in common.ts but appears nowhere`);
  }
});

test('blanc-05 shares no document with any earlier paper', async () => {
  // The risk when a fifth paper is written from the same template: a document
  // carried over with its numbers changed and its sentences intact.
  //
  // DOCUMENTS only. Question stems would flag «Espace (1)» and other formulaic
  // labels, identical in every paper by design.
  const earlier = await Promise.all([
    import('../tef-blanc01/paper.ts'),
    import('../tef-blanc02/paper.ts'),
    import('../tef-blanc03/paper.ts'),
    import('../tef-blanc04/paper.ts'),
  ]);
  const stimuli = (tasks: ExamTask[]) =>
    tasks.flatMap((t) => (t.parts ?? []).map((p) => p.text ?? '')).filter((s) => s.length > 40);

  const theirs = new Set(earlier.flatMap((m) => stimuli(m.TASKS)));
  const shared = stimuli(TASKS).filter((s) => theirs.has(s));
  strictEqual(shared.length, 0, `shared with an earlier paper:\n  ${shared.slice(0, 3).join('\n  ')}`);
});

test('the computed options across the paper are actually right', () => {
  // Four items are arithmetic rather than lookup, and a wrong key there is
  // invisible to every structural check: the option list looks well formed.
  const a = itemsOf(CE_TASKS[0]!);
  const parking = a.find((i) => i.q.includes('14 jours'))!;
  strictEqual(parking.opts[parking.correct], '105 €');
  strictEqual(60 + 45, 105);

  const borne = a.find((i) => i.q.includes('4 heures'))!;
  strictEqual(borne.opts[borne.correct], 'Une heure est facturée 4 €');

  const de = itemsOf(CE_TASKS[3]!);
  const assurance = de.find((i) => i.q.includes('première année'))!;
  strictEqual(assurance.opts[assurance.correct], '205,20 €');
  strictEqual((19 * 12 * 0.9).toFixed(2), '205.20');

  const km = de.find((i) => i.q.includes('1 200 km'))!;
  strictEqual(km.opts[km.correct], '582 €');
  strictEqual(1000 * 0.52 + 200 * 0.31, 582);
});

test('the CE-DE documents still carry the figures their keys rest on', () => {
  // If a tariff ever moves, this fails rather than shipping a key that no longer
  // follows from the document.
  const [assur, bareme] = CE_TASKS[3]!.parts!;
  ok(assur!.text!.includes('19 €/mois'), 'the CONFORT price is what the arithmetic uses');
  ok(assur!.text!.includes('Réduction de 10 %'), 'the discount is what the arithmetic uses');
  ok(bareme!.text!.includes('0,52 € par kilomètre'), 'the first-tier rate is what the arithmetic uses');
  ok(bareme!.text!.includes('puis 0,31 €'), 'the second-tier rate is what the arithmetic uses');
});

test('block G runs its seventeen documents without repeating a sub-type in a row', () => {
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
  const b = EE_TASKS[1]!;
  ok(/badge d’accès relève de la seule sécurité des locaux/.test(b.prompt), 'the objection is missing from the prompt');
  const crit = b.rubric!.criteria.find((c) => c.key === 'contradiction')!;
  ok(crit.descriptors!.some((d) => d.includes('la seule sécurité des locaux')),
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
