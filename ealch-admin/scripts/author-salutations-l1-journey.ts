// A1 · LEÇON 01 — "Les salutations" rebuilt as a full mission journey.
//
// WHY THIS EXISTS
// a1.01.l1 is the very first lesson a brand-new learner ever opens, and it
// ships today as the THIN shape: 6 sections (table, examples, useCases,
// commonErrors, practice, quiz), 4 quiz questions, and a narration block whose
// stages were authored before the mission renderer existed. Meanwhile
// sons.02.l1 / sons.03.l1 moved the house standard on to the 20-mission
// journey (story -> goals -> ... -> progressCheck -> quiz -> roundup) rendered
// by MissionSection.tsx / MissionRich.tsx, with an `overview` block and a
// French `frSub` on every section. The app's first impression is currently its
// weakest lesson. This rebuild closes that gap.
//
// WHAT IT DOES
// Rewrites the a1.01.l1 lesson BODY only. It authors no new corpus items: the
// salutations theme already carries 366 published a1 items, all with IPA, so
// this lesson curates the ones it teaches rather than duplicating them. Two
// existing items get a drills top-up (see DRILL_PATCHES) so every item the
// speak-practice mission names is actually reachable by voiceflash.
//
// DESIGN CONTRACT (EALCH content design principles)
// - Interaction before explanation: the journey opens on a story, not a rule.
// - One idea per mission; every mission is short enough to hold on a phone.
// - Confidence first: recognise -> choose -> complete -> produce, in that order.
// - Many formats: story, cards, tapTable, flashcards, listening, dictation,
//   scenario, reading, reviewDeck, speak-practice, quiz.
// - Feedback teaches: every quiz question carries a `why`.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-salutations-l1-journey.ts --dry-run
//   pnpm tsx scripts/author-salutations-l1-journey.ts
//   then: pnpm content:publish

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import {
  validateLesson,
  validateUnit,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';

// ── Items this lesson teaches ───────────────────────────────────────────────
// All already published in the salutations theme. Grouped by the job each one
// does in the journey so the practice missions can name the right subset.

const GREETINGS = [
  'fr.a1.salutations.001', // Bonjour
  'fr.a1.salutations.002', // Bonsoir
  'fr.a1.salutations.003', // Salut
];

const FAREWELLS = [
  'fr.a1.salutations.006', // Au revoir
  'fr.a1.salutations.007', // Bonne nuit
  'fr.a1.salutations.008', // À bientôt
  'fr.a1.salutations.009', // À demain
];

const POLITENESS = [
  'fr.a1.salutations.004', // Merci
  'fr.a1.salutations.012', // Merci beaucoup
  'fr.a1.salutations.013', // De rien
  'fr.a1.salutations.010', // S'il vous plaît
  'fr.a1.salutations.011', // S'il te plaît
  'fr.a1.salutations.005', // Pardon
  'fr.a1.salutations.014', // Excusez-moi
];

const ASKING = [
  'fr.a1.salutations.015', // Comment allez-vous ?
  'fr.a1.salutations.016', // Comment ça va ?
  'fr.a1.salutations.018', // Comment vous appelez-vous ?
  'fr.a1.salutations.017', // Enchanté
  'fr.a1.salutations.065', // Je m'appelle
];

const TITLES = [
  'fr.a1.salutations.111', // Madame
  'fr.a1.salutations.112', // Monsieur
];

const SENTENCES = [
  'fr.a1.salutations.019', // Je m'appelle Claire, et vous ?
  'fr.a1.salutations.020', // Ça va bien, merci, et toi ?
];

// Dictée lines, already carrying the 'dictation' drill in the corpus.
const DICTATION_IDS = [
  'fr.a1.salutations.022', // Bonjour madame, comment allez-vous ?
  'fr.a1.salutations.023', // Salut, ça va bien aujourd'hui ?
];

const ALL_IDS = [
  ...GREETINGS,
  ...FAREWELLS,
  ...POLITENESS,
  ...ASKING,
  ...TITLES,
  ...SENTENCES,
  ...DICTATION_IDS,
];

// Speak-practice pool: the items a learner should say out loud. Excludes the
// two dictée sentences (they are spelled, not spoken) and keeps the set to the
// core expressions so the mission stays short.
const SPEAK_IDS = [...GREETINGS, ...FAREWELLS, ...POLITENESS];

// Listening-practice pool: the question-and-answer expressions.
const LISTEN_IDS = [...ASKING, ...SENTENCES];

// ── Drill top-ups ───────────────────────────────────────────────────────────
// 019 and 020 ship with drills ['flashcard','sentence','review'] — no
// 'voiceflash', so they are unreachable from the voice hub even though this
// lesson asks the learner to say them. Add it without disturbing what is there.
const DRILL_PATCHES: { id: string; add: string[] }[] = [
  { id: 'fr.a1.salutations.019', add: ['voiceflash'] },
  { id: 'fr.a1.salutations.020', add: ['voiceflash'] },
];

// ── The lesson ──────────────────────────────────────────────────────────────

const LESSON: Lesson = {
  id: 'a1.01.l1',
  unitId: 'a1.01',
  seq: 1,
  title: 'Les salutations',
  level: 'a1',
  tag: 'A1 · LEÇON 01',
  intro:
    'French greetings split along a single line: tu or vous. Get that one choice right and « bonjour », « merci » and « au revoir » will carry you through almost any first exchange.',
  itemIds: ALL_IDS,
  version: 3,
  grammarIntroduced: ['tu vs vous (register)', 'ça va as question and answer'],
  overview: {
    titleEn: 'Greetings: Your First Real French Conversation',
    subFr: 'Les salutations',
    introFr:
      "En français, tout commence par un choix : tu ou vous. Apprenez à saluer, à demander comment ça va, à remercier et à prendre congé, poliment ou entre amis.",
    minutes: 25,
    difficulty: 1,
    glyph: 'Bj',
  },
  sections: [
    // ── 0. STORY — the stakes, before any teaching ──────────────────────────
    {
      type: 'story',
      title: 'The Baker Who Went Quiet',
      frSub: 'La boulangère devenue silencieuse',
      setting: 'BOULANGERIE · PARIS, 8:05 AM',
      // No imageRef: MissionSection renders `story` via StoryView with no hero
      // slot, so a ref here would be silently dropped. The bakery art rides on
      // the reading mission instead, where a hero actually paints.
      say: 'Listen to what happens when you skip one small word in France.',
      bubbles: [
        {
          from: 'narrator',
          fr: 'Tom entre dans la boulangerie. Il a faim. Il va droit au comptoir.',
          en: 'Tom walks into the bakery. He is hungry. He goes straight to the counter.',
        },
        {
          from: 'user',
          fr: 'Une baguette.',
          en: 'A baguette.',
          warn: "In France, walking up and naming what you want reads as abrupt. « Bonjour » is not a nicety here, it is the door you have to open before anything else happens.",
        },
        {
          from: 'coach',
          fr: '...',
          en: '(The baker looks up, says nothing, and waits.)',
        },
        {
          from: 'narrator',
          fr: 'Tom comprend. Il recommence.',
          en: 'Tom understands. He starts again.',
        },
        {
          from: 'user',
          fr: 'Bonjour madame ! Une baguette, s’il vous plaît.',
          en: 'Hello madam! A baguette, please.',
        },
        {
          from: 'coach',
          fr: 'Bonjour ! Voilà. Bonne journée !',
          en: 'Hello! Here you go. Have a good day!',
        },
      ],
      closing: {
        fr: 'Un seul mot change tout.',
        en: 'One single word changes everything.',
      },
    },

    // ── 1. GOALS — what am I learning? ──────────────────────────────────────
    {
      type: 'goals',
      title: "What You'll Be Able to Do",
      frSub: 'Ce que vous saurez faire',
      imageRef: 'lessons/salutations/cover.jpg',
      say: "Here is what you will be able to do by the end of this lesson.",
      goals: [
        { t: 'Open any door', s: 'Greet anyone correctly, at any time of day, formal or casual.' },
        { t: 'Choose tu or vous', s: 'Know instantly which register a situation calls for, and why it matters.' },
        { t: 'Ask how someone is', s: 'Ask « comment ça va ? » and understand the answer you get back.' },
        { t: 'Give your name', s: 'Introduce yourself and ask for a name in return.' },
        { t: 'Be polite', s: 'Say thank you, please, and sorry, in the right register.' },
        { t: 'Take your leave', s: 'End a conversation the way a French speaker actually ends one.' },
      ],
    },

    // ── 2. The one big idea, in three pieces ────────────────────────────────
    {
      type: 'cardDeck',
      title: 'The Big Idea',
      frSub: "La grande idée",
      hint: 'Swipe through the three pieces',
      say: 'Before any word, French makes you choose how close you are to the person.',
      cards: [
        {
          label: 'THE CHOICE',
          head: 'Two ways to say "you"',
          fr: 'tu  /  vous',
          sub: 'tü / voo',
          body: 'Every French conversation begins with this choice. It is not about politeness alone, it is about distance.',
        },
        {
          label: 'CLOSE',
          head: 'tu',
          fr: 'Salut ! Ça va ?',
          sub: 'sah-LÜ, sah VAH',
          body: 'Friends, family, children, classmates, anyone your own age in a relaxed setting.',
        },
        {
          label: 'DISTANT',
          head: 'vous',
          fr: 'Bonjour ! Comment allez-vous ?',
          sub: 'bohn-ZHOOR, koh-mahn tah-lay VOO',
          body: 'Strangers, shopkeepers, colleagues, anyone older, anyone in a professional setting. When unsure, choose vous.',
        },
      ],
    },

    // ── 3. Recognition first: the easiest possible win ──────────────────────
    {
      type: 'tapTable',
      title: 'When to Say What',
      frSub: 'Quand dire quoi',
      say: 'Tap any row to hear it and to see when it is used.',
      cols: ['The moment', 'What you say'],
      rows: [
        {
          cells: ['Morning until about 6pm', 'Bonjour'],
          say: 'Bonjour',
          detail: {
            title: 'Bonjour',
            body: 'The universal daytime greeting, and the safest word in French. It works with anyone, in any setting, formal or not. In a shop it is close to obligatory.',
          },
        },
        {
          cells: ['Evening, when arriving', 'Bonsoir'],
          say: 'Bonsoir',
          detail: {
            title: 'Bonsoir',
            body: 'French switches over to bonsoir once evening begins, roughly 6pm. Using bonjour after dark sounds like you did not notice the time.',
          },
        },
        {
          cells: ['With friends, any time', 'Salut'],
          say: 'Salut',
          detail: {
            title: 'Salut',
            body: 'Casual only. It means both hi and bye. Never use it with a boss, a stranger, or anyone you address as vous.',
          },
        },
        {
          cells: ['Leaving, any register', 'Au revoir'],
          say: 'Au revoir',
          detail: {
            title: 'Au revoir',
            body: 'The standard goodbye. Safe everywhere, exactly like bonjour is on the way in.',
          },
        },
        {
          cells: ['Going to bed', 'Bonne nuit'],
          say: 'Bonne nuit',
          detail: {
            title: 'Bonne nuit',
            body: 'Only for actual sleep. It is not an evening greeting, it is what you say last, on the way to bed.',
          },
        },
      ],
    },

    // ── 4. The trap that ambushes every English speaker ─────────────────────
    {
      type: 'commonErrors',
      title: 'Three Traps',
      frSub: 'Trois pièges',
      say: 'Three mistakes almost every English speaker makes at first.',
      errors: [
        {
          wrong: 'Walking in and asking for what you want',
          right: 'Bonjour, then what you want',
          why: 'In France, « bonjour » is the price of entry. Skipping it reads as rude, even if the rest of your sentence is perfect.',
        },
        {
          wrong: '« Salut » to your boss',
          right: '« Bonjour »',
          why: 'Salut is strictly informal. With anyone you address as vous, it lands as overly familiar.',
        },
        {
          wrong: '« Bonne nuit » when leaving a dinner at 9pm',
          right: '« Bonne soirée »',
          why: 'Bonne nuit is only for going to sleep. To wish someone a good evening as you leave, use bonne soirée.',
        },
      ],
    },

    // ── 5. Vocabulary bank, themed ──────────────────────────────────────────
    {
      type: 'vocabThemes',
      title: 'The Words Themselves',
      frSub: 'Les mots eux-mêmes',
      say: 'Your greetings vocabulary, grouped by the job each word does.',
      themes: [
        {
          title: 'Hello',
          cards: [
            { fr: 'Bonjour', sub: 'bohn-ZHOOR', en: 'Hello / Good morning' },
            { fr: 'Bonsoir', sub: 'bohn-SWAHR', en: 'Good evening' },
            { fr: 'Salut', sub: 'sah-LÜ', en: 'Hi (casual)' },
            { fr: 'Allô', sub: 'ah-LOH', en: 'Hello? (on the phone only)' },
            { fr: 'Bonjour à tous', sub: 'bohn-ZHOOR ah TOOS', en: 'Hello everyone' },
          ],
        },
        {
          title: 'Goodbye',
          cards: [
            { fr: 'Au revoir', sub: 'oh ruh-VWAHR', en: 'Goodbye' },
            { fr: 'À bientôt', sub: 'ah byen-TOH', en: 'See you soon' },
            { fr: 'À demain', sub: 'ah duh-MAN', en: 'See you tomorrow' },
            { fr: 'Bonne nuit', sub: 'bun NWEE', en: 'Good night' },
            { fr: 'Bonne journée', sub: 'bun zhoor-NAY', en: 'Have a good day' },
          ],
        },
        {
          title: 'Politeness',
          cards: [
            { fr: 'Merci', sub: 'mehr-SEE', en: 'Thank you' },
            { fr: 'Merci beaucoup', sub: 'mehr-SEE boh-KOO', en: 'Thank you very much' },
            { fr: 'De rien', sub: 'duh RYEN', en: "You're welcome" },
            { fr: "S'il vous plaît", sub: 'seel voo PLEH', en: 'Please (formal)' },
            { fr: 'Pardon', sub: 'par-DOHN', en: 'Sorry / Excuse me' },
          ],
        },
        {
          title: 'Meeting someone',
          cards: [
            { fr: 'Comment ça va ?', sub: 'koh-mahn sah VAH', en: "How's it going?" },
            { fr: 'Comment allez-vous ?', sub: 'koh-mahn tah-lay VOO', en: 'How are you? (formal)' },
            { fr: "Je m'appelle", sub: 'zhuh ma-PEL', en: 'My name is' },
            { fr: 'Enchanté', sub: 'ahn-shahn-TAY', en: 'Nice to meet you' },
            { fr: 'Madame / Monsieur', sub: 'ma-DAHM / muh-SYUH', en: 'Madam / Sir' },
          ],
        },
      ],
    },

    // ── 6. Flashcards: recall, still low-stakes ─────────────────────────────
    {
      type: 'flashcards',
      title: 'Flip and Recall',
      frSub: 'Retournez et rappelez-vous',
      say: 'Say your answer out loud before you flip each card.',
      cards: [
        { front: 'Hello / Good morning', back: 'Bonjour', say: 'Bonjour' },
        { front: 'Good evening', back: 'Bonsoir', say: 'Bonsoir' },
        { front: 'Hi (to a friend)', back: 'Salut', say: 'Salut' },
        { front: 'Goodbye', back: 'Au revoir', say: 'Au revoir' },
        { front: 'See you soon', back: 'À bientôt', say: 'À bientôt' },
        { front: 'Thank you', back: 'Merci', say: 'Merci' },
        { front: "You're welcome", back: 'De rien', say: 'De rien' },
        { front: 'Please (formal)', back: "S'il vous plaît", say: "S'il vous plaît" },
        { front: 'Excuse me', back: 'Excusez-moi', say: 'Excusez-moi' },
        { front: 'Nice to meet you', back: 'Enchanté', say: 'Enchanté' },
        { front: 'My name is...', back: "Je m'appelle...", say: "Je m'appelle" },
        { front: "How's it going? (casual)", back: 'Comment ça va ?', say: 'Comment ça va ?' },
      ],
    },

    // ── 7. « ça va » gets its own mission: it is the workhorse ──────────────
    {
      type: 'cardDeck',
      title: 'One Phrase, Three Jobs',
      frSub: 'Une phrase, trois usages',
      hint: 'Swipe to see all three',
      say: 'Ça va is the most useful phrase in this whole lesson. Here is why.',
      cards: [
        {
          label: 'AS A QUESTION',
          head: 'Ça va ?',
          fr: 'Ça va ?',
          sub: 'sah VAH',
          body: 'How are you? / Are you okay? Just two words, and it works with anyone you call tu.',
        },
        {
          label: 'AS AN ANSWER',
          head: 'Ça va.',
          fr: 'Ça va, merci.',
          sub: 'sah VAH, mehr-SEE',
          body: "I'm fine, thanks. The same two words answer the question. Only the tone changes.",
        },
        {
          label: 'AS A CHECK',
          head: 'Ça va ?',
          fr: 'Ça va ?',
          sub: 'sah VAH',
          body: 'Everything okay? Used when handing something over, or checking someone is alright.',
        },
      ],
    },

    // ── 8. Guided completion: fill the gap ──────────────────────────────────
    {
      type: 'quiz',
      title: 'Quick Check',
      frSub: 'Vérification rapide',
      say: 'Three quick ones. You already know all of these.',
      questions: [
        {
          q: 'You walk into a shop at 10am. You say...',
          opts: ['Bonsoir', 'Bonjour', 'Bonne nuit'],
          correct: 1,
          why: 'Bonjour covers the whole day until about 6pm, and in a shop it is close to obligatory.',
        },
        {
          q: 'Your friend says « Merci ! ». You answer...',
          opts: ['De rien', 'Pardon', 'Salut'],
          correct: 0,
          why: 'De rien is the everyday "you’re welcome". Literally it means "of nothing".',
        },
        {
          q: '______, comment allez-vous ?',
          opts: ['Salut', 'Bonjour', 'Bonne nuit'],
          correct: 1,
          why: '« Comment allez-vous ? » is formal, so it pairs with bonjour. Salut would clash with it.',
        },
      ],
    },

    // ── 9. Listening ────────────────────────────────────────────────────────
    {
      type: 'listening',
      title: 'At the Bakery, Monday Morning',
      frSub: 'À la boulangerie, lundi matin',
      imageRef: 'lessons/salutations/story-bakery.jpg',
      say: 'Listen to the whole exchange first, then answer.',
      lines: [
        { fr: 'Bonjour madame !', en: 'Hello madam!' },
        { fr: 'Bonjour monsieur, comment allez-vous ?', en: 'Hello sir, how are you?' },
        { fr: 'Ça va bien, merci. Et vous ?', en: "I'm well, thank you. And you?" },
        { fr: 'Très bien. Une baguette, s’il vous plaît.', en: 'Very well. A baguette, please.' },
        { fr: 'Voilà. Merci beaucoup, bonne journée !', en: 'Here you go. Thank you very much, have a good day!' },
        { fr: 'Merci, au revoir !', en: 'Thank you, goodbye!' },
      ],
      questions: [
        {
          q: 'What time of day is this?',
          opts: ['Morning', 'Late evening', 'The middle of the night'],
          correct: 0,
          why: 'They use bonjour, not bonsoir, so it is still daytime.',
        },
        {
          q: 'Are they using tu or vous?',
          opts: ['tu', 'vous', 'Neither'],
          correct: 1,
          why: '« Comment allez-vous ? » and « s’il vous plaît » are both vous forms. This is a shop, so vous is expected.',
        },
        {
          q: 'How does the customer say they are doing?',
          opts: ['Badly', 'Well', 'They do not answer'],
          correct: 1,
          why: '« Ça va bien, merci » means "I’m doing well, thank you".',
        },
        {
          q: 'What does the customer buy?',
          opts: ['A coffee', 'A baguette', 'Nothing'],
          correct: 1,
          why: '« Une baguette, s’il vous plaît. »',
        },
      ],
    },

    // ── 10. Speak it ────────────────────────────────────────────────────────
    {
      type: 'practice',
      title: 'Say It Out Loud',
      frSub: 'Dites-le à voix haute',
      skill: 'speak',
      say: 'Tap each one, listen, then say it back. Your voice is scored.',
      itemIds: SPEAK_IDS,
    },

    // ── 11. Roleplay: the real situation ────────────────────────────────────
    {
      type: 'scenario',
      title: 'Your Turn at the Bakery',
      frSub: 'À vous, à la boulangerie',
      say: 'Now you take the customer’s side of the conversation.',
      setting: 'BOULANGERIE · PARIS, MORNING',
      turns: [
        {
          ai: 'Bonjour !',
          en: 'Hello!',
          user: 'Bonjour madame !',
        },
        {
          ai: 'Comment allez-vous ?',
          en: 'How are you?',
          user: 'Ça va bien, merci. Et vous ?',
        },
        {
          ai: 'Très bien, merci. Vous désirez ?',
          en: 'Very well, thank you. What would you like?',
          user: 'Une baguette, s’il vous plaît.',
        },
        {
          ai: 'Voilà, deux euros.',
          en: 'Here you go, two euros.',
          user: 'Merci beaucoup !',
        },
        {
          ai: 'Je vous en prie. Bonne journée !',
          en: "You're welcome. Have a good day!",
          user: 'Au revoir !',
        },
      ],
    },

    // ── 12. Introducing yourself ────────────────────────────────────────────
    {
      type: 'examples',
      title: 'Giving Your Name',
      frSub: 'Donner son nom',
      say: 'Two ways to ask, two ways to answer. The only difference is register.',
      examples: [
        {
          fr: 'Comment vous appelez-vous ?',
          en: 'What is your name?',
          note: 'Formal. Literally "how do you call yourself?"',
        },
        {
          fr: 'Comment tu t’appelles ?',
          en: "What's your name?",
          note: 'Casual. Same question, tu form.',
        },
        {
          fr: 'Je m’appelle Claire, et vous ?',
          en: 'My name is Claire, and you?',
          note: 'Answer, then hand the question straight back. This is what keeps a conversation moving.',
        },
        {
          fr: 'Enchanté !',
          en: 'Nice to meet you!',
          note: 'Written enchantée if the speaker is a woman. Pronounced exactly the same.',
        },
      ],
    },

    // ── 13. Reading ─────────────────────────────────────────────────────────
    {
      type: 'reading',
      title: 'A Morning in the Building',
      frSub: 'Un matin dans l’immeuble',
      imageRef: 'lessons/salutations/ca-va.jpg',
      say: 'Read it once through. Do not stop on words you do not know.',
      text:
        "Il est huit heures. Madame Colin sort de son appartement. Dans l’ascenseur, elle voit son voisin. « Bonjour monsieur, comment allez-vous ? » « Ça va bien, merci, et vous ? » « Très bien ! » Ils arrivent en bas. « Bonne journée, madame ! » « Merci, à demain ! » Dans la rue, elle voit son ami Marc. « Salut Marc ! Ça va ? » « Salut ! Ça va, et toi ? »",
      questions: [
        { q: 'What does Madame Colin say to her neighbour in the lift?', a: '« Bonjour monsieur, comment allez-vous ? » She uses vous, because he is a neighbour, not a close friend.' },
        { q: 'Why does she say « salut » to Marc but not to her neighbour?', a: 'Marc is her friend, so she uses tu and the casual greeting. The neighbour gets vous and bonjour.' },
        { q: 'How do the neighbour and Madame Colin part?', a: '« Bonne journée » and « à demain », so they expect to see each other again tomorrow.' },
        { q: 'Find two ways of asking how someone is in this text.', a: '« Comment allez-vous ? » (formal) and « Ça va ? » (casual).' },
      ],
    },

    // ── 14. Dictée ──────────────────────────────────────────────────────────
    {
      type: 'dictation',
      title: 'Spell What You Hear',
      frSub: 'Écrivez ce que vous entendez',
      say: 'Listen as many times as you need, then build the sentence.',
      itemIds: DICTATION_IDS,
    },

    // ── 15. Listen and choose ───────────────────────────────────────────────
    {
      type: 'practice',
      title: 'By Ear: Formal or Casual?',
      frSub: 'À l’oreille : formel ou familier ?',
      skill: 'listen',
      say: 'Listen closely. Register is carried by the words, not the tone.',
      itemIds: LISTEN_IDS,
    },

    // ── 16. Review deck ─────────────────────────────────────────────────────
    {
      type: 'reviewDeck',
      title: 'The Whole System, One Deck',
      frSub: 'Tout le système, un paquet',
      imageRef: 'lessons/salutations/tu-vous.jpg',
      say: 'Rate each card as you truly feel it. What you mark as hard comes back sooner.',
      cards: [
        { front: 'Bonjour', back: 'Daytime, anyone, anywhere. The safest word in French.', say: 'Bonjour' },
        { front: 'Bonsoir', back: 'From about 6pm. Arriving, not leaving.', say: 'Bonsoir' },
        { front: 'Salut', back: 'Casual only. Means both hi and bye. Never with vous.', say: 'Salut' },
        { front: 'Au revoir', back: 'The standard goodbye, safe in every register.', say: 'Au revoir' },
        { front: 'Bonne nuit', back: 'Only for going to sleep. Not an evening greeting.', say: 'Bonne nuit' },
        { front: 'Bonne soirée', back: 'Leaving in the evening. This is the one people mix up with bonne nuit.', say: 'Bonne soirée' },
        { front: 'tu or vous?', back: 'Friends, family, children take tu. Everyone else takes vous. When unsure, vous.' },
        { front: 'Ça va ?', back: 'Question and answer both. The workhorse of casual French.', say: 'Ça va ?' },
        { front: 'Comment allez-vous ?', back: 'The vous version of ça va. Formal, and always paired with bonjour.', say: 'Comment allez-vous ?' },
        { front: 'Merci / De rien', back: 'Thank you, and the everyday reply. Je vous en prie is the formal reply.', say: 'Merci. De rien.' },
        { front: "S'il vous plaît / s'il te plaît", back: 'Please, in vous and tu. Same phrase, one word swapped.', say: "S'il vous plaît" },
        { front: 'The bakery rule', back: 'Bonjour first, then what you want. Always in that order.' },
      ],
    },

    // ── 17. Where you stand ─────────────────────────────────────────────────
    {
      type: 'progressCheck',
      title: 'Where You Stand',
      frSub: 'Où vous en êtes',
      say: 'A quick look at how far you have come in one lesson.',
      body:
        'You can now open a conversation, ask how someone is, give your name, say thank you, and take your leave, in both registers. That is a complete first exchange, and it is the hardest one to start.',
      stats: [
        { k: 'EXPRESSIONS', v: '21' },
        { k: 'REGISTERS', v: 'tu + vous' },
        { k: 'XP', v: '+60' },
        { k: 'NEXT', v: 'Se présenter' },
      ],
    },

    // ── 18. The exam ────────────────────────────────────────────────────────
    {
      type: 'quiz',
      title: 'Final Quiz: Greetings',
      frSub: 'Quiz final : les salutations',
      questions: [
        {
          q: 'You are greeting your new boss at 9am. You say...',
          opts: ['Salut', 'Bonjour', 'Bonsoir'],
          correct: 1,
          why: 'A boss takes vous, and it is morning. Salut would be far too familiar.',
        },
        {
          q: 'Which one is the casual way to say goodbye?',
          opts: ['Au revoir', 'Salut', 'Bonne nuit'],
          correct: 1,
          why: 'Salut works at both ends of a casual conversation, hello and goodbye.',
        },
        {
          q: 'You are leaving a dinner party at 10pm. You say...',
          opts: ['Bonne nuit', 'Bonne soirée', 'Bonjour'],
          correct: 1,
          why: 'Bonne soirée wishes someone a good evening. Bonne nuit is only for going to sleep.',
        },
        {
          q: 'A client thanks you at work. The formal reply is...',
          opts: ['De rien', 'Je vous en prie', 'Salut'],
          correct: 1,
          why: 'De rien is casual. In a professional setting, je vous en prie is the polite reply.',
        },
        {
          q: '« Comment allez-vous ? » is asked to...',
          opts: ['A close friend', 'Someone you address as vous', 'Children only'],
          correct: 1,
          why: 'The allez-vous form is the vous form. With a friend you would say « ça va ? ».',
        },
        {
          q: 'You walk into a boulangerie. What comes first?',
          opts: ['What you want to buy', 'Bonjour', 'Merci'],
          correct: 1,
          why: 'Bonjour always comes first in France. Naming what you want straight away reads as abrupt.',
        },
        {
          q: 'Which is the correct answer to « Ça va ? »',
          opts: ['Ça va, merci.', 'Je m’appelle Marc.', 'Au revoir.'],
          correct: 0,
          why: 'Ça va is both the question and the answer. Only the tone changes.',
        },
        {
          q: '« Je m’appelle » means...',
          opts: ['I am called', 'I am fine', 'I am sorry'],
          correct: 0,
          why: 'Literally "I call myself". It is how French gives a name.',
        },
        {
          q: 'Someone says « Enchanté ». What just happened?',
          opts: ['They said goodbye', 'You were just introduced', 'They apologised'],
          correct: 1,
          why: 'Enchanté is what you say on meeting someone for the first time.',
        },
        {
          q: 'Which greeting works ONLY on the telephone?',
          opts: ['Allô', 'Bonjour', 'Salut'],
          correct: 0,
          why: 'Allô is for answering a call. Using it face to face would sound strange.',
        },
        {
          q: 'Your friend is struggling with a heavy box. You ask « Ça va ? ». You mean...',
          opts: ['Hello', 'Are you okay?', 'Goodbye'],
          correct: 1,
          why: 'Ça va also works as a check that someone is alright.',
        },
        {
          q: 'When you are not sure whether to use tu or vous, you should...',
          opts: ['Use tu, it is friendlier', 'Use vous', 'Avoid saying you at all'],
          correct: 1,
          why: 'Vous is never wrong. Too much distance is easy to fix, too little is not.',
        },
      ],
    },

    // ── 19. Finish strong ───────────────────────────────────────────────────
    {
      type: 'roundup',
      title: 'One Word Opens Every Door',
      frSub: 'Un mot ouvre toutes les portes',
      imageRef: 'lessons/salutations/roundup.jpg',
      say: 'You just finished your first French lesson. Here is what to hold on to.',
      body:
        'You started this lesson unable to open a conversation in French. You can now greet, ask, answer, thank, and take your leave, and you know which register to choose. Say bonjour to someone tomorrow and the rest follows.',
      points: [
        'Bonjour is the price of entry in France. It comes before anything else.',
        'tu for friends and family, vous for everyone else. When unsure, vous.',
        'Bonsoir from about 6pm, and bonne nuit only for going to sleep.',
        'Ça va works as a question and as an answer.',
        'Merci gets de rien casually, je vous en prie formally.',
        'Answer, then hand the question straight back with « et vous ? ».',
      ],
    },
  ],
};

// ── Apply ───────────────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

// House style, enforced here so a bad string never reaches the DB (the seed
// test catches it later, but later is after a publish).
function styleIssues(l: Lesson): string[] {
  const bad: string[] = [];
  const walk = (v: unknown, path: string) => {
    if (typeof v === 'string') {
      if (v.includes('—')) bad.push(`${path}: em dash in "${v.slice(0, 60)}"`);
      if (/honest/i.test(v)) bad.push(`${path}: "honest" in "${v.slice(0, 60)}"`);
    } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`));
    else if (v && typeof v === 'object') {
      for (const [k, x] of Object.entries(v)) walk(x, `${path}.${k}`);
    }
  };
  walk(l, 'lesson');
  return bad;
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) {
    die(`lesson invalid:\n${lessonIssues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);
  }

  const style = styleIssues(LESSON);
  if (style.length) die(`house style:\n${style.map((s) => `  ${s}`).join('\n')}`);

  const dupeIds = ALL_IDS.filter((id, i) => ALL_IDS.indexOf(id) !== i);
  if (dupeIds.length) die(`duplicate itemIds: ${[...new Set(dupeIds)].join(', ')}`);

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every item this lesson names must already exist and be published.
    // `drills` is a Postgres enum array. node-pg does not have a built-in
    // parser for arrays of a USER-DEFINED enum type, so it hands the column
    // back as the raw literal '{flashcard,review}' rather than a JS array.
    // Spreading that string would splice it apart character by character, so
    // the array is unwrapped in SQL instead and reassembled here.
    const found = await client.query<{ id: string; drills: string[] }>(
      `select id, array(select unnest(drills)::text) as drills
         from content_items
        where id = any($1) and status = 'published'`,
      [ALL_IDS]
    );
    const have = new Set(found.rows.map((r) => r.id));
    const missing = ALL_IDS.filter((id) => !have.has(id));
    if (missing.length) {
      die(`these itemIds are not published in the corpus:\n${missing.map((m) => `  ${m}`).join('\n')}`);
    }

    // The dictée mission needs its items to actually carry the dictation drill.
    const drillsById = new Map(found.rows.map((r) => [r.id, r.drills]));
    const badDictation = DICTATION_IDS.filter((id) => !(drillsById.get(id) ?? []).includes('dictation'));
    if (badDictation.length) {
      die(`dictation mission names items without the 'dictation' drill: ${badDictation.join(', ')}`);
    }

    const patches = DRILL_PATCHES.map((p) => {
      const current = drillsById.get(p.id) ?? [];
      const next = [...new Set([...current, ...p.add])];
      return { ...p, current, next, changed: next.length !== current.length };
    }).filter((p) => p.changed);

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = 'a1.01'`
    );
    if (unitRow.rowCount !== 1) die('unit "a1.01" not found in content_units');
    const unitBody = unitRow.rows[0].body;
    const nextUnit: Unit = {
      ...unitBody,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) {
      die(`post-state fails validateUnit:\n${unitIssues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);
    }

    const types = LESSON.sections.map((s) => s.type);
    console.log(`\n  lesson: ${LESSON.id} "${LESSON.title}" v${LESSON.version}`);
    console.log(`  missions: ${types.length} (${new Set(types).size} distinct types)`);
    console.log(`    ${types.join(', ')}`);
    console.log(`  itemIds: ${ALL_IDS.length}, all published ✓`);
    console.log(`  speak practice: ${SPEAK_IDS.length} items | listen practice: ${LISTEN_IDS.length} | dictée: ${DICTATION_IDS.length}`);
    const finalQuiz = LESSON.sections.filter((s) => s.type === 'quiz').at(-1);
    console.log(`  final quiz: ${finalQuiz && finalQuiz.type === 'quiz' ? (finalQuiz.questions?.length ?? 0) : 0} questions`);
    console.log(`  overview: "${LESSON.overview?.titleEn}" (${LESSON.overview?.minutes} min, difficulty ${LESSON.overview?.difficulty})`);
    if (patches.length) {
      for (const p of patches) console.log(`  drills patch: ${p.id} ${JSON.stringify(p.current)} → ${JSON.stringify(p.next)}`);
    } else {
      console.log('  drills patch: none needed');
    }
    console.log(`  unit a1.01 lessonIds: ${JSON.stringify(nextUnit.lessonIds)}`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');

    for (const p of patches) {
      // Cast explicitly: the column is an array of the drill_kind enum, and a
      // bare text[] parameter will not coerce on its own.
      const r = await client.query(
        `update content_items set drills = $1::text[]::drill_kind[] where id = $2`,
        [p.next, p.id]
      );
      if (r.rowCount !== 1) {
        await client.query('rollback');
        die(`drills patch for ${p.id} touched ${r.rowCount} rows — rolled back`);
      }
    }

    const lessonRes = await client.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body,
         status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]
    );
    if (lessonRes.rowCount !== 1) {
      await client.query('rollback');
      die(`lesson upsert touched ${lessonRes.rowCount} rows — rolled back`);
    }

    const unitRes = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = 'a1.01'`,
      [JSON.stringify(nextUnit)]
    );
    if (unitRes.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${unitRes.rowCount} rows — rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ a1.01.l1 rebuilt as a ${types.length}-mission journey${patches.length ? `, ${patches.length} drills patched` : ''}. Run pnpm content:publish to ship it OTA.\n`
    );
  } catch (e) {
    await client.query('rollback').catch(() => {});
    throw e;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
