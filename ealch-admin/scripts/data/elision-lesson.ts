// sons.07.l1 · L'élision — the lesson body.
//
// Built on Lesson Architecture v2, in the app's own schema, modelled on
// sons.06.l1 (muettes-lesson.ts) for structure and voice. The content is this
// lesson's own.
//
// ── The one rule that governs this file ────────────────────────────────────
//
// No transcription is typed here. Every `fr`, `ipa`, `respell`, `en` and `full`
// comes from the elision corpus through `w()` and its helpers. To change how
// j'aime is transcribed you edit one line in elision-corpus.ts and every screen
// in this lesson follows. Prose the lesson teaches WITH (coach lines, rules,
// whys) is authored here, because it is lesson content rather than lexical
// data.
//
// ── Why this lesson is shaped differently from sons.06 ─────────────────────
//
// sons.06 teaches a DEFAULT with overrides, and its shape follows from that: a
// letter grid mapping every ending, then one drill per family. Elision is not
// that kind of rule, and copying that shape would have been the main way to get
// this lesson wrong. Three differences drove the shape here:
//
//   1. It is MECHANICAL, not perceptual. sons.06 asks "can you hear that this
//      letter is not there?". Elision asks "can you produce the contracted form
//      fast enough that it is automatic?". So recognition drills are cheap here
//      and production is the lesson: this lesson runs two speak missions, a
//      typeIn-heavy quiz and a dictation, and its quiz format mix is weighted to
//      speak/typeIn/errorSpot where sons.06 weighted mcq/tapSilent.
//
//   2. The trigger is a SOUND, not a letter. l'hôtel elides and le hibou does
//      not, and nothing in the spelling separates them. That is the genuinely
//      hard part, and it gets the trapDrill: the one section type built for
//      "the rule says X but these cases say otherwise", with a rule step, cards
//      and a gated drill.
//
//   3. The word list is CLOSED and short. je me te se le la de ne que ce, plus
//      si and the que compounds. Fifteen words, memorisable, unlike the
//      open-ended set of silent letters. That is why act 2 is a cardDeck over
//      the whole set rather than a letterGrid sampling a family: a learner can
//      legitimately be asked to master all of it.
//
// This lesson runs 22 missions where sons.06 runs 27. That is not a reduction
// in ambition, it is the closed word set needing less mapping and more
// repetition. Padding it to 27 would have meant four more recognition screens
// over material already covered.

import {
  type ErrorTrigger,
  type Lesson,
  type LessonDrill,
  type LessonSection,
  type QuizRound,
  type ReferenceSheet,
  type SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { BY_ID, ELISION_IDS, familyIds, H_ASPIRE_IDS, type ElisionWord } from './elision-corpus.ts';
import { TERMS } from './elision-terms.ts';
import { withScenarioAlts } from '../scenario-alts.logic.ts';

/* ─── Corpus accessors ────────────────────────────────────────────────────── */

/** One entry, by id. Throws on a typo rather than rendering a blank card. */
function w(id: string): ElisionWord {
  const found = BY_ID.get(id);
  if (!found) throw new Error(`elision-lesson: unknown corpus id "${id}"`);
  return found;
}

/** IPA as the renderer shows it: already slash-wrapped in the corpus. */
const ipa = (id: string): string => w(id).ipa ?? '';
/** Respelling in brackets. The brackets are added HERE, once, so the stored
 *  data stays clean and the notation rule is applied in exactly one place. */
const re = (id: string): string => (w(id).respell ? `[${w(id).respell}]` : '');
const fr = (id: string): string => w(id).fr;
const en = (id: string): string => w(id).en;
/** The uncontracted source: "je aime". The lesson's whole teaching move is
 *  showing this beside the contracted form. */
const full = (id: string): string => w(id).full;

/** The flashcard/review back: IPA, respelling and gloss on one line. Built
 *  from the corpus so a transcription change propagates here too. */
const back = (id: string): string => [ipa(id), re(id), en(id)].filter(Boolean).join(' · ');

/** A groupDrill / examples item, assembled from the corpus. */
const item = (id: string, note?: string) => ({
  itemId: id,
  fr: fr(id),
  ipa: ipa(id),
  respell: re(id),
  en: en(id),
  ...(note ? { note } : {}),
});

/* ─── The reframe ─────────────────────────────────────────────────────────── */

/** The line the lesson hangs on. Referenced, never retyped, so every
 *  appearance is guaranteed identical: the density validator checks for it
 *  verbatim and a hand-typed copy is exactly how that check starts failing.
 *
 *  Why this line and not another. Elision, liaison (sons.10) and rhythm
 *  (sons.08) are the same instinct solving the same problem three ways, and a
 *  reframe that only described elision would have to be discarded and replaced
 *  twice. This one is true of all three: French will not tolerate two vowel
 *  sounds crashing together, so something gives way. Here the first vowel is
 *  deleted. In liaison a sleeping consonant wakes to fill the gap. The learner
 *  meets one idea in three lessons rather than three unrelated rules. */
export const REFRAME = 'Two vowels collide, the little word gives way.';

/* ─── Mission 1 · Scene ───────────────────────────────────────────────────── */

// The failing instinct: an English reader says the two words separately,
// because that is what the page looks like before you know the rule. The
// choice beat commits them to it before the break shows what it costs.
const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'Your first morning in Lyon. The woman at the desk asks a question you have practised, and you know both of the words in your answer.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'La réceptionniste',
    fr: 'Bonjour. Vous habitez où ?',
    en: 'Morning. Where do you live?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You know this. I live. Je habite. Both words are on the tip of your tongue, and they are the right two words.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'How do you say it?',
    options: [
      {
        fr: fr('fr.sons.elision.003'),
        respell: re('fr.sons.elision.003'),
        en: 'one word, no gap',
        outcome: 'works',
        audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
      },
      {
        fr: full('fr.sons.elision.003'),
        respell: '[zhuh a-BEET]',
        en: 'two words, said separately',
        outcome: 'breaks',
        audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
      },
    ],
    followUp: {
      works: 'That is the one. Now hear what the other version does to her.',
      breaks: 'That is what the page looks like, and it is what almost every English reader says. Listen to it.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: 'Je... habite... à Lyon.',
    en: '(two separate words, with a gap)',
    audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La réceptionniste',
    fr: 'Pardon, vous...  ?',
    en: 'Sorry, you...?',
    stage: 'She waits. She thinks you have stopped mid-sentence, because you have.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'The gap was the problem',
    body: 'Both words were right. What broke it was the space between them. French does not let those two vowels sit next to each other, so the first one is deleted and the two words become one.',
    wrong: { fr: full('fr.sons.elision.003'), ipa: '/ʒə a.bit/', respell: '[zhuh a-BEET]', en: 'not something French allows' },
    right: {
      fr: fr('fr.sons.elision.003'),
      ipa: ipa('fr.sons.elision.003'),
      respell: re('fr.sons.elision.003'),
      en: en('fr.sons.elision.003'),
    },
    coach: 'Two words on the page. One word in the mouth. The E of je is gone and the apostrophe stands where it was.',
    // Audio-first: the ear answers before the eye can. The whole contrast here
    // is a gap that is inaudible in text and unmissable in speech.
    audio: { mode: 'recorded', recordingId: 'rec-scene-break', autoplay: true, audioFirst: true },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    fr: fr('fr.sons.elision.062'),
    en: en('fr.sons.elision.062'),
    ipa: ipa('fr.sons.elision.062'),
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'La réceptionniste',
    fr: 'Ah, à Lyon. Très bien.',
    en: 'Ah, in Lyon. Very good.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'You have been doing this correctly for weeks without knowing it. Every time you said c\'est or s\'il vous plaît, that was the same rule. This lesson makes it deliberate.',
  },
];

/* ─── Mission 6 · The trap: h muet against h aspiré ───────────────────────── */

// The trapDrill is the right type for this and the wrong one for anything else
// in the lesson: it exists for "the rule says X but these cases say
// otherwise", which is precisely h aspiré. The rule step carries the
// explanation so it does not need a `teach` section of its own.
const TRAP_CARDS = [
  { promptLabel: 'Elides', promptSound: "l'", fr: fr('fr.sons.elision.015'), ipa: ipa('fr.sons.elision.015'),
    tip: 'H muet. The word starts on the O sound, so the article gets out of the way.' },
  { promptLabel: 'Blocks', promptSound: 'le ', fr: fr('fr.sons.elision.051'), ipa: ipa('fr.sons.elision.051'),
    tip: 'H aspiré. The article stays whole and you leave a tiny gap before it.' },
  { promptLabel: 'Elides', promptSound: "l'", fr: fr('fr.sons.elision.012'), ipa: ipa('fr.sons.elision.012'),
    tip: 'H muet. Same spelling shape as le hibou, opposite behaviour.' },
  { promptLabel: 'Blocks', promptSound: 'le ', fr: fr('fr.sons.elision.049'), ipa: ipa('fr.sons.elision.049'),
    tip: 'H aspiré. Never l\'haricot, however wrong that looks to you.' },
  { promptLabel: 'Elides', promptSound: "l'", fr: fr('fr.sons.elision.016'), ipa: ipa('fr.sons.elision.016'),
    tip: 'H muet. You say this one every day already.' },
  { promptLabel: 'Blocks', promptSound: 'la ', fr: fr('fr.sons.elision.052'), ipa: ipa('fr.sons.elision.052'),
    tip: 'H aspiré. The gap is the only thing telling anyone which word this is.' },
];

/* ─── Mission 21 · Quiz ───────────────────────────────────────────────────── */

// 40 questions in 5 rounds of 8. Sized to the lesson: one round per act that
// teaches, which is what makes a failed round point at a real drill.
//
// Format mix is deliberately weighted away from sons.06's. Production is the
// skill this lesson trains, so speak, typeIn and errorSpot carry 21 of the 40
// where sons.06 gave them 12 of 32. mcq survives where the question is a
// genuine judgement call (which of these blocks?) rather than a recall check.
const QUIZ_ROUNDS: QuizRound[] = [
  {
    id: 'round1',
    label: 'What drops, and why',
    targets: ['err-no-elision'],
    say: { text: 'Round one. The basic move, in both directions.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'Which of these is correct French?', format: 'mcq',
        opts: ["je aime", "je'aime", 'jaime', "j'aime"], correct: 3,
        why: "je + aime collide, so the E of je is deleted and the apostrophe marks the spot. je aime is not a form French has.", ref: 's03-anchors' },

      { q: 'Type the contracted form of « je » + « ai ».', format: 'typeIn',
        accept: ["j'ai", 'jai', "j’ai"],
        answer: "j'ai /ʒe/",
        why: 'The E of je is deleted before the vowel of ai. Two letters and an apostrophe, said as one syllable.', ref: 's04-set' },

      { q: 'Why does « je parle » keep its E?', format: 'mcq',
        opts: ['parle is a verb', 'parle starts with a consonant', 'je never elides before verbs', 'parle is too long'], correct: 1,
        why: 'Elision only happens when two vowel SOUNDS would collide. The P of parle is a consonant, so there is no collision and nothing gives way.', ref: 's05-drill-trigger' },

      { q: 'Say the contracted form: I live.', format: 'speak',
        target: fr('fr.sons.elision.003'), ipa: ipa('fr.sons.elision.003'), scoreSegment: 'ʒa',
        audio: { mode: 'mic' },
        why: 'One unbroken word, no gap after the J sound. A pause in the middle is the thing this lesson exists to remove.', ref: 's01-scene' },

      { q: 'A learner writes « le ami ». Fix it.', format: 'errorSpot',
        accept: ["l'ami", 'lami', "l’ami"],
        answer: "l'ami /la.mi/",
        why: 'le + ami is a vowel collision, so the E of le drops. The article and the noun become one unit.', ref: 's04-set' },

      { q: 'Which word did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-elide-vs-not', clip: 'j-aime' },
        opts: ["j'aime", 'je parle'], correct: 0,
        why: "j'aime is one syllable with no gap. je parle has two, with the little uh of je clearly audible.", ref: 's05-drill-trigger' },

      { q: 'Type what « la » + « école » becomes.', format: 'typeIn',
        accept: ["l'école", "l'ecole", 'lecole', "l’école"],
        answer: "l'école /le.kɔl/",
        why: 'The A of la is deleted before the vowel of école. Note that the feminine gender becomes invisible: nothing on the page still says la.', ref: 's04-set' },

      { q: 'How many syllables in « c\'est » ?', format: 'mcq',
        opts: ['one', 'two', 'three'], correct: 0,
        why: 'One. /sɛ/. ce + est contracted to a single syllable, which is why it is the most common word in spoken French.', ref: 's04-set' },
    ],
  },
  {
    id: 'round2',
    label: 'The closed list',
    targets: ['err-wrong-word'],
    say: { text: 'Round two. Which words do this, and which only look like they should.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'Which of these words NEVER elides?', format: 'mcq',
        opts: ['de', 'ne', 'tu', 'que'], correct: 2,
        why: 'tu is not on the list. It keeps its vowel always: tu as, never t\'as in writing. de, ne and que all elide.', ref: 's04-set' },

      { q: 'Type the contracted form of « ne » + « ai » in « je ... pas ».', format: 'typeIn',
        accept: ["n'ai", 'nai', "n’ai"],
        answer: "n'ai, as in je n'ai pas",
        why: "ne is on the list, so it elides before a vowel: je n'ai pas. Drop the elision and the negative disappears with it.", ref: 's06-trap' },

      { q: 'Which sentence is correct?', format: 'mcq',
        opts: ['Je ne ai pas de argent.', "Je n'ai pas de argent.", "Je ne ai pas d'argent.", "Je n'ai pas d'argent."], correct: 3,
        why: 'Two collisions, two elisions. ne + ai and de + argent both contract, and neither one is optional.', ref: 's08-examples' },

      { q: 'Say it: my name is Marie.', format: 'speak',
        target: fr('fr.sons.elision.061'), ipa: ipa('fr.sons.elision.061'), scoreSegment: 'ma.pɛl',
        audio: { mode: 'mic' },
        why: 'me + appelle contracts to m\'appelle. The first sentence you ever learned in French was an elision.', ref: 's04-set' },

      { q: 'What does « s\'il vous plaît » contract from?', format: 'mcq',
        opts: ['se + il', 'sur + il', "s' + il", 'si + il'], correct: 3,
        why: 'si + il. And si is a special case: it elides before il and ils, and nowhere else in the language.', ref: 's04-set' },

      { q: 'A learner writes « que est-ce que ce est ». Fix the two elisions.', format: 'errorSpot',
        accept: ["qu'est-ce que c'est", "qu'est-ce que c'est ?", "qu’est-ce que c’est"],
        answer: "qu'est-ce que c'est ?",
        why: 'que + est and ce + est both collide. The second que survives untouched because a consonant follows it.', ref: 's08-examples' },

      { q: 'Type the contracted form of « de » + « accord ».', format: 'typeIn',
        accept: ["d'accord", 'daccord', "d’accord"],
        answer: "d'accord /da.kɔʁ/",
        why: 'You have been saying this since your first week without noticing it was two words.', ref: 's04-set' },

      { q: 'Which is right: « le hamster » or « l\'hamster »?', format: 'mcq',
        opts: ["l'hamster", 'le hamster', 'both are used'], correct: 1,
        why: 'hamster is a borrowed word, and borrowed words almost always take h aspiré. The article stays whole.', ref: 's07-aspire' },
    ],
  },
  {
    id: 'round3',
    label: 'The H trap',
    targets: ['err-h-aspire'],
    say: { text: 'Round three. The hard part. Nothing on the page will help you here.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'Which one blocks the elision?', format: 'mcq',
        opts: ["l'homme", "l'heure", 'le hibou', "l'hôtel"], correct: 2,
        why: 'hibou is h aspiré, so the article stays whole. The other three are h muet and elide normally.', ref: 's07-aspire' },

      { q: 'Say it: the bean.', format: 'speak',
        target: fr('fr.sons.elision.049'), ipa: ipa('fr.sons.elision.049'), scoreSegment: 'lə a',
        audio: { mode: 'mic' },
        why: 'le haricot, with a small gap between le and aricot. Closing that gap turns it into a word French does not have.', ref: 's07-aspire' },

      { q: 'Which word did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-h-pairs', clip: 'le-hibou' },
        opts: ["l'homme", 'le hibou'], correct: 1,
        why: 'The gap before the vowel is the only difference, and it is the only signal there is.', ref: 's07-aspire' },

      { q: 'A learner writes « l\'haricot ». Fix it.', format: 'errorSpot',
        accept: ['le haricot', 'le haricot.'],
        answer: 'le haricot /lə a.ʁi.ko/',
        why: 'h aspiré blocks the elision. The article keeps its vowel even though the H is completely silent.', ref: 's07-aspire' },

      { q: 'How do you tell an h muet from an h aspiré by looking at the word?', format: 'mcq',
        opts: ['aspiré words are longer', 'aspiré words start with ha-', 'aspiré words are verbs', 'you cannot, you learn each one'], correct: 3,
        why: 'Nothing in the spelling distinguishes them and neither is pronounced. You learn each aspiré word with its article, the way you learn a noun with its gender.', ref: 's07-aspire' },

      { q: 'Type the correct article plus noun: « honte » (shame).', format: 'typeIn',
        accept: ['la honte'],
        answer: 'la honte /la ɔ̃t/',
        why: 'honte is h aspiré, so la keeps its vowel. It is one of the eight worth memorising outright.', ref: 's07-aspire' },

      { q: 'Which is correct?', format: 'mcq',
        opts: ["l'hôpital", 'le hôpital'], correct: 0,
        why: 'hôpital is h muet, so the article elides. Compare le hockey, which is aspiré and does not.', ref: 's07-aspire' },

      { q: 'Say it: the man does not like the bean.', format: 'speak',
        target: fr('fr.sons.elision.070'), ipa: ipa('fr.sons.elision.070'), scoreSegment: 'lɔm',
        audio: { mode: 'mic' },
        why: "Both H words in one sentence: l'homme elides, le haricot blocks. Getting both right in one breath is the whole skill.", ref: 's09-dictation' },
    ],
  },
  {
    id: 'round4',
    label: 'In a real sentence',
    targets: ['err-no-elision'],
    say: { text: 'Round four. Elision is invisible in one word and obvious in a phrase.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'Type the sentence: The bill, please.', format: 'typeIn',
        accept: ["l'addition, s'il vous plaît", "l'addition s'il vous plait", "laddition, sil vous plait", "l’addition, s’il vous plaît"],
        answer: fr('fr.sons.elision.063'),
        why: 'Two elisions in five words, and you have been saying both correctly for weeks.', ref: 's08-examples' },

      { q: 'Say it: it is time.', format: 'speak',
        target: fr('fr.sons.elision.064'), ipa: ipa('fr.sons.elision.064'), scoreSegment: 'sɛ lœʁ',
        audio: { mode: 'mic' },
        why: "C'est l'heure. Two contractions and no pause anywhere in it.", ref: 's08-examples' },

      { q: 'How many elisions are in « Je n\'ai pas d\'argent »?', format: 'mcq',
        opts: ['none', 'one', 'two', 'three'], correct: 2,
        why: "ne + ai and de + argent. je keeps its E because n is a consonant.", ref: 's08-examples' },

      { q: 'A learner says « Je ne aime pas ». Fix it.', format: 'errorSpot',
        accept: ["je n'aime pas", "j'aime pas", "je n’aime pas"],
        answer: fr('fr.sons.elision.031'),
        why: 'ne + aime collide, so ne elides. Leaving it whole is the mistake that most often makes a negative sound like a positive.', ref: 's06-trap' },

      { q: 'Which sentence has NO elision in it at all?', format: 'mcq',
        opts: ["C'est l'heure.", 'Je ne sais pas.', "J'habite à Lyon.", "Qu'est-ce que c'est ?"], correct: 1,
        why: 'Je ne sais pas: sais starts on a consonant, so ne keeps its vowel. Nothing in it collides.', ref: 's05-drill-trigger' },

      { q: 'Type what you hear.', format: 'typeIn',
        audio: { mode: 'recorded', recordingId: 'rec-dictation-12', clip: 'aujourdhui' },
        accept: ["aujourd'hui", 'aujourdhui', "aujourd’hui"],
        answer: fr('fr.sons.elision.044'),
        why: 'A frozen elision. Nobody has said hui as a separate word in five hundred years, but the apostrophe still marks the join.', ref: 's09-dictation' },

      { q: 'Say it: today, I arrive at the hotel.', format: 'speak',
        target: fr('fr.sons.elision.071'), ipa: ipa('fr.sons.elision.071'), scoreSegment: 'ʒa.ʁiv',
        audio: { mode: 'mic' },
        why: 'Three contractions running: aujourd\'hui, j\'arrive, l\'hôtel. None of them takes a pause.', ref: 's13-speak' },

      { q: 'Which is correct?', format: 'mcq',
        opts: ['une carafe de eau', "une carafe d'eau", "une carafe d'au"], correct: 1,
        why: 'de + eau collide, so de elides. This is the free water you can ask for in any French restaurant.', ref: 's08-examples' },
    ],
  },
  {
    id: 'round5',
    label: 'Automatic yet?',
    targets: ['err-pause'],
    say: { text: 'Last round. This one is about speed, not knowledge.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'What is the apostrophe in « j\'ai » actually marking?', format: 'mcq',
        opts: ['an informal shortening', 'a deleted vowel', 'a missing accent', 'a pause'], correct: 1,
        why: 'A deleted vowel, and the deletion is compulsory. Unlike an English contraction there is no fuller form you could use instead.', ref: 's03-anchors' },

      { q: 'Say it: what is that?', format: 'speak',
        target: fr('fr.sons.elision.069'), ipa: ipa('fr.sons.elision.069'), scoreSegment: 'kɛs',
        audio: { mode: 'mic' },
        why: 'Four written words, three syllables, no pause. If you can say this at speed you have the rule.', ref: 's13-speak' },

      { q: 'Type the contracted form of « me » + « appelle ».', format: 'typeIn',
        accept: ["m'appelle", 'mappelle', "m’appelle"],
        answer: "m'appelle /ma.pɛl/",
        why: 'me is on the closed list and behaves exactly like je, te and se.', ref: 's04-set' },

      { q: 'Which pair sounds IDENTICAL out loud?', format: 'mcq',
        opts: ["l'ami / l'amie", "l'homme / le hibou", "j'ai / je"], correct: 0,
        why: "Both are /la.mi/. The elision hides the gender completely, so only the spelling tells you which friend it is.", ref: 's10-listening' },

      { q: 'A learner says [zhuh-AY] for « j\'ai ». Fix the delivery.', format: 'errorSpot',
        accept: ['zhay', '[ZHAY]', '/ʒe/', 'jay'],
        answer: "j'ai [ZHAY], one syllable",
        why: 'The contraction is one syllable. Putting the uh of je back is the single most common way to sound like you are reading aloud.', ref: 's12-inhibition' },

      { q: 'Why do elision and liaison exist?', format: 'mcq',
        opts: ['to save writing space', 'to mark formality', 'to keep speech smooth between vowels', 'to show grammar'], correct: 2,
        why: 'Both stop a French phrase from stumbling between two words. Elision deletes a vowel, liaison wakes a consonant, and the goal is the same.', ref: 's22-roundup' },

      { q: 'Type what you hear.', format: 'typeIn',
        audio: { mode: 'recorded', recordingId: 'rec-dictation-12', clip: 'ce-nest-pas' },
        accept: ["ce n'est pas", 'ce nest pas', "ce n’est pas"],
        answer: fr('fr.sons.elision.032'),
        why: 'ne + est contracts. ce keeps its vowel because an N follows it, not a vowel.', ref: 's09-dictation' },

      { q: 'Say it: I have no money.', format: 'speak',
        target: fr('fr.sons.elision.065'), ipa: ipa('fr.sons.elision.065'), scoreSegment: 'ne pa',
        audio: { mode: 'mic' },
        why: 'Two elisions and a negative. Say it at conversation speed or it does not count.', ref: 's13-speak' },
    ],
  },
];

/* ─── Error triggers and their drills ─────────────────────────────────────── */

const TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-no-elision',
    description: 'Writes or says the uncontracted form: je aime, le ami, de argent.',
    detectOn: ['s05-drill-trigger', 's08-examples', 's09-dictation', 's21-quiz/round1', 's21-quiz/round4'],
    drill: 'drill-contract',
    retest: 'retest-contract',
  },
  {
    id: 'err-wrong-word',
    description: 'Elides a word that is not on the closed list, or fails to elide one that is.',
    detectOn: ['s04-set', 's21-quiz/round2'],
    drill: 'drill-closed-list',
    retest: 'retest-closed-list',
  },
  {
    id: 'err-h-aspire',
    description: "Elides before an h aspiré (l'haricot) or blocks before an h muet (le homme).",
    detectOn: ['s06-trap', 's07-aspire', 's21-quiz/round3'],
    drill: 'drill-h-sort',
    retest: 'retest-h',
  },
  {
    id: 'err-pause',
    description: 'Produces the contraction with an audible gap: [zhuh-AY] for j\'ai.',
    detectOn: ['s12-inhibition', 's13-speak', 's21-quiz/round5'],
    drill: 'drill-no-pause',
    retest: 'retest-pause',
  },
];

const DRILLS: LessonDrill[] = [
  {
    id: 'drill-contract',
    title: 'Contract it',
    size: 'lg',
    format: 'typeIn',
    items: [
      'fr.sons.elision.001', 'fr.sons.elision.002', 'fr.sons.elision.009',
      'fr.sons.elision.010', 'fr.sons.elision.023', 'fr.sons.elision.034',
    ],
    coach: 'Six joins. Write what each one becomes when the two vowels meet.',
  },
  {
    id: 'retest-contract',
    title: 'One more',
    format: 'typeIn',
    q: 'Type what « je » + « écoute » becomes.',
    why: 'The E of je is deleted before the vowel of écoute.',
    coach: 'Just the one.',
  },
  {
    id: 'drill-closed-list',
    title: 'On the list, or not',
    size: 'lg',
    format: 'sort',
    buckets: ['Elides', 'Never elides'],
    items: [
      'fr.sons.elision.002', 'fr.sons.elision.023', 'fr.sons.elision.030',
      'fr.sons.elision.034', 'fr.sons.elision.036', 'fr.sons.elision.040',
    ],
    coach: 'Fifteen words can do this. Everything else in French keeps its vowel.',
  },
  {
    id: 'retest-closed-list',
    title: 'Which one',
    format: 'mcq',
    q: 'Which of these elides before a vowel?',
    opts: ['tu', 'que', 'ma', 'mon'],
    correct: 1,
    why: 'que is on the closed list. tu, ma and mon never elide, whatever follows them.',
  },
  {
    id: 'drill-h-sort',
    title: 'Muet or aspiré',
    size: 'lg',
    format: 'sort',
    buckets: ["Takes l'", 'Keeps le or la'],
    items: H_ASPIRE_IDS.slice(0, 4).concat([
      'fr.sons.elision.012', 'fr.sons.elision.015', 'fr.sons.elision.016', 'fr.sons.elision.058',
    ]),
    coach: 'No rule will do this for you. This is the memorising, and it is short.',
    audio: { mode: 'recorded', recordingId: 'rec-h-pairs', speeds: [1.0, 0.65] },
  },
  {
    id: 'retest-h',
    title: 'The gap',
    format: 'listenChoose',
    q: 'Which one did you hear?',
    opts: ["l'homme", 'le hibou'],
    correct: 0,
    why: "l'homme runs straight through. le hibou has a small gap where the elision was blocked.",
    audio: { mode: 'recorded', recordingId: 'rec-h-pairs' },
  },
  {
    id: 'drill-no-pause',
    title: 'No gap',
    size: 'lg',
    format: 'speak',
    items: [
      'fr.sons.elision.002', 'fr.sons.elision.034', 'fr.sons.elision.039',
      'fr.sons.elision.040', 'fr.sons.elision.044',
    ],
    coach: 'Five contractions. Each one is a single unbroken unit. If you hear yourself pause, start again.',
    audio: { mode: 'mic' },
  },
  {
    id: 'retest-pause',
    title: 'Once more, at speed',
    format: 'speak',
    q: "Say « c'est l'heure » with no pause anywhere in it.",
    why: 'Two contractions, three syllables, one breath.',
    audio: { mode: 'mic' },
  },
];

/* ─── Reference sheets ────────────────────────────────────────────────────── */

const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.sons.07.list',
    title: 'The elidable words, in full',
    layer: 'deep',
    contains: ['All fifteen elidable words', 'What each becomes', 'The ones that only look elidable'],
    sections: [
      {
        type: 'table',
        id: 'sheet-list-table',
        title: 'Every word that elides',
        layer: 'deep',
        cols: ['Word', 'Becomes', 'Example'],
        rows: [
          ['je', "j'", "j'ai, j'aime, j'habite"],
          ['me', "m'", "je m'appelle"],
          ['te', "t'", "je t'aime"],
          ['se', "s'", "s'habiller, s'asseoir"],
          ['le', "l'", "l'ami, l'homme, l'hôtel"],
          ['la', "l'", "l'école, l'eau, l'heure"],
          ['de', "d'", "d'accord, d'abord, beaucoup d'eau"],
          ['ne', "n'", "je n'ai pas, ce n'est pas"],
          ['que', "qu'", "qu'il, qu'elle, qu'est-ce que"],
          ['ce', "c'", "c'est, c'était"],
          ['si', "s'", "s'il vous plaît (before il/ils ONLY)"],
          ['jusque', "jusqu'", "jusqu'à"],
          ['lorsque', "lorsqu'", "lorsqu'il"],
          ['puisque', "puisqu'", "puisqu'il"],
          ['quelque', "quelqu'", "quelqu'un"],
        ],
      },
      {
        type: 'table',
        id: 'sheet-list-never',
        title: 'Words that never elide, however wrong that looks',
        layer: 'deep',
        cols: ['Word', 'Correct', 'Not'],
        rows: [
          ['tu', 'tu as', "t'as is speech only, never written"],
          ['ma', 'mon amie', "m'amie"],
          ['ta', 'ton école', "t'école"],
          ['sa', 'son histoire', "s'histoire"],
          ['ce (adj)', 'cet homme', "c'homme"],
          ['la (pronoun)', 'la voilà', 'unchanged before a consonant'],
        ],
      },
    ],
  },
  {
    id: 'sheet.sons.07.aspire',
    title: 'The h aspiré list',
    layer: 'deep',
    contains: ['The eight taught here', 'The wider list', 'Why borrowed words block'],
    sections: [
      {
        type: 'table',
        id: 'sheet-aspire-table',
        title: 'H aspiré: the article stays whole',
        layer: 'deep',
        cols: ['Word', 'Correct', 'Meaning'],
        rows: [
          ['haricot', 'le haricot', 'the bean'],
          ['héros', 'le héros', "the hero (but l'héroïne elides)"],
          ['hibou', 'le hibou', 'the owl'],
          ['honte', 'la honte', 'the shame'],
          ['hauteur', 'la hauteur', 'the height'],
          ['hasard', 'le hasard', 'chance'],
          ['hockey', 'le hockey', 'hockey'],
          ['Hollande', 'la Hollande', 'Holland'],
          ['hamster', 'le hamster', 'the hamster'],
          ['handball', 'le handball', 'handball'],
          ['hérisson', 'le hérisson', 'the hedgehog'],
          ['hanche', 'la hanche', 'the hip'],
        ],
      },
      {
        type: 'focus',
        id: 'sheet-aspire-why',
        title: 'The pattern behind the list',
        layer: 'deep',
        points: [
          'Most h aspiré words came into French from Germanic or English, and kept their own H behaviour.',
          'Nearly every word borrowed after about 1500 is aspiré: le hockey, le hamburger, le hall.',
          'Words from Latin and Greek are almost always muet: l\'homme, l\'heure, l\'hôpital, l\'histoire.',
          'When you genuinely do not know, guess muet. It is far more common.',
        ],
      },
    ],
  },
];

/* ─── Sections ────────────────────────────────────────────────────────────── */

const SECTIONS: LessonSection[] = [
  // ── ACT I · WHERE THE GAP COSTS YOU ───────────────────────────────────
  {
    type: 'scene',
    id: 's01-scene',
    title: 'The gap',
    frSub: "À la réception",
    render: 'screens',
    layer: 'core',
    say: {
      text: 'Your first morning in Lyon. You are about to say two words you already know, in the order you already know them.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'Hôtel Bellecour',
      city: 'Lyon',
      time: '9:10, a Wednesday',
      image: 'lessons/elision/scene-reception.jpg',
      ambience: 'room-tone-lobby',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: 'This lesson is about the small words that get out of the way, and the short list of words that refuse to let them.',
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
      text: 'Five things. Every one of them is something you do out loud, not something you know about.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    goals: [
      { t: 'Contract without thinking', s: "Say j'ai, c'est, j'habite and d'accord as single unbroken words, at conversation speed, with no gap in the middle." },
      { t: 'Know the closed list', s: 'Name the fifteen words that elide, and stop yourself eliding the ones that never do.' },
      { t: 'Listen for the trigger', s: 'Decide whether the next word starts on a vowel SOUND, not on a vowel letter, and act on the sound.' },
      { t: 'Beat the H trap', s: "Say l'homme and le hibou correctly on the first attempt, and know why nothing on the page could have told you." },
      { t: 'Hear a blocked elision', s: 'Catch the tiny gap that marks an h aspiré in someone else\'s speech, and reproduce it in your own.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-anchors',
    title: 'Five things to hold on to',
    frSub: 'Les idées clés',
    render: 'deck',
    layer: 'core',
    size: 'md',
    hint: 'Swipe through. Nothing to answer yet.',
    // Where the lesson's vocabulary is introduced, so every term it uses later
    // is tappable from here on. Three chips, per house style.
    terms: ['elision', 'apostrophe', 'vowelSound'],
    say: {
      text: 'Five ideas. The rest of the lesson is these five, slowed down.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    cards: [
      // Reframe appearance 1. The thesis card: it says the rule and stops.
      { head: REFRAME,
        body: 'French will not let two vowel sounds crash together. When they would, the small word in front loses its vowel and the apostrophe marks the spot.',
        imageRef: 'lessons/elision/collision.jpg' },
      { head: 'It is compulsory, not casual',
        body: "English contractions are optional: do not and don't are both fine. This is not that. je aime is not a slower or more formal way to say j'aime. It is not French at all." },
      { head: 'Only fifteen words do it',
        body: 'je, me, te, se, le, la, de, ne, que, ce, plus si and four que compounds. That list never grows. Everything else in French keeps its vowel.' },
      { head: 'The trigger is a sound',
        body: "Not a letter. habite is spelled with an H but starts on a vowel SOUND, because the H is silent. That is why it is j'habite.",
        imageRef: 'lessons/elision/ear.jpg' },
      { head: 'One H refuses',
        body: 'A short list of H words block the whole thing: le haricot, le hibou, la honte. Nothing in the spelling warns you, so this is the part you memorise.',
        imageRef: 'lessons/elision/blocked.jpg' },
    ],
  },

  // ── ACT II · THE CLOSED LIST ──────────────────────────────────────────
  {
    type: 'cardDeck',
    id: 's04-set',
    title: 'The fifteen, one at a time',
    frSub: 'La liste fermée',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    sheetId: 'sheet.sons.07.list',
    terms: ['elidable', 'elision', 'ipa'],
    hint: 'Swipe. Each card is one word and what it becomes.',
    say: {
      text: 'Fifteen words, and then you have the whole rule. Say each contraction out loud as it comes up.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-the-fifteen', speeds: [1.0, 0.65] },
    cards: [
      { label: 'je', head: "je becomes j'", fr: fr('fr.sons.elision.002'), sub: `${ipa('fr.sons.elision.002')} ${re('fr.sons.elision.002')}`,
        body: `From ${full('fr.sons.elision.002')}. The commonest contraction you will ever make.` },
      { label: 'me', head: "me becomes m'", fr: fr('fr.sons.elision.039'), sub: `${ipa('fr.sons.elision.039')} ${re('fr.sons.elision.039')}`,
        body: 'The sentence you learned in your first hour of French was already doing this.' },
      { label: 'te', head: "te becomes t'", fr: fr('fr.sons.elision.043'), sub: `${ipa('fr.sons.elision.043')} ${re('fr.sons.elision.043')}`,
        body: "As in je t'aime. Same behaviour as me and se, because they are the same kind of word." },
      { label: 'se', head: "se becomes s'", fr: fr('fr.sons.elision.041'), sub: `${ipa('fr.sons.elision.041')} ${re('fr.sons.elision.041')}`,
        body: 'Silent H, so the word starts on a vowel sound and se gives way.' },
      { label: 'le', head: "le becomes l'", fr: fr('fr.sons.elision.010'), sub: `${ipa('fr.sons.elision.010')} ${re('fr.sons.elision.010')}`,
        body: `From ${full('fr.sons.elision.010')}. The masculine article, now invisible.` },
      { label: 'la', head: "la becomes l'", fr: fr('fr.sons.elision.009'), sub: `${ipa('fr.sons.elision.009')} ${re('fr.sons.elision.009')}`,
        body: 'Feminine, and you cannot tell any more. Both articles contract to the same thing.' },
      { label: 'de', head: "de becomes d'", fr: fr('fr.sons.elision.023'), sub: `${ipa('fr.sons.elision.023')} ${re('fr.sons.elision.023')}`,
        body: 'You have said this a hundred times without seeing the two words inside it.' },
      { label: 'ne', head: "ne becomes n'", fr: fr('fr.sons.elision.030'), sub: `${ipa('fr.sons.elision.030')} ${re('fr.sons.elision.030')}`,
        body: 'The one that changes meaning. Lose this elision and you have said the opposite.' },
      { label: 'que', head: "que becomes qu'", fr: fr('fr.sons.elision.037'), sub: `${ipa('fr.sons.elision.037')} ${re('fr.sons.elision.037')}`,
        body: 'No apostrophe drama: the U stays, only the E goes.' },
      { label: 'ce', head: "ce becomes c'", fr: fr('fr.sons.elision.034'), sub: `${ipa('fr.sons.elision.034')} ${re('fr.sons.elision.034')}`,
        body: 'One syllable. The most common word in spoken French.' },
      { label: 'si', head: "si becomes s'", fr: fr('fr.sons.elision.040'), sub: `${ipa('fr.sons.elision.040')} ${re('fr.sons.elision.040')}`,
        body: 'Only before il and ils. Before anything else si keeps its vowel.' },
      { label: 'jusque', head: "jusque becomes jusqu'", fr: fr('fr.sons.elision.045'), sub: `${ipa('fr.sons.elision.045')} ${re('fr.sons.elision.045')}`,
        body: 'The que compounds all inherit the behaviour of que.' },
      { label: 'lorsque', head: "lorsque becomes lorsqu'", fr: fr('fr.sons.elision.046'), sub: `${ipa('fr.sons.elision.046')} ${re('fr.sons.elision.046')}`,
        body: 'Same ending, same rule.' },
      { label: 'puisque', head: "puisque becomes puisqu'", fr: fr('fr.sons.elision.047'), sub: `${ipa('fr.sons.elision.047')} ${re('fr.sons.elision.047')}`,
        body: 'Same again. Learn que and you have learned all four.' },
      { label: 'quelque', head: "quelque becomes quelqu'", fr: fr('fr.sons.elision.048'), sub: `${ipa('fr.sons.elision.048')} ${re('fr.sons.elision.048')}`,
        body: 'The last one on the list, and then you have all fifteen.' },
    ],
  },

  {
    type: 'groupDrill',
    id: 's05-drill-trigger',
    title: 'Does it collide?',
    frSub: 'Le déclencheur',
    render: 'deck',
    layer: 'core',
    // XL: one French unit per screen, the shape sons.06 proved. The words carry
    // the contrast; the control page below is a separate group with no items,
    // which is the split the schema documents for xl drills.
    size: 'xl',
    terms: ['vowelSound', 'elision'],
    say: {
      text: 'Each card is a join. Ask one question about it: does the next word start on a vowel sound?',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-elide-vs-not', speeds: [1.0, 0.65], audioFirst: true },
    groups: [
      {
        label: 'Collides, so it contracts',
        items: [
          item('fr.sons.elision.001', 'aime starts on a vowel'),
          item('fr.sons.elision.005', 'arrive starts on a vowel'),
          item('fr.sons.elision.013', 'eau starts on a vowel'),
          item('fr.sons.elision.019', 'argent starts on a vowel'),
          item('fr.sons.elision.003', 'H silent, so habite starts on a vowel SOUND'),
        ],
      },
      {
        label: 'No collision, so nothing moves',
        items: [
          item('fr.sons.elision.008', 'parle starts on a consonant'),
          item('fr.sons.elision.021', 'pain starts on a consonant'),
          item('fr.sons.elision.022', 'porte starts on a consonant'),
          item('fr.sons.elision.029', 'Paris starts on a consonant'),
          item('fr.sons.elision.033', 'sais starts on a consonant'),
        ],
      },
      {
        label: 'Contrôle',
        check: {
          q: 'Why does « je parle » keep its E when « j\'aime » loses it?',
          opts: [
            'parle is longer than aime',
            'parle starts on a consonant, so there is no collision',
            'je only elides in questions',
            'parle is a verb and aime is not',
          ],
          correct: 1,
          why: 'Elision happens only where two vowel sounds would meet. The P of parle is a consonant, so nothing is in the way and nothing gives way.',
        },
      },
    ],
  },

  // ── ACT III · THE H TRAP ──────────────────────────────────────────────
  {
    type: 'trapDrill',
    id: 's06-trap',
    title: 'The H that refuses',
    frSub: 'H muet ou H aspiré',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['hMuet', 'hAspire', 'vowelSound'],
    sheetId: 'sheet.sons.07.aspire',
    audio: { mode: 'recorded', recordingId: 'rec-h-pairs', speeds: [1.0, 0.65], audioFirst: true },
    say: {
      text: 'This is the hardest thing in the lesson, and nothing on the page will help you. Slow down here.',
      voice: 'coach',
      timing: 'onEnter',
    },
    // The rule folds INTO the drill rather than taking a screen of its own,
    // which is the shape sons.06 arrived at after its -er rule sat alone on an
    // otherwise empty card.
    // The rule body sits at the core word cap for a reason: this is the one
    // screen in the lesson carrying an idea a learner cannot derive. Stated in
    // two sentences it read as a gloss and the exception went unexplained; at
    // 75 words it failed the density rule outright. What is here is the claim
    // and its consequence, with the "how do I learn these" half moved onto the
    // flashcards mission that actually does the learning.
    rule: {
      title: 'Two H words, no way to tell them apart',
      body: "No H is pronounced in French, so both are silent. What differs is whether the H BLOCKS the elision. An h muet does not block: le homme becomes l'homme. An h aspiré blocks: le hibou stays whole, with a small gap instead.",
    },
    cards: TRAP_CARDS,
    // Four questions, not one: this is the gate on the lesson's hardest
    // section, and a single four-option question is a 1-in-4 guess standing in
    // for a reflex. Each attacks the rule from a different side.
    drill: [
      { promptSay: 'Which one blocks the elision?', opts: ["l'hôtel", 'le hibou', "l'heure", "l'homme"], correct: 1 },
      { promptSay: 'Which one elides?', opts: ['le haricot', 'la honte', "l'hôpital", 'le hockey'], correct: 2 },
      { promptSay: 'Correct or not: « l\'haricot »?', opts: ['correct', 'wrong, it is le haricot'], correct: 1 },
      { promptSay: 'You meet a new H word and have to guess. Which way?', opts: ['aspiré, keep the article whole', 'muet, let it elide'], correct: 1 },
    ],
    steps: [
      { kind: 'rule', label: 'La règle', title: 'Two H words, no way to tell them apart' },
      { kind: 'cards', label: 'Les pièges', title: 'Six words, three of them blocked' },
      { kind: 'audio', label: 'Écoutez', title: 'Hear the gap appear' },
      // Gated: the reflex is the point of the mission, and a check the learner
      // can swipe past is not a check.
      { kind: 'drill', label: 'Réflexe', title: 'Now decide without thinking', gate: true },
    ],
  },

  {
    type: 'flashcards',
    id: 's07-aspire',
    title: 'The eight to memorise',
    frSub: 'À apprendre par cœur',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['hAspire'],
    sheetId: 'sheet.sons.07.aspire',
    // Carries the half of the trap rule that is about LEARNING rather than
    // about the rule itself, because this is the mission where the learning
    // happens. Nothing in the spelling separates the two kinds of H, so each
    // aspiré word is learned with its article, the way a noun is learned with
    // its gender.
    say: {
      text: 'Nothing in the spelling tells you which H is which, so you learn each one with its article, the way you learned nouns with their gender. Eight words. Short enough to simply know.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-h-pairs' },
    cards: H_ASPIRE_IDS.map((id) => ({
      front: fr(id),
      back: back(id),
      say: fr(id),
    })),
  },

  // ── ACT IV · BANK THE WORDS ───────────────────────────────────────────
  {
    type: 'examples',
    id: 's08-examples',
    title: 'In a real phrase',
    frSub: 'Des phrases entières',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['elision', 'apostrophe'],
    say: {
      text: 'Elision is invisible in one word and obvious in a phrase. Read each of these out loud.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-examples-10', speeds: [1.0, 0.65] },
    examples: [
      { fr: fr('fr.sons.elision.063'), en: en('fr.sons.elision.063'), note: 'Two elisions in five words.' },
      { fr: fr('fr.sons.elision.061'), en: en('fr.sons.elision.061'), note: 'me + appelle, contracted.' },
      { fr: fr('fr.sons.elision.065'), en: en('fr.sons.elision.065'), note: 'ne + ai, then de + argent.' },
      { fr: fr('fr.sons.elision.064'), en: en('fr.sons.elision.064'), note: 'ce + est, then la + heure.' },
      { fr: fr('fr.sons.elision.069'), en: en('fr.sons.elision.069'), note: 'Four written words, three syllables.' },
      { fr: fr('fr.sons.elision.067'), en: en('fr.sons.elision.067'), note: 'je + aime, then la + eau.' },
      { fr: fr('fr.sons.elision.026'), en: en('fr.sons.elision.026'), note: 'The free water in any French restaurant.' },
      { fr: fr('fr.sons.elision.071'), en: en('fr.sons.elision.071'), note: 'Three contractions running.' },
      { fr: fr('fr.sons.elision.068'), en: en('fr.sons.elision.068'), note: 'Three chances to elide, none taken.' },
      { fr: fr('fr.sons.elision.072'), en: en('fr.sons.elision.072'), note: 'ne and si both stay whole here.' },
    ],
  },

  {
    type: 'dictation',
    id: 's09-dictation',
    title: 'Write what you hear',
    frSub: 'La dictée',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['apostrophe'],
    // Not swipe-flagged: dictation advances on a solved word, and claiming a
    // swipe would promise a gesture the section does not have and fight the one
    // that records the answer. (The same decision sons.06 recorded for s10.)
    say: {
      text: 'Twelve of them. The apostrophe is part of the spelling, so type it.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-dictation-12', maxPlays: 3 },
    itemIds: [
      'fr.sons.elision.002', 'fr.sons.elision.003', 'fr.sons.elision.009',
      'fr.sons.elision.014', 'fr.sons.elision.023', 'fr.sons.elision.034',
      'fr.sons.elision.036', 'fr.sons.elision.044', 'fr.sons.elision.049',
      'fr.sons.elision.061', 'fr.sons.elision.063', 'fr.sons.elision.032',
    ],
  },

  {
    type: 'listening',
    id: 's10-listening',
    title: 'The gap, by ear alone',
    frSub: "À l'écoute",
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['hAspire', 'hMuet'],
    // Questions open one at a time, after the audio: the eye must not answer
    // the question the ear was asked.
    questionsInModal: true,
    say: {
      text: 'These pairs are identical on the page in every way that matters. Only the gap tells them apart.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-h-pairs', speeds: [1.0, 0.65], audioFirst: true, maxPlays: 4 },
    lines: [
      { fr: fr('fr.sons.elision.012'), en: en('fr.sons.elision.012') },
      { fr: fr('fr.sons.elision.051'), en: en('fr.sons.elision.051') },
      { fr: fr('fr.sons.elision.058'), en: en('fr.sons.elision.058') },
      { fr: fr('fr.sons.elision.055'), en: en('fr.sons.elision.055') },
      { fr: fr('fr.sons.elision.010'), en: en('fr.sons.elision.010') },
      { fr: fr('fr.sons.elision.011'), en: en('fr.sons.elision.011') },
    ],
    questions: [
      { q: 'In the second line, was the article contracted?', opts: ['yes', 'no'], correct: 1,
        why: 'le hibou. h aspiré blocks it, so you heard le and then a small gap before the vowel.' },
      { q: 'Which line ran straight through with no gap?', opts: ["l'homme", 'le hibou', 'le hockey'], correct: 0,
        why: "l'homme is h muet, so the article contracted and the two words became one unbroken unit." },
      { q: "l'ami and l'amie were both played. What told you which was which?", opts: ['the vowel length', 'the final consonant', 'nothing at all'], correct: 2,
        why: 'Nothing. Both are /la.mi/. The elision deletes the article that carried the gender, so only spelling distinguishes them.' },
    ],
  },

  // ── ACT V · MAKE IT AUTOMATIC ─────────────────────────────────────────
  {
    type: 'inhibitionDrill',
    id: 's12-inhibition',
    title: 'Closing the gap',
    frSub: 'Supprimer la pause',
    render: 'screens',
    layer: 'core',
    size: 'md',
    // Swipeable: three physical routines of four or five steps each is fourteen
    // instructions, and stacked they read as a wall nobody performs.
    swipe: true,
    imageRef: 'lessons/elision/no-gap.jpg',
    terms: ['apostrophe'],
    say: {
      text: 'You know the rule now. What is left is the hesitation, and that is physical rather than intellectual.',
      voice: 'coach',
      timing: 'onEnter',
    },
    intro:
      'Your eye sees two words and your mouth prepares two words. The apostrophe does not look like glue, so the reflex is to pause at it. That pause is what marks someone out as reading rather than speaking, and it is trained out by doing, not by knowing.',
    targets: [
      {
        label: 'The one-breath rule',
        sub: 'For any contraction',
        steps: [
          'Look at the whole contraction and cover the apostrophe with a finger.',
          'Say what is left as if it were one ordinary word.',
          'Uncover it and say it again exactly the same way.',
          'If a gap crept back in, cover it again. The apostrophe is glue, not a gap.',
        ],
        practiceOn: ['fr.sons.elision.002', 'fr.sons.elision.034', 'fr.sons.elision.001', 'fr.sons.elision.023'],
        mic: true,
        audio: { mode: 'recorded', recordingId: 'rec-the-fifteen' },
      },
      {
        label: 'The run-on',
        sub: 'For contractions inside a phrase',
        steps: [
          'Say the phrase deliberately too fast, faster than you can hesitate.',
          'Notice that the contractions survive and only the pauses die.',
          'Slow back down to normal speed while keeping every join closed.',
          'Repeat until the slow version has no more gaps than the fast one.',
        ],
        practiceOn: ['fr.sons.elision.063', 'fr.sons.elision.069', 'fr.sons.elision.065'],
        mic: true,
        audio: { mode: 'recorded', recordingId: 'rec-examples-10' },
      },
      {
        label: 'The blocked gap',
        sub: 'For h aspiré, where a gap is correct',
        steps: [
          'Say le homme deliberately, with a gap. Hear how wrong it sounds.',
          'Now say le hibou with exactly that same gap. It is correct.',
          'Alternate the two until the gap feels like a decision rather than an accident.',
          'The gap is not hesitation. It is the only thing marking an h aspiré.',
        ],
        practiceOn: ['fr.sons.elision.051', 'fr.sons.elision.012', 'fr.sons.elision.049'],
        mic: true,
        audio: { mode: 'recorded', recordingId: 'rec-h-pairs' },
      },
    ],
    closing: { text: 'A contraction is one word with one stress. When that is automatic, this lesson is done.' },
  },

  {
    type: 'practice',
    id: 's13-speak',
    title: 'Say it at speed',
    frSub: 'À voix haute',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    skill: 'speak',
    terms: ['elision'],
    say: {
      text: 'Eight of them, scored on your voice. Conversation speed, and no gap anywhere.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'mic', scoreOn: 'fr' },
    itemIds: [
      'fr.sons.elision.002', 'fr.sons.elision.034', 'fr.sons.elision.039',
      'fr.sons.elision.063', 'fr.sons.elision.069', 'fr.sons.elision.064',
      'fr.sons.elision.070', 'fr.sons.elision.071',
    ],
  },

  {
    type: 'scenario',
    id: 's14-scenario',
    title: 'Ordering, for real',
    frSub: 'Au restaurant',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    terms: ['elision'],
    say: {
      text: 'Every line you say here has a contraction in it. Read your part out loud before you tap.',
      voice: 'coach',
      timing: 'onEnter',
    },
    setting: 'A small restaurant in Lyon, one table free, the waiter already at your elbow.',
    turns: [
      { ai: 'Bonjour. Vous avez choisi ?', en: 'Hello. Have you chosen?', user: "Oui, j'ai choisi." },
      { ai: 'Très bien. Et comme boisson ?', en: 'Very good. And to drink?', user: "Une carafe d'eau, s'il vous plaît." },
      { ai: 'Parfait. Vous prenez une entrée ?', en: 'Perfect. Are you having a starter?', user: "Non merci, je n'ai pas très faim." },
      { ai: 'Je vous apporte ça tout de suite.', en: 'I will bring that right away.', user: "D'accord, merci." },
      { ai: 'Autre chose ?', en: 'Anything else?', user: "L'addition, s'il vous plaît." },
    ],
  },

  {
    type: 'commonErrors',
    id: 's15-errors',
    title: 'What goes wrong',
    frSub: 'Les erreurs courantes',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    // Swipeable: seven errors stacked is a wall, and each one is a separate
    // idea the learner has to weigh against their own habit.
    swipe: true,
    terms: ['elision', 'hAspire', 'elidable'],
    say: {
      text: 'Seven ways this goes wrong. You have probably made two of them this week.',
      voice: 'coach',
      timing: 'onEnter',
    },
    errors: [
      { wrong: 'je aime', right: "j'aime",
        why: 'The commonest of all. Two vowels cannot meet, so the E of je is deleted. There is no version of French where the uncontracted form is acceptable.' },
      { wrong: "l'haricot", right: 'le haricot',
        why: 'h aspiré blocks the elision. The H is silent either way, but this one refuses to let the article contract.' },
      { wrong: 'le homme', right: "l'homme",
        why: 'h muet does not block. The word starts on the O sound, so the article contracts exactly as it would before any vowel.' },
      { wrong: "t'as un stylo (written)", right: 'tu as un stylo',
        why: "tu is not on the closed list. You will hear t'as constantly in speech, but it is never correct in writing." },
      { wrong: "m'amie", right: 'mon amie',
        why: 'ma never elides. French solves that collision a different way, by switching to the masculine form mon before a vowel.' },
      { wrong: '[zhuh-AY] for j\'ai', right: "j'ai [ZHAY]",
        why: 'One syllable, not two. Putting the uh back is what makes a fluent reader still sound like a beginner.' },
      { wrong: 'je ne aime pas', right: "je n'aime pas",
        why: 'ne elides too, and this one carries the meaning. Say it uncontracted and a listener can genuinely miss the negative.' },
    ],
  },

  // ── ACT VI · PROVE IT ─────────────────────────────────────────────────
  {
    type: 'reading',
    id: 's16-reading',
    title: 'A paragraph of it',
    frSub: 'La lecture',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    questionsInModal: true,
    terms: ['elision', 'hAspire'],
    say: {
      text: 'Read it out loud, all the way through, before you look at the questions.',
      voice: 'coach',
      timing: 'onEnter',
    },
    audio: { mode: 'recorded', recordingId: 'rec-reading-passage', speeds: [1.0, 0.65], perSentenceReplay: true },
    text: [
      "Aujourd'hui, j'arrive à l'hôtel à neuf heures.",
      "L'homme à la réception me demande mon nom. Je m'appelle Marie, et j'habite à Lyon depuis un an.",
      "Il n'y a pas d'ascenseur, alors je monte l'escalier jusqu'à la chambre.",
      "C'est une petite chambre, mais l'eau est chaude et la fenêtre donne sur le parc.",
      "Le soir, je descends. Le restaurant sert du poulet et des haricots verts.",
      "Je n'aime pas beaucoup les haricots, mais j'ai faim, alors je demande l'addition sans rien dire.",
    ].join(' '),
    glossary: [
      { word: "l'ascenseur", en: 'the lift', ipa: '/la.sɑ̃.sœʁ/', note: "le + ascenseur. Contracted, like every vowel-initial noun." },
      { word: "l'escalier", en: 'the stairs', ipa: '/lɛs.ka.lje/', note: "le + escalier." },
      { word: "jusqu'à", en: 'as far as', ipa: '/ʒys.ka/', note: 'jusque + à. A que compound, so it behaves like que.' },
      { word: 'les haricots', en: 'the beans', ipa: '/le a.ʁi.ko/', note: 'h aspiré, so no liaison and no elision. A tiny gap after les.' },
    ],
    questions: [
      { q: 'Find every elision in the first sentence and say what each one contracted from.',
        a: "Aujourd'hui (a frozen one, from de), j'arrive (je + arrive) and l'hôtel (le + hôtel). Three in eight words." },
      { q: 'Why is it « les haricots » with a gap, and not « les-z-haricots »?',
        a: 'haricot is h aspiré. It blocks the elision AND the liaison, so the S of les stays silent and you leave a small gap.' },
      { q: 'The passage has « l\'homme » and « les haricots ». Both start with H. What is the difference?',
        a: "None in sound: neither H is pronounced. The difference is purely grammatical. homme is h muet so the article contracts; haricot is h aspiré so it does not." },
      { q: 'Find the sentence where « ne » does NOT contract, and explain why.',
        a: 'There is no such sentence here: both negatives (n\'y a pas, n\'aime pas) sit before a vowel and both contract. If the next word had started on a consonant, ne would have stayed whole.' },
      { q: 'Read the last sentence aloud. How many separate pauses should there be inside it?',
        a: 'None inside the contractions. j\'ai and l\'addition are each one unbroken unit, and the only natural break is at the comma.' },
    ],
  },

  {
    type: 'reviewDeck',
    id: 's17-review',
    title: 'The system, not the words',
    frSub: 'Révision',
    render: 'deck',
    layer: 'core',
    size: 'lg',
    terms: ['elision', 'elidable', 'hAspire'],
    say: {
      text: 'Ten cards. Answer each one out loud before you rate it.',
      voice: 'coach',
      timing: 'onEnter',
    },
    cards: [
      // Reframe appearance 2.
      { front: 'Why elision exists at all', back: REFRAME },
      { front: 'How many words can elide', back: 'Fifteen: je me te se le la de ne que ce, plus si and four que compounds.' },
      { front: 'What triggers it', back: 'A vowel SOUND on the next word. Not a vowel letter.' },
      { front: "Why it is j'habite and not je habite", back: 'The H is silent, so habite begins on a vowel sound. The ear decides, not the eye.' },
      { front: 'What an h aspiré does', back: "Blocks the elision. le haricot, le hibou, la honte, never l'." },
      { front: 'How to tell muet from aspiré by looking', back: 'You cannot. Learn each aspiré word with its article.' },
      { front: 'Your guess for an unknown H word', back: 'Muet. It is far more common, and most aspiré words are recent borrowings.' },
      { front: 'What the apostrophe actually is', back: 'Glue, not a gap. One word, one stress, no pause inside it.' },
      { front: "Whether l'ami and l'amie sound different", back: 'No. Both /la.mi/. Elision hides the gender completely.' },
      { front: 'What happens to all this next lesson', back: 'The opposite move for the same reason: liaison wakes a sleeping consonant to fill the gap.' },
    ],
  },

  {
    type: 'progressCheck',
    id: 's18-progress',
    title: 'Where you are',
    frSub: 'Votre progression',
    render: 'screens',
    layer: 'core',
    size: 'md',
    say: {
      text: 'Before the quiz, a second to see what you have actually done.',
      voice: 'coach',
      timing: 'onEnter',
    },
    body:
      'An hour ago the apostrophe was punctuation you copied. Now it is a rule you can apply to a word you have never seen, in both directions: you know when it must appear and when it must not. The H list is the only part that is memory rather than logic, and it is eight words long. Everything else in this lesson is one question asked quickly.',
    stats: [
      { k: 'Contractions mastered', v: '15' },
      { k: 'Trap conquered', v: 'H aspiré' },
      { k: 'XP earned', v: '320' },
      { k: 'Next up', v: 'Liaison, the same instinct in reverse' },
    ],
  },

  {
    type: 'quiz',
    id: 's21-quiz',
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
    id: 's22-roundup',
    title: 'What you take with you',
    frSub: "L'essentiel",
    render: 'screens',
    layer: 'core',
    size: 'md',
    imageRef: 'lessons/elision/roundup.jpg',
    terms: ['elision', 'hAspire', 'liaison'],
    say: {
      text: 'That is the lesson. Four things worth keeping, and the last one is where you go next.',
      voice: 'coach',
      timing: 'onEnter',
    },
    body:
      'An hour ago you said two words where French says one, and a receptionist waited for you to finish a sentence you thought you had finished. The fix was not vocabulary. It was one rule about what French does when two vowels meet, a list of fifteen small words it applies to, and eight stubborn H words that refuse. You now do this without deciding to, which is the only version of it that is any use in a conversation.',
    points: [
      // Reframe appearance 3, which is what satisfies the density validator's
      // three-section minimum.
      `${REFRAME} That is elision, and it is compulsory rather than casual.`,
      'Fifteen words do it: je me te se le la de ne que ce, plus si and the que compounds. Nothing else in French elides.',
      "The trigger is a vowel SOUND, not a vowel letter. That is why it is j'habite, and why you cannot read elision off the page for any H word.",
      'Eight H words block it outright: le haricot, le hibou, la honte and the rest. Guess muet when you do not know, and learn the aspiré ones with their article.',
      'Next lesson is the same instinct running the other way. When a gap opens between two words, French wakes a sleeping consonant to fill it. That is liaison.',
    ],
  },
];

/* ─── Acts ────────────────────────────────────────────────────────────────── */

// Screen counts are estimates of the rendered flow (a deck card, a scene beat
// and a drill group are each one screen), kept so the checkpoint spacing rule
// is checked against the real shape rather than against the section count.
const ACTS = [
  { id: 'act1', title: 'Where the gap costs you', sections: ['s01-scene', 's02-goals', 's03-anchors'],
    milestone: 'The problem, named.', estScreens: 22, restPoints: ['s01-scene/end'] },

  { id: 'act2', title: 'The closed list', sections: ['s04-set', 's05-drill-trigger'],
    milestone: 'Fifteen words, all of them.', estScreens: 30, restPoints: ['s04-set/8'] },

  { id: 'act3', title: 'The H that refuses', sections: ['s06-trap', 's07-aspire'],
    milestone: 'The trap, beaten.', estScreens: 24, restPoints: ['s06-trap/drill'] },

  { id: 'act4', title: 'Bank the words', sections: ['s08-examples', 's09-dictation', 's10-listening'],
    milestone: 'The words, banked.', estScreens: 32, restPoints: ['s09-dictation/6'] },

  { id: 'act5', title: 'Make it automatic', sections: ['s12-inhibition', 's13-speak', 's14-scenario', 's15-errors'],
    milestone: 'Used in the wild.', estScreens: 34, restPoints: ['s13-speak/4'] },

  { id: 'act6', title: 'Prove it', sections: ['s16-reading', 's17-review', 's18-progress', 's21-quiz', 's22-roundup'],
    milestone: 'Lesson complete.', estScreens: 60, restPoints: ['s17-review', 's21-quiz/round3'] },
];

/* ─── SRS tranches ────────────────────────────────────────────────────────── */

// One slice per act, released AT that act's checkpoint rather than all at once
// on completion. Slices of itemIds, because the SRS keys on (itemId, modality)
// and a separate card id would have nothing to resolve against.
//
// Act 1 releases nothing: the scene teaches one contraction and the goals teach
// none, so there is nothing earned yet. Acts 2 and 3 carry the teaching load.
// The final act releases nothing new, which is what stops an hour-long lesson
// dumping its whole deck into review at the end.
const DECK_TRANCHE: string[][] = [
  [],
  [...familyIds('core')],
  [...familyIds('blocked')],
  [...familyIds('grammar')],
  [...familyIds('phrase'), ...familyIds('fixed')],
  [],
];

/* ─── The lesson ──────────────────────────────────────────────────────────── */

const ELISION_LESSON_AUTHORED: Lesson = {
  id: 'sons.07.l1',
  unitId: 'sons.07',
  seq: 1,
  title: 'Elision',
  level: 'sons',
  tag: 'SONS · LEÇON 07',

  intro:
    "French refuses to let two vowel sounds crash into each other. When a small word ending in a vowel meets a word starting with one, the first vowel is deleted and an apostrophe marks the place it stood. That is why it is j'aime and not je aime. This lesson gives you the fifteen words it happens to, the one thing that triggers it, and the short list of stubborn words that block it completely.",

  overview: {
    glyph: "l'",
    titleEn: 'Elision: why French words run together',
    subFr: "L'élision",
    introFr:
      "En français, deux voyelles ne peuvent pas se suivre directement. La première disparaît et une apostrophe prend sa place : je aime devient j'aime. Dans cette leçon, vous apprenez les quinze mots concernés et les mots en H qui bloquent tout.",
    minutes: 55,
    screens: 202,
    difficulty: 2,
  },

  grammarAssumed: ['definite-articles', 'present-tense-regular'],
  grammarIntroduced: ['elision', 'h-aspire-vs-h-muet'],

  features: ['narrated', 'minimalPairs', 'voiceflash'],

  sections: SECTIONS,
  itemIds: ELISION_IDS,

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
      {
        id: 'rec-scene-break',
        desc: "The reception break beat. Same voice, same speed, back to back: [zhuh a-BEET] as an English reader says it with an audible gap, then j'habite as one unbroken word. The gap in take one must be long enough to hear without being a comic pause, around 250ms.",
      },
      {
        id: 'rec-the-fifteen',
        desc: "All fifteen contractions in list order: j'ai, m'appelle, t'aime, s'habiller, l'ami, l'école, d'accord, n'ai, qu'il, c'est, s'il, jusqu'à, lorsqu'il, puisqu'il, quelqu'un. Isolated, 900ms gaps, each one a single unbroken unit with no internal pause. This is the reference for what a contraction should sound like, so it must be flawless on that one point.",
        clipIds: ['j-ai', 'm-appelle', 't-aime', 's-habiller', 'l-ami', 'l-ecole', 'd-accord', 'n-ai', 'qu-il', 'c-est', 's-il', 'jusqu-a', 'lorsqu-il', 'quelqu-un'],
      },
      {
        id: 'rec-elide-vs-not',
        desc: "The trigger contrast: j'aime / je parle, j'arrive / le pain, l'eau / la porte, l'argent / de Paris, j'habite / je ne sais pas. CRITICAL: each pair must be one voice at one speed, recorded in a single take with a 400ms gap, because the whole teaching point is the presence or absence of the little uh of je. Two takes at different speeds makes the pair uncomparable and the section teaches nothing.",
        clipIds: ['j-aime', 'je-parle', 'j-arrive', 'le-pain', 'l-eau', 'la-porte', 'l-argent', 'de-paris', 'j-habite', 'je-ne-sais-pas'],
      },
      {
        id: 'rec-h-pairs',
        desc: "The h muet against h aspiré contrast, and the most important recording in the lesson: l'homme / le hibou, l'hôtel / le haricot, l'heure / la honte, l'hôpital / le hockey, plus l'ami / l'amie as an identical-sounding pair. CRITICAL: every pair must be the SAME voice at the SAME speed in ONE take, because the only difference is a gap of roughly 120ms and a listener cannot judge that across two takes. The aspiré side needs a real, audible, deliberate gap rather than a glottal stop.",
        clipIds: ['l-homme', 'le-hibou', 'l-hotel', 'le-haricot', 'l-heure', 'la-honte', 'l-hopital', 'le-hockey', 'l-ami', 'l-amie'],
      },
      {
        id: 'rec-examples-10',
        desc: 'All 10 example phrases, normal and 0.65 speed. At the slow speed the contractions must STAY contracted: slowing down is not permission to reintroduce the gap, and a slow take with a pause inside a contraction teaches the exact error the lesson removes.',
      },
      {
        id: 'rec-dictation-12',
        desc: 'All 12 dictation items, normal speed only, natural connected delivery. No exaggerated separation: the learner is being asked to hear a contraction as one word and write it as two-plus-apostrophe.',
        clipIds: ['j-ai', 'j-habite', 'l-ecole', 'l-addition', 'd-accord', 'c-est', 'qu-est-ce-que-c-est', 'aujourdhui', 'le-haricot', 'je-m-appelle-marie', 'l-addition-s-il-vous-plait', 'ce-nest-pas'],
      },
      {
        id: 'rec-reading-passage',
        desc: 'The 6-sentence reading passage, one take at natural pace, plus per-sentence stems for tap-to-replay. The two haricot instances must carry their blocked gap audibly, since one of the comprehension questions turns on it.',
      },
    ],
  },

  narration: {
    camilleVoiceId: 'camille-fr-ca-01',
    ratioEnFr: 0.7,
    stages: [
      {
        stage: 'warm',
        segments: [
          { voice: 'en', text: "I am Camille. Today we are doing elision, which is the reason French words run into each other the way they do." },
          { voice: 'en', text: 'You already do this correctly several times a day without knowing it. By the end you will do it on purpose.' },
          { voice: 'fr', text: "C'est parti." },
        ],
      },
      {
        stage: 'focus',
        segments: [
          { voice: 'en', text: 'One idea first. French does not let two vowel sounds meet head on. When they would, the small word in front loses its vowel.' },
          { voice: 'fr', text: "je aime" },
          { voice: 'en', text: 'That is not French. The two vowels collide, so the E of je is deleted and you get this instead.' },
          { voice: 'fr', text: "j'aime" },
          { kind: 'repeat', itemId: 'fr.sons.elision.001' },
        ],
      },
      {
        stage: 'input',
        segments: [
          { voice: 'en', text: 'Fifteen small words do this. Here are the four you will use most.' },
          { voice: 'fr', text: "j'ai" },
          { voice: 'fr', text: "c'est" },
          { voice: 'fr', text: "d'accord" },
          { voice: 'fr', text: "l'école" },
          { voice: 'en', text: 'Each one is a single syllable or a single unbroken unit. No pause where the apostrophe is.' },
          { kind: 'repeat', itemId: 'fr.sons.elision.002' },
          { kind: 'repeat', itemId: 'fr.sons.elision.034' },
        ],
      },
      {
        stage: 'practice',
        segments: [
          { voice: 'en', text: 'Now the thing that decides it. Listen to these two and tell me which one contracted.' },
          { voice: 'fr', text: "j'habite" },
          { voice: 'fr', text: 'je parle' },
          { voice: 'en', text: 'The first one. habite starts with an H, but the H is silent, so out loud the word begins on a vowel. The ear decides, never the spelling.' },
          { kind: 'repeat', itemId: 'fr.sons.elision.003' },
        ],
      },
      {
        stage: 'produce',
        segments: [
          { voice: 'en', text: 'Your turn. Say: I live in Lyon.' },
          { kind: 'produce', itemId: 'fr.sons.elision.062', expected: "J'habite à Lyon.", gradeAs: 'produce' },
          { voice: 'en', text: 'Again, and this time the bill, please.' },
          { kind: 'produce', itemId: 'fr.sons.elision.063', expected: "L'addition, s'il vous plaît.", gradeAs: 'produce' },
        ],
      },
      {
        stage: 'check',
        segments: [
          { voice: 'en', text: 'One trap before we finish. A short list of H words block all of this. Which of these is correct?' },
          { voice: 'fr', text: 'le haricot' },
          { kind: 'check', itemId: 'fr.sons.elision.049', expected: 'le haricot', gradeAs: 'discriminate' },
          { voice: 'en', text: "le haricot, with the article whole and a small gap after it. Never l'haricot, however wrong that looks." },
        ],
      },
      {
        stage: 'cheat',
        segments: [
          { voice: 'en', text: 'Three things to keep. Two vowels collide, the little word gives way. Fifteen words do it and nothing else does.' },
          { voice: 'en', text: 'And the trigger is a sound, not a letter, which is why eight stubborn H words can block the whole thing.' },
          { voice: 'fr', text: "À bientôt." },
        ],
      },
    ],
  },

  version: 1,
};


// The role-play alternatives are NOT authored in this file. `userEn` and the
// accepted `alts[]` for this lesson's scenario live in data/scenario-alts.ts,
// and withScenarioAlts attaches them here so that every consumer — the batch
// that writes Postgres, the merge script that writes seed.json, and the tests
// that compare the two — sees the same enriched lesson.
//
// Before 2026-08-09 they lived in seed.json ONLY. apply-scenario-alts.ts wrote
// the seed and said so; nobody updated the fourteen authored sources, so each
// of their batches held a poorer copy of its own lesson and would have written
// it straight back. That is not hypothetical: re-rendering a1.03 destroyed five
// turns exactly this way on 2026-08-07.
export const ELISION_LESSON: Lesson = withScenarioAlts(ELISION_LESSON_AUTHORED);

export default ELISION_LESSON;
