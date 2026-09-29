// b2.07.l1 « Le futur antérieur »: the authored corpus, the imports and the
// citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.01
// plus-que-parfait), under the B2 rules of B2-BUILD-LOG.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 7 of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE FUTUR ANTÉRIEUR, BUILT AND USED, ALWAYS IN CONTRAST.
//
//     la forme          avoir or être at the futur simple (aur-, ser-, the
//                       stems of lesson 6 in B1) + the participle, the
//                       auxiliary chosen exactly as in the passé composé
//     les accords       être: with the subject; avoir: with a direct object
//                       placed before; pronominals always être, with the two
//                       passé composé exceptions (se indirect, object after)
//     la ligne          futur simple (at or after a future moment) against
//                       futur antérieur (already done by it), round ONE
//                       moment to come (« le jalon »)
//     les charnières    quand, lorsque, dès que, aussitôt que, une fois que,
//                       après que (+ indicatif), tant que... ne... pas, with
//                       prior completion; futur simple when the two go
//                       together (lesson 7 in B1 said the futur antérieur
//                       after quand belongs to B2: this is where it is built)
//     le calque         English present perfect after when / as soon as /
//                       once (« when you've finished » = quand tu auras fini);
//                       « quand j'ai fini » kept for HABITS only
//     les échéances     d'ici, avant, au plus tard, dans + durée, à + heure:
//                       what will already be done at a deadline
//     l'hypothèse       il aura oublié, elle se sera trompée de jour: a
//                       likely explanation of a past fact, beside « il a dû »
//                       and « il a sans doute »
//     le bilan          en dix ans, j'aurai vu... ; cette année aura été...
//     aurai / aurais    the one-letter pair with lesson 2 in B2 (its act 7
//                       showed two rows of this tense as the other half of
//                       « j'aurai dû »); the nous test; never a future
//                       after si
//     les fausses pistes aurai + nom (futur d'avoir), sera + participe
//                       passif (lesson 18 in B1), serai installé (a state)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 5 in B1    the futur simple (reframe quoted)
//     lesson 6 in B1    the irregular stems aur-, ser- (reframe quoted);
//                       its row .378 « ce quartier aura beaucoup changé » is
//                       the first futur antérieur a learner ever read
//     lesson 7 in B1    the future on both sides of quand (reframe quoted);
//                       its four named futur antérieur rows are reused here
//     lesson 18 in B1   the future passive (sera signé), a false lead
//     lesson 1 in B2    the plus-que-parfait: the mirror image (reframe
//                       quoted)
//     lesson 2 in B2    the conditionnel passé, j'aurais against j'aurai
//                       (reframe quoted)
//     lesson 25 in B2   its row « D'ici jeudi, j'aurai parlé à ma direction »
//   FORWARD: lesson 8 in B2 (passé simple, recognition), named in the roundup.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `projets-et-futur` (fondations, a2-b2). Sub-theme for this
//     lesson, to set in Postgres at import: « ce qui aura été fait ». The
//     seed (read 2026-09-27, 19,308 items) holds b1 rows 200-577 and
//     1000-1378 here and no `fr.b2` row. Lessons 3 and 4 in B2 own
//     1400-1599 and 1600-1799 (drafts, same publish): not touched.
//     Postgres was NOT probed by this author; the block was assigned by the
//     orchestrator's brief.
//
//  2. ID BLOCK: `.1800`-`.1999`, assigned by the brief. Authored:
//     `.1800`-`.1988` with gaps between act blocks (see the act banners).
//     Nothing outside the block.
//
//  3. NO VOCAB-TYPE NON-SENTENCE ROW is authored, so the flashcard hub's
//     headword rule (theme + headword) cannot clash with any published row
//     (the theme holds vocab phrases like « je finirai » from lesson 5 in
//     B1). Every row is a sentence, a conjugation card, a gapfill card or a
//     rule card. Every `fr` was checked against the seed and every other
//     b1/b2 corpus in data/ for an exact twin: none (lesson 2 in B2 owns
//     « j'aurai fini », « Nous aurons terminé avant l'été. » and « Quand tu
//     arriveras, je serai déjà parti. »; none is retyped here).
//
//  4. REUSED ROWS. B1 is live (v76) and lesson 25 in B2 is live (v77), so
//     `src()` resolves them. Reused BY ID, never twinned (§F).
//
//  5. RESPELLINGS. The -rai ending of the futur is respelled RAY [e] and the
//     -rais ending of the conditional REH [ɛ], as lesson 2 in B2 does, so the
//     pair the lesson teaches is visible in the respelling (lesson 5 in B1
//     wrote REH for both; the difference is the point here). Spelled for the
//     nasal checker, not the ear: « semaine » suh-MENN, « personne »
//     pehr-SONN, « panne » PANN. No U+203F anywhere, IPA included.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does. Reused rows from lesson 7 in B1 carry ’ and are printed as
//     they are. The one `scenario` uses ’ only and embeds no corpus row.
//
//  7. NO verbCheck ON THE CONJUGATION CARDS: no published row carries a
//     futur antérieur target, so the conjugator key is unproven in the
//     publish gate (as lessons 1 and 2 in B2 decided).
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
  id: 'b2.07',
  seq: 7,
  title: 'The Future Perfect',
  sub: 'Le futur antérieur',
  canDo: 'Can build the futur antérieur with the right auxiliary and agreements, including pronominal verbs, and use it to say what will already be done at a future moment: after quand, dès que, une fois que and après que, against a deadline, in a plan or a review of a period, and as a likely explanation of a past fact, telling it apart from the futur simple, the English present perfect and the conditionnel passé',
  prereqUnitIds: ['b1.05', 'b1.06', 'b1.07', 'b2.01', 'b2.02'],
} as const;

export const LESSON_ID = 'b2.07.l1';
export const THEME = 'projets-et-futur';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1800, 1999]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan in
 *  B2-BUILD-LOG.md numbers b2.01 to b2.34 in trail order.
 * ══════════════════════════════════════════════════════════════════════════ */

export const FUT_FORM_UNIT = 'b1.05';
export const FUT_IRREG_UNIT = 'b1.06';
export const FUT_USAGE_UNIT = 'b1.07';
export const PAIRES_UNIT = 'b1.04';
export const PASSIF_UNIT = 'b1.18';
export const PQP_UNIT = 'b2.01';
export const COND_PASSE_UNIT = 'b2.02';
export const ECOUTE_UNIT = 'b2.25';
export const PASSE_SIMPLE_UNIT = 'b2.08';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const FUT_FORM_REF = refFr(FUT_FORM_UNIT);
export const FUT_IRREG_REF = refFr(FUT_IRREG_UNIT);
export const FUT_USAGE_REF = refFr(FUT_USAGE_UNIT);
export const PAIRES_REF = refFr(PAIRES_UNIT);
export const PASSIF_REF = refFr(PASSIF_UNIT);
export const PQP_REF = refFr(PQP_UNIT);
export const COND_PASSE_REF = refFr(COND_PASSE_UNIT);
export const ECOUTE_REF = refFr(ECOUTE_UNIT);
export const PASSE_SIMPLE_REF = refFr(PASSE_SIMPLE_UNIT);
export const FUTUR_B1_RANGE_REF = 'les leçons 5, 6 et 7 du B1';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B105_REFRAME, REFRAME_EN as B105_REFRAME_EN } from '../b1/futur-simple-corpus.ts';
export { REFRAME as B106_REFRAME, REFRAME_EN as B106_REFRAME_EN } from '../b1/futur-irregulier-corpus.ts';
export { REFRAME as B107_REFRAME, REFRAME_EN as B107_REFRAME_EN } from '../b1/futur-usage-corpus.ts';
export { REFRAME as B201_REFRAME, REFRAME_EN as B201_REFRAME_EN } from './plus-que-parfait-corpus.ts';
export { REFRAME as B202_REFRAME, REFRAME_EN as B202_REFRAME_EN } from './conditionnel-passe-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE JALON. A marker planted further down the road: vendredi à neuf
 *  heures, ton arrivée, la fin du mois, dans dix ans, or the moment you
 *  will find out. The futur antérieur stands on it and looks back at what
 *  will already be done. The futur simple stands on it and says what
 *  happens there. The inference use (il aura oublié) is the same look: you
 *  stand at the moment you will know, and look back at the explanation.
 *
 *  It is the mirror of lesson 1 in B2 (the plus-que-parfait stands on a
 *  PAST repère and looks back), which act 2 quotes.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le futur antérieur se place plus tard et regarde en arrière.';
export const REFRAME_EN = 'The futur antérieur stands at a later moment and looks back.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le futur antérieur dit ce qui sera déjà fait au moment dont tu parles.',
    why: 'The exact mirror of lesson 1 in B2, and true for acts 1 to 7 and 9. False in act 8: « il n’est pas venu, il aura oublié » is about something already done NOW, not at a future moment. A reframe must hold everywhere the lesson goes.',
  },
  {
    text: 'Le futur antérieur, c’est le will have de l’anglais.',
    why: 'Act 6 is built against it: « when you’ve finished » has no will have and still takes quand tu auras fini, and « he must have forgotten » (act 8) has no will have either. A translation rule drags the learner into the calque the lesson corrects.',
  },
  {
    text: 'Après quand, le futur antérieur.',
    why: 'A formula, and false in act 5: « quand tu liras ce message, je serai dans le train » keeps the futur simple, because the two things happen together. It is also silent on deadlines, bilans and inference.',
  },
  {
    text: 'Le futur antérieur, c’est le plus-que-parfait du futur.',
    why: 'Good for the timeline acts (4 and 5), where act 2 uses it as a bridge. Useless in act 8, where the tense talks about the past, and it hides the aurai / aurais trap of act 10.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-27, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const PF = (n: number) => `fr.b1.projets-et-futur.${n}`;

export const IMPORTED = {
  act1: [
    PF(378),                                   // Dans dix ans, ce quartier aura beaucoup changé.  (lesson 6 in B1)
  ],
  act2: [
    PF(1014),                                  // Le futur, c'est l'infinitif jusqu'au r, puis avoir.  (lesson 5, rule card, flashcard only)
    'fr.b1.heure-et-date.023',                 // Dans deux ans, j'aurai fini mes études.  (flashcard + sentence, no voiceflash)
  ],
  act3: [] as string[],
  act4: [
    PF(407),                                   // Quand tu arriveras, je serai déjà là.  (lesson 7: futur simple, a state)
  ],
  act5: [
    PF(414),                                   // Le futur se dit des deux côtés de quand, et jamais après si.  (lesson 7, rule card)
    PF(439),                                   // Tant que tu n’auras pas fini, tu ne sortiras pas.  (lesson 7)
    'fr.b1.maison.061',                        // Quand nous aurons fini les travaux, nous inviterons nos amis.  (dictation only)
    'fr.b1.dictee.039',                        // Dès que j'aurai fini ma formation, je chercherai un nouvel emploi.  (sentence, review)
    'fr.b1.metiers.053',                       // Elle aimerait travailler à l'étranger quand elle aura terminé ses études.  (sentence, review)
  ],
  act6: [
    PF(415),                                   // Quand j'arriverai à Bruxelles, je t'enverrai un message.  (lesson 7, gapfill)
    'fr.b1.dictee.043',                        // Quand tu auras terminé tes devoirs, tu pourras regarder un film.  (sentence, review)
  ],
  act7: [
    'fr.b2.strategies-de-comprehension.1716',  // D'ici jeudi, j'aurai parlé à ma direction.  (lesson 25 in B2)
    PF(537),                                   // D’ici vendredi, tout sera prêt.  (lesson 7: futur simple of être)
  ],
  act8: [
    'fr.b1.recits-au-passe.1207',              // Il a dû oublier.  (lesson 4 in B1: devoir, a guess about the past)
  ],
  act9: [] as string[],
  act10: [
    PF(549),                                   // Quand j’aurai le billet, je réserverai l’hôtel.  (lesson 7: futur of avoir)
    PF(465),                                   // Quand tu auras faim, tu me le diras.  (lesson 7: futur of avoir faim)
    PF(410),                                   // Quand je serai installé, je t’inviterai.  (lesson 7: être + a state)
    'fr.b1.faits-et-procedures.1049',          // Le contrat sera signé demain.  (lesson 18: the future passive)
  ],
  act11: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [
  'fr.b1.maison.061',                          // dictation only
  'fr.b1.dictee.039',                          // sentence, review
  'fr.b1.metiers.053',                         // sentence, review
  'fr.b1.dictee.043',                          // sentence, review
];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  PF(1014),                                    // flashcard only (a rule card)
  PF(414),                                     // flashcard only (a rule card)
  'fr.b1.heure-et-date.023',                   // flashcard + sentence
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `conj` a conjugation card (front « terminer · futur
 *  antérieur · je »); `gap` a gapfill card whose front gaps the verb and
 *  names the MEANING cue; `rule` a grammar card. Every row carries fr, en,
 *  ipa and respell. Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const GP = ['futur-anterieur'];

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
  cardType: 'conjugation', prompt: `${inf} · futur antérieur · ${p}`,
});

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · VENDREDI, CE SERA FAIT (.1800-.1813) ─────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1800, "Vendredi à neuf heures, j'aurai terminé la présentation.", 'By nine on Friday, I will have finished the presentation.',
    '/vɑ̃.dʁə.di a nœ.vœʁ ʒo.ʁe tɛʁ.mi.ne la pʁe.zɑ̃.ta.sjɔ̃/', 'vahⁿ-druh-DEE a nuh-VUHR | zhoh-ray tehr-mee-NAY | la pray-zahⁿ-ta-SYOHⁿ', ['scene', 'avant'], FCVDR),
  sent(1801, 'Vendredi à neuf heures, je terminerai la présentation.', 'At nine on Friday, I will finish the presentation.',
    '/vɑ̃.dʁə.di a nœ.vœʁ ʒə tɛʁ.mi.nə.ʁe la pʁe.zɑ̃.ta.sjɔ̃/', 'vahⁿ-druh-DEE a nuh-VUHR | zhuh tehr-mee-nuh-RAY | la pray-zahⁿ-ta-SYOHⁿ', ['scene', 'au-jalon']),
  sent(1802, 'Lundi soir, nous aurons validé les maquettes.', 'By Monday evening, we will have approved the mock-ups.',
    '/lœ̃.di swaʁ nu.zo.ʁɔ̃ va.li.de le ma.kɛt/', 'luhⁿ-dee SWAR | noo-zoh-rohⁿ va-lee-DAY | lay ma-KET', ['lecture', 'avant']),
  sent(1803, "Mercredi, l'équipe aura corrigé les dernières erreurs.", 'By Wednesday, the team will have fixed the last errors.',
    '/mɛʁ.kʁə.di le.kip o.ʁa kɔ.ʁi.ʒe le dɛʁ.njɛʁ.ze.ʁœʁ/', 'mehr-kruh-DEE | lay-KEEP oh-ra ko-ree-ZHAY | lay dehr-nyehr-zay-RUHR', ['lecture', 'avant']),
  sent(1804, 'Quand vous arriverez, nous aurons tout installé.', 'When you arrive, we will have set everything up.',
    '/kɑ̃ vu.za.ʁi.və.ʁe nu.zo.ʁɔ̃ tu.tɛ̃s.ta.le/', 'kahⁿ voo-za-ree-vuh-RAY | noo-zoh-rohⁿ too-tehⁿs-ta-LAY', ['lecture', 'avant'], FCVDR),
  sent(1805, 'Le graphiste sera parti en vacances.', 'The graphic designer will have gone on holiday.',
    '/lə ɡʁa.fist sə.ʁa paʁ.ti ɑ̃ va.kɑ̃s/', 'luh gra-FEEST | suh-ra par-TEE | ahⁿ va-KAHⁿS', ['lecture', 'avant', 'etre']),
  sent(1806, 'Je ne serai pas encore rentrée de Toronto.', 'I will not yet have got back from Toronto.',
    '/ʒə nə sə.ʁe pa.zɑ̃.kɔʁ ʁɑ̃.tʁe də tɔ.ʁɔ̃.to/', 'zhuh nuh suh-ray pa-zahⁿ-KOR rahⁿ-TRAY | duh to-rohⁿ-TOH', ['lecture', 'avant', 'negation']),
  rule(1807, REFRAME, REFRAME_EN,
    '/lə fy.ty.ʁɑ̃.te.ʁjœʁ sə plas ply taʁ e ʁə.ɡaʁ.dɑ̃.na.ʁjɛʁ/',
    'luh fü-tü-rahⁿ-tay-RYUHR | suh plass plü TAR | ay ruh-gar-dahⁿ-na-RYEHR',
    'À quoi sert le futur antérieur ?',
    "Tu te places à un moment à venir (vendredi, ton arrivée, dans dix ans) et tu regardes ce qui sera déjà fait.",
    ['reframe']),
  sent(1808, "Dès que vous aurez signé, nous lancerons l'impression.", 'As soon as you have signed, we will start the printing.',
    '/dɛ kə vu.zo.ʁe si.ɲe nu lɑ̃s.ʁɔ̃ lɛ̃.pʁɛ.sjɔ̃/', 'deh kuh voo-zoh-ray see-NYAY | noo lahⁿs-ROHⁿ lehⁿ-preh-SYOHⁿ', ['lecture', 'charniere']),
  sent(1809, 'Quand tu rentreras, je préparerai le dîner.', 'When you get home, I will make dinner.',
    '/kɑ̃ ty ʁɑ̃.tʁə.ʁa ʒə pʁe.pa.ʁə.ʁe lə di.ne/', 'kahⁿ tü rahⁿ-truh-RA | zhuh pray-pa-ruh-RAY luh dee-NAY', ['paire', 'au-jalon']),
  sent(1810, "Quand tu rentreras, j'aurai préparé le dîner.", 'When you get home, I will have made dinner.',
    '/kɑ̃ ty ʁɑ̃.tʁə.ʁa ʒo.ʁe pʁe.pa.ʁe lə di.ne/', 'kahⁿ tü rahⁿ-truh-RA | zhoh-ray pray-pa-RAY luh dee-NAY', ['paire', 'avant'], FCVDR),
  sent(1811, 'Quand nous arriverons, le film aura commencé.', 'When we arrive, the film will have started.',
    '/kɑ̃ nu.za.ʁi.və.ʁɔ̃ lə film o.ʁa kɔ.mɑ̃.se/', 'kahⁿ noo-za-ree-vuh-ROHⁿ | luh FEELM oh-ra ko-mahⁿ-SAY', ['paire', 'avant']),
  sent(1812, 'Quand nous arriverons, le film commencera.', 'When we arrive, the film will start.',
    '/kɑ̃ nu.za.ʁi.və.ʁɔ̃ lə film kɔ.mɑ̃s.ʁa/', 'kahⁿ noo-za-ree-vuh-ROHⁿ | luh FEELM ko-mahⁿs-RA', ['paire', 'au-jalon']),
  sent(1813, 'Le colis sera arrivé avant ton retour.', 'The parcel will have arrived before you get back.',
    '/lə kɔ.li sə.ʁa a.ʁi.ve a.vɑ̃ tɔ̃ ʁə.tuʁ/', 'luh ko-LEE | suh-ra a-ree-VAY | a-vahⁿ tohⁿ ruh-TOOR', ['usage', 'avant', 'etre']),
];

/* ── ACT 2 · LA FORME (.1816-.1841) ───────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  conj(1816, "j'aurai terminé", 'I will have finished', '/ʒo.ʁe tɛʁ.mi.ne/', 'zhoh-ray tehr-mee-NAY', 'terminer', 'je', ['avoir'], FCVDR),
  conj(1817, 'tu auras terminé', 'you will have finished', '/ty o.ʁa tɛʁ.mi.ne/', 'tü oh-ra tehr-mee-NAY', 'terminer', 'tu', ['avoir']),
  conj(1818, 'elle aura terminé', 'she will have finished', '/ɛ.lo.ʁa tɛʁ.mi.ne/', 'eh-loh-ra tehr-mee-NAY', 'terminer', 'elle', ['avoir']),
  conj(1819, 'nous aurons terminé', 'we will have finished', '/nu.zo.ʁɔ̃ tɛʁ.mi.ne/', 'noo-zoh-rohⁿ tehr-mee-NAY', 'terminer', 'nous', ['avoir']),
  conj(1820, 'vous aurez terminé', 'you will have finished', '/vu.zo.ʁe tɛʁ.mi.ne/', 'voo-zoh-ray tehr-mee-NAY', 'terminer', 'vous', ['avoir']),
  conj(1821, 'ils auront terminé', 'they will have finished', '/il.zo.ʁɔ̃ tɛʁ.mi.ne/', 'eel-zoh-rohⁿ tehr-mee-NAY', 'terminer', 'ils', ['avoir']),
  conj(1822, 'je serai parti', 'I will have left', '/ʒə sə.ʁe paʁ.ti/', 'zhuh suh-ray par-TEE', 'partir', 'je', ['etre'], FCVDR),
  conj(1823, 'elle sera partie', 'she will have left', '/ɛl sə.ʁa paʁ.ti/', 'el suh-ra par-TEE', 'partir', 'elle', ['etre', 'accord']),
  conj(1824, 'nous serons partis', 'we will have left', '/nu sə.ʁɔ̃ paʁ.ti/', 'noo suh-rohⁿ par-TEE', 'partir', 'nous', ['etre', 'accord']),
  conj(1825, 'ils seront partis', 'they will have left', '/il sə.ʁɔ̃ paʁ.ti/', 'eel suh-rohⁿ par-TEE', 'partir', 'ils', ['etre', 'accord']),
  sent(1826, "J'aurai pris ma décision avant lundi.", 'I will have made my decision before Monday.',
    '/ʒo.ʁe pʁi ma de.si.zjɔ̃ a.vɑ̃ lœ̃.di/', 'zhoh-ray PREE | ma day-see-ZYOHⁿ | a-vahⁿ luhⁿ-DEE', ['avoir']),
  sent(1827, 'Elle sera allée chercher les billets.', 'She will have gone to fetch the tickets.',
    '/ɛl sə.ʁa a.le ʃɛʁ.ʃe le bi.jɛ/', 'el suh-ra a-LAY | shehr-SHAY lay bee-YEH', ['etre'], FCVDR),
  sent(1828, 'Nous serons venus pour rien.', 'We will have come for nothing.',
    '/nu sə.ʁɔ̃ və.ny puʁ ʁjɛ̃/', 'noo suh-rohⁿ vuh-NÜ | poor RYEHⁿ', ['etre']),
  sent(1829, 'Ils auront fait le plus dur.', 'They will have done the hardest part.',
    '/il.zo.ʁɔ̃ fɛ lə ply dyʁ/', 'eel-zoh-rohⁿ FEH | luh plü DÜR', ['avoir', 'irregulier']),
  sent(1830, 'Tu auras reçu ma réponse avant midi.', 'You will have received my answer before noon.',
    '/ty o.ʁa ʁə.sy ma ʁe.pɔ̃s a.vɑ̃ mi.di/', 'tü oh-ra ruh-SÜ | ma ray-POHⁿS | a-vahⁿ mee-DEE', ['avoir', 'irregulier']),
  sent(1831, "Vous serez restés jusqu'au bout.", 'You will have stayed to the very end.',
    '/vu sə.ʁe ʁɛs.te ʒys.ko bu/', 'voo suh-ray res-TAY | zhüs-koh BOO', ['etre']),
  sent(1832, "J'aurai été absente trois semaines.", 'I will have been away for three weeks.',
    '/ʒo.ʁe e.te ap.sɑ̃t tʁwa sə.mɛn/', 'zhoh-ray ay-TAY ap-SAHⁿT | trwa suh-MENN', ['avoir', 'etre-participe']),
  sent(1833, 'On aura eu de la chance.', 'We will have been lucky.',
    '/ɔ̃.no.ʁa y də la ʃɑ̃s/', 'ohⁿ-noh-ra Ü | duh la SHAHⁿS', ['avoir', 'avoir-participe']),
  gap(1834, "Elle sera descendue avant l'ouverture.", 'She will have come down before opening time.',
    '/ɛl sə.ʁa de.sɑ̃.dy a.vɑ̃ lu.vɛʁ.tyʁ/', 'el suh-ra day-sahⁿ-DÜ | a-vahⁿ loo-vehr-TÜR',
    "Elle ___ descendue avant l'ouverture. (descendre · avoir ou être ?)",
    "Descendre, sans complément, prend être, comme au passé composé. EN: être, as in the passé composé.",
    ['etre']),
  gap(1835, "J'aurai envoyé le devis ce soir.", 'I will have sent the quote by this evening.',
    '/ʒo.ʁe ɑ̃.vwa.je lə də.vi sə swaʁ/', 'zhoh-ray ahⁿ-vwa-YAY luh duh-VEE | suh SWAR',
    "J'___ le devis ce soir. (envoyer · avoir ou être ?)",
    "Envoyer prend avoir. EN: envoyer takes avoir.",
    ['avoir'], FCVDR),
  rule(1836, "Le futur d'avoir ou d'être, puis le participe passé.", 'The future of avoir or être, then the past participle.',
    '/lə fy.tyʁ da.vwaʁ u dɛtʁ pɥi lə paʁ.ti.sip pa.se/', 'luh fü-TÜR | da-VWAR oo DEHTR | pwee luh par-tee-seep pa-SAY',
    'Comment se forme le futur antérieur ?',
    "Deux mots, comme au passé composé : seul l'auxiliaire passe au futur.",
    ['forme']),
  rule(1837, 'Avoir donne aur-, être donne ser-.', 'Avoir gives aur-, être gives ser-.',
    '/a.vwaʁ dɔn oʁ e ɛtʁ dɔn sɛʁ/', 'a-VWAR don OHR | ay EHTR don SEHR',
    "Quel radical pour l'auxiliaire au futur ?",
    "Aur- pour avoir, ser- pour être, puis les terminaisons -ai, -as, -a, -ons, -ez, -ont.",
    ['forme', 'radical']),
  sent(1838, "Nous aurons mis de l'ordre dans les comptes.", 'We will have put the accounts in order.',
    '/nu.zo.ʁɔ̃ mi də lɔʁdʁ dɑ̃ le kɔ̃t/', 'noo-zoh-rohⁿ MEE | duh LORDR | dahⁿ lay KOHⁿT', ['avoir', 'irregulier']),
  sent(1839, 'Elle aura écrit les trois chapitres.', 'She will have written the three chapters.',
    '/ɛ.lo.ʁa e.kʁi le tʁwa ʃa.pitʁ/', 'eh-loh-ra ay-KREE | lay trwa sha-PEETR', ['avoir', 'irregulier']),
  sent(1840, 'Tu seras devenu un vrai Montréalais.', 'You will have become a true Montrealer.',
    '/ty sə.ʁa də.və.ny œ̃ vʁɛ mɔ̃.ʁe.a.lɛ/', 'tü suh-ra duh-vuh-NÜ | uhⁿ vreh mohⁿ-ray-a-LEH', ['etre']),
  sent(1841, 'Ils auront obtenu leur visa.', 'They will have got their visa.',
    '/il.zo.ʁɔ̃.tɔp.tə.ny lœʁ vi.za/', 'eel-zoh-rohⁿ-top-tuh-NÜ | luhr vee-ZA', ['avoir', 'irregulier']),
];

/* ── ACT 3 · LES ACCORDS (.1842-.1857) ────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1842, 'Elle sera arrivée avant nous.', 'She will have arrived before us.',
    '/ɛl sə.ʁa a.ʁi.ve a.vɑ̃ nu/', 'el suh-ra a-ree-VAY | a-vahⁿ NOO', ['etre', 'accord'], FCVDR),
  sent(1843, 'Mes cousins seront repartis dimanche.', 'My cousins will have left again by Sunday.',
    '/me ku.zɛ̃ sə.ʁɔ̃ ʁə.paʁ.ti di.mɑ̃ʃ/', 'may koo-ZEHⁿ | suh-rohⁿ ruh-par-TEE | dee-MAHⁿSH', ['etre', 'accord']),
  sent(1844, 'Montre-moi les photos que tu auras prises.', 'Show me the photos you will have taken.',
    '/mɔ̃.tʁə.mwa le fo.to kə ty o.ʁa pʁiz/', 'mohⁿ-truh-MWA | lay foh-TOH | kuh tü oh-ra PREEZ', ['avoir', 'accord', 'que'], FCVDR),
  sent(1845, "La maison qu'ils auront achetée sera prête en juin.", 'The house they will have bought will be ready in June.',
    '/la mɛ.zɔ̃ kil.zo.ʁɔ̃.taʃ.te sə.ʁa pʁɛt ɑ̃ ʒɥɛ̃/', 'la meh-ZOHⁿ | keel-zoh-rohⁿ-tash-TAY | suh-ra PRET ahⁿ ZHWEHⁿ', ['avoir', 'accord', 'que']),
  sent(1846, 'Ces dossiers, je les aurai relus avant jeudi.', 'These files, I will have reread them before Thursday.',
    '/se do.sje ʒə le.zo.ʁe ʁə.ly a.vɑ̃ ʒø.di/', 'say doh-SYAY | zhuh lay-zoh-ray ruh-LÜ | a-vahⁿ zheu-DEE', ['avoir', 'accord', 'pronom']),
  sent(1847, 'Elles auront réservé leurs places.', 'They will have booked their seats.',
    '/ɛl.zo.ʁɔ̃ ʁe.zɛʁ.ve lœʁ plas/', 'el-zoh-rohⁿ ray-zehr-VAY | luhr PLASS', ['avoir', 'sans-accord']),
  sent(1848, "Elle se sera levée à l'aube.", 'She will have got up at dawn.',
    '/ɛl sə sə.ʁa lə.ve a lob/', 'el suh suh-ra luh-VAY | a LOHB', ['pronominal', 'accord'], FCVDR),
  sent(1849, "Nous nous serons installés avant l'hiver.", 'We will have settled in before the winter.',
    '/nu nu sə.ʁɔ̃.zɛ̃s.ta.le a.vɑ̃ li.vɛʁ/', 'noo noo suh-rohⁿ-zehⁿs-ta-LAY | a-vahⁿ lee-VEHR', ['pronominal', 'accord']),
  sent(1850, 'Ils se seront téléphoné entre-temps.', 'They will have phoned each other in the meantime.',
    '/il sə sə.ʁɔ̃ te.le.fɔ.ne ɑ̃.tʁə.tɑ̃/', 'eel suh suh-rohⁿ tay-lay-fo-NAY | ahⁿ-truh-TAHⁿ', ['pronominal', 'sans-accord']),
  sent(1851, 'Tu te seras lavé les mains avant de passer à table.', 'You will have washed your hands before sitting down to eat.',
    '/ty tə sə.ʁa la.ve le mɛ̃ a.vɑ̃ də pa.se a tabl/', 'tü tuh suh-ra la-VAY lay MEHⁿ | a-vahⁿ duh pa-SAY a TABL', ['pronominal', 'sans-accord']),
  gap(1852, 'Les documents que vous aurez envoyés seront archivés.', 'The documents you will have sent will be filed.',
    '/le do.ky.mɑ̃ kə vu.zo.ʁe.zɑ̃.vwa.je sə.ʁɔ̃.taʁ.ʃi.ve/', 'lay do-kü-MAHⁿ | kuh voo-zoh-ray-zahⁿ-vwa-YAY | suh-rohⁿ-tar-shee-VAY',
    'Les documents que vous aurez ___ seront archivés. (envoyer · que est placé avant)',
    "Que reprend les documents, placé avant avoir : envoyés. EN: agreement with que, placed before.",
    ['avoir', 'accord', 'que']),
  gap(1853, 'Mes parents se seront couchés tôt.', 'My parents will have gone to bed early.',
    '/me pa.ʁɑ̃ sə sə.ʁɔ̃ ku.ʃe to/', 'may pa-RAHⁿ | suh suh-rohⁿ koo-SHAY TOH',
    'Mes parents se seront ___ tôt. (se coucher)',
    "Pronominal : être, et l'accord avec le sujet. EN: être, agreeing with the subject.",
    ['pronominal', 'accord'], FCVDR),
  rule(1854, 'Être : accord avec le sujet. Avoir : avec le complément placé avant.', 'Être: agreement with the subject. Avoir: with the object placed before.',
    '/ɛtʁ a.kɔʁ a.vɛk lə sy.ʒɛ a.vwaʁ a.vɛk lə kɔ̃.ple.mɑ̃ pla.se a.vɑ̃/', 'EHTR | a-KOR a-vek luh sü-ZHEH | a-VWAR | a-vek luh kohⁿ-play-MAHⁿ pla-say a-VAHⁿ',
    'Au futur antérieur, les accords changent-ils ?',
    "Non : ce sont les règles du passé composé. Seul l'auxiliaire est au futur.",
    ['accord']),
  rule(1855, 'Un verbe pronominal prend être : je me serai levé.', 'A pronominal verb takes être: je me serai levé.',
    '/œ̃ vɛʁb pʁɔ.nɔ.mi.nal pʁɑ̃ ɛtʁ ʒə mə sə.ʁe lə.ve/', 'uhⁿ vehrb pro-no-mee-NAL | prahⁿ EHTR | zhuh muh suh-ray luh-VAY',
    'Au futur antérieur, un pronominal prend…',
    "Toujours être : je me serai levé, jamais je m'aurai levé.",
    ['pronominal']),
  sent(1856, 'Les filles seront rentrées pour le dîner.', 'The girls will have come home in time for dinner.',
    '/le fij sə.ʁɔ̃ ʁɑ̃.tʁe puʁ lə di.ne/', 'lay FEEY | suh-rohⁿ rahⁿ-TRAY | poor luh dee-NAY', ['etre', 'accord']),
  sent(1857, 'Vous vous serez reposés avant le départ.', 'You will have rested before leaving.',
    '/vu vu sə.ʁe ʁə.po.ze a.vɑ̃ lə de.paʁ/', 'voo voo suh-ray ruh-poh-ZAY | a-vahⁿ luh day-PAR', ['pronominal', 'accord']),
];

/* ── ACT 4 · DEUX FUTURS, UNE LIGNE (.1860-.1875) ─────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1860, 'À vingt heures, je partirai.', 'At eight p.m., I will leave.',
    '/a vɛ̃.tœʁ ʒə paʁ.ti.ʁe/', 'a vehⁿ-TUHR | zhuh par-tee-RAY', ['ligne', 'au-jalon']),
  sent(1861, 'À vingt heures, je serai parti.', 'By eight p.m., I will have left.',
    '/a vɛ̃.tœʁ ʒə sə.ʁe paʁ.ti/', 'a vehⁿ-TUHR | zhuh suh-ray par-TEE', ['ligne', 'avant'], FCVDR),
  sent(1862, 'À vingt heures, je serai sur la route.', 'At eight p.m., I will be on the road.',
    '/a vɛ̃.tœʁ ʒə sə.ʁe syʁ la ʁut/', 'a vehⁿ-TUHR | zhuh suh-ray sür la ROOT', ['ligne', 'en-cours']),
  rule(1863, 'Le futur simple est au jalon ; le futur antérieur, avant lui.', 'The futur simple is at the marker; the futur antérieur, before it.',
    '/lə fy.tyʁ sɛ̃pl ɛ.to ʒa.lɔ̃ lə fy.ty.ʁɑ̃.te.ʁjœʁ a.vɑ̃ lɥi/', 'luh fü-tür SEHⁿPL | eh-toh zha-LOHⁿ | luh fü-tü-rahⁿ-tay-RYUHR | a-vahⁿ LWEE',
    'Deux futurs, deux places ?',
    "Ce qui se passe au moment à venir : futur simple. Ce qui sera déjà fait à ce moment-là : futur antérieur.",
    ['ligne']),
  sent(1864, "L'avion atterrira à six heures.", 'The plane will land at six.',
    '/la.vjɔ̃ a.te.ʁi.ʁa a si.zœʁ/', 'la-VYOHⁿ | a-teh-ree-RA a see-ZUHR', ['ligne', 'au-jalon']),
  sent(1865, "Quand l'avion atterrira, le soleil se sera levé.", 'When the plane lands, the sun will have risen.',
    '/kɑ̃ la.vjɔ̃ a.te.ʁi.ʁa lə sɔ.lɛj sə sə.ʁa lə.ve/', 'kahⁿ la-VYOHⁿ a-teh-ree-RA | luh so-LEY suh suh-ra luh-VAY', ['ligne', 'avant'], FCVDR),
  sent(1866, "Quand l'avion atterrira, le soleil se lèvera.", 'When the plane lands, the sun will rise.',
    '/kɑ̃ la.vjɔ̃ a.te.ʁi.ʁa lə sɔ.lɛj sə lɛv.ʁa/', 'kahⁿ la-VYOHⁿ a-teh-ree-RA | luh so-LEY suh lev-RA', ['ligne', 'au-jalon']),
  sent(1867, 'Quand tu liras ce message, je serai déjà dans le train.', 'When you read this message, I will already be on the train.',
    '/kɑ̃ ty li.ʁa sə me.saʒ ʒə sə.ʁe de.ʒa dɑ̃ lə tʁɛ̃/', 'kahⁿ tü lee-RA suh may-SAZH | zhuh suh-ray day-ZHA dahⁿ luh TREHⁿ', ['ligne', 'en-cours']),
  sent(1868, "Quand tu liras ce message, j'aurai quitté la ville.", 'When you read this message, I will have left town.',
    '/kɑ̃ ty li.ʁa sə me.saʒ ʒo.ʁe ki.te la vil/', 'kahⁿ tü lee-RA suh may-SAZH | zhoh-ray kee-TAY la VEEL', ['ligne', 'avant'], FCVDR),
  sent(1869, 'Demain soir, nous fêterons son départ.', 'Tomorrow evening, we will celebrate her leaving.',
    '/də.mɛ̃ swaʁ nu fɛt.ʁɔ̃ sɔ̃ de.paʁ/', 'duh-mehⁿ SWAR | noo fet-ROHⁿ sohⁿ day-PAR', ['ligne', 'au-jalon']),
  sent(1870, 'Demain soir, elle aura rendu ses clés.', 'By tomorrow evening, she will have handed in her keys.',
    '/də.mɛ̃ swaʁ ɛ.lo.ʁa ʁɑ̃.dy se kle/', 'duh-mehⁿ SWAR | eh-loh-ra rahⁿ-DÜ say KLAY', ['ligne', 'avant']),
  gap(1871, 'À la rentrée, les travaux auront pris fin.', 'By the start of term, the works will have ended.',
    '/a la ʁɑ̃.tʁe le tʁa.vo o.ʁɔ̃ pʁi fɛ̃/', 'a la rahⁿ-TRAY | lay tra-VOH oh-rohⁿ pree FEHⁿ',
    'À la rentrée, les travaux ___ fin. (prendre · déjà terminés à la rentrée)',
    "Les travaux s'arrêtent avant le jalon : futur antérieur. EN: finished before the marker.",
    ['ligne', 'avant']),
  gap(1872, "À la rentrée, les enfants changeront d'école.", 'At the start of term, the children will change schools.',
    '/a la ʁɑ̃.tʁe le.zɑ̃.fɑ̃ ʃɑ̃ʒ.ʁɔ̃ de.kɔl/', 'a la rahⁿ-TRAY | lay-zahⁿ-FAHⁿ shahⁿzh-ROHⁿ day-KOL',
    "À la rentrée, les enfants ___ d'école. (changer · au moment de la rentrée)",
    "Le changement a lieu au jalon lui-même : futur simple. EN: it happens at the marker.",
    ['ligne', 'au-jalon']),
  sent(1873, "Dans une heure, j'aurai tout rangé et je me coucherai.", 'In an hour, I will have tidied everything and I will go to bed.',
    '/dɑ̃.zy.nœʁ ʒo.ʁe tu ʁɑ̃.ʒe e ʒə mə kuʃ.ʁe/', 'dahⁿ-zü-NUHR | zhoh-ray too rahⁿ-ZHAY | ay zhuh muh koosh-RAY', ['ligne', 'avant', 'au-jalon']),
  sent(1874, 'Le train sera parti quand tu arriveras à la gare.', 'The train will have left when you get to the station.',
    '/lə tʁɛ̃ sə.ʁa paʁ.ti kɑ̃ ty a.ʁi.və.ʁa a la ɡaʁ/', 'luh TREHⁿ suh-ra par-TEE | kahⁿ tü a-ree-vuh-RA a la GAR', ['ligne', 'avant']),
  sent(1875, 'Le train partira quand tu arriveras à la gare.', 'The train will leave when you get to the station.',
    '/lə tʁɛ̃ paʁ.ti.ʁa kɑ̃ ty a.ʁi.və.ʁa a la ɡaʁ/', 'luh TREHⁿ par-tee-RA | kahⁿ tü a-ree-vuh-RA a la GAR', ['ligne', 'au-jalon']),
];

/* ── ACT 5 · QUAND, DÈS QUE, UNE FOIS QUE (.1878-.1895) ────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1878, 'Quand tu auras fini, appelle-moi.', 'When you have finished, call me.',
    '/kɑ̃ ty o.ʁa fi.ni a.pɛl.mwa/', 'kahⁿ tü oh-ra fee-NEE | a-pel-MWA', ['charniere', 'quand'], FCVDR),
  sent(1879, 'Lorsque les invités seront partis, nous rangerons.', 'When the guests have left, we will tidy up.',
    '/lɔʁs.kə le.zɛ̃.vi.te sə.ʁɔ̃ paʁ.ti nu ʁɑ̃ʒ.ʁɔ̃/', 'lors-kuh lay-zehⁿ-vee-TAY suh-rohⁿ par-TEE | noo rahⁿzh-ROHⁿ', ['charniere', 'lorsque']),
  sent(1880, "Dès que j'aurai reçu ta réponse, je réserverai.", 'As soon as I have got your answer, I will book.',
    '/dɛ kə ʒo.ʁe ʁə.sy ta ʁe.pɔ̃s ʒə ʁe.zɛʁ.və.ʁe/', 'deh kuh zhoh-ray ruh-SÜ ta ray-POHⁿS | zhuh ray-zehr-vuh-RAY', ['charniere', 'des-que'], FCVDR),
  sent(1881, "Aussitôt qu'elle aura signé, elle commencera.", 'As soon as she has signed, she will start.',
    '/o.si.to kɛ.lo.ʁa si.ɲe ɛl kɔ.mɑ̃s.ʁa/', 'oh-see-toh keh-loh-ra see-NYAY | el ko-mahⁿs-RA', ['charniere', 'aussitot']),
  sent(1882, 'Une fois que tu auras compris le principe, tout ira vite.', 'Once you have understood the principle, everything will go fast.',
    '/yn fwa kə ty o.ʁa kɔ̃.pʁi lə pʁɛ̃.sip tu.ti.ʁa vit/', 'ün FWA kuh tü oh-ra kohⁿ-PREE luh prehⁿ-SEEP | too-tee-ra VEET', ['charniere', 'une-fois-que']),
  sent(1883, 'Après que tu seras parti, je fermerai la maison.', 'After you have left, I will lock up the house.',
    '/a.pʁɛ kə ty sə.ʁa paʁ.ti ʒə fɛʁ.mə.ʁe la mɛ.zɔ̃/', 'a-preh kuh tü suh-ra par-TEE | zhuh fehr-muh-RAY la meh-ZOHⁿ', ['charniere', 'apres-que']),
  sent(1884, "Tant que tu n'auras pas rendu le dossier, tu ne seras pas payé.", 'Until you have handed in the file, you will not be paid.',
    '/tɑ̃ kə ty no.ʁa pa ʁɑ̃.dy lə do.sje ty nə sə.ʁa pa pe.je/', 'tahⁿ kuh tü noh-ra pa rahⁿ-DÜ luh doh-SYAY | tü nuh suh-ra pa pay-YAY', ['charniere', 'tant-que', 'negation']),
  sent(1885, 'Quand tu finiras, appelle-moi.', 'When you finish, call me.',
    '/kɑ̃ ty fi.ni.ʁa a.pɛl.mwa/', 'kahⁿ tü fee-nee-RA | a-pel-MWA', ['charniere', 'ensemble']),
  sent(1886, "Quand j'aurai lu ton mémoire, je te dirai ce que j'en pense.", 'When I have read your dissertation, I will tell you what I think of it.',
    '/kɑ̃ ʒo.ʁe ly tɔ̃ me.mwaʁ ʒə tə di.ʁe sə kə ʒɑ̃ pɑ̃s/', 'kahⁿ zhoh-ray LÜ tohⁿ may-MWAR | zhuh tuh dee-RAY | suh kuh zhahⁿ PAHⁿS', ['charniere', 'avant']),
  sent(1887, 'Quand je lirai ton mémoire, je prendrai des notes.', 'When I read your dissertation, I will take notes.',
    '/kɑ̃ ʒə li.ʁe tɔ̃ me.mwaʁ ʒə pʁɑ̃.dʁe de nɔt/', 'kahⁿ zhuh lee-RAY tohⁿ may-MWAR | zhuh prahⁿ-DRAY day NOT', ['charniere', 'ensemble']),
  rule(1888, 'Fini avant : futur antérieur. En même temps : futur simple.', 'Finished before: futur antérieur. At the same time: futur simple.',
    '/fi.ni a.vɑ̃ fy.ty.ʁɑ̃.te.ʁjœʁ ɑ̃ mɛm tɑ̃ fy.tyʁ sɛ̃pl/', 'fee-nee a-VAHⁿ | fü-tü-rahⁿ-tay-RYUHR | ahⁿ mem TAHⁿ | fü-tür SEHⁿPL',
    'Après quand, futur simple ou futur antérieur ?',
    "Si l'action de quand sera finie avant l'autre, futur antérieur ; si les deux vont ensemble, futur simple.",
    ['charniere']),
  gap(1889, "Dès que nous aurons vendu l'appartement, nous déménagerons.", 'As soon as we have sold the flat, we will move.',
    '/dɛ kə nu.zo.ʁɔ̃ vɑ̃.dy la.paʁ.tə.mɑ̃ nu de.me.naʒ.ʁɔ̃/', 'deh kuh noo-zoh-rohⁿ vahⁿ-DÜ la-par-tuh-MAHⁿ | noo day-may-nazh-ROHⁿ',
    "Dès que nous ___ l'appartement, nous déménagerons. (vendre · la vente d'abord)",
    "La vente sera finie avant le déménagement : futur antérieur. EN: the sale comes first.",
    ['charniere', 'des-que'], FCVDR),
  gap(1890, 'Une fois que les enfants se seront endormis, on regardera le film.', 'Once the children have fallen asleep, we will watch the film.',
    '/yn fwa kə le.zɑ̃.fɑ̃ sə sə.ʁɔ̃.tɑ̃.dɔʁ.mi ɔ̃ ʁə.ɡaʁ.də.ʁa lə film/', 'ün FWA kuh lay-zahⁿ-FAHⁿ | suh suh-rohⁿ-tahⁿ-dor-MEE | ohⁿ ruh-gar-duh-RA luh FEELM',
    'Une fois que les enfants ___ , on regardera le film. (s’endormir · d’abord)',
    "Pronominal, fini avant : ils se seront endormis. EN: pronominal, done first.",
    ['charniere', 'une-fois-que', 'pronominal']),
  sent(1891, 'Rappelle-moi dès que tu auras parlé au propriétaire.', 'Call me back as soon as you have spoken to the landlord.',
    '/ʁa.pɛl.mwa dɛ kə ty o.ʁa paʁ.le o pʁɔ.pʁi.je.tɛʁ/', 'ra-pel-MWA | deh kuh tü oh-ra par-LAY | oh pro-pree-yay-TEHR', ['charniere', 'des-que']),
  sent(1892, 'Vous ne pourrez plus entrer lorsque le film aura commencé.', 'You will not be able to go in once the film has started.',
    '/vu nə pu.ʁe ply.zɑ̃.tʁe lɔʁs.kə lə film o.ʁa kɔ.mɑ̃.se/', 'voo nuh poo-ray plü-zahⁿ-TRAY | lors-kuh luh FEELM oh-ra ko-mahⁿ-SAY', ['charniere', 'lorsque']),
  sent(1893, "Après qu'il aura parlé, tu poseras tes questions.", 'After he has spoken, you will ask your questions.',
    '/a.pʁɛ ki.lo.ʁa paʁ.le ty poz.ʁa te kɛs.tjɔ̃/', 'a-preh kee-loh-ra par-LAY | tü pohz-RA tay kes-TYOHⁿ', ['charniere', 'apres-que'], FCVDR),
  rule(1894, "Après que prend l'indicatif : après qu'il aura parlé.", 'Après que takes the indicative: après qu’il aura parlé.',
    '/a.pʁɛ kə pʁɑ̃ lɛ̃.di.ka.tif a.pʁɛ ki.lo.ʁa paʁ.le/', 'a-preh kuh prahⁿ lehⁿ-dee-ka-TEEF | a-preh kee-loh-ra par-LAY',
    'Après que : subjonctif ou indicatif ?',
    "L'indicatif, parce que la chose sera faite. C'est avant que qui prend le subjonctif.",
    ['charniere', 'apres-que']),
  sent(1895, 'Je te rendrai ton livre quand je l\'aurai terminé.', 'I will give you your book back when I have finished it.',
    '/ʒə tə ʁɑ̃.dʁe tɔ̃ livʁ kɑ̃ ʒə lo.ʁe tɛʁ.mi.ne/', 'zhuh tuh rahⁿ-DRAY tohⁿ LEEVR | kahⁿ zhuh loh-ray tehr-mee-NAY', ['charniere', 'quand', 'pronom']),
];

/* ── ACT 6 · LE PIÈGE DE L'ANGLAIS (.1898-.1910) ──────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1898, "Quand j'ai fini ma journée, je rentre à pied.", 'When I have finished my day, I walk home.',
    '/kɑ̃ ʒe fi.ni ma ʒuʁ.ne ʒə ʁɑ̃.tʁa pje/', 'kahⁿ zhay fee-NEE ma zhoor-NAY | zhuh rahⁿ-tra PYAY', ['calque', 'habitude']),
  sent(1899, "Quand j'aurai fini ma journée, je rentrerai à pied.", 'When I have finished my day, I will walk home.',
    '/kɑ̃ ʒo.ʁe fi.ni ma ʒuʁ.ne ʒə ʁɑ̃.tʁə.ʁe a pje/', 'kahⁿ zhoh-ray fee-NEE ma zhoor-NAY | zhuh rahⁿ-truh-RAY a PYAY', ['calque', 'avant'], FCVDR),
  sent(1900, 'Dès que tu auras payé, tu recevras un reçu.', 'As soon as you have paid, you will get a receipt.',
    '/dɛ kə ty o.ʁa pe.je ty ʁə.sə.vʁa œ̃ ʁə.sy/', 'deh kuh tü oh-ra pay-YAY | tü ruh-suh-VRA uhⁿ ruh-SÜ', ['calque', 'des-que']),
  sent(1901, 'Une fois que tu auras lu le contrat, signe en bas.', 'Once you have read the contract, sign at the bottom.',
    '/yn fwa kə ty o.ʁa ly lə kɔ̃.tʁa siɲ ɑ̃ ba/', 'ün FWA kuh tü oh-ra LÜ luh kohⁿ-TRA | seeny ahⁿ BA', ['calque', 'imperatif']),
  sent(1902, 'Préviens-moi quand tu seras rentré.', 'Let me know when you have got home.',
    '/pʁe.vjɛ̃.mwa kɑ̃ ty sə.ʁa ʁɑ̃.tʁe/', 'pray-vyehⁿ-MWA | kahⁿ tü suh-ra rahⁿ-TRAY', ['calque', 'imperatif', 'etre'], FCVDR),
  sent(1903, 'Quand vous aurez choisi, faites-moi signe.', 'When you have chosen, let me know.',
    '/kɑ̃ vu.zo.ʁe ʃwa.zi fɛt.mwa siɲ/', 'kahⁿ voo-zoh-ray shwa-ZEE | fet-mwa SEENY', ['calque', 'imperatif']),
  sent(1904, "Je t'écrirai quand j'aurai trouvé un appartement.", 'I will write to you when I have found a flat.',
    '/ʒə te.kʁi.ʁe kɑ̃ ʒo.ʁe tʁu.ve œ̃.na.paʁ.tə.mɑ̃/', 'zhuh tay-kree-RAY | kahⁿ zhoh-ray troo-VAY uhⁿ-na-par-tuh-MAHⁿ', ['calque', 'avant']),
  rule(1905, "When you've finished : quand tu auras fini.", 'When you’ve finished: quand tu auras fini.',
    '/kɑ̃ ty o.ʁa fi.ni/', 'kahⁿ tü oh-ra fee-NEE',
    "L'anglais met un present perfect après when. Et le français ?",
    "Un futur antérieur, si la chose sera finie plus tard. Le passé composé pour une habitude ou un fait passé.",
    ['calque']),
  gap(1906, "Dès que j'aurai reçu les résultats, je t'appellerai.", 'As soon as I have received the results, I will call you.',
    '/dɛ kə ʒo.ʁe ʁə.sy le ʁe.zyl.ta ʒə ta.pɛl.ʁe/', 'deh kuh zhoh-ray ruh-SÜ lay ray-zül-TA | zhuh ta-pel-RAY',
    "Dès que j'___ les résultats, je t'appellerai. (recevoir · as soon as I've received)",
    "Le present perfect anglais devient ici un futur antérieur : j'aurai reçu. EN: as soon as I've received.",
    ['calque', 'des-que']),
  gap(1907, 'Quand tu te seras reposé, on en reparlera.', 'When you have rested, we will talk about it again.',
    '/kɑ̃ ty tə sə.ʁa ʁə.po.ze ɔ̃.nɑ̃ ʁə.paʁ.lə.ʁa/', 'kahⁿ tü tuh suh-ra ruh-poh-ZAY | ohⁿ-nahⁿ ruh-par-luh-RA',
    'Quand tu ___ , on en reparlera. (se reposer · when you’ve rested)',
    "Pronominal et à venir : tu te seras reposé. EN: when you've rested.",
    ['calque', 'pronominal'], FCVDR),
  sent(1908, "Quand elle aura obtenu son diplôme, elle partira à Dakar.", 'When she has got her degree, she will go to Dakar.',
    '/kɑ̃.tɛ.lo.ʁa ɔp.tə.ny sɔ̃ di.plom ɛl paʁ.ti.ʁa a da.kaʁ/', 'kahⁿ-teh-loh-ra op-tuh-NÜ sohⁿ dee-PLOHM | el par-tee-RA a da-KAR', ['calque', 'avant']),
  sent(1909, 'Quand elle a obtenu son diplôme, elle est partie à Dakar.', 'When she got her degree, she went to Dakar.',
    '/kɑ̃.tɛ.la ɔp.tə.ny sɔ̃ di.plom ɛ.lɛ paʁ.ti a da.kaʁ/', 'kahⁿ-teh-la op-tuh-NÜ sohⁿ dee-PLOHM | eh-leh par-TEE a da-KAR', ['calque', 'passe']),
  sent(1910, 'Tu me diras quand tu auras reçu le colis.', 'Tell me when you have received the parcel.',
    '/ty mə di.ʁa kɑ̃ ty o.ʁa ʁə.sy lə kɔ.li/', 'tü muh dee-RA | kahⁿ tü oh-ra ruh-SÜ luh ko-LEE', ['calque', 'avant']),
];

/* ── ACT 7 · D'ICI VENDREDI (.1914-.1927) ─────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1914, "D'ici vendredi, j'aurai rendu le rapport.", 'By Friday, I will have handed in the report.',
    '/di.si vɑ̃.dʁə.di ʒo.ʁe ʁɑ̃.dy lə ʁa.pɔʁ/', 'dee-see vahⁿ-druh-DEE | zhoh-ray rahⁿ-DÜ luh ra-POR', ['echeance', 'd-ici'], FCVDR),
  sent(1915, 'Avant la fin du mois, nous aurons recruté deux personnes.', 'Before the end of the month, we will have hired two people.',
    '/a.vɑ̃ la fɛ̃ dy mwa nu.zo.ʁɔ̃ ʁə.kʁy.te dø pɛʁ.sɔn/', 'a-vahⁿ la fehⁿ dü MWA | noo-zoh-rohⁿ ruh-krü-TAY | deu pehr-SONN', ['echeance', 'avant']),
  sent(1916, "Dans deux heures, j'aurai tout corrigé.", 'In two hours, I will have corrected everything.',
    '/dɑ̃ dø.zœʁ ʒo.ʁe tu kɔ.ʁi.ʒe/', 'dahⁿ deu-ZUHR | zhoh-ray too ko-ree-ZHAY', ['echeance', 'dans']),
  sent(1917, 'Au plus tard lundi, vous aurez reçu la facture.', 'By Monday at the latest, you will have received the invoice.',
    '/o ply taʁ lœ̃.di vu.zo.ʁe ʁə.sy la fak.tyʁ/', 'oh plü TAR luhⁿ-DEE | voo-zoh-ray ruh-SÜ la fak-TÜR', ['echeance', 'au-plus-tard'], FCVDR),
  sent(1918, 'Le quinze mars, le chantier aura duré un an.', 'On the fifteenth of March, the building work will have lasted a year.',
    '/lə kɛ̃z maʁs lə ʃɑ̃.tje o.ʁa dy.ʁe œ̃.nɑ̃/', 'luh kehⁿz MARS | luh shahⁿ-TYAY oh-ra dü-RAY uhⁿ-NAHⁿ', ['echeance', 'date']),
  sent(1919, "À la fin de la semaine, j'aurai lu les trois rapports.", 'By the end of the week, I will have read the three reports.',
    '/a la fɛ̃ də la sə.mɛn ʒo.ʁe ly le tʁwa ʁa.pɔʁ/', 'a la fehⁿ duh la suh-MENN | zhoh-ray LÜ lay trwa ra-POR', ['echeance', 'fin']),
  sent(1920, 'Je serai rentrée avant minuit, promis.', 'I will be home before midnight, I promise.',
    '/ʒə sə.ʁe ʁɑ̃.tʁe a.vɑ̃ mi.nɥi pʁɔ.mi/', 'zhuh suh-ray rahⁿ-TRAY | a-vahⁿ mee-NWEE | pro-MEE', ['echeance', 'promesse', 'etre'], FCVDR),
  rule(1921, "D'ici, avant, au plus tard : ce qui sera fait à l'échéance.", 'By, before, at the latest: what will be done at the deadline.',
    '/di.si a.vɑ̃ o ply taʁ sə ki sə.ʁa fɛ a le.ʃe.ɑ̃s/', 'dee-SEE | a-VAHⁿ | oh plü TAR | suh kee suh-ra FEH | a lay-shay-AHⁿS',
    'Pour promettre une échéance, quel temps ?',
    "Le futur antérieur : à l'échéance, la tâche sera déjà faite. Le futur simple dit ce qui se passera ce jour-là.",
    ['echeance']),
  gap(1922, "D'ici jeudi, nous aurons fixé une date.", 'By Thursday, we will have set a date.',
    '/di.si ʒø.di nu.zo.ʁɔ̃ fik.se yn dat/', 'dee-see zheu-DEE | noo-zoh-rohⁿ feek-SAY ün DAT',
    "D'ici jeudi, nous ___ une date. (fixer · avant jeudi)",
    "D'ici jeudi : la date sera fixée avant l'échéance. EN: by Thursday.",
    ['echeance', 'd-ici']),
  gap(1923, "Avant l'été, elle aura passé son permis.", 'Before the summer, she will have taken her driving test.',
    '/a.vɑ̃ le.te ɛ.lo.ʁa pa.se sɔ̃ pɛʁ.mi/', 'a-vahⁿ lay-TAY | eh-loh-ra pa-SAY sohⁿ pehr-MEE',
    "Avant l'été, elle ___ son permis. (passer · un examen, avec avoir)",
    "Passer un examen : avoir, parce qu'il y a un complément. EN: passer + object takes avoir.",
    ['echeance', 'avant'], FCVDR),
  sent(1924, "D'ici là, je t'aurai envoyé le lien.", 'By then, I will have sent you the link.',
    '/di.si la ʒə to.ʁe ɑ̃.vwa.je lə ljɛ̃/', 'dee-see LA | zhuh toh-ray ahⁿ-vwa-YAY luh LYEHⁿ', ['echeance', 'd-ici', 'pronom']),
  sent(1925, "En une semaine, ils auront repeint tout l'appartement.", 'In one week, they will have repainted the whole flat.',
    '/ɑ̃.ny.nə sə.mɛn il.zo.ʁɔ̃ ʁə.pɛ̃ tu la.paʁ.tə.mɑ̃/', 'ahⁿ-nün suh-MENN | eel-zoh-rohⁿ ruh-PEHⁿ | too la-par-tuh-MAHⁿ', ['echeance', 'en']),
  sent(1926, "Lundi, je n'aurai pas encore vu le dossier.", 'On Monday, I will not yet have seen the file.',
    '/lœ̃.di ʒə no.ʁe pa.zɑ̃.kɔʁ vy lə do.sje/', 'luhⁿ-DEE | zhuh noh-ray pa-zahⁿ-KOR VÜ luh doh-SYAY', ['echeance', 'negation']),
  sent(1927, 'Demain à cette heure-ci, nous aurons atterri à Dakar.', 'This time tomorrow, we will have landed in Dakar.',
    '/də.mɛ̃ a sɛ.tœʁ.si nu.zo.ʁɔ̃.za.te.ʁi a da.kaʁ/', 'duh-mehⁿ a seh-tuhr-SEE | noo-zoh-rohⁿ-za-teh-REE a da-KAR', ['echeance', 'heure']),
];

/* ── ACT 8 · IL AURA OUBLIÉ (.1930-.1944) ─────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1930, "Il n'est pas venu : il aura oublié.", 'He did not come: he must have forgotten.',
    '/il nɛ pa və.ny i.lo.ʁa u.bli.je/', 'eel neh pa vuh-NÜ | ee-loh-ra oo-blee-YAY', ['hypothese'], FCVDR),
  sent(1931, 'Elle se sera trompée de jour.', 'She must have got the day wrong.',
    '/ɛl sə sə.ʁa tʁɔ̃.pe də ʒuʁ/', 'el suh suh-ra trohⁿ-PAY | duh ZHOOR', ['hypothese', 'pronominal'], FCVDR),
  sent(1932, 'Le colis se sera perdu en route.', 'The parcel must have got lost on the way.',
    '/lə kɔ.li sə sə.ʁa pɛʁ.dy ɑ̃ ʁut/', 'luh ko-LEE | suh suh-ra pehr-DÜ ahⁿ ROOT', ['hypothese', 'pronominal']),
  sent(1933, 'Ils auront raté leur correspondance.', 'They must have missed their connection.',
    '/il.zo.ʁɔ̃ ʁa.te lœʁ kɔ.ʁɛs.pɔ̃.dɑ̃s/', 'eel-zoh-rohⁿ ra-TAY | luhr ko-res-pohⁿ-DAHⁿS', ['hypothese']),
  sent(1935, 'Il a sans doute oublié.', 'He has probably forgotten.',
    '/il a sɑ̃ dut u.bli.je/', 'eel a sahⁿ DOOT | oo-blee-YAY', ['hypothese', 'sans-doute']),
  sent(1936, "Il oubliera, comme d'habitude.", 'He will forget, as usual.',
    '/il u.bli.ʁa kɔm da.bi.tyd/', 'eel oo-blee-RA | kom da-bee-TÜD', ['hypothese', 'futur']),
  sent(1937, 'Tu te seras couché trop tard.', 'You must have gone to bed too late.',
    '/ty tə sə.ʁa ku.ʃe tʁo taʁ/', 'tü tuh suh-ra koo-SHAY | troh TAR', ['hypothese', 'pronominal']),
  sent(1938, "Quelqu'un aura laissé la porte ouverte.", 'Someone must have left the door open.',
    '/kɛl.kœ̃ o.ʁa lɛ.se la pɔʁ.tu.vɛʁt/', 'kel-KUHⁿ oh-ra leh-SAY | la por-too-VEHRT', ['hypothese'], FCVDR),
  rule(1939, 'Il aura oublié : une hypothèse sur le passé.', 'Il aura oublié: a guess about the past.',
    '/i.lo.ʁa u.bli.je yn i.pɔ.tɛz syʁ lə pa.se/', 'ee-loh-ra oo-blee-YAY | ün ee-po-TEHZ sür luh pa-SAY',
    "Il n'est pas là. Que dit « il aura oublié » ?",
    "Une explication probable d'un fait passé. Tu ne sais pas encore : tu supposes, et le jour où tu sauras, tu verras si tu avais raison.",
    ['hypothese']),
  gap(1940, 'Le train aura eu du retard.', 'The train must have been late.',
    '/lə tʁɛ̃ o.ʁa y dy ʁə.taʁ/', 'luh TREHⁿ oh-ra Ü | dü ruh-TAR',
    'Le train ___ du retard. (avoir · une supposition)',
    "Une supposition sur le passé : futur antérieur, aura eu. EN: a guess about the past.",
    ['hypothese']),
  gap(1941, 'Elle sera partie plus tôt.', 'She must have left earlier.',
    '/ɛl sə.ʁa paʁ.ti ply to/', 'el suh-ra par-TEE | plü TOH',
    'Elle ___ plus tôt. (partir · je suppose)',
    "Partir garde être, et l'accord avec elle : elle sera partie. EN: être, agreeing with elle.",
    ['hypothese', 'etre']),
  sent(1942, "J'aurai mal compris l'adresse.", 'I must have misunderstood the address.',
    '/ʒo.ʁe mal kɔ̃.pʁi la.dʁɛs/', 'zhoh-ray mal kohⁿ-PREE | la-DRESS', ['hypothese']),
  sent(1943, 'Tiens, le facteur sera passé.', 'Oh look, the postman must have been.',
    '/tjɛ̃ lə fak.tœʁ sə.ʁa pa.se/', 'TYEHⁿ | luh fak-TUHR suh-ra pa-SAY', ['hypothese', 'etre']),
  sent(1944, 'Ils se seront disputés, encore une fois.', 'They must have argued, yet again.',
    '/il sə sə.ʁɔ̃ dis.py.te ɑ̃.kɔ.ʁyn fwa/', 'eel suh suh-rohⁿ dees-pü-TAY | ahⁿ-ko-rün FWA', ['hypothese', 'pronominal']),
];

/* ── ACT 9 · EN DIX ANS, J'AURAI VU (.1946-.1959) ─────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1946, "En dix ans, j'aurai vu grandir tout un quartier.", 'In ten years, I will have watched a whole neighbourhood grow.',
    '/ɑ̃ di.zɑ̃ ʒo.ʁe vy ɡʁɑ̃.diʁ tu.tœ̃ kaʁ.tje/', 'ahⁿ dee-ZAHⁿ | zhoh-ray VÜ grahⁿ-DEER | too-tuhⁿ kar-TYAY', ['bilan'], FCVDR),
  sent(1947, "Quand je partirai à la retraite, j'aurai enseigné trente ans.", 'When I retire, I will have taught for thirty years.',
    '/kɑ̃ ʒə paʁ.ti.ʁe a la ʁə.tʁɛt ʒo.ʁe ɑ̃.sɛ.ɲe tʁɑ̃.tɑ̃/', 'kahⁿ zhuh par-tee-RAY a la ruh-TRET | zhoh-ray ahⁿ-seh-NYAY trahⁿ-TAHⁿ', ['bilan', 'retraite']),
  sent(1948, 'Au bout du compte, nous aurons tout essayé.', 'When all is said and done, we will have tried everything.',
    '/o bu dy kɔ̃t nu.zo.ʁɔ̃ tu.te.se.je/', 'oh boo dü KOHⁿT | noo-zoh-rohⁿ too-tay-say-YAY', ['bilan']),
  sent(1949, "Ce projet m'aura beaucoup appris.", 'This project will have taught me a lot.',
    '/sə pʁɔ.ʒɛ mo.ʁa bo.ku a.pʁi/', 'suh pro-ZHEH | moh-ra boh-koo a-PREE', ['bilan'], FCVDR),
  sent(1950, 'Cette année aura été difficile pour tout le monde.', 'This year will have been hard for everyone.',
    '/sɛ.ta.ne o.ʁa e.te di.fi.sil puʁ tu lə mɔ̃d/', 'seh-ta-NAY oh-ra ay-TAY dee-fee-SEEL | poor too luh MOHⁿD', ['bilan', 'etre-participe']),
  sent(1951, 'À la fin du voyage, nous aurons traversé six pays.', 'By the end of the trip, we will have crossed six countries.',
    '/a la fɛ̃ dy vwa.jaʒ nu.zo.ʁɔ̃ tʁa.vɛʁ.se si pe.i/', 'a la fehⁿ dü vwa-YAZH | noo-zoh-rohⁿ tra-vehr-SAY | see pay-EE', ['bilan']),
  sent(1952, 'Il aura passé sa vie à attendre.', 'He will have spent his life waiting.',
    '/i.lo.ʁa pa.se sa vi a a.tɑ̃dʁ/', 'ee-loh-ra pa-SAY sa VEE | a a-TAHⁿDR', ['bilan']),
  rule(1953, 'Un bilan : tu te places à la fin et tu regardes ce qui aura été fait.', 'A review: you stand at the end and look at what will have been done.',
    '/œ̃ bi.lɑ̃ ty tə plas a la fɛ̃ e ty ʁə.ɡaʁd sə ki o.ʁa e.te fɛ/', 'uhⁿ bee-LAHⁿ | tü tuh PLASS a la FEHⁿ | ay tü ruh-GARD | suh kee oh-ra ay-tay FEH',
    "Pour faire le bilan d'une période, quel temps ?",
    "Souvent le futur antérieur, qui donne le ton du bilan, même pour une période qui se termine aujourd'hui : cette année aura été difficile. Le passé composé reste possible : cette année a été difficile.",
    ['bilan']),
  gap(1954, 'En trois ans, elle aura changé trois fois de poste.', 'In three years, she will have changed jobs three times.',
    '/ɑ̃ tʁwa.zɑ̃ ɛ.lo.ʁa ʃɑ̃.ʒe tʁwa fwa də pɔst/', 'ahⁿ trwa-ZAHⁿ | eh-loh-ra shahⁿ-ZHAY | trwa fwa duh POST',
    'En trois ans, elle ___ trois fois de poste. (changer · le bilan, futur antérieur)',
    "Le compte se fait à la fin des trois ans : futur antérieur. EN: counted at the end.",
    ['bilan']),
  gap(1955, 'Ce semestre, nous serons allés trois fois à Québec.', 'This term, we will have been to Québec City three times.',
    '/sə sə.mɛstʁ nu sə.ʁɔ̃.za.le tʁwa fwa a ke.bɛk/', 'suh suh-MESTR | noo suh-rohⁿ-za-LAY | trwa fwa a kay-BEK',
    'Ce semestre, nous ___ trois fois à Québec. (aller · le compte à la fin, futur antérieur)',
    "Aller garde être : nous serons allés. EN: aller keeps être.",
    ['bilan', 'etre'], FCVDR),
  sent(1956, 'Cette année a été difficile.', 'This year has been hard.',
    '/sɛ.ta.ne a e.te di.fi.sil/', 'seh-ta-NAY | a ay-TAY dee-fee-SEEL', ['bilan', 'passe-compose']),
  sent(1957, "Tu n'auras pas perdu ton temps.", 'You will not have wasted your time.',
    '/ty no.ʁa pa pɛʁ.dy tɔ̃ tɑ̃/', 'tü noh-ra pa pehr-DÜ | tohⁿ TAHⁿ', ['bilan', 'negation']),
  sent(1958, "Jusqu'au bout, elle se sera battue.", 'She will have fought to the very end.',
    '/ʒys.ko bu ɛl sə sə.ʁa ba.ty/', 'zhüs-koh BOO | el suh suh-ra ba-TÜ', ['bilan', 'pronominal']),
  sent(1959, 'On aura tout vu.', 'Now we have seen it all.',
    '/ɔ̃.no.ʁa tu vy/', 'ohⁿ-noh-ra too VÜ', ['bilan', 'exclamation']),
];

/* ── ACT 10 · AURAI OU AURAIS, ET LES FAUSSES PISTES (.1961-.1973) ────────── */

export const ACT10_ROWS: Row[] = [
  sent(1961, "J'aurai fini avant ton départ.", 'I will have finished before you leave.',
    '/ʒo.ʁe fi.ni a.vɑ̃ tɔ̃ de.paʁ/', 'zhoh-ray fee-NEE | a-vahⁿ tohⁿ day-PAR', ['lettre', 'futur-anterieur'], FCVDR),
  sent(1962, "Sans cet appel, j'aurais fini avant ton départ.", 'Without that call, I would have finished before you left.',
    '/sɑ̃ sɛ.ta.pɛl ʒo.ʁɛ fi.ni a.vɑ̃ tɔ̃ de.paʁ/', 'sahⁿ seh-ta-PEL | zhoh-reh fee-NEE | a-vahⁿ tohⁿ day-PAR', ['lettre', 'conditionnel-passe']),
  sent(1963, 'Nous serons rentrés avant la nuit.', 'We will be back before dark.',
    '/nu sə.ʁɔ̃ ʁɑ̃.tʁe a.vɑ̃ la nɥi/', 'noo suh-rohⁿ rahⁿ-TRAY | a-vahⁿ la NWEE', ['lettre', 'futur-anterieur'], FCVDR),
  sent(1964, 'Sans la panne, nous serions rentrés avant la nuit.', 'Without the breakdown, we would have been back before dark.',
    '/sɑ̃ la pan nu sə.ʁjɔ̃ ʁɑ̃.tʁe a.vɑ̃ la nɥi/', 'sahⁿ la PANN | noo suh-ryohⁿ rahⁿ-TRAY | a-vahⁿ la NWEE', ['lettre', 'conditionnel-passe']),
  sent(1965, 'Si tu as fini avant midi, on pourra déjeuner ensemble.', 'If you have finished before noon, we can have lunch together.',
    '/si ty a fi.ni a.vɑ̃ mi.di ɔ̃ pu.ʁa de.ʒø.ne ɑ̃.sɑ̃bl/', 'see tü a fee-NEE a-vahⁿ mee-DEE | ohⁿ poo-RA day-zheu-NAY ahⁿ-SAHⁿBL', ['si', 'passe-compose'], FCVDR),
  rule(1966, 'Après le si de condition, jamais de futur : si tu as fini, pas si tu auras fini.', 'After the si of condition, never a future: si tu as fini, not si tu auras fini.',
    '/a.pʁɛ lə si də kɔ̃.di.sjɔ̃ ʒa.mɛ də fy.tyʁ si ty a fi.ni pa si ty o.ʁa fi.ni/', 'a-preh luh SEE duh kohⁿ-dee-SYOHⁿ | zha-meh duh fü-TÜR | see tü a fee-NEE | pa see tü oh-ra fee-NEE',
    'Si + futur antérieur ?',
    "Jamais quand si pose une condition. Pour une chose finie avant, si prend le passé composé : si tu as fini à midi, on déjeunera. Le si d'une question indirecte, lui, accepte le futur : dis-moi si tu auras fini.",
    ['si']),
  rule(1967, "Aurai + un nom : le futur d'avoir. Aurai + un participe : le futur antérieur.", 'Aurai + a noun: the future of avoir. Aurai + a participle: the futur antérieur.',
    '/o.ʁe œ̃ nɔ̃ lə fy.tyʁ da.vwaʁ o.ʁe œ̃ paʁ.ti.sip lə fy.ty.ʁɑ̃.te.ʁjœʁ/', 'oh-RAY uhⁿ NOHⁿ | luh fü-tür da-VWAR | oh-RAY uhⁿ par-tee-SEEP | luh fü-tü-rahⁿ-tay-RYUHR',
    "J'aurai le billet, j'aurai pris le billet : même temps ?",
    "Non. Sans participe, c'est le futur simple d'avoir. Avec un participe, c'est le futur antérieur.",
    ['piste']),
  gap(1968, 'Demain, à cette heure-ci, tu auras reçu ta réponse.', 'This time tomorrow, you will have had your answer.',
    '/də.mɛ̃ a sɛ.tœʁ.si ty o.ʁa ʁə.sy ta ʁe.pɔ̃s/', 'duh-MEHⁿ | a seh-tuhr-SEE | tü oh-ra ruh-SÜ ta ray-POHⁿS',
    'Demain, à cette heure-ci, tu ___ ta réponse. (recevoir · auras ou aurais ?)',
    "Un moment réel à venir : auras, sans i. EN: a real future moment.",
    ['lettre', 'futur-anterieur']),
  gap(1969, "Sans ton aide hier, je n'aurais jamais fini à temps.", 'Without your help yesterday, I would never have finished in time.',
    '/sɑ̃ tɔ̃.nɛd jɛʁ ʒə no.ʁɛ ʒa.mɛ fi.ni a tɑ̃/', 'sahⁿ toh-NED YEHR | zhuh noh-reh zha-meh fee-NEE | a TAHⁿ',
    "Sans ton aide hier, je n'___ jamais fini à temps. (avoir · aurai ou aurais ?)",
    "La condition porte sur le passé (hier) : ce qui aurait eu lieu, donc aurais. EN: an unreal past condition, so aurais.",
    ['lettre', 'conditionnel-passe'], FCVDR),
  sent(1970, "Elles seront parties avant l'aube.", 'They will have left before dawn.',
    '/ɛl sə.ʁɔ̃ paʁ.ti a.vɑ̃ lob/', 'el suh-rohⁿ par-TEE | a-vahⁿ LOHB', ['lettre', 'futur-anterieur']),
  sent(1971, "Sans l'orage, elles seraient parties avant l'aube.", 'Without the storm, they would have left before dawn.',
    '/sɑ̃ lɔ.ʁaʒ ɛl sə.ʁɛ paʁ.ti a.vɑ̃ lob/', 'sahⁿ lo-RAZH | el suh-reh par-TEE | a-vahⁿ LOHB', ['lettre', 'conditionnel-passe']),
  rule(1972, 'Pour choisir entre aurai et aurais, passe à nous.', 'To choose between aurai and aurais, switch to nous.',
    '/puʁ ʃwa.ziʁ ɑ̃.tʁə o.ʁe e o.ʁɛ pa.sa nu/', 'poor shwa-ZEER | ahⁿ-truh oh-RAY ay oh-REH | pa-sa NOO',
    "J'aurai ou j'aurais : comment trancher ?",
    "Nous aurons (un moment réel à venir) ou nous aurions (une condition) : là, l'oreille entend la différence.",
    ['lettre']),
  sent(1973, "Nous aurons tout réglé d'ici là.", 'We will have sorted everything out by then.',
    '/nu.zo.ʁɔ̃ tu ʁe.ɡle di.si la/', 'noo-zoh-rohⁿ too ray-GLAY | dee-see LA', ['lettre', 'futur-anterieur']),
];

/* ── ACT 11 · TON PLAN, TES JALONS (.1980-.1988) ─────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1980, "Voici où j'en serai dans six mois.", 'Here is where I will be in six months.',
    '/vwa.si u ʒɑ̃ sə.ʁe dɑ̃ si mwa/', 'vwa-SEE | oo zhahⁿ suh-RAY | dahⁿ see MWA', ['tache', 'plan']),
  sent(1981, "D'ici décembre, j'aurai terminé ma formation.", 'By December, I will have finished my training.',
    '/di.si de.sɑ̃bʁ ʒo.ʁe tɛʁ.mi.ne ma fɔʁ.ma.sjɔ̃/', 'dee-see day-SAHⁿBR | zhoh-ray tehr-mee-NAY | ma for-ma-SYOHⁿ', ['tache', 'echeance'], FCVDR),
  sent(1982, "Quand j'aurai obtenu mon certificat, je chercherai un poste à Montréal.", 'When I have got my certificate, I will look for a job in Montréal.',
    '/kɑ̃ ʒo.ʁe ɔp.tə.ny mɔ̃ sɛʁ.ti.fi.ka ʒə ʃɛʁ.ʃə.ʁe œ̃ pɔst a mɔ̃.ʁe.al/', 'kahⁿ zhoh-ray op-tuh-NÜ mohⁿ sehr-tee-fee-KA | zhuh shehr-shuh-RAY uhⁿ POST | a mohⁿ-ray-AL', ['tache', 'charniere']),
  sent(1983, "À ce moment-là, j'aurai économisé assez pour partir.", 'By then, I will have saved enough to leave.',
    '/a sə mɔ.mɑ̃.la ʒo.ʁe e.kɔ.nɔ.mi.ze a.se puʁ paʁ.tiʁ/', 'a suh mo-mahⁿ-LA | zhoh-ray ay-ko-no-mee-ZAY | a-say poor par-TEER', ['tache', 'echeance']),
  sent(1984, "Si tout se passe bien, je me serai installée avant l'été.", 'If all goes well, I will have settled in before the summer.',
    '/si tu sə pas bjɛ̃ ʒə mə sə.ʁe ɛ̃s.ta.le a.vɑ̃ le.te/', 'see too suh pass BYEHⁿ | zhuh muh suh-ray ehⁿs-ta-LAY | a-vahⁿ lay-TAY', ['tache', 'si', 'pronominal']),
  sent(1985, 'Quand tu liras cette lettre, tu auras changé.', 'When you read this letter, you will have changed.',
    '/kɑ̃ ty li.ʁa sɛt lɛtʁ ty o.ʁa ʃɑ̃.ʒe/', 'kahⁿ tü lee-RA set LETR | tü oh-ra shahⁿ-ZHAY', ['tache', 'lettre-a-soi'], FCVDR),
  sent(1986, "J'espère que tu n'auras pas renoncé.", 'I hope you will not have given up.',
    '/ʒɛs.pɛʁ kə ty no.ʁa pa ʁə.nɔ̃.se/', 'zhes-PEHR | kuh tü noh-ra pa ruh-nohⁿ-SAY', ['tache', 'lettre-a-soi', 'negation']),
  sent(1987, 'Une fois que nous aurons mis le site en ligne, nous ferons le point.', 'Once we have put the site online, we will take stock.',
    '/yn fwa kə nu.zo.ʁɔ̃ mi lə sit ɑ̃ liɲ nu fə.ʁɔ̃ lə pwɛ̃/', 'ün FWA kuh noo-zoh-rohⁿ MEE | luh SEET ahⁿ LEENY | noo fuh-rohⁿ luh PWEHⁿ', ['tache', 'plan']),
  sent(1988, "En un an, j'aurai appris plus qu'en cinq.", 'In one year, I will have learned more than in five.',
    '/ɑ̃.nœ̃.nɑ̃ ʒo.ʁe a.pʁi ply kɑ̃ sɛ̃k/', 'ahⁿ-nuhⁿ-NAHⁿ | zhoh-ray a-PREE | plü kahⁿ SEHⁿK', ['tache', 'bilan'], FCVDR),
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

/** Act 1: Sophie's project calendar, a Montréal design agency. */
export const LECTURE_CALENDRIER =
  "Objet : le calendrier de votre nouveau site. Bonjour Monsieur Diallo, comme promis, voici où nous en serons à chaque étape de la semaine. Lundi soir, nous aurons validé les maquettes avec vous par visioconférence. Mardi et mercredi, Karine intégrera les textes et les photos que vous nous aurez envoyés. Mercredi, l'équipe aura corrigé les dernières erreurs, et Julien lancera les essais sur téléphone. Jeudi, je ne serai pas au bureau : je serai à Toronto pour un autre client, et je ne serai pas encore rentrée quand les essais se termineront. Julien vous écrira dès qu'il aura vérifié chaque page. Vendredi à neuf heures, quand vous arriverez à l'agence, nous aurons tout installé sur notre serveur de démonstration, et vous pourrez naviguer vous-même sur le site. Si vous remarquez un problème, nous le corrigerons dans la journée. Dès que vous aurez signé le bon de livraison, nous mettrons le site en ligne. Une précision : notre graphiste sera parti en vacances dès jeudi soir, donc toute modification du logo devra être demandée avant jeudi midi. Une fois que le site sera en ligne, je vous appellerai pour faire le point. Dans trois mois, vous aurez recueilli assez de données pour mesurer ce que le site vous aura apporté. Bien cordialement, Sophie Tremblay.";

/** Act 8: the missed meeting, Liège. */
export const LECTURE_RDV =
  "Samedi, midi et quart, au café du Carré, à Liège. Lucie attend Hugo depuis vingt minutes. Ils avaient rendez-vous à midi pour préparer l'anniversaire de leur amie Mélanie, et Hugo n'est jamais en retard. Lucie lui envoie un message : pas de réponse. Elle appelle : messagerie. Elle commence à faire des hypothèses. Il aura oublié, tout simplement. Non, impossible : il lui a encore écrit la veille pour confirmer. Il se sera trompé de café ; il y en a deux avec presque le même nom dans le quartier. Ou alors son bus aura eu du retard, comme souvent le samedi. Son téléphone, lui, se sera déchargé : Hugo oublie toujours de le recharger. À midi et demi, Lucie commande un croque-monsieur et se dit que, de toute façon, elle aura au moins passé un moment tranquille. À midi quarante, Hugo arrive en courant, rouge et essoufflé. « Désolé ! J'étais au bon café, mais dans la salle du fond. Je t'attendais depuis midi moins dix ! » Lucie éclate de rire : pendant tout ce temps, ils étaient à dix mètres l'un de l'autre, et aucune de ses hypothèses n'était la bonne. La prochaine fois, promet Hugo, il enverra une photo de sa table dès qu'il se sera assis.";

/** Act 11: the model the learner imitates, a letter to one's future self. */
export const LECTURE_MODELE =
  "Lettre à moi-même, à ouvrir dans cinq ans. Chère Awa, quand tu ouvriras cette lettre, tu auras trente-deux ans, et tu auras peut-être oublié la jeune femme qui l'écrit, un soir de septembre, dans un petit studio de Montréal. Laisse-moi te rappeler où j'en suis. Je viens d'arriver de Dakar, je commence une formation d'infirmière et je ne connais presque personne. Tu te souviens sans doute de l'aéroport, de la valise trop lourde et du froid de ce premier matin. Voici ce que je me promets. D'ici un an, j'aurai terminé ma première année et j'aurai trouvé un emploi à temps partiel. Dans trois ans, j'aurai obtenu mon diplôme et je travaillerai dans un hôpital, peut-être à Sherbrooke. Quand j'aurai économisé assez, je ferai venir maman pour un hiver, pour qu'elle voie enfin la neige. Et dans cinq ans, j'espère que tu te seras fait de vrais amis ici et que tu n'auras pas renoncé à la danse. Si tu lis ces lignes et que rien ne s'est passé comme prévu, ne sois pas trop dure avec toi-même : tu auras sûrement eu de bonnes raisons de changer de route. Ce qui compte, c'est que tu auras essayé. Une dernière chose : dès que tu auras refermé cette lettre, appelle maman. Awa, vingt-sept ans.";

/** The eight « dans un texte » paragraphs (acts 3 to 10). */
export const TEXTE_A3 =
  "Message de ta mère, qui prépare la visite de tes cousines. Tout ce qui est entre parenthèses sera déjà fait au moment dont elle parle. « Samedi soir, tes cousines Inès et Nora (arriver) à Lyon. D'ici là, j'(préparer) la chambre d'amis, et les draps que j'(laver) lundi (sécher). Ton père (aller) chercher un matelas chez les voisins. Samedi, les filles (se lever) à quatre heures pour prendre l'avion : quand elles (se reposer), on les emmènera au marché. Et les lettres que ta grand-mère leur (écrire) seront sur leur oreiller. »";

export const TEXTE_A4 =
  "Demain, Karim a rendez-vous à Bruxelles. Pour chaque verbe, demande-toi s'il se passe au moment dont on parle, ou s'il sera déjà fait. « Demain matin, Karim (prendre) le premier train. Quand il (arriver) à la gare du Midi, il (déjà relire) sa présentation deux fois. À dix heures, il (présenter) son projet au comité. À midi, le comité (prendre) sa décision, et Karim (déjeuner) avec son ancienne collègue. Le soir, quand il (rentrer) à Paris, sa compagne (préparer) une surprise pour fêter le résultat. »";

export const TEXTE_A5 =
  "Avant de partir en vacances, ta colocataire Zoé te laisse ces consignes. Complète chaque verbe : fini avant, ou en même temps ? « Quand tu (rentrer) ce soir, arrose les plantes du salon. Dès que le plombier (réparer) la fuite, envoie-moi une photo. Une fois que tu (payer) la facture, range-la dans le classeur bleu. Tant que le propriétaire (ne pas répondre), ne touche pas au chauffage. Lorsque les voisins (partir) en vacances, pense à relever leur courrier. Et après que tout le monde (se coucher), vérifie que la porte d'entrée est bien fermée. »";

export const TEXTE_A6 =
  "Emma, stagiaire anglaise à Genève, écrit à son tuteur. Elle a traduit l'anglais mot à mot : « Quand j'ai fini le rapport, je vous l'envoie. Dès que j'ai eu la réponse du client, je vous appelle. Une fois que vous l'avez lu, dites-moi ce que vous en pensez. Je pars en congé dès que j'ai fermé les dossiers. » Son tuteur lui répond gentiment : « Tout est clair, mais en français, ces actions sont encore à venir. » Réécris le message d'Emma avec le futur antérieur et le futur simple.";

export const TEXTE_A7 =
  "Compte rendu de la réunion de lundi : les engagements de l'équipe. Mets chaque verbe au futur antérieur. « D'ici mercredi, Samir (contacter) les trois fournisseurs. Avant jeudi midi, Léa et Paul (préparer) le budget, et j'(relire) leur tableau. Au plus tard vendredi, nous (envoyer) la proposition au client. D'ici la fin du mois, le client (prendre) sa décision, et nous (fixer) une date pour le lancement. Si un délai ne peut pas être tenu, prévenez-moi dès que vous l'(apprendre). »";

export const TEXTE_A8 =
  "Tu rentres chez toi un samedi soir. Le frigo est vide, la fenêtre de la cuisine est grande ouverte et il y a de la farine partout sur la table. Ton colocataire Malik n'est pas là, et son vélo a disparu de l'entrée. Sur le frigo, il reste un aimant, mais plus aucune liste de courses. Écris quatre hypothèses au futur antérieur pour expliquer la scène, avec faire, oublier, sortir et prendre. Puis choisis celle qui te semble la plus probable, et dis pourquoi.";

export const TEXTE_A9 =
  "Discours pour le départ à la retraite de Mme Gagnon, bibliothécaire à Sherbrooke. Complète chaque verbe au futur antérieur. « En trente-deux ans, Mme Gagnon (accueillir) des milliers de lecteurs. Elle (voir) passer trois directeurs, deux rénovations et un déménagement. Elle (se battre) pour garder la bibliothèque ouverte le dimanche, et elle (gagner). Des enfants qu'elle (initier) à la lecture sont aujourd'hui parents. Pour nous tous, elle (être) un modèle. »";

export const TEXTE_A10 =
  "Sarah relit le courriel qu'elle va envoyer à son chef. Il contient cinq erreurs de s, de temps ou de mode. « Monsieur, j'aurai dû vous prévenir plus tôt : je serais absente lundi. Je vous promets que j'aurais terminé le dossier avant mercredi. Si j'aurai su que la réunion était avancée, je me serais organisée autrement. Dès que j'aurais reçu les chiffres, je vous les enverrai. » Trouve les cinq formes fausses et corrige-les.";

/** The five corrections the act 10 text asks for (shown only as the answer). */
export const TEXTE_A10_REPONSES = [
  "j'aurais dû vous prévenir",
  'je serai absente lundi',
  "j'aurai terminé le dossier",
  "si j'avais su",
  "dès que j'aurai reçu les chiffres",
] as const;
