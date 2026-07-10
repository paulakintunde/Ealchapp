// Extended lessons ported 1:1 from the prototype (sons3, a1_4, a2_1).

export type TableCell = { v: string; h?: boolean };
export type Example = { fr: string; en: string };
export type CommonError = { wrong: string; right: string; why: string };
export type QuizQ = { q: string; opts: string[]; correct: number };

export type Lesson = {
  tag: string;
  title: string;
  level: string;
  intro: string;
  unique: 'nasal' | null;
  video: boolean;
  tableCols: number; // number of columns
  table: TableCell[];
  examples: Example[];
  errors: CommonError[];
  audio: string[];
  subs: string[] | null;
  quiz: QuizQ[];
};

export const lessons: Record<string, Lesson> = {
  sons3: {
    tag: 'SONS · LEÇON 03',
    title: 'Les voyelles nasales',
    level: 'PRONONCIATION',
    intro:
      'Four sounds with no English equivalent. The air escapes through the nose — the n or m is never pronounced as a consonant. Master these and you instantly sound less foreign.',
    unique: 'nasal',
    video: true,
    tableCols: 3,
    table: [
      { v: 'Spelling', h: true }, { v: 'Sound', h: true }, { v: 'Example', h: true },
      { v: 'on · om' }, { v: 'ɔ̃' }, { v: 'bon, nom' },
      { v: 'en · an · em' }, { v: 'ɑ̃' }, { v: 'vent, blanc' },
      { v: 'in · ain · ein' }, { v: 'ɛ̃' }, { v: 'vin, pain' },
      { v: 'un · um' }, { v: 'œ̃' }, { v: 'un, parfum' },
    ],
    examples: [
      { fr: 'Un bon vin blanc', en: 'A good white wine — all four nasals in one phrase' },
      { fr: 'Mon oncle a onze ans', en: 'My uncle is eleven — chained ɔ̃ sounds' },
    ],
    errors: [
      { wrong: 'bon → " bonne "', right: 'bon = bɔ̃ (no n sound)', why: 'Pronouncing the n turns the nasal into an oral vowel + consonant — the single most-heard beginner error.' },
      { wrong: 'vin = " veen "', right: 'vin = vɛ̃', why: 'English speakers close the vowel. Keep the mouth open, push air through the nose.' },
    ],
    audio: ['Un bon vin blanc', 'Mon oncle adore le parfum', 'Le pain est en train de cuire'],
    subs: null,
    quiz: [
      { q: 'Which word contains the sound ɔ̃ ?', opts: ['vin', 'nom', 'vent'], correct: 1 },
      { q: 'In « un bon vin blanc », how many DIFFERENT nasal vowels appear?', opts: ['2', '3', '4'], correct: 2 },
      { q: 'The n in a nasal vowel is…', opts: ['pronounced softly', 'never pronounced', 'pronounced at the end'], correct: 1 },
    ],
  },
  a1_4: {
    tag: 'A1 · LEÇON 04',
    title: 'Les articles définis',
    level: 'A1 — DÉCOUVERTE',
    intro:
      'French has four ways to say « the », and the choice depends on the noun’s gender, number, and first letter. There is no way around them — every noun you ever use will need one.',
    unique: null,
    video: false,
    tableCols: 3,
    table: [
      { v: 'Article', h: true }, { v: 'Used for', h: true }, { v: 'Example', h: true },
      { v: 'le' }, { v: 'masculine' }, { v: 'le café' },
      { v: 'la' }, { v: 'feminine' }, { v: 'la maison' },
      { v: "l'" }, { v: 'before a vowel or h' }, { v: "l'eau, l'homme" },
      { v: 'les' }, { v: 'all plurals' }, { v: 'les amis' },
    ],
    examples: [
      { fr: 'Le soleil et la lune', en: 'The sun and the moon — gender is arbitrary; learn it with the noun' },
      { fr: "J'aime l'été", en: 'I love summer — l’ before the vowel, and note: French uses « the » where English drops it' },
    ],
    errors: [
      { wrong: '« le eau »', right: "« l'eau »", why: 'Two vowel sounds may not collide — the e elides. This is élision, and it is mandatory.' },
      { wrong: '« les ami » (no liaison)', right: '« les‿amis » (lé-zami)', why: 'Before a vowel, the s of les must be pronounced as z.' },
    ],
    audio: ["Le café, s'il vous plaît", "L'addition et la carte", 'Les amis arrivent'],
    subs: null,
    quiz: [
      { q: '« ___ école » (school, feminine)', opts: ['la école', "l'école", 'le école'], correct: 1 },
      { q: 'The article for ALL plural nouns is…', opts: ['les', 'las', 'los'], correct: 0 },
      { q: 'In « les‿amis », the s sounds like…', opts: ['s', 'silent', 'z'], correct: 2 },
    ],
  },
  a2_1: {
    tag: 'A2 · LEÇON 01',
    title: 'Verbes réguliers',
    level: 'A2 — SURVIE',
    intro:
      'About 90% of French verbs are regular -ER verbs. Learn one conjugation pattern and you unlock thousands of verbs at once. This unit has four sub-lessons — start with the full -ER system.',
    unique: null,
    video: false,
    tableCols: 3,
    table: [
      { v: 'parler', h: true }, { v: 'Ending', h: true }, { v: 'Sounds like', h: true },
      { v: 'je parle' }, { v: '-e' }, { v: 'parl' },
      { v: 'tu parles' }, { v: '-es' }, { v: 'parl' },
      { v: 'il / elle parle' }, { v: '-e' }, { v: 'parl' },
      { v: 'nous parlons' }, { v: '-ons' }, { v: 'par-lõ' },
      { v: 'vous parlez' }, { v: '-ez' }, { v: 'par-lé' },
      { v: 'ils parlent' }, { v: '-ent' }, { v: 'parl (silent!)' },
    ],
    examples: [
      { fr: 'Ils parlent français', en: 'They speak French — the -ent is completely silent' },
      { fr: 'Nous mangeons', en: 'We eat — manger keeps the e before -ons (a spelling quirk, see sub-lesson 2)' },
    ],
    errors: [
      { wrong: '« je parles »', right: '« je parle »', why: 'Only tu takes the s. Four of the six forms sound identical — the spelling differs.' },
      { wrong: 'pronouncing « ils parlent » as " parlont "', right: '« parl » — the -ent is silent', why: 'The third-person plural ending is written but never voiced.' },
    ],
    audio: ['Je parle, tu parles, il parle', 'Nous parlons français ensemble', 'Elles écoutent la radio'],
    subs: ['Regular -ER Verbs — The Full System', '-ER Verbs — Spelling Quirks', 'Regular -IR Verbs', 'Regular -RE Verbs'],
    quiz: [
      { q: '« Nous ___ » (parler)', opts: ['parlons', 'parlez', 'parlent'], correct: 0 },
      { q: 'How is the -ent in « ils parlent » pronounced?', opts: ['" ent "', '" on "', 'it is silent'], correct: 2 },
      { q: 'Which forms of parler SOUND identical?', opts: ['je / nous / vous', 'je / tu / il / ils', 'tu / vous'], correct: 1 },
    ],
  },
};
