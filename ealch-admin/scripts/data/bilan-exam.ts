// a1.30.l2 "L'examen A1": the twelve mixed rounds.
//
// Sixty questions under exam conditions. The quiz section carries `exam: true`,
// which means the renderer shows no explanation and offers no jump back while
// the learner answers, and hands the whole review over on the result card
// instead. No round declares `targets`, so no remediation drill fires between
// rounds either. Both halves of that matter: a drill mid-exam would teach the
// thing the next round is about to test.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHY THE ROUNDS ARE SITUATIONS AND NOT LESSONS
// ══════════════════════════════════════════════════════════════════════════
//
// a1.30.l1 already asks lesson by lesson, and a labelled round is a hint: told
// the round is about avoir, nobody reaches for être. So these twelve are named
// for the MOMENT they belong to, and each one crosses three to five units on
// purpose. "At the counter" wants a greeting, a number, a partitive and a
// politeness formula inside five questions, which is what a counter actually
// wants.
//
// The label still has to say something, because the result card lists rounds by
// name and "Part 7 of 12" would make the breakdown unreadable. A situation is
// the most information that can be given without naming the unit.
//
// ── On `why` under exam conditions ─────────────────────────────────────────
//
// Every question still carries one, and not only because the density validator
// requires it: the result card collects the missed questions and prints their
// `why` underneath the score. Written for a reader who has just finished and
// is looking at a wrong answer with no memory of what they picked, so each one
// names the rule AND the lesson to go back to.

import type { QuizRound } from '../../../ealch-v2/src/content/schema.ts';
import { spreadAnswers } from './bilan-spread.ts';

/** The exam section's own id. Same self-pointing arrangement as the review
 *  lesson, and doubly moot here: `exam: true` hides the jump anyway. */
export const REF_EXAM = 's03-exam';

const HEAR = (clip: string) => ({ mode: 'tts' as const, lang: 'fr-FR', clip });

/** As written. `EXAM_ROUNDS` below is this with the correct answers spread. */
const AUTHORED_EXAM_ROUNDS: QuizRound[] = [
  {
    id: 'x01-counter',
    label: 'At the counter',
    say: 'A shop, a queue, and somebody waiting for you to start.',
    questions: [
      {
        q: 'It is ten in the morning and you are third in the queue. You reach the front. First word?',
        format: 'mcq',
        opts: ['Salut', 'Bonjour', 'Allô', 'Excusez-moi'],
        correct: 1,
        why: 'Bonjour, before anything else. Opening with the order rather than the greeting is the one thing that reads as rude. Lesson 1, greetings.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: Two coffees, please',
        format: 'typeIn',
        accept: ["Deux cafés, s'il vous plaît", 'deux cafes sil vous plait'],
        answer: "Deux cafés, s'il vous plaît.",
        why: "Deux cafés, s'il vous plaît. A counted thing takes the plain number, and the s on cafés is silent but written. Lessons 2 and 1.",
        ref: REF_EXAM,
      },
      {
        q: 'You want coffee by weight to take home, not a cup. Which?',
        format: 'mcq',
        opts: ['un café', 'le café', 'du café', 'de café'],
        correct: 2,
        why: 'du café. un café is a cup and le café is the category. The partitive is the one that means some of it. Lesson 8, partitive articles.',
        ref: REF_EXAM,
      },
      {
        q: 'The total is 12,40 €. How much?',
        format: 'mcq',
        opts: ['1240 euros', '12 euros 40', '124 euros', '12 euros 4'],
        correct: 1,
        why: 'Twelve euros forty. The comma is the decimal point in French. Lesson 4, large numbers.',
        ref: REF_EXAM,
      },
      {
        q: 'They say merci. You answer?',
        format: 'mcq',
        opts: ['Merci beaucoup', 'De rien', 'Pardon', 'Bonne nuit'],
        correct: 1,
        why: 'De rien. Answering merci with merci leaves the exchange open. Lesson 1, greetings.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x02-introducing',
    label: 'Saying who you are',
    say: 'Your name, your job, your age, where you are from.',
    questions: [
      {
        q: 'Write the French for: I am a teacher',
        format: 'typeIn',
        accept: ['Je suis professeur'],
        answer: 'Je suis professeur.',
        why: 'No article after être in front of a job. Je suis un professeur is the reflex carried over from English. Lesson 7, indefinite articles.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: I am twenty-five',
        format: 'typeIn',
        accept: ["J'ai vingt-cinq ans", 'jai vingt cinq ans'],
        answer: "J'ai vingt-cinq ans.",
        why: 'French HAS its age and never leaves ans off. Lessons 11 and 3.',
        ref: REF_EXAM,
      },
      {
        q: 'A woman from Germany says which?',
        format: 'mcq',
        opts: ['Je suis Allemande.', 'Je suis allemande.', 'Je suis une allemande.', "Je suis de l'Allemagne."],
        correct: 1,
        why: 'Je suis allemande. Lowercase as an adjective, feminine agreement, and no article. Lessons 25 and 10.',
        ref: REF_EXAM,
      },
      {
        q: 'Pointing at a colleague across the room, you say?',
        format: 'mcq',
        opts: ['Il est mon collègue.', "C'est mon collègue.", 'Ce sont mon collègue.', 'Il a mon collègue.'],
        correct: 1,
        why: "C'est. Anything with mon, un or a name in front of it takes c'est, never il est. Lesson 10, être.",
        ref: REF_EXAM,
      },
      {
        q: 'Say it: « Je viens de Lyon. »',
        format: 'speak',
        target: 'Je viens de Lyon.',
        accept: ['Je viens de Lyon'],
        answer: 'Je viens de Lyon.',
        why: 'A town takes de and nothing else. A country would take de, du or des depending on its article. Lessons 10 and 25.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x03-people',
    label: 'Your people and your things',
    say: 'Who belongs to whom, and whose is whose.',
    questions: [
      {
        q: "Write the French for: Marie's brother",
        format: 'typeIn',
        accept: ['le frère de Marie', 'le frere de marie'],
        answer: 'le frère de Marie',
        why: 'French has no apostrophe s, so the phrase turns around. Lesson 19, the family.',
        ref: REF_EXAM,
      },
      {
        q: 'Her father. Which?',
        format: 'mcq',
        opts: ['sa père', 'ses père', 'son père', 'leur père'],
        correct: 2,
        why: 'son père. The possessive agrees with the thing owned, not with the owner. Lesson 20, possessives.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « ma amie ». Fix it.',
        format: 'errorSpot',
        accept: ['mon amie'],
        answer: 'mon amie',
        why: 'mon amie, though amie is feminine. ma would put two vowels together. Lesson 20, possessives.',
        ref: REF_EXAM,
      },
      {
        q: 'Which article does bébé take?',
        format: 'mcq',
        opts: ['le, whatever the baby is', 'la, whatever the baby is', 'le for a boy, la for a girl', 'either'],
        correct: 0,
        why: 'le bébé, always. The word has a gender and the child has one, and they are unrelated. Lesson 19, the family.',
        ref: REF_EXAM,
      },
      {
        q: 'One child, belonging to two parents. Which?',
        format: 'mcq',
        opts: ['leurs enfant', 'leur enfant', 'leurs enfants', 'leur enfants'],
        correct: 1,
        why: 'leur enfant. The s on leur comes from the thing owned, and there is one child. Lesson 20, possessives.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x04-describing',
    label: 'Describing somebody',
    say: 'What they look like, and where the describing word goes.',
    questions: [
      {
        q: 'Write: a big red house',
        format: 'typeIn',
        accept: ['une grande maison rouge'],
        answer: 'une grande maison rouge',
        why: 'One from each group with the noun in between: grande in front, rouge behind. Lesson 18, placement.',
        ref: REF_EXAM,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['un beau homme', 'un bel homme', 'une bel homme', 'un belle homme'],
        correct: 1,
        why: 'un bel homme. beau becomes bel in front of a vowel sound, and it is not the feminine. Lesson 17, basic adjectives.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « Il a les yeux marrons ». Fix it.',
        format: 'errorSpot',
        accept: ['Il a les yeux marron'],
        answer: 'Il a les yeux marron.',
        why: 'marron never agrees, because it was a chestnut before it was a colour. Lessons 27 and 16.',
        ref: REF_EXAM,
      },
      {
        q: 'Listen. Which did you hear?',
        format: 'listenChoose',
        audio: HEAR('Elle est grande.'),
        opts: ['Elle est grand.', 'Elle est grande.', 'Il est grand.', 'Elles sont grandes.'],
        correct: 1,
        why: 'grande, with the d released. The masculine grand is [GRAHⁿ] and stops on the nasal. Lesson 17, basic adjectives.',
        ref: REF_EXAM,
      },
      {
        q: 'The man is tall. Which?',
        format: 'mcq',
        opts: ["C'est un grand homme.", "C'est un homme grand.", "C'est un homme grande.", "C'est une grande homme."],
        correct: 1,
        why: "un homme grand is tall. un grand homme is a great man. Position changes the meaning. Lesson 18, placement.",
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x05-clock',
    label: 'The clock and the calendar',
    say: 'What time, what day, what month.',
    questions: [
      {
        q: 'Somebody asks the time and it is eight. Answer?',
        format: 'mcq',
        opts: ['Il est huit.', 'Il est à huit heures.', 'Il est huit heures.', "C'est huit heures."],
        correct: 2,
        why: 'Il est huit heures. heures is never dropped, and à books rather than reports. Lesson 15, telling the time.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: on the twelfth of March',
        format: 'typeIn',
        accept: ['le douze mars'],
        answer: 'le douze mars',
        why: 'le douze mars. A date takes le, a plain counting number, and nothing between the number and the month. Lesson 13, months.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « Il est midi et demie ». Fix it.',
        format: 'errorSpot',
        accept: ['Il est midi et demi'],
        answer: 'Il est midi et demi.',
        why: 'midi et demi, with no e. midi is masculine, and the error is inaudible so nothing ever corrects it. Lesson 15.',
        ref: REF_EXAM,
      },
      {
        q: 'A board reads 16:10. Said out loud in the everyday way?',
        format: 'mcq',
        opts: ['seize heures et dix', 'quatre heures dix', 'seize heures et demie', 'quatre heures et dix'],
        correct: 1,
        why: 'quatre heures dix in speech, seize heures dix as printed. The twenty-four hour clock never takes et. Lesson 15.',
        ref: REF_EXAM,
      },
      {
        q: 'Every Monday, as a habit. Which?',
        format: 'mcq',
        opts: ['lundi', 'les lundis', 'le lundi', 'en lundi'],
        correct: 2,
        why: 'le lundi. The le makes it every week, and the English plural is wrong here. Lesson 12, days.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x06-plan',
    label: 'Making a plan',
    say: 'Fixing a time with somebody, out loud.',
    questions: [
      {
        q: 'Write the French for: Are you free on Saturday? (tu, using est-ce que)',
        format: 'typeIn',
        accept: ['Est-ce que tu es libre samedi ?', 'est ce que tu es libre samedi'],
        answer: 'Est-ce que tu es libre samedi ?',
        why: 'Est-ce que in front, and a day name takes no preposition. Lessons 22 and 12.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « On se voit sur samedi ». Fix it.',
        format: 'errorSpot',
        accept: ['On se voit samedi'],
        answer: 'On se voit samedi.',
        why: 'No preposition on a day. sur is the English on arriving where French wants nothing. Lesson 12, days.',
        ref: REF_EXAM,
      },
      {
        q: 'Which verb form goes with on?',
        format: 'mcq',
        opts: ['sommes', 'est', 'sont', 'êtes'],
        correct: 1,
        why: 'On est. on means we and takes the il form. Lesson 9, subject pronouns.',
        ref: REF_EXAM,
      },
      {
        q: 'You want to say around eight, without promising the minute. Which?',
        format: 'mcq',
        opts: ['à huit heures pile', 'vers huit heures', 'à vers huit heures', 'huit heures précises'],
        correct: 1,
        why: 'vers huit heures. vers replaces à rather than joining it, and pile and précises mean the opposite. Lesson 15.',
        ref: REF_EXAM,
      },
      {
        q: 'Listen. Which day?',
        format: 'listenChoose',
        audio: HEAR('jeudi'),
        opts: ['mardi', 'mercredi', 'jeudi', 'vendredi'],
        correct: 2,
        why: 'jeudi, [zheu-DEE]. It is the one most often confused with mardi over a phone. Lesson 12, days.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x07-asking',
    label: 'Asking for what you need',
    say: 'Questions, and saying no.',
    questions: [
      {
        q: 'You want to know WHERE the station is. Which word?',
        format: 'mcq',
        opts: ['quand', 'où', 'comment', 'pourquoi'],
        correct: 1,
        why: 'où gets you a place. Lesson 23, question words.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: How many children do you have? (vous)',
        format: 'typeIn',
        accept: ["Combien d'enfants avez-vous ?", 'combien denfants avez vous'],
        answer: "Combien d'enfants avez-vous ?",
        why: 'combien always carries de, elided before a vowel. Lesson 23, question words.',
        ref: REF_EXAM,
      },
      {
        q: 'Turn « J\'ai une voiture » negative.',
        format: 'typeIn',
        accept: ["Je n'ai pas de voiture", 'je nai pas de voiture'],
        answer: "Je n'ai pas de voiture.",
        why: 'After avoir, une collapses to de. Lesson 21, negation.',
        ref: REF_EXAM,
      },
      {
        q: 'Which is wrong?',
        format: 'mcq',
        opts: ['Tu es prêt ?', 'Es-tu prêt ?', 'Est-ce que tu es prêt ?', 'Est-ce que es-tu prêt ?'],
        correct: 3,
        why: 'The last one stacks two methods and asks the question twice. Lesson 22, yes and no questions.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « Quel heure est-il ? ». Fix it.',
        format: 'errorSpot',
        accept: ['Quelle heure est-il ?', 'quelle heure est il'],
        answer: 'Quelle heure est-il ?',
        why: 'heure is feminine, so quelle. All four forms sound the same, so only writing catches it. Lesson 23.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x08-market',
    label: 'At the market',
    say: 'Food, amounts, and the little word in front of it.',
    questions: [
      {
        q: 'Write the French for: a kilo of tomatoes',
        format: 'typeIn',
        accept: ['un kilo de tomates'],
        answer: 'un kilo de tomates',
        why: 'A quantity takes plain de, never du or des. Lesson 8, partitive articles.',
        ref: REF_EXAM,
      },
      {
        q: 'You like fish in general. Which?',
        format: 'mcq',
        opts: ['J\'aime du poisson.', "J'aime le poisson.", "J'aime de poisson.", "J'aime un poisson."],
        correct: 1,
        why: 'aimer points at the whole category, so le. Lesson 26, food.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « Je mange le pain ». Fix it.',
        format: 'errorSpot',
        accept: ['Je mange du pain'],
        answer: 'Je mange du pain.',
        why: 'manger takes an amount. le pain says you ate the whole loaf. Lesson 26, food.',
        ref: REF_EXAM,
      },
      {
        q: 'Listen. Which did you hear?',
        format: 'listenChoose',
        audio: HEAR('les haricots verts'),
        opts: ['les haricots verts', 'les abricots verts', "l'ail et les haricots", 'les carottes vertes'],
        correct: 0,
        why: 'les haricots verts, and the h is aspirated so there is no z linking into it. Lesson 26, food.',
        ref: REF_EXAM,
      },
      {
        q: 'Turn « Je mange du fromage » negative.',
        format: 'mcq',
        opts: ['Je ne mange pas du fromage.', 'Je ne mange pas de fromage.', 'Je ne mange pas le fromage.', 'Je mange pas du fromage.'],
        correct: 1,
        why: 'The partitive collapses to de under a negative. Lesson 8, partitive articles.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x09-directions',
    label: 'Finding your way',
    say: 'Where a thing is, and where you are going.',
    questions: [
      {
        q: 'Write the French for: The bag is under the table',
        format: 'typeIn',
        accept: ['Le sac est sous la table'],
        answer: 'Le sac est sous la table.',
        why: 'sous goes straight onto the noun, with no de. Lesson 24, prepositions of place.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « Nous habitons près la gare ». Fix it.',
        format: 'errorSpot',
        accept: ['Nous habitons près de la gare', 'nous habitons pres de la gare'],
        answer: 'Nous habitons près de la gare.',
        why: 'près DE. A multi-word preposition needs de before the noun. Lesson 24.',
        ref: REF_EXAM,
      },
      {
        q: 'Going to Japan. Which?',
        format: 'mcq',
        opts: ['en Japon', 'à Japon', 'au Japon', 'aux Japon'],
        correct: 2,
        why: 'au Japon. le Japon is masculine and starts on a consonant, so à + le gives au. Lesson 25, countries.',
        ref: REF_EXAM,
      },
      {
        q: 'What does « à + les » become?',
        format: 'mcq',
        opts: ['aux', 'au', 'des', "à l'"],
        correct: 0,
        why: 'aux, as in aux États-Unis and aux dents. Lesson 24, prepositions of place.',
        ref: REF_EXAM,
      },
      {
        q: 'You are going to a friend\'s house. Which word?',
        format: 'mcq',
        opts: ['dans', 'chez', 'entre', 'devant'],
        correct: 1,
        why: 'chez, at somebody\'s place. English has no single word for it. Lesson 24.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x10-home',
    label: 'At home',
    say: 'The rooms, and what is in them.',
    questions: [
      {
        q: 'You need the toilet. What do you ask for?',
        format: 'mcq',
        opts: ['la salle de bain', 'la toilette', 'les toilettes', 'la chambre'],
        correct: 2,
        why: 'les toilettes, plural, and usually a different room from the salle de bain. Lesson 29, the house.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: the bedroom',
        format: 'typeIn',
        accept: ['la chambre'],
        answer: 'la chambre',
        why: 'la chambre, the room with a bed in it. For a room in general it is la pièce. Lesson 29, the house.',
        ref: REF_EXAM,
      },
      {
        q: 'Which article does « armoire » take?',
        format: 'mcq',
        opts: ['le', 'la', "l', and it is masculine", 'either'],
        correct: 1,
        why: "une armoire, feminine, written l'armoire with the article hidden under the apostrophe. Lesson 5, noun gender.",
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: The cat sleeps on the sofa',
        format: 'typeIn',
        accept: ['Le chat dort sur le canapé', 'le chat dort sur le canape'],
        answer: 'Le chat dort sur le canapé.',
        why: 'sur le canapé. One-word preposition, straight onto the noun. Lessons 24 and 29.',
        ref: REF_EXAM,
      },
      {
        q: 'An advert offers « trois pièces ». What is that?',
        format: 'mcq',
        opts: ['Three bedrooms', 'Three floors', 'Three rooms, kitchen and bathroom not counted', 'Three flats'],
        correct: 2,
        why: 'Three rooms in total, and the kitchen and bathroom are not among them. Lesson 29, the house.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x11-weather',
    label: 'The weather and the year',
    say: 'What the sky is doing, and when.',
    questions: [
      {
        q: 'It is hot outside. Which?',
        format: 'mcq',
        opts: ['Il est chaud.', "Il a chaud.", 'Il fait chaud.', 'Il y a chaud.'],
        correct: 2,
        why: 'Il fait chaud. The weather makes, a person has, a thing is. Lesson 14, seasons and weather.',
        ref: REF_EXAM,
      },
      {
        q: 'You are too warm. Which?',
        format: 'mcq',
        opts: ['Je suis chaud.', "J'ai chaud.", 'Il fait chaud pour moi.', 'Je fais chaud.'],
        correct: 1,
        why: "J'ai chaud. Je suis chaud is real French about something else. Lessons 11 and 14.",
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: in spring',
        format: 'typeIn',
        accept: ['au printemps'],
        answer: 'au printemps',
        why: 'au printemps, the only season that takes au. Lesson 14, seasons and weather.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « Il fait pleut ». Fix it.',
        format: 'errorSpot',
        accept: ['Il pleut'],
        answer: 'Il pleut.',
        why: 'pleut is already the whole thing. Welding it to il fait gives two verbs and no sentence. Lesson 14.',
        ref: REF_EXAM,
      },
      {
        q: 'Listen. Which season?',
        format: 'listenChoose',
        audio: HEAR("en automne"),
        opts: ['en été', 'en automne', 'en hiver', 'au printemps'],
        correct: 1,
        why: 'en automne, [ahⁿ-noh-TONN]. The m is silent and the n at the end is real. Lesson 14.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x12-repair',
    label: 'When it goes wrong',
    say: 'The last five. Mixed, and no warning about which lesson.',
    questions: [
      {
        q: 'You understood nothing at all. What do you say?',
        format: 'mcq',
        opts: ['un instant', "d'accord", 'je ne comprends pas', 'plus lentement'],
        correct: 2,
        why: 'Say you have not understood. The other three answer different problems and get you something you did not need. Lesson 1 and this unit.',
        ref: REF_EXAM,
      },
      {
        q: 'The repetition came back at exactly the same speed. What do you ask for?',
        format: 'typeIn',
        accept: ["Plus lentement, s'il vous plaît", 'plus lentement sil vous plait', 'plus lentement'],
        answer: "Plus lentement, s'il vous plaît.",
        why: 'Ask for slower rather than for again. Asking for again a second time gets you the same sentence at the same speed. This unit.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « Je suis vingt ans ». Fix it.',
        format: 'errorSpot',
        accept: ["J'ai vingt ans", 'jai vingt ans'],
        answer: "J'ai vingt ans.",
        why: 'French has its age. Lesson 11, avoir.',
        ref: REF_EXAM,
      },
      {
        q: 'Which of these is correct?',
        format: 'mcq',
        opts: ["Je n'ai pas un frère.", "Ce n'est pas de livre.", "Je n'aime pas le café.", "Je n'ai pas de faim."],
        correct: 2,
        why: 'Only the third. le does not move under a negative, un after avoir becomes de, un after être does not, and faim had no article to collapse. Lesson 21, negation.',
        ref: REF_EXAM,
      },
      {
        q: 'Say it: « Excusez-moi, je ne comprends pas. »',
        format: 'speak',
        target: 'Excusez-moi, je ne comprends pas.',
        accept: ['Excusez-moi, je ne comprends pas'],
        answer: 'Excusez-moi, je ne comprends pas.',
        why: 'The sentence that keeps a conversation alive. Nobody minds it and it costs nothing. This unit.',
        ref: REF_EXAM,
      },
    ],
  },
];

/** The twelve exam rounds, answers spread across the option slots. */
export const EXAM_ROUNDS: QuizRound[] = spreadAnswers(AUTHORED_EXAM_ROUNDS);
