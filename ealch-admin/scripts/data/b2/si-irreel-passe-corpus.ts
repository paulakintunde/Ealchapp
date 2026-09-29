// b2.03.l1 « Si j’avais su »: the authored corpus, the imports and the
// citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as
// b1.10 « Les phrases avec si » is built) under the B2 rules of
// B2-BUILD-LOG.md (« How B2 teaches complex structures »).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b2.04 mixed si clauses may import REFRAME from this file;
// do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, IMPORT_IDS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE PAST-UNREAL SI CLAUSE, BUILT UNTIL IT IS AUTOMATIC.
//
//     si + plus-que-parfait  >  conditionnel passé    a past that never happened
//
//     the three pairs side by side   recap of lesson 10 in B1, then the third
//     the si half                    avoir or être, negation and pronouns
//                                    around the auxiliary, agreement
//     the result half                aurais / serais + participle, never
//                                    aurai / serai (the futur antérieur)
//     what it means                  both halves say the opposite of the facts
//     regret and reproach            je for a regret, tu / vous for a reproach,
//                                    and the softened reproach
//     relief                         a negative pair announces a positive fact;
//                                    sans + noun; j’ai failli
//     the order                      either half first; the si half keeps its
//                                    plus-que-parfait in second place
//     même si and sauf si            concession and the one exception, in the
//                                    past (and même si + PQP with a REAL past)
//     the traps                      « si j’aurais su », « je serai venu »,
//                                    si + PQP that is NOT a hypothesis
//                                    (reported question, reported condition,
//                                    past habit)
//     counterfactual history         the uchronie, everyday what-ifs, and the
//                                    proverb « Avec des si... »
//
//   NOT OWNED, CITED BY TRAIL POSITION (never re-taught):
//     lesson 10 in B1   the si system and its first two pairs (rows reused by
//                       id, reframe quoted); act 11 there taught this pair
//                       for RECOGNITION and left building it to this lesson
//     lesson 19 in B1   reported speech and the sequence of tenses (a row
//                       reused in act 9)
//     lesson 32 in B1   même si as a concession (rows reused in act 8)
//     lesson 1 in B2    the plus-que-parfait (its FORMATION is assumed)
//     lesson 2 in B2    the conditionnel passé (its FORMATION is assumed)
//     lesson 4 in B2    mixed pairs across past and present (named, never
//                       drilled: « si j’avais accepté, je vivrais à Dakar »)
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `projets-et-futur` (fondations, a2-b2; sub-themes « projets et
//     intentions », « si j’avais su », « hypothèses sur le passé et le
//     présent », set by the orchestrator). It exists, so nothing is created.
//     Ids are `fr.b2.projets-et-futur.NNNN`.
//  2. ID BLOCK: `.1400`-`.1599`, claimed in the orchestrator's brief (1600
//     to 1799 is b2.04's, written in parallel: nothing here goes near it;
//     up to 1378 is taken). AUTHORED: `.1400`-`.1548`, 149 rows in eleven
//     act blocks, no gaps. The ledger line in B2-BUILD-LOG.md is the
//     orchestrator's to write.
//  3. REUSED ROWS. B1 is live (v76) and the B2 wave 1 rows are merged, so
//     the seed carries lesson 10's rows (`fr.b1.projets-et-futur.12xx` and
//     `.13xx`) and `src()` resolves them BY ID: the two B1 pairs are never
//     retyped. Seed read 2026-09-27. Its act 11 recognition rows (.1351 to
//     .1363) are FLASHCARD + REVIEW only, so they are deck-able but not
//     speakable. Eight B2 rows from other themes (maison, tourisme,
//     communaute...) carry dictation or sentence drills only: named, never
//     released (NOT_DECK_ABLE).
//  4. NO HEADWORD ROWS. Every authored row is a sentence or a grammar card
//     (cardType 'grammar'), so nothing here can clash with a flashcard-hub
//     headword in the seed or in b2.01, b2.02 and b2.04 (written in
//     parallel). No authored `fr` equals a seed row's `fr` (checked by
//     script, 2026-09-27).
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER rather than the ear:
//     `pehr-SONN` (personne), `tay-lay-FONN` (téléphone), `dee-zenn`
//     (dizaines), `shee-rür-ZHYENN` (chirurgienne): the doubled consonant
//     keeps `hasPlainNasal` from reading a nasal vowel. No U+203F tie
//     anywhere: a liaison consonant moves onto the next syllable
//     (`noo-zoh-ryohⁿ`, `suh-reh-za-ree-VAY`).
//  6. APOSTROPHES. Every authored row and text uses ’ only (as lesson 10's
//     act 11 rows do). Reused seed rows keep the ' they were published with;
//     no scenario embeds a corpus row, and both scenarios use ’ only.
//  7. FACTS. Saint-Aubin, Lac-Vert, their railway and their factory are
//     INVENTED (act 10), presented as a local chronicle. The one real
//     reference is the film line « Si j’aurais su, j’aurais pas venu »
//     (act 9), quoted as « la réplique d’un vieux film » without a title or
//     a date, which is all the lesson needs.
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
  id: 'b2.03',
  seq: 3,
  title: 'Past-Unreal Si Clauses',
  sub: 'Si j’avais su',
  canDo: 'Can build si + plus-que-parfait with the conditionnel passé without hesitation, in either clause order, to express a regret, a reproach, a relief or a counterfactual chain of events; can place it beside the real and present-unreal pairs, use même si and sauf si about the past, and tell a hypothesis from a reported question or condition that uses the same tenses',
  prereqUnitIds: ['b1.10', 'b1.19', 'b1.32', 'b2.01', 'b2.02'],
} as const;

export const LESSON_ID = 'b2.03.l1';
export const THEME = 'projets-et-futur';
export const LEVEL = 'b2' as const;

/** ONE block. Everything below 1400 is published or another lesson's. */
export const ID_RANGES = [[1400, 1599]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;
/** Lesson 10 in B1: its rows, reused by id. */
export const B110 = (n: number) => `fr.b1.projets-et-futur.${n}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so every label is French and built from the
 *  plan: a unit id's number IS its trail position in B1 and in B2.
 * ══════════════════════════════════════════════════════════════════════════ */

export const SI_B1_UNIT = 'b1.10';
export const COND_UNIT = 'b1.08';
export const DISCOURS_UNIT = 'b1.19';
export const CONCESSION_UNIT = 'b1.32';
export const PQP_UNIT = 'b2.01';
export const COND_PASSE_UNIT = 'b2.02';
export const MIXTE_UNIT = 'b2.04';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const SI_B1_REF = refFr(SI_B1_UNIT);          // la leçon 10 du B1
export const COND_REF = refFr(COND_UNIT);            // la leçon 8 du B1
export const DISCOURS_REF = refFr(DISCOURS_UNIT);    // la leçon 19 du B1
export const CONCESSION_REF = refFr(CONCESSION_UNIT); // la leçon 32 du B1
export const PQP_REF = refFr(PQP_UNIT);              // la leçon 1 du B2
export const COND_PASSE_REF = refFr(COND_PASSE_UNIT); // la leçon 2 du B2
export const MIXTE_REF = refFr(MIXTE_UNIT);          // la leçon 4 du B2

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 *
 *  Lesson 10's line is the one this lesson extends: « choose the pair, not
 *  the tenses ». b2.01 and b2.02 are written in parallel and have no stable
 *  file yet, so their reframes are NOT imported; they are cited in words.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B110_REFRAME, REFRAME_EN as B110_REFRAME_EN } from '../b1/si-clauses-corpus.ts';
export { REFRAME as B132_REFRAME, REFRAME_EN as B132_REFRAME_EN } from '../b1/concession-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE CRAN. Lesson 10 in B1 taught that a si sentence is a matched pair.
 *  This lesson moves the pair back ONE NOTCH: présent > imparfait >
 *  plus-que-parfait in front, futur > conditionnel > conditionnel passé
 *  behind. Both halves move together, which is what kills « si j’aurais
 *  su » (only the result half moved) and « si je vérifiais, je ne raterais
 *  pas » for yesterday (the pair did not move far enough).
 *
 *  It is scoped by « Pour réécrire le passé »: a si that reports a question
 *  (« il m’a demandé si j’avais fini ») rewrites nothing, and act 9 says so.
 *  It survives the clause order (act 7), même si and sauf si (act 8),
 *  regret, reproach and relief (acts 5 and 6).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Pour réécrire le passé, recule la paire d’un cran : si + plus-que-parfait, puis conditionnel passé.';
export const REFRAME_EN = 'To rewrite the past, move the pair back one notch: si + pluperfect, then past conditional.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Si + plus-que-parfait, c’est toujours ce qui n’a pas eu lieu.',
    why: 'False in act 9: « Il m’a demandé si j’avais fini » is a reported question and « Il a dit que si j’avais fini, je pouvais partir » a reported REAL condition. Both use the same tenses and neither is a hypothesis. A learner who holds this line misreads reported speech.',
  },
  {
    text: 'Le conditionnel passé, c’est le regret.',
    why: 'Too narrow for act 6 (relief: « si tu ne m’avais pas appelé, j’aurais raté le train » is gratitude) and act 10 (a counterfactual chronicle regrets nothing). It also says nothing about the si half, where the famous error lives.',
  },
  {
    text: 'Après si, jamais de conditionnel.',
    why: 'The hard rule of lesson 10 in B1, kept as a rule card and a trap (act 9). As a reframe it is false in act 9: « Je me demandais si elle aurait le temps » puts a conditional straight after a si that means whether.',
  },
  {
    text: 'Deux moitiés au passé.',
    why: 'Vague and false in the one case that matters: « si je vérifiais l’horaire » is an imparfait, a « past » tense, and it still talks about now. The notch names WHICH past.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-27, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    B110(1352),                                // Si j’avais su, j’aurais pris un autre train.
    'fr.b2.maison.065',                         // Si j'avais su, je n'aurais jamais signé ce bail.  (named only)
  ],
  act2: [
    B110(1200),                                // Si je pars à sept heures, j'arriverai avant midi.
    B110(1201),                                // Si je partais à sept heures, j'arriverais avant midi.
    B110(1202),                                // Si tu as le temps, tu pourras venir avec nous.
    B110(1203),                                // Si tu avais le temps, tu pourrais venir avec nous.
    B110(1204),                                // Si le car est complet, nous prendrons le train.
    B110(1205),                                // Si le car était complet, nous prendrions le train.
    B110(1211),                                // Si le temps est mauvais, nous resterons au refuge.
    B110(1212),                                // Si le temps était mauvais, nous resterions au refuge.
    B110(1206),                                // Si Ousmane accepte, nous partirons samedi matin.
    B110(1207),                                // Si Ousmane acceptait, nous partirions samedi matin.
    B110(1209),                                // Si nous avions su, nous aurions réservé plus tôt.
    B110(1359),                                // Trois : présent et futur, imparfait et conditionnel, plus-que-parfait et conditionnel passé.  (rule)
  ],
  act3: [
    B110(1351),                                // Si nous étions partis plus tôt, nous aurions évité les bouchons.
    B110(1356),                                // Si vous aviez réservé en janvier, vous auriez payé moitié prix.
    B110(1358),                                // Si nous avions eu plus de temps, nous aurions visité le château.
    'fr.b2.maison.062',                         // S'il avait plu, nous n'aurions pas repeint la façade.  (named only)
  ],
  act4: [
    B110(1353),                                // Si tu m’avais prévenu, je serais venu t’aider.
    B110(1360),                                // Si tu étais venu, tu aurais rencontré toute l’équipe.
    B110(1361),                                // Si le magasin avait ouvert plus tôt, j’aurais eu le temps.
    'fr.b2.opinions-et-avis.1781',              // Si la ville avait consulté les habitants, elle aurait évité ce conflit.
  ],
  act5: [
    B110(1357),                                // Si j’avais écouté ma sœur, je n’aurais pas signé ce contrat.
    'fr.b2.strategies-de-comprehension.1667',   // Il aurait fallu consulter les usagers avant.
    'fr.b1.appareils.001',                      // J'aurais dû sauvegarder mes fichiers avant que la batterie meure.  (named only)
    'fr.b2.hebergement.005',                    // Si nous avions lu le contrat plus attentivement, nous aurions évité ce malentendu avec le propriétaire.  (named only)
  ],
  act6: [
    'fr.b1.emotions.1111',                      // Ouf, j'ai eu mon train de justesse.
    B110(1354),                                // Si le conducteur avait freiné plus tôt, rien ne serait arrivé.
  ],
  act7: [
    'fr.b2.maison.085',                         // Nous aurions aménagé le grenier si le budget nous l'avait permis.
    'fr.b1.dictee.041',                         // Elle aurait aimé continuer ses études si elle en avait eu les moyens.  (named only)
  ],
  act8: [
    B110(1347),                                // Même si le temps est mauvais, la course aura lieu.
    'fr.b1.connecteurs-logiques.1422',          // Même si j'étais riche, je resterais à Sherbrooke.
    'fr.b1.connecteurs-logiques.1423',          // Après même si, l'indicatif, comme après si.  (rule)
  ],
  act9: [
    'fr.b1.paroles-rapportees.1180',            // Elle voulait savoir si tu avais reçu ses photos.
    'fr.b1.conseils-et-suggestions.1105',       // Je me demandais si vous auriez une place.
    'fr.b2.tourisme.005',                       // Si j'avais su que les formalités seraient si compliquées, j'aurais demandé le visa plus tôt.  (named only)
  ],
  act10: [
    B110(1362),                                // Si j’avais le choix, je recommencerais tout.
    B110(1363),                                // Si j’avais eu le choix, j’aurais tout recommencé.
    'fr.b2.communaute.005',                     // Si la municipalité avait consulté les habitants plus tôt, le projet aurait sans doute rencontré moins d'opposition.  (named only)
    'fr.b2.conflits-reconciliation.004',        // Si nous avions abordé le sujet plus tôt, ce malentendu ne serait jamais devenu un vrai conflit.  (named only)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.b2.maison.065',                          // dictation only
  'fr.b2.maison.062',                          // dictation only
  'fr.b1.appareils.001',                       // dictation only
  'fr.b2.hebergement.005',                     // sentence, dictation
  'fr.b1.dictee.041',                          // sentence, review
  'fr.b2.tourisme.005',                        // sentence, dictation
  'fr.b2.communaute.005',                      // sentence, dictation
  'fr.b2.conflits-reconciliation.004',         // sentence, dictation
];

/** The reused rows that DO carry `voiceflash`, read from the seed. Every
 *  other import is kept out of the `practice` speak section. */
export const SPEAKABLE_IMPORTS = [
  B110(1200), B110(1201), B110(1202), B110(1203), B110(1204), B110(1205),
  B110(1206), B110(1207), B110(1209), B110(1211), B110(1212), B110(1347), B110(1362),
  'fr.b2.opinions-et-avis.1781', 'fr.b2.strategies-de-comprehension.1667',
  'fr.b1.emotions.1111', 'fr.b1.connecteurs-logiques.1422',
  'fr.b1.paroles-rapportees.1180', 'fr.b1.conseils-et-suggestions.1105',
];

export const NOT_SPEAKABLE = IMPORT_IDS.filter((id) => !SPEAKABLE_IMPORTS.includes(id));

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with the superscript ⁿ,
 *  no U+203F tie. THE ONE THING THE EAR MUST CATCH is the auxiliary in each
 *  half: avais / étais in front, aurais / serais behind.
 *
 *  A `rule` row is a grammar card: `prompt` is the question on the front,
 *  `fr` the rule on the back. It is never spoken as a sentence.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FCR = ['flashcard', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, ipa: string, respell: string, tags: string[], drills: Item['drills'] = FCVR): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['si-passe', ...tags], drills, version: 1, grammarPoints: ['si-irreel-passe'],
});

/** A rule card: `prompt` is the question on the front, `fr` the rule. */
const rule = (n: number, prompt: string, fr: string, en: string, ipa: string, respell: string, tags: string[]): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['si-passe', 'regle', ...tags], drills: FCR, version: 1,
  cardType: 'grammar', prompt, grammarPoints: ['si-irreel-passe'],
});

/* ── ACT 1 · SI J’AVAIS SU ──────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1400, 'Si j’avais vérifié l’horaire, je n’aurais pas raté le train.', 'If I had checked the timetable, I would not have missed the train.', '/si ʒa.vɛ ve.ʁi.fje lɔ.ʁɛʁ ʒə no.ʁɛ pa ʁa.te lə tʁɛ̃/', 'see zha-veh vay-ree-fyay lo-REHR | zhuh noh-reh pa ra-tay luh TREHⁿ', ['passe', 'scene'], FCVDR),
  sent(1401, 'Si je vérifiais l’horaire, je ne raterais pas le train.', 'If I checked the timetable, I would not miss the train.', '/si ʒə ve.ʁi.fjɛ lɔ.ʁɛʁ ʒə nə ʁa.tʁɛ pa lə tʁɛ̃/', 'see zhuh vay-ree-fyeh lo-REHR | zhuh nuh ra-treh pa luh TREHⁿ', ['irreel', 'contraste']),
  sent(1402, 'Si j’avais pris le train de 17 h 10, je n’aurais jamais rencontré Karim.', 'If I had taken the 5.10 pm train, I would never have met Karim.', '/si ʒa.vɛ pʁi lə tʁɛ̃ də di.sɛ.tœʁ dis ʒə no.ʁɛ ʒa.mɛ ʁɑ̃.kɔ̃.tʁe ka.ʁim/', 'see zha-veh pree luh trehⁿ duh dee-seh-teur DEESS | zhuh noh-reh zha-meh rahⁿ-kohⁿ-tray ka-REEM', ['passe', 'lecture']),
  sent(1403, 'Si le café avait été plein, je serais restée sur le quai.', 'If the café had been full, I would have stayed on the platform.', '/si lə ka.fe a.vɛ.te.te plɛ̃ ʒə sə.ʁɛ ʁɛs.te syʁ lə ke/', 'see luh ka-fay a-veh-tay-tay PLEHⁿ | zhuh suh-reh res-tay sür luh KAY', ['passe', 'lecture']),
  sent(1404, 'Si tu étais rentrée ce soir-là, tu aurais épousé le fils des voisins.', 'If you had gone home that evening, you would have married the neighbours’ son.', '/si ty e.tɛ ʁɑ̃.tʁe sə swaʁ.la ty o.ʁɛ.ze.pu.ze lə fis de vwa.zɛ̃/', 'see tü ay-teh rahⁿ-tray suh swar-LA | tü oh-reh-zay-poo-zay luh feess day vwa-ZEHⁿ', ['passe', 'lecture']),
  sent(1405, 'J’ai raté le train de 17 h 10.', 'I missed the 5.10 pm train.', '/ʒe ʁa.te lə tʁɛ̃ də di.sɛ.tœʁ dis/', 'zhay ra-tay luh trehⁿ duh dee-seh-teur DEESS', ['fait']),
  sent(1406, 'Je n’ai pas vérifié l’horaire.', 'I did not check the timetable.', '/ʒə ne pa ve.ʁi.fje lɔ.ʁɛʁ/', 'zhuh nay pa vay-ree-fyay lo-REHR', ['fait']),
  sent(1407, 'Tu aurais pu vérifier l’horaire.', 'You could have checked the timetable.', '/ty o.ʁɛ py ve.ʁi.fje lɔ.ʁɛʁ/', 'tü oh-reh pü vay-ree-fyay lo-REHR', ['reproche', 'scene']),
  sent(1408, 'Si j’avais regardé mon téléphone, j’aurais vu ton message.', 'If I had looked at my phone, I would have seen your message.', '/si ʒa.vɛ ʁə.ɡaʁ.de mɔ̃ te.le.fɔn ʒo.ʁɛ vy tɔ̃ me.saʒ/', 'see zha-veh ruh-gar-day mohⁿ tay-lay-FONN | zhoh-reh vü tohⁿ may-SAZH', ['passe']),
  sent(1409, 'Si nous étions partis à l’heure, nous aurions eu le train.', 'If we had left on time, we would have caught the train.', '/si nu.ze.tjɔ̃ paʁ.ti a lœʁ nu.zo.ʁjɔ̃.zy lə tʁɛ̃/', 'see noo-zay-tyohⁿ par-tee a LEUR | noo-zoh-ryohⁿ-zü luh TREHⁿ', ['passe'], FCVDR),
  sent(1410, 'Si elle avait eu son train, sa vie aurait été différente.', 'If she had caught her train, her life would have been different.', '/si ɛ.la.vɛ.y sɔ̃ tʁɛ̃ sa vi o.ʁɛ.te.te di.fe.ʁɑ̃t/', 'see eh-la-veh-ü sohⁿ TREHⁿ | sa vee oh-reh-tay-tay dee-fay-RAHⁿT', ['passe']),
  rule(1411, 'Si j’avais su : est-ce que je savais ?', 'Non. Avec un si simple, la paire du passé dit le contraire des faits.', 'No. With a plain si, the past pair says the opposite of the facts.', '/nɔ̃ a.vɛ.kœ̃ si sɛ̃pl la pɛʁ dy pa.se di lə kɔ̃.tʁɛʁ de fɛ/', 'nohⁿ | a-veh-kuhⁿ see SEHⁿPL | la pehr dü pa-SAY | dee luh kohⁿ-trehr day FEH', ['inverse']),
];

/* ── ACT 2 · TROIS PAIRES, UN SYSTÈME ───────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1412, 'Si j’étais parti à sept heures, je serais arrivé avant midi.', 'If I had left at seven, I would have arrived before noon.', '/si ʒe.tɛ paʁ.ti a sɛ.tœʁ ʒə sə.ʁɛ.za.ʁi.ve a.vɑ̃ mi.di/', 'see zhay-teh par-tee a seh-TEUR | zhuh suh-reh-za-ree-vay a-vahⁿ mee-DEE', ['passe', 'paire'], FCVDR),
  sent(1413, 'Si tu avais eu le temps, tu aurais pu venir avec nous.', 'If you had had time, you could have come with us.', '/si ty a.vɛ.zy lə tɑ̃ ty o.ʁɛ py və.niʁ a.vɛk nu/', 'see tü a-veh-zü luh TAHⁿ | tü oh-reh pü vuh-neer a-vek NOO', ['passe', 'paire']),
  sent(1414, 'Si le car avait été complet, nous aurions pris le train.', 'If the coach had been full, we would have taken the train.', '/si lə kaʁ a.vɛ.te.te kɔ̃.plɛ nu.zo.ʁjɔ̃ pʁi lə tʁɛ̃/', 'see luh kar a-veh-tay-tay kohⁿ-PLEH | noo-zoh-ryohⁿ pree luh TREHⁿ', ['passe', 'paire']),
  sent(1415, 'Si le temps avait été mauvais, nous serions restés au refuge.', 'If the weather had been bad, we would have stayed at the refuge.', '/si lə tɑ̃ a.vɛ.te.te mo.vɛ nu sə.ʁjɔ̃ ʁɛs.te o ʁə.fyʒ/', 'see luh tahⁿ a-veh-tay-tay moh-VEH | noo suh-ryohⁿ res-tay oh ruh-FÜZH', ['passe', 'paire']),
  sent(1416, 'Si Ousmane avait accepté, nous serions partis samedi matin.', 'If Ousmane had agreed, we would have left on Saturday morning.', '/si us.man a.vɛ.tak.sɛp.te nu sə.ʁjɔ̃ paʁ.ti sam.di ma.tɛ̃/', 'see ooss-man a-veh-tak-sep-TAY | noo suh-ryohⁿ par-tee sam-dee ma-TEHⁿ', ['passe', 'paire']),
  sent(1417, 'Si tu viens ce soir, je te montrerai les photos.', 'If you come tonight, I will show you the photos.', '/si ty vjɛ̃ sə swaʁ ʒə tə mɔ̃.tʁə.ʁe le fo.to/', 'see tü vyehⁿ suh SWAR | zhuh tuh mohⁿ-truh-reh lay foh-TOH', ['reel', 'trio']),
  sent(1418, 'Si tu venais ce soir, je te montrerais les photos.', 'If you came tonight, I would show you the photos.', '/si ty və.nɛ sə swaʁ ʒə tə mɔ̃.tʁə.ʁɛ le fo.to/', 'see tü vuh-neh suh SWAR | zhuh tuh mohⁿ-truh-reh lay foh-TOH', ['irreel', 'trio']),
  sent(1419, 'Si tu étais venu hier soir, je t’aurais montré les photos.', 'If you had come last night, I would have shown you the photos.', '/si ty e.tɛ və.ny jɛʁ swaʁ ʒə to.ʁɛ mɔ̃.tʁe le fo.to/', 'see tü ay-teh vuh-nü yehr SWAR | zhuh toh-reh mohⁿ-tray lay foh-TOH', ['passe', 'trio'], FCVDR),
  sent(1420, 'Si la banque accepte, nous achèterons l’appartement.', 'If the bank agrees, we will buy the flat.', '/si la bɑ̃k ak.sɛpt nu.za.ʃɛ.tʁɔ̃ la.paʁ.tə.mɑ̃/', 'see la bahⁿk ak-SEPT | noo-za-sheh-trohⁿ la-par-tuh-MAHⁿ', ['reel', 'trio']),
  sent(1421, 'Si la banque acceptait, nous achèterions l’appartement.', 'If the bank agreed, we would buy the flat.', '/si la bɑ̃k ak.sɛp.tɛ nu.za.ʃɛ.tə.ʁjɔ̃ la.paʁ.tə.mɑ̃/', 'see la bahⁿk ak-sep-TEH | noo-za-sheh-tuh-ryohⁿ la-par-tuh-MAHⁿ', ['irreel', 'trio']),
  sent(1422, 'Si la banque avait accepté, nous aurions acheté l’appartement.', 'If the bank had agreed, we would have bought the flat.', '/si la bɑ̃k a.vɛ.tak.sɛp.te nu.zo.ʁjɔ̃.zaʃ.te la.paʁ.tə.mɑ̃/', 'see la bahⁿk a-veh-tak-sep-TAY | noo-zoh-ryohⁿ-zash-tay la-par-tuh-MAHⁿ', ['passe', 'trio']),
  rule(1423, 'Qu’est-ce qui recule d’un cran, d’une paire à l’autre ?', 'Les deux moitiés ensemble : présent, imparfait, plus-que-parfait devant ; futur, conditionnel, conditionnel passé derrière.', 'Both halves together: present, imparfait, pluperfect in front; future, conditional, past conditional behind.', '/le dø mwa.tje ɑ̃.sɑ̃bl pʁe.zɑ̃ ɛ̃.paʁ.fɛ plys.kə.paʁ.fɛ də.vɑ̃ fy.tyʁ kɔ̃.di.sjɔ.nɛl kɔ̃.di.sjɔ.nɛl pa.se dɛ.ʁjɛʁ/', 'lay duh mwa-tyay ahⁿ-SAHⁿBL | pray-zahⁿ ehⁿ-par-feh plüss-kuh-par-feh duh-VAHⁿ | fü-tür kohⁿ-dee-syo-nel kohⁿ-dee-syo-nel pa-say deh-RYEHR', ['cran']),
  rule(1424, 'Paire irréelle ou paire du passé : comment choisir ?', 'Par le moment : ce qui manque aujourd’hui, ou ce qui a manqué hier.', 'By the moment: what is missing today, or what was missing yesterday.', '/paʁ lə mɔ.mɑ̃ sə ki mɑ̃k o.ʒuʁ.dɥi u sə ki a mɑ̃.ke jɛʁ/', 'par luh mo-MAHⁿ | suh kee mahⁿk oh-zhoor-DWEE | oo suh kee a mahⁿ-kay YEHR', ['cran', 'choix']),
];

/* ── ACT 3 · MONTER LA CONDITION ────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1425, 'Si nous avions réservé en mars, nous aurions eu une chambre.', 'If we had booked in March, we would have got a room.', '/si nu.za.vjɔ̃ ʁe.zɛʁ.ve ɑ̃ maʁs nu.zo.ʁjɔ̃.zy yn ʃɑ̃bʁ/', 'see noo-za-vyohⁿ ray-zehr-vay ahⁿ MARSS | noo-zoh-ryohⁿ-zü ün SHAHⁿBR', ['condition', 'avoir'], FCVDR),
  sent(1426, 'Si elle était arrivée à l’heure, elle aurait vu le début.', 'If she had arrived on time, she would have seen the beginning.', '/si ɛ.le.tɛ.ta.ʁi.ve a lœʁ ɛ.lo.ʁɛ vy lə de.by/', 'see eh-lay-teh-ta-ree-vay a LEUR | eh-loh-reh vü luh day-BÜ', ['condition', 'etre']),
  sent(1427, 'Si vous vous étiez levés plus tôt, vous auriez vu le lever du soleil.', 'If you had got up earlier, you would have seen the sunrise.', '/si vu vu.ze.tje lə.ve ply to vu.zo.ʁje vy lə lə.ve dy sɔ.lɛj/', 'see voo voo-zay-tyay luh-vay plü TOH | voo-zoh-ryay vü luh luh-vay dü so-LEHY', ['condition', 'pronominal']),
  sent(1428, 'Si tu ne m’avais pas prévenu, j’aurais oublié la réunion.', 'If you had not warned me, I would have forgotten the meeting.', '/si ty nə ma.vɛ pa pʁe.və.ny ʒo.ʁɛ.zu.bli.je la ʁe.y.njɔ̃/', 'see tü nuh ma-veh pa pray-vuh-NÜ | zhoh-reh-zoo-blee-yay la ray-ü-NYOHⁿ', ['condition', 'negation'], FCVDR),
  sent(1429, 'Si tu me l’avais dit, je t’aurais aidé.', 'If you had told me, I would have helped you.', '/si ty mə la.vɛ di ʒə to.ʁɛ.ze.de/', 'see tü muh la-veh DEE | zhuh toh-reh-zay-DAY', ['condition', 'pronoms']),
  sent(1430, 'S’il avait neigé, les écoles auraient fermé.', 'If it had snowed, the schools would have closed.', '/si.la.vɛ nɛ.ʒe le.ze.kɔl o.ʁɛ fɛʁ.me/', 'see-la-veh neh-ZHAY | lay-zay-kol oh-reh fehr-MAY', ['condition', 'elision']),
  sent(1431, 'Si les enfants étaient restés à la maison, ils auraient raté la fête.', 'If the children had stayed at home, they would have missed the party.', '/si le.zɑ̃.fɑ̃ e.tɛ ʁɛs.te a la mɛ.zɔ̃ il.zo.ʁɛ ʁa.te la fɛt/', 'see lay-zahⁿ-fahⁿ ay-teh res-tay a la meh-ZOHⁿ | eel-zoh-reh ra-tay la FET', ['condition', 'etre']),
  sent(1432, 'Si je m’étais trompé de quai, j’aurais perdu une heure.', 'If I had gone to the wrong platform, I would have lost an hour.', '/si ʒə me.tɛ tʁɔ̃.pe də ke ʒo.ʁɛ pɛʁ.dy y.nœʁ/', 'see zhuh may-teh trohⁿ-pay duh KAY | zhoh-reh pehr-dü ü-NEUR', ['condition', 'pronominal']),
  sent(1433, 'Si nous n’étions pas sortis ce soir-là, nous ne l’aurions pas croisée.', 'If we had not gone out that evening, we would not have run into her.', '/si nu ne.tjɔ̃ pa sɔʁ.ti sə swaʁ.la nu nə lo.ʁjɔ̃ pa kʁwa.ze/', 'see noo nay-tyohⁿ pa sor-tee suh swar-LA | noo nuh loh-ryohⁿ pa krwa-ZAY', ['condition', 'negation']),
  sent(1434, 'Si elle s’était souvenue du code, elle serait entrée tout de suite.', 'If she had remembered the code, she would have gone straight in.', '/si ɛl se.tɛ su.və.ny dy kɔd ɛl sə.ʁɛ.tɑ̃.tʁe tut.sɥit/', 'see el say-teh soo-vuh-nü dü KOD | el suh-reh-tahⁿ-tray toot-SWEET', ['condition', 'pronominal']),
  sent(1435, 'Si nous avions pris la voiture, nous serions arrivés avant l’orage.', 'If we had taken the car, we would have arrived before the storm.', '/si nu.za.vjɔ̃ pʁi la vwa.tyʁ nu sə.ʁjɔ̃.za.ʁi.ve a.vɑ̃ lɔ.ʁaʒ/', 'see noo-za-vyohⁿ pree la vwa-TÜR | noo suh-ryohⁿ-za-ree-vay a-vahⁿ lo-RAZH', ['condition', 'avoir'], FCVDR),
  rule(1436, 'Comment se construit la moitié si ?', 'Si, puis avoir ou être à l’imparfait, puis le participe passé.', 'Si, then avoir or être in the imparfait, then the past participle.', '/si pɥi a.vwaʁ u ɛtʁ a lɛ̃.paʁ.fɛ pɥi lə paʁ.ti.sip pa.se/', 'SEE | pwee a-vwar oo etr a lehⁿ-par-FEH | pwee luh par-tee-seep pa-SAY', ['forme']),
  rule(1437, 'Où va la négation ?', 'Autour de l’auxiliaire : si je n’avais pas su.', 'Around the auxiliary: si je n’avais pas su.', '/o.tuʁ də lok.si.ljɛʁ si ʒə na.vɛ pa sy/', 'oh-toor duh lok-see-LYEHR | see zhuh na-veh pa SÜ', ['forme', 'negation']),
  rule(1438, 'Et les pronoms ?', 'Devant l’auxiliaire : si tu me l’avais dit.', 'In front of the auxiliary: si tu me l’avais dit.', '/də.vɑ̃ lok.si.ljɛʁ si ty mə la.vɛ di/', 'duh-vahⁿ lok-see-LYEHR | see tü muh la-veh DEE', ['forme', 'pronoms']),
  rule(1439, 'Avoir ou être dans la moitié si ?', 'Le même qu’au passé composé : je suis parti, donc si j’étais parti.', 'The same as in the passé composé: je suis parti, so si j’étais parti.', '/lə mɛm ko pa.se kɔ̃.po.ze ʒə sɥi paʁ.ti dɔ̃k si ʒe.tɛ paʁ.ti/', 'luh mem koh pa-say kohⁿ-poh-ZAY | zhuh swee par-TEE | dohⁿk see zhay-teh par-TEE', ['forme', 'etre']),
];

/* ── ACT 4 · MONTER LE RÉSULTAT ─────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1440, 'Si j’avais eu ton numéro, je t’aurais appelé.', 'If I had had your number, I would have called you.', '/si ʒa.vɛ.zy tɔ̃ ny.me.ʁo ʒə to.ʁɛ.za.pə.le/', 'see zha-veh-zü tohⁿ nü-may-ROH | zhuh toh-reh-za-puh-LAY', ['resultat', 'avoir']),
  sent(1441, 'Si tu avais demandé, on t’aurait aidé.', 'If you had asked, someone would have helped you.', '/si ty a.vɛ də.mɑ̃.de ɔ̃ to.ʁɛ.te.de/', 'see tü a-veh duh-mahⁿ-DAY | ohⁿ toh-reh-tay-DAY', ['resultat', 'avoir']),
  sent(1442, 'Si le musée avait été ouvert, nous l’aurions visité.', 'If the museum had been open, we would have visited it.', '/si lə my.ze a.vɛ.te.te u.vɛʁ nu lo.ʁjɔ̃ vi.zi.te/', 'see luh mü-zay a-veh-tay-tay oo-VEHR | noo loh-ryohⁿ vee-zee-TAY', ['resultat', 'avoir'], FCVDR),
  sent(1443, 'Si nous avions su, nous serions partis plus tôt.', 'If we had known, we would have left earlier.', '/si nu.za.vjɔ̃ sy nu sə.ʁjɔ̃ paʁ.ti ply to/', 'see noo-za-vyohⁿ SÜ | noo suh-ryohⁿ par-tee plü TOH', ['resultat', 'etre']),
  sent(1444, 'Si elle avait insisté, ils seraient restés.', 'If she had insisted, they would have stayed.', '/si ɛ.la.vɛ.tɛ̃.sis.te il sə.ʁɛ ʁɛs.te/', 'see eh-la-veh-tehⁿ-sees-TAY | eel suh-reh res-TAY', ['resultat', 'etre']),
  sent(1445, 'Si tu avais couru, tu aurais pu attraper le bus.', 'If you had run, you could have caught the bus.', '/si ty a.vɛ ku.ʁy ty o.ʁɛ py a.tʁa.pe lə bys/', 'see tü a-veh koo-RÜ | tü oh-reh pü a-tra-pay luh BÜSS', ['resultat', 'modal']),
  sent(1446, 'Si le vol avait été annulé, nous aurions dû dormir à l’aéroport.', 'If the flight had been cancelled, we would have had to sleep at the airport.', '/si lə vɔl a.vɛ.te.te a.ny.le nu.zo.ʁjɔ̃ dy dɔʁ.miʁ a la.e.ʁɔ.pɔʁ/', 'see luh vol a-veh-tay-tay a-nü-LAY | noo-zoh-ryohⁿ dü dor-meer a la-ay-ro-POR', ['resultat', 'modal']),
  sent(1447, 'Si on m’avait prévenue, je me serais organisée autrement.', 'If someone had warned me, I would have organised myself differently.', '/si ɔ̃ ma.vɛ pʁe.və.ny ʒə mə sə.ʁɛ.zɔʁ.ɡa.ni.ze o.tʁə.mɑ̃/', 'see ohⁿ ma-veh pray-vuh-NÜ | zhuh muh suh-reh-zor-ga-nee-zay oh-truh-MAHⁿ', ['resultat', 'pronominal']),
  sent(1448, 'Si le taxi était venu, nous serions arrivés à temps.', 'If the taxi had come, we would have arrived in time.', '/si lə tak.si e.tɛ və.ny nu sə.ʁjɔ̃.za.ʁi.ve a tɑ̃/', 'see luh tak-see ay-teh vuh-NÜ | noo suh-ryohⁿ-za-ree-vay a TAHⁿ', ['resultat', 'etre']),
  sent(1449, 'Si vous m’aviez écouté, vous n’auriez pas perdu votre argent.', 'If you had listened to me, you would not have lost your money.', '/si vu ma.vje.ze.ku.te vu no.ʁje pa pɛʁ.dy vɔ.tʁaʁ.ʒɑ̃/', 'see voo ma-vyay-zay-koo-TAY | voo noh-ryay pa pehr-dü vo-trar-ZHAHⁿ', ['resultat', 'negation']),
  sent(1450, 'Si les voisins avaient entendu, ils auraient appelé la police.', 'If the neighbours had heard, they would have called the police.', '/si le vwa.zɛ̃ a.vɛ.tɑ̃.tɑ̃.dy il.zo.ʁɛ.ta.pə.le la pɔ.lis/', 'see lay vwa-zehⁿ a-veh-tahⁿ-tahⁿ-DÜ | eel-zoh-reh-ta-puh-lay la po-LEESS', ['resultat', 'avoir']),
  rule(1451, 'Comment se construit le résultat ?', 'Avoir ou être au conditionnel, puis le participe passé : j’aurais pris, je serais venu.', 'Avoir or être in the conditional, then the past participle: j’aurais pris, je serais venu.', '/a.vwaʁ u ɛtʁ o kɔ̃.di.sjɔ.nɛl pɥi lə paʁ.ti.sip pa.se ʒo.ʁɛ pʁi ʒə sə.ʁɛ və.ny/', 'a-vwar oo etr oh kohⁿ-dee-syo-NEL | pwee luh par-tee-seep pa-SAY | zhoh-reh PREE | zhuh suh-reh vuh-NÜ', ['forme']),
  rule(1452, 'J’aurai pris ou j’aurais pris ?', 'J’aurais pris, avec un s : j’aurai pris, sans s, est un futur antérieur.', 'J’aurais pris, with an s: j’aurai pris, without it, is a future perfect.', '/ʒo.ʁɛ pʁi a.vɛ.kœ̃ ɛs ʒo.ʁe pʁi sɑ̃ ɛs ɛ.tœ̃ fy.ty.ʁɑ̃.te.ʁjœʁ/', 'zhoh-reh PREE | a-veh-kuhⁿ ESS | zhoh-ray PREE | sahⁿ ESS | eh-tuhⁿ fü-tü-rahⁿ-tay-RYEUR', ['forme', 'piege']),
  sent(1453, 'Si j’avais été là, je me serais occupé des enfants.', 'If I had been there, I would have looked after the children.', '/si ʒa.vɛ.ze.te la ʒə mə sə.ʁɛ.zɔ.ky.pe de.zɑ̃.fɑ̃/', 'see zha-veh-zay-tay LA | zhuh muh suh-reh-zo-kü-pay day-zahⁿ-FAHⁿ', ['resultat', 'pronominal']),
];

/* ── ACT 5 · LE REGRET ET LE REPROCHE ───────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1454, 'Si j’avais travaillé plus régulièrement, j’aurais réussi l’examen.', 'If I had worked more steadily, I would have passed the exam.', '/si ʒa.vɛ tʁa.va.je ply ʁe.ɡy.ljɛʁ.mɑ̃ ʒo.ʁɛ ʁe.y.si lɛɡ.za.mɛ̃/', 'see zha-veh tra-va-yay plü ray-gü-lyehr-MAHⁿ | zhoh-reh ray-ü-see leg-za-MEHⁿ', ['regret']),
  sent(1455, 'Si je n’avais pas dit ça, nous ne nous serions pas disputés.', 'If I had not said that, we would not have argued.', '/si ʒə na.vɛ pa di sa nu nə nu sə.ʁjɔ̃ pa dis.py.te/', 'see zhuh na-veh pa dee SA | noo nuh noo suh-ryohⁿ pa dees-pü-TAY', ['regret', 'negation']),
  sent(1456, 'Si seulement je l’avais su plus tôt.', 'If only I had known it sooner.', '/si sœl.mɑ̃ ʒə la.vɛ sy ply to/', 'see seul-MAHⁿ | zhuh la-veh sü plü TOH', ['regret', 'seulement']),
  sent(1457, 'Si tu m’avais écouté, nous n’aurions pas perdu le dossier.', 'If you had listened to me, we would not have lost the account.', '/si ty ma.vɛ.ze.ku.te nu no.ʁjɔ̃ pa pɛʁ.dy lə do.sje/', 'see tü ma-veh-zay-koo-TAY | noo noh-ryohⁿ pa pehr-dü luh do-SYAY', ['reproche']),
  sent(1458, 'Si vous aviez relu le courriel, vous n’auriez pas envoyé la mauvaise version.', 'If you had reread the email, you would not have sent the wrong version.', '/si vu.za.vje ʁə.ly lə ku.ʁjɛl vu no.ʁje pa.zɑ̃.vwa.je la mo.vɛz vɛʁ.sjɔ̃/', 'see voo-za-vyay ruh-lü luh koo-RYEL | voo noh-ryay pa-zahⁿ-vwa-yay la moh-vez vehr-SYOHⁿ', ['reproche']),
  sent(1459, 'Si tu avais répondu à mes messages, je ne me serais pas inquiétée.', 'If you had answered my messages, I would not have worried.', '/si ty a.vɛ ʁe.pɔ̃.dy a me me.saʒ ʒə nə mə sə.ʁɛ pa.zɛ̃.kje.te/', 'see tü a-veh ray-pohⁿ-dü a may may-SAZH | zhuh nuh muh suh-reh pa-zehⁿ-kyay-TAY', ['reproche', 'adouci']),
  sent(1460, 'Si j’avais accepté le poste à Genève, j’aurais gagné plus, mais je ne t’aurais pas rencontré.', 'If I had taken the job in Geneva, I would have earned more, but I would not have met you.', '/si ʒa.vɛ.zak.sɛp.te lə pɔst a ʒə.nɛv ʒo.ʁɛ ɡa.ɲe plys mɛ ʒə nə to.ʁɛ pa ʁɑ̃.kɔ̃.tʁe/', 'see zha-veh-zak-sep-tay luh post a zhuh-NEV | zhoh-reh ga-nyay PLÜSS | meh zhuh nuh toh-reh pa rahⁿ-kohⁿ-TRAY', ['regret', 'pesee']),
  sent(1461, 'Si nous étions partis plus tôt, nous n’aurions pas attendu une heure.', 'If we had left earlier, we would not have waited an hour.', '/si nu.ze.tjɔ̃ paʁ.ti ply to nu no.ʁjɔ̃ pa.za.tɑ̃.dy y.nœʁ/', 'see noo-zay-tyohⁿ par-tee plü TOH | noo noh-ryohⁿ pa-za-tahⁿ-dü ü-NEUR', ['regret'], FCVDR),
  sent(1462, 'Si j’avais osé lui parler, tout aurait peut-être changé.', 'If I had dared to speak to him, everything might have changed.', '/si ʒa.vɛ.zo.ze lɥi paʁ.le tu.to.ʁɛ pø.tɛtʁ ʃɑ̃.ʒe/', 'see zha-veh-zoh-zay lwee par-LAY | too-toh-reh puh-tetr shahⁿ-ZHAY', ['regret']),
  sent(1463, 'Si tu m’en avais parlé, j’aurais compris.', 'If you had talked to me about it, I would have understood.', '/si ty mɑ̃.na.vɛ paʁ.le ʒo.ʁɛ kɔ̃.pʁi/', 'see tü mahⁿ-na-veh par-LAY | zhoh-reh kohⁿ-PREE', ['reproche', 'adouci'], FCVDR),
  sent(1464, 'Si tu avais pris ton parapluie, tu ne serais pas rentré trempé.', 'If you had taken your umbrella, you would not have come home soaked.', '/si ty a.vɛ pʁi tɔ̃ pa.ʁa.plɥi ty nə sə.ʁɛ pa ʁɑ̃.tʁe tʁɑ̃.pe/', 'see tü a-veh pree tohⁿ pa-ra-PLWEE | tü nuh suh-reh pa rahⁿ-tray trahⁿ-PAY', ['reproche']),
  rule(1465, 'Regret ou reproche : qu’est-ce qui change ?', 'La personne : je pour le regret, tu ou vous pour le reproche. La paire, elle, ne change pas.', 'The person: je for a regret, tu or vous for a reproach. The pair itself does not change.', '/la pɛʁ.sɔn ʒə puʁ lə ʁə.ɡʁɛ ty u vu puʁ lə ʁə.pʁɔʃ la pɛʁ ɛl nə ʃɑ̃ʒ pa/', 'la pehr-SONN | zhuh poor luh ruh-GREH | tü oo voo poor luh ruh-PROSH | la PEHR | el nuh shahⁿzh PA', ['regret', 'reproche']),
  rule(1466, 'Comment adoucir un reproche ?', 'Parle de toi dans le résultat : si tu m’en avais parlé, j’aurais compris.', 'Talk about yourself in the result: si tu m’en avais parlé, j’aurais compris.', '/paʁl də twa dɑ̃ lə ʁe.zyl.ta si ty mɑ̃.na.vɛ paʁ.le ʒo.ʁɛ kɔ̃.pʁi/', 'parl duh TWA dahⁿ luh ray-zül-TA | see tü mahⁿ-na-veh par-LAY | zhoh-reh kohⁿ-PREE', ['reproche', 'adouci']),
];

/* ── ACT 6 · LE SOULAGEMENT ─────────────────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1467, 'Si tu ne m’avais pas appelé, j’aurais raté le train.', 'If you had not called me, I would have missed the train.', '/si ty nə ma.vɛ pa.za.pə.le ʒo.ʁɛ ʁa.te lə tʁɛ̃/', 'see tü nuh ma-veh pa-za-puh-LAY | zhoh-reh ra-tay luh TREHⁿ', ['soulagement', 'negation'], FCVDR),
  sent(1468, 'Heureusement que tu m’as appelé : j’ai failli rater le train.', 'Luckily you called me: I nearly missed the train.', '/œ.ʁøz.mɑ̃ kə ty ma.za.pə.le ʒe fa.ji ʁa.te lə tʁɛ̃/', 'eu-ruhz-mahⁿ kuh tü ma-za-puh-LAY | zhay fa-yee ra-tay luh TREHⁿ', ['soulagement', 'paraphrase']),
  sent(1469, 'Si le voisin n’avait pas senti la fumée, la maison aurait brûlé.', 'If the neighbour had not smelled the smoke, the house would have burned down.', '/si lə vwa.zɛ̃ na.vɛ pa sɑ̃.ti la fy.me la mɛ.zɔ̃ o.ʁɛ bʁy.le/', 'see luh vwa-zehⁿ na-veh pa sahⁿ-tee la fü-MAY | la meh-zohⁿ oh-reh brü-LAY', ['soulagement', 'negation']),
  sent(1470, 'Si elle n’avait pas freiné, elle aurait renversé le cycliste.', 'If she had not braked, she would have knocked the cyclist over.', '/si ɛl na.vɛ pa fʁɛ.ne ɛ.lo.ʁɛ ʁɑ̃.vɛʁ.se lə si.klist/', 'see el na-veh pa freh-NAY | eh-loh-reh rahⁿ-vehr-say luh see-KLEEST', ['soulagement', 'negation'], FCVDR),
  sent(1471, 'Si nous n’avions pas relu la liste, nous serions partis sans les passeports.', 'If we had not reread the list, we would have left without the passports.', '/si nu na.vjɔ̃ pa ʁə.ly la list nu sə.ʁjɔ̃ paʁ.ti sɑ̃ le pas.pɔʁ/', 'see noo na-vyohⁿ pa ruh-lü la LEEST | noo suh-ryohⁿ par-tee sahⁿ lay pass-POR', ['soulagement', 'negation']),
  sent(1472, 'Si le médecin n’avait pas insisté, on n’aurait jamais trouvé le problème.', 'If the doctor had not insisted, the problem would never have been found.', '/si lə med.sɛ̃ na.vɛ pa.zɛ̃.sis.te ɔ̃ no.ʁɛ ʒa.mɛ tʁu.ve lə pʁɔ.blɛm/', 'see luh med-sehⁿ na-veh pa-zehⁿ-sees-TAY | ohⁿ noh-reh zha-meh troo-vay luh pro-BLEM', ['soulagement', 'negation']),
  sent(1473, 'Si tu n’étais pas passé par là, je serais resté coincé des heures dans l’ascenseur.', 'If you had not come by, I would have been stuck in the lift for hours.', '/si ty ne.tɛ pa pa.se paʁ la ʒə sə.ʁɛ ʁɛs.te kwɛ̃.se de.zœʁ dɑ̃ la.sɑ̃.sœʁ/', 'see tü nay-teh pa pa-say par LA | zhuh suh-reh res-tay kwehⁿ-say day-ZEUR | dahⁿ la-sahⁿ-SEUR', ['soulagement', 'negation']),
  sent(1474, 'J’ai failli rater le train.', 'I nearly missed the train.', '/ʒe fa.ji ʁa.te lə tʁɛ̃/', 'zhay fa-yee ra-tay luh TREHⁿ', ['soulagement', 'failli'], FCVDR),
  sent(1475, 'Sans ton appel, j’aurais raté le train.', 'Without your call, I would have missed the train.', '/sɑ̃ tɔ̃.na.pɛl ʒo.ʁɛ ʁa.te lə tʁɛ̃/', 'sahⁿ tohⁿ-na-PEL | zhoh-reh ra-tay luh TREHⁿ', ['soulagement', 'sans']),
  sent(1476, 'Sans sa ceinture, il aurait été gravement blessé.', 'Without his seatbelt, he would have been badly hurt.', '/sɑ̃ sa sɛ̃.tyʁ il o.ʁɛ.te.te ɡʁav.mɑ̃ ble.se/', 'sahⁿ sa sehⁿ-TÜR | ee-loh-reh-tay-tay grav-mahⁿ bleh-SAY', ['soulagement', 'sans']),
  sent(1477, 'Si les pompiers n’étaient pas arrivés si vite, tout l’immeuble aurait brûlé.', 'If the firefighters had not arrived so quickly, the whole building would have burned down.', '/si le pɔ̃.pje ne.tɛ pa.za.ʁi.ve si vit tu li.mœbl o.ʁɛ bʁy.le/', 'see lay pohⁿ-pyay nay-teh pa-za-ree-vay see VEET | too lee-meubl oh-reh brü-LAY', ['soulagement', 'negation']),
  sent(1478, 'Si je n’avais pas gardé le reçu, on ne m’aurait pas remboursé.', 'If I had not kept the receipt, I would not have been refunded.', '/si ʒə na.vɛ pa ɡaʁ.de lə ʁə.sy ɔ̃ nə mo.ʁɛ pa ʁɑ̃.buʁ.se/', 'see zhuh na-veh pa gar-day luh ruh-SÜ | ohⁿ nuh moh-reh pa rahⁿ-boor-SAY', ['soulagement', 'negation']),
  rule(1479, 'Si tu ne m’avais pas appelé : m’as-tu appelé ?', 'Oui. Une négation dans la paire annonce un fait positif.', 'Yes. A negative inside the pair announces a positive fact.', '/wi y.nə.ne.ɡa.sjɔ̃ dɑ̃ la pɛʁ a.nɔ̃s œ̃ fɛ pɔ.zi.tif/', 'WEE | ü-nuh-nay-ga-SYOHⁿ dahⁿ la PEHR | a-nohⁿss uhⁿ feh po-zee-TEEF', ['inverse', 'soulagement']),
  rule(1480, 'Sans + nom, au passé : que remplace-t-il ?', 'Une condition négative : sans ton appel veut dire si tu ne m’avais pas appelé.', 'A negative condition: sans ton appel means si tu ne m’avais pas appelé.', '/yn kɔ̃.di.sjɔ̃ ne.ɡa.tiv sɑ̃ tɔ̃.na.pɛl vø diʁ si ty nə ma.vɛ pa.za.pə.le/', 'ün kohⁿ-dee-syohⁿ nay-ga-TEEV | sahⁿ tohⁿ-na-PEL | vuh deer see tü nuh ma-veh pa-za-puh-LAY', ['sans']),
];

/* ── ACT 7 · L’ORDRE DES MOITIÉS ────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1481, 'J’aurais accepté si tu me l’avais demandé.', 'I would have accepted if you had asked me.', '/ʒo.ʁɛ.zak.sɛp.te si ty mə la.vɛ də.mɑ̃.de/', 'zhoh-reh-zak-sep-TAY | see tü muh la-veh duh-mahⁿ-DAY', ['ordre', 'resultat-devant'], FCVDR),
  sent(1482, 'Si tu me l’avais demandé, j’aurais accepté.', 'If you had asked me, I would have accepted.', '/si ty mə la.vɛ də.mɑ̃.de ʒo.ʁɛ.zak.sɛp.te/', 'see tü muh la-veh duh-mahⁿ-DAY | zhoh-reh-zak-sep-TAY', ['ordre', 'si-devant']),
  sent(1483, 'Nous serions venus si nous avions été invités.', 'We would have come if we had been invited.', '/nu sə.ʁjɔ̃ və.ny si nu.za.vjɔ̃.ze.te ɛ̃.vi.te/', 'noo suh-ryohⁿ vuh-NÜ | see noo-za-vyohⁿ-zay-tay ehⁿ-vee-TAY', ['ordre', 'resultat-devant']),
  sent(1484, 'Elle aurait gagné si elle ne s’était pas blessée.', 'She would have won if she had not got injured.', '/ɛ.lo.ʁɛ ɡa.ɲe si ɛl nə se.tɛ pa ble.se/', 'eh-loh-reh ga-NYAY | see el nuh say-teh pa bleh-SAY', ['ordre', 'resultat-devant']),
  sent(1485, 'Tu aurais adoré ce concert si tu étais venu.', 'You would have loved this concert if you had come.', '/ty o.ʁɛ.za.dɔ.ʁe sə kɔ̃.sɛʁ si ty e.tɛ və.ny/', 'tü oh-reh-za-do-ray suh kohⁿ-SEHR | see tü ay-teh vuh-NÜ', ['ordre', 'resultat-devant']),
  sent(1486, 'Personne ne serait parti si la réunion avait commencé à l’heure.', 'Nobody would have left if the meeting had started on time.', '/pɛʁ.sɔn nə sə.ʁɛ paʁ.ti si la ʁe.y.njɔ̃ a.vɛ kɔ.mɑ̃.se a lœʁ/', 'pehr-SONN nuh suh-reh par-TEE | see la ray-ü-nyohⁿ a-veh ko-mahⁿ-say a LEUR', ['ordre', 'resultat-devant']),
  sent(1487, 'Je l’aurais su si quelqu’un me l’avait dit.', 'I would have known if someone had told me.', '/ʒə lo.ʁɛ sy si kɛl.kœ̃ mə la.vɛ di/', 'zhuh loh-reh SÜ | see kel-kuhⁿ muh la-veh DEE', ['ordre', 'resultat-devant']),
  sent(1488, 'Ils auraient signé si le prix avait baissé.', 'They would have signed if the price had come down.', '/il.zo.ʁɛ si.ɲe si lə pʁi a.vɛ bɛ.se/', 'eel-zoh-reh see-NYAY | see luh pree a-veh beh-SAY', ['ordre', 'resultat-devant'], FCVDR),
  sent(1489, 'Qu’est-ce que tu aurais fait si tu avais été à ma place ?', 'What would you have done if you had been in my place?', '/kɛs.kə ty o.ʁɛ fɛ si ty a.vɛ.ze.te a ma plas/', 'kess-kuh tü oh-reh FEH | see tü a-veh-zay-tay a ma PLASS', ['ordre', 'question']),
  sent(1490, 'Qu’aurais-tu répondu si elle t’avait posé la question ?', 'What would you have answered if she had asked you the question?', '/ko.ʁɛ.ty ʁe.pɔ̃.dy si ɛl ta.vɛ po.ze la kɛs.tjɔ̃/', 'koh-reh-tü ray-pohⁿ-DÜ | see el ta-veh poh-zay la kess-TYOHⁿ', ['ordre', 'question', 'inversion']),
  rule(1491, 'Si arrive en second : quel temps garde-t-il ?', 'Le même : le plus-que-parfait, jamais le conditionnel passé.', 'The same one: the pluperfect, never the past conditional.', '/lə mɛm lə plys.kə.paʁ.fɛ ʒa.mɛ lə kɔ̃.di.sjɔ.nɛl pa.se/', 'luh MEM | luh plüss-kuh-par-FEH | zha-meh luh kohⁿ-dee-syo-nel pa-SAY', ['ordre', 'piege']),
  rule(1492, 'Et la virgule ?', 'Si devant, une virgule après la condition. Si derrière, le plus souvent, rien entre les deux moitiés.', 'Si in front: a comma after the condition. Si behind: most often, nothing between the two halves.', '/si də.vɑ̃ yn viʁ.ɡyl a.pʁɛ la kɔ̃.di.sjɔ̃ si dɛ.ʁjɛʁ lə ply su.vɑ̃ ʁjɛ̃ ɑ̃tʁ le dø mwa.tje/', 'see duh-VAHⁿ | ün veer-gül a-preh la kohⁿ-dee-SYOHⁿ | see deh-RYEHR | luh plü soo-VAHⁿ | ryehⁿ ahⁿtr lay duh mwa-TYAY', ['ordre', 'virgule']),
  rule(1493, 'Quel ordre choisir ?', 'Mets en premier ce qui compte le plus pour ton lecteur.', 'Put first whatever matters most to your reader.', '/mɛ ɑ̃ pʁə.mje sə ki kɔ̃t lə plys puʁ tɔ̃ lɛk.tœʁ/', 'meh ahⁿ pruh-MYAY | suh kee kohⁿt luh PLÜSS | poor tohⁿ lek-TEUR', ['ordre']),
];

/* ── ACT 8 · MÊME SI ET SAUF SI AU PASSÉ ────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1494, 'Même si j’avais su, je serais venu.', 'Even if I had known, I would have come.', '/mɛm si ʒa.vɛ sy ʒə sə.ʁɛ və.ny/', 'mem see zha-veh SÜ | zhuh suh-reh vuh-NÜ', ['meme-si'], FCVDR),
  sent(1495, 'Même si tu m’avais prévenu, je n’aurais rien changé.', 'Even if you had warned me, I would not have changed anything.', '/mɛm si ty ma.vɛ pʁe.və.ny ʒə no.ʁɛ ʁjɛ̃ ʃɑ̃.ʒe/', 'mem see tü ma-veh pray-vuh-NÜ | zhuh noh-reh ryehⁿ shahⁿ-ZHAY', ['meme-si']),
  sent(1496, 'Même s’il avait plu toute la nuit, le match a eu lieu.', 'Even though it had rained all night, the match went ahead.', '/mɛm si.la.vɛ ply tut la nɥi lə matʃ a y ljø/', 'mem see-la-veh plü toot la NWEE | luh match a ü LYUH', ['meme-si', 'reel']),
  sent(1497, 'Même si le train était parti à l’heure, nous serions arrivés en retard.', 'Even if the train had left on time, we would have arrived late.', '/mɛm si lə tʁɛ̃ e.tɛ paʁ.ti a lœʁ nu sə.ʁjɔ̃.za.ʁi.ve ɑ̃ ʁə.taʁ/', 'mem see luh trehⁿ ay-teh par-tee a LEUR | noo suh-ryohⁿ-za-ree-vay ahⁿ ruh-TAR', ['meme-si']),
  sent(1498, 'Même si nous avions couru, nous n’aurions pas eu le bus.', 'Even if we had run, we would not have caught the bus.', '/mɛm si nu.za.vjɔ̃ ku.ʁy nu no.ʁjɔ̃ pa.zy lə bys/', 'mem see noo-za-vyohⁿ koo-RÜ | noo noh-ryohⁿ pa-zü luh BÜSS', ['meme-si']),
  sent(1499, 'Je n’aurais jamais quitté Lyon, sauf si on m’avait proposé un poste à Montréal.', 'I would never have left Lyon, unless someone had offered me a job in Montréal.', '/ʒə no.ʁɛ ʒa.mɛ ki.te ljɔ̃ sof si ɔ̃ ma.vɛ pʁɔ.po.ze œ̃ pɔst a mɔ̃.ʁe.al/', 'zhuh noh-reh zha-meh kee-tay LYOHⁿ | sohf see ohⁿ ma-veh pro-poh-zay uhⁿ post a mohⁿ-ray-AL', ['sauf-si'], FCVDR),
  sent(1500, 'Elle avait promis de venir, sauf s’il neigeait.', 'She had promised to come, unless it snowed.', '/ɛ.la.vɛ pʁɔ.mi də və.niʁ sof sil nɛ.ʒɛ/', 'eh-la-veh pro-mee duh vuh-NEER | sohf seel neh-ZHEH', ['sauf-si', 'rapporte']),
  sent(1501, 'Rien n’aurait changé, sauf si quelqu’un avait prévenu la mairie à temps.', 'Nothing would have changed, unless someone had warned the town hall in time.', '/ʁjɛ̃ no.ʁɛ ʃɑ̃.ʒe sof si kɛl.kœ̃.na.vɛ pʁe.və.ny la mɛ.ʁi a tɑ̃/', 'ryehⁿ noh-reh shahⁿ-ZHAY | sohf see kel-kuhⁿ-na-veh pray-vuh-nü la meh-ree a TAHⁿ', ['sauf-si']),
  sent(1502, 'Même si elle avait gagné au loto, elle aurait gardé son travail.', 'Even if she had won the lottery, she would have kept her job.', '/mɛm si ɛ.la.vɛ ɡa.ɲe o lo.to ɛ.lo.ʁɛ ɡaʁ.de sɔ̃ tʁa.vaj/', 'mem see eh-la-veh ga-nyay oh loh-TOH | eh-loh-reh gar-day sohⁿ tra-VAHY', ['meme-si']),
  sent(1503, 'Nous aurions fait la randonnée, sauf s’il avait fait vraiment mauvais.', 'We would have done the hike, unless the weather had been really bad.', '/nu.zo.ʁjɔ̃ fɛ la ʁɑ̃.dɔ.ne sof si.la.vɛ fɛ vʁɛ.mɑ̃ mo.vɛ/', 'noo-zoh-ryohⁿ feh la rahⁿ-do-NAY | sohf see-la-veh feh vreh-mahⁿ moh-VEH', ['sauf-si']),
  rule(1504, 'Même si + plus-que-parfait, puis conditionnel passé : le résultat change-t-il ?', 'Non. Même si dit que le résultat aurait été le même.', 'No. Même si says the result would have been the same.', '/nɔ̃ mɛm si di kə lə ʁe.zyl.ta o.ʁɛ.te.te lə mɛm/', 'nohⁿ | mem see DEE | kuh luh ray-zül-ta oh-reh-tay-tay luh MEM', ['meme-si']),
  rule(1505, 'Sauf si + plus-que-parfait : que dit-il ?', 'La seule condition qui aurait tout changé.', 'The one condition that would have changed everything.', '/la sœl kɔ̃.di.sjɔ̃ ki o.ʁɛ tu ʃɑ̃.ʒe/', 'la seul kohⁿ-dee-SYOHⁿ | kee oh-reh too shahⁿ-ZHAY', ['sauf-si']),
  rule(1506, 'Même si + plus-que-parfait, puis un passé composé ?', 'Un fait réel que tu concèdes : il avait plu, et le match a eu lieu.', 'A real fact you concede: it had rained, and the match went ahead.', '/œ̃ fɛ ʁe.ɛl kə ty kɔ̃.sɛd il a.vɛ ply e lə matʃ a y ljø/', 'uhⁿ feh ray-EL kuh tü kohⁿ-SED | ee-la-veh PLÜ | ay luh match a ü LYUH', ['meme-si', 'reel']),
  sent(1507, 'Même si j’étais parti plus tôt, j’aurais raté le début.', 'Even if I had left earlier, I would have missed the beginning.', '/mɛm si ʒe.tɛ paʁ.ti ply to ʒo.ʁɛ ʁa.te lə de.by/', 'mem see zhay-teh par-tee plü TOH | zhoh-reh ra-tay luh day-BÜ', ['meme-si']),
];

/* ── ACT 9 · LES PIÈGES ─────────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1508, 'Si j’avais su, je ne serais pas venu.', 'If I had known, I would not have come.', '/si ʒa.vɛ sy ʒə nə sə.ʁɛ pa və.ny/', 'see zha-veh SÜ | zhuh nuh suh-reh pa vuh-NÜ', ['piege', 'correct'], FCVDR),
  rule(1509, 'Peut-on écrire si j’aurais su ?', 'Non. On l’entend à l’oral familier, mais c’est une faute : on dit et on écrit si j’avais su.', 'No. You hear it in casual speech, but it is a mistake: you say and write si j’avais su.', '/nɔ̃ ɔ̃ lɑ̃.tɑ̃ a lɔ.ʁal fa.mi.lje mɛ sɛ.tyn fot ɔ̃ di e ɔ̃.ne.kʁi si ʒa.vɛ sy/', 'nohⁿ | ohⁿ lahⁿ-tahⁿ a lo-ral fa-mee-LYAY | meh seh-tün FOHT | ohⁿ dee ay ohⁿ-nay-kree see zha-veh SÜ', ['piege']),
  sent(1510, 'Je serais venue avec plaisir si j’avais été libre.', 'I would gladly have come if I had been free.', '/ʒə sə.ʁɛ və.ny a.vɛk plɛ.ziʁ si ʒa.vɛ.ze.te libʁ/', 'zhuh suh-reh vuh-nü a-vek pleh-ZEER | see zha-veh-zay-tay LEEBR', ['piege', 'correct']),
  rule(1511, 'Je serai venu ou je serais venu ?', 'Je serais venu : avec un s, c’est le conditionnel. Sans s, c’est un futur antérieur.', 'Je serais venu: with an s, it is the conditional. Without it, it is a future perfect.', '/ʒə sə.ʁɛ və.ny a.vɛ.kœ̃ ɛs sɛ lə kɔ̃.di.sjɔ.nɛl sɑ̃ ɛs sɛ.tœ̃ fy.ty.ʁɑ̃.te.ʁjœʁ/', 'zhuh suh-reh vuh-NÜ | a-veh-kuhⁿ ESS | seh luh kohⁿ-dee-syo-NEL | sahⁿ ESS | seh-tuhⁿ fü-tü-rahⁿ-tay-RYEUR', ['piege']),
  sent(1512, 'Il m’a demandé si j’avais fini le rapport.', 'He asked me whether I had finished the report.', '/il ma də.mɑ̃.de si ʒa.vɛ fi.ni lə ʁa.pɔʁ/', 'eel ma duh-mahⁿ-DAY | see zha-veh fee-nee luh ra-POR', ['question', 'rapporte'], FCVDR),
  sent(1513, 'Elle voulait savoir si nous avions déjà mangé.', 'She wanted to know whether we had already eaten.', '/ɛl vu.lɛ sa.vwaʁ si nu.za.vjɔ̃ de.ʒa mɑ̃.ʒe/', 'el voo-leh sa-VWAR | see noo-za-vyohⁿ day-zha mahⁿ-ZHAY', ['question', 'rapporte']),
  sent(1514, 'Je me demandais si tu avais reçu mon message.', 'I was wondering whether you had got my message.', '/ʒə mə də.mɑ̃.dɛ si ty a.vɛ ʁə.sy mɔ̃ me.saʒ/', 'zhuh muh duh-mahⁿ-DEH | see tü a-veh ruh-sü mohⁿ may-SAZH', ['question', 'rapporte']),
  sent(1515, 'Il a dit que si j’avais fini, je pouvais partir.', 'He said that if I had finished, I could leave.', '/il a di kə si ʒa.vɛ fi.ni ʒə pu.vɛ paʁ.tiʁ/', 'ee-la DEE | kuh see zha-veh fee-NEE | zhuh poo-veh par-TEER', ['rapporte', 'condition-reelle']),
  sent(1516, 'Si j’avais fini, je serais parti.', 'If I had finished, I would have left.', '/si ʒa.vɛ fi.ni ʒə sə.ʁɛ paʁ.ti/', 'see zha-veh fee-NEE | zhuh suh-reh par-TEE', ['passe', 'contraste']),
  sent(1517, 'Le prof nous a dit que si nous avions terminé, nous pouvions sortir.', 'The teacher told us that if we had finished, we could go out.', '/lə pʁɔf nu.za di kə si nu.za.vjɔ̃ tɛʁ.mi.ne nu pu.vjɔ̃ sɔʁ.tiʁ/', 'luh prof noo-za DEE | kuh see noo-za-vyohⁿ tehr-mee-NAY | noo poo-vyohⁿ sor-TEER', ['rapporte', 'condition-reelle']),
  sent(1518, 'Quand j’étais petit, si j’avais fini mes devoirs, j’avais le droit de sortir.', 'When I was little, if I had finished my homework, I was allowed to go out.', '/kɑ̃ ʒe.tɛ pə.ti si ʒa.vɛ fi.ni me də.vwaʁ ʒa.vɛ lə dʁwa də sɔʁ.tiʁ/', 'kahⁿ zhay-teh puh-TEE | see zha-veh fee-nee may duh-VWAR | zha-veh luh drwa duh sor-TEER', ['habitude']),
  rule(1519, 'Si + plus-que-parfait dit-il toujours que ça n’a pas eu lieu ?', 'Non. Un verbe de question devant, ou un imparfait derrière, et il n’y a plus d’hypothèse.', 'No. A question verb in front of it, or an imparfait after it, and there is no hypothesis left.', '/nɔ̃ œ̃ vɛʁb də kɛs.tjɔ̃ də.vɑ̃ u œ̃.nɛ̃.paʁ.fɛ dɛ.ʁjɛʁ e il ni ja ply di.pɔ.tɛz/', 'nohⁿ | uhⁿ vehrb duh kess-tyohⁿ duh-VAHⁿ | oo uhⁿ-nehⁿ-par-feh deh-RYEHR | ay eel nee ya plü dee-po-TEZ', ['piege', 'rapporte']),
  sent(1520, 'Si j’avais su que tu étais malade, je serais passé te voir.', 'If I had known you were ill, I would have come round to see you.', '/si ʒa.vɛ sy kə ty e.tɛ ma.lad ʒə sə.ʁɛ pa.se tə vwaʁ/', 'see zha-veh sü kuh tü ay-teh ma-LAD | zhuh suh-reh pa-say tuh VWAR', ['passe', 'savoir-que']),
  sent(1521, 'Si tu avais pu venir, ça aurait été parfait.', 'If you had been able to come, it would have been perfect.', '/si ty a.vɛ py və.niʁ sa o.ʁɛ.te.te paʁ.fɛ/', 'see tü a-veh pü vuh-NEER | sa oh-reh-tay-tay par-FEH', ['passe', 'modal']),
  sent(1522, 'Je me demandais si elle aurait le temps.', 'I was wondering whether she would have time.', '/ʒə mə də.mɑ̃.dɛ si ɛ.lo.ʁɛ lə tɑ̃/', 'zhuh muh duh-mahⁿ-DEH | see eh-loh-reh luh TAHⁿ', ['question', 'rapporte']),
];

/* ── ACT 10 · REFAIRE L’HISTOIRE ────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1523, 'Si le chemin de fer n’était pas passé par Saint-Aubin, le village serait resté minuscule.', 'If the railway had not gone through Saint-Aubin, the village would have stayed tiny.', '/si lə ʃmɛ̃ d fɛʁ ne.tɛ pa pa.se paʁ sɛ̃.to.bɛ̃ lə vi.laʒ sə.ʁɛ ʁɛs.te mi.nys.kyl/', 'see luh shmehⁿ duh FEHR | nay-teh pa pa-say par sehⁿ-toh-BEHⁿ | luh vee-lazh suh-reh res-tay mee-nüss-KÜL', ['uchronie']),
  sent(1524, 'Si l’usine n’avait pas ouvert, les familles seraient parties vers la ville.', 'If the factory had not opened, the families would have left for the city.', '/si ly.zin na.vɛ pa.zu.vɛʁ le fa.mij sə.ʁɛ paʁ.ti vɛʁ la vil/', 'see lü-ZEEN | na-veh pa-zoo-VEHR | lay fa-meey suh-reh par-tee vehr la VEEL', ['uchronie']),
  sent(1525, 'Si la rivière n’avait pas débordé, on n’aurait jamais construit le pont.', 'If the river had not flooded, the bridge would never have been built.', '/si la ʁi.vjɛʁ na.vɛ pa de.bɔʁ.de ɔ̃ no.ʁɛ ʒa.mɛ kɔ̃s.tʁɥi lə pɔ̃/', 'see la ree-vyehr na-veh pa day-bor-DAY | ohⁿ noh-reh zha-meh kohⁿs-trwee luh POHⁿ', ['uchronie'], FCVDR),
  sent(1526, 'Si ma grand-mère n’avait pas émigré, je ne serais jamais né ici.', 'If my grandmother had not emigrated, I would never have been born here.', '/si ma ɡʁɑ̃.mɛʁ na.vɛ pa.ze.mi.ɡʁe ʒə nə sə.ʁɛ ʒa.mɛ ne i.si/', 'see ma grahⁿ-mehr na-veh pa-zay-mee-GRAY | zhuh nuh suh-reh zha-meh nay ee-SEE', ['uchronie', 'famille']),
  sent(1527, 'Avec des si, on mettrait Paris en bouteille.', 'With ifs, you could put Paris in a bottle.', '/a.vɛk de si ɔ̃ mɛ.tʁɛ pa.ʁi ɑ̃ bu.tɛj/', 'a-vek day SEE | ohⁿ meh-treh pa-ree ahⁿ boo-TEHY', ['proverbe']),
  sent(1528, 'Si Internet n’avait pas existé, nous nous serions écrit des lettres.', 'If the internet had not existed, we would have written each other letters.', '/si ɛ̃.tɛʁ.nɛt na.vɛ pa.zɛɡ.zis.te nu nu sə.ʁjɔ̃.ze.kʁi de lɛtʁ/', 'see ehⁿ-tehr-NET | na-veh pa-zeg-zees-TAY | noo noo suh-ryohⁿ-zay-kree day LETR', ['quotidien']),
  sent(1529, 'Si j’avais choisi la médecine, je serais devenue chirurgienne.', 'If I had chosen medicine, I would have become a surgeon.', '/si ʒa.vɛ ʃwa.zi la med.sin ʒə sə.ʁɛ də.və.ny ʃi.ʁyʁ.ʒjɛn/', 'see zha-veh shwa-zee la med-SEEN | zhuh suh-reh duh-vuh-nü shee-rür-ZHYENN', ['quotidien']),
  sent(1530, 'Et si le train n’était jamais arrivé ?', 'And what if the train had never come?', '/e si lə tʁɛ̃ ne.tɛ ʒa.mɛ a.ʁi.ve/', 'ay see luh TREHⁿ | nay-teh zha-meh a-ree-VAY', ['uchronie', 'et-si']),
  sent(1531, 'Qu’est-ce qui se serait passé si personne n’avait rien dit ?', 'What would have happened if nobody had said anything?', '/kɛs.ki sə sə.ʁɛ pa.se si pɛʁ.sɔn na.vɛ ʁjɛ̃ di/', 'kess-kee suh suh-reh pa-SAY | see pehr-SONN na-veh ryehⁿ DEE', ['uchronie', 'question']),
  sent(1532, 'Si le pont avait cédé, des dizaines de familles auraient été coupées du monde.', 'If the bridge had given way, dozens of families would have been cut off from the world.', '/si lə pɔ̃ a.vɛ se.de de di.zɛn də fa.mij o.ʁɛ.te.te ku.pe dy mɔ̃d/', 'see luh pohⁿ a-veh say-DAY | day dee-zenn duh fa-MEEY | oh-reh-tay-tay koo-pay dü MOHⁿD', ['uchronie']),
  sent(1533, 'On ne saura jamais ce qui serait arrivé si la compagnie avait choisi l’autre tracé.', 'We will never know what would have happened if the company had chosen the other route.', '/ɔ̃ nə so.ʁa ʒa.mɛ sə ki sə.ʁɛ.ta.ʁi.ve si la kɔ̃.pa.ɲi a.vɛ ʃwa.zi lotʁ tʁa.se/', 'ohⁿ nuh soh-ra zha-MEH | suh kee suh-reh-ta-ree-VAY | see la kohⁿ-pa-nyee a-veh shwa-zee lohtr tra-SAY', ['uchronie']),
  rule(1534, 'Qu’est-ce qu’une uchronie ?', 'Un récit qui part d’un si : un fait réel changé, et toutes ses suites imaginées.', 'A story that starts from an if: one real fact changed, and all its consequences imagined.', '/œ̃ ʁe.si ki paʁ dœ̃ si œ̃ fɛ ʁe.ɛl ʃɑ̃.ʒe e tut se sɥit i.ma.ʒi.ne/', 'uhⁿ ray-SEE kee par duhⁿ SEE | uhⁿ feh ray-el shahⁿ-ZHAY | ay toot say sweet ee-ma-zhee-NAY', ['uchronie']),
  rule(1535, 'Avec des si, on mettrait Paris en bouteille : que veut dire le proverbe ?', 'Qu’avec des si, on peut tout imaginer, et que ça ne change rien aux faits.', 'That with ifs you can imagine anything, and that it changes nothing about the facts.', '/ka.vɛk de si ɔ̃ pø tu.ti.ma.ʒi.ne e kə sa nə ʃɑ̃ʒ ʁjɛ̃ o fɛ/', 'ka-vek day SEE | ohⁿ puh too-tee-ma-zhee-NAY | ay kuh sa nuh shahⁿzh ryehⁿ oh FEH', ['proverbe']),
  sent(1536, 'Sans la gare, Saint-Aubin serait resté un hameau.', 'Without the station, Saint-Aubin would have stayed a hamlet.', '/sɑ̃ la ɡaʁ sɛ̃.to.bɛ̃ sə.ʁɛ ʁɛs.te œ̃ a.mo/', 'sahⁿ la GAR | sehⁿ-toh-BEHⁿ suh-reh res-tay uhⁿ a-MOH', ['uchronie', 'sans']),
];

/* ── ACT 11 · TA MISSION : LE TOURNANT ──────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1537, 'Tout a basculé un mardi de novembre.', 'Everything changed one Tuesday in November.', '/tu.ta bas.ky.le œ̃ maʁ.di də nɔ.vɑ̃bʁ/', 'too-ta bass-kü-LAY | uhⁿ mar-dee duh no-VAHⁿBR', ['recit', 'tournant']),
  sent(1538, 'Si je n’avais pas raté ce train, je ne serais jamais entrée dans ce café.', 'If I had not missed that train, I would never have gone into that café.', '/si ʒə na.vɛ pa ʁa.te sə tʁɛ̃ ʒə nə sə.ʁɛ ʒa.mɛ.zɑ̃.tʁe dɑ̃ sə ka.fe/', 'see zhuh na-veh pa ra-tay suh TREHⁿ | zhuh nuh suh-reh zha-meh-zahⁿ-tray dahⁿ suh ka-FAY', ['recit'], FCVDR),
  sent(1539, 'Si Karim ne m’avait pas demandé l’heure, nous ne nous serions jamais parlé.', 'If Karim had not asked me the time, we would never have spoken to each other.', '/si ka.ʁim nə ma.vɛ pa də.mɑ̃.de lœʁ nu nə nu sə.ʁjɔ̃ ʒa.mɛ paʁ.le/', 'see ka-reem nuh ma-veh pa duh-mahⁿ-day LEUR | noo nuh noo suh-ryohⁿ zha-meh par-LAY', ['recit']),
  sent(1540, 'Même si j’avais su ce qui m’attendait, je serais montée dans l’avion.', 'Even if I had known what lay ahead, I would have got on the plane.', '/mɛm si ʒa.vɛ sy sə ki ma.tɑ̃.dɛ ʒə sə.ʁɛ mɔ̃.te dɑ̃ la.vjɔ̃/', 'mem see zha-veh sü suh kee ma-tahⁿ-DEH | zhuh suh-reh mohⁿ-tay dahⁿ la-VYOHⁿ', ['recit', 'meme-si']),
  sent(1541, 'Avec le recul, je ne regrette rien.', 'Looking back, I regret nothing.', '/a.vɛk lə ʁə.kyl ʒə nə ʁə.ɡʁɛt ʁjɛ̃/', 'a-vek luh ruh-KÜL | zhuh nuh ruh-gret RYEHⁿ', ['recit', 'conclusion']),
  sent(1542, 'Si c’était à refaire, je referais tout.', 'If I had it to do again, I would do it all again.', '/si se.tɛ.ta ʁə.fɛʁ ʒə ʁə.fə.ʁɛ tu/', 'see say-teh-ta ruh-FEHR | zhuh ruh-fuh-reh TOO', ['recit', 'conclusion', 'irreel']),
  sent(1543, 'Qui sait ce que je serais devenue si j’étais restée à Lyon ?', 'Who knows what would have become of me if I had stayed in Lyon?', '/ki sɛ sə kə ʒə sə.ʁɛ də.və.ny si ʒe.tɛ ʁɛs.te a ljɔ̃/', 'kee SEH | suh kuh zhuh suh-reh duh-vuh-NÜ | see zhay-teh res-tay a LYOHⁿ', ['recit', 'question']),
  sent(1544, 'Si ma sœur ne m’avait pas poussée, je n’aurais jamais postulé.', 'If my sister had not pushed me, I would never have applied.', '/si ma sœʁ nə ma.vɛ pa pu.se ʒə no.ʁɛ ʒa.mɛ pɔs.ty.le/', 'see ma seur nuh ma-veh pa poo-SAY | zhuh noh-reh zha-meh pos-tü-LAY', ['recit', 'soulagement']),
  sent(1545, 'Ce jour-là, tout aurait pu s’arrêter.', 'That day, everything could have stopped.', '/sə ʒuʁ.la tu.to.ʁɛ py sa.ʁɛ.te/', 'suh zhoor-LA | too-toh-reh pü sa-reh-TAY', ['recit']),
  sent(1546, 'Si j’avais écouté mes peurs, je serais restée chez moi.', 'If I had listened to my fears, I would have stayed at home.', '/si ʒa.vɛ.ze.ku.te me pœʁ ʒə sə.ʁɛ ʁɛs.te ʃe mwa/', 'see zha-veh-zay-koo-tay may PEUR | zhuh suh-reh res-tay shay MWA', ['recit'], FCVDR),
  rule(1547, 'Que doit contenir ton récit ?', 'Un tournant, trois si au passé, un même si ou un sauf si, et ce qui s’est vraiment passé.', 'A turning point, three past ifs, a même si or a sauf si, and what really happened.', '/œ̃ tuʁ.nɑ̃ tʁwa si o pa.se œ̃ mɛm si u œ̃ sof si e sə ki sɛ vʁɛ.mɑ̃ pa.se/', 'uhⁿ toor-NAHⁿ | trwa see oh pa-SAY | uhⁿ mem see oo uhⁿ sohf SEE | ay suh kee seh vreh-mahⁿ pa-SAY', ['ecrire']),
  rule(1548, 'Avant d’envoyer : que relis-tu ?', 'Chaque si : un plus-que-parfait derrière lui, un conditionnel passé en face.', 'Every si: a pluperfect after it, a past conditional opposite.', '/ʃak si œ̃ plys.kə.paʁ.fɛ dɛ.ʁjɛʁ lɥi œ̃ kɔ̃.di.sjɔ.nɛl pa.se ɑ̃ fas/', 'shak SEE | uhⁿ plüss-kuh-par-feh deh-ryehr LWEE | uhⁿ kohⁿ-dee-syo-nel pa-say ahⁿ FASS', ['ecrire']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS
 *
 *  Held here so the readings, the questions and the quiz cannot drift
 *  apart. The act 1, act 10 and act 11 texts are the longer readings (161,
 *  205 and 185 words). Every act from 3 to 10 ENDS on a short text (60 to 120
 *  words) with the structure inside it, per B2-BUILD-LOG « In a text ».
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1. 161 words. Inès's blog. Four past pairs, all « the opposite of
 *  the facts ». Rows 1402, 1403 and 1404 are quoted from it verbatim. */
export const TEXTE_TRAIN = "Il y a dix ans, un mardi de novembre, j’ai raté le train de 17 h 10 à la gare de Lyon Part-Dieu. J’avais lu le mauvais horaire, celui de l’été. Le train suivant partait deux heures plus tard, alors je suis entrée dans le café de la gare pour attendre.\n\nIl ne restait qu’une place, à côté d’un Montréalais qui cherchait une prise pour recharger son téléphone. Il s’appelait Karim. Nous avons parlé deux heures sans voir le temps passer.\n\nAujourd’hui, j’habite à Montréal, et Karim est mon mari. Je repense souvent à ce soir-là. Si j’avais vérifié l’horaire, je n’aurais pas raté le train. Si j’avais pris le train de 17 h 10, je n’aurais jamais rencontré Karim. Et si le café avait été plein, je serais restée sur le quai.\n\nMa mère, elle, répète toujours la même chose : « Si tu étais rentrée ce soir-là, tu aurais épousé le fils des voisins. » Elle plaisante, bien sûr. Enfin, je crois.";

/** Act 3. 94 words. The si half: avoir, être, a pronominal, a negation. */
export const TEXTE_CODE = "Vendredi soir, Élodie est arrivée devant l’immeuble de sa sœur avec un gâteau. Elle avait oublié le code de la porte, et son téléphone était vide. Elle a attendu quarante minutes sous la pluie. Plus tard, sa sœur lui a dit en riant : « Si tu m’avais appelée avant de partir, je t’aurais redonné le code. Si tu t’étais souvenue du code, tu serais entrée tout de suite. Et si tu n’avais pas oublié de charger ton téléphone, tu ne serais pas restée dehors. » Élodie a répondu que le gâteau, lui, était resté au sec.";

/** Act 4. 97 words. The result half: aurions, serions, aurait. */
export const TEXTE_MUSEE = "Samedi dernier, nous sommes allés à Québec pour voir l’exposition du musée. Nous n’avions pas regardé les horaires : le musée fermait à dix-sept heures, et nous sommes arrivés à dix-sept heures cinq. Sur le trottoir, Malik a fait le compte. Si nous étions partis une heure plus tôt, nous aurions vu l’exposition. Si nous n’avions pas déjeuné si longtemps, nous serions arrivés à temps. Et si j’avais acheté les billets en ligne, on nous aurait laissés entrer par la porte des groupes. Nous avons fini la journée dans un café du Vieux-Québec, et personne ne s’est plaint.";

/** Act 5. 83 words. Two regrets, one softened reproach. */
export const TEXTE_COURRIEL = "Bonjour à tous,\n\nLa présentation de mardi ne s’est pas bien passée, et j’en porte ma part. Si j’avais relu les diapositives lundi soir, j’aurais vu que les chiffres dataient de l’an dernier. Si nous avions répété ensemble, nous ne nous serions pas coupé la parole devant le client. Et si vous m’aviez prévenue du retard de Thomas, j’aurais changé l’ordre des interventions.\n\nJe ne cherche pas de coupable. La prochaine fois, nous répéterons la veille, et chacun saura quand il parle.\n\nSophie";

/** Act 6. 93 words. Relief: every negative pair announces a positive fact. */
export const TEXTE_FUMEE = "Dimanche, vers trois heures du matin, M. Lefebvre s’est réveillé en toussant. Une odeur de brûlé montait de l’appartement du dessous. Il a frappé chez sa voisine, puis il a appelé les pompiers. Une casserole oubliée sur la cuisinière avait pris feu. Le lendemain, la voisine lui a apporté des croissants. « Si vous ne vous étiez pas réveillé, la cuisine aurait brûlé. Si vous n’aviez pas frappé si fort, je ne me serais pas levée. Sans vous, je ne sais pas ce qui serait arrivé. » M. Lefebvre, gêné, a surtout parlé des croissants.";

/** Act 7. 88 words. A farewell speech: three results first, one si first. */
export const TEXTE_DISCOURS = "Chers collègues,\n\nje serais partie bien plus tôt si vous n’aviez pas été là. Je n’aurais jamais tenu la première année si Nadia ne m’avait pas montré les dossiers, un par un, le soir après dix-huit heures. Si Paul ne m’avait pas prêté son bureau, j’aurais travaillé dans le couloir pendant six mois. Et je n’aurais pas appris la moitié de ce que je sais si vous ne m’aviez pas posé autant de questions.\n\nAlors merci. Je pars à Sherbrooke, mais une partie de moi reste ici.\n\nCamille";

/** Act 8. 92 words. Même si with a real past, même si and sauf si
 *  hypothetical, and a reported sauf si. */
export const TEXTE_MARATHON = "Le marathon de Sherbrooke a eu lieu dimanche sous une pluie battante. Même s’il avait plu toute la nuit, les organisateurs ont maintenu la course. Ils l’avaient annoncé dès jeudi : le départ serait donné à huit heures, sauf si la rivière débordait. Karine a terminé en quatre heures, trempée mais ravie. « Même si j’avais su qu’il pleuvrait autant, je serais venue, dit-elle. Rien ne m’aurait retenue chez moi, sauf si on avait annulé la course. » Son mari, lui, est resté au sec : même si le soleil avait brillé, il n’aurait pas couru.";

/** Act 9. 96 words. Four si + plus-que-parfait, ONE hypothesis. The film
 *  line is quoted as an error, and the text says so. */
export const TEXTE_DIALLO = "Au lycée, M. Diallo avait une règle simple. Il nous avait dit que si nous avions fini l’exercice, nous pouvions lire en silence. Un jour, Lucas lui a demandé s’il avait déjà corrigé nos copies. M. Diallo a souri : il voulait surtout savoir si nous avions vraiment travaillé. Des années plus tard, Lucas m’a écrit : « Si j’avais su que M. Diallo lisait tout, je me serais appliqué. » Et il a ajouté, pour rire : « Si j’aurais su, j’aurais pas venu. » C’est la réplique d’un vieux film, et c’est exactement la faute que M. Diallo soulignait en rouge.";

/** Act 10. 205 words. A local chronicle about an INVENTED village (§A.7).
 *  Global, detail, inference and stance questions. */
export const TEXTE_CHRONIQUE = "Et si le train n’était jamais arrivé ?\n\nEn 1885, la compagnie de chemin de fer hésitait entre deux tracés : l’un passait par Saint-Aubin, l’autre par le village voisin de Lac-Vert. Elle a choisi Saint-Aubin, presque par hasard, parce que le terrain y était plus plat.\n\nTout le reste en découle. Si le chemin de fer n’était pas passé par Saint-Aubin, le village serait resté minuscule. Sans la gare, l’usine de meubles ne se serait jamais installée ici, et si l’usine n’avait pas ouvert, les familles seraient parties vers la ville. Lac-Vert, lui, aurait grandi à notre place : c’est là qu’on aurait construit l’école, l’église et l’hôpital.\n\nCertains historiens trouvent ce jeu inutile. Avec des si, disent-ils, on mettrait Paris en bouteille. Ils n’ont pas tort : on ne saura jamais ce qui serait arrivé si la compagnie avait choisi l’autre tracé. Mais imaginer l’autre chemin nous apprend quelque chose sur celui qu’on a pris. Il nous rappelle que notre ville n’était pas inévitable, et qu’un détail, un terrain plat, a décidé de la vie de milliers de personnes.\n\nÀ Lac-Vert, on raconte encore l’histoire autrement : si les ingénieurs avaient pris la peine de monter la colline, ils auraient découvert la plus belle vue de la région.";

/** Act 10, the closing text. 85 words. Everyday what-ifs, a concession,
 *  the proverb, and a question put to the reader. */
export const TEXTE_COURRIER = "Chère rubrique,\n\nil y a vingt ans, j’ai refusé un poste à Dakar parce que ma fille venait de naître. Si j’avais accepté, j’aurais découvert l’Afrique de l’Ouest, et j’aurais sans doute changé de métier. Mais je n’aurais pas vu ma fille faire ses premiers pas. Même si on me l’avait proposé deux fois, j’aurais dit non. « Avec des si, on mettrait Paris en bouteille », me répète mon mari. Il a raison, mais j’aime ce jeu. Et vous, qu’auriez-vous fait à ma place ?\n\nHélène, Trois-Rivières";

/** Act 11. 185 words. The model the learner imitates in the task. */
export const TEXTE_MODELE = "Le jour où tout a basculé\n\nTout a basculé un mardi de novembre. J’avais vingt-quatre ans, un contrat de six mois à Lyon et aucune envie de partir. Ce soir-là, j’ai raté le train de 17 h 10, et je suis entrée dans le café de la gare.\n\nSi je n’avais pas raté ce train, je ne serais jamais entrée dans ce café. Si Karim ne m’avait pas demandé l’heure, nous ne nous serions jamais parlé. Et s’il n’avait pas insisté pour m’écrire, je l’aurais sans doute oublié au bout d’une semaine.\n\nSix mois plus tard, il m’a proposé de le rejoindre à Montréal. J’ai hésité longtemps. Si j’avais écouté mes peurs, je serais restée chez moi. Si ma sœur ne m’avait pas poussée, je n’aurais jamais postulé à l’université de Montréal. Même si j’avais su ce qui m’attendait, les hivers, la solitude des premiers mois, je serais montée dans l’avion.\n\nQui sait ce que je serais devenue si j’étais restée à Lyon ? Avec des si, on mettrait Paris en bouteille. Avec le recul, je ne regrette rien. Si c’était à refaire, je referais tout.";

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. WHAT THE APP CAN AND CANNOT TEST HERE
 *
 *  fold() = NFD, strip combining marks, lowercase, strip . , ! ? ; : « » ( )
 *  [ ] and apostrophes/hyphens, strip whitespace. Measured consequences:
 *
 *    avais / aurais        different letters, TYPEABLE and AUDIBLE
 *    serais / serai        different letters, TYPEABLE (the ear barely can)
 *    étais parti / avais parti   different words, TYPEABLE
 *    s’il / si il          ONE STRING: the apostrophe folds away. Never the point.
 *    the comma             folds away: tested by mcq, never by typeIn
 * ══════════════════════════════════════════════════════════════════════════ */

export const WANTED_AND_IMPOSSIBLE: readonly { want: string; why: string }[] = [
  { want: 'a listenChoose between « je serai venu » and « je serais venu »', why: 'Many speakers barely separate [e] from [ɛ] at the end of a word (lesson 8 in B1 measured it). The lesson tests serai / serais by typeIn and errorSpot, and listens for the SI half instead (avais against aurais), which is audible everywhere.' },
  { want: 'a typeIn resting on the comma after a leading si half', why: 'fold() strips commas. The comma is tested by mcq (act 7) only.' },
  { want: 'an agreement letter as the only difference (restée / resté)', why: 'The narrator is unknown in most items. Agreement is taught in act 3 and tested only where the subject is named (elle, Élodie).' },
];

/** Error forms the lesson prints on purpose, only where it marks them wrong. */
export const WRONG_FORMS = [
  'si j’aurais su', 'si j’aurais eu', 'si tu m’aurais dit', 'je serai venu',
  'j’aurai accepté', 'si j’avais parti', 'si je vérifiais l’horaire (for yesterday)',
] as const;
