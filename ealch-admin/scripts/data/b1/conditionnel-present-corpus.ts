// b1.08.l1 « Le conditionnel présent » — the authored corpus, the imports and
// the citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b1.09 will import REFRAME and REFRAME_EN from this file; do
// not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, IMPORT_IDS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE CONDITIONAL IS THE CHEAPEST FORM THE LEARNER WILL EVER BUY: the
//   future stem, already paid for in b1.05 and b1.06, plus the imparfait
//   endings, already paid for in b1.01.
//
//     parler -> parler- -> je parlerais · nous parlerions      the recipe
//     -ais -ais -ait -ions -iez -aient                         the endings
//     ser- aur- ir- fer- pourr- voudr- devr- saur- viendr-     free from b1.06
//     verr- faudr- enverr- recevr- tiendr- pleuvr-             free from b1.06
//     je parlerai [e] against je parlerais [ɛ]                 the ear trap
//     je voudrais · j'aimerais · je préférerais                wish
//     pourriez-vous · ce serait possible de                    request
//     tu devrais · il faudrait · à ta place je ferais          advice
//     ce serait plus simple · on gagnerait une heure           hypothesis
//     selon la police, le suspect serait en fuite              unverified
//     pouvoir, vouloir, devoir: the three that carry the day   act 8
//
//   NOT OWNED HERE. The FORMATION of the future stem belongs to b1.05 (the
//   regular stem) and b1.06 (the irregular ones) and is assumed, not taught:
//   act 3 hands the irregular stems back as a list the learner already has.
//   The SI CLAUSE SYSTEM belongs to b1.10. Act 9 uses the RESULT half only,
//   names the boundary on the card and in the act check, and never drills
//   « si + imparfait » as a pattern.
//
// QUOTED, NEVER TAUGHT (imported, never retyped):
//
//   b1.05  REFRAME (the regular future stem).  Acts 2 and 4.
//   b1.06  REFRAME (the irregular stems).      Act 3.
//   b1.01  REFRAME (the imparfait endings).    Act 2.
//
//   All four are real imports (§D). b1.05, b1.06 and b1.07 landed 2026-09-23
//   and the placeholders this file carried while they were being authored in
//   parallel have been replaced. Acts 2 and 4 were reworded around the two
//   reframes whose real wording differs from the guess; see §D.
//
// LEANED ON: b1.01 (imparfait endings), b1.05 and b1.06 (the future stem),
// b1.07 (future usage), a2.13 (pouvoir, vouloir, devoir), a2.02 (aller,
// venir), a2.14 (savoir), a1 politeness formulas.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME: `projets-et-futur` (fondations, a2-b2). It already exists in the
//     seed `themes` table and holds ZERO items, so it is NOT created at
//     import. Ids are `fr.b1.projets-et-futur.NNN`.
//  2. ID BLOCK: b1.08 owns `.600`-`.799` and nothing else. b1.05 owns
//     001-199, b1.06 200-399, b1.07 400-599. Used here: `.600`-`.789`.
//  3. SEED IS ABOUT A QUARTER OF POSTGRES. Read 2026-09-23. The seed holds 106
//     rows carrying a conditional form. 31 are imported here: 30 are present
//     conditional at or below B1, and one is the B2 two-word chunk « on
//     devrait » (fr.b2.ethique.005), taken because it is a B1 phrase filed at
//     B2. The rest of the 106 are conditionnel passé (« il aurait fallu »,
//     « nous aurions payé ») or si + plus-que-parfait, which is B2 ground and
//     is left alone.
//  4. NO published row exists for a bare conditional paradigm (je parlerais,
//     nous parlerions), so this build authors them as conjugation cards.
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER rather than for the ear:
//     none. Every nasal here closes with the superscript ⁿ and every real
//     consonant (personne, année, semaine) is cleared by the source spelling.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b1.08',
  seq: 8,
  title: 'The Present Conditional',
  sub: 'Le conditionnel présent',
  canDo: 'Can form the present conditional of any verb and use it to express a wish, soften a request, give advice, state an imagined result and report information that has not been verified',
  prereqUnitIds: ['b1.01', 'b1.05', 'b1.06'],
} as const;

export const LESSON_ID = 'b1.08.l1';
export const THEME = 'projets-et-futur';
export const LEVEL = 'b1' as const;

/** The whole block, claimed in B1-BUILD-LOG.md. Nothing is authored outside it. */
export const ID_RANGES = [[600, 799]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A2 citations use the house English trail label, resolved through `unitRef`
 *  from the shipped `unit.seq`, never typed and never the raw id. B1 units are
 *  not in the seed yet, so they are named in French from the build plan.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMP_FORM_UNIT = 'b1.01';
export const FUTUR_REG_UNIT = 'b1.05';
export const FUTUR_IRR_UNIT = 'b1.06';
export const FUTUR_USE_UNIT = 'b1.07';
export const POLI_UNIT = 'b1.09';
export const SI_UNIT = 'b1.10';
export const MODAUX_UNIT = 'a2.13';
export const ALLER_UNIT = 'a2.02';
export const SAVOIR_UNIT = 'a2.14';

export const MODAUX_REF = unitRef(MODAUX_UNIT);
export const ALLER_REF = unitRef(ALLER_UNIT);
export const SAVOIR_REF = unitRef(SAVOIR_UNIT);

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5,
  'b1.06': 6, 'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const IMP_FORM_REF = refFr(IMP_FORM_UNIT);
export const FUTUR_REG_REF = refFr(FUTUR_REG_UNIT);
export const FUTUR_IRR_REF = refFr(FUTUR_IRR_UNIT);
export const FUTUR_USE_REF = refFr(FUTUR_USE_UNIT);
export const POLI_REF = refFr(POLI_UNIT);
export const SI_REF = refFr(SI_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS
 *
 *  All four neighbour reframes are IMPORTED, never retyped, so a reword next
 *  door breaks this file at compile time instead of shipping a misquote.
 *
 *  The three b1.05-b1.07 lines were local placeholders while those lessons
 *  were being authored in parallel. They landed 2026-09-23 and the placeholders
 *  are gone. Two of the three real reframes differ from what was guessed, and
 *  the two cards that quote them were reworded to fit:
 *
 *    b1.05  real: « Le futur, c'est l'infinitif jusqu'au r, puis avoir. »
 *           guessed: « L'infinitif entier, puis la fin. »   -> a2-recette card 1
 *    b1.06  real and guessed IDENTICAL, no rewording needed.
 *    b1.07  real: « Le futur se dit des deux côtés de quand, et jamais après si. »
 *           guessed: « Quand le moment est sûr, le futur suit. »  -> a4-paires card 1
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B105_REFRAME, REFRAME_EN as B105_REFRAME_EN } from './futur-simple-corpus.ts';
export { REFRAME as B106_REFRAME, REFRAME_EN as B106_REFRAME_EN } from './futur-irregulier-corpus.ts';
export { REFRAME as B107_REFRAME, REFRAME_EN as B107_REFRAME_EN } from './futur-usage-corpus.ts';

/** b1.01's reframe, imported and never retyped. */
export { REFRAME as B101_REFRAME, REFRAME_EN as B101_REFRAME_EN } from './imparfait-formation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME (b1.09 imports it)
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le futur dit ce qui sera. Le conditionnel dit ce qui serait.';
export const REFRAME_EN = 'The future says what will be. The conditional says what would be.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: "Le conditionnel, c'est pour être poli.",
    why: 'False for four of the six uses. « Selon la police, le suspect serait en fuite » is not polite, and neither is « on gagnerait une heure ». Politeness is act 6, not the lesson.',
  },
  {
    text: "Radical du futur, terminaisons de l'imparfait.",
    why: 'True of the form and silent about every use. It is act 2\'s title, which is exactly the right size for act 2 and too small for the lesson.',
  },
  {
    text: "Le conditionnel, c'est le « si ».",
    why: "False and expensive: « si » is b1.10's ground, and « je voudrais un café » has no si anywhere. A learner who believes this cannot ask for coffee.",
  },
  {
    text: 'Un pas en arrière.',
    why: 'The metaphor the lesson runs on, and too short to be the line: it says the conditional steps back and never says back from WHAT. It survives as the term « le recul ».',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS
 *
 *  Every reused row carries its French in a trailing comment, so nothing here
 *  requires opening seed.json. Seed read 2026-09-23.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a1.au-restaurant.102',        // Je voudrais...
    'fr.a2.courses.178',              // Bonjour, je voudrais une baguette, s'il vous plaît.
    'fr.a1.questions.328',            // Pourriez-vous répéter la question, s'il vous plaît ?
  ],
  act2: [
    'fr.a2.verbes.362',               // Je voudrais payer.
    'fr.a2.verbes.363',               // Nous voudrions payer.
  ],
  act3: [
    'fr.a2.hebergement.130',          // ce serait possible de
    'fr.b1.soins.006',                // vous devriez
  ],
  act4: [] as string[],
  act5: [
    'fr.a1.cafe.003',                 // Je voudrais…
    'fr.a1.marche.084',               // Je voudrais ça.
    'fr.a2.cafe.034',                 // Je voudrais un café avec du lait.
    'fr.a1.cafe.027',                 // Je voudrais un thé, s'il vous plaît.   (no voiceflash)
    'fr.a2.hebergement.079',          // J'aimerais changer de chambre, si c'est possible.
    'fr.b1.metiers.050',              // Je voudrais changer de métier, mais je ne sais pas par où commencer.  (named only)
    'fr.b1.metiers.053',              // Elle aimerait travailler à l'étranger quand elle aura terminé ses études.  (named only)
    'fr.b1.metiers.016',              // Je voudrais changer de métier l'année prochaine.  (named only)
    'fr.a2.transports-quotidiens.227', // Je voudrais un billet pour demain matin.
  ],
  act6: [
    'fr.a2.hebergement.075',          // Pourriez-vous m'apporter une serviette, s'il vous plaît ?
    'fr.a2.hebergement.078',          // Est-ce que ce serait possible d'avoir une autre chambre ?
    'fr.a2.hebergement.091',          // Je voudrais parler au responsable, s'il vous plaît.
    'fr.a2.expressions-frequentes.072', // Pourriez-vous m'aider, s'il vous plaît ?   (no voiceflash)
    'fr.a2.expressions-frequentes.077', // Excusez-moi, pourriez-vous répéter la question ?   (no voiceflash)
    'fr.a2.au-restaurant.001',        // Nous voudrions réserver une table pour deux personnes.   (no voiceflash)
  ],
  act7: [
    'fr.b1.metiers.055',              // Si vous voulez vraiment ce travail, vous devriez préparer votre entretien sérieusement.  (named only)
    'fr.b1.famille.064',              // Ma tante pense que sa fille devrait choisir un métier qui lui plaît.  (named only)
    'fr.b2.ethique.005',              // on devrait
  ],
  act8: [
    'fr.b1.famille.071',              // Je crois que ma cousine pourrait s'installer près de chez nous.  (named only)
    'fr.a2.nombres.041',              // Je voudrais payer en espèces.   (no voiceflash)
  ],
  act9: [
    'fr.b1.cafe.081',                 // Si tu as le temps, on pourrait prendre un café ensemble.   (no voiceflash)
    'fr.b1.cafe.095',                 // Si on partageait l'addition, ce serait plus simple.   (no voiceflash)
  ],
  act10: [
    'fr.b1.cafe.098',                 // Je pensais que le service serait plus rapide un dimanche matin.   (no voiceflash)
    'fr.b1.communaute.002',           // Le maire a promis que la place serait rénovée avant l'été.  (named only)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Imports with NO flashcard drill: nameable in a section, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.b1.metiers.050',      // sentence, review
  'fr.b1.metiers.053',      // sentence, review
  'fr.b1.metiers.016',      // sentence, dictation
  'fr.b1.metiers.055',      // sentence, review
  'fr.b1.famille.064',      // sentence, review
  'fr.b1.famille.071',      // sentence, review
  'fr.b1.communaute.002',   // dictation only
];

/** Imports with NO voiceflash: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a1.cafe.027',
  'fr.a1.questions.328',
  'fr.a2.expressions-frequentes.072',
  'fr.a2.expressions-frequentes.077',
  'fr.a2.au-restaurant.001',
  'fr.a2.nombres.041',
  'fr.b1.cafe.081',
  'fr.b1.cafe.095',
  'fr.b1.cafe.098',
  'fr.b1.soins.006',
  'fr.b2.ethique.005',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, final stressed syllable in caps,
 *  ü for French u, nasals closed with the superscript ⁿ.
 *
 *    -ais -ait -aient   [ɛ]    REH     four of six cells, one sound
 *    -ions              [jɔ̃]   RYOHⁿ
 *    -iez               [je]   RYAY
 *    the future -ai     [e]    RAY     the whole of act 4
 *
 *  NO U+203F anywhere: liaison consonants go onto the next syllable.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
type VC = NonNullable<Item['verbCheck']>;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

type Pers = 'je' | 'tu' | 'il' | 'elle' | 'on' | 'nous' | 'vous' | 'ils' | 'elles';
const PN: Record<Pers, [VC['person'], VC['number']]> = {
  je: ['1', 's'], tu: ['2', 's'], il: ['3', 's'], elle: ['3', 's'], on: ['3', 's'],
  nous: ['1', 'p'], vous: ['2', 'p'], ils: ['3', 'p'], elles: ['3', 'p'],
};

/** A conjugation card. `prompt` is the card front, house shape of
 *  fr.a1.cuisine.005 (« manger · présent · nous »). */
const conj = (
  n: number, fr: string, en: string, ipa: string, respell: string,
  inf: string, p: Pers, tags: string[], drills: Item['drills'] = FCVR,
  tense: 'conditionnel' | 'futur' = 'conditionnel',
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: [tense, ...tags], drills, version: 1,
  cardType: 'conjugation', prompt: `${inf} · ${tense} · ${p}`,
  verbCheck: { infinitive: inf, tense, person: PN[p][0], number: PN[p][1] },
  grammarPoints: [tense === 'conditionnel' ? 'conditionnel-present' : 'futur-simple'],
});

/** A fixed phrase or opener with no single verbCheck. */
const chunk = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['conditionnel', ...tags], drills, version: 1, grammarPoints: ['conditionnel-present'],
});

const sent = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['conditionnel', ...tags], drills, version: 1, grammarPoints: ['conditionnel-present'],
});

/* ── ACT 1 · LE MUR DU PRÉSENT ──────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(600, "Je veux visiter l'appartement.", 'I want to view the flat.', '/ʒə vø vi.zi.te la.paʁ.tə.mɑ̃/', 'zhuh vuh vee-zee-tay lah-par-tuh-MAHⁿ', ['present', 'brut']),
  sent(601, "Je voudrais visiter l'appartement.", 'I would like to view the flat.', '/ʒə vu.dʁɛ vi.zi.te la.paʁ.tə.mɑ̃/', 'zhuh voo-dreh vee-zee-tay lah-par-tuh-MAHⁿ', ['souhait', 'recul'], FCVDR),
  sent(602, 'Vous devez me rappeler demain.', 'You have to call me back tomorrow.', '/vu də.ve mə ʁa.pə.le də.mɛ̃/', 'voo duh-vay muh rah-puh-lay duh-MEHⁿ', ['present', 'brut']),
  sent(603, 'Vous pourriez me rappeler demain.', 'You could call me back tomorrow.', '/vu pu.ʁje mə ʁa.pə.le də.mɛ̃/', 'voo poo-ryay muh rah-puh-lay duh-MEHⁿ', ['politesse', 'recul']),
  sent(604, 'Il faut refaire la peinture.', 'The paint has to be redone.', '/il fo ʁə.fɛʁ la pɛ̃.tyʁ/', 'eel foh ruh-fehr lah pehⁿ-TÜR', ['present', 'brut']),
  sent(605, 'Il faudrait refaire la peinture.', 'The paint would need redoing.', '/il fo.dʁɛ ʁə.fɛʁ la pɛ̃.tyʁ/', 'eel foh-dreh ruh-fehr lah pehⁿ-TÜR', ['conseil', 'recul'], FCVDR),
  sent(606, 'Ce serait parfait pour nous.', 'That would be perfect for us.', '/sə sə.ʁɛ paʁ.fɛ puʁ nu/', 'suh suh-reh par-feh poor NOO', ['hypothese']),
  sent(607, "J'aimerais voir la cuisine.", 'I would like to see the kitchen.', '/ʒɛ.mə.ʁɛ vwaʁ la kɥi.zin/', 'zheh-muh-reh vwar lah kwee-ZEEN', ['souhait']),
  sent(608, 'À votre place, je visiterais deux fois.', 'In your place, I would view it twice.', '/a vɔtʁ plas ʒə vi.zi.tə.ʁɛ dø fwa/', 'ah votr plas zhuh vee-zee-tuh-reh duh FWAH', ['conseil']),
  sent(609, "Selon l'agence, le loyer serait négociable.", 'According to the agency, the rent is said to be negotiable.', '/sə.lɔ̃ la.ʒɑ̃s lə lwa.je sə.ʁɛ ne.ɡɔ.sjabl/', 'suh-lohⁿ lah-ZHAHⁿS luh lwah-yay suh-reh nay-goh-SYABL', ['rumeur']),
  sent(610, 'Nous serions très intéressés.', 'We would be very interested.', '/nu sə.ʁjɔ̃ tʁɛ.zɛ̃.te.ʁe.se/', 'noo suh-ryohⁿ treh-zehⁿ-tay-ray-SAY', ['souhait', 'ions']),
  sent(611, 'Avec un balcon, ce serait parfait.', 'With a balcony it would be perfect.', '/a.vɛ.kœ̃ bal.kɔ̃ sə sə.ʁɛ paʁ.fɛ/', 'ah-veh-KUHⁿ bal-KOHⁿ suh suh-reh par-FEH', ['hypothese']),
];

/* ── ACT 2 · LA RECETTE : RADICAL DU FUTUR, FINS DE L'IMPARFAIT ─────────── */

export const ACT2_ROWS: Row[] = [
  conj(612, 'je parlerais', 'I would speak', '/ʒə paʁ.lə.ʁɛ/', 'zhuh par-luh-REH', 'parler', 'je', ['recette', 'e-sound'], FCVDR),
  conj(613, 'tu parlerais', 'you would speak', '/ty paʁ.lə.ʁɛ/', 'tü par-luh-REH', 'parler', 'tu', ['recette', 'e-sound']),
  conj(614, 'il parlerait', 'he would speak', '/il paʁ.lə.ʁɛ/', 'eel par-luh-REH', 'parler', 'il', ['recette', 'e-sound']),
  conj(615, 'nous parlerions', 'we would speak', '/nu paʁ.lə.ʁjɔ̃/', 'noo par-luh-RYOHⁿ', 'parler', 'nous', ['recette', 'ions']),
  conj(616, 'vous parleriez', 'you would speak', '/vu paʁ.lə.ʁje/', 'voo par-luh-RYAY', 'parler', 'vous', ['recette', 'iez']),
  conj(617, 'ils parleraient', 'they would speak', '/il paʁ.lə.ʁɛ/', 'eel par-luh-REH', 'parler', 'ils', ['recette', 'e-sound', 'aient']),
  conj(618, 'je finirais', 'I would finish', '/ʒə fi.ni.ʁɛ/', 'zhuh fee-nee-REH', 'finir', 'je', ['recette', 'ir']),
  conj(619, 'nous finirions', 'we would finish', '/nu fi.ni.ʁjɔ̃/', 'noo fee-nee-RYOHⁿ', 'finir', 'nous', ['recette', 'ir', 'ions']),
  conj(620, 'ils finiraient', 'they would finish', '/il fi.ni.ʁɛ/', 'eel fee-nee-REH', 'finir', 'ils', ['recette', 'ir', 'aient']),
  conj(621, 'je vendrais', 'I would sell', '/ʒə vɑ̃.dʁɛ/', 'zhuh vahⁿ-DREH', 'vendre', 'je', ['recette', 're']),
  conj(622, 'nous vendrions', 'we would sell', '/nu vɑ̃.dʁi.jɔ̃/', 'noo vahⁿ-dree-YOHⁿ', 'vendre', 'nous', ['recette', 're', 'ions'], FCVDR),
  conj(623, 'vous vendriez', 'you would sell', '/vu vɑ̃.dʁi.je/', 'voo vahⁿ-dree-YAY', 'vendre', 'vous', ['recette', 're', 'iez']),
  conj(624, "j'habiterais", 'I would live', '/ʒa.bi.tə.ʁɛ/', 'zhah-bee-tuh-REH', 'habiter', 'je', ['recette']),
  conj(625, 'elle choisirait', 'she would choose', '/ɛl ʃwa.zi.ʁɛ/', 'el shwah-zee-REH', 'choisir', 'elle', ['recette', 'ir']),
  conj(626, 'tu attendrais', 'you would wait', '/ty a.tɑ̃.dʁɛ/', 'tü ah-tahⁿ-DREH', 'attendre', 'tu', ['recette', 're']),
  conj(627, 'on regarderait', 'we would watch', '/ɔ̃ ʁə.ɡaʁ.də.ʁɛ/', 'ohⁿ ruh-gar-duh-REH', 'regarder', 'on', ['recette']),
  sent(628, 'Je travaillerais volontiers le samedi.', 'I would happily work on Saturdays.', '/ʒə tʁa.va.jə.ʁɛ vɔ.lɔ̃.tje lə sam.di/', 'zhuh trah-vah-yuh-reh voh-lohⁿ-tyay luh sam-DEE', ['recette']),
  sent(629, 'Tu gagnerais du temps avec le tram.', 'You would save time with the tram.', '/ty ɡa.ɲə.ʁɛ dy tɑ̃ a.vɛk lə tʁam/', 'tü gah-nyuh-reh dü tahⁿ ah-vek luh TRAMM', ['recette']),
  sent(630, 'Nous partirions plus tôt le vendredi.', 'We would leave earlier on Fridays.', '/nu paʁ.ti.ʁjɔ̃ ply to lə vɑ̃.dʁə.di/', 'noo par-tee-ryohⁿ plü toh luh vahⁿ-druh-DEE', ['recette', 'ions'], FCVDR),
  sent(631, 'Ils vendraient leur voiture sans problème.', 'They would sell their car without any trouble.', '/il vɑ̃.dʁɛ lœʁ vwa.tyʁ sɑ̃ pʁɔ.blɛm/', 'eel vahⁿ-dreh luhr vwah-tür sahⁿ proh-BLEM', ['recette', 'aient']),
  sent(632, 'On déménagerait volontiers à Gand.', 'We would happily move to Ghent.', '/ɔ̃ de.me.na.ʒə.ʁɛ vɔ.lɔ̃.tje a ɡɑ̃/', 'ohⁿ day-may-nah-zhuh-reh voh-lohⁿ-tyay ah GAHⁿ', ['recette']),
  sent(633, 'Je répondrais la même chose.', 'I would answer the same thing.', '/ʒə ʁe.pɔ̃.dʁɛ la mɛm ʃoz/', 'zhuh ray-pohⁿ-dreh lah mem SHOHZ', ['recette', 're']),
  sent(634, 'Nous attendrions encore une semaine.', 'We would wait another week.', '/nu.za.tɑ̃.dʁi.jɔ̃ ɑ̃.kɔ.ʁyn sə.mɛn/', 'noo zah-tahⁿ-dree-yohⁿ ahⁿ-koh-rün suh-MEN', ['recette', 'ions']),
  sent(635, 'Tu finirais avant midi.', 'You would finish before noon.', '/ty fi.ni.ʁɛ a.vɑ̃ mi.di/', 'tü fee-nee-reh ah-vahⁿ mee-DEE', ['recette', 'ir'], FCVDR),
  sent(636, 'Vous choisiriez quelle couleur ?', 'Which colour would you choose?', '/vu ʃwa.zi.ʁje kɛl ku.lœʁ/', 'voo shwah-zee-ryay kel koo-LUHR', ['recette', 'iez']),
  sent(637, 'Elle habiterait volontiers en banlieue.', 'She would happily live in the suburbs.', '/ɛ.la.bi.tə.ʁɛ vɔ.lɔ̃.tje ɑ̃ bɑ̃.ljø/', 'eh-lah-bee-tuh-reh voh-lohⁿ-tyay ahⁿ bahⁿ-LYUH', ['recette']),
];

/* ── ACT 3 · LES RADICAUX IRRÉGULIERS, RENDUS ──────────────────────────── */

export const ACT3_ROWS: Row[] = [
  conj(638, 'je serais', 'I would be', '/ʒə sə.ʁɛ/', 'zhuh suh-REH', 'être', 'je', ['radical', 'ser'], FCVDR),
  conj(639, 'nous serions', 'we would be', '/nu sə.ʁjɔ̃/', 'noo suh-RYOHⁿ', 'être', 'nous', ['radical', 'ser', 'ions']),
  conj(640, "j'aurais", 'I would have', '/ʒo.ʁɛ/', 'zhoh-REH', 'avoir', 'je', ['radical', 'aur']),
  conj(641, 'il aurait', 'he would have', '/i.lo.ʁɛ/', 'ee-loh-REH', 'avoir', 'il', ['radical', 'aur']),
  conj(642, "j'irais", 'I would go', '/ʒi.ʁɛ/', 'zhee-REH', 'aller', 'je', ['radical', 'ir']),
  conj(643, 'je ferais', 'I would do, I would make', '/ʒə fə.ʁɛ/', 'zhuh fuh-REH', 'faire', 'je', ['radical', 'fer'], FCVDR),
  conj(644, 'il ferait', 'he would do, he would make', '/il fə.ʁɛ/', 'eel fuh-REH', 'faire', 'il', ['radical', 'fer']),
  conj(645, 'je pourrais', 'I could', '/ʒə pu.ʁɛ/', 'zhuh poo-REH', 'pouvoir', 'je', ['radical', 'pourr', 'modal']),
  conj(646, 'vous pourriez', 'you could', '/vu pu.ʁje/', 'voo poo-RYAY', 'pouvoir', 'vous', ['radical', 'pourr', 'modal', 'iez']),
  conj(647, 'je voudrais', 'I would like', '/ʒə vu.dʁɛ/', 'zhuh voo-DREH', 'vouloir', 'je', ['radical', 'voudr', 'modal']),
  conj(648, 'je devrais', 'I should', '/ʒə də.vʁɛ/', 'zhuh duh-VREH', 'devoir', 'je', ['radical', 'devr', 'modal']),
  conj(649, 'tu devrais', 'you should', '/ty də.vʁɛ/', 'tü duh-VREH', 'devoir', 'tu', ['radical', 'devr', 'modal'], FCVDR),
  conj(650, 'je saurais', 'I would know', '/ʒə so.ʁɛ/', 'zhuh soh-REH', 'savoir', 'je', ['radical', 'saur']),
  conj(651, 'je viendrais', 'I would come', '/ʒə vjɛ̃.dʁɛ/', 'zhuh vyehⁿ-DREH', 'venir', 'je', ['radical', 'viendr']),
  conj(652, 'je verrais', 'I would see', '/ʒə vɛ.ʁɛ/', 'zhuh veh-REH', 'voir', 'je', ['radical', 'verr']),
  conj(653, 'il faudrait', 'it would be necessary', '/il fo.dʁɛ/', 'eel foh-DREH', 'falloir', 'il', ['radical', 'faudr']),
  conj(654, "j'enverrais", 'I would send', '/ʒɑ̃.vɛ.ʁɛ/', 'zhahⁿ-veh-REH', 'envoyer', 'je', ['radical', 'enverr']),
  conj(655, 'je recevrais', 'I would receive', '/ʒə ʁə.sə.vʁɛ/', 'zhuh ruh-suh-VREH', 'recevoir', 'je', ['radical', 'recevr']),
  sent(656, 'Ce serait une bonne idée.', 'That would be a good idea.', '/sə sə.ʁɛ yn bɔ.ni.de/', 'suh suh-reh ün boh-nee-DAY', ['radical', 'ser']),
  sent(657, "On irait à pied, ce n'est pas loin.", 'We would walk, it is not far.', '/ɔ̃.ni.ʁɛ a pje sə nɛ pa lwɛ̃/', 'ohⁿ-nee-reh ah pyay suh neh pah LWEHⁿ', ['radical', 'ir']),
  sent(658, 'Nous verrions la mer depuis le balcon.', 'We would see the sea from the balcony.', '/nu vɛ.ʁjɔ̃ la mɛʁ də.pɥi lə bal.kɔ̃/', 'noo veh-ryohⁿ lah mehr duh-pwee luh bal-KOHⁿ', ['radical', 'verr', 'ions']),
  sent(659, 'Tu aurais un peu de temps ce soir ?', 'Would you have a moment this evening?', '/ty o.ʁɛ œ̃ pø də tɑ̃ sə swaʁ/', 'tü oh-reh uhⁿ puh duh tahⁿ suh SWAR', ['radical', 'aur', 'politesse']),
];

/* ── ACT 4 · JE PARLERAI CONTRE JE PARLERAIS ───────────────────────────── */

export const ACT4_ROWS: Row[] = [
  conj(660, 'je parlerai', 'I will speak', '/ʒə paʁ.lə.ʁe/', 'zhuh par-luh-RAY', 'parler', 'je', ['piege', 'futur-pair'], FCVDR, 'futur'),
  conj(661, 'je serai', 'I will be', '/ʒə sə.ʁe/', 'zhuh suh-RAY', 'être', 'je', ['piege', 'futur-pair'], FCVR, 'futur'),
  conj(662, "j'aurai", 'I will have', '/ʒo.ʁe/', 'zhoh-RAY', 'avoir', 'je', ['piege', 'futur-pair'], FCVR, 'futur'),
  conj(663, 'je ferai', 'I will do, I will make', '/ʒə fə.ʁe/', 'zhuh fuh-RAY', 'faire', 'je', ['piege', 'futur-pair'], FCVR, 'futur'),
  conj(664, 'je pourrai', 'I will be able to', '/ʒə pu.ʁe/', 'zhuh poo-RAY', 'pouvoir', 'je', ['piege', 'futur-pair'], FCVR, 'futur'),
  conj(665, 'nous parlerons', 'we will speak', '/nu paʁ.lə.ʁɔ̃/', 'noo par-luh-ROHⁿ', 'parler', 'nous', ['piege', 'futur-pair', 'audible'], FCVR, 'futur'),
  conj(666, 'vous parlerez', 'you will speak', '/vu paʁ.lə.ʁe/', 'voo par-luh-RAY', 'parler', 'vous', ['piege', 'futur-pair', 'audible'], FCVR, 'futur'),
  conj(667, 'il parlera', 'he will speak', '/il paʁ.lə.ʁa/', 'eel par-luh-RAH', 'parler', 'il', ['piege', 'futur-pair', 'audible'], FCVR, 'futur'),
  sent(668, 'Demain, je parlerai au propriétaire.', 'Tomorrow I will speak to the landlord.', '/də.mɛ̃ ʒə paʁ.lə.ʁe o pʁɔ.pʁje.tɛʁ/', 'duh-mehⁿ zhuh par-luh-ray oh proh-pryay-TEHR', ['piege', 'futur-pair'], FCVDR),
  sent(669, 'À ta place, je parlerais au propriétaire.', 'In your place, I would speak to the landlord.', '/a ta plas ʒə paʁ.lə.ʁɛ o pʁɔ.pʁje.tɛʁ/', 'ah tah plas zhuh par-luh-reh oh proh-pryay-TEHR', ['piege', 'conseil'], FCVDR),
  sent(670, 'Je finirai ce dossier ce soir.', 'I will finish this file tonight.', '/ʒə fi.ni.ʁe sə dɔ.sje sə swaʁ/', 'zhuh fee-nee-ray suh doh-syay suh SWAR', ['piege', 'futur-pair']),
  sent(671, 'Je finirais ce dossier ce soir, mais je suis fatigué.', 'I would finish this file tonight, but I am tired.', '/ʒə fi.ni.ʁɛ sə dɔ.sje sə swaʁ mɛ ʒə sɥi fa.ti.ɡe/', 'zhuh fee-nee-reh suh doh-syay suh swar meh zhuh swee fah-tee-GAY', ['piege', 'hypothese']),
  sent(672, 'Je prendrai le train de sept heures.', 'I will take the seven o clock train.', '/ʒə pʁɑ̃.dʁe lə tʁɛ̃ də sɛ.tœʁ/', 'zhuh prahⁿ-dray luh trehⁿ duh seh-TUHR', ['piege', 'futur-pair']),
  sent(673, 'Je prendrais volontiers le train de sept heures.', 'I would gladly take the seven o clock train.', '/ʒə pʁɑ̃.dʁɛ vɔ.lɔ̃.tje lə tʁɛ̃ də sɛ.tœʁ/', 'zhuh prahⁿ-dreh voh-lohⁿ-tyay luh trehⁿ duh seh-TUHR', ['piege', 'souhait']),
  sent(674, 'Nous partirons lundi.', 'We will leave on Monday.', '/nu paʁ.ti.ʁɔ̃ lœ̃.di/', 'noo par-tee-rohⁿ luhⁿ-DEE', ['piege', 'futur-pair', 'audible']),
  sent(675, 'Nous partirions lundi.', 'We would leave on Monday.', '/nu paʁ.ti.ʁjɔ̃ lœ̃.di/', 'noo par-tee-ryohⁿ luhⁿ-DEE', ['piege', 'audible', 'ions']),
  sent(676, "Un jour, j'achèterai une maison.", 'One day I will buy a house.', '/œ̃ ʒuʁ ʒa.ʃɛ.tə.ʁe yn mɛ.zɔ̃/', 'uhⁿ zhoor zhah-sheh-tuh-ray ün meh-ZOHⁿ', ['piege', 'futur-pair']),
  sent(677, "J'achèterais bien une maison au bord de l'eau.", 'I would quite like to buy a house by the water.', '/ʒa.ʃɛ.tə.ʁɛ bjɛ̃ yn mɛ.zɔ̃ o bɔʁ də lo/', 'zhah-sheh-tuh-reh byehⁿ ün meh-zohⁿ oh bor duh LOH', ['piege', 'souhait']),
];

/* ── ACT 5 · LE SOUHAIT ─────────────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  chunk(678, 'je voudrais', 'I would like', '/ʒə vu.dʁɛ/', 'zhuh voo-DREH', ['souhait', 'ouverture']),
  chunk(679, "j'aimerais", 'I would like', '/ʒɛ.mə.ʁɛ/', 'zheh-muh-REH', ['souhait', 'ouverture']),
  chunk(680, 'je préférerais', 'I would prefer', '/ʒə pʁe.fe.ʁə.ʁɛ/', 'zhuh pray-fay-ruh-REH', ['souhait', 'ouverture'], FCVDR),
  sent(681, "J'aimerais changer de travail cette année.", 'I would like to change jobs this year.', '/ʒɛ.mə.ʁɛ ʃɑ̃.ʒe də tʁa.vaj sɛ.ta.ne/', 'zheh-muh-reh shahⁿ-zhay duh trah-vahy seh-tah-NAY', ['souhait']),
  sent(682, 'Je préférerais commencer plus tôt.', 'I would prefer to start earlier.', '/ʒə pʁe.fe.ʁə.ʁɛ kɔ.mɑ̃.se ply to/', 'zhuh pray-fay-ruh-reh koh-mahⁿ-say plü TOH', ['souhait']),
  sent(683, 'Nous aimerions rester encore deux nuits.', 'We would like to stay two more nights.', '/nu.zɛ.mə.ʁjɔ̃ ʁɛs.te ɑ̃.kɔʁ dø nɥi/', 'noo zeh-muh-ryohⁿ res-tay ahⁿ-kor duh NWEE', ['souhait', 'ions']),
  sent(684, 'Elle voudrait apprendre le néerlandais.', 'She would like to learn Dutch.', '/ɛl vu.dʁɛ a.pʁɑ̃dʁ lə ne.ɛʁ.lɑ̃.dɛ/', 'el voo-dreh ah-prahⁿdr luh nay-ehr-lahⁿ-DEH', ['souhait']),
  sent(685, 'Je voudrais un rendez-vous jeudi matin.', 'I would like an appointment on Thursday morning.', '/ʒə vu.dʁɛ œ̃ ʁɑ̃.de.vu ʒø.di ma.tɛ̃/', 'zhuh voo-dreh uhⁿ rahⁿ-day-voo zhuh-dee mah-TEHⁿ', ['souhait'], FCVDR),
  sent(686, 'Nous préférerions une chambre au calme.', 'We would prefer a quiet room.', '/nu pʁe.fe.ʁə.ʁjɔ̃ yn ʃɑ̃.bʁo kalm/', 'noo pray-fay-ruh-ryohⁿ ün shahⁿ-broh KALM', ['souhait', 'ions']),
  sent(687, "Il aimerait travailler à Abidjan.", 'He would like to work in Abidjan.', '/i.lɛ.mə.ʁɛ tʁa.va.je a a.bi.dʒɑ̃/', 'ee-leh-muh-reh trah-vah-yay ah ah-bee-DZHAHⁿ', ['souhait', 'abidjan']),
  sent(688, 'Je voudrais bien, mais je ne peux pas.', 'I would like to, but I cannot.', '/ʒə vu.dʁɛ bjɛ̃ mɛ ʒə nə pø pa/', 'zhuh voo-dreh byehⁿ meh zhuh nuh puh PAH', ['souhait', 'refus']),
  sent(689, 'Tu aimerais venir avec nous ?', 'Would you like to come with us?', '/ty ɛ.mə.ʁɛ və.niʁ a.vɛk nu/', 'tü eh-muh-reh vuh-neer ah-vek NOO', ['souhait']),
  sent(690, "Ils voudraient déménager avant l'hiver.", 'They would like to move before winter.', '/il vu.dʁɛ de.me.na.ʒe a.vɑ̃ li.vɛʁ/', 'eel voo-dreh day-may-nah-zhay ah-vahⁿ lee-VEHR', ['souhait', 'aient']),
  sent(691, 'Je préférerais payer en plusieurs fois.', 'I would prefer to pay in instalments.', '/ʒə pʁe.fe.ʁə.ʁɛ pe.je ɑ̃ ply.zjœʁ fwa/', 'zhuh pray-fay-ruh-reh pay-yay ahⁿ plü-zyuhr FWAH', ['souhait']),
  sent(692, 'Je ne voudrais pas déranger.', 'I would not want to disturb anyone.', '/ʒə nə vu.dʁɛ pa de.ʁɑ̃.ʒe/', 'zhuh nuh voo-dreh pah day-rahⁿ-ZHAY', ['souhait', 'negation']),
  sent(693, "Qu'est-ce que tu aimerais faire ce week-end ?", 'What would you like to do this weekend?', '/kɛs kə ty ɛ.mə.ʁɛ fɛʁ sə wi.kɛnd/', 'kes kuh tü eh-muh-reh fehr suh wee-KEND', ['souhait']),
];

/* ── ACT 6 · DEMANDER SANS IMPOSER ──────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  chunk(694, 'pourriez-vous', 'could you', '/pu.ʁje vu/', 'poo-ryay-VOO', ['politesse', 'ouverture']),
  chunk(695, 'est-ce que vous pourriez', 'would you be able to', '/ɛs kə vu pu.ʁje/', 'es kuh voo poo-RYAY', ['politesse', 'ouverture']),
  chunk(696, 'ça vous dérangerait de', 'would you mind', '/sa vu de.ʁɑ̃.ʒə.ʁɛ də/', 'sah voo day-rahⁿ-zhuh-reh duh', ['politesse', 'ouverture']),
  sent(697, "Pourriez-vous m'envoyer le contrat ?", 'Could you send me the contract?', '/pu.ʁje vu mɑ̃.vwa.je lə kɔ̃.tʁa/', 'poo-ryay voo mahⁿ-vwah-yay luh kohⁿ-TRAH', ['politesse'], FCVDR),
  sent(698, "Est-ce que vous pourriez répéter, s'il vous plaît ?", 'Could you repeat that, please?', '/ɛs kə vu pu.ʁje ʁe.pe.te sil vu plɛ/', 'es kuh voo poo-ryay ray-pay-tay seel voo PLEH', ['politesse']),
  sent(699, 'Auriez-vous une minute ?', 'Would you have a minute?', '/o.ʁje vu yn mi.nyt/', 'oh-ryay voo ün mee-NÜT', ['politesse']),
  sent(700, 'Je voudrais savoir si le loyer est négociable.', 'I would like to know whether the rent is negotiable.', '/ʒə vu.dʁɛ sa.vwaʁ si lə lwa.je ɛ ne.ɡɔ.sjabl/', 'zhuh voo-dreh sah-vwar see luh lwah-yay eh nay-goh-SYABL', ['politesse', 'souhait']),
  sent(701, "Vous n'auriez pas un stylo ?", 'You would not have a pen, would you?', '/vu no.ʁje pa œ̃ sti.lo/', 'voo noh-ryay pah uhⁿ stee-LOH', ['politesse', 'negation']),
  sent(702, 'Ça vous dérangerait de fermer la fenêtre ?', 'Would you mind closing the window?', '/sa vu de.ʁɑ̃.ʒə.ʁɛ də fɛʁ.me la fə.nɛtʁ/', 'sah voo day-rahⁿ-zhuh-reh duh fehr-may lah fuh-NETR', ['politesse']),
  sent(703, 'Est-ce que ce serait possible de visiter demain ?', 'Would it be possible to visit tomorrow?', '/ɛs kə sə sə.ʁɛ pɔ.sibl də vi.zi.te də.mɛ̃/', 'es kuh suh suh-reh poh-seebl duh vee-zee-tay duh-MEHⁿ', ['politesse'], FCVDR),
  sent(704, 'Nous souhaiterions confirmer notre réservation.', 'We would like to confirm our booking.', '/nu swɛ.tə.ʁjɔ̃ kɔ̃.fiʁ.me nɔtʁ ʁe.zɛʁ.va.sjɔ̃/', 'noo sweh-tuh-ryohⁿ kohⁿ-feer-may notr ray-zehr-vah-SYOHⁿ', ['politesse', 'ions']),
  sent(705, 'Tu pourrais me passer le sel ?', 'Could you pass me the salt?', '/ty pu.ʁɛ mə pa.se lə sɛl/', 'tü poo-reh muh pah-say luh SEL', ['politesse', 'tu']),
  sent(706, "Vous auriez l'heure ?", 'Would you have the time?', '/vu.zo.ʁje lœʁ/', 'voo zoh-ryay LUHR', ['politesse']),
  sent(707, 'Je voudrais parler à Madame Lemoine.', 'I would like to speak to Madame Lemoine.', '/ʒə vu.dʁɛ paʁ.le a ma.dam lə.mwan/', 'zhuh voo-dreh par-lay ah mah-dam luh-MWAN', ['politesse', 'souhait']),
  sent(708, 'On pourrait se voir jeudi ?', 'Could we meet on Thursday?', '/ɔ̃ pu.ʁɛ sə vwaʁ ʒø.di/', 'ohⁿ poo-reh suh vwar zhuh-DEE', ['politesse', 'tu']),
  sent(709, 'Je vous serais reconnaissant de me répondre vite.', 'I would be grateful if you answered quickly.', '/ʒə vu sə.ʁɛ ʁə.kɔ.nɛ.sɑ̃ də mə ʁe.pɔ̃dʁ vit/', 'zhuh voo suh-reh ruh-koh-neh-sahⁿ duh muh ray-pohⁿdr VEET', ['politesse', 'ecrit']),
];

/* ── ACT 7 · LE CONSEIL ─────────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  chunk(710, 'tu devrais', 'you should', '/ty də.vʁɛ/', 'tü duh-VREH', ['conseil', 'ouverture']),
  chunk(711, 'il faudrait', 'we ought to', '/il fo.dʁɛ/', 'eel foh-DREH', ['conseil', 'ouverture']),
  chunk(712, 'à ta place', 'if I were you', '/a ta plas/', 'ah tah PLAS', ['conseil', 'ouverture']),
  sent(713, 'Tu devrais prendre rendez-vous cette semaine.', 'You should make an appointment this week.', '/ty də.vʁɛ pʁɑ̃dʁ ʁɑ̃.de.vu sɛt sə.mɛn/', 'tü duh-vreh prahⁿdr rahⁿ-day-voo set suh-MEN', ['conseil'], FCVDR),
  sent(714, 'Vous devriez lire le contrat avant de signer.', 'You should read the contract before signing.', '/vu də.vʁje liʁ lə kɔ̃.tʁa a.vɑ̃ də si.ɲe/', 'voo duh-vryay leer luh kohⁿ-trah ah-vahⁿ duh see-NYAY', ['conseil', 'iez']),
  sent(715, "Il faudrait appeler l'agence aujourd'hui.", 'We ought to call the agency today.', '/il fo.dʁɛ.ta.pə.le la.ʒɑ̃s o.ʒuʁ.dɥi/', 'eel foh-dreh-tah-puh-lay lah-zhahⁿs oh-zhoor-DWEE', ['conseil']),
  sent(716, 'À ta place, je demanderais une réduction.', 'If I were you, I would ask for a discount.', '/a ta plas ʒə də.mɑ̃.də.ʁɛ yn ʁe.dyk.sjɔ̃/', 'ah tah plas zhuh duh-mahⁿ-duh-reh ün ray-dük-SYOHⁿ', ['conseil'], FCVDR),
  sent(717, 'Tu ferais mieux de partir tôt.', 'You would do better to leave early.', '/ty fə.ʁɛ mjø də paʁ.tiʁ to/', 'tü fuh-reh myuh duh par-teer TOH', ['conseil']),
  sent(718, "Il vaudrait mieux attendre lundi.", 'It would be better to wait until Monday.', '/il vo.dʁɛ mjø a.tɑ̃dʁ lœ̃.di/', 'eel voh-dreh myuh ah-tahⁿdr luhⁿ-DEE', ['conseil']),
  sent(719, 'On devrait en parler ensemble.', 'We should talk about it together.', '/ɔ̃ də.vʁɛ ɑ̃ paʁ.le ɑ̃.sɑ̃bl/', 'ohⁿ duh-vreh ahⁿ par-lay ahⁿ-SAHⁿBL', ['conseil']),
  sent(720, 'Tu pourrais essayer une autre agence.', 'You could try another agency.', '/ty pu.ʁɛ e.se.je y.no.tʁa.ʒɑ̃s/', 'tü poo-reh eh-say-yay ü-noh-trah-ZHAHⁿS', ['conseil']),
  sent(721, 'Il faudrait vérifier les charges.', 'The service charges would need checking.', '/il fo.dʁɛ ve.ʁi.fje le ʃaʁʒ/', 'eel foh-dreh vay-ree-fyay lay SHARZH', ['conseil']),
  sent(722, 'Vous ne devriez pas signer tout de suite.', 'You should not sign straight away.', '/vu nə də.vʁje pa si.ɲe tu də sɥit/', 'voo nuh duh-vryay pah see-nyay too duh SWEET', ['conseil', 'negation']),
  sent(723, 'À votre place, je poserais la question par écrit.', 'In your place, I would ask the question in writing.', '/a vɔtʁ plas ʒə po.zə.ʁɛ la kɛs.tjɔ̃ pa.ʁe.kʁi/', 'ah votr plas zhuh poh-zuh-reh lah kes-tyohⁿ pah-ray-KREE', ['conseil']),
  sent(724, 'Tu devrais te reposer un peu.', 'You should rest a little.', '/ty də.vʁɛ tə ʁə.po.ze œ̃ pø/', 'tü duh-vreh tuh ruh-poh-zay uhⁿ PUH', ['conseil']),
  sent(725, 'Je te conseillerais de comparer deux offres.', 'I would advise you to compare two offers.', '/ʒə tə kɔ̃.sɛ.jə.ʁɛ də kɔ̃.pa.ʁe dø.zɔfʁ/', 'zhuh tuh kohⁿ-seh-yuh-reh duh kohⁿ-pah-ray duh-ZOFR', ['conseil']),
  sent(726, 'Il faudrait prévoir un budget pour les travaux.', 'A budget for the work would need setting aside.', '/il fo.dʁɛ pʁe.vwaʁ œ̃ byd.ʒɛ puʁ le tʁa.vo/', 'eel foh-dreh pray-vwar uhⁿ büd-zheh poor lay trah-VOH', ['conseil']),
  sent(727, 'Tu aurais intérêt à relire le bail.', 'You would do well to reread the lease.', '/ty o.ʁɛ.zɛ̃.te.ʁɛ a ʁə.liʁ lə baj/', 'tü oh-reh-zehⁿ-tay-reh ah ruh-leer luh BAHY', ['conseil']),
];

/* ── ACT 8 · POUVOIR, VOULOIR, DEVOIR ──────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  conj(728, 'tu pourrais', 'you could', '/ty pu.ʁɛ/', 'tü poo-REH', 'pouvoir', 'tu', ['modal', 'pourr']),
  conj(729, 'nous pourrions', 'we could', '/nu pu.ʁjɔ̃/', 'noo poo-RYOHⁿ', 'pouvoir', 'nous', ['modal', 'pourr', 'ions']),
  conj(730, 'ils pourraient', 'they could', '/il pu.ʁɛ/', 'eel poo-REH', 'pouvoir', 'ils', ['modal', 'pourr', 'aient']),
  conj(731, 'tu voudrais', 'you would like', '/ty vu.dʁɛ/', 'tü voo-DREH', 'vouloir', 'tu', ['modal', 'voudr']),
  conj(732, 'vous voudriez', 'you would like', '/vu vu.dʁi.je/', 'voo voo-dree-YAY', 'vouloir', 'vous', ['modal', 'voudr', 'iez']),
  conj(733, 'ils voudraient', 'they would like', '/il vu.dʁɛ/', 'eel voo-DREH', 'vouloir', 'ils', ['modal', 'voudr', 'aient']),
  conj(734, 'nous devrions', 'we should', '/nu də.vʁi.jɔ̃/', 'noo duh-vree-YOHⁿ', 'devoir', 'nous', ['modal', 'devr', 'ions']),
  conj(735, 'vous devriez', 'you should', '/vu də.vʁi.je/', 'voo duh-vree-YAY', 'devoir', 'vous', ['modal', 'devr', 'iez']),
  conj(736, 'ils devraient', 'they should', '/il də.vʁɛ/', 'eel duh-VREH', 'devoir', 'ils', ['modal', 'devr', 'aient']),
  sent(737, 'Je pourrais passer vers midi.', 'I could come by around noon.', '/ʒə pu.ʁɛ pa.se vɛʁ mi.di/', 'zhuh poo-reh pah-say vehr mee-DEE', ['modal'], FCVDR),
  sent(738, 'Nous pourrions visiter samedi matin.', 'We could visit on Saturday morning.', '/nu pu.ʁjɔ̃ vi.zi.te sam.di ma.tɛ̃/', 'noo poo-ryohⁿ vee-zee-tay sam-dee mah-TEHⁿ', ['modal', 'ions'], FCVDR),
  sent(739, 'Vous voudriez un café ?', 'Would you like a coffee?', '/vu vu.dʁi.je œ̃ ka.fe/', 'voo voo-dree-yay uhⁿ kah-FAY', ['modal', 'politesse']),
  sent(740, 'Ils devraient arriver vers huit heures.', 'They should arrive around eight.', '/il də.vʁɛ.ta.ʁi.ve vɛʁ ɥi.tœʁ/', 'eel duh-vreh-tah-ree-vay vehr wee-TUHR', ['modal', 'probable']),
  sent(741, "Tu ne devrais pas t'inquiéter.", 'You should not worry.', '/ty nə də.vʁɛ pa tɛ̃.kje.te/', 'tü nuh duh-vreh pah tehⁿ-kyay-TAY', ['modal', 'negation'], FCVDR),
  sent(742, 'On pourrait peut-être partager les frais.', 'We could perhaps share the costs.', '/ɔ̃ pu.ʁɛ pø.tɛtʁ paʁ.ta.ʒe le fʁɛ/', 'ohⁿ poo-reh puh-tetr par-tah-zhay lay FREH', ['modal']),
  sent(743, 'Je ne pourrais pas venir avant six heures.', 'I would not be able to come before six.', '/ʒə nə pu.ʁɛ pa və.niʁ a.vɑ̃ si.zœʁ/', 'zhuh nuh poo-reh pah vuh-neer ah-vahⁿ see-ZUHR', ['modal', 'negation']),
];

/* ── ACT 9 · SI C'ÉTAIT VRAI (LA MOITIÉ RÉSULTAT) ──────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(744, 'Avec un peu plus de place, on serait très bien ici.', 'With a bit more space, we would be very happy here.', '/a.vɛ.kœ̃ pø ply də plas ɔ̃ sə.ʁɛ tʁɛ bjɛ̃ i.si/', 'ah-veh-kuhⁿ puh plü duh plas ohⁿ suh-reh treh byehⁿ ee-SEE', ['hypothese']),
  sent(745, 'Dans ce cas, je signerais tout de suite.', 'In that case, I would sign straight away.', '/dɑ̃ sə ka ʒə si.ɲə.ʁɛ tu də sɥit/', 'dahⁿ suh kah zhuh see-nyuh-reh too duh SWEET', ['hypothese'], FCVDR),
  sent(746, 'Sans les travaux, le loyer serait plus cher.', 'Without the works, the rent would be higher.', '/sɑ̃ le tʁa.vo lə lwa.je sə.ʁɛ ply ʃɛʁ/', 'sahⁿ lay trah-voh luh lwah-yay suh-reh plü SHEHR', ['hypothese']),
  sent(747, 'Moi, je ne ferais pas ça.', 'Me, I would not do that.', '/mwa ʒə nə fə.ʁɛ pa sa/', 'mwah zhuh nuh fuh-reh pah SAH', ['hypothese', 'negation']),
  sent(748, 'Ce serait un vrai changement pour la famille.', 'It would be a real change for the family.', '/sə sə.ʁɛ œ̃ vʁɛ ʃɑ̃ʒ.mɑ̃ puʁ la fa.mij/', 'suh suh-reh uhⁿ vreh shahⁿzh-mahⁿ poor lah fah-MEEY', ['hypothese']),
  sent(749, 'Nous aurions besoin de deux chambres.', 'We would need two bedrooms.', '/nu.zo.ʁjɔ̃ bə.zwɛ̃ də dø ʃɑ̃bʁ/', 'noo zoh-ryohⁿ buh-zwehⁿ duh duh SHAHⁿBR', ['hypothese', 'ions']),
  sent(750, 'Ça nous prendrait vingt minutes à pied.', 'It would take us twenty minutes on foot.', '/sa nu pʁɑ̃.dʁɛ vɛ̃ mi.nyt a pje/', 'sah noo prahⁿ-dreh vehⁿ mee-nüt ah PYAY', ['hypothese']),
  sent(751, 'Personne ne comprendrait ce choix.', 'Nobody would understand that choice.', '/pɛʁ.sɔn nə kɔ̃.pʁɑ̃.dʁɛ sə ʃwa/', 'pehr-sonn nuh kohⁿ-prahⁿ-dreh suh SHWAH', ['hypothese', 'negation']),
  sent(752, "J'irais volontiers, mais je travaille.", 'I would gladly go, but I am working.', '/ʒi.ʁɛ vɔ.lɔ̃.tje mɛ ʒə tʁa.vaj/', 'zhee-reh voh-lohⁿ-tyay meh zhuh trah-VAHY', ['hypothese']),
  sent(753, 'Ce serait plus simple de payer en ligne.', 'It would be simpler to pay online.', '/sə sə.ʁɛ ply sɛ̃pl də pe.je ɑ̃ liɲ/', 'suh suh-reh plü sehⁿpl duh pay-yay ahⁿ LEENY', ['hypothese'], FCVDR),
  sent(754, 'Tu verrais la différence tout de suite.', 'You would see the difference immediately.', '/ty vɛ.ʁɛ la di.fe.ʁɑ̃s tu də sɥit/', 'tü veh-reh lah dee-fay-rahⁿs too duh SWEET', ['hypothese']),
  sent(755, 'On gagnerait une heure chaque matin.', 'We would save an hour every morning.', '/ɔ̃ ɡa.ɲə.ʁɛ y.nœʁ ʃak ma.tɛ̃/', 'ohⁿ gah-nyuh-reh ü-NUHR shak mah-TEHⁿ', ['hypothese']),
  sent(756, 'Les enfants adoreraient le jardin.', 'The children would love the garden.', '/le.zɑ̃.fɑ̃.za.dɔ.ʁə.ʁɛ lə ʒaʁ.dɛ̃/', 'lay zahⁿ-fahⁿ-zah-doh-ruh-reh luh zhar-DEHⁿ', ['hypothese', 'aient']),
  sent(757, "Je n'hésiterais pas une seconde.", 'I would not hesitate for a second.', '/ʒə ne.zi.tə.ʁɛ pa yn sə.ɡɔ̃d/', 'zhuh nay-zee-tuh-reh pah ün suh-GOHⁿD', ['hypothese', 'negation']),
  sent(758, 'Ça changerait beaucoup de choses.', 'That would change a lot of things.', '/sa ʃɑ̃.ʒə.ʁɛ bo.ku də ʃoz/', 'sah shahⁿ-zhuh-reh boh-koo duh SHOHZ', ['hypothese']),
  sent(759, 'Une terrasse, ce serait le rêve.', 'A terrace would be the dream.', '/yn tɛ.ʁas sə sə.ʁɛ lə ʁɛv/', 'ün teh-rass suh suh-reh luh REV', ['hypothese']),
];

/* ── ACT 10 · SELON LA POLICE ──────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  chunk(760, 'selon la police', 'according to the police', '/sə.lɔ̃ la pɔ.lis/', 'suh-lohⁿ lah poh-LEES', ['rumeur', 'ouverture']),
  chunk(761, "d'après le journal", 'according to the paper', '/da.pʁɛ lə ʒuʁ.nal/', 'dah-preh luh zhoor-NAL', ['rumeur', 'ouverture']),
  sent(762, 'Selon la police, le suspect serait en fuite.', 'According to the police, the suspect is said to be on the run.', '/sə.lɔ̃ la pɔ.lis lə sys.pɛ sə.ʁɛ ɑ̃ fɥit/', 'suh-lohⁿ lah poh-lees luh süs-peh suh-reh ahⁿ FWEET', ['rumeur'], FCVDR),
  sent(763, "D'après le journal, l'usine fermerait en juin.", 'According to the paper, the factory is said to be closing in June.', '/da.pʁɛ lə ʒuʁ.nal ly.zin fɛʁ.mə.ʁɛ ɑ̃ ʒɥɛ̃/', 'dah-preh luh zhoor-nal lü-zeen fehr-muh-reh ahⁿ ZHWEHⁿ', ['rumeur']),
  sent(764, 'Le maire aurait une autre solution.', 'The mayor reportedly has another solution.', '/lə mɛ.ʁo.ʁɛ y.no.tʁə sɔ.ly.sjɔ̃/', 'luh meh-roh-reh ü-noh-truh soh-lü-SYOHⁿ', ['rumeur']),
  sent(765, 'Il y aurait une cinquantaine de blessés.', 'There are reportedly around fifty injured.', '/i.lja.ʁɛ yn sɛ̃.kɑ̃.tɛn də ble.se/', 'eel yah-reh ün sehⁿ-kahⁿ-ten duh bleh-SAY', ['rumeur']),
  sent(766, 'Selon la radio, la grève durerait trois jours.', 'According to the radio, the strike is said to last three days.', '/sə.lɔ̃ la ʁa.djo la ɡʁɛv dy.ʁə.ʁɛ tʁwa ʒuʁ/', 'suh-lohⁿ lah rah-dyoh lah grev dü-ruh-reh trwah ZHOOR', ['rumeur']),
  sent(767, 'Les travaux commenceraient au printemps.', 'The works are reportedly starting in spring.', '/le tʁa.vo kɔ.mɑ̃s.ʁɛ o pʁɛ̃.tɑ̃/', 'lay trah-voh koh-mahⁿs-reh oh prehⁿ-TAHⁿ', ['rumeur', 'aient']),
  sent(768, 'Le suspect habiterait dans le quartier.', 'The suspect reportedly lives in the neighbourhood.', '/lə sys.pɛ.ta.bi.tə.ʁɛ dɑ̃ lə kaʁ.tje/', 'luh süs-peh-tah-bee-tuh-reh dahⁿ luh kar-TYAY', ['rumeur']),
  sent(769, "D'après ma voisine, l'immeuble serait à vendre.", 'According to my neighbour, the building is said to be for sale.', '/da.pʁɛ ma vwa.zin li.mœbl sə.ʁɛ a vɑ̃dʁ/', 'dah-preh mah vwah-zeen lee-muhbl suh-reh ah VAHⁿDR', ['rumeur']),
  sent(770, "Le directeur ne serait pas au courant.", 'The director reportedly does not know about it.', '/lə di.ʁɛk.tœʁ nə sə.ʁɛ pa o ku.ʁɑ̃/', 'luh dee-rek-tuhr nuh suh-reh pah oh koo-RAHⁿ', ['rumeur', 'negation']),
  sent(771, "Selon l'agence, les charges seraient comprises.", 'According to the agency, the service charges are said to be included.', '/sə.lɔ̃ la.ʒɑ̃s le ʃaʁʒ sə.ʁɛ kɔ̃.pʁiz/', 'suh-lohⁿ lah-zhahⁿs lay sharzh suh-reh kohⁿ-PREEZ', ['rumeur', 'aient'], FCVDR),
  sent(772, 'Il pleuvrait toute la semaine, selon la météo.', 'It is said it will rain all week, according to the forecast.', '/il plø.vʁɛ tut la sə.mɛn sə.lɔ̃ la me.te.o/', 'eel pluh-vreh toot lah suh-men suh-lohⁿ lah may-tay-OH', ['rumeur']),
  sent(773, 'Les prix baisseraient légèrement cette année.', 'Prices are reportedly falling slightly this year.', '/le pʁi bɛs.ʁɛ le.ʒɛʁ.mɑ̃ sɛ.ta.ne/', 'lay pree bes-reh lay-zhehr-mahⁿ seh-tah-NAY', ['rumeur', 'aient']),
  sent(774, "On parle d'un accord, mais rien ne serait signé.", 'People mention a deal, but reportedly nothing is signed.', '/ɔ̃ paʁl dœ̃.na.kɔʁ mɛ ʁjɛ̃ nə sə.ʁɛ si.ɲe/', 'ohⁿ parl duhⁿ-nah-kor meh ryehⁿ nuh suh-reh see-NYAY', ['rumeur', 'negation']),
  sent(775, 'Le train aurait du retard.', 'The train is said to be running late.', '/lə tʁɛ̃.no.ʁɛ dy ʁə.taʁ/', 'luh trehⁿ-noh-reh dü ruh-TAR', ['rumeur']),
];

/* ── ACT 11 · UN PAS EN ARRIÈRE, PAR ÉCRIT ─────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(776, "Je vous écris au sujet de l'appartement de la rue Haute.", 'I am writing to you about the flat on rue Haute.', '/ʒə vu.ze.kʁi o sy.ʒɛ də la.paʁ.tə.mɑ̃ də la ʁy ot/', 'zhuh voo-zay-kree oh sü-zheh duh lah-par-tuh-mahⁿ duh lah rü OHT', ['ecrit']),
  sent(777, "J'aimerais savoir si la visite de samedi est confirmée.", 'I would like to know whether Saturday visit is confirmed.', '/ʒɛ.mə.ʁɛ sa.vwaʁ si la vi.zit də sam.di ɛ kɔ̃.fiʁ.me/', 'zheh-muh-reh sah-vwar see lah vee-zeet duh sam-dee eh kohⁿ-feer-MAY', ['ecrit', 'souhait']),
  sent(778, 'Nous serions disponibles à partir de dix heures.', 'We would be available from ten o clock.', '/nu sə.ʁjɔ̃ dis.pɔ.nibl a paʁ.tiʁ də di.zœʁ/', 'noo suh-ryohⁿ dees-poh-neebl ah par-teer duh dee-ZUHR', ['ecrit', 'ions']),
  sent(779, "Pourriez-vous me confirmer l'adresse exacte ?", 'Could you confirm the exact address for me?', '/pu.ʁje vu mə kɔ̃.fiʁ.me la.dʁɛs ɛɡ.zakt/', 'poo-ryay voo muh kohⁿ-feer-may lah-dres eg-ZAKT', ['ecrit', 'politesse'], FCVDR),
  sent(780, 'Il faudrait aussi prévoir un état des lieux.', 'An inventory check would also need arranging.', '/il fo.dʁɛ o.si pʁe.vwaʁ œ̃.ne.ta de ljø/', 'eel foh-dreh oh-see pray-vwar uhⁿ-nay-tah day LYUH', ['ecrit', 'conseil']),
  sent(781, 'Ce serait plus simple pour tout le monde.', 'That would be simpler for everyone.', '/sə sə.ʁɛ ply sɛ̃pl puʁ tu lə mɔ̃d/', 'suh suh-reh plü sehⁿpl poor too luh MOHⁿD', ['ecrit', 'hypothese']),
  sent(782, "Je vous remercie d'avance de votre réponse.", 'Thank you in advance for your reply.', '/ʒə vu ʁə.mɛʁ.si da.vɑ̃s də vɔtʁ ʁe.pɔ̃s/', 'zhuh voo ruh-mehr-see dah-vahⁿs duh votr ray-POHⁿS', ['ecrit']),
  sent(783, "Selon l'annonce, le chauffage serait collectif.", 'According to the listing, the heating is said to be communal.', '/sə.lɔ̃ la.nɔ̃s lə ʃo.faʒ sə.ʁɛ kɔ.lɛk.tif/', 'suh-lohⁿ lah-nohⁿs luh shoh-fazh suh-reh koh-lek-TEEF', ['ecrit', 'rumeur']),
  sent(784, 'Je voudrais également poser une question sur les charges.', 'I would also like to ask a question about the service charges.', '/ʒə vu.dʁɛ e.ɡal.mɑ̃ po.ze yn kɛs.tjɔ̃ syʁ le ʃaʁʒ/', 'zhuh voo-dreh ay-gal-mahⁿ poh-zay ün kes-tyohⁿ sür lay SHARZH', ['ecrit', 'souhait']),
  sent(785, 'Nous aimerions emménager avant la rentrée.', 'We would like to move in before the start of term.', '/nu.zɛ.mə.ʁjɔ̃ ɑ̃.me.na.ʒe a.vɑ̃ la ʁɑ̃.tʁe/', 'noo zeh-muh-ryohⁿ ahⁿ-may-nah-zhay ah-vahⁿ lah rahⁿ-TRAY', ['ecrit', 'ions']),
  sent(786, 'Vous devriez recevoir notre dossier demain.', 'You should receive our file tomorrow.', '/vu də.vʁje ʁə.sə.vwaʁ nɔtʁ dɔ.sje də.mɛ̃/', 'voo duh-vryay ruh-suh-vwar notr doh-syay duh-MEHⁿ', ['ecrit', 'probable']),
  sent(787, 'Ce serait avec plaisir.', 'That would be a pleasure.', '/sə sə.ʁɛ a.vɛk ple.ziʁ/', 'suh suh-reh ah-vek pleh-ZEER', ['ecrit']),
  sent(788, 'Je resterais joignable tout le week-end.', 'I would stay reachable all weekend.', '/ʒə ʁɛs.tə.ʁɛ ʒwa.ɲabl tu lə wi.kɛnd/', 'zhuh res-tuh-reh zhwah-nyabl too luh wee-KEND', ['ecrit']),
  sent(789, 'Dans les deux cas, je vous préviendrais rapidement.', 'Either way, I would let you know quickly.', '/dɑ̃ le dø ka ʒə vu pʁe.vjɛ̃.dʁɛ ʁa.pid.mɑ̃/', 'dahⁿ lay duh kah zhuh voo pray-vyehⁿ-dreh rah-peed-MAHⁿ', ['ecrit']),
];

/* ── ALL ─────────────────────────────────────────────────────────────── */

/** Per act, index-aligned with the lesson's acts. */
export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Per act, so each act's dictation names only what that act taught. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE LONG TEXTS AND THEIR ANSWER KEYS
 *
 *  Held here so the reading and the quiz cannot drift apart.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1. 168 words. Every conditional in it is already doing a job. */
export const READING_ANNONCE = "Bruxelles, rue Haute. L'annonce disait : « Bel appartement de deux chambres, deuxième étage, avec balcon. Le loyer serait négociable pour un bail de trois ans. » Karim a lu la ligne deux fois. Selon l'agence, le chauffage serait collectif et les charges seraient comprises, mais rien n'était écrit noir sur blanc. Il a écrit à l'agente : « Bonjour Madame Lemoine, je voudrais visiter l'appartement cette semaine. Pourriez-vous me confirmer l'adresse exacte ? Nous serions disponibles samedi à partir de dix heures. » La réponse est arrivée le soir même. « Ce serait possible samedi matin. Vous devriez apporter vos trois dernières fiches de paie. Il faudrait aussi prévoir un état des lieux avant la signature. » Karim a relu le message et il a souri. Personne ne lui donnait d'ordre, personne ne lui promettait rien, et pourtant tout était clair. Avec un balcon et un loyer correct, ce serait parfait pour eux.";

export const READING_ANNONCE_SOUHAIT = ['je voudrais visiter', 'Nous serions disponibles'] as const;
export const READING_ANNONCE_CONSEIL = ['Vous devriez apporter', 'Il faudrait aussi prévoir'] as const;
export const READING_ANNONCE_RUMEUR = ['serait négociable', 'serait collectif', 'seraient comprises', 'serait collectif'] as const;

/** Act 11. 152 words. The model the learner imitates in the task. */
export const READING_MODELE = "Bonjour Madame Lemoine,\n\nJe vous écris au sujet de l'appartement de la rue Haute. J'aimerais savoir si la visite de samedi est confirmée. Nous serions disponibles à partir de dix heures, et mon frère viendrait avec nous.\n\nPourriez-vous me confirmer l'adresse exacte ? Je voudrais également poser une question sur les charges : selon l'annonce, le chauffage serait collectif, mais le montant n'est pas indiqué. Il faudrait aussi prévoir un état des lieux avant la signature. Ce serait plus simple pour tout le monde.\n\nUne dernière chose : à votre place, je proposerais deux créneaux, parce que la rue est difficile d'accès le samedi matin. Dans les deux cas, je vous préviendrais rapidement.\n\nJe vous remercie d'avance de votre réponse et je reste joignable tout le week-end.\n\nBien à vous,\nKarim Benali";

export const READING_TEXT = READING_MODELE;

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. WHAT THE APP CAN AND CANNOT TEST HERE
 *
 *  fold() = NFD, strip combining marks, lowercase, strip . , ! ? ; : « » ( )
 *  [ ] and apostrophes/hyphens, strip whitespace. Measured consequences:
 *
 *    parlerai / parlerais      different letters, TYPEABLE   (the ear cannot)
 *    serai / serais            different letters, TYPEABLE
 *    parlerions / parlerons    different letters, TYPEABLE, and AUDIBLE
 *    devrais / devrait         different letters, TYPEABLE   (the ear cannot)
 *    à ta place / a ta place   ONE STRING: the accent folds away. Never the point.
 * ══════════════════════════════════════════════════════════════════════════ */

export const FOLD_COLLISIONS: [string, string][] = [
  ['à ta place', 'a ta place'],
  ["j'aimerais", 'jaimerais'],
  ['Pourriez-vous', 'pourriezvous'],
];

export const WANTED_AND_IMPOSSIBLE: readonly { want: string; why: string }[] = [
  { want: 'a listenChoose between je parlerai and je parlerais', why: 'Many speakers, in Paris and in Montréal, barely separate [e] from [ɛ] at the end of a word. Act 4 teaches the reliable cues instead: the time word, the nous form, and what the sentence is doing.' },
  { want: 'a listenChoose between il devrait and ils devraient', why: 'One sound, [də.vʁɛ]. Number is carried by the pronoun and by liaison, and is tested in writing.' },
  { want: 'a typeIn resting on the accent of à ta place', why: 'fold() strips it, so « a ta place » is marked right. Tested by mcq instead.' },
];

/** Error forms the lesson prints on purpose, only where it marks them wrong. */
export const WRONG_FORMS = [
  'je serais demain', 'je voudrai un café', 'tu devras te reposer',
  'si je serais', 'nous parlerons plus doucement, à ta place',
  'je pourrai peut-être', 'il faudra vérifier les charges',
] as const;
