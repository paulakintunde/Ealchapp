// b1.11.l1 « Qui et que » — the lesson.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Not imported, not merged into seed.json, not published. The `task` section
// is the draft type in `_task-section.ts`, not in schema.ts, so `sections` is
// `DraftSection[]` and the validators run on `lessonWithoutTask()`.
//
// ══════════════════════════════════════════════════════════════════════════
//  ACT PLAN  (sub-topic · missions · what the act releases)
// ══════════════════════════════════════════════════════════════════════════
//
//   Rhythm per act: meet (scene / story / reading), name (cardDeck, examples,
//   tapTable), build (groupDrill, gated), choose (a drill where the MEANING
//   picks the pronoun), trap (trapDrill stepped or commonErrors), check
//   (gated control pages before the checkpoint).
//
//    1  Deux phrases collées         7   what a relative clause does at all
//    2  qui, le sujet                7   nothing takes the subject slot
//    3  que, le complément           7   a new subject arrives behind it
//    4  Le repère                    8   the one-second test, and the pairs
//    5  qui ne tombe jamais          7   elision: qu' exists, qu'i does not
//    6  Des gens et des choses       7   the antecedent decides nothing
//    7  Le mot qu'on ne saute pas    8   English may drop it, French may not
//    8  L'accord du participe        8   audible (écrite, prise) and silent
//    9  Au milieu de la phrase       7   embedding, the two commas, word order
//   10  Ce qui, ce que               6   PREVIEW ONLY; b1.13 owns it
//   11  Faire des phrases longues   11   model, plan, role play, TASK, quiz
//
//   TOTAL 83 missions, 11 acts. Corpus: 197 authored rows in one block
//   (.1000-.1196) plus 49 reused seed rows, released act by act through
//   `deckTranche`. Chapter artwork: `qui-que-image-prompts.md`, 11 prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (b1.12 and b1.13 import it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Derrière qui, pas de sujet. Derrière que, toujours un sujet. »
//   EN: Behind qui, no subject. Behind que, always a subject.
//
//   ONE METAPHOR, LE REPÈRE: the choice is settled by LOOKING BEHIND the
//   pronoun, never by looking in front of it. It is NOT a people/things rule
//   and it is NOT a translation of who / which / that, which are the two
//   reframes the corpus rejects by name (§D). The wording says "no subject"
//   rather than "the verb", because an object pronoun may legitimately sit
//   between qui and its verb: « le serveur qui NOUS apporte l'addition ».
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the relative clause itself, qui and que, the look-behind test,
//           the elision rule, the both-people-and-things fact, the never-drop
//           rule, past-participle agreement after a preceding que, and the
//           commas around an embedded clause.
//   QUOTES  b1.04's reframe (imported as B104_REFRAME, never retyped): act 8
//           sits on the passé composé that b1.04 finished.
//   LEAVES  to b1.12: dont and où, and the prepositional relatives (avec qui,
//           à qui, chez qui), which this lesson never prints. To b1.13:
//           lequel, and ce qui / ce que, which act 10 PREVIEWS in six
//           missions and says so on the card, in the act check and in the
//           task's grader notes.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the situation
//   needs (madame Prévost at the counter says « vous »). Every learner
//   surface that explains something carries English (`en`, or a final
//   « EN: »). Every `say` is French, spoken fr-FR. Theme
//   `pronoms-essentiels`. A2 citations use the English trail label; b1.* ones
//   are French from the plan.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. POSTGRES HOLDS THREE ROWS THAT ALREADY TEACH THIS
//      (fr.b1.pronoms-essentiels.056, .057, .058) and the seed does not carry
//      them, so `src()` cannot name them and no section here does. They must
//      be wired in at import rather than re-authored. Confirm.
//   2. ACT 10 previews ce qui / ce que in six missions without teaching the
//      full system, because b1.13 owns it. Is six the right size, or should
//      act 10 shrink to a single card inside act 11?
//   3. THREE tapTables (acts 4, 7 and 8), one per act. The pilot brief allowed
//      one per LESSON; b1.02-b1.08 shipped 2 and 3. Confirm the looser rule.
//   4. PREPOSITIONAL RELATIVES (à qui, avec qui, chez qui) are common at B1
//      and are left entirely to b1.12/b1.13. A learner finishing this lesson
//      can build « la personne que j'attends » but not « la personne à qui je
//      parle ». Is that the right seam?
//   5. B1 CITATIONS are French from the plan (« la leçon 13 du B1 ») because
//      b1.* units are not in the seed. Switch to the English trail label once
//      they are?
//   6. Titles, labels, card heads and stat keys carry no « EN: » tail, as in
//      b1.01-b1.08. Tail them too?
//   7. 'coach-fr-FR' is still a proposed voice id (b1.01's question 5).
//   8. The task is WRITTEN (110-150 words, `skill: 'PE'`). The unit outcome is
//      written and spoken both. Should b1.11 also carry a spoken task?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, THE_TEST, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  READING_COMPTOIR, READING_TRADUCTION, READING_ASSURANCE, READING_ANNONCE,
  B104_REFRAME, B104_REFRAME_EN,
  PC_UNIT, PARTICIPES_UNIT, COD_UNIT, PAIRES_UNIT,
  PC_REF, PARTICIPES_REF, COD_REF, PAIRES_REF, DONT_OU_REF, LEQUEL_REF,
} from './qui-que-corpus.ts';
import { QUI_QUE_TERMS } from './qui-que-terms.ts';

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
  if (!r) throw new Error(`b1.11: no item ${id}`);
  return r;
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
 *  ACT 1 — DEUX PHRASES COLLÉES
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Nothing the learner says is ungrammatical. It is simply four short
 *  sentences, and four short sentences cannot tell four blue bags apart.
 *  NO « ? » OR « ! » IN ANY BUBBLE (house rule 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Au comptoir des objets trouvés',
  frSub: 'Quatre sacs bleus sur une étagère',
  setting: { place: 'Bureau des objets trouvés, station Mont-Royal', city: 'Montréal', time: '9 h 10', ambience: 'un comptoir, une file de six personnes, une étagère au fond' },
  beats: [
    {
      kind: 'narration',
      text: "Le bureau des objets trouvés, au sous-sol de la station Mont-Royal. Mardi matin. Tu as laissé ton sac dans le bus jeudi dernier. L'employée ouvre un formulaire.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Madame Prévost',
      fr: 'Bonjour. Décrivez-moi le sac que vous avez perdu.',
      en: 'Good morning. Describe the bag you lost.',
      respell: '[bohⁿ-ZHOOR | day-kree-vay MWAH luh sak kuh voo zah-vay pehr-DÜ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "J'ai perdu un sac. Il est bleu. Je l'ai acheté à Québec. Il contient un livre.",
      en: 'I lost a bag. It is blue. I bought it in Quebec City. It has a book in it.',
      respell: '[zhay pehr-DÜ uhⁿ SAK | eel eh BLUH | zhuh lay ash-TAY ah kay-BEK]',
      stage: 'Quatre phrases courtes. Grammaticalement, rien ne cloche.',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Madame Prévost lève les yeux. Derrière elle, sur l'étagère, il y a quatre sacs bleus. Tes quatre phrases sont vraies, et elles ne montrent aucun des quatre.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Madame Prévost',
      fr: "J'ai quatre sacs bleus. Dites-moi lequel, en une phrase.",
      en: 'I have four blue bags. Tell me which one, in one sentence.',
      respell: '[zhay katr sak BLUH | deet MWAH luh-KEL ahⁿ ün FRAHZ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: 'Tu recommences. Quelle phrase désigne un seul sac sur les quatre ?',
      size: 'lg',
      options: [
        { fr: "J'ai perdu un sac. Le livre vient de la bibliothèque.", respell: '[zhay pehr-DÜ uhⁿ SAK | luh leevr vyehⁿ duh lah bee-blee-oh-TEK]', en: 'I lost a bag. The book is from the library.', outcome: 'breaks', audio: AUDIO },
        { fr: "Le sac que j'ai perdu contient un livre de la bibliothèque.", respell: '[luh sak kuh zhay pehr-DÜ | kohⁿ-tyehⁿ uhⁿ leevr duh lah bee-blee-oh-TEK]', en: 'The bag I lost has a library book in it.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Elle va derrière, elle ouvre un sac, elle trouve le livre. C'est le tien. Une seule phrase a suffi.",
        breaks: "Elle note deux lignes séparées. Elle ne sait toujours pas quel sac contient ce livre, et elle doit les ouvrir tous les quatre.",
      },
    },
    {
      kind: 'break',
      heading: 'Un nom, deux phrases',
      body: "Tes deux phrases parlaient du même sac, mais elles ne se touchaient pas. Une relative les colle : le nom n'est pas répété, un petit mot le reprend. EN: two sentences share a noun, and a small word picks it up instead of repeating it.",
      wrong: {
        fr: "J'ai perdu un sac. Le sac contient un livre.",
        ipa: '/ʒe pɛʁ.dy ɛ̃ sak lə sak kɔ̃.tjɛ̃ ɛ̃ livʁ/',
        respell: '[zhay pehr-DÜ uhⁿ SAK | luh sak kohⁿ-tyehⁿ uhⁿ LEEVR]',
        en: 'I lost a bag. The bag has a book in it.',
      },
      right: {
        fr: "Le sac que j'ai perdu contient un livre.",
        ipa: '/lə sak kə ʒe pɛʁ.dy kɔ̃.tjɛ̃ ɛ̃ livʁ/',
        respell: '[luh sak kuh zhay pehr-DÜ kohⁿ-tyehⁿ uhⁿ LEEVR]',
        en: 'The bag I lost has a book in it.',
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Tu repars avec ton sac. Il reste une question : pourquoi que ici, et qui dans « le livre qui est dedans ». C'est toute cette leçon.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['relative', 'chaine'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Coller deux phrases courtes en une seule', s: 'Actes 1 et 11 : la soudure, puis la description entière' },
    { t: 'Choisir entre qui et que en une seconde', s: 'Actes 2 à 4 : le sujet, le complément, le repère' },
    { t: 'Ne plus sauter le mot, ni élider qui', s: "Actes 5 à 7 : l'élision, les gens et les choses, le mot fixe" },
    { t: 'Accorder le participe et poser tes virgules', s: 'Actes 8 et 9 : écrite, prise, et la relative au milieu' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the same counter in writing, where six relatives are
 *  already doing the work. Noticing before the rule. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le comptoir, par écrit',
  frSub: 'Lis, et compte les petits mots',
  text: READING_COMPTOIR,
  glossary: [
    { word: 'le comptoir', en: 'the counter', note: 'Le long meuble derrière lequel travaille un employé.' },
    { word: "l'étagère", en: 'the shelf', note: 'La planche où les objets attendent leur propriétaire.' },
    { word: "l'étiquette", en: 'the label', note: 'Le petit carton attaché au sac, avec un nom dessus.' },
    { word: 'la poignée', en: 'the handle', note: 'La partie par laquelle on tient le sac.' },
  ],
  questions: [
    { q: 'Pourquoi les quatre premières phrases ne servent à rien ?', a: "Elles sont vraies, mais séparées. Quatre sacs bleus répondent aux quatre en même temps." },
    { q: 'Quels petits mots collent les phrases ensemble ?', a: "qui et que. Six fois dans le texte, et jamais un nom répété." },
    { q: 'Quel mot suit « le sac » la deuxième fois ?', a: "que : « le sac que j'ai perdu ». Derrière, il y a j', un nouveau sujet." },
    { q: 'Quel mot suit « le livre » ?', a: "qui : « le livre qui est dedans ». Derrière, il n'y a aucun sujet." },
  ],
  audio: REC('rec-b1-11-comptoir'),
  say: REFRAME,
  terms: ['relative', 'chaine'],
};

/** NAME. What the operation IS, before either pronoun is chosen. */
const A1_COLLER: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-coller',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-relative',
  title: 'La soudure en quatre cartes',
  frSub: 'Deux phrases, un nom partagé',
  hint: 'Quatre cartes. Regarde le nom qui revient.',
  audio: AUDIO,
  say: REFRAME,
  terms: ['relative'],
  cards: [
    { head: 'Le nom revient', label: 'deux phrases',
      fr: "J'ai perdu un sac. Le sac est bleu.",
      sub: '[zhay pehr-DÜ uhⁿ SAK] · [luh SAK eh BLUH]',
      body: "Deux phrases, et le même sac dedans. Le nom est écrit deux fois. EN: two sentences and one bag, with the noun written twice." },
    { head: 'Le petit mot le reprend', label: 'une phrase',
      fr: "Le sac que j'ai perdu est bleu.",
      sub: '[luh sak kuh zhay pehr-DÜ eh BLUH]',
      body: "que remplace la deuxième apparition du nom. Rien n'est répété. EN: que stands in for the second appearance of the noun." },
    { head: 'La relative colle au nom', label: 'la place',
      fr: 'le sac que... · le livre qui...',
      sub: '[luh sak KUH] · [luh leevr KEE]',
      body: "Le petit mot se met juste après son nom, jamais ailleurs. EN: the little word sits straight after its noun, never anywhere else." },
    { head: 'Deux mots pour un seul travail', label: 'le choix',
      fr: 'qui · que',
      sub: '[KEE] · [KUH]',
      body: `${REFRAME} C'est le seul choix que cette leçon te demande. EN: ${REFRAME_EN}` },
  ],
};

/** BUILD, on the text just read: sort the six relatives by what sits behind
 *  the pronoun. The sorting criterion IS the reframe. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Regarde derrière le petit mot',
  groups: [
    grp('Rien derrière', [
      it(E(1004), 'derrière qui, le verbe a trouvé'),
      it(E(1009), 'derrière qui, étaient'),
      it(E(1012), 'derrière qui, part'),
      it(E(1015), 'derrière qui, a déposé'),
    ], chk("Dans ces quatre phrases, est-ce que quelqu'un de nouveau apparaît derrière le petit mot ?",
        ['Non, personne', 'Oui, un nouveau sujet'], 0,
        "Rien ne prend la place du sujet, donc qui. EN: nothing takes the subject slot, so qui.")),
    grp('Un sujet derrière', [
      it(E(1002), "derrière que, j'"),
      it(E(1007), 'derrière que, je'),
      it(E(1010), 'derrière que, tu'),
      it('fr.b1.cafe.089', "derrière que, j'"),
    ], chk('Et ici, qui fait le verbe qui suit le petit mot ?',
        ["le nom de devant", "quelqu'un d'autre"], 1,
        "j', je, tu : un nouveau sujet arrive, donc que. EN: a new subject arrives, so que.")),
    ctl('Le sac et le livre', "« Le sac que j'ai perdu contient un livre qui vient de la bibliothèque. » Pourquoi deux mots différents ?",
        ['parce que le sac est un objet', "parce que derrière l'un il y a j', derrière l'autre rien", 'parce que la phrase est longue'], 1,
        "Le nom de devant ne compte pas. Seul ce qui suit compte. EN: only what follows counts."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relative', 'repere'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où les phrases courtes coûtent cher',
  cases: [
    { situation: 'Tu décris un objet perdu à un guichet', fr: "Le sac que j'ai perdu contient un livre de la bibliothèque.", en: 'The bag I lost has a library book in it.' },
    { situation: 'Tu expliques qui doit payer une réparation', fr: "C'est le locataire qui doit payer les petites réparations.", en: 'It is the tenant who has to pay for the small repairs.' },
    { situation: "Tu recommandes un endroit à un collègue", fr: 'Le restaurant que nous avons visité proposait des plats régionaux.', en: 'The restaurant we visited offered regional dishes.' },
    { situation: 'Tu signales une panne au propriétaire', fr: 'Le propriétaire refuse de réparer la fuite qui abîme le mur.', en: 'The landlord refuses to fix the leak that is damaging the wall.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['relative', 'chaine'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Quatre sacs bleus', 'Pourquoi quatre phrases vraies ne suffisaient-elles pas au comptoir ?',
      ['elles étaient fausses', 'elles étaient trop longues', 'elles ne désignaient aucun sac en particulier'], 2,
      "Séparées, elles décrivent n'importe lequel des quatre. EN: apart, they describe any of the four."),
  ctl('Le travail du petit mot', 'Que remplace qui ou que dans la phrase soudée ?',
      ['la deuxième apparition du nom', 'le verbe', 'le sujet principal'], 0,
      "Le nom n'est écrit qu'une fois. EN: the noun is written only once."),
  ctl('Le repère', 'Pour choisir entre les deux, tu regardes...',
      ['le nom de devant', "ce qui vient juste derrière"], 1,
      `${REFRAME} EN: ${REFRAME_EN}`),
], ['relative', 'repere']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Deux phrases collées',
    opener: {
      line: "Quatre sacs bleus sur une étagère, et tes quatre phrases les désignent tous : ici tu apprends à n'en désigner qu'un. EN: Four blue bags on a shelf and your four sentences point at all of them: here you learn to point at one.",
      imageRef: 'lessons/qui-que/act01.jpg',
    },
    sections: [],
    milestone: "Tu reconnais une relative dans un texte ordinaire et tu sais quel nom elle reprend. EN: You can spot a relative clause in ordinary writing and name the noun it picks up.",
    estScreens: 26, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_COLLER, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — QUI, LE SUJET
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Le voisin du dessus',
  frSub: 'Celui qui fait quelque chose',
  setting: "Awa raconte à Théo pourquoi elle a mal dormi. Théo veut savoir de quel voisin elle parle.",
  bubbles: [
    { from: 'narrator', fr: "Awa habite dans un immeuble de six appartements.", en: 'Awa lives in a block of six flats.' },
    { from: 'user', fr: "Mon voisin joue de la guitare jusqu'à deux heures du matin.", en: 'My neighbour plays the guitar until two in the morning.' },
    { from: 'coach', fr: 'Tu as cinq voisins. Lequel joue de la guitare.', en: 'You have five neighbours. Which one plays the guitar.' },
    { from: 'user', fr: 'Le voisin qui habite au-dessus joue de la guitare.', en: 'The neighbour who lives upstairs plays the guitar.', warn: "derrière qui : habite, et personne d'autre" },
    { from: 'coach', fr: "Voilà. Maintenant je sais lequel. Et c'est lui qui joue, pas toi.", en: 'There. Now I know which one. And he is the one playing, not you.' },
    { from: 'user', fr: 'Le mot qui dit que le voisin agit lui-même.', en: 'The word says the neighbour is the one doing it.' },
    { from: 'coach', fr: 'Exactement. Derrière ce mot, personne ne vient prendre sa place.', en: 'Exactly. Behind that word, nobody comes and takes his place.' },
  ],
  closing: { fr: 'Le nom de devant fait le verbe, et qui le dit.', en: 'The noun in front does the verb, and qui says so.' },
  audio: REC('rec-b1-11-voisin'),
  say: REFRAME,
  terms: ['sujet', 'relative'],
};

const A2_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-test',
  title: 'qui en quatre cartes',
  frSub: 'Le nom de devant fait le verbe',
  hint: 'Quatre cartes. Regarde qui agit.',
  audio: REC('rec-b1-11-qui'),
  say: REFRAME,
  terms: ['sujet'],
  cards: [
    { head: 'Le nom agit', label: 'qui',
      fr: 'Le voisin qui habite au-dessus...',
      sub: '[luh vwah-ZEHⁿ kee ah-beet oh-duh-SÜ]',
      body: "C'est le voisin qui habite. Le nom de devant est le sujet du verbe. EN: the noun in front is the subject of the verb." },
    { head: 'Rien ne prend sa place', label: 'le repère',
      fr: 'qui + verbe',
      sub: '[KEE plüss VEHRB]',
      body: `${REFRAME} Aucun nouveau sujet n'apparaît. EN: ${REFRAME_EN}` },
    { head: 'Un petit pronom peut se glisser', label: "l'exception",
      fr: "le serveur qui nous apporte l'addition",
      sub: '[luh sehr-VUHR kee noo-zah-port lah-dee-SYOHⁿ]',
      body: "nous se glisse entre les deux. Ce n'est pas un sujet : c'est à nous qu'il apporte. EN: nous slips in, but it is not a subject." },
    { head: 'Le verbe suit le nom', label: "l'accord",
      fr: 'le voisin qui habite · les voisins qui habitent',
      sub: '[kee ah-BEET] · [kee ah-BEET]',
      body: "Le verbe s'accorde avec le nom de devant, pas avec qui. EN: the verb agrees with the noun in front, not with qui." },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois choses qui agissent',
  groups: [
    grp('Des gens qui font quelque chose', [
      it(E(1027), 'les gens attendent eux-mêmes'),
      it(E(1028), 'une amie travaille à Bruxelles'),
      it(E(1030), "quelqu'un répare les vélos"),
      it('fr.b1.cuisine.071', 'le chef a préparé le plat'),
    ], chk('Dans ces quatre phrases, qui fait le verbe qui suit qui ?',
        ['le nom de devant', 'un nouveau sujet'], 0,
        "Les gens attendent, le chef a préparé : c'est le nom de devant. EN: the noun in front is doing it.")),
    grp('Des choses qui font quelque chose', [
      it(E(1020), 'la rue mène à la gare'),
      it(E(1029), 'le paquet est arrivé'),
      it(E(1031), 'les documents manquent'),
      it(E(1033), 'le train part à sept heures'),
    ], chk('Une chose peut-elle être le sujet de qui ?',
        ['Non, qui est réservé aux personnes', 'Oui, exactement comme une personne'], 1,
        "La rue mène, le train part : qui ne demande pas un être humain. EN: qui does not require a person.")),
    grp('Un pronom entre les deux', [
      it(E(1024), "me se glisse, mais ce n'est pas un sujet"),
      it(E(1035), 'nous se glisse aussi'),
      it(E(1036), "m' se glisse devant attend"),
      it(E(1032), 'rien ne se glisse ici'),
    ], chk('« Le collègue qui me remplace » : est-ce moi qui remplace ?',
        ['Oui', "Non, c'est le collègue"], 1,
        "me dit qui est remplacé, pas qui remplace. EN: me says who is replaced, not who replaces.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet', 'repere'],
};

const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'Cinq phrases où le nom agit',
  frSub: 'qui, du singulier au pluriel',
  examples: [
    ex(E(1018), 'un seul voisin, un verbe au singulier'),
    ex(E(1019), 'plusieurs voisins, le même verbe au pluriel'),
    ex(E(1022), "c'est moi qui, et le verbe suit moi"),
    ex('fr.b1.maison.070', 'les voisins font le bruit eux-mêmes'),
    ex('fr.b1.sports-et-loisirs.078', 'le joueur a marqué, puis il est devenu héros'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui fait quoi',
  frSub: 'Huit phrases, une seule écoute',
  lines: [
    ln(E(1018)), ln(E(1019)), ln(E(1020)), ln(E(1021)),
    ln(E(1027)), ln(E(1029)), ln(E(1031)), ln(E(1033)),
  ],
  questions: [
    { q: 'Première phrase : combien de voisins jouent de la guitare ?', opts: ['un seul', 'plusieurs'], correct: 0,
      why: "« Le voisin qui habite » : singulier, et le verbe suit. EN: singular, and the verb follows." },
    { q: 'Deuxième phrase : le verbe a-t-il changé de forme ?', opts: ['Non', 'Oui, au pluriel'], correct: 1,
      why: "« Les voisins qui habitent » : le verbe s'accorde avec le nom de devant. EN: the verb agrees with the noun in front." },
    { q: "Troisième phrase : qu'est-ce qui mène à la gare ?", opts: ['une personne', 'une rue'], correct: 1,
      why: "qui sert aussi aux choses. EN: qui works for things too." },
    { q: 'Cinquième phrase : depuis combien de temps les gens attendent-ils ?', opts: ['dix minutes', 'une heure'], correct: 1,
      why: "« qui attendent depuis une heure ». EN: an hour." },
    { q: 'Sixième phrase : le paquet est-il pour toi ?', opts: ['Oui', 'Non'], correct: 1,
      why: "« n'est pas pour toi ». EN: it is not for you." },
    { q: 'Huitième phrase : à quelle heure part ce train ?', opts: ['à sept heures', 'à midi', 'à huit heures'], correct: 0,
      why: "« le train qui part à sept heures ». EN: at seven." },
  ],
  audio: REC('rec-b1-11-qui-ecoute'),
  say: REFRAME,
  terms: ['sujet'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs autour de qui',
  errors: [
    { wrong: 'Le voisin que habite au-dessus joue de la guitare.',
      right: 'Le voisin qui habite au-dessus joue de la guitare.',
      why: "Normal : en anglais, that sert aux deux. Ici, personne ne vient derrière, donc qui. EN: English uses that for both; here nothing follows, so qui." },
    { wrong: 'La rue que mène à la gare est fermée.',
      right: 'La rue qui mène à la gare est fermée.',
      why: "Une rue n'est pas une personne, alors la main écrit que. Le nom de devant ne décide rien. EN: the noun in front decides nothing." },
    { wrong: 'Les voisins qui habite au-dessus font du bruit.',
      right: 'Les voisins qui habitent au-dessus font du bruit.',
      why: "qui n'a pas de forme à lui, alors le verbe semble libre. Il suit le nom de devant. EN: qui has no form of its own; the verb follows the noun." },
    { wrong: 'Le collègue qui il me remplace arrive demain.',
      right: 'Le collègue qui me remplace arrive demain.',
      why: "On ajoute il par sécurité, comme en arabe ou en persan. qui EST déjà le sujet. EN: qui is already the subject; a second one is one too many." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['sujet', 'repere'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le sujet', 'Dans « le train qui part à midi », qui part ?',
      ['le train', 'celui qui parle', 'personne'], 0,
      "Le nom de devant fait le verbe. EN: the noun in front does the verb."),
  ctl('Le verbe', "Le verbe qui suit qui s'accorde avec...",
      ['qui', 'le nom de devant'], 1,
      "Les voisins qui habitent, le voisin qui habite. EN: it agrees with the noun in front."),
  ctl('Le pronom', "« le serveur qui nous apporte l'addition » : nous est-il un sujet ?",
      ['Oui', "Non, c'est à nous qu'il apporte"], 1,
      "Un petit pronom peut se glisser sans prendre la place du sujet. EN: an object pronoun may slip in without taking the subject slot."),
], ['sujet', 'repere']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'qui, le sujet',
    opener: {
      line: "Tu as cinq voisins et un seul joue de la guitare : ici tu apprends à dire lequel agit. EN: You have five neighbours and only one plays the guitar: here you learn to say which one is doing it.",
      imageRef: 'lessons/qui-que/act02.jpg',
    },
    sections: [],
    milestone: "Tu écris une relative avec qui et le verbe s'accorde avec le bon nom. EN: You can write a relative clause with qui and make the verb agree with the right noun.",
    estScreens: 21, restPoints: ['a2-construire'],
  },
  sections: [A2_HISTOIRE, A2_CARTES, A2_CONSTRUIRE, A2_EXEMPLES, A2_ECOUTE, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — QUE, LE COMPLÉMENT
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a3-histoire',
  layer: 'core',
  title: 'La liste du samedi',
  frSub: "Cette fois, c'est quelqu'un d'autre qui agit",
  setting: "Théo relit la liste de films qu'il a notée pour le week-end. Awa lui demande lequel ils regardent ce soir.",
  bubbles: [
    { from: 'narrator', fr: "Il y a six titres sur la liste de Théo.", en: 'There are six titles on Théo list.' },
    { from: 'coach', fr: 'Lequel on regarde ce soir.', en: 'Which one are we watching tonight.' },
    { from: 'user', fr: 'Le film dure trois heures.', en: 'The film lasts three hours.', warn: "six films, et cinq d'entre eux durent moins" },
    { from: 'coach', fr: 'Six films. Dis-moi lequel.', en: 'Six films. Tell me which one.' },
    { from: 'user', fr: 'Le film que nous regardons ce soir dure trois heures.', en: 'The film we are watching tonight lasts three hours.', warn: 'derrière que : nous, un nouveau sujet' },
    { from: 'coach', fr: "Voilà. Et cette fois, ce n'est pas le film qui regarde.", en: 'There. And this time, the film is not the one doing the watching.' },
    { from: 'user', fr: "C'est nous qui regardons, et le film est regardé.", en: 'We are the ones watching, and the film is what gets watched.' },
  ],
  closing: { fr: "Derrière que, quelqu'un d'autre arrive et fait le verbe.", en: 'Behind que, somebody else arrives and does the verb.' },
  audio: REC('rec-b1-11-liste'),
  say: REFRAME,
  terms: ['complement', 'relative'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-test',
  title: 'que en quatre cartes',
  frSub: 'Le nom de devant subit le verbe',
  hint: 'Quatre cartes. Regarde qui arrive derrière.',
  audio: REC('rec-b1-11-que'),
  say: REFRAME,
  terms: ['complement'],
  cards: [
    { head: 'Un sujet arrive', label: 'que',
      fr: 'Le film que nous regardons...',
      sub: '[luh FEELM kuh noo ruh-gar-DOHⁿ]',
      body: "nous arrive juste derrière et fait le verbe. Le film, lui, est regardé. EN: nous arrives and does the verb; the film gets watched." },
    { head: 'Le nom de devant subit', label: 'le rôle',
      fr: 'le pain que la boulangère met de côté',
      sub: '[luh PEHⁿ kuh lah boo-lahⁿ-zhehr meh duh koh-TAY]',
      body: "La boulangère met, le pain est mis. Le nom de devant reçoit l'action. EN: the noun in front receives the action." },
    { head: 'Le sujet peut être un nom', label: 'la variante',
      fr: 'le dossier que le bureau garde',
      sub: '[luh doh-SYAY kuh luh bü-roh GARD]',
      body: "Ce n'est pas toujours je, tu, nous. Un nom entier peut arriver derrière que. EN: a whole noun phrase can follow que." },
    { head: 'Le repère ne change pas', label: 'la règle',
      fr: 'que + sujet',
      sub: '[KUH plüss sü-ZHEH]',
      body: `${REFRAME} Tu n'as rien d'autre à vérifier. EN: ${REFRAME_EN}` },
  ],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois sortes de sujets derrière que',
  groups: [
    grp('Un pronom derrière', [
      it(E(1037), 'nous regardons'),
      it(E(1038), 'tu envoies'),
      it(E(1039), 'je bois'),
      it(E(1047), 'nous prenons'),
    ], chk('Dans ces quatre phrases, qui fait le verbe qui suit que ?',
        ['le nom de devant', 'le pronom qui arrive derrière'], 1,
        "nous, tu, je : un nouveau sujet, donc que. EN: a new subject, so que.")),
    grp('Un nom entier derrière', [
      it(E(1048), 'mes parents louent'),
      it(E(1052), 'la boulangère met de côté'),
      it(E(1055), 'le bureau garde'),
      it(E(1041), 'la dame a rapporté'),
    ], chk('Le sujet derrière que est-il toujours un petit pronom ?',
        ['Oui', 'Non, ce peut être un nom entier'], 1,
        "« que la boulangère met de côté » : un nom, et le test tient toujours. EN: a full noun works the same way.")),
    grp('Un sujet négatif ou indéfini', [
      it(E(1051), 'personne ne comprend'),
      it(E(1040), 'tout le monde connaît'),
      it(E(1044), 'je croise'),
      it('fr.b1.sports-et-loisirs.087', 'je préfère'),
    ], chk('« Les mots que personne ne comprend » : personne est-il un sujet ?',
        ['Oui, le sujet du verbe comprend', "Non, personne n'est jamais un sujet"], 0,
        "Un sujet négatif reste un sujet, donc que. EN: a negative subject is still a subject.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['complement', 'repere'],
};

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq phrases où le nom subit',
  frSub: 'que, du concret au général',
  examples: [
    ex(E(1043), 'tu signes, le formulaire est signé'),
    ex(E(1045), 'tu cherches, le numéro est cherché'),
    ex(E(1053), 'tu attends, le message est attendu'),
    ex('fr.b1.cuisine.075', 'nous avons visité, le restaurant a été visité'),
    ex('fr.b1.cafe.093', 'nous avons laissé, le pourboire a été laissé'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['complement'],
};

/** CHOOSE. Both sentences exist and both are grammatical French; only one
 *  says what the situation needs. */
const A3_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Les deux existent, une seule dit ce que tu veux',
  groups: [
    ctl('Au vidéoclub', "Tu veux dire que TU as choisi le film. Tu écris...",
        ['le film qui a choisi', "le film que j'ai choisi"], 1,
        "C'est toi qui choisis, donc un sujet arrive derrière : que. EN: you do the choosing, so a subject follows."),
    ctl('À la boulangerie', 'Tu veux dire que le pain est encore chaud. Tu écris...',
        ['le pain que sort du four', 'le pain qui sort du four'], 1,
        "Le pain sort tout seul : personne derrière, donc qui. EN: the bread comes out by itself, so qui."),
    ctl('Au bureau', 'Tu veux dire que le bureau garde le dossier. Tu écris...',
        ['le dossier qui garde le bureau', 'le dossier que garde le bureau', 'le dossier que le bureau garde'], 2,
        "Le bureau est le sujet, et il se met derrière que. EN: the office is the subject, and it goes behind que."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['complement', 'repere'],
};

/** TRAP. The failing instinct: English `that` covers both roles, so the hand
 *  reaches for qui even when a subject is already sitting there.
 *  `promptSound` holds the WRONG version and is never spoken. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Deux sujets ne tiennent pas dans une proposition',
  rule: {
    title: 'La place du sujet est déjà prise',
    body: "Un sujet est déjà derrière le trou. Le nom de devant ne peut plus faire le verbe : il devient complément, et ce rôle s'écrit que. EN: the subject slot is taken, so the noun in front becomes the object.",
  },
  cards: [
    { promptLabel: 'regarder', promptSound: 'Le film qui nous regardons dure trois heures.', fr: 'Le film que nous regardons ce soir dure trois heures.', ipa: '/lə film kə nu ʁə.ɡaʁ.dɔ̃ sə swaʁ dyʁ tʁwa.zœʁ/', tip: "nous est déjà le sujet, donc que. EN: nous is already the subject." },
    { promptLabel: 'boire', promptSound: "Le café qui je bois le matin vient d'Éthiopie.", fr: "Le café que je bois le matin vient d'Éthiopie.", ipa: '/lə ka.fe kə ʒə bwa lə ma.tɛ̃ vjɛ̃ de.tjɔ.pi/', tip: "je fait le verbe, le café est bu. EN: je does the verb; the coffee is drunk." },
    { promptLabel: 'signer', promptSound: 'Voici le formulaire qui tu dois signer.', fr: 'Voici le formulaire que tu dois signer.', ipa: '/vwa.si lə fɔʁ.my.lɛʁ kə ty dwa si.ɲe/', tip: "tu est là, donc la place du sujet est prise. EN: tu is there, so the slot is taken." },
    { promptLabel: 'louer', promptSound: "L'appartement qui mes parents louent donne sur la cour.", fr: "L'appartement que mes parents louent donne sur la cour.", ipa: '/la.paʁ.tə.mɑ̃ kə me pa.ʁɑ̃ lu dɔn syʁ la kuʁ/', tip: "Un nom entier peut prendre la place du sujet. EN: a full noun can take the subject slot." },
    { promptLabel: 'comprendre', promptSound: 'Les mots qui personne ne comprend restent au tableau.', fr: 'Les mots que personne ne comprend restent au tableau.', ipa: '/le mo kə pɛʁ.sɔn nə kɔ̃.pʁɑ̃ ʁɛst o ta.blo/', tip: "personne est un sujet, même négatif. EN: personne is still a subject." },
    { promptLabel: 'garder', promptSound: 'Le dossier qui le bureau garde reste ouvert.', fr: 'Le dossier que le bureau garde reste ouvert trente jours.', ipa: '/lə dɔ.sje kə lə by.ʁo ɡaʁd ʁɛst u.vɛʁ tʁɑ̃t ʒuʁ/', tip: "Le bureau garde, le dossier est gardé. EN: the office keeps, the file is kept." },
  ],
  drill: [
    { promptSay: 'Le film ... nous regardons dure trois heures.', opts: ['que', 'qui'], correct: 0 },
    { promptSay: 'La rue ... mène à la gare est fermée.', opts: ['que', 'qui'], correct: 1 },
    { promptSay: "Le café ... je bois le matin vient d'Éthiopie.", opts: ['qui', 'que'], correct: 1 },
    { promptSay: "Le paquet ... est arrivé ce matin n'est pas pour toi.", opts: ['qui', 'que'], correct: 0 },
    { promptSay: 'Le pain ... la boulangère met de côté est pour nous.', opts: ['que', 'qui'], correct: 0 },
    { promptSay: 'Les documents ... manquent sont chez le notaire.', opts: ['que', 'qui'], correct: 1 },
    { promptSay: 'Le numéro ... tu cherches est au dos de la carte.', opts: ['qui', 'que'], correct: 1 },
    { promptSay: 'Le train ... part à sept heures passe par Laval.', opts: ['qui', 'que'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'La place du sujet' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que deux sujets produisent' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-11-piege-que'),
  say: REFRAME,
  terms: ['complement', 'repere'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le complément', 'Dans « le film que nous regardons », qui regarde ?',
      ['le film', 'nous'], 1,
      "Le film est regardé, et nous regardons. EN: the film is watched, we do the watching."),
  ctl('Le sujet derrière', 'Le mot qui suit que peut-il être un nom entier ?',
      ['Oui', 'Non, seulement un pronom'], 0,
      "« que la boulangère met de côté ». EN: a full noun works too."),
  ctl('Personne', '« Les mots que personne ne comprend » : pourquoi que ?',
      ['parce que la phrase est négative', 'parce que les mots sont des choses', 'parce que personne est le sujet du verbe'], 2,
      "Un sujet négatif reste un sujet. EN: a negative subject is still a subject."),
], ['complement', 'repere']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'que, le complément',
    opener: {
      line: "Cette fois, ce n'est pas la chose qui agit : quelqu'un arrive derrière et lui fait quelque chose. EN: This time the thing is not the one acting: somebody arrives behind it and does something to it.",
      imageRef: 'lessons/qui-que/act03.jpg',
    },
    sections: [],
    milestone: "Tu écris une relative avec que et tu sais nommer le sujet qui la suit. EN: You can write a relative clause with que and name the subject that follows it.",
    estScreens: 23, restPoints: ['a3-construire'],
  },
  sections: [A3_HISTOIRE, A3_CARTES, A3_CONSTRUIRE, A3_EXEMPLES, A3_CHOISIR, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LE REPÈRE
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'Deux phrases, une seule lettre de différence',
  frSub: 'La cheffe au téléphone',
  setting: "Awa montre à Théo deux phrases écrites côte à côte sur son écran. Elles se ressemblent, et elles ne disent pas la même chose.",
  bubbles: [
    { from: 'user', fr: 'La femme qui parle au téléphone est ma cheffe.', en: 'The woman who is on the phone is my boss.' },
    { from: 'user', fr: 'La femme que tu vois au téléphone est ma cheffe.', en: 'The woman you can see on the phone is my boss.' },
    { from: 'coach', fr: 'Les deux sont justes. Elles ne montrent pas la même femme.', en: 'Both are right. They do not point at the same woman.' },
    { from: 'user', fr: 'Dans la première, elle parle. Dans la seconde, tu la vois.', en: 'In the first she is talking. In the second you can see her.' },
    { from: 'coach', fr: 'Et tu as vu la différence sans regarder le mot femme.', en: 'And you saw the difference without looking at the word femme.' },
    { from: 'user', fr: "J'ai regardé ce qui vient juste après.", en: 'I looked at what comes right after.' },
    { from: 'coach', fr: 'Parle dans la première, tu dans la seconde. Ça suffit toujours.', en: 'Parle in the first, tu in the second. That is always enough.' },
  ],
  closing: { fr: 'Le nom de devant est le même. Seul ce qui suit change.', en: 'The noun in front is the same. Only what follows changes.' },
  audio: REC('rec-b1-11-cheffe'),
  say: REFRAME,
  terms: ['repere'],
};

const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-test',
  title: 'Quatre paires, un seul geste',
  frSub: 'Le même nom, les deux mots',
  hint: 'Quatre cartes. Le nom ne bouge jamais.',
  audio: REC('rec-b1-11-paires'),
  say: REFRAME,
  terms: ['repere'],
  cards: [
    { head: 'La femme', label: 'la paire',
      fr: 'qui parle · que tu vois',
      sub: '[kee PARL] · [kuh tü VWAH]',
      body: "Même nom, deux mots différents. Ce qui suit a changé, rien d'autre. EN: same noun, two different words, because what follows changed." },
    { head: 'Le colis', label: 'la paire',
      fr: "qui arrive demain · que j'attends",
      sub: '[kee ah-reev duh-MEHⁿ] · [kuh zhah-TAHⁿ]',
      body: "Le colis arrive tout seul, ou bien c'est moi qui attends. EN: the parcel arrives by itself, or I am the one waiting." },
    { head: 'Le chemin', label: 'la paire',
      fr: 'qui monte au parc · que nous prenons',
      sub: '[kee mohⁿt oh PARK] · [kuh noo pruh-NOHⁿ]',
      body: "Un chemin peut monter tout seul, et il peut aussi être pris. EN: a path can climb by itself, and it can also be taken." },
    { head: 'Le geste', label: 'le repère',
      fr: 'regarde derrière, pas devant',
      sub: '[ruh-gard deh-RYEHR] · [pah duh-VAHⁿ]',
      body: `${REFRAME} Une seconde suffit. EN: ${REFRAME_EN}` },
  ],
};

const A4_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a4-table',
  layer: 'core',
  sheetId: 'sheet-test',
  title: 'Six choses qui peuvent suivre',
  frSub: 'Touche une ligne pour la phrase entière',
  cols: ['Ce qui suit', 'Le mot', 'Pourquoi'],
  rows: [
    { cells: ['un verbe', 'qui', 'la place du sujet est vide'], say: 'La rue qui mène à la gare est fermée.',
      detail: { title: 'un verbe seul', body: "Rien entre le trou et le verbe : le nom de devant fait l'action. EN: nothing between the gap and the verb, so the noun in front acts.", say: 'Le train qui part à midi passe par Laval.' } },
    { cells: ['me, te, nous, vous', 'qui', 'ce sont des compléments'], say: "Le serveur qui nous apporte l'addition est très rapide.",
      detail: { title: 'un petit pronom', body: "nous dit à qui, pas par qui. La place du sujet reste vide. EN: nous says to whom, not by whom.", say: "La lettre qui m'attend à la maison vient de l'assurance." } },
    { cells: ['je, tu, il, on', 'que', 'le sujet est déjà là'], say: "Le café que je bois le matin vient d'Éthiopie.",
      detail: { title: 'un pronom sujet', body: "je, tu, il, on, nous, vous, ils : la place est prise. EN: the subject slot is taken.", say: 'Le formulaire que tu remplis reste au bureau.' } },
    { cells: ['un nom sujet', 'que', 'le sujet est déjà là'], say: 'Le pain que la boulangère met de côté est pour nous.',
      detail: { title: 'un nom entier', body: "Le sujet n'est pas toujours court : un groupe entier peut suivre que. EN: a whole noun phrase can follow que.", say: 'Le dossier que le bureau garde reste ouvert trente jours.' } },
    { cells: ['personne, rien, tout le monde', 'que', 'ce sont des sujets'], say: 'Les mots que personne ne comprend restent au tableau.',
      detail: { title: 'un sujet indéfini', body: "personne et tout le monde sont des sujets, même s'ils ne nomment personne. EN: indefinite words are still subjects.", say: 'La chanson que tout le monde connaît vient des années quatre-vingt.' } },
    { cells: ['rien du tout', 'impossible', 'le mot ne se saute pas'], say: 'Le livre que je lis est passionnant.',
      detail: { title: 'la case vide', body: "Il n'y a pas de troisième possibilité. En français, le mot est toujours écrit. EN: there is no third option; the word is always written.", say: "Les gens que tu connais habitent près d'ici." } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere', 'motfixe'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois paires à trancher',
  groups: [
    grp('La femme et le colis', [
      it(E(1056), 'derrière : parle'),
      it(E(1057), 'derrière : tu'),
      it(E(1058), 'derrière : arrive'),
      it(E(1059), "derrière : j'"),
    ], chk('Entre ces quatre phrases, le nom de devant a-t-il changé ?',
        ['Oui, deux fois', 'Non, jamais dans la même paire'], 1,
        "La femme reste la femme. Seul ce qui suit change. EN: the noun stays; only what follows changes.")),
    grp('Le chemin et le repas', [
      it(E(1060), 'derrière : monte'),
      it(E(1061), 'derrière : nous'),
      it(E(1067), 'derrière : nous, mais complément'),
      it(E(1068), 'derrière : ma mère'),
    ], chk('« Le repas qui nous attend » : nous attend-il, ou attendons-nous ?',
        ['le repas attend', 'nous attendons'], 0,
        "nous est le complément : le repas attend, et il nous attend. EN: the meal is doing the waiting.")),
    ctl('Le test', 'Tu hésites sur une phrase. Que regardes-tu en premier ?',
        ['le nom devant le trou', "ce qui suit le trou", "la traduction anglaise"], 1,
        `${REFRAME} EN: ${REFRAME_EN}`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere'],
};

const A4_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a4-flash',
  layer: 'core',
  title: 'Huit débuts, de mémoire',
  frSub: 'Anglais devant, français derrière',
  cards: [
    { front: 'the woman who is talking', back: 'la femme qui parle', say: 'La femme qui parle au téléphone est ma cheffe.' },
    { front: 'the woman you can see', back: 'la femme que tu vois', say: 'La femme que tu vois au téléphone est ma cheffe.' },
    { front: 'the street that leads', back: 'la rue qui mène', say: 'La rue qui mène à la gare est fermée.' },
    { front: 'the path we take', back: 'le chemin que nous prenons', say: 'Le chemin que nous prenons monte au parc.' },
    { front: 'the parcel that arrives', back: 'le colis qui arrive', say: 'Le colis qui arrive demain vient de Lyon.' },
    { front: 'the parcel I await', back: "le colis que j'attends", say: "Le colis que j'attends vient de Lyon." },
    { front: 'the people who are waiting', back: 'les gens qui attendent', say: 'Les gens qui attendent depuis une heure commencent à râler.' },
    { front: 'the words nobody understands', back: 'les mots que personne ne comprend', say: 'Les mots que personne ne comprend restent au tableau.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere'],
};

/** TRAP. The failing instinct: translating. English `that` and `which` cover
 *  both roles, so the learner picks by the English word or by the noun rather
 *  than by what follows. `promptSound` is the WRONG version, never spoken. */
const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Traduire ne tranche jamais',
  rule: {
    title: 'That ne te dit rien',
    body: "En anglais, that couvre les deux rôles, alors la traduction ne t'aide pas. Ce qui tranche est de ce côté-ci : regarde derrière le trou, pas le mot anglais. EN: English that covers both roles, so the translation cannot decide; what follows the gap can.",
  },
  cards: [
    { promptLabel: 'the woman that you see', promptSound: 'La femme qui tu vois au téléphone est ma cheffe.', fr: 'La femme que tu vois au téléphone est ma cheffe.', ipa: '/la fam kə ty vwa o te.le.fɔn ɛ ma ʃɛf/', tip: "tu est derrière, donc que. EN: tu is behind it, so que." },
    { promptLabel: 'the parcel that arrives', promptSound: 'Le colis que arrive demain vient de Lyon.', fr: 'Le colis qui arrive demain vient de Lyon.', ipa: '/lə kɔ.li ki a.ʁiv də.mɛ̃ vjɛ̃ də ljɔ̃/', tip: "Rien derrière, donc qui. EN: nothing behind it, so qui." },
    { promptLabel: 'the path that we take', promptSound: 'Le chemin qui nous prenons monte au parc.', fr: 'Le chemin que nous prenons monte au parc.', ipa: '/lə ʃə.mɛ̃ kə nu pʁə.nɔ̃ mɔ̃t o paʁk/', tip: "nous fait le verbe prenons. EN: nous does the verb." },
    { promptLabel: 'the student that asks', promptSound: "L'étudiante que pose des questions apprend plus vite.", fr: "L'étudiante qui pose des questions apprend plus vite.", ipa: '/le.ty.djɑ̃t ki poz de kɛs.tjɔ̃ a.pʁɑ̃ ply vit/', tip: "Elle pose elle-même les questions. EN: she asks them herself." },
    { promptLabel: 'the bus that we missed', promptSound: 'Le bus qui nous avons manqué allait au centre-ville.', fr: 'Le bus que nous avons manqué allait au centre-ville.', ipa: '/lə bys kə nu.za.vɔ̃ mɑ̃.ke a.lɛ o sɑ̃tʁ.vil/', tip: "nous avons manqué : le sujet est là. EN: the subject is right there." },
    { promptLabel: 'the meal that awaits us', promptSound: 'Le repas que nous attend à la maison sent très bon.', fr: 'Le repas qui nous attend à la maison sent très bon.', ipa: '/lə ʁə.pa ki nu.za.tɑ̃ a la mɛ.zɔ̃ sɑ̃ tʁɛ bɔ̃/', tip: "nous est complément ici : c'est le repas qui attend. EN: here nous is the object." },
  ],
  drill: [
    { promptSay: 'La femme ... tu vois au téléphone est ma cheffe.', opts: ['que', 'qui'], correct: 0 },
    { promptSay: 'Le colis ... arrive demain vient de Lyon.', opts: ['que', 'qui'], correct: 1 },
    { promptSay: "L'étudiante ... le prof interroge apprend plus vite.", opts: ['qui', 'que'], correct: 1 },
    { promptSay: 'Le chemin ... monte au parc est plus court.', opts: ['qui', 'que'], correct: 0 },
    { promptSay: 'Le repas ... ma mère prépare sent très bon.', opts: ['que', 'qui'], correct: 0 },
    { promptSay: 'Le repas ... nous attend à la maison sent très bon.', opts: ['que', 'qui'], correct: 1 },
    { promptSay: 'Le voisin ... je dérange travaille de nuit.', opts: ['qui', 'que'], correct: 1 },
    { promptSay: 'Le bus ... vient de passer allait au centre-ville.', opts: ['qui', 'que'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'That ne tranche pas' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la traduction produit' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-11-piege-repere'),
  say: REFRAME,
  terms: ['repere', 'antecedent'],
};

const A4_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a4-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    { hack: 'Cache le nom de devant avec ton doigt et relis la suite.',
      why: "Le nom ne décide rien, et le cacher supprime la moitié des hésitations. EN: the noun decides nothing, so hiding it removes half the doubt." },
    { hack: 'Demande-toi qui fait le verbe. Si ce est le nom de devant, écris qui.',
      why: "C'est le même test dit autrement, et il marche aussi à l'oral. EN: the same test in other words, and it works out loud too." },
    { hack: "Remplace le trou par il ou elle. Si la phrase tient, c'était que.",
      why: "« le film il nous regardons » ne tient pas ; « le film nous regardons » tient presque. EN: the substitution shows where the subject already is." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le geste', 'Pour choisir, tu regardes...',
      ['le nom de devant', 'la traduction anglaise', 'ce qui suit le trou'], 2,
      `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('That', 'Le mot anglais that aide-t-il à choisir ?',
      ['Oui', 'Non, il couvre les deux rôles'], 1,
      "That sert au sujet et au complément, donc il ne tranche rien. EN: that serves both roles."),
  ctl('Le pronom', '« le repas qui nous attend » : pourquoi qui malgré nous ?',
      ['parce que nous est complément', 'parce que repas est une chose', 'parce que la phrase est longue'], 0,
      "nous reçoit l'attente, il ne la fait pas. EN: nous receives the waiting, it does not do it."),
], ['repere', 'antecedent']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Le repère',
    opener: {
      line: "Deux phrases, le même nom, un mot différent : ici tu apprends le geste qui tranche en une seconde. EN: Two sentences, the same noun, a different word: here you learn the one-second move that settles it.",
      imageRef: 'lessons/qui-que/act04.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre qui et que sans traduire et sans regarder le nom de devant. EN: You can choose between qui and que without translating and without looking at the noun in front.",
    estScreens: 34, restPoints: ['a4-table', 'a4-piege'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_TABLE, A4_CONSTRUIRE, A4_FLASH, A4_PIEGE, A4_HACKS, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — QUI NE TOMBE JAMAIS
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: "Une apostrophe de trop",
  frSub: "qu'est n'existe pas",
  setting: "Awa relit le message que Théo vient d'écrire au gardien de l'immeuble. Une ligne sur deux porte une apostrophe.",
  bubbles: [
    { from: 'user', fr: "La voiture qu'est devant la porte bloque le passage.", en: 'The car that is in front of the door is blocking the way.', warn: "qu'est : cette forme n'existe pas" },
    { from: 'coach', fr: 'Lis-le à voix haute. Tu entends une syllabe manquer.', en: 'Read it out loud. You can hear a syllable missing.' },
    { from: 'user', fr: 'La voiture qui est devant la porte bloque le passage.', en: 'The car that is in front of the door is blocking the way.' },
    { from: 'coach', fr: 'Voilà. qui garde toujours ses trois lettres.', en: 'There. qui always keeps its three letters.' },
    { from: 'user', fr: "Et la voiture qu'on répare, alors.", en: 'And la voiture qu on répare, then.' },
    { from: 'coach', fr: "Celle-là est juste. que perd son e, et lui seul.", en: 'That one is right. que loses its e, and only que does.' },
    { from: 'user', fr: "Donc l'apostrophe me dit toujours que c'est que.", en: 'So the apostrophe always tells me it is que.' },
  ],
  closing: { fr: "Une apostrophe sur ce mot, c'est forcément que.", en: 'An apostrophe on that word can only be que.' },
  audio: REC('rec-b1-11-apostrophe'),
  say: REFRAME,
  terms: ['elision'],
};

const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-test',
  title: "L'apostrophe en quatre cartes",
  frSub: "que se réduit, qui jamais",
  hint: 'Quatre cartes. Regarde la lettre qui suit.',
  audio: REC('rec-b1-11-elision'),
  say: REFRAME,
  terms: ['elision'],
  cards: [
    { head: 'que perd son e', label: "l'élision",
      fr: "que elle · qu'elle",
      sub: '[kuh EL] · [KEL]',
      body: "Devant une voyelle, le e de que disparaît et une apostrophe le remplace. EN: before a vowel the e of que disappears and an apostrophe stands in." },
    { head: 'qui garde tout', label: "l'interdit",
      fr: 'qui est · qui arrive',
      sub: '[kee EH] · [kee ah-REEV]',
      body: "qui ne se réduit jamais, même devant une voyelle. La forme qu'est n'existe pas. EN: qui never shortens, so the form qu est does not exist." },
    { head: "L'apostrophe te renseigne", label: 'le raccourci',
      fr: "qu'il · qu'elle · qu'on · qu'Awa",
      sub: '[KEEL] · [KEL] · [KOHⁿ] · [kah-WAH]',
      body: "Si tu vois une apostrophe sur ce mot, c'était que. Aucun autre choix. EN: an apostrophe on this word means it was que, with no other option." },
    { head: 'Le test ne change pas', label: 'le repère',
      fr: "le train qu'ils prennent",
      sub: '[luh TREHⁿ keel PREN]',
      body: `${REFRAME} L'apostrophe cache le e, pas la règle. EN: ${REFRAME_EN}` },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: "Trois familles devant une voyelle",
  groups: [
    grp("qu' devant un pronom", [
      it(E(1078), "qu'on, et le e est parti"),
      it(E(1079), "qu'elle, même chose"),
      it(E(1081), "qu'ils, au pluriel"),
      it(E(1087), "qu'elle encore, avec m' derrière"),
    ], chk("Pourquoi ces quatre phrases portent-elles une apostrophe ?",
        ['parce que le sujet est un pronom', "parce que que perd son e devant une voyelle"], 1,
        "Le e tombe devant o, e, i. EN: the e drops before a vowel.")),
    grp("qu' devant un prénom", [
      it(E(1076), "qu'Awa, devant un A"),
      it(E(1084), "qu'Anne, devant un A"),
      it(E(1090), "qu'Awa encore"),
      it(E(1086), "qu'il, devant un i"),
    ], chk("Un prénom peut-il déclencher l'apostrophe ?",
        ['Oui, si le prénom commence par une voyelle', 'Non, seulement les pronoms'], 0,
        "Awa, Anne, Omar : la lettre compte, pas la catégorie. EN: the letter counts, not the word class.")),
    grp('qui devant une voyelle', [
      it(E(1077), 'qui est, en trois lettres'),
      it(E(1085), 'qui a, en trois lettres'),
      it(E(1075), 'qui arrive, en trois lettres'),
      it(E(1088), 'qui embête, en trois lettres'),
    ], chk("« qu'est devant la porte » est-il possible ?",
        ['Oui, devant une voyelle', 'Non, jamais'], 1,
        "qui ne s'élide dans aucun cas. EN: qui never elides, in any case.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['elision', 'repere'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: "Écris ce que tu entends",
  frSub: "L'apostrophe ne s'entend pas",
  itemIds: dicteeFor(5),
  audio: AUDIO,
  say: REFRAME,
  terms: ['elision'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: "Quatre erreurs d'apostrophe",
  errors: [
    { wrong: "La voiture qu'est devant la porte bloque le passage.",
      right: 'La voiture qui est devant la porte bloque le passage.',
      why: "Normal : à l'oral, qui est se dit vite et on croit entendre un seul mot. qui ne perd jamais rien. EN: it sounds like one word, but qui never drops anything." },
    { wrong: 'Le message que on attend arrivera ce soir.',
      right: "Le message qu'on attend arrivera ce soir.",
      why: "On écrit le mot entier par prudence. Devant une voyelle, le e de que tombe toujours. EN: before a vowel the e of que always drops." },
    { wrong: "L'homme qu'a ouvert la porte n'a rien dit.",
      right: "L'homme qui a ouvert la porte n'a rien dit.",
      why: "Derrière, il n'y a pas de sujet, donc qui. Et qui ne s'élide pas, donc trois lettres. EN: no subject behind, so qui, and qui keeps its three letters." },
    { wrong: "Le pull que Anne a choisi est trop grand.",
      right: "Le pull qu'Anne a choisi est trop grand.",
      why: "Un prénom ressemble moins à une voyelle qu'un pronom. La lettre décide, pas le mot. EN: the letter decides, not the kind of word." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['elision', 'repere'],
};

const A5_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a5-focus',
  layer: 'core',
  sheetId: 'sheet-test',
  title: 'Quatre choses à retenir sur le e',
  frSub: "Quand il tombe, quand il reste",
  points: [
    "que perd son e devant a, e, i, o, u et devant un h muet. EN: que drops its e before a vowel or a mute h.",
    "qui ne perd jamais rien, dans aucune position. EN: qui never drops anything, anywhere.",
    "Une apostrophe sur ce mot signale toujours que. EN: an apostrophe on this word always means que.",
    "L'oreille ne te dira pas laquelle des deux : c'est le test qui tranche. EN: the ear will not tell you which; the test does.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['elision'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Le e', 'Devant une voyelle, que devient...',
      ["qu'", 'qui', 'il ne change pas'], 0,
      "qu'elle, qu'on, qu'il. EN: qu elle, qu on, qu il."),
  ctl('Les trois lettres', "La forme qu'est existe-t-elle en français ?",
      ['Oui, devant est', 'Non, jamais'], 1,
      "qui ne s'élide dans aucun cas. EN: qui never elides."),
  ctl("L'indice", "Tu vois qu'elle dans un texte. Quel mot était-ce au départ ?",
      ['qui', 'que', "on ne peut pas savoir"], 1,
      "Seul que porte une apostrophe, donc le doute est levé. EN: only que can carry an apostrophe."),
], ['elision', 'repere']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'qui ne tombe jamais',
    opener: {
      line: "Une apostrophe change un mot en un autre : ici tu apprends lequel des deux a le droit de la porter. EN: One apostrophe turns one word into another: here you learn which of the two is allowed to carry it.",
      imageRef: 'lessons/qui-que/act05.jpg',
    },
    sections: [],
    milestone: "Tu écris qu'elle et qu'on sans hésiter, et tu n'élides plus jamais qui. EN: You can write qu elle and qu on without hesitating, and you never elide qui again.",
    estScreens: 23, restPoints: ['a5-construire'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_CONSTRUIRE, A5_DICTEE, A5_ERREURS, A5_FOCUS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — DES GENS ET DES CHOSES
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'La table et le monsieur',
  frSub: 'Deux fois le même mot',
  setting: "Awa arrive au café avec Théo. Elle cherche une place et elle décrit deux choses de suite : un meuble et une personne.",
  bubbles: [
    { from: 'user', fr: 'La table qui est près de la fenêtre est libre.', en: 'The table that is near the window is free.' },
    { from: 'user', fr: 'Le monsieur qui est près de la fenêtre attend depuis une heure.', en: 'The gentleman who is near the window has been waiting an hour.' },
    { from: 'coach', fr: 'Tu as employé le même mot pour un meuble et pour un homme.', en: 'You used the same word for a piece of furniture and for a man.' },
    { from: 'user', fr: "En anglais, j'aurais changé. Which pour la table, who pour le monsieur.", en: 'In English I would have changed. Which for the table, who for the man.' },
    { from: 'coach', fr: 'Ici, non. Le français ne trie pas les noms comme ça.', en: 'Not here. French does not sort nouns that way.' },
    { from: 'user', fr: "Donc le nom de devant ne m'apprend rien du tout.", en: 'So the noun in front tells me nothing at all.' },
    { from: 'coach', fr: 'Rien. Une table peut agir, et une personne peut subir.', en: 'Nothing. A table can act, and a person can be acted on.' },
  ],
  closing: { fr: 'Le nom de devant ne choisit pas le mot. Ce qui suit le choisit.', en: 'The noun in front does not pick the word. What follows picks it.' },
  audio: REC('rec-b1-11-photo'),
  say: REFRAME,
  terms: ['antecedent'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-antecedent',
  title: 'Quatre cartes contre une habitude',
  frSub: 'who, which, that, et le français',
  hint: 'Quatre cartes. Compare les deux langues.',
  audio: REC('rec-b1-11-antecedent'),
  say: REFRAME,
  terms: ['antecedent'],
  cards: [
    { head: 'Une chose qui agit', label: 'qui',
      fr: 'la table qui est près de la fenêtre',
      sub: '[lah tabl kee eh preh duh lah fuh-NETR]',
      body: "En anglais, which. En français, qui, comme pour une personne. EN: English uses which; French uses qui, exactly as for a person." },
    { head: 'Une personne qui subit', label: 'que',
      fr: "l'auteur que je lis",
      sub: '[loh-TUHR kuh zhuh LEE]',
      body: "En anglais, whom ou rien. En français, que, comme pour un objet. EN: French uses que, exactly as for an object." },
    { head: "L'anglais trie, le français non", label: 'la différence',
      fr: 'who · which · that',
      sub: '[HOO] · [WITCH] · [THAT]',
      body: "Trois mots anglais selon le nom. Deux mots français selon la place. EN: three English words chosen by the noun, two French words chosen by position." },
    { head: 'Le repère tient toujours', label: 'la règle',
      fr: 'le livre que je lis · le livre qui me plaît',
      sub: '[kuh zhuh LEE] · [kee muh PLEH]',
      body: `${REFRAME} Le même nom, les deux mots. EN: ${REFRAME_EN}` },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois groupes qui cassent la règle anglaise',
  groups: [
    grp('Des choses avec qui', [
      it(E(1092), 'une table agit'),
      it(E(1096), 'des arbres agissent'),
      it(E(1103), 'un fleuve agit'),
      it('fr.b1.cuisine.090', 'un ingrédient agit'),
    ], chk('Ces quatre noms sont des choses. Quel mot les suit ?',
        ['que, parce que ce sont des choses', 'qui, parce que rien ne suit'], 1,
        "Une chose peut être sujet. EN: a thing can be a subject.")),
    grp('Des personnes avec que', [
      it(E(1095), 'un auteur est lu'),
      it(E(1102), 'un technicien est attendu'),
      it(E(1107), 'une personne est cherchée'),
      it(E(1105), 'le même auteur, en carte'),
    ], chk('Ces quatre noms sont des personnes. Quel mot les suit ?',
        ['qui, parce que ce sont des personnes', "que, parce qu'un sujet suit"], 1,
        "Une personne peut subir. EN: a person can be acted on.")),
    grp('Le même nom, les deux mots', [
      it(E(1094), 'le livre est lu'),
      it(E(1099), 'le sac est sur la chaise'),
      it(E(1106), 'le mot est cherché'),
      it(E(1108), 'les chaussures font mal'),
    ], chk('Le mot change-t-il parce que le nom change ?',
        ['Oui', 'Non, il change avec ce qui suit'], 1,
        `${REFRAME} EN: ${REFRAME_EN}`)),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['antecedent', 'repere'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Une chose ou une personne',
  frSub: 'Huit phrases, et le mot ne bouge pas',
  lines: [
    ln(E(1092)), ln(E(1093)), ln(E(1094)), ln(E(1095)),
    ln(E(1096)), ln(E(1097)), ln(E(1103)), ln(E(1104)),
  ],
  questions: [
    { q: 'Première phrase : de quoi parle-t-on ?', opts: ['une table', 'un monsieur'], correct: 0,
      why: "« La table qui est près de la fenêtre ». EN: the table." },
    { q: 'Deuxième phrase : le petit mot a-t-il changé ?', opts: ['Oui', "Non, c'est le même"], correct: 1,
      why: "Table et monsieur prennent tous les deux qui. EN: both take qui." },
    { q: 'Troisième phrase : qui lit le livre ?', opts: ['le livre', 'celui qui parle'], correct: 1,
      why: "« que je lis » : je est le sujet. EN: je is the subject." },
    { q: 'Quatrième phrase : le nom est une personne. Le mot est-il qui ?', opts: ['Oui', 'Non, que'], correct: 1,
      why: "« l'auteur que je lis » : je suit, donc que. EN: je follows, so que." },
    { q: 'Cinquième phrase : quand les arbres perdent-ils leurs feuilles ?', opts: ['en octobre', 'en avril'], correct: 0,
      why: "« perdent leurs feuilles en octobre ». EN: in October." },
    { q: "Septième phrase : comment s'appelle le fleuve ?", opts: ['le Saint-Laurent', 'la Seine', 'le Rhône'], correct: 0,
      why: "« s'appelle le Saint-Laurent ». EN: the Saint Lawrence." },
  ],
  audio: REC('rec-b1-11-antecedent-ecoute'),
  say: REFRAME,
  terms: ['antecedent'],
};

/** CHOOSE. Two grammatical sentences about the same noun; the situation
 *  decides which one is true. */
const A6_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le même nom, deux vérités différentes',
  groups: [
    ctl('Le technicien', 'La machine est cassée et il vient demain. Tu écris...',
        ['le technicien qui nous attend', 'le technicien que nous attendons'], 1,
        "C'est nous qui attendons, donc un sujet suit. EN: we are the ones waiting, so a subject follows."),
    ctl('La femme au carton', "Elle marche et elle porte un carton. Tu écris...",
        ['la femme que traverse la rue', 'la femme qui traverse la rue'], 1,
        "Elle traverse elle-même, donc rien ne suit. EN: she crosses by herself, so nothing follows."),
    ctl("L'auteur", 'Tu es en train de lire ses livres. Tu écris...',
        ["l'auteur qui me lit", "l'auteur que je lis", "l'auteur qui je lis"], 1,
        "Toi, tu lis ; lui, il est lu. EN: you read, he is read."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['antecedent', 'repere'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: "Quatre erreurs d'habitude anglaise",
  errors: [
    { wrong: 'La table que est près de la fenêtre est libre.',
      right: 'La table qui est près de la fenêtre est libre.',
      why: "Normal : which se réserve aux choses, alors la main cherche un mot spécial. Le français n'en a pas. EN: English keeps which for things; French has no such word." },
    { wrong: "L'auteur qui je lis vient de Montréal.",
      right: "L'auteur que je lis vient de Montréal.",
      why: "Une personne appelle who, donc qui semble juste. Mais je est déjà le sujet. EN: a person suggests who, but je is already the subject." },
    { wrong: "Le fleuve que traverse la ville s'appelle le Saint-Laurent.",
      right: "Le fleuve qui traverse la ville s'appelle le Saint-Laurent.",
      why: "Un fleuve ne semble pas agir, et pourtant il traverse. EN: a river does not look like an agent, and yet it crosses." },
    { wrong: 'Les enfants que jouent dans la cour rentrent à cinq heures.',
      right: 'Les enfants qui jouent dans la cour rentrent à cinq heures.',
      why: "Le pluriel fait hésiter, mais rien ne suit le trou : ce sont eux qui jouent. EN: the plural is distracting; nothing follows, so qui." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['antecedent', 'repere'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Les choses', 'Une chose peut-elle être suivie de qui ?',
      ['Oui', 'Non, seulement les personnes'], 0,
      "La rue qui mène, le fleuve qui traverse. EN: things take qui too."),
  ctl('Les personnes', 'Une personne peut-elle être suivie de que ?',
      ['Non', 'Oui'], 1,
      "L'auteur que je lis, le technicien que nous attendons. EN: people take que too."),
  ctl("L'anglais", 'Combien de mots anglais pour ces deux mots français ?',
      ['deux', 'un seul', 'trois, et parfois zéro'], 2,
      "who, which, that, et parfois rien du tout. EN: who, which, that, and sometimes nothing."),
], ['antecedent', 'repere']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Des gens et des choses',
    opener: {
      line: "Une table et un monsieur prennent exactement le même mot : ici tu perds une habitude anglaise. EN: A table and a gentleman take exactly the same word: here you lose an English habit.",
      imageRef: 'lessons/qui-que/act06.jpg',
    },
    sections: [],
    milestone: "Tu ne choisis plus ton mot d'après le nom de devant, même quand l'anglais t'y pousse. EN: You no longer choose your word from the noun in front, even when English pushes you to.",
    estScreens: 23, restPoints: ['a6-construire'],
  },
  sections: [A6_HISTOIRE, A6_CARTES, A6_CONSTRUIRE, A6_ECOUTE, A6_CHOISIR, A6_ERREURS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LE MOT QU'ON NE SAUTE PAS
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a7-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courriel de Maya',
  frSub: 'Quatre phrases qui se percutent',
  text: READING_TRADUCTION,
  glossary: [
    { word: 'se percutent', en: 'collide', note: 'Ils se rentrent dedans, comme deux voitures.' },
    { word: 'de son point de vue', en: 'from her point of view', note: "Vu depuis sa langue à elle, l'anglais." },
    { word: 'laisse le mot tomber', en: 'lets the word drop', note: "L'anglais permet de ne pas l'écrire." },
    { word: 'se remet en place', en: 'falls back into place', note: 'Tout redevient lisible.' },
  ],
  questions: [
    { q: "Qu'est-ce qui manque dans les quatre phrases de Maya ?", a: "Le mot que, devant le sujet de la relative : que tu, que nous, que je." },
    { q: 'Pourquoi Théo doit-il relire trois fois ?', a: "Deux sujets arrivent l'un derrière l'autre : le livre et tu, la ville et nous. La phrase s'arrête au milieu." },
    { q: "Ces phrases sont-elles fausses en anglais ?", a: "Non. The book you sent me est parfait. C'est le français qui n'autorise pas la suppression." },
    { q: 'Quelle est la réparation, dans tous les cas ?', a: "Remettre que devant le sujet. Il n'y a aucune exception à chercher." },
  ],
  audio: REC('rec-b1-11-maya'),
  say: REFRAME,
  terms: ['motfixe', 'relative'],
};

const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-antecedent',
  title: 'Quatre cartes sur un mot obligatoire',
  frSub: "Ce que l'anglais efface",
  hint: 'Quatre cartes. Compte les mots des deux côtés.',
  audio: REC('rec-b1-11-motfixe'),
  say: REFRAME,
  terms: ['motfixe'],
  cards: [
    { head: 'En anglais, rien', label: 'the book I read',
      fr: 'le livre que je lis',
      sub: '[luh leevr kuh zhuh LEE]',
      body: "L'anglais écrit quatre mots, le français en écrit cinq. Le cinquième est que. EN: English writes four words here; French writes five." },
    { head: 'Sans lui, deux sujets', label: "l'accident",
      fr: 'le livre je lis',
      sub: '[luh LEEVR] · [zhuh LEE]',
      body: "Le livre et je se retrouvent côte à côte, et aucun des deux ne sait quoi faire. EN: the noun and the subject sit side by side with nothing to link them." },
    { head: 'Le trou existe toujours', label: 'la raison',
      fr: 'le livre ___ je lis',
      sub: '[luh LEEVR] · [zhuh LEE]',
      body: "Le complément de lis est parti devant. La place vide doit être marquée. EN: the object has moved to the front, and the gap has to be marked." },
    { head: 'Aucune exception', label: 'la règle',
      fr: 'que, toujours écrit',
      sub: '[KUH] · [too-zhoor ay-KREE]',
      body: "Il n'y a ni cas rapide, ni style familier qui l'autorise. EN: there is no quick form and no casual register that allows the drop." },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois groupes à réparer',
  groups: [
    grp('Ce que Maya a écrit, réparé', [
      it(E(1109), 'the book I read, en entier'),
      it(E(1110), 'the city we visit, en entier'),
      it(E(1111), 'the people you know, en entier'),
      it(E(1121), 'the train we await, en entier'),
    ], chk("Combien de mots le français ajoute-t-il par rapport à l'anglais ?",
        ['aucun', 'un seul, toujours le même'], 1,
        "que, une fois par relative. EN: que, once per clause.")),
    grp('Le même trou, au passé', [
      it(E(1117), 'tu as servi le café'),
      it(E(1118), 'nous avons pris le chemin'),
      it(E(1122), "tu m'as laissé le numéro"),
      it('fr.b1.cafe.086', "j'ai gardé cette habitude"),
    ], chk("Le temps du verbe change-t-il quelque chose à l'obligation ?",
        ['Oui, au passé on peut sauter le mot', 'Non, rien du tout'], 1,
        "Présent, passé, futur : le mot reste. EN: past or present, the word stays.")),
    grp('Des phrases plus longues', [
      it(E(1120), 'le jury pose les questions'),
      it(E(1123), 'nous cherchons un appartement'),
      it(E(1124), 'mon père prépare le repas'),
      it(E(1126), "j'utilise le vélo"),
    ], chk("Dans « l'appartement que nous cherchons doit avoir un balcon », combien de verbes ?",
        ['un', 'deux', 'trois'], 1,
        "cherchons dans la relative, doit dans la phrase principale. EN: one in the clause, one in the main sentence.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motfixe', 'complement'],
};

const A7_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a7-table',
  layer: 'core',
  sheetId: 'sheet-antecedent',
  title: "Six phrases que l'anglais raccourcit",
  frSub: 'Touche une ligne pour la phrase entière',
  cols: ['Anglais', 'Faux', 'Juste'],
  rows: [
    { cells: ['the book I read', 'le livre je lis', 'le livre que je lis'], say: 'Le livre que je lis est passionnant.',
      detail: { title: 'the book I read', body: "Quatre mots contre cinq. Le cinquième n'est pas décoratif. EN: four words against five, and the fifth is not decoration.", say: "Le livre que tu m'as prêté est vraiment bon." } },
    { cells: ['the people you know', 'les gens tu connais', 'les gens que tu connais'], say: "Les gens que tu connais habitent près d'ici.",
      detail: { title: 'the people you know', body: "les gens et tu se percutent sans lui. EN: the noun and the subject collide without it.", say: 'Les gens que je croise le matin vont tous au marché.' } },
    { cells: ['the city we visit', 'la ville nous visitons', 'la ville que nous visitons'], say: 'La ville que nous visitons est très ancienne.',
      detail: { title: 'the city we visit', body: "Même au pluriel du sujet, la règle ne bouge pas. EN: a plural subject changes nothing.", say: 'Le chemin que nous avons pris était plus long.' } },
    { cells: ['the train we await', 'le train nous attendons', 'le train que nous attendons'], say: 'Le train que nous attendons a vingt minutes de retard.',
      detail: { title: 'the train we await', body: "Le verbe attendre ne change rien : le trou est là. EN: the verb makes no difference; the gap is there.", say: 'Le message que tu attends arrivera ce soir.' } },
    { cells: ['the file you want', 'le dossier tu veux', 'le dossier que tu veux'], say: 'Le dossier que tu veux est dans le tiroir du bas.',
      detail: { title: 'the file you want', body: "Une phrase courte cache mieux le manque, et l'erreur passe plus souvent. EN: a short sentence hides the gap better, so the error slips through.", say: 'Le numéro que tu cherches est au dos de la carte.' } },
    { cells: ['the bike I use', "le vélo j'utilise", "le vélo que j'utilise"], say: "Le vélo que j'utilise tous les jours a dix ans.",
      detail: { title: 'the bike I use', body: "Devant une voyelle, il se réduit mais il reste : qu'. EN: before a vowel it shrinks, but it stays.", say: "La chanson que j'écoute en ce moment vient d'Abidjan." } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motfixe', 'elision'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  title: 'Cinq phrases où le mot porte tout',
  frSub: "Enlève-le et la phrase s'arrête",
  examples: [
    ex(E(1112), 'tout le monde recommande le film'),
    ex(E(1119), "j'écoute la chanson"),
    ex(E(1125), 'tu veux le dossier'),
    ex('fr.b1.cuisine.080', 'ma grand-mère a donné la recette'),
    ex('fr.b1.sports-et-loisirs.089', 'ici le mot est qui, et il est aussi obligatoire'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motfixe'],
};

/** TRAP. The failing instinct is not a wrong choice between two words: it is
 *  writing no word at all, because the English sentence has none.
 *  `promptSound` holds the WRONG version and is never spoken. */
const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'La phrase qui se percute au milieu',
  rule: {
    title: 'Deux sujets sans rien entre eux',
    body: "Sans le mot, un nom et un sujet se retrouvent collés : le livre je, la ville nous. Aucun des deux ne commande l'autre, et la phrase s'arrête. EN: without it, a noun and a subject sit glued together and the sentence stalls.",
  },
  cards: [
    { promptLabel: 'the book I read', promptSound: 'Le livre je lis est passionnant.', fr: 'Le livre que je lis est passionnant.', ipa: '/lə livʁ kə ʒə li ɛ pa.sjɔ.nɑ̃/', tip: "Sans que, livre et je se percutent. EN: without que, livre and je collide." },
    { promptLabel: 'the city we visit', promptSound: 'La ville nous visitons est très ancienne.', fr: 'La ville que nous visitons est très ancienne.', ipa: '/la vil kə nu vi.zi.tɔ̃ ɛ tʁɛ.zɑ̃.sjɛn/', tip: "Le pluriel ne change rien. EN: the plural changes nothing." },
    { promptLabel: 'the people you know', promptSound: "Les gens tu connais habitent près d'ici.", fr: "Les gens que tu connais habitent près d'ici.", ipa: '/le ʒɑ̃ kə ty kɔ.nɛ a.bit pʁɛ di.si/', tip: "gens et tu ne peuvent pas être voisins. EN: gens and tu cannot be neighbours." },
    { promptLabel: 'the train we await', promptSound: 'Le train nous attendons a vingt minutes de retard.', fr: 'Le train que nous attendons a vingt minutes de retard.', ipa: '/lə tʁɛ̃ kə nu.za.tɑ̃.dɔ̃ a vɛ̃ mi.nyt də ʁə.taʁ/', tip: "La phrase principale attend son verbe, a. EN: the main sentence is still waiting for its verb." },
    { promptLabel: 'the file you want', promptSound: 'Le dossier tu veux est dans le tiroir du bas.', fr: 'Le dossier que tu veux est dans le tiroir du bas.', ipa: '/lə dɔ.sje kə ty vø ɛ dɑ̃ lə ti.ʁwaʁ dy bɑ/', tip: "Une phrase courte cache mieux le trou. EN: a short sentence hides the gap better." },
    { promptLabel: 'the bike I use', promptSound: "Le vélo j'utilise tous les jours a dix ans.", fr: "Le vélo que j'utilise tous les jours a dix ans.", ipa: '/lə ve.lo kə ʒy.ti.liz tu le ʒuʁ a di.zɑ̃/', tip: "Ici il se réduit en qu', mais il est là. EN: here it shrinks, but it is there." },
  ],
  drill: [
    { promptSay: 'Le livre ... je lis est passionnant.', opts: ['rien', 'que'], correct: 1 },
    { promptSay: "Les gens ... tu connais habitent près d'ici.", opts: ['que', 'rien'], correct: 0 },
    { promptSay: 'La ville ... nous visitons est très ancienne.', opts: ['rien', 'que'], correct: 1 },
    { promptSay: 'Le film ... tout le monde recommande sort vendredi.', opts: ['que', 'rien'], correct: 0 },
    { promptSay: 'Le train ... nous attendons a vingt minutes de retard.', opts: ['rien', 'que'], correct: 1 },
    { promptSay: 'Le dossier ... tu veux est dans le tiroir du bas.', opts: ['que', 'rien'], correct: 0 },
    { promptSay: "Le vélo ... j'utilise tous les jours a dix ans.", opts: ["qu'", 'rien'], correct: 0 },
    { promptSay: 'Le chemin ... nous avons pris était plus long.', opts: ['rien', 'que'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Deux sujets collés' },
    { label: 'Six cartes', kind: 'cards', title: "Ce que l'anglais efface" },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-11-piege-motfixe'),
  say: REFRAME,
  terms: ['motfixe', 'repere'],
};

const A7_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a7-flash',
  layer: 'core',
  title: 'Huit phrases anglaises sans le mot',
  frSub: 'Remets-le en français',
  cards: [
    { front: 'the book I read', back: 'le livre que je lis', say: 'Le livre que je lis est passionnant.' },
    { front: 'the people you know', back: 'les gens que tu connais', say: "Les gens que tu connais habitent près d'ici." },
    { front: 'the city we are visiting', back: 'la ville que nous visitons', say: 'La ville que nous visitons est très ancienne.' },
    { front: 'the train we are waiting for', back: 'le train que nous attendons', say: 'Le train que nous attendons a vingt minutes de retard.' },
    { front: 'the file you want', back: 'le dossier que tu veux', say: 'Le dossier que tu veux est dans le tiroir du bas.' },
    { front: 'the way we took', back: 'le chemin que nous avons pris', say: 'Le chemin que nous avons pris était plus long.' },
    { front: 'the number you left me', back: "le numéro que tu m'as laissé", say: "Le numéro que tu m'as laissé ne marche pas." },
    { front: 'the bike I use', back: "le vélo que j'utilise", say: "Le vélo que j'utilise tous les jours a dix ans." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['motfixe'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le nombre de mots', 'the book I read fait quatre mots. Et en français ?',
      ['quatre aussi', 'cinq'], 1,
      "le livre que je lis. EN: five, and the fifth is que."),
  ctl("L'accident", 'Que se passe-t-il quand le mot manque ?',
      ['la phrase devient familière', 'deux sujets se retrouvent collés', 'rien de grave'], 1,
      "le livre je lis : aucun des deux ne commande l'autre. EN: neither one can govern the other."),
  ctl("L'exception", 'Y a-t-il un cas où on peut le sauter ?',
      ["oui, à l'oral", 'oui, dans une phrase courte', 'non, jamais'], 2,
      "Aucun registre ne l'autorise. EN: no register allows it."),
], ['motfixe', 'repere']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: "Le mot qu'on ne saute pas",
    opener: {
      line: "En anglais tu peux ne rien écrire du tout : ici tu apprends pourquoi le français ne te le permet jamais. EN: In English you can write nothing at all: here you learn why French never lets you.",
      imageRef: 'lessons/qui-que/act07.jpg',
    },
    sections: [],
    milestone: "Tu n'écris plus le livre je lis, et tu répares cette phrase chez les autres. EN: You no longer write le livre je lis, and you can repair that sentence when you see it.",
    estScreens: 34, restPoints: ['a7-table', 'a7-piege'],
  },
  sections: [A7_LECTURE, A7_CARTES, A7_CONSTRUIRE, A7_TABLE, A7_EXEMPLES, A7_PIEGE, A7_FLASH, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — L'ACCORD DU PARTICIPE
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Deux pages et deux lignes',
  frSub: 'La lettre et le mot',
  setting: "Théo montre à Awa deux phrases de sa déclaration. Le verbe est le même dans les deux, et il ne s'écrit pas pareil.",
  bubbles: [
    { from: 'user', fr: "La lettre que j'ai écrite fait deux pages.", en: 'The letter I wrote runs to two pages.' },
    { from: 'user', fr: "Le mot que j'ai écrit tient sur une ligne.", en: 'The note I wrote fits on one line.' },
    { from: 'coach', fr: 'Écoute la fin des deux. Elles ne sonnent pas pareil.', en: 'Listen to the end of both. They do not sound the same.' },
    { from: 'user', fr: "Dans la première, j'entends un t.", en: 'In the first one I can hear a t.' },
    { from: 'coach', fr: "Parce que le nom est passé devant, et qu'il est féminin.", en: 'Because the noun has moved in front, and it is feminine.' },
    { from: 'user', fr: "Et si j'écris la clé que j'ai perdue.", en: 'And if I write la clé que j ai perdue.' },
    { from: 'coach', fr: "Tu ajoutes un e que personne n'entendra. Il compte quand même.", en: 'You add an e that nobody will hear. It still counts.' },
  ],
  closing: { fr: "Parfois le participe se dit, parfois il ne fait que s'écrire.", en: 'Sometimes the participle is heard, sometimes it is only written.' },
  audio: REC('rec-b1-11-lettre'),
  say: REFRAME,
  terms: ['accord', 'complement'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-accord',
  title: "L'accord en quatre cartes",
  frSub: 'Le nom est passé devant',
  hint: 'Quatre cartes. Écoute la dernière syllabe.',
  audio: REC('rec-b1-11-accord'),
  say: REFRAME,
  terms: ['accord'],
  cards: [
    { head: 'Le nom passe devant', label: 'la cause',
      fr: "la lettre que j'ai écrite",
      sub: '[lah LETR kuh zhay ay-KREET]',
      body: "que emmène la lettre devant le verbe. Le participe s'accorde alors avec elle. EN: que takes the noun in front, and the participle then agrees with it." },
    { head: "Ce que l'oreille entend", label: 'écrite',
      fr: "écrit · écrite",
      sub: '[ay-KREE] · [ay-KREET]',
      body: "Un t apparaît. Même chose pour mise, prise, faite, dite, ouverte. EN: a t appears, and the same happens with mise, prise, faite, dite, ouverte." },
    { head: "Ce que l'oreille ignore", label: 'perdue',
      fr: 'perdu · perdue',
      sub: '[pehr-DÜ] · [pehr-DÜ]',
      body: "Rien ne change à l'oreille. Le e est là pour l'œil, et il est obligatoire. EN: nothing changes to the ear; the e is for the eye and it is compulsory." },
    { head: 'Avec qui, rien', label: 'la limite',
      fr: 'la dame qui a trouvé mon sac',
      sub: '[lah damm kee ah troo-VAY]',
      body: `${REFRAME} Après qui, le nom est sujet, donc pas d'accord. EN: ${REFRAME_EN}` },
  ],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois groupes, une seule règle',
  groups: [
    grp("Le t et le z qu'on entend", [
      it(E(1127), 'écrite, avec un t'),
      it(E(1129), 'mise, avec un z'),
      it(E(1131), 'prises, avec un z'),
      it(E(1133), 'ouverte, avec un t'),
    ], chk('Dans ces quatre phrases, entends-tu la fin du participe ?',
        ['Oui, une consonne apparaît', 'Non, rien ne change'], 0,
        "écrite, mise, prises, ouverte : la consonne se réveille. EN: the final consonant wakes up.")),
    grp('Le e que personne ne dit', [
      it(E(1139), 'perdue, sans rien de neuf'),
      it(E(1141), 'écoutée, sans rien de neuf'),
      it(E(1148), 'donnée, sans rien de neuf'),
      it(E(1149), 'réservées, sans rien de neuf'),
    ], chk("L'accord est-il moins obligatoire quand on ne l'entend pas ?",
        ["Oui, à l'oral il disparaît", "Non, il reste obligatoire à l'écrit"], 1,
        "Le stylo l'écrit même quand la bouche ne le dit pas. EN: the pen writes it even when the mouth does not say it.")),
    grp('La même phrase, sans accord', [
      it(E(1128), 'le mot est masculin, donc écrit'),
      it(E(1130), 'le banc est masculin, donc mis'),
      it(E(1132), 'les livres sont masculins, donc pris'),
      it(E(1004), "ici c'est qui, donc aucun accord"),
    ], chk('Pourquoi « la dame qui a trouvé mon sac » ne prend-il pas de e ?',
        ['parce que trouver est régulier', 'parce que la dame est le sujet, pas le complément'], 1,
        "Après qui, rien n'est passé devant le verbe. EN: after qui, nothing has moved in front.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord', 'repere'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: "Masculin ou féminin, à l'oreille",
  frSub: 'Huit phrases, et parfois une consonne de plus',
  lines: [
    ln(E(1127)), ln(E(1128)), ln(E(1129)), ln(E(1130)),
    ln(E(1131)), ln(E(1132)), ln(E(1133)), ln(E(1134)),
  ],
  questions: [
    { q: 'Première phrase : entends-tu un t à la fin du participe ?', opts: ['Oui', 'Non'], correct: 0,
      why: "« que j'ai écrite » : le t se dit. EN: the t is heard." },
    { q: 'Deuxième phrase : et ici ?', opts: ['Oui', 'Non, rien'], correct: 1,
      why: "« que j'ai écrit » : masculin, rien ne se dit. EN: masculine, nothing sounds." },
    { q: 'Troisième phrase : quelle consonne apparaît ?', opts: ['un t', 'un z', 'un k'], correct: 1,
      why: "« que j'ai mise » se dit MEEZ. EN: mise sounds with a z." },
    { q: 'Cinquième phrase : le nom est-il au pluriel ?', opts: ['Oui, les photos', 'Non'], correct: 0,
      why: "« les photos que j'ai prises ». EN: the photos." },
    { q: 'Septième phrase : qui a ouvert la porte ?', opts: ['le gardien', 'la porte'], correct: 0,
      why: "« que le gardien a ouverte » : le gardien est le sujet. EN: the caretaker is the subject." },
    { q: 'Huitième phrase : combien de mots la prof a-t-elle dits ?', opts: ['une phrase', 'deux phrases'], correct: 0,
      why: "« La phrase que la prof a dite ». EN: one sentence." },
  ],
  audio: REC('rec-b1-11-accord-ecoute'),
  say: REFRAME,
  terms: ['accord'],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-table',
  layer: 'core',
  sheetId: 'sheet-accord',
  title: 'Six participes à toucher',
  frSub: 'Touche une ligne pour la phrase entière',
  cols: ['Masculin', 'Féminin', 'On entend'],
  rows: [
    { cells: ['écrit', 'écrite', 'oui, un t'], say: "La lettre que j'ai écrite fait deux pages.",
      detail: { title: 'écrire', body: "Le t dort dans le masculin et se réveille au féminin. EN: the t sleeps in the masculine and wakes in the feminine.", say: "Le mot que j'ai écrit tient sur une ligne." } },
    { cells: ['mis', 'mise', 'oui, un z'], say: "La table que j'ai mise dehors est trop lourde.",
      detail: { title: 'mettre', body: "Même chose pour promis, permis, remis. EN: promis, permis and remis behave the same way.", say: "Le banc que j'ai mis dehors est trop lourd." } },
    { cells: ['pris', 'prise', 'oui, un z'], say: "Les photos que j'ai prises à Québec sont dans l'album.",
      detail: { title: 'prendre', body: "appris, compris et surpris suivent le même chemin. EN: appris, compris and surpris follow the same path.", say: "La langue que j'ai apprise à l'école, c'est l'espagnol." } },
    { cells: ['ouvert', 'ouverte', 'oui, un t'], say: 'La porte que le gardien a ouverte donne sur la cour.',
      detail: { title: 'ouvrir', body: "offert, couvert et souffert font pareil. EN: offert, couvert and souffert do the same.", say: "La lumière que tu as éteinte, c'est celle du couloir." } },
    { cells: ['perdu', 'perdue', 'non, rien'], say: "La clé que j'ai perdue était dans ma poche.",
      detail: { title: 'perdre', body: "Le e est muet, et il reste obligatoire à l'écrit. EN: the e is silent and still compulsory in writing.", say: "Les clés que j'ai perdues étaient dans ma poche." } },
    { cells: ['écouté', 'écoutée', 'non, rien'], say: "La chanson que j'ai écoutée hier vient d'Abidjan.",
      detail: { title: 'les verbes en -er', body: "Parlé, écouté, réservé : tout le premier groupe est muet. EN: the whole first group is silent here.", say: 'Les places que nous avons réservées sont au premier rang.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a8-dictee',
  layer: 'core',
  title: 'Écris la fin que tu entends',
  frSub: "Et celle que tu n'entends pas",
  itemIds: dicteeFor(8),
  audio: AUDIO,
  say: REFRAME,
  terms: ['accord'],
};

/** TRAP. The failing instinct: leaving the participle in the masculine
 *  singular, because with avoir that is the default everywhere else.
 *  `promptSound` holds the WRONG version and is never spoken. */
const A8_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a8-piege',
  layer: 'core',
  swipe: true,
  title: 'Le participe qui reste au masculin',
  rule: {
    title: 'que déplace le complément',
    body: "Avec avoir, le participe ne bouge pas, sauf si le complément est déjà passé devant. que fait exactement ça. EN: with avoir the participle stays put, unless the object has already moved in front, which is what que does.",
  },
  cards: [
    { promptLabel: 'écrire', promptSound: "La lettre que j'ai écrit fait deux pages.", fr: "La lettre que j'ai écrite fait deux pages.", ipa: '/la lɛtʁ kə ʒe e.kʁit fɛ dø paʒ/', tip: "La lettre est passée devant, donc écrite. EN: the letter moved in front, so écrite." },
    { promptLabel: 'mettre', promptSound: "La table que j'ai mis dehors est trop lourde.", fr: "La table que j'ai mise dehors est trop lourde.", ipa: '/la tabl kə ʒe miz də.ɔʁ ɛ tʁo luʁd/', tip: "mise, et le z se dit. EN: mise, and the z is heard." },
    { promptLabel: 'prendre', promptSound: "Les photos que j'ai pris à Québec sont dans l'album.", fr: "Les photos que j'ai prises à Québec sont dans l'album.", ipa: '/le fɔ.to kə ʒe pʁiz a ke.bɛk sɔ̃ dɑ̃ lal.bɔm/', tip: "Féminin pluriel : prises. EN: feminine plural, prises." },
    { promptLabel: 'perdre', promptSound: "La clé que j'ai perdu était dans ma poche.", fr: "La clé que j'ai perdue était dans ma poche.", ipa: '/la kle kə ʒe pɛʁ.dy e.tɛ dɑ̃ ma pɔʃ/', tip: "Muet, et pourtant obligatoire. EN: silent, and still compulsory." },
    { promptLabel: 'ouvrir', promptSound: 'La porte que le gardien a ouvert donne sur la cour.', fr: 'La porte que le gardien a ouverte donne sur la cour.', ipa: '/la pɔʁt kə lə ɡaʁ.djɛ̃ a u.vɛʁt dɔn syʁ la kuʁ/', tip: "Le sujet est le gardien, mais l'accord suit la porte. EN: the subject is the caretaker, but the agreement follows the door." },
    { promptLabel: 'trouver', promptSound: 'La dame qui a trouvée mon sac travaille au café.', fr: 'La dame qui a trouvé mon sac travaille au café.', ipa: '/la dam ki a tʁu.ve mɔ̃ sak tʁa.vaj o ka.fe/', tip: "Après qui, aucun accord : rien n'est passé devant. EN: after qui there is no agreement." },
  ],
  drill: [
    { promptSay: "La lettre que j'ai ... fait deux pages.", opts: ['écrit', 'écrite'], correct: 1 },
    { promptSay: "Le mot que j'ai ... tient sur une ligne.", opts: ['écrit', 'écrite'], correct: 0 },
    { promptSay: "Les photos que j'ai ... à Québec sont dans l'album.", opts: ['prises', 'pris'], correct: 0 },
    { promptSay: 'La dame qui a ... mon sac travaille au café.', opts: ['trouvée', 'trouvé'], correct: 1 },
    { promptSay: "La clé que j'ai ... était dans ma poche.", opts: ['perdue', 'perdu'], correct: 0 },
    { promptSay: 'La porte que le gardien a ... donne sur la cour.', opts: ['ouvert', 'ouverte'], correct: 1 },
    { promptSay: "Les livres que j'ai ... à la bibliothèque sont en retard.", opts: ['pris', 'prises'], correct: 0 },
    { promptSay: 'La phrase que la prof a ... est restée dans ma tête.', opts: ['dit', 'dite'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le complément est passé devant' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le masculin par défaut produit' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-11-piege-accord'),
  say: REFRAME,
  terms: ['accord', 'complement'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('La cause', "Pourquoi le participe s'accorde-t-il après que ?",
      ['parce que que est féminin', 'parce que le complément est passé devant le verbe'], 1,
      "que emmène le nom devant, et le participe le suit. EN: que moves the noun in front."),
  ctl("L'oreille", 'Avec quel verbe entends-tu la différence ?',
      ['perdre', 'écouter', 'mettre'], 2,
      "mis contre mise : le z se réveille. EN: mis against mise, the z wakes up."),
  ctl('Après qui', '« la dame qui a trouvé mon sac » prend-il un e ?',
      ['Oui', 'Non'], 1,
      "Après qui, rien n'est passé devant le verbe. EN: after qui nothing has moved in front."),
], ['accord', 'repere']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: "L'accord du participe",
    opener: {
      line: "Une lettre et un mot, le même verbe, et une lettre de plus au bout : ici tu apprends quand elle s'entend. EN: A letter and a note, the same verb, one extra letter at the end: here you learn when it is heard.",
      imageRef: 'lessons/qui-que/act08.jpg',
    },
    sections: [],
    milestone: "Tu accordes le participe après que, et tu sais si la correction s'entend ou se voit seulement. EN: You can agree the participle after que, and you know whether the fix is heard or only seen.",
    estScreens: 30, restPoints: ['a8-table', 'a8-piege'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_ECOUTE, A8_TABLE, A8_DICTEE, A8_PIEGE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — AU MILIEU DE LA PHRASE
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "La lettre de l'assurance",
  frSub: 'Compte les virgules',
  text: READING_ASSURANCE,
  glossary: [
    { word: 'en cours', en: 'still open', note: "Le dossier n'est pas terminé." },
    { word: "l'expert", en: 'the assessor', note: "La personne qui vient estimer les dégâts." },
    { word: 'la veille', en: 'the day before', note: 'Le jour qui précède celui du rendez-vous.' },
    { word: 'après coup', en: 'after the event', note: 'Une fois que tout est déjà déclaré.' },
  ],
  questions: [
    { q: 'Que se passe-t-il si on enlève un groupe entre deux virgules ?', a: "La phrase tient debout toute seule : « La valise n'a pas été retrouvée. »" },
    { q: 'Quelle différence entre « le vélo qui manque » et « le vélo, qui manque » ?', a: "Sans virgules, la relative choisit un vélo parmi plusieurs. Avec virgules, elle ajoute une information sur le seul vélo." },
    { q: 'Où se place la relative par rapport à son nom ?', a: "Juste après lui, même si la phrase principale n'est pas finie : « L'expert, qui doit passer chez vous, vous appellera. »" },
    { q: 'Quel est le verbe principal de la phrase sur le dossier ?', a: "« est toujours en cours ». Il arrive après les deux relatives, et la phrase ne se termine pas avant." },
  ],
  audio: REC('rec-b1-11-assurance'),
  say: REFRAME,
  terms: ['milieu', 'relative'],
};

const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-relative',
  title: 'Quatre cartes sur les virgules',
  frSub: 'Un ajout, ou un tri',
  hint: 'Quatre cartes. Regarde ce que la virgule change.',
  audio: REC('rec-b1-11-virgules'),
  say: REFRAME,
  terms: ['milieu'],
  cards: [
    { head: 'Sans virgule, elle trie', label: 'la relative qui choisit',
      fr: 'Ma sœur qui habite à Sherbrooke arrive vendredi.',
      sub: '[mah SUHR kee ah-beet ah shehr-BROOK]',
      body: "J'ai plusieurs sœurs, et la relative dit laquelle arrive. EN: I have several sisters, and the clause says which one." },
    { head: 'Avec deux virgules, elle ajoute', label: "la relative qui informe",
      fr: 'Ma sœur, qui habite à Sherbrooke, arrive vendredi.',
      sub: '[mah SUHR] · [kee ah-beet ah shehr-BROOK]',
      body: "J'ai une seule sœur, et j'ajoute où elle vit. EN: I have one sister, and I am adding where she lives." },
    { head: 'Deux virgules, jamais une', label: "l'encadrement",
      fr: 'Mon voisin, qui travaille de nuit, dort le jour.',
      sub: '[mohⁿ vwah-ZEHⁿ] · [kee trah-vahy duh NÜEE]',
      body: "La relative est encadrée des deux côtés, comme une parenthèse. EN: the clause is fenced on both sides, like a bracket." },
    { head: 'La phrase repart ensuite', label: 'le verbe principal',
      fr: 'Le formulaire que tu as rempli part demain.',
      sub: '[luh for-mü-LEHR kuh tü ah rahⁿ-PLEE]',
      body: `${REFRAME} Après la relative, le verbe principal arrive. EN: ${REFRAME_EN}` },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois groupes au milieu',
  groups: [
    grp('Encadrée par deux virgules', [
      it(E(1150), 'une seule sœur, et on ajoute'),
      it(E(1154), 'un seul voisin, et on ajoute'),
      it(E(1161), 'un seul frère, et on ajoute'),
      it(E(1162), 'un seul train de sept heures'),
    ], chk('Si tu enlèves le groupe entre les virgules, la phrase tient-elle ?',
        ['Oui, entièrement', 'Non, elle casse'], 0,
        "Ma sœur arrive vendredi : la phrase est complète. EN: the sentence is complete without it.")),
    grp('Sans virgule, elle trie', [
      it(E(1151), 'plusieurs sœurs, et on choisit'),
      it(E(1156), 'seulement ceux qui arrivent en retard'),
      it(E(1163), 'seulement celle qui a reçu hier'),
      it(E(1158), 'seulement celui rempli ce matin'),
    ], chk("Que fait la relative quand il n'y a pas de virgule ?",
        ['elle ajoute une information', 'elle dit lequel'], 1,
        "Sans virgule, elle sert à choisir. EN: with no comma, it identifies.")),
    grp('Le verbe principal arrive après', [
      it(E(1164), "la phrase repart sur m'a écrit"),
      it(E(1166), 'deux relatives, puis est chez le notaire'),
      it(E(1165), "la phrase repart sur m'a reconnu"),
      it(E(1159), 'la phrase repart sur est pleine de monde'),
    ], chk("Dans « Un ami que je n'avais pas vu depuis dix ans m'a écrit », quel est le verbe principal ?",
        ['avais vu', 'a écrit'], 1,
        "La relative finit, et la phrase reprend son verbe. EN: the clause ends and the sentence takes its verb back.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['milieu', 'relative'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Cinq phrases qui repartent après la relative',
  frSub: 'Le verbe principal attend son tour',
  examples: [
    ex(E(1152), 'le verbe principal est au bout : est au sous-sol'),
    ex(E(1153), 'le verbe principal est attend'),
    ex(E(1157), 'le verbe principal est attendent'),
    ex('fr.b2.maison.069', 'le verbe principal est coûtent'),
    ex('fr.b2.maison.060', 'le verbe principal est étaient'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['milieu'],
};

/** CHOOSE. Both punctuations are legal; they say different things about how
 *  many sisters, neighbours or bikes there are. */
const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La virgule change le nombre',
  groups: [
    ctl('Une seule sœur', "Tu n'as qu'une sœur et tu dis où elle vit. Tu écris...",
        ['Ma sœur qui habite à Sherbrooke arrive vendredi.', 'Ma sœur, qui habite à Sherbrooke, arrive vendredi.'], 1,
        "Deux virgules : c'est un ajout, pas un tri. EN: two commas make it an aside."),
    ctl('Trois sœurs', "Tu as trois sœurs et une seule arrive. Tu écris...",
        ['Ma sœur qui habite à Sherbrooke arrive vendredi.', 'Ma sœur, qui habite à Sherbrooke, arrive vendredi.'], 0,
        "Sans virgule, la relative dit laquelle. EN: with no comma, the clause identifies."),
    ctl('Une virgule seule', "Tu écris « Mon voisin, qui travaille de nuit dort le jour. » Que manque-t-il ?",
        ['rien', 'la seconde virgule', 'le verbe principal'], 1,
        "On encadre des deux côtés, ou pas du tout. EN: fence it on both sides, or not at all."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['milieu'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs au milieu',
  errors: [
    { wrong: 'Mon voisin, qui travaille de nuit dort toute la journée.',
      right: 'Mon voisin, qui travaille de nuit, dort toute la journée.',
      why: "On ouvre la parenthèse et on oublie de la fermer. Les deux virgules vont ensemble. EN: the bracket is opened and never closed." },
    { wrong: "Un ami que je n'avais pas vu depuis dix ans.",
      right: "Un ami que je n'avais pas vu depuis dix ans m'a écrit hier.",
      why: "La relative est si longue qu'on croit la phrase finie. Il manque le verbe principal. EN: the clause is so long that the main verb gets forgotten." },
    { wrong: 'Ma sœur arrive vendredi, qui habite à Sherbrooke.',
      right: 'Ma sœur, qui habite à Sherbrooke, arrive vendredi.',
      why: "En anglais on peut repousser la suite, et ici la relative se colle au mauvais nom. EN: moved to the end, the clause attaches to the wrong noun." },
    { wrong: "La dame, qui m'a reçu hier, n'est pas là. Il y en avait trois.",
      right: "La dame qui m'a reçu hier n'est pas là. Il y en avait trois.",
      why: "Avec trois employées, il faut trier, donc pas de virgule. EN: with three clerks you need to identify, so no commas." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['milieu', 'relative'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('La place', 'Où se met la relative ?',
      ['à la fin de la phrase', 'juste après son nom'], 1,
      "Même au milieu, elle colle à son nom. EN: even mid-sentence, it sticks to its noun."),
  ctl('Les virgules', 'Deux virgules autour de la relative signifient...',
      ['un ajout', 'un tri', 'une erreur'], 0,
      "Ma sœur, qui habite à Sherbrooke : je n'en ai qu'une. EN: an aside, so there is only one."),
  ctl('Le verbe', 'Après la relative, que doit-il rester ?',
      ['rien', 'le verbe de la phrase principale'], 1,
      "Un ami que je n'avais pas vu m'a écrit. EN: the main verb still has to come."),
], ['milieu', 'relative']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: 'Au milieu de la phrase',
    opener: {
      line: "Deux virgules disent que tu n'as qu'une sœur : ici tu apprends ce que ta ponctuation raconte. EN: Two commas say you only have one sister: here you learn what your punctuation is telling people.",
      imageRef: 'lessons/qui-que/act09.jpg',
    },
    sections: [],
    milestone: "Tu glisses une relative au milieu d'une phrase et tu la termines quand même. EN: You can slide a relative clause into the middle of a sentence and still finish the sentence.",
    estScreens: 23, restPoints: ['a9-construire'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_CONSTRUIRE, A9_EXEMPLES, A9_CHOISIR, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — CE QUI, CE QUE (APERÇU)
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'Le carnet noir',
  frSub: "Quand il n'y a pas de nom devant",
  setting: "De retour au bureau des objets trouvés, Théo veut dire ce qui compte le plus pour lui. Il n'y a aucun nom à reprendre.",
  bubbles: [
    { from: 'coach', fr: 'Dites-moi ce qui compte le plus dans ce sac.', en: 'Tell me what matters most in this bag.' },
    { from: 'user', fr: "Le carnet qui compte le plus, c'est le noir.", en: 'The notebook that matters most is the black one.', warn: 'ici il y a un nom : carnet' },
    { from: 'coach', fr: 'Et si vous ne nommez rien du tout.', en: 'And if you name nothing at all.' },
    { from: 'user', fr: "Ce qui compte pour moi, c'est le carnet.", en: 'What matters to me is the notebook.' },
    { from: 'coach', fr: 'Voilà. Sans nom devant, on met ce.', en: 'There. With no noun in front, you put ce.' },
    { from: 'user', fr: 'Et le test, il change.', en: 'And the test, does it change.' },
    { from: 'coach', fr: 'Pas du tout. Ce qui, ce que : tu regardes toujours derrière.', en: 'Not at all. Ce qui, ce que: you still look behind.' },
  ],
  closing: { fr: 'Un mot de plus devant, et le reste ne bouge pas.', en: 'One extra word in front, and the rest does not move.' },
  audio: REC('rec-b1-11-carnet'),
  say: REFRAME,
  terms: ['neutre'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-test',
  title: 'Quatre cartes sur ce',
  frSub: 'Un aperçu, pas la leçon entière',
  hint: 'Quatre cartes. Cherche le nom de devant.',
  audio: REC('rec-b1-11-neutre'),
  say: REFRAME,
  terms: ['neutre'],
  cards: [
    { head: 'Avec un nom devant', label: 'ce que tu sais déjà',
      fr: 'le carnet qui compte le plus',
      sub: '[luh kar-NEH kee kohⁿt luh PLÜ]',
      body: "Le nom est là, alors qui ou que suffit. EN: the noun is there, so qui or que on its own is enough." },
    { head: 'Sans nom devant', label: 'ce qui',
      fr: "Ce qui m'inquiète, c'est le prix.",
      sub: '[suh kee mehⁿ-KYET] · [seh luh PREE]',
      body: "Rien à reprendre, alors ce sert de nom, et qui le suit. EN: with nothing to pick up, ce acts as the noun." },
    { head: 'Le test ne bouge pas', label: 'ce que',
      fr: "Ce que je cherche, c'est un sac bleu.",
      sub: '[suh kuh zhuh SHEHRSH] · [seh tuhⁿ sak BLUH]',
      body: `${REFRAME} je est derrière, donc ce que. EN: ${REFRAME_EN}` },
    { head: 'La leçon complète arrive', label: Cap(LEQUEL_REF),
      fr: 'ce qui · ce que · ce dont',
      sub: '[suh KEE] · [suh KUH] · [suh DOHⁿ]',
      body: `Ici tu reconnais les deux premiers. ${Cap(LEQUEL_REF)} donne le système entier. EN: here you only need to recognise the first two.` },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois groupes sans nom devant',
  groups: [
    grp('ce qui, rien derrière', [
      it(E(1167), 'inquiète suit tout de suite'),
      it(E(1169), "s'est passé suit tout de suite"),
      it(E(1172), 'ne va pas suit tout de suite'),
      it(E(1175), 'reste suit tout de suite'),
    ], chk('Pourquoi ce qui dans ces quatre phrases ?',
        ['parce que ce est masculin', 'parce que rien ne suit le trou'], 1,
        "Le test est le même qu'avant. EN: the test is unchanged.")),
    grp('ce que, un sujet derrière', [
      it(E(1168), 'je suit le trou'),
      it(E(1170), 'tu suit le trou'),
      it(E(1173), 'tu suit le trou'),
      it(E(1174), 'je suit le trou'),
    ], chk('Et ici, quel mot arrive derrière le trou ?',
        ['un verbe', 'un sujet'], 1,
        "je, tu : un sujet, donc ce que. EN: a subject, so ce que.")),
    grp('Reprendre toute une phrase', [
      it(E(1178), 'ce qui reprend la phrase entière'),
      it('fr.b1.maison.009', 'ce qui reprend la hausse du loyer'),
      it('fr.a1.au-restaurant.193', "ce que reprend ce qui a été commandé"),
      it('fr.b1.heure-et-date.053', "ce que reprend ce que l'avenir réserve"),
    ], chk('« Il pleut depuis trois jours, ce qui complique le déménagement. » Que reprend ce qui ?',
        ['la pluie seulement', 'toute la phrase de devant', 'le déménagement'], 1,
        "Il n'y a pas un nom, mais toute une situation. EN: it picks up a whole situation, not a noun.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neutre', 'repere'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-test',
  title: 'Quatre choses à retenir sur ce',
  frSub: 'Et ce qui vient plus tard',
  points: [
    "Pas de nom devant : tu écris ce, puis qui ou que. EN: no noun in front means ce, then qui or que.",
    "Le test ne change pas : tu regardes toujours derrière le trou. EN: the test is unchanged; you still look behind the gap.",
    "ce qui peut reprendre toute une phrase, pas seulement un mot. EN: ce qui can pick up a whole sentence.",
    `${Cap(LEQUEL_REF)} donne le système entier, avec ce dont et lequel. EN: the full system comes later.`,
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['neutre'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'ce qui ou ce que',
  frSub: 'Huit phrases, un seul geste',
  lines: [
    ln(E(1167)), ln(E(1168)), ln(E(1169)), ln(E(1170)),
    ln(E(1172)), ln(E(1173)), ln(E(1174)), ln(E(1175)),
  ],
  questions: [
    { q: "Première phrase : qu'est-ce qui inquiète la personne ?", opts: ['le prix', 'le sac'], correct: 0,
      why: "« c'est le prix ». EN: the price." },
    { q: 'Deuxième phrase : que cherche-t-elle ?', opts: ['un carnet', 'un sac bleu'], correct: 1,
      why: "« c'est un sac bleu ». EN: a blue bag." },
    { q: 'Troisième phrase : le mot après ce est-il qui ou que ?', opts: ['qui', 'que'], correct: 0,
      why: "« ce qui s'est passé » : rien ne suit le trou. EN: nothing follows the gap." },
    { q: 'Quatrième phrase : et ici ?', opts: ['qui', 'que'], correct: 1,
      why: "« ce que tu veux dire » : tu suit le trou. EN: tu follows the gap." },
    { q: 'Sixième phrase : que demande-t-on de raconter ?', opts: ['ce que tu as vu', 'ce qui ne va pas'], correct: 0,
      why: "« Dis-moi ce que tu as vu. » EN: what you saw." },
    { q: 'Septième phrase : que demande la personne ?', opts: ['un carnet', 'un reçu', 'un sac'], correct: 1,
      why: "« c'est un reçu ». EN: a receipt." },
  ],
  audio: REC('rec-b1-11-neutre-ecoute'),
  say: REFRAME,
  terms: ['neutre'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Le nom', 'Quand écris-tu ce devant qui ou que ?',
      ['toujours', "quand aucun nom ne précède", "jamais à l'écrit"], 1,
      "Ce qui m'inquiète : il n'y a aucun nom à reprendre. EN: there is no noun to pick up."),
  ctl('Le test', 'Le test change-t-il avec ce ?',
      ['Oui', 'Non'], 1,
      `${REFRAME} EN: ${REFRAME_EN}`),
  ctl('La suite', 'Cette leçon te donne-t-elle tout le système ?',
      ['oui, entièrement', 'non, seulement ce qui et ce que'], 1,
      `${Cap(LEQUEL_REF)} ajoute ce dont et lequel. EN: the rest comes later.`),
], ['neutre', 'repere']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Ce qui, ce que',
    opener: {
      line: "Parfois il n'y a aucun nom à reprendre : ici tu apprends le petit mot qui prend sa place. EN: Sometimes there is no noun to pick up: here you meet the small word that stands in for it.",
      imageRef: 'lessons/qui-que/act10.jpg',
    },
    sections: [],
    milestone: "Tu reconnais ce qui et ce que, et tu appliques le même test qu'avant. EN: You can recognise ce qui and ce que, and you apply exactly the same test as before.",
    estScreens: 17, restPoints: ['a10-construire'],
  },
  sections: [A10_HISTOIRE, A10_CARTES, A10_CONSTRUIRE, A10_FOCUS, A10_ECOUTE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — FAIRE DES PHRASES LONGUES
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le modèle que tu vas imiter',
  frSub: 'Six relatives dans huit lignes',
  text: READING_ANNONCE,
  glossary: [
    { word: 'de taille moyenne', en: 'medium sized', note: 'Ni grand ni petit.' },
    { word: 'le cégep', en: 'the college', note: "L'établissement entre le secondaire et l'université, au Québec." },
    { word: 'déchirée', en: 'torn', note: 'Le tissu est ouvert, il y a un trou.' },
    { word: 'le reconnaître', en: 'to recognise it', note: "Savoir avec certitude que c'est celui-là." },
  ],
  questions: [
    { q: "Quelle phrase dit de quel sac il s'agit ?", a: "« Le sac que j'ai perdu jeudi dernier est un sac à dos bleu. » La relative désigne un sac parmi tous les sacs bleus." },
    { q: 'Où est la relative encadrée par deux virgules, et que fait-elle ?', a: "« Le sac, que j'utilise tous les jours, a une poche déchirée. » Elle ajoute une information, elle ne trie pas." },
    { q: "Quel participe s'accorde, et pourquoi ?", a: "« les papiers que j'ai laissés » : les papiers sont passés devant le verbe, donc le participe les suit." },
    { q: 'Pourquoi « Ce qui compte vraiment pour moi » et non « Qui compte » ?', a: "Il n'y a aucun nom devant à reprendre, donc ce prend sa place." },
  ],
  audio: REC('rec-b1-11-annonce'),
  say: REFRAME,
  terms: ['chaine', 'accord'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: "Cinq étapes avant d'écrire",
  frSub: 'Le plan de la description',
  steps: [
    "Écris tes faits en phrases courtes, sans te relire. EN: write your facts as short sentences, without rereading.",
    "Cherche le nom qui revient d'une phrase à l'autre. EN: find the noun that comes back from one sentence to the next.",
    "Colle les deux, et regarde derrière le trou pour choisir le mot. EN: join the two, and look behind the gap to pick the word.",
    "Si le verbe est au passé composé avec avoir, vérifie la fin du participe. EN: with avoir in the past, check the ending of the participle.",
    "Relis chaque phrase à voix haute : le verbe principal doit arriver. EN: read each sentence aloud; the main verb still has to arrive.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chaine', 'accord'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Quatre descriptions qui doivent tenir',
  cases: [
    { situation: 'Tu déclares un objet perdu', fr: "Le sac que j'ai perdu jeudi dernier est un sac à dos bleu.", en: 'The bag I lost last Thursday is a blue rucksack.' },
    { situation: 'Tu donnes le détail qui distingue', fr: "L'étiquette qui est sur la poignée porte mon nom.", en: 'The label on the handle has my name on it.' },
    { situation: 'Tu dis ce qui compte le plus', fr: "Ce qui compte pour moi, c'est le carnet.", en: 'What matters to me is the notebook.' },
    { situation: 'Tu expliques comment te joindre', fr: 'Voici le numéro que tu peux composer entre neuf heures et midi.', en: 'Here is the number you can ring between nine and noon.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chaine', 'neutre'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'De retour au comptoir',
  frSub: 'Six tours, à voix haute',
  setting: "Tu retournes au bureau des objets trouvés, cette fois pour une valise. Madame Prévost reprend son formulaire.",
  turns: [
    {
      ai: "Bonjour. Décrivez-moi ce que vous avez perdu.", en: 'Good morning. Describe what you lost.',
      user: "Je cherche une valise noire que je ne retrouve plus.",
      userEn: 'I am looking for a black case I cannot find any more. (que, because je follows it.)',
      alts: [
        { fr: "La valise que j'ai perdue est noire.", en: 'The case I lost is black. (perdue agrees, because la valise moved in front.)' },
        { fr: "Je cherche une valise qui est noire et assez grande.", en: 'I am looking for a case that is black and fairly big. (qui, because nothing follows it.)' },
      ],
    },
    {
      ai: "J'en ai cinq noires ici. Donnez-moi un détail.", en: 'I have five black ones here. Give me a detail.',
      user: "La poignée que mon frère a réparée est un peu tordue.",
      userEn: 'The handle my brother repaired is a little bent. (réparée agrees with la poignée.)',
      alts: [
        { fr: "Il y a une étiquette qui porte mon nom sur le côté.", en: 'There is a label with my name on it on the side.' },
        { fr: "La roue qui manque est celle de droite.", en: 'The wheel that is missing is the right one. (Two clauses, both qui.)' },
      ],
    },
    {
      ai: "Et à l'intérieur, qu'est-ce qu'il y a.", en: 'And inside, what is there.',
      user: "Les papiers que j'ai laissés dedans sont importants.",
      userEn: 'The papers I left inside matter. (laissés agrees with les papiers.)',
      alts: [
        { fr: "Le livre qui était dedans appartient à la bibliothèque.", en: 'The book that was inside belongs to the library.' },
        { fr: "Ce qui compte pour moi, c'est le carnet noir.", en: 'What matters to me is the black notebook. (No noun in front, so ce qui.)' },
      ],
    },
    {
      ai: "Quand et où l'avez-vous perdue.", en: 'When and where did you lose it.',
      user: "Dans le bus qui va de la station Berri au cégep, vers dix-sept heures.",
      userEn: 'On the bus that runs from Berri station to the college, around five. (qui, because va follows it.)',
      alts: [
        { fr: "Le bus que je prends tous les jours passe par Berri.", en: 'The bus I take every day goes via Berri. (que, because je follows it.)' },
        { fr: "Jeudi dernier, dans le bus que nous avons pris après le cours.", en: 'Last Thursday, on the bus we took after class.' },
      ],
    },
    {
      ai: "Je vais regarder. Comment peut-on vous joindre.", en: 'I will go and look. How can we reach you.',
      user: "Voici le numéro que vous pouvez composer entre neuf heures et midi.",
      userEn: 'Here is the number you can ring between nine and noon. (que, because vous follows it.)',
      alts: [
        { fr: "L'adresse que j'ai écrite sur le formulaire est la bonne.", en: 'The address I wrote on the form is the right one.' },
        { fr: "La personne qui répond le matin, c'est moi.", en: 'The person who answers in the morning is me. (qui, because répond follows it.)' },
      ],
    },
    {
      ai: "Très bien. Je vous rappelle demain.", en: 'Very good. I will call you back tomorrow.',
      user: "Merci d'avance à la personne qui la rapportera.",
      userEn: 'Thank you in advance to whoever brings it back. (qui, because rapportera follows it.)',
      alts: [
        { fr: "Je vous remercie pour le temps que vous m'avez donné.", en: 'Thank you for the time you gave me.' },
        { fr: "Merci. Le formulaire que j'ai rempli reste chez vous.", en: 'Thank you. The form I filled in stays with you. (rempli does not change: le formulaire is masculine.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['chaine', 'accord', 'neutre'],
};

const A11_TASK: TaskSection = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris ton annonce',
  frSub: 'Mission écrite',
  brief: "Tu as perdu quelque chose : un sac, une valise, un manteau, un instrument, un animal. Tu écris une annonce que le bureau des objets trouvés va afficher. Les gens qui la liront ne connaissent pas ton objet : il faut qu'ils puissent le reconnaître parmi dix autres du même genre.",
  briefEn: 'You have lost something. Write a notice for the lost property office. The people reading it must be able to pick your thing out from ten others like it.',
  produce: "Écris une annonce de 110 à 150 mots avec au moins quatre relatives : au moins une avec qui, au moins deux avec que, au moins une accordée au participe passé, et une relative encadrée par deux virgules.",
  responseSpec: { kind: 'text', minWords: 110, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'choix', label: 'Le bon mot à chaque fois', maxPoints: 4,
        descriptors: [
          "4 : Chaque relative porte le bon mot, et le choix suit ce qui vient derrière, jamais le nom de devant.",
          "3 : Une seule relative se trompe, et le reste est juste.",
          "2 : Plusieurs relatives prennent qui pour que ou le contraire, souvent quand le nom est une personne.",
          "1 : Le choix semble fait au hasard, ou toujours avec le même mot.",
        ],
      },
      {
        key: 'presence', label: 'Aucun mot sauté', maxPoints: 3,
        descriptors: [
          "3 : Le petit mot est écrit partout où il faut, et qui n'est jamais élidé.",
          "2 : Une phrase laisse deux sujets se toucher, ou porte un qu' à la place de qui.",
          "1 : Plusieurs phrases s'arrêtent au milieu parce que le mot manque.",
        ],
      },
      {
        key: 'accord', label: "L'accord du participe", maxPoints: 3,
        descriptors: [
          "3 : Chaque participe après que et avoir s'accorde avec le nom passé devant, et aucun ne s'accorde après qui.",
          "2 : Un accord manque, ou un accord de trop apparaît après qui.",
          "1 : Les participes restent tous au masculin singulier, ou s'accordent partout sans distinction.",
        ],
      },
      {
        key: 'tache', label: 'La mission complète', maxPoints: 2,
        descriptors: [
          "2 : L'annonce fait 110 à 150 mots, elle porte au moins quatre relatives dont une entre deux virgules, et un lecteur peut reconnaître l'objet.",
          "1 : Il manque une des quatre relatives, ou la longueur est hors des bornes, ou la description conviendrait à n'importe quel objet du même genre.",
        ],
      },
    ],
  },
  scaffold: [
    "Le sac que j'ai perdu",
    "Le détail qui permet de le reconnaître",
    "Je l'ai laissé dans",
    "Les papiers que j'ai laissés",
    ", que j'utilise tous les jours,",
    "Ce qui compte pour moi",
    'Voici le numéro que',
    "Merci à la personne qui",
  ],
  modelAnswer: "PERDU : étui à violon noir\n\nL'étui que j'ai perdu samedi dernier est un étui à violon noir, de taille normale. Je l'ai laissé dans le train qui va de Québec à Montréal, vers vingt heures.\n\nLe violon qui était dedans appartient à l'école de musique du quartier, et les partitions que j'ai rangées dans la poche avant sont les seules copies que je possède.\n\nL'étui, que j'utilise depuis six ans, porte deux autocollants bleus sur le couvercle : c'est le détail qui permet de le reconnaître parmi les autres. La poignée que mon frère a réparée l'an dernier est un peu tordue.\n\nCe qui compte vraiment pour moi, ce sont les partitions. Voici le numéro que vous pouvez composer entre neuf heures et midi.\n\nMerci d'avance à la personne qui le rapportera au bureau des objets trouvés.",
  modelAnswerEn: "LOST: black violin case. The case I lost last Saturday is a normal sized black violin case. I left it on the train that runs from Quebec City to Montreal, around eight in the evening. The violin that was inside belongs to the local music school, and the scores I put in the front pocket are the only copies I own. The case, which I have been using for six years, has two blue stickers on the lid: that is the detail that lets you recognise it among the others. The handle my brother repaired last year is slightly bent. What really matters to me is the scores. Here is the number you can ring between nine and noon. Thank you in advance to whoever brings it back to the lost property office.",
  watchFor: [
    { pattern: "The pronoun left out on the English pattern: « le sac je cherche », « les papiers j'ai laissés », « le train nous prenons ».",
      criterion: 'presence',
      feedback: "Il manque le petit mot. En anglais on peut l'effacer, en français jamais : écris « le sac que je cherche ».",
      ref: 'a7-piege' },
    { pattern: "qui elided before a vowel: « le livre qu'est dedans », « la personne qu'a trouvé ».",
      criterion: 'presence',
      feedback: "qui garde toujours ses trois lettres. Écris « le livre qui est dedans ».",
      ref: 'a5-cartes' },
    { pattern: "que left unelided before a vowel: « le message que on attend », « le pull que Anne a choisi ».",
      criterion: 'presence',
      feedback: "Devant une voyelle, le e de que tombe : « qu'on attend », « qu'Anne a choisi ».",
      ref: 'a5-construire' },
    { pattern: "que chosen where nothing follows the gap: « le livre que était dedans », « la rue que mène à la gare ».",
      criterion: 'choix',
      feedback: "Regarde derrière le trou : il n'y a aucun sujet, donc qui. « le livre qui était dedans ».",
      ref: 'a2-construire' },
    { pattern: "qui chosen where a subject already follows: « le sac qui j'ai perdu », « les gens qui tu connais ».",
      criterion: 'choix',
      feedback: "j' et tu sont déjà des sujets, donc la place est prise. Écris que.",
      ref: 'a3-piege' },
    { pattern: "The pronoun chosen by the antecedent: qui for every person and que for every thing, whatever follows.",
      criterion: 'choix',
      feedback: "Le nom de devant ne décide rien. Une chose peut prendre qui, une personne peut prendre que.",
      ref: 'a6-erreurs' },
    { pattern: "A doubled subject after qui: « la personne qui elle a trouvé », « le train qui il part ».",
      criterion: 'choix',
      feedback: "qui EST déjà le sujet. Un second sujet est un de trop.",
      ref: 'a2-erreurs' },
    { pattern: "The participle left in the masculine singular after a preceding object: « la valise que j'ai perdu », « les photos que j'ai pris ».",
      criterion: 'accord',
      feedback: "que a fait passer le nom devant le verbe, alors le participe le suit : perdue, prises.",
      ref: 'a8-piege' },
    { pattern: "An agreement added after qui, where nothing has moved in front: « la dame qui a trouvée mon sac ».",
      criterion: 'accord',
      feedback: "Après qui, le nom est sujet, pas complément. Aucun accord : « qui a trouvé ».",
      ref: 'a8-cartes' },
    { pattern: "Only one comma around an inserted clause: « Le sac, que j'utilise tous les jours a une poche déchirée. »",
      criterion: 'tache',
      feedback: "On encadre des deux côtés, ou pas du tout. Remets la seconde virgule après « jours ».",
      ref: 'a9-erreurs' },
    { pattern: "A sentence that opens a long clause and never reaches its main verb.",
      criterion: 'tache',
      feedback: "Relis à voix haute : après la relative, la phrase doit repartir sur son verbe principal.",
      ref: 'a9-construire' },
    { pattern: "A run of short separate sentences with no clause at all, so nothing identifies the object among ten like it.",
      criterion: 'tache',
      feedback: "Quatre phrases vraies ne désignent aucun objet. Colle-les : « le sac que j'ai perdu contient... »",
      ref: 'a1-scene' },
  ],
  graderNotes: [
    'Word count EXCLUDES the heading line (PERDU : ...) and any signature. Count the body only, with 10% tolerance (99-165) before criterion « tache » loses its point.',
    'DO NOT SCORE dont, où, lequel, duquel or any prepositional relative (à qui, avec qui, chez qui). They belong to later lessons and have not been taught. A learner who uses one correctly is not rewarded and one who uses it wrongly is not penalised.',
    'ce qui and ce que were PREVIEWED in act 10 only. Accept them when correct; do not penalise a learner who avoids them, and do not penalise ce que where ce qui was wanted.',
    'Judge the pronoun choice by what follows it in the learner text, not by what the learner probably meant. A sentence can be right for a different reason than intended and still scores.',
    'Participle agreement is judged only after que plus avoir. Agreement with être (elle est partie) belongs to a2.21 and is out of scope here.',
    'An agreement that is correct but inaudible (perdue, laissés, réservées) counts exactly as much as an audible one (écrite, prise). The criterion is written accuracy.',
    'Writer gender is unknown: judge adjective agreement for internal consistency only.',
    'Accept any lost object and any francophone city. Accept regional vocabulary (cégep, char, sac à dos, sacoche, valise, malle).',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** Say the whole lesson out loud. Every authored row carries `voiceflash`;
 *  NOT ONE imported row does, so none may be added here (corpus §E). */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes phrases longues à voix haute',
  frSub: 'Sans couper au milieu',
  skill: 'speak',
  itemIds: ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
  audio: AUDIO,
  say: REFRAME,
  terms: ['chaine', 'repere'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la relative', v: 'deux phrases, un nom écrit une fois', say: "Le sac que j'ai perdu est bleu.",
      detail: { title: 'La relative', body: "Le nom revient dans les deux phrases, et le petit mot le reprend. EN: the noun comes back in both sentences, and the little word picks it up.", say: 'La dame qui a trouvé mon sac travaille au café.' } },
    { k: 'le repère', v: 'regarde derrière, jamais devant', say: 'La rue qui mène à la gare est fermée.',
      detail: { title: 'Le repère', body: `${REFRAME} Le nom de devant ne décide rien. EN: ${REFRAME_EN}`, say: 'Le chemin que nous prenons monte au parc.' } },
    { k: "l'élision", v: "qu' existe, qu'i n'existe pas", say: "Le train qu'ils prennent part à sept heures.",
      detail: { title: "L'élision", body: "que perd son e devant une voyelle. qui ne perd jamais rien. EN: que drops its e before a vowel; qui never does.", say: 'La voiture qui est devant la porte bloque le passage.' } },
    { k: 'le mot fixe', v: "l'anglais l'efface, le français non", say: 'Le livre que je lis est passionnant.',
      detail: { title: 'Le mot fixe', body: "Sans lui, un nom et un sujet se touchent et la phrase s'arrête. EN: without it, a noun and a subject touch and the sentence stalls.", say: "Les gens que tu connais habitent près d'ici." } },
    { k: "l'accord", v: 'après que et avoir, le participe suit', say: "La lettre que j'ai écrite fait deux pages.",
      detail: { title: "L'accord", body: "Parfois on l'entend, écrite et prise. Parfois non, perdue et parlée. EN: sometimes you hear it, sometimes only the pen does.", say: "Les photos que j'ai prises à Québec sont dans l'album." } },
    { k: 'au milieu', v: 'deux virgules, ou aucune', say: 'Ma sœur, qui habite à Sherbrooke, arrive vendredi.',
      detail: { title: 'Au milieu', body: "Deux virgules ajoutent une information ; pas de virgule, et la relative dit lequel. EN: two commas add information; no comma identifies which one.", say: 'Ma sœur qui habite à Sherbrooke arrive vendredi.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere', 'accord', 'milieu'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu colles deux phrases en une, tu choisis ton mot en regardant derrière le trou, tu n'élides plus qui, tu n'effaces plus que, et tu accordes le participe quand le nom est passé devant. Le piège qui reste est l'accord muet : perdue, laissés, réservées ne s'entendent pas, et c'est exactement pour ça qu'on les oublie. Avant l'examen, reprends ton annonce et souligne chaque qui et chaque que. Pour chacun, écris à côté le mot qui le suit. Si tu ne peux pas nommer ce mot, c'est cette phrase-là qu'il faut réécrire. EN: Underline every qui and que in your notice and name the word that follows each one; the one you cannot name is the one to rewrite.",
  stats: [
    { k: 'Le repère', v: 'derrière le trou, jamais devant' },
    { k: 'Le piège', v: "l'accord qui ne s'entend pas" },
    { k: 'Le mot fixe', v: 'jamais effacé, jamais élidé pour qui' },
    { k: 'La suite', v: 'dont, où, lequel, ce qui et ce que' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight, one per
 *  act from act 1 to act 10 plus an integration round. Each round's target is
 *  a distinct errorTrigger, so a failed round fires that round's own drill.
 *
 *  `fold()` strips commas, accents and apostrophes, so NO typed answer here
 *  turns on one. In particular the comma contrast of act 9 (« ma sœur, qui »
 *  against « ma sœur qui ») and the elision of act 5 are tested with mcq
 *  ONLY: typed, both members of each pair fold onto the same string. */

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
      id: 'r1-relative', label: 'La soudure', targets: ['phrases-hachees'],
      questions: [
        mc("Pourquoi quatre phrases courtes ne suffisaient-elles pas au comptoir ?", ['elles étaient fausses', 'elles étaient trop longues', 'elles ne désignaient aucun sac en particulier'], 2, "Quatre sacs bleus répondent aux quatre en même temps. EN: four blue bags answer all four at once.", 'a1-scene'),
        tI('Colle ces deux phrases en une seule.', "J'ai perdu un sac. Le sac est bleu.", "Le sac que j'ai perdu est bleu.", "Le nom n'est écrit qu'une fois, et que le reprend. EN: the noun is written once and que picks it up.", 'a1-coller'),
        mc('Que remplace le petit mot dans une relative ?', ['le verbe', 'le sujet de la phrase', 'la deuxième apparition du nom'], 2, "Le nom ne se répète pas. EN: the noun is not repeated.", 'a1-coller'),
        eS("J'ai perdu un sac. Le sac contient un livre.", "Le sac que j'ai perdu contient un livre.", "Une seule phrase, et le nom une seule fois. EN: one sentence, and the noun once.", 'a1-reperer'),
        tI('Colle ces deux phrases en une seule.', 'Une dame a trouvé mon sac. Elle travaille au café.', 'La dame qui a trouvé mon sac travaille au café.', "Rien ne suit le trou, donc qui. EN: nothing follows the gap, so qui.", 'a1-reperer'),
        mc('Où se place la relative par rapport à son nom ?', ['juste après lui', 'à la fin de la phrase'], 0, "Elle colle au nom, même au milieu. EN: it sticks to its noun, even mid-sentence.", 'a1-coller'),
        lC('Écoute. Cette phrase désigne-t-elle un seul sac ?', "Le sac que j'ai perdu est bleu.", ['Oui', "Non, n'importe lequel"], 0, "La relative trie parmi les sacs bleus. EN: the clause picks one out.", 'a1-scene'),
        tI('Colle ces deux phrases en une seule.', 'Le bureau ferme à dix-sept heures. Il garde les objets trouvés.', 'Le bureau qui garde les objets trouvés ferme à dix-sept heures.', "La relative se glisse juste après son nom. EN: the clause slides in right after its noun.", 'a1-lecture'),
      ],
    },
    {
      id: 'r2-qui', label: 'qui, le sujet', targets: ['qui-mal-place'],
      questions: [
        mc('Complète : « Le voisin ... habite au-dessus joue de la guitare. »', ['que', 'qui'], 1, "Rien ne suit le trou. EN: nothing follows the gap.", 'a2-construire'),
        mc('Dans « le train qui part à midi », qui part ?', ['le train', 'celui qui parle'], 0, "Le nom de devant fait le verbe. EN: the noun in front does the verb.", 'a2-check'),
        tI('Mets le verbe à la forme qui convient.', 'Les voisins qui (habiter) au-dessus font du bruit.', 'Les voisins qui habitent au-dessus font du bruit.', "Le verbe suit le nom de devant. EN: the verb agrees with the noun in front.", 'a2-cartes'),
        eS('Le collègue qui il me remplace arrive demain.', 'Le collègue qui me remplace arrive demain.', "qui est déjà le sujet, un second est de trop. EN: qui is already the subject.", 'a2-erreurs'),
        tI('Colle ces deux phrases en une seule.', "Je connais quelqu'un. Il répare les vélos.", "Je connais quelqu'un qui répare les vélos.", "Aucun sujet derrière, donc qui. EN: no subject behind, so qui.", 'a2-construire'),
        mc("« Le serveur qui nous apporte l'addition » : nous est-il le sujet ?", ['Non, un complément', 'Oui'], 0, "C'est à nous qu'il apporte. EN: he brings it to us.", 'a2-check'),
        lC('Écoute. Combien de voisins habitent au-dessus ?', 'Les voisins qui habitent au-dessus jouent de la guitare.', ['un seul', 'plusieurs'], 1, "Le verbe est au pluriel. EN: the verb is plural.", 'a2-ecoute'),
        mc('Complète : « La rue ... mène à la gare est fermée. »', ['que', 'qui'], 1, "Une chose peut agir. EN: a thing can act.", 'a2-erreurs'),
      ],
    },
    {
      id: 'r3-que', label: 'que, le complément', targets: ['que-mal-place'],
      questions: [
        mc('Complète : « Le film ... nous regardons dure trois heures. »', ['que', 'qui'], 0, "nous occupe déjà la place du sujet. EN: nous already fills the subject slot.", 'a3-construire'),
        tI('Colle ces deux phrases en une seule.', 'Voici le formulaire. Tu dois le signer.', 'Voici le formulaire que tu dois signer.', "tu arrive derrière, donc que. EN: tu arrives behind it, so que.", 'a3-cartes'),
        eS('Le pain qui la boulangère met de côté est pour nous.', 'Le pain que la boulangère met de côté est pour nous.', "La boulangère est le sujet, donc la place est prise. EN: the baker is the subject.", 'a3-piege'),
        mc('Le sujet derrière que peut-il être un nom entier ?', ['Oui', 'Non, seulement un pronom'], 0, "« que le bureau garde ». EN: a whole noun phrase works.", 'a3-check'),
        tI('Complète avec le bon mot.', 'Les mots ... personne ne comprend restent au tableau.', 'Les mots que personne ne comprend restent au tableau.', "personne est un sujet, même négatif. EN: personne is still a subject.", 'a3-construire'),
        mc("Dans « le café que je bois », qui boit ?", ['le café', 'celui qui parle'], 1, "je fait le verbe. EN: je does the verb.", 'a3-histoire'),
        lC('Écoute. Le film est-il celui qui regarde ?', 'Le film que nous regardons ce soir dure trois heures.', ['Oui', 'Non, il est regardé'], 1, "nous regardons, et le film est regardé. EN: we watch, the film is watched.", 'a3-cartes'),
        eS("L'appartement qui mes parents louent donne sur la cour.", "L'appartement que mes parents louent donne sur la cour.", "mes parents est le sujet. EN: mes parents is the subject.", 'a3-piege'),
      ],
    },
    {
      id: 'r4-repere', label: 'Le repère', targets: ['choix-par-traduction'],
      questions: [
        mc('Pour choisir, tu regardes...', ['la traduction anglaise', 'le nom de devant', 'ce qui suit le trou'], 2, `${REFRAME} EN: ${REFRAME_EN}`, 'a4-check'),
        mc('Le mot anglais that aide-t-il à trancher ?', ['Non, il couvre les deux rôles', 'Oui, toujours'], 0, "That sert au sujet et au complément. EN: that serves both roles.", 'a4-piege'),
        tI('Complète avec le bon mot.', 'La femme ... tu vois au téléphone est ma cheffe.', 'La femme que tu vois au téléphone est ma cheffe.', "tu est derrière. EN: tu is behind it.", 'a4-construire'),
        eS("Le colis que arrive demain vient de Lyon.", 'Le colis qui arrive demain vient de Lyon.', "Rien ne suit le trou. EN: nothing follows the gap.", 'a4-piege'),
        mc('Complète : « Le repas ... nous attend à la maison sent très bon. »', ['qui', 'que'], 0, "nous est complément : c'est le repas qui attend. EN: the meal is doing the waiting.", 'a4-construire'),
        tI('Complète avec le bon mot.', 'Le chemin ... monte au parc est plus court.', 'Le chemin qui monte au parc est plus court.', "monte suit tout de suite. EN: monte follows straight away.", 'a4-table'),
        lC('Écoute. Qui interroge dans cette phrase ?', "L'étudiante que le prof interroge apprend plus vite.", ['le prof', "l'étudiante"], 0, "le prof est le sujet derrière que. EN: the teacher is the subject behind que.", 'a4-cartes'),
        mc('Quel geste te fait gagner le plus de temps ?', ['traduire la phrase', 'compter les mots', 'cacher le nom de devant'], 2, "Le nom ne décide rien, alors il peut disparaître. EN: the noun decides nothing, so hide it.", 'a4-hacks'),
      ],
    },
    {
      id: 'r5-elision', label: "L'élision", targets: ['elision-fautive'],
      questions: [
        mc('Devant une voyelle, que devient...', ['qui', 'il ne change pas', "qu'"], 2, "qu'elle, qu'on, qu'il. EN: qu elle, qu on, qu il.", 'a5-cartes'),
        mc("La forme qu'est existe-t-elle ?", ['Oui, devant est', 'Non, jamais'], 1, "qui ne s'élide dans aucun cas. EN: qui never elides.", 'a5-check'),
        eS("La voiture qu'est devant la porte bloque le passage.", 'La voiture qui est devant la porte bloque le passage.', "qui garde ses trois lettres. EN: qui keeps its three letters.", 'a5-erreurs'),
        mc('Complète : « Le message ... on attend arrivera ce soir. »', ['qui', 'que', "qu'"], 2, "Devant on, le e de que tombe. EN: before on, the e of que drops.", 'a5-construire'),
        tI('Colle ces deux phrases en une seule.', "Le pull est trop grand. Anne l'a choisi.", "Le pull qu'Anne a choisi est trop grand.", "Anne commence par une voyelle. EN: Anne begins with a vowel.", 'a5-construire'),
        eS("L'homme qu'a ouvert la porte n'a rien dit.", "L'homme qui a ouvert la porte n'a rien dit.", "Rien ne suit le trou, et qui ne s'élide pas. EN: nothing follows, and qui does not elide.", 'a5-erreurs'),
        lC("Écoute. L'apostrophe s'entend-elle dans cette phrase ?", "Le train qu'ils prennent part à sept heures.", ['Non, il faut le test', 'Oui, clairement'], 0, "L'oreille ne tranche pas ; le test, oui. EN: the ear does not settle it; the test does.", 'a5-focus'),
        mc("Tu vois qu'elle dans un texte. Quel mot était-ce ?", ['qui', 'que'], 1, "Seul que porte une apostrophe. EN: only que can carry an apostrophe.", 'a5-check'),
      ],
    },
    {
      id: 'r6-antecedent', label: 'Gens et choses', targets: ['qui-pour-personnes'],
      questions: [
        mc('Une chose peut-elle être suivie de qui ?', ['Non', 'Oui'], 1, "La rue qui mène, le fleuve qui traverse. EN: things take qui too.", 'a6-check'),
        tI('Complète avec le bon mot.', "L'auteur ... je lis vient de Montréal.", "L'auteur que je lis vient de Montréal.", "je est derrière, même si l'auteur est une personne. EN: je is behind it.", 'a6-construire'),
        mc('Combien de mots anglais pour ces deux mots français ?', ['deux', 'un seul', 'trois, et parfois zéro'], 2, "who, which, that, et parfois rien. EN: who, which, that, sometimes nothing.", 'a6-check'),
        eS("Le fleuve que traverse la ville s'appelle le Saint-Laurent.", "Le fleuve qui traverse la ville s'appelle le Saint-Laurent.", "Le fleuve traverse lui-même. EN: the river does the crossing itself.", 'a6-erreurs'),
        tI('Complète avec le bon mot.', 'La table ... est près de la fenêtre est libre.', 'La table qui est près de la fenêtre est libre.', "Rien ne suit le trou. EN: nothing follows the gap.", 'a6-cartes'),
        mc('Le nom de devant change-t-il le choix ?', ['Non, jamais', 'Oui, personne ou chose'], 0, `${REFRAME} EN: ${REFRAME_EN}`, 'a6-construire'),
        lC('Écoute. Le nom est une personne. Le mot est-il qui ?', "L'auteur que je lis vient de Montréal.", ['Oui', 'Non, que'], 1, "je suit, donc que. EN: je follows, so que.", 'a6-ecoute'),
        mc('Complète : « Les enfants ... jouent dans la cour rentrent à cinq heures. »', ['que', 'qui'], 1, "Ce sont eux qui jouent. EN: they are the ones playing.", 'a6-erreurs'),
      ],
    },
    {
      id: 'r7-motfixe', label: 'Le mot fixe', targets: ['relatif-oublie'],
      questions: [
        mc('the book I read fait quatre mots. Et en français ?', ['cinq', 'quatre aussi'], 0, "le livre que je lis. EN: five, and the fifth is que.", 'a7-check'),
        tI('Écris cette phrase en français.', 'the people you know live near here', "Les gens que tu connais habitent près d'ici.", "L'anglais efface le mot, le français non. EN: English deletes it; French does not.", 'a7-flash'),
        eS('Le livre je lis est passionnant.', 'Le livre que je lis est passionnant.', "livre et je se percutent sans que. EN: livre and je collide without que.", 'a7-piege'),
        tI('Écris cette phrase en français.', 'the city we are visiting is very old', 'La ville que nous visitons est très ancienne.', "Le pluriel ne change rien à la règle. EN: the plural changes nothing.", 'a7-table'),
        mc('Y a-t-il un cas où on peut le sauter ?', ["oui, à l'oral", 'oui, dans une phrase courte', 'non, jamais'], 2, "Aucun registre ne l'autorise. EN: no register allows it.", 'a7-check'),
        eS('Le dossier tu veux est dans le tiroir du bas.', 'Le dossier que tu veux est dans le tiroir du bas.', "Une phrase courte cache mieux le trou. EN: a short sentence hides the gap better.", 'a7-piege'),
        lC('Écoute. Combien de verbes dans cette phrase ?', "L'appartement que nous cherchons doit avoir un balcon.", ['un', 'deux'], 1, "cherchons dans la relative, doit dans la principale. EN: one in the clause, one in the main sentence.", 'a7-construire'),
        mc('Pourquoi le mot est-il obligatoire ?', ['pour faire joli', 'parce que la phrase est longue', 'parce que le complément est parti devant'], 2, "La place vide doit être marquée. EN: the gap has to be marked.", 'a7-cartes'),
      ],
    },
    {
      id: 'r8-accord', label: "L'accord", targets: ['accord-oublie'],
      questions: [
        tI('Mets le participe à la bonne forme.', "La lettre que j'ai (écrire) fait deux pages.", "La lettre que j'ai écrite fait deux pages.", "La lettre est passée devant, et le t se dit. EN: la lettre moved in front, and the t is heard.", 'a8-piege'),
        mc("Pourquoi le participe s'accorde-t-il après que ?", ['parce que que est féminin', 'parce que le complément est passé devant le verbe'], 1, "que emmène le nom devant. EN: que moves the noun in front.", 'a8-check'),
        eS("Les photos que j'ai pris à Québec sont dans l'album.", "Les photos que j'ai prises à Québec sont dans l'album.", "Féminin pluriel : prises. EN: feminine plural, prises.", 'a8-piege'),
        tI('Mets le participe à la bonne forme.', "La clé que j'ai (perdre) était dans ma poche.", "La clé que j'ai perdue était dans ma poche.", "Muet, et pourtant obligatoire. EN: silent, and still compulsory.", 'a8-table'),
        mc('Avec quel verbe entends-tu la différence ?', ['écouter', 'perdre', 'mettre'], 2, "mis contre mise : le z se réveille. EN: mis against mise.", 'a8-check'),
        tI('Mets le participe à la bonne forme.', 'La porte que le gardien a (ouvrir) donne sur la cour.', 'La porte que le gardien a ouverte donne sur la cour.', "L'accord suit la porte, pas le gardien. EN: the agreement follows the door.", 'a8-construire'),
        lC('Écoute. Entends-tu la fin du participe ?', "La table que j'ai mise dehors est trop lourde.", ['Oui, un z', 'Non, rien'], 0, "mise se dit MEEZ. EN: mise sounds with a z.", 'a8-ecoute'),
        eS('La dame qui a trouvée mon sac travaille au café.', 'La dame qui a trouvé mon sac travaille au café.', "Après qui, rien n'est passé devant. EN: after qui nothing has moved in front.", 'a8-cartes'),
      ],
    },
    {
      id: 'r9-milieu', label: 'Au milieu', targets: ['verbe-principal-perdu'],
      questions: [
        mc('Deux virgules autour de la relative signifient...', ['un tri', 'une erreur', 'un ajout'], 2, "Ma sœur, qui habite à Sherbrooke : je n'en ai qu'une. EN: an aside, so only one.", 'a9-check'),
        tI('Termine la phrase avec son verbe principal.', "Un ami que je n'avais pas vu depuis dix ans ... hier.", "Un ami que je n'avais pas vu depuis dix ans m'a écrit hier.", "Après la relative, la phrase repart. EN: after the clause, the sentence resumes.", 'a9-construire'),
        mc('Tu as trois sœurs et une seule arrive. Tu écris...', ['Ma sœur, qui habite à Sherbrooke, arrive vendredi.', 'Ma sœur qui habite à Sherbrooke arrive vendredi.'], 1, "Sans virgule, la relative dit laquelle. EN: with no comma, it identifies.", 'a9-choisir'),
        eS('Ma sœur arrive vendredi, qui habite à Sherbrooke.', 'Ma sœur, qui habite à Sherbrooke, arrive vendredi.', "La relative se colle à son nom, pas à la fin. EN: the clause sticks to its noun, not to the end.", 'a9-erreurs'),
        mc("« Mon voisin, qui travaille de nuit dort le jour. » Que manque-t-il ?", ['le verbe principal', 'rien', 'la seconde virgule'], 2, "On encadre des deux côtés. EN: fence it on both sides.", 'a9-choisir'),
        tI('Termine la phrase avec son verbe principal.', 'Le bureau des objets trouvés, qui ferme à dix-sept heures, ... au sous-sol.', 'Le bureau des objets trouvés, qui ferme à dix-sept heures, est au sous-sol.', "Le verbe principal attend la fin. EN: the main verb waits until the end.", 'a9-exemples'),
        lC('Écoute. Combien de sœurs a cette personne ?', 'Ma sœur, qui habite à Sherbrooke, arrive vendredi.', ['une seule', 'plusieurs'], 0, "Deux virgules : un ajout, donc une seule. EN: two commas mean an aside.", 'a9-cartes'),
        mc('Où se met la relative ?', ['juste après son nom', 'à la fin de la phrase'], 0, "Même au milieu, elle colle à son nom. EN: even mid-sentence, it sticks to its noun.", 'a9-check'),
      ],
    },
    {
      id: 'r10-neutre', label: 'Ce qui, ce que', targets: ['ce-oublie'],
      questions: [
        mc('Quand écris-tu ce devant qui ou que ?', ['toujours', 'jamais', "quand aucun nom ne précède"], 2, "Il n'y a aucun nom à reprendre. EN: there is no noun to pick up.", 'a10-check'),
        tI('Complète avec les bons mots.', "Je ne sais pas ... s'est passé.", "Je ne sais pas ce qui s'est passé.", "Aucun nom devant, et rien derrière. EN: no noun in front, nothing behind.", 'a10-construire'),
        mc('Complète : « Dis-moi ... tu as vu. »', ['ce qui', 'ce que'], 1, "tu suit le trou. EN: tu follows the gap.", 'a10-construire'),
        eS("Ce que m'inquiète, c'est le prix.", "Ce qui m'inquiète, c'est le prix.", "m' est un complément, pas un sujet. EN: m is an object, not a subject.", 'a10-cartes'),
        tI('Complète avec les bons mots.', "Tout ... je demande, c'est un reçu.", "Tout ce que je demande, c'est un reçu.", "je suit le trou. EN: je follows the gap.", 'a10-ecoute'),
        mc("« Il pleut depuis trois jours, ce qui complique le déménagement. » Que reprend ce qui ?", ['la pluie seulement', 'le déménagement', 'toute la phrase de devant'], 2, "Il reprend une situation entière. EN: it picks up a whole situation.", 'a10-construire'),
        lC('Écoute. Le mot après ce est-il qui ou que ?', "Ce que je cherche, c'est un sac bleu.", ['que', 'qui'], 0, "je suit le trou. EN: je follows the gap.", 'a10-ecoute'),
        mc('Le test change-t-il avec ce ?', ['Oui', 'Non'], 1, `${REFRAME} EN: ${REFRAME_EN}`, 'a10-focus'),
      ],
    },
    {
      id: 'r11-tout', label: 'Tout ensemble', targets: ['phrase-qui-casse'],
      questions: [
        mc("Dans « Le livre qui était dedans appartient à la bibliothèque », pourquoi qui ?", ['parce que le livre est une chose', 'parce que rien ne suit le trou'], 1, "était suit tout de suite. EN: était follows straight away.", 'a11-lecture'),
        tI('Colle ces deux phrases en une seule.', "J'ai laissé des papiers dedans. Ils sont importants.", "Les papiers que j'ai laissés dedans sont importants.", "que fait passer les papiers devant, donc laissés. EN: que moves les papiers in front, so laissés.", 'a11-plan'),
        eS("Le sac, que j'utilise tous les jours a une poche déchirée.", "Le sac, que j'utilise tous les jours, a une poche déchirée.", "On encadre des deux côtés. EN: fence it on both sides.", 'a11-lecture'),
        mc('Complète : « Merci à la personne ... le rapportera. »', ['que', 'qui'], 1, "rapportera suit tout de suite. EN: rapportera follows straight away.", 'a11-usages'),
        tI('Complète avec les bons mots.', "... compte pour moi, c'est le carnet.", "Ce qui compte pour moi, c'est le carnet.", "Aucun nom devant, et compte suit. EN: no noun in front, and compte follows.", 'a11-cheat'),
        mc('Avant de rendre ton annonce, que vérifies-tu en dernier ?', ['la longueur', 'les majuscules', 'le mot qui suit chaque qui et chaque que'], 2, "Si tu ne peux pas le nommer, réécris la phrase. EN: if you cannot name it, rewrite the sentence.", 'a11-progress'),
        lC('Écoute. Le participe est-il accordé ?', "L'annonce que j'ai écrite tient en huit lignes.", ['Oui', 'Non'], 0, "écrite : le t se dit, et l'annonce est passée devant. EN: écrite, and the t is heard.", 'a11-scenario'),
        tI('Complète avec le bon mot.', "Voici le numéro ... tu peux composer entre neuf heures et midi.", 'Voici le numéro que tu peux composer entre neuf heures et midi.', "tu suit le trou. EN: tu follows the gap.", 'a11-usages'),
      ],
    },
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
    { front: 'la relative', back: 'deux phrases, un nom écrit une fois', say: "Le sac que j'ai perdu est bleu." },
    { front: 'le repère', back: 'regarde derrière le trou, jamais devant', say: 'La rue qui mène à la gare est fermée.' },
    { front: 'qui', back: 'aucun sujet derrière lui', say: 'Le train qui part à midi passe par Laval.' },
    { front: 'que', back: 'un sujet arrive derrière lui', say: 'Le film que nous regardons dure trois heures.' },
    { front: "l'élision", back: "qu' oui, qu'i jamais", say: "Le train qu'ils prennent part à sept heures." },
    { front: "l'antécédent", back: 'gens et choses, le même mot', say: "L'auteur que je lis vient de Montréal." },
    { front: 'le mot fixe', back: "l'anglais l'efface, le français non", say: 'Le livre que je lis est passionnant.' },
    { front: "l'accord", back: 'après que et avoir, le participe suit', say: "La lettre que j'ai écrite fait deux pages." },
    { front: 'au milieu', back: 'deux virgules, ou aucune', say: 'Ma sœur, qui habite à Sherbrooke, arrive vendredi.' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Deux mots, en résumé',
  body: `${REFRAME} Tu es entré dans cette leçon avec des phrases courtes qui disaient vrai sans désigner personne, et tu en sors avec des phrases longues qui tiennent. Deux mots ont fait tout le travail, et le test qui les sépare tient en un coup d'œil derrière le trou. La prochaine leçon ajoute dont et où, pour les cas où qui et que ne suffisent plus : le livre dont je parle, la ville où je suis né. EN: Next lesson adds dont and où, for the cases where qui and que are not enough.`,
  points: [
    'Le nom de devant ne décide jamais rien.',
    "L'anglais peut effacer le mot ; le français ne le peut jamais.",
    "que fait passer le nom devant le verbe, et le participe le suit.",
    'Deux virgules ajoutent, pas de virgule trie.',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['repere', 'motfixe', 'accord'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Faire des phrases longues',
    opener: {
      line: "À toi d'écrire : une annonce que dix personnes liront, et qui doit désigner ton objet et pas un autre. EN: Your turn to write: a notice ten people will read, which has to point at your thing and no other.",
      imageRef: 'lessons/qui-que/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ta propre annonce et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote your own notice and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 140,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-parler', 'a11-cheat', 'a11-progress', 'a11-quiz', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_TASK, A11_PARLER,
    A11_CHEAT, A11_PROGRESS, A11_QUIZ, A11_REVIEW, A11_ROUNDUP,
  ],
  imports: IMPORTED.act11,
};

/* @@ACTS@@ */

/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS. Tables live here and only here (a `table` at layer core
 *  is refused by validateDensity). Every sheet is reachable from a mission
 *  through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-relative', 'La relative, de A à Z', ["ce qu'elle fait", 'la soudure en trois temps'], [
    teach('sheet-relative-teach', 'Un nom, une seule fois', `${REFRAME} Une relative prend deux phrases qui parlent du même nom et n'en fait qu'une. Le nom reste une seule fois, en tête, et le petit mot le reprend à l'intérieur de la deuxième. EN: ${REFRAME_EN} A relative clause turns two sentences about one noun into one sentence, with the noun written once.`),
    table('sheet-relative-soudure', 'La soudure en trois temps', ['Étape', 'Ce que tu fais', 'Exemple'], [
      ['1', 'Trouve le nom qui revient', "J'ai perdu un sac. LE SAC est bleu."],
      ['2', 'Garde la première phrase entière', "J'ai perdu un sac..."],
      ['3', 'Remplace le nom répété', "Le sac QUE j'ai perdu est bleu."],
      ['le mot', 'Rien derrière : qui', 'Le livre QUI est dedans vient de la bibliothèque.'],
      ['le mot', 'Un sujet derrière : que', "Le livre QUE je lis vient de la bibliothèque."],
      ['la place', 'Juste après son nom', "Le sac, QUE j'utilise tous les jours, a une poche déchirée."],
    ]),
  ]),

  sheet('sheet-test', 'Choisir entre qui et que', ['le repère', 'le tableau des deux', "l'élision"], [
    teach('sheet-test-teach', 'Regarde derrière, jamais devant', `${REFRAME} Tu ne regardes pas le nom qui précède : il ne décide rien. Tu regardes ce qui vient immédiatement après le trou. Si un sujet est déjà là, il ne reste que le rôle de complément, donc que. Si la place du sujet est vide, le nom de devant la prend, donc qui. EN: ${REFRAME_EN} Look at what follows the gap, never at the noun in front.`),
    table('sheet-test-table', 'Le tableau des deux', ['Ce qui suit', 'Le mot', 'Le rôle', 'Exemple'], [
      ['un verbe seul', 'qui', 'sujet', 'la rue QUI mène à la gare'],
      ['un pronom puis un verbe', 'qui', 'sujet', "le serveur QUI nous apporte l'addition"],
      ['je, tu, il, on, nous', 'que', 'complément', 'le film QUE nous regardons'],
      ['un nom sujet', 'que', 'complément', 'le pain QUE la boulangère met de côté'],
      ['un sujet et un auxiliaire', 'que', 'complément', "la lettre QUE j'ai écrite"],
      ['rien du tout', 'impossible', 'le mot ne se saute pas', 'le livre je lis, jamais'],
    ]),
    table('sheet-test-elision', "L'élision", ['Devant', 'qui', 'que'], [
      ['une consonne', 'qui parle', 'que tu vois'],
      ['il, ils', 'qui il... jamais', "qu'il, qu'ils"],
      ['elle, elles', 'qui elle... jamais', "qu'elle, qu'elles"],
      ['on', 'qui on... jamais', "qu'on"],
      ['un prénom en voyelle', 'qui Awa... jamais', "qu'Awa, qu'Anne"],
      ['la règle', 'qui ne change jamais', "que perd son e"],
    ]),
  ]),

  sheet('sheet-antecedent', 'Les gens, les choses, et le mot fixe', ['who ou which', "ce que l'anglais permet"], [
    teach('sheet-antecedent-teach', "Deux habitudes anglaises à laisser à la porte", "L'anglais choisit son mot selon le nom : who pour une personne, which pour une chose, that pour les deux. Le français ne fait pas ce tri : qui et que servent aux deux, et c'est la place dans la proposition qui décide. L'anglais permet aussi de n'écrire aucun mot. Le français ne le permet jamais. EN: French does not sort by animate or inanimate, and it never lets the pronoun disappear."),
    table('sheet-antecedent-table', "L'anglais et le français", ['Anglais', 'Français', 'Exemple'], [
      ['who + verb', 'qui', 'la femme QUI parle au téléphone'],
      ['which / that + verb', 'qui', 'la rue QUI mène à la gare'],
      ['whom / that + subject', 'que', 'la femme QUE tu vois'],
      ['which / that + subject', 'que', 'le film QUE nous regardons'],
      ['(rien du tout)', 'que, obligatoire', 'le livre QUE je lis'],
      ['what', 'ce qui, ce que', "ce QUI m'inquiète, ce QUE je cherche"],
    ]),
    table('sheet-antecedent-sauter', "Ce que l'anglais efface", ['Anglais', 'Français faux', 'Français juste'], [
      ['the book I read', 'le livre je lis', 'le livre QUE je lis'],
      ['the people you know', 'les gens tu connais', 'les gens QUE tu connais'],
      ['the city we visit', 'la ville nous visitons', 'la ville QUE nous visitons'],
      ['the train we await', 'le train nous attendons', 'le train QUE nous attendons'],
      ['the file you want', 'le dossier tu veux', 'le dossier QUE tu veux'],
      ['pourquoi', 'deux sujets se percutent', 'le mot les sépare'],
    ]),
  ]),

  sheet('sheet-accord', "L'accord du participe après que", ['la règle', "ce qui s'entend", "ce qui ne s'entend pas"], [
    teach('sheet-accord-teach', 'Le nom est passé devant, le participe le suit', `que fait passer le complément devant le verbe. Avec l'auxiliaire avoir, le participe s'accorde alors avec ce complément, en genre et en nombre. « ${B104_REFRAME} » vaut toujours pour le choix du temps ; ici, c'est la lettre finale qui bouge. EN: ${B104_REFRAME_EN} Here it is the final letter that moves, not the tense.`),
    table('sheet-accord-audible', "Là où l'oreille l'entend", ['Masculin', 'Féminin', 'Ce qui se dit en plus'], [
      ['écrit', 'écrite', 'le t'],
      ['mis', 'mise', 'le z'],
      ['pris, appris, compris', 'prise, apprise, comprise', 'le z'],
      ['fait', 'faite', 'le t'],
      ['dit, conduit', 'dite, conduite', 'le t'],
      ['ouvert, offert', 'ouverte, offerte', 'le t'],
    ]),
    table('sheet-accord-muet', "Là où seul l'œil le voit", ['Masculin', 'Féminin', 'Ce qui se dit en plus'], [
      ['perdu', 'perdue', 'rien'],
      ['parlé, écouté', 'parlée, écoutée', 'rien'],
      ['vu', 'vue', 'rien'],
      ['choisi, fini', 'choisie, finie', 'rien'],
      ['acheté, réservé', 'achetée, réservée', 'rien'],
      ['vendu, rendu', 'vendue, rendue', 'rien'],
    ]),
  ]),

  sheet('sheet-ecrire', 'Écrire une description qui tient', ['le plan', 'la liste de contrôle'], [
    teach('sheet-ecrire-teach', 'Quatre faits, une seule phrase chacun', "Une description utile ne donne pas plus de faits qu'une liste : elle les rattache au bon objet. Chaque fait devient une relative accrochée au nom, et le lecteur sait de quoi tu parles dès la première ligne. EN: a useful description does not add facts; it attaches each one to the right noun."),
    table('sheet-ecrire-plan', 'Le plan', ['Morceau', 'Forme', 'Exemple'], [
      ['ce que tu as perdu', 'le nom, puis que', "Le sac QUE j'ai perdu jeudi est bleu."],
      ['ce qui était dedans', 'le nom, puis qui', 'Le livre QUI était dedans vient de la bibliothèque.'],
      ['le détail qui distingue', 'une relative au milieu', "Le sac, QUE j'utilise tous les jours, a une poche déchirée."],
      ['ce qui compte le plus', 'ce qui, ce que', "Ce QUI compte pour moi, c'est le carnet."],
      ['comment te joindre', 'le nom, puis que', 'Voici le numéro QUE tu peux composer.'],
      ['la sortie', 'le nom, puis qui', 'Merci à la personne QUI le rapportera.'],
    ]),
    table('sheet-ecrire-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Aucun mot sauté', 'Cherche deux sujets collés : il manque que'],
      ['Aucun qui élidé', "qu'est n'existe pas ; écris qui est"],
      ['Le bon mot', 'Regarde derrière le trou, jamais devant'],
      ['Le verbe de la relative', 'Il suit le nom de devant, pas qui'],
      ["L'accord après que", 'avoir plus un nom déjà passé devant : accorde'],
      ['Le verbe principal', 'Après la relative, la phrase doit repartir'],
    ]),
  ]),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS and ERROR TRIGGERS
 * ══════════════════════════════════════════════════════════════════════════ */

/** One per error trigger, each the resolving target of exactly one quiz
 *  round. Deliberately NOT in `sections`: a learner who never trips one never
 *  sees it. Six items is the house size. */
const DRILL_LIST: LessonDrill[] = [
  { id: 'd-relative', title: 'Courte ou soudée', format: 'sort' as const, coach: "Deux piles. Demande-toi : est-ce que la phrase désigne un seul objet, ou n'importe lequel ? EN: sort by whether the sentence points at one thing or at any of them.", buckets: ['une phrase courte', 'une phrase soudée'], items: [E(1000), E(1001), E(1002), E(1003), E(1004), E(1017)], audio: AUDIO },
  { id: 'd-qui', title: 'Qui agit', format: 'mcq' as const, coach: "Demande-toi qui fait le verbe. Si c'est le nom de devant, il n'y a pas de sujet derrière. EN: ask who does the verb; if it is the noun in front, no subject follows.", q: 'Le voisin ... habite au-dessus joue de la guitare.', opts: ['que', 'qui'], correct: 1, why: "Personne ne vient derrière, donc qui. EN: nothing follows, so qui.", items: [E(1018), E(1020), E(1029), E(1031), E(1033), E(1035)], audio: AUDIO },
  { id: 'd-que', title: 'La place est prise', format: 'mcq' as const, coach: "Si un sujet est déjà derrière le trou, le nom de devant ne peut plus faire le verbe. EN: if a subject is already behind the gap, the noun in front cannot do the verb.", q: 'Le film ... nous regardons dure trois heures.', opts: ['que', 'qui'], correct: 0, why: "nous occupe déjà la place du sujet. EN: nous already fills the subject slot.", items: [E(1037), E(1039), E(1043), E(1048), E(1051), E(1055)], audio: AUDIO },
  { id: 'd-test', title: 'Regarde derrière', format: 'sort' as const, coach: `${THE_TEST} Deux piles : la place du sujet est vide, ou elle est prise. EN: two piles, by whether the subject slot is empty or taken.`, buckets: ['la place est vide', 'la place est prise'], items: [E(1056), E(1057), E(1058), E(1059), E(1060), E(1061)], audio: AUDIO },
  { id: 'd-elision', title: "Une apostrophe ou trois lettres", format: 'mcq' as const, coach: "Une apostrophe sur ce mot ne peut venir que de que. EN: an apostrophe on this word can only come from que.", q: 'La voiture ... est devant la porte bloque le passage.', opts: ["qu'", 'qui'], correct: 1, why: "qui ne s'élide jamais. EN: qui never elides.", items: [E(1076), E(1078), E(1079), E(1081), E(1084), E(1087)], audio: AUDIO },
  { id: 'd-antecedent', title: 'Le nom ne décide rien', format: 'sort' as const, coach: "Deux piles, et surtout ne regarde pas si le nom est une personne ou une chose. EN: two piles, and do not look at whether the noun is a person or a thing.", buckets: ['qui', 'que'], items: [E(1092), E(1095), E(1096), E(1102), E(1103), E(1107)], audio: AUDIO },
  { id: 'd-motfixe', title: 'Remets le mot', format: 'mcq' as const, coach: "Si un nom et un sujet se touchent, il manque quelque chose entre les deux. EN: if a noun and a subject touch, something is missing between them.", q: 'Le livre ... je lis est passionnant.', opts: ['rien', 'que'], correct: 1, why: "L'anglais peut ne rien écrire ; le français jamais. EN: English may write nothing; French never may.", items: [E(1109), E(1110), E(1111), E(1112), E(1121), E(1125)], audio: AUDIO },
  { id: 'd-accord', title: "Ce qui s'entend, ce qui s'écrit", format: 'sort' as const, coach: "Deux piles. Dis la phrase à voix haute : la fin du participe change-t-elle quelque chose à l'oreille. EN: say it aloud and sort by whether the ending changes anything to the ear.", buckets: ["on l'entend", "on l'écrit seulement"], items: [E(1127), E(1129), E(1131), E(1139), E(1141), E(1149)], audio: AUDIO },
  { id: 'd-milieu', title: 'Une sœur ou plusieurs', format: 'sort' as const, coach: "Deux piles. Enlève le groupe entre les virgules : si la phrase tient toute seule, c'était un ajout. EN: remove the group between the commas; if the sentence still stands, it was an aside.", buckets: ['un ajout', 'un tri'], items: [E(1150), E(1151), E(1154), E(1156), E(1157), E(1161)], audio: AUDIO },
  { id: 'd-neutre', title: 'Avec ou sans nom devant', format: 'mcq' as const, coach: "Cherche un nom juste avant le trou. S'il n'y en a pas, il faut ce. EN: look for a noun just before the gap; if there is none, ce is needed.", q: "Je ne sais pas ... s'est passé.", opts: ['qui', 'ce qui'], correct: 1, why: "Aucun nom à reprendre, donc ce qui. EN: no noun to pick up, so ce qui.", items: [E(1167), E(1168), E(1169), E(1170), E(1174), E(1178)], audio: AUDIO },
  { id: 'd-chaine', title: 'Une phrase qui tient', format: 'flashcard' as const, coach: "Lis chaque phrase à voix haute et nomme le mot qui suit qui ou que. Si tu ne peux pas le nommer, la phrase est cassée. EN: read each one aloud and name the word after qui or que.", items: [E(1180), E(1181), E(1184), E(1187), E(1190), E(1192)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'phrases-hachees', description: 'Writes a run of short separate sentences where one relative clause was needed, so nothing in the description identifies which thing is meant.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-relative', retest: 'd-relative' },
  { id: 'qui-mal-place', description: 'Writes que where the clause has no subject of its own, so the noun in front is left with nothing to do the verb.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-qui', retest: 'd-qui' },
  { id: 'que-mal-place', description: 'Writes qui where a subject is already sitting behind the pronoun, producing a clause with two subjects and no object.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-que', retest: 'd-que' },
  { id: 'choix-par-traduction', description: 'Picks the pronoun from the English word that, which or who instead of from what follows the gap, so the choice is right only by luck.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-test', retest: 'd-test' },
  { id: 'elision-fautive', description: "Elides qui into qu' before a vowel, or leaves que unelided before one, so the apostrophe stops signalling which word was chosen.", detectOn: ['a5-construire', 'a5-erreurs', 'a5-check', 'a11-mission'], drill: 'd-elision', retest: 'd-elision' },
  { id: 'qui-pour-personnes', description: 'Sorts the two pronouns by the antecedent, on the English who and which pattern, so a thing that acts and a person who is acted on both come out wrong.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-antecedent', retest: 'd-antecedent' },
  { id: 'relatif-oublie', description: 'Leaves the pronoun out altogether, on the English pattern of the book I read, so a noun and a subject end up side by side and the sentence stalls.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-motfixe', retest: 'd-motfixe' },
  { id: 'accord-oublie', description: 'Leaves the past participle in the masculine singular after a preceding direct object, or adds an agreement after qui where nothing has moved in front.', detectOn: ['a8-construire', 'a8-piege', 'a8-check', 'a11-mission'], drill: 'd-accord', retest: 'd-accord' },
  { id: 'verbe-principal-perdu', description: 'Opens a clause in the middle of a sentence and never comes back to the main verb, or fences it with one comma instead of two.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-milieu', retest: 'd-milieu' },
  { id: 'ce-oublie', description: 'Writes qui or que with no noun in front of it, where French requires ce to stand in for the missing antecedent.', detectOn: ['a10-construire', 'a10-ecoute', 'a10-check', 'a11-mission'], drill: 'd-neutre', retest: 'd-neutre' },
  { id: 'phrase-qui-casse', description: 'Builds a long sentence with several clauses and loses one of the pieces on the way: the pronoun, the agreement, the second comma or the main verb.', detectOn: ['a11-scenario', 'a11-mission', 'a11-plan', 'a11-lecture'], drill: 'd-chaine', retest: 'd-chaine' },
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
 *  released ONCE, and only ids a flashcard drill can reach. */
export const DECK_TRANCHE: string[][] = (() => {
  const seen = new Set<string>();
  return ACTS.map((a, i) => [...(ROWS_BY_ACT[i] ?? []).map((r) => r.id), ...a.imports]
    .filter((id) => FLASHABLE.has(id) && !seen.has(id) && (seen.add(id), true)));
})();

/** Every recordingId the sections name, each with its studio brief. */
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-11-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-11-comptoir': "The lost property counter text (act 1), one female Québécoise voice, one take, read at dictation pace. The four short sentences are read flat and evenly, as a list; from « Alors j'ai recommencé » the delivery opens out. NO PAUSE BEFORE qui OR que anywhere in this lesson's recordings, or the learner hears the seam instead of the sentence.",
  'rec-b1-11-voisin': 'Awa and the coach (act 2), two voices, one take. Awa reads her first line as a complaint and her fourth as a correction she has just understood. The relative clause is spoken as one continuous group, with no break before qui.',
  'rec-b1-11-qui': "The four qui cards (act 2). One coach voice. Card three must be read with nous fully unstressed: the card's claim is that nous slips in without taking the subject slot, so a helpful emphasis would contradict it. Card four reads the singular and the plural identically, because they are.",
  'rec-b1-11-qui-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. Lines one and two differ only in the verb ending, which is inaudible, so the learner must answer from the article and the pronoun. Do not over-articulate habite against habitent.',
  'rec-b1-11-liste': 'Théo and the coach (act 3), two voices, one take. Théo reads his first line flat, as somebody reading their own notes back. The coach is brisk, never teacherly.',
  'rec-b1-11-que': 'The four que cards (act 3). One coach voice. Read each relative clause as a single breath group so the subject behind que is audibly inside the clause, not a new sentence.',
  'rec-b1-11-piege-que': "The audio step plays each card's CORRECT sentence. Six lines, one voice, same pace. The wrong versions in promptSound are NEVER spoken.",
  'rec-b1-11-cheffe': 'Awa and the coach (act 4), two voices, one take. The two opening lines are read IDENTICALLY except for the one word that differs; the mission only works if nothing else changes between them.',
  'rec-b1-11-paires': 'The four pair cards (act 4). One voice. Both halves of every pair are read at the same pace and the same pitch, because the card claims the difference is grammatical and not audible drama.',
  'rec-b1-11-piege-repere': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The English labels in promptLabel are never spoken.",
  'rec-b1-11-apostrophe': "Awa and the coach (act 5), two voices, one take. Awa's first line is the WRONG form and must still be read naturally, as somebody reading their own draft aloud; the coach does not correct it in tone, only in words.",
  'rec-b1-11-elision': "The four elision cards (act 5). One voice. Card one reads « que elle » as two separate words and « qu'elle » as one, and the gap between those two deliveries IS the teaching. Card two reads « qui est » without crushing it into one syllable.",
  'rec-b1-11-photo': 'Awa and the coach (act 6), two voices, one take. The two opening lines are read with the same rhythm, because the point is that the same word serves a table and a man.',
  'rec-b1-11-antecedent': 'The four antecedent cards (act 6). One voice. The English words on card three (who, which, that) are spoken in an English accent, briskly, as quotations rather than as French.',
  'rec-b1-11-antecedent-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. Lines one and two share a whole clause and differ only in the noun, so they must be read at identical speed.',
  'rec-b1-11-maya': "Maya's email (act 7), read by a second voice with a light anglophone accent, one take, at natural speed. THE FOUR BROKEN SENTENCES ARE READ AS WRITTEN, with no repair and no hesitation: the reader believes they are correct. The narration around them is read by the main voice.",
  'rec-b1-11-motfixe': "The four obligatory-word cards (act 7). One voice. Card two (« le livre je lis ») is the WRONG form and is read flatly, without the pause that would make it sound like two sentences.",
  'rec-b1-11-piege-motfixe': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The versions missing the pronoun are never spoken.",
  'rec-b1-11-lettre': 'Théo and the coach (act 8), two voices, one take. The two opening lines must be read at the same pace so the only audible difference is the final consonant of the participle.',
  'rec-b1-11-accord': "The four agreement cards (act 8). One voice. Card two reads écrit and écrite with the t clearly present in the second and clearly absent in the first. CARD THREE READS perdu AND perdue IDENTICALLY, because they are identical; any helpful difference there destroys the card.",
  'rec-b1-11-accord-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. The audible agreements (écrite, mise, prises, ouverte, dite) carry their final consonant naturally, with no extra stress. Nothing is repeated.',
  'rec-b1-11-piege-accord': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The unagreed versions in promptSound are never spoken. Line six has NO agreement and must not gain one by accident.",
  'rec-b1-11-assurance': "The insurance letter (act 9), one voice, one take, read as a formal document. THE COMMAS ARE AUDIBLE: each inserted clause is set off by a real pause on both sides, and the sentence without commas (« le vélo qui manque ») is read with no pause at all. That contrast is the whole act.",
  'rec-b1-11-virgules': 'The four comma cards (act 9). One voice. Cards one and two hold the SAME WORDS and differ only in the pauses, so they must be recorded back to back by the same voice in the same take.',
  'rec-b1-11-carnet': "Théo and madame Prévost (act 10), two voices, one take. Madame Prévost says « vous »; Théo answers in the same register. Her opening line already contains « ce que », spoken without emphasis.",
  'rec-b1-11-neutre': 'The four ce cards (act 10). One voice. Card four reads ce qui, ce que and ce dont as a short list, evenly, with no suggestion that the third one is being taught here.',
  'rec-b1-11-neutre-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. Each line has the ce group at the front, and there is no pause between ce and the word after it.',
  'rec-b1-11-annonce': "The model notice (act 11), one voice, read as somebody reading a public notice aloud rather than performing it. The heading line is read once, then a clear break. The inserted clause between commas keeps its two pauses; no other clause takes one.",
};

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 11',
  intro: 'You can already tell a past episode and talk about what would be. What you cannot yet do is join two ideas about the same thing without repeating it, and that is what makes B1 writing sound like B1 writing. This lesson gives you the two words that do ninety per cent of that work, one test that settles which, and the four traps an English speaker walks into, starting with the one where English lets you leave the word out altogether.',
  skill: 'PE',
  grammarAssumed: [PC_UNIT, PARTICIPES_UNIT, COD_UNIT, PAIRES_UNIT],
  grammarIntroduced: [
    'The relative clause as an operation: two sentences sharing one noun become one, with the noun written once',
    'qui as the subject of its own clause, with the antecedent doing the verb and no subject behind the pronoun',
    'que as the direct object of its own clause, with a new subject arriving immediately behind the pronoun',
    'The look-behind test: the choice is settled by what follows the pronoun, never by what precedes it',
    "Elision: que becomes qu' before a vowel or a mute h, and qui never elides",
    'qui and que with both animate and inanimate antecedents, against the English who / which split',
    'The obligatory relative pronoun: English may delete it, French may not',
    'Past-participle agreement with a direct object placed in front of the verb by que, and where that agreement is audible',
    'The embedded relative clause, the pair of commas that makes it an aside, and the main verb that resumes after it',
    'ce qui and ce que as the form used with no nominal antecedent (previewed only; taught in full later)',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais raconter au passé et dire ce qui serait. Ce que tu ne sais pas encore faire, c'est coller deux idées sur la même chose sans la répéter. C'est pourtant ça qui fait qu'un texte sonne B1. Cette leçon te donne les deux mots qui font ce travail, un test qui tranche entre eux en une seconde, et les quatre pièges de l'anglophone, à commencer par celui où l'anglais te laisse ne rien écrire du tout.",
    minutes: 120,
    difficulty: 3,
    glyph: 'qui',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: QUI_QUE_TERMS,
  sections: SECTIONS,
  itemIds: ITEM_IDS,
  version: 2,
  audio: {
    defaultLang: 'fr-FR',
    speeds: [1, 0.65],
    // Paul, 2026-09-22: every `say` is French and spoken by a fr-FR voice.
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
export { IMPORTED, NOT_SPEAKABLE, READING_COMPTOIR, READING_TRADUCTION, READING_ASSURANCE, READING_ANNONCE, dicteeFor };
