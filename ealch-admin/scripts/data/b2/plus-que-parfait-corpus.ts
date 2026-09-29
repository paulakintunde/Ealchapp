// b2.01.l1 « Le plus-que-parfait »: the authored corpus, the imports and the
// citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b1.04
// and b1.10), under the B2 rules of B2-BUILD-LOG.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b2.02 to b2.04 may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: the first lesson of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE PLUS-QUE-PARFAIT, BUILT AND USED AS A TENSE IN ITS OWN RIGHT.
//
//     la forme          avoir or être at the imparfait + the participle, the
//                       auxiliary chosen exactly as in the passé composé
//     les accords       être: with the subject; avoir: with a direct object
//                       placed before (que, le, la, les), never otherwise
//     les pronominaux   always être (je m'étais levé), and the passé composé
//                       exceptions kept (elles s'étaient téléphoné, elle
//                       s'était coupé les cheveux)
//     la ligne          imparfait (en cours), passé composé (ensuite),
//                       plus-que-parfait (avant), around ONE past reference
//                       point (« le repère »)
//     le récit          quand / lorsque + passé composé with a
//                       plus-que-parfait, the flashback, and NO plus-que-
//                       parfait when the facts are told in order
//     les adverbes      déjà, pas encore, jamais, souvent, à peine, bien
//                       between the auxiliary and the participle; « venait
//                       de » beside « était juste parti »
//     le discours       expliquer, raconter, apprendre, savoir, croire que
//                       + plus-que-parfait; relative clauses (le livre que tu
//                       m'avais prêté); indirect questions (si j'avais déjà)
//     le si             si + plus-que-parfait for a past that did not happen,
//                       and « si seulement » for regret: the BRIDGE to
//                       lessons 2 and 3 in B2 (conditionnel passé, past-unreal
//                       si), which build the result half
//     les fausses pistes « avait » that is an imparfait (avait faim, avait du
//                       retard), a state with être (la porte était fermée),
//                       imparfait + depuis, and the English « had » that
//                       French tells with a passé composé
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 1 in B1    the imparfait of avoir and être (reframe quoted)
//     lessons 3, 4 in B1 décor and action (b1.03's reframe quoted), the
//                       meaning pairs
//     lesson 10 in B1   si + plus-que-parfait for RECOGNITION (act 11);
//                       its rows 1209, 1352, 1353 are reused here
//     lesson 19 in B1   the plus-que-parfait as a reported passé composé
//                       (reframe quoted, rows 1109 to 1125 reused)
//   FORWARD (named, never built): lessons 2 and 3 in B2.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `recits-au-passe` (« Les récits au passé », fondations, a2-b2).
//     Sub-themes to set in Postgres at import: « raconter au passé », « le
//     passé du passé », « l'ordre des événements ». The seed (read
//     2026-09-27, 19,308 items) holds 731 rows in the theme, none `fr.b2`.
//     Postgres was NOT probed by this author; the block was assigned by the
//     orchestrator (« everything up to 1515 is taken at some level »).
//
//  2. ID BLOCK: `.1600`-`.1799`, assigned by the brief. Authored:
//     `.1600`-`.1798` with gaps between act blocks (see ID_RANGES and the
//     act banners). Nothing outside the block.
//
//  3. NO VOCAB-TYPE NON-SENTENCE ROW is authored, so the flashcard hub's
//     headword rule (theme + headword) cannot clash with any published row.
//     Every row is a sentence, a conjugation card, a gapfill card or a rule
//     card. Every `fr` was checked against the seed for an exact twin: none.
//
//  4. REUSED ROWS. B1 is live (v76), so `src()` resolves lessons 3, 4, 10
//     and 19. They are reused BY ID, not twinned (§E).
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER. « personne » pehr-SONN,
//     « semaine » suh-MENN, « Lausanne » loh-ZANN, « à peine » a PENN: the
//     doubled consonant is for the checker, not the ear. No U+203F anywhere,
//     IPA included.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed does.
//     The one `scenario` uses ’ only and embeds no corpus row.
//
//  7. NO verbCheck ON THE CONJUGATION CARDS. The publish gate checks verbCheck
//     against verbecc's own tense keys, and no published row carries a
//     plus-que-parfait target yet, so the key spelling is unproven. Left for
//     import (open question in the lesson header).
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item, Register } from '../../../../ealch-v2/src/content/schema.ts';
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'b2.01',
  seq: 1,
  title: 'The Pluperfect',
  sub: 'Le plus-que-parfait',
  canDo: 'Can build the plus-que-parfait with the right auxiliary and agreements, including pronominal verbs, and use it to tell what had already happened before a past reference point: in a narrative beside the passé composé and the imparfait, with déjà, pas encore and jamais, in reported speech, and after si for a past that did not happen',
  prereqUnitIds: ['b1.01', 'b1.03', 'b1.04', 'b1.10', 'b1.19'],
} as const;

export const LESSON_ID = 'b2.01.l1';
export const THEME = 'recits-au-passe';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1600, 1799]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan in
 *  B2-BUILD-LOG.md numbers b2.01 to b2.34 in trail order.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMP_FORM_UNIT = 'b1.01';
export const PC_IMP_UNIT = 'b1.03';
export const PAIRES_UNIT = 'b1.04';
export const SI_UNIT = 'b1.10';
export const QUI_QUE_UNIT = 'b1.11';
export const DISCOURS_UNIT = 'b1.19';
export const COND_PASSE_UNIT = 'b2.02';
export const SI_PASSE_UNIT = 'b2.03';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const IMP_FORM_REF = refFr(IMP_FORM_UNIT);
export const PC_IMP_REF = refFr(PC_IMP_UNIT);
export const PAIRES_REF = refFr(PAIRES_UNIT);
export const SI_REF = refFr(SI_UNIT);
export const QUI_QUE_REF = refFr(QUI_QUE_UNIT);
export const DISCOURS_REF = refFr(DISCOURS_UNIT);
export const COND_PASSE_REF = refFr(COND_PASSE_UNIT);
export const SI_PASSE_REF = refFr(SI_PASSE_UNIT);
export const PASSE_B1_RANGE_REF = 'les leçons 3 et 4 du B1';
export const B2_NEXT_RANGE_REF = 'les leçons 2 et 3 du B2';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B101_REFRAME, REFRAME_EN as B101_REFRAME_EN } from '../b1/imparfait-formation-corpus.ts';
export { REFRAME as B103_REFRAME, REFRAME_EN as B103_REFRAME_EN } from '../b1/pc-imparfait-corpus.ts';
export { REFRAME as B110_REFRAME, REFRAME_EN as B110_REFRAME_EN } from '../b1/si-clauses-corpus.ts';
export { REFRAME as B119_REFRAME, REFRAME_EN as B119_REFRAME_EN } from '../b1/discours-indirect-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE REPÈRE. Every plus-que-parfait hangs on a moment in the past that the
 *  text has already set: an arrival (« quand je suis arrivé »), a speech
 *  act (« il a dit »), an imagined past (« si »). The tense says what was
 *  ALREADY DONE at that moment. No repère, no plus-que-parfait: act 10 is
 *  built on that half of the sentence.
 *
 *  It is NOT « the plus-que-parfait is for anything long ago » (act 10: a
 *  story told in order takes the passé composé however old it is), and NOT
 *  « English had = plus-que-parfait » (« I had lunch » is j'ai déjeuné).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le plus-que-parfait dit ce qui était déjà fait au moment dont tu parles.';
export const REFRAME_EN = 'The plus-que-parfait says what was already done at the moment you are talking about.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le plus-que-parfait, c’est le passé lointain.',
    why: 'False where act 6 and act 10 have to hold: « Le 3 janvier 1962, ma mère est arrivée à Marseille » is sixty years back and takes the passé composé, while « elle était partie cinq minutes plus tôt » is five minutes back and takes the plus-que-parfait. Distance does not decide; the repère does.',
  },
  {
    text: 'Quand l’anglais dit had, le français dit avait.',
    why: 'Act 10 contradicts it three ways: « I had lunch » is « j’ai déjeuné », « avait faim » is an imparfait, and « had been living there for two years » is « habitait là depuis deux ans ». A translation rule drags the learner into the exact errors the lesson corrects.',
  },
  {
    text: 'Le plus-que-parfait, c’est un passé composé mis à l’imparfait.',
    why: 'True of the FORM (act 2 teaches it that way) but silent on when to use it, which is the whole B2 question; lesson 19 in B1 already gave the form in reported speech.',
  },
  {
    text: 'Un cran en arrière du passé composé.',
    why: 'Nearly right, but it hides the reference point: in « si j’avais su » there is no passé composé to step back from, and in « quand je suis arrivé, le film avait commencé » the step is counted from the arrival, not from a tense.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-27, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const PR = (n: number) => `fr.b1.paroles-rapportees.${n}`;
const PF = (n: number) => `fr.b1.projets-et-futur.${n}`;

export const IMPORTED = {
  act1: [
    'fr.b1.cafe.090',                          // Nous avions déjà commandé quand nos amis sont arrivés.  (flashcard, no voiceflash)
  ],
  act2: [
    PR(1124),                                  // elle était partie  (lesson 19, gapfill)
    PR(1117),                                  // Le passé composé passe au plus-que-parfait : avait fait, était parti.  (lesson 19, rule card, flashcard only)
  ],
  act3: [
    'fr.b1.pronoms-essentiels.1011',           // J'ai retrouvé le parapluie que j'avais oublié dans le métro.  (lesson 11)
  ],
  act4: [
    PR(1114),                                  // Elle a dit qu'elle s'était trompée de salle.  (lesson 19)
  ],
  act5: [
    'fr.b1.recits-au-passe.1011',              // Il faisait chaud et les fenêtres étaient ouvertes.  (lesson 3)
    'fr.b1.recits-au-passe.1252',              // J'ai cru que tu étais parti.  (lesson 4)
  ],
  act6: [
    PR(1125),                                  // Il était déjà parti quand je suis arrivé.  (lesson 19)
    'fr.b2.strategies-de-comprehension.1731',  // Quand les entreprises ont réagi, les bureaux s'étaient déjà vidés.  (lesson 25 in B2)
    'fr.b1.pronoms-essentiels.1558',           // Nadia a fermé plus tôt, ce que personne n'avait prévu.  (lesson 13)
  ],
  act7: [
    'fr.b1.journalisme.1178',                  // Tu as raison, je n’avais pas vérifié.  (lesson 34)
  ],
  act8: [
    PR(1109),                                  // Il a dit qu'il avait perdu son téléphone.
    PR(1111),                                  // Il a dit qu'il était parti à six heures.
    PR(1113),                                  // Ils ont dit qu'ils étaient déjà partis.
    PR(1120),                                  // Il a dit qu'il avait oublié la réunion.
    PR(1171),                                  // Il a raconté qu'il avait vécu à Dakar.
    PF(1315),                                  // Il m’a demandé si j’avais déjà travaillé en équipe.  (lesson 10)
  ],
  act9: [
    PF(1352),                                  // Si j’avais su, j’aurais pris un autre train.  (lesson 10, flashcard + review)
    PF(1353),                                  // Si tu m’avais prévenu, je serais venu t’aider.  (lesson 10, flashcard + review)
    PF(1209),                                  // Si nous avions su, nous aurions réservé plus tôt.  (lesson 10)
    'fr.b2.maison.078',                        // Si nous avions su que les travaux dureraient si longtemps, nous n'aurions pas emménagé.
  ],
  act10: [
    'fr.b1.connecteurs-logiques.1362',         // Comme le train avait du retard, j'ai pris un taxi.  (lesson 31: avait = imparfait)
    'fr.b2.litterature.005',                   // L'auteur dont on parle tant cette année n'avait jamais publié auparavant.  (dictation only)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [
  'fr.b2.litterature.005',                     // sentence + dictation only
];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  'fr.b1.cafe.090',                            // flashcard + review
  PR(1117),                                    // flashcard only (a rule card)
  PF(1352),                                    // flashcard + review
  PF(1353),                                    // flashcard + review
  'fr.b2.maison.078',                          // flashcard + review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `conj` a conjugation card (front « finir ·
 *  plus-que-parfait · je »); `gap` a gapfill card whose front gaps the verb
 *  and names the MEANING cue; `rule` a grammar card. Every row carries fr, en,
 *  ipa and respell. Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const GP = ['plus-que-parfait'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

type Pers = 'je' | 'tu' | 'il' | 'elle' | 'on' | 'nous' | 'vous' | 'ils' | 'elles';
const conj = (
  n: number, fr: string, en: string, ipa: string, respell: string, inf: string, p: Pers, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags: ['conjugaison', ...tags], drills, version: 1, register: C, grammarPoints: GP,
  cardType: 'conjugation', prompt: `${inf} · plus-que-parfait · ${p}`,
});

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE FILM AVAIT COMMENCÉ (.1600-.1613) ─────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1600, 'Quand nous sommes arrivés, le film avait commencé.', 'When we arrived, the film had started.',
    '/kɑ̃ nu sɔm.za.ʁi.ve lə film a.vɛ kɔ.mɑ̃.se/', 'kahⁿ noo som-za-ree-VAY | luh FEELM a-veh ko-mahⁿ-SAY', ['scene', 'avant'], FCVDR),
  sent(1601, 'Quand nous sommes arrivés, le film a commencé.', 'When we arrived, the film started.',
    '/kɑ̃ nu sɔm.za.ʁi.ve lə film a kɔ.mɑ̃.se/', 'kahⁿ noo som-za-ree-VAY | luh FEELM a ko-mahⁿ-SAY', ['scene', 'ensuite']),
  sent(1602, 'Karim avait acheté les billets la veille.', 'Karim had bought the tickets the day before.',
    '/ka.ʁim a.vɛ.taʃ.te le bi.jɛ la vɛj/', 'ka-REEM a-veh-tash-TAY lay bee-YEH | la VEY', ['lecture', 'avant']),
  sent(1603, 'Nous avions raté les dix premières minutes.', 'We had missed the first ten minutes.',
    '/nu.za.vjɔ̃ ʁa.te le di pʁə.mjɛʁ mi.nyt/', 'noo-za-vyohⁿ ra-TAY | lay dee pruh-myehr mee-NÜT', ['lecture', 'avant'], FCVDR),
  sent(1604, 'Le bus était parti deux minutes plus tôt.', 'The bus had left two minutes earlier.',
    '/lə bys e.tɛ paʁ.ti dø mi.nyt ply to/', 'luh BÜSS ay-teh par-TEE | deu mee-nüt plü TOH', ['lecture', 'avant']),
  sent(1605, "J'avais oublié mon téléphone sur la table.", 'I had left my phone on the table.',
    '/ʒa.vɛ.zu.bli.je mɔ̃ te.le.fɔn syʁ la tabl/', 'zha-veh-zoo-blee-YAY mohⁿ tay-lay-FON | sür la TABL', ['lecture', 'avant']),
  sent(1606, "Personne ne m'avait prévenu.", 'Nobody had warned me.',
    '/pɛʁ.sɔn nə ma.vɛ pʁe.və.ny/', 'pehr-SONN | nuh ma-veh pray-vuh-NÜ', ['lecture', 'avant']),
  sent(1607, "Karim m'avait envoyé un message à six heures.", 'Karim had sent me a message at six.',
    '/ka.ʁim ma.vɛ.tɑ̃.vwa.je œ̃ me.saʒ a si.zœʁ/', 'ka-REEM ma-veh-tahⁿ-vwa-YAY uhⁿ may-SAZH | a see-ZUHR', ['lecture', 'avant']),
  sent(1608, "Je ne l'avais pas lu.", "I hadn't read it.",
    '/ʒə nə la.vɛ pa ly/', 'zhuh nuh la-veh pa LÜ', ['lecture', 'avant', 'negation'], FCVDR),
  rule(1609, REFRAME, REFRAME_EN,
    '/lə ply kə paʁ.fɛ di sə ki e.tɛ de.ʒa fɛ o mɔ.mɑ̃ dɔ̃ ty paʁl/',
    'luh plü kuh par-FEH | dee suh kee ay-teh day-zha FEH | oh mo-mahⁿ dohⁿ tü PARL',
    'À quoi sert le plus-que-parfait ?',
    "Il y a toujours un repère dans le passé : une arrivée, une parole, une hypothèse. Le plus-que-parfait dit ce qui était déjà fait à ce moment-là.",
    ['reframe']),
  sent(1610, "Ce soir-là, tout s'était passé avant notre arrivée.", 'That evening, everything had happened before we arrived.',
    '/sə swaʁ.la tu se.tɛ pa.se a.vɑ̃ nɔ.tʁa.ʁi.ve/', 'suh swar-LA | too seh-teh pa-SAY | a-vahⁿ no-tra-ree-VAY', ['scene', 'avant']),
  sent(1611, 'Quand je suis rentré, ma sœur avait préparé le dîner.', 'When I got home, my sister had made dinner.',
    '/kɑ̃ ʒə sɥi ʁɑ̃.tʁe ma sœʁ a.vɛ pʁe.pa.ʁe lə di.ne/', 'kahⁿ zhuh swee rahⁿ-TRAY | ma SUHR a-veh pray-pa-RAY luh dee-NAY', ['paire', 'avant']),
  sent(1612, 'Quand je suis rentré, ma sœur a préparé le dîner.', 'When I got home, my sister made dinner.',
    '/kɑ̃ ʒə sɥi ʁɑ̃.tʁe ma sœʁ a pʁe.pa.ʁe lə di.ne/', 'kahⁿ zhuh swee rahⁿ-TRAY | ma SUHR a pray-pa-RAY luh dee-NAY', ['paire', 'ensuite']),
  sent(1613, 'Le magasin avait fermé à dix-neuf heures.', 'The shop had closed at seven p.m.',
    '/lə ma.ɡa.zɛ̃ a.vɛ fɛʁ.me a di.znœ.vœʁ/', 'luh ma-ga-ZEHⁿ a-veh fehr-MAY | a dee-znuh-VUHR', ['usage', 'avant']),
];

/* ── ACT 2 · LA FORME (.1615-.1639) ───────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  conj(1615, "j'avais fini", 'I had finished', '/ʒa.vɛ fi.ni/', 'zha-veh fee-NEE', 'finir', 'je', ['avoir'], FCVDR),
  conj(1616, 'tu avais fini', 'you had finished', '/ty a.vɛ fi.ni/', 'tü a-veh fee-NEE', 'finir', 'tu', ['avoir']),
  conj(1617, 'elle avait fini', 'she had finished', '/ɛ.la.vɛ fi.ni/', 'eh-la-veh fee-NEE', 'finir', 'elle', ['avoir']),
  conj(1618, 'nous avions fini', 'we had finished', '/nu.za.vjɔ̃ fi.ni/', 'noo-za-vyohⁿ fee-NEE', 'finir', 'nous', ['avoir']),
  conj(1619, 'vous aviez fini', 'you had finished', '/vu.za.vje fi.ni/', 'voo-za-vyay fee-NEE', 'finir', 'vous', ['avoir']),
  conj(1620, 'ils avaient fini', 'they had finished', '/il.za.vɛ fi.ni/', 'eel-za-veh fee-NEE', 'finir', 'ils', ['avoir']),
  conj(1621, "j'étais sorti", 'I had gone out', '/ʒe.tɛ sɔʁ.ti/', 'zhay-teh sor-TEE', 'sortir', 'je', ['etre'], FCVDR),
  conj(1622, 'elle était sortie', 'she had gone out', '/ɛ.le.tɛ sɔʁ.ti/', 'eh-lay-teh sor-TEE', 'sortir', 'elle', ['etre', 'accord']),
  conj(1623, 'nous étions sortis', 'we had gone out', '/nu.ze.tjɔ̃ sɔʁ.ti/', 'noo-zay-tyohⁿ sor-TEE', 'sortir', 'nous', ['etre', 'accord']),
  conj(1624, 'ils étaient sortis', 'they had gone out', '/il.ze.tɛ sɔʁ.ti/', 'eel-zay-teh sor-TEE', 'sortir', 'ils', ['etre', 'accord']),
  sent(1625, "J'avais pris mes précautions.", 'I had taken my precautions.',
    '/ʒa.vɛ pʁi me pʁe.ko.sjɔ̃/', 'zha-veh PREE | may pray-koh-SYOHⁿ', ['avoir']),
  sent(1626, 'Elle était allée chercher les enfants.', 'She had gone to fetch the children.',
    '/ɛ.le.tɛ.ta.le ʃɛʁ.ʃe le.zɑ̃.fɑ̃/', 'eh-lay-teh-ta-LAY | shehr-SHAY lay-zahⁿ-FAHⁿ', ['etre'], FCVDR),
  sent(1627, 'Nous étions venus en train.', 'We had come by train.',
    '/nu.ze.tjɔ̃ və.ny ɑ̃ tʁɛ̃/', 'noo-zay-tyohⁿ vuh-NÜ | ahⁿ TREHⁿ', ['etre']),
  sent(1628, 'Ils avaient mis la table dans le jardin.', 'They had laid the table in the garden.',
    '/il.za.vɛ mi la tabl dɑ̃ lə ʒaʁ.dɛ̃/', 'eel-za-veh mee la TABL | dahⁿ luh zhar-DEHⁿ', ['avoir']),
  sent(1629, 'On avait dit huit heures.', 'We had said eight o’clock.',
    '/ɔ̃.na.vɛ di ɥi.tœʁ/', 'ohⁿ-na-veh DEE | üee-TUHR', ['avoir']),
  sent(1630, "Vous étiez restés jusqu'à la fin.", 'You had stayed until the end.',
    '/vu.ze.tje ʁɛs.te ʒys.ka la fɛ̃/', 'voo-zay-tyay res-TAY | zhüs-ka la FEHⁿ', ['etre']),
  gap(1631, "Il était déjà descendu quand l'ascenseur est arrivé.", 'He had already gone down when the lift arrived.',
    '/i.le.tɛ de.ʒa de.sɑ̃.dy kɑ̃ la.sɑ̃.sœʁ ɛ.ta.ʁi.ve/', 'ee-lay-teh day-zha day-sahⁿ-DÜ | kahⁿ la-sahⁿ-SUHR eh-ta-ree-VAY',
    "Il ___ déjà descendu quand l'ascenseur est arrivé. (descendre · avoir ou être ?)",
    "Descendre, sans complément, prend être, comme au passé composé. EN: être, as in the passé composé.",
    ['etre']),
  gap(1632, "J'avais laissé mes clés au bureau.", 'I had left my keys at the office.',
    '/ʒa.vɛ lɛ.se me kle o by.ʁo/', 'zha-veh leh-SAY may KLAY | oh bü-ROH',
    "J'___ mes clés au bureau. (laisser · avoir ou être ?)",
    "Laisser prend avoir. EN: laisser takes avoir.",
    ['avoir'], FCVDR),
  rule(1633, "L'imparfait de avoir ou être, puis le participe passé.", 'The imparfait of avoir or être, then the past participle.',
    '/lɛ̃.paʁ.fɛ də a.vwaʁ u ɛtʁ pɥi lə paʁ.ti.sip pa.se/', 'lehⁿ-par-FEH | duh a-VWAR oo EHTR | pwee luh par-tee-seep pa-SAY',
    'Comment se forme le plus-que-parfait ?',
    "Deux mots, comme au passé composé : seul l'auxiliaire change de temps.",
    ['forme']),
  rule(1634, "Le même auxiliaire qu'au passé composé.", 'The same auxiliary as in the passé composé.',
    '/lə mɛm ɔk.si.ljɛʁ ko pa.se kɔ̃.po.ze/', 'luh mem ok-see-LYEHR | koh pa-say kohⁿ-poh-ZAY',
    'Avoir ou être, au plus-que-parfait ?',
    "Rien à réapprendre : je suis allé donne j'étais allé, j'ai pris donne j'avais pris.",
    ['forme']),
  sent(1635, 'Elle était déjà rentrée de vacances.', 'She had already come back from holiday.',
    '/ɛ.le.tɛ de.ʒa ʁɑ̃.tʁe də va.kɑ̃s/', 'eh-lay-teh day-zha rahⁿ-TRAY | duh va-KAHⁿS', ['etre']),
  sent(1636, 'Nous avions beaucoup marché ce jour-là.', 'We had walked a lot that day.',
    '/nu.za.vjɔ̃ bo.ku maʁ.ʃe sə ʒuʁ.la/', 'noo-za-vyohⁿ boh-koo mar-SHAY | suh zhoor-LA', ['avoir']),
  sent(1637, 'Ils étaient passés par Genève.', 'They had gone via Geneva.',
    '/il.ze.tɛ pa.se paʁ ʒə.nɛv/', 'eel-zay-teh pa-SAY | par zhuh-NEHV', ['etre']),
  sent(1638, "J'avais été malade toute la semaine.", 'I had been ill all week.',
    '/ʒa.vɛ.ze.te ma.lad tut la sə.mɛn/', 'zha-veh-zay-TAY ma-LAD | toot la suh-MENN', ['avoir', 'etre-participe']),
  sent(1639, 'Elle avait eu de la chance.', 'She had been lucky.',
    '/ɛ.la.vɛ.ty də la ʃɑ̃s/', 'eh-la-veh-TÜ | duh la SHAHⁿS', ['avoir', 'avoir-participe']),
];

/* ── ACT 3 · LES ACCORDS (.1640-.1657) ────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1640, 'Elle était partie sans rien dire.', 'She had left without a word.',
    '/ɛ.le.tɛ paʁ.ti sɑ̃ ʁjɛ̃ diʁ/', 'eh-lay-teh par-TEE | sahⁿ ryehⁿ DEER', ['etre', 'accord'], FCVDR),
  sent(1641, 'Mes parents étaient arrivés la veille.', 'My parents had arrived the day before.',
    '/me pa.ʁɑ̃ e.tɛ.ta.ʁi.ve la vɛj/', 'may pa-RAHⁿ | ay-teh-ta-ree-VAY | la VEY', ['etre', 'accord']),
  sent(1642, 'Les filles étaient montées au grenier.', 'The girls had gone up to the attic.',
    '/le fij e.tɛ mɔ̃.te o ɡʁə.nje/', 'lay FEEY | ay-teh mohⁿ-TAY oh gruh-NYAY', ['etre', 'accord']),
  sent(1643, "Les lettres que j'avais écrites sont restées dans un tiroir.", 'The letters I had written stayed in a drawer.',
    '/le lɛtʁ kə ʒa.vɛ.ze.kʁit sɔ̃ ʁɛs.te dɑ̃.zœ̃ ti.ʁwaʁ/', 'lay LETR kuh zha-veh-zay-KREET | sohⁿ res-TAY dahⁿ-zuhⁿ tee-RWAR', ['avoir', 'accord', 'que'], FCVDR),
  sent(1644, "La robe qu'elle avait choisie était rouge.", 'The dress she had chosen was red.',
    '/la ʁɔb kɛ.la.vɛ ʃwa.zi e.tɛ ʁuʒ/', 'la ROB keh-la-veh shwa-ZEE | ay-teh ROOZH', ['avoir', 'accord', 'que']),
  sent(1645, 'Ces photos, je les avais prises à Dakar.', 'These photos, I had taken them in Dakar.',
    '/se fo.to ʒə le.za.vɛ pʁiz a da.kaʁ/', 'say foh-TOH | zhuh lay-za-veh PREEZ | a da-KAR', ['avoir', 'accord', 'pronom']),
  sent(1646, 'Elle avait pris des photos.', 'She had taken photos.',
    '/ɛ.la.vɛ pʁi de fo.to/', 'eh-la-veh PREE | day foh-TOH', ['avoir', 'sans-accord']),
  sent(1647, 'Ils avaient vendu la maison.', 'They had sold the house.',
    '/il.za.vɛ vɑ̃.dy la mɛ.zɔ̃/', 'eel-za-veh vahⁿ-DÜ | la meh-ZOHⁿ', ['avoir', 'sans-accord']),
  sent(1648, "La maison qu'ils avaient vendue était trop grande.", 'The house they had sold was too big.',
    '/la mɛ.zɔ̃ kil.za.vɛ vɑ̃.dy e.tɛ tʁo ɡʁɑ̃d/', 'la meh-ZOHⁿ keel-za-veh vahⁿ-DÜ | ay-teh troh GRAHⁿD', ['avoir', 'accord', 'que']),
  gap(1649, "Les lunettes que j'avais cherchées étaient sur ma tête.", 'The glasses I had been looking for were on my head.',
    '/le ly.nɛt kə ʒa.vɛ ʃɛʁ.ʃe e.tɛ syʁ ma tɛt/', 'lay lü-NET kuh zha-veh shehr-SHAY | ay-teh sür ma TET',
    "Les lunettes que j'avais ___ étaient sur ma tête. (chercher · que est placé avant)",
    "Que reprend les lunettes, placé avant avoir : cherchées. EN: agreement with que, placed before.",
    ['avoir', 'accord', 'que']),
  gap(1650, 'Ma grand-mère était née à Oran.', 'My grandmother had been born in Oran.',
    '/ma ɡʁɑ̃.mɛʁ e.tɛ ne a ɔ.ʁɑ̃/', 'ma grahⁿ-MEHR | ay-teh NAY a o-RAHⁿ',
    'Ma grand-mère était ___ à Oran. (naître · avec être)',
    "Être accorde avec le sujet : née. EN: être agrees with the subject.",
    ['etre', 'accord']),
  gap(1651, 'Elles avaient réservé trop tard.', 'They had booked too late.',
    '/ɛl.za.vɛ ʁe.zɛʁ.ve tʁo taʁ/', 'el-za-veh ray-zehr-VAY | troh TAR',
    'Elles avaient ___ trop tard. (réserver · avec avoir, rien avant)',
    "Avec avoir, le sujet ne compte pas : réservé, sans e ni s. EN: avoir never agrees with the subject.",
    ['avoir', 'sans-accord'], FCVDR),
  rule(1652, "Avec être, le participe s'accorde avec le sujet.", 'With être, the participle agrees with the subject.',
    '/a.vɛk ɛtʁ lə paʁ.ti.sip sa.kɔʁd a.vɛk lə sy.ʒɛ/', 'a-vek EHTR | luh par-tee-SEEP sa-KORD | a-vek luh sü-ZHEH',
    'Avec être, le participe s’accorde avec…', "Le sujet : elle était partie, ils étaient arrivés.", ['accord']),
  rule(1653, "Avec avoir, le participe s'accorde avec le complément placé avant.", 'With avoir, the participle agrees with the object placed before it.',
    '/a.vɛk a.vwaʁ lə paʁ.ti.sip sa.kɔʁd a.vɛk lə kɔ̃.ple.mɑ̃ pla.se a.vɑ̃/', 'a-vek a-VWAR | luh par-tee-SEEP sa-KORD | a-vek luh kohⁿ-play-MAHⁿ pla-say a-VAHⁿ',
    'Avec avoir, quand le participe s’accorde-t-il ?', "Quand que, le, la ou les arrivent avant : la robe qu'elle avait choisie.", ['accord']),
  sent(1654, 'Mes cousines étaient restées à Montréal.', 'My cousins had stayed in Montréal.',
    '/me ku.zin e.tɛ ʁɛs.te a mɔ̃.ʁe.al/', 'may koo-ZEEN | ay-teh res-TAY a mohⁿ-ray-AL', ['etre', 'accord']),
  sent(1655, "Nous étions tombés d'accord très vite.", 'We had agreed very quickly.',
    '/nu.ze.tjɔ̃ tɔ̃.be da.kɔʁ tʁɛ vit/', 'noo-zay-tyohⁿ tohⁿ-BAY da-KOR | treh VEET', ['etre', 'accord']),
  sent(1656, 'Elle avait sorti la valise du coffre.', 'She had taken the suitcase out of the boot.',
    '/ɛ.la.vɛ sɔʁ.ti la va.liz dy kɔfʁ/', 'eh-la-veh sor-TEE | la va-LEEZ dü KOFR', ['avoir', 'sortir']),
  sent(1657, 'Elle était sortie par la porte du jardin.', 'She had gone out through the garden door.',
    '/ɛ.le.tɛ sɔʁ.ti paʁ la pɔʁt dy ʒaʁ.dɛ̃/', 'eh-lay-teh sor-TEE | par la PORT dü zhar-DEHⁿ', ['etre', 'sortir']),
];

/* ── ACT 4 · LES PRONOMINAUX (.1660-.1676) ────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  conj(1660, "je m'étais levé", 'I had got up', '/ʒə me.tɛ lə.ve/', 'zhuh may-teh luh-VAY', 'se lever', 'je', ['pronominal'], FCVDR),
  conj(1661, "elle s'était levée", 'she had got up', '/ɛl se.tɛ lə.ve/', 'el seh-teh luh-VAY', 'se lever', 'elle', ['pronominal', 'accord']),
  conj(1662, 'nous nous étions levés', 'we had got up', '/nu nu.ze.tjɔ̃ lə.ve/', 'noo noo-zay-tyohⁿ luh-VAY', 'se lever', 'nous', ['pronominal', 'accord']),
  conj(1663, "ils s'étaient levés", 'they had got up', '/il se.tɛ lə.ve/', 'eel seh-teh luh-VAY', 'se lever', 'ils', ['pronominal', 'accord']),
  sent(1664, "Elle s'était levée avant l'aube.", 'She had got up before dawn.',
    '/ɛl se.tɛ lə.ve a.vɑ̃ lob/', 'el seh-teh luh-VAY | a-vahⁿ LOHB', ['pronominal', 'accord'], FCVDR),
  sent(1665, "Ils s'étaient disputés la veille.", 'They had argued the day before.',
    '/il se.tɛ dis.py.te la vɛj/', 'eel seh-teh dees-pü-TAY | la VEY', ['pronominal', 'accord']),
  sent(1666, 'Nous nous étions perdus dans la vieille ville.', 'We had got lost in the old town.',
    '/nu nu.ze.tjɔ̃ pɛʁ.dy dɑ̃ la vjɛj vil/', 'noo noo-zay-tyohⁿ pehr-DÜ | dahⁿ la vyey VEEL', ['pronominal', 'accord']),
  sent(1667, "Elles s'étaient téléphoné le matin même.", 'They had phoned each other that same morning.',
    '/ɛl se.tɛ te.le.fɔ.ne lə ma.tɛ̃ mɛm/', 'el seh-teh tay-lay-fo-NAY | luh ma-tehⁿ MEM', ['pronominal', 'sans-accord'], FCVDR),
  sent(1668, "Elle s'était lavé les mains.", 'She had washed her hands.',
    '/ɛl se.tɛ la.ve le mɛ̃/', 'el seh-teh la-VAY | lay MEHⁿ', ['pronominal', 'sans-accord']),
  sent(1669, "Ils s'étaient rencontrés à l'université.", 'They had met at university.',
    '/il se.tɛ ʁɑ̃.kɔ̃.tʁe a ly.ni.vɛʁ.si.te/', 'eel seh-teh rahⁿ-kohⁿ-TRAY | a lü-nee-vehr-see-TAY', ['pronominal', 'accord']),
  sent(1670, "Je ne m'étais pas rendu compte de l'heure.", "I hadn't noticed the time.",
    '/ʒə nə me.tɛ pa ʁɑ̃.dy kɔ̃t də lœʁ/', 'zhuh nuh may-teh pa rahⁿ-dü KOHⁿT | duh LUHR', ['pronominal', 'negation']),
  sent(1671, "Tu t'étais trompé de jour.", 'You had got the day wrong.',
    '/ty te.tɛ tʁɔ̃.pe də ʒuʁ/', 'tü teh-teh trohⁿ-PAY | duh ZHOOR', ['pronominal']),
  gap(1672, "Elle s'était coupé les cheveux avant de partir.", 'She had cut her hair before leaving.',
    '/ɛl se.tɛ ku.pe le ʃə.vø a.vɑ̃ də paʁ.tiʁ/', 'el seh-teh koo-PAY lay shuh-VEU | a-vahⁿ duh par-TEER',
    "Elle s'était ___ les cheveux avant de partir. (se couper · les cheveux arrivent après)",
    "Le complément vient après : coupé, sans e. EN: the object follows, so no agreement.",
    ['pronominal', 'sans-accord']),
  gap(1673, 'Nous nous étions réveillés très tôt ce jour-là.', 'We had woken up very early that day.',
    '/nu nu.ze.tjɔ̃ ʁe.ve.je tʁɛ to sə ʒuʁ.la/', 'noo noo-zay-tyohⁿ ray-vay-YAY | treh TOH | suh zhoor-LA',
    'Nous nous ___ très tôt ce jour-là. (se réveiller)',
    "Pronominal : être, et l'accord avec nous. EN: être, agreeing with nous.",
    ['pronominal', 'accord']),
  rule(1674, "Un verbe pronominal prend toujours être : je m'étais, il s'était.", 'A pronominal verb always takes être: je m’étais, il s’était.',
    '/œ̃ vɛʁb pʁɔ.nɔ.mi.nal pʁɑ̃ tu.ʒuʁ ɛtʁ ʒə me.tɛ il se.tɛ/', 'uhⁿ vehrb pro-no-mee-NAL | prahⁿ too-zhoor EHTR | zhuh may-TEH | eel seh-TEH',
    'Au plus-que-parfait, un verbe pronominal prend…', "Toujours être, jamais avoir : je m'étais levé, pas je m'avais levé.", ['pronominal']),
  sent(1675, "Ils s'étaient écrit pendant des années.", 'They had written to each other for years.',
    '/il se.tɛ.te.kʁi pɑ̃.dɑ̃ de.za.ne/', 'eel seh-teh-tay-KREE | pahⁿ-dahⁿ day-za-NAY', ['pronominal', 'sans-accord']),
  sent(1676, "Elle s'était installée à Lausanne.", 'She had settled in Lausanne.',
    '/ɛl se.tɛ.tɛ̃s.ta.le a lo.zan/', 'el seh-teh-tehⁿs-ta-LAY | a loh-ZANN', ['pronominal', 'accord']),
];

/* ── ACT 5 · UNE LIGNE, TROIS TEMPS (.1680-.1693) ─────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1680, "Il neigeait quand Julien est sorti de l'aéroport.", 'It was snowing when Julien came out of the airport.',
    '/il nɛ.ʒɛ kɑ̃ ʒy.ljɛ̃ ɛ sɔʁ.ti də la.e.ʁo.pɔʁ/', 'eel neh-ZHEH | kahⁿ zhü-LYEHⁿ eh sor-TEE | duh la-ay-roh-POR', ['ligne', 'decor']),
  sent(1681, 'Il avait quitté Lyon le matin même.', 'He had left Lyon that same morning.',
    '/i.la.vɛ ki.te ljɔ̃ lə ma.tɛ̃ mɛm/', 'ee-la-veh kee-TAY LYOHⁿ | luh ma-tehⁿ MEM', ['ligne', 'avant'], FCVDR),
  sent(1682, 'Sa logeuse lui avait laissé les clés chez la voisine.', 'His landlady had left him the keys with the neighbour.',
    '/sa lɔ.ʒøz lɥi a.vɛ lɛ.se le kle ʃe la vwa.zin/', 'sa lo-ZHEUZ | lwee a-veh leh-SAY lay KLAY | shay la vwa-ZEEN', ['ligne', 'avant']),
  sent(1683, "Il faisait froid, et il n'avait pas prévu de manteau.", 'It was cold, and he had not planned for a coat.',
    '/il fə.zɛ fʁwa e il na.vɛ pa pʁe.vy də mɑ̃.to/', 'eel fuh-zeh FRWA | ay eel na-veh pa pray-VÜ duh mahⁿ-TOH', ['ligne', 'decor', 'avant']),
  sent(1684, 'Il a sonné chez la voisine, mais elle était sortie.', 'He rang at the neighbour’s, but she had gone out.',
    '/il a sɔ.ne ʃe la vwa.zin mɛ ɛ.le.tɛ sɔʁ.ti/', 'eel a so-NAY shay la vwa-ZEEN | meh eh-lay-teh sor-TEE', ['ligne', 'action', 'avant'], FCVDR),
  rule(1685, "L'imparfait décrit, le passé composé avance, le plus-que-parfait recule.", 'The imparfait describes, the passé composé moves on, the plus-que-parfait steps back.',
    '/lɛ̃.paʁ.fɛ de.kʁi lə pa.se kɔ̃.po.ze a.vɑ̃s lə ply kə paʁ.fɛ ʁə.kyl/', 'lehⁿ-par-FEH day-KREE | luh pa-say kohⁿ-poh-ZAY a-VAHⁿS | luh plü kuh par-FEH ruh-KÜL',
    'Trois temps du passé, trois rôles ?', "Le décor, l'action qui avance, et ce qui était déjà fait avant le repère.", ['ligne']),
  sent(1686, 'Elle sortait quand il a sonné.', 'She was going out when he rang.',
    '/ɛl sɔʁ.tɛ kɑ̃.til a sɔ.ne/', 'el sor-TEH | kahⁿ-teel a so-NAY', ['ligne', 'en-cours']),
  sent(1687, 'Elle est sortie quand il a sonné.', 'She went out when he rang.',
    '/ɛ.lɛ sɔʁ.ti kɑ̃.til a sɔ.ne/', 'eh-leh sor-TEE | kahⁿ-teel a so-NAY', ['ligne', 'ensuite']),
  sent(1688, 'Elle était sortie quand il a sonné.', 'She had gone out when he rang.',
    '/ɛ.le.tɛ sɔʁ.ti kɑ̃.til a sɔ.ne/', 'eh-lay-teh sor-TEE | kahⁿ-teel a so-NAY', ['ligne', 'avant'], FCVDR),
  sent(1689, 'Il a attendu une heure dans le froid.', 'He waited for an hour in the cold.',
    '/il a.tɑ̃.dy y.nœʁ dɑ̃ lə fʁwa/', 'eel a-tahⁿ-DÜ ü-NUHR | dahⁿ luh FRWA', ['ligne', 'action']),
  sent(1690, 'La voisine avait oublié son arrivée.', 'The neighbour had forgotten he was arriving.',
    '/la vwa.zin a.vɛ.tu.bli.je sɔ̃.na.ʁi.ve/', 'la vwa-ZEEN | a-veh-too-blee-YAY sohⁿ-na-ree-VAY', ['ligne', 'avant']),
  gap(1691, 'Quand elle est rentrée, il avait appelé trois fois.', 'When she got back, he had called three times.',
    '/kɑ̃.tɛ.lɛ ʁɑ̃.tʁe i.la.vɛ.ta.ple tʁwa fwa/', 'kahⁿ-teh-leh rahⁿ-TRAY | ee-la-veh-ta-PLAY trwa FWA',
    'Quand elle est rentrée, il ___ trois fois. (appeler · avant son retour)',
    "Les appels ont eu lieu avant le retour, qui est le repère. EN: the calls came before the return.",
    ['ligne', 'avant']),
  gap(1692, 'Il dormait presque quand elle est enfin arrivée.', 'He was almost asleep when she finally arrived.',
    '/il dɔʁ.mɛ pʁɛsk kɑ̃.tɛ.lɛ.tɑ̃.fɛ̃.na.ʁi.ve/', 'eel dor-meh PRESK | kahⁿ-teh-leh-tahⁿ-fehⁿ-na-ree-VAY',
    'Il ___ presque quand elle est enfin arrivée. (dormir · en cours)',
    "Le sommeil était en cours au moment du repère : imparfait. EN: under way, so imparfait.",
    ['ligne', 'en-cours']),
  sent(1693, "Plus tard, il a compris qu'il s'était trompé d'adresse.", 'Later he realised he had got the wrong address.',
    '/ply taʁ il a kɔ̃.pʁi kil se.tɛ tʁɔ̃.pe da.dʁɛs/', 'plü TAR | eel a kohⁿ-PREE | keel seh-teh trohⁿ-pay da-DRESS', ['ligne', 'avant']),
];

/* ── ACT 6 · RACONTER : QUAND, LORSQUE, LE RETOUR EN ARRIÈRE (.1700-.1717) ─ */

export const ACT6_ROWS: Row[] = [
  sent(1700, 'Lorsque les invités sont arrivés, la pluie avait cessé.', 'When the guests arrived, the rain had stopped.',
    '/lɔʁs.kə le.zɛ̃.vi.te sɔ̃.ta.ʁi.ve la plɥi a.vɛ se.se/', 'lors-kuh lay-zehⁿ-vee-TAY sohⁿ-ta-ree-VAY | la PLWEE a-veh say-SAY', ['recit', 'avant'], FCVDR),
  sent(1701, 'La veille, il avait plu toute la nuit.', 'The day before, it had rained all night.',
    '/la vɛj i.la.vɛ ply tut la nɥi/', 'la VEY | ee-la-veh PLÜ | toot la NWEE', ['recit', 'avant']),
  sent(1702, 'Fatou avait tout organisé seule.', 'Fatou had organised everything on her own.',
    '/fa.tu a.vɛ tu.tɔʁ.ɡa.ni.ze sœl/', 'fa-TOO a-veh too-tor-ga-nee-ZAY | SUHL', ['recit', 'avant']),
  sent(1703, 'Trois mois plus tôt, elle avait réservé la salle.', 'Three months earlier, she had booked the hall.',
    '/tʁwa mwa ply to ɛ.la.vɛ ʁe.zɛʁ.ve la sal/', 'trwa mwa plü TOH | eh-la-veh ray-zehr-VAY la SAL', ['recit', 'retour']),
  sent(1704, 'Elle a réservé la salle, puis elle a envoyé les invitations.', 'She booked the hall, then she sent out the invitations.',
    '/ɛ.la ʁe.zɛʁ.ve la sal pɥi ɛ.la ɑ̃.vwa.je le.zɛ̃.vi.ta.sjɔ̃/', 'eh-la ray-zehr-VAY la SAL | pwee eh-la ahⁿ-vwa-YAY lay-zehⁿ-vee-ta-SYOHⁿ', ['recit', 'ordre']),
  sent(1705, 'Au moment du repas, le traiteur avait disparu.', 'By the time of the meal, the caterer had vanished.',
    '/o mɔ.mɑ̃ dy ʁə.pa lə tʁɛ.tœʁ a.vɛ dis.pa.ʁy/', 'oh mo-mahⁿ dü ruh-PA | luh treh-TUHR a-veh dees-pa-RÜ', ['recit', 'avant']),
  sent(1706, "On a appris ensuite qu'il s'était endormi dans sa camionnette.", 'We found out afterwards that he had fallen asleep in his van.',
    '/ɔ̃.na a.pʁi ɑ̃.sɥit kil se.tɛ.tɑ̃.dɔʁ.mi dɑ̃ sa ka.mjɔ.nɛt/', 'ohⁿ-na a-PREE ahⁿ-SWEET | keel seh-teh-tahⁿ-dor-MEE | dahⁿ sa ka-myo-NET', ['recit', 'avant']),
  sent(1707, "Ce jour-là, tout avait mal commencé, et pourtant tout s'est bien fini.", 'That day, everything had started badly, and yet it all ended well.',
    '/sə ʒuʁ.la tu.ta.vɛ mal kɔ.mɑ̃.se e puʁ.tɑ̃ tu sɛ bjɛ̃ fi.ni/', 'suh zhoor-LA | too-ta-veh mal ko-mahⁿ-SAY | ay poor-TAHⁿ | too seh byehⁿ fee-NEE', ['recit', 'avant']),
  sent(1715, 'Puis le traiteur est arrivé, et on a mangé à minuit.', 'Then the caterer arrived, and we ate at midnight.',
    '/pɥi lə tʁɛ.tœʁ ɛ.ta.ʁi.ve e ɔ̃.na mɑ̃.ʒe a mi.nɥi/', 'pwee luh treh-TUHR eh-ta-ree-VAY | ay ohⁿ-na mahⁿ-ZHAY a mee-NWEE', ['recit', 'ordre']),
  sent(1716, 'Les invités ont dansé, puis ils sont rentrés chez eux.', 'The guests danced, then they went home.',
    '/le.zɛ̃.vi.te ɔ̃ dɑ̃.se pɥi il sɔ̃ ʁɑ̃.tʁe ʃe.zø/', 'lay-zehⁿ-vee-TAY ohⁿ dahⁿ-SAY | pwee eel sohⁿ rahⁿ-TRAY | shay-ZEU', ['recit', 'ordre']),
  sent(1717, 'Fatou a coupé le gâteau, puis elle a remercié tout le monde.', 'Fatou cut the cake, then she thanked everyone.',
    '/fa.tu a ku.pe lə ɡa.to pɥi ɛ.la ʁə.mɛʁ.sje tu lə mɔ̃d/', 'fa-TOO a koo-PAY luh ga-TOH | pwee eh-la ruh-mehr-SYAY too luh MOHⁿD', ['recit', 'ordre']),
  sent(1708, "Quand la musique a commencé, les enfants s'étaient déjà endormis.", 'When the music started, the children had already fallen asleep.',
    '/kɑ̃ la my.zik a kɔ.mɑ̃.se le.zɑ̃.fɑ̃ se.tɛ de.ʒa ɑ̃.dɔʁ.mi/', 'kahⁿ la mü-ZEEK a ko-mahⁿ-SAY | lay-zahⁿ-FAHⁿ seh-teh day-zha ahⁿ-dor-MEE', ['recit', 'avant'], FCVDR),
  sent(1709, "Elle nous a montré la robe qu'elle avait cousue elle-même.", 'She showed us the dress she had sewn herself.',
    '/ɛl nu.za mɔ̃.tʁe la ʁɔb kɛ.la.vɛ ku.zy ɛl.mɛm/', 'el noo-za mohⁿ-TRAY | la ROB keh-la-veh koo-ZÜ el-MEM', ['recit', 'accord']),
  gap(1710, 'Quand nous sommes arrivés à la salle, Fatou avait installé les fleurs.', 'When we got to the hall, Fatou had put the flowers out.',
    '/kɑ̃ nu sɔm.za.ʁi.ve a la sal fa.tu a.vɛ.tɛ̃s.ta.le le flœʁ/', 'kahⁿ noo som-za-ree-VAY a la SAL | fa-TOO a-veh-tehⁿs-ta-LAY lay FLUHR',
    'Quand nous sommes arrivés à la salle, Fatou ___ les fleurs. (installer · avant notre arrivée)',
    "Les fleurs étaient là avant nous : l'arrivée est le repère. EN: done before the arrival.",
    ['recit', 'avant']),
  gap(1711, "Le traiteur est arrivé tard : il s'était endormi en route.", 'The caterer arrived late: he had fallen asleep on the way.',
    '/lə tʁɛ.tœʁ ɛ.ta.ʁi.ve taʁ il se.tɛ.tɑ̃.dɔʁ.mi ɑ̃ ʁut/', 'luh treh-TUHR eh-ta-ree-vay TAR | eel seh-teh-tahⁿ-dor-MEE ahⁿ ROOT',
    'Le traiteur est arrivé tard : il ___ en route. (s’endormir · la cause, avant)',
    "L'explication remonte avant l'arrivée : plus-que-parfait. EN: the cause lies before the arrival.",
    ['recit', 'avant']),
  rule(1712, "Dans l'ordre des faits, le passé composé suffit.", 'When you tell the facts in order, the passé composé is enough.',
    '/dɑ̃ lɔʁ.dʁə de fɛ lə pa.se kɔ̃.po.ze sy.fi/', 'dahⁿ lor-druh day FEH | luh pa-say kohⁿ-poh-ZAY sü-FEE',
    'Faut-il un plus-que-parfait quand tu racontes dans l’ordre ?', "Non. Il sert quand tu remontes le temps, pas quand tu le suis.", ['ordre']),
  sent(1713, "Des années plus tard, j'ai revu la salle où ils s'étaient mariés.", 'Years later, I saw once again the hall where they had got married.',
    '/de.za.ne ply taʁ ʒe ʁə.vy la sal u il se.tɛ ma.ʁje/', 'day-za-nay plü TAR | zhay ruh-VÜ la SAL | oo eel seh-teh ma-RYAY', ['recit', 'retour']),
  sent(1714, 'Elle avait tout prévu, sauf le traiteur.', 'She had planned everything except the caterer.',
    '/ɛ.la.vɛ tu pʁe.vy sof lə tʁɛ.tœʁ/', 'eh-la-veh too pray-VÜ | sohf luh treh-TUHR', ['recit', 'avant']),
];

/* ── ACT 7 · DÉJÀ, PAS ENCORE, JUSTE (.1720-.1734) ────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1720, 'Le train était déjà parti.', 'The train had already left.',
    '/lə tʁɛ̃ e.tɛ de.ʒa paʁ.ti/', 'luh TREHⁿ | ay-teh day-zha par-TEE', ['adverbe', 'deja'], FCVDR),
  sent(1721, "Je n'avais pas encore fini mon rapport.", "I hadn't finished my report yet.",
    '/ʒə na.vɛ pa.zɑ̃.kɔʁ fi.ni mɔ̃ ʁa.pɔʁ/', 'zhuh na-veh pa-zahⁿ-KOR fee-NEE | mohⁿ ra-POR', ['adverbe', 'pas-encore'], FCVDR),
  sent(1722, "Elle venait de partir quand j'ai appelé.", 'She had just left when I called.',
    '/ɛl və.nɛ də paʁ.tiʁ kɑ̃ ʒe a.ple/', 'el vuh-NEH duh par-TEER | kahⁿ zhay a-PLAY', ['adverbe', 'venir-de']),
  sent(1723, "Elle était juste partie quand j'ai appelé.", 'She had only just left when I called.',
    '/ɛ.le.tɛ ʒys.tə paʁ.ti kɑ̃ ʒe a.ple/', 'eh-lay-teh zhüs-tuh par-TEE | kahⁿ zhay a-PLAY', ['adverbe', 'juste'], FCVR, { register: 'familier' }),
  sent(1724, "Nous n'avions jamais vu la mer.", 'We had never seen the sea.',
    '/nu na.vjɔ̃ ʒa.mɛ vy la mɛʁ/', 'noo na-vyohⁿ zha-meh VÜ | la MEHR', ['adverbe', 'jamais']),
  sent(1725, 'Il avait à peine fermé la porte que le téléphone a sonné.', 'He had barely shut the door when the phone rang.',
    '/i.la.vɛ.ta pɛn fɛʁ.me la pɔʁt kə lə te.le.fɔn a sɔ.ne/', 'ee-la-veh-ta PENN fehr-MAY la PORT | kuh luh tay-lay-FON a so-NAY', ['adverbe', 'a-peine']),
  sent(1726, 'Ils avaient bien compris la consigne.', 'They had understood the instructions well.',
    '/il.za.vɛ bjɛ̃ kɔ̃.pʁi la kɔ̃.siɲ/', 'eel-za-veh byehⁿ kohⁿ-PREE | la kohⁿ-SEENY', ['adverbe', 'bien']),
  sent(1727, 'On avait tout prévu, sauf la pluie.', 'We had planned for everything except the rain.',
    '/ɔ̃.na.vɛ tu pʁe.vy sof la plɥi/', 'ohⁿ-na-veh too pray-VÜ | sohf la PLWEE', ['adverbe', 'tout']),
  sent(1728, 'Mon frère était déjà venu à Bruxelles deux fois.', 'My brother had already been to Brussels twice.',
    '/mɔ̃ fʁɛʁ e.tɛ de.ʒa və.ny a bʁy.sɛl dø fwa/', 'mohⁿ FREHR | ay-teh day-zha vuh-NÜ a brü-SEL | deu FWA', ['adverbe', 'deja']),
  sent(1729, "Elle n'avait encore rien dit à personne.", 'She had not yet said anything to anyone.',
    '/ɛl na.vɛ.tɑ̃.kɔʁ ʁjɛ̃ di a pɛʁ.sɔn/', 'el na-veh-tahⁿ-KOR ryehⁿ DEE | a pehr-SONN', ['adverbe', 'encore']),
  gap(1730, "Quand je suis arrivé, la réunion n'avait pas encore commencé.", "When I arrived, the meeting hadn't started yet.",
    '/kɑ̃ ʒə sɥi.za.ʁi.ve la ʁe.y.njɔ̃ na.vɛ pa.zɑ̃.kɔʁ kɔ.mɑ̃.se/', 'kahⁿ zhuh swee-za-ree-VAY | la ray-ü-NYOHⁿ na-veh pa-zahⁿ-KOR ko-mahⁿ-SAY',
    'Quand je suis arrivé, la réunion ___ . (commencer · pas encore)',
    "Ne avant l'auxiliaire, pas encore après lui, le participe en dernier. EN: ne... pas encore round the auxiliary.",
    ['adverbe', 'pas-encore']),
  gap(1731, 'Il avait déjà lu le livre quand le film est sorti.', 'He had already read the book when the film came out.',
    '/i.la.vɛ de.ʒa ly lə livʁ kɑ̃ lə film ɛ sɔʁ.ti/', 'ee-la-veh day-zha LÜ luh LEEVR | kahⁿ luh FEELM eh sor-TEE',
    'Il ___ le livre quand le film est sorti. (lire · déjà)',
    "Déjà se glisse entre avait et lu. EN: déjà sits between the auxiliary and the participle.",
    ['adverbe', 'deja'], FCVDR),
  rule(1732, "Entre l'auxiliaire et le participe : j'avais déjà fini.", 'Between the auxiliary and the participle: j’avais déjà fini.',
    '/ɑ̃.tʁə lɔk.si.ljɛʁ e lə paʁ.ti.sip ʒa.vɛ de.ʒa fi.ni/', 'ahⁿ-truh lok-see-LYEHR ay luh par-tee-SEEP | zha-veh day-zha fee-NEE',
    'Où se placent déjà, jamais, bien ?', "Entre les deux mots du verbe, comme au passé composé.", ['adverbe']),
  sent(1733, "Je n'étais jamais allée aussi loin.", 'I had never been so far.',
    '/ʒə ne.tɛ ʒa.mɛ.za.le o.si lwɛ̃/', 'zhuh nay-teh zha-meh-za-LAY | oh-see LWEHⁿ', ['adverbe', 'jamais']),
  sent(1734, 'Nous avions souvent parlé de ce voyage.', 'We had often talked about this trip.',
    '/nu.za.vjɔ̃ su.vɑ̃ paʁ.le də sə vwa.jaʒ/', 'noo-za-vyohⁿ soo-vahⁿ par-LAY | duh suh vwa-YAZH', ['adverbe', 'souvent']),
];

/* ── ACT 8 · IL A DIT QU'IL AVAIT FINI (.1740-.1755) ──────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1740, "Elle m'a expliqué qu'elle avait changé de poste.", 'She explained to me that she had changed jobs.',
    '/ɛl ma ɛk.spli.ke kɛ.la.vɛ ʃɑ̃.ʒe də pɔst/', 'el ma ek-splee-KAY | keh-la-veh shahⁿ-zhay duh POST', ['rapporte'], FCVDR),
  sent(1741, "Il m'a raconté qu'il s'était perdu en forêt.", 'He told me he had got lost in the forest.',
    '/il ma ʁa.kɔ̃.te kil se.tɛ pɛʁ.dy ɑ̃ fɔ.ʁɛ/', 'eel ma ra-kohⁿ-TAY | keel seh-teh pehr-DÜ ahⁿ fo-REH', ['rapporte', 'pronominal']),
  sent(1742, "Nous avons appris que l'usine avait fermé.", 'We found out that the factory had closed.',
    '/nu.za.vɔ̃.za.pʁi kə ly.zin a.vɛ fɛʁ.me/', 'noo-za-vohⁿ-za-PREE | kuh lü-ZEEN a-veh fehr-MAY', ['rapporte']),
  sent(1743, "Je savais qu'elle avait déménagé.", 'I knew she had moved house.',
    '/ʒə sa.vɛ kɛ.la.vɛ de.me.na.ʒe/', 'zhuh sa-VEH | keh-la-veh day-may-na-ZHAY', ['rapporte', 'pensee']),
  sent(1744, 'Je croyais que tu avais reçu mon message.', 'I thought you had got my message.',
    '/ʒə kʁwa.jɛ kə ty a.vɛ ʁə.sy mɔ̃ me.saʒ/', 'zhuh krwa-YEH | kuh tü a-veh ruh-SÜ mohⁿ may-SAZH', ['rapporte', 'pensee']),
  sent(1745, 'Elle a dit : « J\'ai fini. »', 'She said: « I have finished. »',
    '/ɛ.la di ʒe fi.ni/', 'eh-la DEE | zhay fee-NEE', ['rapporte', 'direct']),
  sent(1746, "Elle a dit qu'elle avait fini.", 'She said she had finished.',
    '/ɛ.la di kɛ.la.vɛ fi.ni/', 'eh-la DEE | keh-la-veh fee-NEE', ['rapporte', 'recul'], FCVDR),
  sent(1747, "Elle dit qu'elle a fini.", 'She says she has finished.',
    '/ɛl di kɛ.la fi.ni/', 'el DEE | keh-la fee-NEE', ['rapporte', 'present']),
  sent(1748, "Il a répondu qu'il n'avait rien vu.", 'He answered that he had seen nothing.',
    '/il a ʁe.pɔ̃.dy kil na.vɛ ʁjɛ̃ vy/', 'eel a ray-pohⁿ-DÜ | keel na-veh ryehⁿ VÜ', ['rapporte', 'negation']),
  sent(1749, 'Ils ont annoncé que le vol avait été annulé.', 'They announced that the flight had been cancelled.',
    '/il.zɔ̃.ta.nɔ̃.se kə lə vɔl a.vɛ.te.te a.ny.le/', 'eel-zohⁿ-ta-nohⁿ-SAY | kuh luh VOL a-veh-tay-TAY a-nü-LAY', ['rapporte', 'passif']),
  sent(1750, "J'ai retrouvé le livre que tu m'avais prêté.", 'I found the book you had lent me.',
    '/ʒe ʁə.tʁu.ve lə livʁ kə ty ma.vɛ pʁɛ.te/', 'zhay ruh-troo-VAY luh LEEVR | kuh tü ma-veh preh-TAY', ['relative']),
  gap(1751, "Elle m'a dit qu'elle était rentrée la veille.", 'She told me she had come back the day before.',
    '/ɛl ma di kɛ.le.tɛ ʁɑ̃.tʁe la vɛj/', 'el ma DEE | keh-lay-teh rahⁿ-TRAY | la VEY',
    "Elle m'a dit qu'elle ___ la veille. (rentrer · son message : « Je suis rentrée hier. »)",
    "Je suis rentrée, rapporté après a dit : elle était rentrée. EN: the passé composé steps back.",
    ['rapporte', 'recul']),
  gap(1752, "Il a avoué qu'il avait caché la vérité.", 'He admitted he had hidden the truth.',
    '/il a a.vwe kil a.vɛ ka.ʃe la ve.ʁi.te/', 'eel a a-VWAY | keel a-veh ka-SHAY | la vay-ree-TAY',
    "Il a avoué qu'il ___ la vérité. (cacher · son aveu : « J'ai caché la vérité. »)",
    "Avouer au passé fait reculer le passé composé. EN: a past reporting verb moves it back.",
    ['rapporte', 'recul'], FCVDR),
  rule(1753, 'Après un verbe de parole au passé, le passé composé du message devient plus-que-parfait.', 'After a past verb of saying, the passé composé of the message becomes plus-que-parfait.',
    '/a.pʁɛ œ̃ vɛʁb də pa.ʁɔl o pa.se lə pa.se kɔ̃.po.ze dy me.saʒ də.vjɛ̃ ply kə paʁ.fɛ/', 'a-preh uhⁿ vehrb duh pa-ROL oh pa-SAY | luh pa-say kohⁿ-poh-ZAY dü may-SAZH | duh-vyehⁿ plü kuh par-FEH',
    'Il a dit, il a expliqué, il a raconté : que devient le passé composé ?', "Il recule : j'ai fini devient il avait fini. Après il dit, rien ne bouge.", ['recul']),
  sent(1754, 'Le directeur a précisé que le contrat avait été signé.', 'The director made clear that the contract had been signed.',
    '/lə di.ʁɛk.tœʁ a pʁe.si.ze kə lə kɔ̃.tʁa a.vɛ.te.te si.ɲe/', 'luh dee-rek-TUHR a pray-see-ZAY | kuh luh kohⁿ-TRA a-veh-tay-TAY see-NYAY', ['rapporte', 'passif']),
  sent(1755, "On m'a demandé si j'avais déjà vécu à l'étranger.", 'I was asked whether I had ever lived abroad.',
    '/ɔ̃ ma də.mɑ̃.de si ʒa.vɛ de.ʒa ve.ky a le.tʁɑ̃.ʒe/', 'ohⁿ ma duh-mahⁿ-DAY | see zha-veh day-zha vay-KÜ | a lay-trahⁿ-ZHAY', ['rapporte', 'question']),
];

/* ── ACT 9 · SI J'AVAIS SU (.1760-.1772) ──────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1760, "Si j'avais su, je serais venu plus tôt.", 'If I had known, I would have come earlier.',
    '/si ʒa.vɛ sy ʒə sə.ʁɛ və.ny ply to/', 'see zha-veh SÜ | zhuh suh-reh vuh-NÜ plü TOH', ['si', 'hypothese']),
  sent(1761, "Si seulement j'avais écouté ma mère.", 'If only I had listened to my mother.',
    '/si sœl.mɑ̃ ʒa.vɛ.ze.ku.te ma mɛʁ/', 'see suhl-MAHⁿ | zha-veh-zay-koo-TAY ma MEHR', ['si', 'regret'], FCVDR),
  sent(1762, 'Si seulement nous étions partis plus tôt.', 'If only we had left earlier.',
    '/si sœl.mɑ̃ nu.ze.tjɔ̃ paʁ.ti ply to/', 'see suhl-MAHⁿ | noo-zay-tyohⁿ par-TEE plü TOH', ['si', 'regret']),
  sent(1763, "Si seulement tu m'avais prévenu.", 'If only you had warned me.',
    '/si sœl.mɑ̃ ty ma.vɛ pʁe.və.ny/', 'see suhl-MAHⁿ | tü ma-veh pray-vuh-NÜ', ['si', 'regret']),
  sent(1764, "Si tu avais pris le train, tu serais arrivé à l'heure.", 'If you had taken the train, you would have arrived on time.',
    '/si ty a.vɛ pʁi lə tʁɛ̃ ty sə.ʁɛ.za.ʁi.ve a lœʁ/', 'see tü a-veh pree luh TREHⁿ | tü suh-reh-za-ree-VAY a LUHR', ['si', 'hypothese']),
  sent(1765, 'Si elle avait gardé ses reçus, elle aurait été remboursée.', 'If she had kept her receipts, she would have been reimbursed.',
    '/si ɛ.la.vɛ ɡaʁ.de se ʁə.sy ɛ.lo.ʁɛ.te.te ʁɑ̃.buʁ.se/', 'see eh-la-veh gar-DAY say ruh-SÜ | eh-loh-reh-tay-TAY rahⁿ-boor-SAY', ['si', 'hypothese']),
  sent(1766, 'Si je parlais italien, je lirais ce roman.', 'If I spoke Italian, I would read this novel.',
    '/si ʒə paʁ.lɛ i.ta.ljɛ̃ ʒə li.ʁɛ sə ʁɔ.mɑ̃/', 'see zhuh par-leh ee-ta-LYEHⁿ | zhuh lee-reh suh ro-MAHⁿ', ['si', 'present-irreel']),
  sent(1767, "Si j'avais appris l'italien, j'aurais lu ce roman.", 'If I had learned Italian, I would have read this novel.',
    '/si ʒa.vɛ.za.pʁi li.ta.ljɛ̃ ʒo.ʁɛ ly sə ʁɔ.mɑ̃/', 'see zha-veh-za-pree lee-ta-LYEHⁿ | zhoh-reh LÜ suh ro-MAHⁿ', ['si', 'hypothese']),
  sent(1768, 'Si nous avions vérifié l\'adresse, nous ne nous serions pas perdus.', 'If we had checked the address, we would not have got lost.',
    '/si nu.za.vjɔ̃ ve.ʁi.fje la.dʁɛs nu nə nu sə.ʁjɔ̃ pa pɛʁ.dy/', 'see noo-za-vyohⁿ vay-ree-FYAY la-DRESS | noo nuh noo suh-ryohⁿ pa pehr-DÜ', ['si', 'hypothese']),
  gap(1769, "Si j'avais su, je n'aurais pas signé.", 'If I had known, I would not have signed.',
    '/si ʒa.vɛ sy ʒə no.ʁɛ pa si.ɲe/', 'see zha-veh SÜ | zhuh noh-reh pa see-NYAY',
    "Si j'___ , je n'aurais pas signé. (savoir · un passé qui n'a pas eu lieu)",
    "Après si, le plus-que-parfait : j'avais su. Jamais j'aurais su. EN: si takes the plus-que-parfait.",
    ['si', 'hypothese'], FCVDR),
  gap(1770, "Si seulement il avait lu le mode d'emploi.", 'If only he had read the instructions.',
    '/si sœl.mɑ̃ i.la.vɛ ly lə mɔd dɑ̃.plwa/', 'see suhl-MAHⁿ | ee-la-veh LÜ luh mod dahⁿ-PLWA',
    "Si seulement il ___ le mode d'emploi. (lire · un regret)",
    "Si seulement + plus-que-parfait : le regret tient en une moitié. EN: one half is enough for a regret.",
    ['si', 'regret']),
  rule(1771, "Si + plus-que-parfait : si j'avais su.", 'Si + plus-que-parfait: if I had known.',
    '/si ply kə paʁ.fɛ si ʒa.vɛ sy/', 'see plü kuh par-FEH | see zha-veh SÜ',
    'Après si, pour un passé qui n’a pas eu lieu ?', "Le plus-que-parfait. Le résultat, au conditionnel passé, est le sujet des leçons 2 et 3 du B2.", ['si']),
  sent(1772, "Si elle ne m'avait pas aidé, j'aurais abandonné.", 'If she had not helped me, I would have given up.',
    '/si ɛl nə ma.vɛ pa.ze.de ʒo.ʁɛ.za.bɑ̃.dɔ.ne/', 'see el nuh ma-veh pa-zay-DAY | zhoh-reh-za-bahⁿ-do-NAY', ['si', 'hypothese']),
];

/* ── ACT 10 · LES FAUSSES PISTES (.1780-.1790) ────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1780, "Tout le monde avait faim, mais personne ne s'est plaint.", 'Everyone was hungry, but nobody complained.',
    '/tu lə mɔ̃d a.vɛ fɛ̃ mɛ pɛʁ.sɔn nə sɛ plɛ̃/', 'too luh MOHⁿD a-veh FEHⁿ | meh pehr-SONN nuh seh PLEHⁿ', ['piste', 'imparfait-avoir']),
  sent(1781, "Hier, j'ai fini mon rapport et je suis parti.", 'Yesterday I finished my report and left.',
    '/jɛʁ ʒe fi.ni mɔ̃ ʁa.pɔʁ e ʒə sɥi paʁ.ti/', 'YEHR | zhay fee-NEE mohⁿ ra-POR | ay zhuh swee par-TEE', ['piste', 'ordre']),
  sent(1782, "J'ai déjà vu ce film.", 'I have already seen this film.',
    '/ʒe de.ʒa vy sə film/', 'zhay day-zha VÜ | suh FEELM', ['piste', 'passe-compose']),
  sent(1783, "J'avais déjà vu ce film quand tu me l'as proposé.", 'I had already seen this film when you suggested it.',
    '/ʒa.vɛ de.ʒa vy sə film kɑ̃ ty mə la pʁɔ.po.ze/', 'zha-veh day-zha VÜ suh FEELM | kahⁿ tü muh la pro-poh-ZAY', ['piste', 'avant'], FCVDR),
  sent(1784, 'Elle habitait à Liège depuis deux ans quand elle a rencontré Paul.', 'She had been living in Liège for two years when she met Paul.',
    '/ɛ.la.bi.tɛ a ljɛʒ də.pɥi dø.zɑ̃ kɑ̃.tɛ.la ʁɑ̃.kɔ̃.tʁe pɔl/', 'eh-la-bee-TEH a LYEHZH | duh-pwee deu-ZAHⁿ | kahⁿ-teh-la rahⁿ-kohⁿ-TRAY POL', ['piste', 'depuis'], FCVDR),
  sent(1785, "Il était fatigué parce qu'il avait mal dormi.", 'He was tired because he had slept badly.',
    '/i.le.tɛ fa.ti.ɡe paʁs kil a.vɛ mal dɔʁ.mi/', 'ee-lay-teh fa-tee-GAY | pars keel a-veh mal dor-MEE', ['piste', 'cause']),
  sent(1786, 'La porte était fermée à clé.', 'The door was locked.',
    '/la pɔʁt e.tɛ fɛʁ.me a kle/', 'la PORT | ay-teh fehr-MAY a KLAY', ['piste', 'etat']),
  sent(1787, "Quand je suis rentré, quelqu'un avait fermé la porte à clé.", 'When I got home, someone had locked the door.',
    '/kɑ̃ ʒə sɥi ʁɑ̃.tʁe kɛl.kœ̃ a.vɛ fɛʁ.me la pɔʁt a kle/', 'kahⁿ zhuh swee rahⁿ-TRAY | kel-KUHⁿ a-veh fehr-MAY | la PORT a KLAY', ['piste', 'avant']),
  rule(1788, 'Sans repère dans le passé, pas de plus-que-parfait.', 'No reference point in the past, no plus-que-parfait.',
    '/sɑ̃ ʁə.pɛʁ dɑ̃ lə pa.se pa də ply kə paʁ.fɛ/', 'sahⁿ ruh-PEHR dahⁿ luh pa-SAY | pa duh plü kuh par-FEH',
    'Quand le plus-que-parfait est-il faux ?', "Quand rien ne recule : un récit dans l'ordre, une expérience jusqu'à aujourd'hui, un état.", ['piste']),
  sent(1789, "Je n'avais jamais mangé de poutine avant ce voyage.", 'I had never eaten poutine before that trip.',
    '/ʒə na.vɛ ʒa.mɛ mɑ̃.ʒe də pu.tin a.vɑ̃ sə vwa.jaʒ/', 'zhuh na-veh zha-meh mahⁿ-ZHAY duh poo-TEEN | a-vahⁿ suh vwa-YAZH', ['piste', 'avant']),
  sent(1790, "Je n'ai jamais mangé de poutine.", 'I have never eaten poutine.',
    '/ʒə ne ʒa.mɛ mɑ̃.ʒe də pu.tin/', 'zhuh nay zha-meh mahⁿ-ZHAY | duh poo-TEEN', ['piste', 'passe-compose']),
];

/* ── ACT 11 · RACONTER CE QUI S'ÉTAIT PASSÉ (.1791-.1798) ─────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1791, "Ce matin-là, rien ne s'était passé comme prévu.", 'That morning, nothing had gone to plan.',
    '/sə ma.tɛ̃.la ʁjɛ̃ nə se.tɛ pa.se kɔm pʁe.vy/', 'suh ma-tehⁿ-LA | ryehⁿ nuh seh-teh pa-SAY | kom pray-VÜ', ['tache', 'avant'], FCVDR),
  sent(1792, "La veille, j'avais tout préparé.", 'The day before, I had got everything ready.',
    '/la vɛj ʒa.vɛ tu pʁe.pa.ʁe/', 'la VEY | zha-veh too pray-pa-RAY', ['tache', 'avant']),
  sent(1793, 'Quand je suis arrivée au guichet, on avait vendu la dernière place.', 'When I got to the ticket office, the last seat had been sold.',
    '/kɑ̃ ʒə sɥi.za.ʁi.ve o ɡi.ʃɛ ɔ̃.na.vɛ vɑ̃.dy la dɛʁ.njɛʁ plas/', 'kahⁿ zhuh swee-za-ree-VAY oh gee-SHEH | ohⁿ-na-veh vahⁿ-DÜ la dehr-nyehr PLASS', ['tache', 'avant']),
  sent(1794, "C'est alors que j'ai compris mon erreur.", 'That is when I understood my mistake.',
    '/sɛ.ta.lɔʁ kə ʒe kɔ̃.pʁi mɔ̃.nɛ.ʁœʁ/', 'seh-ta-LOR kuh zhay kohⁿ-PREE | mohⁿ-neh-RUHR', ['tache', 'action']),
  sent(1795, "J'avais noté la mauvaise date dans mon agenda.", 'I had written the wrong date in my diary.',
    '/ʒa.vɛ nɔ.te la mo.vɛz dat dɑ̃ mɔ̃.na.ʒɛ̃.da/', 'zha-veh no-TAY la moh-vez DAT | dahⁿ mohⁿ-na-zhehⁿ-DA', ['tache', 'avant'], FCVDR),
  sent(1796, "Si seulement j'avais relu mon billet.", 'If only I had reread my ticket.',
    '/si sœl.mɑ̃ ʒa.vɛ ʁə.ly mɔ̃ bi.jɛ/', 'see suhl-MAHⁿ | zha-veh ruh-LÜ mohⁿ bee-YEH', ['tache', 'regret']),
  sent(1797, "Finalement, une passagère m'a cédé sa place.", 'In the end, a passenger gave me her seat.',
    '/fi.nal.mɑ̃ yn pa.sa.ʒɛʁ ma se.de sa plas/', 'fee-nal-MAHⁿ | ün pa-sa-ZHEHR ma say-DAY sa PLASS', ['tache', 'action']),
  sent(1798, 'Elle avait changé ses plans la veille.', 'She had changed her plans the day before.',
    '/ɛ.la.vɛ ʃɑ̃.ʒe se plɑ̃ la vɛj/', 'eh-la-veh shahⁿ-ZHAY say PLAHⁿ | la VEY', ['tache', 'avant']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS
 *
 *  The long readings (B2: 200 to 350 words) and the eight short « dans un
 *  texte » paragraphs (60 to 120 words) that close acts 3 to 10. They live
 *  here so the reading, the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the evening at the cinema, Lyon. */
export const LECTURE_CINEMA =
  "Samedi soir, Karim et moi avions rendez-vous devant le cinéma Comœdia, à Lyon, à vingt heures. Karim avait acheté les billets la veille, sur son téléphone. Moi, j'avais passé l'après-midi chez ma sœur, à Villeurbanne, et je n'avais pas vu l'heure passer. Quand je suis sorti de chez elle, il était déjà vingt heures moins le quart. J'ai couru jusqu'au tram. Évidemment, le tram venait de partir. J'ai attendu le suivant pendant dix minutes, sous la pluie. Quand je suis enfin arrivé devant le cinéma, Karim m'attendait sur le trottoir, les billets à la main. Il m'avait envoyé trois messages. Je ne les avais pas lus. Nous sommes entrés sans un mot. Dans la salle, les lumières étaient éteintes et le film avait commencé un bon quart d'heure plus tôt. Nous avions raté toute la scène d'ouverture, celle dont tout le monde parlait. Karim ne m'a rien reproché, mais je voyais bien qu'il était déçu : il avait attendu ce film pendant des mois, et il avait même relu le roman la semaine précédente. À la sortie, Karim m'a raconté ce que nous avions manqué : le héros avait perdu la mémoire avant même le début de l'histoire, et tout le film remontait vers ce moment-là. « En fait, a-t-il dit en riant, c'est un film au plus-que-parfait. » Sur le moment, je n'ai pas compris la plaisanterie. Aujourd'hui, je la comprends très bien.";

/** Act 5: Julien's first day in Québec. */
export const LECTURE_JULIEN =
  "Le 3 janvier, Julien a atterri à Québec avec une valise et un contrat de six mois. Il avait quitté Lyon le matin même, et il n'avait presque pas dormi dans l'avion. Il neigeait quand il est sorti de l'aéroport. Il faisait moins vingt, et il n'avait pas prévu de manteau : à Lyon, fin décembre, il faisait encore doux. Sa logeuse, Mme Pelletier, lui avait écrit une semaine plus tôt. Elle partait chez sa fille pour les fêtes, et elle avait laissé les clés chez la voisine du rez-de-chaussée. D'après son message, elle avait aussi rempli le frigo et laissé un plan du quartier sur la table de la cuisine. Julien a pris un taxi jusqu'à la rue Saint-Jean. Il a sonné chez la voisine, mais elle était sortie. Il a attendu une heure dans le froid, sa valise à côté de lui. Quand la voisine est enfin rentrée, elle s'est confondue en excuses : elle avait oublié qu'il arrivait ce jour-là. Elle lui a donné les clés et un bol de soupe aux pois. Ce soir-là, en se couchant, Julien a repensé à sa journée. Il avait eu froid, il avait eu faim, il s'était senti très seul. Pourtant, il savait déjà qu'il aimerait cette ville. Le lendemain matin, il a découvert que Mme Pelletier avait bien rempli le frigo, et qu'elle avait même glissé une paire de gants dans le tiroir de l'entrée.";

/** Act 10: Tom's first draft and his tutor's comment, Brussels. */
export const LECTURE_CORRIGE =
  "Voici le premier jet de Tom, étudiant à Bruxelles, suivi du commentaire de sa tutrice. « L'été dernier, j'avais passé un mois au Sénégal. J'étais arrivé à Dakar le 2 juillet. Le premier jour, j'avais visité l'île de Gorée, puis j'avais mangé un thiéboudienne chez mon ami Moussa. Il faisait très chaud, et j'avais soif tout le temps. Je n'étais jamais allé en Afrique avant ce voyage. » Le commentaire de Mme Lambert : « Tom, vous racontez les faits dans l'ordre, du premier au dernier : le passé composé suffit. J'ai passé un mois, je suis arrivé, j'ai visité, puis j'ai mangé. Le plus-que-parfait recule par rapport à un moment du récit ; ici, rien ne recule. Pensez au lecteur : chaque plus-que-parfait lui demande de chercher un moment plus tard dans le récit, et il ne le trouve pas. En revanche, deux phrases sont justes. « J'avais soif » n'est pas un plus-que-parfait : c'est l'imparfait d'avoir soif, un état qui dure. Et « je n'étais jamais allé en Afrique avant ce voyage » est bien un plus-que-parfait : le voyage sert de repère, et votre expérience s'arrête juste avant lui. Réécrivez le début en ne gardant que ce plus-que-parfait-là. Votre texte gagnera en clarté, et votre lecteur saura enfin dans quel ordre les choses se sont passées. »";

/** Act 11: the model narrative, a reader's story in a Geneva magazine. */
export const LECTURE_MODELE =
  "Récit publié dans la rubrique « Ça m'est arrivé » d'un magazine genevois. En mars dernier, ma grand-mère a fêté ses quatre-vingt-dix ans. Toute la famille avait gardé le secret pendant des semaines. Ma tante avait réservé une salle au bord du lac, mon cousin avait retrouvé de vieilles photos, et moi, j'avais écrit un discours. Nous avions même prévenu le restaurant d'en face, qui devait apporter le gâteau à quinze heures. Le jour de la fête, pourtant, rien ne s'est passé comme prévu. Quand nous sommes arrivés à la salle, ma grand-mère était déjà là, assise au premier rang. Quelqu'un lui avait tout raconté la veille. Nous avons appris plus tard que c'était son voisin : il croyait qu'elle était au courant. Elle avait donc eu toute la nuit pour préparer, elle aussi, une surprise. Au moment du dessert, elle s'est levée et elle a lu une lettre qu'elle avait écrite soixante ans plus tôt, le jour de son mariage. Elle ne l'avait jamais montrée à personne. Pendant un long moment, personne n'a parlé. Si le voisin n'avait pas trahi le secret, nous n'aurions jamais entendu cette lettre. Si seulement j'avais pensé à l'enregistrer. Ma grand-mère, elle, a simplement souri : elle avait toujours aimé avoir le dernier mot.";

/** The eight « dans un texte » paragraphs (acts 3 to 10). */
export const TEXTE_A3 =
  "En rangeant le grenier, Mariam a trouvé une boîte en fer. Dedans, il y avait les lettres que sa mère (écrire) à son père pendant ses études. Sa mère (naître) à Oran, et elle (arriver) à Marseille à dix-neuf ans. Ses deux sœurs (rester) là-bas. Les photos qu'elle (garder) étaient jaunies, et la bague qu'elle (recevoir) pour ses fiançailles avait disparu. Mariam a refermé la boîte sans bruit. Elle (ne jamais poser) de questions sur ces années-là, et elle a compris ce soir-là qu'il était temps de le faire.";

export const TEXTE_A4 =
  "Le matin de l'oral, Léa et Inès sont arrivées ensemble devant la salle. Tout ce qui est entre parenthèses s'était passé avant. Elles (se lever) à cinq heures. Elles (se préparer) en silence, puis elles (se téléphoner) pour vérifier l'adresse. La veille, elles (se disputer) à propos du trajet, mais elles (se réconcilier) avant de dormir. Léa (se couper) les cheveux la semaine précédente, et le matin même, elle (se maquiller) avec soin. Quand l'examinateur leur a serré la main, elles (ne pas encore se rendre compte) de leur chance.";

export const TEXTE_A5 =
  "Quand Amandine (arriver) au bureau lundi matin, tout le monde la (regarder) en souriant. Il (faire) étrangement calme dans l'open space. Sur son bureau, quelqu'un (poser) un gâteau et une grande carte. Ses collègues (apprendre) la nouvelle pendant le week-end : elle (obtenir) le poste de Montréal. Amandine (rougir), puis elle (éclater) de rire. Elle (ne rien dire) à personne, mais sa cheffe, visiblement, (parler) un peu trop vite. La réunion de neuf heures a commencé avec vingt minutes de retard.";

export const TEXTE_A6 =
  "Samuel raconte sa semaine dans l'ordre. Lundi, il a appris que le rendez-vous avec le client aurait lieu vendredi. Mardi et mercredi, il a préparé sa présentation. Jeudi soir, il a oublié son ordinateur au bureau. Vendredi matin, le métro est tombé en panne entre deux stations. Il est arrivé au rendez-vous avec vingt minutes de retard, sans ordinateur, et le client est reparti avant la fin. Réécris cette histoire en partant de vendredi : l'arrivée au rendez-vous devient ton repère, et tout ce qui la précède recule.";

export const TEXTE_A7 =
  "Quand Awa est arrivée à Montréal, en novembre, elle (ne jamais voir) la neige. Elle (déjà travailler) deux ans à Dakar et elle (juste finir) son master. Ses cousins lui (souvent parler) de l'hiver québécois, mais elle (ne pas encore acheter) de bottes. Le premier matin, elle (à peine ouvrir) la porte de l'immeuble qu'elle a compris son erreur. L'après-midi même, elle est allée dans un magasin de la rue Sainte-Catherine, où une vendeuse l'a aidée à choisir un vrai manteau d'hiver.";

export const TEXTE_A8 =
  "Au téléphone, ton ami Hugo t'a dit : « J'ai perdu mon portefeuille dans le train. Je suis allé au bureau des objets trouvés, mais personne ne l'a rapporté. Heureusement, ma sœur m'a prêté de l'argent. » Le soir, tu racontes l'appel à ta colocataire, qui ne connaît pas Hugo. Tu commences ainsi : « Hugo m'a dit que… » Continue, sans guillemets, en faisant reculer chaque verbe au passé composé. Garde les mêmes faits, dans le même ordre, et n'oublie pas que Hugo devient il et que ma sœur devient sa sœur.";

export const TEXTE_A9 =
  "Le jour du déménagement, tout est allé de travers. Nadia n'a pas réservé de camion à temps. Elle n'a pas vérifié la taille de l'ascenseur. Son frère n'est pas venu l'aider, parce qu'elle ne l'a pas prévenu. Le canapé est resté trois jours sur le trottoir, sous la pluie. Le soir, épuisée, assise sur un carton, elle a écrit dans son carnet quatre phrases qui commençaient toutes par « Si seulement ». Retrouve ces quatre phrases : chacune dit le contraire d'un fait de la journée.";

export const TEXTE_A10 =
  "Clara a écrit ce message à sa marraine, mais elle a mis trop de plus-que-parfaits. « Hier, j'avais reçu ta carte. J'étais très touchée. Je l'avais lue deux fois, puis je l'avais montrée à ma mère. Elle avait souri. Quand je suis rentrée du travail, le facteur avait déjà déposé un colis de ta part. Le soir, j'avais appelé ma sœur pour lui raconter. » Un seul plus-que-parfait a un vrai repère. Trouve-le, puis remets tous les autres verbes au bon temps.";

/** The four answers the act 9 text asks for (shown only as the answer). */
export const TEXTE_A9_REPONSES = [
  "Si seulement j'avais réservé un camion à temps.",
  "Si seulement j'avais vérifié la taille de l'ascenseur.",
  "Si seulement j'avais prévenu mon frère.",
  "Si seulement le canapé n'était pas resté dehors.",
] as const;
