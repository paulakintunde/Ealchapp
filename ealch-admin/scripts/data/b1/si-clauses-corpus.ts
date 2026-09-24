// b1.10.l1 « Les phrases avec si » — the authored corpus, the imports and the
// citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top of
// B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// IMPORT_IDS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE WHOLE SI SYSTEM, AS ONE SYSTEM AND NOT AS THREE RULES.
//
//     si + présent      > futur / présent / impératif    what is real
//     si + imparfait    > conditionnel présent           what is not real now
//     si + plus-que-parfait > conditionnel passé         what never happened
//                                                        (RECOGNITION ONLY)
//
//     the absolute rule    after si, never a futur and never a conditionnel
//     the order            either half may come first; the comma follows
//     the choice           si j'ai le temps against si j'avais le temps
//     si = whether         je me demande si, savoir si: not a condition at all
//     si + on              si on allait au cinéma: a suggestion, no result half
//     the polite si        si vous voulez bien, si possible, si tout va bien
//     quand against si     certain and dated, against possible and open
//     the short forms      si oui, sinon, si possible, si jamais, même si
//
//   Act by act: the two worlds side by side (1), the real pair (2), the one
//   absolute rule (3), the three things that may follow si + présent (4), the
//   order of the halves and the comma (5), the unreal pair (6), choosing
//   between the two pairs for the same situation (7), the si that means
//   whether (8), the suggestion si and the polite si (9), quand against si
//   (10), the past-unreal pair by recognition only (11), writing with si (12).
//
//   NOT OWNED. The FORMATION of the futur simple is b1.05's and its irregular
//   stems are b1.06's. The FORMATION of the conditionnel présent is b1.08's.
//   All three are assumed, quoted and never retaught. The PLUS-QUE-PARFAIT
//   and the CONDITIONNEL PASSÉ are B2 ground: act 11 teaches the learner to
//   recognise the pair, to read it and to say what it means, and says twice,
//   on the card and in the act check, that building it is not this lesson's
//   job. Mixed pairs (si + plus-que-parfait > conditionnel présent) are named
//   once, in act 11, as something the learner will meet and will not be asked
//   to produce.
//
// QUOTED, NEVER TAUGHT (imported, never retyped):
//
//   b1.07  REFRAME (the future on both sides of quand, never after si).
//          Acts 1, 3 and 10, and the act 3 sheet. THIS LESSON IS BUILT ON
//          THAT LINE: b1.07 owns si + présent > futur and hands over the rest.
//   b1.08  REFRAME (the future says what will be, the conditional what would
//          be). Acts 6, 7 and 11.
//   b1.05  REFRAME (the regular future stem). Act 2.
//   b1.01  REFRAME (the imparfait endings). Act 6.
//
// LEANED ON: b1.01 (imparfait endings), b1.05 and b1.06 (the future stem),
// b1.07 (quand, dès que, si + présent > futur), b1.08 (the conditional),
// a2.13 (pouvoir, vouloir, devoir), a2.18 (time prepositions).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `projets-et-futur` (fondations, a2-b2). It already exists, so
//     nothing is created at import. Ids are `fr.b1.projets-et-futur.NNN`.
//  2. ID BLOCK: b1.10 owns `.1200`-`.1399` and nothing else. Used here:
//     `.1200`-`.1378`, 179 rows in twelve act blocks.
//     POSTGRES WAS PROBED DIRECTLY on 2026-09-24, not read from the seed:
//     `projets-et-futur` holds 115 published `fr.b1.*` rows at `.001`-`.115`
//     (plus 132 a2 rows at .001-.132 and 48 b2 rows at .001-.048), and ZERO
//     rows at or above `.1200`. The seed shows none of the 115. b1.05 owns
//     1001-1170, b1.06 200-397, b1.07 400-577, b1.08 600-789.
//     NOTE FOR THE LEDGER: `futur-usage-corpus.ts` §A.2 still says b1.10 owns
//     `.800`-`.999`. That line is stale; B1-BUILD-LOG.md moved this lesson to
//     1200-1399 after the b1.05 collision. Nothing here is authored below
//     1200, and b1.07 is not edited by this build.
//  3. SEED IS ABOUT A QUARTER OF POSTGRES. Read 2026-09-24. It carries 79 rows
//     whose French contains a standalone `si`. 36 are imported here (§F); the
//     rest are `si` as an intensifier (« si tôt », « après si longtemps »),
//     rows already quoted by b1.05 to b1.08, or C1 prose. Re-probe at import.
//  4. NO published row exists for the suggestion si (« Si on allait au
//     cinéma »), for « si oui », for « si vous voulez bien », or for a
//     minimal real/unreal PAIR on one situation, so all of those are authored.
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER rather than for the ear:
//     `suh-MENN` (semaine) and `PLENN` (pleine), where a single closing N
//     after a vowel is read by `hasPlainNasal` as a nasal vowel written the
//     old way. Doubling the consonant is a2.34's precedent and keeps the real
//     consonant audible. Everything else is spelled for the ear.
//  6. NO U+203F liaison tie anywhere: a liaison consonant moves onto the next
//     syllable (`noo-za-ree-vuh-ROHⁿ`, not a tie).
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
  id: 'b1.10',
  seq: 10,
  title: 'Si Clauses',
  sub: 'Les phrases avec si',
  canDo: 'Can build a real condition and a present-unreal condition in either clause order, choose between them according to how possible the situation is, recognise the past-unreal pattern in speech and writing, and use si for a suggestion, for a polite opening and for an indirect question',
  prereqUnitIds: ['b1.05', 'b1.06', 'b1.07', 'b1.08'],
} as const;

export const LESSON_ID = 'b1.10.l1';
export const THEME = 'projets-et-futur';
export const LEVEL = 'b1' as const;

/** The whole block, claimed in B1-BUILD-LOG.md. Nothing is authored outside it. */
export const ID_RANGES = [[1200, 1399]] as const;

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
export const COND_UNIT = 'b1.08';
export const POLI_UNIT = 'b1.09';
export const MODAUX_UNIT = 'a2.13';
export const TIME_PREP_UNIT = 'a2.18';

export const MODAUX_REF = unitRef(MODAUX_UNIT);
export const TIME_PREP_REF = unitRef(TIME_PREP_UNIT);

/** TODO(import): drop once the b1 units are rows in `content_units`. */
const B1_SEQ_FROM_PLAN: Record<string, number> = {
  'b1.01': 1, 'b1.02': 2, 'b1.03': 3, 'b1.04': 4, 'b1.05': 5,
  'b1.06': 6, 'b1.07': 7, 'b1.08': 8, 'b1.09': 9, 'b1.10': 10,
  'b1.11': 11, 'b1.12': 12,
};
export function refFr(unitId: string): string {
  const planned = B1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du B1` : unitRef(unitId);
}

export const IMP_FORM_REF = refFr(IMP_FORM_UNIT);
export const FUTUR_REG_REF = refFr(FUTUR_REG_UNIT);
export const FUTUR_IRR_REF = refFr(FUTUR_IRR_UNIT);
export const FUTUR_USE_REF = refFr(FUTUR_USE_UNIT);
export const COND_REF = refFr(COND_UNIT);
export const POLI_REF = refFr(POLI_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  b1.07's line is the one this lesson is built on. b1.07 owns « si + présent
 *  > futur » and the absolute rule, and hands over everything else. It is
 *  IMPORTED and quoted verbatim in acts 1, 3 and 10 and in `sheet-jamais`,
 *  never retyped, so a reword upstream needs no edit here.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B101_REFRAME, REFRAME_EN as B101_REFRAME_EN } from './imparfait-formation-corpus.ts';
export { REFRAME as B105_REFRAME, REFRAME_EN as B105_REFRAME_EN } from './futur-simple-corpus.ts';
export { REFRAME as B107_REFRAME, REFRAME_EN as B107_REFRAME_EN } from './futur-usage-corpus.ts';
export { REFRAME as B108_REFRAME, REFRAME_EN as B108_REFRAME_EN } from './conditionnel-present-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA PAIRE. A si sentence is never two independent choices. It is one
 *  matched pair, chosen once, by how far the situation is from what is real.
 *  Pick the pair and both tenses are already decided; pick a tense on its own
 *  and you get « si je serai », which is the error this lesson exists to kill.
 *
 *  The pair is also what makes the three patterns ONE system rather than
 *  three rules to memorise, and it survives the clause order: a pair is a
 *  pair whichever half is written first.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Une phrase avec si, c'est une paire : tu choisis la paire, pas les temps.";
export const REFRAME_EN = 'A si sentence is a pair: you choose the pair, not the tenses.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: "Après si, jamais de futur ni de conditionnel.",
    why: "The absolute rule of the lesson, and it is kept as one (act 3, the trap, and sheet-jamais). As a REFRAME it is false in act 8: « Je me demande si le car sera complet » puts a future straight after si. A learner who holds it as a law cannot ask whether something will happen.",
  },
  {
    text: 'Si + imparfait, alors conditionnel.',
    why: 'A formula for one of the three patterns, and it teaches the three as three separate rules, which is the exact thing this lesson exists to undo. It is also silent about the clause order and about the choice between the pairs, which is act 7.',
  },
  {
    text: "Quand, c'est sûr. Si, c'est possible.",
    why: "The best TEST in act 10, and it is kept as one there and in sheet-suites. As a reframe it says nothing about the tenses, which is the whole difficulty, and it is silent about the unreal pairs, where si is not possible at all but already ruled out.",
  },
  {
    text: "Le français recule d'un temps, comme l'anglais.",
    why: "True of the mapping present > imparfait > plus-que-parfait, and it makes the system a translation habit instead of a meaning. It also breaks in act 4, where « Si tu as faim, prends du pain » and « Si on chauffe trop l'eau, le thé devient amer » step back in neither language.",
  },
  {
    text: 'Deux moitiés, deux temps différents.',
    why: "False in act 4: « Si tu as faim, il y a du pain dans la cuisine » has the same tense on both sides, and so does « Si on respecte la recette, le résultat est meilleur ». The pair metaphor survives that case; a difference rule does not.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-24 and its `fr` is copied
 *  verbatim wherever a section prints it. `named only` rows carry no
 *  `flashcard` drill, so no deckTranche can release them: they are reachable
 *  by being named in a section or a drill. Only four of the 36 carry
 *  `voiceflash`, so the other 32 are in `NOT_SPEAKABLE`.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b1.cafe.088',                 // Si le serveur oublie notre commande, nous devrons attendre encore.
    'fr.b1.litterature.004',          // Si j'avais le temps, je lirais davantage.
  ],
  act2: [
    'fr.b1.cuisine.093',              // Si les invités arrivent tôt, nous devrons cuisiner plus vite.
    'fr.b1.maison.074',               // Si le loyer augmente encore, nous devrons déménager.
    'fr.b1.dictee.035',               // Si vous réussissez l'examen, vous recevrez votre certificat par la poste.  (named only)
  ],
  act3: [
    'fr.b1.sports-et-loisirs.088',    // Si l'entraîneur n'était pas si exigeant, l'équipe ne progresserait pas.
  ],
  act4: [
    'fr.a2.symptomes.217',            // Si ça ne passe pas, revenez me voir.
    'fr.a2.internet.212',             // Rappelez demain si le problème continue.
    'fr.b1.hebergement.005',          // Si la réception est fermée, il faut appeler ce numéro pour obtenir les clés.
  ],
  act5: [
    'fr.a1.corps.216',                // Tu dois te reposer si tu es fatigué.  (named only)
    'fr.a2.heure-et-date.077',        // On se voit après-demain, si tu es libre.
    'fr.b1.dictee.051',               // Elle continuerait ses études si elle obtenait une bourse suffisante.  (named only)
    'fr.b1.cafe.016',                 // Il faut réserver une table si on veut manger ici le week-end.  (named only)
  ],
  act6: [
    'fr.b1.soins.004',                // Si j'étais toi, je prendrais un rendez-vous chez le médecin.
    'fr.b1.ecologie.005',             // Si nous recyclions davantage, nous produirions moins de déchets.
    'fr.b1.famille.066',              // Si mes beaux-parents venaient dîner, je préparerais un grand repas.  (named only)
    'fr.b1.metiers.051',              // Si j'avais plus d'expérience, je postulerais pour ce poste de responsable.  (named only)
  ],
  act7: [
    'fr.b1.dictee.031',               // Si j'avais plus de temps, je suivrais un cours du soir.  (named only)
    'fr.b1.metiers.059',              // Si elle réussissait l'entretien, elle obtiendrait le poste sans problème.  (named only)
  ],
  act8: [
    'fr.sons.elision.072',            // Je ne sais pas si c'est l'heure.
    'fr.a2.marche.130',               // J'ai demandé si les œufs venaient d'une ferme locale.
    'fr.b1.cafe.063',                 // Elle se demande si le café est encore ouvert.  (named only)
    'fr.b1.routines.060',             // Elle se demande si elle a le temps de déjeuner avant de partir.  (named only)
    'fr.sons.rythme.020',             // Tu pars toujours si tôt.  (named only; si as an intensifier, named once as a boundary)
  ],
  act9: [
    'fr.b1.heure-et-date.033',        // On peut arriver une demi-heure en avance si tu veux.
    'fr.b1.cafe.073',                 // Nous aimerions nous asseoir en terrasse, si cela ne vous dérange pas.  (named only)
    'fr.a2.rp-voyage.006',            // Le prochain train, si possible.  (named only)
  ],
  act10: [
    'fr.b1.routines.079',             // Il faut que je me couche plus tôt si je veux être productif.
    'fr.b1.metiers.049',              // Il faut que tu envoies ton CV avant vendredi si tu veux ce poste.  (named only)
    'fr.b1.sports-et-loisirs.004',    // Même si elle déteste perdre, elle accepte de rejouer une dernière fois.
    'fr.b1.maison.079',               // Elle préfère un appartement calme même si le loyer est plus élevé.
  ],
  act11: [
    'fr.b1.hebergement.004',          // Si nous avions réservé plus tôt, nous aurions payé moins cher.  (named only)
    'fr.b1.dictee.046',               // Si tu avais écouté attentivement, tu n'aurais pas fait autant de fautes.  (named only)
    'fr.b1.famille.084',              // Si j'avais su plus tôt, j'aurais organisé une fête pour mes grands-parents.  (named only)
    'fr.b1.dictee.041',               // Elle aurait aimé continuer ses études si elle en avait eu les moyens.  (named only)
    'fr.b2.maison.065',               // Si j'avais su, je n'aurais jamais signé ce bail.  (named only)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.b1.dictee.035',        // sentence, review
  'fr.a1.corps.216',         // sentence, review
  'fr.b1.dictee.051',        // dictation only
  'fr.b1.cafe.016',          // sentence, dictation
  'fr.b1.famille.066',       // sentence, review
  'fr.b1.metiers.051',       // sentence, review
  'fr.b1.dictee.031',        // sentence, review
  'fr.b1.metiers.059',       // dictation only
  'fr.b1.cafe.063',          // dictation only
  'fr.b1.routines.060',      // dictation only
  'fr.sons.rythme.020',      // sentence, review
  'fr.b1.cafe.073',          // dictation only
  'fr.a2.rp-voyage.006',     // dictation, sentence
  'fr.b1.metiers.049',       // sentence, review
  'fr.b1.hebergement.004',   // dictation only
  'fr.b1.dictee.046',        // dictation only
  'fr.b1.famille.084',       // dictation only
  'fr.b1.dictee.041',        // sentence, review
  'fr.b2.maison.065',        // dictation only
];

/** No `voiceflash` either: never in a `practice` speak section. Only three of
 *  the 36 reused rows carry it (fr.a2.symptomes.217, fr.a2.internet.212,
 *  fr.sons.elision.072), so every other import is listed here. */
export const NOT_SPEAKABLE = IMPORT_IDS.filter(
  (id) => !['fr.a2.symptomes.217', 'fr.a2.internet.212', 'fr.sons.elision.072'].includes(id),
);

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  and NO U+203F tie: a liaison consonant simply moves onto the next syllable.
 *
 *  THE ONE THING THE EAR MUST CATCH in this lesson is which half carries the
 *  -rai / -rais, because the si half never does. The caps therefore sit on the
 *  result half's verb wherever the sentence has one: `zha-ree-vuh-REH`,
 *  `noo-pruhⁿ-DROHⁿ`, `zhuh vyehⁿ-DREH`.
 *
 *  A `rule` row is a grammar card: `prompt` is the question on the front and
 *  `fr` is the rule on the back. It is never spoken as a sentence, so it takes
 *  no `voiceflash`.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FCR = ['flashcard', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['si', ...tags], drills, version: 1, grammarPoints: ['si-clauses'],
});

const chunk = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['si', ...tags], drills, version: 1, grammarPoints: ['si-clauses'],
});

/** A rule card: `prompt` is the question on the front, `fr` the rule. */
const rule = (n: number, prompt: string, fr: string, en: string, ipa: string, respell: string, tags: string[]): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['si', 'regle', ...tags], drills: FCR, version: 1,
  cardType: 'grammar', prompt, grammarPoints: ['si-clauses'],
});

/* ── ACT 1 · DEUX SI, DEUX MONDES ───────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, "Si je pars à sept heures, j'arriverai avant midi.", 'If I leave at seven, I will get there before noon.', '/si ʒə paʁ a sɛt œʁ ʒa.ʁi.və.ʁe a.vɑ̃ mi.di/', 'see zhuh par a set EUR | zha-ree-vuh-REH a-vahⁿ mee-DEE', ['reel', 'paire'], FCVDR),
  sent(1201, "Si je partais à sept heures, j'arriverais avant midi.", 'If I left at seven, I would get there before noon.', '/si ʒə paʁ.tɛ a sɛt œʁ ʒa.ʁi.və.ʁɛ a.vɑ̃ mi.di/', 'see zhuh par-TEH a set EUR | zha-ree-vuh-REH a-vahⁿ mee-DEE', ['irreel', 'paire'], FCVDR),
  sent(1202, 'Si tu as le temps, tu pourras venir avec nous.', 'If you have time, you will be able to come with us.', '/si ty a lə tɑ̃ ty pu.ʁa və.niʁ a.vɛk nu/', 'see tü a luh TAHⁿ | tü poo-RA vuh-neer a-vek NOO', ['reel', 'paire']),
  sent(1203, 'Si tu avais le temps, tu pourrais venir avec nous.', 'If you had time, you could come with us.', '/si ty a.vɛ lə tɑ̃ ty pu.ʁɛ və.niʁ a.vɛk nu/', 'see tü a-veh luh TAHⁿ | tü poo-REH vuh-neer a-vek NOO', ['irreel', 'paire']),
  sent(1204, 'Si le car est complet, nous prendrons le train.', 'If the coach is full, we will take the train.', '/si lə kaʁ ɛ kɔ̃.plɛ nu pʁɑ̃.dʁɔ̃ lə tʁɛ̃/', 'see luh kar eh kohⁿ-PLEH | noo prahⁿ-DROHⁿ luh TREHⁿ', ['reel', 'paire']),
  sent(1205, 'Si le car était complet, nous prendrions le train.', 'If the coach were full, we would take the train.', '/si lə kaʁ e.tɛ kɔ̃.plɛ nu pʁɑ̃.dʁi.jɔ̃ lə tʁɛ̃/', 'see luh kar ay-teh kohⁿ-PLEH | noo prahⁿ-dree-YOHⁿ luh TREHⁿ', ['irreel', 'paire']),
  sent(1206, 'Si Ousmane accepte, nous partirons samedi matin.', 'If Ousmane agrees, we will leave on Saturday morning.', '/si us.man ak.sɛpt nu paʁ.ti.ʁɔ̃ sam.di ma.tɛ̃/', 'see ooss-man ak-SEPT | noo par-tee-ROHⁿ sam-dee ma-TEHⁿ', ['reel']),
  sent(1207, 'Si Ousmane acceptait, nous partirions samedi matin.', 'If Ousmane agreed, we would leave on Saturday morning.', '/si us.man ak.sɛp.tɛ nu paʁ.ti.ʁi.jɔ̃ sam.di ma.tɛ̃/', 'see ooss-man ak-sep-TEH | noo par-tee-ree-YOHⁿ sam-dee ma-TEHⁿ', ['irreel']),
  sent(1208, "Si j'avais une voiture, je vous emmènerais tous.", 'If I had a car, I would take you all.', '/si ʒa.vɛ yn vwa.tyʁ ʒə vu.zɑ̃.mɛn.ʁɛ tus/', 'see zha-veh ün vwa-TÜR | zhuh voo-zahⁿ-men-REH TOOSS', ['irreel'], FCVDR),
  sent(1209, 'Si nous avions su, nous aurions réservé plus tôt.', 'If we had known, we would have booked earlier.', '/si nu.za.vjɔ̃ sy nu.zo.ʁjɔ̃ ʁe.zɛʁ.ve ply to/', 'see noo-za-vyohⁿ SÜ | noo-zoh-ryohⁿ ray-zehr-vay plü TOH', ['passe', 'reconnaitre']),
  sent(1210, 'Il pleut souvent en novembre, dans cette région.', 'It rains often in November, in this region.', '/il plø su.vɑ̃ ɑ̃ nɔ.vɑ̃bʁ dɑ̃ sɛt ʁe.ʒjɔ̃/', 'eel pluh soo-VAHⁿ ahⁿ no-VAHⁿBR | dahⁿ set ray-ZHYOHⁿ', ['temoin']),
  sent(1211, 'Si le temps est mauvais, nous resterons au refuge.', 'If the weather is bad, we will stay at the refuge.', '/si lə tɑ̃ ɛ mo.vɛ nu ʁɛs.tə.ʁɔ̃ o ʁə.fyʒ/', 'see luh tahⁿ eh moh-VEH | noo res-tuh-ROHⁿ oh ruh-FÜZH', ['reel']),
  sent(1212, 'Si le temps était mauvais, nous resterions au refuge.', 'If the weather were bad, we would stay at the refuge.', '/si lə tɑ̃ e.tɛ mo.vɛ nu ʁɛs.tə.ʁi.jɔ̃ o ʁə.fyʒ/', 'see luh tahⁿ ay-teh moh-VEH | noo res-tuh-ree-YOHⁿ oh ruh-FÜZH', ['irreel']),
  sent(1213, 'Je me demande si le car est déjà réservé.', 'I wonder whether the coach is already booked.', '/ʒə mə də.mɑ̃d si lə kaʁ ɛ de.ʒa ʁe.zɛʁ.ve/', 'zhuh muh duh-MAHⁿD see luh kar eh day-zha ray-zehr-VAY', ['question']),
  sent(1214, 'Si on partait vendredi soir, on gagnerait une journée.', 'If we left on Friday evening, we would gain a day.', '/si ɔ̃ paʁ.tɛ vɑ̃.dʁə.di swaʁ ɔ̃ ɡa.ɲə.ʁɛ yn ʒuʁ.ne/', 'see ohⁿ par-teh vahⁿ-druh-dee SWAR | ohⁿ ga-nyuh-REH ün zhoor-NAY', ['suggestion']),
];

/* ── ACT 2 · LA PAIRE RÉELLE : SI + PRÉSENT, PUIS FUTUR ─────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1215, "Si tu réserves aujourd'hui, tu paieras moins cher.", 'If you book today, you will pay less.', '/si ty ʁe.zɛʁv o.ʒuʁ.dɥi ty pɛ.ʁa mwɛ̃ ʃɛʁ/', 'see tü ray-ZEHRV oh-zhoor-DWEE | tü peh-RA mwehⁿ SHEHR', ['reel'], FCVDR),
  sent(1216, 'Si le train est en retard, nous attendrons à la gare.', 'If the train is late, we will wait at the station.', '/si lə tʁɛ̃ ɛ.tɑ̃ ʁə.taʁ nu.za.tɑ̃.dʁɔ̃ a la ɡaʁ/', 'see luh trehⁿ eh-tahⁿ ruh-TAR | noo-za-tahⁿ-DROHⁿ a la GAR', ['reel']),
  sent(1217, "Si tout le monde arrive à l'heure, nous partirons à huit heures.", 'If everyone arrives on time, we will leave at eight.', '/si tu lə mɔ̃d a.ʁiv a lœʁ nu paʁ.ti.ʁɔ̃ a ɥi.tœʁ/', 'see too luh mohⁿd a-reev a LEUR | noo par-tee-ROHⁿ a wee-TEUR', ['reel']),
  sent(1218, 'Si la salle est libre, la réunion aura lieu au premier étage.', 'If the room is free, the meeting will be held on the first floor.', '/si la sal ɛ libʁ la ʁe.y.njɔ̃ o.ʁa ljø o pʁə.mje.ʁe.taʒ/', 'see la sal eh LEEBR | la ray-ü-NYOHⁿ oh-ra lyuh oh pruh-myay-ray-TAZH', ['reel']),
  sent(1219, 'Si vous payez avant vendredi, vous aurez une réduction.', 'If you pay before Friday, you will get a discount.', '/si vu pɛ.je a.vɑ̃ vɑ̃.dʁə.di vu.zo.ʁe yn ʁe.dyk.sjɔ̃/', 'see voo peh-YAY a-vahⁿ vahⁿ-druh-DEE | voo-zoh-RAY ün ray-dük-SYOHⁿ', ['reel'], FCVDR),
  sent(1220, 'Si je trouve un remplaçant, je prendrai ma journée de lundi.', 'If I find a replacement, I will take Monday off.', '/si ʒə tʁuv œ̃ ʁɑ̃.pla.sɑ̃ ʒə pʁɑ̃.dʁe ma ʒuʁ.ne də lœ̃.di/', 'see zhuh troov uhⁿ rahⁿ-pla-SAHⁿ | zhuh prahⁿ-DREH ma zhoor-nay duh luhⁿ-DEE', ['reel']),
  sent(1221, 'Si elle finit son rapport ce soir, elle sera tranquille demain.', 'If she finishes her report tonight, she will be free tomorrow.', '/si ɛl fi.ni sɔ̃ ʁa.pɔʁ sə swaʁ ɛl sə.ʁa tʁɑ̃.kil də.mɛ̃/', 'see el fee-nee sohⁿ ra-por suh SWAR | el suh-ra trahⁿ-KEEL duh-MEHⁿ', ['reel']),
  sent(1222, "Si nous n'avons pas de réponse, nous rappellerons mardi.", 'If we have no answer, we will call back on Tuesday.', '/si nu na.vɔ̃ pa də ʁe.pɔ̃s nu ʁa.pɛl.ʁɔ̃ maʁ.di/', 'see noo na-vohⁿ pa duh ray-POHⁿS | noo ra-pel-ROHⁿ mar-DEE', ['reel']),
  sent(1223, "Si le magasin est fermé, j'irai au marché.", 'If the shop is closed, I will go to the market.', '/si lə ma.ɡa.zɛ̃ ɛ fɛʁ.me ʒi.ʁe o maʁ.ʃe/', 'see luh ma-ga-zehⁿ eh fehr-MAY | zhee-REH oh mar-SHAY', ['reel'], FCVDR),
  sent(1224, 'Si les enfants sont fatigués, nous rentrerons plus tôt.', 'If the children are tired, we will go home earlier.', '/si le.zɑ̃.fɑ̃ sɔ̃ fa.ti.ɡe nu ʁɑ̃.tʁə.ʁɔ̃ ply to/', 'see lay-zahⁿ-fahⁿ sohⁿ fa-tee-GAY | noo rahⁿ-truh-ROHⁿ plü TOH', ['reel']),
  sent(1225, "Si tu oublies ton badge, tu devras passer à l'accueil.", 'If you forget your badge, you will have to go to reception.', '/si ty u.bli tɔ̃ badʒ ty də.vʁa pa.se a la.kœj/', 'see tü oo-blee tohⁿ BADZH | tü duh-VRA pa-say a la-KEUY', ['reel']),
  rule(1226, 'Une condition réelle : quel temps juste après si ?', "Après si, le présent. C'est l'autre moitié qui prend le futur.", 'After si, the present. The other half is the one that takes the future.', '/a.pʁɛ si lə pʁe.zɑ̃ sɛ lotʁ mwa.tje ki pʁɑ̃ lə fy.tyʁ/', 'a-preh see luh pray-ZAHⁿ | seh lohtr mwa-tyay kee prahⁿ luh fü-TÜR', ['reel', 'paire']),
  sent(1227, 'Si tu veux, je peux te déposer à la gare.', 'If you like, I can drop you at the station.', '/si ty vø ʒə pø tə de.po.ze a la ɡaʁ/', 'see tü VUH | zhuh puh tuh day-poh-zay a la GAR', ['reel', 'present']),
  sent(1228, 'S’il fait beau, nous mangerons dehors.', 'If the weather is fine, we will eat outside.', '/sil fɛ bo nu mɑ̃.ʒə.ʁɔ̃ də.ɔʁ/', 'seel feh BOH | noo mahⁿ-zhuh-ROHⁿ duh-OR', ['reel', 'elision'], FCVDR),
  sent(1229, 'S’il y a de la place, nous viendrons tous les deux.', 'If there is room, we will both come.', '/sil ja də la plas nu vjɛ̃.dʁɔ̃ tu le dø/', 'see-lya duh la PLASS | noo vyehⁿ-DROHⁿ too lay DUH', ['reel', 'elision']),
];

/* ── ACT 3 · JAMAIS -RAI, JAMAIS -RAIS ──────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1230, 'Si tu viens demain, nous irons au marché ensemble.', 'If you come tomorrow, we will go to the market together.', '/si ty vjɛ̃ də.mɛ̃ nu.zi.ʁɔ̃ o maʁ.ʃe ɑ̃.sɑ̃bl/', 'see tü vyehⁿ duh-MEHⁿ | noo-zee-ROHⁿ oh mar-shay ahⁿ-SAHⁿBL', ['reel', 'jamais'], FCVDR),
  sent(1231, "Si vous arrivez avant moi, attendez devant l'entrée.", 'If you get there before me, wait in front of the entrance.', '/si vu.za.ʁi.ve a.vɑ̃ mwa a.tɑ̃.de də.vɑ̃ lɑ̃.tʁe/', 'see voo-za-ree-vay a-vahⁿ MWA | a-tahⁿ-day duh-vahⁿ lahⁿ-TRAY', ['reel', 'imperatif']),
  sent(1232, 'Si elle peut se libérer, elle passera nous voir.', 'If she can get away, she will drop in on us.', '/si ɛl pø sə li.be.ʁe ɛl pa.sə.ʁa nu vwaʁ/', 'see el puh suh lee-bay-RAY | el pa-suh-ra noo VWAR', ['reel', 'jamais']),
  sent(1233, 'Si nous partons tôt, nous éviterons les bouchons.', 'If we leave early, we will avoid the traffic jams.', '/si nu paʁ.tɔ̃ to nu.ze.vi.tə.ʁɔ̃ le bu.ʃɔ̃/', 'see noo par-tohⁿ TOH | noo-zay-vee-tuh-ROHⁿ lay boo-SHOHⁿ', ['reel', 'jamais'], FCVDR),
  sent(1234, "Si je gagne ce contrat, je recruterai quelqu'un.", 'If I win this contract, I will hire someone.', '/si ʒə ɡaɲ sə kɔ̃.tʁa ʒə ʁə.kʁy.tə.ʁe kɛl.kœ̃/', 'see zhuh ganny suh kohⁿ-TRA | zhuh ruh-krü-tuh-REH kel-KUHⁿ', ['reel', 'jamais']),
  sent(1235, 'Si le dossier est complet, la mairie répondra en dix jours.', 'If the file is complete, the town hall will answer within ten days.', '/si lə do.sje ɛ kɔ̃.plɛ la mɛ.ʁi ʁe.pɔ̃.dʁa ɑ̃ di ʒuʁ/', 'see luh do-syay eh kohⁿ-PLEH | la meh-ree ray-pohⁿ-DRA ahⁿ dee ZHOOR', ['reel', 'jamais']),
  rule(1236, "Peut-on écrire « si je serai » ?", "Non. Après si, jamais de futur et jamais de conditionnel.", 'No. After si, never a future and never a conditional.', '/nɔ̃ a.pʁɛ si ʒa.mɛ də fy.tyʁ e ʒa.mɛ də kɔ̃.di.sjɔ.nɛl/', 'nohⁿ | a-preh see zha-meh duh fü-TÜR | ay zha-meh duh kohⁿ-dee-syo-NEL', ['jamais', 'regle-dure']),
  sent(1237, 'Si j’étais à ta place, je demanderais un délai.', 'If I were in your place, I would ask for an extension.', '/si ʒe.tɛ a ta plas ʒə də.mɑ̃.də.ʁɛ œ̃ de.lɛ/', 'see zhay-teh a ta PLASS | zhuh duh-mahⁿ-duh-REH uhⁿ day-LEH', ['irreel', 'jamais'], FCVDR),
  sent(1238, 'Si nous avions plus de place, nous inviterions tout le monde.', 'If we had more room, we would invite everyone.', '/si nu.za.vjɔ̃ ply də plas nu.zɛ̃.vi.tə.ʁi.jɔ̃ tu lə mɔ̃d/', 'see noo-za-vyohⁿ plü duh PLASS | noo-zehⁿ-vee-tuh-ree-YOHⁿ too luh MOHⁿD', ['irreel', 'jamais']),
  rule(1239, 'Où vont les formes en -rai et en -rais ?', "Dans la moitié résultat, jamais dans la moitié si.", 'In the result half, never in the si half.', '/dɑ̃ la mwa.tje ʁe.zyl.ta ʒa.mɛ dɑ̃ la mwa.tje si/', 'dahⁿ la mwa-tyay ray-zül-TA | zha-meh dahⁿ la mwa-tyay SEE', ['jamais', 'regle-dure']),
  sent(1240, "Si le bus ne passe pas, je marcherai jusqu'au centre.", 'If the bus does not come, I will walk to the centre.', '/si lə bys nə pas pa ʒə maʁ.ʃə.ʁe ʒys.ko sɑ̃tʁ/', 'see luh büss nuh pass PA | zhuh mar-shuh-REH zhüs-koh SAHⁿTR', ['reel', 'paire']),
  sent(1241, "Si le bus ne passait pas, je marcherais jusqu'au centre.", 'If the bus did not come, I would walk to the centre.', '/si lə bys nə pa.sɛ pa ʒə maʁ.ʃə.ʁɛ ʒys.ko sɑ̃tʁ/', 'see luh büss nuh pa-seh PA | zhuh mar-shuh-REH zhüs-koh SAHⁿTR', ['irreel', 'paire']),
  sent(1242, 'Si tu me préviens avant midi, je m’organiserai autrement.', 'If you warn me before noon, I will make other arrangements.', '/si ty mə pʁe.vjɛ̃ a.vɑ̃ mi.di ʒə mɔʁ.ɡa.ni.zə.ʁe o.tʁə.mɑ̃/', 'see tü muh pray-vyehⁿ a-vahⁿ mee-DEE | zhuh mor-ga-nee-zuh-REH oh-truh-MAHⁿ', ['reel', 'paire']),
  sent(1243, 'Si tu me prévenais avant midi, je m’organiserais autrement.', 'If you warned me before noon, I would make other arrangements.', '/si ty mə pʁe.və.nɛ a.vɑ̃ mi.di ʒə mɔʁ.ɡa.ni.zə.ʁɛ o.tʁə.mɑ̃/', 'see tü muh pray-vuh-neh a-vahⁿ mee-DEE | zhuh mor-ga-nee-zuh-REH oh-truh-MAHⁿ', ['irreel', 'paire']),
  sent(1244, 'Si vous acceptez notre offre, nous signerons cette semaine.', 'If you accept our offer, we will sign this week.', '/si vu.zak.sɛp.te nɔ.tʁɔfʁ nu si.ɲə.ʁɔ̃ sɛt sə.mɛn/', 'see voo-zak-sep-tay no-TROFR | noo see-nyuh-ROHⁿ set suh-MENN', ['reel', 'paire']),
  sent(1245, 'Si vous acceptiez notre offre, nous signerions cette semaine.', 'If you accepted our offer, we would sign this week.', '/si vu.zak.sɛp.tje nɔ.tʁɔfʁ nu si.ɲə.ʁi.jɔ̃ sɛt sə.mɛn/', 'see voo-zak-sep-tyay no-TROFR | noo see-nyuh-ree-YOHⁿ set suh-MENN', ['irreel', 'paire']),
];

/* ── ACT 4 · TROIS SUITES POUR UNE SEULE CONDITION ──────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1246, 'Si tu as faim, il y a du pain dans la cuisine.', 'If you are hungry, there is bread in the kitchen.', '/si ty a fɛ̃ il ja dy pɛ̃ dɑ̃ la kɥi.zin/', 'see tü a FEHⁿ | eel ya dü pehⁿ dahⁿ la kwee-ZEEN', ['suite', 'present'], FCVDR),
  sent(1247, 'Si la réception est fermée, le code est sur la porte.', 'If reception is closed, the code is on the door.', '/si la ʁe.sɛp.sjɔ̃ ɛ fɛʁ.me lə kɔd ɛ syʁ la pɔʁt/', 'see la ray-sep-syohⁿ eh fehr-MAY | luh kod eh sür la PORT', ['suite', 'present']),
  sent(1248, 'Si tu as faim, prends du pain dans la cuisine.', 'If you are hungry, take some bread from the kitchen.', '/si ty a fɛ̃ pʁɑ̃ dy pɛ̃ dɑ̃ la kɥi.zin/', 'see tü a FEHⁿ | prahⁿ dü pehⁿ dahⁿ la kwee-ZEEN', ['suite', 'imperatif']),
  sent(1249, 'Si le voyant rouge s’allume, appelle le technicien.', 'If the red light comes on, call the technician.', '/si lə vwa.jɑ̃ ʁuʒ sa.lym a.pɛl lə tɛk.ni.sjɛ̃/', 'see luh vwa-yahⁿ roozh sa-LÜM | a-pel luh tek-nee-SYEHⁿ', ['suite', 'imperatif'], FCVDR),
  sent(1250, 'Si tu as faim, je te préparerai quelque chose.', 'If you are hungry, I will make you something.', '/si ty a fɛ̃ ʒə tə pʁe.pa.ʁə.ʁe kɛl.kə ʃoz/', 'see tü a FEHⁿ | zhuh tuh pray-pa-ruh-REH kel-kuh SHOHZ', ['suite', 'futur']),
  sent(1251, 'Si vous avez un doute, demandez confirmation par courriel.', 'If you have a doubt, ask for confirmation by email.', '/si vu.za.ve œ̃ dut də.mɑ̃.de kɔ̃.fiʁ.ma.sjɔ̃ paʁ ku.ʁjɛl/', 'see voo-za-vay uhⁿ DOOT | duh-mahⁿ-day kohⁿ-feer-ma-syohⁿ par koo-RYEL', ['suite', 'imperatif']),
  sent(1252, "Si on chauffe trop l'eau, le thé devient amer.", 'If you heat the water too much, the tea turns bitter.', '/si ɔ̃ ʃof tʁo lo lə te də.vjɛ̃.ta.mɛʁ/', 'see ohⁿ shohf troh LOH | luh tay duh-vyehⁿ-ta-MEHR', ['suite', 'present', 'verite']),
  sent(1253, 'Si tu appuies deux fois, la machine s’arrête.', 'If you press twice, the machine stops.', '/si ty a.pɥi dø fwa la ma.ʃin sa.ʁɛt/', 'see tü a-pwee duh FWA | la ma-sheen sa-RET', ['suite', 'present', 'verite']),
  sent(1254, 'Si le train a du retard, prévenez-moi tout de suite.', 'If the train is late, let me know straight away.', '/si lə tʁɛ̃ a dy ʁə.taʁ pʁe.və.ne mwa tu də sɥit/', 'see luh trehⁿ a dü ruh-TAR | pray-vuh-nay mwa too duh SWEET', ['suite', 'imperatif'], FCVDR),
  sent(1255, 'Si le train a du retard, je vous préviendrai tout de suite.', 'If the train is late, I will let you know straight away.', '/si lə tʁɛ̃ a dy ʁə.taʁ ʒə vu pʁe.vjɛ̃.dʁe tu də sɥit/', 'see luh trehⁿ a dü ruh-TAR | zhuh voo pray-vyehⁿ-DREH too duh SWEET', ['suite', 'futur']),
  sent(1256, 'Si le train a du retard, la correspondance est garantie.', 'If the train is late, the connection is guaranteed.', '/si lə tʁɛ̃ a dy ʁə.taʁ la kɔ.ʁɛs.pɔ̃.dɑ̃s ɛ ɡa.ʁɑ̃.ti/', 'see luh trehⁿ a dü ruh-TAR | la ko-res-pohⁿ-DAHⁿS eh ga-rahⁿ-TEE', ['suite', 'present']),
  rule(1257, "Après « si + présent », qu'est-ce qui peut suivre ?", 'Un futur, un présent ou un impératif : trois suites pour une seule condition.', 'A future, a present or an imperative: three results for one condition.', '/œ̃ fy.tyʁ œ̃ pʁe.zɑ̃ u œ̃.nɛ̃.pe.ʁa.tif tʁwa sɥit puʁ yn sœl kɔ̃.di.sjɔ̃/', 'uhⁿ fü-TÜR | uhⁿ pray-ZAHⁿ | oo uhⁿ-nehⁿ-pay-ra-TEEF | trwa sweet poor ün seul kohⁿ-dee-SYOHⁿ', ['suite']),
  sent(1258, "Si vous voulez payer en plusieurs fois, c'est possible.", 'If you want to pay in instalments, that is possible.', '/si vu vu.le pɛ.je ɑ̃ ply.zjœʁ fwa sɛ pɔ.sibl/', 'see voo voo-lay peh-yay ahⁿ plü-zyeur FWA | seh po-SEEBL', ['suite', 'present']),
  sent(1259, 'Si quelqu’un appelle pendant la réunion, notez le numéro.', 'If someone calls during the meeting, write down the number.', '/si kɛl.kœ̃ a.pɛl pɑ̃.dɑ̃ la ʁe.y.njɔ̃ nɔ.te lə ny.me.ʁo/', 'see kel-kuhⁿ a-pel pahⁿ-dahⁿ la ray-ü-NYOHⁿ | no-tay luh nü-may-ROH', ['suite', 'imperatif']),
  sent(1260, 'Si le colis n’arrive pas lundi, nous vous rembourserons.', 'If the parcel does not arrive on Monday, we will refund you.', '/si lə kɔ.li na.ʁiv pa lœ̃.di nu vu ʁɑ̃.buʁ.sə.ʁɔ̃/', 'see luh ko-lee na-reev pa luhⁿ-DEE | noo voo rahⁿ-boor-suh-ROHⁿ', ['suite', 'futur']),
];

/* ── ACT 5 · L'ORDRE DES DEUX MOITIÉS ET LA VIRGULE ─────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1261, 'Nous partirons samedi si la météo le permet.', 'We will leave on Saturday if the weather allows.', '/nu paʁ.ti.ʁɔ̃ sam.di si la me.te.o lə pɛʁ.mɛ/', 'noo par-tee-ROHⁿ sam-DEE | see la may-tay-oh luh pehr-MEH', ['ordre', 'resultat-devant'], FCVDR),
  sent(1262, 'Si la météo le permet, nous partirons samedi.', 'If the weather allows, we will leave on Saturday.', '/si la me.te.o lə pɛʁ.mɛ nu paʁ.ti.ʁɔ̃ sam.di/', 'see la may-tay-oh luh pehr-MEH | noo par-tee-ROHⁿ sam-DEE', ['ordre', 'si-devant']),
  sent(1263, 'Appelle-moi si tu as un problème.', 'Call me if you have a problem.', '/a.pɛl mwa si ty a œ̃ pʁɔ.blɛm/', 'a-pel MWA | see tü a uhⁿ pro-BLEM', ['ordre', 'resultat-devant']),
  sent(1264, 'Si tu as un problème, appelle-moi.', 'If you have a problem, call me.', '/si ty a œ̃ pʁɔ.blɛm a.pɛl mwa/', 'see tü a uhⁿ pro-BLEM | a-pel MWA', ['ordre', 'si-devant']),
  sent(1265, 'Je viendrais avec toi si j’avais un jour de congé.', 'I would come with you if I had a day off.', '/ʒə vjɛ̃.dʁɛ a.vɛk twa si ʒa.vɛ œ̃ ʒuʁ də kɔ̃.ʒe/', 'zhuh vyehⁿ-DREH a-vek TWA | see zha-veh uhⁿ zhoor duh kohⁿ-ZHAY', ['ordre', 'irreel'], FCVDR),
  sent(1266, 'Si j’avais un jour de congé, je viendrais avec toi.', 'If I had a day off, I would come with you.', '/si ʒa.vɛ œ̃ ʒuʁ də kɔ̃.ʒe ʒə vjɛ̃.dʁɛ a.vɛk twa/', 'see zha-veh uhⁿ zhoor duh kohⁿ-ZHAY | zhuh vyehⁿ-DREH a-vek TWA', ['ordre', 'irreel']),
  rule(1267, 'Où va la virgule dans une phrase avec si ?', 'Si la moitié si vient en premier, une virgule les sépare. Dans l’autre sens, rien.', 'If the si half comes first, a comma separates them. The other way round, nothing.', '/si la mwa.tje si vjɛ̃.tɑ̃ pʁə.mje yn viʁ.ɡyl le se.paʁ dɑ̃ lotʁ sɑ̃s ʁjɛ̃/', 'see la mwa-tyay see vyehⁿ-tahⁿ pruh-MYAY | ün veer-gül lay say-PAR | dahⁿ lohtr sahⁿs RYEHⁿ', ['ordre', 'virgule']),
  sent(1268, 'Le spectacle sera annulé s’il pleut trop fort.', 'The show will be cancelled if it rains too hard.', '/lə spɛk.takl sə.ʁa a.ny.le sil plø tʁo fɔʁ/', 'luh spek-takl suh-ra a-nü-LAY | seel pluh troh FOR', ['ordre', 'resultat-devant']),
  sent(1269, 'S’il pleut trop fort, le spectacle sera annulé.', 'If it rains too hard, the show will be cancelled.', '/sil plø tʁo fɔʁ lə spɛk.takl sə.ʁa a.ny.le/', 'seel pluh troh FOR | luh spek-takl suh-ra a-nü-LAY', ['ordre', 'si-devant']),
  sent(1270, 'Tu recevras un message si ta commande part aujourd’hui.', 'You will get a message if your order goes out today.', '/ty ʁə.sə.vʁa œ̃ me.saʒ si ta kɔ.mɑ̃d paʁ o.ʒuʁ.dɥi/', 'tü ruh-suh-VRA uhⁿ may-SAZH | see ta ko-mahⁿd par oh-zhoor-DWEE', ['ordre', 'resultat-devant']),
  sent(1271, 'Nous resterions une nuit de plus si les billets étaient moins chers.', 'We would stay one more night if the tickets were cheaper.', '/nu ʁɛs.tə.ʁi.jɔ̃ yn nɥi də plys si le bi.jɛ e.tɛ mwɛ̃ ʃɛʁ/', 'noo res-tuh-ree-YOHⁿ ün nwee duh PLÜSS | see lay bee-yeh ay-teh mwehⁿ SHEHR', ['ordre', 'irreel']),
  sent(1272, 'Elle accepterait ce poste si le salaire était correct.', 'She would take this job if the salary were right.', '/ɛl ak.sɛp.tə.ʁɛ sə pɔst si lə sa.lɛʁ e.tɛ kɔ.ʁɛkt/', 'el ak-sep-tuh-REH suh POST | see luh sa-lehr ay-teh ko-REKT', ['ordre', 'irreel'], FCVDR),
  sent(1273, 'On se retrouve devant le théâtre si tu préfères.', 'We can meet in front of the theatre if you prefer.', '/ɔ̃ sə ʁə.tʁuv də.vɑ̃ lə te.atʁ si ty pʁe.fɛʁ/', 'ohⁿ suh ruh-troov duh-vahⁿ luh tay-ATR | see tü pray-FEHR', ['ordre', 'resultat-devant']),
  sent(1274, 'Je te rappelle ce soir si j’ai le temps.', 'I will call you back tonight if I have time.', '/ʒə tə ʁa.pɛl sə swaʁ si ʒe lə tɑ̃/', 'zhuh tuh ra-pel suh SWAR | see zhay luh TAHⁿ', ['ordre', 'resultat-devant']),
  rule(1275, 'L’ordre des deux moitiés change-t-il le sens ?', 'Non. Il change seulement ce que la phrase met en avant.', 'No. It only changes what the sentence puts first.', '/nɔ̃ il ʃɑ̃ʒ sœl.mɑ̃ sə kə la fʁaz mɛ.tɑ̃.na.vɑ̃/', 'nohⁿ | eel shahⁿzh seul-MAHⁿ | suh kuh la frahz meh-tahⁿ-na-VAHⁿ', ['ordre']),
];

/* ── ACT 6 · LA PAIRE IRRÉELLE : SI + IMPARFAIT, PUIS CONDITIONNEL ──────── */

export const ACT6_ROWS: Row[] = [
  sent(1276, 'Si j’habitais plus près, je viendrais à pied.', 'If I lived closer, I would come on foot.', '/si ʒa.bi.tɛ ply pʁɛ ʒə vjɛ̃.dʁɛ a pje/', 'see zha-bee-teh plü PREH | zhuh vyehⁿ-DREH a PYAY', ['irreel'], FCVDR),
  sent(1277, 'Si nous étions plus nombreux, nous louerions un minibus.', 'If there were more of us, we would hire a minibus.', '/si nu.ze.tjɔ̃ ply nɔ̃.bʁø nu lu.ʁi.jɔ̃ œ̃ mi.ni.bys/', 'see noo-zay-tyohⁿ plü nohⁿ-BRUH | noo loo-ree-YOHⁿ uhⁿ mee-nee-BÜSS', ['irreel']),
  sent(1278, 'Si tu parlais espagnol, tu trouverais du travail là-bas.', 'If you spoke Spanish, you would find work there.', '/si ty paʁ.lɛ ɛs.pa.ɲɔl ty tʁu.və.ʁɛ dy tʁa.vaj la ba/', 'see tü par-leh es-pa-NYOL | tü troo-vuh-REH dü tra-vye la-BA', ['irreel']),
  sent(1279, 'Si elle avait une voiture, elle irait travailler plus vite.', 'If she had a car, she would get to work faster.', '/si ɛl a.vɛ yn vwa.tyʁ ɛ.li.ʁɛ tʁa.va.je ply vit/', 'see el a-veh ün vwa-TÜR | eh-lee-REH tra-va-yay plü VEET', ['irreel']),
  sent(1280, 'Si vous connaissiez le quartier, vous comprendriez le prix.', 'If you knew the neighbourhood, you would understand the price.', '/si vu kɔ.nɛ.sje lə kaʁ.tje vu kɔ̃.pʁɑ̃.dʁi.je lə pʁi/', 'see voo ko-neh-syay luh kar-TYAY | voo kohⁿ-prahⁿ-dree-YAY luh PREE', ['irreel'], FCVDR),
  sent(1281, 'Si on vivait à la campagne, les enfants sortiraient plus.', 'If we lived in the country, the children would go out more.', '/si ɔ̃ vi.vɛ a la kɑ̃.paɲ le.zɑ̃.fɑ̃ sɔʁ.ti.ʁɛ ply/', 'see ohⁿ vee-veh a la kahⁿ-PANY | lay-zahⁿ-fahⁿ sor-tee-REH PLÜSS', ['irreel']),
  sent(1282, 'Si je savais conduire, je vous emmènerais tous les trois.', 'If I could drive, I would take all three of you.', '/si ʒə sa.vɛ kɔ̃.dɥiʁ ʒə vu.zɑ̃.mɛn.ʁɛ tu le tʁwa/', 'see zhuh sa-veh kohⁿ-DWEER | zhuh voo-zahⁿ-men-REH too lay TRWA', ['irreel']),
  sent(1283, 'Si mon frère venait, la maison serait complète.', 'If my brother came, the house would be complete.', '/si mɔ̃ fʁɛʁ və.nɛ la mɛ.zɔ̃ sə.ʁɛ kɔ̃.plɛt/', 'see mohⁿ frehr vuh-NEH | la meh-zohⁿ suh-reh kohⁿ-PLET', ['irreel']),
  sent(1284, 'Si ce logement était plus grand, nous le prendrions tout de suite.', 'If this flat were bigger, we would take it straight away.', '/si sə lɔʒ.mɑ̃ e.tɛ ply ɡʁɑ̃ nu lə pʁɑ̃.dʁi.jɔ̃ tu də sɥit/', 'see suh lozh-mahⁿ ay-teh plü GRAHⁿ | noo luh prahⁿ-dree-YOHⁿ too duh SWEET', ['irreel'], FCVDR),
  rule(1285, "Quelle paire pour une situation qui n'existe pas ?", 'Si + imparfait dans une moitié, conditionnel présent dans l’autre.', 'Si plus imparfait in one half, present conditional in the other.', '/si plys ɛ̃.paʁ.fɛ dɑ̃.zyn mwa.tje kɔ̃.di.sjɔ.nɛl pʁe.zɑ̃ dɑ̃ lotʁ/', 'see plüss ehⁿ-par-FEH dahⁿ ün mwa-TYAY | kohⁿ-dee-syo-nel pray-ZAHⁿ dahⁿ LOHTR', ['irreel', 'paire']),
  sent(1286, 'Si tu pouvais choisir, tu partirais où ?', 'If you could choose, where would you go?', '/si ty pu.vɛ ʃwa.ziʁ ty paʁ.ti.ʁɛ u/', 'see tü poo-veh shwa-ZEER | tü par-tee-REH OO', ['irreel']),
  sent(1287, 'Si l’entreprise embauchait, je postulerais tout de suite.', 'If the company were hiring, I would apply straight away.', '/si lɑ̃.tʁə.pʁiz ɑ̃.bo.ʃɛ ʒə pɔs.ty.lə.ʁɛ tu də sɥit/', 'see lahⁿ-truh-preez ahⁿ-boh-SHEH | zhuh pos-tü-luh-REH too duh SWEET', ['irreel']),
  sent(1288, 'Si nous n’avions pas de chien, nous voyagerions plus souvent.', 'If we did not have a dog, we would travel more often.', '/si nu na.vjɔ̃ pa də ʃjɛ̃ nu vwa.ja.ʒə.ʁi.jɔ̃ ply su.vɑ̃/', 'see noo na-vyohⁿ pa duh SHYEHⁿ | noo vwa-ya-zhuh-ree-YOHⁿ plü soo-VAHⁿ', ['irreel']),
  sent(1289, 'Si le loyer baissait, beaucoup de gens resteraient en ville.', 'If the rent came down, many people would stay in town.', '/si lə lwa.je bɛ.sɛ bo.ku də ʒɑ̃ ʁɛs.tə.ʁɛ ɑ̃ vil/', 'see luh lwa-yay beh-SEH | boh-koo duh zhahⁿ res-tuh-REH ahⁿ VEEL', ['irreel']),
  sent(1290, 'Si tu me le demandais, je le ferais sans hésiter.', 'If you asked me to, I would do it without hesitating.', '/si ty mə lə də.mɑ̃.dɛ ʒə lə fə.ʁɛ sɑ̃.ze.zi.te/', 'see tü muh luh duh-mahⁿ-DEH | zhuh luh fuh-REH sahⁿ-zay-zee-TAY', ['irreel']),
  sent(1291, 'Si j’étais toi, je lirais le contrat deux fois.', 'If I were you, I would read the contract twice.', '/si ʒe.tɛ twa ʒə li.ʁɛ lə kɔ̃.tʁa dø fwa/', 'see zhay-teh TWA | zhuh lee-REH luh kohⁿ-tra duh FWA', ['irreel', 'conseil']),
];

/* ── ACT 7 · SI J'AI LE TEMPS, SI J'AVAIS LE TEMPS ──────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1292, 'Si j’ai le temps, je passerai te voir.', 'If I have time, I will drop in on you.', '/si ʒe lə tɑ̃ ʒə pa.sə.ʁe tə vwaʁ/', 'see zhay luh TAHⁿ | zhuh pa-suh-REH tuh VWAR', ['choix', 'reel'], FCVDR),
  sent(1293, 'Si j’avais le temps, je passerais te voir.', 'If I had time, I would drop in on you.', '/si ʒa.vɛ lə tɑ̃ ʒə pa.sə.ʁɛ tə vwaʁ/', 'see zha-veh luh TAHⁿ | zhuh pa-suh-REH tuh VWAR', ['choix', 'irreel'], FCVDR),
  sent(1294, 'Si nous gagnons ce marché, nous ouvrirons une deuxième boutique.', 'If we win this contract, we will open a second shop.', '/si nu ɡa.ɲɔ̃ sə maʁ.ʃe nu.zu.vʁi.ʁɔ̃ yn dø.zjɛm bu.tik/', 'see noo ga-nyohⁿ suh mar-SHAY | noo-zoo-vree-ROHⁿ ün deu-ZYEM boo-TEEK', ['choix', 'reel']),
  sent(1295, 'Si nous gagnions ce marché, nous ouvririons une deuxième boutique.', 'If we won this contract, we would open a second shop.', '/si nu ɡa.ɲi.jɔ̃ sə maʁ.ʃe nu.zu.vʁi.ʁi.jɔ̃ yn dø.zjɛm bu.tik/', 'see noo ga-nyee-YOHⁿ suh mar-SHAY | noo-zoo-vree-ree-YOHⁿ ün deu-ZYEM boo-TEEK', ['choix', 'irreel']),
  sent(1296, 'Si tu viens en train, je t’attendrai à la gare.', 'If you come by train, I will meet you at the station.', '/si ty vjɛ̃.zɑ̃ tʁɛ̃ ʒə ta.tɑ̃.dʁe a la ɡaʁ/', 'see tü vyehⁿ-zahⁿ TREHⁿ | zhuh ta-tahⁿ-DREH a la GAR', ['choix', 'reel']),
  sent(1297, 'Si tu venais en train, je t’attendrais à la gare.', 'If you came by train, I would meet you at the station.', '/si ty və.nɛ.zɑ̃ tʁɛ̃ ʒə ta.tɑ̃.dʁɛ a la ɡaʁ/', 'see tü vuh-neh-zahⁿ TREHⁿ | zhuh ta-tahⁿ-DREH a la GAR', ['choix', 'irreel']),
  sent(1298, 'Si elle accepte, tout sera réglé avant vendredi.', 'If she agrees, everything will be settled before Friday.', '/si ɛl ak.sɛpt tu sə.ʁa ʁe.ɡle a.vɑ̃ vɑ̃.dʁə.di/', 'see el ak-SEPT | too suh-ra ray-GLAY a-vahⁿ vahⁿ-druh-DEE', ['choix', 'reel']),
  sent(1299, 'Si elle acceptait, tout serait réglé avant vendredi.', 'If she agreed, everything would be settled before Friday.', '/si ɛl ak.sɛp.tɛ tu sə.ʁɛ ʁe.ɡle a.vɑ̃ vɑ̃.dʁə.di/', 'see el ak-sep-TEH | too suh-reh ray-GLAY a-vahⁿ vahⁿ-druh-DEE', ['choix', 'irreel']),
  rule(1300, 'Ça peut arriver ou non : quelle paire ?', 'La paire réelle : si + présent, puis futur.', 'The real pair: si plus present, then future.', '/la pɛʁ ʁe.ɛl si pʁe.zɑ̃ pɥi fy.tyʁ/', 'la pehr ray-EL | see pray-ZAHⁿ | pwee fü-TÜR', ['choix', 'reel']),
  rule(1301, "C'est déjà impossible : quelle paire ?", 'La paire irréelle : si + imparfait, puis conditionnel.', 'The unreal pair: si plus imparfait, then conditional.', '/la pɛʁ i.ʁe.ɛl si ɛ̃.paʁ.fɛ pɥi kɔ̃.di.sjɔ.nɛl/', 'la pehr ee-ray-EL | see ehⁿ-par-FEH | pwee kohⁿ-dee-syo-NEL', ['choix', 'irreel']),
  sent(1302, 'Si vous avez besoin d’aide, dites-le-moi.', 'If you need help, tell me.', '/si vu.za.ve bə.zwɛ̃ dɛd dit lə mwa/', 'see voo-za-vay buh-zwehⁿ DED | deet luh MWA', ['choix', 'reel']),
  sent(1303, 'Si vous aviez besoin d’aide, je pourrais rester une heure de plus.', 'If you needed help, I could stay an hour longer.', '/si vu.za.vje bə.zwɛ̃ dɛd ʒə pu.ʁɛ ʁɛs.te y.nœʁ də plys/', 'see voo-za-vyay buh-zwehⁿ DED | zhuh poo-REH res-tay ü-neur duh PLÜSS', ['choix', 'irreel']),
  sent(1304, 'Si le budget le permet, nous changerons les fenêtres cette année.', 'If the budget allows, we will change the windows this year.', '/si lə byd.ʒɛ lə pɛʁ.mɛ nu ʃɑ̃.ʒə.ʁɔ̃ le fə.nɛtʁ sɛt a.ne/', 'see luh büd-zheh luh pehr-MEH | noo shahⁿ-zhuh-ROHⁿ lay fuh-NETR set a-NAY', ['choix', 'reel'], FCVDR),
  sent(1305, 'Si le budget le permettait, nous changerions les fenêtres cette année.', 'If the budget allowed, we would change the windows this year.', '/si lə byd.ʒɛ lə pɛʁ.mɛ.tɛ nu ʃɑ̃.ʒə.ʁi.jɔ̃ le fə.nɛtʁ sɛt a.ne/', 'see luh büd-zheh luh pehr-meh-TEH | noo shahⁿ-zhuh-ree-YOHⁿ lay fuh-NETR set a-NAY', ['choix', 'irreel']),
  sent(1306, 'Si tu me prêtes ta perceuse, je finirai l’étagère ce soir.', 'If you lend me your drill, I will finish the shelf tonight.', '/si ty mə pʁɛt ta pɛʁ.søz ʒə fi.ni.ʁe le.ta.ʒɛʁ sə swaʁ/', 'see tü muh pret ta pehr-SEUZ | zhuh fee-nee-REH lay-ta-zhehr suh SWAR', ['choix', 'reel']),
  sent(1307, 'Si tu me prêtais ta perceuse, je finirais l’étagère ce soir.', 'If you lent me your drill, I would finish the shelf tonight.', '/si ty mə pʁɛ.tɛ ta pɛʁ.søz ʒə fi.ni.ʁɛ le.ta.ʒɛʁ sə swaʁ/', 'see tü muh preh-TEH ta pehr-SEUZ | zhuh fee-nee-REH lay-ta-zhehr suh SWAR', ['choix', 'irreel']),
];

/* ── ACT 8 · LE SI QUI VEUT DIRE « WHETHER » ────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1308, 'Je me demande si le car est déjà parti.', 'I wonder whether the coach has already left.', '/ʒə mə də.mɑ̃d si lə kaʁ ɛ de.ʒa paʁ.ti/', 'zhuh muh duh-MAHⁿD | see luh kar eh day-zha par-TEE', ['question'], FCVDR),
  sent(1309, 'Je me demande si le car sera complet.', 'I wonder whether the coach will be full.', '/ʒə mə də.mɑ̃d si lə kaʁ sə.ʁa kɔ̃.plɛ/', 'zhuh muh duh-MAHⁿD | see luh kar suh-ra kohⁿ-PLEH', ['question', 'futur-permis'], FCVDR),
  sent(1310, 'Je ne sais pas si elle viendra demain.', 'I do not know whether she will come tomorrow.', '/ʒə nə sɛ pa si ɛl vjɛ̃.dʁa də.mɛ̃/', 'zhuh nuh seh PA | see el vyehⁿ-DRA duh-MEHⁿ', ['question', 'futur-permis']),
  sent(1311, 'Dis-moi si tu préfères le matin ou le soir.', 'Tell me whether you prefer the morning or the evening.', '/di mwa si ty pʁe.fɛʁ lə ma.tɛ̃ u lə swaʁ/', 'dee MWA | see tü pray-fehr luh ma-TEHⁿ oo luh SWAR', ['question']),
  sent(1312, 'Elle voudrait savoir si la salle est libre jeudi.', 'She would like to know whether the room is free on Thursday.', '/ɛl vu.dʁɛ sa.vwaʁ si la sal ɛ libʁ ʒø.di/', 'el voo-dreh sa-VWAR | see la sal eh leebr zheu-DEE', ['question']),
  sent(1313, 'Nous verrons si le projet avance.', 'We will see whether the project moves forward.', '/nu vɛ.ʁɔ̃ si lə pʁɔ.ʒɛ a.vɑ̃s/', 'noo veh-ROHⁿ | see luh pro-zheh a-VAHⁿS', ['question']),
  rule(1314, "« Je me demande si... » : est-ce une condition ?", 'Non. Ici si pose une question, et le futur est permis derrière lui.', 'No. Here si asks a question, and a future is allowed after it.', '/nɔ̃ i.si si poz yn kɛs.tjɔ̃ e lə fy.tyʁ ɛ pɛʁ.mi dɛ.ʁjɛʁ lɥi/', 'nohⁿ | ee-see see pohz ün kes-TYOHⁿ | ay luh fü-tür eh pehr-mee deh-ryehr LWEE', ['question', 'frontiere']),
  sent(1315, 'Il m’a demandé si j’avais déjà travaillé en équipe.', 'He asked me whether I had ever worked in a team.', '/il ma də.mɑ̃.de si ʒa.vɛ de.ʒa tʁa.va.je ɑ̃.ne.kip/', 'eel ma duh-mahⁿ-DAY | see zha-veh day-zha tra-va-yay ahⁿ-nay-KEEP', ['question']),
  sent(1316, 'Personne ne sait si la grève continuera lundi.', 'Nobody knows whether the strike will go on into Monday.', '/pɛʁ.sɔn nə sɛ si la ɡʁɛv kɔ̃.ti.ny.ʁa lœ̃.di/', 'pehr-son nuh SEH | see la grev kohⁿ-tee-nü-RA luhⁿ-DEE', ['question', 'futur-permis']),
  sent(1317, 'Je vérifierai si le paiement est bien passé.', 'I will check whether the payment went through.', '/ʒə ve.ʁi.fje.ʁe si lə pɛ.mɑ̃ ɛ bjɛ̃ pa.se/', 'zhuh vay-ree-fyuh-REH | see luh peh-mahⁿ eh byehⁿ pa-SAY', ['question']),
  sent(1318, 'Demande-lui si le bureau ferme à dix-sept heures.', 'Ask him whether the office closes at five.', '/də.mɑ̃d lɥi si lə by.ʁo fɛʁm a di.sɛ.tœʁ/', 'duh-mahⁿd LWEE | see luh bü-roh fehrm a dee-set-EUR', ['question'], FCVDR),
  sent(1319, 'On ne sait jamais si le train partira à l’heure.', 'You never know whether the train will leave on time.', '/ɔ̃ nə sɛ ʒa.mɛ si lə tʁɛ̃ paʁ.ti.ʁa a lœʁ/', 'ohⁿ nuh seh zha-MEH | see luh trehⁿ par-tee-RA a LEUR', ['question', 'futur-permis']),
  rule(1320, 'Comment reconnaître le si qui veut dire whether ?', 'Il suit un verbe de question : demander, savoir, vérifier, dire.', 'It follows a verb of asking: demander, savoir, vérifier, dire.', '/il sɥi œ̃ vɛʁb də kɛs.tjɔ̃ də.mɑ̃.de sa.vwaʁ ve.ʁi.fje diʁ/', 'eel swee uhⁿ vehrb duh kes-TYOHⁿ | duh-mahⁿ-DAY | sa-VWAR | vay-ree-FYAY | DEER', ['question']),
  sent(1321, 'Elle hésite encore, mais elle dira si elle participe.', 'She is still hesitating, but she will say whether she is taking part.', '/ɛl e.zit ɑ̃.kɔʁ mɛ ɛl di.ʁa si ɛl paʁ.ti.sip/', 'el ay-zeet ahⁿ-KOR | meh el dee-RA see el par-tee-SEEP', ['question']),
];

/* ── ACT 9 · SI ON ALLAIT AU CINÉMA ─────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1322, 'Si on allait au cinéma ce soir ?', 'How about going to the cinema tonight?', '/si ɔ̃.na.lɛ o si.ne.ma sə swaʁ/', 'see ohⁿ-na-leh oh see-nay-MA suh SWAR', ['suggestion'], FCVDR),
  sent(1323, 'Si on prenait un café avant la réunion ?', 'How about a coffee before the meeting?', '/si ɔ̃ pʁə.nɛ œ̃ ka.fe a.vɑ̃ la ʁe.y.njɔ̃/', 'see ohⁿ pruh-neh uhⁿ ka-FAY a-vahⁿ la ray-ü-NYOHⁿ', ['suggestion']),
  sent(1324, 'Si on se retrouvait devant la gare ?', 'How about meeting in front of the station?', '/si ɔ̃ sə ʁə.tʁu.vɛ də.vɑ̃ la ɡaʁ/', 'see ohⁿ suh ruh-troo-VEH duh-vahⁿ la GAR', ['suggestion']),
  sent(1325, 'Et si on changeait de date ?', 'What if we changed the date?', '/e si ɔ̃ ʃɑ̃.ʒɛ də dat/', 'ay see ohⁿ shahⁿ-ZHEH duh DAT', ['suggestion']),
  rule(1326, 'Comment propose-t-on quelque chose avec si ?', 'Si + on + imparfait, et rien derrière : la moitié résultat disparaît.', 'Si plus on plus imparfait, with nothing after it: the result half simply goes.', '/si ɔ̃ ɛ̃.paʁ.fɛ e ʁjɛ̃ dɛ.ʁjɛʁ la mwa.tje ʁe.zyl.ta dis.pa.ʁɛ/', 'see ohⁿ ehⁿ-par-FEH | ay ryehⁿ deh-RYEHR | la mwa-tyay ray-zül-ta dees-pa-REH', ['suggestion']),
  chunk(1327, 'si vous voulez bien', 'if you would be so kind', '/si vu vu.le bjɛ̃/', 'see voo voo-lay BYEHⁿ', ['politesse']),
  sent(1328, 'Passez me voir demain, si vous voulez bien.', 'Come and see me tomorrow, if you would be so kind.', '/pa.se mə vwaʁ də.mɛ̃ si vu vu.le bjɛ̃/', 'pa-say muh vwar duh-MEHⁿ | see voo voo-lay BYEHⁿ', ['politesse']),
  sent(1329, 'Nous commencerons à neuf heures, si tout le monde est d’accord.', 'We will start at nine, if everyone agrees.', '/nu kɔ.mɑ̃.sə.ʁɔ̃ a nœ.vœʁ si tu lə mɔ̃d ɛ da.kɔʁ/', 'noo ko-mahⁿ-suh-ROHⁿ a neu-VEUR | see too luh mohⁿd eh da-KOR', ['politesse'], FCVDR),
  chunk(1330, 'si possible', 'if possible', '/si pɔ.sibl/', 'see po-SEEBL', ['court']),
  sent(1331, 'Envoyez le dossier avant vendredi, si possible.', 'Send the file before Friday, if possible.', '/ɑ̃.vwa.je lə do.sje a.vɑ̃ vɑ̃.dʁə.di si pɔ.sibl/', 'ahⁿ-vwa-yay luh do-syay a-vahⁿ vahⁿ-druh-DEE | see po-SEEBL', ['court']),
  chunk(1332, 'sinon', 'otherwise', '/si.nɔ̃/', 'see-NOHⁿ', ['court']),
  sent(1333, 'Réponds avant ce soir, sinon la place sera prise.', 'Answer before tonight, otherwise the place will be taken.', '/ʁe.pɔ̃ a.vɑ̃ sə swaʁ si.nɔ̃ la plas sə.ʁa pʁiz/', 'ray-pohⁿ a-vahⁿ suh SWAR | see-nohⁿ la plas suh-ra PREEZ', ['court'], FCVDR),
  chunk(1334, 'si oui', 'if so', '/si wi/', 'see WEE', ['court']),
  sent(1335, 'Est-ce que tu viens samedi ? Si oui, je réserve deux places.', 'Are you coming on Saturday? If so, I will book two seats.', '/ɛs kə ty vjɛ̃ sam.di si wi ʒə ʁe.zɛʁv dø plas/', 'es-kuh tü vyehⁿ sam-DEE | see wee | zhuh ray-zehrv duh PLASS', ['court']),
  sent(1336, 'Si jamais tu passes par Nantes, préviens-moi.', 'If you ever come through Nantes, let me know.', '/si ʒa.mɛ ty pas paʁ nɑ̃t pʁe.vjɛ̃ mwa/', 'see zha-meh tü pass par NAHⁿT | pray-vyehⁿ MWA', ['court']),
];

/* ── ACT 10 · QUAND OU SI ───────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1337, 'Quand j’aurai mon diplôme, je chercherai un poste à l’étranger.', 'When I get my diploma, I will look for a job abroad.', '/kɑ̃ ʒo.ʁe mɔ̃ di.plom ʒə ʃɛʁ.ʃə.ʁe œ̃ pɔst a le.tʁɑ̃.ʒe/', 'kahⁿ zhoh-REH mohⁿ dee-PLOHM | zhuh shehr-shuh-REH uhⁿ post a lay-trahⁿ-ZHAY', ['quand', 'certain'], FCVDR),
  sent(1338, 'Si j’ai mon diplôme, je chercherai un poste à l’étranger.', 'If I get my diploma, I will look for a job abroad.', '/si ʒe mɔ̃ di.plom ʒə ʃɛʁ.ʃə.ʁe œ̃ pɔst a le.tʁɑ̃.ʒe/', 'see zhay mohⁿ dee-PLOHM | zhuh shehr-shuh-REH uhⁿ post a lay-trahⁿ-ZHAY', ['quand', 'possible'], FCVDR),
  sent(1339, 'Quand le train arrivera, nous prendrons un taxi.', 'When the train gets in, we will take a taxi.', '/kɑ̃ lə tʁɛ̃ a.ʁi.və.ʁa nu pʁɑ̃.dʁɔ̃.zœ̃ tak.si/', 'kahⁿ luh trehⁿ a-ree-vuh-RA | noo prahⁿ-drohⁿ-zuhⁿ tak-SEE', ['quand', 'certain']),
  sent(1340, 'Si le train arrive à l’heure, nous prendrons un taxi.', 'If the train gets in on time, we will take a taxi.', '/si lə tʁɛ̃ a.ʁiv a lœʁ nu pʁɑ̃.dʁɔ̃.zœ̃ tak.si/', 'see luh trehⁿ a-reev a LEUR | noo prahⁿ-drohⁿ-zuhⁿ tak-SEE', ['quand', 'possible']),
  rule(1341, 'Quand ou si : comment choisir ?', 'Quand, c’est sûr et daté. Si, c’est possible et pas garanti.', 'Quand is certain and dated. Si is possible and not guaranteed.', '/kɑ̃ sɛ syʁ e da.te si sɛ pɔ.sibl e pa ɡa.ʁɑ̃.ti/', 'kahⁿ seh sür ay da-TAY | see seh po-seebl ay pa ga-rahⁿ-TEE', ['quand']),
  sent(1342, 'Quand il pleuvra, la route sera glissante.', 'When it rains, the road will be slippery.', '/kɑ̃.til plø.vʁa la ʁut sə.ʁa ɡli.sɑ̃t/', 'kahⁿ-teel pluh-VRA | la root suh-ra glee-SAHⁿT', ['quand', 'certain']),
  sent(1343, 'S’il pleut, la route sera glissante.', 'If it rains, the road will be slippery.', '/sil plø la ʁut sə.ʁa ɡli.sɑ̃t/', 'seel PLUH | la root suh-ra glee-SAHⁿT', ['quand', 'possible']),
  rule(1344, 'Pourquoi « quand je serai » et jamais « si je serai » ?', 'Quand prend le futur des deux côtés. Si ne le prend jamais.', 'Quand takes the future on both sides. Si never takes it.', '/kɑ̃ pʁɑ̃ lə fy.tyʁ de dø ko.te si nə lə pʁɑ̃ ʒa.mɛ/', 'kahⁿ prahⁿ luh fü-tür day duh koh-TAY | see nuh luh prahⁿ zha-MEH', ['quand', 'jamais']),
  sent(1345, 'Quand tu seras prêt, fais-moi signe.', 'When you are ready, give me a sign.', '/kɑ̃ ty sə.ʁa pʁɛ fɛ mwa siɲ/', 'kahⁿ tü suh-ra PREH | feh mwa SEENY', ['quand', 'certain'], FCVDR),
  sent(1346, 'Si tu es prêt avant midi, fais-moi signe.', 'If you are ready before noon, give me a sign.', '/si ty ɛ pʁɛ a.vɑ̃ mi.di fɛ mwa siɲ/', 'see tü eh preh a-vahⁿ mee-DEE | feh mwa SEENY', ['quand', 'possible']),
  sent(1347, 'Même si le temps est mauvais, la course aura lieu.', 'Even if the weather is bad, the race will go ahead.', '/mɛm si lə tɑ̃ ɛ mo.vɛ la kuʁs o.ʁa ljø/', 'mem see luh tahⁿ eh moh-VEH | la koorss oh-ra LYUH', ['meme-si']),
  rule(1348, '« Même si », est-ce une condition ?', 'Non. Même si accepte la situation et dit que rien ne change.', 'No. Même si accepts the situation and says nothing changes.', '/nɔ̃ mɛm si ak.sɛpt la si.tɥa.sjɔ̃ e di kə ʁjɛ̃ nə ʃɑ̃ʒ/', 'nohⁿ | mem see ak-sept la see-twa-SYOHⁿ | ay dee kuh ryehⁿ nuh SHAHⁿZH', ['meme-si', 'frontiere']),
  sent(1349, 'Quand nous serons installés, nous vous inviterons.', 'When we are settled in, we will invite you.', '/kɑ̃ nu sə.ʁɔ̃.zɛ̃s.ta.le nu vu.zɛ̃.vi.tə.ʁɔ̃/', 'kahⁿ noo suh-rohⁿ-zehⁿs-ta-LAY | noo voo-zehⁿ-vee-tuh-ROHⁿ', ['quand', 'certain']),
  sent(1350, 'Si nous trouvons un logement, nous vous inviterons.', 'If we find somewhere to live, we will invite you.', '/si nu tʁu.vɔ̃.zœ̃ lɔʒ.mɑ̃ nu vu.zɛ̃.vi.tə.ʁɔ̃/', 'see noo troo-vohⁿ-zuhⁿ lozh-MAHⁿ | noo voo-zehⁿ-vee-tuh-ROHⁿ', ['quand', 'possible']),
];

/* ── ACT 11 · CE QUI NE S'EST JAMAIS PASSÉ (RECONNAISSANCE) ─────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1351, 'Si nous étions partis plus tôt, nous aurions évité les bouchons.', 'If we had left earlier, we would have avoided the traffic jams.', '/si nu.ze.tjɔ̃ paʁ.ti ply to nu.zo.ʁjɔ̃.ze.vi.te le bu.ʃɔ̃/', 'see noo-zay-tyohⁿ par-tee plü TOH | noo-zoh-ryohⁿ-zay-vee-tay lay boo-SHOHⁿ', ['passe', 'reconnaitre'], FCR),
  sent(1352, 'Si j’avais su, j’aurais pris un autre train.', 'If I had known, I would have taken another train.', '/si ʒa.vɛ sy ʒo.ʁɛ pʁi œ̃.no.tʁə tʁɛ̃/', 'see zha-veh SÜ | zhoh-reh pree uhⁿ-noh-truh TREHⁿ', ['passe', 'reconnaitre'], FCR),
  sent(1353, 'Si tu m’avais prévenu, je serais venu t’aider.', 'If you had warned me, I would have come to help you.', '/si ty ma.vɛ pʁe.və.ny ʒə sə.ʁɛ və.ny tɛ.de/', 'see tü ma-veh pray-vuh-NÜ | zhuh suh-reh vuh-nü teh-DAY', ['passe', 'reconnaitre'], FCR),
  sent(1354, 'Si le conducteur avait freiné plus tôt, rien ne serait arrivé.', 'If the driver had braked earlier, nothing would have happened.', '/si lə kɔ̃.dyk.tœʁ a.vɛ fʁɛ.ne ply to ʁjɛ̃ nə sə.ʁɛ.ta.ʁi.ve/', 'see luh kohⁿ-dük-teur a-veh freh-nay plü TOH | ryehⁿ nuh suh-reh-ta-ree-VAY', ['passe', 'reconnaitre'], FCR),
  rule(1355, 'Que fait « si + plus-que-parfait » ?', 'Il parle d’un passé qui n’a pas eu lieu. Tu le reconnais, tu ne le construis pas encore.', 'It talks about a past that never happened. You recognise it; you do not build it yet.', '/il paʁl dœ̃ pa.se ki na pa y ljø ty lə ʁə.kɔ.nɛ ty nə lə kɔ̃s.tʁɥi pa ɑ̃.kɔʁ/', 'eel parl duhⁿ pa-say kee na pa ü LYUH | tü luh ruh-ko-NEH | tü nuh luh kohⁿs-trwee pa ahⁿ-KOR', ['passe', 'frontiere']),
  sent(1356, 'Si vous aviez réservé en janvier, vous auriez payé moitié prix.', 'If you had booked in January, you would have paid half price.', '/si vu.za.vje ʁe.zɛʁ.ve ɑ̃ ʒɑ̃.vje vu.zo.ʁje pɛ.je mwa.tje pʁi/', 'see voo-za-vyay ray-zehr-vay ahⁿ zhahⁿ-VYAY | voo-zoh-ryay peh-yay mwa-tyay PREE', ['passe', 'reconnaitre'], FCR),
  sent(1357, 'Si j’avais écouté ma sœur, je n’aurais pas signé ce contrat.', 'If I had listened to my sister, I would not have signed this contract.', '/si ʒa.vɛ.ze.ku.te ma sœʁ ʒə no.ʁɛ pa si.ɲe sə kɔ̃.tʁa/', 'see zha-veh-zay-koo-tay ma SEUR | zhuh noh-reh pa see-nyay suh kohⁿ-TRA', ['passe', 'reconnaitre'], FCR),
  sent(1358, 'Si nous avions eu plus de temps, nous aurions visité le château.', 'If we had had more time, we would have visited the castle.', '/si nu.za.vjɔ̃.zy ply də tɑ̃ nu.zo.ʁjɔ̃ vi.zi.te lə ʃa.to/', 'see noo-za-vyohⁿ-zü plü duh TAHⁿ | noo-zoh-ryohⁿ vee-zee-tay luh sha-TOH', ['passe', 'reconnaitre'], FCR),
  rule(1359, 'Combien de paires existe-t-il en tout ?', 'Trois : présent et futur, imparfait et conditionnel, plus-que-parfait et conditionnel passé.', 'Three: present and future, imparfait and conditional, pluperfect and past conditional.', '/tʁwa pʁe.zɑ̃ e fy.tyʁ ɛ̃.paʁ.fɛ e kɔ̃.di.sjɔ.nɛl plys kə paʁ.fɛ e kɔ̃.di.sjɔ.nɛl pa.se/', 'trwa | pray-zahⁿ ay fü-TÜR | ehⁿ-par-feh ay kohⁿ-dee-syo-NEL | plüss-kuh-par-feh ay kohⁿ-dee-syo-nel pa-SAY', ['paire', 'passe']),
  sent(1360, 'Si tu étais venu, tu aurais rencontré toute l’équipe.', 'If you had come, you would have met the whole team.', '/si ty e.tɛ və.ny ty o.ʁɛ ʁɑ̃.kɔ̃.tʁe tut le.kip/', 'see tü ay-teh vuh-NÜ | tü oh-reh rahⁿ-kohⁿ-tray toot lay-KEEP', ['passe', 'reconnaitre'], FCR),
  sent(1361, 'Si le magasin avait ouvert plus tôt, j’aurais eu le temps.', 'If the shop had opened earlier, I would have had time.', '/si lə ma.ɡa.zɛ̃ a.vɛ u.vɛʁ ply to ʒo.ʁɛ.zy lə tɑ̃/', 'see luh ma-ga-zehⁿ a-veh oo-vehr plü TOH | zhoh-reh-zü luh TAHⁿ', ['passe', 'reconnaitre'], FCR),
  sent(1362, 'Si j’avais le choix, je recommencerais tout.', 'If I had the choice, I would start it all again.', '/si ʒa.vɛ lə ʃwa ʒə ʁə.kɔ.mɑ̃.sə.ʁɛ tu/', 'see zha-veh luh SHWA | zhuh ruh-ko-mahⁿ-suh-REH TOO', ['irreel', 'contraste']),
  sent(1363, 'Si j’avais eu le choix, j’aurais tout recommencé.', 'If I had had the choice, I would have started it all again.', '/si ʒa.vɛ.zy lə ʃwa ʒo.ʁɛ tu ʁə.kɔ.mɑ̃.se/', 'see zha-veh-zü luh SHWA | zhoh-reh too ruh-ko-mahⁿ-SAY', ['passe', 'contraste'], FCR),
];

/* ── ACT 12 · ÉCRIRE AVEC SI ────────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1364, 'Si la salle est disponible, nous confirmerons la date lundi.', 'If the room is available, we will confirm the date on Monday.', '/si la sal ɛ dis.pɔ.nibl nu kɔ̃.fiʁ.mə.ʁɔ̃ la dat lœ̃.di/', 'see la sal eh dees-po-NEEBL | noo kohⁿ-feer-muh-ROHⁿ la dat luhⁿ-DEE', ['ecrire', 'reel'], FCVDR),
  sent(1365, 'Si elle ne l’est pas, nous chercherons une autre solution.', 'If it is not, we will look for another solution.', '/si ɛl nə lɛ pa nu ʃɛʁ.ʃə.ʁɔ̃.zy.no.tʁə sɔ.ly.sjɔ̃/', 'see el nuh leh PA | noo shehr-shuh-rohⁿ-zü-noh-truh so-lü-SYOHⁿ', ['ecrire', 'reel']),
  sent(1366, 'Si vous pouviez répondre avant vendredi, cela nous aiderait beaucoup.', 'If you could answer before Friday, that would help us a lot.', '/si vu pu.vje ʁe.pɔ̃dʁ a.vɑ̃ vɑ̃.dʁə.di sə.la nu.zɛ.də.ʁɛ bo.ku/', 'see voo poo-vyay ray-POHⁿDR a-vahⁿ vahⁿ-druh-DEE | suh-la noo-zeh-duh-REH boh-KOO', ['ecrire', 'irreel']),
  sent(1367, 'Si le nombre de participants augmente, il faudra un deuxième car.', 'If the number of participants goes up, a second coach will be needed.', '/si lə nɔ̃bʁ də paʁ.ti.si.pɑ̃ oɡ.mɑ̃t il fo.dʁa œ̃ dø.zjɛm kaʁ/', 'see luh nohⁿbr duh par-tee-see-pahⁿ og-MAHⁿT | eel foh-DRA uhⁿ deu-ZYEM KAR', ['ecrire', 'reel']),
  sent(1368, 'Si on partait le vendredi soir, tout le monde serait plus reposé.', 'If we left on Friday evening, everyone would be better rested.', '/si ɔ̃ paʁ.tɛ lə vɑ̃.dʁə.di swaʁ tu lə mɔ̃d sə.ʁɛ ply ʁə.po.ze/', 'see ohⁿ par-teh luh vahⁿ-druh-dee SWAR | too luh mohⁿd suh-reh plü ruh-poh-ZAY', ['ecrire', 'irreel']),
  sent(1369, 'Je vous écris pour savoir si le gymnase est libre ce week-end.', 'I am writing to find out whether the gym is free this weekend.', '/ʒə vu.ze.kʁi puʁ sa.vwaʁ si lə ʒim.naz ɛ libʁ sə wi.kɛnd/', 'zhuh voo-zay-KREE poor sa-VWAR | see luh zheem-naz eh leebr suh week-END', ['ecrire', 'question'], FCVDR),
  sent(1370, 'Sinon, nous garderions la date du mois prochain.', 'Otherwise, we would keep next month as the date.', '/si.nɔ̃ nu ɡaʁ.də.ʁi.jɔ̃ la dat dy mwa pʁɔ.ʃɛ̃/', 'see-NOHⁿ | noo gar-duh-ree-YOHⁿ la dat dü mwa pro-SHEHⁿ', ['ecrire', 'court']),
  sent(1371, 'Si possible, envoyez-nous une réponse par courriel.', 'If possible, send us an answer by email.', '/si pɔ.sibl ɑ̃.vwa.je nu.zyn ʁe.pɔ̃s paʁ ku.ʁjɛl/', 'see po-SEEBL | ahⁿ-vwa-yay noo-zün ray-POHⁿS par koo-RYEL', ['ecrire', 'court']),
  sent(1372, 'Si oui, je préparerai la liste des inscrits.', 'If so, I will prepare the list of names.', '/si wi ʒə pʁe.pa.ʁə.ʁe la list de.zɛ̃s.kʁi/', 'see WEE | zhuh pray-pa-ruh-REH la leest day-zehⁿs-KREE', ['ecrire', 'court']),
  sent(1373, 'Si vous voulez bien, nous passerons signer la convention mardi.', 'If you would be so kind, we will come and sign the agreement on Tuesday.', '/si vu vu.le bjɛ̃ nu pa.sə.ʁɔ̃ si.ɲe la kɔ̃.vɑ̃.sjɔ̃ maʁ.di/', 'see voo voo-lay BYEHⁿ | noo pa-suh-rohⁿ see-nyay la kohⁿ-vahⁿ-syohⁿ mar-DEE', ['ecrire', 'politesse']),
  sent(1374, 'Quand la convention sera signée, nous préviendrons les familles.', 'When the agreement is signed, we will let the families know.', '/kɑ̃ la kɔ̃.vɑ̃.sjɔ̃ sə.ʁa si.ɲe nu pʁe.vjɛ̃.dʁɔ̃ le fa.mij/', 'kahⁿ la kohⁿ-vahⁿ-syohⁿ suh-ra see-NYAY | noo pray-vyehⁿ-DROHⁿ lay fa-MEEY', ['ecrire', 'quand'], FCVDR),
  sent(1375, 'Si le budget ne suffisait pas, nous demanderions une subvention.', 'If the budget were not enough, we would ask for a grant.', '/si lə byd.ʒɛ nə sy.fi.zɛ pa nu də.mɑ̃.də.ʁi.jɔ̃ yn syb.vɑ̃.sjɔ̃/', 'see luh büd-zheh nuh sü-fee-zeh PA | noo duh-mahⁿ-duh-ree-YOHⁿ ün süb-vahⁿ-SYOHⁿ', ['ecrire', 'irreel']),
  sent(1376, 'Nous vous remercions d’avance si vous pouvez nous répondre vite.', 'We thank you in advance if you can answer us quickly.', '/nu vu ʁə.mɛʁ.sjɔ̃ da.vɑ̃s si vu pu.ve nu ʁe.pɔ̃dʁ vit/', 'noo voo ruh-mehr-syohⁿ da-VAHⁿS | see voo poo-vay noo ray-pohⁿdr VEET', ['ecrire', 'politesse']),
  rule(1377, 'Avant d’envoyer : que faut-il relire ?', 'Chaque si : aucun -rai, aucun -rais derrière lui.', 'Every si: no -rai and no -rais behind it.', '/ʃak si o.kœ̃ ʁe o.kœ̃ ʁɛ dɛ.ʁjɛʁ lɥi/', 'shak SEE | oh-kuhⁿ REH | oh-kuhⁿ reh deh-ryehr LWEE', ['ecrire', 'jamais']),
  sent(1378, 'Si tout est réglé avant le quinze, nous lancerons les inscriptions.', 'If everything is settled before the fifteenth, we will open registration.', '/si tu.tɛ ʁe.ɡle a.vɑ̃ lə kɛ̃z nu lɑ̃.sə.ʁɔ̃ le.zɛ̃s.kʁip.sjɔ̃/', 'see too-teh ray-glay a-vahⁿ luh KEHⁿZ | noo lahⁿ-suh-ROHⁿ lay-zehⁿs-kreep-SYOHⁿ', ['ecrire', 'reel']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG TEXTS AND THEIR ANSWER KEYS
 *
 *  Held here so the reading and the quiz cannot drift apart.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1. 168 words. Four different si's are already at work in it: a real
 *  condition, an unreal one, an indirect question and a suggestion. */
export const READING_SORTIE = "Le club de randonnée de Nantes prépare sa sortie d'automne. Sur le tableau de la salle, Mme Roussel a écrit trois lignes au feutre bleu.\n\n« Si le car est complet, nous prendrons le train. Si le temps est mauvais, nous resterons au refuge. Départ samedi, sept heures. »\n\nOusmane relit la deuxième ligne et hausse les épaules. Il pleut souvent en novembre, dans cette région. Léa, elle, regarde la première.\n\n« Je me demande si le car est déjà réservé, dit-elle. Et si on partait vendredi soir ? On gagnerait une journée. »\n\nMme Roussel sourit. Elle a entendu cette proposition dix fois en huit ans.\n\n« Si j'avais une voiture, je vous emmènerais tous, répond-elle. Mais je n'en ai pas, et le car coûte moins cher. »\n\nOusmane ajoute une ligne sous les trois autres, au crayon cette fois : « Si nous avions su, nous aurions réservé plus tôt. » Personne ne l'efface.";

export const READING_SORTIE_REEL = ['Si le car est complet, nous prendrons le train', 'Si le temps est mauvais, nous resterons au refuge'] as const;
export const READING_SORTIE_IRREEL = ["Si j'avais une voiture, je vous emmènerais tous"] as const;
export const READING_SORTIE_QUESTION = ['Je me demande si le car est déjà réservé'] as const;
export const READING_SORTIE_SUGGESTION = ['Et si on partait vendredi soir'] as const;
export const READING_SORTIE_PASSE = ['Si nous avions su, nous aurions réservé plus tôt'] as const;

/** Act 12. 158 words. The model the learner imitates in the task. */
export const READING_MODELE = "Bonjour Madame,\n\nJe vous écris pour savoir si le gymnase est libre ce week-end. Notre club voudrait y organiser un tournoi le samedi après-midi.\n\nSi la salle est disponible, nous confirmerons la date lundi. Si elle ne l'est pas, nous chercherons une autre solution : sinon, nous garderions la date du mois prochain, mais beaucoup de familles seraient déçues.\n\nSi le nombre de participants augmente, il faudra un deuxième car pour les équipes de Rezé. Si vous pouviez répondre avant vendredi, cela nous aiderait beaucoup, parce que les inscriptions ferment ce jour-là.\n\nSi possible, envoyez-nous une réponse par courriel. Si oui, je préparerai la liste des inscrits dès lundi matin. Si vous voulez bien, nous passerons signer la convention mardi, et quand la convention sera signée, nous préviendrons les familles.\n\nNous vous remercions d'avance si vous pouvez nous répondre vite.\n\nBien cordialement,\nLéa Mbaye";

export const READING_TEXT = READING_MODELE;

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. WHAT THE APP CAN AND CANNOT TEST HERE
 *
 *  fold() = NFD, strip combining marks, lowercase, strip . , ! ? ; : « » ( )
 *  [ ] and apostrophes/hyphens, strip whitespace. Measured consequences:
 *
 *    si j'ai / si j'avais        different letters, TYPEABLE and AUDIBLE
 *    passerai / passerais        different letters, TYPEABLE  (the ear cannot)
 *    prendrons / prendrions      different letters, TYPEABLE and AUDIBLE
 *    sinon / si non              ONE STRING: the space folds away. Never the point.
 *    s'il / si il                ONE STRING: the apostrophe folds away.
 * ══════════════════════════════════════════════════════════════════════════ */

export const FOLD_COLLISIONS: [string, string][] = [
  ['sinon', 'si non'],
  ["s'il pleut", 'si il pleut'],
  ['si oui', 'sioui'],
];

export const WANTED_AND_IMPOSSIBLE: readonly { want: string; why: string }[] = [
  { want: 'a typeIn resting on the comma after the si half', why: 'fold() strips commas, so « Si tu viens appelle-moi » is marked right. Act 5 tests the comma by mcq and by errorSpot on a different word instead.' },
  { want: 'a listenChoose between « je passerai » and « je passerais »', why: 'Many speakers barely separate [e] from [ɛ] at the end of a word, which is b1.08\'s measured finding. This lesson listens for the SI HALF instead: « si tu viens » against « si tu venais » is audible everywhere.' },
  { want: "a typeIn where the only error is the apostrophe in « s'il »", why: "fold() strips it. Tested by mcq, and by errorSpot where the verb also changes." },
];

/** Error forms the lesson prints on purpose, only where it marks them wrong. */
export const WRONG_FORMS = [
  'si je serai', 'si tu viendras', 'si nous aurions', 'si j’aurais',
  'si il pleut', 'si tu voudrais', 'quand il pleut, je resterai chez moi',
] as const;
