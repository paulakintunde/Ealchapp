// a2.35.l2 "L'examen A2": the twelve mixed rounds.
//
// Sixty questions under exam conditions. The quiz section carries `exam: true`,
// which means the renderer shows no explanation and offers no jump back while
// the learner answers, and hands the whole review over on the result card
// instead. No round declares `targets`, so no remediation drill fires between
// rounds either. Both halves of that matter: a drill mid-exam would teach the
// thing the next round is about to test.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHY THE ROUNDS ARE SKILLS AND NOT UNITS
// ══════════════════════════════════════════════════════════════════════════
//
// a2.35.l1 already asks unit by unit, and a labelled round is a hint: told the
// round is about être, nobody reaches for avoir, which is the single choice
// that whole unit exists to teach. So these twelve are named for the JOB the
// question is doing, and each round crosses three to six units on purpose.
//
// The label still has to say something, because the result card lists rounds by
// name and "Part 7 of 12" would make the breakdown unreadable. A skill is the
// most information that can be given without naming the unit.
//
// ── Why the twelve divide the way they do ──────────────────────────────────
//
// The unit's canDo names three things and the exam follows it rather than the
// trail:
//
//   verbs in three tenses     x01 to x06     30 questions, half the paper
//   pronouns                  x07 to x09     15 questions
//   the everyday situations   x11, x12       10 questions
//   what modifies them        x10             5 questions
//
// **The tenses are weighted on purpose.** Five of the thirty-four units are the
// passé composé arc and it is what an A2 learner is judged on, so x04, x05 and
// x06 are fifteen of the sixty: a quarter of the paper for a seventh of the
// band.
//
// Adjectives, adverbs, prepositions and comparatives get one round of their own
// and appear throughout the other eleven as the material being modified, which
// is what they are. A round of adjective agreement would be reviewing them
// again; a sentence that needs an agreement to be right is testing them.
//
// ── On `why` under exam conditions, and why naming a unit there is not a leak
//
// Every question still carries one, and not only because the density validator
// requires it: the result card collects the missed questions and prints their
// `why` underneath the score. Written for a reader who has just finished and is
// looking at a wrong answer with no memory of what they picked, so each one
// names the rule AND the unit to go back to.
//
// That is the opposite of the round labels, and deliberately so. A label is
// read BEFORE the answer and tells the learner where to look; a `why` is read
// AFTER the paper is over and tells them where to go next. The guard that
// enforces the exam's one property therefore reads the round id, label and
// `say`, and does not read `why`.

import type { QuizRound } from '../../../ealch-v2/src/content/schema.ts';
import { spreadAnswers } from './bilan-a2-spread.ts';

/** The exam section's own id. Same self-pointing arrangement as the review
 *  lesson, and doubly moot here: `exam: true` hides the jump anyway. */
export const REF_EXAM = 's03-exam';

const HEAR = (clip: string) => ({ mode: 'tts' as const, lang: 'fr-FR', clip });

/** As written. `EXAM_ROUNDS` below is this with the correct answers spread. */
const AUTHORED_EXAM_ROUNDS: QuizRound[] = [
  {
    id: 'x01-present-regular',
    label: 'Saying what happens',
    say: 'Five verbs, and none of them tells you which family it is in.',
    questions: [
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Ils finent tôt.', 'Ils finissent tôt.', 'Ils finent tôt aussi.', 'Ils finit tôt.'],
        correct: 1,
        why: 'Ils finissent. The regular -ir family puts -iss- in front of every plural ending. a2.10.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: We are waiting for the bus',
        format: 'typeIn',
        accept: ['Nous attendons le bus'],
        answer: 'Nous attendons le bus.',
        why: 'Nous attendons le bus, with no preposition: attendre carries its object directly where English needs for. a2.11.',
        ref: REF_EXAM,
      },
      {
        // NOT `vendre`. The review's round 4 already asks the identical
        // question with the identical options, and an exam question a learner
        // has already sat in the review is not testing retrieval. `répondre`
        // carries the same silent-d contrast on a verb the review asks about
        // in writing rather than by ear.
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Ils répondent vite.'),
        opts: ['Il répond vite.', 'Ils répondent vite.', 'Tu réponds vite.', 'Nous répondons vite.'],
        correct: 1,
        why: 'Ils répondent. The stem-final d is silent at the end of a word and said when a letter follows it. a2.11.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « Nous mangons ensemble ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Nous mangons ensemble.',
        accept: ['Nous mangeons ensemble'],
        answer: 'Nous mangeons ensemble.',
        why: 'nous mangeons. The e protects the soft g in front of the o, and the nous cell is the only one where it appears. a2.09.',
        ref: REF_EXAM,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['nous appellons', 'nous appelons', 'nous apellons', 'nous appelions'],
        correct: 1,
        why: 'nous appelons, with one l. The doubling belongs to the cells whose ending is silent, and -ons is not one of them. a2.09.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x02-present-irregular',
    label: 'The verbs that go their own way',
    say: 'Nothing here can be built out of a stem and an ending.',
    questions: [
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['vous faisez', 'vous faites', 'vous faitez', 'vous fasez'],
        correct: 1,
        why: 'vous faites. Three verbs take -tes in this cell and you have all three: être, faire and dire. a2.12.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: They take the train',
        format: 'typeIn',
        accept: ['Ils prennent le train'],
        answer: 'Ils prennent le train.',
        why: 'Ils prennent, with two n holding the vowel open in front of a silent ending. a2.15.',
        ref: REF_EXAM,
      },
      {
        q: 'Which verb goes in: « Elle ne ___ pas où j’habite. »',
        format: 'mcq',
        opts: ['connaît', 'sait', 'peut', 'veut'],
        correct: 1,
        why: 'Elle ne sait pas où j’habite. A clause behind it takes savoir; connaître stops at a noun. a2.14.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « Ils veut partir ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Ils veut partir.',
        accept: ['Ils veulent partir'],
        answer: 'Ils veulent partir.',
        why: 'Ils veulent partir. The plural stem is the singular stem plus the last consonant of the nous stem, across all three of these verbs. a2.13.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: We are going to the market',
        format: 'typeIn',
        accept: ['Nous allons au marché'],
        answer: 'Nous allons au marché.',
        why: 'Nous allons au marché. aller for the verb, and à plus le folded into au for the place. a2.02 and a2.04.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x03-what-happens-next',
    label: 'What has not happened yet',
    say: 'Two verbs in a row, and only the first one moves.',
    questions: [
      {
        q: 'Write the French for: I am going to leave at six',
        format: 'typeIn',
        accept: ['Je vais partir à six heures'],
        answer: 'Je vais partir à six heures.',
        why: 'Je vais partir. aller carries the person and the verb behind it stays in its naming form. a2.19.',
        ref: REF_EXAM,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Nous allons ne pas sortir.', 'Nous n’allons pas sortir.', 'Nous n’allons sortir pas.', 'Nous allons pas ne sortir.'],
        correct: 1,
        why: 'Nous n’allons pas sortir. The negative wraps the verb that changed, and ne shortens in front of the vowel. a2.19.',
        ref: REF_EXAM,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Je viens de manger.'),
        opts: ['Je vais manger.', 'Je viens de manger.', 'Je mange.', 'J’ai mangé.'],
        correct: 1,
        why: 'Je viens de manger, which is twenty minutes ago rather than tonight. Four ways of placing one action in time, separated by their first word. a2.02.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « Elle doit partir maintenant, elle doit part ». Write the second half corrected.',
        format: 'errorSpot',
        prompt: 'elle doit part',
        accept: ['elle doit partir'],
        answer: 'elle doit partir',
        why: 'elle doit partir. The second verb never takes a person, behind a modal or behind aller. a2.13.',
        ref: REF_EXAM,
      },
      {
        q: 'Which of these is a plan rather than a journey?',
        format: 'mcq',
        opts: ['Je vais à Lyon.', 'Je vais travailler.', 'Je vais au bureau.', 'Je vais chez elle.'],
        correct: 1,
        why: 'Je vais travailler. aller plus a verb is the future; aller plus a place is movement. The next word is the only thing separating them. a2.19.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x04-what-you-did',
    label: 'What you did',
    say: 'Two words, and the small ones go in between.',
    questions: [
      {
        q: 'Write the French for: I finished the work yesterday',
        format: 'typeIn',
        accept: ['J’ai fini le travail hier'],
        answer: 'J’ai fini le travail hier.',
        why: 'J’ai fini. The -ir family gives -i, and the past form after avoir never agrees with anything. a2.05.',
        ref: REF_EXAM,
      },
      {
        q: 'Which is the past form of attendre?',
        format: 'mcq',
        opts: ['attendé', 'attendu', 'attendi', 'attendit'],
        correct: 1,
        why: 'attendu. One ending per regular family: -é, -i and -u. a2.05.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: She has not eaten',
        format: 'typeIn',
        accept: ['Elle n’a pas mangé'],
        answer: 'Elle n’a pas mangé.',
        why: 'Elle n’a pas mangé, with no -e on the past form: after avoir there is no agreement with the subject in any person. a2.05.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « J’ai bien pas dormi ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'J’ai bien pas dormi.',
        accept: ['Je n’ai pas bien dormi'],
        answer: 'Je n’ai pas bien dormi.',
        why: 'Je n’ai pas bien dormi. The negative goes round the first word and the short adverb sits in the gap after it. a2.05 and a2.17.',
        ref: REF_EXAM,
      },
      {
        q: 'Which means: I finished ten minutes ago',
        format: 'mcq',
        opts: ['J’ai fini depuis dix minutes.', 'J’ai fini il y a dix minutes.', 'J’ai fini dans dix minutes.', 'J’ai fini pendant dix minutes.'],
        correct: 1,
        why: 'il y a dix minutes. A measurement of time behind it makes it ago; a plain noun behind it makes it there is. a2.18.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x05-the-forms-you-reach-for',
    label: 'The forms you cannot build',
    say: 'The family ending will not help you here.',
    questions: [
      {
        q: 'Write the past form of mettre.',
        format: 'typeIn',
        accept: ['mis'],
        answer: 'mis',
        why: 'mis. An -re verb giving -is rather than -u, exactly as prendre gives pris. a2.20.',
        ref: REF_EXAM,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['J’ai avu le film.', 'J’ai vu le film.', 'J’ai voyu le film.', 'J’ai vé le film.'],
        correct: 1,
        why: 'J’ai vu. voir is one of the forms that has to be reached for rather than derived. a2.20.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: They understood',
        format: 'typeIn',
        accept: ['Ils ont compris'],
        answer: 'Ils ont compris.',
        why: 'Ils ont compris. Cover the prefix and comprendre is prendre, so the past form comes free. a2.20 and a2.15.',
        ref: REF_EXAM,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['J’ai du partir.', 'J’ai dû partir.', 'J’ai devu partir.', 'J’ai deu partir.'],
        correct: 1,
        why: 'J’ai dû partir, with the little roof, which is all that separates it in writing from the du that means some. a2.20.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « J’ai ouvri la porte ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'J’ai ouvri la porte.',
        accept: ['J’ai ouvert la porte'],
        answer: 'J’ai ouvert la porte.',
        why: 'J’ai ouvert. An -ir verb giving -ert, with offrir and souffrir alongside it. a2.20.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x06-when-the-first-word-changes',
    label: 'When the first word changes',
    say: 'Some of these move the second word as well.',
    questions: [
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Elle a arrivée à midi.', 'Elle est arrivée à midi.', 'Elle a arrivé à midi.', 'Elle est arrivé à midi.'],
        correct: 1,
        why: 'Elle est arrivée. arriver is one of the fifteen, and once the first word is être the second one agrees with the subject. a2.21.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: They went out (two women)',
        format: 'typeIn',
        accept: ['Elles sont sorties'],
        answer: 'Elles sont sorties.',
        why: 'Elles sont sorties, with -es. Nothing here is audibly feminine or plural except the pronoun. a2.21.',
        ref: REF_EXAM,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Il est mort en mars.'),
        opts: ['Il est mort en mars.', 'Elle est morte en mars.', 'Il est parti en mars.', 'Elle est partie en mars.'],
        correct: 0,
        why: 'Il est mort. mourir is the one verb of the fifteen whose agreement you can hear, because the feminine ending lets the t out. a2.21.',
        ref: REF_EXAM,
      },
      {
        q: 'Tap the letters you do not say in « levées ».',
        format: 'tapSilent',
        word: 'levées',
        correct: 'es',
        why: 'The final e and s are both silent, so all four written forms are one sound and the agreement is a fact about the page. a2.23.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « Ils se ont couchés tard ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Ils se ont couchés tard.',
        accept: ['Ils se sont couchés tard'],
        answer: 'Ils se sont couchés tard.',
        why: 'Ils se sont couchés. Wherever the little word appears, the first word is être, whatever the verb takes without it. a2.23.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x07-standing-in-for-the-thing',
    label: 'Standing in for the thing',
    say: 'Where it goes, and which one it is.',
    questions: [
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Je téléphone lui.', 'Je lui téléphone.', 'Je le téléphone.', 'Je téléphone le.'],
        correct: 1,
        why: 'Je lui téléphone. téléphoner puts its person behind à, so the pronoun is lui, and it goes in front of the verb. a2.24.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: I saw them yesterday (les enfants)',
        format: 'typeIn',
        accept: ['Je les ai vus hier'],
        answer: 'Je les ai vus hier.',
        why: 'Je les ai vus, with -s. The pronoun sits in front of the first word and the past form agrees with it because it came first. a2.06.',
        ref: REF_EXAM,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Je la vois demain.'),
        opts: ['Je le vois demain.', 'Je la vois demain.', 'Je les vois demain.', 'Je vois demain.'],
        correct: 1,
        why: 'Je la vois. Three pronouns, three vowels, and this is the one part of the system the ear can settle on its own. a2.06.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « Je leurs ai écrit ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je leurs ai écrit.',
        accept: ['Je leur ai écrit'],
        answer: 'Je leur ai écrit.',
        why: 'Je leur ai écrit. As the word replacing a person behind à it never takes an -s, and the past form never agrees with it either. a2.24.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: I am not going to buy it (le livre)',
        format: 'typeIn',
        accept: ['Je ne vais pas l’acheter'],
        answer: 'Je ne vais pas l’acheter.',
        why: 'Je ne vais pas l’acheter. The pronoun goes in front of the verb it belongs to, and the negative still wraps the one that changed. a2.06 and a2.19.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x08-a-place-and-an-amount',
    label: 'A place and an amount',
    say: 'Two words that swallow the preposition as well.',
    questions: [
      {
        q: 'Write the French for: I am going there tomorrow',
        format: 'typeIn',
        accept: ['J’y vais demain'],
        answer: 'J’y vais demain.',
        why: 'J’y vais. y takes the à and the place together, which is why saying à again after it is the classic double. a2.25.',
        ref: REF_EXAM,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Oui, je veux.', 'Oui, j’en veux.', 'Oui, je veux en.', 'Oui, j’y veux.'],
        correct: 1,
        why: 'Oui, j’en veux. English lets you stop at I do and French does not: the pronoun is required rather than optional. a2.25.',
        ref: REF_EXAM,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('J’en ai deux.'),
        opts: ['J’y vais.', 'J’en ai deux.', 'J’y pense.', 'J’en parle.'],
        correct: 1,
        why: 'J’en ai deux. The number stays and the noun goes, which is a shape English has no word for at all. a2.25.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: There is no more bread',
        format: 'typeIn',
        accept: ['Il n’y a plus de pain'],
        answer: 'Il n’y a plus de pain.',
        why: 'Il n’y a plus de pain. il y a does not come apart, and after a negative the article collapses to de. a2.25 and a2.07.',
        ref: REF_EXAM,
      },
      {
        q: 'Which order is right?',
        format: 'mcq',
        opts: ['Il en y a trois.', 'Il y en a trois.', 'Il y a en trois.', 'Il a y en trois.'],
        correct: 1,
        why: 'Il y en a trois. y comes before en, and it is the one pair of these pronouns whose order this level settles. a2.25.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x09-pointing-and-owning',
    label: 'Pointing and owning',
    say: 'Two little words, and what comes after decides them.',
    questions: [
      {
        q: 'Which goes in: « ___ hôtel est cher »?',
        format: 'mcq',
        opts: ['Ce', 'Cet', 'Cette', 'Ces'],
        correct: 1,
        why: 'Cet hôtel. The h is silent so a vowel sound is coming. It sounds exactly like cette and it is not spelled like it. a2.33.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: This one is mine (une valise)',
        format: 'typeIn',
        accept: ['Celle-ci est la mienne'],
        answer: 'Celle-ci est la mienne.',
        why: 'Celle-ci est la mienne. Both words follow valise, and both need what comes after them: -ci on the first, an article in front of the second. a2.33 and a2.34.',
        ref: REF_EXAM,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Ce sont leurs.', 'Ce sont les leurs.', 'Ce sont leur.', 'Ce sont le leurs.'],
        correct: 1,
        why: 'Ce sont les leurs. The possessive pronoun is two words and the article is not optional, which is the reverse of the possessive that sits in front of a noun. a2.34.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « Je préfère celui de rouge ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je préfère celui de rouge.',
        accept: ['Je préfère le rouge'],
        answer: 'Je préfère le rouge.',
        why: 'Je préfère le rouge. celui needs -ci, -là, a de phrase naming an owner, or a clause; a colour behind de is none of those. a2.33.',
        ref: REF_EXAM,
      },
      {
        q: 'Which « leur » takes an -s?',
        format: 'mcq',
        opts: ['Je leur donne le livre.', 'Ce sont leurs livres.', 'Je leur parle souvent.', 'Je leur ai répondu.'],
        correct: 1,
        why: 'leurs livres, where it sits in front of a noun. As the word replacing a person behind à it never takes one. a2.24 and a2.34.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x10-describing-and-comparing',
    label: 'Describing and comparing',
    say: 'Everything here modifies something else.',
    questions: [
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['un nouveau appartement', 'un nouvel appartement', 'une nouvel appartement', 'un nouvelle appartement'],
        correct: 1,
        why: 'un nouvel appartement. Say the feminine and drop its last two letters, and the same move gives bel and vieil. a2.16.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: She speaks slowly',
        format: 'typeIn',
        accept: ['Elle parle lentement'],
        answer: 'Elle parle lentement.',
        why: 'Elle parle lentement, built off the feminine lente, and it goes behind the verb. a2.17.',
        ref: REF_EXAM,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Elle travaille meilleur que moi.', 'Elle travaille mieux que moi.', 'Elle travaille plus bien que moi.', 'Elle travaille plus bon que moi.'],
        correct: 1,
        why: 'mieux, because it is modifying a verb. meilleur goes with a noun, and plus bon and plus bien do not exist. a2.08.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner writes « une femme sportif et heureux ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'une femme sportif et heureux',
        accept: ['une femme sportive et heureuse'],
        answer: 'une femme sportive et heureuse',
        why: 'sportive et heureuse. Two classes, two feminines, and both of them are audible, which is unusual: number never is. a2.03.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: the oldest hotel in the city',
        format: 'typeIn',
        accept: ['le plus vieil hôtel de la ville'],
        answer: 'le plus vieil hôtel de la ville',
        why: 'le plus vieil hôtel de la ville. The pre-vocalic form survives inside the superlative frame, and the field a superlative names takes de. a2.16 and a2.08.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x11-at-the-counter',
    label: 'At the counter',
    say: 'Somebody is waiting for you, and it is his turn first.',
    questions: [
      {
        q: 'The server arrives at your table. What has he said?',
        format: 'mcq',
        opts: ['Qu’est-ce que vous voulez ?', 'Vous avez choisi ?', 'Vous prenez quoi ?', 'Vous mangez ?'],
        correct: 1,
        why: 'Vous avez choisi ? Your half of this encounter is the answering half, and recognising which question arrived is most of the work. a2.07.',
        ref: REF_EXAM,
      },
      {
        q: 'Say it: order the fish',
        format: 'speak',
        target: 'Je vais prendre le poisson.',
        accept: ['Je vais prendre le poisson'],
        answer: 'Je vais prendre le poisson.',
        why: 'Je vais prendre le poisson. The near future is the ordinary way to order, so a whole grammar unit turns out to be a piece of the script. a2.07 and a2.19.',
        ref: REF_EXAM,
      },
      {
        // NOT « Ça fait combien ? ». The review's round 25 asks that verbatim.
        q: 'Write the French for: Do you take card?',
        format: 'typeIn',
        accept: ['Vous prenez la carte'],
        answer: 'Vous prenez la carte ?',
        why: 'Vous prenez la carte ? Rising intonation and nothing else, which is the question form a counter actually uses. a2.26.',
        ref: REF_EXAM,
      },
      {
        q: 'A learner asks for « une bouteille du vin ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'une bouteille du vin',
        accept: ['une bouteille de vin'],
        answer: 'une bouteille de vin',
        why: 'une bouteille de vin. A container takes a plain de, whatever the noun behind it. a2.26.',
        ref: REF_EXAM,
      },
      {
        q: 'The cashier says « sur cinquante euros ». What is the fifty?',
        format: 'mcq',
        opts: ['Your change', 'The note you handed over', 'The total', 'The tax'],
        correct: 1,
        why: 'The note you handed over. She is counting up from the price, and hearing it as the change is how you leave short. a2.26.',
        ref: REF_EXAM,
      },
    ],
  },

  {
    id: 'x12-out-in-the-world',
    label: 'Out in the world',
    say: 'A street, a surgery, a desk and an office.',
    questions: [
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['J’ai mal à le ventre.', 'J’ai mal au ventre.', 'Je suis mal au ventre.', 'Mon ventre fait mal.'],
        correct: 1,
        why: 'J’ai mal au ventre. French has the pain where English is it, and à le contracts wherever it appears. a2.28.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: Take the second on the left',
        format: 'typeIn',
        accept: ['Prenez la deuxième à gauche'],
        answer: 'Prenez la deuxième à gauche.',
        why: 'Prenez la deuxième à gauche. A spoken direction counts turnings, so the ordinal is the part you cannot afford to lose. a2.27.',
        ref: REF_EXAM,
      },
      {
        q: 'Something in your room has not been dealt with. Which?',
        format: 'mcq',
        opts: ['Vous n’avez rien fait.', 'Il manque une serviette.', 'Je veux une serviette.', 'Votre chambre est mauvaise.'],
        correct: 1,
        why: 'Il manque une serviette. No subject, so nobody is accused of anything, which is the whole reason the frame exists. a2.29.',
        ref: REF_EXAM,
      },
      {
        q: 'Write the French for: I have worked here for two years',
        format: 'typeIn',
        accept: ['Je travaille ici depuis deux ans'],
        answer: 'Je travaille ici depuis deux ans.',
        why: 'Je travaille ici depuis deux ans, in the present, because you still work there. English reaches for a past tense and French does not. a2.18 and a2.30.',
        ref: REF_EXAM,
      },
      {
        // NOT « J'ai oublié mon mot de passe ». The review's round 31 asks that
        // verbatim, and this one keeps a2.32 in the exam without reusing it.
        q: 'Write the French for: My phone does not work',
        format: 'typeIn',
        accept: ['Mon téléphone ne marche pas'],
        answer: 'Mon téléphone ne marche pas.',
        why: 'Mon téléphone ne marche pas. marcher for a device, not travailler, which is the verb for a person. a2.32.',
        ref: REF_EXAM,
      },
    ],
  },
];

/** The twelve exam rounds, answers spread across the option slots. */
export const EXAM_ROUNDS: QuizRound[] = spreadAnswers(AUTHORED_EXAM_ROUNDS);
