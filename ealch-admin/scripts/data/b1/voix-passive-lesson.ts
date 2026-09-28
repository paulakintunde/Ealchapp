// b1.18.l1 « La voix passive » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is REAL as of 2026-09-25: it is in SECTION_TYPES and the LessonSection
// union, validateSection enforces its rubric/model/watchFor rules and
// TaskView draws it. So `sections` is `LessonSection[]` and the validators
// run on `LESSON` itself. There is no `lessonWithoutTask()` shim here and
// `_task-section.ts` is not imported.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading / listening), name
//   (cardDeck, examples, tapTable), build (groupDrill, gated), choose (a
//   drill where the MEANING picks the form), trap (trapDrill stepped or
//   commonErrors), check (gated control pages before the checkpoint).
//
//    1  L'affiche et la bouche        7   a learner who answers like a notice
//    2  Être + participe accordé      8   the form, and the four endings
//    3  Le passif dans tous les temps 8   est, a été, était, sera, serait
//    4  Par qui ? Presque jamais      7   the agent, and its usual absence
//    5  Où vit le passif              7   notices, rules, procedures, news
//    6  On, le vrai réflexe           8   the spoken alternative, and why
//    7  Se faire + infinitif          7   what happens TO you
//    8  Ça se dit                     7   the pronominal passive
//    9  Le piège anglais              8   donner à: the impossible passive
//   10  Choisir ton outil             7   passif, on, se faire, pronominal
//   11  Écrire une consigne          11   model, plan, role play, TASK, quiz
//
//   TOTAL 85 missions, 11 acts. Corpus: 173 authored rows in eleven blocks
//   plus 22 reused seed rows, 195 item ids in all, 188 of them released act by
//   act through `deckTranche` (the other 7 are the seed rows with no flashcard
//   drill, listed as NOT_DECK_ABLE). Quiz: 11 rounds of 8. Eleven error
//   triggers, eleven drills, five reference sheets reached from 15 missions,
//   ten terms. Chapter artwork: `voix-passive-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le passif est sur l'affiche. Dans ta bouche, c'est on. »
//   EN: The passive belongs on the notice. In your mouth, it is on.
//
//   ONE METAPHOR, THE NOTICE AND THE MOUTH. A sign, a rule, a procedure and a
//   news bulletin do not care who did it, so they use the passive; a speaker
//   does care, so a speaker says « on ». It is NOT « avoid the passive »:
//   acts 3 to 5 exist because the passive is the right and normal form in
//   written French, and the task is to WRITE a set of procedures.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    être + participe accordé; être across five tenses; par + agent
//           and its usual absence; `on` as the spoken alternative; se faire
//           + infinitif; the pronominal passive; the register the passive
//           lives in; and the indirect-object trap (donner à quelqu'un has
//           no passive with the person as subject).
//   QUOTES  a2.20's reframe (participle formation) and a2.21's (agreement
//           after être), both imported and both shown with the French
//           rendering that b1.03 already ships; b1.05's and b1.08's French
//           reframes for the futur and the conditionnel.
//   LEAVES  participle FORMATION to a2.20, assumed throughout and never
//           re-taught; the subjunctive to b1.14 to b1.16, and no authored
//           French string here uses one; reported speech to b1.19.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the
//   situation needs (the syndic and the agent say « vous »). Every learner
//   surface that explains something carries English (`en`, or a final
//   « EN: »), and NO ANSWER ever does. Every `say` is French, spoken fr-FR.
//   Theme `faits-et-procedures`, POSTGRES ONLY (corpus §A.1). A2 citations
//   use the English trail label; b1.* ones are French from the plan.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. The reframe puts the passive on the notice and « on » in the mouth.
//      A news bulletin is spoken AND full of passives, so act 5's radio
//      lines are the one place the line is loose. Is « l'affiche » wide
//      enough to cover « ce qui est écrit d'avance », or should the reframe
//      say « l'écrit » instead?
//   2. THREE tapTables (acts 3, 6 and 9), one per act, six rows each. The
//      pilot brief allows one per LESSON and all fourteen shipped lessons
//      break it. Confirm three.
//   3. Act 9 teaches eight verbs whose person cannot be a passive subject
//      (donner, dire, demander, offrir, promettre, permettre, répondre,
//      conseiller). That list is the sheet and the trap. Is eight the right
//      number, or should apprendre and envoyer join it?
//   4. b1.15 to b1.17 are being built in the same wave. If any of them ends
//      up owning « on », act 6 needs a reread.
//   5. The theme was created for this lesson and holds nothing else. Its
//      sub-themes (la voix passive, on et se faire, les avis et les
//      consignes) are all spent here. What lands in it next?
//   6. 'coach-fr-FR' is inert (build log, 2026-09-25). Kept, as every other
//      B1 lesson keeps it.
//   7. The task is written (PE, 90 to 130 words, a set of procedures).
//      Should b1.18 also carry a SPOKEN task, given how much of the lesson
//      is about what the mouth says?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet,
  SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  AVIS_TEXT, AVIS_AGENT, CONSIGNE_TEXT, NO_PASSIVE_VERBS,
  A220_REFRAME, A221_REFRAME, A205_REFRAME, A223_REFRAME,
  A220_REFRAME_FR, A221_REFRAME_FR, A205_REFRAME_FR,
  B105_REFRAME, B108_REFRAME,
  PARTICIPLE_UNIT, PC_AVOIR_UNIT, PC_ETRE_UNIT, PRONOMINAL_UNIT, PRONOMINAL_PC_UNIT,
  AGREEMENT_UNIT, DIRECT_OBJ_UNIT, IMP_USE_UNIT, PC_IMPARFAIT_UNIT, FUTUR_UNIT, CONDITIONNEL_UNIT,
  PARTICIPLE_REF, PC_ETRE_REF, PRONOMINAL_PC_REF, AGREEMENT_REF, FUTUR_REF, CONDITIONNEL_REF,
} from './voix-passive-corpus.ts';
import { VOIX_PASSIVE_TERMS } from './voix-passive-terms.ts';

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
  if (!r) throw new Error(`b1.18: no item ${id}`);
  return r;
}

/** The corpus row's IPA, so a scene break never retypes a transcription. */
function ipaOf(id: string): string {
  const r = src(id);
  if (!r.ipa) throw new Error(`b1.18: no ipa on ${id}`);
  return r.ipa;
}

/** The corpus row's respelling, BRACKETED for a section (the density
 *  validator requires brackets in a section and refuses them in a row). */
function rsOf(id: string): string {
  const r = src(id);
  if (!r.respell) throw new Error(`b1.18: no respell on ${id}`);
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
 *  ACT 1 — L'AFFICHE ET LA BOUCHE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. NOBODY IS RUDE: the learner's French is correct and the register is
 *  wrong, which is the only failure this lesson can open on. A learner who
 *  has a2.20 and a2.21 can already BUILD a passive; what they cannot do is
 *  decide not to. NO « ? » OR « ! » IN ANY BUBBLE (playbook 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Premier jour au bureau',
  frSub: 'La salle fermée',
  setting: { place: 'Un bureau, rue Sainte-Catherine', city: 'Montréal', time: '9 h 10', ambience: 'une machine à café, un couloir, une porte vitrée fermée' },
  beats: [
    {
      kind: 'narration',
      text: "Ton premier lundi dans une petite boîte de Montréal. La grande salle est fermée à clé depuis ce matin. Malika, ta collègue, arrive avec deux cafés.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Malika',
      fr: 'Dis-moi pourquoi la salle est fermée.',
      en: 'Tell me why the room is locked.',
      respell: '[dee-MWA poor-kwa la SAL eh fehr-MAY]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: src(E(1000)).fr,
      en: src(E(1000)).en,
      respell: rsOf(E(1000)),
      stage: "Ta phrase est juste. Être plus le participe, et réservée s'accorde avec la salle.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Malika',
      fr: 'Tu parles comme le panneau sur la porte.',
      en: 'You sound like the sign on the door.',
      respell: '[tü PARL kom luh pa-NOH sür la PORT]',
      stage: "Elle sourit. Le sens est passé, mais elle a entendu un avis, pas une collègue.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Le panneau, lui, a raison de parler comme ça : il ne sait pas à qui il parle. Toi, tu parles à Malika, et tu sais très bien qui a réservé la salle.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase sort de la bouche de quelqu’un, et pas d’une porte ?',
      size: 'lg',
      options: [
        { fr: src(E(1001)).fr, respell: rsOf(E(1001)), en: src(E(1001)).en, outcome: 'works', audio: AUDIO },
        { fr: src(E(1000)).fr, respell: rsOf(E(1000)), en: src(E(1000)).en, outcome: 'breaks', audio: AUDIO },
      ],
      followUp: {
        works: "Malika répond « ah, encore lui », et la conversation continue. Trois mots de moins, et personne n'est nommé non plus.",
        breaks: "Malika hoche la tête et va lire la porte. Ta phrase et le panneau disent la même chose, de la même façon.",
      },
    },
    {
      kind: 'break',
      heading: "Juste, et écrit sur une porte",
      body: "Ta phrase était correcte. Le passif n'est pas une faute : c'est un registre. Sur une affiche il est normal, dans une conversation il sonne officiel. EN: Your sentence was correct. The passive is not an error, it is a register.",
      wrong: {
        fr: src(E(1000)).fr,
        ipa: ipaOf(E(1000)),
        respell: rsOf(E(1000)),
        en: src(E(1000)).en,
      },
      right: {
        fr: src(E(1001)).fr,
        ipa: ipaOf(E(1001)),
        respell: rsOf(E(1001)),
        en: src(E(1001)).en,
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Cette leçon te donne les deux : lire l'affiche sans hésiter, et parler comme Malika. Et trois autres façons de ne nommer personne.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['passif', 'on'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Construire un passif qui tient', s: 'Actes 2 et 3 : être, le participe, et les cinq temps' },
    { t: "Savoir quand nommer l'auteur", s: 'Actes 4 et 5 : par, et les endroits où le passif vit' },
    { t: 'Parler comme une personne', s: 'Actes 6 à 8 : on, se faire, ça se dit' },
    { t: 'Éviter le passif impossible', s: 'Actes 9 et 10 : donner à quelqu’un, et le choix final' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: a real notice board, where eleven passives are already
 *  doing their job and one single `par` names anybody. `questionsInModal` so
 *  the learner reads the avis before the questions. */
const A1_AVIS: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-avis',
  layer: 'core',
  questionsInModal: true,
  title: 'Le panneau du hall',
  frSub: 'Lis, et compte les auteurs',
  text: AVIS_TEXT,
  glossary: [
    { word: 'bacs', en: 'wheelie bins', note: 'Les grands bacs à roulettes pour les ordures.' },
    { word: 'local à vélos', en: 'bike room', note: 'La petite pièce où les résidents rangent leurs vélos.' },
    { word: 'sans préavis', en: 'without notice', note: "On ne te prévient pas avant. EN: no warning first." },
    { word: 'reportée', en: 'postponed', note: 'Déplacée à une date plus tard.' },
    { word: 'ouvrables', en: 'working days', note: 'Les jours où les bureaux sont ouverts, samedi et dimanche exclus.' },
  ],
  questions: [
    { q: 'Combien de phrases de cet avis disent qui fait le travail ?', a: `Une seule : « ${AVIS_AGENT} ». Tout le reste dit ce qui est fait, et rien de plus.` },
    { q: "Pourquoi l'avis ne dit-il pas qui ramasse les poubelles ?", a: "Le résident n'a pas besoin de le savoir. Un avis donne le fait, pas l'auteur." },
    { q: 'Quelles formes de être trouves-tu dans le texte ?', a: 'sont, est, a été, sera, seront, doivent être, peut être. Le participe, lui, ne bouge presque pas.' },
    { q: "Si tu racontais cet avis à un voisin dans l'escalier, comment commencerais-tu ?", a: "Par on : « on arrête l'ascenseur lundi », « on a repeint le local à vélos »." },
  ],
  audio: REC('rec-b1-18-avis'),
  say: REFRAME,
  terms: ['affiche', 'passif'],
};

/** BUILD, on the text just read: sort by who the sentence is talking to. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'La porte ou la bouche',
  groups: [
    grp('Ce que dit une porte', [
      it(E(1011), 'trois mots sur une vitrine'),
      it(E(1012), 'au-dessus d’un siège, dans le métro'),
      it(E(1013), 'en bas d’un formulaire'),
      it('fr.a2.deplacements.002', 'sur une grille de station'),
    ], chk(
      'Ces quatre phrases : qui a fermé, réservé, signé ?',
      ['On ne le dit pas, et personne ne le demande.', 'Chaque phrase nomme quelqu’un.'], 0,
      "Un avis donne le fait et laisse l'auteur dehors. EN: a notice gives the fact and leaves the doer out.")),
    grp('Ce que dit une collègue', [
      it(E(1001), 'la réponse de Malika'),
      it(E(1003), 'la même nouvelle, en parlant'),
      it(E(1008), 'personne n’est nommé non plus'),
      it(E(1010), 'court, et normal à l’oral'),
    ], chk(
      'Quel mot ouvre chacune de ces quatre phrases ?',
      ['Le nom de la chose.', 'On.'], 1,
      "On ne nomme personne et reste une phrase de conversation. EN: on names nobody and still sounds spoken.")),
    ctl('La phrase du milieu', "« Le colis a été livré devant la porte. » Qui te parle ?",
      ['une personne, dans un couloir', 'une entreprise, dans un courriel', 'ton frère, au téléphone'], 1,
      "Personne ne dit ça à voix haute : c'est un message écrit d'avance. EN: nobody says this out loud."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affiche', 'on'],
};

/** NAME, gently: the same news, twice, three times over. No rule yet. */
const A1_PAIRES: Sec<'examples'> = {
  type: 'examples',
  id: 'a1-paires',
  layer: 'core',
  title: 'La même nouvelle, deux fois',
  examples: [
    ex(E(1000), "L'affiche : la salle d'abord, l'auteur à la fin."),
    ex(E(1001), 'La bouche : on, et le verbe tout de suite.'),
    ex(E(1002), "L'affiche : la chose réparée est le sujet."),
    ex(E(1003), 'La bouche : même nouvelle, trois mots de moins.'),
    ex(E(1009), "L'affiche : annulée s'accorde avec la réunion."),
    ex(E(1010), 'La bouche : rien à accorder, rien à construire.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passif', 'on'],
};

/** CHOOSE: where the wrong register costs something real. */
const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Où ça compte vraiment',
  cases: [
    { situation: 'Tu lis la porte de ton immeuble avant de partir travailler', fr: 'Un ascenseur sera arrêté toute la journée.', en: 'One lift will be stopped all day.' },
    { situation: 'Tu expliques la même chose à ton voisin dans le couloir', fr: "On arrête l'ascenseur toute la journée.", en: 'They are stopping the lift all day.' },
    { situation: "Tu écris au syndic, et tu veux être pris au sérieux", fr: 'Le local à vélos a été repeint la semaine dernière.', en: 'The bike room was repainted last week.' },
    { situation: 'Tu racontes ta journée à un ami, le soir', fr: 'On a repeint le local à vélos.', en: 'They repainted the bike room.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affiche', 'on'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le registre', 'Le passif est-il une faute à l’oral ?',
    ['Non, mais il sonne officiel.', 'Oui, il est toujours faux.'], 0,
    "Il est correct partout ; il n'est pas naturel partout. EN: correct everywhere, natural only in writing."),
  ctl('Les auteurs', "Dans l'avis du hall, combien de phrases nomment l'auteur ?",
    ['toutes', 'aucune', 'une seule'], 2,
    `Seulement « ${AVIS_AGENT} ». EN: one out of eleven.`),
  ctl('La bouche', 'Tu parles et tu ne veux nommer personne. Par quoi commences-tu ?',
    ['par le nom de la chose', 'par on'], 1,
    "On est la porte de sortie de l'oral. EN: on is the spoken way out."),
], ['affiche', 'on']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: "L'affiche et la bouche",
    opener: {
      line: "Ta phrase est juste et elle sonne comme une porte : ici tu apprends à entendre la différence. EN: Your sentence is correct and it sounds like a door: here you learn to hear the difference.",
      imageRef: 'lessons/voix-passive/act01.jpg',
    },
    sections: [],
    milestone: "Tu reconnais la langue des affiches, et tu sais dire la même chose avec on. EN: You can spot notice language, and say the same thing with on.",
    estScreens: 24, restPoints: ['a1-avis'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_AVIS, A1_REPERER, A1_PAIRES, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — ÊTRE + PARTICIPE ACCORDÉ
 *
 *  The FORM, assembled out of two things the learner already owns: the
 *  participle (a2.20) and agreement after être (a2.21). Nothing is
 *  re-taught; both are quoted and then used.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a hotel desk, where every sentence on the counter is a passive and
 *  nobody notices. Story bubbles avoid « ? » and « ! », like scene bubbles. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'À la réception',
  frSub: 'Trois phrases sur un comptoir',
  setting: "Un petit hôtel de Québec, sept heures du matin. Tu arrives au comptoir avec ta valise et tu poses trois questions.",
  bubbles: [
    { from: 'narrator', fr: 'Sur le comptoir, une carte plastifiée répond déjà à presque tout.', en: 'On the counter a laminated card already answers almost everything.' },
    { from: 'user', fr: 'Bonjour. Je voudrais savoir pour le petit déjeuner.', en: 'Hello. I would like to know about breakfast.' },
    { from: 'coach', fr: src('fr.a2.hebergement.112').fr, en: src('fr.a2.hebergement.112').en, warn: 'est servi : être au présent, participe masculin singulier' },
    { from: 'coach', fr: src('fr.a2.hebergement.113').fr, en: src('fr.a2.hebergement.113').en, warn: 'le même participe, le même sujet' },
    { from: 'user', fr: 'Et les clés, si je rentre tard.', en: 'And the keys, if I come back late.' },
    { from: 'coach', fr: src(E(1025)).fr, en: src(E(1025)).en, warn: 'gardées : sujet féminin pluriel, donc deux lettres de plus' },
    { from: 'narrator', fr: 'Trois réponses, trois passifs, et pas un seul nom de personne.', en: 'Three answers, three passives, and not one person named.' },
  ],
  closing: { fr: 'Le comptoir parle comme la porte : il dit ce qui est fait.', en: 'The counter talks like the door: it says what is done.' },
  audio: REC('rec-b1-18-reception'),
  say: REFRAME,
  terms: ['passif', 'accord'],
};

/** NAME: the two words, one idea per card. */
const A2_FORME: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-forme',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-forme',
  title: 'Deux mots, toujours les mêmes',
  frSub: 'être + participe passé',
  hint: 'Quatre cartes. Regarde lequel des deux mots bouge.',
  audio: REC('rec-b1-18-forme'),
  say: REFRAME,
  terms: ['passif', 'accord'],
  cards: [
    {
      head: 'La forme entière', label: 'le passif',
      fr: 'être + participe passé',
      sub: '[EHTR plüss par-tee-SEEP pa-SAY]',
      body: "Rien d'autre. Tu prends être, tu ajoutes le participe, et la phrase est au passif. EN: être plus the past participle, and nothing else.",
    },
    {
      head: 'Le premier mot porte le temps', label: 'être',
      fr: 'est · a été · sera',
      sub: '[EH · a ay-TAY · suh-RA]',
      body: "C'est être qui dit quand. Le participe, lui, ne s'occupe pas du temps. EN: être says when; the participle never does.",
    },
    {
      head: 'Le deuxième mot vient du verbe', label: Cap(PARTICIPLE_REF),
      fr: 'écrire, écrit',
      sub: '[ay-KREER, ay-KREE]',
      body: `« ${A220_REFRAME} » En français : « ${A220_REFRAME_FR} » Le passif ne change rien à ce travail. EN: participle formation was settled in A2.`,
    },
    {
      head: 'Et il finit comme un adjectif', label: Cap(PC_ETRE_REF),
      fr: 'la lettre est écrite',
      sub: '[la LEHTR eh-tay-KREET]',
      body: `« ${A221_REFRAME} » En français : « ${A221_REFRAME_FR} » Ici, l'adjectif suit le sujet de la phrase. EN: the participle agrees with the subject.`,
    },
  ],
};

/** BUILD: assemble the two words, three groups, each gated. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte la forme',
  groups: [
    grp('Un sujet, une chose faite', [
      it(E(1022), 'être au présent, participe masculin'),
      it(E(1026), 'même forme, autre verbe'),
      it(E(1030), 'et un verbe régulier en -er'),
      it(E(1032), 'traduit : un participe irrégulier'),
    ], chk(
      'Dans ces quatre phrases, quel mot change si tu passes au pluriel ?',
      ['être seulement', 'être et le participe'], 1,
      "Les deux : sont, et un s de plus. EN: both words move together.")),
    grp('Le pluriel des deux côtés', [
      it(E(1023), 'sont, et un s'),
      it(E(1031), 'la même paire'),
      it(E(1020), 'envoyés : deux lettres pour deux raisons'),
      it('fr.a2.hebergement.112', 'et le comptoir de la réception'),
    ], chk(
      'Pourquoi « envoyés » et pas « envoyé » ?',
      ['parce que les documents sont au pluriel', 'parce que le verbe est au pluriel'], 0,
      "Le participe suit le SUJET, jamais le verbe. EN: the participle follows the subject.")),
    ctl('Le test', 'Tu écris « La facture est ... (envoyer) ». Que regardes-tu avant de finir le mot ?',
      ['le sujet', 'le temps de la phrase', 'le verbe à l’infinitif'], 0,
      "La facture est féminin singulier, donc envoyée. EN: look at the subject, then write the ending."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passif', 'accord'],
};

/** NAME again, this time the four endings, each on a real row. */
const A2_ACCORD: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-accord',
  layer: 'core',
  sheetId: 'sheet-forme',
  title: 'Les quatre fins du participe',
  examples: [
    ex(E(1016), 'masculin singulier : le participe tout seul.'),
    ex(E(1015), 'féminin singulier : un e de plus.'),
    ex(E(1018), 'masculin pluriel : un s de plus.'),
    ex(E(1017), 'féminin pluriel : es, les deux ensemble.'),
    ex(E(1027), 'un sujet féminin pluriel, sans verbe irrégulier.'),
    ex(E(1024), 'et le même e, sur un autre verbe.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

/** CHOOSE: the ending is decided by meaning, not by the shape of the verb. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le sujet décide',
  groups: [
    grp('Deux phrases, un mot de différence', [
      it(E(1028), 'la porte : une seule, féminine'),
      it(E(1029), 'les portes : plusieurs, féminines'),
      it(E(1022), 'le repas : un seul, masculin'),
      it(E(1023), 'les repas : plusieurs, masculins'),
    ], chk(
      'Quatre phrases, quatre fins. Qu’est-ce qui a changé à chaque fois ?',
      ['le verbe', 'le temps', 'le sujet'], 2,
      "Le verbe et le temps sont identiques partout. EN: only the subject moved.")),
    grp('Des participes irréguliers', [
      it(E(1032), 'traduire, traduit'),
      it(E(1015), 'écrire, écrite'),
      free('La décision est prise.', 'The decision is taken.', 'prendre, prise : un e sur un participe en -is'),
      free('Les places sont prises.', 'The seats are taken.', 'et le pluriel par-dessus'),
    ], chk(
      'Un participe irrégulier peut-il prendre un e et un s ?',
      ['Oui, comme les autres.', 'Non, il ne change jamais.'], 0,
      "prise, prises, traduite, traduites. EN: irregular participles agree too.")),
    ctl('La question à se poser', 'Tu hésites entre « accepté » et « acceptée ». Que fais-tu ?',
      ['tu regardes si le verbe est régulier', 'tu regardes le sujet de la phrase'], 1,
      "Le sujet, toujours, et rien d'autre. EN: the subject, always."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord', 'passif'],
};

/** TRAP: four things an anglophone does with this form, each reasonable. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre fins de participe',
  errors: [
    {
      wrong: 'La lettre est écrit en français.',
      right: src(E(1015)).fr,
      why: "Normal : le participe ressemble à un verbe, et un verbe ne s'accorde pas. Après être, il finit comme un adjectif. EN: after être it ends like an adjective.",
    },
    {
      wrong: 'Les documents sont envoyé chaque lundi.',
      right: src(E(1020)).fr,
      why: "Tu entends la même chose au pluriel et au singulier, donc l'oreille ne t'aide pas. Le s est pour les yeux. EN: the plural s is silent, so only the eye catches it.",
    },
    {
      wrong: 'La salle est nettoyer tous les soirs.',
      right: src(E(1024)).fr,
      why: "L'infinitif et le participe se prononcent pareil en -er. Après être, c'est toujours le participe. EN: -er and -é sound alike; after être it is the participle.",
    },
    {
      wrong: 'Les places ont numérotées.',
      right: src(E(1027)).fr,
      why: `Avoir est l'auxiliaire du passé composé, et il arrive tout seul. Le passif prend être à tous les temps. EN: the passive always takes être.`,
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord', 'passif'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris la fin que tu ne peux pas entendre',
  frSub: 'Six phrases au passif',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Les deux mots', 'Quel mot du passif change avec le sujet ?',
    ['être', 'le participe'], 1,
    "Être suit le temps, le participe suit le sujet. EN: être takes the tense, the participle the subject."),
  ctl("L'auxiliaire", 'Le passif peut-il se construire avec avoir ?',
    ['Non, jamais.', 'Oui, comme le passé composé.'], 0,
    "Toujours être, à tous les temps. EN: always être."),
  ctl('La fin du mot', '« Les réunions ... annulées. » Que mets-tu à la place des points ?',
    ['ont été', 'sont', 'a été'], 1,
    "Sujet pluriel, présent : sont. EN: plural subject, present tense."),
], ['passif', 'accord']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Être et le participe',
    opener: {
      line: "Tu as déjà les deux morceaux : ici tu les mets ensemble et tu regardes la fin du mot. EN: You already have both pieces: here you put them together and watch the last letters.",
      imageRef: 'lessons/voix-passive/act02.jpg',
    },
    sections: [],
    milestone: "Tu écris un passif au présent et tu accordes le participe sans y penser. EN: You can write a present passive and get the agreement right without stopping.",
    estScreens: 32, restPoints: ['a2-accord'],
  },
  sections: [A2_HISTOIRE, A2_FORME, A2_CONSTRUIRE, A2_ACCORD, A2_CHOISIR, A2_ERREURS, A2_DICTEE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LE PASSIF DANS TOUS LES TEMPS
 *
 *  This act is why b1.18 sits after b1.05 to b1.08: the learner has the
 *  futur and the conditionnel, so `être` can be run through all five tenses
 *  in one act instead of one tense per lesson.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: the same shop, five times, and only the first word moves.
 *  `hideLines` because the questions are about what the ear caught. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le même magasin, cinq fois',
  frSub: 'Écoute le premier mot',
  lines: [
    ln(E(1035)), ln(E(1036)), ln(E(1037)), ln(E(1038)),
    ln(E(1041)), ln(E(1042)), ln(E(1043)), ln(E(1039)),
  ],
  questions: [
    { q: 'Première phrase : le magasin est-il fermé en ce moment ?', opts: ['Oui', 'Non, il a fermé autrefois'], correct: 0, why: "« est fermé » décrit maintenant. EN: est fermé describes now." },
    { q: 'Deuxième phrase : combien de temps a duré la fermeture ?', opts: ['on ne le dit pas', 'deux mois'], correct: 1, why: "« a été fermé pendant deux mois » : un événement fini. EN: a finished stretch." },
    { q: 'Troisième phrase : que faisais-tu au moment où le magasin était fermé ?', opts: ['je passais devant', 'je travaillais dedans'], correct: 0, why: "« quand je suis passé » : l'état était là avant toi. EN: the state was already there." },
    { q: 'Quatrième phrase : la fermeture est-elle déjà arrivée ?', opts: ['Oui, lundi dernier', 'Non, lundi prochain'], correct: 1, why: "« sera fermé » regarde devant. EN: sera looks forward." },
    { q: 'Dernière phrase : est-ce que ta demande a été acceptée ?', opts: ['Oui, plus vite', 'Non, on te dit ce qui arriverait'], correct: 1, why: "« serait acceptée » est une hypothèse, pas un fait. EN: a hypothesis, not a fact." },
  ],
  audio: REC('rec-b1-18-temps-ecoute'),
  say: REFRAME,
  terms: ['temps', 'passif'],
};

/** NAME: être carries the tense, and the two neighbours that supply it. */
const A3_TEMPS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-temps',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-temps',
  title: 'Le temps est sur être',
  frSub: 'Cinq temps, un seul participe',
  hint: 'Quatre cartes. Le participe ne bouge pas une seule fois.',
  audio: REC('rec-b1-18-temps'),
  say: REFRAME,
  terms: ['temps'],
  cards: [
    {
      head: 'Un état, ou un événement', label: 'présent et passé composé',
      fr: 'est fermé · a été fermé',
      sub: '[eh fehr-MAY · a ay-tay fehr-MAY]',
      body: "Le premier décrit la porte maintenant. Le second raconte une fermeture, finie. EN: one describes the door now, the other tells of a closing that is over.",
    },
    {
      head: 'Un état dans le passé', label: 'imparfait',
      fr: 'était fermé',
      sub: '[ay-teh fehr-MAY]',
      body: "C'était déjà comme ça quand tu es arrivé. Rien ne se passe dans cette phrase. EN: it was already like that; nothing happens.",
    },
    {
      head: 'Ce qui sera fait', label: Cap(FUTUR_REF),
      fr: 'sera fermé',
      sub: '[suh-ra fehr-MAY]',
      body: `« ${B105_REFRAME} » Tu prends ce futur de être, et tu gardes le participe tel quel. EN: take the future of être and leave the participle alone.`,
    },
    {
      head: 'Ce qui serait fait', label: Cap(CONDITIONNEL_REF),
      fr: 'serait accepté',
      sub: '[suh-reh ak-sehp-TAY]',
      body: `« ${B108_REFRAME} » Au passif, c'est la même chose : serait annonce une hypothèse. EN: serait announces a hypothesis here too.`,
    },
  ],
};

/** NAME, as a lookup. Six rows, and the sheet holds the full page. */
const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-tableau',
  layer: 'core',
  sheetId: 'sheet-temps',
  title: 'Six formes de être',
  cols: ['Temps', 'être', 'Ce que ça dit'],
  rows: [
    { cells: ['présent', 'est, sont', 'un état maintenant'], say: src(E(1035)).fr,
      detail: { title: 'Le présent', body: "La porte est close en ce moment. Personne ne raconte rien. EN: the door is shut right now.", say: src(E(1011)).fr } },
    { cells: ['passé composé', 'a été, ont été', 'un événement fini'], say: src(E(1036)).fr,
      detail: { title: 'Le passé composé', body: "Quelqu'un a fermé, une fois, et c'est terminé. EN: someone closed it once, and it is over.", say: src(E(1041)).fr } },
    { cells: ['imparfait', 'était, étaient', 'un état dans le passé'], say: src(E(1037)).fr,
      detail: { title: "L'imparfait", body: "C'était déjà fermé avant ton arrivée. EN: it was already shut before you came.", say: src(E(1042)).fr } },
    { cells: ['futur simple', 'sera, seront', 'ce qui sera fait'], say: src(E(1038)).fr,
      detail: { title: 'Le futur', body: "La forme la plus fréquente sur une affiche. EN: the commonest form on a notice.", say: src(E(1043)).fr } },
    { cells: ['conditionnel', 'serait, seraient', 'une hypothèse'], say: src(E(1039)).fr,
      detail: { title: 'Le conditionnel', body: "Ce n'est pas un fait : c'est ce qui arriverait. EN: not a fact, but what would happen.", say: src(E(1047)).fr } },
    { cells: ['avec un modal', 'doit être, peut être', 'une obligation'], say: src(E(1013)).fr,
      detail: { title: 'doit être', body: "Le modal prend le temps, et être passe à l'infinitif. EN: the modal takes the tense and être goes to the infinitive.", say: src(E(1178)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps', 'affiche'],
};

/** BUILD: the same participle, moved through the tenses. */
const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Déplace le temps, garde le participe',
  groups: [
    grp('Une route, trois temps', [
      it(E(1041), 'a été : un événement'),
      it(E(1042), 'était : un état'),
      it(E(1043), 'sera : devant nous'),
      it(E(1052), 'et un autre verbe au même imparfait'),
    ], chk(
      'Dans ces quatre phrases, combien de fois le participe change-t-il ?',
      ['jamais', 'une fois', 'à chaque phrase'], 0,
      "fermée trois fois, puis surveillé pour un autre sujet. EN: the tense never touched it.")),
    grp('Des résultats, trois temps', [
      it(E(1044), 'ont été : publiés une fois'),
      it(E(1046), 'étaient : déjà en ligne'),
      it(E(1045), 'seront : pas encore'),
      it(E(1050), 'et un passé composé avec un autre verbe'),
    ], chk(
      '« Les résultats seront publiés demain. » Où est le pluriel ?',
      ['sur seront et sur publiés', 'sur seront seulement'], 0,
      "Les deux mots portent le pluriel, pour deux raisons différentes. EN: both words carry it, for different reasons.")),
    ctl('Le partage du travail', 'Tu écris « Les portes ... fermées à vingt heures » au futur. Que changes-tu ?',
      ['seront, et rien d’autre', 'seront et fermé'], 0,
      "fermées suit le sujet, qui n'a pas bougé. EN: the subject did not change, so the participle does not either."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps', 'accord'],
};

/** Consolidation, as answers. No « EN: » tail anywhere on a back. */
const A3_CARTES: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a3-cartes',
  layer: 'core',
  title: 'Huit cartes pour les temps',
  cards: [
    { front: 'the shop is closed (right now)', back: 'le magasin est fermé', say: src(E(1035)).fr },
    { front: 'the shop was closed (it happened)', back: 'le magasin a été fermé', say: src(E(1036)).fr },
    { front: 'the shop was closed (it already was)', back: 'le magasin était fermé', say: src(E(1037)).fr },
    { front: 'the shop will be closed', back: 'le magasin sera fermé', say: src(E(1038)).fr },
    { front: 'your request would be accepted', back: 'ta demande serait acceptée', say: src(E(1039)).fr },
    { front: 'the results were published', back: 'les résultats ont été publiés', say: src(E(1044)).fr },
    { front: 'the tickets will be sold', back: 'les billets seront vendus', say: src(E(1051)).fr },
    { front: 'the form must be signed', back: 'le formulaire doit être signé', say: src(E(1013)).fr },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps'],
};

/** CHOOSE: the tense is picked by what the sentence means, not by a cue. */
const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Un état, ou un événement',
  groups: [
    grp('Ce qui décrit', [
      it(E(1035), 'la porte, maintenant'),
      it(E(1037), 'la porte, ce jour-là'),
      it(E(1042), 'la route, quand vous arrivez'),
      it('fr.a2.cuisine.049', 'et la raison de changer de restaurant'),
    ], chk(
      'Ces quatre phrases racontent-elles quelque chose qui arrive ?',
      ['Oui, une fermeture à chaque fois.', 'Non, elles décrivent une situation.'], 1,
      "Rien ne se passe : on te donne l'état des lieux. EN: nothing happens; you are given the state of things.")),
    grp('Ce qui raconte', [
      it(E(1036), 'une fermeture, avec sa durée'),
      it(E(1041), 'une fermeture, avec sa raison'),
      it(E(1048), 'une signature, un jour précis'),
      it('fr.b1.connecteurs-logiques.010', 'et une annulation, avec sa raison'),
    ], chk(
      'Quelle forme de être ouvre ces quatre phrases ?',
      ['a été', 'était', 'est'], 0,
      "Le passé composé, parce que quelque chose est arrivé. EN: something happened, so passé composé.")),
    ctl('Le choix', "« Le pont ... surveillé jour et nuit pendant les travaux. » Quelle forme ?",
      ['a été', 'était'], 1,
      "On décrit la période, on ne raconte pas un événement. EN: describing a stretch, not telling an event."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['temps', 'passif'],
};

/** TRAP, stepped. Two traps: avoir instead of être, and « est + participe »
 *  that is a passé composé rather than a passive. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux pièges de forme',
  rule: {
    title: 'Tout « est + participe » n’est pas un passif',
    body: "Le passif prend toujours être, et le participe s'accorde. Mais « est parti » et « est né » sont des passés composés : ces verbes n'ont pas de passif. EN: est parti is a passé composé, not a passive.",
  },
  cards: [
    { promptLabel: 'avoir tout seul', promptSound: 'La route a fermée à cause de la neige.', fr: src(E(1041)).fr, ipa: ipaOf(E(1041)), tip: "Au passé composé, être devient a été. EN: at the passé composé être becomes a été." },
    { promptLabel: 'le participe figé', promptSound: 'Les résultats ont été publié ce matin.', fr: src(E(1044)).fr, ipa: ipaOf(E(1044)), tip: 'Le sujet est pluriel, donc publiés. EN: plural subject, plural participle.' },
    { promptLabel: 'un état pour un événement', promptSound: 'Le magasin est fermé pendant deux mois.', fr: src(E(1036)).fr, ipa: ipaOf(E(1036)), tip: "Deux mois donnés et finis : a été fermé. EN: a stated, finished stretch." },
    { promptLabel: 'le futur oublié', promptSound: 'Le magasin est fermé lundi.', fr: src(E(1038)).fr, ipa: ipaOf(E(1038)), tip: "Lundi n'est pas encore arrivé : sera. EN: Monday has not happened yet." },
    { promptLabel: 'un fait pour une hypothèse', promptSound: 'Ta demande est acceptée plus vite en ligne.', fr: src(E(1039)).fr, ipa: ipaOf(E(1039)), tip: "Ce n'est pas encore vrai : serait. EN: it is not true yet." },
    { promptLabel: 'un faux passif', promptSound: 'Le train a été parti à huit heures.', fr: 'Le train est parti à huit heures.', ipa: '/lə tʁɛ̃ ɛ paʁ.ti a ɥi.tœʁ/', tip: "partir n'a pas de passif : est parti est un passé composé. EN: partir has no passive." },
  ],
  drill: [
    { promptSay: 'La route ... fermée à cause de la neige.', opts: ['a été', 'a'], correct: 0 },
    { promptSay: 'Les résultats ont été ... ce matin.', opts: ['publiés', 'publié'], correct: 0 },
    { promptSay: 'Le magasin ... fermé pendant deux mois.', opts: ['est', 'a été'], correct: 1 },
    { promptSay: 'Le magasin ... fermé lundi.', opts: ['est', 'sera', 'a été'], correct: 1 },
    { promptSay: 'Ta demande ... acceptée plus vite en ligne.', opts: ['est', 'serait'], correct: 1 },
    { promptSay: 'Le train ... parti à huit heures.', opts: ['est', 'a été'], correct: 0 },
    { promptSay: 'Le contrat ... signé demain.', opts: ['sera', 'a été'], correct: 0 },
    { promptSay: 'Les billets ... vendus en deux heures.', opts: ['sont été', 'ont', 'ont été'], correct: 2 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Toujours être, et pas toujours un passif' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-18-piege-temps'),
  say: REFRAME,
  terms: ['temps', 'passif'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le porteur du temps', 'Dans « a été envoyé », quel mot te dit que c’est du passé ?',
    ['envoyé', 'a été'], 1,
    "Le participe ne porte jamais le temps. EN: the participle never carries the tense."),
  ctl('Deux lectures', '« La porte est fermée. » Est-ce un événement ou un état ?',
    ['un état', 'un événement'], 0,
    "Au présent, le passif décrit presque toujours un état. EN: a present passive usually describes a state."),
  ctl('Le faux ami', '« Elle est arrivée à huit heures. » Est-ce un passif ?',
    ['Oui', 'Non, un passé composé', 'Les deux'], 1,
    "arriver n'a pas de passif : être est ici son auxiliaire. EN: arriver has no passive."),
], ['temps', 'passif']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Les cinq temps',
    opener: {
      line: "Le magasin est fermé, a été fermé, sera fermé : un seul mot bouge, et tu vas voir lequel. EN: The shop is closed, was closed, will be closed: only one word moves, and you are about to see which.",
      imageRef: 'lessons/voix-passive/act03.jpg',
    },
    sections: [],
    milestone: "Tu mets un passif au présent, au passé, à l'imparfait, au futur et au conditionnel. EN: You can put a passive into all five tenses you now have.",
    estScreens: 38, restPoints: ['a3-tableau', 'a3-cartes'],
  },
  sections: [A3_ECOUTE, A3_TEMPS, A3_TABLEAU, A3_CONSTRUIRE, A3_CARTES, A3_CHOISIR, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — PAR QUI ? PRESQUE JAMAIS
 *
 *  The agent is allowed and almost always absent. The act is built on a
 *  plaque that uses « par » three times and means something different each
 *  time, which is the fastest way to stop a learner reading par as « by ».
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: a bridge plaque. Ten passives, three « par », one real agent. */
const A4_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a4-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La plaque du pont',
  frSub: 'Compte les auteurs, pas les phrases',
  text: "Le pont de la Guillotière est le plus ancien pont de Lyon. Un premier pont de bois a été construit ici au douzième siècle, pour relier les deux rives. Il a été emporté six fois par le Rhône, et six fois il a été refait par la ville. Le pont de pierre que tu vois aujourd'hui a été terminé après la guerre. Pendant les travaux, la circulation était déviée par le quai. Chaque année, les piles sont contrôlées et les câbles sont changés si nécessaire. Les grilles ont été repeintes l'été dernier. Le pont est fermé aux voitures deux nuits par an, pour l'entretien. Ces nuits-là, il est réservé aux piétons et aux cyclistes, et la vue sur la colline vaut le détour.",
  glossary: [
    { word: 'emporté', en: 'swept away', note: "Le fleuve l'a pris et emmené. EN: the river carried it off." },
    { word: 'les piles', en: 'the piers', note: 'Les grands pieds de pierre qui portent le pont.' },
    { word: 'déviée', en: 'diverted', note: 'Envoyée sur un autre chemin.' },
    { word: "l'entretien", en: 'maintenance', note: 'Les petits travaux réguliers qui gardent une chose en état.' },
    { word: 'piétons', en: 'pedestrians', note: 'Les gens qui marchent, sans voiture et sans vélo.' },
  ],
  questions: [
    { q: 'Le mot par apparaît quatre fois. Dit-il la même chose à chaque fois ?', a: "Non. « par le Rhône » et « par la ville » nomment l'auteur, « par le quai » donne un chemin, et « deux nuits par an » veut dire chaque année." },
    { q: 'Qui a construit le pont de pierre que tu vois aujourd’hui ?', a: "Le texte ne le dit pas. Une plaque donne le fait, pas l'auteur." },
    { q: 'Pourquoi « par le Rhône » vaut-il la peine d’être écrit ?', a: "Sans lui, on ne saurait pas pourquoi le pont est tombé six fois. L'auteur apprend quelque chose au lecteur." },
    { q: 'Combien de phrases au passif ne nomment personne du tout ?', a: 'Huit : construit, terminé, déviée, contrôlées, changés, repeintes, fermé, réservé. C’est la proportion normale.' },
  ],
  audio: REC('rec-b1-18-pont'),
  say: REFRAME,
  terms: ['agent', 'passif'],
};

/** NAME: par exists, par is rare, par sometimes earns its place, and par is
 *  not always an agent. */
const A4_PAR: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-par',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Quatre choses à savoir sur par',
  frSub: "Nommer l'auteur, ou pas",
  hint: 'Quatre cartes. La deuxième est la plus importante.',
  audio: REC('rec-b1-18-par'),
  say: REFRAME,
  terms: ['agent'],
  cards: [
    {
      head: "Tu peux nommer l'auteur", label: 'par',
      fr: src(E(1067)).fr,
      sub: rsOf(E(1067)),
      body: "Le passif ne cache pas l'auteur par force : tu peux toujours l'ajouter avec par. EN: the passive does not have to hide the doer; par can always add it.",
    },
    {
      head: 'Mais presque personne ne le fait', label: 'sans agent',
      fr: src(E(1060)).fr,
      sub: rsOf(E(1060)),
      body: "La grande majorité des passifs français n'ont pas de par. Personne ne demande qui a livré. EN: most French passives have no par at all.",
    },
    {
      head: 'Quand par vaut la peine', label: 'une information',
      fr: src(E(1059)).fr,
      sub: rsOf(E(1059)),
      body: "Mille ouvriers, ce n'est pas rien. Mets par quand le nom apprend quelque chose. EN: add par when the name teaches the reader something.",
    },
    {
      head: "par ne veut pas toujours dire « l'auteur »", label: 'attention',
      fr: 'par le quai · deux nuits par an',
      sub: '[par luh KEH · deu NWEE par AHⁿ]',
      body: "Le même mot donne aussi un chemin et une fréquence. Regarde ce qui suit. EN: the same word also gives a route and a frequency.",
    },
  ],
};

/** BUILD: sort by whether anybody is named. */
const A4_COMPTER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-compter',
  layer: 'core',
  size: 'lg',
  title: 'Avec ou sans auteur',
  groups: [
    grp('Personne n’est nommé', [
      it(E(1058), 'la tour, et sa durée'),
      it(E(1060), 'le colis, ce matin'),
      it(E(1061), 'les rues, après la fête'),
      it(E(1063), 'et ton vélo, retrouvé'),
    ], chk(
      'Manque-t-il quelque chose à ces quatre phrases ?',
      ['Oui, il faudrait ajouter par.', 'Non, elles sont complètes.'], 1,
      "Un passif sans par est la forme NORMALE. EN: a passive with no par is the normal shape.")),
    grp('Quelqu’un est nommé', [
      it(E(1059), 'mille ouvriers : le chiffre compte'),
      it(E(1062), 'le maire : la cérémonie compte'),
      it(E(1055), 'une Québécoise : le lecteur veut le savoir'),
      it(E(1066), 'la directrice : le niveau de relecture compte'),
    ], chk(
      'Qu’ont en commun ces quatre auteurs ?',
      ['Ils sont tous des personnes.', 'Chacun apprend quelque chose au lecteur.'], 1,
      "Enlève le nom et tu perds une information. EN: remove the name and you lose something.")),
    ctl('La proportion', 'Sur dix passifs français, combien ont un par ?',
      ['environ un', 'presque tous', 'la moitié'], 0,
      "Le par est l'exception, pas la règle. EN: par is the exception."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['agent', 'passif'],
};

/** NAME again: the same fact with and without its author. */
const A4_PAIRES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-paires',
  layer: 'core',
  title: 'La tour, deux fois',
  examples: [
    ex(E(1058), 'Sans auteur : on retient la durée.'),
    ex(E(1059), 'Avec auteur : on retient le chiffre.'),
    ex(E(1060), "Personne ne demande qui a livré."),
    ex(E(1062), 'Ici le maire fait partie de la nouvelle.'),
    ex(E(1061), 'Les rues : la ville, évidemment. On ne le dit pas.'),
    ex(E(1069), 'Un ami : ça change la valeur des photos.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['agent'],
};

/** CHOOSE: does this par earn its place? */
const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Ce par sert-il à quelque chose',
  groups: [
    grp('Quatre phrases, quatre par', [
      free('Le colis a été livré par le livreur.', 'The parcel was delivered by the delivery man.', 'le livreur livre : le verbe le dit déjà'),
      free('Mon vélo a été retrouvé par quelqu’un.', 'My bike was found by somebody.', 'quelqu’un n’est le nom de personne'),
      it(E(1062), 'le maire : une vraie information'),
      it(E(1055), 'une Québécoise : une vraie information'),
    ], chk(
      'Lesquels de ces quatre par peux-tu enlever sans rien perdre ?',
      ['les deux derniers', 'aucun', 'les deux premiers'], 2,
      "le livreur et quelqu'un n'apprennent rien. EN: neither of the first two teaches anything.")),
    grp('Trois emplois du mot par', [
      it(E(1067), "l'auteur"),
      free('par le quai Claude-Bernard', 'along the Claude-Bernard quay', 'un chemin'),
      free('deux nuits par an', 'two nights a year', 'une fréquence'),
      it(E(1068), "et encore l'auteur"),
    ], chk(
      'Comment reconnais-tu le par qui nomme un auteur ?',
      ['la phrase est au passif et par suit le participe', 'le mot par est en début de phrase'], 0,
      "Un agent arrive après le participe, dans une phrase au passif. EN: an agent follows the participle in a passive clause.")),
    ctl('La décision', 'Tu écris une affiche. Ajoutes-tu par ?',
      ['seulement si le nom apprend quelque chose', 'toujours, pour être précis'], 0,
      "Une affiche ne nomme personne sans raison. EN: a notice names nobody without a reason."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['agent', 'affiche'],
};

/** TRAP: four reasonable ways an anglophone overuses or misreads par. */
const A4_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a4-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre par de trop',
  errors: [
    {
      wrong: 'Mon vélo a été retrouvé par quelqu’un près du pont.',
      right: src(E(1063)).fr,
      why: "Normal : en anglais on dit by somebody. En français, quelqu'un n'apprend rien, donc on enlève tout le groupe. EN: par quelqu’un adds nothing, so French drops it.",
    },
    {
      wrong: 'Le colis a été livré par le livreur ce matin.',
      right: src(E(1060)).fr,
      why: "L'information est déjà dans le verbe : livrer suppose un livreur. EN: the verb already implies the doer.",
    },
    {
      wrong: 'Ce roman a été écrit de une Québécoise.',
      right: src(E(1055)).fr,
      why: "Quelques verbes de sentiment prennent de (« il est aimé de tous »), et ça t'attire vers de. Pour une action, c'est par. EN: actions take par.",
    },
    {
      wrong: 'La tour a été construite par deux ans.',
      right: src(E(1058)).fr,
      why: "par a trois emplois et un seul est l'auteur. Une durée prend en. EN: par has three jobs and only one is the doer.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['agent'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('La règle', 'Un passif français a-t-il besoin de par ?',
    ['Oui, sinon la phrase est incomplète.', 'Non, presque jamais.'], 1,
    "La forme normale n'a pas d'auteur. EN: the normal shape names nobody."),
  ctl('Le test', 'Tu hésites à écrire par. Quelle question poses-tu ?',
    ['Est-ce que ce nom apprend quelque chose ?', 'Est-ce que je connais l’auteur ?'], 0,
    "Tu connais souvent l'auteur et tu l'écris quand même rarement. EN: knowing the doer is not a reason to write it."),
  ctl('Le mot par', '« deux nuits par an » : par nomme-t-il un auteur ?',
    ['Oui', 'Non, une fréquence', 'Non, un chemin'], 1,
    "Le même mot, un autre emploi. EN: same word, different job."),
], ['agent', 'passif']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: "L'auteur, presque jamais",
    opener: {
      line: "Tu peux dire qui a fait la chose, et le français ne le dit presque jamais : voici pourquoi. EN: You can say who did it, and French almost never does: here is why.",
      imageRef: 'lessons/voix-passive/act04.jpg',
    },
    sections: [],
    milestone: "Tu sais ajouter par quand il apprend quelque chose, et le laisser tomber le reste du temps. EN: You add par when it teaches the reader something, and drop it the rest of the time.",
    estScreens: 26, restPoints: ['a4-paires'],
  },
  sections: [A4_LECTURE, A4_PAR, A4_COMPTER, A4_PAIRES, A4_CHOISIR, A4_ERREURS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — OÙ VIT LE PASSIF
 *
 *  The theme is named « Les faits et les procédures » because of this act.
 *  Four homes: the door, the règlement, the procedure and the news.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: two minutes of local radio, where the passive is the default and
 *  nobody notices it. `hideLines` because the questions are about what the
 *  ear caught, not about reading a bulletin. */
const A5_RADIO: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-radio',
  layer: 'core',
  hideLines: true,
  title: 'Le bulletin de midi',
  frSub: 'Huit phrases, huit passifs',
  lines: [
    ln(E(1079)), ln(E(1081)), ln(E(1080)), ln(E(1082)),
    ln(E(1085)), ln(E(1084)), ln(E(1086)), ln(E(1076)),
  ],
  questions: [
    { q: 'Première phrase : combien d’écoles sont fermées ?', opts: ['deux', 'trois'], correct: 1, why: '« Trois écoles ont été fermées » : le chiffre ouvre la phrase. EN: the number opens the sentence.' },
    { q: 'Deuxième phrase : le maire a-t-il gagné au premier tour ?', opts: ['Non, au deuxième', 'Oui'], correct: 0, why: '« élu au deuxième tour ». EN: elected in the second round.' },
    { q: 'Troisième phrase : le pont existe-t-il déjà ?', opts: ['Oui', 'Non, il sera construit'], correct: 1, why: 'Le futur de être annonce un projet. EN: the future of être announces a plan.' },
    { q: 'Quatrième phrase : quand saura-t-on les résultats ?', opts: ['à midi', 'demain matin'], correct: 0, why: '« seront annoncés à midi ». EN: announced at noon.' },
    { q: 'Sur ces huit phrases, combien nomment celui qui fait la chose ?', opts: ['aucune', 'la moitié', 'toutes'], correct: 0, why: "Un bulletin donne le fait, comme une affiche. EN: a bulletin gives the fact, like a notice." },
  ],
  audio: REC('rec-b1-18-radio'),
  say: REFRAME,
  terms: ['passif', 'affiche'],
};

/** NAME: the four places the passive actually lives. */
const A5_LIEUX: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-lieux',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-consignes',
  title: 'Les quatre maisons du passif',
  frSub: 'Où tu vas vraiment le lire',
  hint: 'Quatre cartes. Tu en croises trois avant midi tous les jours.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['affiche', 'consigne'],
  cards: [
    {
      head: 'La porte', label: 'un avis',
      fr: src(E(1011)).fr,
      sub: rsOf(E(1011)),
      body: "Trois mots sur une vitrine. La porte ne sait pas à qui elle parle, donc elle ne dit que le fait. EN: the door does not know who is reading, so it gives the fact only.",
    },
    {
      head: 'Le règlement', label: 'une règle',
      fr: src(E(1072)).fr,
      sub: rsOf(E(1072)),
      body: "Une règle vaut pour tout le monde. Nommer quelqu'un la rendrait moins générale. EN: a rule holds for everyone, so naming anybody weakens it.",
    },
    {
      head: 'La procédure', label: 'une démarche',
      fr: src(E(1076)).fr,
      sub: rsOf(E(1076)),
      body: "Le bureau te dit ce qui va être fait, pas qui va s'en occuper. EN: the office tells you what will be done, not who will do it.",
    },
    {
      head: 'Les nouvelles', label: 'la radio',
      fr: src(E(1082)).fr,
      sub: rsOf(E(1082)),
      body: "Un bulletin donne les faits dans l'ordre. L'auteur arrive seulement s'il fait partie de la nouvelle. EN: a bulletin gives facts; the doer appears only if it is the news.",
    },
  ],
};

/** BUILD: put each sentence back in the place it came from. */
const A5_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-trier',
  layer: 'core',
  size: 'lg',
  title: 'Remets chaque phrase chez elle',
  groups: [
    grp('Sur une porte ou dans un hall', [
      it(E(1078), "à l'entrée de l'immeuble"),
      it(E(1084), 'dans la cage d’escalier'),
      it(E(1085), 'sur la porte de l’ascenseur'),
      it('fr.b1.droit.002', 'sur un panneau, dans la rue'),
    ], chk(
      'Ces quatre phrases parlent-elles à quelqu’un en particulier ?',
      ['Oui, à un résident précis.', 'Non, à tout le monde qui passe.'], 1,
      "Un avis s'adresse à n'importe qui. EN: a notice speaks to whoever walks past.")),
    grp('Dans un règlement ou une procédure', [
      it(E(1072), 'article premier du règlement'),
      it(E(1075), 'sur le billet d’avion'),
      it(E(1074), 'à la caisse'),
      it('fr.a2.hebergement.006', 'dans la brochure de l’hôtel'),
    ], chk(
      'Pourquoi un règlement ne dit-il jamais qui applique la règle ?',
      ['parce que personne ne le sait', 'parce que la règle vaut pour tout le monde'], 1,
      "Nommer quelqu'un rendrait la règle moins générale. EN: naming somebody would narrow the rule.")),
    ctl('La quatrième maison', "« Trois écoles ont été fermées à cause de la tempête. » Où lis-tu ça ?",
      ['sur une porte', 'dans un règlement', 'dans les nouvelles'], 2,
      "Un fait daté, donné à tout le monde : c'est un bulletin. EN: a dated fact given to everyone."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['affiche', 'consigne'],
};

/** NAME, short: what to keep before writing one yourself. */
const A5_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a5-focus',
  layer: 'core',
  sheetId: 'sheet-consignes',
  title: 'Ce qui fait un texte officiel',
  points: [
    "Le fait d'abord, l'auteur jamais : ce qui est fait, ce qui sera fait. EN: the fact first, the doer never.",
    "Des formules toutes faites : il est interdit de, doit être, sans préavis. EN: a small set of fixed formulas.",
    "Le futur pour ce qui est annoncé, le présent pour ce qui est la règle. EN: future for announcements, present for rules.",
    "Aucun nom de personne, sauf si ce nom est la nouvelle. EN: no names, unless the name IS the news.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consigne', 'affiche'],
};

/** CHOOSE: the ready-made formulas, and what each one is for. */
const A5_FORMULES: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-formules',
  layer: 'core',
  size: 'lg',
  title: 'Les formules toutes faites',
  groups: [
    grp('Interdire et autoriser', [
      it(E(1072), 'il est interdit de + infinitif'),
      it(E(1073), 'ne sont pas admis'),
      it(E(1074), 'est accepté'),
      it('fr.b1.droit.002', "et la même formule dans la rue"),
    ], chk(
      '« Il est interdit de fumer. » Qui est « il » ?',
      ['personne, c’est un il impersonnel', 'le règlement'], 0,
      "Comme dans « il pleut » : ce il ne remplace rien. EN: like il pleut, it stands for nobody.")),
    grp('Obliger et prévenir', [
      it(E(1075), 'doivent être + participe'),
      it(E(1013), 'doit être, au singulier'),
      it(E(1086), "et une simple règle d'attribution"),
      it('fr.b1.hebergement.005', 'et la consigne du soir'),
    ], chk(
      'Dans « doivent être enregistrés », où est le temps ?',
      ['sur devoir', 'sur être', 'sur enregistrés'], 0,
      "Le modal prend le temps, être passe à l'infinitif. EN: the modal takes the tense.")),
    ctl('Le registre', 'Tu écris « on doit enregistrer les bagages » sur un panneau d’aéroport. Ça va ?',
      ['Ça se comprend, mais ça ne fait pas officiel.', 'Oui, c’est exactement la bonne formule.'], 0,
      "on est la langue de la bouche, pas celle du panneau. EN: on is the spoken register."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consigne', 'temps'],
};

/** TRAP: four ways the register goes wrong in both directions. */
const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de registre',
  errors: [
    {
      wrong: 'AVIS : on ferme le magasin le dimanche.',
      right: `AVIS : ${src(E(1011)).fr}`,
      why: "on est correct et sonne bavard sur une vitrine. Un avis ne parle pas, il déclare. EN: on is correct and sounds chatty on a shop window.",
    },
    {
      wrong: 'AVIS : le directeur a décidé que les poubelles sont ramassées le mardi.',
      right: src(E(1084)).fr,
      why: "Nommer le directeur ajoute une personne à une règle qui vaut pour tous. EN: naming the director narrows a rule meant for everyone.",
    },
    {
      wrong: 'Il est interdit de fumer, je crois.',
      right: src(E(1072)).fr,
      why: "« je crois » casse la formule : une règle ne discute pas. EN: a rule does not hedge.",
    },
    {
      wrong: 'Les bagages doivent enregistrés une heure avant.',
      right: src(E(1075)).fr,
      why: "Le petit mot être disparaît facilement, parce qu'en anglais must be checked in n'a qu'un mot de plus. EN: être is easy to drop and it is required.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consigne', 'affiche'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Les quatre maisons', 'Où NE trouves-tu presque jamais de passif ?',
    ['dans un règlement', 'dans une conversation', 'dans un bulletin'], 1,
    "Les trois autres en vivent. EN: the other three live on it."),
  ctl('La formule', 'Comment interdis-tu quelque chose sur un panneau ?',
    ['on ne doit pas + infinitif', 'il est interdit de + infinitif'], 1,
    "La formule impersonnelle est la seule qui fait officiel. EN: only the impersonal formula sounds official."),
  ctl('Le nom', 'Une affiche peut-elle nommer quelqu’un ?',
    ['Jamais.', 'Toujours, pour être claire.', 'Seulement si ce nom est la nouvelle.'], 2,
    "Le maire remet un prix : ça, c'est une nouvelle. EN: the mayor presenting a prize IS the news."),
], ['consigne', 'affiche']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Les quatre maisons',
    opener: {
      line: "Tu croises trois passifs avant midi sans les voir : voici où ils habitent. EN: You walk past three passives before noon without seeing them: here is where they live.",
      imageRef: 'lessons/voix-passive/act05.jpg',
    },
    sections: [],
    milestone: "Tu reconnais un avis, un règlement, une procédure et un bulletin à leur forme. EN: You can tell a notice, a rule, a procedure and a bulletin apart by their shape.",
    estScreens: 26, restPoints: ['a5-focus'],
  },
  sections: [A5_RADIO, A5_LIEUX, A5_TRIER, A5_FOCUS, A5_FORMULES, A5_ERREURS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — ON, LE VRAI RÉFLEXE
 *
 *  The act the lesson exists for. A learner who only has the passive sounds
 *  like a notice board; « on » is what a French speaker reaches for first,
 *  and it hides the doer just as completely.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the same closed street, in a stairwell instead of on a sign. */
const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Dans la cage d’escalier',
  frSub: 'La même rue, une autre langue',
  setting: "Samedi matin, dans l'escalier de l'immeuble. Tu descends avec ton sac de courses et tu croises madame Ngo, ta voisine du troisième.",
  bubbles: [
    { from: 'narrator', fr: 'En bas, sur la porte vitrée, une feuille annonce le marché du samedi.', en: 'Downstairs, a sheet on the glass door announces the Saturday market.' },
    { from: 'coach', fr: 'Tu descends tôt aujourd’hui.', en: 'You are going down early today.' },
    { from: 'user', fr: src(E(1091)).fr, en: src(E(1091)).en, warn: 'la phrase de la feuille, recopiée' },
    { from: 'coach', fr: 'Ah oui, on a fermé la rue. Comme chaque samedi.', en: 'Oh yes, they closed the street. Like every Saturday.' },
    { from: 'narrator', fr: 'Elle a dit exactement la même chose que la feuille, en quatre mots de moins.', en: 'She said exactly what the sheet said, in four words fewer.' },
    { from: 'user', fr: 'Et le marché finit à quelle heure.', en: 'And what time does the market finish.' },
    { from: 'coach', fr: src(E(1100)).fr, en: src(E(1100)).en, warn: 'encore on, pour une décision de la ville' },
  ],
  closing: { fr: 'Personne n’est nommé dans ses deux phrases non plus.', en: 'Nobody is named in either of her sentences either.' },
  audio: REC('rec-b1-18-escalier'),
  say: REFRAME,
  terms: ['on', 'passif'],
};

/** NAME: four things about on, and the second is the whole act. */
const A6_ON: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-on',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-on',
  title: 'Quatre choses sur on',
  frSub: 'Le réflexe de la bouche',
  hint: 'Quatre cartes. Tu connais déjà le mot ; tu ne connais pas encore son travail.',
  audio: REC('rec-b1-18-on'),
  say: REFRAME,
  terms: ['on', 'passif'],
  cards: [
    {
      head: 'on ne nomme personne', label: 'on',
      fr: src(E(1090)).fr,
      sub: rsOf(E(1090)),
      body: "Tu ne sais pas qui a fermé, et tu n'as pas à le savoir. on fait exactement le travail du passif. EN: on does exactly the job of the passive.",
    },
    {
      head: 'Et il est plus court', label: 'à l’oral',
      fr: src(E(1093)).fr,
      sub: rsOf(E(1093)),
      body: "Quatre mots au lieu de six, et aucune fin de participe à décider. EN: four words instead of six, and no participle ending to decide.",
    },
    {
      head: 'Il marche à tous les temps', label: 'sans effort',
      fr: src(E(1096)).fr,
      sub: rsOf(E(1096)),
      body: "on va, on a, on aura, on avait. Le verbe prend la forme de il, et rien d'autre ne change. EN: on takes the il form, and nothing else changes.",
    },
    {
      head: 'Mais pas sur un panneau', label: 'attention',
      fr: src(E(1011)).fr,
      sub: rsOf(E(1011)),
      body: "Une vitrine qui dit « on ferme le dimanche » sonne bavarde. Là, c'est le passif. EN: a shop window that says on sounds chatty; there, use the passive.",
    },
  ],
};

/** NAME, as a lookup: the same news, twice, six times over. */
const A6_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-tableau',
  layer: 'core',
  sheetId: 'sheet-on',
  title: 'La même nouvelle, deux fois',
  cols: ['Sur l’affiche', 'Dans ta bouche'],
  rows: [
    { cells: [src(E(1091)).fr, src(E(1090)).fr], say: src(E(1090)).fr,
      detail: { title: 'La rue', body: "Le marché est la raison dans les deux versions. Seul le début change. EN: only the opening changes.", say: src(E(1091)).fr } },
    { cells: ['Mon vélo a été volé.', src(E(1093)).fr], say: src(E(1093)).fr,
      detail: { title: 'Le vélo', body: "Personne ne dit « mon vélo a été volé » à un ami. EN: nobody says this to a friend.", say: src(E(1110)).fr } },
    { cells: ['Les horaires ont été changés.', src(E(1100)).fr], say: src(E(1100)).fr,
      detail: { title: 'Les horaires', body: "La ville a décidé, et personne ne la nomme. EN: the city decided, and nobody names it.", say: src(E(1097)).fr } },
    { cells: [src(E(1103)).fr, src(E(1102)).fr], say: src(E(1102)).fr,
      detail: { title: 'La valise', body: "Au comptoir tu diras le passif ; à ton frère, on. EN: the passive at the desk, on to your brother.", say: src(E(1103)).fr } },
    { cells: [src(E(1000)).fr, src(E(1001)).fr], say: src(E(1001)).fr,
      detail: { title: 'La salle', body: "C'est la scène de l'acte 1, réglée en un mot. EN: the act 1 scene, settled in one word.", say: src(E(1000)).fr } },
    { cells: ['Le train de huit heures a été annulé.', src(E(1105)).fr], say: src(E(1105)).fr,
      detail: { title: 'Le train', body: "Sur le panneau de la gare, le passif ; sur le quai, on. EN: the passive on the board, on on the platform.", say: src(E(1105)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['on', 'affiche'],
};

/** BUILD: take the notice down off the wall and say it. */
const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Descends la phrase du mur',
  groups: [
    grp('Quatre phrases de couloir', [
      it(E(1090), 'la rue du marché'),
      it(E(1102), 'la valise'),
      it(E(1100), 'les horaires'),
      it(E(1105), 'le train de huit heures'),
    ], chk(
      'Quel mot a remplacé le sujet de la phrase écrite ?',
      ['le verbe', 'on'], 1,
      "La chose redevient complément, et on prend sa place. EN: the thing goes back to object and on takes the subject slot.")),
    grp('Et quatre autres', [
      it(E(1097), 'les travaux de la ville'),
      it(E(1099), 'ce qu’on parle ici'),
      it('fr.a2.verbes.243', 'derrière un guichet'),
      it('fr.a2.au-restaurant.188', 'et le dernier service'),
    ], chk(
      'Dans ces quatre phrases, on veut-il dire « nous » ?',
      ['Non, personne en particulier.', 'Oui, la personne qui parle et son groupe.'], 0,
      "Ici on remplace « les gens », pas « nous ». EN: here on stands for people in general.")),
    ctl('Le mouvement', 'Tu passes de « La rue a été fermée » à la version parlée. Que fais-tu du sujet ?',
      ['il devient complément', 'il disparaît', 'il reste sujet'], 0,
      "La rue redevient complément d'objet : on a fermé la rue. EN: the street goes back to being the object."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['on', 'passif'],
};

/** MEET again, by ear: eight lines of ordinary spoken French. */
const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Huit phrases de tous les jours',
  frSub: 'Personne n’est nommé nulle part',
  lines: [
    ln(E(1090)), ln(E(1093)), ln(E(1094)), ln(E(1097)),
    ln(E(1100)), ln(E(1101)), ln(E(1102)), ln(E(1104)),
  ],
  questions: [
    { q: 'Deuxième phrase : qui a volé le vélo ?', opts: ['on ne le dit pas', 'un voisin'], correct: 0, why: "on ne nomme personne, exactement comme le passif. EN: on names nobody, exactly like the passive." },
    { q: 'Troisième phrase : qui a été appelé trois fois ?', opts: ['son frère', 'la personne qui parle'], correct: 1, why: "« on m'a téléphoné » : le m' est la personne qui parle. EN: the m’ is the speaker." },
    { q: 'Sixième phrase : depuis combien de temps t’attend-on ?', opts: ['vingt minutes', 'une heure'], correct: 0, why: '« depuis vingt minutes ». EN: for twenty minutes.' },
    { q: 'Dans ces huit phrases, quelle forme de verbe suit on ?', opts: ['la forme de ils', 'la forme de il', 'la forme de nous'], correct: 1, why: 'on a, on construit, on t’attend. EN: on always takes the il form.' },
    { q: 'Combien de ces huit phrases sont au passif ?', opts: ['la moitié', 'aucune'], correct: 1, why: "Aucune, et pourtant l'auteur est caché partout. EN: none, and the doer is hidden in all of them." },
  ],
  audio: REC('rec-b1-18-on-ecoute'),
  say: REFRAME,
  terms: ['on'],
};

/** CHOOSE: the register decides, not the meaning. */
const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Qui parle, et à qui',
  groups: [
    grp('Tu écris au syndic', [
      it(E(1091), 'une phrase de courriel officiel'),
      it(E(1103), 'une déclaration au comptoir'),
      it(E(1078), 'une ligne du règlement'),
      it(E(1084), 'un avis dans le hall'),
    ], chk(
      'Pourquoi le passif convient-il ici ?',
      ['parce que le texte est écrit et officiel', 'parce que la nouvelle est triste'], 0,
      "Un écrit officiel ne s'adresse à personne en particulier. EN: official writing addresses nobody in particular.")),
    grp('Tu parles à ta voisine', [
      it(E(1090), 'dans l’escalier'),
      it(E(1102), 'au téléphone, à ton frère'),
      it(E(1104), 'en rentrant du bureau'),
      it(E(1101), 'devant un café, en retard'),
    ], chk(
      'Qu’est-ce que ces quatre phrases gagnent sur la version au passif ?',
      ['elles sont plus polies', 'elles sont plus courtes et plus naturelles'], 1,
      "Même information, moins de mots, et aucun participe à accorder. EN: same information, fewer words, no agreement to get right.")),
    ctl('Le test', 'Avant d’écrire un passif, quelle question te poses-tu ?',
      ['Est-ce que je connais l’auteur ?', 'Est-ce que je parle, ou est-ce que j’écris une règle ?'], 1,
      "C'est le registre qui décide, pas ce que tu sais. EN: register decides, not what you know."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['on', 'affiche'],
};

/** TRAP, stepped: five ways on goes wrong, plus the passive kept in speech. */
const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges autour de on',
  rule: {
    title: 'on prend la forme de il, et il est déjà l’auteur',
    body: "on a, on est, on va : jamais ont, jamais sont. Et comme on EST déjà l'auteur de la phrase, il n'y a jamais de par derrière. EN: on takes the il form, and never carries a par.",
  },
  cards: [
    { promptLabel: 'on avec ont', promptSound: 'On ont fermé la rue pour le marché.', fr: src(E(1090)).fr, ipa: ipaOf(E(1090)), tip: 'on prend toujours la forme de il. EN: on always takes the il form.' },
    { promptLabel: 'le passif gardé à l’oral', promptSound: 'Mon vélo a été volé.', fr: src(E(1093)).fr, ipa: ipaOf(E(1093)), tip: "Correct, et personne ne dit ça à un ami. EN: correct, and nobody says it to a friend." },
    { promptLabel: 'la personne comme sujet', promptSound: 'Je suis téléphoné trois fois.', fr: src(E(1094)).fr, ipa: ipaOf(E(1094)), tip: "La personne ne peut pas être sujet ici. EN: the person cannot be the subject here." },
    { promptLabel: 'quelqu’un au lieu de on', promptSound: 'Quelqu’un a changé les horaires du bus.', fr: src(E(1100)).fr, ipa: ipaOf(E(1100)), tip: "quelqu'un montre une personne ; on n'en montre aucune. EN: quelqu’un points at a person." },
    { promptLabel: 'on sur une vitrine', promptSound: 'On ferme le magasin le dimanche.', fr: src(E(1011)).fr, ipa: ipaOf(E(1011)), tip: "Sur un panneau, c'est le passif. EN: on a sign, use the passive." },
    { promptLabel: 'on suivi de par', promptSound: 'On a perdu ma valise par la compagnie.', fr: src(E(1102)).fr, ipa: ipaOf(E(1102)), tip: "on est déjà l'auteur : pas de par. EN: on is already the doer." },
  ],
  drill: [
    { promptSay: 'On ... fermé la rue pour le marché.', opts: ['a', 'ont'], correct: 0 },
    { promptSay: 'Tu racontes ton vélo à un ami. Tu dis ... .', opts: ['on a volé mon vélo', 'mon vélo a été volé'], correct: 0 },
    { promptSay: '... m’a téléphoné trois fois.', opts: ['Je suis', 'On'], correct: 1 },
    { promptSay: 'On ... une piste cyclable ici.', opts: ['construisent', 'construisons', 'construit'], correct: 2 },
    { promptSay: 'Sur la vitrine : le magasin ... le dimanche.', opts: ['est fermé', 'on ferme'], correct: 0 },
    { promptSay: 'On a perdu ma valise ... .', opts: ['par la compagnie', 'à l’aéroport'], correct: 1 },
    { promptSay: 'On ... changé les horaires du bus.', opts: ['a', 'ont', 'avons'], correct: 0 },
    { promptSay: 'Dans l’escalier, ta voisine dit ... .', opts: ['la rue a été fermée', 'on a fermé la rue'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'on va avec il, et sans par' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-18-piege-on'),
  say: REFRAME,
  terms: ['on'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('La forme', 'Quel verbe suit on ?',
    ['la forme de il', 'la forme de ils'], 0,
    "on a, on est, on va. EN: on takes the il form."),
  ctl('Le travail', 'on cache-t-il l’auteur aussi bien que le passif ?',
    ['Non, il en montre un peu.', 'Oui, complètement.'], 1,
    "Personne n'est nommé dans les deux cas. EN: nobody is named either way."),
  ctl('Le choix', 'Tu écris un règlement d’immeuble. Utilises-tu on ?',
    ['oui, c’est plus clair', 'non, le passif', 'les deux, en alternance'], 1,
    "Un règlement s'écrit au passif. EN: rules are written in the passive."),
], ['on', 'consigne']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Le réflexe on',
    opener: {
      line: "Ta voisine dit la même chose que la feuille sur la porte, en quatre mots de moins. EN: Your neighbour says what the sheet on the door says, in four words fewer.",
      imageRef: 'lessons/voix-passive/act06.jpg',
    },
    sections: [],
    milestone: "Tu descends n'importe quelle phrase d'affiche dans une conversation, avec on. EN: You can take any notice sentence down into a conversation, using on.",
    estScreens: 34, restPoints: ['a6-tableau', 'a6-ecoute'],
  },
  sections: [A6_HISTOIRE, A6_ON, A6_TABLEAU, A6_CONSTRUIRE, A6_ECOUTE, A6_CHOISIR, A6_PIEGE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — SE FAIRE + INFINITIF
 *
 *  The third way of not naming the doer, and the only one that says the
 *  thing happened TO YOU. a2.23 taught pronominal agreement; se faire is
 *  its exception, so the act quotes that lesson and then breaks it once.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the bike, told the way it is actually told. */
const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Devant le café',
  frSub: 'Le vélo, raconté à un ami',
  setting: "Lundi soir, devant un café de Bruxelles. Tu arrives à pied, sans ton vélo, et Idriss t'attend déjà à une table dehors.",
  bubbles: [
    { from: 'coach', fr: 'Tu es à pied. Il est arrivé quelque chose à ton vélo.', en: 'You are on foot. Something happened to your bike.' },
    { from: 'user', fr: src(E(1093)).fr, en: src(E(1093)).en, warn: 'correct, et un peu plat' },
    { from: 'coach', fr: 'À toi. Devant chez toi, ou ailleurs.', en: 'To you. Outside your place, or somewhere else.' },
    { from: 'user', fr: src(E(1110)).fr, en: src(E(1110)).en, warn: 'se faire : la chose t’est arrivée, à toi' },
    { from: 'coach', fr: 'Voilà. Là, je sais que c’est toi qui as perdu quelque chose.', en: 'There. Now I know it is you who lost something.' },
    { from: 'narrator', fr: 'Les deux phrases disent le même vol. La deuxième te met dedans.', en: 'Both sentences report the same theft. The second one puts you inside it.' },
  ],
  closing: { fr: 'se faire ne cache pas l’auteur : il te met, toi, au centre.', en: 'se faire does not hide the doer: it puts you at the centre.' },
  audio: REC('rec-b1-18-cafe'),
  say: REFRAME,
  terms: ['sefaire', 'on'],
};

/** NAME: four cards, and the third is the one that gets marked wrong. */
const A7_SEFAIRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-sefaire',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sefaire',
  title: 'se faire, mot par mot',
  frSub: 'Ce qui t’arrive, à toi',
  hint: 'Quatre cartes. La troisième est celle que les correcteurs soulignent.',
  audio: REC('rec-b1-18-sefaire'),
  say: REFRAME,
  terms: ['sefaire'],
  cards: [
    {
      head: 'La chose t’est arrivée', label: 'se faire',
      fr: src(E(1110)).fr,
      sub: rsOf(E(1110)),
      body: "Le vélo a été volé, et c'est toi qui l'as perdu. Le passif ne dit que la première moitié. EN: the passive only says the first half of that.",
    },
    {
      head: 'Ou tu l’as demandée', label: 'se faire',
      fr: src(E(1111)).fr,
      sub: rsOf(E(1111)),
      body: "Personne ne t'a rien fait de mal : tu es entrée et tu as payé. se faire couvre les deux. EN: se faire covers both what you suffer and what you arrange.",
    },
    {
      head: 'fait ne change jamais', label: Cap(PRONOMINAL_PC_REF),
      fr: 'elle s’est fait couper · ils se sont fait aider',
      sub: '[ehl seh feh koo-PAY · eel suh sohⁿ feh eh-DAY]',
      body: `« ${A223_REFRAME} » L'auxiliaire est bien être, et pourtant fait reste fait. EN: the auxiliary is être and fait still never agrees.`,
    },
    {
      head: 'Et le verbe reste à l’infinitif', label: 'la forme',
      fr: src(E(1114)).fr,
      sub: rsOf(E(1114)),
      body: "livrer, pas livré. Après faire, le deuxième verbe ne bouge pas. EN: after faire the second verb stays in the infinitive.",
    },
  ],
};

/** BUILD: assemble the three pieces. */
const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte se faire',
  groups: [
    grp('Ce que tu subis', [
      it(E(1110), 'le vélo'),
      it(E(1119), 'la porte du club'),
      it(E(1170), 'le téléphone, dans le bus'),
      it('fr.a2.corps.006', 'et un genou, en courant'),
    ], chk(
      'Dans « je me suis fait voler mon vélo », qui a volé ?',
      ['quelqu’un, et on ne le nomme pas', 'moi'], 0,
      "Comme le passif et comme on : personne n'est nommé. EN: like the passive and like on, nobody is named.")),
    grp('Ce que tu demandes', [
      it(E(1111), 'chez le coiffeur'),
      it(E(1117), 'au guichet de la gare'),
      it(E(1114), 'un soir de semaine'),
      it(E(1120), 'au bureau d’aide'),
    ], chk(
      'Quelle forme prend le verbe après fait ?',
      ['le participe passé', 'l’infinitif'], 1,
      "couper, rembourser, livrer, aider : tous à l'infinitif. EN: all infinitives.")),
    ctl('Le mot qui ne bouge pas', '« Elle s’est fait ... couper les cheveux. » Écris-tu fait ou faite ?',
      ['fait', 'faite'], 0,
      "fait est invariable devant un infinitif. EN: fait is invariable before an infinitive."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sefaire', 'accord'],
};

/** NAME again, on real rows: the two halves of se faire. */
const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  sheetId: 'sheet-sefaire',
  title: 'Subir, ou demander',
  examples: [
    ex(E(1110), 'Tu le subis : le vélo est parti.'),
    ex(E(1119), 'Tu le subis : quelqu’un a dit non.'),
    ex(E(1111), 'Tu l’as demandé, et tu as payé.'),
    ex(E(1118), 'Tu l’as demandé, et c’était une bonne nouvelle.'),
    ex(E(1113), 'Ici par arrive, parce que le frère compte.'),
    ex(E(1115), 'Et se faire marche aussi au futur proche.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sefaire', 'agent'],
};

/** CHOOSE: three tools, one situation. */
const A7_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le vol, trois fois',
  groups: [
    grp('Le même vol, trois phrases', [
      it(E(1171), "le passif : la déclaration écrite"),
      it(E(1093), 'on : tu racontes ta journée'),
      it(E(1170), 'se faire : elle est au centre'),
      it(E(1110), 'se faire : et toi aussi'),
    ], chk(
      'Laquelle de ces trois formes te met, toi, dans la phrase ?',
      ['on', 'le passif', 'se faire'], 2,
      "Le sujet de se faire est la personne à qui ça arrive. EN: the subject of se faire is the person it happens to.")),
    grp('Trois situations', [
      free('Tu remplis un formulaire de police.', 'You are filling in a police form.', 'le passif : son téléphone a été volé'),
      free('Tu racontes ta journée à table.', 'You are telling your day at the table.', 'on : on m’a volé mon téléphone'),
      free('Tu expliques pourquoi tu es en retard.', 'You are explaining why you are late.', 'se faire : je me suis fait voler mon téléphone'),
      it(E(1164), 'et quand tu l’as demandé toi-même'),
    ], chk(
      'Qu’est-ce qui décide entre ces trois formes ?',
      ['le verbe employé', 'qui parle, et de quoi'], 1,
      "Même vol, trois situations, trois formes. EN: same theft, three situations, three shapes.")),
    ctl('La nuance', '« Je me suis fait couper les cheveux. » Est-ce une mauvaise nouvelle ?',
      ['Non, tu l’as demandé.', 'Oui, toujours.'], 0,
      "se faire couvre ce que tu subis ET ce que tu commandes. EN: se faire covers both."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sefaire', 'on'],
};

/** TRAP: four reasonable ways se faire goes wrong. */
const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de se faire',
  errors: [
    {
      wrong: 'Elle s’est faite couper les cheveux.',
      right: src(E(1111)).fr,
      why: `Normal : « ${A223_REFRAME} » et l'auxiliaire EST être. Devant un infinitif, fait ne bouge pas. EN: before an infinitive, fait does not move.`,
    },
    {
      wrong: 'Je me suis fait volé mon vélo.',
      right: src(E(1110)).fr,
      why: "volé et voler se prononcent pareil, donc l'oreille ne t'aide pas. Après faire, c'est l'infinitif. EN: -é and -er sound alike; after faire it is the infinitive.",
    },
    {
      wrong: 'Je me suis fait voler mon vélo par quelqu’un.',
      right: src(E(1110)).fr,
      why: "se faire ne nomme déjà personne, donc par quelqu'un est de trop. EN: se faire already names nobody.",
    },
    {
      wrong: 'Mon vélo s’est fait voler.',
      right: src(E(1110)).fr,
      why: "Le sujet de se faire est la PERSONNE, pas la chose. Un vélo ne se fait rien. EN: the subject of se faire is the person, not the object.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sefaire', 'accord'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le sujet', 'Qui est le sujet de se faire ?',
    ['la chose', 'la personne à qui ça arrive'], 1,
    "Je me suis fait voler mon vélo : le sujet, c'est je. EN: the subject is the person."),
  ctl('Le participe', 'Le mot fait s’accorde-t-il devant un infinitif ?',
    ['Jamais.', 'Oui, comme les autres pronominaux.'], 0,
    "C'est l'exception de la famille. EN: it is the exception in the family."),
  ctl('Le sens', 'se faire annonce-t-il toujours une mauvaise nouvelle ?',
    ['Oui', 'Non, tu peux l’avoir demandé', 'Seulement au passé'], 1,
    "se faire couper les cheveux, se faire rembourser. EN: you may have arranged it yourself."),
], ['sefaire', 'accord']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Ce qui t’arrive',
    opener: {
      line: "Ton vélo a été volé, et toi, tu t'es fait voler ton vélo : la deuxième phrase te met dedans. EN: Your bike was stolen, and you had your bike stolen: the second sentence puts you inside it.",
      imageRef: 'lessons/voix-passive/act07.jpg',
    },
    sections: [],
    milestone: "Tu racontes ce qui t'est arrivé avec se faire, sans accorder fait. EN: You can tell what happened to you with se faire, and leave fait alone.",
    estScreens: 26, restPoints: ['a7-exemples'],
  },
  sections: [A7_HISTOIRE, A7_SEFAIRE, A7_CONSTRUIRE, A7_EXEMPLES, A7_CHOISIR, A7_ERREURS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — ÇA SE DIT
 *
 *  The fourth tool, and the one an anglophone never reaches for: the
 *  pronominal passive, for what is generally done rather than what anybody
 *  did. It is also the shortest of the four.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: eight sentences about the world, none about a person. */
const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Huit phrases sans personne',
  frSub: 'Écoute le petit mot se',
  lines: [
    ln(E(1127)), ln(E(1129)), ln(E(1131)), ln(E(1133)),
    ln(E(1135)), ln(E(1136)), ln(E(1137)), ln(E(1138)),
  ],
  questions: [
    { q: 'Deuxième phrase : à quelle température sert-on le vin blanc ?', opts: ['frais', 'chaud'], correct: 0, why: '« se sert frais » : c’est la règle, pas un ordre. EN: it is the rule, not an order.' },
    { q: 'Troisième phrase : quand mange-t-on le fromage ?', opts: ['avant le plat', 'à la fin du repas'], correct: 1, why: 'Une habitude générale, au pronominal. EN: a general habit, in the pronominal.' },
    { q: 'Sixième phrase : où achète-t-on les billets ?', opts: ['en ligne', 'au guichet'], correct: 0, why: '« se vendent en ligne ». EN: sold online.' },
    { q: 'Ces huit phrases parlent-elles de quelqu’un en particulier ?', opts: ['Oui, de la personne qui parle', 'Non, de ce qui se fait en général'], correct: 1, why: "Le pronominal décrit le monde, pas une personne. EN: the pronominal describes the world." },
    { q: 'Quel petit mot revient dans les huit phrases ?', opts: ['se', 'on', 'être'], correct: 0, why: 'se, devant le verbe, à chaque fois. EN: se, in front of the verb, every time.' },
  ],
  audio: REC('rec-b1-18-pronominal-ecoute'),
  say: REFRAME,
  terms: ['pronominal'],
};

/** NAME: four cards, and the fourth separates it from the real reflexive. */
const A8_PRONOMINAL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-pronominal',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-sefaire',
  title: 'Quand la chose se fait toute seule',
  frSub: 'Le passif pronominal',
  hint: 'Quatre cartes. La dernière évite une confusion que tu connais déjà.',
  audio: REC('rec-b1-18-pronominal'),
  say: REFRAME,
  terms: ['pronominal'],
  cards: [
    {
      head: 'Une règle du monde', label: 'le pronominal',
      fr: src(E(1129)).fr,
      sub: rsOf(E(1129)),
      body: "Personne ne sert ce vin dans cette phrase. C'est comme ça qu'on le sert, partout. EN: nobody serves the wine here; that is simply how it is served.",
    },
    {
      head: 'Une habitude, pas un événement', label: 'en général',
      fr: src(E(1131)).fr,
      sub: rsOf(E(1131)),
      body: "Ce n'est ni hier ni demain. Le pronominal ne raconte rien : il décrit l'usage. EN: it is neither yesterday nor tomorrow; it describes the custom.",
    },
    {
      head: 'Et surtout, ça se dit', label: 'la formule',
      fr: src(E(1127)).fr,
      sub: rsOf(E(1127)),
      body: "Trois mots que tu entendras tous les jours, avec leur contraire : ça ne se fait pas. EN: three words you will hear daily, with their opposite.",
    },
    {
      head: 'Ce n’est pas un vrai réfléchi', label: 'attention',
      fr: 'il se lave · le plat se prépare',
      sub: '[eel suh LAHV · luh PLA suh pray-PAR]',
      body: "Dans le premier, il se lave lui-même. Dans le second, le plat ne fait rien du tout. EN: in the first he washes himself; in the second the dish does nothing.",
    },
  ],
};

/** BUILD: three groups, and the last is the confusion. */
const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Monte un pronominal',
  groups: [
    grp('Des usages de table', [
      it(E(1129), 'la température du vin'),
      it(E(1131), 'la place du fromage'),
      it(E(1135), 'le moment de la préparation'),
      it('fr.a2.les-fetes.004', 'et un usage de février'),
    ], chk(
      'Ces quatre phrases racontent-elles ce que quelqu’un a fait ?',
      ['Non, ce qui se fait en général.', 'Oui, ce qu’une personne a fait hier.'], 0,
      "Ni un jour ni une personne : un usage. EN: neither a day nor a person, but a custom.")),
    grp('Des règles de langue et de commerce', [
      it(E(1132), "l'orthographe"),
      it(E(1137), 'la prononciation'),
      it(E(1136), 'la vente des billets'),
      it(E(1138), 'et une porte qui se ferme seule'),
    ], chk(
      'Dans « les billets se vendent en ligne », qui vend ?',
      ['les billets', 'on ne le dit pas'], 1,
      "Les billets ne vendent rien : ils SONT vendus. EN: the tickets sell nothing; they are sold.")),
    ctl('La différence', "« Il se lave » et « le plat se prépare » : même construction, même sens ?",
      ['Oui, les deux sont réfléchis.', 'Non, le plat ne fait rien.'], 1,
      "Un plat ne se prépare pas lui-même. EN: a dish does not prepare itself."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronominal', 'passif'],
};

/** NAME again: the two halves, on real rows. */
const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Ce qui se fait, et ce qui ne se fait pas',
  examples: [
    ex(E(1127), 'La formule positive, en trois mots.'),
    ex(E(1128), 'Et sa correction, quand tu entends une faute.'),
    ex(E(1133), 'Un usage, avec un lieu.'),
    ex(E(1134), 'Le même usage, refusé ailleurs.'),
    ex(E(1139), 'Ça se voit : un pronominal figé, très courant.'),
    ex(E(1140), 'Ça se comprend : le plus poli des quatre.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronominal'],
};

/** CHOOSE: four tools, one meaning. */
const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Un usage, ou un événement',
  groups: [
    grp('Ce qui se fait toujours', [
      it(E(1136), 'les billets, en général'),
      it(E(1135), 'ce plat, dans toutes les cuisines'),
      it(E(1172), 'et un produit qui a disparu des rayons'),
      it(E(1166), 'une réparation qui prend une heure, toujours'),
    ], chk(
      'Ces quatre phrases pourraient-elles se mettre au passé composé ?',
      ['Non, elles décrivent ce qui est vrai en général.', 'Oui, facilement.'], 0,
      "Un usage n'a pas de date. EN: a custom has no date.")),
    grp('Ce qui est arrivé une fois', [
      it(E(1050), 'les billets, ce jour-là'),
      it(E(1036), 'le magasin, pendant deux mois'),
      it(E(1090), 'la rue, samedi dernier'),
      it(E(1110), 'et ton vélo, lundi'),
    ], chk(
      'Pour ces quatre phrases, le pronominal marcherait-il ?',
      ['Non, ce sont des événements datés.', 'Oui, comme les précédentes.'], 0,
      "Le pronominal ne raconte pas : il décrit. EN: the pronominal describes, it does not narrate.")),
    ctl('Le test', 'Tu veux dire « ça ne se fait pas ici ». Quel outil ?',
      ['le passif', 'on', 'le pronominal'], 2,
      "Un usage général prend se. EN: a general custom takes se."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['pronominal', 'on'],
};

/** TRAP, stepped: six ways the pronominal goes wrong. */
const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Six pièges du pronominal',
  rule: {
    title: 'se, quand personne ne fait rien',
    body: "Le pronominal passif s'emploie pour une chose, jamais pour une personne. « Le vin se sert frais » va ; « je me sers frais » ne veut rien dire. EN: the pronominal passive is for things, never for people.",
  },
  cards: [
    { promptLabel: 'le passif à la place', promptSound: 'Le vin blanc est servi frais.', fr: src(E(1129)).fr, ipa: ipaOf(E(1129)), tip: "Correct, et plus lourd pour un usage. EN: correct, and heavier for a general custom." },
    { promptLabel: 'une personne comme sujet', promptSound: 'Je me vends en ligne.', fr: src(E(1136)).fr, ipa: ipaOf(E(1136)), tip: "Le pronominal passif ne prend pas de personne. EN: no people as subject." },
    { promptLabel: 'c’est au lieu de ça se', promptSound: 'C’est dit comme ça.', fr: src(E(1127)).fr, ipa: ipaOf(E(1127)), tip: "« ça se dit » est la formule figée. EN: ça se dit is the fixed phrase." },
    { promptLabel: 'la négation mal placée', promptSound: 'Ça se ne fait pas ici.', fr: src(E(1134)).fr, ipa: ipaOf(E(1134)), tip: "ne passe devant se : ça ne se fait pas. EN: ne comes before se." },
    { promptLabel: 'le pronominal pour un événement', promptSound: 'La rue s’est fermée samedi pour le marché.', fr: src(E(1090)).fr, ipa: ipaOf(E(1090)), tip: "Un événement daté prend on ou le passif. EN: a dated event takes on or the passive." },
    { promptLabel: 'se oublié', promptSound: 'Ce mot écrit avec un accent.', fr: src(E(1132)).fr, ipa: ipaOf(E(1132)), tip: "Sans se, la phrase n'a plus de verbe conjugué utile. EN: without se the sentence loses its point." },
  ],
  drill: [
    { promptSay: 'Le vin blanc ... frais.', opts: ['est servi frais par le serveur', 'se sert'], correct: 1 },
    { promptSay: 'Les billets ... en ligne.', opts: ['se vendent', 'se vend'], correct: 0 },
    { promptSay: 'Ça ... comme ça.', opts: ['est dit', 'se dit'], correct: 1 },
    { promptSay: 'Ça ... pas ici.', opts: ['ne se fait', 'se ne fait'], correct: 0 },
    { promptSay: 'Samedi dernier, ... la rue pour le marché.', opts: ['la rue s’est fermée', 'on a fermé'], correct: 1 },
    { promptSay: 'Ce mot ... avec un accent.', opts: ['s’écrit', 'écrit'], correct: 0 },
    { promptSay: 'Ce plat ... la veille.', opts: ['se préparent', 'se prépare'], correct: 1 },
    { promptSay: 'Une personne peut-elle être sujet d’un pronominal passif ?', opts: ['oui', 'non'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'se, pour les choses' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme fausse raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-18-piege-pronominal'),
  say: REFRAME,
  terms: ['pronominal', 'passif'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le sujet', 'Le pronominal passif accepte-t-il une personne comme sujet ?',
    ['Oui', 'Non', 'Seulement au pluriel'], 1,
    "Il est réservé aux choses. EN: things only."),
  ctl('Le sens', '« Ce plat se prépare la veille. » Qui prépare ?',
    ['on ne le dit pas', 'le plat'], 0,
    "Personne n'est nommé, comme dans les trois autres outils. EN: nobody is named, as with the other three tools."),
  ctl('La date', 'Le pronominal convient-il pour un événement daté ?',
    ['Non, il décrit un usage.', 'Oui, à tous les temps.'], 0,
    "Pour samedi dernier, dis on. EN: for last Saturday, say on."),
], ['pronominal', 'on']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Ce qui se fait',
    opener: {
      line: "Le vin blanc se sert frais : personne ne le sert dans cette phrase, et pourtant tout est dit. EN: White wine is served chilled: nobody serves it in that sentence, and everything is said.",
      imageRef: 'lessons/voix-passive/act08.jpg',
    },
    sections: [],
    milestone: "Tu dis un usage général avec se, et tu ne le confonds plus avec un vrai réfléchi. EN: You can state a general custom with se, without confusing it with a true reflexive.",
    estScreens: 30, restPoints: ['a8-exemples'],
  },
  sections: [A8_ECOUTE, A8_PRONOMINAL, A8_CONSTRUIRE, A8_EXEMPLES, A8_CHOISIR, A8_PIEGE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — LE PIÈGE ANGLAIS
 *
 *  The act that defines the lesson for an anglophone. English passivises
 *  anything, including indirect objects; French cannot. « Je suis donné un
 *  livre » is impossible, and « on m'a donné un livre » is the answer.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET: the sentence fails in front of somebody, which is the only way this
 *  trap ever gets noticed. */
const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Au guichet de la mairie',
  frSub: 'Une phrase qui ne passe pas',
  setting: "Mardi matin, au guichet trois de la mairie. Tu viens chercher un document et l'employé te demande où en est ton dossier.",
  bubbles: [
    { from: 'coach', fr: 'Vous avez déjà reçu quelque chose de notre part.', en: 'You have already received something from us.' },
    { from: 'user', fr: 'Oui. Je suis donné un formulaire la semaine dernière.', en: 'Yes. I was given a form last week.', warn: 'cette phrase n’existe pas en français' },
    { from: 'coach', fr: 'Pardon. Vous avez donné un formulaire à quelqu’un.', en: 'Sorry. You gave a form to somebody.' },
    { from: 'narrator', fr: 'Il a compris l’inverse. En français, la personne ne peut pas être le sujet de donner au passif.', en: 'He understood the opposite. In French the person cannot be the subject of a passive donner.' },
    { from: 'user', fr: src(E(1157)).fr, en: src(E(1157)).en, warn: 'la seule façon de le dire' },
    { from: 'coach', fr: 'Ah, très bien. Le formulaire vert, alors.', en: 'Ah, very good. The green form, then.' },
  ],
  closing: { fr: 'Ce n’est pas une maladresse : c’est une phrase que le français ne construit pas.', en: 'This is not clumsiness: it is a sentence French does not build.' },
  audio: REC('rec-b1-18-mairie'),
  say: REFRAME,
  terms: ['donner', 'on'],
};

/** NAME: why it happens, why it cannot, and what to do instead. */
const A9_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-consignes',
  title: 'Le passif que le français refuse',
  frSub: 'donner à quelqu’un',
  hint: 'Quatre cartes. La deuxième explique pourquoi ton oreille anglaise se trompe.',
  audio: REC('rec-b1-18-piege-anglais'),
  say: REFRAME,
  terms: ['donner', 'on'],
  cards: [
    {
      head: 'La personne arrive avec à', label: 'donner à',
      fr: src('fr.a2.verbes.122').fr,
      sub: '[ohⁿ don sohⁿ-na-dress a la-ZHAHⁿ]',
      body: "L'adresse est le complément direct ; l'agent arrive derrière à. Ce à ne devient jamais sujet. EN: the person arrives behind à, and à never becomes a subject.",
    },
    {
      head: 'En anglais, à disparaît', label: 'pourquoi ça arrive',
      fr: 'I was given a book',
      sub: '[eye wuz GIV-uhn uh book]',
      body: "L'anglais laisse la personne passer devant, et ton oreille copie. Le français n'a pas ce passage. EN: English lets the person move to the front; French has no such move.",
    },
    {
      head: 'La chose, elle, peut passer', label: 'ce qui marche',
      fr: src(E(1152)).fr,
      sub: rsOf(E(1152)),
      body: "Le livre est le complément direct, donc il peut devenir sujet. La sœur reste derrière à. EN: the book is the direct object, so it can become the subject.",
    },
    {
      head: 'Et la vraie réponse est on', label: 'la sortie',
      fr: src(E(1143)).fr,
      sub: rsOf(E(1143)),
      body: "Quatre mots, aucune personne nommée, et tout le monde comprend. EN: four words, nobody named, and everyone understands.",
    },
  ],
};

/** NAME, as a lookup: six of the eight verbs. */
const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  sheetId: 'sheet-consignes',
  title: 'Six verbes, une seule sortie',
  cols: ['Verbe', 'En anglais', 'En français'],
  rows: [
    { cells: ['donner à', 'I was given a book', src(E(1143)).fr], say: src(E(1143)).fr,
      detail: { title: 'donner à', body: "Le livre peut devenir sujet ; la personne, jamais. EN: the book can become the subject; the person cannot.", say: src(E(1152)).fr } },
    { cells: ['dire à', 'I was told to come back', src(E(1147)).fr], say: src(E(1147)).fr,
      detail: { title: 'dire à', body: "Ce qui est dit peut devenir sujet ; celui à qui on le dit, non. EN: what is said can; the hearer cannot.", say: src(E(1159)).fr } },
    { cells: ['demander à', 'we were asked for our papers', src(E(1146)).fr], say: src(E(1146)).fr,
      detail: { title: 'demander à', body: "demander à quelqu'un de faire : la personne est toujours derrière à. EN: the person is always behind à.", say: src(E(1154)).fr } },
    { cells: ['offrir à', 'he was given a bike', src(E(1145)).fr], say: src(E(1145)).fr,
      detail: { title: 'offrir à', body: "Même structure que donner, et le même refus. EN: same structure as donner, and the same refusal.", say: src(E(1145)).fr } },
    { cells: ['promettre à', 'they were promised an answer', src(E(1148)).fr], say: src(E(1148)).fr,
      detail: { title: 'promettre à', body: "La réponse peut devenir sujet : une réponse leur a été promise. EN: the answer can become the subject.", say: src(E(1153)).fr } },
    { cells: ['permettre à', 'I was allowed to stay', src(E(1149)).fr], say: src(E(1149)).fr,
      detail: { title: 'permettre à', body: "Et de même pour répondre à et conseiller à. EN: and the same for répondre à and conseiller à.", say: src(E(1151)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['donner', 'on'],
};

/** BUILD: the only sentence there is. */
const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Dis-le avec on',
  groups: [
    grp('Ce qu’on t’a fait', [
      it(E(1143), 'un livre'),
      it(E(1147), 'une date de retour'),
      it(E(1149), 'une autorisation'),
      it(E(1155), 'et une leçon de conduite'),
    ], chk(
      'Quel mot ouvre les quatre phrases ?',
      ['Je', 'On'], 1,
      "La personne devient m', et on prend le sujet. EN: the person becomes m’ and on takes the subject slot.")),
    grp('Ce qu’on a fait aux autres', [
      it(E(1145), 'à lui'),
      it(E(1148), 'à eux'),
      it(E(1151), 'à elle'),
      it(E(1156), 'et un refus'),
    ], chk(
      'Où est passée la personne dans « on lui a offert un vélo » ?',
      ['elle a disparu', 'elle est devenue lui, devant le verbe'], 1,
      "Le à devient un pronom, et il reste complément. EN: the à becomes a pronoun and stays an object.")),
    ctl('Le réflexe', '« I was told to wait. » Par quoi commences-tu ta phrase française ?',
      ['On m’a', 'Je suis'], 0,
      "On m'a dit d'attendre. EN: On m’a dit d’attendre."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['donner', 'on'],
};

/** NAME again: what IS possible, so the rule is a shape and not a ban. */
const A9_POSSIBLE: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-possible',
  layer: 'core',
  title: 'Ce qui marche quand même',
  examples: [
    ex(E(1152), 'Le livre est complément direct : il peut devenir sujet.'),
    ex(E(1153), 'La réponse aussi, et leur reste derrière.'),
    ex(E(1143), 'Mais la personne, jamais. Ici, on.'),
    ex(E(1146), 'Nos papiers sont la chose ; nous restons derrière.'),
    ex(E(1154), 'Même verbe, même structure, même sortie.'),
    ex(E(1150), 'Et répondre à quelqu’un se comporte pareil.'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['donner', 'passif'],
};

/** CHOOSE: is this English passive buildable in French? */
const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Traduisible, ou pas',
  groups: [
    grp('Quatre phrases anglaises', [
      free('The room was booked.', 'La salle a été réservée.', 'la salle est complément direct : le passif marche'),
      free('I was given a book.', 'On m’a donné un livre.', 'la personne est derrière à : on'),
      free('The letter was written in French.', 'La lettre est écrite en français.', 'la lettre est complément direct : le passif marche'),
      free('We were asked for our papers.', 'On nous a demandé nos papiers.', 'nous est derrière à : on'),
    ], chk(
      'Qu’est-ce qui décide si le passif français est possible ?',
      ['le temps du verbe', 'si le sujet anglais était complément direct'], 1,
      "Complément direct, passif possible. Derrière à, impossible. EN: direct object yes, behind à no.")),
    grp('Le même verbe, deux phrases', [
      it(E(1152), 'le livre passe devant : possible'),
      it(E(1143), 'la sœur ne passe pas : on'),
      it(E(1153), 'la réponse passe devant : possible'),
      it(E(1154), 'et la version parlée du même fait'),
    ], chk(
      'Le verbe donner a-t-il un passif en français ?',
      ['Oui, mais seulement avec la chose comme sujet.', 'Non, jamais.'], 0,
      "Le livre a été donné va ; ma sœur a été donnée un livre, non. EN: the thing may be the subject, the person may not.")),
    ctl('La liste', 'Combien de verbes de cette leçon refusent la personne comme sujet ?',
      ['huit', 'deux', 'tous les verbes français'], 0,
      `${NO_PASSIVE_VERBS.length} : donner, dire, demander, offrir, promettre, permettre, répondre, conseiller. EN: eight, all of them with à.`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['donner', 'passif'],
};

/** TRAP: four sentences an anglophone produces, each for a good reason. */
const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre phrases impossibles',
  errors: [
    {
      wrong: 'Je suis donné un livre.',
      right: src(E(1143)).fr,
      why: "Normal : en anglais I was given a book est une phrase de tous les jours. Le français ne fait pas passer la personne devant. EN: French does not move the person to the front.",
    },
    {
      wrong: 'Nous sommes demandés nos papiers.',
      right: src(E(1146)).fr,
      why: "Tu construis bien le passif, et le verbe refuse ce sujet. demander à quelqu'un garde le à. EN: the form is right and the verb refuses that subject.",
    },
    {
      wrong: 'Il est offert un vélo.',
      right: src(E(1145)).fr,
      why: "Ici « il est offert » existe, mais veut dire que LUI est offert, ce qui n'est pas ce que tu veux dire. EN: that sentence exists and means something else.",
    },
    {
      wrong: 'Je suis dit de revenir demain.',
      right: src(E(1147)).fr,
      why: "dire à quelqu'un de faire : la personne est derrière à, et la chose dite est le complément direct. EN: the person sits behind à.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['donner', 'on'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('La forme impossible', '« Je suis donné un livre. » Est-ce du français ?',
    ['Oui, mais familier.', 'Non, cette phrase n’existe pas.'], 1,
    "Ce n'est pas une question de registre : la phrase ne se construit pas. EN: not a register question; the sentence does not build."),
  ctl('La raison', 'Pourquoi la personne ne peut-elle pas être sujet ?',
    ['parce qu’elle arrive derrière à', 'parce que le verbe est irrégulier'], 0,
    "Seul un complément direct peut devenir sujet d'un passif. EN: only a direct object may become a passive subject."),
  ctl('La sortie', 'Que dis-tu à la place ?',
    ['une phrase au pronominal', 'le verbe à l’infinitif', 'on plus le pronom'], 2,
    "On m'a donné, on nous a demandé, on lui a offert. EN: on plus the pronoun."),
], ['donner', 'on']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Le passif impossible',
    opener: {
      line: "« I was given a book » n'a pas de traduction directe : voici la phrase que le français construit à la place. EN: I was given a book has no direct translation: here is what French builds instead.",
      imageRef: 'lessons/voix-passive/act09.jpg',
    },
    sections: [],
    milestone: "Tu reconnais les huit verbes en à et tu sors par on sans hésiter. EN: You can spot the eight à-verbs and reach for on without hesitating.",
    estScreens: 32, restPoints: ['a9-tableau'],
  },
  sections: [A9_HISTOIRE, A9_REGLE, A9_TABLEAU, A9_CONSTRUIRE, A9_POSSIBLE, A9_CHOISIR, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — CHOISIR TON OUTIL
 *
 *  Four tools, one job: not naming the doer. The act is a choice drill, not
 *  a new rule, and it is where the four acts before it are put side by side.
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET, by ear: the same four events, told four ways. */
const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quatre outils, huit phrases',
  frSub: 'Reconnais l’outil à l’oreille',
  lines: [
    ln(E(1162)), ln(E(1163)), ln(E(1164)), ln(E(1166)),
    ln(E(1168)), ln(E(1170)), ln(E(1172)), ln(E(1174)),
  ],
  questions: [
    { q: 'Les deux premières phrases parlent-elles de la même salle ?', opts: ['Oui, avec deux outils différents', 'Non, de deux salles'], correct: 0, why: 'on, puis le passif. EN: on, then the passive.' },
    { q: 'Troisième phrase : qui a réparé la voiture ?', opts: ['la personne qui parle', 'quelqu’un d’autre, et elle l’a demandé'], correct: 1, why: 'se faire réparer : tu le demandes, un autre le fait. EN: you arrange it, somebody else does it.' },
    { q: 'Quatrième phrase : combien de temps prend la réparation en général ?', opts: ['une heure', 'une journée'], correct: 0, why: '« ça se répare en une heure » : un usage. EN: a general fact.' },
    { q: 'Sixième phrase : le téléphone a-t-il été volé à elle ?', opts: ['Non, à quelqu’un d’autre', 'Oui'], correct: 1, why: '« elle s’est fait voler son téléphone ». EN: she had her phone stolen.' },
    { q: 'Dans ces huit phrases, combien nomment celui qui a fait la chose ?', opts: ['aucune', 'deux', 'quatre'], correct: 0, why: "Les quatre outils font le même travail. EN: all four tools do the same job." },
  ],
  audio: REC('rec-b1-18-quatre-ecoute'),
  say: REFRAME,
  terms: ['on', 'sefaire', 'pronominal'],
};

/** NAME: the four, one card each. */
const A10_QUATRE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-quatre',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-on',
  title: 'Tes quatre outils',
  frSub: 'Le même travail, quatre formes',
  hint: 'Quatre cartes, une par outil. Regarde à qui tu parles.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['passif', 'on', 'sefaire'],
  cards: [
    {
      head: 'Tu écris quelque chose d’officiel', label: 'le passif',
      fr: src(E(1168)).fr,
      sub: rsOf(E(1168)),
      body: "Un compte rendu, un avis, un courriel à un service. Personne n'est nommé et personne ne le demande. EN: a report, a notice, an email to an office.",
    },
    {
      head: 'Tu parles à quelqu’un', label: 'on',
      fr: src(E(1169)).fr,
      sub: rsOf(E(1169)),
      body: "Le réflexe de la bouche. Deux mots de moins, et rien à accorder. EN: the spoken reflex: two words fewer and nothing to agree.",
    },
    {
      head: 'La chose t’est arrivée', label: 'se faire',
      fr: src(E(1170)).fr,
      sub: rsOf(E(1170)),
      body: "Tu es dans la phrase, comme sujet, et pourtant tu n'as rien fait. EN: you are in the sentence as the subject, and you did nothing.",
    },
    {
      head: 'C’est vrai en général', label: 'le pronominal',
      fr: src(E(1172)).fr,
      sub: rsOf(E(1172)),
      body: "Pas un jour, pas une personne : l'usage du monde. EN: no day, no person, just how things are.",
    },
  ],
};

/** BUILD: put each sentence with its tool. */
const A10_TRIER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-trier',
  layer: 'core',
  size: 'lg',
  title: 'Range chaque phrase sous son outil',
  groups: [
    grp('Ce qui s’écrit', [
      it(E(1163), 'un compte rendu de travaux'),
      it(E(1168), 'un bilan de quartier'),
      it(E(1174), 'un panneau devant la salle'),
      it('fr.b1.maison.064', 'et une annonce immobilière'),
    ], chk(
      'Ces quatre phrases sortiraient-elles bien dans une conversation ?',
      ['Non, elles sonnent écrites.', 'Oui, sans problème.'], 0,
      "Chacune vient d'un texte, pas d'une bouche. EN: each comes from a text, not a mouth.")),
    grp('Ce qui se dit', [
      it(E(1162), 'à un collègue, lundi matin'),
      it(E(1169), 'à un voisin, dans la rue'),
      it(E(1167), 'au garage, au téléphone'),
      it('fr.a2.verbes.404', 'et au bord de l’eau'),
    ], chk(
      'Quel outil emploient ces quatre phrases ?',
      ['se faire', 'le pronominal', 'on'], 2,
      "on, quatre fois. EN: on, four times.")),
    ctl('Le troisième outil', "« Elle s'est fait voler son téléphone dans le bus. » Quel outil ?",
      ['le passif', 'se faire', 'le pronominal'], 1,
      "Elle est sujet, et elle n'a rien fait. EN: she is the subject and she did nothing."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passif', 'on', 'sefaire'],
};

/** The trick a teacher gives you, with the reason that stops it being folklore. */
const A10_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a10-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    {
      hack: 'Demande-toi si ta phrase pourrait être imprimée sur une porte.',
      why: "Si oui, garde le passif. Si non, tu es en train de parler, donc on. EN: if it could be printed on a door, keep the passive.",
    },
    {
      hack: 'Si tu es dans l’histoire et que tu n’as rien fait, prends se faire.',
      why: "C'est le seul outil qui te met sujet sans te rendre responsable. EN: it is the only tool that makes you the subject without making you the doer.",
    },
    {
      hack: 'Si ta phrase n’a pas de date, essaie le pronominal.',
      why: "Un usage sans date se dit avec se : ça se fait, ça se vend, ça se prépare. EN: a dateless custom takes se.",
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['on', 'sefaire', 'pronominal'],
};

/** CHOOSE: the situation decides. */
const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La situation décide',
  groups: [
    grp('Le même trottoir, deux fois', [
      it(E(1168), 'dans le journal du quartier'),
      it(E(1169), 'à ton voisin, sur le pas de la porte'),
      it(E(1166), 'ce que dit le garagiste en général'),
      it(E(1167), 'ce qu’il te dit, à toi, au téléphone'),
    ], chk(
      'Qu’est-ce qui change entre les deux phrases de chaque paire ?',
      ['le sens', 'la situation'], 1,
      "Même fait, deux lecteurs. EN: same fact, two readers.")),
    grp('Quatre situations', [
      free('Tu écris au syndic de l’immeuble.', 'You are writing to the building manager.', 'le passif'),
      free('Tu racontes ta journée à un ami.', 'You are telling a friend about your day.', 'on'),
      free('Tu expliques pourquoi tu n’as plus de téléphone.', 'You explain why you no longer have a phone.', 'se faire'),
      free('Tu expliques comment marche ce service.', 'You explain how this service works.', 'le pronominal'),
    ], chk(
      'Ces quatre outils cachent-ils l’auteur aussi bien les uns que les autres ?',
      ['Oui, aucun ne nomme personne.', 'Non, seul le passif y arrive.'], 0,
      "C'est le registre qui les sépare, pas le sens. EN: register separates them, not meaning.")),
    ctl('Le dernier test', 'Tu ne sais pas lequel choisir. Que regardes-tu en premier ?',
      ['le verbe', 'à qui tu parles', 'le temps'], 1,
      "L'affiche, ou la bouche. EN: the notice, or the mouth."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['on', 'affiche'],
};

const A10_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a10-dictee',
  layer: 'core',
  title: 'Écris les six phrases que tu entends',
  frSub: 'Les quatre outils mélangés',
  itemIds: dicteeFor(10),
  audio: AUDIO,
  say: REFRAME,
  terms: ['passif', 'sefaire'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le point commun', 'Qu’est-ce que les quatre outils ont en commun ?',
    ['ils sont tous écrits', 'aucun ne nomme l’auteur'], 1,
    "C'est leur seul travail commun. EN: that is their one shared job."),
  ctl('Le choix', 'Qu’est-ce qui décide entre eux ?',
    ['la situation et le registre', 'le verbe', 'le temps'], 0,
    "À qui tu parles, et si tu écris. EN: who you are talking to, and whether you are writing."),
  ctl('Le quatrième', 'Quel outil emploies-tu pour un usage sans date ?',
    ['le pronominal', 'se faire'], 0,
    "Ça se fait, ça se vend, ça se prépare. EN: ça se fait, ça se vend, ça se prépare."),
], ['on', 'pronominal']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Tes quatre outils',
    opener: {
      line: "Quatre façons de ne nommer personne : ici tu apprends à choisir la bonne en une seconde. EN: Four ways of naming nobody: here you learn to pick the right one in a second.",
      imageRef: 'lessons/voix-passive/act10.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre le passif, on, se faire et le pronominal d'après la situation. EN: You pick between the passive, on, se faire and the pronominal by the situation.",
    estScreens: 30, restPoints: ['a10-hacks'],
  },
  sections: [A10_ECOUTE, A10_QUATRE, A10_TRIER, A10_HACKS, A10_CHOISIR, A10_DICTEE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — ÉCRIRE UNE CONSIGNE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET the shape one last time, as the model the learner will imitate. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un mode d’emploi modèle',
  frSub: 'La forme que tu vas écrire',
  text: CONSIGNE_TEXT,
  glossary: [
    { word: 'la personne de garde', en: 'the person on duty', note: 'Celle qui répond aux problèmes ce jour-là.' },
    { word: 'le frigo', en: 'the fridge', note: 'Le mot de tous les jours pour un réfrigérateur.' },
    { word: 'jetés', en: 'thrown out', note: 'Mis à la poubelle. EN: put in the bin.' },
    { word: "à l'avance", en: 'in advance', note: 'Avant, pas au dernier moment.' },
    { word: 'sans préavis', en: 'without notice', note: "On ne te prévient pas avant. EN: no warning first." },
  ],
  questions: [
    { q: 'Combien de phrases nomment quelqu’un ?', a: "Aucune. « la personne de garde » est une fonction, pas un nom." },
    { q: 'Quels temps de être trouves-tu dans ce texte ?', a: 'est, sont, doit être, peut être, a été. Le présent domine, parce que ce sont des règles.' },
    { q: 'Où est le pronominal, et pourquoi là ?', a: "« Toute réservation se fait à l'avance » : c'est un usage général, pas un événement." },
    { q: 'Pourquoi « on prévient la personne de garde » et pas un passif ?', a: "Parce que c'est TOI qui fais la chose. Le passif dirait qui subit, et là c'est toi qui agis." },
    { q: 'Quelles quatre choses le texte fait-il, dans l’ordre ?', a: 'Une règle au présent, une obligation, une conséquence, puis une phrase avec on pour ce que tu fais toi-même.' },
  ],
  audio: REC('rec-b1-18-modele'),
  say: REFRAME,
  terms: ['consigne', 'passif'],
};

/** NAME: how to plan a hundred words of rules. */
const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Cinq étapes pour écrire ta consigne',
  steps: [
    '1. Choisis un lieu partagé : une cuisine, une salle, un local à vélos. EN: pick a shared place.',
    "2. Écris deux règles au présent passif : ce qui est ouvert, servi, fermé. EN: two present passives.",
    '3. Ajoute une obligation avec doit être ou doivent être. EN: one obligation with doit être.',
    '4. Donne une conséquence au futur : ce qui sera enlevé, jeté ou annulé. EN: one consequence in the future.',
    "5. Finis par une phrase avec on ou un pronominal, pour ce que la personne fait. EN: close with on or a pronominal.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consigne', 'temps'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  title: 'Où tu vas t’en servir',
  cases: [
    { situation: 'Tu écris au syndic pour signaler une panne', fr: "L'ascenseur a été arrêté deux fois cette semaine.", en: 'The lift has been stopped twice this week.' },
    { situation: 'Tu expliques la même panne à ta voisine', fr: "On a arrêté l'ascenseur deux fois cette semaine.", en: 'They stopped the lift twice this week.' },
    { situation: 'Tu écris la consigne de la cuisine du bureau', fr: 'Le matériel doit être rangé après usage.', en: 'Equipment must be put away after use.' },
    { situation: 'Tu expliques à un stagiaire comment ça marche ici', fr: 'Ça se range dans l’armoire du fond.', en: 'It goes in the cupboard at the back.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consigne', 'on'],
};

/** CHOOSE, out loud: six turns with the building manager. */
const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec le syndic',
  setting: "Le lendemain de la panne. Tu appelles le syndic de l'immeuble. Il est pressé, il prend des notes, et il écrit un avis pour le hall à partir de ce que tu dis.",
  turns: [
    {
      ai: "Bonjour, syndic Lemoine. Qu'est-ce qui se passe chez vous ?",
      en: 'Hello, Lemoine, building management. What is going on at your place?',
      user: "On a arrêté l'ascenseur deux fois cette semaine.",
      userEn: 'They stopped the lift twice this week. (Speaking, so on rather than the passive.)',
      alts: [
        { fr: "On a coupé l'ascenseur deux fois cette semaine.", en: 'They cut the lift off twice this week.' },
        { fr: "L'ascenseur a été arrêté deux fois cette semaine.", en: 'The lift was stopped twice this week. (Correct, and it sounds like a written report.)' },
      ],
    },
    {
      ai: "Est-ce que quelqu'un vous a prévenus ?",
      en: 'Did anybody warn you?',
      user: 'On nous a prévenus la veille au soir, par un papier dans le hall.',
      userEn: 'We were told the night before, by a note in the hall. (The person cannot be the subject, so on.)',
      alts: [
        { fr: 'On nous a prévenus très tard.', en: 'We were told very late.' },
        { fr: 'Un papier a été affiché dans le hall la veille.', en: 'A note was posted in the hall the day before. (The thing can be the subject, so the passive works here.)' },
      ],
    },
    {
      ai: 'Et le local à vélos, il est toujours fermé ?',
      en: 'And the bike room, is it still closed?',
      user: 'Oui, il est fermé depuis vendredi.',
      userEn: 'Yes, it has been closed since Friday. (A state, so the present passive.)',
      alts: [
        { fr: 'Oui, il est encore fermé.', en: 'Yes, it is still closed.' },
        { fr: "Oui, on l'a fermé vendredi et personne ne l'a rouvert.", en: 'Yes, they closed it on Friday and nobody has reopened it.' },
      ],
    },
    {
      ai: 'Il y a eu des dégâts pendant les travaux ?',
      en: 'Was there any damage during the work?',
      user: 'Je me suis fait abîmer mon vélo par un ouvrier.',
      userEn: 'A workman damaged my bike. (It happened to me, so se faire, and par earns its place here.)',
      alts: [
        { fr: "On m'a abîmé mon vélo.", en: 'They damaged my bike.' },
        { fr: 'Mon vélo a été abîmé pendant les travaux.', en: 'My bike was damaged during the work. (Correct, and it leaves you out of the sentence.)' },
      ],
    },
    {
      ai: 'Je vais écrire un avis pour le hall. Comment je formule ça ?',
      en: 'I am going to write a notice for the hall. How should I word it?',
      user: "L'ascenseur sera arrêté du lundi au mercredi, sans préavis supplémentaire.",
      userEn: 'The lift will be stopped from Monday to Wednesday, with no further notice. (Written now, so the passive and a fixed formula.)',
      alts: [
        { fr: "L'ascenseur sera arrêté trois jours.", en: 'The lift will be stopped for three days.' },
        { fr: "Le local à vélos sera fermé jusqu'à vendredi.", en: 'The bike room will be closed until Friday.' },
      ],
    },
    {
      ai: "Et pour les vélos laissés dans le hall, qu'est-ce qu'on met ?",
      en: 'And for the bikes left in the hall, what do we put?',
      user: 'Les vélos laissés dans le hall seront enlevés sans préavis.',
      userEn: 'Bikes left in the hall will be removed without notice. (A future consequence, in the passive, naming nobody.)',
      alts: [
        { fr: 'Les vélos qui restent dans le hall seront enlevés.', en: 'Bikes that stay in the hall will be removed.' },
        { fr: 'Ça ne se fait pas, de laisser un vélo dans le hall.', en: 'Leaving a bike in the hall is not done. (True, and too chatty for a notice.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['on', 'sefaire', 'consigne'],
};

/** THE GRADED TASK. The unit outcome is tested here: write a short set of
 *  procedures that says what is done and names nobody. */
const A11_MISSION: Sec<'task'> = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris le règlement d’un lieu partagé',
  frSub: 'Mission écrite',
  brief: "Tu t'occupes d'un lieu partagé : la cuisine d'un bureau, une salle de réunion, un local à vélos ou une buanderie d'immeuble. Les gens ne savent pas comment ça marche. Écris le petit texte qui sera affiché à l'entrée.",
  briefEn: 'You look after a shared place: an office kitchen, a meeting room, a bike room or a laundry. Nobody knows how it works. Write the short text that will be posted at the entrance.',
  produce: "Écris une consigne de 90 à 130 mots, avec au moins quatre passifs à des temps différents, une obligation avec doit être ou doivent être, une conséquence au futur, une phrase avec on ou un verbe pronominal, et aucun nom de personne.",
  responseSpec: { kind: 'text', minWords: 90, maxWords: 130 },
  rubric: {
    criteria: [
      {
        key: 'passif',
        label: 'Des passifs bien formés',
        maxPoints: 4,
        descriptors: [
          "4 : Au moins quatre passifs, à au moins deux temps différents, et chaque participe s'accorde avec son sujet.",
          '3 : Quatre passifs ou presque, et une ou deux fins de participe qui hésitent. On lit sans s’arrêter.',
          "2 : Moins de quatre passifs, ou plusieurs accords faux, ou un passif construit avec avoir.",
          '1 : Presque aucun passif, ou des formes qu’on doit deviner.',
        ],
      },
      {
        key: 'outils',
        label: 'Les autres outils',
        maxPoints: 3,
        descriptors: [
          '3 : Une phrase avec on ou un pronominal, au bon endroit, et aucun passif impossible avec donner, dire ou demander.',
          '2 : Un des deux manque, ou la phrase avec on tombe là où un passif irait mieux.',
          '1 : Tout est au passif du début à la fin, ou il y a un passif impossible.',
        ],
      },
      {
        key: 'registre',
        label: 'Ça ressemble à une vraie consigne',
        maxPoints: 3,
        descriptors: [
          '3 : Aucun nom de personne, aucun par inutile, et au moins deux formules toutes faites (il est interdit de, doit être, sans préavis).',
          '2 : Le ton tient, avec un par de trop ou une phrase qui bavarde.',
          '1 : On dirait un message à un ami, ou quelqu’un est nommé.',
        ],
      },
      {
        key: 'tache',
        label: 'La mission complète',
        maxPoints: 2,
        descriptors: [
          '2 : Un vrai lieu partagé, entre 90 et 130 mots, avec une obligation ET une conséquence au futur.',
          '1 : Il manque un élément : pas d’obligation, pas de conséquence, ou moins de 90 mots.',
        ],
      },
    ],
  },
  scaffold: [
    'La salle est ouverte de...',
    'Le matériel doit être...',
    'Les ... sont ... chaque soir.',
    'ne sont pas admis',
    'seront enlevés sans préavis',
    'En cas de problème, on...',
    'Ce règlement peut être modifié',
    'Il est affiché à l’entrée.',
  ],
  modelAnswer: "RÈGLEMENT DE LA SALLE DE RÉUNION. La salle est ouverte de huit heures à dix-neuf heures. Elle doit être réservée à l'avance sur le tableau de l'entrée. Le matériel est rangé après chaque réunion et les chaises sont remises contre le mur. Les tasses sales ne sont pas laissées sur la table : elles se portent à la cuisine. Le tableau blanc est effacé avant de partir. En cas de problème technique, on prévient l'accueil. Les réservations qui ne sont pas utilisées sont annulées après quinze minutes. Ce règlement peut être modifié sans préavis. Il a été mis à jour en janvier et il est affiché à l'entrée.",
  modelAnswerEn: "MEETING ROOM RULES. The room is open from eight in the morning to seven in the evening. It must be booked in advance on the board by the door. Equipment is put away after every meeting and the chairs are put back against the wall. Dirty cups are not left on the table: they are taken to the kitchen. The whiteboard is wiped before you leave. If there is a technical problem, you tell reception. Bookings that are not used are cancelled after fifteen minutes. These rules may be changed without notice. They were updated in January and they are posted at the entrance.",
  watchFor: [
    {
      pattern: "Past participles left unchanged after être, so the ending does not match the subject (les chaises sont remis, la salle est ouvert).",
      criterion: 'passif',
      feedback: "Le participe finit comme un adjectif : regarde le sujet avant d'écrire la dernière lettre. Les chaises sont remises.",
      ref: 'a2-accord',
    },
    {
      pattern: 'The passive built with avoir instead of être (les tasses ont laissées, la salle a ouverte).',
      criterion: 'passif',
      feedback: 'Le passif prend toujours être : les tasses sont laissées, la salle est ouverte.',
      ref: 'a2-erreurs',
    },
    {
      pattern: 'Every passive in the present, with no future consequence and no past update, so the text has only one tense.',
      criterion: 'passif',
      feedback: 'Fais bouger être : sera enlevé pour la suite, a été mis à jour pour la date.',
      ref: 'a3-tableau',
    },
    {
      pattern: "An infinitive where the participle belongs, because -er and -é sound the same (la salle est fermer à vingt heures).",
      criterion: 'passif',
      feedback: "Après être, c'est le participe : la salle est fermée à vingt heures.",
      ref: 'a2-erreurs',
    },
    {
      pattern: 'être dropped after a modal (le matériel doit rangé, les bagages doivent enregistrés).',
      criterion: 'passif',
      feedback: 'Le modal prend le temps et être reste à l’infinitif : doit être rangé.',
      ref: 'a5-formules',
    },
    {
      pattern: 'A par plus an agent on a notice, where the name adds nothing (la salle est nettoyée par le personnel).',
      criterion: 'registre',
      feedback: "Sur une affiche, on n'ajoute par que si le nom apprend quelque chose. Enlève-le.",
      ref: 'a4-choisir',
    },
    {
      pattern: 'A named person, or a job title used like a name, so a general rule becomes one person’s decision.',
      criterion: 'registre',
      feedback: 'Une consigne parle des choses. Enlève le nom et la règle vaut pour tout le monde.',
      ref: 'a5-erreurs',
    },
    {
      pattern: 'The whole text written with on, so it reads like a message to a friend rather than a notice.',
      criterion: 'outils',
      feedback: 'Garde on pour une phrase, celle où la personne agit. Le reste est au passif.',
      ref: 'a6-choisir',
    },
    {
      pattern: 'No on and no pronominal anywhere, so a hundred words run on the passive alone and the text goes heavy.',
      criterion: 'outils',
      feedback: 'Ajoute une phrase : en cas de problème, on prévient l’accueil. Ou : ça se range dans l’armoire.',
      ref: 'a8-choisir',
    },
    {
      pattern: "An impossible passive on an indirect object (les visiteurs sont donnés un badge, chacun est dit de signer).",
      criterion: 'outils',
      feedback: 'La personne ne peut pas être sujet avec donner ou dire. Écris on donne un badge à chaque visiteur.',
      ref: 'a9-construire',
    },
    {
      pattern: 'Under 90 words, no obligation with doit être, no future consequence, or a place that is not shared.',
      criterion: 'tache',
      feedback: 'Relis la mission : un lieu partagé, 90 à 130 mots, une obligation et une conséquence au futur.',
      ref: 'a11-plan',
    },
  ],
  graderNotes: [
    'A title line in capitals (RÈGLEMENT DE LA CUISINE) is normal for this genre and does NOT count toward the word budget.',
    'Count the body only, with 10% tolerance (81 to 143) before criterion « tache » loses its point.',
    'A function used instead of a name (la personne de garde, le responsable du matériel, l’accueil) is CORRECT and must not be marked as naming somebody.',
    '« il est interdit de » and « les visiteurs sont priés de » are fixed formulas, not passives to be counted twice: they count once each toward criterion « passif ».',
    'A present passive that describes a state (la salle est ouverte) and one that describes a repeated action (les tasses sont lavées) are both correct here; do not ask for a distinction the lesson did not teach.',
    'The subjunctive belongs to lessons 14 to 16 in B1 and is not taught here. Do not mark its absence, and do not mark a correct one as an error.',
    'Accept regional vocabulary (courriel and email, le frigo and le réfrigérateur, la buanderie and la salle de lavage).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['consigne', 'passif', 'on'],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes quatre outils à voix haute',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...IMPORT_IDS.filter((id) => !NOT_SPEAKABLE.includes(id)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['on', 'sefaire'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-consignes',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'le passif', v: 'être + participe accordé', say: src(E(1015)).fr,
      detail: { title: 'La forme', body: "Le participe finit comme un adjectif et suit le sujet. EN: the participle ends like an adjective.", say: src(E(1017)).fr } },
    { k: 'les temps', v: 'est, a été, était, sera, serait', say: src(E(1038)).fr,
      detail: { title: 'Les temps', body: "Être porte le temps ; le participe ne bouge pas. EN: être carries the tense.", say: src(E(1036)).fr } },
    { k: 'par', v: "seulement si le nom apprend quelque chose", say: src(E(1059)).fr,
      detail: { title: "L'auteur", body: "Neuf passifs sur dix n'ont pas de par. EN: nine out of ten have no par.", say: src(E(1060)).fr } },
    { k: 'on', v: 'à l’oral, presque toujours', say: src(E(1090)).fr,
      detail: { title: 'La bouche', body: "on prend la forme de il, et jamais de par. EN: on takes the il form and never a par.", say: src(E(1093)).fr } },
    { k: 'se faire', v: 'ce qui t’arrive, à toi', say: src(E(1110)).fr,
      detail: { title: 'se faire', body: "fait ne s'accorde jamais, et le verbe suivant reste infinitif. EN: fait never agrees.", say: src(E(1111)).fr } },
    { k: 'ça se dit', v: 'un usage, sans date et sans personne', say: src(E(1127)).fr,
      detail: { title: 'Le pronominal', body: "Pour les choses seulement, jamais pour une personne. EN: things only, never people.", say: src(E(1129)).fr } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passif', 'on', 'sefaire'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu construis un passif à cinq temps, tu sais quand mettre par, et tu as trois autres façons de ne nommer personne. Le piège qui reste est le plus discret : une phrase écrite qui sort de ta bouche dans un couloir. Avant l'examen, relis ta consigne et souligne chaque verbe. À côté de chacun, écris l'outil : passif, on, se faire, pronominal. Si tu n'en as qu'un seul sur toute la page, la leçon n'a pas encore fini son travail. EN: Underline every verb in your notice and label its tool; one tool over a whole page means the lesson has not landed yet.",
  stats: [
    { k: 'Le passif', v: 'être + participe accordé' },
    { k: 'Les temps', v: 'être porte le temps' },
    { k: "L'auteur", v: 'par, presque jamais' },
    { k: 'À l’oral', v: 'on, se faire, ça se dit' },
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
    { front: 'le passif', back: 'être + participe passé', say: src(E(1015)).fr },
    { front: "l'accord", back: 'le participe suit le sujet', say: src(E(1017)).fr },
    { front: 'le temps', back: 'il est porté par être', say: src(E(1036)).fr },
    { front: 'le futur du passif', back: 'sera, seront + participe', say: src(E(1038)).fr },
    { front: "l'auteur", back: 'par, seulement s’il apprend quelque chose', say: src(E(1059)).fr },
    { front: 'à l’oral', back: 'on + la forme de il', say: src(E(1090)).fr },
    { front: 'ce qui t’arrive', back: 'se faire + infinitif', say: src(E(1110)).fr },
    { front: 'un usage général', back: 'le verbe au pronominal', say: src(E(1129)).fr },
    { front: 'I was given a book', back: 'on m’a donné un livre', say: src(E(1143)).fr },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Le passif, en résumé',
  body: `${REFRAME} Tu as maintenant quatre façons de ne nommer personne, et tu choisis d'après la situation, pas d'après le verbe. La prochaine leçon garde cette idée de rapporter un fait et te donne le discours rapporté : dire ce que quelqu'un a dit, sans le citer mot pour mot. EN: Next lesson: reporting what somebody said.`,
  points: [
    "Le passif : être plus le participe, accordé avec le sujet.",
    "par seulement si le nom apprend quelque chose au lecteur.",
    "À l'oral, on gagne presque toujours.",
    "se faire pour ce qui t'arrive, le pronominal pour ce qui se fait.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['passif', 'on', 'sefaire'],
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight, one per
 *  act from act 1 to act 10 plus an integration round on the task itself.
 *  Each round's target is a distinct errorTrigger, so a failed round fires
 *  that round's own drill.
 *
 *  `fold()` strips accents, commas and apostrophes, so no answer turns on
 *  one. Participle agreement differs by LETTERS (écrit / écrite / écrits),
 *  which survives folding. Every typeIn and errorSpot carries `prompt`,
 *  every listenChoose carries `say`. */

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
      id: 'r1-registre', label: 'La porte et la bouche', targets: ['passif-partout'],
      questions: [
        mc('Où lis-tu « Le magasin est fermé le dimanche » ?', ['dans un message à un ami', 'sur une vitrine'], 1, "C'est la langue des portes. EN: this is door language.", 'a1-avis'),
        mc('Tu parles à ta voisine dans l’escalier. Quelle phrase sort de ta bouche ?', ['On a fermé la rue pour le marché.', 'La rue a été fermée pour le marché.'], 0, 'À l’oral, on gagne. EN: out loud, on wins.', 'a1-reperer'),
        mc('Le passif est-il une faute à l’oral ?', ['oui, toujours', 'seulement au passé', 'non, mais il sonne officiel'], 2, "C'est un registre, pas une faute. EN: a register, not an error.", 'a1-check'),
        tI('Dis la même chose avec on.', 'La réunion a été annulée.', 'On a annulé la réunion.', 'La chose redevient complément. EN: the thing goes back to object.', 'a1-paires'),
        tI('Dis la même chose avec on.', 'Le colis a été livré devant la porte.', 'On a livré le colis devant la porte.', 'Même information, moins de mots. EN: same information, fewer words.', 'a1-paires'),
        tI('Écris la phrase qui irait sur une affiche.', 'On ferme le magasin le dimanche.', 'Le magasin est fermé le dimanche.', 'Une vitrine déclare, elle ne bavarde pas. EN: a shop window declares.', 'a1-usages'),
        eS('On a réservé la salle par le directeur.', 'La salle a été réservée par le directeur.', "on est déjà l'auteur, donc pas de par. Avec un auteur nommé, c'est le passif. EN: on is already the doer.", 'a1-scene'),
        lC('Écoute. Cette phrase vient-elle d’une porte ou d’une bouche ?', 'Le formulaire doit être signé avant vendredi.', ['une porte', 'une bouche', 'une radio'], 0, 'doit être signé : une formule de formulaire. EN: a form formula.', 'a1-avis'),
      ],
    },
    {
      id: 'r2-accord', label: 'La fin du participe', targets: ['accord-oublie'],
      questions: [
        mc('Complète : « La lettre est ... en français. »', ['écrit', 'écrits', 'écrite'], 2, 'Sujet féminin singulier. EN: feminine singular subject.', 'a2-accord'),
        mc('Complète : « Les documents sont ... chaque lundi. »', ['envoyé', 'envoyés', 'envoyée'], 1, 'Sujet masculin pluriel. EN: masculine plural subject.', 'a2-construire'),
        mc('Quel auxiliaire le passif prend-il ?', ['avoir', 'être', 'aller'], 1, 'Toujours être, à tous les temps. EN: always être.', 'a2-check'),
        mc('Qu’est-ce qui décide de la fin du participe ?', ['le sujet', 'le verbe à l’infinitif'], 0, 'Le sujet, et rien d’autre. EN: the subject, and nothing else.', 'a2-choisir'),
        tI('Mets le verbe au passif présent.', 'Les portes (fermer) à vingt heures.', 'Les portes sont fermées à vingt heures.', 'sont pour le pluriel, es pour le féminin pluriel. EN: sont plus es.', 'a2-accord'),
        eS('Les places ont numérotées.', 'Les places sont numérotées.', "avoir arrive tout seul au passé composé ; le passif prend être. EN: the passive takes être.", 'a2-erreurs'),
        eS('La salle est nettoyer tous les soirs.', 'La salle est nettoyée tous les soirs.', "-er et -ée se prononcent pareil ; après être, c'est le participe. EN: after être it is the participle.", 'a2-erreurs'),
        lC('Écoute. Le sujet est-il au pluriel ?', 'Les clés sont gardées à la réception.', ['non', 'on ne peut pas savoir', 'oui'], 2, 'sont et gardées le disent deux fois. EN: sont and gardées both say so.', 'a2-histoire'),
      ],
    },
    {
      id: 'r3-temps', label: 'Les cinq temps', targets: ['temps-sur-participe'],
      questions: [
        mc('« Le magasin ... fermé pendant deux mois. »', ['est', 'a été', 'sera'], 1, 'Deux mois donnés et finis. EN: a stated, finished stretch.', 'a3-tableau'),
        mc('Dans « a été envoyé », quel mot porte le temps ?', ['a été', 'envoyé'], 0, 'Le participe ne porte jamais le temps. EN: the participle never carries the tense.', 'a3-check'),
        mc('« Elle est arrivée à huit heures. » Est-ce un passif ?', ['oui', 'seulement à l’écrit', 'non'], 2, "arriver n'a pas de passif : être est son auxiliaire. EN: arriver has no passive.", 'a3-piege'),
        tI('Mets la phrase au futur.', 'La route est fermée.', 'La route sera fermée.', 'Seul être bouge. EN: only être moves.', 'a3-construire'),
        tI('Mets la phrase au passé composé.', 'Les résultats sont publiés.', 'Les résultats ont été publiés.', 'ont été, et publiés ne change pas. EN: ont été, and publiés stays.', 'a3-construire'),
        tI('Mets la phrase au conditionnel.', 'Ta demande est acceptée plus vite en ligne.', 'Ta demande serait acceptée plus vite en ligne.', "serait annonce une hypothèse. EN: serait announces a hypothesis.", 'a3-temps'),
        eS('Le magasin est fermé lundi prochain.', 'Le magasin sera fermé lundi prochain.', "Lundi prochain n'est pas encore arrivé. EN: next Monday has not happened yet.", 'a3-piege'),
        lC('Écoute. La fermeture est-elle déjà arrivée ?', 'Le magasin sera fermé lundi.', ['oui', 'non'], 1, 'sera regarde devant. EN: sera looks forward.', 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-agent', label: "L'auteur", targets: ['par-partout'],
      questions: [
        mc('Sur dix passifs français, combien portent un par ?', ['environ un', 'presque tous', 'la moitié'], 0, "Le par est l'exception. EN: par is the exception.", 'a4-compter'),
        mc('« Le colis a été livré par le livreur. » Que fais-tu de par le livreur ?', ['tu le gardes', 'tu l’enlèves'], 1, 'Le verbe le dit déjà. EN: the verb already says it.', 'a4-erreurs'),
        mc('« deux nuits par an » : par nomme-t-il un auteur ?', ['oui', 'seulement au pluriel', 'non'], 2, 'Ici par donne une fréquence. EN: here par gives a frequency.', 'a4-lecture'),
        mc('Quand ajoutes-tu par ?', ['quand le nom apprend quelque chose', 'quand tu connais l’auteur'], 0, "Tu connais souvent l'auteur et tu l'écris rarement. EN: knowing is not a reason.", 'a4-check'),
        tI('Enlève ce qui ne sert à rien.', 'Mon vélo a été retrouvé par quelqu’un près du pont.', 'Mon vélo a été retrouvé près du pont.', "quelqu'un n'est le nom de personne. EN: quelqu’un is nobody’s name.", 'a4-erreurs'),
        eS('Ce roman a été écrit de une Québécoise.', 'Ce roman a été écrit par une Québécoise.', 'Pour une action, c’est par. EN: actions take par.', 'a4-erreurs'),
        eS('La tour a été construite par deux ans.', 'La tour a été construite en deux ans.', 'Une durée prend en, pas par. EN: a duration takes en.', 'a4-erreurs'),
        lC('Écoute. Le nom qui suit par apprend-il quelque chose ?', 'La tour a été construite par mille ouvriers.', ['oui', 'non'], 0, 'Mille ouvriers, ce n’est pas rien. EN: a thousand workers is worth saying.', 'a4-par'),
      ],
    },
    {
      id: 'r5-maisons', label: 'Les quatre maisons', targets: ['registre-melange'],
      questions: [
        mc('Où NE trouves-tu presque jamais de passif ?', ['dans un règlement', 'dans un bulletin', 'dans une conversation'], 2, 'Les trois autres en vivent. EN: the other three live on it.', 'a5-check'),
        mc('Comment interdis-tu quelque chose sur un panneau ?', ['on ne doit pas fumer', 'il est interdit de fumer'], 1, "La formule impersonnelle fait officiel. EN: the impersonal formula sounds official.", 'a5-formules'),
        mc('Dans « doivent être enregistrés », où est le temps ?', ['sur être', 'sur enregistrés', 'sur devoir'], 2, "Le modal prend le temps. EN: the modal takes the tense.", 'a5-formules'),
        tI('Écris la phrase complète du panneau.', 'Il est ___ de fumer dans les chambres. (interdire)', 'Il est interdit de fumer dans les chambres.', 'La formule la plus fréquente du genre. EN: the commonest formula in the genre.', 'a5-lieux'),
        tI('Mets le verbe à la forme du règlement.', 'Le matériel doit (ranger) après usage.', 'Le matériel doit être rangé après usage.', 'doit être plus le participe. EN: doit être plus the participle.', 'a5-formules'),
        tI('Mets le verbe au futur passif.', 'Votre demande (traiter) dans les dix jours.', 'Votre demande sera traitée dans les dix jours.', 'sera pour le futur, traitée pour le sujet. EN: sera for the tense, traitée for the subject.', 'a5-trier'),
        eS('Les bagages doivent enregistrés une heure avant.', 'Les bagages doivent être enregistrés une heure avant.', "Le petit mot être disparaît facilement, et il est obligatoire. EN: être is easy to drop and it is required.", 'a5-erreurs'),
        lC('Écoute. Où lis-tu cette phrase ?', 'Les poubelles sont ramassées le mardi matin.', ['dans un hall d’immeuble', 'dans un message à un ami'], 0, "Un avis pour tous les résidents. EN: a notice for every resident.", 'a5-radio'),
      ],
    },
    {
      id: 'r6-on', label: 'Le réflexe on', targets: ['on-mal-forme'],
      questions: [
        mc('Quelle forme de verbe suit on ?', ['la forme de ils', 'la forme de il', 'la forme de nous'], 1, 'on a, on est, on va. EN: on takes the il form.', 'a6-check'),
        mc('on cache-t-il l’auteur aussi bien que le passif ?', ['non, il en montre un peu', 'seulement à l’écrit', 'oui, complètement'], 2, "Personne n'est nommé dans les deux cas. EN: nobody is named either way.", 'a6-check'),
        mc('Peux-tu écrire on dans un règlement d’immeuble ?', ['oui, c’est plus clair', 'non, le passif'], 1, "Un règlement s'écrit au passif. EN: rules are written in the passive.", 'a6-choisir'),
        mc('« On a perdu ma valise ... . » Complète.', ['à l’aéroport', 'par la compagnie'], 0, "on est déjà l'auteur : pas de par. EN: on is already the doer.", 'a6-piege'),
        tI('Dis la même chose avec on.', 'Ma valise a été perdue à l’aéroport.', 'On a perdu ma valise à l’aéroport.', 'La valise redevient complément. EN: the suitcase goes back to object.', 'a6-tableau'),
        eS('On ont fermé la rue pour le marché.', 'On a fermé la rue pour le marché.', 'on prend toujours la forme de il. EN: on always takes the il form.', 'a6-piege'),
        eS('On construisent une piste cyclable ici.', 'On construit une piste cyclable ici.', 'Le verbe reste au singulier, même si on veut dire des gens. EN: the verb stays singular.', 'a6-piege'),
        lC('Écoute. Qui a volé le vélo ?', 'On a volé mon vélo.', ['on ne le dit pas', 'un voisin'], 0, 'on ne nomme personne, comme le passif. EN: on names nobody, like the passive.', 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-sefaire', label: 'se faire', targets: ['sefaire-accorde'],
      questions: [
        mc('Qui est le sujet de se faire ?', ['la chose', 'la personne à qui ça arrive'], 1, 'Je me suis fait voler mon vélo : le sujet, c’est je. EN: the subject is the person.', 'a7-check'),
        mc('Le mot fait s’accorde-t-il devant un infinitif ?', ['oui', 'seulement au féminin', 'jamais'], 2, "C'est l'exception de la famille des pronominaux. EN: the exception in the family.", 'a7-construire'),
        mc('se faire annonce-t-il toujours une mauvaise nouvelle ?', ['oui', 'non, tu peux l’avoir demandé'], 1, 'se faire couper les cheveux, se faire rembourser. EN: you may have arranged it.', 'a7-choisir'),
        tI('Écris la phrase au passé composé.', 'Je (se faire voler) mon vélo.', 'Je me suis fait voler mon vélo.', 'fait ne bouge pas, voler reste infinitif. EN: fait does not move.', 'a7-sefaire'),
        tI('Écris la phrase au passé composé.', 'Elle (se faire couper) les cheveux.', 'Elle s’est fait couper les cheveux.', 'fait, et non faite, devant un infinitif. EN: fait, not faite.', 'a7-construire'),
        tI('Écris la phrase au passé composé.', 'Nous (se faire livrer) le repas.', 'Nous nous sommes fait livrer le repas.', 'Deux nous, et fait invariable. EN: two nous, and fait invariable.', 'a7-exemples'),
        eS('Je me suis fait volé mon vélo.', 'Je me suis fait voler mon vélo.', "Après faire, c'est l'infinitif : voler. EN: after faire it is the infinitive.", 'a7-erreurs'),
        lC('Écoute. Est-ce une mauvaise nouvelle ?', 'Elle s’est fait rembourser son billet.', ['non, elle l’a demandé', 'oui'], 0, 'se faire couvre aussi ce que tu obtiens. EN: se faire also covers what you obtain.', 'a7-choisir'),
      ],
    },
    {
      id: 'r8-pronominal', label: 'Ça se dit', targets: ['pronominal-manquant'],
      questions: [
        mc('Le pronominal passif accepte-t-il une personne comme sujet ?', ['oui', 'seulement au pluriel', 'non'], 2, 'Il est réservé aux choses. EN: things only.', 'a8-check'),
        mc('« Ce plat se prépare la veille. » Qui prépare ?', ['le plat', 'on ne le dit pas'], 1, "Le plat ne prépare rien. EN: the dish prepares nothing.", 'a8-construire'),
        mc('Le pronominal convient-il pour un événement daté ?', ['non, il décrit un usage', 'oui'], 0, 'Pour samedi dernier, dis on. EN: for last Saturday, say on.', 'a8-choisir'),
        mc('Comment dis-tu qu’une chose ne se fait pas ici ?', ['ça ne se fait pas ici', 'ça n’est pas fait ici'], 0, "C'est une formule figée. EN: it is a fixed phrase.", 'a8-exemples'),
        tI('Écris la phrase au pronominal.', 'Le vin blanc (se servir) frais.', 'Le vin blanc se sert frais.', "Un usage général, pas un ordre. EN: a general custom, not an order.", 'a8-pronominal'),
        eS('Ça se ne fait pas ici.', 'Ça ne se fait pas ici.', 'ne passe devant se. EN: ne comes before se.', 'a8-piege'),
        eS('Les billets se vend en ligne.', 'Les billets se vendent en ligne.', 'Le verbe suit le sujet, qui est au pluriel. EN: the verb follows the plural subject.', 'a8-construire'),
        lC('Écoute. Cette phrase parle-t-elle d’un jour précis ?', 'Le fromage se mange à la fin du repas.', ['oui', 'non, d’un usage'], 1, "Le pronominal décrit le monde. EN: the pronominal describes the world.", 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-piege', label: 'Le passif impossible', targets: ['passif-impossible'],
      questions: [
        mc('« Je suis donné un livre. » Est-ce du français ?', ['oui, mais familier', 'non, cette phrase n’existe pas'], 1, "Ce n'est pas une question de registre. EN: not a register question.", 'a9-check'),
        mc('Pourquoi la personne ne peut-elle pas devenir sujet ?', ['parce qu’elle arrive derrière à', 'parce que le verbe est irrégulier'], 0, "Seul un complément direct peut devenir sujet. EN: only a direct object can.", 'a9-regle'),
        mc('Combien de verbes de la leçon refusent la personne comme sujet ?', ['deux', 'tous les verbes français', 'huit'], 2, 'donner, dire, demander, offrir, promettre, permettre, répondre, conseiller. EN: eight, all with à.', 'a9-choisir'),
        tI('Écris la phrase française.', 'I was told to come back tomorrow.', 'On m’a dit de revenir demain.', 'On plus le pronom. EN: on plus the pronoun.', 'a9-construire'),
        tI('Écris la phrase française.', 'We were asked for our papers.', 'On nous a demandé nos papiers.', 'nous reste complément. EN: nous stays an object.', 'a9-construire'),
        tI('Écris la phrase française.', 'He was given a bike.', 'On lui a offert un vélo.', 'offrir à quelqu’un : la personne devient lui. EN: the person becomes lui.', 'a9-tableau'),
        eS('Je suis dit de revenir demain.', 'On m’a dit de revenir demain.', "dire à quelqu'un garde le à. EN: dire à quelqu’un keeps the à.", 'a9-erreurs'),
        lC('Écoute. Cette phrase est-elle possible en français ?', 'Le livre a été donné à ma sœur.', ['non', 'seulement à l’oral', 'oui'], 2, 'Le livre est complément direct : il peut devenir sujet. EN: the book is the direct object.', 'a9-possible'),
      ],
    },
    {
      id: 'r10-outil', label: 'Quel outil', targets: ['outil-au-hasard'],
      questions: [
        mc('Qu’est-ce que les quatre outils ont en commun ?', ['ils sont tous écrits', 'aucun ne nomme l’auteur'], 1, "C'est leur seul travail commun. EN: their one shared job.", 'a10-check'),
        mc('Qu’est-ce qui décide entre eux ?', ['le verbe', 'le temps', 'la situation'], 2, "À qui tu parles, et si tu écris. EN: who you speak to, and whether you write.", 'a10-choisir'),
        mc('Tu écris au syndic de l’immeuble. Quel outil ?', ['le passif', 'on'], 0, 'Un écrit officiel prend le passif. EN: official writing takes the passive.', 'a10-trier'),
        mc('Tu expliques pourquoi tu n’as plus de téléphone. Quel outil ?', ['se faire', 'le pronominal'], 0, "C'est ce qui t'est arrivé. EN: it happened to you.", 'a10-quatre'),
        tI('Dis-le à un voisin, dans la rue.', 'Le trottoir a été refait l’an dernier.', 'On a refait le trottoir l’an dernier.', 'Même fait, autre registre. EN: same fact, different register.', 'a10-trier'),
        eS('Sur le panneau de la salle : on a affiché les résultats devant la salle.', 'Les résultats ont été affichés devant la salle.', 'Un panneau ne dit pas on. EN: a sign does not say on.', 'a10-trier'),
        eS('Mon vélo s’est fait voler.', 'Je me suis fait voler mon vélo.', 'Le sujet de se faire est la personne, pas la chose. EN: the subject is the person.', 'a7-erreurs'),
        lC('Écoute. Quel outil entends-tu ?', 'Ça se répare en une heure.', ['se faire', 'le passif', 'le pronominal'], 2, 'se plus le verbe, pour un usage. EN: se plus the verb, for a custom.', 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-consigne', label: 'Écrire une consigne', targets: ['consigne-bavarde'],
      questions: [
        mc('Une consigne peut-elle nommer quelqu’un ?', ['jamais', 'seulement si ce nom est la nouvelle'], 1, "Une fonction, oui ; un nom, presque jamais. EN: a role yes, a name almost never.", 'a11-lecture'),
        mc('Combien de temps différents veux-tu dans ta consigne ?', ['un seul', 'au moins deux'], 1, 'Présent pour la règle, futur pour la conséquence. EN: present for the rule, future for the consequence.', 'a11-plan'),
        mc('Par quoi finis-tu ta consigne ?', ['une phrase avec on ou un pronominal', 'un nom de responsable'], 0, "Pour ce que la personne fait elle-même. EN: for what the reader does.", 'a11-plan'),
        tI('Mets le verbe au futur passif.', 'Les vélos laissés dans le hall (enlever) sans préavis.', 'Les vélos laissés dans le hall seront enlevés sans préavis.', 'Une conséquence au futur, sans auteur. EN: a future consequence with no doer.', 'a11-scenario'),
        tI('Mets le verbe au passé composé passif.', 'Ce document (mettre) à jour en janvier.', 'Ce document a été mis à jour en janvier.', 'a été plus le participe irrégulier mis. EN: a été plus the irregular participle.', 'a11-lecture'),
        tI('Écris la fin de la consigne avec on.', 'En cas de problème, ___ prévient l’accueil.', 'En cas de problème, on prévient l’accueil.', "C'est le lecteur qui agit, donc on. EN: the reader acts, so on.", 'a11-plan'),
        eS('Le règlement peut modifié sans préavis.', 'Le règlement peut être modifié sans préavis.', 'Après un modal, être reste à l’infinitif. EN: after a modal, être stays infinitive.', 'a11-lecture'),
        lC('Écoute. Cette phrase peut-elle aller dans une consigne ?', 'Les casiers sont fermés à clé chaque soir.', ['oui', 'non'], 0, 'Un fait répété, sans auteur. EN: a repeated fact with no doer.', 'a11-cheat'),
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Écrire une consigne',
    opener: {
      line: "À toi d'écrire la feuille que les autres liront à l'entrée, sans nommer personne. EN: Your turn to write the sheet the others will read at the door, naming nobody.",
      imageRef: 'lessons/voix-passive/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ta propre consigne et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote your own set of rules and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 120,
    restPoints: ['a11-scenario', 'a11-mission', 'a11-cheat', 'a11-quiz/r3-temps', 'a11-quiz/r6-on', 'a11-quiz/r9-piege'],
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
  { id: 'd-registre', title: 'Porte ou bouche', format: 'sort' as const, coach: "Deux piles. Demande-toi : est-ce que quelqu'un dirait ça à voix haute ? EN: sort by whether a person would say it out loud.", buckets: ['la porte', 'la bouche'], items: [E(1011), E(1001), E(1013), E(1003), E(1012), E(1010)], audio: AUDIO },
  { id: 'd-accord', title: 'La fin du participe', format: 'mcq' as const, coach: "Regarde le sujet, puis écris la fin. Le verbe ne décide de rien. EN: look at the subject, then write the ending.", q: 'Les lettres sont ... en français.', opts: ['écrit', 'écrits', 'écrites'], correct: 2, why: 'Sujet féminin pluriel, donc es. EN: feminine plural subject.', items: [E(1015), E(1017), E(1018), E(1020), E(1024), E(1027)], audio: AUDIO },
  { id: 'd-temps', title: 'Quel temps de être', format: 'mcq' as const, coach: "Demande-toi quand la chose est faite, puis choisis la forme de être. EN: ask when it happens, then pick the form of être.", q: 'Le magasin ... fermé lundi prochain.', opts: ['a été', 'sera', 'était'], correct: 1, why: 'Lundi prochain : le futur de être. EN: next Monday takes the future.', items: [E(1035), E(1036), E(1037), E(1038), E(1039), E(1044)], audio: AUDIO },
  { id: 'd-agent', title: 'Ce par sert-il', format: 'sort' as const, coach: "Deux piles : le nom apprend quelque chose, ou il ne sert à rien. EN: sort by whether the name teaches anything.", buckets: ['par utile', 'par inutile'], items: [E(1059), E(1060), E(1062), E(1061), E(1055), E(1063)], audio: AUDIO },
  { id: 'd-registre-ecrit', title: 'Panneau ou couloir', format: 'sort' as const, coach: "Deux piles : ce qui s'écrit d'avance, et ce qui se dit dans un couloir. EN: sort into written-in-advance and said-in-a-corridor.", buckets: ['ça s’écrit', 'ça se dit'], items: [E(1072), E(1090), E(1078), E(1003), E(1084), E(1010)], audio: AUDIO },
  { id: 'd-on', title: 'Dis-le avec on', format: 'mcq' as const, coach: "Le sujet écrit redevient complément, et on prend sa place. EN: the written subject goes back to object and on takes its place.", q: 'Tu racontes ça à un ami. Tu dis ... .', opts: ['mon vélo a été volé', 'on a volé mon vélo'], correct: 1, why: "À l'oral, on gagne toujours. EN: out loud, on wins.", items: [E(1090), E(1093), E(1100), E(1102), E(1105), E(1094)], audio: AUDIO },
  { id: 'd-sefaire', title: 'fait ne bouge pas', format: 'mcq' as const, coach: "Le sujet est la personne, fait reste fait, et le verbe suivant est à l'infinitif. EN: person as subject, fait invariable, infinitive after it.", q: 'Elle s’est ... couper les cheveux.', opts: ['faite', 'fait'], correct: 1, why: 'fait est invariable devant un infinitif. EN: invariable before an infinitive.', items: [E(1110), E(1111), E(1113), E(1117), E(1119), E(1114)], audio: AUDIO },
  { id: 'd-pronominal', title: 'Un usage, pas un événement', format: 'sort' as const, coach: "Deux piles : ce qui est vrai en général, et ce qui est arrivé un jour. EN: sort into generally true and happened once.", buckets: ['en général', 'une fois'], items: [E(1129), E(1090), E(1136), E(1036), E(1135), E(1110)], audio: AUDIO },
  { id: 'd-donner', title: 'La personne derrière à', format: 'mcq' as const, coach: "Si le sujet anglais était derrière à en français, le passif est impossible : sors par on. EN: if the English subject sits behind à in French, the passive is impossible.", q: 'I was told to come back tomorrow.', opts: ['On m’a dit de revenir demain.', 'Je suis dit de revenir demain.'], correct: 0, why: "dire à quelqu'un : la personne reste complément. EN: the person stays an object.", items: [E(1143), E(1145), E(1146), E(1147), E(1148), E(1152)], audio: AUDIO },
  { id: 'd-outil', title: 'Quel outil', format: 'sort' as const, coach: "Quatre phrases, deux piles : ça s'écrit, ou ça se dit. EN: four sentences, two piles: written or spoken.", buckets: ['ça s’écrit', 'ça se dit'], items: [E(1163), E(1162), E(1174), E(1167), E(1168), E(1169)], audio: AUDIO },
  { id: 'd-consigne', title: 'Une consigne ne nomme personne', format: 'mcq' as const, coach: "Relis ta consigne et cherche un nom de personne, un par inutile, ou un je. Enlève-les. EN: reread your notice and cut any name, any useless par, and any je.", q: 'Sur un panneau, tu écris ... .', opts: ['on affiche les résultats devant la salle', 'les résultats sont affichés devant la salle'], correct: 1, why: 'Un panneau déclare un fait. EN: a sign declares a fact.', items: [E(1178), E(1180), E(1181), E(1184), E(1190), E(1192)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'passif-partout', description: 'Uses the passive in speech where a French speaker would say on, so ordinary conversation sounds like a notice board.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check'], drill: 'd-registre', retest: 'd-registre' },
  { id: 'accord-oublie', description: 'Leaves the past participle unchanged after être, so the ending does not match the subject, or builds the passive with avoir.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-accord', retest: 'd-accord' },
  { id: 'temps-sur-participe', description: 'Tries to carry the tense on the participle instead of on être, or reads est parti and est né as passives.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-temps', retest: 'd-temps' },
  { id: 'par-partout', description: 'Adds par plus an agent to every passive, as English does with by, including where the name is quelqu’un or is already implied by the verb.', detectOn: ['a4-compter', 'a4-choisir', 'a4-erreurs', 'a11-mission'], drill: 'd-agent', retest: 'd-agent' },
  { id: 'registre-melange', description: 'Writes on into a notice or a set of rules, or hedges an official formula, so a rule reads like a conversation.', detectOn: ['a5-trier', 'a5-formules', 'a5-erreurs', 'a11-mission'], drill: 'd-registre-ecrit', retest: 'd-registre-ecrit' },
  { id: 'on-mal-forme', description: 'Puts a plural verb after on, adds a par behind it, or keeps the written passive in speech where a French speaker would switch to on.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-on', retest: 'd-on' },
  { id: 'sefaire-accorde', description: 'Agrees fait with the subject, turns the following infinitive into a participle, or makes the object rather than the person the subject of se faire.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check', 'a11-mission'], drill: 'd-sefaire', retest: 'd-sefaire' },
  { id: 'pronominal-manquant', description: 'Never reaches for the pronominal passive, or uses it for a dated event or with a person as subject, so general customs come out as heavy passives.', detectOn: ['a8-construire', 'a8-choisir', 'a8-piege', 'a11-mission'], drill: 'd-pronominal', retest: 'd-pronominal' },
  { id: 'passif-impossible', description: 'Builds an English-style passive on an indirect object, so the person becomes the subject of donner, dire, demander, offrir, promettre, permettre, répondre or conseiller.', detectOn: ['a9-construire', 'a9-choisir', 'a9-erreurs', 'a11-mission'], drill: 'd-donner', retest: 'd-donner' },
  { id: 'outil-au-hasard', description: 'Picks between the passive, on, se faire and the pronominal by the verb rather than by the situation, so a spoken sentence comes out written and a notice comes out chatty.', detectOn: ['a10-trier', 'a10-choisir', 'a10-check', 'a11-mission'], drill: 'd-outil', retest: 'd-outil' },
  { id: 'consigne-bavarde', description: 'Writes a set of procedures that names a person, keeps an agent that adds nothing, or slides into conversational on so the text stops reading as a notice.', detectOn: ['a11-lecture', 'a11-cheat', 'a11-mission'], drill: 'd-consigne', retest: 'd-consigne' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at layer core
 *  is refused by validateDensity). Every sheet is reachable from a mission
 *  through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-forme', 'La forme du passif', ['être + participe', 'les quatre accords', 'les participes irréguliers'], [
    teach('sheet-forme-teach', 'Deux mots, et le second suit le sujet',
      `Un passif est toujours être plus le participe passé. Le participe se termine comme un adjectif et suit le sujet : écrit, écrite, écrits, écrites. ${Cap(PC_ETRE_REF)} l'a dit pour le passé composé : « ${A221_REFRAME} » En français : « ${A221_REFRAME_FR} » EN: a passive is être plus the past participle, and the participle agrees with the subject.`),
    table('sheet-forme-table', 'Les quatre accords', ['Sujet', 'Forme', 'Exemple'], [
      ['masculin singulier', 'participe seul', 'Le rapport est écrit en français.'],
      ['féminin singulier', 'participe + e', 'La lettre est écrite en français.'],
      ['masculin pluriel', 'participe + s', 'Les rapports sont écrits en français.'],
      ['féminin pluriel', 'participe + es', 'Les lettres sont écrites en français.'],
      ['sujet mixte', 'le masculin pluriel gagne', 'La salle et le bureau sont fermés.'],
      ['sujet impersonnel', 'masculin singulier', 'Il est interdit de fumer dans les chambres.'],
    ]),
    table('sheet-forme-irreg', 'Les participes qui reviennent le plus ici', ['Verbe', 'Participe', 'Au passif'], [
      ['écrire', 'écrit', 'La lettre est écrite en français.'],
      ['prendre', 'pris', 'La décision a été prise sans nous.'],
      ['construire', 'construit', 'La tour a été construite en deux ans.'],
      ['traduire', 'traduit', 'Le texte est traduit en trois langues.'],
      ['mettre', 'mis', 'Ce document a été mis à jour en janvier.'],
      ['offrir', 'offert', 'Un café nous a été offert à l’entrée.'],
    ]),
    teach('sheet-forme-a220', 'Les participes ne se construisent pas',
      `${Cap(PARTICIPLE_REF)} a réglé cette question : « ${A220_REFRAME} » En français : « ${A220_REFRAME_FR} » Le passif ne change rien à ce travail. Si tu as le participe, tu as le passif. EN: participle formation is settled in A2; the passive adds nothing to it.`),
  ]),
  sheet('sheet-temps', 'Le passif dans tous les temps', ['les cinq temps', 'ce qui change', 'les pièges de lecture'], [
    teach('sheet-temps-teach', 'Être porte le temps, le participe porte le sujet',
      `Il y a exactement deux choses à décider dans un passif : le temps de être et la fin du participe. Elles sont indépendantes. « Les routes seront fermées » : seront pour le futur, fermées pour le sujet. ${Cap(FUTUR_REF)} donne le futur : « ${B105_REFRAME} » EN: être carries the tense, the participle carries the subject, and the two never interfere.`),
    table('sheet-temps-table', 'Les cinq temps', ['Temps', 'être', 'Exemple'], [
      ['présent', 'est, sont', 'Le magasin est fermé.'],
      ['passé composé', 'a été, ont été', 'Le magasin a été fermé pendant deux mois.'],
      ['imparfait', 'était, étaient', 'Le magasin était fermé quand je suis passé.'],
      ['futur simple', 'sera, seront', 'Le magasin sera fermé lundi.'],
      ['conditionnel', 'serait, seraient', 'Ta demande serait acceptée plus vite en ligne.'],
      ['avec un modal', 'doit être, peut être', 'Le formulaire doit être signé avant vendredi.'],
    ]),
    table('sheet-temps-lecture', 'Deux formes qui se ressemblent', ['Tu lis', 'Ce que ça dit', 'Attention'], [
      ['est fermé', 'un état, maintenant', 'la porte est close en ce moment'],
      ['a été fermé', 'un événement, fini', 'quelqu’un l’a fermée, une fois'],
      ['était fermé', 'un état, dans le passé', 'c’était déjà comme ça'],
      ['est parti', 'un passé composé de aller-venir', 'ce n’est PAS un passif'],
      ['est né', 'un passé composé avec être', 'ce n’est PAS un passif'],
      ['sera fermé', 'un état à venir', 'l’affiche la plus fréquente'],
    ]),
  ]),
  sheet('sheet-on', 'On et les autres sorties', ['quand dire on', 'le test', 'ce que on remplace'], [
    teach('sheet-on-teach', 'Le test en une question',
      "Avant d'écrire un passif, pose-toi une question : est-ce que je parle, ou est-ce que j'écris une règle ? Si tu parles, dis on. On a fermé la rue. On m'a volé mon vélo. On t'attend. C'est plus court, plus rapide, et personne n'est nommé non plus. EN: ask whether you are speaking or writing a rule; if speaking, use on.",
    ),
    table('sheet-on-table', 'La même nouvelle, deux fois', ['Sur une affiche', 'Dans ta bouche'], [
      ['La rue a été fermée pour le marché.', 'On a fermé la rue pour le marché.'],
      ['Mon vélo a été volé.', 'On a volé mon vélo.'],
      ['Les horaires ont été changés.', 'On a changé les horaires du bus.'],
      ['Ma valise a été perdue à l’aéroport.', 'On a perdu ma valise à l’aéroport.'],
      ['La salle a été réservée par le directeur.', 'On a réservé la salle.'],
      ['Le train de huit heures a été annulé.', 'On a annulé le train de huit heures.'],
    ]),
    table('sheet-on-quatre', 'Quatre façons de ne nommer personne', ['Outil', 'Quand', 'Exemple'], [
      ['le passif', 'un écrit officiel', 'Le magasin sera fermé lundi.'],
      ['on', 'tu parles', 'On ferme lundi.'],
      ['se faire', 'ça t’arrive, à toi', 'Je me suis fait voler mon vélo.'],
      ['le pronominal', 'une habitude générale', 'Le vin blanc se sert frais.'],
      ['il est + adjectif', 'une règle impersonnelle', 'Il est interdit de fumer.'],
      ['la personne, nommée', 'l’auteur compte vraiment', 'Le maire a remis le prix.'],
    ]),
  ]),
  sheet('sheet-sefaire', 'Se faire et le pronominal', ['se faire + infinitif', 'ça se dit', 'ce qui ne s’accorde pas'], [
    teach('sheet-sefaire-teach', 'Deux formes que le passif ne remplace pas',
      `Se faire plus l'infinitif dit qu'une chose t'est arrivée : je me suis fait voler mon vélo. Le pronominal dit qu'une chose se fait en général : le vin blanc se sert frais. ${Cap(PRONOMINAL_PC_REF)} a appris à accorder les pronominaux, et se faire est l'exception : fait ne change jamais. EN: se faire is what happened to you, the pronominal is what is generally done, and fait never agrees.`),
    table('sheet-sefaire-table', 'Se faire + infinitif', ['Phrase', 'Ce que ça dit'], [
      ['Je me suis fait voler mon vélo.', 'on me l’a volé, à moi'],
      ['Elle s’est fait couper les cheveux.', 'elle l’a demandé et payé'],
      ['Il s’est fait aider par son frère.', 'il a demandé de l’aide'],
      ['On s’est fait refuser l’entrée.', 'quelqu’un a dit non'],
      ['Nous nous sommes fait livrer le repas.', 'nous l’avons commandé'],
      ['Elle s’est fait rembourser son billet.', 'elle a obtenu son argent'],
    ]),
    table('sheet-sefaire-pronominal', 'Le passif pronominal', ['Phrase', 'Ce que ça dit'], [
      ['Ça se dit.', 'les gens disent ça'],
      ['Ça ne se fait pas ici.', 'ce n’est pas l’usage'],
      ['Le vin blanc se sert frais.', 'c’est la règle, partout'],
      ['Ce mot s’écrit avec un accent.', 'voilà l’orthographe'],
      ['Les billets se vendent en ligne.', 'c’est comme ça qu’on les achète'],
      ['Ce plat se prépare la veille.', 'la recette le demande'],
    ]),
  ]),
  sheet('sheet-consignes', 'Écrire une consigne', ['le passif impossible', 'la liste de contrôle', 'les formules'], [
    teach('sheet-consignes-teach', 'Le passif que le français refuse',
      `En anglais la personne peut devenir le sujet : I was given a book. En français, non. Avec donner, dire, demander, offrir, promettre, permettre, répondre et conseiller, la personne arrive avec à, et à ne devient jamais sujet. Dis on m'a donné un livre. EN: French cannot make the person the subject of these verbs; use on.`),
    table('sheet-consignes-impossible', 'Huit verbes, une seule sortie', ['Anglais', 'Impossible', 'Ce qu’on dit'], [
      ['I was given a book', 'je suis donné un livre', 'On m’a donné un livre.'],
      ['I was told to come back', 'je suis dit de revenir', 'On m’a dit de revenir demain.'],
      ['We were asked for our papers', 'nous sommes demandés nos papiers', 'On nous a demandé nos papiers.'],
      ['He was offered a bike', 'il est offert un vélo', 'On lui a offert un vélo.'],
      ['They were promised an answer', 'ils sont promis une réponse', 'On leur a promis une réponse.'],
      ['I was allowed to stay', 'je suis permis de rester', 'On m’a permis de rester.'],
    ]),
    table('sheet-consignes-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Le participe suit le sujet', 'regarde le sujet, puis la fin du mot'],
      ['Le temps est sur être', 'est, a été, était, sera, doit être'],
      ['Presque aucun par', 'un seul dans tout le texte, ou aucun'],
      ['Une phrase avec on', 'pour ce que la personne fait elle-même'],
      ['Aucun passif impossible', 'relis les verbes avec à'],
      ['Aucun nom de personne', 'une consigne parle des choses'],
    ]),
    table('sheet-consignes-formules', 'Les formules toutes faites', ['Formule', 'Exemple'], [
      ['il est interdit de', 'Il est interdit de fumer dans les chambres.'],
      ['les visiteurs sont priés de', 'Les visiteurs sont priés de signer le registre.'],
      ['doit être + participe', 'Le matériel doit être rangé après usage.'],
      ['peut être + participe', 'Le règlement peut être modifié sans préavis.'],
      ['sans préavis', 'Les vélos seront enlevés sans préavis.'],
      ['en cas de', 'En cas de problème, on prévient la réception.'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-18-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-18-reception': "The hotel desk (act 2), two voices: the guest and the receptionist, Québécois French, one take. The receptionist reads the laminated card the way a person reads a card, slightly flatter than her own speech, so the learner hears the register change inside the dialogue.",
  'rec-b1-18-forme': "The four form cards. Read « est », « a été » and « sera » at the SAME pace and volume: the whole card is that only the first word moved. On the last card let « écrite » finish cleanly, with the final t audible.",
  'rec-b1-18-temps-ecoute': "REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The learner is comparing « est », « a été », « était », « sera » and « serait » against each other, so separate takes would turn that into a comparison of performances. No extra stress on the auxiliary.",
  'rec-b1-18-temps': "The five-tense deck. Read every card at the same pace; the participle must sound IDENTICAL on all four cards, because the whole deck is that only the first word moved.",
  'rec-b1-18-piege-temps': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. Card six (« Le train est parti ») is not a passive and must not be read differently from the others.",
  'rec-b1-18-pont': "The bridge plaque (act 4), ONE VOICE, one take, France accent, read at the pace of someone reading a plaque aloud to a companion. The four « par » must all be given the same weight: the whole mission is that they are the same word doing three different jobs, and stressing the agent ones would give the answer away.",
  'rec-b1-18-par': "The four par cards. Card four holds two phrases separated by a middot; leave a clear beat between them so they are not heard as one group.",
  'rec-b1-18-radio': "REQUIRED FOR THE EAR MISSION (act 5): eight lines, ONE TAKE, ONE VOICE, in authored order, read as a local midday bulletin at bulletin pace. Slightly brisker than the other recordings, with a short beat between items and no pause inside a passive group.",
  'rec-b1-18-escalier': "The stairwell (act 6), two voices: the learner and madame Ngo, a relaxed neighbour in her sixties, France accent. The learner's first line is read from the sheet and must sound READ; madame Ngo's two lines must sound completely ordinary. The contrast is the whole mission.",
  'rec-b1-18-on': "The four on cards. « on » is never stressed: it is the least interesting word in each sentence and that is the point.",
  'rec-b1-18-on-ecoute': "REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE, in authored order, at ordinary conversational speed. Elision is natural (« on a », « on t'attend »), and « on » must never be given a beat of its own.",
  'rec-b1-18-piege-on': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken. Card five is a shop-window sentence and is still read in the same voice as the rest.",
  'rec-b1-18-cafe': "The café table (act 7), two voices: the learner and Idriss, Belgian French welcome, one take. Idriss is patient and unhurried; the learner's second line is the first time se faire appears in the lesson, so let « fait voler » land as two clear words.",
  'rec-b1-18-sefaire': "The four se faire cards. On card three the middot separates two whole clauses; leave a clear beat. « fait » must be identical in both halves, because the card is that it never changes.",
  'rec-b1-18-pronominal-ecoute': "REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, ONE VOICE, in authored order, ordinary speed. « se » is unstressed and elided where the spelling elides it (« s'écrit »), because the mission is that the learner catches a word nobody leans on.",
  'rec-b1-18-pronominal': "The four pronominal cards. Card four holds a contrast pair across a middot: read « il se lave » with ordinary sentence melody and « le plat se prépare » identically, so the difference is meaning and not delivery.",
  'rec-b1-18-piege-pronominal': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the wrong versions in promptSound are never spoken.",
  'rec-b1-18-mairie': "The town-hall counter (act 9), two voices: the learner and a polite, slightly formal clerk who says « vous ». The learner's second line is DELIBERATELY IMPOSSIBLE FRENCH and must be read at normal speed with no hesitation and no comic emphasis, or the mission tells the learner the answer before the clerk does.",
  'rec-b1-18-piege-anglais': "The four impossible-passive cards. Card two is an ENGLISH sentence and is the only English line spoken anywhere in this lesson: read it in an ordinary English voice, not a French one.",
  'rec-b1-18-quatre-ecoute': "REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, in authored order, ordinary speed. The four tools alternate and the learner must tell them apart by their words, so every line gets the same delivery and no tool is signalled by tone.",
  'rec-b1-18-modele': "The model set of procedures (act 11), ONE VOICE, one take, read the way a careful person reads a rule sheet aloud to somebody new: a clear beat between sentences and no dramatising. It is the shape the learner will imitate in the task, so the four moves must be audible as four blocks.",
  'rec-b1-18-avis': "The notice board of a Montréal apartment block (act 1), ONE TAKE, ONE VOICE, read the way a person reads a sign out loud: flat, unhurried, no performance. Québécois French. The eleven passive groups must all be audible as two words (« sera arrêté », « a été repeint »), because act 3 comes back to this recording for the tenses.",
};

export const LESSON: Lesson = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 18',
  intro: 'You can already build a past participle and make it agree after être. This lesson is about the sentence those two facts add up to, and about when a French speaker would rather not use it. The passive is the language of doors, rules and news bulletins. Out loud, French reaches for on, for se faire, or for a pronominal verb instead.',
  skill: 'PE',
  grammarAssumed: [
    PARTICIPLE_UNIT, PC_AVOIR_UNIT, PC_ETRE_UNIT, PRONOMINAL_UNIT, PRONOMINAL_PC_UNIT,
    AGREEMENT_UNIT, DIRECT_OBJ_UNIT, IMP_USE_UNIT, PC_IMPARFAIT_UNIT, FUTUR_UNIT, CONDITIONNEL_UNIT,
  ],
  grammarIntroduced: [
    'The passive voice: être plus a past participle, with the participle agreeing with the subject in gender and number',
    'The passive across five tenses, with être carrying the tense and the participle carrying the agreement',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais déjà former un participe passé et l'accorder après être. Cette leçon te donne la phrase que ces deux choses font ensemble, et te dit quand un francophone préfère autre chose. Le passif est la langue des portes, des règlements et des nouvelles. À l'oral, le français dit plutôt on, se faire, ou un verbe pronominal.",
    minutes: 130,
    difficulty: 3,
    glyph: 'été',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: VOIX_PASSIVE_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, AVIS_TEXT, CONSIGNE_TEXT, NO_PASSIVE_VERBS, dicteeFor };
