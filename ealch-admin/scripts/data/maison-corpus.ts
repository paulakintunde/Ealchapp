// The a1.26 corpus: what this lesson imports, the three rows it authors, and the
// forty-two shipped respellings it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for every French string, transcription
// and gloss a1.26 puts on a screen. The lesson body (maison-lesson.ts) reads
// `fr`, `ipa`, `respell` and `en` FROM HERE and never restates them.
//
// ══════════════════════════════════════════════════════════════════════════
//  THE BRIEF WAS RIGHT ABOUT THE THEME AND WRONG ABOUT THE ONE ROW IT ASKED
//  FOR. `la pièce` CANNOT BE AUTHORED. IT BREAKS a1.03.
// ══════════════════════════════════════════════════════════════════════════
//
// Measured 2026-08-07 with `pnpm corpus:probe --unit a1.26 --theme maison`,
// scripts/_maison_probe.ts and scripts/_maison_repairs.ts, all against Postgres
// and all through the REAL gender.logic.ts rather than a copy of it.
//
//   1. THE BRIEF: "Exactly one headword that this lesson needs does not exist
//      anywhere in theme maison: la pièce ... authoring it at fr.a1.maison.156
//      is SAFE."
//
//      SAFE AGAINST flashhub-coverage, AND NOT SAFE AGAINST a1.03. Measured
//      through the real `endingPopulation` and `measureEnding`:
//
//          baseline endingPopulation                    1846 nouns
//          + la pièce   (word, gender f)                1847   -e: 880 -> 881
//          + une pièce  (word, gender f)                1847   -e: 880 -> 881
//          + les pièces (word, gender f, plural)        1846   nothing moves
//
//      `-e` is printed by a1.03 as a worthless ending at `items: 880`, and
//      `a1-03-genre.test.ts` recomputes it from the seed on every run and
//      compares it exactly. The brief itself says to "withdraw rather than
//      argue", and it names this exact risk. So the SINGULAR IS WITHDRAWN and
//      the headword authored here is `les pièces`.
//
//      This is famille's finding repeated: a1.15 withdrew `la personne` for the
//      same reason and authored `les enfants`, which is plural and therefore
//      outside the population. The plural is also the better headword: the
//      counting sense a learner meets is « un trois-pièces », « cinq pièces »,
//      and it lives in the plural. The singular `une pièce` is taught on a card
//      with no corpus row of its own.
//
//   2. THE BRIEF: "your dictée runs in sentence mode, not word mode."
//
//      WRONG, AND IT CANNOT BE MADE RIGHT. `DICTEE_LETTER_LIMIT` is 16.
//      The SHORTEST of the seventeen rows in this theme carrying a `dictation`
//      drill is « La cuisine est à côté du salon. » at 24 letters. Every one of
//      the seventeen lands in WORD mode. There is no letters-mode target
//      available at any length, so the choice does not exist.
//
//      Worse, and measured: `wordDecoys` returns `["et","le"]` for both
//      candidate targets. Word mode hands the learner every content word
//      pre-spelled and adds two generic function words as noise, so THE DICTÉE
//      IN THIS LESSON CANNOT TEST WHICH ROOM WORD THE LEARNER CHOOSES. It is a
//      sequencing exercise. It is kept because the rows exist, carry the drill
//      and put the room words in front of the learner one more time, and it is
//      named here and in the test as NOT the place this lesson is proved.
//
//   3. THE BRIEF: "l'étage ... is in your theme. Authoring it would put two
//      non-sentence rows with the same fr in theme maison and fail the build."
//
//      CORRECT, verified: `fr.a2.maison.014` holds « l'étage » at theme
//      `maison`. Nothing named `étage` is authored. Same for `l'ascenseur`
//      (`fr.a2.maison.016`) and `le loyer` (`fr.b1.maison.023`).
//
//   4. THE BRIEF: "the probe normalises to NFC but it does not fold accents, so
//      an ASCII search term silently misses every accented headword."
//
//      CORRECT AND IT MATTERS MORE THAN THE BRIEF SAID. `--words "piece"`
//      reports « ABSENT in every article form. Safe to author. » and
//      `--words "pièce"` returns seven rows. Every headword below was re-probed
//      with its diacritics.
//
// ── The quiz renderer does NOT shuffle, and the brief assumed nothing ──────
//
// a1.22's own test says "QuizDeckView shuffles the options of every closed
// question, per question, per attempt". THAT IS TRUE OF A COMPONENT WHICH DOES
// NOT RENDER THIS LESSON. Verified in LessonPager.tsx:802-831: a lesson that
// declares `rounds` takes the `QuizRoundsView` branch, and `McqCard` there maps
// `opts` in AUTHORED ORDER with no shuffle anywhere in the file. `QuizDeckView`
// in LessonRich.tsx does shuffle and only ever sees pre-v2 lessons that carry no
// rounds.
//
// So for every v2 A1 lesson, including this one, THE AUTHORED `correct` INDEX IS
// THE POSITION THE LEARNER SEES, every time, on every attempt. The spread below
// is therefore real randomisation rather than a formality, and it is asserted.
//
// ── The theme is healthy and this build is the one most likely to break it ──
//
//     theme maison        363 published in Postgres    363 in seed.json
//       fr.a1.maison      153                          153
//       fr.a2.maison       44                           44
//       fr.b1.maison       79                           79
//       fr.b2.maison       87                           87
//
// Zero non-sentence rows share an `fr` inside the theme, across all four bands.
// Zero sentences share an `fr`. `maison` IS in SEED_CUT.themes, which is why the
// two columns agree exactly.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { IMPORTED, IMPORTED_IDS } from './maison-imported.ts';

export { IMPORTED, IMPORTED_IDS };

/* ─── Display strings, the single source of truth ──────────────────────────*/

export type Display = { fr: string; ipa: string; respell: string; en: string };

const unbracket = (s: string) => s.replace(/^\[|\]$/g, '');

/** Every French string this lesson puts on a screen, with the transcription it
 *  puts beside it.
 *
 *  Where a row exists in Postgres, the respelling below is what that row will
 *  hold AFTER this lesson's repairs, never what it holds today: a card reading
 *  `lah SHAHⁿBR` while the flashcard hub reads `lah SHAHNBR` is a contradiction
 *  the learner can see. */
export const RESPELL: Record<string, Display> = {
  // ── the rooms ──
  'la maison': { fr: 'la maison', ipa: '/la mɛ.zɔ̃/', respell: '[lah meh-ZOHⁿ]', en: 'the house' },
  'la chambre': { fr: 'la chambre', ipa: '/la ʃɑ̃bʁ/', respell: '[lah SHAHⁿBR]', en: 'the bedroom' },
  'le salon': { fr: 'le salon', ipa: '/lə sa.lɔ̃/', respell: '[luh sah-LOHⁿ]', en: 'the living room' },
  'la salle de bain': { fr: 'la salle de bain', ipa: '/la sal də bɛ̃/', respell: '[lah SAHL duh BAⁿ]', en: 'the bathroom' },
  'les toilettes': { fr: 'les toilettes', ipa: '/le twa.lɛt/', respell: '[lay twah-LEHT]', en: 'the toilet' },
  'la salle à manger': { fr: 'la salle à manger', ipa: '/la sal a mɑ̃.ʒe/', respell: '[lah SAHL ah mahⁿ-ZHAY]', en: 'the dining room' },
  'la cuisine': { fr: 'la cuisine', ipa: '/la kɥi.zin/', respell: '[lah kwee-ZEEN]', en: 'the kitchen' },
  'la cave': { fr: 'la cave', ipa: '/la kav/', respell: '[lah KAHV]', en: 'the cellar' },
  'le grenier': { fr: 'le grenier', ipa: '/lə ɡʁə.nje/', respell: '[luh gruh-NYAY]', en: 'the attic' },
  'le couloir': { fr: 'le couloir', ipa: '/lə ku.lwaʁ/', respell: '[luh koo-LWAHR]', en: 'the hallway' },
  'le jardin': { fr: 'le jardin', ipa: '/lə ʒaʁ.dɛ̃/', respell: '[luh zhahr-DAⁿ]', en: 'the garden' },
  'le balcon': { fr: 'le balcon', ipa: '/lə bal.kɔ̃/', respell: '[luh bahl-KOHⁿ]', en: 'the balcony' },
  'les pièces': { fr: 'les pièces', ipa: '/le pjɛs/', respell: '[lay PYESS]', en: 'the rooms' },

  // ── taught on a card, with no corpus row of its own. See the header. ──
  'une pièce': { fr: 'une pièce', ipa: '/yn pjɛs/', respell: '[ün PYESS]', en: 'one room, counted' },
  'la salle': { fr: 'la salle', ipa: '/la sal/', respell: '[lah SAHL]', en: 'the room, named by what happens in it' },

  // ── what you live in ──
  "l'appartement": { fr: "l'appartement", ipa: '/la.paʁ.tə.mɑ̃/', respell: '[lah-par-tuh-MAHⁿ]', en: 'the apartment' },
  'le studio': { fr: 'le studio', ipa: '/lə sty.djo/', respell: '[luh stü-DYOH]', en: 'the studio apartment' },
  'le garage': { fr: 'le garage', ipa: '/lə ɡa.ʁaʒ/', respell: '[luh gah-RAHZH]', en: 'the garage' },

  // ── the shell ──
  'la porte': { fr: 'la porte', ipa: '/la pɔʁt/', respell: '[lah PORT]', en: 'the door' },
  'la fenêtre': { fr: 'la fenêtre', ipa: '/la fə.nɛtʁ/', respell: '[lah fuh-NEHTR]', en: 'the window' },
  "l'escalier": { fr: "l'escalier", ipa: '/lɛs.ka.lje/', respell: '[leh-skah-LYAY]', en: 'the staircase' },
  'le mur': { fr: 'le mur', ipa: '/lə myʁ/', respell: '[luh MÜR]', en: 'the wall' },
  'le plafond': { fr: 'le plafond', ipa: '/lə pla.fɔ̃/', respell: '[luh plah-FOHⁿ]', en: 'the ceiling' },
  'le sol': { fr: 'le sol', ipa: '/lə sɔl/', respell: '[luh SOL]', en: 'the floor' },

  // ── the furniture ──
  'le lit': { fr: 'le lit', ipa: '/lə li/', respell: '[luh LEE]', en: 'the bed' },
  'la table': { fr: 'la table', ipa: '/la tabl/', respell: '[lah TAHBL]', en: 'the table' },
  'la chaise': { fr: 'la chaise', ipa: '/la ʃɛz/', respell: '[lah SHEHZ]', en: 'the chair' },
  'le canapé': { fr: 'le canapé', ipa: '/lə ka.na.pe/', respell: '[luh kah-nah-PAY]', en: 'the sofa' },
  'le fauteuil': { fr: 'le fauteuil', ipa: '/lə fo.tœj/', respell: '[luh foh-TUHY]', en: 'the armchair' },
  'la lampe': { fr: 'la lampe', ipa: '/la lɑ̃p/', respell: '[lah LAHⁿP]', en: 'the lamp' },
  "l'armoire": { fr: "l'armoire", ipa: '/laʁ.mwaʁ/', respell: '[lahr-MWAHR]', en: 'the wardrobe' },
  'le tapis': { fr: 'le tapis', ipa: '/lə ta.pi/', respell: '[luh tah-PEE]', en: 'the rug' },
  "l'étagère": { fr: "l'étagère", ipa: '/le.ta.ʒɛʁ/', respell: '[lay-tah-ZHEHR]', en: 'the shelf' },
  'le rideau': { fr: 'le rideau', ipa: '/lə ʁi.do/', respell: '[luh ree-DOH]', en: 'the curtain' },
  'le placard': { fr: 'le placard', ipa: '/lə pla.kaʁ/', respell: '[luh plah-KAR]', en: 'the cupboard' },

  // ── the bedroom and the bathroom ──
  'la couverture': { fr: 'la couverture', ipa: '/la ku.vɛʁ.tyʁ/', respell: '[lah koo-vehr-TÜR]', en: 'the blanket' },
  "l'oreiller": { fr: "l'oreiller", ipa: '/lɔ.ʁe.je/', respell: '[loh-ray-YAY]', en: 'the pillow' },
  'la douche': { fr: 'la douche', ipa: '/la duʃ/', respell: '[lah DOOSH]', en: 'the shower' },
  'la baignoire': { fr: 'la baignoire', ipa: '/la bɛ.ɲwaʁ/', respell: '[lah beh-NYWAHR]', en: 'the bathtub' },
  'le lavabo': { fr: 'le lavabo', ipa: '/lə la.va.bo/', respell: '[luh lah-vah-BOH]', en: 'the washbasin' },

  // ── the machines, which is where gender is predictable for once ──
  'le frigo': { fr: 'le frigo', ipa: '/lə fʁi.ɡo/', respell: '[luh free-GOH]', en: 'the fridge' },
  'le four': { fr: 'le four', ipa: '/lə fuʁ/', respell: '[luh FOOR]', en: 'the oven' },
  'le micro-ondes': { fr: 'le micro-ondes', ipa: '/lə mi.kʁo.ɔ̃d/', respell: '[luh mee-kroh-OHⁿD]', en: 'the microwave' },
  'la cuisinière': { fr: 'la cuisinière', ipa: '/la kɥi.zi.njɛʁ/', respell: '[lah kwee-zee-NYEHR]', en: 'the stove' },
  'le lave-vaisselle': { fr: 'le lave-vaisselle', ipa: '/lə lav.vɛ.sɛl/', respell: '[luh lahv-veh-SEHL]', en: 'the dishwasher' },
  'la machine à laver': { fr: 'la machine à laver', ipa: '/la ma.ʃin a la.ve/', respell: '[lah mah-SHEEN ah lah-VAY]', en: 'the washing machine' },
  'le sèche-linge': { fr: 'le sèche-linge', ipa: '/lə sɛʃ.lɛ̃ʒ/', respell: '[luh sehsh-LAⁿZH]', en: 'the clothes dryer' },

  // ── what goes on the table ──
  'la fourchette': { fr: 'la fourchette', ipa: '/la fuʁ.ʃɛt/', respell: '[lah foor-SHET]', en: 'the fork' },
  'le couteau': { fr: 'le couteau', ipa: '/lə ku.to/', respell: '[luh koo-TOH]', en: 'the knife' },
  'la cuillère': { fr: 'la cuillère', ipa: '/la kɥi.jɛʁ/', respell: '[lah kwee-YEHR]', en: 'the spoon' },
  "l'assiette": { fr: "l'assiette", ipa: '/la.sjɛt/', respell: '[lah-SYET]', en: 'the plate' },
  'le verre': { fr: 'le verre', ipa: '/lə vɛʁ/', respell: '[luh VEHR]', en: 'the glass' },

  // ── the things you reach for ──
  'la clé': { fr: 'la clé', ipa: '/la kle/', respell: '[lah KLAY]', en: 'the key' },
  'la poubelle': { fr: 'la poubelle', ipa: '/la pu.bɛl/', respell: '[lah poo-BEL]', en: 'the trash can' },
  "l'ampoule": { fr: "l'ampoule", ipa: '/lɑ̃.pul/', respell: '[lahⁿ-POOL]', en: 'the light bulb' },
  'le balai': { fr: 'le balai', ipa: '/lə ba.lɛ/', respell: '[luh bah-LEH]', en: 'the broom' },
  'le seau': { fr: 'le seau', ipa: '/lə so/', respell: '[luh SOH]', en: 'the bucket' },

  // ── the three fixed phrases ──
  'faire la vaisselle': { fr: 'faire la vaisselle', ipa: '/fɛʁ la vɛ.sɛl/', respell: '[fehr lah veh-SEHL]', en: 'to do the dishes' },
  'faire le lit': { fr: 'faire le lit', ipa: '/fɛʁ lə li/', respell: '[fehr luh LEE]', en: 'to make the bed' },
  'mettre la table': { fr: 'mettre la table', ipa: '/mɛtʁ la tabl/', respell: '[MET-ruh lah TAHBL]', en: 'to set the table' },
};

export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`maison-corpus: no respelling for "${fr}"`);
  return d.respell;
}

export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`maison-corpus: no ipa for "${fr}"`);
  return d.ipa;
}

export function glossOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`maison-corpus: no gloss for "${fr}"`);
  return d.en;
}

/** `fr` by id, read out of the imported manifest or the authored rows, so no
 *  section retypes a French string that a corpus row already holds. */
export function frOf(id: string): string {
  const hit = IMPORTED.find((r) => r.id === id) ?? AUTHORED_ROWS.find((r) => r.id === id);
  if (!hit) throw new Error(`maison-corpus: no row for ${id}`);
  return hit.fr;
}

export function enOf(id: string): string {
  const hit = IMPORTED.find((r) => r.id === id) ?? AUTHORED_ROWS.find((r) => r.id === id);
  if (!hit) throw new Error(`maison-corpus: no row for ${id}`);
  return hit.en;
}

/** The id carrying a given headword, so a section can name a word and still
 *  release the right card. */
export function idOf(fr: string): string {
  const hit = IMPORTED.find((r) => r.fr === fr) ?? AUTHORED_ROWS.find((r) => r.fr === fr);
  if (!hit) throw new Error(`maison-corpus: no row carries "${fr}"`);
  return hit.id;
}

/* ─── The respelling repairs ───────────────────────────────────────────────
 *
 * Display-only, on rows in this lesson's own theme. The batch prints each one
 * and refuses to write if the stored value is no longer the broken one it
 * expects, because two people disagreeing about a transcription is a decision
 * rather than a merge.
 *
 * FORTY-TWO. Every proposed value was run through the REAL `hasPlainNasalFor`
 * in scripts/_maison_repairs.ts and none of them flags. Sixteen of the broken
 * values the shared checker catches; TEN it cannot see at all; the rest are
 * convention breaks the checker was never going to catch.
 *
 * THE SUPERSCRIPT WAS MISSING FROM THE ENTIRE THEME. Zero of the 112 respelled
 * `maison` rows carried `ⁿ` before this build. Corpus-wide, 893 rows do, across
 * 22 themes, so the convention is live and this theme was simply never
 * migrated. */

export type RespellRepair = {
  id: string;
  fr: string;
  /** What the row carries today. The batch refuses if this has changed. */
  from: string;
  /** What it will carry. Always equal to this lesson's own RESPELL. */
  to: string;
  /** Does the SHARED checker catch the broken value? Recorded because ten of
   *  these are invisible to it and a later author who trusts the checker alone
   *  will reintroduce them. */
  caughtByChecker: boolean;
  why: string;
};

const NASAL_CAUGHT = 'a plain n closes a genuine nasal vowel. The shared checker catches it.';
const NASAL_BLIND = 'a plain n closes a genuine nasal vowel WORD-INTERNALLY, so hasPlainNasalFor '
  + 'cannot see it: its test needs the n to end a token. Invariant §3\'s first blind spot. '
  + 'Asserted by name in the test.';
const ARTICLE_LA = 'the batch that authored ids .042 to .060 wrote the article as a bare `la` where the '
  + 'theme\'s other 35 rows write `lah`. One theme, two conventions, both visible in the flashcard hub.';

export const RESPELL_REPAIRS: RespellRepair[] = [
  // ── the nasal, caught by the checker (16) ──
  { id: 'fr.a1.maison.001', fr: 'la maison', from: 'lah meh-ZOHN', to: unbracket(RESPELL['la maison'].respell), caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.003', fr: 'le salon', from: 'luh sah-LOHN', to: unbracket(RESPELL['le salon'].respell), caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.018', fr: 'le jardin', from: 'luh zhahr-DAN', to: unbracket(RESPELL['le jardin'].respell), caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.033', fr: 'le plafond', from: 'luh plah-FOHN', to: unbracket(RESPELL['le plafond'].respell), caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.039', fr: 'le balcon', from: 'luh bahl-KOHN', to: unbracket(RESPELL['le balcon'].respell), caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.044', fr: 'le coussin', from: 'luh koo-SAN', to: 'luh koo-SAⁿ', caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.047', fr: 'le portemanteau', from: 'luh por-tuh-mahn-TOH', to: 'luh por-tuh-mahⁿ-TOH', caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.057', fr: 'le déménagement', from: 'luh day-may-nazh-MAHN', to: 'luh day-may-nazh-MAHⁿ', caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.058', fr: 'emménager', from: 'ahn-may-na-ZHAY', to: 'ahⁿ-may-na-ZHAY', caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.066', fr: 'le torchon', from: 'luh tor-SHOHN', to: 'luh tor-SHOHⁿ', caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.077', fr: "l'appartement", from: 'lah-par-tuh-MAHN', to: unbracket(RESPELL["l'appartement"].respell), caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.081', fr: 'la véranda', from: 'lah vay-rahn-DAH', to: 'lah vay-rahⁿ-DAH', caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.099', fr: 'le paillasson', from: 'luh pah-yah-SOHN', to: 'luh pah-yah-SOHⁿ', caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.100', fr: "l'ampoule", from: 'lahn-POOL', to: unbracket(RESPELL["l'ampoule"].respell), caughtByChecker: true, why: NASAL_CAUGHT },
  { id: 'fr.a1.maison.112', fr: 'la télévision', from: 'lah tay-lay-vee-ZYOHN', to: 'lah tay-lay-vee-ZYOHⁿ', caughtByChecker: true, why: NASAL_CAUGHT },
  {
    id: 'fr.a1.maison.049', fr: "l'interrupteur", from: 'lan-tay-rüp-TUR', to: 'laⁿ-tay-rüp-TEUR',
    caughtByChecker: true,
    why: 'TWO defects in one row. The nasal /ɛ̃/ is closed with a plain n, and /œʁ/ is written -TUR where '
      + 'the house convention writes /ø œ/ as EU. Both repaired together.',
  },
  {
    id: 'fr.a1.maison.093', fr: 'le compteur', from: 'luh kohn-TUHR', to: 'luh kohⁿ-TEUR',
    caughtByChecker: true,
    why: 'the same two defects as .049, and the -TUHR spelling disagrees with .049 and .050 in its own '
      + 'theme as well as with the convention.',
  },

  // ── the nasal, INVISIBLE to the checker (10) ──
  { id: 'fr.a1.maison.002', fr: 'la chambre', from: 'lah SHAHNBR', to: unbracket(RESPELL['la chambre'].respell), caughtByChecker: false, why: NASAL_BLIND },
  { id: 'fr.a1.maison.025', fr: 'la lampe', from: 'lah LAHNP', to: unbracket(RESPELL['la lampe'].respell), caughtByChecker: false, why: NASAL_BLIND },
  { id: 'fr.a1.maison.064', fr: 'la planche à découper', from: 'lah PLAHNSH ah day-koo-PAY', to: 'lah PLAHⁿSH ah day-koo-PAY', caughtByChecker: false, why: NASAL_BLIND },
  { id: 'fr.a1.maison.067', fr: "l'éponge", from: 'lay-POHNZH', to: 'lay-POHⁿZH', caughtByChecker: false, why: NASAL_BLIND },
  { id: 'fr.a1.maison.072', fr: 'la pince à linge', from: 'lah PANSS ah LANZH', to: 'lah PAⁿSS ah LAⁿZH', caughtByChecker: false, why: `${NASAL_BLIND} This row carries the error twice.` },
  { id: 'fr.a1.maison.073', fr: 'le fil à linge', from: 'luh FEEL ah LANZH', to: 'luh FEEL ah LAⁿZH', caughtByChecker: false, why: NASAL_BLIND },
  { id: 'fr.a1.maison.074', fr: 'le panier à linge', from: 'luh pah-NYAY ah LANZH', to: 'luh pah-NYAY ah LAⁿZH', caughtByChecker: false, why: NASAL_BLIND },
  { id: 'fr.a1.maison.075', fr: 'le cintre', from: 'luh SANTR', to: 'luh SAⁿTR', caughtByChecker: false, why: NASAL_BLIND },
  { id: 'fr.a1.maison.107', fr: 'le micro-ondes', from: 'luh mee-kroh-OHND', to: unbracket(RESPELL['le micro-ondes'].respell), caughtByChecker: false, why: NASAL_BLIND },
  {
    id: 'fr.a1.maison.111', fr: 'le sèche-linge', from: 'luh sesh-LIHNZH', to: unbracket(RESPELL['le sèche-linge'].respell),
    caughtByChecker: false,
    why: `${NASAL_BLIND} AND it is the one row in the theme that spells `
      + '`linge` differently from every other: .072, .073 and .074 all write LANZH and this one writes '
      + 'LIHNZH. A learner meeting the laundry deck sees four cards and two spellings of one word.',
  },

  // ── one theme, two article conventions (9) ──
  { id: 'fr.a1.maison.042', fr: 'la commode', from: 'la ko-MOD', to: 'lah ko-MOD', caughtByChecker: false, why: ARTICLE_LA },
  { id: 'fr.a1.maison.048', fr: 'la poubelle', from: 'la poo-BEL', to: unbracket(RESPELL['la poubelle'].respell), caughtByChecker: false, why: ARTICLE_LA },
  { id: 'fr.a1.maison.051', fr: 'la cheminée', from: 'la shuh-mee-NAY', to: 'lah shuh-mee-NAY', caughtByChecker: false, why: ARTICLE_LA },
  { id: 'fr.a1.maison.054', fr: 'la serrure', from: 'la seh-RÜR', to: 'lah seh-RÜR', caughtByChecker: false, why: ARTICLE_LA },
  { id: 'fr.a1.maison.055', fr: 'la sonnette', from: 'la so-NET', to: 'lah so-NET', caughtByChecker: false, why: ARTICLE_LA },
  { id: 'fr.a1.maison.056', fr: 'la boîte aux lettres', from: 'la BWAHT oh LETR', to: 'lah BWAHT oh LETR', caughtByChecker: false, why: ARTICLE_LA },
  { id: 'fr.a1.maison.059', fr: 'la pelouse', from: 'la puh-LOOZ', to: 'lah puh-LOOZ', caughtByChecker: false, why: ARTICLE_LA },
  { id: 'fr.a1.maison.060', fr: 'la clôture', from: 'la kloh-TÜR', to: 'lah kloh-TÜR', caughtByChecker: false, why: ARTICLE_LA },
  {
    id: 'fr.a1.maison.043', fr: 'la table basse', from: 'la TABL BAS', to: 'lah TAHBL BAHSS',
    caughtByChecker: false,
    why: `${ARTICLE_LA} It also writes `
      + '`table` as TABL where .015 and .123 both write TAHBL, so this one row disagrees with the rest of '
      + 'its theme three times in four words.',
  },

  // ── one word, two respellings, inside one theme (4) ──
  {
    id: 'fr.a1.maison.109', fr: 'le lave-vaisselle', from: 'luh lahv-veh-SELL', to: unbracket(RESPELL['le lave-vaisselle'].respell),
    caughtByChecker: false,
    why: '`vaisselle` is written veh-SEHL at .068 and veh-SELL here and at .121. SEHL is the house EH '
      + 'convention and .068 already has it, so the two odd rows move rather than the one that is right.',
  },
  {
    id: 'fr.a1.maison.121', fr: 'faire la vaisselle', from: 'fehr lah veh-SELL', to: unbracket(RESPELL['faire la vaisselle'].respell),
    caughtByChecker: false,
    why: 'the second half of the `vaisselle` split. See .109.',
  },
  {
    id: 'fr.a1.maison.123', fr: 'mettre la table', from: 'MET-ruh lah TABL', to: unbracket(RESPELL['mettre la table'].respell),
    caughtByChecker: false,
    why: '`table` is TAHBL at .015 and TABL here. This lesson puts .015 and .123 on the same screen in the '
      + 'chores deck, so the disagreement would have been visible in one glance.',
  },
  {
    id: 'fr.a1.maison.050', fr: 'le radiateur', from: 'luh ra-dya-TUR', to: 'luh ra-dya-TEUR',
    caughtByChecker: false,
    why: '/œʁ/ written -TUR where the house convention writes EU. No nasal, so the checker never sees it.',
  },

  // ── two rooms this lesson teaches that carry no transcription at all (2) ──
  {
    id: 'fr.a1.maison.010', fr: 'la salle de bain', from: '', to: unbracket(RESPELL['la salle de bain'].respell),
    caughtByChecker: false,
    why: 'NO RESPELLING AT ALL. This lesson puts it on the hero contrast screen beside `les toilettes`, '
      + 'which does have one, so the pair would have shipped with one half transcribed.',
  },
  {
    id: 'fr.a1.maison.038', fr: 'la salle à manger', from: '', to: unbracket(RESPELL['la salle à manger'].respell),
    caughtByChecker: false,
    why: 'NO RESPELLING AT ALL, and it carries a nasal in `manger` that has never been written.',
  },
];

/** The repairs the shared checker cannot see. Exported so the batch, the merge
 *  and the test all assert these by name rather than trusting the shared
 *  function to have covered them. */
export const REPAIRS_INVISIBLE_TO_CHECKER = RESPELL_REPAIRS
  .filter((r) => !r.caughtByChecker).map((r) => r.fr);

/** Flagged by `hasPlainNasalFor` today and CORRECT as it stands. The wrong fix
 *  passes the checker, so only an assertion by name holds the line. */
export const NOT_REPAIRED: { id: string; fr: string; respell: string; why: string }[] = [
  {
    id: 'fr.a1.maison.096', fr: 'la panne', respell: 'lah PAHN',
    why: 'THE FALSE POSITIVE, AND THE FIX IS NOT A SUPERSCRIPT. `panne` is /pan/: the n is a real '
      + 'consonant, doubled in the spelling, with a vowel behind it, and there is no nasal vowel in the '
      + 'word at all. hasPlainNasalFor flags it anyway, which is the documented class in invariant §3 '
      + 'alongside jaune and automne. Writing lah PAHⁿ would silence the checker and teach a sound that is '
      + 'not there. It is the ONLY row in theme maison the checker still flags after this build, and that '
      + 'is correct rather than incomplete.',
  },
];

/** Broken, real, and NOT this lesson's to fix. Named so the report can say so
 *  rather than leaving the next author to rediscover it. */
export const WIDER_DEBT_NOT_TOUCHED = {
  what: '/œʁ/ written as -TUHR or -TUR rather than the house EUR',
  scope: '117 rows corpus-wide, across metiers, deplacements, transport and a dozen other themes',
  why: 'a corpus migration rather than a lesson build. Three rows inside theme maison are repaired here '
    + '(.049, .050, .093) and the rest are left. A guard written over the whole bundle would fire on '
    + 'legitimate content in themes this lesson does not own and would be deleted by whoever it blocked.',
};

/* ─── Two rows that should not be in a vocabulary theme ────────────────────*/

/** Excluded from `itemIds` on purpose. Reported, never silently deleted: the
 *  SRS may already have scheduled them for somebody. */
export const EXCLUDED_IDS: { id: string; fr: string; why: string }[] = [
  {
    id: 'fr.a1.maison.008',
    fr: "Le pour le masculin, la pour le féminin, l' devant une voyelle.",
    why: 'a1.04\'s article rule stored as a flashcard in a furniture theme, tagged articles+grammar-rule. '
      + 'A learner drilling `maison` gets a grammar sentence with no context and no room in it. Excluded '
      + 'from this lesson and flagged for removal; not deleted here, because deleting another author\'s '
      + 'published row is not this build\'s call.',
  },
  {
    id: 'fr.a1.maison.009',
    fr: 'ma baraque',
    why: 'slang, glossed "my place, my pad (slang)", with no respelling and no voiceflash, at A1, in the '
      + 'unit that teaches a learner how to talk about where they live. Register this far from neutral '
      + 'belongs in a later band if anywhere. Excluded, not deleted.',
  },
];

/* ─── The three authored rows ──────────────────────────────────────────────
 *
 * `les pièces` and two sentences that put it to work. See the header for why the
 * SINGULAR is withdrawn: it moves a1.03's printed -e from 880 to 881.
 *
 * Neither sentence carries `gender`, so neither joins the ending population.
 * Both were checked against the theme for a duplicate `fr` and neither collides;
 * sentences are excluded from the flashhub key in any case.                   */

export type AuthoredRow = Item;

export const AUTHORED_ROWS: AuthoredRow[] = [
  {
    id: 'fr.a1.maison.156',
    kind: 'word',
    level: 'a1',
    theme: 'maison',
    fr: 'les pièces',
    en: 'the rooms',
    ipa: 'le pjɛs',
    respell: unbracket(RESPELL['les pièces'].respell),
    gender: 'f',
    notes: 'The room as a UNIT a home is counted in, which is what a French listing means by « 3 pièces ». '
      + 'Stored plural because the counting sense lives in the plural, and because the singular moves a '
      + 'printed figure in a1.03.',
    tags: ['noun', 'maison', 'pieces'],
    drills: ['flashcard', 'voiceflash'],
    version: 1,
    cardType: 'vocab',
  },
  {
    id: 'fr.a1.maison.157',
    kind: 'sentence',
    level: 'a1',
    theme: 'maison',
    fr: 'Notre appartement a trois pièces.',
    en: 'Our apartment has three rooms.',
    ipa: 'nɔtʁ a.paʁ.tə.mɑ̃ a tʁwa pjɛs',
    tags: ['maison', 'pieces'],
    drills: ['sentence', 'flashcard', 'review'],
    version: 1,
  },
  {
    id: 'fr.a1.maison.158',
    kind: 'sentence',
    level: 'a1',
    theme: 'maison',
    fr: 'Il y a cinq pièces dans la maison.',
    en: 'There are five rooms in the house.',
    ipa: 'il i a sɛ̃k pjɛs dɑ̃ la mɛ.zɔ̃',
    tags: ['maison', 'pieces'],
    drills: ['sentence', 'flashcard', 'review'],
    version: 1,
  },
];

export const AUTHORED_IDS: string[] = AUTHORED_ROWS.map((r) => r.id);

/* ─── The sets the lesson sequences ────────────────────────────────────────*/

/** THE LESSON. English "room" is three French words and the learner has to pick
 *  one before they can say anything at all. Every entry is shown on ONE screen
 *  at the hero contrast, and the test asserts that. */
export const THE_THREE_ROOM_WORDS: { fr: string; english: string; use: string }[] = [
  {
    fr: 'la chambre',
    english: '"my room", when you sleep in it',
    use: 'A bedroom and nothing else. Never a living room, never a room in a restaurant, never a room in a museum.',
  },
  {
    fr: 'les pièces',
    english: '"rooms", when you are counting them',
    use: 'The room as a unit of a home. A listing that says trois pièces is counting every room but the kitchen and the bathroom.',
  },
  {
    fr: 'la salle',
    english: '"the ___ room", when it is named by what happens there',
    use: 'Almost never said alone. It arrives attached: salle de bain, salle à manger.',
  },
];

/** The pair the opening scene turns on, and the reason a learner gets handed a
 *  towel. In most French homes these are two different rooms. */
export const BATH_PAIR = {
  bath: 'la salle de bain',
  toilet: 'les toilettes',
} as const;

/** Verb-plus-noun compounds. All masculine, and it is the one place in this
 *  lesson where gender is predictable rather than stored. */
export const COMPOUND_APPLIANCES = ['le lave-vaisselle', 'le sèche-linge', 'le micro-ondes'];

/** Not compounds, and not masculine. The boundary that makes the rule a rule
 *  rather than a coincidence. */
export const SIMPLE_APPLIANCES = ['la machine à laver', 'la cuisinière'];

/** The one ear pair in this lesson with two corpus rows behind it and a genuine
 *  vowel contrast. Both carry voiceflash, verified against Postgres. */
export const EAR_PAIR = { a: 'le sol', b: 'le seau' } as const;

export const ROOMS = [
  'la maison', 'la chambre', 'le salon', 'la cuisine', 'la salle de bain', 'les toilettes',
  'la salle à manger', 'le couloir', 'la cave', 'le grenier', 'le jardin', 'le balcon',
];

export const DWELLINGS = ["l'appartement", 'le studio', 'le garage'];

export const STRUCTURE = ['la porte', 'la fenêtre', "l'escalier", 'le mur', 'le plafond', 'le sol'];

export const FURNITURE = [
  'le lit', 'la table', 'la chaise', 'le canapé', 'le fauteuil', 'la lampe',
  "l'armoire", 'le tapis', "l'étagère", 'le rideau', 'le placard',
];

export const BED_AND_BATH = ['la couverture', "l'oreiller", 'la douche', 'la baignoire', 'le lavabo'];

export const APPLIANCES = [
  'le frigo', 'le four', 'le micro-ondes', 'la cuisinière',
  'le lave-vaisselle', 'la machine à laver', 'le sèche-linge',
];

export const TABLEWARE = ['la fourchette', 'le couteau', 'la cuillère', "l'assiette", 'le verre'];

export const OBJECTS = ['la clé', 'la poubelle', "l'ampoule", 'le balai', 'le seau'];

export const CHORES = ['faire la vaisselle', 'faire le lit', 'mettre la table'];

/** Every headword this lesson teaches, in teaching order. `la salle` and
 *  `une pièce` are NOT here: they are taught on cards and have no corpus row. */
export const TAUGHT_WORDS: string[] = [
  ...ROOMS, 'les pièces', ...DWELLINGS, ...STRUCTURE, ...FURNITURE,
  ...BED_AND_BATH, ...APPLIANCES, ...TABLEWARE, ...OBJECTS, ...CHORES,
];

/** Which room each object lives in. This is the lesson's ORGANISING principle,
 *  and it is what the sorting drill and the reference sheet are built from. */
export const BY_ROOM: { room: string; things: string[] }[] = [
  { room: 'la cuisine', things: ['le frigo', 'le four', 'le micro-ondes', 'la cuisinière', 'le lave-vaisselle', "l'assiette", 'le verre'] },
  { room: 'la chambre', things: ['le lit', "l'armoire", 'la couverture', "l'oreiller", 'la lampe'] },
  { room: 'le salon', things: ['le canapé', 'le fauteuil', 'la table', 'le tapis', 'le rideau'] },
  { room: 'la salle de bain', things: ['la douche', 'la baignoire', 'le lavabo'] },
];

/* ─── The neighbours, and what may not reach a learner surface ─────────────*/

/** a1.21 owns every one of these AS A TEACHING POINT. They appear all over this
 *  lesson's corpus sentences and that is fine: the guard is scoped to PRODUCTION
 *  surfaces (a quiz answer, a term, a drill bucket), never to every string.
 *  A guard written over every string fires on « Le lit est près de la fenêtre. »
 *  and gets deleted by whoever it blocks. */
export const PREPOSITIONS_A121_OWNS = ['sur', 'sous', 'dans', 'devant', 'derrière', 'à côté de', 'entre', 'chez'];

/** a1.21's headline rule, which must not be restated on any learner surface. */
export const PREPOSITION_RULE_PHRASES = [
  'one word goes straight onto the noun',
  'a phrase needs de first',
  'compound preposition',
  'simple preposition',
];

/** a1.25 owns the chores AS CONJUGATED VERBS. This lesson has three FIXED
 *  PHRASES and nothing else. No conjugated form of any of these may appear on a
 *  production surface. */
export const CHORE_VERBS_A125_OWNS = [
  'je range', 'tu ranges', 'il range', 'nous rangeons', 'vous rangez', 'ils rangent',
  'je balaie', 'elle balaie', 'je passe l\'aspirateur', 'elle passe l\'aspirateur',
];

/** a1.17 owns the possessive system. `ma chambre` appears in this lesson's
 *  corpus sentences as context and is never taught. */
export const POSSESSIVE_RULE_PHRASES = [
  'agrees with the thing possessed',
  'possessive adjective',
  'mon, ma, mes',
];

/** Not French. Asserted against every string in the lesson. */
export const FORBIDDEN_FORMS = [
  'la chambre de bain', 'la salle de bains de', 'le salle', 'la couloir',
  'une chambres', 'la pièce de bain', 'les toilette',
];

/** B1 and A2 own the tenancy relationship. `le loyer`, `le déménagement` and
 *  `emménager` exist at a1 and are deliberately NOT taught. */
export const TENANCY_NOT_TAUGHT = ['le loyer', 'le bail', 'le locataire', 'le propriétaire', 'la caution'];
