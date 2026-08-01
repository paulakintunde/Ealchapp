// Content Batch — Les consonnes: the sons.04.l1 full-rig lesson.
//
// sons.04 ("Les consonnes") ships today with lessonIds: [] — the unit exists,
// the lesson does not. This batch authors it from scratch, to the
// LESSON-CONTENT-STANDARD rig sons.01.l1 pins: all 6 rich section types,
// quiz-last, roundup-second-to-last, say-narration on every non-quiz card,
// a warm→cheat Den narration block, and two practice sections (speak +
// listen) over resolvable items. Prerequisite chain: sons.01 (alphabet),
// sons.02 (oral vowels), sons.03 (nasal vowels) — this lesson assumes a
// learner already has letter names and vowel sounds, and isolates the
// consonants that genuinely differ from English: R, J, the C/G two-sound
// rule and its three forced-spelling overrides (ç, gu, ge), and the CH, GN,
// QU, PH, TH, silent-H spellings.
//
// Source content: the "s0-l04 French Consonants" course document (provided
// 2026-07-31), condensed to the EALCH house style (short teach blocks,
// interaction-first cards, one idea per screen) rather than transcribed
// wholesale. Most target words already exist in the corpus (alphabet/
// voyelles themes) and are reused by id; only 8 new words and 2 new
// sentences, genuinely missing from the corpus, are authored below under a
// new 'consonnes' theme.
//
// Same contract as author-salutations-batch.ts / author-voyelles-l2-batch.ts:
// every item and the lesson pass validateItem/validateLesson/validateUnit
// before anything is written, then the whole set upserts inside ONE
// transaction. Idempotent by id.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-consonnes-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-consonnes-batch.ts              apply, one transaction
//   then: pnpm audio:render --only sons.04.l1   (when the audio pass is scheduled)
//   then: pnpm content:publish                  (ships OTA; check git diff on seed.json first)

// './env' MUST be imported first — see the incident note in migrate.ts.
import './env';
import { describeTarget } from './env';
import {
  validateItem,
  validateLesson,
  validateUnit,
  type Item,
  type Lesson,
  type Unit,
} from '../../ealch-v2/src/content/schema.ts';

// ── The batch: 10 new consonnes items ───────────────────────────────────────
// 8 words (all noun phrases, article + noun, so kind 'phrase') and 2
// sentences that exercise two rules at once (a forced spelling plus a
// digraph). Gender only on the nouns, per Item.gender's own contract.

const PHRASE_DRILLS: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const SENTENCE_DRILLS: Item['drills'] = ['sentence', 'review'];

const NEW_ITEMS: Item[] = [
  { id: 'fr.sons.consonnes.001', kind: 'phrase', level: 'sons', theme: 'consonnes', fr: 'le chien', en: 'the dog', ipa: '/lə ʃjɛ̃/', gender: 'm', example: { fr: 'Mon chien joue dans le jardin.', en: 'My dog is playing in the garden.' }, tags: ['consonant', 'ch'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.002', kind: 'phrase', level: 'sons', theme: 'consonnes', fr: 'la gare', en: 'the train station', ipa: '/la ɡaʁ/', gender: 'f', example: { fr: 'Je cherche la gare.', en: 'I am looking for the station.' }, tags: ['consonant', 'g-hard'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.003', kind: 'phrase', level: 'sons', theme: 'consonnes', fr: 'le gel', en: 'the gel', ipa: '/lə ʒɛl/', gender: 'm', example: { fr: 'Passe-moi le gel douche.', en: 'Pass me the shower gel.' }, tags: ['consonant', 'g-soft'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.004', kind: 'phrase', level: 'sons', theme: 'consonnes', fr: 'le chocolat', en: 'the chocolate', ipa: '/lə ʃɔkɔla/', gender: 'm', example: { fr: 'J’aime le chocolat noir.', en: 'I like dark chocolate.' }, tags: ['consonant', 'ch'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.005', kind: 'phrase', level: 'sons', theme: 'consonnes', fr: 'le gilet', en: 'the cardigan, the vest', ipa: '/lə ʒilɛ/', gender: 'm', example: { fr: 'Il porte un gilet gris.', en: 'He is wearing a gray cardigan.' }, tags: ['consonant', 'g-soft'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.006', kind: 'phrase', level: 'sons', theme: 'consonnes', fr: 'le cycle', en: 'the cycle', ipa: '/lə sikl/', gender: 'm', example: { fr: 'Le cycle de l’eau est fascinant.', en: 'The water cycle is fascinating.' }, tags: ['consonant', 'c-soft'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.007', kind: 'phrase', level: 'sons', theme: 'consonnes', fr: 'la glace', en: 'the ice, the ice cream', ipa: '/la ɡlas/', gender: 'f', example: { fr: 'Une glace au chocolat, s’il vous plaît.', en: 'A chocolate ice cream, please.' }, tags: ['consonant', 'g-hard'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.008', kind: 'phrase', level: 'sons', theme: 'consonnes', fr: 'la gomme', en: 'the eraser', ipa: '/la ɡɔm/', gender: 'f', example: { fr: 'Tu as une gomme ?', en: 'Do you have an eraser?' }, tags: ['consonant', 'g-hard'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.009', kind: 'sentence', level: 'sons', theme: 'consonnes', fr: 'Ce garçon regarde la guitare rouge.', en: 'This boy is looking at the red guitar.', tags: ['consonant', 'c-g-rule'], drills: SENTENCE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.010', kind: 'sentence', level: 'sons', theme: 'consonnes', fr: 'Le chien dort près de la montagne.', en: 'The dog is sleeping near the mountain.', tags: ['consonant', 'ch-gn'], drills: SENTENCE_DRILLS, audioRef: null, version: 1 },
];

// ── Existing corpus ids the lesson reuses ───────────────────────────────────
// Most target words are already in the corpus (alphabet/voyelles/nombres/
// questions/mots-essentiels themes) — reused here by id rather than
// re-authored, per the standard's "reuse existing fr.sons.* ids" pattern.

const IDS = {
  rue: 'fr.sons.voyelles.003',
  merci: 'fr.sons.alphabet.005',
  professeur: 'fr.sons.voyelles.176',
  je: 'fr.sons.alphabet.001',
  jour: 'fr.sons.voyelles.146',
  gateau: 'fr.sons.alphabet.003',
  girafe: 'fr.sons.alphabet.004',
  cafe: 'fr.sons.voyelles.009',
  ce: 'fr.sons.mots-essentiels.089',
  garcon: 'fr.sons.alphabet.190',
  guitare: 'fr.sons.alphabet.191',
  chat: 'fr.sons.voyelles.061',
  montagne: 'fr.sons.alphabet.198',
  campagne: 'fr.sons.alphabet.199',
  hotel: 'fr.sons.alphabet.002',
  guerre: 'fr.sons.noms-essentiels.057',
  gagner: 'fr.sons.verbes-essentiels.033',
  the: 'fr.sons.alphabet.205',
  pharmacie: 'fr.sons.alphabet.203',
  qui: 'fr.sons.questions.001',
  quatre: 'fr.sons.nombres.003',
  chien: 'fr.sons.consonnes.001',
  gare: 'fr.sons.consonnes.002',
  gel: 'fr.sons.consonnes.003',
  chocolat: 'fr.sons.consonnes.004',
  gilet: 'fr.sons.consonnes.005',
  cycle: 'fr.sons.consonnes.006',
  glace: 'fr.sons.consonnes.007',
  gomme: 'fr.sons.consonnes.008',
  garconGuitareSentence: 'fr.sons.consonnes.009',
  chienMontagneSentence: 'fr.sons.consonnes.010',
} as const;

const ITEM_IDS: string[] = [...new Set(Object.values(IDS))];

// ── The lesson: sons.04.l1, "Les consonnes françaises" ──────────────────────

const LESSON: Lesson = {
  id: 'sons.04.l1',
  unitId: 'sons.04',
  seq: 1,
  title: 'Les consonnes françaises',
  level: 'sons',
  tag: 'SONS · LEÇON 04',
  intro:
    'You order « un café » with confidence, but the barista pauses for half a second. Most French consonants are exactly like English. This lesson isolates the handful that are not: the throaty R, the soft J, the two-sound C and G, and the CH, GN, QU, PH, TH spellings, so you can read any word and already know which sound to make.',
  itemIds: ITEM_IDS,
  version: 1,
  grammarAssumed: ['alphabet-names', 'oral-vowels', 'nasal-vowels'],
  grammarIntroduced: ['throat-r', 'c-g-two-sound-rule', 'ch-gn-digraphs'],
  features: ['narrated', 'minimalPairs'],
  sections: [
    {
      type: 'teach',
      title: 'Why this matters',
      body:
        'You say « un café, s’il vous plaît » with confidence, but the barista hesitates before understanding you. Your C slipped toward an S, and your R never left the tip of your tongue.\n\nThe good news: most French consonants are nearly identical to English. B, D, F, L, M, N, P, T, V, Z sound the way you already say them. This lesson is not a new consonant system, it is a short, closed list of exceptions to the one you already have.',
      say:
        'Picture this. You order a coffee with total confidence, but the barista pauses for half a second before understanding you. Here is the reassuring part: most French consonants are nearly identical to English. B, D, F, L, M, N, P, T, V, Z, say them the way you already do. This lesson is a short, closed list of exceptions, not a whole new system.',
    },
    {
      type: 'focus',
      title: 'What you’ll master',
      points: [
        'Produce the throat R instead of an English or Spanish-style R.',
        'Produce soft French J, and hear why soft G makes the identical sound.',
        'Apply the C rule (hard before a, o, u, soft before e, i, y) on sight.',
        'Apply the matching G rule, plus the three forced-spelling overrides: ç, gu, ge.',
        'Read CH, GN, QU, PH, TH and silent H correctly, every time.',
        'Tell which ten consonants need zero new muscle memory.',
      ],
      say:
        'By the end of this lesson you can produce the throat R and soft J, apply the C and G rule from spelling alone, read every forced-spelling override, and handle CH, GN, QU, PH, TH and silent H on sight.',
    },
    {
      type: 'teach',
      title: 'The three buckets',
      body:
        'Every French consonant sorts into one of three buckets. Bucket one: unchanged from English, no new skill, that’s B D F L M N P T V Z. Bucket two: a genuinely different but fixed sound, no ambiguity once learned, that’s R, J, CH, GN, QU, PH, TH, H. Bucket three: a letter that switches between two sounds depending on the next letter, that’s C and G.\n\nThis lesson spends almost all its time in buckets two and three, because that’s where every real mistake lives.',
      say:
        'Three buckets. Bucket one is unchanged from English, nothing to learn. Bucket two is a new but fixed sound: R, J, CH, GN, QU, PH, TH, H. Bucket three is a letter that switches sound depending on what follows it: C and G. Today lives almost entirely in buckets two and three.',
    },
    {
      type: 'letterGrid',
      title: 'R, J, H, C, G: the five letters that ambush you',
      letters: [
        { ch: 'R', name: '[air]', ipa: '/ʁ/', sound: 'a soft, throaty scrape from the very back of the mouth', ex: 'la rue [roo]', exNote: 'the street', memo: 'Not the American tongue-curl, not the Spanish trill. Build it from a relaxed hard G.' },
        { ch: 'J', name: '[zhee]', ipa: '/ʒ/', sound: 'the buzzy zh of measure, never the English hard j', ex: 'je [zhuh]', exNote: 'I', memo: 'A pure hiss, voiced. No hidden d at the front.' },
        { ch: 'H', name: '[ahsh]', ipa: '/aʃ/', sound: 'always silent inside a word', ex: 'l’hôtel [oh-TELL]', exNote: 'the hotel', memo: 'A name, but never a sound. No puff of air, ever.' },
        { ch: 'C', name: '[say]', ipa: '/k/ or /s/', sound: 'k before a, o, u; s before e, i, y', ex: 'le café [ka-FAY] · ce [suh]', exNote: 'coffee · this', memo: 'Ç forces the soft s even in front of a, o, u: garçon.' },
        { ch: 'G', name: '[zhay]', ipa: '/ɡ/ or /ʒ/', sound: 'hard g before a, o, u; soft zh before e, i, y', ex: 'le gâteau [gah-TOH] · le gel [zhell]', exNote: 'cake · gel', memo: 'GU forces a hard g even in front of e, i: guerre, guitare.' },
      ],
      say:
        'Five letters, one grid. Tap any letter to open its card: its French name, the sound it makes inside words, and an example. C and G each carry two sounds, that’s worth extra attention, and it’s exactly what the next few cards go deep on.',
    },
    {
      type: 'cardDeck',
      title: 'Build the throat R',
      hint: 'One step per card',
      cards: [
        { label: 'STEP 1', head: 'Start from a hard G', fr: 'gare', sub: '[gar] · station', body: 'Say an English hard g, back of the mouth. Now let a little air rasp through instead of closing fully. That controlled scrape is R.' },
        { label: 'STEP 2', head: 'Drop it in front of a vowel', fr: 'rue', sub: '[roo] · street', body: 'Same scrape, now leading into a vowel. Hold it, don’t rush past it.' },
        { label: 'STEP 3', head: 'Try it after a consonant', fr: 'trois', sub: '[trwah] · three', body: 'The throat R shows up in clusters too: tr, pr, gr. Same sound, no different.' },
        { label: 'STEP 4', head: 'End a word on it', fr: 'le professeur', sub: '[pro-feh-SUR] · the teacher', body: 'French never drops a final R the way some English accents do. Say it fully, twice, in this one word.' },
        { label: 'CHECK', head: 'Say the sentence', fr: 'Le professeur regarde trois roses rouges.', sub: 'The teacher looks at three red roses.', body: 'Five throat R’s, four different positions. If this feels smooth, the sound is yours.' },
      ],
      say:
        'Building the throat R, one step at a time. Start from a relaxed hard G, drop the scrape in front of a vowel, then try it in a cluster and at the end of a word. The last card stacks five R’s into one sentence.',
    },
    {
      type: 'cardDeck',
      title: 'J and soft G: one sound, two spellings',
      hint: 'Swipe through',
      cards: [
        { label: 'THE SOUND', head: 'Say measure, slowly', fr: 'measure', sub: 'the middle consonant', body: 'Isolate the buzzy sound in the middle of the English word measure. That, at the start of a word, is French J.' },
        { label: '1', head: 'je', fr: 'je', sub: '[zhuh] · I', body: 'No hard d at the front, just the buzz.' },
        { label: '2', head: 'le jour', fr: 'le jour', sub: '[zhoor] · the day', body: 'Same buzz, straight into the throat R.' },
        { label: '3', head: 'Soft G matches it exactly', fr: 'le gel', sub: '[zhell] · the gel', body: 'G before e, i, y makes the identical sound to J. One sound, two spellings.' },
        { label: '4', head: 'la girafe', fr: 'la girafe', sub: '[zhee-RAHF] · the giraffe', body: 'G before i, the same soft buzz again.' },
      ],
      say:
        'J is always soft in French, and soft G is the exact same sound wearing a different spelling. Swipe through and say each one, feeling for that buzzy measure sound with no hard stop at the front.',
    },
    {
      type: 'tapTable',
      title: 'C and G: the two-sound gate',
      cols: ['Letter + next letter', 'Sound', 'Example'],
      rows: [
        { cells: ['c + a, o, u', '[k]', 'café'], say: 'café', detail: { title: 'C before a, o, u', body: 'A hard k. Café, comme, cuir.', say: 'café' } },
        { cells: ['c + e, i, y', '[s]', 'ce'], say: 'ce', detail: { title: 'C before e, i, y', body: 'A soft s. Ce, ici, cycle.', say: 'ce' } },
        { cells: ['ç + a, o, u', '[s], forced', 'garçon'], say: 'garçon', detail: { title: 'Ç overrides the rule', body: 'The cedilla forces a soft s even in front of a, o, u: garçon, français.', say: 'garçon' } },
        { cells: ['g + a, o, u', '[g]', 'gare'], say: 'gare', detail: { title: 'G before a, o, u', body: 'A hard g. Gare, gomme, aigu.', say: 'gare' } },
        { cells: ['g + e, i, y', '[zh]', 'gel'], say: 'gel', detail: { title: 'G before e, i, y', body: 'A soft zh, identical to J. Gel, gilet, gym.', say: 'gel' } },
        { cells: ['gu + e, i', '[g], forced', 'guerre'], say: 'guerre', detail: { title: 'GU overrides the rule', body: 'A silent u forces a hard g even before e or i: guerre, guitare.', say: 'guerre' } },
      ],
      say:
        'The single most useful rule in this lesson. C and G both flip sound depending on the very next letter. A, o, u keeps them hard. E, i, y makes them soft. Tap any row for the detail, and watch the third and sixth rows: ç and gu are how French forces the “wrong” sound on purpose.',
    },
    {
      type: 'cardDeck',
      title: 'The forced-spelling trap',
      hint: 'Same rule, deliberately broken',
      cards: [
        { label: '1', head: 'gare vs guerre', fr: 'gare · guerre', sub: '[gar] · [gair]', body: 'Both hard g. The silent u in guerre exists for one reason: to keep the g hard in front of e.' },
        { label: '2', head: 'gel vs guitare', fr: 'gel · guitare', sub: '[zhell] · [gee-TAR]', body: 'Gel is the regular soft g before e. Guitare is the forced hard g, thanks to that same silent u.' },
        { label: '3', head: 'café vs garçon', fr: 'café · garçon', sub: '[ka-FAY] · [gar-SOHN]', body: 'Café is the regular hard c before a. Garçon needs the cedilla to force the c soft in front of o.' },
        { label: '4', head: 'The mirror trick', fr: 'mangeons', sub: '[mahn-ZHOHN] · we eat', body: 'GE keeps a G soft in front of a or o, by inserting a silent e. Same idea as gu, opposite direction.' },
      ],
      say:
        'Three override spellings do all the work: ç forces a soft sound before a, o, u. Gu forces a hard sound before e, i. Ge forces a soft sound before a, o. Once you see them as a permission slip rather than an exception, they stop needing memorization word by word.',
    },
    {
      type: 'cardDeck',
      title: 'CH and GN: two fixed digraphs',
      hint: 'One sound each, no exceptions today',
      cards: [
        { label: '1', head: 'CH is just sh', fr: 'le chat', sub: '[shah] · the cat', body: 'Never the English hard ch of chair. Always the plain sh of shoe.' },
        { label: '2', head: 'le chocolat', fr: 'le chocolat', sub: '[sho-ko-LAH] · the chocolate', body: 'Same sh, three syllables in.' },
        { label: '3', head: 'GN is one sound, not two', fr: 'la montagne', sub: '[mon-TAHN-yuh] · the mountain', body: 'Not g, then n. One merged sound, tongue on the roof of the mouth, like the ny in canyon.' },
        { label: '4', head: 'gagner', fr: 'gagner', sub: '[gah-NYAY] · to win', body: 'Hard g at the start, GN at the end. Two rules in one small word.' },
      ],
      say:
        'CH and GN behave as single, indivisible units. CH is always the plain sh sound. GN is always one merged nasal sound, never a hard g followed by a separate n.',
    },
    {
      type: 'vocabThemes',
      title: 'Vocabulary bank',
      themes: [
        {
          title: 'The throat R',
          cards: [
            { fr: 'la rue', sub: '[roo] · /ʁy/', en: 'the street' },
            { fr: 'merci', sub: '[mair-SEE] · /mɛʁsi/', en: 'thank you' },
            { fr: 'le professeur', sub: '[pro-feh-SUR] · /pʁɔfɛsœʁ/', en: 'the teacher' },
          ],
        },
        {
          title: 'Soft J and soft G',
          cards: [
            { fr: 'je', sub: '[zhuh] · /ʒə/', en: 'I' },
            { fr: 'le jour', sub: '[zhoor] · /ʒuʁ/', en: 'the day' },
            { fr: 'le gel', sub: '[zhell] · /ʒɛl/', en: 'the gel' },
            { fr: 'la girafe', sub: '[zhee-RAHF] · /ʒiʁaf/', en: 'the giraffe' },
            { fr: 'le gilet', sub: '[zhee-LAY] · /ʒilɛ/', en: 'the cardigan' },
          ],
        },
        {
          title: 'Hard C and hard G',
          cards: [
            { fr: 'le café', sub: '[ka-FAY] · /kafe/', en: 'the coffee' },
            { fr: 'le gâteau', sub: '[gah-TOH] · /ɡato/', en: 'the cake' },
            { fr: 'la gare', sub: '[gar] · /ɡaʁ/', en: 'the train station' },
            { fr: 'la glace', sub: '[glass] · /ɡlas/', en: 'the ice, the ice cream' },
            { fr: 'la gomme', sub: '[gom] · /ɡɔm/', en: 'the eraser' },
          ],
        },
        {
          title: 'CH and GN',
          cards: [
            { fr: 'le chat', sub: '[shah] · /ʃa/', en: 'the cat' },
            { fr: 'le chien', sub: '[shyan] · /ʃjɛ̃/', en: 'the dog' },
            { fr: 'le chocolat', sub: '[sho-ko-LAH] · /ʃɔkɔla/', en: 'the chocolate' },
            { fr: 'la montagne', sub: '[mon-TAHN-yuh] · /mɔ̃taɲ/', en: 'the mountain' },
            { fr: 'la campagne', sub: '[cahm-PAHN-yuh] · /kɑ̃paɲ/', en: 'the countryside' },
          ],
        },
      ],
      say:
        'The vocabulary bank, sorted by sound rather than by topic: throat R words, soft J and soft G words, hard C and hard G words, then CH and GN. Tap a theme to open its own mini deck.',
    },
    {
      type: 'steps',
      title: 'Read any C or G before you say it',
      steps: [
        'Spot every C and G in the phrase before you speak it.',
        'Check the very next letter. A, O, U or a consonant means hard. E, I, Y means soft.',
        'Watch for the three overrides: ç forces soft, gu forces hard, ge forces soft.',
        'Say the phrase once in your head, then say it out loud.',
      ],
      say:
        'A simple scanning habit turns this rule from a guess into a reflex. Spot every C and G, check the next letter, watch for the three override spellings, then speak. A few days of doing this on short phrases and it becomes automatic.',
    },
    {
      type: 'tapTable',
      title: 'QU, PH, TH, and silent H',
      cols: ['Spelling', 'Sound', 'Example'],
      rows: [
        { cells: ['qu', '[k], no w-glide', 'quatre'], say: 'quatre', detail: { title: 'QU is just k', body: 'Never the English “kw”. Quatre is [KATR], not koo-AT-ruh.', say: 'quatre' } },
        { cells: ['ph', '[f]', 'pharmacie'], say: 'pharmacie', detail: { title: 'PH is always f', body: 'No exceptions worth learning yet. Pharmacie, photo.', say: 'la pharmacie' } },
        { cells: ['th', '[t]', 'thé'], say: 'thé', detail: { title: 'TH is always t', body: 'French has no equivalent of the English th in think. Thé, théâtre.', say: 'le thé' } },
        { cells: ['h', 'always silent', 'l’hôtel'], say: 'hôtel', detail: { title: 'H makes no sound', body: 'Whether at the start or mid-word, H is silent. The word opens on the next letter.', say: 'l’hôtel' } },
      ],
      say:
        'Four borrowed spellings, each simplified to one clean sound. QU is k, never a kw glide. PH is f. TH is t. And H, no matter where it sits, makes no sound at all.',
    },
    {
      type: 'audio',
      title: 'Say it back',
      lines: [
        'un café',
        'un grand café',
        'un grand café, merci',
        'Ce garçon regarde la guitare rouge.',
      ],
      say:
        'A short phrase ladder. Tap each line, listen, then say it yourself before moving to the next. Watch the last line: it runs the C and G rule twice in one breath.',
    },
    {
      type: 'cardDeck',
      title: 'Common mistakes',
      hint: 'One trap per card',
      cards: [
        { label: 'MISTAKE 1', head: 'Using an English or Spanish R', fr: 'rue', sub: 'throat, not tongue tip', body: 'Curling the tongue back or rolling it is the fastest signal of a foreign accent. R lives at the back of the throat.' },
        { label: 'MISTAKE 2', head: 'Saying J like English jump', fr: 'je', sub: 'soft [zh], not hard [j]', body: 'French J never starts with a hard d stop. It’s a pure buzz, like the middle of measure.' },
        { label: 'MISTAKE 3', head: 'Guessing the C sound', fr: 'café · ce', sub: 'check the next letter first', body: 'Café is hard, ce is soft. The rule is fully predictable, there’s never a real reason to guess.' },
        { label: 'MISTAKE 4', head: 'Guessing the G sound', fr: 'gare · gel', sub: 'same gate as C', body: 'Gare is hard, gel is soft. G follows the identical rule as C, one letter later in the alphabet.' },
        { label: 'MISTAKE 5', head: 'Saying CH like English chair', fr: 'chat', sub: '[shah], not [chat]', body: 'French almost never uses the hard English ch sound. It’s the plain sh of shoe.' },
        { label: 'MISTAKE 6', head: 'Splitting GN into two sounds', fr: 'montagne', sub: 'one merged sound', body: 'It looks like g then n, but it functions as a single consonant, like the ny in canyon.' },
      ],
      say:
        'Six mistakes almost every English speaker makes with these consonants, one per card. Each one gets the fix and the reason your mouth wants to make it.',
    },
    {
      type: 'practice',
      title: 'Speaking drills',
      skill: 'speak',
      itemIds: [
        IDS.rue, IDS.merci, IDS.professeur, IDS.je, IDS.jour, IDS.gateau,
        IDS.girafe, IDS.cafe, IDS.ce, IDS.garcon, IDS.guitare, IDS.chien,
        IDS.gel, IDS.gomme, IDS.glace, IDS.garconGuitareSentence,
      ],
      say:
        'Speaking drills. Tap each word to hear it, say it out loud, then grade yourself: got it, or missed it. Your answers feed your review deck, so accurate grading means better practice later.',
    },
    {
      type: 'cardDeck',
      title: 'Minimal pairs',
      hint: 'Feel your mouth change between the two',
      cards: [
        { label: 'PAIR 1', head: 'Hard G, then soft G', fr: 'gare · gel', sub: '[gar] · [zhell]', body: 'Same letter, two sounds. Only the next vowel decides.' },
        { label: 'PAIR 2', head: 'Hard C, then soft C', fr: 'café · ce', sub: '[ka-FAY] · [suh]', body: 'A opens the gate hard, e closes it soft.' },
        { label: 'PAIR 3', head: 'Regular soft G, then forced hard G', fr: 'gel · guitare', sub: '[zhell] · [gee-TAR]', body: 'Both followed by a narrow vowel family, but the silent u in guitare flips it back to hard.' },
        { label: 'PAIR 4', head: 'Regular hard C, then forced soft C', fr: 'café · garçon', sub: '[ka-FAY] · [gar-SOHN]', body: 'Both followed by a wide vowel, but the cedilla in garçon flips it back to soft.' },
      ],
      say:
        'Four minimal pairs, the exact contrasts that trip up an English-trained ear. Say each pair out loud and feel your mouth change between the two.',
    },
    {
      type: 'audio',
      title: 'Shadowing',
      lines: [
        'Le professeur regarde trois roses rouges.',
        'Ce garçon regarde la guitare rouge.',
        'Le chien dort près de la montagne.',
      ],
      say:
        'Shadowing. Tap each line, then say it three times, matching a smooth rhythm. Three sentences, three different consonant combinations stacked together.',
    },
    {
      type: 'practice',
      title: 'Ear training',
      skill: 'listen',
      itemIds: [
        IDS.chat, IDS.montagne, IDS.hotel, IDS.guerre, IDS.campagne, IDS.gagner,
        IDS.the, IDS.pharmacie, IDS.qui, IDS.quatre, IDS.gare, IDS.chocolat,
        IDS.gilet, IDS.cycle, IDS.chienMontagneSentence,
      ],
      say:
        'Now ears only. Play each word without looking if you can, decide what you heard, then check. These are the digraphs and borrowed spellings that fool an English-trained ear the longest.',
    },
    {
      type: 'flashcards',
      title: 'Practice flashcards',
      cards: [
        { front: 'How is R produced in French?', back: 'At the back of the throat, a soft scrape. Never the tongue tip.' },
        { front: 'What sound does French J make?', back: 'The buzzy zh of measure, never a hard English j.' },
        { front: 'C before a, o, u sounds like…?', back: '[k], as in café.', say: 'café' },
        { front: 'C before e, i, y sounds like…?', back: '[s], as in ce.', say: 'ce' },
        { front: 'What does the cedilla (ç) do?', back: 'Forces a soft s even before a, o, u, as in garçon.', say: 'garçon' },
        { front: 'G before a, o, u sounds like…?', back: '[g], as in gare.', say: 'gare' },
        { front: 'G before e, i, y sounds like…?', back: 'Soft [zh], as in gel.', say: 'gel' },
        { front: 'What does GU force before e or i?', back: 'A hard g, as in guerre and guitare. The u stays silent.', say: 'guerre' },
        { front: 'How does CH normally sound?', back: 'Like English sh, as in chat and chocolat.', say: 'le chocolat' },
        { front: 'How does GN sound?', back: 'One merged sound, like the ny in canyon, as in montagne.', say: 'la montagne' },
        { front: 'What does QU sound like?', back: '[k], no w-glide, as in quatre.', say: 'quatre' },
        { front: 'Is H ever pronounced?', back: 'No, never. L’hôtel opens straight on the o.', say: 'l’hôtel' },
      ],
      say:
        'Practice flashcards. Answer out loud, tap the card to flip it, then grade yourself. The effort of recalling is what makes it stick.',
    },
    {
      type: 'roundup',
      title: 'Round-up',
      body:
        'Bravo. You just isolated the handful of French consonants that genuinely differ from English, and left the other ten alone. R lives in the throat, J and soft G buzz like measure, and C and G both flip on the very next letter. One short quiz stands between you and the finish line.',
      points: [
        'Ten letters transfer free: B, D, F, L, M, N, P, T, V, Z.',
        'R is a throat scrape, never the tongue tip.',
        'J and soft G are the exact same buzzy sound, two spellings.',
        'C and G both flip on the next letter: a, o, u is hard, e, i, y is soft.',
        'Ç forces soft, GU forces hard, GE forces soft. The rule’s built-in overrides.',
        'CH is sh, GN is one merged sound, QU is k, PH is f, TH is t, H is silent.',
      ],
      say:
        'Bravo. Before the quiz, your key takeaways. Ten letters need nothing new. R is a throat scrape. J and soft G are the same buzzy sound. C and G both flip on the next letter, and ç, gu, ge are the built-in overrides. Ready? The quiz is one tap away.',
    },
    {
      type: 'quiz',
      title: 'Quiz',
      questions: [
        { q: 'Where is the French R produced?', opts: ['With the tongue tip curled back', 'At the back of the throat', 'By rolling the tongue tip'], correct: 1, why: 'The throat R is made near the back of the mouth, tongue tip uninvolved.' },
        { q: 'French J sounds like…', opts: ['The English hard j in jump', 'The soft zh in measure', 'The English y in yes'], correct: 1, why: 'French J is a pure buzz, with no hard stop at the front.' },
        { q: 'What does C sound like before a, o, u?', opts: ['[s]', '[k]', '[zh]'], correct: 1, why: 'Café, comme, cuir: the wide vowels keep C hard.' },
        { q: 'What does C sound like before e, i, y?', opts: ['[k]', '[s]', '[g]'], correct: 1, why: 'Ce, ici, cycle: the narrow vowels make C soft.' },
        { q: 'What does the cedilla (ç) do?', opts: ['Forces [k] before a, o, u', 'Forces [s] before a, o, u', 'Makes the letter silent'], correct: 1, why: 'Garçon needs the cedilla to stay soft in front of o.' },
        { q: 'How does French force a hard [g] before e or i, as in guerre?', opts: ['With a cedilla', 'By adding a silent u: gu', 'It is impossible, G is always soft there'], correct: 1, why: 'The silent u in gu is a permission slip, not a sound.' },
        { q: 'What does CH normally sound like?', opts: ['The ch in English chair', 'The sh in English shoe', '[k]'], correct: 1, why: 'French almost never uses the hard English ch sound.' },
        { q: 'How is GN pronounced, as in montagne?', opts: ['A hard g followed by n', 'One merged sound, like the ny in canyon', 'Silent'], correct: 1, why: 'GN functions as a single consonant, not two letters in sequence.' },
        { q: 'How is quatre pronounced?', opts: ['[kwatr], with a w-glide', '[katr], no glide', '[kyatr]'], correct: 1, why: 'French QU is just k. English “kw” never appears.' },
        { q: 'Is H ever pronounced in French?', opts: ['Yes, always', 'No, never', 'Only at the start of a word'], correct: 1, why: 'H is always silent, whether it opens a word or sits mid-word.' },
        { q: 'In « Ce garçon regarde la guitare », why does the C in garçon stay soft?', opts: ['Because O is always soft', 'Because the cedilla forces it', 'It is a spelling mistake'], correct: 1, why: 'The cedilla overrides the normal hard-before-o rule.' },
        { q: 'Which sentence uses both the C/G rule and a forced-spelling override?', opts: ['Le chat dort.', 'Ce garçon regarde la guerre.', 'Il fait beau.'], correct: 1, why: 'Ce is soft C by the regular rule; guerre is a forced hard G via gu.' },
      ],
    },
  ],
  narration: {
    camilleVoiceId: 'camille-fr-ca-01',
    ratioEnFr: 0.7,
    stages: [
      {
        stage: 'warm',
        segments: [
          { voice: 'fr', text: 'Bonjour !' },
          { voice: 'en', text: 'Welcome back to Sons. Today, French consonants, the ones that actually differ from English.' },
          { voice: 'en', text: 'You already know ten of them by heart: B, D, F, L, M, N, P, T, V, Z. This lesson isolates the handful that don’t transfer: the throaty R, the soft J, the two-sound C and G, and four borrowed spellings.' },
        ],
      },
      {
        stage: 'focus',
        segments: [
          { voice: 'en', text: 'One useful reframe before we start. You are not learning a new consonant system. You are learning a short, closed list of exceptions to the one you already have.' },
          { voice: 'en', text: 'Today’s focus: R, J, the C and G rule, and CH, GN, QU, PH, TH, H.' },
        ],
      },
      {
        stage: 'input',
        segments: [
          { voice: 'en', text: 'Start with R. Say an English hard g, back of the mouth. Now let a little air rasp through instead of closing fully. That controlled scrape is the French R.' },
          { voice: 'fr', text: 'la rue' },
          { voice: 'en', text: 'The street. All throat, no tongue tip. Now the soft J: isolate the buzzy middle sound of the English word measure.' },
          { voice: 'fr', text: 'je' },
          { voice: 'en', text: 'I. No hard d at the front, just the buzz. And that same buzz is exactly what soft G sounds like too.' },
          { voice: 'fr', text: 'le gel' },
          { voice: 'en', text: 'The gel. Now the rule that runs all of this: C and G each carry two sounds, and the very next letter decides which. A, o, u keeps them hard. E, i, y makes them soft.' },
          { voice: 'fr', text: 'le café, ce' },
          { voice: 'en', text: 'Coffee, this. Hard, then soft. Same letter, two jobs.' },
        ],
      },
      {
        stage: 'practice',
        segments: [
          { voice: 'en', text: 'Your turn. Repeat after me, slowly. The street:' },
          { voice: 'fr', text: 'la rue' },
          { kind: 'repeat', itemId: 'fr.sons.voyelles.003', gradeAs: 'produce' },
          { voice: 'en', text: 'Now the boy, where the cedilla forces the c soft even before o:' },
          { voice: 'fr', text: 'le garçon' },
          { kind: 'repeat', itemId: 'fr.sons.alphabet.190', gradeAs: 'produce' },
          { voice: 'en', text: 'And the cat, a plain sh, never the English ch:' },
          { voice: 'fr', text: 'le chat' },
          { kind: 'repeat', itemId: 'fr.sons.voyelles.061', gradeAs: 'produce' },
        ],
      },
      {
        stage: 'produce',
        segments: [
          { voice: 'en', text: 'Now say this sentence on your own, slowly. Watch the G twice, hard, then soft.' },
          { voice: 'fr', text: 'Un grand garçon regarde la guitare.' },
          { kind: 'produce', expected: 'Un grand garçon regarde la guitare.', gradeAs: 'produce' },
          { voice: 'en', text: 'Now the mountain, one merged sound for GN, not two:' },
          { kind: 'produce', itemId: 'fr.sons.alphabet.198', expected: 'la montagne', gradeAs: 'produce' },
        ],
      },
      {
        stage: 'check',
        segments: [
          { voice: 'en', text: 'Quick check. Before a, o or u, is C hard or soft?' },
          { kind: 'check', expected: 'hard', gradeAs: 'discriminate' },
          { voice: 'en', text: 'And what does the cedilla, ç, force?' },
          { kind: 'check', expected: 'a soft s', gradeAs: 'recognise' },
        ],
      },
      {
        stage: 'cheat',
        segments: [
          { voice: 'en', text: 'Your cheat sheet. Ten letters transfer free: B, D, F, L, M, N, P, T, V, Z. R lives in the throat. J and soft G buzz like measure. C and G both flip on the very next letter: a, o, u keeps them hard, e, i, y makes them soft, and ç, gu, ge are the overrides. CH is sh. GN is one sound. QU is k. PH is f. TH is t. H is always silent.' },
          { voice: 'fr', text: 'Bravo, à bientôt !' },
        ],
      },
    ],
  },
  overview: {
    titleEn: 'French Consonants: The Sounds That Actually Differ',
    subFr: 'Les consonnes : ce qui change vraiment',
    introFr:
      'La plupart des consonnes françaises ressemblent à l’anglais. Ce cours isole celles qui diffèrent vraiment : le R du fond de la gorge, le J adouci, la règle à deux sons du C et du G, et les groupes CH, GN, QU, PH, TH.',
    minutes: 40,
    difficulty: 2,
    glyph: 'Rr',
  },
};

// ── Apply ───────────────────────────────────────────────────────────────────

const DRY_RUN = process.argv.includes('--dry-run');

function die(msg: string): never {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

async function main() {
  console.log(`→ ${describeTarget()}`);
  if (!process.env.DATABASE_URL) {
    die('No DATABASE_URL. Content is authored against the canonical database, never PGlite.');
  }
  if (DRY_RUN) console.log('  (dry run — nothing will be written)');

  // Validate every item BEFORE touching the DB.
  const itemIssues = NEW_ITEMS.flatMap((it) => validateItem(it, it.id));
  if (itemIssues.length) die(`items invalid:\n${itemIssues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

  const ids = NEW_ITEMS.map((i) => i.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) die(`duplicate ids in batch: ${[...new Set(dupes)].join(', ')}`);

  const lessonIssues = validateLesson(LESSON, LESSON.id);
  if (lessonIssues.length) die(`lesson invalid:\n${lessonIssues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

  // House-style guards, same rules sons-alphabet.test.ts enforces on the seed.
  const authored = JSON.stringify({ NEW_ITEMS, LESSON });
  if (authored.includes('—')) die('em dash found in authored copy, the house style bans it');
  if (/honest/i.test(authored)) die('the word "honest" is banned from authored content');

  const { Pool } = await import('pg');
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  const client = await pool.connect();

  try {
    // Every reused id must exist as a published item before we point a lesson at it.
    const reused = ITEM_IDS.filter((id) => !ids.includes(id));
    const found = await client.query<{ id: string }>(
      `select id from content_items where id = any($1) and status = 'published'`,
      [reused]
    );
    const missing = reused.filter((id) => !found.rows.some((r) => r.id === id));
    if (missing.length) die(`lesson references unpublished/unknown items:\n  ${missing.join('\n  ')}`);

    const unitRow = await client.query<{ body: Unit }>(
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = 'sons.04'`
    );
    if (unitRow.rowCount !== 1) die(`unit "sons.04" not found in content_units — cannot attach its lesson`);
    const unitBody = unitRow.rows[0].body;
    const nextUnit: Unit = {
      ...unitBody,
      lessonIds: [...new Set([...(unitBody.lessonIds ?? []), LESSON.id])],
    };
    const unitIssues = validateUnit(nextUnit, nextUnit.id);
    if (unitIssues.length) die(`post-state fails validateUnit:\n${unitIssues.map((i) => `  ${i.path}: ${i.message}`).join('\n')}`);

    const existingLesson = await client.query(
      `select 1 from content_units where kind = 'lesson' and slug = $1`,
      [LESSON.id]
    );

    console.log(`\n  new items: ${NEW_ITEMS.length} (fr.sons.consonnes.001-010)`);
    console.log(`  reused items: ${reused.length}, all resolved as published`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}" — ${existingLesson.rowCount ? 'updating' : 'NEW'}, ` +
      `${LESSON.sections.length} sections, ${ITEM_IDS.length} itemIds, narration: ${LESSON.narration ? 'yes' : 'no'}`
    );
    console.log(`  unit sons.04 lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);

    if (DRY_RUN) {
      console.log('\n✓ dry run — all valid, nothing written.\n');
      return;
    }

    await client.query('begin');
    for (const it of NEW_ITEMS) {
      await client.query(
        `insert into content_items
           (id, kind, level, theme, fr, en, ipa, gender, example, notes, tags, drills, audio_ref, version, status, generated_by)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9::jsonb,$10,$11,$12,null,$13,'published','human')
         on conflict (id) do update set
           kind=excluded.kind, level=excluded.level, theme=excluded.theme, fr=excluded.fr, en=excluded.en,
           ipa=excluded.ipa, gender=excluded.gender, example=excluded.example, notes=excluded.notes,
           tags=excluded.tags, drills=excluded.drills, version=excluded.version`,
        [
          it.id, it.kind, it.level, it.theme, it.fr, it.en, it.ipa ?? null,
          it.gender ?? null, it.example ? JSON.stringify(it.example) : null, it.notes ?? null,
          it.tags, it.drills, it.version,
        ]
      );
    }

    await client.query(
      `insert into content_units (slug, title, kind, level, locale, status, body, version, generated_by)
       values ($1,$2,'lesson',$3,'fr','published',$4::jsonb,1,'human')
       on conflict (slug) do update set
         title=excluded.title, level=excluded.level, body=excluded.body, status='published', updated_at=now()`,
      [LESSON.id, LESSON.title, LESSON.level, JSON.stringify(LESSON)]
    );

    const res = await client.query(
      `update content_units set body = $1::jsonb, updated_at = now()
        where kind = 'curriculum_unit' and body->>'id' = 'sons.04'`,
      [JSON.stringify(nextUnit)]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows — rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ consonnes batch applied: ${NEW_ITEMS.length} items + lesson ${LESSON.id} published, unit sons.04 linked. Run pnpm content:publish to ship it OTA.\n`
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
