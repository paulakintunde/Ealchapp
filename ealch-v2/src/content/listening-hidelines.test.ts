// `listening.hideLines` — the A2 situations band's one funded engineering item.
//
// Collation §3.5 and blocking step 3. `ListeningView` prints every line's `fr`
// and `en` beside its PlayDot, so every listening section in the product has
// been answerable by READING. That is fine for a section whose questions are
// about the words and it quietly voids one whose questions are about what the
// ear caught.
//
// This file guards three things, in the order they matter:
//
//   1. the flag validates, and only on a listening section;
//   2. the 63 shipped listening sections are UNCHANGED — the flag is opt-in and
//      absence must mean today's behaviour;
//   3. the reveal rule is stated as a rule, so a later edit that gates it on
//      answering CORRECTLY goes red.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { ok, strictEqual, deepStrictEqual } from 'node:assert';
import { test } from 'node:test';
import { validateLesson, type Lesson, type LessonSection } from './schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as { lessons: Lesson[] };

const listeningSections = seed.lessons.flatMap((l) =>
  (l.sections as LessonSection[]).filter((s) => s.type === 'listening').map((s) => ({ lesson: l.id, sec: s })));

/** A minimal valid listening section, so a validator test is about the flag and
 *  not about everything else a lesson needs. */
const lessonWith = (extra: Record<string, unknown>, type = 'listening'): Lesson => ({
  id: 'a2.99.l1', unitId: 'a2.99', seq: 1, level: 'a2', track: 'a2', tag: 'hl', version: 1,
  title: 'T', intro: 'i', canDo: 'c', reframe: 'r',
  acts: [{ id: 'act1', title: 'A', sections: ['s01'], milestone: 'm', estScreens: 4 }],
  sections: [{
    type, id: 's01', title: 'T', layer: 'core',
    lines: [{ fr: 'Plate ou gazeuse ?', en: 'Still or sparkling?' }],
    questions: [{ q: 'Which?', opts: ['Water', 'Steak'], correct: 0, why: 'w' }],
    ...extra,
  } as unknown as LessonSection],
  itemIds: [], terms: {}, drills: [], sheets: [], deckTranche: [[]],
  overview: { titleEn: 'T', subFr: 'S', introFr: 'I', minutes: 5, difficulty: 1, glyph: '🎧', screens: 4 },
  audio: { defaultLang: 'fr-FR', speeds: [1, 0.65], coachVoice: 'coach-en-warm' },
} as unknown as Lesson);

const issues = (l: Lesson) => (validateLesson(l as never) as unknown[]) ?? [];

test('hideLines validates as an optional boolean on a listening section', () => {
  strictEqual(issues(lessonWith({})).length, 0, 'the baseline fixture must be valid');
  strictEqual(issues(lessonWith({ hideLines: true })).length, 0, 'hideLines: true must validate');
  strictEqual(issues(lessonWith({ hideLines: false })).length, 0, 'hideLines: false must validate');
});

test('hideLines rejects a non-boolean', () => {
  const bad = issues(lessonWith({ hideLines: 'yes' }));
  ok(bad.length > 0, 'a string hideLines must not validate');
  ok(JSON.stringify(bad).includes('hideLines'), `the message should name the field: ${JSON.stringify(bad)}`);
});

test('hideLines is rejected on a section type that does not read it', () => {
  // A field that validates, publishes and does nothing is the exact shape of
  // the five dead audio fields the seed already carries 31 instances of.
  // Authoring it on a cardDeck should fail rather than silently do nothing.
  const bad = issues(lessonWith({ hideLines: true }, 'reading'));
  ok(bad.length > 0, 'hideLines on a non-listening section must not validate');
  ok(JSON.stringify(bad).includes('hideLines'), `the message should name the field: ${JSON.stringify(bad)}`);
});

test('the flag is opt-in: no shipped listening section is silently changed', () => {
  // The whole safety argument for this feature. Absence must mean today's
  // behaviour, so a section that never asked for hiding must not get it.
  ok(listeningSections.length >= 60, `expected the shipped listening corpus, found ${listeningSections.length}`);
  const optedIn = listeningSections.filter(({ sec }) => (sec as { hideLines?: boolean }).hideLines === true);
  const rest = listeningSections.filter(({ sec }) => (sec as { hideLines?: boolean }).hideLines !== true);
  for (const { lesson, sec } of rest) {
    strictEqual((sec as { hideLines?: boolean }).hideLines, undefined,
      `${lesson} ${(sec as { id?: string }).id} carries hideLines without opting in`);
  }
  // Recorded rather than asserted at a number, so adopting it is not a red test.
  console.log(`      listening sections: ${listeningSections.length}, opted into hideLines: ${optedIn.length}`);
});

test('a hidden section still has something to hide, and something to answer', () => {
  for (const { lesson, sec } of listeningSections) {
    if ((sec as { hideLines?: boolean }).hideLines !== true) continue;
    const s = sec as unknown as { lines: unknown[]; questions: unknown[]; id?: string };
    ok(s.lines.length > 0, `${lesson} ${s.id}: hideLines with no lines hides nothing`);
    ok(s.questions.length > 0, `${lesson} ${s.id}: hideLines with no questions never reveals`);
  }
});

test('the reveal is not gated on being right, and the component says so', () => {
  // The rule lives in one place and is easy to "tighten" later into a reward.
  // This pins the intent at the source, because it cannot be observed from the
  // seed: a section that reveals only on a correct answer looks identical here.
  const src = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');
  const view = src.slice(src.indexOf('export function ListeningView'));
  const body = view.slice(0, view.indexOf('\n}\n'));
  ok(/hideLines/.test(body), 'ListeningView no longer reads hideLines');
  // The mask must depend on HOW MANY are answered, never on whether they match.
  ok(/answered\s*<\s*s\.questions\.length/.test(body),
    'the mask should lift on answer COUNT; gating it on correctness would withhold the answer from the learner who needs it');
  // Scoped to the mask ASSIGNMENT, not to the whole card: the questions below
  // it legitimately read `q.correct` to score an answer, so a wider slice fires
  // on correct code. The claim is only about what decides `masked`.
  const maskLine = body.split('\n').find((ln) => /const masked\b/.test(ln));
  ok(maskLine, 'the mask is no longer a named condition; this guard cannot see it');
  ok(!/correct/.test(maskLine!), `the mask condition must not consult \`correct\`: ${maskLine!.trim()}`);
});

test('a masked line keeps its PlayDot, or the section is unusable', () => {
  const src = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');
  const view = src.slice(src.indexOf('export function ListeningView'));
  const card = view.slice(0, view.indexOf('questionsInModal'));
  // The PlayDot sits OUTSIDE the masked/unmasked branch, so hiding the words
  // cannot take the audio with them.
  const maskIx = card.indexOf('masked ?');
  const dotIx = card.indexOf('<PlayDot');
  ok(maskIx > 0 && dotIx > maskIx, 'PlayDot should render after, and outside, the mask branch');
  ok(/<PlayDot text=\{l\.fr\}/.test(card), 'the PlayDot must still speak the real line while it is hidden');
});

test('a hidden section never reprints its own passage in a question', () => {
  // FOUND ON DEVICE, and it is the defect that makes hideLines worthless.
  // The question rail renders UNDER the masked line cards. a2.07's s08-fast
  // first shipped with every question opening on the French it had just hidden
  // ("Bonsoir, vous avez réservé ? Where in the evening are you?"), so the words
  // were handed straight back and the flag bought nothing.
  //
  // A question still has to say WHICH line it is about. Refer to it by number.
  // This is a band-wide rule: all eight A2 situations units weight toward
  // reception and will reach for this flag.
  const leaks: string[] = [];
  for (const { lesson, sec } of listeningSections) {
    const s = sec as unknown as { hideLines?: boolean; id?: string; lines: { fr: string }[]; questions: { q: string }[] };
    if (s.hideLines !== true) continue;
    for (const [qi, q] of s.questions.entries()) {
      for (const l of s.lines) {
        // A bare line number or a stray word is fine; the whole French line is not.
        if (l.fr.length > 6 && q.q.includes(l.fr)) {
          leaks.push(`${lesson} ${s.id} q${qi + 1} reprints « ${l.fr} »`);
        }
      }
    }
  }
  deepStrictEqual(leaks, [], `hidden lines reprinted in their own questions:\n  ${leaks.join('\n  ')}`);
});
