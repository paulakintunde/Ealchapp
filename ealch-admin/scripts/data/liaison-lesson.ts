// sons.10 "La liaison" — the lesson.
//
// THE ORGANISING IDEA
//
//   "The letter was never gone. It was waiting for a vowel."
//
// sons.06 taught "Silent unless there's a reason." and spent 27 missions
// proving final consonants are silent. This lesson has to tell a learner that
// those same consonants come back, which reads as a contradiction unless the
// two rules are stated as one. They are: the reason a final consonant sounds
// can be the NEXT WORD. A liaison is not an exception to silence, it is what
// silence was waiting for. Mission 1 is that tension and nothing else.
//
// The reframe is carried verbatim across the lesson, never reworded, exactly
// as sons.06 does. Seven appearances, pinned by the batch script AND by
// sons-10-liaison.test.ts, which must agree or the batch dies before writing.
//
// SHAPE, and why it is not sons.06 with linking
//
//   act1  The letter that came back   the contradiction, named
//   act2  Three consonants            z, then t, then n. Each its own angle.
//   act3  The sound is not the letter S and X wake as Z, D wakes as T
//   act4  The gaps that stay shut     interdite. The trap, and the whole
//                                     second half of the canDo.
//   act5  Use it                      speak, scenario, errors, listen
//   act6  Prove it                    reading, review, progress, quiz, roundup
//
// act3 exists because liaison has a failure mode silent letters did not: a
// learner can perform the mechanical step correctly and still produce the
// wrong sound. "less amis" has linked; it has also got it wrong. That deserves
// its own act rather than a footnote inside the z drill.
//
// act4 is the one sons.06 has no analogue for. 165 of the 221 corpus items
// link; the canDo says the learner must also NOT link when French forbids it.
// The three groupDrills in act2 are each given a different angle so they do
// not become three interchangeable missions (the debt sons.06 carries at its
// missions 20 and 23): z is taught by FREQUENCY, t by the fixed expressions
// that carry it, n by the nasal that survives underneath it.

import {
  type ErrorTrigger,
  type Lesson,
  type LessonDrill,
  type LessonSection,
  type QuizRound,
  type ReferenceSheet,
  type SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import {
  familyIds,
  LIAISON_IDS,
  obligationIds,
  taggedIds,
  text,
} from './liaison-corpus.ts';
import { TERMS } from './liaison-terms.ts';

// ---------------------------------------------------------------------------
// Corpus accessors. Nothing in this file retypes a transcription: every fr,
// ipa, respell and en is read from the corpus, which reads the 165 curated
// items straight out of the published seed. A fix there propagates here and
// the two can never drift. Mirrors muettes-lesson.ts.
// ---------------------------------------------------------------------------

/** The corpus stores IPA bare, the way the seed holds it. Every DISPLAY surface
 *  wraps it in slashes and the respelling in brackets: the density validator
 *  enforces both, and the notation sheet promises the learner that IPA is the
 *  thing in slashes. Wrapping here rather than at each call site means no
 *  section can forget. */
function display(id: string): { itemId: string; fr: string; ipa: string; respell: string; en: string } {
  const t = text(id);
  return {
    itemId: id,
    fr: t.fr,
    ipa: t.ipa ? `/${t.ipa}/` : '',
    respell: t.respell ? `[${t.respell}]` : '',
    en: t.en,
  };
}

const fr = (id: string): string => display(id).fr;
const ipa = (id: string): string => display(id).ipa;
const re = (id: string): string => display(id).respell;
const en = (id: string): string => display(id).en;
const back = (id: string): string => [ipa(id), re(id), en(id)].filter(Boolean).join(' · ');

const item = (id: string, note?: string) => ({ ...display(id), ...(note ? { note } : {}) });

// ---------------------------------------------------------------------------

export const REFRAME = 'The letter was never gone. It was waiting for a vowel.';

// ---------------------------------------------------------------------------
// act1 — the contradiction
// ---------------------------------------------------------------------------

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Last lesson you learned to stop saying letters. You got good at it. Now you are on a train platform in Lyon, and you are about to find out what that rule does not cover.',
  },
  {
    kind: 'bubble',
    from: 'them',
    speaker: 'Agent',
    reveal: 'auto',
    fr: 'Bonjour ! Vous avez un billet ?',
    en: 'Morning. Do you have a ticket?',
    stage: 'She says it fast, as one block of sound.',
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You heard something like "voo-za-vay-uhⁿ-bee-yay". You know all four of those words. You have never heard them stuck together like that, and the joins are where your ear gave up.',
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You want to say "yes, I have two tickets". How does « deux enfants » sound in « J\'ai deux enfants » ?',
    options: [
      {
        fr: fr('fr.sons.liaisons.171'),
        respell: re('fr.sons.liaisons.171'),
        en: 'the X comes back, as a Z, attached to enfants',
        outcome: 'works',
        audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
      },
      {
        fr: fr('fr.sons.liaisons.171'),
        respell: '[DEU ahⁿ-FAHⁿ]',
        en: 'the X stays silent, like last lesson taught you',
        outcome: 'breaks',
        audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
      },
    ],
    followUp: {
      works: 'That is it. Now look at why it is not the contradiction it appears to be.',
      breaks: 'That is exactly what last lesson taught you, applied faithfully. Watch what French does with it.',
    },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'You were not wrong. You were incomplete.',
    body: 'deux on its own really is /dø/, with a silent X. You were right to say it that way for a whole lesson. Put a vowel after it and the X comes back. It was never deleted, only dormant.',
    wrong: { fr: 'deux enfants', ipa: '/dø ɑ̃.fɑ̃/', respell: '[DEU ahⁿ-FAHⁿ]', en: 'two words, a gap between them' },
    right: {
      fr: fr('fr.sons.liaisons.171'),
      ipa: ipa('fr.sons.liaisons.171'),
      respell: re('fr.sons.liaisons.171'),
      en: en('fr.sons.liaisons.171'),
    },
    coach: REFRAME,
    audio: { mode: 'recorded', recordingId: 'rec-scene-break', autoplay: true, audioFirst: true },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Every silent letter you learned to drop is still on the page, and many of them come back before a vowel. That is this lesson, and it is why French sounds like one long word to you right now.',
  },
];

const SECTIONS_ACT1: LessonSection[] = [
  {
    type: 'scene',
    id: 's01-scene',
    title: 'The ticket you could not hear',
    frSub: 'Sur le quai',
    render: 'screens',
    layer: 'core',
    say: {
      text: 'You spent a whole lesson learning that French does not say its final consonants. This morning one of them came back, and it took a sentence with it.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'Gare Part-Dieu, platform B',
      city: 'Lyon',
      time: '7:15, a Thursday',
      image: 'lessons/liaison/scene-gare.jpg',
      ambience: 'room-tone-station',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: 'This lesson is about the consonants that wake up, the ones that refuse to, and how to tell which is which before you open your mouth.',
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What you walk out with',
    frSub: 'Vos objectifs',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    say: {
      text: 'Six things. Every one of them is something you do out loud, not something you can only recognise.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    goals: [
      { t: 'Link the Z family', s: 'Say les amis, vous avez, deux enfants and nous avons with the S and X coming back as a Z on the front of the next word.' },
      { t: 'Link the T family', s: "Say c'est un, quand il and tout à fait without hesitating at the join." },
      { t: 'Link the N family', s: 'Say mon ami and un homme with the N appearing and the nasal vowel still intact underneath it.' },
      { t: 'Get the sound right', s: 'Know that S and X wake as Z and D wakes as T, so les amis never comes out as less amis.' },
      { t: 'Stop at a sealed gap', s: 'Say et il, les héros and un enfant intelligent with the gap left open, because French forbids the link.' },
      { t: 'Hear the join in real speech', s: 'Catch vous avez as three words rather than one noise, at full speed, in a sentence you have not seen.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-anchors',
    title: 'Six things to hold on to',
    frSub: 'Les idées clés',
    render: 'deck',
    layer: 'core',
    size: 'md',
    hint: 'Swipe through. Nothing to answer yet.',
    terms: ['liaison', 'tie', 'devoicing'],
    say: {
      text: 'Six ideas. The rest of the lesson is these six, slowed right down.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    cards: [
      {
        head: REFRAME,
        body: 'That is the whole lesson. Last lesson gave you the default: silent. This lesson gives you the one thing that overrides it, and it is not a property of the word, it is the word that comes next.',
        imageRef: 'lessons/liaison/waiting.jpg',
      },
      {
        head: 'A vowel is the alarm clock',
        body: 'The consonant only wakes if the next word starts with a vowel sound. Consonant next door, and it stays asleep: les tickets keeps its S silent, les amis does not.',
      },
      {
        head: 'The sound moves forward',
        body: 'This is the part that fixes your ear. In les‿amis the Z does not end les, it starts amis. You are saying lay-ZAMEE. That is why French sounds like one long word: the joins are in the wrong places.',
      },
      {
        head: 'The letter changes on the way up',
        body: 'S and X wake up as a Z. D wakes up as a T. F wakes up as a V. Only T, N and L come back as themselves, so the spelling tells you that something happens, not what.',
      },
      {
        head: 'Three states, not two',
        body: 'Some links are compulsory, some are forbidden, and some are optional. The forbidden ones are a short list and they are where the errors are.',
      },
      {
        head: 'et never links',
        body: 'Of everything in this lesson, that is the one to bank first. et is the most tempting gap in French and it is sealed shut, always, in every register.',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// act2 — the three consonants.
//
// z, t and n get a mission each, and each is taught from a DIFFERENT angle so
// they do not become three interchangeable drills:
//   z  by frequency      it is half of all liaison; drill it to reflex
//   t  by the fixed set  c'est, quand, tout: expressions you say whole
//   n  by what survives  the nasal vowel stays nasal under the new N
// Each is followed by its own control page, folded onto the end of the mission
// it tests rather than given a whole slot of its own.
// ---------------------------------------------------------------------------

const SECTIONS_ACT2: LessonSection[] = [
  {
    type: 'teach',
    id: 's04-rule',
    title: 'One condition, and it is next door',
    frSub: 'La règle',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['liaison', 'tie'],
    say: {
      text: 'One rule, and then three consonants that obey it. Read this one slowly, because everything after it is practice.',
      voice: 'coach',
      timing: 'onEnter',
    },
    body: `A final consonant wakes when the next word begins with a vowel, and it lands on the front of that word. ${REFRAME} Nothing about the first word changed. What changed is next door.`,
  },

  {
    type: 'groupDrill',
    id: 's05-z',
    title: 'The Z: half of everything',
    frSub: 'La liaison en Z',
    render: 'screens',
    layer: 'core',
    size: 'xl',
    terms: ['liaison', 'devoicing'],
    audio: { mode: 'recorded', recordingId: 'rec-z-family', speeds: [1.0, 0.65], audioFirst: true },
    say: {
      text: 'Start here, because this one is worth more than the other two together. Every plural, every vous, every nous. Hear each one, then answer before you move on.',
      voice: 'coach',
      timing: 'onEnter',
    },
    groups: [
      {
        label: 'Plurals and pronouns',
        items: [
          item('fr.sons.liaisons.166', 'the S of les, back as a Z, on the front of amis'),
          item('fr.sons.liaisons.167', 'the most common liaison in the language'),
          item('fr.sons.liaisons.172', 'same shape, different pronoun'),
          item('fr.sons.liaisons.173', 'without the Z this is not French'),
          item('fr.sons.liaisons.171', 'the X of deux does exactly what an S does'),
          item('fr.sons.liaisons.177', 'a one-syllable preposition, so it always links'),
        ],
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's05-check-z',
    title: 'Check: the Z',
    frSub: 'Contrôle',
    render: 'screens',
    layer: 'core',
    size: 'xl',
    say: {
      text: 'One question before the next family.',
      voice: 'coach',
      timing: 'onEnter',
    },
    groups: [
      {
        label: 'Plurals and pronouns',
        items: [],
        check: {
          q: 'Which of these does NOT take a liaison?',
          opts: ['les amis', 'les tickets', 'vous avez', 'nous avons'],
          correct: 1,
          why: 'tickets starts with a consonant, so there is no vowel to wake the S. The condition is the next word, not the first one.',
        },
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's06-t',
    title: 'The T: the expressions you say whole',
    frSub: 'La liaison en T',
    render: 'screens',
    layer: 'core',
    size: 'xl',
    terms: ['liaison', 'devoicing'],
    audio: { mode: 'recorded', recordingId: 'rec-t-family', speeds: [1.0, 0.65], audioFirst: true },
    say: {
      text: 'These are not really six separate rules. They are six phrases French says as single blocks, and the T is the glue inside them. Learn them as whole things.',
      voice: 'coach',
      timing: 'onEnter',
    },
    groups: [
      {
        label: 'Fixed blocks',
        items: [
          item('fr.sons.liaisons.170', 'the most useful two words in the lesson'),
          item('fr.sons.liaisons.208', 'quand is written with a D and links with a T'),
          item('fr.sons.liaisons.174', 'an adjective in front of its noun always links'),
          item('fr.sons.liaisons.175', 'another D coming back as a T'),
          item('fr.sons.liaisons.193', 'same word, different vowel after it, same result'),
          item('fr.sons.liaisons.029', 'a set phrase you will use every day'),
        ],
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's06-check-t',
    title: 'Check: the T',
    frSub: 'Contrôle',
    render: 'screens',
    layer: 'core',
    size: 'xl',
    say: {
      text: 'One question, and it is the one people get wrong.',
      voice: 'coach',
      timing: 'onEnter',
    },
    groups: [
      {
        label: 'Fixed blocks',
        items: [],
        check: {
          q: 'In « quand il », which sound joins the two words?',
          opts: ['/d/, because quand is spelled with a D', '/t/', 'nothing, quand does not link'],
          correct: 1,
          why: 'A final D always comes back as a T, never as a D. The spelling tells you a consonant is there, not which one you will hear.',
        },
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's07-n',
    title: 'The N: the nasal underneath',
    frSub: 'La liaison en N',
    render: 'screens',
    layer: 'core',
    size: 'xl',
    terms: ['liaison', 'ipa'],
    audio: { mode: 'recorded', recordingId: 'rec-n-family', speeds: [1.0, 0.65], audioFirst: true },
    say: {
      text: 'This family has a trap the other two do not. An N appears, and the nasal vowel in front of it stays nasal. You are adding a sound, not swapping one.',
      voice: 'coach',
      timing: 'onEnter',
    },
    groups: [
      {
        label: 'Nasal, then N',
        items: [
          item('fr.sons.liaisons.169', 'still mohⁿ, and then an N as well'),
          item('fr.sons.liaisons.168', 'links straight through the silent H'),
          item('fr.sons.liaisons.176', 'en links everywhere it can'),
          item('fr.sons.liaisons.200', 'one year: the nasal survives'),
          item('fr.sons.liaisons.069', 'the same shape inside a sentence'),
          item('fr.sons.liaisons.070', 'possessive and noun, glued by grammar'),
        ],
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's07-check-n',
    title: 'Check: the N',
    frSub: 'Contrôle',
    render: 'screens',
    layer: 'core',
    size: 'xl',
    say: {
      text: 'Last one before the sound change.',
      voice: 'coach',
      timing: 'onEnter',
    },
    groups: [
      {
        label: 'Nasal, then N',
        items: [],
        check: {
          q: 'In « mon ami », what happens to the nasal vowel of mon?',
          opts: ['it becomes a plain /o/', 'it stays nasal, and an N is added after it', 'it disappears'],
          correct: 1,
          why: 'You keep the nasal and gain an N. Flattening the vowel to a plain O is the error here, and it makes mon ami sound like a different phrase.',
        },
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// act3 — the sound is not the letter.
//
// This act exists because liaison has a failure mode silent letters did not:
// the learner can do the mechanical step and still be wrong. It is the reason
// z dominates the corpus at 102 occurrences and the reason "less amis" is the
// most audible learner error in this area.
// ---------------------------------------------------------------------------

const SECTIONS_ACT3: LessonSection[] = [
  {
    type: 'trapDrill',
    id: 's08-trap-sound',
    title: 'The letter you write is not the sound you get',
    frSub: 'Le piège du son',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['devoicing', 'ipa'],
    audio: { mode: 'recorded', recordingId: 'rec-devoicing-pairs', speeds: [1.0, 0.65], audioFirst: true },
    say: {
      text: 'This is the hardest thing in the lesson and it is not about deciding whether to link. It is about what comes out once you have decided. Slow down here.',
      voice: 'coach',
      timing: 'onEnter',
    },
    cards: [
      { promptLabel: 'S wakes as Z', promptSound: '/z/', fr: fr('fr.sons.liaisons.166'), ipa: ipa('fr.sons.liaisons.166'), tip: 'Not less amis. The S softens all the way to a Z on its way up.' },
      { promptLabel: 'X wakes as Z', promptSound: '/z/', fr: fr('fr.sons.liaisons.171'), ipa: ipa('fr.sons.liaisons.171'), tip: 'The X behaves exactly like an S. There is no ks sound anywhere in this.' },
      { promptLabel: 'D wakes as T', promptSound: '/t/', fr: fr('fr.sons.liaisons.175'), ipa: ipa('fr.sons.liaisons.175'), tip: 'Written grand, said grahⁿ-T. A D never comes back as a D.' },
      { promptLabel: 'F wakes as V', promptSound: '/v/', fr: fr('fr.sons.liaisons.084'), ipa: ipa('fr.sons.liaisons.084'), tip: 'neuf heures. The only common F liaison, and it goes to V.' },
      { promptLabel: 'T stays T', promptSound: '/t/', fr: fr('fr.sons.liaisons.170'), ipa: ipa('fr.sons.liaisons.170'), tip: 'T, N and L are the steady ones. They come back as themselves.' },
      { promptLabel: 'N stays N', promptSound: '/n/', fr: fr('fr.sons.liaisons.169'), ipa: ipa('fr.sons.liaisons.169'), tip: 'No change on the way up, but keep the nasal underneath it.' },
    ],
    drill: [
      { promptSay: 'Which one comes back as a /z/?', opts: ['grand arbre', 'les amis', "c'est un", 'mon ami'], correct: 1 },
      { promptSay: 'In « grand arbre », what do you actually say?', opts: ['grahⁿ-D-arbr', 'grahⁿ-T-arbr', 'grahⁿ arbr'], correct: 1 },
      { promptSay: 'Odd one out. Which letter does NOT change when it wakes up?', opts: ['S', 'X', 'D', 'N'], correct: 3 },
      { promptSay: 'A learner says « less amis ». What went wrong?', opts: ['they should not have linked at all', 'they linked, but with an S instead of a Z', 'they linked the wrong two words'], correct: 1 },
      { promptSay: 'In « neuf heures », the F is said as:', opts: ['/f/', 'nothing', '/v/'], correct: 2 },
    ],
    steps: [
      { kind: 'cards', label: 'The changes', title: 'Six letters, four of them change' },
      { kind: 'audio', label: 'Hear it', title: 'Hear the letter become a different sound' },
      { kind: 'drill', label: 'Reflex', title: 'Now say the right sound without checking', gate: true },
    ],
  },

  {
    type: 'flashcards',
    id: 's09-flashcards',
    title: 'The joins worth banking',
    frSub: 'Le vocabulaire',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    terms: ['liaison', 'devoicing'],
    cards: [
      { front: fr('fr.sons.liaisons.166'), back: back('fr.sons.liaisons.166'), say: fr('fr.sons.liaisons.166') },
      { front: fr('fr.sons.liaisons.167'), back: back('fr.sons.liaisons.167'), say: fr('fr.sons.liaisons.167') },
      { front: fr('fr.sons.liaisons.168'), back: back('fr.sons.liaisons.168'), say: fr('fr.sons.liaisons.168') },
      { front: fr('fr.sons.liaisons.169'), back: back('fr.sons.liaisons.169'), say: fr('fr.sons.liaisons.169') },
      { front: fr('fr.sons.liaisons.170'), back: back('fr.sons.liaisons.170'), say: fr('fr.sons.liaisons.170') },
      { front: fr('fr.sons.liaisons.171'), back: back('fr.sons.liaisons.171'), say: fr('fr.sons.liaisons.171') },
      { front: fr('fr.sons.liaisons.172'), back: back('fr.sons.liaisons.172'), say: fr('fr.sons.liaisons.172') },
      { front: fr('fr.sons.liaisons.173'), back: back('fr.sons.liaisons.173'), say: fr('fr.sons.liaisons.173') },
      { front: fr('fr.sons.liaisons.174'), back: back('fr.sons.liaisons.174'), say: fr('fr.sons.liaisons.174') },
      { front: fr('fr.sons.liaisons.175'), back: back('fr.sons.liaisons.175'), say: fr('fr.sons.liaisons.175') },
      { front: fr('fr.sons.liaisons.176'), back: back('fr.sons.liaisons.176'), say: fr('fr.sons.liaisons.176') },
      { front: fr('fr.sons.liaisons.177'), back: back('fr.sons.liaisons.177'), say: fr('fr.sons.liaisons.177') },
    ],
  },
];

// ---------------------------------------------------------------------------
// act4 — the gaps that stay shut.
//
// This is the half of the canDo the 165 could not teach, and it is where the
// errors live. It is also the act that most needs real recordings: on every
// pair here, device TTS may produce the OPPOSITE of what the card teaches.
// See the AUDIO RISK block at the bottom of this file.
// ---------------------------------------------------------------------------

const SECTIONS_ACT4: LessonSection[] = [
  {
    type: 'trapDrill',
    id: 's10-trap-interdite',
    title: 'The gaps French keeps shut',
    frSub: 'La liaison interdite',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['interdite', 'hAspire'],
    audio: { mode: 'recorded', recordingId: 'rec-interdite-pairs', speeds: [1.0, 0.65], audioFirst: true },
    say: {
      text: 'You have spent half an hour learning to link. Now the other half of the rule, and it is the half that trips people. In each of these the consonant is right there and French refuses to use it.',
      voice: 'coach',
      timing: 'onEnter',
    },
    cards: [
      { promptLabel: 'et, never', promptSound: 'no link', fr: fr('fr.sons.liaisons.178'), ipa: ipa('fr.sons.liaisons.178'), tip: 'The one to learn first. et has a silent T and it stays silent in every register, forever.' },
      { promptLabel: 'h aspiré blocks', promptSound: 'no link', fr: fr('fr.sons.liaisons.181'), ipa: ipa('fr.sons.liaisons.181'), tip: 'Compare les amis. Same article, same silent S, and here it stays asleep.' },
      { promptLabel: 'h aspiré blocks', promptSound: 'no link', fr: fr('fr.sons.liaisons.183'), ipa: ipa('fr.sons.liaisons.183'), tip: 'en links everywhere else in the language. haut stops it.' },
      { promptLabel: 'noun, then adjective', promptSound: 'no link', fr: fr('fr.sons.liaisons.187'), ipa: ipa('fr.sons.liaisons.187'), tip: 'A singular noun does not link to the adjective after it. Word order decides, not spelling.' },
      { promptLabel: 'a name', promptSound: 'no link', fr: fr('fr.sons.liaisons.211'), ipa: ipa('fr.sons.liaisons.211'), tip: 'A personal name does not link to its verb.' },
      { promptLabel: 'the number', promptSound: 'no link', fr: fr('fr.sons.liaisons.189'), ipa: ipa('fr.sons.liaisons.189'), tip: 'onze behaves like an h aspiré word, and so does un when it means one.' },
    ],
    drill: [
      { promptSay: 'Which one do you link?', opts: ['et il', 'les héros', 'quand il', 'en haut'], correct: 2 },
      { promptSay: 'Odd one out. Which one is BLOCKED?', opts: ['les amis', 'les hommes', 'les héros', 'les enfants'], correct: 2 },
      { promptSay: 'In « un enfant intelligent », how many liaisons do you make?', opts: ['none', 'one', 'two'], correct: 1 },
      { promptSay: 'Which is the safest thing to remember about « et » ?', opts: ['it links before a vowel', 'it never links', 'it links only in formal speech'], correct: 1 },
      { promptSay: 'How do you know « héros » blocks the link?', opts: ['the H is written differently', 'you can hear the H', 'you cannot tell from the word, you learn it'], correct: 2 },
    ],
    steps: [
      { kind: 'cards', label: 'The gaps', title: 'Six sealed joins' },
      { kind: 'audio', label: 'Hear it', title: 'Hear the gap stay open' },
      { kind: 'drill', label: 'Reflex', title: 'Link or stop, without checking', gate: true },
    ],
  },

  {
    type: 'inhibitionDrill',
    id: 's11-inhibition',
    title: 'Training the stop',
    frSub: "Apprendre à s'arrêter",
    render: 'screens',
    layer: 'core',
    size: 'md',
    swipe: true,
    imageRef: 'lessons/liaison/the-stop.jpg',
    terms: ['interdite', 'hAspire'],
    say: {
      text: 'Not linking is harder than linking, because by now the link is the reflex you just built. What you are training here is the override, and it is physical.',
      voice: 'coach',
      timing: 'onEnter',
    },
    intro:
      'For the last half hour you have been rewarded every time you joined two words. That reflex is now running faster than your judgement, which is exactly what you wanted, and exactly what makes the forbidden set hard. You cannot fix this by knowing the rule. You fix it by practising the stop until the stop is also a reflex.',
    targets: [
      {
        label: 'The et stop',
        sub: 'For every et before a vowel',
        steps: [
          'Read the phrase to yourself and find the et.',
          'Say the word before et, then stop completely. Close your mouth.',
          'Start et as though it were the first word of a new sentence.',
          'Run the two halves together at speed, keeping the gap.',
          'Repeat until leaving the gap costs you no effort at all.',
        ],
        practiceOn: ['fr.sons.liaisons.178', 'fr.sons.liaisons.179', 'fr.sons.liaisons.180', 'fr.sons.liaisons.197'],
        mic: true,
        audio: { mode: 'recorded', recordingId: 'rec-interdite-pairs' },
      },
      {
        label: 'The h aspiré pair test',
        sub: 'For any word starting with H',
        steps: [
          'Say the word with les in front of it, linked, as though it were h muet.',
          'Say it again with the gap left open.',
          'Pick the one you have actually heard from a French speaker.',
          'If you have never heard it, treat it as h muet and link: that is the more common kind.',
          'Bank the exceptions as a list. There are fewer than twenty you will meet this year.',
        ],
        practiceOn: ['fr.sons.liaisons.181', 'fr.sons.liaisons.182', 'fr.sons.liaisons.184', 'fr.sons.liaisons.195'],
        mic: true,
        audio: { mode: 'recorded', recordingId: 'rec-h-pairs' },
      },
      {
        label: 'The noun-adjective stop',
        sub: 'For a singular noun followed by an adjective',
        steps: [
          'Find the noun and the adjective after it.',
          'Ask whether the adjective is BEFORE or AFTER the noun.',
          'Before the noun, link it. After the noun, leave it.',
          'Say the phrase both ways and notice how wrong the linked version sounds once you know.',
        ],
        practiceOn: ['fr.sons.liaisons.186', 'fr.sons.liaisons.187', 'fr.sons.liaisons.188', 'fr.sons.liaisons.186'],
        mic: true,
        audio: { mode: 'recorded', recordingId: 'rec-interdite-pairs' },
      },
    ],
    closing: {
      text: `${REFRAME} And in these cases the vowel arrives and the letter still does not come, because French has decided this particular join is closed. Practise the stop for thirty seconds a day and it stops being a decision.`,
    },
  },

  {
    type: 'examples',
    id: 's12-examples',
    title: 'Both rules, one sentence at a time',
    frSub: 'En contexte',
    render: 'screens',
    layer: 'core',
    size: 'xl',
    terms: ['obligatoire', 'interdite'],
    examples: [
      { fr: fr('fr.sons.liaisons.188'), en: en('fr.sons.liaisons.188'), note: 'link, link, then stop' },
      { fr: fr('fr.sons.liaisons.194'), en: en('fr.sons.liaisons.194'), note: 'two links around an et that refuses' },
      { fr: fr('fr.sons.liaisons.192'), en: en('fr.sons.liaisons.192'), note: 'the famous liaison, then a sealed et' },
      { fr: fr('fr.sons.liaisons.190'), en: en('fr.sons.liaisons.190'), note: 'a name does not link, then est‿une does' },
      { fr: fr('fr.sons.liaisons.185'), en: en('fr.sons.liaisons.185'), note: 'h aspiré, then a plural noun that also does not link' },
      { fr: fr('fr.sons.liaisons.196'), en: en('fr.sons.liaisons.196'), note: 'les does not link to huit, huit does link to heures' },
      { fr: fr('fr.sons.liaisons.180'), en: en('fr.sons.liaisons.180'), note: 'the most tempting et in the language' },
      { fr: fr('fr.sons.liaisons.197'), en: en('fr.sons.liaisons.197'), note: 'nothing links here at all' },
    ],
  },

  {
    type: 'teach',
    id: 's13-optional',
    title: 'The third state, and what to do about it',
    frSub: 'La liaison facultative',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['facultative'],
    audio: { mode: 'recorded', recordingId: 'rec-facultative-pairs', speeds: [1.0, 0.65] },
    say: {
      text: 'There is a third group, and you need to know it exists so it does not confuse you. You do not need to master it today.',
      voice: 'coach',
      timing: 'onEnter',
    },
    body:
      'Some liaisons are optional. Je suis allé is correct both ways: linked is formal, unlinked is what friends say. Your default is to leave them alone. Skipping one sounds native. Adding a forbidden one sounds wrong, so the risks are not the same size.',
  },

  {
    type: 'dictation',
    id: 's14-dictation',
    title: 'Write the letter you can hear',
    frSub: 'Dictée',
    render: 'screens',
    layer: 'core',
    size: 'md',
    questionsInModal: true,
    audio: { mode: 'recorded', recordingId: 'rec-dictation-12', maxPlays: 3, speeds: [1.0, 0.65] },
    terms: ['ipa'],
    say: {
      text: 'The other direction now. You will hear a liaison and have to work out which two words made it, then write them both with the silent letter in place.',
      voice: 'coach',
      timing: 'onEnter',
    },
    itemIds: [
      'fr.sons.liaisons.166',
      'fr.sons.liaisons.167',
      'fr.sons.liaisons.169',
      'fr.sons.liaisons.171',
      'fr.sons.liaisons.065',
      'fr.sons.liaisons.066',
      'fr.sons.liaisons.069',
      'fr.sons.liaisons.180',
      'fr.sons.liaisons.185',
      'fr.sons.liaisons.188',
      'fr.sons.liaisons.190',
      'fr.sons.liaisons.194',
    ],
  },

  {
    type: 'listening',
    id: 's15-listening',
    title: 'A message about the weekend',
    frSub: 'Compréhension orale',
    render: 'screens',
    layer: 'core',
    size: 'md',
    questionsInModal: true,
    audio: { mode: 'recorded', recordingId: 'rec-listening-passage', speeds: [1.0, 0.65] },
    say: {
      text: 'A voice message at natural speed. The joins are what make this hard, not the words. Use the slow button and count the liaisons.',
      voice: 'coach',
      timing: 'onEnter',
    },
    lines: [
      { fr: 'Salut ! Nous avons un petit appartement à Lyon.', en: 'Hi. We have a small flat in Lyon.' },
      { fr: 'Mes amis arrivent samedi et ils restent trois jours.', en: 'My friends arrive Saturday and they are staying three days.' },
      { fr: 'On a invité les autres aussi.', en: 'We invited the others too.' },
      { fr: "C'est un grand appartement, mais pas immense.", en: 'It is a big flat, but not enormous.' },
      { fr: 'Vous êtes libres ? Venez vers huit heures.', en: 'Are you free? Come around eight.' },
    ],
    questions: [
      { q: 'Where is the flat?', opts: ['Paris', 'Lyon', 'Marseille'], correct: 1 },
      { q: 'When do the friends arrive?', opts: ['Friday', 'Saturday', 'Sunday'], correct: 1 },
      { q: 'How long are they staying?', opts: ['two days', 'three days', 'a week'], correct: 1 },
      { q: 'In « et ils restent », do you hear a liaison on et?', opts: ['yes, a /t/', 'no, et never links'], correct: 1 },
      { q: 'In « Nous avons », the linking sound is:', opts: ['/s/', '/z/', 'none'], correct: 1 },
      { q: 'What time should you arrive?', opts: ['six', 'seven', 'eight'], correct: 2 },
    ],
  },
];

// ---------------------------------------------------------------------------
// act5 — use it
// ---------------------------------------------------------------------------

const SECTIONS_ACT5: LessonSection[] = [
  {
    type: 'practice',
    id: 's16-speak',
    title: 'Say it out loud',
    frSub: 'À vous',
    skill: 'speak',
    render: 'screens',
    layer: 'core',
    size: 'xl',
    questionsInModal: true,
    audio: { mode: 'mic', modelPlayback: true, scoreOn: 'targetSegment', speeds: [1.0, 0.65] },
    terms: ['obligatoire', 'devoicing'],
    say: {
      text: 'Ten of them, and the scoring listens to the join rather than the whole phrase. Tap, speak, then listen to the model and go again if the join felt wrong.',
      voice: 'coach',
      timing: 'onEnter',
    },
    itemIds: [
      'fr.sons.liaisons.166',
      'fr.sons.liaisons.167',
      'fr.sons.liaisons.169',
      'fr.sons.liaisons.171',
      'fr.sons.liaisons.174',
      'fr.sons.liaisons.175',
      'fr.sons.liaisons.178',
      'fr.sons.liaisons.181',
      'fr.sons.liaisons.188',
      'fr.sons.liaisons.196',
    ],
  },

  {
    type: 'scenario',
    id: 's17-scenario',
    title: 'Back on the platform',
    frSub: 'Au guichet',
    render: 'screens',
    layer: 'core',
    size: 'md',
    imageRef: 'lessons/liaison/scene-guichet.jpg',
    say: {
      text: 'The conversation you could not have this morning. Five turns, and every line you pick has a join in it.',
      voice: 'coach',
      timing: 'onEnter',
    },
    setting: 'Gare Part-Dieu, the ticket window, ten minutes before the train',
    turns: [
      { ai: 'Bonjour ! Vous avez un billet ?', en: 'Morning. Do you have a ticket?', user: "Non, c'est un aller simple pour Paris." },
      { ai: 'Vous êtes combien ?', en: 'How many of you?', user: 'Nous avons deux enfants avec nous.' },
      { ai: 'Le train part dans une heure.', en: 'The train leaves in an hour.', user: "D'accord, c'est un bon horaire." },
      { ai: 'Vous voulez les places à côté ?', en: 'Do you want the seats together?', user: 'Oui, mes amis arrivent aussi.' },
      { ai: 'Voilà. Bon voyage !', en: 'Here you go. Have a good trip.', user: 'Merci beaucoup et bonne journée.' },
    ],
  },

  {
    type: 'commonErrors',
    id: 's18-errors',
    title: 'Eight things everyone gets wrong',
    frSub: 'Les erreurs classiques',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    swipe: true,
    terms: ['devoicing', 'interdite'],
    audio: { mode: 'recorded', wrongThenRight: true, speeds: [1.0, 0.65] },
    say: {
      text: 'Every one of these is a good instinct pointed slightly wrong. Most of them come from applying something you learned correctly, one step too far.',
      voice: 'coach',
      timing: 'onEnter',
    },
    errors: [
      { wrong: 'les amis said as [less a-MEE]', right: `les amis ${ipa('fr.sons.liaisons.166')} ${re('fr.sons.liaisons.166')}`,
        why: 'You linked, which was right, and you used the letter that was written, which felt right. French softens that S all the way to a Z. The mechanical step was correct and the sound was not.' },
      { wrong: 'les amis said as [LAYZ a-MEE]', right: `les amis ${re('fr.sons.liaisons.166')}`,
        why: 'You put the Z at the end of les instead of the start of amis. English joins words at their edges; French moves the consonant forward into the next word, and that is why French sounds like one continuous stream to you.' },
      { wrong: 'grand arbre said as [grahⁿ-D-ARBR]', right: `grand arbre ${re('fr.sons.liaisons.175')}`,
        why: 'The word is spelled with a D so you said a D. A final D always wakes up as a T. There is no French word where a linking D stays a D.' },
      { wrong: 'et il said as [ay-T-EEL]', right: `et il ${re('fr.sons.liaisons.178')}`,
        why: 'By this point in the lesson linking is your reflex, and et has a T sitting right there. It is the one word in French that never links, and the reflex you just built is exactly what makes this error.' },
      { wrong: 'les héros said as [lay-Z-ay-ROH]', right: `les héros ${re('fr.sons.liaisons.181')}`,
        why: 'You applied the les rule faithfully. héros carries an h aspiré, which blocks the link, and nothing in the spelling tells you that. This is learned word by word, not derived.' },
      { wrong: 'un enfant intelligent linked twice', right: `un enfant intelligent ${re('fr.sons.liaisons.186')}`,
        why: 'The first link is compulsory and the second is forbidden. A singular noun does not link to the adjective after it, so the same sentence needs two opposite decisions two words apart.' },
      { wrong: 'mon ami said as [moh-na-MEE]', right: `mon ami ${re('fr.sons.liaisons.169')}`,
        why: 'You added the N and flattened the nasal vowel to get there. The nasal stays: you are adding a consonant, not trading the vowel for one.' },
      { wrong: 'linking every optional liaison', right: 'leaving optional liaisons alone',
        why: 'Once linking feels like progress, more of it feels like more progress. Over-linking is the most common marker of a learner who has just studied this topic, and the safe default is the opposite of the instinct.' },
    ],
  },

  {
    type: 'practice',
    id: 's19-listen',
    title: 'Linked or not',
    frSub: 'Écoutez et décidez',
    skill: 'listen',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    questionsInModal: true,
    audio: { mode: 'recorded', recordingId: 'rec-minimal-pairs', speeds: [1.0, 0.65], audioFirst: true },
    terms: ['obligatoire', 'interdite'],
    say: {
      text: 'Audio first this time. You will hear one of a pair and decide which one it was. If you cannot tell them apart yet, use the slow button: the difference is real.',
      voice: 'coach',
      timing: 'onEnter',
    },
    itemIds: [
      'fr.sons.liaisons.166',
      'fr.sons.liaisons.181',
      'fr.sons.liaisons.173',
      'fr.sons.liaisons.203',
      'fr.sons.liaisons.168',
      'fr.sons.liaisons.195',
      'fr.sons.liaisons.208',
      'fr.sons.liaisons.178',
      'fr.sons.liaisons.210',
      'fr.sons.liaisons.211',
    ],
  },
];

// ---------------------------------------------------------------------------
// act6 — prove it
// ---------------------------------------------------------------------------

const SECTIONS_ACT6: LessonSection[] = [
  {
    type: 'reading',
    id: 's20-reading',
    title: 'Sixty words, fourteen joins',
    frSub: 'Lecture',
    render: 'screens',
    layer: 'core',
    size: 'md',
    questionsInModal: true,
    audio: { mode: 'recorded', recordingId: 'rec-reading-passage', perSentenceReplay: true, speeds: [1.0, 0.65] },
    terms: ['obligatoire', 'interdite'],
    say: {
      text: 'Read it silently and mark where you think the joins are. Then tap any sentence to hear it and check.',
      voice: 'coach',
      timing: 'onEnter',
    },
    text: [
      'Mes amis habitent un petit appartement à Lyon.',
      'Ils ont deux enfants et une vieille chatte.',
      "C'est un immeuble ancien, mais très agréable.",
      'Les enfants attendent les vacances avec impatience.',
      'En hiver, on arrive vers huit heures et on reste tard.',
      'Les héros de leurs livres sont toujours en avance.',
    ].join(' '),
    questions: [
      { q: 'Find three liaisons in the first two sentences and say which consonant you hear in each.',
        a: 'mes‿amis is a /z/, un petit‿appartement is a /t/, ils‿ont is a /z/. deux‿enfants is a fourth, also a /z/.' },
      { q: 'There are two places in this passage where a link is forbidden. Where are they, and why?',
        a: 'et une and et on: et never links. And les héros, because héros carries an h aspiré that blocks it.' },
      { q: 'Why does « un immeuble ancien » have only one liaison and not two?',
        a: 'un‿immeuble links because a determiner links to its noun. immeuble ancien does not, because a singular noun does not link to the adjective after it.' },
    ],
  },

  {
    type: 'reviewDeck',
    id: 's21-review',
    title: 'The system, not the phrases',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['liaison', 'interdite', 'devoicing'],
    say: {
      text: 'Ten cards. Answer each one out loud before you swipe.',
      voice: 'coach',
      timing: 'onEnter',
    },
    cards: [
      { front: 'What wakes a silent final consonant', back: REFRAME },
      { front: 'Where the woken consonant actually lands', back: 'On the front of the NEXT word. les‿amis is lay-ZAMEE, not LAYZ amee.' },
      { front: 'What S and X come back as', back: 'A /z/. Never an /s/. les‿amis, deux‿enfants.' },
      { front: 'What D comes back as', back: 'A /t/. grand‿arbre is grahⁿ-T-arbr.' },
      { front: 'The three states of liaison', back: 'Obligatoire, interdite, facultative. Compulsory, forbidden, optional.' },
      { front: 'The word that never links', back: 'et. In any register, in any sentence, forever.' },
      { front: 'What an h aspiré does', back: 'Blocks the link, makes no sound, and cannot be spotted from the spelling. les héros stays open.' },
      { front: 'A singular noun and the adjective after it', back: 'No link. un enfant | intelligent.' },
      { front: 'Your default when a liaison is optional', back: 'Leave it. Skipping sounds native, over-linking sounds like an error.' },
      { front: 'How this connects to last lesson', back: 'Silent unless there is a reason, and the next word can be the reason.' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's22-progress',
    title: 'Where you are',
    frSub: 'Votre progression',
    render: 'screens',
    layer: 'core',
    size: 'md',
    say: {
      text: 'Before the quiz, look at what changed in the last hour.',
      voice: 'coach',
      timing: 'onEnter',
    },
    body:
      'An hour ago a French sentence was one continuous noise and you could not find the word boundaries in it. The reason was not speed. It was that French moves consonants across the gaps, so the joins you were listening for are not where the spaces are. You now know which consonants move, what they turn into on the way, and which gaps stay shut. That is the single biggest step available in French listening, and it is why this lesson sits where it does.',
    stats: [
      { k: 'Joins mastered', v: '22' },
      { k: 'Trap conquered', v: 'et, and the h aspiré set' },
      { k: 'XP earned', v: '380' },
      { k: 'Next up', v: "L'élision, where the vowel moves instead" },
    ],
  },
];

// ---------------------------------------------------------------------------
// The quiz. 40 questions in 5 rounds of 8.
//
// Sized up from sons.06's 32 because this lesson has three states rather than
// a binary and a sound-change act that silent letters did not need. Every
// round targets one error trigger so a failed round fires the right drill.
//
// listenChoose and speak carry deliberate weight here: liaison is audible, and
// a learner can pass a purely written quiz on it while linking nothing aloud.
// errorSpot is the natural home for liaison interdite.
// ---------------------------------------------------------------------------

const QUIZ_ROUNDS: QuizRound[] = [
  {
    id: 'round1',
    label: 'The link itself',
    targets: ['err-no-link'],
    say: { text: 'Round one. Does the consonant wake up, and where does it land.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'When does a silent final consonant come back?', format: 'mcq',
        opts: ['when the next word starts with a vowel sound', 'when the word is plural', 'when the word is stressed'], correct: 0,
        why: 'The condition is next door, not inside the word. les is /le/ before a consonant and /le.z‿/ before a vowel.', ref: 's04-rule' },
      { q: 'In « les amis », the Z sound belongs to:', format: 'mcq',
        opts: ['the end of les', 'the start of amis', 'both equally'], correct: 1,
        why: 'The consonant moves forward into the next word. Saying LAYZ amee keeps an English join and is what makes French sound like one long word to you.', ref: 's03-anchors' },
      { q: 'Which of these takes a liaison?', format: 'mcq',
        opts: ['les tickets', 'les places', 'les amis', 'les billets'], correct: 2,
        why: 'Only amis begins with a vowel. The other three start with consonants, so the S of les stays asleep.', ref: 's05-z' },
      { q: 'Tap the letter that wakes up.', format: 'tapSilent',
        word: 'les amis', correct: 's',
        why: 'The S of les, silent on its own, comes back as a /z/ on the front of amis.', ref: 's05-z' },
      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-minimal-pairs', clip: 'ils-ont' },
        opts: ['ils ont', 'ils sont'], correct: 0,
        why: 'ils‿ont has a /z/ join and means they have. ils sont has no liaison and means they are. The link is the only difference.', ref: 's19-listen' },
      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-z-family', clip: 'vous-avez' },
        opts: ['vous avez', 'vous savez'], correct: 0,
        why: 'vous‿avez links a /z/ onto avez. vous savez has its own S at the start of savez. Same sound, different word boundary.', ref: 's05-z' },
      { q: 'Type how « nous avons » sounds.', format: 'typeIn',
        accept: ['/nu.z‿a.vɔ̃/', 'nu.z‿a.vɔ̃', 'noo-z‿a-VOHⁿ', 'noozavohn', 'noo za vohn'],
        answer: `${ipa('fr.sons.liaisons.172')} ${re('fr.sons.liaisons.172')}`,
        why: 'A subject pronoun always links to its verb. The S of nous returns as a /z/ on the front of avons.', ref: 's05-z' },
      { q: 'Say it: « Nous avons deux enfants. »', format: 'speak',
        target: 'Nous avons deux enfants.', ipa: '/nu.z‿a.vɔ̃ dø.z‿ɑ̃.fɑ̃/', scoreSegment: 'dø.z‿ɑ̃',
        why: 'Two liaisons, both /z/. The X of deux behaves exactly like an S.', ref: 's16-speak' },
    ],
  },

  {
    id: 'round2',
    label: 'The sound it comes back as',
    targets: ['err-wrong-sound'],
    say: { text: 'Round two. You have decided to link. Now get the sound right.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'A final S or X wakes up as:', format: 'mcq',
        opts: ['/s/', '/ks/', '/z/'], correct: 2,
        why: 'Both soften to /z/. This is why the corpus is full of Z liaisons and why less amis is the most audible learner error here.', ref: 's08-trap-sound' },
      { q: 'A final D wakes up as:', format: 'mcq',
        opts: ['/d/', 'it stays silent', '/t/'], correct: 2,
        why: 'grand‿arbre is grahⁿ-T-arbr. No French liaison brings a D back as a D.', ref: 's08-trap-sound' },
      { q: 'Which of these letters comes back as ITSELF?', format: 'mcq',
        opts: ['S', 'X', 'D', 'N'], correct: 3,
        why: 'T, N and L return unchanged. S, X, D and F all change on the way up, so spelling tells you that a sound appears, not which.', ref: 's08-trap-sound' },
      { q: 'In « neuf heures », the F is said as:', format: 'mcq',
        opts: ['/f/', '/v/', 'nothing'], correct: 1,
        why: 'The one common F liaison in the language, and it goes to /v/. neu-v‿EUR.', ref: 's08-trap-sound' },
      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-devoicing-pairs', clip: 'grand-arbre' },
        opts: ['grand arbre with a /d/', 'grand arbre with a /t/'], correct: 1,
        why: 'Written with a D, said with a T. If these sound identical to you, play it at 0.65 and listen to the release.', ref: 's08-trap-sound' },
      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-devoicing-pairs', clip: 'les-amis' },
        opts: ['lay-z‿a-MEE', 'less a-MEE'], correct: 0,
        why: 'The /z/ is voiced and soft. An /s/ here is the single most common mistake an English reader makes in this lesson.', ref: 's08-trap-sound' },
      { q: 'A learner says [grahⁿ-D-ARBR] for « grand arbre ». Fix it.', format: 'errorSpot',
        accept: ['grahⁿ-t‿ARBR', 'grahⁿ-T-arbr', '/ɡʁɑ̃.t‿aʁbʁ/', 'grant arbre', 'grahn tarbr'],
        answer: `grand arbre ${ipa('fr.sons.liaisons.175')} ${re('fr.sons.liaisons.175')}`,
        why: 'They linked correctly and used the written letter. A final D always surfaces as a T.', ref: 's08-trap-sound' },
      { q: 'Say it: « Elle a un petit ami. »', format: 'speak',
        target: 'Elle a un petit ami.', ipa: '/ɛ.l‿a œ̃ pə.ti.t‿a.mi/', scoreSegment: 'pə.ti.t‿a',
        why: 'petit ends on a vowel alone. Before a vowel its T wakes and lands on the front of ami.', ref: 's16-speak' },
    ],
  },

  {
    id: 'round3',
    label: 'The gaps that stay shut',
    targets: ['err-over-link'],
    say: { text: 'Round three. The half that trips everyone, because by now linking is your reflex.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'How often does « et » take a liaison?', format: 'mcq',
        opts: ['always before a vowel', 'only in formal speech', 'never'], correct: 2,
        why: 'Never, in any register, in any sentence. It is the one absolute rule in this lesson and the most tempting gap in the language.', ref: 's10-trap-interdite' },
      { q: 'Why does « les héros » not link?', format: 'mcq',
        opts: ['héros starts with a consonant', 'héros is plural', 'the H is aspiré and blocks it'], correct: 2,
        why: 'H aspiré makes no sound but blocks both liaison and elision. Compare les‿hommes, where the h muet lets the link straight through.', ref: 's10-trap-interdite' },
      { q: 'In « un enfant intelligent », how many liaisons do you make?', format: 'mcq',
        opts: ['none', 'one', 'two'], correct: 1,
        why: 'un‿enfant links because a determiner links to its noun. enfant intelligent does not, because a singular noun never links to the adjective after it.', ref: 's10-trap-interdite' },
      { q: 'Can you tell from the spelling whether an H blocks the link?', format: 'mcq',
        opts: ['yes, aspiré words are written with a different H', 'yes, if the word is short', 'no, you learn it word by word'], correct: 2,
        why: 'Nothing on the page distinguishes them, and no rule derives it. You learn h aspiré words the way you learn a noun with its gender.', ref: 's10-trap-interdite' },
      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-h-pairs', clip: 'les-heros' },
        opts: ['les héros, linked with a /z/', 'les héros, gap left open'], correct: 1,
        why: 'The blocked version is the correct one. If your device links this, the recording has not been delivered yet and the fallback voice is teaching you the error.', ref: 's10-trap-interdite' },
      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-interdite-pairs', clip: 'et-il' },
        opts: ['et il, no join', 'et il with a /t/'], correct: 0,
        why: 'et keeps its gap. Compare quand‿il, which is spelled with a D and links with a /t/.', ref: 's10-trap-interdite' },
      { q: 'A learner says [ay-T-EEL] for « et il ». Fix it.', format: 'errorSpot',
        accept: ['AY EEL', 'ay eel', '/e il/', 'e il', 'et il with no liaison', 'no liaison'],
        answer: `et il ${ipa('fr.sons.liaisons.178')} ${re('fr.sons.liaisons.178')}`,
        why: 'The T of et is there on the page and it never wakes. Leave the gap open.', ref: 's10-trap-interdite' },
      { q: 'A learner links « un restaurant italien ». Fix it.', format: 'errorSpot',
        accept: ['no liaison', 'UHⁿ rehs-toh-RAHⁿ ee-ta-LYEHⁿ', '/œ̃ ʁɛs.to.ʁɑ̃ i.ta.ljɛ̃/', 'leave the gap', 'restaurant italien with no link'],
        answer: `un restaurant italien ${ipa('fr.sons.liaisons.187')}`,
        why: 'A singular noun does not link to the adjective following it, however inviting that final T looks.', ref: 's10-trap-interdite' },
    ],
  },

  {
    id: 'round4',
    label: 'Which rule, which gap',
    targets: ['err-wrong-rule'],
    say: { text: 'Round four. Real sentences, where the three states sit two words apart.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'In « Les enfants et les adultes attendent », how many liaisons are made?', format: 'mcq',
        opts: ['two', 'one', 'three'], correct: 0,
        why: 'les‿enfants and les‿adultes both link. The et between them does not, and adultes attendent does not either: a plural noun does not link to its verb.', ref: 's12-examples' },
      { q: 'In « Paris est une belle ville », where is the liaison?', format: 'mcq',
        opts: ['Paris est', 'est une', 'both'], correct: 1,
        why: 'A proper noun does not link to what follows, so Paris est stays open. est‿une links normally.', ref: 's12-examples' },
      { q: 'Which pair links?', format: 'mcq',
        opts: ['selon eux', 'chez elle', 'et elle', 'les onze'], correct: 1,
        why: 'Short prepositions like chez, en and dans always link. selon does not, et never does, and onze behaves like an h aspiré word.', ref: 's10-trap-interdite' },
      { q: 'An adjective links to its noun when it sits:', format: 'mcq',
        opts: ['before the noun', 'after the noun', 'either way'], correct: 0,
        why: 'petit‿ami links. enfant | intelligent does not. Word order decides it, not the letters involved.', ref: 's10-trap-interdite' },
      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-minimal-pairs', clip: 'un-homme' },
        opts: ['un hasard, not linked', 'un homme, linked'], correct: 1,
        why: 'Same article, same silent N, opposite results. homme has h muet and links; hasard has h aspiré and blocks.', ref: 's19-listen' },
      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-minimal-pairs', clip: 'quand-il' },
        opts: ['quand il, linked with /t/', 'et il, no link'], correct: 0,
        why: 'Both end in a silent consonant before the same word. Only quand wakes it, and it wakes as a T.', ref: 's19-listen' },
      { q: 'Tap the word that blocks the liaison.', format: 'tapSilent',
        word: 'les héros arrivent', correct: 'héros',
        why: 'héros carries an h aspiré, so les stays unlinked. héros arrivent does not link either, because a plural noun does not link to its verb.', ref: 's10-trap-interdite' },
      { q: 'Say it: « Un enfant intelligent. »', format: 'speak',
        target: 'Un enfant intelligent.', ipa: '/œ̃.n‿ɑ̃.fɑ̃ ɛ̃.te.li.ʒɑ̃/', scoreSegment: 'ɑ̃.fɑ̃ ɛ̃',
        why: 'The scored segment is the gap. Link the first join and leave the second one open.', ref: 's16-speak' },
    ],
  },

  {
    id: 'round5',
    label: 'At speed',
    targets: ['err-hearing'],
    say: { text: 'Last round. Whole sentences, and the optional state you only need to recognise.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'An optional liaison is one where:', format: 'mcq',
        opts: ['either version is correct, and it signals formality', 'young speakers link and older ones do not', 'the meaning changes'], correct: 0,
        why: 'Both are correct French. The linked version is more formal. This is the third state, and it is register rather than right and wrong.', ref: 's13-optional' },
      { q: 'When you are not sure whether a liaison is optional, you should:', format: 'mcq',
        opts: ['link it, to sound more French', 'leave it', 'avoid the sentence'], correct: 1,
        why: 'Skipping an optional liaison sounds relaxed and native. Adding a forbidden one sounds like an error, so the risk is not symmetric.', ref: 's13-optional' },
      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-facultative-pairs', clip: 'suis-alle-linked' },
        opts: ['the everyday version, no link', 'the formal version, linked'], correct: 1,
        why: 'Je suis‿allé with the link is what a broadcaster says. Both are correct, and you are only being asked to hear the difference.', ref: 's13-optional' },
      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-listening-passage', clip: 'mes-amis' },
        opts: ['mes amis', 'mes ans'], correct: 0,
        why: 'Both link with a /z/. Only the vowel after the join tells them apart, which is what listening at speed actually demands.', ref: 's15-listening' },
      { q: 'Type the two words that made the sound « lay-z‿a-MEE ».', format: 'typeIn',
        accept: ['les amis', 'les amis.', 'lesamis'],
        answer: `les amis ${ipa('fr.sons.liaisons.166')}`,
        why: 'Working backwards from the join is the listening skill. The Z belongs to les even though you hear it on amis.', ref: 's14-dictation' },
      { q: 'A learner says « les héros » with a /z/. Fix it.', format: 'errorSpot',
        accept: ['LAY ay-ROH', '/le e.ʁo/', 'le e.ʁo', 'no liaison', 'les héros with no link'],
        answer: `les héros ${ipa('fr.sons.liaisons.181')} ${re('fr.sons.liaisons.181')}`,
        why: 'The h aspiré blocks it. This is the pair to bank against les‿amis, which looks identical and behaves the opposite way.', ref: 's10-trap-interdite' },
      { q: 'Say it: « Mes amis arrivent et ils restent. »', format: 'speak',
        target: 'Mes amis arrivent et ils restent.', ipa: '/me.z‿a.mi a.ʁiv e il ʁɛst/', scoreSegment: 'a.ʁiv e il',
        why: 'One liaison at the start, then two gaps that stay open: a plural noun does not link to its verb, and et never links.', ref: 's16-speak' },
      { q: 'Say it: « Vous avez un petit ami ? »', format: 'speak',
        target: 'Vous avez un petit ami ?', ipa: '/vu.z‿a.ve œ̃ pə.ti.t‿a.mi/', scoreSegment: 'vu.z‿a',
        why: 'Three joins in six words. This is the sentence from the platform, and you can say it now.', ref: 's16-speak' },
    ],
  },
];

const SECTIONS_CLOSE: LessonSection[] = [
  {
    type: 'quiz',
    id: 's23-quiz',
    title: 'Forty questions',
    frSub: 'Le test',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    passMark: 70,
    adaptive: true,
    roundFailThreshold: 60,
    rounds: QUIZ_ROUNDS,
  },

  {
    type: 'roundup',
    id: 's24-roundup',
    title: 'What you take with you',
    frSub: "L'essentiel",
    render: 'screens',
    layer: 'core',
    size: 'md',
    imageRef: 'lessons/liaison/roundup.jpg',
    terms: ['liaison', 'interdite', 'devoicing'],
    say: {
      text: 'That is the lesson. Six things worth keeping, and the last one is where you go next.',
      voice: 'coach',
      timing: 'onEnter',
    },
    body:
      'An hour ago a woman on a platform asked you a four-word question and you heard one long noise. The words were not unfamiliar and she was not speaking unusually fast. What defeated you was that French does not leave its words where the spaces are: it takes the last consonant of one and puts it on the front of the next. You now know which consonants do that, what they turn into on the way across, and which joins French keeps sealed. That is why this is the lesson that changes listening rather than just pronunciation.',
    points: [
      `${REFRAME} A vowel next door is what wakes it, and the consonant lands on the front of that next word.`,
      'S and X wake as /z/, D wakes as /t/, F wakes as /v/. Only T, N and L come back as themselves.',
      'Obligatoire: article and noun, pronoun and verb, possessive and noun, adjective before its noun, and the fixed blocks like c\'est‿un and tout‿à fait.',
      'Interdite: et, always. An h aspiré word. A singular noun before its adjective. A personal name before its verb. onze.',
      'Facultative exists and is about formality. Your safe default is to leave it, because over-linking sounds like an error and under-linking does not.',
      "Next: l'élision, where the vowel moves instead of the consonant. le + arbre becomes l'arbre, and the same small set of h aspiré words that blocked you here will block you there too.",
    ],
  },
];

const SECTIONS: LessonSection[] = [
  ...SECTIONS_ACT1,
  ...SECTIONS_ACT2,
  ...SECTIONS_ACT3,
  ...SECTIONS_ACT4,
  ...SECTIONS_ACT5,
  ...SECTIONS_ACT6,
  ...SECTIONS_CLOSE,
];

// ---------------------------------------------------------------------------
// Acts. Six of them, matching the v2 spine order. estScreens and restPoints
// keep any single stretch under the 22-screen checkpoint-spacing limit.
// ---------------------------------------------------------------------------

const ACTS = [
  {
    id: 'act1',
    title: 'The letter that came back',
    sections: ['s01-scene', 's02-goals', 's03-anchors'],
    milestone: 'The contradiction, named.',
    estScreens: 26,
    restPoints: ['s01-scene/end', 's03-anchors/3'],
  },
  {
    id: 'act2',
    title: 'Three consonants',
    // Each family is TWO missions: the words, then its control. They cannot
    // share one, and this is not a style preference. An XL groupDrill is given
    // the whole viewport (ownsLayout in LessonPager), and a swipe deck and a
    // four-option check cannot both have it: the check takes the height it
    // wants and the word card is squeezed to roughly 370dp where it needs 500,
    // which puts the gloss below the fold and the play button out of reach.
    // sons.06 split its four families for exactly this reason. Shipping them
    // merged is what this build did first, and only a device caught it.
    sections: ['s04-rule', 's05-z', 's05-check-z', 's06-t', 's06-check-t', 's07-n', 's07-check-n'],
    milestone: 'Every family, drilled.',
    estScreens: 51,
    restPoints: ['s05-check-z', 's06-check-t', 's07-n'],
  },
  {
    id: 'act3',
    title: 'The sound is not the letter',
    sections: ['s08-trap-sound', 's09-flashcards'],
    milestone: 'The sound change, beaten.',
    estScreens: 33,
    restPoints: ['s08-trap-sound/drill', 's09-flashcards/6'],
  },
  {
    id: 'act4',
    title: 'The gaps that stay shut',
    sections: ['s10-trap-interdite', 's11-inhibition', 's12-examples', 's13-optional', 's14-dictation', 's15-listening'],
    milestone: 'The trap, beaten.',
    estScreens: 62,
    restPoints: ['s10-trap-interdite/drill', 's11-inhibition/2', 's14-dictation/1'],
  },
  {
    id: 'act5',
    title: 'Use it',
    sections: ['s16-speak', 's17-scenario', 's18-errors', 's19-listen'],
    milestone: 'Used in the wild.',
    estScreens: 42,
    restPoints: ['s17-scenario/1', 's18-errors/4'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s20-reading', 's21-review', 's22-progress', 's23-quiz', 's24-roundup'],
    milestone: 'Lesson complete.',
    estScreens: 72,
    restPoints: ['s21-review', 's23-quiz/round2', 's23-quiz/round4'],
  },
];

// ---------------------------------------------------------------------------
// SRS. One slice per act, releasing only what that act has taught.
// ---------------------------------------------------------------------------

// A tranche releases cards into review at an act boundary, so it may only
// release what that act has TAUGHT. Slicing purely by linking consonant is not
// enough: a sentence can carry a /z/ liaison and still be an interdite item
// (194, "Les enfants et les adultes attendent", links twice and blocks once),
// and releasing it in act2 would put a forbidden case into review two acts
// before the mission that explains it. So the forbidden set is subtracted from
// the consonant slices and released whole in act4, where it is taught.
const FORBIDDEN = new Set(obligationIds('interdite'));
const taught = (...families: Parameters<typeof familyIds>[0][]): string[] =>
  families.flatMap((f) => familyIds(f)).filter((id) => !FORBIDDEN.has(id));

const ACT2 = taught('z', 't');
const ACT3 = taught('n', 'l', 'v');
// act4 carries the forbidden set AND everything the consonant families do not
// claim: the unlinked half of a contrast pair and the facultative register
// demos both have no linking consonant, and both are taught here, at
// s10-trap-interdite, s13-optional and s19-listen.
const CLAIMED = new Set([...ACT2, ...ACT3]);
const ACT4 = LIAISON_IDS.filter((id) => !CLAIMED.has(id));

const DECK_TRANCHE: string[][] = [[], ACT2, ACT3, ACT4, [], []];

// ---------------------------------------------------------------------------

const TRIGGERS: ErrorTrigger[] = [
  { id: 'err-no-link',
    description: 'Leaves an obligatoire liaison out: says les | amis or vous | avez with a gap, treating every final consonant as silent the way the previous lesson taught.',
    detectOn: ['s05-z', 's06-t', 's07-n', 's23-quiz'],
    drill: 'drill-no-link', retest: 'retest-no-link' },

  { id: 'err-wrong-sound',
    description: 'Links, but with the written letter rather than the spoken one: less amis for les‿amis, grahⁿ-D-arbr for grand‿arbre.',
    detectOn: ['s08-trap-sound', 's19-listen', 's23-quiz'],
    drill: 'drill-wrong-sound', retest: 'retest-wrong-sound' },

  { id: 'err-over-link',
    description: 'Links across a gap French seals: et, an h aspiré word, or a singular noun and the adjective after it.',
    detectOn: ['s10-trap-interdite', 's11-inhibition', 's23-quiz'],
    drill: 'drill-over-link', retest: 'retest-over-link' },

  { id: 'err-wrong-rule',
    description: 'Applies the right rule to the wrong pair: links a proper noun to its verb, or a plural noun to its verb, or misses that word order decides the adjective case.',
    detectOn: ['s12-examples', 's20-reading', 's23-quiz'],
    drill: 'drill-wrong-rule', retest: 'retest-wrong-rule' },

  { id: 'err-hearing',
    description: 'Cannot locate the word boundary at speed because the consonant has moved forward: hears vous‿avez as one word, or cannot separate ils‿ont from ils sont.',
    detectOn: ['s15-listening', 's19-listen', 's23-quiz'],
    drill: 'drill-hearing', retest: 'retest-hearing' },
];

const DRILLS: LessonDrill[] = [
  { id: 'drill-no-link', title: 'Wake it up', size: 'xl',
    items: ['fr.sons.liaisons.166', 'fr.sons.liaisons.167', 'fr.sons.liaisons.169', 'fr.sons.liaisons.171', 'fr.sons.liaisons.172', 'fr.sons.liaisons.173'],
    format: 'speak',
    coach: `Six joins. Say each one with the consonant landing on the front of the second word. ${REFRAME}` },
  { id: 'retest-no-link', title: 'One more time', format: 'mcq',
    q: 'How is « les amis » pronounced?', opts: ['/le a.mi/', '/le.z‿a.mi/'], correct: 1,
    why: 'The S of les wakes before the vowel and lands on amis.' },

  { id: 'drill-wrong-sound', title: 'The right sound', size: 'lg',
    pairs: [['les amis', 'less amis'], ['grand arbre', 'grand-D-arbre'], ['deux enfants', 'deuks enfants'], ['neuf heures', 'neuf-F-heures']],
    format: 'listenChoose',
    coach: 'Four pairs. In each one, only the first is French. Listen for what the letter turned into.' },
  { id: 'retest-wrong-sound', title: 'One more time', format: 'mcq',
    q: 'A final D links as:', opts: ['/d/', '/t/'], correct: 1,
    why: 'Always a T. grand‿arbre is grahⁿ-T-arbr.' },

  { id: 'drill-over-link', title: 'Leave the gap', size: 'lg',
    items: ['fr.sons.liaisons.178', 'fr.sons.liaisons.181', 'fr.sons.liaisons.183', 'fr.sons.liaisons.187', 'fr.sons.liaisons.189', 'fr.sons.liaisons.211'],
    format: 'sort', buckets: ['link it', 'leave it'],
    coach: 'Six gaps, and every one of them is sealed. Sort them against the ones that are not.' },
  { id: 'retest-over-link', title: 'One more time', format: 'mcq',
    q: 'Does « et » ever take a liaison?', opts: ['yes, before a vowel', 'no, never'], correct: 1,
    why: 'Never, in any register. It is the one absolute in this lesson.' },

  { id: 'drill-wrong-rule', title: 'Which rule applies', size: 'lg',
    items: ['fr.sons.liaisons.186', 'fr.sons.liaisons.190', 'fr.sons.liaisons.196', 'fr.sons.liaisons.174', 'fr.sons.liaisons.186', 'fr.sons.liaisons.210'],
    format: 'mcq',
    coach: 'Six phrases. For each one, name the rule before you decide, and notice that word order does the work.' },
  { id: 'retest-wrong-rule', title: 'One more time', format: 'mcq',
    q: 'An adjective links to its noun when it comes:', opts: ['before the noun', 'after the noun'], correct: 0,
    why: 'petit‿ami links. enfant | intelligent does not.' },

  { id: 'drill-hearing', title: 'Find the boundary', size: 'xl',
    pairs: [['ils ont', 'ils sont'], ['vous avez', 'vous savez'], ['les amis', 'les héros'], ['un homme', 'un hasard']],
    format: 'listenChoose',
    coach: 'Four pairs that differ only at the join. Play each one slow before you answer.' },
  { id: 'retest-hearing', title: 'One more time', format: 'mcq',
    q: '« ils ont » and « ils sont » differ by:', opts: ['the vowel', 'the liaison', 'the stress'], correct: 1,
    why: 'ils‿ont links a /z/ and means they have. ils sont has no link and means they are.' },
];

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.sons.10.states',
    title: 'The three states, on one page',
    layer: 'deep',
    contains: ['obligatoire, the full list', 'interdite, the full list', 'facultative and the safe default'],
    sections: [
      { type: 'teach', id: 'sheet-states-intro', title: 'Three answers, not two', layer: 'deep', render: 'sheet',
        body: 'Every gap between two French words has one of three answers: you must link, you must not, or it is up to you. Almost every gap you meet is the first. The second is a short list worth memorising. The third is about how formal you are being, and you can safely ignore it while you are learning.' },
      { type: 'table', id: 'sheet-states-oblig', title: 'Obligatoire: always link', layer: 'deep', render: 'sheet',
        cols: ['Pattern', 'Example', 'Sound'],
        rows: [
          ['determiner + noun', 'les amis, un homme, deux enfants', '/z/, /n/, /z/'],
          ['pronoun + verb', 'vous avez, nous avons, ils ont', '/z/'],
          ['possessive + noun', 'mon ami, son atelier', '/n/'],
          ['adjective BEFORE noun', 'petit ami, grand arbre', '/t/'],
          ['short preposition', 'en avion, chez elle, dans une heure', '/n/, /z/, /z/'],
          ['fixed expression', "c'est un, quand il, tout à fait", '/t/'],
        ] },
      { type: 'table', id: 'sheet-states-interdite', title: 'Interdite: never link', layer: 'deep', render: 'sheet',
        cols: ['Pattern', 'Example', 'Why'],
        rows: [
          ['et', 'et il, et elle', 'no exception, in any register'],
          ['h aspiré', 'les héros, en haut, un hasard', 'blocks liaison and elision'],
          ['singular noun + adjective', 'un enfant intelligent', 'the noun does not reach forward'],
          ['proper noun + verb', 'Jean arrive, Paris est', 'a name stands alone'],
          ['onze, un (the number)', 'les onze', 'behaves like h aspiré'],
          ['plural noun + verb', 'les enfants attendent', 'no link across that gap'],
        ] },
      { type: 'teach', id: 'sheet-states-fac', title: 'Facultative: your safe default', layer: 'deep', render: 'sheet',
        body: 'Optional liaisons are correct either way and signal formality. Je suis allé, nous sommes arrivés, il faut aller. Leave them unlinked while you are learning. Skipping an optional liaison sounds relaxed and native; adding a forbidden one sounds like an error, so when you are unsure the cheap mistake and the expensive mistake are not the same size.' },
    ],
  },
  {
    id: 'sheet.sons.10.sounds',
    title: 'What each letter wakes up as',
    layer: 'deep',
    contains: ['the sound change table', 'why S becomes Z', 'the tie notation'],
    sections: [
      { type: 'table', id: 'sheet-sounds-table', title: 'Letter on the page, sound in the mouth', layer: 'deep', render: 'sheet',
        cols: ['Written', 'Wakes as', 'Example'],
        rows: [
          ['-s', '/z/', 'les‿amis'],
          ['-x', '/z/', 'deux‿enfants'],
          ['-z', '/z/', 'chez‿elle'],
          ['-d', '/t/', 'grand‿arbre'],
          ['-t', '/t/', "c'est‿un"],
          ['-n', '/n/', 'mon‿ami'],
          ['-f', '/v/', 'neuf‿heures'],
          ['-l', '/l/', 'bel‿immeuble'],
        ] },
      { type: 'teach', id: 'sheet-sounds-why', title: 'Why the S softens', layer: 'deep', render: 'sheet',
        body: 'A liaison consonant sits between two vowels once it moves across, and a consonant between two vowels is easier to say voiced than unvoiced. That is the whole reason /s/ becomes /z/ and /f/ becomes /v/. You do not need the phonetics to use it, but it explains why the change is consistent rather than arbitrary: French did not pick these at random, the mouth did.' },
      { type: 'teach', id: 'sheet-sounds-tie', title: 'Reading the tie', layer: 'deep', render: 'sheet',
        body: 'The mark in les‿amis is a tie. It appears in both the IPA and the respelling, and it always means the same thing: a liaison lands here. Read it as an instruction about placement. The consonant before the tie is written as part of the first word and pronounced as part of the second. If your screen shows a box or a blank instead of a small curve, tell us: the mark is doing real work and a missing glyph erases it.' },
    ],
  },
];

// ---------------------------------------------------------------------------
// AUDIO RISK — read this before commissioning the studio.
//
// Liaison has the strongest audio dependency in the sons track, and the TTS
// fallback is not merely worse than a recording: on the pairs below it can
// produce the OPPOSITE of what the card teaches. Device TTS does not reliably
// apply French liaison rules, and on h aspiré it usually links, which is the
// exact error the mission exists to remove.
//
// Every recordingId below resolves to nothing today (CLIP_MANIFEST is empty by
// design) and every card falls back to device TTS. That is the correct shipping
// state, and it is safe everywhere EXCEPT these:
//
//   rec-h-pairs           les amis / les héros. If TTS links héros, the card
//                         teaches the error it is warning against. HIGHEST RISK.
//   rec-interdite-pairs   et il, en haut, un restaurant italien. TTS commonly
//                         links et. Same failure mode.
//   rec-minimal-pairs     ils ont / ils sont, un homme / un hasard. The pair is
//                         only a teaching object if the two are audibly
//                         different, and TTS may render them identically.
//   rec-devoicing-pairs   less amis vs les amis. TTS may not voice the /z/, so
//                         the wrong-sound act cannot be heard at all.
//   rec-facultative-pairs the register pair is MEANINGLESS unless the same
//                         voice records both at the same speed in one session.
//
// The four *-pairs sets must therefore be recorded by ONE voice, in ONE
// session, at both speeds, with the members of each pair adjacent in the take.
// A pair split across two sessions or two voices is not a pair.
// ---------------------------------------------------------------------------

export const LIAISON_LESSON: Lesson = {
  id: 'sons.10.l1',
  unitId: 'sons.10',
  seq: 1,
  title: 'Liaison',
  level: 'sons',
  tag: 'SONS · LEÇON 10',

  intro:
    'French does not leave its words where the spaces are. A consonant that is silent at the end of one word wakes up when the next word starts with a vowel, and it lands on the front of that next word rather than staying where it was written. That single habit is why fluent French sounds like one continuous stream, and learning it changes your listening more than any other hour in this track. This lesson gives you the three consonants that do it, what each one turns into on the way across, and the short list of joins French keeps sealed.',

  overview: {
    glyph: '‿',
    titleEn: 'Liaison: the consonant that moves to the next word',
    subFr: 'La liaison',
    introFr:
      "En français, une consonne finale muette se réveille quand le mot suivant commence par une voyelle, et elle se prononce au début de ce mot. Dans cette leçon, vous apprenez les trois consonnes de liaison, ce qu'elles deviennent, et les cas où la liaison est interdite.",
    minutes: 75,
    screens: 277,
    difficulty: 3,
  },

  grammarIntroduced: ['liaison-obligatoire', 'liaison-interdite', 'h-aspire-blocking'],

  sections: SECTIONS,
  itemIds: LIAISON_IDS,

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    ambienceDefault: 'off',
    recorded: [
      { id: 'rec-scene-break', desc: 'The platform break beat: deux enfants said WITHOUT the liaison as a learner says it, then deux‿enfants said correctly. Same voice, back to back, 400ms gap, so the missing Z is the only difference.', clipIds: ['deux-enfants-broken', 'deux-enfants'] },
      { id: 'rec-z-family', desc: 'les‿amis, vous‿avez, nous‿avons, ils‿ont, deux‿enfants, chez‿elle. Isolated, 900ms gaps. The Z must be audibly VOICED and audibly attached to the second word, not the first.', clipIds: ['les-amis', 'vous-avez', 'nous-avons', 'ils-ont', 'deux-enfants', 'chez-elle'] },
      { id: 'rec-t-family', desc: "c'est‿un, quand‿il, petit‿ami, grand‿arbre, quand‿elle, tout‿à fait. Isolated, 900ms gaps. On grand and quand the release must be a clean T with no D colouring.", clipIds: ['cest-un', 'quand-il', 'petit-ami', 'grand-arbre', 'quand-elle', 'tout-a-fait'] },
      { id: 'rec-n-family', desc: 'mon‿ami, un‿homme, en‿avion, un‿an, attends un‿instant, mon‿ami travaille. The nasal vowel must stay nasal UNDER the new N. A flattened vowel is the error being taught against.', clipIds: ['mon-ami', 'un-homme', 'en-avion', 'un-an', 'un-instant', 'mon-ami-travaille'] },
      { id: 'rec-devoicing-pairs', desc: 'CONTRAST SET, one voice one session. les‿amis correct then [less a-MEE] wrong; grand‿arbre with T then with D; deux‿enfants with Z then with KS; neuf‿heures with V then with F. Each pair adjacent, 400ms apart, both speeds.', clipIds: ['les-amis', 'les-amis-wrong', 'grand-arbre', 'grand-arbre-wrong', 'deux-enfants', 'neuf-heures'] },
      { id: 'rec-interdite-pairs', desc: 'CONTRAST SET, one voice one session. et il, et elle, en haut, un restaurant italien, un enfant intelligent, Jean arrive, les onze. Every one UNLINKED, with an audible gap. Then quand‿il linked, adjacent, so the learner hears et against quand.', clipIds: ['et-il', 'et-elle', 'en-haut', 'restaurant-italien', 'enfant-intelligent', 'jean-arrive', 'les-onze', 'quand-il'] },
      { id: 'rec-h-pairs', desc: 'CONTRAST SET, one voice one session, HIGHEST PRIORITY. les‿amis linked against les héros unlinked; un‿homme linked against un hasard unlinked; les‿hommes against les haricots. Members of each pair adjacent, 400ms gap, both speeds. Device TTS links héros, so until this lands the card teaches the opposite of the rule.', clipIds: ['les-amis', 'les-heros', 'un-homme', 'un-hasard', 'les-hommes', 'les-haricots'] },
      { id: 'rec-minimal-pairs', desc: 'CONTRAST SET, one voice one session. ils‿ont / ils sont, vous‿avez / vous savez, un‿an / cent ans, quand‿il / et il, les‿Anglais / Jean arrive, très‿intéressant / toujours intéressant. Adjacent, 400ms, both speeds. These are only teaching objects if the two members are audibly different.', clipIds: ['ils-ont', 'ils-sont', 'vous-avez', 'vous-savez', 'un-an', 'quand-il', 'et-il', 'les-anglais'] },
      { id: 'rec-facultative-pairs', desc: 'REGISTER SET, one voice one session, both members mandatory. Je suis allé unlinked (courant) then linked (soutenu); Nous sommes arrivés unlinked then linked; Il faut aller unlinked then linked. The pair carries the whole teaching point, so a take with only one member is unusable.', clipIds: ['suis-alle-plain', 'suis-alle-linked', 'sommes-arrives-plain', 'sommes-arrives-linked', 'faut-aller-plain', 'faut-aller-linked'] },
      { id: 'rec-dictation-12', desc: 'The 12 dictation items, normal speed only, natural connected delivery. The liaison must be produced as it would be in running speech, not as two carefully separated words.' },
      { id: 'rec-listening-passage', desc: 'The 5-line weekend message, normal and slow, plus per-line stems. Natural pace: the joins are the difficulty and slowing the delivery removes the exercise.', clipIds: ['mes-amis'] },
      { id: 'rec-reading-passage', desc: 'The 6-sentence reading passage, one take, plus per-sentence stems for tap-to-replay. Fourteen liaisons and two blocked joins, all at natural speed.' },
    ],
  },

  version: 1,
};

export default LIAISON_LESSON;
