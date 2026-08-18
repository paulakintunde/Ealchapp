/* ═══════════════════════════════════════════════════════════════════════════
 *  NO LESSON NAMES ANOTHER LESSON BY ITS UNIT ID, IN ANY BAND
 *
 *  A2-BUILD-DOCTRINE.md:199 used to say « name the earlier instance by unit
 *  id », and every A2 build followed it, so 35 of 36 lesson bodies printed
 *  strings like `a2.24` on a card. A learner has never seen that string, cannot
 *  look it up, and it means nothing to them. They read « lesson 22 in A2 », and
 *  « lesson 22's line » where a possessive reads better.
 *
 *  Written for A2 and widened once A1 and Sounds turned out to carry the same
 *  defect: 1,382 raw ids across the corpus, now none. It walks EVERY band, so
 *  B1, B2 and C1 are covered before they are authored rather than after.
 *
 *  ── WHY A CORPUS-WIDE TEST AND NOT A PER-LESSON ONE ───────────────────────
 *
 *  Each lesson's own suite asserts the units IT cites. None of them can see a
 *  citation nobody thought to assert, and the migration found those in every
 *  shape the per-lesson guards missed: a `note` sharing a line with an
 *  `itemId`, a constant holding a whole sentence, a tapTable column built by
 *  `.map()`, a `why` on an exam question. This walks every string of every
 *  lesson instead of the ones a build remembered to name.
 *
 *  ── THE TRAP THIS ALSO GUARDS ─────────────────────────────────────────────
 *
 *  **The id number is not the lesson number.** Ids were assigned before the
 *  trails were sequenced, so 31 of 35 A2 units disagree with their own id
 *  number. `a2.12` is lesson 6 and `a1.17` is lesson 20. A label is therefore
 *  always resolved through the shipped `seq`, never by reading the digits off
 *  the id — a2.24 shipped « since seq 17 of A1 » about a unit that is seq 20,
 *  which is that exact mistake reaching a learner.
 *
 *  ── WHAT IS DELIBERATELY EXEMPT ───────────────────────────────────────────
 *
 *  `grammarAssumed`, `grammarIntroduced` and `prereqUnitIds` are addressed to
 *  the CURRICULUM and resolved against `content_units`, so they keep the raw
 *  id, as do `id`, `unitId`, `lessonIds` and `itemId`, which are machine keys.
 *  The split is exactly prose against metadata.
 * ═══════════════════════════════════════════════════════════════════════════ */

import { test } from 'node:test';
import { ok, deepStrictEqual } from 'node:assert';
import seed from './seed.json' with { type: 'json' };
import { unitLabel } from './unit-label.ts';

type Unit = { id: string; seq: number; lessonIds?: string[] };
type Lesson = { id: string };

/** Every band with a trail. A unit whose id is not one of these is not a
 *  lesson unit and has no seq to cite. */
const TRACKS = ['sons', 'a1', 'a2', 'b1', 'b2', 'c1'] as const;
const UNITS = (seed.units as unknown as Unit[])
  .filter((u) => TRACKS.some((t) => u.id.startsWith(`${t}.`)));
const LESSONS = seed.lessons as unknown as Lesson[];

/** Machine keys, whose values are addressed to the curriculum or to code. */
const METADATA = new Set([
  'grammarAssumed', 'grammarIntroduced', 'prereqUnitIds',
  'id', 'unitId', 'lessonIds', 'itemId', 'itemIds', 'examples', 'slug',
]);

/** Every string a learner can end up reading, machine keys walked around. */
const learnerStrings = (v: unknown, out: string[] = []): string[] => {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => learnerStrings(x, out));
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) {
      if (METADATA.has(k)) continue;
      learnerStrings(x, out);
    }
  }
  return out;
};

/** A unit id, and NOT the front of an item id like `fr.a1.noms.041`: an item
 *  id always has a letter or a digit after its next dot. */
const RAW_ID = /(?<![\p{L}\p{N}.])((?:a1|a2|b1|b2|c1|sons)\.\d{2})(?![\p{L}\p{N}])(?!\.[\p{L}\p{N}])/gu;

/** `seq` is the internal word for a position on the trail. It shipped inside
 *  a2.24 for months, as « since seq 17 of A1 », which is both jargon and wrong. */
const SEQ_WORD = /(?<![\p{L}])seq\s+\d/i;

const allLessons = (): Array<{ id: string; body: Lesson }> => {
  const out: Array<{ id: string; body: Lesson }> = [];
  for (const u of UNITS.sort((a, b) => Number(a.seq) - Number(b.seq))) {
    for (const lid of u.lessonIds ?? []) {
      const L = LESSONS.find((l) => l.id === lid);
      if (L) out.push({ id: lid, body: L });
    }
  }
  return out;
};

test('the corpus is in the seed and this test is actually reading it', () => {
  ok(UNITS.length >= 70, `only ${UNITS.length} units in the seed`);
  const ls = allLessons();
  ok(ls.length >= 75, `only ${ls.length} lessons found, so the walk is not reaching the corpus`);
  const total = ls.reduce((n, l) => n + learnerStrings(l.body).length, 0);
  ok(total > 40000, `the walk found only ${total} strings across the corpus`);
});

test('no lesson prints a raw unit id on a learner surface', () => {
  const offences: string[] = [];
  for (const { id, body } of allLessons()) {
    for (const s of learnerStrings(body)) {
      for (const m of s.matchAll(RAW_ID)) {
        offences.push(`${id}: ${m[1]} in "${s.slice(Math.max(0, m.index - 30), m.index + 40).replace(/\s+/g, ' ')}"`);
      }
    }
  }
  deepStrictEqual(offences.slice(0, 12), [],
    `${offences.length} raw unit id(s) reach a learner. Cite the lesson by its trail position instead: `
    + 'interpolate `unitRef(X_UNIT)` from ealch-admin/scripts/data/_unit-ref.ts.');
});

test('no lesson uses the word "seq" on a learner surface', () => {
  const offences: string[] = [];
  for (const { id, body } of allLessons()) {
    for (const s of learnerStrings(body)) {
      if (SEQ_WORD.test(s)) offences.push(`${id}: "${s.slice(0, 70).replace(/\s+/g, ' ')}"`);
    }
  }
  deepStrictEqual(offences.slice(0, 12), [],
    `${offences.length} learner string(s) say "seq N". That is the internal word for a trail position; `
    + 'the lesson label already carries the number.');
});

test('a citation is capitalised iff it opens a sentence', () => {
  // The label is built at interpolation time rather than typed, so the capital
  // has to be applied there, and whether it is needed is a fact about the
  // sentence around it. Both directions, because the source pass can only see
  // the literal text of a line and gets it wrong in both.
  const LOWER_AFTER_STOP = /[.!?…]["»']?\s+(lesson \d+)/g;
  const CAPS_MIDSENTENCE = /(?<=[a-zà-ÿ,;:]\s)(Lesson \d+)/g;
  // A HEADING IS TITLE CASE, and « And The One From Lesson 7 » is correct
  // there: every word carries a capital, so the citation's does not mark a
  // sentence. Detected rather than listed, because a heading is a shape.
  const isTitleCase = (s: string) => {
    const words = s.trim().split(/\s+/).filter((w) => /^[\p{L}]/u.test(w));
    if (words.length < 3 || words.length > 10 || /[.!?]/.test(s)) return false;
    return words.filter((w) => /^[\p{Lu}]/u.test(w)).length >= words.length - 1;
  };

  const offences: string[] = [];
  for (const { id, body } of allLessons()) {
    for (const s of learnerStrings(body)) {
      if (isTitleCase(s)) continue;
      for (const m of s.matchAll(LOWER_AFTER_STOP)) {
        offences.push(`${id}: lowercase after a full stop — "${s.slice(Math.max(0, m.index - 24), m.index + 30).replace(/\s+/g, ' ')}"`);
      }
      for (const m of s.matchAll(CAPS_MIDSENTENCE)) {
        offences.push(`${id}: capital mid-sentence — "${s.slice(Math.max(0, m.index - 24), m.index + 30).replace(/\s+/g, ' ')}"`);
      }
    }
  }
  deepStrictEqual(offences.slice(0, 12), [], `${offences.length} citation(s) carry the wrong case`);
});

test('every lesson label a learner reads resolves to a unit that exists, at that position', () => {
  // The point of the whole change: the number in the label is the TRAIL
  // POSITION, not the id number. A label naming a position no unit occupies is
  // a citation the learner cannot follow.
  const TRACKS: Record<string, string> = { A1: 'a1', A2: 'a2', B1: 'b1', B2: 'b2', C1: 'c1', Sounds: 'sons' };
  const LABEL = /lesson (\d+) in (A1|A2|B1|B2|C1|Sounds)/gi;
  const seqsByTrack = new Map<string, Set<number>>();
  for (const u of seed.units as unknown as Unit[]) {
    const track = u.id.split('.')[0];
    if (!seqsByTrack.has(track)) seqsByTrack.set(track, new Set());
    seqsByTrack.get(track)!.add(Number(u.seq));
  }

  const offences: string[] = [];
  for (const { id, body } of allLessons()) {
    for (const s of learnerStrings(body)) {
      for (const m of s.matchAll(LABEL)) {
        const track = TRACKS[m[2][0].toUpperCase() + m[2].slice(1).toLowerCase()] ?? TRACKS[m[2].toUpperCase()];
        const known = seqsByTrack.get(track ?? '');
        if (!known || !known.has(Number(m[1]))) offences.push(`${id}: "${m[0]}" is a position no unit occupies`);
      }
    }
  }
  deepStrictEqual([...new Set(offences)].slice(0, 12), [], `${offences.length} citation(s) point nowhere`);
});

test('a unit whose id number differs from its seq is never cited by its id number', () => {
  // Measured across the shipped units: 31 of 35 in A2 disagree with their own
  // id number, 27 of 30 in A1 and 4 of 10 in sons, so a label built by slicing
  // the digits off the id is wrong five times in six. a2.24 shipped exactly
  // that, as « since seq 17 of A1 » about a unit that is seq 20.
  const disagreeing = UNITS.filter((u) => Number(u.id.split('.')[1]) !== Number(u.seq));
  ok(disagreeing.length > 55,
    `only ${disagreeing.length} units disagree with their id number; if the trail was resequenced this test needs re-reading`);

  for (const u of disagreeing) {
    const label = unitLabel(u.id);
    // The label its ID NUMBER would produce, in its own track, which is the
    // string this rule exists to keep off a card.
    const TRACK: Record<string, string> = { sons: 'Sounds', a1: 'A1', a2: 'A2', b1: 'B1', b2: 'B2', c1: 'C1' };
    const idNumberLabel = `lesson ${Number(u.id.split('.')[1])} in ${TRACK[u.id.split('.')[0]]}`;
    ok(label !== idNumberLabel, `${u.id} resolves to "${label}", which is its id number rather than its seq`);
  }
});
