// a1.15's IMPORTED manifest: a RECORDED READ of Postgres taken on 2026-08-06 by
// scripts/_famille_manifest.ts.
//
// NOTHING BELOW WAS RETYPED. Regenerate with:
//
//     pnpm tsx scripts/_famille_manifest.ts > scripts/data/_famille-manifest.gen.txt
//
// The batch compares every field against the live database before writing and
// dies if the manifest has drifted, because a stale manifest puts the seed ahead
// of rows nobody has looked at.
//
// ── Why every row says inSeed: true, and why that is the headline ─────────
//
// a1.13 had to split this file into IMPORTED (published, ABSENT from the seed,
// so the merge carries it) and REUSED (already there). `couleurs` is not in
// SEED_CUT.themes, so 30 of its 36 rows were outside the cut and the merge had
// to write them in or they would render as empty cards.
//
// `famille` IS in SEED_CUT.themes and the split collapses: 32 wanted, 32
// already in the seed, 0 outside it. The probe measured 331 published in
// Postgres and 331 present in the seed for this theme, so the brief's central
// assumption is confirmed rather than assumed.
//
// The consequence for the merge is the opposite of a1.13's: this merge adds only
// the EIGHTEEN AUTHORED rows, because there is nothing to carry. `inSeed` is
// recorded per row anyway, and the batch re-derives it, because "the theme is in
// the cut so the seed must be complete" is exactly the shape of reasoning the
// last four briefs got wrong.
//
// fr.sons.muettes.058 ("fil") is the one row from outside famille. sons.06 owns
// it and it is in the seed too, so it needs no carrying either.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** An imported row, plus the classification the generator computed. */
export type ImportedRow = Item & { inSeed: boolean };

export const IMPORTED: ImportedRow[] = [

  // ── the six matched pairs (12) ──
  {
    id: "fr.a1.famille.001", kind: "word", level: "a1", theme: "famille", fr: "le père", en: "the father", respell: "LUH PEHR", gender: "m", tags: ["famille","noun","people"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.002", kind: "word", level: "a1", theme: "famille", fr: "la mère", en: "the mother", respell: "LAH MEHR", gender: "f", tags: ["famille","noun","people"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.003", kind: "word", level: "a1", theme: "famille", fr: "le frère", en: "the brother", ipa: "/fʁɛʁ/", respell: "LUH FREHR", gender: "m", tags: ["famille","noun","people"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.004", kind: "word", level: "a1", theme: "famille", fr: "la sœur", en: "the sister", ipa: "/sœʁ/", respell: "LAH SUHR", gender: "f", tags: ["famille","noun","people"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.015", kind: "word", level: "a1", theme: "famille", fr: "le fils", en: "the son", ipa: "/lə fis/", respell: "LUH FEES", gender: "m", notes: "Final s is pronounced.", tags: ["famille","noun"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.016", kind: "word", level: "a1", theme: "famille", fr: "la fille", en: "the daughter", ipa: "/la fij/", respell: "LAH FEE", gender: "f", notes: "Also means girl in general.", tags: ["famille","noun"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.024", kind: "word", level: "a1", theme: "famille", fr: "l'oncle", en: "the uncle", ipa: "/lɔ̃kl/", respell: "LOHNKL", gender: "m", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.025", kind: "word", level: "a1", theme: "famille", fr: "la tante", en: "the aunt", ipa: "/la tɑ̃t/", respell: "LAH TAHNT", gender: "f", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.026", kind: "word", level: "a1", theme: "famille", fr: "le cousin", en: "the cousin (male)", ipa: "/lə ku.zɛ̃/", respell: "LUH koo-ZAN", gender: "m", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.027", kind: "word", level: "a1", theme: "famille", fr: "la cousine", en: "the cousin (female)", ipa: "/la ku.zin/", respell: "LAH koo-ZEEN", gender: "f", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.028", kind: "word", level: "a1", theme: "famille", fr: "le neveu", en: "the nephew", ipa: "/lə nə.vø/", respell: "LUH nuh-VUH", gender: "m", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.029", kind: "word", level: "a1", theme: "famille", fr: "la nièce", en: "the niece", ipa: "/la njɛs/", respell: "LAH NYESS", gender: "f", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },

  // ── grandparents, parents and the family itself (7) ──
  {
    id: "fr.a1.famille.013", kind: "word", level: "a1", theme: "famille", fr: "la famille", en: "the family", ipa: "/fa.mij/", respell: "LAH fah-MEE", gender: "f", notes: "Core noun for the whole topic.", tags: ["famille","noun"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.014", kind: "word", level: "a1", theme: "famille", fr: "les parents", en: "the parents", ipa: "/le pa.ʁɑ̃/", respell: "LAY pah-RAHN", gender: "m", notes: "Plural; covers both mother and father.", tags: ["famille","noun","plural"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.021", kind: "word", level: "a1", theme: "famille", fr: "la grand-mère", en: "the grandmother", ipa: "/la ɡʁɑ̃.mɛʁ/", respell: "LAH grahn-MEHR", gender: "f", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.022", kind: "word", level: "a1", theme: "famille", fr: "le grand-père", en: "the grandfather", ipa: "/lə ɡʁɑ̃.pɛʁ/", respell: "LUH grahn-PEHR", gender: "m", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.023", kind: "word", level: "a1", theme: "famille", fr: "les grands-parents", en: "the grandparents", ipa: "/le ɡʁɑ̃.pa.ʁɑ̃/", respell: "LAY grahn-pah-RAHN", gender: "m", notes: "Note the s on grands.", tags: ["famille","noun","plural","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.030", kind: "word", level: "a1", theme: "famille", fr: "le petit-fils", en: "the grandson", ipa: "/lə pə.ti.fis/", respell: "LUH puh-tee-FEES", gender: "m", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.031", kind: "word", level: "a1", theme: "famille", fr: "la petite-fille", en: "the granddaughter", ipa: "/la pə.tit.fij/", respell: "LAH puh-teet-FEE", gender: "f", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },

  // ── husband and wife (2) ──
  {
    id: "fr.a1.famille.017", kind: "word", level: "a1", theme: "famille", fr: "le mari", en: "the husband", ipa: "/lə ma.ʁi/", respell: "LUH mah-REE", gender: "m", tags: ["famille","noun"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.018", kind: "word", level: "a1", theme: "famille", fr: "la femme", en: "the wife", ipa: "/la fam/", respell: "LAH FAHM", gender: "f", notes: "Also means woman; context decides.", tags: ["famille","noun"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },

  // ── where the rule stops (2) ──
  {
    id: "fr.a1.famille.019", kind: "word", level: "a1", theme: "famille", fr: "le bébé", en: "the baby", ipa: "/lə be.be/", respell: "LUH bay-BAY", gender: "m", notes: "Masculine even for a baby girl.", tags: ["famille","noun"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.020", kind: "word", level: "a1", theme: "famille", fr: "l'enfant", en: "the child", ipa: "/lɑ̃.fɑ̃/", respell: "lahn-FAHN", gender: "m", notes: "Same form for boys and girls.", tags: ["famille","noun"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },

  // ── the extended set (4) ──
  {
    id: "fr.a1.famille.032", kind: "word", level: "a1", theme: "famille", fr: "le beau-père", en: "the father-in-law", ipa: "/lə bo.pɛʁ/", respell: "LUH boh-PEHR", gender: "m", notes: "Also means stepfather.", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.033", kind: "word", level: "a1", theme: "famille", fr: "la belle-mère", en: "the mother-in-law", ipa: "/la bɛl.mɛʁ/", respell: "LAH behl-MEHR", gender: "f", notes: "Also means stepmother.", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.036", kind: "word", level: "a1", theme: "famille", fr: "le demi-frère", en: "the half brother", ipa: "/lə də.mi.fʁɛʁ/", respell: "LUH duh-mee-FREHR", gender: "m", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },
  {
    id: "fr.a1.famille.037", kind: "word", level: "a1", theme: "famille", fr: "la demi-sœur", en: "the half sister", ipa: "/la də.mi.sœʁ/", respell: "LAH duh-mee-SUHR", gender: "f", tags: ["famille","noun","extended"], drills: ["flashcard","voiceflash"], version: 1, cardType: "vocab", inSeed: true,
  },

  // ── sentences that already exist (4) ──
  {
    id: "fr.a1.famille.005", kind: "sentence", level: "a1", theme: "famille", fr: "Ma mère s'appelle Marie.", en: "My mother's name is Marie.", notes: "« Mère » is feminine, so the possessive is « ma ».", tags: ["famille","possessives"], drills: ["flashcard"], version: 1, cardType: "gapfill", inSeed: true,
  },
  {
    id: "fr.a1.famille.006", kind: "sentence", level: "a1", theme: "famille", fr: "J'ai deux frères et une sœur.", en: "I have two brothers and one sister.", notes: "After a number above one, the noun takes a plural -s.", tags: ["famille","plural"], drills: ["flashcard"], version: 1, cardType: "gapfill", inSeed: true,
  },
  {
    id: "fr.a1.famille.010", kind: "sentence", level: "a1", theme: "famille", fr: "Mon frère a dix ans.", en: "My brother is ten years old.", notes: "French uses « avoir » for age, not « être ».", tags: ["famille","avoir","age"], drills: ["flashcard"], version: 1, cardType: "error", inSeed: true,
  },
  {
    id: "fr.a1.famille.083", kind: "sentence", level: "a1", theme: "famille", fr: "Mon frère et ma sœur habitent à Lyon.", en: "My brother and my sister live in Lyon.", ipa: "mɔ̃ fʁɛʁ e ma sœʁ a.bit a ljɔ̃", notes: "“habitent” starts with a silent h, so “et” links smoothly right before it.", tags: ["silent-letter"], drills: ["dictation"], version: 1, inSeed: true,
  },

  // ── the thread, from sons.06 (1) ──
  {
    id: "fr.sons.muettes.058", kind: "word", level: "sons", theme: "muettes", fr: "fil", en: "thread, wire", ipa: "/fil/", respell: "FEEL", gender: "m", notes: "The word fils is NOT this. This is thread.", tags: ["exception","careful-l"], drills: ["flashcard","voiceflash","review"], version: 1, inSeed: true,
  },
];
