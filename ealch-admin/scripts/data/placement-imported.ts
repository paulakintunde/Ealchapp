// a1.16's IMPORTED and REUSED manifests: a RECORDED READ of Postgres taken on
// 2026-08-06 by scripts/_placement_manifest.ts, so the merge can write these
// rows into seed.json without a connection.
//
// NOTHING BELOW WAS RETYPED. Regenerate with:
//
//     pnpm tsx scripts/_placement_manifest.ts > scripts/data/placement-imported.ts
//
// The batch compares every field against the live database before writing and
// dies if the manifest has drifted, because a stale manifest puts the seed ahead
// of rows nobody has looked at.
//
// ── Why this file is 64 rows long ──
//
// `adjectifs-essentiels` holds 632 published rows in Postgres and 4 in
// seed.json, because the theme is not in SEED_CUT.themes. `couleurs` is not in
// it either. So almost every row this lesson names has to be carried into the
// seed by the merge or it renders as an empty card.
//
//     IMPORTED   38   published in Postgres, ABSENT from the seed
//     REUSED     26   published in Postgres, ALREADY in the seed, untouched
//
// Every field is reproduced exactly as stored, including `ipa` without slashes
// on the a1 sentence rows, because the batch compares field by field and a
// "tidied" value is drift.

export type ImportedRow = {
  id: string; kind: string; level: string; theme: string;
  fr: string; en: string;
  ipa: string | null; respell: string | null; notes: string | null;
  gender: string | null; cardType: string | null;
  tags: string[]; drills: string[]; version: number;
};

export const IMPORTED: ImportedRow[] = [
  // ── the closed set, as headwords (4) ──
  {
    id: "fr.sons.adjectifs-essentiels.006", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "joli",
    en: "pretty",
    ipa: "/ʒɔli/", respell: "zhoh-LEE",
    notes: "Feminine: jolie. Softer than beau: une jolie robe.",
    gender: null, cardType: "vocab",
    tags: ["adjective"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.007", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "nouveau",
    en: "new",
    ipa: "/nuvo/", respell: "noo-VOH",
    notes: "Feminine: nouvelle. Becomes nouvel before a vowel: un nouvel ami. Opposite: vieux.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.009", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "jeune",
    en: "young",
    ipa: "/ʒœn/", respell: "ZHUHN",
    notes: "Same form for both genders. Opposite: vieux. Une jeune femme.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.014", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "gros",
    en: "big, fat",
    ipa: "/ɡʁo/", respell: "GROH",
    notes: "Feminine: grosse. Opposite: mince. Un gros chien.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },

  // ── the three meaning-changers, as headwords (3) ──
  {
    id: "fr.sons.adjectifs-essentiels.058", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "ancien",
    en: "old, former",
    ipa: "/ɑ̃sjɛ̃/", respell: "ahn-SYAN",
    notes: "Feminine: ancienne. Opposite: moderne. Before the noun it means former: mon ancien travail.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.085", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "pauvre",
    en: "poor",
    ipa: "povʁ", respell: "POHVR",
    notes: "Same form for masculine and feminine. Before a noun it can mean unfortunate, le pauvre chat.",
    gender: null, cardType: "vocab",
    tags: ["adjective"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.028", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "propre",
    en: "clean",
    ipa: "/pʁɔpʁ/", respell: "PROPR",
    notes: "Same form for both genders. Opposite: sale. Before the noun it means own: ma propre voiture.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },

  // ── six that go behind, as headwords, for the sorting drill (6) ──
  {
    id: "fr.sons.adjectifs-essentiels.016", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "chaud",
    en: "hot, warm",
    ipa: "/ʃo/", respell: "SHOH",
    notes: "Feminine: chaude. Opposite: froid. Un café chaud.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.017", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "froid",
    en: "cold",
    ipa: "/fʁwa/", respell: "FRWAH",
    notes: "Feminine: froide. Opposite: chaud. De l'eau froide.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.018", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "facile",
    en: "easy",
    ipa: "/fasil/", respell: "fah-SEEL",
    notes: "Same form for both genders. Opposite: difficile. C'est facile!",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.019", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "difficile",
    en: "difficult, hard",
    ipa: "/difisil/", respell: "dee-fee-SEEL",
    notes: "Same form for both genders. Opposite: facile. Un exercice difficile.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.026", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "ouvert",
    en: "open",
    ipa: "/uvɛʁ/", respell: "oo-VEHR",
    notes: "Feminine: ouverte. Opposite: fermé. Le magasin est ouvert.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.011", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "court",
    en: "short",
    ipa: "/kuʁ/", respell: "KOOR",
    notes: "Feminine: courte. Opposite: long. The final t is silent in the masculine.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },

  // ── the default: an adjective sitting BEHIND its noun (6) ──
  {
    id: "fr.a1.adjectifs-essentiels.103", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est une question facile.",
    en: "It's an easy question.",
    ipa: "sɛ.tyn kɛs.tjɔ̃ fa.sil", respell: null,
    notes: null,
    gender: null, cardType: null,
    tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.061", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Elle porte une jupe courte.",
    en: "She is wearing a short skirt.",
    ipa: "ɛl pɔʁt yn ʒyp kuʁt", respell: null,
    notes: "'Courte' agrees with the feminine 'jupe'.",
    gender: null, cardType: null,
    tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.123", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Elle a une voix forte.",
    en: "She has a strong voice.",
    ipa: "ɛl a yn vwa fɔʁt", respell: null,
    notes: "The feminine 'forte' pronounces the final t.",
    gender: null, cardType: null,
    tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.rp-societe.088", kind: "sentence", level: "a1", theme: "rp-societe",
    fr: "Nous habitons dans un quartier calme.",
    en: "We live in a quiet neighborhood.",
    ipa: "nu.z‿a.bi.tɔ̃ dɑ̃z œ̃ kaʁ.tje kalm", respell: null,
    notes: null,
    gender: null, cardType: null,
    tags: [], drills: ["sentence","review"], version: 1,
  },
  {
    id: "fr.a1.couleurs.163", kind: "sentence", level: "a1", theme: "couleurs",
    fr: "Le chat gris dort.",
    en: "The gray cat is sleeping.",
    ipa: "lə ʃa ɡʁi dɔʁ", respell: null,
    notes: null,
    gender: null, cardType: null,
    tags: ["silent-letter"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.couleurs.201", kind: "sentence", level: "a1", theme: "couleurs",
    fr: "Nous avons une maison bleue.",
    en: "We have a blue house.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"Nous avons\",\"t\":\"we have\"},{\"w\":\"une maison\",\"t\":\"a house\"},{\"w\":\"bleue.\",\"t\":\"blue\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },

  // ── the exception: the closed set sitting IN FRONT (8) ──
  {
    id: "fr.a1.adjectifs-essentiels.005", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est une grande ville.",
    en: "It's a big city.",
    ipa: "sɛ.tyn ɡʁɑ̃d vil", respell: null,
    notes: "'Grande' agrees with the feminine 'ville'.",
    gender: null, cardType: null,
    tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.013", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est un bon restaurant.",
    en: "It's a good restaurant.",
    ipa: "sɛ.tœ̃ bɔ̃ ʁɛs.to.ʁɑ̃", respell: null,
    notes: "'Bon' is a short adjective placed before the noun.",
    gender: null, cardType: null,
    tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.020", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est une mauvaise idée.",
    en: "That's a bad idea.",
    ipa: "sɛ.tyn mo.vɛz i.de", respell: null,
    notes: "Feminine 'mauvaise' adds a z sound before a vowel.",
    gender: null, cardType: null,
    tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.261", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est une jolie robe.",
    en: "It's a pretty dress.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"C'est une jolie\",\"t\":\"it's a pretty\"},{\"w\":\"robe.\",\"t\":\"dress\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.262", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est un joli quartier.",
    en: "It's a pretty neighborhood.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"C'est un joli\",\"t\":\"it's a pretty\"},{\"w\":\"quartier.\",\"t\":\"neighborhood\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.049", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est un jeune homme sympathique.",
    en: "He's a nice young man.",
    ipa: "sɛ.tœ̃ ʒœn ɔm sɛ̃.pa.tik", respell: null,
    notes: "'Jeune' precedes the noun 'homme'.",
    gender: null, cardType: null,
    tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.206", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Il a un nouveau vélo.",
    en: "He has a new bike.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"Il a\",\"t\":\"he has\"},{\"w\":\"un nouveau\",\"t\":\"a new\"},{\"w\":\"vélo.\",\"t\":\"bike\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.080", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Elle a une grosse valise.",
    en: "She has a big suitcase.",
    ipa: "ɛl a yn ɡʁos va.liz", respell: null,
    notes: "'Gros' doubles the s in the feminine 'grosse'.",
    gender: null, cardType: null,
    tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },

  // ── one noun, an adjective on each side, both published (1) ──
  {
    id: "fr.a1.adjectifs-essentiels.079", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est un gros chat gris.",
    en: "It's a big grey cat.",
    ipa: "sɛ.tœ̃ ɡʁo ʃa ɡʁi", respell: null,
    notes: "'Gros' precedes the noun 'chat'.",
    gender: null, cardType: null,
    tags: ["grammaire"], drills: ["dictation"], version: 1,
  },

  // ── the liaison partner: grand with no vowel behind it (1) ──
  {
    id: "fr.a1.adjectifs-essentiels.001", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Mon frère est un grand garçon.",
    en: "My brother is a big boy.",
    ipa: "mɔ̃ fʁɛʁ ɛ.tœ̃ ɡʁɑ̃ ɡaʁ.sɔ̃", respell: null,
    notes: "The masculine 'grand' ends in a silent d.",
    gender: null, cardType: null,
    tags: ["silent-letter"], drills: ["dictation"], version: 1,
  },

  // ── two adjectives splitting around the noun (4) ──
  {
    id: "fr.a1.adjectifs-essentiels.035", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Ils habitent dans une jolie maison blanche.",
    en: "They live in a pretty white house.",
    ipa: "il za.bit dɑ̃z yn ʒɔ.li mɛ.zɔ̃ blɑ̃ʃ", respell: null,
    notes: "'Jolie' agrees with the feminine 'maison'.",
    gender: null, cardType: null,
    tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.010", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est une petite ville tranquille.",
    en: "It's a small, quiet town.",
    ipa: "sɛ.tyn pə.tit vil tʁɑ̃.kil", respell: null,
    notes: "'Petite' agrees with the feminine 'ville'.",
    gender: null, cardType: null,
    tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.039", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Elle a une nouvelle voiture rouge.",
    en: "She has a new red car.",
    ipa: "ɛl a yn nu.vɛl vwa.tyʁ ʁuʒ", respell: null,
    notes: "'Nouveau' becomes 'nouvelle' in the feminine.",
    gender: null, cardType: null,
    tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.006", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Le grand chat noir dort sur le lit.",
    en: "The big black cat is sleeping on the bed.",
    ipa: "lə ɡʁɑ̃ ʃa nwaʁ dɔʁ syʁ lə li", respell: null,
    notes: "Short adjectives like 'grand' go before the noun.",
    gender: null, cardType: null,
    tags: ["grammaire"], drills: ["dictation"], version: 1,
  },

  // ── des becomes de in front of the adjective (4) ──
  {
    id: "fr.a1.adjectifs-essentiels.263", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Ce sont de jolies fleurs.",
    en: "These are pretty flowers.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"Ce sont\",\"t\":\"these are\"},{\"w\":\"de jolies\",\"t\":\"pretty\"},{\"w\":\"fleurs.\",\"t\":\"flowers\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.018", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Les enfants ont de bons résultats à l'école.",
    en: "The children have good results at school.",
    ipa: "le zɑ̃.fɑ̃ ɔ̃ də bɔ̃ ʁe.zyl.ta a le.kɔl", respell: null,
    notes: null,
    gender: null, cardType: null,
    tags: ["accord-nombre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.015", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Nous avons passé de bonnes vacances.",
    en: "We had a good vacation.",
    ipa: "nu za.vɔ̃ pa.se də bɔn va.kɑ̃s", respell: null,
    notes: null,
    gender: null, cardType: null,
    tags: ["accord-nombre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.040", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Nous avons de nouveaux voisins.",
    en: "We have new neighbors.",
    ipa: "nu za.vɔ̃ də nu.vo vwa.zɛ̃", respell: null,
    notes: null,
    gender: null, cardType: null,
    tags: ["accord-nombre"], drills: ["dictation"], version: 1,
  },

  // ── bel, vieil and nouvel, each beside its consonant partner (1) ──
  {
    id: "fr.a1.adjectifs-essentiels.209", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est un nouvel hôtel.",
    en: "It's a new hotel.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"C'est un\",\"t\":\"it's a\"},{\"w\":\"nouvel\",\"t\":\"new\"},{\"w\":\"hôtel.\",\"t\":\"hotel\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
];

export const REUSED: ImportedRow[] = [
  // ── the closed set, as headwords (6) ──
  {
    id: "fr.sons.adjectifs-essentiels.001", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "grand",
    en: "big, tall",
    ipa: "/ɡʁɑ̃/", respell: "GRAHⁿ",
    notes: "Feminine: grande. Opposite: petit. Un grand arbre, une grande maison.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.002", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "petit",
    en: "small, little",
    ipa: "/pəti/", respell: "pə-TEE",
    notes: "Feminine: petite. Opposite: grand. Goes before the noun: un petit chat.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.003", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "bon",
    en: "good",
    ipa: "/bɔ̃/", respell: "BOHⁿ",
    notes: "Feminine: bonne. Opposite: mauvais. Un bon film, une bonne idée.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.004", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "mauvais",
    en: "bad",
    ipa: "/mɔvɛ/", respell: "moh-VEH",
    notes: "Feminine: mauvaise. Opposite: bon. Un mauvais jour.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.005", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "beau",
    en: "beautiful, handsome",
    ipa: "/bo/", respell: "BOH",
    notes: "Feminine: belle. Becomes bel before a vowel: un bel homme.",
    gender: null, cardType: "vocab",
    tags: ["adjective"], drills: ["flashcard","voiceflash"], version: 1,
  },
  {
    id: "fr.sons.adjectifs-essentiels.008", kind: "word", level: "sons", theme: "adjectifs-essentiels",
    fr: "vieux",
    en: "old",
    ipa: "/vjø/", respell: "VYUH",
    notes: "Feminine: vieille. Becomes vieil before a vowel: un vieil homme. Opposites: nouveau, jeune.",
    gender: null, cardType: "vocab",
    tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1,
  },

  // ── the default: an adjective sitting BEHIND its noun (4) ──
  {
    id: "fr.a1.dictee.205", kind: "sentence", level: "a1", theme: "dictee",
    fr: "Je lis un livre facile.",
    en: "I am reading an easy book.",
    ipa: "ʒə li œ̃ livʁ fa.sil", respell: null,
    notes: null,
    gender: null, cardType: null,
    tags: [], drills: ["sentence","review"], version: 1,
  },
  {
    id: "fr.a1.cafe.088", kind: "sentence", level: "a1", theme: "cafe",
    fr: "Je prends un café noir.",
    en: "I'm having a black coffee.",
    ipa: "/ʒə pʁɑ̃ œ̃ ka.fe nwaʁ/", respell: null,
    notes: "The final ds in prends is silent, so prends and prend sound identical.",
    gender: null, cardType: null,
    tags: ["silent-letter"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.cuisine.193", kind: "sentence", level: "a1", theme: "cuisine",
    fr: "Le chef prépare un plat délicieux.",
    en: "The chef prepares a delicious dish.",
    ipa: "/lə ʃɛf pʁepaʁ œ̃ pla delisjø/", respell: null,
    notes: "The final t of plat is never pronounced, which often leads learners to drop it in spelling too.",
    gender: null, cardType: null,
    tags: ["silent-letter"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.deplacements.224", kind: "sentence", level: "a1", theme: "deplacements",
    fr: "Mon frère conduit une voiture rouge.",
    en: "My brother drives a red car.",
    ipa: "mɔ̃ fʁɛʁ kɔ̃.dɥi yn vwa.tyʁ ʁuʒ", respell: null,
    notes: null,
    gender: null, cardType: null,
    tags: [], drills: ["sentence","review"], version: 1,
  },

  // ── the exception: the closed set sitting IN FRONT (4) ──
  {
    id: "fr.a1.adjectifs-essentiels.196", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Il a une petite voiture.",
    en: "He has a small car.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"Il a\",\"t\":\"he has\"},{\"w\":\"une petite\",\"t\":\"a small\"},{\"w\":\"voiture.\",\"t\":\"car\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.197", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Elle a un petit chien.",
    en: "She has a small dog.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"Elle a\",\"t\":\"she has\"},{\"w\":\"un petit\",\"t\":\"a small\"},{\"w\":\"chien.\",\"t\":\"dog\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.201", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est une belle maison.",
    en: "It's a beautiful house.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"C'est une\",\"t\":\"it's a\"},{\"w\":\"belle\",\"t\":\"beautiful\"},{\"w\":\"maison.\",\"t\":\"house\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.043", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est un vieux château.",
    en: "It's an old castle.",
    ipa: "sɛ.tœ̃ vjø ʃa.to", respell: null,
    notes: "'Vieux' precedes the noun 'château'.",
    gender: null, cardType: null,
    tags: ["grammaire"], drills: ["dictation"], version: 1,
  },

  // ── two adjectives splitting around the noun (3) ──
  {
    id: "fr.a1.adjectifs-essentiels.007", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "J'ai un petit chien blanc.",
    en: "I have a small white dog.",
    ipa: "ʒe œ̃ pə.ti ʃjɛ̃ blɑ̃", respell: null,
    notes: "The masculine 'petit' ends in a silent t.",
    gender: null, cardType: null,
    tags: ["silent-letter"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.008", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Elle porte une petite robe rouge.",
    en: "She is wearing a small red dress.",
    ipa: "ɛl pɔʁt yn pə.tit ʁɔb ʁuʒ", respell: null,
    notes: "Feminine 'petite' pronounces the final t.",
    gender: null, cardType: null,
    tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.027", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Elle porte une belle robe bleue.",
    en: "She is wearing a beautiful blue dress.",
    ipa: "ɛl pɔʁt yn bɛl ʁɔb blø", respell: null,
    notes: "'Beau' becomes 'belle' in the feminine.",
    gender: null, cardType: null,
    tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },

  // ── des becomes de in front of the adjective (6) ──
  {
    id: "fr.a1.adjectifs-essentiels.202", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Ce sont de beaux tableaux.",
    en: "These are beautiful paintings.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"Ce sont\",\"t\":\"these are\"},{\"w\":\"de beaux\",\"t\":\"beautiful\"},{\"w\":\"tableaux.\",\"t\":\"paintings\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.203", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Ce sont de belles fleurs.",
    en: "These are beautiful flowers.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"Ce sont\",\"t\":\"these are\"},{\"w\":\"de belles\",\"t\":\"beautiful\"},{\"w\":\"fleurs.\",\"t\":\"flowers\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.212", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Ce sont de vieux amis.",
    en: "They are old friends.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"Ce sont\",\"t\":\"they are\"},{\"w\":\"de vieux\",\"t\":\"old\"},{\"w\":\"amis.\",\"t\":\"friends\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.213", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Ce sont de vieilles photos.",
    en: "These are old photos.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"Ce sont\",\"t\":\"these are\"},{\"w\":\"de vieilles\",\"t\":\"old\"},{\"w\":\"photos.\",\"t\":\"photos\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.198", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Nous avons de petits problèmes.",
    en: "We have small problems.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"Nous avons\",\"t\":\"we have\"},{\"w\":\"de petits\",\"t\":\"small\"},{\"w\":\"problèmes.\",\"t\":\"problems\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.199", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "Elle porte de petites chaussures.",
    en: "She wears small shoes.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"Elle porte\",\"t\":\"she wears\"},{\"w\":\"de petites\",\"t\":\"small\"},{\"w\":\"chaussures.\",\"t\":\"shoes\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },

  // ── bel, vieil and nouvel, each beside its consonant partner (3) ──
  {
    id: "fr.a1.adjectifs-essentiels.025", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est un beau jardin.",
    en: "It's a beautiful garden.",
    ipa: "sɛ.tœ̃ bo ʒaʁ.dɛ̃", respell: null,
    notes: "'Beau' precedes the noun 'jardin'.",
    gender: null, cardType: null,
    tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.204", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est un bel arbre.",
    en: "It's a beautiful tree.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"C'est un\",\"t\":\"it's a\"},{\"w\":\"bel\",\"t\":\"beautiful\"},{\"w\":\"arbre.\",\"t\":\"tree\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.214", kind: "sentence", level: "a1", theme: "adjectifs-essentiels",
    fr: "C'est un vieil immeuble.",
    en: "It's an old building.",
    ipa: null, respell: null,
    notes: "{\"tiles\":[{\"w\":\"C'est un\",\"t\":\"it's an\"},{\"w\":\"vieil\",\"t\":\"old\"},{\"w\":\"immeuble.\",\"t\":\"building\"}]}",
    gender: null, cardType: null,
    tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
];

export const IMPORTED_IDS: string[] = IMPORTED.map((r) => r.id);
export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

