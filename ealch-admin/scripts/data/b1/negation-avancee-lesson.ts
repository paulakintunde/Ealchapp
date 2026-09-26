// b1.20.l1 « La négation avancée » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL (in SECTION_TYPES and the LessonSection union, enforced by
// validateSection, drawn by TaskView), so `sections` is `LessonSection[]` and
// the validators run on `LESSON` itself, as b1.18 does. No
// `lessonWithoutTask()` shim, and `_task-section.ts` is not imported.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name
//   (cardDeck, examples, tapTable), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the word), trap (trapDrill stepped or
//   commonErrors), check (gated control pages before the checkpoint).
//
//    1  Le logement vide              7   pas quelqu'un is not personne
//    2  Plus, jamais, rien, personne  8   the four, in place of pas, present
//    3  Ne ... que                    8   restriction, seulement, the article
//    4  Aucun, ni ... ni, nulle part  7   and ne ... guère for recognition
//    5  Le sujet qui manque           7   Personne n'est venu, Rien n'a changé
//    6  Au passé composé              8   je n'ai rien vu / je n'ai vu personne
//    7  Devant un infinitif           7   ne pas faire, ne plus rien, sans
//    8  Plusieurs vides               7   plus jamais rien, jamais personne
//    9  Répondre                      8   si, non plus, pas du tout, pas encore
//   10  Le ne qui tombe               7   spoken yes, written never
//   11  Écrire une plainte           11   model, plan, role play, TASK, quiz
//
//   TOTAL 85 missions, 11 acts, 444 estimated screens. Corpus: 200 authored
//   rows in eleven blocks (.1000-.1199) plus 21 reused seed rows, 221 item
//   ids in all, 217 of them released act by act through `deckTranche` (the
//   other 4 are the seed rows with no flashcard drill, listed as
//   NOT_DECK_ABLE). Quiz: 11 rounds of 8 (33 mcq, 28 typeIn, 16 errorSpot,
//   11 listenChoose). Eleven error triggers, eleven drills, five reference
//   sheets reached from 19 missions by `sheetId`, eleven terms. Three
//   tapTables (acts 3, 6, 9). Chapter artwork:
//   `negation-avancee-image-prompts.md`, 11 prompts, one per act.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Ne ouvre un vide. Le deuxième mot lui donne sa forme. »
//   EN: Ne opens a gap. The second word gives it its shape.
//
//   ONE METAPHOR, THE EMPTY SPACE. A negative sentence draws a gap where
//   something should be; ne announces it, and the second word says whether
//   the gap is a person, a thing, a time, a stop, a zero, a pair, or (for
//   ne ... que) everything around one thing. It is NOT « replace pas with
//   the right word »: act 5 has no pas to replace and act 7 keeps it. And it
//   predicts act 10: when ne falls away in speech, the second word carries
//   the whole gap.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    ne ... plus, jamais, rien, personne (a1.18 excluded them by name
//           from its canDo and no A2 lesson introduces them, measured
//           2026-09-25); ne ... que and seulement; aucun(e); ni ... ni;
//           nulle part; ne ... guère for recognition; the negative word as
//           subject; placement in compound tenses; ne pas + infinitif and
//           sans + infinitif; combined negations and their order; si and
//           non plus beyond moi non plus; the renforts (pas du tout, jamais
//           de la vie); the dropped ne as a PRODUCTION choice by register.
//   QUOTES  a1.18's reframe (« Wrap the verb »), a2.05's (the small words
//           go in between) with b1.03's French rendering, a2.19's (wrap the
//           verb that changed), and b1.17's French reframe for pronoun order
//           in a negative. a1.18's moi non plus is cited, not re-taught.
//   LEAVES  ne ... pas, the elision, the collapse to de and the être
//           exception to a1.18, sons.07, a1.11 and a1.29; pronoun order to
//           b1.17; the subjunctive to b1.14 to b1.16 (« sans que » is named
//           once on sheet-place as recognition, and no authored French
//           string uses a subjunctive); inversion to b1.21.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (monsieur Gagnon and the agency say « vous »). Every
//   learner surface that explains something carries English (`en`, or a
//   final « EN: »), and NO ANSWER ever does. Every `say` is French, spoken
//   fr-FR. Theme `negation-et-restriction`, existing (corpus §A.1). A1 and
//   A2 citations use the English trail label; b1.* ones are French from the
//   plan. Setting: Québec City, a rented flat, with Liège, Dakar and Lyon
//   in the stories; characters recur only inside this lesson.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. The brief assumed a1.18 owned ne ... plus, jamais, rien and
//      personne. It does not: its corpus guard names them as OUT of its
//      canDo. So act 2 TEACHES them rather than recapping, in one act. Is
//      one act enough, or should b1.20 have been preceded by an A2 unit?
//   2. The dropped ne. a1.18 introduced it for RECEPTION ONLY. Act 10 lets
//      the learner PRODUCE it in speech (the scenario accepts « je sais
//      pas » as an alt) and forbids it in writing (the task marks it). Is
//      spoken production the right B1 step?
//   3. THREE tapTables (acts 3, 6 and 9), one per act, six rows each. The
//      pilot brief allows one per LESSON and every shipped B1 lesson breaks
//      it. Confirm three.
//   4. ne ... guère is RECOGNITION only: it is read (act 4 reading, one
//      cardDeck card, one check) and never asked for in production or in
//      a typeIn. Keep it at that?
//   5. The 281 published `fr.b1.negation-et-restriction` rows are DB-only,
//      so this corpus twins some of them (corpus DB_ONLY_TWINS). Dedupe at
//      import or keep both?
//   6. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.
//   7. The task is written (PE, 90 to 130 words, a complaint). A spoken
//      complaint on the phone would test act 10 better. Add a PO task?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  AVIS_TEXT, ANNONCE_TEXT, PLAINTE_TEXT, SECOND_WORDS,
  A118_REFRAME, A118_REFRAME_FR, A205_REFRAME, A205_REFRAME_FR, A219_REFRAME, A219_REFRAME_FR, B117_REFRAME,
  NEGATION_UNIT, ELISION_UNIT, ARTICLES_UNIT, PC_AVOIR_UNIT, PC_ETRE_UNIT, FUTUR_PROCHE_UNIT, MODAUX_UNIT,
  PC_IMPARFAIT_UNIT, FUTUR_UNIT, ORDRE_PRONOMS_UNIT,
  NEGATION_REF, ELISION_REF, PC_AVOIR_REF, FUTUR_PROCHE_REF, MODAUX_REF, ORDRE_PRONOMS_REF, INVERSION_REF,
} from './negation-avancee-corpus.ts';
import { NEGATION_AVANCEE_TERMS } from './negation-avancee-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: LessonSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string; ipa?: string; respell?: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r as SrcItem]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.20: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.20: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section (the density
 *  validator requires brackets in a section and refuses them in a row). */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.20: no respell on ${id}`);
  return `[${r.respell}]`;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
/** A free groupDrill item: a quotation of a passage, with no corpus row. */
const free = (fr: string, en: string, note?: string): GItem => ({ fr, en, ...(note ? { note } : {}) });
/** A listening line copied from its row. */
const ln = (id: string) => ({ fr: src(id).fr, en: src(id).en });
/** An examples row copied from its row. */
const ex = (id: string, note: string) => ({ fr: src(id).fr, en: src(id).en, note });
/** A useCases row copied from its row. */
const uc = (situation: string, id: string) => ({ situation, fr: src(id).fr, en: src(id).en });
const fr = (id: string) => src(id).fr;
const chk = (q: string, opts: string[], correct: number, why: string): Check => ({ q, opts, correct, why });
const grp = (label: string, items: GItem[], check: Check): SoundGroup => ({ label, items, check });
/** A control page: a label and a gating question, no words. */
const ctl = (label: string, q: string, opts: string[], correct: number, why: string): SoundGroup =>
  ({ label, items: [], check: { q, opts, correct, why } });

/** The act check: control pages only, gated, before the checkpoint. */
function actCheck(id: string, title: string, groups: SoundGroup[], terms: string[]): Sec<'groupDrill'> {
  return {
    type: 'groupDrill', id, layer: 'core', size: 'lg', title, frSub: 'Le point avant la pause',
    groups, audio: AUDIO, say: `Petit bilan. ${REFRAME}`, terms,
  };
}

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 1 — LE LOGEMENT VIDE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The learner's French is grammatical and says the wrong thing:
 *  « pas quelqu'un » is the English not-anyone, and in French it means a
 *  particular someone you missed. The host believes somebody is there.
 *  NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const WRONG_QUELQU_UN = "Je n'ai pas vu quelqu'un devant l'immeuble.";

const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'La boîte à clés vide',
  frSub: 'Un vendredi soir, rue Saint-Jean',
  setting: { place: 'Devant un immeuble, rue Saint-Jean', city: 'Québec', time: '21 h 30', ambience: 'le froid de novembre, une rue vide, une boîte à clés ouverte' },
  beats: [
    {
      kind: 'narration',
      text: "Québec, un vendredi soir de novembre. Tu as loué un appartement pour un mois, rue Saint-Jean. La boîte à clés est vide. Tu appelles le propriétaire, monsieur Gagnon.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'M. Gagnon',
      fr: "Bonsoir. Mon neveu devait vous donner les clés. Dites-moi s'il est là.",
      en: 'Good evening. My nephew was supposed to give you the keys. Tell me if he is there.',
      respell: '[bohⁿ-SWAR | mohⁿ nuh-VEU duh-veh voo doh-nay lay KLAY | deet-MWA see-leh LA]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: WRONG_QUELQU_UN,
      en: "There's someone in front of the building I didn't see.",
      respell: '[zhuh nay pa vü kehl-KUHⁿ duh-vahⁿ lee-MUHBL]',
      stage: "Tu penses : I didn't see anyone. Tu as gardé pas, et tu as traduit anyone.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'M. Gagnon',
      fr: 'Alors il est là, mais vous ne le voyez pas. Cherchez un manteau rouge.',
      en: 'So he is there, but you cannot see him. Look for a red coat.',
      respell: '[a-LOR ee-leh LA | meh voo nuh luh vwa-yay PA | shehr-SHAY uhⁿ mahⁿ-toh ROOZH]',
      stage: "Il a entendu : il y a quelqu'un, et tu ne l'as pas vu.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Tu regardes la rue. Elle est vide. Pas de manteau rouge, pas de neveu. Monsieur Gagnon croit qu'une personne précise est là, et que tu l'as manquée.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase dit que la rue est vide ?',
      size: 'lg',
      options: [
        { fr: WRONG_QUELQU_UN, respell: '[zhuh nay pa vü kehl-KUHⁿ duh-vahⁿ lee-MUHBL]', en: "There's someone in front of the building I didn't see.", outcome: 'breaks', audio: AUDIO },
        { fr: fr(E(1000)), respell: rsOf(E(1000)), en: src(E(1000)).en, outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Monsieur Gagnon comprend tout de suite : son neveu n'est pas venu. Il arrive lui-même, dans vingt minutes, avec les clés.",
        breaks: "Monsieur Gagnon te répète de chercher le manteau rouge. Tu fais le tour de l'immeuble dans le froid.",
      },
    },
    {
      kind: 'break',
      heading: "Pas quelqu'un, ce n'est pas personne",
      body: "Ta phrase est correcte, mais elle parle d'une personne précise que tu n'as pas vue. Pour une rue vide, le français a un mot à lui : personne. EN: pas plus quelqu'un means a particular someone you missed; an empty street needs personne.",
      wrong: {
        fr: WRONG_QUELQU_UN,
        ipa: '/ʒə ne pa vy kɛl.kœ̃ də.vɑ̃ li.mœbl/',
        respell: '[zhuh nay pa vü kehl-KUHⁿ duh-vahⁿ lee-MUHBL]',
        en: "There's someone in front of the building I didn't see.",
      },
      right: {
        fr: fr(E(1000)),
        ipa: ipaOf(E(1000)),
        respell: rsOf(E(1000)),
        en: src(E(1000)).en,
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Monsieur Gagnon arrive avec les clés. Mais dans l'appartement, il manque beaucoup de choses, et tu vas devoir dire exactement lesquelles.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['second', 'place'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Dire exactement ce qui manque', s: 'Actes 2 à 4 : plus, jamais, rien, personne, que, aucun, ni ... ni' },
    { t: 'Mettre chaque mot à sa place', s: 'Actes 5 à 7 : le sujet, le passé composé, l’infinitif' },
    { t: 'Combiner et répondre', s: 'Actes 8 et 9 : plus jamais rien, si, moi non plus' },
    { t: 'Écrire une vraie plainte', s: 'Actes 10 et 11 : l’oral, l’écrit, et ta lettre à l’agence' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: a real review where thirteen negatives are already doing
 *  their job, and only two of them are pas. `questionsInModal` so the
 *  learner reads before seeing the questions. */
const A1_AVIS: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-avis',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux étoiles',
  frSub: 'Lis, et cherche ce qui manquait',
  text: AVIS_TEXT,
  glossary: [
    { word: 'généreuse', en: 'generous', note: 'Elle donne plus que ce que le logement mérite.' },
    { word: 'boîte à clés', en: 'key box', note: 'Une petite boîte à code, près de la porte, pour laisser les clés.' },
    { word: 'couverture', en: 'blanket', note: 'Ce qu’on met sur le lit pour avoir chaud.' },
    { word: 'canapé-lit', en: 'sofa bed', note: 'Un canapé qui devient un lit la nuit.' },
    { word: 'fleuve', en: 'river (the St Lawrence)', note: 'À Québec, le fleuve, c’est le Saint-Laurent.' },
  ],
  questions: [
    { q: "Qu'est-ce qui manquait dans la cuisine ?", a: "Tout : « il n'y avait rien : ni sel, ni huile, ni café ». rien dit la chose, ni ... ni dit lesquelles." },
    { q: 'Combien de serviettes y avait-il ?', a: "Une seule : « il n'y avait qu'une seule serviette ». ne ... que ne dit pas zéro, il dit une." },
    { q: "Qui attendait les voyageurs à l'arrivée ?", a: "Personne : « personne ne nous attendait ». Ici, le vide ouvre la phrase." },
    { q: 'Va-t-elle revenir ?', a: "Non : « je ne reviendrai plus jamais ». Deux seconds mots, un seul ne." },
    { q: 'Combien de fois trouves-tu ne ... pas, tout simple ?', a: "Deux fois : « il ne s'est pas excusé » et « je ne dis pas ». Les onze autres négations disent quelque chose de plus précis." },
  ],
  audio: REC('rec-b1-20-avis'),
  say: REFRAME,
  terms: ['second', 'plainte'],
};

/** BUILD, on the text just read: sort by what shape the gap has. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'La forme du vide',
  groups: [
    grp('Une chose ou une personne manque', [
      it(E(1001), 'rien : aucune chose'),
      it(E(1000), 'personne : aucune personne'),
      it(E(1008), 'personne, au début de la phrase'),
      it(E(1009), 'rien, au début aussi'),
    ], chk(
      'Dans ces quatre phrases, trouves-tu le mot pas ?',
      ['Oui, dans chacune.', 'Non, jamais.'], 1,
      "rien et personne prennent la place de pas. EN: rien and personne replace pas.")),
    grp('Un moment ou une quantité manque', [
      it(E(1003), 'jamais : aucun moment'),
      it(E(1014), 'plus : ça marchait, et ça a cessé'),
      it(E(1004), 'aucune : pas une seule'),
      it(E(1006), 'que : seulement le soir'),
    ], chk(
      '« Le chauffage ne marche que le soir. » Est-ce qu’il marche ?',
      ['Oui, mais seulement le soir.', 'Non, jamais.'], 0,
      "ne ... que ne dit pas zéro : il enlève tout le reste. EN: ne ... que means only, not never.")),
    ctl('Le rappel', "« Je n'ai pas de chien. » Que dit pas, ici ?",
      ['une personne précise', 'un moment précis', 'un non tout simple'], 2,
      "pas est le vide le plus simple, celui que tu connais depuis le A1. EN: pas is the plain gap you already know."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['second'],
};

/** NAME, gently: pas beside the precise words. No rule yet. */
const A1_PAIRES: Sec<'examples'> = {
  type: 'examples',
  id: 'a1-paires',
  layer: 'core',
  sheetId: 'sheet-mots',
  title: 'Pas, et les autres',
  examples: [
    ex('fr.a1.negation-et-restriction.068', 'pas : le non de base, que tu connais déjà.'),
    ex('fr.a1.negation-et-restriction.046', 'pas encore : il n’est pas là, un point, c’est tout.'),
    ex(E(1000), 'personne : la rue est vide de gens.'),
    ex(E(1001), 'rien : le frigo est vide de choses.'),
    ex(E(1002), "plus : il y en avait, et il n'y en a plus."),
    ex(E(1013), 'que : il reste une clé, et rien d’autre.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['second', 'neque'],
};

/** CHOOSE: where the plain pas costs something real. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où le mot précis compte',
  cases: [
    uc('Tu appelles le propriétaire : la rue est vide', E(1000)),
    uc("Tu écris à l'agence : le frigo est vide", E(1001)),
    uc('Tu préviens ton amie avant son arrivée', E(1003)),
    uc('Tu demandes des serviettes à la réception', E(1004)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['second', 'plainte'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La rue vide', "Tu n'as vu aucune personne. Que dis-tu ?",
    [fr(E(1000)), WRONG_QUELQU_UN], 0,
    "pas quelqu'un parle d'une personne précise que tu as manquée. EN: pas quelqu'un is a particular someone."),
  ctl('Le frigo', "« Il n'y a rien dans le frigo. » Où est pas ?",
    ['avant rien', 'après frigo', 'nulle part'], 2,
    "rien a pris sa place. EN: rien took its place."),
  ctl('Une seule serviette', "« Il ne reste qu'une clé. » Combien de clés as-tu ?",
    ['aucune', 'une'], 1,
    "ne ... que dit seulement, pas zéro. EN: ne ... que means only."),
], ['second', 'neque']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le logement vide',
    opener: {
      line: "La rue est vide et ta phrase dit le contraire : ici tu apprends à dire exactement ce qui manque. EN: The street is empty and your sentence says otherwise: here you learn to say exactly what is missing.",
      imageRef: 'lessons/negation-avancee/act01.jpg',
    },
    sections: [],
    milestone: "Tu repères le second mot d'une négation et tu sais que pas quelqu'un n'est pas personne. EN: You can spot the second word of a negative, and you know pas quelqu'un is not personne.",
    estScreens: 28, restPoints: ['a1-avis'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_AVIS, A1_REPERER, A1_PAIRES, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — PLUS, JAMAIS, RIEN, PERSONNE
 *
 *  a1.18 owns pas and excludes these four by name (corpus §A). They are
 *  taught here, in the present, in the one place pas already sits.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a friend from Dakar, five years on, and everything has changed.
 *  Story bubbles avoid « ? » and « ! », like scene bubbles. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Cinq ans après',
  frSub: 'Awa veut des nouvelles',
  setting: "Awa, une amie de Dakar, t'appelle en vidéo. Vous ne vous êtes pas parlé depuis cinq ans. Elle se souvient de toi comme tu étais.",
  bubbles: [
    { from: 'narrator', fr: 'Awa sourit et commence la liste de tes vieilles habitudes.', en: 'Awa smiles and starts listing your old habits.' },
    { from: 'coach', fr: 'Raconte. Tu fumes toujours sur ton balcon, je suppose.', en: 'Tell me. You still smoke on your balcony, I suppose.' },
    { from: 'user', fr: fr(E(1015)), en: src(E(1015)).en, warn: 'plus : ça existait, et ça a cessé' },
    { from: 'coach', fr: 'Et ton grand café noir de sept heures, tu le prends encore.', en: 'And your big black coffee at seven, you still have it.' },
    { from: 'user', fr: 'Non, je ne bois jamais de café maintenant.', en: 'No, I never drink coffee now.', warn: 'jamais : aucun moment, et de devant café' },
    { from: 'coach', fr: 'Tu dois avoir plein d’amis dans ton nouveau quartier.', en: 'You must have loads of friends in your new area.' },
    { from: 'user', fr: fr(E(1018)), en: src(E(1018)).en, warn: 'personne : aucune personne' },
    { from: 'narrator', fr: 'Awa éclate de rire. Trois réponses, trois vides, et chacun a sa forme.', en: 'Awa bursts out laughing. Three answers, three gaps, each with its own shape.' },
  ],
  closing: { fr: 'Plus, jamais, personne : pas ne suffisait pour aucune des trois.', en: 'Plus, jamais, personne: pas would not have done for any of the three.' },
  audio: REC('rec-b1-20-awa'),
  say: REFRAME,
  terms: ['second'],
};

/** NAME: the four new second words, one per card, on the base a1.18 laid. */
const A2_MOTS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-mots',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-mots',
  title: 'Quatre mots à la place de pas',
  frSub: 'plus, jamais, rien, personne',
  hint: 'Quatre cartes. Le second mot change, sa place ne change pas.',
  audio: REC('rec-b1-20-mots'),
  say: REFRAME,
  terms: ['second'],
  cards: [
    {
      head: 'Ce que tu as déjà', label: Cap(NEGATION_REF),
      fr: 'je ne fume pas',
      sub: '[zhuh nuh füm PA]',
      body: `« ${A118_REFRAME} » En français : « ${A118_REFRAME_FR} » Les autres mots se mettent exactement là où était pas. EN: the new words sit exactly where pas sat.`,
    },
    {
      head: 'Ça a existé, et ça a cessé', label: 'plus',
      fr: fr(E(1015)),
      sub: rsOf(E(1015)),
      body: "Tu fumais avant. Maintenant, non. plus dit qu'une chose a existé, puis s'est arrêtée. EN: plus says something existed and then stopped.",
    },
    {
      head: 'À aucun moment', label: 'jamais',
      fr: fr(E(1016)),
      sub: rsOf(E(1016)),
      body: "Pas le matin, pas le soir, pas le dimanche. jamais efface tous les moments à la fois. EN: jamais wipes out every moment.",
    },
    {
      head: 'Aucune chose, aucune personne', label: 'rien · personne',
      fr: 'je ne comprends rien · je ne connais personne',
      sub: '[zhuh nuh kohⁿ-prahⁿ RYEHⁿ] · [zhuh nuh ko-neh pehr-SONN]',
      body: "rien pour une chose, personne pour une personne. Ni l'un ni l'autre n'a besoin de pas. EN: rien for a thing, personne for a person, and neither needs pas.",
    },
  ],
};

/** BUILD: the word in pas's slot, and the article after it. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'À la place de pas',
  groups: [
    grp('Le même endroit', [
      it(E(1017), 'rien, juste après le verbe'),
      it(E(1022), 'personne, juste après attend'),
      it(E(1019), 'plus, juste après habitons'),
      it(E(1027), 'jamais, juste après ouvre'),
    ], chk(
      'Où se trouve le second mot dans ces quatre phrases ?',
      ['avant le verbe', 'juste après le verbe'], 1,
      "À la place de pas : juste après le verbe conjugué. EN: in pas's slot, right after the verb.")),
    grp("Et l'article devient de", [
      it(E(1023), 'plus de lait'),
      it(E(1016), 'jamais de café'),
      it(E(1024), 'jamais de monnaie'),
      it('fr.a2.au-restaurant.169', 'plus de saumon, au restaurant'),
    ], chk(
      '« plus de lait » : pourquoi pas « plus du lait » ?',
      ['parce que plus fait comme pas', 'parce que plus veut dire more'], 0,
      "Après plus et jamais, du devient de, comme après pas. EN: plus and jamais behave like pas.")),
    ctl('Le choix', "Ton frigo était plein hier. Aujourd'hui, il est vide. Que dis-tu ?",
      ["Il n'y a jamais de lait.", "Il n'y a plus de lait."], 1,
      "Le lait était là, puis il a disparu : plus. EN: it was there and ran out."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['second'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  sheetId: 'sheet-mots',
  title: 'Chaque mot, son vide',
  examples: [
    ex(E(1026), 'plus : elle sortait avant, elle ne sort plus.'),
    ex(E(1020), 'jamais : pas un seul matin.'),
    ex(E(1028), 'rien : aucun son ne passe.'),
    ex(E(1029), 'personne : aucune visite.'),
    ex('fr.a2.hebergement.118', 'rien après peux : il suit le verbe conjugué, comme pas.'),
    ex(E(1033), 'personne après il y a : le comptoir est vide.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['second'],
};

/** CHOOSE: meaning picks the word, not the sentence shape. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Cessé, ou jamais commencé',
  groups: [
    grp('Plus ou jamais', [
      it(E(1030), 'avant oui, maintenant non'),
      it(E(1027), 'aucun lundi, depuis toujours'),
      it(E(1019), 'nous y habitions avant'),
      it('fr.a1.jours-et-mois.178', 'aucun dimanche'),
    ], chk(
      "« Nous n'habitons plus à Montréal. » Y avez-vous habité ?",
      ['Non, jamais.', 'Oui, avant.'], 1,
      "plus suppose un avant. EN: plus implies there was a before.")),
    grp('Une chose ou une personne', [
      it(E(1021), 'aucune parole'),
      it(E(1034), 'aucun aliment sucré'),
      it(E(1033), 'aucun employé'),
      it(E(1032), 'toi, à aucun moment'),
    ], chk(
      "« Tu ne dis rien. » Qu'est-ce qui manque ?",
      ['une personne', 'un moment', 'des paroles'], 2,
      "rien : une chose, ici des mots. EN: rien is a thing, here words.")),
    ctl('Le contraste', "« Je ne fume plus » ou « je ne fume jamais » : laquelle dit que tu as fumé avant ?",
      ['je ne fume plus', 'je ne fume jamais'], 0,
      "plus regarde en arrière : il y a eu un avant. EN: plus looks back to a before."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['second'],
};

/** TRAP: four things an anglophone does with these words, each reasonable. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre vides mal dessinés',
  errors: [
    {
      wrong: 'Je ne fume pas plus.',
      right: fr(E(1015)),
      why: "Normal : en anglais, not any more garde not. En français, plus prend la place de pas. « pas plus » existe, mais il veut dire pas davantage. EN: plus replaces pas; pas plus means no more than.",
    },
    {
      wrong: 'Elle ne boit jamais du café.',
      right: fr(E(1016)),
      why: "du café est la forme positive, donc elle vient toute seule. Après jamais, comme après pas, du devient de. EN: after jamais, du becomes de.",
    },
    {
      wrong: 'Je ne connais pas personne ici.',
      right: fr(E(1018)),
      why: "Tu l'entendras dans la rue au Québec, et ça ressemble à not anybody. En français standard, personne remplace pas : un seul des deux. EN: in standard French personne replaces pas.",
    },
    {
      wrong: 'Je ne comprends pas rien.',
      right: fr(E(1017)),
      why: "En anglais, not anything a deux mots, et tu les as gardés. En français, rien suffit : pas en plus, c'est un de trop. EN: rien alone does the job.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['second'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris le vide que tu entends',
  frSub: 'plus, jamais, rien, personne',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['second'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La place', "« Il ne mange ... le matin. » Où va jamais ?",
    ['avant ne', 'juste après mange', 'à la fin'], 1,
    "À la place de pas, juste après le verbe. EN: in pas's slot."),
  ctl('Un de trop', "« Je ne connais pas personne. » Qu'enlèves-tu ?",
    ['personne', 'pas'], 1,
    "personne fait déjà le travail de pas. EN: personne already does pas's job."),
  ctl("L'article", "« Il n'y a plus ... pain. »",
    ['de', 'du'], 0,
    "Après plus, du devient de. EN: after plus, du becomes de."),
], ['second']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Plus, jamais, rien, personne',
    opener: {
      line: "« Pas » dit non, sans plus : ici tu apprends quatre mots qui disent ce qui a cessé, quand, quoi et qui. EN: \"Pas\" just says no: here you learn four words that say what stopped, when, what and who.",
      imageRef: 'lessons/negation-avancee/act02.jpg',
    },
    sections: [],
    milestone: "Tu mets plus, jamais, rien ou personne à la place de pas, et tu choisis le bon. EN: You can put plus, jamais, rien or personne in pas's place, and pick the right one.",
    estScreens: 32, restPoints: ['a2-exemples'],
  },
  sections: [A2_HISTOIRE, A2_MOTS, A2_CONSTRUIRE, A2_EXEMPLES, A2_CHOISIR, A2_ERREURS, A2_DICTEE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — NE ... QUE
 *
 *  The one negative that denies nothing. The reframe holds because the gap
 *  is drawn AROUND the thing after que.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear. `hideLines` because the questions are about what the ear
 *  caught: a quantity, not zero. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Seulement, ou rien du tout',
  frSub: 'Écoute ce qui reste',
  lines: [
    ln(E(1035)), ln(E(1036)), ln(E(1037)), ln(E(1039)),
    ln(E(1042)), ln(E(1047)), ln(E(1049)), ln(E(1043)),
  ],
  questions: [
    { q: 'Première phrase : combien d’argent as-tu ?', opts: ['dix dollars', 'rien du tout'], correct: 0, why: "« je n'ai que dix dollars » : dix, et pas plus. EN: ten, no more." },
    { q: 'Les deux premières phrases disent-elles la même chose ?', opts: ['Non, la première dit zéro.', 'Oui.'], correct: 1, why: "ne ... que et seulement ont le même sens. EN: same meaning." },
    { q: 'Le musée ouvre-t-il le lundi ?', opts: ['Oui', 'Non, seulement le mardi', 'On ne sait pas'], correct: 1, why: "« n'ouvre que le mardi » : les autres jours manquent. EN: every other day is missing." },
    { q: 'Le bus passe combien de fois par heure ?', opts: ['jamais', 'souvent', 'une fois'], correct: 2, why: "« qu'une fois par heure » : une, pas zéro. EN: once, not never." },
    { q: 'Combien de salles de bain y a-t-il ?', opts: ['une', 'aucune'], correct: 0, why: "« qu'une salle de bain » : une seule. EN: just one." },
  ],
  audio: REC('rec-b1-20-que-ecoute'),
  say: REFRAME,
  terms: ['neque'],
};

const A3_QUE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-que',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-que',
  title: 'Tout manque, sauf une chose',
  frSub: 'ne ... que',
  hint: 'Quatre cartes. Regarde ce qui reste après que.',
  audio: REC('rec-b1-20-que'),
  say: REFRAME,
  terms: ['neque'],
  cards: [
    {
      head: 'Le vide autour de la chose', label: 'ne ... que',
      fr: fr(E(1035)),
      sub: rsOf(E(1035)),
      body: "ne ouvre le vide, que le referme autour de dix dollars. Tout le reste manque. EN: ne opens the gap, que closes it round ten dollars.",
    },
    {
      head: 'La même chose, en un mot', label: 'seulement',
      fr: fr(E(1036)),
      sub: rsOf(E(1036)),
      body: "seulement dit la même chose et n'a pas besoin de ne. Tu l'entendras plus souvent à l'oral. EN: same meaning, no ne, and commoner in speech.",
    },
    {
      head: "L'article reste", label: 'du, de la, des',
      fr: fr(E(1040)),
      sub: rsOf(E(1040)),
      body: "Tu as du pain : il n'y a rien à nier. Donc du reste du, et jamais de. EN: the bread is there, so du stays.",
    },
    {
      head: 'Que va devant ce qui reste', label: 'la place de que',
      fr: fr(E(1046)),
      sub: rsOf(E(1046)),
      body: "que se met juste avant la chose qui reste : qu'à son travail, que le mardi, qu'une fois. EN: que sits right before whatever remains.",
    },
  ],
};

/** NAME, as a lookup: what stays and what goes. */
const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-tableau',
  layer: 'core',
  sheetId: 'sheet-que',
  title: 'Ce qui reste, ce qui manque',
  cols: ['Phrase', 'Ce qui reste', 'Ce qui manque'],
  rows: [
    { cells: ["je n'ai que dix dollars", 'dix dollars', "tout l'autre argent"], say: fr(E(1035)),
      detail: { title: 'Une somme', body: "Dix dollars, pas un de plus. EN: ten dollars and not one more.", say: fr(E(1036)) } },
    { cells: ['il ne parle que français', 'le français', 'les autres langues'], say: fr(E(1037)),
      detail: { title: 'Une langue', body: "Il parle, mais une seule langue. EN: he speaks, but one language only.", say: fr(E(1037)) } },
    { cells: ["le musée n'ouvre que le mardi", 'le mardi', 'les six autres jours'], say: fr(E(1039)),
      detail: { title: 'Un jour', body: "Le musée ouvre bien, un jour sur sept. EN: it does open, one day in seven.", say: fr(E(1044)) } },
    { cells: ['nous ne sommes que trois', 'trois personnes', 'les autres invités'], say: fr(E(1042)),
      detail: { title: 'Un nombre', body: "Trois, c'est moins que prévu, mais ce n'est pas zéro. EN: fewer than planned, not zero.", say: fr(E(1049)) } },
    { cells: ["le bus ne passe qu'une fois par heure", 'une fois', 'les autres passages'], say: fr(E(1047)),
      detail: { title: 'Une fréquence', body: "Une fois par heure, et tu attends le reste du temps. EN: once an hour, and you wait the rest.", say: fr(E(1047)) } },
    { cells: ["tu n'as qu'à demander", 'demander', 'tout autre effort'], say: fr(E(1052)),
      detail: { title: "n'avoir qu'à", body: "Une seule chose à faire, et elle est facile. EN: all you have to do is ask.", say: fr(E(1052)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neque'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte ne ... que',
  groups: [
    grp('Avec un nombre', [
      it(E(1042), 'que, devant trois'),
      it(E(1047), "qu', devant une fois"),
      it(E(1049), 'que, devant deux jours'),
      it('fr.a2.argent-quotidien.081', 'que, devant des billets'),
    ], chk(
      "« Nous ne sommes que trois. » Combien êtes-vous ?",
      ['aucun', 'plus de trois', 'trois'], 2,
      "Trois, et personne d'autre. EN: three, and nobody else.")),
    grp('Avec un article', [
      it(E(1038), "de l'eau reste de l'eau"),
      it(E(1040), 'du pain reste du pain'),
      it(E(1051), 'des légumes restent des légumes'),
      it(E(1050), 'du café reste du café'),
    ], chk(
      "« Elle ne boit que de l'eau. » Pourquoi de l' et pas d' ?",
      ['parce que que fait comme pas', "parce que l'eau est là : l'article reste"], 1,
      "Rien n'est nié : l'eau, elle la boit. EN: nothing is denied, so the article stays.")),
    ctl('Avec seulement', 'Dis-le avec seulement : « Je ne travaille que le matin. »',
      [fr(E(1045)), 'Je ne travaille seulement le matin.'], 0,
      "seulement n'a pas besoin de ne. EN: seulement takes no ne."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neque'],
};

/** Consolidation, as answers. No « EN: » tail anywhere on a back. */
const A3_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a3-cartes',
  layer: 'core',
  title: 'Huit cartes pour seulement',
  cards: [
    { front: 'I only have ten dollars', back: "je n'ai que dix dollars", say: fr(E(1035)) },
    { front: 'he only speaks French', back: 'il ne parle que français', say: fr(E(1037)) },
    { front: 'she only drinks water', back: "elle ne boit que de l'eau", say: fr(E(1038)) },
    { front: 'there is only one bathroom', back: "il n'y a qu'une salle de bain", say: fr(E(1043)) },
    { front: 'it is only a small problem', back: "ce n'est qu'un petit problème", say: fr(E(1048)) },
    { front: 'you only have to ask', back: "tu n'as qu'à demander", say: fr(E(1052)) },
    { front: 'I only work in the mornings', back: 'je travaille seulement le matin', say: fr(E(1045)) },
    { front: 'I am just looking, thanks', back: 'je regarde seulement, merci', say: fr('fr.a2.courses.196') },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neque'],
};

const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Un peu, pas zéro',
  groups: [
    grp('Seulement, pas jamais', [
      it(E(1039), 'un jour sur sept'),
      it(E(1044), 'une partie de la journée'),
      it(E(1006), 'une partie du temps'),
      it(E(1046), 'une seule pensée'),
    ], chk(
      "« Le musée n'ouvre que le mardi. » Peux-tu y aller mardi ?",
      ['Oui.', 'Non, il est toujours fermé.'], 0,
      "Il ouvre, un seul jour. EN: it opens, on one day.")),
    grp('Une petite quantité', [
      it(E(1013), 'une clé'),
      it(E(1043), 'une salle de bain'),
      it(E(1048), 'un petit problème'),
      it(E(1052), 'une seule chose à faire'),
    ], chk(
      "« Ce n'est qu'un petit problème. » Y a-t-il un problème ?",
      ['Non, aucun.', 'Oui, un petit.'], 1,
      "ne ... que garde la chose : un problème, petit. EN: there is one, a small one.")),
    ctl('Que ou pas', 'Tu as des billets, mais pas de pièces. Que dis-tu au chauffeur ?',
      ["Je n'ai que des billets.", "Je n'ai pas de billets."], 0,
      "que garde les billets et enlève les pièces. EN: que keeps the notes and drops the coins."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neque'],
};

/** TRAP, stepped: que treated like pas. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Que n’est pas pas',
  rule: {
    title: 'La chose après que est là',
    body: "ne ... que ne nie pas ce qui suit : c'est là. Donc l'article reste, pas de pas, et que va devant ce qui reste. seulement, lui, n'a pas besoin de ne. EN: what follows que is present, so the article stays and pas never appears.",
  },
  cards: [
    { promptLabel: 'de, comme après pas', promptSound: 'Je ne veux que de pain.', fr: fr(E(1040)), ipa: ipaOf(E(1040)), tip: "Tu veux du pain : du reste du. EN: you want bread, so du stays." },
    { promptLabel: 'que oublié', promptSound: "Je n'ai dix dollars.", fr: fr(E(1035)), ipa: ipaOf(E(1035)), tip: "ne attend son second mot : sans que, la phrase ne tient pas. EN: ne needs its second word." },
    { promptLabel: 'seulement avec ne', promptSound: 'Je ne travaille seulement le matin.', fr: fr(E(1045)), ipa: ipaOf(E(1045)), tip: "seulement n'a pas besoin de ne. EN: seulement takes no ne." },
    { promptLabel: 'que mal placé', promptSound: 'Il ne que pense à son travail.', fr: fr(E(1046)), ipa: ipaOf(E(1046)), tip: "que va devant ce qui reste : qu'à son travail. EN: que goes before what remains." },
    { promptLabel: 'des devient de', promptSound: 'Elle ne mange que de légumes.', fr: fr(E(1051)), ipa: ipaOf(E(1051)), tip: "Les légumes sont là : des reste. EN: des stays." },
    { promptLabel: 'une devient de', promptSound: "Il n'y a que de salle de bain.", fr: fr(E(1043)), ipa: ipaOf(E(1043)), tip: "Une salle, et une seule : qu'une. EN: one, and only one." },
  ],
  drill: [
    { promptSay: 'Je ne veux que ... pain.', opts: ['de', 'du'], correct: 1 },
    { promptSay: 'Elle ne mange que ... légumes.', opts: ['des', 'de'], correct: 0 },
    { promptSay: 'Je travaille ... le matin.', opts: ['ne que', 'seulement'], correct: 1 },
    { promptSay: 'Il ne pense ... à son travail.', opts: ['pas', "qu'"], correct: 1 },
    { promptSay: "Il n'y a ... salle de bain.", opts: ["qu'une", 'pas de', 'aucun'], correct: 0 },
    { promptSay: 'Nous ne sommes ... trois ce soir.', opts: ['pas', 'jamais', 'que'], correct: 2 },
    { promptSay: "Je n'ai que ... billets.", opts: ['des', 'de'], correct: 0 },
    { promptSay: 'Le bus ne passe ... fois par heure.', opts: ['pas une', "qu'une", 'jamais une'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La chose après que est là' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-20-piege-que'),
  say: REFRAME,
  terms: ['neque'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le sens', "« Je n'ai que du pain. » As-tu du pain ?",
    ['Non', 'Oui'], 1,
    "Oui, et rien d'autre. EN: yes, and nothing else."),
  ctl("L'article", "« Elle ne boit que ... eau. »",
    ["de l'", "d'"], 0,
    "L'eau est là : l'article reste. EN: the water is there, so the article stays."),
  ctl('Le synonyme', 'Quel mot dit la même chose que ne ... que ?',
    ['jamais', 'plus', 'seulement'], 2,
    "seulement, sans ne. EN: seulement, with no ne."),
], ['neque']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Ne ... que',
    opener: {
      line: "Il te reste dix dollars, pas zéro : ici tu apprends le vide qui garde une seule chose. EN: You have ten dollars left, not zero: here you learn the gap that keeps just one thing.",
      imageRef: 'lessons/negation-avancee/act03.jpg',
    },
    sections: [],
    milestone: "Tu dis seulement avec ne ... que, tu gardes l'article, et tu ne le confonds plus avec pas. EN: You can say only with ne ... que, keep the article, and never mistake it for pas.",
    estScreens: 38, restPoints: ['a3-tableau', 'a3-cartes'],
  },
  sections: [A3_ECOUTE, A3_QUE, A3_TABLEAU, A3_CONSTRUIRE, A3_CARTES, A3_CHOISIR, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — AUCUN, NI ... NI, NULLE PART, GUÈRE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a listing, small print included, where every drawback is a
 *  negative. `questionsInModal` so the text comes first. */
const A4_ANNONCE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-annonce',
  layer: 'core',
  questionsInModal: true,
  title: 'La petite annonce',
  frSub: 'Lis ce qui manque, avant de signer',
  text: ANNONCE_TEXT,
  glossary: [
    { word: 'trois et demie', en: 'one-bedroom flat (Québec)', note: 'Au Québec, on compte les pièces : trois pièces et une salle de bain.' },
    { word: 'Château Frontenac', en: 'Château Frontenac', note: 'Le grand hôtel qui domine le Vieux-Québec.' },
    { word: 'stationnement', en: 'parking (Québec)', note: 'En France, on dit plutôt parking, ou place pour se garer.' },
    { word: 'guère', en: 'hardly', note: "Un mot d'écrit : presque pas. EN: mostly written." },
    { word: 'virements', en: 'bank transfers', note: "L'argent passe directement d'un compte à l'autre." },
  ],
  questions: [
    { q: "L'appartement a-t-il un balcon ?", a: "Non : « ni balcon ni ascenseur ». Deux choses manquent à la fois." },
    { q: 'Peux-tu venir avec ton chat ?', a: "Non : « aucun animal n'est accepté ». aucun dit : pas un seul." },
    { q: 'Où peux-tu te garer en hiver ?', a: "Nulle part à moins de dix minutes à pied. nulle part : aucun endroit." },
    { q: 'Les voisins font-ils du bruit ?', a: "Presque pas : « ne font guère de bruit ». guère veut dire presque pas." },
    { q: 'Comment paies-tu le loyer ?', a: "Seulement par virement : « n'accepte que les virements »." },
  ],
  audio: REC('rec-b1-20-annonce'),
  say: REFRAME,
  terms: ['aucun', 'nini'],
};

const A4_MOTS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-mots',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-que',
  title: 'Quatre vides de plus',
  frSub: 'aucun, ni ... ni, nulle part, guère',
  hint: 'Quatre cartes. La dernière est à lire, pas à écrire.',
  audio: REC('rec-b1-20-aucun'),
  say: REFRAME,
  terms: ['aucun', 'nini'],
  cards: [
    {
      head: 'Pas un seul', label: 'aucun, aucune',
      fr: fr(E(1055)),
      sub: rsOf(E(1055)),
      body: "aucun remplace l'article et suit le genre du nom : aucune idée, aucun problème. Il reste au singulier. EN: aucun replaces the article, agrees in gender, stays singular.",
    },
    {
      head: 'Deux choses à la fois', label: 'ni ... ni',
      fr: fr(E(1059)),
      sub: rsOf(E(1059)),
      body: "Un ni devant chaque chose. pas disparaît, et un, du, des aussi. EN: one ni before each thing; pas goes, and so do un, du and des.",
    },
    {
      head: 'Aucun endroit', label: 'nulle part',
      fr: fr(E(1063)),
      sub: rsOf(E(1063)),
      body: "nulle part se met là où tu dirais un lieu. C'est le contraire de partout. EN: nulle part is the opposite of partout.",
    },
    {
      head: 'Presque pas', label: 'guère, à lire',
      fr: fr(E(1065)),
      sub: rsOf(E(1065)),
      body: "Tu le liras dans un journal ou une annonce. À l'oral, on dit plutôt presque pas. EN: read it; say presque pas.",
    },
  ],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte aucun et ni ... ni',
  groups: [
    grp('Aucun, aucune', [
      it(E(1055), 'une idée : aucune'),
      it(E(1056), 'un problème : aucun'),
      it(E(1057), 'une différence : aucune'),
      it(E(1058), "aucun ami : le n s'entend"),
    ], chk(
      "« Il n'y a aucune ... » Quel nom peut suivre ?",
      ['serviette', 'problème'], 0,
      "aucune est féminin : une serviette. EN: aucune needs a feminine noun.")),
    grp('Ni ... ni', [
      it(E(1059), 'pas d’article'),
      it(E(1060), 'pas d’article non plus'),
      it(E(1062), "ce qui manque à l'appartement"),
      it(E(1069), "le et l' restent"),
    ], chk(
      "Dans « Je n'ai ni frère ni sœur », où est pas ?",
      ['il a disparu', 'avant ni'], 0,
      "ni prend la place de pas, deux fois. EN: ni takes pas's place.")),
    ctl('Nulle part', 'Tu as cherché tes lunettes partout, sans succès. Que dis-tu ?',
      ['Je ne trouve pas mes lunettes partout.', fr(E(1063))], 1,
      "« pas partout » dirait que tu les trouves à certains endroits. EN: pas partout means not everywhere."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aucun', 'nini'],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  sheetId: 'sheet-que',
  title: 'Les articles, une fois pour toutes',
  examples: [
    ex(E(1061), 'ni le ... ni la : les articles définis restent.'),
    ex(E(1062), 'ni balcon ni ascenseur : un et un disparaissent.'),
    ex(E(1070), 'ni viande ni poisson : ni article, ni pas.'),
    ex(E(1068), 'aucune place : zéro, au singulier.'),
    ex(E(1064), 'nulle part : aucun endroit.'),
    ex(E(1066), "guère : presque pas, un mot d'écrit."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['nini', 'aucun'],
};

const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Un seul, deux, ou presque pas',
  groups: [
    grp('Pas un seul, ou ni l’un ni l’autre', [
      it(E(1057), 'pas une seule différence'),
      it(E(1060), "ni l'un ni l'autre"),
      it(E(1068), 'pas une seule place'),
      it(E(1069), "ni l'un ni l'autre"),
    ], chk(
      'Tu refuses le thé ET le café. Quelle forme prends-tu ?',
      ['aucun', 'ni ... ni'], 1,
      "Deux choses nommées : ni ... ni. EN: two named things take ni ... ni.")),
    grp('Presque pas, ou pas du tout', [
      it(E(1065), 'presque pas'),
      it(E(1066), 'presque pas de temps'),
      it(E(1056), 'aucun, zéro'),
      it(E(1064), 'aucun endroit'),
    ], chk(
      "« Il ne pleut guère en juillet. » Pleut-il en juillet ?",
      ['jamais', 'un peu', 'beaucoup'], 1,
      "guère n'est pas zéro : presque pas. EN: hardly, not never.")),
    ctl('Le lieu', 'Quel second mot dit : aucun endroit ?',
      ['nulle part', 'aucun', 'personne'], 0,
      "nulle part, le contraire de partout. EN: nulle part, the opposite of partout."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aucun', 'nini'],
};

const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre pièges du zéro',
  errors: [
    {
      wrong: "Je n'ai pas ni frère ni sœur.",
      right: fr(E(1059)),
      why: "Normal : tu mets pas depuis le A1. Mais ni remplace pas, comme rien et personne. EN: ni replaces pas.",
    },
    {
      wrong: "Il n'y a aucuns problèmes.",
      right: fr(E(1056)),
      why: "En anglais, no problems est au pluriel. aucun compte zéro, et zéro reste au singulier. EN: aucun counts zero and stays singular.",
    },
    {
      wrong: 'Il ne mange ni de viande ni de poisson.',
      right: fr(E(1070)),
      why: "Après pas, du devient de, alors tu mets de partout. Avec ni, l'article disparaît complètement. EN: with ni the article vanishes altogether.",
    },
    {
      wrong: 'On ne va pas nulle part ce week-end.',
      right: fr(E(1064)),
      why: "En anglais, not anywhere a deux mots. nulle part suffit, comme rien et personne. EN: nulle part needs no pas.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['aucun', 'nini'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le genre', "« Je n'ai ... idée. »",
    ['aucune', 'aucun'], 0,
    "une idée, donc aucune. EN: idée is feminine."),
  ctl('Le nombre', 'aucun se met-il au pluriel ?',
    ['toujours', 'presque jamais'], 1,
    "Il compte zéro : singulier. EN: it counts zero."),
  ctl('Guère', "« Elle n'a guère le temps. » Où le lis-tu surtout ?",
    ['dans un texto à un ami', 'dans une chanson pour enfants', 'dans un texte écrit'], 2,
    "guère est un mot d'écrit. EN: guère is written French."),
], ['aucun', 'nini']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Aucun, ni ... ni, nulle part',
    opener: {
      line: "Pas de balcon, pas d'ascenseur, pas une place pour se garer : ici tu dis tout ça en moins de mots. EN: No balcony, no lift, not one parking space: here you say all that in fewer words.",
      imageRef: 'lessons/negation-avancee/act04.jpg',
    },
    sections: [],
    milestone: "Tu dis pas un seul avec aucun, ni l'un ni l'autre avec ni ... ni, et aucun endroit avec nulle part. EN: You can say not one, neither one nor the other, and nowhere.",
    estScreens: 32, restPoints: ['a4-exemples'],
  },
  sections: [A4_ANNONCE, A4_MOTS, A4_CONSTRUIRE, A4_EXEMPLES, A4_CHOISIR, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE SUJET QUI MANQUE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: at the agency, every complaint opens with the gap itself. */
const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: "À l'agence",
  frSub: 'Trois phrases qui commencent par le vide',
  setting: "Samedi matin, à l'agence de location, rue Saint-Joseph. Tu viens signaler les problèmes de l'appartement. Madame Tremblay prend des notes.",
  bubbles: [
    { from: 'narrator', fr: 'Madame Tremblay ouvre ton dossier et lit la fiche du technicien.', en: 'Madame Tremblay opens your file and reads the technician’s sheet.' },
    { from: 'coach', fr: "D'après mon dossier, le technicien est passé jeudi.", en: 'According to my file, the technician came on Thursday.' },
    { from: 'user', fr: fr(E(1075)), en: src(E(1075)).en, warn: 'personne ouvre la phrase, et pas disparaît' },
    { from: 'coach', fr: 'Depuis votre appel, les choses vont un peu mieux, je pense.', en: 'Since your call, things are a bit better, I think.' },
    { from: 'user', fr: fr(E(1076)), en: src(E(1076)).en, warn: 'rien, sujet de changer' },
    { from: 'coach', fr: 'Vos voisins du dessus pourraient confirmer.', en: 'Your upstairs neighbours could confirm it.' },
    { from: 'user', fr: fr(E(1087)), en: src(E(1087)).en, warn: 'personne, sujet de habiter' },
    { from: 'narrator', fr: 'Madame Tremblay relit ses notes. Trois phrases, et chaque fois le vide est au début.', en: 'Madame Tremblay rereads her notes. Three sentences, and each time the gap comes first.' },
  ],
  closing: { fr: 'Quand le vide est le sujet, il passe devant, et pas disparaît.', en: 'When the gap is the subject, it goes first and pas disappears.' },
  audio: REC('rec-b1-20-agence'),
  say: REFRAME,
  terms: ['sujet'],
};

const A5_SUJET: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-sujet',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-place',
  title: 'Le vide en premier',
  frSub: 'personne ne, rien ne, aucun ne',
  hint: 'Quatre cartes. Cherche pas : il n’y est jamais.',
  audio: REC('rec-b1-20-sujet'),
  say: REFRAME,
  terms: ['sujet'],
  cards: [
    {
      head: 'Une personne manque', label: 'personne ne',
      fr: fr(E(1075)),
      sub: rsOf(E(1075)),
      body: "personne est le sujet : il ouvre la phrase, puis ne, puis le verbe. Et c'est tout. EN: personne first, then ne, then the verb, and nothing else.",
    },
    {
      head: 'Une chose manque', label: 'rien ne',
      fr: fr(E(1076)),
      sub: rsOf(E(1076)),
      body: "La même forme avec rien. Devant a ou est, ne devient n'. EN: the same with rien; ne elides before a vowel.",
    },
    {
      head: 'Pas une seule chose', label: 'aucun ... ne',
      fr: fr(E(1077)),
      sub: rsOf(E(1077)),
      body: "aucun et son nom ouvrent la phrase, puis ne. Le verbe reste au singulier. EN: aucun plus its noun, then ne, singular verb.",
    },
    {
      head: "Ni l'un ni l'autre", label: 'ni ... ni ... ne',
      fr: fr(E(1080)),
      sub: rsOf(E(1080)),
      body: "Deux sujets, un ni devant chacun, puis ne. Deux sujets, donc un verbe au pluriel. EN: two subjects, so a plural verb.",
    },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Le vide ouvre la phrase',
  groups: [
    grp('Personne et rien devant', [
      it(E(1078), 'personne ne répond'),
      it(E(1079), 'rien ne marche'),
      it(E(1084), 'personne ne le sait'),
      it(E(1085), "rien n'est prêt"),
    ], chk(
      'Combien de mots de négation vois-tu dans chaque phrase ?',
      ['deux : le mot vide et ne', 'trois : le mot vide, ne et pas'], 0,
      "Deux, jamais trois. Le mot vide fait le travail de pas. EN: two, never three.")),
    grp('Aucun et ni devant', [
      it(E(1077), 'aucun train'),
      it(E(1081), 'aucune fenêtre'),
      it(E(1092), 'aucune de ces clés'),
      it(E(1080), 'ni ... ni, deux sujets'),
    ], chk(
      "« Ni le propriétaire ni l'agence ne ... »",
      ['répond', 'répondent'], 1,
      "Deux sujets : le verbe est au pluriel. EN: two subjects, plural verb.")),
    ctl('Au passé composé', "« Personne ... venu. »",
      ["n'est pas", "n'est"], 1,
      "Pas de pas : personne est déjà là. EN: no pas, personne is already there."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  sheetId: 'sheet-place',
  title: 'Le vide en sujet, partout',
  examples: [
    ex(E(1083), 'personne en sujet, au passé composé.'),
    ex(E(1086), 'aucun client : le vide, puis le nom, puis ne.'),
    ex('fr.a2.hebergement.088', 'personne en sujet, à la fin d’une phrase plus longue.'),
    ex('fr.a2.heure-et-date.147', 'rien ne presse : une expression toute faite.'),
    ex(E(1088), 'personne : aucune personne ne parle.'),
    ex(E(1092), 'aucune de ces clés : pas une seule.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet'],
};

/** CHOOSE: is the gap doing the verb, or receiving it? */
const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Sujet ou complément',
  groups: [
    grp('Qui fait le verbe', [
      it(E(1075), 'personne fait le verbe'),
      it(E(1022), 'personne subit le verbe'),
      it(E(1076), 'rien fait le verbe'),
      it(E(1017), 'rien subit le verbe'),
    ], chk(
      "« Personne n'est venu » et « On n'attend personne » : dans laquelle personne est-il le sujet ?",
      ["Personne n'est venu.", "On n'attend personne."], 0,
      "Personne ouvre la phrase et fait le verbe. EN: personne opens the sentence and does the verb.")),
    grp('Le bon mot en sujet', [
      it(E(1079), 'une chose : rien'),
      it(E(1088), 'une personne : personne'),
      it(E(1077), 'un seul : aucun'),
      it(E(1080), 'deux : ni ... ni'),
    ], chk(
      'Ta porte, ta fenêtre et ton four sont tous cassés. Que dis-tu ?',
      ['Personne ne marche.', 'Rien ne marche.', 'Aucun ne marche.'], 1,
      "Des choses : rien. EN: things, so rien.")),
    ctl('La réponse courte', '« Qui a appelé ? » Tu réponds en un mot.',
      ['Personne.', 'Rien.'], 0,
      "personne peut répondre tout seul, sans ne. EN: personne alone is a full answer."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet'],
};

/** TRAP, stepped: pas added to a subject gap. */
const A5_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a5-piege',
  layer: 'core',
  swipe: true,
  title: 'Le vide devant, et pas dehors',
  rule: {
    title: 'Le mot vide fait le travail de pas',
    body: "Quand personne, rien ou aucun est le sujet, il ouvre la phrase et remplace pas. Tu écris ne, et jamais pas. Avec ni ... ni, le verbe passe au pluriel. EN: as the subject, the negative word replaces pas.",
  },
  cards: [
    { promptLabel: 'pas en trop', promptSound: "Personne n'est pas venu.", fr: fr(E(1075)), ipa: ipaOf(E(1075)), tip: "personne suffit. EN: personne is enough." },
    { promptLabel: 'pas en trop', promptSound: 'Rien ne marche pas dans cette cuisine.', fr: fr(E(1079)), ipa: ipaOf(E(1079)), tip: "rien fait déjà le vide. EN: rien already makes the gap." },
    { promptLabel: 'ne oublié', promptSound: 'Personne répond au téléphone.', fr: fr(E(1078)), ipa: ipaOf(E(1078)), tip: "Sans ne, c'est de l'oral. À l'écrit, ne reste. EN: in writing ne stays." },
    { promptLabel: 'aucun avec pas', promptSound: 'Aucun train ne passe pas après minuit.', fr: fr(E(1077)), ipa: ipaOf(E(1077)), tip: "aucun remplace pas. EN: aucun replaces pas." },
    { promptLabel: 'un verbe au singulier', promptSound: "Ni le propriétaire ni l'agence ne répond.", fr: fr(E(1080)), ipa: ipaOf(E(1080)), tip: "Deux sujets : répondent. EN: two subjects, plural." },
    { promptLabel: 'ne avant le vide', promptSound: 'Ne personne a appelé.', fr: fr(E(1107)), ipa: ipaOf(E(1107)), tip: "Le vide d'abord, puis ne. EN: the gap first, then ne." },
  ],
  drill: [
    { promptSay: 'Personne ... venu.', opts: ["n'est", "n'est pas"], correct: 0 },
    { promptSay: 'Rien ... changé.', opts: ["n'a pas", "n'a"], correct: 1 },
    { promptSay: 'Aucun client ... plaint.', opts: ["ne s'est pas", "ne s'est"], correct: 1 },
    { promptSay: '... répond au téléphone.', opts: ['Personne ne', 'Pas personne', 'Personne'], correct: 0 },
    { promptSay: "Ni le propriétaire ni l'agence ne ... .", opts: ['répondent', 'répond'], correct: 0 },
    { promptSay: 'Rien ne ... dans cette cuisine.', opts: ['marche pas', 'marche'], correct: 1 },
    { promptSay: '... fenêtre ne ferme bien.', opts: ['Aucun', 'Pas une', 'Aucune'], correct: 2 },
    { promptSay: 'Personne ... le sait.', opts: ['ne', 'ne pas'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le mot vide fait le travail de pas' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-20-piege-sujet'),
  say: REFRAME,
  terms: ['sujet'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le compte', "« Personne n'est venu. » Combien de mots négatifs ?",
    ['trois', 'deux'], 1,
    "personne et ne, et pas de pas. EN: personne and ne, no pas."),
  ctl('Le verbe', '« Ni Paul ni Léa ne ... . »',
    ['viennent', 'vient'], 0,
    "Deux sujets, pluriel. EN: two subjects, plural."),
  ctl('Le bon mot', 'Toutes tes clés sont fausses. « ... de ces clés ne marche. »',
    ['Personne', 'Aucune', 'Rien'], 1,
    "Pas une seule clé : aucune. EN: not one key."),
], ['sujet']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le sujet qui manque',
    opener: {
      line: "Personne n'est venu, rien n'a changé : ici le vide passe en premier, et tu apprends à le mettre là. EN: Nobody came, nothing changed: here the gap goes first, and you learn to put it there.",
      imageRef: 'lessons/negation-avancee/act05.jpg',
    },
    sections: [],
    milestone: "Tu ouvres une phrase avec personne, rien, aucun ou ni ... ni, sans ajouter pas. EN: You can open a sentence with personne, rien, aucun or ni ... ni, and add no pas.",
    estScreens: 30, restPoints: ['a5-exemples'],
  },
  sections: [A5_HISTOIRE, A5_SUJET, A5_CONSTRUIRE, A5_EXEMPLES, A5_CHOISIR, A5_PIEGE, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — AU PASSÉ COMPOSÉ
 *
 *  a2.05 put pas between the auxiliary and the participle. The short second
 *  words do the same; personne, aucun, que and nulle part go after.
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Rien vu, vu personne',
  frSub: 'Écoute où tombe le second mot',
  lines: [
    ln(E(1093)), ln(E(1094)), ln(E(1095)), ln(E(1097)),
    ln(E(1098)), ln(E(1100)), ln(E(1101)), ln(E(1103)),
  ],
  questions: [
    { q: 'Première phrase : as-tu vu quelque chose ?', opts: ['Oui, une chose.', 'Non, rien.'], correct: 1, why: "« je n'ai rien vu » : aucune chose. EN: nothing." },
    { q: "Deuxième phrase : qu'est-ce que tu n'as pas vu ?", opts: ['une personne', 'une chose'], correct: 0, why: "« je n'ai vu personne » : aucune personne. EN: nobody." },
    { q: 'Est-elle venue ?', opts: ['Oui, une fois.', 'Non, à aucun moment.', 'Oui, plus tard.'], correct: 1, why: "« elle n'est jamais venue ». EN: she never came." },
    { q: 'Combien de messages avez-vous reçus ?', opts: ['aucun', 'un seul', 'plusieurs'], correct: 0, why: "« aucun message » : zéro. EN: not one." },
    { q: 'Combien as-tu payé ?', opts: ['rien', 'tout', 'la moitié'], correct: 2, why: "« je n'ai payé que la moitié » : que garde la moitié. EN: only half." },
  ],
  audio: REC('rec-b1-20-compose-ecoute'),
  say: REFRAME,
  terms: ['place'],
};

const A6_PLACE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-place',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-place',
  title: 'Avant ou après le participe',
  frSub: 'Deux places, deux familles',
  hint: 'Quatre cartes. Regarde de quel côté de vu tombe le mot.',
  audio: REC('rec-b1-20-place'),
  say: REFRAME,
  terms: ['place'],
  cards: [
    {
      head: 'Ce que tu as déjà', label: Cap(PC_AVOIR_REF),
      fr: "je n'ai pas vu",
      sub: '[zhuh nay pa VÜ]',
      body: `« ${A205_REFRAME} » En français : « ${A205_REFRAME_FR} » pas se glisse entre ai et vu. EN: pas slips between the two words.`,
    },
    {
      head: 'Les mots courts, au milieu', label: 'rien · jamais · plus',
      fr: fr(E(1093)),
      sub: rsOf(E(1093)),
      body: "rien, jamais et plus font comme pas : entre l'auxiliaire et le participe. EN: rien, jamais and plus sit where pas sits.",
    },
    {
      head: 'Les autres, après', label: 'personne · aucun',
      fr: fr(E(1094)),
      sub: rsOf(E(1094)),
      body: "personne et aucun prennent la place du complément : après le participe. EN: personne and aucun go where the object goes.",
    },
    {
      head: 'Que et nulle part aussi', label: 'que · nulle part',
      fr: fr(E(1101)),
      sub: rsOf(E(1101)),
      body: "que va devant ce qui reste, et ce qui reste vient après le participe. nulle part va au même endroit. EN: que and nulle part also go after.",
    },
  ],
};

const A6_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-tableau',
  layer: 'core',
  sheetId: 'sheet-place',
  title: 'Six mots, deux places',
  cols: ['Second mot', 'Place', 'Exemple'],
  rows: [
    { cells: ['rien', 'avant le participe', "je n'ai rien vu"], say: fr(E(1093)),
      detail: { title: 'rien', body: "Court, il reste près de l'auxiliaire. EN: short, it stays by the auxiliary.", say: fr(E(1097)) } },
    { cells: ['jamais', 'avant le participe', "elle n'est jamais venue"], say: fr(E(1095)),
      detail: { title: 'jamais', body: "Comme pas, au milieu. EN: in the middle, like pas.", say: fr(E(1103)) } },
    { cells: ['plus', 'avant le participe', 'ils ne sont plus venus'], say: fr(E(1112)),
      detail: { title: 'plus', body: "Au milieu aussi. EN: in the middle too.", say: fr(E(1096)) } },
    { cells: ['personne', 'après le participe', "je n'ai vu personne"], say: fr(E(1094)),
      detail: { title: 'personne', body: "Il prend la place du complément. EN: it takes the object's place.", say: fr(E(1098)) } },
    { cells: ['aucun', 'après le participe', "nous n'avons reçu aucun message"], say: fr(E(1100)),
      detail: { title: 'aucun', body: "aucun et son nom viennent après. EN: aucun and its noun come after.", say: fr(E(1100)) } },
    { cells: ['que, nulle part', 'après le participe', "je n'ai payé que la moitié"], say: fr(E(1101)),
      detail: { title: 'que et nulle part', body: "Devant ce qui reste, ou à la place du lieu. EN: before what remains, or where the place goes.", say: fr(E(1099)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['place'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Deux places à construire',
  groups: [
    grp('Au milieu', [
      it(E(1097), 'rien, entre a et dit'),
      it(E(1104), 'rien, entre as et oublié'),
      it(E(1103), 'jamais, entre est et arrivé'),
      it(E(1096), 'plus, entre sommes et retournés'),
    ], chk(
      'Où est le second mot dans ces quatre phrases ?',
      ["entre l'auxiliaire et le participe", 'après le participe'], 0,
      "Comme pas. EN: like pas, in the middle.")),
    grp('Après le participe', [
      it(E(1098), 'personne, après rencontré'),
      it(E(1099), 'nulle part, après trouvé'),
      it(E(1105), 'que, après vu'),
      it(E(1106), 'nulle part, après allée'),
    ], chk(
      "« On n'a rencontré personne. » Personne vient après quel mot ?",
      ['a', 'rencontré'], 1,
      "Après le participe, à la place du complément. EN: after the participle.")),
    ctl('Avec des pronoms', "« Il ne me l'a jamais rendu. » Où sont me et l' ?",
      ['après jamais', 'entre ne et a'], 1,
      `Les pronoms restent collés à l'auxiliaire. ${Cap(ORDRE_PRONOMS_REF)} : « ${B117_REFRAME} » EN: the pronouns stay glued to the auxiliary.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['place'],
};

const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu racontes',
  groups: [
    grp('Rien ou personne', [
      it(E(1093), 'aucune chose vue'),
      it(E(1094), 'aucune personne vue'),
      it(E(1110), 'aucun son'),
      it(E(1107), 'aucun appel'),
    ], chk(
      'Tu étais seul dans la rue, et tout était calme. Que dis-tu à la police ?',
      ["Je n'ai personne vu.", "Je n'ai vu personne."], 1,
      "personne après vu. EN: personne after the participle.")),
    grp('Pas, rien ou jamais', [
      it('fr.a2.negation-et-restriction.113', 'pas : un non simple'),
      it(E(1095), 'jamais : à aucun moment'),
      it('fr.a2.marche.119', 'rien : aucun achat'),
      it('fr.a2.deplacements.012', 'jamais : le train, à aucun moment'),
    ], chk(
      "« Le train n'est jamais arrivé. » Est-il arrivé en retard ?",
      ["Non, il n'est pas arrivé du tout.", 'Oui, très en retard.'], 0,
      "jamais : à aucun moment, donc pas du tout. EN: never, so not at all.")),
    ctl('Le son', "« Je n'ai rien entendu. » Qu'entends-tu entre rien et entendu ?",
      ['un n qui les relie', 'une pause'], 0,
      "rien se lie : ryehⁿ-nahⁿ-tahⁿ-DÜ. EN: rien links with an n."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['place'],
};

/** TRAP, stepped: the second word in the wrong slot. */
const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Personne après, rien au milieu',
  rule: {
    title: 'Deux familles, deux places',
    body: "Au passé composé, rien, jamais et plus restent collés à l'auxiliaire. personne, aucun, que et nulle part passent après le participe. EN: short words before the participle, the rest after it.",
  },
  cards: [
    { promptLabel: 'personne au milieu', promptSound: "Je n'ai personne vu.", fr: fr(E(1094)), ipa: ipaOf(E(1094)), tip: "personne va après vu. EN: personne after the participle." },
    { promptLabel: 'rien à la fin', promptSound: "Je n'ai vu rien.", fr: fr(E(1093)), ipa: ipaOf(E(1093)), tip: "rien reste au milieu. EN: rien stays in the middle." },
    { promptLabel: 'jamais à la fin', promptSound: "Elle n'est venue jamais.", fr: fr(E(1095)), ipa: ipaOf(E(1095)), tip: "jamais va avant le participe. EN: jamais before the participle." },
    { promptLabel: 'aucun au milieu', promptSound: "Nous n'avons aucun message reçu.", fr: fr(E(1100)), ipa: ipaOf(E(1100)), tip: "aucun et son nom viennent après. EN: aucun plus noun after." },
    { promptLabel: 'que mal placé', promptSound: "Je n'ai que payé la moitié.", fr: fr(E(1101)), ipa: ipaOf(E(1101)), tip: "que va devant ce qui reste : la moitié. EN: que before what remains." },
    { promptLabel: 'pas en trop', promptSound: "Il n'a pas rien dit.", fr: fr(E(1097)), ipa: ipaOf(E(1097)), tip: "rien remplace pas. EN: rien replaces pas." },
  ],
  drill: [
    { promptSay: "Je n'ai ... (voir, rien).", opts: ['vu rien', 'rien vu'], correct: 1 },
    { promptSay: "Je n'ai ... (voir, personne).", opts: ['vu personne', 'personne vu'], correct: 0 },
    { promptSay: "Elle n'est ... (venir, jamais).", opts: ['venue jamais', 'jamais venue'], correct: 1 },
    { promptSay: "Nous n'avons reçu ... message.", opts: ['aucun', 'pas de', 'rien'], correct: 0 },
    { promptSay: "On n'a rencontré ... .", opts: ['rien', 'personne'], correct: 1 },
    { promptSay: "Tu n'as ... oublié.", opts: ['personne', 'rien'], correct: 1 },
    { promptSay: 'Je ne suis allée ... .', opts: ['nulle part', 'jamais', 'aucun'], correct: 0 },
    { promptSay: 'Ils ne sont ... venus.', opts: ['personne', 'aucun', 'plus'], correct: 2 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Deux familles, deux places' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-20-piege-place'),
  say: REFRAME,
  terms: ['place'],
};

const A6_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a6-dictee',
  layer: 'core',
  title: 'Écris où tombe le second mot',
  frSub: 'Au passé composé',
  itemIds: dicteeFor(6),
  audio: AUDIO,
  say: REFRAME,
  terms: ['place'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('rien', "« Je n'ai ... vu. »",
    ['personne', 'rien'], 1,
    "Seul rien peut aller au milieu. EN: only rien fits in the middle."),
  ctl('personne', 'Où va personne au passé composé ?',
    ['après le participe', "entre l'auxiliaire et le participe"], 0,
    "Après, à la place du complément. EN: after the participle."),
  ctl('jamais', "« Elle n'est ... venue. »",
    ['personne', 'aucune', 'jamais'], 2,
    "jamais, au milieu. EN: jamais, in the middle."),
], ['place']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Au passé composé',
    opener: {
      line: "Je n'ai rien vu, je n'ai vu personne : ici tu apprends pourquoi les deux mots ne tombent pas au même endroit. EN: I saw nothing, I saw nobody: here you learn why the two words land in different places.",
      imageRef: 'lessons/negation-avancee/act06.jpg',
    },
    sections: [],
    milestone: "Tu places rien, jamais et plus avant le participe, et personne, aucun et que après. EN: You can put rien, jamais and plus before the participle, and personne, aucun and que after it.",
    estScreens: 36, restPoints: ['a6-tableau', 'a6-choisir'],
  },
  sections: [A6_ECOUTE, A6_PLACE, A6_CONSTRUIRE, A6_TABLEAU, A6_CHOISIR, A6_PIEGE, A6_DICTEE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — DEVANT UN INFINITIF
 *
 *  a2.19 and a2.13 wrap the CONJUGATED verb. This act negates the
 *  infinitive itself, where ne pas travel together, and adds sans.
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Les règles de la maison',
  frSub: 'Monsieur Gagnon revient avec une liste',
  setting: "Le lendemain, monsieur Gagnon passe à l'appartement. Il veut éviter les problèmes avec les voisins, et il a préparé une liste.",
  bubbles: [
    { from: 'narrator', fr: 'Monsieur Gagnon sort une feuille pliée en quatre.', en: 'Monsieur Gagnon takes out a sheet folded in four.' },
    { from: 'coach', fr: fr(E(1115)), en: src(E(1115)).en, warn: 'ne pas, ensemble, devant claquer' },
    { from: 'coach', fr: fr(E(1127)), en: src(E(1127)).en, warn: 'la même forme, sur une affiche' },
    { from: 'user', fr: 'D’accord. Et le chauffage, je peux le régler moi-même.', en: 'Fine. And the heating, I can adjust it myself.' },
    { from: 'coach', fr: fr(E(1125)), en: src(E(1125)).en, warn: 'ne rien, ensemble, devant toucher' },
    { from: 'coach', fr: 'Essayez de ne pas mettre de musique après vingt-deux heures.', en: 'Try not to play music after ten at night.', warn: 'de ne pas mettre' },
    { from: 'narrator', fr: "Puis il s'en va, sans dire au revoir.", en: 'Then he leaves, without saying goodbye.' },
  ],
  closing: { fr: 'Devant un infinitif, ne pas se collent et passent devant.', en: 'Before an infinitive, ne pas stick together and go in front.' },
  audio: REC('rec-b1-20-regles'),
  say: REFRAME,
  terms: ['infinitif'],
};

const A7_INFINITIF: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-infinitif',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-place',
  title: 'Ne pas, ensemble, devant',
  frSub: "Quand c'est l'infinitif que tu nies",
  hint: 'Quatre cartes. Regarde quel verbe est nié.',
  audio: REC('rec-b1-20-infinitif'),
  say: REFRAME,
  terms: ['infinitif'],
  cards: [
    {
      head: 'Ce que tu as déjà', label: Cap(FUTUR_PROCHE_REF),
      fr: fr(E(1118)),
      sub: rsOf(E(1118)),
      body: `« ${A219_REFRAME} » En français : « ${A219_REFRAME_FR} » Ici, ne pas entoure veux. EN: here ne pas wraps the conjugated verb.`,
    },
    {
      head: "Nier l'infinitif lui-même", label: 'ne pas + infinitif',
      fr: fr(E(1114)),
      sub: rsOf(E(1114)),
      body: "Il a demandé, oui. Ce qui est nié, c'est fumer. Alors ne et pas se collent devant fumer. EN: fumer is what is negated, so ne pas go before it.",
    },
    {
      head: 'Les autres mots aussi', label: 'ne plus, ne jamais, ne rien',
      fr: fr(E(1117)),
      sub: rsOf(E(1117)),
      body: "Les mots courts font comme pas : ne plus boire, ne jamais revenir, ne rien toucher. EN: the short words follow the same pattern.",
    },
    {
      head: 'Sans, tout seul', label: 'sans + infinitif',
      fr: fr(E(1121)),
      sub: rsOf(E(1121)),
      body: "sans remplace toute la négation : pas de ne, pas de pas. Mais sans rien et sans personne, oui. EN: sans needs no ne and no pas.",
    },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: "Devant l'infinitif",
  groups: [
    grp('Ne pas devant', [
      it(E(1113), 'ne pas sortir'),
      it(E(1115), 'ne pas claquer'),
      it('fr.a2.heure-et-date.132', 'pour ne pas rater'),
      it(E(1128), 'pour ne pas rater, en tête de phrase'),
    ], chk(
      '« pour ne pas rater le bus » : où est pas ?',
      ['après rater', 'avant rater, collé à ne'], 1,
      "Devant l'infinitif, ensemble. EN: before the infinitive, together.")),
    grp('Sans', [
      it('fr.a2.verbes.690', 'sans frapper'),
      it(E(1122), 'sans lire'),
      it(E(1123), 'sans rien dire'),
      it(E(1126), 'sans voir personne'),
    ], chk(
      '« Il est entré sans frapper. » A-t-il frappé ?',
      ['Non.', 'Oui.'], 0,
      "sans dit que ça n'a pas eu lieu. EN: sans says it did not happen.")),
    ctl('Personne après', "« Je suis parti sans voir personne. » Où est personne ?",
      ["avant l'infinitif", "après l'infinitif"], 1,
      "personne reste après, comme au passé composé. EN: personne stays after, as in the passé composé."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  sheetId: 'sheet-place',
  title: 'Deux verbes, un seul nié',
  examples: [
    ex(E(1116), 'ne plus, devant boire.'),
    ex(E(1117), 'ne jamais, devant revenir.'),
    ex(E(1125), 'ne rien, devant toucher.'),
    ex(E(1119), "je peux ne pas venir : j'ai le droit de rester chez moi."),
    ex(E(1120), "je ne peux pas venir : c'est impossible."),
    ex('fr.b1.maison.008', "sans lire : ils n'ont pas lu les clauses."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif'],
};

const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Quel verbe est nié',
  groups: [
    grp('Pouvoir, ou pouvoir ne pas', [
      it(E(1120), 'impossible'),
      it(E(1119), 'permis de ne pas'),
      it(E(1118), 'pas envie'),
      it(E(1113), 'une préférence'),
    ], chk(
      '« Tu peux ne pas venir vendredi. » Que veut dire ta cheffe ?',
      ["Tu n'as pas le droit de venir.", 'Tu as le droit de rester chez toi.'], 1,
      "Elle nie venir, pas pouvoir. EN: she negates coming, not being able to."),
    ),
    grp('Une consigne ou un récit', [
      it(E(1115), 'une consigne'),
      it(E(1127), 'une consigne'),
      it(E(1121), 'un récit'),
      it(E(1122), 'un récit'),
    ], chk(
      'Sur une affiche, quelle forme lis-tu le plus ?',
      ['merci de ne pas + infinitif', 'sans + infinitif'], 0,
      "Merci de ne pas : la consigne polie. EN: the polite rule."),
    ),
    ctl('Dans le bon ordre', "« J'essaie de ... café. »",
      ['ne boire plus de', 'ne plus boire de', 'ne boire pas de'], 1,
      "ne plus, ensemble, devant boire. EN: ne plus, together, before boire."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: "Quatre pièges de l'infinitif",
  errors: [
    {
      wrong: "Il m'a demandé de ne fumer pas.",
      right: fr(E(1114)),
      why: "Normal : avec un verbe conjugué, pas vient après. Devant un infinitif, ne pas se collent devant. EN: before an infinitive, ne pas go together in front.",
    },
    {
      wrong: 'Merci de pas claquer la porte.',
      right: fr(E(1115)),
      why: "Tu l'entendras à l'oral. Sur une affiche ou dans un courriel, ne reste. EN: in writing ne stays.",
    },
    {
      wrong: 'Il est parti sans ne pas dire au revoir.',
      right: fr(E(1121)),
      why: "sans est déjà une négation. Avec ne pas en plus, tu dirais presque le contraire. EN: sans is already negative.",
    },
    {
      wrong: 'Elle est sortie sans dire rien.',
      right: fr(E(1123)),
      why: "En anglais, without saying anything. En français, rien passe devant l'infinitif : sans rien dire. EN: rien goes before the infinitive.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La forme', '« Merci de ne ... fumer. »',
    ['pas', 'jamais pas', 'plus rien pas'], 0,
    "ne pas, devant fumer. EN: ne pas before fumer."),
  ctl('sans', '« sans dire au revoir » : faut-il ajouter ne ?',
    ['Oui', 'Non'], 1,
    "sans suffit. EN: sans is enough."),
  ctl('Le sens', '« Je peux ne pas venir. »',
    ["j'ai le droit de rester chez moi", 'je ne peux pas venir'], 0,
    "C'est venir qui est nié. EN: venir is negated."),
], ['infinitif']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Devant un infinitif',
    opener: {
      line: "Merci de ne pas claquer la porte : ici tu apprends à nier un verbe qui n'a pas de personne. EN: Please do not slam the door: here you learn to negate a verb that has no person.",
      imageRef: 'lessons/negation-avancee/act07.jpg',
    },
    sections: [],
    milestone: "Tu mets ne pas, ne plus ou ne rien devant un infinitif, et tu dis sans sans ajouter ne. EN: You can put ne pas, ne plus or ne rien before an infinitive, and use sans with no ne.",
    estScreens: 30, restPoints: ['a7-exemples'],
  },
  sections: [A7_HISTOIRE, A7_INFINITIF, A7_CONSTRUIRE, A7_EXEMPLES, A7_CHOISIR, A7_ERREURS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — PLUSIEURS VIDES
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Deux vides, trois vides',
  frSub: 'Écoute chaque second mot',
  lines: [
    ln(E(1131)), ln(E(1132)), ln(E(1133)), ln(E(1135)),
    ln(E(1137)), ln(E(1138)), ln(E(1142)), ln(E(1144)),
  ],
  questions: [
    { q: 'Première phrase : parles-tu encore ?', opts: ['Non, plus du tout.', 'Oui, un peu.'], correct: 0, why: "« je ne dis plus rien » : ça a cessé, complètement. EN: it has stopped." },
    { q: 'Deuxième phrase : voit-il encore ses amis ?', opts: ['Oui, parfois.', 'Non, plus personne.'], correct: 1, why: "« plus personne » : il en voyait, il n'en voit plus. EN: nobody any more." },
    { q: 'Vas-tu revenir ici ?', opts: ['peut-être', 'bientôt', 'plus jamais'], correct: 2, why: "« plus jamais » : c'est fini. EN: never again." },
    { q: 'Reste-t-il quelque chose à faire ?', opts: ['Non, plus rien.', 'Oui, beaucoup.'], correct: 0, why: "« plus rien à faire ». EN: nothing left to do." },
    { q: "Dernière phrase : qu'est-ce qu'elle mange maintenant ?", opts: ['plus rien', 'seulement des légumes', 'de tout'], correct: 1, why: "« plus que des légumes » : plus et que ensemble, seulement maintenant. EN: only vegetables now." },
  ],
  audio: REC('rec-b1-20-combine-ecoute'),
  say: REFRAME,
  terms: ['combine'],
};

const A8_ORDRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-ordre',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-mots',
  title: 'Un seul ne, plusieurs seconds mots',
  frSub: 'plus, jamais, rien, personne',
  hint: "Quatre cartes. L'ordre ne change jamais.",
  audio: REC('rec-b1-20-ordre'),
  say: REFRAME,
  terms: ['combine'],
  cards: [
    {
      head: 'Ils ne s’annulent pas', label: 'plus rien',
      fr: fr(E(1131)),
      sub: rsOf(E(1131)),
      body: "Un seul ne, deux seconds mots. En français, deux négations ne font pas un oui : elles s'ajoutent. EN: two negatives stack, they do not cancel.",
    },
    {
      head: "L'ordre fixe", label: 'plus jamais',
      fr: fr(E(1135)),
      sub: rsOf(E(1135)),
      body: "plus avant jamais, toujours. Ça a cessé, et ça ne reviendra à aucun moment. EN: plus before jamais, always.",
    },
    {
      head: 'Les trois ensemble', label: 'plus jamais rien',
      fr: fr(E(1136)),
      sub: rsOf(E(1136)),
      body: "plus, puis jamais, puis rien ou personne. Le temps d'abord, la chose à la fin. EN: the time words first, the thing last.",
    },
    {
      head: 'Seulement, désormais', label: 'plus que',
      fr: fr(E(1144)),
      sub: rsOf(E(1144)),
      body: "Elle mangeait de tout. Maintenant, seulement des légumes : ne ... plus que. EN: ne ... plus que means only, from now on.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Empile les vides',
  groups: [
    grp('Deux mots', [
      it(E(1132), 'plus, puis personne'),
      it(E(1133), 'jamais, puis rien'),
      it(E(1134), 'jamais, puis personne'),
      it(E(1138), 'plus, puis personne'),
    ], chk(
      "« Il ne voit plus personne. » Quel mot vient en premier ?",
      ['personne', 'plus'], 1,
      "plus d'abord, personne à la fin. EN: plus first, personne last.")),
    grp('Au passé composé et en sujet', [
      it(E(1140), 'plus jamais, avant revu'),
      it(E(1143), 'jamais rien, avant volé'),
      it(E(1141), 'personne en sujet, jamais rien après'),
      it(E(1142), 'plus rien, en sujet'),
    ], chk(
      "« Je n'ai jamais rien volé. » Où est rien ?",
      ['avant volé', 'après volé'], 0,
      "rien reste au milieu, derrière jamais. EN: rien stays in the middle, behind jamais.")),
    ctl('Pas reste seul', '« Je ne dis pas rien. » Est-ce du français correct ?',
      ['Oui', 'Non, jamais'], 1,
      "pas ne se combine avec aucun autre second mot. EN: pas never combines."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['combine'],
};

const A8_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a8-hacks',
  layer: 'core',
  title: 'Trois astuces pour empiler',
  hacks: [
    {
      hack: "Le temps d'abord, la chose à la fin : plus, jamais, puis rien ou personne.",
      why: "plus et jamais disent quand, rien et personne disent quoi. Quand vient avant quoi. EN: when-words before what-words.",
    },
    {
      hack: 'Deux négations ne font pas un oui.',
      why: "En français, plus rien ou jamais personne restent négatifs. Ne cherche pas le sens positif. EN: stacked negatives stay negative.",
    },
    {
      hack: 'Si tu vois pas, arrête-toi là.',
      why: "pas ne se combine avec aucun autre second mot. Si tu veux en ajouter un, enlève pas. EN: to add a second word, drop pas.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['combine'],
};

const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Toujours, ou depuis peu',
  groups: [
    grp('Une habitude ou un changement', [
      it(E(1133), 'toujours, à aucun moment'),
      it(E(1131), 'avant oui, maintenant non'),
      it(E(1134), 'toujours vide'),
      it(E(1147), 'avant oui, maintenant non'),
    ], chk(
      "« Je ne connais plus personne dans cette ville. » Y as-tu connu des gens ?",
      ['Oui, avant.', 'Non, jamais.'], 0,
      "plus suppose un avant. EN: plus implies a before.")),
    grp('Avec que ou nulle part', [
      it(E(1144), 'maintenant, seulement des légumes'),
      it(E(1145), 'plus nulle part'),
      it('fr.a1.objets.196', 'plus rien du tout'),
      it(E(1137), 'plus rien'),
    ], chk(
      "« Elle ne mange plus que des légumes. » Mange-t-elle de la viande ?",
      ['Oui, un peu.', 'Oui, le soir.', 'Non, plus maintenant.'], 2,
      "plus que : avant de tout, maintenant seulement des légumes. EN: only vegetables now.")),
    ctl('Le bon ordre', "Tu ne diras rien, à aucun moment, et c'est fini. Que dis-tu ?",
      [fr(E(1136)), 'Je ne dirai rien plus jamais.'], 0,
      "plus, puis jamais, puis rien. EN: plus, then jamais, then rien."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['combine'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Un seul ne, un ordre fixe',
  rule: {
    title: 'plus, jamais, puis rien ou personne',
    body: "Derrière un seul ne, les seconds mots s'empilent dans un ordre fixe. pas ne se mélange jamais aux autres. EN: behind one ne, the second words stack in a fixed order, and pas never joins them.",
  },
  cards: [
    { promptLabel: 'pas en plus', promptSound: 'Je ne dis pas plus rien.', fr: fr(E(1131)), ipa: ipaOf(E(1131)), tip: "pas ne s'empile pas. EN: pas does not stack." },
    { promptLabel: 'ordre inversé', promptSound: 'Il ne voit personne plus.', fr: fr(E(1132)), ipa: ipaOf(E(1132)), tip: "plus d'abord. EN: plus first." },
    { promptLabel: 'ne en double', promptSound: 'Je ne reviendrai ne plus jamais ici.', fr: fr(E(1135)), ipa: ipaOf(E(1135)), tip: "Un seul ne, au début. EN: one ne only." },
    { promptLabel: 'ordre inversé', promptSound: 'Elle ne fait rien jamais.', fr: fr(E(1133)), ipa: ipaOf(E(1133)), tip: "jamais avant rien. EN: jamais before rien." },
    { promptLabel: 'rien après le participe', promptSound: "Je n'ai jamais volé rien.", fr: fr(E(1143)), ipa: ipaOf(E(1143)), tip: "rien reste au milieu. EN: rien stays in the middle." },
    { promptLabel: 'pas avec un sujet', promptSound: "Plus rien ne m'étonne pas.", fr: fr(E(1142)), ipa: ipaOf(E(1142)), tip: "plus rien fait déjà tout le travail. EN: plus rien does the whole job." },
  ],
  drill: [
    { promptSay: 'Je ne dis ... .', opts: ['rien plus', 'plus rien'], correct: 1 },
    { promptSay: 'Il ne voit ... .', opts: ['plus personne', 'personne plus'], correct: 0 },
    { promptSay: 'Je ne reviendrai ... ici.', opts: ['jamais plus pas', 'pas plus jamais', 'plus jamais'], correct: 2 },
    { promptSay: 'Elle ne fait ... .', opts: ['rien jamais', 'jamais rien'], correct: 1 },
    { promptSay: "Il n'y a ... à faire.", opts: ['plus rien', 'pas plus rien'], correct: 0 },
    { promptSay: "Je n'ai ... volé.", opts: ['rien jamais', 'jamais rien'], correct: 1 },
    { promptSay: "... ne m'étonne.", opts: ['Plus rien', 'Rien plus', 'Pas rien'], correct: 0 },
    { promptSay: 'Elle ne mange ... des légumes.', opts: ['que plus', 'plus que'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'plus, jamais, puis rien ou personne' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-20-piege-combine'),
  say: REFRAME,
  terms: ['combine'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl("L'ordre", 'plus, jamais, rien : lequel vient en dernier ?',
    ['plus', 'jamais', 'rien'], 2,
    "La chose à la fin. EN: the thing last."),
  ctl('Le sens', "« Je ne dirai plus jamais rien. » Est-ce un oui ?",
    ["Non, c'est un non très fort.", 'Oui, deux négations font un oui.'], 0,
    "Elles s'ajoutent. EN: they stack."),
  ctl('pas', 'Avec combien d’autres seconds mots pas se combine-t-il ?',
    ['tous', 'aucun', 'deux'], 1,
    "Aucun : pas reste seul. EN: none; pas stays alone."),
], ['combine']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Plusieurs vides',
    opener: {
      line: "Plus jamais, plus personne, plus rien : ici tu empiles les vides derrière un seul ne. EN: Never again, nobody any more, nothing left: here you stack gaps behind a single ne.",
      imageRef: 'lessons/negation-avancee/act08.jpg',
    },
    sections: [],
    milestone: "Tu combines plus, jamais, rien et personne dans le bon ordre, et tu laisses pas tout seul. EN: You can combine plus, jamais, rien and personne in order, and leave pas on its own.",
    estScreens: 32, restPoints: ['a8-hacks'],
  },
  sections: [A8_ECOUTE, A8_ORDRE, A8_CONSTRUIRE, A8_HACKS, A8_CHOISIR, A8_PIEGE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — RÉPONDRE
 *
 *  a1.18 gave moi non plus. This act adds si, the other pronouns with non
 *  plus, moi si, and the renforts.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Le coup de fil du lundi',
  frSub: 'Monsieur Gagnon se trompe deux fois',
  setting: "Lundi soir, monsieur Gagnon t'appelle. Il a l'air inquiet, et il a sous les yeux un vieux relevé de compte.",
  bubbles: [
    { from: 'narrator', fr: 'Monsieur Gagnon parle vite, comme quelqu’un qui a préparé ses phrases.', en: 'Monsieur Gagnon speaks fast, like someone who has prepared what to say.' },
    { from: 'coach', fr: "Je crois que vous n'avez pas payé le loyer de novembre.", en: 'I think you have not paid the November rent.' },
    { from: 'user', fr: fr(E(1149)), en: src(E(1149)).en, warn: 'si : tu contredis une phrase négative' },
    { from: 'coach', fr: "Ah bon. Alors vous n'avez pas reçu mon message de vendredi.", en: 'Oh. Then you did not get my message on Friday.' },
    { from: 'user', fr: fr(E(1150)), en: src(E(1150)).en, warn: 'si, encore : tu dis le contraire' },
    { from: 'coach', fr: "Je n'aime pas les malentendus, vous savez.", en: 'I do not like misunderstandings, you know.' },
    { from: 'user', fr: fr(E(1151)), en: src(E(1151)).en, warn: "non plus : tu es d'accord avec un négatif" },
    { from: 'narrator', fr: "Monsieur Gagnon rit. Pour la première fois, vous êtes d'accord.", en: 'Monsieur Gagnon laughs. For the first time, you agree.' },
  ],
  closing: { fr: "Si pour dire le contraire, non plus pour être d'accord.", en: 'Si to say the opposite, non plus to agree.' },
  audio: REC('rec-b1-20-lundi'),
  say: REFRAME,
  terms: ['si'],
};

const A9_SI: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-si',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-reponses',
  title: 'Répondre à un négatif',
  frSub: 'si, non plus, moi si, pas du tout',
  hint: "Quatre cartes. Demande-toi : est-ce que tu es d'accord ?",
  audio: REC('rec-b1-20-si'),
  say: REFRAME,
  terms: ['si'],
  cards: [
    {
      head: 'Contredire un négatif', label: 'si',
      fr: fr(E(1149)),
      sub: rsOf(E(1149)),
      body: "On te dit que tu n'as pas payé. Tu as payé : oui ne suffit pas, tu dis si. EN: to contradict a negative, say si.",
    },
    {
      head: "D'accord avec un négatif", label: Cap(NEGATION_REF),
      fr: fr(E(1157)),
      sub: rsOf(E(1157)),
      body: `${Cap(NEGATION_REF)} t'a donné moi non plus. Il marche avec tous les pronoms : lui non plus, toi non plus. EN: non plus works with every stressed pronoun.`,
    },
    {
      head: "Pas d'accord avec un négatif", label: 'moi, si',
      fr: fr(E(1163)),
      sub: rsOf(E(1163)),
      body: "Quelqu'un dit : je n'aime pas le froid. Toi, tu l'aimes : moi, si. EN: moi, si disagrees with a negative.",
    },
    {
      head: 'Insister', label: 'pas du tout',
      fr: fr(E(1159)),
      sub: rsOf(E(1159)),
      body: "pas du tout, plus du tout, jamais de la vie : le même vide, dit plus fort. EN: the same gap, said louder.",
    },
  ],
};

const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  sheetId: 'sheet-reponses',
  title: 'Six réponses courtes',
  cols: ['On te dit', 'Tu réponds', 'Pourquoi'],
  rows: [
    { cells: ["Tu n'as pas payé.", "Si, j'ai payé.", 'tu contredis'], say: fr(E(1149)),
      detail: { title: 'si', body: "Tu dis le contraire d'une phrase négative. EN: you contradict a negative.", say: fr(E(1150)) } },
    { cells: ['Je ne fume pas.', 'Moi non plus.', "tu es d'accord"], say: fr(E(1151)),
      detail: { title: 'non plus', body: "Tu es d'accord avec un négatif. EN: you agree with a negative.", say: fr(E(1158)) } },
    { cells: ['Je fume.', 'Moi aussi.', "d'accord, en positif"], say: fr(E(1152)),
      detail: { title: 'aussi', body: "aussi va avec une phrase positive, jamais avec un négatif. EN: aussi agrees with a positive only.", say: fr(E(1152)) } },
    { cells: ["Je n'aime pas le froid.", 'Moi, si.', "tu n'es pas d'accord"], say: fr(E(1163)),
      detail: { title: 'moi, si', body: "Tu dis que pour toi, c'est le contraire. EN: for you it is the opposite.", say: fr(E(1163)) } },
    { cells: ['Tu as fini ?', 'Non, pas encore.', 'ça viendra'], say: fr(E(1162)),
      detail: { title: 'pas encore', body: "Pas maintenant, mais plus tard, sans doute. EN: not now, probably later.", say: fr(E(1162)) } },
    { cells: ['Tu fumes ?', 'Plus maintenant.', 'ça a cessé'], say: 'Tu fumes ? Plus maintenant.',
      detail: { title: 'plus maintenant', body: "Avant oui, maintenant non. EN: before yes, now no.", say: fr(E(1015)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['si'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Si et non plus',
  groups: [
    grp('Si', [
      it(E(1149), 'tu as payé'),
      it(E(1150), 'tu as reçu le message'),
      it('fr.a1.questions.373', 'tu es prêt'),
      it(E(1163), 'toi, tu aimes'),
    ], chk(
      "« Tu n'as pas tes clés ? » Tu les as. Que réponds-tu ?",
      ['Oui.', 'Si.'], 1,
      "Tu contredis un négatif : si. EN: contradicting a negative takes si.")),
    grp('Non plus', [
      it(E(1157), 'lui non plus'),
      it(E(1158), 'moi non plus'),
      it(E(1164), 'toi non plus'),
      it('fr.a2.hebergement.089', 'la climatisation non plus'),
    ], chk(
      "« La climatisation ne marche pas non plus. » Qu'est-ce qui ne marche pas ?",
      ['la climatisation, et autre chose aussi', 'seulement la climatisation'], 0,
      "non plus ajoute un négatif à un autre. EN: non plus adds one negative to another.")),
    ctl('Aussi ou non plus', "« Je n'aime pas le bruit. » Tu es d'accord. Que dis-tu ?",
      ['Moi aussi.', 'Moi non plus.'], 1,
      "Après un négatif : non plus. EN: after a negative, non plus."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['si'],
};

/** Consolidation, as answers. No « EN: » tail anywhere on a back. */
const A9_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a9-cartes',
  layer: 'core',
  title: 'Huit réponses courtes',
  cards: [
    { front: 'yes I did (after a negative)', back: 'si', say: fr(E(1149)) },
    { front: 'me neither', back: 'moi non plus', say: fr(E(1158)) },
    { front: 'neither does he', back: 'lui non plus', say: fr(E(1157)) },
    { front: 'I do (against a negative)', back: 'moi, si', say: fr(E(1163)) },
    { front: 'not at all', back: 'pas du tout', say: fr(E(1159)) },
    { front: 'not on your life', back: 'jamais de la vie', say: 'Tu reviendrais dans cet appartement ? Jamais de la vie.' },
    { front: 'not yet', back: 'pas encore', say: fr(E(1162)) },
    { front: 'not any more', back: 'plus maintenant', say: 'Tu fumes ? Plus maintenant.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['si'],
};

const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: "D'accord, ou pas d'accord",
  groups: [
    grp('Contredire ou confirmer', [
      it(E(1149), 'contredire'),
      it(E(1151), 'confirmer'),
      it(E(1163), 'contredire'),
      it(E(1158), 'confirmer'),
    ], chk(
      "On te dit : « Tu ne parles pas français. » Tu le parles. Que dis-tu ?",
      ['Moi non plus.', 'Non, pas du tout.', 'Si, je le parle.'], 2,
      "Tu contredis : si. EN: you contradict, so si.")),
    grp('Insister', [
      it(E(1159), 'pas du tout, sur un avis'),
      it(E(1160), "pas du tout, sur l'annonce"),
      it(E(1165), 'absolument pas'),
      it(E(1193), 'pas du tout, sur le quartier'),
    ], chk(
      "Tu n'es vraiment pas d'accord. Que dis-tu ?",
      ["Je ne suis pas du tout d'accord.", "Je ne suis pas beaucoup d'accord."], 0,
      "pas du tout : le vide, avec force. EN: pas du tout is the forceful gap.")),
    ctl('Pas encore ou plus maintenant', "« Tu fumes ? » Tu as arrêté l'an dernier.",
      ['Pas encore.', 'Plus maintenant.'], 1,
      "Ça a cessé : plus. EN: it stopped, so plus."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['si'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre réponses de travers',
  errors: [
    {
      wrong: "Oui, j'ai payé le loyer.",
      right: fr(E(1149)),
      why: "Normal : en anglais, yes répond à tout. Après une phrase négative, oui sonne comme si tu étais d'accord. Dis si. EN: after a negative, oui sounds like agreement.",
    },
    {
      wrong: 'Elle ne fume pas, et moi aussi.',
      right: fr(E(1158)),
      why: "moi aussi va avec un positif. Après un négatif, c'est non plus. EN: after a negative, non plus.",
    },
    {
      wrong: "Je n'aime pas le bruit, et lui aussi pas.",
      right: fr(E(1157)),
      why: "En anglais, neither does he a un verbe. En français, lui non plus, sans verbe. EN: lui non plus needs no verb.",
    },
    {
      wrong: "Je ne suis du tout pas d'accord.",
      right: fr(E(1159)),
      why: "pas du tout est un bloc : pas, puis du tout, sans rien entre les deux. EN: pas du tout is one block.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['si'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Si', "« Tu n'as rien oublié ? » Tu as oublié tes clés.",
    ['Oui, mes clés.', 'Si, mes clés.'], 1,
    "Tu contredis rien : si. EN: you contradict, so si."),
  ctl('Non plus', "« Je ne bois pas d'alcool. » Toi non plus.",
    ['Moi non plus.', 'Moi aussi.'], 0,
    "Un négatif, et tu es d'accord. EN: agreeing with a negative."),
  ctl('Pas encore', 'Pas encore veut dire...',
    ['jamais', 'plus maintenant', 'pas maintenant, peut-être plus tard'], 2,
    "Ça viendra peut-être. EN: it may still come."),
], ['si']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Répondre',
    opener: {
      line: "On te dit que tu n'as pas payé, et tu as payé : ici tu apprends à répondre non à un non. EN: You are told you have not paid, and you have: here you learn to answer a no.",
      imageRef: 'lessons/negation-avancee/act09.jpg',
    },
    sections: [],
    milestone: "Tu contredis un négatif avec si, tu es d'accord avec non plus, et tu insistes avec pas du tout. EN: You can contradict a negative with si, agree with non plus, and insist with pas du tout.",
    estScreens: 36, restPoints: ['a9-tableau', 'a9-cartes'],
  },
  sections: [A9_HISTOIRE, A9_SI, A9_TABLEAU, A9_CONSTRUIRE, A9_CARTES, A9_CHOISIR, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — LE NE QUI TOMBE
 *
 *  a1.18 introduced the dropped ne for RECEPTION. At B1 it becomes a
 *  register choice: available in speech, never in writing. The ne-less rows
 *  carry no `dictation`, so nobody is asked to write one.
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Ce que la rue dit',
  frSub: 'Huit phrases sans ne',
  lines: [
    ln(E(1167)), ln(E(1169)), ln(E(1171)), ln(E(1173)),
    ln(E(1175)), ln(E(1176)), ln(E(1178)), ln(E(1180)),
  ],
  questions: [
    { q: 'Dans la première phrase, entends-tu ne ?', opts: ['Oui.', 'Non.'], correct: 1, why: "« je sais pas » : ne est tombé, pas est resté. EN: ne dropped, pas stayed." },
    { q: '« On a plus de lait » : en reste-t-il ?', opts: ["Non, il n'y en a plus.", 'Oui, beaucoup plus.'], correct: 0, why: "plus sans s, /ply/ : il n'y en a plus. EN: no s sound, so none left." },
    { q: 'Qui est là, dans la troisième phrase ?', opts: ["quelqu'un", 'personne', 'tout le monde'], correct: 1, why: "« y a personne » : personne porte le vide tout seul. EN: personne carries the gap alone." },
    { q: 'Ces phrases sont-elles fausses ?', opts: ['Oui, il manque des mots.', "Non, c'est du français parlé."], correct: 1, why: "Elles sont normales à l'oral. EN: normal in speech." },
    { q: 'Où les entends-tu ?', opts: ['dans une conversation', 'dans un règlement', 'dans une lettre officielle'], correct: 0, why: "Dans la rue, entre amis, au téléphone. EN: in conversation." },
  ],
  audio: REC('rec-b1-20-oral-ecoute'),
  say: REFRAME,
  terms: ['oral'],
};

const A10_ORAL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-oral',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-avis',
  title: 'Le ne qui tombe',
  frSub: "À l'oral oui, à l'écrit jamais",
  hint: 'Quatre cartes. Cherche ce qui reste quand ne disparaît.',
  audio: REC('rec-b1-20-oral'),
  say: REFRAME,
  terms: ['oral'],
  cards: [
    {
      head: 'Ce que tu as déjà', label: Cap(NEGATION_REF),
      fr: fr(E(1167)),
      sub: rsOf(E(1167)),
      body: `${Cap(NEGATION_REF)} t'a appris à l'entendre : ne tombe, pas reste. Maintenant, tu peux le dire aussi, entre amis. EN: you already hear it; now you may say it too, with friends.`,
    },
    {
      head: 'Le second mot garde le vide', label: 'rien · personne · jamais',
      fr: fr(E(1173)),
      sub: rsOf(E(1173)),
      body: "Sans ne, le second mot porte tout le sens. C'est pour ça que lui ne tombe jamais. EN: the second word carries everything, so it never drops.",
    },
    {
      head: 'Le piège de plus', label: 'plus, avec ou sans s',
      fr: fr(E(1175)),
      sub: rsOf(E(1175)),
      body: "Sans s, plus veut dire : il n'y en a plus. Avec un s, il veut dire davantage. Écoute la fin du mot. EN: no s sound means none left; with the s, more.",
    },
    {
      head: "À l'écrit, jamais", label: 'le courriel, la plainte',
      fr: fr(E(1168)),
      sub: rsOf(E(1168)),
      body: "Dans un courriel, une lettre, une plainte, ne reste toujours. Seul un texto à un ami peut le perdre. EN: in writing ne always stays.",
    },
  ],
};

const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: "L'oreille et la main",
  groups: [
    grp('Ce que tu entends', [
      it(E(1167), 'je sais pas'),
      it(E(1169), "c'est pas grave"),
      it(E(1171), 'y a personne'),
      it(E(1176), 'il vient jamais'),
    ], chk(
      'Ces quatre phrases, tu les entends où ?',
      ["dans une lettre à l'agence", 'dans une conversation'], 1,
      "C'est du français parlé. EN: spoken French.")),
    grp('Ce que tu écris', [
      it(E(1168), 'je ne sais pas'),
      it(E(1170), "ce n'est pas grave"),
      it(E(1172), "il n'y a personne"),
      it(E(1174), "je n'ai rien compris"),
    ], chk(
      "Qu'est-ce qui change entre les deux groupes ?",
      ['ne', 'le second mot'], 0,
      "Seul ne change. Le second mot reste. EN: only ne changes.")),
    ctl('Plus, deux sons', "« Il y a plus de place dans le salon. » Comment dis-tu plus ?",
      ['avec un s : davantage', 'sans s : plus du tout'], 0,
      "Il y a de la place en plus : /plys/. EN: more room, with the s."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['oral'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-avis',
  title: 'Quand garder ne',
  points: [
    "Avec un ami, à l'oral : ne peut tomber. EN: with a friend, out loud, ne can drop.",
    "À l'écrit, dans un courriel ou une plainte : ne reste, toujours. EN: in writing, always keep ne.",
    "Le second mot ne tombe jamais : c'est lui qui porte le sens. EN: the second word never drops.",
    "Sans ne, écoute le s de plus : sans s, il n'y en a plus. EN: listen for the s in plus.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['oral', 'plainte'],
};

const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Un texto ou une lettre',
  groups: [
    grp('Quatre messages', [
      it(E(1178), 'un texto à un ami'),
      it(E(1179), 'un message poli'),
      it(E(1180), 'un texto'),
      it(E(1181), 'une lettre'),
    ], chk(
      "Tu écris à l'agence pour ta plainte. Quelle phrase ?",
      ['Je trouve pas les clés.', 'Je ne trouve pas les clés.'], 1,
      "À l'écrit, ne reste. EN: in writing, ne stays.")),
    grp('Plus : rien ou davantage', [
      it(E(1175), 'sans s : plus de lait du tout'),
      it(E(1182), 'avec s : davantage de place'),
      it(E(1023), 'écrit, avec ne : plus de lait du tout'),
      it('fr.a1.negation-et-restriction.069', 'à l’oral : pas de chien'),
    ], chk(
      "À l'écrit, comment évites-tu le doute sur plus ?",
      ['tu gardes ne', 'tu ajoutes un s'], 0,
      "Avec ne, plus ne peut vouloir dire que plus du tout. EN: with ne, plus can only mean no more."),
    ),
    ctl("L'oreille", "Ton ami dit : « J'ai rien compris. » Que veut-il dire ?",
      ['Il a tout compris.', "Il n'a rien compris."], 1,
      "rien porte le vide, même sans ne. EN: rien carries the gap."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['oral'],
};

const A10_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a10-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: "Quatre pièges entre l'oral et l'écrit",
  errors: [
    {
      wrong: 'Madame, je sais pas quand le technicien viendra.',
      right: 'Madame, je ne sais pas quand le technicien viendra.',
      why: "À l'oral, c'est normal. Dans un courriel à une agence, le ne tombé sonne négligé. EN: in a formal email a dropped ne reads as careless.",
    },
    {
      wrong: 'Il vient pas jamais.',
      right: 'Il ne vient jamais.',
      why: "Sans ne, on croit qu'il faut pas pour faire un négatif. Mais jamais porte déjà le vide. EN: jamais already carries the gap.",
    },
    {
      wrong: 'Y a pas personne.',
      right: fr(E(1172)),
      why: "Tu l'entendras au Québec, à l'oral. À l'écrit : il n'y a personne, un seul second mot. EN: in writing, one second word.",
    },
    {
      wrong: "Ne t'inquiète.",
      right: fr(E(1179)),
      why: "Quand tu remets ne, n'oublie pas le second mot : ne tout seul ne dit rien. EN: ne alone says nothing.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['oral'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl("L'écrit", "À l'écrit, ne peut-il tomber ?",
    ['Non', 'Oui'], 0,
    "Jamais dans une lettre. EN: never in a letter."),
  ctl('Plus', "« On a plus de lait », dit sans s.",
    ["il n'y a plus de lait", 'il y a davantage de lait'], 0,
    "Sans s : plus du tout. EN: no s, none left."),
  ctl('Le sens', 'Quand ne tombe, quel mot garde le sens ?',
    ['le verbe', 'le sujet', 'le second mot'], 2,
    "Le second mot, toujours. EN: always the second word."),
], ['oral']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Le ne qui tombe',
    opener: {
      line: "Dans la rue, ne disparaît et personne ne s'en plaint : ici tu apprends quand le laisser tomber, et quand jamais. EN: In the street ne vanishes and nobody minds: here you learn when to drop it, and when never to.",
      imageRef: 'lessons/negation-avancee/act10.jpg',
    },
    sections: [],
    milestone: "Tu comprends le français sans ne, tu le parles entre amis, et tu gardes ne dans tout ce que tu écris. EN: You understand French without ne, speak it with friends, and keep ne in everything you write.",
    estScreens: 30, restPoints: ['a10-focus'],
  },
  sections: [A10_ECOUTE, A10_ORAL, A10_TRIER, A10_FOCUS, A10_CHOISIR, A10_ERREURS, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — ÉCRIRE UNE PLAINTE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET the shape one last time, as the model the learner will imitate. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "La lettre à l'agence",
  frSub: 'La forme que tu vas écrire',
  text: PLAINTE_TEXT,
  glossary: [
    { word: 'au sujet du', en: 'about, regarding', note: "La formule pour dire de quoi parle la lettre." },
    { word: 'accueillis', en: 'welcomed', note: "Recevoir quelqu'un à son arrivée." },
    { word: 'À ce jour', en: 'to date, so far', note: "Jusqu'à aujourd'hui. EN: up to today." },
    { word: 'remboursement', en: 'refund', note: "On te rend ton argent." },
    { word: 'Veuillez agréer mes salutations distinguées', en: 'Yours faithfully', note: "La fin d'une lettre formelle en français." },
  ],
  questions: [
    { q: 'À part pas, quelles négations trouves-tu ?', a: 'rien ne, personne ne, nulle part, ni ... ni, que, jamais, aucun, plus jamais. Chacune dit exactement ce qui manquait.' },
    { q: 'Que demande la personne ?', a: "Une seule chose : le remboursement des trois nuits. « Je ne demande qu'une chose »." },
    { q: 'Pourquoi « personne ne nous a accueillis » et pas « on ne nous a pas accueillis » ?', a: "personne dit exactement ce qui manquait : une personne, à l'arrivée." },
    { q: 'Le ne tombe-t-il une seule fois ?', a: "Jamais : c'est une lettre. À l'écrit, ne reste." },
    { q: 'Dans quel ordre la lettre avance-t-elle ?', a: "Le cadre, les faits un par un, ce qui manque encore, puis une seule demande et une conséquence." },
  ],
  audio: REC('rec-b1-20-lettre'),
  say: REFRAME,
  terms: ['plainte', 'second'],
};

/** NAME: how to plan a hundred words of complaint. */
const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour ta plainte',
  steps: [
    '1. Donne le cadre : quel logement, quelle voiture, quelles dates. EN: set the frame.',
    '2. Écris trois faits, chacun avec une négation précise : rien, personne, aucun, ni ... ni. EN: three facts, each with a precise negative.',
    "3. Ajoute ce qui manque encore, au passé composé : je n'ai reçu aucune réponse. EN: what is still missing.",
    "4. Fais une seule demande, avec ne ... que. EN: one request, with ne ... que.",
    '5. Relis : chaque ne est écrit, et pas n’est jamais à côté d’un autre second mot. EN: check every ne, and no pas beside another second word.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['plainte', 'place'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    uc("Tu écris à l'agence pour la première fois", E(1184)),
    uc('Tu laisses un avis en ligne après ton séjour', E(1183)),
    uc('Tu demandes un remboursement', E(1192)),
    uc('Tu racontes le séjour à un ami, au téléphone', E(1173)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['plainte', 'oral'],
};

/** CHOOSE, out loud: six turns with the agency on the phone. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: "Au téléphone avec l'agence",
  setting: "Le lundi suivant. Tu appelles l'agence Tremblay avant d'écrire ta lettre. Madame Tremblay est polie, pressée, et elle pose des questions négatives.",
  turns: [
    {
      ai: 'Agence Tremblay, bonjour. Comment est-ce que je peux vous aider ?',
      en: 'Tremblay agency, hello. How can I help you?',
      user: "Je vous appelle au sujet du logement de la rue Saint-Jean. Rien ne correspondait à l'annonce.",
      userEn: 'I am calling about the flat on rue Saint-Jean. Nothing matched the listing. (rien as the subject, with no pas.)',
      alts: [
        { fr: "Le logement ne correspondait pas du tout à l'annonce.", en: 'The flat did not match the listing at all. (pas du tout: also right.)' },
        { fr: "Rien n'était comme sur les photos.", en: 'Nothing was like the photos.' },
      ],
    },
    {
      ai: "Quelqu'un vous a accueillis à l'arrivée ?",
      en: 'Did someone welcome you on arrival?',
      user: fr(E(1185)),
      userEn: 'Nobody welcomed us. (personne as the subject, in the passé composé.)',
      alts: [
        { fr: 'Non, personne.', en: 'No, nobody. (The short answer.)' },
        { fr: "Non, on n'a vu personne.", en: 'No, we did not see anyone. (personne after the participle.)' },
      ],
    },
    {
      ai: 'Mais vous aviez le chauffage, au moins ?',
      en: 'But you had heating, at least?',
      user: fr(E(1186)),
      userEn: 'We had neither heating nor hot water. (ni ... ni, with no article.)',
      alts: [
        { fr: 'Non, ni chauffage ni eau chaude.', en: 'No, neither heating nor hot water.' },
        { fr: 'Non, le chauffage ne marchait que le soir.', en: 'No, the heating only worked in the evening. (ne ... que: also right.)' },
      ],
    },
    {
      ai: "Vous n'avez pas contacté le propriétaire ?",
      en: 'Did you not contact the owner?',
      user: "Si, je l'ai appelé cinq fois. Il n'a jamais répondu.",
      userEn: 'Yes I did, I called him five times. He never answered. (si contradicts a negative question.)',
      alts: [
        { fr: "Si, mais il n'a jamais répondu.", en: 'Yes, but he never answered.' },
        { fr: "Si, plusieurs fois, et personne n'a répondu.", en: 'Yes, several times, and nobody answered.' },
      ],
    },
    {
      ai: "Qu'est-ce que vous attendez de nous ?",
      en: 'What do you expect from us?',
      user: fr(E(1192)),
      userEn: 'I am asking for one thing only: a refund. (ne ... que: one request.)',
      alts: [
        { fr: 'Seulement un remboursement.', en: 'Only a refund. (seulement: also right.)' },
        { fr: "Je ne demande que le remboursement des trois nuits.", en: 'I am only asking for a refund of the three nights.' },
      ],
    },
    {
      ai: "Je comprends. Je ne peux rien vous promettre aujourd'hui.",
      en: 'I understand. I cannot promise you anything today.',
      user: 'Je comprends, mais je ne reviendrai plus jamais chez vous.',
      userEn: 'I understand, but I will never come back to you again. (plus before jamais.)',
      alts: [
        { fr: 'Bon, mais je ne vous recommanderai à personne.', en: 'All right, but I will not recommend you to anyone.' },
        { fr: "Bon. Je sais pas. J'attends votre réponse.", en: 'Right. I do not know. I will wait for your answer. (je sais pas: fine on the phone, never in the letter.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['plainte', 'si'],
};

/** THE GRADED TASK. The unit outcome is tested here: a written complaint
 *  that says exactly what was missing and keeps every ne. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris ta plainte',
  frSub: 'Mission écrite',
  brief: "Tu as loué un logement, une voiture ou une salle, et rien ne s'est passé comme prévu. Écris à l'entreprise un courriel de plainte, ou laisse un avis en ligne. Dis exactement ce qui manquait, puis demande une seule chose.",
  briefEn: 'You rented a flat, a car or a room, and nothing went as planned. Write the company a complaint email, or leave an online review. Say exactly what was missing, then ask for one thing.',
  produce: "Écris une plainte de 90 à 130 mots, avec au moins cinq négations différentes, dont une avec le mot vide en sujet, une au passé composé et une avec ne ... que. Garde chaque ne.",
  responseSpec: { kind: 'text', minWords: 90, maxWords: 130 },
  rubric: {
    criteria: [
      {
        key: 'negations',
        label: 'Des négations précises',
        maxPoints: 4,
        descriptors: [
          "4 : Au moins cinq négations différentes, et chacune dit exactement ce qui manquait : personne pour une personne, rien pour une chose, aucun, ni ... ni, que.",
          "3 : Quatre ou cinq négations différentes, avec une ou deux fois pas là où un mot plus précis irait mieux.",
          "2 : Deux ou trois négations différentes, ou pas presque partout.",
          "1 : Presque tout est dit avec pas, ou les négations sont difficiles à comprendre.",
        ],
      },
      {
        key: 'place',
        label: 'Chaque mot à sa place',
        maxPoints: 3,
        descriptors: [
          "3 : Rien avant le participe, personne et aucun après, le mot vide en sujet sans pas, et jamais pas à côté d'un autre second mot.",
          "2 : Une ou deux erreurs de place ou un pas en trop, mais on comprend tout.",
          "1 : Plusieurs erreurs de place, ou pas ajouté à personne, rien ou aucun.",
        ],
      },
      {
        key: 'registre',
        label: 'Une vraie plainte écrite',
        maxPoints: 3,
        descriptors: [
          "3 : Chaque ne est écrit, le ton reste poli et ferme, et la lettre a un début et une fin de lettre.",
          "2 : Un ne tombé, ou une phrase trop familière ou trop agressive.",
          "1 : Plusieurs ne tombés, ou un ton de texto, ou des gros mots.",
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Un vrai cadre (quoi, quand), entre 90 et 130 mots, et une seule demande claire.',
          '1 : Il manque un élément : pas de cadre, pas de demande, plusieurs demandes, ou moins de 90 mots.',
        ],
      },
    ],
  },
  scaffold: [
    'Madame, Monsieur, je vous écris au sujet de...',
    'Rien ne...',
    'Personne ne...',
    "Nous n'avons eu ni ... ni ...",
    "Il n'y avait qu'...",
    "À ce jour, je n'ai reçu aucun...",
    "Je ne demande qu'une chose :",
    'Veuillez agréer mes salutations distinguées.',
  ],
  modelAnswer: "Madame, Monsieur, je vous écris au sujet de la voiture louée à votre agence de Lévis du 12 au 15 mars. Rien ne s'est passé comme prévu. À mon arrivée, personne n'était au comptoir, et j'ai attendu quarante minutes. La voiture n'avait ni pneus d'hiver ni grattoir, alors qu'il neigeait. Le GPS ne marchait que par moments, et je n'ai trouvé la notice nulle part. J'ai appelé votre service client trois fois : personne n'a jamais répondu. À ce jour, je n'ai reçu aucune explication. Je ne demande qu'une chose : le remboursement d'une journée de location. Sans réponse avant la fin du mois, je ne louerai plus jamais chez vous. Veuillez agréer mes salutations distinguées.",
  modelAnswerEn: "Dear Sir or Madam, I am writing about the car hired from your Lévis branch from 12 to 15 March. Nothing went as planned. When I arrived there was nobody at the desk, and I waited forty minutes. The car had neither winter tyres nor an ice scraper, although it was snowing. The GPS only worked now and then, and I could not find the manual anywhere. I called your customer service three times: nobody ever answered. To date I have received no explanation at all. I am asking for one thing only: a refund of one day's hire. Without an answer by the end of the month, I will never hire from you again. Yours faithfully.",
  watchFor: [
    {
      pattern: "pas used everywhere, so the letter never says what was missing (je n'ai pas vu quelqu'un, il n'y avait pas quelque chose).",
      criterion: 'negations',
      feedback: "Dis exactement ce qui manquait : personne pour une personne, rien pour une chose. Je n'ai vu personne.",
      ref: 'a1-reperer',
    },
    {
      pattern: "pas kept beside another second word (je n'ai pas rien reçu, il ne répond pas jamais).",
      criterion: 'place',
      feedback: "Un seul second mot prend la place de pas : je n'ai rien reçu.",
      ref: 'a2-erreurs',
    },
    {
      pattern: "ne ... que treated like pas, with the article reduced to de (je n'ai reçu que de réponse automatique).",
      criterion: 'negations',
      feedback: "Avec ne ... que, la chose est là : l'article reste. Je n'ai reçu qu'une réponse automatique.",
      ref: 'a3-piege',
    },
    {
      pattern: "aucun in the plural, or ni ... ni with an article or with pas (aucuns problèmes, pas ni chauffage ni eau).",
      criterion: 'negations',
      feedback: "aucun reste au singulier, et ni ... ni remplace pas et l'article : ni chauffage ni eau chaude.",
      ref: 'a4-erreurs',
    },
    {
      pattern: "A negative subject followed by pas (personne n'a pas répondu, rien ne marchait pas).",
      criterion: 'place',
      feedback: "Quand personne ou rien ouvre la phrase, pas n'a pas sa place : personne n'a répondu.",
      ref: 'a5-piege',
    },
    {
      pattern: "The second word in the wrong slot of a compound tense (je n'ai personne vu, je n'ai reçu rien).",
      criterion: 'place',
      feedback: "rien avant le participe, personne et aucun après : je n'ai rien reçu, je n'ai vu personne.",
      ref: 'a6-piege',
    },
    {
      pattern: "ne pas wrapped round an infinitive instead of placed before it (pour ne rater pas, de ne répondre pas).",
      criterion: 'place',
      feedback: "Devant un infinitif, ne pas se collent devant : pour ne pas rater.",
      ref: 'a7-erreurs',
    },
    {
      pattern: "Combined negatives in the wrong order (je ne reviendrai jamais plus rien, il ne dit rien jamais).",
      criterion: 'place',
      feedback: "plus, puis jamais, puis rien ou personne : je ne reviendrai plus jamais.",
      ref: 'a8-piege',
    },
    {
      pattern: "A dropped ne in the written letter (je sais pas, c'est pas acceptable, y a personne).",
      criterion: 'registre',
      feedback: "À l'écrit, ne reste toujours : je ne sais pas, ce n'est pas acceptable.",
      ref: 'a10-choisir',
    },
    {
      pattern: "Shouting, insults, or a list of demands, so the letter reads as anger rather than a case.",
      criterion: 'registre',
      feedback: "Des faits précis et une seule demande. Enlève les gros mots : la précision est plus forte.",
      ref: 'a11-plan',
    },
    {
      pattern: "Under 90 words, no frame (what and when), or no clear single request.",
      criterion: 'tache',
      feedback: "Relis la mission : le cadre, trois faits, une seule demande, entre 90 et 130 mots.",
      ref: 'a11-plan',
    },
  ],
  graderNotes: [
    'The greeting (Madame, Monsieur) and the formal sign-off (Veuillez agréer ...) do NOT count toward the word budget. Count the body only, with 10% tolerance (81 to 143) before criterion « tache » loses its point.',
    "« Different negations » means different SECOND WORDS or constructions: pas, plus, jamais, rien, personne, aucun, que, ni ... ni, nulle part, sans + infinitive, pas du tout. Two uses of rien count once.",
    'seulement is accepted in place of ne ... que for the « que » requirement only if ne ... que appears elsewhere; the task asks for ne ... que itself.',
    "An online review may drop the greeting and sign-off. Do not mark their absence under « registre » if the learner chose the review format; mark a dropped ne either way.",
    "« sans que » takes the subjunctive, which is b1.14 to b1.16's. It is not taught here: do not require it, and do not mark a correct one as an error.",
    "« pas personne » and « pas rien » are heard in Québec speech; in this WRITTEN task they are errors under « place ».",
    'Accept regional vocabulary (courriel and email, stationnement and parking, grattoir, char in Québec for a car).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['plainte', 'place', 'oral'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tous tes vides à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['second', 'combine'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-avis',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le second mot', v: 'plus, jamais, rien, personne, aucun', say: fr(E(1018)),
      detail: { title: 'La famille', body: "Un seul à la place de pas, et il dit la forme du vide. EN: one in pas's place, saying what is missing.", say: fr(E(1015)) } },
    { k: 'ne ... que', v: "seulement, et l'article reste", say: fr(E(1035)),
      detail: { title: 'Seulement', body: "La chose est là, donc du reste du. EN: the thing is there, so du stays.", say: fr(E(1040)) } },
    { k: 'en sujet', v: 'personne ne, rien ne, sans pas', say: fr(E(1075)),
      detail: { title: 'Le sujet', body: "Le vide ouvre la phrase, puis ne. EN: the gap first, then ne.", say: fr(E(1076)) } },
    { k: 'passé composé', v: 'rien avant, personne après', say: fr(E(1093)),
      detail: { title: 'La place', body: "Les mots courts au milieu, les autres après le participe. EN: short words in the middle.", say: fr(E(1094)) } },
    { k: 'infinitif', v: 'ne pas, ensemble, devant', say: fr(E(1114)),
      detail: { title: "L'infinitif", body: "ne pas devant, et sans tout seul. EN: ne pas in front; sans alone.", say: fr(E(1121)) } },
    { k: 'répondre', v: 'si, non plus, pas du tout', say: fr(E(1149)),
      detail: { title: 'Les réponses', body: "si contredit, non plus confirme. EN: si contradicts, non plus agrees.", say: fr(E(1158)) } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['second', 'place', 'si'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu dis exactement ce qui manque : une personne, une chose, un moment, un seul, tout sauf une chose. Tu places chaque mot, au passé composé comme devant un infinitif, et tu réponds si à un négatif. Le piège qui reste est le plus discret : un pas qui se glisse à côté de rien ou de personne quand tu écris vite. Avant l'examen, relis ta plainte et entoure chaque ne. À côté, écris son second mot. Si tu en trouves deux dont l'un est pas, enlève pas. EN: Circle every ne in your complaint and write its second word beside it; if pas sits next to another second word, remove pas.",
  stats: [
    { k: 'Les seconds mots', v: 'plus, jamais, rien, personne, aucun, que' },
    { k: 'La place', v: 'rien avant, personne après' },
    { k: 'Les combinaisons', v: 'plus jamais rien' },
    { k: 'Les réponses', v: 'si, non plus' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_REVIEW: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-review',
  layer: 'core',
  title: 'Une dernière fois',
  cards: [
    { front: "ça a existé et c'est fini", back: 'ne ... plus', say: fr(E(1015)) },
    { front: 'à aucun moment', back: 'ne ... jamais', say: fr(E(1016)) },
    { front: 'aucune chose, aucune personne', back: 'rien, personne', say: fr(E(1018)) },
    { front: 'seulement', back: "ne ... que, et l'article reste", say: fr(E(1035)) },
    { front: 'pas un seul', back: 'aucun, aucune, au singulier', say: fr(E(1055)) },
    { front: 'le vide en sujet', back: 'personne ne, rien ne, sans pas', say: fr(E(1075)) },
    { front: 'au passé composé', back: 'rien vu, vu personne', say: fr(E(1094)) },
    { front: 'devant un infinitif', back: 'ne pas + infinitif', say: fr(E(1114)) },
    { front: 'contredire un négatif', back: 'si', say: fr(E(1149)) },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'La négation, en résumé',
  body: `${REFRAME} Tu ne dis plus seulement non : tu dis ce qui manque, où, et depuis quand. Et tu sais quand ne peut tomber, et quand il doit rester. La prochaine leçon, ${INVERSION_REF}, reste dans la langue écrite et soignée et te donne l'inversion : « Votre fille viendra-t-elle ? » EN: Next lesson: inversion, for careful written French.`,
  points: [
    'Un seul second mot à la place de pas, et il dit la forme du vide.',
    "ne ... que garde la chose et l'article.",
    'Au passé composé : rien avant le participe, personne après.',
    'À l’écrit, ne reste toujours.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['second', 'neque', 'place'],
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight, one per
 *  act from act 1 to act 10 plus an integration round on the complaint.
 *  Each round's target is a distinct errorTrigger, so a failed round fires
 *  that round's own drill.
 *
 *  `fold()` strips accents, commas and apostrophes, so no answer turns on
 *  one. Every typed answer differs from its prompt by a WORD (rien against
 *  pas, personne moved after the participle, plus added), which survives
 *  folding. Every typeIn and errorSpot carries `prompt`, every listenChoose
 *  carries `say`. */

type QQ = QuizQuestion;
const tI = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: [answer], why, ref });
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'mcq', q, opts, correct, why, ref });
const eS = (prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q: 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.', prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: "L'examen",
  passMark: 70,
  roundFailThreshold: 60,
  rounds: [
    {
      id: 'r1-forme', label: 'Le mot précis', targets: ['pas-partout'],
      questions: [
        mc("Tu n'as vu aucune personne dans la rue. Que dis-tu ?", [WRONG_QUELQU_UN, fr(E(1000))], 1, "pas quelqu'un parle d'une personne précise. EN: pas quelqu'un is a particular someone.", 'a1-scene'),
        mc("« Il ne reste qu'une clé. » Combien de clés reste-t-il ?", ['aucune', 'deux', 'une'], 2, "ne ... que : une, pas zéro. EN: one, not none.", 'a1-reperer'),
        mc('Quel second mot dit : aucune chose ?', ['rien', 'personne', 'jamais'], 0, "rien pour une chose. EN: rien for a thing.", 'a1-paires'),
        tI('Dis-le avec le mot précis.', "Il n'y a pas quelque chose dans le frigo.", fr(E(1001)), "Aucune chose : rien. EN: nothing takes rien.", 'a1-reperer'),
        tI('Dis-le avec le mot précis.', WRONG_QUELQU_UN, fr(E(1000)), "Aucune personne : personne, après le participe. EN: nobody takes personne.", 'a1-scene'),
        eS("Il n'y a pas aucune serviette.", fr(E(1004)), "aucune remplace pas. EN: aucune replaces pas.", 'a1-usages'),
        eS('Le wifi ne marche pas jamais.', fr(E(1003)), "jamais remplace pas. EN: jamais replaces pas.", 'a1-reperer'),
        lC("Écoute. Qu'est-ce qui manque ?", fr(E(1009)), ['une personne', 'un moment', 'tout ce qui marche'], 2, "rien ne fonctionne : aucune chose. EN: nothing works.", 'a1-avis'),
      ],
    },
    {
      id: 'r2-mots', label: 'Plus, jamais, rien, personne', targets: ['pas-en-double'],
      questions: [
        mc('Tu fumais avant, plus maintenant. Que dis-tu ?', ['Je ne fume jamais.', 'Je ne fume plus.'], 1, "Ça a cessé : plus. EN: it stopped.", 'a2-mots'),
        mc('« Elle ne boit jamais ... café. »', ['de', 'du', 'le'], 0, "Après jamais, du devient de. EN: du becomes de.", 'a2-construire'),
        mc("« Tu ne dis rien. » Qu'est-ce qui manque ?", ['des paroles', 'une personne', 'un moment'], 0, "rien : une chose, ici des mots. EN: rien is a thing.", 'a2-choisir'),
        tI('Mets plus à la place de pas.', "Nous n'habitons pas à Montréal.", fr(E(1019)), "plus, juste après le verbe. EN: plus after the verb.", 'a2-construire'),
        tI('Mets personne à la place de pas et du complément.', 'Je ne connais pas les voisins ici.', fr(E(1018)), "personne remplace pas et le complément. EN: personne replaces both.", 'a2-mots'),
        tI('Mets rien à la place de pas.', "Je n'entends pas avec ce bruit.", fr(E(1028)), "rien, à la place de pas. EN: rien in pas's slot.", 'a2-exemples'),
        eS('Je ne comprends pas rien.', fr(E(1017)), "rien suffit : pas en plus, c'est un de trop. EN: one too many.", 'a2-erreurs'),
        lC('Écoute. A-t-il déjà mangé le matin ?', fr(E(1020)), ['oui, avant', 'non, à aucun moment'], 1, "jamais : aucun moment. EN: never.", 'a2-choisir'),
      ],
    },
    {
      id: 'r3-que', label: 'Ne ... que', targets: ['que-comme-pas'],
      questions: [
        mc("« Je n'ai que dix dollars. » Combien as-tu ?", ['rien', 'plus de dix dollars', 'dix dollars'], 2, "Dix, pas plus. EN: ten, no more.", 'a3-que'),
        mc("« Elle ne boit que ... eau. »", ["de l'", "d'"], 0, "L'eau est là : l'article reste. EN: the article stays.", 'a3-construire'),
        mc('Quel mot dit la même chose que ne ... que ?', ['jamais', 'plus', 'seulement'], 2, "seulement, sans ne. EN: seulement.", 'a3-que'),
        tI('Dis-le avec ne ... que.', "J'ai seulement dix dollars.", fr(E(1035)), "ne devant ai, que devant dix. EN: ne ... que round the verb and the amount.", 'a3-tableau'),
        tI('Dis-le avec seulement.', 'Je ne travaille que le matin.', fr(E(1045)), "seulement, sans ne. EN: seulement takes no ne.", 'a3-construire'),
        eS('Je ne veux que de pain.', fr(E(1040)), "Tu veux du pain : du reste. EN: du stays.", 'a3-piege'),
        eS('Il ne que pense à son travail.', fr(E(1046)), "que va devant ce qui reste. EN: que before what remains.", 'a3-piege'),
        lC('Écoute. Le musée ouvre-t-il le lundi ?', fr(E(1039)), ['oui', 'non'], 1, "Seulement le mardi. EN: Tuesday only.", 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-zero', label: 'Aucun, ni ... ni, nulle part', targets: ['zero-mal-forme'],
      questions: [
        mc("« Je n'ai ... idée. »", ['aucun', 'aucunes', 'aucune'], 2, "une idée : aucune, au singulier. EN: feminine, singular.", 'a4-mots'),
        mc('Tu refuses le thé et le café. Que dis-tu ?', ['Je ne bois ni thé ni café.', 'Je ne bois pas ni thé ni café.'], 0, "ni remplace pas. EN: ni replaces pas.", 'a4-construire'),
        mc("« Il ne pleut guère en juillet. » Il pleut...", ['beaucoup', 'jamais', 'un peu'], 2, "guère : presque pas. EN: hardly.", 'a4-choisir'),
        tI('Dis-le avec ni ... ni.', "L'appartement n'a pas de balcon et pas d'ascenseur.", fr(E(1062)), "Un ni devant chaque chose, sans article. EN: ni before each, no article.", 'a4-exemples'),
        tI('Dis-le avec aucun.', "Il n'y a pas un seul problème.", fr(E(1056)), "aucun remplace pas un seul. EN: aucun means not one.", 'a4-construire'),
        tI('Dis-le avec nulle part.', 'Je ne trouve mes lunettes à aucun endroit.', fr(E(1063)), "Aucun endroit : nulle part. EN: nowhere.", 'a4-mots'),
        eS('Il ne mange ni de viande ni de poisson.', fr(E(1070)), "Avec ni, l'article disparaît. EN: no article after ni.", 'a4-erreurs'),
        lC('Écoute. Combien de frères et sœurs cette personne a-t-elle ?', fr(E(1059)), ['aucun', 'un frère', 'une sœur'], 0, "ni frère ni sœur : aucun. EN: none.", 'a4-annonce'),
      ],
    },
    {
      id: 'r5-sujet', label: 'Le sujet qui manque', targets: ['sujet-avec-pas'],
      questions: [
        mc('« Personne ... venu. »', ["n'est pas", "n'est"], 1, "Pas de pas avec personne en sujet. EN: no pas.", 'a5-sujet'),
        mc("« Ni le propriétaire ni l'agence ne ... »", ['répondent', 'répond'], 0, "Deux sujets : pluriel. EN: plural.", 'a5-construire'),
        mc('Ta porte, ta fenêtre et ton four sont cassés. Que dis-tu ?', ['Personne ne marche.', 'Aucun ne marche.', 'Rien ne marche.'], 2, "Des choses : rien. EN: things, so rien.", 'a5-choisir'),
        tI('Commence la phrase par personne.', "Il n'y a personne qui répond au téléphone.", fr(E(1078)), "personne, puis ne, puis le verbe. EN: personne, ne, verb.", 'a5-sujet'),
        tI('Commence la phrase par rien.', "Il n'y a rien qui a changé.", fr(E(1076)), "rien, puis n', puis a changé. EN: rien, ne, verb.", 'a5-construire'),
        eS("Personne n'est pas venu.", fr(E(1075)), "personne fait le travail de pas. EN: personne does pas's job.", 'a5-piege'),
        eS('Aucun train ne passe pas après minuit.', fr(E(1077)), "aucun remplace pas. EN: aucun replaces pas.", 'a5-piege'),
        lC('Écoute. Combien de clients se sont plaints ?', fr(E(1086)), ['aucun', 'un seul', 'tous'], 0, "aucun client : zéro. EN: none.", 'a5-exemples'),
      ],
    },
    {
      id: 'r6-place', label: 'Au passé composé', targets: ['place-compose'],
      questions: [
        mc("« Je n'ai ... vu. »", ['personne', 'rien'], 1, "Seul rien va au milieu. EN: only rien fits.", 'a6-place'),
        mc('Où va personne au passé composé ?', ['après le participe', 'avant le participe'], 0, "Après, à la place du complément. EN: after.", 'a6-tableau'),
        mc("« Nous n'avons reçu ... message. »", ['rien', 'pas de', 'aucun'], 2, "aucun message, après le participe. EN: not one message.", 'a6-construire'),
        tI('Mets la phrase au passé composé.', 'Je ne vois personne.', fr(E(1094)), "personne après vu. EN: personne after vu.", 'a6-tableau'),
        tI('Mets la phrase au passé composé.', 'Il ne dit rien.', fr(E(1097)), "rien entre a et dit. EN: rien in the middle.", 'a6-construire'),
        tI('Mets la phrase au passé composé.', 'Elle ne vient jamais.', fr(E(1095)), "jamais au milieu, et venue avec être. EN: jamais in the middle.", 'a6-place'),
        eS("On n'a personne rencontré.", fr(E(1098)), "personne après le participe. EN: personne after the participle.", 'a6-piege'),
        lC('Écoute. Combien as-tu payé ?', fr(E(1101)), ['tout', 'rien', 'la moitié'], 2, "que la moitié : seulement la moitié. EN: only half.", 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-infinitif', label: 'Devant un infinitif', targets: ['infinitif-entoure'],
      questions: [
        mc('« Merci de ... claquer la porte. »', ['pas ne', 'ne pas'], 1, "ne pas, dans cet ordre, devant l'infinitif. EN: ne pas before the infinitive.", 'a7-infinitif'),
        mc('« Je peux ne pas venir. » Ça veut dire...', ["je n'ai pas le droit de venir", "j'ai le droit de ne pas venir"], 1, "C'est venir qui est nié. EN: venir is negated.", 'a7-choisir'),
        mc('« Il est entré sans frapper. » A-t-il frappé ?', ['non', 'oui'], 0, "sans : ça n'a pas eu lieu. EN: it did not happen.", 'a7-construire'),
        tI("Nie l'infinitif.", "Il m'a demandé de fumer.", fr(E(1114)), "ne pas devant fumer. EN: ne pas before fumer.", 'a7-infinitif'),
        tI("Mets ne plus devant l'infinitif.", "J'essaie de boire du café.", fr(E(1116)), "ne plus devant boire, et du devient de. EN: and du becomes de.", 'a7-exemples'),
        tI('Dis-le avec sans.', "Elle est sortie et elle n'a rien dit.", fr(E(1123)), "sans rien dire : rien avant l'infinitif. EN: rien before the infinitive.", 'a7-construire'),
        eS('Il est parti sans ne pas dire au revoir.', fr(E(1121)), "sans suffit. EN: sans is enough.", 'a7-erreurs'),
        lC('Écoute. Où est pas ?', fr(E(1113)), ['devant sortir', 'après sortir'], 0, "ne pas, devant l'infinitif. EN: before the infinitive.", 'a7-histoire'),
      ],
    },
    {
      id: 'r8-combine', label: 'Plusieurs vides', targets: ['ordre-combine'],
      questions: [
        mc('plus, jamais, rien : dans quel ordre ?', ['rien, jamais, plus', 'jamais, plus, rien', 'plus, jamais, rien'], 2, "plus, jamais, puis la chose. EN: plus, jamais, then rien.", 'a8-ordre'),
        mc("« Je ne dirai plus jamais rien. » C'est...", ['un oui', 'un non très fort'], 1, "Les négations s'ajoutent. EN: they stack.", 'a8-hacks'),
        mc("« Elle ne mange plus que des légumes. » Mange-t-elle de la viande ?", ['non, plus maintenant', 'oui, un peu'], 0, "plus que : seulement, maintenant. EN: only, now.", 'a8-choisir'),
        tI('Ajoute plus.', 'Je ne dis rien.', fr(E(1131)), "plus avant rien. EN: plus before rien.", 'a8-construire'),
        tI('Ajoute jamais.', 'Je ne reviendrai plus ici.', fr(E(1135)), "plus, puis jamais. EN: plus then jamais.", 'a8-ordre'),
        tI('Remplace ses amis par personne.', 'Il ne voit plus ses amis.', fr(E(1132)), "plus, puis personne. EN: plus then personne.", 'a8-construire'),
        eS('Elle ne fait rien jamais.', fr(E(1133)), "jamais avant rien. EN: jamais before rien.", 'a8-piege'),
        lC('Écoute. Reste-t-il quelque chose à faire ?', fr(E(1137)), ['oui', 'non, plus rien'], 1, "plus rien à faire. EN: nothing left.", 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-reponses', label: 'Répondre', targets: ['oui-au-negatif'],
      questions: [
        mc("« Tu n'as pas payé le loyer ? » Tu as payé.", ['Oui.', 'Non.', 'Si.'], 2, "si contredit un négatif. EN: si contradicts.", 'a9-si'),
        mc("« Je n'aime pas le bruit. » Tu es d'accord.", ['Moi aussi.', 'Moi non plus.'], 1, "non plus après un négatif. EN: non plus after a negative.", 'a9-construire'),
        mc("« Tu fumes ? » Tu as arrêté l'an dernier.", ['Plus maintenant.', 'Pas encore.'], 0, "Ça a cessé. EN: it stopped.", 'a9-tableau'),
        tI("Réponds avec si : tu l'as reçu hier soir.", "Tu n'as pas reçu mon message ?", fr(E(1150)), "si, puis la réponse. EN: si, then the answer.", 'a9-histoire'),
        tI("Complète pour dire que tu es d'accord.", 'Elle ne fume pas, et moi ...', fr(E(1158)), "non plus. EN: non plus.", 'a9-construire'),
        eS("Je n'aime pas le bruit, et lui aussi.", fr(E(1157)), "Après un négatif : non plus. EN: non plus.", 'a9-erreurs'),
        eS("Je ne suis du tout pas d'accord.", fr(E(1159)), "pas du tout est un bloc. EN: one block.", 'a9-erreurs'),
        lC("Écoute. Cette personne est-elle d'accord ?", fr(E(1159)), ['oui, un peu', 'non, pas du tout'], 1, "pas du tout : non, avec force. EN: not at all.", 'a9-cartes'),
      ],
    },
    {
      id: 'r10-registre', label: "L'oral et l'écrit", targets: ['ne-tombe-ecrit'],
      questions: [
        mc("Tu écris à l'agence. Quelle phrase ?", ['Je sais pas quand vous passez.', 'Je ne sais pas quand vous passez.'], 1, "À l'écrit, ne reste. EN: keep ne in writing.", 'a10-oral'),
        mc("« On a plus de lait », dit sans s. Ça veut dire...", ["il n'y a plus de lait", 'il y a davantage de lait'], 0, "Sans s : plus du tout. EN: none left.", 'a10-oral'),
        mc('Quand ne tombe, quel mot garde le sens ?', ['le second mot', 'le verbe', 'le sujet'], 0, "Le second mot. EN: the second word.", 'a10-focus'),
        tI('Écris-la pour une lettre.', "J'ai rien compris.", fr(E(1174)), "Remets ne. EN: put ne back.", 'a10-trier'),
        tI('Écris-la pour une lettre.', 'Y a personne.', fr(E(1172)), "il, ne, et y a devient y a. EN: il n'y a personne.", 'a10-trier'),
        tI('Écris-la pour une lettre.', 'Je le trouve pas.', fr(E(1181)), "ne devant le pronom. EN: ne before the pronoun.", 'a10-choisir'),
        eS('Madame, je sais pas quand le technicien viendra.', 'Madame, je ne sais pas quand le technicien viendra.', "Dans un courriel, ne reste. EN: in an email, keep ne.", 'a10-erreurs'),
        lC('Écoute. Où entends-tu cette phrase ?', fr(E(1169)), ['dans une conversation', 'dans une lettre officielle'], 0, "Sans ne : de l'oral. EN: spoken.", 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-plainte', label: 'La plainte', targets: ['plainte-vague'],
      questions: [
        mc('Quelle phrase est la plus précise pour une plainte ?', ["L'accueil n'était pas bien.", fr(E(1185))], 1, "personne dit ce qui manquait. EN: personne says what was missing.", 'a11-lecture'),
        mc('Combien de demandes fait une bonne plainte ?', ['le plus possible', 'une seule'], 1, "Une seule, avec ne ... que. EN: just one.", 'a11-plan'),
        mc("« Je ne demande qu'une chose. » Combien de choses demandes-tu ?", ['aucune', 'plusieurs', 'une'], 2, "ne ... que : une. EN: one.", 'a11-cheat'),
        tI('Rends-la précise, avec ni ... ni.', "Nous n'avons pas eu de chauffage et pas d'eau chaude.", fr(E(1186)), "ni ... ni, sans article. EN: ni ... ni.", 'a11-plan'),
        tI('Rends-la précise, avec aucun.', "Nous n'avons pas obtenu de remboursement.", fr(E(1189)), "aucun, après le participe. EN: aucun after the participle.", 'a11-usages'),
        eS("À ce jour, je n'ai pas reçu aucune réponse.", "À ce jour, je n'ai reçu aucune réponse.", "aucune remplace pas. EN: aucune replaces pas.", 'a11-lecture'),
        eS("Rien ne correspondait pas à l'annonce.", fr(E(1184)), "rien en sujet : pas de pas. EN: no pas.", 'a11-scenario'),
        lC('Écoute. Cette phrase peut-elle finir une plainte ?', fr(E(1190)), ['oui', 'non'], 0, "Une conséquence claire. EN: a clear consequence.", 'a11-cheat'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Écrire une plainte',
    opener: {
      line: "À toi d'écrire la lettre qui dit exactement ce qui manquait, sans crier. EN: Your turn to write the letter that says exactly what was missing, without shouting.",
      imageRef: 'lessons/negation-avancee/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ta propre plainte et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote your own complaint and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 120,
    restPoints: ['a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-que', 'a11-quiz/r6-place', 'a11-quiz/r9-reponses'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_MISSION, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at layer core
 *  is refused by validateDensity). Every sheet is reachable from a mission
 *  through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-mots', 'Les seconds mots', ['la famille', 'ce que chacun dit', 'les combinaisons'], [
    teach('sheet-mots-teach', 'Ne ouvre, le second mot dessine',
      `${REFRAME} ${Cap(NEGATION_REF)} t'a donné ne ... pas : « ${A118_REFRAME} » En français : « ${A118_REFRAME_FR} » Ici, pas n'est qu'un second mot parmi dix. Les autres disent la forme du vide : une personne, une chose, un moment, un arrêt. EN: pas is one second word among ten; the others say what shape the gap has.`),
    table('sheet-mots-table', 'Ce que dit chaque second mot', ['Second mot', 'Ce qui manque', 'Exemple'], [
      ['pas', 'rien de précis : un non', "Je n'ai pas de chien."],
      ['plus', 'ce qui existait et a cessé', 'Je ne fume plus.'],
      ['jamais', 'aucun moment', 'Elle ne boit jamais de café.'],
      ['rien', 'aucune chose', 'Je ne comprends rien.'],
      ['personne', 'aucune personne', 'Je ne connais personne ici.'],
      ['aucun, aucune', 'pas un seul', "Je n'ai aucune idée."],
      ['que', 'tout, sauf ce qui suit que', "Je n'ai que dix dollars."],
      ['ni ... ni', 'deux choses à la fois', "Je n'ai ni frère ni sœur."],
      ['nulle part', 'aucun endroit', 'On ne va nulle part ce week-end.'],
      ['guère (écrit)', 'presque rien', 'Il ne pleut guère en juillet.'],
    ]),
    table('sheet-mots-combine', 'Les combinaisons', ['Combinaison', 'Exemple'], [
      ['plus rien', 'Je ne dis plus rien.'],
      ['plus personne', 'Il ne voit plus personne.'],
      ['jamais rien', 'Elle ne fait jamais rien.'],
      ['jamais personne', 'On ne voit jamais personne dans ce parc.'],
      ['plus jamais', 'Je ne reviendrai plus jamais ici.'],
      ['plus jamais rien', 'Je ne dirai plus jamais rien.'],
      ['plus que', 'Elle ne mange plus que des légumes.'],
      ['plus nulle part', 'On ne trouve plus ça nulle part.'],
    ]),
  ]),
  sheet('sheet-que', 'Que, aucun, ni ... ni', ['ne ... que et seulement', 'aucun', 'ni ... ni', 'les articles'], [
    teach('sheet-que-teach', 'Ne ... que ne nie rien',
      "Ne ... que veut dire seulement. La chose après que est bien là : je n'ai que du pain, donc j'ai du pain. C'est pour ça que l'article ne devient pas de. Seulement dit la même chose et peut aller presque partout dans la phrase. EN: ne ... que means only, so the article stays; seulement says the same and moves more freely."),
    table('sheet-que-articles', "Ce que devient l'article", ['Négation', 'Article', 'Exemple'], [
      ['pas, plus, jamais', 'un, du, des deviennent de', "Il n'y a plus de pain."],
      ['ne ... que', "l'article reste", 'Je ne veux que du pain.'],
      ['ni ... ni', 'un, du, des disparaissent', "Je n'ai ni frère ni sœur."],
      ['ni ... ni', 'le, la, les restent', "Je n'aime ni le froid ni la neige."],
      ['aucun', "aucun prend la place de l'article", "Il n'y a aucun problème."],
      ['après être', "l'article reste (A1)", "Ce n'est pas un livre."],
    ]),
    teach('sheet-que-guere', 'Ne ... guère, pour lire',
      "Ne ... guère veut dire presque pas. Tu le liras dans un journal, une annonce ou un roman : il ne pleut guère en juillet. À l'oral, on dit plutôt pas beaucoup ou presque pas. Tu n'as pas besoin de l'écrire. EN: ne ... guère means hardly; read it, you need not produce it."),
  ]),
  sheet('sheet-place', 'La place des mots', ['temps simples', 'temps composés', 'infinitif', 'sujet'], [
    teach('sheet-place-compose', 'Au passé composé, deux places',
      `${Cap(PC_AVOIR_REF)} l'a dit pour pas : « ${A205_REFRAME} » En français : « ${A205_REFRAME_FR} » Plus, jamais et rien font pareil : je n'ai rien vu. Personne, aucun, que et nulle part vont après le participe : je n'ai vu personne. EN: short second words sit before the participle, the rest go after it.`),
    table('sheet-place-table', 'Où va le second mot', ['Structure', 'Exemple'], [
      ['temps simple : ne + verbe + mot', 'Je ne comprends rien.'],
      ['composé, mot court : avant le participe', "Je n'ai rien vu."],
      ['composé, personne ou aucun : après', "Je n'ai vu personne."],
      ['composé, que ou nulle part : après', "Je n'ai payé que la moitié."],
      ['sujet : mot + ne + verbe', "Personne n'est venu."],
      ['infinitif : ne pas + infinitif', 'Merci de ne pas claquer la porte.'],
      ['infinitif, personne : après', 'Je suis parti sans voir personne.'],
      ['avec des pronoms : ne + pronoms + verbe', "Il ne me l'a jamais rendu."],
    ]),
    teach('sheet-place-infinitif', 'Devant un infinitif',
      `${Cap(FUTUR_PROCHE_REF)} disait : « ${A219_REFRAME} » En français : « ${A219_REFRAME_FR} » Je ne peux pas venir. Mais si c'est l'infinitif que tu nies, ne pas se collent devant lui : je peux ne pas venir. Sans remplace toute la négation : sans dire au revoir. Sans que est suivi du subjonctif : ici, reconnais-le seulement. EN: to negate the infinitive itself, put ne pas in front of it.`),
    teach('sheet-place-sujet', 'Quand le vide est le sujet',
      "Personne, rien, aucun et ni ... ni peuvent ouvrir la phrase. Ensuite vient ne, puis le verbe, et il n'y a jamais pas : personne n'est venu, rien n'a changé, aucune fenêtre ne ferme. EN: as the subject, the negative word comes first, then ne, and never pas."),
  ]),
  sheet('sheet-reponses', 'Répondre et insister', ['si', 'non plus', 'les renforts'], [
    teach('sheet-reponses-teach', 'Si contredit, non plus confirme',
      `Après une phrase négative, oui ne suffit pas. Pour dire le contraire, tu dis si. Pour être d'accord, tu dis non plus. ${Cap(NEGATION_REF)} t'a donné moi non plus ; ici, toute la famille : lui non plus, toi non plus, nous non plus. EN: si contradicts a negative, non plus agrees with it.`),
    table('sheet-reponses-table', 'Qui dit quoi', ['On te dit', 'Tu es d’accord', 'Tu n’es pas d’accord'], [
      ["Tu n'as pas payé le loyer ?", 'Non, pas encore.', "Si, j'ai payé le loyer."],
      ["Je n'aime pas le froid.", 'Moi non plus.', 'Moi, si.'],
      ["J'aime le froid.", 'Moi aussi.', 'Moi, non.'],
      ["Il ne fume pas.", 'Elle non plus.', 'Elle, si.'],
      ["Tu n'as rien oublié ?", 'Non, rien.', "Si, j'ai oublié mes clés."],
      ["Personne n'a appelé ?", 'Non, personne.', 'Si, ta sœur.'],
    ]),
    table('sheet-reponses-renforts', 'Les renforts', ['Formule', 'Ce que ça dit', 'Exemple'], [
      ['pas du tout', 'zéro, avec force', "Je ne suis pas du tout d'accord."],
      ['plus du tout', 'ça a cessé, complètement', 'Mes écouteurs ne marchent plus du tout.'],
      ['jamais de la vie', 'non, avec émotion', 'Tu reviendrais ? Jamais de la vie.'],
      ['pas encore', 'pas maintenant, peut-être plus tard', 'Non, pas encore.'],
      ['plus maintenant', 'avant oui, maintenant non', 'Tu fumes ? Plus maintenant.'],
      ['absolument pas', 'non, sans discussion', 'Absolument pas.'],
    ]),
  ]),
  sheet('sheet-avis', 'Écrire une plainte', ["le ne à l'oral", 'la liste de contrôle', 'les formules'], [
    teach('sheet-avis-oral', "Le ne qui tombe, et quand le garder",
      `${Cap(NEGATION_REF)} t'a appris à entendre le ne qui tombe. À B1, tu peux le laisser tomber toi aussi quand tu parles avec un ami. Mais à l'écrit, dans un courriel, une plainte ou un formulaire, ne reste toujours. EN: drop ne in casual speech if you like; in writing, never.`),
    table('sheet-avis-registre', "L'oral et l'écrit", ['À l’oral', 'À l’écrit'], [
      ['Je sais pas.', 'Je ne sais pas.'],
      ["C'est pas grave.", "Ce n'est pas grave."],
      ['Y a personne.', "Il n'y a personne."],
      ["J'ai rien compris.", "Je n'ai rien compris."],
      ["T'inquiète pas.", "Ne t'inquiète pas."],
      ['On a plus de lait.', "On n'a plus de lait."],
    ]),
    table('sheet-avis-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Chaque ne est écrit', 'relis chaque verbe négatif'],
      ['Le mot précis', 'personne, rien, aucun plutôt que pas'],
      ['Pas de pas en trop', 'pas ne se combine avec aucun autre second mot'],
      ['La bonne place', 'rien avant le participe, personne après'],
      ['Une seule demande', 'ne ... que : je ne demande qu’une chose'],
      ['Le ton', 'des faits, pas de gros mots'],
    ]),
    table('sheet-avis-formules', 'Les formules de plainte', ['Formule', 'Exemple'], [
      ['rien ne correspondait à', "Rien ne correspondait à l'annonce."],
      ['personne ne nous a', 'Personne ne nous a accueillis.'],
      ['à ce jour, je n’ai reçu que', "À ce jour, je n'ai reçu qu'une réponse automatique."],
      ['sans aucune explication', 'Le chauffage a été coupé sans aucune explication.'],
      ['je ne demande qu’une chose', "Je ne demande qu'une chose : un remboursement."],
      ['je ne recommanderai plus', 'Je ne recommanderai plus votre agence.'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS, one per error trigger, each the resolving target of
 *  exactly one quiz round. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-forme', title: 'Une chose ou une personne', format: 'sort' as const, coach: "Deux piles. Demande-toi ce qui manque : une chose, ou une personne. EN: sort by what is missing.", buckets: ['une chose manque', 'une personne manque'], items: [E(1001), E(1000), E(1009), E(1008), E(1017), E(1018)], audio: AUDIO },
  { id: 'd-second', title: 'Un seul second mot', format: 'mcq' as const, coach: "Le second mot prend la place de pas. Il ne s'ajoute jamais à lui. EN: the second word replaces pas.", q: 'Je ne connais ... ici.', opts: ['pas personne', 'personne'], correct: 1, why: "personne suffit. EN: personne is enough.", items: [E(1015), E(1016), E(1017), E(1018), E(1021), E(1022)], audio: AUDIO },
  { id: 'd-que', title: "Que garde l'article", format: 'mcq' as const, coach: "Avec ne ... que, la chose est là. Garde l'article. EN: with ne ... que, keep the article.", q: 'Je ne veux que ... pain.', opts: ['du', 'de'], correct: 0, why: "Tu veux du pain : du reste. EN: du stays.", items: [E(1035), E(1037), E(1038), E(1040), E(1043), E(1051)], audio: AUDIO },
  { id: 'd-aucun', title: 'Zéro, au singulier', format: 'mcq' as const, coach: "aucun compte zéro et reste au singulier ; ni enlève l'article. EN: aucun is singular; ni drops the article.", q: "Il n'y a ... problème.", opts: ['aucuns', 'aucun'], correct: 1, why: "Zéro : singulier. EN: singular.", items: [E(1055), E(1056), E(1059), E(1060), E(1063), E(1070)], audio: AUDIO },
  { id: 'd-sujet', title: 'Le vide devant', format: 'mcq' as const, coach: "Quand le mot vide ouvre la phrase, écris ne et jamais pas. EN: negative subject, ne, no pas.", q: 'Personne ... venu.', opts: ["n'est", "n'est pas"], correct: 0, why: "personne remplace pas. EN: personne replaces pas.", items: [E(1075), E(1076), E(1077), E(1078), E(1080), E(1085)], audio: AUDIO },
  { id: 'd-place', title: 'Avant ou après', format: 'sort' as const, coach: "Deux piles : le second mot est-il avant ou après le participe ? EN: before or after the participle.", buckets: ['avant le participe', 'après le participe'], items: [E(1093), E(1094), E(1095), E(1098), E(1097), E(1100)], audio: AUDIO },
  { id: 'd-infinitif', title: 'Ne pas devant', format: 'mcq' as const, coach: "Devant un infinitif, ne et pas se collent et passent devant. EN: ne pas together before the infinitive.", q: 'Merci de ... claquer la porte.', opts: ['pas ne', 'ne pas'], correct: 1, why: "ne pas, devant claquer. EN: ne pas first.", items: [E(1113), E(1114), E(1115), E(1117), E(1121), E(1125)], audio: AUDIO },
  { id: 'd-combine', title: 'Dans l’ordre', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute : plus, puis jamais, puis rien ou personne. EN: read each aloud in the fixed order.", items: [E(1131), E(1132), E(1133), E(1135), E(1136), E(1137)], audio: AUDIO },
  { id: 'd-si', title: 'Si ou oui', format: 'mcq' as const, coach: "Après un négatif : si pour contredire, non plus pour être d'accord. EN: si contradicts, non plus agrees.", q: "« Tu n'as pas payé ? » Tu as payé.", opts: ['Si.', 'Oui.'], correct: 0, why: "si contredit. EN: si contradicts.", items: [E(1149), E(1150), E(1151), E(1157), E(1158), E(1163)], audio: AUDIO },
  { id: 'd-registre', title: "L'oral ou l'écrit", format: 'sort' as const, coach: "Deux piles : ce qui se dit, et ce qui s'écrit. EN: sort into spoken and written.", buckets: ["à l'oral", "à l'écrit"], items: [E(1167), E(1168), E(1169), E(1170), E(1173), E(1174)], audio: AUDIO },
  { id: 'd-plainte', title: 'Une plainte précise', format: 'flashcard' as const, coach: "Lis chaque phrase et dis ce qui manquait. EN: read each and say what was missing.", items: [E(1184), E(1185), E(1186), E(1189), E(1191), E(1192)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'pas-partout', description: 'Uses pas plus quelqu’un or quelque chose where French has a precise second word, so a sentence about an empty street talks about a particular person.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-forme', retest: 'd-forme' },
  { id: 'pas-en-double', description: 'Keeps pas beside plus, jamais, rien or personne, as English keeps not in not any more, not anything, not anybody.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-second', retest: 'd-second' },
  { id: 'que-comme-pas', description: 'Treats ne ... que like pas: reduces the article to de, adds pas, or puts que straight after the verb instead of before what remains.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-que', retest: 'd-que' },
  { id: 'zero-mal-forme', description: 'Puts aucun in the plural, keeps pas or an article with ni ... ni, or adds pas to nulle part.', detectOn: ['a4-construire', 'a4-erreurs', 'a4-check', 'a11-mission'], drill: 'd-aucun', retest: 'd-aucun' },
  { id: 'sujet-avec-pas', description: 'Adds pas after a negative subject (personne, rien, aucun, ni ... ni), or leaves a double ni subject with a singular verb.', detectOn: ['a5-construire', 'a5-piege', 'a5-check', 'a11-mission'], drill: 'd-sujet', retest: 'd-sujet' },
  { id: 'place-compose', description: 'Puts personne, aucun or que between the auxiliary and the participle, or pushes rien, jamais and plus after the participle.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-place', retest: 'd-place' },
  { id: 'infinitif-entoure', description: 'Wraps ne ... pas round an infinitive as round a conjugated verb, adds ne pas after sans, or puts rien after the infinitive.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-infinitif', retest: 'd-infinitif' },
  { id: 'ordre-combine', description: 'Combines second words in the wrong order, repeats ne, or adds pas to a combination, as if the negatives had to be built one by one.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-combine', retest: 'd-combine' },
  { id: 'oui-au-negatif', description: 'Answers oui to contradict a negative question, or agrees with a negative using moi aussi.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check'], drill: 'd-si', retest: 'd-si' },
  { id: 'ne-tombe-ecrit', description: 'Drops ne in writing, or reaches for pas once ne has gone, so a written complaint reads like a text message.', detectOn: ['a10-trier', 'a10-choisir', 'a10-check', 'a11-mission'], drill: 'd-registre', retest: 'd-registre' },
  { id: 'plainte-vague', description: 'Writes a complaint in which every negative is pas, with several demands and no frame, so the reader cannot tell what was actually missing.', detectOn: ['a11-lecture', 'a11-cheat', 'a11-mission'], drill: 'd-plainte', retest: 'd-plainte' },
];

export const SECTIONS: LessonSection[] = ACTS.flatMap((a) => a.sections);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

/** Every recordingId the sections name, each with its studio brief. */
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-20-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-20-awa': "The video call (act 2), two voices: Awa, a warm Dakar voice in her thirties, Senegalese French welcome, and the learner. Awa's three lines are teasing and quick; the learner's three answers are calm and slightly amused. Each second word (plus, jamais, personne) lands at the END of its sentence with ordinary final stress, never extra.",
  'rec-b1-20-mots': "The four second-word cards. Read « je ne fume pas », « je ne fume plus » and the rest at the SAME pace and melody: the whole deck is that only the last word changed. Card four holds two sentences across a middot; leave a clear beat.",
  'rec-b1-20-que-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. « que » and « qu'une » are never stressed: the learner must catch a word nobody leans on. Lines one and two mean the same thing and must be read with the same melody.",
  'rec-b1-20-que': "The four ne ... que cards, one voice, plain delivery. On card three let « du pain » be clearly du, not de: the card is that the article survives.",
  'rec-b1-20-piege-que': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-20-annonce': "The rental listing (act 4), ONE VOICE, one take, Québécois, read the way an agent reads a listing aloud on the phone: brisk and neutral. « ni balcon ni ascenseur » with equal weight on both nouns. « guère » is read without any special emphasis.",
  'rec-b1-20-aucun': "The four aucun, ni, nulle part and guère cards. On card one « aucune idée » runs as one group with the n carried over. Card four is recognition only: read it at the same pace as the others, with no teaching emphasis.",
  'rec-b1-20-agence': "The agency counter (act 5), two voices: Madame Tremblay, polite and a little defensive, Québécoise, and the learner, calm and firm. The learner's three answers each OPEN with the negative word (« Personne », « Rien », « Personne »); give it ordinary sentence-initial weight, not a dramatic one.",
  'rec-b1-20-sujet': "The four subject cards. Read each at the same pace; « ne » after the subject is short and unstressed, and there is no pause between the negative word and ne.",
  'rec-b1-20-piege-sujet': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-20-compose-ecoute': "REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The learner is listening for WHERE the second word falls relative to the participle, so « rien vu » and « vu personne » must run as ordinary groups with no pause inside them. Keep the liaison in « rien entendu » if it occurs.",
  'rec-b1-20-place': "The four placement cards. Card one is a2.05's « je n'ai pas vu », read identically in rhythm to card two (« je n'ai rien vu ») so the learner hears rien take pas's slot.",
  'rec-b1-20-piege-place': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-20-regles': "The house rules (act 7), two voices: monsieur Gagnon, courteous and slightly formal, Québécois, reading from his list, and the learner. His « merci de ne pas » lines are read like a man reading a sign he wrote himself. The narrator line at the end is a third, neutral voice.",
  'rec-b1-20-infinitif': "The four infinitive cards. On card two, « de ne pas fumer » is one group with no break between ne and pas.",
  'rec-b1-20-combine-ecoute': "REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The stacked second words (« plus jamais », « plus rien ») are said as ordinary groups, never separated for clarity: that separation is the one thing a native speaker never does.",
  'rec-b1-20-ordre': "The four combination cards. « plus » here is always /ply/ with no final s. Card four (« plus que ») must also be /ply/, not /plys/.",
  'rec-b1-20-piege-combine': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-20-lundi': "The Monday phone call (act 9), two voices: monsieur Gagnon, hurried and a little embarrassed, Québécois, and the learner, calm. Each « Si » opens its answer with a small rise and a short beat after it, the way a speaker contradicts politely. « Moi non plus » is relaxed and friendly.",
  'rec-b1-20-si': "The four answer cards, one voice. « Si » at the head of a sentence is short and clear, never drawn out. Card three (« Moi, si ») has a clear comma pause.",
  'rec-b1-20-oral-ecoute': "REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, casual Québécois or relaxed Parisian speech at real conversational speed. NO ne anywhere, and no careful articulation: « je sais pas » is /ʃe pa/, « y a personne » has no il. Line five (« On a plus de lait ») must be /ply/ with NO final s: the question depends on it.",
  'rec-b1-20-oral': "The four register cards. Cards one to three are CASUAL (no ne, relaxed); card four is the same sentence read carefully, with ne. The contrast between card one and card four is the whole deck, so do not smooth it out. Card three: /ply/, no s.",
  'rec-b1-20-lettre': "The model complaint (act 11), ONE VOICE, one take, read the way a calm, determined person reads their own letter aloud before sending it: firm, never angry. Every ne is pronounced, because this is written French. The four moves (frame, facts, what is still missing, the single request) are audible as four blocks.",
  'rec-b1-20-avis': "The guest review (act 1), ONE VOICE, one take, Québécoise, read the way someone reads their own review aloud to a friend: tired, dry, never shouting. Every second word (rien, personne, jamais, plus, que, aucune) is audible and unstressed; the ne in « ne nous attendait » and « ne répondait » is kept, because this is a written text read aloud.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 20',
  intro: 'You have had ne ... pas since A1. Pas is the plainest way to say no, and French almost never stops there: it says whether what is missing is a person, a thing, a time, a habit that stopped, a single one, or everything except one thing. This lesson gives you those words, where each one goes, how they combine, how to answer a negative, and when ne quietly disappears.',
  skill: 'PE',
  grammarAssumed: [
    NEGATION_UNIT, ELISION_UNIT, ARTICLES_UNIT, PC_AVOIR_UNIT, PC_ETRE_UNIT, FUTUR_PROCHE_UNIT,
    MODAUX_UNIT, PC_IMPARFAIT_UNIT, FUTUR_UNIT, ORDRE_PRONOMS_UNIT,
  ],
  grammarIntroduced: [
    'The negative second words plus, jamais, rien and personne in place of pas, with the reduction to de after plus and jamais',
    'ne ... que as restriction, with the article preserved, and seulement as its free-standing equivalent',
    'aucun and aucune as a negative determiner agreeing in gender and invariable in number; ni ... ni with the loss of indefinite and partitive articles; nulle part',
    'ne ... guère, for recognition only',
    'personne, rien, aucun and ni ... ni as the subject of the clause, with ne and without pas',
    'Placement in compound tenses: plus, jamais and rien before the participle; personne, aucun, que and nulle part after it',
    'Negating an infinitive: ne pas, ne plus, ne jamais and ne rien grouped before it, and sans plus an infinitive',
    'Combined negations under one ne, in the fixed order plus, jamais, then rien or personne, including plus que',
    'si as the contradicting answer to a negative question, and non plus with any stressed pronoun',
    'The dropped ne as a register choice: available in casual speech, never in writing, with the plus /ply/ versus /plys/ ambiguity it creates',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu connais ne ... pas depuis le A1. C'est le non le plus simple, et le français s'arrête rarement là : il dit si ce qui manque est une personne, une chose, un moment, une habitude, un seul, ou tout sauf une chose. Cette leçon te donne ces mots, leur place, leurs combinaisons, la façon de répondre à un négatif, et le moment où ne disparaît.",
    minutes: 130,
    difficulty: 3,
    glyph: 'rien',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: NEGATION_AVANCEE_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Inert (build log, 2026-09-25). Kept, as every other B1 lesson keeps it.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, AVIS_TEXT, ANNONCE_TEXT, PLAINTE_TEXT, SECOND_WORDS, dicteeFor };
