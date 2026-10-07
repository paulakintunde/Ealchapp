// TEF Canada blanc-06 — the paper's own checks.
//
// Every rule true of ANY TEF paper lives in `../tef/paper-rules.ts` and is
// applied by the single call below. What remains here is true of THIS paper:
// its arithmetic, its names, its documents, its two C1 tasks (decision 41),
// and the key checks `../tef/key-scatter.test.ts` runs for papers 1-5, which
// that file does not yet list this paper for.
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import type { ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { paperRules } from '../tef/paper-rules.ts';
import { candidateFacing } from '../exam/task-shape.ts';
import { PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS, keysOf, looksPatterned } from './paper.ts';
import { EO_A } from './open.ts';
import { PLACES } from './common.ts';

const HERE = dirname(fileURLToPath(import.meta.url));
const itemsOf = (t: ExamTask): QcmItem[] => (t.parts ? t.parts.flatMap((p) => p.items) : (t.items ?? []));

paperRules({
  name: 'blanc-06',
  paperNo: 6,
  variant: 'blanc-06',
  PAPER, TASKS, CO_TASKS, CE_TASKS, EE_TASKS, EO_TASKS,
  interaction: EO_A,
});

/* ─── decision 41: the two C1 tasks ──────────────────────────────────────── */

test('only EE Section B and EO Section B are tagged c1', () => {
  const c1 = TASKS.filter((t) => t.level === 'c1').map((t) => `${t.skill} ${t.label}`);
  deepStrictEqual(c1, ['PE Section B', 'PO Section B']);
  strictEqual(EE_TASKS[0]!.level, 'b1');
  strictEqual(EO_TASKS[0]!.level, 'b1');
});

test('the C1 tasks keep the real TEF Section B format and timing', () => {
  const [, eeB] = EE_TASKS;
  const [, eoB] = EO_TASKS;
  strictEqual(eeB!.taskType, 'pe_essay');
  strictEqual(eeB!.timingS, 2100);
  deepStrictEqual(eeB!.responseSpec, { kind: 'text', minWords: 200 });
  strictEqual(eoB!.taskType, 'po_monologue');
  strictEqual(eoB!.timingS, 600);
  for (const t of [eeB!, eoB!]) {
    ok(t.examinerNotes!.some((n) => /niveau C1/.test(n)), `${t.id}: the C1 target must be stated for the reviewer`);
  }
});

test('the EE Section B prompt names the objection the letter must answer', () => {
  const b = EE_TASKS[1]!;
  ok(/doivent financer des actions aux retombées mesurables/.test(b.prompt), 'the objection is missing from the prompt');
  const crit = b.rubric!.criteria.find((c) => c.key === 'objection')!;
  ok(crit.descriptors!.some((d) => d.includes('retombées mesurables')), 'the rubric must quote the objection the prompt sets');
  ok(/légitime/.test(b.modelAnswer!), 'the C1 model answer concedes before it answers');
  ok(b.modelAnswer!.trim().split(/\s+/).length >= 250, 'a C1 model answer should comfortably clear the 200-word floor');
});

test('the EO Section B ladder, including the principled rung, reaches the grader', () => {
  const b = EO_TASKS[1]!;
  ok(b.examinerNotes?.some((x) => /ÉCHELLE D’OBJECTIONS/.test(x) && /OBJECTION DE PRINCIPE/.test(x)), 'the ladder must exist for the reviewer');
  const adapt = b.rubric!.criteria.find((c) => c.key === 'adaptation')!;
  ok(adapt.descriptors!.some((d) => /au-delà de la première/.test(d) && /pouvoirs publics/.test(d)),
    'the rubric must require the ladder up to the principled objection');
  ok(/pouvoirs publics/.test(b.modelAnswer!) && /Je te l’accorde/.test(b.modelAnswer!),
    'the model answer must concede and answer the principled objection');
});

/* ─── this paper's own content ───────────────────────────────────────────── */

/** Every invented place and source the five earlier papers claimed. */
const TAKEN = [
  'Sainte-Ambre', 'Verlune', 'Pralet', 'Corbeny', 'Meillac',
  'Nervaux', 'Chantoise', 'Beaulieu-le-Haut', 'Vaudroy', 'Ferrand-sur-Aize',
  'Aubercy', 'Grandvaux', 'Pierrefonte', 'Mesnil-Doré', 'Valcourt',
  'Roquelaure', 'Bellevance', 'Tournoy', 'La Chapelle-aux-Bois', 'Marnac',
  'Fontenay-le-Vieux', 'Sarlanges', 'Dourvin', 'Chastel', 'Salvin',
];

test('blanc-06 shares no invented place name with the earlier papers', () => {
  const mine = JSON.stringify(TASKS);
  for (const name of TAKEN) ok(!mine.includes(name), `${name} belongs to an earlier paper and appears in blanc-06`);
  for (const name of PLACES) ok(mine.includes(name), `${name} is declared in common.ts but appears nowhere`);
});

test('blanc-06 shares no document with any earlier paper', async () => {
  const earlier = await Promise.all([
    import('../tef-blanc01/paper.ts'), import('../tef-blanc02/paper.ts'), import('../tef-blanc03/paper.ts'),
    import('../tef-blanc04/paper.ts'), import('../tef-blanc05/paper.ts'),
  ]);
  const stimuli = (tasks: ExamTask[]) =>
    tasks.flatMap((t) => (t.parts ?? []).map((p) => p.text ?? '')).filter((s) => s.length > 40);
  const theirs = new Set(earlier.flatMap((m) => stimuli(m.TASKS)));
  const shared = stimuli(TASKS).filter((s) => theirs.has(s));
  strictEqual(shared.length, 0, `shared with an earlier paper:\n  ${shared.slice(0, 3).join('\n  ')}`);
});

test('the computed options across the paper are actually right', () => {
  const a = itemsOf(CE_TASKS[0]!);
  const place = a.find((i) => i.q.includes('à la signature'))!;
  strictEqual(place.opts[place.correct], '170 $');
  strictEqual(2 * 85, 170);

  const de = itemsOf(CE_TASKS[3]!);
  const etudiant = de.find((i) => i.q.includes('étudiant'))!;
  strictEqual(etudiant.opts[etudiant.correct], '31,20 $');
  strictEqual((39 * 0.8).toFixed(2), '31.20');

  const huards = de.find((i) => i.q.includes('deux enfants'))!;
  strictEqual(huards.opts[huards.correct], '333 $');
  strictEqual(180 + 180 * 0.85, 333);
});

test('the documents still carry the figures their keys rest on', () => {
  const [forfaits, camps] = CE_TASKS[3]!.parts!;
  ok(forfaits!.text!.includes('LIBERTÉ · 39 $/mois'));
  ok(forfaits!.text!.includes('20 % de rabais, sur le forfait LIBERTÉ uniquement'));
  ok(camps!.text!.includes('180 $/semaine'));
  ok(camps!.text!.includes('Réduction de 15 % pour le deuxième enfant'));
  const stationnement = CE_TASKS[0]!.parts![6]!.text!;
  ok(stationnement.includes('85 $ par mois') && stationnement.includes('2 mois d’avance'));
});

test('block G runs its seventeen documents without repeating a sub-type in a row', () => {
  const labels = (CO_TASKS[6]!.parts ?? []).map((p) => p.label);
  strictEqual(labels.length, 17);
  const sub = (l: string) => l.split('·')[1]?.trim() ?? '';
  for (let i = 1; i < labels.length; i += 1) {
    ok(sub(labels[i - 1]!) !== sub(labels[i]!), `documents ${i} and ${i + 1} are both ${sub(labels[i]!)}`);
  }
  const counts: Record<string, number> = {};
  for (const l of labels) counts[sub(l)] = (counts[sub(l)] ?? 0) + 1;
  deepStrictEqual(counts, { 'échange': 4, 'répondeur': 3, 'information': 3, 'micro-trottoir': 4, 'consignes': 3 });
});

test('every listening speaker turn is on its own line with its label', () => {
  for (const t of CO_TASKS) {
    for (const p of t.parts ?? []) {
      for (const line of (p.text ?? '').split('\n')) {
        ok(/^[A-ZÀ-Ý’' -]{2,30} : \S/.test(line), `${t.label} / ${p.label}: a line without a speaker label: "${line.slice(0, 50)}"`);
      }
    }
  }
});

test('French copy uses curly apostrophes', () => {
  const straight = candidateFacing(TASKS).filter((s) => /[A-Za-zÀ-ÿ]'[A-Za-zÀ-ÿ]/.test(s));
  strictEqual(straight.length, 0, `straight apostrophe in: ${straight.slice(0, 3).join(' | ')}`);
});

/* ─── the key order (key-scatter.test.ts covers papers 1-5 only) ─────────── */

test('no block shows an A-B-C / C-B-A run or a repeating cycle', () => {
  for (const t of [...CO_TASKS, ...CE_TASKS]) {
    const k = keysOf(t);
    ok(!looksPatterned(k), `${t.label}: keys read ${k.map((x) => 'ABCD'[x]).join('')}`);
  }
});

test('the key never lands in the same position twice running', () => {
  for (const t of [...CO_TASKS, ...CE_TASKS]) {
    const k = keysOf(t);
    for (let i = 1; i < k.length; i += 1) ok(k[i] !== k[i - 1], `${t.label}: position ${k[i]} twice running (item ${i})`);
  }
});

test('blanc-06 shares no answer key sequence with papers 1-5', async () => {
  const mine = [...CO_TASKS, ...CE_TASKS].flatMap(keysOf);
  for (const n of [1, 2, 3, 4, 5]) {
    const m = await import(`../tef-blanc0${n}/paper.ts`);
    const theirs = [...m.CO_TASKS, ...m.CE_TASKS].flatMap(keysOf);
    strictEqual(theirs.length, mine.length);
    const same = mine.filter((x, i) => x === theirs[i]).length;
    ok(same / mine.length < 0.5, `blanc-0${n} agrees on ${same}/${mine.length} key positions`);
  }
});

test('the keys are balanced across the whole paper', () => {
  const four = [...CO_TASKS, ...CE_TASKS].filter((t, i) => i !== 2).flatMap(keysOf);
  const counts = [0, 1, 2, 3].map((p) => four.filter((k) => k === p).length);
  for (const c of counts) ok(c >= 14 && c <= 24, `four-option key positions are unbalanced: ${counts.join(' / ')}`);
});

/* ─── the plan and the corpus ────────────────────────────────────────────── */

test('the ledger spends only situations no other paper has spent, each once', () => {
  const head = (f: string) => (readFileSync(f, 'utf8').split('── Integrity')[0] ?? '').match(/TEF-\d+/g) ?? [];
  const mine = head(resolve(HERE, 'common.ts'));
  strictEqual(mine.length, 46);
  strictEqual(new Set(mine).size, 46, 'a situation is spent twice in this paper');
  const bank = readFileSync(resolve(HERE, '../../exam-blueprints/TOPICS-tef-canada.md'), 'utf8');
  for (const id of mine) ok(new RegExp(`^\| ${id} \|`, 'm').test(bank), `${id} is not in the topic bank`);
  for (const n of [1, 2, 3, 4, 5]) {
    const f = resolve(HERE, `../tef-blanc0${n}/common.ts`);
    if (!existsSync(f)) continue;
    const theirs = new Set(head(f));
    for (const id of mine) ok(!theirs.has(id), `${id} was already spent by blanc-0${n}`);
  }
});

test('every targetItemId is a real corpus item', () => {
  const root = resolve(HERE, '../../../ealch-v2/src/content');
  const ids = new Set<string>();
  const seed = JSON.parse(readFileSync(resolve(root, 'seed.json'), 'utf8')) as { items: { id: string }[] };
  for (const i of seed.items) ids.add(i.id);
  const packs = readFileSync(resolve(root, 'seed-packs.json'), 'utf8');
  for (const m of packs.matchAll(/"id":\s*"(fr\.[a-c][12]\.[^"]+)"/g)) ids.add(m[1]!);
  const missing = TASKS.flatMap((t) => t.targetItemIds ?? []).filter((id) => !ids.has(id));
  deepStrictEqual([...new Set(missing)], [], 'target ids absent from seed.json and seed-packs.json');
});
