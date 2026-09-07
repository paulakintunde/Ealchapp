// a1.16.l1 "La place de l'adjectif", the mission journey.
//
// The corpus findings that changed this build are in the header of
// placement-corpus.ts and are not repeated here. In one line: the brief expected
// pre-nominal evidence to be scarce and it is everywhere, the `des beaux` row it
// predicted would be a shipped error is correct French, and the real trap was
// that 716 of the 720 "default order" sentences are PREDICATE adjectives that
// cannot teach placement at all.
//
// ── This is the synthesis lesson, and it is the only one on the track ──────
//
// a1.13 gave the learner "colours go after", once, and stopped. a1.14 will give
// them "these six go before" and stop. Neither owns the system. This is the
// lesson where the two halves become one rule, and that is a different job from
// every other unit in this band, all of which teach a vocabulary set with a rule
// underneath. There is no vocabulary set here. There is a decision procedure.
//
// So the acts are SORTING OPERATIONS rather than word lists: three groupDrills,
// a practice mission and a scenario carry more of this lesson than the decks do.
//
// ══════════════════════════════════════════════════════════════════════════
//  a1.14 LANDED WHILE THIS LESSON WAS BEING WRITTEN. THE BRIEF SAYS IT DOES
//  NOT EXIST. IT NOW DOES, AND THIS LESSON IS RECONCILED AGAINST IT.
// ══════════════════════════════════════════════════════════════════════════
//
// A1-16-ADJECTIVE-PLACEMENT-PROMPT.md states: "a1.14 has not been built. It has
// a brief (A1-14-BASIC-ADJECTIVES-PROMPT.md) and no source files", and tells
// this author to build self-contained and to "read its handover block before you
// finish and reconcile rather than duplicate" if it lands mid-build.
//
// IT LANDED MID-BUILD. Observed in three states on 2026-08-06, in this order:
//
//     15:27   corpus, imported and terms on disk. No lesson. lessonIds []
//     16:01   adjectifs-lesson.ts, author-adjectifs-batch.ts written
//     16:04   seed.json 7385 -> 7433 items, a1.14.l1 present,
//             unit a1.14 rebound from `famille` to `adjectifs-essentiels`,
//             theme rows in the seed 4 -> 47
//
// So this lesson was planned against an absent a1.14 and finished against a
// shipped one. Reconciled rather than duplicated, from its HANDOVER BLOCK and
// its constants rather than from its brief:
//
//   1. THE SIX IT TAUGHT ARE MEASURED, NOT ASSUMED. adjectifs-corpus.ts
//      THE_SIX = ['grand', 'petit', 'beau', 'vieux', 'bon', 'mauvais']. So six of
//      the ten in this lesson's closed set are already known to go in front and
//      FOUR ARE NEW: gros, jeune, joli, nouveau. The deck marks which is which
//      rather than teaching all ten as new, which would re-run a lesson the
//      learner finished ten minutes ago. See ALREADY_MET in placement-corpus.ts.
//
//   2. WHAT a1.14 SAID ABOUT PLACEMENT, AND WHAT IT DID NOT. Its handover names
//      both lists exactly. It stated: these six come first, colours go behind,
//      that is the English order, « une maison grande » is understood and marks
//      a beginner, and a pre-noun word and a post-noun colour can share a phrase.
//      It deliberately did NOT state: why they go first, that there is a CLASS
//      of adjectives that do, any grouping or mnemonic, that MOST adjectives go
//      after, any meaning-changing pair, or what happens with two at once.
//
//      Its own words: "The lesson says 'these six' and never 'adjectives like
//      these'. That phrasing is deliberate and it is the whole boundary: a1.16
//      can open by saying there is a pattern here and the learner already has
//      six examples of it." THIS LESSON OPENS EXACTLY THAT WAY. See s03-idea.
//
//   3. bel AND vieil ARE a1.14's AND ARE REFERENCED, NOT RETAUGHT. nouvel IS
//      THIS LESSON'S BY a1.14's OWN HARD BLOCK: its NOT_TAUGHT_IDS contains
//      fr.sons.adjectifs-essentiels.007 (nouveau) and fr.a1.adjectifs-essentiels.209
//      (« C'est un nouvel hôtel. »), and both its batch and its merge DIE if
//      either appears on its surfaces, with the note that nouveau "is the THIRD
//      three-form adjective in A1 ... and it is not one of this unit's six".
//      Nobody else can take it, so this lesson does. s14-vowel names a1.14 for
//      the two it already has and teaches only the third. The angle differs in
//      any case: a1.14 answers "what shape does this word take", and this lesson
//      answers "why does the shape exist", which is a fact about position.
//
//   4. THE PREREQ BINDING IS NOW VALID AND STAYS. a1.16 declares
//      prereqUnitIds ["a1.14"], which pointed at an empty unit when the brief
//      was written and now points at a shipped lesson on the same theme. Nothing
//      to change and nothing to report as broken.
//
//   5. THE IDS STILL DO NOT COLLIDE. a1.14 authored four headwords at
//      fr.sons.adjectifs-essentiels.312-.315. This lesson authors NO fr.sons row
//      at all and its nine sentences run fr.a1.adjectifs-essentiels.332-.340,
//      which was NEXT FREE before a1.14 landed and is still NEXT FREE after it,
//      because a1.14 authored nothing under fr.a1.
//
//   6. ITS GUARD CANNOT REACH THESE SURFACES. adjectifs-corpus.ts exports
//      PLACEMENT_SYSTEM, which is a1.14's guard against leaking THIS lesson's
//      subject and contains 'bangs mnemonic', 'ancien professeur' and 'most
//      adjectives go after'. Both consumers filter `learnerText`, which is built
//      from a1.14's own LESSON object, exactly as a1.13's PLACEMENT_WORDS does.
//      It is scoped to a1.14 and cannot see a1.16. Checked, because this lesson
//      shares a theme with it and legitimately contains every phrase in it.
//
// ── The theme decision ────────────────────────────────────────────────────
//
// a1.16 declares NO THEME (`themes: null` in the unit record, not `[]` as the
// brief prints it). This build binds it to `adjectifs-essentiels`, which is
// where a1.14's in-flight corpus also rebinds, so the adjective family stays
// together and the nine authored rows have a deck to live in.
//
// `adjectifs-essentiels` IS NOT IN SEED_CUT.themes (verified in
// scripts/seed-cut.config.ts: cafe objets dictee marche salutations nombres
// transport cuisine ecole deplacements metiers corps maison animaux routines
// famille sports-et-loisirs). Neither is `couleurs`. SO THE AUTHORED ROWS DO NOT
// APPEAR IN THE SEED BY THEME, and a merge that looks like it did nothing is
// behaving correctly. The merge carries the 56 imported rows and the 9 authored
// ones explicitly BY ID, which is the only reason they render at all.
//
// `famille` was rejected: it is in the cut and would have been visible, and it
// is a1.15's and a1.17's theme and is about family members.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { PLACEMENT_TERMS, REFRAME } from './placement-terms.ts';
import {
  ALREADY_MET, AUTHORED_IDS, BANGS_LETTER, BANGS_MISSES, BEHIND_HEADWORDS, BEHIND_IDS, BOTH_SIDES,
  CHANGER_HEADWORDS, CLOSED_SET, CLOSED_SET_IDS, DE_IDS, DICTEE_PAIRS, IN_FRONT, LIAISON_PAIR,
  NEWLY_ADDED, PAIR_GLOSS, RESPELL, SPLIT_IDS, THE_PAIRS, VOWEL_FORMS,
  enOf, frOf, pairFor, sub,
} from './placement-corpus.ts';
import { IMPORTED_IDS, REUSED_IDS } from './placement-imported.ts';

/* ─── Every id the lesson can name ─────────────────────────────────────────  */

const ITEM_IDS: string[] = [...AUTHORED_IDS, ...IMPORTED_IDS, ...REUSED_IDS];

/* ─── The opening scene ────────────────────────────────────────────────────
 *
 * "An A1 scene opens on somebody being MISREAD AS A PERSON, not on being
 * corrected. Every word right, and the interaction still goes wrong."
 *
 * The meaning-changing pairs hand this lesson the best A1 scene on the track,
 * because the learner is not misunderstood: THEY ARE UNDERSTOOD AS SAYING
 * SOMETHING ELSE. Nobody corrects them, nothing sounds wrong, and the
 * conversation simply proceeds on a false footing that neither person can see.
 *
 * The brief offers two candidates and this build takes the sharper one. The
 * weaker beat is « une maison grande » from the a1.13 habit: understood
 * perfectly, and the other person switches to English. That is a fluency signal.
 * `ancien` is a factual error the learner cannot detect, which is worse and
 * therefore better teaching.
 *
 * The brief's own version puts it on a teacher. This one puts it on a BUILDING,
 * because « un professeur ancien » is a forced phrase that a French speaker
 * would not say, and a scene whose correct half is unidiomatic teaches the
 * learner to produce something nobody says. « un hôtel ancien » and « un ancien
 * hôtel » are both ordinary. The teacher line survives as a corpus row
 * (fr.a1.adjectifs-essentiels.340) and is used where only the front order
 * appears.
 *
 * The choice beat is this lesson's own authored pair, so the beat, the
 * two-column card, the drill and the quiz are all the same two rows.          */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'A friend is coming to Bordeaux for a weekend and has asked you where to stay. You know exactly the place: stone stairs, shutters, a hundred and fifty years old and still taking guests.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You have all the words for this. Nothing here is beyond you. You are about to say one of them on the wrong side of the noun.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Théo',
    fr: 'Alors, tu connais un endroit sympa pour deux nuits ?',
    en: 'So, do you know a nice place for two nights?',
    stage: 'Notice where sympa is sitting. Behind the noun, which is where most of them go.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-16-scene' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You want to say it is an old hotel. Which line do you send?',
    options: [
      {
        fr: frOf('fr.a1.adjectifs-essentiels.334'),
        respell: sub('ancien'),
        en: 'the one that puts the describing word first',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: frOf('fr.a1.adjectifs-essentiels.335'),
        respell: sub('ancien'),
        en: 'the one that names the thing first',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. Now watch what the other one does, because it is not wrong and that is the difficulty.',
      breaks: 'That is the English order, and it is perfectly good French. Watch what Théo hears.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    speaker: 'You',
    fr: frOf('fr.a1.adjectifs-essentiels.334'),
    en: '(You meant: it is an old hotel)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Théo',
    fr: "Ah bon ? Et c'est quoi maintenant ? On peut dormir dedans ?",
    en: 'Oh really? And what is it now? Can you sleep in it?',
    stage: 'He is not correcting you. He understood every word and is answering the sentence you sent.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-16-scene' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'Both are correct. They are about different buildings.',
    // 36 words. The shipped scene breaks run 24 to 40 here.
    body: 'Nothing was misheard and nothing sounded wrong, so nobody will ever tell you. In front, ancien means it used to be a hotel. Behind, ancien means it is old and still open. The side carried the meaning.',
    wrong: {
      fr: frOf('fr.a1.adjectifs-essentiels.334'),
      ipa: '/sɛ tœ̃ nɑ̃.sjɛ̃ no.tɛl/',
      respell: sub('ancien'),
      en: enOf('fr.a1.adjectifs-essentiels.334'),
    },
    right: {
      fr: frOf('fr.a1.adjectifs-essentiels.335'),
      ipa: '/sɛ tœ̃ no.tɛl ɑ̃.sjɛ̃/',
      respell: sub('ancien'),
      en: enOf('fr.a1.adjectifs-essentiels.335'),
    },
    coach: `${REFRAME} Théo would have understood either one, which is exactly why this never gets corrected.`,
    // Audio-first: the ear goes first and here the ear has nothing useful to
    // offer, which is the point. `autoplay` is NOT set: it is declared in
    // schema.ts and implemented in no component.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true, recordingId: 'rec-a1-16-pairs' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'Four French words behave like that. Every other describing word has one correct side, and working out which side is the next twenty-five minutes.',
  },
];

/* ─── Sections ─────────────────────────────────────────────────────────────  */

const SECTIONS: LessonSection[] = [
  /* ── Act 1: which side ──────────────────────────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Hotel That Used To Be One',
    frSub: 'Un ancien hôtel ?',
    render: 'screens',
    layer: 'core',
    terms: ['whichSide', 'positionCarriesMeaning'],
    say: {
      text: 'One sentence, every word correct, and it describes a different building from the one you meant.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A message thread, and a hotel with stone stairs somewhere behind it',
      city: 'Bordeaux',
      time: 'Thursday evening',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: `${REFRAME} That sentence decides almost every one of these for you.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: 'Four things, and the fourth one is the reason this lesson exists at all.',
    goals: [
      { t: 'Put the describing word on the right side', s: 'One default that covers almost everything, and a way of deciding in the moment rather than remembering afterwards.' },
      { t: 'Know the ten that go in front', s: 'A closed group that does not grow, so every new word you meet from here is already sorted.' },
      { t: 'Handle what follows from it', s: 'What happens to des, what happens with two describing words at once, and three shapes that only exist in front.' },
      { t: 'Hear four words change meaning', s: 'The only place so far where moving a word changes what you said rather than how good it sounded.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-idea',
    title: 'The Side Is A Decision',
    frSub: 'De quel côté ?',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['whichSide', 'theShortList'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-16-default' },
    say: 'Four cards before any list, because this decides how you build every phrase from here.',
    cards: [
      {
        label: 'What you already do',
        head: 'Colours go after the thing',
        fr: frOf('fr.a1.couleurs.201'),
        sub: `${sub('bleue')} · ${enOf('fr.a1.couleurs.201')}`,
        body: 'You met this with colours and it is true of every one of them. The house first, then what colour it is. Nothing about that was a fact about colours: it is the general order, and colours were simply the first place you met it.',
      },
      {
        label: 'What is new',
        head: 'It holds for almost every describing word',
        fr: frOf('fr.a1.rp-societe.088'),
        sub: `${sub('calme')} · ${enOf('fr.a1.rp-societe.088')}`,
        body: 'Calm is not a colour and it goes in the same place. So do easy, difficult, delicious, French, comfortable and every other describing word you will ever look up. The thing first, then what it is like.',
      },
      {
        label: 'Why it feels wrong',
        head: 'English never does this',
        body: 'In English every describing word goes in front: a quiet neighbourhood, a red car, an easy question. So the French order is the reverse of the one your ear expects, on every phrase, which is why this stays awkward long after you understand it.',
      },
      {
        // ── The opening a1.14 asked for, in its own words ──────────────────
        //
        // a1.14's handover: "The lesson says 'these six' and never 'adjectives
        // like these'. That phrasing is deliberate and it is the whole boundary:
        // a1.16 can open by saying there is a pattern here and the learner
        // already has six examples of it, which is a better start than it would
        // have had."
        //
        // So this card takes the offer. It names the last lesson, tells the
        // learner the six they met were not six one-off facts, and hands them
        // the thing a1.14 deliberately withheld: that they form a group.
        label: 'The six you already met',
        head: 'They were not six separate facts',
        fr: `${frOf(IN_FRONT.grand)} · ${frOf(IN_FRONT.bon)}`,
        sub: `${sub('grand')} · ${sub('bon')}`,
        body: 'The last lesson gave you six that come first: grand, petit, beau, vieux, bon and mauvais. It did not say why. They are not six exceptions. They are most of a small closed group, and this lesson adds the last four.',
      },
      {
        label: 'The decision',
        head: 'You will not always know',
        body: `Ten words go in front, and you reach for them constantly, so the exception feels bigger than it is. When you cannot remember whether a word is one of them: ${REFRAME} Ten against everything else is not a close call.`,
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's04-default',
    title: 'The Thing, Then What It Is Like',
    frSub: 'Le nom, puis la description',
    hint: 'Ten sentences. The describing word is always the last one.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['whichSide'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-16-default' },
    say: 'Ten real sentences. Read each one and notice you never have to decide anything.',
    cards: BEHIND_IDS.map((id, i) => ({
      label: `${i + 1} of ${BEHIND_IDS.length}`,
      head: 'the thing, then the description',
      fr: frOf(id),
      sub: enOf(id),
      body: i === 0
        ? 'The question first, then what it is like. English would say an easy question and put them the other way round.'
        : i === BEHIND_IDS.length - 1
          ? 'The last of the ten, and the same shape as the first. Not one of these asked you to make a choice.'
          : 'Same order again. The noun, then the word describing it, and nothing to decide.',
    })),
  },

  /* ── Act 2: the short list ──────────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's05-list',
    title: 'The Ten That Go In Front',
    frSub: 'Les dix',
    hint: 'One word per card, each in a real phrase.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['theShortList', 'whichSide'],
    sheetId: 'sheet.a1.16.sides',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-16-front' },
    say: 'Ten words, each one inside a phrase. Six you have met and four are new. None is ever shown on its own.',
    cards: [
      ...CLOSED_SET.map((a, i) => ({
        label: ALREADY_MET.includes(a) ? `${i + 1} of ${CLOSED_SET.length} · already met` : `${i + 1} of ${CLOSED_SET.length} · new`,
        head: a,
        fr: frOf(IN_FRONT[a]),
        sub: `${sub(a)} · ${enOf(IN_FRONT[a])}`,
        body: ALREADY_MET.includes(a)
          ? `You had this one last lesson. What is new is that it is not on its own: ${a} is a member of a group of ten, and the group is closed.`
          : `New here, and it behaves exactly like the six you already have. ${a} goes in front, and it is one of the last four the group will ever take.`,
      })),
      {
        // ── THE ONE BANGS CARD ────────────────────────────────────────────
        //
        // The request named BANGS explicitly, so it is built, and it is built as
        // a MEMORY AID rather than as the organising principle. The reasoning is
        // written into placement-corpus.ts beside BANGS_LETTER. The short
        // version: it is an English acronym for a French rule, so it inserts a
        // translation step into a production decision; it is incomplete, and a
        // learner who trusts it as a test gets autre, même, premier and dernier
        // wrong and concludes the language is arbitrary; and ten words is a deck
        // rather than a mnemonic.
        //
        // The words it misses are named ON THE SAME CARD, because an acronym
        // handed over without its gaps is a test the learner will fail and blame
        // themselves for.
        //
        // a1-16-placement.test.ts asserts BANGS appears HERE and on no other
        // production surface, so a later author cannot quietly promote it into
        // the reframe or quietly delete it.
        label: 'if you like acronyms',
        head: 'BANGS, and what it leaves out',
        body: `Some courses spell these five ways: BANGS, for Beauty, Age, Number, Goodness, Size. A memory aid, not a test. It misses ${BANGS_MISSES.join(', ')}, which go in front too. Use it to recall the ten, never to sort a word you have not met.`,
      },
    ],
  },

  {
    // TWO COLUMNS and four rows, so every cell is three words or fewer. tapTable
    // is NOT in ownsLayout(), so this renders inside a scrolling page and the
    // teaching lives in the detail modal, which is a card and can hold prose.
    type: 'tapTable',
    id: 's06-bothsides',
    title: 'One Noun, Both Sides',
    frSub: 'Le même nom, deux côtés',
    layer: 'core',
    terms: ['whichSide', 'theShortList'],
    sheetId: 'sheet.a1.16.sides',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-16-front' },
    say: `${REFRAME} Tap either cell to hear it. The noun never moves.`,
    cols: ['in front', 'behind'],
    rows: BOTH_SIDES.map((b) => ({
      cells: [frOf(b.front), frOf(b.behind)],
      say: `${frOf(b.front)} ${frOf(b.behind)}`,
      detail: {
        title: `${b.noun}, described twice`,
        body: `${frOf(b.front)} ${frOf(b.behind)} `
          + `Same noun, two describing words, each one where it belongs. The word decides the side. The noun has `
          + `nothing to do with it.`,
        say: `${frOf(b.front)} ${frOf(b.behind)}`,
      },
    })),
  },

  {
    // ── THE HERO MISSION ──────────────────────────────────────────────────
    //
    // "The sorting drill is the hero, and groupDrill is what it is for. Give the
    // learner an adjective and two slots, before and after. This is a lesson
    // about a decision, so the learner must make the decision repeatedly rather
    // than read about it."
    //
    // So the items here are BARE HEADWORDS rather than sentences. A sentence has
    // already made the decision and shows the learner the answer; a bare
    // adjective is the thing they will actually be holding when they have to
    // choose. All sixteen are published headwords and none is authored.
    //
    // NO `size`. At xl a groupDrill owns the layout AND caps every string at 12
    // words, and an xl groupDrill must never stack words and a check in one
    // group. That has shipped as a bug twice.
    type: 'groupDrill',
    id: 's07-sort',
    title: 'Which Side Does It Go?',
    frSub: 'De quel côté ?',
    layer: 'core',
    terms: ['whichSide', 'theShortList'],
    say: 'Sixteen words and two slots. Decide before you read the check, every time.',
    groups: [
      {
        label: 'In front: the six you already have',
        items: ALREADY_MET.map((a) => ({
          fr: a,
          itemId: CLOSED_SET_IDS[a],
          respell: sub(a),
          en: RESPELL[a].en,
        })),
        check: {
          q: 'These six all go in front of the noun. What actually puts them there?',
          opts: [
            'They are all about size or quality',
            'They are six of the ten that go in front, and nothing else',
            'They are all short words',
            'They all describe people rather than things',
          ],
          correct: 1,
          why: 'Membership of the group, and nothing else. Bon is about quality and petit is about size, so meaning does not explain it. Nouveau and mauvais are not short, so length does not either. They go in front because they are on the list.',
        },
      },
      {
        label: 'In front: the four that are new',
        items: NEWLY_ADDED.map((a) => ({
          fr: a,
          itemId: CLOSED_SET_IDS[a],
          respell: sub(a),
          en: RESPELL[a].en,
        })),
        check: {
          q: 'With these four added, how many words go in front of the noun in French?',
          opts: ['about fifty', 'ten, and the group takes no more', 'it depends on the sentence', 'roughly half of them'],
          correct: 1,
          why: 'Ten, and that is the whole group. This is the useful part: the list is closed, so a describing word you have never seen before is already decided before you look it up.',
        },
      },
      {
        label: 'Behind: everything else',
        items: (['chaud', 'froid', 'facile', 'difficile', 'ouvert', 'court'] as const).map((a) => ({
          fr: a,
          itemId: BEHIND_HEADWORDS[a],
          respell: sub(a),
          en: RESPELL[a].en,
        })),
        check: {
          q: 'None of these six is on the list. Where does each one go?',
          opts: ['in front of the noun', 'behind the noun', 'it varies by sentence', 'behind the verb'],
          correct: 1,
          why: `Behind, every time, and so does every other describing word in the language. ${REFRAME} These six are a sample of a group with no end to it, which is why the ten are worth learning and these are not.`,
        },
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's08-decide',
    title: 'Now Without The Groups',
    frSub: 'À vous de décider',
    layer: 'core',
    terms: ['theShortList'],
    say: 'The same decision with the answer no longer sorted for you. Commit before you check.',
    groups: [
      {
        label: 'Mixed, and you decide',
        items: [
          { fr: frOf(IN_FRONT.vieux), itemId: IN_FRONT.vieux, respell: sub('vieux'), en: enOf(IN_FRONT.vieux) },
          { fr: frOf('fr.a1.cafe.088'), itemId: 'fr.a1.cafe.088', respell: sub('facile'), en: enOf('fr.a1.cafe.088') },
          { fr: frOf(IN_FRONT.joli), itemId: IN_FRONT.joli, respell: sub('joli'), en: enOf(IN_FRONT.joli) },
          { fr: frOf('fr.a1.cuisine.193'), itemId: 'fr.a1.cuisine.193', respell: sub('calme'), en: enOf('fr.a1.cuisine.193') },
        ],
        check: {
          q: 'You want to say a difficult question. Where does difficile go?',
          opts: ['une difficile question', 'une question difficile', 'either one works', 'it depends on the noun'],
          correct: 1,
          why: 'une question difficile. Difficile is not one of the ten, so it goes behind. The first option is the English order and it is the mistake this whole lesson exists to stop.',
        },
      },
      {
        label: 'One of the ten, and one not',
        items: [
          { fr: frOf(IN_FRONT.nouveau), itemId: IN_FRONT.nouveau, respell: sub('nouveau'), en: enOf(IN_FRONT.nouveau) },
          { fr: frOf('fr.a1.deplacements.224'), itemId: 'fr.a1.deplacements.224', respell: sub('rouge'), en: enOf('fr.a1.deplacements.224') },
          { fr: frOf(IN_FRONT.mauvais), itemId: IN_FRONT.mauvais, respell: sub('mauvais'), en: enOf(IN_FRONT.mauvais) },
          { fr: frOf('fr.a1.dictee.205'), itemId: 'fr.a1.dictee.205', respell: sub('facile'), en: enOf('fr.a1.dictee.205') },
        ],
        check: {
          q: 'You have never met the word « bruyant », meaning noisy. Where do you put it?',
          opts: ['in front of the noun', 'behind the noun', 'either side', 'you cannot say without looking it up'],
          correct: 1,
          why: `Behind. ${REFRAME} The ten are closed and bruyant is not one of them, so it goes where every other describing word goes. That is the value of a closed list: a word you have never seen is already sorted.`,
        },
      },
    ],
  },

  /* ── Act 3: when the side changes the meaning ───────────────────────────── */

  {
    // ── THE PAIR SCREEN ────────────────────────────────────────────────────
    //
    // "The meaning-changing pair is a PAIR, so give it two columns on one
    // screen. This is the layout the test must assert. It is the only screen in
    // A1 where word order carries meaning, and splitting the two halves across
    // missions destroys the entire teaching."
    //
    // Two columns, four rows, one row per pair, both orders visible at once with
    // the English under each. a1-16-placement.test.ts asserts the two-column
    // shape, all four pairs by name, and both English meanings present.
    type: 'tapTable',
    id: 's09-pairs',
    title: 'Four Words, Two Meanings Each',
    frSub: 'Le sens change de place',
    layer: 'core',
    terms: ['positionCarriesMeaning', 'whichSide'],
    sheetId: 'sheet.a1.16.pairs',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-16-pairs' },
    say: 'Four rows. Both halves of each one are correct French, and they mean different things.',
    cols: ['in front', 'behind'],
    rows: THE_PAIRS.map((p) => {
      const [before, after] = pairFor(p);
      const g = PAIR_GLOSS[p];
      return {
        // THE ENGLISH GOES IN THE CELL, under the French, not only in the detail
        // modal. The brief asks for it in as many words: "un ancien professeur on
        // the left, un professeur ancien on the right, WITH THE ENGLISH UNDER
        // EACH." A first draft put the meanings in the detail only, and on a
        // Pixel 6 that reads as four pairs of French phrases whose contrast the
        // learner has to take on trust and a tap.
        //
        // TapTableView draws each cell as ONE <TX> with lhMult 1.45, so a newline
        // inside the string renders as a second line. Verified on a device: four
        // rows of two lines each still clear the fold with the Back/Next bar
        // visible.
        cells: [`${before.fr}\n${before.en}`, `${after.fr}\n${after.en}`],
        say: `${before.fr} ${after.fr}`,
        detail: {
          title: `${g.adj}: ${g.before} or ${g.after}`,
          body: `${before.fr} ${before.en} ${after.fr} ${after.en} `
            + `In front, ${g.adj} means ${g.before}. Behind, it means ${g.after}. Both are correct French, so `
            + `nobody will tell you which one you said.`,
          say: `${before.fr} ${after.fr}`,
        },
      };
    }),
  },

  {
    type: 'cardDeck',
    id: 's10-eight',
    title: 'Eight Sentences, Four Meanings Apart',
    frSub: 'Huit phrases',
    hint: 'Each pair is two cards. Read both before you swipe on.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['positionCarriesMeaning'],
    sheetId: 'sheet.a1.16.pairs',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-16-pairs' },
    say: 'The four pairs one screen at a time, so you meet each meaning on its own.',
    cards: [
      ...THE_PAIRS.flatMap((p) => {
        const [before, after] = pairFor(p);
        const g = PAIR_GLOSS[p];
        return [
          {
            label: `${g.adj}, in front`,
            head: g.before,
            fr: before.fr,
            sub: `${sub(g.adj)} · ${before.en}`,
            body: before.notes ?? '',
          },
          {
            label: `${g.adj}, behind`,
            head: g.after,
            fr: after.fr,
            sub: `${sub(g.adj)} · ${after.en}`,
            body: after.notes ?? '',
          },
        ];
      }),
      {
        label: 'the one from the scene',
        head: 'In front, ancien is always former',
        fr: frOf('fr.a1.adjectifs-essentiels.340'),
        sub: `${sub('ancien')} · ${enOf('fr.a1.adjectifs-essentiels.340')}`,
        body: 'If you meant a teacher who is elderly, this sentence did not say it. It says you no longer study with them, and the person you said it to now believes that. Nothing about it sounds wrong, which is why it survives.',
      },
      {
        label: 'how many words do this',
        head: 'Four, and you have met all four',
        body: 'This is not a general property of French. Four common words change meaning by position and the rest do not, so there is no wider system to worry about. Every other describing word has exactly one correct side.',
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's11-meaning',
    title: 'Which One Did You Mean?',
    frSub: 'Quel sens ?',
    layer: 'core',
    terms: ['positionCarriesMeaning'],
    say: 'Each check gives you a meaning in English and asks for the side. The word alone cannot answer it.',
    groups: [
      {
        label: 'grand and ancien',
        items: [
          ...pairFor('grand').map((r) => ({ fr: r.fr, itemId: r.id, respell: sub('grand'), en: r.en })),
          ...pairFor('ancien').map((r) => ({ fr: r.fr, itemId: r.id, respell: sub('ancien'), en: r.en })),
        ],
        check: {
          // Every placement question needs a full noun phrase in the stem AND a
          // meaning in English. "grand: before or after?" has no answer, because
          // grand is both.
          q: 'You want to tell someone your neighbour is very tall. Which do you say?',
          opts: ["C'est un grand homme.", "C'est un homme grand.", 'Either one is fine.', 'Neither is correct French.'],
          correct: 1,
          why: 'C\'est un homme grand. Behind the noun, grand is a measurement. In front it would say he is a great man, which is about importance and says nothing about his height.',
        },
      },
      {
        label: 'pauvre and propre',
        items: [
          ...pairFor('pauvre').map((r) => ({ fr: r.fr, itemId: r.id, respell: sub('pauvre'), en: r.en })),
          ...pairFor('propre').map((r) => ({ fr: r.fr, itemId: r.id, respell: sub('propre'), en: r.en })),
        ],
        check: {
          q: 'You share a flat and you want to say the room is yours alone. Which do you say?',
          opts: ["C'est ma chambre propre.", "C'est ma propre chambre.", 'Both say the same thing.', 'You cannot say this with propre.'],
          correct: 1,
          why: 'C\'est ma propre chambre. In front, propre means your own. Behind, it means clean, so the other option tells your flatmate the room has been tidied and says nothing about who it belongs to.',
        },
      },
      {
        // The four words on their own, which is the one group in the lesson
        // where the bare adjective is deliberately unanswerable. Everywhere else
        // a bare word has a side; these four do not, and meeting them stripped
        // of a sentence is the fastest way to feel that.
        label: 'The four, with no sentence around them',
        items: THE_PAIRS.map((p) => ({
          fr: PAIR_GLOSS[p].adj,
          itemId: CHANGER_HEADWORDS[p],
          respell: sub(PAIR_GLOSS[p].adj),
          en: `${PAIR_GLOSS[p].before} in front · ${PAIR_GLOSS[p].after} behind`,
        })),
        check: {
          q: 'Somebody hands you the word « ancien » and asks which side of the noun it goes on. What is the answer?',
          opts: [
            'in front, because it is a short common word',
            'behind, because it is not one of the ten',
            'there is no answer until you know which meaning you want',
            'either side, and it makes no difference',
          ],
          correct: 2,
          why: 'There is no answer yet. These four are the only words in the lesson where the word alone cannot tell you, because both sides are correct and they mean different things. For every other describing word the question does have an answer.',
        },
      },
    ],
  },

  {
    // `swipe` and `size` are not decoration. MissionSection renders commonErrors
    // as its own swipe deck ONLY when `swipe` is set; without it the section
    // falls through to a path that drew a BLANK screen on sons.08 m22 and
    // a1.01 m5.
    type: 'commonErrors',
    swipe: true,
    size: 'lg',
    id: 's12-errors',
    title: 'Five Things An English Speaker Writes',
    frSub: 'Cinq erreurs',
    layer: 'core',
    terms: ['whichSide', 'theShortList', 'deInFront'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-16-front' },
    say: `${REFRAME} Five errors, one per screen, and the first one is the whole lesson.`,
    errors: [
      {
        wrong: 'Writing « une rouge voiture ».',
        right: 'Writing « une voiture rouge ».',
        why: 'The English order applied to French. Rouge is not one of the ten, so it goes behind, and this is the error every English speaker makes on their first day and some make for years.',
      },
      {
        wrong: 'Writing « une maison grande » for a big house.',
        right: 'Writing « une grande maison ».',
        why: 'The correction over-applied. A learner who has just been told describing words go behind starts putting all of them behind, including the ten that do not. This one arrives about a week after the first.',
      },
      {
        wrong: 'Writing « des beaux tableaux ».',
        right: 'Writing « de beaux tableaux ».',
        why: 'Once one of the ten moves in front of a plural noun, des shortens to de. Nothing else in the phrase changes and the adjective keeps its own plural ending.',
      },
      {
        wrong: 'Writing « un vieux ami ».',
        right: 'Writing « un vieil ami ».',
        why: 'Ami starts with a vowel sound, and vieux grows a special form in front of one. These three forms exist only in front of the noun, which is another way of noticing which side you are on.',
      },
      {
        wrong: 'Saying « un ancien hôtel » when you mean the building is old.',
        right: 'Saying « un hôtel ancien ».',
        why: 'The one error nobody will correct, because both are correct French. In front, ancien means it used to be a hotel. Four words behave this way and this is the one you will meet most.',
      },
    ],
  },

  /* ── Act 4: what follows from it ────────────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's13-de',
    title: 'When Des Becomes De',
    frSub: 'Des devient de',
    hint: 'Ten sentences, and the same small change in every one.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['deInFront', 'theShortList'],
    sheetId: 'sheet.a1.16.sides',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-16-de' },
    say: 'One consequence of the rule you have just learned, and it only ever happens in the plural.',
    cards: [
      {
        label: 'the rule',
        head: 'One of the ten, in front, and a plural noun',
        fr: frOf(DE_IDS[0]),
        sub: `${sub('beaux')} · ${enOf(DE_IDS[0])}`,
        body: 'The small word in front is de, not des. When one of the ten gets in front of a plural noun the article shortens, the adjective still takes its own plural ending, and nothing else in the phrase moves.',
      },
      {
        label: 'you have seen de before',
        head: 'This is the second place it happens',
        body: 'The indefinite articles lesson showed des shortening to de under a negative: je n\'ai pas de voiture. That is a different trigger and worth keeping separate. There, the negative did it. Here, the describing word moving in front does it.',
      },
      ...DE_IDS.slice(1).map((id, i) => ({
        label: `${i + 2} of ${DE_IDS.length}`,
        head: 'de, not des',
        fr: frOf(id),
        sub: enOf(id),
        body: 'The same shortening again. Nine real sentences in a row and not one of them says des, because every one has a describing word in front of a plural noun.',
      })),
    ],
  },

  {
    type: 'cardDeck',
    id: 's14-vowel',
    title: 'Three Shapes That Only Exist In Front',
    frSub: 'Bel, vieil, nouvel',
    hint: 'Each one beside the ordinary form it replaces.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['vowelForm', 'whichSide'],
    sheetId: 'sheet.a1.16.sides',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-16-vowel' },
    // ── The a1.14 boundary, held on the cards themselves ──────────────────
    //
    // a1.14 SHIPPED bel and vieil, as a third shape of beau and vieux inside its
    // four-form grid. Those two are referenced here and not retaught: the card
    // names the last lesson and adds only the position fact, which a1.14 does
    // not have. nouvel is taught in full, because a1.14's NOT_TAUGHT_IDS
    // hard-blocks it and its batch dies if it ever appears there.
    say: 'Two of these you met last lesson. The third is new, and all three tell you the same thing about position.',
    cards: [
      ...VOWEL_FORMS.flatMap((v) => [
        {
          label: `${v.plain}, consonant behind it`,
          head: v.plain,
          fr: frOf(v.consonant),
          sub: `${sub(v.plain)} · ${enOf(v.consonant)}`,
          body: 'The ordinary form, because the noun after it starts with a consonant. Nothing unusual happens here.',
        },
        {
          label: v.owner === 'a1.14' ? `${v.word}, from last lesson` : `${v.word}, new`,
          head: v.word,
          fr: frOf(v.vowel),
          sub: `${sub(v.word)} · ${enOf(v.vowel)}`,
          body: v.owner === 'a1.14'
            ? `You had ${v.word} last lesson as a shape ${v.plain} takes. Here it is doing something else as well: it is telling you where in the phrase you are.`
            : `${v.plain} does the same thing ${VOWEL_FORMS.filter((x) => x.owner === 'a1.14').map((x) => x.plain).join(' and ')} do, and this is the third and last word in the language that does it. Say un nouveau hôtel out loud and you will hear why.`,
        },
      ]),
      {
        label: 'why this belongs here',
        head: 'A shape that can only happen in front',
        body: 'A describing word behind its noun never needs one of these, because there is no noun after it to run into. So meeting bel, vieil or nouvel is a signal: you are in front of the noun, and the word is one of the ten.',
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's15-split',
    title: 'One On Each Side',
    frSub: 'Deux adjectifs',
    hint: 'Eight sentences with two describing words each.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['twoAtOnce', 'whichSide'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-16-front' },
    say: 'Two describing words in one phrase, and no new rule at all. Each goes where it was always going.',
    cards: [
      ...SPLIT_IDS.map((id, i) => ({
        label: `${i + 1} of ${SPLIT_IDS.length}`,
        head: 'one in front, one behind',
        fr: frOf(id),
        sub: enOf(id),
        body: i === 0
          ? 'One of the ten in front, a colour behind, and the noun between them. Nothing had to be decided beyond what you already knew about each word.'
          : 'The same shape again. Each describing word took its own side and the noun sat in the middle.',
      })),
      {
        label: 'what not to worry about',
        head: 'Two on the same side is a later problem',
        body: 'Putting two describing words on the SAME side has its own rules and they are not worth your time yet. If you need it, use two short sentences. Everything on this screen is one from each group.',
      },
    ],
  },

  {
    type: 'reading',
    id: 's16-reading',
    title: 'The Flat Listing',
    frSub: "L'annonce",
    layer: 'core',
    terms: ['whichSide', 'positionCarriesMeaning', 'deInFront'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a reading
    // section to ReadingMission (and so to PassagePage, which draws the
    // underlines) only when this flag is set WITH questions.
    questionsInModal: true,
    say: 'Four lines from a listing, and one of them is not describing what the person writing it thought.',
    // Paul's A1 rule: anything not inside « » is in English. ONE BLOCK, NO LINE
    // BREAKS. PassagePage splits on /(?<=[.!?»])\s+/ and an authored newline is
    // consumed as whitespace and silently discarded.
    text:
      'Flat listings are the one kind of French writing where every word is doing paid work, because the person writing them is charging by the month and the person reading them has forty others open. '
      + '« C\'est un ancien hôtel. » '
      + 'That line is the reason four people came to the viewing and left again, because they had all understood that the building used to be a hotel and is something else now. '
      + 'The owner meant the opposite and has never worked out why nobody stays. '
      + '« Nous avons de beaux appartements. » '
      + 'Correct, and the small word in front of it is the tell: de rather than des, because beaux got in front of the noun. '
      + 'The third line is about the street and it is the easiest sentence on the page. '
      + '« Nous habitons dans un quartier calme. » '
      + 'Nothing to decide there, because calme is not one of the ten and goes where almost everything goes. '
      + 'The last line is the one worth copying. '
      + '« C\'est une petite ville tranquille. »',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and case
    // on BOTH sides and allows a phrase of up to four words (MAX_GLOSS_WORDS).
    // Longest match wins, WHICH MEANS AN ENTRY CAN BE SHADOWED OUT OF EXISTENCE:
    // a1.08 shipped two entries that could never underline anything because
    // every occurrence sat inside a longer key. Checked here by running the real
    // segmentSentence in the test and comparing matched KEYS rather than text.
    //
    // No entry is a prefix of another, and none is five words or longer.
    glossary: [
      { word: 'un ancien hôtel', en: 'a former hotel', note: 'In front, ancien means it used to be one. Behind, it would mean the building is old.' },
      { word: 'de beaux appartements', en: 'beautiful flats', note: 'de rather than des, because one of the ten got in front of a plural noun.' },
      { word: 'un quartier calme', en: 'a quiet neighbourhood', note: 'The default order. Calme is not one of the ten, so it goes behind the noun.' },
      { word: 'une petite ville tranquille', en: 'a small quiet town', note: 'One from each group. Petite in front, tranquille behind, and the town in between.' },
    ],
    questions: [
      { q: 'What did the owner mean by the first line, and what does it actually say?', a: 'They meant the building is old and still a hotel, which would be « un hôtel ancien ». What they wrote says it used to be a hotel and is not one now. Both sentences are correct French, so nobody reading the listing had any reason to think it was a mistake.' },
      { q: 'The second line says « de beaux appartements ». The plural would normally take a longer word in front of it. What shortened it?', a: 'Beaux is one of the ten and it got in front of a plural noun, which shortens the article to de. The adjective still carries its own plural ending. This is the only place in the listing where a word outside the noun phrase had to change.' },
      { q: 'The last line has two describing words. How did the writer decide where to put them?', a: 'They did not have to decide anything. Petite is one of the ten so it goes in front, tranquille is not so it goes behind, and the noun ends up between them. Two describing words in one phrase is not a third rule, it is the two rules you already have applied at once.' },
    ],
  },

  /* ── Act 5: sort it, say it, use it ─────────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's17-words',
    title: 'The Whole Thing, Banked',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['theShortList', 'positionCarriesMeaning', 'vowelForm'],
    sheetId: 'sheet.a1.16.sides',
    say: 'Three decks. The ten that go in front, the four that change meaning, and the three vowel shapes.',
    themes: [
      {
        title: 'the ten that go in front',
        cards: CLOSED_SET.map((a) => ({ fr: a, sub: sub(a), en: `${a}, and it goes before the noun` })),
      },
      {
        title: 'the four that change meaning',
        cards: THE_PAIRS.map((p) => {
          const g = PAIR_GLOSS[p];
          return { fr: g.adj, sub: sub(g.adj), en: `in front: ${g.before} · behind: ${g.after}` };
        }),
      },
      {
        title: 'only ever in front of a vowel',
        cards: VOWEL_FORMS.map((v) => ({
          fr: v.word,
          sub: sub(v.word),
          en: `${v.plain} becomes ${v.word} in front of a vowel sound`,
        })),
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's18-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'A meaning on the front. Say the whole French phrase out loud, in the right order, before you flip.',
    cards: [
      ...THE_PAIRS.flatMap((p) => {
        const [before, after] = pairFor(p);
        const g = PAIR_GLOSS[p];
        return [
          { front: `${g.adj}, meaning ${g.before}`, back: before.fr, say: before.fr },
          { front: `${g.adj}, meaning ${g.after}`, back: after.fr, say: after.fr },
        ];
      }),
      { front: 'a big city', back: frOf(IN_FRONT.grand), say: frOf(IN_FRONT.grand) },
      { front: 'a good restaurant', back: frOf(IN_FRONT.bon), say: frOf(IN_FRONT.bon) },
      { front: 'a pretty dress', back: frOf(IN_FRONT.joli), say: frOf(IN_FRONT.joli) },
      { front: 'an old castle', back: frOf(IN_FRONT.vieux), say: frOf(IN_FRONT.vieux) },
      { front: 'an easy question', back: frOf('fr.a1.adjectifs-essentiels.103'), say: frOf('fr.a1.adjectifs-essentiels.103') },
      { front: 'a quiet neighbourhood', back: frOf('fr.a1.rp-societe.088'), say: frOf('fr.a1.rp-societe.088') },
      { front: 'beautiful paintings, in the plural', back: frOf(DE_IDS[0]), say: frOf(DE_IDS[0]) },
      { front: 'old friends, in the plural', back: frOf('fr.a1.adjectifs-essentiels.212'), say: frOf('fr.a1.adjectifs-essentiels.212') },
      { front: 'a beautiful tree, with the vowel form', back: frOf('fr.a1.adjectifs-essentiels.204'), say: frOf('fr.a1.adjectifs-essentiels.204') },
      { front: 'a new hotel, with the vowel form', back: frOf('fr.a1.adjectifs-essentiels.209'), say: frOf('fr.a1.adjectifs-essentiels.209') },
      { front: 'a small red dress, two describing words', back: frOf('fr.a1.adjectifs-essentiels.008'), say: frOf('fr.a1.adjectifs-essentiels.008') },
    ],
  },

  {
    // ── The only mission where the learner produces a word order ───────────
    //
    // `practice.skill` is authored and read by no component: PracticeVFView
    // takes itemIds and nothing else, so `skill: 'write'` draws no writing
    // surface anywhere in the app. The dictée and the quiz's typeIn and
    // errorSpot questions are the only places a learner actually writes, and a
    // lesson about word order that never makes anybody write a word order is
    // testing recognition and calling it production.
    //
    // EVERY TARGET IS IN WORDS MODE, and that is the requirement rather than an
    // accident. Word mode hands the learner a bank of the sentence's own words
    // plus two decoys and asks them to assemble it, so the only thing they can
    // get wrong is the ORDER. Letters mode would have them type the sentence
    // out, which tests spelling. See DICTEE_PAIRS in placement-corpus.ts for
    // which pair this excludes and why. Measured through the real dicteeMode in
    // the batch, the merge and the test.
    type: 'dictation',
    id: 's19-dictation',
    title: 'Write What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    say: 'Seven lines. Six of them are three pairs of the same words in the other order, and only your ear tells you which is which.',
    itemIds: [
      ...DICTEE_PAIRS.flatMap((p) => pairFor(p).map((r) => r.id)),
      'fr.a1.adjectifs-essentiels.340',
    ],
  },

  {
    type: 'practice',
    id: 's20-speak',
    title: 'Say It In The Right Order',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // The only practice mission in the lesson, deliberately. sons.06 ships two
    // doing the same job and it reads as a repeat.
    say: 'Every sentence the lesson taught. Say each one as one phrase rather than word by word.',
    skill: 'speak',
    itemIds: [
      ...AUTHORED_IDS,
      ...CLOSED_SET.map((a) => IN_FRONT[a]),
      ...BEHIND_IDS,
      ...DE_IDS,
      ...SPLIT_IDS,
      ...VOWEL_FORMS.flatMap((v) => [v.consonant, v.vowel]),
      ...BOTH_SIDES.flatMap((b) => [b.front, b.behind]),
      LIAISON_PAIR.silent,
    ],
  },

  {
    type: 'scenario',
    id: 's21-scenario',
    title: 'Selling The Flat',
    frSub: "On visite l'appartement",
    layer: 'core',
    terms: ['whichSide', 'positionCarriesMeaning'],
    say: 'One viewing, and you hold up your half. Every turn is a decision about which side a word goes.',
    setting: 'The same building from the listing, a week later. Théo has come to look at it and you are showing him round.',
    // Every turn carries `userEn` and at least two `alts`, which scenario.logic.ts
    // requires of the whole seed. A reveal with no translation shows the learner
    // the one sentence comprehension matters on and asks them to read it; a
    // single accepted answer makes a conversation a cloze test.
    //
    // Apostrophes are straight throughout. The suite fails a conversation that
    // mixes straight and curly apostrophes in one bubble stack.
    turns: [
      {
        ai: "Bonjour ! Alors, c'est le bâtiment de l'annonce ? Il a l'air vieux.",
        en: 'Hello! So this is the building from the listing? It looks old.',
        user: "Oui, c'est un hôtel ancien.",
        userEn: 'Yes, it is an old hotel.',
        alts: [
          { fr: "C'est un bâtiment ancien, oui.", en: 'It is an old building, yes.' },
          { fr: "Oui, il est ancien.", en: 'Yes, it is old.' },
        ],
      },
      {
        ai: "Et l'appartement ? Il est comment ?",
        en: 'And the flat? What is it like?',
        user: "C'est une belle maison.",
        userEn: 'It is a beautiful house.',
        alts: [
          { fr: "C'est un bel appartement.", en: 'It is a beautiful flat.' },
          { fr: "Il y a de beaux appartements ici.", en: 'There are beautiful flats here.' },
        ],
      },
      {
        ai: "Et le quartier ? Il y a beaucoup de bruit le soir ?",
        en: 'And the neighbourhood? Is there a lot of noise in the evening?',
        user: 'Nous habitons dans un quartier calme.',
        userEn: 'We live in a quiet neighbourhood.',
        alts: [
          { fr: "C'est un quartier calme.", en: 'It is a quiet neighbourhood.' },
          { fr: "Le quartier est calme le soir.", en: 'The neighbourhood is quiet in the evening.' },
        ],
      },
      {
        ai: "Parfait. Et la chambre, je la partage avec quelqu'un ?",
        en: 'Perfect. And the bedroom, do I share it with someone?',
        user: "Non, c'est ta propre chambre.",
        userEn: 'No, it is your own room.',
        alts: [
          { fr: 'Non, la chambre est à toi.', en: 'No, the room is yours.' },
          { fr: "Non, tu as ta propre chambre.", en: 'No, you have your own room.' },
        ],
      },
      {
        ai: "Ah, et tu as dit un ancien hôtel dans l'annonce. C'est encore un hôtel ou pas ?",
        en: 'Ah, and you said a former hotel in the listing. Is it still a hotel or not?',
        user: "Pardon, un hôtel ancien. Il est vieux, mais c'est toujours un hôtel.",
        userEn: 'Sorry, an old hotel. It is old, but it is still a hotel.',
        alts: [
          { fr: 'Un hôtel ancien, pas un ancien hôtel.', en: 'An old hotel, not a former hotel.' },
          { fr: "Ancien apres le nom. Il est vieux et il marche toujours.", en: 'Ancien after the noun. It is old and still running.' },
        ],
      },
    ],
  },

  /* ── Act 6: prove it ────────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's22-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['whichSide', 'theShortList', 'positionCarriesMeaning'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'Where does a describing word go, if you have no idea?', back: `${REFRAME} The group in front is ten words and closed; the group behind is endless.`, say: frOf('fr.a1.rp-societe.088') },
      { front: 'Name the ten that go in front.', back: CLOSED_SET.join(', '), say: CLOSED_SET.join(', ') },
      { front: 'You meet a describing word you have never seen. Which side?', back: 'Behind. The front group is closed and does not take new members.', say: frOf('fr.a1.adjectifs-essentiels.103') },
      { front: 'a big city', back: `${frOf(IN_FRONT.grand)} grande is one of the ten, so it goes in front.`, say: frOf(IN_FRONT.grand) },
      { front: 'a red car', back: `${frOf('fr.a1.deplacements.224')} rouge is not on the list, so it goes behind.`, say: frOf('fr.a1.deplacements.224') },
      { front: 'What happens to des when one of the ten moves in front?', back: `${frOf(DE_IDS[0])} It shortens to de, and nothing else changes.`, say: frOf(DE_IDS[0]) },
      { front: 'a great man, meaning important', back: `${pairFor('grand')[0].fr} In front, grand is about importance.`, say: pairFor('grand')[0].fr },
      { front: 'a tall man, meaning height', back: `${pairFor('grand')[1].fr} Behind, grand is a measurement.`, say: pairFor('grand')[1].fr },
      { front: 'a former hotel', back: `${pairFor('ancien')[0].fr} In front, ancien means it used to be one.`, say: pairFor('ancien')[0].fr },
      { front: 'an old hotel, still open', back: `${pairFor('ancien')[1].fr} Behind, ancien just means old.`, say: pairFor('ancien')[1].fr },
      { front: 'my own room', back: `${pairFor('propre')[0].fr} In front, propre means it belongs to you.`, say: pairFor('propre')[0].fr },
      { front: 'a man with no money', back: `${pairFor('pauvre')[1].fr} Behind, pauvre is about money and nothing else.`, say: pairFor('pauvre')[1].fr },
      { front: 'Why does beau become bel in un bel arbre?', back: 'Arbre starts with a vowel sound. These three shapes only ever happen in front of the noun.', say: frOf('fr.a1.adjectifs-essentiels.204') },
      { front: 'Two describing words, one on the list and one not.', back: `${frOf('fr.a1.adjectifs-essentiels.008')} Each one takes its own side and the noun sits between them.`, say: frOf('fr.a1.adjectifs-essentiels.008') },
    ],
  },

  {
    type: 'progressCheck',
    id: 's23-progress',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to be
    // wrong and one card that reads as padded.
    title: 'Where You Stand',
    frSub: 'Votre progression',
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched a message thread go wrong without anybody noticing, learned that French puts the describing word behind the noun and that English does the opposite on every single phrase, and met the small closed group that goes in front instead. You have sorted words into sides with the groups shown and then without them, seen what happens to des when one of the ten moves up, met three shapes that can only ever occur in front of a vowel, and watched four words change meaning depending on which side they sit. What is left tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's24-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Six rounds. Miss too many in a round and you get that round\'s drill before the next one starts.',
    /* ── Authoring for a shuffle that already ships ──────────────────────────
     *
     * QuizDeckView in LessonRich.tsx already shuffles the options of every
     * closed question, per question, per attempt, and re-shuffles on retry. The
     * authored `correct` index never moves; only the display order is permuted.
     *
     * So: NO OPTION REFERS TO A POSITION. This lesson is unusually exposed,
     * because a placement question's options are two orderings of the same words
     * and "the first one" is a tempting thing to write. Every option below is a
     * full phrase or a self-contained statement. The test asserts it.
     *
     * Every option within a question is distinct, because a repeated option
     * makes a shuffled question genuinely ambiguous rather than merely
     * redundant.
     *
     * The authored `correct` index is still varied: quiz-spread caps any single
     * slot at 40% of closed questions regardless of the runtime shuffle.
     *
     * Every question carries a `why` that teaches the rule and a `ref` naming a
     * section that exists. Every free-text answer is checked through the real
     * matchesAccept in the batch, the merge and the test.                     */
    rounds: [
      {
        id: 'r1-the-default',
        label: 'Which side, by default',
        // The FIRST target is the one whose drill fires: drillForRound walks a
        // round's targets and stops at the first that resolves. Every drill this
        // lesson authors is the first resolving target of exactly one round, and
        // the batch, the merge and the test all assert it.
        targets: ['err-english-order', 'err-over-correct'],
        say: 'The default, on words that are not on the list.',
        questions: [
          {
            q: 'You want to say a red car. Which is correct French?',
            format: 'mcq',
            opts: ['une rouge voiture', 'une voiture rouge', 'une voiture de rouge', 'rouge une voiture'],
            correct: 1,
            why: 'une voiture rouge. Rouge is not one of the ten, so it goes behind the noun. The English order puts it in front and is the single most common beginner mistake in French.',
            ref: 's04-default',
          },
          {
            q: 'You have just looked up « bruyant », meaning noisy, and you have never seen it before. Where does it go?',
            format: 'mcq',
            opts: [
              'behind the noun, because the front group is closed',
              'in front of the noun, like in English',
              'behind the verb, never inside the noun phrase',
              'either side, because new words have no fixed place',
            ],
            correct: 0,
            why: `Behind. ${REFRAME} The ten that go in front are a closed group and take no new members, so any describing word you have not met is already decided.`,
            ref: 's08-decide',
          },
          {
            q: 'Write the French for a quiet neighbourhood, using quartier and calme.',
            format: 'typeIn',
            accept: ['un quartier calme'],
            answer: 'un quartier calme',
            why: 'un quartier calme. The thing first, then what it is like. Calme is not on the short list, so there was no decision to make here.',
            ref: 's03-idea',
          },
          {
            q: 'Listen, and choose what you heard.',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'un plat délicieux' },
            opts: ['un plat délicieux', 'un délicieux plat', 'un plat de délice', 'des plats délicieux'],
            correct: 0,
            why: 'un plat délicieux. The dish comes first and the description follows it, which is where almost every describing word in French sits.',
            ref: 's04-default',
          },
        ],
      },
      {
        id: 'r2-the-short-list',
        label: 'The ten that go in front',
        targets: ['err-over-correct', 'err-english-order'],
        say: 'The exception, and knowing when you are in it.',
        questions: [
          {
            q: 'You want to say a big house. Which is correct French?',
            format: 'mcq',
            opts: ['une maison grande', 'une grande maison', 'une maison de grande', 'grande de maison'],
            correct: 1,
            why: 'une grande maison. Grand is one of the ten, so it goes in front. This is the mistake that arrives about a week after somebody learns the default, when they start putting every describing word behind.',
            ref: 's05-list',
          },
          {
            q: 'Which of these words is NOT one of the ten that go in front?',
            format: 'mcq',
            opts: ['joli', 'gros', 'facile', 'mauvais'],
            correct: 2,
            why: 'facile. Joli, gros and mauvais are all on the short list. Facile is an ordinary describing word and goes behind the noun: une question facile.',
            ref: 's05-list',
          },
          {
            q: 'Write the French for a good restaurant, using bon and restaurant.',
            format: 'typeIn',
            accept: ['un bon restaurant'],
            answer: 'un bon restaurant',
            why: 'un bon restaurant. Bon is one of the ten. Un restaurant bon is not what a French speaker says, even though it follows the general rule.',
            ref: 's05-list',
          },
          {
            q: 'One of these phrases has the describing word on the wrong side. Write it out corrected.',
            format: 'errorSpot',
            prompt: 'une ville petite',
            accept: ['une petite ville'],
            answer: 'une petite ville',
            why: 'une petite ville. Petit is one of the ten and goes in front. This one is worth saying out loud a few times, because the corrected version is the one that will feel wrong to an English ear.',
            ref: 's05-list',
          },
        ],
      },
      {
        id: 'r3-meaning',
        label: 'When the side changes the meaning',
        targets: ['err-wrong-meaning'],
        // The strongest mcq items on the track, because BOTH options are correct
        // French and only the stem's meaning selects one. A whole round of them.
        say: 'Both options are correct French in every question here. The meaning decides.',
        questions: [
          {
            q: 'Your neighbour is two metres tall. How do you say he is a tall man?',
            format: 'mcq',
            opts: ["C'est un grand homme.", "C'est un homme grand.", "C'est un homme de grand.", "C'est grand un homme."],
            correct: 1,
            why: 'C\'est un homme grand. Behind the noun, grand is a measurement. In front it means great or important and says nothing about his height, and both sentences are correct French so nobody would correct you.',
            ref: 's09-pairs',
          },
          {
            q: 'The building is a hundred years old and still takes guests. How do you describe it?',
            format: 'mcq',
            opts: ["C'est un ancien hôtel.", "C'est un hôtel de ancien.", "C'est ancien un hôtel.", "C'est un hôtel ancien."],
            correct: 3,
            why: 'C\'est un hôtel ancien. Behind the noun, ancien means old. In front it means former, so the other version tells the listener it used to be a hotel and is something else now.',
            ref: 's09-pairs',
          },
          {
            q: 'You share a flat and the bedroom is yours alone. How do you say it is your own room?',
            format: 'mcq',
            opts: ["C'est ma chambre propre.", "C'est ma propre chambre.", "C'est ma chambre de propre.", "C'est propre ma chambre."],
            correct: 1,
            why: 'C\'est ma propre chambre. In front, propre means your own. Behind it means clean, so the other version tells your flatmate the room has been tidied and nothing about who it belongs to.',
            ref: 's11-meaning',
          },
          {
            q: 'You feel sorry for someone after a hard week. Which sentence says that, rather than saying he has no money?',
            format: 'mcq',
            opts: ["C'est un homme pauvre.", "C'est un homme de pauvre.", "C'est un pauvre homme.", "C'est pauvre un homme."],
            correct: 2,
            why: 'C\'est un pauvre homme. In front, pauvre is sympathy and says nothing about money. Behind, it is about money and nothing else. English uses the one word poor for both, which is why the position has to do the work.',
            ref: 's11-meaning',
          },
        ],
      },
      {
        id: 'r4-des-becomes-de',
        label: 'What happens to des',
        targets: ['err-des-before'],
        say: 'One consequence of the rule, and it only shows up in the plural.',
        questions: [
          {
            q: 'Complete the sentence: Ce sont ___ beaux tableaux. Write only the missing word.',
            format: 'typeIn',
            accept: ['de'],
            answer: 'de',
            why: 'de. Once one of the ten gets in front of a plural noun, des shortens to de. The adjective keeps its own plural ending and nothing else in the phrase moves.',
            ref: 's13-de',
          },
          {
            q: 'Which of these is correct French for beautiful flowers?',
            format: 'mcq',
            opts: ['des belles fleurs', 'de la belles fleurs', 'de belles fleurs', 'des fleurs de belles'],
            correct: 2,
            why: 'de belles fleurs. Belle is one of the ten and it is in front of a plural noun, so des shortens to de. Belles still carries its own plural s.',
            ref: 's13-de',
          },
          {
            q: 'Complete the sentence: Nous avons ___ nouveaux voisins. Write only the missing word.',
            format: 'typeIn',
            accept: ['de'],
            answer: 'de',
            why: 'de. Same rule again on a different word. Nouveau is one of the ten, the noun is plural, so des becomes de.',
            ref: 's13-de',
          },
          {
            q: 'Which of these plurals keeps des, because the describing word is NOT in front of the noun?',
            format: 'mcq',
            opts: ['des voitures rouges', 'des rouges voitures', 'de voitures rouges', 'des de voitures rouges'],
            correct: 0,
            why: 'des voitures rouges. Rouge is not on the short list, so it stays behind the noun, nothing moved in front of anything, and des is untouched. The shortening only happens when one of the ten moves up.',
            ref: 's13-de',
          },
        ],
      },
      {
        id: 'r5-vowel-and-split',
        label: 'The vowel forms, and two at once',
        targets: ['err-no-vowel-form'],
        say: 'Three shapes that only exist in front, and what happens with two describing words.',
        questions: [
          {
            q: 'You want to say an old friend, using vieux and ami. Which is correct?',
            format: 'mcq',
            opts: ['un vieux ami', 'un ami vieux', 'un vieille ami', 'un vieil ami'],
            correct: 3,
            why: 'un vieil ami. Ami starts with a vowel sound, and vieux takes a special shape in front of one. Say un vieux ami out loud and you will hear the reason it exists.',
            ref: 's14-vowel',
          },
          {
            q: 'Listen. Which one has the vowel form in it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: "C'est un bel arbre." },
            opts: ["C'est un bel arbre.", "C'est un beau jardin.", "C'est un arbre beau.", "C'est un beau arbre."],
            correct: 0,
            why: 'C\'est un bel arbre. Arbre starts with a vowel sound, so beau becomes bel. A describing word sitting behind its noun never needs one of these shapes, because there is no noun after it to run into.',
            ref: 's14-vowel',
          },
          {
            q: 'Write the French for a small red dress, using petite and rouge.',
            format: 'typeIn',
            accept: ['une petite robe rouge'],
            answer: 'une petite robe rouge',
            why: 'une petite robe rouge. Petite is one of the ten so it goes in front, rouge is not so it goes behind, and the dress sits between them. This is not a third rule, it is the two you already have applied at once.',
            ref: 's15-split',
          },
          {
            q: 'One of these has a describing word on the wrong side. Write it out corrected.',
            format: 'errorSpot',
            prompt: 'un blanc chien petit',
            accept: ['un petit chien blanc'],
            answer: 'un petit chien blanc',
            why: 'un petit chien blanc. Petit is on the list and goes in front, blanc is not and goes behind, and the dog is in the middle. Both describing words were on the wrong side here.',
            ref: 's15-split',
          },
        ],
      },
      {
        id: 'r6-put-it-together',
        label: 'All of it at once',
        targets: ['err-both-in-front'],
        say: 'The last round, and every question needs more than one thing from the lesson.',
        questions: [
          {
            q: 'Listen carefully. In which one does the d at the end of grand get pronounced?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: "C'est un grand homme." },
            opts: ["C'est un grand homme.", 'Mon frère est un grand garçon.', "C'est un homme grand.", 'Il est grand.'],
            correct: 0,
            why: 'C\'est un grand homme. Homme starts with a vowel sound, so the silent d at the end of grand wakes up and is said as a t. In front of garçon there is nothing to wake it.',
            ref: 's09-pairs',
          },
          {
            q: 'Say this out loud: a beautiful house, using belle and maison.',
            format: 'speak',
            target: "C'est une belle maison.",
            // The mic scores the noun phrase rather than the whole sentence: the
            // teaching is the ORDER of these three words and nothing else in the
            // sentence is being tested.
            scoreSegment: 'une belle maison',
            answer: "C'est une belle maison.",
            accept: ["C'est une belle maison.", 'une belle maison'],
            why: 'une belle maison. Belle is one of the ten, so it goes in front. Say it as one phrase rather than three words, because that is what makes the order stick.',
            ref: 's05-list',
          },
          {
            q: 'Say this out loud: an old hotel that is still open, using hôtel and ancien.',
            format: 'speak',
            target: "C'est un hôtel ancien.",
            scoreSegment: 'un hôtel ancien',
            answer: "C'est un hôtel ancien.",
            accept: ["C'est un hôtel ancien.", 'un hôtel ancien'],
            why: 'un hôtel ancien. Behind the noun, ancien means old. This is the sentence the scene at the start of the lesson needed and did not have.',
            ref: 's09-pairs',
          },
          {
            // NOT tapSilent, which was the first draft and was the wrong tool:
            // that format wants a word and the letters that go unpronounced in
            // it, and this lesson has no silent-letter content at all. A format
            // chosen for variety rather than for what it tests is a question
            // that measures nothing.
            q: 'Write the French for a quiet neighbourhood, using quartier and calme, and put the two words in the right order.',
            format: 'typeIn',
            accept: ['un quartier calme'],
            answer: 'un quartier calme',
            why: `un quartier calme. ${REFRAME} Calme is not one of the ten, so it goes behind, and this is the shape almost every describing phrase in French takes.`,
            ref: 's03-idea',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's25-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Four things, and then what carries into the next unit.',
    body: 'You can put a describing word on the right side of the noun, name the ten that break the pattern, handle what follows from them, and hear four words change meaning depending on where they sit. The default half of that transfers to every describing word you will ever meet, including all the ones you have not learned yet, which is the part worth keeping. Family vocabulary is next, and the possessives after it, and you will be building noun phrases in both of them from the first screen.',
    points: [
      `${REFRAME} The group in front is ten words and closed. The group behind has no end.`,
      'English puts every describing word in front, so the French order is the reverse on every phrase and stays awkward after you understand it.',
      'Once one of the ten moves in front of a plural noun, des shortens to de.',
      'Four words change meaning by position, and both versions are correct, so nobody will tell you which one you said.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed by hand. Every figure is a fact about the array
 * directly above, and a display string is validated against nothing, so the
 * first mission added would have left the card confidently wrong with the whole
 * suite still green. It throws rather than degrades.                          */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's23-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.16.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Words that go in front', v: String(CLOSED_SET.length) },
    { k: 'Words that change meaning', v: String(THE_PAIRS.length) },
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Six, and the weighting is the argument of the lesson. The brief is explicit:
 * "A lesson about a decision needs more drilling and less exposition than a
 * vocabulary lesson, so budget missions toward groupDrill and practice rather
 * than toward decks." There is no vocabulary act at all, and three of the
 * twenty-four missions are groupDrills that make the learner commit before they
 * are told.
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit of 22.                                            */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'Which side',
    sections: ['s01-scene', 's02-goals', 's03-idea', 's04-default'],
    milestone: 'You have watched a correct sentence describe the wrong building.',
    estScreens: 26,
    restPoints: ['s01-scene/after-break', 's04-default/halfway'],
  },
  {
    id: 'act2',
    title: 'The short list',
    sections: ['s05-list', 's06-bothsides', 's07-sort', 's08-decide'],
    milestone: 'Ten words in front, everything else behind, and you have sorted both with and without the answer shown.',
    estScreens: 30,
    restPoints: ['s05-list/halfway', 's07-sort/halfway'],
  },
  {
    id: 'act3',
    title: 'When the side changes the meaning',
    sections: ['s09-pairs', 's10-eight', 's11-meaning', 's12-errors'],
    milestone: 'Four words, eight meanings, and no way to hear which one you chose.',
    estScreens: 30,
    restPoints: ['s10-eight/halfway', 's12-errors/halfway'],
  },
  {
    id: 'act4',
    title: 'What follows from it',
    sections: ['s13-de', 's14-vowel', 's15-split', 's16-reading'],
    milestone: 'des becomes de, three shapes exist only in front, and two describing words need no new rule.',
    estScreens: 32,
    restPoints: ['s13-de/halfway', 's15-split/halfway'],
  },
  {
    id: 'act5',
    title: 'Sort it, say it, use it',
    sections: ['s17-words', 's18-flash', 's19-dictation', 's20-speak', 's21-scenario'],
    milestone: 'You have written the order down and said it out loud, rather than recognised it.',
    estScreens: 46,
    restPoints: ['s18-flash/halfway', 's19-dictation/halfway', 's20-speak/halfway'],
  },
  {
    id: 'act6',
    title: 'Prove it',
    sections: ['s22-review', 's23-progress', 's24-quiz', 's25-roundup'],
    milestone: 'Lesson complete. Family vocabulary is next, and you will be building noun phrases in it from the first screen.',
    estScreens: 60,
    restPoints: ['s22-review/halfway', 's24-quiz/after-r2', 's24-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Act 6 releases nothing new; it applies and tests what acts 1 to 5
 * handed over.
 *
 * `once()` is not decoration. The groups above are built for TEACHING and they
 * legitimately overlap: the scene's two sentences are also the ancien pair, and
 * fr.a1.adjectifs-essentiels.079 is both a both-sides row and a split row. The
 * SRS keys on (itemId, modality), so releasing one card from two tranches would
 * take two ratings for one sentence. The first tranche to name an id keeps it
 * and the rest drop it, which is also the pedagogically right answer: an item
 * belongs to the act that taught it.                                          */

const released = new Set<string>();
const once = (ids: string[]): string[] => {
  const out: string[] = [];
  for (const id of ids) {
    if (released.has(id)) continue;
    released.add(id);
    out.push(id);
  }
  return out;
};

const DECK_TRANCHE: string[][] = [
  // Act 1: the two sentences the SCENE ACTUALLY SHOWS, and the ten default-order
  // sentences act 1 puts one per screen. Not the closed set: that is taught in
  // act 2, and a card released before its mission is a card the learner is asked
  // to rate before they have met it.
  once([...pairFor('ancien').map((r) => r.id), ...BEHIND_IDS]),
  // Act 2: the ten in front, released the act that puts one on each card, plus
  // the both-sides rows the table is built on.
  once([
    ...CLOSED_SET.map((a) => CLOSED_SET_IDS[a]),
    ...Object.values(BEHIND_HEADWORDS),
    ...CLOSED_SET.map((a) => IN_FRONT[a]),
    ...BOTH_SIDES.flatMap((b) => [b.front, b.behind]),
  ]),
  // Act 3: the meaning-changing pairs, both halves of each together. Releasing
  // one half is worse than releasing neither: a sentence whose meaning depends
  // on a contrast, with nothing to contrast it against, reads as arbitrary.
  once([
    ...THE_PAIRS.flatMap((p) => pairFor(p).map((r) => r.id)),
    ...Object.values(CHANGER_HEADWORDS),
    'fr.a1.adjectifs-essentiels.340',
  ]),
  // Act 4: the knock-on rules, each released by the act that shows it.
  once([...DE_IDS, ...VOWEL_FORMS.flatMap((v) => [v.consonant, v.vowel]), ...SPLIT_IDS, LIAISON_PAIR.silent]),
  // Act 5: nothing new is taught here, so nothing new is released. Act 5 is
  // production on what acts 1 to 4 handed over.
  [],
  // Act 6: nothing new. Act 6 tests, which is why this slice is empty rather
  // than padded.
  [],
];

/** Everything the lesson teaches is released exactly once, and nothing is
 *  released that the lesson does not teach. Checked HERE rather than only in the
 *  test, because a tranche that silently drops a card is a card that never
 *  reaches spaced repetition and nothing on a device would say so. */
{
  const taught = new Set(ITEM_IDS);
  const never = [...taught].filter((id) => !released.has(id));
  if (never.length) {
    throw new Error(`a1.16.l1: item(s) taught but released by no tranche: ${never.join(', ')}`);
  }
  const stray = [...released].filter((id) => !taught.has(id));
  if (stray.length) {
    throw new Error(`a1.16.l1: tranche(s) release item(s) the lesson does not teach: ${stray.join(', ')}`);
  }
}

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * Six triggers, six drills, six retests, six quiz rounds, and that is not a
 * coincidence. `drillForRound` walks a round's `targets` and fires the drill of
 * the FIRST one that has any, then stops. So a drill named only in second place
 * never runs. Each drill below is the first target of exactly one round, which
 * is what makes all six reachable; the batch, the merge and the test all assert
 * it rather than trusting the ordering to survive an edit.
 *
 * a1.05 shipped two unreachable drills for exactly this reason and a first draft
 * of a1.07 shipped a third. This lesson does not reopen it.
 *
 * Note that err-english-order and err-over-correct are the same rule failing in
 * opposite directions, and both get their own trigger and drill. A lesson that
 * merged them would only ever remediate one, and the second is the one that
 * arrives after the first has been fixed: a learner who has just been taught the
 * default starts putting grande behind the noun within a week.                */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-english-order',
    description: 'Puts every describing word in front of the noun, the way English does. The default error, and the one every English speaker starts with.',
    detectOn: ['s03-idea', 's04-default', 's07-sort', 's24-quiz/r1-the-default'],
    drill: 'drill-default',
    retest: 'retest-default',
  },
  {
    id: 'err-over-correct',
    description: 'Having learned the default, puts the ten behind the noun as well: writes une maison grande. Arrives about a week after the first error is fixed.',
    detectOn: ['s05-list', 's06-bothsides', 's08-decide', 's12-errors', 's24-quiz/r2-the-short-list'],
    drill: 'drill-shortlist',
    retest: 'retest-shortlist',
  },
  {
    id: 'err-wrong-meaning',
    description: 'Picks the wrong side of a meaning-changing pair and is understood as saying the other thing. Invisible to the learner, because both versions are correct French and nobody corrects either one.',
    detectOn: ['s01-scene', 's09-pairs', 's10-eight', 's11-meaning', 's24-quiz/r3-meaning'],
    drill: 'drill-pairs',
    retest: 'retest-pairs',
  },
  {
    id: 'err-des-before',
    description: 'Leaves des in place when one of the ten moves in front of a plural noun: writes des beaux tableaux.',
    detectOn: ['s13-de', 's16-reading', 's24-quiz/r4-des-becomes-de'],
    drill: 'drill-de',
    retest: 'retest-de',
  },
  {
    id: 'err-no-vowel-form',
    description: 'Uses the plain form in front of a vowel: writes un vieux ami, un beau arbre, un nouveau hôtel.',
    detectOn: ['s14-vowel', 's24-quiz/r5-vowel-and-split'],
    drill: 'drill-vowel',
    retest: 'retest-vowel',
  },
  {
    id: 'err-both-in-front',
    description: 'With two describing words, stacks both in front the way English does: writes une petite rouge robe.',
    detectOn: ['s15-split', 's21-scenario', 's24-quiz/r6-put-it-together'],
    drill: 'drill-two',
    retest: 'retest-two',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-default',
    title: 'The thing, then the description',
    format: 'flashcard',
    coach: 'The English is on the left and it is in the English order. Say the French out loud with the noun first, before you turn the card.',
    pairs: [
      ['a quiet neighbourhood', 'un quartier calme'],
      ['an easy question', 'une question facile'],
      ['a black coffee', 'un café noir'],
      ['a red car', 'une voiture rouge'],
      ['a delicious dish', 'un plat délicieux'],
      ['an easy book', 'un livre facile'],
    ] as [string, string][],
  },
  {
    id: 'retest-default',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is correct French for a difficult question?',
    opts: ['une question difficile', 'une difficile question', 'une question de difficile'],
    correct: 0,
    why: 'une question difficile. Difficile is not one of the ten, so it goes behind the noun like almost every other describing word in French.',
  },
  {
    id: 'drill-shortlist',
    title: 'On the list, or not',
    format: 'sort',
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card that
    // teaches these. Passing display strings here validates as broken ids.
    buckets: ['goes in front', 'goes behind'],
    items: [
      IN_FRONT.grand,
      IN_FRONT.petit,
      IN_FRONT.bon,
      'fr.a1.adjectifs-essentiels.103',
      'fr.a1.rp-societe.088',
      'fr.a1.cafe.088',
    ],
    coach: 'Look at the describing word, not at the noun. Is it one of the ten? If you cannot remember, put it behind, because that is right far more often than it is wrong.',
  },
  {
    id: 'retest-shortlist',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is correct French for a small town?',
    opts: ['une petite ville', 'une ville petite', 'une ville de petite'],
    correct: 0,
    why: 'une petite ville. Petit is one of the ten and goes in front, even though almost everything else goes behind.',
  },
  {
    id: 'drill-pairs',
    title: 'Which meaning did you want?',
    format: 'sort',
    buckets: ['about importance, or former, or yours, or unlucky', 'about height, or age, or clean, or money'],
    items: [
      ...THE_PAIRS.flatMap((p) => pairFor(p).map((r) => r.id)),
    ],
    coach: 'Read the English on each card before you place it. The French words are the same on both sides of every pair, so the only thing telling you where it goes is what it means.',
  },
  {
    id: 'retest-pairs',
    title: 'One more time',
    format: 'mcq',
    q: 'You want to say your friend is tall. Which do you say?',
    opts: ["C'est un homme grand.", "C'est un grand homme.", "C'est un homme de grand."],
    correct: 0,
    why: 'C\'est un homme grand. Behind the noun, grand is about height. In front it means great or important.',
  },
  {
    id: 'drill-de',
    title: 'des or de',
    format: 'sort',
    buckets: ['de, because one of the ten is in front', 'des, because nothing moved in front'],
    items: [
      DE_IDS[0],
      DE_IDS[1],
      DE_IDS[5],
      'fr.a1.deplacements.224',
      'fr.a1.couleurs.163',
      'fr.a1.adjectifs-essentiels.103',
    ],
    coach: 'Find the noun, then look at what is immediately in front of it. If one of the ten got there first, des shortens to de. If nothing did, des stays as it is.',
  },
  {
    id: 'retest-de',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is correct French for good results?',
    opts: ['de bons résultats', 'des bons résultats', 'de les bons résultats'],
    correct: 0,
    why: 'de bons résultats. Bon is one of the ten and it is in front of a plural noun, so des shortens to de.',
  },
  {
    id: 'drill-vowel',
    title: 'What is behind the word',
    format: 'flashcard',
    coach: 'Look at the first sound of the noun, not the first letter. If it is a vowel sound, the describing word in front of it changes shape.',
    pairs: [
      ['a beautiful garden', 'un beau jardin'],
      ['a beautiful tree', 'un bel arbre'],
      ['an old castle', 'un vieux château'],
      ['an old building', 'un vieil immeuble'],
      ['a new bike', 'un nouveau vélo'],
      ['a new hotel', 'un nouvel hôtel'],
    ] as [string, string][],
  },
  {
    id: 'retest-vowel',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is correct French for an old friend?',
    opts: ['un vieil ami', 'un vieux ami', 'un ami vieil'],
    correct: 0,
    why: 'un vieil ami. Ami starts with a vowel sound, so vieux takes its special in-front shape. Say the other one out loud and you will hear why the form exists.',
  },
  {
    id: 'drill-two',
    title: 'One on each side',
    format: 'sort',
    buckets: ['this one goes in front', 'this one goes behind'],
    items: [
      SPLIT_IDS[0],
      SPLIT_IDS[1],
      SPLIT_IDS[2],
      IN_FRONT.joli,
      'fr.a1.cafe.088',
      'fr.a1.rp-societe.088',
    ],
    coach: 'Take the two describing words one at a time. Each one has its own side and neither one cares what the other is doing. The noun ends up in the middle.',
  },
  {
    id: 'retest-two',
    title: 'One more time',
    format: 'mcq',
    q: 'Which is correct French for a small white dog?',
    opts: ['un petit chien blanc', 'un petit blanc chien', 'un chien petit blanc'],
    correct: 0,
    why: 'un petit chien blanc. Petit is one of the ten so it goes in front, blanc is not so it goes behind, and the dog sits between them.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * Two, and the brief asks for exactly this: "A reference sheet with the closed
 * set, the default, and the meaning-changing pairs. It is what a learner returns
 * to during a1.15 and a1.17 and through all of A2. Wire the sheetId early."
 *
 * Split into two rather than one, because they answer two different questions
 * and a learner mid-sentence is asking only one of them. `sheet.a1.16.sides` is
 * "which side does this go", which is the question that comes up weekly.
 * `sheet.a1.16.pairs` is "what did I actually say", which comes up rarely and
 * matters more when it does.
 *
 * Layer 'deep' exempts these from the core density caps, which is the point: a
 * sheet is allowed to be dense, and a `table` section is only legal here.      */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.16.sides',
    title: 'Which side does it go',
    layer: 'deep',
    contains: ['The ten that go in front', 'The default, and what it covers', 'des becoming de, and the vowel forms'],
    sections: [
      {
        type: 'table',
        id: 'sheet-sides-table',
        title: 'The ten, each in a phrase',
        layer: 'deep',
        cols: ['word', 'sounds like', 'in a phrase'],
        rows: CLOSED_SET.map((a) => [a, sub(a), frOf(IN_FRONT[a])] as [string, string, string]),
      },
      {
        type: 'cheatSheet',
        id: 'sheet-sides-rules',
        title: 'The rules on one screen',
        layer: 'deep',
        rows: [
          { k: REFRAME, v: 'The group in front is ten words and closed. The group behind is every other describing word in the language, including all the ones you have not met.', say: frOf('fr.a1.rp-societe.088') },
          { k: 'the default', v: 'The noun first, then the word describing it: un quartier calme, une question facile, un café noir. English does the opposite on every phrase.', say: frOf('fr.a1.adjectifs-essentiels.103') },
          { k: 'the ten', v: `${CLOSED_SET.join(', ')}. They are the words you reach for most, which is why the exception feels bigger than it is.`, say: CLOSED_SET.join(', ') },
          { k: 'des becomes de', v: 'Once one of the ten is in front of a plural noun: de beaux tableaux, de bonnes vacances, de vieux amis. The adjective keeps its own plural ending.', say: frOf(DE_IDS[0]) },
          { k: 'bel, vieil, nouvel', v: 'In front of a vowel sound: un bel arbre, un vieil immeuble, un nouvel hôtel. These shapes can only ever occur in front of the noun.', say: 'un bel arbre, un vieil immeuble, un nouvel hôtel' },
          { k: 'two at once', v: 'One from each group, and the noun in between: une petite robe rouge, un petit chien blanc. No new rule, just the two you already have.', say: frOf(SPLIT_IDS[1]) },
        ],
      },
    ],
  },
  {
    id: 'sheet.a1.16.pairs',
    title: 'The four that change meaning',
    layer: 'deep',
    contains: ['Both meanings of each', 'Why nobody corrects these', 'The sentences to copy'],
    sections: [
      {
        type: 'table',
        id: 'sheet-pairs-table',
        title: 'In front, and behind',
        layer: 'deep',
        cols: ['word', 'in front', 'behind'],
        rows: THE_PAIRS.map((p) => {
          const g = PAIR_GLOSS[p];
          const [before, after] = pairFor(p);
          return [g.adj, `${before.fr} (${g.before})`, `${after.fr} (${g.after})`] as [string, string, string];
        }),
      },
      {
        type: 'teach',
        id: 'sheet-pairs-why',
        title: 'Why this one is invisible',
        layer: 'deep',
        body: 'Every other mistake in this lesson gets caught eventually, because the wrong version is not French and a listener stumbles over it. Une rouge voiture is not something a French speaker says, so somebody will eventually repeat it back to you the right way round and you will notice. These four are different, and it is worth understanding why rather than just memorising the list. Both versions are grammatical, both are ordinary, and both are things people say every day. When you say un ancien hôtel meaning an old building, nothing has gone wrong from the listener\'s side at all: they have received a well-formed sentence, understood it correctly, and are now holding a fact about the world that is not true. There is nothing for them to correct. The conversation carries on from the new footing and neither of you finds out. This is why the four are worth learning as four rather than trusting to exposure. Exposure fixes the errors that get corrected, and nobody corrects these. The four are grand, ancien, pauvre and propre, and the pattern across all of them is roughly the same: in front, the word is about something abstract or about the speaker\'s attitude, and behind, it is about a plain physical fact. A great man is a judgement; a tall man is a measurement. A former hotel is about the building\'s history; an old hotel is about the building. Your own room is about who it belongs to; a clean room is about the state of it. An unfortunate man is your sympathy; a man with no money is his bank balance. That is not a rule you can apply to a new word, because only four words do this, but it is a way of remembering which of the two you wanted once you know the word is one of the four.',
      },
    ],
  },
];

export const PLACEMENT_LESSON: Lesson = {
  id: 'a1.16.l1',
  unitId: 'a1.16',
  // The lesson's index WITHIN its unit, not its place in the track. Every lesson
  // in the seed is seq 1 because every unit ships exactly one so far, and the
  // `l1` in the id is this number.
  seq: 1,
  title: "La place de l'adjectif",
  level: 'a1',
  // EIGHTEEN, from unit.seq. missions.ts derives the eyebrow at render time as
  // `${level} · LEÇON ${unit.seq}`, and a1.16 sits at seq 18. The stored value is
  // a fallback and has to agree with what the renderer computes, or the two
  // disagree the moment something reads this field instead. a1.03 shipped
  // exactly that bug (commit 56c79a7).
  tag: 'A1 · LEÇON 18',
  intro:
    'French puts the describing word after the thing it describes, and English puts it before, on every single phrase. Ten common words break the pattern, four of them change meaning depending on which side they sit, and this is the lesson where all of that becomes one decision you can make while you are still speaking.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The LESSON's own counter, not `seed.version`. seed.version is the OTA
  // snapshot number, derived by publish-content.ts as previous + 1, and a merge
  // must never hand-bump it.
  version: 1,

  grammarAssumed: [
    'Noun gender, and that un and une follow it, introduced in a1.03',
    'le, la, l\' and les, introduced in a1.04',
    'un, une and des, and that des becomes de under a negative, introduced in a1.11',
    'The plural of a noun, introduced in a1.03',
    'The full present of être, introduced in a1.06',
    'The full present of avoir, introduced in a1.07',
    'mon, ma and mes, introduced in a1.05',
    'Adjective agreement, and that a colour follows the noun, introduced in a1.13',
    'That a final consonant is usually silent and a following vowel can wake it, introduced in sons.06 and sons.10',
  ],
  grammarIntroduced: [
    'The position of the attributive adjective, introduced here for the first time as a system rather than as a fact about colour',
    'Post-nominal placement as the default for the open class of adjectives',
    'The closed pre-nominal set: petit, grand, gros, jeune, vieux, beau, joli, bon, mauvais, nouveau',
    'Adjectives whose meaning depends on position: grand, ancien, pauvre, propre',
    'The reduction of des to de before a pre-nominal adjective',
    'The pre-vocalic masculine forms bel, vieil and nouvel, taught here as position-bound rather than as a third form',
    'Two adjectives distributed either side of the noun',
    'The liaison of a pre-nominal grand before a vowel-initial noun',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'Adjective Placement',
    subFr: "La place de l'adjectif",
    introFr: "En français, le mot qui décrit se place après la chose. Dix mots font l'inverse.",
    minutes: 25,
    difficulty: 2,
    glyph: '↔️',
    screens: 218,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: PLACEMENT_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // ── The audio decisions that cannot be recovered later ─────────────────
    //
    // Written here AND pinned by a1-16-placement.test.ts, because a constraint
    // on how something is recorded becomes invisible the moment the clip is
    // delivered.
    //
    // Briefs only. Do NOT run pnpm audio:render: it spends real ElevenLabs
    // credits and ELEVENLABS_API_KEY is not set in ealch-admin/.env in any case.
    // CLIP_MANIFEST is empty by design, so every card falls back to device TTS
    // until the studio delivers, and a recordingId resolving to nothing is the
    // correct shipping state.
    //
    // All five of the brief's placement-specific notes are written in
    // explicitly, including the one that forbids a recording.
    recorded: [
      {
        id: 'rec-a1-16-pairs',
        desc:
          'THE SINGLE MOST IMPORTANT NOTE IN THIS LESSON. EVERY MEANING-CHANGING PAIR IS ONE TAKE, one voice, '
          + 'one pace, the front version immediately followed by the behind version with no gap and no reset: '
          + '« C\'est un grand homme. C\'est un homme grand. », then the ancien pair, then pauvre, then propre. '
          + 'The ONLY difference the learner may hear is where the word sits. Recorded apart these become two '
          + 'performances and the learner compares two readings instead of two meanings, and here the meaning is '
          + 'the entire point of the lesson. '
          + 'DO NOT ACT THE DIFFERENCE. There is a strong temptation to lean on the adjective in the front '
          + 'version to signal that it means something special. It does not sound special in French and a reader '
          + 'who marks it teaches the learner to listen for an emphasis that will never be there. Read all eight '
          + 'sentences as flatly as you would read a shopping list. '
          + 'ONE GENUINE SOUND DIFFERENCE EXISTS AND MUST NOT BE FLATTENED: in « un grand homme » the d at the '
          + 'end of grand is pronounced as a t, because homme starts with a vowel. In « un homme grand » it is '
          + 'silent. That difference is in the language and should be read normally rather than emphasised.',
        clipIds: [
          ...THE_PAIRS.flatMap((p) => pairFor(p).map((r) => r.fr)),
          'grand-homme-pair', 'ancien-hotel-pair', 'pauvre-homme-pair', 'propre-chambre-pair',
          "C'est mon ancien professeur.",
        ],
      },
      {
        id: 'rec-a1-16-liaison',
        desc:
          'THE LIAISON, AND THE TWO SENTENCES MUST BE ADJACENT IN ONE TAKE: « C\'est un grand homme. » '
          + 'immediately followed by « Mon frère est un grand garçon. ». Same word, same position, and the d at '
          + 'the end of grand is said as a t in the first and is silent in the second, because homme begins with '
          + 'a vowel and garçon does not. Recorded in separate sessions the learner hears two readings; recorded '
          + 'together they hear one consonant appear. '
          + 'Then « C\'est un homme grand. » in the same take, where grand has nothing behind it at all and the '
          + 'd stays silent. Three sentences, one voice, one breath group each, no pause longer than a beat. '
          + 'This is the ONLY ear question in the lesson. Placement itself is not one: both orders are '
          + 'pronounceable and neither sounds wrong, so an ear test of word order would test nothing.',
        clipIds: [
          frOf(LIAISON_PAIR.sounded), frOf(LIAISON_PAIR.silent), pairFor('grand')[1].fr,
          'grand-liaison-set',
        ],
      },
      {
        id: 'rec-a1-16-de',
        desc:
          'THE de FORM, AND THE ERROR MUST NOT BE RECORDED. Record « de beaux tableaux », « de belles fleurs », '
          + '« de bons résultats », « de bonnes vacances », « de vieux amis », « de nouveaux voisins », « de '
          + 'petits problèmes », « de petites chaussures », « de jolies fleurs » and « de vieilles photos », one '
          + 'take, one voice, straight through. '
          + 'DO NOT RECORD « des beaux tableaux » OR ANY OTHER des VERSION. The lesson shows the error in '
          + 'writing and must never have a clip of it, because a clip of an error becomes indistinguishable from '
          + 'a model the moment it leaves the card it was authored on. There is no card in this lesson that '
          + 'plays a wrong form and there must not be one. '
          + 'Read de as a short unstressed syllable running into the adjective rather than as a separate word, '
          + 'which is what it sounds like in speech and is the thing that makes the shortening audible at all.',
        clipIds: DE_IDS.map((id) => frOf(id)),
      },
      {
        id: 'rec-a1-16-vowel',
        desc:
          'bel, vieil AND nouvel, EACH BESIDE ITS CONSONANT PARTNER IN ONE TAKE, in this order: « C\'est un beau '
          + 'jardin. C\'est un bel arbre. », then « C\'est un vieux château. C\'est un vieil immeuble. », then '
          + '« Il a un nouveau vélo. C\'est un nouvel hôtel. » Each pair is one take. Without the partner these '
          + 'are three words to memorise; with it, the learner hears one word reshaping itself in front of a '
          + 'vowel, which is one thing rather than three. '
          + 'Run the adjective straight into the noun with no gap in the vowel versions, because the reason the '
          + 'form exists is that the two words are said as one unit. « un bel arbre » should sound like three '
          + 'syllables, not like two words with a join.',
        clipIds: VOWEL_FORMS.flatMap((v) => [frOf(v.consonant), frOf(v.vowel), `${v.word}-pair`]),
      },
      {
        id: 'rec-a1-16-front',
        desc:
          'THE TEN, AND NOT ONE OF THEM IS EVER RECORDED IN ISOLATION. A bare « grand » carries no placement '
          + 'information at all, and this lesson is entirely about position, so a clip of the word alone teaches '
          + 'nothing and implies the word can stand on its own. Every one of the ten is recorded INSIDE ITS '
          + 'PHRASE: « une grande ville », « un petit chien », « une grosse valise », « un jeune homme », « un '
          + 'vieux château », « une belle maison », « une jolie robe », « un bon restaurant », « une mauvaise '
          + 'idée », « un nouveau vélo ». One take, one voice, even pace, no pause between the adjective and its '
          + 'noun. '
          + 'The five written errors in s12-errors are NOT recorded at all, for the same reason as the des '
          + 'version above.',
        clipIds: CLOSED_SET.map((a) => frOf(IN_FRONT[a])),
      },
      {
        id: 'rec-a1-16-default',
        desc:
          'THE DEFAULT ORDER, ten sentences as one continuous take by one voice at one speed: « C\'est une '
          + 'question facile. », « Elle porte une jupe courte. », « Elle a une voix forte. », « Je lis un livre '
          + 'facile. », « Je prends un café noir. », « Nous habitons dans un quartier calme. », « Le chef prépare '
          + 'un plat délicieux. », « Mon frère conduit une voiture rouge. », « Le chat gris dort. », « Nous avons '
          + 'une maison bleue. » '
          + 'The noun comes first and the describing word after it in every one, which is the pattern being '
          + 'absorbed rather than taught, so keep the phrasing even and do not pause between the noun and the '
          + 'word describing it. Ten sentences recorded in ten sessions are ten performances, and any drift in '
          + 'pace teaches a difference between the recordings rather than a fact about French.',
        clipIds: BEHIND_IDS.map((id) => frOf(id)),
      },
      {
        id: 'rec-a1-16-scene',
        desc:
          'The opening scene, French bubbles only, in the voice of a man in his late twenties reading messages '
          + 'at an ordinary texting pace rather than a teaching pace. '
          + 'THE BEAT WHERE THÉO ASKS WHAT THE BUILDING IS NOW (« Ah bon ? Et c\'est quoi maintenant ? On peut '
          + 'dormir dedans ? ») MUST BE CURIOUS AND SLIGHTLY PRACTICAL, never puzzled and never corrective. He '
          + 'has understood the sentence perfectly and is asking a reasonable follow-up question about a '
          + 'building that used to be a hotel. Any note of confusion in that line turns the scene into the '
          + 'learner being caught out, and the entire teaching is that nobody catches this. He should sound like '
          + 'somebody who is still planning to book it.',
        clipIds: [
          'Alors, tu connais un endroit sympa pour deux nuits ?',
          "Ah bon ? Et c'est quoi maintenant ? On peut dormir dedans ?",
        ],
      },
    ],
    ambienceDefault: 'off',
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const PLACEMENT_ITEM_IDS = ITEM_IDS;
export const PLACEMENT_TRANCHES = DECK_TRANCHE;
export const PLACEMENT_ACTS = ACTS;
export const PLACEMENT_DRILLS = DRILLS;
export const PLACEMENT_TRIGGERS = ERROR_TRIGGERS;
export const PLACEMENT_SHEETS = SHEETS;
export const PLACEMENT_SCENE_BEATS = SCENE_BEATS;

/* ─── The handover to a1.14, a1.15 and a1.17 ───────────────────────────────
 *
 * WHAT a1.14 (Basic Adjectives, seq 17) MUST READ BEFORE IT FINISHES:
 *
 *   Its corpus and terms files are on disk and its lesson is not. Whoever
 *   finishes it should read this block first, because a1.16 landed in the middle
 *   of that build and made three decisions that touch it.
 *
 *   1. bel AND vieil. adjectifs-corpus.ts authors both as headwords at
 *      fr.sons.adjectifs-essentiels.312-.315 and teaches them as a THIRD FORM of
 *      beau and vieux, inside its four-form grid. a1.16 teaches the same three
 *      words from the other side: as shapes that can only occur IN FRONT of the
 *      noun, and therefore as a signal about which side you are on. The two are
 *      compatible and neither restates the other. a1.14 keeps the shape
 *      teaching; a1.16 keeps the position teaching. See s14-vowel.
 *
 *   2. nouvel. adjectifs-corpus.ts says in terms that it "does NOT teach nouvel,
 *      because six words is enough". Nobody owned it, so a1.16 teaches it beside
 *      bel and vieil, because leaving one of a set of three out is worse than
 *      teaching all three. If a1.14 changes its mind, it should reference this
 *      lesson rather than add a fourth card.
 *
 *   3. THE IDS. a1.16 authors NOTHING under fr.sons and its nine authored
 *      sentences run fr.a1.adjectifs-essentiels.332-.340. a1.14's four headwords
 *      at fr.sons.adjectifs-essentiels.312-.315 are untouched and still free in
 *      Postgres. NEXT FREE after this lesson: fr.a1 .341, fr.sons .312.
 *
 *   4. THE RESPELLING REPAIRS. a1.16 applies the grand and bon repairs that
 *      adjectifs-corpus.ts also claims, to the identical corrected values, so
 *      whichever batch runs second is a no-op. Both batches refuse to write if
 *      the stored value is neither the broken one nor the corrected one.
 *
 *   5. AGREEMENT AND VOCABULARY ARE STILL a1.13's AND a1.14's. This lesson
 *      teaches no agreement rule as new and builds no vocabulary act around the
 *      six adjectives: it uses them as sorting material only. The batch, the
 *      merge and the test all assert that against PRODUCTION SURFACES rather
 *      than every string, so a legitimate mention in a comment cannot fire them.
 *
 * WHAT a1.15 (Family Vocabulary) AND a1.17 (Possessive Adjectives) INHERIT:
 *
 *   Both declare `famille`, which IS in SEED_CUT.themes, so their rows will
 *   appear in the seed without an explicit carry. Neither has to do what this
 *   lesson and a1.13 both had to do.
 *
 *   Both will build noun phrases on every screen, and every one of them now has
 *   a settled side. sheet.a1.16.sides is written to be the thing a learner opens
 *   during those two lessons and through all of A2, which is why it carries the
 *   ten, the default and the knock-on rules on one screen rather than being
 *   split by act.
 *
 *   `mon`, `ma` and `mes` are used throughout this lesson and taught nowhere in
 *   it. a1.17 keeps possessives entirely.
 *
 * THE THEME BINDING, which the brief asks to be reported on:
 *
 *   a1.16 binds to `adjectifs-essentiels`, which is where a1.14's in-flight
 *   corpus also rebinds. That keeps the adjective family in one theme.
 *
 *   `adjectifs-essentiels` IS NOT IN SEED_CUT.themes, so the 65 rows this lesson
 *   names are carried into the seed BY ID by merge-placement-into-seed.ts and by
 *   nothing else. A future theme-based merge that appears to do nothing here is
 *   behaving correctly.
 *
 * WHAT IS DELIBERATELY NOT HERE:
 *
 *   Comparison (plus grand que) is A2 and is the most natural next sentence
 *   after any size adjective. Ordering two adjectives on the SAME side is beyond
 *   A1 and s15-split says so on its last card rather than leaving it open.
 *   Relative clauses and participles as post-nominal modifiers are well beyond
 *   A1 and are not mentioned. `cher` and `dernier` were cut from the
 *   meaning-changing pairs; the reasoning is in placement-corpus.ts.           */

/** Placement teaching is THIS lesson's subject, so unlike a1.13 it needs no
 *  guard against its own content. What it does need is a guard against teaching
 *  its NEIGHBOURS' subjects, which is the inverse. See AGREEMENT_TEACHING and
 *  VOCAB_TEACHING in placement-terms.ts.
 *
 *  Named so the batch, the merge and the test can all assert that a1.13 keeps
 *  its lesson and a1.14 keeps its. */
export const NEIGHBOUR_SUBJECTS = {
  a113: 'adjective agreement, which a1.13 introduced and this lesson only ever uses correctly',
  a114: 'the six basic adjectives as vocabulary, which this lesson uses as sorting material',
};
