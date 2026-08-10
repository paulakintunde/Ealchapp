// a1.17's IMPORTED and REUSED manifests: a RECORDED READ of Postgres taken on
// 2026-08-06 by scripts/_possessifs_manifest.ts, so the merge can write these
// rows into seed.json without a connection.
//
// NOTHING BELOW WAS RETYPED. Regenerate with:
//
//     pnpm tsx scripts/_possessifs_manifest.ts > scripts/data/_possessifs-manifest.gen.txt
//
// The batch compares every field against the live database before writing and
// dies if the manifest has drifted, because a stale manifest puts the seed ahead
// of rows nobody has looked at. Only the `why` lines on REUSED are written by
// hand; every other character is generated.
//
// ── Why the import is exactly twelve rows ──────────────────────────────────
//
// `famille` IS in SEED_CUT.themes, which is the opposite of a1.13's situation
// with `couleurs`. Every famille row this lesson names is therefore already in
// the seed and needs nothing carried, and so are the dictee, maison, cafe,
// sports-et-loisirs and liaisons sentences. They are REUSED and untouched.
//
// The twelve possessive HEADWORDS are the exception. They live in
// `mots-essentiels`, which is NOT in the cut, so none of them is in the seed
// today and all twelve have to be carried or they render as empty cards. They
// are also the rows the brief said did not exist:
//
//     fr.sons.mots-essentiels.093-104   mon ma mes ton ta tes son sa ses
//                                       notre votre leur
//
// The block CLOSES at .105, which is `celui`, so `nos`, `vos` and `leurs` could
// not be added in place and are authored into famille instead. See the header
// of possessifs-corpus.ts.
//
// Split as the classifier found it, not as anyone guessed:
//
//     IMPORTED  12   published in Postgres, ABSENT from the seed
//     REUSED    14   published in Postgres, ALREADY in the seed, untouched
//
// Three rows a1.17 obviously wants are in NEITHER list, and the reasons are in
// scripts/_possessifs_manifest.ts beside the WANTED map: two store a U+203F tie
// in their `ipa` and are not in the seed, so importing them would add a glyph
// that renders as an underscore on a Pixel 6, and the third is another lesson's
// error-correction card. All twelve rows below were checked for the tie and none
// carries it.
//
// `mon`, `ton` and `son` are reproduced here with the BROKEN respellings they
// carry today (MOHN, TOHN, SOHN). They are repaired by RESPELL_REPAIRS in
// possessifs-corpus.ts rather than tidied here, because the batch compares this
// manifest field by field against the database and a corrected value would read
// as drift and stop the run.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export type ImportedRow = Item;

export const IMPORTED: ImportedRow[] = [

  // ── the twelve possessive headwords the brief said did not exist (12) ──
  {
    id: "fr.sons.mots-essentiels.093", kind: "word", level: "sons", theme: "mots-essentiels", fr: "mon", en: "my (masculine)", ipa: "/mɔ̃/", respell: "MOHN", notes: "before a masculine noun: mon frère", tags: ["possessive"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.mots-essentiels.094", kind: "word", level: "sons", theme: "mots-essentiels", fr: "ma", en: "my (feminine)", ipa: "/ma/", respell: "MA", notes: "before a feminine noun: ma soeur", tags: ["possessive"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.mots-essentiels.095", kind: "word", level: "sons", theme: "mots-essentiels", fr: "mes", en: "my (plural)", ipa: "/me/", respell: "MAY", notes: "before any plural noun: mes amis", tags: ["possessive"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.mots-essentiels.096", kind: "word", level: "sons", theme: "mots-essentiels", fr: "ton", en: "your (masculine)", ipa: "/tɔ̃/", respell: "TOHN", notes: "informal, before a masculine noun: ton livre", tags: ["possessive"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.mots-essentiels.097", kind: "word", level: "sons", theme: "mots-essentiels", fr: "ta", en: "your (feminine)", ipa: "/ta/", respell: "TA", notes: "informal, before a feminine noun: ta maison", tags: ["possessive"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.mots-essentiels.098", kind: "word", level: "sons", theme: "mots-essentiels", fr: "tes", en: "your (plural)", ipa: "/te/", respell: "TAY", notes: "informal, before any plural noun: tes parents", tags: ["possessive"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.mots-essentiels.099", kind: "word", level: "sons", theme: "mots-essentiels", fr: "son", en: "his, her (masculine)", ipa: "/sɔ̃/", respell: "SOHN", notes: "agrees with the noun, not the owner: son père", tags: ["possessive"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.mots-essentiels.100", kind: "word", level: "sons", theme: "mots-essentiels", fr: "sa", en: "his, her (feminine)", ipa: "/sa/", respell: "SA", notes: "agrees with the noun, not the owner: sa mère", tags: ["possessive"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.mots-essentiels.101", kind: "word", level: "sons", theme: "mots-essentiels", fr: "ses", en: "his, her (plural)", ipa: "/se/", respell: "SAY", notes: "before any plural noun: ses enfants", tags: ["possessive"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.mots-essentiels.102", kind: "word", level: "sons", theme: "mots-essentiels", fr: "notre", en: "our", ipa: "/nɔtʁ/", respell: "noh-TRUH", notes: "same form for masculine and feminine: notre chat", tags: ["possessive"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.mots-essentiels.103", kind: "word", level: "sons", theme: "mots-essentiels", fr: "votre", en: "your (formal or plural)", ipa: "/vɔtʁ/", respell: "voh-TRUH", notes: "polite form: votre nom", tags: ["possessive"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
  {
    id: "fr.sons.mots-essentiels.104", kind: "word", level: "sons", theme: "mots-essentiels", fr: "leur", en: "their", ipa: "/lœʁ/", respell: "LUHR", notes: "same form for masculine and feminine: leur chien", tags: ["possessive"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab",
  },
];

export const REUSED: { id: string; fr: string; en: string; why: string }[] = [

  // ── the three grid nouns, whose gender the learner can check (3) ──
  {
    id: "fr.a1.famille.003",
    fr: "le frère",
    en: "the brother",
    why: "the masculine grid noun, and the row a learner checks the gender on. Every mon frère and ton "
      + "frère cell in the paradigm rests on this card saying le frère",
  },
  {
    id: "fr.a1.famille.004",
    fr: "la sœur",
    en: "the sister",
    why: "the feminine grid noun. ma sœur against mon amie is only a rule rather than a mistake if the "
      + "learner can see that BOTH are the une kind, and this is where they see it for the first one",
  },
  {
    id: "fr.a1.famille.014",
    fr: "les parents",
    en: "the parents",
    why: "the plural grid noun, and the fourth respelling repair: it ships LAY pah-RAHN, closing the nasal "
      + "of parents with a plain n. It appears in six of the eighteen paradigm sentences",
  },

  // ── one owner, two things, two possessives, in one published sentence (1) ──
  {
    id: "fr.a1.famille.083",
    fr: "Mon frère et ma sœur habitent à Lyon.",
    en: "My brother and my sister live in Lyon.",
    why: "ONE OWNER, TWO THINGS, TWO DIFFERENT POSSESSIVES, in one published sentence. The single best "
      + "corpus row in the lesson: the speaker never changes and mon becomes ma anyway, which is the "
      + "reframe with nothing authored. a1.13 leaned on fr.a1.objets.124 the same way",
  },

  // ── the his reading, already glossed as his in the corpus (2) ──
  {
    id: "fr.a1.dictee.001",
    fr: "Il a mangé ses croissants avec sa sœur.",
    en: "He ate his croissants with his sister.",
    why: "the his reading, and the corpus already glosses it as He ate his croissants with his sister. So "
      + "the pair this lesson puts on one screen is half-published: the English was written by somebody "
      + "who had to choose",
  },
  {
    id: "fr.a1.sports-et-loisirs.081",
    fr: "Il joue au football avec ses amis le week-end.",
    en: "He plays soccer with his friends on weekends.",
    why: "ses amis with a male subject in the same sentence, so the ambiguity is resolved by context "
      + "rather than by the possessive",
  },

  // ── the vowel rule surviving in the wild (2) ──
  {
    id: "fr.sons.liaisons.081",
    fr: "Mon école ouvre tôt.",
    en: "My school opens early.",
    why: "mon école in the wild. école is feminine and vowel-initial, so this is the vowel rule firing on "
      + "a row no part of this lesson authored. It carries a tie in its stored ipa and is ALREADY in the "
      + "seed, so reusing it adds nothing new; this lesson never displays that field",
  },
  {
    id: "fr.a1.dictee.188",
    fr: "Mon amie cherche sa trousse.",
    en: "My friend is looking for her pencil case.",
    why: "Mon amie cherche sa trousse. carries the vowel rule AND a sa in one sentence, on a feminine "
      + "owner, so it is also quiet evidence that sa says nothing about who owns the pencil case",
  },

  // ── notre, nos, votre and vos, each on a real sentence (4) ──
  {
    id: "fr.a1.maison.101",
    fr: "Notre maison a un grand jardin.",
    en: "Our house has a big garden.",
    why: "notre in the wild, on a feminine noun, which is the point: notre does not move for it",
  },
  {
    id: "fr.a1.cafe.132",
    fr: "Nous attendons nos amis au café.",
    en: "We wait for our friends at the café.",
    why: "nos in the wild. Chosen over fr.a1.animaux-domestiques.006, which is the more obvious row and "
      + "stores a U+203F tie while being absent from the seed. This one is already in the seed and "
      + "tie-free",
  },
  {
    id: "fr.a1.dictee.210",
    fr: "Vous écrivez votre adresse.",
    en: "You write your address.",
    why: "votre in the wild, in front of a vowel, where it does not change. There is no elision and no "
      + "swap, which is the cheapest proof that the vowel rule reaches only mon, ton and son",
  },
  {
    id: "fr.a1.dictee.321",
    fr: "Vous ouvrez vos livres à la page dix.",
    en: "You open your books to page ten.",
    why: "vos in the wild, and the only published a1 sentence in the seed that puts it in front of a plain "
      + "plural noun. vos is one of the two forms a grid looks complete without",
  },

  // ── leur and leurs in the wild, on different nouns (2) ──
  {
    id: "fr.a1.cafe.093",
    fr: "Les clients attendent leur commande.",
    en: "The customers are waiting for their order.",
    why: "leur with several owners and ONE thing. Les clients is plural and leur commande is singular, "
      + "which is exactly the count the s answers to",
  },
  {
    id: "fr.a1.dictee.184",
    fr: "Les élèves rangent leurs livres.",
    en: "The students put away their books.",
    why: "leurs with several owners and SEVERAL things, in the same shape as the row above. Between them "
      + "the corpus proves the rule; it does not prove it MINIMALLY, which is why fr.a1.famille.264 and "
      + ".265 exist",
  },
];
