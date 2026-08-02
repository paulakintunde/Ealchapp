// sons.06.l1 · Les lettres muettes — the lesson body.
//
// Built on Lesson Architecture v2, in the app's own schema. The authored
// content (every French string, every gloss, every quiz question and every
// `why`) is transcribed from the source `sons.06.l1.ts` VERBATIM. Nothing here
// is reworded: where the source and the app disagreed it was a FIELD NAME that
// changed, never a sentence.
//
// ── The one rule that governs this file ────────────────────────────────────
//
// No transcription is typed here. Every `fr`, `ipa`, `respell`, `en` and
// `silent` comes from the muettes corpus through `w()` and its helpers. That
// is what stops the same word's IPA existing in five places and drifting: to
// change how `petit` is transcribed you edit one line in muettes-corpus.ts and
// every screen in this lesson follows.
//
// Prose the lesson teaches WITH (the coach lines, the rules, the whys) is
// authored here, because it is lesson content rather than lexical data.
//
// ── Renames from the source file ───────────────────────────────────────────
//
//   source                    app                    why
//   sections[].type 'scene'   same                   new type, added to schema
//   'inhibitionDrill'         same                   new type, added to schema
//   itemId 'fr.petit'         'fr.sons.muettes.001'  ITEM_ID_RE demands
//                                                    fr.<level>.<theme>.<seq>
//   say: {text,voice,timing}  same                   SectionExtras.say widened
//   deckTranche 'dk1-001:..'  string[][] of itemIds  the SRS keys on
//                                                    (itemId, modality); a dk*
//                                                    id has nothing to resolve
//   audio.recorded[].desc     same                   kept as the studio brief
//
// See the report in MUETTES-BUILD-REPORT.md for the full list.

import {
  type ErrorTrigger,
  type GridLetter,
  type Lesson,
  type LessonDrill,
  type LessonSection,
  type QuizRound,
  type ReferenceSheet,
  type SceneBeat,
} from '../../../ealch-v2/src/content/schema.ts';
import { BY_ID, familyIds, MUETTES_IDS, type MuetteWord } from './muettes-corpus.ts';
import { TERMS } from './muettes-terms.ts';

/* ─── Corpus accessors ────────────────────────────────────────────────────── */

/** One word, by id. Throws on a typo rather than rendering a blank card. */
function w(id: string): MuetteWord {
  const found = BY_ID.get(id);
  if (!found) throw new Error(`muettes-lesson: unknown corpus id "${id}"`);
  return found;
}

/** IPA as the renderer shows it: already slash-wrapped in the corpus. */
const ipa = (id: string): string => w(id).ipa ?? '';
/** Respelling in brackets. The brackets are added HERE, once, so the stored
 *  data stays clean and the notation rule is applied in exactly one place. */
const re = (id: string): string => (w(id).respell ? `[${w(id).respell}]` : '');
const fr = (id: string): string => w(id).fr;
const en = (id: string): string => w(id).en;
const sil = (id: string): number[] => w(id).silent;

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
  silent: sil(id),
  ...(note ? { note } : {}),
});

/* ─── The reframe ─────────────────────────────────────────────────────────── */

/** The line the lesson hangs on. Referenced, never retyped, so all seven
 *  appearances are guaranteed identical — the density validator checks for it
 *  verbatim and a hand-typed copy is exactly how that check starts failing. */
export const REFRAME = "Silent unless there's a reason.";

/* ─── Mission 1 · Scene ───────────────────────────────────────────────────── */

const SCENE_BEATS: SceneBeat[] = [
  {
    kind: 'narration',
    size: 'md',
    text: 'You rehearsed this on the tram. Two croissants. Nothing complicated.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'tap',
    size: 'md',
    speaker: 'Marie',
    fr: 'Bonjour, vous désirez ?',
    en: 'Morning, what would you like?',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'narration',
    size: 'md',
    text: 'You want two. You can picture the word. Deux.',
    audio: { mode: 'tts', voice: 'coach' },
  },
  {
    kind: 'choice',
    size: 'lg',
    prompt: 'How do you say it?',
    options: [
      {
        fr: fr('fr.sons.muettes.007'),
        respell: re('fr.sons.muettes.007'),
        en: 'two sounds, ending on a vowel',
        outcome: 'works',
        audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
      },
      {
        fr: fr('fr.sons.muettes.007'),
        respell: '[DEUKS]',
        en: 'four sounds, ending on the x',
        outcome: 'breaks',
        audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
      },
    ],
    followUp: {
      works: 'That is the one. Now watch what the other version does.',
      breaks: 'That is the instinct almost every English reader has. Watch what it does.',
    },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'auto',
    size: 'md',
    fr: "Deuks croissants, s'il vous plaît.",
    en: '(as an English reader says it)',
    audio: { mode: 'recorded', recordingId: 'rec-scene-break' },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Marie',
    fr: 'Pardon ?',
    en: 'Sorry?',
    stage: 'She leans in. Not annoyed. Just genuinely lost.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'break',
    size: 'lg',
    heading: 'The x is not there',
    body: 'You added a sound French does not have in this word. Marie was not being difficult. She heard something that is not a word.',
    wrong: { fr: 'deuks', ipa: '/døks/', respell: '[DEUKS]', en: 'not a French word' },
    right: {
      fr: fr('fr.sons.muettes.007'),
      ipa: ipa('fr.sons.muettes.007'),
      respell: re('fr.sons.muettes.007'),
      en: en('fr.sons.muettes.007'),
    },
    coach: 'Two letters on the page. One sound in the mouth. The x is written and never said.',
    // Audio-first: the ear answers before the eye can.
    audio: { mode: 'recorded', recordingId: 'rec-scene-break', autoplay: true, audioFirst: true },
  },
  {
    kind: 'bubble',
    from: 'you',
    reveal: 'tap',
    size: 'md',
    fr: "Deux croissants, s'il vous plaît.",
    en: 'Two croissants, please.',
    ipa: '/dø kʁwa.sɑ̃ sil vu plɛ/',
    audio: { mode: 'tts', lang: 'fr-FR', speeds: [1.0, 0.65] },
  },
  {
    kind: 'bubble',
    from: 'them',
    reveal: 'auto',
    size: 'md',
    speaker: 'Marie',
    fr: 'Ah, deux. Voilà.',
    en: 'Ah, two. Here you go.',
    audio: { mode: 'tts', lang: 'fr-FR' },
  },
  {
    kind: 'resolve',
    size: 'md',
    text: 'One silent letter was the entire difference. It is not one letter, though. It is most of them, in almost every French word you will read this year.',
  },
];

/* ─── Mission 4 · The letter grid ─────────────────────────────────────────── */

// `name` and `sound` are required by the existing GridLetter shape (the
// alphabet grid needs them). For an ENDING, the name is how it is referred to
// and the sound is what it produces — which for a silent letter is nothing,
// and saying so is the teaching.
const GRID: GridLetter[] = [
  { ch: '-t', name: 'final t', sound: 'nothing', verdict: 'silent', rule: 'not a CaReFuL letter',
    ex: fr('fr.sons.muettes.001'), ipa: ipa('fr.sons.muettes.001'), respell: re('fr.sons.muettes.001'), en: en('fr.sons.muettes.001'),
    silent: sil('fr.sons.muettes.001'), exception: 'sounds in net, est (east), huit', preview: true },

  { ch: '-s', name: 'final s', sound: 'nothing', verdict: 'silent', rule: 'not a CaReFuL letter, and this covers every plural',
    ex: fr('fr.sons.muettes.004'), ipa: ipa('fr.sons.muettes.004'), respell: re('fr.sons.muettes.004'), en: en('fr.sons.muettes.004'),
    silent: sil('fr.sons.muettes.004'), exception: 'sounds in fils, sens, tous (pronoun)', preview: true },

  { ch: '-d', name: 'final d', sound: 'nothing', verdict: 'silent', rule: 'not a CaReFuL letter',
    ex: fr('fr.sons.muettes.002'), ipa: ipa('fr.sons.muettes.002'), respell: re('fr.sons.muettes.002'), en: en('fr.sons.muettes.002'),
    silent: sil('fr.sons.muettes.002'), preview: true },

  { ch: '-p', name: 'final p', sound: 'nothing', verdict: 'silent', rule: 'not a CaReFuL letter',
    ex: fr('fr.sons.muettes.003'), ipa: ipa('fr.sons.muettes.003'), respell: re('fr.sons.muettes.003'), en: en('fr.sons.muettes.003'),
    silent: sil('fr.sons.muettes.003'), preview: true },

  { ch: '-x', name: 'final x', sound: 'nothing', verdict: 'silent', rule: 'not a CaReFuL letter',
    ex: fr('fr.sons.muettes.007'), ipa: ipa('fr.sons.muettes.007'), respell: re('fr.sons.muettes.007'), en: en('fr.sons.muettes.007'),
    silent: sil('fr.sons.muettes.007'), memo: 'the one from the bakery', preview: true },

  { ch: '-c', name: 'final c', sound: '/k/', verdict: 'sounded', rule: 'CaReFuL',
    ex: fr('fr.sons.muettes.019'), ipa: ipa('fr.sons.muettes.019'), respell: re('fr.sons.muettes.019'), en: en('fr.sons.muettes.019'),
    silent: sil('fr.sons.muettes.019'), exception: 'silent in blanc, tabac, estomac, porc', preview: true },

  { ch: '-r', name: 'final r', sound: '/ʁ/, or nothing after -e', verdict: 'conditional', rule: 'CaReFuL, but silent in the -er ending',
    ex: fr('fr.sons.muettes.022'), ipa: ipa('fr.sons.muettes.022'), respell: re('fr.sons.muettes.022'), en: en('fr.sons.muettes.022'),
    silent: sil('fr.sons.muettes.022'),
    exception: 'silent in parler, manger, boulanger and every -er infinitive',
    memo: 'short word, sound it. Infinitive or job noun, drop it.', preview: true },

  { ch: '-e', name: 'final e', sound: 'nothing, but it wakes the letter before it', verdict: 'silent', rule: 'silent itself, wakes the consonant before it',
    ex: fr('fr.sons.muettes.047'), ipa: ipa('fr.sons.muettes.047'), respell: re('fr.sons.muettes.047'), en: en('fr.sons.muettes.047'),
    silent: sil('fr.sons.muettes.047'), memo: 'the alarm clock', preview: true },

  // ── sheet only ──
  { ch: '-z', name: 'final z', sound: 'nothing', verdict: 'silent', rule: 'not a CaReFuL letter',
    ex: fr('fr.sons.muettes.006'), ipa: ipa('fr.sons.muettes.006'), respell: re('fr.sons.muettes.006'), en: en('fr.sons.muettes.006'),
    silent: sil('fr.sons.muettes.006'), preview: false },

  { ch: '-f', name: 'final f', sound: '/f/', verdict: 'sounded', rule: 'CaReFuL',
    ex: fr('fr.sons.muettes.025'), ipa: ipa('fr.sons.muettes.025'), respell: re('fr.sons.muettes.025'), en: en('fr.sons.muettes.025'),
    silent: sil('fr.sons.muettes.025'), exception: 'silent in clef, cerf, nerf', preview: false },

  { ch: '-l', name: 'final l', sound: '/l/', verdict: 'sounded', rule: 'CaReFuL',
    ex: fr('fr.sons.muettes.028'), ipa: ipa('fr.sons.muettes.028'), respell: re('fr.sons.muettes.028'), en: en('fr.sons.muettes.028'),
    silent: sil('fr.sons.muettes.028'), exception: 'silent in gentil, outil, fusil, sourcil', preview: false },

  { ch: 'h-', name: 'initial h', sound: 'nothing', verdict: 'silent', rule: 'always, with no exceptions',
    ex: fr('fr.sons.muettes.040'), ipa: ipa('fr.sons.muettes.040'), respell: re('fr.sons.muettes.040'), en: en('fr.sons.muettes.040'),
    silent: sil('fr.sons.muettes.040'), memo: "muet allows l', aspiré blocks it: le héros", preview: false },

  { ch: '-ps', name: 'final ps', sound: 'nothing', verdict: 'silent', rule: 'the whole cluster goes',
    ex: fr('fr.sons.muettes.014'), ipa: ipa('fr.sons.muettes.014'), respell: re('fr.sons.muettes.014'), en: en('fr.sons.muettes.014'),
    silent: sil('fr.sons.muettes.014'), memo: 'five letters, two sounds', preview: false },

  { ch: '-gt', name: 'final gt', sound: 'nothing', verdict: 'silent', rule: 'the whole cluster goes',
    ex: fr('fr.sons.muettes.016'), ipa: ipa('fr.sons.muettes.016'), respell: re('fr.sons.muettes.016'), en: en('fr.sons.muettes.016'),
    silent: sil('fr.sons.muettes.016'), exception: 'the t returns in vingt-deux /vɛ̃t.dø/', preview: false },

  { ch: '-ent (verb)', name: 'verb ending -ent', sound: 'nothing', verdict: 'silent', rule: 'all four letters, on a conjugated verb only',
    ex: fr('fr.sons.muettes.055'), ipa: ipa('fr.sons.muettes.055'), respell: re('fr.sons.muettes.055'), en: en('fr.sons.muettes.055'),
    silent: sil('fr.sons.muettes.055'), exception: 'sounded /ɑ̃/ on nouns and adverbs: vent, content, comment', preview: false },

  { ch: '-ent (noun)', name: 'noun ending -ent', sound: '/ɑ̃/', verdict: 'sounded', rule: 'nasal /ɑ̃/ when it is not a verb ending',
    ex: 'comment', ipa: '/kɔ.mɑ̃/', respell: '[koh-MAHⁿ]', en: 'how',
    memo: 'ask: is this a conjugated verb? If no, you hear it.', preview: false },
];

/* ─── Mission 19 · Quiz ───────────────────────────────────────────────────── */

const QUIZ_ROUNDS: QuizRound[] = [
  {
    id: 'round1',
    label: 'The default',
    targets: ['err-default'],
    say: { text: 'Round one. The default, and the clusters that follow it.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'How is « trop » pronounced?', format: 'mcq',
        opts: ['/tʁo/', '/tʁop/', '/tʁɔf/'], correct: 0,
        why: 'Final P, silent. The word ends open, on the vowel.', ref: 's05-families' },

      { q: 'Which of these ends in a silent letter?', format: 'mcq',
        opts: ['sel', 'chef', 'chat', 'sac'], correct: 2,
        why: 'chat /ʃa/. The other three end in CaReFuL letters and all sound.', ref: 's05-families' },

      { q: 'How many sounds do you actually say in « temps »?', format: 'mcq',
        opts: ['five', 'four', 'three', 'two'], correct: 3,
        why: '/tɑ̃/. Five letters, two sounds: the M, P and S are all silent and the AN is one nasal vowel.', ref: 's04-grid' },

      { q: 'Tap the letter you do not say.', format: 'tapSilent',
        word: fr('fr.sons.muettes.003'), correct: 'p',
        why: 'Final P, silent. /bo.ku/.', ref: 's05-families' },

      { q: 'Which word did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-default-six', clip: 'nez' },
        opts: ['nez', 'net'], correct: 0,
        why: 'nez /ne/ ends open. net /nɛt/ is one of the exceptions where the T does sound.', ref: 's04-grid' },

      { q: 'Which word did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-default-six', clip: 'grand' },
        opts: ['grande', 'grand'], correct: 1,
        why: 'No D at the end, so it is the masculine grand /ɡʁɑ̃/.', ref: 's05-families' },

      { q: 'A learner says [pa-REESS] for Paris. Fix it.', format: 'errorSpot',
        accept: ['pa-REE', '/pa.ʁi/', 'pari', 'paree'],
        answer: 'Paris /pa.ʁi/ [pa-REE]',
        why: 'Final S, silent, even on a proper noun. The name of the city ends on the ee.', ref: 's05-families' },

      { q: 'Type how « vingt » sounds on its own.', format: 'typeIn',
        accept: ['/vɛ̃/', 'vɛ̃', 'vaⁿ', 'vehn', 'van', 'vin'],
        answer: '/vɛ̃/ [VEHⁿ]',
        why: 'The G and the T are both silent. One nasal vowel, nothing after it.', ref: 's04-grid' },
    ],
  },
  {
    id: 'round2',
    label: 'CaReFuL and the R',
    targets: ['err-careful'],
    say: { text: 'Round two. The four that stay awake, and the ending that puts one of them back to sleep.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'Which word keeps its final consonant?', format: 'mcq',
        opts: ['petit', 'grand', 'beaucoup', 'avec'], correct: 3,
        why: 'avec /a.vɛk/. C is a CaReFuL letter. The other three end in silent T, D and P.', ref: 's05-families' },

      { q: 'The R of « boulanger » is:', format: 'mcq',
        opts: ['sounded, it is CaReFuL', 'silent, the ending is /e/', 'sounded only in fast speech'], correct: 1,
        why: 'A job noun in -er. The whole ending is /e/ and the R is silent, exactly like an infinitive.', ref: 's06-trap' },

      { q: 'Odd one out. Which one has a SILENT final R?', format: 'mcq',
        opts: ['bonjour', 'hier', 'premier', 'mer'], correct: 2,
        why: 'premier /pʁə.mje/ is in the -ier family. hier looks like it belongs there and does not: /jɛʁ/, R sounded.', ref: 's15-listen' },

      { q: 'Tap the letter you do not say.', format: 'tapSilent',
        word: fr('fr.sons.muettes.036'), correct: 'r',
        why: 'The -er ending is one /e/. /paʁ.le/. Note the first R does sound.', ref: 's06-trap' },

      { q: 'Which word did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-careful-pairs', clip: 'sac' },
        opts: ['sac', 'sa'], correct: 0,
        why: 'A clear K at the end. sac /sak/, CaReFuL C.', ref: 's05-families' },

      { q: 'Which word did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-careful-pairs', clip: 'clef' },
        opts: ['clef', 'chef'], correct: 0,
        why: 'clef /kle/ ends open. Its F is silent, which makes it an exception to CaReFuL. chef /ʃɛf/ keeps its F.', ref: 's04-grid' },

      { q: 'A learner says [ee-VAY] for « hiver ». Fix it.', format: 'errorSpot',
        accept: ['ee-VEHR', '/i.vɛʁ/', 'ivehr', 'iver with r'],
        answer: 'hiver /i.vɛʁ/ [ee-VEHR]',
        why: 'They applied the -er rule to a short noun. hiver keeps its R. Only infinitives and job nouns drop it.', ref: 's06-trap' },

      { q: 'Say it: « Je veux parler français. »', format: 'speak',
        target: 'Je veux parler français.', ipa: '/ʒə vø paʁ.le fʁɑ̃.sɛ/', scoreSegment: 'paʁ.le',
        why: 'parler lands on /e/ with nothing after it, and français drops its S.', ref: 's12-speak' },
    ],
  },
  {
    id: 'round3',
    label: 'The ghost letter',
    targets: ['err-h'],
    say: { text: 'Round three. The letter that makes no sound and still changes the word in front of it.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'In which of these do you pronounce an H sound?', format: 'mcq',
        opts: ['homme', 'héros', 'hôtel', 'none of them'], correct: 3,
        why: 'French never pronounces H, in any word, in any position. Muet and aspiré differ in grammar, not in sound.', ref: 's05-families' },

      { q: 'Which noun keeps its full article, with no elision?', format: 'mcq',
        opts: ['heure', 'haricot', 'histoire', 'huile'], correct: 1,
        why: "haricot has an H aspiré: le haricot. The other three are muet and take l'.", ref: 's05-families' },

      { q: 'In « les hommes », the liaison:', format: 'mcq',
        opts: ['is blocked by the H', 'turns the H into a real sound', 'happens, /le.zɔm/'], correct: 2,
        why: 'H muet behaves as though it were not there, so the S of les links across as a /z/.', ref: 's05-families' },

      { q: 'Tap the letter you do not say.', format: 'tapSilent',
        word: fr('fr.sons.muettes.040'), correct: 'h',
        why: '/o.tɛl/. Straight onto the vowel, no puff of air. The L at the end does sound.', ref: 's05-families' },

      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-h-pairs', clip: 'les-heros' },
        opts: ['les hommes', 'les héros'], correct: 1,
        why: 'No /z/ between the words. The H aspiré of héros blocks the liaison, leaving a small gap.', ref: 's05-families' },

      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-h-pairs', clip: 'l-homme' },
        opts: ["l'homme", 'le héros'], correct: 0,
        why: 'One unbroken sound, /lɔm/. The article has elided, so this is an H muet word.', ref: 's05-families' },

      { q: 'A learner writes « le homme ». Fix it.', format: 'errorSpot',
        accept: ["l'homme", "l'homme /lɔm/", 'lhomme'],
        answer: "l'homme /lɔm/",
        why: 'homme has an H muet, so the article must elide. Blocking elision here is the mirror of wrongly eliding before héros.', ref: 's05-families' },

      { q: 'Type the article that goes in front of « héros ».', format: 'typeIn',
        accept: ['le', 'le '],
        answer: 'le héros',
        why: 'H aspiré. No elision, no liaison, and still no H sound. The article is the only clue you get.', ref: 's05-families' },
    ],
  },
  {
    id: 'round4',
    label: 'The alarm clock',
    targets: ['err-switch', 'err-exceptions'],
    say: { text: 'Last round. The letter that wakes others up, and the handful of words that ignore everything you have learned.', voice: 'coach', timing: 'onEnter' },
    questions: [
      { q: 'What does a silent final -e do to the consonant before it?', format: 'mcq',
        opts: ['nothing at all', 'silences it further', 'wakes it up'], correct: 2,
        why: 'grand /ɡʁɑ̃/ becomes grande /ɡʁɑ̃d/. The E stays silent and the D starts sounding.', ref: 's05-families' },

      { q: 'You hear a clear T at the end of an adjective. It is probably:', format: 'mcq',
        opts: ['feminine', 'masculine', 'plural'], correct: 0,
        why: 'A sounded final consonant usually means an -e woke it, and that -e is the feminine marker. Your ears can do grammar.', ref: 's05-families' },

      { q: 'Which pair sounds IDENTICAL?', format: 'mcq',
        opts: ['grand / grande', 'le chat / les chats', 'petit / petite', 'vert / verte'], correct: 1,
        why: 'The plural -s is silent, so the noun does not change. Only the article carries the number.', ref: 's04-grid' },

      { q: 'Tap the letters you do not say.', format: 'tapSilent',
        word: fr('fr.sons.muettes.055'), correct: 'ent',
        why: '/il paʁl/. All four letters of -ent go silent on a conjugated verb. Stop after the L.', ref: 's05-families' },

      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-e-switch', clip: 'francaise' },
        opts: ['français', 'française'], correct: 1,
        why: 'A /z/ at the end. The final -e woke the S, and a woken S between vowels comes out as /z/.', ref: 's10-dictation' },

      { q: 'Which one did you hear?', format: 'listenChoose',
        audio: { mode: 'recorded', recordingId: 'rec-fils-fil', clip: 'fils' },
        opts: ['fil', 'fils'], correct: 1,
        why: 'fils /fis/ ends in an S sound, which the default says should not happen. It is one of about six words you memorise.', ref: 's14-errors' },

      { q: 'A learner says [PAR-lahⁿ] for « ils parlent ». Fix it.', format: 'errorSpot',
        accept: ['eel PARL', '/il paʁl/', 'il parl', 'parl'],
        answer: 'ils parlent /il paʁl/ [eel PARL]',
        why: 'They borrowed the /ɑ̃/ from comment and vent, where -ent really is nasal. On a verb, all four letters are silent.', ref: 's14-errors' },

      { q: 'Say it: « Elle est grande. »', format: 'speak',
        target: 'Elle est grande.', ipa: '/ɛl ɛ ɡʁɑ̃d/', scoreSegment: 'ɡʁɑ̃d',
        why: 'Release the D and stop. No small uh after it: the -e is a switch, not a syllable.', ref: 's12-speak' },
    ],
  },
];

/* ─── Remediation drills ──────────────────────────────────────────────────── */

const DRILLS: LessonDrill[] = [
  { id: 'drill-default', title: 'Silent finals, rapid fire', size: 'xl',
    items: ['fr.sons.muettes.001', 'fr.sons.muettes.002', 'fr.sons.muettes.003', 'fr.sons.muettes.005', 'fr.sons.muettes.004', 'fr.sons.muettes.007'],
    format: 'tapSilent',
    // Reframe appearance 7 of 7.
    coach: `Six words. Tap the letter you would not say. ${REFRAME}` },

  { id: 'retest-default', title: 'One more time', format: 'mcq',
    q: 'How is « beaucoup » pronounced?', opts: ['/bo.kup/', '/bo.ku/'], correct: 1,
    why: 'Final P, silent.' },

  { id: 'drill-careful', title: 'Sound it or drop it', size: 'lg',
    pairs: [['sac', 'tabac'], ['hiver', 'parler'], ['chef', 'clef'], ['avril', 'gentil'], ['avec', 'blanc'], ['mer', 'manger']],
    format: 'listenChoose',
    coach: 'Six pairs. In each one, only the first word sounds its final consonant.' },

  { id: 'retest-careful', title: 'One more time', format: 'mcq',
    q: 'The R of « parler » is:', opts: ['sounded', 'silent'], correct: 1,
    why: 'The -er ending is one /e/.' },

  { id: 'drill-h', title: 'Muet or aspiré', size: 'lg',
    items: ['fr.sons.muettes.039', 'fr.sons.muettes.040', 'fr.sons.muettes.041', 'fr.sons.muettes.043', 'fr.sons.muettes.044', 'fr.sons.muettes.045'],
    format: 'sort', buckets: ["takes l'", 'keeps le or la'],
    coach: 'Six words. Sort them by whether the article shrinks. No H makes a sound in any of them.' },

  { id: 'retest-h', title: 'One more time', format: 'mcq',
    q: 'Which takes the full article?', opts: ['homme', 'héros'], correct: 1,
    why: 'H aspiré blocks elision: le héros.' },

  { id: 'drill-switch', title: 'Wake the consonant', size: 'xl',
    pairs: [['grand', 'grande'], ['petit', 'petite'], ['vert', 'verte'], ['français', 'française'], ['content', 'contente'], ['gris', 'grise']],
    format: 'speak',
    coach: 'Say each pair. First one ends open. Second one releases a consonant and stops. No uh at the end.' },

  { id: 'retest-switch', title: 'One more time', format: 'listenChoose',
    audio: { mode: 'recorded', recordingId: 'rec-e-switch', clip: 'petite' },
    q: 'Which one?', opts: ['petit', 'petite'], correct: 1,
    why: 'A clear T at the end means the -e woke it.' },

  { id: 'drill-exceptions', title: 'The six you memorise', size: 'lg',
    items: familyIds('exception'),
    format: 'flashcard',
    coach: 'These six break the rules. There is no trick. Bank them as facts and move on.' },

  { id: 'retest-exceptions', title: 'One more time', format: 'mcq',
    q: '« fils » (son) is pronounced:', opts: ['/fil/', '/fis/', '/fi/'], correct: 1,
    why: 'The S sounds. /fil/ is fil, thread.' },
];

/* ─── Error triggers ──────────────────────────────────────────────────────── */

const TRIGGERS: ErrorTrigger[] = [
  { id: 'err-default',
    description: 'Sounds a final consonant that should be silent: the T in petit, the P in beaucoup, the S in Paris, the X in deux.',
    detectOn: ['s05-families', 's19-quiz', 's15-listen'],
    drill: 'drill-default', retest: 'retest-default' },

  { id: 'err-careful',
    description: 'Drops a CaReFuL final that should sound (sac becomes /sa/), or over-applies CaReFuL to the -er ending (parler becomes /paʁ.lɛʁ/).',
    detectOn: ['s05-families', 's06-trap', 's19-quiz'],
    drill: 'drill-careful', retest: 'retest-careful' },

  { id: 'err-h',
    description: 'Breathes the H, or mixes up muet and aspiré: elides before héros, blocks elision before homme.',
    detectOn: ['s05-families', 's19-quiz'],
    drill: 'drill-h', retest: 'retest-h' },

  { id: 'err-switch',
    description: 'Pronounces a final -e as its own syllable (porte becomes /pɔʁ.tə/), or fails to sound the consonant it wakes (grande stays /ɡʁɑ̃/).',
    detectOn: ['s05-families', 's19-quiz'],
    drill: 'drill-switch', retest: 'retest-switch' },

  { id: 'err-exceptions',
    description: 'Applies a rule to one of the memorised exceptions: says /fil/ for fils, /tu/ for the pronoun tous, /nɛ/ for net.',
    detectOn: ['s19-quiz'],
    drill: 'drill-exceptions', retest: 'retest-exceptions' },
];

/* ─── Reference sheets ────────────────────────────────────────────────────── */

// Four sheets, layer 'deep'. They hold roughly 40 screens of material pulled
// out of the flow: without somewhere to put it, it creeps back in.
const SHEETS: ReferenceSheet[] = [
  {
    id: 'sheet.sons.06.grid',
    title: 'Every French ending, one table',
    layer: 'deep',
    contains: ['the full 16-row letter grid', 'the CaReFuL exception lists', 'the -er and -ier families', 'silent clusters'],
    sections: [
      { type: 'letterGrid', id: 'sheet-grid-full', title: 'Every ending, one verdict each', layer: 'deep', render: 'sheet', letters: GRID },
      { type: 'table', id: 'sheet-grid-careful', title: 'The CaReFuL exceptions', layer: 'deep', render: 'sheet',
        cols: ['Letter', 'Normally', 'But silent in'],
        rows: [
          ['-c', 'sounded: sac, avec, parc', 'blanc, tabac, estomac, porc'],
          ['-r', 'sounded: hiver, mer, cher', 'parler, manger, boulanger, premier'],
          ['-f', 'sounded: chef, neuf, actif', 'clef, cerf, nerf'],
          ['-l', 'sounded: avril, sel, mal', 'gentil, outil, fusil, sourcil'],
        ] },
      { type: 'table', id: 'sheet-grid-clusters', title: 'Silent clusters', layer: 'deep', render: 'sheet',
        cols: ['Ending', 'Example', 'Sounds'],
        rows: [
          ['-ps', 'temps', '/tɑ̃/'],
          ['-rps', 'corps', '/kɔʁ/'],
          ['-gt', 'vingt, doigt', '/vɛ̃/, /dwa/'],
          ['-ent (verb)', 'ils parlent', '/il paʁl/'],
          ['-ent (noun)', 'comment, vent', '/kɔ.mɑ̃/, /vɑ̃/'],
        ] },
    ],
  },
  {
    id: 'sheet.sons.06.h',
    title: 'H muet and H aspiré word lists',
    layer: 'deep',
    contains: ['common H muet words', 'common H aspiré words', 'the oddities: héroïne, onze, oui, yaourt, huit'],
    sections: [
      { type: 'teach', id: 'sheet-h-intro', title: 'The only difference that matters', layer: 'deep', render: 'sheet',
        body: "No H is ever pronounced in French. The two kinds differ in one thing only: whether the word in front of them elides. H muet takes l' and links; H aspiré keeps le or la and blocks the link." },
      { type: 'table', id: 'sheet-h-muet', title: 'H muet: takes l\'', layer: 'deep', render: 'sheet',
        cols: ['Word', 'With article', 'Sounds'],
        rows: [
          ['homme', "l'homme", '/lɔm/'],
          ['hôtel', "l'hôtel", '/lo.tɛl/'],
          ['heure', "l'heure", '/lœʁ/'],
          ['histoire', "l'histoire", '/lis.twaʁ/'],
          ['hiver', "l'hiver", '/li.vɛʁ/'],
          ['habitude', "l'habitude", '/la.bi.tyd/'],
          ['hôpital', "l'hôpital", '/lo.pi.tal/'],
          ['herbe', "l'herbe", '/lɛʁb/'],
        ] },
      { type: 'table', id: 'sheet-h-aspire', title: 'H aspiré: keeps le or la', layer: 'deep', render: 'sheet',
        cols: ['Word', 'With article', 'Sounds'],
        rows: [
          ['héros', 'le héros', '/lə e.ʁo/'],
          ['hibou', 'le hibou', '/lə i.bu/'],
          ['haricot', 'le haricot', '/lə a.ʁi.ko/'],
          ['honte', 'la honte', '/la ɔ̃t/'],
          ['hasard', 'le hasard', '/lə a.zaʁ/'],
          ['haut', 'le haut', '/lə o/'],
        ] },
      { type: 'teach', id: 'sheet-h-odd', title: 'The oddities', layer: 'deep', render: 'sheet',
        body: 'héros is aspiré but héroïne is muet, which is genuinely irregular. onze, oui, yaourt and huit behave like aspiré words without having an H at all: le onze, le yaourt, le huit.' },
    ],
  },
  {
    id: 'sheet.sons.06.why',
    title: 'Why French writes what it does not say',
    layer: 'deep',
    contains: ['the historical explanation', 'homophone sets', 'why silent letters still have jobs'],
    sections: [
      { type: 'teach', id: 'sheet-why-history', title: 'They used to be pronounced', layer: 'deep', render: 'sheet',
        body: 'Old French said most of these letters. Between roughly the 12th and 16th centuries the endings stopped being pronounced, and the spelling did not follow, partly because printers had already fixed it and partly because scholars deliberately kept the Latin shape visible. temps keeps its P and S from Latin tempus. doigt gained its G from digitus centuries after anyone said it.' },
      { type: 'teach', id: 'sheet-why-jobs', title: 'What they still do', layer: 'deep', render: 'sheet',
        body: 'A silent letter is not decoration. It separates homophones on the page, marks gender and number that the ear cannot hear, and wakes up in liaison before a vowel. Remove the S from les amis and you lose the plural entirely.' },
      { type: 'table', id: 'sheet-why-homophones', title: 'Homophone sets the spelling keeps apart', layer: 'deep', render: 'sheet',
        cols: ['Sounds', 'Written', 'Meanings'],
        rows: [
          ['/vɛʁ/', 'vert, verre, vers, ver', 'green, glass, towards, worm'],
          ['/sɛ̃/', 'saint, sein, sain, ceint', 'holy, breast, healthy, girded'],
          ['/mɛʁ/', 'mer, mère, maire', 'sea, mother, mayor'],
          ['/o/', 'eau, haut, au, oh', 'water, high, to the, oh'],
        ] },
    ],
  },
  {
    id: 'sheet.sons.06.notation',
    title: 'How to read the sounds in this course',
    layer: 'deep',
    contains: ['IPA in slashes', 'respelling in brackets', 'the nasal superscript convention', 'the full vowel key'],
    sections: [
      { type: 'teach', id: 'sheet-notation-intro', title: 'Two notations, two jobs', layer: 'deep', render: 'sheet',
        body: 'IPA sits in slashes and is exact: /pə.ti/. The respelling sits in brackets and is a reading aid for an English speaker, with the stressed syllable capitalised: [pə-TEE]. When they disagree, the IPA is right.' },
      { type: 'table', id: 'sheet-notation-nasal', title: 'The nasal convention', layer: 'deep', render: 'sheet',
        cols: ['Sound', 'Written', 'Never'],
        rows: [
          ['/ɑ̃/', '[AHⁿ] as in [GRAHⁿ]', '[GRAHN]'],
          ['/ɔ̃/', '[OHⁿ] as in [LOHⁿG]', '[LONG]'],
          ['/ɛ̃/', '[EHⁿ] as in [VEHⁿ]', '[VAN]'],
          ['/œ̃/', '[UHⁿ]', '[UHN]'],
        ] },
      { type: 'teach', id: 'sheet-notation-why', title: 'Why the superscript matters', layer: 'deep', render: 'sheet',
        body: 'A nasal vowel is one sound made through the nose. It is not a vowel plus an N. Writing [GRAHN] tells you to close your mouth on a consonant that French never says, which is the exact error this lesson exists to remove, so the superscript marks the nasality without ever spelling a consonant.' },
      { type: 'table', id: 'sheet-notation-vowels', title: 'The vowel key', layer: 'deep', render: 'sheet',
        cols: ['IPA', 'Respelled', 'As in'],
        rows: [
          ['/ø/, /œ/', 'EU', 'deux [DEU], heure [EUR]'],
          ['/y/', 'Ü', 'plus [PLÜS]'],
          ['/e/', 'AY', 'nez [NAY]'],
          ['/ɛ/', 'EH', 'mer [MEHR]'],
          ['/u/', 'OO', 'tout [TOO]'],
          ['/ʁ/', 'R', 'from the throat, never the tongue tip'],
        ] },
    ],
  },
];

/* ─── Sections ────────────────────────────────────────────────────────────── */

const SECTIONS: LessonSection[] = [
  // ── ACT I · WHY THIS MATTERS ──────────────────────────────────────────
  {
    type: 'scene',
    id: 's01-scene',
    title: 'Two croissants',
    frSub: 'Deux croissants',
    render: 'screens',
    layer: 'core',
    say: {
      text: 'You have been in Lyon for four days. This morning you are going to order breakfast in French.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    setting: {
      place: 'Boulangerie Vidal',
      city: 'Lyon',
      time: '8:40, a Tuesday',
      image: 'lessons/muettes/scene-boulangerie.jpg',
      ambience: 'room-tone-bakery',
    },
    beats: SCENE_BEATS,
    closing: {
      size: 'md',
      text: 'This lesson is about every letter French writes and does not say, and the short list that fights back.',
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
      text: 'Seven things. Every one of them is something you do, not something you know about.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    goals: [
      { t: 'Drop the default', s: 'Read petit, grand, beaucoup, Paris and trop aloud without adding a single sound French does not make.' },
      { t: 'Keep CaReFuL', s: 'Sound the C, R, F and L that stay awake at the end of a word: sac, hiver, chef, avril.' },
      { t: 'Handle -er', s: 'Say parler and boulanger with a silent R, while keeping the R alive in hiver and mer.' },
      { t: 'Ghost the H', s: "Start l'hôtel and l'homme straight on the vowel, and know why le héros keeps its full article." },
      { t: 'Hear gender', s: 'Tell grand from grande and petit from petite by ear alone, with no other clue in the sentence.' },
      { t: 'Silence the verb', s: 'Say ils parlent so it sounds exactly like je parle, because it does.' },
      { t: 'Read a new word cold', s: 'Meet a French word you have never seen, on a menu or a sign, and get its ending right on the first attempt.' },
    ],
  },

  {
    type: 'cardDeck',
    id: 's03-anchors',
    title: 'Seven things to hold on to',
    frSub: 'Les idées clés',
    render: 'deck',
    layer: 'core',
    // 'md' now means something: the deck reads section size and reserves more
    // chrome for a medium card, so the whole card fits on screen without the
    // page scrolling. These are orientation cards, not the XL word cards.
    size: 'md',
    hint: 'Swipe through. Nothing to answer yet.',
    // The anchors are where the lesson's vocabulary is introduced, so every
    // term it will use later is tappable from here on.
    terms: ['careful', 'hMuet', 'hAspire', 'eSwitch', 'liaison', 'ipa'],
    say: {
      text: 'Seven ideas. The rest of the lesson is these seven, slowed down.',
      voice: 'coach',
      timing: 'onFirstVisitOnly',
    },
    cards: [
      // Reframe appearance 1 of 7. This is the thesis card, so it says the rule
      // and stops. The "say it to yourself before every new word" instruction
      // that used to close it was filler competing with the five words that
      // matter, and the deck repeats the reframe six more times anyway.
      // On images in this deck. It used to illustrate cards 3, 4 and 5 — the
      // middle — so the deck opened and closed bare and lurched in weight as you
      // swiped, with the two cards that matter most (the thesis, the liaison
      // hook) the unillustrated ones. Only three thematic images exist for this
      // deck and reusing one on two cards costs each card its identity, so the
      // fix is placement, not count: the same three images now sit on the three
      // cards that carry the deck's three ideas — the rule, its exception, and
      // the mechanism. The four connective cards stay text.
      { head: REFRAME,
        body: 'That is the whole lesson in five words. A final consonant is silent until something specific overrides it.',
        imageRef: 'lessons/muettes/careful.jpg' },
      // The counts are now attached to real words. Stated bare they were an
      // unverifiable claim; with beaucoup and vraiment on the card a learner
      // can check them against the page in front of them.
      { head: 'French words are shorter out loud',
        body: 'Almost always. beaucoup is eight letters and two syllables. vraiment is eight letters and two. If your mouth is busier than the page, you have added something.' },
      // The CaReFuL card was 45 words doing four jobs at the density ceiling,
      // and it carries the main override to the rule above, so it is the one
      // idea in the deck that cannot afford to be skimmed. Split in two: the
      // mnemonic here, its relationship to the reframe on the next card. The
      // chip still carries the full explanation on all eleven missions.
      { head: 'CaReFuL: C, R, F, L',
        body: 'Four letters that usually survive at the end of a word: sac, hiver, chef, avril. Spell them out and you get the English word CaReFuL.' },
      { head: 'CaReFuL is the exception that counts',
        body: 'Every other final consonant stays silent. These four are the reason the rule says usually, so when a final consonant does sound, check this list first.' },
      // The h muet / h aspiré split used to ride in a trailing clause that
      // raised the question and abandoned it. It is now an explicit promise,
      // the same shape as the liaison promise that closes the deck.
      { head: 'H is a ghost',
        body: 'Never a sound, anywhere in French, in any position. It does still change the words around it, and that split has its own name later in the lesson.',
        imageRef: 'lessons/muettes/ghost-h.jpg' },
      { head: 'A final -E is an alarm clock',
        body: 'Silent itself, but it wakes the consonant standing in front of it. grand becomes grande, and now you can hear the D.',
        imageRef: 'lessons/muettes/alarm-clock.jpg' },
      // The payoff of card 1, so it now names card 1 rather than arriving as a
      // seventh unrelated fact five cards later.
      { head: 'Silent, not dead',
        body: 'Silent unless there is a reason, and the next word can be the reason. Those sleeping consonants wake before a vowel. That is liaison, and it is the next lesson.' },
    ],
  },

  // ── ACT II · THE FIVE RULES ───────────────────────────────────────────
  {
    type: 'letterGrid',
    id: 's04-grid',
    title: 'Every ending, one verdict each',
    frSub: 'Le tableau des finales',
    render: 'sheet',
    previewCount: 8,
    layer: 'core',
    size: 'lg',
    sheetId: 'sheet.sons.06.grid',
    terms: ['careful', 'erEnding', 'silentEnt', 'ipa'],
    say: {
      text: 'Eight of the important ones now. The full table lives in your reference sheet, one tap away, forever.',
      voice: 'coach',
      timing: 'onEnter',
    },
    letters: GRID,
  },

  {
    type: 'groupDrill',
    id: 's05-families',
    title: 'The four families',
    frSub: 'Les quatre familles',
    render: 'screens',
    layer: 'core',
    size: 'xl',
    terms: ['careful', 'hMuet', 'hAspire', 'eSwitch', 'silentEnt'],
    say: {
      text: 'Four families. Hear each word, then answer one question before you move on.',
      voice: 'coach',
      timing: 'onEnter',
    },
    groups: [
      {
        label: 'The default: silent',
        items: [
          item('fr.sons.muettes.001', 'the T is on the page and nowhere else'),
          item('fr.sons.muettes.002', 'the D goes, and the AN is one nasal sound'),
          item('fr.sons.muettes.003', 'eight letters, four sounds'),
          item('fr.sons.muettes.004', 'no S, ever, including in the city'),
          item('fr.sons.muettes.007', 'the one that cost you a croissant'),
          item('fr.sons.muettes.006', 'final Z behaves exactly like final S'),
        ],
        check: {
          q: 'Which of these ends in a sound?',
          opts: ['trop', 'chat', 'avec', 'froid'],
          correct: 2,
        },
      },
      {
        label: 'CaReFuL: the four that stay awake',
        items: [
          item('fr.sons.muettes.019', 'C sounded. Compare tabac /ta.ba/, where it is not.'),
          item('fr.sons.muettes.020', 'one of the most common words in the language, and it keeps its C'),
          item('fr.sons.muettes.022', 'R sounded. And the H at the front does nothing at all.'),
          item('fr.sons.muettes.025', 'F sounded, same as in English'),
          item('fr.sons.muettes.028', 'L sounded, clear at the end'),
          item('fr.sons.muettes.029', 'short word, L fully alive'),
        ],
        check: {
          q: 'You meet the word « parc » on a sign. The C is:',
          opts: ['silent, like the P in trop', 'sounded, it is a CaReFuL letter'],
          correct: 1,
        },
      },
      {
        label: 'The ghost letter',
        items: [
          item('fr.sons.muettes.039', "H muet. The article shrinks to l' and the word starts on the O."),
          item('fr.sons.muettes.040', 'no puff of air. Straight onto the vowel.'),
          item('fr.sons.muettes.041', 'H muet again, and the R at the end is fully sounded'),
          item('fr.sons.muettes.043', "H aspiré. Still silent, but the article stays whole: le, not l'."),
          item('fr.sons.muettes.044', 'H aspiré. A tiny gap between le and ibou.'),
          item('fr.sons.muettes.045', 'H aspiré, and the T at the end is silent as usual'),
        ],
        check: {
          q: "Which one keeps its full article, with no l'?",
          opts: ['homme', 'heure', 'héros', 'hôtel'],
          correct: 2,
        },
      },
      {
        label: 'The alarm clock',
        items: [
          { ...item('fr.sons.muettes.047', 'the E stays silent. The D wakes up.'), pair: true },
          { ...item('fr.sons.muettes.048', 'now you can hear which one it is'), pair: true },
          { ...item('fr.sons.muettes.051', 'the woken S comes back as a Z sound'), pair: true },
          item('fr.sons.muettes.050', 'not POR-tuh. The E adds no syllable, it only wakes the T.'),
          item('fr.sons.muettes.055', 'all four letters of -ent, gone. Stop after the L.'),
          item('fr.sons.muettes.056', 'silent H, silent -ent, and a preview of liaison in that Z'),
        ],
        check: {
          q: 'You hear a clear D at the end. The word is:',
          opts: ['grand', 'grande'],
          correct: 1,
        },
      },
    ],
  },

  // ── ACT III · THE HARD PART ───────────────────────────────────────────
  //
  // The source carries the trap's RULE in a `rule: {heading, body}` block on
  // the trapDrill section. The app's trapDrill has no such field, so the rule
  // gets its own screen immediately before the drill rather than being
  // squeezed into a card tip: it is the statement the whole mission turns on,
  // and it carries the reframe (appearance 2 of 7).
  {
    type: 'teach',
    id: 's06-trap-rule',
    title: 'One syllable, sound it. An -er ending, drop it.',
    frSub: 'La règle',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    say: {
      text: 'One rule, and it decides every verb you will ever read.',
      voice: 'coach',
      timing: 'onEnter',
    },
    body: `hiver, mer, cher: short words, R alive. parler, manger, boulanger: the -er ending is just /e/, and the R is gone. ${REFRAME} Being a short word is the reason.`,
  },

  {
    type: 'trapDrill',
    id: 's06-trap',
    title: 'The R that will not sit still',
    frSub: 'Le piège du -ER',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    // The trap is where CaReFuL and the -er ending collide, so both are one
    // tap away on every card of it.
    terms: ['careful', 'erEnding'],
    audio: { mode: 'recorded', recordingId: 'rec-careful-pairs', speeds: [1.0, 0.65], audioFirst: true },
    say: {
      text: 'This is the hardest thing in the lesson, and you will meet it in every verb you ever learn. Slow down here.',
      voice: 'coach',
      timing: 'onEnter',
    },
    cards: [
      { promptLabel: 'Sound the R', promptSound: '/ɛʁ/', fr: fr('fr.sons.muettes.022'), ipa: ipa('fr.sons.muettes.022'),
        tip: 'Two syllables, but it is a noun that has always ended in a sounded R. Say the R.' },
      { promptLabel: 'Drop the R', promptSound: '/e/', fr: fr('fr.sons.muettes.036'), ipa: ipa('fr.sons.muettes.036'),
        tip: 'An infinitive. The -er ending is one clean /e/. Nothing after it.' },
      { promptLabel: 'Sound the R', promptSound: '/ɛʁ/', fr: 'la mer', ipa: ipa('fr.sons.muettes.023'),
        tip: 'One syllable. Nothing to confuse it with.' },
      { promptLabel: 'Drop the R', promptSound: '/e/', fr: 'le boulanger', ipa: ipa('fr.sons.muettes.038'),
        tip: 'A job noun in -er. Same ending as the infinitives, same silence.' },
      { promptLabel: 'Sound the R', promptSound: '/ɛʁ/', fr: fr('fr.sons.muettes.024'), ipa: ipa('fr.sons.muettes.024'),
        tip: 'Short. R alive. Compare chercher /ʃɛʁ.ʃe/, where the second R falls silent.' },
      { promptLabel: 'Drop the R', promptSound: '/e/', fr: fr('fr.sons.muettes.037'), ipa: ipa('fr.sons.muettes.037'),
        tip: 'Infinitive. And the AN is nasal, so nothing after the vowel either.' },
    ],
    // The existing trapDrill shape takes a rapid-fire drill round after the
    // cards. The source lesson's single `test` is that round, with the rule
    // it teaches carried on the card above it.
    //
    // Four questions, not one. This is the gate on the act's hardest section
    // and `say` calls it the hardest thing in the lesson, so a single
    // four-option question is a 1-in-4 guess standing in for a reflex check.
    // Each one attacks the rule from a different side: spot the silent R, spot
    // the sounded R, separate two spellings that look identical, and catch the
    // job noun that behaves like an infinitive.
    drill: [
      { promptSay: 'Odd one out. Which word has a silent final R?', opts: ['bonjour', 'premier', 'hiver', 'bonsoir'], correct: 1 },
      { promptSay: 'Odd one out. Which word SOUNDS its final R?', opts: ['parler', 'manger', 'cher', 'boulanger'], correct: 2 },
      { promptSay: 'Same ending on paper. Which one is the infinitive?', opts: ['hiver', 'aimer'], correct: 1 },
      { promptSay: 'Which one drops the R, even though it is a noun?', opts: ['la mer', 'le boulanger', 'hiver'], correct: 1 },
    ],
    // 14.1 / 14.2 / 14.3. One section, three steps, because these are three
    // moves of ONE argument (meet the trap, hear the trap, prove you beat it)
    // rather than three missions. Splitting them into peer sections would have
    // renumbered the spine and broken this act's sectionIds; stepping keeps the
    // id, so `ref: 's06-trap'` on the quiz questions still lands here.
    //
    // Stacked, this section was ~900px of column: six flip cards, then the
    // check permanently below the fold, and the declared audio never played at
    // all. Each step now gets the screen.
    steps: [
      { kind: 'cards', label: 'Les pièges', title: 'Six words, one moving R' },
      { kind: 'audio', label: 'Écoutez', title: 'Hear the R appear, then vanish' },
      // Gated: the reflex is the point of the mission, and a check the learner
      // can swipe past is not a check. Held until all four are answered.
      { kind: 'drill', label: 'Réflexe', title: 'Now decide without thinking', gate: true },
    ],
  },

  {
    type: 'inhibitionDrill',
    id: 's07-inhibition',
    title: 'Training the stop',
    frSub: "Apprendre à s'arrêter",
    render: 'screens',
    layer: 'core',
    size: 'md',
    // 7/20: swipeable. Three physical routines of four or five steps each is
    // fourteen instructions; stacked on one screen they read as a wall and
    // nobody performs them. One routine per card, swiped, is the same content
    // at the pace it has to be done in.
    swipe: true,
    imageRef: 'lessons/muettes/the-stop.jpg',
    say: {
      text: 'There is no tongue position for a sound you are not making. What you are training here is a stop, and it is physical.',
      voice: 'coach',
      timing: 'onEnter',
    },
    intro:
      'Your eyes see the last letter and your mouth starts loading it before you have decided anything. That happens in about a fifth of a second, which is faster than any rule you can consciously apply. So the rule has to become a reflex, and reflexes are built by doing, not reading.',
    targets: [
      {
        label: 'The finger stop',
        sub: 'For any word ending in a default-silent letter',
        steps: [
          'Read the word silently, all the way to the end.',
          'Put a finger over the final letter so you cannot see it.',
          'Say only what is left on the page.',
          'Take the finger away and say it again exactly the same way. Do not let the letter back in.',
          'Repeat until step four sounds like step three with no effort.',
        ],
        practiceOn: ['fr.sons.muettes.001', 'fr.sons.muettes.003', 'fr.sons.muettes.005', 'fr.sons.muettes.004'],
        mic: true,
        audio: { mode: 'recorded', recordingId: 'rec-default-six' },
      },
      {
        label: 'The vowel landing',
        sub: 'For words that must end open',
        steps: [
          'Say the word and hold the last sound for two full seconds.',
          'If you can hold it, it is a vowel and you are correct.',
          'If it stops dead, you closed on a consonant that should not be there.',
          'Try again and land on the vowel like a step you are settling onto, not a door you are shutting.',
        ],
        practiceOn: ['fr.sons.muettes.007', 'fr.sons.muettes.006', 'fr.sons.muettes.008', 'fr.sons.muettes.012'],
        mic: true,
        audio: { mode: 'recorded', recordingId: 'rec-default-six' },
      },
      {
        label: 'The switch check',
        sub: 'For the masculine and feminine pair',
        steps: [
          'Say the masculine form. It should end open, on a vowel.',
          'Now say the feminine. Release the woken consonant cleanly and stop.',
          'Do not add a small uh after it. The -e is silent, it is only the switch.',
          'Alternate the pair six times without pausing between them.',
        ],
        practiceOn: ['fr.sons.muettes.047', 'fr.sons.muettes.048', 'fr.sons.muettes.049', 'fr.sons.muettes.051'],
        mic: true,
        audio: { mode: 'recorded', recordingId: 'rec-e-switch' },
      },
    ],
    closing: {
      // Reframe appearance 3 of 7.
      text: `Do the finger stop on the first three French words you see tomorrow, on any sign or label. ${REFRAME} Thirty seconds a day beats an hour once.`,
    },
  },

  {
    type: 'flashcards',
    id: 's08-flashcards',
    title: 'The words worth banking',
    frSub: 'Le vocabulaire',
    render: 'deck',
    layer: 'core',
    size: 'xl',
    // 8/20: deeper. Twenty cards covered the default and CaReFuL families
    // well and left the exceptions (the six words the rules cannot save you
    // on) with a single representative. Those are precisely the ones that
    // need banking as facts, so the deck now carries all of them, plus the
    // CaReFuL exceptions that make the rule honest.
    terms: ['careful', 'erEnding', 'hMuet', 'hAspire'],
    cards: [
      { front: fr('fr.sons.muettes.001'), back: back('fr.sons.muettes.001'), say: fr('fr.sons.muettes.001') },
      { front: fr('fr.sons.muettes.002'), back: back('fr.sons.muettes.002'), say: fr('fr.sons.muettes.002') },
      { front: fr('fr.sons.muettes.003'), back: back('fr.sons.muettes.003'), say: fr('fr.sons.muettes.003') },
      { front: fr('fr.sons.muettes.005'), back: back('fr.sons.muettes.005'), say: fr('fr.sons.muettes.005') },
      { front: fr('fr.sons.muettes.007'), back: back('fr.sons.muettes.007'), say: fr('fr.sons.muettes.007') },
      { front: fr('fr.sons.muettes.006'), back: back('fr.sons.muettes.006'), say: fr('fr.sons.muettes.006') },
      { front: fr('fr.sons.muettes.008'), back: back('fr.sons.muettes.008'), say: fr('fr.sons.muettes.008') },
      { front: fr('fr.sons.muettes.014'), back: back('fr.sons.muettes.014'), say: fr('fr.sons.muettes.014') },
      { front: fr('fr.sons.muettes.013'), back: back('fr.sons.muettes.013'), say: fr('fr.sons.muettes.013') },
      { front: fr('fr.sons.muettes.019'), back: back('fr.sons.muettes.019'), say: fr('fr.sons.muettes.019') },
      { front: fr('fr.sons.muettes.020'), back: back('fr.sons.muettes.020'), say: fr('fr.sons.muettes.020') },
      { front: fr('fr.sons.muettes.022'), back: back('fr.sons.muettes.022'), say: fr('fr.sons.muettes.022') },
      { front: fr('fr.sons.muettes.025'), back: back('fr.sons.muettes.025'), say: fr('fr.sons.muettes.025') },
      { front: fr('fr.sons.muettes.028'), back: back('fr.sons.muettes.028'), say: fr('fr.sons.muettes.028') },
      { front: fr('fr.sons.muettes.036'), back: back('fr.sons.muettes.036'), say: fr('fr.sons.muettes.036') },
      { front: fr('fr.sons.muettes.039'), back: back('fr.sons.muettes.039'), say: fr('fr.sons.muettes.039') },
      { front: fr('fr.sons.muettes.043'), back: back('fr.sons.muettes.043'), say: fr('fr.sons.muettes.043') },
      { front: fr('fr.sons.muettes.047'), back: back('fr.sons.muettes.047'), say: fr('fr.sons.muettes.047') },
      { front: fr('fr.sons.muettes.055'), back: back('fr.sons.muettes.055'), say: fr('fr.sons.muettes.055') },
      // ── The CaReFuL exceptions: they look like they should sound, and do not.
      // Without these the rule reads as absolute, and a learner meeting tabac
      // or gentil in the wild has been told the wrong thing.
      { front: fr('fr.sons.muettes.031'), back: back('fr.sons.muettes.031'), say: fr('fr.sons.muettes.031') },
      { front: fr('fr.sons.muettes.032'), back: back('fr.sons.muettes.032'), say: fr('fr.sons.muettes.032') },
      { front: fr('fr.sons.muettes.033'), back: back('fr.sons.muettes.033'), say: fr('fr.sons.muettes.033') },
      { front: fr('fr.sons.muettes.035'), back: back('fr.sons.muettes.035'), say: fr('fr.sons.muettes.035') },
      // ── The six memorised exceptions. The rules will not save you on these,
      // so they are banked as facts rather than derived.
      { front: fr('fr.sons.muettes.057'), back: back('fr.sons.muettes.057'), say: fr('fr.sons.muettes.057') },
      { front: fr('fr.sons.muettes.058'), back: back('fr.sons.muettes.058'), say: fr('fr.sons.muettes.058') },
      { front: fr('fr.sons.muettes.059'), back: back('fr.sons.muettes.059'), say: fr('fr.sons.muettes.059') },
      { front: fr('fr.sons.muettes.061'), back: back('fr.sons.muettes.061'), say: fr('fr.sons.muettes.061') },
      { front: fr('fr.sons.muettes.062'), back: back('fr.sons.muettes.062'), say: fr('fr.sons.muettes.062') },
      { front: fr('fr.sons.muettes.063'), back: back('fr.sons.muettes.063'), say: fr('fr.sons.muettes.063') },
    ],
  },

  // ── ACT IV · MAKE IT YOURS ────────────────────────────────────────────
  {
    type: 'examples',
    id: 's09-examples',
    title: 'Sixteen sentences you can steal',
    frSub: 'En contexte',
    render: 'screens',
    layer: 'core',
    size: 'xl',
    examples: [
      { fr: "C'est petit.", en: "It's small.", note: 'silent -t' },
      { fr: "C'est trop grand.", en: "It's too big.", note: 'silent -p and silent -d' },
      { fr: 'Merci beaucoup.', en: 'Thanks a lot.', note: 'silent -p' },
      { fr: "J'habite à Paris.", en: 'I live in Paris.', note: 'silent H and silent -s' },
      { fr: "Deux croissants, s'il vous plaît.", en: 'Two croissants, please.', note: 'silent -x and silent -ts' },
      { fr: 'Quel est le prix ?', en: "What's the price?", note: 'silent -x, and the L of quel sounds' },
      { fr: 'Le chat dort.', en: 'The cat is sleeping.', note: 'silent -t, and the R of dort sounds' },
      { fr: "J'ai un sac avec moi.", en: 'I have a bag with me.', note: 'two CaReFuL C words in a row' },
      { fr: 'En hiver, il fait froid.', en: "In winter, it's cold.", note: 'CaReFuL R sounded, silent -t and -d' },
      { fr: 'Le chef parle français.', en: 'The chef speaks French.', note: 'CaReFuL F sounded, silent verb -e, silent -s' },
      { fr: 'Je parle un petit peu français.', en: 'I speak a little French.', note: 'the whole default stack in one sentence' },
      { fr: "C'est l'heure.", en: "It's time.", note: 'H muet with elision, and the R sounds' },
      { fr: 'Le héros du film.', en: 'The hero of the film.', note: 'H aspiré blocking elision, silent -s' },
      { fr: 'Elle est grande.', en: 'She is tall.', note: 'the -e switch waking the D' },
      { fr: 'Ils parlent trop.', en: 'They talk too much.', note: 'silent -ent and silent -p' },
      { fr: 'Mon fils a vingt ans.', en: 'My son is twenty.', note: 'the memorised fils, and a first taste of liaison' },
    ],
  },

  {
    type: 'dictation',
    id: 's10-dictation',
    title: 'Write what you cannot hear',
    frSub: 'Dictée',
    render: 'screens',
    layer: 'core',
    size: 'md',
    // 10/20: the dictation renderer already shows one word at a time with its
    // own play budget, so no swipe flag: it would claim a gesture the section
    // does not have. What it gains is the audio spec below (a real recording
    // when the studio delivers, three plays, both speeds) and the hint moving
    // into a modal, because reading "eight letters, four sounds" while the
    // letter tiles are visible answers the question the dictation was asking.
    questionsInModal: true,
    audio: { mode: 'recorded', recordingId: 'rec-dictation-10', maxPlays: 3, speeds: [1.0, 0.65] },
    terms: ['ipa'],
    say: {
      text: 'Now the other direction. You will hear a word and write it with every silent letter in place. Leaving one out is a spelling error, even though you never heard it.',
      voice: 'coach',
      timing: 'onEnter',
    },
    // The renderer builds each tile bank from the item's own `fr`, which is
    // why these are ids and not restated spellings.
    itemIds: [
      'fr.sons.muettes.003',
      'fr.sons.muettes.014',
      'fr.sons.muettes.007',
      'fr.sons.muettes.004',
      'fr.sons.muettes.047',
      'fr.sons.muettes.055',
      'fr.sons.muettes.040',
      'fr.sons.muettes.036',
      'fr.sons.muettes.016',
      'fr.sons.muettes.051',
    ],
  },

  {
    type: 'listening',
    id: 's11-listening',
    title: 'A message from Camille',
    frSub: 'Compréhension orale',
    render: 'screens',
    layer: 'core',
    size: 'md',
    // 11/20: questions open one at a time in a modal. Listed under the
    // passage, a learner reads all six first and then listens FOR the answers,
    // which is a comprehension exercise about reading. One at a time, after
    // the audio, tests what was actually heard.
    questionsInModal: true,
    audio: { mode: 'recorded', recordingId: 'rec-listening-passage', speeds: [1.0, 0.65] },
    say: {
      text: 'A voice message. Play it as many times as you like, and use the slow button if the endings run together.',
      voice: 'coach',
      timing: 'onEnter',
    },
    lines: [
      { fr: "Salut ! C'est Camille.", en: "Hi, it's Camille." },
      { fr: "J'habite à Paris depuis deux ans.", en: "I've lived in Paris for two years." },
      { fr: "Mon petit appartement est près d'un grand parc.", en: 'My small flat is near a big park.' },
      { fr: 'En hiver, je bois beaucoup de thé.', en: 'In winter, I drink a lot of tea.' },
      { fr: 'Mes amis parlent très vite, mais je comprends.', en: 'My friends speak very fast, but I understand.' },
    ],
    questions: [
      { q: 'Where does Camille live?', opts: ['Lyon', 'Paris', 'Marseille'], correct: 1 },
      { q: 'How long has she lived there?', opts: ['two years', 'ten years', 'two months'], correct: 0 },
      { q: 'Her flat is:', opts: ['big', 'small', 'new'], correct: 1 },
      { q: 'What is next to her flat?', opts: ['a school', 'a station', 'a park'], correct: 2 },
      { q: 'In winter she drinks a lot of:', opts: ['coffee', 'tea', 'water'], correct: 1 },
      { q: 'The verb « parlent » in the last line sounds like:', opts: ['/paʁ.lɑ̃/', '/paʁl/', '/paʁ.le/'], correct: 1 },
    ],
  },

  // ── ACT V · USE IT ────────────────────────────────────────────────────
  {
    type: 'practice',
    id: 's12-speak',
    title: 'Say it out loud',
    frSub: 'À vous',
    skill: 'speak',
    render: 'screens',
    layer: 'core',
    size: 'xl',
    // 12/20: already one word per screen and good. The addition is the modal
    // on the prompt, so the hint and the IPA are available on demand rather
    // than sitting under the word the learner is meant to be producing from
    // memory.
    questionsInModal: true,
    audio: { mode: 'mic', modelPlayback: true, scoreOn: 'targetSegment', speeds: [1.0, 0.65] },
    terms: ['careful', 'erEnding', 'ipa'],
    say: {
      text: 'Ten of them. Tap, speak, and you will hear a model right after. Say it again with the model if the first try felt off.',
      voice: 'coach',
      timing: 'onEnter',
    },
    itemIds: [
      'fr.sons.muettes.001',
      'fr.sons.muettes.003',
      'fr.sons.muettes.007',
      'fr.sons.muettes.019',
      'fr.sons.muettes.022',
      'fr.sons.muettes.036',
      'fr.sons.muettes.039',
      'fr.sons.muettes.047',
      'fr.sons.muettes.055',
      'fr.sons.muettes.057',
    ],
  },

  {
    type: 'scenario',
    id: 's13-scenario',
    title: 'Back at the counter',
    frSub: 'Au marché',
    render: 'screens',
    layer: 'core',
    size: 'md',
    say: {
      text: 'A different shop, same skill. Five turns. Pick your line each time.',
      voice: 'coach',
      timing: 'onEnter',
    },
    imageRef: 'lessons/muettes/scene-marche.jpg',
    setting: 'Marché Saint-Antoine, Lyon, Saturday just after ten',
    turns: [
      { ai: 'Bonjour ! Je peux vous aider ?', en: 'Morning, can I help you?', user: 'Oui, je cherche un sac.' },
      { ai: 'Un grand ou un petit ?', en: 'A big one or a small one?', user: 'Un petit, pas trop grand.' },
      { ai: "C'est pour l'hiver ?", en: 'Is it for winter?', user: "Oui, pour l'hiver." },
      { ai: 'Celui-ci coûte trente euros.', en: 'This one is thirty euros.', user: "C'est un bon prix." },
      { ai: 'Vous le prenez ?', en: 'Will you take it?', user: 'Oui, avec plaisir. Merci beaucoup.' },
    ],
  },

  {
    type: 'commonErrors',
    id: 's14-errors',
    title: 'Eight things everyone gets wrong',
    frSub: 'Les erreurs classiques',
    render: 'screens',
    layer: 'core',
    size: 'lg',
    swipe: true,
    terms: ['careful', 'erEnding', 'hMuet', 'eSwitch', 'silentEnt'],
    audio: { mode: 'recorded', wrongThenRight: true, speeds: [1.0, 0.65] },
    say: {
      text: 'Every French teacher hears these eight, every week, from every English speaker. None of them are careless. Each one is a good instinct pointed at the wrong language.',
      voice: 'coach',
      timing: 'onEnter',
    },
    errors: [
      { wrong: 'petit said as [pə-TEET]', right: 'petit /pə.ti/ [pə-TEE]',
        why: 'English says nearly every letter it writes. Cat ends in a real T. Your reading reflex was built on a language where the last letter is a promise, and French breaks that promise on most words.' },
      { wrong: 'beaucoup said as [boh-KOOP]', right: 'beaucoup /bo.ku/ [boh-KOO]',
        why: 'A final P is unusual enough in English that when you see one you make sure to pronounce it. That extra care is exactly what gives you away here.' },
      { wrong: 'parler said as [par-LEHR]', right: 'parler /paʁ.le/ [par-LAY]',
        why: 'You learned CaReFuL and applied it faithfully. The problem is that -er is a grammatical ending, not a word ending, and endings follow their own rule. Being consistent is what led you astray.' },
      { wrong: 'sac said as [SA]', right: 'sac /sak/ [SAK]',
        why: 'This is over-correction, and it usually shows up in week three. You learned that French drops final consonants and started dropping all of them. The default is strong, not absolute.' },
      { wrong: 'hôtel said with a breath, [HO-tel]', right: "l'hôtel /lo.tɛl/ [lo-TEL]",
        why: 'English H is a real sound and it is at the front of the word, where your mouth commits before you have thought. You are not adding a letter, you are failing to remove a habit.' },
      { wrong: 'porte said as [POR-tuh]', right: 'porte /pɔʁt/ [PORT]',
        why: 'You have heard French sung, or heard southern French, where the final -e does get a small vowel. It is real, it is just not standard spoken French, and it adds a syllable that changes the rhythm of the whole sentence.' },
      { wrong: 'ils parlent said as [eel par-LAHⁿ]', right: 'ils parlent /il paʁl/ [eel PARL]',
        why: 'You met -ent in comment and vent, where it genuinely is a nasal /ɑ̃/. Then you met it on a verb and applied what you already knew. Same four letters, two completely different jobs.' },
      { wrong: 'fils said as [FEEL]', right: 'fils /fis/ [FEES]',
        why: 'You applied the silent-S default correctly and got a real French word, just the wrong one. fil is thread. This is one of about six words you simply have to bank, and the rules will not save you.' },
    ],
  },

  {
    type: 'practice',
    id: 's15-listen',
    title: 'R or no R',
    frSub: 'Écoutez bien',
    skill: 'listen',
    render: 'screens',
    layer: 'core',
    size: 'xl',
    // 15/20: restyled spacious. lg -> xl, and audio-first. The practice
    // renderer already walks one prompt card at a time, so no swipe flag is
    // claimed: what this mission needed was room and the right ORDER, since a
    // discrimination drill has to be heard before it is read and a list puts
    // the next word's spelling in view while the current one is still playing.
    questionsInModal: true,
    audio: { mode: 'recorded', recordingId: 'rec-careful-pairs', speeds: [1.0, 0.65], audioFirst: true },
    terms: ['careful', 'erEnding'],
    say: {
      text: 'Back to the hardest thing in the lesson. You will hear one word. Tell me whether the R made it out.',
      voice: 'coach',
      timing: 'onEnter',
    },
    itemIds: [
      'fr.sons.muettes.022',
      'fr.sons.muettes.036',
      'fr.sons.muettes.037',
      'fr.sons.muettes.023',
      'fr.sons.muettes.038',
      'fr.sons.muettes.024',
    ],
  },

  // ── ACT VI · PROVE IT ─────────────────────────────────────────────────
  {
    type: 'reading',
    id: 's16-reading',
    title: 'Seventy words, thirty-one silent letters',
    frSub: 'Lecture',
    render: 'screens',
    layer: 'core',
    size: 'md',
    // Per-sentence replay: the passage plays as a whole, and each of the six
    // sentences is independently tappable, which is what makes reading ALONG
    // with it possible rather than only listening to it.
    questionsInModal: true,
    audio: { mode: 'recorded', recordingId: 'rec-reading-passage', perSentenceReplay: true, speeds: [1.0, 0.65] },
    terms: ['careful', 'erEnding', 'silentEnt'],
    say: {
      text: 'Read it silently first. Then tap any sentence to hear it, and read it aloud with the recording.',
      voice: 'coach',
      timing: 'onEnter',
    },
    text: [
      'Thomas habite à Paris. Il est petit et très gentil.',
      'En hiver, il porte un grand manteau et un sac noir.',
      'Le matin, il parle avec le boulanger du quartier.',
      'Ils parlent beaucoup, mais Thomas ne comprend pas tout.',
      "Le chef du café lui offre un thé. C'est trop chaud.",
      'Thomas attend deux minutes. Puis il dit : « Merci beaucoup. »',
    ].join(' '),
    questions: [
      { q: 'Where does Thomas live, and how many letters of that place name do you say?',
        a: 'Paris. Four of the five: the S is silent, so it is /pa.ʁi/.' },
      { q: 'Name two CaReFuL words in the passage and say why they keep their final consonant.',
        a: 'sac /sak/ and chef /ʃɛf/. C and F are both CaReFuL letters, so they sound at the end of a word.' },
      { q: 'The passage has both « il parle » and « ils parlent ». What is the difference out loud?',
        a: 'None at all. Both are /paʁl/. The -ent is completely silent on a verb, so only the pronoun tells you how many people are speaking.' },
      { q: 'Why does « boulanger » have a silent R while « hiver » does not?',
        a: 'boulanger is a job noun ending in -er, which is pronounced /e/ with the R silent. hiver is a short standalone noun and keeps its R alive.' },
      { q: 'Find the one word in the passage whose final consonant you would sound even though it is not CaReFuL.',
        a: 'None of them. Every non-CaReFuL final in this passage is silent, which is the point: the default holds across a whole paragraph of real French.' },
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
    // 17/20: restyled spacious. Twelve question-and-answer pairs were the
    // densest screen in the lesson. The reviewDeck renderer already shows one
    // card at a time with a Leitner rating, which is the right shape; what it
    // lacked was height, so the card is now 380px and the type is display
    // size. No `swipe` flag here: the card advances on a rating, not a swipe,
    // and adding a second gesture would fight the one that records the answer.
    terms: ['careful', 'erEnding', 'hMuet', 'hAspire', 'eSwitch', 'silentEnt', 'liaison'],
    say: {
      text: 'Twelve cards. Answer each one out loud before you swipe.',
      voice: 'coach',
      timing: 'onEnter',
    },
    cards: [
      // Reframe appearance 5 of 7.
      { front: 'Your default for any final consonant', back: REFRAME },
      { front: 'The four letters that give you a reason', back: 'C, R, F, L. CaReFuL.' },
      { front: 'The one ending that overrules CaReFuL', back: '-er and -ier. The R goes silent: parler, premier.' },
      { front: 'How many sounds does the letter H make in French', back: 'None. Ever. In any position.' },
      { front: 'What H muet and H aspiré actually differ in', back: "Not sound. Only whether the article elides: l'homme against le héros." },
      { front: 'What a silent final -e does', back: 'Wakes the consonant in front of it. grand becomes grande.' },
      { front: 'Why that matters beyond pronunciation', back: 'It makes gender audible. A hard ending on an adjective usually means feminine.' },
      { front: 'je parle, tu parles, ils parlent', back: 'All three are /paʁl/. Identical.' },
      { front: 'When -ent is NOT silent', back: 'When it is not a verb ending: vent, content, comment are all /ɑ̃/.' },
      { front: 'What silent letters are for, since nobody says them', back: 'Separating homophones on the page, marking gender and number, and waking up in liaison.' },
      { front: 'The routine for a word you have never seen', back: 'Last letter. CaReFuL? Sound it. Anything else? Silence it. Then check for an H at the front and an -e at the back.' },
      { front: 'What happens to these silent finals next lesson', back: 'Some of them wake up before a vowel. That is liaison: deux‿euros, petit‿ami.' },
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
      text: 'Before the quiz, take a second to see what you have actually done in the last hour.',
      voice: 'coach',
      timing: 'onEnter',
    },
    body:
      'An hour ago the ending of a French word was a coin toss. Now you have a default, four overrides and a short list of stubborn words. That is the entire system, and the rest of French pronunciation builds directly on top of it. The R was the hard one and you have been through it twice, from both ends: producing it in the trap drill, hearing it in the listening drill.',
    stats: [
      { k: 'Words mastered', v: '20' },
      { k: 'Trap conquered', v: 'The -ER ending' },
      { k: 'XP earned', v: '340' },
      { k: 'Next up', v: 'Liaison, where these letters wake up' },
    ],
  },

  {
    type: 'quiz',
    id: 's19-quiz',
    title: 'Thirty-two questions',
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
    id: 's20-roundup',
    title: 'What you take with you',
    frSub: "L'essentiel",
    render: 'screens',
    layer: 'core',
    size: 'md',
    imageRef: 'lessons/muettes/roundup.jpg',
    terms: ['careful', 'erEnding', 'hMuet', 'hAspire', 'eSwitch', 'liaison'],
    say: {
      text: 'That is the lesson. Six things worth keeping, and the last one is where you go next.',
      voice: 'coach',
      timing: 'onEnter',
    },
    body:
      'An hour ago you sounded the x in deux and a woman in a bakery could not understand you. The fix was not a longer list of words. It was one default and four overrides, and you now run them without thinking about most of them. From here, every new French word you meet has a first guess attached to it before you even try to say it. That is the difference between reading French and decoding it.',
    points: [
      // Reframe appearance 6 of 7.
      `${REFRAME} That is your default for every final consonant, on every word, forever.`,
      'CaReFuL: C, R, F, L are the reason, most of the time. sac, hiver, chef, avril.',
      'The -er ending overrules CaReFuL. parler and boulanger drop the R. hiver and mer keep it.',
      "H is a ghost. Never a sound. It only decides whether the article shrinks: l'homme against le héros.",
      'A silent final -e is an alarm clock for the consonant in front of it, and that is how you hear gender.',
      'Those silent finals are sleeping, not dead. Before a vowel, some of them wake up: deux‿euros, petit‿ami. That is liaison, and it is your next lesson.',
    ],
  },
];

/* ─── Acts ────────────────────────────────────────────────────────────────── */

// Screen counts are the source lesson's own estimates, kept so the checkpoint
// spacing rule is checked against the real shape.
//
// NOTE ON act1: the source file declares restPoints: [] and estScreens: 25,
// which leaves a 25-screen stretch against the architecture doc's own
// 22-screen checkpoint-spacing limit (section 10). That is a content issue
// flagged for Paul rather than silently patched — see MUETTES-BUILD-REPORT.md.
// A rest point after the scene splits it 11/14 and resolves it.
const ACTS = [
  { id: 'act1', title: 'Why this matters', sections: ['s01-scene', 's02-goals', 's03-anchors'],
    milestone: 'The problem, named.', estScreens: 25, restPoints: ['s01-scene/end'] },

  { id: 'act2', title: 'The five rules', sections: ['s04-grid', 's05-families'],
    milestone: 'Every rule, mapped.', estScreens: 36, restPoints: ['s05-families/groupB'] },

  { id: 'act3', title: 'The hard part', sections: ['s06-trap-rule', 's06-trap', 's07-inhibition', 's08-flashcards'],
    milestone: 'The trap, beaten.', estScreens: 36, restPoints: ['s08-flashcards/10'] },

  { id: 'act4', title: 'Make it yours', sections: ['s09-examples', 's10-dictation', 's11-listening'],
    milestone: 'The words, banked.', estScreens: 39, restPoints: ['s10-dictation/1'] },

  { id: 'act5', title: 'Use it', sections: ['s12-speak', 's13-scenario', 's14-errors', 's15-listen'],
    milestone: 'Used in the wild.', estScreens: 39, restPoints: ['s13-scenario/1'] },

  { id: 'act6', title: 'Prove it', sections: ['s16-reading', 's17-review', 's18-progress', 's19-quiz', 's20-roundup'],
    milestone: 'Lesson complete.', estScreens: 66, restPoints: ['s17-review', 's19-quiz/round2'] },
];

/* ─── SRS tranches ────────────────────────────────────────────────────────── */

// One slice per act, released AT that act's checkpoint rather than all at once
// on completion. Slices of itemIds, because the SRS keys on (itemId, modality)
// and a separate dk* card id would have nothing to resolve against.
//
// Act 1 releases nothing: the scene teaches one word and the goals teach none,
// so there is nothing earned yet. Acts 2 and 3 carry the teaching load, which
// is where the bulk lands.
const DECK_TRANCHE: string[][] = [
  [],
  [...familyIds('default'), ...familyIds('careful')],
  [...familyIds('h')],
  [...familyIds('switch')],
  [...familyIds('exception')],
  [],
];

/* ─── The lesson ──────────────────────────────────────────────────────────── */

export const MUETTES_LESSON: Lesson = {
  id: 'sons.06.l1',
  unitId: 'sons.06',
  seq: 1,
  title: 'Silent Letters',
  level: 'sons',
  tag: 'SONS · LEÇON 06',

  intro:
    'French writes letters it never says. Not a few odd ones: most final consonants, every H, and the final -E all sit on the page in silence. This lesson gives you one default and four overrides, so that any French word you have never seen before, on a menu, a street sign, a train ticket, comes out of your mouth close to right on the first try.',

  overview: {
    glyph: 'p̶',
    titleEn: 'Silent Letters: the default rule of French pronunciation',
    subFr: 'Les lettres muettes',
    introFr:
      "En français, beaucoup de lettres s'écrivent mais ne se prononcent pas. Ce sont surtout les consonnes finales, le H et le -E final. Dans cette leçon, vous apprenez une règle par défaut et quatre exceptions.",
    minutes: 70,
    screens: 241,
    difficulty: 2,
  },

  grammarIntroduced: ['adjective-gender-audible', 'present-tense-silent-endings'],

  sections: SECTIONS,
  itemIds: MUETTES_IDS,

  acts: ACTS,
  reframe: REFRAME,
  errorTriggers: TRIGGERS,
  drills: DRILLS,
  sheets: SHEETS,
  deckTranche: DECK_TRANCHE,
  // The glossary. Defined once, surfaced by the `terms` list on eleven
  // sections, so CaReFuL (and every other term) is explained at every point of
  // use without any card carrying the definition inline.
  terms: TERMS,

  audio: {
    defaultLang: 'fr-FR',
    speeds: [1.0, 0.65],
    coachVoice: 'coach-en-warm',
    interfaceSounds: ['correct', 'incorrect', 'checkpoint'],
    ambienceDefault: 'off',
    recorded: [
      { id: 'rec-default-six', desc: 'petit, grand, beaucoup, Paris, trop, nez. Isolated, 900ms gaps, final letter audibly absent.', clipIds: ['petit', 'grand', 'beaucoup', 'paris', 'trop', 'nez'] },
      { id: 'rec-careful-pairs', desc: 'sac/tabac, hiver/parler, chef/clef, avril/gentil. Each pair twice: separately, then back to back with a 400ms gap.', clipIds: ['sac', 'tabac', 'hiver', 'parler', 'chef', 'clef', 'avril', 'gentil', 'boulanger', 'manger', 'la-mer', 'cher', 'premier', 'hier'] },
      { id: 'rec-h-pairs', desc: "l'homme, les hommes, le héros, les héros. Elision and liaison audible in the first two, blocked in the last two.", clipIds: ['l-homme', 'les-hommes', 'le-heros', 'les-heros'] },
      { id: 'rec-e-switch', desc: 'grand/grande, petit/petite, vert/verte, français/française. The woken consonant clearly released, no schwa after it.', clipIds: ['grande', 'petite', 'verte', 'francaise'] },
      { id: 'rec-verb-triplet', desc: 'je parle, tu parles, ils parlent. One take, one breath. All three must be acoustically identical.' },
      { id: 'rec-fils-fil', desc: 'fils, fil. Then in frames: mon fils / un fil de coton.', clipIds: ['fils', 'fil'] },
      { id: 'rec-scene-break', desc: 'The bakery break beat: [DEUKS] as a learner says it, then deux /dø/ as Marie says it.' },
      { id: 'rec-examples-16', desc: 'All 16 example sentences, normal and 0.65 speed.' },
      { id: 'rec-dictation-10', desc: 'All 10 dictation items, normal speed only, natural connected delivery.' },
      { id: 'rec-listening-passage', desc: 'The 5-line listening passage, normal and slow, plus per-line stems.' },
      { id: 'rec-reading-passage', desc: 'The 70-word reading passage, one take, plus per-sentence stems for tap-to-replay.' },
    ],
  },

  version: 1,
};

export default MUETTES_LESSON;
