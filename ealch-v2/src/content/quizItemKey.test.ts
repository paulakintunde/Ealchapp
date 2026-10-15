import { deepStrictEqual, notStrictEqual, ok, strictEqual } from 'node:assert';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, sep } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { hash8, missionItemKey, quizItemKey } from './quizItemKey.logic.ts';
import type { QuizQuestion } from './schema.ts';

const WIRE = /^[A-Za-z0-9._#:-]{1,120}$/;

/** Identical-text pairs that legitimately repeat. Each is asserted identical. */
const KNOWN_DUPLICATES = [{ lesson: 'c2.04.l1', a: 'q4', b: 'q61' }];

const base: QuizQuestion = { q: 'Which is correct?', format: 'mcq', opts: ['un', 'une', 'des'], correct: 1 };

test('hash8 is FNV-1a 32-bit as 8 lowercase hex', () => {
  strictEqual(hash8(''), '811c9dc5');
  ok(/^[0-9a-f]{8}$/.test(hash8('bonjour')));
  strictEqual(hash8('a'), 'e40c292c');
});

test('quizItemKey format for flat deck and rounds', () => {
  ok(/^a1\.04\.l1#quiz\.q3:h[0-9a-f]{8}$/.test(quizItemKey('a1.04.l1', base, null, 3)));
  ok(/^a1\.04\.l1#quiz\.r2\.q0:h[0-9a-f]{8}$/.test(quizItemKey('a1.04.l1', base, 'r2', 0)));
});

test('option reorder keeps the key; text edits change it', () => {
  const k = quizItemKey('l', base, null, 0);
  const reordered: QuizQuestion = { ...base, opts: ['des', 'une', 'un'], correct: 1 };
  strictEqual(quizItemKey('l', reordered, null, 0), k);
  const reordered2: QuizQuestion = { ...base, opts: ['une', 'un', 'des'], correct: 0 };
  strictEqual(quizItemKey('l', reordered2, null, 0), k);
  notStrictEqual(quizItemKey('l', { ...base, q: 'Which is right?' }, null, 0), k);
  notStrictEqual(quizItemKey('l', { ...base, correct: 0 }, null, 0), k);
});

test('whitespace and unicode normalisation do not change the key', () => {
  const a: QuizQuestion = { ...base, q: 'Café  ouvert' };
  const b: QuizQuestion = { ...base, q: 'Café ouvert ' };
  strictEqual(quizItemKey('l', a, null, 0), quizItemKey('l', b, null, 0));
});

test('missionItemKey', () => {
  strictEqual(missionItemKey('a1.04.l1', 's3', 2), 'a1.04.l1#s3.c2');
  strictEqual(missionItemKey('a1.04.l1', 's3', null), 'a1.04.l1#s3.c1');
  strictEqual(missionItemKey('a1.04.l1', 's 3/x', 1), 'a1.04.l1#s-3-x.c1');
});

type Entry = { key: string; hash: string; canon: string; pos: string };
// pos is the flat authored index across the quiz (q4, q61), matching KNOWN_DUPLICATES.

function lessonsOf(file: string): any[] {
  if (!existsSync(file)) return [];
  const j = JSON.parse(readFileSync(file, 'utf8'));
  return Array.isArray(j.lessons) ? j.lessons : Object.values(j.lessons ?? {});
}

function entriesFor(lesson: any): Entry[] {
  const out: Entry[] = [];
  const add = (q: QuizQuestion, rid: string | null, i: number) => {
    const flatIx = out.length;
    const key = quizItemKey(lesson.id, q, rid, i);
    const m = /:h([0-9a-f]{8})$/.exec(key);
    out.push({ key, hash: m ? m[1] : '', canon: '', pos: `q${flatIx}` });
  };
  for (const s of lesson.sections ?? []) {
    if (s.type !== 'quiz') continue;
    if (s.rounds?.length) {
      for (const r of s.rounds) (r.questions ?? []).forEach((q: QuizQuestion, i: number) => add(q, r.id, i));
    } else {
      (s.questions ?? []).forEach((q: QuizQuestion, i: number) => add(q, null, i));
    }
  }
  return out;
}

test('corpus: keys match the wire pattern, are unique per lesson, and only listed duplicates share a hash', () => {
  const dir = dirname(fileURLToPath(import.meta.url)) + sep;
  const files = [`${dir}seed.json`, `${dir}seed-packs.json`];
  let total = 0;
  let longest = 0;
  const seen = new Set<string>();
  const listedLessonsSeen = new Set<string>();
  for (const f of files) {
    for (const lesson of lessonsOf(f)) {
      if (seen.has(lesson.id)) continue;
      seen.add(lesson.id);
      const entries = entriesFor(lesson);
      const full = new Set<string>();
      const byHash = new Map<string, Entry[]>();
      for (const e of entries) {
        total++;
        longest = Math.max(longest, e.key.length);
        ok(WIRE.test(e.key), `bad key ${e.key}`);
        ok(!full.has(e.key), `duplicate full key ${e.key}`);
        full.add(e.key);
        byHash.set(e.hash, [...(byHash.get(e.hash) ?? []), e]);
      }
      for (const sec of lesson.sections ?? []) {
        ok(WIRE.test(missionItemKey(lesson.id, String(sec.id ?? 's'), 1)), `bad mission key ${lesson.id} ${sec.id}`);
      }
      for (const group of byHash.values()) {
        if (group.length < 2) continue;
        const listed = KNOWN_DUPLICATES.filter((d) => d.lesson === lesson.id);
        const positions = group.map((g) => g.pos);
        const covered = listed.some((d) => positions.includes(d.a) && positions.includes(d.b));
        ok(covered, `unlisted hash8 equality in ${lesson.id}: ${positions.join(', ')}`);
      }
      if (KNOWN_DUPLICATES.some((d) => d.lesson === lesson.id)) {
        listedLessonsSeen.add(lesson.id);
        // Identical text proof: equal hash8 AND equal canonical text, checked on raw questions.
        for (const d of KNOWN_DUPLICATES.filter((x) => x.lesson === lesson.id)) {
          const flat: QuizQuestion[] = [];
          for (const s of lesson.sections ?? []) {
            if (s.type !== 'quiz') continue;
            if (s.rounds?.length) for (const r of s.rounds) flat.push(...(r.questions ?? []));
            else flat.push(...(s.questions ?? []));
          }
          const qa = flat[Number(d.a.slice(1))];
          const qb = flat[Number(d.b.slice(1))];
          ok(qa && qb, `listed pair missing questions in ${lesson.id}`);
          const canon = (q: QuizQuestion) => JSON.stringify([q.format ?? '', q.q, q.prompt ?? '', q.say ?? '', q.word ?? '', typeof q.correct === 'number' ? q.opts?.[q.correct] : q.correct ?? q.answer ?? q.accept?.[0] ?? '']);
          deepStrictEqual(canon(qa), canon(qb), `listed pair in ${lesson.id} differs in text`);
        }
      }
    }
  }
  for (const d of KNOWN_DUPLICATES) {
    if (!listedLessonsSeen.has(d.lesson)) console.log(`note: KNOWN_DUPLICATES lesson ${d.lesson} not in corpus, skipped`);
  }
  console.log(`quizItemKey corpus: ${total} questions, longest key ${longest}`);
  ok(total > 0);
});
