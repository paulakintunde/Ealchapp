// The a1.22 corpus: what this lesson imports, what it authors, and the ten
// shipped respellings it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for the twelve countries, the twelve
// nationalities, the twenty-four prepositional phrases, the eleven authored
// sentences and every transcription a1.22 puts on a screen. The lesson body
// (pays-lesson.ts) reads `fr`, `ipa`, `respell` and `en` FROM HERE and never
// restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE PROBE RAN. SIX OF THE BRIEF'S CLAIMS ARE WRONG, AND TWO OF THEM
//  WOULD HAVE CHANGED WHAT THIS LESSON TEACHES.
// ══════════════════════════════════════════════════════════════════════════
//
// Measured 2026-08-07 with `pnpm corpus:probe --unit a1.22`, `_pays_probe.ts`
// (all 309 rows enumerated rather than sampled), `_pays_probe2.ts` and
// `_pays_genre_impact.ts`, all against Postgres.
//
//   1. "Whether a1.06 already taught « Il est français » ... Check before
//      teaching it as new."
//
//      IT DID, AND IT TAUGHT A GREAT DEAL MORE THAN THAT. a1.06.l1 carries
//      `français` 38 times and the word `nationalité` 11 times. It already
//      ships, on cards:
//
//          « Je suis français. » against « Je suis un français. »
//          « Je suis français. » against « Je suis Français. » (capital F)
//          « français » against « française », with "the e wakes the s"
//          "A nationality behaves like a job here: nothing in front of it."
//          "English capitalises the adjective and French does not. The capital
//           is kept for the noun, as in un Français."
//
//      So the no-article rule, the capital rule AND the agreement are all a1.06
//      material. THIS CHANGED THE SCENE. The brief proposes « Je suis un
//      français » as the opening beat and calls it "the A1 scene"; a1.06 already
//      ships that exact error as a trap card, and opening a1.22 on it would be
//      the second lesson in the course to run the same beat. Act 5 therefore
//      EXTENDS a1.06 by name rather than teaching any of it as new, and the
//      scene is built on this lesson's own material instead: see SCENE_BEATS in
//      pays-lesson.ts.
//
//   2. "`pays-et-nationalites` is outside SEED_CUT.themes, so imported rows
//      will not appear in the seed. Correct behaviour, not a failed merge."
//
//      FALSE, and following it would have shipped a lesson of empty cards. Being
//      outside the cut is why the rows are not in the seed TODAY; it is not a
//      reason for the merge to leave them out. a1.13 was in exactly this
//      position with `couleurs`, which is also outside the cut and now has 48
//      rows in seed.json, written there by its merge. Every id a lesson names
//      has to resolve against the bundled seed or it draws nothing.
//
//      That correction is what makes item 3 this lesson's biggest problem.
//
//   3. "The impact of importing a dozen -e-final feminine country nouns on
//      a1-03-genre.test.ts. Not modelled ... Model it before authoring
//      anything."
//
//      MODELLED, in scripts/_pays_genre_impact.ts, through the REAL
//      measureEnding and endingPopulation rather than a copy.
//
//      THE IMPORTS ALONE MOVE SIX OF a1.03's TWENTY-SEVEN PRINTED FIGURES.
//      Twenty-two of the twenty-four headwords join a1.03's measured population:
//      a country noun is gendered, is a single word once its article is
//      stripped, and NATIONALITY ADJECTIVES JOIN TOO, because they carry
//      gender='m' and are tagged `nationality` rather than `adjective`, which is
//      the tag isNotANoun() looks for.
//
//          -e     873 -> 880 nouns   70% either way   (worthless; belge and
//                                                      le Mexique join as new
//                                                      counterexamples)
//          -on    142 -> 143         60% either way   (worthless)
//          -in     41 ->  43         98% either way   (sheet)
//          -ien    13 ->  15        100% either way   (sheet)
//          -al      9 ->  11        100% either way   (sheet)
//          -ance    9 ->  10        100% either way   (sheet)
//
//      EVERY ONE IS A COUNT. No accuracy moves, no predicted gender moves, no
//      rule crosses a1.03's own 90% floor in either direction, and no ending
//      rule in the FLOW (the ten a1.03 actually teaches) is touched at all.
//
//      This is unavoidable rather than a scoping failure: `la France` ends in -e
//      and so does every feminine country, which is the rule this lesson is
//      built on. There is no country set that teaches the gender decision and
//      leaves those counts alone. The whole theme would have moved eight.
//
//      RESOLVED THE WAY a1.11 RESOLVED IT, WHICH IS THE DOCUMENTED PRECEDENT.
//      genre-lesson.ts:1646 records it in as many words: "v2: the -e figure
//      moved from 871 to 873 when a1.11 authored two feminine nouns into the
//      shared corpus. Nothing else changed." a1.03's card text is TEMPLATED from
//      genre-endings.ts (`${WORTHLESS_ENDINGS[0].items} nouns in this app`), so
//      re-measuring the six counts and re-rendering a1.03 is a scripted data
//      update rather than a rewrite of somebody's cards. Six figures move, a1.03
//      goes to v3, and no sentence of its teaching changes.
//
//      NOTHING THIS LESSON AUTHORS REACHES THAT POPULATION. All eleven authored
//      rows are sentences. The batch holds authored rows to zero through the
//      real endingPopulation and reports the imports separately, so the two can
//      never be confused for one another.
//
//   4. "France, Espagne and Allemagne ... the probe says verify by hand on
//      each. Verify by hand, give the verified passing form."
//
//      VERIFIED, AND ONLY ONE OF THE THREE IS BROKEN.
//
//          la France     /la fʁɑ̃s/    LAH FRAHNSS   ɑ̃ IS a nasal vowel
//                                                     -> LAH FRAHⁿSS  REPAIRED
//          l'Espagne     /lɛspaɲ/     lehs-PAHNY    NO nasal vowel at all:
//                                                     the a is plain and ɲ is a
//                                                     palatal consonant. CORRECT
//                                                     AS SHIPPED. Not repaired.
//          l'Allemagne   /lalmaɲ/     lahl-MAHNY    the same. CORRECT AS
//                                                     SHIPPED. Not repaired.
//
//      The probe's "word-internal nasal" warning is a heuristic on the LETTERS,
//      and `agne` trips it while carrying no nasal vowel. Putting a superscript
//      on either of them would teach a sound that is not in the word, which is
//      the same mistake invariant §3 records for `jaune` and `automne`. All
//      three are asserted BY NAME in the test, in both directions: France MUST
//      carry the superscript and the other two MUST NOT.
//
//   5. "Whether any vowel-initial masculine country exists in the corpus. Not
//      probed. It decides whether the exception gets an act or a card."
//
//      SPLIT ANSWER, and the split is why the exception gets a card rather than
//      an act. As HEADWORDS there are six: l'Iran (.172), l'Irak (.170),
//      l'Équateur (.110), l'Uruguay (.114), l'Afghanistan (.186) and Israël
//      (.180). As SENTENCE EVIDENCE there is none: « en Iran », « en Israël »
//      and « en Uruguay » all return pg=0. So the vocabulary exists, the usage
//      does not, and this lesson imports `l'Iran` and authors the two sentences
//      it needs rather than building an act on absent evidence.
//
//   6. "309 contiguous A1 rows ... How many are headwords versus sentences,
//      and how many are countries the lesson should not teach at A1. Sampled,
//      not enumerated."
//
//      ENUMERATED. 192 headwords and 117 sentences, and THE TWO ARE INTERLEAVED
//      rather than split: .001-.080 are headwords, .081-.085 are five sentences,
//      .086-.197 are headwords again, and .198-.309 are sentences. A range check
//      that assumed one block of each would have been wrong twice.
//
//      Of the 192 headwords, 96 are country and nationality PAIRS by id (odd
//      country, even nationality) up to .080, and the block from .086 to .197
//      is a second pass in a different style: gender is null on almost every
//      nationality in it, `tags` are French (`pays`, `nationalite`) rather than
//      English (`country`, `nationality`), and several carry a U+203F tie. This
//      lesson takes eleven pairs from the first block and one from the second,
//      and the difference in convention is visible in pays-imported.ts.
//
//      168 headwords are NOT taught. They are not beyond A1, they are simply
//      more countries: a lesson that drills eighty of them teaches a list rather
//      than a decision. See THE_TWELVE below for how the twelve were chosen.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE SYSTEMATIC RESPELLING FINDING, WHICH IS BIGGER THAN THIS LESSON
// ══════════════════════════════════════════════════════════════════════════
//
// The brief asks whether "the fr.sons.* rows follow the convention and the
// fr.a1.* vocabulary rows do not" holds beyond `français`. Measured across every
// row this lesson probed, IT HOLDS WITHOUT EXCEPTION:
//
//     fr.sons.accents.054   français    frahⁿ-SEH    correct
//     fr.sons.consonnes.085 français    frahⁿ-SEH    correct
//     fr.sons.muettes.051   française   frahⁿ-SEHZ   correct
//
//     fr.a1.pays-et-nationalites.002  français   frahn-SEH        broken
//     fr.a1.dictee.050                le français luh frahn-SAY   broken
//     fr.a1.ecole.131                 le français luh frahn-SEH   broken
//     fr.a1.quebec-et-francophonie.022 le français luh frahn-SAY  broken
//     fr.a2.matieres.014              le français LUH frahn-SEH   broken
//
// Every nasal-carrying row in fr.a1.pays-et-nationalites that this lesson
// touched was broken: .002, .004, .012, .042, .046, .051, .058, .172, .173.
// Nine out of nine. Not one fr.sons.* row was.
//
// The likely reason, which is worth stating because it decides how to fix the
// rest: the sons track is ABOUT pronunciation and its rows were transcribed by
// somebody applying the convention, while the a1 vocabulary themes were bulk
// authored with transcriptions that look right to an English eye. That is a
// corpus migration, not a lesson build. This lesson repairs the ten rows it puts
// on a screen and names the rest. See RESPELL_REPAIRS and NOT_REPAIRED.
//
// ══════════════════════════════════════════════════════════════════════════
//  aller AND venir ARE a2.02, AND TWO THIRDS OF THIS canDo NEEDS THEM
// ══════════════════════════════════════════════════════════════════════════
//
// `je vais` and `je viens` are taught as FROZEN FIRST-PERSON FRAMES and never
// conjugated, which is what a1.10 did with `il fait` and a1.12 with inversion.
// The learner needs exactly one person of each, because they are talking about
// themselves. s09-going says on a card that the full verbs arrive later, because
// a learner who notices the gap and is not told concludes the lesson is broken.
//
// THIRD-PERSON FORMS ARE READING ONLY. Three imported rows carry `il vient` or
// `elle vient` and every one of them is confined to a reading surface:
// READING_ONLY_IDS below is the list, and the batch, the merge and the test all
// check that none of them reaches the dictée, the speak mission, a scenario turn
// or a quiz target.
//
// THE RECENT PAST, COUNTED RATHER THAN GUESSED. `venir de` + infinitive is
// a2.02's and would arrive from the corpus unnoticed: 134 published sentences
// match `vien(s|t|nent) d`, and 45 OF THEM ARE THE RECENT PAST rather than
// origin (« Je viens de terminer mon travail. », « Il vient d'arriver à la
// gare. »). Classified by reading the English gloss rather than by counting the
// French, because the two constructions are identical in French. None is
// imported and RECENT_PAST_FRAMES guards every surface.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/* ─── What the screens display ─────────────────────────────────────────────
 *
 * Every French unit a1.22 puts on a card, with the transcription this lesson
 * stands behind. Keyed by the French form, because many of these are display
 * strings rather than corpus rows: `en France` is a grid cell long before it is
 * anything else.                                                             */

export type Display = { fr: string; ipa: string; respell: string; en: string };

const D = (fr: string, ipa: string, res: string, en: string): Display =>
  ({ fr, ipa: `/${ipa}/`, respell: `[${res}]`, en });

const unbracket = (s: string) => s.replace(/^\[|\]$/g, '');

/* ─── The twelve, and why these twelve ─────────────────────────────────────
 *
 * 192 country and nationality headwords are published. A lesson that decks
 * eighty of them teaches a list; the decision this lesson is about is answered
 * by any country at all, so the set was chosen for what each one PROVES:
 *
 *   five feminine and five plain masculine, deliberately balanced. Most country
 *   sets run masculine-heavy, and `quiz-spread` caps any authored answer slot at
 *   40% of the closed questions: an unbalanced set makes `au` and `du` correct
 *   far too often without anybody choosing that.
 *
 *   ONE plural country (les États-Unis) for the third row of the grid, and it is
 *   the only plural country in the whole A1 block with sentence evidence.
 *
 *   ONE masculine country ending in -e (le Mexique), because a1.03's -e rule
 *   applied to countries needs its counterexample on the same screen as itself.
 *
 *   ONE vowel-initial masculine country (l'Iran), which is the exception that
 *   takes `en` rather than `au`.
 *
 * `la France` and `le Canada` carry the grid because they are the two countries
 * with real sentence evidence in every cell: "en France" pg=29, "au Canada"
 * pg=45, "je viens de France" and "je viens du Canada" both published.
 *
 * `slot` is what decides BOTH prepositions, which is the whole lesson. Four
 * values rather than three, because a vowel-initial masculine country behaves
 * like a feminine one going and like a masculine one coming from, and a learner
 * told "it is an exception" without being told to WHICH half is worse off.    */

export type Slot = 'f' | 'm' | 'pl' | 'mv';

export type Country = {
  /** The published headword id. NOTHING here is authored. */
  id: string;
  /** The headword as the corpus stores it, article and all. */
  fr: string;
  en: string;
  gender: 'm' | 'f';
  slot: Slot;
  /** The bare noun, for the sort drill and the going/coming phrases. */
  bare: string;
  /** The transcription this lesson stands behind, after any repair. */
  respell: string;
  ipa: string;
  /** Going to, coming from, each with its own transcription because a
   *  composed one cannot express the liaison in « en Iran ». */
  to: string; toIpa: string; toRespell: string;
  from: string; fromIpa: string; fromRespell: string;
  /** The paired nationality headword, adjacent by id in this theme. */
  natId: string;
  nat: string;
  natEn: string;
  natRespell: string;
  natIpa: string;
  /** Does this country's own spelling predict its gender, using a1.03's rule? */
  eRulePredicts: 'right' | 'wrong' | 'silent';
};

const P = (n: string) => `fr.a1.pays-et-nationalites.${n}`;

export const THE_TWELVE: Country[] = [
  {
    id: P('001'), fr: 'la France', en: 'France', gender: 'f', slot: 'f', bare: 'France',
    respell: 'LAH FRAHⁿSS', ipa: '/la fʁɑ̃s/',
    to: 'en France', toIpa: '/ɑ̃ fʁɑ̃s/', toRespell: '[ahⁿ FRAHⁿSS]',
    from: 'de France', fromIpa: '/də fʁɑ̃s/', fromRespell: '[duh FRAHⁿSS]',
    natId: P('002'), nat: 'français', natEn: 'French', natRespell: '[frahⁿ-SEH]', natIpa: '/fʁɑ̃sɛ/',
    eRulePredicts: 'right',
  },
  {
    id: P('003'), fr: 'le Canada', en: 'Canada', gender: 'm', slot: 'm', bare: 'Canada',
    respell: 'LUH kah-nah-DAH', ipa: '/lə ka.na.da/',
    to: 'au Canada', toIpa: '/o ka.na.da/', toRespell: '[oh kah-nah-DAH]',
    from: 'du Canada', fromIpa: '/dy ka.na.da/', fromRespell: '[dü kah-nah-DAH]',
    natId: P('004'), nat: 'canadien', natEn: 'Canadian', natRespell: '[kah-nah-DYAⁿ]', natIpa: '/ka.na.djɛ̃/',
    eRulePredicts: 'right',
  },
  {
    id: P('007'), fr: 'la Belgique', en: 'Belgium', gender: 'f', slot: 'f', bare: 'Belgique',
    respell: 'LAH behl-ZHEEK', ipa: '/la bɛl.ʒik/',
    to: 'en Belgique', toIpa: '/ɑ̃ bɛl.ʒik/', toRespell: '[ahⁿ behl-ZHEEK]',
    from: 'de Belgique', fromIpa: '/də bɛl.ʒik/', fromRespell: '[duh behl-ZHEEK]',
    natId: P('008'), nat: 'belge', natEn: 'Belgian', natRespell: '[BEHLZH]', natIpa: '/bɛlʒ/',
    eRulePredicts: 'right',
  },
  {
    id: P('011'), fr: 'les États-Unis', en: 'the United States', gender: 'm', slot: 'pl', bare: 'États-Unis',
    respell: 'LAY zay-tah-zü-NEE', ipa: '/le.ze.ta.zy.ni/',
    to: 'aux États-Unis', toIpa: '/o.ze.ta.zy.ni/', toRespell: '[oh-zay-tah-zü-NEE]',
    from: 'des États-Unis', fromIpa: '/de.ze.ta.zy.ni/', fromRespell: '[day-zay-tah-zü-NEE]',
    natId: P('012'), nat: 'américain', natEn: 'American', natRespell: '[ah-may-ree-KAⁿ]', natIpa: '/a.me.ʁi.kɛ̃/',
    eRulePredicts: 'silent',
  },
  {
    id: P('021'), fr: 'le Sénégal', en: 'Senegal', gender: 'm', slot: 'm', bare: 'Sénégal',
    respell: 'LUH say-nay-GAHL', ipa: '/lə se.ne.gal/',
    to: 'au Sénégal', toIpa: '/o se.ne.gal/', toRespell: '[oh say-nay-GAHL]',
    from: 'du Sénégal', fromIpa: '/dy se.ne.gal/', fromRespell: '[dü say-nay-GAHL]',
    natId: P('022'), nat: 'sénégalais', natEn: 'Senegalese', natRespell: '[say-nay-gah-LEH]', natIpa: '/se.ne.ga.lɛ/',
    eRulePredicts: 'right',
  },
  {
    id: P('041'), fr: "l'Allemagne", en: 'Germany', gender: 'f', slot: 'f', bare: 'Allemagne',
    // NOT REPAIRED. /lalmaɲ/ has no nasal vowel: the `agne` spelling trips a
    // letter-level heuristic and the sound is a plain a plus a palatal ɲ.
    respell: 'lahl-MAHNY', ipa: '/lal.maɲ/',
    to: 'en Allemagne', toIpa: '/ɑ̃.nal.maɲ/', toRespell: '[ahⁿ-nahl-MAHNY]',
    from: "d'Allemagne", fromIpa: '/dal.maɲ/', fromRespell: '[dahl-MAHNY]',
    natId: P('042'), nat: 'allemand', natEn: 'German', natRespell: '[ahl-MAHⁿ]', natIpa: '/al.mɑ̃/',
    eRulePredicts: 'right',
  },
  {
    id: P('043'), fr: "l'Espagne", en: 'Spain', gender: 'f', slot: 'f', bare: 'Espagne',
    // NOT REPAIRED, for the same reason as l'Allemagne. /lɛspaɲ/.
    respell: 'lehs-PAHNY', ipa: '/lɛs.paɲ/',
    to: 'en Espagne', toIpa: '/ɑ̃.nɛs.paɲ/', toRespell: '[ahⁿ-nehs-PAHNY]',
    from: "d'Espagne", fromIpa: '/dɛs.paɲ/', fromRespell: '[dehs-PAHNY]',
    natId: P('044'), nat: 'espagnol', natEn: 'Spanish', natRespell: '[ehs-pah-NYOL]', natIpa: '/ɛs.pa.ɲɔl/',
    eRulePredicts: 'right',
  },
  {
    id: P('045'), fr: "l'Italie", en: 'Italy', gender: 'f', slot: 'f', bare: 'Italie',
    respell: 'lee-tah-LEE', ipa: '/li.ta.li/',
    to: 'en Italie', toIpa: '/ɑ̃.ni.ta.li/', toRespell: '[ahⁿ-nee-tah-LEE]',
    from: "d'Italie", fromIpa: '/di.ta.li/', fromRespell: '[dee-tah-LEE]',
    natId: P('046'), nat: 'italien', natEn: 'Italian', natRespell: '[ee-tah-LYAⁿ]', natIpa: '/i.ta.ljɛ̃/',
    eRulePredicts: 'right',
  },
  {
    id: P('047'), fr: 'le Portugal', en: 'Portugal', gender: 'm', slot: 'm', bare: 'Portugal',
    respell: 'LUH por-tü-GAHL', ipa: '/lə pɔʁ.ty.gal/',
    to: 'au Portugal', toIpa: '/o pɔʁ.ty.gal/', toRespell: '[oh por-tü-GAHL]',
    from: 'du Portugal', fromIpa: '/dy pɔʁ.ty.gal/', fromRespell: '[dü por-tü-GAHL]',
    natId: P('048'), nat: 'portugais', natEn: 'Portuguese', natRespell: '[por-tü-GEH]', natIpa: '/pɔʁ.ty.gɛ/',
    eRulePredicts: 'right',
  },
  {
    id: P('051'), fr: 'le Japon', en: 'Japan', gender: 'm', slot: 'm', bare: 'Japon',
    respell: 'LUH zhah-POHⁿ', ipa: '/lə ʒa.pɔ̃/',
    to: 'au Japon', toIpa: '/o ʒa.pɔ̃/', toRespell: '[oh zhah-POHⁿ]',
    from: 'du Japon', fromIpa: '/dy ʒa.pɔ̃/', fromRespell: '[dü zhah-POHⁿ]',
    natId: P('052'), nat: 'japonais', natEn: 'Japanese', natRespell: '[zhah-po-NEH]', natIpa: '/ʒa.pɔ.nɛ/',
    eRulePredicts: 'right',
  },
  {
    // THE COUNTEREXAMPLE. Ends in -e and is masculine, so the -e habit a1.03
    // measured at 70% fails here in the one place the learner will lean on it.
    id: P('057'), fr: 'le Mexique', en: 'Mexico', gender: 'm', slot: 'm', bare: 'Mexique',
    respell: 'LUH mehk-SEEK', ipa: '/lə mɛk.sik/',
    to: 'au Mexique', toIpa: '/o mɛk.sik/', toRespell: '[oh mehk-SEEK]',
    from: 'du Mexique', fromIpa: '/dy mɛk.sik/', fromRespell: '[dü mehk-SEEK]',
    natId: P('058'), nat: 'mexicain', natEn: 'Mexican', natRespell: '[mehk-see-KAⁿ]', natIpa: '/mɛk.si.kɛ̃/',
    eRulePredicts: 'wrong',
  },
  {
    // THE VOWEL EXCEPTION. Masculine, and it takes `en` rather than `au`
    // because `au Iran` would put two vowel sounds against each other. Coming
    // from, it behaves like every other masculine country except that `de`
    // elides: d'Iran, not du Iran.
    id: P('172'), fr: "l'Iran", en: 'Iran', gender: 'm', slot: 'mv', bare: 'Iran',
    respell: 'lee-RAHⁿ', ipa: '/li.ʁɑ̃/',
    to: 'en Iran', toIpa: '/ɑ̃.ni.ʁɑ̃/', toRespell: '[ahⁿ-nee-RAHⁿ]',
    from: "d'Iran", fromIpa: '/di.ʁɑ̃/', fromRespell: '[dee-RAHⁿ]',
    natId: P('173'), nat: 'iranien', natEn: 'Iranian', natRespell: '[ee-ra-nee-AHⁿ]', natIpa: '/i.ʁa.njɛ̃/',
    eRulePredicts: 'silent',
  },
];

/** The countries by slot, which is the sort the whole lesson rests on. */
export const bySlot = (s: Slot): Country[] => THE_TWELVE.filter((c) => c.slot === s);
export const FEMININE = bySlot('f');
export const MASCULINE = bySlot('m');
export const PLURAL = bySlot('pl');
export const VOWEL_MASCULINE = bySlot('mv');

/** One country by its bare noun, for a card that names it rather than indexes
 *  it. Throws: a card silently missing its country looks like a card that never
 *  wanted one. */
export function country(bare: string): Country {
  const c = THE_TWELVE.find((x) => x.bare === bare);
  if (!c) throw new Error(`${unitRef('a1.22')}: no country authored for "${bare}". Add it to THE_TWELVE.`);
  return c;
}

/** The three grid rows, in the order the hero table shows them. `mv` is NOT a
 *  row: it is the exception, and putting it in the grid would say the system has
 *  four cases when it has three and one repair. */
export const GRID_SLOTS: Slot[] = ['f', 'm', 'pl'];

export const SLOT_LABEL: Record<Slot, string> = {
  f: 'the la kind',
  m: 'the le kind',
  pl: 'the les kind',
  mv: 'the le kind, starting with a vowel',
};

/** The country that carries each grid row. One per row, chosen for evidence. */
export const GRID_COUNTRY: Record<'f' | 'm' | 'pl', Country> = {
  f: country('France'),
  m: country('Canada'),
  pl: country('États-Unis'),
};

/* ─── Everything the lesson displays, keyed by its French ──────────────────
 *
 * Built from THE_TWELVE rather than retyped, plus the handful of forms that are
 * not a country: the four nationality pairs the ear round runs on, and the two
 * halves of the capital contrast.                                            */

export const RESPELL: Record<string, Display> = {
  ...Object.fromEntries(THE_TWELVE.flatMap((c) => [
    [c.fr, { fr: c.fr, ipa: c.ipa, respell: `[${c.respell}]`, en: c.en }],
    [c.to, { fr: c.to, ipa: c.toIpa, respell: c.toRespell, en: `to ${c.en}, or in ${c.en}` }],
    [c.from, { fr: c.from, ipa: c.fromIpa, respell: c.fromRespell, en: `from ${c.en}` }],
    [c.nat, { fr: c.nat, ipa: c.natIpa, respell: c.natRespell, en: c.natEn }],
  ])),

  // The feminine nationalities the ear round runs on. `française` is the one
  // transcription in this whole area of the corpus that was already right, and
  // it is imported rather than authored: fr.sons.muettes.051, frahⁿ-SEHZ.
  //
  // `canadienne` is a DISPLAY STRING rather than a corpus row: no headword
  // exists for it. The nasal COLLAPSES here, which is a1.13's brun / brune
  // shape: /ka.na.djɛ̃/ has a nasal vowel and /ka.na.djɛn/ has a plain vowel
  // followed by a real n. So DYEN carries no superscript and must not grow one,
  // and NOT_NASAL_FORMS pins that.
  française: D('française', 'fʁɑ̃.sɛz', 'frahⁿ-SEHZ', 'French, said of a woman'),
  canadienne: D('canadienne', 'ka.na.djɛn', 'kah-nah-DYEN', 'Canadian, said of a woman'),
  italienne: D('italienne', 'i.ta.ljɛn', 'ee-tah-LYEN', 'Italian, said of a woman'),
  allemande: D('allemande', 'al.mɑ̃d', 'ahl-MAHⁿD', 'German, said of a woman'),

  // The capital contrast, and the only pair in the lesson where the difference
  // is a letter shape. Both are authored sentences; see AUTHORED_SENTENCES.
  'Il est français.': D('Il est français.', 'i.lɛ fʁɑ̃.sɛ', 'ee-leh frahⁿ-SEH', 'He is French'),
  "C'est un Français.": D("C'est un Français.", 'sɛ.tɛ̃ fʁɑ̃.sɛ', 'seh-tuhⁿ frahⁿ-SEH',
    'He is a Frenchman'),
};

/** The bracketed respelling of a French form this lesson displays. Throws
 *  rather than returning undefined: a card silently missing its transcription is
 *  the failure this file exists to stop, and it looks identical to a card that
 *  never wanted one. */
export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`${unitRef('a1.22')}: no respelling authored for "${fr}". Add it to RESPELL.`);
  return d.respell;
}

/** The IPA of a French form this lesson displays, in slashes. */
export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`${unitRef('a1.22')}: no IPA authored for "${fr}". Add it to RESPELL.`);
  return d.ipa;
}

/* ─── The two-by-three grid, which is the lesson ───────────────────────────
 *
 * One frame, three countries, two directions. Read ACROSS a row and only the
 * preposition changes; read DOWN a column and only the country does. The
 * corpus proves every one of these six and proves none of them minimally, which
 * is the same wall a1.09, a1.13 and a1.17 hit.
 *
 * THREE OF THE SIX WERE ALREADY PUBLISHED IN THIS EXACT FRAME and are borrowed
 * rather than re-authored. That is unusual and worth recording: `Je vais au
 * Canada.` is in the seed already (fr.a1.deplacements.011), and `Je viens du
 * Canada.` and `Je viens de France.` sit adjacent in presentation-personnelle.
 * The other three did not exist in any theme and are authored here.           */

export type GridCell = {
  slot: 'f' | 'm' | 'pl';
  dir: 'to' | 'from';
  /** The corpus id, whether authored here or borrowed. */
  id: string;
  /** Where it came from, for the report and for the test. */
  origin: 'authored' | 'imported' | 'reused';
};

export const GRID_CELLS: GridCell[] = [
  { slot: 'f', dir: 'to', id: P('310'), origin: 'authored' },
  { slot: 'f', dir: 'from', id: 'fr.a1.presentation-personnelle.029', origin: 'imported' },
  { slot: 'm', dir: 'to', id: 'fr.a1.deplacements.011', origin: 'reused' },
  { slot: 'm', dir: 'from', id: 'fr.a1.presentation-personnelle.028', origin: 'imported' },
  { slot: 'pl', dir: 'to', id: P('311'), origin: 'authored' },
  { slot: 'pl', dir: 'from', id: P('312'), origin: 'authored' },
];

export const gridCell = (slot: 'f' | 'm' | 'pl', dir: 'to' | 'from'): GridCell => {
  const c = GRID_CELLS.find((x) => x.slot === slot && x.dir === dir);
  if (!c) throw new Error(`${unitRef('a1.22')}: no grid cell for ${slot}/${dir}`);
  return c;
};

/* ─── The eleven authored sentences ────────────────────────────────────────
 *
 * ids continue fr.a1.pays-et-nationalites.310, confirmed by the probe: 309 rows
 * with NO GAPS, which is the largest clean slice on this track and is worth
 * preserving. Never renumber; ids are the SRS key.
 *
 * NOT ONE HEADWORD IS AUTHORED. Every country and every nationality this lesson
 * teaches is already published, so authoring one would fail
 * flashhub-coverage.test.ts, which keys decks on `fr` per theme. It also means
 * NOTHING AUTHORED HERE JOINS a1.03's MEASURED ENDING POPULATION: every row
 * below is `kind: 'sentence'`, which endingPopulation excludes outright. The
 * batch holds that to zero through the real function.
 *
 * « Je viens des États-Unis. » exists at fr.a2.presentation-personnelle.061 and
 * is NOT imported. It is the sixth grid cell and importing it would put an a2
 * card into an a1 lesson's tranche; the a1 twin is authored here and the a2 row
 * is recorded in WITHDRAWN_IDS so nobody rediscovers it as a duplicate.       */

export type AuthoredSentence = Omit<Item, 'drills'> & {
  /** Which teaching this row belongs to, for the tranche slices and the test. */
  role: 'grid' | 'vowel' | 'e-exception' | 'agreement' | 'capital' | 'second-pair';
  drills: Item['drills'];
};

const SFVRD: Item['drills'] = ['sentence', 'flashcard', 'voiceflash', 'review', 'dictation'];

const say = (
  seq: number, role: AuthoredSentence['role'], fr: string, en: string, ipa: string,
  tags: string[], notes: string,
): AuthoredSentence => ({
  id: P(String(seq)), kind: 'sentence', level: 'a1', theme: 'pays-et-nationalites',
  fr, en, ipa: `/${ipa}/`, notes,
  tags: ['pays-et-nationalites', ...tags],
  drills: SFVRD, version: 1,
  role,
});

export const AUTHORED_SENTENCES: AuthoredSentence[] = [
  /* THE GRID, the three cells the corpus did not already hold. Same frame as
   * the three it did, so the six read as one system rather than as two. */
  say(310, 'grid', 'Je vais en France.', 'I am going to France.', 'ʒə vɛ ɑ̃ fʁɑ̃s',
    ['preposition', 'en'],
    'France is the la kind, so the word for to is en. Nothing else in this sentence changes when the '
    + 'country does.'),
  say(311, 'grid', 'Je vais aux États-Unis.', 'I am going to the United States.', 'ʒə vɛ o.ze.ta.zy.ni',
    ['preposition', 'aux', 'liaison'],
    'The country is plural, so the word for to is aux, and the x wakes up as a z in front of the vowel. '
    + 'Said out loud this is one long word rather than two.'),
  say(312, 'grid', 'Je viens des États-Unis.', 'I come from the United States.', 'ʒə vjɛ̃ de.ze.ta.zy.ni',
    ['preposition', 'des', 'liaison'],
    'The same plural country, coming the other way, and des does exactly what aux did. The s wakes up '
    + 'as a z for the same reason.'),

  /* THE VOWEL EXCEPTION, both directions. « en Iran » and « en Israël » return
   * zero published sentences, so both of these are authored. The going-to half
   * is the exception; the coming-from half is included so the learner sees that
   * the exception reaches ONE of the two systems and not the other. */
  say(313, 'vowel', 'Je vais en Iran.', 'I am going to Iran.', 'ʒə vɛ ɑ̃.ni.ʁɑ̃',
    ['preposition', 'en', 'voyelle'],
    'Iran is the le kind and still takes en, because au Iran would put two vowel sounds against each '
    + 'other. The n of en arrives on the front of Iran and is fully pronounced.'),
  say(314, 'vowel', "Je viens d'Iran.", 'I come from Iran.', 'ʒə vjɛ̃ di.ʁɑ̃',
    ['preposition', 'de', 'voyelle'],
    'Coming the other way the exception is over: this is the ordinary de of a le country, cut short in '
    + 'front of a vowel exactly as le and la were.'),

  /* THE -e COUNTEREXAMPLE. `le Mexique` ends in -e, is masculine, and takes au.
   * The learner is about to lean hard on a1.03's -e habit and this is where it
   * gives way. Coming-from is imported (.216) rather than authored. */
  say(315, 'e-exception', 'Je vais au Mexique.', 'I am going to Mexico.', 'ʒə vɛ o mɛk.sik',
    ['preposition', 'au', 'genre'],
    'Mexique ends in an e and takes le anyway, so the word for to is au. The ending is a hint rather '
    + 'than a rule, and this is the country most likely to catch you out.'),

  /* THE AGREEMENT PAIR THE EAR CAN USE. `canadien` against `canadienne` is the
   * nasal collapsing, which is a1.13's brun / brune shape. Neither sentence
   * existed: the corpus has « Je suis canadien. » and a long sentence carrying
   * `canadienne`, and no minimal pair anywhere. */
  say(316, 'agreement', 'Il est canadien.', 'He is Canadian.', 'i.lɛ ka.na.djɛ̃',
    ['nationalite', 'accord'],
    'No article in front of the nationality. The last sound is a nasal vowel with no n behind it.'),
  say(317, 'agreement', 'Elle est canadienne.', 'She is Canadian.', 'ɛ.lɛ ka.na.djɛn',
    ['nationalite', 'accord'],
    'The e on the end wakes the n up. The nasal vowel collapses into a plain one with a real n after '
    + 'it, which is the same thing that happens between brun and brune.'),

  /* THE CAPITAL RULE, the noun half. « une Française » returns 0 and « il est
   * français » returns 1, so the contrast is effectively unattested and this
   * lesson authors the half that does not exist. a1.06 already TEACHES the rule;
   * this pair applies it to a country the learner has just met. */
  say(318, 'capital', "C'est un Français.", 'He is a Frenchman.', 'sɛ.tɛ̃ fʁɑ̃.sɛ',
    ['nationalite', 'majuscule'],
    'A capital F, because here the word is the name of a person rather than a description of one. Out '
    + 'loud this is identical to the sentence without the capital.'),

  /* A SECOND CLEAN de, so `de France` is not the only evidence. Belgium is the
   * one other feminine country in the set that starts with a consonant, which
   * is what makes `de` visible rather than elided. */
  say(319, 'second-pair', 'Je vais en Belgique.', 'I am going to Belgium.', 'ʒə vɛ ɑ̃ bɛl.ʒik',
    ['preposition', 'en'],
    'The same en as en France, on a different la country. The choice was made by the article and by '
    + 'nothing else.'),
  say(320, 'second-pair', 'Je viens de Belgique.', 'I come from Belgium.', 'ʒə vjɛ̃ də bɛl.ʒik',
    ['preposition', 'de'],
    'And the same de. Belgium and France take the same two words as each other and nothing about '
    + 'either country decided it except which article it carries.'),
];

export const AUTHORED_IDS: string[] = AUTHORED_SENTENCES.map((s) => s.id);

/** One authored group, in sequence order. */
export const authoredIds = (role: AuthoredSentence['role']): string[] =>
  AUTHORED_SENTENCES.filter((s) => s.role === role).map((s) => s.id);

/** The corpus Item, stripped of the teaching-only field. */
export function toItem(s: AuthoredSentence): Item {
  const { role: _r, ...item } = s;
  return item;
}

/** The range this lesson owns, exported so the batch can check that nobody has
 *  landed INSIDE it rather than only above it. a1.15 landed inside a1.17's range
 *  mid-build and a highest-id check passed it cleanly. */
export const OWNED_ID_RANGE = { from: P('310'), to: P('320') };
export const HANDOVER_NEXT_FREE_ID = P('321');

/* ─── The ten respelling repairs ───────────────────────────────────────────
 *
 * Display-only, on imported rows this lesson puts on a card. The batch prints
 * each one and refuses to write if the stored value is no longer the broken one
 * it expects, because two people disagreeing about a transcription is a decision
 * rather than a merge.
 *
 * NINE ARE CAUGHT BY THE SHARED CHECKER AND ONE IS NOT. `la France` is invariant
 * §3's first blind spot: the nasal is word-internal (SS follows it), so
 * `LAH FRAHNSS` passes hasPlainNasalFor cleanly while being wrong. It is
 * asserted BY NAME in the batch, the merge and the test, alongside `l'Espagne`
 * and `l'Allemagne` which the same heuristic flags and which are CORRECT.     */

export type RespellRepair = {
  id: string;
  fr: string;
  /** What the row carries today. The batch refuses if this has changed. */
  from: string;
  /** What it will carry. Always equal to this lesson's own transcription. */
  to: string;
  /** Does the SHARED checker catch the broken value? Recorded because a later
   *  author who trusts the checker alone will reintroduce anything it cannot
   *  see. */
  caughtByChecker: boolean;
  why: string;
};

const nat = (bare: string) => country(bare);

export const RESPELL_REPAIRS: RespellRepair[] = [
  {
    id: P('001'), fr: 'la France',
    from: 'LAH FRAHNSS', to: nat('France').respell, caughtByChecker: false,
    why: 'THE ONE THE SHARED CHECKER CANNOT SEE. /la fʁɑ̃s/ carries a nasal vowel and the respelling closes it '
      + 'with a plain n, but the n is followed by SS rather than ending the token, so hasPlainNasalFor never '
      + 'looks at it. This is the country the whole lesson is built on and it is on more screens than any '
      + 'other word here. Verified by hand and pinned by name in the test.',
  },
  {
    id: P('002'), fr: 'français',
    from: 'frahn-SEH', to: unbracket(nat('France').natRespell), caughtByChecker: true,
    why: 'a plain n closes the nasal /ɑ̃/. The value it moves to is EXACTLY what fr.sons.accents.054 and '
      + 'fr.sons.consonnes.085 already carry, so this repair makes the vocabulary row agree with the two '
      + 'phonetics rows rather than inventing a fourth transcription.',
  },
  {
    id: P('004'), fr: 'canadien',
    from: 'kah-nah-DYAN', to: unbracket(nat('Canada').natRespell), caughtByChecker: true,
    why: 'the same plain n on /ɛ̃/. This one matters more than most: the lesson puts canadien beside canadienne '
      + 'and the whole point of the pair is that the nasal collapses. A plain n on the masculine makes the two '
      + 'look identical where they are not.',
  },
  {
    id: P('012'), fr: 'américain',
    from: 'ah-may-ree-KAN', to: unbracket(nat('États-Unis').natRespell), caughtByChecker: true,
    why: 'the same plain n on /ɛ̃/, on the nationality paired with the plural country.',
  },
  {
    id: P('042'), fr: 'allemand',
    from: 'ahl-MAHN', to: unbracket(nat('Allemagne').natRespell), caughtByChecker: true,
    why: 'a plain n closes the nasal /ɑ̃/. Note that its COUNTRY, l\'Allemagne, is not repaired: lahl-MAHNY is '
      + 'correct because /lalmaɲ/ has no nasal vowel in it at all. The pair is a good illustration of why the '
      + 'letters cannot be trusted and the sounds have to be read.',
  },
  {
    id: P('046'), fr: 'italien',
    from: 'ee-tah-LYAN', to: unbracket(nat('Italie').natRespell), caughtByChecker: true,
    why: 'the same plain n on /ɛ̃/, and the same collapse behind it: italien against italienne.',
  },
  {
    id: P('051'), fr: 'le Japon',
    from: 'LUH zhah-POHN', to: nat('Japon').respell, caughtByChecker: true,
    why: 'a plain n closes the nasal /ɔ̃/. The capitals in LUH are left exactly as they are: the whole theme '
      + 'capitalises the article and this repair is about the nasal only. Changing the stress marking as well '
      + 'would be a preference edit riding on a correctness one.',
  },
  {
    id: P('058'), fr: 'mexicain',
    from: 'mehk-see-KAN', to: unbracket(nat('Mexique').natRespell), caughtByChecker: true,
    why: 'the same plain n on /ɛ̃/, on the nationality of the country that breaks the -e rule.',
  },
  {
    id: P('172'), fr: "l'Iran",
    from: 'lee-RAHN', to: nat('Iran').respell, caughtByChecker: true,
    why: 'a plain n closes the nasal /ɑ̃/, on the country that carries the vowel exception. This row also gets '
      + 'the only IPA repair in the lesson: see IPA_REPAIRS.',
  },
  {
    id: P('173'), fr: 'iranien',
    from: 'ee-ra-nee-AHN', to: unbracket(nat('Iran').natRespell), caughtByChecker: true,
    why: 'the same plain n on /ɛ̃/. The syllable division ee-ra-nee-AHⁿ is the value the row already carries '
      + 'and is kept: only the nasal is repaired, so the change is a correction rather than a rewrite.',
  },
];

/** The repairs the shared checker cannot see. ONE, and it is the country the
 *  lesson is built on. Exported so the batch prints the fact rather than leaving
 *  the next author to wonder whether it was checked. */
export const REPAIRS_INVISIBLE_TO_CHECKER = RESPELL_REPAIRS.filter((r) => !r.caughtByChecker).map((r) => r.fr);

/* ─── The one IPA repair, and why the other six ties are left alone ────────
 *
 * Six rows this lesson imports carry U+203F, which renders as a low underscore
 * on a Pixel 6 (invariant §2). 961 of the seed's 7,542 rows already carry one,
 * so the glyph is established debt rather than something this lesson invents.
 *
 * ONE is repaired and five are not, and the distinction is not arbitrary.
 *
 *   fr.a1.pays-et-nationalites.172  l'Iran  l‿i.ʁɑ̃  ->  li.ʁɑ̃   REPAIRED
 *
 *     A HEADWORD, in this lesson's own theme, where the tie marks an elision the
 *     spelling already shows: the learner can see the apostrophe in l'Iran. The
 *     tie carries no information the card does not otherwise have, and this is
 *     the one country card the vowel act is built on.
 *
 *   The five sentences (presentation-personnelle.012, pays-et-nationalites.081,
 *   .254, .255, .235) use the tie to mark a LIAISON, which is real phonetic
 *   information the spelling does not show. Stripping it would delete something
 *   true from five rows this lesson does not own, to improve one glyph. Left
 *   alone, and named here so the next author does not read the inconsistency as
 *   an oversight.                                                             */

export type IpaRepair = { id: string; fr: string; from: string; to: string; why: string };

export const IPA_REPAIRS: IpaRepair[] = [
  {
    id: P('172'), fr: "l'Iran",
    from: 'l‿i.ʁɑ̃', to: 'li.ʁɑ̃',
    why: 'U+203F renders as a low underscore on a Pixel 6. On a headword whose spelling already shows the '
      + 'elision, the tie marks nothing the learner cannot see, so the card is better without it.',
  },
];

/** The imported rows this lesson displays that KEEP their tie, listed so the
 *  report can name them rather than leaving five silent inconsistencies. */
export const TIES_LEFT_ALONE = [
  'fr.a1.presentation-personnelle.012',
  P('081'), P('235'), P('254'), P('255'),
];

/* ─── Broken respellings this lesson deliberately does NOT repair ──────────
 *
 * Every one carries a word this lesson teaches and none of them appears on any
 * screen here. Repairing a row this lesson does not display is reaching into
 * somebody else's card. Reported rather than done, per invariant §9 and the
 * a1.13 precedent.                                                           */
export const NOT_REPAIRED = [
  { id: 'fr.a1.dictee.050', fr: 'le français', respell: 'luh frahn-SAY', why: 'the dictée theme owns it' },
  { id: 'fr.a1.ecole.131', fr: 'le français', respell: 'luh frahn-SEH', why: 'the school subject, in ecole' },
  { id: 'fr.a1.quebec-et-francophonie.022', fr: 'le français', respell: 'luh frahn-SAY', why: 'a 593-row theme that is not this lesson\'s' },
  { id: 'fr.a2.matieres.014', fr: 'le français', respell: 'LUH frahn-SEH', why: 'a2, and the school subject again' },
  // FOUND BY GREPPING THE SERVED BUNDLE rather than by the probe, which searched
  // headwords. `frahn-SEH` survived in the bundle after every repair had landed,
  // and this is the second of the two rows carrying it: a SENTENCE, so the
  // headword probe never looked at it.
  { id: 'fr.a2.verbes.001', fr: 'Je parle français.', respell: 'ZHUH PARL frahn-SEH', why: 'a2 verbes, and the language sense; a sentence, so the headword probe missed it' },
  { id: 'fr.a1.quebec-et-francophonie.033', fr: 'un Canadien', respell: 'uhn ka-na-DYAN', why: 'quebec-et-francophonie, and TWO plain nasals in one row' },
  { id: 'fr.a1.rp-identite.013', fr: 'canadien', respell: 'ka-na-DYEN', why: 'rp-identite, a role-play theme' },
];

/* ─── Nasal words checked BY NAME ──────────────────────────────────────────
 *
 * Carry a GENUINE nasal vowel and must close it with a superscript. `la France`
 * and every phrase built on it are in this list specifically because
 * hasPlainNasalFor CANNOT SEE THEM: the nasal is word-internal, so `FRAHNSS`
 * passes every shared check while being wrong. Invariant §3's first blind spot,
 * the same one that let a1.09's sep-TAHNBR through.                          */
export const NASAL_FORMS = [
  'la France', 'en France', 'de France',
  'le Japon', 'au Japon', 'du Japon',
  "l'Iran", 'en Iran', "d'Iran",
  'français', 'française', 'canadien', 'américain', 'allemand', 'italien', 'mexicain', 'iranien',
  'allemande',
  'en Belgique', 'en Espagne', 'en Italie', 'en Allemagne',
];

/** Has NO nasal vowel and must NOT carry a superscript.
 *
 *  The first two are the probe's own false positives, verified by hand: `agne`
 *  is a plain a plus a palatal ɲ. The third is the collapse: `canadienne` has a
 *  real n after a plain vowel, which is a1.13's brun / brune shape, and giving
 *  it a superscript would teach a sound that stops existing the moment the e
 *  arrives. */
export const NOT_NASAL_FORMS = [
  "l'Espagne", "l'Allemagne", "d'Espagne", "d'Allemagne",
  'canadienne', 'italienne',
  'le Canada', 'au Canada', 'du Canada', 'la Belgique', "l'Italie", 'le Portugal',
  'le Mexique', 'au Mexique', 'du Mexique', 'le Sénégal', 'belge', 'espagnol', 'portugais',
  'japonais', 'sénégalais',
];

/* ─── What must never reach a learner surface ──────────────────────────────
 *
 * Four neighbours own four things this lesson could easily spend, and each list
 * is written as MULTI-WORD PHRASES or as forms that cannot occur in legitimate
 * content. a1.13's first draft listed a neighbour's material as single words and
 * the guard fired immediately on one of its own glosses. A guard that fires on
 * legitimate content gets deleted rather than fixed.                          */

/** `aller` and `venir` CONJUGATED. a2.02 owns both verbs, and this lesson has
 *  exactly two frozen frames: `je vais` and `je viens`. Every form below is a
 *  person this lesson never teaches, written with its pronoun so a bare `va` in
 *  another word cannot trip it. */
export const CONJUGATED_FORMS = [
  'tu vas', 'il va', 'elle va', 'on va', 'nous allons', 'vous allez', 'ils vont', 'elles vont',
  'tu viens', 'nous venons', 'vous venez', 'ils viennent', 'elles viennent',
];

/** The third-person singular of `venir`, which IS allowed on a reading surface
 *  and must never be asked for as output. Kept apart from CONJUGATED_FORMS for
 *  exactly that reason: three imported rows carry it and they are legitimate
 *  exposure. READING_ONLY_IDS is the list of rows that may hold them. */
export const READING_ONLY_FORMS = ['il vient', 'elle vient'];

export const READING_ONLY_IDS = [P('218'), P('226'), P('233')];

/** `venir de` + INFINITIVE, which is the recent past and belongs to a2.02. 45
 *  of the corpus's 134 `vien* d*` sentences are this construction, and it is
 *  identical to origin in French, so the 45 were classified by READING the
 *  English gloss rather than by counting the French.
 *
 *  FRENCH FRAMES ONLY, plus the one piece of jargon that should never appear
 *  anywhere. An earlier version listed `have just` and `has just`, and it fired
 *  immediately on this lesson's own card reading "a country you have just met".
 *  A guard that fires on legitimate content gets deleted rather than fixed,
 *  which is a1.13's lesson and it very nearly happened again here. */
export const RECENT_PAST_FRAMES = [
  'viens de terminer', 'viens de finir', 'viens de recevoir', "viens d'arriver", 'viens de faire',
  "vient d'arriver", 'vient de terminer', 'vient de rentrer', 'vient de déménager',
  'viens de rentrer', 'viens de partir', 'recent past',
];

/** Language learning, which is `ecole` and `matieres` and needs `parler`, an
 *  -er verb from a2.01. `français` is the same word for the language, the
 *  adjective and the person, so every probe here is a PHRASE. */
export const LANGUAGE_TEACHING = [
  'je parle français', 'parler français', 'speak French', 'speaks French', 'the French language',
  'learn French', 'studying French', 'as a school subject', 'le cours de français',
];

/** Québec and the francophonie, which have their own 593-row theme and their own
 *  unbuilt unit. Naming Canada is fine; teaching Québec is not. */
export const QUEBEC_TEACHING = [
  'le Québec', 'québécois', 'la francophonie', 'French-speaking world', 'Quebec French',
  'au Québec', 'du Québec',
];

/** The article slot after être, which a1.06 taught and this lesson retests.
 *  Every one of these is ungrammatical, so a hit is always a defect.
 *
 *  WRITTEN WITH THEIR SUBJECT PRONOUNS, and that is not tidiness. The guard
 *  lowercases both sides, so a bare `est un français` fires on this lesson's own
 *  « C'est un Français. », which is correct French and the whole point of the
 *  capital act. `il est un français` cannot occur in correct French at all. */
export const FORBIDDEN_FORMS = [
  'il est un français', 'elle est une française', 'je suis un français', 'je suis une française',
  'il est un canadien', 'elle est une canadienne', 'je suis un canadien',
  'il est un italien', 'il est un allemand', 'il est un espagnol', 'il est un japonais',
  // the preposition errors the lesson teaches by name and must never author as
  // correct French
  'en Canada', 'en Japon', 'en Portugal', 'en Sénégal', 'en Mexique', 'en États-Unis',
  'au France', 'au Belgique', 'au Espagne', 'au Italie', 'au Allemagne', 'au Iran',
  'du France', 'du Belgique', 'de Canada', 'de Japon', 'de Portugal', 'de Mexique',
  'aux Canada', 'des Canada',
  // the article that never appears after these prepositions
  'en la France', 'de la France', 'au le Canada', 'du le Canada',
];

/* ─── Withdrawn on purpose ─────────────────────────────────────────────────
 *
 * The rows this lesson most obviously wants and does not import, each for a
 * reason worth recording so nobody adds them back.                           */
export const WITHDRAWN_IDS: string[] = [
  P('083'),                              // Nous allons en Espagne cet été.   conjugated aller
  'fr.a1.deplacements.006',              // Nous allons en France en avion.   conjugated aller
  'fr.a2.presentation-personnelle.061',  // Je viens des États-Unis.          level a2; the a1 twin is authored
  'fr.a1.quebec-et-francophonie.002',    // le Canada    a second copy, in a theme this lesson does not own
  'fr.a1.quebec-et-francophonie.003',    // la France    the same
  'fr.a1.rencontres.039',                // Je viens de Toulouse, et toi ?    a CITY, which takes de with no article
];

import { IMPORTED as IMPORTED_ROWS, REUSED as REUSED_ROWS } from './pays-imported.ts';
import { unitRef } from './_unit-ref.ts';

export const IMPORTED = IMPORTED_ROWS;
export const REUSED = REUSED_ROWS;
export const IMPORTED_IDS: string[] = IMPORTED.map((r) => r.id);
export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

/** Every id this lesson names that it did not author. */
export const BORROWED_IDS: string[] = [...new Set([...REUSED_IDS, ...IMPORTED_IDS])];

/* ─── Reading a row's text without retyping it ─────────────────────────────
 *
 * Every French sentence a section displays is read through frOf(), so no screen
 * carries its own copy of a corpus row and no two screens can drift.         */

const ALL_ROWS: { id: string; fr: string; en: string }[] = [
  ...AUTHORED_SENTENCES.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...IMPORTED.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
  ...REUSED.map((w) => ({ id: w.id, fr: w.fr, en: w.en })),
];

const BY_ID = new Map(ALL_ROWS.map((r) => [r.id, r] as const));

export function frOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`${unitRef('a1.22')}: no French authored or recorded for "${id}"`);
  return r.fr;
}

export function enOf(id: string): string {
  const r = BY_ID.get(id);
  if (!r) throw new Error(`${unitRef('a1.22')}: no gloss authored or recorded for "${id}"`);
  return r.en;
}

/* ─── Walking a string for a preposition, without a regex ──────────────────
 *
 * `\b` is ASCII-only in JavaScript, so /\ben\b/ fails on « en Espagne » at the
 * accent and a regex that returns zero looks exactly like an absence. Invariant
 * §0's first trap. Neighbours are checked against an accent-aware class.      */
export function hasPhrase(haystack: string, needle: string): boolean {
  const h = haystack.toLowerCase().normalize('NFC');
  const n = needle.toLowerCase().normalize('NFC');
  let from = 0;
  for (;;) {
    const i = h.indexOf(n, from);
    if (i < 0) return false;
    const before = i === 0 ? ' ' : h[i - 1];
    const after = h[i + n.length] ?? ' ';
    if (!/[a-zà-ÿœæ]/i.test(before) && !/[a-zà-ÿœæ]/i.test(after)) return true;
    from = i + 1;
  }
}

/** Which of the six prepositions a string actually uses, read from the text
 *  rather than from a hand-kept table, so a row that stops carrying its
 *  preposition stops counting for it. */
export const PREPOSITIONS = ['en', 'au', 'aux', 'de', 'du', 'des'] as const;

export function prepositionsIn(fr: string): string[] {
  return PREPOSITIONS.filter((p) => hasPhrase(fr, p));
}
