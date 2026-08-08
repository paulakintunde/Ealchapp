// a1.30's manifests: a RECORDED READ of Postgres taken on 2026-08-08 by
// scripts/_bilan_manifest.ts, classified against seed.json.
//
// NOTHING BELOW WAS RETYPED. Regenerate with:
//
//     pnpm tsx scripts/_bilan_manifest.ts > scripts/data/_bilan-manifest.gen.txt
//     node scripts/_bilan_assemble.mjs
//
// ── THREE ARRAYS, BECAUSE THE TWO HALVES OF THIS LESSON BEHAVE OPPOSITELY ────
//
// REVIEW (87 rows) is the even-coverage selection: three contributions from each
// of the 29 A1 units, computed by scripts/_bilan_select.ts rather than chosen by
// hand. Every one is ALREADY IN THE SEED and ALREADY TAUGHT AND RELEASED by the
// unit that owns it. The generator exits 1 if that stops being true, because the
// whole tranche contract rests on it.
//
//   So a1.30 SHOWS all 87 and RELEASES NONE of them. The SRS keys on
//   (itemId, modality); re-releasing would take two ratings for one card.
//
// KIT_IMPORTED (11 rows) is the conversational repair kit: published in Postgres,
// ABSENT from the seed, and taught by NO lesson in the app. This is the only
// material a1.30 owns, and with the two authored rows it is the only material the
// tranches release.
//
// KIT_REUSED (1 row) is « je ne sais pas », which the generator flagged: it is
// already taught by sons.07, so a1.30 may SHOW it and must not RELEASE it. That
// flag is the tranche contract catching itself, and it is why the kit is split.
//
// ── The review rows carry `unit` and `reach` ──────────────────────────────
//
// `unit` is which of the 29 the row represents, so a section can be checked for
// mixing rather than trusted to mix. `reach` is how many OTHER units' words the
// row drags in with it, which is what the selector ranked on. Twelve rows have a
// reach of zero (a1.07, a1.09, a1.18, a1.19, a1.28): numbers and months do not
// co-occur with much. They are kept because coverage is the rule, and the mixing
// in their sections has to come from their neighbours instead.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export type ImportedRow = Item;
export type ReusedRow = { id: string; fr: string; en: string; respell: string | null; drills: string[] };
export type ReviewRow = {
  id: string; unit: string; fr: string; en: string;
  respell: string | null; kind: string; reach: number;
};

export const KIT_IMPORTED: ImportedRow[] = [


  // ── saying you did not understand, which no lesson in the app teaches (2) ──
  {
    id: "fr.sons.expressions-utiles.038", kind: "phrase", level: "sons", theme: "expressions-utiles", fr: "je ne comprends pas", en: "I don't understand", ipa: "ʒə nə kɔ̃.pʁɑ̃ pa", respell: "zhuh nuh kohn-prahn PAH", tags: ["understanding"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.a1.expressions-frequentes.079", kind: "sentence", level: "a1", theme: "expressions-frequentes", fr: "Excusez-moi, je ne comprends pas.", en: "Excuse me, I don't understand.", tags: [], drills: ["sentence"], version: 1,
  },

  // ── buying yourself time (2) ──
  {
    id: "fr.sons.expressions-utiles.044", kind: "phrase", level: "sons", theme: "expressions-utiles", fr: "un instant", en: "one moment", ipa: "œ̃.nɛ̃s.tɑ̃", respell: "uh-nan-STAHN", tags: ["practical"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.a1.expressions-frequentes.118", kind: "word", level: "a1", theme: "expressions-frequentes", fr: "peut-être", en: "maybe", tags: [], drills: ["flashcard","voiceflash"], version: 1,
  },

  // ── getting somebody's attention, and apologising for it (2) ──
  {
    id: "fr.a1.rp-etiquette.016", kind: "phrase", level: "a1", theme: "rp-etiquette", fr: "excusez-moi", en: "excuse me (formal)", ipa: "ɛk.sky.ze mwa", respell: "ex-kü-zay MWAH", tags: [], drills: ["flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.expressions-frequentes.099", kind: "word", level: "a1", theme: "expressions-frequentes", fr: "pardon", en: "sorry", tags: [], drills: ["flashcard","voiceflash"], version: 1,
  },

  // ── agreeing, so the other person keeps going (3) ──
  {
    id: "fr.a1.expressions-frequentes.106", kind: "word", level: "a1", theme: "expressions-frequentes", fr: "d'accord", en: "okay", tags: [], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.a1.expressions-frequentes.104", kind: "phrase", level: "a1", theme: "expressions-frequentes", fr: "bien sûr", en: "of course", tags: [], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.a1.expressions-frequentes.122", kind: "word", level: "a1", theme: "expressions-frequentes", fr: "voilà", en: "there you go", tags: [], drills: ["flashcard","voiceflash"], version: 1,
  },

  // ── closing the loop politely (2) ──
  {
    id: "fr.a1.expressions-frequentes.100", kind: "phrase", level: "a1", theme: "expressions-frequentes", fr: "de rien", en: "you're welcome", tags: [], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.a1.expressions-frequentes.105", kind: "phrase", level: "a1", theme: "expressions-frequentes", fr: "pas de problème", en: "no problem", tags: [], drills: ["flashcard","voiceflash"], version: 1,
  },
];

export const KIT_REUSED: ReusedRow[] = [


  // ── saying you did not understand, which no lesson in the app teaches (1) ──
  { id: "fr.sons.elision.033", fr: "je ne sais pas", en: "I do not know", respell: "zhuh nuh seh PA", drills: ["flashcard","voiceflash","review","dictation"] },
];

export const REVIEW: ReviewRow[] = [


  // ── a1.01 ──
  { id: "fr.a1.salutations.001", unit: "a1.01", fr: "Bonjour", en: "Hello / Good morning", respell: "bohn-ZHOOR", kind: "word", reach: 1 },
  { id: "fr.a1.salutations.014", unit: "a1.01", fr: "Excusez-moi", en: "Excuse me", respell: "ehk-skü-zay-MWAH", kind: "phrase", reach: 1 },
  { id: "fr.a1.salutations.018", unit: "a1.01", fr: "Comment vous appelez-vous ?", en: "What is your name? (formal)", respell: null, kind: "phrase", reach: 1 },

  // ── a1.02 ──
  { id: "fr.a1.nombres.234", unit: "a1.02", fr: "deux", en: "two", respell: "DEU", kind: "word", reach: 6 },
  { id: "fr.sons.nombres.002", unit: "a1.02", fr: "trois", en: "three", respell: "TRWAH", kind: "word", reach: 6 },
  { id: "fr.sons.nombres.007", unit: "a1.02", fr: "huit", en: "eight", respell: "WEET", kind: "word", reach: 5 },

  // ── a1.27 ──
  { id: "fr.sons.nombres.022", unit: "a1.27", fr: "trente", en: "thirty", respell: "TRAHNT", kind: "word", reach: 2 },
  { id: "fr.a1.nombres.012", unit: "a1.27", fr: "soixante-cinq", en: "sixty-five", respell: "swah-SAHNT-SANK", kind: "word", reach: 1 },
  { id: "fr.sons.nombres.020", unit: "a1.27", fr: "vingt et un", en: "twenty-one", respell: "van-tay-UHN", kind: "word", reach: 1 },

  // ── a1.28 ──
  { id: "fr.a1.nombres.238", unit: "a1.28", fr: "deux cent cinquante", en: "two hundred fifty", respell: "duh sahⁿ saⁿ-KAHⁿT", kind: "word", reach: 0 },
  { id: "fr.a1.nombres.239", unit: "a1.28", fr: "un million d’habitants", en: "a million inhabitants", respell: "uhⁿ mee-LYOHⁿ da-bee-TAHⁿ", kind: "phrase", reach: 0 },
  { id: "fr.sons.nombres.034", unit: "a1.28", fr: "deux cents", en: "two hundred", respell: "DUH SAHN", kind: "word", reach: 0 },

  // ── a1.03 ──
  { id: "fr.a1.routines.103", unit: "a1.03", fr: "le café", en: "the coffee", respell: "luh kah-FAY", kind: "word", reach: 12 },
  { id: "fr.a1.maison.001", unit: "a1.03", fr: "la maison", en: "the house", respell: "lah meh-ZOHⁿ", kind: "word", reach: 7 },
  { id: "fr.a1.deplacements.018", unit: "a1.03", fr: "la voiture", en: "the car", respell: "lah vwah-TÜR", kind: "word", reach: 6 },

  // ── a1.04 ──
  { id: "fr.a1.cuisine.002", unit: "a1.04", fr: "le pain", en: "the bread", respell: "luh PAⁿ", kind: "word", reach: 3 },
  { id: "fr.sons.elision.012", unit: "a1.04", fr: "l'homme", en: "the man", respell: "LOM", kind: "word", reach: 2 },
  { id: "fr.sons.elision.015", unit: "a1.04", fr: "l'hôtel", en: "the hotel", respell: "loh-TEL", kind: "word", reach: 2 },

  // ── a1.11 ──
  { id: "fr.a1.cafe.009", unit: "a1.11", fr: "un café", en: "a coffee", respell: "uhn kah-FAY", kind: "word", reach: 11 },
  { id: "fr.a1.cafe.010", unit: "a1.11", fr: "un thé", en: "a tea", respell: "uhn TAY", kind: "word", reach: 4 },
  { id: "fr.a1.famille.219", unit: "a1.11", fr: "des amis", en: "friends", respell: "day-za-MEE", kind: "word", reach: 4 },

  // ── a1.29 ──
  { id: "fr.a1.cafe.151", unit: "a1.29", fr: "du café", en: "some coffee", respell: "dü ka-FAY", kind: "phrase", reach: 11 },
  { id: "fr.a1.cuisine.265", unit: "a1.29", fr: "du pain", en: "some bread", respell: "dü PAⁿ", kind: "phrase", reach: 3 },
  { id: "fr.a1.expressions-de-quantite.068", unit: "a1.29", fr: "des légumes", en: "some vegetables", respell: "day lay-güm", kind: "phrase", reach: 3 },

  // ── a1.05 ──
  { id: "fr.a1.cafe.088", unit: "a1.05", fr: "Je prends un café noir.", en: "I'm having a black coffee.", respell: null, kind: "sentence", reach: 5 },
  { id: "fr.a1.cafe.090", unit: "a1.05", fr: "Nous allons au café ce matin.", en: "We are going to the café this morning.", respell: null, kind: "sentence", reach: 5 },
  { id: "fr.a1.cafe.156", unit: "a1.05", fr: "Il est au comptoir du café.", en: "He is at the café counter.", respell: "eel eh oh kohⁿ-twar dü ka-FAY", kind: "sentence", reach: 4 },

  // ── a1.06 ──
  { id: "fr.a1.metiers.259", unit: "a1.06", fr: "Ce sont mes parents.", en: "These are my parents.", respell: "suh sohⁿ may pa-RAHⁿ", kind: "sentence", reach: 2 },
  { id: "fr.a1.metiers.257", unit: "a1.06", fr: "C'est ma sœur.", en: "This is my sister.", respell: "seh ma SEUR", kind: "sentence", reach: 1 },
  { id: "fr.a1.metiers.258", unit: "a1.06", fr: "C'est mon collègue.", en: "This is my colleague.", respell: "seh mohⁿ ko-LEG", kind: "sentence", reach: 1 },

  // ── a1.07 ──
  { id: "fr.a1.meteo.029", unit: "a1.07", fr: "il fait chaud", en: "it is hot", respell: "EEL FEH SHOH", kind: "phrase", reach: 1 },
  { id: "fr.a1.cuisine.185", unit: "a1.07", fr: "avoir faim", en: "to be hungry", respell: "ah-VWAHR FAHN", kind: "phrase", reach: 0 },
  { id: "fr.a1.emotions.012", unit: "a1.07", fr: "avoir faim", en: "to be hungry", respell: "ah-VWAHR FAN", kind: "word", reach: 0 },

  // ── a1.08 ──
  { id: "fr.sons.jours-et-mois.026", unit: "a1.08", fr: "demain", en: "tomorrow", respell: "duh-MAN", kind: "word", reach: 4 },
  { id: "fr.sons.jours-et-mois.040", unit: "a1.08", fr: "tous les jours", en: "every day", respell: "TOO LAY ZHOOR", kind: "word", reach: 2 },
  { id: "fr.sons.jours-et-mois.006", unit: "a1.08", fr: "samedi", en: "Saturday", respell: "sam-DEE", kind: "word", reach: 1 },

  // ── a1.09 ──
  { id: "fr.sons.jours-et-mois.008", unit: "a1.09", fr: "janvier", en: "January", respell: "zhahⁿ-VYAY", kind: "word", reach: 0 },
  { id: "fr.sons.jours-et-mois.009", unit: "a1.09", fr: "février", en: "February", respell: "fay-vree-YAY", kind: "word", reach: 0 },
  { id: "fr.sons.jours-et-mois.010", unit: "a1.09", fr: "mars", en: "March", respell: "MARS", kind: "word", reach: 0 },

  // ── a1.10 ──
  { id: "fr.a1.meteo.006", unit: "a1.10", fr: "il pleut", en: "it rains / it is raining", respell: null, kind: "phrase", reach: 1 },
  { id: "fr.a1.meteo.027", unit: "a1.10", fr: "il fait beau", en: "the weather is nice", respell: "EEL FEH BOH", kind: "phrase", reach: 1 },
  { id: "fr.sons.jours-et-mois.121", unit: "a1.10", fr: "en hiver", en: "in winter", respell: "ahⁿ-nee-VEHR", kind: "phrase", reach: 1 },

  // ── a1.12 ──
  { id: "fr.a1.heure-et-date.108", unit: "a1.12", fr: "huit heures", en: "eight o'clock", respell: "üee-TUHR", kind: "phrase", reach: 3 },
  { id: "fr.a1.routines.035", unit: "a1.12", fr: "midi", en: "noon", respell: "mee-DEE", kind: "word", reach: 3 },
  { id: "fr.a1.deplacements.058", unit: "a1.12", fr: "en retard", en: "late", respell: "ahn ruh-TAR", kind: "word", reach: 2 },

  // ── a1.13 ──
  { id: "fr.sons.couleurs.005", unit: "a1.13", fr: "noir", en: "black", respell: "NWAR", kind: "word", reach: 4 },
  { id: "fr.sons.couleurs.001", unit: "a1.13", fr: "rouge", en: "red", respell: "ROOZH", kind: "word", reach: 3 },
  { id: "fr.sons.couleurs.006", unit: "a1.13", fr: "blanc", en: "white", respell: "BLAHⁿ", kind: "word", reach: 2 },

  // ── a1.14 ──
  { id: "fr.sons.adjectifs-essentiels.001", unit: "a1.14", fr: "grand", en: "big, tall", respell: "GRAHⁿ", kind: "word", reach: 4 },
  { id: "fr.sons.adjectifs-essentiels.003", unit: "a1.14", fr: "bon", en: "good", respell: "BOHⁿ", kind: "word", reach: 2 },
  { id: "fr.sons.adjectifs-essentiels.005", unit: "a1.14", fr: "beau", en: "beautiful, handsome", respell: "BOH", kind: "word", reach: 2 },

  // ── a1.16 ──
  { id: "fr.sons.adjectifs-essentiels.016", unit: "a1.16", fr: "chaud", en: "hot, warm", respell: "SHOH", kind: "word", reach: 3 },
  { id: "fr.sons.adjectifs-essentiels.007", unit: "a1.16", fr: "nouveau", en: "new", respell: "noo-VOH", kind: "word", reach: 2 },
  { id: "fr.sons.adjectifs-essentiels.011", unit: "a1.16", fr: "court", en: "short", respell: "KOOR", kind: "word", reach: 2 },

  // ── a1.15 ──
  { id: "fr.a1.famille.003", unit: "a1.15", fr: "le frère", en: "the brother", respell: "LUH FREHR", kind: "word", reach: 9 },
  { id: "fr.a1.famille.004", unit: "a1.15", fr: "la sœur", en: "the sister", respell: "LAH SUHR", kind: "word", reach: 5 },
  { id: "fr.a1.famille.021", unit: "a1.15", fr: "la grand-mère", en: "the grandmother", respell: "LAH grahⁿ-MEHR", kind: "word", reach: 3 },

  // ── a1.17 ──
  { id: "fr.sons.mots-essentiels.093", unit: "a1.17", fr: "mon", en: "my (masculine)", respell: "MOHⁿ", kind: "word", reach: 15 },
  { id: "fr.sons.mots-essentiels.095", unit: "a1.17", fr: "mes", en: "my (plural)", respell: "MAY", kind: "word", reach: 4 },
  { id: "fr.sons.mots-essentiels.096", unit: "a1.17", fr: "ton", en: "your (masculine)", respell: "TOHⁿ", kind: "word", reach: 2 },

  // ── a1.18 ──
  { id: "fr.sons.mots-essentiels.043", unit: "a1.18", fr: "non", en: "no", respell: "NOHⁿ", kind: "word", reach: 1 },
  { id: "fr.a1.argot-du-quotidien.042", unit: "a1.18", fr: "c'est pas donné", en: "it's not cheap", respell: "SEH PA do-NAY", kind: "phrase", reach: 0 },
  { id: "fr.sons.voyelles.182", unit: "a1.18", fr: "ne", en: "not", respell: "nuh", kind: "word", reach: 0 },

  // ── a1.19 ──
  { id: "fr.sons.questions.014", unit: "a1.19", fr: "est-ce que", en: "turns a statement into a yes-no question", respell: "EHS-kuh", kind: "phrase", reach: 1 },
  { id: "fr.sons.argot-de-base.037", unit: "a1.19", fr: "si", en: "yes (contradicting a negative)", respell: "SEE", kind: "word", reach: 0 },
  { id: "fr.sons.expressions-utiles.051", unit: "a1.19", fr: "peut-être", en: "maybe", respell: "puh-TEHTR", kind: "phrase", reach: 0 },

  // ── a1.20 ──
  { id: "fr.sons.questions.008", unit: "a1.20", fr: "combien", en: "how much, how many", respell: "kohⁿ-BYAⁿ", kind: "word", reach: 3 },
  { id: "fr.sons.questions.010", unit: "a1.20", fr: "quel", en: "which, what (masculine)", respell: "KEHL", kind: "word", reach: 3 },
  { id: "fr.a1.deplacements.001", unit: "a1.20", fr: "le train", en: "the train", respell: "luh TRAHⁿ", kind: "word", reach: 2 },

  // ── a1.21 ──
  { id: "fr.sons.mots-essentiels.013", unit: "a1.21", fr: "dans", en: "in, inside", respell: "DAHⁿ", kind: "word", reach: 10 },
  { id: "fr.sons.mots-essentiels.014", unit: "a1.21", fr: "sur", en: "on, on top of", respell: "SÜR", kind: "word", reach: 6 },
  { id: "fr.sons.mots-essentiels.030", unit: "a1.21", fr: "près de", en: "near, close to", respell: "PREH DUH", kind: "word", reach: 2 },

  // ── a1.22 ──
  { id: "fr.a1.pays-et-nationalites.002", unit: "a1.22", fr: "français", en: "French", respell: "frahⁿ-SEH", kind: "word", reach: 5 },
  { id: "fr.a1.pays-et-nationalites.001", unit: "a1.22", fr: "la France", en: "France", respell: "LAH FRAHⁿSS", kind: "word", reach: 2 },
  { id: "fr.a1.pays-et-nationalites.004", unit: "a1.22", fr: "canadien", en: "Canadian", respell: "kah-nah-DYAⁿ", kind: "word", reach: 1 },

  // ── a1.23 ──
  { id: "fr.a1.au-restaurant.082", unit: "a1.23", fr: "le thé", en: "the tea", respell: "luh TAY", kind: "word", reach: 3 },
  { id: "fr.a1.cuisine.014", unit: "a1.23", fr: "la viande", en: "the meat", respell: "lah VYAHⁿD", kind: "word", reach: 2 },
  { id: "fr.a1.cuisine.019", unit: "a1.23", fr: "la soupe", en: "the soup", respell: "lah SOOP", kind: "word", reach: 2 },

  // ── a1.24 ──
  { id: "fr.a1.corps.001", unit: "a1.24", fr: "la tête", en: "the head", respell: "lah TEHT", kind: "word", reach: 1 },
  { id: "fr.a1.corps.003", unit: "a1.24", fr: "la main", en: "the hand", respell: "lah MAⁿ", kind: "word", reach: 1 },
  { id: "fr.a1.corps.004", unit: "a1.24", fr: "le dos", en: "the back", respell: "luh DOH", kind: "word", reach: 1 },

  // ── a1.25 ──
  { id: "fr.a1.routines.002", unit: "a1.25", fr: "le matin", en: "the morning", respell: "luh mah-TAⁿ", kind: "word", reach: 9 },
  { id: "fr.a1.routines.023", unit: "a1.25", fr: "le soir", en: "the evening", respell: "luh SWAHR", kind: "word", reach: 8 },
  { id: "fr.a1.routines.021", unit: "a1.25", fr: "dormir", en: "to sleep", respell: "dor-MEER", kind: "word", reach: 3 },

  // ── a1.26 ──
  { id: "fr.a1.maison.012", unit: "a1.26", fr: "la porte", en: "the door", respell: "lah PORT", kind: "word", reach: 4 },
  { id: "fr.a1.maison.014", unit: "a1.26", fr: "le lit", en: "the bed", respell: "luh LEE", kind: "word", reach: 3 },
  { id: "fr.a1.maison.018", unit: "a1.26", fr: "le jardin", en: "the garden", respell: "luh zhahr-DAⁿ", kind: "word", reach: 3 },
];
