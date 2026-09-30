// b2.19.l1 « La restriction et l'exception »: the authored corpus, the imports
// and the citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as
// b2.15 cause-consequence and b2.16 concession-avancee), under the B2 rules of
// B2-BUILD-LOG.md (form, meaning, choice, text).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 19 of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   RESTRICTION, EXCEPTION AND THE EXCEPTION UNDER CONDITION. Lesson 20 in B1
//   taught « ne… que » = seulement, the article that stays and que before
//   what remains; lesson 15 in B1 listed « à moins que » among the subjunctive
//   triggers; lesson 3 in B2 used « sauf si » about the past. This lesson
//   maps the whole field and sets each tool against the one it is confused
//   with.
//
//     la limite        meet the field in a pool's rules; the scene's wrong
//                      option is « sauf si + subjonctif » (act 1)
//     la portée        que right before what it restricts, moved to change
//                      the meaning; compound tenses, infinitives, time (« qu'
//                      hier »); the subject cannot be restricted by ne… que:
//                      seul (act 2)
//     ne faire que     restricting the ACTION: ne faire que + infinitif, its
//                      two readings (nonstop / nothing more), n'avoir qu'à;
//                      « il n'a qu'effleuré » named as soutenu (act 3)
//     les adverbes     seulement (and « Seulement, » = the only thing is),
//                      uniquement, exclusivement, simplement, rien que, seul
//                      and its agreement; « ne… seulement que » named as a
//                      spoken pleonasm (act 4)
//     la mise en relief il n'y a que… qui (subjonctif juge, indicatif
//                      constate, lesson 6 in B2), il n'y a que… que, ce n'est
//                      que… que = not until (act 5)
//     pas seulement    ne… pas que (courant, accepted), pas seulement, non
//                      seulement… mais (aussi, encore, également) (act 6)
//     l'exception      sauf, excepté (agreement after the noun), hormis, à
//                      part, mis à part, à l'exception de; sauf avis
//                      contraire, sauf erreur de ma part (act 7)
//     l'exception fine sinon (soutenu, « personne sinon lui »), si ce n'est,
//                      sauf que + indicatif against sauf si, si ce n'est que,
//                      à ceci près que (act 8)
//     sauf si          + indicatif and the si tenses; = si… ne… pas; excepté
//                      si; sauf en cas de + nom; ne… que si (act 9)
//     à moins que      + subjonctif with the expletive ne APPLIED (lesson 18
//                      in B2 owns it), ne… pas for a real negation; à moins
//                      de + infinitif or nom; sauf à (soutenu) (act 10)
//     la carte         à condition que / de, pourvu que, faute de, faute de
//                      quoi, à défaut de; three ways to say one exception
//                      (act 11)
//     le courrier      the DELF B2 production écrite: a formal reply or a
//                      notice with limits and exceptions (act 12)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 20 in B1   ne… que, seulement, the article (reframe quoted;
//                       rows negation-et-restriction .1035 .1036 .1040
//                       .1043 .1046 .1052 .1105)
//     lesson 10 in B1   the si pairs: sauf si follows them (reframe quoted)
//     lesson 15 in B1   à moins que in the trigger list (row .1344 reused)
//     lesson 16 in B1   à condition de against à condition que (rows .1341,
//                       .1528 reused)
//     lesson 30 in B1   non seulement… mais, sinon = otherwise (rows .1056,
//                       .1064, .1136 reused)
//     lesson 3 in B2    sauf si about the past (rows .1499 .1500 .1501)
//     lesson 4 in B2    à condition que (row .1729 reused)
//     lesson 6 in B2    le seul qui + subjonctif or indicatif (rows .1883,
//                       .1884 reused)
//     lesson 12 in B2   the gérondif in « ce n'est qu'en lisant » (cited)
//     lesson 15 in B2   faute de as a cause (rows .1869, .1870 reused)
//     lesson 18 in B2   the expletive ne: APPLIED here, taught there (cited)
//     lesson 21 in B2   ne… plus que, ne… jamais que and every stacking of
//                       negatives: LEFT to it, named in the roundup
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB probed read-only 2026-09-30
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `negation-et-restriction` (fondations, a1-b2). Sub-theme « la
//     restriction et l'exception » is already in Postgres (read back
//     2026-09-30 with « les négations combinées »). Nothing to create.
//
//  2. ID BLOCK: `.1200`-`.1399`, assigned by the brief (fr.b2 0-199 and
//     fr.b1 0-399 and 1000-1199 are taken; 1400-1599 is lesson 21 in B2,
//     written in parallel). A read-only probe on 2026-09-30 found NO row at
//     .1200-.1399 at any level of this theme (Postgres: a1 68, a2 229, b1
//     480 up to .1199, b2 53 up to .053). Authored: `.1200`-`.1399`, with
//     one-number gaps between act blocks (see the act banners).
//
//  3. NO VOCAB-TYPE NON-SENTENCE ROW is authored, so the flashcard hub's
//     headword rule (theme + headword) cannot clash: the theme already holds
//     « ne ... que » and « seulement » (b1 .1053, .1054), and other themes
//     hold « à moins que », « à condition que », « non seulement », « sinon »,
//     « excepté », « hormis » as headwords. Every row here is a sentence, a
//     gapfill card or a rule card.
//
//  4. REUSED ROWS. The seed plus packs (22,082 items, read 2026-09-30) and
//     Postgres were probed for every tool with real orthography. On-topic
//     rows are reused BY ID (§F), never retyped. Neither holds « ne faire
//     que », « si ce n'est », « mis à part », « à l'exception de », « sauf
//     à », « à moins de » or « à ceci près que »; those are authored here.
//     Postgres holds ~25 DB-only b2 « à moins que… ne » rows in other themes
//     and two « excepté », two « hormis » rows (prepositions-essentielles);
//     none is an exact twin of a row here (checked 2026-09-30).
//
//  5. RESPELLINGS. Spelled for the nasal checker, not the ear: « personne »
//     pehr-SONN, « une » ÜNN, « semaine » suh-MENN, « prennent » PRENN,
//     « panne » PANN, « communes » ko-MÜNN. Names are chosen so no row that a
//     section respells ends a token on a lone vowel + m/n (« Karim » is kept
//     out for that reason). No U+203F tie.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does. Reused rows keep theirs (several use ’). The one
//     `scenario` uses ’ only and embeds no corpus row.
//
//  7. NO UNGRAMMATICAL OR CRITICISED SENTENCE IS EVER A ROW. « sauf si + le
//     subjonctif », « à moins que + indicatif », « ne… seulement que », « ne
//     que Claire » and the other wrong forms live only in the scene's choice,
//     commonErrors.wrong, trapDrill.promptSound and quiz errorSpot prompts.
//
//  8. THE EXPLETIVE NE IS APPLIED, NOT TAUGHT. « À moins que + ne » is
//     written both ways (with ne: .1204 .1352 .1354 .1355 .1362 .1363 .1364
//     .1365 .1367 .1397; without: .1353 and the reused .1344). Every type-in
//     that ends on à moins que accepts both. Lesson 18 in B2 owns the rule.
//
//  9. « IL N'Y A QUE… QUI » TAKES BOTH MOODS. The subjunctive judges, the
//     indicative states (as lesson 6 in B2's « le seul qui »). No check ever
//     sets one against the other as right and wrong; every type-in accepts
//     both.
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
  id: 'b2.19',
  seq: 19,
  title: 'Restriction and Exception',
  sub: "La restriction et l'exception",
  canDo: "Can restrict exactly what is meant, placing que right before the restricted element, restricting an action with ne faire que and a subject with seul or il n'y a que… qui, and choosing among seulement, uniquement, exclusivement, simplement and rien que by position and register; can say not only (ne… pas que, non seulement… mais); can state an exception with sauf, excepté, hormis, à part, mis à part, à l'exception de, sinon and si ce n'est, and an exception under condition with sauf si + indicative, à moins que + subjunctive, à moins de, sauf à, à condition que or de, pourvu que and faute de, in the register of a notice or a formal reply",
  prereqUnitIds: ['b1.10', 'b1.15', 'b1.16', 'b1.20', 'b1.30', 'b2.03', 'b2.06'],
} as const;

export const LESSON_ID = 'b2.19.l1';
export const THEME = 'negation-et-restriction';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[1200, 1399]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan in
 *  B2-BUILD-LOG.md numbers b2.01 to b2.34 in trail order. Only B1 1-39 and
 *  B2 1-26 are cited (lessons 17 to 21 in B2 publish together).
 * ══════════════════════════════════════════════════════════════════════════ */

export const SI_UNIT = 'b1.10';
export const DECL_UNIT = 'b1.15';
export const SUBINF_UNIT = 'b1.16';
export const NEG_UNIT = 'b1.20';
export const COORD_UNIT = 'b1.30';
export const SI_PASSE_UNIT = 'b2.03';
export const MIXTES_UNIT = 'b2.04';
export const MODES_UNIT = 'b2.06';
export const GERONDIF_UNIT = 'b2.12';
export const CAUSE_UNIT = 'b2.15';
export const CONCESSION_UNIT = 'b2.16';
export const TEMPS_UNIT = 'b2.18';
export const IMPERS_UNIT = 'b2.20';
export const NEGCOMB_UNIT = 'b2.21';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const SI_REF = refFr(SI_UNIT);
export const DECL_REF = refFr(DECL_UNIT);
export const SUBINF_REF = refFr(SUBINF_UNIT);
export const NEG_REF = refFr(NEG_UNIT);
export const COORD_REF = refFr(COORD_UNIT);
export const SI_PASSE_REF = refFr(SI_PASSE_UNIT);
export const MIXTES_REF = refFr(MIXTES_UNIT);
export const MODES_REF = refFr(MODES_UNIT);
export const GERONDIF_REF = refFr(GERONDIF_UNIT);
export const CAUSE_REF = refFr(CAUSE_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const TEMPS_REF = refFr(TEMPS_UNIT);
export const IMPERS_REF = refFr(IMPERS_UNIT);
export const NEGCOMB_REF = refFr(NEGCOMB_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B120_REFRAME, REFRAME_EN as B120_REFRAME_EN } from '../b1/negation-avancee-corpus.ts';
export { REFRAME as B110_REFRAME, REFRAME_EN as B110_REFRAME_EN } from '../b1/si-clauses-corpus.ts';
export { REFRAME as B115_REFRAME, REFRAME_EN as B115_REFRAME_EN } from '../b1/subjonctif-declencheurs-corpus.ts';
export { REFRAME as B116_REFRAME, REFRAME_EN as B116_REFRAME_EN } from '../b1/subjonctif-infinitif-corpus.ts';
export { REFRAME as B130_REFRAME, REFRAME_EN as B130_REFRAME_EN } from '../b1/coordination-corpus.ts';
export { REFRAME as B203_REFRAME, REFRAME_EN as B203_REFRAME_EN } from './si-irreel-passe-corpus.ts';
export { REFRAME as B206_REFRAME, REFRAME_EN as B206_REFRAME_EN } from './subjonctif-indicatif-corpus.ts';
export { REFRAME as B215_REFRAME, REFRAME_EN as B215_REFRAME_EN } from './cause-consequence-corpus.ts';
export { REFRAME as B216_REFRAME, REFRAME_EN as B216_REFRAME_EN } from './concession-avancee-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LA LIMITE ET LA PORTE. A restriction draws a limit round one thing: « je
 *  n'ai que dix euros », « seuls les abonnés », « il ne fait que se
 *  plaindre ». An exception opens a door in a limit already drawn: « tous,
 *  sauf les enfants ». A conditional exception is a door that opens in one
 *  case only: « sauf si », « à moins que ». And each door has its own form:
 *  sauf + nom, sauf si + indicatif, à moins que + subjonctif, à moins de +
 *  infinitif, faute de + nom. « Ne… pas que » takes the limit away again.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Restreindre, c'est tracer une limite ; l'exception y ouvre une porte, et chaque porte a sa forme.";
export const REFRAME_EN = 'To restrict is to draw a limit; an exception opens a door in it, and each door has its own form.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Ne… que est une négation.',
    why: 'The error lesson 20 in B1 was built to prevent, and still the first reflex: « je n’ai que dix euros » says the ten euros are THERE. The article stays (du pain), and « ne… pas que » (act 6) only makes sense because ne… que is not a negation.',
  },
  {
    text: 'Sauf si et à moins que, c’est pareil.',
    why: 'True of their meaning (acts 9 and 10) and exactly the thought that produces « sauf si + subjonctif » and « à moins que + indicatif », the two errors this lesson calls simply wrong. The reframe has to say that each door has its OWN form.',
  },
  {
    text: 'Seulement et ne… que, c’est la même chose.',
    why: 'Same meaning, different syntax: seulement can stand in front of a subject (« seulement trois personnes »), open a sentence (« Seulement, il n’a pas de balcon ») and never takes ne; ne… que cannot restrict the subject at all (act 2, act 4).',
  },
  {
    text: 'Ne ouvre un vide. Le deuxième mot lui donne sa forme.',
    why: 'Lesson 20 in B1’s reframe, still true, so it is QUOTED in act 2 rather than replaced. It is about negation; this lesson is about what is kept and what is let through, which a gap does not say.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-30, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const NR1 = (n: number) => `fr.b1.negation-et-restriction.${n}`;
const CL1 = (n: number) => `fr.b1.connecteurs-logiques.${n}`;
const CL2 = (n: number) => `fr.b2.connecteurs-logiques.${n}`;
const OA1 = (n: number) => `fr.b1.opinions-et-avis.${n}`;
const OA2 = (n: number) => `fr.b2.opinions-et-avis.${n}`;
const PF2 = (n: number) => `fr.b2.projets-et-futur.${n}`;

export const IMPORTED = {
  act1: [] as string[],
  act2: [
    NR1(1035),                                 // Je n'ai que dix dollars.  (lesson 20 in B1)
    NR1(1036),                                 // J'ai seulement dix dollars.  (lesson 20 in B1)
    NR1(1040),                                 // Je ne veux que du pain.  (lesson 20 in B1)
    NR1(1046),                                 // Il ne pense qu'à son travail.  (lesson 20 in B1)
    NR1(1105),                                 // Elle n'a vu que le salon.  (lesson 20 in B1)
  ],
  act3: [
    NR1(1052),                                 // Tu n'as qu'à demander.  (lesson 20 in B1)
  ],
  act4: [
    'fr.b2.langue-soignee.1457',               // L'achat des billets se fait uniquement en ligne.  (lesson 10 in B2)
  ],
  act5: [
    OA2(1883),                                 // C'est le seul architecte qui puisse sauver ce bâtiment.  (lesson 6 in B2)
    OA2(1884),                                 // C'est le seul architecte qui a répondu à l'appel d'offres.  (lesson 6 in B2)
    NR1(1043),                                 // Il n'y a qu'une salle de bain.  (lesson 20 in B1)
  ],
  act6: [
    CL1(1056),                                 // Non seulement il pleut, mais il fait froid.  (lesson 30 in B1)
    CL1(1064),                                 // Non seulement elle chante, mais elle écrit ses chansons.  (lesson 30 in B1)
  ],
  act7: [
    'fr.b1.recits-au-passe.328',               // Tout le monde le savait, sauf moi.
    'fr.b1.expressions-de-quantite.1170',      // Tout le monde est parti, sauf toi.
    'fr.b2.recits-au-passe.1727',              // On avait tout prévu, sauf la pluie.  (lesson 1 in B2)
    'fr.b1.journalisme.1025',                  // Ce quotidien sort tous les matins, sauf le dimanche.
  ],
  act8: [
    CL1(1136),                                 // Dépêche-toi, sinon on va rater le train.  (lesson 30 in B1)
  ],
  act9: [
    PF2(1499),                                 // Je n’aurais jamais quitté Lyon, sauf si on m’avait proposé un poste à Montréal.  (lesson 3 in B2)
    PF2(1500),                                 // Elle avait promis de venir, sauf s’il neigeait.  (lesson 3 in B2)
    PF2(1501),                                 // Rien n’aurait changé, sauf si quelqu’un avait prévenu la mairie à temps.  (lesson 3 in B2)
  ],
  act10: [
    OA1(1344),                                 // Nous partirons demain, à moins qu’il neige.  (lesson 15 in B1)
  ],
  act11: [
    OA1(1341),                                 // Je veux bien t’aider, à condition que tu me préviennes la veille.  (lesson 15 in B1)
    OA1(1528),                                 // Tu peux venir, à condition de me prévenir la veille.  (lesson 16 in B1)
    PF2(1729),                                 // Le projet sera accepté, à condition que le budget soit respecté.  (lesson 4 in B2)
    CL2(1869),                                 // Faute de temps, nous n'avons pas visité le musée.  (lesson 15 in B2)
    CL2(1870),                                 // Faute d'avoir réservé, nous avons mangé debout.  (lesson 15 in B2)
    'fr.b2.faits-et-procedures.1394',          // Faute de réponse sous quinze jours, je saisirai le médiateur de la consommation.  (lesson 14 in B2)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [];

/** No `voiceflash` in the seed: never in a `practice` speak section. Every
 *  import above carries flashcard and voiceflash (checked 2026-09-30). */
export const NOT_SPEAKABLE: readonly string[] = [...NOT_DECK_ABLE];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  `sent` a sentence; `gap` a gapfill card whose front gaps the form and
 *  names the cue; `rule` a grammar card. Every row carries fr, en, ipa and
 *  respell. Corpus respellings carry no brackets.
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FC = ['flashcard', 'review'] as Item['drills'];

const C: Register = 'courant';
const SO = { register: 'soutenu' as Register };
const GP = ['restriction-exception'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, register: C, grammarPoints: GP, ...extra,
});

const gap = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => sent(n, fr, en, ipa, respell, tags, drills, { cardType: 'gapfill', prompt, notes, ...extra });

const rule = (
  n: number, fr: string, en: string, ipa: string, respell: string, prompt: string, notes: string, tags: string[],
): Row => sent(n, fr, en, ipa, respell, ['regle', ...tags], FC, { cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LA LIMITE ET LA PORTE (.1200-.1214) ────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1200, 'Nous ne remboursons que les billets non utilisés.', 'We only refund unused tickets.',
    '/nu nə ʁɑ̃.buʁ.sɔ̃ kə le bi.jɛ nɔ̃ y.ti.li.ze/', 'noo nuh rahⁿ-boor-SOHⁿ | kuh lay bee-YEH | nohⁿ ü-tee-lee-ZAY', ['scene', 'que']),
  sent(1201, 'Le billet est remboursable, sauf si le voyage a commencé.', 'The ticket is refundable, unless the journey has begun.',
    '/lə bi.jɛ ɛ ʁɑ̃.buʁ.sabl sof si lə vwa.jaʒ a kɔ.mɑ̃.se/', 'luh bee-YEH eh rahⁿ-boor-SABL | sohf see luh vwa-YAZH | a ko-mahⁿ-SAY', ['scene', 'sauf-si'], FCVDR),
  sent(1202, 'Seuls les abonnés peuvent réserver un créneau en ligne.', 'Only members can book a slot online.',
    '/sœl le.za.bɔ.ne pœv ʁe.zɛʁ.ve œ̃ kʁe.no ɑ̃ liɲ/', 'SUHL lay-za-bo-NAY | puhv ray-zehr-VAY | uhⁿ kray-NOH ahⁿ LEENY', ['lecture', 'seul']),
  sent(1203, 'Le grand bassin est ouvert tous les jours, excepté le lundi matin.', 'The main pool is open every day, except Monday mornings.',
    '/lə ɡʁɑ̃ ba.sɛ̃ ɛ.tu.vɛʁ tu le ʒuʁ ɛk.sɛp.te lə lœ̃.di ma.tɛ̃/', 'luh grahⁿ ba-SEHⁿ | eh-too-VEHR too lay ZHOOR | ek-sep-TAY luh luhⁿ-dee ma-TEHⁿ', ['lecture', 'excepte']),
  sent(1204, "Le bassin ferme à vingt heures, à moins qu'une compétition ne soit prévue.", 'The pool closes at eight pm, unless a competition is scheduled.',
    '/lə ba.sɛ̃ fɛʁm a vɛ̃.tœʁ a mwɛ̃ kyn kɔ̃.pe.ti.sjɔ̃ nə swa pʁe.vy/', 'luh ba-SEHⁿ | fehrm a vehⁿ-TUHR | a mwehⁿ KÜNN | kohⁿ-pay-tee-SYOHⁿ | nuh swa pray-VÜ', ['lecture', 'a-moins']),
  sent(1205, "Faute de certificat médical, l'inscription ne sera pas validée.", 'Without a medical certificate, the registration will not be accepted.',
    '/fot də sɛʁ.ti.fi.ka me.di.kal lɛ̃s.kʁip.sjɔ̃ nə sə.ʁa pa va.li.de/', 'foht duh sehr-tee-fee-KA may-dee-KAL | lehⁿs-kreep-SYOHⁿ | nuh suh-ra pa va-lee-DAY', ['lecture', 'faute-de']),
  sent(1206, "Les enfants de moins de huit ans ne peuvent entrer qu'accompagnés d'un adulte.", 'Children under eight may only enter with an adult.',
    '/le.zɑ̃.fɑ̃ də mwɛ̃ də ɥi.tɑ̃ nə pœv ɑ̃.tʁe ka.kɔ̃.pa.ɲe dœ̃.na.dylt/', 'lay-zahⁿ-FAHⁿ | duh mwehⁿ duh wee-TAHⁿ | nuh puhv ahⁿ-TRAY | ka-kohⁿ-pa-NYAY | duhⁿ-na-DÜLT', ['lecture', 'que'], FCVDR),
  rule(1207, REFRAME, REFRAME_EN,
    '/ʁɛs.tʁɛ̃dʁ sɛ tʁa.se y.nə li.mit lɛk.sɛp.sjɔ̃ i u.vʁ y.nə pɔʁt e ʃak pɔʁt a sa fɔʁm/',
    'res-TREHⁿDR | seh tra-SAY ü-nuh lee-MEET | lek-sep-SYOHⁿ | ee OOVR ü-nuh PORT | ay shak PORT | a sa FORM',
    'Que fait une restriction, et que fait une exception ?',
    "La restriction trace une limite : ne… que, seulement. L'exception y ouvre une porte : sauf, sauf si, à moins que. Et chaque porte a sa forme : un nom, l'indicatif, le subjonctif.",
    ['reframe']),
  sent(1208, "Le petit bassin n'est réservé aux familles que le samedi matin.", 'The small pool is only kept for families on Saturday mornings.',
    '/lə pə.ti ba.sɛ̃ nɛ ʁe.zɛʁ.ve o fa.mij kə lə sam.di ma.tɛ̃/', 'luh puh-tee ba-SEHⁿ | neh ray-zehr-VAY oh fa-MEE | kuh luh sam-dee ma-TEHⁿ', ['lecture', 'portee']),
  sent(1209, 'Le port du bonnet est obligatoire, sauf pour les enfants de moins de trois ans.', 'Wearing a swimming cap is compulsory, except for children under three.',
    '/lə pɔʁ dy bɔ.nɛ ɛ.tɔ.bli.ɡa.twaʁ sof puʁ le.zɑ̃.fɑ̃ də mwɛ̃ də tʁwa.zɑ̃/', 'luh POR dü bo-NEH | eh-to-blee-ga-TWAR | sohf poor lay-zahⁿ-FAHⁿ | duh mwehⁿ duh trwa-ZAHⁿ', ['lecture', 'sauf'], FCVDR),
  sent(1210, "Un abonnement peut être suspendu, à condition de prévenir l'accueil une semaine à l'avance.", 'A membership can be suspended, provided you tell reception a week in advance.',
    '/œ̃.na.bɔn.mɑ̃ pø.tɛtʁ sys.pɑ̃.dy a kɔ̃.di.sjɔ̃ də pʁev.niʁ la.kœj yn sə.mɛn a la.vɑ̃s/', 'uhⁿ-na-bonn-MAHⁿ | peu-tetr süs-pahⁿ-DÜ | a kohⁿ-dee-SYOHⁿ | duh prayv-NEER la-KUHY | ün suh-MENN a la-VAHⁿS', ['lecture', 'condition']),
  sent(1211, 'Je ne peux vous rembourser que la moitié du billet.', 'I can only refund you half the ticket.',
    '/ʒə nə pø vu ʁɑ̃.buʁ.se kə la mwa.tje dy bi.jɛ/', 'zhuh nuh PEU | voo rahⁿ-boor-SAY | kuh la mwa-TYAY dü bee-YEH', ['usage', 'que']),
  sent(1212, 'Sauf erreur de ma part, votre abonnement expire le trente juin.', 'Unless I am mistaken, your membership expires on 30 June.',
    '/sof e.ʁœʁ də ma paʁ vɔ.tʁa.bɔn.mɑ̃ ɛk.spiʁ lə tʁɑ̃t ʒɥɛ̃/', 'sohf ay-RUHR duh ma PAR | vo-tra-bonn-MAHⁿ | ek-SPEER luh trahⁿt ZHWEHⁿ', ['usage', 'formule']),
  sent(1213, "Il n'y a que le responsable de bassin qui puisse autoriser l'accès au plongeoir.", 'Only the pool supervisor can allow access to the diving board.',
    '/il nja kə lə ʁɛs.pɔ̃.sabl də ba.sɛ̃ ki pɥis o.to.ʁi.ze lak.sɛ o plɔ̃.ʒwaʁ/', 'eel nya kuh luh res-pohⁿ-SABL duh ba-SEHⁿ | kee pweess oh-to-ree-ZAY | lak-SEH oh plohⁿ-ZHWAR', ['lecture', 'relief']),
  sent(1214, "Les abonnements ne sont pas remboursables, sauf si l'usager déménage.", 'Memberships are not refundable, unless the member moves away.',
    '/le.za.bɔn.mɑ̃ nə sɔ̃ pa ʁɑ̃.buʁ.sabl sof si ly.za.ʒe de.me.naʒ/', 'lay-za-bonn-MAHⁿ | nuh sohⁿ pa rahⁿ-boor-SABL | sohf see lü-za-ZHAY | day-may-NAZH', ['lecture', 'sauf-si']),
];

/* ── ACT 2 · LA PORTÉE DE NE… QUE (.1216-.1231) ────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(1216, "Je n'ai prêté ma voiture qu'à mon frère.", 'I have lent my car to my brother and nobody else.',
    '/ʒə ne pʁe.te ma vwa.tyʁ ka mɔ̃ fʁɛʁ/', 'zhuh nay preh-TAY ma vwa-TÜR | ka mohⁿ FREHR', ['portee', 'personne'], FCVDR),
  sent(1217, "Je n'ai prêté que ma voiture à mon frère.", 'My car is the only thing I have lent my brother.',
    '/ʒə ne pʁe.te kə ma vwa.tyʁ a mɔ̃ fʁɛʁ/', 'zhuh nay preh-TAY | kuh ma vwa-TÜR | a mohⁿ FREHR', ['portee', 'objet']),
  sent(1218, 'Elle ne travaille à Genève que le mardi.', 'She only works in Geneva on Tuesdays.',
    '/ɛl nə tʁa.vaj a ʒə.nɛv kə lə maʁ.di/', 'el nuh tra-VAHY a zhuh-NEV | kuh luh mar-DEE', ['portee', 'temps']),
  sent(1219, "Le mardi, elle ne travaille qu'à Genève.", 'On Tuesdays, she works in Geneva and nowhere else.',
    '/lə maʁ.di ɛl nə tʁa.vaj ka ʒə.nɛv/', 'luh mar-DEE | el nuh tra-VAHY | ka zhuh-NEV', ['portee', 'lieu']),
  sent(1220, "Il n'a lu que la conclusion du rapport.", 'He only read the conclusion of the report.',
    '/il na ly kə la kɔ̃.kly.zjɔ̃ dy ʁa.pɔʁ/', 'eel na LÜ | kuh la kohⁿ-klü-ZYOHⁿ dü ra-POR', ['compose'], FCVDR),
  sent(1221, "Nous n'avons reçu la facture qu'hier.", 'We only received the bill yesterday.',
    '/nu na.vɔ̃ ʁə.sy la fak.tyʁ kjɛʁ/', 'noo na-vohⁿ ruh-SÜ la fak-TÜR | KYEHR', ['compose', 'temps']),
  sent(1222, "Je ne veux parler qu'au directeur.", 'I only want to speak to the manager.',
    '/ʒə nə vø paʁ.le ko di.ʁɛk.tœʁ/', 'zhuh nuh veu par-LAY | koh dee-rek-TUHR', ['infinitif'], FCVDR),
  sent(1223, "Tu ne dois prendre ce médicament qu'après le repas.", 'You must only take this medicine after meals.',
    '/ty nə dwa pʁɑ̃dʁ sə me.di.ka.mɑ̃ ka.pʁɛ lə ʁə.pa/', 'tü nuh dwa PRAHⁿDR | suh may-dee-ka-MAHⁿ | ka-PREH luh ruh-PA', ['infinitif', 'temps']),
  sent(1224, 'Seule Claire a répondu à mon message.', 'Only Claire replied to my message.',
    '/sœl klɛʁ a ʁe.pɔ̃.dy a mɔ̃ mɛ.saʒ/', 'suhl KLEHR | a ray-pohⁿ-DÜ | a mohⁿ meh-SAZH', ['sujet', 'seul']),
  rule(1225, "Que se place juste devant ce qu'il restreint.", 'Que goes right before what it restricts.',
    '/kə sə plas ʒys.tə də.vɑ̃ sə kil ʁɛs.tʁɛ̃/', 'KUH suh PLASS | zhüs-tuh duh-VAHⁿ | suh keel res-TREHⁿ',
    "« Je n'ai prêté ma voiture qu'à mon frère » : qu'est-ce qui est restreint ?",
    "Mon frère : c'est la seule personne. Pour restreindre la voiture, déplace que : je n'ai prêté que ma voiture à mon frère.",
    ['portee']),
  rule(1226, "Pour restreindre le sujet, on dit seul ou il n'y a que, jamais ne… que.", 'To restrict the subject, use seul or il n’y a que, never ne… que.',
    '/puʁ ʁɛs.tʁɛ̃dʁ lə sy.ʒɛ ɔ̃ di sœl u il nja kə ʒa.mɛ nə kə/', 'poor res-TREHⁿDR luh sü-ZHEH | ohⁿ dee SUHL | oo eel nya KUH | zha-meh nuh KUH',
    '« Only Claire replied » : comment le dire ?',
    "Seule Claire a répondu, ou il n'y a que Claire qui a répondu. Que suit toujours le verbe : il ne peut pas se placer devant le sujet.",
    ['sujet']),
  sent(1227, "Il ne m'a téléphoné qu'une fois depuis son départ.", 'He has only phoned me once since he left.',
    '/il nə ma te.le.fɔ.ne kyn fwa də.pɥi sɔ̃ de.paʁ/', 'eel nuh ma tay-lay-fo-NAY | künn FWA | duh-pwee sohⁿ day-PAR', ['compose', 'temps']),
  gap(1228, "On ne sert le petit-déjeuner que jusqu'à dix heures.", 'Breakfast is only served until ten.',
    '/ɔ̃ nə sɛʁ lə pə.ti.de.ʒø.ne kə ʒys.ka di.zœʁ/', 'ohⁿ nuh SEHR | luh puh-tee-day-zheu-NAY | kuh zhüs-ka dee-ZUHR',
    "On ___ sert le petit-déjeuner ___ jusqu'à dix heures. (only until ten)",
    "Ne devant le verbe, que devant ce qui est restreint : jusqu'à dix heures. EN: ne before the verb, que before the limit.",
    ['portee'], FCVDR),
  sent(1229, "Je ne l'ai vu qu'en photo.", 'I have only ever seen him in photos.',
    '/ʒə nə le vy kɑ̃ fɔ.to/', 'zhuh nuh lay VÜ | kahⁿ fo-TOH', ['compose', 'maniere']),
  sent(1230, "Le lundi, ce musée n'est ouvert qu'aux groupes.", 'On Mondays, this museum is only open to groups.',
    '/lə lœ̃.di sə my.ze nɛ.tu.vɛʁ ko ɡʁup/', 'luh luhⁿ-DEE | suh mü-ZAY | neh-too-VEHR | koh GROOP', ['portee']),
  gap(1231, 'Il ne reste que deux places pour ce soir.', 'There are only two seats left for tonight.',
    '/il nə ʁɛst kə dø plas puʁ sə swaʁ/', 'eel nuh REST | kuh deu PLASS | poor suh SWAR',
    'Il ___ reste ___ deux places pour ce soir. (only two)',
    "Ne… que : il reste deux places, rien de plus. Ce n'est pas une négation : les places sont là. EN: not a negation; the seats are there.",
    ['portee']),
];

/* ── ACT 3 · NE FAIRE QUE (.1233-.1248) ─────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1233, 'Depuis ce matin, il ne fait que se plaindre.', 'Since this morning he has done nothing but complain.',
    '/də.pɥi sə ma.tɛ̃ il nə fɛ kə sə plɛ̃dʁ/', 'duh-pwee suh ma-TEHⁿ | eel nuh FEH | kuh suh PLEHⁿDR', ['ne-faire', 'sans-arret'], FCVDR),
  sent(1234, 'Je ne fais que passer, je ne reste pas dîner.', 'I am only dropping by, I am not staying for dinner.',
    '/ʒə nə fɛ kə pa.se ʒə nə ʁɛst pa di.ne/', 'zhuh nuh FEH kuh pa-SAY | zhuh nuh REST pa dee-NAY', ['ne-faire', 'rien-de-plus'], FCVDR),
  sent(1235, "Notre agent n'a fait qu'appliquer le règlement.", 'Our agent was only applying the rules.',
    '/nɔ.tʁa.ʒɑ̃ na fɛ ka.pli.ke lə ʁɛ.ɡlə.mɑ̃/', 'no-tra-ZHAHⁿ | na FEH | ka-plee-KAY luh reh-gluh-MAHⁿ', ['ne-faire', 'rien-de-plus']),
  sent(1236, 'Le bébé ne fait que pleurer depuis hier soir.', 'The baby has done nothing but cry since last night.',
    '/lə be.be nə fɛ kə plœ.ʁe də.pɥi jɛʁ swaʁ/', 'luh bay-BAY | nuh FEH kuh pluh-RAY | duh-pwee yehr SWAR', ['ne-faire', 'sans-arret']),
  sent(1237, "Je n'ai fait que poser une question.", 'I only asked a question.',
    '/ʒə ne fɛ kə po.ze yn kɛs.tjɔ̃/', 'zhuh nay FEH | kuh poh-ZAY ün kes-TYOHⁿ', ['ne-faire', 'rien-de-plus'], FCVDR),
  sent(1238, 'Ces mesures ne font que déplacer le problème.', 'These measures only move the problem elsewhere.',
    '/se mə.zyʁ nə fɔ̃ kə de.pla.se lə pʁɔ.blɛm/', 'say muh-ZÜR | nuh FOHⁿ | kuh day-pla-SAY luh pro-BLEM', ['ne-faire', 'rien-de-plus']),
  sent(1239, 'Elle ne fait que répéter ce que dit sa cheffe.', 'She only repeats what her boss says.',
    '/ɛl nə fɛ kə ʁe.pe.te sə kə di sa ʃɛf/', 'el nuh FEH | kuh ray-pay-TAY | suh kuh DEE sa SHEF', ['ne-faire']),
  rule(1240, "Pour restreindre l'action elle-même, on dit ne faire que + infinitif.", 'To restrict the action itself, use ne faire que + infinitive.',
    '/puʁ ʁɛs.tʁɛ̃dʁ lak.sjɔ̃ ɛl.mɛm ɔ̃ di nə fɛʁ kə ɛ̃.fi.ni.tif/', 'poor res-TREHⁿDR | lak-SYOHⁿ el-MEM | ohⁿ DEE | nuh FEHR kuh | ehⁿ-fee-nee-TEEF',
    '« I only asked a question » : comment restreindre l’action ?',
    "Je n'ai fait que poser une question. Faire porte le temps, l'infinitif dit l'action, et que va juste devant lui.",
    ['ne-faire']),
  rule(1241, 'Ne faire que : sans arrêt, ou rien de plus.', 'Ne faire que: nonstop, or nothing more.',
    '/nə fɛʁ kə sɑ̃.za.ʁɛ u ʁjɛ̃ də plys/', 'nuh FEHR kuh | sahⁿ-za-REH | oo RYEHⁿ duh PLÜSS',
    '« Il ne fait que se plaindre », « je ne fais que passer » : même sens ?',
    "Non. Le premier : il se plaint sans arrêt. Le second : je passe, rien de plus. Le contexte tranche.",
    ['ne-faire']),
  sent(1242, "Il n'a fait qu'effleurer le sujet pendant la réunion.", 'He only touched on the subject during the meeting.',
    '/il na fɛ ke.flœ.ʁe lə sy.ʒɛ pɑ̃.dɑ̃ la ʁe.y.njɔ̃/', 'eel na FEH | kay-fluh-RAY luh sü-ZHEH | pahⁿ-dahⁿ la ray-ü-NYOHⁿ', ['ne-faire']),
  sent(1243, "Les prix n'ont fait qu'augmenter depuis janvier.", 'Prices have done nothing but go up since January.',
    '/le pʁi nɔ̃ fɛ kɔɡ.mɑ̃.te də.pɥi ʒɑ̃.vje/', 'lay PREE | nohⁿ FEH | kohg-mahⁿ-TAY | duh-pwee zhahⁿ-VYAY', ['ne-faire', 'sans-arret']),
  gap(1244, 'Je ne faisais que plaisanter.', 'I was only joking.',
    '/ʒə nə fə.zɛ kə plɛ.zɑ̃.te/', 'zhuh nuh fuh-ZEH | kuh pleh-zahⁿ-TAY',
    'Je ___ plaisanter. (ne faire que · à l’imparfait)',
    "Je ne faisais que plaisanter : faire à l'imparfait, plaisanter reste à l'infinitif. EN: I was only joking.",
    ['ne-faire'], FCVDR),
  sent(1245, "Vous n'avez qu'à remplir ce formulaire.", 'You just need to fill in this form.',
    '/vu na.ve ka ʁɑ̃.pliʁ sə fɔʁ.my.lɛʁ/', 'voo na-VAY ka rahⁿ-PLEER | suh for-mü-LEHR', ['n-avoir-qua']),
  sent(1246, 'Je ne fais que mon travail.', 'I am only doing my job.',
    '/ʒə nə fɛ kə mɔ̃ tʁa.vaj/', 'zhuh nuh FEH | kuh mohⁿ tra-VAHY', ['objet', 'contraste']),
  sent(1247, "Cette réforme n'a fait que compliquer les démarches.", 'This reform has only made the paperwork more complicated.',
    '/sɛt ʁe.fɔʁm na fɛ kə kɔ̃.pli.ke le de.maʁʃ/', 'set ray-FORM | na FEH | kuh kohⁿ-plee-KAY lay day-MARSH', ['ne-faire']),
  sent(1248, 'Il suffit de remplir ce formulaire en ligne.', 'All you have to do is fill in this form online.',
    '/il sy.fi də ʁɑ̃.pliʁ sə fɔʁ.my.lɛʁ ɑ̃ liɲ/', 'eel sü-FEE | duh rahⁿ-PLEER suh for-mü-LEHR | ahⁿ LEENY', ['n-avoir-qua']),
];

/* ── ACT 4 · SEULEMENT, UNIQUEMENT, RIEN QUE, SEUL (.1250-.1265) ─────────── */

export const ACT4_ROWS: Row[] = [
  sent(1250, 'Le parking est réservé exclusivement aux résidents.', 'The car park is reserved exclusively for residents.',
    '/lə paʁ.kiŋ ɛ ʁe.zɛʁ.ve ɛk.skly.ziv.mɑ̃ o ʁe.zi.dɑ̃/', 'luh par-KEENG | eh ray-zehr-VAY | eks-klü-zeev-MAHⁿ | oh ray-zee-DAHⁿ', ['exclusivement', 'notice'], FCVR, SO),
  sent(1251, 'Seuls les chiens guides sont admis dans le magasin.', 'Only guide dogs are allowed in the shop.',
    '/sœl le ʃjɛ̃ ɡid sɔ̃.tad.mi dɑ̃ lə ma.ɡa.zɛ̃/', 'SUHL lay shyehⁿ GEED | sohⁿ-tad-MEE | dahⁿ luh ma-ga-ZEHⁿ', ['seul', 'notice'], FCVDR),
  sent(1252, "Rien que le billet d'avion coûte six cents euros.", 'The plane ticket alone costs six hundred euros.',
    '/ʁjɛ̃ kə lə bi.jɛ da.vjɔ̃ kut si sɑ̃.zø.ʁo/', 'ryehⁿ KUH | luh bee-YEH da-VYOHⁿ | koot see sahⁿ-zeu-ROH', ['rien-que']),
  sent(1253, "Rien que d'y penser, j'ai le vertige.", 'Just thinking about it makes me dizzy.',
    '/ʁjɛ̃ kə di pɑ̃.se ʒe lə vɛʁ.tiʒ/', 'ryehⁿ kuh dee pahⁿ-SAY | zhay luh vehr-TEEZH', ['rien-que'], FCVDR),
  sent(1254, 'Je voulais simplement vous prévenir du retard.', 'I simply wanted to let you know about the delay.',
    '/ʒə vu.lɛ sɛ̃.plə.mɑ̃ vu pʁev.niʁ dy ʁə.taʁ/', 'zhuh voo-LEH | sehⁿ-pluh-MAHⁿ | voo prayv-NEER dü ruh-TAR', ['simplement']),
  sent(1255, "L'appartement est parfait. Seulement, il n'a pas de balcon.", 'The flat is perfect. The only thing is, it has no balcony.',
    '/la.paʁ.tə.mɑ̃ ɛ paʁ.fɛ sœl.mɑ̃ il na pa də bal.kɔ̃/', 'la-par-tuh-MAHⁿ eh par-FEH | suhl-MAHⁿ | eel na pa duh bal-KOHⁿ', ['seulement', 'reserve']),
  sent(1256, "Seulement trois personnes se sont inscrites à l'atelier.", 'Only three people signed up for the workshop.',
    '/sœl.mɑ̃ tʁwa pɛʁ.sɔn sə sɔ̃.tɛ̃s.kʁit a la.tə.lje/', 'suhl-MAHⁿ trwa pehr-SONN | suh sohⁿ-tehⁿs-KREET | a la-tuh-LYAY', ['seulement', 'sujet']),
  sent(1257, 'Nous acceptons uniquement les paiements par carte.', 'We only accept card payments.',
    '/nu.zak.sɛp.tɔ̃ y.nik.mɑ̃ le pɛ.mɑ̃ paʁ kaʁt/', 'noo-zak-sep-TOHⁿ | ü-neek-MAHⁿ | lay peh-MAHⁿ par KART', ['uniquement', 'notice'], FCVDR),
  rule(1258, 'Ne… seulement que est un pléonasme : choisis l’un ou l’autre.', 'Ne… seulement que is redundant: choose one or the other.',
    '/nə sœl.mɑ̃ kə ɛ.tœ̃ ple.ɔ.nasm ʃwa.zi lœ̃ u lotʁ/', 'nuh suhl-mahⁿ KUH | eh-tuhⁿ play-o-NASM | shwa-ZEE | LUHⁿ oo LOHTR',
    "« Il n'y a seulement que deux places » : qu'en penser ?",
    "Deux outils pour une seule idée. On l'entend à l'oral ; à l'écrit, choisis : il n'y a que deux places, ou il y a seulement deux places.",
    ['pleonasme', 'registre']),
  rule(1259, 'Seul, devant le sujet, s’accorde avec lui.', 'Seul, before the subject, agrees with it.',
    '/sœl də.vɑ̃ lə sy.ʒɛ sa.kɔʁ a.vɛk lɥi/', 'SUHL | duh-vahⁿ luh sü-ZHEH | sa-KOR a-vek LWEE',
    '« ___ les candidates retenues seront appelées. » (seul)',
    "Seules : féminin pluriel, comme candidates. Seul est un adjectif : seul, seule, seuls, seules.",
    ['seul']),
  sent(1260, "Seules les personnes inscrites recevront le code d'accès.", 'Only registered people will receive the access code.',
    '/sœl le pɛʁ.sɔn ɛ̃s.kʁit ʁə.sə.vʁɔ̃ lə kɔd dak.sɛ/', 'SUHL lay pehr-SONN ehⁿs-KREET | ruh-suh-VROHⁿ | luh kod dak-SEH', ['seul', 'notice'], FCVDR),
  sent(1261, "C'est une simple formalité.", 'It is a mere formality.',
    '/sɛ.tyn sɛ̃pl fɔʁ.ma.li.te/', 'seh-tün SEHⁿPL | for-ma-lee-TAY', ['simple']),
  sent(1262, 'Je vous demande uniquement de signer en bas de la page.', 'I am only asking you to sign at the bottom of the page.',
    '/ʒə vu də.mɑ̃d y.nik.mɑ̃ də si.ɲe ɑ̃ ba də la paʒ/', 'zhuh voo duh-MAHⁿD | ü-neek-MAHⁿ | duh see-NYAY | ahⁿ BA duh la PAZH', ['uniquement']),
  gap(1263, 'Rien que la location de la salle coûte deux mille euros.', 'Hiring the hall alone costs two thousand euros.',
    '/ʁjɛ̃ kə la lɔ.ka.sjɔ̃ də la sal kut dø mi.lø.ʁo/', 'ryehⁿ KUH | la lo-ka-SYOHⁿ duh la SAL | koot deu mee-leu-ROH',
    '___ la location de la salle coûte deux mille euros. (à elle seule)',
    "Rien que : à lui seul, sans compter le reste, placé devant le nom. EN: the hire alone.",
    ['rien-que']),
  sent(1264, "Tu es la seule à m'avoir prévenu.", 'You are the only one who warned me.',
    '/ty ɛ la sœl a ma.vwaʁ pʁev.ny/', 'tü eh la SUHL | a ma-vwar prayv-NÜ', ['seul', 'infinitif']),
  sent(1265, 'Ce tarif est valable seulement en semaine.', 'This rate is only valid on weekdays.',
    '/sə ta.ʁif ɛ va.labl sœl.mɑ̃ ɑ̃ sə.mɛn/', 'suh ta-REEF eh va-LABL | suhl-MAHⁿ ahⁿ suh-MENN', ['seulement', 'notice']),
];

/* ── ACT 5 · IL N'Y A QUE… QUI, CE N'EST QUE… QUE (.1267-.1282) ─────────── */

export const ACT5_ROWS: Row[] = [
  sent(1267, "Il n'y a que toi qui puisses m'aider.", 'You are the only one who can help me.',
    '/il nja kə twa ki pɥis mɛ.de/', 'eel nya kuh TWA | kee pweess meh-DAY', ['relief', 'subjonctif'], FCVDR),
  sent(1268, "Il n'y a que Julie qui est venue à la réunion.", 'Julie was the only one who came to the meeting.',
    '/il nja kə ʒy.li ki ɛ və.ny a la ʁe.y.njɔ̃/', 'eel nya kuh zhü-LEE | kee eh vuh-NÜ | a la ray-ü-NYOHⁿ', ['relief', 'indicatif']),
  sent(1269, "Il n'y a que le dimanche que je me repose vraiment.", 'Sunday is the only day I really rest.',
    '/il nja kə lə di.mɑ̃ʃ kə ʒə mə ʁə.poz vʁɛ.mɑ̃/', 'eel nya kuh luh dee-MAHⁿSH | kuh zhuh muh ruh-POHZ | vreh-MAHⁿ', ['relief', 'que']),
  sent(1270, "Ce n'est qu'à minuit que le train est enfin parti.", 'It was not until midnight that the train finally left.',
    '/sə nɛ ka mi.nɥi kə lə tʁɛ̃ ɛ.tɑ̃.fɛ̃ paʁ.ti/', 'suh neh ka mee-NWEE | kuh luh TREHⁿ | eh-tahⁿ-fehⁿ par-TEE', ['relief', 'pas-avant'], FCVDR),
  sent(1271, "Ce n'est qu'après la signature que le paiement sera effectué.", 'Payment will only be made after signature.',
    '/sə nɛ ka.pʁɛ la si.ɲa.tyʁ kə lə pɛ.mɑ̃ sə.ʁa e.fɛk.tɥe/', 'suh neh ka-PREH la see-nya-TÜR | kuh luh peh-MAHⁿ | suh-ra ay-fek-TWAY', ['relief', 'notice']),
  sent(1272, "Il n'y a que les étudiants qui bénéficient de ce tarif.", 'Only students are entitled to this rate.',
    '/il nja kə le.ze.ty.djɑ̃ ki be.ne.fi.si də sə ta.ʁif/', 'eel nya kuh lay-zay-tü-DYAHⁿ | kee bay-nay-fee-SEE | duh suh ta-REEF', ['relief', 'indicatif'], FCVDR),
  sent(1273, "Il n'y a qu'une chose que je te demande : sois à l'heure.", 'There is only one thing I ask of you: be on time.',
    '/il nja kyn ʃoz kə ʒə tə də.mɑ̃d swa a lœʁ/', 'eel nya künn SHOHZ | kuh zhuh tuh duh-MAHⁿD | swa a LUHR', ['relief']),
  rule(1274, "Après il n'y a que… qui, le subjonctif juge, l'indicatif constate.", 'After il n’y a que… qui, the subjunctive judges, the indicative states.',
    '/a.pʁɛ il nja kə ki lə syb.ʒɔ̃k.tif ʒyʒ lɛ̃.di.ka.tif kɔ̃s.tat/', 'a-PREH | eel nya kuh KEE | luh süb-zhohⁿk-teef ZHÜZH | lehⁿ-dee-ka-TEEF kohⁿs-TAT',
    "« Il n'y a que toi qui puisses m'aider » ou « qui peux » ?",
    "Les deux se disent. Puisses juge que tu es le seul possible ; peux constate un fait. C'est la règle de le seul qui, vue dans la leçon 6 du B2.",
    ['relief', 'mode']),
  rule(1275, "Ce n'est que… que veut dire : pas avant ce moment.", 'Ce n’est que… que means: not before that moment.',
    '/sə nɛ kə kə vø diʁ pa.za.vɑ̃ sə mɔ.mɑ̃/', 'suh neh KUH | KUH veu DEER | pa-za-VAHⁿ suh mo-MAHⁿ',
    '« It was not until midnight that the train left » : comment le dire ?',
    "Ce n'est qu'à minuit que le train est parti. Que deux fois : devant le moment, puis devant la phrase, à l'indicatif.",
    ['relief', 'pas-avant']),
  sent(1276, "Il n'y a que Paul qui sache où sont les clés.", 'Paul is the only one who knows where the keys are.',
    '/il nja kə pɔl ki saʃ u sɔ̃ le kle/', 'eel nya kuh POL | kee SASH | oo sohⁿ lay KLAY', ['relief', 'subjonctif'], FCVDR),
  sent(1277, "Il n'y a que dans ce quartier qu'on trouve encore des loyers abordables.", 'This is the only neighbourhood where you still find affordable rents.',
    '/il nja kə dɑ̃ sə kaʁ.tje kɔ̃ tʁuv ɑ̃.kɔʁ de lwa.je a.bɔʁ.dabl/', 'eel nya kuh dahⁿ suh kar-TYAY | kohⁿ TROOV ahⁿ-KOR | day lwa-YAY a-bor-DABL', ['relief', 'lieu']),
  sent(1278, "Ce n'est qu'en lisant le contrat que j'ai vu la clause.", 'It was only when I read the contract that I saw the clause.',
    '/sə nɛ kɑ̃ li.zɑ̃ lə kɔ̃.tʁa kə ʒe vy la kloz/', 'suh neh kahⁿ lee-ZAHⁿ luh kohⁿ-TRA | kuh zhay VÜ la KLOHZ', ['relief', 'gerondif']),
  gap(1279, "Il n'y a que vous qui puissiez signer ce document.", 'You are the only one who can sign this document.',
    '/il nja kə vu ki pɥi.sje si.ɲe sə do.ky.mɑ̃/', 'eel nya kuh VOO | kee pwee-SYAY | see-NYAY suh do-kü-MAHⁿ',
    "Il n'y a que vous qui ___ signer ce document. (pouvoir · un jugement)",
    "Puissiez : le subjonctif juge que vous êtes le seul possible. Pouvez se dit aussi, pour constater. EN: puissiez judges; pouvez states.",
    ['relief', 'subjonctif'], FCVDR),
  sent(1280, 'Seule la directrice peut signer ce document.', 'Only the director can sign this document.',
    '/sœl la di.ʁɛk.tʁis pø si.ɲe sə do.ky.mɑ̃/', 'suhl la dee-rek-TREESS | peu see-NYAY | suh do-kü-MAHⁿ', ['seul', 'sujet']),
  sent(1281, "Ce n'est que la deuxième fois que je viens ici.", 'It is only the second time I have been here.',
    '/sə nɛ kə la dø.zjɛm fwa kə ʒə vjɛ̃ i.si/', 'suh neh kuh la deu-ZYEM FWA | kuh zhuh vyehⁿ ee-SEE', ['relief']),
  sent(1282, "Il n'y a que les imbéciles qui ne changent pas d'avis.", 'Only fools never change their minds.',
    '/il nja kə le.zɛ̃.be.sil ki nə ʃɑ̃ʒ pa da.vi/', 'eel nya kuh lay-zehⁿ-bay-SEEL | kee nuh SHAHⁿZH pa da-VEE', ['relief', 'proverbe']),
];

/* ── ACT 6 · PAS SEULEMENT : NE… PAS QUE, NON SEULEMENT… MAIS (.1284-.1299) ── */

export const ACT6_ROWS: Row[] = [
  sent(1284, "Il n'y a pas que le salaire dans un emploi.", 'Pay is not the only thing that matters in a job.',
    '/il nja pa kə lə sa.lɛʁ dɑ̃.zœ̃.nɑ̃.plwa/', 'eel nya PA kuh | luh sa-LEHR | dahⁿ-zuhⁿ-nahⁿ-PLWA', ['pas-que'], FCVDR),
  sent(1285, 'Je ne mange pas que des légumes.', 'I do not eat only vegetables.',
    '/ʒə nə mɑ̃ʒ pa kə de le.ɡym/', 'zhuh nuh MAHⁿZH PA | kuh day lay-GÜM', ['pas-que', 'contraste']),
  sent(1286, 'Je ne mange que des légumes.', 'I only eat vegetables.',
    '/ʒə nə mɑ̃ʒ kə de le.ɡym/', 'zhuh nuh MAHⁿZH | kuh day lay-GÜM', ['que', 'contraste']),
  sent(1287, 'Ce poste ne demande pas seulement des compétences techniques.', 'This job does not only call for technical skills.',
    '/sə pɔst nə də.mɑ̃d pa sœl.mɑ̃ de kɔ̃.pe.tɑ̃s tɛk.nik/', 'suh POST | nuh duh-MAHⁿD pa suhl-MAHⁿ | day kohⁿ-pay-TAHⁿS tek-NEEK', ['pas-seulement']),
  sent(1288, 'Non seulement le train était en retard, mais il était complet.', 'Not only was the train late, it was full as well.',
    '/nɔ̃ sœl.mɑ̃ lə tʁɛ̃ e.tɛ.tɑ̃ ʁə.taʁ mɛ.zi.le.tɛ kɔ̃.plɛ/', 'nohⁿ suhl-MAHⁿ | luh TREHⁿ ay-teh-tahⁿ ruh-TAR | meh-zee-lay-teh kohⁿ-PLEH', ['non-seulement'], FCVDR),
  sent(1289, "Non seulement vous serez remboursé, mais vous recevrez aussi un bon d'achat.", 'Not only will you be refunded, you will also receive a voucher.',
    '/nɔ̃ sœl.mɑ̃ vu sə.ʁe ʁɑ̃.buʁ.se mɛ vu ʁə.sə.vʁe o.si œ̃ bɔ̃ da.ʃa/', 'nohⁿ suhl-MAHⁿ | voo suh-ray rahⁿ-boor-SAY | meh voo ruh-suh-VRAY oh-SEE | uhⁿ bohⁿ da-SHA', ['non-seulement', 'courrier']),
  sent(1290, 'Cette mesure touche non seulement les salariés, mais aussi leurs familles.', 'This measure affects not only employees but also their families.',
    '/sɛt mə.zyʁ tuʃ nɔ̃ sœl.mɑ̃ le sa.la.ʁje mɛ.zo.si lœʁ fa.mij/', 'set muh-ZÜR TOOSH | nohⁿ suhl-MAHⁿ lay sa-la-RYAY | meh-zoh-SEE luhr fa-MEE', ['non-seulement', 'nom']),
  sent(1291, "Il faut non seulement réserver, mais encore payer d'avance.", 'You must not only book but also pay in advance.',
    '/il fo nɔ̃ sœl.mɑ̃ ʁe.zɛʁ.ve mɛ.zɑ̃.kɔʁ pe.je da.vɑ̃s/', 'eel FOH | nohⁿ suhl-mahⁿ ray-zehr-VAY | meh-zahⁿ-KOR | pay-YAY da-VAHⁿS', ['non-seulement'], FCVR, SO),
  rule(1292, 'Ne… pas que veut dire pas seulement : courant, et accepté.', 'Ne… pas que means not only: everyday, and accepted.',
    '/nə pa kə vø diʁ pa sœl.mɑ̃ ku.ʁɑ̃ e ak.sɛp.te/', 'nuh pa KUH | veu deer pa suhl-MAHⁿ | koo-RAHⁿ | ay ak-sep-TAY',
    "« Il n'y a pas que le salaire » : que dit la phrase ?",
    "Que le salaire n'est pas la seule chose qui compte. Ne… pas que se dit partout ; quelques puristes le critiquent, et l'écrit soigné préfère pas seulement.",
    ['pas-que', 'registre']),
  rule(1293, 'Non seulement… mais : deux parties de même forme.', 'Non seulement… mais: two parts with the same shape.',
    '/nɔ̃ sœl.mɑ̃ mɛ dø paʁ.ti də mɛm fɔʁm/', 'nohⁿ suhl-MAHⁿ | MEH | deu par-TEE | duh mem FORM',
    '« Non seulement il parle anglais, mais… » : quelle suite ?',
    "Une phrase après non seulement, une phrase après mais : mais il parle aussi arabe. Mais aussi, mais encore ou mais également renforcent.",
    ['non-seulement']),
  sent(1294, 'Le contrat ne couvre pas que les pannes : il couvre aussi le vol.', 'The contract does not only cover breakdowns: it covers theft too.',
    '/lə kɔ̃.tʁa nə kuvʁ pa kə le pan il kuvʁ o.si lə vɔl/', 'luh kohⁿ-TRA | nuh KOOVR pa kuh lay PANN | eel koovr oh-SEE luh VOL', ['pas-que']),
  sent(1295, "L'offre concerne non seulement les nouveaux clients, mais également les anciens.", 'The offer applies not only to new customers but also to existing ones.',
    '/lɔfʁ kɔ̃.sɛʁn nɔ̃ sœl.mɑ̃ le nu.vo kli.jɑ̃ mɛ.ze.ɡal.mɑ̃ le.zɑ̃.sjɛ̃/', 'LOFR kohⁿ-SEHRN | nohⁿ suhl-mahⁿ lay noo-voh klee-YAHⁿ | meh-zay-gal-MAHⁿ | lay-zahⁿ-SYEHⁿ', ['non-seulement', 'courrier']),
  gap(1296, 'Non seulement elle a répondu, mais elle a aussi proposé une solution.', 'Not only did she reply, she also suggested a solution.',
    '/nɔ̃ sœl.mɑ̃ ɛ.la ʁe.pɔ̃.dy mɛ ɛ.la o.si pʁɔ.po.ze yn sɔ.ly.sjɔ̃/', 'nohⁿ suhl-MAHⁿ | eh-la ray-pohⁿ-DÜ | meh eh-la oh-SEE | pro-poh-ZAY ün so-lü-SYOHⁿ',
    '___ elle a répondu, ___ elle a aussi proposé une solution. (not only… but)',
    "Non seulement… mais : la première partie annonce, la seconde ajoute plus fort. EN: not only… but.",
    ['non-seulement'], FCVDR),
  sent(1297, 'Je ne travaille pas seulement le week-end.', 'I do not only work at weekends.',
    '/ʒə nə tʁa.vaj pa sœl.mɑ̃ lə wi.kɛnd/', 'zhuh nuh tra-VAHY | pa suhl-MAHⁿ | luh wee-KEND', ['pas-seulement']),
  rule(1298, 'Ne… que garde la limite ; ne… pas que l’enlève.', 'Ne… que keeps the limit; ne… pas que removes it.',
    '/nə kə ɡaʁd la li.mit nə pa kə lɑ̃.lɛv/', 'nuh KUH | gard la lee-MEET | nuh pa KUH | lahⁿ-LEV',
    '« Il ne boit que du thé », « il ne boit pas que du thé » : lequel boit autre chose ?',
    "Le second. Ne… pas que enlève la limite : du thé, et autre chose aussi. Le premier ne boit que du thé.",
    ['pas-que', 'contraste']),
  sent(1299, "Ce n'est pas seulement une question d'argent.", 'It is not only a question of money.',
    '/sə nɛ pa sœl.mɑ̃ yn kɛs.tjɔ̃ daʁ.ʒɑ̃/', 'suh neh pa suhl-MAHⁿ | ün kes-TYOHⁿ dar-ZHAHⁿ', ['pas-seulement']),
];

/* ── ACT 7 · SAUF, EXCEPTÉ, HORMIS, À PART (.1301-.1316) ────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(1301, "Toute l'équipe était présente, sauf le directeur.", 'The whole team was there, except the director.',
    '/tut le.kip e.tɛ pʁe.zɑ̃t sof lə di.ʁɛk.tœʁ/', 'toot lay-KEEP | ay-teh pray-ZAHⁿT | sohf luh dee-rek-TUHR', ['sauf'], FCVDR),
  sent(1302, 'La bibliothèque est ouverte tous les jours, excepté le dimanche.', 'The library is open every day, except Sundays.',
    '/la bi.bli.jɔ.tɛk ɛ.tu.vɛʁt tu le ʒuʁ ɛk.sɛp.te lə di.mɑ̃ʃ/', 'la bee-blee-yo-TEK | eh-too-VEHRT too lay ZHOOR | ek-sep-TAY luh dee-MAHⁿSH', ['excepte']),
  sent(1303, "Hormis quelques retards, le chantier s'est bien déroulé.", 'Apart from a few delays, the building work went well.',
    '/ɔʁ.mi kɛl.kə ʁə.taʁ lə ʃɑ̃.tje sɛ bjɛ̃ de.ʁu.le/', 'or-MEE kel-kuh ruh-TAR | luh shahⁿ-TYAY | seh byehⁿ day-roo-LAY', ['hormis'], FCVR, SO),
  sent(1304, 'À part toi, personne ne connaît le code.', 'Apart from you, nobody knows the code.',
    '/a paʁ twa pɛʁ.sɔn nə kɔ.nɛ lə kɔd/', 'a par TWA | pehr-SONN nuh ko-NEH | luh KOD', ['a-part'], FCVDR),
  sent(1305, "Mis à part le prix, l'hôtel était parfait.", 'Apart from the price, the hotel was perfect.',
    '/mi.za paʁ lə pʁi lo.tɛl e.tɛ paʁ.fɛ/', 'mee-za par luh PREE | loh-TEL ay-teh par-FEH', ['mis-a-part']),
  sent(1306, "Tous les cours sont maintenus, à l'exception de celui du jeudi.", 'All classes are going ahead, except the Thursday one.',
    '/tu le kuʁ sɔ̃ mɛ̃t.ny a lɛk.sɛp.sjɔ̃ də sə.lɥi dy ʒø.di/', 'too lay KOOR | sohⁿ mehⁿt-NÜ | a lek-sep-SYOHⁿ | duh suh-LWEE dü zheu-DEE', ['exception', 'notice']),
  sent(1307, "Les frais de port sont offerts, sauf pour les envois à l'étranger.", 'Postage is free, except for parcels sent abroad.',
    '/le fʁɛ də pɔʁ sɔ̃.tɔ.fɛʁ sof puʁ le.zɑ̃.vwa a le.tʁɑ̃.ʒe/', 'lay FREH duh POR | sohⁿ-to-FEHR | sohf poor lay-zahⁿ-VWA | a lay-trahⁿ-ZHAY', ['sauf', 'notice']),
  sent(1308, "Les enfants exceptés, tous les visiteurs paient l'entrée.", 'Children excepted, all visitors pay for admission.',
    '/le.zɑ̃.fɑ̃ ɛk.sɛp.te tu le vi.zi.tœʁ pɛ lɑ̃.tʁe/', 'lay-zahⁿ-fahⁿ ek-sep-TAY | too lay vee-zee-TUHR | peh lahⁿ-TRAY', ['excepte', 'accord'], FCVR, SO),
  rule(1309, 'Excepté, devant le nom, ne s’accorde pas ; après le nom, il s’accorde.', 'Excepté does not agree before the noun; after the noun, it does.',
    '/ɛk.sɛp.te də.vɑ̃ lə nɔ̃ nə sa.kɔʁ pa a.pʁɛ lə nɔ̃ il sa.kɔʁ/', 'ek-sep-TAY | duh-vahⁿ luh NOHⁿ | nuh sa-KOR PA | a-preh luh NOHⁿ | eel sa-KOR',
    '« ___ les boissons » et « les boissons ___ » : quelle forme d’excepté ?',
    "Excepté les boissons : devant le nom, c'est une préposition, invariable comme sauf. Les boissons exceptées : après le nom, il s'accorde.",
    ['excepte', 'accord']),
  rule(1310, 'Sauf et à part sont courants ; excepté, hormis et à l’exception de sont plus soutenus.', 'Sauf and à part are everyday; excepté, hormis and à l’exception de are more formal.',
    '/sof e a paʁ sɔ̃ ku.ʁɑ̃ ɛk.sɛp.te ɔʁ.mi e a lɛk.sɛp.sjɔ̃ də sɔ̃ ply su.tə.ny/', 'SOHF ay a PAR | sohⁿ koo-RAHⁿ | ek-sep-TAY or-MEE | ay a lek-sep-SYOHⁿ DUH | sohⁿ plü soo-tuh-NÜ',
    'Dans un règlement officiel : à part ou à l’exception de ?',
    "À l'exception de, ou excepté : le registre d'un texte officiel. À part se dit surtout à l'oral. Sauf va partout.",
    ['registre']),
  sent(1311, 'Sauf avis contraire, la réunion aura lieu à dix heures.', 'Unless you hear otherwise, the meeting will take place at ten.',
    '/sof a.vi kɔ̃.tʁɛʁ la ʁe.y.njɔ̃ o.ʁa ljø a di.zœʁ/', 'sohf a-vee kohⁿ-TREHR | la ray-ü-NYOHⁿ | oh-ra LYEU | a dee-ZUHR', ['sauf', 'formule']),
  sent(1312, 'Sauf erreur de notre part, votre facture de mars reste impayée.', 'Unless we are mistaken, your March invoice is still unpaid.',
    '/sof e.ʁœʁ də nɔtʁ paʁ vɔtʁ fak.tyʁ də maʁs ʁɛs.tɛ̃.pɛ.je/', 'sohf ay-RUHR duh notr PAR | votr fak-TÜR duh MARS | res-tehⁿ-peh-YAY', ['sauf', 'formule', 'courrier']),
  sent(1313, "Personne n'a appelé, sauf ta mère.", 'Nobody called except your mother.',
    '/pɛʁ.sɔn na a.pə.le sof ta mɛʁ/', 'pehr-SONN na a-puh-LAY | sohf ta MEHR', ['sauf', 'negation']),
  sent(1314, 'Nous livrons partout, sauf dans les îles.', 'We deliver everywhere, except to the islands.',
    '/nu li.vʁɔ̃ paʁ.tu sof dɑ̃ le.zil/', 'noo lee-VROHⁿ par-TOO | sohf dahⁿ lay-ZEEL', ['sauf', 'notice']),
  sent(1315, 'Tout est compris, excepté les boissons.', 'Everything is included except drinks.',
    '/tu.tɛ kɔ̃.pʁi ɛk.sɛp.te le bwa.sɔ̃/', 'too-teh kohⁿ-PREE | ek-sep-TAY lay bwa-SOHⁿ', ['excepte', 'notice'], FCVDR),
  gap(1316, 'Les boissons exceptées, tout est compris.', 'Drinks excepted, everything is included.',
    '/le bwa.sɔ̃ ɛk.sɛp.te tu.tɛ kɔ̃.pʁi/', 'lay bwa-SOHⁿ ek-sep-TAY | too-teh kohⁿ-PREE',
    'Les boissons ___ , tout est compris. (excepter · après le nom)',
    "Exceptées : après le nom, excepté s'accorde, au féminin pluriel comme boissons. EN: after the noun, it agrees.",
    ['excepte', 'accord'], FCVR, SO),
];

/* ── ACT 8 · SINON, SI CE N'EST, SAUF QUE (.1318-.1333) ─────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1318, 'Personne, sinon lui, ne pouvait ouvrir ce coffre.', 'No one but him could open this safe.',
    '/pɛʁ.sɔn si.nɔ̃ lɥi nə pu.vɛ u.vʁiʁ sə kɔfʁ/', 'pehr-SONN | see-nohⁿ LWEE | nuh poo-VEH | oo-vreer suh KOFR', ['sinon'], FCVR, SO),
  sent(1319, "Il ne lui restait rien, si ce n'est ses souvenirs.", 'He had nothing left but his memories.',
    '/il nə lɥi ʁɛs.tɛ ʁjɛ̃ si sə nɛ se su.və.niʁ/', 'eel nuh lwee res-TEH RYEHⁿ | see suh NEH | say soo-vuh-NEER', ['si-ce-nest'], FCVR, SO),
  sent(1320, "C'est l'un des meilleurs restaurants de la ville, si ce n'est le meilleur.", 'It is one of the best restaurants in town, if not the best.',
    '/sɛ lœ̃ de mɛ.jœʁ ʁɛs.to.ʁɑ̃ də la vil si sə nɛ lə mɛ.jœʁ/', 'seh luhⁿ day meh-YUHR res-toh-RAHⁿ | duh la VEEL | see suh NEH | luh meh-YUHR', ['si-ce-nest'], FCVDR),
  sent(1321, "Le voyage s'est bien passé, sauf que nos valises sont arrivées le lendemain.", 'The trip went well, except that our suitcases arrived the next day.',
    '/lə vwa.jaʒ sɛ bjɛ̃ pa.se sof kə no va.liz sɔ̃.ta.ʁi.ve lə lɑ̃d.mɛ̃/', 'luh vwa-YAZH | seh byehⁿ pa-SAY | sohf kuh noh va-LEEZ | sohⁿ-ta-ree-VAY | luh lahⁿd-MEHⁿ', ['sauf-que'], FCVDR),
  sent(1322, "Tout était prêt, si ce n'est que la salle n'était pas chauffée.", 'Everything was ready, except that the room was not heated.',
    '/tu.te.tɛ pʁɛ si sə nɛ kə la sal ne.tɛ pa ʃo.fe/', 'too-tay-teh PREH | see suh neh KUH | la SAL | nay-teh pa shoh-FAY', ['si-ce-nest'], FCVR, SO),
  sent(1323, "Le logement est idéal, à ceci près qu'il est loin de la gare.", 'The accommodation is ideal, except that it is far from the station.',
    '/lə lɔʒ.mɑ̃ ɛ.ti.de.al a sə.si pʁɛ ki.lɛ lwɛ̃ də la ɡaʁ/', 'luh lozh-MAHⁿ eh-tee-day-AL | a suh-see PREH | kee-leh LWEHⁿ | duh la GAR', ['a-ceci-pres'], FCVR, SO),
  sent(1324, "Je viendrai à la fête, sauf s'il pleut.", 'I will come to the party, unless it rains.',
    '/ʒə vjɛ̃.dʁe a la fɛt sof sil plø/', 'zhuh vyehⁿ-DRAY a la FET | sohf seel PLEU', ['sauf-si', 'contraste'], FCVDR),
  sent(1325, "Le colis est arrivé, sauf qu'il était abîmé.", 'The parcel arrived, except that it was damaged.',
    '/lə kɔ.li ɛ.ta.ʁi.ve sof ki.le.tɛ.ta.bi.me/', 'luh ko-LEE | eh-ta-ree-VAY | sohf kee-lay-teh-ta-bee-MAY', ['sauf-que', 'contraste']),
  rule(1326, 'Sauf que pose un fait ; sauf si ouvre un cas possible.', 'Sauf que states a fact; sauf si opens a possible case.',
    '/sof kə poz œ̃ fɛ sof si u.vʁ œ̃ ka pɔ.sibl/', 'sohf KUH | pohz uhⁿ FEH | sohf SEE | oovr uhⁿ KA po-SEEBL',
    '« Le colis est arrivé, sauf … il était abîmé » : que ou si ?',
    "Que : c'est un fait, le colis était abîmé. Si ouvre un cas qui peut arriver : je viendrai, sauf s'il pleut. Les deux prennent l'indicatif.",
    ['sauf-que', 'sauf-si']),
  rule(1327, 'Sinon : dans le cas contraire, ou, en registre soutenu, excepté.', 'Sinon: otherwise, or, in formal French, except.',
    '/si.nɔ̃ dɑ̃ lə ka kɔ̃.tʁɛʁ u ɑ̃ ʁə.ʒistʁ su.tə.ny ɛk.sɛp.te/', 'see-NOHⁿ | dahⁿ luh KA kohⁿ-TREHR | oo ahⁿ ruh-ZHEESTR soo-tuh-NÜ | ek-sep-TAY',
    '« Personne, sinon lui » : que veut dire sinon ici ?',
    "Excepté lui : un emploi soutenu, surtout après personne ou rien. Au quotidien, sinon veut dire dans le cas contraire : réserve, sinon il n'y aura plus de place.",
    ['sinon']),
  sent(1328, 'Que faire, sinon attendre ?', 'What can we do but wait?',
    '/kə fɛʁ si.nɔ̃ a.tɑ̃dʁ/', 'kuh FEHR | see-nohⁿ a-TAHⁿDR', ['sinon'], FCVR, SO),
  sent(1329, "Il n'a rien dit, sinon qu'il était fatigué.", 'He said nothing, except that he was tired.',
    '/il na ʁjɛ̃ di si.nɔ̃ ki.le.tɛ fa.ti.ɡe/', 'eel na ryehⁿ DEE | see-nohⁿ kee-lay-teh fa-tee-GAY', ['sinon'], FCVR, SO),
  sent(1330, "Aucun bruit, si ce n'est le vent dans les arbres.", 'Not a sound, except the wind in the trees.',
    '/o.kœ̃ bʁɥi si sə nɛ lə vɑ̃ dɑ̃ le.zaʁbʁ/', 'oh-kuhⁿ BRWEE | see suh NEH | luh VAHⁿ dahⁿ lay-ZARBR', ['si-ce-nest', 'litteraire'], FCVR, SO),
  sent(1331, "La réunion était utile, sauf qu'elle a duré trois heures.", 'The meeting was useful, except that it lasted three hours.',
    '/la ʁe.y.njɔ̃ e.tɛ.ty.til sof kɛ.la dy.ʁe tʁwa.zœʁ/', 'la ray-ü-NYOHⁿ | ay-teh-tü-TEEL | sohf keh-la dü-RAY | trwa-ZUHR', ['sauf-que']),
  sent(1332, "Répondez avant vendredi, sinon votre place sera attribuée à quelqu'un d'autre.", 'Reply before Friday, otherwise your place will be given to someone else.',
    '/ʁe.pɔ̃.de a.vɑ̃ vɑ̃.dʁə.di si.nɔ̃ vɔtʁ plas sə.ʁa a.tʁi.by.e a kɛl.kœ̃ dotʁ/', 'ray-pohⁿ-DAY | a-vahⁿ vahⁿ-druh-DEE | see-NOHⁿ | votr PLASS suh-ra a-tree-bü-AY | a kel-kuhⁿ DOHTR', ['sinon', 'notice']),
  gap(1333, "Tout s'est bien passé, si ce n'est que le traiteur est arrivé en retard.", 'Everything went well, except that the caterer arrived late.',
    '/tu sɛ bjɛ̃ pa.se si sə nɛ kə lə tʁɛ.tœʁ ɛ.ta.ʁi.ve ɑ̃ ʁə.taʁ/', 'too seh byehⁿ pa-SAY | see suh neh KUH | luh treh-TUHR | eh-ta-ree-VAY ahⁿ ruh-TAR',
    "Tout s'est bien passé, ___ le traiteur est arrivé en retard. (except that · soutenu)",
    "Si ce n'est que + indicatif : un fait qui fait exception. À l'oral : sauf que. EN: except that, formal.",
    ['si-ce-nest'], FCVR, SO),
];

/* ── ACT 9 · SAUF SI, EXCEPTÉ SI (.1335-.1350) ──────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1335, "Je passerai te voir demain, sauf si j'ai trop de travail.", 'I will drop by tomorrow, unless I have too much work.',
    '/ʒə pa.sə.ʁe tə vwaʁ də.mɛ̃ sof si ʒe tʁo də tʁa.vaj/', 'zhuh pa-suh-RAY tuh VWAR duh-MEHⁿ | sohf see zhay TROH duh tra-VAHY', ['sauf-si', 'present'], FCVDR),
  sent(1336, "Le vol partira à l'heure, sauf si la tempête s'aggrave.", 'The flight will leave on time, unless the storm gets worse.',
    '/lə vɔl paʁ.ti.ʁa a lœʁ sof si la tɑ̃.pɛt sa.ɡʁav/', 'luh VOL par-tee-RA a LUHR | sohf see la tahⁿ-PET sa-GRAV', ['sauf-si']),
  sent(1337, 'Sauf si vous préférez un autre créneau, le rendez-vous est confirmé.', 'Unless you would prefer another slot, the appointment is confirmed.',
    '/sof si vu pʁe.fe.ʁe œ̃.notʁ kʁe.no lə ʁɑ̃.de.vu ɛ kɔ̃.fiʁ.me/', 'sohf see voo pray-fay-RAY | uhⁿ-nohtr kray-NOH | luh rahⁿ-day-VOO | eh kohⁿ-feer-MAY', ['sauf-si', 'courrier']),
  sent(1338, 'Nous ne rembourserons pas le séjour, sauf si vous présentez un certificat médical.', 'We will not refund the stay unless you provide a medical certificate.',
    '/nu nə ʁɑ̃.buʁ.sə.ʁɔ̃ pa lə se.ʒuʁ sof si vu pʁe.zɑ̃.te œ̃ sɛʁ.ti.fi.ka me.di.kal/', 'noo nuh rahⁿ-boor-suh-ROHⁿ PA | luh say-ZHOOR | sohf see voo pray-zahⁿ-TAY | uhⁿ sehr-tee-fee-KA may-dee-KAL', ['sauf-si', 'courrier'], FCVDR),
  sent(1339, "Je ne sortirais pas par ce temps, sauf si c'était urgent.", 'I would not go out in this weather, unless it were urgent.',
    '/ʒə nə sɔʁ.ti.ʁɛ pa paʁ sə tɑ̃ sof si se.tɛ.tyʁ.ʒɑ̃/', 'zhuh nuh sor-tee-REH PA | par suh TAHⁿ | sohf see say-teh-tür-ZHAHⁿ', ['sauf-si', 'hypothese']),
  sent(1340, "Il a dit qu'il viendrait, sauf s'il ratait son train.", 'He said he would come, unless he missed his train.',
    '/i.la di kil vjɛ̃.dʁɛ sof sil ʁa.tɛ sɔ̃ tʁɛ̃/', 'ee-la DEE | keel vyehⁿ-DREH | sohf seel ra-TEH sohⁿ TREHⁿ', ['sauf-si', 'rapporte']),
  rule(1341, 'Sauf si est un si : l’indicatif, et les temps de si.', 'Sauf si is a si: the indicative, and the si tenses.',
    '/sof si ɛ.tœ̃ si lɛ̃.di.ka.tif e le tɑ̃ də si/', 'sohf SEE | eh-tuhⁿ SEE | lehⁿ-dee-ka-TEEF | ay lay TAHⁿ duh SEE',
    '« Sauf si le voyage … commencé » : ait ou a ?',
    "A commencé. Sauf si ne prend jamais le subjonctif, ni le futur, ni le conditionnel : sauf s'il pleut demain, sauf s'il pleuvait.",
    ['sauf-si']),
  rule(1342, 'Sauf si… dit la même chose que si… ne… pas.', 'Sauf si… says the same as si… ne… pas.',
    '/sof si di la mɛm ʃoz kə si nə pa/', 'sohf SEE | dee la mem SHOHZ | kuh SEE nuh PA',
    '« Je viendrai, sauf s’il pleut » : quelle phrase a le même sens ?',
    "Je viendrai s'il ne pleut pas. Sauf si met l'accent sur l'exception : en principe oui, sauf dans un cas.",
    ['sauf-si']),
  sent(1343, "Excepté s'il neige, les cours auront lieu normalement.", 'Unless it snows, classes will go ahead as usual.',
    '/ɛk.sɛp.te sil nɛʒ le kuʁ o.ʁɔ̃ ljø nɔʁ.mal.mɑ̃/', 'ek-sep-TAY seel NEZH | lay KOOR | oh-rohⁿ LYEU | nor-mal-MAHⁿ', ['excepte-si'], FCVR, SO),
  sent(1344, 'Les colis sont livrés en quarante-huit heures, sauf en cas de grève.', 'Parcels are delivered within forty-eight hours, except in the event of a strike.',
    '/le kɔ.li sɔ̃ li.vʁe ɑ̃ ka.ʁɑ̃t.ɥi.tœʁ sof ɑ̃ ka də ɡʁɛv/', 'lay ko-LEE sohⁿ lee-VRAY | ahⁿ ka-rahⁿt-wee-TUHR | sohf ahⁿ KA duh GREV', ['sauf-en-cas', 'notice']),
  sent(1345, "Sauf en cas d'urgence, merci de ne pas appeler après vingt heures.", 'Except in an emergency, please do not call after eight pm.',
    '/sof ɑ̃ ka dyʁ.ʒɑ̃s mɛʁ.si də nə pa.za.pə.le a.pʁɛ vɛ̃.tœʁ/', 'sohf ahⁿ ka dür-ZHAHⁿS | mehr-SEE | duh nuh pa-za-puh-LAY | a-preh vehⁿ-TUHR', ['sauf-en-cas', 'notice'], FCVDR),
  sent(1346, 'La piscine restera ouverte cet été, sauf si les travaux prennent du retard.', 'The pool will stay open this summer, unless the works fall behind.',
    '/la pi.sin ʁɛs.tə.ʁa u.vɛʁt sɛ.te.te sof si le tʁa.vo pʁɛn dy ʁə.taʁ/', 'la pee-SEEN | res-tuh-ra oo-VEHRT | seh-tay-TAY | sohf see lay tra-VOH | PRENN dü ruh-TAR', ['sauf-si']),
  gap(1347, "Nous partirons à huit heures, sauf s'il pleut.", 'We will leave at eight, unless it rains.',
    '/nu paʁ.ti.ʁɔ̃ a ɥi.tœʁ sof sil plø/', 'noo par-tee-ROHⁿ | a wee-TUHR | sohf seel PLEU',
    "Nous partirons à huit heures, sauf s'il ___ . (pleuvoir)",
    "Pleut, à l'indicatif présent : jamais le futur après sauf si, jamais le subjonctif. EN: present indicative.",
    ['sauf-si']),
  sent(1348, "Je signerai le contrat, sauf si les conditions changent d'ici là.", 'I will sign the contract, unless the terms change in the meantime.',
    '/ʒə si.ɲə.ʁe lə kɔ̃.tʁa sof si le kɔ̃.di.sjɔ̃ ʃɑ̃ʒ di.si la/', 'zhuh see-nyuh-RAY luh kohⁿ-TRA | sohf see lay kohⁿ-dee-SYOHⁿ | SHAHⁿZH dee-see LA', ['sauf-si']),
  sent(1349, 'Sauf si je me trompe, la réunion a été annulée.', 'Unless I am mistaken, the meeting has been cancelled.',
    '/sof si ʒə mə tʁɔ̃p la ʁe.y.njɔ̃ a e.te a.ny.le/', 'sohf see zhuh muh TROHⁿP | la ray-ü-NYOHⁿ | a ay-TAY a-nü-LAY', ['sauf-si']),
  sent(1350, 'Tu peux garder la voiture ce week-end, sauf si ta sœur en a besoin.', 'You can keep the car this weekend, unless your sister needs it.',
    '/ty pø ɡaʁ.de la vwa.tyʁ sə wi.kɛnd sof si ta sœʁ ɑ̃.na bə.zwɛ̃/', 'tü peu gar-DAY la vwa-TÜR | suh wee-KEND | sohf see ta SUHR | ahⁿ-na buh-ZWEHⁿ', ['sauf-si'], FCVDR),
];

/* ── ACT 10 · À MOINS QUE, À MOINS DE, SAUF À (.1352-.1367) ─────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1352, "Le concert aura lieu en plein air, à moins qu'il ne pleuve.", 'The concert will be held outdoors, unless it rains.',
    '/lə kɔ̃.sɛʁ o.ʁa ljø ɑ̃ plɛ.nɛʁ a mwɛ̃ kil nə plœv/', 'luh kohⁿ-SEHR | oh-ra LYEU | ahⁿ pleh-NEHR | a mwehⁿ keel nuh PLUHV', ['a-moins', 'expletif'], FCVDR),
  sent(1353, 'Je prendrai le train, à moins que tu puisses me conduire.', 'I will take the train, unless you can drive me.',
    '/ʒə pʁɑ̃.dʁe lə tʁɛ̃ a mwɛ̃ kə ty pɥis mə kɔ̃.dɥiʁ/', 'zhuh prahⁿ-DRAY luh TREHⁿ | a mwehⁿ kuh tü PWEESS | muh kohⁿ-DWEER', ['a-moins', 'sans-ne']),
  sent(1354, 'À moins que vous ne préfériez une autre date, la livraison est prévue lundi.', 'Unless you would prefer another date, delivery is planned for Monday.',
    '/a mwɛ̃ kə vu nə pʁe.fe.ʁje yn otʁ dat la li.vʁɛ.zɔ̃ ɛ pʁe.vy lœ̃.di/', 'a mwehⁿ kuh voo nuh pray-fay-RYAY | ün ohtr DAT | la lee-vreh-ZOHⁿ | eh pray-vü luhⁿ-DEE', ['a-moins', 'courrier']),
  sent(1355, "Il viendra, à moins qu'il ne soit malade.", 'He will come, unless he is ill.',
    '/il vjɛ̃.dʁa a mwɛ̃ kil nə swa ma.lad/', 'eel vyehⁿ-DRA | a mwehⁿ keel nuh swa ma-LAD', ['a-moins', 'expletif'], FCVDR),
  sent(1356, "Il viendra, à moins qu'il ne soit pas invité.", 'He will come, unless he is not invited.',
    '/il vjɛ̃.dʁa a mwɛ̃ kil nə swa pa.zɛ̃.vi.te/', 'eel vyehⁿ-DRA | a mwehⁿ keel nuh swa pa-zehⁿ-vee-TAY', ['a-moins', 'negation']),
  rule(1357, 'Après à moins que, ne ne nie rien : pour nier, il faut pas.', 'After à moins que, ne denies nothing: to negate, you need pas.',
    '/a.pʁɛ a mwɛ̃ kə nə nə ni ʁjɛ̃ puʁ nje il fo pa/', 'a-PREH | a mwehⁿ KUH | NUH nuh nee RYEHⁿ | poor NYAY | eel foh PA',
    "« À moins qu'il ne pleuve » : est-ce que la phrase dit qu'il ne pleut pas ?",
    "Non. Ce ne ne nie rien, et on peut l'omettre : à moins qu'il pleuve. Pour nier, il faut pas : à moins qu'il ne pleuve pas. La leçon 18 du B2 traite ce ne en détail.",
    ['a-moins', 'expletif']),
  rule(1358, 'À moins que + subjonctif ; à moins de + infinitif ou nom.', 'À moins que + subjunctive; à moins de + infinitive or noun.',
    '/a mwɛ̃ kə syb.ʒɔ̃k.tif a mwɛ̃ də ɛ̃.fi.ni.tif u nɔ̃/', 'a mwehⁿ KUH | süb-zhohⁿk-TEEF | a mwehⁿ DUH | ehⁿ-fee-nee-TEEF oo NOHⁿ',
    '« Je finirai ce soir, à moins … interrompue » : que ou de ?',
    "À moins d'être interrompue : un seul sujet, l'infinitif est plus léger. Avec deux sujets : à moins qu'on ne m'interrompe, au subjonctif.",
    ['a-moins']),
  sent(1359, "Je finirai ce soir, à moins d'être interrompue.", 'I will finish tonight, unless I am interrupted.',
    '/ʒə fi.ni.ʁe sə swaʁ a mwɛ̃ dɛ.tʁɛ̃.tɛ.ʁɔ̃.py/', 'zhuh fee-nee-RAY suh SWAR | a mwehⁿ deh-trehⁿ-teh-rohⁿ-PÜ', ['a-moins-de'], FCVDR),
  sent(1360, "À moins d'un miracle, l'équipe ne se qualifiera pas.", 'Barring a miracle, the team will not qualify.',
    '/a mwɛ̃ dœ̃ mi.ʁakl le.kip nə sə ka.li.fi.ʁa pa/', 'a mwehⁿ duhⁿ mee-RAKL | lay-KEEP | nuh suh ka-lee-fee-RA PA', ['a-moins-de', 'nom']),
  sent(1361, "Sauf à augmenter ses prix, l'entreprise ne pourra pas rembourser ses dettes.", 'Short of raising its prices, the company will not be able to pay off its debts.',
    '/sof a ɔɡ.mɑ̃.te se pʁi lɑ̃.tʁə.pʁiz nə pu.ʁa pa ʁɑ̃.buʁ.se se dɛt/', 'sohf a ohg-mahⁿ-TAY say PREE | lahⁿ-truh-PREEZ | nuh poo-RA PA | rahⁿ-boor-SAY say DET', ['sauf-a'], FCVR, SO),
  sent(1362, 'À moins que la direction ne revoie sa proposition, la grève continuera.', 'Unless management rethinks its offer, the strike will go on.',
    '/a mwɛ̃ kə la di.ʁɛk.sjɔ̃ nə ʁə.vwa sa pʁɔ.po.zi.sjɔ̃ la ɡʁɛv kɔ̃.ti.ny.ʁa/', 'a mwehⁿ kuh la dee-rek-SYOHⁿ | nuh ruh-VWA sa pro-poh-zee-SYOHⁿ | la GREV | kohⁿ-tee-nü-RA', ['a-moins']),
  sent(1363, "Nous annulerons la sortie, à moins que la météo ne s'améliore.", 'We will cancel the outing, unless the weather improves.',
    '/nu.za.nyl.ʁɔ̃ la sɔʁ.ti a mwɛ̃ kə la me.te.o nə sa.me.ljɔʁ/', 'noo-za-nül-ROHⁿ la sor-TEE | a mwehⁿ kuh la may-tay-OH | nuh sa-may-LYOR', ['a-moins']),
  sent(1364, "Vous serez prélevé le cinq de chaque mois, à moins que vous n'ayez choisi le paiement annuel.", 'You will be debited on the fifth of each month, unless you have chosen to pay yearly.',
    '/vu sə.ʁe pʁe.lə.ve lə sɛ̃k də ʃak mwa a mwɛ̃ kə vu nɛ.je ʃwa.zi lə pɛ.mɑ̃ a.nɥɛl/', 'voo suh-ray pray-luh-VAY | luh SEHⁿK duh shak MWA | a mwehⁿ kuh voo neh-YAY shwa-ZEE | luh peh-MAHⁿ a-NWEL', ['a-moins', 'passe']),
  gap(1365, "Je t'attendrai, à moins que tu ne sois très en retard.", 'I will wait for you, unless you are very late.',
    '/ʒə ta.tɑ̃.dʁe a mwɛ̃ kə ty nə swa tʁɛ.zɑ̃ ʁə.taʁ/', 'zhuh ta-tahⁿ-DRAY | a mwehⁿ kuh tü nuh SWA | treh-zahⁿ ruh-TAR',
    "Je t'attendrai, à moins que tu ne ___ très en retard. (être)",
    "Sois : à moins que veut le subjonctif. Le ne ne nie rien, tu peux l'omettre. EN: subjunctive; the ne is optional.",
    ['a-moins'], FCVDR),
  sent(1366, "À moins de réserver aujourd'hui, vous n'aurez plus de place.", 'Unless you book today, there will be no seats left.',
    '/a mwɛ̃ də ʁe.zɛʁ.ve o.ʒuʁ.dɥi vu no.ʁe ply də plas/', 'a mwehⁿ duh ray-zehr-VAY | oh-zhoor-DWEE | voo noh-RAY plü duh PLASS', ['a-moins-de']),
  sent(1367, "À moins qu'on ne me prouve le contraire, je maintiens ma position.", 'Unless someone proves me wrong, I stand by my position.',
    '/a mwɛ̃ kɔ̃ nə mə pʁuv lə kɔ̃.tʁɛʁ ʒə mɛ̃.tjɛ̃ ma po.zi.sjɔ̃/', 'a mwehⁿ kohⁿ nuh muh PROOV | luh kohⁿ-TREHR | zhuh mehⁿ-TYEHⁿ ma po-zee-SYOHⁿ', ['a-moins']),
];

/* ── ACT 11 · À CONDITION QUE, FAUTE DE : LA CARTE (.1369-.1384) ─────────── */

export const ACT11_ROWS: Row[] = [
  sent(1369, "Vous pouvez échanger l'article, à condition de garder le ticket de caisse.", 'You can exchange the item, provided you keep the receipt.',
    '/vu pu.ve e.ʃɑ̃.ʒe laʁ.tikl a kɔ̃.di.sjɔ̃ də ɡaʁ.de lə ti.kɛ də kɛs/', 'voo poo-VAY ay-shahⁿ-ZHAY lar-TEEKL | a kohⁿ-dee-SYOHⁿ | duh gar-DAY luh tee-KEH duh KESS', ['condition', 'infinitif'], FCVDR),
  sent(1370, "Vous pouvez échanger l'article, à condition que l'étiquette soit intacte.", 'You can exchange the item, provided the label is intact.',
    '/vu pu.ve e.ʃɑ̃.ʒe laʁ.tikl a kɔ̃.di.sjɔ̃ kə le.ti.kɛt swa.tɛ̃.takt/', 'voo poo-VAY ay-shahⁿ-ZHAY lar-TEEKL | a kohⁿ-dee-SYOHⁿ | kuh lay-tee-KET | swa-tehⁿ-TAKT', ['condition', 'subjonctif']),
  sent(1371, "Faute de paiement avant le dix, l'abonnement sera suspendu.", 'Failing payment before the tenth, the subscription will be suspended.',
    '/fot də pɛ.mɑ̃ a.vɑ̃ lə dis la.bɔn.mɑ̃ sə.ʁa sys.pɑ̃.dy/', 'foht duh peh-MAHⁿ | a-vahⁿ luh DEESS | la-bonn-MAHⁿ | suh-ra süs-pahⁿ-DÜ', ['faute-de', 'notice'], FCVDR),
  sent(1372, 'Faute de place, nous ne pouvons pas accepter votre inscription.', 'For lack of space, we cannot accept your registration.',
    '/fot də plas nu nə pu.vɔ̃ pa.zak.sɛp.te vɔ.tʁɛ̃s.kʁip.sjɔ̃/', 'foht duh PLASS | noo nuh poo-VOHⁿ | pa-zak-sep-TAY | vo-trehⁿs-kreep-SYOHⁿ', ['faute-de', 'courrier']),
  sent(1373, 'Merci de régler cette somme sous huit jours, faute de quoi des frais seront appliqués.', 'Please pay this sum within a week, failing which charges will apply.',
    '/mɛʁ.si də ʁe.ɡle sɛt sɔm su ɥi ʒuʁ fot də kwa de fʁɛ sə.ʁɔ̃.ta.pli.ke/', 'mehr-SEE | duh ray-GLAY set SOM | soo wee ZHOOR | foht duh KWA | day FREH | suh-rohⁿ-ta-plee-KAY', ['faute-de-quoi', 'courrier'], FCVR, SO),
  rule(1374, 'À condition que ouvre la porte ; à moins que la ferme.', 'À condition que opens the door; à moins que closes it.',
    '/a kɔ̃.di.sjɔ̃ kə u.vʁ la pɔʁt a mwɛ̃ kə la fɛʁm/', 'a kohⁿ-dee-syohⁿ KUH | oovr la PORT | a mwehⁿ KUH | la FEHRM',
    '« Tu peux venir, … tu me préviennes » : à condition que ou à moins que ?',
    "À condition que : la seule façon d'entrer. À moins que : le seul cas où l'on n'entre pas. Les deux veulent le subjonctif ; sauf si veut l'indicatif.",
    ['condition', 'carte']),
  rule(1375, 'Faute de + nom ou infinitif : parce qu’il manque quelque chose.', 'Faute de + noun or infinitive: because something is missing.',
    '/fot də nɔ̃ u ɛ̃.fi.ni.tif paʁs kil mɑ̃k kɛl.kə ʃoz/', 'foht DUH | NOHⁿ oo ehⁿ-fee-nee-TEEF | pars keel MAHⁿK kel-kuh SHOHZ',
    '« Faute de … , l’abonnement sera suspendu » : que peut suivre faute de ?',
    "Un nom (faute de paiement) ou un infinitif (faute d'avoir payé), jamais une phrase. Faute de quoi relie deux phrases : sinon, en langue administrative.",
    ['faute-de']),
  sent(1376, 'La salle est à vous, pourvu que vous la rendiez propre.', 'The room is yours, as long as you leave it clean.',
    '/la sal ɛ.ta vu puʁ.vy kə vu la ʁɑ̃.dje pʁɔpʁ/', 'la SAL eh-ta VOO | poor-vü kuh voo la rahⁿ-DYAY PROPR', ['pourvu', 'subjonctif']),
  sent(1377, "Sauf si vous êtes abonné, l'entrée coûte douze euros.", 'Unless you are a member, admission costs twelve euros.',
    '/sof si vu.zɛ.ta.bɔ.ne lɑ̃.tʁe kut du.zø.ʁo/', 'sohf see voo-zeh-ta-bo-NAY | lahⁿ-TRAY | koot doo-zeu-ROH', ['sauf-si', 'carte'], FCVDR),
  sent(1378, "À moins d'être abonné, vous paierez l'entrée.", 'Unless you are a member, you will pay for admission.',
    '/a mwɛ̃ dɛ.tʁa.bɔ.ne vu pɛ.ʁe lɑ̃.tʁe/', 'a mwehⁿ deh-tra-bo-NAY | voo peh-RAY lahⁿ-TRAY', ['a-moins-de', 'carte']),
  sent(1379, "Si vous n'êtes pas abonné, l'entrée coûte douze euros.", 'If you are not a member, admission costs twelve euros.',
    '/si vu nɛt pa.za.bɔ.ne lɑ̃.tʁe kut du.zø.ʁo/', 'see voo NET pa-za-bo-NAY | lahⁿ-TRAY | koot doo-zeu-ROH', ['si', 'carte']),
  sent(1380, "Faute d'avoir reçu votre dossier, nous ne pouvons pas l'étudier.", 'As we have not received your file, we cannot examine it.',
    '/fot da.vwaʁ ʁə.sy vɔtʁ do.sje nu nə pu.vɔ̃ pa le.ty.dje/', 'foht da-vwar ruh-SÜ | votr do-SYAY | noo nuh poo-VOHⁿ | pa lay-tü-DYAY', ['faute-de', 'infinitif']),
  sent(1381, 'Le prêt est gratuit, à condition de rendre les livres à temps.', 'Borrowing is free, provided you return the books on time.',
    '/lə pʁɛ ɛ ɡʁa.tɥi a kɔ̃.di.sjɔ̃ də ʁɑ̃dʁ le livʁ a tɑ̃/', 'luh PREH eh gra-TWEE | a kohⁿ-dee-SYOHⁿ | duh rahⁿdr lay LEEVR a TAHⁿ', ['condition', 'notice']),
  gap(1382, 'Vous serez remboursé, à condition que vous nous renvoyiez le billet.', 'You will be refunded, provided you send the ticket back to us.',
    '/vu sə.ʁe ʁɑ̃.buʁ.se a kɔ̃.di.sjɔ̃ kə vu nu ʁɑ̃.vwa.je lə bi.jɛ/', 'voo suh-ray rahⁿ-boor-SAY | a kohⁿ-dee-syohⁿ kuh voo noo rahⁿ-vwa-YAY | luh bee-YEH',
    'Vous serez remboursé, à condition que vous nous ___ le billet. (renvoyer)',
    "Renvoyiez : le subjonctif, avec son i après le y, comme que vous envoyiez. EN: subjunctive.",
    ['condition', 'subjonctif']),
  sent(1383, "Nous acceptons les animaux, à condition qu'ils soient tenus en laisse.", 'We accept pets, provided they are kept on a lead.',
    '/nu.zak.sɛp.tɔ̃ le.za.ni.mo a kɔ̃.di.sjɔ̃ kil swa tə.ny ɑ̃ lɛs/', 'noo-zak-sep-TOHⁿ lay-za-nee-MOH | a kohⁿ-dee-syohⁿ keel SWA | tuh-NÜ ahⁿ LESS', ['condition', 'notice'], FCVDR),
  sent(1384, 'À défaut de réponse, votre demande sera considérée comme acceptée.', 'Failing a reply, your request will be deemed accepted.',
    '/a de.fo də ʁe.pɔ̃s vɔtʁ də.mɑ̃d sə.ʁa kɔ̃.si.de.ʁe kɔm ak.sɛp.te/', 'a day-FOH duh ray-POHⁿS | votr duh-MAHⁿD | suh-ra kohⁿ-see-day-RAY | kom ak-sep-TAY', ['a-defaut'], FCVR, SO),
];

/* ── ACT 12 · TON COURRIER (.1386-.1399) ────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1386, 'Nous avons bien reçu votre réclamation du trois mars.', 'We have received your complaint of 3 March.',
    '/nu.za.vɔ̃ bjɛ̃ ʁə.sy vɔtʁ ʁe.kla.ma.sjɔ̃ dy tʁwa maʁs/', 'noo-za-vohⁿ byehⁿ ruh-SÜ | votr ray-kla-ma-SYOHⁿ | dü trwa MARS', ['courrier', 'ouverture']),
  sent(1387, 'Nous comprenons votre mécontentement.', 'We understand your dissatisfaction.',
    '/nu kɔ̃.pʁə.nɔ̃ vɔtʁ me.kɔ̃.tɑ̃t.mɑ̃/', 'noo kohⁿ-pruh-NOHⁿ | votr may-kohⁿ-tahⁿt-MAHⁿ', ['courrier']),
  sent(1388, "Nos conditions générales ne prévoient un remboursement qu'en cas d'annulation de notre part.", 'Our terms and conditions only provide for a refund if we cancel.',
    '/no kɔ̃.di.sjɔ̃ ʒe.ne.ʁal nə pʁe.vwa œ̃ ʁɑ̃.buʁs.mɑ̃ kɑ̃ ka da.ny.la.sjɔ̃ də nɔtʁ paʁ/', 'noh kohⁿ-dee-syohⁿ zhay-nay-RAL | nuh pray-VWA | uhⁿ rahⁿ-boors-MAHⁿ | kahⁿ KA | da-nü-la-SYOHⁿ | duh notr PAR', ['courrier', 'que']),
  sent(1389, 'Nous ne pouvons donc vous rembourser que les frais de réservation.', 'We can therefore only refund the booking fee.',
    '/nu nə pu.vɔ̃ dɔ̃k vu ʁɑ̃.buʁ.se kə le fʁɛ də ʁe.zɛʁ.va.sjɔ̃/', 'noo nuh poo-vohⁿ DOHⁿK | voo rahⁿ-boor-SAY | kuh lay FREH | duh ray-zehr-va-SYOHⁿ', ['courrier', 'que'], FCVDR),
  sent(1390, 'Toutefois, à titre exceptionnel, nous vous proposons un avoir.', 'However, as an exception, we are offering you a credit note.',
    '/tut.fwa a titʁ ɛk.sɛp.sjɔ.nɛl nu vu pʁɔ.po.zɔ̃ œ̃.na.vwaʁ/', 'toot-FWA | a teetr ek-sep-syo-NEL | noo voo pro-poh-ZOHⁿ | uhⁿ-na-VWAR', ['courrier', 'geste']),
  sent(1391, "Cet avoir est valable un an sur tous nos trajets, à l'exception des trains de nuit.", 'This credit is valid for a year on all our routes, except night trains.',
    '/sɛ.ta.vwaʁ ɛ va.labl œ̃.nɑ̃ syʁ tu no tʁa.ʒɛ a lɛk.sɛp.sjɔ̃ de tʁɛ̃ də nɥi/', 'seh-ta-VWAR eh va-LABL | uhⁿ-NAHⁿ | sür too noh tra-ZHEH | a lek-sep-SYOHⁿ | day trehⁿ duh NWEE', ['courrier', 'exception']),
  sent(1392, "Il n'y a que notre service client qui puisse modifier votre réservation.", 'Only our customer service can change your booking.',
    '/il nja kə nɔtʁ sɛʁ.vis kli.jɑ̃ ki pɥis mɔ.di.fje vɔtʁ ʁe.zɛʁ.va.sjɔ̃/', 'eel nya kuh notr sehr-veess klee-YAHⁿ | kee pweess mo-dee-FYAY | votr ray-zehr-va-SYOHⁿ', ['courrier', 'relief']),
  sent(1393, 'Nous restons à votre disposition pour toute autre question.', 'We remain at your disposal for any other questions.',
    '/nu ʁɛs.tɔ̃ a vɔtʁ dis.po.zi.sjɔ̃ puʁ tu.to.tʁə kɛs.tjɔ̃/', 'noo res-TOHⁿ | a votr dees-poh-zee-SYOHⁿ | poor too-toh-truh kes-TYOHⁿ', ['courrier', 'cloture']),
  sent(1394, "Veuillez agréer, Madame, l'expression de nos salutations distinguées.", 'Yours faithfully (literally: please accept, Madam, the expression of our distinguished greetings).',
    '/vœ.je.za.ɡʁe.e ma.dam lɛk.spʁɛ.sjɔ̃ də no sa.ly.ta.sjɔ̃ dis.tɛ̃.ɡe/', 'vuh-yay-za-gray-AY | ma-DAM | lek-spreh-SYOHⁿ | duh noh sa-lü-ta-SYOHⁿ | dees-tehⁿ-GAY', ['courrier', 'formule'], FCVR, SO),
  sent(1395, 'Ce geste ne remet pas en cause nos conditions générales.', 'This gesture does not call our terms and conditions into question.',
    '/sə ʒɛst nə ʁə.mɛ pa.zɑ̃ koz no kɔ̃.di.sjɔ̃ ʒe.ne.ʁal/', 'suh ZHEST | nuh ruh-MEH pa-zahⁿ KOHZ | noh kohⁿ-dee-syohⁿ zhay-nay-RAL', ['courrier', 'geste']),
  sent(1396, "Faute de réponse de votre part avant le trente avril, l'avoir sera émis automatiquement.", 'Failing a reply from you before 30 April, the credit note will be issued automatically.',
    '/fot də ʁe.pɔ̃s də vɔtʁ paʁ a.vɑ̃ lə tʁɑ̃.ta.vʁil la.vwaʁ sə.ʁa e.mi o.to.ma.tik.mɑ̃/', 'foht duh ray-POHⁿS | duh votr PAR | a-vahⁿ luh trahⁿ-ta-VREEL | la-VWAR suh-ra ay-MEE | oh-to-ma-teek-MAHⁿ', ['courrier', 'faute-de']),
  sent(1397, 'À moins que vous ne préfériez un remboursement partiel, nous émettrons cet avoir.', 'Unless you would rather have a partial refund, we will issue this credit note.',
    '/a mwɛ̃ kə vu nə pʁe.fe.ʁje œ̃ ʁɑ̃.buʁs.mɑ̃ paʁ.sjɛl nu.ze.mɛ.tʁɔ̃ sɛ.ta.vwaʁ/', 'a mwehⁿ kuh voo nuh pray-fay-RYAY | uhⁿ rahⁿ-boors-mahⁿ par-SYEL | noo-zay-meh-TROHⁿ | seh-ta-VWAR', ['courrier', 'a-moins'], FCVDR),
  sent(1398, "Nous ne faisons qu'appliquer les règles communes à tous nos clients.", 'We are only applying the rules that hold for all our customers.',
    '/nu nə fə.zɔ̃ ka.pli.ke le ʁɛɡl kɔ.myn a tu no kli.jɑ̃/', 'noo nuh fuh-ZOHⁿ | ka-plee-KAY lay REGL | ko-MÜNN a too noh klee-YAHⁿ', ['courrier', 'ne-faire']),
  sent(1399, "Le remboursement intégral n'est possible que si le train est annulé.", 'A full refund is only possible if the train is cancelled.',
    '/lə ʁɑ̃.buʁs.mɑ̃ ɛ̃.te.ɡʁal nɛ pɔ.sibl kə si lə tʁɛ̃ ɛ.ta.ny.le/', 'luh rahⁿ-boors-mahⁿ ehⁿ-tay-GRAL | neh po-SEEBL | kuh see luh TREHⁿ | eh-ta-nü-LAY', ['courrier', 'que-si'], FCVDR),
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
 *  The two long readings (B2: 200 to 350 words) and the nine short « dans un
 *  texte » paragraphs (60 to 120 words) that close acts 3 to 11: a notice,
 *  terms and conditions, a reply to a complaint, a menu of exceptions. They
 *  live here so the reading, the quiz and the task cannot drift.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: a municipal pool's rules, Namur. */
export const LECTURE_REGLEMENT =
  "Piscine municipale de Namur : extraits du règlement intérieur. L'accès aux bassins est ouvert à tous, à l'exception des personnes atteintes d'une maladie contagieuse. Les enfants de moins de huit ans ne peuvent entrer qu'accompagnés d'un adulte. Le port du bonnet est obligatoire, sauf pour les enfants de moins de trois ans. Seuls les abonnés peuvent réserver un créneau en ligne ; les autres usagers achètent leur entrée à la caisse, qui n'accepte que les paiements par carte. Le grand bassin est ouvert tous les jours, excepté le lundi matin, consacré à l'entretien. Le bassin ferme à vingt heures, à moins qu'une compétition ne soit prévue : il ferme alors à dix-huit heures. Le petit bassin n'est réservé aux familles que le samedi matin. Faute de certificat médical, l'inscription ne sera pas validée pour les cours d'aquagym. Les abonnements ne sont pas remboursables, sauf si l'usager déménage à plus de trente kilomètres. Un abonnement peut être suspendu, à condition de prévenir l'accueil une semaine à l'avance. Il n'y a que le responsable de bassin qui puisse autoriser l'accès au plongeoir. Le personnel ne fait qu'appliquer ce règlement : merci de ne pas lui demander des exceptions qu'il n'a pas le droit d'accorder. Hormis ces quelques règles, une seule consigne : profitez de l'eau.";

/** Act 12: the model the learner imitates, a formal reply to a complaint. */
export const LECTURE_MODELE =
  "Objet : votre demande de remboursement. Madame, nous avons bien reçu votre réclamation du trois mars concernant votre billet Lyon-Marseille du vingt-huit février, et nous comprenons votre mécontentement. Vous nous expliquez avoir manqué votre train à cause d'un embouteillage. Nos conditions générales ne prévoient un remboursement qu'en cas d'annulation de notre part ; les billets à tarif réduit ne sont pas remboursables, sauf si le voyageur présente un certificat médical. Votre situation ne relève d'aucun de ces deux cas. Nous ne pouvons donc vous rembourser que les frais de réservation, soit huit euros. Nos agents en gare n'ont fait qu'appliquer ces règles, communes à tous nos clients. Toutefois, à titre exceptionnel, nous vous proposons un avoir de quarante euros. Cet avoir est valable un an sur tous nos trajets, à l'exception des trains de nuit, et il n'y a que notre service client qui puisse l'émettre. À moins que vous ne préfériez le remboursement des frais de réservation, nous émettrons cet avoir à votre nom. Faute de réponse de votre part avant le trente avril, il sera émis automatiquement. Ce geste ne remet pas en cause nos conditions générales, mais il nous semblait juste de tenir compte de votre fidélité. Nous restons à votre disposition pour toute autre question. Veuillez agréer, Madame, l'expression de nos salutations distinguées. Le service client de Rail Alpes.";

/** The nine « dans un texte » paragraphs (acts 3 to 11). */
export const TEXTE_A3 =
  "La réponse du service client d'un transporteur, à Montréal. Réécris chaque passage entre crochets avec ne… que, ne faire que ou n'avoir qu'à, selon ce qui est restreint. « Madame, nous avons bien reçu votre message. Notre livreur [a seulement appliqué] la procédure : sans signature, il ne peut pas laisser un colis devant une porte. Nous comprenons votre agacement : depuis lundi, vous [avez seulement reçu] des avis de passage. Notre service [répète seulement] les règles de notre assureur. Pour une nouvelle livraison samedi, vous [devez seulement] répondre à ce courriel. »";

export const TEXTE_A4 =
  "L'affiche d'un espace de travail partagé, à Lausanne. Complète chaque blanc avec seul (accordé), uniquement, rien que, simplement ou seulement. « Bienvenue à L'Atelier. (1) … les membres peuvent réserver une salle de réunion. Les réservations se font (2) … en ligne. (3) … la location d'une salle coûte trente francs l'heure : annulez-la si vous n'en avez plus besoin. Le café est offert. (4) … , merci de laver votre tasse. Nous vous demandons (5) … de respecter le calme de l'espace ouvert. »";

export const TEXTE_A5 =
  "L'avis de la Ville de Liège sur la collecte des encombrants. Réécris chaque passage entre crochets avec il n'y a que… qui ou ce n'est que… que. « Collecte des encombrants : mode d'emploi. [Seuls les habitants inscrits pourront] déposer leurs meubles sur le trottoir. [Le camion passera seulement après dix heures.] [Seul le service propreté peut] accepter un dépôt hors délai. [Vous trouverez le formulaire d'inscription seulement à l'accueil de la mairie.] Merci de votre collaboration. »";

export const TEXTE_A6 =
  "La présentation d'une application de langues, sur un site de téléchargement. Complète chaque blanc avec que, seulement, non seulement ou mais. « Notre application ne sert pas (1) … à réviser. (2) … elle corrige vos textes, (3) … elle vous propose aussi des exercices faits pour vous. Car il n'y a pas (4) … la grammaire dans une langue : il y a aussi la voix, l'accent, l'humour. Et l'abonnement ne coûte (5) … quatre euros par mois. »";

export const TEXTE_A7 =
  "La formule tout compris d'un hôtel au bord du lac d'Annecy. Complète chaque blanc avec sauf, excepté (accordé si besoin), hormis ou à l'exception de. « Notre formule comprend tous les repas, (1) … les boissons alcoolisées. Le restaurant est ouvert tous les jours, (2) … le dimanche soir. (3) … le spa, qui est payant, toutes les activités sont gratuites. Les enfants de moins de deux ans (4) … , tous nos clients paient la taxe de séjour. L'annulation est gratuite, (5) … en juillet et en août. »";

export const TEXTE_A8 =
  "L'avis de Mathilde sur un site de voyages, après un séjour à Dakar. Complète chaque blanc avec sauf que, si ce n'est, sinon ou si ce n'est que. « Notre séjour s'est très bien passé, (1) … l'avion est parti avec trois heures de retard. À l'aéroport, personne, (2) … une hôtesse très patiente, n'a pu nous renseigner. Rien à dire sur l'hôtel, (3) … le bruit de la rue le samedi soir. C'est l'un des plus beaux endroits de la côte, (4) … le plus beau. »";

export const TEXTE_A9 =
  "Les conditions de réservation d'un gîte en Gaspésie. Mets chaque verbe entre parenthèses à la forme qui convient. « L'acompte n'est pas remboursé, sauf si le locataire (présenter) un certificat médical. L'arrivée se fait à seize heures, sauf si vous (convenir) d'un autre horaire avec nous. La réservation sera annulée, sauf si nous (recevoir) le solde huit jours avant l'arrivée. Le ménage final est compris, sauf si le logement (être) rendu très sale. »";

export const TEXTE_A10 =
  "Le communiqué d'un festival de musique à Québec. Réécris chaque phrase avec à moins que ou à moins de, à la place de sauf si. « Les concerts auront lieu en plein air, sauf s'il pleut. Vous ne pourrez pas entrer sur le site, sauf si vous avez un billet. Le stationnement sera gratuit, sauf si la Ville change d'avis. La soirée finira à minuit, sauf si la police accorde une dérogation. »";

export const TEXTE_A11 =
  "Les conditions d'utilisation d'un service de vélos en libre-service, à Montréal. Complète chaque blanc avec à condition de, à condition que, sauf si, à moins que ou faute de. « Vous pouvez emprunter un vélo pendant quarante-cinq minutes sans frais, (1) … le rendre à une station. (2) … restitution dans les vingt-quatre heures, le vélo sera déclaré volé. La caution vous est remboursée, (3) … le vélo est abîmé. Le service fonctionne d'avril à novembre, (4) … la neige ne rende les pistes dangereuses. Les moins de seize ans peuvent l'utiliser, (5) … un parent ait signé le formulaire. »";
