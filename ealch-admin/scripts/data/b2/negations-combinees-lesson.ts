// b2.21.l1 « Les négations combinées »: the lesson.
// DRAFT, to B1-BUILD-PLAYBOOK.md (grammar shape, as b2.15 cause-consequence
// and b2.16 concession-avancee), under the B2 rules of B2-BUILD-LOG.md (form,
// meaning, choice, text).
//
// Not imported, not merged into seed.json, not published. `task` is in the
// schema now, so the lesson validates with it in place (as b2.16 does).
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act (B2): meet (scene, story, reading or listening), name
//   (cardDeck, tapTable, examples), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the form), trap (trapDrill stepped or
//   commonErrors), then from act 3 on the form INSIDE A TEXT of 60 to 120
//   words (complete, reorder, correct, rewrite, transcribe), then the gated
//   act check.
//
//    1  Le démenti                     6   meet combined negations in a
//                                           witness statement; the scene's
//                                           wrong option is « je n'ai pas
//                                           rien cassé »
//    2  Plusieurs mots, un seul ne     7   recap of lesson 20 in B1; the
//                                           order plus > jamais > the rest;
//                                           plus aucun, plus ni… ni, plus
//                                           nulle part, jamais plus
//                                           (soutenu), rien de, personne
//                                           d'autre
//    3  Au passé composé               8   each word keeps its side of the
//                                           participle; rien vu de suspect;
//                                           with a second verb
//    4  Devant l'infinitif, après sans 8   ne plus rien dire, ne plus voir
//                                           personne, n'avoir rien vu / ne
//                                           rien avoir vu; sans + rien,
//                                           personne, aucun, jamais
//    5  Pas reste dehors               8   the stacking ban; ce n'est pas
//                                           rien; pas… non plus; pas un
//                                           seul, pas du tout, pas encore
//    6  Le sujet négatif               8   personne ne, rien ne, aucun… ne,
//                                           nul ne, ni… ni… ne (plural),
//                                           plus personne ne; personne n'a
//                                           rien vu
//    7  Plus que, jamais que, pas que  7   restriction combined (plain ne…
//                                           que is lesson 19 in B2)
//    8  Le registre soutenu            8   guère, plus guère, nullement,
//                                           aucunement, point (recognise),
//                                           ne alone with savoir, pouvoir,
//                                           oser, cesser
//    9  La portée                      8   the request or the action; penser
//                                           que; pas tous / aucun; toujours
//                                           pas / pas toujours; pas tout /
//                                           rien; the negated cause
//   10  Le ne qui ne nie pas           8   the ne explétif (lesson 18 in B2
//                                           owns it) is not a negation;
//                                           craindre que ne / ne… pas; the
//                                           dropped ne, named as spoken;
//                                           plus [ply] / [plys]
//   11  Contester par écrit           11   model letter, plan, role play,
//                                           TASK, quiz
//
//   TOTAL 87 missions, 11 acts. Corpus: 181 authored rows (.1400-.1599) in
//   eleven blocks plus 42 reused seed rows, released act by act through
//   `deckTranche`. Quiz: 11 rounds of 8 (one per act 2 to 10, a recycling
//   round citing lesson 20 in B1 and lessons 1, 6, 11, 14, 15 and 16 in B2,
//   an exam-format round). Chapter artwork:
//   `negations-combinees-image-prompts.md`, eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (a later lesson may import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Un seul ne, et les mots négatifs s'additionnent pour dessiner le vide ;
//   pas, lui, ne s'y joint jamais. »
//   EN: One ne, and the negative words add up to draw the gap; pas never
//   joins them.
//
//   ONE METAPHOR, LE VIDE DESSINÉ, continued from lesson 20 in B1 (« Ne
//   ouvre un vide »): several words draw the same gap around one ne, and pas
//   stays out. Scope (act 9) is where the gap is drawn; the ne explétif (act
//   10) draws none. Rejected candidates and why: corpus §E.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    combined negations at B2: the order of the words (plus aucun,
//           plus ni… ni, plus nulle part, plus jamais personne, jamais
//           aucun, jamais plus as soutenu); their place around the
//           participle and before an infinitive; sans + negative word; the
//           ban on stacking pas and its one fixed exception (ce n'est pas
//           rien); pas… non plus; the negative subject with combinations
//           (personne n'a rien vu, nul ne, ni… ni… ne); ne… plus que, ne…
//           jamais que, ne… pas que, ne… guère que; the formal negations and
//           ne alone; scope; the ne explétif named as NOT a negation; the
//           dropped ne under the gate B2-2 spoken-variant decision.
//   QUOTES  the reframes of lesson 20 in B1 and lessons 6, 9, 11, 14 in B2,
//           re-exported from their corpus files; rows of lesson 20 in B1
//           and lessons 1, 5, 6, 9, 11, 14, 15, 16, 25, 26 in B2 reused BY
//           ID.
//   LEAVES  plain ne… que to lesson 19 in B2 and the ne explétif to lesson
//           18 in B2 (both written in parallel, cited by number, no row
//           named); the subjunctive after je ne pense pas que to lesson 6 in
//           B2 (quoted). The roundup names lesson 22 in B2 (academic style),
//           the next step on the trail.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   B2: natural French, not simplified; English still authored on every
//   learner string (an `en` field or a final `EN: `), never on an answer.
//   tu in every instruction; characters use what the situation needs.
//   Every `say` is French. No spaced « ? » or « ! » in any scene or story
//   bubble. The scenario uses ’ only and embeds no corpus row. Other lessons
//   cited by trail position in words, never by raw id. Mission answer slots
//   are spread by `spreadMissions()`, the quiz by `spreadSlots()` (no text
//   changes, no `why` names a position), as b2.16 does. Gate B2-2 spoken-
//   variant decision: the written norm (ne kept) is taught and tested; the
//   spoken forms without ne are rows tagged `oral`, named as spoken, and
//   cost at most one point in the task. Stacking pas on a negative word is
//   an error, not a variant. Every typed answer that could take another
//   correct form lists it in `accept` (n'avoir rien vu / ne rien avoir vu,
//   non plus in either place, l' masculine or feminine).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. ELEVEN acts and ELEVEN quiz rounds: act 1 has no round of its own (as
//      lesson 16 in B2), so the rounds are acts 2 to 10, recycling, exam.
//   2. « TOUS… NE… PAS » is taught as usually meaning « pas tous », with the
//      advice to write « ne… pas tous » or « aucun » in a letter; it is
//      never asked for, only read. Keep?
//   3. « NE… POINT » and « POINT N'EST BESOIN » are recognition only
//      (flashcard rows, no voiceflash, never asked for in production).
//      « Je ne puis » is taught as correct and very formal. Agree?
//   4. « NI… NI… NE » is taught with the plural as the rule; the singular
//      (when only one of the two can act) is named on the sheet and never
//      tested. Every tested sentence has a plural member to force it.
//   5. THE TASK offers two situations (an energy bill for a flat already
//      left, a deposit withheld for water damage), 200 to 250 words, FIVE
//      criteria (tâche 3, cohérence 3, étendue 2, correction 2, registre 2 =
//      12), as lessons 7 and 16 in B2. Annotation block inside
//      `modelAnswer`.
//   6. Lessons 18 and 19 in B2 are cited by number although they are
//      written in parallel; this lesson must publish with them (the brief
//      says 17 to 21 publish together).
//   7. `Lesson.version` is 1 (a new lesson). 'coach-fr-FR' is inert; kept.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  LECTURE_DEPOSITION, LECTURE_MODELE,
  TEXTE_A3, TEXTE_A4, TEXTE_A5, TEXTE_A6, TEXTE_A7, TEXTE_A8, TEXTE_A9, TEXTE_A10,
  B120_REFRAME, B120_REFRAME_EN, B214_REFRAME, B214_REFRAME_EN, B206_REFRAME, B206_REFRAME_EN,
  B211_REFRAME, B211_REFRAME_EN, B216_REFRAME, B216_REFRAME_EN,
  NEG_B1_UNIT, MODES_UNIT, INFINITIVES_UNIT,
  NEG_B1_REF, PQP_REF, SUBJ_PASSE_REF, MODES_REF, LITT_REF, TONIQUES_REF, INFINITIVES_REF,
  CAUSE_REF, CONCESSION_REF, TEMPS_REF, RESTRICTION_REF, ECOUTE_REF, REUNIONS_REF, NEXT_REF,
} from './negations-combinees-corpus.ts';
import { NEGATIONS_COMBINEES_TERMS } from './negations-combinees-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };
type TrapCard = NonNullable<Sec<'trapDrill'>['cards']>[number];
type TrapStep = NonNullable<Sec<'trapDrill'>['steps']>[number];

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string; drills?: string[] };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));
const OWN = new Set(ALL_ROWS.map((r) => r.id));
const NR = (n: number) => `fr.b1.negation-et-restriction.${n}`;
const FP = (n: number) => `fr.b2.faits-et-procedures.${n}`;
const CL = (n: number) => `fr.b2.connecteurs-logiques.${n}`;
const PE1855 = 'fr.b2.pronoms-essentiels.1855';
const PE1910 = 'fr.b2.pronoms-essentiels.1910';
const OA1826 = 'fr.b2.opinions-et-avis.1826';
const SC1609 = 'fr.b2.strategies-de-comprehension.1609';
const AF1278 = 'fr.b2.affaires.1278';
const EM1273 = 'fr.b2.emotions.1273';
const LI1254 = 'fr.b2.litterature.1254';
const RP1640 = 'fr.b2.recits-au-passe.1640';

/** An item's fr/en, from this corpus or the seed. Throws on a typo. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b2.21: no item ${id}`);
  return r;
}
const fr = (id: string) => src(id).fr;
const en = (id: string) => src(id).en;

function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b2.21: no ipa on ${id}`);
  return r.ipa;
}
/** The row's respelling, BRACKETED for a section. */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b2.21: no respell on ${id}`);
  return `[${r.respell}]`;
}

const it = (id: string, note?: string): GItem => ({ fr: fr(id), itemId: id, en: en(id), ...(note ? { note } : {}) });
const ln = (id: string) => ({ fr: fr(id), en: en(id) });
const ex = (id: string, note: string) => ({ fr: fr(id), en: en(id), note });
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** A trap card: the WRONG version in promptSound (never spoken), the row's
 *  correct French in fr. */
const trap = (id: string, promptLabel: string, promptSound: string, tip: string): TrapCard =>
  ({ promptLabel, promptSound, fr: fr(id), ipa: ipaOf(id), tip });

const STEPS = (ruleTitle: string, cardsTitle: string): TrapStep[] => [
  { label: 'La règle', kind: 'rule', title: ruleTitle },
  { label: 'Six cartes', kind: 'cards', title: cardsTitle },
  { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
  { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
];

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/** THE « IN A TEXT » BEAT that closes acts 3 to 10: one paragraph of 60 to
 *  120 words, with the answers behind the modal. Always the same title, so a
 *  learner and a reviewer see the loop. */
function dansUnTexte(
  id: string, frSub: string, text: string, questions: { q: string; a: string }[], rec: string, terms: string[],
): Sec<'reading'> {
  return {
    type: 'reading', id, layer: 'core', questionsInModal: true,
    title: 'Dans un texte', frSub, text, questions,
    audio: REC(rec), say: REFRAME, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1: LE DÉMENTI
 *
 *  Meet combined negations, and the one rule under them. The scene's wrong
 *  option stacks pas on rien: the agent hears « pas rien » as « quelque
 *  chose » and notes an admission. NO « ? » OR « ! » IN ANY BUBBLE.
 * ══════════════════════════════════════════════════════════════════════════ */

const PAS_RIEN = {
  fr: "Je n'ai pas rien cassé dans cet appartement.",
  ipa: '/ʒə ne pa ʁjɛ̃ ka.se dɑ̃ sɛ.ta.paʁ.tə.mɑ̃/',
  respell: '[zhuh nay pa ryehⁿ ka-SAY | dahⁿ seh-ta-par-tuh-MAHⁿ]',
  en: 'I didn’t break nothing in this flat. (Pas stacked on rien: it can be heard as « something ».)',
};

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: "L'état des lieux",
  frSub: 'Nier, sans laisser de doute',
  setting: { place: 'Un appartement vide, rue de la Victoire', city: 'Bruxelles', time: 'vendredi, 9 h', ambience: 'des murs blancs, un parquet ciré, une agente avec une tablette' },
  beats: [
    {
      kind: 'narration',
      text: "Bruxelles, l'état des lieux de sortie de ton appartement. Mme Peeters, de l'agence, fait le tour des pièces avec sa tablette. Elle s'arrête devant la fenêtre de la cuisine.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Mme Peeters',
      fr: 'La vitre est fissurée. Je vais devoir le noter à votre charge.',
      en: 'The pane is cracked. I will have to put it down as your responsibility.',
      respell: '[la VEETR eh fee-sü-RAY | zhuh vay duh-vwar luh noh-TAY | a votr SHARZH]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Cette fissure était déjà là à mon arrivée.',
      en: 'That crack was already there when I moved in.',
      respell: '[set fee-SÜR | ay-teh day-zha LA | a mohⁿ-na-ree-VAY]',
      stage: 'Elle ne te croit qu’à moitié : il te faut une phrase nette pour le rapport.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Tu veux dire que tu n'as rien abîmé, ni cette vitre ni autre chose, en trois ans. Mme Peeters tape chaque mot sur sa tablette.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Quelle phrase nie tout, sans laisser de doute.',
      size: 'lg',
      options: [
        { fr: PAS_RIEN.fr, respell: PAS_RIEN.respell, en: PAS_RIEN.en, outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1412)), respell: rsOf(E(1412)), en: en(E(1412)), outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Mme Peeters tape la phrase telle quelle et ajoute : le locataire conteste. La vitre sera comparée aux photos de l’état des lieux d’entrée.',
        breaks: 'Mme Peeters lève les yeux : pas rien, donc quelque chose. Elle note que tu reconnais un dégât.',
      },
    },
    {
      kind: 'break',
      heading: 'Pas et rien ne vont pas ensemble',
      body: "Rien a déjà pris la place de pas. Les deux ensemble brouillent le sens, et « pas rien » s'entend même comme « quelque chose ». Pour tout nier, combine les mots négatifs autour d'un seul ne : jamais rien. EN: rien already replaces pas; together they blur the meaning.",
      wrong: { fr: PAS_RIEN.fr, ipa: PAS_RIEN.ipa, respell: PAS_RIEN.respell, en: PAS_RIEN.en },
      right: { fr: fr(E(1412)), ipa: ipaOf(E(1412)), respell: rsOf(E(1412)), en: en(E(1412)) },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Nier précisément, c'est la base d'un témoignage, d'une réclamation ou d'une lettre de contestation. Cette leçon t'apprend à combiner les mots négatifs, à les placer, à choisir leur registre et à dire exactement ce que tu nies.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['vide', 'empilement'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Combiner et placer plusieurs mots négatifs', s: 'Actes 2 à 4 : plus jamais rien, au passé composé, devant l’infinitif' },
    { t: 'Ne jamais empiler pas, et nier par le sujet', s: 'Actes 5 et 6 : ce n’est pas rien, personne n’a rien vu, nul ne' },
    { t: 'Choisir le registre et la portée', s: 'Actes 7 à 10 : plus que, nullement, pas tous, le ne explétif' },
    { t: 'Contester une facture ou une accusation', s: 'Acte 11 : une lettre de 200 à 250 mots, format DELF B2' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La déposition',
  frSub: 'Lis, et repère chaque négation',
  text: LECTURE_DEPOSITION,
  glossary: [
    { word: 'recueillie', en: 'taken down', note: 'Notée par un agent, mot à mot.' },
    { word: 'camionnette', en: 'van', note: 'Un petit camion de livraison.' },
    { word: 'un choc sourd', en: 'a dull thud', note: 'Un bruit bas, sans écho.' },
    { word: 'témoigner', en: 'to testify', note: 'Dire devant la police ou un juge ce qu’on a vu.' },
  ],
  questions: [
    { q: 'Global : à quoi sert cette déposition ?', a: "À dire précisément ce que le témoin a vu et n'a pas vu, pour corriger une accusation contre son voisin." },
    { q: 'Détail : qu’y avait-il au deuxième niveau ?', a: "Plus aucune voiture, sauf la sienne et une camionnette blanche." },
    { q: 'Inférence : pourquoi insiste-t-elle sur ce qu’elle a dit, et sur ce qu’elle n’a pas dit ?', a: "Parce que la place de la négation change tout : elle n'a pas dit avoir vu le conducteur ; elle a dit qu'elle ne l'avait pas vu. L'accusation reposait sur une phrase mal comprise." },
    { q: 'Forme : trouve une négation combinée au plus-que-parfait et une au passé composé.', a: "Je n'avais jamais rien remarqué ; je n'ai plus rien entendu." },
    { q: 'Forme : « Personne n’est sorti de l’ascenseur » : où est pas ?', a: "Il n'y en a pas : personne est le sujet, et ne suffit." },
    { q: 'Ton : comment montre-t-elle qu’elle reste neutre ?', a: "« Je ne cherche nullement à le protéger », en registre soutenu, et elle ne témoigne que de ce qu'elle a vu." },
  ],
  audio: REC('rec-b2-21-deposition'),
  say: REFRAME,
  terms: ['vide', 'portee'],
};

const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Repère les négations combinées',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Plusieurs mots, un seul ne', [
      it(E(1400), 'jamais + rien'),
      it(E(1401), 'plus + aucune'),
      it(E(1404), 'plus + rien'),
      it(E(1406), 'ni… ni…'),
    ], chk('Dans ces phrases, combien de ne pour plusieurs mots négatifs ?',
      ['un seul', 'un par mot négatif', 'aucun'], 0,
      'Un seul ne ; les mots négatifs s’ajoutent autour de lui. EN: one ne.')),
    grp('Nier précisément', [
      it(E(1402), 'personne après le participe'),
      it(E(1403), 'personne comme sujet'),
      it(E(1405), 'nullement : soutenu'),
      it(E(1411), 'ne seul : je ne saurais'),
    ], chk('« Je ne saurais dire d’où venait le bruit » : quel registre ?',
      ['soutenu', 'familier'], 0,
      'Ne seul avec savoir : l’écrit soigné d’une déposition. EN: formal.')),
    ctl('Ce qui est nié', '« Je n’ai pas dit que j’avais vu le conducteur. » Le témoin nie…',
      ['avoir dit cette phrase', 'avoir vu la voiture'], 0,
      'La négation touche dire : c’est la déclaration qui est niée. EN: the statement is denied.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['vide', 'portee'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où nier précisément change tout',
  cases: [
    { situation: 'Tu contestes un état des lieux', fr: fr(E(1412)), en: en(E(1412)) },
    { situation: 'Tu témoignes au commissariat', fr: fr(E(1402)), en: en(E(1402)) },
    { situation: 'Tu corriges ce qu’on te fait dire', fr: fr(E(1409)), en: en(E(1409)) },
    { situation: 'Tu montres que tu restes neutre', fr: fr(E(1405)), en: en(E(1405)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['vide'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Un seul ne', '« Je n’ai jamais rien cassé » : combien de ne ?',
    ['un', 'deux'], 0,
    'Un seul ne pour jamais et rien. EN: one.'),
  ctl('Pas dehors', 'Pour tout nier :',
    ['je n’ai rien cassé', 'je n’ai pas rien cassé'], 0,
    'Pas ne se joint jamais à rien. EN: no pas with rien.'),
  ctl('Ce n’est pas rien', '« Ce n’est pas rien » veut dire…',
    ['c’est important', 'ce n’est rien du tout'], 0,
    'Une expression figée : c’est important. EN: it matters.'),
], ['vide', 'empilement']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le démenti',
    opener: {
      line: "Une vitre fissurée qu'on te reproche : ici tu découvres comment plusieurs mots négatifs se combinent autour d'un seul ne pour nier exactement ce qu'il faut. EN: A cracked window is blamed on you: here you see how several negative words combine around one ne to deny exactly what you mean.",
      imageRef: 'lessons/negations-combinees/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères une négation combinée dans une déposition, tu sais qu'elle garde un seul ne, et tu ne mets jamais pas à côté de rien. EN: You can spot a combined negation, and you never put pas beside rien.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2: PLUSIEURS MOTS, UN SEUL NE
 *
 *  The recap of lesson 20 in B1 (the gap, plus jamais rien), then what it
 *  did not build: plus aucun, plus ni… ni, plus nulle part, plus jamais
 *  personne, jamais plus (soutenu), rien de + adjectif, personne d'autre.
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu sais déjà',
  frSub: `Ce que ${NEG_B1_REF} a construit`,
  hint: 'Quatre cartes. La dernière est la règle de cette leçon.',
  audio: REC('rec-b2-21-rappel'),
  say: REFRAME,
  terms: ['vide'],
  cards: [
    {
      head: 'Le vide', label: Cap(NEG_B1_REF),
      fr: fr(NR(1131)), sub: rsOf(NR(1131)),
      body: `« ${B120_REFRAME} » Plus, jamais, rien, personne : tu connais chaque mot. Ici, tu les combines. EN: ${B120_REFRAME_EN}`,
    },
    {
      head: 'Déjà deux mots', label: Cap(NEG_B1_REF),
      fr: fr(NR(1136)), sub: rsOf(NR(1136)),
      body: "Plus jamais rien : tu as déjà vu une combinaison. Ici, tu en vois d'autres, et l'ordre qui les tient ensemble. EN: you have met plus jamais rien; here come the others.",
    },
    {
      head: 'Plus personne', label: Cap(NEG_B1_REF),
      fr: fr(NR(1147)), sub: rsOf(NR(1147)),
      body: 'Ne devant le verbe, plus et personne après : aucun pas dans la combinaison. EN: plus personne, and no pas.',
    },
    {
      head: 'Un seul ne', label: 'cette leçon',
      fr: fr(E(1422)), sub: rsOf(E(1422)),
      body: `${REFRAME} EN: ${REFRAME_EN}`,
    },
  ],
};

const A2_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-table',
  layer: 'core',
  sheetId: 'sheet-ordre',
  title: 'Six combinaisons, un ordre',
  cols: ['Combinaison', 'Sens', 'Registre'],
  rows: [
    { cells: ['plus aucun', 'zéro, désormais', 'courant'], say: fr(E(1416)),
      detail: { title: 'plus aucun', body: "Plus d'abord, puis aucun : il n'y a plus aucun commerce. Aucun reste au singulier. EN: plus, then aucun.", say: fr(E(1427)) } },
    { cells: ['plus jamais personne', 'personne, plus jamais', 'courant'], say: fr(E(1422)),
      detail: { title: 'plus jamais personne', body: "Trois mots, dans l'ordre : plus, jamais, personne. EN: plus, jamais, personne.", say: fr(E(1431)) } },
    { cells: ['plus ni… ni…', 'ni l’un ni l’autre, désormais', 'courant'], say: fr(E(1418)),
      detail: { title: 'plus ni… ni…', body: "Plus se place devant le premier ni : la gare n'a plus ni guichet ni salle d'attente. EN: plus before the first ni.", say: fr(E(1429)) } },
    { cells: ['plus nulle part', 'nulle part, désormais', 'courant'], say: fr(E(1426)),
      detail: { title: 'plus nulle part', body: "Nulle part ferme la combinaison : on ne peut plus se garer nulle part. EN: nulle part comes last.", say: fr(E(1417)) } },
    { cells: ['jamais plus', 'plus jamais, avec emphase', 'soutenu'], say: fr(E(1419)),
      detail: { title: 'jamais plus', body: "L'ordre inversé existe, surtout en fin de phrase, dans un style soutenu ou littéraire. Au quotidien : plus jamais. EN: formal inversion.", say: fr(NR(1136)) } },
    { cells: ['rien de, personne d’autre', 'rien + adjectif', 'courant'], say: fr(E(1420)),
      detail: { title: 'rien de, personne d’autre', body: "Rien et personne prennent de devant un adjectif ou autre : plus rien de gratuit, plus personne d'autre. EN: rien de + adjective.", say: fr(E(1421)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ordre'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ordre',
  title: 'Ce que le B1 ne combinait pas',
  frSub: 'Quatre nouvelles combinaisons',
  hint: 'Quatre cartes. La troisième change l’ordre.',
  audio: REC('rec-b2-21-cartes-ordre'),
  say: REFRAME,
  terms: ['ordre'],
  cards: [
    {
      head: 'Plus aucun', label: 'zéro, désormais',
      fr: fr(E(1416)), sub: rsOf(E(1416)),
      body: "Plus dit que quelque chose a cessé ; aucun, qu'il n'en reste pas un. Ensemble, dans cet ordre, et sans pas. EN: plus aucun, in this order.",
    },
    {
      head: 'Plus ni… ni…', label: 'deux absences',
      fr: fr(E(1418)), sub: rsOf(E(1418)),
      body: 'Plus se met devant le premier ni, et chaque nom suit son ni : plus ni guichet ni salle d’attente. EN: plus before the first ni.',
    },
    {
      head: 'Jamais plus', label: 'soutenu',
      fr: fr(E(1419)), sub: rsOf(E(1419)),
      body: 'Au quotidien, plus jamais. Jamais plus, dans cet ordre, sonne soutenu ou littéraire, souvent en fin de phrase. Les deux sont corrects. EN: jamais plus is formal; both are correct.',
    },
    {
      head: 'Rien de…, personne d’autre', label: 'la suite',
      fr: fr(E(1420)), sub: rsOf(E(1420)),
      body: "Rien et personne peuvent prendre de et un adjectif au masculin singulier : rien de gratuit, personne d'autre. EN: rien de + masculine singular adjective.",
    },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Deux mots, puis trois',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Plus, jamais, puis le reste', [
      it(E(1416), 'plus aucun'),
      it(E(1425), 'jamais rien de'),
      it(E(1422), 'plus jamais personne'),
      it(E(1423), 'plus jamais aucun'),
    ], chk('« L’agence ne m’envoie … relevé. »',
      ['plus jamais aucun', 'jamais aucun plus', 'aucun plus jamais'], 0,
      'Plus, puis jamais, puis aucun. EN: plus jamais aucun.')),
    grp('Nulle part, ni… ni…', [
      it(E(1417), 'plus… nulle part'),
      it(E(1426), 'plus… nulle part'),
      it(E(1428), 'plus jamais nulle part'),
      it(E(1429), 'plus ni… ni…'),
    ], chk('« La gare n’a … guichet ni salle d’attente. »',
      ['plus ni', 'ni plus'], 0,
      'Plus devant le premier ni. EN: plus ni.')),
    ctl('Le registre', '« Je ne la reverrai jamais plus » :',
      ['correct, un peu soutenu', 'faux : il faut toujours plus jamais'], 0,
      'Les deux ordres existent ; jamais plus est plus soutenu. EN: correct and formal.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ordre'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le quartier qui se vide',
  frSub: 'Huit phrases à l’oreille',
  lines: [
    ln(E(1416)), ln(E(1418)), ln(E(1420)), ln(E(1422)),
    ln(E(1426)), ln(E(1431)), ln(E(1421)), ln(NR(1147)),
  ],
  questions: [
    { q: 'Première phrase : combien de commerces reste-t-il dans la rue ?', opts: ['aucun', 'un seul'], correct: 0, why: 'Plus aucun commerce : zéro. EN: none.' },
    { q: 'Deuxième phrase : que n’a plus la gare ?', opts: ['ni guichet ni salle d’attente', 'seulement une salle d’attente'], correct: 0, why: 'Plus ni… ni… : ni l’un ni l’autre. EN: neither.' },
    { q: 'Quatrième phrase : voit-on encore des gens dans cette rue ?', opts: ['non, plus jamais', 'oui, parfois'], correct: 0, why: 'Plus jamais personne. EN: never any more.' },
    { q: 'Sixième phrase : quand l’accueil est-il vide ?', opts: ['le midi', 'le soir'], correct: 0, why: 'Jamais personne à l’accueil le midi. EN: at lunchtime.' },
    { q: 'Dernière phrase : la personne connaît-elle encore des gens en ville ?', opts: ['non, plus personne', 'oui, beaucoup'], correct: 0, why: 'Plus personne dans cette ville. EN: no one any more.' },
  ],
  audio: REC('rec-b2-21-quartier-ecoute'),
  say: REFRAME,
  terms: ['ordre'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre ordres bousculés',
  errors: [
    {
      wrong: 'Il ne reste aucune plus place pour samedi.',
      right: fr(E(1427)),
      why: "Normal : en anglais, « no more » met le zéro en premier. En français, plus d'abord, puis aucune. EN: plus comes before aucune.",
    },
    {
      wrong: 'On ne voit jamais personne plus dans cette rue.',
      right: fr(E(1422)),
      why: "Normal : on ajoute plus à la fin, comme une idée de dernière minute. Mais plus se place juste après le verbe. EN: plus comes straight after the verb.",
    },
    {
      wrong: 'Il n’y a plus rien gratuit dans ce quartier.',
      right: fr(E(1420)),
      why: "Normal : en anglais, « nothing free » n'a pas de préposition. En français, rien demande de devant l'adjectif. EN: rien de + adjective.",
    },
    {
      wrong: 'Je ne connais personne plus d’autre ici.',
      right: fr(E(1421)),
      why: "Normal : personne d'autre forme un bloc, et plus semble venir après. Mais plus passe devant personne. EN: plus before personne.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ordre'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('L’ordre', 'Quel mot vient en premier dans la combinaison ?',
    ['plus', 'jamais', 'rien'], 0,
    'Plus, puis jamais, puis rien ou personne. EN: plus.'),
  ctl('Aucun', '« Il n’y a … commerce. »',
    ['plus aucun', 'aucun plus'], 0,
    'Plus aucun. EN: plus aucun.'),
  ctl('Rien de', '« Il n’y a plus rien … gratuit. »',
    ['de', 'du'], 0,
    'Rien de + adjectif. EN: de.'),
], ['ordre']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Plusieurs mots, un seul ne',
    opener: {
      line: "Une rue où tout ferme, un commerce après l'autre : ici tu combines plus, jamais, aucun et rien dans le bon ordre, autour d'un seul ne. EN: A street where everything closes: here you combine plus, jamais, aucun and rien in the right order around one ne.",
      imageRef: 'lessons/negations-combinees/act02.jpg',
    },
    sections: [],
    milestone: "Tu combines deux ou trois mots négatifs dans l'ordre (plus, jamais, puis le reste), tu reconnais jamais plus comme soutenu, et tu dis rien de gratuit, personne d'autre. EN: You can combine negative words in the right order.",
    estScreens: 38, restPoints: ['a2-table', 'a2-ecoute'],
  },
  sections: [A2_RAPPEL, A2_TABLE, A2_CARTES, A2_CONSTRUIRE, A2_ECOUTE, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3: AU PASSÉ COMPOSÉ
 *
 *  Lesson 20 in B1 placed ONE word; here each word of a combination keeps
 *  its own side of the participle, with rien de + adjectif and a second
 *  verb (pu faire, réussi à joindre).
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'La déposition de M. Rochat',
  frSub: 'Chaque mot à sa place',
  setting: "Lausanne, le poste de police du quartier. Au lendemain d'un vol dans un entrepôt, l'inspectrice Meylan interroge M. Rochat, le gardien de nuit.",
  bubbles: [
    { from: 'narrator', fr: 'L’inspectrice tape la déposition et relit chaque phrase à voix haute.', en: 'The inspector types the statement and reads each sentence aloud.' },
    { from: 'user', fr: fr(E(1437)), en: en(E(1437)) },
    { from: 'coach', fr: 'Plus avant le participe, personne après : chaque mot garde sa place.', en: 'Plus before the participle, personne after: each word keeps its place.', warn: 'Plus… personne' },
    { from: 'user', fr: fr(E(1436)), en: en(E(1436)) },
    { from: 'coach', fr: 'Jamais et rien vont tous les deux avant signé ; de tel reste après.', en: 'Jamais and rien both go before signé; de tel stays after.', warn: 'Jamais rien' },
    { from: 'user', fr: fr(E(1442)), en: en(E(1442)) },
    { from: 'coach', fr: 'Nulle part ferme la phrase, après le complément.', en: 'Nulle part closes the sentence, after the object.', warn: 'Nulle part' },
    { from: 'user', fr: fr(E(1443)), en: en(E(1443)) },
    { from: 'coach', fr: 'Plus avant parlé, que après : il n’a parlé qu’à elle, désormais.', en: 'Plus before parlé, que after: from then on he spoke only to her.', warn: 'Plus… que' },
  ],
  closing: { fr: 'Plus, jamais et rien avant le participe ; personne, aucun, nulle part et que après.', en: 'Plus, jamais and rien before the participle; personne, aucun, nulle part and que after.' },
  audio: REC('rec-b2-21-rochat'),
  say: REFRAME,
  terms: ['participe'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ordre',
  title: 'Deux côtés du participe',
  frSub: `Plus loin que ${NEG_B1_REF}`,
  hint: 'Quatre cartes. La dernière ajoute un verbe.',
  audio: REC('rec-b2-21-cartes-participe'),
  say: REFRAME,
  terms: ['participe'],
  cards: [
    {
      head: 'Tous avant', label: 'plus jamais rien',
      fr: fr(E(1439)), sub: rsOf(E(1439)),
      body: "Plus, jamais et rien vont avant le participe, dans l'ordre : je n'ai plus jamais rien reçu. EN: all three before the participle.",
    },
    {
      head: 'Un de chaque côté', label: 'plus… personne',
      fr: fr(E(1437)), sub: rsOf(E(1437)),
      body: "Plus va avant le participe, personne après : je n'ai plus vu personne. De même avec jamais… personne. EN: plus before, personne after.",
    },
    {
      head: 'Rien, puis de…', label: 'rien de + adjectif',
      fr: fr(E(1446)), sub: rsOf(E(1446)),
      body: "Rien reste avant le participe, et de + adjectif passe après : je n'ai rien vu de suspect. Personne d'autre suit le participe d'un bloc. EN: rien before, de suspect after.",
    },
    {
      head: 'Avec un verbe de plus', label: 'pouvoir, réussir à',
      fr: fr(E(1448)), sub: rsOf(E(1448)),
      body: "Rien se met avant pu ; personne suit le dernier verbe : je n'ai réussi à joindre personne. EN: rien before the participle, personne at the end.",
    },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Placer une combinaison',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Avant le participe', [
      it(E(1436), 'jamais rien signé'),
      it(E(1439), 'plus jamais rien reçu'),
      it(E(1450), 'plus jamais rien signé'),
      it(E(1452), 'plus jamais revenus'),
    ], chk('« Je n’ai … signé sans le lire. »',
      ['plus jamais rien', 'rien plus jamais', 'jamais rien plus'], 0,
      'Les trois avant le participe, dans l’ordre. EN: plus jamais rien.')),
    grp('Après le participe', [
      it(E(1437), 'plus vu personne'),
      it(E(1438), 'jamais vu personne'),
      it(E(1440), 'plus reçu aucune facture'),
      it(E(1442), 'plus vu… nulle part'),
    ], chk('« Nous n’avons plus reçu … depuis juin. »',
      ['aucune facture', 'facture aucune'], 0,
      'Aucune + nom, après le participe. EN: aucune facture.')),
    grp('Avec un deuxième verbe', [
      it(E(1448), 'rien avant pu'),
      it(E(1449), 'personne après joindre'),
      it(E(1447), 'personne d’autre'),
      it(E(1451), 'jamais rien dit de'),
    ], chk('« Je n’ai réussi à joindre … au service client. »',
      ['personne', 'pas personne'], 0,
      'Personne suit le dernier verbe, sans pas. EN: personne.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe'],
};

const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Des mots qui changent de côté',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Chacun de son côté du participe',
    body: "Plus, jamais et rien vont avant le participe ; personne, aucun, nulle part et que vont après. Dans une combinaison, chaque mot garde sa place, sans pas. EN: each word keeps its side of the participle.",
  },
  cards: [
    trap(E(1437), 'personne avant', "Je n'ai plus personne vu après vingt heures.", 'Personne suit le participe : plus vu personne. EN: personne after.'),
    trap(E(1436), 'rien avant jamais', "Je n'ai rien jamais signé de tel.", 'Jamais avant rien : jamais rien signé. EN: jamais rien.'),
    trap(E(1440), 'aucune avant', "Nous n'avons plus aucune facture reçu depuis juin.", 'Aucune + nom après le participe : reçu aucune facture. EN: after.'),
    trap(E(1446), 'de suspect avant', "Je n'ai rien de suspect vu.", 'De suspect suit le participe. EN: vu de suspect.'),
    trap(E(1439), 'rien après', "Je n'ai plus jamais reçu rien de leur part.", 'Rien avant le participe : plus jamais rien reçu. EN: rien before.'),
    trap(E(1443), 'que avant', "Je n'ai plus qu'à la gardienne parlé.", 'Que et son complément suivent le participe. EN: parlé qu’à.'),
  ],
  drill: [
    { promptSay: "Je n'ai plus vu … après vingt heures.", opts: ['personne', 'pas personne'], correct: 0 },
    { promptSay: "Je n'ai jamais … signé de tel.", opts: ['rien', 'pas rien'], correct: 0 },
    { promptSay: "Nous n'avons plus reçu … facture depuis juin.", opts: ['aucune', 'aucunes'], correct: 0 },
    { promptSay: "Je n'ai rien vu … suspect.", opts: ['de', 'du'], correct: 0 },
    { promptSay: 'Ils ne sont … revenus au magasin.', opts: ['plus jamais', 'jamais pas'], correct: 0 },
    { promptSay: "Je n'ai … pu faire pour l'aider.", opts: ['rien', 'pas rien'], correct: 0 },
    { promptSay: "Je n'ai vu personne …", opts: ["d'autre", 'autre'], correct: 0 },
    { promptSay: "Elle n'a jamais rencontré … le directeur ni son adjoint.", opts: ['ni', 'pas'], correct: 0 },
  ],
  steps: STEPS('Chacun de son côté du participe', 'Des mots qui changent de côté'),
  audio: REC('rec-b2-21-piege-participe'),
  say: REFRAME,
  terms: ['participe'],
};

const A3_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a3-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Avant ou après le participe',
  itemIds: dicteeFor(3),
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq phrases, cinq places',
  frSub: `De ${NEG_B1_REF} à cette leçon`,
  examples: [
    ex(NR(1093), 'rien avant le participe : un seul mot'),
    ex(NR(1094), 'personne après le participe'),
    ex(NR(1143), 'jamais rien : les deux avant'),
    ex(E(1441), 'en + aucune : aucune reste après'),
    ex(E(1453), 'jamais… aucun : un de chaque côté'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['participe'],
};

const A3_TEXTE = dansUnTexte('a3-texte', 'Compléter : la déposition de M. Rochat', TEXTE_A3, [
  { q: 'Première phrase : je (ne plus voir personne) après vingt heures.', a: "Je n'ai plus vu personne : plus avant le participe, personne après." },
  { q: 'Deuxième phrase : je (ne jamais rien signer) pour ce livreur.', a: "Je n'ai jamais rien signé : jamais et rien, tous deux avant le participe." },
  { q: 'Troisième phrase : nous (ne plus recevoir aucune livraison) le dimanche.', a: "Nous n'avons plus reçu aucune livraison : aucune et son nom après le participe." },
  { q: 'Dernière phrase : je (ne voir personne d’autre) ; je (ne plus parler qu’à) ma collègue.', a: "Je n'ai vu personne d'autre ; je n'ai plus parlé qu'à ma collègue : personne d'autre et qu'à après le participe." },
], 'rec-b2-21-texte-a3', ['participe']);

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Avant', 'Lequel va avant le participe ?',
    ['rien', 'personne'], 0,
    'Rien, comme plus et jamais. EN: rien.'),
  ctl('Après', '« Je n’ai plus vu … »',
    ['personne', 'rien'], 0,
    'Personne suit le participe. EN: personne.'),
  ctl('Trois mots', '« Je n’ai … reçu. »',
    ['plus jamais rien', 'rien plus jamais'], 0,
    'Dans l’ordre, tous avant le participe. EN: plus jamais rien.'),
], ['participe']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Au passé composé',
    opener: {
      line: "Un gardien raconte sa nuit, et chaque mot négatif a sa place autour du participe : ici tu places plusieurs mots dans un temps composé. EN: A night guard tells his night: here you place several negative words around the participle.",
      imageRef: 'lessons/negations-combinees/act03.jpg',
    },
    sections: [],
    milestone: "Tu places plus, jamais et rien avant le participe, personne, aucun, nulle part et que après, même quand ils se combinent. EN: You can place combined negative words in compound tenses.",
    estScreens: 40, restPoints: ['a3-construire', 'a3-dictee'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_PIEGE, A3_DICTEE, A3_EXEMPLES, A3_TEXTE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4: DEVANT L'INFINITIF, APRÈS SANS
 *
 *  Lesson 14 in B2 built the infinitive clause and ne pas avoir / n'avoir
 *  pas; here the combinations: ne plus rien dire, ne plus voir personne, the
 *  two orders of the infinitif passé, and sans, which holds the place of ne.
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Le voisin du dessous',
  frSub: 'Promettre, avec un infinitif',
  setting: "Genève. Léa a reçu une plainte pour bruit de son voisin, M. Favre. Elle prépare sa réponse au téléphone avec son amie Inès.",
  bubbles: [
    { from: 'narrator', fr: 'Léa lit son brouillon ; Inès l’aide à placer chaque négation.', en: 'Léa reads her draft; Inès helps her place each negative.' },
    { from: 'user', fr: 'Je m’engage à ne plus rien déplacer après vingt-deux heures.', en: 'I undertake not to move anything after ten p.m.' },
    { from: 'coach', fr: 'Ne, plus et rien passent devant l’infinitif, ensemble.', en: 'Ne, plus and rien go before the infinitive, together.', warn: 'Devant l’infinitif' },
    { from: 'user', fr: 'Et à ne plus inviter personne en semaine.', en: 'And not to invite anyone on weekdays any more.' },
    { from: 'coach', fr: 'Personne reste après l’infinitif : ne plus inviter personne.', en: 'Personne stays after the infinitive.', warn: 'Personne après' },
    { from: 'user', fr: 'Mes amis sont repartis sans faire aucun bruit.', en: 'My friends left without making any noise.' },
    { from: 'coach', fr: 'Sans tient la place de ne : ni ne, ni pas.', en: 'Sans takes the place of ne: no ne, no pas.', warn: 'Sans' },
    { from: 'user', fr: 'Je ne veux rien envoyer sans avoir tout relu.', en: 'I do not want to send anything without rereading it all.' },
    { from: 'coach', fr: 'Sans avoir relu, un infinitif passé ; avec rien, tu dirais sans avoir rien relu, ou sans rien avoir relu.', en: 'With rien, both orders of the perfect infinitive work.', warn: 'L’infinitif passé' },
  ],
  closing: { fr: 'Devant l’infinitif : ne plus rien, ne jamais ; après : personne, aucun. Avec sans : jamais de ne.', en: 'Before the infinitive: ne plus rien, ne jamais; after it: personne, aucun. With sans: never ne.' },
  audio: REC('rec-b2-21-lea'),
  say: REFRAME,
  terms: ['infinitif'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-ordre',
  title: 'Devant l’infinitif, et après sans',
  frSub: `Plus loin que ${INFINITIVES_REF}`,
  hint: 'Quatre cartes. La dernière enlève le ne.',
  audio: REC('rec-b2-21-cartes-infinitif'),
  say: REFRAME,
  terms: ['infinitif'],
  cards: [
    {
      head: 'Tout devant', label: Cap(INFINITIVES_REF),
      fr: fr(E(1456)), sub: rsOf(E(1456)),
      body: `« ${B214_REFRAME} » Ne, plus, jamais et rien passent devant l'infinitif, ensemble : ne plus rien dire. EN: ${B214_REFRAME_EN}`,
    },
    {
      head: 'Personne reste après', label: 'ne… personne',
      fr: fr(E(1457)), sub: rsOf(E(1457)),
      body: "Personne et aucun suivent l'infinitif : ne plus voir personne, ne plus faire aucune erreur. EN: personne and aucun follow the infinitive.",
    },
    {
      head: 'L’infinitif passé', label: 'deux ordres',
      fr: fr(E(1459)), sub: rsOf(E(1459)),
      body: "N'avoir rien vu et ne rien avoir vu sont corrects tous les deux ; le premier est plus soutenu. Personne, lui, suit toujours le participe : n'avoir vu personne. EN: both orders are correct.",
    },
    {
      head: 'Sans tient la place de ne', label: 'sans + rien',
      fr: fr(E(1462)), sub: rsOf(E(1462)),
      body: 'Sans est déjà négatif : sans rien payer, sans saluer personne, sans jamais se plaindre. Jamais « sans ne », jamais « sans pas ». EN: sans replaces ne.',
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Nier un infinitif',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Devant l’infinitif', [
      it(E(1456), 'ne plus rien dire'),
      it(E(1458), 'ne plus jamais rien commander'),
      it(E(1469), 'ne plus rien déposer'),
      it(E(1471), 'ne jamais rien signer'),
    ], chk('« Merci de … déposer devant la porte. »',
      ['ne plus rien', 'ne rien plus', 'plus ne rien'], 0,
      'Ne, puis plus, puis rien, devant le verbe. EN: ne plus rien.')),
    grp('Après l’infinitif', [
      it(E(1457), 'ne plus voir personne'),
      it(E(1461), 'n’avoir vu personne'),
      it(E(1470), 'ne plus aller nulle part'),
      it(E(1473), 'ne plus m’écrire qu’à'),
    ], chk('Où va personne avec un infinitif ?',
      ['après : ne plus voir personne', 'devant : ne plus personne voir'], 0,
      'Personne suit l’infinitif. EN: after it.')),
    grp('Avec sans', [
      it(E(1462), 'sans rien payer'),
      it(E(1463), 'sans saluer personne'),
      it(E(1464), 'sans aucune explication'),
      it(E(1465), 'sans jamais se plaindre'),
    ], chk('« Il travaille ici sans … se plaindre. »',
      ['jamais', 'ne jamais'], 0,
      'Sans tient la place de ne. EN: sans jamais.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Promesses et départs',
  frSub: 'Huit phrases à l’oreille',
  lines: [
    ln(E(1456)), ln(E(1458)), ln(E(1461)), ln(E(1463)),
    ln(E(1464)), ln(E(1466)), ln(NR(1126)), ln(FP(1300)),
  ],
  questions: [
    { q: 'Première phrase : qu’a promis la personne ?', opts: ['de se taire désormais', 'de tout raconter'], correct: 0, why: 'Ne plus rien dire : se taire. EN: to say nothing more.' },
    { q: 'Deuxième phrase : la personne va-t-elle encore commander ?', opts: ['non, plus jamais rien', 'oui, moins souvent'], correct: 0, why: 'Ne plus jamais rien commander. EN: never again.' },
    { q: 'Troisième phrase : qui la femme a-t-elle vu ?', opts: ['personne', 'un voisin'], correct: 0, why: 'N’avoir vu personne. EN: no one.' },
    { q: 'Cinquième phrase : le contrat a été résilié comment ?', opts: ['sans aucune explication', 'avec une longue lettre'], correct: 0, why: 'Sans aucune explication. EN: with no explanation.' },
    { q: 'Dernière phrase : que prétend l’homme ?', opts: ['ne rien savoir', 'tout savoir'], correct: 0, why: 'Il prétend ne rien savoir. EN: to know nothing.' },
  ],
  audio: REC('rec-b2-21-promesses-ecoute'),
  say: REFRAME,
  terms: ['infinitif'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre infinitifs mal niés',
  errors: [
    {
      wrong: 'Elle est repartie sans ne plus rien dire.',
      right: fr(E(1466)),
      why: "Normal : partout ailleurs, la négation commence par ne. Mais sans est déjà négatif et prend sa place. EN: sans replaces ne.",
    },
    {
      wrong: 'Elle a choisi de ne personne voir.',
      right: fr(E(1457)),
      why: "Normal : ne rien voir met rien devant, alors on fait pareil. Mais personne reste après l'infinitif. EN: personne follows the infinitive.",
    },
    {
      wrong: 'Merci de ne pas plus rien déposer devant la porte.',
      right: fr(E(1469)),
      why: "Normal : ne pas est la forme apprise devant l'infinitif. Mais plus et rien prennent la place de pas. EN: plus rien replaces pas.",
    },
    {
      wrong: 'Je m’engage à ne commander plus jamais rien chez vous.',
      right: fr(E(1458)),
      why: "Normal : au passé composé, plus suit l'auxiliaire. Devant un infinitif, ne plus jamais rien passent tous avant le verbe. EN: all before the infinitive.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Six phrases de trois leçons',
  frSub: `${Cap(INFINITIVES_REF)}, ${NEG_B1_REF} et celle-ci`,
  examples: [
    ex(FP(1300), 'ne rien savoir : la négation devant l’infinitif'),
    ex(FP(1227), 'n’avoir pas prévenu : l’ordre soutenu'),
    ex(FP(1277), 'sans avoir rien reçu : rien peut aussi précéder avoir'),
    ex(NR(1123), 'sans rien dire : sans à la place de ne'),
    ex(NR(1126), 'sans voir personne : personne après'),
    ex(E(1473), 'ne plus… que, devant un infinitif'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif'],
};

const A4_TEXTE = dansUnTexte('a4-texte', 'Remettre dans l’ordre : le courriel de Léa', TEXTE_A4, [
  { q: 'Les deux premières parenthèses.', a: "Je m'engage à ne plus rien déplacer après vingt-deux heures et à ne plus inviter personne en semaine : ne plus rien devant l'infinitif, personne après." },
  { q: 'Troisième parenthèse : sans (aucun / faire / bruit).', a: "Sans faire aucun bruit : sans prend la place de ne, aucun suit l'infinitif." },
  { q: 'Quatrième parenthèse : de (claquer / ne / jamais).', a: "De ne jamais claquer la porte : ne jamais, ensemble, devant l'infinitif." },
  { q: 'Dernière parenthèse : sans (rien / signaler).', a: "Sans rien signaler à la régie : rien devant l'infinitif, et pas de ne après sans." },
], 'rec-b2-21-texte-a4', ['infinitif']);

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Devant', '« J’ai promis de … dire. »',
    ['ne plus rien', 'ne rien plus'], 0,
    'Ne, plus, rien, dans l’ordre. EN: ne plus rien.'),
  ctl('Après sans', '« Il est parti sans … payer. »',
    ['rien', 'ne rien'], 0,
    'Sans + rien, jamais sans ne. EN: sans rien.'),
  ctl('Deux ordres', '« N’avoir rien vu » et « ne rien avoir vu » :',
    ['les deux sont corrects', 'seul le premier est correct'], 0,
    'Deux ordres possibles ; le premier est plus soutenu. EN: both.'),
], ['infinitif']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Devant l’infinitif, après sans',
    opener: {
      line: "Une promesse écrite au voisin, et chaque négation devant son infinitif : ici tu nies un infinitif avec plusieurs mots, et tu laisses sans faire le travail de ne. EN: A written promise to a neighbour: here you negate an infinitive with several words, and let sans do the work of ne.",
      imageRef: 'lessons/negations-combinees/act04.jpg',
    },
    sections: [],
    milestone: "Tu mets ne plus rien devant l'infinitif, personne et aucun après, et tu écris sans rien, sans personne, sans jamais, et jamais sans ne. EN: You can negate an infinitive and use sans correctly.",
    estScreens: 38, restPoints: ['a4-construire', 'a4-erreurs'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_ECOUTE, A4_ERREURS, A4_EXEMPLES, A4_TEXTE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5: PAS RESTE DEHORS
 *
 *  The stacking ban and its truthful limits: « ce n'est pas rien » (fixed,
 *  it matters), pas… non plus against moi aussi, and the words that follow
 *  pas legitimately (un seul, du tout, encore). Lesson 11 in B2's « lui non
 *  plus » rows are reused.
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Le tableau modifié',
  frSub: 'Nier, sans empiler',
  setting: "Lyon. Hugo Lambert, contrôleur de gestion, est accusé d'avoir modifié un tableau de bord. Avant de répondre par écrit, il relit son message avec Claire, sa collègue.",
  bubbles: [
    { from: 'narrator', fr: 'Hugo lit sa réponse à voix haute. Claire l’arrête à chaque pas de trop.', en: 'Hugo reads his reply aloud. Claire stops him at every extra pas.' },
    { from: 'user', fr: fr(E(1476)), en: en(E(1476)) },
    { from: 'coach', fr: 'Parfait : rien tout seul. Ton brouillon disait « pas rien », et ça veut presque dire « quelque chose ».', en: 'Perfect: rien on its own. Your draft said « pas rien », which almost means « something ».', warn: 'Pas + rien' },
    { from: 'user', fr: 'Et ma collègue n’a rien vu non plus.', en: 'And my colleague did not see anything either.' },
    { from: 'coach', fr: 'Non plus, et pas aussi : après une négation, c’est toujours non plus.', en: 'Non plus, not aussi: after a negative it is always non plus.', warn: 'Non plus' },
    { from: 'user', fr: fr(E(1491)), en: en(E(1491)) },
    { from: 'coach', fr: 'Pas une seule fois renforce jamais : ce n’est pas un empilement, c’est une précision.', en: 'Pas une seule fois reinforces jamais: it is not stacking, it is precision.', warn: 'Pas une seule fois' },
    { from: 'user', fr: 'Être accusé sans preuve, ce n’est pas rien.', en: 'Being accused without proof is no small thing.' },
    { from: 'coach', fr: 'Là, garde pas rien : l’expression est figée et veut dire « c’est grave ».', en: 'Here, keep pas rien: the phrase is fixed and means « it is serious ».', warn: 'Ce n’est pas rien' },
  ],
  closing: { fr: 'Pas n’entre jamais dans une combinaison, sauf dans « ce n’est pas rien », qui veut dire « c’est important ».', en: 'Pas never joins a combination, except in « ce n’est pas rien », which means « it matters ».' },
  audio: REC('rec-b2-21-hugo'),
  say: REFRAME,
  terms: ['empilement'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-pas',
  title: 'Pas reste dehors',
  frSub: 'La règle, et ses vraies limites',
  hint: 'Quatre cartes. La deuxième garde pas et rien.',
  audio: REC('rec-b2-21-cartes-pas'),
  say: REFRAME,
  terms: ['empilement'],
  cards: [
    {
      head: 'Jamais avec les autres', label: 'l’empilement',
      fr: fr(E(1476)), sub: rsOf(E(1476)),
      body: "Rien, personne, jamais, plus et aucun ont déjà pris la place de pas. Ajouter pas brouille le sens : je n'ai rien remarqué. EN: never pas with another negative word.",
    },
    {
      head: 'La seule exception', label: 'figée',
      fr: fr(E(1480)), sub: rsOf(E(1480)),
      body: "Ce n'est pas rien veut dire : c'est important, c'est grave. Rien y désigne une chose sans importance, et pas la nie. EN: a fixed phrase meaning it matters.",
    },
    {
      head: 'Pas… non plus', label: 'et moi non plus',
      fr: fr(E(1481)), sub: rsOf(E(1481)),
      body: `Après une négation, non plus remplace aussi : je n'ai pas vu la camionnette non plus. ${Cap(NEG_B1_REF)} t'a donné moi non plus. EN: non plus replaces aussi after a negative.`,
    },
    {
      head: 'Ce qui peut suivre pas', label: 'correct',
      fr: fr(E(1492)), sub: rsOf(E(1492)),
      body: "Pas un seul, pas une seule fois, pas du tout, pas encore, et pas plus que quand plus compare : ces mots ne sont pas négatifs, ils précisent pas. EN: these reinforce pas; they do not stack.",
    },
  ],
};

const A5_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-trier',
  layer: 'core',
  size: 'lg',
  title: 'Pas, ou pas de pas',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('Pas dehors', [
      it(E(1476), 'rien, seul'),
      it(E(1477), 'personne, seul'),
      it(E(1478), 'jamais, seul'),
      it(E(1489), 'aucun, seul'),
    ], chk('« Il n’y avait … dans le couloir. »',
      ['personne', 'pas personne'], 0,
      'Personne seul, sans pas. EN: personne.')),
    grp('Pas, et c’est correct', [
      it(E(1487), 'pas du tout'),
      it(E(1488), 'pas encore'),
      it(E(1491), 'pas une seule fois'),
      it(E(1492), 'pas un seul'),
    ], chk('« Je n’ai pas reçu un seul appel » :',
      ['correct : un seul n’est pas négatif', 'faux : pas est de trop'], 0,
      'Un seul renforce pas. EN: correct.')),
    grp('Non plus, et l’exception', [
      it(E(1482), 'rien… non plus'),
      it(E(1486), 'et mon associée non plus'),
      it(E(1493), 'pas… non plus'),
      it(E(1479), 'ce n’est pas rien'),
    ], chk('« Ma voisine n’a rien entendu, et moi … »',
      ['non plus', 'aussi'], 0,
      'Après une négation : non plus. EN: non plus.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['empilement'],
};

const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Un pas de trop',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Pas reste dehors',
    body: "Rien, personne, jamais, plus et aucun remplacent pas ; les deux ensemble brouillent la phrase. Après une négation, non plus remplace aussi. Seule exception, figée : ce n'est pas rien. EN: pas never joins; non plus after a negative.",
  },
  cards: [
    trap(E(1476), 'pas + rien', "Je n'ai pas rien remarqué ce soir-là.", 'Rien suffit : je n’ai rien remarqué. EN: no pas.'),
    trap(E(1477), 'pas + personne', "Il n'y avait pas personne dans le couloir.", 'Personne suffit. EN: no pas.'),
    trap(E(1478), 'pas + jamais', "Je ne l'avais pas jamais vu avant ce jour.", 'Jamais prend la place de pas. EN: no pas.'),
    trap(E(1489), 'pas + aucun', "Je n'ai pas reçu aucun appel ce jour-là.", 'Aucun suffit, ou bien pas un seul. EN: aucun alone.'),
    trap(E(1482), 'aussi', "Ma voisine n'a rien entendu aussi.", 'Après une négation : non plus. EN: non plus.'),
    trap(E(1483), 'pas un… pas', "Pas un voisin n'a pas appelé la police.", 'Pas un porte déjà la négation : un seul pas. EN: one pas only.'),
  ],
  drill: [
    { promptSay: "Je n'ai … remarqué ce soir-là.", opts: ['rien', 'pas rien'], correct: 0 },
    { promptSay: "Il n'y avait … dans le couloir.", opts: ['pas personne', 'personne'], correct: 1 },
    { promptSay: "Trois mois de retard, c'est grave : ce n'est …", opts: ['pas rien', 'rien'], correct: 0 },
    { promptSay: "Ma voisine n'a rien entendu …", opts: ['non plus', 'aussi'], correct: 0 },
    { promptSay: "Je n'ai pas reçu … appel.", opts: ['un seul', 'aucun'], correct: 0 },
    { promptSay: "Je ne l'avais … vu avant ce jour.", opts: ['pas jamais', 'jamais'], correct: 1 },
    { promptSay: 'Je ne signerai pas, et mon associée …', opts: ['non plus', 'aussi'], correct: 0 },
    { promptSay: "Ce n'est pas … ce que j'ai dit.", opts: ['du tout', 'jamais'], correct: 0 },
  ],
  steps: STEPS('Pas reste dehors', 'Un pas de trop'),
  audio: REC('rec-b2-21-piege-pas'),
  say: REFRAME,
  terms: ['empilement'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Non plus, dans trois leçons',
  frSub: `${Cap(NEG_B1_REF)}, ${TONIQUES_REF} et celle-ci`,
  examples: [
    ex(NR(1157), 'et lui non plus : après une négation'),
    ex(PE1855, `lui non plus, en tête : « ${B211_REFRAME} »`),
    ex(PE1910, 'nous non plus, puis la phrase complète'),
    ex(E(1493), 'pas… non plus, au milieu de la phrase'),
    ex(NR(1159), 'pas du tout : un renfort, pas un empilement'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['empilement'],
};

const A5_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a5-hacks',
  layer: 'core',
  sheetId: 'sheet-pas',
  title: 'Trois astuces contre le pas de trop',
  hacks: [
    { hack: 'Compte les mots négatifs : s’il y a rien, personne, jamais, plus ou aucun, efface pas.', why: "Ces mots ont déjà pris la place de pas. EN: if another negative word is there, drop pas." },
    { hack: 'Après une négation, remplace aussi par non plus.', why: "Aussi confirme une affirmation ; non plus confirme une négation. EN: aussi after a positive, non plus after a negative." },
    { hack: 'Garde « ce n’est pas rien » quand tu veux dire « c’est grave ».', why: "C'est la seule rencontre de pas et de rien qui reste correcte, parce qu'elle est figée. EN: the one fixed exception." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['empilement'],
};

const A5_TEXTE = dansUnTexte('a5-texte', 'Corriger : le courriel de Hugo', TEXTE_A5, [
  { q: 'Première et deuxième phrases.', a: "Je n'ai rien modifié dans ce tableau. Je ne l'ai jamais ouvert après le 3 mai : pas s'efface devant rien et jamais." },
  { q: 'Troisième phrase.', a: "Il n'y avait personne au bureau ce soir-là, et je n'ai reçu aucun message du service (ou : je n'ai pas reçu un seul message)." },
  { q: 'Quatrième phrase.', a: "Ma collègue n'a rien vu, et moi non plus : après une négation, non plus." },
  { q: 'Quelle phrase est correcte, et pourquoi ?', a: "Être accusé sans preuve, ce n'est pas rien : l'expression est figée et veut dire que c'est grave." },
], 'rec-b2-21-texte-a5', ['empilement']);

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Pas', '« Je n’ai … vu. »',
    ['rien', 'pas rien'], 0,
    'Pas reste dehors. EN: rien.'),
  ctl('Non plus', 'Après une négation, pour dire « moi aussi » :',
    ['moi non plus', 'moi aussi'], 0,
    'Non plus. EN: moi non plus.'),
  ctl('L’exception', '« Ce n’est pas rien » :',
    ['c’est important', 'c’est une faute'], 0,
    'Une expression figée, correcte. EN: it matters.'),
], ['empilement']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Pas reste dehors',
    opener: {
      line: "Un courriel où chaque pas est de trop : ici tu apprends pourquoi pas ne se combine jamais avec rien ou personne, et la seule expression qui les garde ensemble. EN: An email where every pas is one too many: here you learn why pas never joins rien or personne, and the one phrase that keeps them together.",
      imageRef: 'lessons/negations-combinees/act05.jpg',
    },
    sections: [],
    milestone: "Tu n'empiles jamais pas sur un autre mot négatif, tu dis non plus après une négation, et tu sais que « ce n'est pas rien » veut dire « c'est important ». EN: You never stack pas, and you know what « ce n'est pas rien » means.",
    estScreens: 40, restPoints: ['a5-trier', 'a5-exemples'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_TRIER, A5_PIEGE, A5_EXEMPLES, A5_HACKS, A5_TEXTE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6: LE SUJET NÉGATIF
 *
 *  Lesson 20 in B1 met « Personne n'est venu »; here the subject combines
 *  (personne n'a rien vu, plus personne ne, jamais personne ne), nul ne is
 *  soutenu, ni… ni… ne takes the plural, and ne is never dropped in writing.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Le conseil de copropriété',
  frSub: 'Quand personne est le sujet',
  setting: "Montréal, rue Saint-Denis. Le conseil de copropriété rédige son compte rendu sur la panne de l'ascenseur. Mme Tremblay dicte ; M. Nguyen tape.",
  bubbles: [
    { from: 'narrator', fr: 'Mme Tremblay dicte chaque phrase ; M. Nguyen la relit avant de l’envoyer.', en: 'Mrs Tremblay dictates each sentence; Mr Nguyen reads it back before sending.' },
    { from: 'user', fr: fr(E(1501)), en: en(E(1501)) },
    { from: 'coach', fr: 'Plus personne ouvre la phrase : ne devant le verbe, et pas de pas.', en: 'Plus personne opens the sentence: ne before the verb, and no pas.', warn: 'Plus personne ne' },
    { from: 'user', fr: fr(E(1502)), en: en(E(1502)) },
    { from: 'coach', fr: 'Personne est le sujet ; jamais et rien restent autour du verbe. Un seul ne.', en: 'Personne is the subject; jamais and rien stay round the verb. One ne.', warn: 'Personne… jamais rien' },
    { from: 'user', fr: fr(E(1500)), en: en(E(1500)) },
    { from: 'coach', fr: 'Ni… ni… avec les voisins au pluriel : le verbe au pluriel, n’ont.', en: 'Ni… ni… with les voisins in the plural: a plural verb, n’ont.', warn: 'Ni… ni… ne' },
    { from: 'user', fr: fr(E(1513)), en: en(E(1513)) },
    { from: 'coach', fr: 'Nul ne, c’est personne ne en plus soutenu : parfait pour un règlement.', en: 'Nul ne is a more formal personne ne: perfect for rules.', warn: 'Nul ne' },
  ],
  closing: { fr: 'Un mot négatif sujet : ne devant le verbe, jamais de pas, et à l’écrit, jamais sans ne.', en: 'A negative subject: ne before the verb, never pas, and in writing never without ne.' },
  audio: REC('rec-b2-21-conseil'),
  say: REFRAME,
  terms: ['sujet'],
};

const A6_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-table',
  layer: 'core',
  sheetId: 'sheet-sujet',
  title: 'Six sujets négatifs',
  cols: ['Sujet', 'Accord', 'Registre'],
  rows: [
    { cells: ['personne ne', 'masculin singulier', 'courant'], say: fr(E(1496)),
      detail: { title: 'personne ne', body: "Personne ouvre la phrase, ne suit, et le verbe est au singulier. Personne n'a rien vu : un seul ne. EN: singular verb, one ne.", say: fr(NR(1075)) } },
    { cells: ['rien ne', 'singulier', 'courant'], say: fr(E(1497)),
      detail: { title: 'rien ne', body: "Rien sujet, souvent avec jamais ou plus : rien n'a jamais été prouvé. EN: rien as the subject.", say: fr(E(1512)) } },
    { cells: ['aucun… ne', 'singulier, accord avec le nom', 'courant'], say: fr(E(1498)),
      detail: { title: 'aucun… ne', body: "Aucun ou aucune selon le nom, toujours au singulier : aucune de ces factures ne correspond. EN: singular, agrees with its noun.", say: fr(E(1503)) } },
    { cells: ['nul ne', 'masculin singulier', 'soutenu'], say: fr(E(1499)),
      detail: { title: 'nul ne', body: "Nul veut dire personne, dans un règlement ou une maxime : nul ne peut entrer. EN: a formal personne.", say: fr(E(1513)) } },
    { cells: ['ni… ni… ne', 'pluriel en général', 'courant'], say: fr(E(1500)),
      detail: { title: 'ni… ni… ne', body: "Deux sujets niés : le verbe au pluriel en général, et ne devant lui. EN: usually a plural verb.", say: fr(NR(1080)) } },
    { cells: ['plus personne ne', 'singulier', 'courant, soutenu'], say: fr(E(1501)),
      detail: { title: 'plus personne ne', body: "Plus ou jamais peut précéder le sujet : plus personne ne répond ; jamais personne ne s'est plaint, en plus soutenu. EN: plus or jamais before the subject.", say: fr(E(1505)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Nier par le sujet',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Un sujet, un seul ne', [
      it(E(1496), 'personne + rien'),
      it(E(1497), 'rien + jamais'),
      it(E(1502), 'personne + jamais + rien'),
      it(E(1504), 'plus rien ne'),
    ], chk('« Personne … »',
      ['n’a rien vu', 'n’a pas rien vu', 'a pas rien vu'], 0,
      'Ne devant le verbe, rien, et pas de pas. EN: n’a rien vu.')),
    grp('Aucun, nul, ni… ni…', [
      it(E(1498), 'aucun… ne'),
      it(E(1503), 'aucune de… ne'),
      it(E(1513), 'nul ne'),
      it(E(1511), 'ni… ni… ne'),
    ], chk('« Ni la banque ni l’assurance … rien dit. »',
      ['ne m’ont', 'ne m’ont pas', 'm’ont'], 0,
      'Deux sujets : le pluriel ; ne, et pas de pas. EN: ne m’ont.')),
    ctl('À l’écrit', 'Dans un compte rendu :',
      ['personne n’est venu', 'personne est venu'], 0,
      'À l’écrit, ne reste toujours. EN: keep ne.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La réunion de la copropriété',
  frSub: 'Huit phrases à l’oreille',
  lines: [
    ln(E(1496)), ln(E(1497)), ln(E(1500)), ln(E(1501)),
    ln(E(1503)), ln(E(1504)), ln(E(1509)), ln(NR(1142)),
  ],
  questions: [
    { q: 'Première phrase : quelqu’un a-t-il vu quelque chose ?', opts: ['non, personne', 'oui, une voisine'], correct: 0, why: 'Personne n’a rien vu. EN: nobody.' },
    { q: 'Troisième phrase : qui n’a rien entendu ?', opts: ['le gardien et les voisins', 'le gardien seulement'], correct: 0, why: 'Ni le gardien ni les voisins. EN: neither.' },
    { q: 'Cinquième phrase : combien de factures correspondent à la consommation ?', opts: ['aucune', 'une seule'], correct: 0, why: 'Aucune de ces factures. EN: none.' },
    { q: 'Septième phrase : qui a la clé du local ?', opts: ['seulement la personne qui parle', 'tout le monde'], correct: 0, why: 'Personne d’autre n’a la clé : elle est la seule. EN: only the speaker.' },
    { q: 'Dernière phrase : la personne est-elle encore surprise ?', opts: ['non, plus du tout', 'oui, souvent'], correct: 0, why: 'Plus rien ne l’étonne. EN: nothing surprises her now.' },
  ],
  audio: REC('rec-b2-21-conseil-ecoute'),
  say: REFRAME,
  terms: ['sujet'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre sujets bancals',
  errors: [
    {
      wrong: 'Personne n’a pas rien vu.',
      right: fr(E(1496)),
      why: "Normal : on veut marquer la négation deux fois pour être clair. Mais personne et rien suffisent, avec un seul ne. EN: no pas.",
    },
    {
      wrong: 'Aucune de ces factures correspond à ma consommation.',
      right: fr(E(1503)),
      why: "Normal : à l'oral, ne tombe souvent. À l'écrit, dans une réclamation, garde-le : aucune… ne. EN: keep ne in writing.",
    },
    {
      wrong: 'Ni le gardien ni les voisins n’a rien entendu.',
      right: fr(E(1500)),
      why: "Normal : ni… ni… semble ne compter personne, alors le singulier vient. Mais avec les voisins, le verbe est au pluriel : n'ont. EN: plural verb.",
    },
    {
      wrong: 'Aucuns témoins ne se sont présentés.',
      right: fr(E(1498)),
      why: "Normal : zéro témoin, on pense à plusieurs. Mais aucun reste au singulier. EN: aucun is singular.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet', 'oral'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a6-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Le sujet négatif, avec son ne',
  itemIds: dicteeFor(6),
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet'],
};

const A6_TEXTE = dansUnTexte('a6-texte', 'Compléter : le compte rendu de la copropriété', TEXTE_A6, [
  { q: 'Premières phrases : personne ne (réparer) ; rien ne (être fait).', a: "Personne n'a réparé l'ascenseur ; rien n'a été fait pour les résidents âgés : ne devant l'auxiliaire, sans pas." },
  { q: 'Aucun technicien ne (se déplacer) ; ni le gestionnaire ni le propriétaire ne (répondre).', a: "Aucun technicien ne s'est déplacé ; ni le gestionnaire ni le propriétaire n'ont répondu : deux sujets, le pluriel." },
  { q: 'Personne ne nous (proposer) jamais rien.', a: "Personne ne nous a jamais rien proposé : jamais et rien avant le participe, un seul ne." },
  { q: 'Nul ne (pouvoir) nous dire…', a: "Nul n'a pu nous dire quand les travaux commenceront : nul, soutenu, au singulier." },
], 'rec-b2-21-texte-a6', ['sujet']);

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Pas', '« Personne … venu. »',
    ['n’est', 'n’est pas'], 0,
    'Personne sujet : jamais pas. EN: n’est.'),
  ctl('Aucun', '« Aucun témoin … présenté. »',
    ['ne s’est', 'ne se sont'], 0,
    'Aucun reste au singulier. EN: singular.'),
  ctl('Nul', '« Nul n’est censé ignorer la loi » : registre ?',
    ['soutenu', 'familier'], 0,
    'Nul ne : une maxime soutenue. EN: formal.'),
], ['sujet']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Le sujet négatif',
    opener: {
      line: "Un compte rendu où personne n'a rien fait : ici le mot négatif devient le sujet, avec ne devant le verbe et jamais de pas. EN: Minutes in which nobody did anything: here the negative word becomes the subject.",
      imageRef: 'lessons/negations-combinees/act06.jpg',
    },
    sections: [],
    milestone: "Tu ouvres une phrase avec personne, rien, aucun, nul ou ni… ni…, tu accordes le verbe, et tu gardes ne à l'écrit. EN: You can use a negative word as the subject.",
    estScreens: 40, restPoints: ['a6-table', 'a6-erreurs'],
  },
  sections: [A6_HISTOIRE, A6_TABLE, A6_CONSTRUIRE, A6_ECOUTE, A6_ERREURS, A6_DICTEE, A6_TEXTE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7: PLUS QUE, JAMAIS QUE, PAS QUE
 *
 *  Plain ne… que is lesson 19 in B2 (cited). Here the restriction combines:
 *  ne… plus que, ne… jamais que, ne… pas que (not only), ne… guère que.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Le village de Rose',
  frSub: 'Il ne reste plus que…',
  setting: "Gaspésie. Rose, quatre-vingt-trois ans, raconte son village à sa petite-fille Maëlle, qui prépare un article pour une revue régionale.",
  bubbles: [
    { from: 'narrator', fr: 'Maëlle enregistre sa grand-mère sur son téléphone.', en: 'Maëlle records her grandmother on her phone.' },
    { from: 'user', fr: fr(E(1523)), en: en(E(1523)) },
    { from: 'coach', fr: 'Plus que : avant, il y avait d’autres bruits ; maintenant, seulement la pluie.', en: 'Plus que: there used to be other sounds; now only the rain.', warn: 'Plus que' },
    { from: 'user', fr: fr(E(1519)), en: en(E(1519)) },
    { from: 'coach', fr: 'Jamais que : il n’a fait que ça, toute sa vie, rien de plus.', en: 'Jamais que: that is all he ever did, all his life.', warn: 'Jamais que' },
    { from: 'user', fr: fr(E(1520)), en: en(E(1520)) },
    { from: 'coach', fr: 'Pas que : l’argent compte, mais il n’est pas seul. Que n’est pas un mot négatif.', en: 'Pas que: money counts, but it is not alone. Que is not a negative word.', warn: 'Pas que' },
    { from: 'user', fr: fr(E(1527)), en: en(E(1527)) },
    { from: 'coach', fr: 'Guère que : presque rien d’autre que du pain. C’est soutenu, un peu ancien.', en: 'Guère que: hardly anything but bread. Formal, a little old-fashioned.', warn: 'Guère que' },
  ],
  closing: { fr: 'Plus que, jamais que, pas que : que limite, et le premier mot dit quand ou combien.', en: 'Plus que, jamais que, pas que: que limits, and the first word says when or how much.' },
  audio: REC('rec-b2-21-rose'),
  say: REFRAME,
  terms: ['restriction'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-pas',
  title: 'La restriction, combinée',
  frSub: `Après ${RESTRICTION_REF}`,
  hint: 'Quatre cartes. La troisième dit « pas seulement ».',
  audio: REC('rec-b2-21-cartes-restriction'),
  say: REFRAME,
  terms: ['restriction'],
  cards: [
    {
      head: 'Plus que', label: 'seulement, désormais',
      fr: fr(E(1516)), sub: rsOf(E(1516)),
      body: `Ne… que, tout seul, c'est ${RESTRICTION_REF}. Avec plus, la restriction commence maintenant : il ne reste plus que deux places. EN: plus que, only … now.`,
    },
    {
      head: 'Jamais que', label: 'rien d’autre',
      fr: fr(E(1518)), sub: rsOf(E(1518)),
      body: "Ne… jamais que minimise : ce n'est jamais qu'une facture, ce n'est pas si grave. Ou il dit ce qui n'a jamais changé : il n'a jamais fait que son travail. EN: only ever; merely.",
    },
    {
      head: 'Pas que', label: 'pas seulement',
      fr: fr(E(1520)), sub: rsOf(E(1520)),
      body: "Ne… pas que nie la restriction : il n'y a pas que l'argent, d'autres choses comptent. Pas va avec que, car que n'est pas un mot négatif. EN: not only.",
    },
    {
      head: 'Guère que', label: 'soutenu',
      fr: fr(E(1527)), sub: rsOf(E(1527)),
      body: "Ne… guère que : presque uniquement. C'est soutenu ; au quotidien, on dit : il ne mange presque que du pain. EN: hardly anything but.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Seulement, ou pas seulement',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Seulement, désormais', [
      it(E(1516), 'plus que deux places'),
      it(E(1517), 'plus que l’abonnement'),
      it(E(1522), 'plus parlé qu’à'),
      it(E(1526), 'plus qu’une chose'),
    ], chk('Avant, tu payais aussi des options. « Je ne paie … l’abonnement de base. »',
      ['plus que', 'pas que', 'jamais que'], 0,
      'Un changement, puis une seule chose : plus que. EN: plus que.')),
    grp('Seulement, ou pas seulement', [
      it(E(1519), 'jamais que son travail'),
      it(E(1529), 'jamais qu’un malentendu'),
      it(E(1520), 'pas que l’argent'),
      it(E(1530), 'pas que moi'),
    ], chk('« Ce dossier ne concerne pas que moi » :',
      ['il concerne aussi d’autres personnes', 'il ne concerne que moi'], 0,
      'Pas que : pas seulement. EN: not only me.')),
    ctl('Le comparatif', '« Je paie plus que lui » : est-ce une restriction ?',
      ['non : une comparaison, sans ne', 'oui, comme ne… plus que'], 0,
      'Sans ne, plus que compare. EN: a comparison.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['restriction'],
};

const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'La restriction brouillée',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'Que limite, le premier mot situe',
    body: "Ne… plus que : seulement, désormais. Ne… jamais que : seulement, toujours. Ne… pas que : pas seulement. Plus ou jamais avant que, que après le participe, et jamais seulement en plus de que. EN: que limits; plus, jamais or pas come first.",
  },
  cards: [
    trap(E(1522), 'que avant le participe', "Depuis le procès, elle n'a plus qu'à son avocate parlé.", 'Que et son complément suivent le participe. EN: parlé qu’à.'),
    trap(E(1526), 'l’ordre', "Je ne demande que plus une chose : une réponse écrite.", 'Plus avant que : plus qu’une chose. EN: plus before que.'),
    trap(E(1518), 'l’ordre', "Ce n'est que jamais une facture de plus.", 'Jamais avant que : jamais qu’une facture. EN: jamais before que.'),
    trap(E(1519), 'l’ordre au passé', "Il n'a que jamais fait son travail.", 'Jamais avant le participe, que après : jamais fait que. EN: jamais… fait que.'),
    trap(E(1520), 'le pléonasme', "Il n'y a pas seulement que l'argent dans la vie.", 'Pas que, ou pas seulement : un seul des deux. EN: one or the other.'),
    trap(E(1523), 'l’ordre', "On n'entend que plus la pluie.", 'Plus que, dans cet ordre. EN: plus que.'),
  ],
  drill: [
    { promptSay: 'Il ne reste … deux places.', opts: ['plus que', 'que plus'], correct: 0 },
    { promptSay: "Ce n'est … qu'une facture de plus.", opts: ['jamais', 'pas seulement'], correct: 0 },
    { promptSay: "Il n'y a pas … l'argent dans la vie.", opts: ['que', 'seulement que'], correct: 0 },
    { promptSay: "Elle n'a plus parlé … son avocate.", opts: ["qu'à", 'que'], correct: 0 },
    { promptSay: 'Je ne demande … chose : une réponse écrite.', opts: ["plus qu'une", "qu'une plus"], correct: 0 },
    { promptSay: "Il n'a … fait que son travail.", opts: ['jamais', 'que jamais'], correct: 0 },
    { promptSay: "Ce dossier ne concerne … moi : il concerne toute l'équipe.", opts: ['pas que', 'que'], correct: 0 },
    { promptSay: "Depuis ce matin, on n'entend … la pluie.", opts: ['plus que', 'que plus'], correct: 0 },
  ],
  steps: STEPS('Que limite, le premier mot situe', 'La restriction brouillée'),
  audio: REC('rec-b2-21-piege-restriction'),
  say: REFRAME,
  terms: ['restriction'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  title: 'Cinq restrictions',
  frSub: `${Cap(NEG_B1_REF)} et cette leçon`,
  examples: [
    ex(NR(1144), 'plus que : désormais, seulement des légumes'),
    ex(NR(1192), `ne… que tout seul, que ${RESTRICTION_REF} détaille`),
    ex(E(1529), 'jamais que : ce n’était pas grave'),
    ex(E(1530), 'pas que : d’autres sont concernés'),
    ex(E(1473), 'plus que, devant un infinitif'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['restriction'],
};

const A7_TEXTE = dansUnTexte('a7-texte', 'Compléter : un souvenir de Gaspésie', TEXTE_A7, [
  { q: 'Premier et deuxième blancs.', a: "Il ne reste plus que l'église et deux maisons ; on n'y entend plus que le vent : l'école et le magasin ont fermé, il ne reste que ça, désormais." },
  { q: 'Troisième blanc : ce n’était (___) un village comme les autres.', a: "Ce n'était jamais qu'un village comme les autres : jamais que minimise, rien de plus." },
  { q: 'Quatrième blanc : il n’y avait (___) la pêche dans la vie.', a: "Il n'y avait pas que la pêche : il y avait aussi les chansons. Pas que, pas seulement." },
  { q: 'Dernier blanc : je n’y retourne (___) l’été.', a: "Je n'y retourne plus que l'été : autrefois plus souvent, désormais seulement l'été." },
], 'rec-b2-21-texte-a7', ['restriction']);

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Plus que', '« Il ne reste plus que deux places » :',
    ['deux places, et il y en avait davantage avant', 'plus de deux places'], 0,
    'Plus que : seulement, désormais. EN: only two now.'),
  ctl('Pas que', '« Il n’y a pas que l’argent » :',
    ['l’argent n’est pas seul à compter', 'l’argent ne compte pas'], 0,
    'Pas que : pas seulement. EN: not only.'),
  ctl('Jamais que', '« Ce n’est jamais qu’une facture » : le ton ?',
    ['ce n’est pas si grave', 'c’est très grave'], 0,
    'Jamais que minimise. EN: not a big deal.'),
], ['restriction']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Plus que, jamais que, pas que',
    opener: {
      line: "Un village où il ne reste plus que l'église : ici tu combines la restriction avec plus, jamais et pas, et tu dis exactement ce qui reste. EN: A village where only the church is left: here you combine restriction with plus, jamais and pas.",
      imageRef: 'lessons/negations-combinees/act07.jpg',
    },
    sections: [],
    milestone: "Tu dis ce qui reste avec ne… plus que, tu minimises avec ne… jamais que, et tu dis pas seulement avec ne… pas que. EN: You can combine restriction with plus, jamais and pas.",
    estScreens: 34, restPoints: ['a7-construire'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_CONSTRUIRE, A7_PIEGE, A7_EXEMPLES, A7_TEXTE, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8: LE REGISTRE SOUTENU
 *
 *  Lesson 20 in B1 showed ne… guère for recognition; here it is produced,
 *  with plus guère, nullement, aucunement, ne alone with savoir, pouvoir,
 *  oser and cesser, and ne… point for recognition only.
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'L’étude de Me Dubois',
  frSub: 'Nier avec élégance',
  setting: "Namur. Me Dubois, notaire, dicte une réponse à une cliente mécontente. Son assistant, Arnaud, propose parfois une tournure plus simple.",
  bubbles: [
    { from: 'narrator', fr: 'Me Dubois dicte ; Arnaud tape, et s’étonne parfois.', en: 'Maître Dubois dictates; Arnaud types, and is sometimes surprised.' },
    { from: 'user', fr: fr(E(1545)), en: en(E(1545)) },
    { from: 'coach', fr: 'Aucunement : pas du tout, dans une lettre. Au bureau, Arnaud dirait pas du tout.', en: 'Aucunement: not at all, in a letter. In the office, Arnaud would say pas du tout.', warn: 'Aucunement' },
    { from: 'user', fr: fr(E(1540)), en: en(E(1540)) },
    { from: 'coach', fr: 'Ne seul avec pouvoir : je ne puis. Très soutenu ; je ne peux vous répondre l’est un peu moins.', en: 'Ne alone with pouvoir: very formal; je ne peux vous répondre is a little less so.', warn: 'Ne seul' },
    { from: 'user', fr: fr(E(1541)), en: en(E(1541)) },
    { from: 'coach', fr: 'Si je ne me trompe : une formule polie ; sans pas, elle sonne plus soutenue.', en: 'Si je ne me trompe: a polite phrase; without pas it sounds more formal.', warn: 'Si je ne me trompe' },
    { from: 'user', fr: 'Votre voisin ne vient plus guère à l’étude.', en: 'Your neighbour hardly comes to the office any more.' },
    { from: 'coach', fr: 'Plus guère : presque plus. Plus, puis guère, comme plus jamais.', en: 'Plus guère: hardly any more. Plus, then guère, like plus jamais.', warn: 'Plus guère' },
  ],
  closing: { fr: 'Guère, nullement, aucunement, ne seul : l’écrit soigné nie avec des mots choisis, et toujours sans pas en plus.', en: 'Guère, nullement, aucunement, ne alone: careful writing denies with chosen words, never with an extra pas.' },
  audio: REC('rec-b2-21-dubois'),
  say: REFRAME,
  terms: ['soutenu'],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-table',
  layer: 'core',
  sheetId: 'sheet-sujet',
  title: 'Six négations soutenues',
  cols: ['Tournure', 'Sens', 'Registre'],
  rows: [
    { cells: ['ne… guère', 'à peine, peu', 'soutenu'], say: fr(E(1534)),
      detail: { title: 'ne… guère', body: "Guère remplace pas et dit « peu » : il n'a guère dormi. Plus guère : presque plus. EN: hardly.", say: fr(E(1535)) } },
    { cells: ['ne… nullement', 'pas du tout', 'soutenu'], say: fr(E(1532)),
      detail: { title: 'ne… nullement', body: 'Pour nier fermement dans une lettre : je ne conteste nullement. EN: not at all.', say: fr(E(1544)) } },
    { cells: ['ne… aucunement', 'pas du tout', 'soutenu'], say: fr(E(1533)),
      detail: { title: 'ne… aucunement', body: 'Même sens que nullement, même registre. EN: in no way.', say: fr(E(1545)) } },
    { cells: ['ne… point', 'pas du tout', 'littéraire'], say: fr(E(1536)),
      detail: { title: 'ne… point', body: "Dans les livres anciens et quelques régions. Tu le lis ; tu ne l'écris pas dans une lettre. EN: literary; recognise it.", say: fr(E(1548)) } },
    { cells: ['ne seul + savoir, pouvoir', 'pas', 'soutenu'], say: fr(E(1537)),
      detail: { title: 'ne seul : savoir, pouvoir', body: 'Je ne saurais, je ne puis, je ne sais si : ne suffit, sans pas. EN: ne alone.', say: fr(E(1546)) } },
    { cells: ['ne seul + oser, cesser', 'pas', 'soutenu'], say: fr(E(1538)),
      detail: { title: 'ne seul : oser, cesser', body: "Je n'ose imaginer, il ne cesse de répéter : à l'écrit soigné, ne suffit. EN: ne alone.", say: fr(E(1539)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['soutenu'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sujet',
  title: 'Ne tout seul',
  frSub: 'Quatre verbes et une formule',
  hint: 'Quatre cartes. La dernière est une formule.',
  audio: REC('rec-b2-21-cartes-soutenu'),
  say: REFRAME,
  terms: ['soutenu'],
  cards: [
    {
      head: 'Savoir', label: 'je ne saurais',
      fr: fr(E(1537)), sub: rsOf(E(1537)),
      body: 'Je ne saurais + infinitif : je ne peux pas, poliment et fermement. Très fréquent dans une lettre de refus. EN: I could not possibly.',
    },
    {
      head: 'Pouvoir', label: 'je ne puis',
      fr: fr(E(1540)), sub: rsOf(E(1540)),
      body: "Je ne puis, ou je ne peux, sans pas : c'est soutenu. Je ne puis est plus rare, presque littéraire. EN: ne alone with pouvoir.",
    },
    {
      head: 'Oser, cesser', label: 'il ne cesse de',
      fr: fr(E(1539)), sub: rsOf(E(1539)),
      body: "Il ne cesse de : il continue sans arrêt. Je n'ose imaginer : je n'ose pas. Pas reste possible, mais l'écrit soigné s'en passe. EN: pas is optional here.",
    },
    {
      head: 'Une formule', label: 'si je ne me trompe',
      fr: fr(E(1541)), sub: rsOf(E(1541)),
      body: 'Si je ne me trompe : sauf erreur de ma part. Une formule polie ; sans pas, elle sonne plus soutenue. EN: unless I am mistaken.',
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Choisir le registre',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Pas du tout, en soutenu', [
      it(E(1532), 'nullement'),
      it(E(1533), 'aucunement'),
      it(E(1544), 'nullement l’intention'),
      it(E(1545), 'aucunement de mon fait'),
    ], chk('Dans une lettre à ton fournisseur : « Je ne conteste … le montant. »',
      ['nullement', 'pas nullement', 'pas rien'], 0,
      'Nullement, ou aucunement, sans pas. EN: nullement.')),
    grp('Ne tout seul', [
      it(E(1537), 'savoir'),
      it(E(1538), 'oser'),
      it(E(1539), 'cesser'),
      it(E(1546), 'savoir si'),
    ], chk('« Il ne cesse de nous relancer » :',
      ['il nous relance sans arrêt', 'il a arrêté de nous relancer'], 0,
      'Ne cesse de : il continue. EN: he keeps on.')),
    ctl('Guère', '« Elle ne sort plus guère » :',
      ['elle sort très peu, désormais', 'elle ne sort plus du tout'], 0,
      'Plus guère : presque plus. EN: hardly any more.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['soutenu'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'La lettre dictée',
  frSub: 'Huit phrases à l’oreille',
  lines: [
    ln(E(1532)), ln(E(1534)), ln(E(1537)), ln(E(1539)),
    ln(E(1540)), ln(E(1545)), ln(E(1547)), ln(NR(1066)),
  ],
  questions: [
    { q: 'Première phrase : la personne conteste-t-elle la facture de mars ?', opts: ['non, pas du tout', 'oui, entièrement'], correct: 0, why: 'Nullement : pas du tout. EN: not at all.' },
    { q: 'Deuxième phrase : il a bien dormi ?', opts: ['non, à peine', 'oui, très bien'], correct: 0, why: 'Il n’a guère dormi : à peine. EN: hardly.' },
    { q: 'Troisième phrase : la personne va-t-elle accepter les frais ?', opts: ['non', 'oui, plus tard'], correct: 0, why: 'Je ne saurais accepter : un refus poli. EN: no.' },
    { q: 'Quatrième phrase : l’homme relance-t-il encore ?', opts: ['oui, sans arrêt', 'non, il a arrêté'], correct: 0, why: 'Il ne cesse de relancer. EN: yes, all the time.' },
    { q: 'Dernière phrase : elle a du temps pour lire ?', opts: ['très peu', 'beaucoup'], correct: 0, why: 'Guère le temps : très peu. EN: very little.' },
  ],
  audio: REC('rec-b2-21-dubois-ecoute'),
  say: REFRAME,
  terms: ['soutenu'],
};

const A8_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a8-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Soutenu, mais bancal',
  errors: [
    {
      wrong: 'Il n’a guère pas dormi cette nuit-là.',
      right: fr(E(1534)),
      why: "Normal : guère ne semble pas assez fort, alors pas vient le renforcer. Mais guère prend la place de pas. EN: guère replaces pas.",
    },
    {
      wrong: 'Je ne conteste pas nullement la facture de mars.',
      right: fr(E(1532)),
      why: "Normal : nullement sonne comme un renfort, comme pas du tout. Mais il prend la place de pas. EN: nullement replaces pas.",
    },
    {
      wrong: 'Nul n’est pas censé ignorer la loi.',
      right: fr(E(1499)),
      why: "Normal : la maxime se dit vite, et pas vient par habitude. Mais nul est déjà négatif : nul n'est censé. EN: nul already negates.",
    },
    {
      wrong: 'Salut Inès, je ne le connais point, ce type.',
      right: 'Salut Inès, je ne le connais pas, ce type.',
      why: "Normal : point semble élégant. Mais dans un message à une amie, il sonne comme un livre ancien : c'est le registre qui ne va pas. EN: point is literary, not for a text to a friend.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['soutenu'],
};

const A8_TEXTE = dansUnTexte('a8-texte', 'Réécrire : la réponse de Me Dubois', TEXTE_A8, [
  { q: 'Les deux premières phrases, avec nullement et aucunement.', a: "Je ne conteste nullement votre demande. Ce retard n'est aucunement de mon fait : pas du tout disparaît, le mot soutenu prend sa place." },
  { q: 'Troisième phrase, avec ne seul et pouvoir.', a: "Je ne puis vous répondre avant lundi (ou : je ne peux vous répondre avant lundi) : ne seul, sans pas." },
  { q: 'Quatrième phrase, avec ne seul et savoir.', a: "Je ne sais si votre voisin a signé l'acte : ne seul devant sais, sans pas." },
  { q: 'Cinquième phrase, avec plus guère.', a: "Il ne vient plus guère à l'étude : plus, puis guère, presque plus." },
], 'rec-b2-21-texte-a8', ['soutenu']);

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Guère', '« Il n’a … dormi. »',
    ['guère', 'guère pas'], 0,
    'Guère remplace pas. EN: guère.'),
  ctl('Ne seul', '« Je ne saurais accepter » :',
    ['correct et soutenu', 'faux : il manque pas'], 0,
    'Avec savoir, ne suffit. EN: correct.'),
  ctl('Point', 'Ne… point, aujourd’hui :',
    ['se lit surtout dans les livres', 's’écrit dans les lettres formelles'], 0,
    'Littéraire : tu le reconnais. EN: literary.'),
], ['soutenu']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Le registre soutenu',
    opener: {
      line: "Une lettre de notaire qui nie sans hausser le ton : ici tu choisis guère, nullement, aucunement et ne tout seul, pour l'écrit soigné. EN: A notary's letter that denies without raising its voice: here you choose the formal negations.",
      imageRef: 'lessons/negations-combinees/act08.jpg',
    },
    sections: [],
    milestone: "Tu nies dans une lettre avec nullement, aucunement ou guère, tu emploies ne seul avec savoir, pouvoir, oser et cesser, et tu reconnais ne… point. EN: You can use the formal negations.",
    estScreens: 40, restPoints: ['a8-table', 'a8-ecoute'],
  },
  sections: [A8_HISTOIRE, A8_TABLE, A8_CARTES, A8_CONSTRUIRE, A8_ECOUTE, A8_ERREURS, A8_TEXTE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9: LA PORTÉE
 *
 *  What the negation touches: the request or the action (demander de / de
 *  ne pas), penser que with its mood (lesson 6 in B2, quoted), pas tous /
 *  aucun, toujours pas / pas toujours, pas tout / rien, the negated cause.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'La résiliation',
  frSub: 'Ce que la négation touche',
  setting: "Dakar. L'opérateur de Mme Diallo a résilié son contrat, et le conseiller affirme qu'elle l'a demandé. Elle prépare une mise au point avec son fils Moussa.",
  bubbles: [
    { from: 'narrator', fr: 'Moussa tape la lettre ; sa mère pèse chaque négation.', en: 'Moussa types the letter; his mother weighs every negative.' },
    { from: 'user', fr: fr(E(1552)), en: en(E(1552)) },
    { from: 'coach', fr: 'Ici, la négation touche demander : il n’y a eu aucune demande.', en: 'Here the negation touches demander: there was no request at all.', warn: 'Aucune demande' },
    { from: 'user', fr: fr(E(1553)), en: en(E(1553)) },
    { from: 'coach', fr: 'Ici, elle touche résilier : c’est une demande, celle de ne pas le faire.', en: 'Here it touches résilier: it is a request, the request not to do it.', warn: 'Une demande' },
    { from: 'user', fr: fr(E(1556)), en: en(E(1556)) },
    { from: 'coach', fr: 'Pas tous : certains sont venus. Pour dire zéro, aucun.', en: 'Pas tous: some came. For zero, aucun.', warn: 'Pas tous' },
    { from: 'user', fr: fr(E(1559)), en: en(E(1559)) },
    { from: 'coach', fr: 'Toujours pas : pas encore, et ça dure. Pas toujours voudrait dire « parfois ».', en: 'Toujours pas: not yet, and still waiting. Pas toujours would mean « sometimes ».', warn: 'Toujours pas' },
  ],
  closing: { fr: 'Déplace la négation, et tu nies autre chose : la demande ou l’action, tous ou une partie, parfois ou pas encore.', en: 'Move the negation and you deny something else: the request or the action, all or some, sometimes or not yet.' },
  audio: REC('rec-b2-21-diallo'),
  say: REFRAME,
  terms: ['portee'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-portee',
  title: 'Ce que la négation touche',
  frSub: 'Quatre paires',
  hint: 'Quatre cartes, quatre paires.',
  audio: REC('rec-b2-21-cartes-portee'),
  say: REFRAME,
  terms: ['portee'],
  cards: [
    {
      head: 'La demande ou l’action', label: 'demander de',
      fr: fr(E(1567)), sub: rsOf(E(1567)),
      body: 'Il ne m’a pas dit de venir : pas de consigne. Il m’a dit de ne pas venir : une consigne. La place de ne décide. EN: deny the instruction, or instruct the denial.',
    },
    {
      head: 'Penser que', label: Cap(MODES_REF),
      fr: fr(E(1554)), sub: rsOf(E(1554)),
      body: `« ${B206_REFRAME} » Je ne pense pas qu'il ait signé : un doute. Je pense qu'il n'a pas signé : une affirmation. EN: ${B206_REFRAME_EN}`,
    },
    {
      head: 'Tous, pas tous, aucun', label: 'combien',
      fr: fr(E(1556)), sub: rsOf(E(1556)),
      body: "Pas tous : certains, pas tous. Aucun : zéro. Tous… ne… pas se lit d'ordinaire pas tous, mais l'oreille hésite : dans une lettre, écris pas tous ou aucun. EN: pas tous is some; aucun is none.",
    },
    {
      head: 'Toujours pas, pas toujours', label: 'l’ordre change tout',
      fr: fr(E(1559)), sub: rsOf(E(1559)),
      body: 'Toujours pas : pas encore, et on attend. Pas toujours : parfois oui, parfois non. De même, pas tout veut dire une partie ; rien veut dire zéro. EN: still not, not always; not everything, nothing.',
    },
  ],
};

const A9_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-trier',
  layer: 'core',
  size: 'lg',
  title: 'Que nie la phrase ?',
  frSub: 'Trois groupes, trois contrôles',
  groups: [
    grp('La demande ou l’action', [
      it(E(1552), 'la demande est niée'),
      it(E(1553), 'on demande de ne pas'),
      it(E(1567), 'les deux, côte à côte'),
      it(E(1555), 'penser est affirmé'),
    ], chk('« Je vous ai demandé de ne pas résilier » : y a-t-il eu une demande ?',
      ['oui : ne pas résilier', 'non, aucune'], 0,
      'La négation touche résilier : la demande existe. EN: yes.')),
    grp('Combien, et quand', [
      it(E(1556), 'pas tous'),
      it(E(1557), 'aucun'),
      it(E(1559), 'toujours pas'),
      it(E(1560), 'pas toujours'),
    ], chk('« Aucun voisin n’est venu » : combien sont venus ?',
      ['aucun', 'quelques-uns'], 0,
      'Aucun : zéro. EN: none.')),
    grp('La cause, le tout', [
      it(E(1563), 'la cause est niée'),
      it(E(1564), 'le départ est nié'),
      it(E(1561), 'pas tout'),
      it(E(1562), 'rien du tout'),
    ], chk('« Il n’est pas parti parce qu’il était malade, mais parce qu’il s’ennuyait » : est-il parti ?',
      ['oui, par ennui', 'non, il est resté'], 0,
      'La négation touche la cause, pas le départ. EN: he left.')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['portee'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qu’est-ce qui est nié ?',
  frSub: 'Huit phrases à l’oreille',
  lines: [
    ln(E(1552)), ln(E(1553)), ln(E(1556)), ln(E(1557)),
    ln(E(1559)), ln(E(1560)), ln(E(1561)), ln(E(1564)),
  ],
  questions: [
    { q: 'Première phrase : la personne a-t-elle demandé une résiliation ?', opts: ['non', 'oui'], correct: 0, why: 'La demande elle-même est niée. EN: no.' },
    { q: 'Deuxième phrase : qu’a-t-elle demandé ?', opts: ['qu’on garde son contrat', 'qu’on l’annule'], correct: 0, why: 'De ne pas résilier : le garder. EN: to keep it.' },
    { q: 'Troisième phrase : des voisins sont-ils venus ?', opts: ['oui, certains', 'non, aucun'], correct: 0, why: 'Pas tous : certains. EN: some.' },
    { q: 'Cinquième phrase : le remboursement est-il arrivé ?', opts: ['non, pas encore', 'oui, parfois'], correct: 0, why: 'Toujours pas : pas encore. EN: not yet.' },
    { q: 'Dernière phrase : l’homme est-il parti ?', opts: ['non, il était malade', 'oui, malgré sa maladie'], correct: 0, why: 'Avec la virgule, la négation touche le départ. EN: he stayed.' },
  ],
  audio: REC('rec-b2-21-portee-ecoute'),
  say: REFRAME,
  terms: ['portee'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre portées mal écrites',
  errors: [
    {
      wrong: 'Je vous ai demandé de ne résilier pas mon contrat.',
      right: fr(E(1553)),
      why: "Normal : avec un verbe conjugué, pas suit le verbe. Devant un infinitif, ne pas passe avant, ensemble. EN: ne pas before the infinitive.",
    },
    {
      wrong: 'Il m’a dit de pas venir.',
      right: 'Il m’a dit de ne pas venir.',
      why: "Normal : à l'oral, ne tombe aussi devant l'infinitif. À l'écrit, garde ne pas, ensemble. EN: keep ne in writing.",
    },
    {
      wrong: 'Je pense qu’il n’ait pas signé ce bon.',
      right: fr(E(1555)),
      why: "Normal : le subjonctif vient avec je ne pense pas que. Mais ici, penser est affirmatif : l'indicatif, il n'a pas signé. EN: je pense que + indicative.",
    },
    {
      wrong: 'Les voisins ne sont pas tout venus.',
      right: fr(E(1556)),
      why: "Normal : on écrit tout par réflexe. Ici, tous est un pronom pluriel, et on entend son s : pas tous. EN: tous, a plural pronoun.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['portee'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Cinq phrases, une même question',
  frSub: 'Que nie la phrase ?',
  examples: [
    ex(OA1826, `${MODES_REF} : ne… pas porte sur croire, puis le subjonctif`),
    ex(CL(2197), `${CONCESSION_REF} : tous… ne… pas, lu comme pas tous`),
    ex(SC1609, `${ECOUTE_REF} : pas tous les mots, certains seulement`),
    ex(E(1560), 'pas toujours : parfois oui'),
    ex(E(1562), 'rien du tout : zéro, au contraire de pas tout'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['portee'],
};

const A9_TEXTE = dansUnTexte('a9-texte', 'Lire : la mise au point de Mme Diallo', TEXTE_A9, [
  { q: 'Première phrase : que nie Mme Diallo ?', a: "La demande : elle n'a jamais demandé la résiliation. Elle a demandé l'inverse, de ne pas résilier." },
  { q: 'Deuxième phrase : pense-t-elle que le conseiller a menti ?', a: "Non : je ne pense pas qu'il ait menti (un doute, au subjonctif) ; je pense qu'il n'a pas compris (une affirmation)." },
  { q: 'Troisième phrase : combien de clients ont été prévenus ?', a: "Certains, pas tous : ils n'ont pas tous été prévenus." },
  { q: 'Les deux dernières phrases : toujours pas, pas toujours, pas tout.', a: "Toujours pas : la réponse n'est pas encore arrivée ; pas toujours : l'opérateur répond parfois lentement, parfois non ; pas tout payé : une partie seulement." },
], 'rec-b2-21-texte-a9', ['portee']);

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('La demande', '« Je ne vous ai pas demandé de partir » :',
    ['aucune demande', 'une demande de rester'], 0,
    'La négation touche demander. EN: no request.'),
  ctl('Combien', '« Pas tous » :',
    ['certains', 'aucun'], 0,
    'Pas tous : une partie. EN: some.'),
  ctl('Quand', '« Je n’ai toujours pas reçu » :',
    ['pas encore', 'parfois'], 0,
    'Toujours pas : pas encore. EN: still not.'),
], ['portee']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'La portée',
    opener: {
      line: "Une résiliation que tu n'as jamais demandée : ici tu places la négation sur ce que tu nies vraiment, la demande ou l'action, tous ou une partie. EN: A cancellation you never asked for: here you put the negation on what you really deny.",
      imageRef: 'lessons/negations-combinees/act09.jpg',
    },
    sections: [],
    milestone: "Tu choisis ce que la négation touche : la demande ou l'action, pas tous ou aucun, toujours pas ou pas toujours. EN: You control the scope of a negation.",
    estScreens: 40, restPoints: ['a9-trier', 'a9-erreurs'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_TRIER, A9_ECOUTE, A9_ERREURS, A9_EXEMPLES, A9_TEXTE, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10: LE NE QUI NE NIE PAS, LE NE QUI TOMBE
 *
 *  The ne explétif belongs to lesson 18 in B2 (cited, not re-taught): here
 *  only the fact that it negates nothing, against a real ne… pas after
 *  craindre. Then the dropped ne under the gate B2-2 decision: spoken rows
 *  are named as spoken; writing keeps ne; plus [ply] / [plys].
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'La radio de Marseille',
  frSub: 'De l’oral à l’écrit',
  setting: "Marseille. Après une coupure d'électricité dans le quartier, Samia, journaliste à une radio locale, transcrit les témoignages pour le site. Son stagiaire, Théo, l'aide.",
  bubbles: [
    { from: 'narrator', fr: 'Samia réécoute un témoin ; Théo tape la version écrite.', en: 'Samia replays a witness; Théo types the written version.' },
    { from: 'user', fr: fr(E(1577)), en: en(E(1577)) },
    { from: 'coach', fr: 'À l’oral, ne tombe. Sur le site, on écrit : je n’ai jamais rien vu de pareil.', en: 'In speech, ne drops. On the website: je n’ai jamais rien vu de pareil.', warn: 'Le ne qui tombe' },
    { from: 'user', fr: fr(E(1579)), en: en(E(1579)) },
    { from: 'coach', fr: 'Y a plus personne : à l’écrit, il n’y a plus personne.', en: 'Y a plus personne: in writing, il n’y a plus personne.', warn: 'Il n’y a plus' },
    { from: 'user', fr: 'Je voulais rentrer avant qu’il ne pleuve.', en: 'I wanted to get home before it rained.' },
    { from: 'coach', fr: 'Ce ne-là ne nie rien : avant qu’il pleuve dit la même chose. On peut le garder, ou l’enlever.', en: 'That ne negates nothing: avant qu’il pleuve says the same. Keep it or drop it.', warn: 'Le ne explétif' },
    { from: 'user', fr: fr(E(1582)), en: en(E(1582)) },
    { from: 'coach', fr: 'Là, on entend le s de plus : il en veut davantage. Sans ne, seule l’oreille décide.', en: 'Here you hear the s of plus: he wants more. Without ne, only the ear decides.', warn: 'Plus, avec son s' },
  ],
  closing: { fr: 'À l’écrit, chaque négation garde son ne ; le ne explétif, lui, ne nie rien.', en: 'In writing, every negation keeps its ne; the ne explétif negates nothing.' },
  audio: REC('rec-b2-21-samia'),
  say: REFRAME,
  terms: ['oral', 'expletif'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-portee',
  title: 'Deux ne qui trompent',
  frSub: `Le ne explétif, présenté dans ${TEMPS_REF}`,
  hint: 'Quatre cartes. Les deux premières ne nient rien.',
  audio: REC('rec-b2-21-cartes-ne'),
  say: REFRAME,
  terms: ['expletif', 'oral'],
  cards: [
    {
      head: 'Un ne qui ne nie rien', label: Cap(TEMPS_REF),
      fr: fr(E(1570)), sub: rsOf(E(1570)),
      body: "Après avant que, à moins que, craindre que ou un comparatif, ne peut apparaître sans nier : il ne pleut pas encore. Enlève-le, le sens reste. EN: this ne negates nothing.",
    },
    {
      head: 'Crainte ou négation', label: 'craindre que',
      fr: fr(E(1571)), sub: rsOf(E(1571)),
      body: "Je crains que la facture ne soit partie : j'ai peur qu'elle soit partie. Avec pas, la négation est réelle : je crains qu'elle ne soit pas encore partie. EN: add pas for a real negation.",
    },
    {
      head: 'Le ne qui tombe', label: 'oral',
      fr: fr(E(1578)), sub: rsOf(E(1578)),
      body: "À l'oral : j'ai jamais rien vu. À l'écrit, ne reste toujours, même dans une combinaison. On le dit oral, pas faux. EN: speech drops ne; writing keeps it.",
    },
    {
      head: 'Plus, avec ou sans s', label: 'ply ou plys',
      fr: fr(E(1581)), sub: rsOf(E(1581)),
      body: "Sans ne, j'en veux plus peut dire encore (on entend le s) ou plus du tout (sans s). À l'écrit, je n'en veux plus lève le doute. EN: ne removes the ambiguity.",
    },
  ],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: 'Nier, ou ne pas nier',
  frSub: 'Deux groupes, un contrôle',
  groups: [
    grp('Nie, ou ne nie pas', [
      it(E(1570), 'ne explétif'),
      it(E(1571), 'ne explétif'),
      it(E(1572), 'vraie négation, avec pas'),
      it(E(1573), 'ne explétif, comparatif'),
    ], chk('« C’est plus cher qu’on ne le pense » : que pensent les gens ?',
      ['que c’est moins cher', 'rien du tout'], 0,
      'Ce ne ne nie pas : on le croit moins cher qu’il n’est. EN: people think it is cheaper.')),
    grp('Oral ou écrit', [
      it(E(1577), 'oral'),
      it(E(1578), 'écrit'),
      it(E(1579), 'oral'),
      it(E(1580), 'écrit'),
    ], chk('Pour le site du journal :',
      ['il n’y a plus personne', 'y a plus personne'], 0,
      'À l’écrit, ne reste. EN: the written form.')),
    ctl('Plus', '« J’en veux plus », avec le s qu’on entend :',
      ['encore', 'plus du tout'], 0,
      'On entend le s : davantage. EN: more.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expletif', 'oral'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Témoignages à la radio',
  frSub: 'Huit phrases à l’oreille',
  lines: [
    ln(E(1577)), ln(E(1579)), ln(E(1582)), ln(E(1581)),
    ln(E(1584)), ln(E(1576)), ln(NR(1173)), ln(AF1278),
  ],
  questions: [
    { q: 'Première phrase : le témoin a-t-il déjà vu ça ?', opts: ['non, jamais', 'oui, souvent'], correct: 0, why: 'Jamais rien vu de pareil, sans ne : de l’oral. EN: never.' },
    { q: 'Troisième phrase : la personne veut-elle davantage ?', opts: ['oui, encore', 'non, plus du tout'], correct: 0, why: 'On entend le s de plus : davantage. EN: yes, more.' },
    { q: 'Quatrième phrase : et celle-ci ?', opts: ['non, plus du tout', 'oui, encore'], correct: 0, why: 'Avec ne, aucun doute : plus du tout. EN: no more.' },
    { q: 'Cinquième phrase : quelqu’un a-t-il parlé au témoin ?', opts: ['non, personne', 'oui, un voisin'], correct: 0, why: 'Personne, sans ne à l’oral. EN: nobody.' },
    { q: 'Dernière phrase : la livraison sera-t-elle à l’heure ?', opts: ['probablement pas', 'sûrement'], correct: 0, why: 'Ne… pas après craindre : une vraie négation. EN: probably not.' },
  ],
  audio: REC('rec-b2-21-radio-ecoute'),
  say: REFRAME,
  terms: ['oral'],
};

const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'De l’oral à l’écrit',
  frSub: 'Six cartes, huit phrases',
  rule: {
    title: 'À l’écrit, ne reste',
    body: "À l'oral, ne tombe souvent, même dans une combinaison. À l'écrit, garde-le toujours ; et ne confonds pas le ne explétif, qui ne nie rien, avec une vraie négation. EN: keep ne in writing; the ne explétif is not a negation.",
  },
  cards: [
    trap(E(1578), 'ne oublié', "J'ai jamais rien vu de pareil.", 'À l’écrit : je n’ai jamais rien vu. EN: add ne.'),
    trap(E(1580), 'ne oublié', 'Y a plus personne au guichet.', 'À l’écrit : il n’y a plus personne. EN: il n’y a.'),
    trap(E(1585), 'sujet sans ne', "Personne m'a rien dit.", 'Sujet négatif : ne devant le verbe. EN: ne m’a.'),
    trap(E(1581), 'plus ambigu', "J'en veux plus.", 'Pour dire plus du tout : je n’en veux plus. EN: add ne.'),
    trap(NR(1174), 'ne oublié', "J'ai rien compris.", 'À l’écrit : je n’ai rien compris. EN: add ne.'),
    trap(E(1572), 'vraie négation', 'Je crains que la facture soit pas encore partie.', 'Une vraie négation : ne… pas, ensemble. EN: ne… pas.'),
  ],
  drill: [
    { promptSay: 'Pour le journal : « Je … jamais rien vu de pareil. »', opts: ["n'ai", 'ai'], correct: 0 },
    { promptSay: 'Pour le journal : « Il … plus personne au guichet. »', opts: ["n'y a", 'y a'], correct: 0 },
    { promptSay: 'Pour le journal : « Personne … rien dit. »', opts: ["m'a", "ne m'a"], correct: 1 },
    { promptSay: 'Pour dire plus du tout, à l’écrit : « … veux plus. »', opts: ["Je n'en", "J'en"], correct: 0 },
    { promptSay: '« Partons avant qu’il ne pleuve » : le ne est-il une vraie négation ?', opts: ['non', 'oui'], correct: 0 },
    { promptSay: 'Pour dire « j’ai peur qu’elle soit déjà partie » : « Je crains qu’elle … partie. »', opts: ['ne soit', 'ne soit pas'], correct: 0 },
    { promptSay: '« C’est plus cher qu’on ne le pense » : c’est cher ?', opts: ['oui, plus qu’on ne croit', 'non'], correct: 0 },
    { promptSay: 'Pour le journal : « Je … rien compris. »', opts: ["n'ai", 'ai'], correct: 0 },
  ],
  steps: STEPS('À l’écrit, ne reste', 'De l’oral à l’écrit'),
  audio: REC('rec-b2-21-piege-oral'),
  say: REFRAME,
  terms: ['oral', 'expletif'],
};

const A10_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a10-exemples',
  layer: 'core',
  title: 'Cinq phrases de quatre leçons',
  frSub: 'Nier, ou ne pas nier',
  examples: [
    ex(AF1278, `${REUNIONS_REF} : ne… pas, une vraie négation après craindre`),
    ex(EM1273, `${SUBJ_PASSE_REF} : craindre que sans ne, en courant`),
    ex(LI1254, `${LITT_REF} : le ne explétif, dans un subjonctif littéraire`),
    ex(NR(1173), `${NEG_B1_REF} : l'oral, sans ne`),
    ex(NR(1174), "l'écrit, avec ne"),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['expletif', 'oral'],
};

const A10_TEXTE = dansUnTexte('a10-texte', 'Transcrire : le témoignage de Kevin', TEXTE_A10, [
  { q: 'Première et deuxième phrases.', a: "Je n'ai jamais rien vu de pareil. Il n'y avait plus personne dans la rue, et personne ne m'a rien dit." },
  { q: 'Troisième et quatrième phrases.', a: "Les voisins, pareil : ils n'ont rien entendu (plus soigné : les voisins non plus n'ont rien entendu). Je n'ai plus confiance, franchement." },
  { q: 'Dernière phrase : faut-il ajouter un ne ?', a: "Non : avant qu'il pleuve est correct. Avant qu'il ne pleuve l'est aussi, en plus soutenu : ce ne ne nie rien." },
  { q: 'Pourquoi ne pas laisser l’oral sur le site ?', a: "À l'écrit, ne reste toujours ; sans lui, le texte sonne familier, et « j'ai plus confiance » pourrait même se lire « j'ai davantage confiance »." },
], 'rec-b2-21-texte-a10', ['oral', 'expletif']);

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le ne explétif', '« Avant qu’il ne pleuve » :',
    ['il ne pleut pas encore', 'il ne pleuvra pas'], 0,
    'Ce ne ne nie rien. EN: not raining yet.'),
  ctl('L’écrit', 'Dans une lettre :',
    ['je n’ai jamais rien vu', 'j’ai jamais rien vu'], 0,
    'À l’écrit, ne reste. EN: keep ne.'),
  ctl('Craindre', '« Je crains qu’elle ne soit pas partie » :',
    ['j’ai peur qu’elle soit encore là', 'j’ai peur qu’elle soit partie'], 0,
    'Avec pas, la négation est vraie. EN: afraid she is still there.'),
], ['expletif', 'oral']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Le ne qui ne nie pas',
    opener: {
      line: "Des témoignages à la radio, à transcrire pour le site : ici tu reconnais le ne qui ne nie rien, et tu remets le ne que l'oral laisse tomber. EN: Radio testimonies to transcribe: here you spot the ne that negates nothing, and restore the ne that speech drops.",
      imageRef: 'lessons/negations-combinees/act10.jpg',
    },
    sections: [],
    milestone: "Tu sais que le ne explétif ne nie rien, tu distingues je crains qu'elle ne soit partie de je crains qu'elle ne soit pas partie, et tu écris toujours ne. EN: You know which ne negates, and you keep ne in writing.",
    estScreens: 40, restPoints: ['a10-trier', 'a10-piege'],
  },
  sections: [A10_HISTOIRE, A10_CARTES, A10_TRIER, A10_ECOUTE, A10_PIEGE, A10_EXEMPLES, A10_TEXTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11: CONTESTER PAR ÉCRIT
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La lettre que tu vas imiter',
  frSub: 'Contester une facture, point par point',
  text: LECTURE_MODELE,
  glossary: [
    { word: 'souscrit', en: 'subscribed', note: 'Qui a accepté un contrat ou une option.' },
    { word: 'décodeur', en: 'set-top box', note: 'L’appareil qui reçoit les chaînes de télévision.' },
    { word: 'prélevés', en: 'debited', note: 'Pris directement sur le compte en banque.' },
    { word: 'le médiateur', en: 'the ombudsman', note: 'La personne qui règle un litige entre un client et une entreprise.' },
  ],
  questions: [
    { q: 'Global : que demande Martine Gagnon ?', a: "L'annulation des frais de l'option « Sport plus » et le remboursement des deux mois déjà prélevés." },
    { q: 'Détail : que ne conteste-t-elle pas ?', a: "Le montant de son abonnement de base : je ne conteste nullement ce montant." },
    { q: 'Inférence : pourquoi écrire « je ne vous ai pas demandé de modifier mon forfait ; je vous ai demandé de ne rien y changer » ?', a: "Pour placer la négation au bon endroit : elle n'a fait aucune demande de modification, et elle a même demandé le contraire." },
    { q: 'Forme : trouve trois négations combinées ou soutenues.', a: "Personne ne m'a informé ; je ne saurais payer ; je n'ai plus eu aucune nouvelle ; mon décodeur n'a jamais affiché aucune chaîne." },
    { q: 'Structure : comment la lettre est-elle organisée ?', a: "L'objet, le fait contesté, ce qui n'est pas contesté, la réponse à l'argument du conseiller, la demande précise, le délai, la formule finale." },
    { q: 'Ton : qu’est-ce qui rend cette lettre efficace ?', a: "Elle nie précisément, sans colère : chaque négation dit exactement ce qui ne s'est pas passé, et la demande finale est claire." },
  ],
  audio: REC('rec-b2-21-modele'),
  say: REFRAME,
  terms: ['vide', 'portee'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-lettre',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Nier précisément, puis demander',
  steps: [
    "Pose l'objet et le fait contesté, avec sa date : je conteste formellement la facture du 12 mars. EN: state what you contest.",
    "Dis ce qui ne s'est pas passé, avec des négations combinées : je n'ai jamais rien signé, personne ne m'a prévenu. EN: deny precisely.",
    'Dis aussi ce que tu ne contestes pas : je ne conteste nullement le montant de base. EN: say what you accept.',
    "Place une négation au bon endroit pour corriger ce qu'on te fait dire : je ne vous ai pas demandé de… ; je vous ai demandé de ne pas… EN: control the scope.",
    "Termine par une demande précise et un délai : je vous prie donc d'annuler ces frais. EN: end with a clear request.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['vide', 'portee'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-lettre',
  title: 'Quatre phrases que toute contestation contient',
  cases: [
    { situation: 'Tu poses l’objet', fr: fr(E(1588)), en: en(E(1588)) },
    { situation: 'Tu nies un fait', fr: fr(E(1589)), en: en(E(1589)) },
    { situation: 'Tu corriges ce qu’on te fait dire', fr: fr(E(1597)), en: en(E(1597)) },
    { situation: 'Tu donnes un délai', fr: fr(E(1598)), en: en(E(1598)) },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['vide'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec le service client',
  frSub: 'Six tours, à voix haute',
  setting: 'Tu appelles le service client de ton fournisseur d’électricité : il te facture trois mois dans un appartement que tu avais déjà quitté. Tu nies précisément, poliment et fermement.',
  turns: [
    {
      ai: 'Service client, bonjour. Vous appelez au sujet de votre facture ?', en: 'Customer service, hello. Are you calling about your bill?',
      user: 'Oui : je conteste la facture de mars, car je n’habitais plus à cette adresse.',
      userEn: 'Yes: I dispute the March bill, because I no longer lived at that address. (Ne… plus: the fact denied.)',
      alts: [
        { fr: 'Oui, je conteste formellement cette facture : je n’y habitais plus depuis janvier.', en: 'Yes, I formally dispute this bill: I had not lived there since January. (Formal register.)' },
        { fr: 'Oui : cette facture ne correspond à aucune consommation de ma part.', en: 'Yes: this bill matches no consumption of mine. (Aucune: zero.)' },
      ],
    },
    {
      ai: 'Pourtant, le compteur montre une consommation.', en: 'Yet the meter shows some consumption.',
      user: 'Je n’ai plus rien consommé depuis mon départ : je n’avais plus aucune clé de l’appartement.',
      userEn: 'I have consumed nothing since I left: I no longer had any key to the flat. (Plus rien, plus aucune: two combinations.)',
      alts: [
        { fr: 'Depuis mon départ, je n’y suis jamais retourné et je n’ai rien consommé.', en: 'Since I left, I have never gone back and have consumed nothing. (Jamais, then rien.)' },
        { fr: 'Personne de chez moi n’y est entré après le 31 janvier.', en: 'No one from my household went in after 31 January. (Personne… ne as the subject.)' },
      ],
    },
    {
      ai: 'Vous nous aviez prévenus de votre départ ?', en: 'Had you told us you were leaving?',
      user: 'Oui, et personne ne m’a jamais rien demandé de plus.',
      userEn: 'Yes, and no one ever asked me for anything more. (Personne ne… jamais rien: one ne.)',
      alts: [
        { fr: 'Oui, par courriel, et je n’ai reçu aucune réponse.', en: 'Yes, by email, and I received no reply. (Aucune.)' },
        { fr: 'Oui ; on ne m’a jamais demandé aucun document.', en: 'Yes; I was never asked for a single document. (Jamais… aucun.)' },
      ],
    },
    {
      ai: 'Notre conseiller dit que vous avez demandé de garder le contrat.', en: 'Our adviser says you asked to keep the contract.',
      user: 'Je ne lui ai pas demandé de garder le contrat : je lui ai demandé de ne pas le prolonger.',
      userEn: 'I did not ask him to keep the contract: I asked him not to extend it. (Scope: the request denied, then the request made.)',
      alts: [
        { fr: 'Ce n’est pas ce que j’ai dit : j’ai demandé de ne pas le prolonger.', en: 'That is not what I said: I asked not to extend it. (Ne pas before the infinitive.)' },
        { fr: 'Je n’ai nullement demandé de le garder.', en: 'I in no way asked to keep it. (Nullement: formal.)' },
      ],
    },
    {
      ai: 'Nous pouvons vous proposer un geste commercial.', en: 'We can offer you a goodwill gesture.',
      user: 'Je ne demande pas un geste commercial : je demande qu’on annule cette facture.',
      userEn: 'I am not asking for a goodwill gesture: I am asking for this bill to be cancelled. (The negation falls on the gesture.)',
      alts: [
        { fr: 'Je ne saurais accepter un simple geste : la facture doit être annulée.', en: 'I could not accept a mere gesture: the bill must be cancelled. (Je ne saurais: formal.)' },
        { fr: 'Ce n’est pas un geste que j’attends, c’est une correction.', en: 'It is not a gesture I expect, it is a correction. (The same scope, as a cleft.)' },
      ],
    },
    {
      ai: 'Très bien. Vous pouvez nous l’écrire ?', en: 'Very well. Can you put it in writing?',
      user: 'Oui, je vous écris aujourd’hui ; sans réponse sous quinze jours, je saisirai le médiateur.',
      userEn: 'Yes, I will write today; without a reply within fifteen days, I shall go to the ombudsman. (Sans: no ne.)',
      alts: [
        { fr: 'Bien sûr, et je ne paierai rien d’ici là.', en: 'Of course, and I will pay nothing until then. (Rien in the future.)' },
        { fr: 'Oui ; en attendant, je ne réglerai aucun montant.', en: 'Yes; meanwhile I will not pay any amount. (Aucun.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['vide', 'portee'],
};

const MODEL_BODY = "Objet : restitution de mon dépôt de garantie.\n\nMadame, Monsieur,\n\nJ'ai quitté l'appartement du 14, rue des Alpes, à Genève, le 30 juin, et vous avez retenu la totalité de mon dépôt de garantie, soit 1800 francs, pour un dégât des eaux dans la salle de bains. Je conteste formellement cette retenue.\n\nLors de l'état des lieux de sortie, votre agente n'a relevé aucune trace d'humidité : le document que nous avons signé ensemble ne mentionne ni fuite ni tache. Les photos jointes à ce document ne montrent rien d'anormal non plus. Pendant mes trois années dans ce logement, je n'ai jamais rien signalé de tel, pour une raison simple : aucune fuite ne s'est produite. Personne ne m'a d'ailleurs jamais rien reproché avant votre courrier du 15 juillet.\n\nJe ne nie pas que la salle de bains soit ancienne ; je nie en avoir abîmé quoi que ce soit. Je ne vous ai pas demandé de renoncer à une réparation nécessaire : je vous demande de ne pas me la faire payer. Je ne saurais accepter une retenue fondée sur un dégât qui n'a jamais été constaté en ma présence.\n\nJe vous prie donc de me restituer l'intégralité de mon dépôt dans un délai de quinze jours. À défaut, je n'aurai plus d'autre choix que de saisir la commission de conciliation.\n\nVeuillez agréer, Madame, Monsieur, mes salutations distinguées.\n\nJulien Morel";

const MODEL_NOTES = "Les repères de la correctrice (hors décompte) :\n1. Tâche : l'objet, les faits, ce qui est contesté et ce qui ne l'est pas (l'ancienneté de la salle de bains), une demande précise avec un délai.\n2. Cohérence : les faits d'abord (l'état des lieux), puis la réponse à l'accusation, puis la demande ; donc et à défaut relient les parties.\n3. Étendue : aucune trace, ni fuite ni tache, jamais rien, aucune fuite ne, personne ne… jamais rien, je ne saurais, n'a jamais été, ne… plus d'autre… que.\n4. Correction : un seul ne à chaque fois, aucun pas empilé ; personne et aucune comme sujets avec ne ; un contraste de portée (je ne vous ai pas demandé de… ; je vous demande de ne pas…).\n5. Registre : une lettre formelle, ferme sans agressivité ; aucune forme orale, et ne toujours écrit.";

const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Ta lettre : contester, point par point',
  frSub: 'Mission écrite, format DELF B2',
  brief: "Tu as reçu un courrier injuste. Choisis l'une des deux situations : ton fournisseur d'énergie te facture trois mois dans un logement que tu avais déjà quitté ; ou ton ancien propriétaire garde ton dépôt de garantie en t'accusant d'un dégât des eaux. Écris une lettre de contestation : dis précisément ce qui s'est passé et ce qui ne s'est pas passé, puis fais une demande claire.",
  briefEn: 'You have received an unfair letter. Choose one of the two situations: your energy supplier is billing you for three months in a home you had already left; or your former landlord is keeping your deposit and accusing you of water damage. Write a letter of complaint: say precisely what did and did not happen, then make a clear request.',
  produce: "Écris une lettre formelle de 200 à 250 mots (sans compter l'objet, la formule d'appel, la formule finale et la signature) : les faits contestés, ce que tu ne contestes pas, une demande précise avec un délai. Emploie au moins cinq négations combinées ou soutenues différentes (plus jamais, jamais rien, personne ne, aucun… ne, ni… ni, nullement, je ne saurais…) et au moins un contraste de portée (je ne vous ai pas demandé de… ; je vous ai demandé de ne pas…).",
  responseSpec: { kind: 'text', minWords: 200, maxWords: 275 },
  rubric: {
    criteria: [
      {
        key: 'tache',
        label: 'Réalisation de la tâche',
        maxPoints: 3,
        descriptors: [
          "3 : Les faits contestés, ce qui n'est pas contesté, une demande précise avec un délai, et au moins un contraste de portée qui corrige ce qu'on te reproche. Entre 200 et 250 mots.",
          "2 : La contestation est là, mais la demande est floue, le contraste de portée manque, ou la longueur sort un peu des limites.",
          "1 : Une plainte générale, sans fait précis ni demande, ou un texte beaucoup trop court.",
        ],
      },
      {
        key: 'coherence',
        label: 'Cohérence et cohésion',
        maxPoints: 3,
        descriptors: [
          "3 : Un paragraphe par étape (les faits, la réponse à l'accusation, la demande), reliés par des mots comme donc, d'ailleurs, à défaut ; le lecteur sait toujours ce qui est nié.",
          "2 : Le texte se suit, mais faits et demandes se mélangent par endroits.",
          "1 : On ne sait pas toujours ce que l'auteur conteste et ce qu'il demande.",
        ],
      },
      {
        key: 'etendue',
        label: 'Étendue des structures',
        maxPoints: 2,
        descriptors: [
          "2 : Au moins cinq négations combinées ou soutenues différentes (plus jamais rien, personne ne, aucun… ne, ni… ni, nullement, je ne saurais…) et un contraste de portée.",
          "1 : Surtout ne… pas, ou toujours la même combinaison, ou moins de cinq formes différentes.",
        ],
      },
      {
        key: 'correction',
        label: 'Correction',
        maxPoints: 2,
        descriptors: [
          "2 : Un seul ne par négation, jamais de pas empilé, chaque mot à sa place autour du participe ou de l'infinitif, le sujet négatif avec ne et sans pas.",
          "1 : Des erreurs fréquentes (pas rien, personne n'a pas, sans ne rien, un ordre renversé) gênent parfois la lecture.",
        ],
      },
      {
        key: 'registre',
        label: 'Registre et ton',
        maxPoints: 2,
        descriptors: [
          "2 : Le registre d'une lettre formelle : ferme sans agressivité, ne toujours écrit, des négations soutenues bien choisies (nullement, je ne saurais).",
          "1 : Le texte sonne comme un message oral (ne qui tombe, du coup, points d'exclamation) ou accuse au lieu de démontrer.",
        ],
      },
    ],
  },
  scaffold: [
    'Je conteste formellement',
    "Je n'ai jamais",
    'Personne ne',
    "Je n'ai reçu aucun",
    'Je ne conteste nullement',
    'Je ne vous ai pas demandé de',
    'Je ne saurais',
    'Je vous prie donc de',
  ],
  modelAnswer: `${MODEL_BODY}\n\n${MODEL_NOTES}`,
  modelAnswerEn: "Subject: return of my deposit. Dear Sir or Madam, I left the flat at 14 rue des Alpes, in Geneva, on 30 June, and you have kept my entire deposit, 1800 francs, for water damage in the bathroom. I formally dispute this deduction. At the check-out inspection, your agent recorded no trace of damp: the document we signed together mentions neither a leak nor a stain. The photos attached to that document show nothing unusual either. In my three years in this home I never reported anything of the kind, for a simple reason: no leak ever occurred. Nor did anyone ever reproach me for anything before your letter of 15 July. I do not deny that the bathroom is old; I deny having damaged anything in it. I did not ask you to give up a necessary repair: I am asking you not to make me pay for it. I could not accept a deduction based on damage that was never recorded in my presence. I therefore ask you to return my entire deposit within fifteen days. Failing that, I will have no other choice than to refer the matter to the conciliation board. Yours faithfully, Julien Morel. The marker's notes (not counted): 1. Task: facts, what is and is not contested, a precise request with a deadline. 2. Coherence: facts, answer, request. 3. Range: aucune trace, ni… ni, jamais rien, aucune fuite ne, personne ne… jamais rien, je ne saurais, n'a jamais été, ne… plus d'autre… que. 4. Accuracy: one ne each time, no stacked pas, a scope contrast. 5. Register: formal and firm, ne always written.",
  watchFor: [
    { pattern: 'Pas stacked on another negative word (je n’ai pas rien, pas personne, pas jamais, pas aucun).', criterion: 'correction', feedback: 'Pas reste dehors : rien, personne, jamais ou aucun ont déjà pris sa place. Je n’ai rien reçu.', ref: 'a5-piege' },
    { pattern: 'A combination in the wrong order (aucun plus, jamais personne plus, rien jamais).', criterion: 'correction', feedback: 'Plus, puis jamais, puis rien, personne ou aucun : je n’ai plus jamais rien reçu.', ref: 'a2-erreurs' },
    { pattern: 'A negative word on the wrong side of the participle (je n’ai vu rien, je n’ai personne vu).', criterion: 'correction', feedback: 'Plus, jamais et rien avant le participe ; personne et aucun après.', ref: 'a3-piege' },
    { pattern: 'Ne or pas added after sans, or personne put before an infinitive (sans ne rien dire, ne personne voir).', criterion: 'correction', feedback: 'Sans tient la place de ne ; personne suit l’infinitif.', ref: 'a4-erreurs' },
    { pattern: 'A negative subject with pas, or without ne (personne n’a pas, aucune facture correspond).', criterion: 'correction', feedback: 'Sujet négatif : ne devant le verbe, jamais pas.', ref: 'a6-erreurs' },
    { pattern: 'Aussi after a negative clause instead of non plus.', criterion: 'correction', feedback: 'Après une négation : non plus.', ref: 'a5-trier' },
    { pattern: 'Ne dropped in writing (j’ai jamais rien reçu, y a plus personne, personne m’a rien dit).', criterion: 'registre', feedback: 'À l’écrit, garde ne : je n’ai jamais rien reçu.', ref: 'a10-piege' },
    { pattern: 'No scope contrast, or a negation that denies the wrong thing (a request denied where one was made).', criterion: 'tache', feedback: 'Place la négation sur ce que tu nies vraiment : la demande ou l’action.', ref: 'a9-cartes' },
    { pattern: 'Fewer than five different combined or formal negations, or the same one repeated.', criterion: 'etendue', feedback: 'Varie : plus jamais, personne ne, aucun… ne, ni… ni, nullement, je ne saurais.', ref: 'a11-plan' },
    { pattern: 'Guère, nullement or aucunement stacked with pas, or ne… point in a modern letter.', criterion: 'registre', feedback: 'Nullement et guère remplacent pas ; point est littéraire : garde nullement ou aucunement.', ref: 'a8-erreurs' },
    { pattern: 'No clear request or deadline, or facts and demands mixed together.', criterion: 'coherence', feedback: 'Les faits, puis ce que tu contestes, puis ta demande avec un délai.', ref: 'a11-lecture' },
    { pattern: 'An aggressive or familiar tone (insults, du coup, exclamation marks) instead of firm precision.', criterion: 'registre', feedback: 'Une lettre de contestation nie avec précision, sans colère.', ref: 'a11-lecture' },
  ],
  graderNotes: [
    'Count the words of the body only: the object line, the greeting, the closing formula and the signature do not count. 200 to 250 with 10% tolerance (180 to 275) before criterion « tache » loses a point. responseSpec allows 275.',
    'SPOKEN-VARIANT DECISION (gate B2-2, Paul 2026-09-29): the written norm is what is taught and tested. A dropped ne (j’ai jamais rien vu, personne m’a rien dit) is a spoken form: name it in the feedback and remove at most ONE point in total for it, however often it occurs. Pas stacked on another negative word (je n’ai pas rien vu) is NOT a variant: it is an error and is marked as one.',
    'Accept both orders where both are correct: n’avoir rien vu and ne rien avoir vu; plus jamais and jamais plus (formal). Accept je ne peux vous répondre as well as je ne puis.',
    'These are CORRECT and must not be marked as stacking: ce n’est pas rien (it matters), pas un seul, pas une seule fois, pas du tout, pas encore, pas… non plus, ne… pas que (not only), personne n’a rien vu, aucun… ne… jamais.',
    'Ni… ni… ne takes the plural as the rule; accept the singular when only one of the two could act. Tous… ne… pas is accepted; if the meaning is unclear, suggest ne… pas tous or aucun, with no point lost unless the reader cannot tell.',
    'The ne explétif (avant qu’il ne, à moins que… ne, craindre que… ne, plus… qu’on ne le pense) is neither required nor penalised; it counts towards range only if a real negation is also there.',
    'Range counts each DIFFERENT combined or formal negation once. Single negative words from lesson 20 in B1 (ne… rien, ne… personne alone) and plain ne… pas count only when combined (plus rien, jamais personne, personne… rien) or formal (nullement, guère, je ne saurais).',
    'Regional usage is accepted: dépôt de garantie, caution or garantie de loyer; courriel; fin de semaine; septante. Writer gender is unknown: judge agreement for internal consistency only.',
    'Feedback language: natural B2 French, addressed as « tu », with one short English gloss allowed per comment. Name the section to revisit from watchFor.ref. Cite other lessons by trail position (« la leçon 20 du B1 »), never by id.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['vide', 'portee'],
};

/** Say the lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes négations à voix haute',
  frSub: 'Un seul ne, et le mot juste',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id) && (SEED.get(id)?.drills ?? []).includes('voiceflash')),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['vide', 'oral'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-ordre',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: "l'ordre", v: 'plus, jamais, puis le reste', say: fr(E(1422)),
      detail: { title: "L'ordre", body: 'Plus, puis jamais, puis rien, personne, aucun, nulle part, ni… ni ou que. Jamais plus : soutenu. EN: plus, jamais, then the rest.', say: fr(E(1423)) } },
    { k: 'le participe', v: 'rien avant, personne après', say: fr(E(1437)),
      detail: { title: 'Le participe', body: 'Plus, jamais et rien avant le participe ; personne, aucun, nulle part et que après. EN: each word keeps its side.', say: fr(E(1439)) } },
    { k: "l'infinitif", v: 'ne plus rien dire, sans rien', say: fr(E(1456)),
      detail: { title: "L'infinitif", body: "Ne plus jamais rien devant l'infinitif, personne après ; sans tient la place de ne. EN: before the infinitive; sans replaces ne.", say: fr(E(1462)) } },
    { k: 'pas', v: 'jamais avec rien, personne, jamais', say: fr(E(1476)),
      detail: { title: 'Pas', body: "Pas reste dehors ; non plus après une négation ; ce n'est pas rien veut dire c'est important. EN: no stacking.", say: fr(E(1480)) } },
    { k: 'le sujet', v: 'personne ne, aucun… ne, nul ne', say: fr(E(1496)),
      detail: { title: 'Le sujet', body: "Ne devant le verbe, jamais pas, et jamais sans ne à l'écrit. EN: a negative subject.", say: fr(E(1500)) } },
    { k: 'le registre', v: 'guère, nullement, ne seul', say: fr(E(1532)),
      detail: { title: 'Le registre', body: 'Nullement, aucunement, guère ; je ne saurais, je ne puis ; point est littéraire. EN: the formal negations.', say: fr(E(1537)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['ordre', 'soutenu'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu combines plusieurs mots négatifs autour d'un seul ne, dans l'ordre (plus, jamais, puis rien, personne ou aucun), tu les places autour du participe et devant l'infinitif, et tu laisses sans prendre la place de ne. Tu fais d'un mot négatif le sujet, tu combines la restriction (plus que, jamais que, pas que), tu choisis nullement, guère ou je ne saurais dans une lettre, et tu places la négation sur ce que tu nies vraiment. Le piège qui reste, c'est le pas de trop : je n'ai pas rien vu, personne n'est pas venu. Avant l'examen, relis ta lettre, entoure chaque ne, et vérifie qu'aucun pas ne s'ajoute à un autre mot négatif. EN: Circle every ne in your letter and check that no pas sits beside another negative word.",
  stats: [
    { k: "L'ordre", v: 'plus jamais rien' },
    { k: 'La place', v: 'rien avant, personne après' },
    { k: 'Le sujet', v: 'personne n’a rien vu' },
    { k: 'La portée', v: 'pas tous, aucun' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz, ELEVEN rounds of eight: one per act from 2 to 10, a round that
 *  recycles lesson 20 in B1 and lessons 1, 6, 11, 14, 15 and 16 in B2 (named
 *  in each question), and an exam-format round (DELF B2, TCF). `fold()`
 *  strips accents, commas, apostrophes, hyphens and SPACES, so every typed
 *  answer turns on a word, its order or its presence, and every equally
 *  correct answer is listed in `accept`. Order errors use ORDRE_Q (« avec
 *  les mêmes mots »), extra-word errors TROP_Q, so the correction is
 *  determined. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, more: string[] = []): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer, ...more], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const ES_Q = 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.';
const ORDRE_Q = "L'ordre ne va pas. Écris la phrase correcte, avec les mêmes mots. EN: The order is wrong; write it correctly with the same words.";
const TROP_Q = 'Un mot est de trop. Écris la phrase correcte. EN: One word too many; write the sentence correctly.';
const eS = (prompt: string, answer: string, why: string, ref: string, more: string[] = [], q: string = ES_Q): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer, ...more], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const PC_Q = 'Mets la phrase au passé composé, et écris-la.';
const ECRIT_Q = "Écris la phrase à l'écrit, avec ne.";

const MESSAGE_DELF = "Bonjour, je vous appelle au sujet de la facture de mars. Je ne conteste pas l'abonnement, que je paie depuis des années. En revanche, je n'ai jamais demandé l'option sport, et personne ne m'en a jamais parlé.";

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r2-ordre', label: 'Plusieurs mots, un seul ne', targets: ['ordre-renverse'],
      questions: [
        mc('« Il ne reste … place pour samedi. »', ['plus aucune', 'aucune plus', 'pas aucune'], 0, 'Plus d’abord, puis aucune ; jamais pas avec aucune. EN: plus aucune.', 'a2-table'),
        mc('Quel ordre est correct ?', ['On ne voit plus jamais personne.', 'On ne voit personne plus jamais.', 'On ne voit jamais personne plus.'], 0, 'Plus, puis jamais, puis personne. EN: plus jamais personne.', 'a2-construire'),
        tI("Écris la phrase avec plus et jamais, dans l'ordre courant.", 'Je ne vais (plus + jamais) nulle part sans mon téléphone.', fr(E(1428)), 'Plus jamais, puis nulle part. EN: plus jamais nulle part.', 'a2-construire'),
        tI("Ajoute plus à la négation, dans l'ordre courant, et écris la phrase.", 'Il ne dit jamais rien de précis.', 'Il ne dit plus jamais rien de précis.', 'Plus avant jamais. EN: plus jamais rien.', 'a2-table'),
        tI("Complète avec plus rien et l'adjectif entre parenthèses, et écris la phrase.", "Il n'y a ___ dans ce quartier. (gratuit)", fr(E(1420)), 'Rien de + adjectif, au masculin singulier. EN: rien de gratuit.', 'a2-cartes'),
        eS('Il ne reste aucune plus place pour samedi.', fr(E(1427)), 'Plus avant aucune. EN: plus aucune.', 'a2-erreurs', [], ORDRE_Q),
        eS('La gare n’a ni guichet plus ni salle d’attente.', fr(E(1418)), 'Plus devant le premier ni. EN: plus ni… ni.', 'a2-erreurs', [], ORDRE_Q),
        lC('Écoute. Dans quel ordre viennent les mots négatifs ?', fr(E(1423)), ['plus, jamais, aucun', 'jamais, plus, aucun', 'aucun, plus, jamais'], 0, 'Plus jamais aucun relevé. EN: plus, jamais, aucun.', 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-participe', label: 'Au passé composé', targets: ['participe-mal-place'],
      questions: [
        mc('« Je n’ai … . » (plus + voir + personne)', ['plus vu personne', 'plus personne vu', 'vu plus personne'], 0, 'Plus avant le participe, personne après. EN: plus vu personne.', 'a3-cartes'),
        mc('« Je n’ai … de tel. » (jamais + rien + signer)', ['jamais rien signé', 'jamais signé rien', 'rien jamais signé'], 0, 'Jamais et rien avant le participe. EN: jamais rien signé.', 'a3-cartes'),
        mc('« Nous … depuis juin. » (plus + recevoir + aucune facture)', ['n’avons plus reçu aucune facture', 'n’avons aucune facture plus reçu', 'n’avons plus aucune reçu facture'], 0, 'Aucune + nom après le participe. EN: after the participle.', 'a3-construire'),
        tI(PC_Q, 'Je ne vois plus personne après vingt heures.', fr(E(1437)), 'Plus avant vu, personne après. EN: plus vu personne.', 'a3-construire'),
        tI(PC_Q, 'Il ne me dit jamais rien de ce contrat.', fr(E(1451)), 'Jamais rien avant dit ; de ce contrat après. EN: jamais rien dit.', 'a3-construire'),
        tI(PC_Q, 'Je ne vois rien de suspect.', fr(E(1446)), 'Rien avant vu, de suspect après. EN: rien vu de suspect.', 'a3-cartes'),
        eS('Ils ne sont revenus plus jamais au magasin.', fr(E(1452)), 'Plus jamais avant le participe. EN: plus jamais revenus.', 'a3-piege', [], ORDRE_Q),
        lC('Écoute. Qui la personne a-t-elle vu après vingt heures ?', fr(E(1437)), ['personne', 'tout le monde'], 0, 'Plus vu personne. EN: nobody.', 'a3-histoire'),
      ],
    },
    {
      id: 'r4-infinitif', label: "Devant l'infinitif, après sans", targets: ['infinitif-sans-ne'],
      questions: [
        mc('« J’ai promis de … . »', ['ne plus rien dire', 'ne rien plus dire', 'plus ne rien dire'], 0, 'Ne, plus, rien, devant l’infinitif. EN: ne plus rien dire.', 'a4-cartes'),
        mc('« Elle a choisi de … . »', ['ne plus voir personne', 'ne plus personne voir', 'ne personne plus voir'], 0, 'Personne reste après l’infinitif. EN: ne plus voir personne.', 'a4-cartes'),
        mc('« Il est parti … . »', ['sans rien payer', 'sans ne rien payer', 'sans pas rien payer'], 0, 'Sans tient la place de ne. EN: sans rien payer.', 'a4-construire'),
        tI('Complète avec ne, plus et rien, et écris la phrase.', 'Merci de ___ déposer devant la porte.', fr(E(1469)), 'Tout devant l’infinitif. EN: ne plus rien déposer.', 'a4-construire'),
        tI("Réécris avec un infinitif passé après affirme.", "Il affirme qu'il n'a rien vu.", fr(E(1459)), 'N’avoir rien vu, ou ne rien avoir vu : les deux. EN: both orders.', 'a4-cartes', [fr(E(1460))]),
        tI('Relie les deux phrases avec sans, et écris une seule phrase.', "Elle a quitté la réunion. Elle n'a salué personne.", fr(E(1463)), 'Sans + infinitif, personne après. EN: sans saluer personne.', 'a4-construire', ["Elle a quitté la réunion sans avoir salué personne."]),
        eS('Il travaille ici depuis dix ans sans ne jamais se plaindre.', fr(E(1465)), 'Pas de ne après sans. EN: sans jamais.', 'a4-erreurs', [], TROP_Q),
        lC('Écoute. À quoi la personne s’engage-t-elle ?', fr(E(1458)), ['ne plus jamais rien commander', 'commander moins souvent'], 0, 'Ne plus jamais rien commander. EN: never to order again.', 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-empilement', label: 'Pas reste dehors', targets: ['pas-empile'],
      questions: [
        mc('« Je n’ai … vu dans le couloir. »', ['rien', 'pas rien'], 0, 'Rien seul, sans pas. EN: rien.', 'a5-cartes'),
        mc('« Trois mois de retard, ce n’est pas rien » veut dire…', ['c’est important', 'ce n’est rien du tout'], 0, 'Une expression figée. EN: it matters.', 'a5-cartes'),
        mc('« Ma voisine n’a rien entendu, et moi … »', ['non plus', 'aussi'], 0, 'Après une négation : non plus. EN: non plus.', 'a5-trier'),
        tI('Ajoute non plus, et écris la phrase.', "Je n'ai pas vu la camionnette.", fr(E(1481)), 'Non plus après une négation. EN: non plus.', 'a5-cartes', ["Je n'ai pas vu non plus la camionnette.", "Je n'ai pas non plus vu la camionnette."]),
        eS("Il n'y avait pas personne dans le couloir.", fr(E(1477)), 'Personne remplace pas. EN: no pas.', 'a5-piege', [], TROP_Q),
        eS("Je n'ai pas reçu aucun appel ce jour-là.", fr(E(1489)), 'Aucun remplace pas. EN: no pas.', 'a5-piege', [], TROP_Q),
        eS("Je ne l'avais pas jamais vu avant ce jour.", fr(E(1478)), 'Jamais remplace pas. EN: no pas.', 'a5-piege', ["Je ne l'avais jamais vue avant ce jour.", "Je ne l'avais pas vu avant ce jour.", "Je ne l'avais pas vue avant ce jour."], TROP_Q),
        lC('Écoute. La personne a-t-elle reçu des appels ?', fr(E(1492)), ['non, aucun', 'oui, un seul'], 0, 'Pas un seul appel : aucun. EN: none.', 'a5-trier'),
      ],
    },
    {
      id: 'r6-sujet', label: 'Le sujet négatif', targets: ['sujet-bancal'],
      questions: [
        mc('« Personne … »', ['n’est venu', 'n’est pas venu', 'est pas venu'], 0, 'Ne devant le verbe, sans pas. EN: n’est venu.', 'a6-table'),
        mc('« Ni le gardien ni les voisins … rien entendu. »', ['n’ont', 'n’a', 'ont'], 0, 'Deux sujets, dont un pluriel : n’ont. EN: plural, with ne.', 'a6-construire'),
        mc('« Nul n’est censé ignorer la loi » : quel registre ?', ['soutenu', 'familier'], 0, 'Nul ne : une maxime soutenue. EN: formal.', 'a6-table'),
        tI('Commence par personne, et écris la phrase.', "On ne m'a jamais rien demandé.", fr(E(1502)), 'Personne ne… jamais rien, un seul ne. EN: personne ne m’a jamais rien demandé.', 'a6-construire'),
        tI('Mets le verbe au passé composé, avec ne, et écris la phrase.', 'Aucun de nous (remarquer) rien.', fr(E(1508)), 'Aucun, singulier ; ne devant l’auxiliaire. EN: n’a rien remarqué.', 'a6-construire'),
        eS("Personne n'a pas rien vu.", fr(E(1496)), 'Personne et rien suffisent. EN: no pas.', 'a6-erreurs', [], TROP_Q),
        eS('Aucune de ces factures correspond à ma consommation.', fr(E(1503)), 'À l’écrit, ne devant le verbe. EN: ne correspond.', 'a6-erreurs', [], 'Dans une lettre, il manque un mot. Écris la phrase correcte. EN: In a letter, one word is missing; write it correctly.'),
        lC('Écoute. Combien de personnes répondent encore ?', fr(E(1501)), ['aucune', 'une seule'], 0, 'Plus personne ne répond. EN: no one.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-restriction', label: 'Plus que, jamais que, pas que', targets: ['restriction-confondue'],
      questions: [
        mc('« Il ne reste plus que deux places » : combien de places ?', ['deux', 'plus de deux', 'aucune'], 0, 'Plus que : seulement, désormais. EN: two.', 'a7-cartes'),
        mc('« Il n’y a pas que l’argent » veut dire…', ['l’argent n’est pas la seule chose', 'l’argent ne compte pas'], 0, 'Pas que : pas seulement. EN: not only money.', 'a7-cartes'),
        mc('« Ce n’est jamais qu’une facture de plus » : le ton ?', ['ce n’est pas si grave', 'c’est la première facture'], 0, 'Jamais que minimise. EN: not a big deal.', 'a7-cartes'),
        tI('Complète avec plus que, et écris la phrase.', 'Il ne me reste ___ cent euros.', fr(E(1528)), 'Plus que : seulement, désormais. EN: plus que.', 'a7-construire'),
        tI('Réécris avec ne… plus que.', "Maintenant, je paie seulement l'abonnement de base.", "Maintenant, je ne paie plus que l'abonnement de base.", 'Plus que remplace seulement. EN: ne… plus que.', 'a7-construire', [fr(E(1517))]),
        eS('Je ne conteste pas seulement que le montant : je conteste aussi les frais.', fr(E(1521)), 'Pas que ou pas seulement : un seul des deux. EN: one or the other.', 'a7-piege', ['Je ne conteste pas seulement le montant : je conteste aussi les frais.'], TROP_Q),
        eS("Depuis le procès, elle n'a plus qu'à son avocate parlé.", fr(E(1522)), 'Que et son complément après le participe. EN: parlé qu’à.', 'a7-piege', [], ORDRE_Q),
        lC('Écoute. Qu’entend-on encore ?', fr(E(1523)), ['la pluie, seulement', 'la pluie et le vent'], 0, 'Plus que la pluie. EN: only the rain.', 'a7-histoire'),
      ],
    },
    {
      id: 'r8-soutenu', label: 'Le registre soutenu', targets: ['registre-mal-choisi'],
      questions: [
        mc('Dans une lettre, pour dire « pas du tout » :', ['nullement', 'pas jamais', 'guère pas'], 0, 'Nullement, ou aucunement. EN: nullement.', 'a8-table'),
        mc('« Je ne saurais accepter ces frais » veut dire…', ['je refuse ces frais, poliment', 'je ne sais pas si j’accepte'], 0, 'Je ne saurais : je ne peux pas. EN: I cannot accept.', 'a8-cartes'),
        mc('« Elle ne sort plus guère » :', ['elle sort très peu, désormais', 'elle ne sort plus du tout', 'elle sort de plus en plus'], 0, 'Plus guère : presque plus. EN: hardly any more.', 'a8-table'),
        tI('Réécris pour une lettre, avec ne seul devant pouvoir.', 'Je ne peux pas vous répondre avant lundi.', fr(E(1540)), 'Ne seul : je ne puis, ou je ne peux. EN: ne alone.', 'a8-cartes', ['Je ne peux vous répondre avant lundi.']),
        tI('Réécris avec nullement.', 'Je ne conteste pas du tout la facture de mars.', fr(E(1532)), 'Nullement remplace pas du tout. EN: nullement.', 'a8-table'),
        eS("Il n'a guère pas dormi cette nuit-là.", fr(E(1534)), 'Guère remplace pas. EN: no pas.', 'a8-erreurs', ["Il n'a pas dormi cette nuit-là."], TROP_Q),
        eS("Ce retard n'est aucunement pas de mon fait.", fr(E(1545)), 'Aucunement remplace pas. EN: no pas.', 'a8-erreurs', ["Ce retard n'est pas de mon fait."], TROP_Q),
        lC('Écoute. Quel est le registre ?', fr(E(1540)), ['soutenu', 'familier'], 0, 'Je ne puis : très soutenu. EN: formal.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-portee', label: 'La portée', targets: ['portee-deplacee'],
      questions: [
        mc('« Je ne vous ai pas demandé de résilier » : y a-t-il eu une demande ?', ['non, aucune demande', 'oui, une demande de ne pas résilier'], 0, 'La négation touche demander. EN: no request.', 'a9-cartes'),
        mc('« Les voisins ne sont pas tous venus » :', ['certains sont venus', 'aucun n’est venu'], 0, 'Pas tous : une partie. EN: some came.', 'a9-cartes'),
        mc('« Je n’ai toujours pas reçu le remboursement » :', ['je l’attends encore', 'je le reçois parfois'], 0, 'Toujours pas : pas encore. EN: still waiting.', 'a9-trier'),
        mc('« Il n’est pas parti parce qu’il était malade, mais parce qu’il s’ennuyait » : est-il parti ?', ['oui', 'non'], 0, 'La négation touche la cause. EN: yes, he left.', 'a9-trier'),
        tI('Réécris pour dire zéro, avec aucun comme sujet.', 'Les voisins ne sont pas tous venus.', fr(E(1557)), 'Aucun : zéro. EN: aucun voisin.', 'a9-cartes', ["Aucun des voisins n'est venu."]),
        tI('Transforme : cette fois, tu as fait une demande, celle de ne pas résilier.', 'Je ne vous ai pas demandé de résilier mon contrat.', fr(E(1553)), 'Ne pas devant l’infinitif : une demande. EN: de ne pas résilier.', 'a9-trier', ['Je vous ai demandé de ne pas le résilier.']),
        eS('Je vous ai demandé de ne résilier pas mon contrat.', fr(E(1553)), 'Ne pas, ensemble, devant l’infinitif. EN: ne pas résilier.', 'a9-erreurs', [], ORDRE_Q),
        lC('Écoute. La personne a-t-elle tout payé ?', fr(E(1561)), ['non : une partie reste à payer', 'oui, tout'], 0, 'Pas tout : une partie seulement. EN: not everything.', 'a9-ecoute'),
      ],
    },
    {
      id: 'r10-oral', label: 'Le ne qui ne nie pas', targets: ['ne-mal-lu'],
      questions: [
        mc('« Partons avant qu’il ne pleuve » : il pleut déjà ?', ['non, pas encore', 'oui'], 0, 'Le ne explétif ne nie rien. EN: not yet.', 'a10-cartes'),
        mc('« Je crains que la facture ne soit déjà partie » : la personne a peur que…', ['la facture soit partie', 'la facture ne soit pas partie'], 0, 'Sans pas, ce ne ne nie rien. EN: that it has gone.', 'a10-cartes'),
        mc('« J’en veux plus, s’il vous plaît », avec le s qu’on entend :', ['il en veut davantage', 'il n’en veut plus'], 0, 'On entend le s : davantage. EN: more.', 'a10-trier'),
        tI(ECRIT_Q, 'Y a plus personne au guichet.', fr(E(1580)), 'À l’écrit : il n’y a plus personne. EN: il n’y a.', 'a10-piege'),
        tI(ECRIT_Q, "Personne m'a rien dit.", fr(E(1585)), 'Sujet négatif : ne devant le verbe. EN: ne m’a.', 'a10-piege'),
        eS("J'ai jamais rien vu de pareil.", fr(E(1578)), 'À l’écrit, ne reste. EN: je n’ai.', 'a10-piege', [], 'Dans une lettre, cette forme est orale. Écris la phrase correcte. EN: In a letter this form is spoken; write it correctly.'),
        eS('Je crains que la facture soit pas encore partie.', fr(E(1572)), 'Une vraie négation : ne… pas. EN: ne… pas.', 'a10-cartes', [], 'Il manque un mot pour une vraie négation. Écris la phrase correcte. EN: A word is missing for a real negation.'),
        lC('Écoute. Dans cette phrase, le ne est-il une vraie négation ?', fr(E(1573)), ['non, il ne nie rien', 'oui : ce n’est pas cher'], 0, 'Un comparatif : ne explétif. EN: no.', 'a10-trier'),
      ],
    },
    {
      id: 'r11-recyclage', label: 'Le B1 et le B2 en renfort', targets: ['recyclage'],
      questions: [
        mc(`${Cap(NEG_B1_REF)} : « Personne ne dit … rien. »`, ['jamais', 'pas'], 0, `« ${B120_REFRAME} » EN: ${B120_REFRAME_EN}`, 'a2-rappel'),
        mc(`${Cap(MODES_REF)} : à l'écrit, « Je ne crois pas qu'il … à la réunion. »`, ['vienne', 'vient'], 0, `« ${B206_REFRAME} » EN: ${B206_REFRAME_EN}`, 'a9-exemples'),
        tI(`${Cap(INFINITIVES_REF)} : réécris en plaçant rien avant avoir.`, "J'ai été débité deux fois sans avoir rien reçu.", "J'ai été débité deux fois sans rien avoir reçu.", `« ${B214_REFRAME} » EN: ${B214_REFRAME_EN}`, 'a4-exemples', ["J'ai été débitée deux fois sans rien avoir reçu."]),
        mc(`${Cap(TONIQUES_REF)} : « Lui … n'a rien dit. »`, ['non plus', 'aussi'], 0, `« ${B211_REFRAME} » EN: ${B211_REFRAME_EN}`, 'a5-exemples'),
        lC(`Écoute. ${Cap(CONCESSION_REF)} : la personne a-t-elle trouvé une ville ?`, fr(CL(2004)), ['non, aucune', 'oui, une seule'], 0, `« ${B216_REFRAME} » EN: ${B216_REFRAME_EN}`, 'a1-lecture'),
        tI(`${Cap(PQP_REF)} : mets le verbe au plus-que-parfait, et écris la phrase.`, 'Elle (partir) sans rien dire.', fr(RP1640), 'Était partie, sans rien : sans tient la place de ne. EN: était partie sans rien dire.', 'a4-exemples'),
        mc(`${Cap(CAUSE_REF)} : « Elle était émue au point de … parler. »`, ['ne plus pouvoir', 'ne pouvoir pas plus', 'pas plus pouvoir'], 0, 'Ne plus devant l’infinitif. EN: ne plus pouvoir.', 'a4-cartes'),
        eS("Je n'ai pas jamais rien volé.", fr(NR(1143)), 'Jamais et rien suffisent. EN: no pas.', 'a5-piege', [], `${Cap(NEG_B1_REF)} : un mot est de trop. Écris la phrase correcte. EN: One word too many; write it correctly.`),
      ],
    },
    {
      id: 'r12-examen', label: 'Comme à l’examen', targets: ['lettre-imprecise'],
      questions: [
        mc('Format TCF. Choisissez la bonne réponse : « Je n’ai … reçu de réponse à ma lettre du 2 avril. »', ['toujours pas', 'pas toujours', 'jamais pas', 'plus rien'], 0, 'Une seule lettre, et on attend : toujours pas. EN: still not.', 'a9-cartes'),
        mc('Format TCF : « … n’a répondu à mes trois courriels. »', ['Personne', 'Tout le monde', 'Quelqu’un'], 0, 'Ne sans pas : un sujet négatif. EN: personne.', 'a6-table'),
        mc('Format TCF : « Je ne conteste … le montant de l’abonnement. »', ['nullement', 'pas nullement', 'rien'], 0, 'Nullement remplace pas. EN: nullement.', 'a8-table'),
        mc('Format DELF B2, compréhension écrite. Dans la lettre de Martine Gagnon, « je ne vous ai pas demandé de modifier mon forfait ; je vous ai demandé de ne rien y changer ». Elle veut dire…', ['qu’elle voulait garder son forfait tel quel', 'qu’elle voulait un autre forfait', 'qu’elle n’a jamais appelé'], 0, 'Aucune demande de modification, et même le contraire. EN: keep it as it was.', 'a11-lecture'),
        mc('Format DELF B2, compréhension écrite. Pourquoi Martine Gagnon écrit-elle « je ne conteste nullement le montant de mon abonnement de base » ?', ['pour montrer qu’elle conteste seulement l’ajout', 'pour refuser toute la facture'], 0, 'Elle dit ce qu’elle accepte, pour que sa contestation soit précise. EN: to limit her claim.', 'a11-lecture'),
        tI('Format DELF B2, production. Réécris en une phrase, avec ni… ni…', "Je n'ai pas signé ce bon. Je n'ai pas autorisé ce prélèvement.", fr(E(1599)), 'Ni… ni… devant chaque participe, un seul ne. EN: ni signé ni autorisé.', 'a11-plan'),
        eS("Personne ne m'a pas informé de ce changement de tarif.", fr(E(1591)), 'Sujet négatif : pas de pas. EN: no pas.', 'a6-erreurs', [], 'Format DELF B2, correction. Un mot est de trop : écris la phrase correcte. EN: One word too many; write it correctly.'),
        lC('Format DELF B2, compréhension orale. Écoute ce message. Que conteste la cliente ?', MESSAGE_DELF, ['l’option sport, jamais demandée', 'l’abonnement de base', 'le prix de l’appel'], 0, 'Je n’ai jamais demandé l’option sport. EN: the sport option.', 'a11-scenario'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** The quiz-spread rule is checked on AUTHORED order although LessonRich
 *  reshuffles options on every attempt. So each closed question's options
 *  are ROTATED, `correct` moved in step, onto the least-used slot so far.
 *  The option set and the right answer are unchanged. As b2.16 does. */
function spreadSlots(quiz: Sec<'quiz'>): void {
  const used = [0, 0, 0, 0];
  for (const r of quiz.rounds ?? []) {
    for (const q of r.questions as (QQ & { opts?: string[]; correct?: number })[]) {
      if (!Array.isArray(q.opts) || typeof q.correct !== 'number') continue;
      const n = q.opts.length;
      let target = 0;
      for (let k = 1; k < n; k++) if (used[k] < used[target]) target = k;
      const shift = (target - q.correct + n) % n;
      q.opts = q.opts.map((_, i) => q.opts![(i - shift + n) % n]);
      q.correct = target;
      used[target]++;
    }
  }
}
spreadSlots(A11_QUIZ);

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: 'no … left at all', back: 'plus aucun : il n’y a plus aucun commerce', say: fr(E(1416)) },
    { front: 'I no longer saw anyone', back: 'je n’ai plus vu personne', say: fr(E(1437)) },
    { front: 'to say nothing more', back: 'ne plus rien dire', say: fr(E(1456)) },
    { front: 'without saying anything', back: 'sans rien dire, jamais sans ne', say: fr(NR(1123)) },
    { front: 'that is no small thing', back: 'ce n’est pas rien', say: fr(E(1480)) },
    { front: 'nobody saw anything', back: 'personne n’a rien vu', say: fr(E(1496)) },
    { front: 'only two left now', back: 'il ne reste plus que deux…', say: fr(E(1516)) },
    { front: 'not at all (in a letter)', back: 'nullement, aucunement', say: fr(E(1532)) },
    { front: 'not all / none', back: 'pas tous / aucun', say: fr(E(1556)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Un seul ne, et le mot juste',
  body: `${REFRAME} Tu as repris les mots négatifs de ${NEG_B1_REF}, l'infinitif de ${INFINITIVES_REF} et le choix du mode de ${MODES_REF}, pour les combiner, les placer, choisir leur registre et dire exactement ce que tu nies. Tu termines ainsi l'unité des relations logiques. La suite, c'est ${NEXT_REF} : le style académique, où chaque affirmation se nuance et se prouve. EN: Next comes academic style, where every claim is nuanced and proved.`,
  points: [
    'Un seul ne ; plus, puis jamais, puis le reste.',
    'Pas ne se joint jamais à rien, personne, jamais, plus ou aucun.',
    'Personne ne, aucun… ne, nul ne : ne devant le verbe, sans pas.',
    'Déplace la négation, et tu nies autre chose.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['vide', 'sujet'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Contester par écrit',
    opener: {
      line: "Une facture pour un service que tu n'as jamais demandé : ici tu écris une lettre qui nie précisément ce qui ne s'est pas passé, puis tu passes l'examen. EN: A bill for a service you never asked for: here you write a letter that denies exactly what did not happen, then you sit the exam.",
      imageRef: 'lessons/negations-combinees/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ta lettre de contestation et passé l'examen : quatre-vingt-huit questions, onze manches. EN: You wrote your letter and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 150,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r5-empilement', 'a11-quiz/r9-portee', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-ordre', title: 'Plus, puis jamais, puis le reste', format: 'mcq' as const, coach: "Plus d'abord, puis jamais, puis rien, personne ou aucun. EN: plus, jamais, then the rest.", q: 'On ne voit … dans cette rue.', opts: ['plus jamais personne', 'personne plus jamais'], correct: 0, why: 'Plus jamais personne. EN: plus jamais personne.', items: [E(1416), E(1418), E(1422), E(1423), E(1427), E(1428)], audio: AUDIO },
  { id: 'd-participe', title: 'Avant ou après le participe', format: 'sort' as const, coach: "Deux piles : le dernier mot négatif va-t-il avant ou après le participe ? EN: before or after the participle?", buckets: ['rien : avant le participe', 'personne, aucun : après'], items: [E(1436), E(1439), E(1446), E(1437), E(1440), E(1447)], audio: AUDIO },
  { id: 'd-infinitif', title: 'Devant l’infinitif, après sans', format: 'mcq' as const, coach: "Ne plus rien devant l'infinitif, personne après, et sans à la place de ne. EN: before the infinitive; sans replaces ne.", q: 'Il est parti … .', opts: ['sans rien payer', 'sans ne rien payer'], correct: 0, why: 'Sans tient la place de ne. EN: sans rien payer.', items: [E(1456), E(1457), E(1458), E(1462), E(1463), E(1465)], audio: AUDIO },
  { id: 'd-pas', title: 'Pas reste dehors', format: 'mcq' as const, coach: "S'il y a rien, personne, jamais, plus ou aucun, efface pas. EN: drop pas beside another negative word.", q: 'Je n’ai … vu dans le couloir.', opts: ['rien', 'pas rien'], correct: 0, why: 'Rien seul. EN: rien.', items: [E(1476), E(1477), E(1478), E(1481), E(1482), E(1489)], audio: AUDIO },
  { id: 'd-sujet', title: 'Un sujet, un seul ne', format: 'flashcard' as const, coach: "Lis chaque phrase et dis-la : ne devant le verbe, jamais de pas. EN: say each one: ne before the verb, never pas.", items: [E(1496), E(1497), E(1498), E(1500), E(1501), E(1502)], audio: AUDIO },
  { id: 'd-restriction', title: 'Seulement, ou pas seulement', format: 'sort' as const, coach: "Deux piles : la phrase dit-elle seulement, ou pas seulement ? EN: only, or not only?", buckets: ['seulement', 'pas seulement'], items: [E(1516), E(1517), E(1519), E(1520), E(1521), E(1530)], audio: AUDIO },
  { id: 'd-soutenu', title: 'Deux registres', format: 'flashcard' as const, coach: "Dis chaque phrase, puis sa version courante : nullement devient pas du tout, je ne saurais devient je ne peux pas. EN: say each one, then its everyday version.", items: [E(1532), E(1533), E(1534), E(1537), E(1540), E(1545)], audio: AUDIO },
  { id: 'd-portee', title: 'La demande ou l’action', format: 'mcq' as const, coach: "Demande-toi ce que la négation touche : le verbe conjugué, ou l'infinitif. EN: what does the negation touch?", q: '« Je vous ai demandé de ne pas résilier » :', opts: ['une demande', 'aucune demande'], correct: 0, why: 'La négation touche résilier. EN: a request.', items: [E(1552), E(1553), E(1556), E(1557), E(1559), E(1560)], audio: AUDIO },
  { id: 'd-oral', title: 'Oral ou écrit', format: 'sort' as const, coach: "Deux piles : la phrase garde-t-elle son ne ? EN: spoken or written?", buckets: ['oral', 'écrit'], items: [E(1577), E(1579), E(1584), E(1578), E(1580), E(1585)], audio: AUDIO },
  { id: 'd-recyclage', title: 'Le B1 et le B2 en renfort', format: 'flashcard' as const, coach: "Six phrases des leçons précédentes : dis chaque négation, puis dis ce qu'elle nie. EN: say each one and what it denies.", items: [NR(1143), OA1826, FP(1277), PE1855, CL(2004), RP1640], audio: AUDIO },
  { id: 'd-lettre', title: 'Nier dans une lettre', format: 'flashcard' as const, coach: "Lis chaque phrase, puis donne la tienne sur le même modèle, pour ta propre lettre. EN: read each one, then make your own.", items: [E(1588), E(1589), E(1590), E(1592), E(1596), E(1597)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'ordre-renverse', description: 'Puts the negative words of a combination in the wrong order (aucun plus, jamais personne plus, rien gratuit without de).', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-ordre', retest: 'd-ordre' },
  { id: 'participe-mal-place', description: 'Puts rien, plus or jamais after the participle, or personne and aucun before it, when several negative words combine.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-participe', retest: 'd-participe' },
  { id: 'infinitif-sans-ne', description: 'Puts personne before an infinitive, splits ne plus rien around it, or adds ne or pas after sans.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-infinitif', retest: 'd-infinitif' },
  { id: 'pas-empile', description: 'Stacks pas on rien, personne, jamais, plus or aucun, or says aussi after a negative clause instead of non plus.', detectOn: ['a5-trier', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-pas', retest: 'd-pas' },
  { id: 'sujet-bancal', description: 'Adds pas to a negative subject, drops ne in writing, or makes aucun plural or ni… ni… singular with a plural member.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-sujet', retest: 'd-sujet' },
  { id: 'restriction-confondue', description: 'Confuses ne… plus que, ne… jamais que and ne… pas que, stacks seulement on que, or puts que before the participle.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-restriction', retest: 'd-restriction' },
  { id: 'registre-mal-choisi', description: 'Stacks pas on guère, nullement or aucunement, misreads ne alone with savoir or cesser, or uses ne… point in a modern letter.', detectOn: ['a8-construire', 'a8-erreurs', 'a8-check', 'a11-mission'], drill: 'd-soutenu', retest: 'd-soutenu' },
  { id: 'portee-deplacee', description: 'Places the negation on the wrong element: denies a request that was made, reads pas tous as aucun, or toujours pas as pas toujours.', detectOn: ['a9-trier', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-portee', retest: 'd-portee' },
  { id: 'ne-mal-lu', description: 'Reads the ne explétif as a negation, forgets pas for a real one after craindre, or drops ne in writing.', detectOn: ['a10-trier', 'a10-piege', 'a10-check', 'a11-mission'], drill: 'd-oral', retest: 'd-oral' },
  { id: 'recyclage', description: 'Loses a contrast this lesson sits on: the negative words of lesson 20 in B1, the mood after je ne crois pas que, the infinitive negation, lui non plus.', detectOn: ['a2-rappel', 'a4-exemples', 'a9-exemples'], drill: 'd-recyclage', retest: 'd-recyclage' },
  { id: 'lettre-imprecise', description: 'In an exam-format letter, denies vaguely: no precise fact denied, no scope contrast, or no clear request and deadline.', detectOn: ['a11-plan', 'a11-scenario', 'a11-mission'], drill: 'd-lettre', retest: 'd-lettre' },
];

/** Missions do not shuffle (MissionRich renders authored order), so every
 *  closed mission item and drill is ROTATED here, `correct` moved in step,
 *  so that each option-count class spreads evenly and no slot repeats more
 *  than twice in a row. Same walk order as `b1-answer-slots.test.ts`. No
 *  text changes; no `why` in this lesson names a position. As b2.16 does. */
function spreadMissions(sections: LessonSection[], drills: LessonDrill[]): void {
  const OPT_KEYS = ['opts', 'options', 'choices', 'answers'];
  const used: Record<number, number[]> = {};
  let last = -1, run = 0;
  const walk = (n: any): void => {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) { n.forEach(walk); return; }
    if (typeof n.correct === 'number') {
      const key = OPT_KEYS.find((k) => Array.isArray(n[k]));
      if (key) {
        const opts: unknown[] = n[key];
        const k = opts.length;
        const u = (used[k] ??= new Array(k).fill(0));
        const order = [...Array(k).keys()].sort((a, b) => u[a] - u[b] || a - b);
        const target = order.find((t) => !(t === last && run >= 2)) ?? order[0];
        const shift = (target - n.correct + k) % k;
        n[key] = opts.map((_, i) => opts[(i - shift + k) % k]);
        n.correct = target;
        u[target]++;
        run = target === last ? run + 1 : 1;
        last = target;
      }
    }
    Object.values(n).forEach(walk);
  };
  for (const s of sections) if (s.type !== 'quiz') walk(s);
  for (const d of drills) walk(d);
}

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS (layer deep: teach and table only). Every sheet is
 *  reached from at least one mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-ordre', 'L’ordre et la place', ['l’ordre des mots négatifs', 'le passé composé', 'l’infinitif et sans'], [
    teach('sheet-ordre-teach', 'Un seul ne, les mots dans l’ordre',
      `« ${B120_REFRAME} » ${REFRAME} Plus vient d'abord, puis jamais, puis rien, personne, aucun, nulle part, ni… ni ou que. Jamais plus existe aussi, en registre soutenu. EN: ${REFRAME_EN}`),
    table('sheet-ordre-table', 'Les combinaisons', ['Combinaison', 'Exemple', 'Registre'], [
      ['plus rien', 'Je ne dis plus rien.', 'courant'],
      ['plus personne', 'Il ne voit plus personne.', 'courant'],
      ['plus aucun', "Il n'y a plus aucun commerce dans ma rue.", 'courant'],
      ['plus nulle part', 'On ne peut plus se garer nulle part.', 'courant'],
      ['plus ni… ni…', "La gare n'a plus ni guichet ni salle d'attente.", 'courant'],
      ['plus jamais rien', 'Je ne dirai plus jamais rien.', 'courant'],
      ['plus jamais personne', 'On ne voit plus jamais personne dans cette rue.', 'courant'],
      ['jamais aucun', "Nous n'avons jamais eu aucun problème.", 'courant'],
      ['jamais plus', 'Je ne la reverrai jamais plus.', 'soutenu'],
      ['rien de, personne d’autre', "Il n'y a plus rien de gratuit ici.", 'courant'],
    ]),
    table('sheet-ordre-place', 'Au passé composé et devant l’infinitif', ['Mot', 'Passé composé', 'Infinitif'], [
      ['plus, jamais, rien', "avant le participe : je n'ai plus jamais rien signé", 'avant : ne plus jamais rien signer'],
      ['personne', "après le participe : je n'ai plus vu personne", 'après : ne plus voir personne'],
      ['aucun + nom', "après : je n'ai reçu aucune facture", 'après : ne faire aucune erreur'],
      ['nulle part', "après : je ne l'ai vu nulle part", 'après : ne plus aller nulle part'],
      ['que', "après : je n'ai plus parlé qu'à elle", "après : ne plus m'écrire qu'à cette adresse"],
      ['rien de + adjectif', "rien avant, de… après : je n'ai rien vu de suspect", 'ne rien voir de suspect'],
      ['infinitif passé', '', "n'avoir rien vu ou ne rien avoir vu ; n'avoir vu personne"],
      ['sans', '', 'sans rien dire, sans voir personne : jamais sans ne, jamais sans pas'],
    ]),
  ]),
  sheet('sheet-pas', 'Pas, que et les expressions figées', ['l’interdit de l’empilement', 'ce n’est pas rien, non plus', 'plus que, jamais que, pas que'], [
    teach('sheet-pas-teach', 'Pas reste dehors',
      "Pas ne se combine jamais avec rien, personne, jamais, plus ou aucun : ces mots ont déjà pris sa place. Il peut en revanche aller avec des mots qui ne sont pas négatifs : pas un seul, pas du tout, pas encore, pas que, pas… non plus. Seule rencontre figée de pas et de rien : ce n'est pas rien, c'est-à-dire c'est important. EN: pas never stacks on a negative word; ce n'est pas rien is a fixed phrase."),
    table('sheet-pas-table', 'Correct ou empilé', ['Phrase', 'Statut', 'Pourquoi'], [
      ["je n'ai pas rien vu", 'faux', 'rien remplace pas'],
      ["il n'y avait pas personne", 'faux', 'personne remplace pas'],
      ["je ne l'avais pas jamais vu", 'faux', 'jamais remplace pas'],
      ["je n'ai pas reçu aucun appel", 'faux', 'aucun remplace pas'],
      ["ce n'est pas rien", 'correct, figé', "c'est important"],
      ["je n'ai pas vu la camionnette non plus", 'correct', 'non plus après une négation'],
      ["je n'ai pas reçu un seul appel", 'correct', 'un seul renforce pas'],
      ["il n'y a pas que l'argent", 'correct', "que n'est pas un mot négatif"],
      ["personne n'a rien vu", 'correct', 'deux mots négatifs, un seul ne, pas de pas'],
    ]),
    table('sheet-pas-restriction', 'La restriction combinée', ['Tournure', 'Sens', 'Exemple'], [
      ['ne… que', `seulement (${RESTRICTION_REF})`, 'Je ne veux que du pain.'],
      ['ne… plus que', 'seulement, désormais', 'Il ne reste plus que deux places.'],
      ['ne… jamais que', "seulement, toujours ; ce n'est pas grave", "Ce n'est jamais qu'une facture de plus."],
      ['ne… pas que', 'pas seulement', "Il n'y a pas que l'argent dans la vie."],
      ['ne… guère que', 'presque seulement (soutenu)', 'Il ne mange guère que du pain.'],
      ['plus que, sans ne', 'une comparaison', 'Je paie plus que lui.'],
    ]),
  ]),
  sheet('sheet-sujet', 'Le sujet négatif et le registre soutenu', ['personne ne, rien ne, aucun… ne', 'nul ne, ni… ni… ne', 'guère, nullement, ne seul'], [
    teach('sheet-sujet-teach', 'Ne devant le verbe, jamais pas',
      "Quand personne, rien, aucun, nul ou ni… ni… est le sujet, ne se place devant le verbe et pas n'entre jamais. Aucun et nul restent au singulier ; ni… ni… prend en général le pluriel (le singulier se trouve quand un seul des deux peut agir). À l'écrit, ne ne tombe jamais. EN: a negative subject takes ne before the verb and never pas."),
    table('sheet-sujet-table', 'Les sujets négatifs', ['Sujet', 'Exemple', 'Registre'], [
      ['personne ne', "Personne n'a rien vu.", 'courant'],
      ['rien ne', "Rien n'a jamais été prouvé.", 'courant'],
      ['aucun… ne', "Aucun témoin ne s'est présenté.", 'courant'],
      ['nul ne', "Nul n'est censé ignorer la loi.", 'soutenu'],
      ['ni… ni… ne', "Ni le gardien ni les voisins n'ont rien entendu.", 'courant'],
      ['plus personne ne', 'Plus personne ne répond à cette adresse.', 'courant'],
      ['jamais personne ne', "Jamais personne ne s'est plaint de ce locataire.", 'soutenu'],
      ['pas un… ne', "Pas un voisin n'a appelé la police.", 'courant'],
    ]),
    table('sheet-sujet-soutenu', 'Le registre soutenu', ['Tournure', 'Sens', 'Exemple'], [
      ['ne… guère', 'à peine, peu', "Il n'a guère dormi cette nuit-là."],
      ['ne… plus guère', 'presque plus', "Elle ne sort plus guère depuis l'hiver."],
      ['ne… nullement', 'pas du tout', 'Je ne conteste nullement la facture de mars.'],
      ['ne… aucunement', 'pas du tout', "Ce retard n'est aucunement de mon fait."],
      ['ne… point', 'pas du tout (littéraire)', 'Je ne le connais point.'],
      ['ne seul + savoir', 'pas', 'Je ne saurais accepter ces frais.'],
      ['ne seul + pouvoir', 'pas', 'Je ne puis vous répondre avant lundi.'],
      ['ne seul + oser, cesser', 'pas', 'Il ne cesse de nous relancer.'],
      ['si je ne me trompe', 'sauf erreur', 'Si je ne me trompe, le contrat a pris fin en mai.'],
      ['à aucun moment', 'jamais (soutenu)', "À aucun moment je n'ai donné mon accord."],
    ]),
  ]),
  sheet('sheet-portee', 'La portée et les faux ne', ['ce que la négation touche', 'le ne explétif', 'le ne qui tombe à l’oral'], [
    teach('sheet-portee-teach', 'Déplace la négation, tu nies autre chose',
      `Une négation nie ce qu'elle touche : la demande ou l'action, tous ou une partie, parfois ou pas encore. « ${B206_REFRAME} » Le ne explétif, présenté dans ${TEMPS_REF}, ne nie rien : enlève-le, le sens reste. À l'oral, ne tombe souvent ; à l'écrit, il reste toujours. EN: move the negation and you deny something else.`),
    table('sheet-portee-paires', 'Paires de portée', ['Phrase', 'Ce qui est nié', 'Sens'], [
      ['je ne vous ai pas demandé de résilier', 'la demande', 'aucune demande'],
      ['je vous ai demandé de ne pas résilier', "l'action", 'une demande'],
      ["je ne pense pas qu'il ait signé", 'penser', 'un doute, au subjonctif'],
      ["je pense qu'il n'a pas signé", 'signer', 'une affirmation'],
      ['les voisins ne sont pas tous venus', 'tous', 'certains sont venus'],
      ["aucun voisin n'est venu", 'venir', 'zéro'],
      ["je n'ai toujours pas reçu", 'recevoir, encore', 'pas encore'],
      ['je ne reçois pas toujours', 'toujours', 'parfois'],
      ["je n'ai pas tout payé", 'tout', 'une partie'],
      ["il n'est pas parti parce qu'il était malade, mais…", 'la cause', 'il est parti'],
    ]),
    table('sheet-portee-ne', 'Le ne explétif et l’oral', ['Forme', 'Statut', 'À retenir'], [
      ["avant qu'il ne pleuve", 'ne explétif, soutenu', "ne nie rien ; avant qu'il pleuve est courant"],
      ["à moins qu'il n'y ait un problème", 'ne explétif', 'ne nie rien'],
      ["c'est plus cher qu'on ne le pense", 'ne explétif', 'après un comparatif'],
      ["je crains qu'elle ne soit partie", 'ne explétif', "j'ai peur qu'elle soit partie"],
      ["je crains qu'elle ne soit pas partie", 'vraie négation', 'avec pas'],
      ["j'ai jamais rien vu", 'oral', "à l'écrit : je n'ai jamais rien vu"],
      ["j'en veux plus", 'oral, ambigu', 'sans le s : plus du tout ; avec le s : davantage'],
    ]),
  ]),
  sheet('sheet-lettre', 'La lettre de contestation (DELF B2)', ['le plan', 'les phrases utiles', 'la liste de contrôle'], [
    teach('sheet-lettre-teach', 'Nier précisément, puis demander',
      "Une lettre de contestation convainc par sa précision : elle dit ce qui ne s'est pas passé, avec des négations exactes, ce que tu ne contestes pas, et ce que tu demandes, avec un délai. Le ton reste ferme et poli ; ne est toujours écrit. EN: deny precisely, say what you accept, ask clearly."),
    table('sheet-lettre-plan', 'Le plan', ['Partie', 'Tournure', 'Exemple'], [
      ["l'objet", 'contestation de…', 'Objet : contestation de la facture du 12 mars.'],
      ['le fait contesté', 'je conteste formellement', 'Je conteste formellement la facture du 12 mars.'],
      ["ce qui ne s'est pas passé", "je n'ai jamais…, personne ne…", "Je n'ai jamais souscrit à cette option."],
      ['ce que tu acceptes', 'je ne conteste nullement', "Je ne conteste nullement le montant de l'abonnement."],
      ["ce qu'on te fait dire", 'je ne vous ai pas demandé de…', 'Je ne vous ai pas demandé de résilier mon contrat.'],
      ['la demande et le délai', 'je vous prie donc de…', "Je vous prie donc d'annuler ces frais."],
    ]),
    table('sheet-lettre-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Un seul ne par négation', 'entoure chaque ne'],
      ['Aucun pas à côté de rien, personne, jamais', 'efface le pas de trop'],
      ['Chaque mot à sa place', 'rien avant le participe, personne après'],
      ['Un contraste de portée', 'je ne vous ai pas demandé de… ; de ne pas…'],
      ['Ne toujours écrit', "je n'ai jamais rien reçu"],
      ['Une demande et un délai', 'je vous prie donc de…, sous quinze jours'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

spreadMissions(SECTIONS, DRILL_LIST);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !OWN.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b2-21-[a-z0-9-]+/g) ?? [])];

const ONE_TAKE = 'REQUIRED FOR THE EAR MISSION: ONE TAKE, ONE VOICE, lines in authored order, at natural B2 speed.';
const EXERCISE = 'One voice, read as written WITH the bracketed infinitives, the word lists and the blanks spoken as printed: this is the exercise text, not the answer.';
const TRAP = "The audio step plays each card's CORRECT sentence. Six lines, one voice. The wrong versions in promptSound are NEVER spoken.";
const REC_DESC: Record<string, string> = {
  'rec-b2-21-deposition': "Nadia Haddad's witness statement (act 1), one female voice with a light Belgian accent, one take, read as a statement being read back at a police counter: even, precise, a little tired. The sentence « je n'ai pas dit que j'avais vu le conducteur : j'ai dit que je ne l'avais pas vu » is read slowly, with a clear pause at the colon.",
  'rec-b2-21-rappel': 'The four recap cards (act 2). One coach voice, calm. Card one quotes lesson 20 in B1; read the quotation as a quotation.',
  'rec-b2-21-cartes-ordre': 'The four new combination cards (act 2). One voice. Card three, « Je ne la reverrai jamais plus », is read with the slight solemnity of formal style, stress on plus.',
  'rec-b2-21-quartier-ecoute': `${ONE_TAKE} Eight lines, a woman describing her emptying street in Montréal, a little wistful. A Québec accent is welcome.`,
  'rec-b2-21-rochat': 'M. Rochat and the inspector (act 3), Lausanne, two voices, one take, a police office. Rochat speaks slowly and exactly; the coach voice reads the comments. A Swiss accent is welcome.',
  'rec-b2-21-cartes-participe': 'The four participle cards (act 3). One voice. Keep « plus jamais rien » as one group before the participle, with no pause inside it.',
  'rec-b2-21-piege-participe': TRAP,
  'rec-b2-21-texte-a3': `M. Rochat's statement (act 3). ${EXERCISE}`,
  'rec-b2-21-lea': 'Léa and her friend Inès on the phone (act 4), Geneva, two voices, one take, friendly and a little embarrassed. The coach lines are read by Inès.',
  'rec-b2-21-cartes-infinitif': 'The four infinitive cards (act 4). One voice. Card three reads « n\'avoir rien vu » with the elision clearly heard.',
  'rec-b2-21-promesses-ecoute': `${ONE_TAKE} Eight lines, neutral, mixed voices welcome (male and female), no music.`,
  'rec-b2-21-texte-a4': `Léa's email (act 4). ${EXERCISE}`,
  'rec-b2-21-hugo': 'Hugo and Claire (act 5), Lyon, two voices, one take, an office after hours. Claire is kind but exact; Hugo is anxious. Claire quotes « pas rien » as a quotation, not as her own French.',
  'rec-b2-21-cartes-pas': 'The four stacking cards (act 5). One voice. Card two, « Trois mois de retard, ce n\'est pas rien », is read with the weight of the fixed phrase: it means « it is serious ».',
  'rec-b2-21-piege-pas': TRAP,
  'rec-b2-21-texte-a5': "Hugo's email (act 5), one male voice, read as written WITH its mistakes: the correction is the exercise. Read the faulty negations naturally, without stressing them.",
  'rec-b2-21-conseil': 'Mrs Tremblay and Mr Nguyen (act 6), Montréal, two voices, one take, a building meeting room. Mrs Tremblay dictates firmly; Québec accents welcome.',
  'rec-b2-21-conseil-ecoute': `${ONE_TAKE} Eight lines from a residents' meeting, two or three voices, measured, no overlap.`,
  'rec-b2-21-texte-a6': `The building council's minutes (act 6). ${EXERCISE}`,
  'rec-b2-21-rose': 'Rose and a coach voice (act 7), Gaspésie, one take, a kitchen by the sea. Rose is eighty-three, warm, unhurried, with a Gaspé accent; she laughs softly at « il n\'y a pas que l\'argent ».',
  'rec-b2-21-cartes-restriction': 'The four restriction cards (act 7). One voice. « Plus que » is read as one group, never with a pause between plus and que.',
  'rec-b2-21-piege-restriction': TRAP,
  'rec-b2-21-texte-a7': `The Gaspésie memory (act 7). ${EXERCISE}`,
  'rec-b2-21-dubois': 'Maître Dubois and Arnaud (act 8), Namur, two voices, one take, a notary\'s office. Dubois dictates in a measured, formal voice; Arnaud is younger and plainer. A Belgian accent is welcome.',
  'rec-b2-21-cartes-soutenu': 'The four « ne alone » cards (act 8). One voice, formal. « Je ne puis » is pronounced [ʒə nə pɥi].',
  'rec-b2-21-dubois-ecoute': `${ONE_TAKE} Eight lines of a dictated letter, one formal voice, the pace of dictation.`,
  'rec-b2-21-texte-a8': `Maître Dubois's reply (act 8), one voice, read as written with every « pas du tout » and the words in brackets: the rewrite is the exercise.`,
  'rec-b2-21-diallo': 'Mme Diallo and her son Moussa (act 9), Dakar, two voices, one take, a living room. Mme Diallo is calm and precise; a Senegalese accent is welcome.',
  'rec-b2-21-cartes-portee': 'The four scope cards (act 9). One voice. In each pair, stress the element the negation touches: « de ne pas VENIR », « pas TOUS ».',
  'rec-b2-21-portee-ecoute': `${ONE_TAKE} Eight lines. Line eight, « Il n'est pas parti, parce qu'il était malade », needs the audible pause at the comma: the meaning depends on it.`,
  'rec-b2-21-texte-a9': "Mme Diallo's letter (act 9), one female voice, firm and polite, read as written.",
  'rec-b2-21-samia': 'Samia and Théo (act 10), Marseille, two voices, one take, a small radio studio. The witness lines are spoken as a witness would say them, without ne; the coach lines are read by Samia. A Marseille accent is welcome.',
  'rec-b2-21-cartes-ne': 'The four « two ne » cards (act 10). One voice. Card four: read « Je n\'en veux plus » with plus as [ply], no s.',
  'rec-b2-21-radio-ecoute': `${ONE_TAKE} Eight lines. REQUIRED: line three « J'en veux plus, s'il vous plaît » with plus as [plys], the s clearly heard; line four « Je n'en veux plus » with [ply]. Lines one, two and five are spoken French without ne, natural and not caricatured.`,
  'rec-b2-21-piege-oral': TRAP,
  'rec-b2-21-texte-a10': "Kevin's radio testimony (act 10), one young male voice with a Marseille accent, spoken as he said it, WITHOUT the ne: the written transcription is the exercise.",
  'rec-b2-21-modele': "Martine Gagnon's letter (act 11), one female voice with a Québec accent, one take, read as a letter read aloud before posting: firm, polite, no anger.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B2 · LEÇON 21',
  intro: 'At B1 you learned each negative word (plus, jamais, rien, personne, aucun, ni… ni) and a first combination. At B2 you combine them around ONE ne, in a fixed order (plus, then jamais, then the rest: plus jamais rien, plus aucun, plus ni… ni), place them around the participle and before an infinitive (je n’ai plus vu personne, ne plus rien dire, sans rien dire), and never stack pas on another negative word, except in the fixed « ce n’est pas rien » (it matters). You make a negative word the subject (personne n’a rien vu, nul ne), combine restriction (ne… plus que, ne… jamais que, ne… pas que), use the formal negations (nullement, guère, je ne saurais), and control the scope of a negation (je ne vous ai pas demandé de… / je vous ai demandé de ne pas…; pas tous / aucun). The ne explétif negates nothing, and written French always keeps ne. The task: a 200 to 250 word formal letter in DELF B2 format contesting an invoice or an accusation.',
  skill: 'PE',
  grammarAssumed: [NEG_B1_UNIT, MODES_UNIT, INFINITIVES_UNIT],
  grammarIntroduced: [
    'Combined negations around one ne in a fixed order: plus, then jamais, then rien, personne, aucun, nulle part, ni… ni or que (plus aucun, plus ni… ni, plus jamais personne, jamais aucun); jamais plus as a formal variant; rien de + adjective, personne d’autre',
    'The place of each word of a combination in compound tenses (plus, jamais, rien before the participle; personne, aucun, nulle part, que after) and with a second verb',
    'Combined negations before an infinitive (ne plus rien dire, ne plus voir personne), both orders of the perfect infinitive (n’avoir rien vu / ne rien avoir vu), and sans + rien, personne, aucun, jamais with no ne and no pas',
    'The ban on stacking pas with another negative word; ce n’est pas rien as a fixed expression meaning it matters; pas… non plus; pas un seul, pas du tout, pas encore as legitimate company of pas',
    'Negative subjects in combination: personne n’a rien vu, rien n’a jamais été prouvé, aucun… ne, nul ne (formal), ni… ni… ne with a plural verb, plus personne ne, jamais personne ne; ne kept in writing',
    'Restriction combined with negation: ne… plus que, ne… jamais que, ne… pas que (not only), ne… guère que',
    'Formal negations: ne… guère, ne… plus guère, ne… nullement, ne… aucunement, ne… point for recognition, ne alone with savoir, pouvoir, oser, cesser, si je ne me trompe',
    'Scope: negating the request or the action (demander de / de ne pas), je ne pense pas que + subjunctive against je pense que… ne pas, pas tous against aucun, toujours pas against pas toujours, pas tout against rien, the negated cause',
    'The ne explétif named as not a negation (craindre que… ne against craindre que… ne… pas); the dropped ne of speech named as spoken, and plus [ply] / [plys]',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Au B1, tu as appris chaque mot négatif et une première combinaison. Ici, tu les combines autour d'un seul ne, dans l'ordre, tu les places autour du participe et devant l'infinitif, et tu n'ajoutes jamais pas à un autre mot négatif. Tu fais d'un mot négatif le sujet, tu choisis le registre soutenu dans une lettre, et tu places la négation sur ce que tu nies vraiment. À la fin, tu écris une lettre de contestation de 200 à 250 mots, format DELF B2.",
    minutes: 160,
    difficulty: 4,
    glyph: 'ne',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: NEGATIONS_COMBINEES_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 1,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every B1 and B2 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, LECTURE_MODELE, dicteeFor };
