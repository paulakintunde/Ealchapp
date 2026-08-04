// Convert sons.03.l1 mission 1 from the v1 `story` section to the v2 `scene`
// player, so the nasal-vowels lesson opens the same way sons.02 does.
//
// ── Why ────────────────────────────────────────────────────────────────────
//
// Every other sons lesson (02, 05, 06, 07, 08, 10) opens on a `scene`. sons.03
// was left on `story`, which renders its whole bubble array at once: the eye
// reaches the punchline ("the receptionist ticks the Ms. box") before the
// learner has committed to a pronunciation, so the mistake is narrated AT them
// instead of being made BY them. ScenePlayer.tsx exists precisely to fix that
// and its header says so. This is a layout/format change, not new teaching:
// the situation, the pivot word and the closing line are the ones already
// authored here.
//
// ── What is preserved ──────────────────────────────────────────────────────
//
// The material is carried over, not reinvented:
//   setting   HOTEL FLEURIE, LYON · 9:04 PM  -> {place, city, time}
//   bubbles   narrator/coach/user lines      -> narration + bubble beats
//   warn      the américain/américaine note  -> the choice + break beats
//   closing   "One sound changed your ..."   -> closing (kept verbatim)
//
// The `warn` string was the only place the actual teaching lived, and a warning
// label is passive. It becomes the commitment beat (the learner picks) plus the
// break (the two readings side by side), which is the shape sons.02 uses.
//
// ── The hazard (incidents 2026-07-31 and 2026-08-02) ───────────────────────
//
// Writing seed.json directly makes git run AHEAD of Postgres. `content:publish`
// reads Postgres as the source of truth and rewrites seed.json from it, so a
// publish that lands before this lesson is re-authored in the DB silently
// deletes this work. sons.03 mission 1 is ALREADY PUBLISHED, so that publish
// would regress live content rather than merely lose an addition.
//
// This script only ever touches sons.03.l1.sections[0]. It asserts the section
// it replaces is the known `story`, and that nothing else in the seed moves.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/merge-sons03-scene-into-seed.ts --dry-run
//   pnpm tsx scripts/merge-sons03-scene-into-seed.ts

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { formatIssues, validateLesson, type Lesson } from '../../ealch-v2/src/content/schema.ts';

const DRY_RUN = process.argv.includes('--dry-run');
const HERE = dirname(fileURLToPath(import.meta.url));
const SEED = join(HERE, '../../ealch-v2/src/content/seed.json');

const die = (msg: string): never => {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
};

const LESSON_ID = 'sons.03.l1';

const seed = JSON.parse(readFileSync(SEED, 'utf8')) as {
  lessons: Lesson[];
  items: unknown[];
  units: unknown[];
  [k: string]: unknown;
};

const lesson = seed.lessons.find((l) => l.id === LESSON_ID);
if (!lesson) die(`${LESSON_ID} is not in the seed`);

// ── Guard: we are replacing the section we think we are ────────────────────
//
// If someone already converted this mission, or reordered the lesson, the
// right move is to stop rather than overwrite whatever is now in slot 0.
const before = lesson!.sections[0] as Record<string, unknown>;
if (before?.type === 'scene') {
  die(
    `${LESSON_ID} mission 1 is ALREADY a scene. Nothing to do.\n` +
      '  If you meant to re-author it, revert that section first so this can verify what it replaces.'
  );
}
if (before?.type !== 'story') {
  die(`${LESSON_ID} mission 1 is a "${String(before?.type)}", not the "story" this converts`);
}
if (before.title !== 'The Welcome That Went Wrong') {
  die(`${LESSON_ID} mission 1 is not the story this was written against (title: ${JSON.stringify(before.title)})`);
}

const SECTION_COUNT = lesson!.sections.length;
const OTHER_LESSONS = seed.lessons.length - 1;
const ITEM_COUNT = seed.items.length;

// ── The replacement ─────────────────────────────────────────────────────────
//
// Beat order matches sons.02's mission 1 exactly:
//   narration > bubble > choice > break > bubble > narration > resolve
//
// The pivot is américain [ameʁikɛ̃] vs américaine [ameʁikɛn]: sounding the N
// turns the masculine into the feminine. That is the same class of failure as
// sons.02's peu/pot — a real word, correctly heard, with the wrong meaning —
// which is why the same shape fits without forcing it.
const scene = {
  type: 'scene',
  id: 's01-scene',
  title: 'The Welcome That Went Wrong',
  frSub: "L'accueil qui a mal tourné",
  render: 'screens',
  layer: 'core',
  say: {
    text: 'Listen to what one extra consonant did at a hotel desk late at night.',
    voice: 'coach',
    timing: 'onFirstVisitOnly',
  },
  setting: {
    place: 'The front desk of the Hôtel Fleurie',
    city: 'Lyon',
    time: '9:04 PM, checking in late',
  },
  beats: [
    {
      kind: 'narration',
      size: 'md',
      text: 'You arrive late and the receptionist hands you a form. You already know every word you are about to say. One nasal vowel is going to decide which box she ticks.',
    },
    {
      kind: 'bubble',
      from: 'them',
      speaker: 'Réceptionniste',
      reveal: 'auto',
      fr: "Votre nationalité, s'il vous plaît ?",
      en: 'Your nationality, please?',
    },
    {
      kind: 'choice',
      size: 'lg',
      prompt: 'You are a man saying you are American. How do you say « je suis américain » ?',
      options: [
        {
          fr: 'je suis américain',
          respell: 'ZHUH SWEE A-MEH-REE-KANⁿ',
          en: 'the final N nasalizes the vowel and stays silent',
          outcome: 'works',
        },
        {
          fr: 'je suis américaine',
          respell: 'ZHUH SWEE A-MEH-REE-KEN',
          en: 'sounding the N, the way the spelling tempts you to',
          outcome: 'breaks',
        },
      ],
      followUp: {
        works: 'That is it. Now see how little has to change for the other one to come out.',
        breaks: 'That is the slip, and she has no reason to think you meant anything else.',
      },
    },
    {
      kind: 'break',
      size: 'lg',
      heading: 'One sounded N, and you changed gender.',
      body: 'Let the N out and the vowel stops being nasal. You have not made an accent mistake, you have said the feminine form. Both words exist, so nobody hears an error, they just hear the other one.',
      wrong: {
        fr: 'je suis américaine',
        ipa: '/ʒə sɥi ameʁikɛn/',
        respell: 'ZHUH SWEE A-MEH-REE-KEN',
        en: 'I am American, said by a woman',
      },
      right: {
        fr: 'je suis américain',
        ipa: '/ʒə sɥi ameʁikɛ̃/',
        respell: 'ZHUH SWEE A-MEH-REE-KANⁿ',
        en: 'I am American, said by a man',
      },
      coach: 'Send the vowel through the nose and stop before the tongue reaches the roof. The moment the N lands, the gender flips.',
    },
    {
      kind: 'bubble',
      from: 'them',
      speaker: 'Réceptionniste',
      reveal: 'tap',
      fr: 'Très bien, madame. Chambre 12.',
      en: 'Very good, madam. Room 12.',
      stage: "She ticks the « Madame » box without looking up.",
    },
    {
      kind: 'narration',
      size: 'md',
      text: 'The form goes in the drawer with the wrong box ticked, and nothing about the exchange sounded like a mistake.',
    },
    {
      kind: 'resolve',
      size: 'md',
      text: 'Nobody misheard you. A nasal vowel carries grammar on its own, and this lesson is about keeping the N in your nose instead of on your tongue.',
    },
  ],
  closing: {
    size: 'md',
    text: 'One sound changed your grammatical gender, with no letter added out loud. Nasal versus oral, that is exactly what gender sounds like in spoken French.',
  },
};

const nextLesson: Lesson = {
  ...lesson!,
  sections: [scene as unknown as Lesson['sections'][number], ...lesson!.sections.slice(1)],
};

const next = {
  ...seed,
  lessons: seed.lessons.map((l) => (l.id === LESSON_ID ? nextLesson : l)),
};

// ── Validators ──────────────────────────────────────────────────────────────

const issues = validateLesson(nextLesson);
if (issues.length) die(`the converted lesson does not validate:\n${formatIssues(issues)}`);

// ── Guards: nothing but that one section moved ──────────────────────────────

if (next.lessons.length - 1 !== OTHER_LESSONS) {
  die('this merge would add or drop a lesson. Something rewrote seed.json underneath it.');
}
if (next.items.length !== ITEM_COUNT) die('this merge would change the item count, which it must never do');
if (nextLesson.sections.length !== SECTION_COUNT) {
  die(`this merge would change the section count (${SECTION_COUNT} -> ${nextLesson.sections.length})`);
}

// Missions 2..20 must be byte-identical: this converts mission 1 and nothing
// else, and the lesson's other 19 sections are already published.
const beforeRest = JSON.stringify(lesson!.sections.slice(1));
const afterRest = JSON.stringify(nextLesson.sections.slice(1));
if (beforeRest !== afterRest) die('this merge altered a section other than mission 1');

// The closing line is the one string carried over verbatim from the story, and
// it is the sentence the mission is remembered by. Pin it.
const CLOSING =
  'One sound changed your grammatical gender, with no letter added out loud. ' +
  'Nasal versus oral, that is exactly what gender sounds like in spoken French.';
if (scene.closing.text !== CLOSING) die('the closing line drifted from the published story');
if ((before.closing as { en?: string })?.en !== CLOSING) {
  die('the published story closing is not what this was written against');
}

console.log(`  lesson: ${LESSON_ID} mission 1  story -> scene`);
console.log(`  beats: ${scene.beats.map((b) => b.kind).join(' > ')}`);
console.log(`  sections: ${SECTION_COUNT} (unchanged), missions 2-${SECTION_COUNT} byte-identical ✓`);
console.log(`  items: ${ITEM_COUNT} (untouched)`);
console.log('  validators: schema ✓  closing line preserved ✓');

if (DRY_RUN) {
  console.log('\n✓ dry run — all valid, nothing written.\n');
  process.exit(0);
}

writeFileSync(SEED, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(
  '\n✓ seed.json updated.' +
    '\n  IMPORTANT: seed.json now runs AHEAD of Postgres for sons.03.l1.' +
    '\n  Mission 1 of this lesson is already published, so a `pnpm content:publish`' +
    '\n  before the DB is re-authored will regenerate seed.json and REVERT this.\n'
);
