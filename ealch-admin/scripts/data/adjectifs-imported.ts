// a1.14's IMPORTED and REUSED manifests: a RECORDED READ of Postgres taken on
// 2026-08-06 by scripts/_adjectifs_manifest.ts, so the merge can write these
// rows into seed.json without a connection.
//
// NOTHING BELOW WAS RETYPED. Regenerate with:
//
//     pnpm tsx scripts/_adjectifs_manifest.ts
//
// The batch compares every field against the live database before writing and
// dies if the manifest has drifted, because a stale manifest puts the seed ahead
// of rows nobody has looked at. Only the `why` lines on REUSED are written by
// hand; every other character is generated.
//
// ── Why this file is 44 rows long ─────────────────────────────────
//
// `adjectifs-essentiels` holds 632 published rows in Postgres and FOUR in
// seed.json, because the theme is not in SEED_CUT.themes. `couleurs` and
// `description-personnes-objets` are outside the cut too. So every row this
// lesson names has to be carried into the seed by the merge or it renders as an
// empty card. That is why the import is eleven times the authored set: this
// lesson teaches from the corpus, and the corpus is almost entirely outside the
// cut.
//
// Split as the classifier found it, not as anyone guessed:
//
//     IMPORTED  44   published in Postgres, ABSENT from the seed
//     REUSED     7   published in Postgres, ALREADY in the seed, untouched
//
// Three imported rows carry a `respell` this lesson REPAIRS
// (fr.sons.adjectifs-essentiels.001, .002 and .003). The values below are what
// the database holds TODAY, pre-repair, which is what the drift check compares
// against.
//
// The `ipa` on the a1 sentence rows is stored WITHOUT slashes, most `notes` on
// the .19x/.2xx band carry a JSON tile breakdown, and the four
// description-personnes-objets rows carry curly quotation marks inside their
// notes. All three are reproduced exactly as stored, because the batch compares
// field by field and a "tidied" value is drift.
//
// Two stored `notes` are worth reading rather than skipping past, because they
// document this lesson’s own content and were written by somebody else:
//
//   .002 petit    "Goes before the noun: un petit chat."
//   .005 beau     "Becomes bel before a vowel: un bel homme."
//   .008 vieux    "Becomes vieil before a vowel: un vieil homme."
//
// The corpus already knew both halves of this lesson. Nothing had sequenced
// them.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export type ImportedRow = Item;

export const IMPORTED: ImportedRow[] = [

  // ── the six headwords, which the brief expected to have to author (6) ──
  {
    id: "fr.sons.adjectifs-essentiels.001", kind: "word", level: "sons", theme: "adjectifs-essentiels", fr: "grand", en: "big, tall", ipa: "/ɡʁɑ̃/", respell: "GRAHN", notes: "Feminine: grande. Opposite: petit. Un grand arbre, une grande maison.", tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.adjectifs-essentiels.002", kind: "word", level: "sons", theme: "adjectifs-essentiels", fr: "petit", en: "small, little", ipa: "/pəti/", respell: "puh-TEE", notes: "Feminine: petite. Opposite: grand. Goes before the noun: un petit chat.", tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.adjectifs-essentiels.003", kind: "word", level: "sons", theme: "adjectifs-essentiels", fr: "bon", en: "good", ipa: "/bɔ̃/", respell: "BOHN", notes: "Feminine: bonne. Opposite: mauvais. Un bon film, une bonne idée.", tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.adjectifs-essentiels.004", kind: "word", level: "sons", theme: "adjectifs-essentiels", fr: "mauvais", en: "bad", ipa: "/mɔvɛ/", respell: "moh-VEH", notes: "Feminine: mauvaise. Opposite: bon. Un mauvais jour.", tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.adjectifs-essentiels.005", kind: "word", level: "sons", theme: "adjectifs-essentiels", fr: "beau", en: "beautiful, handsome", ipa: "/bo/", respell: "BOH", notes: "Feminine: belle. Becomes bel before a vowel: un bel homme.", tags: ["adjective"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.adjectifs-essentiels.008", kind: "word", level: "sons", theme: "adjectifs-essentiels", fr: "vieux", en: "old", ipa: "/vjø/", respell: "VYUH", notes: "Feminine: vieille. Becomes vieil before a vowel: un vieil homme. Opposites: nouveau, jeune.", tags: ["adjective","opposites"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },

  // ── feminine headwords that already exist elsewhere (1) ──
  {
    id: "fr.sons.consonnes.138", kind: "word", level: "sons", theme: "consonnes", fr: "belle", en: "beautiful", ipa: "/bɛl/", respell: "BEL", tags: ["doubled"], drills: ["flashcard","voiceflash","review"], version: 1,
  },

  // ── the four-form paradigm, published and minimal, six adjectives (24) ──
  {
    id: "fr.a1.adjectifs-essentiels.192", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Ce garçon est très grand.", en: "This boy is very tall.", notes: "{\"tiles\":[{\"w\":\"Ce garçon\",\"t\":\"this boy\"},{\"w\":\"est très\",\"t\":\"is very\"},{\"w\":\"grand.\",\"t\":\"tall\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.193", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Cette fille est très grande.", en: "This girl is very tall.", notes: "{\"tiles\":[{\"w\":\"Cette fille\",\"t\":\"this girl\"},{\"w\":\"est très\",\"t\":\"is very\"},{\"w\":\"grande.\",\"t\":\"tall\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.194", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Les garçons sont grands.", en: "The boys are tall.", notes: "{\"tiles\":[{\"w\":\"Les garçons\",\"t\":\"the boys\"},{\"w\":\"sont\",\"t\":\"are\"},{\"w\":\"grands.\",\"t\":\"tall\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.195", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Les filles sont grandes.", en: "The girls are tall.", notes: "{\"tiles\":[{\"w\":\"Les filles\",\"t\":\"the girls\"},{\"w\":\"sont\",\"t\":\"are\"},{\"w\":\"grandes.\",\"t\":\"tall\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.197", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Elle a un petit chien.", en: "She has a small dog.", notes: "{\"tiles\":[{\"w\":\"Elle a\",\"t\":\"she has\"},{\"w\":\"un petit\",\"t\":\"a small\"},{\"w\":\"chien.\",\"t\":\"dog\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.196", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Il a une petite voiture.", en: "He has a small car.", notes: "{\"tiles\":[{\"w\":\"Il a\",\"t\":\"he has\"},{\"w\":\"une petite\",\"t\":\"a small\"},{\"w\":\"voiture.\",\"t\":\"car\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.198", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Nous avons de petits problèmes.", en: "We have small problems.", notes: "{\"tiles\":[{\"w\":\"Nous avons\",\"t\":\"we have\"},{\"w\":\"de petits\",\"t\":\"small\"},{\"w\":\"problèmes.\",\"t\":\"problems\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.199", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Elle porte de petites chaussures.", en: "She wears small shoes.", notes: "{\"tiles\":[{\"w\":\"Elle porte\",\"t\":\"she wears\"},{\"w\":\"de petites\",\"t\":\"small\"},{\"w\":\"chaussures.\",\"t\":\"shoes\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.025", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "C'est un beau jardin.", en: "It's a beautiful garden.", ipa: "sɛ.tœ̃ bo ʒaʁ.dɛ̃", notes: "'Beau' precedes the noun 'jardin'.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.201", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "C'est une belle maison.", en: "It's a beautiful house.", notes: "{\"tiles\":[{\"w\":\"C'est une\",\"t\":\"it's a\"},{\"w\":\"belle\",\"t\":\"beautiful\"},{\"w\":\"maison.\",\"t\":\"house\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.202", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Ce sont de beaux tableaux.", en: "These are beautiful paintings.", notes: "{\"tiles\":[{\"w\":\"Ce sont\",\"t\":\"these are\"},{\"w\":\"de beaux\",\"t\":\"beautiful\"},{\"w\":\"tableaux.\",\"t\":\"paintings\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.203", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Ce sont de belles fleurs.", en: "These are beautiful flowers.", notes: "{\"tiles\":[{\"w\":\"Ce sont\",\"t\":\"these are\"},{\"w\":\"de belles\",\"t\":\"beautiful\"},{\"w\":\"fleurs.\",\"t\":\"flowers\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.210", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Mon grand-père est vieux.", en: "My grandfather is old.", notes: "{\"tiles\":[{\"w\":\"Mon grand-père\",\"t\":\"my grandfather\"},{\"w\":\"est\",\"t\":\"is\"},{\"w\":\"vieux.\",\"t\":\"old\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.211", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Ma grand-mère est vieille.", en: "My grandmother is old.", notes: "{\"tiles\":[{\"w\":\"Ma grand-mère\",\"t\":\"my grandmother\"},{\"w\":\"est\",\"t\":\"is\"},{\"w\":\"vieille.\",\"t\":\"old\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.212", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Ce sont de vieux amis.", en: "They are old friends.", notes: "{\"tiles\":[{\"w\":\"Ce sont\",\"t\":\"they are\"},{\"w\":\"de vieux\",\"t\":\"old\"},{\"w\":\"amis.\",\"t\":\"friends\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.213", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Ce sont de vieilles photos.", en: "These are old photos.", notes: "{\"tiles\":[{\"w\":\"Ce sont\",\"t\":\"these are\"},{\"w\":\"de vieilles\",\"t\":\"old\"},{\"w\":\"photos.\",\"t\":\"photos\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.215", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Le repas était très bon.", en: "The meal was very good.", notes: "{\"tiles\":[{\"w\":\"Le repas\",\"t\":\"the meal\"},{\"w\":\"était très\",\"t\":\"was very\"},{\"w\":\"bon.\",\"t\":\"good\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.216", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "La soupe est bonne.", en: "The soup is good.", notes: "{\"tiles\":[{\"w\":\"La soupe\",\"t\":\"the soup\"},{\"w\":\"est\",\"t\":\"is\"},{\"w\":\"bonne.\",\"t\":\"good\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.217", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Les résultats sont bons.", en: "The results are good.", notes: "{\"tiles\":[{\"w\":\"Les résultats\",\"t\":\"the results\"},{\"w\":\"sont\",\"t\":\"are\"},{\"w\":\"bons.\",\"t\":\"good\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.218", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Les nouvelles sont bonnes.", en: "The news is good.", notes: "{\"tiles\":[{\"w\":\"Les nouvelles\",\"t\":\"the news\"},{\"w\":\"sont\",\"t\":\"are\"},{\"w\":\"bonnes.\",\"t\":\"good\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.219", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Ce film est mauvais.", en: "This movie is bad.", notes: "{\"tiles\":[{\"w\":\"Ce film\",\"t\":\"this movie\"},{\"w\":\"est\",\"t\":\"is\"},{\"w\":\"mauvais.\",\"t\":\"bad\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.220", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Cette idée est mauvaise.", en: "This idea is bad.", notes: "{\"tiles\":[{\"w\":\"Cette idée\",\"t\":\"this idea\"},{\"w\":\"est\",\"t\":\"is\"},{\"w\":\"mauvaise.\",\"t\":\"bad\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.221", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Les temps sont mauvais.", en: "The times are bad.", notes: "{\"tiles\":[{\"w\":\"Les temps\",\"t\":\"the times\"},{\"w\":\"sont\",\"t\":\"are\"},{\"w\":\"mauvais.\",\"t\":\"bad\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.222", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Les odeurs sont mauvaises dans la cuisine.", en: "The smells are bad in the kitchen.", notes: "{\"tiles\":[{\"w\":\"Les odeurs\",\"t\":\"the smells\"},{\"w\":\"sont mauvaises\",\"t\":\"are bad\"},{\"w\":\"dans la cuisine.\",\"t\":\"in the kitchen\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },

  // ── the third form, in front of a real vowel, and its consonant partner (5) ──
  {
    id: "fr.a1.adjectifs-essentiels.026", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "C'est un bel homme.", en: "He is a handsome man.", ipa: "sɛ.tœ̃ bɛl ɔm", notes: "'Bel' replaces 'beau' before a masculine noun starting with a vowel.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.204", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "C'est un bel arbre.", en: "It's a beautiful tree.", notes: "{\"tiles\":[{\"w\":\"C'est un\",\"t\":\"it's a\"},{\"w\":\"bel\",\"t\":\"beautiful\"},{\"w\":\"arbre.\",\"t\":\"tree\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.044", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Mon grand-père a un vieil ami à Lyon.", en: "My grandfather has an old friend in Lyon.", ipa: "mɔ̃ ɡʁɑ̃.pɛʁ a œ̃ vjɛj a.mi a ljɔ̃", notes: "'Vieil' replaces 'vieux' before a vowel-starting masculine noun.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.214", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "C'est un vieil immeuble.", en: "It's an old building.", notes: "{\"tiles\":[{\"w\":\"C'est un\",\"t\":\"it's an\"},{\"w\":\"vieil\",\"t\":\"old\"},{\"w\":\"immeuble.\",\"t\":\"building\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.043", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "C'est un vieux château.", en: "It's an old castle.", ipa: "sɛ.tœ̃ vjø ʃa.to", notes: "'Vieux' precedes the noun 'château'.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },

  // ── placement: the six in front, and one phrase carrying both orders (4) ──
  {
    id: "fr.a1.adjectifs-essentiels.002", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Elle habite dans une grande maison.", en: "She lives in a big house.", ipa: "ɛl a.bit dɑ̃z yn ɡʁɑ̃d mɛ.zɔ̃", notes: "Feminine 'grande' pronounces the d clearly.", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.008", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Elle porte une petite robe rouge.", en: "She is wearing a small red dress.", ipa: "ɛl pɔʁt yn pə.tit ʁɔb ʁuʒ", notes: "Feminine 'petite' pronounces the final t.", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.027", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Elle porte une belle robe bleue.", en: "She is wearing a beautiful blue dress.", ipa: "ɛl pɔʁt yn bɛl ʁɔb blø", notes: "'Beau' becomes 'belle' in the feminine.", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.007", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "J'ai un petit chien blanc.", en: "I have a small white dog.", ipa: "ʒe œ̃ pə.ti ʃjɛ̃ blɑ̃", notes: "The masculine 'petit' ends in a silent t.", tags: ["silent-letter"], drills: ["dictation"], version: 1,
  },

  // ── the dictee, the only short rows that stay in letters mode (4) ──
  {
    id: "fr.a1.description-personnes-objets.001", kind: "sentence", level: "a1", theme: "description-personnes-objets", fr: "Il est grand.", en: "He is tall.", ipa: "il ɛ ɡʁɑ̃", notes: "The final “d” in “grand” stays silent when nothing follows it.", tags: ["silent-letter"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.description-personnes-objets.041", kind: "sentence", level: "a1", theme: "description-personnes-objets", fr: "La table est grande.", en: "The table is big.", ipa: "la tabl ɛ ɡʁɑ̃d", notes: "“grand” takes a feminine e to agree with “table”.", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.description-personnes-objets.003", kind: "sentence", level: "a1", theme: "description-personnes-objets", fr: "Ils sont grands.", en: "They (m.) are tall.", ipa: "il sɔ̃ ɡʁɑ̃", notes: "The plural “grands” still sounds like singular “grand”, the s stays silent.", tags: ["accord-nombre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.description-personnes-objets.038", kind: "sentence", level: "a1", theme: "description-personnes-objets", fr: "Elle est belle.", en: "She is beautiful.", ipa: "ɛl ɛ bɛl", notes: "The feminine of “beau” is the irregular form “belle”.", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
];

export const REUSED: { id: string; fr: string; en: string; why: string }[] = [

  // ── feminine headwords that already exist elsewhere (3) ──
  {
    id: "fr.sons.muettes.047",
    fr: "grande",
    en: "big, tall (feminine)",
    why:
      'grande, authored by sons.06 as [\"e-switch\",\"gender-audible\",\"nasal\"] with the note \"The E stays silent. The D wakes up.\" That is this lesson\'s own teaching, already written, so the row is reused rather than re-authored: a second grande would be one card the learner rates twice in the SRS',
  },
  {
    id: "fr.sons.muettes.048",
    fr: "petite",
    en: "small (feminine)",
    why:
      'petite, the other half of the same sons.06 pair, noted \"Now you can hear which one it is.\" Its respelling carries a schwa, which is why this lesson repairs fr.sons.adjectifs-essentiels.002 from puh-TEE to the matching form: the masculine and the feminine sit on one card here',
  },
  {
    id: "fr.sons.nasales.167",
    fr: "bonne",
    en: "good (f.)",
    why:
      'bonne, the biggest sound change of the six, and sons.03 already carries the reason: \"The doubled N blocks nasalization.\" Its stored respelling BON is the VERIFIED PASSING FORM and is deliberately not a superscript. See the note on the nasal checker in adjectifs-corpus.ts',
  },

  // ── the colour side of the placement contrast, already in the seed (1) ──
  {
    id: "fr.a1.couleurs.001",
    fr: "Elle porte une jupe verte.",
    en: "She is wearing a green skirt.",
    why:
      'the colour half of the placement contrast, already in the seed because a1.13 imported it. It sits in the SAME FRAME as this lesson\'s \"Elle porte une petite robe rouge.\", so the two word orders can be shown with exactly one thing moving between them',
  },

  // ── the only voiceflash sentences in the corpus this lesson can use (3) ──
  {
    id: "fr.a1.metiers.273",
    fr: "Elle est grande.",
    en: "She is tall.",
    why:
      'MEASURED: one of only three published sentences in the entire corpus that carry one of these six AND the voiceflash drill, which is the drill the mic-scored deck runs. Without these three the spoken mission would be fourteen isolated words. This one is the audible feminine, said out loud',
  },
  {
    id: "fr.a1.metiers.278",
    fr: "C'est une bonne idée.",
    en: "That is a good idea.",
    why:
      'the second of the three, and it carries bonne, which is the largest sound change in the set. Saying it is the only way to find out whether the learner has the plain o and the audible n rather than the nasal they started with',
  },
  {
    id: "fr.sons.liaisons.149",
    fr: "Ils achètent une belle maison.",
    en: "They're buying a beautiful house.",
    why:
      'the third, and the only one of the three that puts one of these six IN FRONT OF ITS NOUN rather than after a verb, so the spoken mission ends on the word order the lesson is about. It is a sons row, which is BELOW a1 rather than above it, so nothing is being dragged up a level',
  },
];
