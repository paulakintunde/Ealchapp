// a1.13's IMPORTED and REUSED manifests: a RECORDED READ of Postgres taken on
// 2026-08-06 by scripts/_couleurs_manifest.ts, so the merge can write these rows
// into seed.json without a connection.
//
// NOTHING BELOW WAS RETYPED. Regenerate with:
//
//     pnpm tsx scripts/_couleurs_manifest.ts
//
// The batch compares every field against the live database before writing and
// dies if the manifest has drifted, because a stale manifest puts the seed ahead
// of rows nobody has looked at. Only the `why` lines on REUSED are written by
// hand; every other character is generated.
//
// ── Why this file is 30 rows long ─────────────────────────────────────────
//
// `couleurs` holds 322 published rows in Postgres and ZERO in seed.json,
// because the theme is not in SEED_CUT.themes. So every row this lesson names
// has to be carried into the seed by the merge or it renders as an empty card.
// That is the whole reason the import is larger than the authored set: the
// lesson teaches from the corpus and the corpus is entirely outside the cut.
//
// Split as the classifier found it, not as anyone guessed:
//
//     IMPORTED  30   published in Postgres, ABSENT from the seed
//     REUSED     6   published in Postgres, ALREADY in the seed, untouched
//
// The `ipa` on the a1 sentence rows is stored WITHOUT slashes and the `notes`
// on the .234/.235/.239/.331 rows carry a JSON tile breakdown. Both are
// reproduced exactly as stored, because the batch compares field by field and
// a "tidied" value is drift.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export type ImportedRow = Item;

export const IMPORTED: ImportedRow[] = [

  // ── the twelve colour headwords (12) ──
  //
  // The set the brief's first draft said did not exist. Every one carries ipa,
  // respell, cardType vocab and flashcard+voiceflash already. Four of the twelve
  // have their respell REPAIRED by this lesson (blanc, marron, orange, jaune);
  // the values below are what the database holds TODAY, pre-repair, which is
  // what the drift check compares against.
  {
    id: "fr.sons.couleurs.001", kind: "word", level: "sons", theme: "couleurs", fr: "rouge", en: "red", ipa: "/ʁuʒ/", respell: "ROOZH", notes: "Same form for masculine and feminine: un sac rouge, une voiture rouge. Sounds like 'roozh'.", tags: ["couleurs","adjectif"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.couleurs.002", kind: "word", level: "sons", theme: "couleurs", fr: "bleu", en: "blue", ipa: "/blø/", respell: "BLUH", notes: "Feminine: bleue (same sound). The vowel is like 'uh' with rounded lips, not 'oo'.", tags: ["couleurs","adjectif"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.couleurs.003", kind: "word", level: "sons", theme: "couleurs", fr: "vert", en: "green", ipa: "/vɛʁ/", respell: "VEHR", notes: "Feminine: verte, and you hear the final t: /vɛʁt/. The t is silent in the masculine.", tags: ["couleurs","adjectif"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.couleurs.004", kind: "word", level: "sons", theme: "couleurs", fr: "jaune", en: "yellow", ipa: "/ʒon/", respell: "ZHOHN", notes: "Same form for masculine and feminine. The j is soft, like the s in 'measure': 'zhone'.", tags: ["couleurs","adjectif"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.couleurs.005", kind: "word", level: "sons", theme: "couleurs", fr: "noir", en: "black", ipa: "/nwaʁ/", respell: "NWAR", notes: "Feminine: noire (same sound). Sounds like 'nwahr'.", tags: ["couleurs","adjectif"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.couleurs.006", kind: "word", level: "sons", theme: "couleurs", fr: "blanc", en: "white", ipa: "/blɑ̃/", respell: "BLAHN", notes: "Feminine: blanche /blɑ̃ʃ/. Masculine ends in a nasal vowel, the c is silent: 'blahn'.", tags: ["couleurs","adjectif"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.couleurs.007", kind: "word", level: "sons", theme: "couleurs", fr: "gris", en: "grey", ipa: "/ɡʁi/", respell: "GREE", notes: "Feminine: grise /ɡʁiz/. The s is silent in the masculine: 'gree'.", tags: ["couleurs","adjectif"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.couleurs.008", kind: "word", level: "sons", theme: "couleurs", fr: "rose", en: "pink", ipa: "/ʁoz/", respell: "ROHZ", notes: "Same form for masculine and feminine. Also the noun for the flower: une rose.", tags: ["couleurs","adjectif"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.couleurs.009", kind: "word", level: "sons", theme: "couleurs", fr: "orange", en: "orange", ipa: "/ɔʁɑ̃ʒ/", respell: "oh-RAHNZH", notes: "Invariable as a color: des sacs orange, no extra ending. Named after the fruit, une orange.", tags: ["couleurs","adjectif","invariable"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.couleurs.010", kind: "word", level: "sons", theme: "couleurs", fr: "violet", en: "purple", ipa: "/vjɔ.lɛ/", respell: "vyoh-LEH", notes: "Feminine: violette /vjɔ.lɛt/. The final t is silent in the masculine: 'vyoh-leh'.", tags: ["couleurs","adjectif"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.couleurs.011", kind: "word", level: "sons", theme: "couleurs", fr: "marron", en: "brown", ipa: "/ma.ʁɔ̃/", respell: "mah-ROHN", notes: "Invariable: des chaussures marron. Named after the chestnut. For hair, French uses brun instead.", tags: ["couleurs","adjectif","invariable"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.couleurs.012", kind: "word", level: "sons", theme: "couleurs", fr: "beige", en: "beige", ipa: "/bɛʒ/", respell: "BEHZH", notes: "Same form for masculine and feminine. Sounds like 'behzh', close to the English word.", tags: ["couleurs","adjectif"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },

  // ── violet: all four forms, already authored (4) ──
  //
  // The second complete four-form paradigm in the lesson, and not one row of it
  // is authored. violet is the "changes more" family: the feminine doubles the
  // t as well as adding the e.
  {
    id: "fr.a1.couleurs.010", kind: "sentence", level: "a1", theme: "couleurs", fr: "Le ballon des enfants est violet.", en: "The children's balloon is purple.", ipa: "lə ba.lɔ̃ de zɑ̃.fɑ̃ ɛ vjɔ.lɛ", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.couleurs.009", kind: "sentence", level: "a1", theme: "couleurs", fr: "Cette fleur est violette.", en: "This flower is purple.", ipa: "sɛt flœʁ ɛ vjɔ.lɛt", notes: "\"Violet\" becomes \"violette\": the silent t is now pronounced.", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.couleurs.065", kind: "sentence", level: "a1", theme: "couleurs", fr: "Les gants sont violets.", en: "The gloves are purple.", ipa: "le ɡɑ̃ sɔ̃ vjɔ.lɛ", tags: ["accord-nombre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.couleurs.081", kind: "sentence", level: "a1", theme: "couleurs", fr: "Les fleurs des champs sont violettes.", en: "The wildflowers are purple.", ipa: "le flœʁ de ʃɑ̃ sɔ̃ vjɔ.lɛt", notes: "\"Violette\" agrees with the feminine plural \"fleurs\".", tags: ["accord-nombre"], drills: ["dictation"], version: 1,
  },

  // ── agreement in the wild (6) ──
  //
  // The rule surviving outside the authored paradigm, on nouns the learner
  // already owns. fr.a1.couleurs.049 is the partner of the authored
  // "Les chaussures sont marron.": same noun, same frame, one colour agrees.
  {
    id: "fr.a1.couleurs.001", kind: "sentence", level: "a1", theme: "couleurs", fr: "Elle porte une jupe verte.", en: "She is wearing a green skirt.", ipa: "ɛl pɔʁt yn ʒyp vɛʁt", notes: "\"Verte\" agrees with the feminine \"jupe\" (add an e).", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.couleurs.003", kind: "sentence", level: "a1", theme: "couleurs", fr: "La maison est blanche.", en: "The house is white.", ipa: "la mɛ.zɔ̃ ɛ blɑ̃ʃ", notes: "\"Blanc\" becomes \"blanche\" for a feminine noun; the silent c turns into a pronounced ch.", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.couleurs.007", kind: "sentence", level: "a1", theme: "couleurs", fr: "Sa chemise est grise.", en: "His shirt is gray.", ipa: "sa ʃə.miz ɛ ɡʁiz", notes: "\"Gris\" adds an e for the feminine \"chemise\"; the silent s becomes a pronounced z.", tags: ["accord-genre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.couleurs.049", kind: "sentence", level: "a1", theme: "couleurs", fr: "Les chaussures sont rouges.", en: "The shoes are red.", ipa: "le ʃo.syʁ sɔ̃ ʁuʒ", notes: "\"Rouge\" adds an s to agree with the plural \"chaussures\".", tags: ["accord-nombre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.couleurs.053", kind: "sentence", level: "a1", theme: "couleurs", fr: "Les voitures sont noires.", en: "The cars are black.", ipa: "le vwa.tyʁ sɔ̃ nwaʁ", tags: ["accord-nombre"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.couleurs.077", kind: "sentence", level: "a1", theme: "couleurs", fr: "Les portes sont blanches.", en: "The doors are white.", ipa: "le pɔʁt sɔ̃ blɑ̃ʃ", tags: ["accord-nombre"], drills: ["dictation"], version: 1,
  },

  // ── marron: the feminine and plural the brief says do not exist (3) ──
  //
  // The brief: "You must author the feminine and plural cases yourself ...
  // Without those, the lesson asserts the rule and never shows it." All three
  // are published. .235 is feminine, .234 and .087 are plural, and .087's own
  // stored note already carries the reason: "Marron comes from the fruit name
  // and never agrees, even in the plural."
  {
    id: "fr.a1.couleurs.235", kind: "sentence", level: "a1", theme: "couleurs", fr: "La table marron vient d'Italie.", en: "The brown table comes from Italy.", notes: "{\"tiles\":[{\"w\":\"La table\",\"t\":\"the table\"},{\"w\":\"marron\",\"t\":\"brown\"},{\"w\":\"vient\",\"t\":\"comes\"},{\"w\":\"d'Italie.\",\"t\":\"from italy\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.couleurs.234", kind: "sentence", level: "a1", theme: "couleurs", fr: "Les chaussures marron coûtent cher.", en: "The brown shoes are expensive.", notes: "{\"tiles\":[{\"w\":\"Les chaussures\",\"t\":\"the shoes\"},{\"w\":\"marron\",\"t\":\"brown\"},{\"w\":\"coûtent cher.\",\"t\":\"are expensive\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.couleurs.087", kind: "sentence", level: "a1", theme: "couleurs", fr: "Ses yeux sont marron.", en: "His eyes are brown.", ipa: "se zjø sɔ̃ ma.ʁɔ̃", notes: "\"Marron\" comes from the fruit name and never agrees, even in the plural.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },

  // ── orange: the colour refusing, beside the fruit agreeing (3) ──
  //
  // The best teaching object in the lesson, and both halves are real rows.
  // fr.a1.adjectifs-essentiels.331 is the one worth the most: the fruit is
  // feminine and the adjective next to it (mûre) DOES agree, in the same
  // sentence, so orange is visibly a noun rather than a word French refuses to
  // touch. Its partner fr.a1.marche.116 is already in the seed and is REUSED.
  {
    id: "fr.a1.couleurs.094", kind: "sentence", level: "a1", theme: "couleurs", fr: "Les rideaux sont orange.", en: "The curtains are orange.", ipa: "le ʁi.do sɔ̃ ɔ.ʁɑ̃ʒ", notes: "\"Orange\" does not take an s in the plural.", tags: ["orthographe"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.couleurs.239", kind: "sentence", level: "a1", theme: "couleurs", fr: "Elle aime les fleurs orange.", en: "She likes orange flowers.", notes: "{\"tiles\":[{\"w\":\"Elle aime\",\"t\":\"she likes\"},{\"w\":\"les fleurs\",\"t\":\"the flowers\"},{\"w\":\"orange.\",\"t\":\"orange\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },
  {
    id: "fr.a1.adjectifs-essentiels.331", kind: "sentence", level: "a1", theme: "adjectifs-essentiels", fr: "Cette orange est bien mûre.", en: "This orange is quite ripe.", notes: "{\"tiles\":[{\"w\":\"Cette orange\",\"t\":\"this orange\"},{\"w\":\"est bien\",\"t\":\"is quite\"},{\"w\":\"mûre.\",\"t\":\"ripe\"}]}", tags: [], drills: ["sentence","flashcard","review"], version: 1,
  },

  // ── compound colours, which the brief says the corpus does not hold (2) ──
  //
  // The brief: "bleu clair, vert foncé, vert pomme. The corpus contains none of
  // these, so every example is yours." Sixteen compound-colour sentences are
  // published. These two are the best of them because both put the compound
  // behind a PLURAL noun, so the refusal to agree is visible rather than
  // asserted. .123 is the brief's own example, verbatim.
  {
    id: "fr.a1.couleurs.123", kind: "sentence", level: "a1", theme: "couleurs", fr: "Les murs sont vert pomme.", en: "The walls are apple green.", ipa: "le myʁ sɔ̃ vɛʁ pɔm", notes: "\"Vert pomme\" is a compound color, so it stays invariable in the plural.", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
  {
    id: "fr.a1.couleurs.125", kind: "sentence", level: "a1", theme: "couleurs", fr: "Ses yeux sont vert foncé.", en: "His eyes are dark green.", ipa: "se zjø sɔ̃ vɛʁ fɔ̃.se", notes: "\"Vert foncé\" stays invariable even with the plural \"yeux\".", tags: ["grammaire"], drills: ["dictation"], version: 1,
  },
];

/* ─── Reused: rows already inside the seed cut ─────────────────────────────
 *
 * Nothing about them changes and no shipped screen moves. Verified against
 * Postgres (published) AND seed.json on 2026-08-06, with the `fr` compared
 * between the two, because an id that is in the seed and not published renders
 * as an empty card rather than erroring. The `why` lines are the only hand
 * written text in this file.                                                */

export const REUSED: { id: string; fr: string; en: string; why: string }[] = [

  // ── feminine headwords that already exist (4) ──
  {
    id: "fr.sons.muettes.049",
    fr: "verte",
    en: "green (feminine)",
    why: 'the audible feminine, already taught in sons.06 and tagged ["e-switch","gender-audible"] there. '
      + 'This lesson names it as the SAME mechanism rather than teaching it cold, which is what the brief asks '
      + 'for. Reused rather than written: re-authoring it would fail flashhub-coverage.test.ts',
  },
  {
    id: "fr.sons.muettes.054",
    fr: "blanche",
    en: "white (feminine)",
    why: 'the irregular feminine, and the brief is right that it is irregular in a way the others are not: '
      + 'blanche, never blance. sons.06 already authored it beside blanc as ["careful-exception","silent-c"], '
      + 'so this lesson reuses rather than writes. It also exists at fr.sons.consonnes.024 with the same respell',
  },
  {
    id: "fr.sons.nasales.170",
    fr: "brun",
    en: "brown (m.)",
    why: 'the masculine half of the most dramatic audible pair in the language. Not one of the twelve this '
      + 'lesson teaches: it is shown in the ear section and never drilled for production',
  },
  {
    id: "fr.sons.nasales.171",
    fr: "brune",
    en: "brown (f.)",
    why: 'the nasal collapses outright, which no other colour does. sons.03 authored it as ["oral","anti-rule"] '
      + 'with the note "N plus a vowel blocks nasalization", so the mechanism is already taught and this lesson '
      + 'only points at it',
  },

  // ── the one same-colour m+f sentence in the language (1) ──
  {
    id: "fr.a1.objets.124",
    fr: "Mon sac est noir et ma veste est noire.",
    en: "My bag is black and my jacket is black too.",
    why: 'the best sentence in the lesson and the brief is right about it: one sentence, one colour, two forms, '
      + 'and the only thing that changed is the noun. Verified to be the ONLY row in 47,351 carrying a single '
      + 'colour in both genders. Its two nouns are the two the authored paradigm is built on, deliberately',
  },

  // ── orange: the colour refusing, beside the fruit agreeing (1) ──
  {
    id: "fr.a1.marche.116",
    fr: "Le client demande le prix des oranges.",
    en: "The customer asks the price of the oranges.",
    why: 'the fruit pluralising normally, which is the half of the invariable rule that makes it an idea rather '
      + 'than an exception. Shown beside fr.a1.couleurs.239 "Elle aime les fleurs orange." on ONE screen',
  },
];
