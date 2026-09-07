// a2.35.l1 "Bilan A2": the thirty-four review rounds.
//
// One round per A2 unit, five questions each, in the band's own teaching order
// (the unit `seq`, not the id). A2's ids and seq disagree harder than A1's did:
// `a2.09` is seq 2, `a2.02` is seq 5, `a2.03` is seq 10, `a2.05` is seq 16 and
// `a2.08` is seq 32. A round list numbered by id would review the band in an
// order no learner ever walked, so the round ids carry BOTH: `r16-a2-05-...`
// is the sixteenth round and it is a2.05's.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHY ONE ROUND PER UNIT, AND WHY THAT IS NOT THE WHOLE BILAN
// ══════════════════════════════════════════════════════════════════════════
//
// A round that names its unit is a DIAGNOSTIC. Miss three of five in "The
// passé composé with être" and the report says which half hour to sit again.
//
// The cost of naming the unit is that the question stops testing retrieval.
// Told the round is about être, nobody reaches for avoir, which is the single
// choice that whole unit exists to teach. That is why the sixty-question exam
// is a SEPARATE lesson (a2.35.l2) whose rounds are deliberately unlabelled by
// source. The review tells you where you are; the exam tells you whether you
// have it.
//
// ── a2.10 carries two lessons and gets ONE round ───────────────────────────
//
// `a2.10.l1` teaches the regular -IR family and `a2.10.l2` teaches the two
// families that are not it. They are one unit on the trail and a learner meets
// them as one half hour, so they get one round, and the fifth question is
// l2's: it asks which of four -ir verbs is outside the family, which is
// exactly the thing l2 exists to answer.
//
// ── On `ref` ───────────────────────────────────────────────────────────────
//
// Every question carries one because the density validator requires it, but
// `onJumpToRef` resolves a section id inside THIS lesson and the teaching for
// these questions lives in thirty-four others. There is no cross-lesson jump
// in the pager, so the ref self-points at the quiz section and the actual
// pointer is carried in `why`, which names the unit in words. A jump that
// silently lands nowhere would be worse than no jump.
//
// ── What the app cannot ask, and what that did to this file ────────────────
//
// `fold()` strips accents, cedillas, case and whitespace, so no typed, spotted
// or assembled surface can test one. Across thirty-four units that removes
// several of the most useful questions in the band, and each one is written as
// an `mcq` instead, because options are picked rather than typed:
//
//   commençons  the cedilla                        round 2
//   préfère     which vowel takes the accent       round 2
//   connaît     the circumflex                     round 8
//   dû          the circumflex against du          round 17
//   évidemment  the -emment against -amment ending round 12
//
// `fold()` DOES keep a final -e and a final -s, which is most of what A2 is
// about, so participle agreement, a doubled consonant and an inserted letter
// are all genuinely testable by `typeIn`. That is why this file runs typeIn at
// a third of its questions rather than a fifth: `mangé` folds to `mange` and
// `manger` folds to `manger`, so the pair that no EAR question may offer is
// perfectly safe to type.

import type { QuizRound } from '../../../ealch-v2/src/content/schema.ts';
import { spreadAnswers } from './bilan-a2-spread.ts';

/** The quiz section's own id. See the note on `ref` above. */
export const REF = 's04-quiz';

/** TTS spec for every listenChoose clip in the bilan. No recordings exist for
 *  this lesson and none are owed: every line is quoted from a unit that already
 *  taught it. Authored on `audio.clip` rather than left to the card's fallback,
 *  which speaks the correct option and so reads the answer aloud. */
const HEAR = (clip: string) => ({ mode: 'tts' as const, lang: 'fr-FR', clip });

/** As written. `REVIEW_ROUNDS` below is this with the correct answers spread
 *  across the option slots; see bilan-a2-spread.ts for why the two are kept
 *  apart. */
const AUTHORED_REVIEW_ROUNDS: QuizRound[] = [
  /* ─── seq 1 ─────────────────────────────────────────────────────────── */
  {
    id: 'r01-a2-01-verbes-er',
    label: 'Unit 1 · Regular -ER verbs',
    targets: ['err-conjugation'],
    say: 'Nine verbs in ten. Four of the six endings make no sound.',
    questions: [
      {
        q: 'Which form goes with « ils » for the verb parler?',
        format: 'mcq',
        opts: ['ils parle', 'ils parlent', 'ils parlons', 'ils parler'],
        correct: 1,
        why: 'ils parlent. The -ent is silent, so it sounds identical to je parle and tu parles, and only the pronoun in front tells you which one it was. Unit 1.',
        ref: REF,
      },
      {
        q: 'Write the nous form of travailler.',
        format: 'typeIn',
        accept: ['nous travaillons', 'travaillons'],
        answer: 'nous travaillons',
        why: '-ons is one of the two endings you can actually hear, which is what makes nous and vous the easy half of the six. Unit 1.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Nous parlons français.'),
        opts: ['Je parle français.', 'Tu parles français.', 'Nous parlons français.', 'Ils parlent français.'],
        correct: 2,
        why: 'Nous parlons. The first, second and fourth are one sound between them, so the ear has only the pronoun to go on and -ons is the ending that arrives. Unit 1.',
        ref: REF,
      },
      {
        q: 'A learner writes « Nous parlez français ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Nous parlez français.',
        accept: ['Nous parlons français'],
        answer: 'Nous parlons français.',
        why: 'The two audible endings are the two that get swapped, because they are the two anybody notices. -ons belongs to nous and -ez to vous. Unit 1.',
        ref: REF,
      },
      {
        q: 'Which two endings can you hear?',
        format: 'mcq',
        opts: ['-e and -es', '-ons and -ez', '-es and -ent', '-e and -ent'],
        correct: 1,
        why: '-ons and -ez. The other four are silent, and that is why the subject pronoun in front of the verb is doing the work the ending cannot. Unit 1.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 2 ─────────────────────────────────────────────────────────── */
  {
    id: 'r02-a2-09-verbes-er-exceptions',
    label: 'Unit 2 · The -ER verbs that change their stem',
    targets: ['err-spelling'],
    say: 'The spelling moves so the sound can stay still.',
    questions: [
      {
        q: 'Write the nous form of manger.',
        format: 'typeIn',
        accept: ['nous mangeons', 'mangeons'],
        answer: 'nous mangeons',
        why: 'nous mangeons, with an e that belongs to nothing except the g in front of it. Without it the g would harden in front of the o. Unit 2.',
        ref: REF,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['nous commencons', 'nous commençons', 'nous commenceons', 'nous commencions'],
        correct: 1,
        why: 'nous commençons. The cedilla does for c what the added e does for g: it keeps the soft sound in front of a back vowel. It has to be picked rather than typed, because a typed answer is compared with the cedilla stripped. Unit 2.',
        ref: REF,
      },
      {
        q: 'Write the tu form of appeler.',
        format: 'typeIn',
        accept: ['tu appelles', 'appelles'],
        answer: 'tu appelles',
        why: 'tu appelles, with two l. The ending went silent, so the vowel in front of it needs something to hold it open, and the doubled consonant is that something. Unit 2.',
        ref: REF,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['je prefere', 'je préfére', 'je préfère', 'je préferè'],
        correct: 2,
        why: 'je préfère. The second accent turns and the first does not, for the same reason appelles doubles its l: the silent ending leaves the vowel needing support. Only a picked answer can ask this, because a typed one folds the accents away. Unit 2.',
        ref: REF,
      },
      {
        q: 'A learner writes « Nous mangons à midi ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Nous mangons à midi.',
        accept: ['Nous mangeons à midi'],
        answer: 'Nous mangeons à midi.',
        why: 'nous mangeons. The nous cell is the only one of the six where a -ger verb changes at all, which is why it is mostly met in writing. Unit 2.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 3 ─────────────────────────────────────────────────────────── */
  {
    id: 'r03-a2-10-verbes-ir',
    label: 'Unit 3 · Regular -IR verbs',
    targets: ['err-conjugation'],
    say: 'The plural of this family puts a sound on the end.',
    questions: [
      {
        q: 'Which form goes with « ils » for the verb finir?',
        format: 'mcq',
        opts: ['ils finit', 'ils finissent', 'ils finent', 'ils finissons'],
        correct: 1,
        why: 'ils finissent. The plural of this family carries -iss-, which you hear, where the singular carries nothing you can. Unit 3.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Ils finissent à cinq heures.'),
        opts: ['Il finit à cinq heures.', 'Ils finissent à cinq heures.', 'Je finis à cinq heures.', 'Nous finissons à cinq heures.'],
        correct: 1,
        why: 'Ils finissent. This is the one family where the plural is genuinely audible, because -iss- is a syllable and the silent endings of the other two families are not. Unit 3.',
        ref: REF,
      },
      {
        q: 'Write the nous form of choisir.',
        format: 'typeIn',
        accept: ['nous choisissons', 'choisissons'],
        answer: 'nous choisissons',
        why: 'nous choisissons. The -iss- goes in before the ending, in all three plural persons, without exception in this family. Unit 3.',
        ref: REF,
      },
      {
        q: 'A learner writes « Vous finez à cinq heures ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Vous finez à cinq heures.',
        accept: ['Vous finissez à cinq heures'],
        answer: 'Vous finissez à cinq heures.',
        why: 'vous finissez. The -ez is right and the missing piece is the -iss- in front of it. Borrowing the -er endings whole is the commonest way this family goes wrong. Unit 3.',
        ref: REF,
      },
      {
        q: 'Which of these does NOT take -iss- in the plural?',
        format: 'mcq',
        opts: ['finir', 'choisir', 'partir', 'remplir'],
        correct: 2,
        why: 'partir. It ends in -ir and it is not in this family: ils partent, not ils partissent. The ending of the naming form does not tell you which of the three -ir families a verb is in, which is the unit’s second lesson. Unit 3.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 4 ─────────────────────────────────────────────────────────── */
  {
    id: 'r04-a2-11-verbes-re',
    label: 'Unit 4 · Regular -RE verbs',
    targets: ['err-conjugation'],
    say: 'One cell in this family has nothing written in it at all.',
    questions: [
      {
        q: 'Which form goes with « il » for the verb vendre?',
        format: 'mcq',
        opts: ['il vends', 'il vend', 'il vendt', 'il vende'],
        correct: 1,
        why: 'il vend, with no ending at all. The stem ends in d and French will not write a second consonant after it, so the third person of this family is the bare stem. Unit 4.',
        ref: REF,
      },
      {
        q: 'Write the nous form of attendre.',
        format: 'typeIn',
        accept: ['nous attendons', 'attendons'],
        answer: 'nous attendons',
        why: 'nous attendons. The stem-final d is silent at the end of a word and said the moment a letter follows it, which is why the plural of this family is audible. Unit 4.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Ils vendent des fruits.'),
        opts: ['Il vend des fruits.', 'Ils vendent des fruits.', 'Tu vends des fruits.', 'Nous vendons des fruits.'],
        correct: 1,
        why: 'Ils vendent. The d is silent in il vend and said in ils vendent, so this family gives the ear something the -er family never does. Unit 4.',
        ref: REF,
      },
      {
        q: 'A learner writes « Il répondt au téléphone ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Il répondt au téléphone.',
        accept: ['Il répond au téléphone'],
        answer: 'Il répond au téléphone.',
        why: 'il répond. Adding a letter here is the reflex the other two families train: -e on parler, -t on finir, and nothing at all on vendre. Unit 4.',
        ref: REF,
      },
      {
        q: 'What do the three regular families write in the « il » cell?',
        format: 'mcq',
        opts: ['-e, -t and nothing', '-e, -it and -d', '-e, -is and -s', 'nothing, -t and -e'],
        correct: 0,
        why: 'il parle, il finit, il vend: one letter, two letters and none. Setting the three side by side is the point of having reached the third one. Unit 4.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 5 ─────────────────────────────────────────────────────────── */
  {
    id: 'r05-a2-02-aller-venir-tenir',
    label: 'Unit 5 · Aller, venir and tenir',
    targets: ['err-conjugation'],
    say: 'Where the method stops. Three verbs you cannot build.',
    questions: [
      {
        q: 'Which form goes with « ils » for the verb venir?',
        format: 'mcq',
        opts: ['ils vientent', 'ils viennent', 'ils venent', 'ils viens'],
        correct: 1,
        why: 'ils viennent. The third person singular is nasal and the plural is not, which is a change you can hear and the only reliable signal this verb gives. Unit 5.',
        ref: REF,
      },
      {
        q: 'Write the French for: I have just eaten',
        format: 'typeIn',
        accept: ['Je viens de manger'],
        answer: 'Je viens de manger.',
        why: 'Je viens de manger. French says you are coming from the action, and the verb after de never changes for the person. Unit 5.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Ils viennent avec nous.'),
        opts: ['Il vient avec nous.', 'Ils viennent avec nous.', 'Je viens avec nous.', 'Nous venons avec nous.'],
        correct: 1,
        why: 'Ils viennent. The vowel is nasal in vient and open in viennent, so this is one of the few third-person contrasts in A2 that the ear can settle on its own. Unit 5.',
        ref: REF,
      },
      {
        q: 'A learner writes « Je vien de finir ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je vien de finir.',
        accept: ['Je viens de finir'],
        answer: 'Je viens de finir.',
        why: 'Je viens, with the -s. It is silent, so nothing in the sentence tells you it is missing, and this is why the recent past is a written trap rather than a spoken one. Unit 5.',
        ref: REF,
      },
      {
        q: 'Which of these means: I have just left Paris',
        format: 'mcq',
        opts: ['Je viens de Paris.', 'Je viens de quitter Paris.', 'Je viens à Paris.', 'Je vais de Paris.'],
        correct: 1,
        why: 'Je viens de quitter Paris. One form, two jobs: venir de plus a place is where you are from, and venir de plus a verb is what you just did. Only the next word separates them. Unit 5.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 6 ─────────────────────────────────────────────────────────── */
  {
    id: 'r06-a2-12-faire-dire-lire',
    label: 'Unit 6 · Faire, dire and lire',
    targets: ['err-conjugation'],
    say: 'Two endings almost nothing else in the language has.',
    questions: [
      {
        q: 'Which form goes with « vous » for the verb faire?',
        format: 'mcq',
        opts: ['vous faisez', 'vous faites', 'vous faissez', 'vous farez'],
        correct: 1,
        why: 'vous faites. Only three verbs in the language take -tes here, and you have all three: être, faire and dire. Unit 6.',
        ref: REF,
      },
      {
        q: 'Write the ils form of faire.',
        format: 'typeIn',
        accept: ['ils font', 'font'],
        answer: 'ils font',
        why: 'ils font. Four verbs take -ont in the third person plural and you now have all four: être, avoir, aller and faire. Unit 6.',
        ref: REF,
      },
      {
        q: 'Write the vous form of dire.',
        format: 'typeIn',
        accept: ['vous dites', 'dites'],
        answer: 'vous dites',
        why: 'vous dites, not vous disez. The regular ending is what the ear expects and it is wrong here, which is why this is the cell that gets corrected in public. Unit 6.',
        ref: REF,
      },
      {
        q: 'Which is the French for: to go shopping',
        format: 'mcq',
        opts: ['aller les courses', 'faire les courses', 'prendre les courses', 'mettre les courses'],
        correct: 1,
        why: 'faire les courses. French keeps faire where English reaches for a different verb each time, and the same verb does the cooking, the washing up and the weather. Unit 6.',
        ref: REF,
      },
      {
        q: 'Write the vous form of lire.',
        format: 'typeIn',
        accept: ['vous lisez', 'lisez'],
        answer: 'vous lisez',
        why: 'vous lisez, the ordinary ending. lire is the control case: it sits beside faire and dire so the two odd endings stand out as odd rather than looking like a pattern. Unit 6.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 7 ─────────────────────────────────────────────────────────── */
  {
    id: 'r07-a2-13-modaux',
    label: 'Unit 7 · Vouloir, pouvoir and devoir',
    targets: ['err-tense'],
    say: 'One verb changes for the person. The one behind it never does.',
    questions: [
      {
        q: 'Which form goes with « ils » for the verb vouloir?',
        format: 'mcq',
        opts: ['ils veut', 'ils veulent', 'ils voulent', 'ils voulons'],
        correct: 1,
        why: 'ils veulent. The third-person plural stem is the singular stem plus the last consonant of the nous stem, and that holds for all three of these verbs. Unit 7.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Ils veulent partir.'),
        opts: ['Il veut partir.', 'Ils veulent partir.', 'Je veux partir.', 'Nous voulons partir.'],
        correct: 1,
        why: 'Ils veulent. The l arrives in the plural and nothing else changes, which is the same shape as viennent against vient. Unit 7.',
        ref: REF,
      },
      {
        q: 'Write the French for: We must leave',
        format: 'typeIn',
        accept: ['Nous devons partir'],
        answer: 'Nous devons partir.',
        why: 'Nous devons partir. The second verb stays in its naming form whatever the first one does, and that holds for every verb in the language. Unit 7.',
        ref: REF,
      },
      {
        q: 'A learner writes « Elle veut part ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Elle veut part.',
        accept: ['Elle veut partir'],
        answer: 'Elle veut partir.',
        why: 'Elle veut partir. Conjugating the second verb as well is the mistake this frame exists to prevent, and it costs nothing to avoid once you see that only the first verb carries the person. Unit 7.',
        ref: REF,
      },
      {
        q: 'You are asking a stranger for something. Which?',
        format: 'mcq',
        opts: ['Je veux un café.', 'Je voudrais un café.', 'Je dois un café.', 'Je peux un café.'],
        correct: 1,
        why: 'Je voudrais. It is learnt as a fixed form rather than built, and je veux at a counter reads as an instruction rather than a request. Unit 7.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 8 ─────────────────────────────────────────────────────────── */
  {
    id: 'r08-a2-14-savoir-connaitre',
    label: 'Unit 8 · Savoir and connaître',
    targets: ['err-conjugation'],
    say: 'English has one word here. French has two and they are not interchangeable.',
    questions: [
      {
        q: 'Write the French for: I know Paris',
        format: 'typeIn',
        accept: ['Je connais Paris'],
        answer: 'Je connais Paris.',
        why: 'Je connais Paris. A noun and nothing after it takes connaître, which stops at the thing it names. Unit 8.',
        ref: REF,
      },
      {
        q: 'Which verb goes in: « Je ___ où il habite. »',
        format: 'mcq',
        opts: ['connais', 'sais', 'peux', 'veux'],
        correct: 1,
        why: 'Je sais où il habite. What follows decides: a clause takes savoir, a bare noun takes connaître, and the choice is made by the shape of the sentence rather than by what it is about. Unit 8.',
        ref: REF,
      },
      {
        q: 'Write the nous form of connaître.',
        format: 'typeIn',
        accept: ['nous connaissons', 'connaissons'],
        answer: 'nous connaissons',
        why: 'nous connaissons, with the double s. savoir shortens in the plural and connaître lengthens, which is the fastest way to keep the two verbs apart. Unit 8.',
        ref: REF,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['il connais', 'il connait', 'il connaît', 'il connaîs'],
        correct: 2,
        why: 'il connaît, with the circumflex on the i in front of the t. It is the only accent in either verb, and it can only be asked as a picked answer, because a typed one is compared with the accent stripped off. Unit 8.',
        ref: REF,
      },
      {
        q: 'A learner writes « Je connais nager ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je connais nager.',
        accept: ['Je sais nager'],
        answer: 'Je sais nager.',
        why: 'Je sais nager. A verb behind it takes savoir, every time. connaître accepts a noun and nothing else, which is what stops at the thing means. Unit 8.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 9 ─────────────────────────────────────────────────────────── */
  {
    id: 'r09-a2-15-prendre-mettre-battre',
    label: 'Unit 9 · Prendre, mettre and battre',
    targets: ['err-conjugation'],
    say: 'Cover the front of the verb and build what is left.',
    questions: [
      {
        q: 'Which form goes with « ils » for the verb prendre?',
        format: 'mcq',
        opts: ['ils prendent', 'ils prennent', 'ils prenent', 'ils prendrent'],
        correct: 1,
        why: 'ils prennent. Three stems: prend- in the singular, pren- for nous and vous, prenn- here. The doubled n is holding a vowel open in front of a silent ending, which is the same job it did in appelles. Unit 9.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Ils prennent le train.'),
        opts: ['Il prend le train.', 'Ils prennent le train.', 'Je prends le train.', 'Nous prenons le train.'],
        correct: 1,
        why: 'Ils prennent. The singular is nasal and the plural is not, exactly as in vient against viennent. Two verbs, one signal. Unit 9.',
        ref: REF,
      },
      {
        q: 'Write the nous form of mettre.',
        format: 'typeIn',
        accept: ['nous mettons', 'mettons'],
        answer: 'nous mettons',
        why: 'nous mettons, with two t. mettre and battre carry a single consonant in the singular and a doubled one in the plural, which is a smaller change than prendre makes. Unit 9.',
        ref: REF,
      },
      {
        q: 'A learner writes « Nous prennons le bus ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Nous prennons le bus.',
        accept: ['Nous prenons le bus'],
        answer: 'Nous prenons le bus.',
        why: 'nous prenons, with one n. The doubling belongs to the third person plural alone, because that is the only plural cell whose ending is silent. Unit 9.',
        ref: REF,
      },
      {
        q: 'Which form goes with « ils » for the verb apprendre?',
        format: 'mcq',
        opts: ['ils apprendent', 'ils apprennent', 'ils apprenent', 'ils apprendrent'],
        correct: 1,
        why: 'ils apprennent. Cover the front of the verb and what is left is prendre, which is what makes comprendre, surprendre, permettre and combattre free rather than four more things to learn. Unit 9.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 10 ────────────────────────────────────────────────────────── */
  {
    id: 'r10-a2-03-accord-adjectifs',
    label: 'Unit 10 · Adjective agreement',
    targets: ['err-agreement'],
    say: 'The plain form tells you the other three.',
    questions: [
      {
        q: 'Write the feminine of heureux.',
        format: 'typeIn',
        accept: ['heureuse'],
        answer: 'heureuse',
        why: 'heureuse. The -eux group swaps its ending for -euse, and the change is one you can hear, which is unusual: most agreement in French is written and silent. Unit 10.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Elle est heureuse.'),
        opts: ['Il est heureux.', 'Elle est heureuse.', 'Ils sont heureux.', 'Elles sont heureuses.'],
        correct: 1,
        why: 'Elle est heureuse. The feminine of this group is audible and the plural of any group is not, so what the ear catches here is the gender, never the number. Unit 10.',
        ref: REF,
      },
      {
        q: 'Write the feminine of sportif.',
        format: 'typeIn',
        accept: ['sportive'],
        answer: 'sportive',
        why: 'sportive. The -if group replaces its consonant rather than adding to it, and the v is audible where the f was. Unit 10.',
        ref: REF,
      },
      {
        q: 'Which is right for brown shoes?',
        format: 'mcq',
        opts: ['des chaussures marrons', 'des chaussures marron', 'des chaussures marronnes', 'des chaussures marronne'],
        correct: 1,
        why: 'marron never moves. It was a chestnut before it was a colour, and a colour named after a thing keeps the thing’s shape. The same holds for orange and for bleu marine. Unit 10.',
        ref: REF,
      },
      {
        q: 'A learner writes « une fille sportif ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'une fille sportif',
        accept: ['une fille sportive'],
        answer: 'une fille sportive',
        why: 'une fille sportive. The four classes are productive, so a describing word you have never met is agreeable from its plain form without being told anything else about it. Unit 10.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 11 ────────────────────────────────────────────────────────── */
  {
    id: 'r11-a2-16-beau-nouveau-vieux',
    label: 'Unit 11 · Beau, nouveau and vieux',
    targets: ['err-agreement'],
    say: 'These three have a fifth shape, and it only appears in front of a vowel.',
    questions: [
      {
        q: 'Which goes in: « un ___ appartement »?',
        format: 'mcq',
        opts: ['nouveau', 'nouvel', 'nouvelle', 'nouveaux'],
        correct: 1,
        why: 'un nouvel appartement. Say the feminine and drop its last two letters: nouvelle gives nouvel. The same move gives bel and vieil. Unit 11.',
        ref: REF,
      },
      {
        q: 'Write the masculine plural of beau.',
        format: 'typeIn',
        accept: ['beaux'],
        answer: 'beaux',
        why: 'beaux, with an x. No unit at any level before this one claimed the -eaux plural, and it is silent, so it is a written form and nothing else. Unit 11.',
        ref: REF,
      },
      {
        q: 'Tap the letters you do not say in « nouveaux ».',
        format: 'tapSilent',
        word: 'nouveaux',
        correct: 'x',
        why: 'The x is silent, so nouveau and nouveaux are one sound and the number lives on the page alone. That is why five written forms come out of the mouth as two. Unit 11.',
        ref: REF,
      },
      {
        q: 'A learner writes « un beau appartement ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'un beau appartement',
        accept: ['un bel appartement'],
        answer: 'un bel appartement',
        why: 'un bel appartement. French will not run two vowel sounds together here, which is the same reason le becomes l’ and ma becomes mon in front of a vowel. Unit 11.',
        ref: REF,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Cet homme est vieil.', 'Cet homme est vieux.', 'Cet homme est vieille.', 'Cet homme est vieilles.'],
        correct: 1,
        why: 'Cet homme est vieux. The short form only exists in front of the noun. Behind the verb there is no vowel coming, so there is nothing for it to solve. Unit 11.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 12 ────────────────────────────────────────────────────────── */
  {
    id: 'r12-a2-17-adverbes',
    label: 'Unit 12 · Adverbs',
    targets: ['err-agreement'],
    say: 'Say the feminine, then add the ending.',
    questions: [
      {
        q: 'Write the adverb built on lent.',
        format: 'typeIn',
        accept: ['lentement'],
        answer: 'lentement',
        why: 'lentement, off the feminine lente. The t you never say in lent is said in lentement, so the base is audible in the derivative and the rule is a sound rule as well as a spelling one. Unit 12.',
        ref: REF,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['évidamment', 'évidemment', 'évidammant', 'évidemant'],
        correct: 1,
        why: 'évidemment. A describing word in -ent gives -emment and one in -ant gives -amment, and the two endings are one sound, so nothing in the mouth tells you which you are writing. A picked answer is the only kind that can ask this. Unit 12.',
        ref: REF,
      },
      {
        q: 'Write the adverb built on heureux.',
        format: 'typeIn',
        accept: ['heureusement'],
        answer: 'heureusement',
        why: 'heureusement, off the feminine heureuse. Going through the feminine is not a memory aid: it is where the consonant comes from. Unit 12.',
        ref: REF,
      },
      {
        q: 'Which is the adverb for bon?',
        format: 'mcq',
        opts: ['bonnement', 'bien', 'bonement', 'bonnemment'],
        correct: 1,
        why: 'bien. Three adverbs stand outside the rule: bien for bon, mal for mauvais, and vite, which has no describing word behind it at all. Unit 12.',
        ref: REF,
      },
      {
        q: 'A learner writes « Il parle lent ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Il parle lent.',
        accept: ['Il parle lentement'],
        answer: 'Il parle lentement.',
        why: 'Il parle lentement. English lets a describing word stand in for an adverb in speech and French does not: what modifies a verb has to be built. Unit 12.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 13 ────────────────────────────────────────────────────────── */
  {
    id: 'r13-a2-04-prepositions-lieu',
    label: 'Unit 13 · Prepositions of place',
    targets: ['err-preposition'],
    say: 'What the little word does to the article is the whole choice.',
    questions: [
      {
        q: 'Which is the French for: to Japan',
        format: 'mcq',
        opts: ['à Japon', 'au Japon', 'en Japon', 'à le Japon'],
        correct: 1,
        why: 'au Japon, which is à plus le folded into one word. A masculine country keeps its article and the article contracts. Unit 13.',
        ref: REF,
      },
      {
        q: 'Write the French for: at the doctor’s',
        format: 'typeIn',
        accept: ['chez le médecin'],
        answer: 'chez le médecin',
        why: 'chez le médecin. chez is the one locative preposition that neither contracts with the article nor throws it away, and it only ever takes a person. Unit 13.',
        ref: REF,
      },
      {
        q: 'Which is the French for: in France',
        format: 'mcq',
        opts: ['à France', 'en France', 'à la France', 'dans France'],
        correct: 1,
        why: 'en France. en throws the article out, where à folds it in and chez leaves it alone. Three prepositions, three things done to one article. Unit 13.',
        ref: REF,
      },
      {
        q: 'A learner writes « Je vais à le marché ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je vais à le marché.',
        accept: ['Je vais au marché'],
        answer: 'Je vais au marché.',
        why: 'Je vais au marché. à le is never written in French; it is always au. The same operation gives aux with les. Unit 13.',
        ref: REF,
      },
      {
        q: 'Write the French for: to Paris',
        format: 'typeIn',
        accept: ['à Paris'],
        answer: 'à Paris',
        why: 'à Paris, with no article at all. A city takes a bare à, and the absence is a fact about city names rather than something a rule removed. Unit 13.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 14 ────────────────────────────────────────────────────────── */
  {
    id: 'r14-a2-18-prepositions-temps',
    label: 'Unit 14 · Prepositions of time',
    targets: ['err-preposition'],
    say: 'If it is still going, French keeps the verb in the present.',
    questions: [
      {
        q: 'Which is the French for: I have been living here for three years',
        format: 'mcq',
        opts: ['J’ai habité ici depuis trois ans.', 'J’habite ici depuis trois ans.', 'J’habite ici pendant trois ans.', 'J’habite ici il y a trois ans.'],
        correct: 1,
        why: 'J’habite ici depuis trois ans, in the present, because you still live there. English reaches for a past tense here and French does not, which is the one calque this unit exists to stop. Unit 14.',
        ref: REF,
      },
      {
        q: 'Write the French for: during the holidays',
        format: 'typeIn',
        accept: ['pendant les vacances'],
        answer: 'pendant les vacances',
        why: 'pendant les vacances. depuis is a span that is still open and pendant is one that is closed, and English says for in both places. Unit 14.',
        ref: REF,
      },
      {
        q: 'Write the French for: three years ago',
        format: 'typeIn',
        accept: ['il y a trois ans'],
        answer: 'il y a trois ans',
        why: 'il y a trois ans. One form, two jobs again: a measurement of time behind it makes it ago, and a plain noun behind it makes it there is. Unit 14.',
        ref: REF,
      },
      {
        q: 'A learner writes « Je pars en trois jours ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je pars en trois jours.',
        accept: ['Je pars dans trois jours'],
        answer: 'Je pars dans trois jours.',
        why: 'Je pars dans trois jours. dans is the time before something starts and en is the time it takes to finish, which is the pair that decides whether you have left yet. Unit 14.',
        ref: REF,
      },
      {
        q: 'Which means: it took me ten minutes',
        format: 'mcq',
        opts: ['J’ai fini dans dix minutes.', 'J’ai fini en dix minutes.', 'J’ai fini depuis dix minutes.', 'J’ai fini pendant dix minutes.'],
        correct: 1,
        why: 'en dix minutes. en measures the work and dans measures the wait, and choosing wrong turns a finished job into an appointment. Unit 14.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 15 ────────────────────────────────────────────────────────── */
  {
    id: 'r15-a2-19-futur-proche',
    label: 'Unit 15 · The near future',
    targets: ['err-negation'],
    say: 'Two verbs, and the small words go round the first one.',
    questions: [
      {
        q: 'Write the French for: I am going to eat',
        format: 'typeIn',
        accept: ['Je vais manger'],
        answer: 'Je vais manger.',
        why: 'Je vais manger. aller carries the person and the second verb stays in its naming form, exactly as it did behind vouloir and pouvoir. Unit 15.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Je vais manger.'),
        opts: ['Je vais manger.', 'J’ai mangé.', 'Je mange.', 'Je viens de manger.'],
        correct: 0,
        why: 'Je vais manger. Four ways of placing one action in time, and the first word of each is what separates them. The verb at the end of the first two is one sound either way. Unit 15.',
        ref: REF,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Je vais ne pas partir.', 'Je ne vais pas partir.', 'Je ne pars pas partir.', 'Je vais pas ne partir.'],
        correct: 1,
        why: 'Je ne vais pas partir. The two halves of the negative wrap the verb that changed, not the one carrying the meaning. Unit 15.',
        ref: REF,
      },
      {
        q: 'A learner writes « Je vais ne pas sortir ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je vais ne pas sortir.',
        accept: ['Je ne vais pas sortir'],
        answer: 'Je ne vais pas sortir.',
        why: 'Je ne vais pas sortir. Wrapping the second verb is the reflex English gives you, and the rule holds unchanged for the modals and for the compound past. Unit 15.',
        ref: REF,
      },
      {
        q: 'Which of these is NOT the near future?',
        format: 'mcq',
        opts: ['Je vais travailler.', 'Je vais à Paris.', 'Je vais partir.', 'Je vais manger.'],
        correct: 1,
        why: 'Je vais à Paris is a journey, not a plan. aller plus a verb is the future and aller plus a place is movement, and the next word is the only thing separating them. Unit 15.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 16 ────────────────────────────────────────────────────────── */
  {
    id: 'r16-a2-05-passe-compose-avoir',
    label: 'Unit 16 · The passé composé with avoir',
    targets: ['err-tense'],
    say: 'One verb, two words, and the small ones go in between.',
    questions: [
      {
        q: 'Write the French for: I ate at noon',
        format: 'typeIn',
        accept: ['J’ai mangé à midi'],
        answer: 'J’ai mangé à midi.',
        why: 'J’ai mangé à midi. avoir carries the person and the second word is the past form, which for an -er verb ends in -é. Unit 16.',
        ref: REF,
      },
      {
        q: 'Which is the past form of vendre?',
        format: 'mcq',
        opts: ['vendé', 'vendu', 'vendi', 'vendit'],
        correct: 1,
        why: 'vendu. One ending per family: -er gives -é, -ir gives -i, -re gives -u. Three endings cover every regular verb in the language. Unit 16.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('J’ai fini le travail.'),
        opts: ['J’ai fini le travail.', 'Je finis le travail.', 'Je vais finir le travail.', 'Je viens de finir le travail.'],
        correct: 0,
        why: 'J’ai fini. The past form of an -ir verb is the same sound as its je form, so the first word is the only thing that puts the sentence in the past. Unit 16.',
        ref: REF,
      },
      {
        q: 'A learner writes « Je n’ai mangé pas ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je n’ai mangé pas.',
        accept: ['Je n’ai pas mangé'],
        answer: 'Je n’ai pas mangé.',
        why: 'Je n’ai pas mangé. The negative wraps the first word, which is the same rule the near future ran, and the gap between the two words is where the small words live. Unit 16.',
        ref: REF,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Elle a mangée.', 'Elle a mangé.', 'Elle est mangé.', 'Elle a mangés.'],
        correct: 1,
        why: 'Elle a mangé. After avoir the second word never agrees with the subject, in any person or gender. That is what makes the être verbs of unit 18 different rather than difficult. Unit 16.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 17 ────────────────────────────────────────────────────────── */
  {
    id: 'r17-a2-20-participes-irreguliers',
    label: 'Unit 17 · The past forms you cannot build',
    targets: ['err-participle'],
    say: 'Do not build these. Reach for the group they are in.',
    questions: [
      {
        q: 'Write the past form of prendre.',
        format: 'typeIn',
        accept: ['pris'],
        answer: 'pris',
        why: 'pris. An -re verb giving -is rather than -u is the clearest sign that the naming form tells you nothing about the past form. mettre gives mis the same way. Unit 17.',
        ref: REF,
      },
      {
        q: 'What is the past form of avoir?',
        format: 'mcq',
        opts: ['avu', 'eu', 'avé', 'ayé'],
        correct: 1,
        why: 'eu, and it is said /y/, which none of its three letters would lead you to expect. It is one of the five that belong to no group at all. Unit 17.',
        ref: REF,
      },
      {
        q: 'Write the past form of ouvrir.',
        format: 'typeIn',
        accept: ['ouvert'],
        answer: 'ouvert',
        why: 'ouvert. An -ir verb giving -ert is the other direction of the same point, and offrir and souffrir go with it. Unit 17.',
        ref: REF,
      },
      {
        q: 'Which is the past form of devoir?',
        format: 'mcq',
        opts: ['du', 'dû', 'devu', 'devé'],
        correct: 1,
        why: 'dû, with the little roof. It is the only thing separating it in writing from the du that means some, and it comes off in the feminine due. A typed answer cannot ask this, because the accent is stripped before the comparison. Unit 17.',
        ref: REF,
      },
      {
        q: 'A learner writes « J’ai prendu le train ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'J’ai prendu le train.',
        accept: ['J’ai pris le train'],
        answer: 'J’ai pris le train.',
        why: 'J’ai pris le train. Building the form from the family ending is the reflex, and for these thirty-three verbs it is always wrong. Cover the prefix and apprendre gives appris the same way. Unit 17.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 18 ────────────────────────────────────────────────────────── */
  {
    id: 'r18-a2-21-passe-compose-etre',
    label: 'Unit 18 · The passé composé with être',
    targets: ['err-auxiliary'],
    say: 'Fifteen verbs take the other first word, and then the second one moves.',
    questions: [
      {
        q: 'Which first word does aller take in the past?',
        format: 'mcq',
        opts: ['avoir', 'être', 'faire', 'aller'],
        correct: 1,
        why: 'être. Fifteen verbs of movement and change of state take it, and once you are on être the second word agrees with the subject. Unit 18.',
        ref: REF,
      },
      {
        q: 'Write the French for: She went out',
        format: 'typeIn',
        accept: ['Elle est sortie'],
        answer: 'Elle est sortie.',
        why: 'Elle est sortie, with the -e. The agreement is written and silent, so nothing in the sentence out loud tells you it is missing. Unit 18.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Elle est morte.'),
        opts: ['Il est mort.', 'Elle est morte.', 'Il est parti.', 'Elle est partie.'],
        correct: 1,
        why: 'Elle est morte. Of the fifteen, mourir is the only one whose agreement you can hear: the feminine ending lets the t out. On the other fourteen the ear has the pronoun and nothing else. Unit 18.',
        ref: REF,
      },
      {
        q: 'Tap the letters you do not say in « allées ».',
        format: 'tapSilent',
        word: 'allées',
        correct: 'es',
        why: 'Both the final e and the s are silent, so all four written forms of this past form are one sound. The agreement is a fact about the page. Unit 18.',
        ref: REF,
      },
      {
        q: 'A learner writes « Elle a allé au marché ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Elle a allé au marché.',
        accept: ['Elle est allée au marché'],
        answer: 'Elle est allée au marché.',
        why: 'Elle est allée. Two things move together: the first word becomes être and the second word then has to agree. Getting the first one right and forgetting the second is the commonest half-repair in the band. Unit 18.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 19 ────────────────────────────────────────────────────────── */
  {
    id: 'r19-a2-22-pronominaux',
    label: 'Unit 19 · The verbs with an extra word',
    targets: ['err-clitic'],
    say: 'The extra word changes with the subject, because it is the subject.',
    questions: [
      {
        q: 'Write the French for: I get up early',
        format: 'typeIn',
        accept: ['Je me lève tôt'],
        answer: 'Je me lève tôt.',
        why: 'Je me lève tôt. The extra word is the subject in its other shape, so it moves through all six persons rather than sitting there as a fixed particle. Unit 19.',
        ref: REF,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Je ne lève pas me tôt.', 'Je ne me lève pas tôt.', 'Je me ne lève pas tôt.', 'Je ne me pas lève tôt.'],
        correct: 1,
        why: 'Je ne me lève pas tôt. The two halves of the negative go round the extra word AND the verb together, because the two behave as one thing. Unit 19.',
        ref: REF,
      },
      {
        q: 'Write the nous form of se lever.',
        format: 'typeIn',
        accept: ['nous nous levons'],
        answer: 'nous nous levons',
        why: 'nous nous levons. The word appears twice and that is correct: the first is the subject, the second is the object, and they happen to be spelled the same. Unit 19.',
        ref: REF,
      },
      {
        q: 'Write the French for: His name is Marc',
        format: 'typeIn',
        accept: ['Il s’appelle Marc'],
        answer: 'Il s’appelle Marc.',
        why: 'Il s’appelle Marc, with the extra word shortened in front of the vowel. s’appeler is one of the verbs that carries the word without turning the action back on the subject. Unit 19.',
        ref: REF,
      },
      {
        q: 'Which means: I wash the car',
        format: 'mcq',
        opts: ['Je me lave.', 'Je lave la voiture.', 'Je me lave la voiture.', 'Je lave.'],
        correct: 1,
        why: 'Je lave la voiture. The same verb with the extra word turns the action back on the subject, and without it takes an ordinary object. One verb, two jobs, and the extra word decides. Unit 19.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 20 ────────────────────────────────────────────────────────── */
  {
    id: 'r20-a2-23-pronominaux-passe',
    label: 'Unit 20 · The extra word in the past',
    targets: ['err-auxiliary'],
    say: 'If the little word is there, the first word is être.',
    questions: [
      {
        q: 'Which first word does se laver take in the past?',
        format: 'mcq',
        opts: ['avoir', 'être', 'faire', 'aller'],
        correct: 1,
        why: 'être, always, whatever the verb takes without the extra word. laver on its own takes avoir and se laver takes être, and the little word is the whole reason. Unit 20.',
        ref: REF,
      },
      {
        q: 'Write the French for: She got up',
        format: 'typeIn',
        accept: ['Elle s’est levée'],
        answer: 'Elle s’est levée.',
        why: 'Elle s’est levée. Four things in a row: subject, little word, first word, second word, and the second word agrees with the subject exactly as it did in unit 18. Unit 20.',
        ref: REF,
      },
      {
        q: 'Write the French for: They got up (two men)',
        format: 'typeIn',
        accept: ['Ils se sont levés'],
        answer: 'Ils se sont levés.',
        why: 'Ils se sont levés, with the -s. Nothing in the sentence is audibly plural except the pronoun, so the whole agreement lives on the page. Unit 20.',
        ref: REF,
      },
      {
        q: 'A learner writes « Elle s’a lavée ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Elle s’a lavée.',
        accept: ['Elle s’est lavée'],
        answer: 'Elle s’est lavée.',
        why: 'Elle s’est lavée. The little word is the signal and it is a reliable one: wherever it appears, the first word is être. Unit 20.',
        ref: REF,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Il s’est ne pas levé.', 'Il ne s’est pas levé.', 'Il ne s’est levé pas.', 'Il s’est pas ne levé.'],
        correct: 1,
        why: 'Il ne s’est pas levé. Three elements now sit inside the wrap and the second word stays outside it, which is the same rule stretched over one more piece. Unit 20.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 21 ────────────────────────────────────────────────────────── */
  {
    id: 'r21-a2-06-pronoms-direct',
    label: 'Unit 21 · Direct object pronouns',
    targets: ['err-clitic'],
    say: 'The word that replaces the thing goes in front of the verb.',
    questions: [
      {
        q: 'Replace « le livre »: I see the book.',
        format: 'mcq',
        opts: ['Je vois le.', 'Je le vois.', 'Je vois lui.', 'Je lui vois.'],
        correct: 1,
        why: 'Je le vois. English puts it behind the verb and French puts it in front, and that placement is not optional in a finished sentence. Unit 21.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('Je les vois.'),
        opts: ['Je le vois.', 'Je les vois.', 'Je la vois.', 'Je vois.'],
        correct: 1,
        why: 'Je les vois. These three pronouns are the one part of the system the ear can settle, because le, la and les are three different vowels. Unit 21.',
        ref: REF,
      },
      {
        q: 'Write the French for: I bought them (les fleurs)',
        format: 'typeIn',
        accept: ['Je les ai achetées'],
        answer: 'Je les ai achetées.',
        why: 'Je les ai achetées. The pronoun goes in front of the first word, and because it is standing in front of the verb the second word agrees with it. Unit 21.',
        ref: REF,
      },
      {
        q: 'A learner writes « Je vois le ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je vois le.',
        accept: ['Je le vois'],
        answer: 'Je le vois.',
        why: 'Je le vois. The English word order survives the vocabulary, which is why this comes out right in the head and wrong in the mouth. Unit 21.',
        ref: REF,
      },
      {
        q: 'In « Je l’aime », what is being loved?',
        format: 'mcq',
        opts: ['A man', 'A woman', 'Several people', 'The sentence does not say'],
        correct: 3,
        why: 'The sentence does not say. In front of a vowel both le and la shorten to l’, so the gender you would have read off the pronoun is gone. Unit 21.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 22 ────────────────────────────────────────────────────────── */
  {
    id: 'r22-a2-24-pronoms-indirect',
    label: 'Unit 22 · Indirect object pronouns',
    targets: ['err-clitic'],
    say: 'If the person sits behind à, the word is lui or leur.',
    questions: [
      {
        q: 'Write the French for: I speak to him',
        format: 'typeIn',
        accept: ['Je lui parle'],
        answer: 'Je lui parle.',
        why: 'Je lui parle. parler puts its person behind à, so the pronoun is lui, and the à disappears into it rather than being said twice. Unit 22.',
        ref: REF,
      },
      {
        q: 'Write the French for: I write to them',
        format: 'typeIn',
        accept: ['Je leur écris'],
        answer: 'Je leur écris.',
        why: 'Je leur écris. leur here is a pronoun and never takes an -s, whatever the number of people. The leur that does take one belongs to unit 34. Unit 22.',
        ref: REF,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Je leurs téléphone.', 'Je leur téléphone.', 'Je les téléphone.', 'Je le téléphone.'],
        correct: 1,
        why: 'Je leur téléphone. téléphoner is one of the verbs English marks with nothing and French marks with à, which is why the direct pronoun feels right here and is not. Unit 22.',
        ref: REF,
      },
      {
        q: 'A learner writes « Je leurs parle ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je leurs parle.',
        accept: ['Je leur parle'],
        answer: 'Je leur parle.',
        why: 'Je leur parle. The -s is silent, so the mistake is invisible out loud and only ever appears in writing. Unit 22.',
        ref: REF,
      },
      {
        q: 'Write the French for: I gave her the book',
        format: 'typeIn',
        accept: ['Je lui ai donné le livre'],
        answer: 'Je lui ai donné le livre.',
        why: 'Je lui ai donné le livre, with no agreement on the second word. The past form never agrees with an indirect object, which is exactly why « Elle s’est lavé les mains » does not agree either. Unit 22.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 23 ────────────────────────────────────────────────────────── */
  {
    id: 'r23-a2-25-y-en',
    label: 'Unit 23 · Y and en',
    targets: ['err-yen'],
    say: 'The preposition goes inside the pronoun, so it is not said twice.',
    questions: [
      {
        q: 'Write the French for: I am going there',
        format: 'typeIn',
        accept: ['J’y vais'],
        answer: 'J’y vais.',
        why: 'J’y vais. y swallows the à as well as the place, which is why saying à again after it is the classic double. Unit 23.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('J’en veux.'),
        opts: ['J’y vais.', 'J’en veux.', 'J’y pense.', 'J’en ai.'],
        correct: 1,
        why: 'J’en veux. y and en are two clearly different sounds, so the pair the ear cannot settle is not this one: it is which preposition the verb wanted in the first place. Unit 23.',
        ref: REF,
      },
      {
        q: 'Which is the French for: I have three of them',
        format: 'mcq',
        opts: ['J’ai trois.', 'J’en ai trois.', 'J’ai en trois.', 'J’en trois ai.'],
        correct: 1,
        why: 'J’en ai trois. The number stays and the noun goes, and English has no word doing en’s job here at all. Unit 23.',
        ref: REF,
      },
      {
        q: 'A learner answers « Vous avez du pain ? » with « Oui, j’ai ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Oui, j’ai.',
        accept: ['Oui, j’en ai'],
        answer: 'Oui, j’en ai.',
        why: 'Oui, j’en ai. English lets you stop at I do and French does not: the pronoun is required, not decorative. Unit 23.',
        ref: REF,
      },
      {
        q: 'Which order is right?',
        format: 'mcq',
        opts: ['Il en y a.', 'Il y en a.', 'Il a y en.', 'Il y a en.'],
        correct: 1,
        why: 'Il y en a. y comes before en, and this is the one pair of these pronouns whose order the A2 band settles. Unit 23.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 24 ────────────────────────────────────────────────────────── */
  {
    id: 'r24-a2-07-restaurant',
    label: 'Unit 24 · At the restaurant',
    targets: ['err-register'],
    say: 'You never start. He asks, you answer.',
    questions: [
      {
        q: 'You sit down and the server arrives. What does he say?',
        format: 'mcq',
        opts: ['Qu’est-ce que vous voulez ?', 'Vous avez choisi ?', 'Vous mangez quoi ?', 'Je vous écoute ?'],
        correct: 1,
        why: 'Vous avez choisi ? Your half of this encounter is the answering half, and knowing which of his eight questions has arrived is most of the work. Unit 24.',
        ref: REF,
      },
      {
        q: 'Say it: ask for the bill',
        format: 'speak',
        target: 'L’addition, s’il vous plaît.',
        accept: ['L’addition, s’il vous plaît'],
        answer: 'L’addition, s’il vous plaît.',
        why: 'L’addition, s’il vous plaît. Four words and it closes the encounter. The bill does not arrive on its own in France, so this one has to be said. Unit 24.',
        ref: REF,
      },
      {
        q: 'Write the French for: I will have the fish',
        format: 'typeIn',
        accept: ['Je vais prendre le poisson'],
        answer: 'Je vais prendre le poisson.',
        why: 'Je vais prendre le poisson. The near future is the ordinary way to order, which is one of the two or three places where a whole grammar unit turns out to be a piece of the script. Unit 24.',
        ref: REF,
      },
      {
        q: 'A learner says « Je veux le poisson » to a server. Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je veux le poisson.',
        accept: ['Je voudrais le poisson'],
        answer: 'Je voudrais le poisson.',
        why: 'Je voudrais le poisson. je veux is the one rung on the ordering ladder that reads as an instruction, and it is the rung an English speaker reaches for first. Unit 24.',
        ref: REF,
      },
      {
        q: 'You did not catch what he said. Which?',
        format: 'mcq',
        opts: ['Quoi ?', 'Pardon, vous pouvez répéter ?', 'Je ne comprends pas rien.', 'Encore ?'],
        correct: 1,
        why: 'Pardon, vous pouvez répéter ? The repair ladder is ordered by what it costs you to use, and this rung costs almost nothing. Quoi on its own costs a great deal. Unit 24.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 25 ────────────────────────────────────────────────────────── */
  {
    id: 'r25-a2-26-courses-argent',
    label: 'Unit 25 · Shopping and money',
    targets: ['err-register'],
    say: 'The number comes once. Asking again is part of the script.',
    questions: [
      {
        q: 'Listen. What is the total?',
        format: 'listenChoose',
        audio: HEAR('Ça fait douze euros quarante.'),
        opts: ['12,40 €', '2,40 €', '12,04 €', '12,14 €'],
        correct: 0,
        why: 'Twelve euros forty. The cents are said as a bare number with no word after them, which is what makes a price shorter than a learner expects. Unit 25.',
        ref: REF,
      },
      {
        q: 'The cashier says « sur vingt euros ». What is the twenty?',
        format: 'mcq',
        opts: ['Your change', 'The note you handed over', 'The total', 'A discount'],
        correct: 1,
        why: 'The note you handed over. She is counting up from the price to what you gave her, and hearing it as the change is how you walk away short. Unit 25.',
        ref: REF,
      },
      {
        q: 'Write the French for: How much is it?',
        format: 'typeIn',
        accept: ['Ça fait combien'],
        answer: 'Ça fait combien ?',
        why: 'Ça fait combien ? The same frame the cashier uses to tell you, turned round. Reusing her words is the shortest route to being understood. Unit 25.',
        ref: REF,
      },
      {
        q: 'A learner writes « un kilo des pommes ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'un kilo des pommes',
        accept: ['un kilo de pommes'],
        answer: 'un kilo de pommes',
        why: 'un kilo de pommes. A container takes a plain de and nothing else, whatever the noun behind it. Unit 25.',
        ref: REF,
      },
      {
        q: 'A shop assistant offers help and you want to look on your own. Which?',
        format: 'mcq',
        opts: ['Non.', 'Non merci, je regarde.', 'Je ne veux pas.', 'Rien.'],
        correct: 1,
        why: 'Non merci, je regarde. Leaving without going silent is a script of its own, and this is its whole first move. Unit 25.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 26 ────────────────────────────────────────────────────────── */
  {
    id: 'r26-a2-27-transports',
    label: 'Unit 26 · Getting about',
    targets: ['err-register'],
    say: 'Find the joints, then take one move at a time.',
    questions: [
      {
        q: 'Write the French for: the second on the right',
        format: 'typeIn',
        accept: ['la deuxième à droite'],
        answer: 'la deuxième à droite',
        why: 'la deuxième à droite. A spoken direction counts turnings, so the ordinals are the part of it you cannot afford to lose. Unit 26.',
        ref: REF,
      },
      {
        q: 'Write the French for: A return ticket, please',
        format: 'typeIn',
        accept: ['Un aller-retour, s’il vous plaît'],
        answer: 'Un aller-retour, s’il vous plaît.',
        why: 'Un aller-retour, s’il vous plaît. The ticket names the journey rather than the direction, so it is one word rather than a sentence. Unit 26.',
        ref: REF,
      },
      {
        q: 'Which word separates one move from the next?',
        format: 'mcq',
        opts: ['parce que', 'jusqu’à', 'pendant', 'chez'],
        correct: 1,
        why: 'jusqu’à, and puis, ensuite, après and au bout de do the same job. Hearing the joints is how four moves stay four moves rather than becoming one long noise. Unit 26.',
        ref: REF,
      },
      {
        q: 'A learner writes « Je vais à métro ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je vais à métro.',
        accept: ['Je vais en métro'],
        answer: 'Je vais en métro.',
        why: 'Je vais en métro. You go IN the things you get inside and ON the ones you sit astride, which is why it stays à pied and à vélo. Unit 26.',
        ref: REF,
      },
      {
        q: 'Write the French for: Where is the station?',
        format: 'typeIn',
        accept: ['Où est la gare'],
        answer: 'Où est la gare ?',
        why: 'Où est la gare ? The street form of the question, which is shorter than the counter form and is what you use to a passer-by. Unit 26.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 27 ────────────────────────────────────────────────────────── */
  {
    id: 'r27-a2-28-medecin',
    label: 'Unit 27 · At the doctor',
    targets: ['err-register'],
    say: 'English gives you one shape for a symptom. French picks one of three.',
    questions: [
      {
        q: 'Which is the French for: My head hurts',
        format: 'mcq',
        opts: ['Ma tête fait mal.', 'J’ai mal à la tête.', 'Je suis mal à la tête.', 'Ma tête est mal.'],
        correct: 1,
        why: 'J’ai mal à la tête. French has the pain and English is the pain, and the body part sits behind à with its article. Unit 27.',
        ref: REF,
      },
      {
        q: 'Listen. How often?',
        format: 'listenChoose',
        audio: HEAR('Trois fois par jour.'),
        opts: ['Three times a day', 'Every three hours', 'For three days', 'Three at a time'],
        correct: 0,
        why: 'Three times a day. Against toutes les trois heures, which is eight, and mishearing one for the other changes the amount taken. Unit 27.',
        ref: REF,
      },
      {
        q: 'Write the French for: I have a temperature',
        format: 'typeIn',
        accept: ['J’ai de la fièvre'],
        answer: 'J’ai de la fièvre.',
        why: 'J’ai de la fièvre. This is the second of the three symptom shapes: avoir plus the thing itself, and the article is the one that means an amount rather than a count. Unit 27.',
        ref: REF,
      },
      {
        q: 'A learner writes « J’ai mal à le dos ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'J’ai mal à le dos.',
        accept: ['J’ai mal au dos'],
        answer: 'J’ai mal au dos.',
        why: 'J’ai mal au dos. à le contracts wherever it appears, and it appears in the middle of the sentence you most need at a surgery. Unit 27.',
        ref: REF,
      },
      {
        q: 'You do not know the French for the symptom. What do you do?',
        format: 'mcq',
        opts: ['Ask him to repeat', 'Describe around it: c’est comme une brûlure', 'Say it in English', 'Point and say nothing'],
        correct: 1,
        why: 'Describe around it. Asking for a repeat cannot help here, because the missing word is yours rather than his. Unit 27.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 28 ────────────────────────────────────────────────────────── */
  {
    id: 'r28-a2-29-hotel',
    label: 'Unit 28 · At the hotel',
    targets: ['err-register'],
    say: 'Take the person out of the sentence.',
    questions: [
      {
        q: 'You arrive at the desk. Which?',
        format: 'mcq',
        opts: ['Je veux une chambre.', 'Bonjour, j’ai une réservation.', 'Ma chambre ?', 'Vous avez ma chambre ?'],
        correct: 1,
        why: 'Bonjour, j’ai une réservation. The greeting is not optional at a desk, and the sentence after it is one you can have ready before you walk in. Unit 28.',
        ref: REF,
      },
      {
        q: 'Say it: report that a towel is missing',
        format: 'speak',
        target: 'Il manque une serviette.',
        accept: ['Il manque une serviette'],
        answer: 'Il manque une serviette.',
        why: 'Il manque une serviette. No subject, so nobody is being accused of anything, which is the whole reason this frame exists. Unit 28.',
        ref: REF,
      },
      {
        q: 'Write the French for: The room is too noisy',
        format: 'typeIn',
        accept: ['La chambre est trop bruyante'],
        answer: 'La chambre est trop bruyante.',
        why: 'La chambre est trop bruyante, agreeing with chambre. Reporting the room rather than the staff is the same move as il manque, one rung further up. Unit 28.',
        ref: REF,
      },
      {
        q: 'A learner says « Je veux une autre chambre » at the desk. Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je veux une autre chambre.',
        accept: ['Je voudrais une autre chambre'],
        answer: 'Je voudrais une autre chambre.',
        why: 'Je voudrais une autre chambre. Correct French and still wrong: the register does the work here and je veux spends goodwill you may need later in the stay. Unit 28.',
        ref: REF,
      },
      {
        q: 'What does « toujours pas » tell the person you are speaking to?',
        format: 'mcq',
        opts: ['That you are angry', 'That you have already asked once', 'That you are leaving', 'That you will pay later'],
        correct: 1,
        why: 'That you have already asked once. It marks the second asking without raising the voice, which is exactly what you want it to do. Unit 28.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 29 ────────────────────────────────────────────────────────── */
  {
    id: 'r29-a2-30-travail-metiers',
    label: 'Unit 29 · Work and jobs',
    targets: ['err-register'],
    say: 'The first sentence is the anchor, not the answer.',
    questions: [
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Je suis un professeur.', 'Je suis professeur.', 'J’ai professeur.', 'Je fais professeur.'],
        correct: 1,
        why: 'Je suis professeur, with no article. A job after être takes nothing in front of it, which is the one place French drops an article where English keeps one. Unit 29.',
        ref: REF,
      },
      {
        q: 'Write the French for: I work in a school',
        format: 'typeIn',
        accept: ['Je travaille dans une école'],
        answer: 'Je travaille dans une école.',
        why: 'Je travaille dans une école. This is the second move, and stopping after the first one is what leaves the conversation on the floor. Unit 29.',
        ref: REF,
      },
      {
        q: 'Say it: hand the question back',
        format: 'speak',
        target: 'Et vous, qu’est-ce que vous faites ?',
        accept: ['Et vous, qu’est-ce que vous faites'],
        answer: 'Et vous, qu’est-ce que vous faites ?',
        why: 'Et vous, qu’est-ce que vous faites ? The hand-back is the fourth move and it is what turns an answer into a conversation. Unit 29.',
        ref: REF,
      },
      {
        q: 'A learner writes « Je suis un ingénieur ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je suis un ingénieur.',
        accept: ['Je suis ingénieur'],
        answer: 'Je suis ingénieur.',
        why: 'Je suis ingénieur. The article comes back the moment you describe the job rather than name it: « Je suis un bon ingénieur » is correct. Unit 29.',
        ref: REF,
      },
      {
        q: 'Which pair are both used?',
        format: 'mcq',
        opts: ['un serveur, une serveur', 'un serveur, une serveuse', 'un serveur, une serveure', 'un serveur, une servante'],
        correct: 1,
        why: 'un serveur, une serveuse. Where a pair exists this band uses it, and where one does not the masculine form covers both. Unit 29.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 30 ────────────────────────────────────────────────────────── */
  {
    id: 'r30-a2-31-ecole-etudes',
    label: 'Unit 30 · School and studies',
    targets: ['err-register'],
    say: 'They will not know the name of your diploma. Say what it was.',
    questions: [
      {
        q: 'Which is the French for: I study maths',
        format: 'mcq',
        opts: ['Je fais les maths.', 'Je fais des maths.', 'J’étudie les maths à.', 'Je suis maths.'],
        correct: 1,
        why: 'Je fais des maths. faire de plus the subject is the everyday way to say it, and the article that follows de is the one that means an amount. Unit 30.',
        ref: REF,
      },
      {
        q: 'Write the French for: I studied for three years',
        format: 'typeIn',
        accept: ['J’ai étudié pendant trois ans'],
        answer: 'J’ai étudié pendant trois ans.',
        why: 'J’ai étudié pendant trois ans. The span is finished, so it is pendant rather than depuis, and the verb is in the past because the studying stopped. Unit 30.',
        ref: REF,
      },
      {
        q: 'Which is the French for: I am good at languages',
        format: 'mcq',
        opts: ['Je suis bon à langues.', 'Je suis fort en langues.', 'Je suis bien de langues.', 'Je fais bien langues.'],
        correct: 1,
        why: 'Je suis fort en langues. fort, moyen and nul are the three rungs, and the preposition is en for all three. Unit 30.',
        ref: REF,
      },
      {
        q: 'Write the French for: I am good at maths',
        format: 'typeIn',
        accept: ['Je suis fort en maths'],
        answer: 'Je suis fort en maths.',
        why: 'Je suis fort en maths, with en and not à. The preposition here is fixed to the frame rather than chosen from the place system. Unit 30.',
        ref: REF,
      },
      {
        q: 'Write the French for: I have a degree',
        format: 'typeIn',
        accept: ['J’ai un diplôme'],
        answer: 'J’ai un diplôme.',
        why: 'J’ai un diplôme. Naming the diploma tells a French listener nothing, so what follows it is how long it took and what it was in. Unit 30.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 31 ────────────────────────────────────────────────────────── */
  {
    id: 'r31-a2-32-technologie',
    label: 'Unit 31 · Technology',
    targets: ['err-register'],
    say: 'One device, three names, and the listener picks which.',
    questions: [
      {
        q: 'You are on the phone to a support line. Which word for the machine?',
        format: 'mcq',
        opts: ['ma machine', 'mon ordinateur', 'mon truc', 'mon écran'],
        correct: 1,
        why: 'mon ordinateur. The full word to somebody official, the short one to a friend. The device does not change and the listener does. Unit 31.',
        ref: REF,
      },
      {
        q: 'Write the French for: I do not have wifi',
        format: 'typeIn',
        accept: ['Je n’ai pas de wifi'],
        answer: 'Je n’ai pas de wifi.',
        why: 'Je n’ai pas de wifi. After avoir in the negative the article collapses to de, which is a rule from A1 doing its work inside a sentence about a router. Unit 31.',
        ref: REF,
      },
      {
        q: 'A French screen offers to help you sign in again. Which does it say?',
        format: 'mcq',
        opts: ['Mot de passe perdu', 'Mot de passe oublié', 'Mot de passe cassé', 'Mot de passe manqué'],
        correct: 1,
        why: 'Mot de passe oublié. Interface strings are learnt whole rather than built, because the screen will not accept a synonym. Unit 31.',
        ref: REF,
      },
      {
        q: 'Write the French for: I am going to send an email',
        format: 'typeIn',
        accept: ['Je vais envoyer un mail'],
        answer: 'Je vais envoyer un mail.',
        why: 'Je vais envoyer un mail. envoyer, not téléphoner: the verb English shares between a call and a message is two verbs in French. Unit 31.',
        ref: REF,
      },
      {
        q: 'Write the French for: I forgot my password',
        format: 'typeIn',
        accept: ['J’ai oublié mon mot de passe'],
        answer: 'J’ai oublié mon mot de passe.',
        why: 'J’ai oublié mon mot de passe. The screen says it without a subject and you say it with one, which is the difference between reading a button and asking for help. Unit 31.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 32 ────────────────────────────────────────────────────────── */
  {
    id: 'r32-a2-08-comparatifs',
    label: 'Unit 32 · Comparatives and superlatives',
    targets: ['err-agreement'],
    say: 'Pick the middle word and keep the frame.',
    questions: [
      {
        q: 'Which is the French for: taller than me',
        format: 'mcq',
        opts: ['plus grand de moi', 'plus grand que moi', 'plus que grand moi', 'grand plus que moi'],
        correct: 1,
        why: 'plus grand que moi. One frame with one slot in the middle, and que plus its object is not optional: dropping it gives a sentence that means something else. Unit 32.',
        ref: REF,
      },
      {
        q: 'Write the French for: the most beautiful city',
        format: 'typeIn',
        accept: ['la plus belle ville'],
        answer: 'la plus belle ville',
        why: 'la plus belle ville. The same frame with an article in front, and it is the article that carries the agreement rather than the describing word. Unit 32.',
        ref: REF,
      },
      {
        q: 'Which is right?',
        format: 'mcq',
        opts: ['Elle chante meilleur que moi.', 'Elle chante mieux que moi.', 'Elle chante plus bien que moi.', 'Elle chante plus bon que moi.'],
        correct: 1,
        why: 'Elle chante mieux. mieux goes with a verb and meilleur goes with a noun, which is the whole of the split. plus bon and plus bien do not exist. Unit 32.',
        ref: REF,
      },
      {
        q: 'A learner writes « Il est plus grand de moi ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Il est plus grand de moi.',
        accept: ['Il est plus grand que moi'],
        answer: 'Il est plus grand que moi.',
        why: 'Il est plus grand que moi. que is the comparison word and de belongs to the superlative, which is why the two get swapped. Unit 32.',
        ref: REF,
      },
      {
        q: 'Write the French for: the best restaurant in the city',
        format: 'typeIn',
        accept: ['le meilleur restaurant de la ville'],
        answer: 'le meilleur restaurant de la ville',
        why: 'le meilleur restaurant de la ville, with de and not dans. A superlative names the field it is the best of, and the field takes de. Unit 32.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 33 ────────────────────────────────────────────────────────── */
  {
    id: 'r33-a2-33-demonstratifs',
    label: 'Unit 33 · This one and that one',
    targets: ['err-determiner'],
    say: 'A noun after it means it points. No noun means it replaces.',
    questions: [
      {
        q: 'Which goes in: « ___ homme »?',
        format: 'mcq',
        opts: ['ce', 'cet', 'cette', 'ces'],
        correct: 1,
        why: 'cet homme. The h is silent so a vowel sound is coming, and ce cannot sit in front of one. It sounds exactly like cette and it is not spelled like it. Unit 33.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('ces livres'),
        opts: ['ce livre', 'ces livres', 'cette table', 'ces tables'],
        correct: 1,
        why: 'ces livres. ce and ces are two different vowels, so the number is audible here, which is the opposite of what happens in the pronoun series. Unit 33.',
        ref: REF,
      },
      {
        q: 'Write the French for: this table',
        format: 'typeIn',
        accept: ['cette table'],
        answer: 'cette table',
        why: 'cette table. The word is chosen by the noun coming after it, so what you have to know is the gender of the thing rather than anything about the pointing. Unit 33.',
        ref: REF,
      },
      {
        q: 'A learner writes « Je préfère celui ». Write it out corrected.',
        format: 'errorSpot',
        prompt: 'Je préfère celui.',
        accept: ['Je préfère celui-ci', 'Je préfère celui-là'],
        answer: 'Je préfère celui-ci.',
        why: 'Je préfère celui-ci. The replacing word cannot end a sentence: it needs -ci, -là, a de phrase or a clause behind it, and bare it is not French. Unit 33.',
        ref: REF,
      },
      {
        q: 'Which is NOT a member of either series?',
        format: 'mcq',
        opts: ['ce livre', 'c’est vrai', 'cette table', 'celui-ci'],
        correct: 1,
        why: 'c’est vrai. The ce in c’est is a subject standing in for nothing in particular, and it neither points at a noun nor replaces one. Unit 33.',
        ref: REF,
      },
    ],
  },

  /* ─── seq 34 ────────────────────────────────────────────────────────── */
  {
    id: 'r34-a2-34-pronoms-possessifs',
    label: 'Unit 34 · Mine, yours and theirs',
    targets: ['err-determiner'],
    say: 'Two words, and the thing owned picks them both.',
    questions: [
      {
        q: 'Somebody asks whose car it is. Which?',
        format: 'mcq',
        opts: ['C’est le mien.', 'C’est la mienne.', 'C’est mien.', 'C’est mienne.'],
        correct: 1,
        why: 'C’est la mienne, because voiture is feminine. The form follows the thing owned and not the person owning it, and the article in front is compulsory. Unit 34.',
        ref: REF,
      },
      {
        q: 'Listen. Which one was it?',
        format: 'listenChoose',
        audio: HEAR('les miens'),
        opts: ['le mien', 'les miens', 'la mienne', 'les miennes'],
        correct: 1,
        why: 'les miens. The -s is silent on all eighteen forms, so the number you hear is carried by the article alone. Unit 34.',
        ref: REF,
      },
      {
        q: 'Write the French for: yours (a book, speaking to a friend)',
        format: 'typeIn',
        accept: ['le tien'],
        answer: 'le tien',
        why: 'le tien, because livre is masculine and you are using tu. Two decisions, and only one of them is about the owner. Unit 34.',
        ref: REF,
      },
      {
        q: 'Write the French for: That car is mine',
        format: 'typeIn',
        accept: ['Cette voiture est la mienne'],
        answer: 'Cette voiture est la mienne.',
        why: 'Cette voiture est la mienne. Both words are picked by voiture, and leaving the article off is the mistake English trains, because English says mine with nothing in front of it. Unit 34.',
        ref: REF,
      },
      {
        q: 'Which « leur » takes an -s?',
        format: 'mcq',
        opts: ['Je leur parle.', 'leurs enfants', 'Je leur écris.', 'Je leur téléphone.'],
        correct: 1,
        why: 'leurs enfants, where leur sits in front of a noun. As the word that replaces a person behind à it never takes one, and as the possessive pronoun le leur it takes one only in les leurs. Unit 34.',
        ref: REF,
      },
    ],
  },
];

/** The thirty-four review rounds, answers spread across the option slots. */
export const REVIEW_ROUNDS: QuizRound[] = spreadAnswers(AUTHORED_REVIEW_ROUNDS);
