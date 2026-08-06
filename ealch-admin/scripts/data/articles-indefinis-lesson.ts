// a1.11.l1 "Les articles indéfinis" — the mission journey.
//
// ── What this lesson is about, which is not what its title says ────────────
//
// The unit canDo has two clauses and they are not the same difficulty:
//
//   "Can pick un, une or des"                    <- gender and number
//   "and say when French wants the indefinite    <- the lesson
//    rather than the definite"
//
// a1.03 "Le genre des noms" is the declared prerequisite and it is a full v2
// lesson: 26 missions, ten predictive endings with their measured reliability,
// and le/la/l' taught as part of gender. A learner arriving here can already
// look at a noun and know its article. So "pick un or une" is not a new skill,
// it is the gender skill wearing a different article, and it gets ONE mission
// (s04-sort) framed openly as revision. Six missions re-deriving gender would
// be a1.03 rebuilt worse.
//
// What stays wrong for years is which article a sentence WANTS, and that is
// not a property of the noun at all. It is a property of what the person
// listening already knows. That is the reframe, that is acts 2 and 3, and it
// is why this lesson has a narrative in it.
//
// ── The structural fact that shapes everything ────────────────────────────
//
// A SINGLE SENTENCE CANNOT DEMONSTRATE FIRST MENTION. The rule is about the
// relationship between two mentions, so it needs two sentences, which means it
// needs a story. Nothing in the corpus does this: across 3,577 sentences, not
// one introduces a noun with un/une/des and then refers back to it with
// le/la/les. The 324 that hold both articles are almost all a definite subject
// with an indefinite object (« Le marchand vend des fruits »), which is a
// different sentence entirely.
//
// So the narrative is authored (see articles-indefinis-corpus.ts), it appears
// twice — once as the opening scene's failure and once as the reading passage
// where it works — and the quiz's whole second round refs back to it. A card
// that shows « un hôtel » and asks for the article has tested gender, not
// discourse, so no drill in this lesson asks that question cold: every one of
// them arrives after the passage has established what the choice means.
//
// ── The boundary with a1.29, which this lesson does not cross ─────────────
//
// `des` is both the indefinite plural and the partitive plural. a1.29 "Les
// articles partitifs" owns du, de la and de l', and declares a1.04 as its
// prerequisite, so it is coming. Nothing here teaches `des` as a quantity
// word, and `du` and `de la` appear in no card, deck, tranche or quiz answer.
// Two sentences put `des` in a buying frame because that is the sentence an
// English speaker drops the article from; that is a fact about English.
// a1-11-indefinis.test.ts asserts the boundary against production surfaces.
//
// ── The prerequisite inconsistency, reported rather than fixed ────────────
//
// The canDo asks for a contrast with the definite article, which is a1.04's
// material, but `prereqUnitIds` is ["a1.03"], not ["a1.04"]. A learner can
// reach this lesson without ever opening the definite-articles lesson.
//
// The saving grace is a1.03, which taught le, la and l' as part of gender. So
// every contrast below is built on what a1.03 established and none of it
// assumes a1.04 was read. The unit is NOT silently changed here; see the
// handover note.
//
// ── Layout decisions, each of which is a bug someone else already shipped ──
//
//   `commonErrors` carries `swipe: true, size: 'lg'`. Without `swipe`
//   MissionSection took a fallback that returned undefined and drew a BLANK
//   mission (sons.08 m22, a1.01 m5).
//
//   `reading` carries `questionsInModal: true` WITH questions. That is the
//   only path that reaches PassagePage, and so the only path that draws the
//   glossary underlines. a1.01 shipped five entries down the other path and
//   they rendered nowhere.
//
//   ONE `quiz` section. lessonPager.logic.ts appends exactly one quiz page,
//   resolved with `sections.find(s => s.type === 'quiz')`. A second is
//   unreachable questions.
//
//   No `autoplay` anywhere. It is declared in schema.ts and implemented in no
//   component. `audioFirst`, which ScenePlayer genuinely implements, is used
//   on the scene break instead.
//
//   The reading passage is ONE BLOCK with no line breaks. PassagePage splits
//   on `text.split(/(?<=[.!?»])\s+/)` and renders the pieces inline, so every
//   authored `\n` is silently discarded. The English narration between the
//   quotes does the work the line breaks were doing.

import type {
  ErrorTrigger, Lesson, LessonAct, LessonDrill, LessonSection, ReferenceSheet, SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { display as d } from './articles-indefinis-corpus.ts';
import { INDEFINIS_TERMS, REFRAME } from './articles-indefinis-terms.ts';

export { REFRAME };

/* ─── The corpus this lesson sequences ─────────────────────────────────────
 *
 * 37 items are reused untouched and 27 are authored (see the corpus file for
 * why each gap could not be filled from what exists). Grouped by the job the
 * ids do, so a section names a GROUP and the tranche slices read from the same
 * groups rather than restating a word list.                                  */

/** Six masculine nouns whose gender is unsurprising. Deliberately: gender is
 *  a1.03's lesson, and a noun whose article is a puzzle would turn this
 *  lesson's question back into that one. */
const MASC = [
  'fr.a1.objets.003', 'fr.a1.objets.009', 'fr.a1.objets.008',
  'fr.a1.cafe.009', 'fr.a1.objets.006', 'fr.a1.cafe.011',
];
/** Six feminine nouns, on the same principle. */
const FEM = [
  'fr.a1.objets.005', 'fr.a1.objets.026', 'fr.a1.objets.030',
  'fr.a1.objets.033', 'fr.a1.cuisine.003', 'fr.a1.cafe.012',
];
/** The plurals. `des amis` is in here on purpose: every other plural sits near
 *  food, which is where `des` reads as a quantity, and a1.29 owns that. */
const PLURAL = [
  'fr.a1.cuisine.259', 'fr.a1.cafe.146', 'fr.a1.objets.215',
  'fr.a1.famille.219', 'fr.a1.objets.013', 'fr.a1.objets.086',
];
/** The two-mention narrative: the authored pairs plus the three corpus
 *  sentences that already show an indefinite arriving in a definite frame. */
const MENTION = [
  'fr.a1.deplacements.302', 'fr.a1.deplacements.303',
  'fr.a1.deplacements.304', 'fr.a1.deplacements.305',
  'fr.a1.deplacements.306', 'fr.a1.deplacements.307',
  'fr.a1.cafe.147', 'fr.a1.cafe.148',
  'fr.a1.objets.216', 'fr.a1.famille.220',
  'fr.a1.maison.005', 'fr.a1.objets.162', 'fr.a1.objets.171',
];
/** The four places an English speaker's instinct is wrong. */
const GENERAL = ['fr.a1.cafe.149', 'fr.a1.marche.200'];
const JOBS = [
  'fr.a1.metiers.244', 'fr.a1.metiers.245', 'fr.a1.metiers.246',
  'fr.a1.metiers.247', 'fr.a1.metiers.248',
  'fr.a1.metiers.014', 'fr.a1.metiers.122',
];
const NEGATION = [
  'fr.a1.objets.211', 'fr.a1.objets.212', 'fr.a1.objets.213', 'fr.a1.objets.214',
  'fr.a1.cuisine.260', 'fr.a1.cuisine.261', 'fr.a1.cafe.150',
  'fr.a1.cuisine.214', 'fr.a1.objets.153',
];
/** The vocabulary hub's extra nouns: met here, not taught by a rule. */
const BANK = [
  'fr.a1.objets.002', 'fr.a1.objets.027', 'fr.a1.objets.012',
  'fr.a1.objets.011', 'fr.a1.objets.007', 'fr.a1.cafe.010',
  'fr.a1.cafe.017', 'fr.a1.cafe.023', 'fr.a1.cuisine.021',
  'fr.a1.cuisine.022', 'fr.a1.cuisine.025', 'fr.a1.objets.020',
  'fr.a1.metiers.001', 'fr.a1.metiers.003', 'fr.a1.metiers.007',
];

/** Spoken practice draws ONLY from items carrying `voiceflash`, because that is
 *  the drill the mic-scored deck runs. An item without it renders as a card the
 *  learner cannot be scored on, which looks like a broken mission rather than a
 *  missing tag. Verified against POSTGRES, not the seed, on 2026-08-05: the two
 *  drift, and an id that exists only in the seed renders as an empty card.
 *  a1-11-indefinis.test.ts re-asserts it against the seed on every run. */
const SPEAK_IDS = [
  'fr.a1.objets.003', 'fr.a1.objets.009', 'fr.a1.cafe.009',
  'fr.a1.objets.005', 'fr.a1.objets.026', 'fr.a1.cuisine.003', 'fr.a1.cafe.012',
  'fr.a1.deplacements.302', 'fr.a1.deplacements.303', 'fr.a1.metiers.248',
  'fr.a1.cuisine.259', 'fr.a1.cafe.146', 'fr.a1.objets.215', 'fr.a1.famille.219',
];

/** The dictée set, and the six were chosen by MEASUREMENT rather than taste.
 *
 *  dicteeMode() switches from letter tiles to WORD tiles above 16 letters, and
 *  word mode is what this lesson wants: the bank's decoy pool is drawn from
 *  ['le','la','les','un','une','de'], so a word-mode dictée on these sentences
 *  offers the learner the wrong article next to the right one and asks them to
 *  place it. Every id below clears the threshold; the ones that did not
 *  (« Je suis professeur. » at 16, « J'achète des pommes. » at 16) would have
 *  become spelling exercises, which is a different lesson. */
const DICTATION_IDS = [
  'fr.a1.deplacements.306', 'fr.a1.deplacements.307',
  'fr.a1.cafe.147', 'fr.a1.objets.212',
  'fr.a1.objets.216', 'fr.a1.cuisine.261',
];

const ITEM_IDS = [
  ...new Set([...MASC, ...FEM, ...PLURAL, ...MENTION, ...GENERAL, ...JOBS, ...NEGATION, ...BANK]),
];

/* ─── Mission 1 · Scene ────────────────────────────────────────────────────
 *
 * The A1 register of stakes for THIS unit is not being misunderstood, and it
 * is not the social misstep a1.01 opens on. It is asking a question that
 * cannot be answered. You say « où est l'hôtel » to someone who has no idea
 * which hotel you mean, and the conversation stops on « lequel ? » while you
 * work out that you never meant a particular one.
 *
 * Every word in the failing line is correct French. That is the point, and it
 * is the same shape a1.01 uses: the learner is not wrong about vocabulary,
 * they are wrong about what the other person knows.
 *
 * Beats are extracted to a named const rather than inlined, because the scene
 * is the section whose copy gets rewritten most and a const keeps the diff
 * readable. Every beat carries its own `size` (prose at md, the choice and the
 * break at lg) and its own `audio`. The SECTION does not declare `size`:
 * ownsLayout() ignores it, but density.logic.ts reads xl as a 12-word cap on
 * every string, and prose cannot live there. That cost a session on a1.01.  */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Seven in the evening in Annecy. Your train was late and you have nowhere to sleep.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'A woman is closing up a flower stall in the square. You know every word you need.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'You have one sentence. Which one?',
    options: [
      {
        fr: "Excusez-moi, où est l'hôtel ?",
        en: 'asking where the hotel is',
        outcome: 'breaks',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
      {
        fr: 'Excusez-moi, je cherche un hôtel.',
        en: 'saying you are looking for a hotel',
        outcome: 'works',
        audio: { mode: 'tts', lang: 'fr-FR' },
      },
    ],
    followUp: {
      works: 'Yes. You do not have a hotel in mind, and un is how you say so.',
      breaks: 'Every word is correct. Watch what it does anyway.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: "Excusez-moi, où est l'hôtel ?",
    en: '(where is the hotel)',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'The woman',
    fr: 'Lequel ?',
    en: 'Which one?',
    stage: 'She waits for a name you do not have.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'You asked for one she knew',
    // 33 words. The eight shipped scene breaks run 24 to 40 here.
    body: 'The article carries information English hides in tone. Le says the two of you are already thinking of the same hotel. She was not, so the question had no answer and she had to stop and ask.',
    wrong: {
      fr: "Où est l'hôtel ?",
      ipa: '/u ɛ lo.tɛl/',
      respell: d("l'hôtel").respell,
      en: 'the hotel, the one we both know',
    },
    right: {
      fr: 'Je cherche un hôtel.',
      ipa: '/ʒə ʃɛʁʃ œ̃ no.tɛl/',
      respell: d('un hôtel').respell,
      en: 'a hotel, any hotel, I have none in mind',
    },
    coach: 'Same noun, same street, one syllable different. One of them is a question she can answer.',
    // Audio-first: the ear answers before the eye can. ScenePlayer holds the
    // text back and plays the right-hand line on entry.
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], audioFirst: true },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    speaker: 'Second try',
    fr: 'Je cherche un hôtel.',
    en: 'I am looking for a hotel.',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The woman',
    fr: "Il y a un hôtel derrière la gare.",
    en: 'There is a hotel behind the station.',
    stage: 'She is already pointing.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'The woman',
    fr: "L'hôtel est petit, mais il est bon.",
    en: 'The hotel is small, but it is good.',
    stage: 'Now that she has named it, it is the hotel for both of you.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'She said un, then le, about the same building, four seconds apart.',
  },
];

const SECTIONS: LessonSection[] = [
  /* ── Act 1: the three you choose between ──────────────────────────────── */

  {
    type: 'scene',
    id: 's01-scene',
    title: 'The Hotel Nobody Knew',
    frSub: "L'hôtel que personne ne connaissait",
    render: 'screens',
    layer: 'core',
    terms: ['introducing', 'known'],
    say: {
      text: 'Watch this go wrong on a word you already know. Nothing here is mispronounced and nothing here is rude.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'A square outside the station',
      city: 'Annecy',
      time: 'Tuesday, seven in the evening',
      // No image. The only travel asset in the bundle is a Paris street and
      // this scene turns on being somewhere small enough that "the hotel"
      // sounds plausible. Restore when an asset exists that matches.
    },
    beats: SCENE_BEATS,
    // Referenced, never retyped, so this appearance cannot drift out of
    // agreement with the seven others the density validator counts.
    closing: {
      size: 'md',
      text: `${REFRAME} She used both, about one building, inside one exchange.`,
    },
  },

  {
    type: 'goals',
    id: 's02-goals',
    title: 'What You Will Be Able To Do',
    frSub: 'Ce que vous saurez faire',
    layer: 'core',
    say: `${REFRAME} By the end of this lesson you will know which of the two a sentence is asking for, and the four places your English will tell you the wrong one.`,
    goals: [
      { t: 'Introduce something', s: 'Bring a thing into a conversation the way French brings it in, so the other person can follow you.' },
      { t: 'Hand it over', s: 'Switch to le, la or les the moment they know which one you mean, and hear when somebody does it to you.' },
      { t: 'Say des out loud', s: 'Put a word where your English puts nothing, which is the one form you have no instinct for.' },
      { t: 'Beat four English habits', s: 'Generalisations, jobs, negatives and plurals: the four places the transfer from English quietly fails.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-forms',
    title: 'Three Words, One Job',
    frSub: 'Un, une, des',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['introducing'],
    say: 'Three forms, one job between them. The job is the interesting part, so meet the forms quickly.',
    cards: [
      {
        label: 'The job',
        head: 'What all three do',
        fr: 'un · une · des',
        sub: 'a · a · some, in the sense English leaves out',
        body: `${REFRAME} Every card after this one is that sentence in a different situation.`,
      },
      {
        label: 'Singular',
        head: 'un and une',
        fr: 'un livre · une voiture',
        sub: `${d('un livre').respell} · ${d('une voiture').respell}`,
        body: 'Which of the two is decided by the noun, and you settled that in the gender lesson. Nothing new is being asked of you here.',
      },
      {
        label: 'Plural',
        head: 'des',
        fr: 'des livres',
        sub: d('des livres').respell,
        body: 'The plural of both. English has no word here at all, which is why this is the form that goes missing.',
      },
    ],
  },

  {
    type: 'groupDrill',
    id: 's04-sort',
    title: 'Un or Une?',
    frSub: 'Révision du genre',
    layer: 'core',
    // xl, and legitimate here where it would be fatal in a prose lesson: the
    // display unit is an article and a two-syllable noun, and xl caps every
    // string in the section at 12 words. One noun per screen.
    size: 'xl',
    terms: ['introducing'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65], recordingId: 'rec-a1-11-un-une' },
    // ONE mission on gender, and it says so. a1.03 spends 26 missions here.
    say: 'Revision, not teaching. Twelve nouns you have already met, and the only question is which article.',
    groups: [
      {
        label: 'Read the noun, say the article',
        items: [
          ...MASC.map((id) => id),
          ...FEM.map((id) => id),
        ].map((id, i) => {
          const fr = [
            'un livre', 'un stylo', 'un sac', 'un café', 'un téléphone', 'un croissant',
            'une voiture', 'une table', 'une porte', 'une clé', 'une pomme', 'une baguette',
          ][i];
          const w = d(fr);
          return { fr: w.fr, en: w.en, respell: w.respell, itemId: id };
        }),
      },
    ],
  },

  {
    type: 'cardDeck',
    id: 's05-des',
    title: 'The One English Throws Out',
    frSub: 'Des',
    hint: 'Swipe through the four cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['introducing'],
    say: 'This is the form with no English twin, and the one you will drop for months if nobody points at it.',
    cards: [
      {
        label: 'The gap',
        head: 'English has nothing here',
        fr: 'des pommes',
        sub: `${d('des pommes').respell} · apples`,
        body: 'Read the English again. There is no word in front of apples, so there is nothing in your own language reminding you that French wants one.',
      },
      {
        label: 'In a sentence',
        head: 'It is not optional',
        fr: "J'achète des pommes.",
        sub: 'I am buying apples.',
        body: 'Leave des out and the sentence is wrong, not casual. French does not have a bare plural noun the way English does.',
      },
      {
        label: 'Not only food',
        head: 'des amis',
        fr: "J'ai des amis à Lyon.",
        sub: 'I have friends in Lyon.',
        body: 'Friends are not a quantity of anything, which is what makes this the clearest example. Des is simply the plural of un and une.',
      },
      {
        label: 'Already yours',
        head: 'Three you know',
        fr: 'des lunettes · des gants',
        sub: `${d('des lunettes').respell} · ${d('des gants').respell}`,
        body: 'You have met these as vocabulary and never asked why they came with a word attached. This is why.',
      },
    ],
  },

  /* ── Act 2: first mention, second mention ─────────────────────────────── */

  {
    type: 'tapTable',
    id: 's06-pairs',
    title: 'Same Noun, Two Articles',
    frSub: 'Le même nom, deux articles',
    layer: 'core',
    terms: ['introducing', 'known', 'secondMention'],
    sheetId: 'sheet.a1.11.contrast',
    say: `${REFRAME} Tap any row to hear both halves back to back.`,
    cols: ['New to them', 'Already known', 'Meaning'],
    rows: [
      {
        cells: ['un hôtel', "l'hôtel", 'hotel'],
        say: "Un hôtel. L'hôtel.",
        detail: {
          title: 'un hôtel · l’hôtel',
          body: 'Say un hôtel to someone who has none in mind. Say l’hôtel once one of you has named it. Ask for l’hôtel too early and you get asked which one.',
          say: "Je cherche un hôtel. L'hôtel est complet.",
        },
      },
      {
        cells: ['une chambre', 'la chambre', 'room'],
        say: 'Une chambre. La chambre.',
        detail: {
          title: 'une chambre · la chambre',
          body: 'Il reste une chambre, and one line later, je prends la chambre. Nothing about the room changed. What changed is that it is now in the conversation.',
          say: 'Il reste une chambre. Je prends la chambre.',
        },
      },
      {
        cells: ['des croissants', 'les croissants', 'croissants'],
        say: 'Des croissants. Les croissants.',
        detail: {
          title: 'des croissants · les croissants',
          body: 'Il y a des croissants puts them on the table. Les croissants sont pour moi asks about the ones now sitting there. Des would be asking about croissants everywhere.',
          say: 'Il y a des croissants. Les croissants sont pour moi ?',
        },
      },
      {
        cells: ['un livre', 'le livre', 'book'],
        say: 'Un livre. Le livre.',
        detail: {
          title: 'un livre · le livre',
          body: 'Je cherche un livre is a request anybody can help with. Je cherche le livre is a request that needs you to already know which book.',
          say: 'Un livre. Le livre.',
        },
      },
      {
        cells: ['une voiture', 'la voiture', 'car'],
        say: 'Une voiture. La voiture.',
        detail: {
          title: 'une voiture · la voiture',
          body: "J'ai une voiture introduces it. La voiture est dehors assumes you have already been told about it. Both are ordinary; only one of them can go first.",
          say: "J'ai une voiture. La voiture est dehors.",
        },
      },
    ],
  },

  {
    type: 'reading',
    id: 's07-reading',
    title: 'A Room for One Night',
    frSub: 'Une chambre pour une nuit',
    layer: 'core',
    terms: ['secondMention', 'introducing', 'known'],
    // REQUIRED for the glossary to exist at all. MissionSection routes a
    // reading section to ReadingMission (and so to PassagePage, which draws the
    // underlines and the tap-for-translation sheet) only when this flag is set
    // WITH questions. Without it the section takes the fallback path and
    // MissionRich contains no reference to `glossary`. a1.01 shipped five
    // entries that way and they rendered nowhere.
    questionsInModal: true,
    say: `${REFRAME} Three nouns arrive in this passage and every one of them comes back. Watch the article change.`,
    // Paul's A1 rule, set on a1.01's passage: anything not inside « » is in
    // English. It matters more here than anywhere, because this passage's
    // whole job is to make two mentions of one noun visible, and a learner
    // spending effort on the surrounding prose will miss the pair.
    //
    // ONE BLOCK, NO LINE BREAKS. See the header.
    text:
      'It is seven in the evening in Annecy and Marc has nowhere to sleep. ' +
      'He stops a woman closing up a stall in the square. ' +
      '« Pardon madame. Je cherche un hôtel. » ' +
      'She points past the station without looking up. ' +
      "« Il y a un hôtel derrière la gare. » " +
      'Ten minutes later he is standing at the desk of that same hotel. ' +
      "« Bonsoir. L'hôtel est complet ? » " +
      'The woman behind the desk turns the book round so he can see it. ' +
      '« Non. Il reste une chambre. » ' +
      'He does not ask to see it first. ' +
      '« Je prends la chambre. » ' +
      'The next morning she puts a plate down in front of him. ' +
      '« Il y a des croissants. » ' +
      'He has not paid for breakfast and he says so with his eyebrows. ' +
      '« Les croissants sont pour moi ? » ' +
      'She is already walking away. ' +
      '« Bien sûr. »',
    // Every entry is matched by gloss.logic.ts, which folds punctuation and
    // case on BOTH sides and allows a phrase of up to four words. A phrase
    // entry wins over a bare word inside it, so "un hôtel" underlines as one
    // span. "l'hôtel" is entered with its article because that is how the
    // passage carries it, and deElide() makes the two forms meet regardless.
    glossary: [
      { word: 'un hôtel', en: 'a hotel', note: 'Any hotel. Neither of them has one in mind, and that is what un says.' },
      { word: "l'hôtel", en: 'the hotel', note: 'The one behind the station. She named it, so now there is only one.' },
      { word: 'une chambre', en: 'a room', note: 'It arrives here. Nobody has mentioned a room before this line.' },
      { word: 'la chambre', en: 'the room', note: 'One line later. It is the room now, because they have both heard about it.' },
      { word: 'des croissants', en: 'croissants', note: 'English has nothing in front of croissants. French has des, every time.' },
      { word: 'les croissants', en: 'the croissants', note: 'The ones on the plate between them. Des would ask about croissants in general.' },
      { word: 'complet', en: 'full, fully booked', note: 'What a hotel is when there is nothing left. The opposite of il reste une chambre.' },
    ],
    questions: [
      { q: 'Marc says un hôtel and so does the woman. Why does neither of them say l’hôtel?', a: 'Neither has a particular hotel in mind, and un is how French says that.' },
      { q: 'What changes between « Il reste une chambre » and « Je prends la chambre »?', a: 'Nothing about the room. It is now in the conversation, so they both know which one.' },
      { q: 'Why « Les croissants sont pour moi ? » rather than « Des croissants »?', a: 'The croissants are on the plate in front of him. Des would be asking about croissants in general.' },
    ],
  },

  {
    type: 'listening',
    id: 's08-ear',
    title: 'Two Words, One Vowel',
    frSub: "À l'oreille",
    layer: 'core',
    questionsInModal: true,
    terms: ['introducing', 'known'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId: 'rec-a1-11-pairs' },
    say: 'Un against une, and des against les. Both pairs are one vowel apart and both carry the whole meaning.',
    lines: [
      { fr: 'Je cherche un hôtel.', en: 'I am looking for a hotel.' },
      { fr: "L'hôtel est complet.", en: 'The hotel is full.' },
      { fr: 'Il y a des croissants.', en: 'There are croissants.' },
      { fr: 'Les croissants sont pour moi ?', en: 'Are the croissants for me?' },
    ],
    questions: [
      {
        q: 'In the first line, has the speaker got a particular hotel in mind?',
        opts: ['Yes, one they have stayed in', 'No, any hotel will do', 'Yes, the one by the station', 'They are asking a question'],
        correct: 1,
        why: 'Un is the whole answer. It says the listener has no way of knowing which one, and does not need to.',
      },
      {
        q: 'The second line uses l’. What must have happened before it?',
        opts: ['Nothing, l’ can open a conversation', 'A hotel was already named', 'The speaker is being polite', 'The hotel is feminine'],
        correct: 1,
        why: 'Le and la point at something both people already have. Something has to put it there first.',
      },
      {
        q: 'Which pair is the harder one to tell apart at normal speed?',
        opts: ['un and une', 'des and les', 'both, and for the same reason', 'neither, they sound nothing alike'],
        correct: 2,
        why: 'Each pair differs by one vowel and nothing else, so the ear has no consonant to hold on to. Slow the audio down and both separate cleanly.',
      },
    ],
  },

  {
    type: 'useCases',
    id: 's09-cases',
    title: 'Six Moments This Week',
    frSub: 'Dans la vraie vie',
    layer: 'core',
    terms: ['introducing', 'known'],
    say: 'Six real moments. In every one of them the article is doing the work, not the noun.',
    cases: [
      { situation: 'Asking for somewhere to stay, in a town you do not know', fr: 'Je cherche un hôtel.', en: 'I am looking for a hotel.' },
      { situation: 'Asking about the hotel they have just recommended', fr: "L'hôtel est loin ?", en: 'Is the hotel far?' },
      { situation: 'Telling someone what you saw on the table', fr: 'Il y a des livres sur la table.', en: 'There are books on the table.' },
      { situation: 'Ordering at a counter, for the first time', fr: 'Un café, s’il vous plaît.', en: 'A coffee, please.' },
      { situation: 'Saying what you like, in general, forever', fr: "J'aime le café.", en: 'I like coffee.' },
      { situation: 'Saying what you do for a living', fr: 'Je suis professeur.', en: 'I am a teacher.' },
    ],
  },

  {
    type: 'groupDrill',
    id: 's10-check',
    title: 'Which One Goes Here?',
    frSub: 'Contrôle',
    layer: 'core',
    terms: ['secondMention'],
    // A control page: one group, a question, no words. The stem carries TWO
    // clauses on purpose. A bare "un or le?" has no answer, because the choice
    // is about what the listener knows and one clause cannot establish that.
    say: 'One question. Read both halves before you answer, because the first half is what decides it.',
    groups: [
      {
        label: 'One question, then on',
        items: [],
        check: {
          q: 'You have just said « Il y a une chambre libre. » Now you want to take it. Which?',
          opts: ['Je prends une chambre.', 'Je prends la chambre.', 'Je prends des chambres.', 'Je prends chambre.'],
          correct: 1,
          why: 'You put the room into the conversation one sentence ago, so you are both thinking of the same one. Une would introduce a second, different room.',
        },
      },
    ],
  },

  /* ── Act 3: where English misleads you ────────────────────────────────── */

  {
    type: 'cardDeck',
    id: 's11-general',
    title: 'Liking the Whole Thing',
    frSub: 'Le café, en général',
    hint: 'Swipe through the three cards.',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['wholeThing', 'known'],
    say: 'The single most common mistake an English speaker makes with French articles, and it is not the one you would guess.',
    cards: [
      {
        label: 'The trap',
        head: 'I like coffee',
        fr: "J'aime le café.",
        sub: `${d('le café').respell} · I like coffee`,
        body: 'Not "I like the coffee". English puts nothing in front of coffee and French names the whole of it, so the article that looks wrong is the right one.',
      },
      {
        label: 'Why le',
        head: 'The ultimate known thing',
        fr: 'le café · les pommes',
        sub: `${d('le café').respell} · ${d('les pommes').respell}`,
        body: `${REFRAME} A whole category is the most known thing there is, so it takes le.`,
      },
      {
        label: 'The test',
        head: 'Try adding "in general"',
        fr: "J'aime le café.",
        sub: 'I like coffee in general.',
        body: 'If the English still makes sense with "in general" on the end, French wants le, la or les. If it does not, you probably want un.',
      },
    ],
  },

  {
    type: 'examples',
    id: 's12-jobs',
    title: 'What Your Job Takes',
    frSub: 'Après être, rien',
    layer: 'core',
    terms: ['noArticle'],
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65] },
    say: 'English requires a word here and French forbids it, so this error is guaranteed and it is audible. Tap any line.',
    examples: [
      { fr: 'Je suis professeur.', en: 'I am a teacher.', note: 'Nothing in front of the job. Je suis un professeur is the sentence to unlearn.' },
      { fr: 'Elle est avocate.', en: 'She is a lawyer.', note: 'Same after il est and elle est. The gap is the grammar.' },
      { fr: 'Il est boulanger.', en: 'He is a baker.', note: 'And after tu es and vous êtes. Every form of être behaves the same way.' },
      { fr: 'Elle est médecin.', en: 'She is a doctor.', note: 'Médecin does not change for a woman. Only the article would have, and there is none.' },
      { fr: "C'est un professeur.", en: 'That is a teacher.', note: 'The one place it comes back. C’est points at a person; il est describes one.' },
    ],
  },

  {
    type: 'tapTable',
    id: 's13-negation',
    title: 'Say No and Watch',
    frSub: 'À la forme négative',
    layer: 'core',
    terms: ['deUnderNo', 'introducing'],
    sheetId: 'sheet.a1.11.contrast',
    say: 'Negate a sentence and un, une and des all turn into the same word. The definite article does not move at all.',
    cols: ['Yes', 'No', 'What moved'],
    rows: [
      {
        cells: ["J'ai une voiture.", "Je n'ai pas de voiture.", 'une became de'],
        say: "J'ai une voiture. Je n'ai pas de voiture.",
        detail: {
          title: 'une becomes de',
          body: 'Not pas une voiture, and not pas la voiture. Under a negative the indefinite collapses to de and the noun is left bare behind it.',
          say: "Je n'ai pas de voiture.",
        },
      },
      {
        cells: ["J'ai un stylo.", "Je n'ai pas de stylo.", 'un became de'],
        say: "J'ai un stylo. Je n'ai pas de stylo.",
        detail: {
          title: 'un becomes de',
          body: 'The same word, whatever the gender was. De does not agree with anything, which is one fewer thing to get right.',
          say: "Je n'ai pas de stylo.",
        },
      },
      {
        cells: ["J'achète des pommes.", "Je n'achète pas de pommes.", 'des became de'],
        say: "J'achète des pommes. Je n'achète pas de pommes.",
        detail: {
          title: 'des becomes de',
          body: 'All three indefinites go the same way. The plural noun stays plural; only the word in front of it changes.',
          say: "Je n'achète pas de pommes.",
        },
      },
      {
        cells: ["J'aime le café.", "Je n'aime pas le café.", 'nothing moved'],
        say: "J'aime le café. Je n'aime pas le café.",
        detail: {
          title: 'le does not move',
          body: 'This is the half that makes the rule usable. If the article survives the negative it was le, la or les. If it collapsed to de it was un, une or des.',
          say: "Je n'aime pas le café.",
        },
      },
      {
        cells: ['Elle a un portable.', "Elle n'a pas de portable.", 'un became de'],
        say: "Elle a un portable. Elle n'a pas de portable.",
        detail: {
          title: 'One more, from the corpus',
          body: 'You have met this sentence before as vocabulary. It is the same rule you have just watched three times.',
          say: "Elle n'a pas de portable.",
        },
      },
    ],
  },

  {
    type: 'commonErrors',
    id: 's14-traps',
    // `swipe` and `size` are not decoration. MissionSection renders
    // commonErrors as its own swipe deck ONLY when `swipe` is set; without it
    // the section falls through to a path that drew a BLANK screen on sons.08
    // m22 and a1.01 m5. Every v2 lesson that ships this section sets both.
    swipe: true,
    size: 'lg',
    title: 'Four Traps',
    frSub: 'Quatre pièges',
    layer: 'core',
    terms: ['wholeThing', 'noArticle', 'deUnderNo'],
    say: 'Four sentences an English speaker produces in their first month. One per screen.',
    errors: [
      {
        wrong: 'Saying « J’aime café » for "I like coffee".',
        right: 'Saying « J’aime le café » for "I like coffee".',
        why: 'English leaves the slot empty when you talk about a thing in general. French names the whole of it, and naming the whole of it takes le.',
      },
      {
        wrong: 'Saying « Je suis un professeur » for "I am a teacher".',
        right: 'Saying « Je suis professeur » for "I am a teacher".',
        why: 'After être a job goes in bare. English needs the article and French forbids it, so this is the one place a correct English instinct is always wrong.',
      },
      {
        wrong: 'Saying « Je n’ai pas une voiture » for "I do not have a car".',
        right: 'Saying « Je n’ai pas de voiture » for "I do not have a car".',
        why: 'Un, une and des all collapse to de under a negative. Le, la and les do not move, which is how you can tell afterwards which one you had used.',
      },
      {
        wrong: 'Saying « J’achète pommes » for "I am buying apples".',
        right: 'Saying « J’achète des pommes » for "I am buying apples".',
        why: 'Your English has nothing in front of apples, so nothing reminds you that French wants des. A bare plural noun is not a thing French has.',
      },
    ],
  },

  /* ── Act 4: banked, and used ──────────────────────────────────────────── */

  {
    type: 'vocabThemes',
    id: 's15-words',
    title: 'The Words Themselves',
    frSub: 'Le vocabulaire',
    layer: 'core',
    terms: ['introducing'],
    sheetId: 'sheet.a1.11.contrast',
    say: 'Three decks. Every card carries its article, because the article is the half you are here for.',
    themes: [
      {
        title: 'un',
        cards: [
          { fr: 'un livre', sub: d('un livre').respell, en: 'a book' },
          { fr: 'un stylo', sub: d('un stylo').respell, en: 'a pen' },
          { fr: 'un sac', sub: d('un sac').respell, en: 'a bag' },
          { fr: 'un café', sub: d('un café').respell, en: 'a coffee' },
          { fr: 'un thé', sub: d('un thé').respell, en: 'a tea' },
          { fr: 'un verre', sub: d('un verre').respell, en: 'a glass' },
          { fr: 'un téléphone', sub: d('un téléphone').respell, en: 'a phone' },
          { fr: 'un ordinateur', sub: d('un ordinateur').respell, en: 'a computer' },
          { fr: 'un parapluie', sub: d('un parapluie').respell, en: 'an umbrella' },
          { fr: 'un hôtel', sub: d('un hôtel').respell, en: 'a hotel' },
          { fr: 'un médecin', sub: d('un médecin').respell, en: 'a doctor' },
          { fr: 'un serveur', sub: d('un serveur').respell, en: 'a waiter' },
        ],
      },
      {
        title: 'une',
        cards: [
          { fr: 'une voiture', sub: d('une voiture').respell, en: 'a car' },
          { fr: 'une maison', sub: d('une maison').respell, en: 'a house' },
          { fr: 'une table', sub: d('une table').respell, en: 'a table' },
          { fr: 'une chaise', sub: d('une chaise').respell, en: 'a chair' },
          { fr: 'une porte', sub: d('une porte').respell, en: 'a door' },
          { fr: 'une clé', sub: d('une clé').respell, en: 'a key' },
          { fr: 'une montre', sub: d('une montre').respell, en: 'a watch' },
          { fr: 'une pomme', sub: d('une pomme').respell, en: 'an apple' },
          { fr: 'une banane', sub: d('une banane').respell, en: 'a banana' },
          { fr: 'une tasse', sub: d('une tasse').respell, en: 'a cup' },
          { fr: 'une chambre', sub: d('une chambre').respell, en: 'a room' },
          { fr: 'une avocate', sub: d('une avocate').respell, en: 'a lawyer' },
        ],
      },
      {
        title: 'des',
        cards: [
          { fr: 'des livres', sub: d('des livres').respell, en: 'books' },
          { fr: 'des pommes', sub: d('des pommes').respell, en: 'apples' },
          { fr: 'des croissants', sub: d('des croissants').respell, en: 'croissants' },
          { fr: 'des amis', sub: d('des amis').respell, en: 'friends' },
          { fr: 'des lunettes', sub: d('des lunettes').respell, en: 'glasses' },
          { fr: 'des gants', sub: d('des gants').respell, en: 'gloves' },
          { fr: 'des ciseaux', sub: d('des ciseaux').respell, en: 'scissors' },
        ],
      },
    ],
  },

  {
    type: 'flashcards',
    id: 's16-flash',
    title: 'Flip and Recall',
    frSub: 'Retournez la carte',
    render: 'deck',
    layer: 'core',
    say: 'English on the front. Say the French, article and all, before you flip.',
    cards: [
      { front: 'a hotel (you have none in mind)', back: 'un hôtel', say: 'un hôtel' },
      { front: 'the hotel (they just named it)', back: "l'hôtel", say: "l'hôtel" },
      { front: 'a room', back: 'une chambre', say: 'une chambre' },
      { front: 'the room (you both know which)', back: 'la chambre', say: 'la chambre' },
      { front: 'apples', back: 'des pommes', say: 'des pommes' },
      { front: 'the apples (on the counter)', back: 'les pommes', say: 'les pommes' },
      { front: 'books', back: 'des livres', say: 'des livres' },
      { front: 'friends', back: 'des amis', say: 'des amis' },
      { front: 'I like coffee', back: "J'aime le café.", say: "J'aime le café." },
      { front: 'I am a teacher', back: 'Je suis professeur.', say: 'Je suis professeur.' },
      { front: 'She is a lawyer', back: 'Elle est avocate.', say: 'Elle est avocate.' },
      { front: 'I do not have a car', back: "Je n'ai pas de voiture.", say: "Je n'ai pas de voiture." },
      { front: 'I am buying apples', back: "J'achète des pommes.", say: "J'achète des pommes." },
      { front: 'I am looking for a hotel', back: 'Je cherche un hôtel.', say: 'Je cherche un hôtel.' },
    ],
  },

  {
    type: 'dictation',
    id: 's17-dictation',
    title: 'Spell What You Hear',
    frSub: 'La dictée',
    layer: 'core',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], maxPlays: 4 },
    // Word tiles, not letters: see the note on DICTATION_IDS. The bank offers
    // decoys from ['le','la','les','un','une','de'], so the wrong article sits
    // next to the right one and the learner has to place it.
    say: 'Six sentences. The tiles include articles you did not hear, so put the right one where it belongs.',
    itemIds: DICTATION_IDS,
  },

  {
    type: 'practice',
    id: 's18-speak',
    title: 'Say It Out Loud',
    frSub: 'À voix haute',
    layer: 'core',
    audio: { mode: 'mic', lang: 'fr-FR' },
    // The only practice mission in the lesson, deliberately. `practice.skill`
    // is authored and read by no component: PracticeVFView takes itemIds and
    // nothing else, so a read mission and a speak mission render identically.
    // sons.06 ships two practice sections doing the same job and it reads as a
    // repeat. One mission, and the skill declared truthfully.
    say: 'Fourteen nouns, said with their articles. The article is the part the mic is listening for.',
    skill: 'speak',
    itemIds: SPEAK_IDS,
  },

  {
    type: 'scenario',
    id: 's19-scenario',
    title: 'Your Turn at the Desk',
    frSub: "À la réception",
    layer: 'core',
    terms: ['introducing', 'secondMention'],
    say: 'The same hotel, and this time you hold up the whole exchange. Watch your own articles change.',
    setting: 'The small hotel behind the station in Annecy, half past seven in the evening.',
    turns: [
      { ai: 'Bonsoir monsieur. Je peux vous aider ?', en: 'Good evening sir. Can I help you?', user: 'Bonsoir. Je cherche une chambre.' },
      { ai: 'Pour combien de nuits ?', en: 'For how many nights?', user: 'Pour une nuit, s’il vous plaît.' },
      { ai: 'Il reste une chambre au deuxième étage.', en: 'There is one room left on the second floor.', user: 'Je prends la chambre.' },
      { ai: 'Le petit-déjeuner est à sept heures.', en: 'Breakfast is at seven.', user: 'Il y a des croissants ?' },
      { ai: 'Bien sûr. Voici la clé.', en: 'Of course. Here is the key.', user: 'Merci beaucoup. Bonne soirée !' },
    ],
  },

  /* ── Act 5: prove it ──────────────────────────────────────────────────── */

  {
    type: 'reviewDeck',
    id: 's20-review',
    title: 'The Whole Thing, One Deck',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    terms: ['secondMention', 'deUnderNo', 'wholeThing'],
    say: 'Rate each card as again, hard or easy. The ones you mark again come back.',
    cards: [
      { front: 'Which article does something new to the listener take?', back: `${REFRAME} So un, une or des.` },
      { front: 'You mentioned a room last sentence. Now?', back: 'la chambre. It is in the conversation, so it is the room.', say: 'la chambre' },
      { front: 'English says "apples". French says…', back: 'des pommes. The gap in English is not a gap in French.', say: 'des pommes' },
      { front: 'I like coffee', back: "J'aime le café. The whole of it, so le.", say: "J'aime le café." },
      { front: 'I am a teacher', back: 'Je suis professeur. Nothing after être.', say: 'Je suis professeur.' },
      { front: "J'ai une voiture. Now say you do not.", back: "Je n'ai pas de voiture. Un, une and des all become de.", say: "Je n'ai pas de voiture." },
      { front: "J'aime le café. Now say you do not.", back: "Je n'aime pas le café. Le does not move.", say: "Je n'aime pas le café." },
      { front: 'You ask « où est l’hôtel » in a town of forty hotels', back: 'You get « Lequel ? », because le claimed you both knew which one.' },
      { front: 'The one place the article comes back after a job', back: "C'est un professeur. C’est points; il est describes.", say: "C'est un professeur." },
      { front: 'How do you tell which article a sentence had?', back: 'Negate it. If it collapsed to de it was indefinite. If it survived it was not.' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's21-progress',
    title: 'Where You Stand',
    frSub: 'Votre progression',
    // The prose carries no counts. Every figure is in `stats`, derived from the
    // journey itself, and saying a number twice on one card is two chances to
    // be wrong and one card that reads as padded.
    say: 'One screen before the exam, so you know what you are walking into.',
    body: 'You have watched a question fail on one word, read a passage where three nouns arrive and come back, sorted the nouns you already knew, met the four places your English points the wrong way, spelled the sentences and said them out loud. What is left is the part that tells you whether it stuck. Each round is tied to one of the mistakes this lesson exists to stop, and failing a round gets you its drill before the next one starts. The drill is the teaching, not the punishment.',
    // Filled immediately after SECTIONS is built, from the journey itself.
    stats: [],
  },

  {
    type: 'quiz',
    id: 's22-quiz',
    title: 'The Exam',
    frSub: "L'examen",
    layer: 'core',
    passMark: 70,
    roundFailThreshold: 60,
    say: 'Five rounds. Miss too many in a round and you get that round’s drill before the next one starts.',
    rounds: [
      {
        id: 'r1-which-of-three',
        label: 'Which of the three',
        // The FIRST target is the one whose drill fires (drillForRound stops
        // there). `des` is first because it is the form with no English twin
        // and the one a failing learner most needs; gender is a1.03's job.
        targets: ['err-des-dropped', 'err-definite-too-early'],
        say: 'The forms, quickly.',
        questions: [
          {
            q: 'You want a book. Any book. You have not said anything about books yet.',
            format: 'mcq',
            opts: ['Je cherche un livre.', 'Je cherche le livre.', 'Je cherche des livres.', 'Je cherche livre.'],
            correct: 0,
            why: 'Nothing about books is in the conversation yet, so the listener has no way of knowing which one. That is exactly what un is for.',
            ref: 's03-forms',
          },
          {
            q: 'Which article does voiture take the first time you mention it?',
            format: 'mcq',
            opts: ['un', 'une', 'des', 'de'],
            correct: 1,
            why: 'Voiture is feminine, which you settled in the gender lesson. This lesson only decides indefinite against definite; the noun decides the rest.',
            ref: 's04-sort',
          },
          {
            q: 'Fix this. « J’achète pommes. »',
            format: 'errorSpot',
            accept: ["J'achète des pommes.", 'des pommes', 'des'],
            answer: "J'achète des pommes.",
            why: 'English has nothing in front of apples so nothing reminds you. French has no bare plural noun: des is the plural of un and une and it is not optional.',
            ref: 's05-des',
          },
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'une pomme' },
            opts: ['un homme', 'des pommes', 'une pomme', 'la pomme'],
            correct: 2,
            why: 'Un and une are one vowel apart and there is no consonant to hold on to. Slow it down and the rounded ü of une separates cleanly.',
            ref: 's08-ear',
          },
          {
            q: 'Write the plural of « un croissant ».',
            format: 'typeIn',
            accept: ['des croissants'],
            answer: 'des croissants',
            why: 'Both halves change: the article becomes des and the noun takes its s. English would give you croissants and nothing in front of it.',
            ref: 's05-des',
          },
        ],
      },
      {
        id: 'r2-first-mention',
        label: 'First mention, second mention',
        targets: ['err-definite-too-early'],
        say: 'The rule the whole lesson is about.',
        questions: [
          {
            q: 'You are new in town and you stop a stranger. « Excusez-moi, je cherche ___ hôtel. »',
            format: 'mcq',
            opts: ['un', 'des', 'le', "l'"],
            correct: 0,
            why: 'They have no way of knowing which hotel you mean, and you do not mean a particular one. Ask for the hotel and you get asked which one.',
            ref: 's01-scene',
          },
          {
            q: 'She has just told you there is a hotel behind the station. You ask: « ___ hôtel est loin ? »',
            format: 'mcq',
            opts: ['Un', 'Des', "L'", 'Une'],
            correct: 2,
            why: 'She named it one sentence ago, so you are both thinking of the same building. Le and la become l apostrophe in front of a vowel sound.',
            ref: 's06-pairs',
          },
          {
            q: 'Fix the second sentence. « Il reste une chambre. Je prends une chambre. »',
            format: 'errorSpot',
            accept: ['Je prends la chambre.', 'la chambre', 'la'],
            answer: 'Je prends la chambre.',
            why: 'Une a second time introduces a second, different room. The room is already in the conversation, so it is the room now.',
            ref: 's07-reading',
          },
          {
            q: 'The croissants are on the plate between you. Complete: « ___ croissants sont pour moi ? »',
            format: 'typeIn',
            accept: ['Les'],
            answer: 'Les',
            why: 'You can both see them, so you can both point at the same ones. Des would be asking about croissants in general.',
            ref: 's07-reading',
          },
          {
            q: 'Listen. Which one is it?',
            format: 'listenChoose',
            audio: { mode: 'tts', lang: 'fr-FR', clip: 'les croissants' },
            opts: ['des croissants', 'les croissants', 'le croissant', 'un croissant'],
            correct: 1,
            why: 'Des and les are the same pair of problems as un and une: one vowel, no consonant, and the whole meaning riding on it.',
            ref: 's08-ear',
          },
        ],
      },
      {
        id: 'r3-the-whole-of-it',
        label: 'The whole of it',
        targets: ['err-generalisation'],
        say: 'Where English leaves the slot empty.',
        questions: [
          {
            q: 'Fix this. « J’aime café. »',
            format: 'errorSpot',
            accept: ["J'aime le café.", 'le café', 'le'],
            answer: "J'aime le café.",
            why: 'You are talking about coffee as a whole, and French names the whole of it. A category is the most known thing there is, so it takes le.',
            ref: 's11-general',
          },
          {
            q: '"I like coffee" in French is:',
            format: 'mcq',
            opts: ["J'aime café.", "J'aime un café.", "J'aime le café.", "J'aime des cafés."],
            correct: 2,
            why: 'Le café here is not "the coffee". It is coffee itself, which is what English says with no article at all.',
            ref: 's11-general',
          },
          {
            q: 'Which of these is about coffee in general rather than one cup of it?',
            format: 'mcq',
            opts: ['Un café, s’il vous plaît.', 'Il y a des cafés ici.', 'Je prends un café.', "J'aime le café."],
            correct: 3,
            why: 'The other three are all one cup or several places. Only the fourth is a statement about coffee itself, and that is the one that takes le.',
            ref: 's11-general',
          },
          {
            q: 'You hate tomatoes. All of them, always. Complete: « Je déteste ___ tomates. »',
            format: 'typeIn',
            accept: ['les'],
            answer: 'les',
            why: 'Hating, liking, loving and preferring all name the whole category, and a whole category takes le, la or les. Des would be some particular tomatoes.',
            ref: 's11-general',
          },
          {
            q: 'Fix this. « Elle aime un thé. »',
            format: 'errorSpot',
            accept: ['Elle aime le thé.', 'le thé', 'le'],
            answer: 'Elle aime le thé.',
            why: 'Un thé is one cup, which nobody likes in general. Aimer takes the whole of the thing, so le.',
            ref: 's11-general',
          },
        ],
      },
      {
        id: 'r4-jobs-and-negatives',
        label: 'Jobs and negatives',
        // Two targets, and the order decides which drill fires. The bare
        // profession is first because it is the error a learner produces in
        // their first conversation, out loud, about themselves.
        targets: ['err-job-article', 'err-negation-de'],
        say: 'Two rules English gives you no help with.',
        questions: [
          {
            q: 'Fix this. « Je suis un professeur. »',
            format: 'errorSpot',
            accept: ['Je suis professeur.', 'Je suis professeur'],
            answer: 'Je suis professeur.',
            why: 'After être a job goes in bare. English needs the article and French forbids it, so a correct English instinct is wrong every time here.',
            ref: 's12-jobs',
          },
          {
            q: 'Which one is right?',
            format: 'mcq',
            opts: ['Elle est une avocate.', 'Elle est avocate.', "Elle est l'avocate.", 'Elle est des avocates.'],
            correct: 1,
            why: 'Nothing between est and the job. The third would mean she is the lawyer you have both already been talking about.',
            ref: 's12-jobs',
          },
          {
            q: 'Fix this. « Je n’ai pas une voiture. »',
            format: 'errorSpot',
            accept: ["Je n'ai pas de voiture.", 'de voiture', 'pas de voiture', 'de'],
            answer: "Je n'ai pas de voiture.",
            why: 'Un, une and des all collapse to de under a negative. De agrees with nothing, so there is only one form to remember.',
            ref: 's13-negation',
          },
          {
            q: '« J’aime le café. » Now say you do not.',
            format: 'mcq',
            opts: ["Je n'aime pas de café.", "Je n'aime pas le café.", "Je n'aime pas café.", "Je n'aime pas un café."],
            correct: 1,
            why: 'Le does not move under a negative. That asymmetry is what lets you work out afterwards which article you had used.',
            ref: 's13-negation',
          },
          {
            q: 'You are pointing at someone across the room and telling a friend what they do.',
            format: 'mcq',
            opts: ['Il est un professeur.', 'Il est le professeur.', "C'est professeur.", "C'est un professeur."],
            correct: 3,
            why: "C'est points at a person and takes the article back. Il est describes one and takes nothing. Those are the only two shapes.",
            ref: 's12-jobs',
          },
        ],
      },
      {
        id: 'r5-put-it-together',
        label: 'Put it together',
        // err-negation-de is first here so its drill is reachable: r4 fires the
        // profession drill and stops. Every drill this lesson authors is the
        // first target of exactly one round.
        targets: ['err-negation-de', 'err-definite-too-early', 'err-des-dropped'],
        say: 'All of it, mixed.',
        questions: [
          {
            q: 'You have mentioned no hotel and neither has she. Fix this. « Je cherche l’hôtel. »',
            format: 'errorSpot',
            accept: ['Je cherche un hôtel.', 'un hôtel', 'un'],
            answer: 'Je cherche un hôtel.',
            why: 'L apostrophe claims the two of you already have the same building in mind. She does not, so the question has no answer and she has to stop and ask.',
            ref: 's01-scene',
          },
          {
            q: '« J’ai une voiture. » Write it again, saying you do not.',
            format: 'typeIn',
            accept: ["Je n'ai pas de voiture.", 'Je n’ai pas de voiture.'],
            answer: "Je n'ai pas de voiture.",
            why: 'Une goes to de, not to pas une and not to pas la. The car never entered the conversation, so there is nothing for la to point at.',
            ref: 's13-negation',
          },
          {
            q: 'Say it out loud, to a stranger in a town you do not know.',
            format: 'speak',
            target: 'Je cherche un hôtel.',
            ipa: '/ʒə ʃɛʁʃ œ̃ no.tɛl/',
            why: 'Un runs straight into hôtel and the two become one three-syllable block. A gap between them is what makes it sound like two separate words.',
            ref: 's18-speak',
          },
          {
            q: 'Fix this. « Il y a livres sur la table. »',
            format: 'errorSpot',
            accept: ['Il y a des livres sur la table.', 'des livres', 'des'],
            answer: 'Il y a des livres sur la table.',
            why: 'The books are new to the listener so they take des. The table is one you can both see, which is why la is already right.',
            ref: 's05-des',
          },
          {
            q: 'What does the choice between un and le actually depend on?',
            format: 'mcq',
            opts: [
              'Whether the noun is masculine or feminine',
              'Whether the thing is one or many',
              'Whether the sentence is a question',
              'Whether the person listening already knows which one you mean',
            ],
            correct: 3,
            why: 'It is a fact about the conversation rather than about the noun. Gender decides un against une; this decides un against le, and it is the part that stays hard.',
            ref: 's23-roundup',
          },
        ],
      },
    ],
  },

  {
    type: 'roundup',
    id: 's23-roundup',
    title: 'What You Can Do Now',
    frSub: 'Ce que vous savez faire',
    say: 'Five things you did not have this morning.',
    body: 'You can bring something into a French conversation and hand it over properly, which is most of what an article is for. The four traps below are worth more to you than the forms are: the forms take a morning and the traps take a year, and you have just had them all named.',
    points: [
      REFRAME,
      'Des is the plural of both, and English puts nothing where French puts des.',
      'Talking about a thing in general takes le, la or les. J’aime le café.',
      'After être a job takes nothing at all. Je suis professeur.',
      'Under a negative un, une and des become de. Le, la and les do not move.',
    ],
  },
];

/* ─── The progress card counts the journey rather than restating it ────────
 *
 * Derived here rather than typed by hand. Every figure is a fact about the
 * array directly above, and a display string is validated against nothing, so
 * the first mission added would have left the card confidently wrong with the
 * whole suite still green. It throws rather than degrades: a progress card
 * silently reporting "0 of 0" is worse than a build that stops.              */
{
  const ix = SECTIONS.findIndex((s) => (s as { id?: string }).id === 's21-progress');
  const card = SECTIONS[ix];
  const quiz = SECTIONS.find((s) => s.type === 'quiz');
  if (!card || card.type !== 'progressCheck' || !quiz || quiz.type !== 'quiz') {
    throw new Error('a1.11.l1: the progress card or the quiz is missing, so the card cannot count what is not there');
  }
  card.stats = [
    { k: 'Nouns and lines met', v: String(ITEM_IDS.length) },
    // `ix` is the count of sections BEFORE this one, which is exactly how many
    // missions the learner has finished when they reach it.
    { k: 'Missions done', v: `${ix} of ${SECTIONS.length}` },
    { k: 'Exam rounds ahead', v: String(quiz.rounds?.length ?? 0) },
    { k: 'Pass mark', v: `${quiz.passMark}%` },
  ];
}

/* ─── Acts ─────────────────────────────────────────────────────────────────
 *
 * Five, and the weighting is the argument of the lesson: act 1 spends ONE
 * mission on gender and act 2 spends five on the discourse rule. A shape that
 * put three missions on un against une and one on first mention would be the
 * gender quiz this lesson exists not to be.
 *
 * `estScreens` is what the mission actually costs rather than a round number,
 * because it is divided by the rest points to check no stretch runs past the
 * checkpoint-spacing limit. A flattering estimate buys a lesson that passes
 * the validator and exhausts the learner.                                    */

const ACTS: LessonAct[] = [
  {
    id: 'act1',
    title: 'The three you choose between',
    sections: ['s01-scene', 's02-goals', 's03-forms', 's04-sort', 's05-des'],
    milestone: 'You have watched one word decide whether a question could be answered.',
    estScreens: 27,
    restPoints: ['s01-scene/after-break'],
  },
  {
    id: 'act2',
    title: 'First mention, second mention',
    sections: ['s06-pairs', 's07-reading', 's08-ear', 's09-cases', 's10-check'],
    milestone: 'You can hear the moment a thing stops being new.',
    estScreens: 11,
  },
  {
    id: 'act3',
    title: 'Where English misleads you',
    sections: ['s11-general', 's12-jobs', 's13-negation', 's14-traps'],
    milestone: 'Four habits named, before they cost you a year.',
    estScreens: 12,
  },
  {
    id: 'act4',
    title: 'Banked, and used',
    sections: ['s15-words', 's16-flash', 's17-dictation', 's18-speak', 's19-scenario'],
    milestone: 'You have spelled them, said them and held a whole exchange with them.',
    estScreens: 38,
    restPoints: ['s16-flash/halfway', 's18-speak/halfway'],
  },
  {
    id: 'act5',
    title: 'Prove it',
    sections: ['s20-review', 's21-progress', 's22-quiz', 's23-roundup'],
    milestone: 'Lesson complete.',
    estScreens: 38,
    restPoints: ['s20-review/halfway', 's22-quiz/after-r2', 's22-quiz/after-r4'],
  },
];

/* ─── Deck tranches ────────────────────────────────────────────────────────
 *
 * One slice per act, index-aligned. An item is released the act it is TAUGHT,
 * not the act it is first mentioned: releasing the whole set at mission one
 * turns the flashcard hub into a wall on the morning the learner is least able
 * to read it. Act 5 releases nothing because it teaches nothing new.         */

const DECK_TRANCHE: string[][] = [
  [...MASC, ...FEM, ...PLURAL],
  [...MENTION],
  [...GENERAL, ...JOBS, ...NEGATION],
  [...BANK],
  [],
];

/* ─── Error triggers and their drills ──────────────────────────────────────
 *
 * Five triggers, five drills, five retests, five quiz rounds, and that is not
 * a coincidence. `drillForRound` walks a round's `targets` and fires the drill
 * of the FIRST one that has any, then stops. So a drill named only in second
 * place never runs. Each drill below is the first target of exactly one round,
 * which is what makes all five reachable; the test asserts it rather than
 * trusting the ordering to survive an edit.                                  */

const ERROR_TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-des-dropped',
    description: 'Leaves the plural bare, because English has nothing in front of it to translate.',
    detectOn: ['s05-des', 's17-dictation', 's22-quiz/r1-which-of-three', 's22-quiz/r5-put-it-together'],
    drill: 'drill-des',
    retest: 'retest-des',
  },
  {
    id: 'err-definite-too-early',
    description: 'Uses le, la or les on a first mention, so the listener is asked to know something they do not.',
    detectOn: ['s01-scene', 's06-pairs', 's07-reading', 's10-check', 's22-quiz/r2-first-mention'],
    drill: 'drill-first-mention',
    retest: 'retest-first-mention',
  },
  {
    id: 'err-generalisation',
    description: 'Drops the article when talking about a thing in general, the way English does.',
    detectOn: ['s11-general', 's14-traps', 's22-quiz/r3-the-whole-of-it'],
    drill: 'drill-general',
    retest: 'retest-general',
  },
  {
    id: 'err-job-article',
    description: 'Puts un or une in front of a job after être, because English requires it there.',
    detectOn: ['s12-jobs', 's14-traps', 's19-scenario', 's22-quiz/r4-jobs-and-negatives'],
    drill: 'drill-jobs',
    retest: 'retest-jobs',
  },
  {
    id: 'err-negation-de',
    description: 'Keeps un, une or des under a negative instead of collapsing all three to de.',
    detectOn: ['s13-negation', 's14-traps', 's22-quiz/r5-put-it-together'],
    drill: 'drill-negation',
    retest: 'retest-negation',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-des',
    title: 'The word English leaves out',
    format: 'flashcard',
    coach: 'Read the English on the left. Say the French on the right, out loud, and do not let the article go missing.',
    pairs: [
      ['apples', 'des pommes'],
      ['books', 'des livres'],
      ['friends', 'des amis'],
      ['croissants', 'des croissants'],
      ['I am buying apples', "J'achète des pommes."],
    ],
  },
  {
    id: 'retest-des',
    title: 'One more time',
    format: 'mcq',
    q: 'You are telling someone what is on the table. There are books.',
    opts: ['Il y a livres sur la table.', 'Il y a des livres sur la table.', 'Il y a le livre sur la table.'],
    correct: 1,
    why: 'French has no bare plural noun. The books are new to the listener, so des.',
  },
  {
    id: 'drill-first-mention',
    title: 'New to them, or already theirs?',
    format: 'sort',
    buckets: ['They do not know it yet', 'They already know which one'],
    // Item ids, not display strings: a drill scores against the corpus, so it
    // plays the same audio and reads the same spelling as every other card
    // that teaches these. Passing strings here validates as broken ids.
    items: [
      'fr.a1.deplacements.304', 'fr.a1.deplacements.306', 'fr.a1.cafe.147', 'fr.a1.objets.216',
      'fr.a1.deplacements.305', 'fr.a1.deplacements.307', 'fr.a1.cafe.148',
    ],
    coach: 'Read each line and ask one question: could the other person point at it yet? If not, it is un, une or des.',
  },
  {
    id: 'retest-first-mention',
    title: 'One more time',
    format: 'mcq',
    q: 'You have just said there is a room free. Now you take it.',
    opts: ['Je prends une chambre.', 'Je prends la chambre.', 'Je prends des chambres.'],
    correct: 1,
    why: 'You put the room into the conversation yourself one sentence ago. Une would introduce a second one.',
  },
  {
    id: 'drill-general',
    title: 'In general, or just this one?',
    format: 'sort',
    buckets: ['The whole of it', 'One of them'],
    items: ['fr.a1.cafe.149', 'fr.a1.marche.200', 'fr.a1.cafe.150', 'fr.a1.cafe.009', 'fr.a1.cafe.010', 'fr.a1.objets.213'],
    coach: 'Add "in general" to the English. If it still makes sense, French wants le, la or les.',
  },
  {
    id: 'retest-general',
    title: 'One more time',
    format: 'mcq',
    q: '"I like coffee." Which one?',
    opts: ["J'aime café.", "J'aime le café.", "J'aime un café."],
    correct: 1,
    why: 'Coffee as a whole. English leaves the slot empty and French names the category, which takes le.',
  },
  {
    id: 'drill-jobs',
    title: 'After être, nothing',
    format: 'flashcard',
    coach: 'The left is what English gives you. Say the French before you flip, and leave the gap where English wants a word.',
    pairs: [
      ['I am a teacher', 'Je suis professeur.'],
      ['She is a lawyer', 'Elle est avocate.'],
      ['He is a baker', 'Il est boulanger.'],
      ['She is a doctor', 'Elle est médecin.'],
      ['That is a teacher (pointing)', "C'est un professeur."],
    ],
  },
  {
    id: 'retest-jobs',
    title: 'One more time',
    format: 'mcq',
    q: 'Someone asks what you do. You teach.',
    opts: ['Je suis un professeur.', 'Je suis professeur.', "Je suis le professeur."],
    correct: 1,
    why: 'Nothing between suis and the job. The third one says you are the teacher they were expecting.',
  },
  {
    id: 'drill-negation',
    title: 'Say no and watch it move',
    format: 'flashcard',
    coach: 'Say the negative out loud before you flip. Three of these collapse to de and one does not move at all.',
    pairs: [
      ["J'ai une voiture.", "Je n'ai pas de voiture."],
      ["J'ai un stylo.", "Je n'ai pas de stylo."],
      ["J'achète des pommes.", "Je n'achète pas de pommes."],
      ["J'aime le café.", "Je n'aime pas le café."],
    ],
  },
  {
    id: 'retest-negation',
    title: 'One more time',
    format: 'mcq',
    q: 'Which sentence has an article that did NOT change under the negative?',
    opts: ["Je n'ai pas de voiture.", "Je n'aime pas le café.", "Je n'achète pas de pommes."],
    correct: 1,
    why: 'Le, la and les survive a negative untouched. Only un, une and des collapse to de.',
  },
];

/* ─── Reference sheets ─────────────────────────────────────────────────────
 *
 * The material a learner wants AFTER the lesson rather than during it. Kept
 * out of the flow so a mission stays one idea, and reachable from the sections
 * that preview it via `sheetId`. Layer 'deep' exempts these from the core
 * density caps, which is the point: a sheet is allowed to be dense, and it is
 * the one place in the product a table belongs.                              */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.a1.11.contrast',
    title: 'Every choice in this lesson, on one screen',
    layer: 'deep',
    contains: ['New against known', 'The four English traps', 'What a negative does'],
    sections: [
      {
        type: 'table',
        id: 'sheet-contrast-table',
        title: 'New to them, or already known',
        layer: 'deep',
        cols: ['First mention', 'After that', 'English'],
        rows: [
          ['un hôtel', "l'hôtel", 'a hotel / the hotel'],
          ['une chambre', 'la chambre', 'a room / the room'],
          ['un livre', 'le livre', 'a book / the book'],
          ['une voiture', 'la voiture', 'a car / the car'],
          ['des croissants', 'les croissants', 'croissants / the croissants'],
          ['des pommes', 'les pommes', 'apples / the apples'],
          ['des livres', 'les livres', 'books / the books'],
          ['des amis', 'les amis', 'friends / the friends'],
        ],
      },
      {
        type: 'cheatSheet',
        id: 'sheet-contrast-rules',
        title: 'The four places English points the wrong way',
        layer: 'deep',
        rows: [
          { k: 'In general', v: "J'aime le café, not J'aime café. A whole category takes le, la or les.", say: "J'aime le café." },
          { k: 'A job, after être', v: 'Je suis professeur, not Je suis un professeur. Nothing after être.', say: 'Je suis professeur.' },
          { k: 'A job, after c’est', v: "C'est un professeur. The one place the article comes back.", say: "C'est un professeur." },
          { k: 'Under a negative', v: "Je n'ai pas de voiture. Un, une and des all become de.", say: "Je n'ai pas de voiture." },
          { k: 'Le under a negative', v: "Je n'aime pas le café. Le, la and les do not move.", say: "Je n'aime pas le café." },
          { k: 'A bare plural', v: "J'achète des pommes, not J'achète pommes. French has no bare plural noun.", say: "J'achète des pommes." },
        ],
      },
      {
        type: 'teach',
        id: 'sheet-contrast-note',
        title: 'What this lesson does not cover',
        layer: 'deep',
        body: 'Des has a second life as a quantity word, in sentences about how much of something there is rather than how many things. That belongs with its own family and it is a whole lesson, so it is not started here. Everything above treats des as exactly one thing: the plural of un and une. Where you have seen it in front of food in this lesson, it is still that.',
      },
    ],
  },
];

export const INDEFINIS_LESSON: Lesson = {
  id: 'a1.11.l1',
  unitId: 'a1.11',
  seq: 1,
  title: 'Les articles indéfinis',
  level: 'a1',
  // The Den, the unit page and the mission list all derive the lesson number
  // from the unit's `seq`, and a1.11 sits at seq 7 because a1.27 and a1.28
  // were inserted earlier in the track. `tag` is the ONE place that number is
  // authored by hand, so a tag built from the unit id would say 11 while the
  // header above it says 07. a1.03 shipped exactly that bug (commit 56c79a7).
  tag: 'A1 · LEÇON 07',
  intro:
    'Anyone can learn that un is masculine and une is feminine. What stays hard is knowing which article a sentence wants at all, and that is not a fact about the noun. It is a fact about what the person listening already knows.',

  sections: SECTIONS,
  itemIds: ITEM_IDS,
  // The unit shipped with lessonIds: [], so this is the first lesson here and
  // the counter starts at 1. It moves forward on every rebuild: the merge
  // script prints both sides, and "replacing v3 with v1" reads as a rollback.
  version: 1,

  grammarAssumed: [
    'Every noun carries a gender, and the article in front of it is the choice that gender makes',
    'Elision of le and la to l apostrophe in front of a vowel',
  ],
  grammarIntroduced: [
    'The indefinite article un, une and des, including the plural English has no equivalent for',
    'First mention against second mention: which article a sentence wants is decided by what the listener already knows',
    'Generalisation takes the definite article in French where English takes none',
    'No article at all after être in front of a profession, and its exception after c’est',
    'Under negation un, une and des all reduce to de, while le, la and les are unchanged',
  ],

  features: ['roleplay', 'voiceflash'],

  overview: {
    titleEn: 'The Indefinite Articles',
    subFr: 'Les articles indéfinis',
    introFr: "Un, une, des : le choix ne dépend pas du nom, mais de ce que votre interlocuteur sait déjà.",
    minutes: 24,
    difficulty: 2,
    glyph: 'un',
    screens: 126,
  },

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: ERROR_TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  terms: INDEFINIS_TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    // Briefs only. CLIP_MANIFEST is empty by design, so every card falls back
    // to device TTS until the studio delivers; a recordingId resolving to
    // nothing is the correct shipping state and not a bug.
    recorded: [
      {
        id: 'rec-a1-11-un-une',
        desc:
          'Twelve nouns with their articles, six on un and six on une, read in ONE TAKE by ONE voice at ONE speed. ' +
          'The whole contrast is a single unstressed syllable, so a pair split across two takes has the learner ' +
          'comparing two performances instead of two articles. Do not over-articulate un: its vowel is nasal, and ' +
          'a careful reading that lets the n through removes the only thing separating it from une.',
        clipIds: [
          'un-livre', 'un-stylo', 'un-sac', 'un-cafe', 'un-telephone', 'un-croissant',
          'une-voiture', 'une-table', 'une-porte', 'une-cle', 'une-pomme', 'une-baguette',
        ],
      },
      {
        id: 'rec-a1-11-pairs',
        desc:
          'The two minimal pairs, un against une and des against les, each pair recorded BACK TO BACK IN ONE TAKE ' +
          'by the same voice at the same speed, in the same way sons.07 pins rec-h-pairs. Both pairs are one vowel ' +
          'apart. Also the four passage lines at natural pace, then again at 0.65, so the learner can hear where ' +
          'un ends and hôtel begins without a gap being inserted between them.',
        clipIds: [
          'un-pomme-pair', 'des-les-pair',
          'je-cherche-un-hotel', 'lhotel-est-complet',
          'il-y-a-des-croissants', 'les-croissants-sont-pour-moi',
        ],
      },
      {
        id: 'rec-a1-11-traps',
        desc:
          'The four English-speaker traps, wrong form then right form, with a clear beat between them so the ' +
          'learner hears the difference rather than a correction. J’aime café / J’aime le café. Je suis un ' +
          'professeur / Je suis professeur. Je n’ai pas une voiture / Je n’ai pas de voiture. J’achète pommes / ' +
          'J’achète des pommes. Read the wrong version plainly, not comically.',
        clipIds: ['trap-general', 'trap-job', 'trap-negation', 'trap-des'],
      },
    ],
  },
};

/** Exported for the authoring script, the merge script and the test, so none of
 *  them restates a count that can drift out of agreement with the content. */
export const INDEFINIS_ITEM_IDS = ITEM_IDS;
export const INDEFINIS_SPEAK_IDS = SPEAK_IDS;
export const INDEFINIS_DICTATION_IDS = DICTATION_IDS;
export const INDEFINIS_MENTION_IDS = MENTION;
export const INDEFINIS_TRANCHES = DECK_TRANCHE;
