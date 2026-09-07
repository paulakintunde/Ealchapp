// a1.25's REUSED manifest: a RECORDED READ of Postgres taken on 2026-08-07 by
// scripts/_routine_manifest.ts, classified against seed.json, so the batch can
// verify these rows field by field without anybody retyping one.
//
// NOTHING BELOW WAS RETYPED. Regenerate with:
//
//     pnpm tsx scripts/_routine_manifest.ts > scripts/data/_routine-manifest.gen.txt
//     node scripts/_routine_assemble.mjs
//
// ── THERE IS NO IMPORTED ARRAY, AND THAT IS THE FINDING ──────────────────────
//
// a1.22 shipped 40 IMPORTED rows because pays-et-nationalites is OUTSIDE
// SEED_CUT.themes and every row it named was absent from the seed. a1.13 shipped
// 48 for the same reason with couleurs.
//
// routines IS INSIDE THE CUT: 338 published in Postgres, 338 in the seed. The
// generator wanted 52 rows and classified 52 REUSED and 0 IMPORTED. That is why
// this merge is the simple case: no row has to be carried through the cut, and
// no card can ship blank from a theme mismatch.
//
// The assembler EXITS 1 if a regeneration ever puts a row in IMPORTED, because
// that would mean the theme has changed shape and the brief's central claim
// needs re-measuring before anything else in it is trusted.
//
// ── WHY EACH GROUP IS HERE ───────────────────────────────────────────────────
//
// The justification is written per GROUP rather than per ROW. a1.22 wrote one
// per row and had four rows. This lesson has fifty-two, all doing one of ten
// jobs, and fifty-two hand-written justifications is noise that stops being
// read. GROUP_WHY holds the text as data so the batch can print it and the test
// can check every group is accounted for.
//
// respell and drills are recorded AS THEY ARE TODAY, BEFORE this build's
// repairs. The batch compares them against the live database and dies on drift,
// then applies RESPELL_REPAIRS, RESPELL_ADDITIONS and DRILL_ADDITIONS from
// routine-corpus.ts on top. A manifest holding the corrected values would read
// as drift and stop the run, which is the trap a1.22 documented in its own
// header and which is reproduced here on purpose.

export type ReusedRow = {
  id: string;
  fr: string;
  en: string;
  respell: string | null;
  drills: string[];
};

export const GROUP_WHY: Record<string, string> = {
  'the parts of the day, and the two that take no article at all':
    'THE LESSON. Four take an article and two take nothing, and the corpus stores them that way without '
    + 'being asked to: .002 is stored as "le matin" and .035 as bare "midi". The contrast is not constructed '
    + 'here. It is already in the data, and the job is to stop a later author flattening it.',
  'the habit words that mark a day as every day':
    'The escape hatch. When the article alone feels ambiguous to a learner, "tous les jours" says the same '
    + 'thing out loud. Taught beside the article rather than given its own act.',
  'the morning, in the order it happens':
    'The taught core of act 3, in sequence, because the canDo is "from getting up to going to bed" and a set '
    + 'of verbs in no order does not deliver it. Five of the eight carry a se.',
  'the middle of the day':
    'The smallest group, deliberately. The midday of the canDo is mostly the midi and minuit exception, '
    + 'which act 2 already owns, so act 3 does not spend a second pass on it.',
  'the evening and the night':
    'The other end of the canDo, and where dormir finally arrives after being the word everybody expects '
    + 'to meet first.',
  'three objects the day is built around':
    'Enough to make the day concrete and not one more. "la douche" and "le cafe" are also rows a1.26 and '
    + 'a1.23 will want in other themes; here they are objects in a routine, never rooms and never food.',
  'the three conjugated frames the corpus already publishes':
    'The only reflexive persons this lesson puts on a screen. All three carried NO respelling and NO '
    + 'voiceflash, so all three are repaired by this build before anything displays them.',
  'the day in the first person, published sentences':
    'What the learner produces. Every one is a corpus row nobody wrote to teach this, which is the standard '
    + 'this project holds authored sentences to and the reason this lesson authors none.',
  'the day in the third person, and the articled part of the day in the wild':
    'Reading exposure. .090 fronts "Le matin," with a comma, which is the runner-up reframe surviving in '
    + 'ordinary French, and .160 does the same habitual meaning with "chaque matin" instead of the article.',
  'the second and third persons, which are the only ones with evidence':
    'tu and nous, which have real sentences behind them. vous and ils do not: 0 rows each in 27,353 '
    + 'published sentences, and that measurement is the argument for leaving the paradigm to a2.22.',
};

export const REUSED: ReusedRow[] = [


  // ── the parts of the day, and the two that take no article at all (6) ──
  {
    id: "fr.a1.routines.002",
    fr: "le matin",
    en: "the morning",
    respell: "luh mah-TAN", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.022",
    fr: "l'après-midi",
    en: "the afternoon",
    respell: "lah-preh-mee-DEE", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.023",
    fr: "le soir",
    en: "the evening",
    respell: "luh SWAHR", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.024",
    fr: "la nuit",
    en: "the night",
    respell: "lah NWEE", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.035",
    fr: "midi",
    en: "noon",
    respell: "mee-DEE", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.036",
    fr: "minuit",
    en: "midnight",
    respell: "mee-NWEE", drills: ["flashcard","voiceflash"],
  },

  // ── the habit words that mark a day as every day (4) ──
  {
    id: "fr.a1.routines.025",
    fr: "le week-end",
    en: "the weekend",
    respell: "luh wee-KEND", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.026",
    fr: "tous les jours",
    en: "every day",
    respell: "too lay ZHOOR", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.037",
    fr: "tôt",
    en: "early",
    respell: "TOH", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.038",
    fr: "tard",
    en: "late",
    respell: "TAHR", drills: ["flashcard","voiceflash"],
  },

  // ── the morning, in the order it happens (8) ──
  {
    id: "fr.a1.routines.010",
    fr: "se réveiller",
    en: "to wake up",
    respell: "suh ray-veh-YAY", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.001",
    fr: "se lever",
    en: "to get up",
    respell: "suh luh-VAY", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.011",
    fr: "se doucher",
    en: "to take a shower",
    respell: "suh doo-SHAY", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.012",
    fr: "s'habiller",
    en: "to get dressed",
    respell: "sah-bee-YAY", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.019",
    fr: "se brosser les dents",
    en: "to brush one's teeth",
    respell: null, drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.013",
    fr: "prendre le petit déjeuner",
    en: "to have breakfast",
    respell: null, drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.027",
    fr: "le petit déjeuner",
    en: "the breakfast",
    respell: "luh puh-TEE day-zhuh-NAY", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.014",
    fr: "aller au travail",
    en: "to go to work",
    respell: "ah-LAY oh trah-VAHY", drills: ["flashcard","voiceflash"],
  },

  // ── the middle of the day (3) ──
  {
    id: "fr.a1.routines.015",
    fr: "travailler",
    en: "to work",
    respell: "trah-vah-YAY", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.016",
    fr: "déjeuner",
    en: "to have lunch",
    respell: "day-zhuh-NAY", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.056",
    fr: "la pause déjeuner",
    en: "the lunch break",
    respell: "la POHZ day-zhuh-NAY", drills: ["flashcard","voiceflash"],
  },

  // ── the evening and the night (7) ──
  {
    id: "fr.a1.routines.018",
    fr: "rentrer",
    en: "to go home",
    respell: "rahn-TRAY", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.074",
    fr: "préparer le dîner",
    en: "to make dinner",
    respell: "pray-pah-RAY luh dee-NAY", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.017",
    fr: "dîner",
    en: "to have dinner",
    respell: "dee-NAY", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.034",
    fr: "se reposer",
    en: "to rest",
    respell: "suh ruh-poh-ZAY", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.020",
    fr: "se coucher",
    en: "to go to bed",
    respell: "suh koo-SHAY", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.041",
    fr: "s'endormir",
    en: "to fall asleep",
    respell: "sahn-dor-MEER", drills: ["flashcard","voiceflash"],
  },
  {
    id: "fr.a1.routines.021",
    fr: "dormir",
    en: "to sleep",
    respell: "dor-MEER", drills: ["flashcard","voiceflash"],
  },

  // ── three objects the day is built around (3) ──
  {
    id: "fr.a1.routines.091",
    fr: "le réveil",
    en: "the alarm clock",
    respell: "luh reh-VAY", drills: ["flashcard","voiceflash","review"],
  },
  {
    id: "fr.a1.routines.101",
    fr: "la douche",
    en: "the shower",
    respell: "lah DOOSH", drills: ["flashcard","voiceflash","review"],
  },
  {
    id: "fr.a1.routines.103",
    fr: "le café",
    en: "the coffee",
    respell: "luh kah-FAY", drills: ["flashcard","voiceflash","review"],
  },

  // ── the three conjugated frames the corpus already publishes (3) ──
  {
    id: "fr.a1.routines.005",
    fr: "je me réveille",
    en: "I wake up",
    respell: null, drills: ["flashcard"],
  },
  {
    id: "fr.a1.routines.006",
    fr: "il dort",
    en: "he sleeps",
    respell: null, drills: ["flashcard"],
  },
  {
    id: "fr.a1.routines.007",
    fr: "nous prenons",
    en: "we take, we have",
    respell: null, drills: ["flashcard"],
  },

  // ── the day in the first person, published sentences (6) ──
  {
    id: "fr.a1.routines.003",
    fr: "Je me lève à sept heures.",
    en: "I get up at seven o'clock.",
    respell: null, drills: ["flashcard"],
  },
  {
    id: "fr.a1.routines.089",
    fr: "Je me lève à sept heures tous les jours.",
    en: "I get up at seven every day.",
    respell: null, drills: ["dictation"],
  },
  {
    id: "fr.a1.routines.153",
    fr: "Je me réveille à sept heures tous les matins.",
    en: "I wake up at seven o'clock every morning.",
    respell: null, drills: ["sentence","flashcard","review"],
  },
  {
    id: "fr.a1.routines.144",
    fr: "Je me douche avant de m'habiller.",
    en: "I shower before getting dressed.",
    respell: null, drills: ["dictation"],
  },
  {
    id: "fr.a1.routines.131",
    fr: "Je déjeune à midi avec mes collègues.",
    en: "I have lunch at noon with my colleagues.",
    respell: null, drills: ["dictation"],
  },
  {
    id: "fr.a1.routines.178",
    fr: "Je me repose le week-end.",
    en: "I rest on the weekend.",
    respell: null, drills: ["sentence","flashcard","review"],
  },

  // ── the day in the third person, and the articled part of the day in the wild (9) ──
  {
    id: "fr.a1.routines.090",
    fr: "Le matin, je bois un jus d'orange.",
    en: "In the morning, I drink an orange juice.",
    respell: null, drills: ["sentence","flashcard","review"],
  },
  {
    id: "fr.a1.routines.160",
    fr: "Il boit un café noir chaque matin.",
    en: "He drinks a black coffee every morning.",
    respell: null, drills: ["sentence","flashcard","review"],
  },
  {
    id: "fr.a1.routines.154",
    fr: "Il se lève tout de suite après le réveil.",
    en: "He gets up right away after the alarm.",
    respell: null, drills: ["sentence","flashcard","review"],
  },
  {
    id: "fr.a1.routines.164",
    fr: "Il arrive au bureau à huit heures.",
    en: "He arrives at the office at eight o'clock.",
    respell: null, drills: ["sentence","flashcard","review"],
  },
  {
    id: "fr.a1.routines.167",
    fr: "Elle rentre à la maison vers dix-huit heures.",
    en: "She comes home around six in the evening.",
    respell: null, drills: ["sentence","flashcard","review"],
  },
  {
    id: "fr.a1.routines.134",
    fr: "Nous dînons ensemble le soir.",
    en: "We have dinner together in the evening.",
    respell: null, drills: ["dictation"],
  },
  {
    id: "fr.a1.routines.136",
    fr: "Il se couche tôt pendant la semaine.",
    en: "He goes to bed early during the week.",
    respell: null, drills: ["dictation"],
  },
  {
    id: "fr.a1.routines.172",
    fr: "Il se couche vers vingt-deux heures.",
    en: "He goes to bed around ten in the evening.",
    respell: null, drills: ["sentence","flashcard","review"],
  },
  {
    id: "fr.a1.routines.137",
    fr: "Elle éteint la lumière avant de s'endormir.",
    en: "She turns off the light before falling asleep.",
    respell: null, drills: ["dictation"],
  },

  // ── the second and third persons, which are the only ones with evidence (3) ──
  {
    id: "fr.a1.routines.125",
    fr: "Tu prends ta douche le matin.",
    en: "You take your shower in the morning.",
    respell: null, drills: ["dictation"],
  },
  {
    id: "fr.a1.routines.157",
    fr: "Tu te douches rapidement avant l'école.",
    en: "You shower quickly before school.",
    respell: null, drills: ["sentence","flashcard","review"],
  },
  {
    id: "fr.a1.routines.181",
    fr: "Nous nous levons tard le dimanche.",
    en: "We get up late on Sundays.",
    respell: null, drills: ["sentence","flashcard","review"],
  },
];
