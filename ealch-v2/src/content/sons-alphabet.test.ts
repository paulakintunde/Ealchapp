// Guards the sons.01.l1 "L'alphabet français" lesson — the first Sons lesson,
// authored from the s0-l01 course material as a full swipe-through lesson with
// narration. Referential integrity across the whole corpus is already proven by
// seed.backcompat.test.ts (validateCorpus); this file pins the intent specific
// to THIS lesson so a later edit that quietly drops the exam, reorders the
// narration, or slips an em-dash into the copy goes red here.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { NARRATION_STAGES, validateLesson, type Lesson } from './schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as {
  units: { id: string; lessonIds: string[] }[];
  lessons: Lesson[];
  items: { id: string }[];
};

const L = seed.lessons.find((l) => l.id === 'sons.01.l1');

test('the sons.01.l1 alphabet lesson exists and is well-formed', () => {
  ok(L, 'sons.01.l1 is present in the seed');
  strictEqual(validateLesson(L).length, 0);
  strictEqual(L!.unitId, 'sons.01');
  strictEqual(L!.level, 'sons');
  strictEqual(L!.tag, 'SONS · LEÇON 01');
});

test('the sons.01 unit links the lesson (reachable from the Den)', () => {
  const unit = seed.units.find((u) => u.id === 'sons.01');
  ok(unit, 'sons.01 unit exists');
  ok(unit!.lessonIds.includes('sons.01.l1'), 'unit lists the lesson');
});

test('the lesson is a full swipe deck ending in an exam', () => {
  const types = L!.sections.map((s) => s.type);
  // Several distinct heading types, so the pager has real variety to page through.
  ok(new Set(types).size >= 6, `expected a rich section mix, got ${[...new Set(types)].join(', ')}`);
  strictEqual(types[types.length - 1], 'quiz', 'the exam is the final section');
});

test('the exam is answerable — every correct index is in range', () => {
  const q = L!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  ok(q.questions.length >= 6, 'a substantial exam');
  for (const item of q.questions) {
    ok(item.correct >= 0 && item.correct < item.opts.length, `correct in range for "${item.q}"`);
  }
});

test('practice drills only resolvable corpus items', () => {
  const known = new Set(seed.items.map((i) => i.id));
  const practice = L!.sections.find((s) => s.type === 'practice');
  ok(practice && practice.type === 'practice');
  ok(practice.itemIds.length > 0);
  for (const id of practice.itemIds) ok(known.has(id), `practice item ${id} exists`);
});

test('narration is present, ordered, and drills real items', () => {
  ok(L!.features?.includes('narrated'), 'the narrated feature is declared');
  const n = L!.narration;
  ok(n, 'narration script is authored');
  ok(n!.ratioEnFr > 0 && n!.ratioEnFr <= 1);
  // Stages must appear in the canonical warm -> ... -> cheat order.
  const rank = (s: string) => (NARRATION_STAGES as readonly string[]).indexOf(s);
  const ranks = n!.stages.map((st) => rank(st.stage));
  for (let i = 1; i < ranks.length; i++) ok(ranks[i] > ranks[i - 1], 'stages strictly ascend');
  // Any narration interaction that names an item must resolve, same as practice.
  const known = new Set(seed.items.map((i) => i.id));
  for (const st of n!.stages) {
    for (const seg of st.segments) {
      const id = (seg as { itemId?: string }).itemId;
      if (id) ok(known.has(id), `narration item ${id} exists`);
    }
  }
});

test('the letter grid teaches all 26 letters exactly once, A to Z', () => {
  const grid = L!.sections.find((s) => s.type === 'letterGrid');
  ok(grid && grid.type === 'letterGrid');
  const chars = grid.letters.map((l) => l.ch).join('');
  strictEqual(chars, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
});

test('the rebuild is multimodal: every rich section type is exercised', () => {
  const types = new Set(L!.sections.map((s) => s.type));
  for (const t of ['letterGrid', 'cardDeck', 'tapTable', 'vocabThemes', 'flashcards', 'roundup'] as const) {
    ok(types.has(t), `section type ${t} present`);
  }
});

test('the guided-course contract: nearly every card carries narration', () => {
  // Every content section except the exam should speak. Allow a small slack so
  // an editorial trim does not flip the build red, but a lesson that lost its
  // narration wholesale must.
  const content = L!.sections.filter((s) => s.type !== 'quiz');
  const spoken = content.filter((s) => typeof s.say === 'string' && s.say.length > 0);
  ok(spoken.length >= content.length - 2, `${spoken.length}/${content.length} sections narrated`);
});

test('the round-up is the last content card before the exam', () => {
  const types = L!.sections.map((s) => s.type);
  strictEqual(types[types.length - 2], 'roundup');
});

test('the vocabulary bank is themed and every theme has cards', () => {
  const vb = L!.sections.find((s) => s.type === 'vocabThemes');
  ok(vb && vb.type === 'vocabThemes');
  ok(vb.themes.length >= 4, 'several themes');
  for (const th of vb.themes) ok(th.cards.length >= 5, `theme "${th.title}" has a real deck`);
});

test('the exam is substantial enough to randomize', () => {
  const q = L!.sections.find((s) => s.type === 'quiz');
  ok(q && q.type === 'quiz');
  ok(q.questions.length >= 10, 'at least 10 questions');
  // Randomized display needs distinct options; a duplicated option makes the
  // shuffled quiz ambiguous.
  for (const item of q.questions) {
    strictEqual(new Set(item.opts).size, item.opts.length, `options distinct for "${item.q}"`);
  }
});

test('the authored copy carries no em dash and no honest/honesty (house style)', () => {
  // Two standing style rules over user-facing copy: no em dash, and the words
  // "honest"/"honesty" never appear (Paul's rule, 2026-07-21). Checked over
  // the ENTIRE seed, not just this lesson — any authored string a learner can
  // read is in scope, wherever it lives.
  const strings: string[] = [];
  const walk = (v: unknown) => {
    if (typeof v === 'string') strings.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  // Em dash: enforced on THIS lesson's copy (older seed content still carries
  // em-dash label separators, the allowed exception to the rule).
  walk(L);
  const emDash = strings.filter((s) => s.includes('—'));
  strictEqual(emDash.length, 0, `em dash found in: ${emDash.slice(0, 3).join(' | ')}`);
  // honest/honesty: banned across the ENTIRE seed — any authored string a
  // learner can read is in scope, wherever it lives.
  strings.length = 0;
  walk(seed);
  const honest = strings.filter((s) => /honest/i.test(s));
  strictEqual(honest.length, 0, `honest/honesty found in: ${honest.slice(0, 3).join(' | ')}`);
});
