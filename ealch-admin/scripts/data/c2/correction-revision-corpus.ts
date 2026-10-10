// c2.13.l1 « Correction et révision » — the authored corpus, the identity
// block and the citation constants. DRAFT, fourth and penultimate lesson of
// C2 wave 4. To RICH-LESSON-STANDARD.md and the B1-BUILD-PLAYBOOK.md house
// rules, with the C2 rules of C2-BUILD-PLAN.md ("What is different at C2")
// and the c2.13 brief in C2-RESEARCH-PLAN.md (around line 256). Structural
// model: c2.06 (`./c2-mediation-corpus.ts`), same shape W, same theme.
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json. No
// Postgres session was opened while authoring this file; the id block below
// is read straight from the brief (langue-soignee 2600-2799, already covered
// by c2.06's 2026-10-09 widen to a2-c2, confirmed free of any c1.05/c1.22
// collision since those own 2000-2199 and 2200-2399 respectively, and c2.06
// owns 2400-2599).
//
// STABLE EXPORTS: REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   SELF-EDITING A C2-LEVEL FRENCH TEXT: diagnosing, in a text that is
//   already grammatically correct, four recurring faults of COHERENCE, then
//   repairing them without losing or inventing any of the original meaning.
//   This is an EDITING lesson, never a from-scratch writing lesson: the core
//   exercise is diagnose-and-repair, not compose. No single C1 lesson owns
//   this ground; it draws on, and explicitly recaps, the whole
//   langue-soignee thread without re-teaching any of it from scratch:
//
//     « la leçon 5 du C1 »    l'ellipse et la reprise: act 10's own repair
//                             toolkit for a pronoun or possessive two nouns
//                             could answer (repeat the noun, « cette
//                             dernière » for the nearest noun only,
//                             reconstruct the sentence, or switch to direct
//                             speech). Act 4 reuses this toolkit on new,
//                             non-grammatical sentences, and separately
//                             borrows act 8's own « nom-résumé » device (a
//                             noun that sums up a whole clause, there taught
//                             for ELEGANT VARIETY on an already-clear
//                             referent) to repair a VAGUE one instead; it
//                             never re-teaches « le neutre », the pro-verb
//                             « faire », gapping or sluicing.
//     « la leçon 6 du C1 »    nuancer à l'oral: register as a matter of
//                             dosage, IN SPEECH. Act 2 recaps the general
//                             idea of dosage once, then moves to a different
//                             problem it never addressed: an unmarked
//                             register shift inside a WRITTEN paragraph.
//     « la leçon 17 du C1 »   synonymes et nuances: choosing among
//                             near-synonyms by register and connotation. Act
//                             2 recaps this once as the REPAIR move once a
//                             slip is found; it never re-teaches the
//                             intensity scales, the suffixes or the
//                             collocations.
//     « la leçon 22 du C1 »   traduire des idées: reformulation by meaning,
//                             not by word, English to French, including its
//                             own act 5 (« le fil », the paragraph's visible
//                             signposts) and act 11 (proofreading a
//                             TRANSLATION for faux sens, contresens,
//                             omission). Act 5 of this lesson recaps « le
//                             fil » once, for a text that was ALREADY French:
//                             the problem here is the reverse of c1.22's,
//                             a connector that is present but lying about
//                             the relationship it claims, never a language
//                             change and never translation fidelity.
//
//   THE FOUR FAULTS THIS LESSON OWNS, FOR THE FIRST TIME IN THE APP:
//     act 1   the problem named: one unmarked register slip almost ships in
//             an otherwise careful paragraph; recap of the four lessons above
//     act 2   le registre qui glisse: an unmarked tonal shift, either
//             direction, caught by asking what a reader of one sentence
//             alone would guess about the rest
//     act 3   la redondance: the same idea said twice in different words,
//             at sentence level, at paragraph level, and as a doubled
//             near-synonym inside one clause (pleonasm)
//     act 4   la référence qui dérive: a pronoun or demonstrative whose
//             antecedent has drifted or turned ambiguous, repaired with
//             c1.05's own toolkit
//     act 5   la transition qui ne tient pas: a connector that promises a
//             logical relationship (cause, opposition, consequence) the
//             sentence does not actually deliver
//     act 6   the central C2 trap, stepped: a text corrected for ONE fault
//             while another remains untouched, proving that no single pass
//             is ever enough
//     act 7   avant ta révision: rehearsing the four-question checklist,
//             in order, on a text never seen before
//     act 8   ta révision: the graded task, correcting a new draft that
//             carries all four faults at once
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. ID DISCIPLINE
// ══════════════════════════════════════════════════════════════════════════
//
//   THEME `langue-soignee` (domain `fondations`) already ranges a2-c2
//   (widened for c2.06, 2026-10-09). c1.05 holds 2000-2199, c1.22 holds
//   2200-2399, c2.06 holds 2400-2599, all published or drafted, none touched
//   here. This lesson owns block 2600-2799 AND NOTHING ELSE, per the brief.
//
//   USED: .2600-.2686 across eight act blocks (§H below); .2687-.2799 left
//   free inside the claimed block for the pre-review pass.
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. WHAT IS NOT REUSED, AND WHY
// ══════════════════════════════════════════════════════════════════════════
//
//   No row from c1.05, c1.06, c1.17 or c1.22 is reused by id: each is cited
//   by trail position and, for the reframe only, by import from its own
//   corpus file, quoted verbatim, never retyped. Every example sentence in
//   this lesson is newly authored for c2.13.
//
// ══════════════════════════════════════════════════════════════════════════
//  §C. SOURCES
// ══════════════════════════════════════════════════════════════════════════
//
//   NONE FACT-HEAVY, per the brief. Every "flawed" model text in this lesson
//   is AUTHORED, never sourced from a real document: this sidesteps any
//   copyright question and lets each fault be placed deliberately, at the
//   level the brief demands (a plausible C2 writer's careless slip, modelled
//   on the four named error categories, never a beginner-level grammar
//   error such as a wrong gender or a wrong conjugation, which would be
//   absurd at this level and nowhere in this file).
//
// ══════════════════════════════════════════════════════════════════════════
//  §D. FACT CHECK
// ══════════════════════════════════════════════════════════════════════════
//
//   PEOPLE, ALL INVENTED: Soline Marchetti (bénévole, rédactrice du bulletin
//   « La Feuille »), Thierry (nouveau bénévole), Léna (bénévole, relit les
//   brouillons des deux autres), Inès (nouvelle bénévole, acte 8).
//   ORGANISATIONS, ALL INVENTED: l'association de quartier qui publie « La
//   Feuille », un bulletin mensuel générique.
//   REAL PLACES: none named; every scene is generic (« le quartier », « la
//   place du marché », « le parc »).
//   LOW-HEAT TOPICS ONLY: a community newsletter, a volunteer meeting's
//   minutes, a general-assembly report. No real fact, no living person, no
//   political or medical content.
//   QUOTATIONS: none from a real person or text; every quoted passage
//   (flawed or corrected) is invented for this lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  §E. HOUSE RULES APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; characters use vous only where the fiction calls for
//   it (none does, here: all the invented characters are peers). No em dash.
//   No U+203F tie. Never "honnête" / "honnêtement" / "honest". Typographic ’
//   throughout. No spaced « ? » or « ! » in a scene or story bubble. French
//   only on the learner surface; English authored behind every `en` field
//   and every trailing « EN: », never shown by default. Citations by trail
//   position in French words only, never a raw id.
//
//   SELF-DUPLICATE CHECK: every `fr` string in `ALL_ROWS` was compared by
//   hand against every other to rule out two identical cards under
//   different ids, the fault c2.02's wave-1 dry run found.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c2.13',
  seq: 13,
  title: 'Correction and Revision',
  sub: 'Correction et révision',
  canDo: "Can review a C2-level French text, one's own draft or a model, and diagnose four recurring faults of coherence in a grammatically correct text: an unmarked register slip, a redundant restatement, a pronoun or demonstrative reference that has drifted or turned ambiguous, and a connector that does not deliver the logical relationship it promises; can then produce a corrected version that repairs all four, in a single pass or several, without losing or inventing any of the original's meaning",
  prereqUnitIds: ['c1.05', 'c1.06', 'c1.17', 'c1.22'],
} as const;

export const LESSON_ID = 'c2.13.l1';
export const THEME = 'langue-soignee';
export const LEVEL = 'c2' as const;

/** ONE block. c1.05 owns 2000-2199, c1.22 owns 2200-2399, c2.06 owns
 *  2400-2599, all published or drafted, none touched here. */
export const ID_RANGES = [[2600, 2799]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  All 24 C1 units are in `seed.json` with a real `seq` (v88 publish,
 *  C1-BUILD-LOG.md), so each C1 citation is read straight from the seed,
 *  the same way c2.06 already does it.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

export function refFr(unitId: string): string {
  const n = SEQ.get(unitId);
  if (!n) throw new Error(`c2.13: ${unitId} is not in the seed`);
  return `la leçon ${n} du C1`;
}

export const C105_UNIT = 'c1.05';
export const C105_REF = refFr(C105_UNIT);
export const C106_UNIT = 'c1.06';
export const C106_REF = refFr(C106_UNIT);
export const C117_UNIT = 'c1.17';
export const C117_REF = refFr(C117_UNIT);
export const C122_UNIT = 'c1.22';
export const C122_REF = refFr(C122_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE FOUR QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as C105_REFRAME, REFRAME_EN as C105_REFRAME_EN } from '../c1/ellipse-reprise-corpus.ts';
export { REFRAME as C106_REFRAME, REFRAME_EN as C106_REFRAME_EN } from '../c1/nuancer-oral-corpus.ts';
export { REFRAME as C117_REFRAME, REFRAME_EN as C117_REFRAME_EN } from '../c1/synonymes-nuances-corpus.ts';
export { REFRAME as C122_REFRAME, REFRAME_EN as C122_REFRAME_EN } from '../c1/traduire-idees-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE SAME THREAD, FOLLOWED AGAIN. « Le fil » is already the French idiom
 *  for a text's thread of sense (perdre le fil, suivre le fil); c1.22
 *  already named it for paragraph logic, and c1.05's OWN reframe already
 *  used the same thread-and-stitch imagery for reference repair specifically
 *  ("chaque reprise est une couture qui revient à la surface sur le même
 *  fil"). Self-editing is reusing that same idiom for the whole text: a
 *  register slip is a patch of the wrong
 *  colour sewn into the cloth; redundancy is a seam sewn twice; a dangling
 *  reference is a thread that trails off, joined to nothing; a weak
 *  transition is a stitch that pulls the fabric a way the seam never
 *  promised. Correcting is picking the thread back up and following it
 *  again, the whole way through, even through a seam already mended once.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Se relire, c’est reprendre le fil du texte jusqu’à ce qu’il tienne, d’un bout à l’autre.';
export const REFRAME_EN = 'Rereading means picking the text’s thread back up until it holds, from one end to the other.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Se relire, c’est corriger les fautes de grammaire.',
    why: 'False where act 1 has to hold: le C2 n’ajoute aucune forme grammaticale nouvelle (C2-BUILD-PLAN.md) ; les quatre fautes de cette leçon traversent un texte par ailleurs entièrement correct.',
  },
  {
    text: 'Une seule relecture, bien attentive, suffit toujours.',
    why: 'False where act 6 has to hold: corriger une seule faute à la fois peut en laisser une autre intacte, ou même en créer une nouvelle ailleurs dans le même texte.',
  },
  {
    text: 'Couper une phrase redondante ou une transition faible améliore toujours le texte.',
    why: 'False where act 3 has to hold: une coupe mal choisie peut effacer le seul endroit où un fait figurait, au lieu de garder le fait et de couper seulement sa répétition.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ROW CONSTRUCTORS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
/** Named for a flawed draft sentence or a wrong "corrected" version: never
 *  released, never spoken as a model to produce, exactly the convention
 *  c2.06 uses for its own `SR` constant. */
const SR = ['sentence', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, tags, drills, version: 1,
  grammarPoints: ['correction-revision'], ...extra,
});
const phrase = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  ...sent(n, fr, en, tags, drills, extra), kind: 'phrase',
});

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 1 ROWS — Un texte presque sous presse (2600-2614)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT1_ROWS: Row[] = [
  sent(2600, 'On prévoit même un petit goûter après, ça va être trop cool.', 'A little snack is even planned afterward, it is going to be really cool.', ['piege-registre', 'bulletin'], SR),
  sent(2601, 'Je dois envoyer ça à l’imprimeur dans une heure, et quelque chose cloche dans mon texte.', 'I have to send this to the printer in an hour, and something is off in my text.', ['scenario']),
  sent(2602, 'On prévoit même un goûter à l’issue de la matinée.', 'A snack is even planned at the end of the morning.', ['reformulation', 'registre-soutenu']),
  phrase(2603, 'le registre qui glisse', 'the slipping register', ['metalangage']),
  phrase(2604, 'la redondance', 'redundancy', ['metalangage']),
  phrase(2605, 'la référence qui dérive', 'the drifting reference', ['metalangage']),
  phrase(2606, 'la transition qui ne tient pas', 'the transition that does not hold', ['metalangage']),
  sent(2607, 'Une seule phrase qui change de ton suffit à trahir tout un texte par ailleurs soigné.', 'A single sentence that changes tone is enough to betray an otherwise careful text.', ['regle']),
  sent(2608, 'Les quatre fautes de cette leçon ne sont pas des fautes de grammaire : ce sont des fautes de cohérence, dans un texte par ailleurs correct.', 'The four faults of this lesson are not grammar mistakes: they are coherence faults, in an otherwise correct text.', ['regle']),
  sent(2609, 'Il y a une virgule mal placée dans la troisième phrase.', 'There is a misplaced comma in the third sentence.', ['decoy'], SR),
  sent(2610, 'Cette phrase sur le goûter sonne plus familière que tout le reste du texte.', 'This sentence about the snack sounds more informal than the rest of the text.', ['diagnostic']),
  sent(2611, 'Un courriel professionnel qui bascule soudainement dans le familier perd la confiance du lecteur, même si chaque mot pris seul est correct.', 'A professional email that suddenly tips into the informal loses the reader’s trust, even if every word taken alone is correct.', ['usage']),
  sent(2612, 'Une thèse relue la veille de la remise garde souvent une phrase qui se répète elle-même sans qu’on s’en rende compte.', 'A thesis reread the night before submission often keeps a sentence that repeats itself without anyone noticing.', ['usage']),
  sent(2613, 'Un discours de mariage écrit à l’avance peut garder un « donc » qui ne raccroche plus rien, une fois les paragraphes réordonnés.', 'A wedding speech written in advance can keep a “donc” that no longer connects anything, once the paragraphs have been reordered.', ['usage']),
  sent(2614, 'Se relire à voix haute et se relire en silence ne révèlent pas les mêmes fautes.', 'Reading aloud and reading silently do not reveal the same faults.', ['usage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 2 ROWS — Le registre qui glisse (2615-2629)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT2_ROWS: Row[] = [
  sent(2615, 'La trésorière a présenté un bilan financier d’une clarté remarquable ; franchement, ça fait plaisir de voir ça.', 'The treasurer presented a financial report of remarkable clarity; frankly, it is nice to see that.', ['piege-registre', 'bulletin'], SR),
  sent(2616, 'La trésorière a présenté un bilan financier d’une clarté remarquable, que l’assemblée a saluée avec satisfaction.', 'The treasurer presented a financial report of remarkable clarity, which the assembly welcomed with satisfaction.', ['reformulation', 'bulletin']),
  sent(2617, 'Je vous prie de trouver ci-joint le rapport demandé. N’hésitez pas à me relancer si un truc cloche.', 'Please find enclosed the requested report. Do not hesitate to get back to me if something is off.', ['piege-registre', 'courriel'], SR),
  sent(2618, 'Je vous prie de trouver ci-joint le rapport demandé. N’hésitez pas à me solliciter si un point appelle une précision.', 'Please find enclosed the requested report. Do not hesitate to contact me if any point calls for clarification.', ['reformulation', 'courriel']),
  sent(2619, 'On a changé deux ou trois trucs dans le protocole, et les résultats obtenus corroborent de manière significative l’hypothèse initialement formulée.', 'We changed a couple of things in the protocol, and the results obtained significantly corroborate the initially formulated hypothesis.', ['piege-registre', 'universitaire'], SR),
  sent(2620, 'On a ajusté quelques points du protocole, et les résultats obtenus confirment largement l’hypothèse de départ.', 'We adjusted a few points of the protocol, and the results obtained largely confirm the initial hypothesis.', ['reformulation', 'universitaire']),
  phrase(2621, 'le mot juste pour le ton', 'the right word for the tone', ['metalangage']),
  sent(2622, 'Le registre ne glisse pas seulement du soigné vers le familier ; il peut aussi, à l’envers, basculer dans un jargon trop savant pour le reste du texte.', 'Register does not only slip from refined toward informal; it can also, the other way round, tip into jargon too learned for the rest of the text.', ['regle']),
  sent(2623, 'Une phrase qui change de ton se repère en se demandant : un lecteur qui n’aurait lu que cette phrase devinerait-il le registre du reste du texte.', 'A sentence that changes tone is spotted by asking: would a reader who had only read this sentence guess the register of the rest of the text.', ['regle']),
  sent(2624, 'Corriger un registre qui glisse ne veut pas dire choisir le mot le plus soutenu possible, mais le mot qui reste au même niveau que les phrases autour.', 'Correcting a slipping register does not mean choosing the most elevated word possible, but the word that stays at the same level as the surrounding sentences.', ['regle']),
  sent(2625, 'La leçon 6 du C1 t’a appris à doser la distance à l’oral, d’un mot à l’autre ; ici, le problème est un paragraphe entier qui change de ton sans prévenir, à l’écrit.', 'Lesson 6 of C1 taught you to dose distance in speech, word by word; here, the problem is a whole paragraph that changes tone without warning, in writing.', ['recap']),
  sent(2626, 'La leçon 17 du C1 t’a appris à choisir entre des synonymes proches selon leur connotation ; ici, c’est ce choix-là qu’il faut refaire, une fois que le ton a déjà glissé.', 'Lesson 17 of C1 taught you to choose among near synonyms by connotation; here, that same choice must be redone, once the tone has already slipped.', ['recap']),
  sent(2627, 'Le compte rendu est rédigé avec soin, mais bon, il fallait bien que quelqu’un s’y colle.', 'The minutes are drafted carefully, but well, somebody had to deal with it.', ['piege-registre', 'bulletin'], SR),
  sent(2628, 'Le compte rendu est rédigé avec soin, après plusieurs relectures attentives.', 'The minutes are drafted carefully, after several careful rereadings.', ['reformulation', 'bulletin']),
  sent(2629, 'Un registre qui glisse une seule fois, sur une seule phrase, suffit à faire douter le lecteur de tout le reste.', 'A register that slips just once, on a single sentence, is enough to make the reader doubt everything else.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 3 ROWS — La redondance (2630-2642)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT3_ROWS: Row[] = [
  sent(2630, 'La réunion a été reportée à la semaine prochaine ; elle n’aura donc pas lieu cette semaine, mais la semaine suivante.', 'The meeting has been postponed to next week; it will therefore not take place this week, but the following week.', ['piege-redondance'], SR),
  sent(2631, 'La réunion a été reportée à la semaine prochaine.', 'The meeting has been postponed to next week.', ['reformulation']),
  sent(2632, 'Les ventes ont chuté de douze pour cent au premier trimestre. En somme, les ventes ont connu une baisse importante durant ces trois premiers mois.', 'Sales dropped twelve percent in the first quarter. In short, sales saw a significant decline during these first three months.', ['piege-redondance'], SR),
  sent(2633, 'Les ventes ont chuté de douze pour cent au premier trimestre, une baisse qui pèse sur l’ensemble de l’exercice.', 'Sales dropped twelve percent in the first quarter, a decline that weighs on the whole financial year.', ['reformulation']),
  sent(2634, 'Il s’agit là d’une erreur grossière et manifestement évidente, que personne n’avait anticipée à l’avance.', 'This is a gross and manifestly obvious error, which no one had anticipated in advance.', ['piege-redondance'], SR),
  sent(2635, 'Il s’agit là d’une erreur grossière que personne n’avait anticipée.', 'This is a gross error that no one had anticipated.', ['reformulation']),
  phrase(2636, 'dire deux fois la même idée', 'saying the same idea twice', ['metalangage']),
  sent(2637, 'La redondance ne se corrige pas en coupant au hasard : on garde la phrase qui porte le fait, et on supprime celle qui ne fait que le redire.', 'Redundancy is not corrected by cutting at random: keep the sentence that carries the fact, and remove the one that only restates it.', ['regle']),
  sent(2638, 'Un mot qui double le sens d’un autre mot déjà précis n’ajoute rien ; il répète, avec deux mots au lieu d’un.', 'A word that doubles the meaning of another, already precise word does not add anything; it repeats, with two words instead of one.', ['regle']),
  sent(2639, 'Une bonne coupe de redondance libère souvent la place pour une information vraiment nouvelle.', 'A good cut of redundancy often frees up space for genuinely new information.', ['regle']),
  sent(2640, 'Thierry, nouveau bénévole, relit son premier article pour « La Feuille » et découvre qu’il a dit la même chose deux fois, sans s’en apercevoir.', 'Thierry, a new volunteer, rereads his first article for “La Feuille” and discovers he said the same thing twice, without noticing.', ['scenario']),
  sent(2641, 'Le projet est ambitieux, audacieux et particulièrement innovant, ce qui en fait un projet vraiment très ambitieux.', 'The project is ambitious, bold and particularly innovative, which makes it a really very ambitious project.', ['piege-redondance'], SR),
  sent(2642, 'Le projet est ambitieux, audacieux et particulièrement innovant.', 'The project is ambitious, bold and particularly innovative.', ['reformulation']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 4 ROWS — La référence qui dérive (2643-2655)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT4_ROWS: Row[] = [
  sent(2643, 'La présidente a présenté la nouvelle trésorière à l’assemblée ; elle a ensuite pris la parole pendant dix minutes.', 'The chairwoman introduced the new treasurer to the assembly; she then spoke for ten minutes.', ['piege-reference'], SR),
  sent(2644, 'La présidente a présenté la nouvelle trésorière à l’assemblée ; la trésorière a ensuite pris la parole pendant dix minutes.', 'The chairwoman introduced the new treasurer to the assembly; the treasurer then spoke for ten minutes.', ['reformulation']),
  sent(2645, 'Léna a comparé le brouillon de Soline et la version finale de Thierry ; cette dernière, trop pressée, n’avait pas eu le temps de tout relire.', 'Léna compared Soline’s draft and Thierry’s final version; the latter, too rushed, had not had time to reread everything.', ['piege-reference'], SR),
  sent(2646, 'Léna a comparé le brouillon de Soline et la version finale de Thierry ; Soline, trop pressée, n’avait pas eu le temps de tout relire.', 'Léna compared Soline’s draft and Thierry’s final version; Soline, too rushed, had not had time to reread everything.', ['reformulation']),
  sent(2647, 'Le conseil a décidé de reporter les travaux du parc à l’automne ; cela inquiète plusieurs riverains, qui craignent que cela ne retarde aussi la réfection de la place du marché.', 'The council decided to postpone the park works to autumn; this worries several residents, who fear that this will also delay the renovation of the market square.', ['piege-reference'], SR),
  sent(2648, 'Le conseil a décidé de reporter les travaux du parc à l’automne ; ce report inquiète plusieurs riverains, qui craignent qu’il ne retarde aussi la réfection de la place du marché.', 'The council decided to postpone the park works to autumn; this postponement worries several residents, who fear it will also delay the renovation of the market square.', ['reformulation']),
  phrase(2649, 'le fil qui se perd', 'the thread that gets lost', ['metalangage']),
  sent(2650, 'La leçon 5 du C1 t’a donné quatre façons de réparer une reprise ambiguë : répéter le nom, utiliser « cette dernière » seulement pour le nom le plus proche, reconstruire la phrase, ou passer au discours direct.', 'Lesson 5 of C1 gave you four ways to repair an ambiguous reprise: repeat the noun, use “cette dernière” only for the nearest noun, rebuild the sentence, or switch to direct speech.', ['recap']),
  sent(2651, '« Cette dernière » pointe toujours vers le nom le plus proche, jamais vers celui que le sens voudrait viser ; si ce n’est pas le bon nom, il faut répéter le nom ou reconstruire la phrase.', '“Cette dernière” always points to the nearest noun, never to the one meaning would want it to target; if that is not the right noun, you must repeat the noun or rebuild the sentence.', ['regle']),
  sent(2652, 'Un « cela » qui revient deux fois dans la même phrase, sans qu’on sache ce qu’il nomme la seconde fois, est une référence qui a déjà dérivé.', 'A “cela” that comes back twice in the same sentence, without anyone knowing what it names the second time, is a reference that has already drifted.', ['regle']),
  sent(2653, 'Une référence qui dérive se repère en se demandant, mot à mot : à quel nom précis ce pronom renvoie-t-il, et ce nom est-il bien celui que je veux dire.', 'A drifting reference is spotted by asking, word by word: which precise noun does this pronoun point to, and is that noun really the one I mean.', ['usage']),
  sent(2654, 'Un rapport qui compare deux personnes garde souvent un pronom ambigu, surtout quand les deux personnes partagent le même genre grammatical.', 'A report comparing two people often keeps an ambiguous pronoun, especially when the two people share the same grammatical gender.', ['usage']),
  sent(2655, 'Reconstruire la phrase coûte parfois plus de mots que répéter le nom ; à ce prix-là, la clarté gagne toujours.', 'Rebuilding the sentence sometimes costs more words than repeating the noun; at that price, clarity always wins.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 5 ROWS — La transition qui ne tient pas (2656-2667)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT5_ROWS: Row[] = [
  sent(2656, 'Le nombre de bénévoles a doublé cette année ; l’association organisera donc un grand barbecue en juin.', 'The number of volunteers doubled this year; the association will therefore organise a big barbecue in June.', ['piege-transition'], SR),
  sent(2657, 'Le nombre de bénévoles a doublé cette année ; l’association profitera d’ailleurs de cet élan pour organiser un grand barbecue en juin.', 'The number of volunteers doubled this year; the association will moreover take advantage of this momentum to organise a big barbecue in June.', ['reformulation']),
  sent(2658, 'La trésorière a présenté un bilan solide ; cependant, le président a remercié les bénévoles pour leur engagement.', 'The treasurer presented a solid report; however, the chairman thanked the volunteers for their commitment.', ['piege-transition'], SR),
  sent(2659, 'La trésorière a présenté un bilan solide ; le président a par ailleurs remercié les bénévoles pour leur engagement.', 'The treasurer presented a solid report; the chairman also thanked the volunteers for their commitment.', ['reformulation']),
  sent(2660, 'Les inscriptions ont été plus nombreuses que prévu ; par conséquent, la salle habituelle est devenue trop grande pour l’événement.', 'Registrations were more numerous than expected; consequently, the usual room has become too big for the event.', ['piege-transition'], SR),
  sent(2661, 'Les inscriptions ont été plus nombreuses que prévu ; par conséquent, la salle habituelle est devenue trop petite pour l’événement.', 'Registrations were more numerous than expected; consequently, the usual room has become too small for the event.', ['reformulation']),
  phrase(2662, 'un connecteur qui ment', 'a connector that lies', ['metalangage']),
  sent(2663, 'Un connecteur logique fait une promesse : « donc » promet une cause, « cependant » promet une opposition, « par conséquent » promet une suite logique précise. Vérifie toujours que la phrase tient cette promesse.', 'A logical connector makes a promise: “donc” promises a cause, “cependant” promises an opposition, “par conséquent” promises a precise logical consequence. Always check that the sentence keeps that promise.', ['regle']),
  sent(2664, 'Une transition faible se corrige de deux façons : changer le connecteur pour un qui dit vrai, ou corriger le fait pour qu’il suive vraiment la logique annoncée.', 'A weak transition is corrected in two ways: change the connector for one that tells the truth, or correct the fact so that it genuinely follows the announced logic.', ['regle']),
  sent(2665, 'La leçon 22 du C1 t’a appris à rendre visibles les connecteurs qui annoncent, opposent ou concluent, en traduisant depuis l’anglais ; ici, le texte est déjà en français, et le problème est inverse : le connecteur est bien là, mais il ne dit pas vrai.', 'Lesson 22 of C1 taught you to make visible the connectors that announce, oppose or conclude, when translating from English; here, the text is already in French, and the problem is the reverse: the connector is right there, but it is not telling the truth.', ['recap']),
  sent(2666, 'Un rapport annuel garde souvent un « donc » de transition, écrit avant que le paragraphe suivant ne soit entièrement rédigé, et qui ne raccroche plus rien une fois le texte terminé.', 'An annual report often keeps a transitional “donc”, written before the next paragraph was fully drafted, which no longer connects anything once the text is finished.', ['usage']),
  sent(2667, 'Lire un paragraphe à l’envers, de la dernière phrase à la première, révèle souvent qu’un connecteur promettait une suite qui n’est jamais venue.', 'Reading a paragraph backward, from the last sentence to the first, often reveals that a connector promised a sequel that never came.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 6 ROWS — Le piège central (2668-2676)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT6_ROWS: Row[] = [
  sent(2668, 'La présidente a présenté le rapport juste après la nouvelle trésorière ; elle avait préparé plusieurs graphiques très clairs. Les chiffres étaient bons, donc l’assemblée a voté une hausse des cotisations de dix pour cent.', 'The chairwoman presented the report just after the new treasurer; she had prepared several very clear graphs. The figures were good, so the assembly voted a ten percent increase in dues.', ['piege-double'], SR),
  sent(2669, 'La présidente a présenté le rapport juste après la nouvelle trésorière ; la trésorière avait préparé plusieurs graphiques très clairs. Les chiffres étaient bons, donc l’assemblée a voté une hausse des cotisations de dix pour cent.', 'The chairwoman presented the report just after the new treasurer; the treasurer had prepared several very clear graphs. The figures were good, so the assembly voted a ten percent increase in dues.', ['piege-partiel'], SR),
  sent(2670, 'La présidente a présenté le rapport juste après la nouvelle trésorière ; elle avait préparé plusieurs graphiques très clairs. Les chiffres étaient bons ; l’assemblée a néanmoins voté une hausse des cotisations de dix pour cent, pour anticiper les dépenses de l’an prochain.', 'The chairwoman presented the report just after the new treasurer; she had prepared several very clear graphs. The figures were good; the assembly nonetheless voted a ten percent increase in dues, to anticipate next year’s expenses.', ['piege-partiel'], SR),
  sent(2671, 'La présidente a présenté le rapport juste après la nouvelle trésorière ; la trésorière avait préparé plusieurs graphiques très clairs. Les chiffres étaient bons ; l’assemblée a néanmoins voté une hausse des cotisations de dix pour cent, pour anticiper les dépenses de l’an prochain.', 'The chairwoman presented the report just after the new treasurer; the treasurer had prepared several very clear graphs. The figures were good; the assembly nonetheless voted a ten percent increase in dues, to anticipate next year’s expenses.', ['reformulation']),
  phrase(2672, 'une correction qui en cache une autre', 'a correction that hides another', ['metalangage']),
  sent(2673, 'Corriger une seule faute à la fois ne suffit jamais : il faut relire le texte entier contre chacune des quatre fautes, même celle qu’on vient de réparer ailleurs.', 'Correcting only one fault at a time is never enough: you must reread the whole text against each of the four faults, even the one you just repaired elsewhere.', ['regle']),
  sent(2674, 'Une version corrigée qui se sent déjà meilleure n’est pas forcément complètement corrigée.', 'A corrected version that already feels better is not necessarily completely corrected.', ['regle']),
  sent(2675, 'La seule façon de savoir qu’une révision est complète est de repasser les quatre questions, une par une, même sur le texte qu’on vient de corriger.', 'The only way to know a revision is complete is to go back through the four questions, one by one, even on the text you just corrected.', ['usage']),
  sent(2676, 'Deux relecteurs qui corrigent chacun une faute différente sur le même texte ne garantissent pas, à eux deux, un texte sans faute.', 'Two proofreaders who each correct a different fault on the same text do not, between the two of them, guarantee a fault-free text.', ['usage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 7 ROWS — Avant ta révision (2677-2683)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT7_ROWS: Row[] = [
  sent(2677, 'Avant d’envoyer ce brouillon à l’imprimeur, comment tu t’organises pour le relire.', 'Before sending this draft to the printer, how do you organise yourself to reread it.', ['scenario']),
  sent(2678, 'Je vérifie le registre d’abord, puis je cherche les redites, ensuite je suis chaque pronom jusqu’à son nom, et enfin je teste chaque connecteur.', 'I check the register first, then I look for repeats, then I follow each pronoun to its noun, and finally I test each connector.', ['plan']),
  sent(2679, 'Et si le texte est déjà passé une fois par cette liste, tu le relis une deuxième fois de la même façon.', 'And if the text has already gone through this list once, do you reread it a second time the same way.', ['scenario']),
  sent(2680, 'Oui, parce qu’une correction peut en cacher une autre ; je relis le texte entier contre les quatre questions, même les passages déjà corrigés.', 'Yes, because one correction can hide another; I reread the whole text against the four questions, even the already corrected passages.', ['plan']),
  phrase(2681, 'les quatre questions', 'the four questions', ['metalangage']),
  sent(2682, 'Le registre, la redondance, la référence, la transition : dans cet ordre ou dans un autre, les quatre questions se posent toutes, sur tout le texte.', 'Register, redundancy, reference, transition: in this order or another, all four questions must be asked, on the whole text.', ['regle']),
  sent(2683, 'Avant ta révision, nomme les quatre questions, puis applique-les, une par une, à un texte que tu n’as encore jamais lu.', 'Before your revision, name the four questions, then apply them, one by one, to a text you have never read before.', ['usage']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 8 ROWS — Ta révision (2684-2686)
 * ══════════════════════════════════════════════════════════════════════════ */

/** THE MISSION SOURCE. Carries all four faults at once, invented for this
 *  lesson (§C). Register slip: "Franchement, ça va être une super année
 *  pour tout le monde." Redundancy: the closing clause restates the
 *  deadline already given. Dangling reference: "celle-ci" grammatically
 *  nearest to "la trésorière sortante", semantically contradicted by
 *  "reconduite dans ses fonctions" (an OUTGOING treasurer being reappointed
 *  makes no sense; the intended referent is the chairwoman). Weak
 *  transition: "donc" claims that balanced accounts CAUSE new projects,
 *  which they do not, on their own, explain. */
export const MISSION_SOURCE =
  'L’assemblée générale annuelle de l’association se tiendra le quinze mars. La présidente et la trésorière sortante ont toutes deux préparé un rapport détaillé ; celle-ci sera d’ailleurs reconduite dans ses fonctions, sauf avis contraire de l’assemblée. Les comptes sont équilibrés, donc plusieurs projets seront proposés pour l’année prochaine, dont la rénovation du local et l’achat de nouveau matériel. Franchement, ça va être une super année pour tout le monde. Les membres sont invités à confirmer leur présence avant le dix mars, date limite pour s’inscrire et dernier jour pour faire connaître sa participation.';

export const MISSION_SOURCE_EN =
  'The association’s annual general meeting will be held on March fifteenth. The chairwoman and the outgoing treasurer have both prepared a detailed report; the latter will moreover be reappointed to her role, barring any objection from the assembly. The accounts are balanced, so several projects will be proposed for next year, including the renovation of the venue and the purchase of new equipment. Frankly, it is going to be a great year for everyone. Members are invited to confirm their attendance before March tenth, the deadline to register and the last day to make their participation known.';

const ACT8_ROWS: Row[] = [
  sent(2684, 'Une révision réussie se relit comme si elle avait toujours été écrite ainsi, sans trace visible de la correction.', 'A successful revision reads as if it had always been written that way, with no visible trace of the correction.', ['bilan']),
  sent(2685, 'Le texte corrigé garde exactement les mêmes faits que le brouillon ; seules la forme et la cohérence ont changé.', 'The corrected text keeps exactly the same facts as the draft; only the form and the coherence have changed.', ['bilan']),
  sent(2686, 'Inès relit son brouillon une dernière fois avant de l’envoyer à Soline, et elle s’y reprend à quatre fois, une pour chaque question.', 'Inès rereads her draft one last time before sending it to Soline, and she goes through it four times, once for each question.', ['scenario']),
];

export const ROWS_BY_ACT: Row[][] = [ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS, ACT7_ROWS, ACT8_ROWS];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** No row is reused from c1.05/c1.06/c1.17/c1.22 (§B above): every act
 *  imports nothing. Kept as an export so the lesson file's assembly code is
 *  identical in shape to every other B1+/C1/C2 lesson. */
export const IMPORTED: Record<string, string[]> = {
  act1: [], act2: [], act3: [], act4: [], act5: [], act6: [], act7: [], act8: [],
};
export const IMPORT_IDS: string[] = [...new Set(Object.values(IMPORTED).flat())];

/** No row here is unreleasable by kind; the distractors (`SR` drills =
 *  {sentence, review}, no flashcard, no voiceflash) are NAMED but never
 *  released: flawed drafts and half-fixed "corrections" a learner must not
 *  be quizzed on as if they were correct French to produce. */
export const NOT_DECK_ABLE: string[] = ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id);
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];
