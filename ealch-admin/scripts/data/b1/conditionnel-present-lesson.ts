// b1.08.l1 « Le conditionnel présent » — the lesson.
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
//   picks the form), trap (trapDrill stepped or commonErrors), check (gated
//   control pages before the checkpoint).
//
//    1  Le mur du présent           6   the request that lands as an order
//    2  La recette                  8   future stem + imparfait endings
//    3  Les radicaux rendus         7   ser- aur- ir- fer- pourr- voudr- devr-
//    4  ai ou ais                   7   je parlerai against je parlerais
//    5  Le souhait                  7   je voudrais, j'aimerais, je préférerais
//    6  Demander sans imposer       7   pourriez-vous, ce serait possible de
//    7  Le conseil                  8   tu devrais, il faudrait, à ta place
//    8  Pouvoir, vouloir, devoir    7   the three that carry the ordinary day
//    9  Si c'était vrai             7   the RESULT half only; b1.10 owns the si
//   10  Selon la police             7   reported, unverified information
//   11  Un pas en arrière, par écrit 11  model, plan, role play, TASK, quiz
//
//   TOTAL 82 missions, 11 acts. Corpus: 190 authored rows in eleven blocks
//   plus 31 reused seed rows, released act by act through `deckTranche`.
//   Chapter artwork: `conditionnel-present-image-prompts.md`, eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME (b1.09 imports it)
// ══════════════════════════════════════════════════════════════════════════
//
//   « Le futur dit ce qui sera. Le conditionnel dit ce qui serait. »
//   EN: The future says what will be. The conditional says what would be.
//
//   ONE METAPHOR, UN PAS EN ARRIÈRE (the term « le recul »): the conditional
//   steps back one pace from the real. It is NOT a politeness machine, which
//   is the reframe the lesson rejects in the corpus: acts 9 and 10 have no
//   politeness in them at all and still need the same step back.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the present conditional: its form, the ai/ais trap, and the six
//           jobs it does (wish, request, advice, hypothesis, report, imagined
//           scenario), one act each.
//   QUOTES  b1.01's reframe (the imparfait endings), b1.05's and b1.06's (the
//           future stem) and b1.07's (future usage), all imported and never
//           retyped. They landed 2026-09-23; acts 2 and 4 were reworded around
//           b1.05's and b1.07's real wording. See corpus §D.
//   LEAVES  to b1.09: the full polite-request repertoire (act 6 gives the
//           conditional forms only). To b1.10: « si + imparfait + conditionnel »
//           as a pattern. Act 9 uses the RESULT half, says so on the card and
//           in the act check, and the task's grader notes forbid marking a
//           si clause either way.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the situation
//   needs (the estate agent and the journalist say « vous »). Every learner
//   surface that explains something carries English (`en`, or a final « EN: »).
//   Every `say` is French, spoken fr-FR. Theme `projets-et-futur`. A2
//   citations use the English trail label; b1.* ones are French from the plan.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. b1.05's reframe names avoir (« l'infinitif jusqu'au r, puis avoir »)
//      and b1.07's names si (« jamais après si »). Both are quoted verbatim
//      here, so act 2 now mentions avoir before this lesson needs it, and act
//      4's first card mentions si three acts before act 9 flags the boundary.
//      Both read cleanly, but confirm the forward references are wanted.
//   2. ACT 9 uses the result half of a si clause without teaching the pattern,
//      and says so twice. Is that the right boundary, or should act 9 wait
//      entirely for b1.10?
//   3. THREE tapTables (acts 3, 6 and 8), one per act. The pilot brief allowed
//      one per LESSON; b1.02-b1.04 shipped 2 and 3. Confirm the looser rule.
//   4. Act 10 teaches the journalistic conditional at B1. It is on every
//      French news bulletin, and it is also the one use a learner will never
//      produce. Keep the whole act, or fold it into act 11 as recognition?
//   5. B1 CITATIONS are French from the plan (« la leçon 6 du B1 ») because
//      b1.* units are not in the seed. Switch to the English trail label once
//      they are?
//   6. Titles, labels, card heads and stat keys carry no « EN: » tail, as in
//      b1.01-b1.04. Tail them too?
//   7. 'coach-fr-FR' is still a proposed voice id (b1.01's question 5).
//   8. The task is WRITTEN (110-150 words, `skill: 'PE'`). The unit outcome is
//      partly spoken (asking, advising). Should b1.08 also carry a spoken task?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import seed from '../../../../ealch-v2/src/content/seed.json' with { type: 'json' };
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  READING_ANNONCE, READING_MODELE,
  B101_REFRAME, B101_REFRAME_EN, B105_REFRAME, B105_REFRAME_EN,
  B106_REFRAME, B106_REFRAME_EN, B107_REFRAME, B107_REFRAME_EN,
  IMP_FORM_UNIT, FUTUR_REG_UNIT, FUTUR_IRR_UNIT, FUTUR_USE_UNIT, MODAUX_UNIT,
  ALLER_UNIT, SAVOIR_UNIT,
  IMP_FORM_REF, FUTUR_REG_REF, FUTUR_IRR_REF, FUTUR_USE_REF, POLI_REF, SI_REF,
  MODAUX_REF,
} from './conditionnel-present-corpus.ts';
import { CONDITIONNEL_TERMS } from './conditionnel-present-terms.ts';

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
  if (!r) throw new Error(`b1.08: no item ${id}`);
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
 *  ACT 1 — LE MUR DU PRÉSENT
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Nobody is rude. The sentences are simply flat: they leave the other
 *  person no room to answer. NO « ? » OR « ! » IN ANY BUBBLE (house rule). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: "À l'agence, rue Haute",
  frSub: "Deux chambres et un balcon",
  setting: { place: 'Agence immobilière, rue Haute', city: 'Bruxelles', time: '9 h 20', ambience: 'un comptoir, des annonces au mur, la pluie sur la vitrine' },
  beats: [
    {
      kind: 'narration',
      text: "Une agence immobilière rue Haute, à Bruxelles. Lundi matin. Tu cherches un deux chambres depuis six semaines. L'agente lève les yeux de son écran.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: "L'agente",
      fr: 'Bonjour. Vous venez pour la rue Haute.',
      en: 'Hello. You are here about the rue Haute flat.',
      respell: '[bohⁿ-ZHOOR | voo vuh-nay poor lah rü OHT]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: "Je veux visiter l'appartement. Vous devez me rappeler demain.",
      en: 'I want to view the flat. You have to call me back tomorrow.',
      respell: '[zhuh vuh vee-zee-tay lah-par-tuh-MAHⁿ | voo duh-vay muh rah-puh-lay duh-MEHⁿ]',
      stage: "Deux phrases au présent. Grammaticalement, rien ne cloche.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: "L'agente",
      fr: 'Je note. Vous voulez visiter, et je dois vous rappeler.',
      en: 'Noted. You want to view it, and I have to call you back.',
      respell: '[zhuh NOT | voo voo-lay vee-zee-TAY | ay zhuh dwah voo rah-puh-LAY]',
      stage: "Elle répète tes phrases telles quelles. Tu as donné deux instructions.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Le problème n'est pas la politesse. C'est qu'au présent, ce que tu dis est déjà décidé. Elle ne peut ni proposer autre chose, ni dire non sans te contredire.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: "Tu recommences. Quelle phrase laisse à l'agente la place de répondre ?",
      size: 'lg',
      options: [
        { fr: "Je veux visiter l'appartement.", respell: '[zhuh vuh vee-zee-tay lah-par-tuh-MAHⁿ]', en: 'I want to view the flat.', outcome: 'breaks', audio: AUDIO },
        { fr: "Je voudrais visiter l'appartement.", respell: '[zhuh voo-dreh vee-zee-tay lah-par-tuh-MAHⁿ]', en: 'I would like to view the flat.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Elle répond : « Ce serait possible samedi matin. » Une proposition, et une place pour la refuser.",
        breaks: "Elle répond : « Je note. » Ta phrase était une décision, alors il ne restait rien à décider.",
      },
    },
    {
      kind: 'break',
      heading: 'Un pas en arrière',
      body: "Je veux dit une décision prise. Je voudrais dit la même envie, reculée d'un pas : ce serait mon souhait, si c'est possible. Le verbe ne change pas de sens, il change de distance. EN: the same wish, one step back from the real.",
      wrong: {
        fr: "Je veux visiter l'appartement.",
        ipa: '/ʒə vø vi.zi.te la.paʁ.tə.mɑ̃/',
        respell: '[zhuh vuh vee-zee-tay lah-par-tuh-MAHⁿ]',
        en: 'I want to view the flat.',
      },
      right: {
        fr: "Je voudrais visiter l'appartement.",
        ipa: '/ʒə vu.dʁɛ vi.zi.te la.paʁ.tə.mɑ̃/',
        respell: '[zhuh voo-dreh vee-zee-tay lah-par-tuh-MAHⁿ]',
        en: 'I would like to view the flat.',
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "La visite est fixée. Dans son courriel, l'agente écrira encore cinq fois la même forme, pour conseiller, pour proposer et pour rapporter ce qu'elle n'a pas vérifié.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul', 'souhait'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: "Construire le conditionnel de n'importe quel verbe", s: 'Actes 2 et 3 : la recette et les radicaux' },
    { t: 'Ne plus confondre je parlerai et je parlerais', s: "Acte 4 : l'oreille ne suffit pas, le contexte décide" },
    { t: 'Souhaiter, demander, conseiller', s: 'Actes 5 à 8 : les trois gestes du quotidien' },
    { t: 'Imaginer un résultat et rapporter sans garantir', s: 'Actes 9 et 10 : ce qui serait, et ce qui se dirait' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: the same story in writing, where six conditionals are
 *  already doing four different jobs. Noticing before the rule. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: "L'annonce et le courriel",
  frSub: 'Lis, et compte les formes en -rait',
  text: READING_ANNONCE,
  glossary: [
    { word: 'bail', en: 'lease', note: 'Le contrat de location. Au pluriel : les baux.' },
    { word: 'les charges', en: 'the service charges', note: "Ce qu'on paie en plus du loyer : eau, chauffage, entretien." },
    { word: 'un état des lieux', en: 'an inventory check', note: "On note l'état de l'appartement avant d'entrer et en partant." },
    { word: 'noir sur blanc', en: 'in black and white', note: 'Écrit, donc vérifiable.' },
  ],
  questions: [
    { q: 'Quelles formes servent à demander quelque chose sans imposer ?', a: "« je voudrais visiter » et « Pourriez-vous me confirmer ». Les deux laissent une porte ouverte." },
    { q: "Quelles formes donnent un conseil ?", a: "« Vous devriez apporter » et « Il faudrait aussi prévoir ». Aucune n'est un ordre." },
    { q: "Pourquoi l'annonce écrit-elle « le loyer serait négociable » ?", a: "L'agence rapporte l'information sans la garantir. Rien n'est écrit noir sur blanc." },
    { q: 'La dernière phrase parle-t-elle du réel ?', a: "Non. « Ce serait parfait » imagine un appartement avec balcon et un loyer correct." },
  ],
  audio: REC('rec-b1-08-annonce'),
  say: REFRAME,
  terms: ['recul', 'rumeur'],
};

/** BUILD, on the text just read: sort the six conditionals by the job each
 *  one does. The four jobs are the four acts that follow. */
const A1_REPERER: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-reperer',
  layer: 'core',
  size: 'lg',
  title: 'Quatre métiers pour une seule forme',
  groups: [
    grp('Dire une envie', [
      it(E(601), "la demande de Karim à l'agente"),
      it(E(607), 'la même envie, une pièce plus loin'),
      it('fr.a1.au-restaurant.102', 'tu connais déjà cette ouverture'),
      it(E(610), 'une envie au pluriel'),
    ], chk("Ces quatre phrases : est-ce que la décision est prise ?",
        ['Oui, elles annoncent un fait.', 'Non, elles disent une envie.'], 1,
        "Une envie laisse le choix à l'autre. EN: a wish leaves the other person a choice.")),
    grp('Conseiller, ou rapporter', [
      it(E(605), 'un conseil sans personne visée'),
      it(E(608), 'un conseil par la place'),
      it(E(609), "l'agence rapporte, elle ne garantit pas"),
      it(E(606), 'un résultat imaginé'),
    ], chk('Laquelle de ces phrases ne parle pas du réel du tout ?',
        ['le résultat imaginé', 'le conseil', "l'information rapportée"], 0,
        "« Ce serait parfait » décrit un appartement qu'on n'a pas encore. EN: it describes a flat nobody has yet.")),
    ctl('La même forme', "Combien de formes différentes as-tu vues dans ces deux groupes ?",
        ['quatre', 'une seule', 'deux'], 1,
        "Une seule forme, le conditionnel, pour quatre métiers. EN: one form, four jobs."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recul', 'souhait', 'conseil'],
};

const A1_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-usages',
  layer: 'core',
  title: 'Là où le présent coûte cher',
  cases: [
    { situation: 'Au guichet, tu demandes un billet', fr: 'Je voudrais un billet pour demain matin.', en: 'I would like a ticket for tomorrow morning.' },
    { situation: 'Un collègue te demande ton avis', fr: 'À ta place, je demanderais une réduction.', en: 'If I were you, I would ask for a discount.' },
    { situation: 'Tu écris à une agence que tu ne connais pas', fr: "Pourriez-vous m'envoyer le contrat ?", en: 'Could you send me the contract?' },
    { situation: 'Tu répètes une nouvelle que tu ne peux pas vérifier', fr: "D'après ma voisine, l'immeuble serait à vendre.", en: 'According to my neighbour, the building is said to be for sale.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['politesse', 'rumeur'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('Le mur', 'Pourquoi « Je veux visiter » gêne-t-il au guichet ?',
      ["c'est grammaticalement faux", "c'est trop long", "c'est une décision déjà prise"], 2,
      "Rien ne reste à négocier, donc l'autre ne peut que noter. EN: nothing is left to negotiate."),
  ctl('Le recul', 'Le conditionnel change quoi, exactement ?',
      ['la distance avec le réel', 'le sens du verbe'], 0,
      "Vouloir veut toujours dire vouloir. C'est la distance qui bouge. EN: the verb keeps its meaning; the distance moves."),
  ctl('Les métiers', 'Combien de métiers différents cette leçon donne-t-elle à une seule forme ?',
      ['six', 'deux', 'un seul'], 0,
      "Souhait, demande, conseil, hypothèse, information rapportée, scénario imaginé. EN: six jobs, one form."),
], ['recul', 'souhait']);

const ACT1: ActDef = {
  act: {
    id: 'act1', title: 'Le mur du présent',
    opener: {
      line: "Tu demandes quelque chose et ça sort comme un ordre : ici tu apprends à reculer d'un pas. EN: You ask for something and it comes out as an order: here you learn to step back one pace.",
      imageRef: 'lessons/conditionnel-present/act01.jpg',
    },
    sections: [],
    milestone: "Tu reconnais les quatre métiers du conditionnel dans un texte ordinaire. EN: You can spot the four jobs the conditional does in an everyday text.",
    estScreens: 30, restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_REPERER, A1_USAGES, A1_CHECK],
  imports: IMPORTED.act1,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LA RECETTE
 * ══════════════════════════════════════════════════════════════════════════ */

const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'La leçon la moins chère de ton année',
  frSub: 'Deux morceaux déjà payés',
  setting: "Karim raconte à son frère ce qu'il vient de comprendre en relisant le courriel de l'agence.",
  bubbles: [
    { from: 'narrator', fr: "Karim a ouvert son cahier à la page du futur.", en: 'Karim opened his notebook at the future tense page.' },
    { from: 'user', fr: "J'ai encore un temps à apprendre.", en: 'I have another tense to learn.' },
    { from: 'coach', fr: "Presque rien, en fait. Prends le radical du futur.", en: 'Almost nothing, in fact. Take the future stem.', warn: `${FUTUR_REG_REF} et ${FUTUR_IRR_REF}` },
    { from: 'user', fr: 'parler donne parler-, et être donne ser-.', en: 'parler gives parler-, and être gives ser-.' },
    { from: 'coach', fr: "Bien. Maintenant colle les terminaisons de l'imparfait dessus.", en: 'Good. Now stick the imparfait endings on it.', warn: IMP_FORM_REF },
    { from: 'user', fr: 'je parlerais, nous parlerions, ils parleraient.', en: 'je parlerais, nous parlerions, ils parleraient.' },
    { from: 'coach', fr: "Voilà. Tu n'as rien appris de neuf, tu as recollé deux morceaux.", en: 'There. You learned nothing new, you glued two old pieces together.' },
  ],
  closing: { fr: 'Le radical du futur, les fins de l’imparfait, et c’est fini.', en: 'The future stem, the imparfait endings, and that is it.' },
  audio: REC('rec-b1-08-recette'),
  say: REFRAME,
  terms: ['recette'],
};

const A2_RECETTE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-recette',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-recette',
  title: 'La recette en quatre cartes',
  frSub: 'Radical du futur, fins de l’imparfait',
  hint: 'Quatre cartes. Regarde où finit le radical.',
  audio: REC('rec-b1-08-recette'),
  say: REFRAME,
  terms: ['recette'],
  cards: [
    { head: 'Le radical', label: Cap(FUTUR_REG_REF),
      fr: 'parler · parler-',
      sub: '[par-LAY] · [par-luh]',
      body: `« ${B105_REFRAME} » Ici tu gardes l'infinitif jusqu'au r, et tu changes seulement ce qui vient après. EN: ${B105_REFRAME_EN}` },
    { head: 'La fin', label: Cap(IMP_FORM_REF),
      fr: '-ais · -ait · -ions',
      sub: '[EH] · [EH] · [YOHⁿ]',
      body: `« ${B101_REFRAME} » Ce sont exactement les six fins de l'imparfait. EN: ${B101_REFRAME_EN}` },
    { head: 'Les deux collés', label: 'le conditionnel',
      fr: 'je parlerais',
      sub: '[zhuh par-luh-REH]',
      body: "Radical du futur plus fin de l'imparfait. Rien d'autre à retenir. EN: future stem plus imparfait ending, and nothing else." },
    { head: 'Le r ne part jamais', label: 'la marque',
      fr: 'vendre · je vendrais',
      sub: '[VAHⁿDR] · [zhuh vahⁿ-DREH]',
      body: "Le radical du futur finit toujours par r, même quand le verbe perd son e. EN: the stem always ends in r." },
  ],
};

const A2_FINS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-fins',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-recette',
  title: 'Six cases, deux sons à retenir',
  frSub: 'Les terminaisons',
  hint: 'Quatre cartes. Écoute ce qui se répète.',
  audio: REC('rec-b1-08-fins'),
  say: REFRAME,
  terms: ['recette'],
  cards: [
    { head: 'Quatre cases, un seul son', label: '-ais -ais -ait -aient',
      fr: 'je · tu · il · ils parlerait',
      sub: '[zhuh · tü · eel · eel par-luh-REH]',
      body: "Quatre formes, une seule prononciation. C'est le pronom qui porte la personne. EN: four spellings, one sound." },
    { head: 'La case nous', label: '-ions',
      fr: 'nous parlerions',
      sub: '[noo par-luh-RYOHⁿ]',
      body: "Deux syllabes après le radical, et un i qu'on entend. EN: the i is audible here." },
    { head: 'La case vous', label: '-iez',
      fr: 'vous parleriez',
      sub: '[voo par-luh-RYAY]',
      body: "Le même i, suivi de [ay]. Ne le confonds pas avec le futur vous parlerez. EN: same i, then [ay]." },
    { head: 'Les verbes en -re', label: 'vendre, attendre',
      fr: 'nous vendrions',
      sub: '[noo vahⁿ-dree-YOHⁿ]',
      body: "Le e de l'infinitif tombe, le r reste, et les fins ne bougent pas. EN: the e drops, the r stays." },
  ],
};

const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Construis les trois familles',
  groups: [
    grp('Les verbes en -er', [
      it(E(612), 'radical parler-'),
      it(E(614), 'la même prononciation que je'),
      it(E(615), 'ici le i se voit et s’entend'),
      it(E(627), 'on prend la case de il'),
    ], chk('Combien de ces quatre formes se prononcent pareil ?',
        ['deux', 'trois', 'les quatre'], 1,
        "je, il et on partagent [ʁɛ]. La forme nous, elle, s'entend. EN: three share one sound.")),
    grp('Les verbes en -ir', [
      it(E(618), 'radical finir-, entier'),
      it(E(619), 'la case nous'),
      it(E(625), 'choisir marche pareil'),
      it(E(635), "une phrase entière"),
    ], chk("Pour finir, quel est le radical du conditionnel ?",
        ['fini-', 'finiss-', 'finir-'], 2,
        "L'infinitif entier, exactement comme au futur. EN: the whole infinitive, as in the future.")),
    grp('Les verbes en -re', [
      it(E(621), "le e de vendre tombe"),
      it(E(622), 'la case nous'),
      it(E(626), 'attendre, même chemin'),
      it(E(633), 'répondre dans une phrase'),
    ], chk('Qu’est-ce qui disparaît dans vendre avant la terminaison ?',
        ['le e final', 'le d', 'le r'], 0,
        "Il reste vendr-, et le r ne part jamais. EN: the final e goes, the r never does.")),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recette'],
};

const A2_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a2-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Une personne ou plusieurs',
  lines: [
    ln(E(628)), ln(E(630)), ln(E(629)), ln(E(631)),
    ln(E(632)), ln(E(634)), ln(E(635)), ln(E(637)),
  ],
  questions: [
    { q: 'Première phrase : qui travaillerait le samedi ?', opts: ['nous', 'moi'], correct: 1,
      why: "« Je travaillerais » : une seule personne. EN: one person." },
    { q: 'Deuxième phrase : combien de personnes partiraient plus tôt ?', opts: ['plusieurs', 'une'], correct: 0,
      why: "« Nous partirions » : le i s'entend, donc c'est la case nous. EN: the audible i marks nous." },
    { q: 'Quatrième phrase : le sujet est-il au singulier ?', opts: ['Oui', 'Non, ils vendraient'], correct: 1,
      why: "« Ils vendraient » se prononce comme « il vendrait » : c'est le pronom qui tranche. EN: the pronoun decides." },
    { q: 'Sixième phrase : combien de temps attendrait-on ?', opts: ['un mois', 'une semaine', 'un an'], correct: 1,
      why: "« Nous attendrions encore une semaine. » EN: another week." },
    { q: 'Septième phrase : la personne finirait quand ?', opts: ['avant midi', 'après midi'], correct: 0,
      why: "« Tu finirais avant midi. » EN: before noon." },
  ],
  audio: REC('rec-b1-08-recette-ecoute'),
  say: REFRAME,
  terms: ['recette'],
};

const A2_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a2-dictee',
  layer: 'core',
  title: 'Écris ce que tu entends',
  frSub: 'Le i de la case nous',
  itemIds: dicteeFor(2),
  audio: AUDIO,
  say: REFRAME,
  terms: ['recette'],
};

const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de fabrication',
  errors: [
    { wrong: 'je parlais au propriétaire, à ta place',
      right: 'je parlerais au propriétaire, à ta place',
      why: "Normal : les fins sont celles de l'imparfait. Mais le radical est celui du futur, donc le r doit être là. EN: right endings, missing stem." },
    { wrong: 'nous parlerons plus doucement, si tu veux',
      right: 'nous parlerions plus doucement, si tu veux',
      why: "« Parlerons » existe et veut dire autre chose : c'est le futur. Le i de nous est ce qui sépare les deux. EN: the i is the whole difference." },
    { wrong: 'je vendrerais la voiture',
      right: 'je vendrais la voiture',
      why: "Le réflexe est bon : on ajoute -rais. Mais vendre a déjà son r ; on enlève le e, on n'ajoute pas un deuxième r. EN: vendre already owns its r." },
    { wrong: 'tu finirais-tu avant midi',
      right: 'tu finirais avant midi',
      why: "En français du Québec, « tu » sert aussi à poser une question. À l'écrit, garde la forme simple. EN: fine in spoken Québec French, not in writing." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recette', 'piege'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('La recette', "Le conditionnel se fabrique avec...",
      ["le radical de l'imparfait et les fins du futur", 'un radical à part', "le radical du futur et les fins de l'imparfait"], 2,
      "Deux morceaux que tu avais déjà. EN: two pieces you already owned."),
  ctl('Le r', 'Par quelle lettre finit toujours le radical ?',
      ['par r', 'par e', 'par i'], 0,
      "parler-, finir-, vendr-, ser-, aur-. EN: always r."),
  ctl('La case nous', 'Qu’est-ce qui sépare nous parlerons de nous parlerions ?',
      ['rien, à l’oreille', 'un i, et il s’entend'], 1,
      "C'est la seule paire de cette leçon que l'oreille tranche sans hésiter. EN: the only pair the ear settles cleanly."),
], ['recette', 'piege']);

const ACT2: ActDef = {
  act: {
    id: 'act2', title: 'La recette',
    opener: {
      line: "Tu as déjà payé les deux morceaux : il ne reste qu'à les coller. EN: You have already paid for both pieces: all that is left is gluing them together.",
      imageRef: 'lessons/conditionnel-present/act02.jpg',
    },
    sections: [],
    milestone: "Tu construis le conditionnel de n'importe quel verbe régulier, aux six personnes. EN: You can build the conditional of any regular verb, in all six persons.",
    estScreens: 38, restPoints: ['a2-construire'],
  },
  sections: [A2_HISTOIRE, A2_RECETTE, A2_FINS, A2_CONSTRUIRE, A2_ECOUTE, A2_DICTEE, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — LES RADICAUX RENDUS
 * ══════════════════════════════════════════════════════════════════════════ */

const A3_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a3-exemples',
  layer: 'core',
  title: 'Cinq phrases que tu sais déjà écrire',
  frSub: 'Les radicaux irréguliers en situation',
  examples: [
    ex(E(656), "être donne ser-, et c'est la forme la plus utile de la liste"),
    ex(E(657), 'aller donne ir-, un radical de deux lettres'),
    ex(E(658), 'voir donne verr-, avec deux r'),
    ex(E(659), 'avoir donne aur-, ici pour demander un service'),
    ex('fr.a2.hebergement.130', "être encore, dans l'ouverture la plus polie du français"),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical'],
};

const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-radicaux',
  title: 'Quatre radicaux qui font le plus de travail',
  frSub: 'ser-, aur-, ir-, fer-',
  hint: 'Quatre cartes. Tu les as déjà apprises au futur.',
  audio: REC('rec-b1-08-radicaux'),
  say: REFRAME,
  terms: ['radical'],
  cards: [
    { head: 'être', label: Cap(FUTUR_IRR_REF),
      fr: 'ser- · je serais',
      sub: '[suhr] · [zhuh suh-REH]',
      body: `« ${B106_REFRAME} » Le radical change, la fin est toujours celle de l'imparfait. EN: ${B106_REFRAME_EN}` },
    { head: 'avoir', label: 'aur-',
      fr: "aur- · j'aurais",
      sub: '[ohr] · [zhoh-REH]',
      body: "Deux lettres avant la fin, et le j reste collé devant. EN: two letters, and the j stays attached." },
    { head: 'aller', label: 'ir-',
      fr: "ir- · j'irais",
      sub: '[eer] · [zhee-REH]',
      body: "Le radical le plus court du français. Il ne ressemble plus du tout à aller. EN: the shortest stem in French." },
    { head: 'faire', label: 'fer-',
      fr: 'fer- · je ferais',
      sub: '[fuhr] · [zhuh fuh-REH]',
      body: "Écrit fer-, prononcé [fuhr], exactement comme nous faisons. EN: written fer-, said [fuhr]." },
  ],
};

const A3_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-table',
  layer: 'core',
  sheetId: 'sheet-radicaux',
  title: 'Six radicaux à toucher',
  frSub: 'Touche une ligne pour la phrase entière',
  cols: ['Infinitif', 'Radical', 'Exemple'],
  rows: [
    { cells: ['pouvoir', 'pourr-', 'je pourrais'], say: 'Je pourrais passer vers midi.',
      detail: { title: 'pouvoir', body: "Deux r, un seul son. C'est le verbe le plus utile de la liste. EN: two r, one sound, and the most useful verb here.", say: 'Nous pourrions visiter samedi matin.' } },
    { cells: ['vouloir', 'voudr-', 'je voudrais'], say: 'Je voudrais un rendez-vous jeudi matin.',
      detail: { title: 'vouloir', body: "Un d apparaît, comme au futur. Je voudrais est la phrase la plus dite du français de service. EN: a d appears, exactly as in the future.", say: 'Ils voudraient déménager avant l’hiver.' } },
    { cells: ['devoir', 'devr-', 'je devrais'], say: 'Tu devrais prendre rendez-vous cette semaine.',
      detail: { title: 'devoir', body: "Le v reste, le oi part. Tu devrais est la façon normale de conseiller. EN: the v stays, the oi goes.", say: 'Vous devriez lire le contrat avant de signer.' } },
    { cells: ['savoir', 'saur-', 'je saurais'], say: 'Je ne saurais pas répondre à cette question.',
      detail: { title: 'savoir', body: "Comme avoir, en plus court. On l'entend surtout à la forme négative. EN: like avoir, and mostly heard in the negative.", say: 'Je ne saurais pas te dire.' } },
    { cells: ['venir', 'viendr-', 'je viendrais'], say: 'Je viendrais volontiers, mais je travaille samedi.',
      detail: { title: 'venir', body: "Un d apparaît ici aussi. Tenir suit exactement le même chemin : tiendr-. EN: a d appears; tenir does the same.", say: 'Mon frère viendrait avec nous.' } },
    { cells: ['falloir', 'faudr-', 'il faudrait'], say: 'Il faudrait vérifier les charges.',
      detail: { title: 'falloir', body: "Ce verbe n'existe qu'avec il. Il faudrait est un conseil que personne ne reçoit en pleine figure. EN: only ever used with il.", say: 'Il faudrait prévoir un budget pour les travaux.' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'conseil'],
};

const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois familles de radicaux',
  groups: [
    grp('Les radicaux courts', [
      it(E(638), 'être, deux lettres avant la fin'),
      it(E(640), 'avoir, même longueur'),
      it(E(642), 'aller, le plus court de tous'),
      it(E(643), 'faire, écrit fer-'),
    ], chk('Qu’ont en commun ces quatre radicaux ?',
        ['ils gardent leur infinitif', 'ils finissent tous par r', 'ils prennent un d'], 1,
        "Comme tous les radicaux du futur. EN: every future stem ends in r."),
    ),
    grp('Les radicaux avec un d', [
      it(E(647), 'vouloir, un d apparaît'),
      it(E(648), 'devoir, le oi disparaît'),
      it(E(651), 'venir, un d aussi'),
      it(E(653), 'falloir, seulement avec il'),
    ], chk('Lequel de ces quatre verbes ne se conjugue qu’avec il ?',
        ['vouloir', 'devoir', 'falloir'], 2,
        "Il faudrait, il faut, il fallait : jamais je faudrais. EN: falloir is impersonal, always."),
    ),
    grp('Les radicaux avec deux r', [
      it(E(645), 'pouvoir, deux r et un seul son'),
      it(E(652), 'voir, deux r aussi'),
      it(E(654), 'envoyer, deux r encore'),
      it(E(655), 'recevoir, un seul r'),
    ], chk('Est-ce que les deux r se prononcent deux fois ?',
        ['Non, on en entend un seul', 'Oui, on les entend tous les deux'], 0,
        "Pourrais, verrais, enverrais : un seul [ʁ] à l'oreille. EN: one audible r."),
    ),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical', 'recette'],
};

const A3_FLASH: Sec<'flashcards'> = {
  type: 'flashcards',
  id: 'a3-flash',
  layer: 'core',
  title: 'Huit radicaux, de mémoire',
  frSub: 'Anglais devant, français derrière',
  cards: [
    { front: 'I would be', back: 'je serais', say: 'Ce serait parfait pour nous.' },
    { front: 'I would have', back: "j'aurais", say: 'Tu aurais un peu de temps ce soir ?' },
    { front: 'I would go', back: "j'irais", say: "On irait à pied, ce n'est pas loin." },
    { front: 'I would do', back: 'je ferais', say: 'À ta place, je demanderais une réduction.' },
    { front: 'I could', back: 'je pourrais', say: 'Je pourrais passer vers midi.' },
    { front: 'I would like', back: 'je voudrais', say: 'Je voudrais un rendez-vous jeudi matin.' },
    { front: 'you should', back: 'tu devrais', say: 'Tu devrais te reposer un peu.' },
    { front: 'it would be necessary', back: 'il faudrait', say: 'Il faudrait vérifier les charges.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['radical'],
};

/** TRAP. The failing instinct: the learner takes the IMPARFAIT of an
 *  irregular verb, because the endings are right and the stem is the thing
 *  that has to change. `promptSound` holds the wrong version and is never
 *  spoken. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: "L'imparfait porte le même costume",
  rule: {
    title: 'Les fins sont pareilles, les radicaux non',
    body: "je faisais et je ferais ont exactement la même terminaison. Ce qui les sépare, c'est le radical : faisais vient du présent, ferais vient du futur. Cherche le r. EN: the endings match; the stem does not, and the r is the giveaway.",
  },
  cards: [
    { promptLabel: 'faire', promptSound: 'À ta place, je faisais autrement.', fr: 'À ta place, je ferais autrement.', ipa: '/a ta plas ʒə fə.ʁɛ o.tʁə.mɑ̃/', tip: "Le r manque, donc la phrase parle du passé. EN: no r, so it is the past." },
    { promptLabel: 'vouloir', promptSound: 'Je voulais un rendez-vous jeudi matin.', fr: 'Je voudrais un rendez-vous jeudi matin.', ipa: '/ʒə vu.dʁɛ œ̃ ʁɑ̃.de.vu ʒø.di ma.tɛ̃/', tip: "voulais raconte hier, voudrais demande aujourd'hui. EN: voulais tells yesterday." },
    { promptLabel: 'pouvoir', promptSound: 'Je pouvais passer vers midi.', fr: 'Je pourrais passer vers midi.', ipa: '/ʒə pu.ʁɛ pa.se vɛʁ mi.di/', tip: "Un seul r change la proposition en souvenir. EN: one r turns an offer into a memory." },
    { promptLabel: 'devoir', promptSound: 'Tu devais te reposer un peu.', fr: 'Tu devrais te reposer un peu.', ipa: '/ty də.vʁɛ tə ʁə.po.ze œ̃ pø/', tip: "devais est un rappel, devrais est un conseil. EN: devais reminds, devrais advises." },
    { promptLabel: 'aller', promptSound: "J'allais volontiers, mais je travaille.", fr: "J'irais volontiers, mais je travaille.", ipa: '/ʒi.ʁɛ vɔ.lɔ̃.tje mɛ ʒə tʁa.vaj/', tip: "Le radical d'aller ne garde rien de aller. EN: the stem keeps nothing of aller." },
    { promptLabel: 'savoir', promptSound: 'Je ne savais pas répondre à cette question.', fr: 'Je ne saurais pas répondre à cette question.', ipa: '/ʒə nə so.ʁɛ pa ʁe.pɔ̃dʁ a sɛt kɛs.tjɔ̃/', tip: "savais avoue une ignorance passée, saurais refuse poliment. EN: saurais refuses politely." },
  ],
  drill: [
    { promptSay: 'À ta place, je ... autrement.', opts: ['faisais', 'ferais'], correct: 1 },
    { promptSay: 'Quand j’étais petit, je ... du lait.', opts: ['buvais', 'boirais'], correct: 0 },
    { promptSay: 'Je ... un rendez-vous jeudi matin.', opts: ['voulais', 'voudrais'], correct: 1 },
    { promptSay: 'Avant, on ... au marché tous les samedis.', opts: ['allait', 'irait'], correct: 0 },
    { promptSay: 'Tu ... te reposer un peu.', opts: ['devais', 'devrais'], correct: 1 },
    { promptSay: 'Je ... passer vers midi, si ça vous va.', opts: ['pourrais', 'pouvais'], correct: 0 },
    { promptSay: 'Il ... vérifier les charges avant de signer.', opts: ['fallait', 'faudrait'], correct: 1 },
    { promptSay: 'À cette époque, nous ... la mer depuis le balcon.', opts: ['voyions', 'verrions'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Cherche le r' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme sans r raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-08-piege-radical'),
  say: REFRAME,
  terms: ['radical', 'recette'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('La facture', 'Combien de radicaux irréguliers cette leçon te fait-elle apprendre ?',
      ['aucun, tu les as déjà', 'quinze', 'six'], 0,
      `Ce sont ceux du futur, appris à ${FUTUR_IRR_REF}. EN: they are the future stems you already own.`),
  ctl('falloir', 'Avec quel pronom écrit-on faudrait ?',
      ['je', 'il', "n'importe lequel"], 1,
      "Il faudrait, et rien d'autre. EN: il faudrait, and nothing else."),
  ctl('Le test', 'Tu hésites entre je faisais et je ferais. Que cherches-tu ?',
      ['la terminaison', 'le r du radical'], 1,
      "Les terminaisons sont identiques ; seul le radical tranche. EN: only the stem decides."),
], ['radical', 'recette']);

const ACT3: ActDef = {
  act: {
    id: 'act3', title: 'Les radicaux rendus',
    opener: {
      line: "Quinze radicaux irréguliers t'attendent, et tu les as tous déjà payés au futur. EN: Fifteen irregular stems are waiting, and you paid for every one of them in the future tense.",
      imageRef: 'lessons/conditionnel-present/act03.jpg',
    },
    sections: [],
    milestone: "Tu écris le conditionnel de être, avoir, aller, faire, pouvoir, vouloir et devoir sans réfléchir. EN: You can write the conditional of the seven commonest irregular verbs without stopping to think.",
    estScreens: 34, restPoints: ['a3-table'],
  },
  sections: [A3_EXEMPLES, A3_CARTES, A3_TABLE, A3_CONSTRUIRE, A3_FLASH, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — AI OU AIS
 * ══════════════════════════════════════════════════════════════════════════ */

const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: 'La lettre qui promettait trop',
  frSub: 'Une lettre change tout',
  setting: "Karim relit son message avant de l'envoyer. Sa sœur Awa, à Dakar, le lit par-dessus son épaule.",
  bubbles: [
    { from: 'user', fr: 'Je signerai le bail dès demain.', en: 'I will sign the lease as early as tomorrow.' },
    { from: 'coach', fr: 'Tu as déjà décidé, alors.', en: 'So you have already decided.', warn: 'futur : un projet daté' },
    { from: 'user', fr: "Non, je voulais dire : si l'appartement me plaît.", en: 'No, I meant: if I like the flat.' },
    { from: 'coach', fr: 'Alors il te manque un s. Je signerais.', en: 'Then you are missing an s. Je signerais.' },
    { from: 'user', fr: "À l'oral, personne n'aurait vu la différence.", en: 'Out loud, nobody would have noticed the difference.' },
    { from: 'coach', fr: "À l'oral, non. Par écrit, l'agente lit une promesse.", en: 'Out loud, no. In writing, the agent reads a promise.' },
    { from: 'narrator', fr: "Karim a ajouté le s, puis il a relu ses quatre autres verbes.", en: 'Karim added the s, then reread his four other verbs.' },
  ],
  closing: { fr: 'Une lettre muette, et une promesse devient une idée.', en: 'One silent letter, and a promise becomes an idea.' },
  audio: REC('rec-b1-08-lettre'),
  say: REFRAME,
  terms: ['piege'],
};

const A4_PAIRES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-paires',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Quatre paires, quatre indices',
  frSub: 'Futur ou conditionnel',
  hint: 'Quatre cartes. Regarde le mot qui accompagne le verbe.',
  audio: REC('rec-b1-08-paires'),
  say: REFRAME,
  terms: ['piege'],
  cards: [
    { head: 'Un moment daté', label: 'le futur',
      fr: 'Demain, je parlerai au propriétaire.',
      sub: '[duh-mehⁿ zhuh par-luh-ray oh proh-pryay-TEHR]',
      body: `« ${B107_REFRAME} » Demain, dès que, quand : le moment est réel, donc pas de s. EN: ${B107_REFRAME_EN}` },
    { head: 'Une condition', label: 'le conditionnel',
      fr: 'À ta place, je parlerais au propriétaire.',
      sub: '[ah tah plas zhuh par-luh-reh oh proh-pryay-TEHR]',
      body: "À ta place, avec un balcon, dans ce cas : le fait n'est pas là. EN: the fact is not there." },
    { head: 'La case nous', label: 'audible',
      fr: 'nous partirons · nous partirions',
      sub: '[noo par-tee-ROHⁿ] · [noo par-tee-RYOHⁿ]',
      body: "Ici l'oreille suffit : le i s'entend. Pareil pour vous et pour il. EN: the ear is enough here." },
    { head: 'La case je', label: 'presque muette',
      fr: 'je parlerai · je parlerais',
      sub: '[zhuh par-luh-RAY] · [zhuh par-luh-REH]',
      body: "[e] contre [ɛ]. Beaucoup de gens ne les séparent pas. Le contexte décide. EN: many speakers do not separate them." },
  ],
};

const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Projet ou idée',
  lines: [
    ln(E(668)), ln(E(669)), ln(E(670)), ln(E(671)),
    ln(E(672)), ln(E(673)), ln(E(674)), ln(E(675)),
  ],
  questions: [
    { q: 'Première phrase : le rendez-vous est-il décidé ?', opts: ['Oui, demain', 'Non, ce serait une idée'], correct: 0,
      why: "« Demain » date le projet, donc c'est le futur. EN: a dated project takes the future." },
    { q: 'Deuxième phrase : qui parlerait au propriétaire ?', opts: ['le propriétaire', 'celui qui parle, à ta place'], correct: 1,
      why: "« À ta place » pose une condition, donc le conditionnel. EN: à ta place sets a condition." },
    { q: 'Quatrième phrase : le dossier sera-t-il fini ce soir ?', opts: ['Non, la personne est fatiguée', 'Oui, c’est promis'], correct: 0,
      why: "« mais je suis fatigué » annule le projet. EN: the second half cancels it." },
    { q: 'Cinquième et sixième phrases : laquelle est un projet ?', opts: ['la cinquième', 'la sixième'], correct: 0,
      why: "La cinquième dit « je prendrai », la sixième « je prendrais volontiers ». EN: the fifth is the plan." },
    { q: 'Septième phrase : que dit-elle ?', opts: ['nous partirions lundi', 'rien de précis', 'nous partirons lundi'], correct: 2,
      why: "Pas de i : c'est le futur, et ici l'oreille suffit. EN: no i, so it is the future." },
    { q: 'Huitième phrase : qu’est-ce qui t’a permis de trancher ?', opts: ['le i qu’on entend', 'le pronom', 'le mot lundi'], correct: 0,
      why: "partirions contre partirons : le i est audible. EN: the i is audible in the nous form." },
  ],
  audio: REC('rec-b1-08-paires-ecoute'),
  say: REFRAME,
  terms: ['piege'],
};

const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Range chaque phrase du bon côté',
  groups: [
    grp('Un projet daté', [
      it(E(668), 'demain : le moment est fixé'),
      it(E(670), 'ce soir : fixé aussi'),
      it(E(672), 'un train à une heure précise'),
      it(E(676), 'un jour : lointain, mais réel'),
    ], chk('Qu’ont en commun ces quatre phrases ?',
        ['elles imaginent', 'elles annoncent un moment', 'elles conseillent'], 1,
        "Chacune situe l'action dans le temps réel. EN: each places the action in real time."),
    ),
    grp('Une idée, une condition', [
      it(E(669), 'à ta place : une condition'),
      it(E(671), 'mais je suis fatigué : le projet tombe'),
      it(E(673), 'volontiers : une envie, pas une décision'),
      it(E(677), "bien : la même envie, plus douce"),
    ], chk('Dans « Je finirais ce dossier ce soir, mais je suis fatigué », le dossier sera-t-il fini ?',
        ['Oui', 'Non'], 1,
        "La deuxième moitié retire ce que la première propose. EN: the second half withdraws the offer."),
    ),
    ctl('Le s', 'Tu écris « Demain, je signerais le bail ». Que lit ton lecteur ?',
        ['une promesse', 'une hésitation', 'une faute'], 2,
        "Demain annonce un projet, le s annonce une idée : les deux se contredisent. EN: the two signals contradict each other."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['piege', 'recette'],
};

const A4_INDICES: Sec<'focus'> = {
  type: 'focus',
  id: 'a4-indices',
  layer: 'core',
  sheetId: 'sheet-recette',
  title: 'Quatre façons de trancher',
  frSub: 'Quand tu hésites entre -ai et -ais',
  points: [
    "Change de personne dans ta tête : nous partirons ou nous partirions. Le i tranche. EN: switch to nous; the i settles it.",
    "Cherche un mot de temps : demain, lundi, dès que. Un moment réel annonce le futur. EN: a real moment points to the future.",
    "Cherche une condition : à ta place, avec un balcon, dans ce cas. EN: a condition points to the conditional.",
    "Demande-toi si tu t'engages. Si oui, pas de s. EN: if you are committing, drop the s.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['piege'],
};

/** TRAP. The failing instinct: hearing [ʁe] and [ʁɛ] as the same thing, so
 *  the learner writes whichever came to mind. Every card pairs one context
 *  with the wrong tense in `promptSound`. */
const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: 'Huit phrases, un seul s',
  rule: {
    title: 'Le contexte écrit la lettre',
    body: "Un moment réel dans la phrase, et c'est le futur, sans s. Une condition, une envie ou un conseil, et c'est le conditionnel, avec son s. L'oreille ne tranchera jamais. EN: context decides, because the ear never will.",
  },
  cards: [
    { promptLabel: 'demain', promptSound: 'Demain, je parlerais au propriétaire.', fr: 'Demain, je parlerai au propriétaire.', ipa: '/də.mɛ̃ ʒə paʁ.lə.ʁe o pʁɔ.pʁje.tɛʁ/', tip: 'Un moment daté : pas de s. EN: a dated moment takes no s.' },
    { promptLabel: 'à ta place', promptSound: 'À ta place, je parlerai au propriétaire.', fr: 'À ta place, je parlerais au propriétaire.', ipa: '/a ta plas ʒə paʁ.lə.ʁɛ o pʁɔ.pʁje.tɛʁ/', tip: "Une condition : le s revient. EN: a condition brings the s back." },
    { promptLabel: 'volontiers', promptSound: 'Je prendrai volontiers le train de sept heures.', fr: 'Je prendrais volontiers le train de sept heures.', ipa: '/ʒə pʁɑ̃.dʁɛ vɔ.lɔ̃.tje lə tʁɛ̃ də sɛ.tœʁ/', tip: "Volontiers dit une envie, pas un billet acheté. EN: a wish, not a ticket." },
    { promptLabel: 'un jour', promptSound: "Un jour, j'achèterais une maison.", fr: "Un jour, j'achèterai une maison.", ipa: '/œ̃ ʒuʁ ʒa.ʃɛ.tə.ʁe yn mɛ.zɔ̃/', tip: "Un jour est vague mais réel : c'est un projet. EN: vague, but still a plan." },
    { promptLabel: 'la case nous', promptSound: 'Nous partirions lundi, le billet est acheté.', fr: 'Nous partirons lundi, le billet est acheté.', ipa: '/nu paʁ.ti.ʁɔ̃ lœ̃.di lə bi.jɛ ɛ.ta.ʃə.te/', tip: "Ici, l'oreille entend la faute : le i n'a rien à faire là. EN: here the ear catches it." },
    { promptLabel: 'mais', promptSound: 'Je finirai ce dossier ce soir, mais je suis fatigué.', fr: 'Je finirais ce dossier ce soir, mais je suis fatigué.', ipa: '/ʒə fi.ni.ʁɛ sə dɔ.sje sə swaʁ mɛ ʒə sɥi fa.ti.ɡe/', tip: "Le mais annule le projet, donc le verbe recule. EN: the mais cancels the plan." },
  ],
  drill: [
    { promptSay: 'Demain, je ... au propriétaire.', opts: ['parlerais', 'parlerai'], correct: 1 },
    { promptSay: 'À ta place, je ... au propriétaire.', opts: ['parlerais', 'parlerai'], correct: 0 },
    { promptSay: 'Nous ... lundi, le billet est acheté.', opts: ['partirions', 'partirons'], correct: 1 },
    { promptSay: 'Avec un balcon, ce ... parfait.', opts: ['serait', 'sera'], correct: 0 },
    { promptSay: 'Dès que j’aurai les clés, je vous ... un message.', opts: ['enverrais', 'enverrai'], correct: 1 },
    { promptSay: 'Je ... volontiers le train de sept heures.', opts: ['prendrais', 'prendrai'], correct: 0 },
    { promptSay: 'Un jour, j’... une maison.', opts: ['achèterais', 'achèterai'], correct: 1 },
    { promptSay: 'Dans ce cas, je ... tout de suite.', opts: ['signerais', 'signerai'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le contexte écrit la lettre' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la mauvaise lettre raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-08-piege-paires'),
  say: REFRAME,
  terms: ['piege'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl("L'oreille", 'Peux-tu entendre la différence entre je parlerai et je parlerais ?',
      ['Presque jamais', 'Oui, toujours', 'Seulement en chantant'], 0,
      "[e] contre [ɛ] en fin de mot : beaucoup de gens ne les séparent pas. EN: most speakers do not separate them."),
  ctl('Le test', 'Quel est le test le plus sûr quand tu écris ?',
      ['répéter la phrase plus fort', 'changer de personne pour entendre le i'], 1,
      "nous partirons ou nous partirions : là, l'oreille tranche. EN: the nous form settles it."),
  ctl('Le sens', 'Tu écris « Demain, je signerais le bail ». Où est le problème ?',
      ['nulle part', 'la date promet, le s hésite', 'le verbe est mal formé'], 1,
      "Deux signaux contraires dans la même phrase. EN: two contradictory signals."),
], ['piege', 'recette']);

const ACT4: ActDef = {
  act: {
    id: 'act4', title: 'Ai ou ais',
    opener: {
      line: "Une lettre muette sépare une promesse d'une idée : ici tu apprends à la placer. EN: One silent letter separates a promise from an idea: here you learn where to put it.",
      imageRef: 'lessons/conditionnel-present/act04.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre -ai et -ais par le contexte, pas par l'oreille. EN: You choose between -ai and -ais by context, not by ear.",
    estScreens: 36, restPoints: ['a4-ecoute'],
  },
  sections: [A4_HISTOIRE, A4_PAIRES, A4_ECOUTE, A4_CONSTRUIRE, A4_INDICES, A4_PIEGE, A4_CHECK],
  imports: IMPORTED.act4,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LE SOUHAIT
 * ══════════════════════════════════════════════════════════════════════════ */

const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Deux phrases, deux réponses',
  frSub: 'Vouloir et voudrais au guichet',
  setting: "Gare du Midi, Bruxelles. Deux voyageurs, le même guichet, à trois minutes d'écart.",
  bubbles: [
    { from: 'narrator', fr: 'Le premier voyageur arrive au guichet.', en: 'The first traveller reaches the counter.' },
    { from: 'user', fr: 'Je veux un billet pour demain matin.', en: 'I want a ticket for tomorrow morning.', warn: 'présent : une décision' },
    { from: 'coach', fr: 'Sept heures douze ou neuf heures quarante.', en: 'Seven twelve or nine forty.' },
    { from: 'narrator', fr: 'Le deuxième voyageur arrive trois minutes plus tard.', en: 'The second traveller arrives three minutes later.' },
    { from: 'user', fr: 'Je voudrais un billet pour demain matin.', en: 'I would like a ticket for tomorrow morning.', warn: 'conditionnel : une envie' },
    { from: 'coach', fr: 'Vous préférez partir tôt ou vers dix heures.', en: 'Would you rather leave early or around ten.' },
    { from: 'narrator', fr: "Même guichet, même employé, même train. Une seule chose a changé.", en: 'Same counter, same clerk, same train. Only one thing changed.' },
  ],
  closing: { fr: 'Je veux ferme la porte. Je voudrais la laisse ouverte.', en: 'Je veux closes the door. Je voudrais leaves it open.' },
  audio: REC('rec-b1-08-guichet'),
  say: REFRAME,
  terms: ['souhait', 'recul'],
};

const A5_OUVERTURES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-ouvertures',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Trois ouvertures pour une envie',
  frSub: 'voudrais, aimerais, préférerais',
  hint: 'Quatre cartes. Chacune ouvre une porte différente.',
  audio: REC('rec-b1-08-souhait'),
  say: REFRAME,
  terms: ['souhait'],
  cards: [
    { head: 'Je voudrais', label: 'vouloir',
      fr: 'Je voudrais un rendez-vous jeudi matin.',
      sub: '[zhuh voo-dreh uhⁿ rahⁿ-day-voo zhuh-dee mah-TEHⁿ]',
      body: "L'ouverture de service : au guichet, au comptoir, au téléphone. EN: the counter opener." },
    { head: "J'aimerais", label: 'aimer',
      fr: "J'aimerais changer de travail cette année.",
      sub: '[zheh-muh-reh shahⁿ-zhay duh trah-vahy seh-tah-NAY]',
      body: "Plus personnel : une envie qu'on raconte, pas une commande. EN: a wish you tell, not an order." },
    { head: 'Je préférerais', label: 'préférer',
      fr: 'Je préférerais commencer plus tôt.',
      sub: '[zhuh pray-fay-ruh-reh koh-mahⁿ-say plü TOH]',
      body: "Il y a déjà deux options sur la table, et tu en choisis une. EN: two options, and you pick one." },
    { head: 'Le refus doux', label: 'la sortie',
      fr: 'Je voudrais bien, mais je ne peux pas.',
      sub: '[zhuh voo-dreh byehⁿ meh zhuh nuh puh PAH]',
      body: "La même forme sert à dire non sans casser la relation. EN: the same form refuses gently." },
  ],
};

const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois ouvertures, trois situations',
  groups: [
    grp('Au guichet et au comptoir', [
      it(E(685), 'un service demandé'),
      it('fr.a1.marche.084', "la version la plus courte qui existe"),
      it('fr.a2.cafe.034', 'la même ouverture, au café'),
      it('fr.a2.transports-quotidiens.227', 'un billet, sans exiger'),
    ], chk('Que pourrait répondre l’employé après ces phrases ?',
        ['une question ou une proposition', 'rien, tout est décidé'], 0,
        "Une envie appelle une réponse ; une décision appelle un ticket. EN: a wish invites an answer."),
    ),
    grp('Ce qu’on raconte de soi', [
      it(E(681), 'un projet de vie, pas une commande'),
      it(E(687), 'un souhait lointain'),
      it('fr.b1.metiers.050', "l'envie et le doute dans la même phrase"),
      it('fr.b1.metiers.053', "un souhait qui attend une condition"),
    ], chk('« J’aimerais changer de travail cette année. » La décision est-elle prise ?',
        ['Oui', 'Non, c’est une envie'], 1,
        "Aimerais dit l'envie et laisse la décision dehors. EN: the wish is stated, the decision is not."),
    ),
    grp('Choisir entre deux options', [
      it(E(682), 'deux horaires sur la table'),
      it(E(686), 'deux chambres sur la table'),
      it(E(691), 'deux façons de payer'),
      it(E(692), 'la politesse par la négation'),
    ], chk('Quand utilises-tu préférerais plutôt que voudrais ?',
        ['quand tu commandes', 'quand tu refuses', 'quand il y a déjà un choix'], 2,
        "Préférer suppose deux options déjà posées. EN: préférer assumes two options already on the table."),
    ),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['souhait', 'politesse'],
};

const A5_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a5-exemples',
  layer: 'core',
  title: 'Cinq envies, cinq personnes',
  frSub: 'Le souhait ne se dit pas qu’à je',
  examples: [
    ex(E(683), 'nous : la case en -ions'),
    ex(E(684), 'elle : une envie racontée par quelqu’un d’autre'),
    ex(E(690), 'ils : la case en -aient'),
    ex(E(689), 'tu : une invitation, pas une question de police'),
    ex(E(693), 'la question ouverte, celle qui fait parler'),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['souhait'],
};

/** CHOOSE. The form is settled; here the MEANING picks between two
 *  grammatical sentences. */
const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Les deux marchent, une seule dit ce que tu veux',
  groups: [
    ctl('Au restaurant', "Tu as choisi ton plat et tu es prêt à commander. Que dis-tu ?",
        ['Je voudrais le poisson.', 'Je veux le poisson.'], 0,
        "Même décidé, on ouvre avec voudrais : c'est la forme normale du service. EN: even when decided, voudrais is the normal form."),
    ctl('Chez le médecin', "Le médecin demande ce qui ne va pas. Tu réponds...",
        ['Je voudrais avoir mal au dos.', "J'ai mal au dos."], 1,
        "Un fait est un fait. Le conditionnel ne sert pas à décrire ce qui est vrai. EN: a fact stays in the present."),
    ctl('Avec un ami', "Ton ami propose deux films et te demande lequel. Tu dis...",
        ['Je préférerais le deuxième.', 'Je veux le deuxième.', 'Je voudrais un film.'], 0,
        "Deux options posées : c'est exactement le métier de préférerais. EN: two options, so préférerais."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['souhait', 'recul'],
};

const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre erreurs de souhait',
  errors: [
    { wrong: 'Je voudrai un café, s’il vous plaît.',
      right: 'Je voudrais un café, s’il vous plaît.',
      why: "Normal : à l'oral, personne ne les sépare. Mais « je voudrai » promet de vouloir plus tard, ce qui ne veut rien dire au comptoir. EN: the future here promises to want later." },
    { wrong: 'J’aimerais bien de partir plus tôt.',
      right: 'J’aimerais bien partir plus tôt.',
      why: "L'anglais met un to, alors la main ajoute un de. Après aimerais, l'infinitif arrive nu. EN: no de after aimerais." },
    { wrong: 'Je voudrais que tu viens avec nous.',
      right: 'Je voudrais venir avec toi.',
      why: "Vouloir que ouvre le subjonctif, qui n'est pas dans cette leçon. Quand le sujet ne change pas, garde l'infinitif. EN: vouloir que needs the subjunctive, which comes later." },
    { wrong: 'Je serais content de vous rencontrer demain à quinze heures.',
      right: 'Je serai content de vous rencontrer demain à quinze heures.',
      why: "L'intention est polie, mais le rendez-vous est pris et daté. Une politesse ne rend pas un fait incertain. EN: politeness does not unfix a fixed appointment." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['souhait', 'piege'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('Les trois ouvertures', 'Laquelle suppose que deux options sont déjà sur la table ?',
      ['je voudrais', 'je préférerais', "j'aimerais"], 1,
      "Préférer choisit entre des choses déjà posées. EN: préférer chooses between options already there."),
  ctl('Le fait', 'Le conditionnel sert-il à décrire ce qui est vrai maintenant ?',
      ['Non', 'Oui'], 0,
      "« J'ai mal au dos » reste au présent. Le recul sert à ce qui n'est pas encore. EN: facts stay in the present."),
  ctl('Le s', 'Au comptoir, tu écris ta commande. Voudrai ou voudrais ?',
      ['voudrai', 'voudrais'], 1,
      "Voudrai promettrait de vouloir plus tard. EN: voudrai would promise to want later."),
], ['souhait', 'recul']);

const ACT5: ActDef = {
  act: {
    id: 'act5', title: 'Le souhait',
    opener: {
      line: "Tu sais déjà ce que tu veux : ici tu apprends à le dire sans fermer la porte. EN: You already know what you want: here you learn to say it without closing the door.",
      imageRef: 'lessons/conditionnel-present/act05.jpg',
    },
    sections: [],
    milestone: "Tu ouvres une envie avec voudrais, aimerais ou préférerais, et tu choisis la bonne des trois. EN: You can open a wish with voudrais, aimerais or préférerais, and pick the right one of the three.",
    estScreens: 32, restPoints: ['a5-construire'],
  },
  sections: [A5_HISTOIRE, A5_OUVERTURES, A5_CONSTRUIRE, A5_EXEMPLES, A5_CHOISIR, A5_ERREURS, A5_CHECK],
  imports: IMPORTED.act5,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — DEMANDER SANS IMPOSER
 * ══════════════════════════════════════════════════════════════════════════ */

const A6_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a6-histoire',
  layer: 'core',
  title: 'Six mots et une porte ouverte',
  frSub: 'La même demande, deux fois',
  setting: "Hôtel à Genève, huit heures du matin. Karim est à la réception avant une journée de réunions.",
  bubbles: [
    { from: 'user', fr: 'Vous pouvez me réveiller à six heures.', en: 'You can wake me at six.', warn: 'présent : une instruction' },
    { from: 'coach', fr: 'Six heures. Je le note.', en: 'Six o clock. I am noting it.' },
    { from: 'narrator', fr: "Le lendemain, Karim a besoin d'autre chose, et il essaie autrement.", en: 'The next day Karim needs something else, and he tries differently.' },
    { from: 'user', fr: 'Pourriez-vous me réveiller à six heures.', en: 'Could you wake me at six.' },
    { from: 'coach', fr: "Bien sûr. Vous préférez un appel ou un réveil dans la chambre.", en: 'Of course. Would you rather have a call or an alarm in the room.' },
    { from: 'user', fr: "La deuxième fois, on m'a proposé quelque chose.", en: 'The second time, I was offered something.' },
    { from: 'coach', fr: "Parce que tu avais laissé la place pour répondre autre chose qu'un oui.", en: 'Because you had left room for an answer other than yes.' },
  ],
  closing: { fr: 'Pouvez-vous attend un oui. Pourriez-vous attend une réponse.', en: 'Pouvez-vous waits for a yes. Pourriez-vous waits for an answer.' },
  audio: REC('rec-b1-08-reception'),
  say: REFRAME,
  terms: ['politesse', 'recul'],
};

const A6_ECHELLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a6-echelle',
  layer: 'core',
  sheetId: 'sheet-demander',
  title: 'Du plus direct au plus prudent',
  frSub: 'Touche une ligne pour savoir où elle se dit',
  cols: ['Forme', 'Effet', 'Où'],
  rows: [
    { cells: ['Passez-moi le sel.', 'un ordre', 'en famille'], say: 'Passez-moi le sel.',
      detail: { title: "L'impératif", body: "Ni impoli ni poli : il suppose simplement que la réponse est oui. EN: it assumes the answer is yes.", say: 'Ferme la fenêtre, il fait froid.' } },
    { cells: ['Tu peux me passer le sel ?', 'une demande directe', 'entre amis'], say: 'Tu peux me passer le sel ?',
      detail: { title: 'Le présent', body: "On demande la capacité, ce qui revient à demander le service. Très courant à l'oral. EN: very common in speech.", say: 'Tu peux me rappeler ce soir ?' } },
    { cells: ['Tu pourrais me passer le sel ?', 'une demande souple', 'partout'], say: 'Tu pourrais me passer le sel ?',
      detail: { title: 'Le conditionnel avec tu', body: "Un pas en arrière, sans cérémonie. Ça marche avec des amis comme avec des collègues. EN: a step back, without ceremony.", say: 'Tu pourrais me donner son numéro ?' } },
    { cells: ['Pourriez-vous m’aider ?', 'une demande polie', 'guichet, bureau'], say: 'Pourriez-vous m’aider, s’il vous plaît ?',
      detail: { title: "L'inversion", body: "La forme normale du service et du courriel professionnel. Rien d'ancien là-dedans. EN: the normal service and email form.", say: "Pourriez-vous m'envoyer le contrat ?" } },
    { cells: ['Ce serait possible de...', 'une demande prudente', 'quand on peut dire non'], say: 'Est-ce que ce serait possible de visiter demain ?',
      detail: { title: 'La demande indirecte', body: "Tu ne demandes plus à la personne, tu demandes si la chose est possible. EN: you ask whether the thing is possible.", say: 'Est-ce que ce serait possible de payer plus tard ?' } },
    { cells: ['Ça vous dérangerait de...', 'une demande qui s’excuse', 'quand tu déranges'], say: 'Ça vous dérangerait de fermer la fenêtre ?',
      detail: { title: "L'excuse intégrée", body: "Tu nommes le dérangement avant que l'autre y pense. Réservé aux vraies gênes. EN: you name the trouble first.", say: 'Ça te dérangerait de baisser un peu le son ?' } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['politesse', 'recul'],
};

const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Quatre ouvertures à garder en tête',
  frSub: 'Ce qui se dit au guichet et par courriel',
  hint: 'Quatre cartes. Note qui est le sujet de chaque verbe.',
  audio: REC('rec-b1-08-demander'),
  say: REFRAME,
  terms: ['politesse'],
  cards: [
    { head: 'Pourriez-vous', label: 'pouvoir',
      fr: "Pourriez-vous m'envoyer le contrat ?",
      sub: '[poo-ryay voo mahⁿ-vwah-yay luh kohⁿ-TRAH]',
      body: "L'ouverture la plus utile du français écrit de tous les jours. EN: the most useful opener in everyday written French." },
    { head: 'Auriez-vous', label: 'avoir',
      fr: 'Auriez-vous une minute ?',
      sub: '[oh-ryay voo ün mee-NÜT]',
      body: "Pour demander une chose ou un moment, pas une action. EN: for a thing or a moment, not an action." },
    { head: 'Ce serait possible de', label: 'être',
      fr: 'Est-ce que ce serait possible de visiter demain ?',
      sub: '[es kuh suh suh-reh poh-seebl duh vee-zee-tay duh-MEHⁿ]',
      body: "Tu demandes si la chose est possible, donc personne n'a à refuser. EN: nobody has to refuse you personally." },
    { head: 'Ça vous dérangerait de', label: 'déranger',
      fr: 'Ça vous dérangerait de fermer la fenêtre ?',
      sub: '[sah voo day-rahⁿ-zhuh-reh duh fehr-may lah fuh-NETR]',
      body: "Tu nommes le dérangement toi-même. Garde-la pour les vraies gênes. EN: keep it for genuine trouble." },
  ],
};

const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois niveaux de demande',
  groups: [
    grp('Entre amis', [
      it(E(705), 'tu, et le service le plus simple du monde'),
      it(E(708), 'on, pour proposer sans décider'),
      it(E(701), 'la négation qui adoucit encore'),
      it(E(706), 'quatre mots, une demande complète'),
    ], chk('« Vous n’auriez pas un stylo ? » La négation rend la demande...',
        ['plus douce', 'plus sèche'], 0,
        "Tu proposes déjà la réponse non, donc dire non ne coûte rien. EN: you offer the refusal yourself."),
    ),
    grp('Au guichet et à la réception', [
      it('fr.a2.hebergement.075', 'un service précis, poliment'),
      it('fr.a2.expressions-frequentes.072', "l'aide, sans dire de quoi il s'agit"),
      it('fr.a2.hebergement.091', 'une personne, pas une chose'),
      it(E(699), 'du temps, pas une action'),
    ], chk('Quelle ouverture demande du TEMPS plutôt qu’une action ?',
        ['pourriez-vous', 'ça vous dérangerait de', 'auriez-vous'], 2,
        "Avoir donne une chose ou un moment ; pouvoir donne une action. EN: avoir gives a thing, pouvoir gives an action."),
    ),
    grp('Par écrit', [
      it(E(697), 'une demande de document'),
      it(E(703), 'la demande indirecte, la plus prudente'),
      it('fr.a2.hebergement.078', 'la même, apprise plus tôt'),
      it(E(709), 'la formule de fin, dans un courriel'),
    ], chk('Pourquoi « ce serait possible de » est-elle la plus prudente ?',
        ['elle ne vise personne', 'elle est plus longue', 'elle est plus ancienne'], 0,
        "Personne n'a à refuser : c'est la chose qui est possible ou non. EN: nobody is asked to refuse."),
    ),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['politesse', 'souhait'],
};

const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Qui demande quoi, et à qui',
  lines: [
    ln(E(697)), ln(E(705)), ln(E(699)), ln(E(702)),
    ln(E(703)), ln(E(701)), ln(E(707)), ln(E(708)),
  ],
  questions: [
    { q: 'Première phrase : qu’est-ce qu’on demande ?', opts: ['un rendez-vous', 'un contrat', 'de l’aide'], correct: 1,
      why: "« Pourriez-vous m'envoyer le contrat ? » EN: the contract." },
    { q: 'Deuxième phrase : la personne dit tu ou vous ?', opts: ['vous', 'tu'], correct: 1,
      why: "« Tu pourrais me passer le sel ? » : on est entre amis. EN: tu, so this is between friends." },
    { q: 'Quatrième phrase : la demande s’excuse-t-elle ?', opts: ['Oui, elle nomme le dérangement', 'Non, elle est neutre'], correct: 0,
      why: "« Ça vous dérangerait de » nomme la gêne avant l'autre. EN: it names the trouble first." },
    { q: 'Sixième phrase : quelle forme adoucit la demande ?', opts: ['une question directe', 'un impératif', 'une négation'], correct: 2,
      why: "« Vous n'auriez pas un stylo ? » : le non est déjà proposé. EN: the refusal is offered in advance." },
    { q: 'Huitième phrase : combien de personnes se verraient jeudi ?', opts: ['au moins deux', 'une'], correct: 0,
      why: "« On pourrait se voir jeudi ? » : on, donc au moins deux. EN: on means at least two." },
  ],
  audio: REC('rec-b1-08-demander-ecoute'),
  say: REFRAME,
  terms: ['politesse'],
};

const A6_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a6-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre demandes qui ratent',
  errors: [
    { wrong: 'Pourriez-vous de m’envoyer le contrat ?',
      right: "Pourriez-vous m'envoyer le contrat ?",
      why: "Le de vient de la forme « ce serait possible DE », qui elle en a besoin. Après pouvoir, l'infinitif arrive nu. EN: no de after pouvoir." },
    { wrong: 'Je voudrais que vous m’envoyez le contrat.',
      right: "Pourriez-vous m'envoyer le contrat ?",
      why: "Vouloir que appelle le subjonctif, qui arrive plus tard. Une question avec pourriez-vous fait le même travail tout de suite. EN: a pourriez-vous question does the job now." },
    { wrong: 'Pourriez-vous fermer la fenêtre, vous devez avoir froid.',
      right: 'Pourriez-vous fermer la fenêtre, vous devriez avoir froid.',
      why: "La demande recule, la raison reste un ordre. Quand tu recules, recule toute la phrase. EN: step the whole sentence back, not half of it." },
    { wrong: 'Ça vous dérangerait de me passer le sel ?',
      right: 'Vous pourriez me passer le sel ?',
      why: "Rien de faux : c'est simplement trop grand pour du sel. Réserve cette forme aux vraies gênes. EN: correct, but far too heavy for salt." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['politesse', 'conseil'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl("L'échelle", 'Laquelle de ces formes laisse le plus de place à un non ?',
      ['Est-ce que ce serait possible ?', 'Passez-moi le sel.', 'Tu peux me passer le sel ?'], 0,
      "Elle ne vise personne : c'est la chose qui est possible ou non. EN: it asks about the thing, not the person."),
  ctl('Le de', 'Après pourriez-vous, écris-tu de devant le verbe ?',
      ['Oui', 'Non'], 1,
      "Pourriez-vous m'aider. Le de appartient à « possible de ». EN: the de belongs to possible de."),
  ctl('La mesure', 'Tu veux le sel. Quelle forme choisis-tu ?',
      ['Tu pourrais me passer le sel ?', 'Ça te dérangerait de me passer le sel ?'], 0,
      "La politesse se mesure à la gêne réelle. EN: politeness is measured against the real trouble caused."),
], ['politesse', 'recul']);

const ACT6: ActDef = {
  act: {
    id: 'act6', title: 'Demander sans imposer',
    opener: {
      line: "Tu demandes la même chose, mais tu laisses une porte ouverte : ici tu apprends à la placer. EN: You ask for the same thing, but you leave a door open: here you learn where to put it.",
      imageRef: 'lessons/conditionnel-present/act06.jpg',
    },
    sections: [],
    milestone: "Tu choisis ta demande selon la gêne que tu causes, du tu pourrais au ça vous dérangerait de. EN: You can pick your request to match the trouble you are causing.",
    estScreens: 34, restPoints: ['a6-cartes'],
  },
  sections: [A6_HISTOIRE, A6_ECHELLE, A6_CARTES, A6_CONSTRUIRE, A6_ECOUTE, A6_ERREURS, A6_CHECK],
  imports: IMPORTED.act6,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — LE CONSEIL
 * ══════════════════════════════════════════════════════════════════════════ */

const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Le conseil qui passe mal',
  frSub: 'Trois façons de dire la même chose',
  setting: "Un café près de la gare. Awa a reçu deux offres de logement et demande son avis à Karim.",
  bubbles: [
    { from: 'coach', fr: "J'ai deux appartements et deux jours pour répondre.", en: 'I have two flats and two days to answer.' },
    { from: 'user', fr: 'Tu dois visiter les deux avant de signer.', en: 'You have to view both before signing.', warn: 'présent : un ordre' },
    { from: 'coach', fr: "Je sais. Ce n'est pas la question que je posais.", en: 'I know. That is not the question I was asking.' },
    { from: 'user', fr: 'Tu devrais visiter les deux avant de signer.', en: 'You should view both before signing.' },
    { from: 'coach', fr: "Ça, je peux l'entendre. Continue.", en: 'That I can hear. Go on.' },
    { from: 'user', fr: "À ta place, je demanderais une réduction sur le premier.", en: 'If I were you, I would ask for a discount on the first one.' },
    { from: 'coach', fr: "Voilà. Tu me dis ce que tu ferais, pas ce que je dois faire.", en: 'There. You are telling me what you would do, not what I must do.' },
  ],
  closing: { fr: 'Tu dois donne un ordre. Tu devrais donne un avis.', en: 'Tu dois gives an order. Tu devrais gives an opinion.' },
  audio: REC('rec-b1-08-conseil'),
  say: REFRAME,
  terms: ['conseil', 'recul'],
};

const A7_TROIS: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-trois',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-demander',
  title: 'Trois conseils, trois cibles',
  frSub: 'devrais, faudrait, à ta place',
  hint: 'Quatre cartes. Demande-toi chaque fois qui est visé.',
  audio: REC('rec-b1-08-conseil'),
  say: REFRAME,
  terms: ['conseil'],
  cards: [
    { head: 'Tu devrais', label: 'la personne en face',
      fr: 'Tu devrais prendre rendez-vous cette semaine.',
      sub: '[tü duh-vreh prahⁿdr rahⁿ-day-voo set suh-MEN]',
      body: "Tu dois est un ordre. Tu devrais est un avis, que l'autre peut écarter. EN: an opinion the other can set aside." },
    { head: 'Il faudrait', label: 'personne en particulier',
      fr: 'Il faudrait vérifier les charges.',
      sub: '[eel foh-dreh vay-ree-fyay lay SHARZH]',
      body: "Personne n'est nommé, donc personne n'est mis en cause. Très utile au travail. EN: nobody is named, so nobody is blamed." },
    { head: 'À ta place', label: 'toi, qui prends le risque',
      fr: 'À ta place, je demanderais une réduction.',
      sub: '[ah tah plas zhuh duh-mahⁿ-duh-reh ün ray-dük-SYOHⁿ]',
      body: "Tu racontes ce que TU ferais. La décision reste entière chez l'autre. EN: the decision stays with the other person." },
    { head: 'Deux variantes utiles', label: 'mieux',
      fr: 'tu ferais mieux de · il vaudrait mieux',
      sub: '[tü fuh-reh myuh duh] · [eel voh-dreh myuh]',
      body: "La première est plus ferme que tu devrais, la seconde ne vise personne. EN: firmer, and impersonal." },
  ],
};

const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois conseils à construire',
  groups: [
    grp('Viser la personne', [
      it(E(713), 'tu, un conseil direct'),
      it(E(714), 'vous, le même conseil au travail'),
      it(E(724), 'un conseil sur la santé, pas sur un contrat'),
      it(E(722), 'le conseil de ne pas faire'),
    ], chk('« Vous ne devriez pas signer tout de suite. » Est-ce une interdiction ?',
        ['Oui', 'Non, un avis'], 1,
        "Le conditionnel transforme l'interdiction en avis. EN: the conditional turns a ban into advice."),
    ),
    grp('Ne viser personne', [
      it(E(715), 'un appel à faire, sans coupable'),
      it(E(721), 'une vérification à faire'),
      it(E(726), 'une dépense à prévoir'),
      it(E(718), 'mieux vaut attendre'),
    ], chk('Pourquoi « il faudrait » est-il si utile au travail ?',
        ['il est plus court', 'il ne met personne en cause', 'il est plus ancien'], 1,
        "Le travail est nommé, la personne ne l'est pas. EN: the task is named, the person is not."),
    ),
    grp('Se mettre à la place', [
      it(E(716), 'tu, entre amis'),
      it(E(723), 'vous, dans un contexte professionnel'),
      it(E(725), 'le conseil formulé comme un conseil'),
      it(E(727), 'avoir intérêt à : plus ferme'),
    ], chk('« À ta place, je demanderais une réduction. » Qui décide, finalement ?',
        ["celui qui écoute", 'celui qui parle'], 0,
        "Tu dis ce que tu ferais ; l'autre garde la main. EN: you say what you would do; they still decide."),
    ),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conseil', 'recul'],
};

const A7_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a7-exemples',
  layer: 'core',
  title: 'Cinq conseils dans la vraie vie',
  frSub: 'Travail, famille, logement',
  examples: [
    ex('fr.b1.metiers.055', "un conseil d'entretien d'embauche"),
    ex('fr.b1.famille.064', 'un conseil rapporté par quelqu’un d’autre'),
    ex(E(717), 'ferais mieux de : un cran plus ferme'),
    ex(E(719), 'on devrait : le conseil qui inclut celui qui parle'),
    ex('fr.b2.ethique.005', "la même ouverture, réduite à deux mots"),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conseil'],
};

/** CHOOSE. Three grammatical sentences; the situation picks one. */
const A7_PLACE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-place',
  layer: 'core',
  size: 'lg',
  title: 'Qui doit être visé',
  groups: [
    ctl('Une réunion qui dérape', "Le dossier est en retard et personne n'est vraiment fautif. Tu dis...",
        ['Vous devriez finir plus vite.', 'Il faudrait avancer sur le dossier.'], 1,
        "Personne n'est nommé, donc la réunion continue. EN: nobody is named, so the meeting survives."),
    ctl('Un ami qui hésite', "Ton ami te demande ce que tu ferais. Tu réponds...",
        ["À ta place, je demanderais une réduction.", 'Il faudrait demander une réduction.'], 0,
        "Il t'a demandé TON avis, pas une règle générale. EN: he asked for your view, not a rule."),
    ctl('Un collègue fatigué', "Un collègue travaille depuis onze heures. Tu dis...",
        ['Tu dois te reposer.', 'Il faudrait que quelqu’un se repose.', 'Tu devrais te reposer un peu.'], 2,
        "Un conseil direct et doux : c'est exactement ce que devrais fait. EN: direct and soft at once."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conseil', 'politesse'],
};

/** TRAP. The failing instinct: reaching for the FUTURE of devoir and falloir,
 *  which turns advice back into an announcement. */
const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Le conseil qui redevient un ordre',
  rule: {
    title: 'devra annonce, devrait conseille',
    body: "Tu devras te reposer annonce un fait à venir. Tu devrais te reposer donne un avis. Il faudra vérifier promet une obligation ; il faudrait vérifier propose. Le s change la relation, pas le sens du verbe. EN: the s changes the relationship, not the verb.",
  },
  cards: [
    { promptLabel: 'devoir', promptSound: 'Tu devras te reposer un peu.', fr: 'Tu devrais te reposer un peu.', ipa: '/ty də.vʁɛ tə ʁə.po.ze œ̃ pø/', tip: "devras annonce une obligation future. EN: devras announces a future obligation." },
    { promptLabel: 'falloir', promptSound: 'Il faudra vérifier les charges.', fr: 'Il faudrait vérifier les charges.', ipa: '/il fo.dʁɛ ve.ʁi.fje le ʃaʁʒ/', tip: "faudra dit que ce sera obligatoire ; faudrait le propose. EN: faudra makes it compulsory." },
    { promptLabel: 'à ta place', promptSound: 'À ta place, je demanderai une réduction.', fr: 'À ta place, je demanderais une réduction.', ipa: '/a ta plas ʒə də.mɑ̃.də.ʁɛ yn ʁe.dyk.sjɔ̃/', tip: "Tu n'es pas à sa place, donc pas de projet daté. EN: you are not in their place, so no plan." },
    { promptLabel: 'valoir', promptSound: 'Il vaudra mieux attendre lundi.', fr: 'Il vaudrait mieux attendre lundi.', ipa: '/il vo.dʁɛ mjø a.tɑ̃dʁ lœ̃.di/', tip: "vaudra affirme ; vaudrait laisse discuter. EN: vaudra asserts, vaudrait invites discussion." },
    { promptLabel: 'pouvoir', promptSound: 'Tu pourras essayer une autre agence.', fr: 'Tu pourrais essayer une autre agence.', ipa: '/ty pu.ʁɛ e.se.je y.no.tʁa.ʒɑ̃s/', tip: "pourras donne une permission future ; pourrais suggère. EN: pourras permits, pourrais suggests." },
    { promptLabel: 'la négation', promptSound: 'Vous ne devrez pas signer tout de suite.', fr: 'Vous ne devriez pas signer tout de suite.', ipa: '/vu nə də.vʁje pa si.ɲe tu də sɥit/', tip: "devrez pas interdit ; devriez pas déconseille. EN: one forbids, the other advises against." },
  ],
  drill: [
    { promptSay: 'Tu ... te reposer un peu.', opts: ['devras', 'devrais'], correct: 1 },
    { promptSay: 'Il ... vérifier les charges avant de signer.', opts: ['faudrait', 'faudra'], correct: 0 },
    { promptSay: 'À ta place, je ... une réduction.', opts: ['demanderai', 'demanderais'], correct: 1 },
    { promptSay: 'Quand tu auras les clés, il ... faire un état des lieux.', opts: ['faudra', 'faudrait'], correct: 0 },
    { promptSay: 'Vous ne ... pas signer tout de suite.', opts: ['devrez', 'devriez'], correct: 1 },
    { promptSay: 'Il ... mieux attendre lundi.', opts: ['vaudrait', 'vaudra'], correct: 0 },
    { promptSay: 'Tu ... essayer une autre agence.', opts: ['pourras', 'pourrais'], correct: 1 },
    { promptSay: 'Demain, tu ... rendre le dossier avant midi.', opts: ['devras', 'devrais'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'devra annonce, devrait conseille' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le futur fait au conseil' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-08-piege-conseil'),
  say: REFRAME,
  terms: ['conseil', 'piege'],
};

const A7_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a7-hacks',
  layer: 'core',
  title: 'Trois astuces quand ton conseil passe mal',
  hacks: [
    { hack: 'Enlève la personne. Remplace tu devrais par il faudrait.',
      why: "Le travail reste nommé, la personne ne l'est plus, et la réunion continue. EN: the task stays named, the person does not." },
    { hack: 'Mets-toi à la place. Commence par à ta place, je...',
      why: "Tu racontes ton choix au lieu de prescrire le sien. EN: you narrate your choice instead of prescribing theirs." },
    { hack: 'Relis tes verbes et cherche les -ra et les -ras.',
      why: "Un futur au milieu d'un conseil transforme l'avis en annonce. EN: a future inside advice turns it into an announcement." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['conseil', 'piege'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('La cible', 'Quelle forme ne vise personne en particulier ?',
      ['il faudrait', 'tu devrais', 'à ta place'], 0,
      "Le travail est nommé, la personne non. EN: the task is named, the person is not."),
  ctl('Le futur', 'Tu écris « Il faudra vérifier les charges ». Qu’as-tu dit ?',
      ['un conseil', 'une obligation à venir'], 1,
      "Le futur affirme ; le conditionnel propose. EN: the future asserts, the conditional proposes."),
  ctl('La décision', 'Après « À ta place, je demanderais une réduction », qui décide ?',
      ['toi', 'ton ami', 'personne'], 1,
      "Tu as donné ton choix à toi ; le sien lui appartient toujours. EN: their decision is still theirs."),
], ['conseil', 'recul']);

const ACT7: ActDef = {
  act: {
    id: 'act7', title: 'Le conseil',
    opener: {
      line: "Ton conseil est bon et il passe mal : ici tu apprends à le poser sans ordonner. EN: Your advice is good and it lands badly: here you learn to give it without ordering.",
      imageRef: 'lessons/conditionnel-present/act07.jpg',
    },
    sections: [],
    milestone: "Tu conseilles avec tu devrais, il faudrait ou à ta place, et tu sais lequel vise qui. EN: You can advise with tu devrais, il faudrait or à ta place, and you know which one aims where.",
    estScreens: 38, restPoints: ['a7-construire'],
  },
  sections: [A7_HISTOIRE, A7_TROIS, A7_CONSTRUIRE, A7_EXEMPLES, A7_PLACE, A7_PIEGE, A7_HACKS, A7_CHECK],
  imports: IMPORTED.act7,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — POUVOIR, VOULOIR, DEVOIR
 * ══════════════════════════════════════════════════════════════════════════ */

const A8_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a8-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Un message de groupe, un samedi',
  frSub: 'Compte les trois verbes',
  text: "Karim a écrit au groupe jeudi soir. « Bonjour à tous. Nous pourrions visiter l'appartement samedi matin, vers dix heures. Awa, tu voudrais venir avec nous ou tu préférerais qu'on te raconte après ? Il faudrait aussi quelqu'un pour mesurer la chambre du fond. » Awa a répondu vingt minutes plus tard. « Je pourrais passer vers midi, pas avant : je travaille jusqu'à onze heures. Vous devriez commencer sans moi. » Le troisième message est arrivé de Malik, qui n'avait rien demandé. « Moi, à votre place, je demanderais à voir la cave. Les agences ne la montrent jamais, et elle devrait faire vingt mètres carrés d'après le plan. » Personne n'a donné d'ordre, personne n'a promis d'être là, et pourtant le rendez-vous s'est organisé tout seul.",
  glossary: [
    { word: 'la cave', en: 'the cellar', note: 'La pièce sous l’immeuble, souvent comptée dans la surface.' },
    { word: 'mesurer', en: 'to measure', note: 'Prendre les dimensions avec un mètre.' },
    { word: 'la chambre du fond', en: 'the back bedroom', note: 'La pièce la plus éloignée de l’entrée.' },
    { word: 'mètres carrés', en: 'square metres', note: "L'unité de surface d'un logement en Europe." },
  ],
  questions: [
    { q: 'Quelle forme sert à proposer un moment ?', a: "« Nous pourrions visiter samedi matin » et « Je pourrais passer vers midi ». Pouvoir propose." },
    { q: "Quelle forme sert à demander à quelqu'un ce qu'il veut ?", a: "« tu voudrais venir » et « tu préférerais qu'on te raconte ». Vouloir interroge l'envie." },
    { q: 'Quelles formes conseillent ?', a: "« Il faudrait aussi quelqu'un », « Vous devriez commencer sans moi » et « à votre place, je demanderais »." },
    { q: 'Que fait « elle devrait faire vingt mètres carrés » ?', a: "Ce n'est pas un conseil : c'est une estimation. Devoir au conditionnel dit aussi le probable." },
  ],
  audio: REC('rec-b1-08-groupe'),
  say: REFRAME,
  terms: ['conseil', 'politesse'],
};

const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Trois verbes, trois gestes',
  frSub: 'pouvoir, vouloir, devoir',
  hint: 'Quatre cartes. Ces trois verbes portent la moitié de ta journée.',
  audio: REC('rec-b1-08-modaux'),
  say: REFRAME,
  terms: ['politesse', 'conseil'],
  cards: [
    { head: 'pouvoir', label: 'proposer',
      fr: 'Nous pourrions visiter samedi matin.',
      sub: '[noo poo-ryohⁿ vee-zee-tay sam-dee mah-TEHⁿ]',
      body: "Au conditionnel, pouvoir propose au lieu de constater une capacité. EN: it proposes instead of stating ability." },
    { head: 'vouloir', label: 'souhaiter',
      fr: 'Vous voudriez un café ?',
      sub: '[voo voo-dree-yay uhⁿ kah-FAY]',
      body: "Avec tu ou vous, c'est une offre. Avec je, c'est une demande. EN: an offer with vous, a request with je." },
    { head: 'devoir', label: 'conseiller',
      fr: 'Vous devriez lire le contrat avant de signer.',
      sub: '[voo duh-vryay leer luh kohⁿ-trah ah-vahⁿ duh see-NYAY]',
      body: "Tu dois ordonne, tu devrais conseille. C'est le geste le plus fréquent des trois. EN: the commonest of the three." },
    { head: 'devoir, autrement', label: 'estimer',
      fr: 'Ils devraient arriver vers huit heures.',
      sub: '[eel duh-vreh-tah-ree-vay vehr wee-TUHR]',
      body: "Ici devoir ne conseille personne : il estime ce qui est probable. EN: here devoir estimates what is likely." },
  ],
};

const A8_TABLE: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a8-table',
  layer: 'core',
  sheetId: 'sheet-usages',
  title: 'Six emplois à toucher',
  frSub: 'Une forme, six métiers',
  cols: ['Emploi', 'Ouverture', 'Exemple'],
  rows: [
    { cells: ['le souhait', 'je voudrais', 'Je voudrais un rendez-vous.'], say: "J'aimerais changer de travail cette année.",
      detail: { title: 'Le souhait', body: "Tu dis une envie sans la poser comme une décision. EN: a wish, not a decision.", say: 'Je préférerais commencer plus tôt.' } },
    { cells: ['la demande', 'pourriez-vous', 'Pourriez-vous m’aider ?'], say: "Pourriez-vous m'envoyer le contrat ?",
      detail: { title: 'La demande', body: "La même demande, avec la place de dire non. EN: the same request, with room to refuse.", say: 'Est-ce que ce serait possible de visiter demain ?' } },
    { cells: ['le conseil', 'tu devrais', 'Tu devrais te reposer.'], say: 'Tu devrais prendre rendez-vous cette semaine.',
      detail: { title: 'Le conseil', body: "Un avis, pas un ordre. Il faudrait ne vise personne. EN: an opinion, not an order.", say: 'Il faudrait vérifier les charges.' } },
    { cells: ['l’hypothèse', 'ce serait', 'Ce serait plus simple.'], say: 'On gagnerait une heure chaque matin.',
      detail: { title: "L'hypothèse", body: "Le résultat d'une situation imaginée, pas encore réelle. EN: the result of an imagined situation.", say: 'Les enfants adoreraient le jardin.' } },
    { cells: ['le probable', 'ils devraient', 'Ils devraient arriver.'], say: 'Ils devraient arriver vers huit heures.',
      detail: { title: 'Le probable', body: "Devoir estime ici, il ne conseille pas. EN: devoir estimates here rather than advising.", say: 'Le train aurait du retard.' } },
    { cells: ['le rapporté', 'selon', 'Le suspect serait en fuite.'], say: 'Selon la police, le suspect serait en fuite.',
      detail: { title: 'Le rapporté', body: "On répète une information sans la garantir. C'est l'acte dix. EN: repeated without being vouched for.", say: "D'après le journal, l'usine fermerait en juin." } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['politesse', 'conseil', 'rumeur'],
};

const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Les trois verbes aux six personnes',
  groups: [
    grp('pouvoir', [
      it(E(728), 'tu, pour suggérer'),
      it(E(729), 'nous, pour proposer un moment'),
      it(E(730), 'ils, pour estimer'),
      it(E(742), 'on, avec peut-être en plus'),
    ], chk('« Nous pourrions visiter samedi matin. » Est-ce décidé ?',
        ['Non, c’est une proposition', 'Oui'], 0,
        "Pouvoir au conditionnel pose une option sur la table. EN: it puts an option on the table."),
    ),
    grp('vouloir', [
      it(E(731), 'tu, pour demander une envie'),
      it(E(732), 'vous, pour offrir'),
      it(E(733), 'ils, un souhait rapporté'),
      it('fr.a2.nombres.041', 'je, au moment de payer'),
    ], chk('« Vous voudriez un café ? » Qui veut quelque chose ?',
        ['celui qui parle', "celui qui écoute"], 1,
        "Avec vous, vouloir devient une offre. EN: with vous, vouloir becomes an offer."),
    ),
    grp('devoir', [
      it(E(734), 'nous, un conseil qui inclut tout le monde'),
      it(E(735), 'vous, le conseil professionnel'),
      it(E(736), 'ils, ici une estimation'),
      it(E(741), 'la négation, qui rassure'),
    ], chk('« Ils devraient arriver vers huit heures. » Est-ce un conseil ?',
        ['Oui', 'Non, un ordre', 'Non, une estimation'], 2,
        "Devoir au conditionnel dit aussi le probable. EN: devoir also states the likely."),
    ),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['politesse', 'conseil'],
};

const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Proposer, offrir, estimer',
  lines: [
    ln(E(737)), ln(E(738)), ln(E(739)), ln(E(740)),
    ln(E(741)), ln(E(742)), ln(E(743)), ln(E(729)),
  ],
  questions: [
    { q: 'Première phrase : la visite est-elle promise ?', opts: ['Non, proposée', 'Oui'], correct: 0,
      why: "« Je pourrais passer » propose un moment. EN: it proposes a time." },
    { q: 'Troisième phrase : qui veut un café ?', opts: ['celui qui parle', 'celui qui écoute'], correct: 1,
      why: "« Vous voudriez un café ? » est une offre. EN: it is an offer." },
    { q: 'Quatrième phrase : à quelle heure arriveraient-ils ?', opts: ['vers huit heures', 'vers six heures', 'vers dix heures'], correct: 0,
      why: "« Ils devraient arriver vers huit heures. » EN: around eight." },
    { q: 'Septième phrase : la personne viendra-t-elle avant six heures ?', opts: ['Non', 'Oui'], correct: 0,
      why: "« Je ne pourrais pas venir avant six heures. » EN: not before six." },
    { q: 'Huitième phrase : combien de personnes visiteraient ?', opts: ['une', 'au moins deux'], correct: 1,
      why: "« Nous pourrions » : la case en -ions. EN: the nous form." },
  ],
  audio: REC('rec-b1-08-modaux-ecoute'),
  say: REFRAME,
  terms: ['politesse', 'conseil'],
};

const A8_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a8-dictee',
  layer: 'core',
  title: 'Écris la proposition que tu entends',
  frSub: 'Les trois verbes, sans filet',
  itemIds: dicteeFor(8),
  audio: AUDIO,
  say: REFRAME,
  terms: ['politesse'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('pouvoir', 'Au conditionnel, pouvoir sert surtout à...',
      ['constater une capacité', 'proposer', 'interdire'], 1,
      "Nous pourrions visiter : une option, pas une capacité. EN: an option, not an ability."),
  ctl('vouloir', '« Vous voudriez un café ? » est...',
      ['une demande', 'un conseil', 'une offre'], 2,
      "Avec vous, l'envie appartient à l'autre. EN: with vous, the wish belongs to them."),
  ctl('devoir', 'Combien de métiers devoir fait-il au conditionnel ?',
      ['deux', 'un'], 0,
      "Il conseille, et il estime ce qui est probable. EN: it advises, and it estimates."),
], ['politesse', 'conseil']);

const ACT8: ActDef = {
  act: {
    id: 'act8', title: 'Pouvoir, vouloir, devoir',
    opener: {
      line: "Trois verbes portent la moitié de ta journée : ici tu les prends au conditionnel. EN: Three verbs carry half your day: here you take them in the conditional.",
      imageRef: 'lessons/conditionnel-present/act08.jpg',
    },
    sections: [],
    milestone: "Tu proposes, tu offres, tu conseilles et tu estimes avec pouvoir, vouloir et devoir. EN: You can propose, offer, advise and estimate with pouvoir, vouloir and devoir.",
    estScreens: 34, restPoints: ['a8-table'],
  },
  sections: [A8_LECTURE, A8_CARTES, A8_TABLE, A8_CONSTRUIRE, A8_ECOUTE, A8_DICTEE, A8_CHECK],
  imports: IMPORTED.act8,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — SI C'ÉTAIT VRAI (LA MOITIÉ RÉSULTAT)
 *
 *  BOUNDARY. The full « si + imparfait + conditionnel » system belongs to
 *  b1.10. This act uses the RESULT half only, with the condition carried by a
 *  group of words (avec, sans, dans ce cas, un jour comme ça). The boundary
 *  is named on the deck card and again in the act check, and the task's
 *  grader notes forbid marking a si clause either way.
 * ══════════════════════════════════════════════════════════════════════════ */

const A9_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a9-histoire',
  layer: 'core',
  title: "L'appartement qu'ils n'ont pas",
  frSub: 'Deux minutes à imaginer',
  setting: "Sur le trottoir, devant l'immeuble de la rue Haute, après la visite. Karim et Awa comptent.",
  bubbles: [
    { from: 'coach', fr: 'Vingt minutes à pied, contre une heure en tram.', en: 'Twenty minutes on foot, against an hour by tram.' },
    { from: 'user', fr: 'On gagnerait une heure chaque matin.', en: 'We would save an hour every morning.', warn: 'rien de tout ça n’est encore vrai' },
    { from: 'coach', fr: 'Et les enfants adoreraient le jardin.', en: 'And the children would love the garden.' },
    { from: 'user', fr: 'Sans les travaux, le loyer serait plus cher.', en: 'Without the works, the rent would be higher.' },
    { from: 'coach', fr: 'Donc, dans ce cas, tu signerais tout de suite.', en: 'So in that case, you would sign straight away.' },
    { from: 'user', fr: 'Je ne suis pas encore là. Mais oui, ce serait un vrai changement.', en: 'I am not there yet. But yes, it would be a real change.' },
    { from: 'narrator', fr: 'Six phrases, six conditionnels, et pas un seul fait.', en: 'Six sentences, six conditionals, and not one fact.' },
  ],
  closing: { fr: 'Rien de tout ça n’est vrai. Tout est déjà dit.', en: 'None of it is true. All of it has been said.' },
  audio: REC('rec-b1-08-trottoir'),
  say: REFRAME,
  terms: ['hypothese', 'recul'],
};

const A9_REGLE: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-regle',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'La moitié qui parle',
  frSub: 'Le résultat, pas la condition',
  hint: 'Quatre cartes. Cherche où se cache la condition.',
  audio: REC('rec-b1-08-hypothese'),
  say: REFRAME,
  terms: ['hypothese'],
  cards: [
    { head: 'La condition tient dans un mot', label: 'avec, sans',
      fr: 'Sans les travaux, le loyer serait plus cher.',
      sub: '[sahⁿ lay trah-voh luh lwah-yay suh-reh plü SHEHR]',
      body: "Pas besoin de si : avec et sans posent la condition à eux seuls. EN: avec and sans set the condition on their own." },
    { head: 'La condition est déjà dite', label: 'dans ce cas',
      fr: 'Dans ce cas, je signerais tout de suite.',
      sub: '[dahⁿ suh kah zhuh see-nyuh-reh too duh SWEET]',
      body: "Quelqu'un vient de poser la situation. Tu donnes juste le résultat. EN: someone has just set the situation up." },
    { head: 'La condition est invisible', label: 'moi, je...',
      fr: 'Moi, je ne ferais pas ça.',
      sub: '[mwah zhuh nuh fuh-reh pah SAH]',
      body: "Tout le monde comprend « si j'étais toi ». Rien n'est écrit. EN: everyone understands the unwritten if." },
    { head: 'La phrase entière avec si', label: Cap(SI_REF),
      fr: 'Si on partageait, ce serait plus simple.',
      sub: '[see ohⁿ par-tah-zheh suh suh-reh plü SEHⁿPL]',
      body: `La moitié en gras est à toi dès aujourd'hui. Le mécanisme complet est ${SI_REF}. EN: the result half is yours now; the whole pattern comes later.` },
  ],
};

const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois façons de poser la condition',
  groups: [
    grp('Avec un groupe de mots', [
      it(E(744), 'avec un peu plus de place'),
      it(E(746), 'sans les travaux'),
      it(E(745), 'dans ce cas'),
      it(E(750), "le trajet qu'on n'a pas encore fait"),
    ], chk('Dans ces quatre phrases, combien de fois lis-tu le mot si ?',
        ['jamais', 'quatre fois', 'deux fois'], 0,
        "La condition tient dans un groupe de mots. EN: the condition fits inside a phrase."),
    ),
    grp('Sans condition écrite', [
      it(E(747), 'tout le monde complète si j’étais toi'),
      it(E(752), 'la condition est dans la deuxième moitié'),
      it(E(757), 'une réaction, pas un fait'),
      it(E(758), 'le résultat le plus large possible'),
    ], chk('« J’irais volontiers, mais je travaille. » La personne ira-t-elle ?',
        ['Oui', 'Non'], 1,
        "Le mais donne la condition en creux : elle travaille. EN: the mais gives the condition by negation."),
    ),
    grp('Le résultat en chaîne', [
      it(E(755), 'le gain de temps'),
      it(E(756), 'la réaction des enfants'),
      it(E(748), 'la conclusion générale'),
      it(E(759), 'le souhait déguisé en résultat'),
    ], chk('Ces quatre phrases décrivent-elles la vie actuelle de la famille ?',
        ['Non, une vie imaginée', 'Oui'], 0,
        "Aucune des quatre n'est vraie aujourd'hui. EN: not one of them is true today."),
    ),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese', 'recul'],
};

const A9_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a9-exemples',
  layer: 'core',
  title: 'Cinq résultats imaginés',
  frSub: 'La condition change de forme, le résultat non',
  examples: [
    ex(E(749), 'un besoin, pas un fait'),
    ex(E(751), 'la réaction des autres, imaginée'),
    ex(E(753), 'une comparaison avec ce qui existe'),
    ex(E(754), 'ce que verrait quelqu’un qui essaierait'),
    ex('fr.b1.cafe.081', `la phrase complète avec si, à voir en entier à ${SI_REF}`),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese'],
};

/** CHOOSE. Both sentences are grammatical; the situation decides. */
const A9_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Réel ou imaginé',
  groups: [
    ctl('Le trajet', "Tu habites déjà à vingt minutes à pied. Tu dis...",
        ['On gagnerait une heure chaque matin.', 'On gagne une heure chaque matin.'], 1,
        "C'est vrai, donc c'est le présent. Le conditionnel servirait à mentir. EN: it is true, so the present."),
    ctl('Le loyer', "Le propriétaire propose de faire les travaux et de monter le loyer. Tu réponds...",
        ['Sans les travaux, le loyer serait plus cher.', 'Sans les travaux, le loyer sera plus cher.'], 0,
        "La situation sans travaux n'existe pas : elle est imaginée. EN: the no-works situation is imagined."),
    ctl('Le déménagement', "Vous avez signé hier et vous emménagez samedi. Tu dis...",
        ['Ce serait un vrai changement.', 'Ça va être un vrai changement.', 'Ce serait avec plaisir.'], 1,
        "Une fois signé, le changement est réel : le recul n'a plus de raison d'être. EN: once signed, the step back has no job."),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese', 'recul'],
};

const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: "Quatre erreurs d'hypothèse",
  errors: [
    { wrong: 'Si je serais toi, je demanderais une réduction.',
      right: 'À ta place, je demanderais une réduction.',
      why: "Le réflexe est logique : la phrase imagine, donc on met du conditionnel partout. Mais après si, jamais. EN: never a conditional straight after si." },
    { wrong: 'Avec un balcon, ce sera parfait.',
      right: 'Avec un balcon, ce serait parfait.',
      why: "Le futur promet un balcon qui n'existe pas. Avec pose une condition, donc le résultat recule. EN: avec sets a condition, so the result steps back." },
    { wrong: 'On gagnerait une heure chaque matin depuis qu’on a déménagé.',
      right: 'On gagne une heure chaque matin depuis qu’on a déménagé.',
      why: "Quand le déménagement a eu lieu, le gain est un fait. Le conditionnel raconterait autre chose. EN: once it happened, it is a fact." },
    { wrong: 'Les enfants adoreront le jardin, si on prend cet appartement.',
      right: 'Les enfants adoreraient le jardin.',
      why: "Le futur est possible quand la décision est prise. Ici elle ne l'est pas, alors le résultat reste imaginé. EN: the future works once the decision is made." },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['hypothese', 'piege'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('La condition', 'Faut-il le mot si pour écrire un résultat imaginé ?',
      ['Oui, toujours', 'Non, avec ou sans suffisent'], 1,
      "Avec un balcon, sans les travaux, dans ce cas : la condition tient dans un groupe. EN: a phrase is enough."),
  ctl('La limite', `Le mécanisme complet « si + imparfait + conditionnel » est le sujet de...`,
      [`${SI_REF}`, 'cette leçon'], 0,
      "Ici tu écris la moitié résultat, et c'est déjà beaucoup. EN: here you write the result half only."),
  ctl('Le réel', 'Quand la situation est vraie aujourd’hui, quel temps prends-tu ?',
      ['le conditionnel', 'le futur', 'le présent'], 2,
      "Le recul sert à ce qui n'est pas là. EN: the step back is for what is not there."),
], ['hypothese', 'recul']);

const ACT9: ActDef = {
  act: {
    id: 'act9', title: "Si c'était vrai",
    opener: {
      line: "Tu décris une vie que tu n'as pas encore : ici tu apprends à la dire au bon temps. EN: You describe a life you do not have yet: here you learn to say it in the right tense.",
      imageRef: 'lessons/conditionnel-present/act09.jpg',
    },
    sections: [],
    milestone: "Tu écris le résultat d'une situation imaginée sans avoir besoin du mot si. EN: You can write the result of an imagined situation without needing the word si.",
    estScreens: 32, restPoints: ['a9-construire'],
  },
  sections: [A9_HISTOIRE, A9_REGLE, A9_CONSTRUIRE, A9_EXEMPLES, A9_CHOISIR, A9_ERREURS, A9_CHECK],
  imports: IMPORTED.act9,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — SELON LA POLICE
 * ══════════════════════════════════════════════════════════════════════════ */

const A10_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a10-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le journal de treize heures',
  frSub: 'Lis, et demande-toi qui garantit quoi',
  text: "Trois informations ce midi. Selon la police, le suspect serait en fuite depuis mardi soir. Il habiterait dans le quartier et travaillerait dans une usine de la zone nord. Aucune arrestation n'a été annoncée. Deuxième information : d'après le journal du matin, cette même usine fermerait en juin. La direction n'a pas voulu répondre. Le maire, lui, aurait une autre solution, mais il ne l'a pas encore présentée au conseil communal. Enfin, la circulation. Les travaux de la rue Haute commenceraient au printemps et dureraient huit mois. Selon l'agence régionale, le tram serait dévié pendant toute la durée du chantier. Rien n'est signé. Une seule phrase de ce bulletin est au présent, et c'est celle qui dit qu'aucune arrestation n'a été annoncée.",
  glossary: [
    { word: 'en fuite', en: 'on the run', note: 'La personne a quitté les lieux et la police la cherche.' },
    { word: 'la direction', en: 'the management', note: "Les responsables d'une entreprise." },
    { word: 'conseil communal', en: 'town council', note: "L'assemblée élue d'une commune, en Belgique." },
    { word: 'dévié', en: 'diverted', note: 'Le tram passerait par une autre rue.' },
  ],
  questions: [
    { q: 'Le suspect est-il en fuite, selon ce bulletin ?', a: "La police le dit. Le journaliste écrit « serait », donc il ne le garantit pas." },
    { q: "Pourquoi « il habiterait dans le quartier » et pas « il habite » ?", a: "L'information vient de la police et n'a pas été vérifiée par la rédaction." },
    { q: 'Quelle phrase du bulletin est un fait ?', a: "« Aucune arrestation n'a été annoncée. » C'est la seule au passé composé, et elle est vérifiable." },
    { q: 'Que dirait le journaliste s’il avait vu les documents ?', a: "Il écrirait au présent : « l'usine ferme en juin », « les travaux commencent au printemps »." },
  ],
  audio: REC('rec-b1-08-bulletin'),
  say: REFRAME,
  terms: ['rumeur'],
};

const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Dire sans garantir',
  frSub: 'Le conditionnel des journalistes',
  hint: 'Quatre cartes. Cherche qui parle et qui signe.',
  audio: REC('rec-b1-08-rumeur'),
  say: REFRAME,
  terms: ['rumeur'],
  cards: [
    { head: 'La source nommée', label: 'selon',
      fr: 'Selon la police, le suspect serait en fuite.',
      sub: '[suh-lohⁿ lah poh-lees luh süs-peh suh-reh ahⁿ FWEET]',
      body: "La police parle, le journaliste rapporte. Le conditionnel dit qui prend le risque. EN: the conditional says who carries the risk." },
    { head: "L'autre source", label: "d'après",
      fr: "D'après le journal, l'usine fermerait en juin.",
      sub: '[dah-preh luh zhoor-nal lü-zeen fehr-muh-reh ahⁿ ZHWEHⁿ]',
      body: "Selon et d'après font le même travail. D'après est un peu plus courant à l'oral. EN: the same job; d’après is commoner in speech." },
    { head: 'Sans source du tout', label: 'le doute seul',
      fr: 'Il y aurait une cinquantaine de blessés.',
      sub: '[eel yah-reh ün sehⁿ-kahⁿ-ten duh bleh-SAY]',
      body: "Même sans selon, la forme suffit à dire que le chiffre n'est pas confirmé. EN: the form alone marks the doubt." },
    { head: 'Le fait, en face', label: 'le présent',
      fr: 'Rien ne serait signé · Rien n’est signé',
      sub: '[ryehⁿ nuh suh-reh see-NYAY] · [ryehⁿ neh see-NYAY]',
      body: "Le présent engage la rédaction. Le conditionnel la protège. EN: the present commits the newsroom; the conditional protects it." },
  ],
};

const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Trois bulletins à trier',
  groups: [
    grp('Avec une source', [
      it(E(762), 'la police parle'),
      it(E(763), 'le journal parle'),
      it(E(766), 'la radio parle'),
      it(E(771), "l'agence parle"),
    ], chk('Qui garantit ces quatre informations ?',
        ['la source citée', 'le journaliste', 'personne'], 0,
        "Le journaliste nomme la source et se retire. EN: the journalist names the source and steps out."),
    ),
    grp('Sans source nommée', [
      it(E(765), 'un chiffre non confirmé'),
      it(E(767), 'une date non confirmée'),
      it(E(773), 'une tendance non confirmée'),
      it(E(775), 'la version la plus courte'),
    ], chk('Sans selon ni d’après, comment sait-on que ce n’est pas vérifié ?',
        ['par la forme du verbe', 'par la ponctuation'], 0,
        "Le conditionnel suffit à poser le doute. EN: the conditional alone marks the doubt."),
    ),
    grp('Dans la vie de tous les jours', [
      it(E(769), 'une voisine, pas un journal'),
      it(E(783), "une annonce immobilière"),
      it(E(774), "l'information et son doute dans la même phrase"),
      it(E(770), 'la négation rapportée'),
    ], chk('« D’après ma voisine, l’immeuble serait à vendre. » Est-il à vendre ?',
        ['Oui', 'On ne le sait pas'], 1,
        "Ta voisine le dit. Toi, tu ne le garantis pas. EN: she says so; you do not guarantee it."),
    ),
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['rumeur', 'recul'],
};

const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Vérifié ou rapporté',
  lines: [
    ln(E(762)), ln(E(765)), ln(E(772)), ln(E(768)),
    ln(E(770)), ln(E(774)), ln(E(766)), ln(E(775)),
  ],
  questions: [
    { q: 'Première phrase : qui dit que le suspect est en fuite ?', opts: ['la police', 'le journaliste'], correct: 0,
      why: "« Selon la police » : la source est nommée. EN: the source is named." },
    { q: 'Deuxième phrase : le nombre de blessés est-il confirmé ?', opts: ['Oui', 'Non'], correct: 1,
      why: "« Il y aurait » : le chiffre circule, il n'est pas vérifié. EN: the figure is circulating, not confirmed." },
    { q: 'Troisième phrase : que dit la météo ?', opts: ['du soleil', 'de la pluie toute la semaine', 'de la neige'], correct: 1,
      why: "« Il pleuvrait toute la semaine, selon la météo. » EN: rain all week." },
    { q: 'Cinquième phrase : le directeur est-il au courant ?', opts: ['Oui', 'Il dit que non', 'On rapporte que non'], correct: 2,
      why: "« ne serait pas au courant » : c'est rapporté, pas vérifié. EN: reported, not verified." },
    { q: 'Sixième phrase : l’accord est-il signé ?', opts: ['Rien ne serait signé', 'Oui'], correct: 0,
      why: "On parle d'un accord, mais rien ne serait signé. EN: nothing is reportedly signed." },
  ],
  audio: REC('rec-b1-08-bulletin-ecoute'),
  say: REFRAME,
  terms: ['rumeur'],
};

const A10_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a10-focus',
  layer: 'core',
  sheetId: 'sheet-usages',
  title: 'Quatre choses à retenir du bulletin',
  frSub: 'Le conditionnel des journalistes',
  points: [
    "Selon et d'après nomment la source, et le verbe recule derrière elle. EN: selon and d’après name the source.",
    "Sans source, la forme suffit encore à dire que rien n'est vérifié. EN: without a source, the form alone marks the doubt.",
    "Le présent, lui, engage celui qui écrit. EN: the present commits the writer.",
    "Tu le liras et l'entendras tous les jours ; tu l'écriras rarement. EN: you will read it daily and write it seldom.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['rumeur', 'recul'],
};

/** TRAP. The failing instinct: reading a reported conditional as a fact, or
 *  writing a fact you actually witnessed in the conditional. */
const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Ce que tu as vu, tu le dis au présent',
  rule: {
    title: 'Qui signe la phrase',
    body: "Le conditionnel dit : quelqu'un d'autre l'affirme. Si tu l'as vu, vécu ou vérifié toi-même, tu écris au présent ou au passé. Mettre du conditionnel sur un fait vérifié te retire de ta propre phrase. EN: the conditional hands the claim to someone else.",
  },
  cards: [
    { promptLabel: 'tu étais là', promptSound: 'Le tram serait arrêté, je viens de le voir.', fr: "Le tram est arrêté, je viens de le voir.", ipa: '/lə tʁam ɛ.ta.ʁe.te ʒə vjɛ̃ də lə vwaʁ/', tip: "Tu l'as vu : tu signes. EN: you saw it, so you sign it." },
    { promptLabel: 'la police parle', promptSound: 'Selon la police, le suspect est en fuite.', fr: 'Selon la police, le suspect serait en fuite.', ipa: '/sə.lɔ̃ la pɔ.lis lə sys.pɛ sə.ʁɛ ɑ̃ fɥit/', tip: "Le présent ferait signer la rédaction. EN: the present would make the newsroom sign." },
    { promptLabel: 'ta voisine parle', promptSound: "D'après ma voisine, l'immeuble est à vendre.", fr: "D'après ma voisine, l'immeuble serait à vendre.", ipa: '/da.pʁɛ ma vwa.zin li.mœbl sə.ʁɛ a vɑ̃dʁ/', tip: "Tu répètes, donc tu recules. EN: you repeat it, so you step back." },
    { promptLabel: 'un chiffre qui circule', promptSound: 'Il y a une cinquantaine de blessés, on ne sait pas.', fr: 'Il y aurait une cinquantaine de blessés.', ipa: '/i.lja.ʁɛ yn sɛ̃.kɑ̃.tɛn də ble.se/', tip: "Le doute est dans le verbe, pas dans un commentaire. EN: the doubt belongs in the verb." },
    { promptLabel: 'ton propre projet', promptSound: 'Je serais en vacances la semaine prochaine.', fr: 'Je serai en vacances la semaine prochaine.', ipa: '/ʒə sə.ʁe ɑ̃ va.kɑ̃s la sə.mɛn pʁɔ.ʃɛn/', tip: "Tes propres vacances, tu les garantis. EN: your own holiday, you vouch for it." },
    { promptLabel: 'un fait daté', promptSound: "L'usine aurait fermé le douze juin, c'est écrit au registre.", fr: "L'usine a fermé le douze juin, c'est écrit au registre.", ipa: '/ly.zin a fɛʁ.me lə duz ʒɥɛ̃ sɛ.te.kʁi o ʁə.ʒistʁ/', tip: "Un document vérifié : plus de recul possible. EN: a checked document leaves no room to step back." },
  ],
  drill: [
    { promptSay: 'Selon la police, le suspect ... en fuite.', opts: ['est', 'serait'], correct: 1 },
    { promptSay: 'Le tram ... arrêté, je viens de le voir.', opts: ['est', 'serait'], correct: 0 },
    { promptSay: "D'après ma voisine, l'immeuble ... à vendre.", opts: ['est', 'serait'], correct: 1 },
    { promptSay: 'Je ... en vacances la semaine prochaine.', opts: ['serai', 'serais'], correct: 0 },
    { promptSay: 'Il y ... une cinquantaine de blessés, selon les pompiers.', opts: ['a', 'aurait'], correct: 1 },
    { promptSay: "L'usine ... fermé le douze juin, c'est écrit au registre.", opts: ['a', 'aurait'], correct: 0 },
    { promptSay: 'Selon la radio, la grève ... trois jours.', opts: ['dure', 'durerait'], correct: 1 },
    { promptSay: 'Les travaux ... hier matin, j’étais sur place.', opts: ['ont commencé', 'commenceraient'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Qui signe la phrase' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que le mauvais temps raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-08-piege-rumeur'),
  say: REFRAME,
  terms: ['rumeur', 'piege'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('La source', 'Que veut dire « le suspect serait en fuite » ?',
      ["quelqu'un le dit, ce n'est pas vérifié", 'il est en fuite', 'il sera en fuite'], 0,
      "La forme donne l'information et retire la garantie. EN: it gives the claim and withdraws the guarantee."),
  ctl('Sans selon', 'Faut-il toujours nommer la source ?',
      ['Oui', 'Non, la forme suffit'], 1,
      "« Il y aurait cinquante blessés » dit déjà que rien n'est confirmé. EN: the form alone is enough."),
  ctl('Ton témoignage', 'Tu as vu le tram arrêté toi-même. Tu écris...',
      ['Le tram est arrêté.', 'Le tram serait arrêté.'], 0,
      "Ce que tu as vu, tu le signes. EN: what you saw, you sign for."),
], ['rumeur', 'recul']);

const ACT10: ActDef = {
  act: {
    id: 'act10', title: 'Selon la police',
    opener: {
      line: "Tu ouvres la radio et tout est au conditionnel : ici tu apprends pourquoi. EN: You turn on the radio and everything is in the conditional: here you learn why.",
      imageRef: 'lessons/conditionnel-present/act10.jpg',
    },
    sections: [],
    milestone: "Tu lis un bulletin et tu sais qui garantit quoi, phrase par phrase. EN: You can read a news bulletin and tell who is vouching for what, sentence by sentence.",
    estScreens: 34, restPoints: ['a10-construire'],
  },
  sections: [A10_LECTURE, A10_CARTES, A10_CONSTRUIRE, A10_ECOUTE, A10_FOCUS, A10_PIEGE, A10_CHECK],
  imports: IMPORTED.act10,
};

/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — UN PAS EN ARRIÈRE, PAR ÉCRIT
 * ══════════════════════════════════════════════════════════════════════════ */

const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le message que tu vas imiter',
  frSub: 'Six reculs et deux présents',
  text: READING_MODELE,
  glossary: [
    { word: 'au sujet de', en: 'regarding', note: "L'ouverture standard d'un courriel qui demande quelque chose." },
    { word: 'deux créneaux', en: 'two time slots', note: 'Deux moments possibles, pour laisser un choix.' },
    { word: "difficile d'accès", en: 'hard to reach', note: 'On y arrive mal, en voiture ou à pied.' },
    { word: 'joignable', en: 'reachable', note: 'On peut te téléphoner ou t’écrire.' },
  ],
  questions: [
    { q: 'Quelle phrase dit pourquoi Karim écrit ?', a: "« Je vous écris au sujet de l'appartement de la rue Haute. » Elle est au présent, et c'est normal." },
    { q: 'Où est le souhait, et où est la demande ?', a: "Le souhait : « J'aimerais savoir ». La demande : « Pourriez-vous me confirmer »." },
    { q: 'Pourquoi « le chauffage serait collectif » ?', a: "L'information vient de l'annonce, pas de Karim. Il la rapporte sans la garantir." },
    { q: 'Que fait la phrase « à votre place, je proposerais deux créneaux » ?', a: "Elle conseille sans ordonner : Karim dit ce qu'il ferait, l'agente garde la décision." },
  ],
  audio: REC('rec-b1-08-modele'),
  say: REFRAME,
  terms: ['politesse', 'rumeur', 'conseil'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Le plan du message',
  steps: [
    "Dis pourquoi tu écris, au présent, en une phrase. EN: say why you are writing, in the present, in one sentence.",
    "Ouvre ton souhait avec j'aimerais ou je voudrais, une seule fois. EN: open your wish once, with j’aimerais or je voudrais.",
    "Pose ta demande avec pourriez-vous ou auriez-vous. EN: put your request with pourriez-vous or auriez-vous.",
    "Ajoute ce que tu proposes avec il faudrait ou ce serait. EN: add what you are proposing with il faudrait or ce serait.",
    "Relis chaque verbe en -rai et demande-toi s'il manque un s. EN: reread every -rai and ask whether an s is missing.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['politesse', 'conseil'],
};

const A11_USAGES: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-usages',
  layer: 'core',
  sheetId: 'sheet-ecrire',
  title: 'Quatre messages qui se ressemblent',
  cases: [
    { situation: 'Tu écris à une agence immobilière', fr: "J'aimerais savoir si la visite de samedi est confirmée.", en: 'I would like to know whether Saturday visit is confirmed.' },
    { situation: 'Tu demandes un document à un service', fr: "Pourriez-vous me confirmer l'adresse exacte ?", en: 'Could you confirm the exact address for me?' },
    { situation: 'Tu proposes une solution à un collègue', fr: 'Il faudrait aussi prévoir un état des lieux.', en: 'An inventory check would also need arranging.' },
    { situation: 'Tu préviens que tu resteras disponible', fr: 'Je resterais joignable tout le week-end.', en: 'I would stay reachable all weekend.' },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['politesse', 'conseil'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec l’agence',
  frSub: 'Six tours, à voix haute',
  setting: "Tu appelles l'agence de la rue Haute pour organiser la visite. Madame Lemoine décroche.",
  turns: [
    {
      ai: "Agence de la rue Haute, bonjour.", en: 'Rue Haute agency, good morning.',
      user: "Bonjour, je voudrais visiter l'appartement de la rue Haute.",
      userEn: 'Hello, I would like to view the flat on rue Haute. (A wish, opened with voudrais.)',
      alts: [
        { fr: "Bonjour, j'aimerais visiter l'appartement de la rue Haute.", en: 'Hello, I would like to view the flat on rue Haute.' },
        { fr: "Bonjour, ce serait possible de visiter l'appartement de la rue Haute ?", en: 'Hello, would it be possible to view the flat on rue Haute? (Indirect: nobody has to refuse you.)' },
      ],
    },
    {
      ai: "Nous avons des créneaux samedi matin et mardi soir.", en: 'We have slots on Saturday morning and Tuesday evening.',
      user: 'Je préférerais samedi matin.',
      userEn: 'I would prefer Saturday morning. (Two options were offered, so préférerais.)',
      alts: [
        { fr: 'Samedi matin, ce serait parfait.', en: 'Saturday morning would be perfect.' },
        { fr: 'Nous serions disponibles samedi à partir de dix heures.', en: 'We would be available on Saturday from ten. (Adds the time, and stays a step back.)' },
      ],
    },
    {
      ai: "Très bien. Il me faudrait vos trois dernières fiches de paie.", en: 'Very good. I would need your last three payslips.',
      user: "Pourriez-vous me confirmer ça par courriel ?",
      userEn: 'Could you confirm that for me by email? (A request, with room to say no.)',
      alts: [
        { fr: 'Auriez-vous une adresse où je peux les envoyer ?', en: 'Would you have an address I can send them to?' },
        { fr: 'Est-ce que ce serait possible de les apporter samedi ?', en: 'Would it be possible to bring them on Saturday? (Asks about the thing, not the person.)' },
      ],
    },
    {
      ai: "Bien sûr. Autre chose : le chauffage est collectif, d'après le propriétaire.", en: 'Of course. One more thing: the heating is communal, according to the landlord.',
      user: "Donc le montant des charges serait compris dans le loyer.",
      userEn: 'So the service charges would be included in the rent. (Reported: you are not vouching for it.)',
      alts: [
        { fr: "Selon l'annonce, les charges seraient comprises.", en: 'According to the listing, the service charges are said to be included.' },
        { fr: 'Il faudrait vérifier le montant exact des charges.', en: 'The exact amount would need checking. (Advice aimed at nobody in particular.)' },
      ],
    },
    {
      ai: "Je ne peux pas vous le garantir aujourd'hui.", en: 'I cannot guarantee that for you today.',
      user: "Dans ce cas, je poserais la question par écrit.",
      userEn: 'In that case, I would ask the question in writing. (An imagined result, with the condition in dans ce cas.)',
      alts: [
        { fr: 'À votre place, je demanderais au propriétaire directement.', en: 'In your place, I would ask the landlord directly.' },
        { fr: 'Ce serait plus simple de tout avoir par écrit.', en: 'It would be simpler to have everything in writing. (Same result, no condition named.)' },
      ],
    },
    {
      ai: "Parfait. Je vous envoie la confirmation ce soir.", en: 'Perfect. I will send you the confirmation tonight.',
      user: 'Je vous remercie. Je resterais joignable tout le week-end.',
      userEn: 'Thank you. I would stay reachable all weekend. (Thanks in the present, availability a step back.)',
      alts: [
        { fr: 'Merci beaucoup. Nous serions disponibles à partir de dix heures.', en: 'Thank you very much. We would be available from ten.' },
        { fr: 'Je vous remercie. Je serai joignable tout le week-end.', en: 'Thank you. I will be reachable all weekend. (Also right: a promise you are happy to make.)' },
      ],
    },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['politesse', 'souhait', 'conseil'],
};

const A11_TASK: TaskSection = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris à l’agence',
  frSub: 'Mission écrite',
  brief: "Tu as vu une annonce : un appartement, un studio ou une chambre, dans une ville que tu connais. Quelque chose n'est pas clair dans l'annonce. Écris un courriel à l'agence ou au propriétaire pour organiser une visite et poser ta question.",
  briefEn: 'You have seen a listing for a flat, a studio or a room. Something in it is unclear. Write an email to arrange a viewing and ask your question.',
  produce: "Écris un courriel de 110 à 150 mots avec : une phrase au présent qui dit pourquoi tu écris, un souhait ouvert par j'aimerais ou je voudrais, une demande avec pourriez-vous ou auriez-vous, une proposition avec il faudrait ou ce serait, et une information de l'annonce que tu rapportes sans la garantir.",
  responseSpec: { kind: 'text', minWords: 110, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'formes', label: 'Des formes justes', maxPoints: 4,
        descriptors: [
          "4 : Chaque conditionnel est bien construit : radical du futur, terminaison de l'imparfait. Les radicaux irréguliers sont corrects.",
          "3 : Presque tous les conditionnels sont justes. Une seule forme boite, et on comprend quand même.",
          "2 : Plusieurs formes mélangent le radical du présent ou de l'imparfait avec la bonne terminaison.",
          "1 : Les formes sont devinées. Le radical du futur n'apparaît pas de façon fiable.",
        ],
      },
      {
        key: 'metiers', label: 'Le bon métier au bon moment', maxPoints: 4,
        descriptors: [
          "4 : Le souhait, la demande, la proposition et l'information rapportée sont là, chacun à sa place et avec son ouverture.",
          "3 : Les quatre sont là, mais l'un d'eux est ouvert avec la mauvaise formule.",
          "2 : Deux des quatre manquent, ou deux d'entre eux se répètent avec la même ouverture.",
          "1 : Une seule formule sert à tout, ou le courriel ne demande rien de précis.",
        ],
      },
      {
        key: 'recul', label: 'Aucun ordre resté au présent', maxPoints: 2,
        descriptors: [
          "2 : Rien ne sonne comme une instruction. Vous devez, il faut et je veux ont tous reculé.",
          "1 : Il reste au moins une phrase qui donne un ordre au lecteur.",
        ],
      },
      {
        key: 'tache', label: 'La mission complète', maxPoints: 2,
        descriptors: [
          "2 : Le courriel fait 110 à 150 mots, il ouvre, il demande et il se termine poliment.",
          "1 : Il manque l'ouverture, la question ou la formule de fin, ou la longueur est hors des bornes.",
        ],
      },
    ],
  },
  scaffold: [
    'Je vous écris au sujet de',
    "J'aimerais savoir si",
    'Je voudrais également',
    'Pourriez-vous',
    'Auriez-vous',
    'Il faudrait',
    "Selon l'annonce,",
    "Je vous remercie d'avance",
  ],
  modelAnswer: "Bonjour Madame,\n\nJe vous écris au sujet du studio de la rue des Tanneurs, annoncé à six cent vingt euros. J'aimerais savoir si une visite serait possible cette semaine, de préférence en fin de journée. Je travaille jusqu'à dix-sept heures, mais je serais libre à partir de dix-huit heures du lundi au jeudi.\n\nPourriez-vous me confirmer l'étage et la surface exacte ? Selon l'annonce, le studio ferait trente mètres carrés, mais le plan en montre vingt-cinq. Il faudrait aussi savoir si les charges sont comprises dans le loyer.\n\nEnfin, à votre place, je proposerais deux créneaux, parce que la rue est fermée le mercredi. Ce serait plus simple pour tout le monde.\n\nJe vous remercie d'avance de votre réponse.\n\nBien à vous,\nSamira Cheriet",
  modelAnswerEn: "Hello Madame, I am writing about the studio on rue des Tanneurs, listed at six hundred and twenty euros. I would like to know whether a viewing would be possible this week, preferably late in the day. I work until five, but I would be free from six o clock, Monday to Thursday. Could you confirm the floor and the exact size for me? According to the listing, the studio is said to be thirty square metres, but the plan shows twenty-five. It would also be necessary to know whether the charges are included in the rent. Finally, in your place, I would offer two slots, because the street is closed on Wednesdays. That would be simpler for everyone. Thank you in advance for your reply. Best wishes, Samira Cheriet",
  watchFor: [
    { pattern: "An order left in the present: « Vous devez me rappeler », « Il faut me répondre avant vendredi », « Je veux visiter ».",
      criterion: 'recul',
      feedback: "Ton message donne un ordre. Recule d'un pas : « Pourriez-vous me rappeler », « Il faudrait une réponse avant vendredi », « Je voudrais visiter ».",
      ref: 'a1-scene' },
    { pattern: "The imparfait endings attached to the present or imparfait stem: « je parlais » for « je parlerais », « je faisais » for « je ferais », « je voulais » for « je voudrais ».",
      criterion: 'formes',
      feedback: "Il manque le r du radical. Le conditionnel part du radical du FUTUR : parler-, fer-, voudr-. Relis l'acte 3.",
      ref: 'a3-piege' },
    { pattern: "A missing s on the je form where the sentence is not a dated plan: « Demain je signerai » is right, « Dans ce cas je signerai » is not.",
      criterion: 'formes',
      feedback: "Regarde ce que la phrase fait. Si elle imagine, si elle propose ou si elle conseille, le s est obligatoire.",
      ref: 'a4-piege' },
    { pattern: "An added s on a genuine dated plan: « Je vous enverrais le dossier demain matin » where the writer is actually committing.",
      criterion: 'formes',
      feedback: "Ici tu t'engages vraiment, avec une date. Enlève le s : « je vous enverrai ».",
      ref: 'a4-indices' },
    { pattern: "A conditional after « si »: « si je serais », « si vous pourriez ».",
      criterion: 'formes',
      feedback: "Après si, on n'écrit jamais je serais. Utilise « à votre place » ou « dans ce cas », qui font le même travail.",
      ref: 'a9-erreurs' },
    { pattern: "« de » inserted after pouvoir or vouloir: « Pourriez-vous de m'envoyer », « Je voudrais de visiter ».",
      criterion: 'formes',
      feedback: "Après pouvoir, vouloir et aimer, l'infinitif arrive nu. Le de appartient à « ce serait possible de ».",
      ref: 'a6-erreurs' },
    { pattern: "The wish, the request, the proposal or the reported information missing from the email.",
      criterion: 'metiers',
      feedback: "Relis le plan en cinq étapes. Il te manque un des quatre morceaux : le souhait, la demande, la proposition ou l'information de l'annonce.",
      ref: 'a11-plan' },
    { pattern: "One opener doing every job: three or four sentences all starting « je voudrais ».",
      criterion: 'metiers',
      feedback: "Varie : j'aimerais pour le souhait, pourriez-vous pour la demande, il faudrait pour la proposition.",
      ref: 'a8-table' },
    { pattern: "Information taken from the listing and stated as fact: « le chauffage est collectif » where the writer has only read it.",
      criterion: 'metiers',
      feedback: "Tu n'as pas vérifié : écris « selon l'annonce, le chauffage serait collectif ». Sinon, c'est toi qui signes.",
      ref: 'a10-piege' },
    { pattern: "« vouloir que » plus an indicative: « Je voudrais que vous m'envoyez le contrat ».",
      criterion: 'metiers',
      feedback: "Vouloir que appelle un temps que tu verras plus tard. Ici, une question avec pourriez-vous fait le même travail.",
      ref: 'a5-erreurs' },
    { pattern: "An email with no reason for writing, or with no closing thanks.",
      criterion: 'tache',
      feedback: "Ouvre par une phrase au présent qui dit pourquoi tu écris, et ferme par un remerciement, au présent aussi.",
      ref: 'a11-lecture' },
    { pattern: "A body outside 110 to 150 words, counted without the greeting and the sign-off.",
      criterion: 'tache',
      feedback: "Compte tes mots sans le bonjour et sans la signature. En dessous de cent dix, il manque un des quatre morceaux.",
      ref: 'a11-plan' },
  ],
  graderNotes: [
    'Word count EXCLUDES the greeting and the sign-off (Paul, 2026-09-22). Count the body only, with 10% tolerance (99-165) before criterion « tache » loses its point.',
    'DO NOT SCORE si CLAUSES. « si + imparfait + conditionnel » is the ground of lesson 10 in B1 and has not been taught. A learner who writes one correctly is not rewarded and one who writes it wrongly is not penalised, EXCEPT for a conditional placed directly after si, which this lesson does name as an error.',
    'Do not score the subjunctive. « il faudrait que » and « je voudrais que » are outside this lesson; a wrong verb after them is ignored.',
    'The conditionnel passé (« j’aurais voulu », « il aurait fallu ») is outside this lesson. Accept it if correct, do not penalise it if wrong.',
    'Judge « le bon métier » by what the sentence DOES in the email, not by the opener alone. « Ce serait plus simple » can be a proposal or a hypothesis and both count.',
    'Writer gender is unknown: judge adjective agreement for internal consistency only.',
    'Accept regional vocabulary and currency (euros, francs suisses, dollars canadiens, francs CFA) and regional address forms (Madame, Monsieur, Chère Madame).',
    'Accept a rented room or a shared flat in place of a studio: the situation is the learner’s to choose.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** Say the whole lesson out loud. Every authored row carries `voiceflash`;
 *  the three added ids are imports that carry it too. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes demandes à voix haute',
  frSub: 'Le conditionnel, sans le lire',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    'fr.a2.hebergement.075',
    'fr.a2.hebergement.091',
    'fr.a2.cafe.034',
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['politesse', 'souhait'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-usages',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: 'la recette', v: "radical du futur + fins de l'imparfait", say: 'je parlerais, nous parlerions',
      detail: { title: 'La recette', body: "Le radical finit toujours par r. Les fins sont -ais, -ais, -ait, -ions, -iez, -aient. EN: the stem ends in r; the endings are the imparfait ones.", say: 'vendre donne je vendrais et nous vendrions' } },
    { k: 'le souhait', v: "je voudrais, j'aimerais, je préférerais", say: "J'aimerais changer de travail cette année.",
      detail: { title: 'Le souhait', body: "Tu dis une envie sans la poser comme une décision. EN: a wish, not a decision.", say: 'Je préférerais commencer plus tôt.' } },
    { k: 'la demande', v: 'pourriez-vous, auriez-vous', say: "Pourriez-vous m'envoyer le contrat ?",
      detail: { title: 'La demande', body: "La même demande, avec la place de dire non. Ça vous dérangerait de est réservé aux vraies gênes. EN: room left to refuse.", say: 'Auriez-vous une minute ?' } },
    { k: 'le conseil', v: 'tu devrais, il faudrait, à ta place', say: 'Tu devrais prendre rendez-vous cette semaine.',
      detail: { title: 'Le conseil', body: "devrais vise la personne, faudrait ne vise personne, à ta place raconte ton choix. EN: three targets, three forms.", say: 'Il faudrait vérifier les charges.' } },
    { k: "l'hypothèse", v: 'ce serait, on gagnerait', say: 'On gagnerait une heure chaque matin.',
      detail: { title: "L'hypothèse", body: "La condition tient dans un groupe : avec, sans, dans ce cas. EN: the condition fits inside a phrase.", say: 'Sans les travaux, le loyer serait plus cher.' } },
    { k: 'la rumeur', v: 'selon, d’après', say: 'Selon la police, le suspect serait en fuite.',
      detail: { title: 'La rumeur', body: "On donne l'information et on retire la garantie. Le présent, lui, engage. EN: the claim without the guarantee.", say: "D'après le journal, l'usine fermerait en juin." } },
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recette', 'conseil', 'rumeur'],
};

const A11_PROGRESS: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progress',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu construis le conditionnel de n'importe quel verbe, tu souhaites, tu demandes, tu conseilles, tu imagines et tu rapportes. Le piège qui reste est le s de la case je : l'oreille ne te le donnera jamais. Avant l'examen, reprends ton courriel et souligne chaque verbe en -rai ou -rais. Pour chacun, écris à côté ce qu'il fait : un projet, un souhait, une demande, un conseil, un résultat imaginé ou une information rapportée. Si tu n'arrives pas à nommer le métier d'un verbe, c'est celui-là qu'il faut réécrire. EN: Underline every -rai and -rais in your email and name the job each one does; the one you cannot name is the one to rewrite.",
  stats: [
    { k: 'La recette', v: "radical du futur, fins de l'imparfait" },
    { k: 'Le piège', v: 'je parlerai contre je parlerais' },
    { k: 'Les métiers', v: 'souhait, demande, conseil, hypothèse, rumeur' },
    { k: 'Les trois verbes', v: 'pouvoir, vouloir, devoir' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight, one per
 *  act from act 1 to act 10 plus an integration round. Each round's target is
 *  a distinct errorTrigger, so a failed round fires that round's own drill.
 *
 *  `fold()` strips commas, accents and apostrophes, so no answer depends on
 *  one. Every typeIn and errorSpot carries `prompt`, every listenChoose
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
      id: 'r1-recul', label: 'Le recul', targets: ['tout-au-present'],
      questions: [
        mc('Au guichet, quelle différence entre « Je veux un billet » et « Je voudrais un billet » ?', ['la seconde est plus ancienne', 'aucune', 'la première décide, la seconde ouvre'], 2, "Une décision ne laisse rien à répondre. EN: a decision leaves nothing to answer.", 'a1-scene'),
        tI("Recule cette phrase d'un pas.", "Je veux visiter l'appartement.", "Je voudrais visiter l'appartement.", 'vouloir donne voudr- au conditionnel. EN: vouloir gives voudr-.', 'a1-scene'),
        mc('Le conditionnel change quoi dans « je veux » ?', ['la distance avec le réel', 'le sens du verbe'], 0, "Vouloir veut toujours dire vouloir. EN: the verb keeps its meaning.", 'a1-check'),
        eS('Vous devez me rappeler demain, quand vous aurez le temps.', 'Vous pourriez me rappeler demain, quand vous aurez le temps.', "Devez donne un ordre à quelqu'un dont tu attends un service. EN: devez orders the person you need a favour from.", 'a1-reperer'),
        tI('Mets le verbe au conditionnel.', 'Il (falloir) refaire la peinture.', 'Il faudrait refaire la peinture.', "falloir donne faudr-, toujours avec il. EN: falloir gives faudr-, always with il.", 'a1-lecture'),
        mc('« Selon l’agence, le loyer serait négociable. » Qui garantit cette information ?', ["l'agence", 'celui qui écrit'], 0, "Le conditionnel nomme la source et retire la garantie. EN: it names the source and withdraws the guarantee.", 'a1-lecture'),
        tI('Mets le verbe au conditionnel.', 'Nous (être) très intéressés.', 'Nous serions très intéressés.', "être donne ser-, et nous prend -ions. EN: être gives ser-.", 'a1-usages'),
        lC("Écoute. Cette phrase laisse-t-elle une porte ouverte ?", "Je voudrais visiter l'appartement.", ['Non, elle décide', 'Oui'], 1, "Voudrais ouvre ; veux ferme. EN: voudrais opens, veux closes.", 'a1-scene'),
      ],
    },
    {
      id: 'r2-recette', label: 'La recette', targets: ['terminaison-futur'],
      questions: [
        mc('Le conditionnel se forme avec...', ["le radical du futur et les fins de l'imparfait", "le radical de l'imparfait et les fins du futur", 'un radical à part'], 0, 'Deux morceaux que tu avais déjà. EN: two pieces you already owned.', 'a2-recette'),
        mc('Par quelle lettre finit toujours le radical ?', ['e', 'i', 'r'], 2, 'parler-, finir-, vendr-, ser-, aur-. EN: always r.', 'a2-check'),
        tI('Conjugue au conditionnel.', 'parler · nous', 'nous parlerions', "La case nous prend -ions, et le i s'entend. EN: the nous form takes -ions.", 'a2-fins'),
        mc('Combien des six formes se prononcent pareil ?', ['deux', 'trois', 'quatre'], 2, "je, tu, il et ils partagent [ʁɛ]. EN: four cells, one sound.", 'a2-fins'),
        eS('À ta place, nous vendrons la voiture.', 'À ta place, nous vendrions la voiture.', "« À ta place » pose une condition, donc le futur n'a rien à faire là. EN: à ta place sets a condition.", 'a2-erreurs'),
        tI('Conjugue au conditionnel.', 'vendre · je', 'je vendrais', "Le e de vendre tombe, le r reste. EN: the e drops, the r stays.", 'a2-construire'),
        mc('Qu’est-ce qui disparaît dans vendre avant la terminaison ?', ['le d', 'le e final', 'le r'], 1, 'Il reste vendr-. EN: vendr- is what is left.', 'a2-construire'),
        lC('Écoute. Combien de personnes partiraient plus tôt ?', 'Nous partirions plus tôt le vendredi.', ['plusieurs', 'une'], 0, "Le i de -ions s'entend. EN: the i is audible.", 'a2-ecoute'),
      ],
    },
    {
      id: 'r3-radical', label: 'Les radicaux', targets: ['radical-sans-r'],
      questions: [
        mc('Quel est le radical de faire au conditionnel ?', ['fais-', 'fer-', 'fair-'], 1, "Écrit fer-, prononcé [fuhr]. EN: written fer-, said [fuhr].", 'a3-cartes'),
        tI('Conjugue au conditionnel.', 'être · je', 'je serais', 'ser- plus -ais. EN: ser- plus -ais.', 'a3-construire'),
        mc('Avec quel pronom écrit-on faudrait ?', ['je', 'nous', 'il'], 2, "Falloir n'existe qu'avec il. EN: falloir is impersonal.", 'a3-table'),
        tI('Conjugue au conditionnel.', 'aller · je', "j'irais", "Le radical d'aller est ir-, le plus court du français. EN: ir- is the shortest stem.", 'a3-flash'),
        eS('À ta place, je faisais autrement.', 'À ta place, je ferais autrement.', "faisais vient du présent ; il manque le r du futur. EN: faisais comes from the present stem.", 'a3-piege'),
        mc('Combien de radicaux irréguliers cette leçon te fait-elle apprendre ?', ['quinze', 'six', 'aucun, tu les as déjà'], 2, `Ce sont ceux du futur, appris à ${FUTUR_IRR_REF}. EN: they are the future stems.`, 'a3-check'),
        tI('Conjugue au conditionnel.', 'pouvoir · vous', 'vous pourriez', 'pourr- plus -iez. EN: pourr- plus -iez.', 'a3-table'),
        lC('Écoute. Est-ce un souvenir, un conseil ou un ordre ?', 'Tu devrais te reposer un peu.', ['un souvenir', 'un ordre', 'un conseil'], 2, "devrais conseille ; devais raconterait hier. EN: devrais advises.", 'a3-piege'),
      ],
    },
    {
      id: 'r4-piege', label: 'Ai ou ais', targets: ['ai-pour-ais'],
      questions: [
        mc('« Demain, je parlerai au propriétaire. » Que dit cette phrase ?', ['un projet daté', 'une idée', 'un conseil'], 0, 'Demain date le projet. EN: demain dates the plan.', 'a4-paires'),
        mc('Quelle paire l’oreille sépare-t-elle facilement ?', ['je parlerai et je parlerais', 'il parlera et il parlerait', 'nous parlerons et nous parlerions'], 2, "Le i de -ions s'entend nettement. EN: the i of -ions is clearly audible.", 'a4-paires'),
        tI('Complète avec le bon temps.', 'À ta place, je (parler) au propriétaire.', 'À ta place, je parlerais au propriétaire.', "Une condition, donc le s. EN: a condition, so the s.", 'a4-construire'),
        mc('Quel test est le plus sûr quand tu écris ?', ['répéter plus fort', 'écouter la fin du mot', 'changer de personne pour entendre le i'], 2, "nous partirons ou nous partirions : là, l'oreille tranche. EN: the nous form settles it.", 'a4-indices'),
        eS('Dans ce cas, je signerai tout de suite.', 'Dans ce cas, je signerais tout de suite.', "« Dans ce cas » renvoie à une situation imaginée. EN: dans ce cas points at an imagined situation.", 'a4-piege'),
        tI('Complète avec le bon temps.', 'Dès que j’aurai les clés, je vous (envoyer) un message.', 'Dès que j’aurai les clés, je vous enverrai un message.', "Un moment réel à venir : pas de s. EN: a real future moment takes no s.", 'a4-piege'),
        mc('« Je finirais ce dossier ce soir, mais je suis fatigué. » Le dossier sera-t-il fini ?', ['Non', 'Oui'], 0, "Le mais retire ce que la première moitié proposait. EN: the mais withdraws the offer.", 'a4-construire'),
        lC('Écoute. Est-ce un projet ou une envie ?', 'Je prendrais volontiers le train de sept heures.', ['un projet', 'une envie'], 1, "Volontiers dit une envie, pas un billet acheté. EN: a wish, not a ticket.", 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-souhait', label: 'Le souhait', targets: ['souhait-brut'],
      questions: [
        mc('Laquelle suppose que deux options sont déjà sur la table ?', ['je voudrais', "j'aimerais", 'je préférerais'], 2, 'Préférer choisit entre des choses déjà posées. EN: préférer chooses between options.', 'a5-ouvertures'),
        tI("Recule la phrase d'un pas.", 'Je veux un rendez-vous jeudi matin.', 'Je voudrais un rendez-vous jeudi matin.', "Au comptoir, voudrais est la forme normale. EN: voudrais is the normal counter form.", 'a5-histoire'),
        mc('Après « j’aimerais », que met-on devant l’infinitif ?', ['rien', 'de', 'à'], 0, "L'infinitif arrive nu. EN: the infinitive comes bare.", 'a5-erreurs'),
        tI('Conjugue au conditionnel.', 'aimer · nous', 'nous aimerions', "Le radical est aimer-, la fin -ions. EN: aimer- plus -ions.", 'a5-exemples'),
        eS('J’aimerais bien de partir plus tôt.', 'J’aimerais bien partir plus tôt.', "L'anglais met un to, le français ne met rien. EN: English has to, French has nothing.", 'a5-erreurs'),
        mc('Le médecin demande ce qui ne va pas. Tu réponds...', ['Je voudrais avoir mal au dos.', "J'ai mal au dos."], 1, "Un fait reste au présent. EN: a fact stays in the present.", 'a5-choisir'),
        tI('Conjugue au conditionnel.', 'préférer · je', 'je préférerais', "Le radical garde tout l'infinitif. EN: the stem keeps the whole infinitive.", 'a5-ouvertures'),
        lC('Écoute. Est-ce une commande ou une envie racontée ?', "J'aimerais changer de travail cette année.", ['une envie racontée', 'une commande'], 0, "aimerais raconte une envie. EN: aimerais tells a wish.", 'a5-construire'),
      ],
    },
    {
      id: 'r6-demander', label: 'La demande', targets: ['demande-nue'],
      questions: [
        mc('Laquelle laisse le plus de place à un non ?', ['Passez-moi le sel.', 'Tu peux me passer le sel ?', 'Est-ce que ce serait possible ?'], 2, "Elle ne vise personne : c'est la chose qui est possible. EN: it asks about the thing.", 'a6-echelle'),
        mc('Quelle ouverture demande du TEMPS plutôt qu’une action ?', ['pourriez-vous', 'ça vous dérangerait de', 'auriez-vous'], 2, "Avoir donne une chose ou un moment. EN: avoir gives a thing or a moment.", 'a6-construire'),
        tI('Mets pouvoir au conditionnel.', 'Vous (pouvoir) me réveiller à six heures.', 'Vous pourriez me réveiller à six heures.', 'pourr- plus -iez. EN: pourr- plus -iez.', 'a6-histoire'),
        mc('Après pourriez-vous, écris-tu de devant le verbe ?', ['Oui', 'Seulement à l’écrit', 'Non'], 2, "Le de appartient à « possible de ». EN: the de belongs to possible de.", 'a6-erreurs'),
        eS('Pourriez-vous de m’envoyer le contrat ?', "Pourriez-vous m'envoyer le contrat ?", "Après pouvoir, l'infinitif arrive nu. EN: no de after pouvoir.", 'a6-erreurs'),
        tI('Mets avoir au conditionnel.', 'Vous (avoir) une minute ?', 'Vous auriez une minute ?', 'aur- plus -iez. EN: aur- plus -iez.', 'a6-cartes'),
        mc('Tu veux le sel, entre amis. Quelle forme choisis-tu ?', ['Ça te dérangerait de me passer le sel ?', 'Tu pourrais me passer le sel ?'], 1, "La politesse se mesure à la gêne réelle. EN: politeness matches the real trouble.", 'a6-check'),
        lC('Écoute. La personne dit tu ou vous ?', 'Tu pourrais me passer le sel ?', ['tu', 'vous'], 0, "« Tu pourrais » : on est entre amis. EN: tu, so this is between friends.", 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-conseil', label: 'Le conseil', targets: ['conseil-ordre'],
      questions: [
        mc('Quelle forme ne vise personne en particulier ?', ['tu devrais', 'à ta place', 'il faudrait'], 2, "Le travail est nommé, la personne non. EN: the task is named, the person is not.", 'a7-trois'),
        tI("Transforme l'ordre en conseil.", 'Tu dois visiter les deux avant de signer.', 'Tu devrais visiter les deux avant de signer.', 'devoir donne devr-. EN: devoir gives devr-.', 'a7-histoire'),
        mc('« Il faudra vérifier les charges. » Qu’as-tu dit ?', ['une obligation à venir', 'un conseil'], 0, "Le futur affirme ; le conditionnel propose. EN: the future asserts.", 'a7-piege'),
        tI('Mets devoir au conditionnel.', 'Vous (devoir) lire le contrat avant de signer.', 'Vous devriez lire le contrat avant de signer.', 'devr- plus -iez. EN: devr- plus -iez.', 'a7-construire'),
        eS('À ta place, je demanderai une réduction.', 'À ta place, je demanderais une réduction.', "Tu n'es pas à sa place, donc rien n'est daté. EN: you are not in their place.", 'a7-piege'),
        mc('Après « À ta place, je demanderais une réduction », qui décide ?', ['toi', 'ton ami', 'personne'], 1, "Tu donnes ton choix ; le sien lui appartient. EN: their decision is still theirs.", 'a7-check'),
        tI('Mets falloir au conditionnel.', 'Il (falloir) prévoir un budget pour les travaux.', 'Il faudrait prévoir un budget pour les travaux.', 'faudr- plus -ait. EN: faudr- plus -ait.', 'a7-construire'),
        lC('Écoute. Ordre ou conseil ?', 'Tu devrais te reposer un peu.', ['un conseil', 'un ordre'], 0, "Le s transforme l'ordre en avis. EN: the s turns an order into an opinion.", 'a7-hacks'),
      ],
    },
    {
      id: 'r8-modaux', label: 'Les trois verbes', targets: ['modal-present'],
      questions: [
        mc('Au conditionnel, pouvoir sert surtout à...', ['proposer', 'constater une capacité', 'interdire'], 0, 'Nous pourrions visiter : une option. EN: an option, not an ability.', 'a8-cartes'),
        mc('« Vous voudriez un café ? » est...', ['une demande', 'un conseil', 'une offre'], 2, "Avec vous, l'envie appartient à l'autre. EN: the wish belongs to them.", 'a8-check'),
        tI('Mets pouvoir au conditionnel.', 'Nous (pouvoir) visiter samedi matin.', 'Nous pourrions visiter samedi matin.', 'pourr- plus -ions. EN: pourr- plus -ions.', 'a8-construire'),
        mc('« Ils devraient arriver vers huit heures. » Est-ce un conseil ?', ['Oui', 'Non, une estimation'], 1, "Devoir au conditionnel dit aussi le probable. EN: devoir also states the likely.", 'a8-lecture'),
        eS('Nous pouvons visiter samedi matin, mais rien n’est décidé.', 'Nous pourrions visiter samedi matin, mais rien n’est décidé.', "La deuxième moitié dit que rien n'est fixé. EN: the second half says nothing is settled.", 'a8-cartes'),
        tI('Mets devoir au conditionnel.', 'Vous (devoir) commencer sans moi.', 'Vous devriez commencer sans moi.', 'devr- plus -iez. EN: devr- plus -iez.', 'a8-lecture'),
        mc('Combien de métiers devoir fait-il au conditionnel ?', ['un', 'deux', 'trois'], 1, "Il conseille, et il estime. EN: it advises, and it estimates.", 'a8-table'),
        lC('Écoute. La visite est-elle promise ?', 'Je pourrais passer vers midi.', ['Non, proposée', 'Oui'], 0, 'Pouvoir propose. EN: pouvoir proposes.', 'a8-ecoute'),
      ],
    },
    {
      id: 'r9-hypothese', label: "L'hypothèse", targets: ['hypothese-futur'],
      questions: [
        mc('Faut-il le mot si pour écrire un résultat imaginé ?', ['Oui, toujours', 'Non, avec ou sans suffisent'], 1, "La condition tient dans un groupe de mots. EN: a phrase is enough.", 'a9-regle'),
        tI('Mets le verbe au conditionnel.', 'Sans les travaux, le loyer (être) plus cher.', 'Sans les travaux, le loyer serait plus cher.', 'Sans pose la condition. EN: sans sets the condition.', 'a9-construire'),
        mc('Tu habites déjà à vingt minutes à pied. Tu dis...', ['On gagne une heure chaque matin.', 'On gagnerait une heure chaque matin.'], 0, "C'est vrai aujourd'hui, donc le présent. EN: it is true today.", 'a9-choisir'),
        tI('Mets le verbe au conditionnel.', 'Les enfants (adorer) le jardin.', 'Les enfants adoreraient le jardin.', "Le jardin n'est pas encore à eux. EN: the garden is not theirs yet.", 'a9-exemples'),
        eS('Avec un balcon, ce sera parfait.', 'Avec un balcon, ce serait parfait.', "Le balcon n'existe pas : avec pose une condition. EN: the balcony does not exist.", 'a9-erreurs'),
        mc('« J’irais volontiers, mais je travaille. » La personne ira-t-elle ?', ['Oui', 'Non', 'On ne peut pas savoir'], 1, "Le mais donne la condition en creux. EN: the mais gives the condition by negation.", 'a9-construire'),
        tI('Mets le verbe au conditionnel.', 'Dans ce cas, je (signer) tout de suite.', 'Dans ce cas, je signerais tout de suite.', "« Dans ce cas » renvoie à une situation imaginée. EN: an imagined situation.", 'a9-regle'),
        lC('Écoute. Est-ce vrai aujourd’hui ?', 'On gagnerait une heure chaque matin.', ['Oui', 'Non, c’est imaginé'], 1, "Rien de tout ça n'est encore arrivé. EN: none of it has happened yet.", 'a9-histoire'),
      ],
    },
    {
      id: 'r10-rumeur', label: 'La rumeur', targets: ['rumeur-affirmee'],
      questions: [
        mc('Que veut dire « le suspect serait en fuite » ?', ['il est en fuite', 'quelqu’un le dit, ce n’est pas vérifié', 'il sera en fuite'], 1, "La forme donne l'information et retire la garantie. EN: the claim without the guarantee.", 'a10-cartes'),
        mc('Faut-il toujours nommer la source ?', ['Non, la forme suffit', 'Oui'], 0, "« Il y aurait cinquante blessés » dit déjà le doute. EN: the form alone marks the doubt.", 'a10-focus'),
        tI("Rapporte l'information sans la garantir.", 'D’après le journal, l’usine (fermer) en juin.', 'D’après le journal, l’usine fermerait en juin.', "Le journal parle, pas toi. EN: the paper says it, not you.", 'a10-construire'),
        mc('Tu as vu le tram arrêté toi-même. Tu écris...', ['Le tram serait arrêté.', 'Le tram sera arrêté.', 'Le tram est arrêté.'], 2, "Ce que tu as vu, tu le signes. EN: what you saw, you sign for.", 'a10-piege'),
        eS('Selon la police, le suspect est en fuite.', 'Selon la police, le suspect serait en fuite.', "Le présent ferait signer la rédaction. EN: the present would make the newsroom sign.", 'a10-piege'),
        tI("Rapporte l'information sans la garantir.", 'Il y (avoir) une cinquantaine de blessés.', 'Il y aurait une cinquantaine de blessés.', "Le chiffre circule, il n'est pas confirmé. EN: the figure is circulating.", 'a10-lecture'),
        mc('Quelle phrase engage celui qui écrit ?', ['Rien ne serait signé.', 'Rien n’est signé.'], 1, "Le présent engage, le conditionnel protège. EN: the present commits.", 'a10-cartes'),
        lC('Écoute. Le chiffre est-il confirmé ?', 'Il y aurait une cinquantaine de blessés.', ['Oui', 'Non'], 1, "« Il y aurait » : rien n'est vérifié. EN: nothing is verified.", 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-tout', label: 'Tout ensemble', targets: ['recul-oublie'],
      questions: [
        mc('Tu écris à une agence que tu ne connais pas. Quelle ouverture ?', ['Je visiterai.', 'Je veux visiter.', 'Je voudrais visiter.'], 2, "L'ouverture normale d'un premier message. EN: the normal opener for a first message.", 'a11-plan'),
        tI('Mets le verbe au conditionnel.', 'Nous (être) disponibles à partir de dix heures.', 'Nous serions disponibles à partir de dix heures.', 'ser- plus -ions. EN: ser- plus -ions.', 'a11-lecture'),
        mc('Dans un courriel, qu’est-ce qui reste au présent ?', ['la demande', 'le remerciement de la fin', 'le souhait'], 1, "Le merci est un fait, pas une hypothèse. EN: the thanks is a fact.", 'a11-cheat'),
        tI('Mets le verbe au conditionnel.', 'Il (falloir) aussi prévoir un état des lieux.', 'Il faudrait aussi prévoir un état des lieux.', 'Une proposition qui ne vise personne. EN: a proposal aimed at nobody.', 'a11-plan'),
        eS('Demain, je signerais le bail.', 'Demain, je signerai le bail.', "Demain date le projet : le s n'a rien à faire là. EN: demain dates the plan.", 'a4-piege'),
        mc('Une seule de ces phrases ne recule pas. Laquelle ?', ['Je vous remercie d’avance.', 'Je voudrais également poser une question.', 'Ce serait plus simple.'], 0, "Le remerciement est vrai au moment où tu l'écris. EN: the thanks is true as you write it.", 'a11-lecture'),
        tI("Recule la phrase d'un pas.", 'Vous devez recevoir notre dossier demain.', 'Vous devriez recevoir notre dossier demain.', "Ici devoir estime, il n'ordonne pas. EN: here devoir estimates.", 'a11-usages'),
        lC('Écoute. Demande ou conseil ?', 'À votre place, je demanderais un rendez-vous plus tôt.', ['un conseil', 'une demande'], 0, "« À votre place » est la marque du conseil. EN: à votre place marks advice.", 'a11-scenario'),
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
    { front: 'la recette', back: "radical du futur + fins de l'imparfait", say: 'je parlerais, nous parlerions' },
    { front: 'le radical', back: 'il finit toujours par r', say: 'ser-, aur-, ir-, fer-, pourr-, voudr-, devr-' },
    { front: 'le souhait', back: "je voudrais, j'aimerais", say: "J'aimerais changer de travail cette année." },
    { front: 'la demande', back: 'pourriez-vous, auriez-vous', say: "Pourriez-vous m'envoyer le contrat ?" },
    { front: 'le conseil', back: 'tu devrais, il faudrait', say: 'Tu devrais prendre rendez-vous cette semaine.' },
    { front: 'à ta place', back: 'le conseil par la place', say: 'À ta place, je demanderais une réduction.' },
    { front: "l'hypothèse", back: 'ce serait, on gagnerait', say: 'On gagnerait une heure chaque matin.' },
    { front: 'la rumeur', back: 'selon, d’après', say: 'Selon la police, le suspect serait en fuite.' },
    { front: 'le piège', back: 'je parlerai contre je parlerais', say: 'Demain je parlerai, mais à ta place je parlerais.' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_ROUNDUP: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-roundup',
  layer: 'core',
  title: 'Un pas en arrière, en résumé',
  body: `${REFRAME} Tu as payé cette forme deux fois déjà, au futur et à l'imparfait, et elle te sert maintenant à souhaiter, à demander, à conseiller, à imaginer et à rapporter. La prochaine leçon prend la demande toute seule et en fait un métier complet, du service au bureau. EN: Next lesson takes the request on its own and builds the whole repertoire.`,
  points: [
    "La recette : radical du futur, terminaisons de l'imparfait.",
    'Le radical finit toujours par r, et les irréguliers sont ceux du futur.',
    'Une seule forme fait six métiers : la situation dit lequel.',
    "Le s de la case je ne s'entend pas : c'est le contexte qui l'écrit.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['recette', 'recul', 'piege'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11', title: 'Un pas en arrière, par écrit',
    opener: {
      line: "À toi d'écrire : ton souhait, ta demande, ta proposition, et ce que tu ne garantis pas. EN: Your turn to write: your wish, your request, your proposal, and what you are not vouching for.",
      imageRef: 'lessons/conditionnel-present/act11.jpg',
    },
    sections: [],
    milestone: "Tu as écrit ton propre courriel et passé l'examen : quatre-vingt-huit questions, onze rounds. EN: You wrote your own email and sat the exam: eighty-eight questions, eleven rounds.",
    estScreens: 140,
    restPoints: ['a11-plan', 'a11-scenario', 'a11-parler', 'a11-cheat', 'a11-progress', 'a11-quiz', 'a11-review'],
  },
  sections: [
    A11_LECTURE, A11_PLAN, A11_USAGES, A11_SCENARIO, A11_TASK, A11_PARLER,
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
  sheet('sheet-recette', 'La recette et les six fins', ['la règle', 'le tableau complet', 'futur ou conditionnel'], [
    teach('sheet-recette-teach', 'Deux morceaux, zéro nouveauté', `${REFRAME} Le radical est celui du futur et finit toujours par r. Les terminaisons sont celles de l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient. Quatre des six cases se prononcent pareil, alors c'est le pronom qui porte la personne. EN: ${REFRAME_EN} The stem is the future one and always ends in r; the endings are the imparfait ones, and four of the six sound identical.`),
    table('sheet-recette-table', 'parler, finir, vendre', ['Personne', 'parler', 'finir', 'vendre'], [
      ['je', 'je parlerais', 'je finirais', 'je vendrais'],
      ['tu', 'tu parlerais', 'tu finirais', 'tu vendrais'],
      ['il, elle, on', 'il parlerait', 'il finirait', 'il vendrait'],
      ['nous', 'nous parlerions', 'nous finirions', 'nous vendrions'],
      ['vous', 'vous parleriez', 'vous finiriez', 'vous vendriez'],
      ['ils, elles', 'ils parleraient', 'ils finiraient', 'ils vendraient'],
    ]),
    table('sheet-recette-paires', 'Futur ou conditionnel', ['Futur', 'Conditionnel', 'Ce que l’oreille fait'], [
      ['je parlerai', 'je parlerais', 'presque rien : le contexte décide'],
      ['je serai', 'je serais', 'presque rien : le contexte décide'],
      ['il parlera', 'il parlerait', '[ah] contre [eh] : audible'],
      ['nous parlerons', 'nous parlerions', 'le i : audible'],
      ['vous parlerez', 'vous parleriez', 'le i : audible'],
      ['ils parleront', 'ils parleraient', '[ohⁿ] contre [eh] : audible'],
    ]),
  ]),
  sheet('sheet-radicaux', 'Les radicaux irréguliers', ['les quinze radicaux', 'la même liste qu’au futur'], [
    teach('sheet-radicaux-teach', 'Rien de neuf à acheter', `Les radicaux irréguliers du conditionnel sont EXACTEMENT ceux du futur, appris à ${FUTUR_IRR_REF}. « ${B106_REFRAME} » Si tu sais dire « je serai », tu sais déjà dire « je serais ». EN: the irregular stems are the future ones; if you can say je serai, you can say je serais.`),
    table('sheet-radicaux-table', 'Quinze radicaux', ['Infinitif', 'Radical', 'Exemple'], [
      ['être', 'ser-', 'je serais'],
      ['avoir', 'aur-', "j'aurais"],
      ['aller', 'ir-', "j'irais"],
      ['faire', 'fer-', 'je ferais'],
      ['pouvoir', 'pourr-', 'je pourrais'],
      ['vouloir', 'voudr-', 'je voudrais'],
      ['devoir', 'devr-', 'je devrais'],
      ['savoir', 'saur-', 'je saurais'],
      ['venir', 'viendr-', 'je viendrais'],
      ['voir', 'verr-', 'je verrais'],
      ['falloir', 'faudr-', 'il faudrait'],
      ['envoyer', 'enverr-', "j'enverrais"],
      ['recevoir', 'recevr-', 'je recevrais'],
      ['tenir', 'tiendr-', 'je tiendrais'],
      ['pleuvoir', 'pleuvr-', 'il pleuvrait'],
    ]),
  ]),
  sheet('sheet-usages', 'Les six métiers du conditionnel', ['les six emplois', 'les ouvertures'], [
    teach('sheet-usages-teach', 'Une forme, six métiers', `${REFRAME} La forme ne change pas d'un emploi à l'autre : c'est la situation qui dit lequel des six tu es en train de faire. Quand tu hésites, demande-toi de quoi tu recules : d'une décision, d'un ordre, d'un fait, ou d'une garantie. EN: ${REFRAME_EN} One form, six jobs; ask what you are stepping back from.`),
    table('sheet-usages-table', 'Six emplois', ['Emploi', 'Ouverture', 'Exemple'], [
      ['le souhait', 'je voudrais, j’aimerais', "J'aimerais changer de travail cette année."],
      ['la demande', 'pourriez-vous, ce serait possible de', "Pourriez-vous m'envoyer le contrat ?"],
      ['le conseil', 'tu devrais, il faudrait, à ta place', 'Tu devrais prendre rendez-vous cette semaine.'],
      ['l’hypothèse', 'avec, sans, dans ce cas', 'On gagnerait une heure chaque matin.'],
      ['l’information rapportée', 'selon, d’après', 'Selon la police, le suspect serait en fuite.'],
      ['le scénario imaginé', 'moi, je...', 'Les enfants adoreraient le jardin.'],
    ]),
  ]),
  sheet('sheet-demander', 'Demander et conseiller', ['l’échelle des demandes', 'les trois conseils'], [
    teach('sheet-demander-teach', "Laisser la place de dire non", `Une demande au présent est déjà décidée ; au conditionnel, elle laisse une porte. Un ordre au présent est un ordre ; au conditionnel, c'est un conseil. Le répertoire complet des demandes polies est le sujet de ${POLI_REF} : ici tu as la forme, pas encore toute la gamme. EN: the conditional leaves a door open; the full polite repertoire comes later.`),
    table('sheet-demander-echelle', 'Du plus direct au plus prudent', ['Forme', 'Effet', 'Où'], [
      ['Passez-moi le sel.', 'un ordre', 'en famille, entre amis'],
      ['Tu peux me passer le sel ?', 'une demande directe', 'entre amis'],
      ['Tu pourrais me passer le sel ?', 'une demande souple', 'partout'],
      ['Pourriez-vous m’aider ?', 'une demande polie', 'guichet, bureau, courriel'],
      ['Est-ce que ce serait possible de...', 'une demande prudente', 'quand la réponse peut être non'],
      ['Ça vous dérangerait de...', 'une demande qui s’excuse', 'quand tu déranges vraiment'],
    ]),
    table('sheet-demander-conseils', 'Trois façons de conseiller', ['Forme', 'Qui est visé', 'Exemple'], [
      ['tu devrais, vous devriez', 'la personne en face', 'Vous devriez lire le contrat avant de signer.'],
      ['il faudrait', 'personne en particulier', 'Il faudrait vérifier les charges.'],
      ['à ta place, je...', 'toi, qui prends le risque', 'À ta place, je demanderais une réduction.'],
    ]),
  ]),
  sheet('sheet-ecrire', 'Écrire un message qui recule', ['le plan', 'la liste de contrôle'], [
    teach('sheet-ecrire-teach', 'Quatre morceaux', "Un message qui demande quelque chose tient en quatre morceaux : pourquoi tu écris, ce que tu souhaites, ce que tu demandes, et ce que tu proposes si la réponse est non. Le conditionnel porte les trois derniers. EN: why you write, what you wish, what you ask, what you offer if the answer is no."),
    table('sheet-ecrire-plan', 'Le plan', ['Morceau', 'Forme', 'Exemple'], [
      ['pourquoi tu écris', 'présent', "Je vous écris au sujet de l'appartement."],
      ['ce que tu souhaites', "j'aimerais, je voudrais", "J'aimerais savoir si la visite est confirmée."],
      ['ce que tu demandes', 'pourriez-vous', "Pourriez-vous me confirmer l'adresse ?"],
      ['ce que tu proposes', 'il faudrait, ce serait', 'Il faudrait aussi prévoir un état des lieux.'],
      ['ta disponibilité', 'nous serions', 'Nous serions disponibles à partir de dix heures.'],
      ['la sortie', 'présent', "Je vous remercie d'avance de votre réponse."],
    ]),
    table('sheet-ecrire-controle', 'La liste de contrôle', ['À vérifier', 'Comment'], [
      ['Aucun ordre', 'Cherche vous devez et remplace par vous devriez'],
      ['Un souhait au début', "j'aimerais ou je voudrais, une seule fois"],
      ['Une vraie demande', 'Une question avec pourriez-vous ou auriez-vous'],
      ['Le bon s', 'Relis chaque -rai : si ce n’est pas un projet daté, il manque un s'],
      ['Pas de si + conditionnel', "Après si, on n'écrit jamais je serais"],
      ['Une sortie polie', 'Une phrase de remerciement au présent'],
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
  { id: 'd-recul', title: 'Décidé ou ouvert', format: 'sort' as const, coach: "Deux piles. Demande-toi : est-ce que l'autre peut encore répondre autre chose que oui ? EN: sort by whether the other person can still answer.", buckets: ['décidé', 'ouvert'], items: [E(600), E(601), E(602), E(603), E(604), E(605)], audio: AUDIO },
  { id: 'd-recette', title: 'Radical plus fin', format: 'mcq' as const, coach: "Le radical vient du futur, la fin vient de l'imparfait. EN: future stem, imparfait ending.", q: 'À ta place, je ... au propriétaire.', opts: ['parlais', 'parlerais'], correct: 1, why: "Il faut le r du futur devant la fin de l'imparfait. EN: the future r goes before the imparfait ending.", items: [E(612), E(615), E(618), E(621), E(622), E(630)], audio: AUDIO },
  { id: 'd-radical', title: 'Quinze radicaux', format: 'flashcard' as const, coach: 'Lis chaque forme à voix haute et redis le radical tout seul. EN: read each form aloud, then say the stem on its own.', items: [E(638), E(640), E(642), E(643), E(645), E(653)], audio: AUDIO },
  { id: 'd-piege', title: 'Avec ou sans s', format: 'mcq' as const, coach: "Cherche le mot de temps ou la condition avant de choisir. EN: look for the time word or the condition first.", q: 'Demain, je ... au propriétaire.', opts: ['parlerai', 'parlerais'], correct: 0, why: 'Demain date le projet, donc pas de s. EN: demain dates the plan.', items: [E(668), E(669), E(672), E(673), E(674), E(675)], audio: AUDIO },
  { id: 'd-souhait', title: 'Trois ouvertures', format: 'flashcard' as const, coach: "Pour chaque carte, dis la situation où tu l'emploierais. EN: for each card, say where you would use it.", items: [E(678), E(679), E(680), E(681), E(682), E(685)], audio: AUDIO },
  { id: 'd-demander', title: 'Laisser dire non', format: 'mcq' as const, coach: "Plus la gêne est grande, plus la demande recule. EN: the bigger the trouble, the further the request steps back.", q: 'Au guichet : « ... me confirmer l’adresse ? »', opts: ['Vous devez', 'Pourriez-vous'], correct: 1, why: "Pourriez-vous laisse la place de dire non. EN: pourriez-vous leaves room to refuse.", items: [E(694), E(697), E(699), E(702), E(703), E(705)], audio: AUDIO },
  { id: 'd-conseil', title: 'Ordre ou conseil', format: 'sort' as const, coach: 'Deux piles : ce qui commande et ce qui propose. EN: sort what commands from what proposes.', buckets: ['un ordre', 'un conseil'], items: [E(602), E(604), E(713), E(715), E(716), E(722)], audio: AUDIO },
  { id: 'd-modaux', title: 'Les trois verbes', format: 'mcq' as const, coach: 'pouvoir propose, vouloir souhaite, devoir conseille ou estime. EN: propose, wish, advise or estimate.', q: 'Nous ... visiter samedi matin.', opts: ['pourrions', 'pouvons'], correct: 0, why: "Rien n'est décidé, donc on propose. EN: nothing is settled, so it is a proposal.", items: [E(729), E(735), E(737), E(739), E(740), E(742)], audio: AUDIO },
  { id: 'd-hypothese', title: 'Réel ou imaginé', format: 'sort' as const, coach: "Une pile pour ce qui est vrai aujourd'hui, une pile pour ce qui ne l'est pas. EN: true today, or not.", buckets: ['le réel', "l'imaginé"], items: [E(600), E(744), E(746), E(755), E(756), E(758)], audio: AUDIO },
  { id: 'd-rumeur', title: 'Qui signe', format: 'mcq' as const, coach: "Demande-toi si tu l'as vu toi-même. EN: ask whether you saw it yourself.", q: 'Selon la police, le suspect ... en fuite.', opts: ['est', 'serait'], correct: 1, why: "La police le dit ; toi, tu rapportes. EN: the police say it; you are repeating it.", items: [E(762), E(763), E(765), E(769), E(771), E(775)], audio: AUDIO },
  { id: 'd-ecrire', title: 'Le courriel, morceau par morceau', format: 'flashcard' as const, coach: "Lis chaque phrase et dis quel morceau du plan elle occupe. EN: name which part of the plan each sentence fills.", items: [E(776), E(777), E(779), E(780), E(784), E(789)], audio: AUDIO },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'tout-au-present', description: 'Asks, advises and speculates in the present, so every sentence arrives as a decision already taken and the reader has nothing left to answer.', detectOn: ['a1-scene', 'a1-reperer', 'a1-check', 'a11-mission'], drill: 'd-recul', retest: 'd-recul' },
  { id: 'terminaison-futur', description: 'Builds the conditional with the future endings, or attaches the imparfait endings to the present stem, so the r of the future stem goes missing.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-recette', retest: 'd-recette' },
  { id: 'radical-sans-r', description: 'Writes the imparfait of an irregular verb in place of its conditional: je faisais for je ferais, je voulais for je voudrais.', detectOn: ['a3-construire', 'a3-piege', 'a3-check'], drill: 'd-radical', retest: 'd-radical' },
  { id: 'ai-pour-ais', description: 'Chooses between -ai and -ais by ear, so a dated plan gains an s and an imagined result loses one.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-piege', retest: 'd-piege' },
  { id: 'souhait-brut', description: 'States a wish in the present, or opens every wish with the same formula whatever the situation, so the choice between voudrais, aimerais and préférerais is never made.', detectOn: ['a5-construire', 'a5-choisir', 'a5-erreurs', 'a11-mission'], drill: 'd-souhait', retest: 'd-souhait' },
  { id: 'demande-nue', description: 'Asks for a service in the present, or reaches straight for the heaviest polite form whatever the trouble caused.', detectOn: ['a6-construire', 'a6-erreurs', 'a6-check', 'a11-mission'], drill: 'd-demander', retest: 'd-demander' },
  { id: 'conseil-ordre', description: 'Gives advice with the present or the future of devoir and falloir, so an opinion is delivered as an instruction.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-conseil', retest: 'd-conseil' },
  { id: 'modal-present', description: 'Keeps pouvoir, vouloir and devoir in the present where the sentence is proposing, offering or estimating rather than stating a fact.', detectOn: ['a8-construire', 'a8-cartes', 'a8-check'], drill: 'd-modaux', retest: 'd-modaux' },
  { id: 'hypothese-futur', description: 'Uses the future for the result of a situation that does not exist, or the conditional for something that is already true.', detectOn: ['a9-construire', 'a9-choisir', 'a9-erreurs'], drill: 'd-hypothese', retest: 'd-hypothese' },
  { id: 'rumeur-affirmee', description: 'Repeats an unverified claim in the present, taking on a guarantee the speaker cannot give, or hedges a fact they witnessed themselves.', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a11-mission'], drill: 'd-rumeur', retest: 'd-rumeur' },
  { id: 'recul-oublie', description: 'Writes a whole message with the right forms but the wrong jobs: no wish, no request, or an order left standing in the middle.', detectOn: ['a11-mission', 'a11-plan', 'a11-scenario'], drill: 'd-ecrire', retest: 'd-ecrire' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-08-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-08-annonce': "The listing and the two emails (act 1), one female Belgian voice, one take, read at dictation pace. The quoted listing is read a shade flatter than the narration so the learner hears a document being read out. Every final -rait is a clean [ɛ] with no audible t.",
  'rec-b1-08-recette': "Karim and the coach (act 2), two voices, one take. The coach is unhurried and slightly amused: the whole point of the exchange is that nothing new is being sold. The four deck cards are read by the same coach voice.",
  'rec-b1-08-fins': "The six endings deck. Read -ais, -ait and -aient identically, with no helpful extra stress, because the card's claim is that they ARE identical. Let the -ions and -iez cards breathe the i.",
  'rec-b1-08-recette-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed. The nous and vous forms must not be over-articulated; the learner is meant to hear an ordinary sentence and find the i in it.',
  'rec-b1-08-radicaux': 'The four irregular-stem cards (act 3). One coach voice. Say the stem and the full form as one breath, not as two separate items: the card claims they are the same thing.',
  'rec-b1-08-piege-radical': "The audio step plays each card's CORRECT sentence. Read the six plainly and identically in pace; the imparfait versions in promptSound are NEVER spoken. The r must be audible in every one of the six.",
  'rec-b1-08-lettre': 'Karim and the coach (act 4), two voices, one take. Karim reads his own draft sentence flat, as someone rereading their screen. The coach is matter of fact, never triumphant.',
  'rec-b1-08-paires': 'The four pair cards (act 4). The je pair MUST be read naturally, with no exaggerated separation of [e] and [ɛ]: the card says most speakers barely separate them, so a helpful reading would contradict the lesson. The nous and vous pairs are read normally, where the i does the work.',
  'rec-b1-08-paires-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace. The je forms carry no extra help; the learner answers from the time words and the conditions, which is the whole point of the act.',
  'rec-b1-08-piege-paires': "The audio step plays each card's CORRECT sentence. Six lines, same pace, same voice. Do not lean on the final syllable.",
  'rec-b1-08-guichet': 'The two travellers at the ticket counter (act 5). ONE TAKE, and the clerk must be read identically both times: the mission only works if nothing changes except the traveller sentence.',
  'rec-b1-08-souhait': 'The three wish openers (act 5). One voice. Je voudrais is brisk and businesslike, j’aimerais is warmer and slower, je préférerais lands on the second option. The difference in delivery IS the teaching.',
  'rec-b1-08-reception': 'The hotel reception exchange (act 6), two voices, one take. The receptionist answers the first request with a flat confirmation and the second with a genuine question, and the gap between those two deliveries is what the act is about.',
  'rec-b1-08-demander': 'The four request openers (act 6). One voice, rising politely on each question, with no sarcasm anywhere: these are ordinary forms, not performances of deference.',
  'rec-b1-08-demander-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order. Line two uses tu and line seven uses vous; the register difference must be carried by the words alone, not by a change of voice.',
  'rec-b1-08-conseil': 'Awa and Karim in a café (act 7), two voices, one take, and the deck cards read by the coach voice. Karim’s first line lands as an instruction and his third as an opinion; Awa’s reaction in between must not be annoyed, only unhelped.',
  'rec-b1-08-piege-conseil': "The audio step plays each card's CORRECT sentence. Six lines, one voice. The future versions in promptSound are never spoken.",
  'rec-b1-08-groupe': 'The group message thread (act 8), read as three separate voices: Karim, Awa and Malik. One take each is fine, but the three voices must be clearly distinct, because the reading questions turn on who proposes and who advises.',
  'rec-b1-08-modaux': 'The pouvoir, vouloir, devoir deck (act 8). One voice. The fourth card is devoir ESTIMATING rather than advising, so it is read as a calculation, not as a suggestion.',
  'rec-b1-08-modaux-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, conversational pace.',
  'rec-b1-08-trottoir': 'Karim and Awa on the pavement after the viewing (act 9), two voices, one take. Everything is imagined, so the delivery stays light and quick; nothing here should sound like a decision.',
  'rec-b1-08-hypothese': 'The four hypothesis cards (act 9). One voice. The fourth card quotes a full si sentence: read it as an ordinary sentence, with no pause at si, because the act deliberately does not dwell on it.',
  'rec-b1-08-bulletin': 'The one o clock news bulletin (act 10), ONE news-reader voice, France or Belgium, at real bulletin pace. Every conditional is read completely flat: a newsreader does not signal doubt with the voice, only with the verb. The one present-tense sentence is read at the same pace as the rest.',
  'rec-b1-08-rumeur': 'The four reported-speech cards (act 10). Same flat news delivery as the bulletin. The fourth card holds a contrast pair; read both halves identically so only the verb separates them.',
  'rec-b1-08-bulletin-ecoute': 'REQUIRED FOR THE EAR MISSION: eight lines, ONE TAKE, ONE VOICE, authored order, bulletin pace. No pause before or after selon and d’après, or the learner hears the source instead of the verb.',
  'rec-b1-08-piege-rumeur': "The audio step plays each card's CORRECT sentence. Six lines, one voice, flat. Three of the six are in the present because the speaker witnessed them, and they are read exactly like the other three.",
  'rec-b1-08-modele': 'The model email (act 11), one voice, read as someone reading a message aloud rather than performing it. The four parts must be audible through the pauses: why I write, my wish, my request, my proposal.',
};

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 08',
  intro: 'You can already build the future stem and the imparfait endings. The present conditional is those two things glued together, which makes it the cheapest form you will ever buy. What it costs instead is judgement: one form does six different jobs, from asking for a coffee to reporting what the police have not confirmed, and the spelling difference between je parlerai and je parlerais is almost inaudible.',
  skill: 'PE',
  grammarAssumed: [IMP_FORM_UNIT, FUTUR_REG_UNIT, FUTUR_IRR_UNIT, FUTUR_USE_UNIT, MODAUX_UNIT, ALLER_UNIT, SAVOIR_UNIT],
  grammarIntroduced: [
    'Formation of the present conditional: the future stem plus the imparfait endings -ais, -ais, -ait, -ions, -iez, -aient',
    'The irregular conditional stems, identical to the irregular future stems and reused rather than retaught',
    'The je parlerai / je parlerais contrast: [e] against [ɛ], settled by context rather than by ear, and the persons where the contrast is audible',
    'The conditional of wish and desire: je voudrais, j’aimerais, je préférerais',
    'The conditional as request softener: pourriez-vous, auriez-vous, ça vous dérangerait de, est-ce que ce serait possible de',
    'The conditional of advice: tu devrais, vous devriez, il faudrait, il vaudrait mieux, à ta place je ferais',
    'pouvoir, vouloir and devoir in the conditional as the three verbs that carry most everyday softening',
    'The result half of a hypothetical, with the condition carried by a prepositional phrase rather than a si clause',
    'The journalistic conditional: reported information the speaker does not vouch for, introduced by selon or d’après',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu sais déjà former le radical du futur et les terminaisons de l'imparfait. Le conditionnel présent, c'est les deux collés : c'est la forme la moins chère de ton année. Ce qu'elle coûte, c'est du jugement. Une seule forme fait six métiers, du café qu'on commande à l'information que la police n'a pas confirmée, et l'écart entre je parlerai et je parlerais s'entend à peine.",
    minutes: 120,
    difficulty: 3,
    glyph: 'ais',
    screens: 0,
  },
  reframe: REFRAME,
  acts: ACTS.map((a) => ({ ...a.act, sections: a.sections.map((s) => s.id as string) })),
  errorTriggers: TRIGGER_LIST,
  drills: DRILL_LIST,
  deckTranche: DECK_TRANCHE,
  sheets: SHEET_LIST,
  terms: CONDITIONNEL_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, READING_MODELE, dicteeFor };
