// Guards sons.03.l1 mission 1 — "The Welcome That Went Wrong".
//
// The mission was authored as a v1 `story`, which paints its whole bubble
// array at once: the learner reads that the receptionist ticked the "Madame"
// box before they have committed to a pronunciation, so the mistake is
// narrated AT them rather than made BY them. ScenePlayer.tsx exists to fix
// exactly that, and every other sons lesson (02, 05, 06, 07, 08, 10) opens on
// a `scene`. sons.03 was the last one left behind.
//
// These assertions pin the CONVERSION, not the prose. A `story` here again
// means the regression came back, and the likeliest way that happens is a
// `content:publish` run against a Postgres row that was never re-authored —
// see the warning in merge-sons03-scene-into-seed.ts.
import { ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { formatIssues, validateLesson, type Lesson } from './schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const seed = JSON.parse(readFileSync(resolve(here, 'seed.json'), 'utf8')) as { lessons: Lesson[] };

const LESSON = seed.lessons.find((l) => l.id === 'sons.03.l1') ?? null;
const skip = !LESSON;

const mission1 = () => LESSON!.sections[0];

test('sons.03 opens on a scene, like every other sons lesson', { skip }, () => {
  const s = mission1();
  strictEqual(s.type, 'scene', 'mission 1 is the v2 scene player, not the v1 story');
});

test('the lesson still validates against the schema', { skip }, () => {
  const issues = validateLesson(LESSON!);
  ok(issues.length === 0, formatIssues(issues));
});

test('mission 1 carries the establishing card the scene player needs', { skip }, () => {
  const s = mission1();
  ok(s.type === 'scene');
  // Without `setting`, ScenePlayer skips its establishing card and drops the
  // learner straight into beat 0 with no idea where they are standing.
  ok(s.setting, 'the scene has a setting');
  ok(s.setting!.place, 'the setting names a place');
  strictEqual(s.setting!.city, 'Lyon');
});

test('the beats run setup, commitment, correction, consequence', { skip }, () => {
  const s = mission1();
  ok(s.type === 'scene');
  const kinds = s.beats.map((b) => b.kind);

  // The same order sons.02 mission 1 uses. The learner must be asked to
  // commit (choice) BEFORE they are corrected (break); reversing those two is
  // what turned this mission into a screenplay in the first place.
  strictEqual(kinds.indexOf('choice') > -1, true, 'there is a commitment beat');
  strictEqual(kinds.indexOf('break') > -1, true, 'there is a correction beat');
  ok(kinds.indexOf('choice') < kinds.indexOf('break'), 'the learner commits before being corrected');
  strictEqual(kinds[kinds.length - 1], 'resolve', 'the scene closes on what it proved');
});

test('the choice offers one reading that works and one that breaks', { skip }, () => {
  const s = mission1();
  ok(s.type === 'scene');
  const choice = s.beats.find((b) => b.kind === 'choice');
  ok(choice && choice.kind === 'choice');
  strictEqual(choice.options.length, 2, 'exactly two options: one is not a choice, three dilutes the pivot');
  const outcomes = choice.options.map((o) => o.outcome).sort();
  strictEqual(outcomes.join(','), 'breaks,works');
  // Both outcomes must be spoken to, because the break plays either way.
  ok(choice.followUp?.works && choice.followUp?.breaks, 'both outcomes get a follow-up');
});

test('the break sets the nasal reading against the oral one', { skip }, () => {
  const s = mission1();
  ok(s.type === 'scene');
  const brk = s.beats.find((b) => b.kind === 'break');
  ok(brk && brk.kind === 'break');
  // The whole lesson is that a sounded N denasalises the vowel and flips the
  // gender. If these two IPA strings ever match, the contrast has collapsed
  // and the mission teaches nothing.
  ok(brk.right.ipa.includes('ɛ̃'), 'the right reading keeps the vowel nasal');
  ok(brk.wrong.ipa.includes('ɛn'), 'the wrong reading sounds the N');
  ok(brk.right.ipa !== brk.wrong.ipa, 'the two readings actually differ');
});

test('the closing line survived the conversion', { skip }, () => {
  const s = mission1();
  ok(s.type === 'scene');
  // Carried over verbatim from the published story. It is the sentence the
  // mission is remembered by, and the one thing the rewrite must not lose.
  strictEqual(
    s.closing?.text,
    'One sound changed your grammatical gender, with no letter added out loud. ' +
      'Nasal versus oral, that is exactly what gender sounds like in spoken French.'
  );
});

test('converting mission 1 did not disturb the rest of the lesson', { skip }, () => {
  strictEqual(LESSON!.sections.length, 20, 'the lesson still has its 20 missions');
  strictEqual(LESSON!.sections[1].type, 'goals');
  strictEqual(LESSON!.sections[19].type, 'roundup');
});
