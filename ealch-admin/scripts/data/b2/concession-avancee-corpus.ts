// b2.16.l1 « La concession »: the authored corpus, the imports and the
// citation constants. DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.07
// futur antérieur and b2.12 gérondif), under the B2 rules of B2-BUILD-LOG.md
// (form, meaning, choice, text).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file; do not
// rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS,
// ROWS_BY_ACT.
//
// The slug is `concession-avancee` ON PURPOSE: B1 lesson 32 already owns
// `concession` (scripts/data/b1/concession-*). Never rename one to the other.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 16 of the B2 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   CONCESSION BY THE FORM EACH WORD IMPOSES, AND CONCESSION AGAINST
//   OPPOSITION. B1 lesson 32 taught the tools and the scales; B2 lesson 6
//   taught the mood choice in one act; this lesson maps every form, adds the
//   B2 tools, and sets each one against the one it is confused with.
//
//     la carte          five forms after a concession word: subjunctive,
//                       indicative, conditional, infinitive, noun, plus the
//                       adverbs that link two whole sentences (act 2)
//     le subjonctif 1   bien que (with the subjonctif passé for a prior
//                       fact), quoique, encore que (soutenu, an afterthought
//                       after the main clause), the ellipsis bien que +
//                       adjective, sans que against sans + infinitive;
//                       « bien que + indicatif » named as SPOKEN (act 3)
//     le subjonctif 2   the indefinites: quoi que (two words) against quoique
//                       (one), quel que soit agreeing with its noun, où que,
//                       qui que, quoi que ce soit, qui que ce soit; quelque(s)
//                       + nom + que for recognition (act 4)
//     l'intensité       si / aussi + adjectif + que + subjunctive; adjectif +
//                       soit-il (soutenu); tout + adjectif + que +
//                       INDICATIVE (the subjunctive also found), with toute
//                       before a feminine adjective starting with a
//                       consonant; quelque + adjectif + que (literary) (act 5)
//     l'indicatif       même si, never with the subjunctive, never with a
//                       future or conditional right after it; même si +
//                       imparfait for a hypothesis, + plus-que-parfait for
//                       the past (lesson 3 in B2) (act 6)
//     le conditionnel   quand bien même + conditionnel (soutenu), même si +
//                       imparfait as the everyday equivalent, quand même
//                       (lesson 24 in B1) is not quand bien même (act 7)
//     l'infinitif       avoir beau in every tense (j'ai eu beau, tu aurais
//                       beau) and with an infinitif passé; loin de against
//                       au lieu de; sans + infinitive (act 8)
//     le nom            malgré, en dépit de (soutenu), malgré le fait que
//                       (indicative or subjunctive, heavy), nonobstant
//                       (recognition), clause to noun (lesson 10 in B2);
//                       « malgré que » named as CONTESTED in writing (act 9)
//     le discours       pourtant, cependant, toutefois, néanmoins and their
//                       place; certes… mais; il n'en reste pas moins que, il
//                       n'en demeure pas moins, toujours est-il que, all
//                       with the indicative (act 10)
//     concéder/opposer  alors que and tandis que compare two facts; bien que
//                       admits one and goes on anyway; alors que in its
//                       concessive reading; en revanche and par contre
//                       contrast, they concede nothing (act 11)
//     l'essai           the DELF B2 production écrite: concede the strongest
//                       point, then answer, with three moods (act 12)
//
//   BUILT ON, NEVER RE-TAUGHT (cited by trail position, rows reused by id):
//     lesson 32 in B1   the tools and the scales (reframe quoted; rows .1404,
//                       .1417, .1422, .1438, .1456, .1461, .1473, .1474,
//                       .1503, .1507, .1519, .1522, .1526, .1538, .1543, .1573)
//     lesson 10 in B1   si clauses: même si follows the si tense rule
//     lesson 24 in B1   quand même (cited only)
//     lesson 3 in B2    même si + plus-que-parfait (row .1495 reused)
//     lesson 5 in B2    the subjonctif passé form (row emotions .1357 reused)
//     lesson 6 in B2    the mood choice, act 8 (reframe quoted; rows
//                       opinions-et-avis .1907, .1924, .1925, .1933 reused)
//     lesson 10 in B2   nominalisation, for malgré + nom (cited)
//     lesson 12 in B2   tout en (reframe quoted; its rows are not in the
//                       seed yet, so NONE is named here)
//     lesson 23 in B2   certes… mais and il n'en reste pas moins que in an
//                       argument (row opinions-et-avis .1707 reused)
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, seed-checked, DB check pending at import
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `connecteurs-logiques` (fondations, a2-b2). Sub-theme « la
//     concession » is B1's, already in Postgres (read back 2026-09-29 with
//     « la coordination », « la subordination », « le gérondif », « la cause
//     et la conséquence »). Nothing to create at import.
//
//  2. ID BLOCK: `.2000`-`.2199`, assigned by the brief (1000-1599 are B1,
//     1600-1799 is lesson 12 in B2, 1800-1999 is lesson 15 in B2 written in
//     parallel). A read-only Postgres probe on 2026-09-29 found NO row at
//     .2000-.2199 at any level of this theme. Authored: `.2000`-`.2197`, with
//     gaps between act blocks (see the act banners). Nothing outside it.
//
//  3. NO VOCAB-TYPE NON-SENTENCE ROW is authored, so the flashcard hub's
//     headword rule (theme + headword) cannot clash with a published row:
//     the theme already holds « quoique », « néanmoins », « toutefois »,
//     « quoi qu'il en soit », « en dépit de » (b2 .039-.048) and the B1
//     headwords (bien que, même si, avoir beau, malgré…). Every row is a
//     sentence, a gapfill card or a rule card.
//
//  4. REUSED ROWS. The seed plus packs (20,683 items, read 2026-09-29) were
//     probed for every tool in this lesson with real orthography. On-topic
//     rows are reused BY ID (§F), never retyped. The seed carries NO où que,
//     qui que, encore que, toujours est-il que, malgré le fait que or
//     quand bien même below C1, so those are authored here. Postgres holds
//     ~25 DB-only b2 « quand bien même » rows and a few « loin de » rows;
//     none is an exact twin of a row here (checked 2026-09-29).
//
//  5. RESPELLINGS. même is MEM (the seed's). Spelled for the nasal checker,
//     not the ear: « personne » pehr-SONN, « comprenne » kohⁿ-PRENN,
//     « aucune » oh-KÜNN, « certaines » sehr-TENN, « pleine » PLENN. The
//     word « jeune » is kept out of every row (its only checker-safe
//     respelling is not how it sounds; as B1 lesson 32). No U+203F tie.
//
//  6. APOSTROPHES. Corpus rows and texts use the straight ' as the seed
//     mostly does. Reused rows keep theirs. The one `scenario` uses ’ only
//     and embeds no corpus row.
//
//  7. NO UNGRAMMATICAL OR CONTESTED SENTENCE IS EVER A ROW. « Même si vous
//     ayez raison », « bien qu'il est tard », « malgré qu'il pleuve »,
//     « quelque soit le prix » and the other wrong or contested forms live
//     only in the scene's choice, commonErrors.wrong, trapDrill.promptSound
//     and quiz errorSpot prompts.
//
//  8. « QUOI QUE » AND « QUOIQUE » ARE NEVER TESTED BY TYPING. `fold()`
//     strips spaces, so the two spellings fold to the same string; the same
//     holds for « quel que » and « quelque ». Those contrasts are tested by
//     multiple choice only.
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
  id: 'b2.16',
  seq: 16,
  title: 'Concession',
  sub: 'La concession',
  canDo: 'Can grant a point before answering it, choosing among the subjunctive tools (bien que, quoique, encore que, sans que, quoi que, quel que soit, où que, qui que, si… que), the indicative ones (même si, tout… que, alors que), the conditional (quand bien même), the infinitive (avoir beau, loin de) and the noun (malgré, en dépit de), and linking whole sentences with pourtant, toutefois, néanmoins, il n\'en reste pas moins que and toujours est-il que; can tell concession from opposition (en revanche, alors que, tandis que), knows the register of each tool and which spoken forms are criticised in writing',
  prereqUnitIds: ['b1.10', 'b1.32', 'b2.03', 'b2.05', 'b2.06'],
} as const;

export const LESSON_ID = 'b2.16.l1';
export const THEME = 'connecteurs-logiques';
export const LEVEL = 'b2' as const;

/** ONE block, assigned by the brief. */
export const ID_RANGES = [[2000, 2199]] as const;

export const E = (n: number) => `fr.b2.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  B2 is taught in French, so B1 and B2 labels are French, from the plan: a
 *  B1 unit id's number IS its trail position, and the B2 plan in
 *  B2-BUILD-LOG.md numbers b2.01 to b2.34 in trail order. Only B1 1-39 and
 *  B2 1-16 and 22-26 are cited.
 * ══════════════════════════════════════════════════════════════════════════ */

export const SI_UNIT = 'b1.10';
export const MEME_UNIT = 'b1.24';
export const CONCESSION_UNIT = 'b1.32';
export const SI_PASSE_UNIT = 'b2.03';
export const SUBJ_PASSE_UNIT = 'b2.05';
export const MODES_UNIT = 'b2.06';
export const NOMINAL_UNIT = 'b2.10';
export const GERONDIF_UNIT = 'b2.12';
export const ARGU_UNIT = 'b2.23';

/** TODO(import): drop once the b1 and b2 units are rows the seed labels in French. */
export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  return m ? `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}` : unitRef(unitId);
}

export const SI_REF = refFr(SI_UNIT);
export const MEME_REF = refFr(MEME_UNIT);
export const CONCESSION_REF = refFr(CONCESSION_UNIT);
export const SI_PASSE_REF = refFr(SI_PASSE_UNIT);
export const SUBJ_PASSE_REF = refFr(SUBJ_PASSE_UNIT);
export const MODES_REF = refFr(MODES_UNIT);
export const NOMINAL_REF = refFr(NOMINAL_UNIT);
export const GERONDIF_REF = refFr(GERONDIF_UNIT);
export const ARGU_REF = refFr(ARGU_UNIT);
/** Purpose (pour que, afin de): a later lesson, cited WITHOUT a number
 *  (its trail position is not occupied in this publish). */
export const LATER_REF = 'une leçon suivante';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, RE-EXPORTED, NEVER RETYPED
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B132_REFRAME, REFRAME_EN as B132_REFRAME_EN, CARTE_RULE as B132_CARTE, CARTE_RULE_EN as B132_CARTE_EN } from '../b1/concession-corpus.ts';
export { REFRAME as B110_REFRAME, REFRAME_EN as B110_REFRAME_EN } from '../b1/si-clauses-corpus.ts';
export { REFRAME as B206_REFRAME, REFRAME_EN as B206_REFRAME_EN } from './subjonctif-indicatif-corpus.ts';
export { REFRAME as B212_REFRAME, REFRAME_EN as B212_REFRAME_EN } from './gerondif-corpus.ts';
export { REFRAME as B223_REFRAME, REFRAME_EN as B223_REFRAME_EN } from './argumentation-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE POINT ACCORDÉ. A concession grants the other side a point and keeps
 *  the game: the fact is admitted (bien que), supposed (même si, quand bien
 *  même), made universal (quoi que, où que, quel que soit), pushed to its
 *  highest degree (si… que), tried and failed (avoir beau) or named as a
 *  thing (malgré), and the speaker's position still stands. The WORD that
 *  grants the point imposes its form: bien que the subjunctive, même si the
 *  indicative, quand bien même the conditional, avoir beau the infinitive,
 *  malgré a noun. When NOTHING is granted, two facts simply sit side by side:
 *  that is opposition (alors que, tandis que, en revanche), act 11.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = "Concéder, c'est accorder un point sans céder la partie : le mot qui l'accorde impose sa forme.";
export const REFRAME_EN = 'To concede is to grant a point without giving up the game: the word that grants it sets the form.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'La concession demande le subjonctif.',
    why: 'Already rejected by lesson 32 in B1, and even falser here: même si, tout… que, alors que, il n’en reste pas moins que and toujours est-il que take the indicative (acts 5, 6, 10, 11), quand bien même the conditional (act 7), avoir beau the infinitive (act 8), malgré a noun (act 9).',
  },
  {
    text: 'Bien que et même si, c’est pareil, seul le mode change.',
    why: 'True of their meaning in act 6, and it is exactly the thought that produces « même si + subjonctif », the one error this lesson calls simply wrong. It also says nothing about the eight other tools.',
  },
  {
    text: 'Deux faits sur la balance : le mot qui les relie dit comment ils pèsent.',
    why: 'Lesson 32 in B1’s reframe, and still true, so it is QUOTED in act 2 rather than replaced. It is about meaning; the B2 step is the form each word imposes, which the balance does not say.',
  },
  {
    text: 'Concéder, c’est dire « oui, mais ».',
    why: 'Good for certes… mais in act 10 and the essay, but « quoi que tu fasses » and « où que tu ailles » say no « oui » to anything in particular, and « oui, mais » is exactly what en revanche is NOT (act 11).',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT (seed rows, read 2026-09-29, French in comment)
 * ══════════════════════════════════════════════════════════════════════════ */

const CL = (n: number) => `fr.b1.connecteurs-logiques.${n}`;
const OA = (n: number) => `fr.b2.opinions-et-avis.${n}`;

export const IMPORTED = {
  act1: [] as string[],
  act2: [
    CL(1404),                                  // Bien que le projet soit cher, je vote pour.  (lesson 32 in B1)
    CL(1417),                                  // Même si le loyer est cher, je reste dans ce quartier.  (lesson 32 in B1)
    CL(1456),                                  // Malgré mes efforts, je n'ai pas trouvé de place.  (lesson 32 in B1)
    CL(1503),                                  // J'ai beau essayer, ça ne marche pas.  (lesson 32 in B1)
  ],
  act3: [
    CL(1438),                                  // Quoique le projet soit coûteux, la mairie l'a accepté.  (lesson 32 in B1)
    'fr.b2.emotions.1357',                     // Quoique la route ait été fermée, les secours sont arrivés à temps.  (lesson 5 in B2)
    OA(1907),                                  // Le projet a été voté sans que les habitants soient consultés.  (lesson 6 in B2)
  ],
  act4: [
    OA(1924),                                  // Quoi que tu dises, je garderai mon avis.  (lesson 6 in B2)
    OA(1925),                                  // Quel que soit le prix, le quartier a besoin de ce parc.  (lesson 6 in B2)
    'fr.b2.maison.086',                        // Quelles que soient les réparations nécessaires, il vaut mieux les faire rapidement.  (no voiceflash)
  ],
  act5: [
    OA(1933),                                  // Si cher que soit le projet, il reste nécessaire.  (lesson 6 in B2, soutenu)
  ],
  act6: [
    CL(1422),                                  // Même si j'étais riche, je resterais à Sherbrooke.  (lesson 32 in B1)
    'fr.b2.projets-et-futur.1495',             // Même si tu m’avais prévenu, je n’aurais rien changé.  (lesson 3 in B2)
  ],
  act7: [] as string[],
  act8: [
    CL(1507),                                  // Elle avait beau expliquer, personne ne l'écoutait.  (lesson 32 in B1)
    CL(1519),                                  // Tu auras beau protester, la décision est prise.  (lesson 32 in B1)
    CL(1538),                                  // Au lieu de prendre la voiture, prends le bus.  (lesson 32 in B1)
  ],
  act9: [
    CL(1461),                                  // En dépit des critiques, la ville garde son projet.  (lesson 32 in B1)
    'fr.b2.gouvernement.003',                  // Malgré les critiques, la ministre a maintenu sa position sur la réforme.  (no voiceflash)
  ],
  act10: [
    CL(1474),                                  // Le musée est gratuit le dimanche. Toutefois, il faut réserver.  (lesson 32 in B1)
    CL(1473),                                  // La ville a promis des pistes cyclables. Néanmoins, rien n'a changé.  (lesson 32 in B1)
    CL(1573),                                  // Certes, le projet coûte cher, mais il profite à tout le monde.  (lesson 32 in B1)
    OA(1707),                                  // Admettons que le vote obligatoire fasse monter la participation ; il n'en reste pas moins qu'il ne rend pas le débat plus riche.  (lesson 23 in B2)
    'fr.b2.universite.1046',                   // Ce constat mérite toutefois d'être nuancé.  (lesson 22 in B2)
  ],
  act11: [
    CL(1522),                                  // Mon frère adore l'hiver, alors que moi, je le déteste.  (lesson 32 in B1)
    CL(1526),                                  // Les loyers montent, tandis que les salaires restent les mêmes.  (lesson 32 in B1)
    CL(1543),                                  // L'appartement est petit ; en revanche, il est très lumineux.  (lesson 32 in B1)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** No `flashcard` drill in the seed: nameable, never releasable. */
export const NOT_DECK_ABLE: readonly string[] = [];

/** No `voiceflash` in the seed: never in a `practice` speak section. */
export const NOT_SPEAKABLE: readonly string[] = [
  ...NOT_DECK_ABLE,
  'fr.b2.maison.086',                          // sentence, flashcard, review
  'fr.b2.gouvernement.003',                    // sentence, flashcard, review
];

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
const GP = ['concession'];

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

/* ── ACT 1 · ACCORDER UN POINT (.2000-.2013) ─────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(2000, 'Bien que le tourisme fasse vivre le quartier, il le rend parfois invivable.', 'Although tourism keeps the neighbourhood alive, it sometimes makes it unbearable.',
    '/bjɛ̃ kə lə tu.ʁism fas vivʁ lə kaʁ.tje il lə ʁɑ̃ paʁ.fwa ɛ̃.vi.vabl/', 'byehⁿ kuh luh too-REESM | fass VEEVR luh kar-TYAY | eel luh RAHⁿ | par-fwa ehⁿ-vee-VABL', ['lecture', 'subjonctif']),
  sent(2001, "Certes, un quota réduirait la foule, mais il frapperait d'abord les commerçants.", 'Admittedly, a quota would reduce the crowds, but it would hit the shopkeepers first.',
    '/sɛʁt œ̃ kɔ.ta ʁe.dɥi.ʁɛ la ful mɛ il fʁa.pə.ʁɛ da.bɔʁ le kɔ.mɛʁ.sɑ̃/', 'SEHRT | uhⁿ ko-TA ray-dwee-REH la FOOL | meh eel fra-puh-REH | da-BOR lay ko-mehr-SAHⁿ', ['lecture', 'discours']),
  sent(2002, 'Quelles que soient ses intentions, la mairie devra consulter les habitants.', 'Whatever its intentions, the town hall will have to consult the residents.',
    '/kɛl kə swa se.zɛ̃.tɑ̃.sjɔ̃ la mɛ.ʁi də.vʁa kɔ̃.syl.te le.za.bi.tɑ̃/', 'KEL kuh swa say-zehⁿ-tahⁿ-SYOHⁿ | la meh-REE duh-VRA | kohⁿ-sül-TAY lay-za-bee-TAHⁿ', ['lecture', 'indefini'], FCVDR),
  sent(2003, 'Même si les visiteurs étaient deux fois moins nombreux, les ruelles resteraient étroites.', 'Even if there were half as many visitors, the lanes would still be narrow.',
    '/mɛm si le vi.zi.tœʁ e.tɛ dø fwa mwɛ̃ nɔ̃.bʁø le ʁɥɛl ʁɛs.tə.ʁɛ e.tʁwat/', 'mem see lay vee-zee-TUHR | ay-teh deu fwa mwehⁿ nohⁿ-BREU | lay RWEL | res-tuh-reh ay-TRWAT', ['lecture', 'hypothese']),
  sent(2004, "J'ai beau chercher, je ne trouve aucune ville qui ait réglé la question.", 'However hard I look, I cannot find a single city that has solved the problem.',
    '/ʒe bo ʃɛʁ.ʃe ʒə nə tʁuv o.kyn vil ki ɛ ʁe.ɡle la kɛs.tjɔ̃/', 'zhay boh shehr-SHAY | zhuh nuh TROOV | oh-KÜNN VEEL | kee eh ray-GLAY la kes-TYOHⁿ', ['lecture', 'infinitif']),
  sent(2005, 'Quand bien même un quota fonctionnerait, il déplacerait la foule.', 'Even if a quota worked, it would only move the crowds elsewhere.',
    '/kɑ̃ bjɛ̃ mɛm œ̃ kɔ.ta fɔ̃k.sjɔ.nə.ʁɛ il de.pla.sə.ʁɛ la ful/', 'kahⁿ byehⁿ MEM | uhⁿ ko-TA fohⁿk-syo-nuh-REH | eel day-pla-suh-REH la FOOL', ['lecture', 'conditionnel'], FCVR, SO),
  sent(2006, 'Malgré le bruit, je reste attachée à ce quartier.', 'Despite the noise, I am still attached to this neighbourhood.',
    '/mal.ɡʁe lə bʁɥi ʒə ʁɛst a.ta.ʃe a sə kaʁ.tje/', 'mal-GRAY luh BRWEE | zhuh rest a-ta-SHAY | a suh kar-TYAY', ['lecture', 'nom'], FCVDR),
  rule(2007, REFRAME, REFRAME_EN,
    '/kɔ̃.se.de sɛ.ta.kɔʁ.de œ̃ pwɛ̃ sɑ̃ se.de la paʁ.ti lə mo ki la.kɔʁd ɛ̃.poz sa fɔʁm/',
    'kohⁿ-say-DAY | seh-ta-kor-DAY uhⁿ PWEHⁿ | sahⁿ say-DAY la par-TEE | luh MOH kee la-KORD | ehⁿ-POHZ sa FORM',
    'Que fait une concession, et qui choisit la forme qui suit ?',
    "Elle accorde un point à l'autre sans lui donner raison sur le fond. Le mot choisi impose la forme : bien que, le subjonctif ; même si, l'indicatif ; malgré, un nom.",
    ['reframe']),
  sent(2008, "Toujours est-il qu'il faudra choisir.", 'The fact remains that a choice will have to be made.',
    '/tu.ʒuʁ ɛ.til kil fo.dʁa ʃwa.ziʁ/', 'too-zhoor eh-TEEL | keel foh-DRA shwa-ZEER', ['lecture', 'discours']),
  sent(2009, "Si modestes qu'elles paraissent, ces mesures seraient efficaces.", 'Modest as they may seem, these measures would be effective.',
    '/si mɔ.dɛst kɛl pa.ʁɛs se mə.zyʁ sə.ʁɛ e.fi.kas/', 'see mo-DEST | kel pa-RESS | say muh-ZÜR | suh-reh ay-fee-KASS', ['lecture', 'intensite'], FCVR, SO),
  sent(2010, 'Alors que la mairie compte les touristes, personne ne pense au logement.', 'While the town hall counts tourists, no one is thinking about housing.',
    '/a.lɔʁ kə la mɛ.ʁi kɔ̃t le tu.ʁist pɛʁ.sɔn nə pɑ̃s o lɔʒ.mɑ̃/', 'a-lor kuh la meh-REE | KOHⁿT lay too-REEST | pehr-SONN nuh PAHⁿS | oh lozh-MAHⁿ', ['lecture', 'opposition']),
  sent(2011, 'Bien que je comprenne votre inquiétude, je ne partage pas votre conclusion.', 'Although I understand your concern, I do not share your conclusion.',
    '/bjɛ̃ kə ʒə kɔ̃.pʁɛn vɔtʁ ɛ̃.kje.tyd ʒə nə paʁ.taʒ pa vɔtʁ kɔ̃.kly.zjɔ̃/', 'byehⁿ kuh zhuh kohⁿ-PRENN | votr ehⁿ-kyay-TÜD | zhuh nuh par-TAZH pa | votr kohⁿ-klü-ZYOHⁿ', ['usage', 'subjonctif'], FCVDR),
  sent(2012, 'Même si vous avez raison sur les chiffres, un quota reste nécessaire.', 'Even if you are right about the figures, a quota is still necessary.',
    '/mɛm si vu.za.ve ʁɛ.zɔ̃ syʁ le ʃifʁ œ̃ kɔ.ta ʁɛst ne.se.sɛʁ/', 'mem see voo-za-VAY reh-ZOHⁿ | sür lay SHEEFR | uhⁿ ko-TA | rest nay-say-SEHR', ['scene', 'indicatif']),
  sent(2013, "Je comprends votre colère ; il n'en reste pas moins que le quartier étouffe.", 'I understand your anger; the fact remains that the neighbourhood is suffocating.',
    '/ʒə kɔ̃.pʁɑ̃ vɔtʁ kɔ.lɛʁ il nɑ̃ ʁɛst pa mwɛ̃ kə lə kaʁ.tje e.tuf/', 'zhuh kohⁿ-PRAHⁿ votr ko-LEHR | eel nahⁿ rest pa MWEHⁿ | kuh luh kar-TYAY ay-TOOF', ['usage', 'discours'], FCVR, SO),
];

/* ── ACT 2 · UN POINT, CINQ FORMES (.2016-.2029) ───────────────────────────── */

export const ACT2_ROWS: Row[] = [
  rule(2016, 'Subjonctif, indicatif, conditionnel, infinitif ou nom : chaque mot de concession choisit le sien.', 'Subjunctive, indicative, conditional, infinitive or noun: each concession word picks its own.',
    '/syb.ʒɔ̃k.tif ɛ̃.di.ka.tif kɔ̃.di.sjɔ.nɛl ɛ̃.fi.ni.tif u nɔ̃ ʃak mo də kɔ̃.se.sjɔ̃ ʃwa.zi lə sjɛ̃/',
    'süb-zhohⁿk-TEEF | ehⁿ-dee-ka-TEEF | kohⁿ-dee-syo-NELL | ehⁿ-fee-nee-TEEF | oo NOHⁿ | shak MOH duh kohⁿ-say-SYOHⁿ | shwa-ZEE luh SYEHⁿ',
    'Combien de formes peut suivre un mot de concession ?',
    "Cinq : bien que + subjonctif, même si + indicatif, quand bien même + conditionnel, avoir beau + infinitif, malgré + nom. Les adverbes, eux, relient deux phrases complètes.",
    ['carte']),
  sent(2017, "Bien que le billet soit cher, j'irai au festival.", 'Although the ticket is expensive, I will go to the festival.',
    '/bjɛ̃ kə lə bi.jɛ swa ʃɛʁ ʒi.ʁe o fɛs.ti.val/', 'byehⁿ kuh luh bee-YEH swa SHEHR | zhee-RAY oh fes-tee-VAL', ['carte', 'subjonctif'], FCVDR),
  sent(2018, "Même si le billet est cher, j'irai au festival.", 'Even though the ticket is expensive, I will go to the festival.',
    '/mɛm si lə bi.jɛ ɛ ʃɛʁ ʒi.ʁe o fɛs.ti.val/', 'mem see luh bee-YEH eh SHEHR | zhee-RAY oh fes-tee-VAL', ['carte', 'indicatif']),
  sent(2019, "Quand bien même le billet coûterait cent euros, j'irais au festival.", 'Even if the ticket cost a hundred euros, I would go to the festival.',
    '/kɑ̃ bjɛ̃ mɛm lə bi.jɛ ku.tʁɛ sɑ̃.tø.ʁo ʒi.ʁɛ o fɛs.ti.val/', 'kahⁿ byehⁿ MEM | luh bee-YEH koo-TREH sahⁿ-teu-ROH | zhee-REH oh fes-tee-VAL', ['carte', 'conditionnel'], FCVR, SO),
  sent(2020, "Malgré le prix du billet, j'irai au festival.", 'Despite the price of the ticket, I will go to the festival.',
    '/mal.ɡʁe lə pʁi dy bi.jɛ ʒi.ʁe o fɛs.ti.val/', 'mal-GRAY luh PREE dü bee-YEH | zhee-RAY oh fes-tee-VAL', ['carte', 'nom']),
  sent(2021, "Le billet a beau être cher, j'irai au festival.", 'The ticket may well be expensive, but I will go to the festival.',
    '/lə bi.jɛ a bo ɛtʁ ʃɛʁ ʒi.ʁe o fɛs.ti.val/', 'luh bee-YEH a boh etr SHEHR | zhee-RAY oh fes-tee-VAL', ['carte', 'infinitif'], FCVDR),
  sent(2022, "Le billet est cher ; pourtant, j'irai au festival.", 'The ticket is expensive; and yet I will go to the festival.',
    '/lə bi.jɛ ɛ ʃɛʁ puʁ.tɑ̃ ʒi.ʁe o fɛs.ti.val/', 'luh bee-YEH eh SHEHR | poor-TAHⁿ | zhee-RAY oh fes-tee-VAL', ['carte', 'discours']),
  rule(2023, 'Même si ne prend jamais le subjonctif.', 'Même si never takes the subjunctive.',
    '/mɛm si nə pʁɑ̃ ʒa.mɛ lə syb.ʒɔ̃k.tif/', 'mem SEE | nuh prahⁿ zha-MEH | luh süb-zhohⁿk-TEEF',
    'Même si vous ayez raison : que faut-il corriger ?',
    "Avez. Même si est un si : l'indicatif, toujours. Ce n'est pas une variante orale, c'est une faute.",
    ['carte', 'indicatif']),
  sent(2024, 'Quoique le festival soit loin, nous y allons chaque été.', 'Although the festival is far away, we go every summer.',
    '/kwa.kə lə fɛs.ti.val swa lwɛ̃ nu.zi a.lɔ̃ ʃa.ke.te/', 'kwa-kuh luh fes-tee-VAL swa LWEHⁿ | noo-zee a-LOHⁿ | sha-kay-TAY', ['carte', 'subjonctif']),
  sent(2025, "Alors qu'il était gratuit autrefois, le festival est devenu payant.", 'Whereas it used to be free, the festival now charges for entry.',
    '/a.lɔʁ kil e.tɛ ɡʁa.tɥi o.tʁə.fwa lə fɛs.ti.val ɛ də.və.ny pɛ.jɑ̃/', 'a-lor keel ay-teh gra-TWEE oh-truh-FWA | luh fes-tee-VAL | eh duh-vuh-NÜ peh-YAHⁿ', ['carte', 'opposition']),
  sent(2026, 'En dépit de la pluie, le festival a attiré dix mille personnes.', 'In spite of the rain, the festival drew ten thousand people.',
    '/ɑ̃ de.pi də la plɥi lə fɛs.ti.val a a.ti.ʁe di mil pɛʁ.sɔn/', 'ahⁿ day-PEE duh la PLWEE | luh fes-tee-VAL a a-tee-RAY | dee meel pehr-SONN', ['carte', 'nom'], FCVR, SO),
  sent(2027, 'Il pleuvait ; le festival a néanmoins attiré la foule.', 'It was raining; the festival nevertheless drew a crowd.',
    '/il plø.vɛ lə fɛs.ti.val a ne.ɑ̃.mwɛ̃ a.ti.ʁe la ful/', 'eel pluh-VEH | luh fes-tee-VAL a nay-ahⁿ-MWEHⁿ | a-tee-RAY la FOOL', ['carte', 'discours'], FCVR, SO),
  gap(2028, 'Bien que les places soient chères, la salle était pleine.', 'Although the seats were expensive, the hall was full.',
    '/bjɛ̃ kə le plas swa ʃɛʁ la sal e.tɛ plɛn/', 'byehⁿ kuh lay PLASS | swa SHEHR | la SAL ay-teh PLENN',
    'Bien que les places ___ chères, la salle était pleine. (être · bien que)',
    "Bien que impose le subjonctif : soient. Le subjonctif présent suffit, même dans un récit au passé. EN: bien que takes the subjunctive.",
    ['carte', 'subjonctif']),
  gap(2029, 'Même si les places sont chères, la salle sera pleine.', 'Even if the seats are expensive, the hall will be full.',
    '/mɛm si le plas sɔ̃ ʃɛʁ la sal sə.ʁa plɛn/', 'mem see lay PLASS | sohⁿ SHEHR | la SAL suh-ra PLENN',
    'Même si les places ___ chères, la salle sera pleine. (être · même si)',
    "Même si impose l'indicatif : sont. Jamais soient après même si. EN: même si takes the indicative.",
    ['carte', 'indicatif'], FCVDR),
];

/* ── ACT 3 · BIEN QUE, QUOIQUE, ENCORE QUE, SANS QUE (.2030-.2047) ─────────── */

export const ACT3_ROWS: Row[] = [
  sent(2030, "Bien qu'elle soit arrivée il y a six mois, elle connaît déjà tous les dossiers.", 'Although she arrived six months ago, she already knows every file.',
    '/bjɛ̃ kɛl swa.ta.ʁi.ve il ja si mwa ɛl kɔ.nɛ de.ʒa tu le do.sje/', 'byehⁿ kel swa-ta-ree-VAY | eel ya see MWA | el ko-NEH day-ZHA | too lay do-SYAY', ['subjonctif', 'passe'], FCVDR),
  sent(2031, 'Bien que le projet ait pris du retard, le client reste satisfait.', 'Although the project has fallen behind, the client remains satisfied.',
    '/bjɛ̃ kə lə pʁɔ.ʒɛ ɛ pʁi dy ʁə.taʁ lə kli.jɑ̃ ʁɛst sa.tis.fɛ/', 'byehⁿ kuh luh pro-ZHEH | eh pree dü ruh-TAR | luh klee-YAHⁿ rest sa-tees-FEH', ['subjonctif', 'passe']),
  sent(2032, "Quoiqu'elle n'ait jamais dirigé d'équipe, elle a su se faire respecter.", 'Although she had never managed a team, she knew how to earn respect.',
    '/kwa.kɛl nɛ ʒa.mɛ di.ʁi.ʒe de.kip ɛ.la sy sə fɛʁ ʁɛs.pɛk.te/', 'kwa-kel neh zha-MEH dee-ree-ZHAY | day-KEEP | eh-la SÜ | suh fehr res-pek-TAY', ['subjonctif', 'quoique'], FCVR, SO),
  sent(2033, 'Le rapport est solide, encore que certains chiffres soient à vérifier.', 'The report is solid, though some figures need checking.',
    '/lə ʁa.pɔʁ ɛ sɔ.lid ɑ̃.kɔʁ kə sɛʁ.tɛ̃ ʃifʁ swa.ta ve.ʁi.fje/', 'luh ra-POR eh so-LEED | ahⁿ-kor kuh sehr-tehⁿ SHEEFR | swa-ta vay-ree-FYAY', ['subjonctif', 'encore-que'], FCVR, SO),
  sent(2034, "Elle a réorganisé le service sans que personne s'en plaigne.", 'She reorganised the department without anyone complaining.',
    '/ɛ.la ʁe.ɔʁ.ɡa.ni.ze lə sɛʁ.vis sɑ̃ kə pɛʁ.sɔn sɑ̃ plɛɲ/', 'eh-la ray-or-ga-nee-ZAY luh sehr-VEESS | sahⁿ kuh pehr-SONN sahⁿ PLENY', ['subjonctif', 'sans-que'], FCVDR),
  sent(2035, 'Elle a pris cette décision sans consulter son équipe.', 'She made this decision without consulting her team.',
    '/ɛ.la pʁi sɛt de.si.zjɔ̃ sɑ̃ kɔ̃.syl.te sɔ̃.ne.kip/', 'eh-la PREE set day-see-ZYOHⁿ | sahⁿ kohⁿ-sül-TAY | sohⁿ-nay-KEEP', ['infinitif', 'sans-que']),
  sent(2036, 'Bien que très occupée, elle répond toujours dans la journée.', 'Though very busy, she always replies the same day.',
    '/bjɛ̃ kə tʁɛ.zɔ.ky.pe ɛl ʁe.pɔ̃ tu.ʒuʁ dɑ̃ la ʒuʁ.ne/', 'byehⁿ kuh treh-zo-kü-PAY | el ray-pohⁿ too-ZHOOR | dahⁿ la zhoor-NAY', ['subjonctif', 'ellipse']),
  sent(2037, 'Quoique discret, il est très apprécié de ses collègues.', 'Though quiet, he is well liked by his colleagues.',
    '/kwa.kə dis.kʁɛ i.lɛ tʁɛ.za.pʁe.sje də se kɔ.lɛɡ/', 'kwa-kuh dees-KREH | ee-leh treh-za-pray-SYAY | duh say ko-LEG', ['quoique', 'ellipse'], FCVR, SO),
  rule(2038, 'Encore que, après la phrase principale, ajoute une réserve.', 'Encore que, after the main clause, adds a reservation.',
    '/ɑ̃.kɔʁ kə a.pʁɛ la fʁaz pʁɛ̃.si.pal a.ʒut y.nə ʁe.zɛʁv/', 'ahⁿ-kor KUH | a-preh la FRAZ prehⁿ-see-PAL | a-zhoot ü-nuh ray-ZEHRV',
    '« Le rapport est solide, encore que… » : que fait encore que ?',
    "Il nuance après coup, comme « quoique » placé à la fin ou « cela dit ». Registre soutenu, suivi du subjonctif.",
    ['encore-que', 'registre']),
  rule(2039, "Un fait antérieur prend le subjonctif passé : bien qu'elle soit arrivée.", "A fact that came first takes the subjonctif passé: bien qu'elle soit arrivée.",
    '/œ̃ fɛ ɑ̃.te.ʁjœʁ pʁɑ̃ lə syb.ʒɔ̃k.tif pa.se bjɛ̃ kɛl swa.ta.ʁi.ve/', 'uhⁿ FEH ahⁿ-tay-RYUHR | prahⁿ luh süb-zhohⁿk-teef pa-SAY | byehⁿ kel swa-ta-ree-VAY',
    "Bien qu'elle ___ (arriver) il y a six mois : quelle forme ?",
    "Soit arrivée : l'arrivée est finie avant le reste. Pour un fait en même temps, le subjonctif présent : bien qu'elle soit là.",
    ['passe']),
  sent(2040, "Bien qu'il ne soit pas d'accord, il appliquera la décision.", 'Although he does not agree, he will apply the decision.',
    '/bjɛ̃ kil nə swa pa da.kɔʁ i.la.pli.kə.ʁa la de.si.zjɔ̃/', 'byehⁿ keel nuh swa pa da-KOR | ee-la-plee-kuh-RA la day-see-ZYOHⁿ', ['subjonctif'], FCVDR),
  gap(2041, "Bien qu'elle ait manqué la réunion, elle a lu le compte rendu.", 'Although she missed the meeting, she read the minutes.',
    '/bjɛ̃ kɛl ɛ mɑ̃.ke la ʁe.y.njɔ̃ ɛ.la ly lə kɔ̃t ʁɑ̃.dy/', 'byehⁿ kel eh mahⁿ-KAY la ray-ü-NYOHⁿ | eh-la LÜ | luh kohⁿt rahⁿ-DÜ',
    "Bien qu'elle ___ la réunion, elle a lu le compte rendu. (manquer · c'est déjà fait)",
    "La réunion est passée : subjonctif passé, ait manqué. EN: a finished fact takes the subjonctif passé.",
    ['subjonctif', 'passe']),
  gap(2042, 'Il a signé sans que son associé soit au courant.', 'He signed without his partner knowing.',
    '/i.la si.ɲe sɑ̃ kə sɔ̃.na.sɔ.sje swa.to ku.ʁɑ̃/', 'ee-la see-NYAY | sahⁿ kuh sohⁿ-na-so-SYAY | swa-toh koo-RAHⁿ',
    'Il a signé sans que son associé ___ au courant. (être · deux personnes)',
    "Deux sujets : sans que + subjonctif, soit. Un seul sujet : sans + infinitif. EN: two subjects, sans que.",
    ['sans-que'], FCVDR),
  sent(2043, "Bien qu'il fasse de son mieux, les résultats se font attendre.", 'Although he is doing his best, the results are slow to come.',
    '/bjɛ̃ kil fas də sɔ̃ mjø le ʁe.zyl.ta sə fɔ̃ a.tɑ̃dʁ/', 'byehⁿ keel fass duh sohⁿ MYEU | lay ray-zül-TA | suh fohⁿ a-TAHⁿDR', ['subjonctif']),
  sent(2044, 'Le texte me plaît, quoique la fin soit un peu rapide.', 'I like the text, although the ending is a little rushed.',
    '/lə tɛkst mə plɛ kwa.kə la fɛ̃ swa.tœ̃ pø ʁa.pid/', 'luh TEKST muh PLEH | kwa-kuh la FEHⁿ | swa-tuhⁿ puh ra-PEED', ['quoique', 'registre']),
  sent(2045, "Il a obtenu le poste sans qu'on lui fasse passer d'entretien.", 'He got the job without being given an interview.',
    '/i.la ɔp.tə.ny lə pɔst sɑ̃ kɔ̃ lɥi fas pa.se dɑ̃.tʁə.tjɛ̃/', 'ee-la op-tuh-NÜ luh POST | sahⁿ kohⁿ lwee fass pa-SAY | dahⁿ-truh-TYEHⁿ', ['sans-que']),
  sent(2046, 'Bien que la réunion soit terminée, la discussion continue dans le couloir.', 'Although the meeting is over, the discussion goes on in the corridor.',
    '/bjɛ̃ kə la ʁe.y.njɔ̃ swa tɛʁ.mi.ne la dis.ky.sjɔ̃ kɔ̃.ti.ny dɑ̃ lə ku.lwaʁ/', 'byehⁿ kuh la ray-ü-NYOHⁿ | swa tehr-mee-NAY | la dees-kü-SYOHⁿ | kohⁿ-tee-NÜ dahⁿ luh koo-LWAR', ['subjonctif']),
  sent(2047, "Elle est compétente, encore qu'un peu trop prudente.", 'She is competent, though perhaps a little too cautious.',
    '/ɛ.lɛ kɔ̃.pe.tɑ̃t ɑ̃.kɔʁ kœ̃ pø tʁo pʁy.dɑ̃t/', 'eh-leh kohⁿ-pay-TAHⁿT | ahⁿ-kor kuhⁿ PEU | troh prü-DAHⁿT', ['encore-que', 'ellipse'], FCVR, SO),
];

/* ── ACT 4 · QUOI QUE, QUEL QUE, OÙ QUE, QUI QUE (.2048-.2067) ─────────────── */

export const ACT4_ROWS: Row[] = [
  sent(2048, "Quoi qu'il arrive, je serai là pour toi.", 'Whatever happens, I will be there for you.',
    '/kwa kil a.ʁiv ʒə sə.ʁe la puʁ twa/', 'KWA keel a-REEV | zhuh suh-RAY LA | poor TWA', ['indefini', 'quoi-que'], FCVDR),
  sent(2049, 'Où que tu ailles, donne-nous des nouvelles.', 'Wherever you go, keep in touch.',
    '/u kə ty aj dɔn.nu de nu.vɛl/', 'OO kuh tü AYE | donn-NOO day noo-VELL', ['indefini', 'ou-que'], FCVDR),
  sent(2050, "Qui que tu rencontres là-bas, garde ton sens de l'humour.", 'Whoever you meet over there, keep your sense of humour.',
    '/ki kə ty ʁɑ̃.kɔ̃tʁ la.ba ɡaʁd tɔ̃ sɑ̃s də ly.muʁ/', 'KEE kuh tü rahⁿ-KOHⁿTR la-BA | gard tohⁿ SAHⁿS | duh lü-MOOR', ['indefini', 'qui-que']),
  sent(2051, 'Quelle que soit ta décision, nous la respecterons.', 'Whatever your decision, we will respect it.',
    '/kɛl kə swa ta de.si.zjɔ̃ nu la ʁɛs.pɛk.tə.ʁɔ̃/', 'KEL kuh swa ta day-see-ZYOHⁿ | noo la res-pek-tuh-ROHⁿ', ['indefini', 'quel-que'], FCVDR),
  sent(2052, "Quels que soient les obstacles, elle ira jusqu'au bout.", 'Whatever the obstacles, she will see it through.',
    '/kɛl kə swa le.zɔps.takl ɛ.li.ʁa ʒys.ko bu/', 'KEL kuh swa lay-zops-TAKL | eh-lee-RA zhüs-koh BOO', ['indefini', 'quel-que']),
  sent(2053, 'Quelles que soient tes raisons, préviens-nous avant de partir.', 'Whatever your reasons, let us know before you leave.',
    '/kɛl kə swa te ʁɛ.zɔ̃ pʁe.vjɛ̃.nu a.vɑ̃ də paʁ.tiʁ/', 'KEL kuh swa tay reh-ZOHⁿ | pray-vyehⁿ-NOO | a-vahⁿ duh par-TEER', ['indefini', 'quel-que']),
  sent(2054, 'Quoi que tu fasses, fais-le bien.', 'Whatever you do, do it well.',
    '/kwa kə ty fas fɛ.lə bjɛ̃/', 'KWA kuh tü FASS | feh-luh BYEHⁿ', ['indefini', 'quoi-que'], FCVDR),
  sent(2055, 'Quoique tu sois fatiguée, tu dois finir tes valises.', 'Although you are tired, you have to finish packing.',
    '/kwa.kə ty swa fa.ti.ɡe ty dwa fi.niʁ te va.liz/', 'kwa-kuh tü swa fa-tee-GAY | tü dwa fee-NEER tay va-LEEZ', ['quoique', 'contraste']),
  sent(2056, "Quoi qu'en disent les voisins, cette décision te regarde.", 'Whatever the neighbours say, this decision is yours alone.',
    '/kwa kɑ̃ diz le vwa.zɛ̃ sɛt de.si.zjɔ̃ tə ʁə.ɡaʁd/', 'KWA kahⁿ DEEZ lay vwa-ZEHⁿ | set day-see-ZYOHⁿ | tuh ruh-GARD', ['indefini', 'quoi-que']),
  sent(2057, "Si tu as besoin de quoi que ce soit, appelle-moi.", 'If you need anything at all, call me.',
    '/si ty a bə.zwɛ̃ də kwa kə sə swa a.pɛl.mwa/', 'see tü a buh-ZWEHⁿ | duh KWA kuh suh SWA | a-pel-MWA', ['indefini', 'quoi-que']),
  sent(2058, "Où qu'elle soit, elle trouve toujours un café pour travailler.", 'Wherever she is, she always finds a café to work in.',
    '/u kɛl swa ɛl tʁuv tu.ʒuʁ œ̃ ka.fe puʁ tʁa.va.je/', 'OO kel SWA | el troov too-ZHOOR | uhⁿ ka-FAY poor tra-va-YAY', ['indefini', 'ou-que']),
  rule(2059, "Quoi que en deux mots : whatever. Quoique en un mot : although.", 'Quoi que in two words: whatever. Quoique in one word: although.',
    '/kwa kə ɑ̃ dø mo kwa.kə ɑ̃.nœ̃ mo/', 'KWA kuh | ahⁿ deu MOH | kwa-KUH | ahⁿ-nuhⁿ MOH',
    '« Quoi que tu fasses » ou « quoique tu fasses » : lequel veut dire whatever ?',
    "En deux mots : quoi que tu fasses, n'importe quelle chose que tu fasses. En un mot, quoique veut dire bien que. Si « bien que » va, c'est quoique.",
    ['quoi-que', 'quoique']),
  rule(2060, "Quel que soit s'accorde avec le nom qui suit.", 'Quel que soit agrees with the noun that follows.',
    '/kɛl kə swa sa.kɔʁd a.vɛk lə nɔ̃ ki sɥi/', 'KEL kuh SWA | sa-KORD a-vek luh NOHⁿ | kee SWEE',
    '___ que soient les risques : quel, quelle, quels ou quelles ?',
    "Quels : risques est masculin pluriel. Quel s'accorde avec le sujet de soit, qui vient après lui ; soit s'accorde aussi : soient.",
    ['quel-que', 'accord']),
  gap(2061, 'Quelle que soit la météo, nous partirons demain.', 'Whatever the weather, we will leave tomorrow.',
    '/kɛl kə swa la me.te.o nu paʁ.ti.ʁɔ̃ də.mɛ̃/', 'KEL kuh swa la may-tay-OH | noo par-tee-rohⁿ duh-MEHⁿ',
    '___ que soit la météo, nous partirons demain. (quel · la météo)',
    "La météo est féminin singulier : quelle que soit. EN: quel agrees with the noun after soit.",
    ['quel-que', 'accord'], FCVDR),
  gap(2062, 'Où que vous alliez, gardez vos papiers sur vous.', 'Wherever you go, keep your papers on you.',
    '/u kə vu.za.lje ɡaʁ.de vo pa.pje syʁ vu/', 'OO kuh voo-za-LYAY | gar-DAY voh pa-PYAY | sür VOO',
    'Où que vous ___, gardez vos papiers sur vous. (aller)',
    "Où que + subjonctif : que vous alliez. EN: où que takes the subjunctive.",
    ['ou-que']),
  sent(2063, "Quoi qu'il en soit, le vol part à sept heures.", 'Be that as it may, the flight leaves at seven.',
    '/kwa ki.lɑ̃ swa lə vɔl paʁ a sɛ.tœʁ/', 'KWA kee-lahⁿ SWA | luh VOL par a seh-TUHR', ['indefini', 'fige']),
  sent(2064, 'Qui que vous soyez, vous devez présenter un billet.', 'Whoever you are, you must show a ticket.',
    '/ki kə vu swa.je vu də.ve pʁe.zɑ̃.te œ̃ bi.jɛ/', 'KEE kuh voo swa-YAY | voo duh-VAY pray-zahⁿ-TAY uhⁿ bee-YEH', ['indefini', 'qui-que'], FCVDR),
  sent(2065, "Quelques efforts qu'il fasse, il n'arrive pas à suivre.", 'Whatever efforts he makes, he cannot keep up.',
    '/kɛl.kə.ze.fɔʁ kil fas il na.ʁiv pa a sɥivʁ/', 'kel-kuh-zay-FOR keel FASS | eel na-REEV pa a SWEEVR', ['indefini', 'litteraire'], FC, SO),
  sent(2066, 'Quoi que tu décides, je te soutiendrai.', 'Whatever you decide, I will stand by you.',
    '/kwa kə ty de.sid ʒə tə su.tjɛ̃.dʁe/', 'KWA kuh tü day-SEED | zhuh tuh soo-tyehⁿ-DRAY', ['indefini', 'quoi-que']),
  sent(2067, "Où qu'on regarde, on voit des grues.", 'Wherever you look, you see cranes.',
    '/u kɔ̃ ʁə.ɡaʁd ɔ̃ vwa de ɡʁy/', 'OO kohⁿ ruh-GARD | ohⁿ vwa day GRÜ', ['indefini', 'ou-que']),
];

/* ── ACT 5 · SI RICHE QU'IL SOIT, TOUT RICHE QU'IL EST (.2068-.2083) ───────── */

export const ACT5_ROWS: Row[] = [
  sent(2068, "Si lumineux qu'il soit, cet appartement est trop cher pour nous.", 'However bright it may be, this flat is too expensive for us.',
    '/si ly.mi.nø kil swa sɛ.ta.paʁ.tə.mɑ̃ ɛ tʁo ʃɛʁ puʁ nu/', 'see lü-mee-NEU keel SWA | seh-ta-par-tuh-MAHⁿ | eh troh SHEHR poor NOO', ['intensite', 'si-que'], FCVDR),
  sent(2069, 'Aussi grande que soit la cuisine, elle reste mal équipée.', 'However big the kitchen is, it is still poorly equipped.',
    '/o.si ɡʁɑ̃d kə swa la kɥi.zin ɛl ʁɛst ma.le.ki.pe/', 'oh-see GRAHⁿD kuh swa la kwee-ZEEN | el rest ma-lay-kee-PAY', ['intensite', 'aussi-que']),
  sent(2070, "Tout petit qu'il est, ce studio a beaucoup de charme.", 'Small as it is, this studio has a lot of charm.',
    '/tu pə.ti ki.lɛ sə sty.djo a bo.ku də ʃaʁm/', 'too puh-TEE kee-LEH | suh stü-DYOH | a boh-koo duh SHARM', ['intensite', 'tout-que'], FCVDR),
  sent(2071, "Toute neuve qu'elle est, la chaudière fait un bruit terrible.", 'Brand new as it is, the boiler makes a terrible noise.',
    '/tut nœv kɛ.lɛ la ʃo.djɛʁ fɛ.tœ̃ bʁɥi tɛ.ʁibl/', 'toot NUHV keh-LEH | la shoh-DYEHR | feh-tuhⁿ BRWEE teh-REEBL', ['intensite', 'tout-que', 'accord']),
  sent(2072, "Aussi pratique soit-il, ce quartier manque d'écoles.", 'Practical as it may be, this neighbourhood lacks schools.',
    '/o.si pʁa.tik swa.til sə kaʁ.tje mɑ̃k de.kɔl/', 'oh-see pra-TEEK swa-TEEL | suh kar-TYAY | mahⁿk day-KOL', ['intensite', 'inversion'], FCVR, SO),
  sent(2073, 'Si chers que soient les loyers, les gens veulent vivre ici.', 'However high the rents, people want to live here.',
    '/si ʃɛʁ kə swa le lwa.je le ʒɑ̃ vœl vivʁ i.si/', 'see SHEHR kuh swa lay lwa-YAY | lay ZHAHⁿ vuhl veevr ee-SEE', ['intensite', 'si-que']),
  sent(2074, "Tout riche qu'il est, il vit très simplement.", 'Rich as he is, he lives very simply.',
    '/tu ʁiʃ ki.lɛ il vi tʁɛ sɛ̃.plə.mɑ̃/', 'too REESH kee-LEH | eel VEE | treh sehⁿ-pluh-MAHⁿ', ['intensite', 'tout-que']),
  sent(2075, "Quelque habile qu'il soit, il ne convaincra pas le propriétaire.", 'However skilful he may be, he will not convince the landlord.',
    '/kɛl.kə a.bil kil swa il nə kɔ̃.vɛ̃.kʁa pa lə pʁɔ.pʁi.je.tɛʁ/', 'kel-kuh a-BEEL keel SWA | eel nuh kohⁿ-vehⁿ-KRA pa | luh pro-pree-yay-TEHR', ['intensite', 'litteraire'], FC, SO),
  rule(2076, 'Si, aussi + adjectif + que : subjonctif. Tout + adjectif + que : indicatif.', 'Si, aussi + adjective + que: subjunctive. Tout + adjective + que: indicative.',
    '/si o.si a.ʒɛk.tif kə syb.ʒɔ̃k.tif tu a.ʒɛk.tif kə ɛ̃.di.ka.tif/', 'SEE | oh-SEE a-zhek-TEEF KUH | süb-zhohⁿk-TEEF | TOO a-zhek-TEEF KUH | ehⁿ-dee-ka-TEEF',
    "Si riche qu'il ___ ; tout riche qu'il ___ : quels modes ?",
    "Soit, puis est. Si et aussi poussent un degré sans le vérifier : subjonctif. Tout pose le fait comme vrai : indicatif, même si l'on trouve aussi le subjonctif.",
    ['si-que', 'tout-que']),
  rule(2077, "Devant un adjectif féminin qui commence par une consonne, tout devient toute.", 'Before a feminine adjective starting with a consonant, tout becomes toute.',
    '/də.vɑ̃ œ̃.na.ʒɛk.tif fe.mi.nɛ̃ ki kɔ.mɑ̃s paʁ y.nə kɔ̃.sɔn tu də.vjɛ̃ tut/', 'duh-vahⁿ uhⁿ-na-zhek-TEEF fay-mee-NEHⁿ | kee ko-MAHⁿS | par ü-nuh kohⁿ-SONN | too duh-vyehⁿ TOOT',
    "___ petite qu'elle est : tout ou toute ?",
    "Toute : petite est féminin et commence par une consonne. Au masculin, tout ne bouge pas : tout petit qu'il est, tout fatigués qu'ils étaient.",
    ['tout-que', 'accord']),
  gap(2078, "Si grande qu'elle soit, la cuisine manque de rangements.", 'However big it is, the kitchen lacks storage.',
    '/si ɡʁɑ̃d kɛl swa la kɥi.zin mɑ̃k də ʁɑ̃ʒ.mɑ̃/', 'see GRAHⁿD kel SWA | la kwee-ZEEN | mahⁿk duh rahⁿzh-MAHⁿ',
    "Si grande qu'elle ___, la cuisine manque de rangements. (être · si… que)",
    "Si + adjectif + que : subjonctif, soit. EN: si… que takes the subjunctive.",
    ['si-que'], FCVDR),
  gap(2079, "Toute petite qu'elle est, la chambre est très calme.", 'Small as it is, the bedroom is very quiet.',
    '/tut pə.tit kɛ.lɛ la ʃɑ̃bʁ ɛ tʁɛ kalm/', 'toot puh-TEET keh-LEH | la SHAHⁿBR | eh treh KALM',
    "___ petite qu'elle est, la chambre est très calme. (tout · petite)",
    "Toute : devant un adjectif féminin qui commence par une consonne, tout s'accorde. Et l'indicatif, est. EN: toute before a feminine consonant.",
    ['tout-que', 'accord']),
  sent(2080, "Si difficile que ce soit, il faudra déménager avant l'hiver.", 'However hard it may be, we will have to move before winter.',
    '/si di.fi.sil kə sə swa il fo.dʁa de.me.na.ʒe a.vɑ̃ li.vɛʁ/', 'see dee-fee-SEEL kuh suh SWA | eel foh-DRA | day-may-na-ZHAY a-vahⁿ lee-VEHR', ['si-que']),
  sent(2081, 'Aussi étrange que cela paraisse, le loyer a baissé.', 'Strange as it may seem, the rent has gone down.',
    '/o.si e.tʁɑ̃ʒ kə sə.la pa.ʁɛs lə lwa.je a bɛ.se/', 'oh-see ay-TRAHⁿZH | kuh suh-LA pa-RESS | luh lwa-YAY a beh-SAY', ['aussi-que'], FCVDR),
  sent(2082, 'Si pressé que tu sois, relis le bail avant de signer.', 'However much of a hurry you are in, reread the lease before signing.',
    '/si pʁɛ.se kə ty swa ʁə.li lə baj a.vɑ̃ də si.ɲe/', 'see preh-SAY kuh tü SWA | ruh-LEE luh BYE | a-vahⁿ duh see-NYAY', ['si-que']),
  sent(2083, "Tout fatigués qu'ils étaient, ils ont monté les cartons.", 'Tired as they were, they carried the boxes up.',
    '/tu fa.ti.ɡe kil.ze.tɛ il.zɔ̃ mɔ̃.te le kaʁ.tɔ̃/', 'too fa-tee-GAY keel-zay-TEH | eel-zohⁿ mohⁿ-TAY lay kar-TOHⁿ', ['tout-que']),
];

/* ── ACT 6 · MÊME SI, TOUJOURS L'INDICATIF (.2086-.2100) ───────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(2086, "Même si le train est plus lent, je le préfère à l'avion.", 'Even though the train is slower, I prefer it to the plane.',
    '/mɛm si lə tʁɛ̃ ɛ ply lɑ̃ ʒə lə pʁe.fɛʁ a la.vjɔ̃/', 'mem see luh TREHⁿ | eh plü LAHⁿ | zhuh luh pray-FEHR | a la-VYOHⁿ', ['meme-si', 'fait'], FCVDR),
  sent(2087, 'Même si le train était deux fois plus lent, je le prendrais.', 'Even if the train were twice as slow, I would take it.',
    '/mɛm si lə tʁɛ̃ e.tɛ dø fwa ply lɑ̃ ʒə lə pʁɑ̃.dʁɛ/', 'mem see luh TREHⁿ | ay-teh deu fwa plü LAHⁿ | zhuh luh prahⁿ-DREH', ['meme-si', 'hypothese'], FCVDR),
  sent(2088, "Même si j'avais eu le choix, j'aurais pris le train.", 'Even if I had had the choice, I would have taken the train.',
    '/mɛm si ʒa.vɛ.zy lə ʃwa ʒo.ʁɛ pʁi lə tʁɛ̃/', 'mem see zha-veh-ZÜ luh SHWA | zhoh-reh PREE luh TREHⁿ', ['meme-si', 'passe']),
  sent(2089, 'Même si tu pars tôt, tu risques de rater la correspondance.', 'Even if you leave early, you may miss the connection.',
    '/mɛm si ty paʁ to ty ʁisk də ʁa.te la kɔ.ʁɛs.pɔ̃.dɑ̃s/', 'mem see tü par TOH | tü REESK | duh ra-TAY la ko-res-pohⁿ-DAHⁿS', ['meme-si', 'fait']),
  sent(2090, "Même s'il pleut demain, la randonnée est maintenue.", 'Even if it rains tomorrow, the hike is still on.',
    '/mɛm sil plø də.mɛ̃ la ʁɑ̃.dɔ.ne ɛ mɛ̃t.ny/', 'mem seel pleu duh-MEHⁿ | la rahⁿ-do-NAY | eh mehⁿt-NÜ', ['meme-si', 'futur']),
  sent(2091, "Même si elle ne l'avoue pas, elle a peur de l'avion.", 'Even though she will not admit it, she is afraid of flying.',
    '/mɛm si ɛl nə la.vu pa ɛ.la pœʁ də la.vjɔ̃/', 'mem see el nuh la-VOO pa | eh-la PUHR | duh la-VYOHⁿ', ['meme-si', 'fait']),
  rule(2092, 'Même si : ni subjonctif, ni futur, ni conditionnel juste après.', 'Même si: no subjunctive, no future, no conditional straight after it.',
    '/mɛm si ni syb.ʒɔ̃k.tif ni fy.tyʁ ni kɔ̃.di.sjɔ.nɛl ʒys.ta.pʁɛ/', 'mem SEE | nee süb-zhohⁿk-TEEF | nee fü-TÜR | nee kohⁿ-dee-syo-NELL | zhüs-ta-PREH',
    'Même si + subjonctif : un usage oral, ou une faute ?',
    "Une faute, à l'oral comme à l'écrit. Même si est un si : présent, imparfait ou plus-que-parfait après lui ; le futur et le conditionnel vont dans l'autre partie.",
    ['meme-si']),
  rule(2093, "Même si + imparfait : une hypothèse, et le conditionnel dans l'autre partie.", 'Même si + imparfait: a hypothesis, with the conditional in the other clause.',
    '/mɛm si ɛ̃.paʁ.fɛ y.ni.pɔ.tɛz e lə kɔ̃.di.sjɔ.nɛl dɑ̃ lotʁ paʁ.ti/', 'mem see ehⁿ-par-FEH | ü-nee-po-TEZ | ay luh kohⁿ-dee-syo-NELL | dahⁿ lohtr par-TEE',
    'Même si le train était deux fois plus lent… : un fait ou une hypothèse ?',
    "Une hypothèse : le train n'est pas si lent. Imparfait après même si, conditionnel ensuite : je le prendrais. Comme après si, dans la leçon 10 du B1.",
    ['meme-si', 'hypothese']),
  gap(2094, 'Même si le vol était moins cher, je prendrais le train.', 'Even if the flight were cheaper, I would take the train.',
    '/mɛm si lə vɔl e.tɛ mwɛ̃ ʃɛʁ ʒə pʁɑ̃.dʁɛ lə tʁɛ̃/', 'mem see luh VOL | ay-teh mwehⁿ SHEHR | zhuh prahⁿ-DREH luh TREHⁿ',
    'Même si le vol ___ moins cher, je prendrais le train. (être · une hypothèse)',
    "Une hypothèse avec même si : l'imparfait, était. Jamais serait après même si. EN: imparfait after même si, conditional after.",
    ['meme-si', 'hypothese'], FCVDR),
  gap(2095, "Même s'il neige demain, nous partirons.", 'Even if it snows tomorrow, we will leave.',
    '/mɛm sil nɛʒ də.mɛ̃ nu paʁ.ti.ʁɔ̃/', 'mem seel NEZH duh-MEHⁿ | noo par-tee-ROHⁿ',
    "Même s'il ___ demain, nous partirons. (neiger · demain)",
    "Demain, mais le présent après même si : neige. Le futur va dans l'autre partie, partirons. EN: présent after même si, even for tomorrow.",
    ['meme-si', 'futur']),
  sent(2096, 'Même si tout le monde prenait le train, les lignes ne suffiraient pas.', 'Even if everyone took the train, the lines would not be enough.',
    '/mɛm si tu lə mɔ̃d pʁə.nɛ lə tʁɛ̃ le liɲ nə sy.fi.ʁɛ pa/', 'mem see too luh MOHⁿD | pruh-neh luh TREHⁿ | lay LEENY | nuh sü-fee-reh PA', ['meme-si', 'hypothese']),
  sent(2097, "Même si c'est plus cher, je voyage en train pour le climat.", 'Even though it costs more, I travel by train for the sake of the climate.',
    '/mɛm si sɛ ply ʃɛʁ ʒə vwa.jaʒ ɑ̃ tʁɛ̃ puʁ lə kli.ma/', 'mem see seh plü SHEHR | zhuh vwa-YAZH ahⁿ TREHⁿ | poor luh klee-MA', ['meme-si', 'fait']),
  sent(2098, "Bien que le train soit plus lent, je le préfère à l'avion.", 'Although the train is slower, I prefer it to the plane.',
    '/bjɛ̃ kə lə tʁɛ̃ swa ply lɑ̃ ʒə lə pʁe.fɛʁ a la.vjɔ̃/', 'byehⁿ kuh luh TREHⁿ | swa plü LAHⁿ | zhuh luh pray-FEHR | a la-VYOHⁿ', ['bien-que', 'paire']),
  sent(2099, 'Même si je le voulais, je ne pourrais pas partir cette semaine.', 'Even if I wanted to, I could not leave this week.',
    '/mɛm si ʒə lə vu.lɛ ʒə nə pu.ʁɛ pa paʁ.tiʁ sɛt sə.mɛn/', 'mem see zhuh luh voo-LEH | zhuh nuh poo-reh PA | par-teer set suh-MENN', ['meme-si', 'hypothese']),
  sent(2100, "Même si tu n'es pas convaincue, essaie une fois.", 'Even if you are not convinced, try it once.',
    '/mɛm si ty nɛ pa kɔ̃.vɛ̃.ky e.sɛ yn fwa/', 'mem see tü neh pa kohⁿ-vehⁿ-KÜ | ay-SEH ün FWA', ['meme-si', 'fait']),
];

/* ── ACT 7 · QUAND BIEN MÊME, L'HYPOTHÈSE EXTRÊME (.2102-.2114) ─────────────── */

export const ACT7_ROWS: Row[] = [
  sent(2102, 'Quand bien même on ajouterait des bus, les routes resteraient saturées.', 'Even if more buses were added, the roads would still be jammed.',
    '/kɑ̃ bjɛ̃ mɛm ɔ̃.na.ʒu.tʁɛ de bys le ʁut ʁɛs.tə.ʁɛ sa.ty.ʁe/', 'kahⁿ byehⁿ MEM | ohⁿ-na-zhoo-TREH day BÜS | lay ROOT | res-tuh-reh sa-tü-RAY', ['conditionnel'], FCVDR, SO),
  sent(2103, "Quand bien même tu aurais raison, ce n'est pas le moment d'en parler.", 'Even if you were right, now is not the time to bring it up.',
    '/kɑ̃ bjɛ̃ mɛm ty o.ʁɛ ʁɛ.zɔ̃ sə nɛ pa lə mɔ.mɑ̃ dɑ̃ paʁ.le/', 'kahⁿ byehⁿ MEM | tü oh-reh reh-ZOHⁿ | suh neh pa luh mo-MAHⁿ | dahⁿ par-LAY', ['conditionnel'], FCVR, SO),
  sent(2104, "Quand bien même il s'excuserait, je ne lui ferais plus confiance.", 'Even if he apologised, I would no longer trust him.',
    '/kɑ̃ bjɛ̃ mɛm il sɛks.ky.zə.ʁɛ ʒə nə lɥi fə.ʁɛ ply kɔ̃.fjɑ̃s/', 'kahⁿ byehⁿ MEM | eel sex-kü-zuh-REH | zhuh nuh lwee fuh-reh plü kohⁿ-FYAHⁿS', ['conditionnel', 'paire'], FCVR, SO),
  sent(2105, "Même s'il s'excusait, je ne lui ferais plus confiance.", 'Even if he apologised, I would no longer trust him.',
    '/mɛm sil sɛks.ky.zɛ ʒə nə lɥi fə.ʁɛ ply kɔ̃.fjɑ̃s/', 'mem seel sex-kü-ZEH | zhuh nuh lwee fuh-reh plü kohⁿ-FYAHⁿS', ['meme-si', 'paire'], FCVDR),
  sent(2106, 'Quand bien même la réunion aurait lieu, je ne pourrais pas y assister.', 'Even if the meeting went ahead, I could not attend.',
    '/kɑ̃ bjɛ̃ mɛm la ʁe.y.njɔ̃ o.ʁɛ ljø ʒə nə pu.ʁɛ pa i a.sis.te/', 'kahⁿ byehⁿ MEM | la ray-ü-NYOHⁿ oh-reh LYEU | zhuh nuh poo-reh PA | ee a-sees-TAY', ['conditionnel'], FCVR, SO),
  sent(2107, "Quand bien même elle l'aurait su, elle n'aurait rien pu faire.", 'Even if she had known, she could not have done anything.',
    '/kɑ̃ bjɛ̃ mɛm ɛl lo.ʁɛ sy ɛl no.ʁɛ ʁjɛ̃ py fɛʁ/', 'kahⁿ byehⁿ MEM | el loh-reh SÜ | el noh-reh ryehⁿ pü FEHR', ['conditionnel', 'passe'], FCVR, SO),
  rule(2108, "Quand bien même + conditionnel : l'hypothèse la plus forte, en registre soutenu.", 'Quand bien même + conditional: the strongest hypothesis, in a formal register.',
    '/kɑ̃ bjɛ̃ mɛm kɔ̃.di.sjɔ.nɛl li.pɔ.tɛz la ply fɔʁt ɑ̃ ʁə.ʒistʁ su.tə.ny/', 'kahⁿ byehⁿ MEM | kohⁿ-dee-syo-NELL | lee-po-TEZ la plü FORT | ahⁿ ruh-zheestr soo-tuh-NÜ',
    'Quand bien même il ___ (pleuvoir) : quel mode ?',
    "Le conditionnel : quand bien même il pleuvrait. Au quotidien, même si dit la même chose avec l'imparfait : même s'il pleuvait.",
    ['conditionnel', 'registre']),
  rule(2109, "Quand même seul veut dire « malgré tout » ; quand bien même ouvre une hypothèse.", 'Quand même on its own means « all the same »; quand bien même opens a hypothesis.',
    '/kɑ̃ mɛm sœl vø diʁ mal.ɡʁe tu kɑ̃ bjɛ̃ mɛm u.vʁy.ni.pɔ.tɛz/', 'kahⁿ MEM SUHL | veu DEER | mal-gray TOO | kahⁿ byehⁿ MEM | oo-vrü-nee-po-TEZ',
    '« Il est venu quand même » et « quand bien même il viendrait » : même sens ?',
    "Non. Quand même, en fin de phrase, dit qu'un fait a eu lieu malgré l'obstacle, comme dans la leçon 24 du B1. Quand bien même pose une hypothèse extrême.",
    ['conditionnel', 'quand-meme']),
  gap(2110, 'Quand bien même le musée serait gratuit, peu de gens y iraient.', 'Even if the museum were free, few people would go.',
    '/kɑ̃ bjɛ̃ mɛm lə my.ze sə.ʁɛ ɡʁa.tɥi pø də ʒɑ̃ i i.ʁjɛ/', 'kahⁿ byehⁿ MEM | luh mü-ZAY suh-reh gra-TWEE | peu duh ZHAHⁿ | ee ee-RYEH',
    'Quand bien même le musée ___ gratuit, peu de gens y iraient. (être · quand bien même)',
    "Quand bien même impose le conditionnel : serait. EN: quand bien même takes the conditional.",
    ['conditionnel'], FCVR, SO),
  gap(2111, 'Même si le musée était gratuit, peu de gens y iraient.', 'Even if the museum were free, few people would go.',
    '/mɛm si lə my.ze e.tɛ ɡʁa.tɥi pø də ʒɑ̃ i i.ʁjɛ/', 'mem see luh mü-ZAY | ay-teh gra-TWEE | peu duh ZHAHⁿ | ee ee-RYEH',
    'Même si le musée ___ gratuit, peu de gens y iraient. (être · même si)',
    "Même hypothèse, autre mot : même si prend l'imparfait, était. EN: même si takes the imparfait here.",
    ['meme-si', 'paire'], FCVDR),
  sent(2112, "Quand bien même tu insisterais, je ne changerais pas d'avis.", 'Even if you insisted, I would not change my mind.',
    '/kɑ̃ bjɛ̃ mɛm ty ɛ̃.sis.tə.ʁɛ ʒə nə ʃɑ̃ʒ.ʁɛ pa da.vi/', 'kahⁿ byehⁿ MEM | tü ehⁿ-sees-tuh-REH | zhuh nuh shahⁿzh-reh pa da-VEE', ['conditionnel'], FCVR, SO),
  sent(2113, 'Quand bien même les chiffres seraient bons, la méthode pose problème.', 'Even if the figures were good, the method is a problem.',
    '/kɑ̃ bjɛ̃ mɛm le ʃifʁ sə.ʁɛ bɔ̃ la me.tɔd poz pʁɔ.blɛm/', 'kahⁿ byehⁿ MEM | lay SHEEFR suh-reh BOHⁿ | la may-TOD | pohz pro-BLEM', ['conditionnel'], FCVR, SO),
  sent(2114, "Quand bien même nous partirions à l'aube, nous arriverions trop tard.", 'Even if we left at dawn, we would arrive too late.',
    '/kɑ̃ bjɛ̃ mɛm nu paʁ.ti.ʁjɔ̃ a lob nu.za.ʁi.və.ʁjɔ̃ tʁo taʁ/', 'kahⁿ byehⁿ MEM | noo par-tee-RYOHⁿ a LOHB | noo-za-ree-vuh-RYOHⁿ | troh TAR', ['conditionnel'], FCVR, SO),
];

/* ── ACT 8 · AVOIR BEAU, LOIN DE, AU LIEU DE (.2116-.2133) ─────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(2116, "J'ai eu beau appeler trois fois, personne n'a répondu.", 'Although I called three times, nobody answered.',
    '/ʒe y bo a.ple tʁwa fwa pɛʁ.sɔn na ʁe.pɔ̃.dy/', 'zhay ü BOH | a-play trwa FWA | pehr-SONN na ray-pohⁿ-DÜ', ['avoir-beau', 'temps'], FCVDR),
  sent(2117, "J'ai beau avoir tout vérifié, l'application refuse ma connexion.", 'Even though I have checked everything, the app will not let me log in.',
    '/ʒe bo a.vwaʁ tu ve.ʁi.fje la.pli.ka.sjɔ̃ ʁə.fyz ma kɔ.nɛk.sjɔ̃/', 'zhay BOH | a-vwar too vay-ree-FYAY | la-plee-ka-SYOHⁿ | ruh-FÜZ ma ko-nek-SYOHⁿ', ['avoir-beau', 'infinitif-passe']),
  sent(2118, "Tu aurais beau redémarrer l'ordinateur, le problème reviendrait.", 'Even if you restarted the computer, the problem would come back.',
    '/ty o.ʁɛ bo ʁə.de.ma.ʁe lɔʁ.di.na.tœʁ lə pʁɔ.blɛm ʁə.vjɛ̃.dʁɛ/', 'tü oh-reh BOH | ruh-day-ma-RAY lor-dee-na-TUHR | luh pro-BLEM ruh-vyehⁿ-DREH', ['avoir-beau', 'temps']),
  sent(2119, "L'imprimante a beau être neuve, elle tombe en panne chaque semaine.", 'The printer may be new, but it breaks down every week.',
    '/lɛ̃.pʁi.mɑ̃t a bo ɛtʁ nœv ɛl tɔ̃.bɑ̃ pan ʃak sə.mɛn/', 'lehⁿ-pree-MAHⁿT a boh etr NUHV | el tohⁿ-bahⁿ PANN | shak suh-MENN', ['avoir-beau', 'etre'], FCVDR),
  sent(2120, 'Nous avions beau relancer le service client, rien ne bougeait.', 'However often we chased customer service, nothing happened.',
    '/nu.za.vjɔ̃ bo ʁə.lɑ̃.se lə sɛʁ.vis kli.jɑ̃ ʁjɛ̃ nə bu.ʒɛ/', 'noo-za-vyohⁿ BOH | ruh-lahⁿ-SAY luh sehr-veess klee-YAHⁿ | ryehⁿ nuh boo-ZHEH', ['avoir-beau', 'temps']),
  sent(2121, 'Loin de se décourager, elle a recommencé le lendemain.', 'Far from giving up, she started again the next day.',
    '/lwɛ̃ də sə de.ku.ʁa.ʒe ɛ.la ʁə.kɔ.mɑ̃.se lə lɑ̃d.mɛ̃/', 'lwehⁿ duh suh day-koo-ra-ZHAY | eh-la ruh-ko-mahⁿ-SAY | luh lahⁿd-MEHⁿ', ['loin-de'], FCVDR),
  sent(2122, "Loin de régler le problème, la mise à jour l'a aggravé.", 'Far from solving the problem, the update made it worse.',
    '/lwɛ̃ də ʁe.ɡle lə pʁɔ.blɛm la mi.za ʒuʁ la a.ɡʁa.ve/', 'lwehⁿ duh ray-GLAY luh pro-BLEM | la mee-za ZHOOR | la a-gra-VAY', ['loin-de']),
  sent(2123, "Au lieu de m'aider, le technicien m'a renvoyée vers le site.", 'Instead of helping me, the technician sent me back to the website.',
    '/o ljø də me.de lə tɛk.ni.sjɛ̃ ma ʁɑ̃.vwa.je vɛʁ lə sit/', 'oh LYEU duh may-DAY | luh tek-nee-SYEHⁿ | ma rahⁿ-vwa-YAY vehr luh SEET', ['au-lieu-de']),
  sent(2124, 'Il a signé le contrat sans le lire.', 'He signed the contract without reading it.',
    '/i.la si.ɲe lə kɔ̃.tʁa sɑ̃ lə liʁ/', 'ee-la see-NYAY luh kohⁿ-TRA | sahⁿ luh LEER', ['sans'], FCVDR),
  rule(2125, "Avoir beau se conjugue à tous les temps ; l'infinitif ne bouge pas.", 'Avoir beau is conjugated in every tense; the infinitive never changes.',
    '/a.vwaʁ bo sə kɔ̃.ʒyɡ a tu le tɑ̃ lɛ̃.fi.ni.tif nə buʒ pa/', 'a-vwar BOH | suh kohⁿ-ZHÜG | a too lay TAHⁿ | lehⁿ-fee-nee-TEEF | nuh boozh PA',
    "J'ai eu beau appeler : quel verbe se conjugue ?",
    "Avoir : j'ai beau, j'ai eu beau, tu aurais beau, elle avait beau. L'infinitif reste tel quel, et la deuxième partie dit l'échec, sans mais.",
    ['avoir-beau', 'temps']),
  rule(2126, "Loin de : l'inverse de ce qu'on attendait. Au lieu de : une action à la place d'une autre.", 'Loin de: the opposite of what was expected. Au lieu de: one action in place of another.',
    '/lwɛ̃ də lɛ̃.vɛʁs də sə kɔ̃.na.tɑ̃.dɛ o ljø də y.nak.sjɔ̃ a la plas dy.nɔtʁ/', 'lwehⁿ DUH | lehⁿ-VEHRS | duh suh kohⁿ-na-tahⁿ-DEH | oh LYEU DUH | ü-nak-SYOHⁿ | a la PLASS dü-NOHTR',
    "Loin de s'excuser, il a ri : que veut dire loin de ?",
    "Non seulement il ne s'est pas excusé, mais il a fait le contraire. Courant, très fréquent à l'écrit. Au lieu de remplace simplement une action par une autre.",
    ['loin-de', 'au-lieu-de']),
  gap(2127, "Elle a eu beau crier, personne ne l'a entendue.", 'However loudly she shouted, nobody heard her.',
    '/ɛ.la y bo kʁi.je pɛʁ.sɔn nə la ɑ̃.tɑ̃.dy/', 'eh-la ü BOH kree-YAY | pehr-SONN | nuh la ahⁿ-tahⁿ-DÜ',
    "Elle ___ beau crier, personne ne l'a entendue. (avoir · passé composé)",
    "Le passé composé d'avoir : a eu beau. L'infinitif, crier, ne change pas. EN: conjugate avoir, keep the infinitive.",
    ['avoir-beau', 'temps'], FCVDR),
  gap(2128, "Loin de s'excuser, le vendeur m'a accusé de mentir.", 'Far from apologising, the salesman accused me of lying.',
    '/lwɛ̃ də sɛks.ky.ze lə vɑ̃.dœʁ ma.ky.ze də mɑ̃.tiʁ/', 'lwehⁿ duh sex-kü-ZAY | luh vahⁿ-DUHR | ma-kü-ZAY duh mahⁿ-TEER',
    "___ de s'excuser, le vendeur m'a accusé de mentir. (le contraire de ce qu'on attendait)",
    "Loin de : il a fait l'inverse de ce qu'on attendait. Au lieu de dirait seulement une action à la place d'une autre. EN: far from.",
    ['loin-de']),
  sent(2129, 'On a beau dire, ce vieux téléphone marche encore très bien.', 'Say what you like, this old phone still works very well.',
    '/ɔ̃.na bo diʁ sə vjø te.le.fɔn maʁʃ ɑ̃.kɔʁ tʁɛ bjɛ̃/', 'ohⁿ-na boh DEER | suh vyeu tay-lay-FONN | marsh ahⁿ-kor treh BYEHⁿ', ['avoir-beau', 'fige']),
  sent(2130, 'Tu as beau être pressé, prends le temps de sauvegarder.', 'Even if you are in a hurry, take the time to save your work.',
    '/ty a bo ɛtʁ pʁɛ.se pʁɑ̃ lə tɑ̃ də sov.ɡaʁ.de/', 'tü a boh etr preh-SAY | prahⁿ luh TAHⁿ | duh sohv-gar-DAY', ['avoir-beau', 'etre']),
  sent(2131, "Au lieu de réparer l'écran, ils m'ont proposé un nouvel appareil.", 'Instead of repairing the screen, they offered me a new device.',
    '/o ljø də ʁe.pa.ʁe le.kʁɑ̃ il mɔ̃ pʁɔ.po.ze œ̃ nu.vɛ.la.pa.ʁɛj/', 'oh LYEU duh ray-pa-RAY lay-KRAHⁿ | eel mohⁿ pro-poh-ZAY | uhⁿ noo-veh-la-pa-REY', ['au-lieu-de']),
  sent(2132, "Loin d'être parfaite, cette solution a au moins le mérite d'exister.", 'Far from perfect, this solution at least has the merit of existing.',
    '/lwɛ̃ dɛtʁ paʁ.fɛt sɛt sɔ.ly.sjɔ̃ a o mwɛ̃ lə me.ʁit dɛɡ.zis.te/', 'lwehⁿ detr par-FET | set so-lü-SYOHⁿ | a oh MWEHⁿ | luh may-REET deg-zees-TAY', ['loin-de']),
  sent(2133, 'Il a changé de fournisseur sans rien dire à personne.', 'He changed suppliers without telling anyone.',
    '/i.la ʃɑ̃.ʒe də fuʁ.ni.sœʁ sɑ̃ ʁjɛ̃ diʁ a pɛʁ.sɔn/', 'ee-la shahⁿ-ZHAY duh foor-nee-SUHR | sahⁿ ryehⁿ DEER | a pehr-SONN', ['sans']),
];

/* ── ACT 9 · MALGRÉ, EN DÉPIT DE, MALGRÉ LE FAIT QUE (.2134-.2148) ──────────── */

export const ACT9_ROWS: Row[] = [
  sent(2134, 'Malgré la grève, les cours ont repris lundi.', 'Despite the strike, classes resumed on Monday.',
    '/mal.ɡʁe la ɡʁɛv le kuʁ ɔ̃ ʁə.pʁi lœ̃.di/', 'mal-gray la GREV | lay KOOR | ohⁿ ruh-pree luhⁿ-DEE', ['malgre'], FCVDR),
  sent(2135, 'En dépit des protestations, le lycée fermera en juin.', 'In spite of the protests, the school will close in June.',
    '/ɑ̃ de.pi de pʁɔ.tɛs.ta.sjɔ̃ lə li.se fɛʁ.mə.ʁa ɑ̃ ʒɥɛ̃/', 'ahⁿ day-PEE day pro-tes-ta-SYOHⁿ | luh lee-SAY | fehr-muh-RA ahⁿ ZHWEHⁿ', ['depit'], FCVR, SO),
  sent(2136, 'Malgré le fait que les parents aient protesté, le lycée fermera.', 'Despite the fact that the parents protested, the school will close.',
    '/mal.ɡʁe lə fɛ kə le pa.ʁɑ̃ ɛ pʁɔ.tɛs.te lə li.se fɛʁ.mə.ʁa/', 'mal-gray luh FEH | kuh lay pa-RAHⁿ | eh pro-tes-TAY | luh lee-SAY fehr-muh-RA', ['le-fait-que', 'subjonctif']),
  sent(2137, 'En dépit du fait que le budget a augmenté, les classes restent surchargées.', 'Despite the fact that the budget has gone up, classes are still overcrowded.',
    '/ɑ̃ de.pi dy fɛ kə lə by.dʒɛ a oɡ.mɑ̃.te le klas ʁɛst syʁ.ʃaʁ.ʒe/', 'ahⁿ day-PEE dü FEH | kuh luh bü-JEH a ohg-mahⁿ-TAY | lay KLASS | rest sür-shar-ZHAY', ['le-fait-que', 'indicatif'], FCVR, SO),
  sent(2138, 'Bien que les parents aient protesté, le lycée fermera.', 'Although the parents protested, the school will close.',
    '/bjɛ̃ kə le pa.ʁɑ̃ ɛ pʁɔ.tɛs.te lə li.se fɛʁ.mə.ʁa/', 'byehⁿ kuh lay pa-RAHⁿ | eh pro-tes-TAY | luh lee-SAY fehr-muh-RA', ['bien-que', 'paire'], FCVDR),
  sent(2139, 'Malgré les protestations des parents, le lycée fermera.', "Despite the parents' protests, the school will close.",
    '/mal.ɡʁe le pʁɔ.tɛs.ta.sjɔ̃ de pa.ʁɑ̃ lə li.se fɛʁ.mə.ʁa/', 'mal-gray lay pro-tes-ta-SYOHⁿ | day pa-RAHⁿ | luh lee-SAY fehr-muh-RA', ['malgre', 'paire'], FCVDR),
  rule(2140, "Malgré le fait que prend l'indicatif ou le subjonctif ; malgré que reste critiqué à l'écrit.", 'Malgré le fait que takes the indicative or the subjunctive; malgré que is still criticised in writing.',
    '/mal.ɡʁe lə fɛ kə pʁɑ̃ lɛ̃.di.ka.tif u lə syb.ʒɔ̃k.tif mal.ɡʁe kə ʁɛst kʁi.ti.ke a le.kʁi/', 'mal-gray luh FEH KUH | prahⁿ lehⁿ-dee-ka-TEEF | oo luh süb-zhohⁿk-TEEF | mal-gray KUH | rest kree-tee-KAY | a lay-KREE',
    "Malgré qu'il pleuve : à l'écrit, que préférer ?",
    "Bien qu'il pleuve, ou malgré la pluie. Malgré que est très répandu à l'oral mais critiqué à l'écrit ; malgré le fait que est correct, mais lourd.",
    ['le-fait-que', 'conteste']),
  rule(2141, 'Pour passer de bien que à malgré, change la phrase en nom.', 'To go from bien que to malgré, turn the clause into a noun.',
    '/puʁ pa.se də bjɛ̃ kə a mal.ɡʁe ʃɑ̃ʒ la fʁaz ɑ̃ nɔ̃/', 'poor pa-SAY | duh byehⁿ KUH | a mal-GRAY | shahⁿzh la FRAZ | ahⁿ NOHⁿ',
    'Bien que le bus soit en retard → malgré… ?',
    "Malgré le retard du bus. Le verbe devient un nom (retarder, le retard ; protester, les protestations), comme dans la leçon 10 du B2.",
    ['malgre', 'nominalisation']),
  gap(2142, "Malgré l'absence de nombreux élèves, la directrice a maintenu l'examen.", 'Despite many pupils being absent, the head teacher kept the exam.',
    '/mal.ɡʁe lap.sɑ̃s də nɔ̃.bʁø ze.lɛv la di.ʁɛk.tʁis a mɛ̃t.ny lɛɡ.za.mɛ̃/', 'mal-gray lap-SAHⁿS | duh nohⁿ-breu zay-LEV | la dee-rek-TREESS | a mehⁿt-NÜ leg-za-MEHⁿ',
    "Malgré l'___ de nombreux élèves, la directrice a maintenu l'examen. (absent · le nom)",
    "Absent devient l'absence : malgré veut un nom. EN: malgré needs a noun, so absent becomes absence.",
    ['malgre', 'nominalisation']),
  gap(2143, 'En dépit du mauvais temps, la sortie scolaire a eu lieu.', 'In spite of the bad weather, the school trip went ahead.',
    '/ɑ̃ de.pi dy mo.vɛ tɑ̃ la sɔʁ.ti skɔ.lɛʁ a y ljø/', 'ahⁿ day-PEE dü moh-veh TAHⁿ | la sor-TEE sko-LEHR | a ü LYEU',
    'En dépit ___ mauvais temps, la sortie scolaire a eu lieu. (de + le)',
    "En dépit de + le = en dépit du. On ne dit pas « en dépit que ». EN: en dépit du.",
    ['depit'], FCVR, SO),
  sent(2144, "Malgré son peu d'expérience, elle dirige déjà le club.", 'Despite her lack of experience, she already runs the club.',
    '/mal.ɡʁe sɔ̃ pø dɛk.spe.ʁjɑ̃s ɛl di.ʁiʒ de.ʒa lə klœb/', 'mal-gray sohⁿ PEU | dek-spay-RYAHⁿS | el dee-REEZH day-ZHA luh KLUHB', ['malgre']),
  sent(2145, "Le club a gagné malgré l'expulsion de son gardien.", 'The club won despite its goalkeeper being sent off.',
    '/lə klœb a ɡa.ɲe mal.ɡʁe lɛks.pyl.sjɔ̃ də sɔ̃ ɡaʁ.djɛ̃/', 'luh KLUHB a ga-NYAY | mal-gray leks-pül-SYOHⁿ | duh sohⁿ gar-DYEHⁿ', ['malgre', 'nominalisation']),
  sent(2146, "Malgré tout ce qu'on a pu dire, la réforme a été votée.", 'Despite everything that was said, the reform was passed.',
    '/mal.ɡʁe tu sə kɔ̃.na py diʁ la ʁe.fɔʁm a e.te vɔ.te/', 'mal-gray too suh kohⁿ-na pü DEER | la ray-FORM | a ay-tay vo-TAY', ['malgre']),
  sent(2147, "En dépit de ses efforts, il n'a pas obtenu la bourse.", 'Despite his efforts, he did not get the scholarship.',
    '/ɑ̃ de.pi də se.ze.fɔʁ il na pa.zɔp.tə.ny la buʁs/', 'ahⁿ day-PEE | duh say-zay-FOR | eel na pa-zop-tuh-NÜ la BOORS', ['depit'], FCVR, SO),
  sent(2148, "Nonobstant l'avis de la commission, le maire a signé le permis.", "Notwithstanding the committee's opinion, the mayor signed the permit.",
    '/nɔ.nɔps.tɑ̃ la.vi də la kɔ.mi.sjɔ̃ lə mɛʁ a si.ɲe lə pɛʁ.mi/', 'no-nops-TAHⁿ la-VEE | duh la ko-mee-SYOHⁿ | luh MEHR a see-NYAY luh pehr-MEE', ['juridique'], FC, SO),
];

/* ── ACT 10 · POURTANT, TOUTEFOIS, IL N'EN RESTE PAS MOINS QUE (.2152-.2165) ── */

export const ACT10_ROWS: Row[] = [
  sent(2152, 'Le projet est ambitieux ; il reste toutefois très coûteux.', 'The project is ambitious; it nevertheless remains very costly.',
    '/lə pʁɔ.ʒɛ ɛ.tɑ̃.bi.sjø il ʁɛst tu.tə.fwa tʁɛ ku.tø/', 'luh pro-ZHEH | eh-tahⁿ-bee-SYEU | eel rest too-tuh-FWA | treh koo-TEU', ['adverbe', 'place'], FCVDR),
  sent(2153, "Certes, l'application simplifie les démarches ; néanmoins, elle exclut les personnes âgées.", 'Admittedly, the app simplifies the procedures; nevertheless, it shuts out older people.',
    '/sɛʁt la.pli.ka.sjɔ̃ sɛ̃.pli.fi le de.maʁʃ ne.ɑ̃.mwɛ̃ ɛ.lɛks.kly le pɛʁ.sɔn a.ʒe/', 'SEHRT | la-plee-ka-SYOHⁿ | sehⁿ-plee-FEE lay day-MARSH | nay-ahⁿ-MWEHⁿ | eh-leks-KLÜ | lay pehr-SONN a-ZHAY', ['certes', 'adverbe'], FCVR, SO),
  sent(2154, "Il est vrai que l'application fait gagner du temps. Il n'en reste pas moins qu'elle exclut une partie du public.", 'It is true that the app saves time. The fact remains that it shuts out part of the public.',
    '/i.lɛ vʁɛ kə la.pli.ka.sjɔ̃ fɛ ɡa.ɲe dy tɑ̃ il nɑ̃ ʁɛst pa mwɛ̃ kɛ.lɛks.kly yn paʁ.ti dy py.blik/', 'ee-leh VREH | kuh la-plee-ka-SYOHⁿ | feh ga-nyay dü TAHⁿ | eel nahⁿ rest pa MWEHⁿ | keh-leks-KLÜ | ün par-TEE dü pü-BLEEK', ['il-nen-reste', 'refutation'], FCVR, SO),
  sent(2155, "Je ne sais pas qui a raison ; toujours est-il que le guichet a fermé.", 'I do not know who is right; the fact is that the ticket office has closed.',
    '/ʒə nə sɛ pa ki a ʁɛ.zɔ̃ tu.ʒuʁ ɛ.til kə lə ɡi.ʃɛ a fɛʁ.me/', 'zhuh nuh seh PA | kee a reh-ZOHⁿ | too-zhoor eh-TEEL | kuh luh gee-SHEH a fehr-MAY', ['toujours-est-il'], FCVDR),
  sent(2156, 'Les chiffres sont encourageants. Pourtant, les usagers se plaignent.', 'The figures are encouraging. And yet users are complaining.',
    '/le ʃifʁ sɔ̃.tɑ̃.ku.ʁa.ʒɑ̃ puʁ.tɑ̃ le.zy.za.ʒe sə plɛɲ/', 'lay SHEEFR | sohⁿ-tahⁿ-koo-ra-ZHAHⁿ | poor-TAHⁿ | lay-zü-za-ZHAY suh PLENY', ['adverbe', 'oral']),
  sent(2157, 'La mesure est impopulaire ; elle est cependant nécessaire.', 'The measure is unpopular; it is, however, necessary.',
    '/la mə.zyʁ ɛ.tɛ̃.pɔ.py.lɛʁ ɛ.lɛ sə.pɑ̃.dɑ̃ ne.se.sɛʁ/', 'la muh-ZÜR | eh-tehⁿ-po-pü-LEHR | eh-leh suh-pahⁿ-DAHⁿ | nay-say-SEHR', ['adverbe', 'place']),
  rule(2158, "Il n'en reste pas moins que et toujours est-il que prennent l'indicatif.", 'Il n’en reste pas moins que and toujours est-il que take the indicative.',
    '/il nɑ̃ ʁɛst pa mwɛ̃ kə e tu.ʒuʁ ɛ.til kə pʁɛn lɛ̃.di.ka.tif/', 'eel nahⁿ rest pa MWEHⁿ KUH | ay too-zhoor eh-teel KUH | prenn lehⁿ-dee-ka-TEEF',
    "Il n'en reste pas moins que le guichet ___ fermé : quel mode ?",
    "L'indicatif : a fermé, est fermé. Ces deux tournures posent un fait qui tient malgré tout ce qu'on vient de dire.",
    ['il-nen-reste', 'toujours-est-il']),
  rule(2159, 'Toutefois, néanmoins, cependant : en tête avec une virgule, ou après le verbe conjugué.', 'Toutefois, néanmoins, cependant: first with a comma, or after the conjugated verb.',
    '/tu.tə.fwa ne.ɑ̃.mwɛ̃ sə.pɑ̃.dɑ̃ ɑ̃ tɛt a.vɛk y.nə viʁ.ɡyl u a.pʁɛ lə vɛʁb kɔ̃.ʒy.ɡe/', 'too-tuh-FWA | nay-ahⁿ-MWEHⁿ | suh-pahⁿ-DAHⁿ | ahⁿ TET a-vek ü-nuh veer-GÜL | oo a-PREH luh VEHRB kohⁿ-zhü-GAY',
    'Où placer toutefois dans une phrase ?',
    "En tête suivi d'une virgule, ou juste après le verbe conjugué : il reste toutefois coûteux. Ces mots sont plutôt écrits ; à l'oral, on dit pourtant, mais ou quand même.",
    ['adverbe', 'place', 'registre']),
  sent(2160, "Le service en ligne marche bien ; il n'en demeure pas moins imparfait.", 'The online service works well; it is nonetheless imperfect.',
    '/lə sɛʁ.vi.sɑ̃ liɲ maʁʃ bjɛ̃ il nɑ̃ də.mœʁ pa mwɛ̃.zɛ̃.paʁ.fɛ/', 'luh sehr-vee-sahⁿ LEENY | marsh BYEHⁿ | eel nahⁿ duh-MUHR pa | mwehⁿ-zehⁿ-par-FEH', ['il-nen-reste'], FCVR, SO),
  sent(2161, "On peut discuter des causes ; toujours est-il que les files d'attente s'allongent.", 'We can argue about the causes; the fact remains that the queues are getting longer.',
    '/ɔ̃ pø dis.ky.te de koz tu.ʒuʁ ɛ.til kə le fil da.tɑ̃t sa.lɔ̃ʒ/', 'ohⁿ peu dees-kü-TAY day KOHZ | too-zhoor eh-TEEL | kuh lay FEEL da-TAHⁿT | sa-LOHⁿZH', ['toujours-est-il']),
  sent(2162, "Tout le monde était prévenu ; le guichet a néanmoins été pris d'assaut.", 'Everyone had been warned; the ticket office was nevertheless mobbed.',
    '/tu lə mɔ̃d e.tɛ pʁe.və.ny lə ɡi.ʃɛ a ne.ɑ̃.mwɛ̃ e.te pʁi da.so/', 'too luh MOHⁿD | ay-teh pray-vuh-NÜ | luh gee-SHEH a nay-ahⁿ-MWEHⁿ | ay-tay pree da-SOH', ['adverbe', 'place'], FCVR, SO),
  gap(2163, "Il n'en reste pas moins que le service est mal organisé.", 'The fact remains that the service is badly organised.',
    '/il nɑ̃ ʁɛst pa mwɛ̃ kə lə sɛʁ.vis ɛ ma.lɔʁ.ɡa.ni.ze/', 'eel nahⁿ rest pa MWEHⁿ | kuh luh sehr-VEESS | eh ma-lor-ga-nee-ZAY',
    "Il n'en reste pas moins que le service ___ mal organisé. (être · un fait)",
    "Un fait qui tient : l'indicatif, est. Jamais soit ici. EN: the indicative.",
    ['il-nen-reste'], FCVR, SO),
  gap(2164, 'Toujours est-il que personne ne nous a prévenus.', 'The fact remains that nobody warned us.',
    '/tu.ʒuʁ ɛ.til kə pɛʁ.sɔn nə nu.za pʁe.və.ny/', 'too-zhoor eh-TEEL | kuh pehr-SONN | nuh noo-za pray-vuh-NÜ',
    'Toujours est-il que personne ne nous ___ prévenus. (avoir · passé composé)',
    "Un fait : l'indicatif, a prévenus. Toujours est-il que ne prend jamais le subjonctif. EN: the indicative.",
    ['toujours-est-il'], FCVDR),
  sent(2165, "Je comprends vos arguments ; permettez-moi toutefois d'en douter.", 'I understand your arguments; allow me, however, to have my doubts.',
    '/ʒə kɔ̃.pʁɑ̃ vo.zaʁ.ɡy.mɑ̃ pɛʁ.mɛ.te.mwa tu.tə.fwa dɑ̃ du.te/', 'zhuh kohⁿ-PRAHⁿ | voh-zar-gü-MAHⁿ | pehr-meh-tay-MWA too-tuh-FWA | dahⁿ doo-TAY', ['adverbe', 'debat']),
];

/* ── ACT 11 · CONCÉDER OU OPPOSER (.2170-.2184) ─────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  sent(2170, "Bien que Lyon soit plus chère, j'y vis depuis dix ans.", 'Although Lyon is more expensive, I have lived there for ten years.',
    '/bjɛ̃ kə ljɔ̃ swa ply ʃɛʁ ʒi vi də.pɥi di.zɑ̃/', 'byehⁿ kuh LYOHⁿ | swa plü SHEHR | zhee VEE | duh-pwee dee-ZAHⁿ', ['concession', 'paire'], FCVDR),
  sent(2171, 'Lyon est chère, alors que Saint-Étienne reste abordable.', 'Lyon is expensive, whereas Saint-Étienne is still affordable.',
    '/ljɔ̃ ɛ ʃɛʁ a.lɔʁ kə sɛ̃.te.tjɛn ʁɛs.ta.bɔʁ.dabl/', 'LYOHⁿ eh SHEHR | a-lor kuh sehⁿ-tay-TYENN | res-ta-bor-DABL', ['opposition', 'paire'], FCVDR),
  sent(2172, "Tandis que ma sœur vit en ville, moi, j'ai choisi la campagne.", 'While my sister lives in town, I chose the countryside.',
    '/tɑ̃.di kə ma sœʁ vi.tɑ̃ vil mwa ʒe ʃwa.zi la kɑ̃.paɲ/', 'tahⁿ-dee kuh ma SUHR | vee-tahⁿ VEEL | MWA | zhay shwa-ZEE la kahⁿ-PANY', ['opposition']),
  sent(2173, "Il est parti en vacances alors qu'il avait promis de finir le dossier.", 'He went on holiday even though he had promised to finish the file.',
    '/i.lɛ paʁ.ti ɑ̃ va.kɑ̃s a.lɔʁ kil a.vɛ pʁɔ.mi də fi.niʁ lə do.sje/', 'ee-leh par-TEE ahⁿ va-KAHⁿS | a-lor keel a-veh pro-MEE | duh fee-neer luh do-SYAY', ['alors-que', 'concession']),
  sent(2174, 'La ville a peu de parcs ; en revanche, ses transports sont excellents.', 'The town has few parks; on the other hand, its public transport is excellent.',
    '/la vil a pø də paʁk ɑ̃ ʁə.vɑ̃ʃ se tʁɑ̃s.pɔʁ sɔ̃.tɛk.se.lɑ̃/', 'la VEEL a peu duh PARK | ahⁿ ruh-VAHⁿSH | say trahⁿs-POR | sohⁿ-tek-say-LAHⁿ', ['en-revanche', 'opposition']),
  sent(2175, 'Le loyer est élevé ; par contre, les charges sont comprises.', 'The rent is high; on the other hand, the bills are included.',
    '/lə lwa.je ɛ.tel.ve paʁ kɔ̃tʁ le ʃaʁʒ sɔ̃ kɔ̃.pʁiz/', 'luh lwa-YAY eh-tayl-VAY | par KOHⁿTR | lay SHARZH | sohⁿ kohⁿ-PREEZ', ['par-contre', 'oral']),
  rule(2176, "Alors que compare deux faits ; bien que en admet un et passe outre.", 'Alors que compares two facts; bien que admits one and goes on regardless.',
    '/a.lɔʁ kə kɔ̃.paʁ dø fɛ bjɛ̃ kə ɑ̃.na.dmɛ œ̃ e pas utʁ/', 'a-lor KUH | kohⁿ-PAR deu FEH | byehⁿ KUH | ahⁿ-na-dmeh UHⁿ | ay pass OOTR',
    '« Lyon est chère, alors que Saint-Étienne est abordable » : concession ou opposition ?',
    "Opposition : deux faits côte à côte, et aucun n'est un obstacle à l'autre. Avec bien que, un fait devrait empêcher l'autre, et ne l'empêche pas.",
    ['opposition', 'concession']),
  rule(2177, 'En revanche oppose deux faits ; il ne concède rien.', 'En revanche contrasts two facts; it concedes nothing.',
    '/ɑ̃ ʁə.vɑ̃ʃ ɔ.poz dø fɛ il nə kɔ̃.sɛd ʁjɛ̃/', 'ahⁿ ruh-VAHⁿSH | o-POHZ deu FEH | eel nuh kohⁿ-SED RYEHⁿ',
    'Peut-on remplacer en revanche par pourtant ?',
    "Rarement. Pourtant dit qu'un fait aurait dû en empêcher un autre ; en revanche met deux faits en balance, souvent un défaut contre une qualité.",
    ['en-revanche', 'opposition']),
  sent(2178, 'Mon frère gagne bien sa vie ; il est pourtant toujours à découvert.', 'My brother earns a good living; and yet he is always overdrawn.',
    '/mɔ̃ fʁɛʁ ɡaɲ bjɛ̃ sa vi i.lɛ puʁ.tɑ̃ tu.ʒuʁ a de.ku.vɛʁ/', 'mohⁿ FREHR | gany byehⁿ sa VEE | ee-leh poor-TAHⁿ | too-zhoor a day-koo-VEHR', ['concession', 'paire']),
  sent(2179, 'Mon frère gagne bien sa vie, alors que moi, je débute.', 'My brother earns a good living, whereas I am just starting out.',
    '/mɔ̃ fʁɛʁ ɡaɲ bjɛ̃ sa vi a.lɔʁ kə mwa ʒə de.byt/', 'mohⁿ FREHR | gany byehⁿ sa VEE | a-lor kuh MWA | zhuh day-BÜT', ['opposition', 'paire']),
  sent(2180, 'Au Québec, on dit « char » ; en France, en revanche, on dit « voiture ».', 'In Québec people say « char »; in France, on the other hand, they say « voiture ».',
    '/o ke.bɛk ɔ̃ di ʃaʁ ɑ̃ fʁɑ̃s ɑ̃ ʁə.vɑ̃ʃ ɔ̃ di vwa.tyʁ/', 'oh kay-BEK | ohⁿ dee SHAR | ahⁿ FRAHⁿS | ahⁿ ruh-VAHⁿSH | ohⁿ dee vwa-TÜR', ['en-revanche', 'opposition']),
  sent(2181, "Alors qu'on annonçait de la pluie, il a fait un temps magnifique.", 'Although rain had been forecast, the weather was magnificent.',
    '/a.lɔʁ kɔ̃.na.nɔ̃.sɛ də la plɥi i.la fɛ œ̃ tɑ̃ ma.ɲi.fik/', 'a-lor kohⁿ-na-nohⁿ-SEH | duh la PLWEE | ee-la FEH | uhⁿ TAHⁿ ma-nyee-FEEK', ['alors-que', 'concession'], FCVDR),
  gap(2182, 'Le centre est bruyant, tandis que la banlieue est calme.', 'The centre is noisy, whereas the suburbs are quiet.',
    '/lə sɑ̃tʁ ɛ bʁɥi.jɑ̃ tɑ̃.di kə la bɑ̃.ljø ɛ kalm/', 'luh SAHⁿTR eh brwee-YAHⁿ | tahⁿ-dee kuh la bahⁿ-LYEU | eh KALM',
    'Le centre est bruyant, ___ la banlieue est calme. (deux faits comparés, pas deux moments)',
    "Tandis que, ou alors que : deux faits mis côte à côte, à l'indicatif. Aucun obstacle, donc pas de bien que. EN: tandis que or alors que.",
    ['opposition']),
  gap(2183, "Bien qu'il pleuve, nous sortirons.", 'Although it is raining, we will go out.',
    '/bjɛ̃ kil plœv nu sɔʁ.ti.ʁɔ̃/', 'byehⁿ keel PLUHV | noo sor-tee-ROHⁿ',
    "___ il pleuve, nous sortirons. (un obstacle qui n'empêche rien)",
    "Un obstacle, puis on passe outre : bien que, et le subjonctif pleuve. Quoique irait aussi. EN: bien que, a concession.",
    ['concession']),
  sent(2184, 'Les uns veulent agrandir le parc, tandis que les autres préfèrent un parking.', 'Some want to enlarge the park, while others would rather have a car park.',
    '/le.zœ̃ vœl a.ɡʁɑ̃.diʁ lə paʁk tɑ̃.di kə le.zotʁ pʁe.fɛʁ œ̃ paʁ.kiŋ/', 'lay-ZUHⁿ vuhl a-grahⁿ-DEER luh PARK | tahⁿ-dee kuh lay-ZOHTR | pray-FEHR uhⁿ par-KEENG', ['opposition']),
];

/* ── ACT 12 · TON ESSAI (.2186-.2197) ──────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(2186, "Commençons par l'argument le plus sérieux des opposants.", "Let us start with the opponents' strongest argument.",
    '/kɔ.mɑ̃.sɔ̃ paʁ laʁ.ɡy.mɑ̃ lə ply se.ʁjø de.zɔ.po.zɑ̃/', 'ko-mahⁿ-SOHⁿ | par lar-gü-MAHⁿ | luh plü say-RYEU | day-zo-poh-ZAHⁿ', ['essai', 'plan'], FCVDR),
  sent(2187, 'Il est vrai que la gratuité coûte cher à la ville.', 'It is true that free transport costs the city a lot.',
    '/i.lɛ vʁɛ kə la ɡʁa.tɥi.te kut ʃɛʁ a la vil/', 'ee-leh VREH | kuh la gra-twee-TAY | koot SHEHR | a la VEEL', ['essai', 'concession']),
  sent(2188, 'Certes, une réunion en ligne ne remplace pas un café partagé.', 'Admittedly, an online meeting does not replace a shared coffee.',
    '/sɛʁt y.nə ʁe.y.njɔ̃ ɑ̃ liɲ nə ʁɑ̃.plas pa.zœ̃ ka.fe paʁ.ta.ʒe/', 'SEHRT | ü-nuh ray-ü-NYOHⁿ ahⁿ LEENY | nuh rahⁿ-PLASS | pa-zuhⁿ ka-FAY par-ta-ZHAY', ['essai', 'certes']),
  sent(2189, 'Quand bien même ce serait le cas, les habitudes finiraient par changer.', 'Even if that were the case, habits would change in the end.',
    '/kɑ̃ bjɛ̃ mɛm sə sə.ʁɛ lə ka le.za.bi.tyd fi.ni.ʁɛ paʁ ʃɑ̃.ʒe/', 'kahⁿ byehⁿ MEM | suh suh-reh luh KA | lay-za-bee-TÜD | fee-nee-reh par shahⁿ-ZHAY', ['essai', 'conditionnel'], FCVR, SO),
  sent(2190, 'Quels que soient leurs revenus, les habitants ont le droit de se déplacer.', 'Whatever their income, residents have the right to get around.',
    '/kɛl kə swa lœʁ ʁə.və.ny le.za.bi.tɑ̃ ɔ̃ lə dʁwa də sə de.pla.se/', 'KEL kuh swa luhr ruh-vuh-NÜ | lay-za-bee-TAHⁿ | ohⁿ luh DRWA | duh suh day-pla-SAY', ['essai', 'indefini'], FCVDR),
  sent(2191, "J'ai beau examiner les objections, aucune ne me semble décisive.", 'However closely I examine the objections, none seems decisive to me.',
    '/ʒe bo ɛɡ.za.mi.ne le.zɔb.ʒɛk.sjɔ̃ o.kyn nə mə sɑ̃bl de.si.ziv/', 'zhay BOH | eg-za-mee-NAY lay-zob-zhek-SYOHⁿ | oh-KÜNN | nuh muh SAHⁿBL day-see-ZEEV', ['essai', 'avoir-beau']),
  sent(2192, "Même si la gratuité ne règle pas tout, elle mérite d'être essayée.", 'Even if free transport does not solve everything, it deserves a try.',
    '/mɛm si la ɡʁa.tɥi.te nə ʁɛɡl pa tu ɛl me.ʁit dɛ.tʁe.se.je/', 'mem see la gra-twee-TAY | nuh regl pa TOO | el may-REET | deh-tray-say-YAY', ['essai', 'meme-si'], FCVDR),
  sent(2193, "Bien qu'un boulanger puisse souhaiter plus de souplesse, il ne peut pas pétrir à distance.", 'Although a baker may want more flexibility, he cannot knead dough remotely.',
    '/bjɛ̃ kœ̃ bu.lɑ̃.ʒe pɥis swɛ.te ply də su.plɛs il nə pø pa pe.tʁi.ʁa dis.tɑ̃s/', 'byehⁿ kuhⁿ boo-lahⁿ-ZHAY | pweess sweh-TAY plü duh soo-PLESS | eel nuh peu PA | pay-tree-ra dees-TAHⁿS', ['essai', 'subjonctif']),
  sent(2194, "Toujours est-il qu'il faudra encadrer ce droit.", 'The fact remains that this right will have to be regulated.',
    '/tu.ʒuʁ ɛ.til kil fo.dʁa ɑ̃.ka.dʁe sə dʁwa/', 'too-zhoor eh-TEEL | keel foh-DRA | ahⁿ-ka-DRAY suh DRWA', ['essai', 'toujours-est-il']),
  sent(2195, "Il n'en reste pas moins que deux jours à la maison n'isolent personne.", 'The fact remains that two days at home cut nobody off.',
    '/il nɑ̃ ʁɛst pa mwɛ̃ kə dø ʒuʁ a la mɛ.zɔ̃ ni.zɔl pɛʁ.sɔn/', 'eel nahⁿ rest pa MWEHⁿ | kuh deu ZHOOR a la meh-ZOHⁿ | nee-ZOL pehr-SONN', ['essai', 'il-nen-reste'], FCVR, SO),
  sent(2196, 'Je suis favorable à cette mesure, avec des limites.', 'I am in favour of this measure, within limits.',
    '/ʒə sɥi fa.vɔ.ʁabl a sɛt mə.zyʁ a.vɛk de li.mit/', 'zhuh swee fa-vo-RABL | a set muh-ZÜR | a-vek day lee-MEET', ['essai', 'these']),
  sent(2197, "On objecte aussi que tous les métiers ne s'y prêtent pas.", 'It is also objected that not every job lends itself to it.',
    '/ɔ̃.nɔb.ʒɛkt o.si kə tu le me.tje nə si pʁɛt pa/', 'ohⁿ-nob-ZHEKT oh-SEE | kuh too lay may-TYAY | nuh see PRET PA', ['essai', 'objection']),
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

/** Act 1: an opinion column, Québec City. */
export const LECTURE_CHRONIQUE =
  "Limiter les touristes dans le Vieux-Québec : une mauvaise réponse à une vraie question. Une chronique de Mélanie Caron. Chaque été, le Vieux-Québec accueille des foules de visiteurs, et la mairie envisage désormais d'en limiter le nombre. Je comprends l'exaspération des riverains. Bien que le tourisme fasse vivre le quartier, il le rend parfois invivable : des ruelles bondées, des loyers qui s'envolent, des boutiques de souvenirs à la place des boulangeries. Certes, un quota réduirait la foule. Il n'en reste pas moins qu'il frapperait d'abord ceux qui vivent de ces visiteurs. Quelles que soient les bonnes intentions de la mairie, un restaurateur qui perd un tiers de ses clients ne paiera pas son loyer avec des principes. On me répondra qu'une ville n'est pas un musée. C'est vrai ; toutefois, fermer la porte n'a jamais appris à personne à mieux recevoir. Même si les visiteurs étaient deux fois moins nombreux, les ruelles resteraient étroites et les autocars continueraient de s'arrêter au même endroit. Le problème n'est donc pas le nombre, mais la façon d'accueillir. J'ai beau chercher, je ne trouve aucune ville qui ait réglé la question par une simple barrière. Quand bien même un quota fonctionnerait, il déplacerait la foule vers les quartiers voisins, qui n'ont rien demandé. Alors que la mairie compte les touristes, personne ne pense au logement des habitants. Si modestes qu'elles paraissent, des mesures simples seraient pourtant plus efficaces : des visites étalées sur l'année, des navettes depuis les stationnements, une taxe de séjour qui finance vraiment le logement. Malgré le bruit et les files d'attente, je reste attachée à ce quartier ouvert. Toujours est-il qu'il faudra choisir : protéger la ville de ses visiteurs, ou apprendre à les recevoir autrement.";

/** Act 12: the model the learner imitates, an op-ed. */
export const LECTURE_MODELE =
  "Faut-il rendre les transports en commun gratuits ? Une tribune de Julien Moreau, urbaniste à Lille. Depuis que Dunkerque a rendu ses bus gratuits, la question revient dans toutes les campagnes municipales. J'y suis favorable, mais pas à n'importe quel prix. Commençons par l'argument le plus sérieux des opposants : la gratuité coûte cher. Il est vrai que les billets financent une partie du réseau et qu'il faudra trouver cet argent ailleurs. Certes, une ville endettée peut hésiter. Il n'en reste pas moins que la vente des billets rapporte souvent moins qu'on ne le croit, une fois payés les distributeurs, les contrôles et le traitement des amendes. On objecte aussi que la gratuité attirerait surtout des piétons et des cyclistes, et non des automobilistes. Quand bien même ce serait le cas au début, les habitudes finiraient par changer : à Dunkerque, bien que la voiture reste très présente, la fréquentation des bus a nettement augmenté. Enfin, la gratuité est une mesure de justice. Quels que soient leurs revenus, les habitants ont le droit de se déplacer. Un étudiant ou une retraitée qui renonce à un rendez-vous faute d'un billet, ce n'est pas un détail. J'ai beau examiner les objections, aucune ne me semble décisive. Même si la gratuité ne règle pas tout, elle mérite d'être essayée, à condition de l'accompagner de bus plus fréquents et de pistes cyclables. Toujours est-il qu'une ville qui veut moins de voitures doit d'abord proposer autre chose.";

/** The nine « dans un texte » paragraphs (acts 3 to 11). */
export const TEXTE_A3 =
  "L'évaluation annuelle de Sophie Martin, cheffe de projet, par sa responsable. Mets chaque verbe entre parenthèses au bon mode et au bon temps. « Bien que Sophie (arriver) il y a six mois seulement, elle maîtrise déjà nos dossiers. Elle a réorganisé l'accueil des clients sans que personne (s'en plaindre). Son rapport de mars est solide, encore que certains chiffres (être) à vérifier. Quoiqu'elle (ne jamais diriger) d'équipe auparavant, elle a su se faire respecter. Bien qu'elle (devoir) encore apprendre à déléguer, je recommande sa titularisation. »";

export const TEXTE_A4 =
  "Le mot que Nadia glisse dans la valise de sa fille, la veille de son départ pour Montréal. Choisis chaque fois la bonne forme entre parenthèses. « Ma chérie, (quoi que / quoique) tu décides là-bas, nous serons fiers de toi. (Où que / Quoique) tu habites, garde une chambre pour nous. (Quel / Quels) que soient tes horaires, appelle-nous le dimanche. (Qui que / Quoi que) tu rencontres, prends le temps de le connaître. Et (quoi que / quoique) tu sois parfois têtue, tu sais demander de l'aide. (Quel / Quelle) que soit la météo, mets ton bonnet. Maman »";

export const TEXTE_A5 =
  "L'avis de Chloé et Marc sur le deux-pièces de la rue Haute, à Bruxelles. Réécris chaque phrase avec la tournure indiquée, au mode qui convient. « L'appartement est lumineux, mais il est trop cher pour nous (si… que). La cuisine est grande, mais elle est mal équipée (aussi… que). La chambre est petite, mais elle est très calme (tout… que). La chaudière est neuve, mais elle fait un bruit terrible (tout… que). Le quartier est pratique, mais il manque d'écoles (aussi… soit-il). Bref, nous continuons à chercher. »";

export const TEXTE_A6 =
  "Le billet de Théo sur un forum de voyageurs. Mets chaque verbe entre parenthèses à la forme qui convient après même si. « Pourquoi je prends le train. Même si le train (être) plus lent, je le préfère à l'avion. Même si le billet (coûter) deux fois plus, je le prendrais quand même. Même si on m'(offrir) un vol gratuit l'an dernier, je l'aurais refusé. Même s'il (neiger) demain, je partirai pour Marseille. Et bien que ma sœur (trouver) ça absurde, je tiens bon. »";

export const TEXTE_A7 =
  "Le courriel de Karim, délégué du personnel d'un hôpital de Liège. Réécris les trois phrases en même si avec quand bien même. « Chers collègues, même si la direction proposait une prime, le problème des horaires resterait entier. Même si nous obtenions deux postes de plus, l'équipe de nuit manquerait encore de monde. Même si la réunion avait lieu demain, rien ne changerait avant l'été. Je vous propose donc de maintenir notre demande telle quelle. Bien à vous, Karim »";

export const TEXTE_A8 =
  "La réclamation d'Aïssatou Diallo à son fournisseur internet. Complète avec avoir beau (au bon temps), loin de ou au lieu de. « Madame, Monsieur, j'(avoir beau) appeler votre service trois fois la semaine dernière, personne n'a répondu. (___) régler la panne, votre dernière mise à jour l'a aggravée. (___) m'envoyer un technicien, vous m'avez renvoyée vers votre site. J'(avoir beau) être patiente, je ne paierai pas un mois sans connexion. Je vous prie donc de me rembourser ce mois. Aïssatou Diallo »";

export const TEXTE_A9 =
  "La lettre d'information du collège Jean-Moulin. Réécris les passages entre crochets avec malgré et un nom. « [Bien que les parents aient protesté], la direction a maintenu la fermeture de la cantine en juin. [Bien que le budget ait augmenté], les classes restent surchargées. [Bien qu'il fasse mauvais], la sortie au musée aura lieu vendredi. [Bien que notre gardien ait été expulsé], l'équipe de football a remporté le tournoi. Bonne fin de trimestre à tous. »";

export const TEXTE_A10 =
  "Courrier des lecteurs : la fermeture du guichet de la gare. Complète avec certes, toutefois, il n'en reste pas moins que ou toujours est-il que. « (___), l'application permet d'acheter un billet en deux minutes. Elle exclut (___) les voyageurs qui n'ont pas de téléphone. On me dit que le guichet coûtait trop cher ; (___) il rendait un service que l'application ne rend pas. J'ignore qui a pris cette décision ; (___) ma voisine de quatre-vingts ans ne voyage plus seule. Paul Tremblay, Trois-Rivières »";

export const TEXTE_A11 =
  "Lyon ou Saint-Étienne ? Le témoignage de Samir dans un magazine. Trouve les deux concessions et les trois oppositions. « J'ai grandi à Saint-Étienne, alors que ma femme vient de Lyon. Bien que Lyon soit plus chère, nous y avons vécu dix ans. Le centre y est vivant ; en revanche, les loyers ont doublé. Nous sommes finalement partis à Saint-Étienne, alors que nos amis nous le déconseillaient. Tandis que nos enfants regrettent leurs copains, nous, nous respirons enfin. »";
