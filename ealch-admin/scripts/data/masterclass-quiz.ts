// sons.09.l1 — the exam, its error triggers and its remediation drills.
//
// Split out of masterclass-lesson.ts the way sons.08 split rythme-quiz.ts: at
// 48 questions in 8 rounds this is the largest single structure in the lesson,
// and leaving it inline buries the spine it is supposed to test.
//
// ── Route A, and why ───────────────────────────────────────────────────────
//
// The brief asks for several exams. There are two ways to deliver that and only
// one of them works today:
//
//   A. ONE quiz section, MANY rounds. The v2 round engine already stages an
//      exam: each round has its own label, its own spoken intro, its own error
//      trigger, and a failed round fires that trigger's drill and retest BEFORE
//      the next round starts. Fully rendered, fully tested.
//   B. SEVERAL quiz sections, placed at act boundaries. Not supported. The
//      pager filters every quiz out of the content pages (contentSections) and
//      appends exactly ONE quiz page; quizSection() and lesson.tsx both resolve
//      it with find/findIndex. A second quiz section is authored, validated,
//      published and never rendered. a1.01.l1 already ships two quiz sections
//      and 12 of its 15 questions have never been asked by anyone.
//
// Route A is what this lesson takes. It delivers what the brief actually wants
// (several distinct, themed, separately remediated exams) with no risk of
// silently dropping content, and it does not put a renderer change on the
// critical path of the last lesson in the track. The eight rounds below ARE the
// several exams: one per rule, one for grouping, and two that combine.
//
// ── The format mix, and two renderer contracts it is built around ──────────
//
//   speak 12 · typeIn 11 · listenChoose 9 · mcq 8 · errorSpot 7 · tapSilent 1
//
// 30 of 48 ask the learner to PRODUCE. That is the whole point of this lesson:
// every rule here has already been recognised correctly in an earlier quiz, and
// what has never been tested is applying five of them to an unseen sentence at
// speed. mcq survives only where the question is a real judgement call.
//
// Two things were verified in the components rather than assumed, because both
// are silent failures:
//
//   1. A listenChoose plays `question.audio.clip ?? opts[correct]` (SilentCards
//      ListenChooseCard). With CLIP_MANIFEST empty, a `clip` name is spoken
//      LITERALLY by TTS: sons.07 authors clip 'j-aime' and the device says
//      "j-aime". So no question here names a clip, and every listenChoose has
//      FRENCH options, so today's fallback speaks the real target and the card
//      works before the studio delivers anything.
//   2. typeIn and errorSpot render through ErrorSpotCard, which is handed no
//      onPlay and draws no audio control at all. A "type what you hear"
//      question in that format is unanswerable. sons.07 ships two. None here.

import type { ErrorTrigger, LessonDrill, QuizQuestion, QuizRound } from '../../../ealch-v2/src/content/schema.ts';
import { BY_ID, type Rule } from './masterclass-corpus.ts';

/** A transcription, read from the corpus rather than retyped. */
function w(id: string) {
  const found = BY_ID.get(id);
  if (!found) throw new Error(`masterclass-quiz: unknown corpus id "${id}"`);
  return found;
}
const fr = (id: string): string => w(id).fr;
const ipa = (id: string): string => w(id).ipa ?? '';

/** A question plus the machine-readable claim about which rules it exercises.
 *
 *  `rules` does not ship: QuizQuestion has no such field and adding one would
 *  put authoring metadata in every learner's snapshot. It is stripped by
 *  `rounds()` below and kept alongside in RULES_BY_Q, which is what
 *  sons-09-masterclass.test.ts asserts the multi-rule floor against.
 *
 *  Without this the "the quiz is genuinely multi-rule" assertion would have to
 *  guess from the question text, and a quiz that drifted back to single-rule
 *  recall would keep passing. */
type AuthoredQuestion = QuizQuestion & { rules: Rule[] };
type AuthoredRound = Omit<QuizRound, 'questions'> & { questions: AuthoredQuestion[] };

const MIC = { mode: 'mic' as const };
/** The pair recording a listenChoose leans on. No `clip`: see the header. */
const HEAR = (recordingId: string) => ({ mode: 'recorded' as const, recordingId, speeds: [1.0, 0.65], audioFirst: true });

const AUTHORED: AuthoredRound[] = [
  {
    id: 'round1',
    label: 'Group it',
    targets: ['err-cross-break'],
    say: { text: 'Round one. Before anything else, where does the phrase break.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'Where does « Le matin, je bois mon café. » break?', format: 'mcq',
        opts: ['after je', 'after bois', 'after matin', 'nowhere, it is one group'], correct: 2,
        rules: ['rythme'],
        why: 'At the comma. That is one group and then another, and the push lands twice: once on matin and once at the end.',
        ref: 's04-breaks' },

      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: HEAR('rec-breaks'),
        opts: ['On mange, les enfants.', 'On mange les enfants.'], correct: 0,
        rules: ['rythme', 'liaison'],
        why: 'The break is the only difference, and it changes who is being eaten. Two groups with a gap, against one group with a Z in it.',
        ref: 's04-breaks' },

      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: HEAR('rec-subject-verb'),
        opts: ['Les enfants arrivent.', 'Ils arrivent en retard.'], correct: 1,
        rules: ['rythme', 'liaison', 'muettes'],
        why: 'Ils arrivent has a Z in the middle, because a pronoun subject does not close a group. Les enfants arrivent has silence in the same place.',
        ref: 's05-across' },

      { q: 'Say it, and break where the comma is: In the morning, the children go to school.', format: 'speak',
        target: fr('fr.sons.masterclass.039'), ipa: ipa('fr.sons.masterclass.039'), audio: MIC,
        rules: ['rythme', 'elision', 'liaison', 'muettes', 'nasales'],
        why: 'Two groups. Inside the second one, one join is made, one is refused and one is made again, all without slowing down.',
        ref: 's16-speak' },

      { q: 'Type the word that ends the first group in « Le matin, les enfants vont à l\'école. »', format: 'typeIn',
        accept: ['matin', 'le matin'], answer: 'matin',
        rules: ['rythme'],
        why: 'matin sits right before the comma, so it carries the push and closes the group. Nothing after it can join back across that edge.',
        ref: 's04-breaks' },

      { q: 'A learner reads « Les enfants arrivent » with a Z before arrivent. Type the two words that DO join in that sentence.', format: 'errorSpot',
        accept: ['les enfants'], answer: 'les enfants',
        rules: ['rythme', 'liaison', 'muettes'],
        why: 'les and enfants sit inside one group, so they join. enfants and arrivent are on opposite sides of the subject boundary, so they never do.',
        ref: 's05-across' },
    ],
  },

  {
    id: 'round2',
    label: 'The vowel that goes',
    targets: ['err-miss-join'],
    say: { text: 'Round two. Elision, and the one thing that stops it.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'Type it: I have no friends here.', format: 'typeIn',
        accept: ["je n'ai pas d'amis ici", 'je nai pas damis ici', "je n’ai pas d’amis ici"],
        answer: fr('fr.sons.masterclass.024'),
        rules: ['elision', 'muettes'],
        why: 'ne and de both lose their vowel. The S of pas stays silent because a D follows it, not a vowel.',
        ref: 's07-collide' },

      { q: 'Type it: What are we waiting for?', format: 'typeIn',
        accept: ["qu'est-ce qu'on attend", 'quest-ce quon attend', "qu’est-ce qu’on attend"],
        answer: fr('fr.sons.masterclass.028'),
        rules: ['elision', 'liaison', 'nasales'],
        why: 'Two elisions turn four written words into four spoken syllables, and then the N of on links straight onto attend.',
        ref: 's08-both' },

      { q: 'A learner writes « Je ne ai pas de argent ». Fix both elisions.', format: 'errorSpot',
        accept: ["je n'ai pas d'argent", 'je nai pas dargent', "je n’ai pas d’argent"],
        answer: "Je n'ai pas d'argent.",
        rules: ['elision'],
        why: 'ne + ai and de + argent are both vowel collisions, and neither elision is optional. There is no slower French in which they stay whole.',
        ref: 's07-collide' },

      { q: 'Say it: It is too early.', format: 'speak',
        target: fr('fr.sons.masterclass.051'), ipa: ipa('fr.sons.masterclass.051'), audio: MIC,
        rules: ['elision', 'muettes'],
        why: "C'est is one syllable. Putting the E of ce back is the single most common way to sound like you are reading rather than speaking.",
        ref: 's16-speak' },

      { q: 'Why is there no elision before mangé in « Il n\'a pas mangé »?', format: 'mcq',
        opts: ['mangé is a verb', 'pas never elides', 'mangé starts on a consonant', 'the sentence is negative'], correct: 2,
        rules: ['elision'],
        why: 'A join only fires where the next word starts on a vowel sound. The M of mangé is a consonant, so nothing collides and nothing gives way.',
        ref: 's07-collide' },

      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: HEAR('rec-joins'),
        opts: ["C'est un très bon exemple.", "C'est un très bel appartement."], correct: 0,
        rules: ['elision', 'liaison', 'nasales'],
        why: 'Both open on the same elision and the same T. They part on the third join: bon lends an N and bel lends an L.',
        ref: 's08-both' },
    ],
  },

  {
    id: 'round3',
    label: 'The letter that comes back',
    targets: ['err-miss-join'],
    say: { text: 'Round three. Liaison, and which letter actually wakes.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'In « un grand arbre », what sound does the D of grand make?', format: 'mcq',
        opts: ['/d/', '/z/', 'nothing', '/t/'], correct: 3,
        rules: ['liaison', 'muettes'],
        why: 'A final D wakes as a T, never as a D. The liaison consonant is not always the letter you are looking at.',
        ref: 's08-both' },

      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: HEAR('rec-pairs'),
        opts: ['un grand arbre', 'un grand parc'], correct: 1,
        rules: ['liaison', 'muettes', 'nasales'],
        why: 'The same D in both. It says T in front of a vowel and nothing in front of a consonant, and there is no other difference between them.',
        ref: 's09-silence' },

      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: HEAR('rec-pairs'),
        opts: ['les amis', 'les copains'], correct: 0,
        rules: ['liaison', 'muettes'],
        why: 'The S of les sounds in one and not the other, and what decided it was the first sound of the word after it.',
        ref: 's09-silence' },

      { q: 'Say it: We have two children.', format: 'speak',
        target: fr('fr.sons.masterclass.029'), ipa: ipa('fr.sons.masterclass.029'), audio: MIC,
        rules: ['liaison', 'muettes', 'nasales'],
        why: 'An S and an X, both silent as written, both saying Z here. Neither join may carry a pause in front of it.',
        ref: 's16-speak' },

      { q: 'Say it: We are early.', format: 'speak',
        target: fr('fr.sons.masterclass.026'), ipa: ipa('fr.sons.masterclass.026'), audio: MIC,
        rules: ['liaison', 'muettes', 'nasales'],
        why: 'Three joins in four words. Said correctly it is five syllables with nothing at all between them.',
        ref: 's16-speak' },

      { q: 'Type the linking consonant you hear in the middle of « ils ont ». One letter.', format: 'typeIn',
        accept: ['z', 'a z'], answer: 'z',
        rules: ['liaison', 'muettes'],
        why: 'The S of ils says Z. A liaison S is always voiced, which is why les amis is lay-z and never lay-s.',
        ref: 's08-both' },
    ],
  },

  {
    id: 'round4',
    label: 'What stays silent',
    targets: ['err-over-join'],
    say: { text: 'Round four. Most of it stays silent, and adding a join is as wrong as missing one.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'Tap the letter you do not say in this word.', format: 'tapSilent',
        word: 'partis', correct: 's',
        rules: ['muettes'],
        why: 'The final S is written and silent. There is no vowel after it inside this group, so nothing is there to wake it.',
        ref: 's09-silence' },

      { q: 'How many audible consonants close the words in « Tout va bien »?', format: 'mcq',
        opts: ['one', 'two', 'three', 'none'], correct: 3,
        rules: ['muettes', 'nasales'],
        why: 'None. The T of tout is asleep because a consonant follows it, and bien ends in a nasal vowel with no N after it.',
        ref: 's09-silence' },

      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: HEAR('rec-pairs'),
        opts: ['Tout est prêt.', 'Tout va bien.'], correct: 1,
        rules: ['liaison', 'muettes'],
        why: 'Tout est carries a T in the middle and Tout va carries nothing. It is the same letter of the same word in both.',
        ref: 's09-silence' },

      { q: 'Say it: They left very early.', format: 'speak',
        target: fr('fr.sons.masterclass.050'), ipa: ipa('fr.sons.masterclass.050'), audio: MIC,
        rules: ['muettes', 'nasales'],
        why: 'Five words, five silent endings, and no join available anywhere in it. Inventing one is the classic way to overcorrect.',
        ref: 's16-speak' },

      { q: 'Type it: Everything is fine.', format: 'typeIn',
        accept: ['tout va bien'], answer: fr('fr.sons.masterclass.038'),
        rules: ['muettes', 'nasales'],
        why: 'Three short words, and the T you can see is one you must not say. Silence is the default the system falls back to.',
        ref: 's09-silence' },

      { q: 'A learner writes « Il ont mangé » and cannot hear where the Z comes from. Fix the spelling.', format: 'errorSpot',
        accept: ['ils ont mangé', 'ils ont mange'], answer: 'Ils ont mangé.',
        rules: ['liaison', 'muettes', 'nasales'],
        why: 'The plural S is the whole liaison. Drop it from the spelling and the Z you can hear has nothing left to come from.',
        ref: 's09-silence' },
    ],
  },

  {
    id: 'round5',
    label: 'The H that blocks both',
    targets: ['err-sound-letter'],
    say: { text: 'Round five. The hard part, and nothing on the page will help you.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'Which of these blocks BOTH the elision and the liaison?', format: 'mcq',
        opts: ["l'hôtel", "l'heure", 'le hibou', "l'homme"], correct: 2,
        rules: ['elision', 'liaison'],
        why: 'hibou is h aspiré. It is the only thing in French that blocks both joins, and nothing in the spelling shows it.',
        ref: 's11-h' },

      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: HEAR('rec-h-blocks'),
        opts: ['les hôtels', 'les héros'], correct: 1,
        rules: ['liaison', 'muettes'],
        why: 'One has a Z and one has a small gap where the Z would have been. That gap is the only signal an h aspiré ever gives you.',
        ref: 's11-h' },

      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: HEAR('rec-h-blocks'),
        opts: ['deux heures', 'deux hiboux'], correct: 0,
        rules: ['liaison', 'muettes'],
        why: 'The X of deux says Z before an h muet and nothing before an h aspiré. Both of those words are spelled with an H.',
        ref: 's11-h' },

      { q: 'Say it: The little hero has left.', format: 'speak',
        target: fr('fr.sons.masterclass.019'), ipa: ipa('fr.sons.masterclass.019'), audio: MIC,
        rules: ['liaison', 'muettes'],
        why: 'Two sleeping T and both stay down. Waking the first one turns héros into a word French does not have.',
        ref: 's11-h' },

      { q: 'A learner writes « l\'héros ». Fix it.', format: 'errorSpot',
        accept: ['le héros', 'le heros'], answer: 'le héros',
        rules: ['elision', 'liaison'],
        why: 'h aspiré blocks the elision as well as the liaison. The article keeps its vowel even though the H makes no sound at all.',
        ref: 's11-h' },

      { q: 'Type the correct article plus noun for « hibou », the owl.', format: 'typeIn',
        accept: ['le hibou'], answer: 'le hibou',
        rules: ['elision', 'liaison'],
        why: 'hibou is h aspiré, so le keeps its E. When you genuinely do not know which H you have, guess muet: it is far more common.',
        ref: 's11-h' },
    ],
  },

  {
    id: 'round6',
    label: 'Nasals in connected speech',
    targets: ['err-sound-letter'],
    say: { text: 'Round six. The N that does two jobs at once.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'In « un bon ami », what happens to the vowel of bon?', format: 'mcq',
        opts: ['it stops being nasal', 'it becomes two syllables', 'it disappears', 'it stays nasal and an N is added'], correct: 3,
        rules: ['liaison', 'nasales'],
        why: 'The N does both jobs at once. The vowel still goes through the nose AND an N appears in front of ami, and neither is spent on the other.',
        ref: 's12-nasal' },

      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: HEAR('rec-nasal-n'),
        opts: ['un bon ami', 'un bon copain'], correct: 0,
        rules: ['liaison', 'nasales'],
        why: 'Three syllables each, and only one of them has an audible N in the middle. The vowel of bon is nasal in both.',
        ref: 's12-nasal' },

      { q: 'Say it: in an instant.', format: 'speak',
        target: fr('fr.sons.masterclass.032'), ipa: ipa('fr.sons.masterclass.032'), audio: MIC,
        rules: ['liaison', 'muettes', 'nasales'],
        why: 'Four nasal vowels and two linking N in three words. Each N belongs to the syllable after it, not the one before.',
        ref: 's16-speak' },

      { q: 'Say it: They have a child.', format: 'speak',
        target: fr('fr.sons.masterclass.056'), ipa: ipa('fr.sons.masterclass.056'), audio: MIC,
        rules: ['liaison', 'muettes', 'nasales'],
        why: 'Six spoken syllables out of four written words, with three joins holding them together and no pause available anywhere.',
        ref: 's16-speak' },

      { q: 'Type it: my former flat.', format: 'typeIn',
        accept: ['mon ancien appartement'], answer: fr('fr.sons.masterclass.031'),
        rules: ['liaison', 'nasales'],
        why: 'Two N link and four vowels stay nasal. The N you hear was never a separate letter you could have chosen to drop.',
        ref: 's12-nasal' },

      { q: 'A learner says « un bon copain » with an N before copain. Type the phrase where that N is correct.', format: 'errorSpot',
        accept: ['un bon ami'], answer: 'un bon ami',
        rules: ['liaison', 'nasales'],
        why: 'An N only surfaces where a vowel follows it. copain starts on a consonant, so there is nothing for the N to attach to.',
        ref: 's12-nasal' },
    ],
  },

  {
    id: 'round7',
    label: 'Two rules at once',
    targets: ['err-over-join'],
    say: { text: 'Round seven. Every question here needs more than one rule.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'In « Il n\'a pas encore mangé », what happens to ne and to pas?', format: 'mcq',
        opts: ['both keep their vowel', 'both elide', 'ne elides and the S of pas wakes', 'ne elides and pas stays silent'], correct: 2,
        rules: ['elision', 'liaison', 'muettes'],
        why: 'One rule deletes a vowel and another wakes a consonant, three letters apart. Take encore out and only the second one stops.',
        ref: 's08-both' },

      { q: 'Say it: It is a former hotel.', format: 'speak',
        target: fr('fr.sons.masterclass.025'), ipa: ipa('fr.sons.masterclass.025'), audio: MIC,
        rules: ['elision', 'liaison', 'muettes', 'nasales'],
        why: 'One elision and two liaisons, run together as a single unbroken word. Any pause inside it is the error.',
        ref: 's16-speak' },

      { q: 'Say it: Have a large glass of water.', format: 'speak',
        target: fr('fr.sons.masterclass.023'), ipa: ipa('fr.sons.masterclass.023'), audio: MIC,
        rules: ['elision', 'liaison', 'muettes', 'nasales'],
        why: 'The Z of prenez wakes and the D of grand does not, four words apart, and the same one thing decided both of them.',
        ref: 's16-speak' },

      { q: 'Type it: That is a very good example.', format: 'typeIn',
        accept: ["c'est un très bon exemple", 'cest un tres bon exemple', "c’est un très bon exemple"],
        answer: fr('fr.sons.masterclass.022'),
        rules: ['elision', 'liaison', 'muettes', 'nasales'],
        why: 'The S of très sits between two liaisons and makes none of its own, because bon opens on a consonant.',
        ref: 's08-both' },

      { q: 'Type it: We have had enough.', format: 'typeIn',
        accept: ['on en a assez'], answer: fr('fr.sons.masterclass.033'),
        rules: ['liaison', 'nasales'],
        why: 'Two joins, then two vowels side by side with nothing between them. a has no sleeping consonant to lend, so the gap stays.',
        ref: 's07-collide' },

      { q: 'A learner reads « les héros » with a Z. Type the phrase from this lesson where les DOES take a Z before an H word.', format: 'errorSpot',
        accept: ['les hôtels', 'les hotels'], answer: 'les hôtels',
        rules: ['liaison', 'muettes'],
        why: 'Both words open on a silent H and only one lets the join through. Nothing in the spelling could have told you which.',
        ref: 's11-h' },
    ],
  },

  {
    id: 'round8',
    label: 'The whole system, at speed',
    targets: ['err-word-by-word'],
    say: { text: 'Last round. You know all of this. The only question left is whether you can do it in time.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'You meet a sentence you have never seen. What do you decide FIRST?', format: 'mcq',
        opts: ['which letters are silent', 'which words elide', 'where the stress falls', 'where the phrase breaks'], correct: 3,
        rules: ['rythme'],
        why: 'Group first. Nothing joins across a break, so deciding a join before you know the groups can only ever be a guess.',
        ref: 's03-anchors' },

      { q: 'Say it: When we are late, everyone waits.', format: 'speak',
        target: fr('fr.sons.masterclass.044'), ipa: ipa('fr.sons.masterclass.044'), audio: MIC,
        rules: ['rythme', 'liaison', 'muettes', 'nasales'],
        why: 'Four joins, one break and five nasal vowels. At conversation speed there is no room to decide any of it word by word.',
        ref: 's16-speak' },

      { q: 'Say it: In the morning, the children go to school.', format: 'speak',
        target: fr('fr.sons.masterclass.039'), ipa: ipa('fr.sons.masterclass.039'), audio: MIC,
        rules: ['rythme', 'elision', 'liaison', 'muettes', 'nasales'],
        why: 'All five rules in one line: a break, a join made, a join refused, a join made, and a push at the end of each group.',
        ref: 's16-speak' },

      { q: 'Type it: We arrive on time, as usual.', format: 'typeIn',
        accept: ["on arrive à l'heure, comme d'habitude", 'on arrive a lheure comme dhabitude', "on arrive à l’heure, comme d’habitude"],
        answer: fr('fr.sons.masterclass.042'),
        rules: ['rythme', 'elision', 'liaison', 'nasales'],
        why: 'Two elisions, one liaison and one slide, split across a break. Every one of them is compulsory.',
        ref: 's19-reading' },

      { q: 'Type the three steps of the system, in order, separated by commas.', format: 'typeIn',
        accept: ['group, join, push', 'group join push'], answer: 'Group, join, push.',
        rules: ['rythme', 'elision', 'liaison'],
        why: 'Group decides where nothing may cross. Join fires inside each group and only there. Push lands on the last syllable of each one.',
        ref: 's03-anchors' },

      { q: 'A learner reads « Les enfants arrivent » as three separate words with a pause between each. Type what they should have joined.', format: 'errorSpot',
        accept: ['les enfants'], answer: 'les enfants',
        rules: ['rythme', 'liaison', 'muettes'],
        why: 'One join, and only one. The pause between enfants and arrivent is correct. The pause between les and enfants is not.',
        ref: 's05-across' },
    ],
  },
];

/* ─── Exported views ──────────────────────────────────────────────────────── */

/** The rounds as the schema stores them: `rules` stripped from every question. */
export const QUIZ_ROUNDS: QuizRound[] = AUTHORED.map((r) => ({
  ...r,
  questions: r.questions.map(({ rules: _rules, ...q }) => q),
}));

/** Which rules each question exercises, keyed by its stem plus its ref so two
 *  questions that share a stem ("Which one did you hear?") stay distinct. */
export const RULES_BY_Q: Map<string, Rule[]> = new Map(
  AUTHORED.flatMap((r) => r.questions.map((q) => [`${r.id}::${q.ref}::${q.q}`, q.rules] as [string, Rule[]])),
);

/** Every authored question, with its rules, for the lesson test. */
export const AUTHORED_QUESTIONS: AuthoredQuestion[] = AUTHORED.flatMap((r) => r.questions);

/** How many questions need two or more rules to answer. The floor this lesson
 *  holds itself to; see sons-09-masterclass.test.ts. */
export const multiRuleCount = (): number => AUTHORED_QUESTIONS.filter((q) => q.rules.length >= 2).length;

/** The format mix, for the batch report and the test. */
export function formatMix(): Record<string, number> {
  const out: Record<string, number> = {};
  for (const q of AUTHORED_QUESTIONS) {
    const f = q.format ?? 'mcq';
    out[f] = (out[f] ?? 0) + 1;
  }
  return out;
}

/* ─── Error triggers and their drills ─────────────────────────────────────── */

export const TRIGGERS: ErrorTrigger[] = [
  {
    id: 'err-cross-break',
    description: 'Joins across a phrase break, or fails to break at all and runs two groups into one.',
    detectOn: ['s04-breaks', 's05-across', 's06-push', 's22-quiz/round1'],
    drill: 'drill-break',
    retest: 'retest-break',
  },
  {
    id: 'err-miss-join',
    description: 'Leaves a compulsory elision or liaison unmade: je aime, les_amis with a gap.',
    detectOn: ['s07-collide', 's08-both', 's10-dictation', 's22-quiz/round2', 's22-quiz/round3'],
    drill: 'drill-join',
    retest: 'retest-join',
  },
  {
    id: 'err-over-join',
    description: 'Makes a join French forbids: a Z into les héros, or a link from a noun subject to its verb.',
    detectOn: ['s09-silence', 's14-errors', 's22-quiz/round4', 's22-quiz/round7'],
    drill: 'drill-block',
    retest: 'retest-block',
  },
  {
    id: 'err-sound-letter',
    description: 'Decides from the letter rather than the sound: reads an H, or says an N after a nasal vowel.',
    detectOn: ['s11-h', 's12-nasal', 's13-pairs', 's22-quiz/round5', 's22-quiz/round6'],
    drill: 'drill-sound',
    retest: 'retest-sound',
  },
  {
    id: 'err-word-by-word',
    description: 'Applies the rules one word at a time, correctly but far too slowly to be speech.',
    detectOn: ['s15-inhibition', 's16-speak', 's17-scenario', 's22-quiz/round8'],
    drill: 'drill-speed',
    retest: 'retest-speed',
  },
];

export const DRILLS: LessonDrill[] = [
  {
    id: 'drill-break',
    title: 'Find the edge',
    size: 'lg',
    format: 'sort',
    buckets: ['One group', 'Two groups'],
    items: [
      'fr.sons.masterclass.015', 'fr.sons.masterclass.026', 'fr.sons.masterclass.039',
      'fr.sons.masterclass.041', 'fr.sons.masterclass.045', 'fr.sons.masterclass.056',
    ],
    coach: 'Six phrases. Say each one out loud and decide where, if anywhere, you had to stop.',
    audio: { mode: 'recorded', recordingId: 'rec-breaks', speeds: [1.0, 0.65] },
  },
  {
    id: 'retest-break',
    title: 'One more edge',
    format: 'mcq',
    q: 'Which of these is TWO groups rather than one?',
    opts: ['On est en avance.', 'Ils ont un enfant.', 'On mange, les enfants.', "C'est un ancien hôtel."],
    correct: 2,
    why: 'The comma is a real break. The other three run straight through with no place to stop inside them.',
  },
  {
    id: 'drill-join',
    title: 'Make the join',
    size: 'lg',
    format: 'typeIn',
    items: [
      'fr.sons.masterclass.001', 'fr.sons.masterclass.025', 'fr.sons.masterclass.026',
      'fr.sons.masterclass.028', 'fr.sons.masterclass.029', 'fr.sons.masterclass.037',
    ],
    coach: 'Six phrases, every one of them with a compulsory join in it. Write what the join actually sounds like.',
  },
  {
    id: 'retest-join',
    title: 'Once more',
    format: 'typeIn',
    q: 'Type the linking sound in « nous avons ». One letter.',
    why: 'The S of nous wakes as a Z, because avons opens on a vowel and the two words are inside one group.',
    coach: 'Just the one.',
  },
  {
    id: 'drill-block',
    title: 'Join, or leave it',
    size: 'lg',
    format: 'sort',
    buckets: ['Join it', 'Leave the gap'],
    items: [
      'fr.sons.masterclass.005', 'fr.sons.masterclass.006', 'fr.sons.masterclass.007',
      'fr.sons.masterclass.008', 'fr.sons.masterclass.015', 'fr.sons.masterclass.016',
    ],
    coach: 'Three of these join and three do not. Two are blocked by an H and one by the edge of a group.',
    audio: { mode: 'recorded', recordingId: 'rec-h-blocks', speeds: [1.0, 0.65] },
  },
  {
    id: 'retest-block',
    title: 'The gap',
    format: 'listenChoose',
    q: 'Which one did you hear?',
    opts: ['les hôtels', 'les héros'],
    correct: 0,
    why: 'les hôtels runs straight through on a Z. les héros leaves a small gap where an h aspiré blocked it.',
    audio: { mode: 'recorded', recordingId: 'rec-h-blocks', audioFirst: true },
  },
  {
    id: 'drill-sound',
    title: 'The sound, not the letter',
    size: 'lg',
    format: 'flashcard',
    pairs: [
      ['fr.sons.masterclass.013', 'fr.sons.masterclass.014'],
      ['fr.sons.masterclass.005', 'fr.sons.masterclass.006'],
      ['fr.sons.masterclass.003', 'fr.sons.masterclass.004'],
      ['fr.sons.masterclass.011', 'fr.sons.masterclass.012'],
    ],
    coach: 'Four pairs. In each one the spelling gives you nothing, so listen and then decide.',
    audio: { mode: 'recorded', recordingId: 'rec-nasal-n', speeds: [1.0, 0.65] },
  },
  {
    id: 'retest-sound',
    title: 'One decision',
    format: 'mcq',
    q: 'You meet a new word starting with H and have to guess. Which way?',
    opts: ['aspiré, keep the article whole', 'muet, let the join through'],
    correct: 1,
    why: 'Most French H are muet, and nearly every aspiré one is a recent borrowing. Muet is the better guess by a long way.',
  },
  {
    id: 'drill-speed',
    title: 'Faster than you can decide',
    size: 'lg',
    format: 'speak',
    items: [
      'fr.sons.masterclass.039', 'fr.sons.masterclass.042', 'fr.sons.masterclass.044',
      'fr.sons.masterclass.047', 'fr.sons.masterclass.056',
    ],
    coach: 'Five sentences. Say each one faster than you can work it out. The rules survive speed; the hesitation does not.',
    audio: MIC,
  },
  {
    id: 'retest-speed',
    title: 'At speed, once',
    format: 'speak',
    q: 'Say « Quand on est en retard, tout le monde attend » with one stop, at the comma, and nowhere else.',
    why: 'Four joins and one break. If you can place the single stop correctly at speed, the system is running on its own.',
    audio: MIC,
  },
];
