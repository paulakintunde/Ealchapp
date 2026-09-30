// b2.11.l1 « Les pronoms d'insistance »: the authored corpus, the imports and
// the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as
// b2.07 futur antérieur), under the B2 rules of B2-BUILD-LOG.md.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 11 of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   THE STRESSED PRONOUN AT WORK: CONTRAST, REINFORCEMENT, DISAMBIGUATION.
//   Lesson 35 in A2 taught the eight forms and where they go; this lesson
//   teaches what they DO when several people speak or are spoken about.
//
//     le contraste      two people, two pronouns: « Lui, il adore ; moi, je
//                       déteste », after a noun (« Mon frère, lui, … ») and
//                       at the end (« Je n'en sais rien, moi »)
//     la reprise        detachment to the left and right in speech (« Moi,
//                       ce film, je l'ai adoré », « Il est fou, lui ») with
//                       the resuming pronoun (le, la, les, lui, y, en, ça),
//                       against the neutral written order
//     seul devant       the stressed pronoun alone as subject when
//                       contrasted or qualified (« Lui seul le savait »,
//                       « Eux ont refusé, nous avons accepté », « Lui aussi
//                       a voté contre »), moi and toi only with seul, the
//                       verb in the pronoun's person (« Moi seul peux »)
//     l'accord          compound subjects: « Paul et moi (nous) sommes »,
//                       « toi et lui, vous êtes », ni toi ni moi, the order
//                       « Paul et moi », and the person that wins
//     le relief         c'est … qui / c'est … que, with the verb in the
//                       pronoun's person (« c'est moi qui ai », « c'est nous
//                       qui sommes », « c'est vous qui l'avez dit »), the
//                       error « c'est moi qui a », ce sont eux / c'est eux
//     le renfort        -même(s) in agreement, aussi, non plus, seul, tous,
//                       deux, trois (« nous-mêmes », « eux aussi », « vous
//                       deux », « à nous deux »)
//     l'ambiguïté       il continues, lui switches (« Marc a vu Paul ; lui
//                       ne l'a pas vu »), and lui against le and against à
//                       lui (« je lui parle », « je pense à lui »)
//     soi               chacun pour soi, on est bien chez soi, cela va de
//                       soi, en soi, against lui and elle for a named person
//     à moi             « c'est à moi de décider », « un ami à moi », « son
//                       livre à elle » (possession and insistence)
//     le registre       which of these are neutral writing (lui seul, c'est
//                       moi qui, ce sont eux qui, quant à moi, pour ma part)
//                       and which belong to speech (moi je, the right
//                       detachment, nous on, c'est eux qui)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 35 in A2   the eight forms, after a little word, c'est moi,
//                       moi aussi, Paul et moi nous (reframe quoted, rows
//                       .401 .415 .418 .419 .422 .423 .427 .428 reused)
//     lesson 34 in A2   « C'est à moi » as possession (rows .388 .389)
//     lesson 22 in A2   lui before the verb (rows .238 « Je lui parle. »,
//                       .261 « Je parle avec lui. »)
//     lesson 11 in B1   qui and que; « C'est moi qui ai rempli le
//                       formulaire » (rows 1022, 1023, reframe quoted)
//     lesson 22 in B1   c'est … qui as mise en relief; c'est ou il est
//                       (rows 1141, 1142, 1149, 1150, reframe quoted)
//     lesson 23 in B1   tout (« Nous tous, on a porté le canapé »)
//     lesson 24 in B1   moi-même to soi-même (rows 1069, 1071, 1073, 1074,
//                       1078, 1080, 1081, reframe quoted)
//     lesson 25 in B1   register (reframe quoted in act 11)
//     lesson 17 in B1   the order of the little words (lui before the verb)
//     lesson 2 in B2    « Moi, je n'aurais pas accepté » (recycling round)
//     lesson 6 in B2    subjunctive or indicative (recycling round)
//     lesson 23 in B2   argumentation (reframe quoted in the closing act)
//     lesson 25 in B2   « Moi, je vois les choses autrement » (row reused)
//   FORWARD: lesson 12 in B2 (le gérondif, same publish), named in the
//   roundup.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `pronoms-essentiels` (fondations, a1-b2), sub-theme « les pronoms
//     d'insistance », already set in Postgres (orchestrator). Read through
//     `seedPlusPacks()` on 2026-09-29 (20,683 items): a1 rows up to .126, a2
//     up to .436 (a2.36's block .400-.436), b1 up to .1797, b2 rows only at
//     low numbers (9 rows, highest .012). NOTHING at .1800-.1999 at any
//     level. Postgres was NOT probed by this author; the block was assigned
//     by the orchestrator's brief (1000-1799 are B1 rows in this theme).
//
//  2. ID BLOCK: `.1800`-`.1999`, assigned by the brief. Authored:
//     `.1800`-`.1990` with gaps between act blocks (see the act banners).
//     Nothing outside the block.
//
//  3. EVERY ROW IS A SENTENCE (plain, gapfill card or rule card), so the
//     flashcard hub's headword rule (theme + non-sentence headword) cannot
//     clash with any published row. « soi-même » stays lesson 24 in B1's
//     phrase row (reused, never twinned). Every `fr` was checked against the
//     seed plus packs and every data corpus for an exact twin (§A.8).
//
//  4. REUSED ROWS. A2 is live, B1 is live (v76), B2 lessons 1 to 8 and 22 to
//     26 are live (v77, v78), a2.36 is live (v81), so `src()` resolves them.
//     Reused BY ID, never twinned (§F). Not reused: `fr.b2.bien-etre.001`
//     « Prendre soin de soi… » (its stored IPA carries U+203F ties, and it is
//     dictation-only); `fr.a2.pronoms-essentiels.048` « C'est à toi de jouer
//     maintenant » (not in the seed cut, so `src()` cannot resolve it).
//
//  5. RESPELLINGS. House style: stressed syllable in caps, ü, nasal closed
//     with ⁿ. moi MWA, toi TWA, lui LWEE, eux EU (the /ø/ of b2.07's
//     zheu-DEE), seul SUHL, soi SWA, même MEM (the seed's spelling). No
//     U+203F anywhere, IPA included. Spelled for the nasal checker rather
//     than the ear: « personne » pehr-SONN. The name Karim (ka-REEM) is
//     correct for the ear but trips `hasPlainNasalFor`, so it never appears
//     inside a SECTION respelling (bubbles, choices, break rows); it lives
//     only in corpus rows, which the density walk does not read.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does. The one `scenario` uses ’ only and embeds no corpus row.
//
//  7. SPOKEN FORMS ARE MARKED. Rows that belong to speech carry register
//     `familier` (« Nous, on reste », « C'est eux qui ont gagné », « Il
//     exagère, lui », « Toi et moi, on s'est toujours compris »). Rows that
//     belong to careful writing carry `soutenu` (« Quant à moi », « Pour ma
//     part », « quant à eux »). Everything else is `courant`.
//
//  8. TWIN CHECK (2026-09-29): 0 exact `fr` twins against seedPlusPacks and
//     against every `*-corpus.ts` under data/, data/b1 and data/b2 that
//     exports ALL_ROWS (the parallel b2.09, b2.10, b2.12 files included as
//     they stood that day).
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
  id: 'b2.11',
  seq: 11,
  title: 'Emphatic Pronouns',
  sub: "Les pronoms d'insistance",
  canDo: "Can use the stressed pronouns to set one person against another, to detach and resume a word in speech, to stand alone as a contrasted subject, to agree the verb after compound subjects and after c'est … qui, to reinforce with même, aussi, seul, tous and deux, to lift an ambiguity between two people, to choose soi or lui, and to say whose turn or whose thing it is, in the register the situation needs",
  prereqUnitIds: ['a2.36', 'b1.22', 'b1.24'],
} as const;

export const LESSON_ID = 'b2.11.l1';
export const THEME = 'pronoms-essentiels';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1800, 1999]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan (a
 *  B1 unit id's number IS its trail position; B2 is numbered in trail order
 *  in B2-BUILD-LOG.md). A-level units resolve through `unitRef`, which reads
 *  the shipped seq: a2.36 is « lesson 35 in A2 », the form the app's
 *  unit-labels test checks.
 * ══════════════════════════════════════════════════════════════════════════ */

export const TONIQUES_UNIT = 'a2.36';
export const POSSESSIFS_UNIT = 'a2.34';
export const INDIRECT_UNIT = 'a2.24';
export const QUI_QUE_UNIT = 'b1.11';
export const ORDRE_UNIT = 'b1.17';
export const CEST_UNIT = 'b1.22';
export const TOUT_UNIT = 'b1.23';
export const MEME_UNIT = 'b1.24';
export const REGISTRES_UNIT = 'b1.25';
export const COND_PASSE_UNIT = 'b2.02';
export const SUBJ_IND_UNIT = 'b2.06';
export const ARGUMENTATION_UNIT = 'b2.23';
export const ECOUTE_UNIT = 'b2.25';
export const GERONDIF_UNIT = 'b2.12';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const TONIQUES_REF = refFr(TONIQUES_UNIT);         // lesson 35 in A2
export const POSSESSIFS_REF = refFr(POSSESSIFS_UNIT);     // lesson 34 in A2
export const INDIRECT_REF = refFr(INDIRECT_UNIT);         // lesson 22 in A2
export const QUI_QUE_REF = refFr(QUI_QUE_UNIT);
export const ORDRE_REF = refFr(ORDRE_UNIT);
export const CEST_REF = refFr(CEST_UNIT);
export const TOUT_REF = refFr(TOUT_UNIT);
export const MEME_REF = refFr(MEME_UNIT);
export const REGISTRES_REF = refFr(REGISTRES_UNIT);
export const COND_PASSE_REF = refFr(COND_PASSE_UNIT);
export const SUBJ_IND_REF = refFr(SUBJ_IND_UNIT);
export const ARGUMENTATION_REF = refFr(ARGUMENTATION_UNIT);
export const ECOUTE_REF = refFr(ECOUTE_UNIT);
export const GERONDIF_REF = refFr(GERONDIF_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 *
 *  a2.36's reframe is English (A2 is taught in English), so every screen that
 *  shows it follows it with the French rendering below.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as A236_REFRAME } from '../pronoms-toniques-corpus.ts';
export const A236_REFRAME_FR = 'Pas de verbe juste après ? Alors c’est moi, pas je.';
export { REFRAME as B111_REFRAME, REFRAME_EN as B111_REFRAME_EN } from '../b1/qui-que-corpus.ts';
export { REFRAME as B122_REFRAME, REFRAME_EN as B122_REFRAME_EN } from '../b1/cest-il-est-corpus.ts';
export { REFRAME as B123_REFRAME, REFRAME_EN as B123_REFRAME_EN } from '../b1/tout-corpus.ts';
export { REFRAME as B124_REFRAME, REFRAME_EN as B124_REFRAME_EN } from '../b1/meme-corpus.ts';
export { REFRAME as B125_REFRAME, REFRAME_EN as B125_REFRAME_EN } from '../b1/registres-corpus.ts';
export { REFRAME as B117_REFRAME, REFRAME_EN as B117_REFRAME_EN } from '../b1/ordre-pronoms-corpus.ts';
export { REFRAME as B206_REFRAME, REFRAME_EN as B206_REFRAME_EN } from './subjonctif-indicatif-corpus.ts';
export { REFRAME as B223_REFRAME, REFRAME_EN as B223_REFRAME_EN } from './argumentation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE PROJECTEUR. A stage with several people on it: the stressed pronoun is
 *  the spotlight that picks one of them out. In a debate it sets one voice
 *  against another (lui, il adore ; moi, je déteste); in a story it tells the
 *  reader which of two men is now acting (lui ne l'a pas vu); after c'est it
 *  names the one who did it (c'est moi qui ai); with seul, même, aussi, deux
 *  it widens or narrows the circle of light; with à it says whose turn or
 *  whose thing it is. Soi is the spotlight on nobody in particular: anyone
 *  at all (chacun pour soi). Cela va de soi is frozen, and said so.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Le pronom tonique met une personne sous le projecteur.';
export const REFRAME_EN = 'The stressed pronoun puts one person in the spotlight.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Le pronom tonique sert à insister.',
    why: 'True and useless: it does not say on WHAT. Act 8 (lui switches the reader to the other man) and act 10 (c’est à moi de décider) are not insistence on a word, they are a choice between people. A learner told « insist » sprinkles moi je everywhere, the error act 11 corrects.',
  },
  {
    text: 'Moi, je, c’est le I myself de l’anglais.',
    why: 'A calque, and a false one: I myself is moi-même (act 7), and « Moi, je préfère le train » means « as for me », not « I myself ». A translation rule also drags the learner into the English order and away from the resuming pronoun of act 3.',
  },
  {
    text: 'Le pronom tonique remplace le sujet.',
    why: 'False in most of the lesson: in « Moi, je pars » and « Mon frère, lui, n’a rien dit » it doubles a subject that is still there. It replaces it only in act 4, and only under conditions (contrast, seul, aussi). Taught as a rule, it produces « Moi suis d’accord ».',
  },
  {
    text: 'Deux personnes, deux pronoms toniques.',
    why: 'The heart of acts 1, 2 and 8, and it is kept as the act 2 title idea. It says nothing about c’est moi qui (act 6), soi (act 9) or c’est à moi de (act 10), where there is one person and no pair.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-29, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const PE2 = (n: number) => `fr.a2.pronoms-essentiels.${String(n).padStart(3, '0')}`;

export const IMPORTED = {
  act1: [
    'fr.b2.strategies-de-comprehension.1645',  // Moi, je vois les choses autrement.  (lesson 25 in B2)
  ],
  act2: [
    PE2(422),                                  // Moi, je prends le train. Lui, il prend la voiture.  (lesson 35 in A2)
    PE2(423),                                  // Moi, je suis prêt.  (lesson 35 in A2)
    PE2(46),                                   // Moi, je préfère le thé au café.  (flashcard, sentence, review: no voiceflash)
    PE2(51),                                   // Lui, il arrive toujours en avance.  (no voiceflash)
    PE2(63),                                   // Eux, ils habitent à la campagne.  (no voiceflash)
    'fr.b1.negation-et-restriction.1163',      // Moi, si.  (lesson 20 in B1)
  ],
  act3: [] as string[],
  act4: [] as string[],
  act5: [
    PE2(427),                                  // Paul et moi, nous partons demain.  (lesson 35 in A2)
    PE2(428),                                  // Toi et lui, vous restez ici.  (lesson 35 in A2)
  ],
  act6: [
    PE2(401),                                  // C'est moi.  (lesson 35 in A2)
    PE2(415),                                  // C'est lui.
    PE2(418),                                  // Ce sont eux.  (written)
    PE2(419),                                  // C'est eux.  (said)
    'fr.b1.pronoms-essentiels.1022',           // C'est moi qui ai rempli le formulaire.  (lesson 11 in B1)
    'fr.b1.pronoms-essentiels.1023',           // C'est toi qui as trouvé le sac.  (lesson 11 in B1)
    'fr.b1.description-personnes-objets.1141', // Ce n'est pas moi qui ai cassé l'imprimante.  (lesson 22 in B1)
    'fr.b1.description-personnes-objets.1142', // C'est lui qui organise la fête.
    'fr.b1.description-personnes-objets.1149', // C'est toi qui décides.
    'fr.b1.description-personnes-objets.1150', // C'est nous qui payons.
  ],
  act7: [
    'fr.b1.comparaisons.1069',                 // Nous avons peint la cuisine nous-mêmes.  (lesson 24 in B1)
    'fr.b1.comparaisons.1071',                 // Ils ont tout organisé eux-mêmes.
    'fr.b1.comparaisons.1078',                 // C'est le directeur lui-même qui m'a appelé.
    'fr.b1.comparaisons.1080',                 // C'est moi-même qui ai signé le bail.
    'fr.b1.expressions-de-quantite.1167',      // Nous tous, on a porté le canapé.  (lesson 23 in B1)
  ],
  act8: [
    PE2(238),                                  // Je lui parle.  (lesson 22 in A2)
    PE2(261),                                  // Je parle avec lui.  (lesson 22 in A2)
  ],
  act9: [
    'fr.b1.comparaisons.1073',                 // On n'est jamais si bien servi que par soi-même.  (lesson 24 in B1)
    'fr.b1.comparaisons.1074',                 // On doit parfois se défendre soi-même.
    'fr.b1.comparaisons.1081',                 // soi-même  (phrase)
    'fr.b2.opinions-et-avis.1625',             // La question n'est pas de savoir si elle est bonne en soi, mais pour qui.  (lesson 23 in B2)
  ],
  act10: [
    PE2(388),                                  // C'est à moi.  (lesson 34 in A2)
    PE2(389),                                  // C'est à toi.
  ],
  act11: [
    'fr.b2.conseils-et-suggestions.1307',      // Moi, je n'aurais pas accepté.  (lesson 2 in B2)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. None here:
 *  every reused row carries flashcard. */
export const NOT_DECK_ABLE: readonly string[] = [];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  PE2(46), PE2(51), PE2(63),                   // flashcard, sentence, review
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `gap` a gapfill card whose front gaps the pronoun or
 *  the verb and names the cue; `rule` a grammar card. Every row carries fr,
 *  en, ipa and respell. Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const FAM: Register = 'familier';
const SOU: Register = 'soutenu';
const GP = ['pronoms-toniques-insistance'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR,
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LUI ADORE, MOI JE DÉTESTE (.1800-.1812) ──────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1800, "Lui, il a adoré ; moi, j'ai trouvé ça long.", 'He loved it; I found it long.',
    '/lɥi i.la a.dɔ.ʁe mwa ʒe tʁu.ve sa lɔ̃/', 'LWEE | ee-la a-do-RAY | MWA | zhay troo-vay sa LOHⁿ', ['scene', 'contraste'], FCVDR),
  sent(1801, "Il a adoré, j'ai trouvé ça long.", 'He loved it, I found it long.',
    '/i.la a.dɔ.ʁe ʒe tʁu.ve sa lɔ̃/', 'ee-la a-do-RAY | zhay troo-vay sa LOHⁿ', ['scene', 'plat']),
  sent(1802, 'Eux ont applaudi pendant cinq minutes.', 'They applauded for five minutes.',
    '/ø.zɔ̃ a.plo.di pɑ̃.dɑ̃ sɛ̃k mi.nyt/', 'eu-ZOHⁿ a-ploh-DEE | pahⁿ-dahⁿ sehⁿk mee-NÜT', ['lecture', 'seul-devant']),
  sent(1803, "Moi, ce film, je ne l'ai pas compris.", 'Me, I did not understand this film.',
    '/mwa sə film ʒə nə le pa kɔ̃.pʁi/', 'MWA | suh FEELM | zhuh nuh lay pa kohⁿ-PREE', ['lecture', 'reprise']),
  sent(1804, "C'est elle qui a choisi le film.", 'She is the one who chose the film.',
    '/sɛ.tɛl ki a ʃwa.zi lə film/', 'seh-TEL | kee a shwa-zee luh FEELM', ['lecture', 'relief']),
  sent(1805, 'Lui seul a défendu la fin.', 'He alone defended the ending.',
    '/lɥi sœl a de.fɑ̃.dy la fɛ̃/', 'lwee SUHL | a day-fahⁿ-dü la FEHⁿ', ['lecture', 'seul-devant'], FCVDR),
  sent(1806, 'Les autres, eux, sont sortis déçus.', 'The others, for their part, came out disappointed.',
    '/le.zotʁ ø sɔ̃ sɔʁ.ti de.sy/', 'lay-ZOHTR | EU | sohⁿ sor-tee day-SÜ', ['lecture', 'contraste']),
  sent(1807, 'Et toi, tu l\'as vu, ce film ?', 'And you, have you seen this film?',
    '/e twa ty la vy sə film/', 'ay TWA | tü la VÜ | suh FEELM', ['usage', 'contraste']),
  rule(1808, REFRAME, REFRAME_EN,
    '/lə pʁɔ.nɔ̃ tɔ.nik mɛ.tyn pɛʁ.sɔn su lə pʁɔ.ʒɛk.tœʁ/',
    'luh pro-nohⁿ to-NEEK | meh-tün pehr-SONN | soo luh pro-zhek-TUHR',
    'À quoi sert le pronom tonique quand plusieurs personnes parlent ?',
    "À mettre une personne sous le projecteur : l'opposer aux autres, la désigner, lever un doute sur qui fait quoi.",
    ['reframe']),
  sent(1809, 'Julie, elle, a trouvé la musique magnifique.', 'Julie, for her part, found the music magnificent.',
    '/ʒy.li ɛl a tʁu.ve la my.zik ma.ɲi.fik/', 'zhü-LEE | EL | a troo-vay la mü-zeek ma-nyee-FEEK', ['lecture', 'contraste']),
  sent(1810, "Moi, j'ai préféré le livre.", 'Me, I preferred the book.',
    '/mwa ʒe pʁe.fe.ʁe lə livʁ/', 'MWA | zhay pray-fay-ray luh LEEVR', ['lecture', 'contraste'], FCVDR),
  sent(1811, 'Lui, il ne lit jamais les critiques.', 'He never reads the reviews.',
    '/lɥi il nə li ʒa.mɛ le kʁi.tik/', 'LWEE | eel nuh lee zha-meh lay kree-TEEK', ['usage', 'contraste']),
  sent(1812, 'Nous, nous avons voté pour la comédie.', 'We voted for the comedy.',
    '/nu nu.za.vɔ̃ vɔ.te puʁ la kɔ.me.di/', 'NOO | noo-za-vohⁿ vo-tay poor la ko-may-DEE', ['usage', 'contraste']),
];

/* ── ACT 2 · DEUX CAMPS, DEUX PRONOMS (.1814-.1830) ───────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1814, 'Toi, tu restes ; moi, je pars.', 'You are staying; I am leaving.',
    '/twa ty ʁɛst mwa ʒə paʁ/', 'TWA | tü REST | MWA | zhuh PAR', ['contraste', 'tete'], FCVDR),
  sent(1815, 'Elle, elle vote pour ; lui, il vote contre.', 'She votes for; he votes against.',
    '/ɛl ɛl vɔt puʁ lɥi il vɔt kɔ̃tʁ/', 'EL | el vot POOR | LWEE | eel vot KOHⁿTR', ['contraste', 'tete']),
  sent(1816, 'Nous, on reste ; vous, vous partez.', 'We are staying; you are leaving.',
    '/nu ɔ̃ ʁɛst vu vu paʁ.te/', 'NOO | ohⁿ REST | VOO | voo par-TAY', ['contraste', 'oral'], FCVR, { register: FAM }),
  sent(1817, 'Eux, ils veulent un jardin ; elles, elles préfèrent un parking.', 'They (the men) want a garden; they (the women) prefer a car park.',
    '/ø il vœl œ̃ ʒaʁ.dɛ̃ ɛl ɛl pʁe.fɛʁ œ̃ paʁ.kiŋ/', 'EU | eel vuhl uhⁿ zhar-DEHⁿ | EL | el pray-fehr uhⁿ par-KEENG', ['contraste', 'tete']),
  sent(1818, "Mon frère, lui, n'a rien dit.", 'My brother, for his part, said nothing.',
    '/mɔ̃ fʁɛʁ lɥi na ʁjɛ̃ di/', 'mohⁿ FREHR | LWEE | na ryehⁿ DEE', ['contraste', 'apres-nom'], FCVDR),
  sent(1819, "Les voisins, eux, sont d'accord.", 'The neighbours, for their part, agree.',
    '/le vwa.zɛ̃ ø sɔ̃ da.kɔʁ/', 'lay vwa-ZEHⁿ | EU | sohⁿ da-KOR', ['contraste', 'apres-nom']),
  sent(1820, "Lui, il est d'accord ; moi, non.", 'He agrees; I do not.',
    '/lɥi i.lɛ da.kɔʁ mwa nɔ̃/', 'LWEE | ee-leh da-KOR | MWA | NOHⁿ', ['contraste', 'tete']),
  sent(1821, 'Vous, vous avez le temps ; nous, pas du tout.', 'You have the time; we do not at all.',
    '/vu vu.za.ve lə tɑ̃ nu pa dy tu/', 'VOO | voo-za-vay luh TAHⁿ | NOO | pa dü TOO', ['contraste', 'tete']),
  sent(1822, 'Toi, tu as toujours une excuse.', 'You always have an excuse.',
    '/twa ty a tu.ʒuʁ yn ɛk.skyz/', 'TWA | tü a too-zhoor ün eks-KÜZ', ['contraste', 'tete']),
  gap(1823, "Moi, je prends le métro ; lui, il prend son vélo.", 'I take the metro; he takes his bike.',
    '/mwa ʒə pʁɑ̃ lə me.tʁo lɥi il pʁɑ̃ sɔ̃ ve.lo/', 'MWA | zhuh prahⁿ luh may-TROH | LWEE | eel prahⁿ sohⁿ vay-LOH',
    '___, je prends le métro ; lui, il prend son vélo. (la personne qui parle)',
    "Moi s'oppose à lui : deux personnes, deux pronoms toniques. EN: moi against lui.",
    ['contraste', 'tete']),
  gap(1824, 'Ma sœur, elle, adore le ski.', 'My sister, for her part, loves skiing.',
    '/ma sœʁ ɛl a.dɔʁ lə ski/', 'ma SUHR | EL | a-dor luh SKEE',
    'Ma sœur, ___, adore le ski. (pour l\'opposer au reste de la famille)',
    "Après un nom sujet, le pronom tonique se met entre deux virgules. EN: after a subject noun, between commas.",
    ['contraste', 'apres-nom']),
  rule(1825, 'Le pronom tonique se place en tête, après le nom sujet ou en fin de phrase.', 'The stressed pronoun goes first, after the subject noun, or at the end of the sentence.',
    '/lə pʁɔ.nɔ̃ tɔ.nik sə plas ɑ̃ tɛt a.pʁɛ lə nɔ̃ sy.ʒɛ u ɑ̃ fɛ̃ də fʁaz/',
    'luh pro-nohⁿ to-NEEK | suh plass ahⁿ TET | a-preh luh nohⁿ sü-ZHEH | oo ahⁿ fehⁿ duh FRAHZ',
    'Où se place le pronom tonique de contraste ?',
    "En tête (moi, je pars), juste après un nom sujet (mon frère, lui, n'a rien dit) ou en fin de phrase (je n'en sais rien, moi). Le pronom sujet reste devant le verbe.",
    ['place']),
  sent(1826, 'Julie et Marc ? Elle, elle vient ; lui, il est malade.', 'Julie and Marc? She is coming; he is ill.',
    '/ʒy.li e maʁk ɛl ɛl vjɛ̃ lɥi i.lɛ ma.lad/', 'zhü-lee ay MARK | EL | el VYEHⁿ | LWEE | ee-leh ma-LAD', ['contraste', 'tete']),
  sent(1827, "Moi aussi, j'ai voté contre.", 'I voted against too.',
    '/mwa o.si ʒe vɔ.te kɔ̃tʁ/', 'mwa oh-SEE | zhay vo-tay KOHⁿTR', ['contraste', 'aussi']),
  sent(1828, "Je n'en sais rien, moi.", 'I have no idea, myself.',
    '/ʒə nɑ̃ sɛ ʁjɛ̃ mwa/', 'zhuh nahⁿ seh RYEHⁿ | MWA', ['contraste', 'fin'], FCVDR),
  sent(1829, 'Vous, vous êtes de quel avis ?', 'And you, what is your view?',
    '/vu vu.zɛt də kɛ.la.vi/', 'VOO | voo-zet duh keh-la-VEE', ['contraste', 'tete']),
  sent(1830, 'Elles, elles ont gagné ; nous, nous avons perdu.', 'They won; we lost.',
    '/ɛl ɛl.zɔ̃ ɡa.ɲe nu nu.za.vɔ̃ pɛʁ.dy/', 'EL | el-zohⁿ ga-NYAY | NOO | noo-za-vohⁿ pehr-DÜ', ['contraste', 'tete']),
];

/* ── ACT 3 · LA REPRISE (.1832-.1847) ─────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1832, "Moi, ce film, je l'ai adoré.", 'Me, I loved that film.',
    '/mwa sə film ʒə le a.dɔ.ʁe/', 'MWA | suh FEELM | zhuh lay a-do-RAY', ['reprise', 'oral'], FCVDR, { register: FAM }),
  sent(1833, "J'ai adoré ce film.", 'I loved that film.',
    '/ʒe a.dɔ.ʁe sə film/', 'zhay a-do-ray suh FEELM', ['reprise', 'ecrit']),
  sent(1834, "Ce livre, je l'ai lu en une nuit.", 'That book, I read it in one night.',
    '/sə livʁ ʒə le ly ɑ̃.nyn nɥi/', 'suh LEEVR | zhuh lay lü ahⁿ-nün NWEE', ['reprise', 'gauche'], FCVDR),
  sent(1835, "Je l'ai lu en une nuit, ce livre.", 'I read it in one night, that book.',
    '/ʒə le ly ɑ̃.nyn nɥi sə livʁ/', 'zhuh lay lü ahⁿ-nün NWEE | suh LEEVR', ['reprise', 'droite']),
  sent(1836, 'Il est fou, lui.', 'He is mad, that one.',
    '/i.lɛ fu lɥi/', 'ee-leh FOO | LWEE', ['reprise', 'droite', 'oral'], FCVR, { register: FAM }),
  sent(1837, 'Elle a raison, elle.', 'She is right, she is.',
    '/ɛ.la ʁɛ.zɔ̃ ɛl/', 'eh-la reh-ZOHⁿ | EL', ['reprise', 'droite', 'oral'], FCVR, { register: FAM }),
  sent(1838, "Ce quartier, j'y habite depuis dix ans.", 'This neighbourhood, I have lived in it for ten years.',
    '/sə kaʁ.tje ʒi a.bit də.pɥi di.zɑ̃/', 'suh kar-TYAY | zhee a-BEET | duh-pwee dee-ZAHⁿ', ['reprise', 'y']),
  sent(1839, "J'habite dans ce quartier depuis dix ans.", 'I have lived in this neighbourhood for ten years.',
    '/ʒa.bit dɑ̃ sə kaʁ.tje də.pɥi di.zɑ̃/', 'zha-BEET | dahⁿ suh kar-TYAY | duh-pwee dee-ZAHⁿ', ['reprise', 'ecrit']),
  sent(1840, "Du café, j'en bois beaucoup trop.", 'Coffee, I drink far too much of it.',
    '/dy ka.fe ʒɑ̃ bwa bo.ku tʁo/', 'dü ka-FAY | zhahⁿ bwa boh-koo TROH', ['reprise', 'en']),
  sent(1841, 'Ta sœur, je lui ai parlé hier.', 'Your sister, I spoke to her yesterday.',
    '/ta sœʁ ʒə lɥi e paʁ.le jɛʁ/', 'ta SUHR | zhuh lwee ay par-lay YEHR', ['reprise', 'lui'], FCVDR),
  sent(1842, 'Moi, mes voisins, je ne les vois jamais.', 'Me, my neighbours, I never see them.',
    '/mwa me vwa.zɛ̃ ʒə nə le vwa ʒa.mɛ/', 'MWA | may vwa-ZEHⁿ | zhuh nuh lay vwa zha-MEH', ['reprise', 'les']),
  sent(1843, 'Tes idées, je les trouve excellentes.', 'Your ideas, I find them excellent.',
    '/te.zi.de ʒə le tʁuv ɛk.se.lɑ̃t/', 'tay-zee-DAY | zhuh lay troov ek-say-LAHⁿT', ['reprise', 'les']),
  sent(1844, "Ce genre de réunion, moi, ça m'épuise.", 'Meetings like that wear me out.',
    '/sə ʒɑ̃ʁ də ʁe.y.njɔ̃ mwa sa me.pɥiz/', 'suh zhahⁿr duh ray-ü-NYOHⁿ | MWA | sa may-PWEEZ', ['reprise', 'ca', 'oral'], FCVR, { register: FAM }),
  rule(1845, 'Le mot détaché est repris par un pronom dans la phrase.', 'The detached word is picked up by a pronoun inside the sentence.',
    '/lə mo de.ta.ʃe ɛ ʁə.pʁi paʁ œ̃ pʁɔ.nɔ̃ dɑ̃ la fʁaz/',
    'luh moh day-ta-SHAY | eh ruh-PREE | par uhⁿ pro-NOHⁿ | dahⁿ la FRAHZ',
    "Qu'est-ce qu'une dislocation ?",
    "À l'oral, on détache un mot en tête ou en fin de phrase, et un pronom le reprend : ce film, je l'ai adoré. À l'écrit neutre, on garde l'ordre simple : j'ai adoré ce film.",
    ['reprise']),
  gap(1846, 'Ces dossiers, je les ai relus hier soir.', 'These files, I reread them last night.',
    '/se do.sje ʒə le.ze ʁə.ly jɛʁ swaʁ/', 'say doh-SYAY | zhuh lay-zay ruh-LÜ | yehr SWAR',
    'Ces dossiers, je ___ ai relus hier soir. (reprends ces dossiers)',
    "Les reprend ces dossiers, et relus s'accorde avec lui, placé avant. EN: les picks up the files.",
    ['reprise', 'les'], FCVDR),
  gap(1847, "Paris, j'y vais chaque été.", 'Paris, I go there every summer.',
    '/pa.ʁi ʒi vɛ ʃak e.te/', 'pa-REE | zhee veh shak ay-TAY',
    "Paris, j'___ vais chaque été. (reprends Paris, un lieu)",
    "Un lieu détaché est repris par y. EN: a place is picked up by y.",
    ['reprise', 'y']),
];

/* ── ACT 4 · SEUL DEVANT LE VERBE (.1849-.1863) ───────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1849, 'Lui seul connaissait le code.', 'He alone knew the code.',
    '/lɥi sœl kɔ.nɛ.sɛ lə kɔd/', 'lwee SUHL | ko-neh-seh luh KOD', ['seul-devant', 'seul'], FCVDR),
  sent(1850, 'Eux ont refusé, nous avons accepté.', 'They refused, we accepted.',
    '/ø.zɔ̃ ʁə.fy.ze nu.za.vɔ̃ ak.sɛp.te/', 'eu-zohⁿ ruh-fü-ZAY | noo-za-vohⁿ ak-sep-TAY', ['seul-devant', 'contraste'], FCVDR),
  sent(1851, 'Moi seul peux signer ce document.', 'I alone can sign this document.',
    '/mwa sœl pø si.ɲe sə dɔ.ky.mɑ̃/', 'mwa SUHL | peu see-nyay suh do-kü-MAHⁿ', ['seul-devant', 'moi-seul']),
  sent(1852, 'Toi seule peux la convaincre.', 'Only you can convince her.',
    '/twa sœl pø la kɔ̃.vɛ̃kʁ/', 'twa SUHL | peu la kohⁿ-VEHⁿKR', ['seul-devant', 'toi-seul']),
  sent(1853, "Eux seuls sont restés jusqu'au bout.", 'Only they stayed to the end.',
    '/ø sœl sɔ̃ ʁɛs.te ʒys.ko bu/', 'eu SUHL | sohⁿ res-tay zhüs-koh BOO', ['seul-devant', 'seul']),
  sent(1854, 'Lui aussi a voté contre.', 'He voted against too.',
    '/lɥi o.si a vɔ.te kɔ̃tʁ/', 'lwee oh-SEE | a vo-tay KOHⁿTR', ['seul-devant', 'aussi']),
  sent(1855, "Lui non plus n'a rien dit.", 'He did not say anything either.',
    '/lɥi nɔ̃ ply na ʁjɛ̃ di/', 'lwee nohⁿ PLÜ | na ryehⁿ DEE', ['seul-devant', 'non-plus']),
  sent(1856, 'Eux savaient, nous ne savions rien.', 'They knew; we knew nothing.',
    '/ø sa.vɛ nu nə sa.vjɔ̃ ʁjɛ̃/', 'eu sa-VEH | noo nuh sa-vyohⁿ RYEHⁿ', ['seul-devant', 'contraste']),
  sent(1857, "Elle a crié ; lui n'a rien entendu.", 'She shouted; he heard nothing.',
    '/ɛ.la kʁi.je lɥi na ʁjɛ̃.nɑ̃.tɑ̃.dy/', 'eh-la kree-YAY | lwee na ryehⁿ-nahⁿ-tahⁿ-DÜ', ['seul-devant', 'contraste'], FCVDR),
  sent(1858, "Lui-même l'a reconnu devant tout le monde.", 'He himself admitted it in front of everyone.',
    '/lɥi.mɛm la ʁə.kɔ.ny də.vɑ̃ tu lə mɔ̃d/', 'lwee-MEM | la ruh-ko-NÜ | duh-vahⁿ too luh MOHⁿD', ['seul-devant', 'meme']),
  sent(1859, 'Toi seul sais où sont les clés.', 'Only you know where the keys are.',
    '/twa sœl sɛ u sɔ̃ le kle/', 'twa SUHL | seh oo sohⁿ lay KLAY', ['seul-devant', 'toi-seul']),
  rule(1860, 'Lui et eux peuvent être sujets seuls ; moi et toi ont besoin de seul.', 'Lui and eux can stand alone as subjects; moi and toi need seul.',
    '/lɥi e ø pœv ɛtʁ sy.ʒɛ sœl mwa e twa ɔ̃ bə.zwɛ̃ də sœl/',
    'lwee ay EU | puhv etr sü-zheh SUHL | mwa ay TWA | ohⁿ buh-zwehⁿ duh SUHL',
    'Un pronom tonique peut-il être sujet tout seul ?',
    "Lui et eux, oui, face à quelqu'un d'autre ou avec seul, aussi, non plus, même : lui seul le savait. Moi et toi, seulement avec seul : moi seul peux signer. Le verbe garde la personne du pronom.",
    ['seul-devant']),
  gap(1861, 'Moi seul connais la réponse.', 'I alone know the answer.',
    '/mwa sœl kɔ.nɛ la ʁe.pɔ̃s/', 'mwa SUHL | ko-neh la ray-POHⁿS',
    'Moi seul ___ la réponse. (connaître, au présent)',
    "Le verbe suit moi : première personne, connais. EN: first person, after moi.",
    ['seul-devant', 'moi-seul'], FCVDR),
  gap(1862, 'Eux seuls avaient les clés.', 'Only they had the keys.',
    '/ø sœl a.vɛ le kle/', 'eu SUHL | a-veh lay KLAY',
    "Eux seuls ___ les clés. (avoir, à l'imparfait)",
    "Eux : troisième personne du pluriel, avaient. EN: third person plural.",
    ['seul-devant', 'seul']),
  sent(1863, 'Elle seule a compris le problème.', 'Only she understood the problem.',
    '/ɛl sœl a kɔ̃.pʁi lə pʁɔ.blɛm/', 'el SUHL | a kohⁿ-pree luh pro-BLEM', ['seul-devant', 'seul']),
];

/* ── ACT 5 · TOI ET MOI, NOUS (.1865-.1880) ───────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(1865, 'Paul et moi sommes arrivés en retard.', 'Paul and I arrived late.',
    '/pɔl e mwa sɔm.za.ʁi.ve ɑ̃ ʁə.taʁ/', 'POL ay MWA | som-za-ree-VAY | ahⁿ ruh-TAR', ['accord', 'ecrit'], FCVDR),
  sent(1866, 'Paul et moi, nous sommes arrivés en retard.', 'Paul and I arrived late.',
    '/pɔl e mwa nu sɔm.za.ʁi.ve ɑ̃ ʁə.taʁ/', 'POL ay MWA | noo som-za-ree-VAY | ahⁿ ruh-TAR', ['accord', 'reprise']),
  sent(1867, 'Toi et lui, vous êtes invités samedi.', 'You and he are invited on Saturday.',
    '/twa e lɥi vu.zɛt.zɛ̃.vi.te sam.di/', 'TWA ay LWEE | voo-zet-zehⁿ-vee-TAY | sam-DEE', ['accord', 'reprise']),
  sent(1868, 'Toi et lui êtes invités samedi.', 'You and he are invited on Saturday.',
    '/twa e lɥi ɛt.zɛ̃.vi.te sam.di/', 'TWA ay LWEE | et-zehⁿ-vee-TAY | sam-DEE', ['accord', 'ecrit'], FCVR, { register: SOU }),
  sent(1869, 'Marie et lui sont partis ensemble.', 'Marie and he left together.',
    '/ma.ʁi e lɥi sɔ̃ paʁ.ti ɑ̃.sɑ̃bl/', 'ma-REE ay LWEE | sohⁿ par-TEE | ahⁿ-SAHⁿBL', ['accord', 'troisieme']),
  sent(1870, 'Ni toi ni moi ne connaissons la réponse.', 'Neither you nor I know the answer.',
    '/ni twa ni mwa nə kɔ.nɛ.sɔ̃ la ʁe.pɔ̃s/', 'nee TWA nee MWA | nuh ko-neh-sohⁿ la ray-POHⁿS', ['accord', 'ni'], FCVDR),
  sent(1871, "Toi et moi, on s'est toujours compris.", 'You and I have always understood each other.',
    '/twa e mwa ɔ̃ sɛ tu.ʒuʁ kɔ̃.pʁi/', 'TWA ay MWA | ohⁿ seh too-zhoor kohⁿ-PREE', ['accord', 'oral'], FCVR, { register: FAM }),
  sent(1872, 'Ta sœur et toi, vous venez à quelle heure ?', 'What time are you and your sister coming?',
    '/ta sœʁ e twa vu və.ne a kɛ.lœʁ/', 'ta SUHR ay TWA | voo vuh-nay a keh-LUHR', ['accord', 'reprise']),
  sent(1873, 'Mes collègues et moi avons signé la pétition.', 'My colleagues and I signed the petition.',
    '/me kɔ.lɛɡ e mwa a.vɔ̃ si.ɲe la pe.ti.sjɔ̃/', 'may ko-LEG ay MWA | a-vohⁿ see-NYAY | la pay-tee-SYOHⁿ', ['accord', 'ecrit']),
  rule(1874, 'Moi l\'emporte sur toi, et toi l\'emporte sur lui.', 'Moi wins over toi, and toi wins over lui.',
    '/mwa lɑ̃.pɔʁt syʁ twa e twa lɑ̃.pɔʁt syʁ lɥi/',
    'mwa lahⁿ-PORT sür TWA | ay twa lahⁿ-PORT sür LWEE',
    'Toi et moi : à quelle personne, le verbe ?',
    "Moi avec quelqu'un donne nous ; toi avec quelqu'un d'autre que moi donne vous ; lui avec elle donne ils. La personne la plus proche de celui qui parle l'emporte.",
    ['accord']),
  gap(1875, 'Julien et moi avons la même opinion.', 'Julien and I have the same opinion.',
    '/ʒy.ljɛ̃ e mwa a.vɔ̃ la mɛm ɔ.pi.njɔ̃/', 'zhü-LYEHⁿ ay MWA | a-vohⁿ la mem o-pee-NYOHⁿ',
    'Julien et moi ___ la même opinion. (avoir, au présent)',
    "Julien et moi, c'est nous : avons. EN: that is nous.",
    ['accord', 'ecrit'], FCVDR),
  gap(1876, 'Toi et ta sœur, vous avez raison.', 'You and your sister are right.',
    '/twa e ta sœʁ vu.za.ve ʁɛ.zɔ̃/', 'TWA ay ta SUHR | voo-za-vay reh-ZOHⁿ',
    'Toi et ta sœur, vous ___ raison. (avoir, au présent)',
    "Toi et ta sœur, c'est vous : avez. EN: that is vous.",
    ['accord', 'reprise']),
  sent(1877, 'Mon mari et moi vous remercions de votre accueil.', 'My husband and I thank you for your welcome.',
    '/mɔ̃ ma.ʁi e mwa vu ʁə.mɛʁ.sjɔ̃ də vɔ.tʁa.kœj/', 'mohⁿ ma-REE ay MWA | voo ruh-mehr-SYOHⁿ | duh vo-tra-KUHY', ['accord', 'ecrit'], FCVR, { register: SOU }),
  sent(1878, 'Lui et elle ne se parlent plus.', 'He and she no longer speak to each other.',
    '/lɥi e ɛl nə sə paʁl ply/', 'LWEE ay EL | nuh suh parl PLÜ', ['accord', 'troisieme']),
  sent(1879, 'Eux et nous, nous ne voyons pas les choses de la même façon.', 'They and we do not see things the same way.',
    '/ø e nu nu nə vwa.jɔ̃ pa le ʃoz də la mɛm fa.sɔ̃/', 'EU ay NOO | noo nuh vwa-yohⁿ pa lay SHOHZ | duh la mem fa-SOHⁿ', ['accord', 'reprise']),
  sent(1880, 'Karim et elle ont déjà voté.', 'Karim and she have already voted.',
    '/ka.ʁim e ɛ.lɔ̃ de.ʒa vɔ.te/', 'ka-REEM ay eh-LOHⁿ | day-zha vo-TAY', ['accord', 'troisieme']),
];

/* ── ACT 6 · C'EST MOI QUI (.1882-.1900) ──────────────────────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(1882, "C'est nous qui sommes arrivés les premiers.", 'We were the ones who arrived first.',
    '/sɛ nu ki sɔm.za.ʁi.ve le pʁə.mje/', 'seh NOO | kee som-za-ree-VAY | lay pruh-MYAY', ['relief', 'qui'], FCVDR),
  sent(1883, "C'est vous qui l'avez dit.", 'You are the one who said it.',
    '/sɛ vu ki la.ve di/', 'seh VOO | kee la-vay DEE', ['relief', 'qui'], FCVDR),
  sent(1884, 'Ce sont eux qui ont gagné.', 'They are the ones who won.',
    '/sə sɔ̃.tø ki ɔ̃ ɡa.ɲe/', 'suh sohⁿ-TEU | kee ohⁿ ga-NYAY', ['relief', 'qui', 'ecrit']),
  sent(1885, "C'est eux qui ont gagné.", 'They are the ones who won.',
    '/sɛ.tø ki ɔ̃ ɡa.ɲe/', 'seh-TEU | kee ohⁿ ga-NYAY', ['relief', 'qui', 'oral'], FCVR, { register: FAM }),
  sent(1886, "C'est moi qui ai proposé cette idée.", 'I am the one who suggested this idea.',
    '/sɛ mwa ki e pʁɔ.po.ze sɛ.ti.de/', 'seh MWA | kee ay pro-poh-ZAY | seh-tee-DAY', ['relief', 'qui'], FCVDR),
  sent(1887, "C'est toi qui avais raison.", 'You were the one who was right.',
    '/sɛ twa ki a.vɛ ʁɛ.zɔ̃/', 'seh TWA | kee a-veh reh-ZOHⁿ', ['relief', 'qui']),
  sent(1888, "C'est lui que j'ai vu hier soir.", 'He is the one I saw last night.',
    '/sɛ lɥi kə ʒe vy jɛʁ swaʁ/', 'seh LWEE | kuh zhay vü | yehr SWAR', ['relief', 'que']),
  sent(1889, "C'est à toi que je parle.", 'It is you I am talking to.',
    '/sɛ.ta twa kə ʒə paʁl/', 'seh-ta TWA | kuh zhuh PARL', ['relief', 'que'], FCVDR),
  sent(1890, "C'est avec eux que je pars en vacances.", 'It is with them that I am going on holiday.',
    '/sɛ.ta.vɛ.kø kə ʒə paʁ ɑ̃ va.kɑ̃s/', 'seh-ta-veh-KEU | kuh zhuh par ahⁿ va-KAHⁿS', ['relief', 'que']),
  sent(1891, "C'est elle qui décide, pas moi.", 'She is the one who decides, not me.',
    '/sɛ.tɛl ki de.sid pa mwa/', 'seh-TEL | kee day-SEED | pa MWA', ['relief', 'qui']),
  sent(1892, "C'est vous qui êtes en charge du dossier.", 'You are the one in charge of the file.',
    '/sɛ vu ki ɛt.zɑ̃ ʃaʁʒ dy do.sje/', 'seh VOO | kee et-zahⁿ SHARZH | dü doh-SYAY', ['relief', 'qui']),
  rule(1893, "Après c'est moi qui, le verbe est à la première personne.", "After c'est moi qui, the verb is in the first person.",
    '/a.pʁɛ sɛ mwa ki lə vɛʁb ɛ.ta la pʁə.mjɛʁ pɛʁ.sɔn/',
    'a-preh seh MWA KEE | luh vehrb eh-ta la pruh-myehr pehr-SONN',
    "C'est moi qui… : à quelle personne, le verbe ?",
    "À la personne du pronom tonique : c'est moi qui ai, c'est toi qui as, c'est nous qui sommes, c'est vous qui avez. Qui ne change pas la personne.",
    ['relief', 'qui']),
  gap(1894, "C'est moi qui ai organisé la soirée.", 'I am the one who organised the evening.',
    '/sɛ mwa ki e ɔʁ.ɡa.ni.ze la swa.ʁe/', 'seh MWA | kee ay or-ga-nee-ZAY | la swa-RAY',
    "C'est moi qui ___ organisé la soirée. (avoir)",
    "Le verbe suit moi : ai, jamais a. EN: ai, never a.",
    ['relief', 'qui'], FCVDR),
  gap(1895, "C'est nous qui étions en retard.", 'We were the ones who were late.',
    '/sɛ nu ki e.tjɔ̃.zɑ̃ ʁə.taʁ/', 'seh NOO | kee ay-tyohⁿ-zahⁿ ruh-TAR',
    "C'est nous qui ___ en retard. (être, à l'imparfait)",
    "Le verbe suit nous : étions. EN: étions, after nous.",
    ['relief', 'qui']),
  gap(1896, "C'est toi qui as les clés ?", 'Are you the one with the keys?',
    '/sɛ twa ki a le kle/', 'seh TWA | kee a lay KLAY',
    "C'est toi qui ___ les clés ? (avoir, au présent)",
    "Le verbe suit toi : as, avec un s. EN: as, after toi.",
    ['relief', 'qui']),
  sent(1897, "Ce n'est pas lui qui a commencé, c'est moi.", 'It was not him who started, it was me.',
    '/sə nɛ pa lɥi ki a kɔ.mɑ̃.se sɛ mwa/', 'suh neh pa LWEE | kee a ko-mahⁿ-SAY | seh MWA', ['relief', 'qui', 'negation']),
  sent(1898, "C'est à moi que tu dois t'adresser.", 'I am the one you need to speak to.',
    '/sɛ.ta mwa kə ty dwa ta.dʁɛ.se/', 'seh-ta MWA | kuh tü dwa ta-dreh-SAY', ['relief', 'que']),
  sent(1899, "C'est de toi que je parle.", 'It is you I am talking about.',
    '/sɛ də twa kə ʒə paʁl/', 'seh duh TWA | kuh zhuh PARL', ['relief', 'que']),
  sent(1900, "C'est vous qui avez appelé ce matin ?", 'Was it you who called this morning?',
    '/sɛ vu ki a.ve a.pə.le sə ma.tɛ̃/', 'seh VOO | kee a-vay a-puh-LAY | suh ma-TEHⁿ', ['relief', 'qui']),
];

/* ── ACT 7 · LE RENFORT (.1902-.1916) ─────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1902, 'Vous deux, vous êtes inséparables.', 'You two are inseparable.',
    '/vu dø vu.zɛt.zɛ̃.se.pa.ʁabl/', 'voo DEU | voo-zet-zehⁿ-say-pa-RABL', ['renfort', 'deux']),
  sent(1903, 'À nous deux, nous finirons ce soir.', 'Between the two of us, we will finish tonight.',
    '/a nu dø nu fi.ni.ʁɔ̃ sə swaʁ/', 'a noo DEU | noo fee-nee-ROHⁿ | suh SWAR', ['renfort', 'deux'], FCVDR),
  sent(1904, 'Vous tous, vous êtes invités.', 'All of you are invited.',
    '/vu tus vu.zɛt.zɛ̃.vi.te/', 'voo TOOS | voo-zet-zehⁿ-vee-TAY', ['renfort', 'tous']),
  sent(1905, 'Eux trois ont quitté la réunion.', 'The three of them left the meeting.',
    '/ø tʁwa.zɔ̃ ki.te la ʁe.y.njɔ̃/', 'eu trwa-ZOHⁿ | kee-tay la ray-ü-NYOHⁿ', ['renfort', 'nombre']),
  sent(1906, "Je l'ai compris de moi-même.", 'I worked it out on my own.',
    '/ʒə le kɔ̃.pʁi də mwa.mɛm/', 'zhuh lay kohⁿ-PREE | duh mwa-MEM', ['renfort', 'meme'], FCVDR),
  sent(1907, "Vous l'avez reconnu vous-même.", 'You admitted it yourself.',
    '/vu la.ve ʁə.kɔ.ny vu.mɛm/', 'voo la-vay ruh-ko-NÜ | voo-MEM', ['renfort', 'meme', 'politesse']),
  sent(1908, "Vous l'avez dit vous-mêmes.", 'You said it yourselves.',
    '/vu la.ve di vu.mɛm/', 'voo la-vay DEE | voo-MEM', ['renfort', 'meme', 'pluriel']),
  sent(1909, 'Eux-mêmes ne savaient pas quoi faire.', 'They themselves did not know what to do.',
    '/ø.mɛm nə sa.vɛ pa kwa fɛʁ/', 'eu-MEM | nuh sa-veh pa kwa FEHR', ['renfort', 'meme', 'seul-devant']),
  sent(1910, "Nous non plus, nous n'avons rien vu.", 'We did not see anything either.',
    '/nu nɔ̃ ply nu na.vɔ̃ ʁjɛ̃ vy/', 'noo nohⁿ PLÜ | noo na-vohⁿ ryehⁿ VÜ', ['renfort', 'non-plus']),
  sent(1911, 'Eux aussi ont signé.', 'They signed too.',
    '/ø o.si ɔ̃ si.ɲe/', 'eu oh-SEE | ohⁿ see-NYAY', ['renfort', 'aussi']),
  rule(1912, 'Même prend un s après nous, après vous pluriel, après eux et elles.', 'Même takes an s after nous, plural vous, eux and elles.',
    '/mɛm pʁɑ̃ œ̃.nɛs a.pʁɛ nu a.pʁɛ vu ply.ʁjɛl a.pʁɛ ø e ɛl/',
    'mem prahⁿ uhⁿ-NESS | a-preh NOO | a-preh voo plü-RYEL | a-preh EU ay EL',
    'Nous-même ou nous-mêmes ?',
    "Nous-mêmes, avec un s : le pronom est pluriel. Vous-même pour une personne qu'on vouvoie, vous-mêmes pour plusieurs.",
    ['renfort', 'meme']),
  gap(1913, 'Elles ont tout réparé elles-mêmes.', 'They repaired everything themselves.',
    '/ɛl.zɔ̃ tu ʁe.pa.ʁe ɛl.mɛm/', 'el-zohⁿ too ray-pa-RAY | el-MEM',
    'Elles ont tout réparé ___. (elles, avec même)',
    "Elles-mêmes : un s à elles et un s à mêmes. EN: two plurals.",
    ['renfort', 'meme'], FCVDR),
  gap(1914, 'Vous deux, vous venez avec moi.', 'You two are coming with me.',
    '/vu dø vu və.ne a.vɛk mwa/', 'voo DEU | voo vuh-nay a-vek MWA',
    '___ deux, vous venez avec moi. (les deux personnes à qui tu parles)',
    "Vous deux : le pronom tonique, puis le nombre, sans article. EN: pronoun plus number, no article.",
    ['renfort', 'deux']),
  sent(1915, "Moi-même, je n'y crois plus.", 'I do not believe it any more myself.',
    '/mwa.mɛm ʒə ni kʁwa ply/', 'mwa-MEM | zhuh nee krwa PLÜ', ['renfort', 'meme']),
  sent(1916, "Eux deux se connaissent depuis l'école.", 'Those two have known each other since school.',
    '/ø dø sə kɔ.nɛs də.pɥi le.kɔl/', 'eu DEU | suh ko-NESS | duh-pwee lay-KOL', ['renfort', 'deux']),
];

/* ── ACT 8 · QUI EST « IL » ? (.1918-.1933) ───────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1918, "Marc a croisé Paul au marché ; lui ne l'a pas reconnu.", 'Marc ran into Paul at the market; Paul did not recognise him.',
    '/maʁk a kʁwa.ze pɔl o maʁ.ʃe lɥi nə la pa ʁə.kɔ.ny/', 'mark a krwa-zay POL | oh mar-SHAY | lwee nuh la pa ruh-ko-NÜ', ['ambiguite', 'lui'], FCVDR),
  sent(1919, "Marc a croisé Paul au marché ; il ne l'a pas reconnu.", 'Marc ran into Paul at the market; he did not recognise him.',
    '/maʁk a kʁwa.ze pɔl o maʁ.ʃe il nə la pa ʁə.kɔ.ny/', 'mark a krwa-zay POL | oh mar-SHAY | eel nuh la pa ruh-ko-NÜ', ['ambiguite', 'il']),
  sent(1920, "Léa a appelé sa mère ; elle, elle n'a pas décroché.", 'Léa called her mother; her mother did not pick up.',
    '/le.a a a.pə.le sa mɛʁ ɛl ɛl na pa de.kʁɔ.ʃe/', 'lay-A a a-puh-lay sa MEHR | EL | el na pa day-kro-SHAY', ['ambiguite', 'elle']),
  sent(1921, 'Le directeur a reçu Karim ; lui voulait une augmentation.', 'The director saw Karim; Karim wanted a pay rise.',
    '/lə di.ʁɛk.tœʁ a ʁə.sy ka.ʁim lɥi vu.lɛ y.noɡ.mɑ̃.ta.sjɔ̃/', 'luh dee-rek-TUHR | a ruh-sü ka-REEM | lwee voo-leh ü-nohg-mahⁿ-ta-SYOHⁿ', ['ambiguite', 'lui']),
  sent(1922, 'Je pense souvent à lui.', 'I often think about him.',
    '/ʒə pɑ̃s su.vɑ̃ a lɥi/', 'zhuh pahⁿs soo-vahⁿ a LWEE', ['a-lui', 'penser'], FCVDR),
  sent(1923, 'Je lui téléphone tous les soirs.', 'I phone him every evening.',
    '/ʒə lɥi te.le.fɔn tu le swaʁ/', 'zhuh lwee tay-lay-FON | too lay SWAR', ['a-lui', 'lui']),
  sent(1924, "Je l'ai croisé ce matin.", 'I ran into him this morning.',
    '/ʒə le kʁwa.ze sə ma.tɛ̃/', 'zhuh lay krwa-ZAY | suh ma-TEHⁿ', ['a-lui', 'le']),
  sent(1925, 'Fais attention à eux.', 'Watch out for them.',
    '/fɛ.za.tɑ̃.sjɔ̃ a ø/', 'feh-za-tahⁿ-SYOHⁿ | a EU', ['a-lui', 'attention']),
  sent(1926, 'Je tiens beaucoup à elle.', 'She means a lot to me.',
    '/ʒə tjɛ̃ bo.ku a ɛl/', 'zhuh tyehⁿ boh-koo a EL', ['a-lui', 'tenir']),
  sent(1927, "Elle s'intéresse beaucoup à lui.", 'She is very interested in him.',
    '/ɛl sɛ̃.te.ʁɛs bo.ku a lɥi/', 'el sehⁿ-tay-RESS | boh-koo a LWEE', ['a-lui', 'interesser']),
  sent(1928, 'On peut compter sur eux.', 'We can count on them.',
    '/ɔ̃ pø kɔ̃.te syʁ ø/', 'ohⁿ peu kohⁿ-tay sür EU', ['a-lui', 'preposition']),
  rule(1929, 'Je lui parle, mais je pense à lui.', 'I talk to him, but I think about him.',
    '/ʒə lɥi paʁl mɛ ʒə pɑ̃s a lɥi/',
    'zhuh lwee PARL | meh zhuh pahⁿs a LWEE',
    'Je lui parle ou je parle à lui ?',
    "Pour la plupart des verbes en à, lui se met devant le verbe : je lui parle, je lui écris. Après penser à, tenir à, faire attention à, s'intéresser à, la personne reste après le verbe : je pense à lui.",
    ['a-lui']),
  gap(1930, 'Je pense souvent à elle.', 'I often think about her.',
    '/ʒə pɑ̃s su.vɑ̃ a ɛl/', 'zhuh pahⁿs soo-vahⁿ a EL',
    'Je pense souvent ___. (à ma grand-mère)',
    "Penser à une personne : à elle, après le verbe. EN: penser à keeps à + stressed pronoun.",
    ['a-lui', 'penser']),
  gap(1931, 'Je lui ai écrit une lettre.', 'I wrote him a letter.',
    '/ʒə lɥi e e.kʁi yn lɛtʁ/', 'zhuh lwee ay ay-KREE | ün LETR',
    'Je ___ ai écrit une lettre. (à mon oncle)',
    "Écrire à quelqu'un : lui, devant le verbe. EN: lui before the verb.",
    ['a-lui', 'lui'], FCVDR),
  sent(1932, "Paul a remplacé Marc, et lui l'a mal pris.", 'Paul replaced Marc, and Marc took it badly.',
    '/pɔl a ʁɑ̃.pla.se maʁk e lɥi la mal pʁi/', 'POL a rahⁿ-pla-SAY MARK | ay lwee la mal PREE', ['ambiguite', 'lui']),
  sent(1933, "Il ne pense qu'à lui.", 'He only thinks of himself.',
    '/il nə pɑ̃s ka lɥi/', 'eel nuh pahⁿs ka LWEE', ['a-lui', 'soi-lui']),
];

/* ── ACT 9 · SOI (.1935-.1950) ────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1935, 'Chacun pour soi.', 'Every man for himself.',
    '/ʃa.kœ̃ puʁ swa/', 'sha-kuhⁿ poor SWA', ['soi', 'fige'], FCVDR),
  sent(1936, 'On est bien chez soi.', 'There is no place like home.',
    '/ɔ̃.nɛ bjɛ̃ ʃe swa/', 'ohⁿ-neh byehⁿ shay SWA', ['soi', 'on'], FCVDR),
  sent(1937, 'Cela va de soi.', 'That goes without saying.',
    '/sə.la va də swa/', 'suh-la va duh SWA', ['soi', 'fige']),
  sent(1938, 'Il faut avoir confiance en soi.', 'You have to believe in yourself.',
    '/il fo a.vwaʁ kɔ̃.fjɑ̃s ɑ̃ swa/', 'eel foh a-vwar kohⁿ-FYAHⁿS | ahⁿ SWA', ['soi', 'impersonnel']),
  sent(1939, "Personne n'aime parler de soi.", 'Nobody likes talking about themselves.',
    '/pɛʁ.sɔn nɛm paʁ.le də swa/', 'pehr-SONN | nem par-lay duh SWA', ['soi', 'personne']),
  sent(1940, 'Paul est rentré chez lui.', 'Paul went home.',
    '/pɔl ɛ ʁɑ̃.tʁe ʃe lɥi/', 'POL eh rahⁿ-TRAY | shay LWEE', ['soi-lui', 'lui'], FCVDR),
  sent(1941, 'Chacun est rentré chez soi.', 'Everyone went home.',
    '/ʃa.kœ̃.nɛ ʁɑ̃.tʁe ʃe swa/', 'sha-kuhⁿ-neh rahⁿ-TRAY | shay SWA', ['soi', 'chacun']),
  sent(1942, "On ne pense qu'à soi.", 'People only think of themselves.',
    '/ɔ̃ nə pɑ̃s ka swa/', 'ohⁿ nuh pahⁿs ka SWA', ['soi', 'on']),
  sent(1943, "Le problème n'est pas grave en soi.", 'The problem is not serious in itself.',
    '/lə pʁɔ.blɛm nɛ pa ɡʁa.vɑ̃ swa/', 'luh pro-BLEM | neh pa gra-vahⁿ SWA', ['soi', 'en-soi']),
  sent(1944, "Rester maître de soi, ce n'est pas facile.", 'Keeping control of yourself is not easy.',
    '/ʁɛs.te mɛtʁ də swa sə nɛ pa fa.sil/', 'res-tay MEHTR duh SWA | suh neh pa fa-SEEL', ['soi', 'infinitif']),
  rule(1945, 'Soi pour tout le monde, lui pour quelqu\'un de précis.', 'Soi for anyone at all, lui for someone in particular.',
    '/swa puʁ tu lə mɔ̃d lɥi puʁ kɛl.kœ̃ də pʁe.si/',
    'SWA poor too luh MOHⁿD | LWEE poor kel-kuhⁿ duh pray-SEE',
    'Soi ou lui ?',
    "Soi reprend un sujet qui ne désigne personne en particulier : on, chacun, personne, tout le monde, il faut, un infinitif. Un sujet précis prend lui ou elle : Paul est rentré chez lui.",
    ['soi']),
  gap(1946, 'Tout le monde veut une maison à soi.', 'Everyone wants a home of their own.',
    '/tu lə mɔ̃d vø yn mɛ.zɔ̃ a swa/', 'too luh MOHⁿD | veu ün meh-ZOHⁿ a SWA',
    'Tout le monde veut une maison à ___. (soi ou lui ?)',
    "Tout le monde ne désigne personne en particulier : soi. EN: nobody in particular, so soi.",
    ['soi', 'tout-le-monde'], FCVDR),
  gap(1947, 'Marie a toujours ses clés sur elle.', 'Marie always has her keys on her.',
    '/ma.ʁi a tu.ʒuʁ se kle syʁ ɛl/', 'ma-REE a too-ZHOOR | say klay sür EL',
    'Marie a toujours ses clés sur ___. (soi ou elle ?)',
    "Marie est une personne précise : elle. EN: a named person takes elle.",
    ['soi-lui', 'elle']),
  sent(1948, "Prendre du temps pour soi, c'est important.", 'Taking time for yourself matters.',
    '/pʁɑ̃dʁ dy tɑ̃ puʁ swa sɛ.tɛ̃.pɔʁ.tɑ̃/', 'prahⁿdr dü tahⁿ poor SWA | seh-tehⁿ-por-TAHⁿ', ['soi', 'infinitif']),
  sent(1949, 'Ça va de soi.', 'It goes without saying.',
    '/sa va də swa/', 'sa va duh SWA', ['soi', 'fige', 'oral'], FCVR, { register: FAM }),
  sent(1950, "Elle ne parle jamais d'elle.", 'She never talks about herself.',
    '/ɛl nə paʁl ʒa.mɛ dɛl/', 'el nuh parl zha-meh DEL', ['soi-lui', 'elle']),
];

/* ── ACT 10 · À MOI, À LUI (.1952-.1965) ──────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1952, "C'est à moi de décider.", 'It is up to me to decide.',
    '/sɛ.ta mwa də de.si.de/', 'seh-ta MWA | duh day-see-DAY', ['a-moi', 'tour'], FCVDR),
  sent(1953, "C'est à toi de jouer.", 'It is your turn.',
    '/sɛ.ta twa də ʒwe/', 'seh-ta TWA | duh ZHWAY', ['a-moi', 'tour']),
  sent(1954, "C'est à lui de s'excuser, pas à moi.", 'It is up to him to apologise, not me.',
    '/sɛ.ta lɥi də sɛk.sky.ze pa.za mwa/', 'seh-ta LWEE | duh sek-skü-ZAY | pa-za MWA', ['a-moi', 'tour'], FCVDR),
  sent(1955, 'Un ami à moi habite à Lyon.', 'A friend of mine lives in Lyon.',
    '/œ̃.na.mi a mwa a.bit a ljɔ̃/', 'uhⁿ-na-MEE a MWA | a-beet a LYOHⁿ', ['a-moi', 'un-ami']),
  sent(1956, "C'est une idée à elle.", 'It is her own idea.',
    '/sɛ.ty.ni.de a ɛl/', 'seh-tü-nee-DAY a EL', ['a-moi', 'insistance']),
  sent(1957, 'Il a une façon bien à lui de raconter les histoires.', 'He has a way all his own of telling stories.',
    '/i.la yn fa.sɔ̃ bjɛ̃.na lɥi də ʁa.kɔ̃.te le.zis.twaʁ/', 'ee-la ün fa-SOHⁿ | byehⁿ-na LWEE | duh ra-kohⁿ-tay lay-zees-TWAR', ['a-moi', 'insistance']),
  sent(1958, 'Ce vélo est à eux, pas à nous.', 'This bike is theirs, not ours.',
    '/sə ve.lo ɛ.ta ø pa.za nu/', 'suh vay-LOH | eh-ta EU | pa-za NOO', ['a-moi', 'possession']),
  sent(1959, "C'est à nous de trouver une solution.", 'It is up to us to find a solution.',
    '/sɛ.ta nu də tʁu.ve yn sɔ.ly.sjɔ̃/', 'seh-ta NOO | duh troo-vay ün so-lü-SYOHⁿ', ['a-moi', 'tour']),
  rule(1960, "C'est à moi dit à qui c'est ; c'est à moi de dit qui doit agir.", "C'est à moi says whose it is; c'est à moi de says who has to act.",
    '/sɛ.ta mwa di a ki sɛ sɛ.ta mwa də di ki dwa.ta.ʒiʁ/',
    'seh-ta MWA | dee a kee SEH | seh-ta mwa DUH | dee kee dwa-ta-ZHEER',
    "C'est à moi ou c'est à moi de ?",
    "C'est à moi : ça m'appartient. C'est à moi de + infinitif : c'est mon tour, ou c'est mon rôle.",
    ['a-moi']),
  gap(1961, "C'est à toi de payer l'addition.", 'It is your turn to pay the bill.',
    '/sɛ.ta twa də pɛ.je la.di.sjɔ̃/', 'seh-ta TWA | duh peh-yay la-dee-SYOHⁿ',
    "C'est ___ de payer l'addition. (ton tour)",
    "Ton tour : à toi de, puis l'infinitif. EN: à toi de + infinitive.",
    ['a-moi', 'tour'], FCVDR),
  sent(1962, "Une collègue à moi m'a parlé de ce poste.", 'A colleague of mine told me about this job.',
    '/yn kɔ.lɛɡ a mwa ma paʁ.le də sə pɔst/', 'ün ko-LEG a MWA | ma par-LAY | duh suh POST', ['a-moi', 'un-ami']),
  sent(1963, "C'est son livre à elle, pas à lui.", 'It is her book, not his.',
    '/sɛ sɔ̃ livʁ a ɛl pa.za lɥi/', 'seh sohⁿ LEEVR a EL | pa-za LWEE', ['a-moi', 'ambiguite'], FCVDR),
  sent(1964, 'Ils ont leur façon à eux de travailler.', 'They have their own way of working.',
    '/il.zɔ̃ lœʁ fa.sɔ̃ a ø də tʁa.va.je/', 'eel-zohⁿ luhr fa-SOHⁿ a EU | duh tra-va-YAY', ['a-moi', 'insistance']),
  gap(1965, 'Un voisin à nous nous a prêté sa voiture.', 'A neighbour of ours lent us his car.',
    '/œ̃ vwa.zɛ̃ a nu nu.za pʁɛ.te sa vwa.tyʁ/', 'uhⁿ vwa-ZEHⁿ a NOO | noo-za preh-tay sa vwa-TÜR',
    'Un voisin ___ nous a prêté sa voiture. (un de nos voisins, avec à)',
    "Un voisin à nous : un de nos voisins. EN: a neighbour of ours.",
    ['a-moi', 'un-ami']),
];

/* ── ACT 11 · L'ORAL ET L'ÉCRIT (.1967-.1980) ─────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(1967, 'Pour ma part, je pense que le projet arrive trop tôt.', 'For my part, I think the project comes too early.',
    '/puʁ ma paʁ ʒə pɑ̃s kə lə pʁɔ.ʒɛ a.ʁiv tʁo to/', 'poor ma PAR | zhuh pahⁿs kuh luh pro-ZHEH | a-reev troh TOH', ['registre', 'ecrit'], FCVDR, { register: SOU }),
  sent(1968, 'Quant à moi, je préfère attendre.', 'As for me, I would rather wait.',
    '/kɑ̃.ta mwa ʒə pʁe.fɛ.ʁa.tɑ̃dʁ/', 'kahⁿ-ta MWA | zhuh pray-feh-ra-TAHⁿDR', ['registre', 'ecrit'], FCVR, { register: SOU }),
  sent(1969, "En ce qui me concerne, je n'ai pas d'objection.", 'As far as I am concerned, I have no objection.',
    '/ɑ̃ sə ki mə kɔ̃.sɛʁn ʒə ne pa dɔb.ʒɛk.sjɔ̃/', 'ahⁿ suh kee muh kohⁿ-SEHRN | zhuh nay pa dob-zhek-SYOHⁿ', ['registre', 'ecrit'], FCVR, { register: SOU }),
  sent(1970, "Moi, je dis que c'est trop tôt.", 'Me, I say it is too early.',
    '/mwa ʒə di kə sɛ tʁo to/', 'MWA | zhuh dee kuh seh troh TOH', ['registre', 'oral']),
  sent(1971, "Nous, on n'est pas d'accord.", 'We do not agree.',
    '/nu ɔ̃ nɛ pa da.kɔʁ/', 'NOO | ohⁿ neh pa da-KOR', ['registre', 'oral'], FCVR, { register: FAM }),
  sent(1972, 'Ce sont elles qui ont lancé le projet.', 'They are the ones who launched the project.',
    '/sə sɔ̃.tɛl ki ɔ̃ lɑ̃.se lə pʁɔ.ʒɛ/', 'suh sohⁿ-TEL | kee ohⁿ lahⁿ-say luh pro-ZHEH', ['registre', 'ecrit', 'relief']),
  sent(1973, 'Les habitants, eux, réclament un parc.', 'The residents, for their part, are calling for a park.',
    '/le.za.bi.tɑ̃ ø ʁe.klam œ̃ paʁk/', 'lay-za-bee-TAHⁿ | EU | ray-klam uhⁿ PARK', ['registre', 'neutre']),
  sent(1974, "Les parents, quant à eux, s'inquiètent.", 'The parents, for their part, are worried.',
    '/le pa.ʁɑ̃ kɑ̃.ta ø sɛ̃.kjɛt/', 'lay pa-RAHⁿ | kahⁿ-ta EU | sehⁿ-KYET', ['registre', 'ecrit'], FCVDR, { register: SOU }),
  sent(1975, 'Il exagère, lui.', 'He is going too far, that one.',
    '/i.lɛɡ.za.ʒɛʁ lɥi/', 'ee-leg-za-ZHEHR | LWEE', ['registre', 'oral'], FCVR, { register: FAM }),
  sent(1976, "Le maire lui-même a reconnu l'erreur.", 'The mayor himself admitted the mistake.',
    '/lə mɛʁ lɥi.mɛm a ʁə.kɔ.ny lɛ.ʁœʁ/', 'luh MEHR lwee-MEM | a ruh-ko-NÜ | leh-RUHR', ['registre', 'neutre']),
  rule(1977, "À l'écrit soigné, pour ma part remplace moi, je.", 'In careful writing, pour ma part replaces moi, je.',
    '/a le.kʁi swa.ɲe puʁ ma paʁ ʁɑ̃.plas mwa ʒə/',
    'a lay-kree swa-NYAY | poor ma PAR | rahⁿ-PLASS | mwa ZHUH',
    "Moi, je, à l'écrit ?",
    "Dans un texte soigné, préfère pour ma part, quant à moi, en ce qui me concerne. Moi, je reste naturel pour rapporter une parole ou dans un message amical.",
    ['registre']),
  gap(1978, 'Mes collègues, quant à eux, préfèrent le télétravail.', 'My colleagues, for their part, prefer working from home.',
    '/me kɔ.lɛɡ kɑ̃.ta ø pʁe.fɛʁ lə te.le.tʁa.vaj/', 'may ko-LEG | kahⁿ-ta EU | pray-fehr luh tay-lay-tra-VAHY',
    'Mes collègues, ___, préfèrent le télétravail. (la version écrite de eux)',
    "Quant à eux : le même contraste, au registre soigné. EN: the written way to say eux.",
    ['registre', 'ecrit'], FCVR),
  sent(1979, "Elle, elle s'en fiche.", 'She could not care less.',
    '/ɛl ɛl sɑ̃ fiʃ/', 'EL | el sahⁿ FEESH', ['registre', 'oral'], FCVR, { register: FAM }),
  sent(1980, 'Eux seuls pourraient nous convaincre.', 'Only they could convince us.',
    '/ø sœl pu.ʁɛ nu kɔ̃.vɛ̃kʁ/', 'eu SUHL | poo-reh noo kohⁿ-VEHⁿKR', ['registre', 'neutre']),
];

/* ── ACT 12 · TA VOIX DANS LE DÉBAT (.1982-.1990) ─────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1982, 'Eux pensent que le jardin coûtera trop cher ; moi, je crois le contraire.', 'They think the garden will cost too much; I believe the opposite.',
    '/ø pɑ̃s kə lə ʒaʁ.dɛ̃ ku.tʁa tʁo ʃɛʁ mwa ʒə kʁwa lə kɔ̃.tʁɛʁ/', 'EU | pahⁿs kuh luh zhar-DEHⁿ | koo-tra troh SHEHR | MWA | zhuh krwa luh kohⁿ-TREHR', ['debat', 'contraste'], FCVDR),
  sent(1983, "C'est nous-mêmes qui avons voté ce budget l'an dernier.", 'We ourselves voted for this budget last year.',
    '/sɛ nu.mɛm ki a.vɔ̃ vɔ.te sə by.dʒɛ lɑ̃ dɛʁ.nje/', 'seh noo-MEM | kee a-vohⁿ vo-tay suh bü-JEH | lahⁿ dehr-NYAY', ['debat', 'relief', 'meme']),
  sent(1984, "Léa, elle, propose d'attendre ; pour ma part, je préfère agir tout de suite.", 'Léa suggests waiting; I prefer to act at once.',
    '/le.a ɛl pʁɔ.poz da.tɑ̃dʁ puʁ ma paʁ ʒə pʁe.fɛ.ʁa.ʒiʁ tut.sɥit/', 'lay-A | EL | pro-pohz da-TAHⁿDR | poor ma PAR | zhuh pray-feh-ra-ZHEER | toot-SWEET', ['debat', 'registre']),
  sent(1985, "Ce n'est pas à eux seuls de décider.", 'It is not up to them alone to decide.',
    '/sə nɛ pa.za ø sœl də de.si.de/', 'suh neh pa-za eu SUHL | duh day-see-DAY', ['debat', 'a-moi']),
  sent(1986, "Si c'est moi qui dois l'arroser, je le ferai volontiers.", 'If I am the one who has to water it, I will gladly do it.',
    '/si sɛ mwa ki dwa la.ʁo.ze ʒə lə fə.ʁe vɔ.lɔ̃.tje/', 'see seh MWA | kee dwa la-roh-ZAY | zhuh luh fuh-ray vo-lohⁿ-TYAY', ['debat', 'relief']),
  sent(1987, "Sophie, elle, s'inquiète du bruit.", 'Sophie, for her part, is worried about the noise.',
    '/sɔ.fi ɛl sɛ̃.kjɛt dy bʁɥi/', 'so-FEE | EL | sehⁿ-kyet dü BRWEE', ['debat', 'contraste']),
  sent(1988, 'Chacun y trouvera quelque chose pour soi.', 'Everyone will find something there for themselves.',
    '/ʃa.kœ̃ i tʁu.və.ʁa kɛl.kə ʃoz puʁ swa/', 'sha-KUHⁿ | ee troo-vuh-RA | kel-kuh SHOHZ poor SWA', ['debat', 'soi']),
  sent(1989, 'Toi et moi, nous en avons déjà parlé.', 'You and I have already talked about it.',
    '/twa e mwa nu.zɑ̃.na.vɔ̃ de.ʒa paʁ.le/', 'TWA ay MWA | noo-zahⁿ-na-vohⁿ day-zha par-LAY', ['debat', 'accord']),
  sent(1990, 'Eux ont leurs raisons, nous avons les nôtres.', 'They have their reasons, we have ours.',
    '/ø.zɔ̃ lœʁ ʁɛ.zɔ̃ nu.za.vɔ̃ le notʁ/', 'eu-zohⁿ luhr reh-ZOHⁿ | noo-za-vohⁿ lay NOHTR', ['debat', 'seul-devant']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TEXTS
 *
 *  The long readings (B2: 200 to 350 words) and the nine short « dans un
 *  texte » paragraphs (60 to 120 words) that close acts 3 to 11. They live
 *  here so the reading, the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: the ciné-club secretary's report, Montréal. */
export const LECTURE_CINECLUB =
  "Compte rendu du ciné-club, jeudi 12 février, bibliothèque du Plateau, à Montréal. Il faut dire que la salle était pleine, ce qui n'arrive pas souvent en plein hiver. C'est elle qui a choisi le film : Nadia, notre présidente, le proposait depuis des mois. Trois heures sur une famille de pêcheurs de la Gaspésie, en noir et blanc, presque sans dialogues. Au premier rang, ses étudiants n'ont pas bougé une seule fois. Eux ont applaudi pendant cinq minutes. Les autres, eux, sont sortis déçus : trop lent, trop long, trop triste. Julie, elle, a trouvé la musique magnifique. Karim, lui, a surtout parlé de la fin, qu'il juge pleine d'espoir. Lui seul a défendu la fin, d'ailleurs, contre toute la salle, et il l'a fait avec beaucoup d'humour. Quant à moi, j'ai hésité toute la soirée. Moi, j'ai préféré le livre, mais je reconnais que certaines images m'ont marqué. À la fin, Nadia nous a demandé de voter pour la prochaine séance. Nous, les bénévoles, nous avons voté pour une comédie ; le public, lui, a choisi un autre drame. Bref, chacun est reparti avec son avis, et c'est très bien ainsi. La semaine prochaine, c'est à nous de préparer le café. Bertrand, secrétaire du ciné-club.";

/** Act 11: a radio debate in Brussels, transcript then written summary. */
export const LECTURE_RADIO =
  "Extrait d'un débat diffusé à la radio, à Bruxelles, sur la fermeture d'une rue aux voitures, puis le résumé publié le lendemain sur le site de la station. La transcription. L'animatrice : « Madame Peeters, vous, vous êtes pour ? » Mme Peeters : « Moi, franchement, je suis pour. Les enfants, eux, ils pourront enfin jouer dehors. » M. Lambert : « Oui, mais nous, les commerçants, on va perdre nos clients. C'est nous qui payons les loyers, pas eux. » Mme Peeters : « Il exagère, lui. Les clients, ils viennent à pied, la plupart. Moi, je les vois tous les jours depuis ma fenêtre. » M. Lambert : « Vous, vous habitez au-dessus de la boulangerie, ce n'est pas pareil. » Le résumé. Lors du débat, Mme Peeters s'est déclarée favorable au projet : selon elle, les enfants pourront enfin jouer dehors. M. Lambert, quant à lui, craint de perdre sa clientèle et rappelle que ce sont les commerçants qui paient les loyers. Mme Peeters, pour sa part, estime que la plupart des clients viennent à pied, ce qu'elle constate elle-même chaque jour ; son contradicteur lui objecte que sa situation de riveraine n'est pas celle d'un commerçant. Les deux invités ne sont donc pas parvenus à un accord, et la commune doit trancher avant l'été.";

/** Act 12: the model the learner imitates, a reply in a staff forum. */
export const LECTURE_MODELE =
  "Forum de l'équipe, sujet : la semaine de quatre jours. Réponse de Mathieu aux messages de Claire et d'Olivier. Bonjour à tous, je voudrais réagir aux deux messages précédents, qui ne disent pas du tout la même chose. Claire, elle, voit dans la semaine de quatre jours une chance de mieux concilier travail et vie de famille. Olivier, lui, craint que nos clients ne trouvent plus personne le vendredi. Eux deux ont de bons arguments, mais ce n'est pas à eux seuls de trancher. Pour ma part, je crois que la question est mal posée. Ce n'est pas le nombre de jours qui compte, c'est l'organisation. Dans l'équipe de Lyon, ce sont les salariés eux-mêmes qui ont construit le planning, et le service n'a jamais été interrompu. Olivier, tu as raison sur un point : les clients doivent pouvoir nous joindre, et nous leur devons une réponse rapide. Mais c'est nous qui décidons comment. Je propose donc un essai de trois mois, avec une permanence le vendredi à tour de rôle, et un bilan chiffré à la fin de l'essai. Chacun y gagnerait un peu de temps pour soi, et personne ne serait pénalisé. Si l'essai échoue, c'est moi qui l'annoncerai à la direction. Bonne journée, Mathieu.";

/** The nine « dans un texte » paragraphs (acts 3 to 11). */
export const TEXTE_A3 =
  "Hugo laisse un message vocal à sa collègue Inès. Réécris-le en courriel neutre : garde le sens, mais remets chaque mot détaché à sa place. « Salut Inès, c'est Hugo. La réunion de demain, moi, je ne peux pas y aller. Le rapport, je l'ai fini hier soir, je te l'envoie. Le client, lui, il veut des chiffres plus précis. Les graphiques, tu peux les refaire ? Le directeur, je lui en ai parlé : il est d'accord. Merci, t'es géniale, toi. »";

export const TEXTE_A4 =
  "Compte rendu de l'assemblée des locataires. Choisis entre le pronom sujet et le pronom tonique, puis accorde le verbe. « Les jeunes locataires ont voté pour les travaux ; les plus âgés, (ils ou eux ?), ont voté contre. Mme Diallo a parlé la première : (elle seule) (connaître, à l'imparfait) le coût exact de l'ascenseur. Le gérant, (il ou lui ?), n'a rien dit. Moi seul (avoir) demandé un deuxième devis. Mon voisin a longtemps hésité, puis (il ou lui ?) aussi a voté pour. »";

export const TEXTE_A5 =
  "Sofia écrit à son professeur de danse. Conjugue chaque verbe entre parenthèses au présent. « Madame, ma sœur et moi (ne pas pouvoir) venir au cours de samedi : notre cousin et nous (partir) en Belgique pour un mariage. Vous et moi (pouvoir) en parler lundi, avant le cours. Mes parents et moi vous (remercier) de votre patience. Ni ma sœur ni moi ne (vouloir) perdre notre place au spectacle. Mon frère et elle (répéter) déjà leur duo à la maison. »";

export const TEXTE_A6 =
  "Bastien relit le compte rendu de la réunion avant de l'envoyer. Il contient cinq erreurs d'accord après c'est… qui. « Merci à tous pour cette réunion. C'est moi qui a préparé l'ordre du jour, mais c'est vous qui ont trouvé les meilleures idées. C'est nous qui s'occupera du budget, et ce sont Lucie et Omar qui présenteront le projet. Attention : c'est toi, Omar, qui a les clés de la salle, et ce n'est pas moi qui est responsable du matériel. »";

/** The five corrections the act 6 text asks for (shown only as the answer). */
export const TEXTE_A6_REPONSES = [
  "c'est moi qui ai préparé",
  "c'est vous qui avez trouvé",
  "c'est nous qui nous occuperons",
  "c'est toi, Omar, qui as les clés",
  "ce n'est pas moi qui suis responsable",
] as const;

export const TEXTE_A7 =
  "Amina écrit au groupe du jardin partagé. Complète chaque blanc avec même, mêmes, aussi, seuls, tous ou deux. « Bonjour à tous ! Samedi, nous avons monté la serre nous-(…), sans aucune aide. Les enfants (…) ont planté des tomates. Vous (…), vous êtes invités à la fête de dimanche. Paul et Léo, vous (…), vous apportez les chaises ? Eux (…) connaissent le code du cadenas : ne partez pas avant eux. Et Mme Roy, elle-(…), m'a promis qu'elle viendrait. »";

export const TEXTE_A8 =
  "Nora raconte une dispute entre deux voisins, mais on ne sait jamais de qui elle parle. Réécris les phrases avec il pour que le lecteur sache qui fait quoi. « Hier, M. Petit a croisé M. Blanc dans l'escalier. Il lui a reproché le bruit de sa télévision. Il a répondu qu'il n'avait jamais rien entendu. Il s'est énervé, et il a claqué la porte. Le soir, sa femme a appelé celle de M. Blanc, qui a promis de baisser le son. »";

export const TEXTE_A9 =
  "Les règles affichées dans la cuisine d'une colocation, à Genève. Complète avec soi, lui ou elle. « Un : chacun lave sa vaisselle et range derrière (…). Deux : on ne garde pas les clés de la maison sur (…) quand on part en vacances, on les laisse dans la boîte. Trois : Julien travaille la nuit ; quand il rentre chez (…), le matin, on baisse la musique. Quatre : prendre du temps pour (…), c'est normal, mais la salle de bains n'est pas un salon. Cinq : les chats sont à Sara, c'est donc à (…) de les nourrir. »";

export const TEXTE_A10 =
  "Au bureau, une écharpe rose traîne depuis une semaine. Complète chaque blanc avec à et le bon pronom tonique, et ajoute de si le sens l'exige. « Cette écharpe n'est pas (…) : moi, je ne porte jamais de rose. Elle est peut-être (…), Clara ? Clara dit que non. Une amie (…) a perdu la même au cinéma, mais elle habite à Lausanne. Bon, c'est (…) décider : je suis responsable des objets trouvés. Et si personne ne la réclame, ce sera (…), les stagiaires, de choisir à qui la donner. »";

export const TEXTE_A11 =
  "Pendant la réunion de quartier, tu as enregistré l'avis de ton voisin, M. Girard. Réécris-le en trois ou quatre phrases pour le compte rendu écrit. « Moi, je vais être franc : le marché, le dimanche, je l'adore. Mais les camions, eux, ils arrivent à cinq heures du matin, et nous, on dort plus. C'est eux qui font le bruit, pas les clients. La mairie, elle, elle dit rien. Il faut que ça change, moi, je vous le dis. »";
