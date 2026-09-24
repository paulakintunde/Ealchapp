// b1.05.l1 « Le futur simple : la formation » — the authored corpus, the
// imports and the citation constants. DRAFT, to RICH-LESSON-STANDARD.md on top
// of B1-BUILD-PLAYBOOK.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (b1.06, b1.07 and b1.08 import REFRAME and REFRAME_EN from
// this file; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME,
// LEVEL, E, ALL_ROWS, IMPORT_IDS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   BUILDING THE FUTUR SIMPLE FROM THE INFINITIVE, AND CHOOSING IT OVER THE
//   FUTUR PROCHE.
//
//     le radical   l'infinitif, gardé jusqu'au r : parler- / finir- / prendr-
//     avoir        les terminaisons -ai -as -a -ons -ez -ont
//
//   Act by act: the plan that promises nothing (1), the r and avoir's endings
//   (2), the three groups and the -re verbs that drop their e (3), futur
//   proche against futur simple (4), the infinitives kept whole and their
//   silent e (5), the -er verbs whose stem changes (6), negation, pronouns and
//   questions in the future (7), the time markers that live with it and do not
//   command it (8), annotating a written plan (9), writing one (10).
//
//   NOT OWNED, AND FLAGGED WHERE IT TOUCHES:
//     b1.06  the irregular stems (être, avoir, aller, faire, venir, voir,
//            pouvoir, devoir, savoir, vouloir, falloir, envoyer). Not one of
//            them is conjugated in an authored row here. Act 6 names envoyer
//            once, to say it belongs to the next lesson.
//     b1.07  quand, dès que, lorsque and the future after them.
//     b1.10  si + présent, futur simple.
//     b1.08  the conditionnel, which shares this stem. Act 2's trap contrasts
//            the futur simple with the IMPARFAIT only, never the conditionnel.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked only, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `projets-et-futur` already exists in the seed's `themes` (slug
//     `projets-et-futur`, domain fondations, levelRange a2-b2) and holds ZERO
//     seed rows, so nothing is created at import.
//  2. ID BLOCK: this lesson owns `.001`-`.199` in that theme. b1.06 owns
//     `.200`-`.399`, b1.07 `.400`-`.599`, b1.08 `.600`-`.799`, b1.10
//     `.800`-`.999`. Used here: `.001`-`.170`, 170 rows in ten act blocks.
//  3. THE SEED HOLDS ALMOST NO FUTUR SIMPLE. Probed 2026-09-23 across all
//     11,209 rows: 21 sentences carry a regular futur simple form and 12 of
//     those sit behind si, quand or dès que, which belong to b1.07 and b1.10
//     and are therefore NOT reused here. Everything this lesson teaches is
//     authored. The futur proche is well covered (211 rows), so every futur
//     proche contrast is a reused row.
//  4. Every reused id below was read out of seed.json on 2026-09-23 and its
//     `fr` is copied verbatim wherever a section prints it.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A2. RESPELLINGS SPELLED FOR THE NASAL CHECKER, NOT FOR THE EAR
// ══════════════════════════════════════════════════════════════════════════
//
//  `hasPlainNasal` reads the letter pairs AH OH EH UH EU AI OU followed by a
//  plain N or M as a nasal vowel written the old way. Three words in this
//  lesson end in a real pronounced consonant that lands on one of those pairs,
//  so their respelling doubles the consonant, which is a2.34's -YENN
//  precedent:
//
//     semaine    suh-MENN   (not suh-MEHN: EH + N reads as a nasal)
//     prochaine  pro-SHENN  (same shape)
//     douzaine   doo-ZENN   (same shape)
//
//  The doubled letter keeps the consonant audible and is how b1.03 spells
//  `PLENN` for pleine. Nothing else in the lesson needs it.
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
  id: 'b1.05',
  seq: 5,
  title: 'The Simple Future: Formation',
  sub: 'Le futur simple : la formation',
  canDo: 'Can build the futur simple of regular verbs from the infinitive, in the affirmative, the negative and the question, and can choose between the futur simple and the futur proche according to what each one commits the speaker to',
  prereqUnitIds: ['b1.01', 'b1.02', 'b1.03', 'b1.04'],
} as const;

export const LESSON_ID = 'b1.05.l1';
export const THEME = 'projets-et-futur';
export const LEVEL = 'b1' as const;

export const ID_RANGES = [[1, 199]] as const;

export const E = (n: number) => `fr.b1.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  A2 citations use the house English trail label (« lesson 16 in A2 »),
 *  resolved through `unitRef` from the shipped `unit.seq`, never typed and
 *  never the raw id. b1.* units are not in the seed yet, so they are labelled
 *  in French from the plan until they are.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMP_FORM_UNIT = 'b1.01';
export const PC_IMP_UNIT = 'b1.03';
export const PC_IMP_PAIRS_UNIT = 'b1.04';
export const FUTUR_IRREG_UNIT = 'b1.06';
export const FUTUR_QUAND_UNIT = 'b1.07';
export const CONDITIONNEL_UNIT = 'b1.08';
export const SI_UNIT = 'b1.10';
export const FUTUR_PROCHE_UNIT = 'a2.02';
export const PC_AVOIR_UNIT = 'a2.05';
export const ER_VERBS_UNIT = 'a2.01';
export const ER_EXCEPTIONS_UNIT = 'a2.09';
export const IR_VERBS_UNIT = 'a2.10';
export const RE_VERBS_UNIT = 'a2.11';
export const NEGATION_UNIT = 'a1.18';
export const TIME_PREP_UNIT = 'a2.18';

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
export const PC_IMP_REF = refFr(PC_IMP_UNIT);
export const PC_IMP_PAIRS_REF = refFr(PC_IMP_PAIRS_UNIT);
export const FUTUR_IRREG_REF = refFr(FUTUR_IRREG_UNIT);
export const FUTUR_QUAND_REF = refFr(FUTUR_QUAND_UNIT);
export const CONDITIONNEL_REF = refFr(CONDITIONNEL_UNIT);
export const SI_REF = refFr(SI_UNIT);
export const FUTUR_PROCHE_REF = unitRef(FUTUR_PROCHE_UNIT);
export const ER_VERBS_REF = unitRef(ER_VERBS_UNIT);
export const ER_EXCEPTIONS_REF = unitRef(ER_EXCEPTIONS_UNIT);
export const IR_VERBS_REF = unitRef(IR_VERBS_UNIT);
export const RE_VERBS_REF = unitRef(RE_VERBS_UNIT);
export const NEGATION_REF = unitRef(NEGATION_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED
 *
 *  b1.01 and b1.03 are French and are quoted as they stand. The A2 lines are
 *  English (A2 is taught in English) and every screen that shows one follows
 *  it with the French rendering below.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B101_REFRAME, REFRAME_EN as B101_REFRAME_EN } from './imparfait-formation-corpus.ts';
export { REFRAME as B103_REFRAME, REFRAME_EN as B103_REFRAME_EN } from './pc-imparfait-corpus.ts';
export { REFRAME as A209_REFRAME } from '../verbes-er-exceptions-terms.ts';
export { REFRAME as A211_REFRAME } from '../verbes-re-terms.ts';

export const A209_REFRAME_FR = "L'orthographe change pour que le son ne change pas.";
export const A211_REFRAME_FR = "À la forme il, on n'ajoute rien, et c'est ça la terminaison.";

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE JOIN, NOT THE JOURNEY. The futur simple is not "far away time": it is
 *  one piece of machinery, an infinitive that keeps its r, welded to avoir's
 *  present. Every act works on one side of that weld or on the choice between
 *  this machine and the other one (aller + infinitif). No timeline metaphor is
 *  used anywhere in the lesson, because the timeline is exactly what act 4 and
 *  act 8 exist to break.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Le futur, c'est l'infinitif jusqu'au r, puis avoir.";
export const REFRAME_EN = 'The future is the infinitive as far as the r, then avoir.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: "Le futur garde l'infinitif entier.",
    why: "False for the whole third group, which act 3 exists to teach: prendre gives prendr-, attendre gives attendr-. « Jusqu'au r » is the version that survives act 3.",
  },
  {
    text: 'Pour le futur, ajoute -ai, -as, -a, -ons, -ez, -ont.',
    why: 'A list, not a reframe. It also hides the one thing learners actually keep: those endings are avoir in the present, which is act 2 and the whole memory hook.',
  },
  {
    text: 'Le futur proche pour bientôt, le futur simple pour plus tard.',
    why: "False in both directions, and act 4 spends itself on the counterexamples: « Un jour, je vais arrêter de fumer » is far off and proche, « Le train partira à huit heures pile » is in ten minutes and simple.",
  },
  {
    text: "Le futur, c'est le présent d'avoir posé sur l'infinitif.",
    why: "Nearly right, and it IS the hook act 2 teaches. As a reframe it is dangerous: avoir's nous and vous are avons and avez, and a learner who takes the line literally writes « nous parleravons ». Kept as a card with its two-form warning, not as the line.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *
 *  Every id was read from seed.json on 2026-09-23. `namedOnly` rows carry no
 *  `flashcard` drill, so no deckTranche can release them: they are reachable
 *  by being named in a section or a drill. `NOT_SPEAKABLE` additionally lists
 *  the rows with no `voiceflash`, which a `practice` speak section may never
 *  name.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.a2.transports-quotidiens.213',   // Le prochain métro passera dans quatre minutes.
    'fr.a2.transports-quotidiens.201',   // Le train à destination de Lyon partira voie douze.
    'fr.a2.heure-et-date.121',           // Désolé, je vais être en retard de vingt minutes.
  ],
  act2: [
    'fr.b1.gouvernement.006',            // nous voterons
    'fr.b1.affaires.006',                // ils embaucheront
    'fr.b1.traditions.004',              // vous fêterez
    'fr.b1.universite.006',              // tu réussiras
    'fr.a2.heure-et-date.094',           // On en discutera plus tard.
  ],
  act3: [
    'fr.a2.transports-quotidiens.216',   // Le train à destination de Lille partira du quai numéro huit.
    'fr.a2.heure-et-date.088',           // On en parlera tout à l'heure.
  ],
  act4: [
    'fr.a2.heure-et-date.131',           // Dépêchons-nous, le film va commencer.
    'fr.a2.heure-et-date.084',           // Il va neiger cette nuit.
    'fr.a2.cafe.053',                    // Le serveur va apporter l'addition dans un instant.
    'fr.a2.heure-et-date.099',           // Fais-le tout de suite, sinon tu vas oublier.
    'fr.a2.heure-et-date.133',           // Dépêche-toi un peu, on va être en retard.
  ],
  act5: [
    'fr.b1.journalisme.006',             // ils publieront
    'fr.b1.heure-et-date.079',           // Elle est née un vendredi treize, un jour qu'elle n'oubliera jamais.  (named only)
  ],
  act6: [
    'fr.a2.marche.086',                  // Nous allons acheter du pain demain.  (named only)
  ],
  act7: [
    'fr.sons.liaisons.007',              // C'est une longue histoire, je te raconterai.  (named only)
    'fr.a2.cafe.058',                    // Nous allons partager l'addition entre nous.
  ],
  act8: [
    'fr.sons.jours-et-mois.039',         // l'année prochaine
    'fr.a2.heure-et-date.137',           // On se revoit la semaine prochaine, alors.
    'fr.a2.metiers.052',                 // Merci, on vous rappelle la semaine prochaine.
    'fr.a1.jours-et-mois.104',           // Le mois prochain, nous fêterons ses trente ans.  (named only)
  ],
  act9: [] as string[],
  act10: [
    'fr.a2.cafe.065',                    // Après le café, nous allons visiter le musée.
    'fr.a2.cuisine.045',                 // Tu vas préparer une tarte pour le dessert.
  ],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.b1.heure-et-date.079',   // dictation
  'fr.a2.marche.086',          // dictation
  'fr.sons.liaisons.007',      // sentence, review
  'fr.a1.jours-et-mois.104',   // dictation
];

/** No `voiceflash` either: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE,
  'fr.a2.heure-et-date.121', 'fr.a2.heure-et-date.094', 'fr.a2.heure-et-date.088',
  'fr.a2.heure-et-date.131', 'fr.a2.heure-et-date.084', 'fr.a2.heure-et-date.099',
  'fr.a2.heure-et-date.133', 'fr.b1.gouvernement.006', 'fr.b1.affaires.006',
  'fr.b1.traditions.004', 'fr.b1.universite.006', 'fr.b1.journalisme.006',
  'fr.a2.cafe.053', 'fr.a2.cafe.058', 'fr.a2.cafe.065', 'fr.a2.cuisine.045',
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  Respell house style: hyphenated syllables, the last stressed syllable of
 *  each group in caps, ü for French u, nasals closed with ⁿ, and NO U+203F
 *  tie: a liaison consonant moves onto the next syllable (« noo-za-vohⁿ »).
 *
 *  THE FUTURE ENDINGS ARE TWO SOUNDS, NOT SIX. -ai and -ez are [e], respelled
 *  `-RAY`; -as and -a are [a], respelled `-RA`; -ons and -ont are [ɔ̃],
 *  respelled `-ROHⁿ`. The caps sit on that final syllable, because the r plus
 *  the ending IS the group's stress in a spoken sentence, and hearing it is
 *  what act 2 asks for.
 *
 *  THE e OF THE STEM. In careful speech `parlerai` is /paʁ.lə.ʁe/ and the
 *  respelling keeps `par-luh-RAY`. Act 5's verbs (étudier, oublier, jouer,
 *  créer) are the ones where the written e really does disappear, and their
 *  respellings show that: `ay-tü-dee-RAY`, not `ay-tü-dee-uh-RAY`.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['futur-simple'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['futur-simple'], ...extra,
});

/** A gapfill card: `prompt` is the front, `fr` the answer (validateItem). */
const gap = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'gapfill', prompt, notes });
/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE PROJET FLOU ─────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1, 'Je vais déposer le dossier vendredi.', 'I am going to hand in the file on Friday.', '/ʒə vɛ de.po.ze lə do.sje vɑ̃.dʁə.di/', 'zhuh veh day-po-ZAY luh do-SYAY vahⁿ-druh-DEE', ['scene', 'proche']),
  sent(2, 'Je déposerai le dossier vendredi.', 'I will hand in the file on Friday.', '/ʒə de.po.zə.ʁe lə do.sje vɑ̃.dʁə.di/', 'zhuh day-po-zuh-RAY luh do-SYAY vahⁿ-druh-DEE', ['scene', 'simple', 'promesse'], FCVDR,
    gap('Je ___ (déposer) le dossier vendredi. EN: the written, committed version.', 'deposerai : la forme écrite qui engage. Je vais deposer dit seulement une intention.')),
  sent(3, 'Je signerai le bail le premier septembre.', 'I will sign the lease on the first of September.', '/ʒə si.ɲə.ʁe lə baj lə pʁə.mje sɛp.tɑ̃bʁ/', 'zhuh see-nyuh-RAY luh BAÏ luh pruh-myay sehp-TAHⁿBR', ['scene', 'simple', 'promesse']),
  sent(4, 'Nous examinerons votre demande cette semaine.', 'We will look at your application this week.', '/nu.zɛɡ.za.mi.nə.ʁɔ̃ vɔtʁ də.mɑ̃d sɛt sə.mɛn/', 'noo-zeg-za-mee-nuh-ROHⁿ votr duh-MAHⁿD seht suh-MENN', ['scene', 'simple', 'ecrit']),
  sent(5, 'Le magasin ouvrira à neuf heures.', 'The shop will open at nine.', '/lə ma.ɡa.zɛ̃ u.vʁi.ʁa a nœ.vœʁ/', 'luh ma-ga-ZEHⁿ oo-vree-RA a nuh-VUHR', ['scene', 'simple', 'annonce'], FCVDR),
  sent(6, 'La réunion commencera à quatorze heures.', 'The meeting will start at two.', '/la ʁe.y.njɔ̃ kɔ.mɑ̃s.ʁa a ka.tɔʁ.zœʁ/', 'la ray-ü-NYOHⁿ ko-mahⁿs-RA a ka-tor-ZUHR', ['scene', 'simple', 'annonce']),
  sent(7, 'Tu trouveras les clés dans la boîte aux lettres.', 'You will find the keys in the letterbox.', '/ty tʁu.və.ʁa le kle dɑ̃ la bwat o lɛtʁ/', 'tü troo-vuh-RA lay KLAY dahⁿ la BWAT oh LEHTR', ['scene', 'simple']),
  sent(8, 'Une réponse arrivera par courriel.', 'An answer will come by email.', '/yn ʁe.pɔ̃s a.ʁi.və.ʁa paʁ ku.ʁjɛl/', 'ün ray-POHⁿS a-ree-vuh-RA par koo-RYEHL', ['scene', 'simple', 'ecrit'], FCVDR),
  sent(9, 'Je te raconterai tout ce soir.', 'I will tell you everything this evening.', '/ʒə tə ʁa.kɔ̃.tə.ʁe tu sə swaʁ/', 'zhuh tuh ra-kohⁿ-tuh-RAY too suh SWAR', ['scene', 'simple']),
  sent(10, "L'agence fermera à dix-huit heures.", 'The agency will close at six.', '/la.ʒɑ̃s fɛʁ.mə.ʁa a di.zɥi.tœʁ/', 'la-ZHAHⁿS fehr-muh-RA a dee-zwee-TUHR', ['scene', 'simple', 'annonce']),
  sent(11, 'On décidera ensemble la semaine prochaine.', 'We will decide together next week.', '/ɔ̃ de.si.də.ʁa ɑ̃.sɑ̃bl la sə.mɛn pʁɔ.ʃɛn/', 'ohⁿ day-see-duh-RA ahⁿ-SAHⁿBL la suh-MENN pro-SHENN', ['scene', 'simple', 'marqueur']),
  sent(12, 'Le chauffage marchera dès le premier octobre.', 'The heating will work from the first of October.', '/lə ʃo.faʒ maʁ.ʃə.ʁa dɛ lə pʁə.mje ɔk.tɔbʁ/', 'luh shoh-FAZH mar-shuh-RA deh luh pruh-myay ok-TOBR', ['scene', 'simple', 'promesse']),
  sent(13, 'Nous confirmerons la date par écrit.', 'We will confirm the date in writing.', '/nu kɔ̃.fiʁ.mə.ʁɔ̃ la dat paʁ e.kʁi/', 'noo kohⁿ-feer-muh-ROHⁿ la DAT par ay-KREE', ['scene', 'simple', 'ecrit'], FCVDR),
];

/* ── ACT 2 · UN R, PUIS AVOIR ───────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(14, REFRAME, REFRAME_EN, '/lə fy.tyʁ sɛ lɛ̃.fi.ni.tif ʒys.ko ɛʁ pɥi a.vwaʁ/', 'luh fü-TÜR seh lehⁿ-fee-nee-TEEF zhüs-koh EHR pwee a-VWAR', ['rule', 'reframe'], ['flashcard'],
    rule('Comment se fabrique un futur simple régulier ?', 'Ex : parler donne je parlerai. Le radical garde le r de l’infinitif.')),
  sent(15, "Les terminaisons du futur sont celles d'avoir au présent.", "The future endings are avoir's present-tense endings.", '/le tɛʁ.mi.nɛ.zɔ̃ dy fy.tyʁ sɔ̃ sɛl da.vwaʁ o pʁe.zɑ̃/', 'lay tehr-mee-neh-ZOHⁿ dü fü-TÜR sohⁿ sehl da-VWAR oh pray-ZAHⁿ', ['rule', 'avoir'], ['flashcard'],
    rule('D’où viennent -ai, -as, -a, -ons, -ez, -ont ?', 'Du verbe avoir au présent : j’ai, tu as, il a.')),
  phrase(16, 'je parlerai', 'I will speak', '/ʒə paʁ.lə.ʁe/', 'zhuh par-luh-RAY', ['forme', 'er']),
  phrase(17, 'tu parleras', 'you will speak', '/ty paʁ.lə.ʁa/', 'tü par-luh-RA', ['forme', 'er']),
  phrase(18, 'il parlera', 'he will speak', '/il paʁ.lə.ʁa/', 'eel par-luh-RA', ['forme', 'er']),
  phrase(19, 'nous parlerons', 'we will speak', '/nu paʁ.lə.ʁɔ̃/', 'noo par-luh-ROHⁿ', ['forme', 'er']),
  phrase(20, 'vous parlerez', 'you will speak', '/vu paʁ.lə.ʁe/', 'voo par-luh-RAY', ['forme', 'er']),
  phrase(21, 'ils parleront', 'they will speak', '/il paʁ.lə.ʁɔ̃/', 'eel par-luh-ROHⁿ', ['forme', 'er']),
  phrase(22, 'je finirai', 'I will finish', '/ʒə fi.ni.ʁe/', 'zhuh fee-nee-RAY', ['forme', 'ir']),
  phrase(23, 'nous finirons', 'we will finish', '/nu fi.ni.ʁɔ̃/', 'noo fee-nee-ROHⁿ', ['forme', 'ir']),
  sent(24, "J'ai, tu as, il a : la moitié du futur est déjà là.", 'I have, you have, he has: half the future is already there.', '/ʒe ty a i.la la mwa.tje dy fy.tyʁ ɛ de.ʒa la/', 'zhay tü A ee-LA la mwa-TYAY dü fü-TÜR eh day-zha LA', ['rule', 'avoir']),
  sent(25, 'Attention : nous avons, mais nous parlerons.', 'Careful: nous avons, but nous parlerons.', '/a.tɑ̃.sjɔ̃ nu.za.vɔ̃ mɛ nu paʁ.lə.ʁɔ̃/', 'a-tahⁿ-SYOHⁿ noo-za-VOHⁿ meh noo par-luh-ROHⁿ', ['rule', 'avoir', 'piege'], FCVDR),
  sent(26, 'Attention : vous avez, mais vous parlerez.', 'Careful: vous avez, but vous parlerez.', '/a.tɑ̃.sjɔ̃ vu.za.ve mɛ vu paʁ.lə.ʁe/', 'a-tahⁿ-SYOHⁿ voo-za-VAY meh voo par-luh-RAY', ['rule', 'avoir', 'piege']),
  sent(27, 'Demain, je travaillerai à la maison.', 'Tomorrow I will work from home.', '/də.mɛ̃ ʒə tʁa.va.jə.ʁe a la mɛ.zɔ̃/', 'duh-MEHⁿ zhuh tra-va-yuh-RAY a la meh-ZOHⁿ', ['er', 'simple'], FCVDR),
  sent(28, 'Nous choisirons un autre jour.', 'We will choose another day.', '/nu ʃwa.zi.ʁɔ̃ œ̃.notʁ ʒuʁ/', 'noo shwa-zee-ROHⁿ uhⁿ-NOTR ZHOOR', ['ir', 'simple']),
  sent(29, 'Tu réfléchiras avant de répondre.', 'You will think it over before answering.', '/ty ʁe.fle.ʃi.ʁa a.vɑ̃ də ʁe.pɔ̃dʁ/', 'tü ray-flay-shee-RA a-vahⁿ duh ray-POHⁿDR', ['ir', 'simple']),
  sent(30, 'Vous remplirez ce formulaire à la fin.', 'You will fill in this form at the end.', '/vu ʁɑ̃.pli.ʁe sə fɔʁ.my.lɛʁ a la fɛ̃/', 'voo rahⁿ-plee-RAY suh for-mü-LEHR a la FEHⁿ', ['ir', 'simple']),
  sent(31, 'Les enfants grandiront vite.', 'The children will grow up fast.', '/le.zɑ̃.fɑ̃ ɡʁɑ̃.di.ʁɔ̃ vit/', 'lay-zahⁿ-FAHⁿ grahⁿ-dee-ROHⁿ VEET', ['ir', 'simple']),
  sent(32, 'Je parlais au téléphone quand tu es entré.', 'I was on the phone when you came in.', '/ʒə paʁ.lɛ o te.le.fɔn kɑ̃ ty ɛ.zɑ̃.tʁe/', 'zhuh par-leh oh tay-lay-FON kahⁿ tü eh-zahⁿ-TRAY', ['imparfait', 'paire']),
  sent(33, 'Je parlerai au directeur demain matin.', 'I will speak to the manager tomorrow morning.', '/ʒə paʁ.lə.ʁe o di.ʁɛk.tœʁ də.mɛ̃ ma.tɛ̃/', 'zhuh par-luh-RAY oh dee-rehk-TUHR duh-mehⁿ ma-TEHⁿ', ['simple', 'paire'], FCVDR),
  sent(34, "Le r s'entend toujours : c'est lui qui annonce le futur.", 'The r is always audible: it is what announces the future.', '/lə ɛʁ sɑ̃.tɑ̃ tu.ʒuʁ sɛ lɥi ki a.nɔ̃s lə fy.tyʁ/', 'luh EHR sahⁿ-tahⁿ too-ZHOOR seh lwee kee a-NOHⁿS luh fü-TÜR', ['rule', 'son'], ['flashcard'],
    rule('Qu’est-ce qui sépare je parlais de je parlerai ?', 'Le r. Sans r, c’est l’imparfait ; avec r, c’est le futur.')),
];

/* ── ACT 3 · LES TROIS GROUPES ──────────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(35, 'Les verbes en -re perdent leur e et gardent leur r.', 'Verbs in -re drop their e and keep their r.', '/le vɛʁb ɑ̃ ʁə pɛʁd lœʁ ə e ɡaʁd lœʁ ɛʁ/', 'lay VEHRB ahⁿ RUH pehrd luhr UH ay gard luhr EHR', ['rule', 're'], ['flashcard'],
    rule('Que devient prendre au futur ?', 'prendre perd le e : je prendrai, nous prendrons.')),
  phrase(36, 'je prendrai', 'I will take', '/ʒə pʁɑ̃.dʁe/', 'zhuh prahⁿ-DRAY', ['forme', 're']),
  phrase(37, 'nous prendrons', 'we will take', '/nu pʁɑ̃.dʁɔ̃/', 'noo prahⁿ-DROHⁿ', ['forme', 're']),
  phrase(38, 'tu attendras', 'you will wait', '/ty a.tɑ̃.dʁa/', 'tü a-tahⁿ-DRA', ['forme', 're']),
  phrase(39, 'elle répondra', 'she will answer', '/ɛl ʁe.pɔ̃.dʁa/', 'ehl ray-pohⁿ-DRA', ['forme', 're']),
  phrase(40, 'vous écrirez', 'you will write', '/vu.ze.kʁi.ʁe/', 'voo-zay-kree-RAY', ['forme', 're']),
  phrase(41, 'ils liront', 'they will read', '/il li.ʁɔ̃/', 'eel lee-ROHⁿ', ['forme', 're']),
  sent(42, 'Je prendrai le train de sept heures.', 'I will take the seven o clock train.', '/ʒə pʁɑ̃.dʁe lə tʁɛ̃ də sɛ.tœʁ/', 'zhuh prahⁿ-DRAY luh TREHⁿ duh seh-TUHR', ['re', 'simple'], FCVDR),
  sent(43, 'Nous attendrons devant la gare.', 'We will wait in front of the station.', '/nu.za.tɑ̃.dʁɔ̃ də.vɑ̃ la ɡaʁ/', 'noo-za-tahⁿ-DROHⁿ duh-vahⁿ la GAR', ['re', 'simple'], FCVDR),
  sent(44, 'Elle répondra à ton message ce soir.', 'She will answer your message this evening.', '/ɛl ʁe.pɔ̃.dʁa a tɔ̃ me.saʒ sə swaʁ/', 'ehl ray-pohⁿ-DRA a tohⁿ may-SAZH suh SWAR', ['re', 'simple']),
  sent(45, "J'écrirai une lettre au propriétaire.", 'I will write a letter to the landlord.', '/ʒe.kʁi.ʁe yn lɛtʁ o pʁɔ.pʁi.e.tɛʁ/', 'zhay-kree-RAY ün LEHTR oh pro-pree-ay-TEHR', ['re', 'simple'], FCVDR),
  sent(46, 'Vous lirez le contrat avant de signer.', 'You will read the contract before signing.', '/vu li.ʁe lə kɔ̃.tʁa a.vɑ̃ də si.ɲe/', 'voo lee-RAY luh kohⁿ-TRA a-vahⁿ duh see-NYAY', ['re', 'simple']),
  sent(47, 'Tu mettras ton manteau avant de sortir.', 'You will put your coat on before going out.', '/ty mɛ.tʁa tɔ̃ mɑ̃.to a.vɑ̃ də sɔʁ.tiʁ/', 'tü meh-TRA tohⁿ mahⁿ-TOH a-vahⁿ duh sor-TEER', ['re', 'simple']),
  sent(48, 'Ils vendront leur voiture au printemps.', 'They will sell their car in the spring.', '/il vɑ̃.dʁɔ̃ lœʁ vwa.tyʁ o pʁɛ̃.tɑ̃/', 'eel vahⁿ-DROHⁿ luhr vwa-TÜR oh prehⁿ-TAHⁿ', ['re', 'simple'], FCVDR),
  sent(49, 'On descendra à la prochaine station.', 'We will get off at the next stop.', '/ɔ̃ de.sɑ̃.dʁa a la pʁɔ.ʃɛn sta.sjɔ̃/', 'ohⁿ day-sahⁿ-DRA a la pro-SHENN sta-SYOHⁿ', ['re', 'simple']),
  sent(50, 'Nous vivrons près du fleuve.', 'We will live near the river.', '/nu vi.vʁɔ̃ pʁɛ dy flœv/', 'noo vee-VROHⁿ preh dü FLUHV', ['re', 'simple']),
  sent(51, 'Je te dirai la vérité demain.', 'I will tell you the truth tomorrow.', '/ʒə tə di.ʁe la ve.ʁi.te də.mɛ̃/', 'zhuh tuh dee-RAY la vay-ree-TAY duh-MEHⁿ', ['re', 'simple'], FCVDR),
  sent(52, 'Elle suivra un cours de comptabilité.', 'She will take an accounting course.', '/ɛl sɥi.vʁa œ̃ kuʁ də kɔ̃.ta.bi.li.te/', 'ehl swee-VRA uhⁿ KOOR duh kohⁿ-ta-bee-lee-TAY', ['re', 'simple']),
];

/* ── ACT 4 · PROCHE OU SIMPLE ───────────────────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(53, "Aller plus l'infinitif garde un fil avec maintenant.", 'Aller plus the infinitive keeps a thread back to now.', '/a.le plys lɛ̃.fi.ni.tif ɡaʁd œ̃ fil a.vɛk mɛ̃t.nɑ̃/', 'a-LAY plüs lehⁿ-fee-nee-TEEF gard uhⁿ FEEL a-vehk mehⁿt-NAHⁿ', ['rule', 'proche'], ['flashcard'],
    rule('Que dit le futur proche que le futur simple ne dit pas ?', 'Que ça part de maintenant : c’est décidé, c’est lancé, on le voit venir.')),
  sent(54, 'Je vais réserver la salle.', 'I am going to book the room.', '/ʒə vɛ ʁe.zɛʁ.ve la sal/', 'zhuh veh ray-zehr-VAY la SAL', ['proche', 'paire']),
  sent(55, 'Je réserverai la salle en janvier.', 'I will book the room in January.', '/ʒə ʁe.zɛʁ.və.ʁe la sal ɑ̃ ʒɑ̃.vje/', 'zhuh ray-zehr-vuh-RAY la SAL ahⁿ zhahⁿ-VYAY', ['simple', 'paire'], FCVDR),
  sent(56, 'Regarde le ciel, il va pleuvoir.', 'Look at the sky, it is going to rain.', '/ʁə.ɡaʁd lə sjɛl il va plø.vwaʁ/', 'ruh-GARD luh SYEHL eel va pluh-VWAR', ['proche', 'signe']),
  sent(57, 'Attention, tu vas tomber.', 'Careful, you are going to fall.', '/a.tɑ̃.sjɔ̃ ty va tɔ̃.be/', 'a-tahⁿ-SYOHⁿ tü va tohⁿ-BAY', ['proche', 'signe']),
  sent(58, 'Un jour, nous habiterons près de la mer.', 'One day we will live by the sea.', '/œ̃ ʒuʁ nu.za.bi.tə.ʁɔ̃ pʁɛ də la mɛʁ/', 'uhⁿ ZHOOR noo-za-bee-tuh-ROHⁿ preh duh la MEHR', ['simple', 'projet'], FCVDR),
  sent(59, 'Ce soir, nous allons manger chez ma sœur.', 'This evening we are going to eat at my sister s.', '/sə swaʁ nu.za.lɔ̃ mɑ̃.ʒe ʃe ma sœʁ/', 'suh SWAR noo-za-LOHⁿ mahⁿ-ZHAY shay ma SUHR', ['proche', 'prevu']),
  sent(60, 'Dans dix ans, cette rue changera complètement.', 'In ten years this street will change completely.', '/dɑ̃ di.zɑ̃ sɛt ʁy ʃɑ̃.ʒə.ʁa kɔ̃.plɛt.mɑ̃/', 'dahⁿ dee-ZAHⁿ seht RÜ shahⁿ-zhuh-RA kohⁿ-pleht-MAHⁿ', ['simple', 'projet']),
  sent(61, 'Le train va partir, monte vite.', 'The train is about to leave, get on quickly.', '/lə tʁɛ̃ va paʁ.tiʁ mɔ̃t vit/', 'luh TREHⁿ va par-TEER mohⁿt VEET', ['proche', 'paire']),
  sent(62, 'Le train partira à huit heures pile.', 'The train will leave at eight on the dot.', '/lə tʁɛ̃ paʁ.ti.ʁa a ɥi.tœʁ pil/', 'luh TREHⁿ par-tee-RA a wee-tuhr PEEL', ['simple', 'paire', 'annonce'], FCVDR),
  sent(63, "L'entreprise embauchera vingt personnes cette année.", 'The company will hire twenty people this year.', '/lɑ̃.tʁə.pʁiz ɑ̃.bo.ʃə.ʁa vɛ̃ pɛʁ.sɔn sɛ.ta.ne/', 'lahⁿ-truh-PREEZ ahⁿ-boh-shuh-RA vehⁿ pehr-SON seh-ta-NAY', ['simple', 'annonce']),
  sent(64, "L'entreprise va embaucher deux stagiaires en juin.", 'The company is going to take on two interns in June.', '/lɑ̃.tʁə.pʁiz va ɑ̃.bo.ʃe dø sta.ʒjɛʁ ɑ̃ ʒɥɛ̃/', 'lahⁿ-truh-PREEZ va ahⁿ-boh-SHAY deu sta-ZHYEHR ahⁿ ZHWEHⁿ', ['proche', 'prevu']),
  sent(65, "À l'oral, le futur proche passe partout.", 'In speech the futur proche goes everywhere.', '/a lɔ.ʁal lə fy.tyʁ pʁɔʃ pas paʁ.tu/', 'a lo-RAL luh fü-tür PROSH pas par-TOO', ['rule', 'proche'], ['flashcard'],
    rule('Quel futur entend-on le plus en conversation ?', 'Le futur proche : je vais partir, on va voir.')),
  sent(66, "À l'écrit, le futur simple reste le plus courant.", 'In writing the futur simple stays the commoner one.', '/a le.kʁi lə fy.tyʁ sɛ̃pl ʁɛst lə ply ku.ʁɑ̃/', 'a lay-KREE luh fü-tür SEHⁿPL rehst luh plü koo-RAHⁿ', ['rule', 'simple'], ['flashcard'],
    rule('Quel futur choisit-on dans un courriel professionnel ?', 'Le futur simple : nous confirmerons, je déposerai.')),
  sent(67, 'Je vais te rappeler dans cinq minutes.', 'I am going to call you back in five minutes.', '/ʒə vɛ tə ʁa.plə dɑ̃ sɛ̃k mi.nyt/', 'zhuh veh tuh ra-PLAY dahⁿ sehⁿk mee-NÜT', ['proche', 'prevu']),
  sent(68, 'Nous parlerons de cette question à la prochaine réunion.', 'We will talk about that question at the next meeting.', '/nu paʁ.lə.ʁɔ̃ də sɛt kɛs.tjɔ̃ a la pʁɔ.ʃɛn ʁe.y.njɔ̃/', 'noo par-luh-ROHⁿ duh seht kehs-TYOHⁿ a la pro-SHENN ray-ü-NYOHⁿ', ['simple', 'ecrit']),
  sent(69, 'Tu vas adorer ce film.', 'You are going to love this film.', '/ty va a.dɔ.ʁe sə film/', 'tü va a-do-RAY suh FEELM', ['proche', 'signe']),
  sent(70, 'Les prix augmenteront au mois de janvier.', 'Prices will go up in January.', '/le pʁi oɡ.mɑ̃.tə.ʁɔ̃ o mwa də ʒɑ̃.vje/', 'lay PREE og-mahⁿ-tuh-ROHⁿ oh mwa duh zhahⁿ-VYAY', ['simple', 'annonce'], FCVDR),
];

/* ── ACT 5 · L'INFINITIF GARDÉ EN ENTIER ────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(71, "Garde l'infinitif en entier : étudier donne étudierai.", 'Keep the whole infinitive: étudier gives étudierai.', '/ɡaʁd lɛ̃.fi.ni.tif ɑ̃.nɑ̃.tje e.ty.dje dɔn e.ty.di.ʁe/', 'gard lehⁿ-fee-nee-TEEF ahⁿ-nahⁿ-TYAY ay-tü-DYAY don ay-tü-dee-RAY', ['rule', 'emuet'], ['flashcard'],
    rule('Que devient étudier au futur ?', 'On garde tout : étudier + ai = étudierai. Le e s’écrit et ne s’entend presque pas.')),
  phrase(72, "j'étudierai", 'I will study', '/ʒe.ty.di.ʁe/', 'zhay-tü-dee-RAY', ['forme', 'emuet']),
  phrase(73, 'tu oublieras', 'you will forget', '/ty u.bli.ʁa/', 'tü oo-blee-RA', ['forme', 'emuet']),
  phrase(74, 'nous jouerons', 'we will play', '/nu ʒu.ʁɔ̃/', 'noo zhoo-ROHⁿ', ['forme', 'emuet']),
  phrase(75, 'ils créeront', 'they will create', '/il kʁe.ʁɔ̃/', 'eel kray-ROHⁿ', ['forme', 'emuet']),
  phrase(76, 'vous continuerez', 'you will carry on', '/vu kɔ̃.ti.ny.ʁe/', 'voo kohⁿ-tee-nü-RAY', ['forme', 'emuet']),
  sent(77, "J'étudierai le français toute l'année.", 'I will study French all year.', '/ʒe.ty.di.ʁe lə fʁɑ̃.sɛ tut la.ne/', 'zhay-tü-dee-RAY luh frahⁿ-SEH toot la-NAY', ['emuet', 'simple'], FCVDR),
  sent(78, 'Tu oublieras vite ce mauvais moment.', 'You will soon forget this bad patch.', '/ty u.bli.ʁa vit sə mo.vɛ mɔ.mɑ̃/', 'tü oo-blee-RA veet suh moh-veh mo-MAHⁿ', ['emuet', 'simple'], FCVDR),
  sent(79, 'Nous jouerons au foot dimanche matin.', 'We will play football on Sunday morning.', '/nu ʒu.ʁɔ̃ o fut di.mɑ̃ʃ ma.tɛ̃/', 'noo zhoo-ROHⁿ oh FOOT dee-mahⁿsh ma-TEHⁿ', ['emuet', 'simple']),
  sent(80, 'Ils créeront un nouveau service en septembre.', 'They will create a new department in September.', '/il kʁe.ʁɔ̃ œ̃ nu.vo sɛʁ.vis ɑ̃ sɛp.tɑ̃bʁ/', 'eel kray-ROHⁿ uhⁿ noo-VOH sehr-VEES ahⁿ sehp-TAHⁿBR', ['emuet', 'simple'], FCVDR),
  sent(81, 'Vous continuerez sans moi.', 'You will carry on without me.', '/vu kɔ̃.ti.ny.ʁe sɑ̃ mwa/', 'voo kohⁿ-tee-nü-RAY sahⁿ MWA', ['emuet', 'simple']),
  sent(82, 'Je te remercierai comme il faut.', 'I will thank you properly.', '/ʒə tə ʁə.mɛʁ.si.ʁe kɔ.mil fo/', 'zhuh tuh ruh-mehr-see-RAY ko-meel FOH', ['emuet', 'simple']),
  sent(83, 'Elle appréciera ce petit cadeau.', 'She will appreciate this little present.', '/ɛ.la.pʁe.si.ʁa sə pə.ti ka.do/', 'eh-la-pray-see-RA suh puh-TEE ka-DOH', ['emuet', 'simple']),
  sent(84, 'On oubliera cette histoire dans un mois.', 'We will have forgotten this in a month.', '/ɔ̃.nu.bli.ʁa sɛ.tis.twaʁ dɑ̃.zœ̃ mwa/', 'ohⁿ-noo-blee-RA seh-tees-TWAR dahⁿ-zuhⁿ MWA', ['emuet', 'simple'], FCVDR),
  sent(85, "Ce e ne s'entend presque pas, mais il s'écrit toujours.", 'That e is barely heard, but it is always written.', '/sə ə nə sɑ̃.tɑ̃ pʁɛsk pa mɛ il se.kʁi tu.ʒuʁ/', 'suh UH nuh sahⁿ-tahⁿ prehsk PA meh eel say-KREE too-ZHOOR', ['rule', 'emuet'], ['flashcard'],
    rule('Pourquoi écrire le e de étudierai si on ne l’entend pas ?', 'Parce que le radical du futur est l’infinitif complet, e compris.')),
  sent(86, 'Nous continuerons la réunion après le déjeuner.', 'We will carry on with the meeting after lunch.', '/nu kɔ̃.ti.ny.ʁɔ̃ la ʁe.y.njɔ̃ a.pʁɛ lə de.ʒø.ne/', 'noo kohⁿ-tee-nü-ROHⁿ la ray-ü-NYOHⁿ a-preh luh day-zheu-NAY', ['emuet', 'simple']),
];

/* ── ACT 6 · LES RADICAUX QUI CHANGENT ──────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(87, 'Quand le radical change, il change à toutes les personnes.', 'When the stem changes, it changes for every person.', '/kɑ̃ lə ʁa.di.kal ʃɑ̃ʒ il ʃɑ̃ʒ a tut le pɛʁ.sɔn/', 'kahⁿ luh ra-dee-KAL SHAHⁿZH eel SHAHⁿZH a toot lay pehr-SON', ['rule', 'radical'], ['flashcard'],
    rule('acheter donne j’achèterai. Et nous ?', 'nous achèterons. Le radical change partout, sans exception.')),
  phrase(88, "j'achèterai", 'I will buy', '/ʒa.ʃɛ.tə.ʁe/', 'zha-sheh-tuh-RAY', ['forme', 'radical']),
  phrase(89, 'tu te lèveras', 'you will get up', '/ty tə lɛ.və.ʁa/', 'tü tuh leh-vuh-RA', ['forme', 'radical']),
  phrase(90, 'il appellera', 'he will call', '/i.la.pɛl.ʁa/', 'ee-la-pehl-RA', ['forme', 'radical']),
  phrase(91, 'nous jetterons', 'we will throw away', '/nu ʒɛt.ʁɔ̃/', 'noo zheht-ROHⁿ', ['forme', 'radical']),
  phrase(92, 'vous paierez', 'you will pay', '/vu pɛ.ʁe/', 'voo peh-RAY', ['forme', 'radical']),
  phrase(93, 'ils essaieront', 'they will try', '/il.ze.sɛ.ʁɔ̃/', 'eel-zay-seh-ROHⁿ', ['forme', 'radical']),
  sent(94, "J'achèterai le billet ce soir.", 'I will buy the ticket tonight.', '/ʒa.ʃɛ.tə.ʁe lə bi.jɛ sə swaʁ/', 'zha-sheh-tuh-RAY luh bee-YEH suh SWAR', ['radical', 'simple'], FCVDR),
  sent(95, 'Nous achèterons une voiture électrique.', 'We will buy an electric car.', '/nu.za.ʃɛ.tə.ʁɔ̃ yn vwa.tyʁ e.lɛk.tʁik/', 'noo-za-sheh-tuh-ROHⁿ ün vwa-TÜR ay-lehk-TREEK', ['radical', 'simple']),
  sent(96, 'Je me lèverai à six heures demain.', 'I will get up at six tomorrow.', '/ʒə mə lɛ.və.ʁe a si.zœʁ də.mɛ̃/', 'zhuh muh leh-vuh-RAY a see-zuhr duh-MEHⁿ', ['radical', 'simple'], FCVDR),
  sent(97, 'Tu te lèveras plus tôt en hiver.', 'You will get up earlier in winter.', '/ty tə lɛ.və.ʁa ply to ɑ̃.ni.vɛʁ/', 'tü tuh leh-vuh-RA plü TOH ahⁿ-nee-VEHR', ['radical', 'simple']),
  sent(98, "Le bureau t'appellera avant midi.", 'The office will call you before noon.', '/lə by.ʁo ta.pɛl.ʁa a.vɑ̃ mi.di/', 'luh bü-ROH ta-pehl-RA a-vahⁿ mee-DEE', ['radical', 'simple']),
  sent(99, 'Nous appellerons un taxi à la sortie.', 'We will call a taxi on the way out.', '/nu.za.pɛl.ʁɔ̃ œ̃ tak.si a la sɔʁ.ti/', 'noo-za-pehl-ROHⁿ uhⁿ tak-SEE a la sor-TEE', ['radical', 'simple'], FCVDR),
  sent(100, 'Elle jettera ces vieux papiers.', 'She will throw out these old papers.', '/ɛl ʒɛt.ʁa se vjø pa.pje/', 'ehl zheht-RA say vyeu pa-PYAY', ['radical', 'simple']),
  sent(101, 'Je paierai par carte, comme toujours.', 'I will pay by card, as always.', '/ʒə pɛ.ʁe paʁ kaʁt kɔm tu.ʒuʁ/', 'zhuh peh-RAY par KART kom too-ZHOOR', ['radical', 'simple'], FCVDR),
  sent(102, 'Nous paierons la facture avant la fin du mois.', 'We will pay the bill before the end of the month.', '/nu pɛ.ʁɔ̃ la fak.tyʁ a.vɑ̃ la fɛ̃ dy mwa/', 'noo peh-ROHⁿ la fak-TÜR a-vahⁿ la fehⁿ dü MWA', ['radical', 'simple']),
  sent(103, "J'essaierai encore une fois demain.", 'I will try once more tomorrow.', '/ʒe.sɛ.ʁe ɑ̃.kɔʁ yn fwa də.mɛ̃/', 'zhay-seh-RAY ahⁿ-kor ün FWA duh-MEHⁿ', ['radical', 'simple']),
  sent(104, 'Elle emploiera un nouveau logiciel.', 'She will use a new piece of software.', '/ɛ.lɑ̃.plwa.ʁa œ̃ nu.vo lɔ.ʒi.sjɛl/', 'eh-lahⁿ-plwa-RA uhⁿ noo-VOH lo-zhee-SYEHL', ['radical', 'simple']),
  sent(105, 'Nous nettoierons la cuisine samedi.', 'We will clean the kitchen on Saturday.', '/nu nɛ.twa.ʁɔ̃ la kɥi.zin sam.di/', 'noo neh-twa-ROHⁿ la kwee-ZEEN sam-DEE', ['radical', 'simple']),
  sent(106, 'Envoyer ne suit pas cette règle, et la leçon suivante le montre.', 'Envoyer does not follow this rule, and the next lesson shows it.', '/ɑ̃.vwa.je nə sɥi pa sɛt ʁɛɡl e la lə.sɔ̃ sɥi.vɑ̃t lə mɔ̃tʁ/', 'ahⁿ-vwa-YAY nuh swee pa seht REHGL ay la luh-SOHⁿ swee-VAHⁿT luh MOHⁿTR', ['rule', 'frontiere'], ['flashcard'],
    rule('essayer donne j’essaierai. Et envoyer ?', 'Pas j’envoierai : le radical est enverr-, et c’est la leçon suivante qui l’explique.')),
  sent(107, "Écoute l'accent : achèterai, et non acheterai.", 'Listen to the accent: achèterai, not acheterai.', '/e.kut lak.sɑ̃ a.ʃɛ.tə.ʁe e nɔ̃.na.ʃə.tə.ʁe/', 'ay-KOOT lak-SAHⁿ a-sheh-tuh-RAY ay nohⁿ-na-shuh-tuh-RAY', ['rule', 'radical'], ['flashcard'],
    rule('Pourquoi un accent grave sur achèterai ?', 'Parce que le e se prononce [ɛ] devant la syllabe muette. L’accent écrit ce son.')),
];

/* ── ACT 7 · LA PHRASE AU FUTUR ─────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(108, 'La négation entoure le verbe, comme toujours.', 'The negative wraps round the verb, as always.', '/la ne.ɡa.sjɔ̃ ɑ̃.tuʁ lə vɛʁb kɔm tu.ʒuʁ/', 'la nay-ga-SYOHⁿ ahⁿ-TOOR luh VEHRB kom too-ZHOOR', ['rule', 'negation'], ['flashcard'],
    rule('Où vont ne et pas au futur simple ?', 'Autour du verbe, qui est en un seul mot : je ne partirai pas.')),
  sent(109, 'Je ne partirai pas avant la fin du mois.', 'I will not leave before the end of the month.', '/ʒə nə paʁ.ti.ʁe pa a.vɑ̃ la fɛ̃ dy mwa/', 'zhuh nuh par-tee-RAY pa a-vahⁿ la fehⁿ dü MWA', ['negation', 'simple'], FCVDR),
  sent(110, "Nous ne changerons rien pour l'instant.", 'We will not change anything for now.', '/nu nə ʃɑ̃.ʒə.ʁɔ̃ ʁjɛ̃ puʁ lɛ̃s.tɑ̃/', 'noo nuh shahⁿ-zhuh-ROHⁿ RYEHⁿ poor lehⁿs-TAHⁿ', ['negation', 'simple']),
  sent(111, 'Tu ne le regretteras jamais.', 'You will never regret it.', '/ty nə lə ʁə.ɡʁɛt.ʁa ʒa.mɛ/', 'tü nuh luh ruh-greht-RA zha-MEH', ['negation', 'pronom'], FCVDR),
  sent(112, 'On ne trouvera personne à cette heure-là.', 'We will not find anybody at that hour.', '/ɔ̃ nə tʁu.və.ʁa pɛʁ.sɔn a sɛ.tœʁ la/', 'ohⁿ nuh troo-vuh-RA pehr-SON a seh-tuhr-LA', ['negation', 'simple']),
  sent(113, 'Je te le rendrai demain.', 'I will give it back to you tomorrow.', '/ʒə tə lə ʁɑ̃.dʁe də.mɛ̃/', 'zhuh tuh luh rahⁿ-DRAY duh-MEHⁿ', ['pronom', 'simple'], FCVDR),
  sent(114, 'Elle nous appellera dès son arrivée.', 'She will call us as soon as she arrives.', '/ɛl nu.za.pɛl.ʁa dɛ sɔ̃.na.ʁi.ve/', 'ehl noo-za-pehl-RA deh sohⁿ-na-ree-VAY', ['pronom', 'simple']),
  sent(115, 'À quelle heure est-ce que tu rentreras ?', 'What time will you get home?', '/a kɛ.lœʁ ɛs kə ty ʁɑ̃.tʁə.ʁa/', 'a keh-LUHR ehs kuh tü rahⁿ-truh-RA', ['question', 'simple']),
  sent(116, 'Est-ce que vous resterez pour le dîner ?', 'Will you stay for dinner?', '/ɛs kə vu ʁɛs.tə.ʁe puʁ lə di.ne/', 'ehs kuh voo rehs-tuh-RAY poor luh dee-NAY', ['question', 'simple']),
  sent(117, 'Resterez-vous pour le dîner ?', 'Will you stay for dinner?', '/ʁɛs.tə.ʁe vu puʁ lə di.ne/', 'rehs-tuh-RAY voo poor luh dee-NAY', ['question', 'simple', 'formel']),
  sent(118, 'Je ne vous dérangerai plus.', 'I will not disturb you again.', '/ʒə nə vu de.ʁɑ̃.ʒə.ʁe ply/', 'zhuh nuh voo day-rahⁿ-zhuh-RAY PLÜ', ['negation', 'pronom']),
  sent(119, 'Nous ne vendrons pas la maison.', 'We will not sell the house.', '/nu nə vɑ̃.dʁɔ̃ pa la mɛ.zɔ̃/', 'noo nuh vahⁿ-DROHⁿ pa la meh-ZOHⁿ', ['negation', 're'], FCVDR),
  sent(120, 'Ils ne nous attendront pas.', 'They will not wait for us.', '/il nə nu.za.tɑ̃.dʁɔ̃ pa/', 'eel nuh noo-za-tahⁿ-DROHⁿ PA', ['negation', 'pronom']),
  sent(121, 'Les petits mots gardent leur place : devant le verbe, après ne.', 'The little words keep their place: before the verb, after ne.', '/le pə.ti mo ɡaʁd lœʁ plas də.vɑ̃ lə vɛʁb a.pʁɛ nə/', 'lay puh-tee MOH gard luhr PLAS duh-vahⁿ luh VEHRB a-preh NUH', ['rule', 'pronom'], ['flashcard'],
    rule('Où se met le pronom dans « je te le rendrai » ?', 'Devant le verbe, dans le même ordre qu’au présent.')),
];

/* ── ACT 8 · LES MOTS DU FUTUR ──────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(122, 'Un marqueur situe le moment, il ne choisit pas le temps.', 'A time marker places the moment; it does not pick the tense.', '/œ̃ maʁ.kœʁ si.tɥ lə mɔ.mɑ̃ il nə ʃwa.zi pa lə tɑ̃/', 'uhⁿ mar-KUHR see-TÜ luh mo-MAHⁿ eel nuh shwa-ZEE pa luh TAHⁿ', ['rule', 'marqueur'], ['flashcard'],
    rule('Demain impose-t-il le futur simple ?', 'Non. Demain je pars, demain je vais partir et demain je partirai sont tous corrects.')),
  sent(123, 'Demain, je terminerai ce rapport.', 'Tomorrow I will finish this report.', '/də.mɛ̃ ʒə tɛʁ.mi.nə.ʁe sə ʁa.pɔʁ/', 'duh-MEHⁿ zhuh tehr-mee-nuh-RAY suh ra-POR', ['marqueur', 'simple'], FCVDR),
  sent(124, 'Après-demain, nous visiterons le nouvel appartement.', 'The day after tomorrow we will view the new flat.', '/a.pʁɛ də.mɛ̃ nu vi.zi.tə.ʁɔ̃ lə nu.vɛ.la.paʁ.tə.mɑ̃/', 'a-preh duh-MEHⁿ noo vee-zee-tuh-ROHⁿ luh noo-veh-la-par-tuh-MAHⁿ', ['marqueur', 'simple']),
  sent(125, 'La semaine prochaine, elle commencera son stage.', 'Next week she will start her placement.', '/la sə.mɛn pʁɔ.ʃɛn ɛl kɔ.mɑ̃s.ʁa sɔ̃ staʒ/', 'la suh-MENN pro-SHENN ehl ko-mahⁿs-RA sohⁿ STAZH', ['marqueur', 'simple'], FCVDR),
  sent(126, "Dans deux ans, j'habiterai peut-être au Québec.", 'In two years I will perhaps be living in Québec.', '/dɑ̃ dø.zɑ̃ ʒa.bi.tə.ʁe pø.tɛtʁ o ke.bɛk/', 'dahⁿ deu-ZAHⁿ zha-bee-tuh-RAY peu-TEHTR oh kay-BEHK', ['marqueur', 'simple']),
  sent(127, 'Un jour, tu comprendras pourquoi.', 'One day you will understand why.', '/œ̃ ʒuʁ ty kɔ̃.pʁɑ̃.dʁa puʁ.kwa/', 'uhⁿ ZHOOR tü kohⁿ-prahⁿ-DRA poor-KWA', ['marqueur', 're'], FCVDR),
  sent(128, 'Bientôt, tout le monde travaillera autrement.', 'Soon everybody will work differently.', '/bjɛ̃.to tu lə mɔ̃d tʁa.va.jə.ʁa o.tʁə.mɑ̃/', 'byehⁿ-TOH too luh MOHⁿD tra-va-yuh-RA oh-truh-MAHⁿ', ['marqueur', 'simple']),
  sent(129, 'Plus tard, on en reparlera calmement.', 'Later we will talk about it again calmly.', '/ply taʁ ɔ̃.nɑ̃ ʁə.paʁ.lə.ʁa kal.mə.mɑ̃/', 'plü TAR ohⁿ-nahⁿ ruh-par-luh-RA kal-muh-MAHⁿ', ['marqueur', 'simple']),
  sent(130, "D'ici là, nous préparerons les documents.", 'Between now and then we will get the papers ready.', '/di.si la nu pʁe.pa.ʁə.ʁɔ̃ le dɔ.ky.mɑ̃/', 'dee-see-LA noo pray-pa-ruh-ROHⁿ lay do-kü-MAHⁿ', ['marqueur', 'simple']),
  sent(131, "À l'avenir, la ville limitera les voitures.", 'In future the city will limit cars.', '/a lav.niʁ la vil li.mi.tə.ʁa le vwa.tyʁ/', 'a lav-NEER la VEEL lee-mee-tuh-RA lay vwa-TÜR', ['marqueur', 'simple']),
  sent(132, 'Demain, je vais rester à la maison.', 'Tomorrow I am going to stay home.', '/də.mɛ̃ ʒə vɛ ʁɛs.te a la mɛ.zɔ̃/', 'duh-MEHⁿ zhuh veh rehs-TAY a la meh-ZOHⁿ', ['marqueur', 'proche', 'contre']),
  sent(133, 'Le mois prochain, nous déménagerons à Bruxelles.', 'Next month we will move to Brussels.', '/lə mwa pʁɔ.ʃɛ̃ nu de.me.na.ʒə.ʁɔ̃ a bʁy.sɛl/', 'luh mwa pro-SHEHⁿ noo day-may-na-zhuh-ROHⁿ a brü-SEHL', ['marqueur', 'simple'], FCVDR),
  sent(134, "L'année prochaine, ils ouvriront une deuxième boutique.", 'Next year they will open a second shop.', '/la.ne pʁɔ.ʃɛn il.zu.vʁi.ʁɔ̃ yn dø.zjɛm bu.tik/', 'la-NAY pro-SHENN eel-zoo-vree-ROHⁿ ün deu-ZYEM boo-TEEK', ['marqueur', 'ir']),
  sent(135, 'Ce soir, on commande une pizza.', 'Tonight we are ordering a pizza.', '/sə swaʁ ɔ̃ kɔ.mɑ̃d yn pid.za/', 'suh SWAR ohⁿ ko-MAHⁿD ün peed-ZA', ['marqueur', 'present', 'contre']),
  sent(136, 'Trois façons de dire demain : le présent, le futur proche, le futur simple.', 'Three ways to say tomorrow: the present, the futur proche, the futur simple.', '/tʁwa fa.sɔ̃ də diʁ də.mɛ̃ lə pʁe.zɑ̃ lə fy.tyʁ pʁɔʃ lə fy.tyʁ sɛ̃pl/', 'trwa fa-SOHⁿ duh deer duh-MEHⁿ luh pray-ZAHⁿ luh fü-tür PROSH luh fü-tür SEHⁿPL', ['rule', 'marqueur'], ['flashcard'],
    rule('Combien de façons de parler de demain ?', 'Trois : on commande ce soir, on va commander, on commandera.')),
];

/* ── ACT 9 · ANNOTER UN PROJET ──────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(137, "L'année prochaine, Sofia et Malick quitteront Bruxelles.", 'Next year Sofia and Malick will leave Brussels.', '/la.ne pʁɔ.ʃɛn sɔ.fja e ma.lik kit.ʁɔ̃ bʁy.sɛl/', 'la-NAY pro-SHENN so-FYA ay ma-LEEK keet-ROHⁿ brü-SEHL', ['lecture', 'simple'], FCVDR),
  sent(138, "Ils déménageront à Québec au mois d'août.", 'They will move to Québec City in August.', '/il de.me.na.ʒə.ʁɔ̃ a ke.bɛk o mwa dut/', 'eel day-may-na-zhuh-ROHⁿ a kay-BEHK oh mwa DOOT', ['lecture', 'simple']),
  sent(139, 'Sofia travaille déjà pour une entreprise canadienne.', 'Sofia already works for a Canadian company.', '/sɔ.fja tʁa.vaj de.ʒa puʁ y.nɑ̃.tʁə.pʁiz ka.na.djɛn/', 'so-FYA tra-VAÏ day-ZHA poor ü-nahⁿ-truh-PREEZ ka-na-DYENN', ['lecture', 'present']),
  sent(140, 'Elle continuera le même travail depuis son nouveau bureau.', 'She will carry on with the same job from her new office.', '/ɛl kɔ̃.ti.ny.ʁa lə mɛm tʁa.vaj də.pɥi sɔ̃ nu.vo by.ʁo/', 'ehl kohⁿ-tee-nü-RA luh mem tra-VAÏ duh-pwee sohⁿ noo-voh bü-ROH', ['lecture', 'emuet'], FCVDR),
  sent(141, 'Malick cherchera un poste dans une école.', 'Malick will look for a post in a school.', '/ma.lik ʃɛʁ.ʃə.ʁa œ̃ pɔst dɑ̃.zy.ne.kɔl/', 'ma-LEEK shehr-shuh-RA uhⁿ POST dahⁿ-zü-nay-KOL', ['lecture', 'simple']),
  sent(142, 'Ils vont visiter trois quartiers avant de choisir.', 'They are going to look at three neighbourhoods before choosing.', '/il vɔ̃ vi.zi.te tʁwa kaʁ.tje a.vɑ̃ də ʃwa.ziʁ/', 'eel vohⁿ vee-zee-TAY trwa kar-TYAY a-vahⁿ duh shwa-ZEER', ['lecture', 'proche']),
  sent(143, "D'ici là, ils vendront la moitié de leurs meubles.", 'Between now and then they will sell half their furniture.', '/di.si la il vɑ̃.dʁɔ̃ la mwa.tje də lœʁ mœbl/', 'dee-see-LA eel vahⁿ-DROHⁿ la mwa-TYAY duh luhr MUHBL', ['lecture', 're'], FCVDR),
  sent(144, 'Ils garderont seulement les livres et la vaisselle.', 'They will keep only the books and the crockery.', '/il ɡaʁ.də.ʁɔ̃ sœl.mɑ̃ le livʁ e la vɛ.sɛl/', 'eel gar-duh-ROHⁿ suhl-MAHⁿ lay LEEVR ay la veh-SEHL', ['lecture', 'simple']),
  sent(145, 'Le déménagement coûtera assez cher.', 'The move will cost quite a lot.', '/lə de.me.naʒ.mɑ̃ ku.tə.ʁa a.se ʃɛʁ/', 'luh day-may-nazh-MAHⁿ koo-tuh-RA a-say SHEHR', ['lecture', 'simple']),
  sent(146, 'Ils paieront une partie en juin et le reste en juillet.', 'They will pay part in June and the rest in July.', '/il pɛ.ʁɔ̃ yn paʁ.ti ɑ̃ ʒɥɛ̃ e lə ʁɛst ɑ̃ ʒɥi.jɛ/', 'eel peh-ROHⁿ ün par-TEE ahⁿ ZHWEHⁿ ay luh REHST ahⁿ zhwee-YEH', ['lecture', 'radical'], FCVDR),
  sent(147, "Leur fille commencera l'école en septembre.", 'Their daughter will start school in September.', '/lœʁ fij kɔ.mɑ̃s.ʁa le.kɔl ɑ̃ sɛp.tɑ̃bʁ/', 'luhr FEEY ko-mahⁿs-RA lay-KOL ahⁿ sehp-TAHⁿBR', ['lecture', 'simple']),
  sent(148, 'Elle apprendra vite, disent ses parents.', 'She will learn fast, her parents say.', '/ɛ.la.pʁɑ̃.dʁa vit diz se pa.ʁɑ̃/', 'eh-la-prahⁿ-DRA VEET deez say pa-RAHⁿ', ['lecture', 're']),
  sent(149, 'Le premier hiver leur demandera du courage.', 'The first winter will take some courage.', '/lə pʁə.mje i.vɛʁ lœʁ də.mɑ̃.də.ʁa dy ku.ʁaʒ/', 'luh pruh-myay ee-VEHR luhr duh-mahⁿ-duh-RA dü koo-RAZH', ['lecture', 'simple']),
  sent(150, 'Un jour, ils raconteront cette aventure à leurs petits-enfants.', 'One day they will tell their grandchildren about this adventure.', '/œ̃ ʒuʁ il ʁa.kɔ̃.tə.ʁɔ̃ sɛ.ta.vɑ̃.tyʁ a lœʁ pə.ti.zɑ̃.fɑ̃/', 'uhⁿ ZHOOR eel ra-kohⁿ-tuh-ROHⁿ seh-ta-vahⁿ-TÜR a luhr puh-tee-zahⁿ-FAHⁿ', ['lecture', 'simple'], FCVDR),
  sent(151, "Pour l'instant, ils remplissent des formulaires.", 'For now they are filling in forms.', '/puʁ lɛ̃s.tɑ̃ il ʁɑ̃.plis de fɔʁ.my.lɛʁ/', 'poor lehⁿs-TAHⁿ eel rahⁿ-PLEES day for-mü-LEHR', ['lecture', 'present']),
  sent(152, 'Ils ne regretteront rien.', 'They will regret nothing.', '/il nə ʁə.ɡʁɛt.ʁɔ̃ ʁjɛ̃/', 'eel nuh ruh-greht-ROHⁿ RYEHⁿ', ['lecture', 'negation']),
  sent(153, "Tout commencera vraiment le jour de l'arrivée.", 'It will all really start on the day they arrive.', '/tu kɔ.mɑ̃s.ʁa vʁɛ.mɑ̃ lə ʒuʁ də la.ʁi.ve/', 'too ko-mahⁿs-RA vreh-MAHⁿ luh ZHOOR duh la-ree-VAY', ['lecture', 'simple']),
];

/* ── ACT 10 · ÉCRIRE SES PROJETS ────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(154, "Voici mon projet pour l'année prochaine.", 'Here is my plan for next year.', '/vwa.si mɔ̃ pʁɔ.ʒɛ puʁ la.ne pʁɔ.ʃɛn/', 'vwa-SEE mohⁿ pro-ZHEH poor la-NAY pro-SHENN', ['projet', 'ouverture']),
  sent(155, "D'abord, je terminerai ma formation en juin.", 'First, I will finish my training in June.', '/da.bɔʁ ʒə tɛʁ.mi.nə.ʁe ma fɔʁ.ma.sjɔ̃ ɑ̃ ʒɥɛ̃/', 'da-BOR zhuh tehr-mee-nuh-RAY ma for-ma-SYOHⁿ ahⁿ ZHWEHⁿ', ['projet', 'simple'], FCVDR),
  sent(156, 'Ensuite, je chercherai un travail à Montréal.', 'Then I will look for work in Montréal.', '/ɑ̃.sɥit ʒə ʃɛʁ.ʃə.ʁe œ̃ tʁa.vaj a mɔ̃.ʁe.al/', 'ahⁿ-SWEET zhuh shehr-shuh-RAY uhⁿ tra-VAÏ a mohⁿ-ray-AL', ['projet', 'simple']),
  sent(157, 'Je préparerai mon dossier pendant tout le mois de juillet.', 'I will get my file ready all through July.', '/ʒə pʁe.pa.ʁə.ʁe mɔ̃ do.sje pɑ̃.dɑ̃ tu lə mwa də ʒɥi.jɛ/', 'zhuh pray-pa-ruh-RAY mohⁿ do-SYAY pahⁿ-dahⁿ too luh mwa duh zhwee-YEH', ['projet', 'simple']),
  sent(158, 'Au mois de septembre, je déménagerai.', 'In September I will move.', '/o mwa də sɛp.tɑ̃bʁ ʒə de.me.na.ʒə.ʁe/', 'oh mwa duh sehp-TAHⁿBR zhuh day-may-na-zhuh-RAY', ['projet', 'simple'], FCVDR),
  sent(159, 'Je louerai un petit appartement près du métro.', 'I will rent a small flat near the metro.', '/ʒə lu.ʁe œ̃ pə.ti.ta.paʁ.tə.mɑ̃ pʁɛ dy me.tʁo/', 'zhuh loo-RAY uhⁿ puh-tee-ta-par-tuh-MAHⁿ preh dü may-TROH', ['projet', 'emuet']),
  sent(160, "Plus tard, j'achèterai peut-être un logement.", 'Later I will perhaps buy a place.', '/ply taʁ ʒa.ʃɛ.tə.ʁe pø.tɛtʁ œ̃ lɔʒ.mɑ̃/', 'plü TAR zha-sheh-tuh-RAY peu-TEHTR uhⁿ lozh-MAHⁿ', ['projet', 'radical'], FCVDR),
  sent(161, 'Je continuerai mes cours de français le soir.', 'I will carry on with my French classes in the evening.', '/ʒə kɔ̃.ti.ny.ʁe me kuʁ də fʁɑ̃.sɛ lə swaʁ/', 'zhuh kohⁿ-tee-nü-RAY may KOOR duh frahⁿ-SEH luh SWAR', ['projet', 'emuet']),
  sent(162, 'Dans deux ans, je passerai un examen officiel.', 'In two years I will sit an official exam.', '/dɑ̃ dø.zɑ̃ ʒə pa.sə.ʁe œ̃.nɛɡ.za.mɛ̃ ɔ.fi.sjɛl/', 'dahⁿ deu-ZAHⁿ zhuh pa-suh-RAY uhⁿ-neg-za-MEHⁿ o-fee-SYEHL', ['projet', 'simple']),
  sent(163, "Je ne changerai pas d'avis.", 'I will not change my mind.', '/ʒə nə ʃɑ̃.ʒə.ʁe pa da.vi/', 'zhuh nuh shahⁿ-zhuh-RAY pa da-VEE', ['projet', 'negation'], FCVDR),
  sent(164, "Finalement, j'inviterai ma famille à venir me voir.", 'In the end I will invite my family over to see me.', '/fi.nal.mɑ̃ ʒɛ̃.vi.tə.ʁe ma fa.mij a və.niʁ mə vwaʁ/', 'fee-nal-MAHⁿ zhehⁿ-vee-tuh-RAY ma fa-MEEY a vuh-neer muh VWAR', ['projet', 'simple']),
  sent(165, 'Ce projet me demandera du travail, mais il en vaut la peine.', 'This plan will take work, but it is worth it.', '/sə pʁɔ.ʒɛ mə də.mɑ̃.də.ʁa dy tʁa.vaj mɛ i.lɑ̃ vo la pɛn/', 'suh pro-ZHEH muh duh-mahⁿ-duh-RA dü tra-VAÏ meh ee-lahⁿ voh la PENN', ['projet', 'simple']),
  sent(166, 'Le radical du futur finit toujours par un r.', 'The future stem always ends in an r.', '/lə ʁa.di.kal dy fy.tyʁ fi.ni tu.ʒuʁ paʁ œ̃.nɛʁ/', 'luh ra-dee-KAL dü fü-TÜR fee-nee too-zhoor par uhⁿ-NEHR', ['rule', 'radical'], ['flashcard'],
    rule('Comment reconnaître un radical de futur ?', 'À son r final : parler-, finir-, prendr-, achèter-.')),
  sent(167, 'Le futur proche parle de maintenant, le futur simple parle du plan.', 'The futur proche talks about now; the futur simple talks about the plan.', '/lə fy.tyʁ pʁɔʃ paʁl də mɛ̃t.nɑ̃ lə fy.tyʁ sɛ̃pl paʁl dy plɑ̃/', 'luh fü-tür PROSH parl duh mehⁿt-NAHⁿ luh fü-tür SEHⁿPL parl dü PLAHⁿ', ['rule', 'proche'], ['flashcard'],
    rule('Quand choisir le futur simple plutôt que le futur proche ?', 'Quand tu annonces, tu écris ou tu t’engages, sans lien avec l’instant présent.')),
  sent(168, "Je vais t'expliquer tout ça au téléphone.", 'I am going to explain it all to you on the phone.', '/ʒə vɛ tɛks.pli.ke tu sa o te.le.fɔn/', 'zhuh veh tehks-plee-KAY too SA oh tay-lay-FON', ['projet', 'proche']),
  sent(169, 'On se reparlera très vite.', 'We will talk again very soon.', '/ɔ̃ sə ʁə.paʁ.lə.ʁa tʁɛ vit/', 'ohⁿ suh ruh-par-luh-RA treh VEET', ['projet', 'simple']),
  sent(170, 'Rien ne changera avant le printemps.', 'Nothing will change before the spring.', '/ʁjɛ̃ nə ʃɑ̃.ʒə.ʁa a.vɑ̃ lə pʁɛ̃.tɑ̃/', 'RYEHⁿ nuh shahⁿ-zhuh-RA a-vahⁿ luh prehⁿ-TAHⁿ', ['projet', 'negation'], FCVDR),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS,
  ACT6_ROWS, ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

export const DICTEE_IDS = ALL_ROWS.filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE LONG READING (act 9) AND ITS ANNOTATION KEY
 *
 *  164 words. The learner marks every verb: futur simple, futur proche or
 *  présent. The three lists below are what the annotation drill and the quiz
 *  are checked against, so the reading and the test cannot drift apart.
 * ══════════════════════════════════════════════════════════════════════════ */

export const READING_TEXT =
  "L'année prochaine, Sofia et Malick quitteront Bruxelles. Ils déménageront à Québec au mois d'août, avec leur fille de six ans. Sofia travaille déjà pour une entreprise canadienne, et elle continuera le même travail depuis son nouveau bureau. Malick cherchera un poste dans une école ; il envoie des candidatures depuis janvier. Ils vont visiter trois quartiers avant de choisir, parce qu'ils veulent une école tout près. D'ici là, ils vendront la moitié de leurs meubles et ils garderont seulement les livres et la vaisselle. Le déménagement coûtera assez cher : ils paieront une partie en juin et le reste en juillet. Leur fille commencera l'école en septembre et elle apprendra vite, disent ses parents. Le premier hiver leur demandera du courage, mais ils ne regretteront rien. Pour l'instant, ils remplissent des formulaires et ils comptent les semaines. Tout commencera vraiment le jour de l'arrivée.";

export const READING_FUTUR_SIMPLE = [
  'quitteront', 'déménageront', 'continuera', 'cherchera', 'vendront', 'garderont',
  'coûtera', 'paieront', 'commencera', 'apprendra', 'demandera', 'regretteront',
  'commencera vraiment',
] as const;

export const READING_FUTUR_PROCHE = ['vont visiter'] as const;

export const READING_PRESENT = [
  'travaille', 'envoie', 'veulent', 'remplissent', 'comptent', 'disent',
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. THE MODEL TEXT (act 10), the shape the task asks for
 * ══════════════════════════════════════════════════════════════════════════ */

export const MODEL_TEXT =
  "Voici mon projet pour l'année prochaine. D'abord, je terminerai ma formation en juin. Ensuite, je chercherai un travail à Montréal, parce que ma cousine y habite déjà. Je préparerai mon dossier pendant tout le mois de juillet : le CV, les lettres, les diplômes traduits. Au mois de septembre, je déménagerai. Je louerai un petit appartement près du métro, pas trop grand, parce que je voyagerai souvent. Je continuerai mes cours de français le soir, deux fois par semaine. Dans deux ans, je passerai un examen officiel. Je ne changerai pas d'avis : j'y pense depuis trop longtemps. Finalement, j'inviterai ma famille à venir me voir, et on visitera la ville ensemble. Ce projet me demandera du travail, mais il en vaut la peine.";
