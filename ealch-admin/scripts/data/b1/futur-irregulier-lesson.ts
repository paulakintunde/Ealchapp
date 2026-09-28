// b1.06.l1 « Le futur simple : les radicaux irréguliers » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is the draft type in `_task-section.ts`, not in schema.ts, so `sections` is
// `DraftSection[]` and the validators run through `lessonWithoutTask()`.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · corpus rows released at the checkpoint)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading), name (cardDeck, examples
//   or tapTable), build (groupDrill, gated), choose (listening, hideLines),
//   trap (stepped trapDrill or commonErrors), check (control-page groupDrill,
//   gated) before the checkpoint.
//
//    1  Le camion de huit heures    7   the scene, the recall of b1.05, and
//                                       the five families previewed          14
//    2  Les six grands              8   être ser-, avoir aur-, aller ir-,
//                                       faire fer-, venir viendr-, vouloir
//                                       voudr-                               28
//    3  La famille en -rr-          7   pourr-, verr-, enverr-, courr-,
//                                       mourr-: two written r, one spoken    20
//    4  La famille en -dr-          7   viendr-, tiendr-, vaudr-, faudr-,
//                                       voudr-: a d from nowhere             20
//    5  Les verbes en -oir          7   saur-, devr-, recevr-, pleuvr-       20
//    6  Les impersonnels            7   il faudra, il y aura, il fera,
//                                       il pleuvra, il vaudra mieux, ça ira  18
//    7  Les composés                7   revenir, devenir, obtenir, retenir,
//                                       refaire, revoir, and prévoir         18
//    8  Les fins ne bougent pas     7   -ai -as -a -ons -ez -ont on every
//                                       stem, and the r that closes them     18
//    9  Futur ou imparfait          8   je serai / j'étais, j'aurai /
//                                       j'avais, six pairs by ear            20
//   10  De vraies prédictions       7   promises, forecasts, plans, and the
//                                       negative                             16
//   11  Tout ensemble              11   reading, plan, useCases, scenario,
//                                       TASK (written), practice, cheat
//                                       sheet, quiz, review, roundup          6
//
//   TOTAL 83 missions, 11 acts. Corpus: 198 authored rows in 11 blocks
//   (`fr.b1.projets-et-futur.200` to `.397`) plus 22 reused seed rows, 16 of
//   them releasable act by act through `deckTranche`.
//   Chapter artwork: `futur-irregulier-image-prompts.md`, 11 prompts, one
//   per act.
//
//   TESTS      one quiz, 10 rounds of 8 (80 questions): one round per act
//              from 2 to 10, plus a mixed round. Every round carries its
//              errorTrigger and its remediation drill (10 of each). An act
//              check closes every act. The graded written `task` sits in act
//              11, after the scenario and before the progressCheck.
//   SHEETS     five, and every one is LINKED from a mission by `sheetId`:
//              sheet-radicaux      a1-familles, a2-cartes, a2-six,
//                                  a8-cartes, a11-recap
//              sheet-familles      a3-cartes, a5-cartes, a5-table
//              sheet-impersonnels  a6-cartes, a6-meteo
//              sheet-composes      a7-cartes, a7-focus
//              sheet-oreille       a9-cartes, a9-paires
//   ART        `opener.imageRef` on all eleven acts, pointing at
//              `lessons/futur-irregulier/actNN.jpg`. The prompts are in
//              `futur-irregulier-image-prompts.md`; the refs are NOT
//              registered in lessonImages.ts (files first, per the standard).
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (which later lessons import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le radical change, la fin ne change jamais. »
//   EN: The stem changes; the ending never does.
//
//   One metaphor, and it is a word cut in half. A learner handed twenty new
//   stems assumes twenty new conjugations are coming; the whole lesson is
//   the demonstration that only the front half moves. The second constant,
//   THE_R (« Chaque radical du futur finit par un r »), is a TEST the learner
//   runs on a form they have just built, not a second reframe.
//
//   What it is NOT: a claim about meaning. This lesson does not teach when to
//   use the future. b1.07 owns quand and dès que, b1.10 owns si, and no
//   section here states a rule about either.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the high-frequency irregular future stems, grouped into five
//           families; the impersonal futures; the compounds that come free
//           from a stem already learnt, and prévoir as the exception to that;
//           the invariance of the six endings; and the ear contrast between
//           the future and the imparfait of the same six verbs.
//   QUOTES  b1.05's reframe (regular formation) and b1.01's reframe (the
//           imparfait stem), both by import, never retyped.
//   LEAVES  the conditionnel présent to b1.08, which takes THESE SAME STEMS
//           with the imparfait endings. Act 4 previews « je voudrais » once
//           and says out loud that the rule for it is a later lesson.
//           Future usage after quand and dès que is b1.07's; si is b1.10's.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu everywhere in instruction and coach copy. Every learner-facing French
//   string that is not a title, a label or an answer carries English (an `en`
//   field, or a final « EN: » sentence). Every `say` is French, spoken fr-FR.
//   Theme `projets-et-futur`, ids .200-.397 only. A2 units are cited as
//   « la leçon N de l'A2 », B1 units by French title (they have no seq yet).
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. 'coach-fr-FR' is still a proposed voice id.
//   2. b1.05 was being authored in parallel. Its corpus landed mid-build, so
//      the placeholder reframe was replaced by the real import: « Le futur,
//      c'est l'infinitif jusqu'au r, puis avoir. » Two learner surfaces quote
//      it verbatim (`a1-rappel` and `a11-fin`). Worth noting that b1.05's line
//      frames the six endings as the present of avoir, which act 8 here frames
//      as six fixed endings. Both are true; should act 8 say so out loud?
//   3. Three tapTables (acts 2, 5 and 9), against the pilot brief's one per
//      lesson and in line with b1.03 and b1.04. Each is a six-row cut of a
//      sheet and each links to it.
//   4. mourir (« il mourra ») is in act 3 because the family is spelled by
//      the double r and mourir is one of the five. The sentence used is about
//      a plant. Worth keeping, or drop the verb to a sheet row only?
//   5. prévoir keeps -oir- in the future (« je prévoirai ») while revoir does
//      not (« je reverrai »). Taught in act 7 as the one exception to the
//      compound rule. Is that the right act, or does it belong to the sheet?
//   6. Validators run through `lessonWithoutTask()`: the draft `task` is
//      dropped from `sections` AND from act 11's section list, because
//      validateLesson refuses an act naming a section it cannot see.

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LESSON_TITLE, LEVEL, E, Cap,
  REFRAME, REFRAME_EN, THE_R, THE_R_EN,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, SPEAKABLE_IMPORTS, dicteeFor,
  B101_REFRAME, B105_REFRAME, B105_REFRAME_EN,
  B101_REF, B105_REF, B108_REF,
  ALLER_UNIT, ALLER_REF, MODAUX_UNIT, MODAUX_REF, SAVOIR_UNIT, SAVOIR_REF, FAIRE_UNIT, FAIRE_REF,
} from './futur-irregulier-corpus.ts';
import { FUTUR_IRREGULIER_TERMS } from './futur-irregulier-terms.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  HELPERS
 * ══════════════════════════════════════════════════════════════════════════ */

type Sec<T extends LessonSection['type']> = Extract<LessonSection, { type: T }>;
type GItem = NonNullable<SoundGroup['items']>[number];
type Check = NonNullable<SoundGroup['check']>;
type ActDef = { act: LessonAct; sections: DraftSection[]; imports: string[] };

const AUDIO: SectionAudio = { lang: 'fr-FR', mode: 'tts', speeds: [1, 0.65] };
const REC = (recordingId: string): SectionAudio => ({ mode: 'tts', lang: 'fr-FR', speeds: [1, 0.65], recordingId });

type SrcItem = { id: string; fr: string; en: string };
const SEED = new Map((seed as unknown as { items: SrcItem[] }).items.map((i) => [i.id, i]));
const ROW = new Map<string, SrcItem>(ALL_ROWS.map((r) => [r.id, r]));

/** An item's fr/en, from this corpus or the seed. Throws on a typo, so no
 *  section can name an id that does not exist. */
function src(id: string): SrcItem {
  const r = ROW.get(id) ?? SEED.get(id);
  if (!r) throw new Error(`b1.06: no item ${id}`);
  return r;
}

/** A groupDrill item copied VERBATIM from its row (production-surface rule). */
const it = (id: string, note?: string): GItem => ({ fr: src(id).fr, itemId: id, en: src(id).en, ...(note ? { note } : {}) });
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
 *  ACT 1 — LE CAMION DE HUIT HEURES
 * ══════════════════════════════════════════════════════════════════════════ */

/** A CORRECT SENTENCE, THE WRONG DAY. Four lessons of past narration have
 *  just made « j'étais » and « j'avais » the fastest forms the learner owns.
 *  Asked for a commitment, the hand reaches for them, and the dispatcher
 *  books nothing.
 *
 *  NO « ? » OR « ! » IN ANY BUBBLE (house rule 6.4): Yannick's questions are
 *  written as instructions. */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Le camion de huit heures',
  frSub: 'Un déménagement, un créneau',
  setting: { place: "Le bureau d'une compagnie de déménagement", city: 'Montréal', time: '16 h 20', ambience: 'un téléphone, une imprimante, la rue Fabre dehors' },
  beats: [
    {
      kind: 'narration',
      text: "Montréal, rue Fabre. Ton déménagement est jeudi. Tu appelles la compagnie pour réserver le créneau du matin. EN: Your move is on Thursday and you are calling to book the morning slot.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Yannick',
      fr: 'On a deux camions jeudi. Je donne le premier créneau à celui qui est prêt.',
      en: 'We have two trucks on Thursday. I give the first slot to whoever is ready.',
      respell: '[ohⁿ ah duh kah-MYOHⁿ zhuh-DEE · zhuh don luh pruh-myay kray-NOH ah suh-lüee kee eh PREH]',
      size: 'md', audio: REC('rec-b1-06-yannick'),
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Yannick',
      fr: "Dites-moi l'heure, et dites-moi qui aura les clés.",
      en: 'Tell me the time, and tell me who will have the keys.',
      respell: '[deet-MWAH LUHR · ay deet-mwah kee oh-rah lay KLAY]',
      stage: 'Il ouvre la fiche du jeudi. EN: He opens the Thursday sheet.',
      size: 'md', audio: REC('rec-b1-06-yannick'),
    },
    {
      kind: 'narration',
      text: "Tu sors de quatre leçons sur le passé. Les formes qui montent toutes seules sont j'étais et j'avais. Elles sont justes, et elles parlent d'hier. EN: You have just spent four lessons in the past, and those forms come fastest.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu réponds à Yannick. Quelle phrase réserve le camion de jeudi. EN: Which sentence books Thursday.',
      size: 'lg',
      options: [
        { fr: "J'étais là à huit heures et j'avais les clés sur moi.", respell: '[zhay-teh LAH ah üee-TUHR · ay zhah-veh lay KLAY sür MWAH]', en: 'I was there at eight and I had the keys on me.', outcome: 'breaks', audio: AUDIO },
        { fr: "Je serai là à huit heures et j'aurai les clés sur moi.", respell: '[zhuh suh-ray LAH ah üee-TUHR · ay zhoh-ray lay KLAY sür MWAH]', en: 'I will be there at eight and I will have the keys on me.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: 'Yannick écrit : jeudi, huit heures, premier créneau. EN: Yannick writes: Thursday, eight, first slot.',
        breaks: "Yannick cherche un déménagement d'hier, n'en trouve pas, et garde le créneau pour quelqu'un d'autre. EN: He looks for yesterday's move, finds none, and gives the slot away.",
      },
    },
    {
      kind: 'break',
      heading: 'ser- et ét- ne parlent pas du même jour',
      body: "être a deux radicaux : ét- pour l'imparfait, ser- pour le futur. avoir en a deux aussi : av- et aur-. Aucun des deux ne ressemble à son infinitif. EN: être and avoir each have two stems, and neither looks like the infinitive.",
      wrong: { fr: "J'étais là à huit heures.", ipa: '/ʒe.tɛ la a ɥi.tœʁ/', respell: '[zhay-teh LAH ah üee-TUHR]', en: 'I was there at eight.' },
      right: { fr: 'Je serai là à huit heures.', ipa: '/ʒə sə.ʁe la a ɥi.tœʁ/', respell: '[zhuh suh-ray LAH ah üee-TUHR]', en: 'I will be there at eight.' },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Le camion est réservé. Ni l'une ni l'autre phrase n'était fausse : elles ne parlaient pas du même jour. Une vingtaine de verbes font ça, et ce sont les plus fréquents de la langue. EN: Neither sentence was wrong; they were about different days.",
      size: 'md',
    },
  ],
  closing: { text: `${REFRAME} EN: ${REFRAME_EN}`, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'oreille', 'promesse'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  frSub: REFRAME,
  goals: [
    { t: 'Dire je serai, j’aurai, j’irai, je ferai sans hésiter', s: 'les six grands, acte 2' },
    { t: 'Retrouver un radical par sa famille', s: 'les -rr-, les -dr-, les -oir : actes 3, 4 et 5' },
    { t: 'Annoncer la météo, un besoin, une foule', s: 'les impersonnels, acte 6' },
    { t: 'Écrire cinq prédictions sur ta propre vie', s: 'la mission écrite du dernier acte' },
  ],
  audio: AUDIO,
  say: `Voilà où tu vas. ${REFRAME}`,
};

/** MEET, at length: 165 words of ordinary future before any stem is named.
 *  `questionsInModal` so the questions cannot be answered by scanning. Every
 *  glossary key appears in `text` VERBATIM. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message de Sarah',
  frSub: 'Lis, et regarde les verbes',
  text: "Salut, voici le plan pour jeudi. Le camion arrivera à huit heures devant le 42. Je serai là avant, avec le café. J'aurai les clés de l'ancien et du nouveau, alors ne t'inquiète pas pour ça. Mon frère viendra vers neuf heures, il pourra porter les choses lourdes. Vers midi, il faudra sortir de l'ancien appartement, parce que les nouveaux locataires arrivent à treize heures. On ira manger un morceau au coin de la rue, ça ne prendra pas longtemps. L'après-midi, nous serons quatre, donc nous irons plus vite. Je t'enverrai l'adresse exacte ce soir. S'il pleut, on verra sur place : mon frère a une bâche. Tu sauras tout ce soir. Et je te préviens tout de suite : tu auras mal au dos vendredi. Mais samedi, tout sera rangé et on fera une vraie pause. Bises.",
  glossary: [
    { word: 'le camion', en: 'the truck', note: 'Le véhicule du déménagement. Au Québec, on dit aussi le truck.' },
    { word: 'les choses lourdes', en: 'the heavy things', note: 'Le frigo, la machine à laver, les boîtes de livres.' },
    { word: 'les nouveaux locataires', en: 'the new tenants', note: 'Les gens qui prennent ton ancien appartement après toi.' },
    { word: 'un morceau', en: 'a bite to eat', note: 'Manger un morceau : manger vite et sans s’asseoir longtemps.' },
    { word: 'une bâche', en: 'a tarpaulin', note: 'Une grande toile pour protéger les meubles de la pluie.' },
    { word: 'mal au dos', en: 'a sore back', note: 'La douleur classique du lendemain de déménagement.' },
  ],
  questions: [
    { q: 'Combien de verbes au futur trouves-tu dans les trois premières phrases ?', a: 'Trois : arrivera, serai, aurai. Le premier vient de arriver, les deux autres de être et avoir.' },
    { q: 'Quels verbes ne ressemblent pas du tout à leur infinitif ?', a: 'serai vient de être, aurai de avoir, irons de aller, ferai de faire, viendra de venir, pourra de pouvoir, sauras de savoir, verra de voir, faudra de falloir.' },
    { q: 'Et arrivera, prendra, enverrai : lequel des trois est régulier ?', a: 'arrivera. Son radical est l’infinitif entier : arriver + a. prendra perd son -e final, et enverrai vient de envoyer par un chemin à part.' },
    { q: 'Quelle lettre se trouve juste avant chaque terminaison ?', a: 'Un r. arrive-r-a, se-r-ai, au-r-ai, i-r-ons, fe-r-a. Toujours, sans exception.' },
    { q: 'Sarah parle-t-elle de jeudi dernier ou de jeudi prochain ?', a: 'De jeudi prochain. Tous ces verbes annoncent, aucun ne raconte.' },
  ],
  audio: REC('rec-b1-06-sarah'),
  say: `Lis d'abord. La règle vient après. ${REFRAME}`,
  terms: ['radical', 'fin', 'infinitif'],
};

/** NOTICING, SCORED. The learner sorts the text's own verbs before any rule
 *  has been given: three groups, one gate each. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Ce que le message a dit',
  frSub: 'Avant la règle',
  groups: [
    grp("Le radical EST l'infinitif", [
      it(E(212), 'arriver donne arrivera'),
      it(E(213), 'partir perd son e final'),
      it('fr.a2.heure-et-date.112', 'être, et là c’est autre chose'),
    ], chk(
      'Deux de ces trois verbes se construisent sur leur infinitif. Lequel refuse. EN: Which one refuses.',
      ['arrivera', 'sera', 'partirons'],
      1,
      "sera ne contient pas être. C'est le sujet de la leçon. EN: sera contains nothing of être.",
    )),
    grp('Les deux du message de Sarah', [
      it(E(200), 'être au futur'),
      it(E(201), 'avoir au futur'),
      it('fr.a2.hebergement.114', 'la même forme, dans un hôtel'),
    ], chk(
      '« Je serai là » et « J’aurai les clés ». De quels verbes viennent ces formes. EN: Which verbs are these.',
      ['savoir et voir', 'serrer et aurer', 'être et avoir'],
      2,
      'être donne ser-, avoir donne aur-. Aucun des deux ne se devine. EN: neither can be guessed.',
    )),
    grp('Ce qui suit le radical', [
      it(E(206), 'faire'),
      it(E(207), 'aller'),
      it(E(208), 'venir'),
    ], chk(
      'fe-r-ai, i-r-ai, viend-r-ai. Quelle lettre revient juste avant la fin. EN: Which letter keeps coming back.',
      ['un r', 'un s', 'un d'],
      0,
      `${THE_R} EN: ${THE_R_EN}`,
    )),
  ],
  audio: AUDIO,
  say: `Tu as déjà tout vu dans le message. ${REFRAME}`,
  terms: ['radical', 'infinitif', 'fin'],
};

/** NAME IT, in preview: the five families on one screen, so the learner knows
 *  the size of the lesson. The full table is in `sheet-radicaux`. */
const A1_FAMILLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a1-familles',
  layer: 'core',
  sheetId: 'sheet-radicaux',
  previewCount: 5,
  title: 'Cinq familles, pas vingt verbes',
  frSub: 'Le plan de la leçon',
  examples: [
    { fr: 'ser- · aur- · ir- · fer- · viendr- · voudr-', en: 'être, avoir, aller, faire, venir, vouloir', note: 'acte 2 : les six grands' },
    { fr: 'pourr- · verr- · enverr- · courr- · mourr-', en: 'pouvoir, voir, envoyer, courir, mourir', note: 'acte 3 : deux r' },
    { fr: 'viendr- · tiendr- · vaudr- · faudr- · voudr-', en: 'venir, tenir, valoir, falloir, vouloir', note: 'acte 4 : un d' },
    { fr: 'saur- · devr- · recevr- · pleuvr-', en: 'savoir, devoir, recevoir, pleuvoir', note: 'acte 5 : le -oi- part' },
    { fr: 'reviendr- · obtiendr- · referai · reverr-', en: 'revenir, obtenir, refaire, revoir', note: 'acte 7 : gratuit' },
  ],
  audio: AUDIO,
  say: `Cinq familles, un acte chacune ou presque. ${REFRAME}`,
  terms: ['famille', 'radical'],
};

/** THE SINGLE RECALL MISSION. b1.05 owns the regular recipe; this deck says
 *  what is being kept from it and nothing more. Four cards. */
const A1_RAPPEL: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-rappel',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Ce que tu gardes de la leçon précédente',
  frSub: 'Le rappel, une seule fois',
  hint: 'Quatre cartes. Rien de neuf ici.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif', 'fin'],
  cards: [
    {
      head: 'La recette régulière',
      label: Cap(B105_REF),
      fr: 'parler · je parlerai',
      // b1.05's real reframe, imported. It frames the endings as the present
      // of avoir; act 8 here frames them as six fixed endings. Both hold.
      body: `« ${B105_REFRAME} » L'infinitif entier sert de radical, et le r est déjà dedans. EN: ${B105_REFRAME_EN}`,
    },
    {
      head: 'Les six fins',
      label: 'sur tous les verbes',
      fr: '-ai · -as · -a · -ons · -ez · -ont',
      body: `Tu les connais déjà. Elles ne changeront plus jusqu'à la fin de cette leçon. ${REFRAME} EN: you already have these six, and they do not move.`,
    },
    {
      head: 'Les verbes en -re perdent leur e',
      label: 'prendre, vendre, écrire',
      fr: 'je prendrai · je vendrai',
      sub: '[zhuh prahⁿ-DRAY] · [zhuh vahⁿ-DRAY]',
      body: "Un e qui tombe, ce n'est pas un radical irrégulier. Le reste de l'infinitif est intact. EN: a dropped e is not an irregular stem.",
    },
    {
      head: "Ce qui change à partir d'ici",
      label: 'la leçon commence',
      fr: 'venir · je viendrai',
      sub: '[vuh-NEER] · [zhuh vyehⁿ-DRAY]',
      body: "Là, l'infinitif ne survit pas. Il faut connaître le radical, et il y en a une vingtaine. EN: here the infinitive does not survive.",
    },
  ],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le mot coupé en deux', 'Dans « nous serons », quelle moitié est la nouveauté. EN: Which half is new.',
    ['-ons', 'ser-', 'les deux'], 1,
    `-ons, tu l'as déjà. ${REFRAME} EN: ${REFRAME_EN}`),
  ctl('Le test', 'Tu viens de construire une forme au futur. Que vérifies-tu en premier. EN: What do you check first.',
    ['qu’il y a un accent', 'qu’il y a deux syllabes', 'qu’il y a un r avant la fin'], 2,
    `${THE_R} Pas de r, pas de futur. EN: ${THE_R_EN}`),
  ctl('Combien', 'Combien de radicaux irréguliers cette leçon te demande. EN: How many stems.',
    ['une vingtaine, en cinq familles', 'plus de cent', 'un par verbe'], 0,
    'Une vingtaine, et les composés de l’acte 7 viennent gratuitement. EN: about twenty, in five families.'),
], ['radical', 'fin', 'famille']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le camion de huit heures',
    opener: { line: "Une phrase correcte, et le camion arrive le mauvais jour : voilà ce que coûte un radical. EN: A correct sentence and the truck comes on the wrong day: that is what a stem costs.", imageRef: 'lessons/futur-irregulier/act01.jpg' },
    sections: [],
    milestone: "Tu sais reconnaître un radical qui refuse l'infinitif, et tu sais qu'il y en a une vingtaine. EN: You can spot a stem that refuses the infinitive, and you know there are about twenty.",
    estScreens: 27, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_FAMILLES, A1_RAPPEL, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LES SIX GRANDS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Two colleagues fixing a week. Six irregular stems pass by in six
 *  bubbles, before any of them is named. No « ? » or « ! » in a bubble. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'La semaine prochaine',
  frSub: 'Deux collègues, un calendrier',
  setting: "Un bureau partagé à Genève, vendredi après-midi. EN: A shared office in Geneva, Friday afternoon.",
  bubbles: [
    { from: 'narrator', fr: 'Léa et toi calez la semaine prochaine avant de partir.', en: 'Léa and you are fixing next week before leaving.' },
    { from: 'coach', fr: 'Lundi, je serai en formation. Je ne serai pas joignable avant seize heures.', en: 'On Monday I will be in training. I will not be reachable before four.', warn: 'être donne ser-. EN: être gives ser-.' },
    { from: 'user', fr: "D'accord. Mardi, j'aurai le dossier de Lausanne, et j'irai le déposer moi-même.", en: 'All right. On Tuesday I will have the Lausanne file, and I will go and drop it off myself.', warn: 'avoir donne aur-, aller donne ir-. EN: two more.' },
    { from: 'coach', fr: 'Parfait. Mercredi, on fera le point tous les deux.', en: 'Perfect. On Wednesday the two of us will take stock.', warn: 'faire donne fer-. EN: faire gives fer-.' },
    { from: 'user', fr: 'Et Malik, il viendra jeudi ou vendredi.', en: 'And Malik, he will come on Thursday or Friday.', warn: 'venir donne viendr-. EN: venir gives viendr-.' },
    { from: 'coach', fr: 'Jeudi. Vendredi, personne ne voudra rester tard.', en: 'Thursday. On Friday nobody will want to stay late.', warn: 'vouloir donne voudr-. EN: vouloir gives voudr-.' },
  ],
  closing: { fr: 'Six verbes, six radicaux, et aucun ne ressemble à son infinitif.', en: 'Six verbs, six stems, and not one looks like its infinitive.' },
  audio: REC('rec-b1-06-lea'),
  say: `Écoute les six. ${REFRAME}`,
  terms: ['radical', 'infinitif'],
};

/** NAME IT. One card per verb, plus the card that says why these six come
 *  first: they are the six most used verbs in French. */
const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-radicaux',
  title: 'Les six grands',
  frSub: 'Un radical par carte',
  hint: `Sept cartes. ${THE_R}`,
  audio: REC('rec-b1-06-grands'),
  say: REFRAME,
  terms: ['radical', 'famille'],
  cards: [
    {
      head: 'Pourquoi ces six-là',
      label: 'les plus fréquents',
      fr: 'être · avoir · aller · faire · venir · vouloir',
      body: "Ce sont les verbes que tu utilises le plus. Leur radical irrégulier revient donc plus souvent que tous les autres réunis. EN: these six come back more often than all the others put together.",
    },
    {
      head: 'être donne ser-',
      label: 'je serai',
      fr: 'Je serai là à huit heures.',
      sub: '[zhuh suh-ray LAH ah üee-TUHR]',
      body: "Rien de être ne reste. ser- est à apprendre tel quel, et il sert dans la moitié des phrases. EN: nothing of être survives.",
    },
    {
      head: 'avoir donne aur-',
      label: "j'aurai",
      fr: "J'aurai les clés sur moi.",
      sub: '[zhoh-ray lay KLAY sür MWAH]',
      body: "Même chose : rien de avoir. Et c'est aussi le radical de « il y aura ». EN: same again, and it is the stem of il y aura.",
    },
    {
      head: 'aller donne ir-',
      label: "j'irai",
      fr: 'On ira voir ma sœur à Québec.',
      sub: '[ohⁿ-nee-rah VWAR mah SUHR ah kay-BEK]',
      body: `Le radical le plus court de la langue : deux lettres. ${Cap(ALLER_REF)} t'a donné le présent. EN: the shortest stem in the language.`,
    },
    {
      head: 'faire donne fer-',
      label: 'je ferai',
      fr: 'Nous ferons le point mercredi.',
      sub: '[noo fuh-rohⁿ luh PWEHⁿ mehr-kruh-DEE]',
      body: `Le e de fer- se prononce comme celui de « nous faisons », un [ə] discret. ${Cap(FAIRE_REF)} a déjà signalé ce son. EN: the e is the quiet one of nous faisons.`,
    },
    {
      head: 'venir donne viendr-',
      label: 'je viendrai',
      fr: 'Ils viendront tous les deux dimanche.',
      sub: '[eel vyehⁿ-drohⁿ too lay DUH dee-MAHⁿSH]',
      body: "Un d arrive de nulle part. Il revient dans tenir, valoir, falloir et vouloir : c'est l'acte 4. EN: a d appears from nowhere; act 4 collects them.",
    },
    {
      head: 'vouloir donne voudr-',
      label: 'je voudrai',
      fr: 'Personne ne voudra conduire la nuit.',
      sub: '[pehr-SONN nuh voo-drah kohⁿ-DÜEER lah NÜEE]',
      body: "Le même d. Et si « je voudrais » te rappelle quelque chose, garde la question pour plus tard. EN: the same d, and je voudrais waits for a later lesson.",
    },
  ],
};

/** The six on one table, tapped for the detail. A six-row cut of
 *  `sheet-radicaux`, which holds all twenty. */
const A2_SIX: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a2-six',
  layer: 'core',
  sheetId: 'sheet-radicaux',
  title: 'Les six, en entier',
  frSub: 'Touche une ligne',
  cols: ['Infinitif', 'Radical', 'je'],
  rows: [
    { cells: ['être', 'ser-', 'je serai'], say: 'Je serai là à huit heures.',
      detail: { title: 'être', body: "ser- sur les six personnes : serai, seras, sera, serons, serez, seront. EN: ser- on all six persons.", say: 'Nous serons six à table samedi soir.' } },
    { cells: ['avoir', 'aur-', "j'aurai"], say: "J'aurai les clés sur moi.",
      detail: { title: 'avoir', body: "aurai, auras, aura, aurons, aurez, auront. Et l'impersonnel : il y aura. EN: and the impersonal il y aura.", say: 'Tu auras une réponse avant vendredi.' } },
    { cells: ['aller', 'ir-', "j'irai"], say: 'On ira voir ma sœur à Québec.',
      detail: { title: 'aller', body: "irai, iras, ira, irons, irez, iront. Deux lettres de radical, et une liaison partout. EN: two letters, and a liaison everywhere.", say: 'Dimanche prochain, nous irons à la campagne.' } },
    { cells: ['faire', 'fer-', 'je ferai'], say: 'Nous ferons le point mercredi.',
      detail: { title: 'faire', body: "ferai, feras, fera, ferons, ferez, feront. Le e est discret, comme dans nous faisons. EN: the e is quiet.", say: 'Ça fera huit euros dix, s’il vous plaît.' } },
    { cells: ['venir', 'viendr-', 'je viendrai'], say: 'Ils viendront tous les deux dimanche.',
      detail: { title: 'venir', body: "viendrai, viendras, viendra, viendrons, viendrez, viendront. Le d revient dans toute la famille de l'acte 4. EN: the d returns in act 4.", say: 'Je reviendrai te voir en août.' } },
    { cells: ['vouloir', 'voudr-', 'je voudrai'], say: 'Personne ne voudra conduire la nuit.',
      detail: { title: 'vouloir', body: 'voudrai, voudras, voudra, voudrons, voudrez, voudront. Le même d que venir. EN: the same d as venir.', say: 'Tu voudras peut-être te reposer avant.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'famille'],
};

/** BUILD. Three groups, one gate each, on the act's own rows. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis les six',
  frSub: 'Radical, puis fin',
  groups: [
    grp('être et avoir', [
      it(E(215), 'il sera'),
      it(E(216), 'nous serons'),
      it(E(221), 'il aura'),
      it(E(222), 'nous aurons'),
    ], chk(
      'nous serons, nous aurons. Qu’est-ce qui est pareil dans les deux. EN: What is the same in both.',
      ['le radical', 'la terminaison -ons', 'rien'],
      1,
      `Le radical n'a rien en commun, la fin est identique. ${REFRAME} EN: ${REFRAME_EN}`,
    )),
    grp('aller et faire', [
      it(E(226), 'on ira'),
      it(E(228), 'ils iront'),
      it(E(231), 'il fera'),
      it(E(233), 'ils feront'),
    ], chk(
      'Pour dire « they will go », tu écris : EN: For they will go, you write:',
      ['ils alleront', 'ils vont aller', 'ils iront'],
      2,
      'aller donne ir-. L’infinitif ne sert à rien ici. EN: aller gives ir-.',
    )),
    grp('venir et vouloir', [
      it(E(236), 'il viendra'),
      it(E(238), 'ils viendront'),
      it(E(240), 'je voudrai'),
      it(E(241), 'ils voudront'),
    ], chk(
      'viendr- et voudr- partagent une lettre qui n’est dans aucun infinitif. Laquelle. EN: Which letter.',
      ['le d', 'le r', 'le n'],
      0,
      "Le d. Le r, lui, est dans tous les radicaux du futur. EN: the d; the r is in every future stem.",
    )),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'fin'],
};

/** CHOOSE, by ear. `hideLines` because the questions are about which verb was
 *  heard, and the written form would hand the answer over. */
const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quel verbe as-tu entendu',
  frSub: 'Huit phrases, une seule écoute',
  lines: [
    ln(E(219)), ln(E(224)), ln(E(229)), ln(E(234)),
    ln(E(239)), ln(E(277)), ln(E(215)), ln(E(228)),
  ],
  questions: [
    { q: 'Première phrase : quel verbe. EN: Which verb.', opts: ['avoir', 'être', 'aller'], correct: 1, why: 'serons vient de être. EN: serons is être.' },
    { q: 'Deuxième phrase : combien de personnes auront la réponse. EN: How many people.', opts: ['une', 'deux'], correct: 0, why: 'tu auras : une seule personne, la deuxième du singulier. EN: one person.' },
    { q: 'Troisième phrase : est-ce que quelqu’un part quelque part. EN: Is anyone going anywhere.', opts: ['Oui, à Québec.', 'Non, on reste.'], correct: 0, why: 'on ira vient de aller. EN: ira is aller.' },
    { q: 'Sixième phrase : le verbe est vouloir ou pouvoir. EN: vouloir or pouvoir.', opts: ['pouvoir', 'vouloir'], correct: 1, why: 'voudra : le d dit vouloir. pourra n’aurait pas de d. EN: the d says vouloir.' },
    { q: 'Septième et huitième : même verbe ou deux verbes. EN: Same verb or two.', opts: ['deux verbes', 'le même'], correct: 0, why: 'sera vient de être, iront de aller. EN: être then aller.' },
  ],
  audio: REC('rec-b1-06-grands-ecoute'),
  say: REFRAME,
  terms: ['oreille', 'radical'],
};

/** TRAP, stepped. The instinct is to glue the ending onto the infinitive, and
 *  it produces forms nobody says. The audio step plays each card's `fr`, the
 *  CORRECT version; `promptSound` is the wrong one and is never spoken. */
const A2_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a2-piege',
  layer: 'core',
  swipe: true,
  title: "Six formes que personne ne dit",
  frSub: "Le réflexe de l'infinitif",
  rule: {
    title: "L'infinitif a raison quatre fois sur cinq",
    body: "Sur la plupart des verbes, coller la terminaison derrière l'infinitif donne la bonne forme. Sur ces six-là, ça donne un mot qui n'existe pas. EN: the instinct is right most of the time and wrong on these six.",
  },
  cards: [
    { promptLabel: 'être', promptSound: 'je êtrai', fr: 'je serai', ipa: '/ʒə sə.ʁe/', tip: "Ni le ê ni le t ne survivent. EN: nothing of être survives." },
    { promptLabel: 'avoir', promptSound: "j'avoirai", fr: "j'aurai", ipa: '/ʒo.ʁe/', tip: 'Le -oir disparaît entier. EN: the -oir goes.' },
    { promptLabel: 'aller', promptSound: "j'allerai", fr: "j'irai", ipa: '/ʒi.ʁe/', tip: 'Deux lettres, et rien de aller. EN: two letters, nothing of aller.' },
    { promptLabel: 'faire', promptSound: 'je fairai', fr: 'je ferai', ipa: '/ʒə fə.ʁe/', tip: 'ai devient e. La différence est visible et audible. EN: ai becomes e.' },
    { promptLabel: 'venir', promptSound: 'je venirai', fr: 'je viendrai', ipa: '/ʒə vjɛ̃.dʁe/', tip: 'Le d apparaît, le i de venir devient ie. EN: a d appears.' },
    { promptLabel: 'vouloir', promptSound: 'je voulerai', fr: 'je voudrai', ipa: '/ʒə vu.dʁe/', tip: 'Le même d que venir. EN: the same d as venir.' },
  ],
  drill: [
    { promptSay: 'Demain, je ... en formation. (être)', opts: ['êtrai', 'serai'], correct: 1 },
    { promptSay: 'Mardi, j’... le dossier. (avoir)', opts: ['aurai', 'avoirai'], correct: 0 },
    { promptSay: 'On ... au marché samedi. (aller)', opts: ['allera', 'ira'], correct: 1 },
    { promptSay: 'Mercredi, nous ... le point. (faire)', opts: ['fairons', 'faisons', 'ferons'], correct: 2 },
    { promptSay: 'Malik ... jeudi. (venir)', opts: ['viendra', 'venira'], correct: 0 },
    { promptSay: 'Personne ne ... rester tard. (vouloir)', opts: ['voulera', 'voudra'], correct: 1 },
    { promptSay: 'Vous ... contents du résultat. (être)', opts: ['serez', 'êtrez'], correct: 0 },
    { promptSay: 'Ils ... tous les deux. (venir)', opts: ['veniront', 'viendront'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: "Quand l'infinitif ne suffit pas" },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le réflexe produit' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six formes correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-06-grands-piege'),
  say: REFRAME,
  terms: ['infinitif', 'radical'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Les six grands, lettre par lettre',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: `Écoute, puis écris. ${REFRAME}`,
  terms: ['fin', 'radical'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('être', 'Le radical de être au futur, c’est : EN: The future stem of être is:',
    ['ser-', 'êtr-', 'ét-'], 0,
    "ét- est l'imparfait. ser- est le futur. EN: ét- is the imparfait; ser- is the future."),
  ctl('aller', '« Nous ... à la campagne dimanche. » EN: Complete with aller.',
    ['allerons', 'irons', 'allons'], 1,
    'aller donne ir-. allons est le présent. EN: aller gives ir-.'),
  ctl('Le d', 'viendr- et voudr- : ce d vient de l’infinitif. EN: Does the d come from the infinitive.',
    ['Non, il arrive de nulle part.', 'Oui.'], 0,
    "Il n'est ni dans venir ni dans vouloir. L'acte 4 en fait une famille. EN: it is in neither infinitive."),
], ['radical', 'fin', 'famille']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'Les six grands',
    opener: { line: 'Six verbes portent la moitié de tout ce que tu diras au futur : commence par eux. EN: Six verbs carry half of everything you will say in the future: start with them.', imageRef: 'lessons/futur-irregulier/act02.jpg' },
    sections: [],
    milestone: 'Tu construis être, avoir, aller, faire, venir et vouloir au futur, aux six personnes. EN: You can build the six big verbs in the future, on all six persons.',
    estScreens: 38, restPoints: ['a2-construire'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_SIX, A2_CONSTRUIRE, A2_ECOUTE, A2_PIEGE, A2_DICTEE, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LA FAMILLE EN -RR-
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'Le contrat de ce soir',
  frSub: 'Un courriel qui part ce soir',
  setting: "Une agence à Bruxelles, en fin de journée. EN: An agency in Brussels, end of the day.",
  bubbles: [
    { from: 'narrator', fr: 'Ton collègue attend un contrat que tu dois relire.', en: 'Your colleague is waiting for a contract you have to check.' },
    { from: 'coach', fr: 'Tu pourras me le relire avant demain matin.', en: 'You will be able to check it for me before tomorrow morning.', warn: 'pouvoir donne pourr-. EN: pouvoir gives pourr-.' },
    { from: 'user', fr: 'Oui. Je t’enverrai le contrat ce soir, vers vingt heures.', en: 'Yes. I will send you the contract this evening, around eight.', warn: 'envoyer donne enverr-. EN: envoyer gives enverr-.' },
    { from: 'coach', fr: 'Parfait. On verra les corrections demain à la première heure.', en: 'Perfect. We will look at the corrections first thing tomorrow.', warn: 'voir donne verr-. EN: voir gives verr-.' },
    { from: 'user', fr: 'Et si c’est trop long, je courrai jusqu’au bureau pour te le déposer.', en: 'And if it is too long, I will run to the office to drop it off.', warn: 'courir donne courr-. EN: courir gives courr-.' },
    { from: 'coach', fr: 'Personne ne mourra d’un contrat en retard. Mais merci.', en: 'Nobody will die of a late contract. But thank you.', warn: 'mourir donne mourr-. EN: mourir gives mourr-.' },
  ],
  closing: { fr: 'Cinq verbes, et tous les cinq écrivent deux r.', en: 'Five verbs, and all five write two r.' },
  audio: REC('rec-b1-06-contrat'),
  say: REFRAME,
  terms: ['double-r', 'famille'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-familles',
  title: 'Deux r à l’écrit, un seul à l’oreille',
  frSub: 'pourr- verr- enverr- courr- mourr-',
  hint: 'Six cartes. Regarde l’orthographe, pas le son.',
  audio: REC('rec-b1-06-double-r'),
  say: REFRAME,
  terms: ['double-r', 'famille'],
  cards: [
    {
      head: 'Cinq verbes, une seule règle',
      label: 'la famille en -rr-',
      fr: 'pourr- · verr- · enverr- · courr- · mourr-',
      body: "Tu écris deux r. Tu en prononces un. Aucune écoute au monde ne te dira où mettre le deuxième. EN: you write two r and say one, so listening cannot help.",
    },
    {
      head: 'pouvoir donne pourr-',
      label: 'je pourrai',
      fr: 'Tu pourras rentrer tard demain soir.',
      sub: '[tü poo-rah rahⁿ-tray TAR duh-mehⁿ SWAR]',
      body: `Le -oi- de pouvoir disparaît, comme dans toute la famille de l'acte 5. ${Cap(MODAUX_REF)} t'a donné le présent. EN: the -oi- goes.`,
    },
    {
      head: 'voir donne verr-',
      label: 'je verrai',
      fr: 'On verra ça la semaine prochaine.',
      sub: '[ohⁿ veh-RAH sah lah suh-MENN pro-SHENN]',
      body: "voir perd son -oi- aussi, et ce qui reste double son r. « On verra » est la phrase la plus utile de la famille. EN: on verra is the most useful line here.",
    },
    {
      head: 'envoyer donne enverr-',
      label: "j'enverrai",
      fr: "Je t'enverrai le contrat ce soir.",
      sub: '[zhuh tahⁿ-veh-ray luh kohⁿ-TRAH suh SWAR]',
      body: "Un verbe en -er, et pourtant irrégulier au futur : le y devient rr. Renvoyer fait pareil. EN: an -er verb that is still irregular here.",
    },
    {
      head: 'courir et mourir',
      label: 'courr- · mourr-',
      fr: 'Elle courra son premier marathon en mai.',
      sub: '[el koo-rah sohⁿ pruh-myay mah-rah-TOHⁿ ahⁿ MEH]',
      body: "Les deux verbes en -rir doublent simplement le r de l'infinitif. courir donne courr-, mourir donne mourr-. EN: the two -rir verbs just double the r.",
    },
    {
      head: 'Ce que le double r te coûte',
      label: 'à l’écrit seulement',
      fr: 'je pourrai · je pourai',
      body: "La deuxième forme n'existe pas, et personne ne l'entendra. C'est une faute d'orthographe, et elle se corrige en écrivant. EN: a spelling error, fixed by writing.",
    },
  ],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'La famille au travail',
  frSub: 'Cinq phrases, cinq verbes',
  examples: [
    ex(E(246), 'pouvoir : une permission pour demain'),
    ex(E(251), 'voir : la formule qui repousse une décision'),
    ex(E(254), 'envoyer : une promesse datée'),
    ex(E(257), 'courir : un projet sportif'),
    ex(E(259), 'mourir : une prévision, pas un drame'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['double-r', 'prediction'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis la famille',
  frSub: 'Deux r, toujours',
  groups: [
    grp('pouvoir', [
      it(E(243), 'il pourra'),
      it(E(244), 'nous pourrons'),
      it(E(245), 'ils pourront'),
    ], chk(
      'Combien de r écris-tu dans « nous pourrons ». EN: How many r do you write.',
      ['un', 'trois', 'deux'],
      2,
      'Deux, et tu n’en entends qu’un. EN: two written, one heard.',
    )),
    grp('voir et envoyer', [
      it(E(248), 'tu verras'),
      it(E(249), 'nous verrons'),
      it(E(253), 'il enverra'),
    ], chk(
      'envoyer est un verbe en -er. Son futur est donc régulier. EN: Is envoyer regular here.',
      ['Oui.', 'Non : enverr-.'],
      1,
      "C'est la seule vraie irrégularité parmi les verbes en -er. EN: the one real -er irregular.",
    )),
    grp('courir et mourir', [
      it(E(255), 'je courrai'),
      it(E(256), 'il courra'),
      it(E(258), 'il mourra'),
    ], chk(
      'courir a déjà un r. Au futur, tu en écris : EN: courir already has an r. In the future you write:',
      ['deux', 'le même'],
      0,
      'courr-. Le r de l’infinitif plus le r du futur. EN: the infinitive r plus the future r.',
    )),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['double-r', 'radical'],
};

const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Ce que l’oreille ne peut pas faire',
  frSub: 'Huit phrases',
  lines: [
    ln(E(246)), ln(E(251)), ln(E(254)), ln(E(257)),
    ln(E(259)), ln(E(261)), ln(E(247)), ln(E(250)),
  ],
  questions: [
    { q: 'Première phrase : le verbe est pouvoir ou vouloir. EN: pouvoir or vouloir.', opts: ['vouloir', 'pouvoir'], correct: 1, why: 'pourras, sans d. voudras en aurait un. EN: no d, so pouvoir.' },
    { q: 'Entends-tu deux r dans « pourras ». EN: Do you hear two r.', opts: ['Oui', 'Non'], correct: 1, why: 'Un seul son. Le deuxième r est une affaire d’orthographe. EN: one sound only.' },
    { q: 'Troisième phrase : qui envoie quelque chose. EN: Who is sending something.', opts: ['toi', 'ton collègue'], correct: 0, why: 'je t’enverrai : c’est toi. EN: it is you.' },
    { q: 'Cinquième phrase : qui mourra. EN: Who will die.', opts: ['une personne', 'une plante'], correct: 1, why: 'Cette plante mourra sans lumière. EN: a plant without light.' },
    { q: 'Dernière phrase : une ou plusieurs personnes. EN: One person or several.', opts: ['plusieurs', 'une'], correct: 0, why: 'ils verront : la terminaison -ont dit le pluriel. EN: -ont says plural.' },
  ],
  audio: REC('rec-b1-06-double-r-ecoute'),
  say: REFRAME,
  terms: ['oreille', 'double-r'],
};

const A3_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a3-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre fautes de double r',
  frSub: 'Toutes invisibles à l’oreille',
  errors: [
    { wrong: 'Je te le enverai demain.', right: 'Je te l’enverrai demain.',
      why: "Normal : envoyer est un verbe en -er, et les verbes en -er sont réguliers au futur. Celui-là non. EN: the one -er verb that refuses the rule." },
    { wrong: 'On vera ça la semaine prochaine.', right: 'On verra ça la semaine prochaine.',
      why: "L'oreille entend un seul r, alors la main en écrit un. La forme parlée est correcte, l'écrite ne l'est pas. EN: the ear hears one r and the hand writes one." },
    { wrong: 'Tu pouras rentrer tard.', right: 'Tu pourras rentrer tard.',
      why: "Même cause. Et un seul r donnerait « pourras » sans le radical pourr-, ce qui n'existe pas. EN: same cause, and the stem is pourr-." },
    { wrong: 'Elle courira son premier marathon.', right: 'Elle courra son premier marathon.',
      why: "Là, c'est l'inverse : tu as gardé l'infinitif entier. courir donne courr-, pas courir- plus la fin. EN: here you kept the whole infinitive." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['double-r', 'infinitif'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La famille', 'Combien de verbes courants doublent le r au futur. EN: How many common verbs double the r.',
    ['cinq', 'deux', 'vingt'], 0,
    'pouvoir, voir, envoyer, courir, mourir. EN: five.'),
  ctl('Le son', 'Comment vérifies-tu le double r. EN: How do you check the double r.',
    ['en écoutant', 'en écrivant', 'en parlant plus lentement'], 1,
    'Il ne s’entend pas. C’est une affaire d’orthographe. EN: it cannot be heard.'),
  ctl('envoyer', 'envoyer est régulier au futur. EN: Is envoyer regular in the future.',
    ['Oui.', 'Non.'], 1,
    "Non : enverr-. C'est l'exception des verbes en -er. EN: no, enverr-."),
], ['double-r', 'famille', 'oreille']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'La famille en -rr-',
    opener: { line: "Tu écriras deux r et tu n'en entendras qu'un : ici, c'est la main qui apprend, pas l'oreille. EN: You will write two r and hear one: here it is the hand that learns.", imageRef: 'lessons/futur-irregulier/act03.jpg' },
    sections: [],
    milestone: 'Tu écris pourrai, verrai, enverrai, courrai et mourrai avec leurs deux r. EN: You write the five double-r stems correctly.',
    estScreens: 32, restPoints: ['a3-construire'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_EXEMPLES, A3_CONSTRUIRE, A3_ECOUTE, A3_ERREURS, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA FAMILLE EN -DR-
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Ce qu’il faudra faire',
  frSub: 'Une voiture, un devis',
  setting: "Un garage à Lyon, un mercredi matin. EN: A garage in Lyon, on a Wednesday morning.",
  bubbles: [
    { from: 'narrator', fr: 'Le garagiste regarde ta voiture et prépare un devis.', en: 'The mechanic looks at your car and works up an estimate.' },
    { from: 'coach', fr: 'Il faudra changer deux pièces. Ça tiendra encore deux ans après ça.', en: 'Two parts will have to be changed. It will hold another two years after that.', warn: 'falloir donne faudr-, tenir donne tiendr-. EN: two stems.' },
    { from: 'user', fr: 'Et si je ne fais rien, la voiture vaudra combien à la revente.', en: 'And if I do nothing, what will the car be worth on resale.', warn: 'valoir donne vaudr-. EN: valoir gives vaudr-.' },
    { from: 'coach', fr: 'Moins cher. Il vaudra mieux réparer avant de vendre.', en: 'Less. It will be better to repair before selling.', warn: 'il vaudra mieux : la formule toute faite. EN: a set phrase.' },
    { from: 'user', fr: 'D’accord. Mon frère viendra la chercher jeudi.', en: 'All right. My brother will come and pick it up on Thursday.', warn: 'venir donne viendr-, déjà vu. EN: venir again.' },
    { from: 'coach', fr: 'Parfait. Personne ne voudra rouler avec ces freins-là.', en: 'Perfect. Nobody will want to drive with those brakes.', warn: 'vouloir donne voudr-. EN: vouloir gives voudr-.' },
  ],
  closing: { fr: 'viendr-, tiendr-, vaudr-, faudr-, voudr- : cinq radicaux, un seul d.', en: 'Five stems, one d.' },
  audio: REC('rec-b1-06-garage'),
  say: REFRAME,
  terms: ['famille', 'radical'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-familles',
  title: 'Un d qui n’est nulle part',
  frSub: 'viendr- tiendr- vaudr- faudr- voudr-',
  hint: 'Six cartes. Cherche le d.',
  audio: REC('rec-b1-06-le-d'),
  say: REFRAME,
  terms: ['famille', 'radical'],
  cards: [
    {
      head: 'Cinq verbes, un d en commun',
      label: 'la famille en -dr-',
      fr: 'viendr- · tiendr- · vaudr- · faudr- · voudr-',
      body: "Aucun de ces cinq infinitifs ne contient de d. Il apparaît au futur, et il apparaît chez les cinq. EN: none of the five infinitives has a d; the future puts one in.",
    },
    {
      head: 'venir et tenir',
      label: 'viendr- · tiendr-',
      fr: 'Je tiendrai ma promesse.',
      sub: '[zhuh tyehⁿ-dray mah pro-MESS]',
      body: "Les deux verbes se conjuguent pareil partout, et le futur ne fait pas exception. Leurs composés suivent : acte 7. EN: they behave alike everywhere, and so do their compounds.",
    },
    {
      head: 'valoir donne vaudr-',
      label: 'il vaudra',
      fr: 'Cette voiture vaudra moins cher dans deux ans.',
      sub: '[set vwah-TÜR voh-drah mwehⁿ SHEHR dahⁿ duh-ZAHⁿ]',
      body: "valoir sert surtout à la troisième personne : ce que vaut une chose. Et « il vaudra mieux » est une expression à part. EN: valoir lives mostly in the third person.",
    },
    {
      head: 'falloir donne faudr-',
      label: 'il faudra',
      fr: 'Il faudra prévenir le propriétaire.',
      sub: '[eel foh-drah pray-vuh-NEER luh pro-pree-ay-TEHR]',
      body: "Un seul sujet possible : il. Personne ne dit « nous faudrons ». C'est l'acte 6. EN: one subject only, and act 6 collects these.",
    },
    {
      head: 'vouloir donne voudr-',
      label: 'je voudrai',
      fr: 'Tu voudras peut-être te reposer avant.',
      sub: '[tü voo-drah puh-TETR tuh ruh-poh-ZAY ah-VAHⁿ]',
      body: "Le futur de vouloir est rare à la première personne : on annonce plutôt ce que les autres voudront. EN: rarer in the first person.",
    },
    {
      head: 'Et « je voudrais »',
      label: 'pas cette leçon',
      fr: 'Je voudrais…',
      sub: '[zhuh voo-DREH]',
      body: `Même radical voudr-, autre terminaison, autre temps. ${Cap(B108_REF)} s'en occupe. Ici, retiens seulement le radical. EN: same stem, different tense, later lesson.`,
    },
  ],
};

const A4_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a4-exemples',
  layer: 'core',
  title: 'Le d au travail',
  frSub: 'Cinq phrases',
  examples: [
    ex(E(266), 'tenir : la promesse'),
    ex(E(270), 'falloir : le besoin'),
    ex(E(275), 'valoir : le prix'),
    ex(E(277), 'vouloir : le refus prévu'),
    ex(E(269), 'valoir mieux : le conseil'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'prediction'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis la famille en -dr-',
  frSub: 'Le d, puis le r, puis la fin',
  groups: [
    grp('tenir', [
      it(E(263), 'tu tiendras'),
      it(E(274), 'nous tiendrons'),
      it(E(279), 'vous tiendrez'),
    ], chk(
      'tenir donne tiendr-. venir donne donc : EN: So venir gives:',
      ['venidr-', 'tiendr-', 'viendr-'],
      2,
      'Les deux verbes marchent ensemble, partout. EN: the two verbs move together.',
    )),
    grp('valoir et falloir', [
      it(E(267), 'il vaudra'),
      it(E(268), 'la formule'),
      it(E(271), 'il faudra'),
    ], chk(
      '« Nous faudrons partir tôt. » Cette phrase est : EN: This sentence is:',
      ['correcte', 'impossible : falloir n’a que il'],
      1,
      "falloir n'existe qu'à la troisième personne du singulier. EN: falloir has one person only.",
    )),
    grp('vouloir', [
      it(E(272), 'tu voudras'),
      it(E(277), 'personne ne voudra'),
      it(E(241), 'ils voudront'),
    ], chk(
      'Quelle lettre sépare voudr- de vouloir. EN: Which letter separates voudr- from vouloir.',
      ['le d', 'le l', 'le r'],
      0,
      "Le d arrive, le l part. Aucun des deux n'est prévisible. EN: a d arrives and an l goes.",
    )),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'radical'],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le d, à l’oreille',
  frSub: 'Huit phrases',
  lines: [
    ln(E(266)), ln(E(269)), ln(E(271)), ln(E(273)),
    ln(E(275)), ln(E(278)), ln(E(280)), ln(E(281)),
  ],
  questions: [
    { q: 'Le d de viendra et voudra, l’entends-tu. EN: Can you hear the d.', opts: ['Oui', 'Non'], correct: 0, why: 'Oui. Ce d se prononce, contrairement au deuxième r de l’acte 3. EN: yes, unlike the second r.' },
    { q: 'Deuxième phrase : un conseil ou une obligation. EN: Advice or obligation.', opts: ['une obligation', 'un conseil'], correct: 1, why: 'il vaudra mieux : un conseil. EN: it will be better: advice.' },
    { q: 'Troisième phrase : qui doit prévenir le propriétaire. EN: Who has to tell the landlord.', opts: ['le texte ne le dit pas', 'toi'], correct: 0, why: 'il faudra ne nomme personne. C’est ce qui le rend pratique. EN: il faudra names nobody.' },
    { q: 'Cinquième phrase : la voiture vaudra plus ou moins. EN: More or less.', opts: ['moins', 'plus'], correct: 0, why: 'moins cher dans deux ans. EN: less, in two years.' },
    { q: 'Dernière phrase : est-ce un encouragement. EN: Is this encouragement.', opts: ['Non', 'Oui'], correct: 1, why: 'Tu tiendras le coup : oui, c’est un encouragement. EN: yes.' },
  ],
  audio: REC('rec-b1-06-le-d-ecoute'),
  say: REFRAME,
  terms: ['oreille', 'famille'],
};

const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Le d qu’on oublie',
  frSub: 'Six formes à moitié construites',
  rule: {
    title: 'Le d n’est pas décoratif',
    body: "Sans le d, la forme ressemble au présent ou à rien du tout : « il viendra » contre « il venira ». Le d est ce qui fait le radical. EN: without the d the form is not a future at all.",
  },
  cards: [
    { promptLabel: 'venir', promptSound: 'il venira', fr: 'il viendra', ipa: '/il vjɛ̃.dʁa/', tip: 'Le d, et le i qui devient ie. EN: the d, and i becoming ie.' },
    { promptLabel: 'tenir', promptSound: 'je tenirai', fr: 'je tiendrai', ipa: '/ʒə tjɛ̃.dʁe/', tip: 'Exactement comme venir. EN: exactly like venir.' },
    { promptLabel: 'valoir', promptSound: 'il valoira', fr: 'il vaudra', ipa: '/il vo.dʁa/', tip: 'Le -oir part, le d arrive. EN: the -oir goes, the d comes.' },
    { promptLabel: 'falloir', promptSound: 'il falloira', fr: 'il faudra', ipa: '/il fo.dʁa/', tip: 'Même chemin que valoir. EN: same path as valoir.' },
    { promptLabel: 'vouloir', promptSound: 'je voulerai', fr: 'je voudrai', ipa: '/ʒə vu.dʁe/', tip: 'Le l part, le d arrive. EN: the l goes, the d comes.' },
    { promptLabel: 'tenir, au pluriel', promptSound: 'ils tenirons', fr: 'ils tiendront', ipa: '/il tjɛ̃.dʁɔ̃/', tip: 'Le radical ne bouge pas avec la personne. EN: the stem does not move with the person.' },
  ],
  drill: [
    { promptSay: 'Mon frère ... jeudi. (venir)', opts: ['viendra', 'venira'], correct: 0 },
    { promptSay: 'Je ... ma promesse. (tenir)', opts: ['tenirai', 'tiendrai'], correct: 1 },
    { promptSay: 'Cette voiture ... moins cher. (valoir)', opts: ['vaudra', 'valoira'], correct: 0 },
    { promptSay: 'Il ... deux voitures. (falloir)', opts: ['falloira', 'faudra', 'faudrait'], correct: 1 },
    { promptSay: 'Personne ne ... conduire la nuit. (vouloir)', opts: ['voulera', 'voudra'], correct: 1 },
    { promptSay: 'Ils ... le coup. (tenir)', opts: ['tiendront', 'tenirons'], correct: 0 },
    { promptSay: 'Il ... mieux réserver. (valoir)', opts: ['valera', 'vaudra'], correct: 1 },
    { promptSay: 'Vous ... peut-être partir avant. (vouloir)', opts: ['voudrez', 'voulerez'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le d fait le radical' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que donne le d oublié' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six formes correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-06-le-d-piege'),
  say: REFRAME,
  terms: ['famille', 'infinitif'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le d', 'Dans quel infinitif trouves-tu le d de viendr-. EN: In which infinitive is the d.',
    ['venir', 'aucun'], 1,
    "Dans aucun. Il n'existe qu'au futur et au conditionnel. EN: in none of them."),
  ctl('falloir', '« Nous faudrons réserver. » EN: Is this possible.',
    ['Impossible : seulement il faudra.', 'Correct.'], 0,
    'falloir ne se conjugue qu’à il. EN: falloir takes il and nothing else.'),
  ctl('La famille', 'Lequel de ces radicaux n’est PAS de la famille en -dr-. EN: Which one is not in the family.',
    ['tiendr-', 'vaudr-', 'enverr-'], 2,
    'enverr- est de la famille en -rr-, acte 3. EN: enverr- belongs to act 3.'),
], ['famille', 'impersonnel', 'radical']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'La famille en -dr-',
    opener: { line: "Cinq verbes font apparaître un d qui n'est dans aucun infinitif : apprends-les ensemble. EN: Five verbs grow a d that is in no infinitive: learn them together.", imageRef: 'lessons/futur-irregulier/act04.jpg' },
    sections: [],
    milestone: 'Tu construis viendr-, tiendr-, vaudr-, faudr- et voudr- sans chercher le d. EN: You build the five -dr- stems without hunting for the d.',
    estScreens: 32, restPoints: ['a4-construire'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_EXEMPLES, A4_CONSTRUIRE, A4_ECOUTE, A4_PIEGE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LES VERBES EN -OIR
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. 150 words of administrative future, the register where these four
 *  verbs actually live. `questionsInModal` so the questions cannot be
 *  answered by scanning the text. */
const A5_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a5-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La lettre de la formation',
  frSub: 'Lis, puis réponds',
  text: "Bonjour, voici comment la formation se passera. Vous recevrez le programme complet lundi prochain, par courriel. Vous devrez choisir deux ateliers sur les six proposés, et vous saurez le jeudi si vos choix sont acceptés. Le nombre de places est limité, et il faudra répondre vite. Les cours du matin commencent à neuf heures. Ceux qui viennent de loin pourront suivre la première semaine en ligne : nous enverrons les liens la veille. À la fin du mois, vous recevrez une attestation. Elle ne vaudra pas un diplôme, mais elle prouvera que vous avez suivi les quarante heures. Une dernière chose : la sortie de terrain du douze aura lieu par tous les temps. Il pleuvra peut-être ce jour-là, alors prévoyez des bottes.",
  glossary: [
    { word: 'ateliers', en: 'workshops', note: 'Un cours court, en petit groupe, sur un sujet précis.' },
    { word: 'une attestation', en: 'a certificate of attendance', note: 'Un papier qui prouve que tu étais là. Ce n’est pas un diplôme.' },
    { word: 'la veille', en: 'the day before', note: 'La veille du douze, c’est le onze.' },
    { word: 'la sortie de terrain', en: 'the field trip', note: 'Une journée de cours dehors, sur le lieu du travail.' },
    { word: 'par tous les temps', en: 'whatever the weather', note: 'Qu’il pleuve ou qu’il fasse beau, ça se fait.' },
    { word: 'des bottes', en: 'boots', note: 'Des chaussures hautes, pour la boue ou la neige.' },
  ],
  questions: [
    { q: 'Relève les quatre verbes en -oir au futur.', a: 'recevrez, devrez, saurez, pourront. Et pleuvra, à la fin. Cinq en tout.' },
    { q: 'Qu’est-ce qui disparaît entre recevoir et recevrez ?', a: 'Le -oi-. recevoir donne recevr-, savoir donne saur-, devoir donne devr-, pouvoir donne pourr-.' },
    { q: 'Quand la personne saura-t-elle si ses choix sont acceptés ?', a: 'Le jeudi. « Vous saurez le jeudi » : saurez vient de savoir.' },
    { q: 'L’attestation vaut-elle un diplôme ?', a: 'Non. « Elle ne vaudra pas un diplôme » : valoir, de la famille en -dr- de l’acte 4.' },
    { q: 'Pourquoi faut-il des bottes ?', a: 'Parce qu’il pleuvra peut-être et que la sortie a lieu par tous les temps. pleuvra vient de pleuvoir.' },
  ],
  audio: REC('rec-b1-06-formation'),
  say: `Lis d'abord. La règle vient après. ${REFRAME}`,
  terms: ['radical', 'famille'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-familles',
  title: 'Le -oi- qui disparaît',
  frSub: 'saur- devr- recevr- pleuvr-',
  hint: 'Cinq cartes. Regarde ce qui manque.',
  audio: REC('rec-b1-06-oir'),
  say: REFRAME,
  terms: ['radical', 'famille'],
  cards: [
    {
      head: 'Un geste, quatre verbes',
      label: 'la famille en -oir',
      fr: 'saur- · devr- · recevr- · pleuvr-',
      body: "Tu enlèves le -oi- de l'infinitif, tu gardes le reste, tu ajoutes le r du futur. C'est régulier à l'intérieur de la famille. EN: take out the -oi-, keep the rest, add the future r.",
    },
    {
      head: 'savoir donne saur-',
      label: 'je saurai',
      fr: 'Tu sauras le résultat mardi.',
      sub: '[tü soh-rah luh ray-zül-TAH mar-DEE]',
      body: `Le verbe des nouvelles qui arrivent. ${Cap(SAVOIR_REF)} t'a donné savoir contre connaître ; ici, seule la forme change. EN: only the form changes here.`,
    },
    {
      head: 'devoir donne devr-',
      label: 'je devrai',
      fr: 'Je devrai passer à la banque avant midi.',
      sub: '[zhuh duh-vray pah-SAY ah lah BAHⁿK ah-vahⁿ mee-DEE]',
      body: "L'obligation à venir. Ne le confonds pas avec « je devais », qui est l'imparfait : acte 9. EN: do not confuse it with je devais.",
    },
    {
      head: 'recevoir donne recevr-',
      label: 'je recevrai',
      fr: 'Vous recevrez une confirmation par courriel.',
      sub: '[voo ruh-suh-VRAY ün kohⁿ-feer-mah-syohⁿ par koo-RYEL]',
      body: "Le verbe des lettres et des colis. Apercevoir et décevoir suivent exactement le même chemin. EN: apercevoir and décevoir follow the same path.",
    },
    {
      head: 'pleuvoir donne pleuvr-',
      label: 'il pleuvra',
      fr: 'Il pleuvra toute la semaine.',
      sub: '[eel pluh-vrah toot lah suh-MENN]',
      body: "Une seule personne possible : il. C'est un impersonnel, et l'acte 6 en réunit six. EN: one person only; act 6 gathers six of these.",
    },
  ],
};

/** Six rows, and two of them are verbs from act 3: pouvoir and voir are
 *  -oir verbs too, so the two families overlap on purpose. A six-row cut of
 *  `sheet-familles`. */
const A5_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-table',
  layer: 'core',
  sheetId: 'sheet-familles',
  title: 'Six verbes en -oir',
  frSub: 'Touche une ligne',
  cols: ['Infinitif', 'Ce qui part', 'Radical'],
  rows: [
    { cells: ['savoir', '-oi-', 'saur-'], say: 'Nous saurons bientôt qui remplace Malik.',
      detail: { title: 'savoir', body: 'saurai, sauras, saura, saurons, saurez, sauront. EN: saur- on all six persons.', say: 'Tu sauras le résultat mardi.' } },
    { cells: ['devoir', '-oi-', 'devr-'], say: 'Elle devra choisir entre les deux postes.',
      detail: { title: 'devoir', body: "devrai, devras, devra, devrons, devrez, devront. À ne pas confondre avec je devais. EN: not to be confused with je devais.", say: 'Je devrai passer à la banque avant midi.' } },
    { cells: ['recevoir', '-oi-', 'recevr-'], say: 'Vous recevrez une confirmation par courriel.',
      detail: { title: 'recevoir', body: 'recevrai, recevras, recevra, recevrons, recevrez, recevront. Apercevoir et décevoir suivent. EN: apercevoir and décevoir follow.', say: 'Nous recevrons les liens la veille.' } },
    { cells: ['pleuvoir', '-oi-', 'pleuvr-'], say: 'Il pleuvra sur toute la région.',
      detail: { title: 'pleuvoir', body: "Une seule forme : il pleuvra. Personne ne dit nous pleuvrons. EN: one form only.", say: 'Il pleuvra toute la semaine, d’après la météo.' } },
    { cells: ['pouvoir', '-oi-, et un r de plus', 'pourr-'], say: 'Nous pourrons répondre demain matin.',
      detail: { title: 'pouvoir', body: "Le -oi- part comme ici, et le r double comme à l'acte 3. Deux familles à la fois. EN: it belongs to both families.", say: 'Tu pourras rentrer tard demain soir.' } },
    { cells: ['voir', '-oi-, et un r de plus', 'verr-'], say: 'On verra ça la semaine prochaine.',
      detail: { title: 'voir', body: "Même cas que pouvoir. Et prévoir, lui, garde son -oi- : acte 7. EN: same as pouvoir, and prévoir keeps its -oi-.", say: 'Nous verrons le lac depuis la cuisine.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['famille', 'radical'],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis la famille en -oir',
  frSub: 'Enlève, puis ajoute',
  groups: [
    grp('savoir', [
      it(E(283), 'il saura'),
      it(E(284), 'nous saurons'),
      it(E(285), 'ils sauront'),
    ], chk(
      'Que reste-t-il de savoir dans saurons. EN: What is left of savoir.',
      ['sa-', 'sav-', 'savoi-'],
      0,
      'sa- plus le r du futur. Le -voi- est parti. EN: sa- plus the future r.',
    )),
    grp('devoir et recevoir', [
      it(E(288), 'tu devras'),
      it(E(290), 'nous devrons'),
      it(E(293), 'tu recevras'),
    ], chk(
      'devoir donne devr-. recevoir donne donc : EN: So recevoir gives:',
      ['recevoir-', 'recevr-', 'recr-'],
      1,
      'Le même geste : le -oi- part, le reste tient. EN: the same move.',
    )),
    grp('pleuvoir', [
      it(E(297), 'il pleuvra'),
      it(E(298), 'la météo de la semaine'),
      it(E(301), 'devoir, en contraste'),
    ], chk(
      '« Nous pleuvrons demain. » Cette phrase est : EN: This sentence is:',
      ['correcte', 'impossible'],
      1,
      'pleuvoir n’a qu’une personne, il. EN: pleuvoir has one person.',
    )),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'impersonnel'],
};

const A5_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a5-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quatre verbes en -oir',
  frSub: 'Huit phrases',
  lines: [
    ln(E(286)), ln(E(291)), ln(E(295)), ln(E(298)),
    ln(E(300)), ln(E(301)), ln(E(284)), ln(E(294)),
  ],
  questions: [
    { q: 'Première phrase : quand la personne saura-t-elle. EN: When will the person know.', opts: ['lundi', 'jeudi', 'mardi'], correct: 2, why: 'Tu sauras le résultat mardi. EN: on Tuesday.' },
    { q: 'Deuxième phrase : est-ce un choix ou une obligation. EN: A choice or an obligation.', opts: ['une obligation', 'un choix'], correct: 0, why: 'je devrai : devoir dit l’obligation. EN: devoir says obligation.' },
    { q: 'Troisième phrase : comment arrive la confirmation. EN: How does the confirmation arrive.', opts: ['par téléphone', 'par courriel'], correct: 1, why: 'une confirmation par courriel. EN: by email.' },
    { q: 'Quatrième phrase : combien de temps durera la pluie. EN: How long will the rain last.', opts: ['toute la semaine', 'un jour'], correct: 0, why: 'Il pleuvra toute la semaine. EN: all week.' },
    { q: 'Dernière phrase : une ou plusieurs personnes recevront. EN: One person or several.', opts: ['une', 'plusieurs'], correct: 1, why: 'nous recevrons : la terminaison -ons dit le pluriel. EN: -ons says plural.' },
  ],
  audio: REC('rec-b1-06-oir-ecoute'),
  say: REFRAME,
  terms: ['oreille', 'radical'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre fautes en -oir',
  frSub: 'Le -oi- qui revient',
  errors: [
    { wrong: 'Tu savoiras le résultat mardi.', right: 'Tu sauras le résultat mardi.',
      why: "Normal : l'infinitif est savoir, et tu l'as gardé entier. Ici il faut enlever le -voi- avant d'ajouter la fin. EN: you kept the whole infinitive." },
    { wrong: 'Je devoirai passer à la banque.', right: 'Je devrai passer à la banque.',
      why: "Même geste manqué. devoir garde de-, perd -oi-, prend le r. EN: devoir keeps de-, loses -oi-." },
    { wrong: 'Vous receverez une confirmation.', right: 'Vous recevrez une confirmation.',
      why: "Là tu as inventé un verbe en -er. recevoir n'est pas recever : le radical est recevr-. EN: recevoir is not recever." },
    { wrong: 'Nous pleuvrons demain.', right: 'Il pleuvra demain.',
      why: "Le radical est bon, la personne ne l'est pas. pleuvoir n'en a qu'une, et c'est il. EN: the stem is right, the person is not." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['infinitif', 'impersonnel'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le geste', 'Pour construire le futur de savoir, tu : EN: To build the future of savoir, you:',
    ['enlèves le -voi-', 'gardes tout', 'ajoutes un d'], 0,
    'sa- plus r plus la fin. EN: sa- plus r plus the ending.'),
  ctl('Deux familles', 'pouvoir appartient à combien de familles. EN: How many families does pouvoir belong to.',
    ['deux', 'une'], 0,
    'Il perd son -oi- et double son r. EN: it loses the -oi- and doubles the r.'),
  ctl('La personne', 'Combien de personnes a pleuvoir au futur. EN: How many persons does pleuvoir have.',
    ['six', 'une', 'trois'], 1,
    'Une seule : il pleuvra. EN: one only.'),
], ['famille', 'radical', 'impersonnel']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Les verbes en -oir',
    opener: { line: "Quatre verbes perdent la moitié de leur nom au futur : enlève le -oi- et tu as le radical. EN: Four verbs lose half their name: take out the -oi- and you have the stem.", imageRef: 'lessons/futur-irregulier/act05.jpg' },
    sections: [],
    milestone: 'Tu construis saur-, devr-, recevr- et pleuvr- en enlevant le -oi- sans hésiter. EN: You build the four -oir stems by taking the -oi- out.',
    estScreens: 33, restPoints: ['a5-construire'],
  },
  sections: [A5_LECTURE, A5_CARTES, A5_TABLE, A5_CONSTRUIRE, A5_ECOUTE, A5_ERREURS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — LES IMPERSONNELS
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Le pique-nique de samedi',
  frSub: 'La météo décide',
  setting: "Une cuisine à Montréal, jeudi soir. Deux voisins préparent samedi. EN: A kitchen in Montreal, Thursday evening.",
  bubbles: [
    { from: 'narrator', fr: 'Karim et toi regardez la météo avant de décider.', en: 'Karim and you are looking at the forecast before deciding.' },
    { from: 'coach', fr: 'Samedi, il fera froid le matin, mais il fera beau l’après-midi.', en: 'On Saturday it will be cold in the morning, but fine in the afternoon.', warn: 'il fera : faire, avec il pour seul sujet. EN: il fera, one subject only.' },
    { from: 'user', fr: 'Et le dimanche, il pleuvra sur toute la région.', en: 'And on Sunday it will rain across the whole region.', warn: 'il pleuvra : pleuvoir. EN: il pleuvra.' },
    { from: 'coach', fr: 'Alors samedi. Il y aura du monde au parc, il faudra arriver tôt.', en: 'Saturday then. There will be a crowd at the park, we will have to get there early.', warn: 'il y aura et il faudra, dans la même phrase. EN: two impersonals at once.' },
    { from: 'user', fr: 'Il vaudra mieux prendre deux tables. Je m’en occupe.', en: 'It will be better to take two tables. I will take care of it.', warn: 'il vaudra mieux : le conseil. EN: the advice form.' },
    { from: 'coach', fr: 'Ça ira. On sera une quinzaine, pas plus.', en: 'It will be fine. There will be about fifteen of us, no more.', warn: 'ça ira : la réassurance. EN: the reassurance form.' },
  ],
  closing: { fr: 'Six formes, un seul sujet, et il ne désigne personne.', en: 'Six forms, one subject, and it stands for nobody.' },
  audio: REC('rec-b1-06-pique-nique'),
  say: REFRAME,
  terms: ['impersonnel', 'prediction'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-impersonnels',
  title: 'Six formes à savoir par cœur',
  frSub: 'Le il qui ne désigne personne',
  hint: 'Six cartes. Aucune ne se conjugue.',
  audio: REC('rec-b1-06-impersonnels'),
  say: REFRAME,
  terms: ['impersonnel', 'prediction'],
  cards: [
    {
      head: 'il faudra',
      label: 'falloir',
      fr: 'Il faudra deux voitures pour tout emporter.',
      sub: '[eel foh-drah duh vwah-TÜR poor too-tahⁿ-por-TAY]',
      body: "Le besoin à venir, sans dire qui s'en charge. C'est ce qui le rend si pratique dans un message. EN: a need to come, with nobody named.",
    },
    {
      head: 'il y aura',
      label: 'avoir',
      fr: 'Il y aura du monde au marché samedi.',
      sub: '[eel yah-rah dü MOHⁿD oh mar-SHAY sam-DEE]',
      body: "Le futur de « il y a ». Trois petits mots collés, et le radical aur- au milieu. EN: the future of il y a, with aur- in the middle.",
    },
    {
      head: 'il fera',
      label: 'faire',
      fr: 'Il fera nuit avant six heures.',
      sub: '[eel fuh-rah NÜEE ah-vahⁿ see-ZUHR]',
      body: "La météo et la lumière : il fera froid, il fera beau, il fera nuit. Jamais avec un vrai sujet. EN: weather and light, never with a real subject.",
    },
    {
      head: 'il pleuvra',
      label: 'pleuvoir',
      fr: 'Il pleuvra sur toute la région.',
      sub: '[eel pluh-vrah sür toot lah ray-ZHYOHⁿ]',
      body: "Une forme, une seule. Il neigera marche pareil, mais neiger est régulier. EN: one form; il neigera works the same way and is regular.",
    },
    {
      head: 'il vaudra mieux',
      label: 'valoir',
      fr: 'Il vaudra mieux réserver.',
      sub: '[eel voh-drah myuh ray-zehr-VAY]',
      body: "Le conseil poli : personne n'est visé, et pourtant tout le monde comprend. EN: polite advice with nobody named.",
    },
    {
      head: 'ça ira',
      label: 'aller',
      fr: 'Ça ira mieux demain.',
      sub: '[sah ee-rah myuh duh-MEHⁿ]',
      body: "Avec ça et non il, mais le principe est le même : un sujet qui ne désigne rien. EN: with ça, but the same principle.",
    },
  ],
};

const A6_METEO: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-meteo',
  layer: 'core',
  sheetId: 'sheet-impersonnels',
  previewCount: 5,
  title: 'La météo de la semaine',
  frSub: 'Cinq bulletins',
  examples: [
    ex(E(306), 'le froid du matin'),
    ex(E(307), 'la lumière, pas la météo'),
    ex(E(308), 'la forme négative'),
    ex(E(312), 'la pluie, sur une région'),
    ex(E(313), 'la neige, et un verbe régulier'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['impersonnel', 'prediction'],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Choisis la bonne forme impersonnelle',
  frSub: 'Le besoin, la présence, le temps',
  groups: [
    grp('Le besoin et la présence', [
      it(E(311), 'le besoin'),
      it(E(303), 'la présence'),
      it(E(315), 'la présence, en négatif'),
    ], chk(
      'Tu veux dire : there will be nobody. EN: You want to say: there will be nobody.',
      ['Il ne faudra personne.', 'Ça n’ira personne.', "Il n'y aura personne."],
      2,
      "il y aura est le futur de il y a. EN: il y aura is the future of il y a.",
    )),
    grp('Le temps qu’il fera', [
      it(E(305), 'le beau temps'),
      it(E(307), 'la nuit'),
      it(E(312), 'la pluie'),
    ], chk(
      'Pour la météo, quel verbe revient le plus souvent. EN: Which verb comes back most for the weather.',
      ['faire', 'être', 'aller'],
      0,
      'il fera beau, il fera froid, il fera nuit. EN: faire covers most of it.',
    )),
    grp('Le conseil et la réassurance', [
      it(E(316), 'le conseil'),
      it(E(309), 'la réassurance'),
      it(E(310), 'la réassurance, datée'),
    ], chk(
      '« Il vaudra mieux réserver. » Qui doit réserver. EN: Who has to book.',
      ['toi', 'la phrase ne le dit pas', 'tout le monde'],
      1,
      "C'est justement à ça que sert un impersonnel. EN: that is exactly what an impersonal is for.",
    )),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['impersonnel', 'prediction'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Le bulletin de samedi',
  frSub: 'Huit phrases',
  lines: [
    ln(E(303)), ln(E(304)), ln(E(306)), ln(E(308)),
    ln(E(310)), ln(E(315)), ln(E(318)), ln(E(319)),
  ],
  questions: [
    { q: 'Première phrase : où y aura-t-il du monde. EN: Where will there be a crowd.', opts: ['au bureau', 'au parc', 'au marché'], correct: 2, why: 'du monde au marché samedi. EN: at the market.' },
    { q: 'Troisième phrase : chaud ou froid. EN: Warm or cold.', opts: ['chaud', 'froid'], correct: 1, why: 'Il fera froid demain matin. EN: cold.' },
    { q: 'Quatrième phrase : le week-end sera beau. EN: Will the weekend be fine.', opts: ['Non', 'Oui'], correct: 0, why: 'Il ne fera pas beau ce week-end. EN: no, the negative.' },
    { q: 'Sixième phrase : combien de personnes au bureau lundi. EN: How many people at the office on Monday.', opts: ['quelques-unes', 'aucune'], correct: 1, why: 'Il n’y aura personne. EN: nobody.' },
    { q: 'Septième phrase : le train sera à l’heure. EN: Will the train be on time.', opts: ['Non, du retard', 'Oui'], correct: 0, why: 'Il y aura sûrement du retard. EN: there will be a delay.' },
  ],
  audio: REC('rec-b1-06-meteo-ecoute'),
  say: REFRAME,
  terms: ['oreille', 'impersonnel'],
};

const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: 'Le sujet qu’on invente',
  frSub: 'Six phrases trop bien construites',
  rule: {
    title: 'Un impersonnel ne se conjugue pas',
    body: "En anglais, we will have to et there will be ont un vrai sujet. En français, ces phrases prennent il, et il ne remplace personne. Conjuguer, c'est se tromper. EN: these verbs take il, and il replaces nobody.",
  },
  cards: [
    { promptLabel: 'we will have to', promptSound: 'nous faudrons partir tôt', fr: 'il faudra partir tôt', ipa: '/il fo.dʁa paʁ.tiʁ to/', tip: 'falloir n’a que il. EN: falloir has only il.' },
    { promptLabel: 'there will be', promptSound: 'ils seront du monde', fr: 'il y aura du monde', ipa: '/i.lja.ʁa dy mɔ̃d/', tip: 'C’est il y a, au futur. EN: it is il y a, in the future.' },
    { promptLabel: 'it will be cold', promptSound: 'ce sera froid', fr: 'il fera froid', ipa: '/il fə.ʁa fʁwa/', tip: 'La météo prend faire, pas être. EN: weather takes faire.' },
    { promptLabel: 'it will rain', promptSound: 'nous pleuvrons', fr: 'il pleuvra', ipa: '/il plø.vʁa/', tip: 'Une seule forme existe. EN: one form exists.' },
    { promptLabel: 'it will be better', promptSound: 'ce vaudra mieux', fr: 'il vaudra mieux', ipa: '/il vo.dʁa mjø/', tip: 'La formule est figée avec il. EN: the phrase is fixed with il.' },
    { promptLabel: 'it will be fine', promptSound: 'il ira bien', fr: 'ça ira', ipa: '/sa i.ʁa/', tip: 'Celui-là prend ça, pas il. EN: this one takes ça.' },
  ],
  drill: [
    { promptSay: '... deux voitures pour tout emporter.', opts: ['Nous faudrons', 'Il faudra'], correct: 1 },
    { promptSay: '... du monde au marché samedi.', opts: ['Il y aura', 'Ils seront'], correct: 0 },
    { promptSay: '... nuit avant six heures.', opts: ['Il fera', 'Ce sera', 'Il ira'], correct: 0 },
    { promptSay: '... sur toute la région.', opts: ['Nous pleuvrons', 'Il pleuvra'], correct: 1 },
    { promptSay: '... mieux réserver.', opts: ['Il vaudra', 'Ce vaudra'], correct: 0 },
    { promptSay: '... mieux demain, ne t’inquiète pas.', opts: ['Il ira', 'Ça ira'], correct: 1 },
    { promptSay: '... personne au bureau lundi.', opts: ['Il n’y aura', 'Ils ne seront'], correct: 0 },
    { promptSay: '... du temps, mais on y arrivera.', opts: ['Nous faudrons', 'Il faudra'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Un sujet qui ne désigne rien' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que donne le sujet inventé' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six formes correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-06-impersonnels-piege'),
  say: REFRAME,
  terms: ['impersonnel', 'radical'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le sujet', 'Dans « il faudra partir », qui est il. EN: In il faudra partir, who is il.',
    ['toi', 'personne', 'le narrateur'], 1,
    'Personne. Il tient la place du sujet, rien de plus. EN: nobody; it just holds the subject slot.'),
  ctl('La météo', 'Pour dire it will be cold, tu prends : EN: For it will be cold, you take:',
    ['faire', 'être'], 0,
    'Il fera froid. La météo prend faire. EN: weather takes faire.'),
  ctl('ça', 'Quelle forme ne prend PAS il. EN: Which one does not take il.',
    ['il y aura', 'il vaudra mieux', 'ça ira'], 2,
    'ça ira prend ça. Le principe reste le même. EN: ça ira takes ça.'),
], ['impersonnel', 'prediction', 'radical']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Les impersonnels',
    opener: { line: "Il pleuvra, il faudra, il y aura : six formes que tu ne conjugueras jamais, et qui servent tous les jours. EN: Six forms you will never conjugate, and that you will use every day.", imageRef: 'lessons/futur-irregulier/act06.jpg' },
    sections: [],
    milestone: 'Tu annonces la météo, un besoin et une foule sans inventer de sujet. EN: You announce weather, a need and a crowd without inventing a subject.',
    estScreens: 31, restPoints: ['a6-construire'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_METEO, A6_CONSTRUIRE, A6_ECOUTE, A6_PIEGE, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LES COMPOSÉS
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Le pot de départ',
  frSub: 'Six mois à Abidjan',
  setting: "Un pot de départ dans un bureau à Nantes, un vendredi soir. EN: A leaving do in a Nantes office, on a Friday evening.",
  bubbles: [
    { from: 'narrator', fr: 'Awa part travailler six mois à Abidjan. Ses collègues lui posent des questions.', en: 'Awa is leaving to work six months in Abidjan. Her colleagues are asking questions.' },
    { from: 'coach', fr: 'Tu reviendras en mars, alors.', en: 'So you will come back in March.', warn: 'revenir suit venir. EN: revenir follows venir.' },
    { from: 'user', fr: 'Oui. Et j’obtiendrai peut-être un poste fixe là-bas.', en: 'Yes. And I may well get a permanent post there.', warn: 'obtenir suit tenir. EN: obtenir follows tenir.' },
    { from: 'coach', fr: 'Tu deviendras responsable de toute la zone, à ce compte-là.', en: 'You will become head of the whole region, at that rate.', warn: 'devenir suit venir aussi. EN: devenir too.' },
    { from: 'user', fr: 'On verra. En tout cas, on se reverra à la rentrée.', en: 'We shall see. In any case, we will see each other again in September.', warn: 'revoir suit voir. EN: revoir follows voir.' },
    { from: 'coach', fr: 'Et nous referons ce pot, mais pour ton retour.', en: 'And we will do this party again, but for your return.', warn: 'refaire suit faire. EN: refaire follows faire.' },
  ],
  closing: { fr: 'Cinq verbes de plus, et aucun radical nouveau à apprendre.', en: 'Five more verbs, and not one new stem.' },
  audio: REC('rec-b1-06-pot'),
  say: REFRAME,
  terms: ['compose', 'radical'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-composes',
  title: 'Le préfixe est gratuit',
  frSub: 'revenir, devenir, obtenir, refaire, revoir',
  hint: 'Six cartes. La dernière est l’exception.',
  audio: REC('rec-b1-06-composes'),
  say: REFRAME,
  terms: ['compose', 'radical'],
  cards: [
    {
      head: 'Un radical, cinq verbes',
      label: 'les composés',
      fr: 'viendr- · reviendr- · deviendr-',
      body: "Tu colles le préfixe devant, tu ne touches à rien d'autre. Si tu sais dire je viendrai, tu sais déjà dire je reviendrai. EN: put the prefix in front and change nothing else.",
    },
    {
      head: 'revenir et devenir',
      label: 'sur venir',
      fr: 'Je reviendrai te voir en août.',
      sub: '[zhuh ruh-vyehⁿ-dray tuh VWAR ahⁿ-NOOT]',
      body: "Prévenir, parvenir et se souvenir suivent aussi. Un seul radical, six ou sept verbes. EN: prévenir, parvenir and se souvenir follow too.",
    },
    {
      head: 'obtenir et retenir',
      label: 'sur tenir',
      fr: "J'obtiendrai mon permis avant l'été.",
      sub: '[zhob-tyehⁿ-dray mohⁿ pehr-MEE ah-vahⁿ lay-TAY]',
      body: "Appartenir, maintenir et soutenir aussi. Le d de tiendr- vient avec le verbe partout. EN: appartenir, maintenir and soutenir as well.",
    },
    {
      head: 'refaire',
      label: 'sur faire',
      fr: 'Nous referons la cuisine l’année prochaine.',
      sub: '[noo ruh-fuh-rohⁿ lah küee-ZEENN lah-NAY pro-SHENN]',
      body: "Défaire, satisfaire et surtout faire lui-même : le radical fer- couvre toute la famille. EN: fer- covers the whole family.",
    },
    {
      head: 'revoir',
      label: 'sur voir',
      fr: 'On se reverra à la rentrée.',
      sub: '[ohⁿ suh ruh-veh-RAH ah lah rahⁿ-TRAY]',
      body: "Le double r de l'acte 3 vient avec. Entrevoir suit aussi. EN: the double r of act 3 comes along.",
    },
    {
      head: "L'exception : prévoir",
      label: 'attention',
      fr: 'je prévoirai · je reverrai',
      body: "prévoir garde son -oi- : je prévoirai, et non « je prévairai ». C'est le seul composé de voir qui refuse verr-. EN: prévoir keeps its -oi-, and it is the only one that does.",
    },
  ],
};

const A7_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a7-focus',
  layer: 'core',
  sheetId: 'sheet-composes',
  title: 'Ce que tu gagnes en une minute',
  frSub: 'Quatre points',
  points: [
    'Le préfixe ne touche jamais au radical : reviendr-, obtiendr-, refer-, reverr-. EN: the prefix never touches the stem.',
    "Un radical appris à l'acte 2 te donne aujourd'hui six verbes de plus. EN: one stem from act 2 gives you six more verbs today.",
    'Cherche le verbe simple sous le composé, puis conjugue celui-là. EN: find the simple verb underneath, then conjugate that one.',
    'Une seule exception compte : prévoir garde son -oi- au futur. EN: one exception: prévoir keeps its -oi-.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['compose', 'radical'],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trouve le verbe simple',
  frSub: 'Puis conjugue celui-là',
  groups: [
    grp('Sur venir', [
      it(E(321), 'revenir'),
      it(E(324), 'devenir'),
      it(E(322), 'dans une phrase'),
    ], chk(
      'prévenir se conjugue donc comme : EN: So prévenir behaves like:',
      ['venir', 'prendre', 'prévoir'],
      0,
      'je préviendrai. Le radical viendr- avec son préfixe. EN: je préviendrai.',
    )),
    grp('Sur tenir', [
      it(E(327), 'obtenir'),
      it(E(329), 'retenir'),
      it(E(328), 'dans une phrase'),
    ], chk(
      'maintenir au futur, première personne : EN: maintenir, first person:',
      ['je maintenirai', 'je maintiendrai', 'je maintirai'],
      1,
      'tiendr- plus son préfixe. EN: tiendr- plus the prefix.',
    )),
    grp('Sur faire et voir', [
      it(E(331), 'refaire'),
      it(E(333), 'revoir'),
      it(E(335), 'et prévoir, qui refuse'),
    ], chk(
      'revoir donne reverr-. prévoir donne donc : EN: So prévoir gives:',
      ['préverr-', 'prévoir-'],
      1,
      "je prévoirai. C'est le seul composé de voir qui garde son -oi-. EN: the one compound that keeps its -oi-.",
    )),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['compose', 'famille'],
};

const A7_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a7-ecoute',
  layer: 'core',
  title: 'Le préfixe, à l’oreille',
  frSub: 'Huit phrases',
  lines: [
    ln(E(322)), ln(E(325)), ln(E(328)), ln(E(330)),
    ln(E(332)), ln(E(334)), ln(E(336)), ln(E(321)),
  ],
  questions: [
    { q: 'Première phrase : la personne vient ou revient. EN: Coming, or coming back.', opts: ['elle revient', 'elle vient'], correct: 0, why: 'reviendrai : le préfixe re- dit le retour. EN: re- says the return.' },
    { q: 'Deuxième phrase : quel poste. EN: Which post.', opts: ['comptable', 'directrice'], correct: 1, why: 'Elle deviendra directrice en janvier. EN: director.' },
    { q: 'Quatrième phrase : retenir veut dire ici : EN: retenir here means:', opts: ['réserver', 'se souvenir'], correct: 0, why: 'retenir une table : réserver. EN: to book.' },
    { q: 'Septième phrase : le verbe est prévoir ou revoir. EN: prévoir or revoir.', opts: ['revoir', 'prévoir'], correct: 1, why: 'prévoirons garde le -oi-. reverrons ne l’aurait pas. EN: prévoirons keeps the -oi-.' },
    { q: 'Ces huit verbes demandent-ils des radicaux nouveaux. EN: Do these need new stems.', opts: ['Non, aucun', 'Oui, six'], correct: 0, why: 'Tous viennent des actes 2 et 3. EN: all of them come from acts 2 and 3.' },
  ],
  audio: REC('rec-b1-06-composes-ecoute'),
  say: REFRAME,
  terms: ['compose', 'oreille'],
};

const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre fautes de composé',
  frSub: 'Le préfixe qui déraille',
  errors: [
    { wrong: 'Je revenirai te voir en août.', right: 'Je reviendrai te voir en août.',
      why: "Normal : tu as vu re- comme un préfixe neutre et tu as conjugué revenir comme un verbe en -ir. Il suit venir. EN: it follows venir, not the -ir pattern." },
    { wrong: 'J’obtenirai mon permis avant l’été.', right: 'J’obtiendrai mon permis avant l’été.',
      why: "Même chose avec tenir. Le d de tiendr- vient avec le verbe, préfixe ou pas. EN: the d comes along with the verb." },
    { wrong: 'Nous refaisons la cuisine l’année prochaine.', right: 'Nous referons la cuisine l’année prochaine.',
      why: "La forme est correcte, mais c'est le présent. Le futur de refaire est referons, avec le radical fer-. EN: correct form, wrong tense." },
    { wrong: 'Je préverrai un budget pour les travaux.', right: 'Je prévoirai un budget pour les travaux.',
      why: "Tu as appliqué la règle de revoir, ce qui est logique. prévoir est l'exception : il garde son -oi-. EN: logical, and prévoir is the exception." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['compose', 'infinitif'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le préfixe', 'Le préfixe change-t-il le radical. EN: Does the prefix change the stem.',
    ['Oui, toujours.', 'Non, jamais.'], 1,
    'reviendr-, obtiendr-, refer-, reverr- : le radical est celui du verbe simple. EN: never.'),
  ctl('La méthode', 'Devant un composé inconnu, tu cherches : EN: Faced with an unknown compound, you look for:',
    ['un nouveau radical', 'la traduction', 'le verbe simple dessous'], 2,
    'Puis tu conjugues le verbe simple. EN: then you conjugate the simple verb.'),
  ctl('prévoir', 'prévoir se conjugue comme revoir. EN: Does prévoir behave like revoir.',
    ['Non : il garde son -oi-.', 'Oui.'], 0,
    "je prévoirai, contre je reverrai. C'est la seule exception. EN: the one exception."),
], ['compose', 'radical', 'famille']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Les composés',
    opener: { line: "Un préfixe devant un verbe que tu connais, et tu gagnes cinq verbes sans rien apprendre. EN: A prefix on a verb you already know, and you gain five verbs for nothing.", imageRef: 'lessons/futur-irregulier/act07.jpg' },
    sections: [],
    milestone: 'Tu conjugues revenir, devenir, obtenir, refaire et revoir, et tu connais l’exception. EN: You conjugate the five compounds and you know the exception.',
    estScreens: 30, restPoints: ['a7-construire'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_FOCUS, A7_CONSTRUIRE, A7_ECOUTE, A7_ERREURS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — LES FINS NE BOUGENT PAS
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le programme de la sortie',
  frSub: 'Six personnes, six terminaisons',
  text: "Voici le programme de dimanche. On partira du parking à sept heures, alors soyez là à moins le quart. Le trajet durera deux heures et demie. Nous serons à la frontière vers dix heures : il faudra montrer une pièce d'identité, donc ne la mettez pas au fond du sac. Vous aurez une pause de vingt minutes au poste. Ensuite, nous irons directement au lac. Sur place, vous pourrez louer un vélo ou marcher, comme vous voudrez. Les guides feront deux groupes selon le rythme. Je serai avec le groupe lent, et Marc sera avec l'autre. Vers seize heures, on fera le tour du lac ensemble, puis on reprendra le car. Nous devrons être rentrés avant la nuit, donc personne ne traînera au retour. Vous recevrez le détail par message demain soir.",
  glossary: [
    { word: 'le trajet', en: 'the journey', note: 'Le temps et la route entre le départ et l’arrivée.' },
    { word: 'la frontière', en: 'the border', note: 'La ligne entre deux pays. Ici, on la passe en car.' },
    { word: 'une pièce d’identité', en: 'an identity document', note: 'Une carte ou un passeport. À garder sur soi.' },
    { word: 'poste', en: 'border post', note: 'Le bâtiment où les gardes contrôlent les papiers.' },
    { word: 'le car', en: 'the coach', note: 'Le grand bus des sorties. Pas le bus de ville.' },
    { word: 'traînera', en: 'will dawdle', note: 'De traîner : aller trop lentement, faire attendre les autres.' },
  ],
  questions: [
    { q: 'Trouve une forme en -ai, une en -ons et une en -ez dans le texte.', a: 'je serai ; nous serons, nous irons, nous devrons ; vous aurez, vous pourrez, vous recevrez.' },
    { q: 'Les terminaisons changent-elles selon le radical ?', a: 'Non. -ons est le même sur ser-, ir- et devr-. Le radical change, la terminaison non.' },
    { q: 'Quelle lettre se trouve avant chaque terminaison, sans exception ?', a: 'Un r. parti-r-a, se-r-ons, au-r-ez, fe-r-ont, dev-r-ons, recev-r-ez.' },
    { q: 'Combien de radicaux irréguliers y a-t-il dans le texte ?', a: 'Sept : ser-, faudr-, aur-, ir-, pourr-, voudr-, fer-, devr-, recevr-. Neuf, en comptant devr- et recevr-.' },
    { q: 'Qui sera avec le groupe lent ?', a: 'La personne qui écrit. « Je serai avec le groupe lent, et Marc sera avec l’autre. »' },
  ],
  audio: REC('rec-b1-06-sortie'),
  say: REFRAME,
  terms: ['fin', 'radical'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-radicaux',
  title: 'Les six fins, sur n’importe quel radical',
  frSub: 'La moitié qui ne bouge pas',
  hint: 'Cinq cartes. Toujours les mêmes six.',
  audio: REC('rec-b1-06-fins'),
  say: REFRAME,
  terms: ['fin', 'radical'],
  cards: [
    {
      head: 'Les six',
      label: 'sur tous les verbes',
      fr: '-ai · -as · -a · -ons · -ez · -ont',
      body: `Il n'existe pas un seul verbe français qui prenne d'autres terminaisons au futur. Pas un. ${REFRAME} EN: not one French verb takes other future endings.`,
    },
    {
      head: 'Le même -ons partout',
      label: 'nous',
      fr: 'nous serons · nous pourrons · nous devrons',
      body: "Trois radicaux, trois familles, une seule terminaison. Tu n'as jamais à choisir cette moitié du mot. EN: three stems, three families, one ending.",
    },
    {
      head: 'Le r qui annonce le futur',
      label: 'le test',
      fr: 'se-r-ons · pour-r-ons · dev-r-ons',
      body: `${THE_R} Si tu construis une forme et qu'il n'y a pas de r avant la fin, la forme est fausse. EN: ${THE_R_EN}`,
    },
    {
      head: 'on, le raccourci',
      label: 'à l’oral',
      fr: 'on sera · on aura · on fera',
      body: "À l'oral, on remplace nous presque partout. La terminaison est celle de il, et le radical ne change pas. EN: on takes the il ending, and the stem is unchanged.",
    },
    {
      head: 'Ce que ça te coûte vraiment',
      label: 'le bilan',
      fr: 'vingt radicaux · zéro terminaison',
      body: "Tu as appris une vingtaine de radicaux. Tu n'as appris aucune terminaison nouvelle depuis la leçon précédente. EN: twenty stems, and no new ending at all.",
    },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'La même fin sur trois radicaux',
  frSub: 'vous, nous, on',
  groups: [
    grp('vous, sur quatre radicaux', [
      it(E(339), 'avoir'),
      it(E(341), 'faire'),
      it(E(343), 'pouvoir'),
      it(E(345), 'devoir'),
    ], chk(
      'Ces quatre formes ont quoi en commun. EN: What do these four share.',
      ['la terminaison -ez', 'le radical', 'la famille'],
      0,
      `Quatre radicaux, une seule fin. ${REFRAME} EN: ${REFRAME_EN}`,
    )),
    grp('on, à l’oral', [
      it(E(348), 'être'),
      it(E(349), 'avoir'),
      it(E(350), 'faire'),
    ], chk(
      'on prend la terminaison de : EN: on takes the ending of:',
      ['nous', 'il'],
      1,
      'on sera, comme il sera. La terminaison est -a. EN: on sera, like il sera.',
    )),
    grp('Le r avant la fin', [
      it(E(354), 'nous aurons'),
      it(E(347), 'vous pourrez'),
      it(E(355), 'tu seras'),
    ], chk(
      'Tu as écrit « je sauré ». Qu’est-ce qui cloche. EN: What is wrong with je sauré.',
      ['le radical', 'la terminaison', 'les deux'],
      1,
      "La terminaison du futur est -ai, jamais -é. Le radical, lui, est bon. EN: the ending is -ai, never -é.",
    )),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fin', 'radical'],
};

const A8_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a8-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  frSub: 'À utiliser en parlant',
  hacks: [
    { hack: 'Cherche le r. Pas de r avant la terminaison, pas de futur.',
      why: `${THE_R} C'est vrai des réguliers comme des irréguliers, donc le test ne rate jamais. EN: ${THE_R_EN}` },
    { hack: 'Dis la forme je, puis change seulement la fin.',
      why: "Le radical est le même aux six personnes. Si tu tiens « je viendrai », tu tiens les cinq autres. EN: the stem is identical on all six persons." },
    { hack: 'Si le verbe a un préfixe, enlève-le et conjugue ce qui reste.',
      why: 'reviendrai, obtiendrai, referai : le préfixe se recolle à la fin, sans rien changer. EN: take the prefix off, conjugate, put it back.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['fin', 'compose'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a8-dictee',
  layer: 'core',
  title: 'Écris les six personnes',
  frSub: 'Radical irrégulier, fin régulière',
  itemIds: dicteeFor(8),
  audio: AUDIO,
  say: `Écoute, puis écris. ${REFRAME}`,
  terms: ['fin', 'radical'],
};

const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'La fin qu’on abîme',
  frSub: 'Six radicaux justes, six fins fausses',
  rule: {
    title: 'Un bon radical ne sauve pas une mauvaise fin',
    body: "Ces six formes ont le bon radical. C'est la terminaison qui manque, qui double ou qui vient d'un autre temps. La moitié facile du mot est celle qu'on abîme. EN: right stem, wrong ending, and the ending is the easy half.",
  },
  cards: [
    { promptLabel: 'je, être', promptSound: 'je seré', fr: 'je serai', ipa: '/ʒə sə.ʁe/', tip: 'La terminaison est -ai, jamais -é. EN: -ai, never -é.' },
    { promptLabel: 'nous, avoir', promptSound: 'nous aurront', fr: 'nous aurons', ipa: '/nu.zo.ʁɔ̃/', tip: '-ons pour nous, -ont pour ils. EN: -ons for nous.' },
    { promptLabel: 'vous, pouvoir', promptSound: 'vous pourrerez', fr: 'vous pourrez', ipa: '/vu pu.ʁe/', tip: 'Un seul -r- de futur, pas deux. EN: one future r, not two.' },
    { promptLabel: 'ils, faire', promptSound: 'ils feronts', fr: 'ils feront', ipa: '/il fə.ʁɔ̃/', tip: '-ont ne prend jamais de s. EN: -ont never takes an s.' },
    { promptLabel: 'tu, savoir', promptSound: 'tu sauraras', fr: 'tu sauras', ipa: '/ty so.ʁa/', tip: 'Le radical une fois, la fin une fois. EN: stem once, ending once.' },
    { promptLabel: 'on, faire', promptSound: 'on ferons', fr: 'on fera', ipa: '/ɔ̃ fə.ʁa/', tip: 'on prend la fin de il. EN: on takes the il ending.' },
  ],
  drill: [
    { promptSay: 'Demain, je ... en formation. (être)', opts: ['serai', 'seré'], correct: 0 },
    { promptSay: 'Nous ... besoin de deux jours. (avoir)', opts: ['aurront', 'aurons'], correct: 1 },
    { promptSay: 'Vous ... payer sur place. (pouvoir)', opts: ['pourrez', 'pourrerez'], correct: 0 },
    { promptSay: 'Ils ... le tour du lac. (faire)', opts: ['feronts', 'feront'], correct: 1 },
    { promptSay: 'Tu ... le résultat mardi. (savoir)', opts: ['saureras', 'saurais', 'sauras'], correct: 2 },
    { promptSay: 'On ... de retour avant la nuit. (être)', opts: ['sera', 'serons'], correct: 0 },
    { promptSay: 'Vous ... une pièce d’identité. (devoir)', opts: ['devrerez', 'devrez'], correct: 1 },
    { promptSay: 'Elles ... demain matin. (venir)', opts: ['viendront', 'viendrons'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La moitié facile' },
    { label: 'Six cartes', kind: 'cards', title: 'Six fins abîmées' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six formes correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-06-fins-piege'),
  say: REFRAME,
  terms: ['fin', 'radical'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le compte', 'Combien de terminaisons nouvelles cette leçon t’a demandées. EN: How many new endings.',
    ['zéro', 'six', 'vingt'], 0,
    `Zéro. ${REFRAME} EN: ${REFRAME_EN}`),
  ctl('Le test', 'Tu viens d’écrire « je devré ». Qu’est-ce qui cloche. EN: What is wrong with je devré.',
    ['le radical', 'la terminaison'], 1,
    'devr- est juste. La fin du futur est -ai. EN: the stem is right; the ending is -ai.'),
  ctl('on', 'On dit : EN: You say:',
    ['on sera', 'on serons'], 0,
    'on prend la terminaison de il. EN: on takes the il ending.'),
], ['fin', 'radical', 'infinitif']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Les fins ne bougent pas',
    opener: { line: "Vingt radicaux appris, et pas une seule terminaison nouvelle : voilà ce que cette leçon t'a vraiment coûté. EN: Twenty stems learnt and not one new ending: that is the real price.", imageRef: 'lessons/futur-irregulier/act08.jpg' },
    sections: [],
    milestone: 'Tu poses les six terminaisons sur n’importe quel radical, et tu vérifies le r avant la fin. EN: You put the six endings on any stem and check the r before them.',
    estScreens: 32, restPoints: ['a8-construire'],
  },
  sections: [A8_LECTURE, A8_CARTES, A8_CONSTRUIRE, A8_HACKS, A8_DICTEE, A8_PIEGE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — FUTUR OU IMPARFAIT
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: 'Avant et après',
  frSub: 'Un nouveau trajet',
  setting: "Un quai de gare à Lausanne, un lundi matin. EN: A station platform in Lausanne, on a Monday morning.",
  bubbles: [
    { from: 'narrator', fr: 'Tu changes de bureau lundi prochain. Une collègue te demande ce que ça change.', en: 'You are changing offices next Monday. A colleague asks what that changes.' },
    { from: 'coach', fr: 'Avant, tu faisais une heure de trajet. Et maintenant.', en: 'Before, you had an hour of travelling. And now.', warn: 'faisais : imparfait, hier. EN: faisais is the imparfait.' },
    { from: 'user', fr: 'Je ferai vingt minutes à pied. Je serai au bureau à huit heures et demie.', en: 'I will do twenty minutes on foot. I will be at the office at half past eight.', warn: 'ferai, serai : futur, demain. EN: ferai and serai are futures.' },
    { from: 'coach', fr: 'Tu avais une voiture de service. Tu en auras une aussi là-bas.', en: 'You had a company car. You will have one there too.', warn: 'avais contre auras : deux radicaux. EN: avais against auras.' },
    { from: 'user', fr: 'Non. Mais je verrai le lac depuis la cuisine, alors ça va.', en: 'No. But I will see the lake from the kitchen, so it is fine.', warn: 'verrai : futur de voir. EN: the future of voir.' },
    { from: 'coach', fr: 'Tu voyais le parking depuis la tienne. C’est mieux.', en: 'You used to see the car park from yours. That is better.', warn: 'voyais contre verrai : rien en commun. EN: nothing in common.' },
  ],
  closing: { fr: 'ét- contre ser-, av- contre aur-, fais- contre fer- : aucune confusion possible.', en: 'No confusion is possible between these stems.' },
  audio: REC('rec-b1-06-quai'),
  say: REFRAME,
  terms: ['oreille', 'radical'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-oreille',
  title: 'Deux radicaux, deux temps',
  frSub: "Ce que l'oreille tranche",
  hint: 'Six cartes. Écoute la première syllabe.',
  audio: REC('rec-b1-06-oreille'),
  say: REFRAME,
  terms: ['oreille', 'radical'],
  cards: [
    {
      head: 'La bonne nouvelle',
      label: 'le bilan de la leçon',
      fr: 'ét- · ser-',
      body: `Les deux temps partent de radicaux différents, alors ils ne se ressemblent pas du tout. « ${B101_REFRAME} » construit l'imparfait ; le futur prend le radical d'ici. EN: the two tenses share no material at all.`,
    },
    {
      head: 'être',
      label: "j'étais · je serai",
      fr: "J'étais à Lyon en mars. · Je serai à Lyon en mars.",
      body: "Pas une lettre en commun. Tu entends la différence dès la première syllabe. EN: not one shared letter, and you hear it at once.",
    },
    {
      head: 'avoir',
      label: "j'avais · j'aurai",
      fr: "J'avais le temps. · J'aurai le temps.",
      body: "av- contre aur-. Le a du début est le seul point commun, et il ne trompe personne. EN: the opening a is all they share.",
    },
    {
      head: 'faire et voir',
      label: 'je faisais · je ferai',
      fr: 'Je faisais les courses. · Je ferai les courses.',
      body: "fais- contre fer-, voyais contre verrai. Une voyelle change, et le temps avec. EN: one vowel changes, and the tense with it.",
    },
    {
      head: 'savoir et devoir',
      label: 'je savais · je saurai',
      fr: 'Je savais quoi dire. · Je saurai quoi dire.',
      body: "sav- contre saur-, dev- contre devr-. Le v reste, le reste bouge. EN: the v stays, everything else moves.",
    },
    {
      head: 'Le cas qui compte vraiment',
      label: 'devoir',
      fr: 'Je devais partir tôt. · Je devrai partir tôt.',
      body: "Le premier raconte un plan d'hier, le second annonce une obligation de demain. Une lettre, et le jour change. EN: yesterday's plan against tomorrow's obligation.",
    },
  ],
};

const A9_PAIRES: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-paires',
  layer: 'core',
  sheetId: 'sheet-oreille',
  title: 'Six paires',
  frSub: 'Touche une ligne',
  cols: ['Verbe', 'Imparfait', 'Futur'],
  rows: [
    { cells: ['être', "j'étais", 'je serai'], say: "J'étais à Lyon en mars.",
      detail: { title: 'être', body: "ét- pour hier, ser- pour demain. Les deux radicaux sont à apprendre séparément. EN: two stems, learnt separately.", say: 'Je serai à Lyon en mars.' } },
    { cells: ['avoir', "j'avais", "j'aurai"], say: "J'avais le temps ce soir-là.",
      detail: { title: 'avoir', body: 'av- pour hier, aur- pour demain. EN: av- for yesterday, aur- for tomorrow.', say: "J'aurai le temps ce soir." } },
    { cells: ['faire', 'je faisais', 'je ferai'], say: 'Je faisais les courses après le travail.',
      detail: { title: 'faire', body: "fais- pour hier, fer- pour demain. Le [ə] est le même dans les deux, seule la consonne suivante change. EN: only the following consonant changes.", say: 'Je ferai les courses après le travail.' } },
    { cells: ['voir', 'je voyais', 'je verrai'], say: 'Nous voyions le lac depuis la cuisine.',
      detail: { title: 'voir', body: 'voy- pour hier, verr- pour demain. EN: voy- for yesterday, verr- for tomorrow.', say: 'Nous verrons le lac depuis la cuisine.' } },
    { cells: ['savoir', 'je savais', 'je saurai'], say: 'Je savais quoi dire.',
      detail: { title: 'savoir', body: 'sav- pour hier, saur- pour demain. EN: sav- for yesterday, saur- for tomorrow.', say: 'Je saurai quoi dire.' } },
    { cells: ['devoir', 'je devais', 'je devrai'], say: 'Je devais partir tôt.',
      detail: { title: 'devoir', body: "je devais raconte un plan passé ; je devrai annonce une obligation à venir. EN: a past plan against a future obligation.", say: 'Je devrai partir tôt.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['oreille', 'radical'],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Hier ou demain',
  frSub: 'Le radical le dit',
  groups: [
    grp('être et avoir', [
      it(E(356), 'demain'),
      it(E(357), 'hier'),
      it(E(358), 'demain'),
      it(E(359), 'hier'),
    ], chk(
      '« J’aurai le temps ce soir. » De quel soir parle-t-on. EN: Which evening.',
      ['un soir passé', 'ce soir qui vient'],
      1,
      'aur- est le radical du futur. av- serait le passé. EN: aur- is the future stem.',
    )),
    grp('faire et savoir', [
      it(E(360), 'demain'),
      it(E(361), 'hier'),
      it(E(362), 'demain'),
      it(E(363), 'hier'),
    ], chk(
      'Lequel de ces deux radicaux appartient au futur. EN: Which stem is the future one.',
      ['fer-', 'fais-'],
      0,
      'fer- est le futur, fais- est l’imparfait. EN: fer- is the future.',
    )),
    grp('voir et devoir', [
      it(E(366), 'demain'),
      it(E(367), 'hier'),
      it(E(364), 'demain'),
      it(E(365), 'hier'),
    ], chk(
      '« Je devais partir tôt. » Es-tu parti. EN: Did you leave.',
      ['Oui, c’est sûr.', 'La phrase ne le dit pas.', 'Non.'],
      1,
      "C'est le plan d'hier, et il reste ouvert. je devrai serait demain. EN: yesterday's plan, outcome open.",
    )),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['oreille', 'radical'],
};

const A9_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a9-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Hier ou demain, à l’oreille',
  frSub: 'Huit phrases, une seule écoute',
  lines: [
    ln(E(356)), ln(E(359)), ln(E(360)), ln(E(363)),
    ln(E(364)), ln(E(367)), ln(E(370)), ln(E(371)),
  ],
  questions: [
    { q: 'Première phrase : hier ou demain. EN: Yesterday or tomorrow.', opts: ['hier', 'demain'], correct: 1, why: 'serai : le radical ser- est celui du futur. EN: ser- is the future stem.' },
    { q: 'Deuxième phrase : hier ou demain. EN: Yesterday or tomorrow.', opts: ['hier', 'demain'], correct: 0, why: 'avais : le radical av- est celui de l’imparfait. EN: av- is the imparfait.' },
    { q: 'Cinquième phrase : l’obligation est passée ou à venir. EN: Past or future obligation.', opts: ['passée', 'à venir'], correct: 1, why: 'devrai : devr-, le futur. EN: devrai is the future.' },
    { q: 'Sixième phrase : la personne voit le lac maintenant. EN: Does the person see the lake now.', opts: ['Non, avant', 'Oui'], correct: 0, why: 'voyions : l’imparfait. C’était avant. EN: voyions is the imparfait.' },
    { q: 'Les deux dernières phrases : même temps ou deux temps. EN: Same tense or two.', opts: ['le même', 'deux temps'], correct: 1, why: 'viendront est le futur, venaient l’imparfait. EN: future then imparfait.' },
  ],
  audio: REC('rec-b1-06-oreille-ecoute'),
  say: REFRAME,
  terms: ['oreille', 'fin'],
};

const A9_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a9-piege',
  layer: 'core',
  swipe: true,
  title: 'Le passé qui revient tout seul',
  frSub: 'Six phrases qui parlent du mauvais jour',
  rule: {
    title: 'Quatre leçons de passé laissent des traces',
    body: "Tu viens de passer quatre leçons à l'imparfait. Ces formes sortent plus vite que les nouvelles, et elles sont correctes : elles parlent simplement d'hier. EN: the imparfait forms come out faster, and they are about yesterday.",
  },
  cards: [
    { promptLabel: 'demain', promptSound: "Demain, j'étais à Lyon.", fr: 'Demain, je serai à Lyon.', ipa: '/də.mɛ̃ ʒə sə.ʁe a ljɔ̃/', tip: 'ser- pour demain, ét- pour hier. EN: ser- for tomorrow.' },
    { promptLabel: 'ce soir', promptSound: "Ce soir, j'avais le temps.", fr: "Ce soir, j'aurai le temps.", ipa: '/sə swaʁ ʒo.ʁe lə tɑ̃/', tip: 'aur- pour demain. EN: aur- for tomorrow.' },
    { promptLabel: 'après le travail', promptSound: 'Après le travail, je faisais les courses.', fr: 'Après le travail, je ferai les courses.', ipa: '/a.pʁɛ lə tʁa.vaj ʒə fə.ʁe le kuʁs/', tip: 'fer- pour demain, fais- pour hier. EN: fer- for tomorrow.' },
    { promptLabel: 'la semaine prochaine', promptSound: 'La semaine prochaine, je savais quoi dire.', fr: 'La semaine prochaine, je saurai quoi dire.', ipa: '/la sə.mɛn pʁɔ.ʃɛn ʒə so.ʁe kwa diʁ/', tip: 'saur- pour demain. EN: saur- for tomorrow.' },
    { promptLabel: 'lundi', promptSound: 'Lundi, je devais partir tôt.', fr: 'Lundi, je devrai partir tôt.', ipa: '/lœ̃.di ʒə də.vʁe paʁ.tiʁ to/', tip: 'devr- pour l’obligation à venir. EN: devr- for what is coming.' },
    { promptLabel: 'de la cuisine', promptSound: 'Nous voyions le lac depuis la cuisine.', fr: 'Nous verrons le lac depuis la cuisine.', ipa: '/nu vɛ.ʁɔ̃ lə lak də.pɥi la kɥi.zin/', tip: 'verr- pour demain, voy- pour hier. EN: verr- for tomorrow.' },
  ],
  drill: [
    { promptSay: 'Demain, je ... à Lyon.', opts: ['serai', 'étais'], correct: 0 },
    { promptSay: 'Ce soir, j’... le temps.', opts: ['avais', 'aurai'], correct: 1 },
    { promptSay: 'Quand j’étais petit, je ... les courses avec ma mère.', opts: ['faisais', 'ferai'], correct: 0 },
    { promptSay: 'La semaine prochaine, je ... quoi dire.', opts: ['savais', 'saurai'], correct: 1 },
    { promptSay: 'Lundi prochain, je ... partir tôt.', opts: ['devais', 'devrais', 'devrai'], correct: 2 },
    { promptSay: 'Avant, nous ... le lac depuis la cuisine.', opts: ['voyions', 'verrons'], correct: 0 },
    { promptSay: 'L’an dernier, j’... un vélo.', opts: ['aurai', 'avais'], correct: 1 },
    { promptSay: 'Ils ... en train jeudi prochain.', opts: ['viendront', 'venaient'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le passé sort plus vite' },
    { label: 'Six cartes', kind: 'cards', title: 'Six phrases au mauvais jour' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-06-oreille-piege'),
  say: REFRAME,
  terms: ['oreille', 'radical'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre phrases au mauvais jour',
  frSub: 'Toutes grammaticalement correctes',
  errors: [
    { wrong: 'Demain, j’étais à la gare à six heures.', right: 'Demain, je serai à la gare à six heures.',
      why: "Normal : quatre leçons d'imparfait viennent de passer, et j'étais sort plus vite que je serai. La phrase est juste, elle parle d'hier. EN: correct French, wrong day." },
    { wrong: 'La semaine prochaine, je savais déjà le résultat.', right: 'La semaine prochaine, je saurai déjà le résultat.',
      why: "savais et saurai se ressemblent à l'écrit et pas du tout à l'oreille. Ici, c'est le mot de temps qui montre l'erreur. EN: the time word shows the mismatch." },
    { wrong: 'Lundi, je devais partir tôt, je te préviens.', right: 'Lundi, je devrai partir tôt, je te préviens.',
      why: "Avec « je te préviens », tu annonces. je devais raconterait un plan d'hier, ce qui ne se prévient pas. EN: you are announcing, so it has to be devrai." },
    { wrong: 'Dans deux ans, cette voiture valait moins cher.', right: 'Dans deux ans, cette voiture vaudra moins cher.',
      why: "« Dans deux ans » regarde devant. L'imparfait regarde derrière, donc les deux moitiés de la phrase se contredisent. EN: the two halves of the sentence disagree." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['oreille', 'prediction'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le partage', 'je serai et j’étais ont combien de lettres en commun. EN: How many letters do they share.',
    ['aucune', 'trois', 'toutes sauf une'], 0,
    'Aucune. Ce sont deux radicaux sans rapport. EN: none; two unrelated stems.'),
  ctl('Le test', 'Tu hésites entre je devais et je devrai. Que regardes-tu. EN: What do you look at.',
    ['le mot de temps de la phrase', 'la longueur du mot', 'le sujet'], 0,
    'Lundi prochain, ou lundi dernier : c’est ça qui tranche. EN: next Monday, or last Monday.'),
  ctl('Le r', 'Quel radical contient un r avant la terminaison. EN: Which stem has an r before the ending.',
    ['fais-', 'fer-', 'voy-'], 1,
    `${THE_R} L'imparfait, lui, n'en a pas. EN: ${THE_R_EN}`),
], ['oreille', 'radical', 'fin']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Futur ou imparfait',
    opener: { line: "Tu viens de passer quatre leçons au passé : voilà comment ton oreille séparera les deux temps sans effort. EN: After four lessons in the past, here is how your ear will keep the two apart.", imageRef: 'lessons/futur-irregulier/act09.jpg' },
    sections: [],
    milestone: 'Tu entends la différence entre je serai et j’étais dès la première syllabe. EN: You hear the difference at the first syllable.',
    estScreens: 40, restPoints: ['a9-construire'],
  },
  sections: [A9_HISTOIRE, A9_CARTES, A9_PAIRES, A9_CONSTRUIRE, A9_ECOUTE, A9_PIEGE, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — DE VRAIES PRÉDICTIONS
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le quartier dans dix ans',
  frSub: 'Un article de journal local',
  text: "Dans dix ans, ce quartier aura beaucoup changé. La mairie le dit, et les habitants le voient déjà. La ligne de tram ouvrira en mars, et les travaux dureront encore deux hivers. Il faudra vivre avec le bruit, prévient la présidente du comité. Les loyers augmenteront, comme partout où un tram arrive ; certains commerçants devront partir. D'autres verront enfin passer des clients devant leur vitrine. La piscine, elle, ne rouvrira pas : personne ne voudra payer la rénovation. À sa place, il y aura un parc et deux terrains de sport. Les écoles recevront quatre-vingts élèves de plus, donc la commune construira une annexe. Le quartier sera plus vivant, plus cher, et plus bruyant. Est-ce que les gens d'ici y seront encore, demande la présidente. Personne ne le sait.",
  glossary: [
    { word: 'la mairie', en: 'the town hall', note: 'Le bâtiment et l’administration de la commune.' },
    { word: 'les loyers', en: 'the rents', note: 'Ce qu’on paie chaque mois pour habiter un logement.' },
    { word: 'leur vitrine', en: 'their shop window', note: 'La grande fenêtre d’un commerce, sur la rue.' },
    { word: 'la rénovation', en: 'the refurbishment', note: 'Les travaux pour remettre un bâtiment en état.' },
    { word: 'une annexe', en: 'an annex', note: 'Un deuxième bâtiment, à côté du premier.' },
    { word: 'bruyant', en: 'noisy', note: 'De bruit. Une rue bruyante fatigue vite.' },
  ],
  questions: [
    { q: 'Quels verbes du texte ont un radical irrégulier ?', a: 'aura, faudra, devront, verront, voudra, il y aura, recevront, sera, seront. Les autres (ouvrira, dureront, augmenteront, construira) sont réguliers.' },
    { q: 'La piscine rouvrira-t-elle ?', a: 'Non. « Personne ne voudra payer la rénovation », donc elle ne rouvrira pas.' },
    { q: 'Lesquelles de ces phrases sont des promesses, et lesquelles des prévisions ?', a: 'Ce sont toutes des prévisions : le journal annonce, il ne s’engage pas. Une promesse dirait « je ferai », « je te tiendrai au courant ».' },
    { q: 'Que dit la présidente à la fin ?', a: 'Elle demande si les gens du quartier y seront encore dans dix ans, et personne ne le sait.' },
    { q: 'Combien de verbes impersonnels trouves-tu ?', a: 'Deux : « il faudra vivre avec le bruit » et « il y aura un parc ».' },
  ],
  audio: REC('rec-b1-06-quartier'),
  say: REFRAME,
  terms: ['prediction', 'impersonnel'],
};

const A10_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a10-usages',
  layer: 'core',
  title: 'Là où un radical faux coûte quelque chose',
  frSub: 'Quatre situations',
  cases: [
    { situation: 'Tu confirmes un rendez-vous par message', fr: 'Je serai là à huit heures.', en: 'I will be there at eight.' },
    { situation: 'Tu rassures un client qui attend un document', fr: "Je vous l'enverrai avant la fin de la journée.", en: 'I will send it to you before the end of the day.' },
    { situation: 'Tu préviens ton équipe que tu pars tôt', fr: 'Lundi, je devrai partir tôt.', en: 'On Monday I will have to leave early.' },
    { situation: 'Tu réponds à une invitation que tu refuses', fr: 'Je ne pourrai pas venir jeudi soir.', en: 'I will not be able to come on Thursday evening.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['promesse', 'prediction'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Promettre, annoncer, refuser',
  frSub: 'Ce que le futur fait vraiment',
  hint: 'Cinq cartes. Le même temps, trois métiers.',
  audio: REC('rec-b1-06-predire'),
  say: REFRAME,
  terms: ['promesse', 'prediction'],
  cards: [
    {
      head: 'La promesse',
      label: 'tu t’engages',
      fr: 'Je te tiendrai au courant.',
      sub: '[zhuh tuh tyehⁿ-dray oh koo-RAHⁿ]',
      body: "Dans un message, le futur sert presque toujours à ça. Tu ne décris pas l'avenir, tu donnes ta parole. EN: in a message the future is usually your word.",
    },
    {
      head: 'La prédiction',
      label: 'tu annonces',
      fr: 'Le colis arrivera jeudi au plus tard.',
      sub: '[luh koh-LEE ah-ree-vrah zhuh-DEE oh plü TAR]',
      body: "Là, tu ne contrôles rien. Tu annonces ce que tu crois savoir, et personne ne te tiendra responsable. EN: you control nothing and announce what you believe.",
    },
    {
      head: 'Le refus',
      label: 'la forme négative',
      fr: 'Je ne pourrai pas venir jeudi soir.',
      sub: '[zhuh nuh poo-ray pah vuh-neer zhuh-dee SWAR]',
      body: "La négation se pose autour du verbe entier, comme partout. Le radical ne bouge pas pour autant. EN: the negation wraps the verb and leaves the stem alone.",
    },
    {
      head: 'La réassurance',
      label: 'les formules toutes faites',
      fr: 'Ça ira. · On verra bien.',
      body: "Deux phrases que tu entendras chaque semaine. Elles s'apprennent entières, sans se demander d'où vient le radical. EN: two set phrases, learnt whole.",
    },
    {
      head: 'Ce que le futur ne fait pas',
      label: 'la limite de cette leçon',
      fr: 'quand · dès que · si',
      body: `Après ces trois mots, le futur obéit à des règles à part. ${Cap(B105_REF)} ne les donne pas, et cette leçon non plus : ce sera la suivante. EN: those three words follow rules taught later.`,
    },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Promesse, prédiction, refus',
  frSub: 'Trois usages, un seul temps',
  groups: [
    grp('Tu t’engages', [
      it(E(376), 'la présence'),
      it(E(385), 'le suivi'),
      it(E(390), "l'effort"),
    ], chk(
      '« Je te tiendrai au courant. » C’est : EN: This is:',
      ['une prédiction', 'une promesse'],
      1,
      'Tu t’engages. Une prédiction annoncerait quelque chose que tu ne contrôles pas. EN: you are committing.',
    )),
    grp('Tu annonces', [
      it(E(377), 'la livraison'),
      it(E(378), 'le quartier'),
      it(E(379), 'les prix'),
    ], chk(
      'Ces trois phrases dépendent-elles de toi. EN: Do these depend on you.',
      ['Non', 'Oui'],
      0,
      'Ce sont des prévisions. Personne ne te tiendra responsable. EN: these are forecasts.',
    )),
    grp('Tu refuses ou tu nuances', [
      it(E(381), 'le refus poli'),
      it(E(382), "l'attente"),
      it(E(383), 'la prévision négative'),
    ], chk(
      'Où se pose la négation dans « je ne pourrai pas venir ». EN: Where does the negation sit.',
      ['autour de l’infinitif', 'à la fin', 'autour du verbe conjugué'],
      2,
      'ne ... pas entoure pourrai. venir reste dehors. EN: ne and pas wrap the conjugated verb.',
    )),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['promesse', 'prediction'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  title: 'Huit messages',
  frSub: 'Promesse ou prévision',
  lines: [
    ln(E(376)), ln(E(377)), ln(E(380)), ln(E(381)),
    ln(E(386)), ln(E(387)), ln(E(389)), ln(E(391)),
  ],
  questions: [
    { q: 'Première phrase : promesse ou prévision. EN: Promise or forecast.', opts: ['prévision', 'promesse'], correct: 1, why: 'Je te promets que je serai là : tu t’engages. EN: you are committing.' },
    { q: 'Deuxième phrase : qui décide de la date. EN: Who decides the date.', opts: ['personne dans la phrase', 'la personne qui parle'], correct: 0, why: 'Le colis arrivera : une prévision. EN: a forecast.' },
    { q: 'Quatrième phrase : la personne viendra-t-elle. EN: Will the person come.', opts: ['Oui', 'Non'], correct: 1, why: 'Je ne pourrai pas venir : un refus. EN: a refusal.' },
    { q: 'Cinquième phrase : est-ce rassurant. EN: Is it reassuring.', opts: ['Oui', 'Non'], correct: 0, why: 'Ça ira, ne t’inquiète pas. EN: yes.' },
    { q: 'Dernière phrase : dans combien de temps. EN: How long from now.', opts: ['un an', 'un mois', 'dix ans'], correct: 0, why: 'Dans un an, je parlerai français sans y penser. EN: in a year.' },
  ],
  audio: REC('rec-b1-06-messages'),
  say: REFRAME,
  terms: ['promesse', 'prediction'],
};

const A10_FLASHCARDS: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a10-flashcards',
  layer: 'core',
  title: 'Huit formules à avoir en réserve',
  frSub: 'Anglais devant, français derrière',
  cards: [
    { front: 'I will be there', back: 'je serai là', say: 'Je te promets que je serai là.' },
    { front: 'I will keep you posted', back: 'je te tiendrai au courant', say: 'Je te tiendrai au courant de la suite.' },
    { front: 'we shall see', back: 'on verra bien', say: 'On verra bien.' },
    { front: 'it will be fine', back: 'ça ira', say: 'Ça ira, ne t’inquiète pas.' },
    { front: 'I will not be able to', back: 'je ne pourrai pas', say: 'Je ne pourrai pas venir jeudi soir.' },
    { front: 'there will be a delay', back: 'il y aura du retard', say: 'Il y aura sûrement du retard.' },
    { front: 'I will do my best', back: 'je ferai de mon mieux', say: 'Je ferai de mon mieux.' },
    { front: 'a choice will have to be made', back: 'il faudra choisir', say: 'Il faudra choisir avant la fin du mois.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['promesse', 'prediction'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('L’engagement', '« Je vous l’enverrai avant ce soir. » C’est : EN: This is:',
    ['une prévision', 'une promesse'], 1,
    'Tu t’engages, et on te le rappellera. EN: you are committing.'),
  ctl('La négation', 'Dans « je ne pourrai pas venir », que trouve-t-on entre ne et pas. EN: What sits between ne and pas.',
    ['venir', 'pourrai', 'pourrai venir'], 1,
    'Le verbe conjugué, comme partout. EN: the conjugated verb, as always.'),
  ctl('La limite', 'Après quand et dès que, le futur suit-il les mêmes règles. EN: Same rules after quand and dès que.',
    ['Non : une leçon à part.', 'Oui.'], 0,
    'La leçon suivante s’en occupe. EN: the next lesson covers it.'),
], ['promesse', 'prediction', 'fin']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'De vraies prédictions',
    opener: { line: "Un futur dans un message, ce n'est presque jamais une prédiction : c'est ta parole. EN: A future in a message is almost never a prediction: it is your word.", imageRef: 'lessons/futur-irregulier/act10.jpg' },
    sections: [],
    milestone: 'Tu promets, tu annonces et tu refuses au futur, avec les bons radicaux. EN: You promise, announce and decline in the future, with the right stems.',
    estScreens: 30, restPoints: ['a10-construire'],
  },
  sections: [A10_LECTURE, A10_USAGES, A10_CARTES, A10_CONSTRUIRE, A10_ECOUTE, A10_FLASHCARDS, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — TOUT ENSEMBLE
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Dans cinq ans',
  frSub: 'Le modèle que tu vas imiter',
  text: "Dans cinq ans, j'aurai trente-deux ans et je ne sais pas encore où je serai. Je crois que je vivrai toujours à Montréal, mais je n'en suis pas sûre. Mon frère, lui, sera reparti à Dakar : il le dit depuis deux ans et cette fois il partira vraiment. Nous reviendrons souvent le voir, et les enfants seront assez grands pour faire le voyage sans pleurer. Côté travail, j'aurai peut-être mon propre atelier. Il faudra emprunter, et il vaudra mieux attendre d'avoir des clients réguliers. Je devrai aussi apprendre la comptabilité, ce qui ne me fera pas plaisir. Il y aura des choses que je ne prévoirai pas, évidemment. Tout ne se passera pas comme prévu, et ça ira quand même.",
  glossary: [
    { word: 'atelier', en: 'workshop', note: 'Un local où on travaille de ses mains.' },
    { word: 'emprunter', en: 'to borrow', note: 'Demander de l’argent à une banque, et le rendre ensuite.' },
    { word: 'des clients réguliers', en: 'regular customers', note: 'Des gens qui reviennent, et sur qui on peut compter.' },
    { word: 'la comptabilité', en: 'bookkeeping', note: 'Les comptes d’une entreprise. Ce que gagne et ce que dépense l’atelier.' },
    { word: 'comme prévu', en: 'as planned', note: 'De prévoir. Ce qui était décidé à l’avance.' },
  ],
  questions: [
    { q: 'Combien de radicaux irréguliers différents trouves-tu ?', a: 'Huit : aur-, ser-, reviendr-, faudr-, vaudr-, devr-, fer-, prévoir-. Plus ir- dans « ça ira ».' },
    { q: 'Quels verbes du texte sont réguliers ?', a: 'vivrai, partira, se passera. Leur radical est l’infinitif, avec le e final tombé pour vivre.' },
    { q: 'Le texte annonce-t-il des certitudes ?', a: 'Non. « je ne sais pas encore », « je crois que », « peut-être », « il y aura des choses que je ne prévoirai pas ».' },
    { q: 'Comment le texte se termine-t-il ?', a: 'Sur une formule toute faite : « et ça ira quand même ». C’est ce que tu peux reprendre dans ta propre mission.' },
    { q: 'Quelles phrases parlent de quelqu’un d’autre que la narratrice ?', a: 'Celles sur le frère (sera reparti, partira), sur les enfants (seront assez grands) et sur le couple (nous reviendrons).' },
  ],
  audio: REC('rec-b1-06-cinq-ans'),
  say: REFRAME,
  terms: ['prediction', 'radical'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  title: 'Comment écrire tes cinq ans',
  frSub: 'Cinq étapes',
  steps: [
    "Commence par toi : ton âge, ton lieu, ton travail. Trois phrases avec aur-, ser- et un verbe régulier. EN: start with yourself: age, place, work.",
    "Ajoute quelqu'un d'autre : un frère, une amie, tes enfants. Ça t'oblige à sortir de la première personne. EN: add somebody else, so you leave the first person.",
    "Mets un besoin ou une contrainte avec il faudra ou je devrai. Une prédiction sans obstacle sonne faux. EN: add a need or a constraint.",
    "Glisse une chose que tu ne contrôles pas : il y aura, il vaudra mieux, on verra. EN: slip in something you do not control.",
    "Termine par une formule toute faite : ça ira, on verra bien, je ferai de mon mieux. EN: finish on a set phrase.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['prediction', 'promesse'],
};

const A11_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a11-exemples',
  layer: 'core',
  title: 'Le modèle, phrase par phrase',
  frSub: 'Six phrases à reprendre',
  examples: [
    ex(E(392), 'étape 1 : toi, avec aur-'),
    ex(E(393), 'étape 1 : toi, avec ser-, et une vraie hésitation'),
    ex(E(394), 'étape 2 : quelqu’un d’autre'),
    ex(E(395), 'étape 2 : vous deux, avec un composé'),
    ex(E(396), 'étape 4 : ce que tu ne contrôles pas'),
    ex(E(397), 'étape 5 : la formule de fin'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['prediction', 'compose'],
};

const A11_PARLER: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis-le avant de l’écrire',
  frSub: 'Six questions sur tes cinq ans',
  setting: "Une amie te pose des questions sur les cinq ans qui viennent, dans une cuisine, un dimanche après-midi. EN: A friend asks about your next five years.",
  turns: [
    {
      ai: 'Dans cinq ans, tu auras quel âge ?', en: 'In five years, how old will you be?',
      user: "J'aurai trente-deux ans.",
      userEn: 'I will be thirty-two. (avoir gives aur-.)',
      alts: [
        { fr: "Dans cinq ans, j'aurai trente-deux ans.", en: 'In five years I will be thirty-two.' },
        { fr: "Je ne sais pas, j'aurai la quarantaine.", en: 'I do not know, I will be around forty. (Also right, and vaguer.)' },
      ],
    },
    {
      ai: 'Tu seras encore ici, à ton avis ?', en: 'Will you still be here, do you think?',
      user: 'Je ne sais pas encore où je serai.',
      userEn: 'I do not know yet where I will be. (être gives ser-.)',
      alts: [
        { fr: 'Oui, je serai encore à Montréal.', en: 'Yes, I will still be in Montreal.' },
        { fr: 'Non, je crois que je serai ailleurs.', en: 'No, I think I will be somewhere else.' },
      ],
    },
    {
      ai: 'Et le travail, ça changera ?', en: 'And work, will that change?',
      user: "J'aurai peut-être mon propre atelier.",
      userEn: 'I may well have my own workshop. (aur- again, softened by peut-être.)',
      alts: [
        { fr: 'Je ferai sans doute le même travail.', en: 'I will probably do the same job. (faire gives fer-.)' },
        { fr: 'Je devrai apprendre autre chose, sûrement.', en: 'I will have to learn something else, surely. (devoir gives devr-.)' },
      ],
    },
    {
      ai: "Qu'est-ce qu'il faudra faire pour y arriver ?", en: 'What will have to be done to get there?',
      user: 'Il faudra emprunter, et il vaudra mieux attendre un peu.',
      userEn: 'Borrowing will be needed, and it will be better to wait a bit. (Two impersonals.)',
      alts: [
        { fr: 'Il faudra surtout des clients réguliers.', en: 'Regular customers will be needed above all.' },
        { fr: "Il faudra que j'apprenne la comptabilité.", en: 'I will have to learn bookkeeping. (Also right, with a form taught later.)' },
      ],
    },
    {
      ai: 'Tes proches seront où, eux ?', en: 'And your family, where will they be?',
      user: 'Mon frère sera à Dakar, et nous reviendrons souvent le voir.',
      userEn: 'My brother will be in Dakar, and we will come back often to see him. (revenir inherits viendr-.)',
      alts: [
        { fr: 'Mes enfants seront grands, ça me fait drôle.', en: 'My children will be grown up, which feels strange.' },
        { fr: 'Ils viendront peut-être me rejoindre.', en: 'They may well come and join me. (venir gives viendr-.)' },
      ],
    },
    {
      ai: 'Et si rien ne se passe comme prévu ?', en: 'And if nothing goes as planned?',
      user: 'Ça ira quand même. On verra bien.',
      userEn: 'It will be fine anyway. We shall see. (Two set phrases.)',
      alts: [
        { fr: 'Je ferai de mon mieux, comme tout le monde.', en: 'I will do my best, like everyone else.' },
        { fr: 'Il y aura des choses que je ne prévoirai pas.', en: 'There will be things I will not plan for. (prévoir keeps its -oi-.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['prediction', 'impersonnel'],
};

/** THE GRADED TASK. Written (PE), 90 to 130 words, after the scenario and
 *  before the progressCheck. Draft type: no renderer yet. */
const A11_MISSION: TaskSection = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris tes cinq prochaines années',
  frSub: 'Mission écrite',
  brief: "Une amie francophone t'a demandé où tu te vois dans cinq ans. Réponds-lui par écrit. Parle de toi, de quelqu'un d'autre autour de toi, et d'une chose que tu ne contrôles pas. Tu n'es pas obligé d'être sûr de toi : dis aussi ce que tu ne sais pas encore.",
  briefEn: 'A French-speaking friend has asked where you see yourself in five years. Write back: about you, about somebody around you, and about one thing you do not control.',
  produce: "Écris un message de 90 à 130 mots, tout au futur simple, avec au moins six radicaux irréguliers différents, au moins un verbe impersonnel, au moins une phrase sur quelqu'un d'autre que toi, et une formule de fin.",
  responseSpec: { kind: 'text', minWords: 90, maxWords: 130 },
  rubric: {
    criteria: [
      {
        key: 'radicaux', label: 'Les radicaux irréguliers', maxPoints: 4,
        descriptors: [
          '4 : Six radicaux irréguliers différents au moins, tous justes. Aucun verbe construit sur son infinitif quand il ne faut pas.',
          '3 : Six radicaux différents, une ou deux erreurs qui ne gênent pas la lecture.',
          '2 : Moins de six radicaux différents, ou plusieurs formes construites sur l’infinitif (je venirai, je savoirai).',
          '1 : Les radicaux irréguliers sont évités ou presque tous faux.',
        ],
      },
      {
        key: 'fins', label: 'Les terminaisons', maxPoints: 3,
        descriptors: [
          '3 : Les six terminaisons sont justes partout, y compris -ont sans s et -ai plutôt que -é.',
          '2 : Une ou deux terminaisons abîmées sur un radical par ailleurs correct.',
          '1 : Les terminaisons changent d’un verbe à l’autre, ou viennent d’un autre temps.',
        ],
      },
      {
        key: 'contenu', label: 'Ce que le message dit', maxPoints: 3,
        descriptors: [
          '3 : Toi, quelqu’un d’autre, et une chose que tu ne contrôles pas. Le message se lit comme un vrai message.',
          '2 : Deux de ces trois éléments, ou un message qui reste une liste de phrases sans lien.',
          '1 : Une seule personne et aucune incertitude : le message ne répond pas à la question.',
        ],
      },
      {
        key: 'tache', label: 'La mission complète', maxPoints: 2,
        descriptors: [
          '2 : Entre 90 et 130 mots, au moins un impersonnel, une formule de fin.',
          '1 : La longueur ou l’un des éléments demandés manque.',
        ],
      },
    ],
  },
  scaffold: ['Dans cinq ans,', "J'aurai", 'Je serai', 'Je ne sais pas encore', 'Il faudra', 'Il y aura', 'Mon frère', 'Ça ira'],
  modelAnswer: "Dans cinq ans, j'aurai trente-deux ans et je ne sais pas encore où je serai. Je crois que je vivrai toujours ici, mais je n'en suis pas sûre. Ma sœur, elle, sera repartie à Lyon, et nous irons la voir souvent. Ses enfants seront assez grands pour faire le voyage en train tout seuls. Côté travail, j'aurai peut-être mon propre atelier. Il faudra emprunter, et il vaudra mieux attendre d'avoir des clients réguliers. Je devrai aussi apprendre la comptabilité, ce qui ne me fera pas plaisir. Il y aura sûrement des choses que je ne prévoirai pas. On verra bien.",
  modelAnswerEn: "In five years I will be thirty-two and I do not know yet where I will be. I think I will still be living here, though I am not sure. My sister will have gone back to Lyon, and we will go and see her often. Her children will be big enough to make the trip by train on their own. Work-wise, I may well have my own workshop. Borrowing will be needed, and it will be better to wait until I have regular customers. I will also have to learn bookkeeping, which will not please me. There will surely be things I do not plan for. We shall see.",
  watchFor: [
    { pattern: 'A future built on the infinitive of an irregular verb (je venirai, je savoirai, je allerai, je fairai).', criterion: 'radicaux', feedback: "Tu as collé la terminaison derrière l'infinitif. Sur ces verbes-là, il faut le radical : venir donne viendr-, savoir donne saur-.", ref: 'a2-piege' },
    { pattern: 'A single r in pourrai, verrai, enverrai, courrai or mourrai.', criterion: 'radicaux', feedback: 'Deux r à ces verbes-là. Tu n’en entends qu’un, mais tu en écris deux : je pourrai, je verrai.', ref: 'a3-erreurs' },
    { pattern: 'The d of viendr-, tiendr-, vaudr-, faudr- or voudr- missing.', criterion: 'radicaux', feedback: 'Il manque le d. venir donne viendr-, tenir donne tiendr-, falloir donne faudr-.', ref: 'a4-piege' },
    { pattern: 'The -oi- kept in the stem of savoir, devoir, recevoir or pleuvoir.', criterion: 'radicaux', feedback: 'Enlève le -oi- avant la terminaison : je saurai, je devrai, je recevrai.', ref: 'a5-erreurs' },
    { pattern: 'An impersonal given a real subject (nous faudrons, ils seront du monde), or être used for the weather.', criterion: 'radicaux', feedback: 'Ces verbes ne prennent que il : il faudra, il y aura, il fera froid.', ref: 'a6-piege' },
    { pattern: 'A compound conjugated as a new verb (je revenirai, j’obtenirai), or verr- applied to prévoir.', criterion: 'radicaux', feedback: 'Cherche le verbe simple dessous : revenir suit venir, obtenir suit tenir. Seul prévoir garde son -oi-.', ref: 'a7-erreurs' },
    { pattern: '-é written for the -ai ending, or an s added to -ont.', criterion: 'fins', feedback: 'La terminaison du futur est -ai, jamais -é. Et -ont ne prend pas de s.', ref: 'a8-piege' },
    { pattern: 'The nous ending used with on (on serons, on ferons).', criterion: 'fins', feedback: 'on prend la terminaison de il : on sera, on fera.', ref: 'a8-construire' },
    { pattern: 'An imparfait form where the sentence looks forward (Dans cinq ans, j’avais).', criterion: 'fins', feedback: 'Le mot de temps regarde devant, alors le verbe aussi : dans cinq ans, j’aurai.', ref: 'a9-erreurs' },
    { pattern: 'No impersonal verb anywhere in the answer.', criterion: 'tache', feedback: 'Ajoute une phrase avec il faudra, il y aura ou il vaudra mieux : c’est demandé dans la mission.', ref: 'a6-cartes' },
    { pattern: 'Every sentence in the first person singular, with nobody else mentioned.', criterion: 'contenu', feedback: 'Parle aussi de quelqu’un d’autre. Ça t’oblige à sortir du je et à utiliser d’autres personnes.', ref: 'a11-plan' },
    { pattern: 'Only certainties, with no hedging (peut-être, je crois que, je ne sais pas encore).', criterion: 'contenu', feedback: 'Personne ne sait ce qui arrivera. Ajoute un peut-être ou un je ne sais pas encore, comme le modèle.', ref: 'a11-lecture' },
  ],
  graderNotes: [
    'Count the DIFFERENT irregular stems, not the number of irregular verbs: three uses of aur- is one stem.',
    'Regular futures (je vivrai, je partirai, ça se passera) are correct and expected. Do not mark them down; the task asks for six irregular stems, not for an all-irregular text.',
    'Word count EXCLUDES the greeting and the sign-off (Paul, 2026-09-22). Count the body only, with 10% tolerance before criterion « tache » loses its point.',
    'Do NOT mark the conditional as an error if the learner writes « je voudrais » or « j’aimerais » in a polite hedge: that form is taught in a later lesson and appears once in act 4 as a preview.',
    'Do NOT mark a futur antérieur (« ma sœur sera repartie ») as an error. It is above the level, it is correct, and the model answer uses it once.',
    'Do NOT mark tense choice after quand, dès que or si: those rules belong to the next lessons and are named as out of scope in act 10.',
    'Narrator gender is unknown: judge past-participle and adjective agreement for internal consistency only.',
    'Accept regional vocabulary (un atelier, une shop in Québec; un appartement, un logement).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** Say the whole lesson out loud. Every id carries `voiceflash`. */
const A11_DIRE: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-dire',
  layer: 'core',
  title: 'Dis tes prédictions à voix haute',
  frSub: 'Tout ce que la leçon a donné',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    ...SPEAKABLE_IMPORTS,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'fin'],
};

const A11_RECAP: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-recap',
  layer: 'core',
  sheetId: 'sheet-radicaux',
  title: 'Toute la leçon sur un écran',
  frSub: 'Six lignes',
  rows: [
    { k: 'les six grands', v: 'ser- aur- ir- fer- viendr- voudr-', say: 'Je serai là et j’aurai les clés.',
      detail: { title: 'Les six grands', body: 'être, avoir, aller, faire, venir, vouloir. Les plus fréquents, donc les plus rentables. EN: the six most frequent verbs.', say: 'On ira voir ma sœur à Québec.' } },
    { k: 'deux r', v: 'pourr- verr- enverr- courr- mourr-', say: 'Je t’enverrai le contrat ce soir.',
      detail: { title: 'La famille en -rr-', body: "Deux r à l'écrit, un seul à l'oreille. Ça se corrige en écrivant, jamais en écoutant. EN: two written, one heard.", say: 'On verra ça la semaine prochaine.' } },
    { k: 'un d', v: 'viendr- tiendr- vaudr- faudr- voudr-', say: 'Je tiendrai ma promesse.',
      detail: { title: 'La famille en -dr-', body: "Un d qui n'est dans aucun infinitif, et qui se prononce. EN: a d that is in no infinitive and that you hear.", say: 'Il vaudra mieux partir tôt.' } },
    { k: 'le -oi- part', v: 'saur- devr- recevr- pleuvr-', say: 'Tu sauras le résultat mardi.',
      detail: { title: 'La famille en -oir', body: 'Enlève le -oi-, garde le reste, ajoute le r. EN: take the -oi- out, keep the rest.', say: 'Je devrai passer à la banque avant midi.' } },
    { k: 'un seul sujet', v: 'il faudra · il y aura · il fera · ça ira', say: 'Il y aura du monde au marché samedi.',
      detail: { title: 'Les impersonnels', body: "Le il ne désigne personne, et ces verbes n'ont qu'une forme. EN: the il stands for nobody.", say: 'Il fera nuit avant six heures.' } },
    { k: 'les six fins', v: '-ai -as -a -ons -ez -ont', say: 'Nous aurons besoin de deux jours de plus.',
      detail: { title: 'Les terminaisons', body: `Elles ne changent sur aucun verbe de la langue. ${REFRAME} EN: ${REFRAME_EN}`, say: 'Vous pourrez payer sur place.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'fin', 'impersonnel'],
};

const A11_PROGRES: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progres',
  layer: 'core',
  title: 'Où tu en es',
  frSub: 'Avant l’examen',
  // progressCheck is passage prose: exempt from the 45-word core cap.
  body: "Tu construis le futur de la vingtaine de verbes qui refusent leur infinitif, et tu les retrouves par famille plutôt qu'un par un. Le piège qui reste est celui de l'acte 3 : le double r ne s'entend pas, donc il ne se corrige qu'en écrivant. Avant de passer l'examen, relis la table de sheet-radicaux une fois, à voix haute, en disant chaque forme je. Si un radical te fait hésiter plus d'une seconde, note-le : c'est celui qu'il faudra revoir demain.",
  stats: [
    { k: 'Radicaux appris', v: 'une vingtaine, en cinq familles' },
    { k: 'Terminaisons nouvelles', v: 'zéro' },
    { k: 'Le test qui ne rate jamais', v: 'un r avant la fin' },
    { k: 'Ce qui reste fragile', v: 'le double r, à l’écrit' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'fin', 'double-r'],
};

const A11_REVUE: Sec<'reviewDeck'> = {
  type: 'reviewDeck',
  id: 'a11-revue',
  layer: 'core',
  title: 'Les radicaux, une dernière fois',
  frSub: 'Encore, difficile, facile',
  cards: [
    { front: 'être', back: 'ser-', say: 'Je serai là à huit heures.' },
    { front: 'avoir', back: 'aur-', say: "J'aurai les clés sur moi." },
    { front: 'aller', back: 'ir-', say: 'On ira voir ma sœur à Québec.' },
    { front: 'faire', back: 'fer-', say: 'Je ferai de mon mieux.' },
    { front: 'venir', back: 'viendr-', say: 'Ils viendront tous les deux dimanche.' },
    { front: 'pouvoir', back: 'pourr-', say: 'Tu pourras rentrer tard demain soir.' },
    { front: 'voir', back: 'verr-', say: 'On verra ça la semaine prochaine.' },
    { front: 'envoyer', back: 'enverr-', say: "Je t'enverrai le contrat ce soir." },
    { front: 'tenir', back: 'tiendr-', say: 'Je tiendrai ma promesse.' },
    { front: 'falloir', back: 'faudr-', say: 'Il faudra deux voitures pour tout emporter.' },
    { front: 'savoir', back: 'saur-', say: 'Tu sauras le résultat mardi.' },
    { front: 'devoir', back: 'devr-', say: 'Je devrai passer à la banque avant midi.' },
  ],
  audio: AUDIO,
  say: 'Une dernière fois, puis tu fermes la leçon.',
};

/* ══════════════════════════════════════════════════════════════════════════
 *  NEXT-ACT-MARKER
 * ══════════════════════════════════════════════════════════════════════════ */

/* ── THE QUIZ ────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), 10 rounds of 8, one per act from
 *  2 to 10 plus a mixed round. Every round carries `targets`, so a failed
 *  round fires that round's remediation drill (roundFailThreshold 60).
 *
 *  typeIn and errorSpot carry `prompt`, listenChoose carries `say`. No
 *  accepted answer turns on an accent, a comma or an apostrophe: fold()
 *  strips all three. The quiz shuffles its options at runtime; the authored
 *  `correct` slots are spread anyway.
 * ────────────────────────────────────────────────────────────────────────── */

type QQ = QuizQuestion;
const mc = (q: string, opts: string[], correct: number, why: string, ref: string): QQ => ({ format: 'mcq', q, opts, correct, why, ref });
const tI = (q: string, prompt: string, answer: string, why: string, ref: string, accept?: string[]): QQ =>
  ({ format: 'typeIn', q, prompt, answer, accept: accept ?? [answer], why, ref });
const eS = (q: string, prompt: string, answer: string, why: string, ref: string): QQ =>
  ({ format: 'errorSpot', q, prompt, answer, accept: [answer], why, ref });
const lC = (q: string, say: string, opts: string[], correct: number, why: string, ref: string): QQ =>
  ({ format: 'listenChoose', q, say, opts, correct, why, ref });
const FIX = 'Une forme ne va pas. Écris la phrase correcte. EN: One form is wrong; write the sentence correctly.';

const QUIZ_ROUNDS: NonNullable<Sec<'quiz'>['rounds']> = [
  {
    id: 'r1-grands', label: 'Les six grands', targets: ['infinitif-radical'],
    questions: [
      mc('Complète : « Demain, je ... en formation. » (être) EN: Complete with être.', ['serai', 'êtrai', 'étais'], 0, 'être donne ser-. étais est l’imparfait. EN: être gives ser-.', 'a2-cartes'),
      tI('Écris le verbe avoir au futur. EN: Write avoir in the future.', 'Mardi, j’... le dossier de Lausanne.', 'aurai', 'avoir donne aur-. EN: avoir gives aur-.', 'a2-construire'),
      mc('« Nous ... à la campagne dimanche. » (aller) EN: Complete with aller.', ['allerons', 'allons', 'irons'], 2, 'aller donne ir-. EN: aller gives ir-.', 'a2-six'),
      eS(FIX, 'Mercredi, nous fairons le point.', 'Mercredi, nous ferons le point.', 'faire donne fer-, pas fair-. EN: faire gives fer-.', 'a2-piege'),
      lC('Écoute. Quel verbe entends-tu. EN: Which verb do you hear.', 'Ils viendront tous les deux dimanche.', ['vouloir', 'venir'], 1, 'viendront : le radical viendr-. EN: viendr- is venir.', 'a2-ecoute'),
      tI('Écris le verbe faire au futur. EN: Write faire in the future.', 'Après mes études, je ... une formation en ligne.', 'ferai', 'fer- plus -ai. EN: fer- plus -ai.', 'a2-cartes'),
      mc('Lequel de ces radicaux est celui de aller. EN: Which stem belongs to aller.', ['all-', 'all-er-', 'ir-'], 2, 'Deux lettres, et rien de l’infinitif. EN: two letters.', 'a2-six'),
      mc('« Personne ne ... rester tard. » (vouloir) EN: Complete with vouloir.', ['voudra', 'voulera'], 0, 'vouloir donne voudr-. EN: vouloir gives voudr-.', 'a2-histoire'),
    ],
  },
  {
    id: 'r2-double-r', label: 'Deux r', targets: ['un-seul-r'],
    questions: [
      tI('Écris le verbe pouvoir au futur. EN: Write pouvoir in the future.', 'Tu ... rentrer tard demain soir.', 'pourras', 'pourr- plus -as. Deux r. EN: pourr- plus -as.', 'a3-cartes'),
      mc('Combien de r écris-tu dans le futur de voir. EN: How many r.', ['un', 'deux', 'trois'], 1, 'verr-. Un seul se prononce. EN: two written, one heard.', 'a3-construire'),
      eS(FIX, 'Je te l’enverai demain matin.', 'Je te l’enverrai demain matin.', 'envoyer donne enverr-, avec deux r. EN: enverr-, with two r.', 'a3-erreurs'),
      lC('Écoute. Entends-tu deux r. EN: Do you hear two r.', 'Nous pourrons répondre demain matin.', ['Oui', 'Non'], 1, 'Un seul son. Le double r est orthographique. EN: one sound only.', 'a3-ecoute'),
      mc('« Elle ... son premier marathon en mai. » (courir) EN: Complete with courir.', ['courra', 'courira'], 0, 'courir donne courr-, pas courir- plus la fin. EN: courir gives courr-.', 'a3-construire'),
      tI('Écris le verbe voir au futur, première personne du pluriel. EN: Write voir, nous.', 'Nous ... le résultat lundi.', 'verrons', 'verr- plus -ons. EN: verr- plus -ons.', 'a3-cartes'),
      mc('envoyer est un verbe en -er. Son futur est donc régulier. EN: Is envoyer regular.', ['Oui.', 'Non : enverr-.'], 1, "C'est la seule exception parmi les -er. EN: the one -er exception.", 'a3-erreurs'),
      mc('Lequel n’appartient pas à la famille en -rr-. EN: Which one is not in the -rr- family.', ['mourir', 'courir', 'tenir'], 2, 'tenir est de la famille en -dr-. EN: tenir is a -dr- verb.', 'a3-check'),
    ],
  },
  {
    id: 'r3-le-d', label: 'Le d', targets: ['d-oublie'],
    questions: [
      mc('Dans quel infinitif trouves-tu le d de viendr-. EN: Where is the d in the infinitive.', ['venir', 'devenir', 'aucun'], 2, "Dans aucun : il n'apparaît qu'au futur. EN: in none of them.", 'a4-cartes'),
      tI('Écris le verbe tenir au futur. EN: Write tenir in the future.', 'Je ... ma promesse.', 'tiendrai', 'tiendr- plus -ai. EN: tiendr- plus -ai.', 'a4-construire'),
      eS(FIX, 'Mon frère venira la chercher jeudi.', 'Mon frère viendra la chercher jeudi.', 'venir donne viendr-, avec le d. EN: venir gives viendr-.', 'a4-piege'),
      mc('« Nous faudrons partir tôt. » Cette phrase est : EN: This sentence is:', ['correcte', 'impossible'], 1, 'falloir ne se conjugue qu’à il. EN: falloir takes il only.', 'a4-construire'),
      lC('Écoute. Le verbe est valoir ou vouloir. EN: valoir or vouloir.', 'Cette voiture vaudra moins cher dans deux ans.', ['valoir', 'vouloir'], 0, 'vaudra vient de valoir. voudra viendrait de vouloir. EN: vaudra is valoir.', 'a4-ecoute'),
      tI('Écris le verbe valoir au futur, troisième personne. EN: Write valoir, il.', 'Il ... mieux partir tôt.', 'vaudra', 'valoir donne vaudr-. EN: valoir gives vaudr-.', 'a4-cartes'),
      mc('Lequel de ces radicaux n’est PAS de la famille en -dr-. EN: Which is not a -dr- stem.', ['tiendr-', 'enverr-', 'faudr-'], 1, 'enverr- est de l’acte 3. EN: enverr- belongs to act 3.', 'a4-check'),
      mc('« Je voudrais un café. » Quel temps. EN: Which tense.', ['pas le futur : une autre leçon', 'le futur'], 0, 'Même radical, autre temps. EN: same stem, different tense.', 'a4-cartes'),
    ],
  },
  {
    id: 'r4-oir', label: 'Les -oir', targets: ['oir-garde'],
    questions: [
      mc('Le radical de savoir au futur, c’est : EN: The future stem of savoir is:', ['savoir-', 'sav-', 'saur-'], 2, 'Le -voi- part, le r reste. EN: the -voi- goes.', 'a5-cartes'),
      tI('Écris le verbe devoir au futur. EN: Write devoir in the future.', 'Je ... passer à la banque avant midi.', 'devrai', 'devoir donne devr-. EN: devoir gives devr-.', 'a5-table'),
      eS(FIX, 'Vous receverez une confirmation par courriel.', 'Vous recevrez une confirmation par courriel.', 'recevoir donne recevr-, pas recever-. EN: recevoir gives recevr-.', 'a5-erreurs'),
      lC('Écoute. Est-ce une obligation. EN: Is this an obligation.', 'Elle devra choisir entre les deux postes.', ['Oui', 'Non'], 0, 'devra : devoir dit l’obligation à venir. EN: devoir says obligation.', 'a5-ecoute'),
      mc('« Nous pleuvrons demain. » Cette phrase est : EN: This sentence is:', ['correcte', 'familière', 'impossible'], 2, 'pleuvoir n’a qu’une personne, il. EN: pleuvoir has one person.', 'a5-construire'),
      tI('Écris le verbe recevoir au futur, deuxième personne du singulier. EN: Write recevoir, tu.', 'Tu ... le programme lundi.', 'recevras', 'recevr- plus -as. EN: recevr- plus -as.', 'a5-cartes'),
      mc('pouvoir appartient à combien de familles. EN: How many families does pouvoir belong to.', ['une', 'deux'], 1, 'Il perd son -oi- et double son r. EN: it loses the -oi- and doubles the r.', 'a5-table'),
      mc('Lequel garde son -oi- au futur. EN: Which one keeps its -oi-.', ['savoir', 'devoir', 'prévoir'], 2, 'prévoir, et lui seul. EN: prévoir, and only prévoir.', 'a5-check'),
    ],
  },
  {
    id: 'r5-impersonnels', label: 'Les impersonnels', targets: ['impersonnel-sujet'],
    questions: [
      mc('Pour dire there will be nobody, tu dis : EN: For there will be nobody:', ["Il n'y aura personne.", 'Ils ne seront personne.', 'Ça n’ira personne.'], 0, 'il y aura est le futur de il y a. EN: il y aura is the future of il y a.', 'a6-cartes'),
      tI('Écris le verbe falloir au futur. EN: Write falloir in the future.', 'Il ... deux voitures pour tout emporter.', 'faudra', 'falloir donne faudr-, et seulement à il. EN: faudr-, and only with il.', 'a6-construire'),
      eS(FIX, 'Nous faudrons partir tôt dimanche.', 'Il faudra partir tôt dimanche.', 'falloir ne se conjugue qu’à la troisième personne du singulier. EN: falloir takes il only.', 'a6-piege'),
      lC('Écoute. Fera-t-il beau ce week-end. EN: Will the weather be fine.', 'Il ne fera pas beau ce week-end.', ['Non', 'Oui'], 0, 'La phrase est négative. EN: the sentence is negative.', 'a6-ecoute'),
      mc('Pour la météo, quel verbe prends-tu. EN: Which verb for the weather.', ['être', 'aller', 'faire'], 2, 'Il fera froid, il fera beau, il fera nuit. EN: faire covers most of it.', 'a6-meteo'),
      mc('« Il vaudra mieux réserver. » Qui doit réserver. EN: Who has to book.', ['la phrase ne le dit pas', 'toi'], 0, "C'est à ça que sert un impersonnel. EN: that is what an impersonal is for.", 'a6-construire'),
      mc('Quelle forme ne prend PAS il. EN: Which one does not take il.', ['il y aura', 'il pleuvra', 'ça ira'], 2, 'ça ira prend ça. EN: ça ira takes ça.', 'a6-check'),
      tI('Écris le verbe pleuvoir au futur. EN: Write pleuvoir in the future.', 'Il ... sur toute la région.', 'pleuvra', 'pleuvoir donne pleuvr-, à une seule personne. EN: pleuvr-, one person.', 'a6-cartes'),
    ],
  },
  {
    id: 'r6-composes', label: 'Les composés', targets: ['compose-refait'],
    questions: [
      mc('obtenir se conjugue au futur comme : EN: obtenir behaves like:', ['avoir', 'obtenir tout seul', 'tenir'], 2, 'obtiendr-, exactement comme tiendr-. EN: exactly like tenir.', 'a7-cartes'),
      tI('Écris le verbe revenir au futur. EN: Write revenir in the future.', 'Je ... te voir en août.', 'reviendrai', 'Le préfixe re- devant viendr-. EN: the prefix on viendr-.', 'a7-construire'),
      eS(FIX, 'J’obtenirai mon permis avant l’été.', 'J’obtiendrai mon permis avant l’été.', 'obtenir suit tenir : le d vient avec. EN: obtenir follows tenir.', 'a7-erreurs'),
      lC('Écoute. Le verbe est revoir ou prévoir. EN: revoir or prévoir.', 'Nous prévoirons un budget pour les travaux.', ['revoir', 'prévoir'], 1, 'prévoirons garde le -oi-. EN: prévoirons keeps the -oi-.', 'a7-ecoute'),
      mc('Le préfixe change-t-il le radical. EN: Does the prefix change the stem.', ['Non, jamais.', 'Oui, toujours.'], 0, 'reviendr-, obtiendr-, refer-, reverr-. EN: never.', 'a7-focus'),
      tI('Écris le verbe devenir au futur, troisième personne. EN: Write devenir, elle.', 'Elle ... directrice en janvier.', 'deviendra', 'devenir suit venir. EN: devenir follows venir.', 'a7-cartes'),
      mc('prévoir au futur, première personne : EN: prévoir, first person:', ['je prévoirai', 'je préverrai'], 0, "prévoir garde son -oi-. C'est l'exception. EN: prévoir keeps its -oi-.", 'a7-check'),
      mc('Devant un composé inconnu, tu cherches : EN: Faced with an unknown compound, you look for:', ['la traduction', 'un radical nouveau', 'le verbe simple dessous'], 2, 'Puis tu conjugues celui-là. EN: then you conjugate that one.', 'a7-focus'),
    ],
  },
  {
    id: 'r7-terminaisons', label: 'Les six fins', targets: ['fin-changee'],
    questions: [
      mc('Combien de terminaisons nouvelles cette leçon t’a demandées. EN: How many new endings.', ['zéro', 'six', 'vingt'], 0, `Zéro. ${REFRAME} EN: ${REFRAME_EN}`, 'a8-cartes'),
      tI('Écris le verbe pouvoir au futur, deuxième personne du pluriel. EN: Write pouvoir, vous.', 'Vous ... payer sur place.', 'pourrez', 'pourr- plus -ez. EN: pourr- plus -ez.', 'a8-construire'),
      eS(FIX, 'Ils feronts le tour du lac dimanche.', 'Ils feront le tour du lac dimanche.', '-ont ne prend jamais de s. EN: -ont never takes an s.', 'a8-piege'),
      lC('Écoute. Une ou plusieurs personnes. EN: One person or several.', 'Nous aurons besoin de deux jours de plus.', ['une', 'plusieurs'], 1, 'aurons : la terminaison -ons dit nous. EN: -ons says nous.', 'a8-lecture'),
      mc('Tu as écrit « je devré ». Qu’est-ce qui cloche. EN: What is wrong with je devré.', ['le radical', 'la personne', 'la terminaison'], 2, 'devr- est juste ; la fin du futur est -ai. EN: the stem is right.', 'a8-check'),
      mc('On dit : EN: You say:', ['on sera', 'on serons'], 0, 'on prend la terminaison de il. EN: on takes the il ending.', 'a8-cartes'),
      tI('Écris le verbe être au futur, deuxième personne du singulier. EN: Write être, tu.', 'Tu ... fier de toi.', 'seras', 'ser- plus -as. EN: ser- plus -as.', 'a8-construire'),
      mc('Quelle lettre se trouve avant chaque terminaison du futur. EN: Which letter sits before every future ending.', ['un s', 'un r', 'un d'], 1, `${THE_R} EN: ${THE_R_EN}`, 'a8-hacks'),
    ],
  },
  {
    id: 'r8-oreille', label: 'Futur ou imparfait', targets: ['futur-imparfait'],
    questions: [
      mc('« Demain, je ... à Lyon. » EN: Complete for tomorrow.', ['serai', 'étais', 'serais'], 0, 'ser- est le radical du futur. ét- serait hier. EN: ser- is the future stem.', 'a9-cartes'),
      tI('Écris le verbe savoir au futur. EN: Write savoir in the future.', 'La semaine prochaine, je ... quoi dire.', 'saurai', 'saur- pour demain, sav- pour hier. EN: saur- for tomorrow.', 'a9-paires'),
      eS(FIX, 'Dans deux ans, cette voiture valait moins cher.', 'Dans deux ans, cette voiture vaudra moins cher.', '« Dans deux ans » regarde devant, donc le verbe aussi. EN: the time phrase looks forward.', 'a9-erreurs'),
      lC('Écoute. Hier ou demain. EN: Yesterday or tomorrow.', "J'avais le temps ce soir-là.", ['demain', 'hier'], 1, 'av- est le radical de l’imparfait. EN: av- is the imparfait stem.', 'a9-ecoute'),
      mc('je serai et j’étais ont combien de lettres en commun. EN: How many letters do they share.', ['aucune', 'deux', 'quatre'], 0, 'Aucune. Deux radicaux sans rapport. EN: none.', 'a9-check'),
      mc('« Je devais partir tôt. » Es-tu parti. EN: Did you leave.', ['Oui, c’est sûr.', 'La phrase ne le dit pas.'], 1, "C'est le plan d'hier, et il reste ouvert. EN: yesterday's plan, outcome open.", 'a9-construire'),
      tI('Écris le verbe voir au futur, première personne du pluriel. EN: Write voir, nous.', 'Nous ... le lac depuis la cuisine.', 'verrons', 'verr- pour demain, voy- pour hier. EN: verr- for tomorrow.', 'a9-paires'),
      mc('Lequel de ces radicaux contient un r avant la terminaison. EN: Which stem has an r before the ending.', ['fais-', 'voy-', 'fer-'], 2, `${THE_R} EN: ${THE_R_EN}`, 'a9-check'),
    ],
  },
  {
    id: 'r9-predire', label: 'De vraies prédictions', targets: ['aller-partout'],
    questions: [
      mc('« Je vous l’enverrai avant ce soir. » C’est : EN: This is:', ['une prévision', 'une question', 'une promesse'], 2, 'Tu t’engages, et on te le rappellera. EN: you are committing.', 'a10-usages'),
      tI('Écris le verbe pouvoir au futur, à la forme négative. EN: Write pouvoir in the negative.', 'Je ne ... pas venir jeudi soir.', 'pourrai', 'ne et pas entourent le verbe conjugué. EN: ne and pas wrap the conjugated verb.', 'a10-construire'),
      eS(FIX, 'Le colis va arriver jeudi au plus tard, je vous le confirmerai.', 'Le colis arrivera jeudi au plus tard, je vous le confirmerai.', "Dans un écrit professionnel, la prévision prend le futur simple. EN: in writing, the simple future carries the forecast.", 'a10-cartes'),
      lC('Écoute. La personne viendra-t-elle. EN: Will the person come.', 'Je ne pourrai pas venir jeudi soir.', ['Oui', 'Non'], 1, 'C’est un refus poli. EN: a polite refusal.', 'a10-ecoute'),
      mc('Pour dire it will be fine, tu dis : EN: For it will be fine:', ['Ça ira.', 'Il ira.', 'Ce sera.'], 0, 'Formule toute faite, avec ça. EN: a set phrase, with ça.', 'a10-flashcards'),
      tI('Écris la formule toute faite avec tenir. EN: Write the set phrase with tenir.', 'Je te ... au courant.', 'tiendrai', 'tiendr- plus -ai. EN: tiendr- plus -ai.', 'a10-cartes'),
      mc('Après quand et dès que, le futur suit-il les mêmes règles. EN: Same rules after quand and dès que.', ['Oui.', 'Non : une leçon à part.'], 1, 'La leçon suivante s’en occupe. EN: the next lesson covers it.', 'a10-check'),
      mc('Dans « je ne pourrai pas venir », que trouve-t-on entre ne et pas. EN: What sits between ne and pas.', ['pourrai', 'venir', 'pourrai venir'], 0, 'Le verbe conjugué, comme partout. EN: the conjugated verb.', 'a10-construire'),
    ],
  },
  {
    id: 'r10-melange', label: 'Tout ensemble', targets: ['radical-melange'],
    questions: [
      mc('« Dans cinq ans, j’... trente-deux ans. » (avoir) EN: Complete with avoir.', ['aurai', 'avais', 'aurais'], 0, 'aur- plus -ai. EN: aur- plus -ai.', 'a11-lecture'),
      tI('Écris le verbe revenir au futur, première personne du pluriel. EN: Write revenir, nous.', 'Nous ... souvent à Dakar.', 'reviendrons', 'Le préfixe re- devant viendr-. EN: the prefix on viendr-.', 'a11-exemples'),
      eS(FIX, 'Il y aura des choses que je ne préverrai pas.', 'Il y aura des choses que je ne prévoirai pas.', "prévoir garde son -oi-. C'est la seule exception des composés. EN: prévoir keeps its -oi-.", 'a7-cartes'),
      lC('Écoute. Combien de verbes impersonnels. EN: How many impersonal verbs.', 'Il faudra emprunter, et il vaudra mieux attendre.', ['un', 'deux', 'aucun'], 1, 'il faudra et il vaudra mieux. EN: two of them.', 'a11-parler'),
      mc('Lequel de ces quatre radicaux n’existe pas. EN: Which of these stems does not exist.', ['saur-', 'enverr-', 'venir-', 'faudr-'], 2, 'venir donne viendr-. EN: venir gives viendr-.', 'a2-piege'),
      tI('Écris le verbe falloir au futur. EN: Write falloir in the future.', 'Il ... choisir avant la fin du mois.', 'faudra', 'faudr-, et seulement avec il. EN: faudr-, and only with il.', 'a6-construire'),
      mc('Combien de terminaisons de futur existe-t-il en français. EN: How many future endings exist.', ['six', 'vingt', 'une par famille'], 0, `Six, sur tous les verbes. ${REFRAME} EN: ${REFRAME_EN}`, 'a8-cartes'),
      mc('Tu as construit une forme et il n’y a pas de r avant la terminaison. Elle est : EN: No r before the ending. It is:', ['juste', 'peut-être juste', 'fausse'], 2, `${THE_R} EN: ${THE_R_EN}`, 'a8-hacks'),
    ],
  },
];

const A11_QUIZ: Sec<'quiz'> = {
  type: 'quiz',
  id: 'a11-quiz',
  layer: 'core',
  title: 'L’examen',
  passMark: 70,
  roundFailThreshold: 60,
  rounds: QUIZ_ROUNDS,
  audio: AUDIO,
  say: REFRAME,
};

const A11_FIN: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-fin',
  layer: 'core',
  title: 'Vingt radicaux, six fins',
  frSub: 'La fin de la leçon',
  // roundup is passage prose: exempt from the 45-word core cap.
  body: `${REFRAME} ${Cap(B105_REF)} t'a donné la recette régulière : « ${B105_REFRAME} » Cette leçon t'a donné les verbes qui refusent cette recette, et ils sont peu nombreux. ${THE_R} EN: ${REFRAME_EN} The regular recipe still holds for almost everything.`,
  points: [
    'ser-, aur-, ir-, fer-, viendr-, voudr- : les six que tu diras tous les jours.',
    'pourr-, verr-, enverr-, courr-, mourr- : deux r à l’écrit, un seul à l’oreille.',
    'saur-, devr-, recevr-, pleuvr- : le -oi- part.',
    'Les six terminaisons, elles, n’ont pas bougé d’un millimètre.',
  ],
  audio: AUDIO,
  say: `C'est la fin de la leçon. ${REFRAME}`,
  terms: ['radical', 'fin', 'famille'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Tout ensemble',
    opener: { line: 'Un modèle à imiter, tes propres cinq ans à écrire, puis l’examen des vingt radicaux. EN: A model to imitate, your own five years to write, then the exam on the twenty stems.', imageRef: 'lessons/futur-irregulier/act11.jpg' },
    sections: [],
    milestone: 'Tu as écrit tes cinq prochaines années et passé les dix séries de l’examen. EN: You wrote your next five years and sat the ten rounds.',
    estScreens: 130,
    restPoints: ['a11-plan', 'a11-parler', 'a11-recap', 'a11-progres', 'a11-quiz/r4-oir', 'a11-quiz/r8-oreille'],
  },
  sections: [A11_LECTURE, A11_PLAN, A11_EXEMPLES, A11_PARLER, A11_MISSION, A11_DIRE, A11_RECAP, A11_PROGRES, A11_QUIZ, A11_REVUE, A11_FIN],
  imports: IMPORTED.act11,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS — one per quiz round, fired by a failed round or by
 *  the round's errorTrigger. Deliberately NOT in `sections`.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  { id: 'd-grands', title: 'Les six grands', format: 'flashcard' as const, coach: `Une carte, un radical. ${REFRAME} EN: ${REFRAME_EN}`, items: [E(200), E(201), E(206), E(207), E(208), E(240)], audio: AUDIO },
  { id: 'd-double-r', title: 'Un r ou deux', format: 'mcq' as const, coach: 'Le son ne te dira rien. Regarde le radical. EN: the sound will not help; look at the stem.', q: 'Tu écris le futur de envoyer. EN: Write the future of envoyer.', opts: ['j’enverai', 'j’enverrai'], correct: 1, why: 'enverr-, avec deux r. EN: enverr-, two r.', items: [E(209), E(247), E(252), E(255), E(258), E(260)], audio: AUDIO },
  { id: 'd-le-d', title: 'Le d qui apparaît', format: 'sort' as const, coach: 'Deux tas : le d arrive, ou il n’arrive pas. EN: two piles: the d comes, or it does not.', buckets: ['avec un d', 'sans d'], items: [E(208), E(262), E(267), E(211), E(209), E(247)], audio: AUDIO },
  { id: 'd-oir', title: 'Le -oi- qui part', format: 'mcq' as const, coach: 'savoir, devoir, recevoir, pleuvoir : enlève le -oi-. EN: take the -oi- out.', q: 'Le futur de savoir, première personne. EN: The future of savoir, je.', opts: ['je savoirai', 'je saverai', 'je saurai'], correct: 2, why: 'saur-. Le -oi- disparaît. EN: the -oi- vanishes.', items: [E(210), E(287), E(292), E(297), E(299), E(283)], audio: AUDIO },
  { id: 'd-impersonnels', title: 'Un seul sujet', format: 'flashcard' as const, coach: 'Lis la carte et dis la phrase entière, avec son il. EN: say the whole line, with its il.', items: [E(211), E(297), E(302), E(305), E(309), E(314)], audio: AUDIO },
  { id: 'd-composes', title: 'Le préfixe est gratuit', format: 'mcq' as const, coach: 'Trouve le verbe simple sous le composé. EN: find the simple verb underneath.', q: 'obtenir se conjugue comme : EN: obtenir behaves like:', opts: ['tenir', 'obtenir tout seul', 'avoir'], correct: 0, why: 'obtiendr-, exactement comme tiendr-. EN: exactly like tenir.', items: [E(320), E(323), E(326), E(331), E(333), E(335)], audio: AUDIO },
  { id: 'd-terminaisons', title: 'Les six fins', format: 'flashcard' as const, coach: `-ai, -as, -a, -ons, -ez, -ont. ${REFRAME} EN: ${REFRAME_EN}`, items: [E(338), E(339), E(341), E(343), E(348), E(353)], audio: AUDIO },
  { id: 'd-oreille', title: 'Futur ou imparfait', format: 'sort' as const, coach: 'Deux tas. Demain, ou hier. EN: two piles: tomorrow, or yesterday.', buckets: ['demain', 'hier'], items: [E(356), E(357), E(358), E(359), E(362), E(363)], audio: AUDIO },
  { id: 'd-predire', title: 'Promettre ou annoncer', format: 'mcq' as const, coach: 'Est-ce que tu t’engages, ou est-ce que tu annonces. EN: are you committing, or announcing.', q: '« Je te tiendrai au courant. » C’est : EN: This is:', opts: ['une promesse', 'une prédiction'], correct: 0, why: 'Tu t’engages. EN: you are committing.', items: [E(376), E(377), E(384), E(387), E(390), E(391)], audio: AUDIO },
  { id: 'd-melange', title: 'Les vingt radicaux', format: 'flashcard' as const, coach: `Une carte, une famille. ${THE_R} EN: ${THE_R_EN}`, items: [E(200), E(209), E(262), E(287), E(302), E(320)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'infinitif-radical', description: 'Builds the future of être, avoir, aller, faire, venir or vouloir by gluing the ending onto the infinitive.', detectOn: ['a1-scene', 'a2-construire', 'a2-piege', 'a2-check'], drill: 'd-grands', retest: 'd-grands' },
  { id: 'un-seul-r', description: 'Writes one r in pourrai, verrai, enverrai, courrai or mourrai, because only one is audible.', detectOn: ['a3-construire', 'a3-erreurs', 'a3-check'], drill: 'd-double-r', retest: 'd-double-r' },
  { id: 'd-oublie', description: 'Drops the d of viendr-, tiendr-, vaudr-, faudr- or voudr-, or conjugates falloir on a person other than il.', detectOn: ['a4-construire', 'a4-piege', 'a4-check'], drill: 'd-le-d', retest: 'd-le-d' },
  { id: 'oir-garde', description: 'Keeps the -oi- of savoir, devoir, recevoir or pleuvoir in the future stem, or rebuilds recevoir as an -er verb.', detectOn: ['a5-construire', 'a5-erreurs', 'a5-check'], drill: 'd-oir', retest: 'd-oir' },
  { id: 'impersonnel-sujet', description: 'Gives an impersonal future a real subject (nous faudrons, ils seront du monde), or uses être for the weather.', detectOn: ['a6-construire', 'a6-piege', 'a6-check'], drill: 'd-impersonnels', retest: 'd-impersonnels' },
  { id: 'compose-refait', description: 'Conjugates a compound as if it were a new verb instead of inheriting the simple verb stem, or applies verr- to prévoir.', detectOn: ['a7-construire', 'a7-erreurs', 'a7-check'], drill: 'd-composes', retest: 'd-composes' },
  { id: 'fin-changee', description: 'Damages the ending on a correctly built stem: -é for -ai, -ont with an s, a doubled future r, or the nous ending on on.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-terminaisons', retest: 'd-terminaisons' },
  { id: 'futur-imparfait', description: 'Reaches for the imparfait stem in a sentence that looks forward, because four past lessons have just made those forms the fastest ones available.', detectOn: ['a9-construire', 'a9-piege', 'a9-erreurs', 'a11-mission'], drill: 'd-oreille', retest: 'd-oreille' },
  { id: 'aller-partout', description: 'Avoids the irregular stems altogether by falling back on aller plus the infinitive, or on the present, wherever a commitment is being made.', detectOn: ['a10-construire', 'a10-check', 'a11-parler'], drill: 'd-predire', retest: 'd-predire' },
  { id: 'radical-melange', description: 'Mixes the families under pressure in a long stretch of writing: a -rr- stem given a d, a compound rebuilt from scratch, an impersonal conjugated.', detectOn: ['a11-parler', 'a11-mission', 'a11-progres'], drill: 'd-melange' },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at layer core
 *  is refused by validateDensity). `cheatSheet` is NOT used inside a sheet:
 *  there it draws its title and nothing else.
 *
 *  Every sheet is LINKED from at least one mission through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-radicaux', 'Tous les radicaux irréguliers', ['les vingt radicaux', 'la forme je', 'la famille de chacun'], [
    teach('sheet-radicaux-teach', 'Comment lire cette page', `${REFRAME} Pour chaque verbe, la colonne « radical » est la seule chose à apprendre : les terminaisons -ai, -as, -a, -ons, -ez, -ont se posent derrière sans jamais changer. ${THE_R} Si tu as construit une forme et qu'il n'y a pas de r avant la terminaison, la forme est fausse. Les composés de la dernière ligne viennent gratuitement avec leur verbe simple. EN: ${REFRAME_EN} The stem column is the only thing to learn, and every stem ends in r.`),
    table('sheet-radicaux-table', 'Les vingt radicaux', ['Infinitif', 'Radical', 'je', 'Famille'], [
      ['être', 'ser-', 'je serai', 'les six grands'],
      ['avoir', 'aur-', "j'aurai", 'les six grands'],
      ['aller', 'ir-', "j'irai", 'les six grands'],
      ['faire', 'fer-', 'je ferai', 'les six grands'],
      ['venir', 'viendr-', 'je viendrai', 'les six grands, -dr-'],
      ['vouloir', 'voudr-', 'je voudrai', 'les six grands, -dr-'],
      ['pouvoir', 'pourr-', 'je pourrai', '-rr-'],
      ['voir', 'verr-', 'je verrai', '-rr-'],
      ['envoyer', 'enverr-', "j'enverrai", '-rr-'],
      ['courir', 'courr-', 'je courrai', '-rr-'],
      ['mourir', 'mourr-', 'je mourrai', '-rr-'],
      ['tenir', 'tiendr-', 'je tiendrai', '-dr-'],
      ['valoir', 'vaudr-', 'il vaudra', '-dr-'],
      ['falloir', 'faudr-', 'il faudra', '-dr-, impersonnel'],
      ['savoir', 'saur-', 'je saurai', '-oir'],
      ['devoir', 'devr-', 'je devrai', '-oir'],
      ['recevoir', 'recevr-', 'je recevrai', '-oir'],
      ['pleuvoir', 'pleuvr-', 'il pleuvra', '-oir, impersonnel'],
      ['prévoir', 'prévoir-', 'je prévoirai', "l'exception"],
      ['revenir, devenir, obtenir, refaire, revoir', 'comme le verbe simple', 'je reviendrai', 'les composés'],
    ]),
    table('sheet-radicaux-fins', 'Les six terminaisons, sur tous les verbes', ['Personne', 'Terminaison', 'Sur ser-', 'Sur pourr-'], [
      ['je', '-ai', 'je serai', 'je pourrai'],
      ['tu', '-as', 'tu seras', 'tu pourras'],
      ['il, elle, on', '-a', 'il sera', 'il pourra'],
      ['nous', '-ons', 'nous serons', 'nous pourrons'],
      ['vous', '-ez', 'vous serez', 'vous pourrez'],
      ['ils, elles', '-ont', 'ils seront', 'ils pourront'],
    ]),
  ]),
  sheet('sheet-familles', 'Les familles de radicaux', ['les -rr-', 'les -dr-', 'les -oir', 'ce qui change'], [
    teach('sheet-familles-teach', 'Trois familles, trois gestes', "La famille en -rr- double un r que tu n'entendras jamais : pouvoir, voir, envoyer, courir, mourir. La famille en -dr- fait apparaître un d qui n'est dans aucun infinitif : venir, tenir, valoir, falloir, vouloir. La famille en -oir perd son -oi- : savoir, devoir, recevoir, pleuvoir. Deux verbes sont dans deux familles à la fois, parce qu'ils perdent leur -oir ET gagnent un d : vouloir et valoir. EN: three families, three moves, and two verbs belong to two of them.", ),
    table('sheet-familles-table', 'Ce que fait chaque famille', ['Famille', 'Le geste', 'Les verbes', 'Exemple'], [
      ['-rr-', 'un r de plus, muet', 'pouvoir, voir, envoyer, courir, mourir', 'je pourrai'],
      ['-dr-', 'un d qui apparaît', 'venir, tenir, valoir, falloir, vouloir', 'je viendrai'],
      ['-oir', 'le -oi- disparaît', 'savoir, devoir, recevoir, pleuvoir', 'je saurai'],
      ['les deux', '-oi- en moins, d en plus', 'vouloir, valoir', 'je voudrai'],
      ['les six grands', 'chacun le sien', 'être, avoir, aller, faire, venir, vouloir', 'je serai'],
      ['les composés', 'rien, le préfixe est gratuit', 'revenir, obtenir, refaire, revoir', 'je reviendrai'],
    ]),
  ]),
  sheet('sheet-impersonnels', 'Les impersonnels au futur', ['il faudra', 'il y aura', 'la météo', 'ça ira'], [
    teach('sheet-impersonnels-teach', 'Un sujet qui ne désigne personne', "il faudra, il y aura, il fera, il pleuvra, il neigera, il vaudra mieux : dans toutes ces phrases, le il ne remplace personne. Il tient la place du sujet, parce qu'une phrase française en veut un. Ces verbes n'ont donc qu'une seule forme au futur, et tu n'auras jamais à choisir la personne. « Ça ira » marche pareil avec ça. EN: the il stands for nobody and these verbs have one form only.", ),
    table('sheet-impersonnels-table', 'Les impersonnels les plus utiles', ['Forme', 'Le verbe', 'Ce que ça dit', 'Exemple'], [
      ['il faudra', 'falloir', 'un besoin à venir', 'Il faudra deux voitures.'],
      ['il y aura', 'avoir', 'une présence à venir', 'Il y aura du monde au marché.'],
      ['il fera', 'faire', 'la météo et la lumière', 'Il fera nuit avant six heures.'],
      ['il pleuvra', 'pleuvoir', 'la pluie', 'Il pleuvra sur toute la région.'],
      ['il vaudra mieux', 'valoir', 'un conseil', 'Il vaudra mieux réserver.'],
      ['ça ira', 'aller', 'une réassurance', 'Ça ira mieux demain.'],
    ]),
  ]),
  sheet('sheet-composes', 'Les composés', ['le préfixe', 'ce qui vient gratuitement', "l'exception prévoir"], [
    teach('sheet-composes-teach', 'Un radical appris, cinq verbes gagnés', "Un composé est un préfixe collé devant un verbe que tu connais : re-venir, de-venir, ob-tenir, re-tenir, re-faire, re-voir. Le préfixe ne touche pas au radical. Si tu sais dire « je viendrai », tu sais déjà dire « je reviendrai » et « je deviendrai ». C'est le meilleur rapport entre ce que tu apprends et ce que tu peux dire. Une seule exception compte : prévoir garde son -oi- au futur, alors que revoir ne le garde pas. EN: the prefix never touches the stem, and prévoir is the one exception.", ),
    table('sheet-composes-table', 'Les composés utiles', ['Composé', 'Verbe simple', 'Radical', 'Exemple'], [
      ['revenir', 'venir', 'reviendr-', 'Je reviendrai en août.'],
      ['devenir', 'venir', 'deviendr-', 'Elle deviendra directrice.'],
      ['obtenir', 'tenir', 'obtiendr-', "J'obtiendrai mon permis."],
      ['retenir', 'tenir', 'retiendr-', 'Je retiendrai une table.'],
      ['refaire', 'faire', 'refer-', 'Nous referons la cuisine.'],
      ['revoir', 'voir', 'reverr-', 'On se reverra à la rentrée.'],
      ['prévoir', 'voir, mais non', 'prévoir-', 'Je prévoirai un budget.'],
    ]),
  ]),
  sheet('sheet-oreille', 'Futur ou imparfait', ['les six paires', 'ce que le radical dit', 'demain ou hier'], [
    teach('sheet-oreille-teach', 'Deux radicaux, aucune confusion possible', `Le futur et l'imparfait des mêmes verbes ne se ressemblent pas du tout, parce qu'ils partent de deux radicaux différents. « ${B101_REFRAME} » construit l'imparfait ; le futur, lui, prend le radical de cette leçon. Résultat : je serai et j'étais n'ont pas une lettre en commun, et l'oreille tranche dès la première syllabe. C'est l'un des rares endroits de la grammaire française où deux temps sont impossibles à confondre. EN: the two tenses take different stems, so the ear decides at the first syllable.`),
    table('sheet-oreille-table', 'Six paires', ['Verbe', 'Imparfait', 'Futur', 'Ce que ça change'], [
      ['être', "j'étais", 'je serai', 'hier contre demain'],
      ['avoir', "j'avais", "j'aurai", 'hier contre demain'],
      ['faire', 'je faisais', 'je ferai', 'hier contre demain'],
      ['voir', 'je voyais', 'je verrai', 'hier contre demain'],
      ['savoir', 'je savais', 'je saurai', 'hier contre demain'],
      ['devoir', 'je devais', 'je devrai', 'le plan passé contre l’obligation à venir'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  ASSEMBLY
 * ══════════════════════════════════════════════════════════════════════════ */

const ACTS: ActDef[] = [ACT1, ACT2, ACT3, ACT4, ACT5, ACT6, ACT7, ACT8, ACT9, ACT10, ACT11];

export const SECTIONS: DraftSection[] = ACTS.flatMap((a) => a.sections);

/** Every id the lesson can put in front of a learner. */
export const ITEM_IDS = [...new Set([...ALL_ROWS.map((r) => r.id), ...ACTS.flatMap((a) => a.imports)])];

const FLASHABLE = new Set([
  ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('flashcard')).map((r) => r.id),
  ...ITEM_IDS.filter((id) => !ROW.has(id) && !NOT_DECK_ABLE.includes(id)),
]);

/** One slice per act: that act's authored rows plus its imports, each id
 *  released ONCE, and only ids a deck can actually serve. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

const REC_DESC: Record<string, string> = {
  'rec-b1-06-yannick': "Yannick's two lines, ONE TAKE, a Québécois voice, at a counter. Businesslike and slightly rushed: he is booking a slot, not making conversation. No stress on « aura ».",
  'rec-b1-06-sarah': "Sarah's message read as a voice note, ONE TAKE, one female voice, at dictation pace. Every future verb gets the same weight as the words around it: the learner has to find them, not be told where they are.",
  'rec-b1-06-lea': 'Léa and a colleague in a Geneva office, one take, two voices, ordinary Friday-afternoon pace. The six irregular stems are read flat, with no emphasis on any of them.',
  'rec-b1-06-grands': 'The seven cards of the big six, one take per card. « je serai » and « j’aurai » are short and unstressed.',
  'rec-b1-06-grands-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The lines are hidden on screen, so nothing may be clarified for the microphone.',
  'rec-b1-06-grands-piege': "The audio step plays each card's fr, the CORRECT form. The promptSound lines are never spoken: they are words that do not exist and must not be given a pronunciation.",
  'rec-b1-06-contrat': 'Two colleagues in a Brussels agency at the end of the day, one take, two voices. Slightly tired, friendly, never dramatic.',
  'rec-b1-06-double-r': 'The six double-r cards, one take per card. CRITICAL: read the single r. « je pourrai » has one /ʁ/, and a reader who lengthens it teaches the opposite of the card.',
  'rec-b1-06-double-r-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in order. The whole point is that the doubled r is inaudible, so no line may be over-articulated.',
  'rec-b1-06-garage': 'A mechanic and a customer in a Lyon garage, one take, two voices. Matter-of-fact, no upselling tone: the estimate is just an estimate.',
  'rec-b1-06-le-d': 'The six -dr- cards, one take per card. Here the d IS pronounced and must be audible, in deliberate contrast with the double r of the previous act.',
  'rec-b1-06-le-d-ecoute': 'Eight lines, ONE TAKE, ONE VOICE, in order, natural pace.',
  'rec-b1-06-le-d-piege': "The audio step plays each card's fr only. The promptSound forms do not exist and are never spoken.",
  'rec-b1-06-formation': "The training letter read as a voice note, ONE TAKE, one voice, at dictation pace. The four -oir futures (recevrez, devrez, saurez, pourront) get no extra weight: the learner has to find them.",
  'rec-b1-06-oir': 'The five -oir cards, one take per card. « je saurai » is two syllables and must not be stretched into three.',
  'rec-b1-06-oir-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The lines are hidden on screen.',
  'rec-b1-06-pique-nique': 'Two neighbours in a Montreal kitchen, one take, two voices, relaxed Thursday-evening pace. The six impersonals are read as ordinary speech, never as a weather bulletin.',
  'rec-b1-06-impersonnels': 'The six impersonal cards, one take per card. « il y aura » is three words run together, /i.lja.ʁa/, and must not be separated for clarity.',
  'rec-b1-06-meteo-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in order. Line 4 is negative and the ne is elided as in normal speech.',
  'rec-b1-06-impersonnels-piege': "The audio step plays each card's fr only. « nous faudrons » and « nous pleuvrons » are not French and are never spoken.",
  'rec-b1-06-pot': 'A leaving party in a Nantes office, one take, two voices, a little noise behind. Warm, slightly loud, never sentimental.',
  'rec-b1-06-composes': 'The six compound cards, one take per card. The prefix is unstressed: « je reviendrai » has its stress on the last syllable, not on the re-.',
  'rec-b1-06-composes-ecoute': 'Eight lines, ONE TAKE, ONE VOICE, in order. Line 7 (prévoirons) and line 6 (reverra) must be read at the same pace: the contrast is in the vowels, not in the delivery.',
  'rec-b1-06-sortie': 'The trip programme read as an announcement to a group, ONE TAKE, one voice, unhurried. Every person of the verb is given equal weight, because the mission is about the endings.',
  'rec-b1-06-fins': 'The five endings cards, one take per card. On the third card, the r of se-r-ons, pour-r-ons and dev-r-ons must be audible in all three.',
  'rec-b1-06-fins-piege': "The audio step plays each card's fr only. The promptSound forms (je seré, nous aurront, ils feronts) are misspellings and are never spoken.",
  'rec-b1-06-quai': 'Two colleagues on a Lausanne platform, one take, two voices, with a little station noise. The imparfait and future forms alternate and must be read flat: the contrast is lexical, not performed.',
  'rec-b1-06-oreille': 'The six pair cards, one take per card. CRITICAL: read both halves of each pair with the SAME intonation. A reader who marks one as odd teaches the opposite of the card.',
  'rec-b1-06-oreille-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in order, alternating tenses without any signal that they alternate.',
  'rec-b1-06-oreille-piege': "The audio step plays each card's fr, the CORRECT sentence. The promptSound lines are grammatical French about the wrong day, so they are never spoken here.",
  'rec-b1-06-quartier': 'The local-news piece read as a radio item, ONE TAKE, one voice, news pace. The quoted line from the committee president keeps the same voice, with a slight change of tone.',
  'rec-b1-06-predire': 'The five prediction cards, one take per card. The promise card is warm, the forecast card is neutral, the refusal card is apologetic but not grovelling.',
  'rec-b1-06-messages': 'Eight short messages, ONE TAKE, one voice, as if read aloud from a phone. Lines 1 and 5 are warm, lines 2 and 6 are flat.',
  'rec-b1-06-cinq-ans': "The model text read as a voice note, ONE TAKE, one female voice, unhurried and a little hesitant where the text hesitates. The learner will imitate this, so the delivery is the model too.",
};

/** Every recordingId the sections name, each with its studio brief. */
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-06-[a-z0-9-]+/g) ?? [])];

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: LESSON_TITLE,
  level: LEVEL,
  tag: 'B1 · LEÇON 06',
  intro: "You can already build the future of almost any French verb: take the infinitive, add the ending. About twenty verbs refuse that, and they are the ones you use most. être becomes ser-, avoir becomes aur-, aller becomes ir-. This lesson gives you those stems in five small families rather than one long list, and it keeps saying the thing that makes them cheap: the six endings never change.",
  skill: 'PE',
  grammarAssumed: ['b1.05', ALLER_UNIT, MODAUX_UNIT, SAVOIR_UNIT, FAIRE_UNIT],
  grammarIntroduced: [
    'The irregular future stems of être, avoir, aller and faire, which share no material with their infinitives',
    'The -rr- family (pouvoir, voir, envoyer, courir, mourir) as a written doubling with no audible reflex',
    'The -dr- family (venir, tenir, valoir, falloir, vouloir) as an epenthetic d absent from every infinitive',
    'The -oir family (savoir, devoir, recevoir, pleuvoir) as the loss of the infinitive -oi-',
    'The impersonal futures il faudra, il y aura, il fera, il pleuvra, il vaudra mieux and ça ira, each with one person only',
    'Compound verbs inheriting the stem of their simple verb (revenir, devenir, obtenir, retenir, refaire, revoir), and prévoir as the exception',
    'The invariance of the six future endings across every stem, regular or irregular, and the r that closes every stem',
    'The auditory contrast between the future and the imparfait of the same six verbs, which take disjoint stems',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais déjà construire le futur de presque tous les verbes. Une vingtaine refusent la recette, et ce sont ceux que tu utilises le plus. être donne ser-, avoir donne aur-, aller donne ir-. Cinq petites familles au lieu d'une longue liste, et une bonne nouvelle : les six terminaisons ne changent jamais.",
    minutes: 115,
    difficulty: 3,
    glyph: 'ra',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: FUTUR_IRREGULIER_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Paul, 2026-09-22: every `say` is French, spoken by a fr-FR voice.
    coachVoice: 'coach-fr-FR',
    recorded: REC_IDS.map((id) => ({ id, desc: REC_DESC[id] ?? `${id}: missing studio brief` })),
  },
};

LESSON.overview!.screens = ACTS.reduce((n, a) => n + a.act.estScreens, 0);

/** The lesson as the CURRENT validators accept it: the draft `task` removed
 *  from `sections` and from every act. */
export function lessonWithoutTask(): Lesson {
  const isTask = (s: DraftSection): s is TaskSection => s.type === 'task';
  const taskIds = new Set(LESSON.sections.filter(isTask).map((s) => s.id));
  return {
    ...LESSON,
    sections: LESSON.sections.filter((s): s is LessonSection => !isTask(s)),
    acts: LESSON.acts?.map((a) => ({
      ...a,
      sections: a.sections.filter((id) => !taskIds.has(id)),
      restPoints: a.restPoints?.filter((rp) => !taskIds.has(rp.split('/')[0])),
    })),
  };
}

/** Named so a batch, a merge and a test agree on what is named, not released. */
export const NAMED_NOT_RELEASED = [...NOT_DECK_ABLE];
export { IMPORTED, NOT_SPEAKABLE, SPEAKABLE_IMPORTS, dicteeFor };
