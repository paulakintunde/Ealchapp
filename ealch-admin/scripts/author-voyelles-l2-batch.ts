// Content Batch — Les voyelles: the sons.02.l1 full-rig upgrade.
//
// sons.02.l1 ("Les voyelles, en profondeur") shipped as a legacy-shape lesson:
// teach/table/examples only, 10 itemIds, no narration, none of the 6 rich
// section types. This batch rebuilds it to the LESSON-CONTENT-STANDARD rig
// that sons.01.l1 pins: all 6 rich types, quiz-last, roundup-second-to-last,
// say-narration on every non-quiz card, a warm→cheat Den narration block, and
// two practice sections (speak + listen) over resolvable items.
//
// Source content: the "s0-l02 French Vowels: The 12 Oral Vowel Sounds" course
// document (provided 2026-07-29), converted to the schema.ts section union.
// The 15 minimal pairs are the heart of the lesson; the 16 new items below
// are exactly the pair-words and core vocab the corpus did not already have
// (su, bu, vu, du, pu, la boue, la joue, le pou, le bateau, bonne, la
// voiture, le soir, la table, une minute, molle, nos). Everything else
// reuses existing fr.sons.* ids.
//
// Same contract as author-salutations-batch.ts: every item and the lesson
// pass validateItem/validateLesson/validateUnit before anything is written,
// then the whole set upserts inside ONE transaction. Idempotent by id.
//
// Usage (from ealch-admin/):
//   pnpm tsx scripts/author-voyelles-l2-batch.ts --dry-run    validate + report only
//   pnpm tsx scripts/author-voyelles-l2-batch.ts              apply, one transaction
//   then: pnpm audio:render --only sons.02.l1   (when the audio pass is scheduled)
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

// ── The batch: 16 new voyelles items ────────────────────────────────────────
// Minimal-pair words and core vocab from the s0-l02 document that have no
// existing corpus row. Gender only on nouns, per Item.gender's contract.
// Tags follow the existing voyelles convention: ['vowel', '<spelling>'].

const WORD_DRILLS: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const PHRASE_DRILLS: Item['drills'] = ['flashcard', 'voiceflash', 'review'];

const NEW_ITEMS: Item[] = [
  { id: 'fr.sons.voyelles.451', kind: 'word', level: 'sons', theme: 'voyelles', fr: 'su', en: 'known (past participle of savoir)', ipa: '/sy/', example: { fr: 'Je l’ai su hier.', en: 'I found out yesterday.' }, tags: ['vowel', 'u'], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.452', kind: 'word', level: 'sons', theme: 'voyelles', fr: 'bu', en: 'drunk (past participle of boire)', ipa: '/by/', example: { fr: 'Il a bu un café.', en: 'He drank a coffee.' }, tags: ['vowel', 'u'], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.453', kind: 'word', level: 'sons', theme: 'voyelles', fr: 'vu', en: 'seen (past participle of voir)', ipa: '/vy/', example: { fr: 'Je t’ai vu à la gare.', en: 'I saw you at the station.' }, tags: ['vowel', 'u'], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.454', kind: 'word', level: 'sons', theme: 'voyelles', fr: 'du', en: 'some (masculine)', ipa: '/dy/', example: { fr: 'Je veux du pain.', en: 'I want some bread.' }, tags: ['vowel', 'u'], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.455', kind: 'word', level: 'sons', theme: 'voyelles', fr: 'pu', en: 'been able (past participle of pouvoir)', ipa: '/py/', example: { fr: 'Je n’ai pas pu venir.', en: 'I could not come.' }, tags: ['vowel', 'u'], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.456', kind: 'phrase', level: 'sons', theme: 'voyelles', fr: 'la boue', en: 'the mud', ipa: '/la bu/', gender: 'f', example: { fr: 'Il y a de la boue sur la roue.', en: 'There is mud on the wheel.' }, tags: ['vowel', 'ou'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.457', kind: 'phrase', level: 'sons', theme: 'voyelles', fr: 'la joue', en: 'the cheek', ipa: '/la ʒu/', gender: 'f', example: { fr: 'Le bébé a les joues rouges.', en: 'The baby has red cheeks.' }, tags: ['vowel', 'ou'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.458', kind: 'phrase', level: 'sons', theme: 'voyelles', fr: 'le pou', en: 'the louse', ipa: '/lə pu/', gender: 'm', example: { fr: 'Un pou, deux poux.', en: 'One louse, two lice.' }, tags: ['vowel', 'ou'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.459', kind: 'phrase', level: 'sons', theme: 'voyelles', fr: 'le bateau', en: 'the boat', ipa: '/lə ba.to/', gender: 'm', example: { fr: 'Le bateau flotte sur l’eau calme.', en: 'The boat floats on the calm water.' }, tags: ['vowel', 'eau'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.460', kind: 'word', level: 'sons', theme: 'voyelles', fr: 'bonne', en: 'good (feminine)', ipa: '/bɔn/', example: { fr: 'Bonne idée !', en: 'Good idea!' }, tags: ['vowel', 'o'], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.461', kind: 'phrase', level: 'sons', theme: 'voyelles', fr: 'la voiture', en: 'the car', ipa: '/la vwa.tyʁ/', gender: 'f', example: { fr: 'La voiture est dans la rue.', en: 'The car is in the street.' }, tags: ['vowel', 'oi'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.462', kind: 'phrase', level: 'sons', theme: 'voyelles', fr: 'le soir', en: 'the evening', ipa: '/lə swaʁ/', gender: 'm', example: { fr: 'Le soir, je lis un peu.', en: 'In the evening, I read a little.' }, tags: ['vowel', 'oi'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.463', kind: 'phrase', level: 'sons', theme: 'voyelles', fr: 'la table', en: 'the table', ipa: '/la tabl/', gender: 'f', example: { fr: 'Le café est sur la table.', en: 'The coffee is on the table.' }, tags: ['vowel', 'a'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.464', kind: 'phrase', level: 'sons', theme: 'voyelles', fr: 'une minute', en: 'a minute', ipa: '/yn mi.nyt/', gender: 'f', example: { fr: 'Une minute, s’il vous plaît !', en: 'One minute, please!' }, tags: ['vowel', 'u'], drills: PHRASE_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.465', kind: 'word', level: 'sons', theme: 'voyelles', fr: 'molle', en: 'soft (feminine)', ipa: '/mɔl/', example: { fr: 'La pâte est molle.', en: 'The dough is soft.' }, tags: ['vowel', 'o'], drills: WORD_DRILLS, audioRef: null, version: 1 },
  { id: 'fr.sons.voyelles.466', kind: 'word', level: 'sons', theme: 'voyelles', fr: 'nos', en: 'our (plural)', ipa: '/no/', example: { fr: 'Nos amis arrivent ce soir.', en: 'Our friends arrive tonight.' }, tags: ['vowel', 'o'], drills: WORD_DRILLS, audioRef: null, version: 1 },
];

// ── Existing corpus ids the lesson reuses ───────────────────────────────────

const IDS = {
  chat: 'fr.sons.voyelles.061',
  table: 'fr.sons.voyelles.463',
  ici: 'fr.sons.mots-essentiels.058',
  lit: 'fr.sons.voyelles.065',
  tu: 'fr.sons.voyelles.001',
  rue: 'fr.sons.voyelles.003',
  minute: 'fr.sons.voyelles.464',
  sur: 'fr.sons.adjectifs-essentiels.053',
  vous: 'fr.sons.mots-essentiels.004',
  nous: 'fr.sons.mots-essentiels.003',
  jour: 'fr.sons.voyelles.146',
  beaucoup: 'fr.sons.mots-essentiels.047',
  cafe: 'fr.sons.voyelles.009',
  ete: 'fr.sons.voyelles.077',
  parler: 'fr.sons.verbes-essentiels.015',
  nez: 'fr.sons.voyelles.078',
  mere: 'fr.sons.voyelles.082',
  tete: 'fr.sons.voyelles.084',
  mais: 'fr.sons.mots-essentiels.034',
  lait: 'fr.sons.voyelles.085',
  eau: 'fr.sons.voyelles.006',
  beau: 'fr.sons.adjectifs-essentiels.005',
  bateau: 'fr.sons.voyelles.459',
  porte: 'fr.sons.voyelles.092',
  bonne: 'fr.sons.voyelles.460',
  peu: 'fr.sons.mots-essentiels.048',
  deux: 'fr.sons.voyelles.004',
  peur: 'fr.sons.voyelles.103',
  soeur: 'fr.sons.voyelles.100',
  heure: 'fr.sons.jours-et-mois.047',
  le: 'fr.sons.mots-essentiels.084',
  petit: 'fr.sons.adjectifs-essentiels.002',
  moi: 'fr.sons.voyelles.007',
  trois: 'fr.sons.nombres.002',
  voiture: 'fr.sons.voyelles.461',
  soir: 'fr.sons.voyelles.462',
  tout: 'fr.sons.voyelles.002',
  roue: 'fr.sons.voyelles.071',
  su: 'fr.sons.voyelles.451',
  sous: 'fr.sons.mots-essentiels.015',
  bu: 'fr.sons.voyelles.452',
  boue: 'fr.sons.voyelles.456',
  vu: 'fr.sons.voyelles.453',
  du: 'fr.sons.voyelles.454',
  doux: 'fr.sons.adjectifs-essentiels.033',
  pu: 'fr.sons.voyelles.455',
  pou: 'fr.sons.voyelles.458',
  dessus: 'fr.sons.mots-essentiels.122',
  dessous: 'fr.sons.mots-essentiels.123',
  jus: 'fr.sons.voyelles.148',
  joue: 'fr.sons.voyelles.457',
  ceux: 'fr.sons.mots-essentiels.107',
  les: 'fr.sons.mots-essentiels.086',
  mot: 'fr.sons.voyelles.087',
  molle: 'fr.sons.voyelles.465',
  nos: 'fr.sons.voyelles.466',
  note: 'fr.sons.voyelles.093',
  feu: 'fr.sons.voyelles.096',
  fleur: 'fr.sons.voyelles.005',
  jeune: 'fr.sons.adjectifs-essentiels.009',
} as const;

const ITEM_IDS: string[] = [...new Set(Object.values(IDS))];

// ── The lesson: sons.02.l1, rebuilt to the full rig ─────────────────────────

const LESSON: Lesson = {
  id: 'sons.02.l1',
  unitId: 'sons.02',
  seq: 1,
  title: 'Les douze voyelles orales',
  level: 'sons',
  tag: 'SONS · LEÇON 02',
  intro:
    'A single vowel can flip a French word. Dessus means on top, dessous means underneath, and the only difference is u versus ou. This lesson takes apart the twelve oral vowel sounds: the four contrasts that change meaning, the u sound English does not have, and how to read any vowel spelling and say it right.',
  itemIds: ITEM_IDS,
  version: 2,
  grammarIntroduced: ['oral-vowels', 'vowel-purity', 'minimal-pairs'],
  features: ['narrated', 'minimalPairs'],
  sections: [
    {
      type: 'teach',
      title: 'Two words, one vowel apart',
      body:
        'You are in a café in Paris. Dessus [duh-SEW] means on top. Dessous [duh-SOO] means underneath. The only difference between them is the final vowel: U versus OU.\n\nFrench repeats this pattern everywhere: tu (you) and tout (everything), rue (street) and roue (wheel), bu (drunk) and boue (mud). Words are short, there is no heavy stress to lean on, and a single vowel often carries the whole meaning. That is why this lesson exists: once your ear separates the twelve oral vowels, spoken French stops sounding like a blur.',
      say:
        'You are in a café in Paris. Dessus means on top. Dessous means underneath. The only thing separating them is one vowel: u versus ou. French does this everywhere: tu and tout, rue and roue. Once your ear separates the twelve oral vowels, spoken French stops sounding like a blur. That is the whole job of this lesson.',
    },
    {
      type: 'audio',
      title: 'Hear the pair',
      lines: ['dessus', 'dessous', 'tu ... tout', 'la rue ... la roue', 'bu ... la boue'],
      say:
        'Tap each line and listen twice. First the pair that opened the lesson: dessus, on top, then dessous, underneath. Then three more pairs cut by the same single vowel. Do not worry about producing them yet. Just notice that there really are two different sounds.',
    },
    {
      type: 'focus',
      title: 'What you’ll master',
      points: [
        'Produce all 12 oral vowel sounds of French.',
        'Hear and say the four contrasts that change meaning: u/ou, é/è, closed/open O, closed/open EU.',
        'Read any vowel spelling (a, é, è, ou, eu, eau, oi, ai...) and produce the right sound.',
        'Pronounce French u [y], a sound English does not have.',
        'Read a vowel-rich sentence aloud smoothly.',
      ],
      say:
        'By the end of this lesson you will produce all twelve oral vowels, hear and say the four contrasts that change meaning, read any vowel spelling and land the right sound, and own the French u, a sound English simply does not have.',
    },
    {
      type: 'teach',
      title: 'Pure, short, steady',
      body:
        'French has about 16 vowel sounds. Four are nasal, and they get their own lesson next. Today: the 12 oral vowels.\n\nThe single most important difference from English: English vowels glide. Say "day" slowly and you hear two sounds, deh-ee. The French dé (dice) is one clean sound, [de], held steady from start to finish.\n\nBurn this in: every French vowel is one clean note. Start it, hold it, stop it. If it drifts toward a second sound, it has become English.',
      say:
        'Here is the master rule. English vowels glide: say the word day slowly and you hear two sounds, deh, then ee. French vowels never do that. The French word dé, dice, is one clean note held steady from start to finish. Pure, short, steady. If a vowel drifts toward a second sound, it has become English.',
    },
    {
      type: 'letterGrid',
      title: 'The vowel letters, name and sound',
      letters: [
        { ch: 'a', name: '[ah]', ipa: '/a/', sound: 'open ah, as in father, but shorter', ex: 'le chat [sha]', exNote: 'cat', memo: 'Never the English ay. Ça va is [sa va].' },
        { ch: 'à', name: '[ah]', ipa: '/a/', sound: 'the same ah; the accent marks grammar, not sound', ex: 'voilà [vwa-LAH]', exNote: 'there it is' },
        { ch: 'â', name: '[ah]', ipa: '/a/', sound: 'the same ah, slightly longer for some speakers', ex: 'le château [sha-TOH]', exNote: 'castle' },
        { ch: 'e', name: '[uh]', ipa: '/ə/', sound: 'weak uh, never stressed, often nearly silent', ex: 'petit [puh-TEE]', exNote: 'small', memo: 'Fast speech drops it: petit becomes p’tit.' },
        { ch: 'é', name: '[ay]', ipa: '/e/', sound: 'closed ay with no glide: it never slides toward ee', ex: 'le café [ka-FAY]', exNote: 'coffee', memo: 'Endings -er and -ez say the same [e]: parler, le nez.' },
        { ch: 'è', name: '[eh]', ipa: '/ɛ/', sound: 'open eh, as in bed; the jaw drops', ex: 'la mère [mair]', exNote: 'mother', memo: 'ai and ei say the same open [ɛ]: mais, la neige.' },
        { ch: 'ê', name: '[eh]', ipa: '/ɛ/', sound: 'the same open eh', ex: 'la tête [tet]', exNote: 'head' },
        { ch: 'i', name: '[ee]', ipa: '/i/', sound: 'clean ee with no glide, lips slightly spread', ex: 'ici [ee-SEE]', exNote: 'here' },
        { ch: 'y', name: '[ee]', ipa: '/i/', sound: 'the same clean ee', ex: 'le stylo [stee-LOH]', exNote: 'pen' },
        { ch: 'u', name: '[ew]', ipa: '/y/', sound: 'say ee, keep the tongue there, round the lips', ex: 'tu [tew]', exNote: 'you', memo: 'The sound English does not have. The spelling ou is the different, darker [u]: vous.' },
        { ch: 'o', name: '[oh]', ipa: '/o/', sound: 'closed oh at the end of a word; open [ɔ] before a spoken consonant', ex: 'le mot [moh]', exNote: 'word', memo: 'porte and bonne open up to [ɔ].' },
        { ch: 'ô', name: '[oh]', ipa: '/o/', sound: 'always the closed oh', ex: 'l’hôtel [oh-TELL]', exNote: 'hotel', memo: 'au and eau are always this same closed [o]: l’eau, beau.' },
        { ch: 'œ', name: '[uh]', ipa: '/œ/', sound: 'rounded uh: open before a consonant, closed word-final', ex: 'la sœur [suhr]', exNote: 'sister', memo: 'œu before a consonant is open [œ]: sœur. Word-final it closes to [ø]: un vœu.' },
      ],
      say:
        'Thirteen vowel letters, tap each one. The accents are not decoration: é closes the mouth, è opens it, and the circumflex on ô locks the o closed. The letter u is the famous one: say ee, keep your tongue exactly where it is, and round your lips.',
    },
    {
      type: 'cardDeck',
      title: 'Meet the 12 vowel sounds',
      hint: 'Swipe: one sound per card',
      cards: [
        { label: 'SOUND 1 · [a]', head: 'Spellings: a, à, â', fr: 'le chat', sub: '[luh sha] · /ʃa/ · cat', body: 'Like the a in father, but shorter and further forward. Also: la table, voilà. Phrase: « Ça va ? », how is it going?' },
        { label: 'SOUND 2 · [i]', head: 'Spellings: i, î, y', fr: 'ici', sub: '[ee-SEE] · /isi/ · here', body: 'Like ee in see, but shorter, lips slightly spread. Also: le lit, le stylo. Phrase: « Il est ici. », he is here.' },
        { label: 'SOUND 3 · [y]', head: 'Spellings: u, û', fr: 'tu', sub: '[tew] · /ty/ · you', body: 'No English equivalent. Say ee, keep your tongue exactly where it is, and round your lips into a small circle. Also: la rue, une minute, sûr. Phrase: « Tu es sûr ? », are you sure?' },
        { label: 'SOUND 4 · [u]', head: 'Spellings: ou, où, oû', fr: 'vous', sub: '[voo] · /vu/ · you (formal)', body: 'Like oo in food: lips pushed forward, tongue pulled back. Also: nous, le jour, beaucoup. Phrase: « Où êtes-vous ? », where are you?' },
        { label: 'SOUND 5 · [e]', head: 'Spellings: é, -er, -ez, -et', fr: 'le café', sub: '[ka-FAY] · /kafe/ · coffee', body: 'Close to ay in say, but with no glide: it never slides toward ee. Also: l’été, parler, le nez. Phrase: « J’aime parler. », I like talking.' },
        { label: 'SOUND 6 · [ɛ]', head: 'Spellings: è, ê, ai, ei', fr: 'la mère', sub: '[mair] · /mɛʁ/ · mother', body: 'Like e in bed. The jaw drops a little lower than for [e]. Also: la tête, mais, la neige. Phrase: « C’est ma mère. », that is my mother.' },
        { label: 'SOUND 7 · [o]', head: 'Spellings: o (word-final), ô, au, eau', fr: 'l’eau', sub: '[loh] · /lo/ · water', body: 'Like o in go, but pure: it never slides toward oo. Also: beau, le bateau, l’hôtel. Phrase: « L’eau est chaude. », the water is hot.' },
        { label: 'SOUND 8 · [ɔ]', head: 'Spelling: o before a spoken consonant', fr: 'la porte', sub: '[port] · /pɔʁt/ · door', body: 'Like o in sport: mouth more open than [o]. Also: bonne, fort, le téléphone. Phrase: « Bonne idée ! », good idea!' },
        { label: 'SOUND 9 · [ø]', head: 'Spellings: eu, œu (word-final)', fr: 'un peu', sub: '[uhn puh] · /pø/ · a little', body: 'Say [e] as in café, then round your lips. Lips rounded, mouth nearly closed. Also: deux, le feu, un vœu. Phrase: « Un peu, s’il vous plaît. », a little, please.' },
        { label: 'SOUND 10 · [œ]', head: 'Spellings: eu, œu before a spoken consonant', fr: 'la peur', sub: '[puhr] · /pœʁ/ · fear', body: 'Same lip rounding as [ø], but the jaw drops: more open. Also: la sœur, l’heure, la fleur. Phrase: « Quelle heure est-il ? », what time is it?' },
        { label: 'SOUND 11 · [ə]', head: 'Spelling: e (unaccented)', fr: 'le', sub: '[luh] · /lə/ · the', body: 'The weak uh of "the" in "the cat". Never stressed, often dropped in fast speech. Also: petit, demain. Phrase: « le petit chat », the little cat.' },
        { label: 'SOUND 12 · [wa]', head: 'Spellings: oi, oî', fr: 'moi', sub: '[mwah] · /mwa/ · me', body: 'A w gliding into [a], like wa in watt. One syllable, not two vowels. Also: trois, la voiture, le soir. Phrase: « Moi, je prends trois croissants. », me, I will take three croissants.' },
      ],
      say:
        'Here are all twelve sounds, one per card. For each one: tap the French word, listen, and say it back once. The order runs from the easy friends, ah and ee, to the three that need real work: the French u, and the closed and open eu.',
    },
    {
      type: 'tapTable',
      title: 'All 12 at a glance',
      cols: ['Sound', 'Spellings', 'Example'],
      rows: [
        { cells: ['[a]', 'a, à, â', 'chat'], say: 'le chat' },
        { cells: ['[i]', 'i, î, y', 'ici'], say: 'ici' },
        {
          cells: ['[y]', 'u, û', 'tu'],
          say: 'tu',
          detail: {
            title: 'How to make [y], step by step',
            body:
              '1. Say a long eeeee and hold it.\n2. Freeze your tongue. Do not let it move back.\n3. Slowly round your lips into a small oo circle.\n4. The sound that comes out is [y].\n\nCheck yourself with a finger on your lips: for [u] (ou) the lips push forward and the tongue pulls back; for [y] (u) the lips round but the tongue stays forward, as in ee. The feeling is strange at first because English never uses this mouth position. That discomfort is a good sign: it means you are producing a genuinely new sound instead of substituting an English one.',
            say: 'tu, su, vu, la rue, sûr, une minute',
          },
        },
        { cells: ['[u]', 'ou, où', 'vous'], say: 'vous' },
        { cells: ['[e]', 'é, -er, -ez', 'café'], say: 'le café' },
        { cells: ['[ɛ]', 'è, ê, ai, ei', 'mère'], say: 'la mère' },
        {
          cells: ['[o]', 'o, ô, au, eau', 'eau'],
          say: 'l’eau',
          detail: {
            title: 'Closed [o] or open [ɔ]? One position rule',
            body:
              'Closed [o] at the end of a word or before a silent consonant: mot, vélo, beau, gros. Closed [o] always for ô, au, eau: hôtel, aussi, château. Open [ɔ] before a spoken consonant: porte, bonne, fort, école.\n\nTest word: if it rhymes with beau, it is closed [o]. If the O is followed by a consonant you can hear, it is open [ɔ].',
            say: 'le mot, molle, beau, bonne, nos, la note',
          },
        },
        { cells: ['[ɔ]', 'o + consonant', 'porte'], say: 'la porte' },
        {
          cells: ['[ø]', 'eu, œu (final)', 'peu'],
          say: 'un peu',
          detail: {
            title: 'The two EU sounds',
            body:
              'Both are rounded. The difference is how open your mouth is.\n\nClosed [ø]: at the end of a word, or before a [z] sound: peu, deux, feu, vœu, heureuse.\nOpen [œ]: before any other spoken consonant: peur, sœur, heure, fleur, seul.\n\nA pair to test yourself: ceux [sø] (those) versus sœur [sœʁ] (sister). If the two sound identical when you say them, your jaw is not opening for the second one.',
            say: 'un peu, la peur, ceux, la sœur, deux, l’heure',
          },
        },
        { cells: ['[œ]', 'eu, œu + consonant', 'peur'], say: 'la peur' },
        {
          cells: ['[ə]', 'e (weak)', 'le'],
          say: 'le',
          detail: {
            title: 'The schwa [ə], the disappearing vowel',
            body:
              'The unaccented e is the weakest sound in French. Two rules:\n\n1. Never stress it. petit is [puh-TEE], not [PEH-tee].\n2. Fast speech drops it. petit becomes p’tit, samedi becomes sam’di, je te becomes j’te.\n\nYou do not need to drop schwas yourself yet. You do need to recognise words when native speakers drop them.',
            say: 'petit, p’tit, samedi, sam’di',
          },
        },
        {
          cells: ['[wa]', 'oi, oî', 'moi'],
          say: 'moi',
          detail: {
            title: 'OI is one syllable',
            body:
              'oi is always [wa], one syllable: moi, toi, trois, boire, noir, soir, roi, mois, étoile, voiture.\n\nWatch the neighbours: oui is [wi] (ou plus i), and lui, huit, nuit use a different, tighter glide.',
            say: 'moi, trois, boire, noir, le soir, une étoile',
          },
        },
      ],
      say:
        'The whole system on one card. Tap any row to hear its example, and tap the marked rows for the full story: how to build the French u, the one rule that splits closed and open o, the two eu sounds, and the disappearing e.',
    },
    {
      type: 'teach',
      title: 'U or OU: train this one first',
      body:
        'English has one oo sound. French has two: [u] (ou, as in vous) and [y] (u, as in tu). An untrained ear files both under the same English oo. That is not a lack of effort: your brain sorts sounds into the categories of your native language, and if a category is missing, the sound gets filed in the nearest box.\n\nThe fix is minimal-pair training: listen to two words that differ only in this vowel, until the difference becomes obvious. A few minutes a day is enough. Most learners hear the contrast clearly within a few weeks, and at some point it flips from invisible to almost comically obvious.',
      say:
        'Here is why u and ou feel impossible at first. Your brain files every sound into the boxes of your native language, and English only has one oo box, so tu and tout land in the same one. The fix is minimal-pair training: two words, one vowel apart, over and over, until the contrast becomes obvious. It takes minutes a day and a few weeks of patience.',
    },
    {
      type: 'hacks',
      title: 'Train your mouth',
      hacks: [
        { hack: 'Finger on your lips.', why: 'For [u] (ou) the lips push forward and the tongue pulls back. For [y] (u) the lips round but the tongue stays forward, as in ee. If your finger feels the same thing for both, the tongue is not moving.' },
        { hack: 'Build [y] from ee, never from oo.', why: 'Say ee, freeze the tongue, round the lips. Starting from oo drags the tongue back and gives you ou. Starting from ee keeps the tongue forward, which is exactly where [y] needs it.' },
        { hack: 'Welcome the weird feeling.', why: 'The [y] mouth position does not exist in English, so it feels strange. That discomfort means you are making a genuinely new sound rather than substituting an old one.' },
        { hack: 'Recognition first, production later.', why: 'For the dropped e of fast speech (p’tit, sam’di, j’sais pas), your only job today is to recognise the words when natives shrink them. Producing them will come on its own.' },
      ],
      say:
        'Four training hacks. Put a finger on your lips: ou pushes forward, u rounds while the tongue stays put. Always build the French u from ee, never from oo. And if the position feels strange, good: that is what a brand-new sound is supposed to feel like.',
    },
    {
      type: 'examples',
      title: 'Eight pairs, one vowel apart',
      examples: [
        { fr: 'tu · tout', en: 'you · everything', note: '[ty] vs [tu]. Tongue forward for tu, tongue back for tout.' },
        { fr: 'la rue · la roue', en: 'street · wheel', note: '[ʁy] vs [ʁu]. Same R, only the vowel changes.' },
        { fr: 'su · sous', en: 'known · under', note: '[sy] vs [su].' },
        { fr: 'bu · la boue', en: 'drunk · mud', note: '[by] vs [bu]. Order a drink, not a puddle.' },
        { fr: 'vu · vous', en: 'seen · you', note: '[vy] vs [vu].' },
        { fr: 'du · doux', en: 'some · soft', note: '[dy] vs [du].' },
        { fr: 'dessus · dessous', en: 'on top · underneath', note: '[dəsy] vs [dəsu]. Two opposites, one vowel apart.' },
        { fr: 'le jus · la joue', en: 'juice · cheek', note: '[ʒy] vs [ʒu].' },
      ],
      say:
        'Eight minimal pairs, each cut by the single u versus ou contrast. Tap each pair, listen, then say both words with a clear gap between the two vowels. The last pair is the famous one: dessus, on top, dessous, underneath. Two exact opposites separated by one vowel.',
    },
    {
      type: 'commonErrors',
      title: 'Vowel slips that change the word',
      errors: [
        { wrong: 'le cul [kew] for neck', right: 'le cou [koo]', why: 'Cou with [u] is the neck; the [y] version is vulgar. Say "I have a sore neck" with the wrong vowel and you get a laugh you did not plan.' },
        { wrong: 'le jus for the cheek', right: 'la joue', why: 'Same mechanism, lower stakes: jus [ʒy] is juice, joue [ʒu] is cheek.' },
        { wrong: 'dessus when you mean under', right: 'dessous', why: 'Dessus [dəsy] is on top, dessous [dəsu] is underneath. Directions, furniture, prices: this pair does real work in daily life.' },
        { wrong: 'la peur said as pur', right: 'la peur [pœʁ]', why: 'Pur [pyʁ] means pure, a different word with the [y] vowel. Fear needs the open, rounded [œ].' },
        { wrong: 'tous the pronoun said as [tu]', right: '« Ils viennent tous » with [tus]', why: 'When tous stands alone as a pronoun, the S sounds: [tus]. The word tout is [tu].' },
      ],
      say:
        'Five slips worth knowing early. The cou and cul pair is the one that gets travellers laughed at: neck takes ou. Jus and joue, juice and cheek, split the same way. And when tous stands alone as a pronoun, the final S sounds: ils viennent tous.',
    },
    {
      type: 'teach',
      title: 'Open or closed: one position rule',
      body:
        'Three more contrasts work on a single dimension: how far your jaw drops.\n\né [e] closed versus è [ɛ] open. o [o] closed versus o [ɔ] open. eu [ø] closed versus eu [œ] open.\n\nOne position rule covers most cases: closed at the end of a word, open before a spoken consonant. beau [bo] ends the word, so it is closed. bonne [bɔn] has an audible N after, so it is open.\n\nThe accents show you the mouth for E: é means closed, slight smile (été, café, parler, nez); è and ê mean open, jaw drops (mère, très, tête), and ai and ei are open too (mais, la neige). Some regions blur é and è in some positions; you will still be understood, but learn the distinction, because it carries grammar later: parlé versus parlais.',
      say:
        'Three contrasts, one dimension: how far the jaw drops. Closed at the end of a word, open before a spoken consonant. Beau ends the word: closed. Bonne has an audible n after: open. For e, the accents are the map: é closed, è open. And this pair carries grammar later, parlé versus parlais, so it is worth learning now.',
    },
    {
      type: 'tapTable',
      title: 'Closed or open, pair by pair',
      cols: ['Closed', 'Open', 'The move'],
      rows: [
        {
          cells: ['les [le]', 'lait [lɛ]', 'jaw drops'],
          say: 'les ... le lait',
          detail: {
            title: 'Endings that are always [e] or [ɛ]',
            body: 'Always closed [e]: final -er (parler), -ez (vous parlez), -é (café), and the words et, les, des, ces.\nAlways open [ɛ]: è, ê, and the spellings ai and ei (mais, neige), plus the endings -ais and -ait (je parlais).',
            say: 'parler, vous parlez, et, les ... mais, la neige, je parlais',
          },
        },
        { cells: ['été [ete]', 'très [tʁɛ]', 'jaw drops twice in été, once in très'], say: 'l’été ... très' },
        { cells: ['beau [bo]', 'bonne [bɔn]', 'the N opens the O'], say: 'beau ... bonne' },
        { cells: ['mot [mo]', 'molle [mɔl]', 'the L opens the O'], say: 'le mot ... molle' },
        { cells: ['nos [no]', 'note [nɔt]', 'the T opens the O'], say: 'nos ... la note' },
        { cells: ['peu [pø]', 'peur [pœʁ]', 'same rounded lips, jaw drops for the R'], say: 'un peu ... la peur' },
        { cells: ['ceux [sø]', 'sœur [sœʁ]', 'if they sound the same, the jaw is not opening'], say: 'ceux ... la sœur' },
        {
          cells: ['jeûne [ʒøn]', 'jeune [ʒœn]', 'a rare true pair'],
          say: 'jeûne ... jeune',
          detail: {
            title: 'jeûne vs jeune',
            body: 'jeûne (a fast, no food) is closed [ø]; jeune (young) is open [œ]. A rare pair, but it proves the two EU sounds really are different words, not two accents of one sound.',
            say: 'le jeûne ... jeune',
          },
        },
      ],
      say:
        'Every row is the same move: the closed vowel on the left, the open one on the right, and the consonant that forces the jaw down. Tap each row and listen for the drop. If a pair sounds identical when you repeat it, your jaw is not opening on the second word.',
    },
    {
      type: 'tapTable',
      title: 'You see it, you say it',
      cols: ['You see', 'You say', 'Examples'],
      rows: [
        { cells: ['a, à', '[a]', 'la, à, chat'], say: 'le chat' },
        { cells: ['i, î, y', '[i]', 'lit, île, stylo'], say: 'le lit' },
        { cells: ['u, û', '[y]', 'rue, sûr'], say: 'la rue' },
        { cells: ['ou, où', '[u]', 'nous, où'], say: 'nous' },
        { cells: ['é, -er, -ez', '[e]', 'été, parler, nez'], say: 'l’été' },
        {
          cells: ['è, ê, ai, ei', '[ɛ]', 'mère, tête, mais, neige'],
          say: 'la neige',
          detail: {
            title: 'The open-E family and two lookalikes',
            body:
              'è, ê, ai, ei, -ais, -ait are all [ɛ]: très, tête, mais, neige, je parlais.\n\nTwo lookalikes with a tréma (the two dots) split into separate vowels: maïs (corn) is [ma-is], two sounds, unlike mais (but), which is [mɛ]; naïf is [na-if]; Noël is [nɔ-ɛl].',
            say: 'mais ... maïs ... Noël',
          },
        },
        { cells: ['o (final), ô', '[o]', 'mot, vélo, hôtel'], say: 'le mot' },
        {
          cells: ['au, eau', '[o]', 'aussi, eau'],
          say: 'l’eau',
          detail: {
            title: 'The EAU family',
            body:
              'Three letters, one sound: eau is always [o]. So are au and ô. l’eau, beau, bateau, château, cadeau, gâteau, chapeau, manteau all end in the identical clean [o].\n\nEnglish speakers tend to read the letters separately, ee-ay-oo. Resist it; the group is a single unit.',
            say: 'l’eau, beau, le bateau, le château, le cadeau, le gâteau',
          },
        },
        { cells: ['o + consonant', '[ɔ]', 'porte, sommes'], say: 'la porte' },
        { cells: ['eu, œu (final)', '[ø]', 'peu, vœu'], say: 'un peu' },
        { cells: ['eu, œu + cons.', '[œ]', 'peur, sœur'], say: 'la peur' },
        { cells: ['e (weak)', '[ə]', 'le, petit'], say: 'petit' },
        {
          cells: ['oi, oî', '[wa]', 'moi, trois'],
          say: 'trois',
          detail: {
            title: 'The OI family',
            body:
              'oi is [wa], one syllable: moi, toi, trois, boire, noir, soir, roi, mois, étoile, voiture.\n\nWatch the neighbours: oui is [wi], and lui, huit, nuit use a different, tighter glide.',
            say: 'oui ... lui ... huit',
          },
        },
      ],
      say:
        'French spelling looks irregular, but the vowel spellings are reliable: each combination maps to one sound, plus the open-closed position rule you already know. Learn this map and you can read any word you meet out loud. Tap the marked rows for the eau family, the oi family, and the tréma lookalikes.',
    },
    {
      type: 'steps',
      title: 'The sentence ladder',
      steps: [
        'Rung 1: « J’aime le café. » I like coffee. Three vowels: [ɛ] in aime, [ə] in le, [e] twice in café.',
        'Rung 2: « J’aime le café au lait. » Adds [o] in au and [ɛ] in lait.',
        'Rung 3: « J’aime beaucoup le café au lait. » Adds [o] and [u] inside beaucoup.',
        'Rung 4: « Tous les matins, j’aime beaucoup le café au lait. » Adds [u] in tous and [e] in les.',
        'Rung 5: « Tous les matins, j’aime beaucoup le café au lait que tu prépares. » Adds [y] in tu. Tous is [u], tu is [y]: the full workout in one sentence.',
      ],
      say:
        'One idea, liking coffee, grows one rung at a time. Say each rung out loud before moving up. By the top rung you are steering almost every vowel in the system, and the last addition matters most: tous with ou at the start, tu with the French u near the end.',
    },
    {
      type: 'audio',
      title: 'The ladder, out loud',
      lines: [
        'J’aime le café.',
        'J’aime le café au lait.',
        'J’aime beaucoup le café au lait.',
        'Tous les matins, j’aime beaucoup le café au lait.',
        'Tous les matins, j’aime beaucoup le café au lait que tu prépares.',
      ],
      say:
        'Here is the ladder spoken. Tap each rung, listen once, then say it back keeping every vowel short and clean. On the top rung, listen for the two different oo sounds: tous at the start is the dark ou, tu near the end is the bright French u.',
    },
    {
      type: 'cardDeck',
      title: 'Pattern bank: swap the word, keep the vowel',
      hint: 'Each card drills one vowel inside a frame you can reuse',
      cards: [
        { label: '[y] · TU', fr: 'Tu bois ? Tu manges ? Tu viens ?', sub: 'you drink? you eat? you coming?', body: 'The frame « Tu ... ? » puts the French u at the start of every casual question you will ever ask.' },
        { label: '[u] · VOUS', fr: 'Vous voulez ? Vous pouvez ? Vous savez ?', sub: 'you want? you can? you know?', body: 'The polite frame « Vous ... ? » anchors the dark [u]. Tu forward, vous back.' },
        { label: '[e] · J’AIME + -ER', fr: 'J’aime parler. J’aime manger. J’aime danser.', sub: 'I like talking, eating, dancing', body: 'Every -er ending is the closed [e], no glide. One frame, endless verbs.' },
        { label: '[ɛ] · C’EST MA ...', fr: 'C’est ma mère. C’est ma tête. C’est ma fête.', sub: 'my mother, my head, my party', body: 'The open [ɛ] three times per sentence: c’est, plus the è or ê inside the noun.' },
        { label: '[o] · UN ... -EAU', fr: 'un château, un bateau, un cadeau', sub: 'a castle, a boat, a gift', body: 'The eau family: three letters, one clean closed [o], every time.' },
        { label: '[ø] · UN PEU DE ...', fr: 'un peu de pain, un peu d’eau, un peu de temps', sub: 'a little bread, water, time', body: 'Peu is the closed [ø]: lips rounded, mouth nearly shut. The politest word in the café.' },
        { label: '[wa] · MOI, TOI, TROIS', fr: 'Toi, s’il te plaît. Trois, s’il vous plaît. Moi d’abord !', sub: 'you please, three please, me first', body: 'The [wa] glide in the words you use to order, point, and volunteer.' },
        { label: 'U / OU DUEL', fr: 'tu ou tout ? rue ou roue ? su ou sous ?', sub: 'you or everything? street or wheel?', body: 'Say each duel out loud with a clear gap between the two vowels. If they blur, go back to the finger-on-lips check.' },
      ],
      say:
        'Eight reusable frames, one vowel each. Say every card out loud, then invent one more line of your own inside the same frame. The last card is the duel: tu or tout, rue or roue, said back to back until the gap is obvious.',
    },
    {
      type: 'table',
      title: 'The disappearing E',
      cols: ['Written', 'Spoken fast'],
      rows: [
        ['je ne sais pas', 'j’sais pas'],
        ['petit', 'p’tit'],
        ['samedi', 'sam’di'],
        ['tu as / tu es', 't’as / t’es'],
        ['il y a', 'y a'],
        ['parce que', 'pasque'],
        ['je suis', 'j’suis'],
      ],
      say:
        'Written French keeps every e. Spoken French drops the weak ones. Je ne sais pas becomes j’sais pas, petit becomes p’tit, samedi becomes sam’di. You do not need to talk like this yet. You do need to recognise these words when native speakers shrink them, because they will, in the very first real conversation you have.',
    },
    {
      type: 'vocabThemes',
      title: 'Core thirty, by vowel',
      themes: [
        {
          title: '[a] and [i]: the easy friends',
          cards: [
            { fr: 'le chat', sub: '[luh sha] · /ʃa/', en: 'cat' },
            { fr: 'la table', sub: '[la TAH-bluh] · /tabl/', en: 'table' },
            { fr: 'ici', sub: '[ee-SEE] · /isi/', en: 'here' },
            { fr: 'le lit', sub: '[luh lee] · /li/', en: 'bed' },
          ],
        },
        {
          title: '[y]: the French u',
          cards: [
            { fr: 'tu', sub: '[tew] · /ty/', en: 'you (informal)' },
            { fr: 'la rue', sub: '[la rew] · /ʁy/', en: 'street' },
            { fr: 'une minute', sub: '[ewn mee-NEWT] · /mi.nyt/', en: 'minute' },
            { fr: 'sûr', sub: '[sewr] · /syʁ/', en: 'sure' },
          ],
        },
        {
          title: '[u]: the dark ou',
          cards: [
            { fr: 'vous', sub: '[voo] · /vu/', en: 'you (formal, plural)' },
            { fr: 'nous', sub: '[noo] · /nu/', en: 'we' },
            { fr: 'le jour', sub: '[luh zhoor] · /ʒuʁ/', en: 'day' },
            { fr: 'beaucoup', sub: '[boh-KOO] · /bo.ku/', en: 'a lot' },
          ],
        },
        {
          title: '[e]: closed, no glide',
          cards: [
            { fr: 'le café', sub: '[ka-FAY] · /ka.fe/', en: 'coffee' },
            { fr: 'l’été', sub: '[lay-TAY] · /e.te/', en: 'summer' },
            { fr: 'parler', sub: '[par-LAY] · /paʁ.le/', en: 'to speak' },
            { fr: 'le nez', sub: '[luh nay] · /ne/', en: 'nose' },
          ],
        },
        {
          title: '[ɛ]: open, jaw down',
          cards: [
            { fr: 'la mère', sub: '[la mair] · /mɛʁ/', en: 'mother' },
            { fr: 'la tête', sub: '[la tet] · /tɛt/', en: 'head' },
            { fr: 'mais', sub: '[meh] · /mɛ/', en: 'but' },
            { fr: 'le lait', sub: '[luh leh] · /lɛ/', en: 'milk' },
          ],
        },
        {
          title: '[o] and [ɔ]: the two O sounds',
          cards: [
            { fr: 'l’eau', sub: '[loh] · /lo/', en: 'water' },
            { fr: 'beau', sub: '[boh] · /bo/', en: 'beautiful' },
            { fr: 'le bateau', sub: '[luh ba-TOH] · /ba.to/', en: 'boat' },
            { fr: 'la porte', sub: '[la port] · /pɔʁt/', en: 'door' },
            { fr: 'bonne', sub: '[bun] · /bɔn/', en: 'good (f.)' },
          ],
        },
        {
          title: '[ø] and [œ]: the two EU sounds',
          cards: [
            { fr: 'un peu', sub: '[uhn puh] · /pø/', en: 'a little' },
            { fr: 'deux', sub: '[duh] · /dø/', en: 'two' },
            { fr: 'la peur', sub: '[la puhr] · /pœʁ/', en: 'fear' },
            { fr: 'la sœur', sub: '[la suhr] · /sœʁ/', en: 'sister' },
            { fr: 'l’heure', sub: '[luhr] · /œʁ/', en: 'hour, time' },
          ],
        },
        {
          title: '[ə] and [wa]: the weak e and the glide',
          cards: [
            { fr: 'le', sub: '[luh] · /lə/', en: 'the (m.)' },
            { fr: 'petit', sub: '[puh-TEE] · /pə.ti/', en: 'small' },
            { fr: 'moi', sub: '[mwah] · /mwa/', en: 'me' },
            { fr: 'trois', sub: '[trwah] · /tʁwa/', en: 'three' },
            { fr: 'la voiture', sub: '[la vwa-TEWR] · /vwa.tyʁ/', en: 'car' },
            { fr: 'le soir', sub: '[luh swahr] · /swaʁ/', en: 'evening' },
          ],
        },
      ],
      say:
        'The core thirty, grouped by the vowel each one drills. Tap any word to hear it. All of them live in your review deck from today, so a few minutes of daily flashcards keeps every sound warm between lessons.',
    },
    {
      type: 'flashcards',
      title: 'The 15 minimal pairs',
      cards: [
        { front: 'tu ↔ tout', back: '[ty] you ↔ [tu] everything', say: 'tu ... tout' },
        { front: 'rue ↔ roue', back: '[ʁy] street ↔ [ʁu] wheel', say: 'la rue ... la roue' },
        { front: 'su ↔ sous', back: '[sy] known ↔ [su] under', say: 'su ... sous' },
        { front: 'bu ↔ boue', back: '[by] drunk ↔ [bu] mud', say: 'bu ... la boue' },
        { front: 'du ↔ doux', back: '[dy] some ↔ [du] soft', say: 'du ... doux' },
        { front: 'vu ↔ vous', back: '[vy] seen ↔ [vu] you', say: 'vu ... vous' },
        { front: 'pu ↔ pou', back: '[py] been able ↔ [pu] louse', say: 'pu ... le pou' },
        { front: 'dessus ↔ dessous', back: '[dəsy] on top ↔ [dəsu] underneath', say: 'dessus ... dessous' },
        { front: 'peu ↔ peur', back: '[pø] little ↔ [pœʁ] fear', say: 'un peu ... la peur' },
        { front: 'ceux ↔ sœur', back: '[sø] those ↔ [sœʁ] sister', say: 'ceux ... la sœur' },
        { front: 'les ↔ lait', back: '[le] the (pl.) ↔ [lɛ] milk', say: 'les ... le lait' },
        { front: 'été ↔ était', back: '[ete] summer ↔ [etɛ] was', say: 'l’été ... était' },
        { front: 'beau ↔ bonne', back: '[bo] handsome ↔ [bɔn] good (f.)', say: 'beau ... bonne' },
        { front: 'mot ↔ molle', back: '[mo] word ↔ [mɔl] soft (f.)', say: 'le mot ... molle' },
        { front: 'nos ↔ note', back: '[no] our ↔ [nɔt] note', say: 'nos ... la note' },
      ],
      say:
        'These fifteen pairs are the point of the whole lesson: each one is two real words separated by one vowel. Flip through them daily until every pair sounds obviously different. The first seven train u against ou, the rest train closed against open.',
    },
    {
      type: 'useCases',
      title: 'Vowels in the wild',
      cases: [
        { situation: 'At the bakery, the baker asks « Vous voulez quoi ? »', fr: 'Un pain, s’il vous plaît.', en: 'A loaf, please. Keep vous on the dark [u].' },
        { situation: 'The waiter asks « Avec du sucre ? »', fr: 'Un peu, merci.', en: 'A little, thank you. Peu is the closed [ø], not peur.' },
        { situation: 'The barista asks « Sur place ou à emporter ? »', fr: 'Sur place.', en: 'For here. Sur is [y]; sous, with [u], means under.' },
        { situation: 'You ask for la rue Victor Hugo and get directions', fr: 'C’est tout droit, au bout de la rue.', en: 'It is straight ahead, at the end of the street.' },
        { situation: 'Someone asks « Au-dessus ou au-dessous du pont ? »', fr: 'Au-dessous, sous le pont.', en: 'Below, under the bridge. The [u] in dessous points down.' },
        { situation: 'Camille asks « Tu viens ce soir ou pas ? »', fr: 'Oui, je viens vers huit heures. À tout à l’heure !', en: 'Yes, around eight. See you soon! Tout is [u], heure is the open [œ].' },
      ],
      say:
        'Six real moments where one vowel does the work: ordering bread, refusing sugar, staying in the café, following directions, and making evening plans. Say each French reply out loud as if the person is in front of you.',
    },
    {
      type: 'audio',
      title: 'Marie’s mornings, line by line',
      lines: [
        'Marie aime le café.',
        'Tous les jours, elle boit un café au lait.',
        'Le matin, elle dit : « Tu veux un peu d’eau aussi ? »',
        'Son frère Thomas répond : « Oui, un peu, s’il te plaît. »',
        'Ils sont deux à table.',
        'Marie aime la vie simple : le café, l’eau, le pain, et un peu de musique.',
        'C’est tout. C’est beau.',
      ],
      say:
        'A first real text, seven short lines about Marie and her coffee. Tap each line, listen, then read it aloud yourself. Every target vowel of the lesson appears at least once, and the closing line hands you two clean closed sounds: c’est tout, c’est beau.',
    },
    {
      type: 'practice',
      title: 'Speaking drills',
      skill: 'speak',
      itemIds: [
        IDS.tu, IDS.tout, IDS.rue, IDS.roue, IDS.dessus, IDS.dessous,
        IDS.peu, IDS.peur, IDS.deux, IDS.soeur, IDS.eau, IDS.bonne,
      ],
      say:
        'Speaking drills. Tap each word to hear it, say it out loud, then grade yourself: got it, or missed it. The list alternates the pairs on purpose: tu then tout, rue then roue, dessus then dessous, peu then peur. Your answers feed your review deck, so grade yourself accurately.',
    },
    {
      type: 'practice',
      title: 'Ear training',
      skill: 'listen',
      itemIds: [
        IDS.bu, IDS.boue, IDS.vu, IDS.vous, IDS.du, IDS.doux,
        IDS.jus, IDS.joue, IDS.les, IDS.lait, IDS.mot, IDS.molle,
      ],
      say:
        'Now ears only. Play each word without looking if you can, decide which vowel you heard, then check. These are the pairs that fool an English-trained ear the longest: bu and boue, vu and vous, jus and joue, les and lait, mot and molle.',
    },
    {
      type: 'cheatSheet',
      title: 'Pocket rules',
      rows: [
        { k: 'Pure, short, steady', v: 'Every French vowel is one clean note. If it glides, it has become English.' },
        {
          k: 'u vs ou', v: 'u = [y]: tongue forward as in ee, lips rounded. ou = [u]: tongue back, lips pushed out.',
          detail: { title: 'Build [y] from ee', body: 'Say ee, freeze the tongue, round the lips. Check with a finger: ou pushes the lips forward, u rounds them while the tongue stays put.', say: 'tu ... tout' },
        },
        { k: 'é vs è', v: 'é is closed [e]: été, parler, nez. è, ê, ai, ei are open [ɛ]: mère, tête, mais.' },
        {
          k: 'The two O sounds', v: 'Closed [o] word-final and for ô, au, eau. Open [ɔ] before a spoken consonant.',
          detail: { title: 'The beau test', body: 'If it rhymes with beau, it is closed [o]. If a consonant sounds after the O, it opens: porte, bonne, molle, note.', say: 'beau ... bonne' },
        },
        { k: 'The two EU sounds', v: 'Closed [ø] word-final: peu, deux. Open [œ] before a consonant: peur, sœur, heure.' },
        { k: 'The weak e', v: '[ə] is never stressed and often dropped: petit becomes p’tit, samedi becomes sam’di.' },
        { k: 'oi', v: 'Always [wa], one syllable: moi, trois, soir, voiture. But oui is [wi].' },
      ],
      say:
        'Your pocket rules. Pure, short, steady. Build the u from ee, never from oo. Closed at the end of a word, open before a spoken consonant, for e, o and eu alike. And oi is always wa, one syllable.',
    },
    {
      type: 'roundup',
      title: 'Round-up',
      body:
        'Bravo! You just took apart the entire French vowel system: twelve oral sounds, four contrasts that change meaning, and a spelling map that lets you read any vowel you meet. One short quiz stands between you and the nasal vowels.',
      points: [
        'Every French vowel is pure, short and steady: one clean note, no glide.',
        'u [y] and ou [u] are different words waiting to happen: tu/tout, rue/roue, dessus/dessous.',
        'To build [y]: say ee, freeze the tongue, round the lips.',
        'Closed at the end of a word, open before a spoken consonant: beau/bonne, peu/peur, les/lait.',
        'The accents are the map for E: é closed, è and ê open, ai and ei open too.',
        'eau, au and ô are always the same closed [o]; oi is always [wa], one syllable.',
        'The weak e disappears in fast speech: p’tit, sam’di, j’sais pas. Recognise it now, produce it later.',
        'Fifteen minimal pairs live in your review deck. A few minutes a day and the contrast becomes obvious within weeks.',
      ],
      say:
        'Bravo! Twelve sounds, four meaning-changing contrasts, one spelling map. Remember the master rule: pure, short, steady. Keep the fifteen pairs in daily review, and when dessus and dessous sound like completely different words, you will know your ear has crossed over. One quiz to go.',
    },
    {
      type: 'quiz',
      title: 'Quiz',
      questions: [
        { q: 'How is « tu » pronounced?', opts: ['[tu]', '[tə]', '[ty]', '[to]'], correct: 2, why: 'tu takes the French u: tongue forward, lips rounded. [tu] is tout.' },
        { q: 'How is « vous » pronounced?', opts: ['[vu]', '[vy]', '[vø]', '[vɔ]'], correct: 0, why: 'ou is always the dark [u]: tongue back, lips pushed forward.' },
        { q: 'The final é of « café » sounds like:', opts: ['[ɛ]', '[ə]', '[a]', '[e]'], correct: 3, why: 'é is the closed [e], with no glide toward ee.' },
        { q: 'The è of « mère » sounds like:', opts: ['[e]', '[ɛ]', '[ø]', '[a]'], correct: 1, why: 'è is the open [ɛ], jaw dropped, as in bed.' },
        { q: '« eau » is pronounced:', opts: ['one clean [o]', 'three separate vowels', '[ø]', '[wa]'], correct: 0, why: 'Three letters, one sound. eau, au and ô are always closed [o].' },
        { q: 'The difference between « peu » and « peur » is:', opts: ['there is none', '[u] vs [y]', 'closed [ø] vs open [œ]', '[e] vs [ɛ]'], correct: 2, why: 'Same rounded lips; the jaw drops for peur before the R.' },
        { q: '« dessus » ends with the sound:', opts: ['[u]', '[y]', '[ø]', '[o]'], correct: 1, why: 'dessus (on top) ends in [y]; dessous (underneath) ends in [u].' },
        { q: '« dessous » means:', opts: ['on top', 'next to', 'behind', 'underneath'], correct: 3, why: 'dessous is underneath; its twin dessus is on top.' },
        { q: '« moi » is pronounced:', opts: ['[mɔ-i]', '[mi]', '[mwa]', '[mo-a]'], correct: 2, why: 'oi is [wa] in one syllable, never two vowels.' },
        { q: 'A closed [o] appears in:', opts: ['porte', 'beau', 'bonne', 'molle'], correct: 1, why: 'beau ends the word, and -eau is always closed [o]. The others have a spoken consonant after the O.' },
        { q: 'An open [ɔ] appears in:', opts: ['porte', 'mot', 'beau', 'vélo'], correct: 0, why: 'The R and T after the O force it open. mot, beau and vélo end closed.' },
        { q: 'To produce [y] you need:', opts: ['lips spread wide', 'air through the nose', 'an open jaw', 'rounded lips with the tongue forward'], correct: 3, why: 'Say ee, freeze the tongue, round the lips. That combination is the whole sound.' },
        { q: '« lait » is pronounced:', opts: ['[le]', '[la]', '[lɛ]', '[laj]'], correct: 2, why: 'ai is the open [ɛ]. Compare les [le], which is closed.' },
        { q: '« les » is pronounced:', opts: ['[le]', '[lɛ]', '[lə]', '[laj]'], correct: 0, why: 'les is closed [e], like et, des and ces. lait is the open one.' },
        { q: 'The vowel of « sœur » is:', opts: ['[ø]', '[u]', '[œ]', '[wa]'], correct: 2, why: 'A consonant follows, so the eu opens: [sœʁ]. ceux, with nothing after, is closed [sø].' },
        { q: 'Which word contains the sound [y]?', opts: ['sous', 'rue', 'roue', 'tout'], correct: 1, why: 'rue is [ʁy]. sous, roue and tout all carry the dark [u].' },
        { q: 'You hear [ty]. Which word was said?', opts: ['tout', 'doux', 'tu', 'toux'], correct: 2, why: 'tu is [ty]; tout, doux and toux all use [u].' },
        { q: 'French vowels are:', opts: ['glided, like English', 'pure and short', 'always long', 'nasal by default'], correct: 1, why: 'One clean note: start it, hold it, stop it. The four nasal vowels are the next lesson.' },
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
          { voice: 'en', text: 'Welcome back. Today we open the engine room of French pronunciation: the twelve oral vowel sounds.' },
          { voice: 'en', text: 'Picture a café in Paris. Dessus means on top. Dessous means underneath. The only difference is one vowel, u versus ou. By the end of this lesson, that difference will be yours.' },
        ],
      },
      {
        stage: 'focus',
        segments: [
          { voice: 'en', text: 'One idea carries the whole lesson: French vowels are pure, short and steady. English vowels glide between two sounds; a French vowel is one clean note, held from start to finish.' },
          { voice: 'en', text: 'Our focus today: the twelve sounds, the four contrasts that change meaning, and the French u, a sound English does not have.' },
        ],
      },
      {
        stage: 'input',
        segments: [
          { voice: 'en', text: 'First, the famous contrast. The dark ou, tongue back, lips forward, then the bright French u, tongue forward as in ee, lips rounded. Listen:' },
          { voice: 'fr', text: 'tout ... tu' },
          { voice: 'en', text: 'Now the same contrast inside two opposites. On top, then underneath:' },
          { voice: 'fr', text: 'dessus ... dessous' },
          { voice: 'en', text: 'Next, closed against open. Same rounded lips, but the jaw drops for the second word. A little, then fear:' },
          { voice: 'fr', text: 'un peu ... la peur' },
          { voice: 'en', text: 'And the same jaw-drop with o. Beautiful, then good:' },
          { voice: 'fr', text: 'beau ... bonne' },
        ],
      },
      {
        stage: 'practice',
        segments: [
          { voice: 'en', text: 'Your turn. Say ee, freeze your tongue, round your lips, and give me the word for you:' },
          { voice: 'fr', text: 'tu' },
          { kind: 'repeat', itemId: 'fr.sons.voyelles.001', gradeAs: 'produce' },
          { voice: 'en', text: 'Now pull the tongue back and push the lips forward. Everything:' },
          { voice: 'fr', text: 'tout' },
          { kind: 'repeat', itemId: 'fr.sons.voyelles.002', gradeAs: 'produce' },
          { voice: 'en', text: 'And the closed eu, lips rounded, mouth nearly shut. A little:' },
          { voice: 'fr', text: 'un peu' },
          { kind: 'repeat', itemId: 'fr.sons.mots-essentiels.048', gradeAs: 'produce' },
        ],
      },
      {
        stage: 'produce',
        segments: [
          { voice: 'en', text: 'Now from memory. The cat is ON TOP of the box. Say on top, with the bright u at the end:' },
          { kind: 'produce', itemId: 'fr.sons.mots-essentiels.122', expected: 'dessus', gradeAs: 'produce' },
          { voice: 'en', text: 'Beautiful. Now hold up two fingers and say the number two, one clean closed eu:' },
          { kind: 'produce', itemId: 'fr.sons.voyelles.004', expected: 'deux', gradeAs: 'produce' },
        ],
      },
      {
        stage: 'check',
        segments: [
          { voice: 'en', text: 'Quick check. Which word means underneath: dessus, or dessous?' },
          { kind: 'check', expected: 'dessous', gradeAs: 'discriminate' },
          { voice: 'en', text: 'And you hear [ʁy]. Is that the street, rue, or the wheel, roue?' },
          { kind: 'check', expected: 'rue', gradeAs: 'recognise' },
        ],
      },
      {
        stage: 'cheat',
        segments: [
          { voice: 'en', text: 'Your cheat sheet: every French vowel is pure, short and steady. Build the u from ee, never from oo. Closed at the end of a word, open before a spoken consonant: beau then bonne, peu then peur, les then lait. eau is always one clean o, oi is always wa. And keep the fifteen pairs in your daily review until dessus and dessous sound like the different words they are.' },
          { voice: 'fr', text: 'Bravo, à bientôt !' },
        ],
      },
    ],
  },
};

// ── Runner ──────────────────────────────────────────────────────────────────

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
  if (authored.includes('—')) die('em dash found in authored copy — the house style bans it');
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
      `select body from content_units where kind = 'curriculum_unit' and body->>'id' = 'sons.02'`
    );
    if (unitRow.rowCount !== 1) die(`unit "sons.02" not found in content_units — cannot attach its lesson`);
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

    console.log(`\n  new items: ${NEW_ITEMS.length} (fr.sons.voyelles.451-466)`);
    console.log(`  reused items: ${reused.length}, all resolved as published`);
    console.log(
      `  lesson: ${LESSON.id} "${LESSON.title}" — ${existingLesson.rowCount ? 'UPGRADING in place (v2)' : 'NEW'}, ` +
      `${LESSON.sections.length} sections, ${ITEM_IDS.length} itemIds, narration: ${LESSON.narration ? 'yes' : 'no'}`
    );
    console.log(`  unit sons.02 lessonIds: ${JSON.stringify(unitBody.lessonIds ?? [])} → ${JSON.stringify(nextUnit.lessonIds)}`);

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
        where kind = 'curriculum_unit' and body->>'id' = 'sons.02'`,
      [JSON.stringify(nextUnit)]
    );
    if (res.rowCount !== 1) {
      await client.query('rollback');
      die(`unit update touched ${res.rowCount} rows — rolled back, nothing changed`);
    }

    await client.query('commit');
    console.log(
      `\n✓ voyelles batch applied: ${NEW_ITEMS.length} items + lesson ${LESSON.id} v2 published in the management plane. ` +
      `Run pnpm content:publish to ship it OTA (check git diff on seed.json first).\n`
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
